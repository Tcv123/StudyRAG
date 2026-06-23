/* ==========================================================================
   fit-to-screen.js — make any page fit any screen.

   Some pages are designed for a wide desktop and get cut off on smaller
   laptops (or when the OS display scaling is turned up). This scales the
   whole page down just enough to fit the window width — like the browser's
   own zoom, but automatic. If a page already fits, it does nothing.

   • Larger screens (>= 768px): scale to fit. This is the "laptop cut off" fix.
   • Phones (< 768px): left alone — those layouts reflow via CSS media queries,
     so shrinking them would only make the text tiny.

   Drop <script src="fit-to-screen.js"></script> on any page (use the right
   relative path from subfolders). Safe to load more than once.
   ========================================================================== */
(function () {
  var root = document.documentElement;

  function fit() {
    var view = window.innerWidth;

    // Phones reflow via CSS — don't zoom them.
    if (view < 768) { root.style.zoom = ''; return; }

    // Measure the page's natural width with zoom reset, then scale to fit.
    root.style.zoom = '1';
    var content = root.scrollWidth;

    if (content > view + 1) {
      root.style.zoom = String(view / content);
    } else {
      root.style.zoom = '1';
    }
  }

  // Run as early as the DOM allows, again once everything (fonts/images) loads,
  // and whenever the window is resized. Debounced so resizing stays smooth.
  var t;
  function schedule() { clearTimeout(t); t = setTimeout(fit, 80); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fit);
  } else {
    fit();
  }
  window.addEventListener('load', fit);
  window.addEventListener('resize', schedule);

  // Pages here load data and render more content after load (dashboards, lists).
  // Re-fit when the DOM changes so late content doesn't reintroduce a cutoff.
  if (window.MutationObserver) {
    var mo = new MutationObserver(schedule);
    var start = function () { mo.observe(document.body, { childList: true, subtree: true }); };
    if (document.body) start();
    else document.addEventListener('DOMContentLoaded', start);
  }
})();
