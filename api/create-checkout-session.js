const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('stripe_customer_id, email, first_name, last_name, pro_status')
      .eq('id', user.id)
      .single();

    if (profile?.pro_status === 'active' || profile?.pro_status === 'trialing') {
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
