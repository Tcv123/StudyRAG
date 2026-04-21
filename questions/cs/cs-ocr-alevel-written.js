/*
 * OCR A-Level Computer Science (H446) — Written / Short-Answer Question Bank
 * Keyed by H446 top-level topic (1.1–2.3).
 * Each entry: { green: [], amber: [], red: [] } of { q, marks, tier, modelAnswer } objects.
 * 10 questions per topic: 4 green + 4 amber + 2 red.
 * tier: green (state/identify 2-3 marks), amber (explain/describe 4-6 marks), red (evaluate/discuss 7-10 marks)
 * Student self-marks against model answer: Full / Partial / Missed.
 */

const CS_OCR_WRITTEN = {

  '1.1': {
    green: [
      {
        q: 'State the purpose of the Memory Address Register (MAR) and the Memory Data Register (MDR).',
        marks: 2, tier: 'green',
        modelAnswer: `• MAR — holds the address of the memory location that is about to be read from or written to.\n• MDR — holds the data (or instruction) just read from, or about to be written to, the memory location specified in the MAR.`
      },
      {
        q: 'Identify three registers involved in the fetch stage of the fetch-decode-execute cycle and state the role of each during fetch.',
        marks: 3, tier: 'green',
        modelAnswer: `• Program Counter (PC) — holds the address of the next instruction; its contents are copied into the MAR and the PC is then incremented.\n• MAR — receives the address from the PC so memory can be addressed via the address bus.\n• MDR — receives the fetched instruction from memory via the data bus. The instruction is then copied into the CIR for decoding.`
      },
      {
        q: 'State what is meant by "locality of reference" and name the two main types.',
        marks: 3, tier: 'green',
        modelAnswer: `Locality of reference is the tendency of a processor to repeatedly access a small range of memory over a short period of time, which is what makes caching effective.\n• Temporal locality — if a memory location is accessed, it is likely to be accessed again soon (e.g. loop counters).\n• Spatial locality — if a memory location is accessed, nearby addresses are likely to be accessed soon (e.g. elements of an array).`
      },
      {
        q: 'State two differences between RAM and ROM, and identify whether each is volatile.',
        marks: 3, tier: 'green',
        modelAnswer: `• RAM (Random Access Memory) is read/write and is volatile — its contents are lost when power is removed. It holds the currently running programs and data.\n• ROM (Read-Only Memory) is (typically) read-only and is non-volatile — its contents persist without power. It commonly holds firmware / the bootloader / BIOS.\n• Further differences: RAM has much higher capacity in a modern system and is usually faster to write; ROM content is fixed (or only reprogrammed with special procedures, e.g. EEPROM/flash).`
      },
    ],
    amber: [
      {
        q: 'Describe the fetch-decode-execute cycle using register transfer notation for the fetch stage.',
        marks: 5, tier: 'amber',
        modelAnswer: `Fetch (in register transfer notation):\n• MAR ← [PC] — the address in the PC is copied into the MAR.\n• PC ← [PC] + 1 — the PC is incremented so it points to the next instruction.\n• MDR ← [[MAR]] — the contents of the memory location addressed by MAR are fetched into the MDR via the data bus.\n• CIR ← [MDR] — the instruction in MDR is copied into the CIR.\nDecode: the Control Unit decodes the opcode held in the CIR, determining the operation and identifying any operands to fetch.\nExecute: the decoded instruction is carried out — the ALU performs an arithmetic/logic operation (result placed in ACC), memory is read/written, or the PC is changed for a branch.`
      },
      {
        q: 'Explain how pipelining improves processor throughput and describe two types of pipeline hazard that can reduce the benefit.',
        marks: 6, tier: 'amber',
        modelAnswer: `Pipelining overlaps the sub-stages of the FDE cycle (e.g. fetch / decode / execute / memory / write-back) so that, once the pipeline is full, a new instruction completes every clock cycle. This raises throughput (instructions per second) without raising the clock speed, because different stages work on different instructions simultaneously.\nHazards that reduce the benefit:\n• Data hazards — an instruction depends on a result not yet written back by an earlier instruction (RAW dependency), forcing the pipeline to stall (insert bubbles) or use forwarding.\n• Control hazards — a conditional branch changes the PC after subsequent instructions have already been fetched, so those fetched instructions must be flushed. Branch prediction with speculative execution mitigates this.\n• (Also accept: structural hazards — two instructions compete for the same hardware resource, e.g. memory port.)\nOverall, hazards mean real pipelined throughput is always below the ideal one-instruction-per-cycle rate.`
      },
      {
        q: 'Explain the difference between CISC and RISC processor architectures, and describe one typical use case for each.',
        marks: 6, tier: 'amber',
        modelAnswer: `CISC (Complex Instruction Set Computer):\n• Large instruction set with many specialised, variable-length instructions.\n• A single instruction can perform multi-step operations (e.g. memory-to-memory move with arithmetic).\n• Uses microcode to break complex instructions into micro-operations — hardware is more complex.\n• Example: Intel/AMD x86 processors used in desktops, laptops and servers, where backward compatibility and code density matter.\nRISC (Reduced Instruction Set Computer):\n• Small set of simple, fixed-length instructions that each typically complete in one clock cycle.\n• Load/store architecture: only load and store instructions access memory.\n• Simpler hardware enables efficient pipelining and lower power consumption; the compiler does more work.\n• Example: ARM processors in smartphones, tablets and embedded/IoT systems, where power efficiency and predictable timing are essential.`
      },
      {
        q: 'Compare HDDs and SSDs as secondary storage devices. Describe how each stores data and explain two factors a user would consider when choosing between them.',
        marks: 6, tier: 'amber',
        modelAnswer: `How data is stored:\n• HDD (Hard Disk Drive) — data is stored as magnetised regions on rapidly spinning platters. A moving read/write head on an actuator arm flies over tracks and sectors to access data. Access time is dominated by seek time and rotational latency (typically several ms).\n• SSD (Solid-State Drive) — data is stored as trapped charge in floating-gate transistors in NAND flash memory cells, organised in pages and blocks. There are no moving parts; an SSD controller maps logical addresses to physical cells (wear-levelling) and performs garbage collection on erase blocks.\nFactors a user would weigh up:\n• Performance — SSDs have far lower random-access latency and higher IOPS than HDDs, giving faster boot, application load and database performance. If speed matters (OS drive, random I/O), SSD is preferred.\n• Capacity and £/GB — HDDs still offer much larger capacities at a lower cost per gigabyte, so for large bulk or archival storage HDDs can be more economical.\n• (Also accept: durability/shock resistance — SSDs have no moving parts so are more robust in laptops; endurance — flash cells have a finite write/erase cycle count, though wear-levelling extends lifetime; power consumption — SSDs use less power, improving battery life; noise — SSDs are silent.)`
      },
    ],
    red: [
      {
        q: 'Discuss the cache hierarchy (L1, L2, L3) found in a modern multicore CPU, explaining how the hierarchy exploits locality of reference and why simply making L1 very large would be a poor design choice.',
        marks: 9, tier: 'red',
        modelAnswer: `A modern CPU has several cache levels between the registers and main memory, each trading capacity against speed:\n• L1 cache — very small (typically 32–64 KB per core), built from fast SRAM and located inside each core. Often split into L1-I (instructions) and L1-D (data). Access time ~1 ns.\n• L2 cache — larger (256 KB – 1 MB per core) and slightly slower, usually private to the core.\n• L3 cache — several megabytes, shared across all cores on the die, further reducing pressure on main memory and helping cache coherency across cores.\n• Main memory (DRAM) is ~60–100 ns away; the hierarchy hides this latency.\nExploiting locality:\n• Temporal locality — recently accessed items stay in L1/L2; subsequent accesses hit cache instead of going to RAM.\n• Spatial locality — data is brought in as cache lines (typically 64 bytes) so adjacent data (e.g. next array element) is already present when accessed.\nWhy not just make L1 huge?\n• SRAM is expensive and uses far more transistors per bit than DRAM, increasing cost and die area.\n• Larger caches have longer access times because of longer wire delays and more complex tag comparison — L1 must remain physically small and close to the core to meet single-cycle access.\n• Power consumption rises sharply with cache size; large caches worsen battery life and heat.\n• A larger L1 would reduce clock speed or add pipeline stages to maintain timing — hurting IPC.\nConclusion: a hierarchy (small fast L1, larger slower L2/L3) gives almost the hit-rate of one big cache at a fraction of the cost, power and latency — which is why every modern CPU uses one.`
      },
      {
        q: 'Evaluate the use of a GPU alongside a CPU (heterogeneous computing) compared to using additional CPU cores alone, with reference to architecture and suitable workloads.',
        marks: 10, tier: 'red',
        modelAnswer: `Architectural contrast:\n• CPU: a small number of sophisticated cores (typically 4–32) each with deep pipelines, large per-core caches, branch predictors and out-of-order execution. Optimised for low-latency sequential tasks with complex control flow.\n• GPU: thousands of small ALU-heavy cores organised for SIMD / SIMT execution — the same instruction is applied to many data items in parallel (data parallelism). Cores share simpler control logic and very high memory bandwidth, but lack sophisticated per-core features.\nStrengths of heterogeneous CPU+GPU:\n• Workloads are matched to the best hardware: the CPU runs the operating system, application logic and serial/branch-heavy code; the GPU handles massively parallel kernels (3D rendering, video encode/decode, matrix multiplication for neural networks, scientific simulation).\n• For large data-parallel tasks, a GPU can deliver an order-of-magnitude more throughput per watt than a CPU of similar cost.\n• Frees CPU cores to respond to interactive tasks while the GPU handles bulk computation (good for latency-sensitive systems).\nLimitations compared to just adding CPU cores:\n• Data must be copied between CPU and GPU memory (PCIe) — for small or irregular workloads the transfer cost can exceed the compute saving.\n• GPUs struggle with divergent branches (threads in a warp taking different paths serialise) and complex pointer-chasing code.\n• GPU programming is harder — requires CUDA/OpenCL/compute shaders and careful attention to memory access patterns to use bandwidth effectively.\n• Not all software is parallel: Amdahl's Law still applies; a serial fraction caps any speedup.\n• Adding more CPU cores avoids the transfer bottleneck and runs existing multithreaded code with no rewrite, but hits diminishing returns due to shared memory bandwidth, cache coherency traffic and synchronisation.\nOverall evaluation:\n• Neither approach is universally better. For workloads dominated by large, regular, data-parallel computations (ML training, graphics, physics) a CPU+GPU system gives far greater performance per pound and per watt than more CPU cores. For latency-sensitive, branch-heavy, or small-batch workloads, additional CPU cores (or stronger single-thread performance) are more effective. Modern systems therefore combine both, dispatching each task to the most appropriate processor.`
      },
    ],
  },
  '1.2': {
    green: [
      {
        q: 'State the role of the kernel within an operating system.',
        marks: 2, tier: 'green',
        modelAnswer: `• The kernel is the central part of the OS that runs in privileged/supervisor mode with direct access to hardware.\n• It manages core services: process/CPU scheduling, memory management, file systems, device drivers/I/O and inter-process communication, acting as the bridge between applications and hardware.`
      },
      {
        q: 'Identify the three main types of translator and state one characteristic of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Compiler — translates the entire high-level source program into machine code (an executable) before execution; compilation is slow but execution is fast.\n• Interpreter — translates and executes source code one line/statement at a time; slower overall execution but good for development/testing as there is no separate compile step.\n• Assembler — translates assembly language (mnemonics) into machine code on a (largely) one-to-one basis.`
      },
      {
        q: 'State three stages of the compilation process in the order they are performed.',
        marks: 3, tier: 'green',
        modelAnswer: `• Lexical analysis — the source is broken into tokens (keywords, identifiers, operators, literals); whitespace/comments are removed and a symbol table is started.\n• Syntax analysis (parsing) — tokens are checked against the grammar of the language and a parse/abstract syntax tree is built; syntax errors are reported.\n• Semantic analysis — meaning is checked (e.g. type compatibility, undeclared variables, scope rules) before code generation and optimisation produce the final object/machine code.`
      },
      {
        q: 'State what is meant by an "addressing mode" in a low-level language and name two examples.',
        marks: 3, tier: 'green',
        modelAnswer: `• An addressing mode is the method used by an instruction to specify where its operand is located — it determines how the operand part of the instruction is interpreted.\n• Immediate addressing — the operand value is contained directly within the instruction (e.g. MOV R1, #5).\n• Direct addressing — the operand part contains the memory address of the data (e.g. LDR R1, 200).\n• (Also accept: indirect addressing — operand is the address of a register/location holding the address of the data; indexed addressing — effective address = base register + offset.)`
      },
    ],
    amber: [
      {
        q: 'Describe how an interrupt is handled by a processor, including the role of the Interrupt Service Routine (ISR) and the interrupt priority.',
        marks: 6, tier: 'amber',
        modelAnswer: `• At the end of each fetch-decode-execute cycle the CPU checks the interrupt register for pending interrupts.\n• If an interrupt of higher priority than the current task is present, the CPU completes the current instruction and then responds.\n• The current state (PC, registers, status flags) is pushed onto a stack so execution can resume later.\n• The CPU looks up the address of the appropriate Interrupt Service Routine (ISR) in the interrupt vector table and loads that address into the PC.\n• The ISR runs, servicing the device/event (e.g. reading a key-press, handling a clock tick).\n• On completion the saved state is popped from the stack and execution resumes from where it left off.\n• Priority — each interrupt has an assigned priority; lower-priority interrupts are deferred (or themselves interrupted) so that urgent events (e.g. power failure, hardware faults) are serviced first.`
      },
      {
        q: 'Compare compilers and interpreters, giving two points in favour of each and one situation where each is the better choice.',
        marks: 6, tier: 'amber',
        modelAnswer: `Compilers:\n• Produce a standalone executable in machine code that runs very quickly, because translation is a one-off cost.\n• Source code is not distributed — protects intellectual property and reduces tampering.\n• Best for production/shipping software where performance and deployment size matter (e.g. a commercial game engine).\nInterpreters:\n• No separate compile step — edits run immediately, giving a fast develop-test cycle and easier debugging (errors stop execution at the relevant line).\n• Portable — the same source can run anywhere an interpreter exists, without recompilation per architecture.\n• Best for rapid prototyping, scripting, teaching programming or short-lived scripts where execution speed is not critical (e.g. a Python data-analysis script).\n(Also accept hybrid approaches: bytecode + JIT combines compiler speed with interpreter portability.)`
      },
      {
        q: 'Describe three CPU scheduling algorithms used by an operating system.',
        marks: 6, tier: 'amber',
        modelAnswer: `• First-Come-First-Served (FCFS) — processes run in the order they arrive on a single queue; simple and fair but a long job at the front blocks everything behind it (convoy effect).\n• Shortest Job First (SJF) — the process with the shortest estimated CPU burst runs next; minimises average waiting time but requires knowledge of burst length and can starve long jobs.\n• Round Robin — each process gets a fixed time quantum in turn; pre-emptive, gives good interactive response but too small a quantum wastes CPU on context switching, too large approaches FCFS.\n• (Also accept: Shortest Remaining Time — pre-emptive form of SJF; Priority scheduling — priority value decides order, risks starvation without aging; Multi-Level Feedback Queue — multiple queues with different quanta/priorities, dynamically demotes CPU-bound processes and favours interactive ones.)`
      },
      {
        q: 'Explain what is meant by "virtual memory" and describe how paging is used to implement it.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Virtual memory is a memory-management technique in which an area of secondary storage (the page/swap file) is used alongside physical RAM to give each process a large apparent address space.\n• The virtual address space of each process and physical RAM are divided into fixed-size pages (and page frames), e.g. 4 KB.\n• A page table maps each virtual page to a physical frame; accesses go via this table (assisted by a TLB cache in hardware).\n• If a required page is not currently in RAM a page fault occurs — the OS suspends the process, loads the page from disk into a free (or evicted) frame, updates the page table, then resumes the process.\n• A replacement policy such as LRU chooses which resident page to evict when RAM is full.\n• Benefits: programs can exceed physical RAM, multitasking is isolated via separate address spaces.\n• Drawback: if the working set exceeds RAM the system thrashes — most CPU time is spent paging rather than executing.`
      },
    ],
    red: [
      {
        q: 'Discuss the suitability of Waterfall, Agile and Extreme Programming for a safety-critical railway-signalling project. Evaluate which approach (or combination) is most appropriate and justify your answer.',
        marks: 10, tier: 'red',
        modelAnswer: `Waterfall:\n• Sequential stages (requirements → design → implementation → testing → maintenance) with sign-off at each phase.\n• Strengths for safety-critical: exhaustive written specification, formal reviews, full traceability from hazards to tests — auditable and aligned with standards such as EN 50128.\n• Weaknesses: inflexible if requirements change; late discovery of integration problems; big-bang delivery raises late risk.\nAgile:\n• Iterative, incremental sprints with close customer involvement and working software each iteration.\n• Strengths: responsive to change, continuous integration, early discovery of defects; user stories make priorities explicit.\n• Weaknesses for safety-critical: light documentation is at odds with regulatory expectations; verification and validation evidence can lag; difficult to demonstrate whole-system safety with partial deliveries.\nExtreme Programming (XP):\n• Specific Agile variant with pair programming, continuous refactoring, TDD and very short release cycles.\n• Strengths: high code quality, strong test coverage (automated tests for every change), knowledge shared through pairs.\n• Weaknesses: XP\'s preference for minimal design up front and frequent change is risky when formal hazard analysis must feed into every design decision.\nEvaluation for railway signalling:\n• Safety standards require documented requirements, formal hazard analysis, V-model verification and independent assessment. Pure Agile/XP rarely satisfies these on their own.\n• A Waterfall/V-model structure is most defensible at the system level — each phase maps to a verification activity, ensuring traceable, auditable evidence.\n• Within each phase, XP-style practices (TDD, pair programming, continuous integration, automated regression) can be adopted to improve code quality and reduce defects without breaking the outer Waterfall structure.\n• Therefore a hybrid — Waterfall/V-model governance with disciplined XP engineering practices inside each phase — offers the best balance of rigour, auditability and modern engineering efficiency for a safety-critical railway-signalling project.`
      },
      {
        q: 'Evaluate the use of immediate, direct, indirect and indexed addressing modes. In each case give a short example and state one situation in which that mode is the most appropriate choice.',
        marks: 8, tier: 'red',
        modelAnswer: `Immediate addressing:\n• The operand is encoded inside the instruction itself, e.g. MOV R1, #5 — the value 5 goes into R1.\n• No memory access needed for the operand, so it is very fast.\n• Best for loading small, known constants such as loop counter initialisation or bit masks.\n• Limitation: restricted to the bit-width available in the instruction format.\nDirect addressing:\n• The operand field holds the actual memory address of the data, e.g. LDR R1, 200 — load R1 from memory location 200.\n• One memory access per operand; address is fixed at assembly time.\n• Best for accessing a specific named global variable or I/O register.\n• Limitation: inflexible — the address cannot change, so unsuited to dynamic structures.\nIndirect addressing (register indirect):\n• The operand field identifies a register whose contents are the address of the data, e.g. LDR R1, [R2].\n• Allows addresses to be computed at runtime.\n• Best for pointer-based access (e.g. dereferencing a pointer passed as a function argument) and data structures such as linked lists.\nIndexed addressing:\n• Effective address = contents of a base register + a displacement, e.g. LDR R1, [R2, #4].\n• Supports systematic stepping through contiguous data.\n• Best for accessing elements of arrays and records/structs — the base register holds the start address and the offset selects the element.\nEvaluation:\n• Each mode trades generality against cost: immediate is fastest but least flexible; direct is simple but inflexible; indirect enables pointers but needs an extra step; indexed is powerful for structured data.\n• A modern compiler selects the mode that minimises instruction count and memory accesses while correctly modelling the source program\'s semantics — most real programs use a mixture, e.g. immediate constants, indexed array accesses and indirect dereferences for pointers.`
      },
    ],
  },
  '1.3': { green: [], amber: [], red: [] },
  '1.4': { green: [], amber: [], red: [] },
  '1.5': { green: [], amber: [], red: [] },
  '2.1': { green: [], amber: [], red: [] },
  '2.2': { green: [], amber: [], red: [] },
  '2.3': { green: [], amber: [], red: [] },

};
