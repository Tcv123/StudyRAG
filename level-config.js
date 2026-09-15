/*
 * ── LEVEL SUFFIX ────────────────────────────────────────────────────────
 *
 * The single definition of how a level becomes a registry-map key suffix.
 *
 * Registry maps across the app are keyed "Subject_Board" with an optional
 * "|alevel" / "|gcse" variant, and the suffixed key wins. Working out which
 * suffix applies used to be copy-pasted into fifteen files, which drifted:
 * half of them rejected the already-normalised spelling 'alevel', so a
 * cached_level of 'alevel' resolved A-Level maps in practice.html and GCSE
 * maps in flashcards — silently, and half-wrong. Every caller now delegates
 * here. Do not re-inline this test.
 *
 *   levelSuffix(level?)            -> 'alevel' | 'gcse'
 *   levelLookup(map, base, level?) -> map[base|suffix] ?? map[base]
 *
 * Accepts the profile spellings ('gcse' | 'as' | 'a-level') and the
 * already-normalised 'alevel', so it is safe to feed it its own output.
 *
 * LOAD ORDER: every page loads this immediately before supabase-config.js,
 * and therefore before flashcards-config.js, practice-bank-config.js,
 * medals-engine.js, subjects-config.js, diagnostics-pages.js and
 * predicted-grade.js — all of which depend on it.
 *
 * It is its own file, rather than a block inside supabase-config.js, so that
 * Node can load it without standing up a Supabase client: tests/medals.test.js
 * runs medals-engine.js in a VM and needs the real helper. A copy of the rule
 * is exactly what this file exists to prevent.
 */
(function () {
  // The cache is read only when NO argument is supplied. An argument that is
  // present but empty (a class row with a null level) resolves to 'gcse' and
  // must NOT fall back to the cache: on teacher.html and class.html the cached
  // level is the VIEWER's, and borrowing it would draw GCSE topics for an
  // A-Level class. Callers that do want the falsy fallback (medals-engine)
  // pass `level || undefined` to ask for it explicitly.
  function levelSuffix(level) {
    var l = level;
    if (l === undefined) { try { l = localStorage.getItem('cached_level'); } catch (e) {} }
    l = String(l || 'gcse').toLowerCase();
    return (l === 'a-level' || l === 'as' || l === 'alevel') ? 'alevel' : 'gcse';
  }

  // Suffixed key wins; fall back to the unsuffixed base key.
  function levelLookup(map, base, level) {
    if (!map) return undefined;
    var keyed = map[base + '|' + levelSuffix(level)];
    return keyed !== undefined ? keyed : map[base];
  }

  window.levelSuffix = levelSuffix;
  window.levelLookup = levelLookup;
})();
