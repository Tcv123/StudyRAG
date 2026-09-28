/* ═══════════════════════════════════════════════════════════════════════
   QUESTION MATERIAL TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/question-material.test.js
   No dependencies, no network.

   AI feedback must never show a question the student cannot answer from
   what is on the screen. "Using the source, evaluate…" with no source,
   "Study Figure 2…" with no figure, "(see the question paper PDF)" — all
   of them leave the student guessing and the marker grading an answer to
   a question it also cannot see.

   Two banks feed the page and they fail differently:

     • papers-config.js stores the WORDING of every past-paper part, but
       photographs, circuit diagrams, maps and Resource Booklets were never
       transcribed — they live only in the PDF. ai-feedback.html filters
       those parts out (and hides a paper once nothing survives).
     • the question banks are written by hand, each question one string,
       so its source has to sit inside that same string. They are all clean
       today; the guard is there so the next one added without its source
       is dropped instead of shown.

   This file pulls the real predicates out of ai-feedback.html rather than
   restating them, so the test cannot drift away from what ships.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

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
function runAll() {
  for (const [name, fn] of QUEUE) {
    process.stdout.write('\n' + name + '\n');
    try { fn(); }
    catch (e) { failed++; failures.push(name + ' — threw: ' + e.message); console.log('   THREW:', e.message); }
  }
}

/* ── lift the shipping predicates out of the page ──────────────────── */
const PAGE = fs.readFileSync(path.join(ROOT, 'ai-feedback.html'), 'utf8');
function lift(re, label) {
  const m = PAGE.match(re);
  if (!m) throw new Error(`ai-feedback.html no longer contains ${label} — update this test with it`);
  return m[0];
}
const GUARD = vm.runInNewContext([
  lift(/const OFFPAGE_MATERIAL = [^\n]+/, 'OFFPAGE_MATERIAL'),
  lift(/const UNNUMBERED_PICTURE = [^\n]+/, 'UNNUMBERED_PICTURE'),
  lift(/const NUMBERED_MATERIAL = [^\n]+/, 'NUMBERED_MATERIAL'),
  lift(/const REFERS_TO_MATERIAL = [^\n]+/, 'REFERS_TO_MATERIAL'),
  lift(/function labelIsWrittenOut[\s\S]*?\n  \}/, 'labelIsWrittenOut()'),
  lift(/function materialIsOffPage[\s\S]*?\n  \}/, 'materialIsOffPage()'),
  lift(/const USES_SUPPLIED_MATERIAL = [^\n]+/, 'USES_SUPPLIED_MATERIAL'),
  lift(/const MATERIAL_BLOCK = [^\n]+/, 'MATERIAL_BLOCK'),
  lift(/function bankQuestionMissesMaterial[\s\S]*?\n  \}/, 'bankQuestionMissesMaterial()'),
  '({ materialIsOffPage, bankQuestionMissesMaterial })',
].join('\n'), {});

/* ── load papers-config the way the browser does ───────────────────── */
function loadSubjects() {
  const sandbox = {}; sandbox.window = sandbox; sandbox.console = console;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'papers-config.js'), 'utf8'), ctx, { filename: 'papers-config.js' });
  return sandbox.SUBJECTS || [];
}

// Mirrors figureToText() in ai-feedback.html.
function figureToText(fig) {
  if (!fig) return '';
  const head = fig.label ? `${fig.label}:\n` : '';
  if (fig.content) return `${head}${fig.content}`;
  if (Array.isArray(fig.headers) && Array.isArray(fig.rows)) {
    return `${head}${fig.headers.join(' | ')}\n${fig.rows.map(r => r.join(' | ')).join('\n')}`;
  }
  return '';
}

function everyBankQuestion() {
  const out = [];
  (function walkDir(dir) {
    for (const entry of fs.readdirSync(dir)) {
      const p = path.join(dir, entry);
      if (fs.statSync(p).isDirectory()) { walkDir(p); continue; }
      if (!entry.endsWith('.js')) continue;
      const sandbox = { module: { exports: {} }, console, window: {} };
      try { vm.runInNewContext(fs.readFileSync(p, 'utf8'), sandbox, { filename: entry }); }
      catch (e) { continue; }  // not a plain data bank
      const bank = sandbox.module.exports;
      if (!bank || typeof bank !== 'object') continue;
      const seen = new Set();
      (function walkBank(node) {
        if (seen.has(node)) return;
        seen.add(node);
        for (const v of Object.values(node)) {
          if (Array.isArray(v)) {
            for (const q of v) {
              if (!q || typeof q !== 'object') continue;
              const text = q.q || q.question || '';
              if (text) out.push({ file: entry, text });
              else walkBank(q);
            }
          } else if (v && typeof v === 'object') walkBank(v);
        }
      })(bank);
    }
  })(path.join(ROOT, 'questions'));
  return out;
}

/* ═══════════════════════════════════════════════════════════════════ */

