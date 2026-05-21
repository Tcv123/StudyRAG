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
            totalMarks: 75,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75171-QP-JUN22.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75171-MS-JUN22.PDF'
          },
          {
            id: 'cs-aqa-7517-2022-p2',
            year: 'June 2022',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 75,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75172-QP-JUN22.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2022/june/AQA-75172-MS-JUN22.PDF'
          },
          {
            id: 'cs-aqa-7517-2021-p1',
            year: 'Autumn 2021',
            paperName: 'Paper 1 — Programming (on-screen)',
            paperCode: '7517/1',
            totalMarks: 75,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75171-QP-NOV21.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75171-MS-NOV21.PDF'
          },
          {
            id: 'cs-aqa-7517-2021-p2',
            year: 'Autumn 2021',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 75,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75172-QP-NOV21.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2021/november/AQA-75172-MS-NOV21.PDF'
          },
          {
            id: 'cs-aqa-7517-2020-p1',
            year: 'Autumn 2020',
            paperName: 'Paper 1 — Programming (on-screen)',
            paperCode: '7517/1',
            totalMarks: 75,
            durationMins: 150,
            qpUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75171-QP-NOV20.PDF',
            msUrl: 'https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2020/november/AQA-75171-W-MS-NOV20.PDF'
          },
          {
            id: 'cs-aqa-7517-2020-p2',
            year: 'Autumn 2020',
            paperName: 'Paper 2 — Written',
            paperCode: '7517/2',
            totalMarks: 75,
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
