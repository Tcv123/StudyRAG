/**
 * Mark a student's answer to ONE past-paper part against the actual exam-board
 * mark scheme. Used by paper-attempt.html during the qbq self-marking phase.
 *
 * The crucial difference from /api/mark-essay: this endpoint is grounded on
 * the real, official mark-scheme points (passed in `markScheme`). The model
 * is told to award marks ONLY for points present in the scheme, not on
 * general examiner vibes.
 *
 * Powered by Groq (Llama 3.3 70B). Required Vercel env vars:
 *   GROQ_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 *
 * Pro-gated via Supabase (same pattern as /api/mark-essay).
 */
const Groq = require('groq-sdk');
const { createClient } = require('@supabase/supabase-js');

let groq = null;
let supabaseAdmin = null;
function initClients() {
  if (!process.env.GROQ_API_KEY)              return { code: 502, body: { error: 'groq_api_key_missing',  message: 'GROQ_API_KEY env var is not set on Vercel.' } };
  if (!process.env.SUPABASE_URL)              return { code: 502, body: { error: 'supabase_url_missing',    message: 'SUPABASE_URL env var is not set on Vercel.' } };
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return { code: 502, body: { error: 'supabase_key_missing',    message: 'SUPABASE_SERVICE_ROLE_KEY env var is not set on Vercel.' } };
  if (!groq) groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  if (!supabaseAdmin) {
    supabaseAdmin = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false, autoRefreshToken: false } }
    );
  }
  return null;
}

function buildSystemPrompt({ subject, board, paperCode, msType }) {
  const examLevel = 'A-level';
  return `You are an experienced ${board} ${examLevel} ${subject} examiner marking paper ${paperCode || 'this paper'}. You mark STRICTLY against the official mark scheme supplied below. Do not award marks for content not present in the mark scheme — even if the answer is correct in real life, only the listed points count.

Your job:
1. Read the student's answer carefully.
2. Check it against EACH mark-scheme point.
3. Decide which points the answer covers (in substance — exact wording isn't required, but the underlying idea must be present).
4. Apply the guidance notes (case sensitivity, "do not allow" rules, dependencies between points, etc.).
5. ${msType === 'levels' ? 'Pick the highest level whose criteria the answer fully meets, then a mark within that level.' : 'Award 1 mark per point covered, up to the part\'s max marks.'}

You MUST respond with a single JSON object and nothing else. Schema:
{
  "awarded": integer — marks awarded (0 to max),
  "total": integer — max marks,
  "pointsHit": array of integers — 0-based indices of mark-scheme points the answer covered (only meaningful for 'points' / 'exact' schemes; can be empty array for 'levels'),
  "level": string — for 'levels' schemes only, the chosen level descriptor (e.g. "Mid Level (5-8 marks)"); empty string for points/exact,
  "notes": string — 1-3 sentences explaining why this mark was awarded; reference specific mark-scheme points by name; never longer than 280 characters
}

No prose outside the JSON. No markdown code fences.`;
}

