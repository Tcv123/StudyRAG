/* ═══════════════════════════════════════════════════════════════════════
   EXAM TIMETABLE AUTO-IMPORT TESTS
   ─────────────────────────────────────────────────────────────────────
   Run with:  node tests/exam-timetable-auto.test.js
   No network, no PDFs. api/_exam-timetable-auto.js is required directly and
   its readers are fed pages in the shape readPdf produces, copied from the
   June 2027 AQA, OCR and Eduqas documents.

   The importer writes exam dates with nobody looking, so most of what is
   here is the negative case: every way a row can be wrong has to stop its
   subject going live, and a subject that is stopped must not take any other
   subject in the same document down with it.
═══════════════════════════════════════════════════════════════════════ */

const path = require('path');
const fs = require('fs');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const { SPECS, READERS, resolveSpecs, invalidDate } =
  require(path.join(ROOT, 'api', '_exam-timetable-auto.js'));

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
    try { await fn(); }
    catch (e) { failed++; failures.push(`${name} threw: ${e.message}`); }
  }
}

/* A page with one line per array, cells at the x positions the real
 * documents use. */
function page(lines, extra = {}) {
  let y = 500;
  const out = lines.map(cells => ({ y: y -= 20, cells: cells.map(([x, s]) => ({ x, y, s })) }));
  return { page: 1, width: 841.68, lines: out, items: out.flatMap(l => l.cells), rects: [], ...extra };
}

/* ── SPECS ─────────────────────────────────────────────────────────── */

test('every spec is a subject/board a student can actually pick', () => {
  const src = fs.readFileSync(path.join(ROOT, 'subjects-config.js'), 'utf8');
  const sandbox = { window: { levelSuffix: () => '' } };
  vm.runInNewContext(src, sandbox);
  const boards = sandbox.window.SUBJECTS_CONFIG.boards;
  for (const s of SPECS) {
    check(`${s.subject} ${s.board} is offered`, (boards[s.subject] || []).includes(s.board));
  }
});

test('no entry code belongs to two papers', () => {
  const seen = new Map();
  for (const s of SPECS) for (const p of s.papers) for (const c of p.codes) {
    check(`${c} is unique`, !seen.has(c), `${seen.get(c)} and ${s.subject} ${s.board} ${p.label}`);
    seen.set(c, `${s.subject} ${s.board} ${p.label}`);
  }
});

test('paper labels are unique within a spec (they are the upsert key)', () => {
  for (const s of SPECS) {
    const labels = s.papers.map(p => p.label);
    check(`${s.subject} ${s.board} ${s.level} labels`, new Set(labels).size === labels.length);
  }
});

test('one spec per subject, board and level', () => {
  const keys = SPECS.map(s => `${s.subject}|${s.board}|${s.level}`);
  check('no duplicate specs', new Set(keys).size === keys.length);
});

/* ── Date checks ───────────────────────────────────────────────────── */

test('invalidDate accepts a real sitting', () => {
  check('Mon 7 June 2027 PM', invalidDate({ exam_date: '2027-06-07', session: 'PM', weekday: 'mon' }, 2027) === null);
});

test('invalidDate rejects each kind of bad row', () => {
  check('wrong year',     /not in 2027/.test(invalidDate({ exam_date: '2026-06-07', session: 'PM' }, 2027)));
  check('July',           /outside May\/June/.test(invalidDate({ exam_date: '2027-07-05', session: 'PM' }, 2027)));
  check('Saturday',       /weekend/.test(invalidDate({ exam_date: '2027-06-05', session: 'AM' }, 2027)));
  check('weekday clash',  /board printed tue/.test(invalidDate({ exam_date: '2027-06-07', session: 'PM', weekday: 'tue' }, 2027)));
  check('no session',     /session/.test(invalidDate({ exam_date: '2027-06-07', session: '' }, 2027)));
  check('unparsed date',  /did not parse/.test(invalidDate({ exam_date: null, session: 'AM' }, 2027)));
});

/* ── Readers ───────────────────────────────────────────────────────── */

test('AQA reader takes subject-page rows and skips NEA deadlines', () => {
  const rows = READERS.AQA([page([
    [[113, '7402/1'], [170, 'Paper 1'], [584, '2h'], [686, '07 June 2027'], [788, 'pm']],
    [[113, '7402/C'], [170, 'Non-exam assessment: Practical Endorsement'], [584, 'Submit by'], [686, '15 May 2027']],
    [[68, 'Any 1'], [113, '7517/1B'], [170, 'Paper 1 (Option B - Java)'], [584, '2h 30m'], [686, '07 June 2027'], [788, 'pm']]
  ])]);
  check('two sittings read', rows.length === 2, JSON.stringify(rows));
  check('date', rows[0].exam_date === '2027-06-07');
  check('session', rows[0].session === 'PM');
  check('code behind a side note', rows[1] && rows[1].code === '7517/1B');
  check('duration', rows[1] && rows[1].duration === '2h 30m');
});

