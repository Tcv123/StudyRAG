/*
 * AQA GCSE Computer Science (8525) — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const CS_AQA_WRITTEN = {

  '3.1': {
    green: [
      {
        q: 'State the difference between an algorithm and a program.',
        marks: 2, tier: 'green',
        modelAnswer: `• An algorithm is a language-independent set of logical steps to solve a problem (1).\n• A program is an algorithm expressed in a specific programming language that a computer can execute (1).`
      },
      {
        q: 'Identify the four standard flowchart symbols in the AQA specification and state the purpose of each.',
        marks: 4, tier: 'green',
        modelAnswer: `• Terminator (rounded rectangle / oval) — shows the start or end of the algorithm (1).\n• Process (rectangle) — represents a step such as an assignment or calculation (1).\n• Decision (diamond) — represents a Yes/No (or True/False) question with two outgoing branches (1).\n• Input / Output (parallelogram) — represents reading data in or outputting data (1).`
      },
      {
        q: 'State two situations in which a linear search would be preferred over a binary search.',
        marks: 2, tier: 'green',
        modelAnswer: `• When the list is unsorted, because binary search requires a sorted list (1).\n• When the list is very small, because the speed advantage of binary search is negligible and linear search is simpler (1).\n(Accept also: data structure does not allow random access, e.g. a linked list.)`
      },
      {
        q: 'State what is meant by a trace table and explain its purpose.',
        marks: 2, tier: 'green',
        modelAnswer: `• A trace table has one column for each variable (and usually a column for OUTPUT) and one row per change (1).\n• Its purpose is to work through an algorithm by hand, recording how variables change, to predict output or find logic errors (1).`
      },
    ],
    amber: [
      {
        q: 'Describe how a binary search finds a target value in a sorted list.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The list must first be sorted (1).\n• Compare the target with the middle item of the current search space (1).\n• If the middle item equals the target, the search is over; if the target is smaller, discard the right half; if the target is larger, discard the left half (1).\n• Repeat the halving on the remaining half until the target is found or the search space is empty (1).`
      },
      {
        q: 'Explain why binary search is more efficient than linear search for large sorted lists.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Linear search checks items one at a time, so in the worst case it performs n comparisons (1).\n• Binary search halves the remaining search space with each comparison (1).\n• A list of n items therefore needs at most about log\u2082(n) comparisons (1).\n• For a list of 1,000,000 items, linear search may need 1,000,000 comparisons while binary search needs only about 20 — dramatically faster for large lists (1).`
      },
      {
        q: 'Describe how a bubble sort works.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The algorithm repeatedly passes through the list comparing adjacent pairs of items (1).\n• If a pair is in the wrong order, the two items are swapped (1).\n• After each pass the largest remaining unsorted item has moved to its final position at the end of the list (1).\n• The algorithm terminates when a complete pass is made with no swaps, indicating the list is fully sorted (1).`
      },
      {
        q: 'Explain the difference between decomposition and abstraction, giving an example of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Decomposition means breaking a large problem into smaller, more manageable sub-problems (1).\n• Example: splitting an online shop into separate modules for login, shopping cart, payment, and stock (1).\n• Abstraction means removing unnecessary detail so the important features of a problem can be focused on (1).\n• Example: the London Underground map shows station connections but hides real geographical distances, because passengers only need the connection information (1).`
      },
    ],
    red: [
      {
        q: 'Compare bubble sort and merge sort. Your answer should refer to how each works, their efficiency, and when each would be appropriate to use.',
        marks: 6, tier: 'red',
        modelAnswer: `• Bubble sort repeatedly compares adjacent pairs and swaps them if out of order, passing through the list until no swaps are needed (1).\n• Merge sort uses divide and conquer: it recursively splits the list in half until each sub-list has one item, then merges pairs of sorted sub-lists back together (1).\n• Bubble sort's number of comparisons grows roughly with n\u00B2, making it slow on large lists (1).\n• Merge sort's work grows with n log n, so it is much faster on large lists (e.g. around 20 million operations for 1,000,000 items vs around 500 billion for bubble sort) (1).\n• Bubble sort is simpler to implement and uses less memory because it sorts in place; merge sort needs extra memory for the temporary merged lists (1).\n• Bubble sort is appropriate for small or nearly-sorted lists; merge sort is the better choice when lists are large and efficiency matters (1).`
      },
      {
        q: 'A company keeps a database of 100,000 customer records in a list. Customer service agents perform many searches per minute on this list throughout the day. Discuss which searching algorithm(s) the company should use, referring to efficiency and any conditions that must be met.',
        marks: 8, tier: 'red',
        modelAnswer: `• Linear search would check every record one by one from start to end (1).\n• In the worst case, linear search of 100,000 records takes 100,000 comparisons; on average 50,000 (1).\n• Binary search halves the search space at each step and takes at most about log\u2082(100,000) \u2248 17 comparisons (1).\n• Binary search is therefore dramatically faster for a list of this size (1).\n• However, binary search only works on a sorted list (1).\n• The company should sort the records once (e.g. by customer ID or surname) and keep the list sorted as new records are inserted in the correct position (1).\n• The one-off cost of sorting is outweighed by the massive saving made on every one of the many searches (1).\n• Using merge sort (n log n) for any occasional re-sort is preferable to bubble sort (n\u00B2) at this data size (1).\n• Conclusion: use binary search on a sorted list, because the search speed gain is very significant at this scale (1).\n(Award up to 8 marks for any valid combination of the above.)`
      },
    ],
  },
  '3.2': {
    green: [
      {
        q: 'State the five basic data types required by the AQA specification and give one example value of each.',
        marks: 5, tier: 'green',
        modelAnswer: `\u2022 Integer \u2014 a whole number, e.g. 42 (1).\n\u2022 Real / float \u2014 a number with a decimal point, e.g. 3.14 (1).\n\u2022 Boolean \u2014 True or False (1).\n\u2022 Character \u2014 a single symbol, e.g. 'A' (1).\n\u2022 String \u2014 a sequence of characters, e.g. "Hello" (1).`
      },
      {
        q: 'State the difference between a variable and a constant.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 A variable is a named memory location whose value can change while the program runs (1).\n\u2022 A constant is a named memory location whose value is fixed and cannot change after it is first set (1).`
      },
      {
        q: 'State the three basic programming constructs used in structured programming.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 Sequence \u2014 statements executed one after another from top to bottom (1).\n\u2022 Selection \u2014 choosing between blocks of code using IF/ELSE (1).\n\u2022 Iteration \u2014 repeating a block of code using FOR or WHILE loops (1).`
      },
      {
        q: 'State what is meant by casting and give one example of why it is needed.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 Casting is converting a value from one data type to another (e.g. int("42") converts the string "42" to the integer 42) (1).\n\u2022 It is needed because USERINPUT returns a string, so numeric input must be cast to an int or float before it can be used in arithmetic (1).`
      },
    ],
    amber: [
      {
        q: 'Explain the difference between a FOR loop and a WHILE loop, and give one example of when each would be the better choice.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 A FOR loop is count-controlled: it repeats a known, fixed number of times (1).\n\u2022 A WHILE loop is condition-controlled: it repeats while a condition is True, for an unknown number of iterations (1).\n\u2022 FOR is better when you know how many iterations are needed, e.g. processing every item of a 30-element array (1).\n\u2022 WHILE is better when repetition depends on input, e.g. keep asking until the user enters a valid password (1).`
      },
      {
        q: 'Explain the difference between DIV and MOD. Include an example of each using the numbers 23 and 5.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 DIV is integer division \u2014 it gives the whole-number part of a division, discarding the remainder (1).\n\u2022 MOD gives the remainder after integer division (1).\n\u2022 23 DIV 5 = 4, because 5 goes into 23 four whole times (1).\n\u2022 23 MOD 5 = 3, because 4 \u00D7 5 = 20 leaves a remainder of 3 (1).`
      },
      {
        q: 'Describe how the four standard text-file operations (open, read, write, close) are used to read every line of a text file called "data.txt" and display each line on the screen.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Open the file for reading: f \u2190 openRead("data.txt") (1).\n\u2022 Use a WHILE NOT f.endOfFile() loop so reading stops at the end of the file (1).\n\u2022 Inside the loop, read the next line with line \u2190 f.readLine() and OUTPUT line (1).\n\u2022 After the loop, close the file with f.close() to release the resource and ensure data is flushed (1).`
      },
      {
        q: 'Explain the difference between a local variable and a global variable, and explain why local variables are generally preferred.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 A local variable is declared inside a subroutine and exists only while that subroutine is running; it is not visible outside (1).\n\u2022 A global variable is declared outside subroutines and is visible throughout the whole program (1).\n\u2022 Local variables make subroutines self-contained: changes made inside cannot accidentally affect code elsewhere (1).\n\u2022 This reduces the chance of unintended side-effects and makes subroutines easier to test, reuse and debug (1).`
      },
    ],
    red: [
      {
        q: 'Compare procedures and functions. Include how they differ, how parameters and return values are used, and give one example of when each is the appropriate choice.',
        marks: 6, tier: 'red',
        modelAnswer: `\u2022 A procedure is a named block of code that performs a task but does not return a value to the caller (1).\n\u2022 A function is a named block of code that returns a value using a RETURN statement (1).\n\u2022 Both may take parameters \u2014 named variables that receive the argument values supplied at the call site (1).\n\u2022 Functions can be used inside expressions (e.g. total \u2190 area(r) + 10) because they evaluate to a value; procedures cannot (1).\n\u2022 A procedure is appropriate when the action itself is the goal, e.g. displayMenu() or saveScore() (1).\n\u2022 A function is appropriate when a value must be computed and returned, e.g. circle_area(radius) or is_prime(n) (1).`
      },
      {
        q: 'Discuss the advantages of structured programming. Your answer should refer to at least three specific benefits and explain how each arises from the approach.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Structured programming uses only three constructs \u2014 sequence, selection and iteration \u2014 and organises code into self-contained subroutines (1).\n\u2022 Readability: because control flow follows the three structured constructs and each subroutine has a clear purpose, another programmer can follow the logic without tracing unexpected jumps (1 for the point + 1 for explanation).\n\u2022 Maintainability: changes (e.g. updating the VAT rate) are localised to the relevant subroutine rather than spread through the whole program, so the risk of new bugs is reduced (1 + 1).\n\u2022 Easier debugging and testing: each small subroutine can be tested individually with specific inputs; when a bug is found, the area to search is small (1 + 1).\n\u2022 Code reuse: well-designed subroutines can be called from many places and even reused in later programs, reducing duplication and development time (1).\n\u2022 Teamwork: different developers can work on different subroutines in parallel as long as their parameters and return values are agreed in advance (1).\n(Award up to 8 marks for any combination: 3 benefits each with a clear explanation scores full marks.)`
      },
    ],
  },
  '3.3': {
    green: [
      {
        q: 'State what is meant by a bit, a nibble and a byte.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 A bit is a single binary digit (0 or 1) (1).\n\u2022 A nibble is a group of 4 bits (half a byte) (1).\n\u2022 A byte is a group of 8 bits, which can represent 256 different values (1).`
      },
      {
        q: 'State two reasons why programmers use hexadecimal instead of binary to display values such as memory addresses or colour codes.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 Hex is much shorter \u2014 4 binary digits become 1 hex digit, so values take one-quarter the space to write (1).\n\u2022 Hex is easier for humans to read and less error-prone, because long strings of 0s and 1s are hard to tell apart at a glance (1).\n(Accept also: direct mapping 1 nibble = 1 hex digit, so conversion needs no arithmetic.)`
      },
      {
        q: 'State the difference between lossy and lossless compression.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 Lossy compression permanently discards some of the data, so the original file cannot be perfectly reconstructed from the compressed version (1).\n\u2022 Lossless compression encodes the data more efficiently so that the original file can be reconstructed exactly when decompressed (1).`
      },
      {
        q: 'State what is meant by the sample rate and the sample resolution (bit depth) of a digital sound recording.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 Sample rate is the number of samples taken per second, measured in hertz (Hz) (1).\n\u2022 Sample resolution / bit depth is the number of bits used to store each individual sample (1).`
      },
    ],
    amber: [
      {
        q: 'Convert the denary number 181 to an 8-bit binary number and then to hexadecimal. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Place values 128 64 32 16 8 4 2 1: 181 \u2212 128 = 53, 53 \u2212 32 = 21, 21 \u2212 16 = 5, 5 \u2212 4 = 1, 1 \u2212 1 = 0 (1).\n\u2022 Binary = 10110101 (1).\n\u2022 Split into nibbles: 1011 | 0101 (1).\n\u2022 1011 = B, 0101 = 5, so hex = B5 (1).`
      },
      {
        q: 'Explain how a logical left shift by 2 places affects an 8-bit binary number, including any risks.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Each bit is moved 2 places to the left, and two 0s are inserted on the right (1).\n\u2022 The effect on the value is to multiply it by 2\u00B2 = 4 (1).\n\u2022 Any bits that are pushed off the leftmost column are lost (1).\n\u2022 If a 1 bit is pushed off the left, the value has overflowed and the result is incorrect \u2014 e.g. 10000001 (129) shifted left by 1 becomes 00000010 (2), not 258 (1).`
      },
      {
        q: 'Describe how sampling converts an analogue sound wave into a digital audio file, and explain the effect of using a higher sample rate.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 The analogue sound wave is a continuous variation of air pressure with time (1).\n\u2022 At regular intervals the amplitude of the wave is measured and stored as a binary number (this is a sample) (1).\n\u2022 The sample rate is the number of samples taken per second (in hertz) (1).\n\u2022 A higher sample rate takes more measurements per second, so the digital recording more closely matches the original wave, capturing higher-frequency detail (1).\n\u2022 However, more samples per second means a larger file size and more bandwidth/storage needed (1).`
      },
      {
        q: 'Calculate the uncompressed file size, in kilobytes, of a bitmap image that is 640 pixels wide by 480 pixels tall with a colour depth of 24 bits. Show your working. (Use 1 kB = 1000 B.)',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Total pixels = 640 \u00D7 480 = 307 200 (1).\n\u2022 Total bits = 307 200 \u00D7 24 = 7 372 800 bits (1).\n\u2022 Bytes = 7 372 800 \u00F7 8 = 921 600 B (1).\n\u2022 Kilobytes = 921 600 \u00F7 1000 = 921.6 kB (\u2248 922 kB) (1).`
      },
    ],
    red: [
      {
        q: 'Discuss whether a company that produces online teaching videos should use lossy or lossless compression for the videos. Refer to file size, quality, bandwidth, and the needs of the users in your answer.',
        marks: 6, tier: 'red',
        modelAnswer: `\u2022 Lossy compression permanently discards data that the human eye/ear notices less, producing much smaller files (1).\n\u2022 Lossless compression reconstructs the exact original, but typically achieves much smaller size reductions than lossy methods (1).\n\u2022 Video files are very large, so uncompressed or lossless video would be slow to download / stream, especially on mobile networks with limited bandwidth (1).\n\u2022 The small drop in visual/audio quality from lossy compression (e.g. H.264 / MP4) is usually imperceptible to a student watching a lesson, so quality concerns are minimal (1).\n\u2022 Smaller files also mean lower hosting and bandwidth costs for the company, and faster playback / less buffering for users (1).\n\u2022 Conclusion: lossy compression is the correct choice because the tiny loss in quality is more than offset by the substantial savings in size, bandwidth and cost (1).`
      },
      {
        q: 'Explain how Huffman coding compresses text. Illustrate your answer by building a Huffman code for the word "MISSISSIPPI" and compare the number of bits needed with standard 7-bit ASCII.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Huffman coding is a lossless compression technique that assigns shorter binary codes to the most frequent characters and longer codes to rarer ones (1).\n\u2022 Frequencies in MISSISSIPPI: I=4, S=4, P=2, M=1 (1).\n\u2022 Build tree by repeatedly combining the two lowest-frequency trees: combine M(1)+P(2)=MP(3); then combine MP(3)+I(4)=MPI(7); then combine MPI(7)+S(4)=root(11) (1).\n\u2022 Label left branches 0 and right branches 1 and read the code off the path from root to each leaf (1).\n\u2022 A valid set of codes is S=0, I=10, M=110, P=111 (accept any valid prefix-free assignment with same total bit length) (1).\n\u2022 Total bits for MISSISSIPPI = (3)M + (2)I + (1)S + (1)S + (2)I + (1)S + (1)S + (2)I + (3)P + (3)P + (2)I = 21 bits (1).\n\u2022 In 7-bit ASCII, 11 characters \u00D7 7 bits = 77 bits (1).\n\u2022 Huffman uses only 21 bits vs 77 bits for ASCII \u2014 a saving of about 73% \u2014 because the most common characters (I, S) use only 1 or 2 bits each, and the rare letters (M, P) take more bits but appear few times (1).`
      },
    ],
  },
  '3.4': {
    green: [
      {
        q: 'State what is meant by "hardware" and "software", giving one example of each.',
        marks: 4, tier: 'green',
        modelAnswer: `\u2022 Hardware is the physical components of a computer system, e.g. the CPU, RAM, hard disk, monitor, or keyboard (1 for definition + 1 for example).\n\u2022 Software is the set of programs and data that tell the hardware what to do, e.g. an operating system, a web browser, or a word processor (1 for definition + 1 for example).`
      },
      {
        q: 'State the output of each of the four logic gates when both inputs (where relevant) are 1: AND, OR, NOT, XOR.',
        marks: 4, tier: 'green',
        modelAnswer: `\u2022 AND: output = 1 when both inputs are 1 (1).\n\u2022 OR: output = 1 when at least one input is 1, so with both 1 the output is 1 (1).\n\u2022 NOT: takes a single input \u2014 NOT 1 = 0 (1).\n\u2022 XOR: output = 1 only when the inputs differ, so 1 XOR 1 = 0 (1).`
      },
      {
        q: 'State the difference between RAM and ROM.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 RAM is volatile (loses its contents when power is off) and is read/write; it stores the currently running programs and data (1).\n\u2022 ROM is non-volatile (keeps its contents without power) and is read-only; it stores the boot-up / BIOS instructions (1).`
      },
      {
        q: 'State the name of each of the three main components inside a CPU and the role of each.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 Arithmetic Logic Unit (ALU) \u2014 performs arithmetic and logic operations (1).\n\u2022 Control Unit (CU) \u2014 fetches and decodes instructions and coordinates the CPU by sending control signals (1).\n\u2022 Registers \u2014 small, very fast storage inside the CPU used to hold data and instructions currently being worked on (accept: cache \u2014 fast on-chip memory caching frequently used data) (1).`
      },
    ],
    amber: [
      {
        q: 'Describe the three stages of the fetch-execute cycle, naming at least three registers used.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 Fetch: the address of the next instruction in the Program Counter (PC) is copied into the Memory Address Register (MAR) and sent on the address bus (1).\n\u2022 The instruction at that address is returned on the data bus into the Memory Data Register (MDR), then copied into the Current Instruction Register (CIR); the PC is incremented (1).\n\u2022 Decode: the Control Unit examines the instruction in the CIR to work out the operation and any operands (1).\n\u2022 Execute: the operation is carried out \u2014 e.g. the ALU performs arithmetic and stores the result in the ACC, or data is transferred between a register and memory (1).\n\u2022 The cycle repeats for the next instruction (1).`
      },
      {
        q: 'Explain the difference between system software and application software, giving two examples of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 System software manages the hardware and provides services for other software to run on \u2014 the user does not usually interact with it directly (1).\n\u2022 Examples of system software: operating system (e.g. Windows, macOS, Linux); utility software such as antivirus, disk defragmenter, backup, file compression (1).\n\u2022 Application software is designed to perform a specific useful task for the end user; the user interacts with it directly (1).\n\u2022 Examples of application software: word processors (Microsoft Word), web browsers (Chrome), games, media players (1).`
      },
      {
        q: 'Describe how clock speed, cache size and the number of cores each affect the performance of a CPU.',
        marks: 6, tier: 'amber',
        modelAnswer: `\u2022 Clock speed is the number of clock cycles per second (measured in Hz/GHz); each instruction takes one or more cycles (1).\n\u2022 A higher clock speed means more instructions can be processed per second, so programs run faster (1).\n\u2022 Cache is a small, very fast memory on the CPU chip that stores recently-used instructions and data (1).\n\u2022 A larger cache reduces how often the CPU has to access slower main memory, so programs run faster (1).\n\u2022 A core is a complete processing unit; more cores allow multiple instructions/threads to be processed in parallel (1).\n\u2022 More cores improve performance for multi-threaded workloads but give little benefit to single-threaded programs (1).`
      },
      {
        q: 'Complete the truth table below for the Boolean expression Q = A AND (B OR NOT C), for inputs A, B, C where every binary combination is listed in the order 000, 001, 010, 011, 100, 101, 110, 111.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Build the intermediate column NOT C: 1, 0, 1, 0, 1, 0, 1, 0 (1).\n\u2022 Build B OR NOT C: 1, 0, 1, 1, 1, 0, 1, 1 (1).\n\u2022 AND with A (rows 0-3 give 0 because A = 0): Q rows 0-3 = 0, 0, 0, 0 (1).\n\u2022 For rows 4-7 where A = 1, Q = B OR NOT C: 1, 0, 1, 1 (1).\n(Complete Q column: 0 0 0 0 1 0 1 1.)`
      },
    ],
    red: [
      {
        q: 'Compare the Von Neumann architecture to an architecture with separate memories for instructions and data. Refer to the stored-program concept, memory access, and the practical reasons Von Neumann has dominated real computers.',
        marks: 6, tier: 'red',
        modelAnswer: `\u2022 Von Neumann uses a single shared main memory for both program instructions and data (1).\n\u2022 The stored-program concept means a program is stored in memory like data and fetched one instruction at a time by the CPU (1).\n\u2022 An alternative (Harvard) architecture uses physically separate memories and buses for instructions and data, which can be faster because instruction and data fetches happen in parallel (1).\n\u2022 However, Von Neumann is simpler and cheaper to build \u2014 only one memory and one bus system is needed (1).\n\u2022 It is also more flexible: any free memory can be used for either code or data, so machines run any program loaded into them without redesign (1).\n\u2022 These practical advantages have made Von Neumann the dominant architecture for general-purpose computers \u2014 desktops, laptops, smartphones and servers \u2014 despite the potential speed benefits of Harvard designs in embedded systems (1).`
      },
      {
        q: 'A media company is choosing secondary storage for three separate needs: (a) the editing workstation needs a fast drive to edit 4K video files; (b) the company needs 40 TB of cheap storage for a long-term archive; (c) finished films must be distributed to customers in shops. Recommend an appropriate storage type for each need and justify your choice. Refer to speed, capacity, cost per GB, durability and portability.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 (a) Editing workstation \u2014 choose an SSD (1).\n\u2022 Justification: SSDs have very fast read/write speeds with no mechanical seek time, which is essential when scrubbing through huge 4K video files; they are also durable and quiet (1).\n\u2022 Higher cost per GB is acceptable because the drive only needs to hold the current project, not a huge archive (1).\n\u2022 (b) Long-term archive \u2014 choose magnetic HDDs (or a RAID array / magnetic tape) (1).\n\u2022 Justification: HDDs offer very high capacity at a low cost per GB, which is ideal for 40 TB of rarely accessed data (1).\n\u2022 Speed is not critical for archival reads, and the extra cost of SSDs would be wasted (1).\n\u2022 (c) Distribution to customers in shops \u2014 choose optical media such as Blu-ray (or DVD) (1).\n\u2022 Justification: optical discs are very cheap to mass-produce, robust, widely compatible with consumer players, and the modest capacity (25 GB for Blu-ray) is enough for a full-length feature with extras (1).\n(Accept a well-argued alternative such as digital download, provided the candidate addresses the same factors.)`
      },
    ],
  },
  '3.5': {
    green: [
      {
        q: 'State two differences between a LAN and a WAN.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 A LAN covers a single geographical site (e.g. one building or campus) while a WAN covers a large geographical area such as a country or the world (1).\n\u2022 A LAN\u2019s hardware is owned by a single organisation, whereas a WAN typically uses leased infrastructure from third-party telecoms providers (1).\n(Accept also: LAN is usually faster than a WAN; LAN is cheaper to run once built.)`
      },
      {
        q: 'State the name of the device that (a) forwards packets between different networks, and (b) connects wireless devices to a wired network.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 (a) Router (1).\n\u2022 (b) Wireless access point (WAP) (1).`
      },
      {
        q: 'State the purpose of DNS and give an example of what it does.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 DNS (Domain Name System) translates human-readable domain names into the IP addresses that computers use to route packets (1).\n\u2022 Without DNS, users would have to remember numerical IP addresses for every website they wanted to visit (1).\n\u2022 Example: DNS translates bbc.co.uk into an IP address such as 151.101.0.81 so the browser can open a connection to the web server (1).`
      },
      {
        q: 'State the four layers of the TCP/IP model in order from highest to lowest.',
        marks: 4, tier: 'green',
        modelAnswer: `\u2022 Application (1).\n\u2022 Transport (1).\n\u2022 Internet (Network) (1).\n\u2022 Link (1).`
      },
    ],
    amber: [
      {
        q: 'Describe how a star topology works and give two advantages of using one instead of a bus topology.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 In a star topology every device is connected by its own cable to a central device, usually a switch (1).\n\u2022 All traffic between nodes passes through the central switch, which forwards each frame only out of the port leading to the destination (1).\n\u2022 Advantage 1: if one cable or one node fails, only that node is affected; the rest of the network keeps working (1).\n\u2022 Advantage 2: each node has a dedicated link to the switch, so there are no collisions between nodes sharing a cable (1).\n\u2022 (Also accept: easier to add/remove nodes, easier to locate faults, better security.) (1).`
      },
      {
        q: 'Describe the difference between an IP address and a MAC address, including an example format of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 An IP address is a logical address assigned to a device on a network by the network administrator or a DHCP server, and it can change when the device joins a different network (1).\n\u2022 Example format (IPv4): 192.168.0.10 \u2014 four decimal bytes separated by dots (1).\n\u2022 A MAC address is a physical hardware address burned into the device\u2019s Network Interface Card (NIC) at the factory; it is unique and does not change (1).\n\u2022 Example format: 00:1A:2B:3C:4D:5E \u2014 six pairs of hexadecimal digits separated by colons (1).`
      },
      {
        q: 'Explain the role of TCP and IP at their respective layers when a web page is loaded.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 TCP (Transmission Control Protocol) works at the Transport layer: it splits the web page data into numbered packets and opens a reliable connection between client and server (1).\n\u2022 TCP retransmits any packets that are lost and reassembles the packets in the correct order at the destination (1).\n\u2022 IP (Internet Protocol) works at the Internet/Network layer: it adds a source and destination IP address to each packet (1).\n\u2022 Routers along the way read the destination IP address and forward each packet towards the correct destination network, so the packets reach the web server (1).`
      },
      {
        q: 'Explain two advantages and two disadvantages of using cloud storage rather than a local hard disk.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Advantage: files can be accessed from any device with an internet connection, which makes collaboration and working from multiple devices easy (1).\n\u2022 Advantage: automatic backup on the provider\u2019s servers means a lost, stolen or broken device does not cause data loss (1).\n\u2022 Disadvantage: needs a reliable internet connection; without one, non-cached files may be unavailable, and uploading/downloading large files can be slow (1).\n\u2022 Disadvantage: ongoing subscription cost, and sensitive data sits on a third party\u2019s servers which may be breached or outaged (1).`
      },
    ],
    red: [
      {
        q: 'Compare the star, bus and mesh topologies. Your answer should refer to how each works, reliability, cost and when each would be appropriate to use.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Star: every node has its own cable to a central switch, which forwards frames only to the intended recipient (1).\n\u2022 Bus: every node shares a single backbone cable; only one device can transmit at a time (1).\n\u2022 Mesh (full): every node has a direct link to every other node, so data can take many alternative paths (1).\n\u2022 Reliability \u2014 star: one cable fault affects only that node, but the switch is a single point of failure; bus: one break in the backbone brings the whole network down; mesh: no single point of failure, self-healing (1).\n\u2022 Cost \u2014 bus is cheapest (one cable, no switch); star is moderate (needs a switch and a cable per node); full mesh is most expensive, needing n(n\u22121)/2 links (1).\n\u2022 Scalability \u2014 star scales easily up to the switch size; bus becomes slow as more devices cause more collisions; mesh is costly to scale because each new node needs many new links (1).\n\u2022 Uses \u2014 star is used in almost all modern LANs (schools, offices, homes); bus is now legacy, rarely used; mesh is used in the internet backbone and in critical or wireless-mesh Wi-Fi systems (1).\n\u2022 Conclusion: for a typical LAN, star is the best trade-off; mesh is chosen when reliability justifies the extra cost; bus is obsolete (1).`
      },
      {
        q: 'Discuss why encryption is used on modern networks. Your answer should include how data travels across a network, what encryption does, and at least one everyday example.',
        marks: 6, tier: 'red',
        modelAnswer: `\u2022 When data travels across a network it passes through many pieces of equipment owned by different parties (home router, ISP routers, internet backbone routers, the destination network), any of which could, in principle, read the packets passing through (1).\n\u2022 If the data is unencrypted (plaintext), sensitive information such as passwords, messages, bank details and files can be read by anyone with access to that equipment or the cable (1).\n\u2022 Encryption scrambles the plaintext into ciphertext using a key; only someone with the matching key can decrypt the ciphertext back to the original data (1).\n\u2022 Symmetric encryption (e.g. AES) uses a single shared key for both encryption and decryption and is used for the bulk of the data because it is fast (1).\n\u2022 Everyday example: HTTPS wraps HTTP in a TLS tunnel, so that when a user logs in to a banking site, their username, password and traffic cannot be read by any router between them and the server (1).\n\u2022 Other examples: Wi-Fi encryption (WPA2/WPA3) protects traffic between a device and the wireless access point so neighbours cannot read it out of the air; VPNs encrypt all traffic to a VPN server (1).`
      },
    ],
  },
  '3.6': {
    green: [
      {
        q: 'State what is meant by "cyber security" and give two reasons why it is important to organisations.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 Cyber security is the practice of protecting computer systems, networks, programs and data from unauthorised access, theft, damage or disruption (1).\n\u2022 Reason 1: to prevent financial loss from theft, fraud, ransom payments, fines, or downtime costs (1).\n\u2022 Reason 2: to protect reputation, customer trust and comply with legal duties such as the UK GDPR; attacks can also disrupt operations or endanger safety (e.g. hospitals) (1).\n(Also accept: protecting confidentiality, integrity and availability of data.)`
      },
      {
        q: 'State the difference between a virus, a worm and a Trojan.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 A virus is malicious code that attaches itself to a host file and runs when the host is opened/executed (1).\n\u2022 A worm is self-replicating malware that spreads automatically across a network without needing a host file or user action (1).\n\u2022 A Trojan is malware disguised as a legitimate program that the user is tricked into running; it does not self-replicate (1).`
      },
      {
        q: 'State what is meant by phishing and give two features of a typical phishing email that might help a user spot it.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 Phishing is a social-engineering attack that uses a fraudulent email (or other message) pretending to be from a trusted organisation, to trick the user into clicking a link or giving away information (1).\n\u2022 Feature 1: a generic greeting (e.g. "Dear Customer") and/or spelling and grammar errors (1).\n\u2022 Feature 2: urgent or threatening language; a suspicious sender address or link whose URL does not match the claimed organisation (1).\n(Also accept: unexpected attachments; requests for passwords or card numbers.)`
      },
      {
        q: 'State four common vulnerabilities that attackers exploit in computer systems.',
        marks: 4, tier: 'green',
        modelAnswer: `\u2022 Weak or default passwords (1).\n\u2022 Unpatched / out-of-date software (1).\n\u2022 Misconfigured access rights (users given more permission than they need) (1).\n\u2022 Removable media (USB sticks) and/or unsecured wireless networks bringing malware onto the network (1).\n(Also accept: untrained users, lack of backups.)`
      },
    ],
    amber: [
      {
        q: 'Describe how a DDoS attack works and explain why it is harder to stop than a simple DoS attack.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 An attacker controls a large number of compromised machines (a botnet) that have been infected with malware (1).\n\u2022 On command, every bot sends large volumes of traffic or requests to the same target server at once, overwhelming its bandwidth, CPU or connection limits (1).\n\u2022 Legitimate users can no longer get a reply from the server, so the service is "denied" (1).\n\u2022 It is harder to stop than a single-source DoS because the traffic comes from many different IP addresses (often ordinary-looking home users), so simple IP blocking is ineffective \u2014 defence needs upstream filtering and rate-limiting services (1).`
      },
      {
        q: 'Explain what a firewall does and describe one limitation of relying on a firewall alone to secure a network.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 A firewall is hardware or software that sits between a trusted network and an untrusted one (typically the internet) and inspects every packet that tries to cross (1).\n\u2022 It allows or blocks each packet according to a set of rules \u2014 for example blocking unsolicited inbound connections while allowing outgoing web traffic and its replies (1).\n\u2022 Limitation: a firewall does not stop attacks that arrive through channels the rules already allow \u2014 e.g. a phishing email, a malicious download through HTTPS, a user plugging in an infected USB, or an insider abusing legitimate access (1).\n\u2022 Therefore a firewall must be combined with anti-malware, training, updates and access controls to form layered defences (1).`
      },
      {
        q: 'Describe four features of a good password policy and explain why each helps security.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 Minimum length (e.g. 12+ characters) \u2014 makes brute-force attacks take far too long to succeed (1).\n\u2022 Mixture of upper, lower, digits and symbols (or long passphrases) \u2014 greatly increases the number of possible passwords (1).\n\u2022 Forbid common/dictionary words and previously leaked passwords \u2014 defeats dictionary attacks that try common passwords first (1).\n\u2022 Different password per site (supported by a password manager) \u2014 so a breach of one service does not compromise every account (1).\n\u2022 Account lockout or rate-limiting after failed attempts and multi-factor authentication \u2014 so even a correctly guessed password alone is not enough (1).`
      },
      {
        q: 'Explain the difference between encryption "in transit" and encryption "at rest", giving one example of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 Encryption in transit scrambles data as it moves across a network so that someone intercepting the traffic cannot read it (1).\n\u2022 Example in transit: HTTPS/TLS protects web traffic between a browser and a server (so passwords and card numbers can\u2019t be read by routers in between) (1).\n\u2022 Encryption at rest scrambles data stored on a disk or backup so that a stolen device or backup tape yields no readable information (1).\n\u2022 Example at rest: full-disk encryption on a laptop (e.g. BitLocker/FileVault) means a lost laptop does not leak the files on it (1).`
      },
    ],
    red: [
      {
        q: 'Discuss why human factors are often the weakest link in cyber security. Your answer should include at least three specific examples and explain how each is countered.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Technology alone cannot compensate for user behaviour \u2014 attackers often bypass strong technical defences by tricking a person (1).\n\u2022 Example 1 \u2014 phishing: a convincing email persuades an employee to click a link and enter their password into a fake site; no firewall or anti-malware is certain to block this (1).\n\u2022 Counter: regular training, simulated phishing tests, email filters and MFA so a stolen password alone is not enough (1).\n\u2022 Example 2 \u2014 blagging: an attacker rings the helpdesk pretending to be an employee and persuades staff to reset a password; again, technical controls are not triggered (1).\n\u2022 Counter: call-back procedures, verification policies, staff training, separation of duties (1).\n\u2022 Example 3 \u2014 weak/reused passwords or clicking on a malicious USB: users pick easy-to-remember passwords or plug in unknown drives found in the car park, bypassing perimeter defences (1).\n\u2022 Counter: password managers, strong password policy, disabled USB autorun, and AUPs forbidding use of unknown media (1).\n\u2022 Because most breaches begin with a human mistake, security must combine technical and procedural controls \u2014 training, clear policies, reporting culture, least-privilege access and tested backups \u2014 all of which build a culture where mistakes are less likely and more quickly recovered from (1).\n(Award up to 8 marks for any valid combination.)`
      },
      {
        q: 'A small online retailer asks you to recommend how to defend its website and customer data. Discuss a layered set of defences, covering at least TWO technical measures and TWO human/procedural measures, and briefly explaining how each addresses a specific threat.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Threat: data interception on public Wi-Fi or between browser and server. Defence (technical): serve the entire site over HTTPS with a valid TLS certificate so all traffic is encrypted in transit (1).\n\u2022 Threat: SQL injection through search or login forms. Defence (technical): use parameterised queries and input validation so attacker-supplied text cannot be executed as SQL (1).\n\u2022 Threat: brute-force attacks on customer accounts using leaked passwords. Defence (technical): require strong passwords, CAPTCHA and account lockout, and offer MFA for staff and customers (1).\n\u2022 Threat: ransomware encrypting product photos, orders and the database. Defence (technical): regularly patched systems plus anti-malware; offline/immutable backups following the 3-2-1 rule, tested by occasional restore (1).\n\u2022 Threat: phishing targeting the owners for credentials or fake supplier changes. Defence (human): regular training on phishing awareness; a policy that any change to bank details is verified by callback on a known number (1).\n\u2022 Threat: insider misuse or mistakes. Defence (human/procedural): principle of least privilege \u2014 each account only has the permissions it needs; leavers\u2019 accounts disabled promptly; acceptable use policy signed by staff (1).\n\u2022 Threat: DDoS during peak sale periods. Defence: upstream DDoS-mitigation (e.g. Cloudflare), rate limiting, incident-response plan with comms templates (1).\n\u2022 Overall: the defences operate at different layers \u2014 physical, network, host, application and data \u2014 so that a failure of any single control does not hand the attacker full access. This is the principle of defence in depth (1).\n(Award marks for any sensible threat-defence pair with a valid explanation, up to 8.)`
      },
    ],
  },
  '3.7': {
    green: [
      {
        q: 'State what is meant by a "relational database" and give one advantage of using one instead of a single flat file.',
        marks: 3, tier: 'green',
        modelAnswer: `\u2022 A relational database is a database that stores data in two or more linked tables, connected by primary-key/foreign-key relationships (1).\n\u2022 Each fact about the data is stored only once, in one table (1).\n\u2022 Advantage (any one): reduced data redundancy; better data integrity / consistency; easier to update because a change is made in only one place; easier to search across tables using SQL (1).`
      },
      {
        q: 'State the difference between a record and a field in a database table.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 A record is a single row of the table that holds all the data about one item (e.g. one student) (1).\n\u2022 A field is a single column of the table that holds one piece of information held about every record (e.g. the student\'s name) (1).`
      },
      {
        q: 'State what is meant by a primary key and give one example suitable for a Student table.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 A primary key is a field (or combination of fields) whose value uniquely identifies every record in the table; it cannot be NULL and no two rows share the same value (1).\n\u2022 Example: StudentID (e.g. \'S001\'), because it is unique, short and does not change over the student\'s time at the school (also accept: UPN, an auto-increment integer) (1).`
      },
      {
        q: 'State what is meant by a foreign key and give an example from a Customer/Order database.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 A foreign key is a field in one table whose values match the primary-key values of a different table, and is used to link the two tables together (1).\n\u2022 Example: CustomerID in the Order table is a foreign key referring to CustomerID (the primary key) in the Customer table; each order row is linked to the customer that placed it (1).`
      },
    ],
    amber: [
      {
        q: 'Describe three problems with storing data in a flat file rather than a relational database.',
        marks: 6, tier: 'amber',
        modelAnswer: `\u2022 Data redundancy: the same fact is stored many times (e.g. a teacher\'s name on every row of a student-class spreadsheet), wasting storage (1 for naming + 1 for explanation).\n\u2022 Data inconsistency: because the same value is typed repeatedly, copies can disagree (e.g. "Chloe Smith" and "Cloe Smith"), so searches and reports become unreliable (1 + 1).\n\u2022 Update anomalies: to change one fact (e.g. a room number) every row must be updated; missing one leaves the data inconsistent, and deleting the last row that mentioned something deletes the information entirely (1 + 1).\n(Also accept: difficulty searching; poor data integrity; no enforcement of referential links.)`
      },
      {
        q: 'Explain the structure of a one-to-many relationship, using Customer and Order as the example. State where the foreign key is placed and why.',
        marks: 4, tier: 'amber',
        modelAnswer: `\u2022 One customer can place many orders, but each order is placed by exactly one customer &mdash; a one-to-many relationship (1).\n\u2022 The Customer table has CustomerID as its primary key; the Order table has OrderID as its primary key (1).\n\u2022 The foreign key is placed in the Order table (the "many" side) as a field called CustomerID; every order row stores the ID of the customer who placed it (1).\n\u2022 Putting the foreign key on the many side allows many orders to reference the same customer without duplicating the customer\'s details on each row (1).`
      },
      {
        q: 'The library uses a table Book(BookID, Title, Author, Genre, Year, Copies). Write SQL for each of the following. (a) List the titles and years of every Fiction book, alphabetically by title. (b) Add a new book B010 "Coraline" by Neil Gaiman, Fantasy, 2002, with 2 copies. (c) Reduce the Copies of BookID B002 by 1.',
        marks: 6, tier: 'amber',
        modelAnswer: `\u2022 (a) SELECT Title, Year FROM Book WHERE Genre = \'Fiction\' ORDER BY Title ASC; &mdash; 1 mark SELECT/FROM correct columns, 1 mark WHERE/ORDER BY correct.\n\u2022 (b) INSERT INTO Book (BookID, Title, Author, Genre, Year, Copies) VALUES (\'B010\', \'Coraline\', \'Neil Gaiman\', \'Fantasy\', 2002, 2); &mdash; 1 mark INSERT INTO and column list, 1 mark correct VALUES with quotes on strings.\n\u2022 (c) UPDATE Book SET Copies = Copies - 1 WHERE BookID = \'B002\'; &mdash; 1 mark UPDATE/SET, 1 mark correct WHERE clause.`
      },
      {
        q: 'Given Customer(CustomerID PK, Name, Email) and Order(OrderID PK, CustomerID FK, OrderDate, Total), write SQL to list the Name of every customer and the OrderDate and Total of each of their orders, sorted alphabetically by name. Explain what would happen if you omitted the linking condition in the WHERE clause.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 SELECT Customer.Name, Order.OrderDate, Order.Total FROM Customer, Order WHERE Customer.CustomerID = Order.CustomerID ORDER BY Customer.Name ASC; (1 for correct FROM with two tables, 1 for the linking condition, 1 for correct SELECT and ORDER BY) (3).\n\u2022 If the linking condition Customer.CustomerID = Order.CustomerID were omitted, the result would be a Cartesian product: every customer paired with every order, not just with their own orders (1).\n\u2022 This would produce nonsense rows (e.g. Ravi Shah paired with another customer\'s order), so the linking condition is essential (1).`
      },
    ],
    red: [
      {
        q: 'A small school currently stores all student-enrolment data in a single spreadsheet with columns: StudentID, Name, Form, ClassCode, Subject, Teacher, Room. Discuss the problems with this design and describe in detail the relational schema that should replace it, including primary keys, foreign keys and relationships. Give at least one SQL query that would be harder to write against the flat file than against the relational design.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Problem 1 &mdash; redundancy: on the flat file, each student\'s name and form appear on every row where they are enrolled, and each class\'s details (subject, teacher, room) appear on every row where the class is taken, wasting storage (1).\n\u2022 Problem 2 &mdash; inconsistency and update anomalies: changing a teacher\'s room requires updating many rows; missing one leaves the data inconsistent, and misspellings between rows make reliable searching impossible (1).\n\u2022 Relational replacement: split into three tables. Student(StudentID [PK], Name, Form). Class(ClassCode [PK], Subject, Teacher, Room). Enrolment(StudentID [FK &amp; part of PK], ClassCode [FK &amp; part of PK]) &mdash; a linking table with a composite primary key (1 for naming all three tables + 1 for identifying PKs and FKs correctly) (2).\n\u2022 Relationships: one Student has many Enrolments; one Class has many Enrolments &mdash; i.e. Student and Class are in a many-to-many relationship via Enrolment (1).\n\u2022 Each fact is stored in one place: a teacher\'s room is changed by updating a single cell in Class; a student\'s name is changed in one row of Student. There are no update anomalies or orphaned records (1).\n\u2022 Example query harder on flat file: "change the room for CS10A from G14 to G22". On the flat file every row with CS10A must be updated; on the relational version it is a single UPDATE: UPDATE Class SET Room = \'G22\' WHERE ClassCode = \'CS10A\'; (1).\n\u2022 Overall evaluation: the relational design is clearly superior for any non-trivial school data &mdash; less storage, no inconsistency, easier updates and powerful SQL querying across all three tables via joins (1).\n(Award up to 8 marks for any valid combination of the above.)`
      },
      {
        q: 'An online shop needs a database. The shop sells many products; each customer can place many orders, and each order can contain many products (with a quantity for each). Design a relational schema for this scenario. Name each table, its fields, its primary key and any foreign keys. Explain why your design needs a linking table and write TWO SQL queries that demonstrate the design working. (One query should retrieve data from more than one table.)',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Tables and keys: Customer(CustomerID [PK], Name, Email, Postcode) &mdash; stores customer details once (1). Product(ProductID [PK], Name, Category, Price, Stock) &mdash; stores product details once (1). Order(OrderID [PK], CustomerID [FK to Customer], OrderDate) &mdash; one Customer has many Orders so the FK is here (1). OrderLine(OrderID [FK to Order], ProductID [FK to Product], Quantity) with composite primary key (OrderID, ProductID) (1).\n\u2022 Why the linking table: the relationship between Order and Product is many-to-many (one order can contain many products; one product can appear on many orders). A many-to-many relationship cannot be expressed with a single foreign key, so a linking table OrderLine is needed with two foreign keys, whose combination is the primary key (1).\n\u2022 Query 1 (single table, SELECT with filter and sort): SELECT Name, Price FROM Product WHERE Category = \'Games\' AND Price &lt;= 20 ORDER BY Price ASC; (1).\n\u2022 Query 2 (cross-table join): SELECT Customer.Name, Order.OrderDate, Order.OrderID FROM Customer, Order WHERE Customer.CustomerID = Order.CustomerID AND Order.OrderDate = \'2026-04-01\' ORDER BY Customer.Name ASC; (1 for correct FROM &amp; linking condition + 1 for correct SELECT/ORDER BY) (2).\n(Alternative query 2: list every product and its quantity on order O500 by joining Order, OrderLine and Product on their IDs. Award full marks for any valid cross-table query showing correct linking conditions.)`
      },
    ],
  },
  '3.8': {
    green: [
      {
        q: 'State the name and year of the UK Act that controls how personal data is collected, stored and used.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 The Data Protection Act 2018 (1 for correct name, 1 for correct year).\n\u2022 It implements the UK version of the General Data Protection Regulation (UK-GDPR).`
      },
      {
        q: 'State three principles of the Data Protection Act 2018.',
        marks: 3, tier: 'green',
        modelAnswer: `Any three of (1 mark each):\n\u2022 Lawful, fair and transparent \u2014 data collected with a valid legal basis and clear information to the person.\n\u2022 Purpose limitation \u2014 data used only for the specific purpose stated at collection.\n\u2022 Data minimisation \u2014 collect only what is necessary.\n\u2022 Accuracy \u2014 keep data accurate and up to date.\n\u2022 Storage limitation \u2014 keep data no longer than necessary.\n\u2022 Integrity and confidentiality (security) \u2014 protect data from unauthorised access or loss.\n\u2022 Accountability \u2014 be able to demonstrate compliance.`
      },
      {
        q: 'State what is meant by the "digital divide" and give one example of a group commonly affected by it.',
        marks: 2, tier: 'green',
        modelAnswer: `\u2022 The gap between those who have good access to digital technology (devices, fast internet, the skills to use them) and those who do not (1).\n\u2022 Example (any one): low-income households; older people; people in rural areas with poor broadband; disabled users; people without home internet (1).`
      },
      {
        q: 'State four offences defined by the Computer Misuse Act 1990.',
        marks: 4, tier: 'green',
        modelAnswer: `\u2022 s.1: Unauthorised access to computer material (1).\n\u2022 s.2: Unauthorised access with intent to commit or facilitate further offences (1).\n\u2022 s.3: Unauthorised acts with intent to impair the operation of a computer (including modification / DDoS / malware) (1).\n\u2022 s.3A: Making, supplying or obtaining articles (e.g. hacking tools / malware) for use in s.1 or s.3 offences (1).`
      },
    ],
    amber: [
      {
        q: 'Describe three environmental impacts of the widespread use of digital technology. For each, suggest one way the impact can be reduced.',
        marks: 6, tier: 'amber',
        modelAnswer: `\u2022 High energy and water use by data centres for running and cooling servers (1). Mitigation: use renewable-sourced electricity, site in cool climates, reuse waste heat (1).\n\u2022 Manufacturing footprint: mining, chip fabrication and assembly produce large carbon emissions before a device is even used (1). Mitigation: keep devices in service longer (reuse, refurbishment), choose repairable designs (1).\n\u2022 E-waste: discarded electronics contain toxic chemicals (lead, mercury, cadmium) that contaminate landfill and are often sent to unsafe informal recycling overseas (1). Mitigation: formal recycling, take-back schemes, circular-economy policies such as right-to-repair (1).`
      },
      {
        q: 'Explain, with reference to the correct UK Act, how an employee who (a) logs in with a colleague\'s stolen password and then (b) copies a database of customer records for a rival firm has potentially broken the law.',
        marks: 6, tier: 'amber',
        modelAnswer: `\u2022 (a) Accessing the system with someone else\'s credentials is unauthorised access under section 1 of the Computer Misuse Act 1990 (1 for Act name and year, 1 for s.1 and reason).\n\u2022 Because the access was carried out with the intent of committing a further offence (theft of customer data / breach of confidence), it also falls under section 2 of the Computer Misuse Act 1990 (1).\n\u2022 (b) Copying customer records without a lawful basis processes personal data contrary to the Data Protection Act 2018 (1 for Act name and year).\n\u2022 Specifically the principles of lawful, fair and transparent processing and purpose limitation are broken, and the company\'s duty of integrity/confidentiality to its customers is breached (1).\n\u2022 The employer may also have a civil claim for breach of contract and confidentiality; the ICO may fine the company if it had inadequate controls (1).`
      },
      {
        q: 'Explain what is meant by "informed consent" in a data-privacy context. Give two reasons why it can be difficult to achieve in practice.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 Informed consent means the data subject has been clearly told what data will be collected, why, by whom, how long it will be kept and who it will be shared with, and has agreed on that basis \u2014 freely, specifically and unambiguously (1 + 1).\n\u2022 UK-GDPR additionally requires that consent must be as easy to withdraw as to give (1).\n\u2022 Reason 1 \u2014 privacy policies are long and written in legalese, so users rarely read them fully (1).\n\u2022 Reason 2 \u2014 apps bundle many purposes behind a single "I agree" button and use dark patterns that push users to accept rather than decline (also accept: pre-ticked boxes; consent fatigue from daily cookie banners; users may have no practical alternative if a service is essential) (1).`
      },
      {
        q: 'Describe how Creative Commons licensing helps creators and users of digital content, and give an example of what a "CC BY-NC" licence permits and forbids.',
        marks: 5, tier: 'amber',
        modelAnswer: `\u2022 Creative Commons is a family of free, standard licences under the Copyright, Designs and Patents Act 1988 that lets creators grant permissions to use their work in advance (1).\n\u2022 Users benefit because they can reuse content (images, music, text) without individually contacting the creator, knowing exactly what is allowed (1).\n\u2022 Creators benefit because their work reaches a wider audience while they retain chosen rights (e.g. attribution, non-commercial only) (1).\n\u2022 CC BY-NC permits any reuse, including adaptation, as long as the creator is credited (BY) and the use is non-commercial (NC) (1).\n\u2022 It forbids using the work for commercial purposes (e.g. selling T-shirts printed with the image) without a separate licence from the creator (1).`
      },
    ],
    red: [
      {
        q: 'A UK secondary school plans to introduce AI-based software that automatically marks students\' written homework and detects plagiarism. Discuss the ethical, legal, privacy and environmental issues the school should consider, and make a recommendation.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Ethical: AI-marking may be biased against students whose writing style differs from the training data (e.g. EAL learners); automated plagiarism flags can unfairly damage reputations; teachers\' professional judgement is partly replaced by a "black box" algorithm (1 + 1).\n\u2022 Legal (DPA 2018): student homework is personal data about children, so the school must identify a lawful basis, conduct a Data Protection Impact Assessment, observe data minimisation, and ensure a right to human review for significant decisions (1 for DPA name & year + 1 for the reasoning).\n\u2022 Legal (Copyright, Designs and Patents Act 1988): if student work is used to train the supplier\'s future AI models, that is a further use that requires consent and a clear contractual licence (1).\n\u2022 Privacy: homework may reveal personal information; cloud storage increases breach risk; parental consent is needed for under-16s and consent must be genuinely informed (1).\n\u2022 Environmental: extra compute in a data centre adds to carbon footprint, though this may be offset by less paper printing \u2014 likely a small net impact (1).\n\u2022 Stakeholders: students (benefit from instant feedback; risk of unfair marking), teachers (workload reduced but role changed), parents (consent and transparency), the school (legal duties), the supplier (contract terms) (1).\n\u2022 Balanced recommendation: proceed ONLY with a DPIA under the Data Protection Act 2018, a written contract forbidding the supplier from reusing student work for training, a clear process for human review of AI grades or plagiarism flags, and an opt-out for families with limited home internet (1).\n(Award up to 8 marks for any valid combination covering at least three of the impact areas with specific mitigations and a conditional conclusion.)`
      },
      {
        q: 'A ransomware attack on a UK hospital encrypts patient records and appointment systems for four days, forcing surgeries to be cancelled. Discuss the legal and ethical consequences, identifying all relevant UK Acts by name and year and weighing the impact on different stakeholders.',
        marks: 8, tier: 'red',
        modelAnswer: `\u2022 Computer Misuse Act 1990 section 1 (unauthorised access) and section 3 (unauthorised acts with intent to impair the operation of a computer) are committed by the attacker (1 for Act name and year, 1 for both relevant sections).\n\u2022 If the attacker provided or sold the ransomware tooling, section 3A (making/supplying articles for use in offences) also applies (1).\n\u2022 Data Protection Act 2018: the hospital is the data controller and has a duty to protect patient data under the integrity and confidentiality principle; a serious breach must be reported to the Information Commissioner\'s Office within 72 hours; affected patients may need to be notified (1 for Act + 1 for duties).\n\u2022 Stakeholders and impact: patients \u2014 cancelled operations and potential harm to health, loss of confidentiality of sensitive medical records (1); staff \u2014 must revert to paper, overwork, stress (1); hospital management \u2014 regulatory fines, reputational damage, ransom decision (1); attackers \u2014 criminal liability; wider NHS \u2014 pressure to fund better cyber security; regulators \u2014 may need to update guidance (1).\n\u2022 Ethical dimension: the hospital faces a serious dilemma about whether to pay the ransom (paying restores services quickly but funds future attacks); transparency to patients is an ethical as well as a legal duty.\n\u2022 Conclusion: the event triggers multiple UK Acts simultaneously (CMA 1990, DPA 2018) and the strongest mitigations are preventative \u2014 robust offline backups, patching, staff training \u2014 combined with a clear incident-response plan; the hospital should cooperate fully with the ICO and the National Cyber Security Centre (1).\n(Award up to 8 marks for any valid combination.)`
      },
    ],
  },

};
