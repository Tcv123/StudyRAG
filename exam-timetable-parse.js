/* ═══════════════════════════════════════════════════════════════════
   EXAM TIMETABLE PARSER — turns a board's table into candidate rows.

   Loaded two ways, deliberately the same code both times:

     • api/cron/exam-timetable-check.js  require()s it, to parse a CSV
       it downloaded from a board's site.
     • admin-exam-dates.html  <script>s it, to parse a table you pasted
       out of a board's PDF or spreadsheet.

   One implementation because the hard part is date formats, and having
   two of those would mean fixing every ambiguity twice and finding out
   about the second one from a student who turned up on the wrong day.

   EVERYTHING THIS RETURNS IS A SUGGESTION. Nothing here decides an exam
   date; it proposes rows that an admin checks on the review page before
   any of them reach the exam_dates table. The parser is allowed to be
   wrong. It is not allowed to be confidently wrong and unreviewed.
   ═══════════════════════════════════════════════════════════════════ */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.TimetableParse = api;
})(typeof window !== 'undefined' ? window : null, function () {

  const MONTHS = {
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12
  };

  /* Entry codes are how a board timetable identifies a paper, and the
   * only field in a row that can be matched to a specification without
   * reading English: H446/01, 7517/2, 9MA0/01, J560/04. Four to six
   * alphanumerics, a slash, then one to three more. */
  const ENTRY_CODE = /\b([A-Z0-9]{4,6}\s?\/\s?[0-9A-Z]{1,3})\b/;

  const DURATION = /\b(\d{1,2}\s?h(?:\s?\d{1,2}\s?m)?|\d{1,3}\s?min(?:ute)?s?)\b/i;

  /* ── Dates ────────────────────────────────────────────────────────
   * UK boards write dates day-first. 05/06 is the 5th of June and never
   * the 6th of May — an American reading of that column would move an
   * exam by a month and would not look wrong anywhere on the page. This
   * is the single most dangerous line in the file, which is why the
   * day-first branch is explicit rather than handed to Date.parse.
   *
   * Returns an ISO date string, or null when the text has no date in
   * it. Null is a normal answer: most lines in a timetable document are
   * headers, footnotes or page numbers. */
  function findDate(text) {
    /* "Wednesday 10 June 2027" / "10 Jun 27" */
    let m = text.match(/\b(\d{1,2})\s+([A-Za-z]{3,9})\.?\s+(\d{4}|\d{2})\b/);
    if (m) {
      const month = MONTHS[m[2].slice(0, 3).toLowerCase()];
      if (month) return iso(fullYear(m[3]), month, parseInt(m[1], 10));
    }

    /* "10/06/2027", "10-06-2027", "10.06.27" — day first. */
    m = text.match(/\b(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4}|\d{2})\b/);
    if (m) return iso(fullYear(m[3]), parseInt(m[2], 10), parseInt(m[1], 10));

    /* "2027-06-10" — already ISO, the only unambiguous form. Checked
     * last because the day-first pattern above cannot match it. */
    m = text.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
    if (m) return iso(+m[1], +m[2], +m[3]);

    return null;
  }

  function fullYear(y) {
    const n = parseInt(y, 10);
    return n < 100 ? 2000 + n : n;
  }

  /* Rejects rather than clamps. A row whose date does not survive this
   * is dropped and counted as skipped, which shows up on the review
   * page as a number that does not add up — the right thing to notice.
   * Clamping would invent a plausible date out of a broken one. */
  function iso(year, month, day) {
    if (!(month >= 1 && month <= 12)) return null;
    if (!(day   >= 1 && day   <= 31)) return null;
    if (!(year  >= 2024 && year <= 2099)) return null;
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }

  /* ── Splitting a row ──────────────────────────────────────────────
   * Delimiter is detected per line, not per document: a table pasted
   * out of a PDF arrives tab-separated, out of Excel always does, and a
   * downloaded file is commas. Quoted cells genuinely contain the
   * delimiter — "Paper 3 — Pure, Statistics and Mechanics" — so quotes
   * are honoured rather than stripped up front. */
  function splitRow(line) {
    const delim = line.includes('\t') ? '\t'
                : line.includes('|')  ? '|'
                : ',';

    const cells = [];
    let cur = '', inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }   // escaped ""
        else inQuotes = !inQuotes;
      } else if (ch === delim && !inQuotes) {
        cells.push(cur.trim()); cur = '';
      } else {
        cur += ch;
      }
    }
    cells.push(cur.trim());
    return cells.filter(c => c !== '');
  }

  /* ── The whole table ──────────────────────────────────────────────
   * A line is only a row if it carries a date. Headers, footnotes, page
   * numbers and board marketing all fail that test and are counted, not
   * guessed at — the count is reported so a run that parsed 4 rows out
   * of 300 lines announces itself as suspicious instead of looking like
   * a success. */
  function parseDelimited(text) {
    const lines = String(text).split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (!lines.length) return { rows: [], skipped: 0, note: 'Nothing to parse.' };

    const rows = [];
    let skipped = 0;

    for (const line of lines) {
      const cells = splitRow(line);
      if (cells.length < 2) { skipped++; continue; }

      const joined = cells.join(' ');
      const date = findDate(joined);
      if (!date) { skipped++; continue; }

      const code = (joined.match(ENTRY_CODE) || [])[1];

      rows.push({
        entry_code: code ? code.replace(/\s/g, '') : null,
        /* Best guess at a human label: the first cell that reads like
         * words rather than a code or a date. The review page lets you
         * correct it, and `raw` keeps every cell so nothing the board
         * said is thrown away before a human has looked. */
        title:      cells.find(c => /[a-z]{4}/i.test(c) && !/^\d/.test(c)) || cells[0],
        exam_date:  date,
        session:    /\bpm\b|afternoon/i.test(joined) ? 'PM' : 'AM',
        duration:   (joined.match(DURATION) || [])[1] || null,
        raw:        cells
      });
    }

    return {
      rows,
      skipped,
      note: rows.length
        ? `Parsed ${rows.length} row${rows.length === 1 ? '' : 's'}`
          + (skipped ? `, skipped ${skipped} line${skipped === 1 ? '' : 's'} with no date in them.` : '.')
          + ' Every row needs checking before approval.'
        : `Found no rows with a date in them across ${lines.length} line${lines.length === 1 ? '' : 's'}.`
    };
  }

  return { parseDelimited, splitRow, findDate };
});
