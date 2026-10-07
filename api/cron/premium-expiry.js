/**
 * "Your free Premium is ending" — one email per comped early adopter.
 *
 * The early-adopter grant gave 3 months of Pro to the first 150 sign-ups.
 * Those comps expire from 2 December 2026, and without this the access just
 * stops. Each account gets one email seven days out: when it ends, what they
 * keep for free, and a link to subscribe if they want to keep the rest.
 *
 * Who qualifies is decided in Postgres — see
 * db/migrations/2026-10-07-premium-expiry-reminders.sql. Apply that first.
 *
 * NOT ITS OWN CRON. Vercel's Hobby plan allows two scheduled jobs and both
 * are spoken for (setup-reminder, exam-timetable-check), so the daily
 * setup-reminder run calls run() here when it finishes. This file is still a
 * handler in its own right, which is what makes the dry run and the preview
 * below possible without waiting for 4pm.
 *
 * Environment: the same four as setup-reminder.js — CRON_SECRET,
 * SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY. Optional
 * SITE_URL, REMINDER_FROM, REMINDER_REPLY_TO.
 *
 * Dry run (sends nothing, claims nobody):
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        https://raglearning.uk/api/cron/premium-expiry?dry=1
 *
 * One copy to yourself, to read it in a real inbox:
 *   curl -H "Authorization: Bearer $CRON_SECRET" \
 *        "https://raglearning.uk/api/cron/premium-expiry?preview=1&to=you@example.com"
 */

const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

/* Resend's free tier is 100/day, shared with the contact form and the setup
 * reminder. The comp cohort is ~138 spread over about ten days, so a cap of
 * 30 clears each day's batch several times over. */
const DAILY_CAP = 30;
const SEND_GAP_MS = 550;
const PREVIEW_TOKEN = '00000000-0000-0000-0000-000000000000';

const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ── The part setup-reminder.js calls ──────────────────────────────────
 * Takes an already-built admin client so the two jobs share one connection,
 * and returns counts rather than a response. Throws nothing: a failure here
 * must not fail the setup reminders that have already been sent. */
async function run({ supabaseAdmin, resendKey, limit = DAILY_CAP, dryRun = false }) {
  /* Tidy up yesterday's lapses first. Access already ended — every isPro()
   * test checks the expiry date — but the tier column still says pro_monthly
   * until something sets it back, which would leave the premium_users view
   * counting comps as customers. Skipped on a dry run: a dry run must not
   * write. See db/migrations/2026-10-07-expire-lapsed-comps.sql. */
  let expired = 0;
  if (!dryRun) {
    const { data, error: expireErr } = await supabaseAdmin.rpc('expire_lapsed_comps');
    if (expireErr) {
      console.error('[premium-expiry] expire_lapsed_comps failed:', expireErr);
    } else {
      expired = data || 0;
      if (expired) console.log(`[premium-expiry] moved ${expired} lapsed comp(s) to free`);
    }
  }

  const { data: pending, error } = await supabaseAdmin
    .rpc('pending_premium_expiry_reminders', { p_limit: limit });

  if (error) {
    console.error('[premium-expiry] could not load pending list:', error);
    return { error: 'query_failed', expired, sent: 0, failed: 0, skipped: 0, due: 0 };
  }

  const due = pending || [];
  if (dryRun) {
    return { dryRun: true, wouldSend: due.length, recipients: due.map(u => u.email) };
  }

  let sent = 0, failed = 0, skipped = 0;

  for (const user of due) {
    const { data: token, error: claimErr } = await supabaseAdmin
      .rpc('claim_premium_expiry_reminder', { p_user_id: user.user_id });

    if (claimErr) {
      console.error('[premium-expiry] claim failed for', user.user_id, claimErr);
      failed++;
      continue;
    }
    if (!token) { skipped++; continue; }

    try {
      const providerId = await sendExpiryEmail(resendKey, user, token);
      await supabaseAdmin.rpc('mark_premium_expiry_reminder_sent', {
        p_user_id: user.user_id,
        p_provider_id: providerId
      });
      sent++;
    } catch (err) {
      // User id, never the email — Vercel logs are not the place for addresses.
      console.error('[premium-expiry] send failed for', user.user_id, err.message);
      await supabaseAdmin.rpc('fail_premium_expiry_reminder', {
        p_user_id: user.user_id,
        p_error: String(err.message || err)
      });
      failed++;
    }

    await sleep(SEND_GAP_MS);
  }

  if (sent || failed || skipped) {
    console.log(`[premium-expiry] sent ${sent}, failed ${failed}, skipped ${skipped}`);
  }
  return { expired, sent, failed, skipped, due: due.length };
}

