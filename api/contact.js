/**
 * Contact form endpoint — sends submitted messages to the site owner.
 *
 * Uses Resend (https://resend.com) — free tier: 100 emails/day, 3000/month.
 * No npm package needed; it's a plain HTTP POST.
 *
 * Required Vercel environment variable:
 *   RESEND_API_KEY  — from https://resend.com/api-keys (free account)
 *
 * The "from" address must be a domain you've verified in Resend.
 * During testing you can use onboarding@resend.dev as the from address.
 */

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not set');
    return res.status(500).json({ error: 'Email service not configured.' });
  }

  const subjectLine = subject
    ? `[RAG Learning Contact] ${subject}`
    : `[RAG Learning Contact] Message from ${name}`;

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="margin-bottom:4px;">New contact form submission</h2>
      <p style="color:#666;margin-top:0;">From the RAG Learning support page</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;font-weight:600;width:100px;">Name</td><td style="padding:8px 0;">${escHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
        ${subject ? `<tr><td style="padding:8px 0;font-weight:600;">Subject</td><td style="padding:8px 0;">${escHtml(subject)}</td></tr>` : ''}
      </table>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
      <h3 style="margin-bottom:8px;">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;">${escHtml(message)}</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RAG Learning <onboarding@resend.dev>',
        to: ['tcvasan2015@gmail.com'],
        reply_to: email,
        subject: subjectLine,
        html,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact send error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
};

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
