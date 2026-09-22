/*
 * ── SUBJECT GRID ────────────────────────────────────────────────────────
 *
 * The subject tiles on index.html and subjects.html, generated from
 * subjects-config.js instead of hand-maintained. Each grid declares which
 * level it is via data-subject-grid="alevel" | "gcse".
 *
 * Both grids had drifted badly. A-Level advertised Maths on three boards long
 * after a fourth went live and omitted four coming-soon subjects entirely;
 * GCSE was worse, with 8 of its 12 subjects listing stale boards — Biology
 * showed three where the app offers seven.
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

  // Tile labels per level, where they differ from the config name. A-Level
  // shortens the two maths subjects; GCSE spells Mathematics out, which is how
  // the GCSE section has always read. Anything not listed uses its config name.
  const DISPLAY_BY_LEVEL = {
    alevel: { 'Mathematics': 'Maths', 'Further Mathematics': 'Further Maths' },
    gcse: {},
  };

  // Reading order per level. A-Level keeps the established sciences-first
  // order; GCSE is left empty because subjects-config's own gcseSubjectNames
  // list is already in the order the page wants. Anything live but unlisted is
  // appended, so a new subject still appears if nobody remembers to add it —
  // it just lands at the end of the live group.
  const ORDER_BY_LEVEL = {
    alevel: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Further Mathematics',
             'Computer Science', 'Economics', 'Geography', 'Politics',
             'Business Studies'],
    gcse: [],
  };

  // Presentation-only icon overrides for the marketing pages. subjects-config
  // is the canonical icon source and gives these three flag emoji, which do
  // not render on Windows — hence inline SVG here. A subject with no override
  // falls back to its config emoji, so a new language still renders something.
  const SVG = 'width="26" height="18" style="border-radius:3px;display:block;box-shadow:0 0 0 1px rgba(27,45,79,0.1);"';
  const ICON_HTML = {
    French:  `<svg ${SVG} viewBox="0 0 3 2"><rect width="1" height="2" x="0" fill="#002654"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ce1126"/></svg>`,
    German:  `<svg ${SVG} viewBox="0 0 5 3"><rect width="5" height="1" y="0" fill="#000"/><rect width="5" height="1" y="1" fill="#DD0000"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>`,
    Spanish: `<svg ${SVG} viewBox="0 0 3 2"><rect width="3" height="0.5" y="0" fill="#AA151B"/><rect width="3" height="1" y="0.5" fill="#F1BF00"/><rect width="3" height="0.5" y="1.5" fill="#AA151B"/></svg>`,
  };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  // Ordered [{ name, display, icon, boards, soon }] for the given level.
  function subjectsFor(config, level) {
    const order = ORDER_BY_LEVEL[level] || [];
    const display = DISPLAY_BY_LEVEL[level] || {};
    const names = config.getSubjectsFor(level).map(s => s.name);
    const soon = names.filter(n => config.isComingSoonAlevel(n, level));
    const live = names.filter(n => !soon.includes(n));
    const ordered = order.filter(n => live.includes(n))
      .concat(live.filter(n => !order.includes(n)))
      .concat(soon);
    return ordered.map(n => ({
      name: n,
      display: display[n] || n,
      icon: ICON_HTML[n] || config.emojiFor(n),
      boards: config.getBoardsFor(n, level).join(' · '),
      soon: config.isComingSoonAlevel(n, level),
    }));
  }

  // The one template. Indented to sit inside <div class="grid-4"> in the page.
  function tilesHtml(config, level) {
    return subjectsFor(config, level).map(s =>
      '      <div class="subject-tile' + (s.soon ? ' soon' : '') + '">\n' +
      '        <div class="subject-icon" aria-hidden="true">' + s.icon + '</div>\n' +
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

  return { DISPLAY_BY_LEVEL, ORDER_BY_LEVEL, ICON_HTML, subjectsFor, tilesHtml, render };
});
