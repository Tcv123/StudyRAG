/*
 * Edexcel A-Level Further Mathematics — Written Question Bank (assembled)
 * Merges four partial files loaded before this one.
 * FM_EDEXCEL_WRITTEN is used by fm-edexcel-practice.js and the diagnostic.
 */
const FM_EDEXCEL_WRITTEN = {
  ...(typeof FM_EDEXCEL_WRITTEN_CP1A !== 'undefined' ? FM_EDEXCEL_WRITTEN_CP1A : {}),
  ...(typeof FM_EDEXCEL_WRITTEN_CP1B !== 'undefined' ? FM_EDEXCEL_WRITTEN_CP1B : {}),
  ...(typeof FM_EDEXCEL_WRITTEN_CP2A !== 'undefined' ? FM_EDEXCEL_WRITTEN_CP2A : {}),
  ...(typeof FM_EDEXCEL_WRITTEN_CP2B !== 'undefined' ? FM_EDEXCEL_WRITTEN_CP2B : {}),
};
