/**
 * Automatic import of a board's summer timetable PDF into exam_dates.
 *
 * Used by api/cron/exam-timetable-check.js. Vercel does not route files in
 * api/ whose name begins with `_`, so this is a plain module.
 *
 * WHY THIS IS SAFE TO AUTOMATE WHEN THE OLD PARSER WAS NOT
 * ────────────────────────────────────────────────────────
 * The old path guessed rows out of free text and asked a human to sort out
 * which subject each one belonged to. This one never guesses a subject. It
 * starts from SPECS below — the exact entry codes of every paper a student
 * on this site can sit — and looks each code up in the board's PDF. A code
 * is the one thing in a timetable that cannot be mis-read as another
 * subject: 7402/1 is AQA A-level Biology Paper 1 and nothing else.
 *
 * A spec only goes live when EVERY one of its papers is found, and every
 * row that answers for it passes all of:
 *
 *   • the date is in May or June of the series year
 *   • it is a weekday
 *   • where the board printed a weekday next to the date, they agree
 *   • tiers / options that are one sitting (8461/1F and 8461/1H) agree on
 *     date and session
 *
 * Anything short of that — a missing paper, two rows that disagree, a
 * layout we could not read — leaves that spec on the review page exactly
 * as before. Specs are independent: Biology failing does not hold back
 * Chemistry. A missing date is a gap; a wrong one is a disaster — that
 * rule still holds, it is just enforced by checks instead of by a click.
 */

/* ── What we import ──────────────────────────────────────────────────────
 * One entry per (subject, board, level) a student can pick in
 * subjects-config.js. `board` is the exact string in user_subjects, which
 * is not always the board's own name ('OCR' Maths is OCR A H240, 'OCR B' is
 * MEI H640). `source` is which board's PDF to read it from.
 *
 * Each paper lists every code that is the same sitting — foundation and
 * higher tier, or the language options of one programming paper — and they
 * must all agree. Further Maths options that are DIFFERENT sittings are
 * separate papers, labelled as options so a student can ignore the ones
 * they do not take.
 *
 * Every code here was checked against the June 2027 PDFs on 10 Oct 2026.
 * ──────────────────────────────────────────────────────────────────────── */
