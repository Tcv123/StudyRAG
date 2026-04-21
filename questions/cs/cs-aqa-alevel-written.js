/*
 * AQA A-Level Computer Science (7517) — Written (long-answer) Question Bank
 * Keyed by 7517 top-level topic (4.1 through 4.10).
 * Each entry: { green: [{ q, marks, marks_scheme }], amber: [...], red: [...] }.
 * Diagnostic samples short and medium written Qs to complement the MCQ round.
 */

const CS_AQA_ALEVEL_WRITTEN = {

  '4.1': {
    green: [
      { q: 'Define the term "recursion" and state the two essential features every recursive subroutine must contain.', marks: 3, marks_scheme: '1 mark: a subroutine that calls itself. 1 mark: must have a base case that terminates recursion. 1 mark: each recursive call must move toward the base case (reduce the problem).' },
      { q: 'Explain the difference between a procedure and a function.', marks: 2, marks_scheme: '1 mark: a procedure performs an action and does not return a value. 1 mark: a function returns a value that can be used in an expression.' },
    ],
    amber: [
      { q: 'Describe three advantages of object-oriented programming over procedural programming.', marks: 6, marks_scheme: '2 marks each for any three: encapsulation reduces coupling by hiding internal state; inheritance allows code reuse via specialisation; polymorphism enables generic interfaces supporting multiple types; modelling real-world entities as objects improves maintainability; class abstractions enable testing in isolation.' },
    ],
    red: [
      { q: 'Write an AQA-style pseudocode subroutine mergeSorted(A, B) that takes two sorted arrays A and B and returns a single sorted array containing all elements of A and B. State the time and space complexity of your solution.', marks: 8, marks_scheme: '5 marks: correct pseudocode using two indices advancing through A and B, copying the smaller element to output, then appending any remainder. 1 mark: states O(n + m) time. 1 mark: states O(n + m) additional space. 1 mark: handles empty input arrays without error.' },
    ],
  },

  '4.2': {
    green: [
      { q: 'Describe the difference between a stack and a queue.', marks: 3, marks_scheme: '1 mark each for: stack uses LIFO; queue uses FIFO; example of each (undo feature / print job queue).' },
    ],
    amber: [
      { q: 'Compare an array with a linked list as an implementation choice for a dynamic list, giving one situation where each is preferable.', marks: 6, marks_scheme: '1 mark each: array gives O(1) random access via index; array needs contiguous memory; array requires shifts on insertion/deletion in middle; linked list allows O(1) insert/delete given a node pointer; linked list uses extra memory for pointers; linked list only allows sequential access; example preferring array (many random lookups, few insertions); example preferring linked list (frequent insertions at known positions, size unknown).' },
    ],
    red: [
      { q: 'Explain how a hash table handles collisions using separate chaining. Give one advantage and one disadvantage compared with open addressing (linear probing).', marks: 8, marks_scheme: '2 marks: in chaining each bucket stores a linked list (or similar) of entries that hash to that bucket. 2 marks: on insert, entry is appended to the list; on lookup, the list is scanned linearly; on delete, the entry is removed from the list. 2 marks advantage: does not suffer from primary clustering; deletion is straightforward; load factor can exceed 1 gracefully. 2 marks disadvantage: requires extra memory for list nodes; worst-case lookup is O(n) if all keys collide; less cache-friendly than contiguous open addressing.' },
    ],
  },

  '4.3': {
    green: [
      { q: 'State the worst-case time complexity of: (a) linear search, (b) binary search, (c) bubble sort, (d) merge sort.', marks: 4, marks_scheme: '1 mark each: O(n); O(log n); O(n^2); O(n log n).' },
    ],
    amber: [
      { q: 'Explain why binary search cannot be used on an unsorted array, and state one way to overcome this limitation.', marks: 4, marks_scheme: '3 marks: binary search relies on the fact that at any mid-point comparison, all smaller keys are in the left half and all larger keys in the right half; this property requires the array to be sorted; without sorting the algorithm cannot correctly eliminate half of the remaining elements. 1 mark: sort the array first (cost O(n log n)) if multiple searches are needed, or use linear search if only one search is required.' },
    ],
    red: [
      { q: 'Describe Dijkstra\'s shortest-path algorithm and explain why it fails on graphs with negative edge weights. Suggest an alternative algorithm in that case.', marks: 10, marks_scheme: '6 marks: initialise distances to infinity and the source to 0; maintain a priority queue of (distance, vertex) entries; repeatedly extract the vertex u with smallest tentative distance; for each neighbour v of u, relax the edge (u,v) if dist[u] + w(u,v) < dist[v]; mark u as finalised once extracted; repeat until queue is empty. 3 marks: Dijkstra assumes that once a vertex is extracted, its distance is final; a negative edge reachable later could shorten a supposedly final distance, invalidating the greedy choice. 1 mark: Bellman-Ford handles negative weights in O(VE) and detects negative cycles.' },
    ],
  },

  '4.4': {
    green: [
      { q: 'Define a finite state machine (FSM) and list its main components.', marks: 3, marks_scheme: '1 mark: an abstract machine that transitions between a finite number of states based on input. 1 mark: components include a set of states, an input alphabet, a transition function. 1 mark: a designated start state and a set of accepting (final) states.' },
    ],
    amber: [
      { q: 'Explain what it means for a problem to be "decidable" and give one example of an undecidable problem.', marks: 4, marks_scheme: '3 marks: a decision problem is decidable if there exists an algorithm (Turing machine) that halts with a correct yes/no answer on every input; decidability is independent of running time; undecidable problems have no such algorithm. 1 mark: the Halting Problem (or Rice\'s theorem, Post Correspondence).' },
    ],
    red: [
      { q: 'Describe the Halting Problem and sketch Turing\'s diagonal argument that it is undecidable.', marks: 8, marks_scheme: '3 marks: the Halting Problem asks, given a description of a program P and input x, does P halt on x; it is a decision problem. 5 marks: assume a Turing machine H that decides it; construct D(P) which simulates H(P, P) and does the opposite (loops if H says halts, halts if H says loops); running D(D) leads to contradiction; therefore no such H exists.' },
    ],
  },

  '4.5': { green: [{ q: 'Convert the binary number 1011 0110 to hexadecimal.', marks: 2, marks_scheme: '1 mark: split into nibbles 1011 and 0110. 1 mark: B6.' }], amber: [], red: [] },
  '4.6': { green: [{ q: 'State De Morgan\'s two laws in Boolean algebra.', marks: 2, marks_scheme: '1 mark: NOT(A AND B) = NOT A OR NOT B. 1 mark: NOT(A OR B) = NOT A AND NOT B.' }], amber: [], red: [] },
  '4.7': { green: [{ q: 'Describe the three stages of the fetch-decode-execute cycle.', marks: 3, marks_scheme: '1 mark: fetch — PC\'s address is placed on the address bus, instruction read into MDR then MBR/CIR, PC incremented. 1 mark: decode — CIR\'s opcode is examined by the control unit. 1 mark: execute — the control unit issues signals to ALU/registers to carry out the operation.' }], amber: [], red: [] },
  '4.8': { green: [{ q: 'Identify two ethical concerns raised by widespread use of machine learning in decision-making.', marks: 4, marks_scheme: '2 marks each: training-data bias leading to discriminatory outcomes; lack of explainability making recourse difficult; privacy risks in data collection; accountability for automated decisions.' }], amber: [], red: [] },
  '4.9': { green: [{ q: 'Explain the role of the DNS in connecting a user\'s browser to a web server.', marks: 3, marks_scheme: '1 mark: the user enters a domain name (e.g. example.com). 1 mark: the resolver queries a hierarchy of DNS servers (root -> TLD -> authoritative) to find the IP address. 1 mark: the browser then opens a TCP connection to that IP on port 80/443.' }], amber: [], red: [] },
  '4.10': { green: [{ q: 'State the four ACID properties of a database transaction.', marks: 4, marks_scheme: '1 mark each: Atomicity (all or none); Consistency (integrity constraints preserved); Isolation (concurrent transactions do not interfere); Durability (committed changes survive failure).' }], amber: [], red: [] },

};

if (typeof module !== 'undefined') { module.exports = CS_AQA_ALEVEL_WRITTEN; }
