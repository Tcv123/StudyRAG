/* ═══════════════════════════════════════════════════════════════════
   NAV GATING — Unlocks Pro sidebar items for active Pro users.

   Drop <script src="nav-gating.js"></script> (or "../nav-gating.js" for
   pages inside subfolders) AFTER supabase-config.js on any page that has
   the standard left sidebar. The script:

   1. Reads the user's profile (subscription_tier, subscription_status,
      subscription_expires_at).
   2. If they're an active Pro user, finds each "PRO" sidebar item by
      its text content and rewrites it to be clickable.

   No-op for free users — links stay grayed-out + non-clickable.
═══════════════════════════════════════════════════════════════════ */
(function () {
  // Pro items keyed by the lowercased start of their text content.
  // Each value is the page (relative to site root) the link should
  // navigate to when unlocked.
  const PRO_LINKS = {
    'test history':       'test-history.html',
    'past papers':        'past-papers.html',
    'mark schemes':       'mark-schemes.html',
    'ai feedback':        'ai-feedback.html',
    'flashcards':         'flashcards.html',
    'revision timetable': 'revision-timetable.html',
  };

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

    if (!isPro(profile)) return;

    const depth = computeDepthFromRoot();
    const prefix = depth > 0 ? '../'.repeat(depth) : '';

    document.querySelectorAll('.nav-item').forEach(el => {
      // Use includes(), not startsWith() — the link text begins with an
      // emoji icon (e.g. "🃏 Flashcards PRO") so we have to look anywhere
      // in the string for the label keyword.
      const text = (el.textContent || '').trim().toLowerCase();
      const matchKey = Object.keys(PRO_LINKS).find(k => text.includes(k));
      if (!matchKey) return;

      el.setAttribute('href', `${prefix}${PRO_LINKS[matchKey]}`);
      el.classList.remove('locked');

      // Some pages use inline opacity instead of the .locked class.
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
