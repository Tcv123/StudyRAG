/**
 * Offline check on the exam-timetable watch's four board URLs.
 *
 * Runs the same link detection api/cron/exam-timetable-check.js uses, but
 * against the live board pages from your machine — no CRON_SECRET, no
 * database, no deploy. Verifying that a URL still resolves should not
 * require production, and board sites move often enough that this is worth
 * re-running whenever the watch reports a fetch failure.
 *
 * Writes nothing anywhere. Read-only HTTP against public pages.
 *
 *   node scripts/check-timetable-sources.js
 *   node scripts/check-timetable-sources.js "https://some.board/timetables"
 */

const { findTimetableLinks } = require('../api/cron/exam-timetable-check.js');

/* Mirrors the seed in db/migrations/2026-09-14-exam-dates.sql. The table is
 * the source of truth once the migration is applied — this is a convenience
 * for checking before you have a session, so if you change a URL on the
 * review page, change it here too or pass it as an argument. */
const SOURCES = [
  ['AQA',     'https://www.aqa.org.uk/exams-administration/dates-and-timetables'],
  ['OCR',     'https://www.ocr.org.uk/administration/key-dates-and-timetables/'],
  /* Disabled in the database — Pearson renders its links in JavaScript, so
   * this finds nothing. Kept here so the failure stays visible when you run
   * the check, rather than the board quietly vanishing from the list. */
  ['Edexcel', 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html'],
  ['Eduqas',  'https://www.eduqas.co.uk/home/administration/key-dates-and-timetables/']
];

const USER_AGENT =
  'RAGLearningTimetableBot/1.0 (+https://raglearning.uk/contact; monthly exam timetable check)';

async function check(board, url) {
  process.stdout.write(`\n── ${board} ${'─'.repeat(Math.max(0, 58 - board.length))}\n${url}\n`);

  let res, html;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': USER_AGENT, 'Accept': '*/*' }
    }).finally(() => clearTimeout(timer));
    html = await res.text();
  } catch (err) {
    console.log(`  ✗ UNREACHABLE — ${err.message}`);
    console.log('    The watch would report fetch-failed and email you.');
    return;
  }

  if (!res.ok) {
    console.log(`  ✗ HTTP ${res.status} — fix this URL on the review page.`);
    return;
  }
  if (res.url !== url) console.log(`  → redirected to ${res.url}`);

  const links = findTimetableLinks(html, res.url);
  console.log(`  ✓ HTTP ${res.status}, ${Math.round(html.length / 1024)}KB, `
            + `${links.length} timetable-shaped link${links.length === 1 ? '' : 's'}`);

  if (!links.length) {
    console.log('    Page loads but nothing matched. Either the timetables are behind');
    console.log('    a portal, or they are rendered by JavaScript this cannot see.');
    return;
  }

  links.sort((a, b) => (b.year || 0) - (a.year || 0) || b.score - a.score)
       .slice(0, 6)
       .forEach(l => {
         console.log(`    ${String(l.year || '????')}  score ${String(l.score).padStart(2)}  ${l.text.slice(0, 62)}`);
         console.log(`            ${l.url.slice(0, 96)}`);
       });
}

(async () => {
  const arg = process.argv[2];
  const list = arg ? [['(argument)', arg]] : SOURCES;

  console.log('Checking exam board timetable pages. Read-only; writes nothing.');
  for (const [board, url] of list) await check(board, url);

  console.log('\nA year of 2027 or later is what the watch would report as new.');
  console.log('2026 and earlier is the timetable already in exam-dates-config.js.\n');
})();
