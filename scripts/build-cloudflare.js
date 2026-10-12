/**
 * Cloudflare Pages build: runs the same checks as the Vercel build, then
 * copies the site into dist/, which is what Pages serves.
 *
 * Vercel serves the repo root ("outputDirectory": "."). Pages cannot do that
 * safely, because the build installs node_modules into the root and Pages
 * would publish all of it. So the site is copied out instead, keeping the
 * same rules for what stays private:
 *
 *   - everything .vercelignore lists, read from that file so the two hosts
 *     cannot drift apart
 *   - the paths vercel.json redirects to /404 (config, scripts, package files)
 *   - server code: api/ and functions/ run as code, they are not files to serve
 *   - the Cloudflare config itself
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

const ALWAYS_PRIVATE = [
  '/api', '/functions', '/scripts', '/cron-worker', '/tests',
  '/vercel.json', '/wrangler.toml', '/package.json', '/package-lock.json',
];

const vercelIgnore = fs.readFileSync(path.join(ROOT, '.vercelignore'), 'utf8')
  .split('\n')
  .map(l => l.trim())
  .filter(l => l && !l.startsWith('#'));

const excluded = [...ALWAYS_PRIVATE, ...vercelIgnore].map(p => p.replace(/^\//, '').replace(/\/$/, ''));
const isExcluded = (file) => excluded.some(p => file === p || file.startsWith(p + '/'));

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
