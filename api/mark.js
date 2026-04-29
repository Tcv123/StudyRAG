const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

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
    if (!GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'api_key_missing',
        message: 'GEMINI_API_KEY is not set in Vercel environment variables.'
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

    const responseSchema = mode === 'mark' ? MARK_SCHEMA : MODEL_SCHEMA;

    // ---- Call Gemini ----
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent`;
    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-goog-api-key': GEMINI_API_KEY
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [
          { role: 'user', parts: [{ text: userPrompt }] }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2500,
          responseMimeType: 'application/json',
          responseSchema
        }
      })
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => '');
      console.error('Gemini API error', geminiRes.status, errText);
      return res.status(502).json({
        error: 'gemini_error',
        status: geminiRes.status,
        message: `Gemini API returned ${geminiRes.status}. ${errText.slice(0, 300)}`
      });
    }

    const data = await geminiRes.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!text) {
      const finishReason = data.candidates?.[0]?.finishReason || 'unknown';
      return res.status(502).json({
        error: 'empty_response',
        message: `Gemini returned no text (finishReason: ${finishReason}).`
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        try { parsed = JSON.parse(match[0]); } catch (_) {}
      }
      if (!parsed) {
        return res.status(502).json({
          error: 'parse_error',
          message: 'AI returned malformed JSON',
          raw: text.slice(0, 500)
        });
      }
    }

    return res.status(200).json({
      ok: true,
      mode,
      feedback: parsed,
      usage: data.usageMetadata
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
Respond with VALID JSON ONLY that matches the supplied schema. Use HTML <em> and <strong> tags inside string values for emphasis where helpful.`;
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

Provide:
- estimatedBand (e.g. "Level 3 / 4"),
- estimatedScore (integer out of ${marks}),
- totalMarks: ${marks},
- bandDescriptor (one short phrase, e.g. "Clear and detailed"),
- scoreNote (one-line note like "↑ One band off the top"),
- whatScored: 3-5 specific things the student did well, quoting phrases from their answer where possible,
- whatsHoldingBack: 3-5 specific things missing or weak — be concrete, not generic,
- pushToTopBand: 3-4 actionable bullet points to reach the top band,
- modelParagraph: a single top-band paragraph (60-100 words) directly answering the question, with named examples and data, and a clear judgement that addresses the command word "${command}".`;
}

function buildModelPrompt({ question, marks, command, topic }) {
  return `The student does not know how to answer this question and wants a top-band model.

QUESTION: ${question}
TOTAL MARKS: ${marks}
COMMAND WORD: ${command}
TOPIC: ${topic || 'unspecified'}

Provide:
- structureTips: 4 bullet points on how a top-band ${command} answer is structured for this specific question. Each bullet one clear sentence.
- modelParagraph: a single top-band paragraph (60-100 words) directly answering the question, with named examples and data, and a clear judgement that addresses the command word "${command}".`;
}

const MARK_SCHEMA = {
  type: 'object',
  properties: {
    estimatedBand: { type: 'string' },
    estimatedScore: { type: 'integer' },
    totalMarks: { type: 'integer' },
    bandDescriptor: { type: 'string' },
    scoreNote: { type: 'string' },
    whatScored: { type: 'array', items: { type: 'string' } },
    whatsHoldingBack: { type: 'array', items: { type: 'string' } },
    pushToTopBand: { type: 'array', items: { type: 'string' } },
    modelParagraph: { type: 'string' }
  },
  required: ['estimatedBand', 'estimatedScore', 'totalMarks', 'bandDescriptor', 'scoreNote', 'whatScored', 'whatsHoldingBack', 'pushToTopBand', 'modelParagraph'],
  propertyOrdering: ['estimatedBand', 'estimatedScore', 'totalMarks', 'bandDescriptor', 'scoreNote', 'whatScored', 'whatsHoldingBack', 'pushToTopBand', 'modelParagraph']
};

const MODEL_SCHEMA = {
  type: 'object',
  properties: {
    structureTips: { type: 'array', items: { type: 'string' } },
    modelParagraph: { type: 'string' }
  },
  required: ['structureTips', 'modelParagraph'],
  propertyOrdering: ['structureTips', 'modelParagraph']
};