const SPECS = [
  /* ── AQA A-level ── */
  aqa('Biology',             'AQA', 'alevel', [['Paper 1', '7402/1'], ['Paper 2', '7402/2'], ['Paper 3', '7402/3']]),
  aqa('Chemistry',           'AQA', 'alevel', [['Paper 1 — Inorganic & Physical', '7405/1'], ['Paper 2 — Organic & Physical', '7405/2'], ['Paper 3', '7405/3']]),
  aqa('Physics',             'AQA', 'alevel', [['Paper 1', '7408/1'], ['Paper 2', '7408/2'], ['Paper 3', '7408/3']]),
  aqa('Mathematics',         'AQA', 'alevel', [['Paper 1', '7357/1'], ['Paper 2', '7357/2'], ['Paper 3', '7357/3']]),
  aqa('Further Mathematics', 'AQA', 'alevel', [['Paper 1', '7367/1'], ['Paper 2', '7367/2'],
                                               ['Paper 3 — Discrete / Mechanics / Statistics', '7367/3D', '7367/3M', '7367/3S']]),
  aqa('Computer Science',    'AQA', 'alevel', [['Paper 1 — On-screen Programming', '7517/1A', '7517/1B', '7517/1D', '7517/1E'],
                                               ['Paper 2 — Written Theory', '7517/2']]),
  aqa('Economics',           'AQA', 'alevel', [['Paper 1 — Markets & Market Failure', '7136/1'], ['Paper 2 — National & International', '7136/2'], ['Paper 3 — Economic Principles', '7136/3']]),
  aqa('Geography',           'AQA', 'alevel', [['Paper 1 — Physical Geography', '7037/1'], ['Paper 2 — Human Geography', '7037/2']]),
  aqa('English Language',    'AQA', 'alevel', [['Paper 1 — Language, the Individual and Society', '7702/1'], ['Paper 2 — Language Diversity and Change', '7702/2']]),
  aqa('Politics',            'AQA', 'alevel', [['Paper 1 — Government and Politics of the UK', '7152/1'], ['Paper 2 — Government and Politics of the USA & Comparative', '7152/2'], ['Paper 3 — Political Ideas', '7152/3']]),

  /* ── AQA GCSE ── */
  aqa('Biology',             'AQA', 'gcse', [['Paper 1', '8461/1F', '8461/1H'], ['Paper 2', '8461/2F', '8461/2H']]),
  aqa('Chemistry',           'AQA', 'gcse', [['Paper 1', '8462/1F', '8462/1H'], ['Paper 2', '8462/2F', '8462/2H']]),
  aqa('Physics',             'AQA', 'gcse', [['Paper 1', '8463/1F', '8463/1H'], ['Paper 2', '8463/2F', '8463/2H']]),
  aqa('Mathematics',         'AQA', 'gcse', [['Paper 1 — Non-calculator', '8300/1F', '8300/1H'], ['Paper 2 — Calculator', '8300/2F', '8300/2H'], ['Paper 3 — Calculator', '8300/3F', '8300/3H']]),
  aqa('Computer Science',    'AQA', 'gcse', [['Paper 1 — Computational Thinking & Programming', '8525/1A', '8525/1B', '8525/1C'], ['Paper 2 — Computing Concepts', '8525/2']]),
  aqa('Economics',           'AQA', 'gcse', [['Paper 1 — How Markets Work', '8136/1'], ['Paper 2 — How the Economy Works', '8136/2']]),
  aqa('Geography',           'AQA', 'gcse', [['Paper 1 — Living with the Physical Environment', '8035/1'], ['Paper 2 — Challenges in the Human Environment', '8035/2'], ['Paper 3 — Geographical Applications', '8035/3']]),
  aqa('English Language',    'AQA', 'gcse', [['Paper 1 — Creative Reading and Writing', '8700/1'], ['Paper 2 — Viewpoints and Perspectives', '8700/2']]),
  aqa('English Literature',  'AQA', 'gcse', [['Paper 1 — Shakespeare and the 19th-century Novel', '8702/1'], ['Paper 2 — Modern Texts and Poetry', '8702/2']]),
  /* Every History option in a paper is one sitting. Only the options whose
   * line carries the date are listed — the ones with a wrapped title (1B/C,
   * 1B/E, 2A/*) print it on the next baseline, so they never come back as
   * rows and requiring them would hold the subject for review every year.
   * Each code is one 1h section and a student sits two, so the paper's
   * length is pinned to the 2h the by-date grid prints. */
  aqa('History',             'AQA', 'gcse', [['Paper 1 — Understanding the Modern World', '8145/1A/A', '8145/1A/B', '8145/1A/C', '8145/1A/D', '8145/1B/A', '8145/1B/B', '8145/1B/D', { duration: '2h' }],
                                             ['Paper 2 — Shaping the Nation', '8145/2B/A', '8145/2B/B', '8145/2B/C', '8145/2B/D', { duration: '2h' }]]),
  /* Speaking is a teacher-arranged window, not a timetabled sitting. */
  aqa('French',              'AQA', 'gcse', [['Listening', '8652/LF', '8652/LH'], ['Reading', '8652/RF', '8652/RH'], ['Writing', '8652/WF', '8652/WH']]),
  aqa('German',              'AQA', 'gcse', [['Listening', '8662/LF', '8662/LH'], ['Reading', '8662/RF', '8662/RH'], ['Writing', '8662/WF', '8662/WH']]),
  aqa('Spanish',             'AQA', 'gcse', [['Listening', '8692/LF', '8692/LH'], ['Reading', '8692/RF', '8692/RH'], ['Writing', '8692/WF', '8692/WH']]),

  /* ── OCR A-level ── */
  ocr('Biology',             'OCR A', 'alevel', [['Paper 1 — Biological Processes', 'H420/01'], ['Paper 2 — Biological Diversity', 'H420/02'], ['Paper 3 — Unified Biology', 'H420/03']]),
  ocr('Biology',             'OCR B', 'alevel', [['Paper 1 — Fundamentals of Biology', 'H422/01'], ['Paper 2 — Scientific Literacy', 'H422/02'], ['Paper 3 — Practical Skills', 'H422/03']]),
  ocr('Chemistry',           'OCR A', 'alevel', [['Paper 1 — Periodic Table & Energy', 'H432/01'], ['Paper 2 — Synthesis & Analytical', 'H432/02'], ['Paper 3 — Unified Chemistry', 'H432/03']]),
  ocr('Chemistry',           'OCR B', 'alevel', [['Paper 1 — Fundamentals', 'H433/01'], ['Paper 2 — Scientific Literacy', 'H433/02'], ['Paper 3 — Practical Skills', 'H433/03']]),
  ocr('Physics',             'OCR A', 'alevel', [['Paper 1 — Modelling Physics', 'H556/01'], ['Paper 2 — Exploring Physics', 'H556/02'], ['Paper 3 — Unified Physics', 'H556/03']]),
  ocr('Physics',             'OCR B', 'alevel', [['Paper 1 — Fundamentals', 'H557/01'], ['Paper 2 — Scientific Literacy', 'H557/02'], ['Paper 3 — Practical Skills', 'H557/03']]),
  ocr('Mathematics',         'OCR',   'alevel', [['Paper 1 — Pure Mathematics', 'H240/01'], ['Paper 2 — Pure Mathematics & Statistics', 'H240/02'], ['Paper 3 — Pure Mathematics & Mechanics', 'H240/03']]),
  ocr('Mathematics',         'OCR B', 'alevel', [['Paper 1 — Pure Mathematics & Mechanics', 'H640/01'], ['Paper 2 — Pure Mathematics & Statistics', 'H640/02'], ['Paper 3 — Pure Mathematics & Comprehension', 'H640/03']]),
  ocr('Further Mathematics', 'OCR A', 'alevel', [['Pure Core 1 (Y540)', 'Y540'], ['Pure Core 2 (Y541)', 'Y541'],
                                                 ['Option — Statistics (Y542)', 'Y542'], ['Option — Mechanics (Y543)', 'Y543'],
                                                 ['Option — Discrete (Y544)', 'Y544'], ['Option — Additional Pure (Y545)', 'Y545']]),
  ocr('Further Mathematics', 'OCR B', 'alevel', [['Core Pure (Y420)', 'Y420'],
                                                 ['Option — Mechanics Major (Y421)', 'Y421'], ['Option — Statistics Major (Y422)', 'Y422'],
                                                 ['Option — Mechanics Minor (Y431)', 'Y431'], ['Option — Statistics Minor (Y432)', 'Y432'],
                                                 ['Option — Modelling with Algorithms (Y433)', 'Y433'], ['Option — Numerical Methods (Y434)', 'Y434'],
                                                 ['Option — Extra Pure (Y435)', 'Y435'], ['Option — Further Pure with Technology (Y436)', 'Y436']]),
  ocr('Computer Science',    'OCR', 'alevel', [['Paper 1 — Computer Systems', 'H446/01'], ['Paper 2 — Algorithms & Programming', 'H446/02']]),
  ocr('Economics',           'OCR', 'alevel', [['Paper 1 — Microeconomics', 'H460/01'], ['Paper 2 — Macroeconomics', 'H460/02'], ['Paper 3 — Themes in Economics', 'H460/03']]),
  ocr('Geography',           'OCR', 'alevel', [['Paper 1 — Physical Systems', 'H481/01'], ['Paper 2 — Human Interactions', 'H481/02'], ['Paper 3 — Geographical Debates', 'H481/03']]),
  ocr('English Language',    'OCR', 'alevel', [['Paper 1 — Exploring Language', 'H470/01'], ['Paper 2 — Dimensions of Linguistic Variation', 'H470/02']]),

  /* ── OCR GCSE ──
   * Foundation and higher are separate codes (01–03 / 04–06 for Maths) on
   * the same sitting.
   *
   * 'OCR' Geography could be A (J383) or B (J384), and History A (J410) or
   * B (J411) — the site does not say which. OCR sits both specs of each in
   * the same three slots, so each paper lists both and the agreement check
   * proves they still share a slot; the year they stop, the subject goes to
   * review instead of showing one spec's date to the other's students. */
  ocr('Biology',             'OCR A', 'gcse', [['Paper 1', 'J247/01', 'J247/03'], ['Paper 2', 'J247/02', 'J247/04']]),
  ocr('Biology',             'OCR B', 'gcse', [['Paper 1 — Breadth in Biology', 'J257/01', 'J257/03'], ['Paper 2 — Depth in Biology', 'J257/02', 'J257/04']]),
  ocr('Chemistry',           'OCR A', 'gcse', [['Paper 1', 'J248/01', 'J248/03'], ['Paper 2', 'J248/02', 'J248/04']]),
  ocr('Chemistry',           'OCR B', 'gcse', [['Paper 1 — Breadth in Chemistry', 'J258/01', 'J258/03'], ['Paper 2 — Depth in Chemistry', 'J258/02', 'J258/04']]),
  ocr('Physics',             'OCR A', 'gcse', [['Paper 1', 'J249/01', 'J249/03'], ['Paper 2', 'J249/02', 'J249/04']]),
  ocr('Physics',             'OCR B', 'gcse', [['Paper 1 — Breadth in Physics', 'J259/01', 'J259/03'], ['Paper 2 — Depth in Physics', 'J259/02', 'J259/04']]),
  ocr('Mathematics',         'OCR', 'gcse', [['Paper 1 — Calculator', 'J560/01', 'J560/04'], ['Paper 2 — Non-calculator', 'J560/02', 'J560/05'], ['Paper 3 — Calculator', 'J560/03', 'J560/06']]),
  ocr('Computer Science',    'OCR', 'gcse', [['Paper 1 — Computer Systems', 'J277/01'], ['Paper 2 — Computational Thinking, Algorithms & Programming', 'J277/02']]),
  ocr('Economics',           'OCR', 'gcse', [['Paper 1 — Introduction to Economics', 'J205/01'], ['Paper 2 — National & International Economics', 'J205/02']]),
  ocr('English Language',    'OCR', 'gcse', [['Paper 1 — Communicating Information and Ideas', 'J351/01'], ['Paper 2 — Exploring Effects and Impact', 'J351/02']]),
  ocr('English Literature',  'OCR', 'gcse', [['Paper 1 — Exploring Modern and Literary Heritage Texts', 'J352/01'], ['Paper 2 — Exploring Poetry and Shakespeare', 'J352/02']]),
  ocr('Geography',           'OCR', 'gcse', [['Paper 1 — Living in the UK Today (A) / Our Natural World (B)', 'J383/01', 'J384/01'],
                                             ['Paper 2 — The World Around Us (A) / People and Society (B)', 'J383/02', 'J384/02'],
                                             ['Paper 3 — Geographical Skills (A) / Geographical Exploration (B)', 'J383/03', 'J384/03']]),
  /* OCR prints History's options as one range per sitting ("J410/01-07"). */
  ocr('History',             'OCR', 'gcse', [['Period Study (A) / History Around Us (B)', 'J410/01-07', 'J411/21'],
                                             ['Thematic Study (A) / British History (B)', 'J410/08-10', 'J411/11-19'],
                                             ['British Depth Study (A) / World History (B)', 'J410/11-13', 'J411/31-39']]),

  /* ── Eduqas ──
   * GCSE Geography is spec B (C112) — the notes in notes-geography-eduqas-gcse
   * are B's themes and the 2026 config used B's component names. */
  eduqas('Geography',        'Eduqas', 'alevel', [['Component 1 — Changing Landscapes & Changing Places', 'A110U10-1'], ['Component 2 — Global Systems & Global Governance', 'A110U20-1'], ['Component 3 — Contemporary Themes', 'A110U30-1']]),
  eduqas('Geography',        'Eduqas', 'gcse',   [['Component 1 — Investigating Geographical Issues', 'C112U10-1'], ['Component 2 — Problem Solving Geography', 'C112U20-1'], ['Component 3 — Applied Fieldwork Enquiry', 'C112U30-1']]),
  eduqas('English Language', 'Eduqas', 'alevel', [['Component 1', 'A700U10-1'], ['Component 2', 'A700U20-1'], ['Component 3', 'A700U30-1']]),
  eduqas('English Language', 'Eduqas', 'gcse',   [['Component 1', 'C700U10-1'], ['Component 2', 'C700U20-1']]),
  eduqas('English Literature', 'Eduqas', 'gcse', [['Component 1 — Shakespeare and Poetry', 'C720U10-1'], ['Component 2 — Post-1914 Prose/Drama, 19th-century Prose and Unseen Poetry', 'C720U20-1']]),
  /* Studies A–H of each component are one sitting. Eduqas does not
   * timetable GCSE French, German or Spanish in England, so those are not
   * here — there is nothing in its PDF to find. */
  eduqas('History',          'Eduqas', 'gcse',   [['Component 1 — Studies in Depth', 'C100UA0-1', 'C100UB0-1', 'C100UC0-1', 'C100UD0-1', 'C100UE0-1', 'C100UF0-1', 'C100UG0-1', 'C100UH0-1'],
                                                  ['Component 2 — Studies in Breadth', 'C100U10-1', 'C100U20-1', 'C100U30-1', 'C100U40-1', 'C100U50-1', 'C100U60-1', 'C100U70-1', 'C100U80-1']]),

  /* ── Edexcel A-level ──
   * Codes are written "9MA0 01" in the PDF and normalised to 9MA0/01 by the
   * reader. Further Maths option papers 3A–3D are four different sittings;
   * 4A–4D share one. */
  edexcel('Mathematics',         'Edexcel',   'alevel', [['Paper 1 — Pure Mathematics 1', '9MA0/01'], ['Paper 2 — Pure Mathematics 2', '9MA0/02'], ['Paper 3 — Statistics & Mechanics', '9MA0/03']]),
  edexcel('Further Mathematics', 'Edexcel',   'alevel', [['Paper 1 — Core Pure 1', '9FM0/01'], ['Paper 2 — Core Pure 2', '9FM0/02'],
                                                         ['Option 3A — Further Pure 1', '9FM0/3A'], ['Option 3B — Further Statistics 1', '9FM0/3B'],
                                                         ['Option 3C — Further Mechanics 1', '9FM0/3C'], ['Option 3D — Decision 1', '9FM0/3D'],
                                                         ['Paper 4 — Option (4A/4B/4C/4D)', '9FM0/4A', '9FM0/4B', '9FM0/4C', '9FM0/4D']]),
  edexcel('Biology',             'Edexcel A', 'alevel', [['Paper 1 — The Natural Environment & Species Survival', '9BN0/01'], ['Paper 2 — Energy, Exercise & Co-ordination', '9BN0/02'], ['Paper 3 — General & Practical Applications', '9BN0/03']]),
  edexcel('Biology',             'Edexcel B', 'alevel', [['Paper 1 — Biochemistry, Microbiology & Genetics', '9BI0/01'], ['Paper 2 — Physiology, Evolution & Ecology', '9BI0/02'], ['Paper 3 — General & Practical Principles', '9BI0/03']]),
  edexcel('Chemistry',           'Edexcel',   'alevel', [['Paper 1 — Advanced Inorganic & Physical', '9CH0/01'], ['Paper 2 — Advanced Organic & Physical', '9CH0/02'], ['Paper 3 — General & Practical Principles', '9CH0/03']]),
  edexcel('Physics',             'Edexcel',   'alevel', [['Paper 1 — Advanced Physics I', '9PH0/01'], ['Paper 2 — Advanced Physics II', '9PH0/02'], ['Paper 3 — General & Practical Principles', '9PH0/03']]),
  edexcel('Economics',           'Edexcel A', 'alevel', [['Paper 1 — Markets & Business Behaviour', '9EC0/01'], ['Paper 2 — The National & Global Economy', '9EC0/02'], ['Paper 3 — Microeconomics & Macroeconomics', '9EC0/03']]),
  edexcel('Economics',           'Edexcel B', 'alevel', [['Paper 1 — Markets and How They Work', '9EB0/01'], ['Paper 2 — Competing in the Global Economy', '9EB0/02'], ['Paper 3 — The Economic Environment & Business', '9EB0/03']]),
  edexcel('Geography',           'Edexcel',   'alevel', [['Paper 1', '9GE0/01'], ['Paper 2', '9GE0/02'], ['Paper 3', '9GE0/03']]),
  edexcel('English Language',    'Edexcel',   'alevel', [['Paper 1 — Language Variation', '9EN0/01'], ['Paper 2 — Child Language', '9EN0/02'], ['Paper 3 — Investigating Language', '9EN0/03']]),
  edexcel('Politics',            'Edexcel',   'alevel', [['Paper 1 — UK Politics and Core Political Ideas', '9PL0/01'], ['Paper 2 — UK Government and Non-core Political Ideas', '9PL0/02'],
                                                         ['Paper 3 — Comparative Politics (3A USA or 3B Global)', '9PL0/3A', '9PL0/3B']]),
  edexcel('Business Studies',    'Edexcel',   'alevel', [['Paper 1 — Marketing, People & Global Businesses', '9BS0/01'], ['Paper 2 — Business Activities, Decisions & Strategy', '9BS0/02'], ['Paper 3 — Investigating Business', '9BS0/03']]),

  /* ── Edexcel GCSE / International GCSE ──
   * 'Edexcel' Geography could be A (1GA0) or B (1GB0); both are listed per
   * paper for the same reason as OCR's. Languages: Paper 1 is speaking,
   * which is not timetabled. History's options are printed as ranges. */
  edexcel('Biology',             'Edexcel',       'gcse', [['Paper 1', '1BI0/1F', '1BI0/1H'], ['Paper 2', '1BI0/2F', '1BI0/2H']]),
  edexcel('Chemistry',           'Edexcel',       'gcse', [['Paper 1', '1CH0/1F', '1CH0/1H'], ['Paper 2', '1CH0/2F', '1CH0/2H']]),
  edexcel('Physics',             'Edexcel',       'gcse', [['Paper 1', '1PH0/1F', '1PH0/1H'], ['Paper 2', '1PH0/2F', '1PH0/2H']]),
  edexcel('Mathematics',         'Edexcel',       'gcse', [['Paper 1 — Non-calculator', '1MA1/1F', '1MA1/1H'], ['Paper 2 — Calculator', '1MA1/2F', '1MA1/2H'], ['Paper 3 — Calculator', '1MA1/3F', '1MA1/3H']]),
  edexcel('English Language',    'Edexcel',       'gcse', [['Paper 1 — Fiction and Imaginative Writing', '1EN0/01'], ['Paper 2 — Non-fiction and Transactional Writing', '1EN0/02']]),
  edexcel('English Literature',  'Edexcel',       'gcse', [['Paper 1 — Shakespeare and Post-1914 Literature', '1ET0/01'], ['Paper 2 — 19th-century Novel and Poetry since 1789', '1ET0/02']]),
  edexcel('History',             'Edexcel',       'gcse', [['Paper 1 — Thematic Study and Historic Environment', '1HI0/10-13'],
                                                           ['Paper 2 — Period Study and British Depth Study', '1HI0/2A-2W'],
                                                           ['Paper 3 — Modern Depth Study', '1HI0/30-33']]),
  edexcel('Geography',           'Edexcel',       'gcse', [['Paper 1 — The Physical Environment (A) / Global Geographical Issues (B)', '1GA0/01', '1GB0/01'],
                                                           ['Paper 2 — The Human Environment (A) / UK Geographical Issues (B)', '1GA0/02', '1GB0/02'],
                                                           ['Paper 3 — Geographical Investigations (A) / Making Geographical Decisions (B)', '1GA0/03', '1GB0/03']]),
  edexcel('French',              'Edexcel',       'gcse', [['Paper 2 — Listening', '1FR1/2F', '1FR1/2H'], ['Paper 3 — Reading', '1FR1/3F', '1FR1/3H'], ['Paper 4 — Writing', '1FR1/4F', '1FR1/4H']]),
  edexcel('German',              'Edexcel',       'gcse', [['Paper 2 — Listening', '1GN1/2F', '1GN1/2H'], ['Paper 3 — Reading', '1GN1/3F', '1GN1/3H'], ['Paper 4 — Writing', '1GN1/4F', '1GN1/4H']]),
  edexcel('Spanish',             'Edexcel',       'gcse', [['Paper 2 — Listening', '1SP1/2F', '1SP1/2H'], ['Paper 3 — Reading', '1SP1/3F', '1SP1/3H'], ['Paper 4 — Writing', '1SP1/4F', '1SP1/4H']]),
  edexcel('Biology',             'Edexcel IGCSE', 'gcse', [['Paper 1 (1B)', '4BI1/1B'], ['Paper 2 (2B)', '4BI1/2B']])
];

