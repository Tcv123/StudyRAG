/* ═══════════════════════════════════════════════════════════════════════
   MEDAL ENGINE TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/medals.test.js
   No dependencies, no network — medals-engine.js is loaded into a VM with
   a fake Supabase client that enforces the same UNIQUE (user_id, medal_id)
   constraint the real user_medals table has. That constraint is the whole
   point: the bug that silently ate every medal after 10pm was a batch
   insert containing the same id twice, so a stub that tolerates duplicates
   would prove nothing.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DAY = 86400000;

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
function has(set, id)  { return set.has(id); }

/* ── date helpers, all relative to the real clock ──────────────────── */
const at = (hour, min = 0, dayOffset = 0) => {
  const d = new Date(Date.now() + dayOffset * DAY);
  d.setHours(hour, min, 0, 0);
  return d.toISOString();
};
const daysAgo = (n) => new Date(Date.now() - n * DAY).toISOString();

/* ── fake supabase, with the real unique constraint ────────────────── */
function makeDb(state) {
  const medalKeys = new Set(state.medals || []);
  state.writes = [];
  state.rejectedBatches = [];

  const rowsFor = (table) => ({
    topic_progress:     state.topicRows || [],
    user_subjects:      state.subjects  || [],
    practice_attempts:  state.attempts  || [],
    user_medals:        [...medalKeys].map(id => ({ medal_id: id })),
  }[table] ?? []);

  function builder(table) {
    const api = {
      select() { return api; }, eq() { return api; }, order() { return api; },
      limit()  { return api; }, gte() { return api; }, update(patch) {
        if (table === 'profiles') Object.assign(state.profile, patch);
        return api;
      },
      single()      { return Promise.resolve({ data: table === 'profiles' ? state.profile : null, error: null }); },
      maybeSingle() { return Promise.resolve({ data: table === 'profiles' ? state.profile : null, error: null }); },
      then(res, rej) { return Promise.resolve({ data: rowsFor(table), error: null }).then(res, rej); },

      // Postgres semantics: a plain INSERT violating UNIQUE rejects the WHOLE
      // statement — every medal in the batch is lost. This is the old bug.
      insert(rows) {
        const list = [].concat(rows);
        const ids = list.map(r => r.medal_id);
        const dupInBatch  = ids.length !== new Set(ids).size;
        const dupExisting = ids.some(id => medalKeys.has(id));
        if (dupInBatch || dupExisting) {
          state.rejectedBatches.push(ids);
          return Promise.resolve({ error: { code: '23505', message: 'duplicate key value violates unique constraint "user_medals_user_id_medal_id_key"' } });
        }
        ids.forEach(id => { medalKeys.add(id); state.writes.push(id); });
        return Promise.resolve({ error: null });
      },
      // ON CONFLICT DO NOTHING — conflicts are skipped, batch still commits.
      upsert(rows, opts) {
        const list = [].concat(rows);
        if (!opts || !opts.ignoreDuplicates) return api.insert(rows);
        list.forEach(r => {
          if (!medalKeys.has(r.medal_id)) { medalKeys.add(r.medal_id); state.writes.push(r.medal_id); }
        });
        return Promise.resolve({ error: null });
      },
    };
    return api;
  }
  return { from: builder, _medals: medalKeys };
}

