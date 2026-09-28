/* ═══════════════════════════════════════════════════════════════════════
   PRACTICE MODE TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/practice-modes.test.js
   No dependencies, no network. practice.html's mode block is sliced out and
   run in a VM against the REAL question banks, because the bug being guarded
   was invisible in the code and only showed up against real data:

   practice.html used to offer a fixed 5/10/20 questions at 10/20/45 minutes,
   and grey a mode out when the topic had fewer questions than the mode asked
   for. On A-level Politics — 10 questions per topic, every one a 12-, 24- or
   30-mark essay — that meant the 20-question mode was permanently disabled
   and "Quick Practice" offered five essays in ten minutes. Both failures
   needed a real bank to see, so these tests use them: every bank the app
   ships is walked, not a fixture.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');

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

/* ── slice the mode block out of practice.html and run it ──────────── */
const PRACTICE_HTML = fs.readFileSync(path.join(ROOT, 'practice.html'), 'utf8');
function loadModeBuilder() {
  const start = PRACTICE_HTML.indexOf('const MINUTES_PER_MARK');
  if (start < 0) throw new Error('MINUTES_PER_MARK not found in practice.html');
  const end = PRACTICE_HTML.indexOf('\n/* ═══', start);
  if (end < 0) throw new Error('could not find the end of the mode block');
  const block = PRACTICE_HTML.slice(start, end);
  if (!/function buildModes/.test(block)) throw new Error('buildModes not in the sliced block');
  const ctx = vm.createContext({ console });
  vm.runInContext(block + '\nthis.buildModes = buildModes;\nthis.MINUTES_PER_MARK = MINUTES_PER_MARK;', ctx);
  return { buildModes: ctx.buildModes, MINUTES_PER_MARK: ctx.MINUTES_PER_MARK };
}
const { buildModes, MINUTES_PER_MARK } = loadModeBuilder();

/* ── load every practice bank the way the browser does ─────────────── */
function loadBanks() {
  const sb = { console }; sb.window = sb;
  sb.document = { head: { appendChild() {} }, createElement: () => ({}), addEventListener() {},
                  getElementById: () => null, querySelector: () => null, querySelectorAll: () => [] };
  sb.localStorage = { getItem: k => (k === 'cached_level' ? 'a-level' : null), setItem() {}, removeItem() {} };
  const ctx = vm.createContext(sb);
  const run = f => { try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }); } catch (e) {} };
  run('level-config.js'); run('flashcards-config.js'); run('practice-bank-config.js');

  const out = [];
  Object.keys(sb.PRACTICE_BUNDLE_MAP).forEach(mapKey => {
    const base = mapKey.split('|')[0];
    const subject = base.slice(0, base.lastIndexOf('_'));
    const board = base.slice(base.lastIndexOf('_') + 1);
    sb.PRACTICE_BUNDLE_MAP[mapKey].forEach(run);
    const topics = sb.FLASHCARDS_TOPICS_FOR(subject, board);
    if (!topics) return;
    topics.forEach(t => {
      const qs = sb.getPracticeTopicQuestions(base, t.num || t.id);
      if (qs.length) out.push({ key: base, topic: t.num || t.id, questions: qs });
    });
  });
  return out;
}
const BANKS = loadBanks();
const byKey = (k) => BANKS.filter(b => b.key === k);
const meanMarks = (qs) => qs.reduce((s, q) => s + (Number(q.marks) || 0), 0) / qs.length;

/* ══════════════════════════════════════════════════════════════════ */

test('the real banks loaded (otherwise every test below is vacuous)', () => {
  check('banks were found', BANKS.length > 100, String(BANKS.length));
  check('Politics Edexcel is among them', byKey('Politics_Edexcel').length > 0);
  check('Computer Science OCR is among them', byKey('Computer Science_OCR').length > 0);
  check('the pace constant loaded', MINUTES_PER_MARK > 0.5 && MINUTES_PER_MARK < 3, String(MINUTES_PER_MARK));
});

