/**
 * Day-3 setup reminder — runs once a day from a Vercel cron.
 *
 * Finds students who confirmed their email a few days ago and never picked
 * their subjects, and sends each of them exactly one nudge back to
 * auth/setup.html. Who qualifies is decided in Postgres, not here — see
 * db/migrations/2026-09-13-setup-reminders.sql, which has the reasoning and
 * the dry-run query. Apply that migration BEFORE this deploys.
 *
 * This file does three things and nothing else: check the caller is the
 * cron, walk the list the database hands it, and talk to Resend.
 *
 * Required Vercel environment variables:
 *   CRON_SECRET                — any long random string. Vercel sends it
 *                                back as `Authorization: Bearer <secret>`
 *                                on scheduled invocations. Without it set,
 *                                this endpoint refuses to run at all.
 *   SUPABASE_URL               — already set, used by stripe-webhook.js
 *   SUPABASE_SERVICE_ROLE_KEY  — already set, used by stripe-webhook.js
 *   RESEND_API_KEY             — already set, used by api/contact.js
 *
 * Optional:
 *   SITE_URL          — defaults to https://raglearning.uk
 *   REMINDER_FROM     — defaults to RAG Learning <hello@raglearning.uk>.
 *                       Must be on a domain verified in Resend.
 *   REMINDER_REPLY_TO — an inbox a confused student can reply to.
 *
 * Manual dry run (safe — sends nothing, claims nothing):
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        https://raglearning.uk/api/cron/setup-reminder?dry=1
 *
 * Send one copy to yourself, to see it in a real inbox before it reaches
 * anybody. Writes nothing and claims nobody, so the real run is unaffected:
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        "https://raglearning.uk/api/cron/setup-reminder?preview=1&to=you@example.com"
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

/* Resend's free tier is 100 emails a day and the contact form shares it, so
 * leave room. A backlog drains over several days rather than in one burst,
 * which is also gentler on the sending domain's reputation. */
const DAILY_CAP = 40;

/* Resend rate-limits at 2 requests/second. 550ms keeps us under it with
 * room to spare, and 40 sends still finishes in ~22s of the 60s budget. */
const SEND_GAP_MS = 550;

const sleep = ms => new Promise(r => setTimeout(r, ms));

/* Preview emails carry this instead of a real unsubscribe token. It resolves
 * to nothing, so the unsubscribe page correctly reports an invalid link —
 * which is the honest outcome, since there is no subscription behind a
 * preview to cancel. Test the real unsubscribe flow from a real send. */
const PREVIEW_TOKEN = '00000000-0000-0000-0000-000000000000';

