/*
 * study-tracker.js
 * Automatically tracks active study time across all pages.
 * After 30 minutes of real activity in a day, marks the streak in Supabase.
 * Include this script (after supabase-config.js) on any page that counts as studying.
 */

(function () {
  const REQUIRED_SECONDS  = 30 * 60;  // 30 minutes
  const TICK_MS           = 30000;    // tick every 30 seconds
  const IDLE_TIMEOUT_MS   = 60000;    // inactive after 60s of no interaction

  const today     = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // Reset counters if it's a new day
  if (localStorage.getItem('study_date') !== today) {
    localStorage.setItem('study_date',     today);
    localStorage.setItem('study_seconds',  '0');
    localStorage.setItem('streak_marked',  'false');
  }

  let lastActivity = Date.now();
  let streakMarked = localStorage.getItem('streak_marked') === 'true';

  // Listen for any user interaction to track activity
  ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach(ev => {
    document.addEventListener(ev, () => { lastActivity = Date.now(); }, { passive: true });
  });

  // Tick every 30 seconds — only count if user is active
  const ticker = setInterval(() => {
    if (streakMarked) { clearInterval(ticker); return; }

    const idle = Date.now() - lastActivity > IDLE_TIMEOUT_MS;
    if (idle) return;

    const secs = parseInt(localStorage.getItem('study_seconds') || '0') + 30;
    localStorage.setItem('study_seconds', String(secs));

    // Update progress indicator if it exists on this page
    updateProgressBar(secs);

    if (secs >= REQUIRED_SECONDS) {
      clearInterval(ticker);
      markStreak();
    }
  }, TICK_MS);

  // ── Mark streak in Supabase ───────────────────────────────────────────────
  async function markStreak() {
    if (streakMarked) return;
    streakMarked = true;
    localStorage.setItem('streak_marked', 'true');

    if (typeof supabaseClient === 'undefined') return;

    try {
      const { data: { user }, error: authErr } = await supabaseClient.auth.getUser();
      if (authErr || !user) return;

      const { data: profile, error: profileErr } = await supabaseClient
        .from('profiles')
        .select('streak_count, last_study_date')
        .eq('id', user.id)
        .single();
      if (profileErr) { console.error('streak: profile read failed', profileErr); return; }

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
      if (updateErr) { console.error('streak: profile update failed', updateErr); return; }

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

      showToast(`🔥 30 min studied! Streak: ${newStreak} day${newStreak !== 1 ? 's' : ''}`);
    } catch (err) {
      console.error('streak: unexpected error', err);
      // Allow retry on next tick — roll back the guard
      streakMarked = false;
      localStorage.setItem('streak_marked', 'false');
    }
  }

  // ── Progress bar (subtle, bottom of screen) ───────────────────────────────
  function updateProgressBar(secs) {
    let bar = document.getElementById('studyProgressBar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'studyProgressBar';
      bar.style.cssText = `
        position: fixed; bottom: 0; left: 0; height: 3px;
        background: linear-gradient(90deg, #5BADCF, #3D95BC);
        z-index: 9999; transition: width 0.5s ease;
        box-shadow: 0 0 6px rgba(91,173,207,0.5);
      `;
      document.body.appendChild(bar);
    }
    const pct = Math.min((secs / REQUIRED_SECONDS) * 100, 100);
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
  window.getStudySeconds = () => parseInt(localStorage.getItem('study_seconds') || '0');
})();
