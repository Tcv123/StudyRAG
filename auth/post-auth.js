/* ═══════════════════════════════════════
   SHARED POST-AUTHENTICATION ROUTING
   ────────────────────────────────────────
   Used by:
     - login.html      (password sign-in)
     - confirmed.html  (email confirmation link)
     - register.html   (in-page OTP verification)
     - verify.html     (OTP entered later)
     - setup.html      (resuming a pending plan after setup)

   Three pages needed the same two things — make sure a profiles row exists,
   then work out where the user belongs — and they were drifting apart. The
   account_type split made that worse, since teachers must not be sent into
   the student setup flow.

   Load AFTER supabase-config.js.
═══════════════════════════════════════ */
(function () {
  'use strict';

  /* Create the profiles row on first sign-in.
   *
   * account_type is chosen at registration and rides along in user_metadata,
   * because at signup time there is no profiles row to write it to — the
   * account does not exist until the email is confirmed.
   *
   * ignoreDuplicates keeps this from overwriting anything on later logins,
   * so a user who changes their name or switches account type in settings
   * keeps that change. */
  async function ensureProfile(user, { attempts = 3 } = {}) {
    if (!user) return false;

    const row = {
      id:           user.id,
      first_name:   user.user_metadata?.first_name || '',
      last_name:    user.user_metadata?.last_name  || '',
      email:        user.email,
      account_type: user.user_metadata?.account_type === 'teacher' ? 'teacher' : 'student'
    };

    /* This used to be a single fire-and-forget upsert whose result was
     * discarded. When it failed — a dropped request, a blocked connection,
     * a tab closed mid-flight — nothing noticed and nothing retried, so the
     * user ended up confirmed in auth.users with no profiles row and no
     * early-adopter grant. 14 accounts were lost that way between May and
     * September 2026. Retry, and tell the caller whether it worked. */
    let lastErr = null;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      const { error } = await supabaseClient
        .from('profiles')
        .upsert(row, { onConflict: 'id', ignoreDuplicates: true });

      if (!error) {
        await saveSignupMarketingChoice(user);
        return true;
      }
      lastErr = error;
      if (attempt < attempts) await new Promise(r => setTimeout(r, 300 * attempt));
    }

    console.error('[post-auth] could not create profiles row for', user.id, lastErr);
    return false;
  }

  /* The "email me news and offers" box on register.html rides in
   * user_metadata like account_type, because the profile does not exist at
   * sign-up. Copied across once: notif_prefs_set_at is null only until the
   * first time preferences are written, so a later change in Settings is
   * never overwritten on the next login.
   *
   * Kept out of the upsert above on purpose. If the 2026-10-10 migration has
   * not run, the column does not exist and this update fails on its own,
   * instead of taking profile creation down with it. */
  async function saveSignupMarketingChoice(user) {
    if (user.user_metadata?.marketing_opt_in !== true) return;
    try {
      const { error } = await supabaseClient
        .from('profiles')
        .update({ notif_marketing: true, notif_prefs_set_at: new Date().toISOString() })
        .eq('id', user.id)
        .is('notif_prefs_set_at', null);
      if (error) console.warn('[post-auth] marketing choice not saved:', error.message);
    } catch (e) { /* never block sign-in on this */ }
  }

  /* A plan picked on the pricing page before the user had an account.
   *
   * pricing.html / pricing-app.html send logged-out users to
   * register.html?plan=X (or login.html?plan=X). Nothing downstream read it,
   * so the choice was lost somewhere between sign-up, the OTP and setup, and
   * checkout never resumed. It is kept in sessionStorage for the length of
   * this tab, then handed to pricing-app.html?plan=X once the account is
   * ready, which preselects it. Ids must match PLAN_DETAILS in the pricing
   * pages and create-checkout-session. */
  const PENDING_PLAN_KEY = 'rag_pending_plan';
  const PLANS = ['monthly', 'biannual', 'annual'];

  function rememberPlan(plan) {
    if (!PLANS.includes(plan)) return;
    try { sessionStorage.setItem(PENDING_PLAN_KEY, plan); } catch (e) { /* storage blocked */ }
  }
  function pendingPlan() {
    try {
      const p = sessionStorage.getItem(PENDING_PLAN_KEY);
      return PLANS.includes(p) ? p : null;
    } catch (e) { return null; }
  }
  function clearPendingPlan() {
    try { sessionStorage.removeItem(PENDING_PLAN_KEY); } catch (e) { /* storage blocked */ }
  }
  /* The pricing URL for a pending plan (clearing it), or null if there is
   * none. `prefix` is the path from the calling page to the site root. */
  function takePendingPlanUrl(prefix) {
    const plan = pendingPlan();
    if (!plan) return null;
    clearPendingPlan();
    return (prefix || '') + 'pricing-app.html?plan=' + plan;
  }

  /* sessionStorage is per tab, so a user who confirms by the emailed link
   * (which opens a new tab) would lose the plan. register.html also stores it
   * on the account as user_metadata.pending_plan; adopt it into this tab once
   * and clear it from the account so it only resumes a single time. */
  function adoptAccountPlan(user) {
    const plan = user?.user_metadata?.pending_plan;
    if (!plan) return;
    if (!pendingPlan()) rememberPlan(plan);
    supabaseClient.auth.updateUser({ data: { pending_plan: null } }).catch(() => {});
  }

  // Capture ?plan= on whichever auth page loaded this script.
  try { rememberPlan(new URLSearchParams(window.location.search).get('plan')); } catch (e) { /* no-op */ }

  /* Where this user should land, as a path relative to /auth/.
   *
   * Teachers skip setup.html entirely: it asks for subjects, current grades
   * and target grades, none of which mean anything for someone who is not
   * sitting the exam. */
  async function destination(user) {
    if (!user) return 'login.html';
    adoptAccountPlan(user);

    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('account_type, setup_complete')
      .eq('id', user.id)
      .maybeSingle();

    if (profile?.account_type === 'teacher') { clearPendingPlan(); return '../teacher.html'; }
    // Students who still need setup keep the pending plan; setup.html
    // resumes it when they finish.
    if (!profile?.setup_complete) return 'setup.html';
    return takePendingPlanUrl('../') || '../Dashboard.html';
  }

  /* ensureProfile + destination in one call, for the common case. */
  async function routeAfterAuth(user) {
    await ensureProfile(user);
    return destination(user);
  }

  window.POST_AUTH = { ensureProfile, destination, routeAfterAuth, rememberPlan, pendingPlan, takePendingPlanUrl };
})();
