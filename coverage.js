/* ═══════════════════════════════════════════════════════════════════
   COVERAGE — the one place the GCSE and A-Level coverage figures are
   worked out, shared by admin-gcse.html / admin-alevel.html (the full
   tables) and admin.html (the summary tiles), so they can never disagree.

   Needs level-config.js, subjects-config.js, diagnostics-pages.js,
   topics-config.js, practice-bank-config.js and flashcards-config.js
   loaded first.

   Every subject + board a student at `level` can pick, looked up in each
   feature's registry exactly the way the app does it (levelLookup):

     green  'g'  real content for that level: the "|gcse" / "|alevel" key
                 exists, or the base key does and it is that level's
                 content. A base key counts as GCSE when the subject/board's
                 base diagnostic is a GCSE page (Computer Science OCR keeps
                 its GCSE content unsuffixed); otherwise it is A-Level.
     amber  'a'  only the other level's content resolves
     red    'r'  nothing resolves

   Board statuses: ready (all green), most (some green), none (all red),
   and a fourth keyed by the other level — 'alevel' on the GCSE view,
   'gcse' on the A-Level view — for boards that only ever fall back.

   NOTES_AVAILABLE lives inline in notes.html, so it is read by fetching
   that page and evaluating the object literal.
═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var COLS = ['notes', 'diag', 'topics', 'practice', 'aifb', 'flash'];
  var COL_NAMES = { notes: 'Notes', diag: 'Diagnostic', topics: 'Topic list', practice: 'Practice questions', aifb: 'AI feedback', flash: 'Flashcards' };
  var NAME = { gcse: 'GCSE', alevel: 'A-Level' };

  function other(level) { return level === 'gcse' ? 'alevel' : 'gcse'; }

  // Status keys in display order, and their labels.
  function statuses(level) { return ['ready', 'most', other(level), 'none']; }
  function labels(level) {
    var l = { ready: 'Fully built', most: 'Mostly built', none: 'Not started' };
    l[other(level)] = NAME[other(level)] + ' only';
    return l;
  }

  // Pull an inline `const NAME = {...}` object literal out of page source
  // by brace matching.
  function grabLiteral(html, name) {
    var i = html.indexOf('const ' + name + ' = {');
    if (i < 0) return {};
    var j = html.indexOf('{', i), depth = 0;
    for (var k = j; k < html.length; k++) {
      var ch = html[k];
      if (ch === '{') depth++;
      else if (ch === '}' && --depth === 0) {
        try { return new Function('return (' + html.slice(j, k + 1) + ')')(); }
        catch (e) { return {}; }
      }
    }
    return {};
  }

  function resolve(map, base, baseIsGcse, level) {
    if (!map) return 'r';
    if (map[base + '|' + level] !== undefined) return 'g';
    if (map[base] !== undefined) return baseIsGcse === (level === 'gcse') ? 'g' : 'a';
    return 'r';
  }
  function count(map, base, level) {
    var v = window.levelLookup(map, base, level);
    if (!v) return '';
    if (Array.isArray(v)) return /\.js$/.test(v[0] || '') ? '' : v.length;
    if (Array.isArray(v.topics)) return v.topics.length;
    return '';
  }

  function build(level, notesMap) {
    var SC = window.SUBJECTS_CONFIG, out = [];
    SC.getSubjectsFor(level).forEach(function (s) {
      var boards = SC.getBoardsFor(s.name, level).map(function (b) {
        var u = s.name + '_' + b, p = s.name + '|' + b;
        var baseDiag = (window.DIAGNOSTIC_PAGES || {})[u] || '';
        var bg = /gcse/i.test(baseDiag);
        var cells = {
          notes:    [resolve(notesMap, p, bg, level), ''],
          diag:     [resolve(window.DIAGNOSTIC_PAGES, u, bg, level), ''],
          topics:   [resolve(window.DIAG_TOPICS, u, bg, level), count(window.DIAG_TOPICS, u, level)],
          practice: [resolve(window.PRACTICE_BUNDLE_MAP, u, bg, level), ''],
          aifb:     [resolve(window.AI_FEEDBACK_BUNDLE_MAP, u, bg, level), ''],
          flash:    [resolve(window.FLASHCARDS_TOPICS, p, bg, level), count(window.FLASHCARDS_TOPICS, p, level)]
        };
        var ks = COLS.map(function (c) { return cells[c][0]; });
        var st = ks.every(function (k) { return k === 'g'; }) ? 'ready'
               : ks.every(function (k) { return k === 'r'; }) ? 'none'
               : ks.indexOf('g') < 0 ? other(level) : 'most';
        return { board: b, cells: cells, status: st };
      });
      out.push({ subject: s.name, boards: boards,
                 soon: level === 'alevel' && SC.isComingSoonAlevel(s.name, level) });
    });
    return out;
  }

  // notes.html is fetched once per page and shared by both levels. A failed
  // fetch shows the notes column red rather than taking the page down.
  var notesPromise = null;
  function notesMap() {
    if (!notesPromise) {
      notesPromise = fetch('notes.html', { cache: 'no-store' })
        .then(function (r) { return r.text(); })
        .then(function (html) { return grabLiteral(html, 'NOTES_AVAILABLE'); })
        .catch(function () { return {}; });
    }
    return notesPromise;
  }

  async function load(level) { return build(level, await notesMap()); }

  function tally(level, data) {
    var counts = {};
    statuses(level).forEach(function (k) { counts[k] = 0; });
    data.forEach(function (s) { s.boards.forEach(function (b) { counts[b.status]++; }); });
    return counts;
  }

  window.COVERAGE = { COLS: COLS, COL_NAMES: COL_NAMES, statuses: statuses, labels: labels,
                      build: build, load: load, tally: tally };
})();
