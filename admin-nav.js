/* ═══════════════════════════════════════════════════════════════════
   ADMIN NAV — adds the Admin item to the bottom of the left sidebar,
   for admin accounts only.

   Drop <script src="admin-nav.js"></script> (or "../admin-nav.js" for
   pages inside subfolders) AFTER supabase-config.js on any page with
   the standard sidebar.

   THIS IS COSMETIC AND ONLY COSMETIC. The repo is public, so anyone can
   read this file, see that the item is hidden behind a boolean, and set
   that boolean in their own localStorage. What stops them is that
   admin.html has nothing of its own to show: every figure on it comes
   from a SECURITY DEFINER function that re-checks is_admin in Postgres,
   so a faked flag buys an empty page. See
   db/migrations/2026-09-11-admin-security.sql.

   Mirrors the two-phase shape of nav-gating.js:

     1. SYNCHRONOUS, from a short-lived localStorage cache, so an admin
        moving between pages does not watch the item pop in late.
     2. ASYNC, asking Postgres, which is the answer that counts. If the
        cache was wrong the item is removed again.
═══════════════════════════════════════════════════════════════════ */
(function () {
  const CACHE_KEY   = 'rag_is_admin';
  const EXPIRES_KEY = 'rag_is_admin_expires_at';
  const CACHE_MS    = 30 * 60 * 1000;   // same 30 minutes nav-gating uses
  const SECTION_ID  = 'admin-nav-section';

  // ── Phase 1: optimistic render from cache ───────────────────────
  // Only an account that has already passed the Postgres check can have
  // a fresh `true` here, so this is never shown to a normal user.
  let optimistic = false;
  try {
    const cached  = localStorage.getItem(CACHE_KEY) === 'true';
    const expires = parseInt(localStorage.getItem(EXPIRES_KEY) || '0', 10);
    optimistic = cached && Date.now() < expires;
  } catch (e) { /* localStorage blocked — the async pass still runs */ }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }

  function start() {
    if (optimistic) injectSection();
    verify();
  }

  // ── Phase 2: ask the database ───────────────────────────────────
  async function verify() {
    if (typeof supabaseClient === 'undefined') return;

    let user;
    try {
      const res = await supabaseClient.auth.getUser();
      user = res?.data?.user;
    } catch (e) { return; }

    if (!user) { cache(false); removeSection(); return; }

    // is_admin() is SECURITY DEFINER and keyed to auth.uid(), so it
    // reports on the caller and cannot be asked about anyone else.
    const { data, error } = await supabaseClient.rpc('is_admin');

    if (error) {
      // Migration not applied yet, or the network dropped. Leave whatever
      // the cache decided rather than flickering the item away on a blip.
      return;
    }

    const admin = data === true;
    cache(admin);
    if (admin) injectSection(); else removeSection();
  }

  function cache(admin) {
    try {
      localStorage.setItem(CACHE_KEY, admin ? 'true' : 'false');
      if (admin) {
        localStorage.setItem(EXPIRES_KEY, String(Date.now() + CACHE_MS));
      } else {
        localStorage.removeItem(EXPIRES_KEY);
      }
    } catch (e) {}
  }

  // ── Rendering ───────────────────────────────────────────────────
  function injectSection() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;                               // page has no sidebar
    if (document.getElementById(SECTION_ID)) return;    // already there

    const prefix = '../'.repeat(depthFromRoot());
    const here   = (location.pathname.split('/').pop() || '').toLowerCase()
                     .replace(/\.html$/, '');           // Vercel cleanUrls drops .html

    const section = document.createElement('div');
    section.className = 'nav-section';
    section.id = SECTION_ID;
    section.style.marginTop = '8px';

    const label = document.createElement('div');
    label.className = 'nav-label';
    label.textContent = 'Admin';

    const link = document.createElement('a');
    link.className = 'nav-item' + (here === 'admin' ? ' active' : '');
    link.href = prefix + 'admin.html';
    link.style.cursor = 'pointer';

    const icon = document.createElement('span');
    icon.className = 'nav-icon';
    icon.textContent = '🛡';

    link.appendChild(icon);
    link.appendChild(document.createTextNode(' Admin'));

    section.appendChild(label);
    section.appendChild(link);

    // Last thing in the nav list, above the avatar/sign-out chip. On pages
    // with no .sidebar-bottom it simply goes last.
    const bottom = sidebar.querySelector('.sidebar-bottom');
    if (bottom) sidebar.insertBefore(section, bottom);
    else        sidebar.appendChild(section);
  }

  function removeSection() {
    const el = document.getElementById(SECTION_ID);
    if (el) el.remove();
  }

  // /Dashboard.html -> 0, /flashcards/subject.html -> 1. Same helper as
  // nav-gating.js, kept local so neither file depends on the other.
  function depthFromRoot() {
    const parts = location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    return Math.max(0, parts.length - 1);
  }
})();