/* ── load the engine into a sandbox ────────────────────────────────── */
function loadEngine(state) {
  const ctx = {
    console: { log() {}, warn() {}, error() {} },
    localStorage: { getItem: () => state.profile.level || 'gcse', setItem() {} },
    supabaseClient: makeDb(state),
    Date, Math, JSON, Set, Map, Array, Object, Promise, isNaN, window: {},
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'medals-data.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'medals-engine.js'), 'utf8'), ctx);
  // Top-level `const` lives in the script's lexical scope, not on the context
  // object, so reach the maps by evaluating inside the sandbox.
  ctx.peek = (expr) => vm.runInContext(expr, ctx);
  return ctx;
}

const USER = { id: 'u1' };
const baseProfile = (over = {}) => Object.assign({
  streak_count: 0, first_name: 'Test', last_name: 'User',
  created_at: daysAgo(10), level: 'gcse', perfect_diagnostics: 0,
}, over);

/* ═══════════════════════════════════════════════════════════════════
   1. BUG 1 — the after-10pm wipeout
═══════════════════════════════════════════════════════════════════ */
test('Bug 1 · a late-night session saves every medal (no unique-constraint wipeout)', async () => {
  const topicRows = [
    { subject: 'Computer Science', exam_board: 'OCR', topic: '1.1', rag_status: 'green', updated_at: at(23, 30) },
    { subject: 'Computer Science', exam_board: 'OCR', topic: '1.2', rag_status: 'green', updated_at: at(23, 40) },
    { subject: 'Computer Science', exam_board: 'OCR', topic: '1.3', rag_status: 'amber', updated_at: at(23, 45) },
  ];
  const state = {
    topicRows, subjects: [{ subject: 'Computer Science', exam_board: 'OCR' }],
    attempts: [], medals: [], profile: baseProfile(),
  };
  const ctx = loadEngine(state);
  const got = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, new Set());

  check('night_owl earned from a 23:30 diagnostic', has(got, 'night_owl'));
  check('the rest of the batch survived alongside it',
        has(got, 'first_diagnostic') && has(got, 'first_green') && has(got, 'first_amber'));
  check('no batch was rejected by the unique constraint',
        state.rejectedBatches.length === 0, JSON.stringify(state.rejectedBatches));
  check('no id written twice',
        state.writes.length === new Set(state.writes).size);
  check('returned set matches what is actually in the database',
        [...got].every(id => state.writes.includes(id)));
  console.log('   medals saved: %d, rejected batches: %d', state.writes.length, state.rejectedBatches.length);
});

test('Bug 1 · canary — the OLD duplicate-push behaviour still fails this harness', async () => {
  // Proves the stub really does enforce the constraint, so the test above is
  // meaningful rather than vacuous.
  const state = { medals: [], profile: baseProfile(), writes: [], rejectedBatches: [] };
  const db = makeDb(state);
  const oldStyleBatch = ['first_green', 'night_owl', 'night_owl'];   // what the old award() built
  const { error } = await db.from('user_medals')
    .insert(oldStyleBatch.map(id => ({ user_id: 'u1', medal_id: id })));
  check('old-style batch is rejected', !!error && error.code === '23505');
  check('and first_green is lost with it', !state.writes.includes('first_green'));
});

/* ═══════════════════════════════════════════════════════════════════
   2. BUG 4 — time medals follow study time, not page-open time
═══════════════════════════════════════════════════════════════════ */
test('Bug 4 · Early Bird comes from a 07:15 diagnostic, whatever time the page loads', async () => {
  const topicRows = [
    { subject: 'Biology', exam_board: 'AQA', topic: '4.1', rag_status: 'green', updated_at: at(7, 15) },
  ];
  const state = {
    topicRows, subjects: [{ subject: 'Biology', exam_board: 'AQA' }],
    attempts: [{ answered: 0, questions: 0, details: [], taken_at: at(12, 30) }],
    medals: [], profile: baseProfile(),
  };
  const ctx = loadEngine(state);
  const got = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, new Set());
  check('early_bird awarded', has(got, 'early_bird'));
  check('lunch_learner awarded from the 12:30 practice attempt', has(got, 'lunch_learner'));
  check('night_owl NOT awarded — nothing happened after 22:00', !has(got, 'night_owl'));
  check('midnight_oil NOT awarded', !has(got, 'midnight_oil'));
});

