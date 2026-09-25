/**
 * Shared Groq model selection for the three AI marking endpoints
 * (mark-essay, generate-model-answer, mark-against-scheme).
 *
 * WHY THIS FILE EXISTS
 * ────────────────────
 * The model id used to be a bare string copy-pasted into all three handlers.
 * In September 2026 Groq started answering those calls with
 *
 *   404 {"error":{"message":"The model `llama-3.3-70b-versatile` does not
 *   exist or you do not have access to it.","code":"model_not_found"}}
 *
 * which took down AI marking everywhere at once, surfaced to students as a raw
 * `internal_error — 404 {...}` blob, and needed a code change + deploy per
 * endpoint to repoint. Three consequences, all handled here:
 *
 *   1. The model list is ONE definition, read from env (`GROQ_MODEL`), so
 *      repointing it is a Vercel env edit rather than a deploy — and it cannot
 *      half-land, where two endpoints get patched and the third is forgotten.
 *   2. `createCompletion` walks a fallback chain. A model the key cannot reach
 *      is skipped rather than fatal, so losing access to one model degrades
 *      quality instead of breaking the feature.
 *   3. `classifyGroqError` gives the handlers one shared error taxonomy, so a
 *      404/model problem reads as `model_unavailable` instead of being
 *      swallowed by the catch-all 500.
 *
 * Vercel does not route files in `api/` whose name begins with `_`, so this is
 * a plain module, not an endpoint.
 */

// Ordered best-first. Every entry must be a Groq PRODUCTION model (not
// preview) with a >=64k context window and JSON-mode support, because all
// three callers pass `response_format: { type: 'json_object' }` or lean on a
// long prompt: a 30-mark Politics essay sends a ~750-token grading anchor plus
// the student's answer.
const DEFAULT_MODELS = [
  'llama-3.3-70b-versatile',
  'openai/gpt-oss-120b',
  'llama-3.1-8b-instant',
];

/**
 * The chain to try, best-first. `GROQ_MODEL` may name one model or a
 * comma-separated list; whatever it names goes first, and the built-in chain
 * follows as a backstop so a typo in the env var cannot take marking down.
 */
function modelCandidates() {
  const configured = String(process.env.GROQ_MODEL || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
  const seen = new Set(configured);
  return [...configured, ...DEFAULT_MODELS.filter(m => !seen.has(m))];
}

// True when the error means "this key cannot use this model" rather than
// "this request was bad". Only these are worth retrying on the next model —
// retrying a malformed request against every candidate would just multiply
// the latency before failing anyway.
function isModelUnavailable(err) {
  const code = err?.error?.error?.code || err?.error?.code || err?.code || '';
  if (code === 'model_not_found' || code === 'model_decommissioned') return true;
  if (err?.status === 404) return true;
  return /model.{0,20}(not found|does not exist|decommissioned)|do not have access/i
    .test(String(err?.message || ''));
}

/**
 * chat.completions.create with a model fallback chain.
 *
 * `params` is passed through untouched apart from `model`, which is filled in
 * per attempt — so callers keep their own temperature/max_tokens/response_format.
 * Returns the completion with the model that answered attached as `_model`.
 * Throws the LAST error if every candidate is unavailable.
 */
async function createCompletion(groq, params) {
  const candidates = modelCandidates();
  let lastErr = null;

  for (const model of candidates) {
    try {
      const completion = await groq.chat.completions.create({ ...params, model });
      completion._model = model;
      // Worth a log line: a served-by-fallback response is a quiet warning
      // that the primary model needs attention before the chain runs out.
      if (model !== candidates[0]) {
        console.warn(`[groq] served by fallback model "${model}" — primary "${candidates[0]}" unavailable`);
      }
      return completion;
    } catch (err) {
      if (!isModelUnavailable(err)) throw err;
      console.error(`[groq] model "${model}" unavailable: ${err?.message || err}`);
      lastErr = err;
    }
  }

  throw lastErr || new Error('No Groq model candidates configured.');
}

/**
 * Map a thrown Groq error onto the { code, body } shape the handlers return.
 * `message` carries the provider detail for the server log and for admin
 * debugging; the pages map the `error` code to student-facing wording.
 */
function classifyGroqError(err) {
  const msg = String(err?.message || err);

  if (isModelUnavailable(err)) {
    return {
      code: 503,
      body: {
        error: 'model_unavailable',
        message: `No configured Groq model is reachable with this API key (tried: ${modelCandidates().join(', ')}). ${msg}`,
      },
    };
  }
  if (/429|rate.?limit|quota/i.test(msg))    return { code: 429, body: { error: 'rate_limited',    message: msg } };
  if (/401|API key|invalid.*key/i.test(msg)) return { code: 502, body: { error: 'api_key_invalid', message: msg } };
  return { code: 500, body: { error: 'internal_error', message: msg } };
}

module.exports = { DEFAULT_MODELS, modelCandidates, isModelUnavailable, createCompletion, classifyGroqError };
