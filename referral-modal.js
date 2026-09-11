/* ═══════════════════════════════════════════════════════════════════
   REFERRAL MODAL — "How did you hear about us?"

   Drop <script src="referral-modal.js"></script> AFTER supabase-config.js
   on any page a logged-in user lands on. Currently Dashboard.html and
   teacher.html, which are the two destinations in auth/post-auth.js.

   Forced and unskippable: no close button, no backdrop click, no Esc.
   It reappears on every login until the answer is stored, which means
   existing users get caught on their next visit with no backfill needed —
   their user_attribution row simply does not exist yet.

   New students are routed to auth/setup.html first, so they see this on
   their first Dashboard load, i.e. after setup rather than on top of it.

   THE LOCALSTORAGE FLAG IS A CACHE, NOT THE ANSWER. It only ever skips a
   read that would have returned a row. Clearing it costs one extra query,
   never a duplicate prompt, because the database is what decides. Setting
   it by hand cannot dodge the modal for long either — a different browser
   has no flag and asks again.

   Two questions: the source (required, one tap) and free-text feedback
   (optional, revealed only once a source is picked so the first decision
   stays a single tap). Both land in one write-once row, so feedback is
   captured at first sign-in only — a recurring prompt would need its own
   append-only table.

   Schema: db/migrations/2026-09-11-referral-attribution.sql
═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var CACHE_KEY = 'rag_referral_done';

  /* Stable slugs, never the labels — renaming "X (Twitter)" later must not
   * split one channel into two slices of the pie. */
  var SOURCES = [
    { slug: 'tiktok',        emoji: '🎵', label: 'TikTok'             },
    { slug: 'instagram',     emoji: '📸', label: 'Instagram'          },
    { slug: 'youtube',       emoji: '▶️', label: 'YouTube'            },
    { slug: 'friend',        emoji: '👋', label: 'Friend or classmate'},
    { slug: 'teacher_school',emoji: '🏫', label: 'Teacher or school'  },
    { slug: 'google',        emoji: '🔍', label: 'Google search'      },
    { slug: 'reddit',        emoji: '💬', label: 'Reddit'             },
    { slug: 'x_twitter',     emoji: '𝕏',  label: 'X (Twitter)'        },
    { slug: 'other',         emoji: '✏️', label: 'Somewhere else'     }
  ];

  function lsGet(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }

  // ── STYLES ────────────────────────────────────────────────────────
  // Tokens only (--surface, --text, --accent …) so dark mode comes free
  // from responsive.css without a second palette to maintain here.
  function injectStyles() {
    if (document.getElementById('referral-modal-styles')) return;
    var style = document.createElement('style');
    style.id = 'referral-modal-styles';
    style.textContent = [
      '.rfm-backdrop{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;',
      'justify-content:center;padding:20px;background:rgba(11,30,63,0.55);',
      'backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);',
      'opacity:0;transition:opacity .28s ease;}',
      '.rfm-backdrop.rfm-in{opacity:1;}',

      '.rfm-card{width:100%;max-width:520px;max-height:calc(100vh - 40px);overflow-y:auto;',
      'background:var(--surface);color:var(--text);border:1px solid var(--border);',
      'border-radius:18px;padding:30px 30px 26px;font-family:var(--font-body,sans-serif);',
      'box-shadow:0 24px 64px rgba(11,30,63,0.28);',
      'transform:translateY(14px) scale(.98);transition:transform .28s ease;}',
      '.rfm-backdrop.rfm-in .rfm-card{transform:none;}',

      '.rfm-title{font-family:var(--font-display,serif);font-size:26px;line-height:1.2;margin-bottom:8px;}',
      '.rfm-sub{color:var(--muted);font-size:14px;line-height:1.5;margin-bottom:22px;}',

      '.rfm-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;}',
      '@media (max-width:460px){.rfm-grid{grid-template-columns:1fr;}}',

      '.rfm-opt{display:flex;align-items:center;gap:10px;width:100%;text-align:left;',
      'padding:13px 14px;border-radius:11px;cursor:pointer;font:inherit;font-size:14px;',
      'color:var(--text);background:var(--surface2,transparent);',
      'border:1.5px solid var(--border);transition:border-color .15s,background .15s,transform .12s;}',
      '.rfm-opt:hover{border-color:var(--accent);transform:translateY(-1px);}',
      '.rfm-opt:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}',
      '.rfm-opt[aria-pressed="true"]{border-color:var(--accent);background:var(--accent-dim);',
      'font-weight:500;}',
      '.rfm-emoji{font-size:17px;line-height:1;flex:none;}',

      '.rfm-detail{width:100%;margin-top:12px;padding:12px 14px;border-radius:11px;',
      'border:1.5px solid var(--border);background:var(--surface);color:var(--text);',
      'font:inherit;font-size:14px;}',
      '.rfm-detail:focus{outline:none;border-color:var(--accent);}',

      '.rfm-fb{margin-top:18px;}',
      '.rfm-fb[hidden]{display:none;}',
      '.rfm-fb-label{display:block;font-size:13px;font-weight:500;margin-bottom:7px;}',
      '.rfm-fb-hint{color:var(--muted);font-weight:400;}',
      '.rfm-fb textarea{width:100%;min-height:74px;resize:vertical;padding:12px 14px;',
      'border-radius:11px;border:1.5px solid var(--border);background:var(--surface);',
      'color:var(--text);font:inherit;font-size:14px;line-height:1.5;}',
      '.rfm-fb textarea:focus{outline:none;border-color:var(--accent);}',

      '.rfm-submit{width:100%;margin-top:20px;padding:14px;border:none;border-radius:11px;',
      'background:var(--accent);color:#fff;font:inherit;font-size:15px;font-weight:600;',
      'cursor:pointer;transition:background .15s,opacity .15s;}',
      '.rfm-submit:hover:not(:disabled){background:var(--accent-dark);}',
      '.rfm-submit:disabled{opacity:.45;cursor:not-allowed;}',

      '.rfm-error{margin-top:12px;font-size:13px;line-height:1.45;color:var(--red-text,#B91C1C);}',
      '.rfm-error[hidden]{display:none;}'
    ].join('');
    document.head.appendChild(style);
  }

  // ── THE MODAL ─────────────────────────────────────────────────────
  function show(user) {
    injectStyles();

    var selected = null;

    var backdrop = document.createElement('div');
    backdrop.className = 'rfm-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-labelledby', 'rfm-title');

    var card = document.createElement('div');
    card.className = 'rfm-card';

    var h = document.createElement('h2');
    h.className = 'rfm-title';
    h.id = 'rfm-title';
    h.textContent = 'How did you hear about us?';

    var sub = document.createElement('p');
    sub.className = 'rfm-sub';
    sub.textContent = 'One quick question and you will not be asked again. It genuinely helps us work out where to put our effort.';

    var grid = document.createElement('div');
    grid.className = 'rfm-grid';

    var detail = document.createElement('input');
    detail.className = 'rfm-detail';
    detail.type = 'text';
    detail.maxLength = 120;
    detail.placeholder = 'Where did you find us?';
    detail.hidden = true;

    /* Revealed with the rest of step two, once a source is chosen. Optional
     * on purpose — the modal is forced, and forcing prose out of someone who
     * has nothing to say only buys you junk rows. */
    var fbWrap = document.createElement('div');
    fbWrap.className = 'rfm-fb';
    fbWrap.hidden = true;

    var fbLabel = document.createElement('label');
    fbLabel.className = 'rfm-fb-label';
    fbLabel.setAttribute('for', 'rfm-feedback');
    fbLabel.textContent = 'Any feedback for us? ';

    var fbHint = document.createElement('span');
    fbHint.className = 'rfm-fb-hint';
    fbHint.textContent = '(optional)';
    fbLabel.appendChild(fbHint);

    var feedback = document.createElement('textarea');
    feedback.id = 'rfm-feedback';
    feedback.maxLength = 1000;
    feedback.placeholder = 'Anything at all — what you are hoping for, what is missing, what is broken.';

    fbWrap.appendChild(fbLabel);
    fbWrap.appendChild(feedback);

    var submit = document.createElement('button');
    submit.className = 'rfm-submit';
    submit.type = 'button';
    submit.textContent = 'Continue';
    submit.disabled = true;

    var error = document.createElement('p');
    error.className = 'rfm-error';
    error.hidden = true;

    SOURCES.forEach(function (src) {
      var btn = document.createElement('button');
      btn.className = 'rfm-opt';
      btn.type = 'button';
      btn.setAttribute('aria-pressed', 'false');

      var em = document.createElement('span');
      em.className = 'rfm-emoji';
      em.textContent = src.emoji;
      em.setAttribute('aria-hidden', 'true');

      var lbl = document.createElement('span');
      lbl.textContent = src.label;

      btn.appendChild(em);
      btn.appendChild(lbl);

      btn.addEventListener('click', function () {
        selected = src.slug;
        grid.querySelectorAll('.rfm-opt').forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        detail.hidden = src.slug !== 'other';
        fbWrap.hidden = false;
        if (src.slug === 'other') detail.focus();
        submit.disabled = false;
        error.hidden = true;
      });

      grid.appendChild(btn);
    });

    submit.addEventListener('click', function () {
      if (!selected) return;
      submit.disabled = true;
      submit.textContent = 'Saving…';
      error.hidden = true;

      var text = detail.value.trim();
      var note = feedback.value.trim();
      supabaseClient.from('user_attribution').insert({
        user_id:       user.id,
        source:        selected,
        source_detail: (selected === 'other' && text) ? text.slice(0, 120) : null,
        feedback:      note ? note.slice(0, 1000) : null
      }).then(function (res) {
        /* 23505 is a unique violation — another tab already answered. That is
         * the desired end state, so treat it exactly like a success. */
        if (res.error && res.error.code !== '23505') throw res.error;
        lsSet(CACHE_KEY, 'true');
        close();
      }).catch(function (err) {
        console.error('[referral-modal] save failed', err);
        submit.disabled = false;
        submit.textContent = 'Continue';
        error.textContent = 'Could not save that — check your connection and try again.';
        error.hidden = false;
      });
    });

    function close() {
      backdrop.classList.remove('rfm-in');
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', trap, true);
      setTimeout(function () { backdrop.remove(); }, 300);
    }

    /* Tab must not escape into the page behind. Esc is swallowed outright —
     * this dialog has no dismiss path by design. */
    function trap(e) {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); return; }
      if (e.key !== 'Tab') return;
      var focusable = card.querySelectorAll(
        'button:not(:disabled), input:not([hidden]), .rfm-fb:not([hidden]) textarea'
      );
      if (!focusable.length) return;
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }

    card.appendChild(h);
    card.appendChild(sub);
    card.appendChild(grid);
    card.appendChild(detail);
    card.appendChild(fbWrap);
    card.appendChild(error);
    card.appendChild(submit);
    backdrop.appendChild(card);
    document.body.appendChild(backdrop);

    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', trap, true);

    requestAnimationFrame(function () {
      backdrop.classList.add('rfm-in');
      var firstOpt = grid.querySelector('.rfm-opt');
      if (firstOpt) firstOpt.focus();
    });
  }

  // ── ENTRY ─────────────────────────────────────────────────────────
  async function maybeAsk() {
    if (typeof supabaseClient === 'undefined') return;
    if (lsGet(CACHE_KEY) === 'true') return;

    var session = await supabaseClient.auth.getSession();
    var user = session?.data?.session?.user;
    if (!user) return;

    var res = await supabaseClient
      .from('user_attribution')
      .select('user_id')
      .eq('user_id', user.id)
      .maybeSingle();

    /* A failed read must not prompt someone who already answered, so any
     * error means stay quiet and try again on the next page load. */
    if (res.error) { console.warn('[referral-modal] lookup failed', res.error); return; }
    if (res.data)  { lsSet(CACHE_KEY, 'true'); return; }

    show(user);
  }

  /* Exposed so admin-attribution.html can label the bars from the same list
   * the modal offers — one source of truth, so a renamed option can never
   * show up as a raw slug on the chart. */
  window.REFERRAL_SOURCES = SOURCES;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', maybeAsk);
  } else {
    maybeAsk();
  }
})();
