/**
 * AI-generated model answer — backend for ai-feedback.html.
 *
 * Asks Gemini for a top-band model answer scaled to the mark allocation
 * (so a 6-mark question gets a focused paragraph, a 25-mark question gets a
 * full essay). Pro-gated; Gemini API key stays server-side.
 *
 * Required Vercel environment variables:
 *   GEMINI_API_KEY            — from https://aistudio.google.com/apikey
 *   SUPABASE_URL              — already set
 *   SUPABASE_SERVICE_ROLE_KEY — already set
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

// Stable identity for a question: sha256(trimmed text). Same wording → same
// hash regardless of where it appears, so two boards using the identical
// question still get one cached answer per board (key includes subject+board+level).
function questionHash(text) {
  return crypto.createHash('sha256').update(String(text).trim()).digest('hex');
}

function buildSystemPrompt({ subject, board, level }) {
  const examLevel = level === 'alevel' ? 'A-level' : 'GCSE';
  return `You are a senior ${examLevel} ${subject} examiner for the ${board} exam board, writing a top-band model answer that demonstrates full-mark quality.

Scale the length and depth of your answer to the mark allocation:
- 4-6 marks: one focused paragraph (~120-180 words). Cover the key points clearly.
- 7-9 marks: two paragraphs (~220-320 words) with clear structure.
- 10-12 marks: three paragraphs (~350-450 words). Introduce, develop with balanced analysis, conclude with a judgement.
- 14-16 marks: four paragraphs (~500-650 words). Sustained argument with developed analysis and a justified conclusion.
- 18-20 marks: full essay (~650-800 words). Clear thesis, structured paragraphs, balanced evaluation, judged conclusion.
- 22-25 marks: extended essay (~800-1000 words). Sophisticated argument, multiple perspectives, weighted evaluation, and a justified judgement.

Quality requirements:
- Demonstrate the level of knowledge, application, analysis and evaluation appropriate to the command word.
- Use accurate technical terminology for the subject.
- Where the command word demands evaluation/discussion/assessment ('Discuss', 'Assess', 'Evaluate', 'To what extent'), include balanced argument and a clear, justified judgement.
- Where the command word is descriptive ('Describe', 'Explain', 'Compare'), be precise and structured rather than evaluative.
- Write in flowing prose, like a real exam answer. No bullet points, no numbered lists, no section headings unless they're conventional for the subject.
- Do not introduce yourself, do not preface with "Here is..." or "This essay will...", do not comment on the question — go straight into the answer.

Output: just the model answer text. No preamble, no metadata, no closing remarks.`;
}

function buildUserPrompt({ question, marks, command, topicName }) {
  return `Topic: ${topicName || '(unspecified)'}
Command word: ${command || '(unspecified)'}
Marks available: ${marks}

QUESTION:
${question}

Write a top-band model answer scaled to ${marks} marks.`;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    // ---- Auth ----
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ error: 'no_token' });

    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
    const user = userData?.user;
    if (userErr || !user) return res.status(401).json({ error: 'invalid_token' });

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
    const { question, marks, command, subject, board, level, topicName } = body;

    if (!question || typeof question !== 'string') return res.status(400).json({ error: 'missing_question' });
    if (typeof marks !== 'number' || marks < 1) return res.status(400).json({ error: 'invalid_marks' });
    if (question.length > 4000) return res.status(413).json({ error: 'question_too_long' });

    // Normalise key fields so cache hits work consistently.
    const subjectKey = subject || 'Unknown';
    const boardKey   = board   || 'Unknown';
    const levelKey   = level   || 'gcse';
    const hash       = questionHash(question);

    // ---- Cache lookup ----
    // If the table doesn't exist yet (migration not run), the call errors and
    // we silently fall through to generation. Lookup never blocks the request
    // path — at worst we regenerate.
    try {
      const { data: cached } = await supabaseAdmin
        .from('ai_model_answers')
        .select('model_answer, view_count')
        .eq('subject', subjectKey)
        .eq('board', boardKey)
        .eq('level', levelKey)
        .eq('question_hash', hash)
        .maybeSingle();

      if (cached?.model_answer) {
        // Best-effort view-count increment (don't await — fire and forget).
        // Race conditions can lose a tick; that's fine, it's only for analytics.
        supabaseAdmin
          .from('ai_model_answers')
          .update({ view_count: (cached.view_count || 0) + 1 })
          .eq('subject', subjectKey)
          .eq('board', boardKey)
          .eq('level', levelKey)
          .eq('question_hash', hash)
          .then(() => {}, () => {});

        return res.status(200).json({ modelAnswer: cached.model_answer, cached: true });
      }
    } catch (e) {
      console.warn('ai_model_answers cache lookup failed (table may not exist yet):', e?.message || e);
    }

    // ---- Cache miss — call Gemini ----
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: buildSystemPrompt({
        subject: subject || 'this subject',
        board: board || 'this board',
        level,
      }),
      generationConfig: {
        temperature: 0.4, // a touch of variation so repeated clicks give slightly different model answers
        maxOutputTokens: 2048,
      },
    });

    const result = await model.generateContent(
      buildUserPrompt({ question, marks, command, topicName })
    );

    // .text() throws if the response was filtered or has no candidates.
    let rawText = '';
    try {
      rawText = result.response.text() || '';
    } catch (e) {
      const finishReason = result.response?.candidates?.[0]?.finishReason || 'unknown';
      console.error('generate-model-answer: text() threw —', finishReason, e?.message || e);
      return res.status(502).json({
        error: 'no_output',
        message: `Gemini returned no content (finishReason: ${finishReason}).`,
      });
    }

    const text = rawText.trim();
    if (!text) {
      return res.status(502).json({ error: 'no_output', message: 'Gemini returned an empty response.' });
    }

    const usage = result.response.usageMetadata
      ? {
          input_tokens:  result.response.usageMetadata.promptTokenCount,
          output_tokens: result.response.usageMetadata.candidatesTokenCount,
          total_tokens:  result.response.usageMetadata.totalTokenCount,
        }
      : undefined;

    // ---- Store in cache (best-effort) ----
    // Upsert with ignoreDuplicates handles the rare race where two users miss
    // the cache at the same time — first write wins, second is a no-op.
    try {
      await supabaseAdmin
        .from('ai_model_answers')
        .upsert(
          {
            subject:       subjectKey,
            board:         boardKey,
            level:         levelKey,
            topic:         topicName || null,
            question_hash: hash,
            question_text: question,
            marks,
            command:       command || null,
            model_answer:  text,
            generated_by:  user.id,
          },
          { onConflict: 'subject,board,level,question_hash', ignoreDuplicates: true }
        );
    } catch (e) {
      console.warn('ai_model_answers cache write failed (table may not exist yet):', e?.message || e);
    }

    return res.status(200).json({ modelAnswer: text, cached: false, usage });
  } catch (err) {
    console.error('generate-model-answer error:', err);
    const msg = String(err?.message || err);
    if (/429|rate.?limit|quota/i.test(msg)) return res.status(429).json({ error: 'rate_limited' });
    if (/401|API key|invalid.*key/i.test(msg)) return res.status(502).json({ error: 'api_key_invalid' });
    return res.status(500).json({ error: 'internal_error', message: msg });
  }
};
