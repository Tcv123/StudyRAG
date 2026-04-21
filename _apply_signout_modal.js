// One-off script: add sign-out confirmation modal to all pages with a logout-btn.
// Run with: node _apply_signout_modal.js
const fs = require('fs');
const path = require('path');

const FILES = [
  'practice.html',
  'subject-notes/geography-eduqas-notes.html',
  'breakdown.html',
  'medals.html',
  'test-history.html',
  'settings.html',
  'notes.html',
  'subject-notes/chemistry-ocr-a-notes.html',
  'subject-notes/chemistry-edexcel-notes.html',
  'subject-notes/chemistry-aqa-notes.html',
  'subject-notes/chemistry-ocr-b-notes.html',
  'subject-notes/biology-ocr-b-notes.html',
  'subject-notes/biology-ocr-a-notes.html',
  'subject-notes/biology-edexcel-a-notes.html',
  'subject-notes/biology-edexcel-b-notes.html',
  'subject-notes/biology-aqa-notes.html',
  'subject-notes/physics-ocr-b-notes.html',
  'subject-notes/physics-ocr-a-notes.html',
  'subject-notes/physics-edexcel-notes.html',
  'subject-notes/physics-aqa-notes.html',
  'subject-notes/further-maths-edexcel-notes.html',
  'subject-notes/further-maths-aqa-notes.html',
  'subject-notes/further-maths-ocr-notes.html',
  'subject-notes/further-maths-ocr-b-notes.html',
  'subject-notes/cs-ocr-gcse-notes.html',
  'subject-notes/cs-ocr-alevel-notes.html',
  'subject-notes/cs-aqa-notes.html',
  'subject-notes/english-edexcel-notes.html',
  'subject-notes/english-aqa-notes.html',
  'subject-notes/economics-aqa-notes.html',
  'subject-notes/economics-edexcel-a-notes.html',
  'subject-notes/economics-edexcel-b-notes.html',
  'subject-notes/economics-ocr-notes.html',
  'subject-notes/geography-eduqas-notes.html',
  'subject-notes/geography-edexcel-notes.html',
  'subject-notes/geography-aqa-notes.html',
  'subject-notes/geography-ocr-notes.html',
  'subject-notes/maths-ocr-notes.html',
  'subject-notes/maths-edexcel-notes.html',
  'subject-notes/maths-aqa-notes.html',
];

const MODAL_CSS = `
    /* ── SIGN-OUT CONFIRM MODAL ── */
    .signout-overlay { position: fixed; inset: 0; background: rgba(27,45,79,0.45); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); display: none; align-items: center; justify-content: center; z-index: 1000; }
    .signout-overlay.active { display: flex; }
    .signout-modal { background: var(--surface, #fff); border: 1px solid var(--border, #D2E5F3); border-radius: 16px; padding: 28px; width: 90%; max-width: 400px; box-shadow: 0 20px 60px rgba(27,45,79,0.25); text-align: center; animation: signoutPop 0.22s cubic-bezier(0.16,1,0.3,1) both; }
    @keyframes signoutPop { from { opacity: 0; transform: scale(0.94) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    .signout-icon { width: 52px; height: 52px; border-radius: 50%; background: var(--red-bg, rgba(220,38,38,0.07)); border: 1px solid var(--red-border, rgba(220,38,38,0.18)); display: flex; align-items: center; justify-content: center; font-size: 24px; color: var(--red-text, #B91C1C); margin: 0 auto 14px; }
    .signout-title { font-family: var(--font-display, 'DM Serif Display', serif); font-size: 22px; color: var(--text, #1B2D4F); margin-bottom: 6px; }
    .signout-msg { font-size: 14px; color: var(--muted, #6B87A8); margin-bottom: 22px; line-height: 1.5; }
    .signout-actions { display: flex; gap: 10px; }
    .signout-btn { flex: 1; padding: 11px 16px; border-radius: 10px; font-size: 14px; font-weight: 500; font-family: var(--font-body, 'DM Sans', sans-serif); cursor: pointer; transition: all 0.15s; border: 1px solid transparent; }
    .signout-btn.cancel { background: var(--surface2, #F4F9FE); color: var(--text, #1B2D4F); border-color: var(--border, #D2E5F3); }
    .signout-btn.cancel:hover { background: var(--surface3, #E6F1FA); border-color: var(--border-hover, #93C4E2); }
    .signout-btn.confirm { background: var(--red, #DC2626); color: #fff; }
    .signout-btn.confirm:hover { background: var(--red-text, #B91C1C); }
`;

const MODAL_HTML = `
<!-- ── SIGN-OUT CONFIRM MODAL ── -->
<div class="signout-overlay" id="signoutOverlay" onclick="if(event.target===this)cancelSignOut()">
  <div class="signout-modal" role="dialog" aria-modal="true" aria-labelledby="signoutTitle">
    <div class="signout-icon">&#x23FB;</div>
    <div class="signout-title" id="signoutTitle">Sign out?</div>
    <div class="signout-msg">Are you sure you want to sign out? You'll need to log back in to access your notes, diagnostics and practice.</div>
    <div class="signout-actions">
      <button class="signout-btn cancel" onclick="cancelSignOut()">Cancel</button>
      <button class="signout-btn confirm" onclick="logout()">Sign out</button>
    </div>
  </div>
</div>
`;

const HELPER_FNS = `function confirmSignOut(){document.getElementById('signoutOverlay').classList.add('active');}
function cancelSignOut(){document.getElementById('signoutOverlay').classList.remove('active');}
`;

let touched = 0, skipped = 0;
for (const rel of FILES) {
  const full = path.join(__dirname, rel);
  if (!fs.existsSync(full)) { console.warn('MISSING:', rel); skipped++; continue; }
  let src = fs.readFileSync(full, 'utf8');
  if (src.includes('signout-overlay')) { console.log('ALREADY DONE:', rel); skipped++; continue; }

  // 1. Inject modal CSS right after the .logout-btn:hover rule.
  const cssRe = /(\.logout-btn:hover\s*\{[^}]*\})/;
  if (!cssRe.test(src)) { console.warn('NO logout-btn:hover rule:', rel); skipped++; continue; }
  src = src.replace(cssRe, `$1\n${MODAL_CSS}`);

  // 2. Swap the onclick on the sidebar logout button.
  src = src.replace(/class="logout-btn"\s+onclick="logout\(\)"/g,
                    'class="logout-btn" onclick="confirmSignOut()"');

  // Also swap the big "Sign out" button inside settings.html
  src = src.replace(/class="btn btn-outline"\s+onclick="logout\(\)">Sign out<\/button>/g,
                    'class="btn btn-outline" onclick="confirmSignOut()">Sign out</button>');

  // 3. Inject helper functions just before `async function logout`.
  const fnRe = /((?:async\s+)?function\s+logout\s*\()/;
  if (!fnRe.test(src)) { console.warn('NO logout() fn:', rel); skipped++; continue; }
  src = src.replace(fnRe, `${HELPER_FNS}$1`);

  // 4. Inject modal HTML just before </body>.
  if (!/<\/body>/i.test(src)) { console.warn('NO </body>:', rel); skipped++; continue; }
  src = src.replace(/<\/body>/i, `${MODAL_HTML}\n</body>`);

  fs.writeFileSync(full, src);
  touched++;
  console.log('OK:', rel);
}
console.log(`\nDone. touched=${touched} skipped=${skipped}`);
