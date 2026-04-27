/* ═══════════════════════════════════════════════════════════════════
   NAV GATING — Unlocks Pro sidebar items for active Pro users.

   Drop <script src="nav-gating.js"></script> (or "../nav-gating.js" for
   pages inside subfolders) AFTER supabase-config.js on any page that has
   the standard left sidebar.

   Two-phase flow to avoid the "flash of locked items":

   1. SYNCHRONOUS (runs before DOM paints): if localStorage flag
      `rag_is_pro` is true, inject a tiny stylesheet that overrides
      .nav-item.locked styling so the items render unlocked from the
      first paint.

   2. ASYNC (after DOMContentLoaded): fetch profile from Supabase to
      verify, refresh the cache, and patch each link's href + class
      so clicks navigate properly.
═══════════════════════════════════════════════════════════════════ */
(function () {
  const PRO_LINKS = {
    'test history':       'test-history.html',
    'past papers':        'past-papers.html',
    'mark schemes':       'mark-schemes.html',
    'ai feedback':        'ai-feedback.html',
    'flashcards':         'flashcards.html',
    'revision timetable': 'revision-timetable.html',
  };

  // ── PHASE 1: synchronous CSS override (no flash) ────────────────
  try {
    if (localStorage.getItem('rag_is_pro') === 'true') {
      injectOverrideStyle();
    }
  } catch (e) { /* localStorage blocked — fall through to async path */ }

  function injectOverrideStyle() {
    if (document.getElementById('nav-gating-pro-override')) return;
    const style = document.createElement('style');
    style.id = 'nav-gating-pro-override';
    // !important beats both the .locked class rules and any inline
    // style="opacity:0.5" on individual <a> tags. Pointer-events make
    // the link clickable even before the async pass patches the href.
    style.textContent = `
      .nav-item.locked,
      .nav-item[style*="opacity"] {
        opacity: 1 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
      }
    `;
    if (document.head) {
      document.head.appendChild(style);
    } else {
      // Defensive — shouldn't happen because the script tag sits inside
      // <head> after the supabase-config script, but just in case.
      document.addEventListener('DOMContentLoaded', () => {
        document.head.appendChild(style);
      }, { once: true });
    }
  }

  function removeOverrideStyle() {
    const el = document.getElementById('nav-gating-pro-override');
    if (el) el.remove();
  }

  // ── PHASE 2: async unlock + cache refresh ───────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  async function init() {
    if (typeof supabaseClient === 'undefined') return;

    let user;
    try {
      const res = await supabaseClient.auth.getUser();
      user = res?.data?.user;
    } catch (e) { return; }
    if (!user) return;

    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('subscription_tier, subscription_status, subscription_expires_at')
      .eq('id', user.id)
      .single();

    const pro = isPro(profile);

    // Refresh cache for next page load (and across-tab navigation in
    // the same browser).
    try {
      localStorage.setItem('rag_is_pro', pro ? 'true' : 'false');
    } catch (e) {}

    if (!pro) {
      // Cache may have been stale — undo any optimistic override.
      removeOverrideStyle();
      return;
    }

    // Make sure the override is in place (covers the cold-cache case
    // where Phase 1 didn't run because rag_is_pro wasn't set yet).
    injectOverrideStyle();

    // Patch each Pro sidebar item: real href, drop locked class.
    const depth = computeDepthFromRoot();
    const prefix = depth > 0 ? '../'.repeat(depth) : '';

    // Detect the current page so we can mark the matching Pro link active.
    const currentFile = (window.location.pathname.split('/').pop() || '').toLowerCase();

    document.querySelectorAll('.nav-item').forEach(el => {
      const text = (el.textContent || '').trim().toLowerCase();
      const matchKey = Object.keys(PRO_LINKS).find(k => text.includes(k));
      if (!matchKey) return;

      const targetPage = PRO_LINKS[matchKey];
      el.setAttribute('href', `${prefix}${targetPage}`);
      el.classList.remove('locked');

      // Mark this item as the active page if its target matches the
      // current URL — gives the same blue highlight as the Menu items.
      if (currentFile === targetPage.toLowerCase()) {
        el.classList.add('active');
      }

      // Strip any inline opacity:0.5 too — without this, the inline
      // style would still win once the .locked class is removed and
      // the !important override stops applying. Belt + braces.
      const style = el.getAttribute('style') || '';
      el.setAttribute(
        'style',
        style.replace(/opacity\s*:\s*[^;]+;?/i, '').trim()
      );
      el.style.cursor = 'pointer';
      el.style.pointerEvents = 'auto';
    });
  }

  function isPro(p) {
    if (!p) return false;
    const tier = p.subscription_tier || 'free';
    const status = p.subscription_status || 'active';
    const expires = p.subscription_expires_at ? new Date(p.subscription_expires_at) : null;
    return tier !== 'free'
      && ['active', 'trialing'].includes(status)
      && (!expires || expires > new Date());
  }

  // Returns the number of folder levels between this page and the site
  // root. e.g. /Dashboard.html -> 0, /flashcards/subject.html -> 1.
  function computeDepthFromRoot() {
    const path = window.location.pathname.replace(/\\/g, '/');
    const parts = path.split('/').filter(Boolean);
    return Math.max(0, parts.length - 1);
  }
})();
