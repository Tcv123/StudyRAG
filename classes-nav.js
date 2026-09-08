/* ═══════════════════════════════════════
   CLASSES SIDEBAR SECTION
   ────────────────────────────────────────
   Injects the "Classes" nav section into whatever sidebar the page has.

   Every app page in this project carries its own hand-written copy of the
   sidebar markup — there is no layout template. Adding a nav section by
   editing 20 files means 20 chances to drift, and it already happened once:
   the Classes section landed on Dashboard.html only, so it vanished the
   moment a student clicked through to Notes or Practice.

   So this owns the section instead. Load it on any page with a `.sidebar`
   and the section appears, identically, with no per-page markup:

     <script src="classes-nav.js"></script>      (use ../ from a subfolder)

   It inserts itself before the Premium section — classes are core, not a
   paid extra — falling back to Account, then the end of the nav.

   Safe to load on a page where the user is signed out or in no classes: it
   renders the "Join a class" entry only, and nothing at all if there is no
   sidebar to attach to.
═══════════════════════════════════════ */
(function () {
  'use strict';

  const STYLE_ID = 'classes-nav-style';
  const SECTION_ID = 'classesNavSection';

  /* The sidebar's own classes (.nav-item, .nav-label) are defined per page
     and already consistent; only the bits unique to this section live here,
     so it inherits whatever the host page looks like. */
  const CSS = `
    #${SECTION_ID} .cn-item { align-items: flex-start; }
    #${SECTION_ID} .cn-text { min-width: 0; flex: 1; }
    #${SECTION_ID} .cn-name { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    #${SECTION_ID} .cn-sub { display: block; font-size: 11px; color: var(--muted2); margin-top: 1px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  `;

  /* Pages in subfolders (flashcards/, diagnostics/, subject-notes/) need to
     link back up. Derived from where this script itself was loaded from, so
     a page never has to declare its own depth. */
  function basePath() {
    const src = document.currentScript?.src
      || [...document.scripts].find(s => s.src.includes('classes-nav.js'))?.src;
    if (!src) return '';
    const path = new URL(src, location.href).pathname;
    return path.slice(0, path.lastIndexOf('/') + 1);
  }

  const BASE = basePath();

  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function emojiFor(subject) {
    return (window.SUBJECTS_CONFIG && window.SUBJECTS_CONFIG.emojiFor(subject)) || '📚';
  }

  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }

  /* Where the section belongs: above Premium if the page has it, else above
     Account, else at the end of the nav but before the user chip. */
  function insertionPoint(sidebar) {
    const labelled = [...sidebar.querySelectorAll('.nav-section')].map(sec => ({
      sec,
      label: (sec.querySelector('.nav-label')?.textContent || '').trim().toLowerCase()
    }));
    const premium = labelled.find(x => x.label === 'premium');
    if (premium) return premium.sec;
    const account = labelled.find(x => x.label === 'account');
    if (account) return account.sec;
    return sidebar.querySelector('.sidebar-bottom');
  }

  function render(classes) {
    const here = location.pathname.split('/').pop();
    const currentId = here === 'class.html'
      ? new URLSearchParams(location.search).get('id') : null;

    const rows = classes.map(c => {
      const active = c.class_id === currentId ? ' active' : '';
      return `
        <a class="nav-item cn-item${active}" href="${BASE}class.html?id=${encodeURIComponent(c.class_id)}">
          <span class="nav-icon">${esc(emojiFor(c.subject))}</span>
          <span class="cn-text">
            <span class="cn-name">${esc(c.name)}</span>
            <span class="cn-sub">${esc(c.teacher_name || 'Your teacher')}</span>
          </span>
        </a>`;
    }).join('');

    return `
      <div class="nav-label">Classes</div>
      ${rows}
      <a class="nav-item" href="${BASE}Dashboard.html#join-class"><span class="nav-icon">＋</span> Join a class</a>`;
  }

  async function install() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    // Teacher-facing pages build their own class navigation, which is a
    // different list (classes they own, not ones they joined).
    if (sidebar.dataset.classesNav === 'manual') return;

    let section = document.getElementById(SECTION_ID);
    if (!section) {
      section = document.createElement('div');
      section.id = SECTION_ID;
      section.className = 'nav-section';
      section.style.marginTop = '8px';
      const before = insertionPoint(sidebar);
      if (before) before.parentNode.insertBefore(section, before);
      else sidebar.appendChild(section);
    }

    ensureStyle();

    if (typeof supabaseClient === 'undefined') return;

    const { data: classes, error } = await supabaseClient.rpc('my_classes');

    // Signed out, or the classroom migration hasn't been applied — either
    // way there is nothing useful to show, so take the section back out
    // rather than leaving an empty heading.
    if (error) { section.remove(); return; }

    section.innerHTML = render(classes || []);
  }

  window.installClassesNav = install;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install);
  } else {
    install();
  }
})();
