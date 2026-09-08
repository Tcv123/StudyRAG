/* ═══════════════════════════════════════
   SHARED POST-AUTHENTICATION ROUTING
   ────────────────────────────────────────
   Used by:
     - login.html      (password sign-in)
     - confirmed.html  (email confirmation link)
     - register.html   (in-page OTP verification)

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
  async function ensureProfile(user) {
    if (!user) return;
    await supabaseClient.from('profiles').upsert({
      id:           user.id,
      first_name:   user.user_metadata?.first_name || '',
      last_name:    user.user_metadata?.last_name  || '',
      email:        user.email,
      account_type: user.user_metadata?.account_type === 'teacher' ? 'teacher' : 'student'
    }, { onConflict: 'id', ignoreDuplicates: true });
  }

  /* Where this user should land, as a path relative to /auth/.
   *
   * Teachers skip setup.html entirely: it asks for subjects, current grades
   * and target grades, none of which mean anything for someone who is not
   * sitting the exam. */
  async function destination(user) {
    if (!user) return 'login.html';

    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('account_type, setup_complete')
      .eq('id', user.id)
      .maybeSingle();

    if (profile?.account_type === 'teacher') return '../teacher.html';
    return profile?.setup_complete ? '../Dashboard.html' : 'setup.html';
  }

  /* ensureProfile + destination in one call, for the common case. */
  async function routeAfterAuth(user) {
    await ensureProfile(user);
    return destination(user);
  }

  window.POST_AUTH = { ensureProfile, destination, routeAfterAuth };
})();
