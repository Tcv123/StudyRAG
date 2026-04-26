// Targeted PDF generator for the Biology OCR B GCSE (J257 Twenty First Century Science) notes folder only.
// Produces a branded PDF beside each HTML file.

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const FOLDER = 'notes-biology-ocr-b-gcse';
const SUB_LABEL = 'Biology — OCR B (GCSE J257 Twenty First Century)';
const CONCURRENCY = 3;

function escapeHTML(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function headerTemplate(subLabel) {
  return `
    <div style="width:100%; margin:0; padding:0; font-family:Arial,Helvetica,sans-serif; color:#ffffff; -webkit-print-color-adjust:exact; print-color-adjust:exact;">
      <div style="background:#166534; padding:5mm 12mm; display:flex; justify-content:space-between; align-items:center;">
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
          <span style="color:#166534; font-weight:700; font-size:9px;">raglearning.uk</span>
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
    await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 60000 });
    const pdfPath = htmlPath.replace(/\.html$/i, '.pdf');
    await page.pdf({
      path: pdfPath, format: 'A4', printBackground: true,
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
  return file.replace(/\.html$/i, '').replace(/_/g, ' ').trim();
}

(async () => {
  const dir = path.join(ROOT, FOLDER);
  const files = fs.readdirSync(dir).filter(f => /\.html$/i.test(f));
  console.log(`Found ${files.length} HTML files in ${FOLDER}.`);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  const queue = files.map(file => ({
    htmlPath: path.join(dir, file),
    topicLabel: titleFromFilename(file),
    shortName: `${FOLDER}/${file}`,
  }));

  let done = 0, ok = 0, failed = [];
  async function worker() {
    while (queue.length) {
      const job = queue.shift();
      if (!job) break;
      const res = await generateOne(browser, job.htmlPath, SUB_LABEL, job.topicLabel);
      done++;
      if (res.ok) { ok++; console.log(`[${done}/${files.length}] ✓ ${job.shortName}`); }
      else { failed.push({ file: job.shortName, err: res.err }); console.log(`[${done}/${files.length}] ✗ ${job.shortName} - ${res.err}`); }
    }
  }
  const workers = []; for (let i = 0; i < CONCURRENCY; i++) workers.push(worker());
  await Promise.all(workers);
  await browser.close();

  console.log(`\n=== ${ok}/${files.length} PDFs generated. Failed: ${failed.length} ===`);
  if (failed.length) { failed.forEach(f => console.log('  -', f.file, '-', f.err)); process.exit(1); }
})();
