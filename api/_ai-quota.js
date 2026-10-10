/**
 * Per-user daily cap on AI calls, shared by mark-essay, mark-against-scheme
 * and generate-model-answer. The count lives in Postgres
 * (db/migrations/2026-10-10-ai-daily-quota.sql) because a serverless function
 * remembers nothing between invocations.
 *
 * Call it immediately before the Groq request, after any cache hit has
 * returned, so only real model calls are charged.
 *
 * Fails open: if the function is missing (migration not run) or Postgres
 * errors, the call is allowed and the problem is logged. A broken counter
 * should not lock every Pro student out of marking.
 */
const DEFAULT_LIMIT = 100;

function dailyLimit() {
  const n = parseInt(process.env.AI_DAILY_LIMIT, 10);
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_LIMIT;
}

async function consumeAiCall(supabaseAdmin, userId) {
  try {
    const { data, error } = await supabaseAdmin.rpc('consume_ai_call', { p_user: userId, p_limit: dailyLimit() });
    if (error) {
      console.warn('consume_ai_call failed (migration may not be applied):', error.message);
      return true;
    }
    return data === true;
  } catch (e) {
    console.warn('consume_ai_call threw:', e?.message || e);
    return true;
  }
}

// The response every endpoint sends when the cap is reached.
function quotaExceeded(res) {
  return res.status(429).json({
    error: 'daily_limit_reached',
    message: `You've used today's ${dailyLimit()} AI marking requests. The limit resets at midnight UTC.`,
  });
}

module.exports = { consumeAiCall, quotaExceeded };
