(function () {
  'use strict';

  // ── Toast notifications ────────────────────────────────────────
  var ICONS  = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };
  var COLORS = {
    success: { border: 'var(--green-border,rgba(22,163,74,.25))',  text: 'var(--green-text,#15803D)' },
    error:   { border: 'var(--red-border,rgba(220,38,38,.25))',    text: 'var(--red-text,#B91C1C)' },
    info:    { border: 'rgba(37,99,235,.25)',                       text: 'var(--accent-dark,#1D4ED8)' },
    warning: { border: 'var(--amber-border,rgba(217,119,6,.25))',  text: 'var(--amber-text,#B45309)' },
  };

  function ensureContainer() {
    var c = document.getElementById('rag-toast-container');
    if (!c) {
      c = document.createElement('div');
      c.id = 'rag-toast-container';
      c.style.cssText = [
        'position:fixed;bottom:24px;right:24px;z-index:9999;',
        'display:flex;flex-direction:column;gap:10px;',
        'pointer-events:none;max-width:320px;',
      ].join('');
      document.body.appendChild(c);
    }
    return c;
  }

  window.showToast = function (msg, type, duration) {
    type     = type     != null ? type     : 'success';
    duration = duration != null ? duration : 3000;

    var c   = ensureContainer();
    var col = COLORS[type] || COLORS.info;

    var toast = document.createElement('div');
    toast.style.cssText = [
      'display:flex;align-items:center;gap:10px;',
      'padding:12px 16px;border-radius:12px;',
      'background:var(--surface,#fff);',
      'border:1px solid ' + col.border + ';',
      'box-shadow:0 4px 20px rgba(11,30,63,.12);',
      'font-family:var(--font-body,"DM Sans",sans-serif);',
      'font-size:14px;color:var(--text,#0B1E3F);',
      'pointer-events:auto;cursor:pointer;',
      'opacity:0;transform:translateY(12px);',
      'transition:opacity .25s ease,transform .25s ease;',
    ].join('');
    toast.innerHTML =
      '<span style="font-size:15px;color:' + col.text + ';flex-shrink:0;">' + (ICONS[type] || '●') + '</span>' +
      '<span style="flex:1;line-height:1.4;">' + msg + '</span>' +
      '<span style="font-size:20px;color:var(--muted2,#7891B0);line-height:1;margin-left:4px;opacity:.7;">×</span>';

    function dismiss(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 280);
    }

    toast.addEventListener('click', function () { dismiss(toast); });
    c.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    });

    if (duration > 0) setTimeout(function () { dismiss(toast); }, duration);
  };

  // ── Mobile sidebar: auto-close when a nav link is clicked ──────
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-item').forEach(function (item) {
      item.addEventListener('click', function () {
        if (window.innerWidth > 768) return;
        var sidebar = document.querySelector('.sidebar');
        var overlay = document.querySelector('.mobile-overlay');
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
      });
    });
  });
})();
