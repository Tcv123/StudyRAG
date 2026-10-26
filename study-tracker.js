/*
 * study-tracker.js
 * Automatically tracks active study time across all pages.
 * After the user's daily study goal (settings → localStorage 'study_goal', in
 * minutes, default 30) of real activity in a day, marks the streak in Supabase.
 * Counting continues after the streak is marked so progress reflects the goal.
 * Include this script (after supabase-config.js) on any page that counts as studying.
 */

(function () {
  const DEFAULT_GOAL_MINS = 30;       // fallback when no study_goal is saved
  const TICK_MS           = 30000;    // tick every 30 seconds
  const IDLE_TIMEOUT_MS   = 60000;    // inactive after 60s of no interaction

  // Local-date helper — 'en-CA' gives YYYY-MM-DD in user's local timezone,
  // so a user studying at 11pm doesn't accidentally get credited to tomorrow.
  // Recomputed on every tick (not once at load) so a tab left open past
  // midnight credits the correct day. `yesterday` steps back one calendar day
  // via setDate rather than subtracting 24h, which is wrong across DST.
  const localDate = d => d.toLocaleDateString('en-CA');
  const todayStr  = () => localDate(new Date());
  const yesterdayStr = () => { const d = new Date(); d.setDate(d.getDate() - 1); return localDate(d); };

  // Safe localStorage wrappers — private-browsing mode and quota-exceeded
  // errors throw, which would otherwise kill the entire tracker silently.
  // Fall back to an in-memory store so tracking still works for this session.
  const _memFallback = {};
  const lsGet = (k) => {
    try { return localStorage.getItem(k); }
    catch (_) { return _memFallback[k] ?? null; }
  };
  const lsSet = (k, v) => {
    try { localStorage.setItem(k, v); }
    catch (_) { _memFallback[k] = v; }
  };

  // Daily goal in seconds — settings.html saves 'study_goal' as minutes.
  // Read each time so a change in settings applies without a reload.
  const goalMins = () => {
    const m = parseInt(lsGet('study_goal') || '', 10);
    return Number.isFinite(m) && m > 0 ? m : DEFAULT_GOAL_MINS;
  };
  const requiredSeconds = () => goalMins() * 60;

  let streakMarked = false;

  // Reset counters if it's a new day. Called at load and on every tick.
  function rollDayIfNeeded() {
    const today = todayStr();
    if (lsGet('study_date') !== today) {
      lsSet('study_date',     today);
      lsSet('study_seconds',  '0');
      lsSet('streak_marked',  'false');
      streakMarked = false;
    }
    return today;
  }
  rollDayIfNeeded();

  let lastActivity = Date.now();
  streakMarked = lsGet('streak_marked') === 'true';

  // Listen for any user interaction to track activity
  ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach(ev => {
    document.addEventListener(ev, () => { lastActivity = Date.now(); }, { passive: true });
  });

  // Cross-tab sync: the `storage` event fires in OTHER tabs when one tab
  // writes to localStorage. If another tab marks the streak, stop ticking
  // marking here so we don't double-write to Supabase and inflate the count.
  // (Time keeps being counted so the progress bar reflects the real goal.)
  window.addEventListener('storage', (e) => {
    if (e.key === 'streak_marked') streakMarked = e.newValue === 'true';
  });

  // Tick every 30 seconds — only count if user is active
  setInterval(() => {
    const today = rollDayIfNeeded();

    const idle = Date.now() - lastActivity > IDLE_TIMEOUT_MS;
    if (idle) return;

    const secs = parseInt(lsGet('study_seconds') || '0') + 30;
    lsSet('study_seconds', String(secs));

    // Persist per-day seconds so the dashboard can show hover tooltips
    try {
      const log = JSON.parse(lsGet('study_daily_log') || '{}');
      log[today] = secs;
      lsSet('study_daily_log', JSON.stringify(log));
    } catch (_) {}

    // Update progress indicator if it exists on this page
    updateProgressBar(secs);

    if (!streakMarked && secs >= requiredSeconds()) {
      markStreak(today);
    }
  }, TICK_MS);

  // ── Mark streak in Supabase ───────────────────────────────────────────────
  async function markStreak(today) {
    if (streakMarked) return;
    const yesterday = yesterdayStr();

    // Cross-tab write lock: if another tab started writing within the last 5s,
    // bail out. The server-side last_study_date check is the true dedup, but
    // this avoids two concurrent Supabase writes in the same tick.
    const lockKey = 'streak_writing_at';
    const now = Date.now();
    const lockVal = lsGet(lockKey);
    if (lockVal && (now - parseInt(lockVal, 10)) < 5000) return;
    lsSet(lockKey, String(now));

    streakMarked = true;
    lsSet('streak_marked', 'true');

    // Supabase returns { error } rather than throwing, so every failure path
    // must roll the guard back explicitly or the day's streak is lost.
    const rollback = () => {
      streakMarked = false;
      lsSet('streak_marked', 'false');
    };

    if (typeof supabaseClient === 'undefined') { rollback(); return; }

    try {
      const { data: { user }, error: authErr } = await supabaseClient.auth.getUser();
      if (authErr || !user) { rollback(); return; }

      const { data: profile, error: profileErr } = await supabaseClient
        .from('profiles')
        .select('streak_count, last_study_date')
        .eq('id', user.id)
        .single();
      if (profileErr) { console.error('streak: profile read failed', profileErr); rollback(); return; }

      const last  = profile?.last_study_date;
      const count = profile?.streak_count || 0;

      let newStreak;
      if      (last === today)     newStreak = count;         // already counted
      else if (last === yesterday) newStreak = count + 1;     // continuing
      else                         newStreak = 1;             // reset

      const { error: updateErr } = await supabaseClient.from('profiles').update({
        streak_count:    newStreak,
        last_study_date: today
      }).eq('id', user.id);
      if (updateErr) { console.error('streak: profile update failed', updateErr); rollback(); return; }

      // Award On Fire medal at 7 days
      if (newStreak >= 7) {
        const { error: medalErr } = await supabaseClient.from('user_medals')
          .upsert({ user_id: user.id, medal_id: 'on_fire' }, { onConflict: 'user_id,medal_id' });
        if (medalErr) console.error('streak: medal upsert failed', medalErr);
      }

      // Update dashboard streak display if on that page
      if (typeof renderStreak === 'function') {
        renderStreak(newStreak, today);
      }

      showToast(`🔥 ${formatMins(goalMins())} studied! Streak: ${newStreak} day${newStreak !== 1 ? 's' : ''}`);
    } catch (err) {
      console.error('streak: unexpected error', err);
      // Allow retry on next tick — roll back the guard
      rollback();
    }
  }

  function formatMins(m) {
    if (m >= 60 && m % 60 === 0) return m === 60 ? '1 hour' : `${m / 60} hours`;
    if (m > 60) return `${Math.floor(m / 60)}h ${m % 60}m`;
    return `${m} min`;
  }

  // ── Progress bar (subtle, bottom of screen) ───────────────────────────────
  function updateProgressBar(secs) {
    let bar = document.getElementById('studyProgressBar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'studyProgressBar';
      bar.style.cssText = `
        position: fixed; bottom: 0; left: 0; height: 3px;
        background: linear-gradient(90deg, #2563EB, #1D4ED8);
        z-index: 9999; transition: width 0.5s ease;
        box-shadow: 0 0 6px rgba(37,99,235,0.5);
      `;
      document.body.appendChild(bar);
    }
    const pct = Math.min((secs / requiredSeconds()) * 100, 100);
    bar.style.width = pct + '%';
    if (pct >= 100) bar.style.background = 'linear-gradient(90deg,#16A34A,#15803D)';
  }

  // ── Toast notification ────────────────────────────────────────────────────
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed; bottom: 28px; right: 28px; z-index: 9999;
      background: #16A34A; color: #fff; padding: 13px 20px;
      border-radius: 12px; font-family: 'DM Sans', sans-serif;
      font-size: 14px; font-weight: 600;
      box-shadow: 0 4px 20px rgba(22,163,74,0.35);
      animation: _toastIn 0.3s ease both;
    `;
    toast.textContent = msg;

    const style = document.createElement('style');
    style.textContent = `@keyframes _toastIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5000);
  }

  // Expose seconds for any page that wants to show progress
  window.getStudySeconds = () => parseInt(lsGet('study_seconds') || '0');

  // ── Global error UI ───────────────────────────────────────────────────────
  // Shared red toast for failures — exposed so pages can report errors
  // from Supabase writes, network issues, etc.
  let _errToastActive = false;  // avoid stacking multiple toasts
  function notifyError(msg) {
    if (_errToastActive) return;
    _errToastActive = true;
    const toast = document.createElement('div');
    toast.setAttribute('role', 'alert');
    toast.style.cssText = `
      position: fixed; bottom: 28px; right: 28px; z-index: 10000;
      background: #DC2626; color: #fff; padding: 13px 20px;
      border-radius: 12px; font-family: 'DM Sans', sans-serif;
      font-size: 14px; font-weight: 600; max-width: 360px;
      box-shadow: 0 4px 20px rgba(220,38,38,0.35);
      animation: _toastIn 0.3s ease both;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => { toast.remove(); _errToastActive = false; }, 5000);
  }
  window.notifyError = notifyError;

  // Safety net: surface any unhandled promise rejection as a toast so
  // failed Supabase calls / network errors don't disappear silently.
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection:', event.reason);
    const msg = (event.reason && event.reason.message) || '';
    // Ignore benign auth-session-missing errors on public pages
    if (/auth session missing/i.test(msg)) return;
    notifyError('Something went wrong — please try again.');
  });

  // Tell the user when they go offline so actions don't vanish into the void
  window.addEventListener('offline', () => {
    notifyError("You're offline — changes won't save until you reconnect.");
  });
  window.addEventListener('online', () => {
    // Reuse the green toast for the reconnect message
    showToast('Back online ✓');
  });
})();
