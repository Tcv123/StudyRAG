/* ═══════════════════════════════════════════════════════════════════
   EXAM DATES — the one place a page asks "when are this student's exams?"

   Drop <script src="exam-dates.js"></script> AFTER both
   supabase-config.js and exam-dates-config.js.

   TWO SOURCES, IN THIS ORDER:

     1. public.exam_dates in Postgres — what admin-exam-dates.html
        approves. Editable without a deploy, which matters because a
        wrong exam date should be fixable in under a minute.
     2. EXAM_DATES in exam-dates-config.js — the summer 2026 dates,
        typed by hand. The fallback, and what every page used before
        this file existed.

   The fallback is not a formality. It carries the page when the
   migration has not been applied, when the table is empty because
   nothing has been approved yet, when Postgres is unreachable, and for
   a signed-out visitor who has no session to query with. Exam dates on
   a dashboard are not worth a spinner or an error state — if the
   database has nothing to say, the config answers and the student sees
   their countdown.

   ─────────────────────────────────────────────────────────────────
   THE BUG THIS FIXES

   exam-dates-config.js has always keyed some subjects by level:

       'Computer Science_AQA|gcse'
       'Computer Science_AQA|alevel'

   and Dashboard.html and breakdown.html both looked up

       EXAM_DATES[`${s.subject}_${s.exam_board}`]

   with no suffix. Every suffixed key therefore matched nothing, and
   the students behind them — CS AQA, Maths OCR, Biology AQA /
   Edexcel / OCR A, Physics AQA / Edexcel / OCR A / OCR B, Geography
   Eduqas, at both levels — saw an empty exam calendar. Thirteen of
   the config's forty-two keys were dead.

   resolveFromConfig below tries the suffixed key first and the bare
   key second, so both shapes work and the dead keys come back to
   life. This is also why `level` is a column on exam_dates rather
   than something glued onto the end of a string: the collision was
   caused by encoding two facts in one key, and repeating that in the
   database would eventually reproduce the same bug.
   ═══════════════════════════════════════════════════════════════════ */