function aqa(subject, board, level, papers)    { return spec('AQA', subject, board, level, papers); }
function ocr(subject, board, level, papers)    { return spec('OCR', subject, board, level, papers); }
function eduqas(subject, board, level, papers) { return spec('Eduqas', subject, board, level, papers); }
function edexcel(subject, board, level, papers) { return spec('Edexcel', subject, board, level, papers); }
function spec(source, subject, board, level, papers) {
  return { source, subject, board, level, papers: papers.map(([label, ...codes]) => {
    const opts = typeof codes[codes.length - 1] === 'object' ? codes.pop() : {};
    return { label, codes, ...opts };
  }) };
}


/* ── Reading the PDF ─────────────────────────────────────────────────────
 * unpdf is pdf.js packaged for serverless. It is ESM-only, hence the
 * dynamic import from this CommonJS module.
 *
 * What comes back is every text fragment with its page and position. Rows
 * are rebuilt by grouping fragments that share a baseline (±2pt), because a
 * timetable's columns arrive as separate fragments and the column a value
 * sits in is the only thing that says what it means.
 * ──────────────────────────────────────────────────────────────────────── */
async function readPdf(bytes) {
  const { getDocumentProxy } = await import('unpdf');
  const pdf = await getDocumentProxy(new Uint8Array(bytes));
  const pages = [];

  for (let p = 1; p <= pdf.numPages; p++) {
    const page = await pdf.getPage(p);
    const content = await page.getTextContent();
    const items = content.items
      .filter(it => it.str && it.str.trim())
      .map(it => ({ x: it.transform[4], y: it.transform[5], s: it.str.trim() }));
    pages.push({ page: p, width: page.view[2], items, lines: groupLines(items), rects: await rectsOf(page) });
  }
  return pages;
}