test('every topic in every bank offers at least one runnable mode', () => {
  const broken = BANKS.filter(b => buildModes(b.questions).length === 0);
  check('no topic is left with zero modes', broken.length === 0,
        broken.slice(0, 5).map(b => `${b.key}/${b.topic}`).join(', '));
});

test('a bank with three or more questions offers three distinct modes', () => {
  const short = BANKS.filter(b => b.questions.length >= 3 && buildModes(b.questions).length < 3);
  check('all get three choices', short.length === 0,
        short.slice(0, 5).map(b => `${b.key}/${b.topic}: ${buildModes(b.questions).length}`).join(', '));
});

test('no mode asks for more questions than the topic has', () => {
  const over = [];
  BANKS.forEach(b => buildModes(b.questions).forEach(m => {
    if (m.count > b.questions.length) over.push(`${b.key}/${b.topic}: ${m.count} of ${b.questions.length}`);
  }));
  check('every count fits the bank', over.length === 0, over.slice(0, 5).join(', '));
});

test('modes ascend in both questions and minutes, with no repeats', () => {
  const bad = [];
  BANKS.forEach(b => {
    const modes = buildModes(b.questions);
    for (let i = 1; i < modes.length; i++) {
      if (modes[i].count <= modes[i - 1].count) bad.push(`${b.key}/${b.topic}: counts ${modes.map(m => m.count).join('<')}`);
      if (modes[i].minutes <= modes[i - 1].minutes) bad.push(`${b.key}/${b.topic}: minutes ${modes.map(m => m.minutes).join('<')}`);
    }
  });
  check('strictly increasing throughout', bad.length === 0, [...new Set(bad)].slice(0, 5).join(' | '));
});

test('timing tracks the real tariff, not a flat two minutes a question', () => {
  const bad = [];
  BANKS.forEach(b => {
    const mean = meanMarks(b.questions);
    if (mean <= 0) return;   // bank records no marks — falls back to 2 min/q
    buildModes(b.questions).forEach(m => {
      const expected = Math.max(5, Math.round(m.count * mean * MINUTES_PER_MARK));
      if (Math.abs(m.minutes - expected) > 1) {
        bad.push(`${b.key}/${b.topic}: ${m.count}q gave ${m.minutes}m, expected ~${expected}m`);
      }
      if (m.minutes < 5) bad.push(`${b.key}/${b.topic}: ${m.minutes}m is below the floor`);
    });
  });
  check('every mode is priced at exam pace', bad.length === 0, bad.slice(0, 5).join(' | '));
});

test('REGRESSION: Politics Edexcel gets its longest mode back', () => {
  const topics = byKey('Politics_Edexcel');
  check('Politics Edexcel topics found', topics.length > 0, String(topics.length));
  topics.forEach(b => {
    const modes = buildModes(b.questions);
    check(`${b.topic}: three modes offered`, modes.length === 3, String(modes.length));
    // The old code needed 20 questions for the longest mode and Politics has
    // 10, so the card was disabled on every single topic.
    check(`${b.topic}: longest mode is runnable`, modes.length > 0 && modes[modes.length - 1].count <= b.questions.length);
  });
});

test('REGRESSION: pace tracks the tariff instead of a flat two minutes', () => {
  const topics = byKey('Politics_Edexcel');
  check('Politics Edexcel topics found', topics.length > 0, String(topics.length));
  topics.forEach(b => {
    const mean = meanMarks(b.questions);
    const modes = buildModes(b.questions);
    const perQuestion = modes[0].minutes / modes[0].count;
    // Every Politics tariff is an extended answer, so a real exam allows at
    // least ~1.1 min a mark. The old code gave 2 minutes regardless, which
    // is what this guards: a 12-marker must get ~13+ min, a 30-marker ~33+.
    check(`${b.topic} (mean ${mean.toFixed(0)} marks): paced at >=1.1 min/mark`,
          perQuestion >= mean * 1.1, `${perQuestion.toFixed(1)} min/q for ${mean.toFixed(1)} marks`);
    // And nowhere near the flat two-minute rate that caused the complaint.
    check(`${b.topic}: not the old flat 2 min/question`,
          perQuestion > 4, `${perQuestion.toFixed(1)} min/q`);
  });
  // The headline case still deserves a named check: a 30-mark essay topic.
  const essay = topics.find(b => meanMarks(b.questions) >= 29);
  check('an all-30-mark topic exists to check', !!essay);
  if (essay) {
    const m = buildModes(essay.questions)[0];
    check(`${essay.topic}: a single 30-marker gets >=33 min`,
          m.minutes / m.count >= 33, `${(m.minutes / m.count).toFixed(1)} min/q`);
  }
});

