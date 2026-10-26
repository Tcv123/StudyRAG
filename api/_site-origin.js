/* Where Stripe sends people back to after checkout or the billing portal.
 *
 * These used to be built straight from the Origin header, so anyone calling
 * the endpoint could have Stripe's hosted page redirect a paying customer to
 * a site of their choosing. Only our own hosts are honoured: production, the
 * Pages project and its preview deployments, and localhost for dev. Anything
 * else — or no header at all — gets production.
 *
 * contact.js keeps its own, narrower CORS list on purpose: that one decides
 * who may post, this one only where a redirect may point. */
const FALLBACK = 'https://www.raglearning.uk';

const EXACT = [
  'https://www.raglearning.uk',
  'https://raglearning.uk',
  'https://raglearning.pages.dev',
];

const PATTERNS = [
  /^https:\/\/[a-z0-9-]+\.raglearning\.pages\.dev$/,   // preview deployments
  /^http:\/\/(localhost|127\.0\.0\.1)(:\d{1,5})?$/,
];

function isAllowedOrigin(origin) {
  if (typeof origin !== 'string') return false;
  return EXACT.includes(origin) || PATTERNS.some(re => re.test(origin));
}

function siteOrigin(req) {
  const origin = req?.headers?.origin;
  return isAllowedOrigin(origin) ? origin : FALLBACK;
}

module.exports = { siteOrigin, isAllowedOrigin, FALLBACK };
