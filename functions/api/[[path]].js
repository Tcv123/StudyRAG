/**
 * Cloudflare Pages entry point for everything under /api/.
 *
 * The handlers in api/ were written for Vercel, where the site used to be
 * hosted: `(req, res) => …` with a Node-style request and an Express-style
 * response. Rather than rewrite every endpoint, this file translates a
 * Cloudflare Request into that shape, runs the unchanged handler, and turns
 * what it wrote into a Response.
 *
 * Needs the nodejs_compat flag (wrangler.toml) for Buffer, crypto and the
 * npm packages the handlers pull in.
 *
 * Files whose name starts with `_` are shared modules, not endpoints. Only
 * what is listed in ROUTES is reachable.
 */

const ROUTES = {
  'contact':                   () => require('../../api/contact.js'),
  'create-checkout-session':   () => require('../../api/create-checkout-session.js'),
  'create-portal-session':     () => require('../../api/create-portal-session.js'),
  'generate-model-answer':     () => require('../../api/generate-model-answer.js'),
  'mark-against-scheme':       () => require('../../api/mark-against-scheme.js'),
  'mark-essay':                () => require('../../api/mark-essay.js'),
  'stripe-webhook':            () => require('../../api/stripe-webhook.js'),
  'unsubscribe':               () => require('../../api/unsubscribe.js'),
  'cron/exam-timetable-check': () => require('../../api/cron/exam-timetable-check.js'),
  'cron/premium-expiry':       () => require('../../api/cron/premium-expiry.js'),
  'cron/setup-reminder':       () => require('../../api/cron/setup-reminder.js'),
};

export async function onRequest(context) {
  const { request, env, params } = context;

  /* The handlers read configuration from process.env, several of them at
   * module load (the Stripe and Supabase clients). Copy the Pages variables
   * in before the first require so those clients see them. The require is
   * lazy for the same reason. */
  for (const [k, v] of Object.entries(env)) {
    if (typeof v === 'string') process.env[k] = v;
  }

  const route = [].concat(params.path || []).join('/').replace(/\.js$/, '');
  const load = ROUTES[route];
  if (!load) return Response.json({ error: 'not_found' }, { status: 404 });

  const res = new ResponseCollector();

  try {
    /* Inside the try: a handler builds its Stripe and Supabase clients when
     * it loads, and a missing variable makes that throw. Without this the
     * caller gets Cloudflare's bare "error code: 1101" page. */
    const mod = load();
    const handler = typeof mod === 'function' ? mod : mod.default;
    const req = await toNodeRequest(request, mod.config?.api?.bodyParser === false);
    await handler(req, res);
  } catch (err) {
    console.error(`[api/${route}] unhandled error:`, err);
    if (!res.finished) return Response.json({ error: 'internal_error' }, { status: 500 });
  }
  return res.toResponse();
}

/* The subset of Vercel's request the handlers use: method, lower-cased
 * headers, query, a parsed body, and — for the Stripe webhook, which turns
 * body parsing off to verify the signature — the raw bytes as a stream. */
async function toNodeRequest(request, rawOnly) {
  const url = new URL(request.url);
  const raw = ['GET', 'HEAD'].includes(request.method)
    ? Buffer.alloc(0)
    : Buffer.from(await request.arrayBuffer());

  const headers = {};
  for (const [k, v] of request.headers) headers[k.toLowerCase()] = v;

  const query = {};
  for (const [k, v] of url.searchParams) query[k] = v;

  let body;
  if (!rawOnly && raw.length) {
    const type = headers['content-type'] || '';
    const text = raw.toString('utf8');
    if (type.includes('application/json')) {
      try { body = JSON.parse(text); } catch { body = text; }
    } else if (type.includes('application/x-www-form-urlencoded')) {
      body = Object.fromEntries(new URLSearchParams(text));
    } else {
      body = text;
    }
  }

  return {
    method: request.method,
    url: url.pathname + url.search,
    headers,
    query,
    body,
    on(event, cb) {
      if (event === 'data' && raw.length) queueMicrotask(() => cb(raw));
      if (event === 'end') queueMicrotask(() => queueMicrotask(cb));
      return this;
    },
  };
}

/* The Express-style calls the handlers make: status(), setHeader(), and
 * one of json() / send() / end() to finish. */
class ResponseCollector {
  constructor() {
    this.statusCode = 200;
    this.headers = new Headers();
    this.payload = null;
    this.finished = false;
  }
  status(code) { this.statusCode = code; return this; }
  setHeader(name, value) { this.headers.set(name, String(value)); return this; }
  getHeader(name) { return this.headers.get(name); }
  json(obj) {
    if (!this.headers.has('content-type')) this.headers.set('content-type', 'application/json; charset=utf-8');
    return this.end(JSON.stringify(obj));
  }
  send(data) {
    if (data !== null && typeof data === 'object' && !(data instanceof Uint8Array)) return this.json(data);
    return this.end(data);
  }
  end(data) {
    if (data != null) this.payload = data;
    this.finished = true;
    return this;
  }
  toResponse() {
    const noBody = this.statusCode === 204 || this.statusCode === 304;
    return new Response(noBody ? null : this.payload, { status: this.statusCode, headers: this.headers });
  }
}