/* The bounding box of every path drawn on the page — table cells, mostly.
 * Only the Eduqas reader needs these. pdf.js hands each constructPath op a
 * [minX, minY, maxX, maxY] as its third argument; if a future pdf.js
 * changes that shape this returns [] and the Eduqas reader finds nothing,
 * which leaves those subjects for review rather than guessing. */
async function rectsOf(page) {
  try {
    const ops = await page.getOperatorList();
    const out = [];
    for (const args of ops.argsArray) {
      const b = Array.isArray(args) && args.length === 3 ? args[2] : null;
      if (!b || typeof b[0] !== 'number' || typeof b[3] !== 'number') continue;
      out.push({ x0: b[0], y0: b[1], x1: b[2], y1: b[3] });
    }
    return out;
  } catch (e) {
    return [];
  }
}

function groupLines(items) {
  const lines = [];
  for (const it of [...items].sort((a, b) => b.y - a.y)) {
    const line = lines.find(l => Math.abs(l.y - it.y) <= 2);
    if (line) line.cells.push(it);
    else lines.push({ y: it.y, cells: [it] });
  }
  lines.forEach(l => l.cells.sort((a, b) => a.x - b.x));
  return lines;
}


/* ── Dates ───────────────────────────────────────────────────────────── */

const MONTHS = { may: 5, june: 6, jun: 6 };
const WEEKDAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function isoDate(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));
  /* Reject 31 June rather than letting Date roll it over to 1 July. */
  if (d.getUTCMonth() !== month - 1 || d.getUTCDate() !== day) return null;
  return d.toISOString().slice(0, 10);
}

