// Shared PDF download handler for subject-notes pages.
// Renders the currently loaded note into a branded PDF with:
//   - a blue "RAG Learning" header bar on every page
//   - a footer with copyright, site URL (raglearning.uk), and page numbers
//   - a faint diagonal "RAG Learning" watermark across every page (anti-theft)
// Requires html2pdf.js to be loaded on the page before this script.

async function downloadCurrentAsPDF(evt) {
  if (evt && evt.preventDefault) evt.preventDefault();

  const iframe  = document.getElementById('pdfFrame');
  const titleEl = document.getElementById('viewerTitle');
  const subEl   = document.getElementById('viewerSub');
  const btn     = document.getElementById('downloadBtn');

  const src = iframe && iframe.getAttribute('src');
  if (!src) {
    alert('Please select a topic first.');
    return;
  }

  if (typeof html2pdf === 'undefined') {
    alert('PDF library failed to load. Please refresh the page and try again.');
    return;
  }

  const rawTitle = (titleEl ? titleEl.textContent : 'note').trim();
  const subTitle = (subEl ? subEl.textContent : '').trim();
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

  let stage;
  try {
    // Fetch the note HTML so we can re-render it in the parent document
    // with all styles correctly applied (avoids iframe style-scoping issues).
    const resp = await fetch(src, { credentials: 'same-origin' });
    if (!resp.ok) throw new Error('Failed to load note (' + resp.status + ')');
    const html = await resp.text();

    const parsed = new DOMParser().parseFromString(html, 'text/html');
    const baseHref = new URL(src, window.location.href).href.replace(/[^/]*$/, '');

    stage = document.createElement('div');
    stage.id = 'rag-pdf-stage';
    stage.style.cssText =
      'position:fixed;left:-99999px;top:0;width:794px;background:#ffffff;color:#111;' +
      'font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;';

    // Copy stylesheets and inline styles from the note's <head>.
    parsed.head.querySelectorAll('link[rel="stylesheet"], style').forEach(function (node) {
      if (node.tagName === 'LINK') {
        const hrefAttr = node.getAttribute('href');
        if (!hrefAttr) return;
        const abs = new URL(hrefAttr, baseHref).href;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = abs;
        stage.appendChild(link);
      } else {
        stage.appendChild(node.cloneNode(true));
      }
    });

    // Rewrite relative URLs on images and anchors so they resolve correctly.
    const bodyClone = parsed.body.cloneNode(true);
    bodyClone.querySelectorAll('img[src], source[src]').forEach(function (el) {
      const s = el.getAttribute('src');
      if (s && !/^(?:https?:|data:|\/\/)/.test(s)) {
        el.src = new URL(s, baseHref).href;
      }
    });
    bodyClone.querySelectorAll('a[href]').forEach(function (el) {
      const s = el.getAttribute('href');
      if (s && !/^(?:https?:|mailto:|#|data:|\/\/)/.test(s)) {
        el.setAttribute('href', new URL(s, baseHref).href);
      }
    });

    // Print-friendly overrides.
    const printStyle = document.createElement('style');
    printStyle.textContent =
      '#rag-pdf-stage { padding: 28px 36px; line-height: 1.55; font-size: 14px; }' +
      '#rag-pdf-stage * { max-width: 100% !important; box-sizing: border-box; }' +
      '#rag-pdf-stage img, #rag-pdf-stage svg, #rag-pdf-stage table, #rag-pdf-stage pre, #rag-pdf-stage blockquote, #rag-pdf-stage figure { page-break-inside: avoid; }' +
      '#rag-pdf-stage h1, #rag-pdf-stage h2, #rag-pdf-stage h3, #rag-pdf-stage h4 { page-break-after: avoid; }' +
      '#rag-pdf-stage table { border-collapse: collapse; width: 100%; }' +
      '#rag-pdf-stage th, #rag-pdf-stage td { border: 1px solid #ccc; padding: 6px 8px; text-align: left; }';
    stage.appendChild(printStyle);

    const content = document.createElement('div');
    content.innerHTML = bodyClone.innerHTML;
    stage.appendChild(content);

    document.body.appendChild(stage);

    // Let any external stylesheets / fonts settle before rendering.
    await new Promise(function (r) { setTimeout(r, 400); });

    const opts = {
      margin:      [24, 12, 22, 12],     // top, right, bottom, left (mm) — leaves room for header/footer
      filename:    filename,
      image:       { type: 'jpeg', quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false, letterRendering: true },
      jsPDF:       { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
      pagebreak:   { mode: ['avoid-all', 'css', 'legacy'] }
    };

    await new Promise(function (resolve, reject) {
      html2pdf()
        .set(opts)
        .from(stage)
        .toPdf()
        .get('pdf')
        .then(function (pdf) {
          const totalPages = pdf.internal.getNumberOfPages();
          const pageW = pdf.internal.pageSize.getWidth();
          const pageH = pdf.internal.pageSize.getHeight();

          const shortSub   = subTitle.length  > 55 ? subTitle.slice(0, 52) + '…' : subTitle;
          const shortTitle = rawTitle.length  > 70 ? rawTitle.slice(0, 67) + '…' : rawTitle;

          for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);

            // DIAGONAL WATERMARK — drawn first so content sits on top
            pdf.setTextColor(230, 230, 230);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(64);
            pdf.text('RAG Learning', pageW / 2, pageH / 2 + 15, { align: 'center', angle: 30 });

            // HEADER BAR
            pdf.setFillColor(30, 64, 175);                  // RAG blue
            pdf.rect(0, 0, pageW, 15, 'F');
            pdf.setTextColor(255, 255, 255);
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text('RAG Learning', 12, 9.5);
            if (shortSub) {
              pdf.setFont('helvetica', 'normal');
              pdf.setFontSize(9);
              pdf.text(shortSub, pageW - 12, 9.5, { align: 'right' });
            }

            // FOOTER DIVIDER
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.2);
            pdf.line(12, pageH - 15, pageW - 12, pageH - 15);

            // FOOTER TEXT
            pdf.setTextColor(90, 90, 90);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(8);
            pdf.text('© RAG Learning — Not for redistribution', 12, pageH - 9);
            pdf.text('raglearning.uk', 12, pageH - 4.5);
            pdf.text('Page ' + i + ' of ' + totalPages, pageW - 12, pageH - 9, { align: 'right' });
            if (shortTitle) {
              pdf.setFont('helvetica', 'bold');
              pdf.text(shortTitle, pageW / 2, pageH - 6.5, { align: 'center' });
            }
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
    if (stage && stage.parentNode) stage.parentNode.removeChild(stage);
    resetButton();
  }
}
