/* ═══════════════════════════════════════════════════════════════════════
   GROQ MODEL CHAIN TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/groq-model.test.js
   No dependencies, no network — api/_groq.js is required directly and the
   Groq client is a stub that throws the SHAPE Groq actually returned when
   AI marking went down in September 2026:

     404 {"error":{"message":"The model `llama-3.3-70b-versatile` does not
     exist or you do not have access to it.","type":"invalid_request_error",
     "code":"model_not_found"}}

   That shape is the whole point. A stub that throws a bare Error would pass
   against a helper that only sniffed `err.status`, and a stub that only set
   `status` would pass against one that only read the body code — Groq's SDK
   nests the body differently across versions, so both paths are exercised
   here. The other half of the point is the negative case: a BAD REQUEST must
   NOT walk the chain, because retrying a malformed prompt against every
   candidate just multiplies the latency before failing anyway.
═══════════════════════════════════════════════════════════════════════ */

const path = require('path');
const { DEFAULT_MODELS, modelCandidates, isModelUnavailable, createCompletion, classifyGroqError } =
  require(path.join(__dirname, '..', 'api', '_groq.js'));

/* ── tiny test runner ──────────────────────────────────────────────── */
let passed = 0, failed = 0;
const failures = [];
function check(name, cond, detail) {
  if (cond) { passed++; }
  else { failed++; failures.push(name + (detail ? ' — ' + detail : '')); }
}
const QUEUE = [];
function test(name, fn) { QUEUE.push([name, fn]); }
async function runAll() {
  for (const [name, fn] of QUEUE) {
    process.stdout.write('\n' + name + '\n');
    try { await fn(); }
    catch (e) { failed++; failures.push(name + ' — threw: ' + e.message); console.log('   THREW:', e.message); }
  }
}

/* ── env helper: GROQ_MODEL is read at call time, so set and restore ── */
function withEnv(value, fn) {
  const had = Object.prototype.hasOwnProperty.call(process.env, 'GROQ_MODEL');
  const prev = process.env.GROQ_MODEL;
  if (value === undefined) delete process.env.GROQ_MODEL;
  else process.env.GROQ_MODEL = value;
  try { return fn(); }
  finally {
    if (had) process.env.GROQ_MODEL = prev;
    else delete process.env.GROQ_MODEL;
  }
}

/* ── the real outage error, in both SDK nestings ───────────────────── */
const BODY = {
  message: 'The model `llama-3.3-70b-versatile` does not exist or you do not have access to it.',
  type: 'invalid_request_error',
  code: 'model_not_found',
};
function modelNotFound(nesting) {
  const err = new Error(`404 ${JSON.stringify({ error: BODY })}`);
  err.status = 404;
  err.error = nesting === 'flat' ? BODY : { error: BODY };
  return err;
}
// A model error with NO status and NO parsed body — message only. This is what
// a thin wrapper or a re-thrown string leaves behind, and it must still route
// to the fallback rather than to a 500.
function modelNotFoundMessageOnly() {
  return new Error('The model `x` does not exist or you do not have access to it.');
}
function badRequest() {
  const err = new Error('400 {"error":{"message":"response_format is not supported","code":"invalid_value"}}');
  err.status = 400;
  err.error = { error: { message: 'response_format is not supported', code: 'invalid_value' } };
  return err;
}

/* ── stub Groq client: fails for every model in `failing` ──────────── */
function makeGroq(failing, errFactory = () => modelNotFound('nested')) {
  const attempts = [];
  return {
    attempts,
    chat: {
      completions: {
        create: async (params) => {
          attempts.push(params);
          if (failing.includes(params.model)) throw errFactory(params.model);
          return { choices: [{ message: { content: '{"ok":true}' } }], usage: { total_tokens: 1 } };
        },
      },
    },
  };
}

/* ══════════════════════════════════════════════════════════════════ */

test('modelCandidates: no GROQ_MODEL falls back to the built-in chain', () => {
  withEnv(undefined, () => {
    const c = modelCandidates();
    check('equals DEFAULT_MODELS', JSON.stringify(c) === JSON.stringify(DEFAULT_MODELS), c.join(','));
    check('chain is non-empty', c.length > 0);
  });
});

test('modelCandidates: GROQ_MODEL goes first, built-ins stay as a backstop', () => {
  withEnv('some-new-model', () => {
    const c = modelCandidates();
    check('configured model is first', c[0] === 'some-new-model', c[0]);
    check('built-in chain still follows', c.length === DEFAULT_MODELS.length + 1, String(c.length));
  });
});

test('modelCandidates: a comma-separated list is honoured in order', () => {
  withEnv(' a , b ,, c ', () => {
    const c = modelCandidates();
    check('order preserved and blanks dropped', c.slice(0, 3).join(',') === 'a,b,c', c.slice(0, 3).join(','));
  });
});

test('modelCandidates: naming a built-in does not duplicate it', () => {
  withEnv(DEFAULT_MODELS[1], () => {
    const c = modelCandidates();
    const seen = c.filter(m => m === DEFAULT_MODELS[1]).length;
    check('appears exactly once', seen === 1, String(seen));
    check('and is first', c[0] === DEFAULT_MODELS[1], c[0]);
  });
});

