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

      if (!error) return true;
      lastErr = error;
      if (attempt < attempts) await new Promise(r => setTimeout(r, 300 * attempt));
    }

    console.error('[post-auth] could not create profiles row for', user.id, lastErr);
    return false;
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