test('the guard still lives in ai-feedback.html and is actually wired up', () => {
  check('past-paper parts run through materialIsOffPage', /if \(materialIsOffPage\(supporting, part\.prompt \|\| '', figureText\)\) return;/.test(PAGE));
  check('the paper picker hides papers with nothing usable', /\.filter\(p => usablePartsIn\(p\)\.length > 0\)/.test(PAGE));
  check('bank questions run through bankQuestionsWithMaterial', /topicQuestions = bankQuestionsWithMaterial\(aiQs, subjectKey, topicId\);/.test(PAGE));
  // The stimulus IS the material: the old 1200-char cut sliced live extracts
  // in half, which is the same defect in a quieter form.
  check('the scenario cap clears the longest scenario in papers-config', /scenario\.length > 8000/.test(PAGE));
  check('no 1200-character scenario truncation remains', !/scenario\.slice\(0, 1200\)/.test(PAGE));
});

test('the marker accepts a question carrying its full stimulus', () => {
  // A past-paper question arrives with its scenario attached. papers-config's
  // longest is ~7.3k characters, so a 4k ceiling made those unmarkable.
  for (const f of ['mark-essay.js', 'generate-model-answer.js']) {
    const src = fs.readFileSync(path.join(ROOT, 'api', f), 'utf8');
    const m = src.match(/question\.length > (\d+)/);
    check(`${f} still guards question length`, !!m);
    check(`${f} allows a question of 8k characters`, m && Number(m[1]) >= 8000, m && m[1]);
  }
});

