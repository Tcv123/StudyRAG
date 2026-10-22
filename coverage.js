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

   Past papers come from papers-config.js the way past-papers.html shows
   them: a board's papers count for the level its `level` label names, and
   an unlabelled board is A-Level (boardsForLevel). Board names are matched
   after dropping the bracketed suffix ("Edexcel (Pearson)" → "Edexcel") and
   reading a bare "OCR" as "OCR A", as past-papers.html does. A board with
   only an official-page link and no papers is red. Mark schemes count the
   same papers, keeping only those whose mark scheme is in the app part by
   part (the papers mark-schemes.html can show). Model answers count the
   papers where every part has a pre-written model answer, read from the
   same model-answers-*.js files mark-schemes.html loads (Maths and Further
   Maths answers count only when listed in their *-checked.js files, as
   there). papers-config.js and the answer files are large, so they are
   fetched once, only by the pages that ask for coverage.
═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var COLS = ['notes', 'diag', 'topics', 'practice', 'aifb', 'flash', 'papers', 'ms', 'ma'];
  var COL_NAMES = { notes: 'Notes', diag: 'Diagnostic', topics: 'Topic list', practice: 'Practice questions', aifb: 'AI feedback', flash: 'Flashcards', papers: 'Past papers', ms: 'Mark schemes', ma: 'Model answers' };

  // Model-answer maps keyed "paperId::partCode", and the Maths / Further
  // Maths ones that only count for parts their checked lists name.
  var ANSWER_FILES = [
    ['CS_MODEL_ANSWERS', 'model-answers-cs.js'], ['PHYSICS_MODEL_ANSWERS', 'model-answers-physics.js'],
    ['BIO_MODEL_ANSWERS', 'model-answers-biology.js'], ['CHEM_MODEL_ANSWERS', 'model-answers-chemistry.js'],
    ['CHEM_GCSE_MODEL_ANSWERS', 'model-answers-chemistry-gcse.js'], ['MATHS_GCSE_MODEL_ANSWERS', 'model-answers-maths-gcse.js'],
    ['PHYS_GCSE_MODEL_ANSWERS', 'model-answers-physics-gcse.js'], ['BIO_GCSE_MODEL_ANSWERS', 'model-answers-biology-gcse.js'],
    ['CS_GCSE_MODEL_ANSWERS', 'model-answers-cs-gcse.js'],
    ['ECON_MODEL_ANSWERS', 'model-answers-economics.js'],
    ['GEOG_MODEL_ANSWERS', 'model-answers-geography.js'], ['GEOG_GCSE_MODEL_ANSWERS', 'model-answers-geography-gcse.js'], ['POLITICS_MODEL_ANSWERS', 'model-answers-politics.js']
  ];
  var CHECKED_FILES = [
    ['MATHS_MODEL_ANSWERS', 'model-answers-maths.js', 'CHECKED_MATHS_ANSWERS', 'model-answers-maths-checked.js'],
    ['FM_MODEL_ANSWERS', 'model-answers-fm.js', 'CHECKED_FM_ANSWERS', 'model-answers-fm-checked.js']
  ];
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

  function normBoard(b) {
    var n = String(b || '').toLowerCase().replace(/\s*\([^)]*\)/g, '').trim();
    return n === 'ocr' ? 'ocr a' : n;
  }

  // [state, paper count] for one subject + board at `level`, counting the
  // papers `keep` accepts.
  function papersCell(papersData, subject, board, level, keep) {
    var subj = (papersData.subjects || []).filter(function (s) { return s.name === subject; })[0];
    if (!subj) return ['r', ''];
    var counted = (subj.boards || []).filter(function (b) {
      return normBoard(b.board) === normBoard(board);
    }).map(function (b) {
      return { level: b.level || 'alevel', n: (b.papers || []).filter(keep).length };
    }).filter(function (b) { return b.n > 0; });
    var mine = counted.filter(function (b) { return b.level === level; });
    if (mine.length) return ['g', mine.reduce(function (n, b) { return n + b.n; }, 0)];
    return counted.length ? ['a', ''] : ['r', ''];
  }

  // A paper's mark scheme is in the app when it has per-question parts or a
  // verified Maths / Further Maths side-file entry — the same test as
  // hasMarkSchemeData() in mark-schemes.html (paperPartCount reads
  // `partCount` on the deployed copy, where the parts load on demand).
  function anyPaper() { return true; }
  function hasMarkScheme(papersData) {
    var verified = papersData.verified || {};
    return function (p) {
      return (p.parts && p.parts.length > 0) ||
             (papersData.partCount ? papersData.partCount(p) > 0 : false) ||
             !!verified[p.id];
    };
  }

  // Every part of the paper has a model answer. Part counts come from
  // paperPartCount (which reads `partCount` on the deployed copy) or, for
  // Maths papers, from their verified side-file entry.
  function hasModelAnswers(papersData) {
    var verified = papersData.verified || {}, answered = papersData.answered || {};
    return function (p) {
      var n = (p.parts && p.parts.length) ||
              (papersData.partCount ? papersData.partCount(p) : 0) ||
              (verified[p.id] && papersData.parts ? papersData.parts(verified[p.id]).length : 0);
      return n > 0 && (answered[p.id] || 0) >= n;
    };
  }

  function build(level, notesMap, papersData) {
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
          flash:    [resolve(window.FLASHCARDS_TOPICS, p, bg, level), count(window.FLASHCARDS_TOPICS, p, level)],
          papers:   papersCell(papersData || {}, s.name, b, level, anyPaper),
          ms:       papersCell(papersData || {}, s.name, b, level, hasMarkScheme(papersData || {})),
          ma:       papersCell(papersData || {}, s.name, b, level, hasModelAnswers(papersData || {}))
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

  // papers-config.js and the Maths side files assign to `window`, so each is
  // run against a stand-in rather than the page's own window. A failed fetch
  // leaves its part out: no papers shows the columns red, and a missing side
  // file only drops the Maths / Further Maths mark schemes it holds.
  function runScript(file) {
    return fetch(file, { cache: 'no-store' })
      .then(function (r) { return r.text(); })
      .then(function (src) { var w = {}; new Function('window', src)(w); return w; })
      .catch(function () { return {}; });
  }
  var papersPromise = null;
  function papersData() {
    if (!papersPromise) {
      var files = ['papers-config.js', 'maths-questions.js', 'further-maths-questions.js']
        .concat(ANSWER_FILES.map(function (a) { return a[1]; }))
        .concat([].concat.apply([], CHECKED_FILES.map(function (c) { return [c[1], c[3]]; })));
      papersPromise = Promise.all(files.map(runScript)).then(function (ws) {
        var g = {};                       // every global the scripts set
        ws.forEach(function (w) { Object.keys(w).forEach(function (k) { g[k] = w[k]; }); });
        var verified = {};
        [g.MATHS_QUESTIONS, g.FM_QUESTIONS].forEach(function (side) {
          Object.keys(side || {}).forEach(function (id) { if (side[id] && side[id].verified) verified[id] = side[id]; });
        });
        // answered[paperId] = parts with a model answer the site would show
        var answered = {};
        ANSWER_FILES.forEach(function (a) {
          Object.keys(g[a[0]] || {}).forEach(function (key) {
            var id = key.split('::')[0];
            if (g[a[0]][key]) answered[id] = (answered[id] || 0) + 1;
          });
        });
        CHECKED_FILES.forEach(function (c) {
          var answers = g[c[0]] || {}, checked = g[c[2]] || {};
          Object.keys(checked).forEach(function (id) {
            answered[id] = (checked[id] || []).filter(function (code) { return answers[id + '::' + code]; }).length;
          });
        });
        return { subjects: g.SUBJECTS || [], partCount: g.paperPartCount, parts: g.paperParts,
                 verified: verified, answered: answered };
      });
    }
    return papersPromise;
  }

  async function load(level) {
    var both = await Promise.all([notesMap(), papersData()]);
    return build(level, both[0], both[1]);
  }

  function tally(level, data) {
    var counts = {};
    statuses(level).forEach(function (k) { counts[k] = 0; });
    data.forEach(function (s) { s.boards.forEach(function (b) { counts[b.status]++; }); });
    return counts;
  }

  window.COVERAGE = { COLS: COLS, COL_NAMES: COL_NAMES, statuses: statuses, labels: labels,
                      build: build, load: load, tally: tally };
})();
