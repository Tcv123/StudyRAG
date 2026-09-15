const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

/* Stripe's plan nickname -> the value profiles.subscription_tier carries.
 * Anything not 'free' counts as Pro everywhere in the app; the specific
 * value only decides the label Settings shows. */
function mapTier(plan) {
  switch (plan) {
    case 'annual':   return 'pro_annual';
    case 'biannual': return 'pro_biannual';
    case 'monthly':  return 'pro_monthly';
    default:         return 'pro_monthly';
  }
}

function mapStatus(stripeStatus) {
  switch (stripeStatus) {
    case 'trialing':            return 'trialing';
    case 'active':              return 'active';
    case 'past_due':            return 'past_due';
    case 'canceled':            return 'canceled';
    case 'unpaid':              return 'past_due';
    case 'incomplete':          return 'free';
    case 'incomplete_expired':  return 'free';
    default:                    return 'free';
  }
}

async function resolveUserId(subscription) {
  if (subscription.metadata?.supabase_user_id) {
    return subscription.metadata.supabase_user_id;
  }
  try {
    const customer = await stripe.customers.retrieve(subscription.customer);
    return customer?.metadata?.supabase_user_id || null;
  } catch {
    return null;
  }
}

/* Write the subscription onto the profile.
 *
 * This used to update pro_status, pro_plan, pro_current_period_end and
 * stripe_subscription_id. None of those columns exist on profiles, so every
 * update failed — and because the failure was only logged and the handler
 * still returned 200, Stripe treated the webhook as delivered and never
 * retried. A customer could pay, and nothing anywhere recorded it.
 *
 * The columns the rest of the app reads are subscription_tier,
 * subscription_status and subscription_expires_at. Those are what we write.
 *
 * Throws on failure rather than logging and moving on, so the handler can
 * answer Stripe with a 500 and get the delivery retried.
 */
async function syncSubscriptionToProfile(subscription) {
  const userId = await resolveUserId(subscription);
  if (!userId) {
    console.warn('No supabase_user_id for subscription', subscription.id);
    return;
  }

  const status = mapStatus(subscription.status);
  const periodEnd = subscription.current_period_end
    ? new Date(subscription.current_period_end * 1000).toISOString()
    : null;

  /* A subscription that has lapsed is not a downgrade to a cheaper tier, it
   * is no subscription — and isPro() everywhere keys off tier !== 'free', so
   * leaving the tier set would keep Pro switched on for a cancelled account. */
  const live = status === 'active' || status === 'trialing' || status === 'past_due';

  const update = {
    stripe_customer_id:      subscription.customer,
    subscription_tier:       live ? mapTier(subscription.metadata?.plan) : 'free',
    subscription_status:     status,
    subscription_expires_at: periodEnd,
  };

  const { error } = await supabaseAdmin
    .from('profiles')
    .update(update)
    .eq('id', userId);

  if (error) {
    console.error('profile sync error:', error, 'user', userId, 'sub', subscription.id);
    throw new Error('profile sync failed: ' + error.message);
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('method_not_allowed');
  }

  let event;
  try {
    const rawBody = await readRawBody(req);
    const sig = req.headers['stripe-signature'];
    event = stripe.webhooks.constructEvent(rawBody, sig, WEBHOOK_SECRET);
  } catch (err) {
    console.error('webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        if (session.mode === 'subscription' && session.subscription) {
          const sub = await stripe.subscriptions.retrieve(session.subscription);
          if (!sub.metadata?.supabase_user_id && session.client_reference_id) {
            await stripe.subscriptions.update(sub.id, {
              metadata: { ...sub.metadata, supabase_user_id: session.client_reference_id },
            });
            sub.metadata = { ...sub.metadata, supabase_user_id: session.client_reference_id };
          }
          await syncSubscriptionToProfile(sub);
        }
        break;
      }
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
      case 'customer.subscription.trial_will_end': {
        await syncSubscriptionToProfile(event.data.object);
        break;
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        if (invoice.subscription) {
          const sub = await stripe.subscriptions.retrieve(invoice.subscription);
          await syncSubscriptionToProfile(sub);
        }
        break;
      }
      default:
        break;
    }
    return res.status(200).json({ received: true });
  } catch (err) {
    /* 500 on purpose. Stripe retries a non-2xx for up to three days, which is
     * the only thing standing between a transient database problem and a paid
     * subscription that the app never hears about. */
    console.error('webhook handler error:', err);
    return res.status(500).send('internal_error');
  }
};

module.exports.config = { api: { bodyParser: false } };
