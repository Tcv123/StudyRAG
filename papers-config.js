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
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75171-MS-JUN22.PDF'
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
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75171-MS-NOV21.PDF'
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
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75171-W-MS-NOV20.PDF'
          },
          {
            id: 'cs-aqa-7517-2020-p2',
            year: 'Autumn 2020',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 100,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75172-QP-NOV20.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75172-W-MS-NOV20.PDF'
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
