const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
const { siteOrigin } = require('./_site-origin');

const stripe = new Stripe((process.env.STRIPE_SECRET_KEY || '').trim(), { apiVersion: '2025-02-24.acacia' });

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    if (!token) return res.status(401).json({ error: 'no_token' });

    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
    const user = userData?.user;
    if (userErr || !user) return res.status(401).json({ error: 'invalid_token' });

    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (!profile?.stripe_customer_id) {
      return res.status(404).json({ error: 'no_customer' });
    }

    /* The portal lets whoever opens it see invoices and change or cancel the
     * plan, so make sure the customer on the profile really is this user's.
     * Checkout creates every customer with metadata.supabase_user_id, and a
     * profile row could once be inserted already carrying someone else's
     * customer id (fixed in 2026-10-26-profile-guard-hardening.sql). Older
     * customers made before the metadata existed are let through only when
     * their email matches the signed-in account. */
    let customer;
    try {
      customer = await stripe.customers.retrieve(profile.stripe_customer_id);
    } catch (err) {
      if (err?.code === 'resource_missing') return res.status(404).json({ error: 'no_customer' });
      throw err;
    }
    if (!customer || customer.deleted) return res.status(404).json({ error: 'no_customer' });

    const owner = customer.metadata?.supabase_user_id;
    const sameEmail =
      !!customer.email && !!user.email &&
      customer.email.trim().toLowerCase() === user.email.trim().toLowerCase();
    if (owner ? owner !== user.id : !sameEmail) {
      console.error(`create-portal-session: customer ${customer.id} does not belong to user ${user.id}`);
      return res.status(403).json({ error: 'customer_mismatch' });
    }

    // Allowlisted: the Origin header is caller-controlled. See _site-origin.js.
    const origin = siteOrigin(req);

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${origin}/settings.html`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('create-portal-session error:', err);
    return res.status(500).json({ error: 'internal_error', message: err.message });
  }
};
