// Generates a PDF for every note HTML file under notes-*/.
// Each PDF is saved next to its source HTML with the same base name.
// Uses Puppeteer (Chrome headless) for accurate, print-quality rendering
// with a branded RAG Learning header bar and footer on every page.

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const CONCURRENCY = 4;

const SUBJECT_MAP = {
  biology: 'Biology',
  chemistry: 'Chemistry',
  cs: 'Computer Science',
  economics: 'Economics',
  english: 'English',
  geography: 'Geography',
  maths: 'Maths',
  physics: 'Physics',
};
const BOARD_MAP  = { aqa: 'AQA', edexcel: 'Edexcel', ocr: 'OCR', eduqas: 'Eduqas' };
const LEVEL_MAP  = { gcse: 'GCSE', alevel: 'A-Level' };

function folderLabel(folderName) {
  const parts = folderName.replace(/^notes-/, '').split('-');
  let subject, board, subBoard = '', level;

  if (parts[0] === 'further' && parts[1] === 'maths') {
    subject = 'Further Maths';
    board = BOARD_MAP[parts[2]] || parts[2].toUpperCase();
    if (parts[3] === 'a' || parts[3] === 'b') {
      subBoard = ' ' + parts[3].toUpperCase();
      level = LEVEL_MAP[parts[4]] || parts[4];
    } else {
      level = LEVEL_MAP[parts[3]] || parts[3];
    }
  } else {
    subject = SUBJECT_MAP[parts[0]] || parts[0];
    board = BOARD_MAP[parts[1]] || parts[1].toUpperCase();
    if (parts[2] === 'a' || parts[2] === 'b') {
      subBoard = ' ' + parts[2].toUpperCase();
      level = LEVEL_MAP[parts[3]] || parts[3];
    } else {
      level = LEVEL_MAP[parts[2]] || parts[2];
    }
  }
  return `${subject} — ${board}${subBoard} (${level})`;
}

function escapeHTML(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function headerTemplate(subLabel) {
  return `
    <div style="width:100%; margin:0; padding:0; font-family:Arial,Helvetica,sans-serif; color:#ffffff; -webkit-print-color-adjust:exact; print-color-adjust:exact;">
      <div style="background:#1e40af; padding:5mm 12mm; display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:700; font-size:11px;">RAG Learning</span>
        <span style="font-size:9px; opacity:0.95;">${escapeHTML(subLabel)}</span>
      </div>
    </div>`;
}

function footerTemplate(topicLabel) {
  const short = topicLabel.length > 80 ? topicLabel.slice(0, 77) + '…' : topicLabel;
  return `
    <div style="width:100%; margin:0; padding:0; font-family:Arial,Helvetica,sans-serif; color:#4b5563; -webkit-print-color-adjust:exact; print-color-adjust:exact;">
      <div style="padding:0 12mm;">
        <div style="border-top:0.5px solid #d1d5db; padding-top:2mm; display:flex; justify-content:space-between; align-items:center; font-size:8px;">
          <span>© RAG Learning · Not for redistribution</span>
          <span style="color:#1e40af; font-weight:700; font-size:9px;">raglearning.uk</span>
          <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
        <div style="font-size:7.5px; color:#6b7280; text-align:center; margin-top:1mm; font-style:italic;">${escapeHTML(short)}</div>
      </div>
    </div>`;
}

async function generateOne(browser, htmlPath, subLabel, topicLabel) {
  const page = await browser.newPage();
  try {
    await page.emulateMediaType('screen');
    await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    const pdfPath = htmlPath.replace(/\.html$/i, '.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerTemplate(subLabel),
      footerTemplate: footerTemplate(topicLabel),
      margin: { top: '22mm', right: '0', bottom: '22mm', left: '0' },
      preferCSSPageSize: false,
    });
    return { ok: true, pdfPath };
  } catch (err) {
    return { ok: false, err: err.message };
  } finally {
    await page.close();
  }
}

function titleFromFilename(file) {
  return file
    .replace(/\.html$/i, '')
    .replace(/_/g, ' ')
    .replace(/^\s*/, '')
    .trim();
}

(async () => {
  const folders = fs.readdirSync(ROOT)
    .filter(f => /^notes-/.test(f))
    .filter(f => fs.statSync(path.join(ROOT, f)).isDirectory());

  const jobs = [];
  for (const folder of folders) {
    const label = folderLabel(folder);
    const dir = path.join(ROOT, folder);
    const files = fs.readdirSync(dir).filter(f => /\.html$/i.test(f));
    for (const file of files) {
      jobs.push({
        htmlPath: path.join(dir, file),
        subLabel: label,
        topicLabel: titleFromFilename(file),
        shortName: folder + '/' + file,
      });
    }
  }

  console.log(`Found ${jobs.length} HTML notes across ${folders.length} folders.`);
  console.log(`Launching Puppeteer (concurrency=${CONCURRENCY})…`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let done = 0, ok = 0, failed = [];
  const queue = jobs.slice();

  async function worker(id) {
    while (queue.length) {
      const job = queue.shift();
      if (!job) break;
      const res = await generateOne(browser, job.htmlPath, job.subLabel, job.topicLabel);
      done++;
      if (res.ok) {
        ok++;
        console.log(`[${done}/${jobs.length}] ✓ ${job.shortName}`);
      } else {
        failed.push({ file: job.shortName, err: res.err });
        console.log(`[${done}/${jobs.length}] ✗ ${job.shortName}  —  ${res.err}`);
      }
    }
  }

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) workers.push(worker(i));
  await Promise.all(workers);

  await browser.close();

  console.log('');
  console.log(`=== Finished: ${ok}/${jobs.length} PDFs generated. Failed: ${failed.length} ===`);
  if (failed.length) {
    console.log('Failed files:');
    failed.forEach(f => console.log('  -', f.file, '—', f.err));
    process.exit(1);
  }
})();
