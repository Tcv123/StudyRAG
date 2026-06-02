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
      {
        board: 'AQA',
        specCode: '7517',
        officialPageUrl: 'https://www.aqa.org.uk/subjects/computer-science-and-it/a-level/computer-science-7516-7517/assessment-resources',
        papers: [
          // Most recent first. Question + MS data is added per paper as it
          // gets extracted from the official PDF (otherwise the paper is
          // attemptable in print mode only).
          {
            id: 'cs-aqa-7517-2023-p2',
            year: 'June 2023',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-75172-QP-JUN23.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-75172-MS-JUN23.PDF',
            questions: [
              {
                number: 1,
                parts: [
                  { code: '01.1',
                    prompt: "A sound is sampled and recorded digitally. The sound is sampled at a rate of 48 000 samples per second (Hz) for 3 minutes using a 16-bit sample resolution.\n\nCalculate the size of the digital recording, giving your answer in mebibytes.\n\nGive your answer rounded to 2 decimal places.\n\nYou should show your working.", marks: 2 },
                  { code: '01.2',
                    prompt: "The highest frequency component in a different sound is 15 000 Hz.\n\nWhat is the minimum sampling rate that should be used when recording this sound to ensure that all the frequencies in the original waveform are preserved, so that when the recording is played back the original sound is recreated accurately?", marks: 1 },
                  { code: '01.3',
                    preamble: "Figure 1 shows part of the process of playing back a sound that has been sampled. The binary sound data is used to generate an electrical waveform: a binary stream (e.g. …0010111011…) is converted into a stepped voltage-vs-time output.",
                    prompt: "A hardware component on a sound card carries out the process shown in Figure 1.\n\nState the name of this component.", marks: 1 }
                ]
              },
              {
                number: 2,
                scenario: "Figure 2 shows some of the fields contained in a packet, transmitted on a computer network.",
                scenarioFigures: [
                  { type: 'table', label: 'Figure 2',
                    headers: ['Destination Address', 'Source Address', 'Payload (data)', 'Checksum'],
                    rows: [['(field)', '(field)', '(field)', '(field)']] }
                ],
                parts: [
                  { code: '02.1', prompt: "Name two fields typically included in a packet which are not shown in Figure 2.", marks: 2 },
                  { code: '02.2', prompt: "Explain what the checksum is used for and outline how the checksum's value will be determined.", marks: 2 },
                  { code: '02.3',
                    preamble: "Packets of data are transmitted using packet switching.",
                    prompt: "Describe the role of a router in packet switching.", marks: 2 }
                ]
              },
              {
                number: 3,
                parts: [
                  { code: '03.1', prompt: "Encrypt the plaintext SECURITY using the Caesar cipher with a key of 4.", marks: 1 },
                  { code: '03.2',
                    preamble: "The Caesar cipher is an example of a substitution cipher. A different substitution cipher encrypts letters using the method shown in Figure 3.",
                    figure: { type: 'table', label: 'Figure 3 — substitution cipher',
                      headers: ['Plaintext', 'Ciphertext'],
                      rows: [
                        ['A','C'],['B','D'],['C','J'],['D','R'],['E','K'],['F','Y'],['G','G'],['H','S'],['I','Q'],
                        ['J','F'],['K','E'],['L','P'],['M','W'],['N','O'],['O','H'],['P','V'],['Q','L'],['R','I'],
                        ['S','U'],['T','Z'],['U','T'],['V','B'],['W','N'],['X','A'],['Y','X'],['Z','M']
                      ] },
                    prompt: "State one weakness that both the Caesar cipher and the cipher shown in Figure 3 have which means they can be easily cracked.", marks: 1 },
                  { code: '03.3', prompt: "State one reason why the cipher in Figure 3 is harder to crack than the Caesar cipher.", marks: 1 },
                  { code: '03.4',
                    preamble: "The Vernam cipher, unlike the Caesar cipher, can be perfectly secure.",
                    prompt: "State two conditions that must be met for the Vernam cipher to offer perfect security.", marks: 2 }
                ]
              },
              {
                number: 4,
                parts: [
                  { code: '04.1', extended: true,
                    prompt: "Describe how the fetch-execute cycle is used to carry out machine code instructions and how the hardware of a computer could be improved so that programs can be executed more quickly.\n\nYour response should include a description of what happens during each stage of the fetch-execute cycle.", marks: 12 },
                  { code: '04.2',
                    preamble: "An interrupt may occur during the fetch-execute cycle.",
                    prompt: "Describe what an interrupt is and explain the purpose of interrupts.", marks: 2 }
                ]
              },
              {
                number: 5,
                scenario: "A company operates a cinema which has three different screens. Each screen has a capacity determined by the number of seats the screen has.\n\nEach seat is identified by a unique seat number for the screen it is in, but two seats in different screens can have the same number. A specific seat is classified as being of one of two types: standard or deluxe.\n\nOn a particular day, there will be several showings of films in each of the screens. A screen might show the same film multiple times or it might show different films at different times of day.\n\nCustomers make bookings to go to the cinema. Each booking is for one specific showing of a film. A booking is for one or more seats, and the customer can select the individual seats that they want to book when they make the booking.\n\nWhen a booking is made, if the customer has not previously made a booking, the customer's first name, last name and telephone number are recorded. If the booking is for more than one seat then only the details of the person who made the booking are recorded — the system does not store the details of who will be sitting in each seat. If a customer has made a booking previously then the details that were stored about them when the previous booking was made are re-used.",
                parts: [
                  { code: '05.1',
                    preamble: "Develop a fully normalised design for a relational database to store the information required by the cinema. To help you, the Screen, Seat, Film and Showing relations have already been defined in Figure 4.",
                    figure: { type: 'code', label: 'Figure 4',
                      content: "Screen(ScreenNumber, Capacity)\nSeat(SeatNumber, ScreenNumber, SeatType)\nFilm(FilmID, FilmName, Duration, Certificate)\nShowing(ShowingID, ScreenNumber, FilmID, ShowTime, ShowDate)\n\n(primary-key attributes are underlined in the actual paper)" },
                    prompt: "Using the format shown in Figure 4, list the other three relations that will need to be created, together with the attributes that each relation will contain.\n\nUnderline the attribute(s) that will form the entity identifier (primary key) in each relation.", marks: 5 },
                  { code: '05.2',
                    preamble: "The cinema had to be closed on the 29th March 2023 so that some maintenance could take place. The SQL query in Figure 5 was written to delete all of the showings on this date. Some errors were made in the query.",
                    figure: { type: 'code', label: 'Figure 5',
                      content: "DELETE\nFROM Showing, Film\nWHERE ShowDate = 29/03/2023" },
                    prompt: "Describe two errors that have been made in the query.\n\nDo not refer to the use of semi-colons in your response.", marks: 2 },
                  { code: '05.3', prompt: "Describe an issue that could arise in the database if a query to delete all of the showings that had been scheduled to take place on the 29th March 2023 was executed.", marks: 2 },
                  { code: '05.4',
                    preamble: "The booking system can be accessed through a website which uses CRUD and REST.",
                    prompt: "Describe what Uniform Resource Locators (URLs) are used for in a RESTful application.", marks: 1 },
                  { code: '05.5',
                    prompt: "Shade one lozenge on the row that correctly shows how REST enables CRUD to be mapped to database functions using SQL.\n\nA) GET→FETCH, POST→CREATE, DELETE→DELETE, PUT→UPDATE\nB) GET→SELECT, POST→INSERT, DELETE→DELETE, PUT→UPDATE\nC) GET→SELECT, POST→INSERT, DELETE→DELETE, PUT→CREATE\nD) GET→SELECT, POST→UPDATE, DELETE→DELETE, PUT→INSERT\nE) GET→UPDATE, POST→SELECT, DELETE→DELETE, PUT→CREATE", marks: 1 },
                  { code: '05.6',
                    preamble: "JSON is used to encode datasets when they are passed between the server and the booking application. Figure 6 shows an example of how data about some films can be encoded using JSON.",
                    figure: { type: 'code', label: 'Figure 6',
                      content: "{\"Films\":[\n  { \"FilmID\": 4301,\n    \"FilmName\": \"Alien Doomsday\",\n    \"Duration\": 106,\n    \"Certificate\": \"12A\" },\n  { \"FilmID\": 2098,\n    \"FilmName\": \"Tom's Amazing Adventure\",\n    \"Duration\": 84,\n    \"Certificate\": \"U\" }\n]}" },
                    prompt: "State two reasons why JSON might have been chosen to encode the data instead of XML, assuming that the software supports both methods.", marks: 2 }
                ]
              },
              {
                number: 6,
                scenario: "Question parts 06.1 and 06.2 use a normalised floating point representation with an 8-bit mantissa and a 4-bit exponent, both stored using two's complement.",
                parts: [
                  { code: '06.1',
                    figure: { type: 'code', label: 'Figure 7',
                      content: "Mantissa: 0 ● 1 1 0 1 0 0 0     (binary point after the first bit)\nExponent: 1 1 0 1" },
                    prompt: "Figure 7 shows a floating point representation of a number.\n\nCalculate the decimal equivalent of the number in Figure 7.\n\nYou should show your working.", marks: 2 },
                  { code: '06.2',
                    prompt: "Write the normalised floating point representation of the decimal value −23.25 in the boxes provided (8-bit mantissa with binary point after first bit, then 4-bit exponent).\n\nYou should show your working.", marks: 3 },
                  { code: '06.3',
                    figure: { type: 'table', label: 'Table 1',
                      headers: ['Situation', 'Type of error'],
                      rows: [
                        ['A calculation is performed and the result of the calculation is so close to zero that the number that is stored is zero.', ''],
                        ['A calculation is performed and the result of the calculation is too large to fit in the available number of bits.', ''],
                        ['A decimal value is converted to floating point but it cannot be represented exactly in the available number of bits.', '']
                      ] },
                    prompt: "On each row of Table 1, state the name of the Type of error that has occurred in the Situation that is described.", marks: 2 },
                  { code: '06.4', prompt: "Explain how the floating point representation used in Question parts 06.1 and 06.2 could be modified to represent numbers more precisely, without changing the total number of bits used to represent a number.", marks: 1 }
                ]
              },
              {
                number: 7,
                scenario: "For question parts 07.1 and 07.2 you should assume that memory locations and registers store 8-bit values. These question parts use the AQA assembly language instruction set (LDR, STR, ADD, SUB, MOV, CMP, B, B<cond>, AND, ORR, EOR, MVN, LSL, LSR, HALT).\n\nAssembly language instructions can be used to perform masking, which allows the values of individual bits or groups of bits within a number to be isolated or set independently of the values of the other bits in the number. For example, to isolate the values of the rightmost four bits of an 8-bit number, the number could be ANDed with the binary value 00001111.\n\nThe assembly language instruction `AND R0, R1, #15` performs a bitwise logical AND operation between the value in register R1 and the number 15 (equivalent to 00001111 in binary), storing the result in register R0.",
                parts: [
                  { code: '07.1',
                    figure: { type: 'code', label: 'Operands',
                      content: "R1   0 1 0 0 0 1 1 0   (decimal 70 / hex 46)\n15   0 0 0 0 1 1 1 1\nR0   ? ? ? ? ? ? ? ?" },
                    prompt: "In binary, show the result of applying the instruction `AND R0, R1, #15` when register R1 contains the decimal value 70 which is 46 in hexadecimal.", marks: 1 },
                  { code: '07.2',
                    figure: { type: 'code', label: 'Operands',
                      content: "R1   0 0 0 0 0 1 1 0   (decimal 6)\n48   0 0 1 1 0 0 0 0\nR0   ? ? ? ? ? ? ? ?" },
                    prompt: "In binary, show the result of applying the instruction `ORR R0, R1, #48` when register R1 contains the decimal value 6 which is 6 in hexadecimal.", marks: 1 },
                  { code: '07.3',
                    preamble: "A computer program is required to display the value of the contents of a memory location that stores an 8-bit value. The value should be displayed on the screen of the computer in hexadecimal.\n\nPart of the process is to convert the value stored in the memory location into the correct ASCII codes for each of the two digits that represent that value in hexadecimal. E.g. for 10011110 (9E hex), the ASCII codes are 00111001 (the '9') and 01000101 (the 'E').\n\nThe ASCII codes are: 0–9 = 48–57 (binary 0110000…0111001); A–F = 65–70 (binary 1000001…1000110).",
                    figure: { type: 'code', label: 'Standard AQA assembly language instruction set (reference)',
                      content: "LDR Rd, <memref>          Load value from memory into Rd\nSTR Rd, <memref>          Store value in Rd into memory\nADD Rd, Rn, <operand2>    Rd = Rn + operand2\nSUB Rd, Rn, <operand2>    Rd = Rn - operand2\nMOV Rd, <operand2>        Rd = operand2\nCMP Rn, <operand2>        Compare Rn with operand2\nB <label>                 Always branch\nB<cond> <label>           Branch if condition met (EQ, NE, GT, LT)\nAND/ORR/EOR Rd, Rn, op2   Bitwise logical AND/OR/XOR\nMVN Rd, <operand2>        Rd = NOT operand2\nLSL/LSR Rd, Rn, <op2>     Logical shift left/right\nHALT                      Stop\noperand2: #n decimal literal, Rm register m\nGeneral registers: R0–R12" },
                    prompt: "Write an assembly language program using the AQA assembly language instruction set that will load a value from memory location 100 and store the ASCII code of the first (lefthand) digit of the hexadecimal representation of this value in memory location 101 and the ASCII code of the second (righthand) digit of the hexadecimal representation of this value in memory location 102.\n\nYour program should use masking and/or shifting to complete this task.", marks: 10 }
                ]
              },
              {
                number: 8,
                scenario: "A supermarket chain uses a system which stores details of all of the products that it sells and the sales that it makes. The data that the supermarket stores is Big Data.",
                parts: [
                  { code: '08.1',
                    preamble: "Two characteristics of Big Data are that the volume of data means it is too big to fit on a single server and the data comes in a variety of forms.",
                    prompt: "Describe the third characteristic of Big Data.", marks: 1 },
                  { code: '08.2',
                    preamble: "The graph schema in Figure 8 represents part of a fact-based model of the dataset that the supermarket has built. It contains nodes: Product:Chocolate Biscuit; Product:Iced Biscuit; Store:Bath (Sells edge to Iced Biscuit); Store:Bristol (Sells edge to Iced Biscuit); Customer:10437 (Purchased edge to Iced Biscuit, properties Surname:Williams and Forename:John).",
                    prompt: "Modify the graph schema in Figure 8 to represent the following additional facts.\n\n• The Bath store sells chocolate biscuits.\n• There are 20 individual biscuits in a packet of iced biscuits and each packet costs £1.50.\n• Both chocolate biscuits and iced biscuits are made by the company Delicious Snacks. The company has 75 employees and also makes cake bars.\n\n(Describe the nodes/edges/properties you would add.)", marks: 3 },
                  { code: '08.3',
                    preamble: "One approach to dealing with Big Data is to write code that can be distributed to run across more than one server.",
                    prompt: "State two features of functional programming languages that make it easier to write code that can be distributed to run across more than one server.", marks: 2 }
                ]
              },
              {
                number: 9,
                scenario: "The truth table in Table 4 represents the operation of a logic system.",
                scenarioFigures: [
                  { type: 'table', label: 'Table 4',
                    headers: ['A', 'B', 'C', 'D'],
                    rows: [
                      ['0','0','0','0'], ['0','1','0','1'], ['1','0','0','1'], ['1','1','1','0']
                    ] }
                ],
                parts: [
                  { code: '09.1',
                    prompt: "Describe a logic circuit that would produce the outputs shown in Table 4 for the given inputs.\n\nTo achieve full marks, your circuit should use exactly two gates.\n\n(Name the gates and the wiring — e.g. \"C = A AND B; D = A XOR B\".)", marks: 3 },
                  { code: '09.2', prompt: "Explain the purpose of the circuit that you have drawn that produces the outputs given in Table 4.", marks: 1 },
                  { code: '09.3',
                    prompt: "Using the rules of Boolean algebra, simplify the following Boolean expression:\n\n    A · B̄ + B · ¬(Ā + ¬(B̄ · C))\n\nYou must show your working.", marks: 4 }
                ]
              },
              {
                number: 10,
                parts: [
                  { code: '10.1',
                    preamble: "A data communication system uses asynchronous data transmission with even parity to send character codes that are encoded using 7-bit ASCII. Figure 9 shows five binary patterns.",
                    figure: { type: 'code', label: 'Figure 9 — five binary patterns (10 bits each)',
                      content: "Pattern 1: 1 0 1 1 1 0 1 1 0 1\nPattern 2: 1 1 0 1 1 1 1 0 0 0\nPattern 3: 0 1 0 0 0 0 1 1 1 0\nPattern 4: 1 0 1 1 1 1 0 0 0 0\nPattern 5: 1 1 0 0 0 0 0 1 0 0" },
                    prompt: "How many of the binary patterns in Figure 9 could represent valid transmissions of a single character in this data communication system?", marks: 1 },
                  { code: '10.2',
                    preamble: "An alternative data communication system uses synchronous data transmission.",
                    prompt: "Describe what synchronous data transmission is.", marks: 1 },
                  { code: '10.3', prompt: "Describe one limitation of the use of parity bits for managing errors.", marks: 1 },
                  { code: '10.4', prompt: "Shade one lozenge to indicate which of the lines on the graph in Figure 10 shows the correct relationship between the bandwidth and the bit rate of a communications medium.\n\nFigure 10 shows four lines on a Bit Rate vs Bandwidth graph:\n  Line A: straight line, positive linear slope (bit rate rises proportionally with bandwidth)\n  Line B: straight line, negative slope (bit rate decreases as bandwidth increases)\n  Line C: curve, exponential-like upward (rises slowly, then sharply)\n  Line D: horizontal line (constant bit rate regardless of bandwidth)", marks: 1 }
                ]
              },
              {
                number: 11,
                scenario: "An email is being sent from User A on Computer A to User B on Computer B.",
                parts: [
                  { code: '11.1', prompt: "Describe the role that will be played by the transport layer of the TCP/IP stack in the transmission of the email from Computer A to an email server.", marks: 3 },
                  { code: '11.2',
                    preamble: "Whilst being transported across the Internet, the email data passes through a number of routers and one gateway.",
                    prompt: "Describe the additional functionality of a gateway, beyond that of a router.", marks: 1 },
                  { code: '11.3', prompt: "State the name and purpose of two application layer protocols that will be used to transfer the email from Computer A to Computer B.\n\nEach protocol must have a different purpose.", marks: 4 },
                  { code: '11.4',
                    preamble: "The email servers involved in the transmission of the email use well-known ports.",
                    prompt: "Explain what a well-known port is and why an email server must use one.", marks: 2 },
                  { code: '11.5',
                    preamble: "The email message needs to be sent securely as it contains confidential information. The message will be encrypted using asymmetric encryption. To enable Computer B to authenticate that the message was sent by Computer A, a digital signature will also be sent with the message.",
                    prompt: "Describe how:\n  • Computer A will encrypt the message and create the digital signature\n  • Computer B will decrypt the message and verify that it was sent by Computer A.\n\nIn your response you should refer to the specific keys that will be used in this process.", marks: 6 }
                ]
              },
              {
                number: 12,
                scenario: "Figure 11 shows a function, FunctionZ, written in a functional programming language.",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 11',
                    content: "FunctionZ [] = 0\nFunctionZ (x:xs) = x + 2 * FunctionZ (xs)\n\n[] is the empty list.\n(x:xs) splits a list into the head x and tail xs." }
                ],
                parts: [
                  { code: '12.1',
                    figure: { type: 'table', label: 'Table 5 (to complete)',
                      headers: ['Call number', 'Argument', 'Value returned'],
                      rows: [
                        ['1', '[4, 2, 5, 3]', ''],
                        ['2', '', ''],
                        ['3', '', ''],
                        ['4', '', ''],
                        ['5', '', '']
                      ] },
                    prompt: "Complete Table 5 by writing the value of the argument passed to each call of FunctionZ and the value returned by each call, when `FunctionZ [4, 2, 5, 3]` is evaluated.", marks: 3 },
                  { code: '12.2',
                    preamble: "All of the values in lists passed to FunctionZ as the argument are members of the set of integers.",
                    prompt: "Shade one lozenge to indicate the co-domain of the function.\n\nA) The set of integers\nB) The set of irrational numbers\nC) The set of natural numbers\nD) The set of rational numbers\nE) The set of real numbers", marks: 1 }
                ]
              }
            ],
            // Official AQA mark-scheme content for every part, copied from
            // the H7517/2 June 2023 mark scheme. Fed to /api/mark-against-scheme
            // so the AI marker awards only what the real MS credits.
            markSchemes: {
              '01.1': { type: 'exact',
                points: ['16.48', '16.4794921875', '16 491/1024', '48000 × 16 × 3 × 60 / 8 / 1024 / 1024'],
                guidance: '2 marks for correct answer 16.48 (or more dp/fraction). 1 mark for 16, 16.5, or truncated 16.47. 1 method mark if not correct but doing at least three of: ×48000, ×16, ×3, ×60, ÷8, ÷1024, ÷1024 again. Equivalent two-step shortcuts: ×180, ÷2, ÷1048576. Max 1 if answer not correct and written to at least 2 dp.' },
              '01.2': { type: 'exact',
                points: ['30000', '15000 × 2', 'double 15000'],
                guidance: '1 mark for 30000 (Nyquist: minimum sampling rate is twice the highest frequency).' },
              '01.3': { type: 'exact',
                points: ['Digital to Analogue Converter', 'DAC'],
                guidance: '1 mark. NE "Digital to Analogue". Reject if initialism and full name given but mismatched (e.g. "Digital to Analogue Converter (ADC)"). Reject if two components named.' },
              '02.1': { type: 'points',
                points: [
                  'Port number(s) (allow destination/source port as separate marks)',
                  'Sequence number / packet number',
                  'Time to live / TTL / maximum hop count',
                  'Packet size / length',
                  'Type of service / priority',
                  'Protocol identifier',
                  'Packet identifier / ID number',
                  'IP version',
                  'Options / Padding',
                  'Flags',
                  'Window size value',
                  'Fragment offset / header length',
                  'Total number of packets in message',
                  'Acknowledgement number'
                ],
                guidance: 'Only mark the first two responses. Max 2. NE "Total number of packets" without "in message".' },
              '02.2': { type: 'points',
                points: [
                  'Explain what checksum is for: to check if the contents of the packet/data have been corrupted/changed during transmission / to check if received data is same as transmitted',
                  'Outline how the value is determined: calculated/hashed from the payload/data/contents of the packet'
                ],
                guidance: '1 mark for each part. A "tampered" for corrupted. A "to check if an error has occurred". NE "error checking" alone. NE "apply an algorithm to data" unless clear it is mathematical or produces single value.' },
              '02.3': { type: 'points',
                points: [
                  'Router determines which outgoing link to send packet along / which router/host/node to send to next',
                  'Router uses most efficient/shortest/cheapest/best path to the destination',
                  'Router monitors the network and updates routes/routing table to reflect congestion/failure/network changes',
                  'Router modifies the MAC/hardware addresses for the next hop',
                  'To remove packets that have no time to live / have reached the maximum hop count'
                ],
                guidance: 'Max 2. NE just "router determines where to send packet next" or "next hop". Reject responses suggesting router always sends to final destination. Reject IP addresses for MAC modification mark.' },
              '03.1': { type: 'exact',
                points: ['WIGYVMXC'],
                guidance: '1 mark. Ignore case. (S→W, E→I, C→G, U→Y, R→V, I→M, T→X, Y→C.)' },
              '03.2': { type: 'points',
                points: [
                  'Each letter/character is always encrypted to the same letter/character',
                  'The letters/characters in the ciphertext will have the same frequency as their corresponding letters in the plaintext (susceptible to frequency analysis)',
                  'The ciphertext will retain structural properties of the plaintext (word lengths from spaces, letter adjacency patterns, common short words)'
                ],
                guidance: 'Max 1. NE "patterns in the text can be identified". Reject "susceptible to brute force".' },
              '03.3': { type: 'points',
                points: [
                  'There are more (possible) keys',
                  'It is not possible to work out how other letters have been encrypted directly from the knowledge of how one letter has been encrypted',
                  'There is no pattern to the letter replacements / replacements not in alphabetical order / not the case that every letter has the same shift / letters shifted by different amounts'
                ],
                guidance: 'Max 1. "Random" must clearly relate to the letter replacement. NE "letters are encrypted randomly". Reject "each letter has a random key".' },
              '03.4': { type: 'points',
                points: [
                  'The key must be (at least) as long as the data/plaintext',
                  'The key must not be reused / key must only be used once',
                  'The key must be (truly) random',
                  'The key must be kept securely / not revealed / only known by users (or destroyed after use)'
                ],
                guidance: 'Max 2. NE just "one time pad".' },
              '04.1': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'Coherent, relevant, substantiated, logically-structured response covering BOTH areas (fetch-execute cycle AND hardware improvements). Each area has sufficient detail to show a good level of understanding. Well-developed line of reasoning.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'Coherent, relevant, substantiated, logically structured response showing good understanding of AT LEAST ONE area and some understanding of the other.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'Limited attempt to follow a line of reasoning, mostly logical structure. Good understanding of one area OR some understanding of both areas.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A few relevant points; no line of reasoning evident. Insufficient evidence of good understanding in either area.' }
                ],
                indicative: {
                  'Area 1 — Fetch-Execute Cycle': 'Fetch stage: PC → MAR; address bus carries the address to main memory; read signal on control bus; data bus transfers contents; addressed memory loaded into MBR; PC incremented (at any point after PC→MAR transfer); MBR contents copied to CIR. Decode stage: instruction held by (Current) Instruction Register; control unit decodes the instruction; split into opcode and operand(s). Execute stage: if necessary data is fetched/stored; opcode identifies the operation type; operation performed by the control unit; ALU used for calculations/comparisons; result stored in register/main memory/accumulator; status register updated; PC updated if jump/branch; control bus signals to other components.',
                  'Area 2 — Improving Hardware': 'More cores; more cache memory; faster clock speed (NE "faster processor"); parallel processor architecture / more processors in parallel; bigger word size; pipelining; more RAM / faster-access RAM; faster bus clock speed; more lines in data bus; replace HDDs with SSDs / faster drives; use Harvard architecture instead of Von Neumann.'
                },
                guidance: '12 marks total. Best-fit by overall quality across BOTH areas. A good Level-4 response covers all three FDE stages without excess focus on one, plus a range of hardware improvements (processor, buses, memory). 0 marks if no attempt or nothing creditworthy.' },
              '04.2': { type: 'points',
                points: [
                  'Knowledge: A signal/request sent to the processor (from a hardware device or program)',
                  'Understanding: So that a device/source that needs the immediate attention of the processor can be serviced / urgent error condition can be dealt with',
                  'Understanding: So that the currently executing process/task/program can be suspended (allow "stopped")'
                ],
                guidance: '2 marks: 1 knowledge + max 1 understanding. NE "to deal with an error" unless clear it must be dealt with immediately. NE "task of higher priority can be carried out". Reject "suspend/stop the fetch-execute cycle/processor". Reject "instruction" for "process".' },
              '05.1': { type: 'points',
                points: [
                  'Customer relation created with Customer(CustomerID, FirstName, LastName, TelephoneNumber) and no other attributes',
                  'Booking relation created with Booking(BookingID, ShowingID, CustomerID) and no other attributes (NumberOfPeople allowed)',
                  'AssignedSeat relation created containing the entity identifier from the Booking relation + SeatNumber (e.g. AssignedSeat(BookingID, SeatNumber))',
                  'Correct entity identifier (primary key) on at least one or two relations: Customer:CustomerID; Booking:BookingID OR composite (ShowingID, CustomerID); AssignedSeat: composite of Booking identifier + SeatNumber',
                  'Correct entity identifiers on ALL THREE relations'
                ],
                guidance: '5 marks total. Allow spaces in names and alternative attribute names if meaning is clear. Reject use of incorrect names already used in question. Ignore foreign-key representation. Accept SQL responses, ignoring syntax/data-type errors.' },
              '05.2': { type: 'points',
                points: [
                  'The Film table should not be included / only the Showing table should be included',
                  'The date is missing quotation marks / hashes / delimiters',
                  'An asterisk or list of attributes is missing AFTER DELETE'
                ],
                guidance: 'Max 2. NE "not specified what to delete".' },
              '05.3': { type: 'points',
                points: [
                  'Analysis: There might already be bookings for a showing on this date',
                  'Understanding: The database would prevent the query from running / there would be records (bookings) referencing showings that no longer existed / referential integrity / foreign key rules violated'
                ],
                guidance: '1 mark analysis + 1 mark understanding. Award both marks if the response states that all bookings for the 29 March would also need to be deleted. Reject "bookings for a/the showing" without date reference.' },
              '05.4': { type: 'points',
                points: [
                  'Each resource is represented by a URL',
                  'Entering a URL causes the server to (use CRUD to) retrieve relevant data / carry out a search / access a database',
                  'URLs are sent between the client and server using HTTP'
                ],
                guidance: 'Max 1.' },
              '05.5': { type: 'exact',
                points: ['B', 'GET→SELECT, POST→INSERT, DELETE→DELETE, PUT→UPDATE'],
                guidance: '1 mark. Reject if more than one lozenge shaded.' },
              '05.6': { type: 'points',
                points: [
                  'More compact / smaller / faster transmission / less memory',
                  'Quicker / easier to parse',
                  'Structure understood directly in some languages (e.g. JavaScript)',
                  '(Native) support for arrays',
                  'Easier for humans to read/write/understand'
                ],
                guidance: 'Max 2.' },
              '06.1': { type: 'exact',
                points: ['0.1015625', '13/128', '0.1016'],
                guidance: '2 marks for correct answer 0.1015625 (or 13/128, or rounded to ≥4 dp). 1 method mark for either: showing mantissa=0.8125 (13/16) and exponent=−3 in decimal; OR showing binary point shifted 3 places left; OR indicating mantissa × 2^exponent and using either correct value.' },
              '06.2': { type: 'exact',
                points: ['Mantissa 10100011 Exponent 0101', '10100011 0101'],
                guidance: '3 marks for correct answer (mantissa=10100011, exponent=0101). Method marks (up to 2): fixed-point 23.25 in binary = 10111.01; fixed-point −23.25 in binary = 101000.11; exponent shown as 5 decimal / 101 binary; mantissa shown correctly.' },
              '06.3': { type: 'exact',
                points: ['Underflow (row 1)', 'Overflow (row 2 — reject "stack overflow")', 'Rounding / truncation (row 3)'],
                guidance: '1 mark for two correctly identified, 2 marks for all three. Reject "stack overflow" for row 2.' },
              '06.4': { type: 'points',
                points: [
                  'Move a bit (or some bits) from the exponent to the mantissa / increase mantissa bits and reduce exponent bits',
                  'Use an implicit bit in the mantissa / do not store one of the bits on either side of the binary point (since it can be inferred)'
                ],
                guidance: 'Max 1. NE "add more bits to mantissa" or "make the mantissa larger and exponent smaller" without referring to redistribution. Reject "use fixed point".' },
              '07.1': { type: 'exact',
                points: ['00000110', '0 0 0 0 0 1 1 0'],
                guidance: '1 mark for the correct AND result. Reject if any cell of R0 is left empty.' },
              '07.2': { type: 'exact',
                points: ['00110110', '0 0 1 1 0 1 1 0'],
                guidance: '1 mark for the correct ORR result. Reject if any cell of R0 is left empty.' },
              '07.3': { type: 'points',
                points: [
                  'MP1 (AO3): Value in memory location 100 loaded into a register (LDR)',
                  'MP2 (AO3): After manipulation, values stored into memory locations 101 AND 102 (not the same value stored twice)',
                  'MP3 (AO3): Binary pattern of one digit correctly isolated from the input value (for leftmost digit must also be shifted into correct place)',
                  'MP4 (AO3): Binary pattern of one digit correctly translated into ASCII for numeric OR letter digits',
                  'MP5 (AO3): Binary pattern of one digit correctly translated into ASCII for BOTH numeric AND letter digits',
                  'MP6 (AO3): Conversion process fully working for BOTH digits (ASCII codes correct when program terminates)',
                  'MP7 (AO2): Attempt to use masking and/or shifting to identify one digit',
                  'MP8 (AO2): Attempt to use masking and/or shifting a second time to identify the second digit',
                  'MP9 (AO2): Attempt to use comparison and branching to treat numeric digits and letter digits differently',
                  'MP10 (AO2): Use of addition or masking to attempt to convert a digit to an ASCII code'
                ],
                guidance: 'Max 9 if solution not fully working. If MP3 not awarded, MP4/MP5/MP6/MP10 cannot be awarded. DPT (only penalise once): invalid register names like R27/Rn; binary immediate operands; missing # for immediate; R before memory address (R100); MOV used instead of LDR/STR; repeated wrong delimiters. Example solution outline: LDR R0,100 → AND R2,R0,#15 (low nibble) → CMP/branch on whether ≥10 → ADD #55 (letters) else ADD #48 (digits) → STR result → repeat for high nibble using LSR #4.' },
              '08.1': { type: 'points',
                points: ['The data is generated/received/must be processed/responded to at high velocity / very quickly (third V of Big Data)'],
                guidance: '1 mark. NE "velocity" alone, "high velocity of data", "speed data transmitted at". Allow examples of timeframes (milliseconds) but not "seconds". Allow "instantly/immediately" as BOD.' },
              '08.2': { type: 'points',
                points: [
                  'Bath store sells chocolate biscuits: solid line joining Store:Bath to Product:Chocolate Biscuit, labelled "Sells" (or equivalent like "Stocks")',
                  '20 individual biscuits per packet & each packet costs £1.50: rectangular boxes containing this data connected to Iced Biscuit with dashed lines (two separate boxes, not combined)',
                  'Delicious Snacks makes both biscuits + has 75 employees + also makes cake bars: oval for Company:Delicious Snacks; rectangle connected via dashed line for 75 employees; oval for new Product:Cake Bar; solid lines linking the company oval to all three products labelled "Makes" (or equivalent)'
                ],
                guidance: '3 marks. Allow directed arrows. Ignore spelling if meaning clear. DPT (penalise once only): wrong line styles (solid/dashed), wrong shapes (rectangles/ovals), missing labels on solid lines, labels on dashed lines.' },
              '08.3': { type: 'points',
                points: [
                  'Immutable data structures / state of a data structure cannot be changed after creation',
                  'Statelessness / functions do not have side-effects / all functions are pure',
                  'Functions can be distributed to servers and executed on data sets then results combined / map-reduce',
                  'Higher-order functions can compose results of processing on multiple processors/cores / functions are first-class objects',
                  'Order of execution can be determined at run-time by the translator / not defined by program code / programs are not a sequence of instructions in a specific order'
                ],
                guidance: 'Max 2. NE just "suitable for parallel processing".' },
              '09.1': { type: 'points',
                points: [
                  'Output C is correct for all inputs (C = A AND B)',
                  'Output D is correct for all inputs (D = A XOR B)',
                  'Circuit is fully correct AND uses exactly two gates (an AND gate feeding C and an XOR gate feeding D, both taking A and B as inputs — this is a half-adder)'
                ],
                guidance: '3 marks. The minimal 3-mark solution: A AND B → C; A XOR B → D. Equivalent 2-mark solutions exist using more than two gates (e.g. with NOTs and ANDs/ORs).' },
              '09.2': { type: 'points',
                points: [
                  'It adds two bits (or two numbers) together',
                  'It is a half adder'
                ],
                guidance: '1 mark. Allow "it performs addition" / "it is an adder" as BOD. Reject "full adder".' },
              '09.3': { type: 'exact',
                points: ['A', 'final simplified expression is A'],
                guidance: 'Final answer is A (1 mark). 3 marks for working: award 1 mark per successful application of (a) De Morgan, (b) other identity, or (c) bracket expansion/factorising. 2 marks if De Morgan applied twice simultaneously. Max 2 for working if no successful De Morgan. Max 3 overall if any incorrect step. Mark working until first wrong step.' },
              '10.1': { type: 'exact',
                points: ['2', 'Patterns 4 and 5'],
                guidance: '1 mark for 2. Allow identifying patterns 4 and 5 as valid without stating "2". Ignore wrong patterns if 2 is given. (Reasoning: a valid 7-bit ASCII + even parity transmission needs a start bit (0), 7 data bits, even parity bit, stop bit (1).)' },
              '10.2': { type: 'points',
                points: [
                  'Receiver and transmitter (continuously) synchronised by a common clock',
                  'Timing information transmitted within / alongside the data',
                  'Receiver and transmitter clocks are continuously synchronised'
                ],
                guidance: '1 mark. Allow "both devices synchronised by same clock". NE "receiver and transmitter are synchronised" alone. NE "transmission synchronised to a clock signal".' },
              '10.3': { type: 'points',
                points: [
                  'Errors that change an even number of bits (e.g. two bits) cannot be detected',
                  'Errors can be detected but cannot be corrected / position of errors cannot be identified'
                ],
                guidance: 'Max 1. Reject "multi-bit errors cannot be identified" without specifying even-number.' },
              '10.4': { type: 'exact',
                points: ['A', 'Line A'],
                guidance: '1 mark. Bit rate increases linearly with bandwidth. Reject if more than one lozenge shaded.' },
              '11.1': { type: 'points',
                points: [
                  'Establish an end-to-end connection (between email servers)',
                  'Perform error detection/correction / request that corrupted segments are resent / add error-detection information / send acknowledgement packets / ensure packets are delivered',
                  'Use the port number to pass data to the correct (email server) application in the application layer / add port number to segment',
                  'Split data up into segments and add header information / assemble segments in correct order to rebuild message / add segment numbers',
                  'Perform flow control / match speed of sender and receiver',
                  'Manage congestion'
                ],
                guidance: 'Max 3. NE "virtual path / virtual circuit". A "packets/frames/datagrams" for segments. A "socket" for port number as BOD.' },
              '11.2': { type: 'points',
                points: ['Protocol conversion (allows two different networks/protocols to communicate)'],
                guidance: '1 mark.' },
              '11.3': { type: 'points',
                points: [
                  'SMTP / Simple Mail Transfer Protocol — used to send/transmit email between servers/clients',
                  'POP(3) / Post Office Protocol — used by clients to retrieve emails from the server',
                  'IMAP / Internet Message Access Protocol — used by clients to retrieve/manage emails on the server',
                  'HTTP / HTTPS — so users can access email via the web / web browser'
                ],
                guidance: '2 marks for two correctly named protocols + 2 marks for correct purposes (each linked to its protocol). Allow correct initialism with slightly wrong full term as BOD. Reject non-application-layer protocols (TCP, IP). For POP(3) and IMAP both named, the purposes given must be different to both score.' },
              '11.4': { type: 'points',
                points: [
                  'Knowledge: A (reserved) port (number) that has a specific purpose / a port with a reserved number / a port assigned by IANA (Internet Assigned Numbers Authority)',
                  'Understanding: The communication is initiated by the sender/client (so the port number must be the same / known in advance for all initial email communications)'
                ],
                guidance: '1 mark for "what is" + 1 mark for "why used".' },
              '11.5': { type: 'levels',
                levels: [
                  { range: [5, 6], descriptor: 'Level 3',
                    criteria: 'Comprehensive description covering BOTH transmission and reception. At least three keys correctly identified for particular processes. Minor errors only.' },
                  { range: [3, 4], descriptor: 'Level 2',
                    criteria: 'A significant amount of the process described. Some misunderstandings/omissions. At least two keys correctly identified. May cover only transmission OR reception.' },
                  { range: [1, 2], descriptor: 'Level 1',
                    criteria: 'A few relevant points. Significant omissions or misunderstandings.' }
                ],
                indicative: {
                  Transmission: 'A message digest (hash) is calculated from the message contents. The digest is encrypted using A\'s PRIVATE key — this encrypted digest is the digital signature. The signature is appended to the message. The message (and signature) are encrypted using B\'s PUBLIC key. (Signature can be appended before or after encryption with B\'s public key.)',
                  Reception: 'B\'s PRIVATE key is used to decrypt the message (and signature). The message is rehashed — a new digest is calculated. A\'s PUBLIC key is used to decrypt the digital signature to produce the received digest. If the two digests match, the sender is authenticated (B knows A sent the message).'
                },
                guidance: '6 marks. Allow "data" for message, "hash"/"digest"/"checksum" as synonyms, "encrypted hash" for signature. Reject any process attributed to more than one key.' },
              '12.1': { type: 'exact',
                points: [
                  'Argument column for calls 2/3/4: [2, 5, 3], [5, 3], [3]',
                  'Bottom row (call 5): Argument = [] (empty list), Value returned = 0',
                  'Value returned column: 52, 24, 11, 3 (and 0 on the bottom row) — in order'
                ],
                guidance: '3 marks. 1 mark for the three intermediate Arguments in order. 1 mark for the empty list bottom row. 1 mark for the four returned values in order. Allow destructuring 2:[5,3] etc. Reject missing brackets.' },
              '12.2': { type: 'exact',
                points: ['A', 'The set of integers'],
                guidance: '1 mark. Reject if more than one lozenge shaded.' }
            }
          },
          {
            id: 'cs-aqa-7517-2022-p1',
            year: 'June 2022',
            paperName: 'Paper 1 — Programming (on-screen)',
            paperCode: '7517/1',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75171-QP-JUN22.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75171-MS-JUN22.PDF',
            qbqNote: "Section D code parts (Q11.1, Q12.1, Q13.1, Q14.1 — 33 marks total) are now wired up with a study-prep Python reconstruction of the Breakthrough skeleton. Each part gives you a focused starter and a test driver — write your modification, click Run to verify, then Save & Next for AI marking against the official MS. The 4 screen-capture sub-parts (Q11.2/12.2/13.2/14.2 = 5 marks) stay print-only since they're evidence of running your modified program. AQA's real Skeleton Program is centre-only — this reconstruction is for practice.",
            questions: [
              // ── SECTION A — algorithms / data structures / graphs (33 marks)
              {
                number: 1,
                parts: [
                  { code: '01',
                    preamble: "Big-O notation is used to express the time complexity of an algorithm. Table 1 contains a list of algorithms with one row pre-completed (Binary tree search = O(log n)). Complete the table for Bubble sort, Linear search and Merge sort.",
                    prompt: "State the Big-O time complexity of each of these algorithms (Bubble sort, Linear search, Merge sort).", marks: 3 }
                ]
              },
              {
                number: 2,
                scenario: "A queue data structure can be implemented as a static data structure using an array.",
                parts: [
                  { code: '02.1', prompt: "Describe the method that would need to be followed to attempt to remove an item from a circular queue implemented as a static data structure using an array.\n\nYour method should deal appropriately with any issues which could arise.", marks: 4 },
                  { code: '02.2', prompt: "Describe three differences between dynamic and static data structures.", marks: 3 },
                  { code: '02.3',
                    preamble: "Figure 1 shows data that has been stored in a stack implemented using an array S: position [0]=Harry, [1]=Skye, [2]=Jib, with Top = 2.",
                    prompt: "What value will be returned by applying the peek operation to S?", marks: 1 },
                  { code: '02.4', prompt: "What value will be returned by applying the pop operation to S?", marks: 1 },
                  { code: '02.5', prompt: "Explain how a single stack can be used to reverse the order of the items in a queue.", marks: 2 }
                ]
              },
              {
                number: 3,
                scenario: "Figure 2 shows a logic puzzle.\n\n    Which one of these six statements is correct?\n    Statement 1: All of the statements below are correct.\n    Statement 2: None of the statements below are correct.\n    Statement 3: All of the statements above are correct.\n    Statement 4: Exactly one of the statements above is correct.\n    Statement 5: None of the statements above are correct.\n    Statement 6: None of the statements above are correct.",
                parts: [
                  { code: '03.1', prompt: "Explain why Statement 1 is not correct.", marks: 1 },
                  { code: '03.2', prompt: "Which one of the six statements in Figure 2 is correct?", marks: 1 },
                  { code: '03.3', prompt: "For two statements other than Statement 1 and your answer to Question 03.2, explain why those statements are not correct.", marks: 2 }
                ]
              },
              {
                number: 4,
                scenario: "Questions 04.1–04.8 are about graph algorithms. Three subroutines are given (pseudo-code in the QP):\n\n    FUNCTION G(V, P)\n        Visited[V] ← True\n        FOR EACH N IN ConnectedNodes[V]\n            IF Visited[N] = False THEN\n                IF G(N, V) = True THEN RETURN True\n            ELSE IF N ≠ P THEN RETURN True\n        ENDFOR\n        RETURN False\n    ENDFUNCTION\n\n    FUNCTION F()\n        FOR Count ← 0 TO LENGTH(Visited) - 1\n            IF Visited[Count] = False THEN RETURN False\n        ENDFOR\n        RETURN True\n    ENDFUNCTION\n\n    FUNCTION E()\n        Set all elements of Visited to False\n        IF G(0, -1) = True THEN RETURN False\n        ELSE RETURN F()\n    ENDFUNCTION\n\nFigure 6 shows a 3-node graph and the Visited array contents after G(0,-1) — see the QP PDF for the diagram. Figure 7 shows a 4-node graph (nodes 0–3, undirected edges).",
                parts: [
                  { code: '04.1',
                    figure: { type: 'table', label: 'Table 2 — True or False?',
                      headers: ['Statement', 'True or False?'],
                      rows: [
                        ['Calculates the shortest path between a node and other nodes in a graph.', ''],
                        ['Can be used to prove that the Halting Problem cannot be solved.', ''],
                        ['Can be used with both directed and undirected graphs.', ''],
                        ['Can be used with both weighted and unweighted graphs.', '']
                      ] },
                    prompt: "For each of the statements in Table 2, complete each row to indicate if the statement is true or false for Dijkstra's algorithm.", marks: 2 },
                  { code: '04.2',
                    preamble: "The subroutine G uses recursion.",
                    prompt: "Explain what is meant by a recursive subroutine.", marks: 1 },
                  { code: '04.3',
                    figure: { type: 'table', label: 'Table 3 — F() trace (complete the unshaded cells)',
                      headers: ['Count', 'Value returned'],
                      rows: [['', '']] },
                    prompt: "Complete the unshaded cells in Table 3 to show the result of the subroutine call F() when it is applied using the graph shown in Figure 6.", marks: 2 },
                  { code: '04.4',
                    figure: { type: 'table', label: 'Table 4 — adjacency matrix for the 4-node graph in Figure 7',
                      headers: ['', '0', '1', '2', '3'],
                      rows: [['0','','','',''], ['1','','','',''], ['2','','','',''], ['3','','','','']] },
                    prompt: "Complete the unshaded cells in Table 4 to show how the graph in Figure 7 would be represented as an adjacency matrix.", marks: 1 },
                  { code: '04.5',
                    figure: { type: 'table', label: 'Table 5 — trace of G(0, -1) on the graph in Figure 7 (some cells pre-filled)',
                      headers: ['Subroutine call', 'V', 'P', '[0]', '[1]', '[2]', '[3]', 'N'],
                      rows: [
                        ['G(0, -1)', '', '', 'False', 'False', 'False', 'False', ''],
                        ['', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', ''],
                        ['Final value returned:', '', '', '', '', '', '', '']
                      ] },
                    prompt: "Complete the unshaded cells in Table 5 to show the result of the subroutine call G(0, -1) on the graph shown in Figure 7. Some parts, including the initial Visited array values, have been completed for you.", marks: 6 },
                  { code: '04.6', prompt: "What is the purpose of the subroutine G?", marks: 1 },
                  { code: '04.7', prompt: "State the type of graph traversal used in subroutine G.", marks: 1 },
                  { code: '04.8', prompt: "If the graph represented by ConnectedNodes is undirected, what can you determine about the graph when a value of True is returned by subroutine E?", marks: 1 }
                ]
              },
              // ── SECTION B — write a program from scratch (12 marks)
              {
                number: 5,
                parts: [
                  { code: '05.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Vowel reversal — AQA 7517/1 June 2022 Q05.1\n# Read a string and swap the positions of its vowels:\n# 1st vowel ↔ nth vowel, 2nd vowel ↔ (n-1)th vowel, ...\n\ns = input(\"Enter a string: \")\n# TODO: build your solution here.\nprint(s)\n"
                    },
                    testInputs: ["horse", "goose", "pinkfairyarmadillo", "nakedmolerat", "lynx", "pig"],
                    preamble: "Section B. Write a program from scratch. Use the in-browser code editor below — it runs Python directly in your browser. (Other languages: write here for the AI marker to grade against the AO3 design + programming rubric; running them in-browser isn't supported.)\n\nWrite a program that asks the user to enter a string. It should then change the order of the vowels in the string and display the result.\n\nIf there are n vowels in the string, the 1st vowel in the string should swap with the nth vowel in the string, the 2nd vowel in the string should swap with the (n−1)th vowel in the string, and so on.\n\nThe letters a, e, i, o and u are the only vowels.\n\nExamples:\n  • horse → herso\n  • goose → geoso\n  • pinkfairyarmadillo → ponkfiaryarmidalli\n  • nakedmolerat → nakedmolerat\n  • lynx → lynx (no vowels — unchanged)\n  • pig → pig (one vowel — unchanged)\n\nYou may assume the string entered will contain only lowercase letters.",
                    prompt: "Write your PROGRAM SOURCE CODE in the editor below, then click Run to test it against the suggested inputs. Save & Next once you're happy — your code will be marked against the official AO3-design + AO3-programming mark scheme.\n\n(Question 05.2 — the screen-capture test against persepolis / darius / xerxes — is done in print mode only.)", marks: 12 }
                ]
              },
              // ── SECTION C — comprehension of the Skeleton Program (17 marks)
              {
                number: 6,
                scenario: "Section C — these questions refer to the Preliminary Material and the Skeleton Program issued with the QP. Open the QP PDF (it contains the partial class diagram in Figure 8 — see pages 12–13).",
                parts: [
                  { code: '06.1', prompt: "State the type of relationship the diagram in Figure 8 shows between the class indicated by ① and the class indicated by ②.", marks: 1 },
                  { code: '06.2', prompt: "State the identifier of the class indicated by ② in Figure 8.", marks: 1 },
                  { code: '06.3', prompt: "Explain the difference between an attribute that has a public specifier and an attribute that has a protected specifier.", marks: 2 },
                  { code: '06.4', prompt: "In object-oriented programming, what is meant by overriding?", marks: 1 }
                ]
              },
              {
                number: 7,
                scenario: "This question is about the CardCollection class in the Skeleton Program. Figure 9 shows a pseudo-code version of part of the Shuffle subroutine, and Figure 10 shows an alternative INCORRECT version:\n\n    Figure 9 (correct):\n      TempCard ← Cards[RNo1]\n      Cards[RNo1] ← Cards[RNo2]\n      Cards[RNo2] ← TempCard\n\n    Figure 10 (broken):\n      Cards[RNo1] ← Cards[RNo2]\n      Cards[RNo2] ← Cards[RNo1]",
                parts: [
                  { code: '07.1', prompt: "Explain why the Shuffle subroutine would not work if it used the method shown in Figure 10 instead of the method shown in Figure 9.", marks: 1 },
                  { code: '07.2',
                    preamble: "The CardCollection class uses a list to store the cards.",
                    prompt: "State one reason why a set could not have been used instead of a list.", marks: 1 },
                  { code: '07.3',
                    preamble: "A hash table could have been used instead of a list.",
                    prompt: "Describe how a card would be added to a hash table.", marks: 3 },
                  { code: '07.4',
                    preamble: "A hash table can be used to implement a dictionary data structure.",
                    prompt: "Explain why a hash table is a suitable choice.", marks: 1 }
                ]
              },
              {
                number: 8,
                scenario: "Figure 11 in the QP shows an incomplete hierarchy diagram of the user-defined subroutines in part of the Skeleton Program. One box is marked ③. The SetupGame subroutine contains code that uses the value 5 and calls LoadGame.",
                parts: [
                  { code: '08.1', prompt: "Which identifier should replace ③ (from Figure 11)?", marks: 1 },
                  { code: '08.2',
                    preamble: "The value 5 is used in the subroutine SetupGame. It would be better to use a named constant with an identifier that describes the purpose of the constant.",
                    prompt: "Suggest a suitable identifier for the named constant.", marks: 1 },
                  { code: '08.3', prompt: "State one actual data value that will always be in the stack frame added to the stack when the subroutine LoadGame is called from the SetupGame subroutine.", marks: 1 },
                  { code: '08.4', prompt: "Explain why the call to the subroutine AddDifficultyCardsToDeck is after, not before, the iteration structure in the SetupGame subroutine.", marks: 1 }
                ]
              },
              {
                number: 9,
                parts: [
                  { code: '09', prompt: "How many subroutines in the Skeleton Program access external data files?\n\n(Answer expected: count subroutines that read from / write to a file. Refer to the Skeleton Program file your centre received for the live exam.)", marks: 1 }
                ]
              },
              {
                number: 10,
                parts: [
                  { code: '10',
                    preamble: "The user must input a D or P to select Discard or Play during a game.",
                    prompt: "Write a regular expression that would match the character D or P.\n\nYou should not make any changes to the Skeleton Program to answer this question.", marks: 1 }
                ]
              },
              // ── SECTION D — Skeleton Program modifications (33 marks).
              // Each question targets a different focused subroutine, with a
              // study-prep Python reconstruction of just the relevant piece
              // of the Breakthrough skeleton. Screen-capture sub-parts
              // (Q*.2 = 5 marks total) stay print-only — they're literally
              // "show a screenshot of your terminal".
              {
                number: 11,
                scenario: "Section D — these questions modify subroutines inside the Breakthrough skeleton. The skeleton in front of you below is a study-prep reconstruction in Python that mirrors the relevant subroutine + just enough context to test your modification. AQA's official Skeleton Program is distributed to centres only — this reconstruction is for practice. Run your modified code with the test inputs to verify behaviour; AI marks against the official AQA mark scheme.",
                parts: [
                  { code: '11.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Breakthrough Skeleton — AQA CS 7517/1 June 2022, Q11.1\n# ────────────────────────────────────────────────────────────────────\n# Study-prep reconstruction. The real AQA Skeleton Program is centre-only.\n#\n# Q11 task: Modify the GetDiscardOrPlayChoice subroutine so it checks\n# that the value entered by the player is valid (only D or P are\n# allowed). An appropriate error message should be displayed if an\n# invalid value is entered and the user should be made to enter\n# another value.\n\nclass Breakthrough:\n    def GetDiscardOrPlayChoice(self):\n        # ── ORIGINAL VERSION — modify this ──\n        # Currently reads one line of input with no validation, so any\n        # value is accepted. Wrap this in a loop that keeps asking\n        # until the input is D or P, and shows an error in between.\n        Choice = input(\"Enter D to discard or P to play: \").upper()\n        return Choice\n\n\n# ── Test driver (do not modify) ──\n# The QP test enters L (invalid) then D (valid). Your modified subroutine\n# should reject L with an error message and accept D.\ngame = Breakthrough()\nresult = game.GetDiscardOrPlayChoice()\nprint(f\"--- GetDiscardOrPlayChoice returned: {result!r}\")\n"
                    },
                    testInputs: ["L", "D"],
                    prompt: "Modify the subroutine GetDiscardOrPlayChoice so it checks that the value entered by the player is valid. An appropriate error message should be displayed if an invalid value is entered and the user should be made to enter another value.\n\nClick ▶ Run with the test inputs L, D. A correct modification rejects L with an error then accepts D.\n\n(Question 11.2 — the screen-capture evidence — is print-only.)", marks: 4 }
                ]
              },
              {
                number: 12,
                parts: [
                  { code: '12.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Breakthrough Skeleton — AQA CS 7517/1 June 2022, Q12.1\n# ────────────────────────────────────────────────────────────────────\n# Q12 task:\n#   1. Create a subroutine GetNumberOfToolCards in CardCollection that\n#      returns the count of tool cards (CardType in {'P','F','K'} —\n#      pick, file, key) in self.Cards.\n#   2. Modify PlayGame so that AFTER the score is displayed and BEFORE\n#      the hand is displayed, two messages are shown:\n#        - how many cards are in the deck\n#        - how many tool cards are in the deck\n\nclass Card:\n    def __init__(self, card_number, card_type):\n        self.CardNumber = card_number\n        self.CardType = card_type   # 'P', 'F', 'K', 'Dif'\n    def GetCardType(self):\n        return self.CardType\n    def __str__(self):\n        return f\"{self.CardNumber}{self.CardType}\"\n\n\nclass CardCollection:\n    def __init__(self):\n        self.Cards = []\n    def AddCard(self, card):\n        self.Cards.append(card)\n    def GetNumberOfCards(self):\n        return len(self.Cards)\n    def __str__(self):\n        return ' '.join(str(c) for c in self.Cards)\n\n    # ── TODO Q12.1 Task 2 ──\n    # Add a method GetNumberOfToolCards(self) below that iterates through\n    # self.Cards and returns the count of cards whose CardType is one of\n    # 'P', 'F', 'K'. It should return that integer count.\n\n\nclass Breakthrough:\n    def __init__(self):\n        self.Score = 0\n        self.Deck = CardCollection()\n        self.Hand = CardCollection()\n        # Sample deck: 33 cards — 28 tools (P/F/K) + 5 difficulty cards\n        for i in range(1, 11):  self.Deck.AddCard(Card(i, 'P'))\n        for i in range(11, 20): self.Deck.AddCard(Card(i, 'F'))\n        for i in range(20, 29): self.Deck.AddCard(Card(i, 'K'))\n        for i in range(29, 34): self.Deck.AddCard(Card(i, 'Dif'))\n        for i in range(1, 6):   self.Hand.AddCard(Card(40 + i, 'P'))\n\n    def PlayGame(self):\n        # ── ORIGINAL VERSION — modify this ──\n        # Currently just shows score + hand. Add the two messages between\n        # them as described above (use GetNumberOfToolCards for the second).\n        print(f\"Your current score is: {self.Score}\")\n        print(f\"Your hand: {self.Hand}\")\n\n\n# ── Test driver (do not modify) ──\ngame = Breakthrough()\ngame.PlayGame()\ntry:\n    count = game.Deck.GetNumberOfToolCards()\n    print(f\"--- GetNumberOfToolCards returned: {count}  (expected 28)\")\nexcept AttributeError:\n    print(\"--- GetNumberOfToolCards not yet defined on CardCollection.\")\n"
                    },
                    testInputs: [],
                    prompt: "Implement BOTH tasks: (1) create GetNumberOfToolCards in CardCollection, (2) modify PlayGame to show deck size and tool-card count between the score and the hand.\n\nClick ▶ Run. A correct modification prints:\n  Your current score is: 0\n  There are 33 cards in the deck\n  There are 28 tool cards in the deck\n  Your hand: 41P 42P 43P 44P 45P\n  --- GetNumberOfToolCards returned: 28\n\n(Question 12.2 — screen-capture evidence — is print-only.)", marks: 8 }
                ]
              },
              {
                number: 13,
                parts: [
                  { code: '13.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Breakthrough Skeleton — AQA CS 7517/1 June 2022, Q13.1\n# ────────────────────────────────────────────────────────────────────\n# Q13 task: Add a blasting cap feature.\n#   • The player can use the blasting cap ONCE per game.\n#   • When chosen, the program should:\n#       - check if the cap has already been used. If yes → nothing\n#         happens, game continues.\n#       - otherwise ask which challenge on the current lock to complete\n#         (1, 2, 3, …).\n#       - check: position ≤ number of challenges AND that challenge\n#         isn't already met.\n#       - if both pass: mark it met, mark cap used, show success.\n#       - if either fails: cap is wasted (marked used, no challenge\n#         completed), game continues.\n\nclass Lock:\n    def __init__(self, challenges):\n        self.Challenges = challenges  # list[bool], True = met\n    def __str__(self):\n        return ' '.join('[X]' if c else '[ ]' for c in self.Challenges)\n\n\nclass Breakthrough:\n    def __init__(self):\n        # Current lock has 4 challenges, none initially met\n        self.CurrentLock = Lock([False, False, False, False])\n        # ── TODO Q13.1 Task 1: add a variable that tracks blasting-cap state ──\n        # e.g. self.BlastingCapAvailable = True  (or HasUsedBlastingCap = False)\n\n    def GetChoice(self):\n        # ── TODO Q13.1 Task 1: also offer 'B' for blasting cap ──\n        print(\"Choose: (D)raw, (P)lay, (U)se, (Q)uit:\", end=' ')\n        return input().upper()\n\n    def PlayGame(self):\n        # Game loop. Modify so a 'B' choice triggers the blasting-cap\n        # behaviour described in the task.\n        while True:\n            print(f\"Lock: {self.CurrentLock}\")\n            choice = self.GetChoice()\n            if choice == 'Q':\n                print(\"Goodbye.\")\n                break\n            elif choice == 'B':\n                # ── TODO Q13.1 Task 2: implement blasting-cap logic here ──\n                print(\"(blasting cap not implemented yet)\")\n            else:\n                print(f\"You chose: {choice}\")\n\n\n# ── Test driver (do not modify) ──\n# The QP test:\n#   • use blasting cap on challenge 3 (succeeds — challenge 3 becomes met)\n#   • use blasting cap again (already used — nothing happens)\ngame = Breakthrough()\ngame.PlayGame()\n"
                    },
                    testInputs: ["B", "3", "B", "3", "Q"],
                    prompt: "Modify the program so the player can use a blasting cap to complete any challenge on the current lock — only once per game.\n\nClick ▶ Run. A correct modification:\n  • First B/3: marks challenge 3 met, shows success message, marks cap used\n  • Second B: shows nothing happens (cap already used)\n\n(Question 13.2 — screen-capture evidence — is print-only.)", marks: 9 }
                ]
              },
              {
                number: 14,
                parts: [
                  { code: '14.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Breakthrough Skeleton — AQA CS 7517/1 June 2022, Q14.1\n# ────────────────────────────────────────────────────────────────────\n# Q14 task: Add a new type of difficulty card, TrapCard.\n#   1. Create class TrapCard as a subclass of DifficultyCard.\n#      Constructor sets CardNumber from its parameter and CardType to 'Trp'.\n#   2. Create a Process subroutine in TrapCard that overrides the one\n#      in DifficultyCard:\n#        - if NO challenges on current lock have been met → behave like\n#          a normal DifficultyCard (player loses a key)\n#        - if ≥1 challenges have been met → randomly pick one met\n#          challenge and flip it to NOT met (instead of the Dif effect)\n#   3. Modify SetupCardCollectionFromGameFile to create TrapCards\n#      instead of DifficultyCards.\n#   4. Modify GetCardFromDeck so that if the drawn card has CardType\n#      'Trp', the message 'Trap!' is displayed, then it's processed\n#      like a Dif card.\n\nimport random\n\n\nclass Card:\n    def __init__(self, card_number):\n        self.CardNumber = card_number\n        self.CardType = ''\n    def GetCardType(self):\n        return self.CardType\n\n\nclass DifficultyCard(Card):\n    def __init__(self, card_number):\n        super().__init__(card_number)\n        self.CardType = 'Dif'\n    def Process(self, game):\n        print(\"Difficulty: you lost a key.\")\n        game.Keys -= 1\n\n\n# ── TODO Q14.1 Task 1: Create the TrapCard subclass below ──\n# class TrapCard(DifficultyCard):\n#     def __init__(self, card_number):\n#         ...\n#     def Process(self, game):\n#         ...\n\n\nclass Lock:\n    def __init__(self, challenges):\n        self.Challenges = challenges  # list[bool], True = met\n    def __str__(self):\n        return ' '.join('[X]' if c else '[ ]' for c in self.Challenges)\n\n\nclass Breakthrough:\n    def __init__(self, loaded_from_file=False):\n        self.Keys = 3\n        self.CurrentLock = Lock([True, False, True, False])  # mixed initial state\n        self.Deck = []\n        if loaded_from_file:\n            self.SetupCardCollectionFromGameFile()\n        else:\n            self.Deck.append(DifficultyCard(1))\n\n    def SetupCardCollectionFromGameFile(self):\n        # ── TODO Q14.1 Task 2: change DifficultyCard → TrapCard ──\n        self.Deck.append(DifficultyCard(1))\n\n    def GetCardFromDeck(self):\n        # ── TODO Q14.1 Task 3: if CardType is 'Trp', print 'Trap!' before processing ──\n        card = self.Deck.pop(0)\n        card.Process(self)\n        return card\n\n\n# ── Test driver (do not modify) ──\nrandom.seed(42)  # deterministic for the test\nprint(\"=== Test 1: default game (DifficultyCard) ===\")\ngame1 = Breakthrough(loaded_from_file=False)\ncard = game1.GetCardFromDeck()\nprint(f\"Drew: {type(card).__name__} (CardType={card.CardType!r})\")\nprint(f\"Keys after: {game1.Keys}\")\n\nprint(\"\\n=== Test 2: loaded game (TrapCard with some met challenges) ===\")\ngame2 = Breakthrough(loaded_from_file=True)\nprint(f\"Lock before: {game2.CurrentLock}\")\ncard = game2.GetCardFromDeck()\nprint(f\"Drew: {type(card).__name__} (CardType={card.CardType!r})\")\nprint(f\"Lock after:  {game2.CurrentLock}\")\nprint(f\"Keys after:  {game2.Keys}  (should still be 3 — TrapCard flips a challenge instead)\")\n"
                    },
                    testInputs: [],
                    prompt: "Implement ALL FOUR tasks: TrapCard class, override Process (random met-challenge flip vs. fall back to Dif behaviour), modify SetupCardCollectionFromGameFile, and modify GetCardFromDeck to print 'Trap!' for Trp cards.\n\nClick ▶ Run. A correct implementation:\n  Test 1 → \"DifficultyCard\" drawn, key lost (Keys = 2)\n  Test 2 → \"Trap!\" printed, \"TrapCard\" drawn, one of the met challenges is now unmet, Keys still 3\n\n(Question 14.2 — screen-capture evidence — is print-only.)", marks: 12 }
                ]
              }
            ],
            markSchemes: {
              '01': { type: 'points',
                points: [
                  'Bubble sort: O(n²)',
                  'Linear search: O(n)',
                  'Merge sort: O(n log n) (A. O(n × log n); NE. O(log n); A. log₂ instead of log)'
                ],
                guidance: '3 marks: 1 mark per correct row. I. missing brackets. I. missing O.' },
              '02.1': { type: 'points',
                points: [
                  'Check the queue is (not already) empty',
                  'Compare the value of the front pointer with the maximum size of the array (or array max − 1, depending on convention)',
                  'If equal then front pointer becomes one / becomes zero (A. index of first position)',
                  'Otherwise (or instead of the wrap-around step), add one to the front pointer',
                  'Alternative: use a modulus / modulo operator with the new value of the front pointer and the maximum size of the array'
                ],
                guidance: '4 marks. Max 3 if any errors. Multiple valid alternative orderings — accept any that correctly handles empty-check + wrap-around.' },
              '02.2': { type: 'points',
                points: [
                  'Static data structures have storage size determined at compile-time / before program is run / before the data structure is first used // dynamic data structures can grow / shrink during execution / at run-time',
                  'Static data structures have fixed (maximum) size // size of dynamic data structures can change',
                  'Static data structures can waste storage space / memory if the number of data items stored is small relative to the size of the structure // dynamic data structures only take up the amount of storage required for the actual data',
                  'Dynamic data structures require (memory to store) pointers to the next item(s) // static data structures (typically) do not need pointers',
                  'Static data structures (typically) store data in consecutive memory locations // dynamic data structures (typically) do not'
                ],
                guidance: 'Max 3. Each point requires both sides of the comparison.' },
              '02.3': { type: 'exact',
                points: ['Jib'],
                guidance: '1 mark for Jib.' },
              '02.4': { type: 'exact',
                points: ['Jib'],
                guidance: '1 mark for Jib.' },
              '02.5': { type: 'points',
                points: [
                  '(Until the queue is empty) repeatedly remove / delete (the front item) from the queue and push it on to the stack',
                  '(Until the stack is empty) repeatedly pop items from the stack and add them to the (rear of the) queue'
                ],
                guidance: '2 marks: 1 per step.' },
              '03.1': { type: 'points',
                points: [
                  "Statement 1 can't be correct because it means Statement 5 / Statement 6 is true, which means Statement 1 is false",
                  "Statement 1 can't be correct because it would mean Statement 2 is correct, which would mean all of the other statements have to be both correct and incorrect",
                  "Statement 1 can't be correct because it would mean Statement 4 is correct, which means that Statements 2 and 3 have to be both correct and incorrect",
                  "Question says only one of the statements is true so Statement 1 can't be true as that would mean more than one statement would be true"
                ],
                guidance: 'Max 1.' },
              '03.2': { type: 'exact',
                points: ['Statement 5', '5'],
                guidance: '1 mark for 5 (Statement 5).' },
              '03.3': { type: 'points',
                points: [
                  "Statement 3 can't be correct because Statement 1 is false",
                  "Statement 3 can't be correct because the question says only one of the statements is correct",
                  "Statement 3 can't be correct because that would mean Statement 2 would be a contradiction (this would mean Statement 3 would have to be incorrect)",
                  "If Statement 2 is true then Statement 4 has to be false. Working through the contradictions, Statement 2 must be false",
                  'Statements 1, 2 and 3 are false so Statement 4 is false',
                  'If Statement 6 is true then 5 has to be false, implying at least one of Statements 1 to 4 has to be true — but they are all false, so Statement 6 has to be false'
                ],
                guidance: 'Max 2. One mark per correctly-reasoned elimination.' },
              '04.1': { type: 'exact',
                points: [
                  'Calculates the shortest path between a node and other nodes in a graph: True',
                  'Can be used to prove the Halting Problem cannot be solved: False',
                  'Can be used with both directed and undirected graphs: True',
                  'Can be used with both weighted and unweighted graphs: False'
                ],
                guidance: '2 marks for all rows correct. 1 mark for three rows correct.' },
              '04.2': { type: 'exact',
                points: ['A subroutine that calls itself'],
                guidance: '1 mark.' },
              '04.3': { type: 'points',
                points: [
                  'Count column shows 0 (then perhaps 1, but consecutive instances of 0 / blank cells are I.)',
                  'Value returned: False'
                ],
                guidance: '2 marks (1 per point). I. repeated consecutive instances of values. I. blank cells. Max 1 if any errors.' },
              '04.4': { type: 'exact',
                points: [
                  'Row 0: 0,1,1,1 (or blank,1,1,1)',
                  'Row 1: 1,0,0,1',
                  'Row 2: 1,0,0,0',
                  'Row 3: 1,1,0,0 (final cell 0)'
                ],
                guidance: '1 mark for fully-correct adjacency matrix. A. any suitable indicators instead of 0 and 1. A. blank cell instead of 0 (R. if usage inconsistent).' },
              '04.5': { type: 'points',
                points: [
                  'Visited[0] set to True and then not changed',
                  'Visited[1] set to True and not changed; Visited[3] set to True and not changed; Visited[2] always has value False',
                  'Second subroutine call is G(1, 0) (I. repeated consecutive instances of this call)',
                  'Third and final subroutine call is G(3, 1) (I. repeated consecutive instances; I. missing calls G(1, 0) and G(0, -1))',
                  'Value returned is True',
                  'N column contains correct values (A. values of 3 in 2nd-last cell for N and value of 1 in last cell for N, instead of blank cells)'
                ],
                guidance: '6 marks. Max 5 if any errors.' },
              '04.6': { type: 'exact',
                points: ['Determine if a graph contains a cycle or not', 'cycle detection'],
                guidance: '1 mark for "detects whether the graph contains a cycle".' },
              '04.7': { type: 'exact',
                points: ['Depth-first search', 'DFS', 'depth-first'],
                guidance: '1 mark.' },
              '04.8': { type: 'exact',
                points: ['The graph is a tree', 'tree'],
                guidance: '1 mark.' },
              '05.1': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'A line of reasoning has been followed to arrive at a logically structured working or almost fully working programmed solution that meets most of the requirements. All of the appropriate design decisions have been taken. To award 12 marks, ALL requirements must be met.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'Evidence that a line of reasoning has been followed to produce a logically structured program. The program displays relevant prompts, inputs the required string, has at least one iterative structure and at least one selection structure, and uses appropriate variables to store most of the needed data. An attempt has been made to swap the positions of vowels in the string, although this may not work correctly under all circumstances.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'A program has been written and some appropriate, syntactically correct programming language statements are present. There is evidence that a line of reasoning has been partially followed.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A program has been written and a few appropriate programming language statements have been written but there is no evidence that a line of reasoning has been followed to arrive at a working solution.' }
                ],
                indicative: {
                  'AO3 Design (4 marks)': '1) Identify that string concatenation / list-character swap is needed when swapping vowels in the string. 2) Identify that a loop is needed that repeats a number of times determined by the length of the word (or the number of vowels in it). 3) Identify that two integer variables are needed for character positions (or an ordered list of vowel positions, or one integer giving the distance from the start/end of the string). 4) A selection structure that checks if a character is a vowel.',
                  'AO3 Programming (8 marks)': '5) Suitable prompt asking the user to enter a string + user input assigned to an appropriate variable. 6) Iterative structure that repeats enough times to check all characters in the string. 7) Correctly checks if a character is a vowel. 8) Correctly checks ALL characters in the string for vowels. 9) Swaps / moves the position of two characters in the string. 10) Program only moves the position of vowels. 11) Program works correctly if the string contains one vowel and works correctly if no vowels. 12) Program works correctly under ALL circumstances.'
                },
                guidance: '12 marks (4 AO3 design + 8 AO3 programming). DPT. mark points 7 and 8 if only checks for some vowels or includes at most one non-vowel character. Max 11 if any errors. I. additional outer loop to repeat the program.' },
              '06.1': { type: 'exact',
                points: ['Inheritance'],
                guidance: '1 mark.' },
              '06.2': { type: 'exact',
                points: ['Card'],
                guidance: '1 mark. R. if spelt incorrectly. R. if any additional code. I. case.' },
              '06.3': { type: 'points',
                points: [
                  'Public means it can be accessed / seen outside of the class it is in',
                  'Protected means it can be accessed / seen in the class it is in and in any subclasses (or any class inheriting from it)'
                ],
                guidance: '2 marks (1 per access specifier). A. Java-only definition for "protected" referring to packages and subclasses in any package.' },
              '06.4': { type: 'exact',
                points: ['When a derived class / subclass has a different implementation for a method / function / subroutine to the class it inherits from / the base class'],
                guidance: '1 mark.' },
              '07.1': { type: 'points',
                points: [
                  'There will end up being two copies of the second card (A. "a card")',
                  'The first card (A. "a card") will be overwritten'
                ],
                guidance: 'Max 1.' },
              '07.2': { type: 'exact',
                points: ['Because sets are unordered', 'because the cards have an order'],
                guidance: '1 mark. R. "because sets only allow one instance of a value to be stored".' },
              '07.3': { type: 'points',
                points: [
                  'AO2 — Hash algorithm / function applied to CardNumber (NE. "primary key")',
                  'AO1 — Result indicates location that card should be stored in',
                  'AO1 — If there is already a card in that location, a method is needed to deal with collisions (A. description of any suitable collision-resolution method)'
                ],
                guidance: '3 marks: 1 AO2 + 2 AO1.' },
              '07.4': { type: 'points',
                points: [
                  'Allows direct (A. faster) access to the value being looked-up',
                  'No need to search through the list to find a value (assuming a good choice of hash function)'
                ],
                guidance: 'Max 1.' },
              '08.1': { type: 'exact',
                points: ['ProcessLockSolved'],
                guidance: '1 mark. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '08.2': { type: 'exact',
                points: ['MaxHandSize', 'HandSize'],
                guidance: '1 mark. A. any suitable identifier that makes it clear the constant represents the hand size.' },
              '08.3': { type: 'exact',
                points: ['game1.txt'],
                guidance: '1 mark. I. quotation marks around game1.txt.' },
              '08.4': { type: 'exact',
                points: ["To make sure no difficulty cards are put into the player's hand"],
                guidance: '1 mark.' },
              '09': { type: 'exact',
                points: ['2'],
                guidance: '1 mark for 2.' },
              '10': { type: 'exact',
                points: ['D|P', '[DP]', 'P|D', '[PD]'],
                guidance: '1 mark for any of D|P, [DP], P|D, [PD]. I. use of quotes around each character. A. use of ^ and/or $ in expression as long as done correctly.' },
              // ── Section D mark schemes (Q11.1–Q14.1 = 33 marks). All AO3
              // programming marks against the official MS bullet lists.
              '11.1': { type: 'points',
                points: [
                  'AO3 programming — Iterative structure contains code that gets the choice from the player (e.g. while loop containing input())',
                  "AO3 programming — One correct condition (e.g. condition that checks if the input is 'D' OR is 'P', or that checks the input is NOT 'D' / NOT 'P')",
                  'AO3 programming — Both correct conditions and correct logic (the loop continues iff input is neither D nor P; combined with the right boolean operator)',
                  "AO3 programming — Displays an error message under all correct circumstances and only under correct circumstances (shown when invalid input was entered, not shown when valid input was entered)"
                ],
                guidance: '4 marks total. Max 3 if code contains errors. The AI marker should look for: a loop (while / repeat-until / equivalent); one or both validity conditions on D and P; and an error-message print that fires exactly when the input is invalid. Original starter had no validation at all — credit any iteration + validation that follows the QP brief.' },
              '12.1': { type: 'points',
                points: [
                  'AO3 programming — Creating a new subroutine called GetNumberOfToolCards (R. other identifiers; I. case; I. minor spelling mistakes)',
                  'AO3 programming — New subroutine has a mechanism to return an integer value (I. incorrect value; A. other numeric data types)',
                  'AO3 programming — Iterative structure that repeats a number of times based on the size of Cards (e.g. for c in self.Cards / for i in range(len(self.Cards)))',
                  'AO3 programming — Gets the type of the card inside the iterative structure (e.g. c.CardType or c.GetCardType())',
                  "AO3 programming — Selection structure inside the iterative structure that compares the card type with at least one of 'P', 'F' or 'K'",
                  "AO3 programming — Selection structure has the correct conditions and the value to return is incremented by one inside the selection structure (e.g. += 1)",
                  'AO3 programming (PlayGame) — Valid call(s) to GetNumberOfToolCards and/or GetNumberOfCards, with the value returned by the call(s) displayed (A. alternative identifier for the new subroutine if it matches the identifier used in the first mark point)',
                  "AO3 programming (PlayGame) — Appropriate messages displayed along with the values returned (R. if printed BEFORE the score; R. if printed AFTER the hand — they must appear between the score and the hand per the task brief)"
                ],
                guidance: '8 marks total. Max 7 if code contains errors. Alternative answer for mark points 5 and 6: a selection structure that checks for CardType == "Dif" and increments a counter, then subtracts that count from GetNumberOfCards() before returning (same outcome, opposite direction). Alternative answer for mark points 4 and 5: gets the SCORE for the card and compares it with zero (also a valid reading of "tool card" if the skeleton scores Dif cards as 0). Either alternative path earns the same marks.' },
              '13.1': { type: 'points',
                points: [
                  'AO3 programming — Create a variable with an appropriate name and data type to track blasting-cap state (e.g. BlastingCapAvailable = True, or HasUsedBlastingCap = False). Must NOT be inside the iterative game loop',
                  "AO3 programming — Selection structure (in GetChoice or equivalent) that checks for the player's choice being 'B' (or a suitable alternative letter), with an appropriately modified prompt message",
                  'AO3 programming — Selection structure that checks if the player has a blasting cap (or does NOT have a blasting cap)',
                  "AO3 programming — If the player has a blasting cap (A. incorrect condition), get the player's choice of challenge (R. if value is not an integer, unless converted before use)",
                  'AO3 programming — If they chose to use a blasting cap (A. incorrect condition), set the variable used to indicate if there is a blasting cap to False / used (or equivalent)',
                  "AO3 programming — Selection structure that checks the player's choice of challenge is less than or equal to the number of challenges on the current lock",
                  'AO3 programming — Selection structure that checks the chosen challenge has NOT already been met (R. if checks the wrong challenge)',
                  'AO3 programming — If conditions for both checks are met, display a message saying the blasting cap has been used (I. incorrect logic for the selection structure)',
                  'AO3 programming — Changes the met status of the challenge specified by the player, inside the selection structure(s) for the two checks (R. if changes the wrong challenge)'
                ],
                guidance: '9 marks total. Max 8 if code contains errors. The AI marker should accept any 1-indexed or 0-indexed challenge position as long as the off-by-one is consistent within the student\'s code.' },
              '14.1': { type: 'points',
                points: [
                  'AO3 programming — Create a new class called TrapCard (R. other names for the class; I. case and minor typos)',
                  'AO3 programming — TrapCard inherits from DifficultyCard',
                  "AO3 programming — Constructor sets the value of CardNumber to the value of its parameter (NOT a hard-coded value)",
                  "AO3 programming — Constructor sets the value of CardType to 'Trp' (R. 'trp' lowercase if inconsistent with the skeleton's CardType naming)",
                  'AO3 programming — Process subroutine in TrapCard overrides the one in DifficultyCard',
                  "AO3 programming — Process correctly identifies whether there are any met challenges on the current lock",
                  'AO3 programming — Process uses a random-selection mechanism to pick one met challenge (e.g. random.choice on the list of met-challenge indices)',
                  "AO3 programming — Process changes the met status of the randomly-selected challenge so it is no longer met",
                  "AO3 programming — When no met challenges exist, Process falls back to standard DifficultyCard behaviour (player loses a key / discards five cards)",
                  'AO3 programming — Modify SetupCardCollectionFromGameFile so it creates TrapCard objects instead of DifficultyCard objects',
                  "AO3 programming — Modify GetCardFromDeck so that if the drawn card has CardType 'Trp', the message 'Trap!' is displayed",
                  "AO3 programming — In GetCardFromDeck, the Trp card is then processed in the same way as a 'Dif' card (i.e. Process is called)"
                ],
                guidance: '12 marks total. Max 11 if code contains errors. The AI marker should check that Process correctly branches on whether ANY met challenges exist and that the random-pick logic only considers met challenges (not all challenges).' }
            }
          },
          {
            id: 'cs-aqa-7517-2022-p2',
            year: 'June 2022',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75172-QP-JUN22.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75172-MS-JUN22.PDF',
            questions: [
              {
                number: 1,
                parts: [
                  { code: '01.1', prompt: "Describe how a 12-bit unsigned binary integer such as 010010101110 can be converted directly into hexadecimal.\n\nThe method you describe must not involve converting into decimal.", marks: 2 },
                  { code: '01.2', prompt: "State one reason why hexadecimal is often used in preference to binary.", marks: 1 }
                ]
              },
              {
                number: 2,
                parts: [
                  { code: '02.1', preamble: "A data communications system uses parallel data transmission.",
                    prompt: "Describe how parallel data transmission works.", marks: 2 },
                  { code: '02.2', prompt: "State one advantage of serial data transmission over parallel data transmission.", marks: 1 },
                  { code: '02.3', prompt: "Shade one lozenge to indicate which of these statements about data communications systems is false.\n\nA) For a particular communications channel, the bit rate can be higher than the baud rate.\nB) Latency is the rate at which signals on a wire or line can change.\nC) The bandwidth of a transmission medium is the range of signal frequencies that the medium can transmit without a significant reduction in signal strength.\nD) The greater the bandwidth of a transmission medium the higher the bit rate that can be achieved by a communication system using it.", marks: 1 },
                  { code: '02.4', prompt: "State the purpose of the start bit in asynchronous serial transmission.", marks: 1 },
                  { code: '02.5', prompt: "State the purpose of the stop bit in asynchronous serial transmission.", marks: 1 }
                ]
              },
              {
                number: 3,
                parts: [
                  { code: '03.1',
                    figure: { type: 'table', label: 'Figure 1 — truth table to complete',
                      headers: ['A', 'B', 'A + B', 'Ā', 'B̄', 'Ā · B̄', '¬(Ā · B̄)'],
                      rows: [
                        ['0','0','','','','',''],
                        ['0','1','','','','',''],
                        ['1','0','','','','',''],
                        ['1','1','','','','','']
                      ] },
                    prompt: "Complete the truth table in Figure 1 for the inputs A and B.", marks: 1 },
                  { code: '03.2',
                    preamble: "The truth table in Figure 1 demonstrates the correctness of an important law in Boolean algebra.",
                    prompt: "State the name of the law.", marks: 1 },
                  { code: '03.3',
                    prompt: "Using the rules of Boolean algebra, simplify the following Boolean expression:\n\n    A + B̄·C + B·C̄ + C̄ · (A + Ā · (B̄ + 1))\n\n(See the official PDF for exact overline notation.)\n\nYou must show your working.", marks: 4 }
                ]
              },
              {
                number: 4,
                parts: [
                  { code: '04.1', prompt: "Define the term 'system software'.", marks: 1 },
                  { code: '04.2',
                    preamble: "The list below contains five types of software. Four of the types are examples of system software.",
                    prompt: "Shade one lozenge to indicate which type of software is not system software.\n\nA) Assemblers\nB) Bitmap image editors\nC) Interpreters\nD) Libraries\nE) Utility programs", marks: 1 },
                  { code: '04.3', prompt: "Describe two functions of an operating system.", marks: 2 }
                ]
              },
              {
                number: 5,
                parts: [
                  { code: '05.1',
                    preamble: "Figure 2 shows a number stored using a fixed point representation and two's complement, with six bits before and four bits after the binary point.",
                    figure: { type: 'code', label: 'Figure 2',
                      content: "1 0 1 1 0 0 . 1 0 1 1     (binary point between bit 6 and bit 7)" },
                    prompt: "Convert the number in Figure 2 to decimal.\n\nYou should show your working.", marks: 2 },
                  { code: '05.2', prompt: "State two reasons why values stored using a floating point representation are usually stored in normalised form.", marks: 2 },
                  { code: '05.3',
                    preamble: "Questions 05.3, 05.4 and 05.5 use a normalised floating point representation with an 8-bit mantissa and a 4-bit exponent, both stored using two's complement.\n\nFigure 3 shows a floating point representation of a number.",
                    figure: { type: 'code', label: 'Figure 3',
                      content: "Mantissa: 0 . 1 1 0 1 1 0 0 0     (binary point after the first bit)\nExponent: 1 0 0 1     (decimal −7)" },
                    prompt: "Calculate the decimal equivalent of the number.\n\nExpress your answer as a fraction or to 4 decimal places.\n\nYou should show your working.", marks: 2 },
                  { code: '05.4',
                    preamble: "Same floating point system as 05.3 (8-bit mantissa, 4-bit exponent, both two's complement; binary point after first bit of mantissa).",
                    prompt: "Write the normalised floating point representation of the decimal value −23.25 in the boxes below.\n\nYou should show your working.", marks: 3 },
                  { code: '05.5',
                    preamble: "Figure 4 shows the closest possible representation of the decimal number −0.22558594 in this floating point system.\n\nBy converting this number back to decimal it can be seen that the actual value stored is −0.2265625",
                    prompt: "Calculate the relative error that has occurred when representing −0.22558594\n\nYou should show your working.\n\nExpress your answer as a percentage to 2 decimal places.", marks: 2 }
                ]
              },
              {
                number: 6,
                parts: [
                  { code: '06', extended: true,
                    scenario: "Supermarkets often gather information about their customers and the purchases that they make. This information can be analysed by the supermarket and other companies for a range of purposes.\n\nSome of the information is collected at the checkout, where the identity of the person is read from a loyalty or payment card using RFID (radio-frequency identification) and a barcode reader is used to identify the products being purchased.\n\nBy analysing the purchases that a shopper has made, it might be possible to identify such things as whether the shopper has children, is pregnant, or lives in a house with a garden. Other types of analysis might include the amount of money a customer spends, the times that they choose to shop at and the differences in shopping habits of different groups of shoppers.",
                    prompt: "Describe the principles of operation of the hardware used to collect the information and discuss some of the ethical and legal issues that might arise as a result of the capture and processing of this data.\n\nIn your answer you will be assessed on your ability to follow a line of reasoning to produce a coherent, relevant and structured response.", marks: 12 }
                ]
              },
              {
                number: 7,
                scenario: "A network of zoos uses a relational database system to store information about the animals that they have so that they can be matched up with animals at other zoos in a breeding programme.\n\nFigure 5 shows the structure of the relations in the database.",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 5',
                    content: "Zoo(ZooName, Town, Country)\nAnimalLocation(AnimalID, ZooName, DateArrived, DateLeft)\nAnimal(AnimalID, IndividualName, Species, DateOfBirth, Sex)\nMatch(AnimalFemaleID, AnimalMaleID, DateOfMatch, Successful)\n\n• Zoo: each zoo uniquely identified by its ZooName.\n• AnimalLocation: identifies which zoos each animal has lived at. The zoo the animal is currently at can be identified because DateLeft is set to 01/01/0001 to indicate the animal has not left.\n• Animal: stores details of individual animals available to be matched (eg 'Timothy', 'Red Panda', date of birth, 'Male' or 'Female').\n• Match: stores details of matches that have been made between two animals." }
                ],
                parts: [
                  { code: '07.1',
                    prompt: "Shade one lozenge to identify which of the properties below does not have to be true for a fully normalised database.\n\nA) Each attribute in a relation is dependent on the primary key.\nB) Each attribute in a relation is dependent only on the primary key; it is not also dependent on any other attribute in the relation.\nC) The primary key in each relation consists of only one attribute.\nD) There are no repeating groups (or equivalently each attribute is atomic).", marks: 1 },
                  { code: '07.2',
                    preamble: "Figure 6 is an incomplete entity-relationship diagram for part of the database shown in Figure 5. It contains three entities — Animal, AnimalLocation, Zoo — drawn as boxes, with the relationship lines between them not yet labelled with their degree (one-to-one, one-to-many, many-to-many).",
                    prompt: "Draw lines on Figure 6 to indicate the degree of the two relationships between the three entities shown in the entity-relationship diagram.\n\n(Describe the degree of each relationship: between Animal and AnimalLocation, and between Zoo and AnimalLocation.)", marks: 2 },
                  { code: '07.3',
                    prompt: "Complete the following SQL statement to create the Animal relation, including the key field.\n\n    CREATE TABLE Animal (\n        ____________________________________\n    )", marks: 3 },
                  { code: '07.4',
                    preamble: "There is a requirement to identify all of the red pandas that were present at the zoo called 'Ashdale Park' at any time between 01/04/2020 and 31/05/2020, inclusive.\n\nThe animals might still be at the zoo or may have moved to another zoo.",
                    prompt: "Write a query that will list all the red pandas that were at the zoo on any day between these dates.\n\nFor each red panda on the list, the animal's individual name and the date that the animal arrived at the zoo, and no other fields, should be listed.", marks: 7 },
                  { code: '07.5',
                    preamble: "It is proposed that an additional attribute, ZooName, is added to the Animal relation. This will store the name of the zoo that currently has the animal. No other changes would be made to the database.",
                    prompt: "Describe one advantage and one disadvantage of adding this new attribute to the relation.", marks: 2 }
                ]
              },
              {
                number: 8,
                scenario: "A student is setting up a small computer network in their house. The network will link together the laptops, desktop computers and mobile devices that belong to the people who live in the house.",
                parts: [
                  { code: '08.1', prompt: "Compare how peer-to-peer networking and client-server networking work.", marks: 3 },
                  { code: '08.2', prompt: "Explain why a peer-to-peer system would be most appropriate to use in the house.", marks: 3 },
                  { code: '08.3',
                    preamble: "When a person in the house uses the network to load a webpage it is likely that the Domain Name Server (DNS) system will be used.",
                    prompt: "Describe the main purpose of the DNS system and how it works.", marks: 3 }
                ]
              },
              {
                number: 9,
                scenario: "Figure 7 shows an assembly language program that has been written using the AQA Assembly Language Instruction Set (LDR, STR, ADD, SUB, MOV, CMP, B, B<cond>, AND, ORR, EOR, MVN, LSL, LSR, HALT; operand2 = #decimal or Rm; general registers R0–R12).",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 7',
                    content: "         LDR R0, 120\n         LDR R1, 121\n         MOV R3, #0\nloop:\n         CMP R1, #0\n         BEQ exit\n         AND R2, R1, #1\n         CMP R2, #0\n         BEQ skip\n         ADD R3, R3, R0\nskip:\n         LSL R0, R0, #1\n         LSR R1, R1, #1\n         B loop\nexit:\n         STR R3, 122\n         HALT" }
                ],
                parts: [
                  { code: '09.1', prompt: "State the name of the addressing mode used in the instruction ADD R3, R3, R0", marks: 1 },
                  { code: '09.2',
                    preamble: "Memory location 120 contains the value 23 and memory location 121 contains the value 5.",
                    figure: { type: 'table', label: 'Trace table to complete',
                      headers: ['120', '121', '122', 'R0', 'R1', 'R2', 'R3'],
                      rows: [['23', '5', '', '', '', '', '']] },
                    prompt: "Complete the trace table to show how the contents of the memory locations and registers change when the program in Figure 7 is executed.", marks: 5 },
                  { code: '09.3', prompt: "State the purpose of the program in Figure 7.", marks: 1 },
                  { code: '09.4',
                    preamble: "The program in Figure 7 has been written using assembly language.",
                    prompt: "State two reasons why the programmer may have chosen to write this program in assembly language rather than in a high-level programming language.", marks: 2 },
                  { code: '09.5',
                    preamble: "The program in Figure 7 will be translated into machine code.",
                    prompt: "Explain the relationship between an assembly language instruction and a machine code instruction.", marks: 1 }
                ]
              },
              {
                number: 10,
                parts: [
                  { code: '10.1',
                    preamble: "A digital recording was made using a sampling rate of 44 100 Hz with a 16-bit sample resolution.\n\nA sampling rate of 1 Hz means that one sample has been taken every second.\n\nThe file, which stores only the recording, is 17.199 megabytes in size.",
                    prompt: "Calculate the duration of the recording in seconds.\n\nYou should show your working.", marks: 3 },
                  { code: '10.2',
                    preamble: "MIDI is a system that can be used to enable musical devices to communicate and to represent music on a computer.",
                    prompt: "Describe the advantages of using MIDI to represent music instead of using sampled sound.", marks: 3 }
                ]
              },
              {
                number: 11,
                parts: [
                  { code: '11', prompt: "Compare the hardware requirements of thin-client and thick-client computing systems.", marks: 3 }
                ]
              },
              {
                number: 12,
                scenario: "In a functional programming language, six functions named fu, fv, fw, fx, fy and fz and a list of temperatures in Fahrenheit named temps are defined as shown in Figure 8.\n\nA temperature can be converted from degrees Fahrenheit to degrees centigrade using the formula: centigrade = (Fahrenheit − 32) × 5 / 9. For example, 59 °F = 15 °C.\n\nIn the functions fw and fx: [] is the empty list; (x:xs) lets the function definition refer to the head of the list as x and the tail as xs.",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 8',
                    content: "temps = [50, 68, 95, 86]\n\nfu a = (a − 32) * 5 / 9\n\nfv b = map fu b\n\nfw []     = 0\nfw (x:xs) = 1 + fw (xs)\n\nfx []     = 0\nfx (x:xs) = x + fx (xs)\n\nfy c = fx (c) / fw (c)\n\nfz d = fy (fv (d))" }
                ],
                parts: [
                  { code: '12.1', prompt: "Shade one lozenge to indicate which of the listed functions from Figure 8 includes a higher-order function in its definition.\n\nA) fu\nB) fv\nC) fx\nD) fy", marks: 1 },
                  { code: '12.2', prompt: "Shade two lozenges to indicate which of the listed functions from Figure 8 use recursion in their definitions.\n\nA) fu\nB) fv\nC) fw\nD) fx", marks: 1 },
                  { code: '12.3',
                    figure: { type: 'table', label: 'Table 2',
                      headers: ['Function call', 'Result'],
                      rows: [
                        ['fu 50', ''],
                        ['fv temps', ''],
                        ['fw temps', ''],
                        ['fz temps', '']
                      ] },
                    prompt: "Calculate the results of making the function calls listed in Table 2, using the functions and list in Figure 8 as appropriate.", marks: 4 },
                  { code: '12.4', prompt: "Explain the purpose of the function fz.", marks: 1 },
                  { code: '12.5',
                    preamble: "It is proposed that the definition of the function fz is changed to:\n\n    fz d = fu (fy (d))",
                    prompt: "Explain why this new definition of fz could be considered to be an improvement over the definition of fz in Figure 8.", marks: 1 }
                ]
              },
              {
                number: 13,
                parts: [
                  { code: '13.1',
                    preamble: "Below is a definition of a term relating to the architecture of a computer system:\n\n    Machine code instructions stored in main memory are fetched and executed serially by a processor that performs arithmetic and logical operations.",
                    prompt: "Shade one lozenge to indicate which term this defines.\n\nA) The Harvard architecture\nB) The processor instruction set\nC) The stored program concept\nD) The von Neumann architecture", marks: 1 },
                  { code: '13.2', prompt: "Explain why desktop computers usually have secondary storage devices.", marks: 2 },
                  { code: '13.3',
                    preamble: "A computer is fitted with a solid-state disk (SSD).",
                    prompt: "Describe the principles of operation of an SSD.", marks: 4 }
                ]
              }
            ],
            // Official AQA mark-scheme content for every part, copied from
            // the 7517/2 June 2022 mark scheme. Fed to /api/mark-against-scheme
            // so the AI marker awards only what the real MS credits.
            markSchemes: {
              '01.1': { type: 'points',
                points: [
                  'Put the bits into groups of four / nibbles (starting at the right)',
                  'Convert each group of bits / nibble into a hexadecimal digit'
                ],
                guidance: '2 marks. A. "group/section/chunk of bits" even if number of bits not stated or incorrect. A. "value" or "number" for "digit". A. "convert each group of bits into decimal for 0–9 and letter A–F for 10–15". Do not award marks if the conversion has been done but has not been described, although it is acceptable for the conversion to be performed as part of the description.' },
              '01.2': { type: 'points',
                points: [
                  'More compact when displayed / can be displayed using fewer digits',
                  'Easier (for people) to understand / remember',
                  'Lower likelihood of an error when typing in data',
                  'Saves (the programmer) time writing / typing in data'
                ],
                guidance: 'Max 1. A. read, write for understand/remember. NE. "takes up less space". R. if stated that hexadecimal uses less memory / storage.' },
              '02.1': { type: 'points',
                points: [
                  'Multiple bits transmitted simultaneously / at the same time',
                  'Each (simultaneously transmitted) bit is sent down a different wire / cable / path / line'
                ],
                guidance: '2 marks. NE. "data" or "values" for "bits". A. "multiple wires/cables/paths/lines used for transmission" for the second mark.' },
              '02.2': { type: 'points',
                points: [
                  'The hardware / wiring required for serial data transmission is cheaper',
                  "Serial transmission does not suffer from crosstalk / two bits cannot interfere with each other because they are not sent simultaneously",
                  'Serial transmission does not suffer from data skewing / bits arrive in the order they were sent',
                  'Serial transmission can be used over longer distances'
                ],
                guidance: 'Max 1. NE. "cheaper" without reference to hardware/wiring. NE. "more reliable" / "lower probability of interference / corruption".' },
              '02.3': { type: 'exact',
                points: ['B', 'B Latency is the rate at which signals on a wire or line can change'],
                guidance: '1 mark for B. R. if more than one lozenge shaded.' },
              '02.4': { type: 'points',
                points: [
                  'Start the receiver clock ticking',
                  'Synchronise the clock in the receiver to the transmitter clock / bring the receiver clock into phase with the transmitter clock'
                ],
                guidance: 'Max 1. A. "to wake up the receiver". A. "to synchronise the receiver and transmitter clocks". A. "synchronise the clocks in the devices". NE. "synchronise the (two) clocks". R. "indicates start of transmission".' },
              '02.5': { type: 'points',
                points: [
                  'Provides time for the receiver to process / transfer the received data',
                  'Allows the (next) start bit to be recognised'
                ],
                guidance: 'Max 1. NE. "indicates that the received data can be processed". R. "indicates end of transmission". R. "indicates clocks no longer need to be synchronised".' },
              '03.1': { type: 'exact',
                points: [
                  'A+B column: 0, 1, 1, 1',
                  'Ā column: 1, 1, 0, 0',
                  'B̄ column: 1, 0, 1, 0',
                  'Ā·B̄ column: 1, 0, 0, 0',
                  '¬(Ā·B̄) column: 0, 1, 1, 1'
                ],
                guidance: '1 mark for the table being correctly completed across all rows. (The two columns A+B and ¬(Ā·B̄) being equal is what demonstrates De Morgan in Q3.2.)' },
              '03.2': { type: 'exact',
                points: ["De Morgan's (Law)", "De Morgan's", 'De Morgan'],
                guidance: "1 mark for De Morgan's Law." },
              '03.3': { type: 'points',
                points: [
                  'Final answer: Ā·B + C (or a logically equivalent fully-simplified expression)',
                  'Successful application of De Morgan\'s Law (and any associated NOT cancellation) that produces a simpler expression',
                  'Applying an identity other than cancelling NOTs that produces a simpler expression (e.g. X + 1 = 1, X · 1 = X, X + X̄ = 1)',
                  'Successfully putting terms into brackets',
                  'Successfully expanding brackets',
                  'Successfully using the distributive law'
                ],
                guidance: '1 mark for final answer. Max 3 for working — award one mark per technique application from the list (any combination, max 3 total). Award marks for working until an incorrect step is made; ignore missing steps if jumps between steps are logically correct. Max 3 overall if any working is incorrect. A simpler expression is one logically equivalent to the original but using fewer logical operators.' },
              '04.1': { type: 'points',
                points: [
                  'Software used in the management of a computer system',
                  'Layer(s) of software that abstract the user from how the computer works',
                  'Software that provides a platform for other software to use'
                ],
                guidance: '1 mark. A. "software used to run the computer". A. "software that provides a virtual machine". NE. "software that maintains a computer".' },
              '04.2': { type: 'exact',
                points: ['B', 'Bitmap image editors'],
                guidance: '1 mark for B. R. if more than one lozenge shaded.' },
              '04.3': { type: 'points',
                points: [
                  'To hide the complexities of the hardware from the user',
                  'To handle interrupts / call the appropriate interrupt handler (A. ISR) when an interrupt occurs',
                  'To allocate processors / cores to processes / schedule processes / decide which process to carry out when / manage execution of multiple processes',
                  'To allocate memory / RAM to processes / determine what areas of memory used for what purpose / moving data into and out of RAM for virtual memory / ensuring processes only write to memory they have been allocated',
                  'To allocate I/O devices to processes / manage communication between processes and I/O devices / automatic installation of drivers',
                  'To allocate space on a storage device to files / organise files into directories / determine where to save a file / recognising storage devices',
                  'Installation of new software / managing software updates',
                  'Manage power consumption / use of battery (A. examples e.g. controlling clock speed, screen brightness)'
                ],
                guidance: 'Max 2. Students must DESCRIBE — phrases such as "processor management", "allocating memory", "memory management", "user interface" are NOT enough. NE. "manages I/O devices". NE. "saving a file".' },
              '05.1': { type: 'exact',
                points: ['−19 5/16', '−309/16', '−19.3125'],
                guidance: '2 marks for correct answer. If answer is incorrect then award 1 method mark for working including one of: −19; −5/16 / −.3125; −32; addition of 8 and 4 = 12; addition of 1/2, 1/8 and 1/16 = 11/16 = 0.6875; or 44.6875 / 44 11/16.' },
              '05.2': { type: 'points',
                points: [
                  'Maximises precision / accuracy for a given number of bits (must convey "given number of bits", e.g. by example such as "word length")',
                  'Unique representation of each number / simpler to test for equality of numbers'
                ],
                guidance: '2 marks: one per reason. The "given number of bits" concept must be present for the precision mark.' },
              '05.3': { type: 'exact',
                points: ['27/4096', '0.0066', '0.0065917969', '6.6×10⁻³'],
                guidance: '2 marks for correct answer 27/4096 / 0.0066 (4dp). A. higher-precision answers (0.0065917969 to 10dp) or mathematically equivalent values with at least as many significant figures (e.g. 6.6×10⁻³). If answer is incorrect then award 1 method mark for either: showing correct value of mantissa and exponent in decimal (mantissa = 0.84375 / 27/32, exponent = −7); OR showing binary point shifted 7 places left; OR indicating answer = mantissa × 2^exponent and using the correct mantissa or exponent in that calculation.' },
              '05.4': { type: 'exact',
                points: ['Mantissa 10100011, exponent 0101', 'Mantissa: 1.0100011 (sign + binary point + fraction), Exponent: +5'],
                guidance: '3 marks for correct answer. If answer is incorrect then award up to 2 method marks (one per step): correct (unsigned) fixed-point of 23.25 in binary = 10111.01 (A. leading 0s, trailing 0s); correct (signed) fixed-point of −23.25 in binary = 101000.11 (A. leading 1s, trailing 0s; NE. this value shown only in final answer mantissa box); showing correct exponent value in decimal (5) or binary (101), or showing binary point shifted 5 places left (A. if only shown in final answer exponent box).' },
              '05.5': { type: 'exact',
                points: ['0.43', '0.43%', '0.0043'],
                guidance: '2 marks for correct answer 0.43(%). A. 0.0043. A. higher precision (0.4328993199 to 10dp) or mathematically equivalent values (4.3×10⁻³). R. 0.0043%. If answer is incorrect then award 1 method mark for one of: performing −0.22558594 − (−0.2265625) = 0.00097656 in working (R. −0.00097656); dividing by 0.22558594 or −0.22558594; giving final answer as ±0.43(%) or (±0.0043).' },
              '06': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'A line of reasoning has been followed to produce a coherent, relevant, substantiated and logically structured response. The response covers all THREE areas (RFID, barcode, ethical/legal) and there is sufficient detail to show the student has a good level of understanding of at least two of these.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'A line of reasoning has been followed to produce a coherent, relevant, substantiated and logically structured response which shows a good level of understanding of at least one area and a satisfactory understanding of at least one other area.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'A limited attempt has been made to follow a line of reasoning and the response has a mostly logical structure. Either a good level of understanding has been demonstrated of one area or some understanding has been demonstrated of at least two areas.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A few relevant points have been made but there is no evidence that a line of reasoning has been followed. The points may only relate to one or two of the areas. There is insufficient evidence of a good understanding of any of the three areas.' }
                ],
                indicative: {
                  'Area 1 — How RFID works': 'RFID tag contains (transmission) circuitry and antenna; memory on tag stores (customer) data; RFID reader at till transmits/sends signal / emits electric or electro-magnetic field; signal activates/energises/induces current in RFID tag; tag transmits data by radio (wave); reader converts radio wave back into binary data; RFID tag (on a card) is a passive device; RFID transmits over very short range.',
                  'Area 2 — How a barcode reader works': '(reflected-light method) light source/laser directed at bar code / bar code illuminated; (moving) mirror/prism moves beam across bar code, OR user moves reader across bar code; light reflected back; black/white bands reflect different amounts of light (black less, white more); light sensor/photodiode/CCD measures reflected light; reflected light converted into electrical signal (A. into binary/numbers/characters/ASCII). (CMOS/CCD/camera method) grid of pixel sensors / CMOS/CCD sensor; each sensor measures light intensity of a point; outputs voltage dependent on intensity; voltages turned into binary data via ADC; image processing software analyses image to identify black/white bands. (Only one of the two methods needs to be described.)',
                  'Area 3 — Ethical and legal issues': '(ethical) customers may consider purchase data personal / invasion of privacy; purchase of some items may be sensitive; will people fully understand what is done with the data; do customers feel forced to consent for offers/vouchers; can the company be confident other companies they share data with will process it legally; risk of revealing things to other household members; should ethical consideration be given to which products are promoted to whom; are some customers (e.g. vulnerable) ones who should not be targeted. (legal) naming a relevant law — GDPR, Data Protection Act; need to inform customers / obtain consent; data kept securely; need to consider purposes data should be used for; who can access/share data; impact if stolen or leaked; limit on retention period; data must be accurate; restrictions on transferring data abroad; supermarket should let customers see/edit data; use of RFID might make data vulnerable to theft.'
                },
                guidance: '12 marks total. Best-fit by overall quality across the three areas. Indicative content is a guide — credit other valid points. Only one of the two barcode methods is required for Area 2. 0 marks if no attempt or nothing creditworthy.' },
              '07.1': { type: 'exact',
                points: ['C', 'The primary key in each relation consists of only one attribute'],
                guidance: '1 mark for C. R. if more than one lozenge shaded.' },
              '07.2': { type: 'points',
                points: [
                  'One-to-many relationship between Animal and AnimalLocation',
                  'One-to-many relationship between Zoo and AnimalLocation'
                ],
                guidance: '2 marks total. If no marks awarded then award 1 mark for a many-to-many relationship between Animal and Zoo. Max 1 if any incorrect relationships drawn (ignore the inclusion of a many-to-many between Animal and Zoo).' },
              '07.3': { type: 'points',
                points: [
                  'AnimalID with a sensible data type and identified as primary key (e.g. AnimalID INT PRIMARY KEY, or AnimalID INT, ... PRIMARY KEY(AnimalID))',
                  'Two other fields with sensible data types and lengths (if given) — e.g. IndividualName VARCHAR(50), Species VARCHAR(40)',
                  'Two further other fields with sensible data types and lengths — e.g. DateOfBirth DATE, Sex VARCHAR(6)'
                ],
                guidance: '3 marks (AO3 — syntax including commas must be correct to award). DPT. data type before fieldname (penalisation is of marks not mistakes). DPT. incorrect punctuation — missing commas, unnecessary semi-colons/brackets (but ignore bracket or semi-colon at the very end). A. any sensible types — lengths do not need to be specified. I. case. Alternative types: tinyint/smallint/mediumint/integer/number/byte for INT; char/nchar/nvarchar/ntext/longvarchar/varchar2/nvarchar2/text/tinytext/mediumtext/longtext/string for VARCHAR; datetime/datetime2/datetimeoffset/smalldatetime for DATE (R. time).' },
              '07.4': { type: 'points',
                points: [
                  'AO2 (analyse) — correctly identify tables (Animal, AnimalLocation) and fields (IndividualName, DateArrived) to extract, with no other tables/fields in the SELECT/FROM',
                  'AO2 — correct condition to select species: Species = "Red Panda" (or correct zoo condition ZooName = "Ashdale Park")',
                  'AO2 — correct condition to link tables: Animal.AnimalID = AnimalLocation.AnimalID',
                  'AO2 — at least one pair of date-range conditions that identify some animals at the zoo during the period (e.g. DateArrived <= "31/05/2020" AND DateLeft >= "01/04/2020" OR DateLeft = "01/01/0001")',
                  'AO2 — full set of date-range conditions covering all four cases (arrived before & left after; arrived before end & still there; arrived in period; left in period)',
                  'AO3 (programming) — fully correct SQL in two of the three clauses (SELECT, FROM, WHERE)',
                  'AO3 — fully correct SQL in all three clauses (SELECT, FROM, WHERE)'
                ],
                guidance: '7 marks total (5 AO2 + 2 AO3). A. inclusion of unnecessary Zoo table only if correctly linked to AnimalLocation. R. additional linking conditions for unused tables. Award AO2 conditions even if SQL syntax wrong. A. mark(s) for correct conditions even if tables not identified. A. > for >= and < for <=. R. ≤ ≥ => =< symbols. Award maximum 2 of the 4 condition marks if not joined by correct logical operators. A. table-name.fieldname; A. AS alias / "FROM Animal AL"; A. INNERJOIN as one word; A. spaces in fieldnames; I. unnecessary brackets; A. any quotation marks/hashes around dates. I. ORDER BY. DPT. fieldname before table name. DPT. unnecessary punctuation — allow one trailing semicolon. Overall Max 6 if solution does not work fully.' },
              '07.5': { type: 'points',
                points: [
                  'Advantage: quicker to lookup an animal\'s current location / current location identifiable without querying AnimalLocation / less complex query needed',
                  'Disadvantage: additional storage space required',
                  'Disadvantage: introduces data redundancy (information already in AnimalLocation)',
                  'Disadvantage: data inconsistency could occur (Animal vs AnimalLocation mismatch)',
                  'Disadvantage: more updates required when an animal moves between zoos',
                  'Disadvantage: the database will no longer be normalised'
                ],
                guidance: '2 marks total: max 1 advantage + max 1 disadvantage. NE. "easier to lookup". R. "it will be possible to identify an animal\'s current location".' },
              '08.1': { type: 'points',
                points: [
                  'Equal status (P2P) vs nominated server(s), other computers are clients (CS)',
                  'Resources stored / shared from any computer (P2P) vs clients access resources from server, resources stored on server(s) (CS)',
                  'No centralised management of security / security managed individually by each user (P2P) vs centralised management of security / must login to access server(s) (CS)',
                  'Same resource can be shared from multiple computers / no reliance on central server (P2P) vs resources cannot be accessed if server(s) turned off / reliance on central server(s) (CS)',
                  'Hardware and software on computers is general purpose / not optimised for services (P2P) vs hardware and software on server(s) can be optimised for providing services (CS)'
                ],
                guidance: 'Max 3. Award 1 mark per comparison (one row). Student only needs to state ONE side of the comparison to be awarded the mark — stating both sides is not worth two marks. R. "user" for "computer".' },
              '08.2': { type: 'points',
                points: [
                  'Small number of users / devices (NE. "small network")',
                  'Likely that the users will trust each other / unlikely confidential data needs to be stored / no requirement for complex security (A. examples e.g. access rights, types of user)',
                  'Individual users will be able to choose which files / resources they share and with who',
                  'Will avoid additional cost of buying server (R. "cheaper" without further explanation)',
                  'No additional expertise required to set up / manage server(s) / easier to set up as no server to configure (R. "easier to set up / maintain" without further explanation)'
                ],
                guidance: 'Max 3.' },
              '08.3': { type: 'points',
                points: [
                  'Purpose (AO1 knowledge): Translates / converts / maps Fully Qualified Domain Names (FQDNs) into IP addresses (A. domain names; R. URLs)',
                  'How it works: DNS / Domain Name Server(s) stores a database/table of FQDNs and corresponding IP addresses (A. FQDN looked up in table; A. domain names; DPT. URLs)',
                  'How it works: DNS is a distributed database of mappings',
                  'How it works: (Individual) mappings are only known by some DNS servers',
                  'How it works: DNS servers are organised into a hierarchy (A. hierarchy given by example; R. description of how domain names themselves are organised)',
                  'How it works: If one DNS server cannot resolve a lookup the query will be passed to another DNS server',
                  'How it works: DNS servers support load distribution by returning one IP address from a list'
                ],
                guidance: '3 marks: 1 mark AO1 (knowledge) for purpose + 2 marks AO1 (understanding) for how it works.' },
              '09.1': { type: 'exact',
                points: ['Direct (addressing)', 'Direct'],
                guidance: '1 mark for "Direct" / "Direct addressing".' },
              '09.2': { type: 'points',
                points: [
                  'Correct initial values loaded into registers R0, R1 and R3: 23, 5, 0',
                  'R2 has initial value 1 and R3 is updated to 23',
                  'R0 shifted left to give 46 and R1 shifted right to give 2',
                  'R0 changes to 92 then 184, R1 changes to 1 then 0, R2 changes to 0 then 1',
                  'R3 and memory location 122 set to 115'
                ],
                guidance: '5 marks. Max 4 if any incorrect values written into table. Expected final values: 120=23, 121=5, 122=115, R0=184, R1=0, R2=1, R3=115.' },
              '09.3': { type: 'exact',
                points: ['(To) multiply (the two numbers in memory locations 120 and 121 together, storing the result in memory location 122)', 'multiplication', 'multiply 120 and 121'],
                guidance: '1 mark. A. "multiplication".' },
              '09.4': { type: 'points',
                points: [
                  'So it will execute more quickly (TO. if stated that it executes more quickly because translation is not required)',
                  'So it will use less memory (when translated) (NE. "uses less space", "more compact")',
                  'A translator for a high-level language might not have been available',
                  'Programmer would have complete (A. "more") control over the final machine code that is output by the translator / executed (R. "direct access to hardware / registers")'
                ],
                guidance: 'Max 2.' },
              '09.5': { type: 'exact',
                points: ['There is a one-to-one mapping', 'each assembly language instruction translates into one machine code instruction'],
                guidance: '1 mark for one-to-one mapping between assembly and machine code instructions.' },
              '10.1': { type: 'exact',
                points: ['195 seconds', '3 minutes 15 seconds', '3.25 minutes'],
                guidance: '3 marks for correct final answer of 195 seconds. A. "3 minutes 15 seconds", "3.25 minutes" but NE. "3.25" without units. If final answer not given/incorrect then award up to 2 method marks (one per step) for: conversion of sample size into bytes/bits (multiplication by 1000 and 1000 and 8 / by 1000000 / by 8000000, or value 17199000 or 137592000 used); calculating seconds from sample size (dividing a number by both 44100 and 16 (or 2), OR multiplying 44100 by 16 (or 2)). Award the second mark even if sample size incorrectly calculated.' },
              '10.2': { type: 'points',
                points: [
                  'More compact representation (NE. "requires less space")',
                  'Easy to modify / edit at note level (e.g. change octave, change instruments)',
                  'Simple method to compose algorithmically',
                  'Musical score can be generated directly from a MIDI file',
                  'No data lost about musical notes / no data lost through sampling (A. "better quality" only with explanation linked to sampling)',
                  'MIDI records the musician\'s inputs rather than the sound produced',
                  'The MIDI file can be directly output to control an instrument / device'
                ],
                guidance: 'Max 3.' },
              '11': { type: 'points',
                points: [
                  'Network (max 1): Higher bandwidth network connection required for thin-client (A. examples e.g. fibre optic, gigabit switches)',
                  'Client (max 2): Slower (clock speed) processor needed in client',
                  'Client (max 2): Reduced RAM needed in client',
                  'Client (max 2): No / small HDD / SSD / secondary storage required in workstations (A. "storage" for "secondary storage")',
                  'Server (max 2): Multiple processors / processor with many cores / high clock speed needed on server',
                  'Server (max 2): A lot of RAM needed on server',
                  'Server (max 2): Many HDD/SSD/secondary storage drives needed on server'
                ],
                guidance: 'Max 3 overall, with sub-caps: Network max 1, Client max 2, Server max 2. NE. "more powerful / less powerful", "higher performance / lower performance", "cheaper / more expensive". Accept the opposite of points if written from thick-client point of view (e.g. "a thick-client system would need a faster processor in the client" is acceptable).' },
              '12.1': { type: 'exact',
                points: ['fv', 'B'],
                guidance: '1 mark for fv. R. if more than one lozenge shaded.' },
              '12.2': { type: 'exact',
                points: ['fw and fx', 'C and D'],
                guidance: '1 mark for both fw AND fx shaded. R. if number of shaded lozenges is not exactly 2.' },
              '12.3': { type: 'exact',
                points: [
                  'fu 50 → 10.0  (A. integer 10)',
                  'fv temps → [10.0, 20.0, 35.0, 30.0]  (A. alternative bracket styles, A. integers, R. no brackets, R. each element in a separate list)',
                  'fw temps → 4',
                  'fz temps → 23.75  (A. 95/4; A. average of list student gave on row 2; A. 95 divided by row 3 answer; A. sum of student-given row 2 list divided by student-given row 3 number)'
                ],
                guidance: '4 marks: one mark per correct row in the Result column.' },
              '12.4': { type: 'exact',
                points: ['Calculates the average temperature in centigrade (from a list of temperatures in Fahrenheit)'],
                guidance: '1 mark. NE. "calculates average of a list of numbers".' },
              '12.5': { type: 'points',
                points: [
                  'Only one conversion is done (from Fahrenheit to centigrade)',
                  'Fewer conversions (from Fahrenheit to centigrade) are performed',
                  'The function fv is no longer required'
                ],
                guidance: '1 mark. A. "fewer calculations / steps / functions / function calls required". NE. "faster execution", "more efficient".' },
              '13.1': { type: 'exact',
                points: ['C', 'The stored program concept'],
                guidance: '1 mark for C. R. if more than one lozenge shaded.' },
              '13.2': { type: 'points',
                points: [
                  'To store data / programs whilst the computer is turned off (A. long-term / permanent storage; NE. "secondary storage devices are non-volatile"; NE. "store data that is not in use")',
                  '(As) the contents of RAM are lost when the computer is turned off (R. "main memory" for "RAM"; A. "main memory (RAM)")',
                  'To transfer data / programs between computers (NE. "secondary storage devices are portable")',
                  'Allows the storage of data sets / files that could not fit in RAM / computer architecture supports a limited amount of main memory/RAM (A. primary store for main memory; NE. "to extend storage capacity", "store more", "higher capacity")'
                ],
                guidance: 'Max 2.' },
              '13.3': { type: 'levels',
                levels: [
                  { range: [3, 4], descriptor: 'Level 2',
                    criteria: 'A good understanding of the operation of an SSD has been demonstrated. The response is well structured, covers most of the points in the indicative content and does not contain any errors of understanding.' },
                  { range: [1, 2], descriptor: 'Level 1',
                    criteria: 'Some relevant points have been made, but the description omits important details or contains some errors so that only a limited understanding is demonstrated.' }
                ],
                indicative: {
                  'SSD operation': 'Data is stored electronically / there are no mechanical or moving parts. Data is stored in floating gate transistors / in transistors that do not lose their charge/state when power is no longer applied / electrons are trapped between oxide layers. Presence (or absence) of trapped electrons / charge indicates 0 / 1 (A. either way around; A. "bit" for 0 or 1 but not "binary"; R. positive and negative charges). NAND memory / flash memory / EEPROM memory is used. Data is organised into pages / blocks. A whole block (A. page) of data must be written / individual values cannot be written. A block (A. page) must be erased before it can be overwritten. Controller manages the organisation of the data / manages the reading and writing of data.'
                },
                guidance: '4 marks total. Best-fit between Level 1 (1–2) and Level 2 (3–4). 0 marks for nothing creditworthy.' }
            }
          },
          {
            id: 'cs-aqa-7517-2021-p1',
            year: 'Autumn 2021',
            paperName: 'Paper 1 — Programming (on-screen)',
            paperCode: '7517/1',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75171-QP-NOV21.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75171-MS-NOV21.PDF',
            qbqNote: "Section D code parts (Q12.1, Q13.1, Q14.1, Q15.1 — 33 marks total) are now wired up with study-prep Python reconstructions of the relevant HexGrid skeleton pieces. The 4 screen-capture sub-parts (Q12.2/13.2/14.2/15.2 = 5 marks) stay print-only since they're evidence of running your modified program. AQA's real Skeleton Program is centre-only — these reconstructions are for practice.",
            questions: [
              // ── SECTION A — algorithms / data structures / FSMs (37 marks)
              {
                number: 1,
                parts: [
                  { code: '01',
                    preamble: "The shaded row of Table 1 contains a list of numbers: 3, 5, 8, 1, 6, 4 (at positions [0]–[5]). A bubble sort algorithm could be used to sort the list of numbers into ascending order.",
                    figure: { type: 'table', label: 'Table 1 — bubble sort passes (complete the unshaded cells)',
                      headers: ['Pass', '[0]', '[1]', '[2]', '[3]', '[4]', '[5]'],
                      rows: [
                        ['(start)', '3', '5', '8', '1', '6', '4'],
                        ['First pass', '', '', '', '', '', ''],
                        ['Second pass', '', '', '', '', '', ''],
                        ['Third pass', '', '', '', '', '', '']
                      ] },
                    prompt: "Complete the unshaded cells of Table 1 to show the results of completing three passes through the list using a bubble sort algorithm.\n\nState the values at the end of each pass.", marks: 3 }
                ]
              },
              {
                number: 2,
                scenario: "Figure 1 shows a binary tree containing seven nodes. Figure 2 shows how the binary tree could be represented using three one-dimensional arrays: Data, Dir1 and Dir2.\n\n    Index  Data  Dir1  Dir2\n    [0]     C    1    4\n    [1]     I    2    3\n    [2]     E   -1   -1\n    [3]     H   -1   -1\n    [4]     B    5    6\n    [5]     Y   -1   -1\n    [6]     Q   -1   -1\n\nFigure 3 (pseudo-code for an iterative Traversal subroutine using the three arrays + a Stack):\n\n    SUBROUTINE Traversal(StartNode)\n        Current ← StartNode\n        Pos ← 0\n        Stack[Pos] ← Current\n        WHILE Pos ≠ -1\n            Current ← Stack[Pos]\n            Pos ← Pos − 1\n            OUTPUT Data[Current]\n            IF Dir2[Current] ≠ -1 THEN\n                Pos ← Pos + 1\n                Stack[Pos] ← Dir2[Current]\n            ENDIF\n            IF Dir1[Current] ≠ -1 THEN\n                Pos ← Pos + 1\n                Stack[Pos] ← Dir1[Current]\n            ENDIF\n        ENDWHILE\n    ENDSUBROUTINE",
                parts: [
                  { code: '02.1', prompt: "Define the term binary tree.", marks: 2 },
                  { code: '02.2',
                    preamble: "The output of a post-order traversal algorithm used to print the data item at each node in the binary tree shown in Figure 1 would be E, H, I, Y, Q, B, C.",
                    prompt: "State the output that would be produced by an in-order traversal algorithm.", marks: 2 },
                  { code: '02.3',
                    figure: { type: 'table', label: 'Table 2 — complete the trace of Traversal(0)',
                      headers: ['Current', 'Pos', 'Stack[0]', 'Stack[1]', 'Stack[2]', 'Stack[3]', 'Output'],
                      rows: [['', '', '', '', '', '', '']] },
                    prompt: "Complete the unshaded cells in Table 2 to show the result of the subroutine call Traversal(0).", marks: 7 },
                  { code: '02.4',
                    preamble: "The subroutine in Figure 3 could have been written so that it used recursion instead of iteration.",
                    prompt: "Explain what is meant by a recursive subroutine.", marks: 1 },
                  { code: '02.5', prompt: "Explain what is meant by a base case for a recursive subroutine.", marks: 1 },
                  { code: '02.6',
                    preamble: "If the subroutine had been written using recursion, a stack frame would have been stored each time a recursive subroutine call was made.",
                    prompt: "State two components of a stack frame.", marks: 2 }
                ]
              },
              {
                number: 3,
                parts: [
                  { code: '03', prompt: "Explain what is meant by procedural decomposition.", marks: 3 }
                ]
              },
              {
                number: 4,
                parts: [
                  { code: '04', prompt: "Describe the steps involved in adding a record to a hash table.", marks: 5 }
                ]
              },
              {
                number: 5,
                parts: [
                  { code: '05.1', prompt: "State two advantages of using Reverse Polish Notation (RPN) instead of infix notation to represent an expression.", marks: 2 },
                  { code: '05.2', prompt: "Describe how a single stack could be used to evaluate an RPN expression.", marks: 4 }
                ]
              },
              {
                number: 6,
                scenario: "The state transition diagram for a finite state machine (FSM) is shown in Figure 4. Figure 4 has the following structure: states S0, S1, S2, S3, S4, S5; transitions with inputs that form the strings the FSM accepts (open the QP PDF for the exact arrows — the regex answer for Q6.2 is a(ba)* | b(ab)*).",
                parts: [
                  { code: '06.1',
                    figure: { type: 'table', label: 'Table 3 — state transition table for transitions involving S2',
                      headers: ['Current state', 'Input', 'New state'],
                      rows: [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']] },
                    prompt: "Complete the state transition table, Table 3, so that it represents the parts of the state transition diagram shown in Figure 4 that involve state S2.", marks: 2 },
                  { code: '06.2', prompt: "Regular expressions can be used to recognise the same strings as FSMs without output.\n\nWrite a regular expression that will recognise the same set of strings that are accepted by the FSM shown in Figure 4.", marks: 3 }
                ]
              },
              // ── SECTION B — write a program from scratch (12 marks)
              {
                number: 7,
                parts: [
                  { code: '07.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Harshad numbers — AQA 7517/1 Autumn 2021 Q07.1\n# A Harshad number is a positive integer exactly divisible\n# by the sum of its digits (e.g. 36 because 3+6=9 and 36÷9=4).\n# Read n, then output the nth Harshad number.\n\nn = int(input(\"Enter n: \"))\n# TODO: build your solution here.\nprint(0)\n"
                    },
                    testInputs: ["12", "600"],
                    preamble: "Section B. Write a program from scratch. Use the in-browser code editor below — it runs Python directly in your browser. (Other languages: write here for the AI marker to grade against the AO3 design + programming rubric; running them in-browser isn't supported.)\n\nA Harshad number is a positive integer which is exactly divisible by the sum of its digits. The first twelve Harshad numbers are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 and 18.\n\n  • 36 is a Harshad number (digits 3+6 = 9; 36 ÷ 9 = 4 exactly).\n  • 300 is a Harshad number (digits 3+0+0 = 3; 300 ÷ 3 = 100 exactly).\n  • 15 is NOT a Harshad number (digits 1+5 = 6; 15 ÷ 6 ≠ integer).\n\nWrite a program that asks the user to enter a number, n, and will then calculate and display the nth Harshad number.\n\nExample: if the user enters 12 → the program should display 18 (the 12th Harshad number).\n\nYou may assume the input will be a positive integer.",
                    prompt: "Write your PROGRAM SOURCE CODE in the editor below, then click Run to test (try n = 12 → 18, n = 600 → 3102). Save & Next when ready — your code will be marked against the official AO3-design + AO3-programming mark scheme.\n\n(Question 07.2 — screen-capture evidence for the n = 600 test — is print-only.)", marks: 12 }
                ]
              },
              // ── SECTION C — Skeleton Program comprehension (13 marks)
              {
                number: 8,
                scenario: "Section C — these questions refer to the Preliminary Material and the Skeleton Program (a HexGrid game with Tiles indexed by x, y, z coordinates). Open the QP PDF alongside for the figures.",
                parts: [
                  { code: '08.1',
                    preamble: "To specify which tile to use when entering a command, a player enters the index of the tile in the Tiles list. Instead of using this index the player could have been asked to enter the x, y and z coordinates for the tile.\n\nIn the default game the tile with an index of 18 is in a straight line with tiles 0, 7 and 2.",
                    prompt: "Explain how you can tell from the coordinates of two tiles if they are in a straight line with each other.", marks: 1 },
                  { code: '08.2',
                    preamble: "Figure 6 shows an incomplete calculation for converting coordinates to an index:\n\n    index = GridSize × (difference between z and y coordinates) + ▮\n            \n             2",
                    prompt: "What should ▮ be replaced with so that the index of a tile in Tiles can be calculated from the coordinates of the tile?", marks: 2 },
                  { code: '08.3', prompt: "Describe the modifications that would need to be made to the CheckMoveCommandFormat subroutine so that the move command could use coordinates instead of indices for the two tiles.", marks: 2 }
                ]
              },
              {
                number: 9,
                scenario: "This question is about the different types of piece in the game.",
                parts: [
                  { code: '09.1', prompt: "Explain why the FuelCostOfMove attribute in the Piece class could not have been a private attribute.", marks: 1 },
                  { code: '09.2', prompt: "Describe the circumstances when there could be no baron pieces on the grid but more commands would still have to be entered.", marks: 2 },
                  { code: '09.3', prompt: "In object-oriented programming, what is meant by polymorphism?", marks: 1 }
                ]
              },
              {
                number: 10,
                scenario: "The LoadGame subroutine uses exception handling to prevent potential runtime errors. An example of an event that could cause a runtime error when executing the LoadGame subroutine would be trying to open a file that does not exist.",
                parts: [
                  { code: '10.1', prompt: "Describe another event that could cause a runtime error when executing the LoadGame subroutine.", marks: 1 },
                  { code: '10.2', prompt: "State the identifier of another subroutine that uses exception handling.", marks: 1 }
                ]
              },
              {
                number: 11,
                parts: [
                  { code: '11', prompt: "This question is about the GetDistanceToTileT subroutine in the Tile class.\n\nExplain how this subroutine calculates the distance between two tiles.", marks: 2 }
                ]
              },
              // ── SECTION D — Skeleton Program modifications (33 marks)
              {
                number: 12,
                scenario: "Section D — these questions modify subroutines inside the HexGrid skeleton. The skeleton below is a study-prep reconstruction in Python that mirrors the relevant piece + just enough context to test your modification. AQA's official Skeleton Program is centre-only.",
                parts: [
                  { code: '12.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed HexGrid Skeleton — AQA CS 7517/1 Autumn 2021, Q12.1\n# ────────────────────────────────────────────────────────────────────\n# Q12 task: Modify DestroyPiecesAndCountVPs so that AT THE END OF EACH\n# TURN both players gain additional victory points based on how many\n# LESS pieces they have on the board (i.e. pieces of type 'L' that have\n# NOT been destroyed). +1 VP per surviving LESS piece, to the player\n# who owns it.\n\nclass Piece:\n    def __init__(self, player, piece_type):\n        self.Player = player          # 1 or 2\n        self.PieceType = piece_type   # 'B'aron, 'S'erf, 'L'ESS, 'P'BDS\n        self.IsDestroyed = False\n\n\nclass HexGrid:\n    def __init__(self):\n        # Test board:\n        #   Player 1: 1 Baron, 2 LESS (one destroyed), 1 Serf\n        #   Player 2: 1 Baron, 3 LESS (all surviving), 1 PBDS\n        self.Pieces = [\n            Piece(1, 'B'),\n            Piece(1, 'L'),  # P1 LESS — alive\n            Piece(1, 'L'),  # P1 LESS — destroyed below\n            Piece(1, 'S'),\n            Piece(2, 'B'),\n            Piece(2, 'L'),  # P2 LESS — alive\n            Piece(2, 'L'),  # P2 LESS — alive\n            Piece(2, 'L'),  # P2 LESS — alive\n            Piece(2, 'P'),\n        ]\n        self.Pieces[2].IsDestroyed = True\n\n    def DestroyPiecesAndCountVPs(self):\n        # ── ORIGINAL VERSION — modify this ──\n        # Currently: +1 VP to the OPPOSITE player for each destroyed piece.\n        # Q12 asks you to ALSO add +1 VP to a piece's owner for each LESS\n        # piece they own that has NOT been destroyed.\n        Player1VPs = 0\n        Player2VPs = 0\n        for piece in self.Pieces:\n            if piece.IsDestroyed:\n                if piece.Player == 1:\n                    Player2VPs += 1\n                elif piece.Player == 2:\n                    Player1VPs += 1\n        return Player1VPs, Player2VPs\n\n\n# ── Test driver (do not modify) ──\ngrid = HexGrid()\np1, p2 = grid.DestroyPiecesAndCountVPs()\nprint(f\"Player 1 VPs: {p1}\")\nprint(f\"Player 2 VPs: {p2}\")\nprint()\nprint(\"Expected after the LESS-survival bonus is added:\")\nprint(\"  P1 = 0 (kills, no P2 piece destroyed) + 1 (1 surviving P1 LESS) = 1\")\nprint(\"  P2 = 1 (1 P1 LESS destroyed) + 3 (3 surviving P2 LESS) = 4\")\n"
                    },
                    testInputs: [],
                    prompt: "Modify DestroyPiecesAndCountVPs so that, for every LESS piece that has NOT been destroyed, the player who owns it gains +1 VP — on top of whatever VPs they already gain for destroyed pieces.\n\nClick ▶ Run. A correct modification prints:\n  Player 1 VPs: 1\n  Player 2 VPs: 4\n\n(Question 12.2 — screen-capture evidence — is print-only.)", marks: 5 }
                ]
              },
              {
                number: 13,
                parts: [
                  { code: '13.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed HexGrid Skeleton — AQA CS 7517/1 Autumn 2021, Q13.1\n# ────────────────────────────────────────────────────────────────────\n# Q13 task: Add a new type of piece, RangerPiece.\n#   • RangerPiece is a subclass of Piece, with PieceType = 'R'.\n#   • Its constructor calls the Piece base constructor.\n#   • CheckMoveIsValid override:\n#       - Standard move = distance of 1 (allowed unless start tile is\n#         a peat bog — fuel cost 2 instead of 1 if so; for this\n#         reconstruction we just block peat-bog moves entirely).\n#       - PLUS: if the ranger is currently on a forest tile, it can\n#         move to ANY forest tile in the grid (any distance). Cost: 1 fuel.\n#   • Modify AddPiece in HexGrid so that if TypeOfPiece is 'Ranger',\n#     it creates a RangerPiece.\n\nclass Tile:\n    def __init__(self, terrain):\n        self.Terrain = terrain   # 'forest', 'plain', 'peatbog'\n\n\nclass Piece:\n    def __init__(self, player, piece_type):\n        self.Player = player\n        self.PieceType = piece_type\n    def CheckMoveIsValid(self, start_tile, end_tile, distance):\n        # Standard move = distance of 1, cost 1 fuel.\n        if distance == 1:\n            return 1\n        return -1   # invalid\n\n\n# ── TODO Q13.1 Tasks 1 & 2: Create RangerPiece subclass below ──\n\n\nclass HexGrid:\n    def __init__(self):\n        self.Pieces = []\n        self.Tiles = [Tile('forest'), Tile('plain'), Tile('forest'), Tile('forest')]\n    def AddPiece(self, TypeOfPiece, player):\n        # ── TODO Q13.1 Task 3: handle TypeOfPiece == 'Ranger' here ──\n        if TypeOfPiece in ('Baron', 'Serf', 'LESS', 'PBDS'):\n            initial_letter = TypeOfPiece[0] if TypeOfPiece != 'PBDS' else 'P'\n            piece = Piece(player, initial_letter)\n        else:\n            raise ValueError(f\"Unknown TypeOfPiece: {TypeOfPiece}\")\n        self.Pieces.append(piece)\n        return piece\n\n\n# ── Test driver (do not modify) ──\ngrid = HexGrid()\nranger = grid.AddPiece('Ranger', 1)\nprint(f\"Created: {type(ranger).__name__} (PieceType={ranger.PieceType!r})\")\n\n# Test 1: standard 1-distance move (should cost 1 fuel)\nstart = grid.Tiles[0]\nend1  = grid.Tiles[1]\nprint(f\"1-distance move (forest→plain): fuel cost = {ranger.CheckMoveIsValid(start, end1, 1)}  (expected 1)\")\n\n# Test 2: long-range forest-to-forest move (should cost 1 fuel)\nend2 = grid.Tiles[3]\nprint(f\"Forest→forest, distance 3:       fuel cost = {ranger.CheckMoveIsValid(start, end2, 3)}  (expected 1)\")\n\n# Test 3: long-range non-forest move (should be invalid)\nplain_tile = grid.Tiles[1]\nprint(f\"Plain→forest,  distance 3:       fuel cost = {ranger.CheckMoveIsValid(plain_tile, end2, 3)}  (expected -1)\")\n"
                    },
                    testInputs: [],
                    prompt: "Create the RangerPiece subclass with the forest-to-forest move rule, and modify AddPiece in HexGrid so it creates a RangerPiece when TypeOfPiece is 'Ranger'.\n\nClick ▶ Run. A correct implementation prints:\n  Created: RangerPiece (PieceType='R')\n  1-distance move (forest→plain): fuel cost = 1\n  Forest→forest, distance 3:       fuel cost = 1\n  Plain→forest,  distance 3:       fuel cost = -1\n\n(Question 13.2 — screen-capture evidence — is print-only.)", marks: 7 }
                ]
              },
              {
                number: 14,
                parts: [
                  { code: '14.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed HexGrid Skeleton — AQA CS 7517/1 Autumn 2021, Q14.1\n# ────────────────────────────────────────────────────────────────────\n# Q14 task: Add a new 'burn' command that converts lumber → fuel.\n#   • Modify CheckCommandIsValid: return True if the command is 'burn'.\n#   • Modify ExecuteCommand in HexGrid:\n#       - If the player has NO lumber → return 'Cannot burn lumber'.\n#       - Otherwise: generate a random integer in [1 .. lumber], reduce\n#         the player's lumber by that amount, increase the player's\n#         fuel by the same amount, and return 'Command executed'.\n\nimport random\nrandom.seed(7)   # deterministic for this preview run\n\n\nclass Player:\n    def __init__(self):\n        self.Lumber = 10\n        self.Fuel = 10\n\n\nclass HexGrid:\n    def __init__(self):\n        self.CurrentPlayer = Player()\n\n    def CheckCommandIsValid(self, cmd):\n        # ── TODO Q14.1: also return True for 'burn' ──\n        if cmd in ('move', 'upgrade', 'standard'):\n            return True\n        return False\n\n    def ExecuteCommand(self, cmd):\n        # ── TODO Q14.1: handle 'burn' here per the task brief ──\n        if cmd == 'move':\n            return 'Move executed'\n        return 'Unknown command'\n\n\n# ── Test driver (do not modify) ──\ngrid = HexGrid()\n\nprint(\"=== Test 1: burn with no lumber ===\")\ngrid.CurrentPlayer.Lumber = 0\nprint(f\"Before — lumber: {grid.CurrentPlayer.Lumber}, fuel: {grid.CurrentPlayer.Fuel}\")\nresult = grid.ExecuteCommand('burn')\nprint(f\"Return: {result!r}\")\nprint(f\"After  — lumber: {grid.CurrentPlayer.Lumber}, fuel: {grid.CurrentPlayer.Fuel}\")\nprint(\"Expected: Return 'Cannot burn lumber'; no change to lumber/fuel.\")\n\nprint()\nprint(\"=== Test 2: burn with lumber=10 ===\")\ngrid.CurrentPlayer.Lumber = 10\ngrid.CurrentPlayer.Fuel = 10\nprint(f\"Before — lumber: {grid.CurrentPlayer.Lumber}, fuel: {grid.CurrentPlayer.Fuel}\")\nresult = grid.ExecuteCommand('burn')\nprint(f\"Return: {result!r}\")\nprint(f\"After  — lumber: {grid.CurrentPlayer.Lumber}, fuel: {grid.CurrentPlayer.Fuel}\")\nprint(\"Expected: Return 'Command executed'; lumber DOWN by K (1..10), fuel UP by same K, total preserved.\")\n\nprint()\nprint(f\"CheckCommandIsValid('burn') = {grid.CheckCommandIsValid('burn')}  (expected True)\")\n"
                    },
                    testInputs: [],
                    prompt: "Add the burn command: CheckCommandIsValid('burn') should return True; ExecuteCommand('burn') should return 'Cannot burn lumber' when the player has no lumber, OR convert a random amount (1..lumber) of lumber into fuel and return 'Command executed' otherwise.\n\nClick ▶ Run. A correct implementation:\n  • Test 1 returns 'Cannot burn lumber' and leaves lumber/fuel at 0/10\n  • Test 2 returns 'Command executed' with lumber+fuel still summing to 20\n  • CheckCommandIsValid('burn') returns True\n\n(Question 14.2 — screen-capture evidence — is print-only.)", marks: 8 }
                ]
              },
              {
                number: 15,
                parts: [
                  { code: '15.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed HexGrid Skeleton — AQA CS 7517/1 Autumn 2021, Q15.1\n# ────────────────────────────────────────────────────────────────────\n# Q15 task: Add a 'fog of war' feature.\n#   • Create a new method GetFogOfWar in HexGrid that takes a tile index\n#     and returns False if the active player has any piece within 2\n#     cells of that tile (i.e. the tile is NOT hidden), otherwise True.\n#   • Modify GetPieceTypeInTile so that:\n#       - If GetFogOfWar returns True → return ' ' (a single space).\n#       - Otherwise → return the existing piece-type letter (or ' ' if\n#         the tile is empty).\n#\n# Simplification for this reconstruction: tiles are arranged in a line\n# (indexes 0..N-1), and the 'distance' between tile i and tile j is\n# just abs(i - j). The real game uses a hex grid; the algorithm you\n# write here is the same shape.\n\nclass HexGrid:\n    def __init__(self):\n        # 10 tiles in a line. P1 has pieces at tiles 1, 4. P2 at 6, 9.\n        self.Tiles = [None] * 10\n        self.Tiles[1] = ('1', 'B')   # P1 Baron\n        self.Tiles[4] = ('1', 'S')   # P1 Serf\n        self.Tiles[6] = ('2', 'B')   # P2 Baron\n        self.Tiles[9] = ('2', 'L')   # P2 LESS\n        self.ActivePlayer = '1'      # player whose view we're rendering\n\n    def Distance(self, i, j):\n        return abs(i - j)\n\n    # ── TODO Q15.1 Task 1: implement GetFogOfWar(self, tile_index) ──\n    # def GetFogOfWar(self, tile_index):\n    #     ...\n\n    def GetPieceTypeInTile(self, tile_index):\n        # ── ORIGINAL VERSION — modify this ──\n        # Q15 asks: if GetFogOfWar(tile_index) is True, return ' '.\n        # Otherwise: return the piece-type letter, or ' ' if empty.\n        contents = self.Tiles[tile_index]\n        if contents is None:\n            return ' '\n        return contents[1]\n\n\n# ── Test driver (do not modify) ──\ngrid = HexGrid()\nview = ''.join(grid.GetPieceTypeInTile(i) for i in range(10))\nprint(f\"P1's view: '{view}'\")\nprint(\"Expected (P1 sees own pieces + P2 pieces within 2 cells of any P1 piece):\")\nprint(\"  - tiles 0..5: visible (within 2 of P1's pieces at 1 or 4)\")\nprint(\"  - tile 6:     visible (P2 Baron, within 2 of P1's piece at 4)\")\nprint(\"  - tiles 7,8:  hidden (no P1 piece within 2; no P2 piece there anyway)\")\nprint(\"  - tile 9:     hidden  (P2 LESS, but 5+ cells from any P1 piece)\")\nprint(\"  -> P1 should see: ' B  S B   '  (10 chars)\")\n"
                    },
                    testInputs: [],
                    prompt: "Add the GetFogOfWar method and modify GetPieceTypeInTile so a tile is hidden (returns ' ') when the active player has no piece within 2 cells of it.\n\nClick ▶ Run. A correct implementation prints:\n  P1's view: ' B  S B   '\n  (P1 sees own pieces at 1, 4; sees P2 Baron at 6 because tile 4's piece is 2 away; hides P2 LESS at 9 since no P1 piece is within 2.)\n\n(Question 15.2 — screen-capture evidence — is print-only.)", marks: 13 }
                ]
              }
            ],
            markSchemes: {
              '01': { type: 'exact',
                points: [
                  'First pass: 3 5 1 6 4 8',
                  'Second pass: 3 1 5 4 6 8',
                  'Third pass: 1 3 4 5 6 8'
                ],
                guidance: '3 marks: 1 per row. Alternative answer (right-to-left bubble): First 1 3 5 8 4 6; Second 1 3 5 4 8 6; Third 1 3 4 5 6 8.' },
              '02.1': { type: 'points',
                points: [
                  'Rooted (tree)',
                  'Where each node has at most two child nodes (R. "each node has two child nodes")'
                ],
                guidance: '2 marks: 1 per point.' },
              '02.2': { type: 'exact',
                points: ['EIHCYBQ'],
                guidance: '2 marks. If not fully correct, max 1 mark for any of: E followed by I then H; Y followed by B then Q; C as the 4th output.' },
              '02.3': { type: 'points',
                points: [
                  'Stack[0] set to 0, Pos set to 0 and Current set to 0',
                  'Current set to 0, Pos set to −1 and output of C',
                  'Stack[0] set to 4 and Pos set to 0',
                  'Stack[1] set to 1, then 3 and then 5 with no other values after being set to 5',
                  'Stack[2] set to 2 with no other values after this; Stack[0] having a 3rd value of 6 with no other values after this; Stack[3] column not used',
                  'Pos column correct from 4th value (1) onwards and Current column set to 1, then 2, 3, 4, 5, 6 with no further values after being set to 6',
                  'Correct order in output column for 2nd value onwards (I, E, H, B, Y, Q)'
                ],
                guidance: '7 marks: 1 per mark point. Max 6 if any errors.' },
              '02.4': { type: 'exact',
                points: ['A subroutine that calls itself'],
                guidance: '1 mark.' },
              '02.5': { type: 'exact',
                points: ['The circumstance(s) when a recursive subroutine does not call itself'],
                guidance: '1 mark.' },
              '02.6': { type: 'points',
                points: [
                  'Local variables',
                  'Return address',
                  'Parameters',
                  'Register values (A. example of register that would be in stack frame)'
                ],
                guidance: 'Max 2.' },
              '03': { type: 'points',
                points: [
                  'AO1 knowledge: Breaking a problem into smaller sub-problems',
                  'AO1 understanding: Each of which solves an identifiable task',
                  'AO1 understanding: Each of which might be further subdivided'
                ],
                guidance: '3 marks: 1 AO1 knowledge + 2 AO1 understanding.' },
              '04': { type: 'points',
                points: [
                  'Hash algorithm applied',
                  'To key value (NE. "to data/item")',
                  'Result is location in table where the record should be stored',
                  'If location is not empty',
                  'Then use next free location (A. description of any feasible collision-resolution method)'
                ],
                guidance: '5 marks: 1 per point.' },
              '05.1': { type: 'points',
                points: [
                  'Simpler for a machine / computer to evaluate (A. "easier"; R. "to understand")',
                  'Simpler to code algorithm',
                  'Do not need brackets to show correct order of evaluation / calculation (A. "RPN expressions cannot be ambiguous")',
                  'Operators appear in the order required for computation / No need for order of precedence of operators',
                  'No need to backtrack when evaluating'
                ],
                guidance: 'Max 2.' },
              '05.2': { type: 'points',
                points: [
                  '(Starting at LHS of expression) push values / operands onto stack (R. if operators are also pushed onto stack, unless they are immediately popped off)',
                  'Each time an operator is reached, pop the top two values off the stack (and apply the operator to them) — or pop the required number of values',
                  'Push result of applying the operator back onto the stack',
                  'When the end of the expression is reached, the top item of the stack is the result / pop one value off the stack'
                ],
                guidance: '4 marks. Max 3 if any errors. Max 3 if more than one stack used. Award 0 marks if description is not about a stack / LIFO structure even if "stack" is mentioned.' },
              '06.1': { type: 'exact',
                points: [
                  'S2 → a → S5',
                  'S2 → b → S4',
                  'S0 → b → S2',
                  'S5 → b → S2'
                ],
                guidance: '2 marks: 1 for rows with current state of S2 correct; 1 for rows with new state of S2 correct. I. order of rows.' },
              '06.2': { type: 'exact',
                points: ['a(ba)* | b(ab)*', '(a(ba)*) | (b(ab)*)', 'b(ab)* | a(ba)*', 'a | b | b(ab)+ | a(ba)+'],
                guidance: '3 marks for fully correct regex. Max 2 if not fully correct. If not fully correct, award marks for: expression uses two * metacharacters and a | (1); contains (ba)* and (ab)* — R. ba* or ab*; will match single a and single b; contains (ba)+ and (ab)+ — R. ba+ or ab+.' },
              '07.1': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'A line of reasoning has been followed to arrive at a logically structured working or almost fully working programmed solution that meets most of the requirements. All of the appropriate design decisions have been taken. To award 12 marks, ALL requirements must be met.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'Evidence that a line of reasoning has been followed to produce a logically structured program. The program displays relevant prompts, inputs the required number, has at least one iterative structure and one selection structure, and uses appropriate variables to store most of the needed data. An attempt has been made to determine if a number is a Harshad number, although this may not work correctly under all circumstances.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'A program has been written and some appropriate, syntactically correct programming language statements are present. Some appropriate design work — the response recognises at least one appropriate technique that could be used by a working solution.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A program has been written and a few appropriate programming language statements have been written but there is no evidence that a line of reasoning has been followed to arrive at a working solution.' }
                ],
                indicative: {
                  'AO3 Design (4 marks)': '1) Identify that integer division is needed when calculating the sum of digits (or that a character needs converting to a number). 2) Identify that a loop is needed that repeats either by the entered number n, or until the nth Harshad number is found. 3) Identify that nested iteration is needed. 4) Selection structure that compares sum of digits with a number (I. if sum incorrectly calculated).',
                  'AO3 Programming (8 marks)': '5) Suitable prompt asking the user to enter a number + assignment to a variable. 6) Iterative structure that repeats enough times to find all the digits of a number. 7) Calculates the sum of all the digits of a number. 8) Calculates the remainder from dividing a number by its sum of digits (A. incorrect sum). 9) Resets the variable used to store the sum of digits to 0 in an appropriate place. 10) Program works for the first nine Harshad numbers (1–9). 11) Program displays 10/12/18 if the user enters 10/11/12. 12) Program displays the correct nth Harshad number under all circumstances.',
                  'Alternative MS (if using recursion for sum of digits)': '3) Identify that a recursive subroutine is needed to calculate the sum of digits. 6) Recursive subroutine has an appropriate base case. 9) Sets the variable used to store the sum to the result returned by the recursive subroutine in an appropriate place.'
                },
                guidance: '12 marks (4 AO3 design + 8 AO3 programming). Max 11 if any errors. Test case for Q07.2: input 600 → output 3102.' },
              '08.1': { type: 'exact',
                points: ['If they have the same value as each other for one of their coordinates'],
                guidance: '1 mark.' },
              '08.2': { type: 'points',
                points: [
                  '(The result of) the integer division by 2',
                  'On the x coordinate'
                ],
                guidance: '2 marks: 1 per component of the expression.' },
              '08.3': { type: 'points',
                points: [
                  'Change the 3 in the selection structure to a 7',
                  'Change the 2 (3 in Python) in the for loop to a 6 (7 in Python)',
                  '(Alternative) The number of elements in the items list now needs to be seven instead of three, and would need to put three integers in the list for each tile'
                ],
                guidance: '2 marks. If answer is incorrect, award 1 mark for changing the 3 to a 5 and the 2 to a 4.' },
              '09.1': { type: 'exact',
                points: ['The classes that inherit from Piece would not be able to use it'],
                guidance: '1 mark. A. answers that use a specific subclass that would not be able to use it (Baron, LESS, PBDS).' },
              '09.2': { type: 'points',
                points: [
                  "When both players' barons are destroyed in the same turn",
                  "And it is not player two's turn / and it is player one's turn"
                ],
                guidance: '2 marks: 1 per point.' },
              '09.3': { type: 'points',
                points: [
                  'A method shared (up and down the inheritance hierarchy) but with each class / method implementing it differently',
                  'A single interface is provided to entities / objects of different classes / types',
                  'Objects of different classes / types respond differently to the use of a common interface / the same usage',
                  'Allowing different classes to be used with the same interface',
                  'The ability to process objects differently depending on their class / type'
                ],
                guidance: '1 mark for any one of the descriptions.' },
              '10.1': { type: 'points',
                points: [
                  'The structure of the data in the file does not match the expected format (A. by example, e.g. "there are not five items in the first line in the file")',
                  'File is not a text file (A. any reasonable example of a file error apart from "file not existing")',
                  'The program tries to convert a non-integer (A. non-numeric / string / other invalid data type) value to an integer',
                  'Program tries to store a value which is too large to be an integer as an integer'
                ],
                guidance: 'Max 1.' },
              '10.2': { type: 'exact',
                points: ['CheckMoveCommandFormat', 'CheckStandardCommandFormat', 'CheckUpgradeCommandFormat', 'hasMethod (Java only)', 'readLine (Java only)', 'executeCommandInTile (Java only)'],
                guidance: 'Max 1. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '11': { type: 'points',
                points: [
                  'It gets the largest of...',
                  '...the differences between the x coordinates, the y coordinates and the z coordinates (of the two tiles)'
                ],
                guidance: '2 marks: 1 for "largest of" + 1 for "differences between the three coordinate pairs".' },
              // ── Section D mark schemes (Q12.1–Q15.1 = 33 marks)
              '12.1': { type: 'points',
                points: [
                  "AO3 programming — Correctly checks if a piece belongs to a player (player == 1 / player == 2)",
                  "AO3 programming — Correctly checks if a piece is a LESS piece (PieceType == 'L')",
                  "AO3 programming — Correct logic for the LESS-piece-belonging-to-a-player selection structure, with that player's VPs incremented by 1 when a LESS piece is theirs",
                  "AO3 programming — Mark points 1 to 3 done for the OTHER player too (symmetric handling)",
                  "AO3 programming — Only adds VPs for LESS pieces that have NOT been destroyed (IsDestroyed check)"
                ],
                guidance: '5 marks total. Max 4 if code contains errors. The AI marker should check the logic correctly differentiates between the two players AND between destroyed/surviving LESS pieces.' },
              '13.1': { type: 'points',
                points: [
                  'AO3 programming — Created a new class called RangerPiece (R. other names for class; I. case and minor typos)',
                  'AO3 programming — New class inherits from Piece and has a constructor that overrides the base-class constructor with a call made to the base constructor (R. if incorrect parameters)',
                  "AO3 programming — Constructor sets PieceType to 'R' (R. if before the call to the base constructor; R. lowercase 'r')",
                  'AO3 programming — Subroutine CheckMoveIsValid created that overrides the base class method, with correct code for a normal move (R. if incorrect parameters)',
                  'AO3 programming — Selection structure with correct conditions that allow a move from forest terrain to forest terrain (any distance)',
                  'AO3 programming — Correct fuel cost returned for ALL moves: forest-to-forest (cost 1), normal distance-of-one (cost 1), illegal move (invalid / negative), distance-of-one with peat bog as start or end terrain handled per the skeleton convention',
                  'AO3 programming — In AddPiece: selection structure with the correct condition in an appropriate place that results in a call to the RangerPiece constructor when TypeOfPiece is "Ranger"'
                ],
                guidance: '7 marks total. Max 6 if code contains errors.' },
              '14.1': { type: 'points',
                points: [
                  "AO3 programming (ExecuteCommand) — Selection structure with the correct condition for the 'burn' command",
                  "AO3 programming — Selection structure with a correct condition that checks if there is lumber in the player's supply",
                  "AO3 programming — Returns the correct string 'Cannot burn lumber' (A. minor typos; I. case) when the player has no lumber",
                  'AO3 programming — Generates a random integer',
                  "AO3 programming — Random integer generated is in the correct range (1 .. amount of lumber the player has, inclusive)",
                  "AO3 programming — Reduces the player's lumber by the correct amount (the random integer)",
                  "AO3 programming — Increases the player's fuel by the correct amount (same random integer)",
                  "AO3 programming (CheckCommandIsValid) — Returns True if the burn command was used"
                ],
                guidance: '8 marks total. Max 7 if code contains errors.' },
              '15.1': { type: 'points',
                points: [
                  'AO3 programming — Created a new method called GetFogOfWar (R. other names for the method; I. case and minor typos)',
                  'AO3 programming — Method returns a Boolean value and takes the index of a tile as a parameter (A. alternatives to passing the tile index e.g. the tile itself; I. other parameters)',
                  'AO3 programming — Check to see if the tile passed as a parameter contains a piece belonging to the active player',
                  'AO3 programming — Gets all the neighbours of the tile passed as a parameter',
                  'AO3 programming — Gets all the neighbours of the tiles identified in mark point 4 (i.e. tiles 2 cells away)',
                  'AO3 programming — Checks at least one neighbouring tile contains a piece belonging to the active player',
                  'AO3 programming — Iterative structure that looks at each tile identified as being within two cells of the tile passed to the method (A. not all tiles identified correctly)',
                  'AO3 programming — Every time a tile is checked, the PieceID in the tile is obtained',
                  'AO3 programming — Returns a value of False if it correctly identifies, for the tiles checked, that the tile contains a piece belonging to the active player',
                  'AO3 programming — Method GetFogOfWar returns the correct value under ALL circumstances',
                  'AO3 programming — Modified GetPieceTypeInTile so that it calls GetFogOfWar (A. alternative identifier used as long as it matches mark point 1)',
                  'AO3 programming — GetPieceTypeInTile returns a space character if the value returned by GetFogOfWar is True',
                  'AO3 programming — GetPieceTypeInTile returns the piece in the tile if there is one and a space character otherwise (or when GetFogOfWar is True) (R. if no attempt for either mark points 11 or 12)'
                ],
                guidance: '13 marks total. Max 12 if code contains errors or if other parts of GetPieceTypeInTile no longer work correctly. Alternative answer for mark points 4, 5 and 7: iterative structure over EVERY tile, getting Distance from the tile passed in, then checking tiles within distance 2. Both phrasings get full credit.' }
            }
          },
          {
            id: 'cs-aqa-7517-2021-p2',
            year: 'Autumn 2021',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75172-QP-NOV21.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75172-MS-NOV21.PDF',
            questions: [
              {
                number: 1,
                scenario: "A bitmap image is 1000 pixels wide by 800 pixels high. The image takes up 400 kB of storage space when represented as a bitmap, excluding metadata.",
                parts: [
                  { code: '01.1', prompt: "Calculate the maximum number of different colours that could appear in the image.\n\nYou should show your working.", marks: 3 },
                  { code: '01.2',
                    preamble: "The same image can also be represented using vector graphics. The vector graphics representation of the image takes up 2 kB of storage space.",
                    prompt: "Explain why the amount of storage space taken up by the vector graphics representation of the image is significantly smaller than the space taken up by the bitmap representation.", marks: 3 },
                  { code: '01.3',
                    preamble: "One advantage of vector graphics compared to bitmap graphics is that fewer bytes are used to represent an image.",
                    prompt: "State two other advantages of vector graphics compared with bitmap graphics.", marks: 2 }
                ]
              },
              {
                number: 2,
                parts: [
                  { code: '02', prompt: "Describe what thin-client computing is and explain two reasons why a thin-client system might be chosen in preference to a thick-client system.", marks: 3 }
                ]
              },
              {
                number: 3,
                scenario: "A data communications system can transmit four different signals. Each different signal represents two bits of data.",
                parts: [
                  { code: '03.1', prompt: "Describe the exact relationship between the bit rate and the baud rate for this system.", marks: 1 },
                  { code: '03.2', prompt: "Describe the relationship between the bit rate of the system and the bandwidth of the transmission medium that the data is transmitted through.", marks: 1 },
                  { code: '03.3',
                    preamble: "The system uses serial transmission.",
                    prompt: "Describe the difference between the operation of serial and parallel transmission.", marks: 2 }
                ]
              },
              {
                number: 4,
                scenario: "Figure 1 shows a circuit with inputs X0 to X2 and outputs Q0 to Q7. The circuit is a 3-to-8 line binary decoder built from three NOT gates and eight 3-input AND gates: each output Qn is the AND of the three input lines (each possibly inverted) corresponding to the binary value n.",
                parts: [
                  { code: '04.1', prompt: "Write a Boolean expression to represent the output Q1 of the circuit in Figure 1.\n\nQ1 = ____", marks: 1 },
                  { code: '04.2',
                    figure: { type: 'table', label: 'Truth table to complete',
                      headers: ['X2', 'X1', 'X0', 'Q0', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
                      rows: [
                        ['0','0','0','','','','','','','',''],
                        ['0','0','1','','','','','','','',''],
                        ['0','1','0','','','','','','','',''],
                        ['0','1','1','','','','','','','',''],
                        ['1','0','0','','','','','','','',''],
                        ['1','0','1','','','','','','','',''],
                        ['1','1','0','','','','','','','',''],
                        ['1','1','1','','','','','','','','']
                      ] },
                    prompt: "Complete the truth table for the circuit in Figure 1.", marks: 3 },
                  { code: '04.3', prompt: "Explain the purpose of the circuit in Figure 1.\n\nConsidering the inputs and outputs of the circuit and consulting your answers to Question 04.1 and Question 04.2 may help you to do this.", marks: 2 },
                  { code: '04.4',
                    preamble: "The logic circuit in Figure 2 produces an output S that is equivalent to one of the outputs of the logic circuit in Figure 1, for the inputs X0, X1 and X2. Figure 2 ANDs the NOTs of all three inputs together (a 3-input AND gate whose inputs are X̄2, X̄1, X̄0).",
                    prompt: "Which output (Q0 to Q7) from Figure 1 is the output S from the circuit in Figure 2 equivalent to?", marks: 1 }
                ]
              },
              {
                number: 5,
                scenario: "A sports centre uses a relational database to store information about its facilities (such as the swimming pool) and the bookings that have been made to use them. Figure 3 shows the structure of the relations in the database.",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 3',
                    content: "Facility(FacilityID, Description, MaxPeople, PricePerHour)\nFacilityForSport(Sport, FacilityID)\nBooking(FacilityID, BookingDate, StartTime, EndTime, CustomerID)\nCustomer(CustomerID, Forename, Surname, EmailAddress)\n\n• Facility: each facility identified by a unique number; PricePerHour is price of hiring the facility for 1 hour (e.g. FacilityID 1 = 'Outdoor Pitch A' @ £17.50).\n• FacilityForSport: identifies which facilities are suitable for which sports (one row per facility-sport pair).\n• Booking: bookings must start/end on the hour, quarter past, half past or quarter to. A customer can book more than one facility for the same time but each facility can only be booked by one customer at any one time.\n• Customer: details of customers who have made bookings." }
                ],
                parts: [
                  { code: '05.1',
                    preamble: "The entity identifier (primary key) for the Booking relation is the composite (FacilityID, BookingDate, StartTime). An alternative entity identifier could have been chosen, composed of different attributes.",
                    prompt: "Shade one lozenge to indicate which of the following groups of attributes would form a valid alternative entity identifier for the Booking relation.\n\nA) BookingDate, StartTime, EndTime\nB) FacilityID, BookingDate, EndTime\nC) FacilityID, StartTime, CustomerID\nD) FacilityID, BookingDate, EndTime, Sport", marks: 1 },
                  { code: '05.2',
                    preamble: "A different design was originally proposed for the database. This design did not have the Customer relation and had the following design for the Booking relation:\n\n    Booking(FacilityID, BookingDate, StartTime, EndTime, Forename, Surname, EmailAddress)",
                    prompt: "Explain why this alternative design would have been rejected in favour of the design in Figure 3.", marks: 2 },
                  { code: '05.3', prompt: "Complete the following SQL statement to create the Facility relation specified in Figure 3, including the primary key.\n\n    CREATE TABLE Facility (\n        ____________________________________\n    )", marks: 3 },
                  { code: '05.4',
                    preamble: "A customer wants to book a facility that is suitable for playing basketball on the 15/06/2021 between 14:15 and 16:15.\n\nAs part of the booking process, a query is needed to list all the existing bookings that would overlap with the new booking.",
                    prompt: "Write a query that will list all the bookings for facilities that are suitable for playing basketball and which would overlap with the booking that the customer wants to make.\n\nFor each booking which would overlap with the new booking only the FacilityID, StartTime and EndTime fields should be listed.", marks: 7 }
                ]
              },
              {
                number: 6,
                scenario: "Figure 4 shows an assembly language program written using the AQA assembly language instruction set (LDR, STR, ADD, SUB, MOV, CMP, B, B<cond>, AND, ORR, EOR, MVN, LSL, LSR, HALT; operand2 = #decimal or Rm; general registers R0–R12). The program takes its input values from registers R1 and R2 and stores its output in registers R0 and R1.",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 4',
                    content: "         CMP R2, #0\n         BEQ exit\n         MOV R0, #0\n         MOV R3, #1\nmoveleft:\n         LSL R2, R2, #1\n         LSL R3, R3, #1\n         CMP R2, R1\n         BLT moveleft\n         BEQ mainloop\n         LSR R2, R2, #1\n         LSR R3, R3, #1\nmainloop:\n         CMP R1, R2\n         BLT skip\n         ADD R0, R0, R3\n         SUB R1, R1, R2\nskip:\n         AND R4, R3, #1\n         CMP R4, #1\n         BEQ skipshiftR2\n         LSR R2, R2, #1\nskipshiftR2:\n         LSR R3, R3, #1\n         CMP R3, #0\n         BNE mainloop\nexit:\n         HALT" }
                ],
                parts: [
                  { code: '06.1',
                    preamble: "Each register can hold a 16-bit value. You may find it easier to understand the operation of the program if you write the contents of the registers out in both binary and decimal.",
                    figure: { type: 'table', label: 'Trace table (initial values shown)',
                      headers: ['R0', 'R1', 'R2', 'R3', 'R4'],
                      rows: [
                        ['', '100010 (34)', '110 (6)', '', '']
                      ] },
                    prompt: "Complete the trace table to show the results of executing the program in Figure 4 when the initial values in registers R1 and R2 are 34 and 6.\n\nYou may not need to use all the rows in the table.", marks: 6 },
                  { code: '06.2',
                    preamble: "The initial values for the program (its inputs) are stored in R1 and R2 and the final values stored in R0 and R1 are its outputs.",
                    prompt: "By considering the inputs and the outputs in your trace table for Question 06.1, describe the purpose of the program.", marks: 2 }
                ]
              },
              {
                number: 7,
                parts: [
                  { code: '07.1', prompt: "Explain why a laser printer with a built-in wireless network adapter is likely to be a suitable choice of printer for a small office.", marks: 3 },
                  { code: '07.2', extended: true,
                    prompt: "Describe the principles of operation of a laser printer.", marks: 6 }
                ]
              },
              {
                number: 8,
                parts: [
                  { code: '08', prompt: "Use binary addition in 8-bit two's complement to perform the subtraction:\n\n    18 − 72\n\nYou must show both your working and your final answer in binary.", marks: 2 }
                ]
              },
              {
                number: 9,
                parts: [
                  { code: '09', extended: true,
                    prompt: "Big Data is an important application area for modern computer science.\n\n• Describe what Big Data is, using examples to illustrate your description.\n• Explain some of the challenges that Big Data brings with it and the approaches that can be taken to overcome these, in relation to programming and hardware.\n• Consider some of the ethical and legal issues that might arise in applications that store data, particularly data about people.", marks: 12 }
                ]
              },
              {
                number: 10,
                scenario: "A particular computer uses a normalised floating point representation with an 8-bit mantissa and a 4-bit exponent, both stored using two's complement.",
                parts: [
                  { code: '10.1',
                    preamble: "Figure 5 lists four bit patterns A–D stored in this computer's memory. Three of the bit patterns are valid normalised floating point numbers and one is not.",
                    figure: { type: 'table', label: 'Table 2 — assign one letter A–D per row',
                      headers: ['Value description', 'Correct letter (A–D)'],
                      rows: [
                        ['A negative value that is valid in the representation.', ''],
                        ['The largest positive value that can be represented in the system.', ''],
                        ['A value that is not valid in the representation because it is not normalised.', '']
                      ] },
                    prompt: "Complete Table 2. In the Correct letter (A–D) column write the appropriate letter from A to D to indicate which bit pattern in Figure 5 is an example of the type of value described in the Value description column.\n\nDo not use the same letter more than once.", marks: 3 },
                  { code: '10.2',
                    preamble: "Figure 6 shows a floating point representation of a number with mantissa = 0.1101 (= 0.8125 = 13/16) and exponent = 0110 (= +6). (See the official PDF for the exact bit pattern.)",
                    prompt: "Calculate the decimal equivalent of the number.\n\nYou should show your working.", marks: 2 },
                  { code: '10.3',
                    preamble: "In this floating point system, the closest possible representation of the decimal number 104.7 is shown in Figure 7. By converting this number back to decimal it can be seen that the actual value stored is 105.",
                    prompt: "Calculate the absolute error that has occurred when representing 104.7 in Figure 7.", marks: 1 },
                  { code: '10.4', prompt: "Calculate the relative error that has occurred when representing 104.7 in Figure 7.\n\nExpress your answer as a percentage to two decimal places.", marks: 1 },
                  { code: '10.5', prompt: "Explain why the relative error is usually considered to be a more important measure of error than the absolute error.", marks: 1 }
                ]
              },
              {
                number: 11,
                scenario: "Figure 8 shows a computer network. The devices connected to the network are identified using IPv4 addresses. When assigning IP addresses, 20 bits have been allocated to the Network IDs (also known as Subnet IDs or subnet addresses) and 12 bits have been allocated to the Host IDs. The network includes Router 1 with two ports labelled A (one subnet, 192.168.192.0 area) and B (another subnet, 192.168.64.0 area), and a computer labelled C on the 192.168.64.0 subnet. Other subnets include 192.168.64.0 in a physical star topology.",
                parts: [
                  { code: '11.1', prompt: "State suitable IP addresses for:\n  • The Router 1 port labelled A\n  • The Router 1 port labelled B\n  • The computer labelled C", marks: 3 },
                  { code: '11.2', prompt: "Shade one lozenge to indicate which of the following four subnet masks is the one that has been assigned to the devices connected to the network in Figure 8.\n\nA) 255.255.0.0\nB) 255.255.15.0\nC) 255.255.240.0\nD) 255.255.255.0", marks: 1 },
                  { code: '11.3',
                    preamble: "The devices on the network in Figure 8 use IPv4.",
                    prompt: "State one reason why IPv6 has been introduced to replace IPv4.", marks: 1 },
                  { code: '11.4', prompt: "State the name of the physical topology used in subnet 192.168.64.0 in Figure 8.", marks: 1 },
                  { code: '11.5', extended: true,
                    preamble: "Laptop computers and other devices can connect to the network via the wireless access point. The wireless connection uses the CSMA/CA protocol with Request to Send/Clear to Send (RTS/CTS).\n\nA laptop connected to the wireless access point has data to send to another computer.",
                    prompt: "Explain how the CSMA/CA protocol with RTS/CTS will be used during this transmission.", marks: 6 }
                ]
              },
              {
                number: 12,
                parts: [
                  { code: '12', prompt: "Describe how MIDI is used to represent digital music.", marks: 2 }
                ]
              },
              {
                number: 13,
                parts: [
                  { code: '13.1', prompt: "Describe the difference between application software and system software.", marks: 2 },
                  { code: '13.2',
                    preamble: "Utilities are a type of system software.",
                    prompt: "Describe what utilities are and include an example of a utility in your answer.", marks: 2 }
                ]
              },
              {
                number: 14,
                parts: [
                  { code: '14.1', prompt: "Shade one lozenge to indicate which of these statements about a computer that uses the stored program concept is false.\n\nA) Instructions are fetched and executed in sequence.\nB) The computer can only be used with one program.\nC) The data is stored in the main memory.\nD) The program is stored in the main memory.", marks: 1 },
                  { code: '14.2',
                    preamble: "The control unit is an important component of a processor.",
                    prompt: "Describe the role of the control unit.", marks: 3 },
                  { code: '14.3',
                    preamble: "One method that can be used to improve the performance of a processor is to increase the amount of cache memory.",
                    prompt: "Describe:\n  • what cache memory is\n  • what cache memory is used for\n  • how increasing the amount of cache memory can improve the performance of a processor.", marks: 4 }
                ]
              }
            ],
            // Official AQA mark-scheme content for every part, copied from
            // the 7517/2 November 2021 mark scheme.
            markSchemes: {
              '01.1': { type: 'exact',
                points: ['16', '2⁴', '2^4'],
                guidance: '3 marks for correct final answer of 16 (= 2⁴ colours). If final answer not given/correct, award up to 2 method marks (one per step) for: multiplying 400 by 1000 (= 400 000); dividing 3 200 000 / 400 000 / 8000 / 3200 / 400 / 8 by a number; multiplying 1000 by 800 (= 800 000); multiplying by 8 to convert bytes to bits; colour depth calculated as 4; showing 2^x as the last stage of the working (where x is the calculated colour depth).' },
              '01.2': { type: 'points',
                points: [
                  'Bitmap images store the colour of each pixel / vector graphics do not need to store the colour of each pixel (A. "data about pixel" instead of colour, R. just storing pixels)',
                  'The image contains 800 000 pixels / images can contain lots of pixels',
                  'Vector graphics store information about / properties of the objects that an image is composed of (A. "shapes" for "object"; R. "equations" or "instructions" for object unless clear instructions describe objects; A. examples of properties)',
                  'It takes only a small amount of memory to store the properties of an object',
                  '(Large) images can be composed of relatively few objects / there will be fewer objects than there would be pixels / a single object might be equivalent to many pixels'
                ],
                guidance: 'Max 3. NE. "vector graphics are composed of objects" without reference to properties/information.' },
              '01.3': { type: 'points',
                points: [
                  'Individual objects / components / parts of the image can be manipulated / edited / duplicated / copied independently (NE. "images are easy to edit")',
                  'The image / objects can be enlarged / scaled without loss of quality / without becoming pixelated / vector graphics are resolution independent (A. "zoomed in"; NE. "easy to scale")',
                  'If an object / component is deleted, the software knows what is behind it / no "hole" is left in the image'
                ],
                guidance: 'Max 2. R. faster transmission times (since fewer bytes is already given in the question).' },
              '02': { type: 'points',
                points: [
                  'What it is (1 mark): Processing is carried out / applications are executed on an application server (A. server; NE. "Resources are stored on the server")',
                  'Why selected: Clients are cheaper to purchase / can have lower hardware specification (NE. "cheaper" without further explanation)',
                  'Why selected: Less configuration of clients is necessary / easier to configure or add a new client / easier to replace a client',
                  'Why selected: Simpler installation / updating of software (as only done on server) (R. if implication software is on client)',
                  'Why selected: Impossible to install unauthorised software on workstations / more secure as fewer settings can be changed',
                  'Why selected: Workstations consume less electricity / power',
                  'Why selected: Licensing can be cheaper (as licence per active user not per client)',
                  'Why selected: Longer MTBF for workstations / workstations do not fail as often / need less maintenance'
                ],
                guidance: 'Max 3: 1 mark AO1 (knowledge) for what thin-client is + max 2 marks AO1 (understanding) for the reasons (two reasons must be given).' },
              '03.1': { type: 'exact',
                points: ['Bit rate is double / twice baud rate', 'baud rate is half bit rate', '2:1'],
                guidance: '1 mark. A. "It is double".' },
              '03.2': { type: 'exact',
                points: ['(directly) proportional', 'the greater the bandwidth the higher the bit rate', 'as bit rate increases so does bandwidth'],
                guidance: '1 mark. A. "as bit rate increases so does bandwidth" as BOD. NE. "bandwidth constrains bit rate".' },
              '03.3': { type: 'points',
                points: [
                  'Serial sends one bit at a time / after each other whereas parallel sends multiple bits simultaneously / at the same time (R. bytes/values/packets/data for bits)',
                  'Serial uses a single wire / cable / path / line whereas parallel uses several / multiple wires / cables / paths / lines (NE. answers that refer to multiple channels)'
                ],
                guidance: '2 marks. BOTH sides of each comparison point must be made to award a mark.' },
              '04.1': { type: 'exact',
                points: ['Q1 = X̄2 · X̄1 · X0', 'NOT X2 AND NOT X1 AND X0'],
                guidance: '1 mark for Q1 = X̄2 · X̄1 · X0 (or any logically equivalent expression).' },
              '04.2': { type: 'exact',
                points: [
                  'Row 000: Q0=1, all others 0',
                  'Row 001: Q1=1, all others 0',
                  'Row 010: Q2=1, all others 0',
                  'Row 011: Q3=1, all others 0',
                  'Row 100: Q4=1, all others 0',
                  'Row 101: Q5=1, all others 0',
                  'Row 110: Q6=1, all others 0',
                  'Row 111: Q7=1, all others 0'
                ],
                guidance: '3 marks: 1 mark per 1 row completed correctly (1 mark for 1 row, 2 marks for 4 rows, 3 marks for all 8 rows).' },
              '04.3': { type: 'exact',
                points: [
                  '2 marks: Output Qn is 1 / on / activated when the binary pattern input is the value n',
                  '2 marks (alt): It is a (3-bit) binary decoder',
                  '1 mark: One / a different output is 1 / on / activated for each different input pattern',
                  '1 mark (alt): It converts a binary input to a decimal output'
                ],
                guidance: '2 marks for the full description. 1 mark for a partial description. A. relationship between n and output Qn described by example (e.g. inputs 0 → output 0, inputs 1 → output 1, etc.). A. "n" for "Qn".' },
              '04.4': { type: 'exact',
                points: ['Q0'],
                guidance: '1 mark. NE. "0" without the Q prefix.' },
              '05.1': { type: 'exact',
                points: ['B', 'FacilityID, BookingDate, EndTime'],
                guidance: '1 mark for B. R. if more than one lozenge shaded.' },
              '05.2': { type: 'points',
                points: [
                  'The design is not normalised / there is (unnecessary) data duplication / data redundancy / inconsistent data could occur / customer attributes are determined by attributes that are not part of the primary key',
                  'If a customer made more than one booking then their details would need to be entered more than once / redundancy in customer data / customer data stored multiple times',
                  'If customer details were entered more than once they could be inconsistent / there could be inconsistency in the customer data / updates may need to be made to multiple records if a customer\'s details changed',
                  'Deleting all of the bookings that a customer made would also delete the data about the customer',
                  'It would not be possible to store details about a customer before they had made a booking',
                  'It would be harder to identify all the bookings for one customer (no unique identifier) / impossible or difficult to distinguish between two customers with the same name (if they did not have an email address)'
                ],
                guidance: 'Max 2. For all mark points (other than the first) it must be stated that it is the CUSTOMER DATA that is the issue. Accept points stated the other way around (as advantages of the new design instead of reasons to reject the original).' },
              '05.3': { type: 'points',
                points: [
                  'FacilityID with sensible data type and identified as primary key',
                  'Two other fields with sensible data types and lengths (e.g. Description VARCHAR(100), MaxPeople INT, PricePerHour SMALLMONEY)',
                  'Fully correct definition with syntactically correct SQL including commas separating each line'
                ],
                guidance: '3 marks. A. any sensible types. Lengths do not need to be specified. I. brackets at start/end of code. Alternative types: tinyint/smallint/mediumint/integer/number/byte for INT; char/nchar/nvarchar/ntext/longvarchar/varchar2/nvarchar2/text/tinytext/mediumtext/longtext/string for VARCHAR; money/float/real/decimal/double/numeric/currency for PricePerHour (R. integer-only types).' },
              '05.4': { type: 'points',
                points: [
                  'AO2 — correctly identify tables (FacilityForSport, Booking) and fields (FacilityID, StartTime, EndTime) to extract',
                  'AO2 — correctly identify condition: Sport = "Basketball" OR BookingDate = "15/06/2021"',
                  'AO2 — correctly identify condition to link tables: Booking.FacilityID = FacilityForSport.FacilityID',
                  'AO2 — at least one condition that identifies SOME overlapping bookings and NO non-overlapping bookings (e.g. StartTime <= "14:15" AND EndTime >= "16:15")',
                  'AO2 — full set of conditions identifying ALL overlapping bookings (StartTime <= "16:15" AND EndTime >= "14:15", or the three-clause version)',
                  'AO3 — fully correct SQL in two of three clauses (SELECT, FROM, WHERE)',
                  'AO3 — fully correct SQL in all three clauses'
                ],
                guidance: '7 marks (5 AO2 + 2 AO3). Max 2 of the 3 condition marks if not joined by correct logical operators. AO2 marks awarded regardless of SQL correctness. A. table-name.fieldname; A. AS alias; A. INNER JOIN as one word; A. spaces in fieldnames; A. any quotation marks/hashes around dates; A. > for >=, < for <=; A. month as 6 instead of 06. I. unnecessary brackets. I. ORDER BY. DPT. fieldname before table name. DPT. unnecessary punctuation — allow one trailing semicolon. Overall Max 6 if solution doesn\'t work fully.' },
              '06.1': { type: 'points',
                points: [
                  'Correct initial values loaded into R0 (= 0) and R3 (= 1)',
                  'Logical shifting left of register values in moveleft loop: R2 shifts 110 → 1100 → 11000 → 110000; R3 shifts 1 → 10 → 100',
                  'Exiting moveleft loop (when R2 > R1) and shifting right once: R2 back to 11000 (24); R3 back to 100 (4)',
                  'First addition + subtraction on R0 and R3 / R1 in mainloop: R0 → 100 (4); R1 → 1010 (10)',
                  'Addition + subtraction loop continues correctly through subsequent iterations',
                  'Correct final values in registers: R0 = 101 (5), R1 = 100 (4)'
                ],
                guidance: '6 marks total. Values do not need to be in exact cells shown but must be in the correct sequence within each column. A. values written in either decimal or binary; if both are written and only one is correct treat the cell as correct. Max 5 if any incorrect values in table.' },
              '06.2': { type: 'points',
                points: [
                  'Performs (integer) division / outputs the quotient after performing a division / outputs how many times one number (R2) goes into another (R1) / R0 is the quotient',
                  'Outputs the remainder / what is left over after performing (integer) division / R1 is the remainder'
                ],
                guidance: '2 marks: 1 for quotient, 1 for remainder.' },
              '07.1': { type: 'points',
                points: [
                  'Why laser is suitable: Low cost per printed page / toner is cheaper per page than ink',
                  'Why laser is suitable: Prints many pages per minute / high speed',
                  'Why laser is suitable: Options to install a greater variety of paper trays / paper handling',
                  'Why laser is suitable: Toner will not dry out (A. toner does not expire as quickly as ink)',
                  'Why laser is suitable: High resolution output',
                  'Why wireless adapter is suitable: Easy to share printer between many devices',
                  'Why wireless adapter is suitable: Can connect / print directly from computers / laptops with WiFi / no need to install network or cabling',
                  'Why wireless adapter is suitable: Printer can be managed remotely',
                  'Why wireless adapter is suitable: WiFi should be fast enough for likely number of users (small office)',
                  'Why wireless adapter is suitable: WiFi should have sufficient range for devices to connect (small office)'
                ],
                guidance: 'Max 3: max 2 from "Why laser is suitable" + max 2 from "Why wireless adapter is suitable".' },
              '07.2': { type: 'levels',
                levels: [
                  { range: [5, 6], descriptor: 'Level 3',
                    criteria: 'A comprehensive description of how a laser printer works, which shows an excellent level of understanding, covering almost all of the indicative content below.' },
                  { range: [3, 4], descriptor: 'Level 2',
                    criteria: 'A sound description of how a laser printer works, which shows a good level of understanding. The key parts of the indicative content are covered but there are gaps in the description.' },
                  { range: [1, 2], descriptor: 'Level 1',
                    criteria: 'Some relevant points are made, but overall the description conveys only a limited understanding, either because only a very small number of points are made or the points made are not drawn together to form an accurate description.' }
                ],
                indicative: {
                  'Laser printer operation': 'Bitmap of image built in memory from page description. (Negative) charge applied to (photosensitive) drum. Laser beam directed at drum (R. laser directed at paper). Mirror used to direct laser beam. Where laser strikes drum, charge is neutralised / reversed / cancelled / discharged. (Negative) charge applied to toner. Toner sticks to drum based on charge / where the laser struck. Paper passed over drum and toner transfers to it. Positively charged transfer roller assists transfer of toner from drum to paper (A. charge applied to paper assists with transfer). Heater fuses toner onto paper. For colour printing, four different colour toners / four drums are required.'
                },
                guidance: '6 marks. Best-fit between Level 1 (1–2), Level 2 (3–4), Level 3 (5–6). 0 marks for nothing creditworthy.' },
              '08': { type: 'exact',
                points: ['11001010 (= −54 in 8-bit two\'s complement)'],
                guidance: '2 marks total. 1 mark for both 18 and −72 represented correctly in two\'s complement: 18 = 00010010 and −72 = 10111000. 1 mark for correct final answer in binary: 11001010.' },
              '09': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'A line of reasoning has been followed to produce a coherent, relevant, substantiated and logically structured response. Covers all THREE areas and in at least two areas there is sufficient detail to show a good level of understanding. To reach the top of this range, a good level of understanding must be shown of all three areas.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'Coherent, relevant, substantiated and logically structured response showing a good level of understanding of two areas, or a good level of understanding of one area and a reasonable level of understanding of the other two. Top of range requires good understanding of two areas.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'A limited attempt has been made to follow a line of reasoning and the response has a mostly logical structure. Good level of understanding of at least one area OR some understanding of all three areas.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A few relevant points have been made but there is no evidence that a line of reasoning has been followed. Points may only relate to one or two of the areas. Insufficient evidence of good understanding of any of the three areas.' }
                ],
                indicative: {
                  'Area 1 — What Big Data is': 'Overarching description: data that can\'t be processed or analysed using traditional processes or tools. Characteristics: (1) VARIETY — many different forms of information / data may lack structure / cannot be represented in a table or relational database (e.g. emails, videos, images, web contents, facial recognition); (2) VOLUME — a lot / high volume of data, hundreds of terabytes, will not fit on one server (e.g. medical datasets, gene sequencing, predicting disease outbreaks, results of large-scale experiments); (3) VELOCITY — generated/received/processed at high velocity, thousands of items per second, must be processed as received (e.g. card payment fraud detection, recommendation systems). Good understanding = all three characteristics covered or two characteristics + overarching description, with examples or expansions.',
                  'Area 2 — Challenges & how overcome': 'Challenges: data cannot be stored on one server/computer; not possible to process quickly enough with one computer; data cannot be represented in a table / relational DB; unstructured data is hard to analyse. How overcome: distributed database / file systems; blocks of files distributed across multiple servers; functional programming; (massively) parallelising execution; MapReduce / function-to-data model; functional programming makes distributable code easier to write and easier to write correctly; commodity servers in thousands; servers with multiple CPUs/cores/drives; machine learning to find patterns; XML/JSON for semi-structured data; fact-based model can manage bigger data sets than relational. Good understanding = a range of challenges and how to overcome them discussed.',
                  'Area 3 — Ethical and legal issues': 'How can data be kept securely? Who should have access to what data? Will people know what data is being stored about them? Where will data be stored (concerns about other countries)? What rights do people have about data stored on them? Example laws (allow two examples): Computer Misuse Act, GDPR / Data Protection Act, RIPA / Regulation of Investigatory Powers Act. Who owns data about individuals? Good understanding = a range of issues described.'
                },
                guidance: '12 marks total. Best-fit by overall quality across the three areas. Indicative content is a guide — credit other valid points. 0 marks for nothing creditworthy.' },
              '10.1': { type: 'exact',
                points: [
                  'A negative value that is valid → A',
                  'The largest positive value → D',
                  'A value that is not valid because it is not normalised → C'
                ],
                guidance: '3 marks: 1 mark per correct letter on a row. If a letter is used more than once then a mark is only awarded (if merited) the first time the letter is used.' },
              '10.2': { type: 'exact',
                points: ['52'],
                guidance: '2 marks for correct answer 52. If answer is incorrect then award 1 method mark for either: showing correct mantissa = 0.8125 / 13/16 AND/OR exponent = 6 in decimal; showing binary point shifted 6 places to the right; or using answer = mantissa × 2^exponent with the correct mantissa or exponent.' },
              '10.3': { type: 'exact',
                points: ['0.3', '105 − 104.7', '|104.7 − 105|'],
                guidance: '1 mark for 0.3. A. BOD mark if correct method 105 − 104.7 shown but candidate made arithmetic error. R. −0.3 unless the BOD applies.' },
              '10.4': { type: 'exact',
                points: ['0.29%', '0.0029', '0.3 ÷ 104.7'],
                guidance: '1 mark for 0.29(%). A. 0.0029. A. follow-through of incorrect answer to Q10.3. A. BOD mark if correct method shown but candidate made division error.' },
              '10.5': { type: 'points',
                points: [
                  'The effect / impact of an error depends on its size relative to the number that is / should be represented',
                  'A particular (absolute) error is more significant the smaller the number that is / should be represented',
                  'A particular (absolute) error is less significant the bigger the number that is / should be represented'
                ],
                guidance: '1 mark. NE. "relative error shows the significance/importance of error".' },
              '11.1': { type: 'points',
                points: [
                  'Router 1 port A: 192.168.x.y where x is in range 192–207 and y is in range 0–255 (R. 192.168.192.0 and 192.168.207.255 as broadcast/network addresses)',
                  'Router 1 port B: 192.168.x.y where x is in range 64–79 and y is in range 0–255 (R. 192.168.64.0 and 192.168.79.255)',
                  'Computer C: 192.168.x.y where x is in range 64–79 and y is in range 0–255 (R. 192.168.64.0, 192.168.79.255, and same response as port B)'
                ],
                guidance: '3 marks: 1 mark per valid IP address.' },
              '11.2': { type: 'exact',
                points: ['C', '255.255.240.0'],
                guidance: '1 mark for C. R. more than one lozenge shaded.' },
              '11.3': { type: 'points',
                points: [
                  'There are not enough (unique) addresses in IPv4 / IPv4 addresses are running out / to provide more addresses',
                  'Eliminate need for NAT / network address translation / facilitates true end-to-end connectivity',
                  'Simplified / more efficient routing is possible',
                  'Improved facilities for multicasting',
                  'Automatic configuration possible without DHCP',
                  'Allows bigger packet sizes',
                  'Devices can move / roam between locations and keep the same IP address',
                  'Improved support for prioritising traffic by type'
                ],
                guidance: 'Max 1.' },
              '11.4': { type: 'exact',
                points: ['Star', 'physical star', 'star topology', 'star network'],
                guidance: '1 mark for Star.' },
              '11.5': { type: 'levels',
                levels: [
                  { range: [5, 6], descriptor: 'Level 3',
                    criteria: 'A detailed, coherent description of CSMA/CA that includes the use of RTS/CTS and conveys good understanding of how the protocol works. Some omissions allowed but no misunderstandings.' },
                  { range: [3, 4], descriptor: 'Level 2',
                    criteria: 'An adequate description of CSMA/CA, including at least three points from the indicative list. The description is logically organised. May or may not include RTS/CTS — if RTS/CTS is omitted entirely, marks are capped at Level 2.' },
                  { range: [1, 2], descriptor: 'Level 1',
                    criteria: 'A small number of points relevant to CSMA/CA have been recalled (1 mark per point, up to 2). Structure (or lack of it) demonstrates only a very limited understanding, if any, of the protocol.' }
                ],
                indicative: {
                  'CSMA/CA with RTS/CTS': 'Computer with data to send monitors / listens for (data signal). If (data) signal present / another transmission in progress then continue to wait. When no signal present, computer sends a Request to Send / RTS (A. "starts to transmit" if no RTS/CTS points made, but capped at Level 2). Two computers could start transmitting simultaneously if both detect no signal. Receiver / WAP responds with a Clear to Send / CTS signal (A. router). RTS/CTS signal blocks any other transmissions from nodes in range (for a specified time). If/when CTS received, start to transmit. If CTS not received, continue to wait. Receiver sends ACK after data received. After transmitting, the transmitter waits to receive ACK packet (to confirm data received and not corrupted). If no ACK within reasonable time period: wait a (random) time period, then listen again / retransmit. The ACK also notifies other computers they can transmit again / after the time specified in CTS passes other nodes can transmit. Waiting periods are (often) random. Collisions cannot be detected by transmitter.'
                },
                guidance: '6 marks. To reach Level 3, response must include RTS/CTS. Cap at Level 2 if RTS/CTS not mentioned.' },
              '12': { type: 'points',
                points: [
                  'Music represented as sequence of MIDI (event) messages (A. instructions; A. "events"; R. "sequence of notes")',
                  'Example data in a message: Channel; Note on/off; Pitch/frequency/note number; Volume/loudness; Velocity; Key pressure/aftertouch; Duration/length; Timbre; Instrument; Pedal effects; Pitch bend; Note envelope',
                  'MIDI messages are usually two or three bytes long',
                  'First byte of each MIDI message is a status byte (others are data bytes)',
                  'Bit rate is 31 250 bits per second',
                  'MSB value of 1 indicates status byte, 0 indicates data byte',
                  'Status bytes are divided into a command and a channel number (4 bits each)',
                  'Sixteen channels are supported'
                ],
                guidance: 'Max 2. Max 1 mark from the "example data in a message" list.' },
              '13.1': { type: 'points',
                points: [
                  'Application Software: Performs user-oriented tasks / performs tasks a user would still want to perform if they did not have a computer (NE. examples of tasks)',
                  'System Software: Software used in the management of a computer system (A. software used to run a computer)',
                  'System Software: Layer(s) of software that abstract the user from how the computer works (A. software that hides complexity of hardware; A. software that provides a virtual machine)'
                ],
                guidance: '2 marks: 1 mark for application software + 1 mark for system software.' },
              '13.2': { type: 'points',
                points: [
                  'Description (1 mark): (Software that) performs a non-core / ancillary / specific management function for a computer (A. software that performs a task that helps manage / configure / maintain a computer; A. software that manages a computer system but is not essential; NE. "software that manages a computer")',
                  'Example (1 mark): Virus checker / disk defragmenter / backup / compression / encryption software (etc.)'
                ],
                guidance: '2 marks. R. examples that relate to core functions of the OS. R. examples that are application software, or if the response includes multiple examples one of which is application software.' },
              '14.1': { type: 'exact',
                points: ['B', 'The computer can only be used with one program'],
                guidance: '1 mark for B. R. more than one lozenge shaded.' },
              '14.2': { type: 'points',
                points: [
                  'To marshal / control operation of the fetch-execute cycle',
                  'Controls fetching / loading / storing operations (NE. "fetches instructions")',
                  'Determines the type of an instruction (A. "decodes instructions")',
                  'To execute (some) instructions',
                  'To synchronise operation of the processor',
                  'To send control signals / commands to other components',
                  'To control the transfer of data between registers',
                  'To handle interrupts'
                ],
                guidance: 'Max 3.' },
              '14.3': { type: 'points',
                points: [
                  'AO1 knowledge — what cache memory is: Memory that can be accessed very quickly (*)',
                  'AO1 knowledge — what cache memory is: Memory located on (A. close to) the processor',
                  'AO1 knowledge — what cache memory is used for: To store most frequently used / most recently used / pre-fetched instructions or data / to store instructions in the locality of the instruction currently being executed',
                  'AO1 understanding — how more cache improves performance: More instructions / data can be stored in the cache',
                  'AO1 understanding: Instructions/data stored in cache can be accessed more quickly than instructions/data in main memory / if an instruction is accessed a second time it can be retrieved more quickly (#)',
                  'AO1 understanding: This increases the probability that a particular data item/instruction is in the cache when fetched / increases the probability of a cache hit / fewer fetches from main memory will be required'
                ],
                guidance: '4 marks total: max 1 for "what cache memory is" + 1 for "what cache memory is used for" + max 2 for "how more cache improves performance". Only award the point marked # if the point marked * has not already been awarded (avoids double-credit for "can be accessed quickly").' }
            }
          },
          {
            id: 'cs-aqa-7517-2020-p1',
            year: 'Autumn 2020',
            paperName: 'Paper 1 — Programming (on-screen)',
            paperCode: '7517/1',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75171-QP-NOV20.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75171-W-MS-NOV20.PDF',
            qbqNote: "Section D code parts (Q10.1, Q11.1, Q12.1, Q13.1 — 33 marks total) are now wired up with study-prep Python reconstructions of the relevant Simulation/Settlement/Outlet/Company classes. The 4 screen-capture sub-parts (Q10.2/11.2/12.2/13.2 = 5 marks) stay print-only. AQA's real Skeleton Program is centre-only — these reconstructions are for practice.",
            questions: [
              // ── SECTION A — vectors / regular langs / complexity / queues (35 marks)
              {
                number: 1,
                scenario: "Figure 1 shows two vectors a and b and the angle between them, θ.\n\n    a = [4, 3]\n    b = [4, 0]\n\nThe magnitude of a vector represented as an arrow is the length of the arrow. The magnitude of vector a is 5 because √(4² + 3²) = 5.\n\nNote: the angle between two vectors cannot be larger than 180°. If the angle is measured as being greater than 180° then this angle is subtracted from 360° to find the actual angle.",
                parts: [
                  { code: '01.1', prompt: "What is the magnitude of vector b?", marks: 1 },
                  { code: '01.2', prompt: "Calculate the dot product of vectors a and b. You should show your working.", marks: 2 },
                  { code: '01.3', prompt: "Describe what will happen to the angle θ and the magnitude of vector a when vector a is multiplied by the scalar 2.", marks: 2 },
                  { code: '01.4', prompt: "Describe what will happen to the angle θ and the magnitude of vector a when vector a is multiplied by the scalar −1.", marks: 2 }
                ]
              },
              {
                number: 2,
                scenario: "A regular language is a language that can be defined by a regular expression.\n\nFigure 2 shows a set of Backus-Naur Form (BNF) rules that are used to define a language:\n\n    <sentence> ::= <np><v>\n    <sentence> ::= <v><np>\n    <np>       ::= <d><n>\n    <n>        ::= human | dog | cat | baby\n    <d>        ::= a | the\n    <v>        ::= ate | slept | drank | cuddle\n    <c>        ::= and | but | or",
                parts: [
                  { code: '02.1',
                    figure: { type: 'table', label: 'Table 1 — Statement: True or False?',
                      headers: ['Statement', 'True or False?'],
                      rows: [
                        ['All regular languages can be represented using a finite state machine without outputs.', ''],
                        ['The set of strings defined by a regular language is always finite in size.', ''],
                        ['There are some languages which can be represented in Backus-Naur Form (BNF) that are not regular languages.', '']
                      ] },
                    prompt: "Complete the unshaded cells of Table 1 to show which of the statements about regular languages are true and which are false.", marks: 2 },
                  { code: '02.2',
                    preamble: "There are two rules in Figure 2 with <sentence> on the left-hand side that are used to define what a valid sentence is in the language.",
                    prompt: "Write a single rule that could replace these two rules. Your new rule must not change what a valid sentence is.", marks: 1 },
                  { code: '02.3',
                    figure: { type: 'table', label: 'Table 2 — Valid sentence?',
                      headers: ['String', 'Valid sentence (Y/N)?'],
                      rows: [['cuddle the cat', ''], ['drank a human', ''], ['the cat slept', ''], ['cat or dog', '']] },
                    prompt: "Complete the unshaded cells of Table 2 to show which of the strings are valid sentences for the language defined by the BNF rules in Figure 2.", marks: 1 },
                  { code: '02.4',
                    preamble: "The sentence \"dog slept\" is not currently valid in the language defined in Figure 2.",
                    prompt: "Change the language defined in Figure 2 by either adding or modifying exactly one rule so that \"dog slept\" is a valid sentence.\n\nYou must not use the terminals dog or slept directly in the rule you write/change.", marks: 1 },
                  { code: '02.5',
                    preamble: "The sentence \"the cat slept but the dog drank\" is not currently valid in the language. To allow this to be a valid sentence either of the following two BNF rules could be used:\n\n    <sentence> ::= <np><v><c><np><v>\n    <sentence> ::= <sentence><c><sentence>",
                    prompt: "State the number of different sentences defined by the rule:\n\n    <sentence> ::= <np><v><c><np><v>\n\nYou should only use the rules in Figure 2 (not your answer to Q02.4). You can get full marks for stating either the number of valid sentences or the full calculation needed to work it out.\n\nYou should show your working.", marks: 2 },
                  { code: '02.6', prompt: "State how many more sentences are defined by the rule:\n\n    <sentence> ::= <sentence><c><sentence>\n\nthan by the rule:\n\n    <sentence> ::= <np><v><c><np><v>", marks: 1 }
                ]
              },
              {
                number: 3,
                scenario: "Figure 3 lists some time complexities, where n is the size of the problem input and k denotes a constant:\n\n    O(1), O(n^k), O(k^n), O(n), O(log n), O(n log n)",
                parts: [
                  { code: '03.1',
                    preamble: "There are four athletes taking part in a race. Each athlete is allocated a lane that they run in. There can only be one athlete in each lane and there are four lanes available.",
                    prompt: "How many different permutations are there for allocating athletes to lanes?", marks: 1 },
                  { code: '03.2', prompt: "If there are n athletes taking part in a race and n lanes available, with each athlete being allocated to one lane and each lane only used by one athlete, how many different permutations are there for allocating athletes to lanes?", marks: 1 },
                  { code: '03.3',
                    preamble: "An anagram of a string is another string that contains exactly the same number of each character as in the original string but the characters may not all be in the same positions. The original string is also an anagram of itself.",
                    prompt: "If there are n characters in a string, why will the number of anagrams of the string not always be the same as your answer to Question 03.2?", marks: 1 },
                  { code: '03.4',
                    preamble: "The travelling salesperson problem (TSP) is when a salesperson has to visit every city in a set of cities and needs to find the shortest route that does this without visiting any city more than once before finally returning to the city that they started from. The TSP is an example of an intractable problem.",
                    prompt: "Explain what is meant by an intractable problem.", marks: 2 },
                  { code: '03.5', prompt: "Assuming that the time complexities in Figure 3 are for the most time efficient algorithm that solves a problem, how many of the time complexities in Figure 3 are for intractable problems?", marks: 1 },
                  { code: '03.6', prompt: "State which of the time complexities shown in Figure 3 is the time complexity of the linear search algorithm and explain why it has that time complexity.", marks: 2 },
                  { code: '03.7', prompt: "State which of the time complexities shown in Figure 3 is the time complexity of the binary search algorithm and explain why it has that time complexity.", marks: 2 }
                ]
              },
              {
                number: 4,
                scenario: "Priority queues and linear queues are examples of data structures.",
                parts: [
                  { code: '04.1',
                    preamble: "A data structure can be implemented as a dynamic data structure or as a static data structure.",
                    prompt: "Discuss the advantages and disadvantages of dynamic data structures compared to static data structures.", marks: 4 },
                  { code: '04.2', prompt: "Describe the steps involved in adding an item to a linear queue that has been implemented as a static data structure using an array. Your answer should include a description of how any pointers are used and changed.", marks: 3 },
                  { code: '04.3',
                    preamble: "For a priority queue, the process to determine where a new item should be added is more complex than it is with a linear queue.",
                    prompt: "Describe the steps involved when adding an item to a priority queue, implemented as a static data structure using an array, that were not required when adding an item to a linear queue.", marks: 3 }
                ]
              },
              // ── SECTION B — write a program from scratch (12 marks)
              {
                number: 5,
                parts: [
                  { code: '05.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Most-frequent-digit / multimodal — AQA 7517/1 Autumn 2020 Q05.1\n# Ask how many digits, then read that many digits.\n# Print the frequency of the most frequent digit,\n# OR \"Data was multimodal\" if more than one digit ties.\n\ncount = int(input(\"How many digits? \"))\n# TODO: build your solution here.\nprint(0)\n"
                    },
                    testInputs: ["6", "0", "1", "2", "1", "2", "1"],
                    preamble: "Section B. Write a program from scratch. Use the in-browser code editor below — it runs Python directly in your browser. (Other languages: write here for the AI marker to grade against the AO3 design + programming rubric; running them in-browser isn't supported.)\n\nWrite a program that asks the user how many numeric digits they would like to enter and then gets the user to enter that number of numeric digits.\n\nThe program should calculate and display the number of times the most frequently entered numeric digit was input.\n\nExample: if the user says they are going to enter four digits and then enters 3, 4, 5 and 3, the program should display 2 (digit 3 was entered twice).\n\nIf more than one numeric digit has the same maximum frequency (multimodal), instead of displaying the frequency, a message saying \"Data was multimodal\" should be displayed.\n\nA numeric digit is 0, 1, 2, 3, 4, 5, 6, 7, 8 or 9.\n\nYou may assume both the count and the digits entered are valid.",
                    prompt: "Write your PROGRAM SOURCE CODE in the editor below, then click Run to test.\n\nTest cases:\n  • count = 6, digits 0,1,2,1,2,1 → output 3\n  • count = 5, digits 0,1,2,2,1 → output \"Data was multimodal\"\n\nSave & Next when ready — your code will be marked against the official AO3-design + AO3-programming mark scheme.", marks: 12 }
                ]
              },
              // ── SECTION C — Skeleton Program comprehension (15 marks)
              {
                number: 6,
                scenario: "Section C — these questions refer to the Preliminary Material and the Skeleton Program (a Simulation with Settlements, Companies, Outlets, and Households). Open the QP PDF alongside for the figures.",
                parts: [
                  { code: '06.1', prompt: "This question is about the method GetIndexOfCompany in the Simulation class.\n\nWhat does a return value of −1 indicate?", marks: 1 },
                  { code: '06.2', prompt: "Some of the program code in this method is unnecessary. Identify which code is not necessary and explain why.", marks: 2 }
                ]
              },
              {
                number: 7,
                scenario: "This question is about the Outlet class.",
                parts: [
                  { code: '07.1', prompt: "State the name of a method in the Outlet class that uses string concatenation.", marks: 1 },
                  { code: '07.2', prompt: "State the name of a local variable in a method in the Outlet class.", marks: 1 },
                  { code: '07.3', prompt: "The Outlet class contains some protected attributes. Explain the difference between protected and private attributes.", marks: 1 },
                  { code: '07.4', prompt: "In the Outlet class the constant value 100 has been used when calculating the initial value of DailyCosts in the constructor method.\n\nExplain what problem will occur if this value in the constructor is changed and no other changes are made.", marks: 1 }
                ]
              },
              {
                number: 8,
                scenario: "Figure 4 shows a partially completed class diagram describing relationships between some Skeleton Program classes. Boxes ③, ④ and ⑤ are unlabelled.",
                parts: [
                  { code: '08.1', prompt: "State the identifier of the class that has been labelled ③ in Figure 4.", marks: 1 },
                  { code: '08.2', prompt: "State the identifier of the class that has been labelled ④ in Figure 4.", marks: 1 },
                  { code: '08.3', prompt: "State the identifier of the class that has been labelled ⑤ in Figure 4.", marks: 1 },
                  { code: '08.4', prompt: "Aggregation, composition and inheritance are three different types of relationship that can exist between classes.\n\nWhich of these three types of relationship is NOT shown in Figure 4?", marks: 1 }
                ]
              },
              {
                number: 9,
                parts: [
                  { code: '09', prompt: "This question is about the ProcessDayEnd method in the Simulation class.\n\nExplain how the program decides which company an individual household has decided to use when eating out.", marks: 4 }
                ]
              },
              // ── SECTION D — Skeleton Program modifications (33 marks)
              {
                number: 10,
                scenario: "Section D — these questions modify subroutines inside the Simulation/Settlement/Company/Household skeleton. The skeleton below is a study-prep reconstruction in Python that mirrors the relevant piece + just enough context to test your modification. AQA's official Skeleton Program is centre-only.",
                parts: [
                  { code: '10.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Simulation Skeleton — AQA CS 7517/1 Autumn 2020, Q10.1\n# ────────────────────────────────────────────────────────────────────\n# Q10 task: Modify the AddCompany method so:\n#   • If the user presses Enter without typing a name → show an error\n#     and ask again.\n#   • If the user types a name that's already used → show an error and\n#     ask again.\n#   Keep asking until a valid (non-empty, unused) name is entered.\n#\n# Tip: GetIndexOfCompany(name) returns -1 if the name isn't taken,\n# otherwise it returns the index of the existing company.\n\nclass Simulation:\n    def __init__(self):\n        self.Companies = ['AQA Burgers', 'In Jest']    # already-used names\n\n    def GetIndexOfCompany(self, name):\n        try:\n            return self.Companies.index(name)\n        except ValueError:\n            return -1\n\n    def AddCompany(self):\n        # ── ORIGINAL VERSION — modify this ──\n        # Currently accepts whatever the user types, including empty\n        # strings and already-used names. Wrap in a loop that re-prompts\n        # on invalid input with an appropriate error message.\n        CompanyName = input(\"Enter a name for the company: \")\n        self.Companies.append(CompanyName)\n        print(f\"Added company: {CompanyName!r}\")\n        return CompanyName\n\n\n# ── Test driver (do not modify) ──\n# The QP test enters: '' (empty), 'AQA Burgers' (duplicate), 'In Jest'\n# (also duplicate — wait, actually the QP test is enter / press enter\n# without typing / type AQA Burgers / type In Jest). Adapted here to\n# exercise both error paths and then a valid name.\nsim = Simulation()\nname = sim.AddCompany()\nprint(f\"\\nFinal company added: {name!r}\")\nprint(f\"All companies now: {sim.Companies}\")\n"
                    },
                    testInputs: ["", "AQA Burgers", "MyBrandNewCo"],
                    prompt: "Add validation to AddCompany: keep asking until a non-empty, not-already-used name is entered.\n\nClick ▶ Run with test inputs '' (empty), 'AQA Burgers' (duplicate), 'MyBrandNewCo' (valid). A correct modification:\n  • shows an error after the empty input, asks again\n  • shows a different error after 'AQA Burgers', asks again\n  • accepts 'MyBrandNewCo' and returns it\n\n(Question 10.2 — screen-capture evidence — is print-only.)", marks: 5 }
                ]
              },
              {
                number: 11,
                parts: [
                  { code: '11.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Simulation Skeleton — AQA CS 7517/1 Autumn 2020, Q11.1\n# ────────────────────────────────────────────────────────────────────\n# Q11 task: Add a new type of household, AffluentHousehold, that eats\n# out more often than other households.\n#   1. Create class AffluentHousehold that inherits from Household.\n#      Its constructor should call the Household base constructor and\n#      then set ChanceEatOutPerDay to 1.\n#   2. Modify AddHousehold in Settlement so that it creates an\n#      AffluentHousehold instead of a Household when the random X is\n#      less than 100.\n\nclass Household:\n    def __init__(self, X, Y):\n        self.X = X\n        self.Y = Y\n        self.ChanceEatOutPerDay = 0.05\n\n\n# ── TODO Q11.1 Task 1: Create AffluentHousehold subclass below ──\n# class AffluentHousehold(Household):\n#     def __init__(self, X, Y):\n#         ...\n\n\nclass Settlement:\n    def __init__(self):\n        self.Households = []\n\n    def AddHousehold(self):\n        # The skeleton's GetRandomLocation returns an (X, Y) pair. For\n        # the test we use deterministic values to exercise both branches.\n        # ── TODO Q11.1 Task 2: create AffluentHousehold when X < 100 ──\n        for X, Y in [(50, 200), (300, 400), (90, 150), (250, 350)]:\n            # ORIGINAL — always creates a base Household.\n            h = Household(X, Y)\n            self.Households.append(h)\n        return self.Households\n\n\n# ── Test driver (do not modify) ──\nsim = Settlement()\nhouseholds = sim.AddHousehold()\nfor i, h in enumerate(households):\n    cls = type(h).__name__\n    print(f\"Household {i}: X={h.X}, Y={h.Y}, ChanceEatOutPerDay={h.ChanceEatOutPerDay}, class={cls}\")\n\nprint()\nprint(\"Expected:\")\nprint(\"  Household 0: X=50  -> AffluentHousehold (ChanceEatOutPerDay = 1)\")\nprint(\"  Household 1: X=300 -> Household           (ChanceEatOutPerDay = 0.05)\")\nprint(\"  Household 2: X=90  -> AffluentHousehold (ChanceEatOutPerDay = 1)\")\nprint(\"  Household 3: X=250 -> Household           (ChanceEatOutPerDay = 0.05)\")\n"
                    },
                    testInputs: [],
                    prompt: "Create the AffluentHousehold subclass and modify AddHousehold so households with X<100 are AffluentHousehold (ChanceEatOutPerDay=1), others are plain Household.\n\nClick ▶ Run. A correct implementation prints:\n  Household 0: ... AffluentHousehold (ChanceEatOutPerDay = 1)\n  Household 1: ... Household (0.05)\n  Household 2: ... AffluentHousehold (1)\n  Household 3: ... Household (0.05)\n\n(Question 11.2 — screen-capture evidence — is print-only.)", marks: 7 }
                ]
              },
              {
                number: 12,
                parts: [
                  { code: '12.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Simulation Skeleton — AQA CS 7517/1 Autumn 2020, Q12.1\n# ────────────────────────────────────────────────────────────────────\n# Q12 task: Add company loans.\n#   1. Add LoanBalance and InterestRate attributes to Company.\n#   2. A company can take out a loan only if LoanBalance is 0. Taking\n#      a loan: Balance += 10000, LoanBalance += 10000, InterestRate set\n#      to user-specified value.\n#   3. Paying back: Balance -= amount, LoanBalance -= amount.\n#   4. ProcessDayEnd: subtract InterestRate × LoanBalance from Balance.\n#   5. Use encapsulation: LoanBalance and InterestRate should only be\n#      accessed/modified by methods on Company (no direct attribute\n#      access from outside the class).\n\nclass Company:\n    def __init__(self, name, starting_balance):\n        self._Name = name\n        self._Balance = starting_balance\n        # ── TODO Q12.1 Task 1: add _LoanBalance and _InterestRate attributes ──\n\n    def GetName(self):\n        return self._Name\n\n    def GetBalance(self):\n        return self._Balance\n\n    # ── TODO Q12.1 Tasks 3 & 4: add GetLoan, PayBackLoan, and update\n    #    ProcessDayEnd to subtract daily interest. Suggested signatures:\n    #      def GetLoan(self, interest_rate): ...\n    #      def PayBackLoan(self, amount): ...\n    #      def ProcessDayEnd(self): ...  (also reduces _Balance by daily\n    #                                     interest = _InterestRate * _LoanBalance)\n\n    def ProcessDayEnd(self):\n        # ── ORIGINAL — no interest deduction. Modify per task. ──\n        pass\n\n\n# ── Test driver (do not modify) ──\nco = Company('AQA Burgers', 100000)\nprint(f\"Starting balance: {co.GetBalance()}\")\n\n# Take a 10,000 loan at 0.015% daily interest (0.00015 as a decimal)\ntry:\n    co.GetLoan(0.00015)\n    print(f\"After loan: Balance={co.GetBalance()}  (expected 110000)\")\nexcept AttributeError:\n    print(\"GetLoan method not yet defined.\")\n\n# Advance one day — daily interest should reduce balance by 0.00015 * 10000 = 1.5\ntry:\n    co.ProcessDayEnd()\n    print(f\"After 1 day:  Balance={co.GetBalance()}  (expected 109998.5)\")\nexcept Exception as e:\n    print(f\"ProcessDayEnd failed: {e}\")\n\n# Pay back 500 of the loan\ntry:\n    co.PayBackLoan(500)\n    print(f\"After paying back 500: Balance={co.GetBalance()}  (expected 109498.5)\")\nexcept AttributeError:\n    print(\"PayBackLoan method not yet defined.\")\n\n# Advance another day — interest on the remaining 9500 = 0.00015 * 9500 = 1.425\ntry:\n    co.ProcessDayEnd()\n    print(f\"After day 2:  Balance={co.GetBalance()}  (expected 109497.075)\")\nexcept Exception:\n    pass\n"
                    },
                    testInputs: [],
                    prompt: "Add LoanBalance + InterestRate attributes (encapsulated) to Company; add GetLoan, PayBackLoan, and daily-interest deduction in ProcessDayEnd.\n\nClick ▶ Run. A correct implementation prints:\n  Starting balance: 100000\n  After loan: Balance=110000\n  After 1 day:  Balance=109998.5\n  After paying back 500: Balance=109498.5\n  After day 2:  Balance=109497.075\n\n(Question 12.2 — screen-capture evidence — is print-only.)", marks: 10 }
                ]
              },
              {
                number: 13,
                parts: [
                  { code: '13.1', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# Reconstructed Simulation Skeleton — AQA CS 7517/1 Autumn 2020, Q13.1\n# ────────────────────────────────────────────────────────────────────\n# Q13 task: Create a NEAREST-NEIGHBOUR delivery route.\n#   • Add a new method GetOrderedListOfOutlets to Company that builds\n#     a list/array of outlets ordered by nearest-neighbour starting\n#     from outlet 0.\n#   • Modify CalculateDeliveryCost so it uses GetOrderedListOfOutlets\n#     instead of GetListOfOutlets.\n#\n# Algorithm:\n#   1. Start with outlet 0 in the route.\n#   2. Find the not-yet-visited outlet that's closest to the last\n#      outlet in the route, add it.\n#   3. Repeat until all outlets are in the route.\n\nimport math\n\n\nclass Outlet:\n    def __init__(self, name, x, y):\n        self.Name = name\n        self.X = x\n        self.Y = y\n\n\nclass Company:\n    def __init__(self):\n        # 5 outlets in a grid. Optimal NN route from 0:\n        # 0 → 1 → 4 → 2 → 3 (and back to 0 for cost calc).\n        self.Outlets = [\n            Outlet('Outlet 0', 0,  0),\n            Outlet('Outlet 1', 1,  0),\n            Outlet('Outlet 2', 5,  5),\n            Outlet('Outlet 3', 0, 10),\n            Outlet('Outlet 4', 2,  2),\n        ]\n\n    def GetListOfOutlets(self):\n        # Original — just returns outlets in creation order.\n        return list(self.Outlets)\n\n    # ── TODO Q13.1 Task 1: implement GetOrderedListOfOutlets ──\n\n    def CalculateDeliveryCost(self):\n        # ── ORIGINAL — uses GetListOfOutlets. Modify to use\n        # ── GetOrderedListOfOutlets instead. ──\n        route = self.GetListOfOutlets()\n        total = 0.0\n        for i in range(len(route)):\n            a = route[i]\n            b = route[(i + 1) % len(route)]\n            total += math.sqrt((a.X - b.X) ** 2 + (a.Y - b.Y) ** 2)\n        return total\n\n\n# ── Test driver (do not modify) ──\nco = Company()\ntry:\n    ordered = co.GetOrderedListOfOutlets()\n    print(\"Ordered route:\")\n    for o in ordered:\n        print(f\"  {o.Name} ({o.X}, {o.Y})\")\n    print()\nexcept AttributeError:\n    print(\"GetOrderedListOfOutlets not yet defined.\")\n\ncost = co.CalculateDeliveryCost()\nprint(f\"Delivery cost: {cost:.4f}\")\nprint(\"Expected NN route from outlet 0: 0 -> 1 -> 4 -> 2 -> 3 -> (back to 0)\")\nprint(\"Expected cost: ~ 1.0 + 2.236 + 4.243 + 7.071 + 10.0 = 24.55\")\n"
                    },
                    testInputs: [],
                    prompt: "Add GetOrderedListOfOutlets (nearest-neighbour from outlet 0) and modify CalculateDeliveryCost to use it.\n\nClick ▶ Run. A correct implementation prints the NN order (0, 1, 4, 2, 3) and total cost ~24.55.\n\n(Question 13.2 — screen-capture evidence — is print-only.)", marks: 11 }
                ]
              }
            ],
            markSchemes: {
              '01.1': { type: 'exact',
                points: ['4', '√(4² + 0²)'],
                guidance: '1 mark for 4 (magnitude of b = [4, 0]).' },
              '01.2': { type: 'exact',
                points: ['16', '4 × 4 + 3 × 0'],
                guidance: '2 marks for 16. If incorrect, max 1 method mark for: (a) multiplying 4 by 4 OR multiplying 3 by 0; (b) adding the sum of two (incorrect) products.' },
              '01.3': { type: 'points',
                points: [
                  'The angle will still be the same (A. "the direction will not change")',
                  'The magnitude will be doubled / will now be 10'
                ],
                guidance: '2 marks: 1 per fact.' },
              '01.4': { type: 'points',
                points: [
                  'The angle will be 180° − θ / 360° − 180° − θ / 143.13° (A. "the direction of a will be the opposite of its current direction")',
                  'The magnitude will still be the same'
                ],
                guidance: '2 marks: 1 per fact.' },
              '02.1': { type: 'exact',
                points: [
                  'All regular languages can be represented using a FSM without outputs: True',
                  'The set of strings defined by a regular language is always finite in size: False',
                  'There are some languages which can be represented in BNF that are not regular languages: True'
                ],
                guidance: '2 marks: 1 mark for two rows correct, 1 more mark for all three rows correct.' },
              '02.2': { type: 'exact',
                points: ['<sentence> ::= <np><v> | <v><np>', '<sentence> ::= <v><np> | <np><v>'],
                guidance: '1 mark. R. any answers that consist of more than one rule.' },
              '02.3': { type: 'exact',
                points: [
                  'cuddle the cat: Y',
                  'drank a human: Y',
                  'the cat slept: Y',
                  'cat or dog: N'
                ],
                guidance: '1 mark for all four rows correct.' },
              '02.4': { type: 'exact',
                points: [
                  'Modify <np> ::= <d><n> | <n>',
                  'Modify <sentence> ::= <np><v> | <n><v>',
                  'Modify <sentence> ::= <v><np> | <n><v>',
                  'Modify <sentence> ::= <np><v> | <v><np> | <n><v>',
                  'Create new rule: <sentence> ::= <n><v>',
                  'Create new rule: <np> ::= <n>'
                ],
                guidance: '1 mark for any of the modifications.' },
              '02.5': { type: 'exact',
                points: ['3072', '8 × 4 × 3 × 8 × 4', '2 × 4 × 4 × 3 × 2 × 4 × 4'],
                guidance: '2 marks for correct answer 3072. If incorrect, max 1 method mark for: calculating 8 noun phrases (or 4×2 noun phrases) — OR — multiplying an incorrectly-calculated number of NPs by NPs, by 3, by 4 and by 4 again.' },
              '02.6': { type: 'exact',
                points: ['Infinitely more'],
                guidance: '1 mark.' },
              '03.1': { type: 'exact',
                points: ['24', '4!', '4 × 3 × 2 × 1', '4 × 3 × 2'],
                guidance: '1 mark for 24.' },
              '03.2': { type: 'exact',
                points: ['n!', 'factorial of n', '1 × 2 × ... × (n−1) × n'],
                guidance: '1 mark.' },
              '03.3': { type: 'points',
                points: [
                  'The string could contain more than one occurrence of a character',
                  'Each athlete is unique, each character is not (guaranteed to be) unique',
                  'There are n characters in the string but not n distinct characters',
                  'Some of the anagrams could be duplicates'
                ],
                guidance: 'Max 1.' },
              '03.4': { type: 'points',
                points: [
                  'A problem that can be solved',
                  'But not in a reasonable amount of time as the problem size increases / has an exponential (or worse) time complexity / there is no polynomial (or less) time solution'
                ],
                guidance: '2 marks: 1 per point.' },
              '03.5': { type: 'exact',
                points: ['One', '1'],
                guidance: '1 mark for "one" (only O(kⁿ) is intractable in the given list).' },
              '03.6': { type: 'points',
                points: [
                  'AO1 knowledge: O(n)',
                  'AO1 understanding: As the size of the list increases the time taken increases at the same rate',
                  'AO1 understanding: There is a loop that repeats n times'
                ],
                guidance: '2 marks: 1 for the complexity + max 1 for the explanation.' },
              '03.7': { type: 'points',
                points: [
                  'AO1 knowledge: O(log n)',
                  'AO1 understanding: Each comparison halves the size of the list that has to be searched through',
                  'AO1 understanding: The time taken increases as the size of the list increases but by smaller and smaller amounts',
                  'AO1 understanding: If the size of the list doubles then the number of comparisons needed only increases by 1'
                ],
                guidance: '2 marks: 1 for the complexity + max 1 for the explanation.' },
              '04.1': { type: 'points',
                points: [
                  'Advantage — No wasted memory',
                  'Advantage — Can grow as more data is added / no limit on items (except hardware)',
                  'Advantage — Resources only allocated as they are needed',
                  'Disadvantage — Additional memory needed for pointers',
                  'Disadvantage — Can result in memory leak (if memory no longer needed is not returned to the heap)',
                  'Disadvantage — Can take longer to access an item directly (A. can take longer to add an item, as memory needs to be allocated)'
                ],
                guidance: 'Max 4: max 2 advantages + max 2 disadvantages.' },
              '04.2': { type: 'points',
                points: [
                  'Check that the queue is not already full',
                  '(If it isn\'t) then add 1 to the value of the rear pointer',
                  'Then add the new item to the position indicated by the rear pointer',
                  'Alternative: (a) Check not full; (b) add the new item at the rear-pointer position; (c) then add 1 to the rear pointer'
                ],
                guidance: '3 marks. Max 2 if any errors. Max 1 if a circular queue has been described.' },
              '04.3': { type: 'points',
                points: [
                  'Starting with the item at the rear of the queue, move each item back one place in the array',
                  'Until you (reach the start of the queue or) find an item with the same or higher priority than the item to add (NE. "same priority"; NE. "higher priority")',
                  'Add the new item in the position before that item'
                ],
                guidance: '3 marks. A. alternative orderings: start at front and move forward until insertion point; or front-then-back hybrid as described in MS.' },
              '05.1': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'A line of reasoning has been followed to arrive at a logically structured working or almost fully working programmed solution that meets most of the requirements. All of the appropriate design decisions have been taken. To award 12 marks, ALL requirements must be met.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'Evidence that a line of reasoning has been followed to produce a logically structured program. The program displays relevant prompts, inputs the required numbers, has at least one iterative structure and one selection structure, and uses suitable data structure(s) to store the entered numbers and frequencies. An attempt has been made to determine the modal frequency.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'A program has been written and some appropriate, syntactically correct programming language statements are present. Some appropriate design work — the response recognises at least one appropriate technique that could be used by a working solution.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A program has been written and a few appropriate programming language statements have been written but there is no evidence that a line of reasoning has been followed to arrive at a working solution.' }
                ],
                indicative: {
                  'AO3 Design (4 marks)': '1) Identify that data structure(s) are needed to store ten frequencies. 2) Identify that a loop is needed that repeats by the first number entered. 3) Identify that a Boolean (or equivalent) variable is needed to indicate multimodality. 4) Selection structure that either outputs a calculated number or a message saying "Data was multimodal" (A. any suitable message).',
                  'AO3 Programming (8 marks)': '5) Suitable prompts for both the count and the digits, with values assigned to appropriate variables (R. if input is inside or after the iterative structure incorrectly). 6) Correct number of numeric digits obtained from the user. 7) Adds one to the correct frequency count (R. if only works for one digit). 8) Selection structure (inside iteration) that compares calculated frequency with the highest frequency found so far. 9) Boolean multimodal-flag set to true under correct circumstances. 10) Boolean multimodal-flag set to false when a new higher frequency is found. 11) Program works correctly if data is multimodal (A. any sensible message). 12) Program displays the correct frequency under all circumstances and does NOT say multimodal when it isn\'t.'
                },
                guidance: '12 marks (4 AO3 design + 8 AO3 programming). Max 11 if any errors. Test cases for Q05.2: [6: 0,1,2,1,2,1] → "3"; [5: 0,1,2,2,1] → "Data was multimodal".' },
              '06.1': { type: 'exact',
                points: ['That the company name being searched for does not exist (in the simulation)'],
                guidance: '1 mark. A. user misspelt the company name.' },
              '06.2': { type: 'points',
                points: [
                  'There is no need for the variable Index / no need to assign the value of −1 to Index',
                  'If the loop terminates then can just return (the constant value) −1 / if the company name is not found then can just return (the constant value) −1'
                ],
                guidance: '2 marks: 1 per point.' },
              '07.1': { type: 'exact',
                points: ['GetDetails'],
                guidance: '1 mark. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '07.2': { type: 'exact',
                points: ['Details', 'OldCapacity'],
                guidance: 'Max 1. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '07.3': { type: 'exact',
                points: ['Private attributes can only be accessed by the class/object they belong to whereas protected attributes can also be accessed by any classes that inherit from the class they belong to'],
                guidance: '1 mark. A. "file" instead of class/object (Java only). NE. "private attribute can only be accessed by the class/object they belong to whereas protected attributes can be accessed by other classes/objects" (too vague).' },
              '07.4': { type: 'exact',
                points: ['The calculation of the daily costs will be inconsistent as it will be different in the AlterCapacity method', "It won't have been updated in other locations which use that constant"],
                guidance: '1 mark.' },
              '08.1': { type: 'exact',
                points: ['LargeSettlement'],
                guidance: '1 mark. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '08.2': { type: 'exact',
                points: ['Household'],
                guidance: '1 mark. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '08.3': { type: 'exact',
                points: ['Company'],
                guidance: '1 mark. R. if spelt incorrectly. R. if any additional code. I. case and spacing.' },
              '08.4': { type: 'exact',
                points: ['Aggregation'],
                guidance: '1 mark.' },
              '09': { type: 'points',
                points: [
                  'It stores the cumulative reputation for the companies in an array/list',
                  'It then generates a random number which is less than the total reputation (A. random number based on the total reputation)',
                  'Finds the first cumulative reputation that the number is less than',
                  'The position of this cumulative reputation in the list indicates the company that the household will use'
                ],
                guidance: '4 marks: 1 per point.' },
              // ── Section D mark schemes (Q10.1–Q13.1 = 33 marks)
              '10.1': { type: 'points',
                points: [
                  'AO3 programming — Indefinite iterative structure contains code that gets the name from the user',
                  'AO3 programming — One correct condition (e.g. name == "", or GetIndexOfCompany(name) != -1)',
                  'AO3 programming — Both correct conditions and correct logic for the iterative structure (loop continues iff name is empty OR already used)',
                  'AO3 programming — Displays an error message if no name is entered // displays an error message if a name that has already been used is entered',
                  'AO3 programming — Displays error message under all correct circumstances and ONLY under correct circumstances (correct error for the matching condition; no error when input is valid)'
                ],
                guidance: '5 marks total. Max 4 if code contains errors.' },
              '11.1': { type: 'points',
                points: [
                  'AO3 programming — Creating a new class called AffluentHousehold (R. other names for class; I. case and minor typos)',
                  'AO3 programming — New class inherits from Household',
                  'AO3 programming — Constructor created that overrides the base-class constructor with a call made to the base constructor (R. if incorrect parameters)',
                  'AO3 programming — Sets ChanceEatOutPerDay to 1 (R. if before the call to the base constructor; R. if not after attempt at call)',
                  'AO3 programming (AddHousehold) — Selection structure with correct condition (X < 100)',
                  'AO3 programming (AddHousehold) — Creates an AffluentHousehold object (R. if it ALSO creates a base Household)',
                  'AO3 programming (AddHousehold) — Creates an AffluentHousehold under the correct circumstances and a Household under the correct circumstances (R. if the new household is not added to Households)'
                ],
                guidance: '7 marks total. Max 6 if code contains errors.' },
              '12.1': { type: 'points',
                points: [
                  'AO3 programming (Simulation) — Two extra options displayed on the modify-company menu using appropriate messages (e.g. "Get a loan" / "Pay back loan")',
                  'AO3 programming (Simulation) — Selection structures for the new menu options with appropriate condition(s)',
                  'AO3 programming — Gets the user to enter the interest rate when getting a loan AND the amount to pay back when paying back, under the appropriate circumstances (A. done in appropriate places in the Company class)',
                  'AO3 programming — Calls to appropriate methods in the Company class from the selection structures (e.g. GetLoan / PayBackLoan)',
                  'AO3 programming (Company) — Attributes of appropriate data types created for LoanBalance and InterestRate',
                  'AO3 programming (Company) — Correct calculation of daily interest payment and new balance in ProcessDayEnd (R. if the balance is changed before previous-balance details are concatenated)',
                  'AO3 programming — Selection structure to check if LoanBalance is 0 when the user chooses to get a loan (A. check for ≤ 0)',
                  'AO3 programming — Balance, LoanBalance and InterestRate set to the correct values in the selection structure (Balance += 10000, LoanBalance += 10000, InterestRate from user)',
                  'AO3 programming — LoanBalance and Balance changed by the correct amount when the user pays back part of the loan (both decreased by the same amount)',
                  'AO3 programming (encapsulation) — All attributes in Company are only accessed and modified by methods IN Company (R. if no attempt to access/modify the loan-related attributes via methods)'
                ],
                guidance: '10 marks total. Max 9 if code contains errors.' },
              '13.1': { type: 'points',
                points: [
                  'AO3 programming — Created a new method called GetOrderedListOfOutlets (R. other names for method; I. case and minor typos)',
                  'AO3 programming — Method returns a list / array',
                  'AO3 programming — Outlet 0 is added to the route first',
                  'AO3 programming — Iterative structure that repeats until ALL outlets have been added to the route',
                  'AO3 programming — Has a variable to store the shortest distance found between two nodes so far AND a variable to store which outlet results in the shortest distance',
                  'AO3 programming — Iterative structure that looks at each outlet for which the distance from the previous outlet in the route needs to be calculated (A. looks at all outlets except the previous one)',
                  'AO3 programming — No outlet can appear more than once in the route created (R. if adds two or fewer outlets to the list only; R. if no attempt to check if outlet has already been added)',
                  'AO3 programming — Route created contains ALL the company\'s outlets',
                  'AO3 programming — Shortest-distance-so-far variable set to a suitable starting value AND reset after each outlet (except the last one) is added',
                  'AO3 programming — GetOrderedListOfOutlets implements the nearest-neighbour algorithm correctly',
                  'AO3 programming — Modified CalculateDeliveryCost so that it calls GetOrderedListOfOutlets instead of GetListOfOutlets (A. alternative identifier used as long as it matches mark point 1)'
                ],
                guidance: '11 marks total. Max 10 if code contains errors or if other parts of the subroutine no longer work correctly.' }
            }
          },
          {
            id: 'cs-aqa-7517-2020-p2',
            year: 'Autumn 2020',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75172-QP-NOV20.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75172-W-MS-NOV20.PDF',
            questions: [
              {
                number: 1,
                scenario: "A sound has been sampled and recorded. The sound was sampled for 1 minute and 40 seconds at a sample rate of 8000 Hz with a 16-bit sample resolution. A sample rate of 1 Hz means that one sample has been taken every second.",
                parts: [
                  { code: '01.1', prompt: "Calculate the minimum amount of storage space, in bytes, needed to store the sampled sound.\n\nYou should show your working.", marks: 2 },
                  { code: '01.2',
                    preamble: "An analogue to digital converter (ADC) was used during the sampling process.",
                    prompt: "Explain the principles of operation of an ADC.", marks: 2 }
                ]
              },
              {
                number: 2,
                scenario: "Questions 02.2, 02.3, 02.4 and 02.5 use a normalised floating point representation with a 7-bit mantissa and a 5-bit exponent, both stored using two's complement.",
                parts: [
                  { code: '02.1',
                    preamble: "Non-integer values such as −1.65 and 23/1068 can be represented by a computer using a fixed point or a floating point system. The two systems use the same number of bits to store a value.",
                    prompt: "State one advantage of using a floating point system over a fixed point system and one advantage of using a fixed point system over a floating point system.", marks: 2 },
                  { code: '02.2',
                    preamble: "The figure shows a floating point representation of a number with mantissa = 1.0011 (binary, signed; value = −0.6875 = −11/16) and exponent = 11101 (= −3). (See the official PDF for the exact bit pattern.)",
                    prompt: "Calculate the decimal equivalent of the number.\n\nExpress your answer to at least four decimal places or as a fraction. You should show your working.", marks: 2 },
                  { code: '02.3', prompt: "Write the normalised floating point representation of the decimal value 1632 in the boxes below.\n\nYou should show your working.", marks: 3 },
                  { code: '02.4', prompt: "State, in decimal, the highest (most positive) and lowest (most negative) values that could be represented by this floating point system.\n\nYou should show your working.", marks: 3 },
                  { code: '02.5',
                    preamble: "When the decimal value 28.25 is converted into binary using this floating point system, a rounding error occurs.",
                    prompt: "Explain:\n  • why a rounding error has occurred, and\n  • what the system might do when the value 28.25 is converted into binary.", marks: 2 }
                ]
              },
              {
                number: 3,
                parts: [
                  { code: '03.1',
                    preamble: "Figure 1 shows how some of the components inside a computer are connected together. The computer uses the von Neumann architecture. Some component names have been replaced with numbers ① to ⑤.",
                    figure: { type: 'table', label: 'Table 1 — assign one number 1–5 per component',
                      headers: ['Component Name', 'Component Number (1–5)'],
                      rows: [
                        ['Address Bus', ''],
                        ['Data Bus', ''],
                        ['Main Memory', ''],
                        ['Processor', ''],
                        ['USB I/O Controller', '']
                      ] },
                    prompt: "Complete Table 1 by writing in the Component Number column the numbers from Figure 1 that correspond to the Component Names.", marks: 2 },
                  { code: '03.2', prompt: "The computer has 4 gibibytes of memory installed. How many kibibytes is this equivalent to?", marks: 1 },
                  { code: '03.3',
                    preamble: "A tablet computer uses the Harvard architecture.",
                    prompt: "Describe two advantages of using the Harvard architecture compared to the von Neumann architecture.", marks: 2 },
                  { code: '03.4',
                    preamble: "The diagram in Figure 2 describes the fetch part of the Fetch-Execute cycle. Some register names have been replaced with numbers ① to ③.",
                    prompt: "State the full names of the registers that should appear in the diagram where the numbers ①, ②, ③ are.", marks: 2 },
                  { code: '03.5',
                    preamble: "Interrupts can be generated by devices connected to the processor during the Fetch-Execute cycle.",
                    prompt: "Describe the role of interrupts.", marks: 2 },
                  { code: '03.6', prompt: "Explain why the volatile environment (the contents of registers) must be saved before an interrupt is serviced.", marks: 2 },
                  { code: '03.7', prompt: "Explain the relationship between hardware and software.", marks: 1 }
                ]
              },
              {
                number: 4,
                scenario: "An estate agency makes details of the properties that it has for sale available to potential customers through a website. The details of the properties and other data are stored in a relational database. Individual web pages about specific properties are generated dynamically from the data. A client-server system using CRUD and REST is used to provide details of properties in a web page being viewed in a web browser.",
                scenarioFigures: [
                  { type: 'code', label: 'Figure 3',
                    content: "Property(PropertyID, HouseNum, Street, Area, Postcode, Bedrooms, Bathrooms, AskingPrice, SellerID)\nSeller(SellerID, Title, Forename, Surname, Telephone)\nBuyer(BuyerID, Title, Forename, Surname, Telephone, DesiredArea, MinBedrooms, MaxPrice)\nViewing(BuyerID, PropertyID, ViewingDate, ViewingTime)\nSale(SaleID, PropertyID, BuyerID, SalePrice)\n\n• Property: properties for sale (bedroom/bathroom counts).\n• Seller: people selling the properties.\n• Buyer: people looking to buy and what they want (desired area, min bedrooms, max price).\n• Viewing: an entry whenever a buyer arranges to look at a property.\n• Sale: an entry whenever a property is sold to a buyer; SalePrice may differ from AskingPrice." }
                ],
                parts: [
                  { code: '04.1',
                    preamble: "The list below contains four statements about the principles of CRUD and REST. One of these statements is false.",
                    prompt: "Shade one lozenge to indicate which statement is false.\n\nA) CRUD is an acronym for Create, Retrieve, Update, Delete.\nB) REST allows JavaScript to communicate with the server using the HTTP protocol.\nC) The database is connected to the web browser using REST.\nD) The REST API will be created and run on the client computer.", marks: 1 },
                  { code: '04.2',
                    preamble: "An SQL query retrieves details about properties with at least four bedrooms in a particular area. Two records are found (PropertyID 8026: 12 Chester Drive, 4 bedrooms; PropertyID 9034: 23a Castle Street, 5 bedrooms). These records can be sent from server to client using XML or JSON. Figure 4 shows the query results encoded using each method:\n\nRepresentation 1:\n{\"Properties\":[\n  { \"PropertyID\": 8026, \"HouseNum\": \"12\", \"Street\": \"Chester Drive\", \"Bedrooms\": 4 },\n  { \"PropertyID\": 9034, \"HouseNum\": \"23a\", \"Street\": \"Castle Street\", \"Bedrooms\": 5 }\n]}\n\nRepresentation 2:\n<Properties>\n  <Property>\n    <PropertyID>8026</PropertyID>\n    <HouseNum>12</HouseNum>\n    <Street>Chester Drive</Street>\n    <Bedrooms>4</Bedrooms>\n  </Property>\n  ...\n</Properties>",
                    prompt: "Shade one lozenge to identify the method of encoding used by Representation 2.\n\nA) JSON\nB) XML", marks: 1 },
                  { code: '04.3', prompt: "State two reasons why it could be argued that JSON is better than XML.", marks: 2 },
                  { code: '04.4',
                    preamble: "A composite primary key has been selected for the Viewing relation. This consists of the attributes BuyerID, PropertyID and ViewingDate.",
                    prompt: "In selecting these attributes to form the primary key, what assumption has the database designer made about the behaviour of the buyers?", marks: 1 },
                  { code: '04.5', prompt: "Write an SQL query that will retrieve from the database the list of all properties that the buyer with BuyerID 23 might be interested in buying. The properties should:\n  • be in the buyer's desired area\n  • have at least the minimum number of bedrooms the buyer requires\n  • cost no more than the maximum price that the buyer is prepared to pay.\n\nThe list of properties returned should only include, for each property:\n  • the PropertyID\n  • the street that the property is on\n  • the number of bedrooms that the property has\n  • the asking price for the property.\n\nThe list should be ordered with the most expensive property at the top and the least expensive at the bottom.", marks: 5 }
                ]
              },
              {
                number: 5,
                scenario: "Figure 5 shows a computer (Computer A) located on a LAN in the UK. It is connected via the Internet to an email server (Computer B) located on a LAN in Belgium. Computer A has IP address 192.168.2.3 and Computer B has the public IP address 141.134.27.8. The UK LAN has Router A3.",
                parts: [
                  { code: '05.1',
                    preamble: "The computers on subnet 192.168.2.0 have been configured using the DHCP system.",
                    prompt: "State one advantage of using the DHCP system.", marks: 1 },
                  { code: '05.2',
                    preamble: "Computer A has the IP address 192.168.2.3. Many other computers connected to the Internet have the same IP address.",
                    prompt: "Explain how two or more computers connected to the Internet can have the same IP address and still communicate with each other.", marks: 2 },
                  { code: '05.3',
                    preamble: "In addition to routing, Router A3 also acts as a firewall to protect the computers on the LAN in the UK.",
                    prompt: "Explain four different ways that a firewall can protect computers on a LAN.", marks: 4 },
                  { code: '05.4', extended: true,
                    preamble: "A packet of data is to be transmitted across the Internet from Computer A in the UK to Computer B in Belgium. A checksum will be used to attempt to detect if any errors have occurred during the transmission.",
                    prompt: "Explain how:\n  • Computer A will use a subnet mask to determine whether or not it can send the packet directly to Computer B across the LAN or if the packet must be sent via the Internet\n  • the packet will be routed across the Internet\n  • the checksum can be used to determine if the received packet has been changed during the transmission.\n\nIn your answer you will be assessed on your ability to follow a line of reasoning to produce a coherent, relevant and structured response.", marks: 12 }
                ]
              },
              {
                number: 6,
                parts: [
                  { code: '06.1',
                    preamble: "Figure 6 shows truth tables for four logic gates, labelled Table A, Table B, Table C and Table D. The inputs/outputs for each are:\n  Table A — 00→1, 01→0, 10→0, 11→0\n  Table B — 00→0, 01→1, 10→1, 11→0\n  Table C — 00→1, 01→0, 10→0, 11→1\n  Table D — 00→0, 01→1, 10→1, 11→1",
                    prompt: "Shade in one lozenge to indicate which truth table does NOT represent one of the logic gates: OR, XOR, NOR.\n\nA) Table A\nB) Table B\nC) Table C\nD) Table D", marks: 1 },
                  { code: '06.2',
                    preamble: "Figure 7 shows part of a logic circuit designed to take a binary representation of a single decimal digit (X3 X2 X1 X0) as input and light up the segments of a 7-segment display to show the decimal digit. Intermediate points A–E are labelled on the circuit. Output Q controls one segment; Q = 1 lights the segment.",
                    figure: { type: 'table', label: 'Truth table to complete (rows for 0–9 with some intermediate values pre-filled)',
                      headers: ['X3', 'X2', 'X1', 'X0', 'A', 'B', 'C', 'D', 'E', 'Q'],
                      rows: [
                        ['0','0','0','0','','','','','',''],
                        ['0','0','0','1','1','0','1','0','0','0'],
                        ['0','0','1','0','','','','','',''],
                        ['0','0','1','1','1','1','0','0','1','1'],
                        ['0','1','0','0','','','','','',''],
                        ['0','1','0','1','0','0','1','1','1','1'],
                        ['0','1','1','0','0','0','1','1','1','1'],
                        ['0','1','1','1','','','','','',''],
                        ['1','0','0','0','1','0','1','0','0','1'],
                        ['1','0','0','1','','','','','','']
                      ] },
                    prompt: "Complete every empty cell in the truth table for the circuit in Figure 7. The listed inputs (X3, X2, X1, X0) represent the decimal digits 0–9 in binary — the only allowed inputs.", marks: 4 },
                  { code: '06.3',
                    preamble: "Figure 8 shows the patterns of segments that are illuminated for each of the decimal digits 0–9, with the seven segments labelled a (top), b (top-right), c (bottom-right), d (bottom), e (bottom-left), f (top-left), g (middle).",
                    prompt: "By considering the inputs and outputs of the circuit in Figure 7 and consulting your trace table, state which of the segments in the display (labelled a to g) the output Q from the circuit is controlling.", marks: 1 },
                  { code: '06.4', prompt: "Using the rules of Boolean algebra, simplify the following Boolean expression:\n\n    A · (Ā + 1) · B̄ ∨ ¬(Ā + B + 0)\n\n(See the official PDF for exact overline notation.)\n\nYou must show your working.", marks: 4 }
                ]
              },
              {
                number: 7,
                parts: [
                  { code: '07.1',
                    preamble: "One of the numbers listed below is a member of the set of integers, the set of rational numbers and the set of real numbers, but is not a member of either the set of irrational numbers or the set of natural numbers.",
                    prompt: "Shade one lozenge to indicate which number this is.\n\nA) −43\nB) 12/35\nC) 87\nD) 107.834", marks: 1 },
                  { code: '07.2', prompt: "Shade one lozenge to indicate which type of number would be most appropriate to use to measure the length of an item, such as a piece of rope.\n\nA) Integer\nB) Irrational\nC) Natural\nD) Rational\nE) Real", marks: 1 }
                ]
              },
              {
                number: 8,
                scenario: "A warehouse stores products waiting to be delivered to supermarkets. Products are packed onto pallets — all of the products on one pallet are of the same type (e.g. 120 boxes of washing powder). Individual products could be identified by labelling them with barcodes or RFID tags. Each label stores a ProductID number (uniquely identifying the type of product) together with an ItemID number (unique to the specific item). Figure 10 (the products table) has columns ProductID, Description, QuantityInStock.\n\nSome pallets delivered will be of products already in the table; others will be of items that don't exist in the table because the warehouse has not stocked them before.",
                parts: [
                  { code: '08.1', prompt: "Explain why the warehouse owners might prefer the individual products to be identified using RFID tags.", marks: 2 },
                  { code: '08.2', prompt: "Explain why the product manufacturers or supermarket owners might prefer the individual products to be identified using barcode labels.", marks: 2 },
                  { code: '08.3', prompt: "Describe how an RFID reader would read the ProductID and ItemID values from RFID tags as pallets are delivered and explain how this data could be used to update the database table that stores details of the products that the warehouse has in stock.\n\nYou should include in your description references to the type(s) of SQL statements (e.g. INSERT, SELECT, UPDATE) that could be used and their purpose, but you do not need to write any SQL code.", marks: 6 }
                ]
              },
              {
                number: 9,
                scenario: "Figure 11 shows the format of a machine code instruction for a particular processor and one instruction in that format. The instruction format is opcode + operand. The operand field is wide enough to be used as a memory address.",
                parts: [
                  { code: '09.1', prompt: "If the operand can be used to refer to any location in the memory, how many memory locations can the processor address?", marks: 1 },
                  { code: '09.2',
                    preamble: "One of the two addressing modes that the processor supports is immediate addressing.",
                    prompt: "Explain what is meant by immediate addressing.", marks: 1 },
                  { code: '09.3',
                    preamble: "The Vernam cipher encrypts a plaintext character by performing a logical operation between a character in the plaintext and part of the key.\n\nThe AQA assembly language instruction set is provided (LDR, STR, ADD, SUB, MOV, CMP, B, B<cond>, AND, ORR, EOR, MVN, LSL, LSR, HALT; operand2 = #decimal or Rm; general registers R0–R12).",
                    prompt: "Write an assembly language program, using the AQA assembly language instruction set, to encrypt a plaintext character using this method.\n\nYou should assume that:\n  • the character code of the plaintext character is in memory location 101\n  • the part of the key to use is in memory location 102\n\nThe encrypted ciphertext character should be stored in memory location 103.", marks: 3 },
                  { code: '09.4',
                    preamble: "A message has been encrypted using the Caesar cipher with a key value of 5. Each capital letter is replaced by another capital letter (as determined by the key value) whenever it is encrypted or decrypted.\n\nThe pseudocode in Figure 12 is supposed to decrypt a single capital letter character in the message, but it does not work properly:\n\n    asciicode ← CHAR_TO_INT(ciphertextcharacter)\n    asciicode ← asciicode − 5\n    plaintextcharacter ← INT_TO_CHAR(asciicode)\n\nCHAR_TO_INT returns the ASCII code of a character. INT_TO_CHAR returns the character corresponding to an ASCII code. Capital letters A–Z have ASCII codes 65–90.",
                    prompt: "By analysing the pseudocode in Figure 12, explain what the problem with the algorithm represented by the pseudocode is and how it could be rectified.", marks: 3 }
                ]
              },
              {
                number: 10,
                parts: [
                  { code: '10', extended: true,
                    preamble: "A company provides a social media service through which members can share information about themselves and view information and news from their friends. The service also displays current affairs news stories to its members. The service does not have journalists who write the stories but instead it uses algorithms to select news stories written by other organisations and individuals and shows these. Different news stories may be shown to different members.",
                    prompt: "Discuss:\n  • how algorithms might determine which current affairs news stories to display to an individual member\n  • the moral, ethical and legal considerations that the developers of the system and its operators should consider in relation to how the algorithms work and which news stories are displayed.", marks: 6 }
                ]
              },
              {
                number: 11,
                parts: [
                  { code: '11.1',
                    preamble: "The list towers is defined as:\n\n    towers = [\"Blackpool\", \"Paris\", \"New Brighton\", \"Toronto\"]",
                    prompt: "What are the head and tail of this list?", marks: 1 },
                  { code: '11.2',
                    preamble: "Figure 14 shows some code written in a functional programming language:\n\n    total []     = 0\n    total (x:xs) = x + total (xs)\n\n• [] is the empty list\n• (x:xs) as the argument to a function splits a list into two parts, the head x and tail xs.",
                    prompt: "Describe how the total function works to add up all of the numbers in a list.", marks: 3 },
                  { code: '11.3',
                    preamble: "Functional programming languages support higher-order functions such as map and fold.",
                    prompt: "Explain what a higher-order function is.", marks: 2 },
                  { code: '11.4', prompt: "What is the result of this application of the fold function?\n\n    fold (*) 1 [2, 3, 2]", marks: 1 }
                ]
              }
            ],
            // Official AQA mark-scheme content for every part, copied from
            // the 7517/2 November 2020 mark scheme.
            markSchemes: {
              '01.1': { type: 'exact',
                points: ['1,600,000 (bytes)', '1600000', '1.6 MB', '1600 kB'],
                guidance: '2 marks for correct final answer 1,600,000 bytes. A. 1600 kB / 1.6 MB for 1 mark but NE. 1600 or 1.6 without units. If final answer not given but correct calculation shown ((60+40) × 16 × 8000 / 8, or 100 × 16 × 8000 / 8), award 2 marks. If incorrect/incomplete, award 1 method mark for doing any three of: multiplying by 8000; multiplying by 100; multiplying by 16; dividing by 8 (A. multiplying by 2 as alternative to ×16 then ÷8).' },
              '01.2': { type: 'points',
                points: [
                  '(Analogue signal) sampled at fixed / regular time intervals (R. references to graphs)',
                  'Amplitude / voltage of signal / wave (at each sample point) measured',
                  'Measurement coded into a fixed number of bits / coded in binary'
                ],
                guidance: '2 marks if all three points covered. 1 mark if at least one point covered. A. "sound" as BOD for "analogue signal".' },
              '02.1': { type: 'points',
                points: [
                  'Advantage of floating point (max 1): A floating point system can represent numbers with a greater range than fixed point (A. can represent numbers much closer to zero / much smaller numbers; A. can represent much larger numbers)',
                  'Advantage of fixed point (max 1): A fixed point system can represent (some) numbers more precisely than floating point (A. "accurately" for "precision" as BOD)',
                  'Advantage of fixed point (alt): Calculations can be performed more quickly (NE. "time efficient"; A. "simpler evaluation")',
                  'Advantage of fixed point (alt): Represents all numbers to a constant (A. fixed, guaranteed) level of precision/accuracy'
                ],
                guidance: '2 marks: max 1 from floating-point list + max 1 from fixed-point list. NE. "easier to understand".' },
              '02.2': { type: 'exact',
                points: ['−0.0859375', '−11/128', '−0.0859'],
                guidance: '2 marks for correct answer −0.0859375 (= −11/128). A. expressed to at least four decimal places (e.g. −0.0859). If incorrect, award 1 method mark for one of: showing mantissa = −0.6875 / −11/16 AND/OR exponent = −3 in decimal; showing binary point shifted 3 places to the left; using answer = mantissa × 2^exponent with at least one of the correct mantissa or exponent.' },
              '02.3': { type: 'exact',
                points: ['Mantissa = 0.110011 (or 0.1100110), exponent = 01011 (= +11)'],
                guidance: '3 marks for correct answer. If incorrect, award up to 2 method marks for: correct (unsigned) representation of 1632 in binary = 11001100000 (A. leading 0s); correct exponent in decimal (11) or binary (01011), or showing binary point shifted 11 places left (mark can be awarded if seen in final answer); correct mantissa in binary = 0.110011.' },
              '02.4': { type: 'exact',
                points: [
                  'Highest value: 32,256 (A. 0.984375 × 2¹⁵ / 63/64 × 2¹⁵)',
                  'Lowest value: −32,768 (A. −2¹⁵ / −1 × 2¹⁵)'
                ],
                guidance: '3 marks if both correct (1 mark each + 1 for both). If 3 marks not awarded, working marks available (max 2 overall): 1 mark for highest value in binary 111111000000000 (or mantissa 0.111111 AND exponent 01111); 1 mark for lowest value in binary 1000000000000000 (or mantissa 1.000000 AND exponent 01111); 1 mark for multiplying a value by the correct exponent in decimal (2¹⁵ = 32,768), regardless of correctness.' },
              '02.5': { type: 'points',
                points: [
                  'There are not enough bits in the mantissa (to represent 28.25 exactly) / 7 bits is not enough / binary representation needs more significant digits than the mantissa has bits / 28.25 needs 8 bits in mantissa / insufficient precision available',
                  'It could be rounded to the nearest representable value / it may be truncated / represent as 28 / represent as 28.5'
                ],
                guidance: '2 marks. R. "28.25/some numbers can never be represented exactly in binary". R. "an error would be generated".' },
              '03.1': { type: 'exact',
                points: [
                  'Address Bus = 4',
                  'Data Bus = 5',
                  'Main Memory = 1',
                  'Processor = 2',
                  'USB I/O Controller = 3'
                ],
                guidance: '2 marks if all five correct. 1 mark if at least three correct.' },
              '03.2': { type: 'exact',
                points: ['4,194,304 (kibibytes)', '1024 × 1024 × 4', '4 × 2²⁰', '2²²'],
                guidance: '1 mark for 4,194,304 kibibytes (or equivalent).' },
              '03.3': { type: 'points',
                points: [
                  'Avoid / reduce bottleneck of single data / address bus(es) / avoid delays waiting for memory fetches (A. "instruction and data can be accessed simultaneously")',
                  'Avoids possibility of data being executed as code (one method that can be exploited by hackers) / being able to use exclusively ROM for instruction memory prevents the program being modified / hacked (A. program cannot be (accidentally) overwritten by data)',
                  'Instruction and data memory can have different word lengths',
                  'Different technologies can be used to implement instruction and data memory',
                  'Different quantities of instruction and data memory means address lengths can differ between the two / memory address structures can differ'
                ],
                guidance: 'Max 2. NE. "So programs/tasks will run faster". NE. "More efficient". NE. "Quicker access" without further explanation. NE. "Instructions and data stored in different memories".' },
              '03.4': { type: 'exact',
                points: [
                  '① Memory Address Register (NE. MAR alone)',
                  '② Program Counter (NE. PC alone)',
                  '③ Current Instruction Register (NE. CIR/IR alone; A. Instruction Register)'
                ],
                guidance: '2 marks if all three correctly named. 1 mark for two correct. If student used initialisms instead of full register names (or a mixture), award 1 mark if all three registers have the correct abbreviated name.' },
              '03.5': { type: 'points',
                points: [
                  'Allows the currently executing process / task / program to be suspended (A. "stopped" as BOD; R. "suspend/stop the fetch-execute cycle/processor"; R. "instruction" for "process")',
                  'So that a device / source that needs the (immediate) attention of the processor can be serviced / dealt with / so that an urgent error condition can be serviced (A. examples; NE. "to deal with an error" unless clear it must be dealt with immediately; NE. "so that a task of higher priority can be carried out")'
                ],
                guidance: '2 marks.' },
              '03.6': { type: 'points',
                points: [
                  'So that the currently running process / task / program can be returned to (NE. "so that the content will not be lost/overwritten"; NE. "so that the F-E cycle can continue afterwards")',
                  'As the (code that deals with the) interrupt will change / overwrite / clear register values (NE. "the contents of the registers will be lost")'
                ],
                guidance: '2 marks.' },
              '03.7': { type: 'points',
                points: [
                  'Software (is the programs that) execute(s) on the hardware',
                  'Hardware is the electrical / physical components that allow the software to execute',
                  'Software controls the operation of the hardware (A. as BOD)'
                ],
                guidance: '1 mark.' },
              '04.1': { type: 'exact',
                points: ['D', 'The REST API will be created and run on the client computer'],
                guidance: '1 mark for D. R. if more than one lozenge shaded.' },
              '04.2': { type: 'exact',
                points: ['B', 'XML'],
                guidance: '1 mark for B. R. if more than one lozenge shaded.' },
              '04.3': { type: 'points',
                points: [
                  'More compact (A. facilitates faster transmission / smaller file size / uses less memory)',
                  'Quicker (A. easier) to parse',
                  'Structure understood directly in some languages (e.g. JavaScript)',
                  '(Native) support for arrays',
                  'Easier for humans to read / write / understand'
                ],
                guidance: 'Max 2.' },
              '04.4': { type: 'exact',
                points: ['That the buyer will only view the same property once on a particular day'],
                guidance: '1 mark. R. "each visit made by only one buyer".' },
              '04.5': { type: 'points',
                points: [
                  'AO2 — Correctly analyse the data model: identify tables (Property, Buyer) and fields (PropertyID, Street, Bedrooms, AskingPrice) to extract, with no other tables/fields',
                  'AO2 — Identify two of the four required conditions (1 mark) OR all four conditions (2 marks): BuyerID = 23; Buyer.DesiredArea = Property.Area; Buyer.MinBedrooms <= Property.Bedrooms; Buyer.MaxPrice >= Property.AskingPrice',
                  'AO3 — Fully correct SQL in two of the three/four clauses (SELECT, FROM, WHERE, ORDER BY)',
                  'AO3 — Fully correct SQL in all three/four clauses'
                ],
                guidance: '5 marks (3 AO2 + 2 AO3). AO2 marks awarded regardless of SQL correctness. ORDER BY AskingPrice DESC required for full credit. A. table-name.fieldname; A. AS alias; A. INNER JOIN as one word. Overall Max 4 if solution does not work fully.' },
              '05.1': { type: 'points',
                points: [
                  'Automatic / dynamic IP address allocation to devices on the network',
                  'No need to manually configure IP addresses on each device',
                  'No risk of two devices being assigned the same IP address',
                  'Devices can move between networks and obtain valid addresses without reconfiguration',
                  'Easier to change network configuration (e.g. subnet mask, gateway) — done once on DHCP server',
                  'Reduces errors from manually programming incorrect subnet mask'
                ],
                guidance: 'Max 1. NE. "avoiding errors" without an example.' },
              '05.2': { type: 'points',
                points: [
                  'The computers have private / non-routable IP addresses / 192.168.2.3 is a private / non-routable IP address (NE. "computers can have the same IP addresses as they are on different networks")',
                  'NAT / Network Address Translation will be performed (so they can communicate on the Internet) / as data passes onto the Internet the private IP address is replaced with the public IP address of the router / gateway'
                ],
                guidance: '2 marks.' },
              '05.3': { type: 'points',
                points: [
                  'Block / allow (traffic on) specific ports / block specified protocols',
                  'Block / allow (traffic from) specific IP addresses (A. domain names as BOD; R. MAC addresses; NE. "block access to certain websites")',
                  'Block / allow certain types of packet (A. examples e.g. pings/echo requests; NE. "block specific programs connecting to Internet")',
                  'Firewall maintains information about current connections and only allows packets relevant to these connections (NE. just "stateful inspection")',
                  'Act as a proxy server / all traffic to Internet must go via firewall / stops computers on Internet directly accessing devices on the LAN',
                  'Identify unusual behaviour from a host (e.g. sending an unusually large amount of data)',
                  'Rules are written to specify conditions under which to block/allow',
                  '(Fallback) Examine the contents of the packet header and allow/block based on rules (NE. just "packet filtering")'
                ],
                guidance: 'Max 4. The packet-header fallback mark can only be awarded if none of the first three points have been awarded.' },
              '05.4': { type: 'levels',
                levels: [
                  { range: [10, 12], descriptor: 'Level 4',
                    criteria: 'A line of reasoning has been followed to produce a coherent, relevant, substantiated and logically structured response. The response covers all three areas and in at least two of these there is sufficient detail to show a good level of understanding. Top of range requires good understanding of all three areas.' },
                  { range: [7, 9], descriptor: 'Level 3',
                    criteria: 'A line of reasoning has been followed to produce a coherent, relevant, substantiated and logically structured response which shows a good level of understanding of two areas.' },
                  { range: [4, 6], descriptor: 'Level 2',
                    criteria: 'A limited attempt has been made to follow a line of reasoning and the response has a mostly logical structure. A good level of understanding of at least one area OR a reasonable understanding of at least two areas.' },
                  { range: [1, 3], descriptor: 'Level 1',
                    criteria: 'A few relevant points have been made but there is no evidence that a line of reasoning has been followed. Points may only relate to one or two of the areas. Insufficient evidence of good understanding of any of the three areas.' }
                ],
                indicative: {
                  'Area 1 — Determining if on LAN (subnet mask)': 'AND operation of subnet mask with Computer A\'s IP address; AND operation of subnet mask with Computer B\'s IP address; result of each AND is the network / subnet ID; network IDs compared; as they differ, packet must be sent via router/gateway/Internet (Computer B is not on the same subnet); if they were the same, packet sent directly to Computer B. Basic understanding = recognising that the subnet mask is used with IP addresses to determine if the two computers are on the same network/subnet.',
                  'Area 2 — Routing across the Internet': 'Hierarchical organisation of routers; example (passed up to a national router, transferred internationally, passed back down); path selected by each router (not determined at start; NE. "passed from router to router"); route may change due to congestion / technical problems; (possible) repackaging of packet to use different protocol (e.g. gateway may change protocol); route determined using the (Network ID part of the destination) IP address; use of router tables / criteria to determine next hop; router decrements time-to-live of packet; source and destination MAC addresses changed at each router / MAC addresses used per hop; IP address of Computer A replaced with IP address of Router A3 / NAT will occur at routers.',
                  'Area 3 — Checksum': 'Checksum produced when packet transmitted (by Computer A); (hash) value calculated from packet contents; MOD operation often used to limit magnitude / fit value to specific number of bits; checksum transmitted with / appended to packet; Computer B recalculates checksum (performs same calculation on data); received and calculated checksum compared; if they match, contents/data are accurate; if they differ, data has been changed / there is an error.'
                },
                guidance: '12 marks. Best-fit across the three areas. Indicative content is a guide — credit other valid points.' },
              '06.1': { type: 'exact',
                points: ['Table C', 'C'],
                guidance: '1 mark for Table C (Table C is the AND truth table, which is not OR, XOR or NOR). R. if more than one lozenge shaded.' },
              '06.2': { type: 'points',
                points: [
                  'Correct values in columns A OR C of the unshaded rows',
                  'Correct values in columns B OR D of the unshaded rows',
                  'Correct values in column E of the unshaded rows',
                  'Correct values in column Q of the unshaded rows'
                ],
                guidance: '4 marks: 1 mark per correct column-set. Marks are awarded for the correct values in the unshaded cells only. Max 3 if any incorrect values in the table. Expected unshaded rows: 0000 → A=0, B=1, C=0, D=1, E=0, Q=0; 0010 → 1,1,1,0,1,1; 0100 → 0,1,0,0,1,1; 0111 → 0,0,0,0,0,0; 1001 → 0,1,1,0,0,1.' },
              '06.3': { type: 'exact',
                points: ['b', 'the middle bar'],
                guidance: '1 mark for segment b (A. the middle bar).' },
              '06.4': { type: 'points',
                points: [
                  'Final answer: A·B (or a logically equivalent fully-simplified expression)',
                  'Successful application of De Morgan\'s Law (and any associated NOT cancellation) that produces a simpler expression',
                  'Applying an identity other than cancelling NOTs that produces a simpler expression (e.g. X + 1 = 1, X · 1 = X, X + 0 = X)',
                  'Successfully expanding brackets'
                ],
                guidance: '4 marks: 1 mark for the final answer + max 3 for working (one mark per technique application). Award marks for working until an incorrect step is made; ignore missing steps if jumps between steps are logically correct. A simpler expression uses fewer logical operators than the original. If a candidate simplifies different parts simultaneously, award all relevant marks for the multiple stage but no further marks for parts simplified incorrectly.' },
              '07.1': { type: 'exact',
                points: ['A', '−43'],
                guidance: '1 mark for A (−43 is in ℤ, ℚ, ℝ but not in ℕ or the irrationals). R. more than one lozenge shaded.' },
              '07.2': { type: 'exact',
                points: ['E', 'Real'],
                guidance: '1 mark for E. R. more than one lozenge shaded.' },
              '08.1': { type: 'points',
                points: [
                  'AO2 (1 mark): A lot of individual products will need to be scanned simultaneously / when a lorry / delivery arrives or leaves',
                  'AO1 (1 mark): The RFID tags could be read without removing products from their pallet',
                  'AO1 (alt): RFID tags can be read from a (greater) distance than barcodes',
                  'AO1 (alt): No need for a person to scan tags / no need to manually scan tags',
                  'AO1 (alt): RFID tags can be read at a faster rate',
                  'AO1 (alt): RFID tags less easily damaged / barcodes can be easily damaged and made unreadable',
                  'AO1 (alt): Don\'t have to spend time locating barcodes on items'
                ],
                guidance: '2 marks (1 AO2 + max 1 AO1). R. "RFID tags can store more data" (not relevant here).' },
              '08.2': { type: 'points',
                points: [
                  'AO1 (1 mark): Barcodes are cheaper than RFID tags / less electronic waste (assuming tags not reused) / barcodes can only be read when scanner pointed directly at them / barcodes not susceptible to radio interference / barcodes usually include human-readable encoding of same data',
                  'AO2 (1 mark): Higher cost of RFID tags would be added to prices / higher cost paid by manufacturer / supermarket / customer / barcodes can be scanned by existing equipment at checkouts / less risk of nearby product being accidentally scanned / backup system exists as barcodes can be keyed in'
                ],
                guidance: '2 marks (1 AO1 + 1 AO2).' },
              '08.3': { type: 'points',
                points: [
                  'AO1 — RFID reader / scanner (at warehouse entrance) transmits / sends signal',
                  'AO1 — Signal activates / energises / induces current in RFID transponder / tag',
                  'AO1 — RFID transponder / tag transmits / sends data by radio (wave)',
                  'AO2 — RFID signals processed into a format suitable for querying the database',
                  'AO2 — (SELECT) query used to check if there is already a record for the product / ProductID in the database / return of empty data set could be used to identify the product is not in the table (NE. "used to lookup record")',
                  'AO2 — UPDATE statement used to increase the QuantityInStock / stock level (by the number of items delivered) if the product is already in the database',
                  'AO2 — INSERT statement used to create new record for product if not already in the database; user will need to enter some details manually as these are not in the RFID tag'
                ],
                guidance: '6 marks total: 3 AO1 (knowledge) for the RFID-read mechanism + max 3 AO2 (analyse) for the SQL/database logic.' },
              '09.1': { type: 'exact',
                points: ['1024', '2¹⁰', '1 KiB'],
                guidance: '1 mark for 1024 / 2¹⁰. A. 1 KiB.' },
              '09.2': { type: 'exact',
                points: ['The operand is the value / datum that the instruction should use'],
                guidance: '1 mark.' },
              '09.3': { type: 'points',
                points: [
                  'Values in memory locations 101 and 102 loaded into two different registers (e.g. LDR R1, 101 ; LDR R2, 102)',
                  'Contents of the two registers are exclusive ORed (e.g. EOR R3, R1, R2) (A. XOR achieved another way: two ANDs + two NOTs + an OR; A. EOR 103, 101, 102 if no other marks awarded for this part)',
                  'Value of register storing the EOR result is stored into memory location 103 (e.g. STR R3, 103) (A. result of incorrect combination stored in 103)'
                ],
                guidance: '3 marks (AO3 — programming). DPT. use of invalid register name e.g. Rd. DPT. use of incorrect addressing mode. DPT. inclusion of invalid symbols in commands. Example solution: LDR R1, 101 / LDR R2, 102 / EOR R3, R1, R2 / STR R3, 103.' },
              '09.4': { type: 'points',
                points: [
                  'Problem: Some letters will be shifted back before the letter A / before the start of the alphabet / before ASCII code 65 / some letters will end up as non-alphabetic characters (R. "some values will not be valid ASCII codes")',
                  'Solution: These need to be shifted back / wrapped around to the end of the alphabet / use an If statement to check if the code is below 65',
                  'Solution: Shifting achieved by adding 26 to any code below 65 / by using MOD 26 in the calculation'
                ],
                guidance: '3 marks: 1 for the problem + max 2 for the solution.' },
              '10': { type: 'points',
                points: [
                  'Area 1 — Algorithm: members could specify their interests / views and stories matched to these',
                  'Area 1: consider basic facts about member (age, gender, location)',
                  'Area 1: consider what stories have been read by friends of the member',
                  'Area 1: analyse the type of stories the user has read before / member\'s search history / member\'s reaction (likes) to similar stories',
                  'Area 1: show stories viewed by others with a similar profile',
                  'Area 1: display articles that have been more popular / had more hits / received more positive feedback',
                  'Area 1: compare keywords in articles with keywords in articles previously viewed by the member',
                  'Area 1: how can the algorithm avoid displaying click-bait?',
                  'Area 2 — Legal: who owns the copyright in the story? is it legal to reproduce a story someone else has written?',
                  'Area 2 — Legal: is the company legally responsible for the content / accuracy of stories?',
                  'Area 2 — Legal: do contracts need to be signed between the company and the organisations / individuals stories will be displayed from?',
                  'Area 2 — Legal: laws in some countries may prevent some types of stories / need to ensure laws in different countries are followed',
                  'Area 2 — Legal: need to ensure stories are age-appropriate; need to notify members about how their information is used',
                  'Area 3 — Ethical/Moral: by choosing what stories to display, will the service influence the views of members?',
                  'Area 3: how should the company deal with governments / organisations who might want to influence / control which stories are displayed?',
                  'Area 3: should the company accept payments to promote stories?',
                  'Area 3: how should the company deal with complaints (in a timely fashion)?',
                  'Area 3: will reproduction adversely (or positively) affect the number of people reading the original stories from their authors?',
                  'Area 3: how can / should reliability of stories be checked (fake news)?',
                  'Area 3: how should the company assess bias / prevent propaganda? duty to provide balance?',
                  'Area 3: should members be able to opt out of having their data analysed for this purpose? (importance of consent)',
                  'Area 3: should the company let members know the news they see is tailored to them?',
                  'Area 2 or 3: should the company have people who read/check each story? is it practical?',
                  'Area 2 or 3: how should the company select which organisations / individuals it will display stories from?'
                ],
                guidance: '6 marks. Max 4 if all points are from one area — students must spread across at least two of the three areas (Algorithm / Legal / Ethical-Moral).' },
              '11.1': { type: 'exact',
                points: [
                  'Head: "Blackpool"',
                  'Tail: ["Paris", "New Brighton", "Toronto"]'
                ],
                guidance: '1 mark for both head AND tail correctly identified. I. if quotation marks are omitted. A. omissions of brackets from the tail or addition of brackets to the head this time only.' },
              '11.2': { type: 'points',
                points: [
                  'The function is recursive',
                  'It splits the list up into the head and the tail',
                  'It calls itself with the tail of the list that it was called with (as an argument)',
                  'Each call adds the value that is the head of the list to the total / sum of the values in the tail of the list',
                  'The recursion terminates when the list is empty (by returning 0)'
                ],
                guidance: 'Max 3.' },
              '11.3': { type: 'points',
                points: [
                  'A function that takes a function as an argument',
                  'A function that returns a function as a result'
                ],
                guidance: 'Max 2. A. "parameter", "input" for "argument". NE. "a function that uses another function". R. explanations that are specifically of map or fold and do not explain higher-order.' },
              '11.4': { type: 'exact',
                points: ['12'],
                guidance: '1 mark for 12 (fold (*) 1 [2,3,2] = 2*3*2*1 = 12).' }
            }
          }
        ]
      },
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
          // Order: most-recent first. OCR publishes 4 sittings on the
          // public site (June 2024, 2023, 2022, November 2021); pre-2021
          // sittings are behind their Teach Cambridge teacher portal and
          // not addressable as public PDF URLs.
          {
            id: 'cs-ocr-h446-2024-p1',
            year: 'June 2024',
            paperName: 'Paper 1 — Computer Systems',
            paperCode: 'H446/01',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/726571-question-paper-computer-systems.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/726741-mark-scheme-computer-systems.pdf',
            questions: [
              {
                number: 1,
                scenario: "The stored program concept uses the Fetch-Decode-Execute cycle to get the next instruction from memory and then execute it.",
                parts: [
                  { code: '1(a)', prompt: "Describe what happens during the fetch stage of the Fetch-Decode-Execute cycle.\n\nYou should state the different registers and buses that are used in your answer.", marks: 4 },
                  { code: '1(b)',
                    preamble: "One of the instructions that may be fetched and executed as part of this cycle is a branch instruction.",
                    prompt: "State the name of the register that would be altered in the execute phase during a branch instruction.", marks: 1 },
                  { code: '1(c)',
                    preamble: "Three ways of improving the performance of a CPU are increasing the clock speed, adding more cores and using pipelining.",
                    prompt: "Explain how pipelining improves the performance of a CPU.", marks: 3 },
                  { code: '1(d)(i)',
                    preamble: "The Fibonacci sequence is a series of numbers. It starts with 0 and 1. Each subsequent number is the sum of the two before it (0, 1, 1, 2, 3, 5, 8...).\n\nOrla has written LMC code to show the first five Fibonacci numbers, but it contains an error:\n\n    START  LDA MAX\n           BRZ END\n    END    LDA A\n    A      OUT\n    B      ADD B\n    MAX    STA B\n    ONE    LDA B\n           STA A\n           LDA MAX\n           SUB ONE\n           STA MAX\n           BRA START\n           HLT\n           DAT 0    ; A\n           DAT 1    ; B\n           DAT 5    ; MAX\n           DAT 1    ; ONE",
                    prompt: "State the five outputs that Orla's code would give.", marks: 3 },
                  { code: '1(d)(ii)',
                    preamble: "Orla has rewritten her LMC code to fix the error and added an additional DAT.\n\n    START  LDA MAX\n           BRZ END\n           LDA A\n           OUT\n           ______\n           STA TEMP\n           ______\n           ADD B\n           STA B\n           ______\n           STA A\n           LDA MAX\n           SUB ONE\n           STA MAX\n           BRA START\n    END    HLT\n    A      DAT 0\n    B      DAT 1\n    ______ DAT 0\n    MAX    DAT 5\n    ONE    DAT 1",
                    prompt: "Complete the LMC code to output the first five correct Fibonacci numbers (0, 1, 1, 2, 3). Fill in the four blanks (the three missing instructions and the label for the new DAT).", marks: 4 },
                  { code: '1(e)',
                    preamble: "In Orla's LMC code, she used direct memory addressing.",
                    prompt: "Give three other modes of memory addressing.", marks: 3 },
                  { code: '1(f)',
                    preamble: "Since the development of high-level languages, the use of assembly languages has reduced.",
                    prompt: "Give two reasons why in some circumstances programmers will choose to write code in assembly language.", marks: 2 },
                  { code: '1(g)',
                    preamble: "The performance of a computer system can be improved by adding more RAM.",
                    prompt: "Explain why adding more RAM will improve the performance of a computer system.", marks: 3 }
                ]
              },
              {
                number: 2,
                scenario: "An embedded system is often a small device that is designed to carry out a limited number of specialised tasks. Professional athletes sometimes wear small embedded systems called fitness trackers in their shirts. These can be used to track their speed, position, heart rate and other performance data during an event. The tracker transmits this data to a pitch-side server which collates the data from all the athletes.",
                parts: [
                  { code: '2(a)', prompt: "State the name of one input device that might be used in this embedded system and state what it would be used for.", marks: 2 },
                  { code: '2(b)', prompt: "Explain two reasons why flash (solid state) storage would be the best type of secondary storage for the fitness tracker system.", marks: 4 },
                  { code: '2(c)(i)',
                    preamble: "One use of ROM is to store the Basic Input Output System (BIOS). The BIOS is used when the computer is first turned on.",
                    prompt: "Describe what the BIOS will do to start up the computer.", marks: 3 },
                  { code: '2(c)(ii)',
                    preamble: "Apart from storing the BIOS, ROM can also be used in other ways.",
                    prompt: "Describe how the embedded system can make a different use of ROM and why it is an advantage.", marks: 2 },
                  { code: '2(d)(i)',
                    preamble: "The embedded system will have an operating system. Two roles of an operating system are to handle interrupts and manage scheduling.",
                    prompt: "Describe two other roles of an operating system.", marks: 4 },
                  { code: '2(d)(ii)',
                    figure: { type: 'table', label: 'Match each scheduling algorithm to its description',
                      headers: ['Scheduling Algorithm', 'Description (write A–E)'],
                      rows: [
                        ['Round Robin', ''],
                        ['First come first served', ''],
                        ['Multi-level feedback queues', ''],
                        ['Shortest job first', ''],
                        ['Shortest remaining time', '']
                      ] },
                    prompt: "Match each scheduling algorithm to the correct description:\n\nA — Splits processes into different priority queues based on the amount of processor time they need. It allows them to move between the queues as their characteristics change.\nB — Selects the process that takes the shortest amount of time to complete. The processes are run until they are fully complete.\nC — Each process is allocated a fixed amount of CPU time. If the process is not complete it will be suspended and the next process will start.\nD — Each process is given equal priority and they are processed in the order they arrive.\nE — Selects the process that takes the shortest amount of time. The process can be suspended if another shorter process is added.", marks: 5 },
                  { code: '2(e)', extended: true,
                    preamble: "The fitness trackers will send athletes' performance data to a pitch-side server. A program needs to be developed to analyse this data and display the results. Different words, colours and charts will be displayed to indicate how well athletes are performing. The program will be used by athletes from different cultures all over the world.",
                    prompt: "Discuss the layout considerations that the programmer needs to consider when creating the program user interface for different cultures.\n\nYou should include:\n  • layout considerations\n  • colour considerations\n  • character set considerations.", marks: 9 }
                ]
              },
              {
                number: 3,
                scenario: "OCR Solutions is a software development company. Employees use a wide range of application software to complete admin tasks. Tasks include writing letters to clients and creating graphics.",
                parts: [
                  { code: '3(a)',
                    figure: { type: 'table', label: 'Application software for each task',
                      headers: ['Task', 'Application Software'],
                      rows: [
                        ['Creating graphics such as a logo', ''],
                        ['Writing letters to clients to confirm their appointment date and time', ''],
                        ['Calculating the company profits at the end of each month', ''],
                        ['Storing, searching and updating client details and purchases', ''],
                        ['Creating brochures and flyers about the organisation', '']
                      ] },
                    prompt: "State the most appropriate application software for each task in the table.", marks: 5 },
                  { code: '3(b)',
                    preamble: "The application software is run on thin client computers. A thin client computer is a very low-powered computer connected to a powerful central server. The OS and all applications run within a virtual machine on the server. The thin client computer only displays the output and captures input.",
                    prompt: "State one advantage of running the application software within the virtual machine.", marks: 1 },
                  { code: '3(c)',
                    preamble: "The thin client computer needs to send data input by the user to the server so the VM can process it. Data is compressed to improve the speed of transmission between client and server.",
                    prompt: "Explain why lossless compression should be used instead of lossy compression.", marks: 3 },
                  { code: '3(d)(i)',
                    preamble: "OCR Solutions make use of software libraries when writing their programming code. They also make use of linkers and loaders to compile and run the program.",
                    prompt: "Describe what linker means.", marks: 2 },
                  { code: '3(d)(ii)', prompt: "Describe what loader means.", marks: 2 }
                ]
              },
              {
                number: 4,
                parts: [
                  { code: '4(a)(i)',
                    preamble: "Two's complement can be used to represent negative binary numbers.",
                    prompt: "Convert the denary number −124 into an 8-bit two's complement binary number.", marks: 1 },
                  { code: '4(a)(ii)', prompt: "State one other way to represent negative binary numbers.", marks: 1 },
                  { code: '4(b)', prompt: "Convert the denary number 298 into hexadecimal.", marks: 2 },
                  { code: '4(c)',
                    preamble: "The binary number 10011101  0110 is stored in normalised floating point form with an 8-bit mantissa and a 4-bit exponent, both in two's complement.",
                    prompt: "Convert this binary number into denary. You must show your working.", marks: 3 },
                  { code: '4(d)',
                    preamble: "The binary number 00001011  0111 is represented in unnormalised floating point form with an 8-bit mantissa and a 4-bit exponent, both in two's complement.",
                    prompt: "Convert this binary number into a normalised floating point binary number, represented using an 8-bit mantissa and 4-bit exponent. You must show your working.", marks: 4 },
                  { code: '4(e)',
                    prompt: "Calculate the binary addition of these two 8-bit (unsigned) binary numbers. Show your working.\n\n    00110111\n    10011001 +", marks: 2 }
                ]
              },
              {
                number: 5,
                scenario: "Ben installs burglar alarms. The alarm has a door sensor and a motion sensor. When the alarm is set, the siren will sound if either sensor detects movement. A test mode setting lets an engineer check the sensors are working without the siren going off.\n\nInputs:\n    A — Door sensor\n    B — Motion sensor\n    C — Alarm has been set\n    D — Test mode enabled",
                parts: [
                  { code: '5(a)', prompt: "Draw a logic circuit to show the logic that is used in the burglar alarm to determine if the siren goes off.\n\n(Describe in words: which gates connect which inputs to produce the siren output. The correct circuit produces siren = (A OR B) AND C AND NOT D.)", marks: 4 },
                  { code: '5(b)(i)', prompt: "Simplify the Boolean expression ¬A v ¬B using De Morgan's First Law.", marks: 1 },
                  { code: '5(b)(ii)', prompt: "Simplify the Boolean expression ¬(¬B) using double negation.", marks: 1 },
                  { code: '5(b)(iii)', prompt: "Simplify the Boolean expression (A v B) ∧ (A v C) using distribution.", marks: 2 }
                ]
              },
              {
                number: 6,
                scenario: "A company wants more customers to be able to find their website on the internet.",
                parts: [
                  { code: '6(a)', extended: true,
                    prompt: "Discuss why search engine indexing and page ranking will be important in achieving this.\n\nYou should include:\n  • what search engine indexing means and what information is collected\n  • what PageRank means and possible factors that can affect a PageRank score of a website\n  • possible ways for the company to improve the PageRank score of pages on its website.", marks: 12 },
                  { code: '6(b)',
                    preamble: "The company would like to start selling their products on their website. They will use both client-side and server-side processing.",
                    figure: { type: 'table', label: 'Tick one box per row',
                      headers: ['Task', 'Client Side', 'Server Side'],
                      rows: [
                        ['Loading the website HTML code', '', ''],
                        ['Applying CSS styles to a website', '', ''],
                        ['Running JavaScript code to check that the customer surname has been entered on the order form', '', ''],
                        ['Running queries on the database to check if an item is available in stock', '', '']
                      ] },
                    prompt: "Tick one box on each row to identify whether each task would be best performed on the client side or the server side.", marks: 4 },
                  { code: '6(c)',
                    preamble: "When customers contact the company, their computers will use a number of protocols such as TCP/IP and HTTP to make connections with other devices over the internet.",
                    prompt: "Explain what a protocol is and why they are important in network communications.", marks: 2 },
                  { code: '6(d)', prompt: "Describe three different pieces of networking hardware in a client–server network apart from the clients and servers themselves.", marks: 6 }
                ]
              },
              {
                number: 7,
                parts: [
                  { code: '7', extended: true,
                    preamble: "Rosa has recently opened a new leisure centre. She currently has 150 members but is estimating this will increase to around 10 000 members. Rosa will store members' details in a database, plus gym class bookings and fitness instructor appointments. She is considering using either a flat file database or a relational database.",
                    prompt: "Discuss the benefits and drawbacks of flat file databases and relational databases and which one would be the most suitable for Rosa.\n\nYou should include:\n  • the features of flat file databases and relational databases\n  • the benefits and drawbacks of each type of database\n  • which type of database would be the most suitable for Rosa.", marks: 9 }
                ]
              },
              {
                number: 8,
                scenario: "Fig. 8 shows a binary search tree containing the names of different towns in Ireland:\n\n                Sligo\n               /     \\\n          Dublin       Waterford\n         /     \\      /\n      Cork    Galway  Tralee\n              /  \\\n           Dundalk  Limerick\n\nThe binary search tree is held in a 2-dimensional array called towns with 8 rows and 3 columns.",
                parts: [
                  { code: '8(a)', prompt: "Write a line of program code or pseudocode to declare the array towns.", marks: 2 },
                  { code: '8(b)(i)',
                    preamble: "In the 2-D array towns: first column = pointer to left, second = data, third = pointer to right. Leaf nodes have the pointer null.",
                    figure: { type: 'table', label: 'Pointers for each row (data shown)',
                      headers: ['Row', 'Left', 'Data', 'Right'],
                      rows: [
                        ['0', '', 'Sligo', ''],
                        ['1', '', 'Dublin', ''],
                        ['2', '', 'Cork', ''],
                        ['3', '', 'Waterford', ''],
                        ['4', '', 'Galway', ''],
                        ['5', '', 'Limerick', ''],
                        ['6', '', 'Tralee', ''],
                        ['7', '', 'Dundalk', '']
                      ] },
                    prompt: "Complete the table showing the contents of the towns array to store the binary search tree in Fig. 8. (Use null where there is no pointer.)", marks: 4 },
                  { code: '8(b)(ii)',
                    preamble: "Four more towns are added to the binary search tree shown in Fig. 8 in this order: Mallow, Cavan, Tuam, Wexford.",
                    prompt: "Describe where each new town is placed in the binary search tree. (Give the parent node and side — left/right.)", marks: 4 }
                ]
              },
              {
                number: 9,
                parts: [
                  { code: '9', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# OCR H446/01 June 2024 Q9 — Define the Dog class\n# Each dog is declared using an instance of the class Dog.\n# Private attributes: name, breed, height, weight.\n# Constructor sets all attributes to values passed in as parameters.\n# (Do not write the set/get methods.)\n\nclass Dog:\n    # TODO: declare the 4 private attributes and the constructor.\n    pass\n\n\n# ── Test driver (do not modify) ──\nrex = Dog('Rex', 'Labrador', 60.5, 30.0)\nprint(f\"Name:   {rex._Dog__name if hasattr(rex, '_Dog__name') else getattr(rex, 'name', '?')}\")\nprint(f\"Breed:  {rex._Dog__breed if hasattr(rex, '_Dog__breed') else getattr(rex, 'breed', '?')}\")\nprint(f\"Height: {rex._Dog__height if hasattr(rex, '_Dog__height') else getattr(rex, 'height', '?')}\")\nprint(f\"Weight: {rex._Dog__weight if hasattr(rex, '_Dog__weight') else getattr(rex, 'weight', '?')}\")\n"
                    },
                    testInputs: [],
                    preamble: "OCR DogCare look after dogs while their owners are at work. They use a program developed in an object-oriented paradigm. Each dog is an instance of the class Dog with private attributes: name, breed, height, weight. The constructor sets all attributes from its parameters.",
                    prompt: "Write pseudocode or program code to define the class Dog. Include the attributes and constructor method. You do not need to write the set or get methods.\n\nClick ▶ Run. A correct implementation prints Name: Rex, Breed: Labrador, Height: 60.5, Weight: 30.0.", marks: 5 }
                ]
              },
              {
                number: 10,
                scenario: "An investigative firm wants to start investigating cyber security issues.",
                parts: [
                  { code: '10(a)',
                    preamble: "Government bodies have been given additional powers under the Regulation of Investigatory Powers Act.",
                    prompt: "State three additional powers that this law gives to some government bodies.", marks: 3 },
                  { code: '10(b)',
                    preamble: "As part of their new roles, employees will be accessing personal data. All employees are enrolled on a course about the Data Protection Act.",
                    prompt: "Identify three principles of the Data Protection Act.", marks: 3 }
                ]
              }
            ],
            markSchemes: {
              '1(a)': { type: 'points',
                points: [
                  'Contents of the Program Counter / PC are copied to the Memory Address Register / MAR',
                  'The address is sent along the address bus',
                  'Control unit sends a (read) signal along the control bus',
                  'Contents stored in the memory address are sent along the data bus',
                  'Contents (from memory) are stored in the Memory Data Register / MDR (A. MBR / Memory Buffer Register)',
                  '...and sent / copied to the Current Instruction Register / CIR (A. IR / Instruction Register)',
                  'The Program Counter / PC is incremented'
                ],
                guidance: '4 marks: 1 mark per bullet, max 4.' },
              '1(b)': { type: 'exact',
                points: ['Program Counter', 'PC'],
                guidance: '1 mark.' },
              '1(c)': { type: 'points',
                points: [
                  'Allows the next instruction to be fetched whilst the previous one is being decoded / executed // allows overlapping of different parts of the FDE',
                  'It increases throughput / number of instructions processed in a set period of time',
                  'It prevents the CPU having to wait / prevents idle components'
                ],
                guidance: '3 marks: 1 per bullet. DNA "more efficient" alone. DNA points if clearly discussing multiple cores.' },
              '1(d)(i)': { type: 'exact',
                points: ['0', '1, 2, 4', '8 with no numbers after it'],
                guidance: '3 marks for outputs 0, 1, 2, 4, 8 (with 0 in any position). CAO.' },
              '1(d)(ii)': { type: 'exact',
                points: [
                  'After OUT: LDA B',
                  'After STA TEMP: LDA A',
                  'After STA B: LDA TEMP',
                  'New DAT label: TEMP'
                ],
                guidance: '4 marks: 1 per correct line. Case for mnemonics can be ignored. Case for A, B, TEMP labels must be all caps. Penalise first error and allow FT.' },
              '1(e)': { type: 'exact',
                points: ['Immediate', 'Indirect', 'Indexed'],
                guidance: '3 marks. DNA "direct". BOD "index" for indexed.' },
              '1(f)': { type: 'points',
                points: [
                  'Quicker / more efficient to translate',
                  'Makes more efficient use of the CPU / memory / system resources / where a system has limited resources',
                  'The programmer wants direct control over hardware / memory / to access machine-specific functionality',
                  'Code might be written for a specific architecture',
                  'Compilers / interpreters may not be available'
                ],
                guidance: 'Max 2. MP1 must be a comparison (e.g. "faster/quicker" not just "fast/quick").' },
              '1(g)': { type: 'points',
                points: [
                  'Allows more active / running / temporary data in RAM',
                  'It reduces the need to use virtual memory',
                  'RAM is faster to access than VM / secondary storage...',
                  '...because data in VM / SS has to be swapped with data in RAM first',
                  'Use of RAM rather than VM reduces the risk of disk thrashing',
                  'Faster bootup / shutdown time / reduces load / access time'
                ],
                guidance: 'Max 3.' },
              '2(a)': { type: 'points',
                points: [
                  'Heart rate sensor — detects athlete\'s electrical activity / heart rate',
                  'GPS receiver — mapping the athlete\'s movement / position / speed',
                  'Accelerometer / gyroscope / motion sensor — to track acceleration / speed / movement / counting steps / measuring orientation',
                  'Button — to allow the athlete to turn it on/off'
                ],
                guidance: '2 marks: 1 max for input device + 1 max for reason. Use must relate to the fitness tracker scenario.' },
              '2(b)': { type: 'points',
                points: [
                  'Durable / flash has no moving parts... so will be resistant to damage if the player runs / falls / collides',
                  'Low power usage... won\'t need recharging / will last during an event',
                  'Small physical size / portable... so it can fit on a shirt / be unobtrusive',
                  'Fast / real-time read/write speed... needed to rapidly record athlete\'s data'
                ],
                guidance: '4 marks: 1 for reason + 1 for expansion, max 2 reasons. DNA anything to do with capacity.' },
              '2(c)(i)': { type: 'points',
                points: [
                  'Contains the computer start-up instructions',
                  'Loads settings / configuration (CMOS / NVRAM)',
                  'Initialises / checks hardware / peripheral devices are available / work / carry out a POST check',
                  '...and reports errors',
                  'Determines the drive on which the OS is stored',
                  'Finds / loads the bootstrap / operating system / kernel (into main memory)'
                ],
                guidance: 'Max 3. DNA "boots up" on its own.' },
              '2(c)(ii)': { type: 'points',
                points: [
                  'Storing firmware / config / operating instructions / OS / device drivers... that can\'t be overwritten / doesn\'t need to be updated... so access is faster',
                  'Storing security settings / encryption keys / digital signatures... that must be maintained / can\'t be changed',
                  'Could be used as primary storage... so no need to load programs into memory... saving time loading',
                  'Could be used as secondary storage... so device will not need additional storage... reducing the size of the device'
                ],
                guidance: '2 marks: mark from ONE group to max 2.' },
              '2(d)(i)': { type: 'points',
                points: [
                  'Resource / memory management — moving data between RAM and secondary storage / virtual memory / paging-segmentation / allocating-deallocating memory',
                  'Manage hardware / peripherals — tracking all devices / device drivers',
                  'File management — storing / searching / copying / moving / renaming files / folders',
                  'Security / user management — controlling access to system / managing user profiles / access rights',
                  'Provide a user interface — allowing user to interact with software / hardware',
                  'Providing utilities — used to monitor / manage / maintain the computer / manage security',
                  'Providing a platform on which to run software — allows additional software to be installed'
                ],
                guidance: '4 marks: 2 marks from each group, max 4 (must be 2 distinct roles). DNA handle interrupts or manage scheduling.' },
              '2(d)(ii)': { type: 'exact',
                points: [
                  'Round Robin → C (fixed CPU time slice)',
                  'First come first served → D (equal priority, order of arrival)',
                  'Multi-level feedback queues → A (priority queues, can move between)',
                  'Shortest job first → B (shortest time, run until complete)',
                  'Shortest remaining time → E (shortest time, can be suspended)'
                ],
                guidance: '5 marks: 1 mark per correct match.' },
              '2(e)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of each cultural issue. Material accurate and detailed. Knowledge applied directly and consistently to context; evidence explicitly relevant. Covers all three points (layout, colour, character sets) and evaluates why it is important.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of most cultural issues. Knowledge applied to context with one or two missed opportunities. Covers at least two of layout/colour/character sets, expanded with cultural considerations.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of some cultural issues, basic and contains some inaccuracies. Some relevant points related to layout, colour and/or character sets; may not be linked to cultural considerations.' }
                ],
                indicative: {
                  'AO1 — Knowledge': 'Cultural issues are about how different groups of people with particular beliefs/practices/languages may be affected. Layout determines where items are placed on screen — what suits one country may not suit another. Colour: humans have personal perception; colour can confirm messages (e.g. success/fail) but can mean different things in different cultures. Character set: ASCII vs UNICODE etc.',
                  'AO2 — Application': 'Western audiences read left-to-right top-to-bottom; other cultures read right-to-left. Green = positive, red = negative in many Western contexts; can mean very different things elsewhere. ASCII (128–256 chars) suits English / European languages; not suitable for many world languages — characters wouldn\'t display.',
                  'AO3 — Evaluation': 'User interface must be usable and understandable by all audiences. Consider typical layout / colours / characters in different cultures; use icons rather than words for universal understanding. Designers could release different versions or allow settings to be changed so athletes can customise.'
                },
                guidance: '9 marks total. Accessibility / colour blindness are NOT relevant to context.' },
              '3(a)': { type: 'exact',
                points: [
                  'Creating graphics such as a logo: Graphics / image editing software',
                  'Writing letters to clients: Word processing software',
                  'Calculating the company profits: Spreadsheet / Accounting software',
                  'Storing, searching and updating client details: Database software',
                  'Creating brochures and flyers: Desktop publishing software / DTP'
                ],
                guidance: '5 marks: 1 per correct application software. Allow any sensible software (e.g. text editor for WP, photo/image editor for row 1, publication editor for DTP). DNA brand names alone — ignore brand name if application type is also given.' },
              '3(b)': { type: 'points',
                points: [
                  'Reduced hardware is needed on computers / reduced hardware costs',
                  'Improved security by keeping all software running from one physical device',
                  'Easier / cheaper to manage as only one physical device runs the programs',
                  'Can add / remove resources / memory / processes to the VM',
                  'If infected by malware it can be deleted and recreated / rest of system isn\'t affected',
                  'No direct access to hardware',
                  'Resources can be used more flexibly between machines'
                ],
                guidance: 'Max 1.' },
              '3(c)': { type: 'points',
                points: [
                  'Lossless will not permanently remove data',
                  'Lossless can be fully reconstructed / restored',
                  'Quality (of text/graphics/sound) is not lost',
                  'Any loss of text would be noticeable / would make it unreadable / unusable',
                  'Lossless rewrites data in a more efficient format'
                ],
                guidance: 'Max 3. Accept reverse points (e.g. "lossy will delete data permanently").' },
              '3(d)(i)': { type: 'points',
                points: [
                  'Combines / links code / programs to files / software libraries...',
                  '...to form a single executable file',
                  '(Allow valid description of static and/or dynamic linkers, e.g. "static linkers combine code and libraries into one file; dynamic linkers link/add addresses to libraries")'
                ],
                guidance: 'Max 2.' },
              '3(d)(ii)': { type: 'points',
                points: [
                  'It is part of the operating system',
                  'Loads an executable file (into memory)...',
                  '...from secondary storage',
                  'Loads the required software libraries'
                ],
                guidance: 'Max 2. Allow "loads applications / programs" for MP2.' },
              '4(a)(i)': { type: 'exact',
                points: ['1000 0100', '10000100'],
                guidance: '1 mark. CAO.' },
              '4(a)(ii)': { type: 'exact',
                points: ['Sign and magnitude', "One's complement"],
                guidance: '1 mark for sign-and-magnitude (A. one\'s complement).' },
              '4(b)': { type: 'exact',
                points: ['12A'],
                guidance: '2 marks. Must be in correct order. 1 mark for 12, 1 mark for A.' },
              '4(c)': { type: 'exact',
                points: ['-49.5', '−49.5'],
                guidance: '3 marks. Correct answer with any binary working = full marks. Mark scheme: convert exponent to 6, mantissa to 1001110.1 (moving binary point 6 right), answer −49.5.' },
              '4(d)': { type: 'exact',
                points: ['Mantissa 01011000, exponent 0100', '01011000 0100'],
                guidance: '4 marks. Correct mantissa and exponent with any binary working = full marks. Steps: reduce exponent to 4 (decrease by 3); new mantissa starts 01011...; written out to 8 bits = 01011000; new exponent 0100.' },
              '4(e)': { type: 'exact',
                points: ['1101 0000', '11010000'],
                guidance: '2 marks: 1 for 11010000 + 1 for correct working out / 6 carries shown. 0 marks for denary calculations with no carries shown.' },
              '5(a)': { type: 'points',
                points: [
                  'OR gate combining A and B (the two sensors)',
                  'AND gate combining (A OR B) with C (alarm set)',
                  'NOT gate on D (test mode), feeding into final AND',
                  'Final output: siren = ((A OR B) AND C) AND NOT D'
                ],
                guidance: '4 marks: 1 mark per correct area with labelled inputs. Max 3 if any additional gates. NOT gate must have only one input; AND/OR must have two inputs.' },
              '5(b)(i)': { type: 'exact',
                points: ['¬(A ∧ B)', '¬(A·B)', 'NOT (A AND B)', '!(A AND B)'],
                guidance: '1 mark for ¬(A ∧ B) or equivalent notation.' },
              '5(b)(ii)': { type: 'exact',
                points: ['B'],
                guidance: '1 mark for B (¬ must be in the correct way round to cancel).' },
              '5(b)(iii)': { type: 'exact',
                points: ['A v (B ∧ C)', 'A + (B·C)', 'A v BC'],
                guidance: '2 marks: 1 for A, 1 for v (B ∧ C). Allow either order: (B∧C) v A. Brackets not required.' },
              '6(a)': { type: 'levels',
                levels: [
                  { range: [9, 12], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of search indexing and page rank. Material accurate and detailed. Knowledge applied directly and consistently to context. Explains in detail how search indexing happens and the factors affecting PageRank, with clear evaluative points on how to improve PageRank.' },
                  { range: [5, 8], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of search indexing and page rank. Covers both topics, expanding information collected during indexing and PageRank factors. Some attempt to identify how to improve PageRank.' },
                  { range: [1, 4], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of search indexing or page rank; contains some inaccuracies. Some basic facts about indexing and/or PageRank; may not discuss improvements.' }
                ],
                indicative: {
                  'AO1 — Search engine indexing & PageRank': 'Search indexing: database of keywords with links to relevant pages; words stored with their position; spiders/crawlers crawl the web finding pages; navigate via hyperlinks; sent back to the search engine database; you search the providers\' database, not the live web. PageRank: ranks websites; more links from more important pages → higher rank; stored as a weighted directed graph (pages = nodes, hyperlinks = edges, weights from PageRank).',
                  'AO2 — Application': 'To improve presence: effective meta tags describing content; effective H1 tags; increase quantity and quality of incoming links (especially from high-PageRank sites); increase outgoing links; store keywords in meta/title/header tags; damping factor (assumption user follows limited number of links).',
                  'AO3 — Evaluation': 'PageRank is only one ranking algorithm. To improve presence consider who links to you (popular = better). Could partner with established websites for incoming links. Site must be malware-free / secure — affects PageRank.'
                },
                guidance: '12 marks total.' },
              '6(b)': { type: 'exact',
                points: [
                  'Loading the website HTML code: Client Side',
                  'Applying CSS styles to a website: Client Side',
                  'Running JavaScript code to check that the customer surname has been entered: Client Side',
                  'Running queries on the database to check stock: Server Side'
                ],
                guidance: '4 marks: 1 per correct row. Accept alternatives to ticks so long as it is clear which side is marked.' },
              '6(c)': { type: 'points',
                points: [
                  'A set of rules for communication / transmission / transfer of data between devices',
                  'The sending system has no direct control over the way the receiving system responds',
                  'Allows standardisation as different devices have different OS / hardware',
                  'Protocols allow data to be exchanged in a predictable way / in the correct format'
                ],
                guidance: '2 marks: 1 for "set of rules" + 1 max from the rest. Not "a rule" — must be plural. MP1 not "a set of instructions". MP1 accept "standards" / "an agreement".' },
              '6(d)': { type: 'points',
                points: [
                  'Router — connects networks together / assigns IP addresses / examines data packets and forwards them',
                  'Cable / Ethernet — carries digital data from one device / NIC to the next / connects wired devices',
                  'Gateway — connects different types of network / translates protocols from one network to another',
                  'Bridge — connects different network segments',
                  'Repeater — receives a signal and retransmits it',
                  'NIC (Network Interface Card) — gives each device a MAC address / allows a computer to interface with a network',
                  'WAP (Wireless Access Point) — allows wireless devices to communicate / sends and receives radio waves / examines and forwards data packets',
                  'Switch — connects multiple wired devices / receives data and forwards to intended recipient / routes based on MAC addresses',
                  'Hub — receives data from a device and broadcasts to all connected devices',
                  'Modem — changes signal from digital to analogue',
                  'Firewall — filters traffic coming in and out of a network',
                  'Proxy server — sits between user and computer to route requests / creates separation / hides IPs'
                ],
                guidance: '6 marks: 1 for hardware + 1 for expansion, 2 marks max each, total max 6 (so 3 different items × 2 marks). Allow any suitable expansion. Mark in pairs.' },
              '7': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of databases. Material accurate and detailed. Knowledge applied directly and consistently to Rosa\'s context. Covers benefits and drawbacks of both flat file and relational databases, relating to Rosa\'s needs, and evaluates why a relational database is most appropriate.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of databases. Covers features of both database types and expands with benefits, drawbacks, and Rosa\'s data set, though may not be balanced. Attempts to recommend a type.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of databases; basic facts about flat file and/or relational; may not be linked to Rosa\'s specific needs.' }
                ],
                indicative: {
                  'AO1 — Flat file vs Relational': 'Flat file: data in a single table, often plain text; benefits = easy to set up, all in one place; drawbacks = redundant data, slow searches, harder to manage/expand. Relational: data in multiple tables linked via primary/foreign keys; benefits = less duplication, easier to manage/expand, faster searches, more secure; drawbacks = more complex to set up, needs DBMS, more expensive.',
                  'AO2 — Application to Rosa': 'With 150 members, flat file is suitable; with 10 000 it becomes problematic. Lots of redundant data with bookings/appointments. More data → higher risk of inconsistency, lost integrity. Relational stores member details once, references by ID for each booking/appointment, easier to expand and normalise.',
                  'AO3 — Evaluation': 'Most suitable for Rosa = relational database. More complex and needs normalisation but stores less repeated data when the company expands, easier to maintain, expand, and keep secure.'
                },
                guidance: '9 marks total.' },
              '8(a)': { type: 'points',
                points: [
                  'Typed as array / string and set to the variable towns (e.g. array towns, string towns[][])',
                  '2 dimensions set to 8 and 3 in brackets (e.g. towns(8,3) or towns[8][3])'
                ],
                guidance: '2 marks. Examples: array towns(8,3); string towns[][] = new string[8][3]; array towns[8][3] as string. Allow 7, 2 as the array index (zero-indexed). Allow column-major notation (towns[3,8]).' },
              '8(b)(i)': { type: 'exact',
                points: [
                  'Row 0 (Sligo):     Left = 1,     Right = 3',
                  'Row 1 (Dublin):    Left = 2,     Right = 4',
                  'Row 2 (Cork):      Left = null,  Right = null',
                  'Row 3 (Waterford): Left = 6,     Right = null',
                  'Row 4 (Galway):    Left = 7,     Right = 5',
                  'Row 5 (Limerick):  Left = null,  Right = null',
                  'Row 6 (Tralee):    Left = null,  Right = null',
                  'Row 7 (Dundalk):   Left = null,  Right = null'
                ],
                guidance: '4 marks. Allow −1 or 0 for null. FT for 0/blank used as null after the first error.' },
              '8(b)(ii)': { type: 'exact',
                points: [
                  'Mallow added to left of Dundalk (or right of Cork) per BST rules',
                  'Cavan added to left of Cork',
                  'Tuam added to right of Tralee',
                  'Wexford added to left of Tralee (or to right of Limerick) per BST rules'
                ],
                guidance: '4 marks: 1 per correctly-placed town. Ignore basic spelling mistakes and case. Towns must be to left or right of the node above (DNA "straight below"). If same town added more than once, BOD if one is in the right place.' },
              '9': { type: 'points',
                points: [
                  'Suitable logic for class Dog declaration',
                  'Suitable logic to define the 4 (private) attributes: name, breed, height, weight',
                  'Suitable logic to declare a public method for constructor (e.g. new or class name)...',
                  '...taking only 4 different parameters in any order',
                  'Suitable logic to set the values of each attribute'
                ],
                guidance: '5 marks: 1 per bullet. Ignore data types in attribute names. Allow colon/empty brackets at end of class def. For Python: allow the extra 5th parameter representing the object (self) as the first parameter. For Python: MP2 can be considered implicitly met if attributes are set in the constructor (Python doesn\'t require attribute declaration outside the constructor).' },
              '10(a)': { type: 'points',
                points: [
                  'Allows for mass surveillance of communications',
                  "Allows the monitoring of an individual's internet activities / history",
                  'Allows covert surveillance to be carried out',
                  'Can demand access to protected data',
                  'Can demand that ISPs / businesses give access to customer communications / history',
                  'Can demand that ISPs / businesses install equipment that facilitates surveillance',
                  'Can demand that encryption keys are handed over / force individuals to decrypt data',
                  'Can keep existence of searches and findings private in court'
                ],
                guidance: 'Max 3.' },
              '10(b)': { type: 'points',
                points: [
                  'Data must be processed fairly / lawfully',
                  'Data must be adequate / relevant / not excessive',
                  'Data must be accurate and (where necessary) up to date',
                  'Data must not be retained for longer than necessary',
                  'Data can only be used for the purpose for which it was collected',
                  'Data must be kept secure',
                  'Data must be processed in accordance with people\'s rights',
                  'Data must not be transferred outside the EU without adequate protection',
                  'Right to see their own data / change if incorrect'
                ],
                guidance: 'Max 3.' }
            }
          },
          {
            id: 'cs-ocr-h446-2024-p2',
            year: 'June 2024',
            paperName: 'Paper 2 — Algorithms and Programming',
            paperCode: 'H446/02',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/726572-question-paper-algorithms-and-programming.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/726742-mark-scheme-algorithms-and-programming.pdf',
            questions: [
              {
                number: 1,
                scenario: "A student has written this program:\n\n    01  a = 12\n    02  do\n    03      b = input(\"Enter a number\")\n    04  until b >= 0 and b <= 100\n    05  for c = 1 to a\n    06      print(c * a)\n    07  next c",
                parts: [
                  { code: '1(a)(i)', prompt: "Describe what is meant by a variable.", marks: 2 },
                  { code: '1(a)(ii)', prompt: "Give the identifiers of all the variables used in this program.", marks: 1 },
                  { code: '1(b)',
                    preamble: "The student has used a do loop on line 02.",
                    prompt: "Describe the difference between a do loop and a while loop.", marks: 2 },
                  { code: '1(c)', prompt: "Rewrite lines 05 to 07 to use a while loop instead of a for loop.\n\nYou should write your answer using either program code or pseudocode.", marks: 4 }
                ]
              },
              {
                number: 2,
                parts: [
                  { code: '2', extended: true,
                    preamble: "A company runs a Virtual Learning Environment (VLE). Schools register students; each school has up to 1000 students; there are over 10 000 schools registered. Students watch videos, take quizzes and communicate using forums and online chat. The company gathers a large amount of data and wants to use data mining to help improve the VLE.",
                    prompt: "Discuss how the company can use data mining to decide how to improve the VLE.\n\nYou should include:\n  • the characteristics of data mining\n  • the benefits of data mining in this scenario\n  • the drawbacks of data mining in this scenario.", marks: 12 }
                ]
              },
              {
                number: 3,
                scenario: "A computer game has a building containing 7 rooms (A–G). Fig. 3 represents the rooms and the passages between them as a weighted graph. Heuristic values below each node (the bold numbers):\n    A=90, B=80, C=43, D=70, E=20, F=8, G=0\n\nWeighted edges (approximate, see QP for diagram):\n    A–B = 20, A–C = 44, B–D = 13, C–E = 22, D–E = 56,\n    D–G = 80, D–F = 62, E–F = 20, F–G = 15 (and others — see QP)",
                parts: [
                  { code: '3(a)',
                    preamble: "The number in bold below each node in Fig. 3 is the heuristic value.",
                    figure: { type: 'table', label: 'A* working table (complete one row per node)',
                      headers: ['Node', 'Distance travelled', 'Heuristic', 'Distance + Heuristic', 'Previous node'],
                      rows: [['A','','','',''], ['B','','','',''], ['C','','','',''], ['D','','','',''], ['E','','','',''], ['F','','','',''], ['G','','','','']] },
                    prompt: "Perform an A* algorithm on the graph in Fig. 3 to find the shortest path from A to G.\n\nShow your working, the nodes visited and the distance.", marks: 7 },
                  { code: '3(b)', prompt: "State four ways that a graph data structure is different from a tree data structure.", marks: 4 },
                  { code: '3(c)', extended: true,
                    preamble: "The final game will involve multiple computer-controlled characters and interactive elements that make use of AI to determine moves. The AI will use heuristics.",
                    prompt: "Discuss how heuristics can be used in algorithms.\n\nYou should include:\n  • the purpose of heuristics\n  • the benefits and drawbacks of heuristics\n  • the suitability of heuristics in algorithms within a computer game.", marks: 9 }
                ]
              },
              {
                number: 4,
                scenario: "The current contents of a queue data structure (Fig. 4):\n\n    [20] [15] [3] [2]\n     ^                ^\n  headPointer    tailPointer",
                parts: [
                  { code: '4(a)', prompt: "State the purpose of headPointer and tailPointer in the queue shown in Fig. 4.", marks: 2 },
                  { code: '4(b)',
                    preamble: "enqueue will add data to the queue. dequeue will remove data from the queue.",
                    prompt: "Show the contents of the queue and the position of both pointers after the following actions in order:\n  • enqueue(20)\n  • dequeue()\n  • dequeue()", marks: 2 },
                  { code: '4(c)',
                    preamble: "The queue is used to store ID numbers of jobs that a program needs to process. Some jobs will be given a priority which means they need to be processed first.",
                    prompt: "Explain why this queue is not a suitable data structure for this program.", marks: 2 }
                ]
              },
              {
                number: 5,
                scenario: "The contents of a stack are stored in a 1-dimensional array called numbers. topStack stores the index of the next free space. The array has space for 100 elements.",
                parts: [
                  { code: '5(a)', prompt: "The function pop() returns the next item from the stack and updates the appropriate pointers. Describe the steps in the function pop().", marks: 4 },
                  { code: '5(b)',
                    preamble: "Complete the function push() using pseudocode or program code:\n\n    function push(______)\n        if ______ != 100 then\n            numbers[______] = dataValue\n            topStack = topStack + ______\n            return true\n        else\n            return false\n        endif\n    endfunction",
                    prompt: "Fill in the four blanks (the parameter name, the value being compared with 100, the index used to write to the array, and the increment).", marks: 4 },
                  { code: '5(c)', prompt: "Write an algorithm, using pseudocode or program code, to call the function push() with the value 15 and output \"Added\" if successful or \"Not Added\" if the stack is full.", marks: 4 }
                ]
              },
              {
                number: 6,
                scenario: 'The following strings are stored in an array:\n\n    "rainbow" "moon" "sun" "stars" "clouds" "tornado"',
                parts: [
                  { code: '6(a)', prompt: 'Explain how a linear search would search the array for the index that stores "clouds".', marks: 3 },
                  { code: '6(b)', prompt: "State why a binary search cannot be used in this example.", marks: 1 },
                  { code: '6(c)', prompt: "Show how an insertion sort will sort the given data into ascending alphabetical order.\n\n(List each pass showing the array contents — indicate which passes change values.)", marks: 5 },
                  { code: '6(d)(i)',
                    preamble: "A sorting algorithm has a best time complexity of O(n).",
                    prompt: "Describe what is meant by the best time complexity O(n) for a sorting algorithm.", marks: 2 },
                  { code: '6(d)(ii)',
                    preamble: "Another sorting algorithm has a worst space complexity of O(log(n)).",
                    prompt: "Describe what is meant by the worst space complexity O(log(n)) for a sorting algorithm.", marks: 2 },
                  { code: '6(d)(iii)', prompt: "Identify the time complexity that means the time will not change even when the number of items increases.", marks: 1 },
                  { code: '6(d)(iv)', prompt: "Identify the space complexity that means the amount of memory (space) used will double each time a new item is included.", marks: 1 }
                ]
              },
              {
                number: 7,
                scenario: "A computer game stores tasks that the player has requested. Each task has:\n  • an identification (ID) number (e.g. Task A)\n  • a real number to be processed (e.g. 123456.789)\n  • an integer to represent the order the tasks should be accessed (e.g. 1; 1 = earliest).\nTwo or more tasks can have the same order number.",
                parts: [
                  { code: '7(a)',
                    preamble: "Each task will store an ID number, data value and order number.",
                    prompt: "Explain why a record data structure is suitable for this data.", marks: 2 },
                  { code: '7(b)(i)',
                    preamble: "The tasks will be stored in a binary search tree before they are processed, in ascending order by their order number.",
                    prompt: "Give two characteristics of a binary search tree.", marks: 2 },
                  { code: '7(b)(ii)', prompt: "Give an advantage of storing the tasks in a binary search tree instead of a 1-dimensional array.", marks: 1 },
                  { code: '7(b)(iii)',
                    figure: { type: 'table', label: 'Tick one column per row (Depth-first post-order / Breadth-first / Neither)',
                      headers: ['Statement', 'Depth-first (post-order)', 'Breadth-first', 'Neither'],
                      rows: [
                        ['All nodes at the current depth are visited before moving to the next depth', '', '', ''],
                        ['The algorithm traverses to the end of one branch before moving to another branch', '', '', ''],
                        ['The algorithm will make use of backtracking', '', '', ''],
                        ['The traversal can be used to output the contents of the tree in ascending order', '', '', ''],
                        ['The algorithm will output the root node last', '', '', '']
                      ] },
                    prompt: "Tick one column in each row to identify whether each statement applies to a depth-first (post-order) tree traversal, a breadth-first tree traversal, or neither of these two traversals when performed on a binary search tree.", marks: 5 },
                  { code: '7(b)(iv)',
                    preamble: "Current BST contents (order shown next to each task):\n\n                            Task A (Order 6)\n                           /              \\\n               Task B (Order 3)        Task D (Order 9)\n              /          \\              /            \\\n        Task E (Ord 1)  Task C (5)  Task F (7)   Task H (10)\n        /                              \\\n   Task I (Ord 2)                  Task G (Order 6 — same as A, classed higher)\n\nWhen a new task is inserted with the same order number as a pre-existing task, it is classed as having a higher order number.",
                    prompt: "Describe where the following tasks are inserted into the BST, in this order:\n  • Task X with order number 12\n  • Task Y with order number 7\n  • Task Z with order number 11", marks: 3 }
                ]
              },
              {
                number: 8,
                scenario: "A group of students are designing a racing car game. The game will allow players to enter their name and then a choice of vehicle. They will then race against other vehicles that will be controlled by the program. Players will use the arrow keys to control their vehicle.",
                parts: [
                  { code: '8(a)',
                    figure: { type: 'table', label: 'Inputs and outputs (2 of each)',
                      headers: ['Input/Output', 'Description'],
                      rows: [['Input 1', ''], ['Input 2', ''], ['Output 1', ''], ['Output 2', '']] },
                    prompt: "Complete the table by identifying two inputs and two outputs for the game.", marks: 4 },
                  { code: '8(b)(i)',
                    preamble: "The students use abstraction during the design process.",
                    prompt: "State what is meant by abstraction and describe how it can be used to design the racing car game.", marks: 3 },
                  { code: '8(b)(ii)', prompt: "Explain why it is beneficial to use abstraction when designing a computer program such as a game.", marks: 3 },
                  { code: '8(c)(i)',
                    preamble: "The group of students also use decomposition.",
                    prompt: "State what is meant by decomposition.", marks: 1 },
                  { code: '8(c)(ii)', prompt: "Describe one benefit of using decomposition when designing a computer program such as a game.", marks: 2 }
                ]
              },
              // ── SECTION B (40 marks)
              {
                number: 9,
                scenario: "A game is being written that makes use of object-oriented programming. A prototype for one part of the game is being designed: a character, a road and a prize to collect.\n\nThe road will have 50 spaces that a character can move along. Each space will store a null value or a prize object. Spaces are numbered sequentially from 0 to 49 and won't change during the game. As the player travels down the road, the position is output.",
                parts: [
                  { code: '9(a)',
                    preamble: "The road is designed as a 1-dimensional array with identifier road.",
                    prompt: "Explain why an array is a suitable data structure to represent the road.", marks: 3 },
                  { code: '9(b)(i)',
                    preamble: "The class design for Prize:\n\n    class: Prize\n    attributes:\n        private name : string\n        private type : string\n        private value : integer\n    methods:\n        new()\n        getName()\n        getType()\n        getValue()\n\nnew() is the constructor — name, type and value are passed in and assigned to the attributes.",
                    prompt: "The method getName() returns the data in the attribute name. Write the method getName() using pseudocode or program code.", marks: 2 },
                  { code: '9(b)(ii)',
                    preamble: "A global 1-D array allPrizes stores 10 objects of type Prize. The prize at index 3 has name \"Box\", type \"money\" and value 25.",
                    prompt: "Write pseudocode or program code to create a new object for this prize and store it in index 3 of allPrizes.", marks: 3 },
                  { code: '9(b)(iii)',
                    preamble: "The game starts with 10 prizes. Each prize is allocated to one space on the road; each road space can only store one prize.",
                    prompt: "Describe the decisions that will need to be made in the algorithm that randomly assigns each prize to a unique road space, and how these decisions affect the program flow.", marks: 3 },
                  { code: '9(c)(i)', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# OCR H446/02 June 2024 Q9(c)(i) — Character constructor\n# class: Character\n# attributes: private name, private money, private experience, private roadPosition\n# Constructor takes the name as a parameter; initialises:\n#   experience = 0, roadPosition = 0, money = 5\n\nclass Character:\n    # TODO: write the constructor method (only).\n    pass\n\n\n# ── Test driver (do not modify) ──\np = Character('Jamal')\nprint(f\"Name: {getattr(p, '_Character__name', getattr(p, 'name', '?'))}\")\nprint(f\"Money: {getattr(p, '_Character__money', getattr(p, 'money', '?'))}\")\nprint(f\"Experience: {getattr(p, '_Character__experience', getattr(p, 'experience', '?'))}\")\nprint(f\"Road position: {getattr(p, '_Character__roadPosition', getattr(p, 'roadPosition', '?'))}\")\nprint(\"Expected: Name=Jamal, Money=5, Experience=0, Road position=0\")\n"
                    },
                    testInputs: [],
                    preamble: "Full class design for Character:\n\n    class: Character\n    attributes: private name, private money, private experience, private roadPosition\n    methods: new(), getName(), getMoney(), getExperience(), getRoadPosition(),\n             changePosition(), updateValues()\n\nThe constructor takes a name parameter. It initialises experience and roadPosition to 0 and money to 5.",
                    prompt: "Write the constructor method for Character using either pseudocode or program code. You do not need to declare the class, the attributes or any other methods.\n\nClick ▶ Run. A correct implementation prints Name=Jamal, Money=5, Experience=0, Road position=0.", marks: 5 },
                  { code: '9(c)(ii)', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# OCR H446/02 June 2024 Q9(c)(ii) — updateValues method\n# Takes two parameters: pType (string), pValue (integer)\n#   If pType is \"money\":      add pValue to character's money\n#   If pType is \"experience\": add pValue to character's experience\n#   Otherwise: no change\n\nclass Character:\n    def __init__(self):\n        self.money = 100\n        self.experience = 50\n    \n    # TODO: write updateValues(self, pType, pValue).\n\n\n# ── Test driver (do not modify) ──\np = Character()\np.updateValues('money', 10)\nprint(f\"After money+10: Money={p.money}  (expected 110)\")\np.updateValues('experience', 5)\nprint(f\"After exp+5:    Experience={p.experience}  (expected 55)\")\np.updateValues('foo', 9)\nprint(f\"After foo+9:    Money={p.money} Experience={p.experience}  (expected unchanged: 110 / 55)\")\n"
                    },
                    testInputs: [],
                    preamble: "The type and value of a prize are passed as parameters to updateValues(pType, pValue). If pType is \"money\" the value is added to money; if \"experience\" the value is added to experience; otherwise no changes.",
                    prompt: "Write pseudocode or program code for the method updateValues().\n\nClick ▶ Run. A correct implementation prints:\n  After money+10: Money=110\n  After exp+5:    Experience=55\n  After foo+9:    Money=110 Experience=55", marks: 5 },
                  { code: '9(d)',
                    preamble: "Incomplete pseudocode that:\n  • creates a new character named Jamal\n  • loops until the character reaches the end of the road\n  • generates a random number of spaces to move (1–4 inclusive)\n  • moves the character and checks if the new space has a prize\n  • updates the character if there is a prize\n  • outputs the character's new attribute values\n\n    character1 = new ______(\"Jamal\")\n    newPosition = 0\n    while newPosition < ______\n        move = random(1, 4)\n        character1.changePosition(move)\n        newPosition = character1.getRoadPosition()\n        if newPosition < 50 and road[______] != null then\n            prizeType = road[newPosition].getType()\n            valueAmount = road[newPosition].getValue()\n            character1.updateValues(______, valueAmount)\n            print(\"Congratulations you are in position\", newPosition, \"and found\", road[newPosition].getName())\n            print(\"Money =\", character1.getMoney(), \"and experience =\", character1.______())\n        endif\n    ______\n    print(\"You reached the end of the road\")",
                    prompt: "Complete the pseudocode by filling in the six blanks (class name, loop upper bound, road index inside the if, parameter to updateValues, getExperience call, and the loop terminator).", marks: 6 },
                  { code: '9(e)',
                    preamble: "The procedure displayRoad() outputs the contents of each space. The number of each space is output with either \"empty\" if there is no prize, or the name of the prize otherwise.\n\n    01 procedure displayRoad()\n    02     for x = 0 to 60\n    03     print(\"Space\", y)\n    04     if road[x] == null then\n    05         print(\"empty\")\n    06     elseif\n    07         print(road[x].getValue())\n    08     endif\n    09     next x\n    10 endprocedure\n\nThe algorithm contains errors.",
                    prompt: "Give the line number of four different errors and write the corrected line for each. (Format: Line N: <corrected line>)", marks: 4 },
                  { code: '9(f)', extended: true,
                    preamble: "A programmer is going to create a prototype for one small part of the game. Both road and allPrizes will be needed throughout the whole prototype. The programmer is considering making these global arrays as she thinks it will reduce development time. Another programmer has suggested this may create some problems when the rest of the game is created at a later stage.",
                    prompt: "Compare the use of global and local variables in this program.\n\nYou should include:\n  • the use of local and global variables\n  • alternative methods to using global variables\n  • the appropriateness of each to this program design.", marks: 9 }
                ]
              }
            ],
            markSchemes: {
              '1(a)(i)': { type: 'points',
                points: [
                  'A named location in memory',
                  'Used to store data / a value',
                  'Whose value can change while the program is running'
                ],
                guidance: '2 marks: 1 per bullet (max 2).' },
              '1(a)(ii)': { type: 'exact',
                points: ['a, b, c'],
                guidance: '1 mark for all three (a, b, c).' },
              '1(b)': { type: 'points',
                points: [
                  'A do (do-until) loop checks the condition AFTER executing the body, so the body always runs at least once',
                  'A while loop checks the condition BEFORE executing the body, so the body may not run at all',
                  'Do loops are typically condition-controlled at the end; while loops are condition-controlled at the start'
                ],
                guidance: '2 marks: 1 for "do runs body first / while checks first", 1 for the consequence (at-least-once vs zero-or-more).' },
              '1(c)': { type: 'points',
                points: [
                  'Initialise the counter (e.g. c = 1)',
                  'while c <= a (or c < a + 1 etc.) — condition correct',
                  'print(c * a) inside the loop',
                  'Increment counter inside the loop (c = c + 1)'
                ],
                guidance: '4 marks: 1 per bullet. Accept c = 0 with adjusted bound. Off-by-one errors lose the condition mark.' },
              '2': { type: 'levels',
                levels: [
                  { range: [9, 12], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of data mining; accurate and detailed. Knowledge applied directly and consistently to context, with explicitly relevant evidence. Well-developed line of reasoning.' },
                  { range: [5, 8], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of data mining; generally accurate. Knowledge applied to context with one or two missed opportunities. Reasonable discussion, mostly focused.' },
                  { range: [1, 4], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of data mining; some inaccuracies. Limited attempt to apply knowledge to context.' }
                ],
                indicative: {
                  'AO1 — Characteristics of data mining': 'Process of analysing large datasets to identify patterns/trends/correlations. Uses techniques like classification, clustering, regression, association rules. Often requires large volumes of data.',
                  'AO2 — Application to VLE': 'Could identify which videos / quizzes / forums are most/least used; trends across schools (small vs large); time-of-day usage; common dropout points in courses; correlations between quiz scores and forum participation; identify struggling students.',
                  'AO3 — Benefits & drawbacks': 'Benefits: improve features students use most (more revenue); identify unused features → redirect dev resources; better resource allocation; predict student behaviour; tailor content. Drawbacks: data mining can find correlations without explaining causation (extra research needed); privacy concerns about logging activity; requires powerful hardware; legality / T&Cs; analysis costs (may need external company); security of collected data.'
                },
                guidance: '12 marks total. Best-fit by overall quality.' },
              '3(a)': { type: 'exact',
                points: [
                  'Node A: distance 0, heuristic 90, total 90, previous N/A',
                  'Node B: distance 20, heuristic 80, total 100, previous A',
                  'Node C: distance 44, heuristic 43, total 87, previous A',
                  'Node D: distance 128, heuristic 70, total 198, previous E',
                  'Node E: distance 66, heuristic 20, total 86, previous C',
                  'Node F: distance 81, heuristic 8, total 89, previous E',
                  'Node G: distance 90, heuristic 0, total 90, previous F',
                  'Final path: A → C → E → F → G, distance = 90'
                ],
                guidance: '7 marks: 1 per correct row of the working table, max 6 + 1 mark for final path / distance. For Row A allow N/A, None, Null, − or blank.' },
              '3(b)': { type: 'points',
                points: [
                  'Trees have one root node // graphs do not have a root node',
                  'Trees do not allow cycles / loops // graphs do allow cycles / loops',
                  'Trees store hierarchy // graphs have no hierarchy',
                  'Trees are always undirected // graphs can be directed',
                  'Trees are always connected // graphs can be connected or disconnected'
                ],
                guidance: '4 marks: 1 per difference, max 4. Do NOT allow responses related to weighted/unweighted.' },
              '3(c)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of heuristics; accurate and detailed. Knowledge applied directly and consistently to the computer-game context; explicitly relevant evidence. Well-developed line of reasoning.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of heuristics. Knowledge applied to context with one or two missed opportunities.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of heuristics; some inaccuracies. Limited attempt to apply knowledge to context.' }
                ],
                indicative: {
                  'AO1 — Purpose of heuristics': 'Reduce time taken to solve a problem. A general "rule of thumb" or educated guess. Finds a solution that is "good enough" / close to the best solution. A weight added to a node/decision. E.g. used in A* algorithm as estimate of distance to destination.',
                  'AO2 — Benefits & drawbacks': 'Reduce time complexity (every possibility doesn\'t need to be examined). Require skill to implement effectively. Used in AI when exact steps can\'t be pre-programmed. Due to time-saving, not always accurate — solution might not be the most efficient.',
                  'AO3 — Suitability in a computer game': 'More appropriate with complex time-critical tasks (some game aspects need faster decisions). More appropriate with large-scale tasks (game could be large; AI algorithms may need shortening). Games are not life-critical — a "good enough" answer is usually enough. Avoid programs running indefinitely — in a game there could be too many possibilities, so heuristics terminate with a solution faster.'
                },
                guidance: '9 marks total.' },
              '4(a)': { type: 'points',
                points: [
                  'headPointer — identifies the first item/element in the queue / identifies which item to dequeue / remove next',
                  'tailPointer — identifies the next free space in the queue / identifies where the next item will be enqueued / added'
                ],
                guidance: '2 marks: 1 per pointer.' },
              '4(b)': { type: 'exact',
                points: [
                  'Contents (after enqueue(20), dequeue, dequeue): [_, _, 3, 2, 20]',
                  'headPointer now at index 2 (pointing to "3")',
                  'tailPointer now at index 5 (next free, after "20")'
                ],
                guidance: '2 marks: 1 for correct queue elements + 1 for both pointers in correct positions. Allow 20 and 15 in place but crossed out, OR allow 20 and 15 in place only if both pointers are correctly placed.' },
              '4(c)': { type: 'points',
                points: [
                  'A queue is a FIFO structure / elements processed in the order entered — priority can\'t be enforced',
                  'A queue will not allow new data to be inserted at the front / only allows new data to be enqueued at the rear',
                  'The queue contents cannot be resequenced / sorted without rewriting'
                ],
                guidance: 'Max 2.' },
              '5(a)': { type: 'points',
                points: [
                  'Check if the stack is empty / check topStack is equal to 0',
                  '...and if so return a suitable value (e.g. -1 / null) / do nothing / give warning',
                  '(If not empty) decrement topStack',
                  'Return the value in element topStack from the array numbers'
                ],
                guidance: '4 marks: 1 per bullet. Do not award BP3 if a value has been returned from the function before BP4.' },
              '5(b)': { type: 'exact',
                points: [
                  'function push(dataValue)',
                  'if topStack != 100 then',
                  'numbers[topStack] = dataValue',
                  'topStack = topStack + 1'
                ],
                guidance: '4 marks: 1 per completed statement.' },
              '5(c)': { type: 'points',
                points: [
                  'Calling push() with parameter 15',
                  '...storing/using return value in selection',
                  '...comparing true/false (may be implicit, e.g. if push(15) then ...)',
                  '...outputting a suitable message ("Added" if true, "Not Added" if false)'
                ],
                guidance: '4 marks. True/False comparisons must be Boolean values and not strings (but allow FT after that). If push() is called twice BP4 cannot be awarded.' },
              '6(a)': { type: 'points',
                points: [
                  'Compare the first element (rainbow) to search item (clouds)',
                  'If it is equal to the search item, return index / found',
                  'If it is not equal, move to the next element',
                  'Repeat until either search item (clouds) is found OR the end of the list has been reached'
                ],
                guidance: 'Max 3. Allow answers by example from the given dataset.' },
              '6(b)': { type: 'exact',
                points: ['The data is not in order / sorted', 'Data is not sorted'],
                guidance: '1 mark.' },
              '6(c)': { type: 'exact',
                points: [
                  'Pass 1: moon rainbow sun stars clouds tornado (values changed)',
                  'Pass 2: moon rainbow sun stars clouds tornado (no change)',
                  'Pass 3: moon rainbow stars sun clouds tornado (values changed)',
                  'Pass 4: clouds moon rainbow stars sun tornado (values changed — clouds moves all the way to front)',
                  'Pass 5: clouds moon rainbow stars sun tornado (no change)'
                ],
                guidance: '5 marks: 5 lines showing the insertion-sort passes. If descending order shown, max 4. MP1, MP3, MP4 are lines showing a change of values; MP2, MP5 do not have to be explicitly given in full if there is a comment to identify no change occurred during the pass. 0 marks if not an insertion sort.' },
              '6(d)(i)': { type: 'points',
                points: [
                  'Linear',
                  'The time will (increase) in direct proportion to the number of items'
                ],
                guidance: '2 marks: 1 for "linear" + 1 for the proportionality.' },
              '6(d)(ii)': { type: 'points',
                points: [
                  'Logarithmic',
                  'The additional memory space required grows at a decreasing rate as the number of items increases'
                ],
                guidance: '2 marks.' },
              '6(d)(iii)': { type: 'exact',
                points: ['Constant', 'O(1)'],
                guidance: '1 mark.' },
              '6(d)(iv)': { type: 'exact',
                points: ['Exponential', 'O(2ⁿ)', 'O(Kⁿ)'],
                guidance: '1 mark.' },
              '7(a)': { type: 'points',
                points: [
                  'Can store multiple items of data under one identifier — so all data about a task can be accessed using the same identifier',
                  'Can store data of different data types — this task has string, real and integer fields'
                ],
                guidance: 'Max 2 for justification.' },
              '7(b)(i)': { type: 'points',
                points: [
                  'Each node can have 0, 1 or 2 child nodes / a maximum of 2 child nodes',
                  'Nodes are ordered (with left nodes less than the parent and right nodes greater)',
                  'The location to which a node is added depends on its order'
                ],
                guidance: 'Max 2.' },
              '7(b)(ii)': { type: 'points',
                points: [
                  'Searching is faster (O(log n))',
                  'Inserting new tasks is faster',
                  'Do not need to sort the structure each time a new task is inserted'
                ],
                guidance: '1 mark.' },
              '7(b)(iii)': { type: 'exact',
                points: [
                  'All nodes at current depth visited before next depth → Breadth-first',
                  'Traverses to end of one branch before moving → Depth-first (post-order)',
                  'Algorithm makes use of backtracking → Depth-first (post-order)',
                  'Used to output contents in ascending order → Neither (this is in-order, not post-order)',
                  'Algorithm outputs the root node last → Depth-first (post-order)'
                ],
                guidance: '5 marks: 1 per correct row.' },
              '7(b)(iv)': { type: 'exact',
                points: [
                  'Task Y (order 7) — added to the RIGHT of Task F (order 7 — since Y is classed higher than F)',
                  'Task X (order 12) — added to the RIGHT of Task H (order 10)',
                  'Task Z (order 11) — added to the LEFT of Task X (since 11 < 12)'
                ],
                guidance: '3 marks: 1 per correctly-placed task. The direction (left/right) must be clear; cannot just be a downward vertical line.' },
              '8(a)': { type: 'points',
                points: [
                  'Input: Entering a name',
                  'Input: Selecting a vehicle',
                  'Input: Pressing arrow key to move (forward/backward/left/right)',
                  'Output: Images of vehicles to choose from',
                  'Output: Background of area',
                  'Output: Image of other vehicles',
                  'Output: Image of controls and description of what they do'
                ],
                guidance: '4 marks: 1 per input to max 2 + 1 per output to max 2. Allow any feasible input/output for the scenario.' },
              '8(b)(i)': { type: 'points',
                points: [
                  'Definition: Removal of unnecessary detail',
                  'Example: simplifying scenery',
                  'Example: removing internal features of a vehicle that are not needed',
                  'Example: simplifying physics for vehicle movement',
                  'Example: vehicles may not be drawn to scale'
                ],
                guidance: '3 marks: 1 for definition + 1 each for example of use to max 2 (3 overall). Allow 2 marks for a valid example with expansion (e.g. "simplify track (1) by taking out the bumps in the road (1)").' },
              '8(b)(ii)': { type: 'points',
                points: [
                  'Simplifies the problem / algorithm / programming code',
                  'Faster to create the program code',
                  'Final program uses less memory / processor time',
                  'Programmer can focus on core aspects of the game',
                  'Completed game will be simpler for end users to understand / play'
                ],
                guidance: 'Max 3. Do not accept a reiteration of a definition of abstraction.' },
              '8(c)(i)': { type: 'exact',
                points: ['Splitting the problem down into smaller (sub) problems'],
                guidance: '1 mark.' },
              '8(c)(ii)': { type: 'points',
                points: [
                  'To break the problem down into individual components / see which components can be tackled concurrently',
                  'Identify any reusable program elements / to avoid creating the same algorithm twice',
                  'Split the program between individuals / so they can focus on individual elements / their speciality',
                  'Identify the subroutines and how they will interact / so everyone knows the requirements for their part',
                  'Easier to tackle/focus on one smaller problem at a time / simplifies writing/testing code'
                ],
                guidance: 'Max 2.' },
              '9(a)': { type: 'points',
                points: [
                  'Has a set/fixed number of values... and the number of spaces in the road will not change',
                  'Stores data of one type... as the array is only made up of prize objects',
                  'Stores data linearly... match the linear nature of the road',
                  'Array contents are mutable... so prizes can be added/removed from the road',
                  'A single identifier is used to directly index... any position in the road',
                  'Can be iterated by index... to perform an operation on all road positions'
                ],
                guidance: 'Max 3. Max 2 for generic answers with no relation to scenario.' },
              '9(b)(i)': { type: 'points',
                points: [
                  'Function / subroutine with identifier getName taking no parameters',
                  'Returning name'
                ],
                guidance: '2 marks. Do not award BP1 for procedure or method (must return a value). Allow self as additional parameter for Python. If an access modifier is given for the method, it must be public.' },
              '9(b)(ii)': { type: 'points',
                points: [
                  'New instance of Prize',
                  '...with "Box", "money" and 25 as parameters (in any order)',
                  'Assigned to allPrizes index 3'
                ],
                guidance: '3 marks. "Box" and "money" must be strings; 25 must be an integer. Allow prize.new() as new is given as the constructor method.' },
              '9(b)(iii)': { type: 'points',
                points: [
                  'Decision — check whether the space already has a prize allocated',
                  'Action if true — another space/number will need to be generated',
                  'Action if false — the prize will be stored here',
                  'Decision — check if all 10 prizes have been allocated',
                  'Action if true — the algorithm needs to stop generating numbers',
                  'Action if false — a new number/space needs to be generated and checked'
                ],
                guidance: 'Max 3 (1 for stating a decision, 1 for action if true, 1 for action if false — per decision).' },
              '9(c)(i)': { type: 'points',
                points: [
                  'Constructor header (any suitable name e.g. new, constructor, create, __init__)',
                  '...taking one parameter only (or two if one is self in Python)',
                  'Initialising name to the parameter',
                  'Initialising money to 5',
                  'Initialising experience to 0 AND roadPosition to 0'
                ],
                guidance: '5 marks: 1 per bullet. Parameter name should be different from the attribute name (e.g. pName).' },
              '9(c)(ii)': { type: 'points',
                points: [
                  'Procedure / method header (do NOT allow Function for BP1)',
                  '...taking two parameters, type (or similar) followed by value (or similar) — order must match',
                  '...compare type parameter with "money"',
                  '...compare type parameter with "experience"',
                  '...both attributes updated correctly AND nothing else modified for any other type'
                ],
                guidance: '5 marks: 1 per bullet. "money" and "experience" must be string values.' },
              '9(d)': { type: 'exact',
                points: [
                  'Blank 1: Character (the class name)',
                  'Blank 2: 50 (the road length)',
                  'Blank 3: newPosition (the road index)',
                  'Blank 4: prizeType (the type parameter)',
                  'Blank 5: getExperience (the method call)',
                  'Blank 6: endwhile (the loop terminator)'
                ],
                guidance: '6 marks: 1 per completed space. Allow road.length / len(road) instead of 50; allow <=49 instead of < 50.' },
              '9(e)': { type: 'exact',
                points: [
                  'Line 02 corrected: for x = 0 to 49',
                  'Line 03 corrected: print("Space", x)  // y → x',
                  'Line 06 corrected: else  // or elseif road[x] != null',
                  'Line 07 corrected: print(road[x].getName())  // getValue → getName'
                ],
                guidance: '4 marks: 1 per correctly identified line + correction. Line 07 allow print(road[x].name).' },
              '9(f)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of global variables and alternatives; accurate and detailed. Knowledge applied directly and consistently to context; explicitly relevant evidence. Well-developed line of reasoning.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of globals/locals. Knowledge applied to context with one or two missed opportunities.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge; some inaccuracies. Limited attempt to apply knowledge to context.' }
                ],
                indicative: {
                  'AO1 — Local and global variables': 'Global variables created when the program starts; all subroutines can access/update them. Local variables created in the subroutine they\'re used in; not directly accessible from other subroutines. Local variables removed from memory when the subroutine ends. Locals can be passed as parameters and returned to override the original. Locals can be passed by reference to allow updating.',
                  'AO2 — Application to the game': 'Globals stored throughout whole execution — but the amount of data is relatively low, so memory not heavy. When game expands, memory use could grow (especially with graphics). Both arrays needed throughout the game, so global makes coding easier (no parameter-passing). For just one part of the game, globals don\'t hurt efficiency much — but at scale could cause accuracy/testing/debugging/maintenance problems.',
                  'AO3 — Evaluation': 'For a prototype, global variables would be beneficial. When the game expands, globals could cause running-out-of-memory, coupling, testing & debugging, and maintenance problems. Best to keep variables local and pass between subroutines as parameters byVal and byRef.'
                },
                guidance: '9 marks total.' }
            }
          },
          {
            id: 'cs-ocr-h446-2023-p1',
            year: 'June 2023',
            paperName: 'Paper 1 — Computer Systems',
            paperCode: 'H446/01',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/703780-question-paper-computer-systems.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/703953-mark-scheme-computer-systems.pdf',
            questions: [
              {
                number: 1,
                scenario: "A small business uses a spreadsheet application package to calculate the wages of all of its employees.",
                parts: [
                  { code: '1(a)(i)', prompt: "Give one benefit of using a spreadsheet application for this task compared to calculating wages manually.", marks: 1 },
                  { code: '1(a)(ii)', prompt: "Give two other types of application packages that the small business could use, giving an example of a task that the business could use each application for.", marks: 4 },
                  { code: '1(a)(iii)', prompt: "Describe a drawback of using closed source software (rather than open source software) for the small business.", marks: 3 },
                  { code: '1(b)',
                    preamble: "Each computer the business uses has a BIOS.",
                    figure: { type: 'table', label: 'True or False?',
                      headers: ['Statement', 'True', 'False'],
                      rows: [
                        ['BIOS stands for Boot Input Output Standard', '', ''],
                        ['The BIOS can be used to alter hardware settings, such as which storage device the computer boots from', '', ''],
                        ['BIOS settings are stored in RAM', '', '']
                      ] },
                    prompt: "Tick one box in each row to identify whether each statement is true or false.", marks: 3 },
                  { code: '1(c)',
                    preamble: "The business uses virtual storage to hold regular backups of all of its data.",
                    prompt: "Explain why virtual storage is well-suited for storing backups.", marks: 2 },
                  { code: '1(d)(i)',
                    preamble: "All computers owned by the business are connected together into a Local Area Network (LAN). Various network protocols are used in this network.",
                    prompt: "Give three advantages to the business of connecting computers together in a LAN.", marks: 3 },
                  { code: '1(d)(ii)', prompt: "Explain what is meant by a network protocol.", marks: 2 },
                  { code: '1(d)(iii)', prompt: "Give the names of two protocols that may be used in a LAN.", marks: 2 },
                  { code: '1(d)(iv)', prompt: "Explain why protocol layering is used.", marks: 3 },
                  { code: '1(e)(i)',
                    preamble: "One computer owned by the business monitors critical-safety features of manufacturing. All input data must be processed within a predictable timescale of a fraction of a second.",
                    prompt: "State the type of operating system that should be used by this computer.", marks: 1 },
                  { code: '1(e)(ii)', prompt: "Give the name of three other types of operating system, and for each state its purpose.", marks: 6 },
                  { code: '1(f)',
                    preamble: "When a device such as a keyboard or printer requires attention from the CPU, an interrupt is raised.",
                    prompt: "Explain how an operating system deals with an interrupt.", marks: 3 },
                  { code: '1(g)', extended: true,
                    prompt: "Memory management is a key function of an operating system. Explain how an operating system can manage the memory available to applications and why doing so is important.\n\nYou should include:\n  • the different actions carried out by an operating system to manage memory\n  • how memory that is being managed can be split up\n  • why memory management is important.", marks: 9 }
                ]
              },
              {
                number: 2,
                scenario: "Sundip writes an algorithm to carry out addition and subtraction. The algorithm uses an initially empty stack called numbers and takes input from the user.\n\nFig. 2 (action per input value):\n  A → pop two values, add them, push the result\n  S → pop two values, subtract first popped from second popped, push the result\n  E → pop one value, output it, end the program\n  Any other value → push it onto the stack",
                parts: [
                  { code: '2(a)',
                    preamble: "Complete the pseudocode to implement Sundip's algorithm:\n\n    do\n        value = input(\"Enter a value\")\n        if ______ then\n            num = numbers.pop()\n            print(num)\n        elseif value == \"A\" or ______ then\n            numone = numbers.pop()\n            numtwo = numbers.pop()\n            if value == \"A\" then\n                numbers.push(______)\n            elseif value == \"S\" then\n                numbers.push(numtwo − numone)\n            endif\n        else\n            numbers.push(______)\n        endif\n    until value == ______",
                    prompt: "Fill in the five blanks.", marks: 5 },
                  { code: '2(b)(i)',
                    preamble: "After the user enters 8, A, 7 in turn (with the first state for 8 already shown):\n\n    [8]    →    [?]    →    [?]\n  (after 8)  (after 7)  (after A)\n\nStates: after entering 8 → stack has [8]; after entering 7 → stack has [8, 7]; after entering A → stack has [15] (8+7).",
                    prompt: "Describe the state of the stack after each value is entered (give the contents from bottom to top, after each step).", marks: 3 },
                  { code: '2(b)(ii)',
                    figure: { type: 'table', label: 'Output for each input sequence',
                      headers: ['Input data (left to right)', 'Output'],
                      rows: [
                        ['9 3 A E', ''],
                        ['10 5 A 8 S E', ''],
                        ['25 5 S 2 3 A S E', '']
                      ] },
                    prompt: "Give the output from this algorithm for each input sequence.", marks: 3 },
                  { code: '2(b)(iii)',
                    preamble: "If the user enters 4 2 S A E, the algorithm will not work correctly.",
                    prompt: "Explain what problem this input data will cause and why the problem occurs.", marks: 3 },
                  { code: '2(c)(i)', prompt: "Describe one difference between a stack and a queue.", marks: 2 },
                  { code: '2(c)(ii)', prompt: "Describe one difference between an array and a list.", marks: 2 },
                  { code: '2(c)(iii)', prompt: "State how a tuple is different to a list.", marks: 1 },
                  { code: '2(c)(iv)', prompt: "Describe how the second item in a linked list would be accessed using pointer values.", marks: 3 }
                ]
              },
              {
                number: 3,
                parts: [
                  { code: '3(a)(i)', prompt: "Convert the denary number 189 to hexadecimal.", marks: 1 },
                  { code: '3(a)(ii)', prompt: "Convert the unsigned binary number 1010101111 to hexadecimal.", marks: 1 },
                  { code: '3(b)(i)',
                    preamble: "Negative binary values can be represented using either sign and magnitude or two's complement.",
                    prompt: "Convert the denary number −107 to an 8-bit binary number using sign and magnitude.", marks: 1 },
                  { code: '3(b)(ii)', prompt: "Convert the denary number −107 to an 8-bit binary number using two's complement.", marks: 1 },
                  { code: '3(b)(iii)', prompt: "Give one advantage of storing values using two's complement instead of sign and magnitude.", marks: 1 },
                  { code: '3(c)', prompt: "Show how the denary value −15.75 can be represented as a normalised floating point binary number using 8 bits for the mantissa and 4 bits for the exponent.\n\nYou must show your working.", marks: 4 },
                  { code: '3(d)',
                    preamble: "The normalised floating point binary number 0100 1110 is stored using 4 bits for the mantissa and 4 bits for the exponent, both in two's complement.",
                    prompt: "Convert this number to denary. You must show your working.", marks: 3 },
                  { code: '3(e)', prompt: "Complete each sentence with an appropriate word:\n\n  • Increasing the number of bits used for the mantissa increases the ______ of the number that can be stored.\n  • Increasing the number of bits used for the exponent increases the ______ of the number that can be stored.", marks: 2 }
                ]
              },
              {
                number: 4,
                scenario: "A team of programmers create a robot that will be used in a factory. The robot will be able to do the work of multiple humans.\n\nThe programmers discuss whether to write the instructions in assembly language or a high-level language.",
                parts: [
                  { code: '4(a)', prompt: "Describe two differences between assembly language and high-level languages.", marks: 4 },
                  { code: '4(b)(i)',
                    preamble: "The robot uses a multi-core processor. The programmers assume this means the robot will execute programs more quickly than with a single-core processor.",
                    prompt: "Give one reason why this assumption can sometimes be true.", marks: 1 },
                  { code: '4(b)(ii)', prompt: "Explain why this assumption is not always true.", marks: 2 },
                  { code: '4(c)', extended: true,
                    preamble: "The robot stores data internally and also communicates with other robots and users via a wireless network which is password protected. All data is secured using either encryption or hashing.",
                    prompt: "Compare the robot's use of encryption and hashing for storing and communicating data.\n\nYou should include:\n  • the different types of encryption that could be used and how this would secure data\n  • how hashing could be used to secure data and which data would be suitable\n  • why encryption and hashing are used by the robot for stored data and communications.", marks: 9 },
                  { code: '4(d)(i)',
                    preamble: "The robot provides a web-based interface for users. Fig. 4 shows the home screen webpage (h1 heading, bulleted prime directives, an Updates link, a Login form with a password input and submit button).\n\n    <html>\n      <head>\n        <title>Robot User Interface</title>\n      </head>\n      <body>\n        <h1>Robot prime directives</h1>\n        ______\n          <li>Serve the company trust</li>\n          <li>Protect data</li>\n          <li>Uphold standards</li>\n        ______\n        <a ______=\"updates.html\">Updates</a>\n        <p>______</p>\n        <form action=\"dologin.php\">\n          Password\n          <input type=\"______\" name=\"pw\">\n          <input type=\"______\">\n        </form>\n      </body>\n    </html>",
                    prompt: "Fill in the five HTML blanks (list-open tag, list-close tag, anchor attribute, paragraph text, password input type, submit input type).", marks: 5 },
                  { code: '4(d)(ii)', prompt: "Write CSS code that could be used in an external stylesheet to format all text using the <h1> tag as white with a red background.", marks: 3 },
                  { code: '4(e)(i)',
                    preamble: "The robot's web interface uses images of the robot. The programmers do not want others to download and use these images.",
                    prompt: "State the name of one relevant piece of legislation and describe how this would protect these images.", marks: 3 },
                  { code: '4(e)(ii)',
                    preamble: "For other areas of the web interface, the programmers need to use images that they have not created themselves.",
                    prompt: "Give two ways that they could make sure these images are used legally.", marks: 2 },
                  { code: '4(f)(i)',
                    preamble: "User access details are stored in a table TblAccessLog (fields: Username [key], UserType, DateAccessed). The DateAccessed field stores multiple comma-separated dates per user.",
                    prompt: "Write an SQL statement to delete all records from TblAccessLog for users who have a UserType of \"NotNeeded\".", marks: 2 },
                  { code: '4(f)(ii)', prompt: "State two requirements for a database to be in First Normal Form (1NF).", marks: 2 },
                  { code: '4(f)(iii)', prompt: "Explain why the structure of TblAccessLog means that this database is not in First Normal Form (1NF).", marks: 2 }
                ]
              },
              {
                number: 5,
                scenario: "A doCheck() function takes an integer value as a parameter, carries out a series of calculations and returns an integer:\n\n    function doCheck(number)\n        temp = str(number)\n        max = temp.length − 1\n        total = 0\n        for x = 0 to max\n            total = total + int(temp.subString(x,1))\n        next x\n        return total MOD 10\n    endfunction",
                parts: [
                  { code: '5(a)', prompt: "State the value returned from the function when doCheck(3178) is called.", marks: 1 },
                  { code: '5(b)', extended: true, kind: 'code',
                    defaultLanguage: 'python',
                    starterCode: {
                      python: "# OCR H446/01 June 2023 Q5(b)\n# Write an algorithm that:\n#   - allows the user to enter an integer value\n#   - passes the value to doCheck() as a parameter\n#   - stores BOTH the entered value AND the returned value in a text\n#     file named \"storedvalues.txt\".\n\ndef doCheck(number):\n    temp = str(number)\n    total = 0\n    for c in temp:\n        total += int(c)\n    return total % 10\n\n# TODO: write the algorithm here.\n\n\n# ── Test driver (do not modify) — feeds 3178 to the input ──\n# Expected: storedvalues.txt should contain 3178 and 9 on separate lines\n# (or however your code chooses to store them).\nimport os\nif os.path.exists(\"storedvalues.txt\"):\n    os.remove(\"storedvalues.txt\")\n\n# Run your algorithm. After it finishes, we print what's in the file:\ntry:\n    with open(\"storedvalues.txt\", \"r\") as f:\n        print(\"storedvalues.txt contents:\")\n        print(f.read())\nexcept FileNotFoundError:\n    print(\"storedvalues.txt was not created — your algorithm needs to open it for writing.\")\n"
                    },
                    testInputs: ["3178"],
                    prompt: "Write an algorithm that takes an integer from the user, passes it to doCheck(), and stores both the entered value and the returned value in storedvalues.txt.\n\nClick ▶ Run with input 3178. A correct implementation creates the file with 3178 (the input) and 9 (the return) inside.", marks: 5 }
                ]
              },
              {
                number: 6,
                parts: [
                  { code: '6(a)(i)',
                    preamble: "Fig. 6 shows a logic circuit with inputs A, B, C and output P:\n  • A and B feed into an OR gate\n  • The output of the OR gate is NOTted\n  • That NOTted value is XORed with C to give P",
                    prompt: "Give the Boolean expression that represents the logic circuit. Do not attempt to simplify the expression.", marks: 2 },
                  { code: '6(a)(ii)',
                    figure: { type: 'table', label: 'Truth table for the circuit',
                      headers: ['A', 'B', 'C', 'P'],
                      rows: [['0','0','0',''],['0','0','1',''],['0','1','0',''],['0','1','1',''],['1','0','0',''],['1','0','1',''],['1','1','0',''],['1','1','1','']] },
                    prompt: "Complete the truth table for the logic circuit shown in Fig. 6.", marks: 3 },
                  { code: '6(b)',
                    preamble: "The following Karnaugh map represents another logic circuit:\n\n             AB\n         00  01  11  10\n      00  1   1   1   1\n      01  1   1   0   0\n   CD 11  0   0   0   0\n      10  0   0   1   1",
                    prompt: "Use this Karnaugh map to find the simplified expression for this circuit.\n\nYou should highlight the map as appropriate and write the expression.", marks: 4 }
                ]
              },
              {
                number: 7,
                parts: [
                  { code: '7', extended: true,
                    preamble: "The Regulation of Investigatory Powers Act (2000) has been described as both a vital legal tool to ensure the public's safety and an attack on an individual's freedoms.",
                    prompt: "Evaluate the purpose and use of the Act.\n\nYou should include:\n  • the additional powers given under the Act\n  • to whom these powers are given\n  • the perceived benefits and/or drawbacks of the Act.", marks: 12 }
                ]
              }
            ],
            markSchemes: {
              '1(a)(i)': { type: 'points',
                points: [
                  'Fewer mistakes (likely to be made) / more accurate',
                  'Faster as you can apply the same formula to multiple cells',
                  'What-if analysis can be performed',
                  'Values can be changed and results automatically (re)calculated',
                  'Can be shared electronically'
                ],
                guidance: '1 mark. Do not accept "faster" on its own without clarification.' },
              '1(a)(ii)': { type: 'points',
                points: [
                  'Database/DBMS — to store/query/sort data about customers/staff/stock',
                  'Word processor — to create documents / letters / invoices',
                  'Presentation software — to create presentations',
                  'Email software — for staff to communicate',
                  'Graphics manipulation — to produce adverts / images for sales',
                  'Web browser — to view websites to purchase materials / view competitors'
                ],
                guidance: '4 marks: mark in pairs, one mark for naming the application type + one for the example. Application type must be correct for example to be marked. Do not accept brand names alone. Do not accept spreadsheet (given in question).' },
              '1(a)(iii)': { type: 'points',
                points: [
                  'No access to source code',
                  'Cannot modify / improve to meet business needs',
                  'Cannot fix bugs',
                  '(Usually) cost to purchase licences / licence conditions / ongoing fees'
                ],
                guidance: '3 marks: 1 per row. Do not award a reverse of a mark point by describing open source.' },
              '1(b)': { type: 'exact',
                points: [
                  'BIOS stands for Boot Input Output Standard: False',
                  'The BIOS can be used to alter hardware settings: True',
                  'BIOS settings are stored in RAM: False'
                ],
                guidance: '3 marks: 1 per correct row.' },
              '1(c)': { type: 'points',
                points: [
                  'Stored away from the computer(s) / remote... so in case of disaster, data is not also damaged',
                  'All of the data (from multiple machines) can be backed up at the same time',
                  'Can be accessed from elsewhere / other machines',
                  'Storage can be expanded as necessary / no limit on size',
                  'Speed of access is not a priority for a backup',
                  'Can make recovery from another site easier',
                  'No physical space needed for backup hardware',
                  'No on-site maintenance required',
                  'Allows more local storage capacity for data'
                ],
                guidance: 'Max 2. Allow multiple interpretations of virtual storage (e.g. cloud).' },
              '1(d)(i)': { type: 'points',
                points: [
                  'Share hardware (e.g. printers)',
                  'Share files',
                  'Share Internet connection',
                  'Centralised security',
                  'Log on / access files from any machine on the LAN',
                  'Central maintenance',
                  'Central backup / storage',
                  'Central installation / update of programs',
                  'Can monitor user activity',
                  'Can control access levels / centralised user admin',
                  'Access an intranet'
                ],
                guidance: '3 marks: mark first answer in each answer space.' },
              '1(d)(ii)': { type: 'points',
                points: [
                  'A set of rules / an agreement',
                  'Used to ensure the (proper / successful) transfer of data between devices / govern transmission between devices',
                  'May specify format of data / error checking / etc.'
                ],
                guidance: '2 marks. Allow suitable example of contents of a protocol for MP3. Do not award "a rule" — must be plural.' },
              '1(d)(iii)': { type: 'exact',
                points: ['HTTP', 'HTTPS', 'TCP', 'IP', 'UDP', 'FTP', 'Ethernet', 'WPA', 'DHCP', 'SMTP', 'POP', 'IMAP', 'RDP', 'VoIP'],
                guidance: '2 marks: 1 per protocol listed. If one protocol mentioned with 2 versions (e.g. IPv4 & IPv6) — only 1 mark. If written in full but with any word wrong, no mark.' },
              '1(d)(iv)': { type: 'points',
                points: [
                  'To apply protocols in order / one after the other',
                  'To provide independence of layers / layers can be modified without affecting other layers / layers are self-contained',
                  'Hides details from previous/next layer(s) / is an abstraction',
                  'Each layer is well defined / does a specific job',
                  'Breaks tasks down into manageable units / groups similar protocols together',
                  'Improved troubleshooting (easier identification of the layer that causes the issue)',
                  'Each layer only communicates with adjacent layers / simplifies interfacing',
                  'Hardware/software can be manufactured to fit into one specific layer',
                  'Allows for standards for individual tasks/layers to be developed (for compatibility)'
                ],
                guidance: 'Max 3.' },
              '1(e)(i)': { type: 'exact',
                points: ['Real time', 'Real-time'],
                guidance: '1 mark. Correct answer only.' },
              '1(e)(ii)': { type: 'points',
                points: [
                  'Multi-tasking — runs multiple programs at the same time',
                  'Multi-user — allows multiple users at the same time (must be clear that candidate is not discussing an OS that simply has multiple accounts)',
                  'Distributed — allows multiple computers to work together on a single task',
                  'Embedded — has a dedicated/limited function; is read-only / cannot be changed'
                ],
                guidance: '6 marks: mark in pairs (type + purpose), 3 distinct types. Allow real-time if not given as previous answer. Do not accept "runs on an embedded system" as expansion of embedded OS.' },
              '1(f)': { type: 'points',
                points: [
                  'Interrupt checked for at start/end of each fetch-execute cycle',
                  'If the interrupt is of lower/equal priority to the current process, the current process continues',
                  '(If interrupt raised) contents of registers copied to stack',
                  'Flags are set to determine if interrupts are enabled/disabled',
                  'Program counter changed to point to Interrupt Service Routine (ISR) / ISR runs',
                  'After interrupt complete, previous register values restored back from stack',
                  'Flag is reset',
                  'If higher priority interrupt received during servicing, this is added to stack and new interrupt dealt with'
                ],
                guidance: 'Max 3.' },
              '1(g)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of memory management; accurate and detailed. Knowledge applied directly and consistently to context; explicitly relevant evidence. Thoroughly assesses the importance of memory management to an efficient and secure system. Well-developed line of reasoning.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of memory management. Knowledge applied to context with one or two missed opportunities. Reasonable attempt to assess importance.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of memory management; some inaccuracies. Limited attempt to apply to context. Vague/unsupported discussion of importance.' }
                ],
                indicative: {
                  'AO1 — Knowledge': 'Memory management = ensure RAM is used efficiently and not wasted. Garbage collection removes data no longer needed, frees space, allocates memory. Paging / segmentation may split memory. Paging = fixed-size physical divisions; Segmentation = varying-size logical divisions. Virtual memory may be used when RAM is full.',
                  'AO2 — Application': 'If RAM is full, apps cannot be loaded. Data transferred between RAM and virtual memory to free space. Includes security so data in memory isn\'t vulnerable. Without memory management, RAM rapidly runs out. Paging causes internal fragmentation; segmentation causes external fragmentation. Page table maps page location (slower than segmentation table). Easier for OS to manage page locations (non-contiguous).',
                  'AO3 — Evaluation': 'RAM more expensive than secondary storage, so virtual memory useful. Over-use of VM causes slowdown / disk thrashing. Paging more effective for non-contiguous space; segments work better contiguously. Segmentation errors can cause memory leakage / system crashes. Security — apps only access their allocated memory; data removed before reallocation.'
                },
                guidance: '9 marks total.' },
              '2(a)': { type: 'exact',
                points: [
                  'Blank 1: value == "E"',
                  'Blank 2: value == "S"',
                  'Blank 3: (numone + numtwo)',
                  'Blank 4: value',
                  'Blank 5: "E"'
                ],
                guidance: '5 marks. All string values must be in quotes. Don\'t allow single = for MP1 & 2 (penalise once, FT). Case needs to match. Brackets needed for MP3.' },
              '2(b)(i)': { type: 'exact',
                points: [
                  'After 8: stack = [8]',
                  'After 7: stack = [8, 7]',
                  'After A: stack = [15] (since 8 + 7 = 15)'
                ],
                guidance: '3 marks: 1 per state.' },
              '2(b)(ii)': { type: 'exact',
                points: [
                  '9 3 A E → output 12 (since 9 + 3 = 12, then E pops and prints)',
                  '10 5 A 8 S E → output 7 (since 10+5=15, then 15−8=7, then E)',
                  '25 5 S 2 3 A S E → output 15 (since 5−25=−20… wait MS gives 15 — order: push 25, push 5, S pops 5 and 25 → 25−5=20; push 2; push 3; A → 2+3=5; S → 20−5=15; E → output 15)'
                ],
                guidance: '3 marks: 1 per correct output. Expected outputs are 12, 7, 15.' },
              '2(b)(iii)': { type: 'points',
                points: [
                  'S causes the two values inputted to be popped and only one value to be pushed back / 4 and 2 are popped and 2 is pushed',
                  'A causes an attempt to pop two values but only one is present',
                  'Causing a stack underflow'
                ],
                guidance: '3 marks.' },
              '2(c)(i)': { type: 'points',
                points: [
                  'Stack is LIFO / FILO; Queue is FIFO / LILO',
                  'Stack uses one pointer (for head); Queue uses two pointers (head and tail)',
                  'Stack: data popped/pushed from the top; Queue: data dequeued from start, enqueued at back / queue can be circular'
                ],
                guidance: '2 marks. Mark in pairs.' },
              '2(c)(ii)': { type: 'points',
                points: [
                  'Array is of fixed / defined size / static',
                  'List size can be changed / no defined size / dynamic',
                  'Array holds data of single data type',
                  'List can hold data of multiple / different types'
                ],
                guidance: '2 marks. Mark in pairs.' },
              '2(c)(iii)': { type: 'points',
                points: [
                  'A tuple cannot be changed at runtime / a tuple is immutable'
                ],
                guidance: '1 mark.' },
              '2(c)(iv)': { type: 'points',
                points: [
                  'Go to the first position indicated by the start pointer',
                  'From the first position, read the next pointer value',
                  '...follow this pointer value and access the data item'
                ],
                guidance: '3 marks.' },
              '3(a)(i)': { type: 'exact',
                points: ['BD'],
                guidance: '1 mark. Correct answer only.' },
              '3(a)(ii)': { type: 'exact',
                points: ['2AF'],
                guidance: '1 mark. Correct answer only.' },
              '3(b)(i)': { type: 'exact',
                points: ['1110 1011', '11101011'],
                guidance: '1 mark.' },
              '3(b)(ii)': { type: 'exact',
                points: ['1001 0101', '10010101'],
                guidance: '1 mark.' },
              '3(b)(iii)': { type: 'points',
                points: [
                  "Calculations are more easily performed on two's complement",
                  "Two's complement allows for a (negligible) larger range of numbers to be stored",
                  "No additional hardware is required in two's complement / addition and subtraction carried out using only an adder",
                  "Two's complement has only one representation for 0"
                ],
                guidance: '1 mark. Accept the reverse of the MP.' },
              '3(c)': { type: 'points',
                points: [
                  "−15.75 is 10000.01 (in fixed point two's complement)",
                  'Binary point moved 4 places left',
                  'Mantissa: 1000 0010',
                  'Exponent: 0100'
                ],
                guidance: '4 marks. Mantissa must be 8 bits, exponent must be 4 bits. If mantissa AND exponent are correct with any working, 4 marks.' },
              '3(d)': { type: 'points',
                points: [
                  'Exponent is −2',
                  'Binary point moved 2 places left (0.001) / 0.5 × 2⁻²',
                  '0.125 / 1/8 (one eighth)'
                ],
                guidance: '3 marks. If answer is correct and working is shown, 3 marks.' },
              '3(e)': { type: 'exact',
                points: [
                  'Mantissa → precision / accuracy',
                  'Exponent → range / size / magnitude'
                ],
                guidance: '2 marks: 1 for each blank.' },
              '4(a)': { type: 'points',
                points: [
                  'Assembly language uses mnemonics; HLL uses English-like words',
                  'Assembly uses an assembler to convert to machine code; HLL uses a translator (compiler/interpreter)',
                  'Assembly is one-to-one conversion to machine code; HLL may produce multiple lines of machine code per line (one-to-many)',
                  'Assembly requires more knowledge of the processor / allows direct control; HLL provides more abstraction / requires less knowledge',
                  'Assembly is likely to be specific to the processor type / machine-dependent; HLL is portable / machine-independent'
                ],
                guidance: '4 marks. Mark in pairs. Allow examples (e.g. JMP, print) for MP1 and 2.' },
              '4(b)(i)': { type: 'points',
                points: [
                  'Can execute multiple instructions / FDE cycles at the same time / some instructions in the program can be run in parallel'
                ],
                guidance: '1 mark. Do not accept just "multiple instructions". Do not accept tasks/programs for instructions.' },
              '4(b)(ii)': { type: 'points',
                points: [
                  'Some instructions may not be able to be run in parallel',
                  'An instruction may be dependent / waiting for other instructions to be completed',
                  'Other factors influence processing speed (clock speed / cache / bottlenecks)',
                  'Program / OS needs to be written to specifically use multiple cores'
                ],
                guidance: 'Max 2.' },
              '4(c)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge of encryption and hashing and how they can secure stored data and communications. Knowledge applied directly and consistently to robot context. Weighs up both technologies with supported and realistic judgement. Well-balanced.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of encryption and hashing. Applied to context with one or two missed opportunities. Reasonable attempt at conclusion showing recognition of either technology; may not be well-balanced.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of encryption or/and hashing; some inaccuracies. Limited attempt to apply to context. Almost entirely one-sided discussion.' }
                ],
                indicative: {
                  'AO1 — Knowledge': 'Encryption: converts data into ciphertext using a key; two-way (decryptable with key). Symmetric = same key for both; asymmetric = two keys (public/private). Hashing: one-way (non-reversible) mathematical process producing a value from input.',
                  'AO2 — Application to robot': 'Data storage on robot: symmetric encryption useful (no keys to share/transmit). Robot↔robot/user communication: asymmetric / public-key — only public key shared, data encrypted/decrypted, private key stays secure. Asymmetric can also verify sender identity. Hashing useful for info like passwords that need to be verified but not known.',
                  'AO3 — Evaluation': 'Encryption useful for most data storage — hackers cannot read without key. Hashing useful for password storage — hash of input compared with stored hash. Hashing NOT useful for data that needs to be returned (impossible to reverse). Encryption useful for transmission — intercepted data can\'t be decrypted without key.'
                },
                guidance: '9 marks total.' },
              '4(d)(i)': { type: 'exact',
                points: [
                  'Blank 1: <ul>',
                  'Blank 2: </ul>',
                  'Blank 3: href',
                  'Blank 4: Login',
                  'Blank 5: text (or password)',
                  'Blank 6: submit'
                ],
                guidance: '5 marks: 1 per correct blank (max 5 of 6 listed). HTML tags are not case sensitive.' },
              '4(d)(ii)': { type: 'exact',
                points: [
                  'Selector: h1 with code in { }',
                  'color: white;',
                  'background-color: red; (or background: red;)'
                ],
                guidance: '3 marks. Ignore presence or lack of <style> tags. Ignore lack of semicolons. Penalise misspelling of "color" once and then FT. White can be #FFFFFF or #FFF; red can be #FF0000 or #F00.' },
              '4(e)(i)': { type: 'points',
                points: [
                  'Copyright Designs and Patents Act (must be full name for MP1)',
                  'Gives the author (the programmers) ownership/copyright of the photographs',
                  '...no need to apply / this is automatic',
                  'Others cannot use/distribute / can be prosecuted/fined for using/distributing...',
                  '...without permission',
                  'Permission can be granted / bought / licensed'
                ],
                guidance: '3 marks: 1 for the Act + 2 from the description.' },
              '4(e)(ii)': { type: 'points',
                points: [
                  'Ask permission of author / photographer / owner',
                  'Use images marked as copyright-free (e.g. Creative Commons Licence)',
                  'Purchase (licence to use) image'
                ],
                guidance: '2 marks. Do not accept just "ask permission" without context.' },
              '4(f)(i)': { type: 'exact',
                points: [
                  'DELETE FROM TblAccessLog WHERE UserType = "NotNeeded"',
                  'DELETE FROM TblAccessLog WHERE UserType = \'NotNeeded\''
                ],
                guidance: '2 marks. Do not accept DELETE * or inclusion of field names. Need quotation on MP2. Case must match for field/table names — only penalise once and FT. Do not award MP2 if == is used instead of =.' },
              '4(f)(ii)': { type: 'points',
                points: [
                  'Each attribute name is unique',
                  'Primary key identified',
                  'No repeated attributes',
                  'All data in attributes must be atomic (cannot be further split up)'
                ],
                guidance: '2 marks.' },
              '4(f)(iii)': { type: 'points',
                points: [
                  'DateAccessed...',
                  '...has non-atomic data / data can be split up (into separate dates)'
                ],
                guidance: '2 marks. Do not accept repeated data / data redundancy (those are higher normal forms) unless specified that this is within one field.' },
              '5(a)': { type: 'exact',
                points: ['9'],
                guidance: '1 mark for 9 (3 + 1 + 7 + 8 = 19; 19 MOD 10 = 9).' },
              '5(b)': { type: 'points',
                points: [
                  'Input and store/use a value from the user',
                  'Call doCheck function with the value input and save/use the returned value',
                  'Open and close text file in write/append mode (if given)',
                  'Write the value returned to the text file',
                  'Write the value input to the text file'
                ],
                guidance: '5 marks. MP2 — doCheck is case-sensitive. MP3 — need speech marks around the file name.' },
              '6(a)(i)': { type: 'exact',
                points: [
                  '¬(A ∨ B) ⊕ C',
                  'NOT (A OR B) XOR C',
                  '(A + B)̄ ⊕ C'
                ],
                guidance: '2 marks: 1 for ¬(A OR B) — brackets required (NOT A OR B is incorrect), 1 for XOR C. Can be written in any order as long as logically correct.' },
              '6(a)(ii)': { type: 'exact',
                points: [
                  'Row 000: P=1',
                  'Row 001: P=0',
                  'Row 010: P=0',
                  'Row 011: P=1',
                  'Row 100: P=0',
                  'Row 101: P=1',
                  'Row 110: P=0',
                  'Row 111: P=1'
                ],
                guidance: '3 marks: 1 for first two rows (1,0); 1 for next two rows (0,1); 1 for next four rows (0,1,0,1).' },
              '6(b)': { type: 'points',
                points: [
                  'Correct grouping of the four 1s in the top half (rows CD=00 and CD=01) and the four 1s in the corners (CD=00 and CD=10) on the K-map',
                  'Term: Ā · C̄ (NOT A AND NOT C) — from the top-left 2×2 group',
                  'Term: A · D̄ (A AND NOT D) — from the right-hand 2×2 group',
                  'Joined with v / + / OR: Ā·C̄ + A·D̄'
                ],
                guidance: '4 marks. Do not penalise candidates who simplify even further (e.g. using De Morgan). MP1 correct answer only. MP4 dependent on MP2 & 3.' },
              '7': { type: 'levels',
                levels: [
                  { range: [9, 12], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of RIPA 2000. Knowledge applied directly and consistently to context; explicitly relevant evidence. Weighs up both sides of the argument with supported and realistic judgement covering benefits and drawbacks. Well-balanced.' },
                  { range: [5, 8], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge of RIPA 2000. Applied to context with one or two missed opportunities. Reasonable attempt to come to a conclusion showing recognition of benefits and/or drawbacks; may not be well-balanced.' },
                  { range: [1, 4], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of RIPA 2000; some inaccuracies. Limited attempt to apply to context. Almost entirely one-sided.' }
                ],
                indicative: {
                  'AO1 — Knowledge': 'RIPA implements additional rights regarding surveillance / monitoring of individuals and acquisition of communications data. Provides rights for many organisations (Police, security services) to do this. Purpose: detect crime, defend national security. Gives access to private communications — emails, texts, calls, internet history. Some see it as an invasion of privacy.',
                  'AO2 — Application': 'Monitoring carried out by far more organisations than just Police/security services — local councils, pension regulator, Environment Agency. Forces handover of encryption keys (2-year prison sentence on refusal). Wide-ranging powers have allowed Police to intercept criminals and stop/disrupt crime.',
                  'AO3 — Evaluation': 'In modern world, important Police/security can deal with electronic communications this way — terrorism etc. can be detected and stopped, making public safer. But criticised as a "snooper\'s charter" — used for minor offences (lying about address for school admissions, fly-tipping). Many communication tools (e.g. WhatsApp) include end-to-end encryption by default so messages can\'t be divulged. Other encryption tools include plausible deniability.'
                },
                guidance: '12 marks total. Indicative AO split: AO1.1=2, AO1.2=2, AO2.1=2, AO3.3=3 (+ extra).' }
            }
          },
          {
            id: 'cs-ocr-h446-2023-p2',
            year: 'June 2023',
            paperName: 'Paper 2 — Algorithms and Programming',
            paperCode: 'H446/02',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/703781-question-paper-algorithms-and-programming.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/703954-mark-scheme-algorithms-and-programming.pdf'
          },
          {
            id: 'cs-ocr-h446-2022-p2',
            year: 'June 2022',
            paperName: 'Paper 2 — Algorithms and Programming',
            paperCode: 'H446/02',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/676743-question-paper-algorithms-and-programming.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/676944-mark-scheme-algorithms-and-programming.pdf',
            questions: [
              // ── SECTION A — 100 marks (Q1–Q7)
              {
                number: 1,
                scenario: "A computer program stores data in an array named words.",
                parts: [
                  { code: '1(a)(i)',
                    preamble: "The data in the array needs to be searched for a value that the user inputs. One example of a searching algorithm is a binary search.",
                    prompt: "Identify the precondition for a binary search.", marks: 1 },
                  { code: '1(a)(ii)',
                    preamble: "A second example of a searching algorithm is a linear search.",
                    prompt: "Describe how a linear search works.", marks: 4 },
                  { code: '1(b)(i)',
                    preamble: "The array words is defined as a global variable and contains: \"house\" \"boat\" \"car\" \"telephone\" \"garden\" \"spice\" \"elephant\". The pseudocode function useWords() uses the global array words. The number of words in the array is passed as a parameter.\n\n    function useWords(numberOfWords : byVal)\n        contents = \"\"\n        for count = 0 to numberOfWords - 1\n            contents = contents + words[count] + \" \"\n        next count\n        return contents\n    endfunction",
                    prompt: "Identify two variables in the function useWords().", marks: 2 },
                  { code: '1(b)(ii)',
                    preamble: "numberOfWords is a parameter passed by value.",
                    prompt: "Describe the difference between passing a parameter by value and by reference.", marks: 2 },
                  { code: '1(b)(iii)',
                    prompt: "Rewrite the function useWords() to use a while loop instead of a for loop.\n\nThe function header and close have been written for you:\n\n    function useWords(numberOfWords : byVal)\n        // your code here\n    endfunction\n\nWrite your answer using pseudocode or program code.", marks: 4 },
                  { code: '1(c)', prompt: "Give one benefit and one drawback of declaring the array as a global variable instead of a local variable.", marks: 2 },
                  { code: '1(d)', prompt: "Describe one feature of an Integrated Development Environment (IDE) that can be used to help write the program and one feature that can be used to help test the program.", marks: 4 },
                  { code: '1(e)',
                    preamble: "Functions and procedures are reusable components.",
                    prompt: "Give two benefits of writing a program with reusable components.", marks: 2 }
                ]
              },
              {
                number: 2,
                scenario: "A computer program is being written to store data about students. Fig. 2 shows a binary search tree storing student IDs:\n\n                    2005\n                   /    \\\n                 1920    2350\n                /  \\    /    \\\n              1500 1985 2100  2560\n                       /  \\\n                     1952 2000",
                parts: [
                  { code: '2(a)', prompt: "Identify the root node in the binary tree shown in Fig. 2.", marks: 1 },
                  { code: '2(b)', prompt: "Identify two leaf nodes in the binary tree shown in Fig. 2.", marks: 2 },
                  { code: '2(c)',
                    preamble: "Four more students are added to the binary search tree in this order:\n\n    1420  2050  2780  2600",
                    prompt: "Describe where in the binary search tree each new student is added.\n\n(Give the parent node and side — left/right — for each of 1420, 2050, 2780, 2600.)", marks: 4 },
                  { code: '2(d)', extended: true,
                    preamble: "A programmer would like to traverse the binary search tree in Fig. 2.",
                    prompt: "Compare the use of a breadth-first traversal and a depth-first (post-order) traversal on the binary search tree.\n\nYou should include:\n  • how each traversal works\n  • the order of the return values for each traversal.", marks: 9 }
                ]
              },
              {
                number: 3,
                scenario: "A bubble sort will sort an array of 50 integer values called numberArray.",
                parts: [
                  { code: '3(a)', prompt: "State why the integer values are stored in an array instead of separate variables.", marks: 1 },
                  { code: '3(b)',
                    preamble: "This bubble sort algorithm is written to sort numberArray into ascending numerical order.\n\n    arrayLength = ______\n    tempValue = 0\n    do\n        flag = false\n        for y = 0 to arrayLength - ______\n            if numberArray[y] > numberArray[y + 1] then\n                ______ = numberArray[y]\n                numberArray[______] = numberArray[y + 1]\n                numberArray[y + 1] = ______\n                flag = true\n            endif\n        next y\n    until flag == false",
                    prompt: "Complete this bubble sort algorithm by filling in the five blanks (arrayLength, the loop end value, tempValue, the index in the swap, and the value used to restore from tempValue).", marks: 5 },
                  { code: '3(c)',
                    preamble: "One section of numberArray is:  2 12 1 9 3 5 15 7\n\nA second sorting algorithm that could be used is a merge sort.",
                    prompt: "Show how a merge sort will sort this section of the array numberArray into ascending numerical order. (List each stage: splitting and merging.)", marks: 4 },
                  { code: '3(d)', extended: true,
                    preamble: "Another sorting algorithm is insertion sort. The number of values in numberArray has been reduced to 10.",
                    prompt: "Compare the use of bubble, merge and insertion sorts on the array numberArray.\n\nYou should include:\n  • how each algorithm works\n  • the Big O complexities for each algorithm\n  • the suitability of each algorithm for sorting the 10 values.", marks: 12 }
                ]
              },
              {
                number: 4,
                scenario: "A programmer is developing an aeroplane simulator. The user will sit in a cockpit and the simulated environment will be displayed on screens around them.",
                parts: [
                  { code: '4(a)(i)',
                    figure: { type: 'table', label: 'Computational method definitions',
                      headers: ['Computational Method', 'Definition'],
                      rows: [['Abstraction', ''], ['Decomposition', '']] },
                    prompt: "Complete the table by writing a definition for each computational method.", marks: 2 },
                  { code: '4(a)(ii)', prompt: "Give three potential differences between the abstracted aeroplane simulator and reality.", marks: 3 },
                  { code: '4(a)(iii)', prompt: "Identify two reasons why abstraction is used when designing a solution to the problem.", marks: 2 },
                  { code: '4(b)', prompt: "Describe how caching can be used in the aeroplane simulator.", marks: 2 }
                ]
              },
              {
                number: 5,
                scenario: "Fig. 5 shows a graph data structure representing a small section of a parcel delivery network. Nodes are delivery addresses, edges show possible routes and distances:\n\n    Edges (undirected, weighted):\n      A–B = 3, A–E = 3, B–C = 3, B–D = 7, B–E = 3,\n      C–E = 7, C–D = 3, D–H = 11, E–F = 3,\n      F–G = 7, G–H = 3, D–G = 3 (see QP for diagram)",
                parts: [
                  { code: '5(a)(i)', prompt: "State one way a directed graph is different to an undirected graph.", marks: 1 },
                  { code: '5(a)(ii)', prompt: "State one way a graph data structure is different to a tree data structure.", marks: 1 },
                  { code: '5(b)', prompt: "Give one reason why the graph is a visualisation of the problem.", marks: 1 },
                  { code: '5(c)(i)',
                    figure: { type: 'table', label: 'Dijkstra working table (one row per node)',
                      headers: ['Node', 'Distance travelled', 'Previous node'],
                      rows: [['A','',''],['B','',''],['C','',''],['D','',''],['E','',''],['F','',''],['G','',''],['H','','']] },
                    prompt: "Show how Dijkstra's algorithm can be used on the graph in Fig. 5 to find the shortest path from start node A to end node H.\n\nState the nodes on the final path and the overall distance. Show your working.", marks: 6 },
                  { code: '5(c)(ii)', prompt: "Give a similarity and a difference between the performance of Dijkstra's algorithm and the performance of A* algorithm.", marks: 2 },
                  { code: '5(d)(i)', prompt: "State why performance modelling is used to test a system.", marks: 1 },
                  { code: '5(d)(ii)', prompt: "Describe how performance modelling can be used in the delivery system.", marks: 2 }
                ]
              },
              {
                number: 6,
                scenario: "A card game uses a set of 52 standard playing cards (four suits — hearts, diamonds, clubs, spades — each with cards numbered 1–13).\n\nThe game randomly gives 2 players 7 cards each. The unallocated cards become the deck. Players take turns to turn over a card. A valid move is a card of the same suit OR the same number as the last card played. The winner is the first player to play all of their cards.",
                parts: [
                  { code: '6(a)',
                    preamble: "One component of the game is checking if a move is valid.",
                    prompt: "Identify three other components of the game.", marks: 3 },
                  { code: '6(b)(i)',
                    preamble: "A function checkValid() takes the card the player has selected, and the last card played, as parameters. It returns true if the player's move is valid and false otherwise.",
                    prompt: "State the reason why checkValid() is a function and not a procedure.", marks: 1 },
                  { code: '6(b)(ii)',
                    preamble: "The programmer will use a branching (selection) construct to make decisions.",
                    prompt: "Describe the decisions that will be made in the checkValid() function and how these change the return values.", marks: 3 },
                  { code: '6(c)',
                    preamble: "The cards are held in the 2D array cards. The first index stores the card number and the second index stores the suit, both as strings.",
                    prompt: "Write a pseudocode statement or program code to declare the array cards.", marks: 2 }
                ]
              },
              {
                number: 7,
                scenario: "A program uses the recursive function calculate(). The function is written in pseudocode:\n\n    1. function calculate(number : byVal)\n    2.     if number == 1 then\n    3.         return number\n    4.     else\n    5.         return number + calculate(number - 1)\n    6.     endif\n    7. endfunction",
                parts: [
                  { code: '7(a)(i)', prompt: "Give the line number in the algorithm calculate() where a recursive call is made.", marks: 1 },
                  { code: '7(a)(ii)', prompt: "State two features of any recursive algorithm.", marks: 2 },
                  { code: '7(b)',
                    figure: { type: 'table', label: 'Trace table for calculate(5)',
                      headers: ['Function call', 'number', 'return'],
                      rows: [['calculate(5)','',''],['','',''],['','',''],['','',''],['','','']] },
                    prompt: "Trace the recursive function calculate() and give the final return value, when the function call calculate(5) is run.", marks: 5 },
                  { code: '7(c)', prompt: "Give the pseudocode function call that would return 55 from the recursive function calculate().", marks: 1 }
                ]
              },
              // ── SECTION B — 40 marks (Q8 only)
              {
                number: 8,
                scenario: "A computer uses a stack data structure, implemented using an array, to store numbers entered by the user. The array is zero-based and has 100 locations.",
                parts: [
                  { code: '8(a)(i)',
                    preamble: "Fig. 8 shows the current contents of the stack and the first 9 locations of the array:\n\n    pointerValue = 5\n    Index  Data\n      8\n      7    1\n      6    23\n      5    6\n      4    5\n      3    10\n      2\n      1\n      0\n\nThe function pop() removes an item from the stack; push(value) adds a value to the stack.",
                    prompt: "Show the contents of the stack and pointer after these calls have run:\n\n    pop()\n    pop()\n    push(3)\n    push(6)\n    push(7)\n\n(Give the final value of pointerValue and the contents of indices 0–8.)", marks: 2 },
                  { code: '8(a)(ii)', prompt: "State the purpose of pointerValue.", marks: 1 },
                  { code: '8(b)(i)',
                    preamble: "The stack is programmed as an object using object-oriented programming. The class design:\n\n    class: stack\n    attributes:\n        private stackArray : Array of integer\n        private pointerValue : integer\n    methods:\n        new()\n        function pop()\n        function push(value)\n\nThe method pop() returns the next value in the stack, or −1 if the stack is empty.",
                    prompt: "Complete the pseudocode method pop() by filling in the five blanks:\n\n    public function pop()\n        if pointerValue == ______ then\n            return ______\n        else\n            pointerValue = pointerValue ______\n            returnValue = stackArray[______]\n            return ______\n        endif\n    endfunction", marks: 5 },
                  { code: '8(b)(ii)', extended: true,
                    preamble: "The method push() accepts an integer as a parameter and adds it to the top of the stack unless the stack is already full. If successful it returns true; if unsuccessful (stack full) it returns false.",
                    prompt: "Write the method push() using either pseudocode or program code.", marks: 6 },
                  { code: '8(b)(iii)',
                    preamble: "The main program initialises a new object of type stack with the identifier mathsStack.",
                    prompt: "Write pseudocode or program code to declare the object.", marks: 2 },
                  { code: '8(b)(iv)',
                    preamble: "The main program needs to:\n  • take numbers as input from the user\n  • push them onto mathsStack until the stack is full\n  • output an appropriate message if the stack is full.",
                    prompt: "Complete the pseudocode algorithm by filling in the four blanks:\n\n    returnValue = true\n    while returnValue == ______\n        returnValue = mathsStack.______(input(\"Enter Number\"))\n        if returnValue == ______ then\n            ______(\"Stack full\")\n        endif\n    endwhile", marks: 4 },
                  { code: '8(b)(v)', extended: true,
                    preamble: "The main program also needs to:\n  • remove one item from the stack at a time and add this to a total\n  • output the total every time an item is removed\n  • stop removing items when either the stack is empty, or 20 items have been removed.",
                    prompt: "Write pseudocode or program code to meet these requirements.", marks: 8 },
                  { code: '8(c)(i)',
                    preamble: "The program is amended to include several queue data structures.",
                    prompt: "Describe how an array can be used to implement a queue data structure.", marks: 3 },
                  { code: '8(c)(ii)', extended: true,
                    prompt: "Discuss the use of object-oriented programming and procedural programming to create and manipulate the queue data structures.\n\nYou should include:\n  • the features of object-oriented programming\n  • the features of procedural programming\n  • the benefits of using object-oriented instead of procedural programming when creating several queue structures.", marks: 9 }
                ]
              }
            ],
            markSchemes: {
              '1(a)(i)': { type: 'exact',
                points: ['The array / data must be in order / sorted', 'sorted', 'in order'],
                guidance: '1 mark for stating the array must be ordered/sorted.' },
              '1(a)(ii)': { type: 'points',
                points: [
                  'Compare the search item with the first value',
                  '...then compare the search item with the next value',
                  '...repeat the above process until either',
                  '...the end of the array has been reached',
                  'or...the search item is found and then stop',
                  '...then return the array position / return −1 / False if not found'
                ],
                guidance: '1 mark per bullet, max 4. Not all mark points are dependent, but points awarded must follow logically in sequence.' },
              '1(b)(i)': { type: 'points',
                points: ['contents', 'count', 'numberOfWords', 'words / words[]'],
                guidance: '1 mark per variable identified, max 2. Do not award "numberOfWords" if there are obvious spaces in "number of Words" — must be a valid identifier.' },
              '1(b)(ii)': { type: 'points',
                points: [
                  'By reference the function receives the memory location of the data',
                  'By value the function receives a copy of the variable',
                  'By reference will make changes to the original variable / By value will make changes to the copy',
                  'By reference will overwrite data in the original variable / By value will not',
                  'By reference will keep the changes after the function ends / By value will not'
                ],
                guidance: '1 mark per bullet. Must cover BOTH byVal and byRef for 2 marks to be awarded. Must be clear that byVal is a copy of the original value.' },
              '1(b)(iii)': { type: 'points',
                points: [
                  'Initialising a counter (e.g. count = 0)',
                  'Looping between 0 and numberOfWords − 1 (e.g. while count < numberOfWords)',
                  'Incrementing counter inside loop',
                  'Remainder of algorithm correct (initialisation of contents, concatenation, and return)'
                ],
                guidance: '4 marks: 1 per bullet. Accept while count <= numberOfWords − 1. Accept other combinations (e.g. counting from 1 and subtracting 1 for the array index) but do not credit off-by-one errors. Accept len(words) for numberOfWords.' },
              '1(c)': { type: 'points',
                points: [
                  "Benefit — Variable doesn't need passing as a parameter (byref)",
                  "Benefit — You don't need to return a value",
                  'Benefit — Can be accessed from any function / anywhere in the program',
                  'Drawback — Increases memory usage (as it is used until full program execution is over)',
                  'Drawback — Alterations within the function may have unwanted side effects elsewhere in the program'
                ],
                guidance: '2 marks: 1 for benefit + 1 for drawback.' },
              '1(d)': { type: 'points',
                points: [
                  'Write — Auto-complete: start typing an identifier/command and it fills in the rest',
                  'Write — Auto-indent: indents code automatically within structures to avoid errors',
                  'Write — Coloured command words / pretty printing / syntax highlighting: shows which commands are correct',
                  'Test — Breakpoints: stop the program at a set point to check variables',
                  'Test — Variable watch window: display the values of variables while the program runs',
                  'Test — Stepping: run one line at a time and check variables',
                  'Test — Unit testing: automated tests to check changes haven\'t introduced errors'
                ],
                guidance: '4 marks: 1 mark per identification + 1 mark per expansion, max 2 each for Write and Test (so 2 + 2 = 4).' },
              '1(e)': { type: 'points',
                points: [
                  'Saves time from having to write the same algorithm repeatedly',
                  'Reduced testing requirements',
                  'Can be taken and used in different programs / can be used in a program library'
                ],
                guidance: '1 mark per bullet, max 2.' },
              '2(a)': { type: 'exact',
                points: ['2005'],
                guidance: '1 mark for 2005.' },
              '2(b)': { type: 'exact',
                points: ['1500', '1952', '2000', '2100', '2560'],
                guidance: '1 mark for each leaf identified, max 2.' },
              '2(c)': { type: 'points',
                points: [
                  '1420 added as left child of 1500',
                  '2050 added as right child of 2000',
                  '2780 added as right child of 2560',
                  '2600 added as left child of 2780'
                ],
                guidance: '4 marks: 1 mark per correctly-placed insertion.' },
              '2(d)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of search traversals; generally accurate and detailed. Knowledge and understanding applied directly and consistently to the context, with explicitly relevant evidence. Well-developed line of reasoning, clear and logically structured.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge and understanding of search traversals; generally accurate but at times underdeveloped. Knowledge applied to context with one or two missed opportunities. Reasonable discussion, mostly focused.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of search traversals with limited understanding; material contains some inaccuracies. Limited attempt to apply knowledge to context. Narrow, unstructured discussion.' }
                ],
                indicative: {
                  'AO1 — Knowledge & Understanding': 'Breadth first takes first value then visits all nodes connected to it, then takes all nodes connected to those. Depth first goes to the left node (becomes a new tree), continues left until a leaf, returns this, then goes right and repeats — "follow left, follow right, take root".',
                  'AO2 — Application': 'Breadth-first will return: 2005 1920 2350 1500 1985 2100 2560 (and any 4 new students) 1952 2000. Post-order / Depth-first will return: (1420) 1500 1952 2000 1985 1920 (2050) 2100 (2600 2780) 2560 2350 2005.',
                  'AO3 — Evaluation': 'Breadth is more efficient when data is closer to the root. Depth is more efficient when data is further down. Depth memory requirement is linear. Depth can be written recursively to aid understanding. Breadth in general is better time complexity. In large trees depth may never return a value.'
                },
                guidance: '9 marks total (3 AO1.1 + 3 AO1.2 + 3 AO2.1 + 3 AO3.3 indicative split). Limit to band 2 if there is no evaluation of BFS/DFS.' },
              '3(a)': { type: 'points',
                points: [
                  'Can refer to all 50 only using one identifier / all values can be indexed in one array',
                  'The numbers can be passed as a single parameter',
                  'Does not need 50 variables to be declared / passed'
                ],
                guidance: '1 mark.' },
              '3(b)': { type: 'exact',
                points: [
                  'arrayLength = 50  (or numberArray.length)',
                  'for y = 0 to arrayLength − 2',
                  'tempValue = numberArray[y]',
                  'numberArray[y] = numberArray[y + 1]',
                  'numberArray[y + 1] = tempValue'
                ],
                guidance: '5 marks: 1 mark per completed blank. Note: if arrayLength = numberArray − 1 / 49 is used, then the for loop end value becomes arrayLength − 1 (consistent off-by-one). Allow other suitable valid identifier in place of tempValue (e.g. temp).' },
              '3(c)': { type: 'points',
                points: [
                  'Splitting into individual items: 2 | 12 | 1 | 9 | 3 | 5 | 15 | 7',
                  'Combining in pairs: 2 12 | 1 9 | 3 5 | 7 15',
                  'Merge pairs: 1 2 9 12 | 3 5 7 15',
                  'Merge for final: 1 2 3 5 7 9 12 15'
                ],
                guidance: '4 marks: 1 per stage shown. Do not award a mark for the final stage unless the candidate has shown the previous sorting stage(s).' },
              '3(d)': { type: 'levels',
                levels: [
                  { range: [9, 12], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of sorting algorithms; generally accurate and detailed. Knowledge applied directly and consistently to the context; evidence explicitly relevant. Well-developed line of reasoning.' },
                  { range: [5, 8], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge and understanding of sorting algorithms; generally accurate but at times underdeveloped. Knowledge applied to context with one or two missed opportunities. Reasonable discussion.' },
                  { range: [1, 4], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of sorting algorithms with limited understanding; material contains some inaccuracies. Limited attempt to apply knowledge to context.' }
                ],
                indicative: {
                  'AO1 — How each algorithm works': 'Merge sort splits data into individual lists and merges them back together. Insertion makes the first value a sorted list, then inserts each subsequent item into the sorted list. Bubble sort looks through each item in turn, repeated N times.',
                  'AO2 — Big-O complexities': 'Merge uses more memory (new lists are needed); Insertion and Bubble need constant memory. Bubble and Insertion have best-case O(n) (run through the data once); Merge minimum is O(n log n). Merge average is the same as best. Insertion and Bubble have average O(n²). Worst-case Merge is O(n log n) (same as best/average); Bubble and Insertion worst is O(n²).',
                  'AO3 — Evaluation (10-element context)': 'There are a small number of elements (10), so Bubble or Insertion would be better space-wise (no further space needed). Merge would not need excessive extra memory either, since there are only a small number of elements. Time-complexity differences are unlikely to be significant for 10 elements — either Bubble or Insertion may be preferable for simplicity.'
                },
                guidance: '12 marks total (3 AO1.1 + 3 AO1.2 + 3 AO2.1 + 3 AO3.3 indicative split).' },
              '4(a)(i)': { type: 'exact',
                points: [
                  'Abstraction: Removal of unnecessary components / focus on only necessary components',
                  'Decomposition: Breaking down a problem into subproblems'
                ],
                guidance: '2 marks: max 1 mark per definition.' },
              '4(a)(ii)': { type: 'points',
                points: [
                  'Removal of visual elements such as buildings on the ground',
                  'Simplification of controls',
                  'Focus on important elements such as weather, height, speed',
                  'Reduced physical sensations (no real motion / G-forces)',
                  'Simplified weather / wind models',
                  'Other valid simulation-vs-reality differences'
                ],
                guidance: '3 marks: 1 per valid difference.' },
              '4(a)(iii)': { type: 'points',
                points: [
                  'Reduce memory requirements',
                  'Reduce processing requirements',
                  'Simplify the problem being solved'
                ],
                guidance: '2 marks: 1 per reason, max 2.' },
              '4(b)': { type: 'points',
                points: [
                  'Store data that has been used in cache / RAM in case needed again',
                  'e.g. store the design of the weather / a cloud / external environment',
                  'Cache frequently-rendered terrain or sound effects to speed redisplay',
                  'Cache instrument readings or computed physics values'
                ],
                guidance: '2 marks. Allow 2 valid examples for 2 marks.' },
              '5(a)(i)': { type: 'exact',
                points: [
                  'In directed arcs/edges may only go in one direction; in undirected arcs/edges can go in both directions'
                ],
                guidance: '1 mark.' },
              '5(a)(ii)': { type: 'points',
                points: [
                  'More than one path is allowed in a graph',
                  'Graphs do not have a root node',
                  'Graphs can be weighted',
                  'Graphs can have loops / cycles'
                ],
                guidance: '1 mark. Allow answers given the reverse (e.g. "a tree does not have loops").' },
              '5(b)': { type: 'points',
                points: [
                  'Symbols are used to represent the address',
                  'The edges represent possible connections between addresses, not the actual physical routes',
                  'Visual representation of the underlying problem'
                ],
                guidance: '1 mark. Allow other suitable answers that are in context of the problem.' },
              '5(c)(i)': { type: 'exact',
                points: [
                  'A: distance 0, previous —',
                  'B: distance 3, previous A',
                  'C: distance 13, previous E (or via D)',
                  'D: distance 10, previous B',
                  'E: distance 6, previous B',
                  'F: distance 9, previous E',
                  'G: distance 16, previous D (or F)',
                  'H: distance 19, previous G',
                  'Final path: A, B, E, F, G, H. Distance: 19'
                ],
                guidance: '6 marks: order of previous nodes visited must be clear. Note: nodes do not have to be given in alphabetical order. 1 mark each for the correct entries at B, D, G, and 2 marks for H + final path (Distance = 19).' },
              '5(c)(ii)': { type: 'points',
                points: [
                  'Similarity — Both always find the shortest route',
                  'Similarity — Both are pathfinding algorithms',
                  "Difference — A* is (usually) more efficient / Dijkstra's is (usually) slower",
                  "Difference — A* uses heuristics to find a solution faster / Dijkstra's does not use heuristics"
                ],
                guidance: '2 marks: must contain a similarity AND a difference for both marks.' },
              '5(d)(i)': { type: 'points',
                points: [
                  'Simulate / model behaviour of the system (before it is) used under load',
                  'Because it would be too expensive / unsafe / time-critical to test the real system'
                ],
                guidance: 'Max 1.' },
              '5(d)(ii)': { type: 'points',
                points: [
                  'Test with large and small values',
                  'e.g. largest number of deliveries',
                  'e.g. largest number of possible routes',
                  'Model how well the system scales with increasing use'
                ],
                guidance: '2 marks.' },
              '6(a)': { type: 'points',
                points: [
                  'Allocating cards to each player',
                  'Generating the deck',
                  'Managing whose turn it is to play',
                  'Checking won',
                  'Other valid game components (turn timer, scoring, displaying hand, etc.)'
                ],
                guidance: '3 marks: 1 mark per component. Accept any reasonable component.' },
              '6(b)(i)': { type: 'exact',
                points: ['It returns a value'],
                guidance: '1 mark.' },
              '6(b)(ii)': { type: 'points',
                points: [
                  "If the player's card is the same suit return true",
                  "If the player's card is the same number return true",
                  'If neither is true, return false'
                ],
                guidance: '3 marks: 1 per bullet.' },
              '6(c)': { type: 'points',
                points: [
                  'Identifier cards...',
                  '...with 2 dimensions (e.g. cards[13, 4] of String, or Dim cards(13, 4) As String, or cards = [[""]*4 for _ in range(13)])'
                ],
                guidance: '2 marks.' },
              '7(a)(i)': { type: 'exact',
                points: ['5', 'Line 5', 'line number 5'],
                guidance: '1 mark for line 5.' },
              '7(a)(ii)': { type: 'points',
                points: [
                  'A function that calls itself / a function that is defined in terms of itself',
                  '...has a base case (that terminates the recursion)'
                ],
                guidance: '2 marks: 1 per feature.' },
              '7(b)': { type: 'exact',
                points: [
                  'calculate(5): number=5, return=15',
                  'calculate(4): number=4, return=10',
                  'calculate(3): number=3, return=6',
                  'calculate(2): number=2, return=3',
                  'calculate(1): number=1, return=1'
                ],
                guidance: '5 marks: 1 per correctly-completed row. Final return value of calculate(5) = 15.' },
              '7(c)': { type: 'exact',
                points: ['calculate(10)'],
                guidance: '1 mark for calculate(10) (1+2+3+...+10 = 55).' },
              '8(a)(i)': { type: 'points',
                points: [
                  'Correct data: index 0=10, 1=5, 2=6, 3=3, 4=6, 5=7, 6-8 empty (after pop pop push(3) push(6) push(7))',
                  'Correct top-of-stack pointer: pointerValue = 6'
                ],
                guidance: '2 marks: 1 for correct data + 1 for correct pointer. After pop/pop the indices 4 and 3 are empty (or treated as not part of the stack), then push 3 to index 3, push 6 to index 4, push 7 to index 5. So final stack: 0=10, 1=5, 2=6, 3=3, 4=6, 5=7, pointerValue=6.' },
              '8(a)(ii)': { type: 'points',
                points: [
                  'Points to the next free space in the array',
                  'Points to the top of the stack'
                ],
                guidance: '1 mark.' },
              '8(b)(i)': { type: 'exact',
                points: [
                  'if pointerValue == 0 then',
                  'return −1',
                  'pointerValue = pointerValue − 1',
                  'returnValue = stackArray[pointerValue]',
                  'return returnValue'
                ],
                guidance: '5 marks: 1 per correctly-completed blank. Ignore additional parameters in the function definition. Do not accept the return of string values for the empty case.' },
              '8(b)(ii)': { type: 'points',
                points: [
                  'Function header',
                  '...taking a parameter (ignore byval/byref)',
                  'Checking if stack is full (pointerValue at 100 / ≥ 100)',
                  '...and returning false',
                  '(Otherwise) adding the value to the top of the stack (stackArray[pointerValue] = value)',
                  '...incrementing the top-of-stack pointer',
                  'Return true'
                ],
                guidance: '6 marks: 1 mark per bullet, max 6. FT following a reasonable attempt to check if the stack is full.' },
              '8(b)(iii)': { type: 'exact',
                points: [
                  'mathsStack = new stack()',
                  'mathsStack = stack()'
                ],
                guidance: '2 marks: 1 for instantiation of new object of type stack + 1 for assignment to variable mathsStack. Allow missing brackets this time only (e.g. mathsStack = stack).' },
              '8(b)(iv)': { type: 'exact',
                points: [
                  'while returnValue == true',
                  'returnValue = mathsStack.push(input("Enter Number"))',
                  'if returnValue == false then',
                  'print("Stack full")'
                ],
                guidance: '4 marks: 1 per completed statement. Accept equivalent for print (e.g. output / write / Console.WriteLine).' },
              '8(b)(v)': { type: 'points',
                points: [
                  'Initialise a total to 0 outside of loop',
                  'Looping',
                  'Removing an item from the stack using the method pop',
                  'Check if stack is empty',
                  '(If not) add value returned to total',
                  '...outputting total',
                  'Counting how many values are returned',
                  'Stopping loop when either 20 items removed or no items left'
                ],
                guidance: '8 marks: 1 per bullet, max 8.' },
              '8(c)(i)': { type: 'points',
                points: [
                  'Queue has head pointer and tail pointer',
                  'When an item is enqueued the tail pointer increments',
                  'When an item is dequeued the head pointer increments'
                ],
                guidance: '3 marks. Max 1 mark for "Enqueue/Dequeue operations" if description of effect on tail/head pointers is not given.' },
              '8(c)(ii)': { type: 'levels',
                levels: [
                  { range: [7, 9], descriptor: 'Mark Band 3 — High level',
                    criteria: 'Thorough knowledge and understanding of object-oriented and procedural programming; generally accurate and detailed. Knowledge applied directly and consistently to context; explicitly relevant evidence. Well-developed line of reasoning, clear and logically structured.' },
                  { range: [4, 6], descriptor: 'Mark Band 2 — Mid level',
                    criteria: 'Reasonable knowledge and understanding of OOP and procedural; generally accurate but at times underdeveloped. Knowledge applied to context with one or two missed opportunities. Reasonable discussion, mostly focused.' },
                  { range: [1, 3], descriptor: 'Mark Band 1 — Low level',
                    criteria: 'Basic knowledge of OOP and procedural with limited understanding; material is basic and contains some inaccuracies.' }
                ],
                indicative: {
                  'AO1 — Features of OOP and procedural': 'OOP defines an object as an independent entity. OOP defines the attributes of the object and the methods that can be applied to it. Attributes could be private to restrict accidental changes. Procedural — the statements are executed in the order they are written.',
                  'AO2 — Application to queue context': 'OOP allows for an object to be created from the queue. Many instances of this queue can then be declared in the main program. Procedural will need each queue to be declared individually. Procedural will need to make use of subroutines where the queue will need to be sent and returned each time.',
                  'AO3 — Evaluation: OOP advantages for multiple queues': 'OOP — you can create multiple instances of the queue as required by the program without having to re-write all of the declarations etc. In procedural you would have to write separate code for each new queue. OOP reduces amount of code needed therefore fewer errors are likely. OOP can reduce mistakes because the subroutines are self-contained; in procedural it would need to make sure the correct values are passed and returned, or global variables may be required.'
                },
                guidance: '9 marks total (3 AO1.1 + 3 AO1.2 + 3 AO2.1 + 3 AO3.3 indicative split).' }
            }
          },
          {
            id: 'cs-ocr-h446-2021-p1',
            year: 'November 2021',
            paperName: 'Paper 1 — Computer Systems',
            paperCode: 'H446/01',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/666846-question-paper-computer-systems.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/666849-mark-scheme-computer-systems.pdf'
          },
          {
            id: 'cs-ocr-h446-2021-p2',
            year: 'November 2021',
            paperName: 'Paper 2 — Algorithms and Programming',
            paperCode: 'H446/02',
            totalMarks: 140,
            durationMins: 150,
            qpUrl: 'https://www.ocr.org.uk/Images/666847-question-paper-algorithms-and-programming.pdf',
            msUrl: 'https://www.ocr.org.uk/Images/666850-mark-scheme-algorithms-and-programming.pdf'
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
