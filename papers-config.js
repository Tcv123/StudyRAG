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
            ],
            // Mark scheme content for every part, copied from the official OCR
            // H446/01 June 2022 mark scheme. Used by /api/mark-against-scheme
            // to ground the AI marker on real OCR criteria.
            //   type:'points'  — short-answer or list. AI checks each point
            //                    and awards 1 mark per point covered, up to
            //                    the part's max marks.
            //   type:'exact'   — fact recall. AI matches against the listed
            //                    canonical answers exactly (allowing minor
            //                    variants noted in guidance).
            //   type:'levels'  — extended response. AI picks a level band
            //                    using the descriptors, weighted against the
            //                    AO1/AO2/AO3 indicative content.
            markSchemes: {
              '1(a)(i)': { type: 'points',
                points: [
                  'Both data and instructions share the same memory',
                  'Instructions and Data stored in same format',
                  'A single set of buses / same bus for instructions & data (to connect CPU to Memory and I/O)',
                  'Has a (single) control unit',
                  'Has an ALU',
                  'Has ways to input and output',
                  'Has access to storage',
                  'Works sequentially through instructions / follows Fetch-execute cycle',
                  '(Special) registers within CPU',
                  'Based on stored program concept'
                ],
                guidance: '1 mark per point, up to a max of 2.' },
              '1(a)(ii)': { type: 'points',
                points: [
                  'Separate memory for data and instructions / multiple memory units',
                  'Different (sets of) buses one for instructions & one for data / instructions and data can be accessed concurrently'
                ],
                guidance: '1 mark.' },
              '1(b)': { type: 'points',
                points: [
                  'Higher / faster clock speed',
                  'More cores / dual / quad core etc',
                  'More cache memory',
                  'Use of pipelining',
                  'Use of simultaneous multithreading (SMT)'
                ],
                guidance: 'Answers must refer to an improvement (more / higher / faster) not just "change the clock speed". Allow discussions of L1/L2 cache sizes for one mark. Do NOT accept RISC/CISC. Max 2 marks.' },
              '1(c)(i)': { type: 'exact',
                points: ['10', '60', '200'],
                guidance: '1 mark per number. Must be in the order 10, 50, 120 was entered (so outputs are 10, 60, 200).' },
              '1(c)(ii)': { type: 'points',
                points: [
                  'Loads a value into the accumulator (e.g. LDA, INP)',
                  'Establishes a zero value (e.g. via DAT 0 or SUB total)',
                  'Stores a zero value into total (STA total — case sensitive)',
                  'Program stops (HLT)'
                ],
                guidance: 'Two example solutions: (Example 1) LDA zero / STA total / HLT / zero DAT 0. (Example 2) LDA total / SUB total / STA total / HLT. BP4 (HLT) must NOT be given if HLT is placed AFTER a DAT line (causes the zero to be fetched as an instruction).' },
              '1(c)(iii)': { type: 'points',
                points: [
                  'One instruction can be fetched while another is being decoded',
                  '…and another is executed',
                  'The output of one process/instruction is the input of the next',
                  'Concurrent processing of multiple instructions / completing multiple FDE cycles at once'
                ],
                guidance: 'BP1 allow any 2 of the 3 parts of the FDE cycle. BP2 must give the OTHER part of the FDE not given in BP1. Do not award if explaining multiple cores working on different parts of FDE.' },
              '1(c)(iv)': { type: 'points',
                points: [
                  'More instructions can be carried out in a set amount of time / less time to execute the same number of instructions',
                  'Increases speed/performance/efficiency of the computer/program (must be specific to the charity, e.g. processing more donations)'
                ],
                guidance: 'Do not allow "each instruction is quicker to execute". BP2 must be specific to the charity context.' },
              '1(d)(i)': { type: 'points',
                points: [
                  'Holds all input/output',
                  'Holds results of calculations (from the ALU)',
                  'Checked for conditional branching (e.g. BRZ)',
                  'Stores data which has come from the MDR/RAM'
                ],
                guidance: '1 mark per point, max 2.' },
              '1(d)(ii)': { type: 'points',
                points: [
                  'Holds the address/location of the next instruction to be executed/fetched',
                  'Contents copied to the MAR at start of FDE',
                  'Incremented (by one) on every cycle',
                  'Can be changed by branch/jump instructions'
                ],
                guidance: '1 mark per point, max 2.' },
              '1(d)(iii)': { type: 'exact',
                points: [
                  'Memory Address Register / MAR',
                  'Memory Data Register / MDR (allow Memory Buffer Register)',
                  'Current Instruction Register / CIR',
                  'Index Register / IR'
                ],
                guidance: '1 mark per register named. Max 3.' },
              '1(e)': { type: 'levels',
                levels: [
                  { range: [9, 12], descriptor: 'High Level',
                    criteria: 'Thorough knowledge and understanding of both CISC and RISC. Material generally accurate and detailed. Knowledge applied directly and consistently to the mobile-device context with explicit examples. Thorough, well-balanced discussion with consistently relevant evaluation. Well-developed line of reasoning, clear and logically structured.' },
                  { range: [5, 8], descriptor: 'Mid Level',
                    criteria: 'Reasonable knowledge of CISC and/or RISC; generally accurate but at times underdeveloped. Knowledge applied to the context though one or two opportunities missed. Sound, mostly-focused discussion with for-the-most-part appropriate evaluation. Line of reasoning with some structure.' },
                  { range: [1, 4], descriptor: 'Low Level',
                    criteria: 'Basic knowledge of CISC or RISC with some inaccuracies. Limited application to context. Narrow discussion, weak unsubstantiated judgments. Basic, unstructured information.' }
                ],
                indicative: {
                  AO1: 'CISC is a complex instruction set, traditional processor design, many instructions some rarely used. RISC is a reduced set, fewer instructions used regularly, RISC has fewer transistors / less complex circuitry, RISC instructions take one cycle whereas CISC may take several. RISC compilers need to be more complex than CISC compilers.',
                  AO2: 'CISC mobile would run the same software as the desktop machines but be less power efficient, requiring larger battery and cooling, and be more expensive to purchase. RISC requires software written specifically for it (cannot use CISC instructions), is more power efficient, requires less cooling and smaller battery / longer battery life. RISC devices may need greater RAM as programs are larger.',
                  AO3: 'CISC for mobile saves money on software and increases compatibility but costs more, is physically larger (heat sink/larger battery) and/or has shorter battery life. RISC requires software investment but is cheaper, lighter, better battery life. Some compatibility issues can be reduced with emulators and translators.'
                },
                guidance: '12 marks total. AO1.1 (2), AO1.2 (2), AO2.1 (3), AO3.3 (5). 0 marks if no attempt or not worthy of credit.' },

              '2(a)(i)': { type: 'points',
                points: ['Field that is unique / does not repeat'],
                guidance: '1 mark.' },
              '2(a)(ii)': { type: 'exact',
                points: ['Foreign Key: PackageType', 'Table Name: Membership'],
                guidance: 'Both must be spelled correctly. 1 mark each.' },
              '2(a)(iii)': { type: 'exact',
                points: ['Float', 'Floating Point', 'Real', 'Currency', 'Double', 'Single', 'Decimal'],
                guidance: 'Any one of these. 1 mark.' },
              '2(a)(iv)': { type: 'exact',
                points: ['Adverts'],
                guidance: 'CAO — Correct Answer Only. 1 mark.' },
              '2(b)': { type: 'points',
                points: [
                  'Username and FirstName fields (and no others) selected correctly using SELECT keyword',
                  'Membership / both tables correctly selected using FROM keyword',
                  'Tables joined using correct JOIN / INNER JOIN keywords OR tables joined using correct WHERE clause',
                  'Fields use table identifiers before them (e.g. Membership.PackageType, not just PackageType)',
                  'WHERE clause used to correctly show only records where Adverts = true (with AND if WHERE was used to join)'
                ],
                guidance: 'For full marks a fully correct working answer must be provided. Example 1: SELECT Username, FirstName FROM Membership JOIN Package on Membership.PackageType = Package.PackageType WHERE Adverts = true. Example 2: SELECT Username, FirstName FROM Membership, Package WHERE Membership.PackageType = Package.PackageType AND Adverts = true. Spellings of all field/table/keyword names must be accurate but only penalise once.' },
              '2(c)(i)': { type: 'points',
                points: [
                  'Form / web form',
                  'Can use validation to check for common errors',
                  'Can check for duplicate values',
                  'Data can be entered direct into the database / limited manual processing',
                  'Can be done from remote locations'
                ],
                guidance: 'One mark MAX for identification of method; two marks for discussion of suitability. Accept other valid methods. Do NOT accept OCR / OMR / barcodes / QR codes. If method is incorrect, do not read on.' },
              '2(c)(ii)': { type: 'exact',
                points: ['CSV', 'JSON', 'XML', 'SQL', 'APIs', 'EDI', 'RSS', 'SOAP'],
                guidance: '1 mark per method identified, max 2.' },
              '2(d)(i)': { type: 'points',
                points: [
                  '(Committed) data/transaction is not lost',
                  '…in case of power / system failure'
                ],
                guidance: '1 mark per point.' },
              '2(d)(ii)': { type: 'points',
                points: ['Completed transactions stored in secondary storage / data not stored long-term in RAM/cache'],
                guidance: '1 mark.' },
              '2(d)(iii)': { type: 'points',
                points: [
                  'The outcome of concurrent transactions is the same as if transactions were completed sequentially',
                  'Record locking allows one user/process to access/modify record level data at any one time',
                  'So data that is being used elsewhere cannot be modified / data that is being modified elsewhere cannot be used (allow reference to lost updates / dirty reads / phantom reads)'
                ],
                guidance: '1 mark per point, max 3.' },
              '2(d)(iv)': { type: 'points',
                points: ['Can cause delays (as users wait for access)', 'Can cause deadlock'],
                guidance: '1 mark, either one.' },
              '2(e)': { type: 'points',
                points: [
                  'Copyright assigned to owner of video automatically on creation',
                  'Makes it illegal to copy/distribute videos as your own / without permission',
                  'Copyright holder can ask for their work to be removed from the streaming platform',
                  'Membership/licence gives subscribers the agreement to view videos',
                  'Which may restrict their use (e.g. to whom it is shown or geographical location from which it is accessed)'
                ],
                guidance: '1 mark per point, max 2.' },
              '2(f)': { type: 'points',
                points: [
                  'Lossy permanently removes data',
                  'Lossless rewrites original data in a more efficient format',
                  'Lossless is able to recreate the original file / Lossy is not',
                  'Lossy reduces quality of videos / Lossless keeps original quality',
                  'Lossy file size is smaller than if lossless were used',
                  'Lossy: compression ratio may be adjusted depending on bandwidth',
                  'Resulting in a noticeable decrease in quality on slower connections',
                  'Lossy: the video will buffer less / quicker to start watching / Lossless: the video will buffer more / slower to start'
                ],
                guidance: 'Max 5 marks. Do not allow answers relating to speed of download unless this clearly refers to the video starting or reduction in buffering — scenario is streamed not downloaded.' },
              '2(g)(i)': { type: 'points',
                points: [
                  'Class definition with identifier video',
                  'name, number of views and star rating attributes defined',
                  '…as private',
                  'Constructor method definition inside class definition',
                  '…that accepts only one parameter',
                  '…name attribute set to parameter passed in',
                  'Views set to 0 and rating set to 3 either when initialised or in constructor'
                ],
                guidance: 'Accept implementations in high-level languages (Python __ for private, class name used for constructor, no need for end of class definition in Python). BP1 allow empty brackets, not anything in the brackets. BP5 ignore self if included as parameter.' },
              '2(g)(ii)': { type: 'points',
                points: [
                  'Method definition that is public',
                  'View attribute incremented by one'
                ],
                guidance: 'View attribute must have the same name as part i.' },

              '3(a)(i)': { type: 'exact',
                points: ['1011 0111 1110', '101101111110'],
                guidance: 'CAO. 1 mark.' },
              '3(a)(ii)': { type: 'exact',
                points: ['-149', '−149'],
                guidance: 'CAO. 1 mark.' },
              '3(a)(iii)': { type: 'points',
                points: [
                  'Correct left hand nibble (0011) — CAO',
                  'Correct right hand nibble (1001) — CAO',
                  'Working clearly shown (borrowing across columns, or making the second number negative and adding)'
                ],
                guidance: 'Final answer: 0011 1001. Answer must be 8 bits to achieve full marks. No marks if only working is in denary.' },
              '3(b)': { type: 'points',
                points: [
                  'Exponent is -2',
                  'Move decimal place 2 places left',
                  'Fill with 1s giving 1.1101',
                  'Denary answer is -0.1875 / −3⁄16'
                ],
                guidance: 'Accept alternative method of -0.75 × 2^-2: BP2 credited for -0.75, BP3 credited for multiplying by 2^-2. Correct answer with valid working gets full marks.' },
              '3(c)': { type: 'exact',
                points: [
                  '010101 100 → Normalised',
                  '110101 111 → Not normalised',
                  '011010 010 → Normalised',
                  '101010 110 → Normalised'
                ],
                guidance: '1 mark per row. No mark if both/neither box ticked. Accept other marks that clearly indicate choice (e.g. X).' },

              '4': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'High Level',
                    criteria: 'Thorough knowledge of AI, machine learning and how biases can be inherited. Generally accurate and detailed. Direct application to the context with explicit examples. Thorough, well-balanced discussion; consistently relevant evaluation. Well-developed reasoning.' },
                  { range: [4, 6], descriptor: 'Mid Level',
                    criteria: 'Reasonable knowledge, generally accurate but at times underdeveloped. Direct application to context though one or two opportunities missed. Sound mostly-focused discussion; for-the-most-part appropriate evaluation.' },
                  { range: [1, 3], descriptor: 'Low Level',
                    criteria: 'Basic knowledge with inaccuracies. Limited application. Narrow discussion, weak judgments. Basic, unstructured information.' }
                ],
                indicative: {
                  AO1: 'AI: computer systems performing tasks that normally require human intelligence; generally programmed. Machine learning: machine improves its performance/output through experience/access to data; a subset of AI.',
                  AO2: 'AI follows programming, so if a program contains biases the AI outcomes will too. Programmers must be aware of this and tackle it during design/implementation/testing. ML bias depends on the data given; larger data sets are generally more inclusive but must be aware of data that is itself biased.',
                  AO3: 'Thorough testing, multiple programmers and scrutiny of data sets are essential. If not considered thoroughly, biases will certainly be inherited. Datasets need to be large enough to be representative but not so large that the data cannot be checked.'
                },
                guidance: '9 marks total. AO1.1 (2), AO1.2 (2), AO2.1 (2), AO3.3 (3). 0 marks if no attempt or not worthy of credit.' },

              '5(a)(i)':  { type: 'exact', points: ['40'],  guidance: 'CAO. 1 mark.' },
              '5(a)(ii)': { type: 'exact', points: ['70'],  guidance: 'CAO. 1 mark.' },
              '5(a)(iii)':{ type: 'exact', points: ['300'], guidance: 'CAO. 1 mark.' },
              '5(b)(i)': { type: 'points',
                points: ['To convert (high-level or assembly) code to low level / machine code'],
                guidance: 'Do not allow answers referring to "making the program executable" — given in the question.' },
              '5(b)(ii)': { type: 'points',
                points: [
                  'Compiler translates code all at once / before it is executed',
                  'Interpreter translates code line by line / during runtime',
                  'Compiler produces executable file for reuse / doesn\'t need re-translating each run',
                  'Interpreter needs to re-translate next time the program is run',
                  'Compiler lists all errors / compiled code doesn\'t run if there are any',
                  'Interpreter stops at the first error',
                  'Compiled programs have the source code hidden',
                  'Interpreted programs have the source code visible'
                ],
                guidance: 'Mark answers in pairs (one compiler, one interpreter). Max 2 marks per answer space, total 4 marks.' },
              '5(c)': { type: 'exact',
                points: [
                  'Comments and whitespace are removed → Lexical analysis',
                  'Keywords are replaced with tokens → Lexical analysis',
                  'Object code is created → Code generation',
                  'Symbol table created for variables → Lexical analysis',
                  'Builds an abstract syntax tree → Syntax analysis'
                ],
                guidance: '1 mark per row. No mark if more than one or no box is ticked.' },
              '5(d)': { type: 'points',
                points: [
                  'To make the program run faster / code is more efficient',
                  'To make the program use fewer resources / less memory'
                ],
                guidance: '1 mark per point, max 2.' },
              '5(e)(i)': { type: 'points',
                points: [
                  'and asc(c) <= 90  (or  and asc(c) < 91)',
                  'capCount = capCount + 1  (or capCount++ or capCount += 1)',
                  'return capCount  (or assign to function identifier, depending on language)'
                ],
                guidance: 'Accept alternative answers in high-level languages. Follow-through allowed for returning the value the candidate increments if it is not named capCount.' },
              '5(e)(ii)': { type: 'points',
                points: [
                  'Both (use binary) to represent characters / are character sets',
                  'The first 7/8 bits of Unicode is the same as ASCII (overlaps)'
                ],
                guidance: '1 mark.' },
              '5(e)(iii)': { type: 'points',
                points: [
                  'ASCII has fewer characters (128/256) / Unicode has more characters',
                  'ASCII is 7/8 bits whereas Unicode can be larger 16/32 / variable-sized characters',
                  'ASCII limited to Latin / English / European characters whereas Unicode represents other symbols (Chinese / Cyrillic / Emojis)'
                ],
                guidance: 'Only mark the 1st answer for each difference. Must have BOTH sides (ASCII vs Unicode) to get the mark. Max 2.' },
              '5(f)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'High Level',
                    criteria: 'Thorough knowledge of both waterfall and the spiral model. Generally accurate and detailed. Direct application to context with explicit examples. Thorough, well-balanced discussion; consistently relevant evaluation. Well-developed reasoning.' },
                  { range: [4, 6], descriptor: 'Mid Level',
                    criteria: 'Reasonable knowledge of waterfall and/or spiral, generally accurate but at times underdeveloped. Direct application to context, one or two opportunities missed. Sound, mostly-focused discussion.' },
                  { range: [1, 3], descriptor: 'Low Level',
                    criteria: 'Basic knowledge of one model with inaccuracies. Limited application. Narrow, weak discussion.' }
                ],
                indicative: {
                  AO1: 'Spiral has four quadrants (determine objectives, identify/manage risk, develop and test, plan next iteration). Client feedback informs future development. Waterfall has a structured analysis/design/development/test flow; progress to next step is not made until the previous step is complete.',
                  AO2: 'Spiral relies on frequent client feedback, produces functional prototypes, features added incrementally, more focus on risk, projects may be modified or dropped. Waterfall is much more structured and very reliant on getting the requirements correct at the start; changes are harder later — but this forces the definition to be well understood.',
                  AO3: 'Spiral involves client feedback, prototypes and evolving projects — better when requirements may change. Waterfall is better where requirements are clear from the start and outcomes known. Spiral is better for risk management. With a large team, waterfall may be more appropriate due to clearly-defined responsibilities at each stage.'
                },
                guidance: '9 marks total. AO1.1 (2), AO1.2 (2), AO2.1 (2), AO3.3 (3).' },

              '6(a)(i)': { type: 'points',
                points: [
                  'For printer queue',
                  'All documents/users have equal priority',
                  'Whichever document is received first is printed first',
                  'First in First Out / Last in Last Out'
                ],
                guidance: '1 mark per point, max 2.' },
              '6(a)(ii)': { type: 'points',
                points: [
                  'To enable multitasking to take place',
                  'To switch between active processes and those running in the background',
                  'To limit each process to a certain amount of time / allow processes an equal share of processor time',
                  '…to ensure the OS cycles through all processes / process then goes to the back of the queue',
                  '…so that users receive an immediate response',
                  '…to handle an interrupt immediately'
                ],
                guidance: 'BP4, 5, and 6 are dependent on BP3 only. Max 3.' },
              '6(a)(iii)': { type: 'points',
                points: [
                  'Shortest job first / shortest remaining time — process which has the shortest time (remaining) is completed first',
                  'Multilevel feedback queues — uses queues with different priorities; jobs can be moved between queues'
                ],
                guidance: '1 mark for name + 1 mark for description. Max 2.' },
              '6(b)(i)': { type: 'points',
                points: [
                  'Protocol to be used is decided based on the application',
                  'E.g. HTTPS for browser based service / SMTP / IMAP for messaging service',
                  'Adds encryption',
                  'Passes on to transport layer to send',
                  'Gets data from transport layer when receiving',
                  'Unpacks message ready for display / removes headers or other non-viewable data',
                  'Decrypts message'
                ],
                guidance: 'For BP2, don\'t allow plain HTTP (question mentions encryption). Don\'t allow a bare list of protocols, or a protocol without its use. Max 5.' },
              '6(b)(ii)': { type: 'points',
                points: [
                  'Receives (layered) data from internet layer to send',
                  'MAC addresses are added to the packet',
                  'Passes and receives data across the wireless network (to WAN / other machine)',
                  'Passes (layered) data back up to internet layer when receiving'
                ],
                guidance: 'Wireless access given in the question stem. Max 2.' }
            }
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

// Flat list of leaf parts for a paper, for the qbq stepper. Each part is
// augmented with its question's scenario/figures and (if present in the
// paper's markSchemes map) the official mark-scheme criteria.
window.paperParts = function (paper) {
  if (!paper || !Array.isArray(paper.questions)) return [];
  const ms = paper.markSchemes || {};
  const out = [];
  paper.questions.forEach(q => {
    (q.parts || []).forEach(p => {
      out.push({
        ...p,
        questionNumber: q.number,
        scenario: q.scenario || '',
        scenarioFigures: q.scenarioFigures || [],
        markScheme: ms[p.code] || null
      });
    });
  });
  return out;
};
