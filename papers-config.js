/**
 * Past-paper data. Source: A-Level_Past_Papers_Official_1.docx + OCR PDFs.
 *
 * Every URL points to the official exam board's own domain — aqa.org.uk,
 * qualifications.pearson.com, ocr.org.uk, or eduqas.co.uk. No third-party
 * mirrors (PMT etc).
 *
 * Two shapes per board:
 *   - officialPageUrl (always present): the canonical official entry point.
 *     AQA, Pearson, Eduqas, and OCR (for most subjects) don't expose stable
 *     per-paper URLs — the assessment-resources / past-papers page IS the
 *     official entry point. The UI surfaces this as a single card per board.
 *   - papers (optional): a list of direct per-paper records when the board
 *     does publish stable PDF URLs. Each entry feeds paper-attempt.html.
 *
 * Each paper has either:
 *   - questions: full per-part data → enables the question-by-question stepper
 *   - no questions → only print-mode is offered on the attempt page
 *
 * Questions structure (per part):
 *   { code: '1(a)(i)', preamble?: string, figure?: {...}, prompt: string,
 *     marks: number, extended?: bool }
 * A "question" wraps related parts and may carry a `scenario` shown above
 * every part inside it.
 */
window.SUBJECTS = [
  {
    name: 'Computer Science',
    icon: '💻',
    boards: [
      { board: 'AQA', specCode: '7517',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/computer-science-and-it/a-level/computer-science-7516-7517/assessment-resources' },
      {
        board: 'OCR',
        specCode: 'H446',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/assessment/',
        papers: [
          {
            id: 'cs-ocr-h446-2022-p1',
            year: 'June 2022',
            paperName: 'Paper 1 — Computer Systems',
            paperCode: 'H446/01',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/676742-question-paper-computer-systems.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/676943-mark-scheme-computer-systems.pdf',
            questions: [
              {
                number: 1,
                scenario: "A charity uses a desktop computer to record financial donations that it receives. The computer contains a single core, 2.4GHz processor with 2MB cache.",
                parts: [
                  { code: '1(a)(i)', preamble: "The processor uses the Von Neumann architecture.",
                    prompt: "Describe what is meant by the term 'Von Neumann architecture'.", marks: 2 },
                  { code: '1(a)(ii)', preamble: "The processor uses the Von Neumann architecture.",
                    prompt: "Give one way that the Harvard architecture differs from the Von Neumann architecture.", marks: 1 },
                  { code: '1(b)',
                    preamble: "The charity is concerned that the performance of the computer is not sufficient and wishes to replace the processor.",
                    prompt: "Give two features of a replacement processor that would increase the typical performance of the computer.", marks: 2 },
                  { code: '1(c)(i)',
                    preamble: "Fig. 1 shows assembly code written using the Little Man Computer (LMC). The program calculates and outputs the total amount that is donated to the charity in any particular day. Depending on the amount, an additional bonus may be added to each amount donated.",
                    figure: { type: 'code', label: 'Fig. 1',
                      content: "start    INP\n         STA donation\n         SUB hundred\n         BRP bonus\nnobonus  LDA total\n         ADD donation\n         STA total\n         OUT\n         BRA start\nbonus    LDA total\n         ADD donation\n         ADD twenty\n         STA total\n         OUT\n         BRA start\nhundred  DAT 100\ntwenty   DAT 20\ndonation DAT 0\ntotal    DAT 0" },
                    prompt: "The program shown in Fig. 1 is run once using three different inputs. Therefore, while the program is running once, it will output the updated total three times.\n\nGive the total values that are output when the values 10, 50 and 120 are input into this program.", marks: 3 },
                  { code: '1(c)(ii)',
                    figure: { type: 'code', label: 'Fig. 1 (reference)',
                      content: "start    INP\n         STA donation\n         SUB hundred\n         BRP bonus\nnobonus  LDA total\n         ADD donation\n         STA total\n         OUT\n         BRA start\nbonus    LDA total\n         ADD donation\n         ADD twenty\n         STA total\n         OUT\n         BRA start\nhundred  DAT 100\ntwenty   DAT 20\ndonation DAT 0\ntotal    DAT 0" },
                    prompt: "Write LMC code that will reset the value of the memory location labelled `total` to zero and then stop the program.", marks: 4 },
                  { code: '1(c)(iii)',
                    preamble: "This program is run on a processor that allows pipelining.",
                    prompt: "Define the term 'pipelining'.", marks: 3 },
                  { code: '1(c)(iv)',
                    prompt: "Explain one benefit to the charity of using a processor that allows pipelining.", marks: 2 },
                  { code: '1(d)(i)',
                    preamble: "The processor contains registers including the accumulator and the program counter. The contents of these registers are modified during the Fetch-Decode-Execute cycle.",
                    prompt: "Describe how the accumulator is used during the Fetch-Decode-Execute cycle.", marks: 2 },
                  { code: '1(d)(ii)',
                    preamble: "The processor contains registers including the accumulator and the program counter. The contents of these registers are modified during the Fetch-Decode-Execute cycle.",
                    prompt: "Describe how the program counter is used during the Fetch-Decode-Execute cycle.", marks: 2 },
                  { code: '1(d)(iii)',
                    prompt: "State the name of three other registers that are used during the Fetch-Decode-Execute cycle.", marks: 3 },
                  { code: '1(e)', extended: true,
                    prompt: "The charity has several desktop computers in their office that use a CISC processor. They are considering buying mobile devices for their staff to use when they are not in the office.\n\nDiscuss whether these mobile devices should use the same CISC processors that are used in their desktop computers or if they should use a RISC processor instead.\n\nYou should include the following in your answer:\n• the difference between each processor type\n• the suitability of each processor type for mobile devices.", marks: 12 }
                ]
              },
              {
                number: 2,
                scenario: "A video streaming service uses a relational database. An extract of the data from two tables from this database is shown in Fig. 2.\n\n`Membership` contains data about current memberships that customers hold and `Package` contains data about different streaming packages available.",
                scenarioFigures: [
                  { type: 'table', label: 'Membership',
                    headers: ['Username', 'FirstName', 'StartDate', 'PackageType'],
                    rows: [
                      ['User001', 'Amaya',  '08/05/2016', 'Premium'],
                      ['User002', 'Amit',   '06/06/2019', 'Basic'],
                      ['User003', 'Tom',    '17/08/2019', 'Free'],
                      ['User004', 'Kareem', '08/08/2017', 'Basic'],
                      ['User005', 'Sarah',  '25/03/2020', 'Premium']
                    ] },
                  { type: 'table', label: 'Package',
                    headers: ['PackageType', 'CostPerMonth(£)', 'Adverts'],
                    rows: [
                      ['Premium', '12.99', 'false'],
                      ['Basic',   '7.99',  'true'],
                      ['Free',    '0.00',  'true']
                    ] }
                ],
                parts: [
                  { code: '2(a)(i)', prompt: "State what is meant by the term 'primary key'.", marks: 1 },
                  { code: '2(a)(ii)', prompt: "Identify the foreign key used in the database and the table name where this is a foreign key.", marks: 2 },
                  { code: '2(a)(iii)', prompt: "Identify the data type of the `CostPerMonth(£)` field.", marks: 1 },
                  { code: '2(a)(iv)', prompt: "Give the name of the field that could be stored using a Boolean data type.", marks: 1 },
                  { code: '2(b)',
                    preamble: "The `Adverts` field indicates if customers will be shown adverts. `true` indicates that customers will be shown adverts, and `false` indicates that adverts are not shown.",
                    prompt: "Write Structured Query Language (SQL) to return the `Username` and `FirstName` fields for all customers who see adverts.", marks: 5 },
                  { code: '2(c)(i)',
                    preamble: "When new customers join the streaming service, their name, email address and contact details are captured so that they can be entered into the database.",
                    prompt: "Identify one method of capturing a new customer's personal data, describing why this method is suitable.", marks: 3 },
                  { code: '2(c)(ii)',
                    preamble: "Sometimes the company may need to move or backup its data they hold about customers.",
                    prompt: "Identify two methods of exchanging data with other computer systems.", marks: 2 },
                  { code: '2(d)(i)',
                    preamble: "The database supports ACID transactions. ACID stands for Atomicity, Consistency, Isolation and Durability.",
                    prompt: "Describe what is meant by a transaction being durable.", marks: 2 },
                  { code: '2(d)(ii)', prompt: "Give one way that durability can be achieved for a completed transaction.", marks: 1 },
                  { code: '2(d)(iii)', prompt: "Explain how record locking can be used to ensure that the ACID principle of isolation is achieved when carrying out multiple transactions.", marks: 3 },
                  { code: '2(d)(iv)', prompt: "Give one disadvantage of using record locking.", marks: 1 },
                  { code: '2(e)',
                    preamble: "The Copyright Designs and Patents Act 1988 applies to all videos that are streamed.",
                    prompt: "Explain how this act applies to the videos.", marks: 2 },
                  { code: '2(f)',
                    preamble: "All videos that are streamed are compressed. Customers have the option to choose from watching the videos with lossy compression or lossless compression.",
                    prompt: "Explain how this choice will impact the customer.", marks: 5 },
                  { code: '2(g)(i)',
                    preamble: "A program is written using an object-oriented programming paradigm and uses a class called `video` to organise the videos that are streamed to customers. The class `video` has these attributes:\n• name\n• number of views\n• star rating.\n\nThe constructor method will set the name attribute to the name that is passed in as a parameter. The constructor will also initially set the number of views to 0 and the star rating to 3.",
                    prompt: "Write program code or pseudocode to declare the class `video` and initialise the required attributes as private.\n\nYou should include both the attribute definitions and the constructor method in your answer.", marks: 7 },
                  { code: '2(g)(ii)',
                    preamble: "A public method called `updateviews()` will update the number of views after a video has been viewed. This method is defined inside the `video` class.",
                    prompt: "Write program code or pseudocode for the method `updateviews()` to increase the number of views by one.", marks: 2 }
                ]
              },
              {
                number: 3,
                parts: [
                  { code: '3(a)(i)', prompt: "Convert the hexadecimal value **B7E** to a binary number.", marks: 1 },
                  { code: '3(a)(ii)',
                    preamble: "110010101 is a binary number that is represented using sign and magnitude.",
                    prompt: "Convert this binary number to a denary number.", marks: 1 },
                  { code: '3(a)(iii)',
                    figure: { type: 'code', label: 'Subtraction',
                      content: "  0110 1101  –\n  0011 0100" },
                    prompt: "Complete this binary subtraction. Both numbers are 8-bit integer values represented using two's complement.\n\nShow the result in the same format and show your working.", marks: 3 },
                  { code: '3(b)',
                    prompt: "The normalised floating point number `1010 1110` is stored using 4 bits for the mantissa and 4 bits for the exponent, both in two's complement.\n\nGive the denary version of this number, showing your working.", marks: 4 },
                  { code: '3(c)',
                    figure: { type: 'table', label: 'Table 3',
                      headers: ['Binary number', 'Normalised', 'Not normalised'],
                      rows: [
                        ['010101 100', '☐', '☐'],
                        ['110101 111', '☐', '☐'],
                        ['011010 010', '☐', '☐'],
                        ['101010 110', '☐', '☐']
                      ] },
                    preamble: "Table 3 here shows floating point numbers that are stored using 6 bits for the mantissa and 3 bits for the exponent, both in two's complement.",
                    prompt: "Tick (✓) one box in each row to state whether each number is normalised or not normalised.", marks: 4 }
                ]
              },
              {
                number: 4,
                parts: [
                  { code: '4', extended: true,
                    preamble: "Amit is studying Computer Science at university. He has been asked to write an assignment on Artificial Intelligence (AI).",
                    prompt: "Discuss the extent to which you think computer systems will inherit the biases and discrimination of their programmers as the use of AI increases.\n\nYou should include the following in your answer:\n• the meaning of AI\n• examples of when AI may be affected by bias\n• the measures that can be taken to prevent people being affected by bias in AI.", marks: 9 }
                ]
              },
              {
                number: 5,
                scenario: "A programmer creates this function shown in Fig. 5 using a high-level language.",
                scenarioFigures: [
                  { type: 'code', label: 'Fig. 5',
                    content: "function mystery(x,y)\n    total = x + y\n    while x >= 10 then\n        x = x - 10\n        y = y - 10\n        total = total + x + y\n    endwhile\n    return total\nendfunction" }
                ],
                parts: [
                  { code: '5(a)(i)',  prompt: "State the value output by the line `print(mystery(10,20))`", marks: 1 },
                  { code: '5(a)(ii)', prompt: "State the value output by the line `print(mystery(0,70))`", marks: 1 },
                  { code: '5(a)(iii)', prompt: "State the value output by the line `print(mystery(45,55))`", marks: 1 },
                  { code: '5(b)(i)',
                    preamble: "Before the code in Fig. 5 can be executed, a translator must be used.",
                    prompt: "State the purpose of a translator.", marks: 1 },
                  { code: '5(b)(ii)', prompt: "Explain two differences between a compiler and an interpreter.", marks: 4 },
                  { code: '5(c)',
                    figure: { type: 'table', label: 'Table 5',
                      headers: ['', 'Lexical analysis', 'Syntax analysis', 'Code generation'],
                      rows: [
                        ['Comments and whitespace are removed', '☐', '☐', '☐'],
                        ['Keywords are replaced with tokens', '☐', '☐', '☐'],
                        ['Object code is created', '☐', '☐', '☐'],
                        ['Symbol table created for variables', '☐', '☐', '☐'],
                        ['Builds an abstract syntax tree', '☐', '☐', '☐']
                      ] },
                    prompt: "For each statement shown in Table 5, tick (✓) one box in each row to indicate which stage of compilation each action takes place at.", marks: 5 },
                  { code: '5(d)', prompt: "Describe the purpose of code optimisation.", marks: 2 },
                  { code: '5(e)(i)',
                    preamble: "The programmer creates another function to count and return how many capital letters are in a string that is passed into the function as a parameter.\n\nThe `asc()` function takes in a character and returns its ASCII value. For example `asc(\"A\")` returns 65. Capital letters have ASCII values between 65 and 90 inclusive.",
                    figure: { type: 'code', label: 'Function to complete',
                      content: "function countCapitals(text)\n    // initialise counter to 0\n    capCount = 0\n    // loop through each character in the string passed in\n    for x = 0 to text.length-1\n        c = text.subString(x, 1)\n        // check if character is a capital\n        if asc(c) >= 65 _______________________\n            // if so, increment counter\n            _______________________\n        endif\n    next x\n    _______________________\nendfunction" },
                    prompt: "Complete the function above by filling in the three blanks.", marks: 3 },
                  { code: '5(e)(ii)',  prompt: "Give one similarity between ASCII and Unicode.", marks: 1 },
                  { code: '5(e)(iii)', prompt: "Give two differences between ASCII and Unicode.", marks: 2 },
                  { code: '5(f)', extended: true,
                    prompt: "The programmer has been asked by a client to create a complex computer program. Compare the spiral model and waterfall lifecycle methodologies for this task.\n\nYou should include the following in your answer:\n• how both methodologies could be used to develop a complex computer program\n• the benefits of each methodology for this task\n• the drawbacks of each methodology for this task.", marks: 9 }
                ]
              },
              {
                number: 6,
                scenario: "Anika's computer runs a multi-tasking operating system. She has access to a printer and a broadband internet connection through a wireless connection. The operating system uses scheduling algorithms such as first come first served and round-robin.",
                parts: [
                  { code: '6(a)(i)',  prompt: "Explain why the computer's operating system uses a first come first served algorithm when sending documents to the printer.", marks: 2 },
                  { code: '6(a)(ii)', prompt: "Explain why the computer's operating system uses a round-robin algorithm for allocating processor time.", marks: 3 },
                  { code: '6(a)(iii)', prompt: "Describe one other scheduling algorithm.", marks: 2 },
                  { code: '6(b)(i)',
                    preamble: "Anika uses an encrypted messaging program to communicate with her friends. The computer uses the TCP/IP stack.",
                    prompt: "Explain what happens at the application layer of the TCP/IP stack when using this program.", marks: 5 },
                  { code: '6(b)(ii)', prompt: "Explain what happens at the link layer (sometimes referred to as the 'network interface layer', 'network access layer' or simply the 'network layer') of the TCP/IP stack when using this program.", marks: 2 }
                ]
              }
            ]
          },
          {
            id: 'cs-ocr-h446-2022-p2',
            year: 'June 2022',
            paperName: 'Paper 2 — Algorithms and Programming',
            paperCode: 'H446/02',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/676743-question-paper-algorithms-and-programming.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/676944-mark-scheme-algorithms-and-programming.pdf'
            // No `questions` array yet — only print-mode attempt available
            // until P2 is read and extracted (planned follow-up).
          }
        ]
      }
    ]
  },
  {
    name: 'Mathematics', icon: '📐',
    boards: [
      { board: 'AQA', specCode: '7357',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9MA0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.html' },
      { board: 'OCR A', specCode: 'H240',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/assessment/' }
    ]
  },
  {
    name: 'Further Mathematics', icon: '∑',
    boards: [
      { board: 'AQA', specCode: '7367',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/mathematics/a-level/further-mathematics-7367/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9FM0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/further-mathematics-2017.html' },
      { board: 'OCR A', specCode: 'H245',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/further-mathematics-a-h235-h245-from-2017/assessment/' },
      { board: 'OCR B (MEI)', specCode: 'H645',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/further-mathematics-b-mei-h635-h645-from-2017/assessment/' }
    ]
  },
  {
    name: 'Physics', icon: '⚛',
    boards: [
      { board: 'AQA', specCode: '7408',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9PH0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/physics-2015.html' },
      { board: 'OCR A', specCode: 'H556',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/assessment/' },
      { board: 'OCR B (Advancing Physics)', specCode: 'H557',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/physics-b-advancing-physics-h157-h557-from-2015/assessment/' }
    ]
  },
  {
    name: 'Biology', icon: '🧬',
    boards: [
      { board: 'AQA', specCode: '7402',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/biology/a-level/biology-7402/assessment-resources' },
      { board: 'Edexcel A (Salters-Nuffield)', specCode: '9BN0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/biology-a-2015.html' },
      { board: 'Edexcel B', specCode: '9BI0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/biology-b-2015.html' },
      { board: 'OCR A', specCode: 'H420',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/biology-a-h020-h420-from-2015/assessment/' },
      { board: 'OCR B (Advancing Biology)', specCode: 'H422',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/biology-b-advancing-biology-h022-h422-from-2015/assessment/' }
    ]
  },
  {
    name: 'Chemistry', icon: '⚗',
    boards: [
      { board: 'AQA', specCode: '7405',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/chemistry/a-level/chemistry-7405/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9CH0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/chemistry-2015.html' },
      { board: 'OCR A', specCode: 'H432',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-a-h032-h432-from-2015/assessment/' },
      { board: 'OCR B (Salters)', specCode: 'H433',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-b-salters-h033-h433-from-2015/assessment/' }
    ]
  },
  {
    name: 'Economics', icon: '💹',
    boards: [
      { board: 'AQA', specCode: '7136',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/economics/a-level/economics-7135-7136/assessment-resources' },
      { board: 'Edexcel A', specCode: '9EC0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-a-2015.html' },
      { board: 'Edexcel B', specCode: '9EB0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/economics-b-2015.html' },
      { board: 'OCR', specCode: 'H460',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/economics-h060-h460-from-2015/assessment/' }
    ]
  },
  {
    name: 'Geography', icon: '🌍',
    boards: [
      { board: 'AQA', specCode: '7037',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/geography/a-level/geography-7037/assessment-resources' },
      { board: 'Edexcel (Pearson)', specCode: '9GE0',
        officialPageUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/geography-2016.html' },
      { board: 'Eduqas (WJEC)', specCode: 'A110QS',
        officialPageUrl: 'https://www.eduqas.co.uk/qualifications/geography-as-a-level/',
        note: "Eduqas requires a free account to download papers (their official policy)." },
      { board: 'OCR', specCode: 'H481',
        officialPageUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/geography-h081-h481-from-2016/assessment/' }
    ]
  }
];

// Flatten every direct paper across subjects/boards for paper-attempt.html lookups.
window.PAPERS = window.SUBJECTS.flatMap(subj =>
  subj.boards.flatMap(board =>
    (board.papers || []).map(p => ({
      ...p,
      subject: subj.name,
      board:   board.board,
      specCode: p.paperCode || board.specCode,
      level:   'A-level',
      description: `${board.board} ${board.specCode} — ${p.paperName}.`
    }))
  )
);

window.findPaper = function (id) {
  return (window.PAPERS || []).find(p => p.id === id) || null;
};

// Flat list of leaf parts for a paper, for the qbq stepper.
window.paperParts = function (paper) {
  if (!paper || !Array.isArray(paper.questions)) return [];
  const out = [];
  paper.questions.forEach(q => {
    (q.parts || []).forEach(p => {
      out.push({
        ...p,
        questionNumber: q.number,
        scenario: q.scenario || '',
        scenarioFigures: q.scenarioFigures || []
      });
    });
  });
  return out;
};