test('no past-paper question reaches the marker without its material', () => {
  const subjects = loadSubjects();
  check('papers-config loaded', subjects.length > 0);
  const offenders = [];
  let usable = 0;
  for (const s of subjects) {
    for (const b of s.boards || []) {
      for (const p of (b.papers || []).filter(x => Array.isArray(x.questions) && x.questions.length)) {
        for (const q of p.questions) {
          let scenario = q.scenario || '';
          if (scenario.length > 8000) scenario = scenario.slice(0, 8000) + '…';
          for (const part of q.parts || []) {
            if (!(part.extended || (part.marks || 0) >= 4)) continue;
            const figureText = figureToText(part.figure).trim();
            const supporting = [scenario, part.preamble || '', figureText].filter(Boolean).join('\n\n');
            if (GUARD.materialIsOffPage(supporting, part.prompt || '', figureText)) continue;  // filtered out
            usable++;
            // What survives must not still be pointing at something absent.
            const plain = `${supporting}\n${part.prompt || ''}`;
            if (/\(see |question paper PDF|Resource Booklet/i.test(plain)) {
              offenders.push(`${s.name} / ${b.board} / ${p.year} ${p.paperName} / ${part.code}`);
            }
          }
        }
      }
    }
  }
  check('past papers still offer a usable pool', usable > 800, String(usable));
  check('nothing that survived points at the PDF', offenders.length === 0, offenders.slice(0, 5).join('; '));
});

test('only AQA Physics loses its whole past-paper pool', () => {
  // Filtering by material empties one board: every extended AQA Physics part
  // hangs off a printed graph or circuit diagram, so none can be marked here.
  // That is the honest outcome — "Past papers" simply shows its empty state for
  // AQA Physics, exactly as it already does for a subject with no papers added.
  // Any OTHER board emptying is a bug in the guard or a gap in papers-config,
  // so the expected set is pinned rather than merely counted.
  const emptied = [];
  for (const s of loadSubjects()) {
    for (const b of s.boards || []) {
      const withQuestions = (b.papers || []).filter(p => Array.isArray(p.questions) && p.questions.length);
      if (!withQuestions.length) continue;
      const survivors = withQuestions.filter(p => (p.questions || []).some(q => {
        let scenario = q.scenario || '';
        if (scenario.length > 8000) scenario = scenario.slice(0, 8000) + '…';
        return (q.parts || []).some(part => {
          if (!(part.extended || (part.marks || 0) >= 4)) return false;
          const figureText = figureToText(part.figure).trim();
          const supporting = [scenario, part.preamble || '', figureText].filter(Boolean).join('\n\n');
          return !GUARD.materialIsOffPage(supporting, part.prompt || '', figureText);
        });
      }));
      if (!survivors.length) emptied.push(`${s.name} / ${b.board}`);
    }
  }
  const EXPECTED_EMPTY = ['Physics / AQA'];
  check('no board beyond AQA Physics loses every paper',
    emptied.length === EXPECTED_EMPTY.length && emptied.every(e => EXPECTED_EMPTY.includes(e)),
    emptied.join('; '));
});

test('no question bank tells a student to use material it does not include', () => {
  const questions = everyBankQuestion();
  check('question banks loaded', questions.length > 10000, String(questions.length));
  const offenders = questions.filter(q => GUARD.bankQuestionMissesMaterial(q.text));
  // Zero, not "few": a bank question is written by hand, so a missing source
  // is a content bug to fix in the bank, not something to filter around.
  check('every bank question carries its own material', offenders.length === 0,
    offenders.slice(0, 3).map(o => `${o.file}: ${o.text.slice(0, 80)}`).join(' | '));
});

test('the guard tells stimulus apart from a passing mention of a source', () => {
  // The eight Edexcel Politics source questions are the shape this protects.
  const real = 'Using the source, evaluate the view that voting in UK general elections should be made compulsory.\n\n'
    + 'In your response you must:\n• compare and contrast different opinions in the source\n\n'
    + 'SOURCE: Turnout at the 2024 general election fell to around 60 per cent, one of the lowest figures '
    + 'since the franchise became universal. Supporters of compulsory voting argue that this is a crisis of '
    + 'legitimacy, and point to Australia, where voting has been compulsory since 1924.';
  check('a source question with its SOURCE block is kept', !GUARD.bankQuestionMissesMaterial(real));
  check('the same question with the SOURCE block removed is dropped',
    GUARD.bankQuestionMissesMaterial(real.slice(0, real.indexOf('SOURCE:'))));

  // False positives the page used to be at risk of: "source" as ordinary
  // physics/geography vocabulary, not a stimulus to read.
  check('a light source is not stimulus material',
    !GUARD.bankQuestionMissesMaterial("Discuss how Young's double-slit experiment supports the wave nature of light, and explain why coherence of the source is essential."));
  check('a source country is not stimulus material',
    !GUARD.bankQuestionMissesMaterial('Assess the impacts of counter-urbanisation on both the destination rural communities and the source urban areas.'));

  // An inline data table counts as material even without a SOURCE: label.
  check('a labelled extract with its data is kept',
    !GUARD.bankQuestionMissesMaterial('Extract A (Table 1) — written for this practice question\nCountry X, 2026\n  Real GDP: £2 500 billion\n  Population: 68.5 million\n\nUsing the data in Extract A (Table 1), calculate real GDP per capita.'));

  check('an explicit pointer at the PDF is dropped',
    GUARD.materialIsOffPage('Figure 11 shows the stress–strain graph for a metal in tension. (See Figure 11 in the question paper PDF.)', 'Explain the shape of the graph.', ''));
  check('a caption describing a photograph is dropped',
    GUARD.materialIsOffPage('Figure 2 shows a container ship in a port on the island of Heimaey, Iceland.', 'Using Figure 2 and your own knowledge, assess the importance of ports.', ''));
  // A named label counts as present only when it is written out, not merely
  // pointed at — this is what separates a transcribed extract from a caption.
  check('a question naming a figure nobody transcribed is dropped',
    GUARD.materialIsOffPage('In 2021 the world land speed record was 1230 km/h, the average speed of a jet-powered car '
      + 'over two runs, each measured over 1.61 km. At any point on the graph in Figure 1, the acceleration is '
      + 'given by: acceleration = speed × gradient of line. At maximum acceleration the power input is 640 MW.',
      'Calculate the percentage of the input power used to accelerate the car.', ''));
  check('a figure transcribed under its own label is kept',
    !GUARD.materialIsOffPage('Figure 1: Market share of UK online streaming services (Q2 2021 – Q2 2022). '
      + 'Amazon Prime Video 37.9%→25.9%; Disney+ 16.0%→21.5%; Netflix 15.0%→4.5%; NOW 11.3%→11.1%; '
      + 'AppleTV+ 4.0%→9.9%; BritBox 4.0%→5.9%; Others 11.8%→21.2%.',
      'With reference to Figure 1, explain the market structure of UK online streaming.', ''));
  check('a parenthetical between the label and its colon still counts',
    !GUARD.materialIsOffPage('SECTION B: Extract question. Read the extracts, then answer Question 04.\n\n'
      + 'Extract 1 (summary): an article on PoliticsHome by Sarah Wollaston MP, arguing that select committees '
      + 'have become a genuine check on government because their chairs are elected by MPs rather than chosen '
      + 'by the whips, and their reports now attract press attention that ministers cannot simply ignore.',
      'Analyse and evaluate the arguments in Extract 1.', ''));
  check('a reproduced extract long enough to answer from is kept',
    !GUARD.materialIsOffPage('Extract A (Trustpilot reviews of Timpson, average 3.8, 6,489 total responses): 5-star 5,838; '
      + '4-star 175; 3-star 86; 2-star 175; 1-star 215. Extract C: chairman James Timpson describes an '
      + "'upside down' management style — investing in colleagues' happiness and a culture of kindness, with "
      + 'only two rules: put the money in the till and look the part. About 10% of the workforce are '
      + 'ex-offenders, risk-assessed before hiring and described as loyal and productive colleagues.',
      'Assess the value of Extract A to Timpson.', ''));
});

/* ── report ────────────────────────────────────────────────────────── */
runAll();
console.log('\n' + '─'.repeat(60));
console.log('%d passed, %d failed', passed, failed);
if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  ✗ ' + f)); }
process.exit(failed ? 1 : 0);
