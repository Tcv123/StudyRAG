// Shared PDF download handler for subject-notes pages.
// Renders the currently loaded note (inside #pdfFrame) into a branded PDF with:
//   - a blue "RAG Learning" header bar on every page
//   - a two-line footer: topic title above the divider, and
//     "© RAG Learning · Not for redistribution" | "raglearning.uk" | "Page X of Y" below
// Requires html2pdf.js to be loaded on the page before this script.

async function downloadCurrentAsPDF(evt) {
  if (evt && evt.preventDefault) evt.preventDefault();

  const iframe  = document.getElementById('pdfFrame');
  const titleEl = document.getElementById('viewerTitle');
  const subEl   = document.getElementById('viewerSub');
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
  const subTitle = (subEl   ? subEl.textContent   : '').trim();
  const safeName = rawTitle.replace(/[\\/:*?"<>|]+/g, '-').replace(/\s+/g, ' ').trim();
  const filename = (safeName || 'note') + '.pdf';

  const originalHTML = btn ? btn.innerHTML : '';
  const resetButton = () => {
    if (btn) {
      btn.innerHTML = originalHTML;
      btn.style.pointerEvents = '';
      btn.style.opacity = '';
    }
  };
  if (btn) {
    btn.innerHTML = '⏳ Generating PDF…';
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.7';
  }

  // Inject print-friendly styles into the iframe's <head> so the note lays out
  // cleanly at A4 width. We remove this style element when we're done.
  let injected = null;
  try {
    injected = doc.getElementById('rag-pdf-print-style');
    if (!injected) {
      injected = doc.createElement('style');
      injected.id = 'rag-pdf-print-style';
      injected.textContent =
        'html, body { background:#ffffff !important; color:#111 !important; margin:0 !important; }' +
        'body { padding: 20px 28px !important; line-height: 1.55 !important; font-size: 14px !important; font-family: system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif !important; }' +
        'body * { max-width: 100% !important; box-sizing: border-box !important; }' +
        'img, svg, canvas, video { max-width:100% !important; height:auto !important; }' +
        'img, svg, table, pre, blockquote, figure, .avoid-break { page-break-inside: avoid; break-inside: avoid; }' +
        'h1, h2, h3, h4 { page-break-after: avoid; break-after: avoid; }' +
        'table { border-collapse: collapse; width:100%; }' +
        'th, td { border:1px solid #ccc; padding:6px 8px; text-align:left; vertical-align:top; }' +
        'pre, code { white-space: pre-wrap; word-wrap: break-word; font-family: "Consolas","Menlo",monospace; }' +
        'a { color:#1e40af; text-decoration:none; }';
      doc.head.appendChild(injected);
    }
  } catch (e) {
    // If we can't inject (cross-origin), proceed without custom print styles.
    injected = null;
  }

  try {
    const opts = {
      margin:      [22, 12, 24, 12],     // top, right, bottom, left (mm)
      filename:    filename,
      image:       { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false, letterRendering: true, windowWidth: doc.documentElement.scrollWidth },
      jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
      pagebreak:   { mode: ['avoid-all', 'css', 'legacy'] }
    };

    await new Promise(function (resolve, reject) {
      html2pdf()
        .set(opts)
        .from(doc.body)
        .toPdf()
        .get('pdf')
        .then(function (pdf) {
          const totalPages = pdf.internal.getNumberOfPages();
          const pageW = pdf.internal.pageSize.getWidth();
          const pageH = pdf.internal.pageSize.getHeight();

          const shortSub   = subTitle.length  > 55 ? subTitle.slice(0, 52) + '…' : subTitle;
          const shortTitle = rawTitle.length  > 80 ? rawTitle.slice(0, 77) + '…' : rawTitle;

          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);

            // ── HEADER BAR ────────────────────────────────────────────────
            pdf.setFillColor(30, 64, 175);          // RAG blue
            pdf.rect(0, 0, pageW, 14, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text('RAG Learning', 12, 9);
            if (shortSub) {
              pdf.setFont('helvetica', 'normal');
              pdf.setFontSize(9);
              pdf.text(shortSub, pageW - 12, 9, { align: 'right' });
            }

            // ── FOOTER ─────────────────────────────────────────────────────
            // Line 1: topic title, centered, italic, above divider
            if (shortTitle) {
              pdf.setTextColor(70, 70, 70);
              pdf.setFont('helvetica', 'bolditalic');
              pdf.setFontSize(9);
              pdf.text(shortTitle, pageW / 2, pageH - 13.5, { align: 'center' });
            }

            // Divider
            pdf.setDrawColor(210, 210, 210);
            pdf.setLineWidth(0.2);
            pdf.line(12, pageH - 11, pageW - 12, pageH - 11);

            // Line 2: copyright · site · page numbers
            pdf.setTextColor(100, 100, 100);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(8);
            pdf.text('© RAG Learning · Not for redistribution', 12, pageH - 6);
            pdf.text('Page ' + i + ' of ' + totalPages, pageW - 12, pageH - 6, { align: 'right' });

            pdf.setTextColor(30, 64, 175);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(8);
            pdf.text('raglearning.uk', pageW / 2, pageH - 6, { align: 'center' });
          }
        })
        .save()
        .then(resolve)
        .catch(reject);
    });
  } catch (err) {
    console.error('PDF generation failed:', err);
    alert('Could not generate PDF: ' + (err && err.message ? err.message : 'unknown error'));
  } finally {
    if (injected && injected.parentNode) {
      try { injected.parentNode.removeChild(injected); } catch (e) {}
    }
    resetButton();
  }
}
