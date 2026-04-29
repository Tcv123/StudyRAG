const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_VERSION = '2023-06-01';
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    // ---- Auth check ----
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ error: 'no_token' });

    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
    const user = userData?.user;
    if (userErr || !user) return res.status(401).json({ error: 'invalid_token' });

    // ---- Pro check ----
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

    // ---- API key present? ----
    if (!ANTHROPIC_API_KEY) {
      return res.status(500).json({
        error: 'api_key_missing',
        message: 'ANTHROPIC_API_KEY is not set in Vercel environment variables.'
      });
    }

    // ---- Validate input ----
    const { mode, question, answer, subject, board, topic, marks, command, level } = req.body || {};
    if (!mode || !question) return res.status(400).json({ error: 'bad_request', message: 'mode and question are required' });
    if (mode === 'mark' && (!answer || answer.trim().length < 30)) {
      return res.status(400).json({ error: 'no_answer', message: 'Answer must be at least 30 characters' });
    }

    // ---- Build prompt ----
    const systemPrompt = buildSystemPrompt({ subject, board, level });
    const userPrompt = mode === 'mark'
      ? buildMarkPrompt({ question, answer, marks, command, topic })
      : buildModelPrompt({ question, marks, command, topic });

    // ---- Call Claude (assistant prefilled with `{` to force JSON output) ----
    const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': ANTHROPIC_VERSION,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2500,
        system: systemPrompt,
        messages: [
          { role: 'user', content: userPrompt },
          { role: 'assistant', content: '{' }
        ]
      })
    });

    if (!claudeRes.ok) {
      const errText = await claudeRes.text().catch(() => '');
      console.error('Claude API error', claudeRes.status, errText);
      return res.status(502).json({
        error: 'claude_error',
        status: claudeRes.status,
        message: `Claude API returned ${claudeRes.status}. ${errText.slice(0, 200)}`
      });
    }

    const claudeData = await claudeRes.json();
    const rawText = '{' + (claudeData.content?.[0]?.text || '');

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch (e) {
      // Try to extract JSON if Claude wrapped it in extra prose
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) {
        try { parsed = JSON.parse(match[0]); } catch (_) {}
      }
      if (!parsed) {
        return res.status(502).json({
          error: 'parse_error',
          message: 'AI returned malformed JSON',
          raw: rawText.slice(0, 500)
        });
      }
    }

    return res.status(200).json({
      ok: true,
      mode,
      feedback: parsed,
      usage: claudeData.usage
    });
  } catch (err) {
    console.error('Mark handler error:', err);
    return res.status(500).json({ error: 'server_error', message: err.message || String(err) });
  }
};

function buildSystemPrompt({ subject, board, level }) {
  const levelLabel = level === 'gcse' ? 'GCSE' : 'A-Level';
  return `You are a UK ${levelLabel} examiner for ${subject || 'this subject'} (${board || 'this board'}).
You mark answers strictly against the published mark scheme conventions, awarding marks for AO1 (knowledge), AO2 (application) and AO3 (analysis / evaluation) where applicable.
You are precise, fair and constructive — your job is to help the student push to the top band.
Respond with VALID JSON ONLY. No prose outside the JSON. No markdown code fences. No explanatory text. The response must start with { and end with }.`;
}

function buildMarkPrompt({ question, answer, marks, command, topic }) {
  return `Mark this student's exam answer.

QUESTION: ${question}
TOTAL MARKS: ${marks}
COMMAND WORD: ${command}
TOPIC: ${topic || 'unspecified'}

STUDENT'S ANSWER:
"""
${answer}
"""

Return JSON in EXACTLY this shape:
{
  "estimatedBand": "Level 3 / 4",
  "estimatedScore": 8,
  "totalMarks": ${marks},
  "bandDescriptor": "Clear and detailed (one short phrase)",
  "scoreNote": "↑ One band off the top (or similar one-line note)",
  "whatScored": ["3 to 5 specific things the student did well — quote phrases from their answer where possible"],
  "whatsHoldingBack": ["3 to 5 specific things missing or weak — be concrete, not generic"],
  "pushToTopBand": ["3 to 4 actionable bullet points to reach the top band"],
  "modelParagraph": "A single top-band paragraph (60-100 words) directly answering the question, with named examples and data, and a clear judgement that addresses the command word \\"${command}\\"."
}

Use HTML <em> and <strong> tags inside string values for emphasis where helpful. Do not use markdown.`;
}

function buildModelPrompt({ question, marks, command, topic }) {
  return `The student does not know how to answer this question and wants a top-band model.

QUESTION: ${question}
TOTAL MARKS: ${marks}
COMMAND WORD: ${command}
TOPIC: ${topic || 'unspecified'}

Return JSON in EXACTLY this shape:
{
  "structureTips": [
    "4 bullet points on how a top-band ${command} answer is structured for this specific question. Each bullet should be one clear sentence."
  ],
  "modelParagraph": "A single top-band paragraph (60-100 words) directly answering the question, with named examples and data, and a clear judgement that addresses the command word \\"${command}\\"."
}

Use HTML <em> and <strong> tags inside string values for emphasis where helpful. Do not use markdown.`;
}