function weekdayOf(iso) {
  return WEEKDAYS[new Date(`${iso}T12:00:00Z`).getUTCDay()];
}


/* ── Per-board row readers ───────────────────────────────────────────────
 * Each returns [{ code, exam_date, session, duration, weekday?, title }].
 * They read only lines that START with an entry code, which is what the
 * "by subject" pages of the AQA and OCR documents look like. The "by date"
 * grid pages of the same documents put two codes on a line and no full
 * date, so they fall out naturally rather than needing to be skipped.
 * ──────────────────────────────────────────────────────────────────────── */

/* AQA: 7402/1 · Paper 1 · 2h · 07 June 2027 · pm */
function readAqa(pages) {
  const out = [];
  for (const { lines } of pages) {
    for (const { cells: all } of lines) {
      /* Option groups carry a side note ("Any 1 of") to the left of the
       * code column, so the code is not always the first fragment. */
      const at = all.slice(0, 2).findIndex(c => /^\d{4}\/[0-9A-Z]{1,3}(\/[A-Z])?$/.test(c.s));
      if (at < 0) continue;
      const cells = all.slice(at);
      const code = cells[0].s;
      const text = cells.map(c => c.s).join(' ');
      if (/submit by/i.test(text)) continue;                 // NEA deadline, not a sitting

      const m = text.match(/\b(\d{1,2})\s+(May|June)\s+(20\d\d)\b/i);
      const s = text.match(/\b(am|pm)\b\s*$/i);
      if (!m || !s) continue;

      out.push({
        code,
        exam_date: isoDate(+m[3], MONTHS[m[2].toLowerCase()], +m[1]),
        session:   s[1].toUpperCase(),
        duration:  durationIn(text.replace(code, '')),
        title:     cells[1]?.s || ''
      });
    }
  }
  return out;
}

