/*
 * OCR A-Level Computer Science (H446) — Multiple-Choice Question Bank
 * Keyed by H446 top-level topic (1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3).
 * Each topic holds: { name, topics: [{ green: [], amber: [], red: [] }] }.
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
    ],
    amber: [
      { q: 'A processor has no cache. Suggest the most likely impact on performance.', options: ['No impact — cache is only used for graphics','Every data/instruction request goes to main memory, significantly increasing average access latency','The CPU cannot pipeline instructions','Clock speed automatically increases to compensate'], answer: 1 },
      { q: 'An instruction is fetched that depends on the result of the previous, uncompleted instruction in the pipeline. Identify the hazard.', options: ['Structural hazard','Data (RAW) hazard','Control hazard','Resource hazard'], answer: 1 },
      { q: 'In register transfer notation, which expression correctly describes the start of the fetch stage?', options: ['MDR ← [MAR]; PC ← PC + 1','MAR ← [PC]; PC ← PC + 1','CIR ← [ACC]; PC ← PC − 1','MAR ← [CIR]; MDR ← [PC]'], answer: 1 },
      { q: 'A GPU executes the same shader on thousands of pixels simultaneously. Which processing model does this best illustrate?', options: ['MIMD','SISD','SIMD','MISD'], answer: 2 },
      { q: 'Why is L1 cache typically smaller than L2 cache despite being faster?', options: ['Smaller caches store more data per byte','Faster SRAM is expensive and physically larger per bit, and short access times require the cache to be physically close to the core','ROM limitations constrain L1 size','L2 always shares silicon with the GPU'], answer: 1 },
      { q: 'A pipeline experiences a control hazard after a conditional branch. Which technique most directly reduces the penalty?', options: ['Write-back caching','Branch prediction with speculative execution','Increasing the address bus width','Adding more ROM'], answer: 1 },
    ],
    red: [
      { q: 'A real-time embedded controller must execute signal-processing instructions deterministically with minimum power use. Which processor choice is most appropriate and why?', options: ['A high-clock x86 CISC processor — complex instructions always execute faster','A RISC processor — simple fixed-length instructions support predictable timing, efficient pipelining and low power','A desktop GPU — thousands of cores guarantee determinism','A co-processor alone, without any main CPU'], answer: 1 },
      { q: 'A program exhibits poor temporal locality but strong spatial locality. Which cache design change would yield the greatest improvement?', options: ['Reduce the cache line size to store more unrelated items','Increase the cache line (block) size so that adjacent data is prefetched together','Disable the cache and rely on registers only','Move all data to ROM'], answer: 1 },
      { q: 'Evaluate: "Adding a third core to a dual-core CPU will always increase throughput by 50%." Which statement is most accurate?', options: ['True — performance scales linearly with cores','False — by Amdahl\'s Law, any serial fraction caps the speedup, and shared memory bandwidth, synchronisation overhead and cache coherency traffic further limit gains','True, provided clock speed is constant','False — adding cores always decreases throughput'], answer: 1 },
      { q: 'A 5-stage pipeline runs at 2 GHz with an ideal CPI of 1. A benchmark shows 25% of cycles are lost to stalls and flushes. What is the effective instruction throughput?', options: ['2.0 billion instructions/sec','1.5 billion instructions/sec','1.0 billion instructions/sec','0.5 billion instructions/sec'], answer: 1 },
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