test('Bug 4 · Weekend Warrior needs a Saturday AND a Sunday', async () => {
  // Walk back to the most recent Saturday and Sunday so the test is date-proof.
  const back = (targetDay) => {
    for (let i = 0; i < 8; i++) {
      const d = new Date(Date.now() - i * DAY);
      if (d.getDay() === targetDay) { d.setHours(14, 0, 0, 0); return d.toISOString(); }
    }
  };
  const sat = back(6), sun = back(0);
  const mk = (ts, topic) => ({ subject: 'Biology', exam_board: 'AQA', topic, rag_status: 'green', updated_at: ts });

  const satOnly = { topicRows: [mk(sat, '4.1')], subjects: [{ subject: 'Biology', exam_board: 'AQA' }],
                    attempts: [], medals: [], profile: baseProfile() };
  let ctx = loadEngine(satOnly);
  let got = await ctx.checkAndAwardMedals(USER, satOnly.topicRows, satOnly.subjects, new Set());
  check('Saturday alone → weekend_scholar but NOT weekend_warrior',
        has(got, 'weekend_scholar') && !has(got, 'weekend_warrior'));

  const both = { topicRows: [mk(sat, '4.1'), mk(sun, '4.2')], subjects: [{ subject: 'Biology', exam_board: 'AQA' }],
                 attempts: [], medals: [], profile: baseProfile() };
  ctx = loadEngine(both);
  got = await ctx.checkAndAwardMedals(USER, both.topicRows, both.subjects, new Set());
  check('Saturday + Sunday → weekend_warrior', has(got, 'weekend_warrior'));
});

/* ═══════════════════════════════════════════════════════════════════
   3. BUG 2 — the twelve medals nobody could earn
═══════════════════════════════════════════════════════════════════ */
test('Bug 2 · practice + written medals fire off real practice_attempts data', async () => {
  const attempts = [
    { answered: 15, questions: 15, taken_at: daysAgo(1),
      details: [...Array(6).fill({ level: 'full' }), ...Array(9).fill({ level: 'partial' })] },
    { answered: 12, questions: 12, taken_at: daysAgo(2),
      details: [...Array(3).fill({ level: 'full' }), ...Array(9).fill({ level: 'miss' })] },
  ]; // 27 answered, 9 at full marks
  const topicRows = [{ subject: 'Biology', exam_board: 'AQA', topic: '4.1', rag_status: 'amber', updated_at: daysAgo(1) }];
  const state = { topicRows, subjects: [{ subject: 'Biology', exam_board: 'AQA' }],
                  attempts, medals: [], profile: baseProfile() };
  const ctx = loadEngine(state);
  const got = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, new Set());

  check('practice_first (27 questions answered)', has(got, 'practice_first'));
  check('practice_10',  has(got, 'practice_10'));
  check('practice_25',  has(got, 'practice_25'));
  check('practice_50 NOT yet (27 < 50)', !has(got, 'practice_50'));
  check('first_written_full (9 full-mark questions)', has(got, 'first_written_full'));
  check('written_5_full',  has(got, 'written_5_full'));
});

test('Bug 2 · daily_3 / daily_5 fire on a heavy single day', async () => {
  const mk = (i, rag) => ({ subject: 'Computer Science', exam_board: 'OCR', topic: '1.' + i,
                            rag_status: rag, updated_at: at(15, i) });
  const topicRows = [1,2,3,4,5,6].map(i => mk(i, i <= 4 ? 'green' : 'amber'));
  const state = { topicRows, subjects: [{ subject: 'Computer Science', exam_board: 'OCR' }],
                  attempts: [], medals: [], profile: baseProfile() };
  const ctx = loadEngine(state);
  const got = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, new Set());
  check('daily_3_diag (6 topics today)', has(got, 'daily_3_diag'));
  check('daily_5_diag',                  has(got, 'daily_5_diag'));
  check('daily_7_diag NOT yet (6 < 7)', !has(got, 'daily_7_diag'));
  check('three_green_one_day (4 greens today)', has(got, 'three_green_one_day'));
  check('five_green_one_day NOT yet',   !has(got, 'five_green_one_day'));
});

