const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe((process.env.STRIPE_SECRET_KEY || '').trim(), { apiVersion: '2025-02-24.acacia' });

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

/* Trimmed. Pasting an id into a dashboard env var field picks up a leading
 * tab or trailing newline more easily than you would think — on 2026-09-30
 * all three arrived with a tab in front and Stripe answered "No such price"
 * for every plan on the site. The same guard covers the keys below. */
const env = (name) => (process.env[name] || '').trim();

const PRICE_IDS = {
  monthly:   env('STRIPE_PRICE_ID_MONTHLY'),
  biannual:  env('STRIPE_PRICE_ID_BIANNUAL'),
  annual:    env('STRIPE_PRICE_ID_ANNUAL'),
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
    if (!priceId) {
      // Either the caller sent a plan we do not sell, or its price id is not
      // configured on this deployment. They look identical from the client.
      if (!(plan in PRICE_IDS)) return res.status(400).json({ error: 'invalid_plan' });
      console.error(`create-checkout-session: no price id configured for plan "${plan}"`);
      return res.status(500).json({ error: 'plan_not_configured', message: `No price is configured for the ${plan} plan.` });
    }

    /* subscription_tier / subscription_status / subscription_expires_at are
     * the columns this app actually has. This used to select pro_status,
     * which does not exist on profiles — PostgREST returned an error, the
     * error was discarded along with the row, and `profile` came back null.
     * Two things followed from that: the already-subscribed guard below could
     * never fire, and stripe_customer_id was never found, so every attempt
     * created a fresh Stripe customer for the same person. */
    const { data: profile, error: profileErr } = await supabaseAdmin
      .from('profiles')
      .select('stripe_customer_id, email, first_name, last_name, subscription_tier, subscription_status, subscription_expires_at, is_early_adopter, premium_until')
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

    let customerId = profile?.stripe_customer_id || null;

    /* Until 2026-10-10 this endpoint saved stripe_customer_id the moment a
     * checkout was *started*. A comp who opened Stripe and backed out was
     * left with a customer id and no subscription — and "comped" everywhere
     * (here, Settings, pricing, both comp SQL functions) means "early adopter
     * with no customer id". So they were treated as a paying subscriber:
     * every further attempt got a 409, Settings said £9.99/month, and they
     * dropped out of the expiry email and the lapse cleanup.
     *
     * Repair those rows as they come through. Only when Stripe has never had
     * a subscription for the customer — someone who subscribed and cancelled
     * is not a comp any more, and keeps their id.
     *
     * Also clears an id Stripe does not recognise at all. Customers made with
     * the test keys do not exist once the live keys are in, and passing one
     * to checkout fails with "No such customer" for that user for ever. */
    if (customerId) {
      let stale = false;
      try {
        if (profile?.is_early_adopter) {
          const subs = await stripe.subscriptions.list({ customer: customerId, status: 'all', limit: 1 });
          stale = subs.data.length === 0;
        } else {
          const existing = await stripe.customers.retrieve(customerId);
          stale = !!existing?.deleted;
        }
      } catch (err) {
        if (err?.code !== 'resource_missing') throw err;
        stale = true;
      }
      if (stale) {
        const { error: clearErr } = await supabaseAdmin
          .from('profiles')
          .update({ stripe_customer_id: null })
          .eq('id', user.id);
        if (clearErr) console.error('create-checkout-session: could not clear stale customer id', clearErr);
        else customerId = null;
      }
    }

    /* An early adopter was comped: the grant sets tier to pro_monthly with no
     * Stripe customer behind it. Counting that as "already subscribed" meant
     * the 122 comped accounts could not buy anything — Settings sent them to
     * pricing, pricing got a 409 and sent them back to Settings. They are
     * exactly the people most likely to want to pay when the comp expires. */
    const comped = profile?.is_early_adopter && !customerId;

    const alreadyPro =
      !comped &&
      (profile?.subscription_tier || 'free') !== 'free' &&
      ['active', 'trialing'].includes(profile?.subscription_status || '') &&
      (!expiresAt || expiresAt > new Date());

    /* past_due is still a live subscription in Stripe — it is retrying the
     * card. A second checkout would bill them twice once the first recovers;
     * Settings sends them to the portal to update the card instead. */
    const pastDue =
      customerId &&
      (profile?.subscription_tier || 'free') !== 'free' &&
      profile?.subscription_status === 'past_due';

    if (alreadyPro || pastDue) {
      return res.status(409).json({ error: 'already_subscribed' });
    }

    /* The customer id is NOT written to the profile here. The webhook writes
     * it once a subscription exists, so "has a customer id" keeps meaning
     * "has subscribed" — see the repair above for what went wrong when it
     * did not. To avoid a fresh Stripe customer on every abandoned attempt,
     * look for the one an earlier attempt made. Search is eventually
     * consistent (about a minute), so a very quick retry may still create a
     * second customer; that is untidy in the dashboard, not harmful. */
    if (!customerId) {
      const found = await stripe.customers.search({
        query: `metadata['supabase_user_id']:'${user.id}'`,
        limit: 1,
      });
      if (found.data[0]) {
        customerId = found.data[0].id;
      } else {
        const customer = await stripe.customers.create({
          email: profile?.email || user.email,
          name: [profile?.first_name, profile?.last_name].filter(Boolean).join(' ') || undefined,
          metadata: { supabase_user_id: user.id },
        });
        customerId = customer.id;
      }
    }

    /* A comp who subscribes before their free Premium ends should not pay
     * for weeks they already have. Start billing when the comp ends: Stripe
     * shows "free until <date>" on the checkout page, takes the card now and
     * charges on that date. Stripe requires a trial end at least 48 hours
     * out, so inside the last two days they are simply charged now. */
    const compEnds = comped && profile?.premium_until ? new Date(profile.premium_until) : null;
    const trialEnd =
      compEnds && compEnds.getTime() > Date.now() + 49 * 3600 * 1000
        ? Math.floor(compEnds.getTime() / 1000)
        : null;

    const origin = req.headers.origin || `https://${req.headers.host}`;

    const sessionParams = {
      mode: 'subscription',
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        metadata: { supabase_user_id: user.id, plan },
        ...(trialEnd ? { trial_end: trialEnd } : {}),
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