function buildUserPrompt({ partCode, question, marks, studentAnswer, markScheme, preamble, scenario }) {
  const lines = [];
  lines.push(`Part code: ${partCode}`);
  lines.push(`Marks available: ${marks}`);
  if (scenario)  lines.push(`\nQUESTION SCENARIO:\n${scenario}`);
  if (preamble)  lines.push(`\nQUESTION PREAMBLE:\n${preamble}`);
  lines.push(`\nQUESTION:\n${question}`);

  lines.push(`\nOFFICIAL MARK SCHEME (type: ${markScheme.type}):`);
  if (markScheme.type === 'levels') {
    (markScheme.levels || []).forEach(lvl => {
      const r = Array.isArray(lvl.range) ? `${lvl.range[0]}–${lvl.range[1]} marks` : '';
      lines.push(`\n${lvl.descriptor} (${r}):\n${lvl.criteria}`);
    });
    if (markScheme.indicative) {
      Object.entries(markScheme.indicative).forEach(([k, v]) => {
        lines.push(`\nIndicative content ${k}: ${v}`);
      });
    }
  } else {
    (markScheme.points || []).forEach((p, i) => {
      lines.push(`  [${i}] ${p}`);
    });
  }
  if (markScheme.guidance) {
    lines.push(`\nGUIDANCE: ${markScheme.guidance}`);
  }

  lines.push(`\nSTUDENT ANSWER:\n${studentAnswer || '(no answer submitted)'}`);

  lines.push(`\nMark the student's answer out of ${marks} using ONLY the listed mark-scheme points. Return the JSON object.`);
  return lines.join('\n');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  const initErr = initClients();
  if (initErr) return res.status(initErr.code).json(initErr.body);

  try {
    // ---- Auth ----
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ error: 'no_token' });
    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
    const user = userData?.user;
    if (userErr || !user) {
      return res.status(401).json({ error: 'invalid_token', message: userErr?.message || 'No user for token.' });
    }

    // ---- Pro gate ----
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('subscription_tier, subscription_status, subscription_expires_at')
      .eq('id', user.id)
      .single();
    const tier = profile?.subscription_tier || 'free';
    const status = profile?.subscription_status || 'active';
    const exp = profile?.subscription_expires_at ? new Date(profile.subscription_expires_at) : null;
    const isPro = tier !== 'free' && ['active', 'trialing'].includes(status) && (!exp || exp > new Date());
    if (!isPro) return res.status(403).json({ error: 'pro_required' });

    // ---- Validate body ----
    const body = req.body || {};
    const { partCode, question, marks, studentAnswer, markScheme,
            subject, board, paperCode, scenario, preamble } = body;

    if (!partCode || typeof partCode !== 'string') return res.status(400).json({ error: 'missing_partCode' });
    if (!question || typeof question !== 'string') return res.status(400).json({ error: 'missing_question' });
    if (typeof marks !== 'number' || marks < 1)     return res.status(400).json({ error: 'invalid_marks' });
    if (!markScheme || typeof markScheme !== 'object') return res.status(400).json({ error: 'missing_markScheme' });
    if (!markScheme.type) return res.status(400).json({ error: 'missing_markScheme_type' });
    if (typeof studentAnswer !== 'string')          return res.status(400).json({ error: 'missing_studentAnswer' });
    if (studentAnswer.length > 12000)               return res.status(413).json({ error: 'answer_too_long' });

    // Treat empty/whitespace-only answers as zero without burning an API call.
    if (!studentAnswer.trim()) {
      return res.status(200).json({
        result: {
          awarded: 0, total: marks, pointsHit: [], level: '',
          notes: 'No answer was written for this part, so 0 marks are awarded.'
        },
        skipped: true
      });
    }

    // ---- Call Groq ----
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: buildSystemPrompt({ subject: subject || 'Computer Science', board: board || 'OCR', paperCode, msType: markScheme.type }) },
        { role: 'user',   content: buildUserPrompt({ partCode, question, marks, studentAnswer, markScheme, preamble, scenario }) },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.1,
      max_tokens: 1024,
    });

    const text = completion.choices?.[0]?.message?.content || '';
    if (!text.trim()) {
      return res.status(502).json({ error: 'no_output', message: 'Groq returned an empty response.' });
    }
    let result;
    try { result = JSON.parse(text); }
    catch (e) {
      console.error('mark-against-scheme: failed to parse Groq JSON', text.slice(0, 500));
      return res.status(502).json({ error: 'parse_failed', message: 'Groq returned malformed JSON.' });
    }

    // Clamp + sanity-check
    if (typeof result.awarded === 'number') {
      result.awarded = Math.max(0, Math.min(marks, Math.round(result.awarded)));
    } else {
      result.awarded = 0;
    }
    result.total = marks;
    if (!Array.isArray(result.pointsHit)) result.pointsHit = [];
    // Trim hits to valid indices for 'points'/'exact' schemes.
    if (markScheme.type !== 'levels' && Array.isArray(markScheme.points)) {
      result.pointsHit = result.pointsHit
        .filter(i => Number.isInteger(i) && i >= 0 && i < markScheme.points.length);
    }
    if (typeof result.level !== 'string')  result.level = '';
    if (typeof result.notes !== 'string')  result.notes = '';

    return res.status(200).json({ result, usage: completion.usage });
  } catch (err) {
    console.error('mark-against-scheme error:', err);
    const msg = String(err?.message || err);
    if (/429|rate.?limit|quota/i.test(msg))    return res.status(429).json({ error: 'rate_limited',    message: msg });
    if (/401|API key|invalid.*key/i.test(msg)) return res.status(502).json({ error: 'api_key_invalid', message: msg });
    return res.status(500).json({ error: 'internal_error', message: msg });
  }
};