module.exports = async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    console.error('[premium-expiry] CRON_SECRET is not set — refusing to run');
    return res.status(500).json({ error: 'Not configured' });
  }
  if (!bearerMatches(req.headers.authorization, secret)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey   = process.env.RESEND_API_KEY;

  const missing = [
    ['SUPABASE_URL', supabaseUrl],
    ['SUPABASE_SERVICE_ROLE_KEY', serviceKey],
    ['RESEND_API_KEY', resendKey]
  ].filter(([, value]) => !value).map(([name]) => name);

  if (missing.length) {
    console.error('[premium-expiry] missing env vars:', missing.join(', '));
    return res.status(500).json({ error: 'Not configured', missing });
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  /* Preview: the real email, to an address you name. Nothing in it comes
   * from the caller except the recipient, so a leaked CRON_SECRET buys an
   * attacker your own email sent to the wrong inbox, not a template to
   * write their own. The date shown is a week out, as a real one would be. */
  if (req.query?.preview === '1' || req.query?.preview === 'true') {
    const to = String(req.query?.to || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
      return res.status(400).json({ error: 'Pass a valid ?to= address.' });
    }
    try {
      const providerId = await sendExpiryEmail(
        resendKey,
        { email: to, first_name: '', premium_until: new Date(Date.now() + 7 * 864e5).toISOString() },
        PREVIEW_TOKEN
      );
      return res.status(200).json({ preview: true, to, providerId });
    } catch (err) {
      console.error('[premium-expiry] preview send failed:', err.message);
      return res.status(502).json({ error: err.message });
    }
  }

  const dryRun = req.query?.dry === '1' || req.query?.dry === 'true';
  const result = await run({ supabaseAdmin, resendKey, dryRun });
  return res.status(result.error ? 500 : 200).json(result);
};

module.exports.run = run;


/* ── Resend ──────────────────────────────────────────────────────────── */

async function sendExpiryEmail(apiKey, user, token) {
  const siteUrl = (process.env.SITE_URL || 'https://raglearning.uk').replace(/\/+$/, '');
  const pricingUrl = `${siteUrl}/pricing-app`;
  const from = process.env.REMINDER_FROM || 'RAG Learning <hello@raglearning.uk>';

  const unsubPage = `${siteUrl}/unsubscribe?t=${token}`;
  const unsubPost = `${siteUrl}/api/unsubscribe?t=${token}`;

  const endsOn = formatDate(user.premium_until);

  const payload = {
    from,
    to: [user.email],
    subject: `Your free Premium ends on ${endsOn}`,
    html: expiryHtml(user.first_name, endsOn, pricingUrl, siteUrl, unsubPage),
    text: expiryText(user.first_name, endsOn, pricingUrl, unsubPage),
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
 * Inline styles and a table layout: Gmail strips <style> blocks and Outlook
 * ignores flexbox. Matches setup-reminder.js so the two look like the same
 * sender.
 *
 * It says what they lose, what they keep, and what it costs. No countdown,
 * no "last chance" — they were given something for free and are being told
 * when it ends, which does not need urgency bolted on.
 * ──────────────────────────────────────────────────────────────────────── */

function expiryHtml(firstName, endsOn, pricingUrl, siteUrl, unsubUrl) {
  const greeting = firstName ? `Hi ${escHtml(firstName)},` : 'Hi there,';

  return `
<div style="background:#EAF2FC;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width:520px;margin:0 auto;background:#FFFFFF;border:1px solid #B8D0E8;border-radius:14px;">
    <tr>
      <td style="padding:32px 32px 8px 32px;">
        <p style="margin:0 0 24px 0;font-size:15px;font-weight:700;color:#2563EB;letter-spacing:0.02em;">RAG Learning</p>

        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#0B1E3F;">${greeting}</p>

        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#0B1E3F;">
          You were one of our first 150 users, so you have had Premium free for
          three months. That ends on <strong>${escHtml(endsOn)}</strong>.
        </p>

        <p style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#445F85;">
          <strong style="color:#0B1E3F;">Nothing disappears.</strong> Your notes, diagnostics,
          RAG tracking, practice questions, streaks and medals all stay free, exactly as they are.
        </p>

        <p style="margin:0 0 24px 0;font-size:16px;line-height:1.6;color:#445F85;">
          What stops is the Premium part: unlimited practice questions, AI marking on your
          written answers, the full past&#8209;paper archive, predicted grades and offline PDF notes.
          If you want to keep those, Pro is &pound;9.99 a month, or &pound;100 for the year.
          No payment is taken unless you choose to subscribe.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 28px 32px;">
        <a href="${pricingUrl}"
           style="display:inline-block;background:#2563EB;color:#FFFFFF;text-decoration:none;font-size:16px;font-weight:600;padding:13px 26px;border-radius:9px;">
          Keep Premium
        </a>
        <p style="margin:14px 0 0 0;font-size:13px;line-height:1.6;color:#7891B0;">
          Or do nothing, and your account moves to the free plan on ${escHtml(endsOn)}.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 32px 30px 32px;border-top:1px solid #DBE8F6;">
        <p style="margin:20px 0 0 0;font-size:13px;line-height:1.6;color:#7891B0;">
          Thank you for being one of the first people to use
          <a href="${siteUrl}" style="color:#445F85;">raglearning.uk</a>. It genuinely helped
          to have you here early.
          You can <a href="${unsubUrl}" style="color:#445F85;">unsubscribe</a> from emails like this.
        </p>
      </td>
    </tr>
  </table>
</div>`.trim();
}

function expiryText(firstName, endsOn, pricingUrl, unsubUrl) {
  const greeting = firstName ? `Hi ${firstName},` : 'Hi there,';

  return [
    greeting,
    '',
    'You were one of our first 150 users, so you have had Premium free for three',
    `months. That ends on ${endsOn}.`,
    '',
    'Nothing disappears. Your notes, diagnostics, RAG tracking, practice questions,',
    'streaks and medals all stay free, exactly as they are.',
    '',
    'What stops is the Premium part: unlimited practice questions, AI marking on',
    'your written answers, the full past-paper archive, predicted grades and offline',
    'PDF notes. If you want to keep those, Pro is GBP 9.99 a month, or GBP 100 for',
    'the year. No payment is taken unless you choose to subscribe.',
    '',
    `Keep Premium: ${pricingUrl}`,
    '',
    `Or do nothing, and your account moves to the free plan on ${endsOn}.`,
    '',
    '--',
    'Thank you for being one of the first people to use raglearning.uk. It genuinely',
    'helped to have you here early. You can unsubscribe from emails like this:',
    unsubUrl
  ].join('\n');
}


/* ── Helpers ─────────────────────────────────────────────────────────── */

function formatDate(value) {
  const d = value ? new Date(value) : null;
  if (!d || Number.isNaN(d.getTime())) return 'soon';
  return d.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London'
  });
}

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
