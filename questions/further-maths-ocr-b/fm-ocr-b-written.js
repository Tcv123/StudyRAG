/*
 * OCR B (MEI) A-Level Further Mathematics — Written Question Bank (assembled)
 * Merges four partial files: Core Pure 1, Core Pure 2, Mechanics, Statistics, Algorithms.
 * FM_OCR_B_WRITTEN is used by fm-ocr-b-practice.js and the diagnostic.
 */
const FM_OCR_B_WRITTEN = {
  ...(typeof FM_OCR_B_WRITTEN_CP1 !== 'undefined' ? FM_OCR_B_WRITTEN_CP1 : {}),
  ...(typeof FM_OCR_B_WRITTEN_CP2 !== 'undefined' ? FM_OCR_B_WRITTEN_CP2 : {}),
  ...(typeof FM_OCR_B_WRITTEN_M  !== 'undefined' ? FM_OCR_B_WRITTEN_M  : {}),
  ...(typeof FM_OCR_B_WRITTEN_S  !== 'undefined' ? FM_OCR_B_WRITTEN_S  : {}),
  ...(typeof FM_OCR_B_WRITTEN_A  !== 'undefined' ? FM_OCR_B_WRITTEN_A  : {}),
};