test('Bug 2 · perfect_score → perfect_3 → perfect_10 via the new counter', async () => {
  const state = { topicRows: [], subjects: [], attempts: [], medals: [], profile: baseProfile() };
  const ctx = loadEngine(state);
  const perfectRun = [
    { tier: 'green', pts: 3 }, { tier: 'green', pts: 3 }, { tier: 'green', pts: 3 },
    { tier: 'amber', pts: 2 }, { tier: 'amber', pts: 2 }, { tier: 'amber', pts: 2 },
    { tier: 'red',   pts: 1 }, { tier: 'red',   pts: 1 }, { tier: 'red',   pts: 1 }, { tier: 'red', pts: 1 },
  ];

  await ctx.awardDiagnosticMedals(USER, perfectRun, 'green');
  check('run 1 → perfect_score',        state.writes.includes('perfect_score'));
  check('run 1 → all_tiers_green',      state.writes.includes('all_tiers_green'));
  check('run 1 → counter is 1',         state.profile.perfect_diagnostics === 1);
  check('run 1 → no perfect_3 yet',     !state.writes.includes('perfect_3'));

  await ctx.awardDiagnosticMedals(USER, perfectRun, 'green');
  await ctx.awardDiagnosticMedals(USER, perfectRun, 'green');
  check('run 3 → counter is 3',         state.profile.perfect_diagnostics === 3);
  check('run 3 → perfect_3 awarded',    state.writes.includes('perfect_3'));
  check('run 3 → perfect_10 not yet',   !state.writes.includes('perfect_10'));

  for (let i = 0; i < 7; i++) await ctx.awardDiagnosticMedals(USER, perfectRun, 'green');
  check('run 10 → counter is 10',       state.profile.perfect_diagnostics === 10);
  check('run 10 → perfect_10 awarded',  state.writes.includes('perfect_10'));
  check('repeat perfect runs never rejected by the constraint',
        state.rejectedBatches.length === 0);
});

test('Bug 2 · all_tiers_green needs marks in ALL THREE tiers', async () => {
  const state = { topicRows: [], subjects: [], attempts: [], medals: [], profile: baseProfile() };
  const ctx = loadEngine(state);
  // Strong on green + amber, zero on every red question.
  await ctx.awardDiagnosticMedals(USER, [
    { tier: 'green', pts: 3 }, { tier: 'amber', pts: 2 },
    { tier: 'red', pts: 0 }, { tier: 'red', pts: 0 },
  ], 'amber');
  check('no all_tiers_green when the red tier scored nothing',
        !state.writes.includes('all_tiers_green'));
  check('no perfect_score on a non-perfect run',
        !state.writes.includes('perfect_score'));
});

test('Bug 2 · every one of the 100 medals is reachable by some code path', async () => {
  const src = ['medals-engine.js', ...fs.readdirSync(path.join(ROOT, 'diagnostics')).map(f => 'diagnostics/' + f),
               'study-tracker.js']
    .filter(f => f.endsWith('.js') || f.endsWith('.html'))
    .map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n');
  const defined = [...fs.readFileSync(path.join(ROOT, 'medals-data.js'), 'utf8')
    .matchAll(/\{\s*id:\s*'([^']+)'/g)].map(m => m[1]);
  const unreachable = defined.filter(id =>
    !new RegExp(`award\\('${id}'\\)|'${id}'`).test(src));
  check('100 medals defined', defined.length === 100, 'got ' + defined.length);
  check('0 unreachable medals', unreachable.length === 0, unreachable.join(', '));
});

/* ═══════════════════════════════════════════════════════════════════
   4. BUG 3 — Biology Edexcel GCSE is a real, countable curriculum
═══════════════════════════════════════════════════════════════════ */
test('Bug 3 · a Biology Edexcel GCSE student can master their subject', async () => {
  const topicRows = Array.from({ length: 9 }, (_, i) => ({
    subject: 'Biology', exam_board: 'Edexcel', topic: String(i + 1),
    rag_status: 'green', updated_at: daysAgo(1),
  }));
  const state = { topicRows, subjects: [{ subject: 'Biology', exam_board: 'Edexcel' }],
                  attempts: [], medals: [], profile: baseProfile({ level: 'gcse' }) };
  const ctx = loadEngine(state);
  const got = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, new Set());

  check('topic count is known (9 topics)', ctx.peek("TOPIC_TOTAL['biology-edexcel-gcse']") === 9);
  check('subject_master',          has(got, 'subject_master'));
  check('green_all_one_board',     has(got, 'green_all_one_board'));
  check('all_clear',               has(got, 'all_clear'));
  check('diag_100 (all topics tested)', has(got, 'diag_100'));
  check('all_topics_tested',       has(got, 'all_topics_tested'));
});

