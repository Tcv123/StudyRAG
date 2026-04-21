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
    green: [],
    amber: [],
    red: [],
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
