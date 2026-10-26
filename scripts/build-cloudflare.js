/**
 * Cloudflare Pages build: runs the content checks, then copies the site into
 * dist/, which is what Pages serves.
 *
 * The site lives at the repo root, but the build installs node_modules there
 * too, so serving the root would publish all of it. The site is copied out
 * instead, leaving behind everything that must stay private:
 *
 *   - server code: api/ and functions/ run as code, they are not files to serve
 *   - build scripts, tests, config and package files
 *   - SQL run by hand in the Supabase editor (db/, migrations/)
 *   - Claude Code settings, and dev mockups nothing links to
 *   - working files by type wherever they sit: Word docs, SQL seeds, Python,
 *     Markdown notes, text dumps (robots.txt aside), and anything under a
 *     dot-folder or dot-named (.idea/, .githooks/, .nojekyll — a leftover
 *     from GitHub Pages that Cloudflare doesn't need)
 *
 * Only files git tracks are copied, so local scratch (.pdfwork, tmp/) never
 * ships even when building on this machine.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { splitPapersConfig } = require('./split-papers-config');
const { fingerprintAssets } = require('./fingerprint-assets');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'dist');

execSync('node scripts/check-bank.js && node scripts/check-guidance.js', { cwd: ROOT, stdio: 'inherit' });

const PRIVATE = [
  'api', 'functions', 'scripts', 'cron-worker', 'tests', 'db', 'migrations', '.claude',
  'wrangler.toml', 'package.json', 'package-lock.json', '.gitignore',
  'ai-feedback-mockup.html', 'flashcard-demo.html',
];

// Nothing a page fetches at runtime has these extensions — the only .json
// served (papers-data/) is written by splitPapersConfig after this copy.
const PRIVATE_EXT = ['.docx', '.sql', '.py', '.md', '.txt', '.iml'];
const PUBLIC_EXCEPTIONS = ['robots.txt'];

const isExcluded = (file) => {
  if (PUBLIC_EXCEPTIONS.includes(file)) return false;
  if (PRIVATE.some(p => file === p || file.startsWith(p + '/'))) return true;
  if (file.split('/').some(part => part.startsWith('.'))) return true;
  return PRIVATE_EXT.includes(path.extname(file).toLowerCase());
};

const files = execSync('git ls-files -z', { cwd: ROOT }).toString().split('\0').filter(Boolean);

fs.rmSync(OUT, { recursive: true, force: true });
let copied = 0;
for (const file of files) {
  if (isExcluded(file)) continue;
  const src = path.join(ROOT, file);
  if (!fs.existsSync(src)) continue; // deleted in the working tree, not yet committed
  const dest = path.join(OUT, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  copied++;
}

console.log(`build-cloudflare: copied ${copied} files to dist/`);

splitPapersConfig(OUT);
// Last: it hashes files as they will ship, including the split papers-config.js.
fingerprintAssets(OUT);
