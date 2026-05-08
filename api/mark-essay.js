/**
 * AI essay marking — backend for ai-feedback.html.
 *
 * Powered by Google Gemini (free tier on Google AI Studio). The API key MUST
 * stay server-side; if it shipped in the browser, anyone could extract it and
 * burn through the daily quota. Vercel automatically deploys files in /api/ as
 * Node.js serverless functions.
 *
 * Required Vercel environment variables:
 *   GEMINI_API_KEY            — from https://aistudio.google.com/apikey (free)
 *   SUPABASE_URL              — already set (used by other functions)
 *   SUPABASE_SERVICE_ROLE_KEY — already set
 *
 * Pro-gated: the same auth pattern as create-checkout-session.js.
 */
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { createClient } = require('@supabase/supabase-js');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

// JSON schema for structured grading output. Gemini supports a JSON-Schema-like
// `responseSchema` so the model returns a parseable object directly — no regex
// scraping of free-form prose.
const FEEDBACK_SCHEMA = {
  type: 'object',
  properties: {
    awarded:      { type: 'integer', description: 'Marks awarded out of total.' },
    total:        { type: 'integer', description: 'Total marks available for the question.' },
    band:         { type: 'string',  description: 'Short band/grade descriptor — e.g. "Top band (Level 4)", "Mid band (Level 2)", or for GCSE "Grade 6-7 equivalent".' },
    strengths:    { type: 'array', items: { type: 'string' }, description: '2-4 specific, evidenced points the student did well. Quote phrases from the answer where useful.' },
    improvements: { type: 'array', items: { type: 'string' }, description: '2-4 concrete, actionable improvements that would raise the mark next time. Reference what the model answer does that this answer does not.' },
    summary:      { type: 'string',  description: 'One or two sentences explaining why the awarded mark is what it is.' },
  },
  required: ['awarded', 'total', 'band', 'strengths', 'improvements', 'summary'],
};

function buildSystemPrompt({ subject, board, level }) {
  const examLevel = level === 'alevel' ? 'A-level' : 'GCSE';
  return `You are a senior ${examLevel} ${subject} examiner for the ${board} exam board. You mark student essays against the official mark scheme conventions used by ${board} for ${examLevel} ${subject}.

Your job is to give honest, specific, evidence-based feedback that helps the student improve. Be neither lenient nor harsh — award what the answer earns, no more and no less.

Grading principles:
- Reward demonstration of knowledge, application, analysis and evaluation appropriate to the command word.
- A top-band model answer is provided as a grading anchor — use it to calibrate the standard expected for full marks. The student does not need to match its wording, only its quality.
- Penalise factual errors, irrelevance, or missing the question.
- For higher-mark questions (12+), expect structured argument with introduction, balanced analysis and a justified conclusion.
- For ${examLevel}, follow ${board} mark scheme conventions: ${examLevel === 'A-level' ? 'levels-of-response with AO1/AO2/AO3 weighting where applicable' : 'levels-of-response with clarity, accuracy and detail criteria'}.

Output strictly valid JSON matching the schema. No prose outside the JSON.`;
}

function buildUserPrompt({ question, marks, command, modelAnswer, studentAnswer, topicName }) {
  return `Topic: ${topicName || '(unspecified)'}
Command word: ${command || '(unspecified)'}
Marks available: ${marks}

QUESTION:
${question}

TOP-BAND MODEL ANSWER (grading anchor — use to calibrate the standard for full marks):
${modelAnswer || '(no model answer available — use your own judgement of full-mark quality)'}

STUDENT ANSWER:
${studentAnswer}

Mark the student's answer out of ${marks}. Return JSON with awarded marks, band/grade descriptor, 2-4 specific strengths (quote where useful), 2-4 actionable improvements, and a one-sentence summary explaining the mark. Be honest — most real student answers do not get full marks.`;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    // ---- Auth: validate the Supabase session token ----
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
    const {
      question,
      marks,
      command,
      modelAnswer,
      studentAnswer,
      subject,
      board,
      level,
      topicName,
    } = body;

    if (!question || typeof question !== 'string') return res.status(400).json({ error: 'missing_question' });
    if (!studentAnswer || typeof studentAnswer !== 'string') return res.status(400).json({ error: 'missing_answer' });
    if (typeof marks !== 'number' || marks < 1) return res.status(400).json({ error: 'invalid_marks' });

    // Defensive caps to control cost / abuse. AI feedback is for essay-style
    // worded answers — anything past these is almost certainly junk or paste.
    if (studentAnswer.length > 12000) return res.status(413).json({ error: 'answer_too_long' });
    if (question.length > 4000) return res.status(413).json({ error: 'question_too_long' });

    // ---- Call Gemini ----
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: buildSystemPrompt({
        subject: subject || 'this subject',
        board: board || 'this board',
        level,
      }),
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: FEEDBACK_SCHEMA,
        temperature: 0.3, // lower for consistent grading
        maxOutputTokens: 2048,
      },
    });

    const result = await model.generateContent(
      buildUserPrompt({ question, marks, command, modelAnswer, studentAnswer, topicName })
    );

    // .text() throws if the response was filtered (e.g. safety) or has no
    // candidates. Wrap it so the user gets a friendly error rather than a 500.
    let text = '';
    try {
      text = result.response.text() || '';
    } catch (e) {
      const finishReason = result.response?.candidates?.[0]?.finishReason || 'unknown';
      console.error('mark-essay: text() threw —', finishReason, e?.message || e);
      return res.status(502).json({
        error: 'no_output',
        message: `Gemini returned no content (finishReason: ${finishReason}). Try a longer or more specific answer.`,
      });
    }

    if (!text.trim()) {
      return res.status(502).json({
        error: 'no_output',
        message: 'Gemini returned an empty response. Try rephrasing your answer.',
      });
    }

    let feedback;
    try {
      feedback = JSON.parse(text);
    } catch (e) {
      console.error('mark-essay: failed to parse Gemini JSON', text.slice(0, 500));
      return res.status(502).json({ error: 'parse_failed', message: 'Gemini returned malformed output. Try again.' });
    }

    // Clamp awarded to [0, marks] in case the model misbehaves.
    if (typeof feedback.awarded === 'number') {
      feedback.awarded = Math.max(0, Math.min(marks, Math.round(feedback.awarded)));
    }
    feedback.total = marks;

    // Token usage — Gemini exposes usageMetadata on the response.
    const usage = result.response.usageMetadata
      ? {
          input_tokens:  result.response.usageMetadata.promptTokenCount,
          output_tokens: result.response.usageMetadata.candidatesTokenCount,
          total_tokens:  result.response.usageMetadata.totalTokenCount,
        }
      : undefined;

    return res.status(200).json({ feedback, usage });
  } catch (err) {
    console.error('mark-essay error:', err);
    // Gemini SDK throws plain Errors; the message tends to include the HTTP
    // status. Map the common ones to friendly responses.
    const msg = String(err?.message || err);
    if (/429|rate.?limit|quota/i.test(msg)) return res.status(429).json({ error: 'rate_limited' });
    if (/401|API key|invalid.*key/i.test(msg)) return res.status(502).json({ error: 'api_key_invalid' });
    return res.status(500).json({ error: 'internal_error', message: msg });
  }
};
