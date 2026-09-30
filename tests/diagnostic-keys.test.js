/* ═══════════════════════════════════════════════════════════════════════
   DIAGNOSTIC KEY TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/diagnostic-keys.test.js
   No dependencies, no network.

   A diagnostic result only reaches the student if the page saves it under
   the exact subject + board their user_subjects row carries. Dashboard.html
   and breakdown.html filter topic_progress on `${subject}_${exam_board}`,
   so a row saved under any other name is not wrong, it is invisible — the
   diagnostic appears to work and then nothing changes colour.

   Before 2026-09-07 four pages did exactly that: Physics OCR A saved as
   "OCR", Biology OCR A GCSE as "AQA", and both Edexcel GCSE Biology pages
   as "Computer Science / OCR". The code was fixed but the rows it had
   already written stayed hidden until a student reported "The physics rag
   is broken" three weeks later.

   So this pins, for every page in diagnostics/:
     • one subject and one board across every read, write and the back link
     • that board is one the subject picker offers for that subject
     • topics-config.js and diagnostics-pages.js both route that
       subject + board to this page — otherwise no student ever reaches it
   and, for every route in those two maps, that the page it names saves
   under the same key.
═══════════════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const DIAG_DIR = path.join(ROOT, 'diagnostics');

/* ── tiny test runner ──────────────────────────────────────────────── */
let passed = 0, failed = 0;
const failures = [];
function check(name, cond, detail) {
  if (cond) { passed++; }
  else { failed++; failures.push(name + (detail ? ' — ' + detail : '')); }
}

/* ── load the shipped configs into a fake window ───────────────────── */
const ctx = { console };
ctx.window = ctx;
ctx.localStorage = { getItem: () => null, setItem() {} };
vm.createContext(ctx);
for (const f of ['level-config.js', 'subjects-config.js', 'topics-config.js', 'diagnostics-pages.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const DIAG_TOPICS = ctx.DIAG_TOPICS;
const DIAGNOSTIC_PAGES = ctx.DIAGNOSTIC_PAGES;
const PICKER_BOARDS = (ctx.SUBJECTS_CONFIG && ctx.SUBJECTS_CONFIG.boards) || {};

check('topics-config.js exposes DIAG_TOPICS', !!DIAG_TOPICS);
check('diagnostics-pages.js exposes DIAGNOSTIC_PAGES', !!DIAGNOSTIC_PAGES);
check('subjects-config.js exposes the board picker', Object.keys(PICKER_BOARDS).length > 0);

// "Physics_OCR A|gcse" → "Physics_OCR A"
const baseKey = k => k.replace(/\|(gcse|alevel)$/, '');

/* ── what each page reads, writes and links back to ────────────────── */
function keysUsedBy(file) {
  const src = fs.readFileSync(path.join(DIAG_DIR, file), 'utf8');
  const grab = (re) => [...new Set([...src.matchAll(re)].map(m => m[1]))];
  const subjects = grab(/(?:\.eq\('subject',\s*|subject:\s*)'([^']+)'/g);
  const boards   = grab(/(?:\.eq\('exam_board',\s*|exam_board:\s*)'([^']+)'/g);
  const links    = grab(/Dashboard\.html#diagnostic=([^"'`]+)/g).map(decodeURIComponent);
  return { subjects, boards, links };
}

const pages = fs.readdirSync(DIAG_DIR).filter(f => f.endsWith('-diagnostic.html')).sort();
check('found the diagnostic pages', pages.length > 0);

const keyOfPage = {};
for (const file of pages) {
  const { subjects, boards, links } = keysUsedBy(file);

  check(`${file}: uses one subject`, subjects.length === 1, JSON.stringify(subjects));
  check(`${file}: uses one board`, boards.length === 1, JSON.stringify(boards));
  if (subjects.length !== 1 || boards.length !== 1) continue;

  const [subject] = subjects, [board] = boards;
  const key = `${subject}_${board}`;
  keyOfPage[file] = key;

  check(`${file}: "${board}" is a board the picker offers for ${subject}`,
    (PICKER_BOARDS[subject] || []).includes(board),
    `picker offers ${JSON.stringify(PICKER_BOARDS[subject] || [])}`);

  // The Dashboard matches this against `${subject}_${exam_board}` exactly;
  // a level suffix or a different board opens an empty topic view.
  check(`${file}: "Back to diagnostics" links to ${key}`,
    links.length === 1 && links[0] === key, JSON.stringify(links));

  const page = `diagnostics/${file}`;
  const routedBy = (map) => Object.keys(map).filter(k =>
    (typeof map[k] === 'string' ? map[k] : map[k] && map[k].page) === page);

  const topicKeys = routedBy(DIAG_TOPICS);
  check(`${file}: topics-config.js routes a student to it`, topicKeys.length > 0);
  topicKeys.forEach(k => check(`${file}: topics-config.js key ${k} matches what it saves (${key})`, baseKey(k) === key));

  const pageKeys = routedBy(DIAGNOSTIC_PAGES);
  check(`${file}: diagnostics-pages.js routes a student to it`, pageKeys.length > 0);
  pageKeys.forEach(k => check(`${file}: diagnostics-pages.js key ${k} matches what it saves (${key})`, baseKey(k) === key));
}

/* ── every route leads to a page that exists ───────────────────────── */
for (const [name, map] of [['topics-config.js', DIAG_TOPICS], ['diagnostics-pages.js', DIAGNOSTIC_PAGES]]) {
  for (const [k, v] of Object.entries(map)) {
    const page = typeof v === 'string' ? v : v && v.page;
    const file = page && page.replace(/^diagnostics\//, '');
    check(`${name}: ${k} points at an existing page`, !!file && fs.existsSync(path.join(DIAG_DIR, file)), String(page));
  }
}

/* ── report ────────────────────────────────────────────────────────── */
if (failures.length) {
  console.log('FAIL');
  failures.forEach(f => console.log('  ✗ ' + f));
}
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
