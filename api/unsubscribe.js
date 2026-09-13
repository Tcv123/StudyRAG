/**
 * Unsubscribe endpoint for the day-3 setup reminder.
 *
 * POST ONLY, and that is the whole point of the design. Corporate mail
 * scanners, Outlook Safe Links and Gmail's image proxy all follow GET links
 * in email without a human ever clicking. An unsubscribe that fires on GET
 * silently opts people out who never asked, and you find out months later
 * when the list has quietly emptied. So:
 *
 *   - the visible link in the email body goes to /unsubscribe?t=<token>,
 *     a page with a button, which POSTs here
 *   - the List-Unsubscribe-Post header points here directly, which is what
 *     makes Gmail and Apple Mail show their own native Unsubscribe button.
 *     That path is POST by definition (RFC 8058), so scanners never hit it.
 *
 * The token is a uuid on the setup_reminders row. That table has RLS on
 * with no policies, so the token is unreachable with the public anon key —
 * only this route, holding the service role key, can resolve one.
 *
 * Uses the same env vars as api/cron/setup-reminder.js. No new config.
 */

const { createClient } = require('@supabase/supabase-js');

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();

  /* A GET is either a link scanner or someone pasting the URL. Neither
   * should unsubscribe anybody. Point a human at the real page. */
  if (req.method === 'GET') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      error: 'Use the unsubscribe link in the email, or POST to this endpoint.'
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  /* Query string for the one-click header, body for the confirmation page. */
  const token = String(req.query?.t || req.body?.token || '').trim();

  if (!isUuid(token)) {
    return res.status(400).json({ error: 'That unsubscribe link is not valid.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error('[unsubscribe] missing Supabase configuration');
    return res.status(500).json({ error: 'Not configured' });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const { data: ok, error } = await supabaseAdmin
    .rpc('unsubscribe_by_token', { p_token: token });

  if (error) {
    console.error('[unsubscribe] rpc failed:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }

  if (!ok) {
    /* Unrecognised token. Deliberately not distinguished from a used one in
     * the copy on the page — there is nothing here worth probing for, and a
     * uuid is not guessable anyway. */
    return res.status(404).json({ error: 'That unsubscribe link is not valid.' });
  }

  return res.status(200).json({ ok: true });
};

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}
