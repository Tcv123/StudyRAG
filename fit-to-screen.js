/* ==========================================================================
   fit-to-screen.js — make any page fit any screen, at any width.

   Some pages are designed wider than a small laptop or phone and get cut off
   (content runs off the side). This scales the whole page down just enough to
   fit the window — like the browser's own zoom, but automatic. If a page
   already fits, it does nothing.

   Applies at ALL widths (phones included): if a page overflows, it shrinks to
   fit rather than leaving content cut off. Pages that reflow correctly on a
   phone already fit, so they're left untouched.

   Drop <script src="fit-to-screen.js"></script> on any page (use the right
   relative path from subfolders). Safe to load more than once.
   ========================================================================== */
(function () {
  var root = document.documentElement;
  var MIN_ZOOM = 0.25; // never shrink into oblivion

  // Widest the real content actually is. Many pages set `overflow-x: hidden`
  // on html/body (to hide the off-canvas sidebar), which also CLIPS genuine
  // content overflow and hides it from scrollWidth. So we briefly force
  // overflow visible while measuring, then restore it. The off-canvas sidebar
  // is position:fixed, so it never counts toward scrollWidth either way.
  function naturalWidth() {
    var body = document.body;
    var hPrev = root.style.overflowX;
    var bPrev = body ? body.style.overflowX : '';
    root.style.overflowX = 'visible';
    if (body) body.style.overflowX = 'visible';

    var w = Math.max(
      root.scrollWidth,
      body ? body.scrollWidth : 0,
      body ? body.offsetWidth : 0
    );

    root.style.overflowX = hPrev;       // restore the page's own clipping
    if (body) body.style.overflowX = bPrev;
    return w;
  }

  function fit() {
    root.style.zoom = '1';              // reset before measuring
    var view = window.innerWidth || root.clientWidth;
    var content = naturalWidth();

    var z = 1;
    if (content > view + 1) {
      z = view / content;
      if (z < MIN_ZOOM) z = MIN_ZOOM;
    }
    // setting '1' then z happens in one synchronous pass — no visible flash
    root.style.zoom = z === 1 ? '' : String(z);
  }

  // Debounced so resizing / streams of DOM updates stay smooth.
  var t;
  function schedule() { clearTimeout(t); t = setTimeout(fit, 60); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fit);
  } else {
    fit();
  }
  window.addEventListener('load', fit);
  window.addEventListener('resize', schedule);
  window.addEventListener('orientationchange', schedule);

  // These pages load data and render more content after load (dashboards,
  // lists). Re-fit when the DOM changes so late content can't reintroduce a
  // cutoff. We only watch body children, not the <html> zoom we set, so this
  // can't loop on itself.
  if (window.MutationObserver) {
    var mo = new MutationObserver(schedule);
    var start = function () {
      mo.observe(document.body, { childList: true, subtree: true });
    };
    if (document.body) start();
    else document.addEventListener('DOMContentLoaded', start);
  }
})();
