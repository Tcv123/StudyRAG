// Shared PDF download handler for subject-notes pages.
// Converts the currently loaded note (inside the #pdfFrame iframe) to a PDF
// using html2pdf.js, which must be loaded on the page before this script.

async function downloadCurrentAsPDF(evt) {
  if (evt && evt.preventDefault) evt.preventDefault();

  const iframe  = document.getElementById('pdfFrame');
  const titleEl = document.getElementById('viewerTitle');
  const btn     = document.getElementById('downloadBtn');

  if (!iframe || !iframe.getAttribute('src')) {
    alert('Please select a topic first.');
    return;
  }

  if (typeof html2pdf === 'undefined') {
    alert('PDF library failed to load. Please refresh the page and try again.');
    return;
  }

  let doc;
  try {
    doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
  } catch (err) {
    alert('Could not read the note. Please try again.');
    return;
  }

  if (!doc || !doc.body || doc.readyState !== 'complete') {
    alert('The note is still loading — please wait a moment and try again.');
    return;
  }

  const rawTitle = (titleEl ? titleEl.textContent : 'note').trim();
  const safeName = rawTitle.replace(/[\\/:*?"<>|]+/g, '-').replace(/\s+/g, ' ');
  const filename = (safeName || 'note') + '.pdf';

  const originalHTML = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = '⏳ Generating PDF…';
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.7';
  }

  try {
    await html2pdf()
      .set({
        margin:      [10, 10, 10, 10],
        filename:    filename,
        image:       { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false },
        jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:   { mode: ['avoid-all', 'css', 'legacy'] }
      })
      .from(doc.body)
      .save();
  } catch (err) {
    console.error('PDF generation failed:', err);
    alert('Could not generate PDF: ' + (err && err.message ? err.message : 'unknown error'));
  } finally {
    if (btn) {
      btn.innerHTML = originalHTML;
      btn.style.pointerEvents = '';
      btn.style.opacity = '';
    }
  }
}
