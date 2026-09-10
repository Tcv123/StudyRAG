/* ═══════════════════════════════════════
   DIAGNOSTIC PAGE MAP
   ────────────────────────────────────────
   Which diagnostic page belongs to a given subject + board + level.

   Keys are "Subject_Board" with an optional "|gcse" / "|alevel" suffix, and
   the suffixed key wins when present — the same convention as
   practice-bank-config.js and _lvSuffix() in breakdown.html.

   This is deliberately ONLY the page paths. The full DIAG_TOPICS objects in
   Dashboard.html and breakdown.html also carry per-topic lists, and those two
   copies have drifted apart (different descriptions, and breakdown.html has
   topics Dashboard.html lacks). Merging those is a separate job; the page
   paths, however, agree in both files, so they are safe to share.

   Used by class.html to link a class at its own level — NOT the viewer's,
   which is what the localStorage-based helpers elsewhere would give you.
═══════════════════════════════════════ */
(function () {
  'use strict';

  const DIAGNOSTIC_PAGES = {
    'Biology_AQA':                   'diagnostics/biology-aqa-diagnostic.html',
    'Biology_AQA|gcse':              'diagnostics/biology-aqa-gcse-diagnostic.html',
    'Biology_Edexcel A':             'diagnostics/biology-edexcel-a-diagnostic.html',
    'Biology_Edexcel B':             'diagnostics/biology-edexcel-b-diagnostic.html',
    'Biology_Edexcel|gcse':          'diagnostics/biology-edexcel-gcse-diagnostic.html',
    'Biology_OCR A':                 'diagnostics/biology-ocr-a-diagnostic.html',
    'Biology_OCR A|gcse':            'diagnostics/biology-ocr-a-gcse-diagnostic.html',
    'Biology_OCR B':                 'diagnostics/biology-ocr-b-diagnostic.html',
    'Biology_OCR B|gcse':            'diagnostics/biology-ocr-b-gcse-diagnostic.html',
    'Chemistry_AQA':                 'diagnostics/chemistry-aqa-diagnostic.html',
    'Chemistry_Edexcel':             'diagnostics/chemistry-edexcel-diagnostic.html',
    'Chemistry_OCR A':               'diagnostics/chemistry-ocr-a-diagnostic.html',
    'Chemistry_OCR B':               'diagnostics/chemistry-ocr-b-diagnostic.html',
    'Computer Science_AQA|alevel':   'diagnostics/cs-aqa-alevel-diagnostic.html',
    'Computer Science_AQA|gcse':     'diagnostics/cs-aqa-gcse-diagnostic.html',
    'Computer Science_OCR':          'diagnostics/cs-ocr-gcse-diagnostic.html',
    'Computer Science_OCR|alevel':   'diagnostics/cs-ocr-alevel-diagnostic.html',
    'Economics_AQA':                 'diagnostics/economics-aqa-diagnostic.html',
    'Economics_Edexcel A':           'diagnostics/economics-edexcel-a-diagnostic.html',
    'Economics_Edexcel B':           'diagnostics/economics-edexcel-b-diagnostic.html',
    'Economics_OCR':                 'diagnostics/economics-ocr-diagnostic.html',
    'English Language_AQA':          'diagnostics/english-aqa-diagnostic.html',
    'English Language_Edexcel':      'diagnostics/english-edexcel-diagnostic.html',
    'Further Mathematics_AQA':       'diagnostics/further-maths-aqa-diagnostic.html',
    'Further Mathematics_Edexcel':   'diagnostics/further-maths-edexcel-diagnostic.html',
    'Further Mathematics_OCR A':     'diagnostics/further-maths-ocr-diagnostic.html',
    'Further Mathematics_OCR B':     'diagnostics/further-maths-ocr-b-diagnostic.html',
    'Geography_AQA':                 'diagnostics/geography-aqa-diagnostic.html',
    'Geography_Edexcel':             'diagnostics/geography-edexcel-diagnostic.html',
    'Geography_Eduqas|alevel':       'diagnostics/geography-eduqas-alevel-diagnostic.html',
    'Geography_Eduqas|gcse':         'diagnostics/geography-eduqas-gcse-diagnostic.html',
    'Geography_OCR':                 'diagnostics/geography-ocr-diagnostic.html',
    'Mathematics_AQA':               'diagnostics/maths-aqa-diagnostic.html',
    'Mathematics_Edexcel':           'diagnostics/maths-edexcel-diagnostic.html',
    'Mathematics_OCR|alevel':        'diagnostics/maths-ocr-alevel-diagnostic.html',
    'Mathematics_OCR|gcse':          'diagnostics/maths-ocr-gcse-diagnostic.html',
    'Mathematics_OCR B|alevel':      'diagnostics/maths-ocr-b-alevel-diagnostic.html',
    'Physics_AQA':                   'diagnostics/physics-aqa-diagnostic.html',
    'Physics_AQA|gcse':              'diagnostics/physics-aqa-gcse-diagnostic.html',
    'Physics_Edexcel':               'diagnostics/physics-edexcel-diagnostic.html',
    'Physics_Edexcel|gcse':          'diagnostics/physics-edexcel-gcse-diagnostic.html',
    'Physics_OCR A':                 'diagnostics/physics-ocr-a-diagnostic.html',
    'Physics_OCR A|gcse':            'diagnostics/physics-ocr-a-gcse-diagnostic.html',
    'Physics_OCR B':                 'diagnostics/physics-ocr-b-diagnostic.html',
    'Physics_OCR B|gcse':            'diagnostics/physics-ocr-b-gcse-diagnostic.html',  };

  /* Resolve against an EXPLICIT level rather than localStorage, so a teacher
     viewing an A-Level class doesn't get the GCSE paper because their own
     account happens to be set to GCSE. */
  function diagnosticPageFor(subject, board, level) {
    const suffix = (level === 'a-level' || level === 'as') ? 'alevel' : 'gcse';
    const base   = `${subject}_${board}`;
    return DIAGNOSTIC_PAGES[`${base}|${suffix}`] || DIAGNOSTIC_PAGES[base] || null;
  }

  window.DIAGNOSTIC_PAGES   = DIAGNOSTIC_PAGES;
  window.diagnosticPageFor  = diagnosticPageFor;
})();