test('isModelUnavailable: the real outage error is recognised in every shape', () => {
  check('nested body', isModelUnavailable(modelNotFound('nested')));
  check('flat body',   isModelUnavailable(modelNotFound('flat')));
  check('message only, no status', isModelUnavailable(modelNotFoundMessageOnly()));
  check('a 400 bad request is NOT a model problem', !isModelUnavailable(badRequest()));
  check('an ordinary error is NOT a model problem', !isModelUnavailable(new Error('socket hang up')));
});

test('createCompletion: falls through to the next model when the first is unreachable', async () => {
  await withEnv(undefined, async () => {
    const groq = makeGroq([DEFAULT_MODELS[0]]);
    const out = await createCompletion(groq, { messages: [], temperature: 0.3 });
    check('a completion came back', !!out);
    check('served by the second candidate', out._model === DEFAULT_MODELS[1], String(out._model));
    check('tried exactly two models', groq.attempts.length === 2, String(groq.attempts.length));
    check('attempt order was best-first',
          groq.attempts.map(a => a.model).join(',') === DEFAULT_MODELS.slice(0, 2).join(','),
          groq.attempts.map(a => a.model).join(','));
  });
});

test('createCompletion: caller params survive the retry untouched', async () => {
  await withEnv(undefined, async () => {
    const groq = makeGroq([DEFAULT_MODELS[0]]);
    await createCompletion(groq, {
      messages: [{ role: 'user', content: 'hi' }],
      response_format: { type: 'json_object' },
      temperature: 0.1,
      max_tokens: 1024,
    });
    const last = groq.attempts[groq.attempts.length - 1];
    check('response_format preserved', last.response_format?.type === 'json_object');
    check('temperature preserved', last.temperature === 0.1, String(last.temperature));
    check('max_tokens preserved', last.max_tokens === 1024, String(last.max_tokens));
    check('messages preserved', last.messages.length === 1);
    check('model was filled in per attempt', last.model === DEFAULT_MODELS[1], String(last.model));
  });
});

test('createCompletion: the happy path makes exactly one call', async () => {
  await withEnv(undefined, async () => {
    const groq = makeGroq([]);
    const out = await createCompletion(groq, { messages: [] });
    check('one attempt only', groq.attempts.length === 1, String(groq.attempts.length));
    check('served by the primary', out._model === DEFAULT_MODELS[0], String(out._model));
  });
});

test('createCompletion: a bad request throws immediately, no chain walk', async () => {
  await withEnv(undefined, async () => {
    const groq = makeGroq(DEFAULT_MODELS, () => badRequest());
    let thrown = null;
    try { await createCompletion(groq, { messages: [] }); }
    catch (e) { thrown = e; }
    check('it threw', !!thrown);
    check('only one model was tried', groq.attempts.length === 1, String(groq.attempts.length));
    check('the original error surfaced', /response_format/.test(thrown?.message || ''), thrown?.message);
  });
});

test('createCompletion: every candidate unreachable rethrows the last error', async () => {
  await withEnv(undefined, async () => {
    const groq = makeGroq(DEFAULT_MODELS);
    let thrown = null;
    try { await createCompletion(groq, { messages: [] }); }
    catch (e) { thrown = e; }
    check('it threw', !!thrown);
    check('every candidate was tried', groq.attempts.length === DEFAULT_MODELS.length,
          String(groq.attempts.length));
    check('the error is still the model error', isModelUnavailable(thrown));
  });
});

test('classifyGroqError: the outage reads as 503 model_unavailable, not 500', () => {
  withEnv(undefined, () => {
    const { code, body } = classifyGroqError(modelNotFound('nested'));
    check('status is 503', code === 503, String(code));
    check('error code is model_unavailable', body.error === 'model_unavailable', body.error);
    check('message names the models tried', body.message.includes(DEFAULT_MODELS[0]), body.message);
  });
});

test('classifyGroqError: rate limits, bad keys and everything else keep their old codes', () => {
  const rate = classifyGroqError(new Error('429 rate limit exceeded'));
  check('rate limit is 429', rate.code === 429 && rate.body.error === 'rate_limited', JSON.stringify(rate));

  const key = classifyGroqError(new Error('401 Invalid API key'));
  check('bad key is 502', key.code === 502 && key.body.error === 'api_key_invalid', JSON.stringify(key));

  const other = classifyGroqError(new Error('socket hang up'));
  check('anything else is 500', other.code === 500 && other.body.error === 'internal_error', JSON.stringify(other));
  check('and the detail is preserved', other.body.message === 'socket hang up', other.body.message);
});

test('the three endpoints all route through the shared chain', () => {
  const fs = require('fs');
  const ROOT = path.join(__dirname, '..');
  ['mark-essay.js', 'generate-model-answer.js', 'mark-against-scheme.js'].forEach(f => {
    const src = fs.readFileSync(path.join(ROOT, 'api', f), 'utf8');
    check(`${f} requires _groq`, src.includes("require('./_groq')"));
    check(`${f} calls createCompletion`, src.includes('createCompletion(groq,'));
    check(`${f} uses classifyGroqError`, src.includes('classifyGroqError(err)'));
    // The regression this file exists for: a hard-coded model id anywhere in
    // an endpoint means that endpoint can go down on its own again.
    check(`${f} hard-codes no model id`, !/model:\s*['"][\w.\/-]+['"]/.test(src));
  });
});

/* ── report ────────────────────────────────────────────────────────── */
(async () => {
  await runAll();
  console.log('\n' + '─'.repeat(60));
  console.log('%d passed, %d failed', passed, failed);
  if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  ✗ ' + f)); }
  process.exit(failed ? 1 : 0);
})();
