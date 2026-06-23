// ── Exam dates (May/June 2026) ──────────────────────────────────────────────
// MAINTENANCE: Update every year when boards publish timetables.
// Used by Dashboard.html and breakdown.html — edit here only.
// Last updated: June 2026

const EXAM_DATES = {
  'Computer Science_OCR': [
    { paper: 'Paper 1 — Computer Systems', date: '2026-06-10', time: 'PM', duration: '2h 30m' },
    { paper: 'Paper 2 — Algorithms & Programming', date: '2026-06-17', time: 'AM', duration: '2h 30m' },
  ],
  'Computer Science_AQA|gcse': [
    { paper: 'Paper 1 — On-screen', date: '2026-06-10', time: 'PM', duration: '2h 30m' },
    { paper: 'Paper 2 — Written', date: '2026-06-17', time: 'AM', duration: '2h' },
  ],
  'Computer Science_AQA|alevel': [
    { paper: 'Paper 1 — On-screen Programming', date: '2026-06-11', time: 'AM', duration: '2h 30m' },
    { paper: 'Paper 2 — Written Theory', date: '2026-06-18', time: 'PM', duration: '2h 30m' },
  ],
  'Mathematics_OCR|gcse': [
    { paper: 'Paper 1 — Non-Calculator', date: '2026-06-04', time: 'AM', duration: '1h 30m' },
    { paper: 'Paper 2 — Calculator', date: '2026-06-09', time: 'PM', duration: '1h 30m' },
    { paper: 'Paper 3 — Calculator', date: '2026-06-18', time: 'AM', duration: '1h 30m' },
  ],
  'Mathematics_OCR|alevel': [
    { paper: 'Paper 1 — Pure Mathematics', date: '2026-06-03', time: 'PM', duration: '2h' },
    { paper: 'Paper 2 — Pure Mathematics & Statistics', date: '2026-06-11', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Pure Mathematics & Mechanics', date: '2026-06-18', time: 'PM', duration: '2h' },
  ],
  'Mathematics_AQA': [
    { paper: 'Paper 1 — Pure Mathematics', date: '2026-06-03', time: 'PM', duration: '2h' },
    { paper: 'Paper 2 — Pure & Mechanics', date: '2026-06-11', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Pure & Statistics', date: '2026-06-18', time: 'PM', duration: '2h' },
  ],
  'Mathematics_Edexcel': [
    { paper: 'Paper 1 — Pure Mathematics 1', date: '2026-06-03', time: 'PM', duration: '2h' },
    { paper: 'Paper 2 — Pure Mathematics 2', date: '2026-06-11', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Statistics & Mechanics', date: '2026-06-18', time: 'PM', duration: '2h' },
  ],
  'Further Mathematics_Edexcel': [
    { paper: 'Paper 1 — Core Pure 1', date: '2026-06-12', time: 'AM', duration: '1h 30m' },
    { paper: 'Paper 2 — Core Pure 2', date: '2026-06-19', time: 'AM', duration: '1h 30m' },
    { paper: 'Paper 3 — Option (FM1/FS1/FP1/FD1)', date: '2026-06-23', time: 'PM', duration: '1h 30m' },
    { paper: 'Paper 4 — Option (FM2/FS2/FP2/FD2)', date: '2026-06-26', time: 'AM', duration: '1h 30m' },
  ],
  'Further Mathematics_AQA': [
    { paper: 'Paper 1 — Pure Core', date: '2026-06-11', time: 'AM', duration: '2h' },
    { paper: 'Paper 2 — Pure Core', date: '2026-06-18', time: 'AM', duration: '2h' },
    { paper: 'Paper 3 — Mechanics (or Statistics/Discrete)', date: '2026-06-24', time: 'PM', duration: '2h' },
  ],
  'Further Mathematics_OCR A': [
    { paper: 'Paper 1 (Y540) — Core Pure', date: '2026-06-11', time: 'AM', duration: '2h 40m' },
    { paper: 'Paper 2 — Option A (Y541 Stats / Y542 Mech / Y543 Discrete)', date: '2026-06-18', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3 — Option B (Y541 Stats / Y542 Mech / Y543 Discrete)', date: '2026-06-24', time: 'PM', duration: '2h 15m' },
  ],
  'Further Mathematics_OCR B': [
    { paper: 'Paper 1 (Y420) — Core Pure', date: '2026-06-12', time: 'AM', duration: '2h 40m' },
    { paper: 'Paper 2 (Y421) — Core Pure', date: '2026-06-19', time: 'AM', duration: '2h 40m' },
    { paper: 'Paper 3 — Option (Y432/Y433/Y434)', date: '2026-06-25', time: 'PM', duration: '1h 45m' },
  ],
  'Biology_AQA': [
    { paper: 'Paper 1', date: '2026-06-04', time: 'PM', duration: '2h' },
    { paper: 'Paper 2', date: '2026-06-12', time: 'AM', duration: '2h' },
    { paper: 'Paper 3', date: '2026-06-16', time: 'AM', duration: '2h' },
  ],
  'Biology_AQA|gcse': [
    { paper: 'Paper 1 — Topics 4.1–4.4', date: '2026-05-19', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Topics 4.5–4.7', date: '2026-06-10', time: 'PM', duration: '1h 45m' },
  ],
  'Biology_Edexcel|gcse': [
    { paper: 'Paper 1 — Topics 1–5', date: '2026-05-14', time: 'PM', duration: '1h 45m' },
    { paper: 'Paper 2 — Topics 1, 6–9', date: '2026-06-09', time: 'AM', duration: '1h 45m' },
  ],
  'Biology_Edexcel A': [
    { paper: 'Paper 1', date: '2026-06-04', time: 'PM', duration: '2h' },
    { paper: 'Paper 2', date: '2026-06-12', time: 'AM', duration: '2h' },
    { paper: 'Paper 3', date: '2026-06-16', time: 'AM', duration: '2h' },
  ],
  'Biology_Edexcel B': [
    { paper: 'Paper 1', date: '2026-06-04', time: 'PM', duration: '2h' },
    { paper: 'Paper 2', date: '2026-06-12', time: 'AM', duration: '2h' },
    { paper: 'Paper 3', date: '2026-06-16', time: 'AM', duration: '2h' },
  ],
  'Biology_OCR A': [
    { paper: 'Paper 1 — Biological Processes', date: '2026-06-05', time: 'PM', duration: '2h 15m' },
    { paper: 'Paper 2 — Biological Diversity', date: '2026-06-13', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3 — Unified Biology', date: '2026-06-18', time: 'AM', duration: '1h 30m' },
  ],
  'Biology_OCR A|gcse': [
    { paper: 'Paper 1 — Topics B1, B2, B3 + PAGs', date: '2026-05-19', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Topics B4, B5, B6 + PAGs', date: '2026-06-10', time: 'PM', duration: '1h 45m' },
  ],
  'Biology_OCR B': [
    { paper: 'Paper 1', date: '2026-06-05', time: 'PM', duration: '2h 15m' },
    { paper: 'Paper 2', date: '2026-06-13', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3', date: '2026-06-18', time: 'AM', duration: '1h 30m' },
  ],
  'Chemistry_AQA': [
    { paper: 'Paper 1 — Inorganic & Physical', date: '2026-06-02', time: 'AM', duration: '2h' },
    { paper: 'Paper 2 — Organic & Physical', date: '2026-06-09', time: 'AM', duration: '2h' },
    { paper: 'Paper 3 — Unified', date: '2026-06-15', time: 'AM', duration: '2h' },
  ],
  'Chemistry_Edexcel': [
    { paper: 'Paper 1 — Advanced Inorganic & Physical', date: '2026-06-02', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Advanced Organic & Physical', date: '2026-06-09', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 3 — General & Practical', date: '2026-06-15', time: 'AM', duration: '2h 30m' },
  ],
  'Chemistry_OCR A': [
    { paper: 'Paper 1 — Periodic Table & Energy', date: '2026-06-02', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 2 — Synthesis & Analytical', date: '2026-06-09', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3 — Unified Chemistry', date: '2026-06-15', time: 'AM', duration: '1h 30m' },
  ],
  'Chemistry_OCR B': [
    { paper: 'Paper 1 — Fundamentals', date: '2026-06-02', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 2 — Scientific Literacy', date: '2026-06-09', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3 — Practical Skills', date: '2026-06-15', time: 'AM', duration: '1h 30m' },
  ],
  'Physics_AQA': [
    { paper: 'Paper 1 — Sections 1–5 & 6.1', date: '2026-05-20', time: 'PM', duration: '2h' },
    { paper: 'Paper 2 — Sections 6.2–8', date: '2026-06-01', time: 'AM', duration: '2h' },
    { paper: 'Paper 3 — Practical & Option', date: '2026-06-08', time: 'AM', duration: '2h' },
  ],
  'Physics_AQA|gcse': [
    { paper: 'Paper 1 — Topics 4.1–4.4', date: '2026-05-22', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Topics 4.5–4.8', date: '2026-06-05', time: 'PM', duration: '1h 45m' },
  ],
  'Physics_Edexcel': [
    { paper: 'Paper 1 — Advanced Physics I', date: '2026-05-20', time: 'PM', duration: '1h 45m' },
    { paper: 'Paper 2 — Advanced Physics II', date: '2026-06-01', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 3 — General & Practical', date: '2026-06-08', time: 'AM', duration: '2h 30m' },
  ],
  'Physics_Edexcel|gcse': [
    { paper: 'Paper 1 — Topics 1–7',  date: '2026-05-22', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Topics 1, 8–15', date: '2026-06-05', time: 'PM', duration: '1h 45m' },
  ],
  'Physics_OCR A|gcse': [
    { paper: 'Paper 1 — Physics Topics P1, P3, P4', date: '2026-05-22', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Physics Topics P2, P5, P6', date: '2026-06-05', time: 'PM', duration: '1h 45m' },
  ],
  'Physics_OCR A': [
    { paper: 'Paper 1 — Modelling Physics', date: '2026-05-20', time: 'PM', duration: '2h 15m' },
    { paper: 'Paper 2 — Exploring Physics', date: '2026-06-01', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3 — Unified Physics', date: '2026-06-08', time: 'AM', duration: '1h 30m' },
  ],
  'Physics_OCR B': [
    { paper: 'Paper 1 — Fundamentals', date: '2026-05-20', time: 'PM', duration: '2h 15m' },
    { paper: 'Paper 2 — Scientific Literacy', date: '2026-06-01', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 3 — Practical Skills', date: '2026-06-08', time: 'AM', duration: '1h 30m' },
  ],
  'Physics_OCR B|gcse': [
    { paper: 'Paper 1 — Breadth in Physics (P1, P2, P3)', date: '2026-05-22', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 2 — Depth in Physics (P4, P5, P6)',   date: '2026-06-05', time: 'PM', duration: '1h 45m' },
  ],
  'Economics_AQA': [
    { paper: 'Paper 1 — Markets & Market Failure', date: '2026-05-11', time: 'AM', duration: '2h' },
    { paper: 'Paper 2 — National & International', date: '2026-05-18', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Economic Principles', date: '2026-06-04', time: 'AM', duration: '2h' },
  ],
  'Economics_Edexcel A': [
    { paper: 'Paper 1 — Markets & Business', date: '2026-05-11', time: 'AM', duration: '2h' },
    { paper: 'Paper 2 — National & Global', date: '2026-05-18', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Microeconomics & Macro', date: '2026-06-04', time: 'AM', duration: '2h' },
  ],
  'Economics_Edexcel B': [
    { paper: 'Paper 1 — Markets, Consumers & Firms', date: '2026-05-11', time: 'AM', duration: '2h' },
    { paper: 'Paper 2 — The Wider Economy', date: '2026-05-18', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Business & Economy', date: '2026-06-04', time: 'AM', duration: '2h' },
  ],
  'Economics_OCR': [
    { paper: 'Paper 1 — Microeconomics', date: '2026-05-11', time: 'AM', duration: '2h' },
    { paper: 'Paper 2 — Macroeconomics', date: '2026-05-18', time: 'PM', duration: '2h' },
    { paper: 'Paper 3 — Themes in Economics', date: '2026-06-04', time: 'AM', duration: '2h' },
  ],
  'Geography_AQA': [
    { paper: 'Paper 1 — Physical Geography', date: '2026-05-12', time: 'AM', duration: '2h 30m' },
    { paper: 'Paper 2 — Human Geography', date: '2026-05-21', time: 'PM', duration: '2h 30m' },
  ],
  'Geography_Edexcel': [
    { paper: 'Paper 1 — Physical Systems', date: '2026-05-12', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 2 — Human Systems', date: '2026-05-21', time: 'PM', duration: '2h 15m' },
    { paper: 'Paper 3 — Synoptic Investigation', date: '2026-06-08', time: 'PM', duration: '2h 15m' },
  ],
  'Geography_OCR': [
    { paper: 'Paper 1 — Physical Systems', date: '2026-05-12', time: 'AM', duration: '2h 30m' },
    { paper: 'Paper 2 — Human Interactions', date: '2026-05-21', time: 'PM', duration: '2h 30m' },
    { paper: 'Paper 3 — Geographical Debates', date: '2026-06-08', time: 'PM', duration: '2h 30m' },
  ],
  'Geography_Eduqas|gcse': [
    { paper: 'Component 1 — Changing Physical World', date: '2026-05-13', time: 'AM', duration: '1h 45m' },
    { paper: 'Component 2 — Changing Human World', date: '2026-05-22', time: 'PM', duration: '1h 45m' },
    { paper: 'Component 3 — Environmental Challenges', date: '2026-06-09', time: 'AM', duration: '1h' },
  ],
  'Geography_Eduqas|alevel': [
    { paper: 'Component 1 — Changing Landscapes & Changing Places', date: '2026-05-19', time: 'AM', duration: '1h 45m' },
    { paper: 'Component 2 — Global Systems & Global Governance', date: '2026-05-27', time: 'PM', duration: '2h' },
    { paper: 'Component 3 — Contemporary Themes', date: '2026-06-04', time: 'AM', duration: '2h 15m' },
  ],
  'English Language_AQA': [
    { paper: 'Paper 1 — Language, the Individual and Society', date: '2026-06-02', time: 'AM', duration: '2h 30m' },
    { paper: 'Paper 2 — Language Diversity and Change', date: '2026-06-11', time: 'AM', duration: '2h 30m' },
  ],
  'English Language_Edexcel': [
    { paper: 'Paper 1 — Language Variation', date: '2026-06-02', time: 'AM', duration: '2h 15m' },
    { paper: 'Paper 2 — Child Language', date: '2026-06-09', time: 'AM', duration: '1h 45m' },
    { paper: 'Paper 3 — Investigating Language', date: '2026-06-16', time: 'AM', duration: '2h 15m' },
  ],
};