test('OCR reader uses the series year and keeps the printed weekday', () => {
  const rows = READERS.OCR([page([
    [[38, 'H420/01'], [108, 'Biological processes'], [535, '2 h 15 min'], [630, 'Mon'], [730, '7 June pm']],
    [[38, 'Y540'], [108, 'Pure core 1'], [535, '1 h 30 min'], [630, 'Tue'], [724, '18 May pm']]
  ])], 2027);
  check('two rows', rows.length === 2);
  check('date', rows[0].exam_date === '2027-06-07');
  check('weekday kept', rows[0].weekday === 'mon');
  check('duration normalised', rows[0].duration === '2h 15m', rows[0].duration);
  check('unit code without slash', rows[1].code === 'Y540');
});

test('Edexcel reader reads both printings and normalises the code', () => {
  const rows = READERS.Edexcel([page([
    [[19, 'Wednesday 12 May'], [164, '9PL0 01'], [221, 'Politics'], [374, 'Paper 1: UK Politics and Core Political Ideas'], [684, 'Morning'], [764, '2h 00m']],
    [[19, 'Politics'], [163, '9PL0 3A'], [221, 'Paper 3A: Comparative Politics - USA'], [513, 'Tuesday 15 June'], [682, 'Afternoon'], [764, '2h 00m']],
    [[19, 'Further Mathematics'], [155, '8FM0 2A-2K'], [221, 'Paper 2: Options'], [513, 'Friday 14 May'], [682, 'Afternoon']]
  ])], 2027);
  check('two rows (a code range is not a code)', rows.length === 2, JSON.stringify(rows));
  check('code normalised', rows[0].code === '9PL0/01');
  check('morning → AM', rows[0].session === 'AM');
  check('afternoon → PM', rows[1].session === 'PM');
  check('weekday kept', rows[1].weekday === 'tue');
  check('"2h 00m" → "2h"', rows[0].duration === '2h', rows[0].duration);
});

test('Edexcel by-date and by-subject printings that disagree hold back the subject', () => {
  const rows = [
    { code: '9PL0/01', exam_date: '2027-05-12', session: 'AM', weekday: 'wed' },
    { code: '9PL0/01', exam_date: '2027-05-12', session: 'PM', weekday: 'wed' },
    { code: '9PL0/02', exam_date: '2027-05-24', session: 'PM', weekday: 'mon' },
    { code: '9PL0/3A', exam_date: '2027-06-15', session: 'PM', weekday: 'tue' },
    { code: '9PL0/3B', exam_date: '2027-06-15', session: 'PM', weekday: 'tue' }
  ];
  const { resolved } = resolveSpecs('Edexcel', rows, 2027);
  check('not resolved', !resolved.some(r => r.key === 'Politics Edexcel A-level'));
});

test('Eduqas reader places codes by the drawn day cell, AM left and PM right', () => {
  const items = [
    { x: 409, y: 418, s: 'Monday' }, { x: 411, y: 406, s: '10 May' },
    { x: 22,  y: 480, s: 'A700U10-1' }, { x: 86, y: 480, s: 'English Language (Eduqas) A Level Component 1' }, { x: 341, y: 480, s: '2h' },
    { x: 468, y: 330, s: 'B290U10-1' }, { x: 775, y: 330, s: '1h 45m' },
    { x: 408, y: 217, s: 'Tuesday' }, { x: 411, y: 205, s: '11 May' },
    { x: 22,  y: 124, s: 'A110U10-1' }, { x: 341, y: 124, s: '1h 45m' },
    { x: 22,  y: 600, s: 'B999U10-1' }                                    // outside every cell
  ];
  const rects = [
    { x0: 393, y0: 314, x1: 462, y1: 518 }, { x0: 393, y0: 314, x1: 462, y1: 518 },  // drawn twice
    { x0: 393, y0: 117, x1: 462, y1: 312 }
  ];
  const rows = READERS.Eduqas([{ page: 1, width: 841.68, items, rects, lines: [] }], 2027);
  const by = Object.fromEntries(rows.map(r => [r.code, r]));
  check('morning row on Monday', by['A700U10-1']?.exam_date === '2027-05-10' && by['A700U10-1'].session === 'AM');
  check('afternoon row', by['B290U10-1']?.session === 'PM');
  check('Tuesday row', by['A110U10-1']?.exam_date === '2027-05-11');
  check('weekday read from the cell', by['A110U10-1']?.weekday === 'tue');
  check('code outside every cell dropped', !by['B999U10-1']);
});

test('Eduqas reader drops a code whose cells disagree', () => {
  const items = [
    { x: 411, y: 406, s: '10 May' }, { x: 411, y: 300, s: '11 May' },
    { x: 22, y: 350, s: 'A110U10-1' }
  ];
  const rects = [{ x0: 393, y0: 320, x1: 462, y1: 518 }, { x0: 393, y0: 117, x1: 462, y1: 380 }];
  const rows = READERS.Eduqas([{ page: 1, width: 841.68, items, rects, lines: [] }], 2027);
  check('overlapping cells → no row', rows.length === 0, JSON.stringify(rows));
});

