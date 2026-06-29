/* theme.js — runs synchronously in <head> to apply dark/light mode before first paint */
(function () {
  function lsGet(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }

  var stored = lsGet('dark_mode');
  if (stored === 'true')  document.documentElement.setAttribute('data-theme', 'dark');
  else if (stored === 'false') document.documentElement.setAttribute('data-theme', 'light');
  /* null → no attribute, CSS media query handles system preference */

  function isDark() {
    var attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'dark') return true;
    if (attr === 'light') return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function syncUI(dark) {
    document.querySelectorAll('[data-dark-toggle]').forEach(function (btn) {
      btn.textContent = dark ? '☀️' : '🌙';
      btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    });
    var toggle = document.getElementById('toggleDarkMode');
    if (toggle) toggle.classList.toggle('on', dark);
  }

  window.toggleDarkMode = function () {
    var dark = !isDark();
    lsSet('dark_mode', dark ? 'true' : 'false');
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    syncUI(dark);
  };

  window.isDarkMode = isDark;

  document.addEventListener('DOMContentLoaded', function () {
    syncUI(isDark());
  });
})();
