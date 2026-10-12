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
 *
 * Only files git tracks are copied, so local scratch (.pdfwork, tmp/) never
 * ships even when building on this machine.
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'dist');

execSync('node scripts/check-bank.js && node scripts/check-guidance.js', { cwd: ROOT, stdio: 'inherit' });

const PRIVATE = [
  'api', 'functions', 'scripts', 'cron-worker', 'tests', 'db', 'migrations', '.claude',
  'wrangler.toml', 'package.json', 'package-lock.json', '.gitignore',
  'ai-feedback-mockup.html', 'flashcard-demo.html',
];

const isExcluded = (file) => PRIVATE.some(p => file === p || file.startsWith(p + '/'));

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
