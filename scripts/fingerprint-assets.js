/**
 * Fingerprints the site's own scripts and stylesheets in dist/ so browsers can
 * cache them for good.
 *
 * Every <script src> and <link href> in dist's HTML that points at a local
 * .js/.css file is copied to static/<content hash>/<name> and the tag is
 * rewritten to that copy. _headers marks /static/* as immutable: a changed
 * file gets a new hash and so a new URL, and pages (which are never cached
 * long) always point at the current one. Without this the browser asks the
 * server about every script on every page load.
 *
 * The plain files stay where they are, unchanged, for the code that loads
 * them by name at runtime (mark-schemes.html, the practice bundles).
 *
 * Skipped: files that read document.currentScript (admin-nav.js and
 * classes-nav.js work out the site root from their own URL), and refs with a
 * query string or hash.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const STATIC_DIR = 'static';
const TAG = /(<(?:script|link)\b[^>]*?\b(?:src|href)=")([^"]+\.(?:js|css))(")/g;

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === STATIC_DIR ? [] : htmlFiles(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

function fingerprintAssets(outDir) {
  const copies = new Map(); // source file -> fingerprinted path relative to outDir, or null if skipped
  const fingerprinted = (file) => {
    if (copies.has(file)) return copies.get(file);
    let rel = null;
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file);
      if (!content.includes('currentScript')) {
        const hash = crypto.createHash('sha256').update(content).digest('hex').slice(0, 10);
        rel = `${STATIC_DIR}/${hash}/${path.basename(file)}`;
        fs.mkdirSync(path.join(outDir, path.dirname(rel)), { recursive: true });
        fs.writeFileSync(path.join(outDir, rel), content);
      }
    }
    copies.set(file, rel);
    return rel;
  };

  let pages = 0, refs = 0;
  for (const page of htmlFiles(outDir)) {
    const dir = path.dirname(page);
    const html = fs.readFileSync(page, 'utf8');
    const out = html.replace(TAG, (whole, open, ref, close) => {
      if (/^([a-z]+:|\/\/)/i.test(ref) || /[?#]/.test(ref)) return whole;
      const file = ref.startsWith('/') ? path.join(outDir, ref) : path.join(dir, ref);
      const rel = fingerprinted(file);
      if (!rel) return whole;
      refs++;
      return open + path.relative(dir, path.join(outDir, rel)).split(path.sep).join('/') + close;
    });
    if (out !== html) { fs.writeFileSync(page, out); pages++; }
  }
  const made = [...copies.values()].filter(Boolean).length;
  console.log(`fingerprint-assets: ${made} files fingerprinted, ${refs} refs rewritten across ${pages} pages`);
}

module.exports = { fingerprintAssets };

if (require.main === module) fingerprintAssets(process.argv[2] || path.resolve(__dirname, '..', 'dist'));
