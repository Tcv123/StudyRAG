const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' });

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

const PRICE_IDS = {
  monthly:   process.env.STRIPE_PRICE_ID_MONTHLY,
  biannual:  process.env.STRIPE_PRICE_ID_BIANNUAL,
  annual:    process.env.STRIPE_PRICE_ID_ANNUAL,
};

const TAX_ENABLED = process.env.STRIPE_TAX_ENABLED === 'true';

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

    const { plan } = req.body || {};
    const priceId = PRICE_IDS[plan];
    if (!priceId) return res.status(400).json({ error: 'invalid_plan' });

    /* subscription_tier / subscription_status / subscription_expires_at are
     * the columns this app actually has. This used to select pro_status,
     * which does not exist on profiles — PostgREST returned an error, the
     * error was discarded along with the row, and `profile` came back null.
     * Two things followed from that: the already-subscribed guard below could
     * never fire, and stripe_customer_id was never found, so every attempt
     * created a fresh Stripe customer for the same person. */
    const { data: profile, error: profileErr } = await supabaseAdmin
      .from('profiles')
      .select('stripe_customer_id, email, first_name, last_name, subscription_tier, subscription_status, subscription_expires_at')
      .eq('id', user.id)
      .single();

    if (profileErr) {
      console.error('create-checkout-session: could not read profile', profileErr);
      return res.status(500).json({ error: 'profile_unavailable' });
    }

    // Same test as nav-gating.js and settings.html — keep the three in step.
    const expiresAt = profile?.subscription_expires_at
      ? new Date(profile.subscription_expires_at)
      : null;
    const alreadyPro =
      (profile?.subscription_tier || 'free') !== 'free' &&
      ['active', 'trialing'].includes(profile?.subscription_status || '') &&
      (!expiresAt || expiresAt > new Date());

    /* past_due is still a live subscription in Stripe — it is retrying the
     * card. A second checkout would bill them twice once the first recovers;
     * Settings sends them to the portal to update the card instead. */
    const pastDue =
      profile?.stripe_customer_id &&
      (profile?.subscription_tier || 'free') !== 'free' &&
      profile?.subscription_status === 'past_due';

    if (alreadyPro || pastDue) {
      return res.status(409).json({ error: 'already_subscribed' });
    }

    let customerId = profile?.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: profile?.email || user.email,
        name: [profile?.first_name, profile?.last_name].filter(Boolean).join(' ') || undefined,
        metadata: { supabase_user_id: user.id },
      });
      customerId = customer.id;
      await supabaseAdmin
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id);
    }

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const sessionParams = {
      mode: 'subscription',
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 7,
        metadata: { supabase_user_id: user.id, plan },
      },
      allow_promotion_codes: true,
      client_reference_id: user.id,
      success_url: `${origin}/auth/subscription-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/auth/subscription-cancel.html`,
      // Both pages exist. They did not until 2026-09-15, so every customer
      // who paid was redirected to a 404 at the one moment they most needed
      // reassurance that the payment had worked.
    };

    if (TAX_ENABLED) {
      sessionParams.automatic_tax = { enabled: true };
      sessionParams.customer_update = { address: 'auto', name: 'auto' };
      sessionParams.billing_address_collection = 'required';
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('create-checkout-session error:', err);
    return res.status(500).json({ error: 'internal_error', message: err.message });
  }
};