/* OCR: H420/01 · Biological processes · 2 h 15 min · Mon · 7 June pm
 * No year on the date — it comes from the series — but there IS a weekday,
 * which is the best cross-check any board gives us. */
function readOcr(pages, year) {
  const out = [];
  for (const { lines } of pages) {
    for (const { cells } of lines) {
      const code = cells[0].s;
      if (!/^([A-Z]\d{3}\/\d{2}(-\d{2})?|Y\d{3})$/.test(code)) continue;
      const text = cells.map(c => c.s).join(' ');

      const m = text.match(/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s+(\d{1,2})\s+(May|June)\s+(am|pm)\s*$/i);
      if (!m) continue;

      out.push({
        code,
        exam_date: isoDate(year, MONTHS[m[3].toLowerCase()], +m[2]),
        session:   m[4].toUpperCase(),
        duration:  durationIn(text),
        weekday:   m[1].toLowerCase(),
        title:     cells[1]?.s || ''
      });
    }
  }
  return out;
}

/* Edexcel (Pearson): every sitting appears twice, once in the by-date
 * section and once by subject, both on one line:
 *
 *   Wednesday 12 May · 9PL0 01 · Politics · Paper 1: … · Morning · 2h 00m
 *   Politics · 9PL0 01 · Paper 1: … · Wednesday 12 May · Morning · 2h 00m
 *
 * Both are read. They are separate printings of the same fact, so the
 * "codes disagree" check in resolveSpecs catches a misread of either. */