/* ── Resolving specs ───────────────────────────────────────────────── */

function row(code, exam_date, session, extra = {}) {
  return { code, exam_date, session, duration: '2h', title: '', ...extra };
}

const AQA_BIO = [row('7402/1', '2027-06-07', 'PM'), row('7402/2', '2027-06-14', 'PM'), row('7402/3', '2027-06-18', 'AM')];
const AQA_CHEM = [row('7405/1', '2027-05-28', 'AM'), row('7405/2', '2027-06-10', 'AM'), row('7405/3', '2027-06-17', 'AM')];

test('a complete, valid spec resolves to one row per paper', () => {
  const { resolved, failed: f } = resolveSpecs('AQA', AQA_BIO, 2027);
  const bio = resolved.find(r => r.key === 'Biology AQA A-level');
  check('resolved', !!bio);
  check('three rows', bio && bio.rows.length === 3);
  check('series', bio && bio.rows[0].series === 'summer-2027');
  check('nothing failed', f.length === 0);
});

test('specs absent from the document are ignored, not failed', () => {
  const { failed: f } = resolveSpecs('AQA', AQA_BIO, 2027);
  check('no GCSE failures from an A-level PDF', f.length === 0);
});

test('a missing paper holds back that subject only', () => {
  const { resolved, failed: f } = resolveSpecs('AQA', [...AQA_BIO.slice(0, 2), ...AQA_CHEM], 2027);
  check('Biology failed', f.some(x => x.key === 'Biology AQA A-level' && /7402\/3 not found/.test(x.problems.join())));
  check('Chemistry still resolved', resolved.some(r => r.key === 'Chemistry AQA A-level'));
  check('Biology not resolved', !resolved.some(r => r.key === 'Biology AQA A-level'));
});

test('tiers that disagree hold back the subject', () => {
  const rows = [row('8461/1F', '2027-05-11', 'AM'), row('8461/1H', '2027-05-12', 'AM'),
                row('8461/2F', '2027-06-10', 'AM'), row('8461/2H', '2027-06-10', 'AM')];
  const { resolved, failed: f } = resolveSpecs('AQA', rows, 2027);
  check('failed', f.some(x => x.key === 'Biology AQA GCSE' && /disagree/.test(x.problems.join())));
  check('not resolved', !resolved.length);
});

test('a code read twice at two different times holds back the subject', () => {
  const rows = [...AQA_BIO, row('7402/1', '2027-06-08', 'PM')];
  const { resolved } = resolveSpecs('AQA', rows, 2027);
  check('not resolved', !resolved.some(r => r.key === 'Biology AQA A-level'));
});

test('an implausible date holds back the subject', () => {
  const rows = [row('7402/1', '2027-06-05', 'PM'), ...AQA_BIO.slice(1)];      // Saturday
  const { resolved, failed: f } = resolveSpecs('AQA', rows, 2027);
  check('failed on weekend', f.some(x => /weekend/.test(x.problems.join())));
  check('not resolved', !resolved.length);
});

test('a weekday the board printed that does not match holds back the subject', () => {
  const rows = [row('H420/01', '2027-06-07', 'PM', { weekday: 'tue' }),
                row('H420/02', '2027-06-14', 'PM', { weekday: 'mon' }),
                row('H420/03', '2027-06-18', 'AM', { weekday: 'fri' })];
  const { resolved, failed: f } = resolveSpecs('OCR', rows, 2027);
  check('failed', f.some(x => x.key === 'Biology OCR A A-level'));
  check('not resolved', !resolved.length);
});

/* ── Finding documents ─────────────────────────────────────────────── */

test('link discovery finds document URLs outside anchors, with glued years', () => {
  const { findTimetableLinks } = require(path.join(ROOT, 'api', 'cron', 'exam-timetable-check.js'));
  const html = `<div data-href="/content/dam/pdf/Support/Examination-timetables-for-UK-Edexcel-GCSE/gcse-summer-2027final.pdf"></div>
                <a href="/files/x/summer-2027-timetable.pdf">&gt; GCE June 2027 Examination Timetable</a>`;
  const links = findTimetableLinks(html, 'https://qualifications.pearson.com/en/x.html');
  const glued = links.find(l => /gcse-summer-2027final/.test(l.url));
  check('data-attribute link found', !!glued);
  check('year read from "2027final"', glued && glued.year === 2027);
  check('summer link scores positive', glued && glued.score > 0);
  const anchored = links.find(l => /summer-2027-timetable/.test(l.url));
  check('"&gt;" decoded and arrow dropped', anchored && anchored.text === 'GCE June 2027 Examination Timetable', anchored && anchored.text);
});

/* ── report ────────────────────────────────────────────────────────── */
(async () => {
  await runAll();
  console.log('\n' + '─'.repeat(60));
  console.log('%d passed, %d failed', passed, failed);
  if (failures.length) { console.log('\nFAILURES:'); failures.forEach(f => console.log('  ✗ ' + f)); }
  process.exit(failed ? 1 : 0);
})();
