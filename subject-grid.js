/*
 * ── SUBJECT GRID ────────────────────────────────────────────────────────
 *
 * The A-Level subject tiles on index.html and subjects.html, generated from
 * subjects-config.js instead of hand-maintained. They had drifted badly:
 * Maths was advertised with three boards long after a fourth went live,
 * Further Maths named a board the app does not offer, and four coming-soon
 * subjects were missing entirely.
 *
 * WHY THE HTML IS STILL IN THE PAGE. These are the public marketing pages,
 * and their whole claim is "every major UK subject, every major board" — so
 * the subject names and boards must be in the served HTML for crawlers and
 * for anyone without JavaScript. The tiles are therefore written into the
 * pages as a static baseline by scripts/build-subject-grids.js, and this
 * file re-renders them at runtime so the two can never disagree.
 *
 * Both paths call tilesHtml() below, so there is exactly one template.
 * scripts/check-marketing.js verifies the committed baseline still matches
 * the config, which stops the no-JS fallback from rotting.
 *
 * Runs in the browser (auto-renders into [data-subject-grid]) and in Node
 * (module.exports, for the build script and the checker).
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) { root.SUBJECT_GRID = api; }
})(typeof window !== 'undefined' ? window : null, function () {

  // Marketing shortens the two maths subjects; everything else matches config.
  const DISPLAY = { 'Mathematics': 'Maths', 'Further Mathematics': 'Further Maths' };

  // Live subjects keep the established sciences-first reading order. Anything
  // live but unlisted is appended, so a new subject still appears if nobody
  // remembers to add it here — it just lands at the end of the live group.
  const ORDER = ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Further Mathematics',
                 'Computer Science', 'Economics', 'Geography', 'Politics'];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  // Ordered [{ name, display, emoji, boards, soon }] for the given level.
  function subjectsFor(config, level) {
    const names = config.getSubjectsFor(level).map(s => s.name);
    const soon = names.filter(n => config.isComingSoonAlevel(n, level));
    const live = names.filter(n => !soon.includes(n));
    const ordered = ORDER.filter(n => live.includes(n))
      .concat(live.filter(n => !ORDER.includes(n)))
      .concat(soon);
    return ordered.map(n => ({
      name: n,
      display: DISPLAY[n] || n,
      emoji: config.emojiFor(n),
      boards: config.getBoardsFor(n, level).join(' · '),
      soon: config.isComingSoonAlevel(n, level),
    }));
  }

  // The one template. Indented to sit inside <div class="grid-4"> in the page.
  function tilesHtml(config, level) {
    return subjectsFor(config, level).map(s =>
      '      <div class="subject-tile' + (s.soon ? ' soon' : '') + '">\n' +
      '        <div class="subject-icon" aria-hidden="true">' + s.emoji + '</div>\n' +
      '        <div class="subject-name">' + esc(s.display) +
          (s.soon ? '<span class="soon-tag">Soon</span>' : '') + '</div>\n' +
      '        <div class="subject-boards">' + esc(s.boards) + '</div>\n' +
      '      </div>'
    ).join('\n');
  }

  // Browser: replace each [data-subject-grid="<level>"] with freshly rendered
  // tiles. If the config is missing the static baseline is simply left alone.
  function render(doc) {
    const d = doc || (typeof document !== 'undefined' ? document : null);
    const config = typeof window !== 'undefined' && window.SUBJECTS_CONFIG;
    if (!d || !config) return 0;
    let n = 0;
    d.querySelectorAll('[data-subject-grid]').forEach(grid => {
      try {
        grid.innerHTML = '\n' + tilesHtml(config, grid.getAttribute('data-subject-grid')) + '\n    ';
        n++;
      } catch (e) {
        // Leave the static baseline in place rather than emptying the section.
        if (window.console) console.warn('subject-grid: render failed', e);
      }
    });
    return n;
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => render());
    } else {
      render();
    }
  }

  return { DISPLAY, ORDER, subjectsFor, tilesHtml, render };
});