function readEdexcel(pages, year) {
  const out = [];
  for (const { lines } of pages) {
    for (const { cells } of lines) {
      const codeCell = cells.find(c => /^[0-9][A-Z0-9]{3} [0-9A-Z]{2}(-[0-9A-Z]{2})?$/.test(c.s));
      if (!codeCell) continue;
      const text = cells.map(c => c.s).join(' ');

      const d = text.match(/\b(Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day\s+(\d{1,2})\s+(May|June)\b/i);
      const s = text.match(/\b(Morning|Afternoon)\b/i);
      if (!d || !s) continue;

      const i = cells.indexOf(codeCell);
      out.push({
        code:      codeCell.s.replace(' ', '/'),
        exam_date: isoDate(year, MONTHS[d[3].toLowerCase()], +d[2]),
        session:   /^m/i.test(s[1]) ? 'AM' : 'PM',
        duration:  durationIn(text.replace(codeCell.s, '')),
        weekday:   d[1].slice(0, 3).toLowerCase(),
        title:     (cells.slice(i + 1).find(c => /^Paper/i.test(c.s)) || cells[i + 1] || {}).s || ''
      });
    }
  }
  return out;
}

/* Eduqas/WJEC: a by-date grid only. Morning sittings in the left half,
 * afternoon in the right, and the date printed once in a middle-column cell
 * that spans every row of that day:
 *
 *     A520U10-1  Economics …  1h 30m  ┃         ┃ B290U10-1  Psychology …
 *     A700U10-1  English …    2h      ┃ Monday  ┃
 *     2410U10-1  Chemistry …  1h 30m  ┃ 10 May  ┃ 2500U10-1  Computer …
 *
 * The text alone cannot say where one day ends — the label is centred, and
 * wrapped subject names and page breaks throw any centring estimate off. The
 * drawn cell can: a code belongs to the day whose middle-column cell its
 * baseline falls inside. A cell must hold exactly one date label, and a code
 * outside every such cell is dropped, never attached to a neighbour. */
function readEduqas(pages, year) {
  const out = [];
  for (const { items, width, rects } of pages) {
    const mid = width / 2;

    const dates = items.filter(it => Math.abs(it.x - mid) < 40 && /^\d{1,2}\s+(May|June)$/i.test(it.s));
    if (!dates.length) continue;

    const dayCells = [];
    for (const r of rects) {
      if (r.x0 > mid || r.x1 < mid) continue;                 // must straddle the middle
      if (r.x1 - r.x0 < 40 || r.x1 - r.x0 > 120) continue;    // date column, not the whole row
      if (r.y1 - r.y0 < 15) continue;
      const inside = dates.filter(d => d.y > r.y0 && d.y < r.y1);
      if (inside.length !== 1) continue;
      const d = inside[0];
      const day = items.find(it => Math.abs(it.x - d.x) < 20 && d.y < it.y && it.y - d.y < 20
                                   && /^(Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day$/i.test(it.s));
      const [dd, mon] = d.s.split(/\s+/);
      dayCells.push({
        y0: r.y0, y1: r.y1,
        exam_date: isoDate(year, MONTHS[mon.toLowerCase()], +dd),
        weekday:   day ? day.s.slice(0, 3).toLowerCase() : null
      });
    }

    /* Some codes come out as three fragments — "C100UA0", "-", "1" — on one
     * baseline (every History option, in 2027). Rejoined here, so a code is
     * a code however the board's PDF writer chose to set it. */
    const split = items.filter(it => /^[A-Z0-9]\d{3}U[A-Z0-9]{2}$/.test(it.s)).flatMap(it => {
      const after = items.filter(o => Math.abs(o.y - it.y) <= 1 && o.x > it.x && o.x - it.x < 60).sort((a, b) => a.x - b.x);
      return after[0]?.s === '-' && /^\d$/.test(after[1]?.s || '') ? [{ ...it, s: `${it.s}-${after[1].s}` }] : [];
    });

    const codes = items.concat(split).filter(it => Math.abs(it.x - mid) > 30 && /^[A-Z0-9]\d{3}U[A-Z0-9]{2}-\d$/.test(it.s));
    for (const c of codes) {
      /* Cells are usually drawn twice (fill, then outline), so several
       * owners is normal — several owners that disagree on the date is not. */
      const owners = dayCells.filter(cell => c.y > cell.y0 && c.y < cell.y1);
      if (!owners.length || new Set(owners.map(o => o.exam_date)).size !== 1) continue;
      const cell = owners[0];

      const sameLine = items.filter(it => Math.abs(it.y - c.y) <= 2 && (it.x < mid) === (c.x < mid));
      const text = sameLine.sort((a, b) => a.x - b.x).map(it => it.s).join(' ');
      out.push({
        code:      c.s,
        exam_date: cell.exam_date,
        session:   c.x < mid ? 'AM' : 'PM',
        duration:  durationIn(text),
        weekday:   cell.weekday,
        title:     text.replace(c.s, '').trim()
      });
    }
  }
  return out;
}

function durationIn(text) {
  const m = text.match(/\b(\d{1,2})\s?h(?:\s?(\d{1,2})\s?m(?:in)?)?\b/i) || text.match(/\b(\d{1,3})\s?m(?:in)?\b/i);
  if (!m) return null;
  if (/h/i.test(m[0])) return +m[2] ? `${+m[1]}h ${+m[2]}m` : `${+m[1]}h`;     // "2h 00m" → "2h"
  return `${+m[1]}m`;
}

const READERS = { AQA: readAqa, OCR: readOcr, Eduqas: readEduqas, Edexcel: readEdexcel };


/* ── Resolving specs ─────────────────────────────────────────────────────
 * Turns the rows a reader found into exam_dates rows, one spec at a time.
 * A spec either resolves completely or not at all — a dashboard showing
 * Paper 1 and Paper 3 with no Paper 2 is worse than one still on last
 * year's config, because nothing about it looks unfinished.
 * ──────────────────────────────────────────────────────────────────────── */
function resolveSpecs(board, rows, year) {
  const byCode = new Map();
  for (const r of rows) {
    if (!byCode.has(r.code)) byCode.set(r.code, []);
    byCode.get(r.code).push(r);
  }

  const resolved = [];
  const failed   = [];

  for (const s of SPECS.filter(x => x.source === board)) {
    const out = [];
    const problems = [];

    /* A spec none of whose codes appear is simply not in this document —
     * AQA publishes GCSE and A-level separately. That is not a failure. */
    const anyPresent = s.papers.some(p => p.codes.some(c => byCode.has(c)));
    if (!anyPresent) continue;

    for (const p of s.papers) {
      const hits = p.codes.flatMap(c => byCode.get(c) || []);
      const missing = p.codes.filter(c => !byCode.has(c));
      if (missing.length) { problems.push(`${p.label}: ${missing.join(', ')} not found`); continue; }

      const slots = new Set(hits.map(h => `${h.exam_date}|${h.session}`));
      if (slots.size !== 1) { problems.push(`${p.label}: codes disagree (${[...slots].join(' / ')})`); continue; }

      const h = hits[0];
      const why = invalidDate(h, year) || hits.map(x => invalidDate(x, year)).find(Boolean);
      if (why) { problems.push(`${p.label}: ${why}`); continue; }

      out.push({
        subject:    s.subject,
        exam_board: s.board,
        level:      s.level,
        paper:      p.label,
        entry_code: p.codes.join(', '),
        exam_date:  h.exam_date,
        session:    h.session,
        /* Tiers and specs sharing a slot can run for different lengths
         * (French listening 35m F / 45m H). No duration beats a wrong one. */
        duration:   p.duration || (new Set(hits.map(x => x.duration)).size === 1 ? h.duration : null),
        series:     `summer-${year}`
      });
    }

    const key = `${s.subject} ${s.board} ${s.level === 'gcse' ? 'GCSE' : 'A-level'}`;
    if (problems.length) {
      failed.push({ key, problems, rows: s.papers.flatMap(p => p.codes.flatMap(c => byCode.get(c) || [])) });
    } else {
      resolved.push({ key, spec: s, rows: out });
    }
  }

  return { resolved, failed };
}

function invalidDate(row, year) {
  if (!row.exam_date) return 'date did not parse';
  const [y, m] = row.exam_date.split('-').map(Number);
  if (y !== year) return `${row.exam_date} is not in ${year}`;
  if (m !== 5 && m !== 6) return `${row.exam_date} is outside May/June`;
  const wd = weekdayOf(row.exam_date);
  if (wd === 'sat' || wd === 'sun') return `${row.exam_date} is a weekend`;
  if (row.weekday && row.weekday !== wd) return `${row.exam_date} is a ${wd}, the board printed ${row.weekday}`;
  if (row.session !== 'AM' && row.session !== 'PM') return 'no AM/PM session';
  return null;
}


/* ── The one call the cron makes ─────────────────────────────────────── */
async function extractFromPdf(board, bytes, year) {
  const reader = READERS[board];
  if (!reader) return { supported: false, resolved: [], failed: [], rows: [] };
  const pages = await readPdf(bytes);
  const rows = reader(pages, year);
  return { supported: true, rows, ...resolveSpecs(board, rows, year) };
}

module.exports = { SPECS, READERS, extractFromPdf, readPdf, resolveSpecs, invalidDate };