(function () {

  /* profiles.level stores 'gcse', 'as' or 'a-level'. The config and the
   * exam_dates table both use 'gcse' and 'alevel'. AS students sit
   * A-Level-timetabled papers, so they map to alevel — not to a third
   * bucket that would have no dates in it. */
  function normaliseLevel(level) {
    const raw = String(level || '').toLowerCase().trim();
    if (!raw) return null;
    if (raw === 'gcse' || raw === 'igcse') return 'gcse';
    return 'alevel';
  }

  /* ── The config fallback ───────────────────────────────────────── */
  function resolveFromConfig(subject, board, level) {
    if (typeof EXAM_DATES === 'undefined') return [];

    const base = `${subject}_${board}`;
    const lvl  = normaliseLevel(level);

    /* exam-dates-config.js has two shapes, and the rule below only makes
     * sense once both are on the table:
     *
     *   'Biology_AQA'        A-Level    ← bare keys are always A-Level
     *   'Biology_AQA|gcse'   GCSE
     *   'Mathematics_OCR|gcse'  \  a few subjects spell out both levels
     *   'Mathematics_OCR|alevel' /  and have no bare key at all
     *
     * So a '|gcse' key existing tells you nothing about where that
     * subject's A-Level dates live — for Biology AQA they are in the bare
     * key, for Maths OCR they are in '|alevel'. Treating the presence of
     * any suffixed key as "this subject is fully levelled" blanks the
     * A-Level calendar for Biology AQA, Biology OCR A and Physics AQA.
     * Ask for the level you want, then fall back; do not infer.
     *
     * All twenty-nine bare keys were checked against their durations,
     * paper names and unit codes (Y540, Y420) to confirm this. Give any
     * new GCSE entry the '|gcse' suffix — a bare GCSE key would silently
     * be read as A-Level. */
    if (lvl && EXAM_DATES[`${base}|${lvl}`]) return EXAM_DATES[`${base}|${lvl}`];

    /* No GCSE key for this subject and board means the config has no GCSE
     * dates for it, and the bare key belongs to somebody else. OCR
     * Computer Science is the case that prompted this: J277 students were
     * shown the H446 timetable, a fortnight out, which would have had them
     * revising to the wrong day. An empty calendar is a gap a student can
     * see and ask about. A full one that is wrong is not. */
    if (lvl === 'gcse') return [];

    return EXAM_DATES[base] || [];
  }

  /* ── Shape ──────────────────────────────────────────────────────────
   * Both sources normalise to this, so a caller never has to know which
   * one answered. `time` rather than `session` because that is what
   * Dashboard.html and breakdown.html already read. */
  function normalise(row, subject, board, source) {
    return {
      subject:    subject,
      board:      board,
      paper:      row.paper,
      date:       row.date || row.exam_date,
      time:       row.time || row.session || 'AM',
      duration:   row.duration || null,
      entry_code: row.entry_code || null,
      source:     source
    };
  }

  /* ── The database ───────────────────────────────────────────────────
   * One query for every subject the student takes, not one per subject.
   * The dashboard already makes enough round trips.
   *
   * Returns null — distinct from [] — when the table could not be read
   * at all: no client, no session, migration not applied, network down.
   * [] would mean "asked, and there are genuinely no dates", which must
   * not silently replace the config's dates with an empty calendar. */
  async function loadFromDb(subjects, level) {
    if (typeof supabaseClient === 'undefined' || !supabaseClient) return null;
    if (!subjects || !subjects.length) return [];

    const lvl = normaliseLevel(level);
    if (!lvl) return null;

    try {
      const session = await supabaseClient.auth.getSession();
      if (!session?.data?.session) return null;   // signed out: config answers

      let query = supabaseClient
        .from('exam_dates')
        .select('subject, exam_board, paper, entry_code, exam_date, session, duration, series')
        .eq('level', lvl)
        .in('subject', subjects.map(s => s.subject))
        .order('exam_date');

      const { data, error } = await query;

      /* A missing table (migration not applied) arrives here as an error
       * like any other. Falling through to the config is the right
       * answer for all of them. */
      if (error) return null;
      return data || [];
    } catch (e) {
      return null;
    }
  }

  /* ── The one call a page makes ──────────────────────────────────────
   * `subjects` is the user_subjects array the page already has:
   * [{ subject, exam_board, ... }]. `level` is profiles.level.
   *
   * Never throws and never returns undefined. The worst case is an
   * empty array, which every caller already handles by hiding the
   * calendar.
   *
   * WHEN BOTH SOURCES HAVE A SUBJECT, the database wins outright for
   * that subject — it is not merged with the config. A half-approved
   * 2027 series mixed into 2026's config dates would produce a calendar
   * showing two years of exams at once, and no student would be able to
   * tell which paper was which. Per-subject is the right granularity:
   * approving Maths for 2027 should not blank out Biology. */
  async function load(subjects, level) {
    const list = subjects || [];
    const dbRows = await loadFromDb(list, level);

    const bySubject = new Map();
    (dbRows || []).forEach(r => {
      const key = `${r.subject}_${r.exam_board}`;
      if (!bySubject.has(key)) bySubject.set(key, []);
      bySubject.get(key).push(r);
    });

    const out = [];
    list.forEach(s => {
      const key = `${s.subject}_${s.exam_board}`;
      const fromDb = bySubject.get(key);

      if (fromDb && fromDb.length) {
        fromDb.forEach(r => out.push(normalise(r, s.subject, s.exam_board, 'db')));
      } else {
        resolveFromConfig(s.subject, s.exam_board, level)
          .forEach(r => out.push(normalise(r, s.subject, s.exam_board, 'config')));
      }
    });

    return out;
  }

  /* Synchronous, config-only. For a caller that cannot await — and as
   * the thing `load` degrades to. */
  function resolve(subject, board, level) {
    return resolveFromConfig(subject, board, level)
      .map(r => normalise(r, subject, board, 'config'));
  }

  window.ExamDates = { load, resolve, normaliseLevel };
})();