module.exports = async function handler(req, res) {
  /* ── Who's calling ──────────────────────────────────────────────────
   * This endpoint can read every student's email address, so it is closed
   * by default: a missing CRON_SECRET is a 500, never an open door. */
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    console.error('[setup-reminder] CRON_SECRET is not set — refusing to run');
    return res.status(500).json({ error: 'Not configured' });
  }
  if (!bearerMatches(req.headers.authorization, secret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  /* Past the bearer check, so the caller is the cron or someone holding
   * CRON_SECRET. Naming the missing variable is safe here and saves an
   * afternoon of guessing — the generic message above stays generic
   * precisely because it is reachable without the secret. */
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey   = process.env.RESEND_API_KEY;

  const missing = [
    ['SUPABASE_URL', supabaseUrl],
    ['SUPABASE_SERVICE_ROLE_KEY', serviceKey],
    ['RESEND_API_KEY', resendKey]
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missing.length) {
    console.error('[setup-reminder] missing env vars:', missing.join(', '));
    return res.status(500).json({
      error: 'Not configured',
      missing
    });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  const dryRun = req.query?.dry === '1' || req.query?.dry === 'true';

  /* ── Preview ─────────────────────────────────────────────────────────
   * One copy of the real email to an address you name, so it can be read in
   * an actual inbox before it reaches a student. Touches no rows and claims
   * nobody, so a preview never costs a real recipient their reminder.
   *
   * Nothing in the body is caller-supplied — no name parameter, no subject
   * override, no template injection. If CRON_SECRET ever leaked, the worst
   * this offers is your own setup reminder sent to the wrong address, rather
   * than an attacker-authored email leaving a domain people trust. */
  if (req.query?.preview === '1' || req.query?.preview === 'true') {
    const to = String(req.query?.to || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
      return res.status(400).json({ error: 'Pass a valid ?to= address.' });
    }

    try {
      const providerId = await sendReminder(
        resendKey,
        { email: to, first_name: '' },
        PREVIEW_TOKEN
      );
      return res.status(200).json({ preview: true, to, providerId });
    } catch (err) {
      console.error('[setup-reminder] preview send failed:', err.message);
      return res.status(502).json({ error: err.message });
    }
  }

  /* ── Who's due ──────────────────────────────────────────────────────── */
  const { data: pending, error: pendingErr } = await supabaseAdmin
    .rpc('pending_setup_reminders', { p_limit: DAILY_CAP });

  if (pendingErr) {
    console.error('[setup-reminder] could not load pending list:', pendingErr);
    return res.status(500).json({ error: 'Query failed' });
  }

  const due = pending || [];

  if (dryRun) {
    return res.status(200).json({
      dryRun: true,
      wouldSend: due.length,
      recipients: due.map(u => u.email)
    });
  }

  /* ── Send ────────────────────────────────────────────────────────────
   * Claim first, then send. A crash between the two costs one reminder
   * that never arrives, which nobody notices. The other ordering costs a
   * duplicate, which is the thing a student actually resents. */
  let sent = 0, failed = 0, skipped = 0;

  for (const user of due) {
    const { data: token, error: claimErr } = await supabaseAdmin
      .rpc('claim_setup_reminder', { p_user_id: user.user_id });

    if (claimErr) {
      console.error('[setup-reminder] claim failed for', user.user_id, claimErr);
      failed++;
      continue;
    }
    /* Null means another run already has this one. The token doubles as the
     * claim result precisely so there is no window where we have permission
     * to send but no way to offer an unsubscribe. */
    if (!token) { skipped++; continue; }

    try {
      const providerId = await sendReminder(resendKey, user, token);
      await supabaseAdmin.rpc('mark_setup_reminder_sent', {
        p_user_id: user.user_id,
        p_provider_id: providerId
      });
      sent++;
    } catch (err) {
      /* Log the user id, never the email — these logs are readable by
       * anyone with Vercel access and there is no reason for a student's
       * address to sit in them. */
      console.error('[setup-reminder] send failed for', user.user_id, err.message);
      await supabaseAdmin.rpc('fail_setup_reminder', {
        p_user_id: user.user_id,
        p_error: String(err.message || err)
      });
      failed++;
    }

    await sleep(SEND_GAP_MS);
  }

  console.log(`[setup-reminder] sent ${sent}, failed ${failed}, skipped ${skipped}`);
  return res.status(200).json({ sent, failed, skipped, due: due.length });
};


/* ── Resend ──────────────────────────────────────────────────────────── */

async function sendReminder(apiKey, user, token) {
  const siteUrl = (process.env.SITE_URL || 'https://raglearning.uk').replace(/\/+$/, '');
  const setupUrl = `${siteUrl}/auth/setup`;
  const from = process.env.REMINDER_FROM || 'RAG Learning <hello@raglearning.uk>';

  /* Two routes to the same opt-out. The page is for the link in the body and
   * asks before acting, because mail scanners follow GET links on their own.
   * The header pair is what makes Gmail and Apple Mail render their native
   * Unsubscribe button next to the sender name — worth having on its own
   * terms, since people who can't find an opt-out press Spam instead, and
   * that costs the whole sending domain. RFC 8058 requires the one-click
   * target be a POST, so scanners can't trip it. */
  const unsubPage = `${siteUrl}/unsubscribe?t=${token}`;
  const unsubPost = `${siteUrl}/api/unsubscribe?t=${token}`;

  const payload = {
    from,
    to: [user.email],
    subject: 'Your RAG Learning dashboard is still empty',
    html: reminderHtml(user.first_name, setupUrl, siteUrl, unsubPage),
    text: reminderText(user.first_name, setupUrl, unsubPage),
    headers: {
      'List-Unsubscribe': `<${unsubPost}>, <${unsubPage}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
    }
  };

  if (process.env.REMINDER_REPLY_TO) {
    payload.reply_to = process.env.REMINDER_REPLY_TO;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Resend ${response.status}: ${await response.text()}`);
  }

  const body = await response.json().catch(() => ({}));
  return body.id || null;
}


/* ── The email ───────────────────────────────────────────────────────────
 * Inline styles and a table layout, because Gmail strips <style> blocks and
 * Outlook ignores flexbox. Colours are the shared.css tokens written out as
 * literals for the same reason — an email cannot read a stylesheet.
 * ──────────────────────────────────────────────────────────────────────── */

function reminderHtml(firstName, setupUrl, siteUrl, unsubUrl) {
  const greeting = firstName ? `Hi ${escHtml(firstName)},` : 'Hi there,';

  return `
<div style="background:#EAF2FC;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;margin:0 auto;background:#FFFFFF;border:1px solid #B8D0E8;border-radius:14px;">
    <tr>
      <td style="padding:32px 32px 8px 32px;">
        <p style="margin:0 0 24px 0;font-size:15px;font-weight:700;color:#2563EB;letter-spacing:0.02em;">RAG Learning</p>

        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#0B1E3F;">${greeting}</p>

        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#0B1E3F;">
          You made an account a few days ago but haven't picked your subjects yet,
          so there's nothing on your dashboard to work from.
        </p>

        <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;color:#445F85;">
          Setup takes about a minute — choose GCSE or A&#8209;Level, tick your subjects
          and exam boards, and your notes, past papers and practice questions all get
          filtered down to exactly your specs.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 28px 32px;">
        <a href="${setupUrl}"
           style="display:inline-block;background:#2563EB;color:#FFFFFF;text-decoration:none;font-size:16px;font-weight:600;padding:13px 26px;border-radius:9px;">
          Finish setting up
        </a>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 30px 32px;border-top:1px solid #DBE8F6;">
        <p style="margin:20px 0 0 0;font-size:13px;line-height:1.6;color:#7891B0;">
          You're getting this because you created an account at
          <a href="${siteUrl}" style="color:#445F85;">raglearning.uk</a>.
          It's a one&#8209;off — if you've changed your mind, just ignore it and we
          won't email you about this again.
          You can also <a href="${unsubUrl}" style="color:#445F85;">unsubscribe</a>
          to be sure.
        </p>
      </td>
    </tr>
  </table>
</div>`.trim();
}

function reminderText(firstName, setupUrl, unsubUrl) {
  const greeting = firstName ? `Hi ${firstName},` : 'Hi there,';

  return [
    greeting,
    '',
    "You made a RAG Learning account a few days ago but haven't picked your",
    "subjects yet, so there's nothing on your dashboard to work from.",
    '',
    'Setup takes about a minute - choose GCSE or A-Level, tick your subjects and',
    'exam boards, and your notes, past papers and practice questions all get',
    'filtered down to exactly your specs.',
    '',
    `Finish setting up: ${setupUrl}`,
    '',
    '--',
    "You're getting this because you created an account at raglearning.uk.",
    "It's a one-off - if you've changed your mind, just ignore it and we won't",
    'email you about this again. You can also unsubscribe to be sure:',
    unsubUrl
  ].join('\n');
}


/* ── Helpers ─────────────────────────────────────────────────────────── */

/* Constant-time so the secret can't be recovered a byte at a time by
 * timing the 401. Length is compared first because timingSafeEqual throws
 * on a mismatch, and the length itself is not worth protecting. */
function bearerMatches(header, secret) {
  const expected = `Bearer ${secret}`;
  const given = String(header || '');
  if (given.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(given), Buffer.from(expected));
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