test('Bug 3 · Edexcel IGCSE maps to its own 21-topic curriculum', async () => {
  const state = { topicRows: [], subjects: [], attempts: [], medals: [], profile: baseProfile() };
  const ctx = loadEngine(state);
  const key = ctx.peek("_lvLookup(SUBJECT_TOPIC_KEY, 'Biology_Edexcel IGCSE', 'gcse')");
  const total = ctx.peek("TOPIC_TOTAL['biology-edexcel-igcse']");
  check('IGCSE key resolves', key === 'biology-edexcel-igcse', String(key));
  check('IGCSE has 21 topics', total === 21, String(total));
});

test('Bug 3 · no diagnostic writes a subject/board it does not read back', async () => {
  const dir = path.join(ROOT, 'diagnostics');
  const bad = [];
  for (const f of fs.readdirSync(dir).filter(n => n.includes('diagnostic') && n.endsWith('.html'))) {
    const s = fs.readFileSync(path.join(dir, f), 'utf8');
    const reads  = [...s.matchAll(/\.eq\('subject',\s*'([^']+)'\)\.eq\('exam_board',\s*'([^']+)'\)/g)]
      .map(m => m[1] + '|' + m[2]);
    const writes = [...s.matchAll(/insert\(\{[^}]*?subject:\s*'([^']+)',\s*exam_board:\s*'([^']+)'/g)]
      .map(m => m[1] + '|' + m[2]);
    if (!reads.length || !writes.length) { bad.push(f + ' (no read/write pair found)'); continue; }
    if (writes.some(w => w !== reads[0])) bad.push(`${f}: reads ${reads[0]}, writes ${[...new Set(writes)]}`);
  }
  check('all 45 diagnostics are self-consistent', bad.length === 0, bad.join(' | '));
});

/* ═══════════════════════════════════════════════════════════════════
   5. BUG 5 — the Medals page awards
═══════════════════════════════════════════════════════════════════ */
test('Bug 5 · loadAndCheckMedals fetches and awards on its own', async () => {
  const topicRows = [
    { subject: 'Computer Science', exam_board: 'OCR', topic: '1.1', rag_status: 'green', updated_at: daysAgo(0) },
    { subject: 'Computer Science', exam_board: 'OCR', topic: '1.2', rag_status: 'amber', updated_at: daysAgo(0) },
  ];
  const state = { topicRows, subjects: [{ subject: 'Computer Science', exam_board: 'OCR' }],
                  attempts: [], medals: [], profile: baseProfile() };
  const ctx = loadEngine(state);
  const got = await ctx.loadAndCheckMedals(USER);
  check('medals awarded without the Dashboard having run',
        has(got, 'first_diagnostic') && has(got, 'first_green') && has(got, 'first_amber'));
  check('and they were actually persisted', state.writes.includes('first_green'));
});

/* ═══════════════════════════════════════════════════════════════════
   6. Idempotency — re-running must not re-write or fail
═══════════════════════════════════════════════════════════════════ */
test('Idempotency · a second run awards nothing new and writes nothing', async () => {
  const topicRows = [
    { subject: 'Biology', exam_board: 'AQA', topic: '4.1', rag_status: 'green', updated_at: at(23, 10) },
    { subject: 'Biology', exam_board: 'AQA', topic: '4.2', rag_status: 'amber', updated_at: at(7, 5) },
  ];
  const state = { topicRows, subjects: [{ subject: 'Biology', exam_board: 'AQA' }],
                  attempts: [], medals: [], profile: baseProfile({ streak_count: 9 }) };
  const ctx = loadEngine(state);

  const first = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, new Set());
  const afterFirst = state.writes.length;
  const second = await ctx.checkAndAwardMedals(USER, topicRows, state.subjects, first);

  check('run 1 awarded something', afterFirst > 0, String(afterFirst));
  check('run 2 wrote nothing new', state.writes.length === afterFirst,
        `${afterFirst} → ${state.writes.length}`);
  check('run 2 returned the same set', second.size === first.size);
  check('no rejected batches across either run', state.rejectedBatches.length === 0);
});

/* ── report ────────────────────────────────────────────────────────── */
(async () => {
  await runAll();
  console.log('\n' + '─'.repeat(60));
  console.log('%d passed, %d failed', passed, failed);
  if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  ✗ ' + f)); }
  process.exit(failed ? 1 : 0);
})();
