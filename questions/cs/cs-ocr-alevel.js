/*
 * OCR A-Level Computer Science (H446) — Multiple-Choice Question Bank
 * Keyed by H446 top-level topic (1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3).
 * Each topic holds: { name, green: [], amber: [], red: [] }.
 * 50 questions per topic: 20 green + 20 amber + 10 red.
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 MCQs at random.
 * answer: 0-based index of correct option.
 */

const CS_OCR_QUESTIONS = {

  /* ─────────────────────────────────────────────────────────── 1.1
     Characteristics of contemporary processors, I/O and storage devices
     Topics: 1.1.1 Structure & function of processor, 1.1.2 Types of processor,
             1.1.3 Input/output/storage
  */
  '1.1': {
    name: 'Characteristics of Processors, I/O & Storage',
    green: [
      { q: 'What does MAR stand for?', options: ['Memory Access Register','Memory Address Register','Main Address Register','Machine Address Register'], answer: 1 },
      { q: 'Which register holds the instruction currently being decoded and executed?', options: ['MDR','PC','CIR','ACC'], answer: 2 },
      { q: 'What does the Status Register (SR) in a CPU hold?', options: ['The result of the last ALU operation','Flags indicating the outcome of operations (e.g. zero, carry, negative, overflow)','The address of the next instruction','A copy of the instruction being executed'], answer: 1 },
      { q: 'Which of these is a characteristic of a RISC processor?', options: ['Large, variable-length instruction set','Simple, fixed-length instructions typically executing in one cycle','Uses microcode to decode every instruction','Optimised purely for desktop operating systems'], answer: 1 },
      { q: 'Which type of memory is volatile?', options: ['ROM','Flash','RAM','Magnetic tape'], answer: 2 },
      { q: 'Which of the following best describes virtual storage?', options: ['An area of cache used for graphics','Secondary storage used as though it were additional RAM, managed by the OS','A backup copy of ROM','An encrypted region of the SSD'], answer: 1 },
      { q: 'What is the purpose of the Program Counter (PC)?', options: ['Stores the result of the most recent arithmetic operation','Holds the address of the next instruction to be fetched','Holds the instruction currently being decoded','Counts the number of programs in memory'], answer: 1 },
      { q: 'Which component of the CPU performs arithmetic and logical operations?', options: ['Control Unit','ALU','MDR','Clock'], answer: 1 },
      { q: 'What is the role of the Control Unit (CU)?', options: ['Performs calculations','Stores operands before they are used','Decodes instructions and coordinates signals across the CPU','Holds data temporarily while it waits for the bus'], answer: 2 },
      { q: 'The Accumulator (ACC) is best described as:', options: ['A register storing the final result, or an intermediate result, of ALU operations','A general-purpose store for instructions','A pointer to the next instruction','A flag register'], answer: 0 },
      { q: 'Which bus is unidirectional in a Von Neumann architecture?', options: ['Data bus','Address bus','Power rail','Control bus'], answer: 1 },
      { q: 'Which factor has NO direct effect on CPU performance?', options: ['Clock speed','Number of cores','Cache size','Colour of the heatsink'], answer: 3 },
      { q: 'In a Von Neumann architecture, instructions and data share:', options: ['Separate memories and buses','The same memory and bus','A dedicated instruction bus','The cache only'], answer: 1 },
      { q: 'Harvard architecture differs from Von Neumann because it has:', options: ['Only one register','Separate memories and buses for instructions and data','No ALU','No program counter'], answer: 1 },
      { q: 'Which is an example of secondary storage?', options: ['L2 cache','RAM','Solid-State Drive','CPU register'], answer: 2 },
      { q: 'Which storage medium uses spinning magnetic platters read by a moving head?', options: ['SSD','HDD','Optical disc','Flash drive'], answer: 1 },
      { q: 'Which of the following is non-volatile?', options: ['Registers','SRAM','DRAM','Flash memory'], answer: 3 },
      { q: 'Which pair correctly identifies how data is written on an optical disc?', options: ['Pits and lands read by a laser','North and south magnetic domains','Stored charges in floating gates','Punched holes in mylar tape'], answer: 0 },
      { q: 'A co-processor is best described as:', options: ['A processor that replaces the CPU entirely','A specialised processor that supplements the CPU for specific tasks (e.g. FPU, GPU)','A backup CPU used only when the main CPU fails','A cache controller'], answer: 1 },
      { q: 'SIMD stands for:', options: ['Single Instruction Multiple Data','Serial Input Main Data','System Interrupt Memory Driver','Shared Instruction Module Device'], answer: 0 },
    ],
    amber: [
      { q: 'A processor has no cache. Suggest the most likely impact on performance.', options: ['No impact — cache is only used for graphics','Every data/instruction request goes to main memory, significantly increasing average access latency','The CPU cannot pipeline instructions','Clock speed automatically increases to compensate'], answer: 1 },
      { q: 'An instruction is fetched that depends on the result of the previous, uncompleted instruction in the pipeline. Identify the hazard.', options: ['Structural hazard','Data (RAW) hazard','Control hazard','Resource hazard'], answer: 1 },
      { q: 'In register transfer notation, which expression correctly describes the start of the fetch stage?', options: ['MDR ← [MAR]; PC ← PC + 1','MAR ← [PC]; PC ← PC + 1','CIR ← [ACC]; PC ← PC − 1','MAR ← [CIR]; MDR ← [PC]'], answer: 1 },
      { q: 'A GPU executes the same shader on thousands of pixels simultaneously. Which processing model does this best illustrate?', options: ['MIMD','SISD','SIMD','MISD'], answer: 2 },
      { q: 'Why is L1 cache typically smaller than L2 cache despite being faster?', options: ['Smaller caches store more data per byte','Faster SRAM is expensive and physically larger per bit, and short access times require the cache to be physically close to the core','ROM limitations constrain L1 size','L2 always shares silicon with the GPU'], answer: 1 },
      { q: 'A pipeline experiences a control hazard after a conditional branch. Which technique most directly reduces the penalty?', options: ['Write-back caching','Branch prediction with speculative execution','Increasing the address bus width','Adding more ROM'], answer: 1 },
      { q: 'A 32-bit address bus can directly address up to how many unique memory locations?', options: ['2^16','2^24','2^32','2^64'], answer: 2 },
      { q: 'Doubling the width of the data bus (other factors unchanged) is most likely to:', options: ['Halve the clock speed','Double the amount of data transferred per bus cycle','Reduce the number of addressable memory locations','Eliminate the need for cache'], answer: 1 },
      { q: 'Which situation would most benefit from a multicore CPU rather than a higher clock speed?', options: ['Running a single long-division instruction','Compiling many source files in parallel','Reading one file from an HDD','Drawing a single pixel'], answer: 1 },
      { q: 'Two instructions need the same memory port in the same cycle. This is an example of:', options: ['A data hazard','A structural hazard','A control hazard','Cache coherency'], answer: 1 },
      { q: 'Operand forwarding (register bypassing) in a pipeline primarily mitigates:', options: ['Structural hazards','Control hazards','Data (RAW) hazards','Cache misses'], answer: 2 },
      { q: 'A program repeatedly iterates over a 10 MB array. Which cache property matters most for performance?', options: ['L1 capacity','The ability to hold the whole array — so larger L2/L3 or good streaming/prefetch','Register count','ROM size'], answer: 1 },
      { q: 'SSDs typically outperform HDDs for random reads because:', options: ['They spin faster','They have no mechanical seek/rotational latency — electronic access to any cell is near-constant time','They use optical lasers','They store data in RAM'], answer: 1 },
      { q: 'Which statement about magnetic tape is TRUE?', options: ['It provides the fastest random access','It offers high capacity at low cost per GB, but only sequential access — suited to archival backup','It is volatile','It is faster than SSD for random reads'], answer: 1 },
      { q: 'A system uses paging to implement virtual memory. A page fault occurs when:', options: ['A page has an invalid checksum','The referenced page is not currently resident in RAM and must be loaded from disk','Two threads access the same page','The CPU cache is full'], answer: 1 },
      { q: 'In a 5-stage pipeline with no hazards, after the pipeline is full the throughput approaches:', options: ['1 instruction every 5 cycles','1 instruction per cycle','5 instructions per cycle','0.2 instructions per cycle'], answer: 1 },
      { q: 'A GPU is poor at which type of workload?', options: ['Large matrix multiplication','Rendering millions of independent pixels','Highly branch-divergent code with complex control flow','Vectorised image filters'], answer: 2 },
      { q: 'Which feature is typical of CISC but NOT of RISC?', options: ['Fixed-length instructions','Load/store architecture','Single-cycle execution','Complex instructions implemented via microcode'], answer: 3 },
      { q: 'A cache hit rate rises from 90% to 95%. If RAM access is 100 ns and cache access is 1 ns, roughly how does average access time change?', options: ['Rises from 11 ns to 6 ns','Falls from ~10.9 ns to ~5.95 ns','Stays the same','Doubles'], answer: 1 },
      { q: 'Which is the most accurate reason DRAM must be periodically refreshed?', options: ['Its transistors wear out quickly','Each cell stores a charge on a capacitor that leaks over time and must be rewritten','The OS resets memory every second','It shares wiring with the GPU'], answer: 1 },
    ],
    red: [
      { q: 'A real-time embedded controller must execute signal-processing instructions deterministically with minimum power use. Which processor choice is most appropriate and why?', options: ['A high-clock x86 CISC processor — complex instructions always execute faster','A RISC processor — simple fixed-length instructions support predictable timing, efficient pipelining and low power','A desktop GPU — thousands of cores guarantee determinism','A co-processor alone, without any main CPU'], answer: 1 },
      { q: 'A program exhibits poor temporal locality but strong spatial locality. Which cache design change would yield the greatest improvement?', options: ['Reduce the cache line size to store more unrelated items','Increase the cache line (block) size so that adjacent data is prefetched together','Disable the cache and rely on registers only','Move all data to ROM'], answer: 1 },
      { q: 'Evaluate: "Adding a third core to a dual-core CPU will always increase throughput by 50%." Which statement is most accurate?', options: ['True — performance scales linearly with cores','False — by Amdahl\'s Law, any serial fraction caps the speedup, and shared memory bandwidth, synchronisation overhead and cache coherency traffic further limit gains','True, provided clock speed is constant','False — adding cores always decreases throughput'], answer: 1 },
      { q: 'A 5-stage pipeline runs at 2 GHz with an ideal CPI of 1. A benchmark shows 25% of cycles are lost to stalls and flushes. What is the effective instruction throughput?', options: ['2.0 billion instructions/sec','1.5 billion instructions/sec','1.0 billion instructions/sec','0.5 billion instructions/sec'], answer: 1 },
      { q: 'A 2-bit dynamic branch predictor outperforms a 1-bit predictor on loop-dominated code because:', options: ['It uses twice as much cache','It requires two consecutive mispredictions to change its prediction, so a single unusual loop exit does not flip its state','It halves the clock cycle','It eliminates data hazards'], answer: 1 },
      { q: 'A workload of 10^9 floating-point multiplies must be completed under a fixed power budget. Compare: (A) 16 CPU cores, (B) one GPU with 2048 shader cores. Which judgement is most defensible?', options: ['A wins — CPUs always beat GPUs','B wins in throughput/Watt for this regular, data-parallel workload because the GPU amortises control logic across many ALUs; A is better only if the code has heavy branching or small batches','Tie — they are architecturally identical','A wins because GPUs cannot do floating point'], answer: 1 },
      { q: 'A design team is choosing between a larger L1 cache and adding an extra pipeline stage to allow a higher clock speed. Which tradeoff is most significant?', options: ['Larger L1 is always better','A larger L1 increases hit rate but its longer access latency may force extra pipeline stages anyway, raising branch-misprediction and load-use penalties — gains depend on workload locality','Adding a pipeline stage cannot change clock speed','Both changes have no impact on IPC'], answer: 1 },
      { q: 'On a system with 64-byte cache lines, a program accesses an array of 8-byte doubles sequentially. Cache misses occur approximately once every:', options: ['1 access','8 accesses','64 accesses','512 accesses'], answer: 1 },
      { q: 'Which scenario would LEAST benefit from switching HDDs to SSDs?', options: ['A database with heavy random I/O','A laptop OS boot disk','A cold archive that is written once and rarely read, where £/GB dominates the decision','A game asset store with many small files'], answer: 2 },
      { q: 'A developer observes that adding threads past 8 on an 8-core CPU no longer improves throughput and sometimes worsens it. The best explanation is:', options: ['Threads are free, so this is impossible','Once cores are saturated, extra threads add context-switch, synchronisation and cache-coherency overhead with no parallel gain — matching Amdahl\'s Law and the roofline model','The OS has a bug','Clock speed drops linearly with thread count'], answer: 1 },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.2
     Software and software development
  */
  '1.2': {
    name: 'Software and Software Development',
    green: [
      { q: 'Which component of an operating system interacts directly with the hardware?', options: ['Shell','Kernel','Application layer','File manager'], answer: 1 },
      { q: 'What does HAL stand for in the context of operating systems?', options: ['Hardware Abstraction Layer','High Access Link','Hardware Allocation Logic','Host Addressable Loader'], answer: 0 },
      { q: 'Which of these is a utility program?', options: ['Web browser','Word processor','Disk defragmenter','Database application'], answer: 2 },
      { q: 'Which translator converts high-level source code into machine code in one go, before execution?', options: ['Interpreter','Compiler','Assembler','Linker'], answer: 1 },
      { q: 'Which translator converts assembly language into machine code?', options: ['Compiler','Interpreter','Assembler','Loader'], answer: 2 },
      { q: 'Which stage of compilation removes whitespace and comments and produces a stream of tokens?', options: ['Syntax analysis','Lexical analysis','Semantic analysis','Code generation'], answer: 1 },
      { q: 'Which of the following is NOT a stage of compilation?', options: ['Lexical analysis','Syntax analysis','Execution','Code generation'], answer: 2 },
      { q: 'Which software development methodology delivers software in short, iterative sprints with frequent customer feedback?', options: ['Waterfall','Agile','RAD','Spiral'], answer: 1 },
      { q: 'Pair programming and test-driven development are practices most closely associated with:', options: ['Waterfall','RAD','Extreme Programming (XP)','Spiral'], answer: 2 },
      { q: 'Which testing strategy examines the internal structure and logic of code?', options: ['Black-box testing','White-box testing','Acceptance testing','Beta testing'], answer: 1 },
      { q: 'Which paradigm organises a program around objects that combine state and behaviour?', options: ['Procedural','Object-oriented','Functional','Declarative'], answer: 1 },
      { q: 'Which of these is a low-level programming language?', options: ['Python','Java','Assembly language','SQL'], answer: 2 },
      { q: 'What does the assembly mnemonic ADD do?', options: ['Adds two values and stores the result in a register','Moves data between registers','Branches to a new address','Compares two values'], answer: 0 },
      { q: 'Which addressing mode uses the operand itself as the data value (e.g. MOV R1, #5)?', options: ['Direct','Immediate','Indirect','Indexed'], answer: 1 },
      { q: 'What is the main purpose of a linker?', options: ['Translate source code to object code','Combine object files and libraries into a single executable','Load an executable into RAM','Perform lexical analysis'], answer: 1 },
      { q: 'A library is best described as:', options: ['A pre-compiled collection of reusable routines','The source code of an operating system','A form of virtual memory','A debugging tool'], answer: 0 },
      { q: 'Which statement about open-source software is TRUE?', options: ['The source code is freely available and may be modified and redistributed under its licence','It must always be free of charge','It cannot be used commercially','The source code is never shared'], answer: 0 },
      { q: 'Which scheduling algorithm gives each process a fixed time-slice in turn?', options: ['First-Come-First-Served (FCFS)','Shortest Job First (SJF)','Round Robin','Priority'], answer: 2 },
      { q: 'Which type of interrupt is caused by hardware such as a keyboard key-press?', options: ['Software interrupt','Hardware interrupt','Trap','Exception'], answer: 1 },
      { q: 'What is a page fault?', options: ['A checksum error in a page of memory','An attempt to access a page of virtual memory that is not currently in RAM','A corrupted sector on disk','A failed CPU instruction'], answer: 1 },
    ],
    amber: [
      { q: 'A program must run on many different CPU architectures without recompilation. Which approach is most suitable?', options: ['Compile to native machine code for one architecture','Compile to intermediate bytecode executed by a Virtual Machine','Interpret the original source on every target','Assemble by hand per architecture'], answer: 1 },
      { q: 'An interpreter is chosen over a compiler for a rapid prototyping project. Which is the strongest justification?', options: ['Interpreters always produce faster executables','Interpreters execute source line-by-line, so edits are tested immediately without a separate compile step','Interpreters use less memory than the finished program','Interpreters produce smaller binaries'], answer: 1 },
      { q: 'Which assembly instruction most directly corresponds to "copy the contents of memory location 200 into R1" using direct addressing?', options: ['MOV R1, #200','LDR R1, 200','LDR R1, [R2]','LDR R1, [R2, #200]'], answer: 1 },
      { q: 'A programmer writes LDR R1, [R2]. Which addressing mode is used?', options: ['Immediate','Direct','Indirect (register indirect)','Indexed'], answer: 2 },
      { q: 'Indexed addressing (e.g. LDR R1, [R2, #4]) is most useful for:', options: ['Loading a constant','Accessing elements of an array relative to a base address','Implementing recursion','Handling interrupts'], answer: 1 },
      { q: 'Which scenario best justifies the Waterfall model?', options: ['A research project with highly uncertain, evolving requirements','A well-understood problem with fixed, fully specified requirements up front','A team wanting to deliver small working increments every two weeks','A start-up experimenting with a new user interface'], answer: 1 },
      { q: 'A team is developing avionics software for a passenger aircraft. Which methodology is most appropriate and why?', options: ['Agile — maximum flexibility for changing features','Waterfall/Spiral with rigorous documentation and verification — traceability and safety-critical requirements demand thorough, staged review','RAD — prototypes replace specifications','Extreme Programming — pair programming is sufficient for certification'], answer: 1 },
      { q: 'In round-robin CPU scheduling, the length of the time quantum is critical because:', options: ['Too long approaches FCFS behaviour; too short spends most time on context-switch overhead','It determines page-fault frequency','It fixes the size of the scheduler\'s priority queue','It sets the clock speed of the CPU'], answer: 0 },
      { q: 'A system uses Shortest Job First (SJF) scheduling. Which is the main drawback?', options: ['It cannot be used on multicore CPUs','Long jobs may suffer starvation if short jobs keep arriving','It always causes deadlock','It requires more RAM than round-robin'], answer: 1 },
      { q: 'Polling differs from interrupt-driven I/O because:', options: ['Polling is always faster','Polling has the CPU repeatedly check device status, wasting cycles; interrupt-driven I/O lets devices signal the CPU only when service is required','Polling works only with network cards','Polling requires a separate co-processor'], answer: 1 },
      { q: 'During compilation, which stage would detect the error "undeclared variable x"?', options: ['Lexical analysis','Syntax analysis','Semantic analysis','Code generation'], answer: 2 },
      { q: 'Static linking differs from dynamic linking in that:', options: ['Static linking happens at runtime','Static linking copies library code into the executable at build time; dynamic linking resolves library references at load/run time from shared libraries','Static linking only works for interpreted languages','Dynamic linking produces bigger executables'], answer: 1 },
      { q: 'Which is a clear benefit of using shared (dynamic) libraries over statically linking all code?', options: ['Smaller executables and a single copy of a library shared by many programs; updates to the library benefit all programs','Programs always run faster with shared libraries','Shared libraries remove all dependency problems','Shared libraries convert source code into machine code'], answer: 0 },
      { q: 'A polymorphism example in an OOP program is best illustrated by:', options: ['Two unrelated classes with the same attribute name','A subclass overriding a method so the same call produces different behaviour depending on the object type','A class hiding its internal data using private attributes','A constructor initialising fields'], answer: 1 },
      { q: 'A functional programming language is described as having "immutable data and pure functions". This means:', options: ['Functions may freely modify global state','Variables can be reassigned at any time','Data cannot be changed after creation, and pure functions have no side effects and always give the same output for the same input','Functions can only return integers'], answer: 2 },
      { q: 'Which is a characteristic of declarative languages such as SQL?', options: ['The programmer specifies the sequence of steps to obtain the result','The programmer specifies WHAT result is required and the language decides HOW to produce it','They must be compiled to assembly','They cannot be used for data querying'], answer: 1 },
      { q: 'Event-driven programming is most suitable for:', options: ['A batch payroll calculation','A GUI application responding to user clicks, key-presses and timer events','Modelling pure mathematical functions','A monolithic scientific simulation run overnight'], answer: 1 },
      { q: 'Just-in-time (JIT) compilation in a virtual machine works by:', options: ['Compiling all bytecode to machine code before execution starts','Interpreting every instruction every time it runs','Compiling hot sections of bytecode to native machine code at runtime and caching the result','Compiling on a separate server and downloading the result'], answer: 2 },
      { q: 'Which utility software would most directly improve HDD read performance after a long period of heavy use?', options: ['Antivirus','Disk defragmenter','Compression utility','File manager'], answer: 1 },
      { q: 'Encryption utility software provides which main service?', options: ['Ensures data on disk can be read only by those with the correct key, protecting confidentiality','Compresses files to save space','Backs up files automatically','Translates source code to machine code'], answer: 0 },
    ],
    red: [
      { q: 'Evaluate JIT compilation vs ahead-of-time (AOT) compilation for a modern web browser. Which statement is most defensible?', options: ['AOT always wins because compilation happens once','JIT wins because it tailors machine code to runtime profiles (hot paths, observed types) while avoiding the startup cost of full AOT for code that never runs; AOT remains better when startup time matters more than peak throughput and for resource-constrained devices','JIT is only useful for assembly code','AOT and JIT produce identical performance in all cases'], answer: 1 },
      { q: 'A real-time operating system (RTOS) is chosen over a general-purpose OS for a pacemaker. Which justification is most accurate?', options: ['An RTOS guarantees average throughput is high','An RTOS provides deterministic, bounded response times to events — missing a deadline can be catastrophic in a pacemaker, so predictable scheduling (e.g. preemptive priority) matters more than average throughput','An RTOS has a nicer GUI','An RTOS eliminates the need for interrupts'], answer: 1 },
      { q: 'Compare multi-level feedback queue scheduling with simple round-robin. Which evaluation is most accurate?', options: ['They are identical in behaviour','MLFQ dynamically demotes long-running CPU-bound processes to lower-priority queues while favouring short/interactive jobs in higher queues — giving better responsiveness than plain round-robin, at the cost of more complex tuning and the risk of starvation without aging','Round-robin is always better because it is simpler','MLFQ removes the need for context-switching'], answer: 1 },
      { q: 'A compiler performs heavy optimisation during code generation. Which is the most accurate critique?', options: ['Optimisation always produces faster code with no downsides','Optimisation can significantly increase compile time and may make debugging harder because generated code no longer maps cleanly to source lines; incorrect optimisations can even introduce bugs, so -O levels balance speed against build time and debuggability','Optimised code cannot be executed','Optimisation is purely a lexical stage'], answer: 1 },
      { q: 'Evaluate using the Agile methodology for a large government payroll system with legally mandated requirements and a fixed go-live date.', options: ['Agile is always best','Agile\'s incremental delivery helps but contractual/regulatory requirements need upfront specification and traceability that Waterfall or a hybrid provides better; pure Agile may miss compliance deadlines without careful governance — a hybrid (Agile within a Waterfall phase structure) is often most defensible','Agile cannot be used for any payroll system','Waterfall is never acceptable in modern projects'], answer: 1 },
      { q: 'A process-heavy server thrashes under high load. A developer proposes doubling the page size. Which is the most rigorous analysis?', options: ['Always helps — larger pages mean fewer pages','Larger pages reduce page-table size and TLB pressure and can raise TLB hit rate, but increase internal fragmentation and the cost per page-in; the benefit depends on working-set characteristics — for highly scattered accesses it may worsen waste and paging time','Page size has no effect on thrashing','Page size only affects cache coherency'], answer: 1 },
      { q: 'Which comparison of indirect vs indexed addressing is most accurate?', options: ['They are synonyms','Indirect addressing uses a register whose contents are the operand\'s address; indexed addressing adds a displacement to a base register to form the effective address — indexed is ideal for structured data like arrays, indirect for pointer dereferencing','Indirect is faster than direct because it uses fewer registers','Indexed always takes two memory accesses'], answer: 1 },
      { q: 'A company must choose between a closed-source commercial OS and an open-source OS for critical infrastructure. Which is the strongest balanced evaluation?', options: ['Open source is always more secure because anyone can read the code','Closed source is always more secure because the code is hidden','Open source gives auditability, no licence fees and the ability to fix/patch issues in-house, but requires expertise to support; closed source offers vendor support and warranties but lock-in and dependence on vendor\'s patch schedule. The choice depends on in-house skills, compliance and risk appetite','Both produce identical binaries'], answer: 2 },
      { q: 'Which addressing mode would a compiler most likely emit to access the nth element of an array passed to a function?', options: ['Immediate — the value n is embedded into the instruction','Indexed — base register for the array address plus an offset computed from n × element size','Direct — each element has its own absolute address hard-coded','No addressing mode is needed; the CPU handles arrays natively'], answer: 1 },
      { q: 'Evaluate the use of pair programming within Extreme Programming (XP). Which statement is most defensible?', options: ['Pair programming always halves output since two people write one program','Pair programming can improve design quality, catch defects early and spread knowledge across the team, but raises short-term staffing cost per line of code; empirical evidence is mixed — benefits depend on task complexity and team experience, so it is usually applied selectively','Pair programming replaces the need for any testing','Pair programming is only useful for hardware'], answer: 1 },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 1.3
     Exchanging data
  */
  '1.3': {
    name: 'Exchanging Data',
    green: [],
    amber: [],
    red: [],
  },

  /* ─────────────────────────────────────────────────────────── 1.4
     Data types, data structures and algorithms
  */
  '1.4': {
    name: 'Data Types, Structures & Algorithms',
    green: [],
    amber: [],
    red: [],
  },

  /* ─────────────────────────────────────────────────────────── 1.5
     Legal, moral, cultural and ethical issues
  */
  '1.5': {
    name: 'Legal, Moral, Cultural & Ethical',
    green: [],
    amber: [],
    red: [],
  },

  /* ─────────────────────────────────────────────────────────── 2.1
     Elements of computational thinking
  */
  '2.1': {
    name: 'Elements of Computational Thinking',
    green: [],
    amber: [],
    red: [],
  },

  /* ─────────────────────────────────────────────────────────── 2.2
     Problem solving and programming
  */
  '2.2': {
    name: 'Problem Solving and Programming',
    green: [],
    amber: [],
    red: [],
  },

  /* ─────────────────────────────────────────────────────────── 2.3
     Algorithms
  */
  '2.3': {
    name: 'Algorithms',
    green: [],
    amber: [],
    red: [],
  },

};
