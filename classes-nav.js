/* ═══════════════════════════════════════
   ROLE-AWARE CLASSES NAV
   ────────────────────────────────────────
   Injects the "Classes" nav section into whatever sidebar the page has, and
   adjusts the surrounding nav for teachers.

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

   For a TEACHER the same section lists the classes they own rather than
   ones they joined, "Join a class" becomes "New class", Dashboard points at
   teacher.html, and student-only entries (Edit subjects, Diagnostic, Medals)
   are dropped — a teacher isn't sitting the exam. Everything else in the nav
   is left exactly as the page wrote it, so both roles see one layout.

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
    #${SECTION_ID} .cn-levels { display: flex; gap: 3px; margin: 8px 8px 2px; }
    #${SECTION_ID} .cn-lvl {
      flex: 1; padding: 5px 0; font: inherit; font-size: 11px; font-weight: 600;
      border: 1px solid var(--border); background: var(--surface2); color: var(--muted2);
      border-radius: 7px; cursor: pointer; transition: all 0.12s;
    }
    #${SECTION_ID} .cn-lvl:hover { color: var(--text); }
    #${SECTION_ID} .cn-lvl.on { background: var(--accent-dim); border-color: var(--accent); color: var(--accent-dark); }
    #${SECTION_ID} .cn-hint { font-size: 10px; color: var(--muted2); margin: 0 8px 4px; line-height: 1.35; }
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

  let CURRENT_LEVEL = null;

  /* Switching level rewrites profiles.level, which is what every page reads
     to pick a spec. Reload rather than re-render: the topic lists, question
     banks and diagnostic pages are all chosen at page load. */
  window.setTeachingLevel = async function (level) {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return;
    await supabaseClient.from('profiles').update({ level }).eq('id', user.id);
    try { localStorage.setItem('cached_level', level); } catch (e) {}
    location.reload();
  };

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

  function render(classes, isTeacher) {
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
            <span class="cn-sub">${esc(c.sub)}</span>
          </span>
        </a>`;
    }).join('');

    /* Notes, Practice and Breakdown all resolve their spec from
       profiles.level — one field, but a teacher can be covering GCSE and
       A-Level at once. So when their classes span more than one level, give
       them a control to say which one they're looking at. Teachers on a
       single level never see it: their profile level is already right. */
    let levelSwitch = '';
    if (isTeacher) {
      const levels = [...new Set(classes.map(c => c.level).filter(Boolean))];
      if (levels.length > 1) {
        const order = ['gcse', 'as', 'a-level'];
        const label = { gcse: 'GCSE', as: 'AS', 'a-level': 'A-Level' };
        levelSwitch = `
          <div class="cn-hint">Showing notes &amp; questions for</div>
          <div class="cn-levels">
            ${order.filter(l => levels.includes(l)).map(l => `
              <button type="button" class="cn-lvl${l === CURRENT_LEVEL ? ' on' : ''}"
                      onclick="window.setTeachingLevel('${l}')">${label[l]}</button>`).join('')}
          </div>`;
      }
    }

    const cta = isTeacher
      ? `<a class="nav-item" href="${BASE}teacher.html#new-class"><span class="nav-icon">＋</span> New class</a>`
      : `<a class="nav-item" href="${BASE}Dashboard.html#join-class"><span class="nav-icon">＋</span> Join a class</a>`;

    return `<div class="nav-label">Classes</div>${rows}${cta}${levelSwitch}`;
  }

  /* Everything a teacher has no use for. All of these are about revising for
     an exam you are sitting yourself:
       - Breakdown, Diagnostic, Medals: a report on the viewer's own progress,
         which for a teacher is permanently empty. Their equivalent is the
         class page.
       - Edit subjects: a teacher's subjects come from the classes they own.
       - The whole Premium section: those upsells are aimed at students. */
  const TEACHER_HIDES = ['breakdown', 'diagnostic', 'medals', 'edit subjects'];

  /* The visible words of a nav item, without its emoji icon or PRO badge.
     el.textContent alone yields "📊 Breakdown", which matches nothing. */
  function itemLabel(el) {
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.nav-icon, .pro-tag').forEach(n => n.remove());
    return clone.textContent.trim().toLowerCase();
  }

  /* Retarget the nav the host page wrote for a student. Done by rewriting
     what is already there rather than replacing the sidebar, so each page
     keeps its own styling and active state. */
  function adaptForTeacher(sidebar) {
    for (const el of [...sidebar.querySelectorAll('.nav-item')]) {
      const label = itemLabel(el);
      const href  = el.getAttribute('href') || '';

      if (TEACHER_HIDES.some(h => label.startsWith(h))) { el.remove(); continue; }
      if (href.includes('Dashboard.html')) el.setAttribute('href', BASE + 'teacher.html');
    }

    for (const sec of [...sidebar.querySelectorAll('.nav-section')]) {
      const label = (sec.querySelector('.nav-label')?.textContent || '').trim().toLowerCase();
      if (label === 'premium') sec.remove();
      // A section left with nothing but its heading looks broken.
      else if (label && !sec.querySelector('.nav-item')) sec.remove();
    }

    // The logo goes home to the teacher's own home.
    const logo = sidebar.querySelector('.sidebar-logo');
    if (logo && logo.getAttribute('href')) logo.setAttribute('href', BASE + 'teacher.html');
  }

  /* Pages that only make sense for someone sitting the exam. Hiding them
     from the nav isn't enough — a teacher who reloads, bookmarks, or follows
     an old link lands on the student dashboard and sees "Your subjects",
     medals and a revision progress report that will always read zero. */
  const STUDENT_ONLY = ['dashboard.html', 'breakdown.html', 'medals.html'];

  const ROLE_KEY = 'cached_account_type';

  function redirectIfStudentPage() {
    const here = location.pathname.split('/').pop().toLowerCase();
    if (!STUDENT_ONLY.includes(here)) return false;
    location.replace(BASE + 'teacher.html');
    return true;
  }

  /* The authoritative check needs two round trips (session, then profile), by
     which time the student dashboard has already painted. Remembering the
     role locally lets the redirect happen before anything renders.

     Only ever used to redirect, never to grant anything — and teacher.html
     clears it when it finds a non-teacher, so a stale value costs one bounce
     rather than an endless loop. */
  (function redirectEarly() {
    let cached = null;
    try { cached = localStorage.getItem(ROLE_KEY); } catch (e) {}
    if (cached === 'teacher') redirectIfStudentPage();
  })();

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

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) { section.remove(); return; }

    const { data: profile } = await supabaseClient
      .from('profiles').select('account_type, level').eq('id', user.id).maybeSingle();
    const isTeacher = profile?.account_type === 'teacher';
    CURRENT_LEVEL = profile?.level || null;
    try { localStorage.setItem(ROLE_KEY, isTeacher ? 'teacher' : 'student'); } catch (e) {}

    let classes, error;
    if (isTeacher) {
      // Classes they OWN. RLS already scopes this to teacher_id = auth.uid().
      const res = await supabaseClient.from('classes')
        .select('id, name, subject, exam_board, level, archived')
        .eq('archived', false).order('created_at');
      error = res.error;
      classes = (res.data || []).map(c => ({
        class_id: c.id, name: c.name, subject: c.subject,
        sub: c.exam_board, level: c.level
      }));
      if (redirectIfStudentPage()) return;
      adaptForTeacher(sidebar);
      // Notes / Practice / Breakdown all read user_subjects. A teacher who
      // lands on one of them directly has never passed through teacher.html,
      // so reconcile here too rather than only on their dashboard.
      if (window.syncTeacherSubjects) window.syncTeacherSubjects();
    } else {
      const res = await supabaseClient.rpc('my_classes');
      error = res.error;
      classes = (res.data || []).map(c => ({
        class_id: c.class_id, name: c.name, subject: c.subject,
        sub: c.teacher_name || 'Your teacher'
      }));
    }

    // Signed out, or the classroom migration hasn't been applied — either
    // way there is nothing useful to show, so take the section back out
    // rather than leaving an empty heading.
    if (error) { section.remove(); return; }

    section.innerHTML = render(classes, isTeacher);
  }

  window.installClassesNav = install;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install);
  } else {
    install();
  }
})();