test('short-answer subjects still get a long session, not a truncated one', () => {
  ['Computer Science_OCR', 'Chemistry_AQA', 'Biology_AQA'].forEach(key => {
    const topics = byKey(key);
    if (!topics.length) return;   // board not built at this level
    const modes = buildModes(topics[0].questions);
    const longest = modes[modes.length - 1];
    check(`${key}: longest mode is a substantial set`, longest.count >= 20, String(longest.count));
    check(`${key}: and runs over an hour`, longest.minutes >= 60, String(longest.minutes));
    check(`${key}: quick mode stays quick`, modes[0].minutes <= 35, String(modes[0].minutes));
  });
});

test('mode labels say what the session costs', () => {
  const b = byKey('Politics_Edexcel')[0];
  const modes = buildModes(b.questions);
  check('count is in the label', /\d+ question/.test(modes[0].desc), modes[0].desc);
  check('marks are in the label', /~\d+ marks/.test(modes[0].desc), modes[0].desc);
  check('singular reads correctly', modes[0].count !== 1 || /1 question ·/.test(modes[0].desc), modes[0].desc);
  const many = buildModes(byKey('Chemistry_AQA')[0].questions);
  check('plural reads correctly', /\d\d questions/.test(many[many.length - 1].desc), many[many.length - 1].desc);
});

test('degenerate banks do not throw or produce nonsense', () => {
  check('empty bank yields no modes', buildModes([]).length === 0);
  check('non-array yields no modes', buildModes(null).length === 0 && buildModes(undefined).length === 0);
  // A bank that records no marks falls back to the old 2 min/question rather
  // than dividing by zero.
  const noMarks = buildModes(Array.from({ length: 20 }, () => ({ q: 'x' })));
  check('mark-less bank still builds modes', noMarks.length > 0, String(noMarks.length));
  check('mark-less bank uses the 2 min/question fallback',
        noMarks.every(m => Math.abs(m.minutes - m.count * 2) <= 1),
        noMarks.map(m => `${m.count}q/${m.minutes}m`).join(' '));
  const single = buildModes([{ q: 'x', marks: 30 }]);
  check('a one-question bank offers exactly one mode', single.length === 1, String(single.length));
  check('and does not ask for more than it has', single[0].count === 1);
});

test('practice.html no longer ships the fixed table or a disabled card', () => {
  check('the fixed 5/10/20 MODES array is gone',
        !/const MODES = \[/.test(PRACTICE_HTML));
  check('modes are derived per topic at render time',
        /buildModes\(data\.questions\)/.test(PRACTICE_HTML));
  // The greyed-out card is what the user actually hit; it should not exist.
  check('no mode is rendered disabled',
        !/disabled style="opacity:0\.4;cursor:not-allowed;"/.test(PRACTICE_HTML));
  check('the pace constant is documented against real papers',
        /MINUTES_PER_MARK = [\d.]+;\s*\/\/.*\d\.\d/.test(PRACTICE_HTML));
});

/* ── report ────────────────────────────────────────────────────────── */
(async () => {
  await runAll();
  console.log('\n' + '─'.repeat(60));
  console.log('%d passed, %d failed', passed, failed);
  if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  ✗ ' + f)); }
  process.exit(failed ? 1 : 0);
})();
