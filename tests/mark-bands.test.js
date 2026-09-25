/* ═══════════════════════════════════════════════════════════════════════
   MARK BAND TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/mark-bands.test.js
   No dependencies, no network.

   api/_mark-bands.js feeds published level-of-response grids to the AI
   marker. A grid that no longer matches the board is worse than no grid at
   all — it grades confidently against the wrong boundary — so the point of
   this file is DRIFT, in both directions:

     • the Edexcel grids are copied out of papers-config.js at build time,
       so they must still equal what papers-config.js says right now;
     • every tariff the Politics question banks actually ask must have a
       grid, or the highest-tariff questions silently fall back to the
       generic prompt again, which is the bug this was written to fix.

   The AQA half cannot be checked against the repo (papers-config.js holds
   no AQA Politics mark schemes), so it is checked for internal consistency
   instead: contiguous bands, covering 1..tariff, top band ending exactly on
   the tariff.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const { MARK_BANDS, bandsFor, rubricRules, renderBands } = require(path.join(ROOT, 'api', '_mark-bands.js'));
const { loadSubjects, gridsFor } = require(path.join(ROOT, 'scripts', 'build-mark-bands.js'));

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

/* ── load a question bank the way the browser does ─────────────────── */
function bankTariffs(bankFile, globalName) {
  const sandbox = {}; sandbox.window = sandbox; sandbox.console = console;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, bankFile), 'utf8'), ctx, { filename: bankFile });
  const bank = vm.runInContext(globalName, ctx);
  const tariffs = new Set();
  Object.values(bank).forEach(qs => (Array.isArray(qs) ? qs : []).forEach(q => {
    if (q && typeof q.marks === 'number') tariffs.add(q.marks);
  }));
  return [...tariffs].sort((a, b) => a - b);
}

/* ══════════════════════════════════════════════════════════════════ */

test('Edexcel grids still match papers-config.js exactly', () => {
  const derived = gridsFor(loadSubjects(), 'Politics', 'Edexcel');
  const tariffs = Object.keys(derived).map(Number);
  check('papers-config.js still has Politics Edexcel grids', tariffs.length > 0, String(tariffs.length));

  tariffs.forEach(t => {
    const committed = MARK_BANDS[`Politics|Edexcel|${t}`];
    check(`${t}-mark grid is present in _mark-bands.js`, !!committed);
    if (!committed) return;
    // Byte-for-byte on the level array: ranges, descriptors and the full
    // Pearson criteria text. A reworded descriptor is drift too.
    check(`${t}-mark grid is identical to papers-config.js`,
          JSON.stringify(committed.levels) === JSON.stringify(derived[t].levels),
          'run `node scripts/build-mark-bands.js` to regenerate');
  });
});

test('every grid is contiguous and covers 1..tariff', () => {
  Object.entries(MARK_BANDS).forEach(([key, entry]) => {
    const tariff = Number(key.split('|')[2]);
    const levels = entry.levels;
    check(`${key}: top band ends on the tariff`,
          levels[0].range[1] === tariff, `${levels[0].range[1]} vs ${tariff}`);
    check(`${key}: lowest band starts at 1`,
          levels[levels.length - 1].range[0] === 1, String(levels[levels.length - 1].range[0]));
    // Descending, no gaps, no overlaps.
    for (let i = 0; i < levels.length - 1; i++) {
      const lo = levels[i].range[0], nextHi = levels[i + 1].range[1];
      check(`${key}: ${levels[i].descriptor} abuts ${levels[i + 1].descriptor}`,
            lo === nextHi + 1, `${lo} vs ${nextHi}+1`);
    }
    levels.forEach(l => {
      check(`${key}: ${l.descriptor} range ascends`, l.range[0] <= l.range[1], l.range.join('-'));
      check(`${key}: ${l.descriptor} has criteria`, typeof l.criteria === 'string' && l.criteria.length > 80);
    });
    check(`${key}: names its source`, typeof entry.source === 'string' && entry.source.length > 10);
  });
});

test('the published band boundaries are the ones the boards actually use', () => {
  // Pearson 9PL0, via papers-config.js.
  const ed = (m) => bandsFor('Politics', 'Edexcel', m).levels.map(l => l.range.join('-')).join(',');
  check('Edexcel 30-mark = 25-30/19-24/13-18/7-12/1-6', ed(30) === '25-30,19-24,13-18,7-12,1-6', ed(30));
  check('Edexcel 24-mark = 20-24/15-19/10-14/5-9/1-4',  ed(24) === '20-24,15-19,10-14,5-9,1-4',  ed(24));
  check('Edexcel 12-mark = 10-12/7-9/4-6/1-3',          ed(12) === '10-12,7-9,4-6,1-3',          ed(12));

  // AQA 7152, from the June 2023 mark schemes. The 9-mark grid has only
  // three levels, which is the detail a generic ladder gets wrong.
  const aqa = (m) => bandsFor('Politics', 'AQA', m).levels.map(l => l.range.join('-')).join(',');
  check('AQA 25-mark = 21-25/16-20/11-15/6-10/1-5', aqa(25) === '21-25,16-20,11-15,6-10,1-5', aqa(25));
  check('AQA 9-mark  = 7-9/4-6/1-3',                aqa(9)  === '7-9,4-6,1-3',                aqa(9));
  check('AQA 9-mark has exactly three levels', bandsFor('Politics', 'AQA', 9).levels.length === 3);
  check('AQA 9-mark records its AO split', /AO1: 6/.test(bandsFor('Politics', 'AQA', 9).ao));
  check('AQA 25-mark records its AO split', /AO2: 10/.test(bandsFor('Politics', 'AQA', 25).ao));
});

test('every tariff the Politics banks ask has a grid', () => {
  const banks = [
    ['Edexcel', 'questions/politics/politics-edexcel-alevel-ai-feedback.js', 'POLITICS_EDEXCEL_AI_FEEDBACK'],
    ['AQA',     'questions/politics/politics-aqa-alevel-ai-feedback.js',     'POLITICS_AQA_AI_FEEDBACK'],
  ];
  banks.forEach(([board, file, global_]) => {
    const tariffs = bankTariffs(file, global_);
    check(`${board} bank exposes tariffs`, tariffs.length > 0, tariffs.join(','));
    tariffs.forEach(t => {
      check(`${board} ${t}-mark questions have a grid`, !!bandsFor('Politics', board, t),
            `bank asks ${t} marks with no published grid — the marker falls back to the generic prompt`);
    });
  });
});

test('rubricRules reads the binding rubric off the question wording', () => {
  const source = rubricRules('Using the source, evaluate the view that voting should be compulsory. In your response you must: analyse and evaluate only the information presented in the source.');
  check('source rubric detected', source.length === 1, JSON.stringify(source));
  check('and it forbids outside material', /outside it|imported/i.test(source[0]));

  const thinkers = rubricRules('To what extent is liberalism more concerned with society than with the economy? You must use appropriate thinkers you have studied to support your answer.');
  check('thinkers rubric detected', thinkers.length === 1, JSON.stringify(thinkers));
  check('and it requires named thinkers', /name/i.test(thinkers[0]));

  const three = rubricRules('Explain and analyse three ways in which rights are protected in the UK.');
  check('AQA three-point rule detected', three.length === 1, JSON.stringify(three));
  check('and it carries the published caps', /Level 2/.test(three[0]) && /Level 1/.test(three[0]));

  check('a plain essay question triggers nothing',
        rubricRules('Evaluate the view that the prime minister dominates the executive.').length === 0);
  check('empty input is safe', rubricRules('').length === 0 && rubricRules(null).length === 0);
});

test('renderBands: no verified grid means no invented bands', () => {
  check('unknown subject has no grid', bandsFor('Geography', 'AQA', 25) === null);
  check('and renders to nothing at all', renderBands(null) === '');
  // Question rubrics still apply even where the tariff grid is unknown.
  const onlyRules = renderBands(null, ['some rule']);
  check('but question rules still render', onlyRules.includes('some rule'));
  check('without claiming a grid', !/LEVEL-OF-RESPONSE GRID/.test(onlyRules));

  const full = renderBands(bandsFor('Politics', 'Edexcel', 30), rubricRules('only the information presented in the source'));
  check('a real grid renders every level', ['Level 5', 'Level 4', 'Level 3', 'Level 2', 'Level 1'].every(l => full.includes(l)));
  check('and states best-fit marking', /BEST FIT/.test(full));
  check('and asks for the level in the band field', /"band" field/.test(full));
});

test('the endpoints consume the grids, and the length ladder reaches 30 marks', () => {
  const marker = fs.readFileSync(path.join(ROOT, 'api', 'mark-essay.js'), 'utf8');
  check('mark-essay requires the registry', marker.includes("require('./_mark-bands')"));
  check('mark-essay renders the grid into the prompt', /renderBands\(grid, rubricRules\(question\)\)/.test(marker));
  check('mark-essay drops the generic 12+ line when a grid exists', /grid \? '' :/.test(marker));

  const author = fs.readFileSync(path.join(ROOT, 'api', 'generate-model-answer.js'), 'utf8');
  check('generate-model-answer requires the registry', author.includes("require('./_mark-bands')"));
  // The original bug: the ladder ended at "22-25 marks", so Politics
  // Edexcel's 30-markers had no rung and the model chose its own length.
  check('the ladder has a 26-30 rung', /- 26-30 marks:/.test(author));
  check('the 30-mark rung asks for ~1000-1200 words', /26-30 marks:[^\n]*1000-1200 words/.test(author));
  const mt = author.match(/max_tokens:\s*(\d+)/);
  check('max_tokens leaves room for a 1200-word answer', mt && Number(mt[1]) >= 4096, mt && mt[1]);
});

/* ── report ────────────────────────────────────────────────────────── */
(async () => {
  await runAll();
  console.log('\n' + '─'.repeat(60));
  console.log('%d passed, %d failed', passed, failed);
  if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  ✗ ' + f)); }
  process.exit(failed ? 1 : 0);
})();
