/*
 * AQA A-Level Computer Science (7517) — Practice Question Bank
 * Keyed by 7517 top-level topic (4.1 through 4.10).
 * Each topic holds { name, questions: [...] } — the shape practice.html reads:
 * a written exam-style question with a mark tariff and a mark scheme to
 * self-mark against. The original options/answer/explanation for each item are
 * kept alongside so the same question can also be served as multiple choice.
 */

const CS_AQA_PRACTICE = {

  '4.1': {
    name: "Fundamentals of Programming",
    questions: [
      {
        q: "Explain which kind of argument allows a method in Java or C# to change data in a way the caller can then see.",
        marks: 2,
        markScheme: "• A reference type — an object or array in Java or C# (1)\n• The reference is itself passed by value, but it points at the caller's object, so changes to the object's state are visible to the caller; primitives are copied (1)",
        options: ["An integer passed normally in most languages", "A reference type such as an object/array in Java or C#", "A constant", "A local variable"],
        answer: 1,
        explanation: "In Java and C#, object references are passed by value but the value is a reference — so modifying object state inside the method is visible to the caller. Primitive types are pass-by-value copies."
      },
      {
        q: "State the output of this Python code, and explain how you obtained it: def f(n): if n <= 1: return n; return f(n-1) + f(n-2). print(f(5))",
        marks: 2,
        markScheme: "• 5 (1)\n• The function computes the Fibonacci sequence: f(0)=0, f(1)=1, f(2)=1, f(3)=2, f(4)=3, so f(5)=5 (1)",
        options: ["3", "5", "8", "13"],
        answer: 1,
        explanation: "Fibonacci sequence: f(0)=0, f(1)=1, f(2)=1, f(3)=2, f(4)=3, f(5)=5."
      },
      {
        q: "State what the Python expression [i*2 for i in range(4) if i % 2 == 0] evaluates to, and explain why.",
        marks: 2,
        markScheme: "• [0, 4] (1)\n• range(4) gives 0,1,2,3; the filter keeps the even values 0 and 2; each is doubled (1)",
        options: ["[0, 2, 4, 6]", "[0, 4]", "[2, 6]", "[]"],
        answer: 1,
        explanation: "Only even i (0 and 2); doubled gives [0, 4]."
      },
    ],
  },

  '4.2': {
    name: "Fundamentals of Data Structures",
    questions: [
      {
        q: "A programmer needs O(1) lookup by key and O(1) insertion, with keys being short strings. State the most appropriate data structure and justify your choice.",
        marks: 2,
        markScheme: "• A hash table (1)\n• Hashing gives average O(1) lookup and insertion by key, where a binary search tree gives O(log n) and a linked list or sorted array O(n) (1)",
        options: ["Linked list", "Hash table", "Binary search tree", "Sorted array"],
        answer: 1,
        explanation: "Hash tables offer average O(1) lookup and insertion. BSTs are O(log n); arrays/lists are O(n)."
      },
      {
        q: "A stack is used to check whether brackets ()[]{} are balanced. Describe the algorithm.",
        marks: 3,
        markScheme: "• Scan the string left to right, pushing every opening bracket onto the stack (1)\n• On a closing bracket, pop the stack and check that the popped bracket is the matching opening type; report an error if the stack is empty or the types do not match (1)\n• The brackets are balanced only if the whole string is consumed and the stack is then empty (1)",
        options: ["Push every character; pop at end", "Push only opening brackets; on closing bracket pop and check it matches", "Push only closing brackets", "Use two stacks, one per bracket type"],
        answer: 1,
        explanation: "Standard balanced-bracket algorithm: opens pushed, closes popped and compared."
      },
    ],
  },

  '4.3': {
    name: "Fundamentals of Algorithms",
    questions: [
      {
        q: "State which sorting algorithm is best when the array is almost sorted already, and explain why.",
        marks: 2,
        markScheme: "• Insertion sort (1)\n• Each new element only has to slide a short distance when the data is nearly sorted, so the inner loop exits almost immediately, giving close to O(n) behaviour (1)",
        options: ["Bubble sort", "Insertion sort", "Merge sort", "Heap sort"],
        answer: 1,
        explanation: "Insertion sort runs in near-linear time on nearly-sorted input because each new element slides a short distance."
      },
      {
        q: "State the time complexity of inserting into a balanced binary search tree with n nodes, and explain why.",
        marks: 2,
        markScheme: "• O(log n) (1)\n• A balanced tree has height O(log n), so an insertion follows a single root-to-leaf path (1)",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: 1,
        explanation: "Balanced BSTs have height O(log n), so insertion follows a single root-to-leaf path."
      },
    ],
  },

  '4.4': {
    name: "Theory of Computation",
    questions: [
      {
        q: "State the regular expression that matches one or more digits, and explain the operator you have used.",
        marks: 2,
        markScheme: "• [0-9]+ (or the equivalent \\d+) (1)\n• + means one or more repetitions; * would allow zero occurrences and ? would make the digit optional (1)",
        options: ["[0-9]*", "[0-9]+", "\\d?", "\\D+"],
        answer: 1,
        explanation: "[0-9]+ or equivalently \\d+ means one or more digits. * is zero or more; ? is optional; \\D is non-digit."
      },
      {
        q: "State which of the Halting Problem, primality testing and program equivalence in general is decidable, and explain what decidable means.",
        marks: 2,
        markScheme: "• Primality testing (1)\n• An algorithm always terminates with the correct yes/no answer (and since 2002 one is known that runs in polynomial time); the Halting Problem and general program equivalence are undecidable (1)",
        options: ["Halting Problem", "Primality testing", "Program equivalence in general", "Rice's semantic property"],
        answer: 1,
        explanation: "Primality is decidable (and in P since 2002). The others are undecidable."
      },
    ],
  },

  '4.5': {
    name: "Fundamentals of Data Representation",
    questions: [
      {
        q: "Convert 0xB6 to binary.",
        marks: 2,
        markScheme: "• 1011 0110 (1)\n• Each hex digit becomes one nibble: B = 1011 and 6 = 0110 (1)",
        options: ["1011 0110", "1010 0110", "1011 1100", "0110 1011"],
        answer: 0,
        explanation: "B = 1011, 6 = 0110."
      },
      {
        q: "State which compression technique is best suited to data containing consecutive repeats, and explain how it works.",
        marks: 2,
        markScheme: "• Run-length encoding (1)\n• RLE replaces each run of a repeated value with a (count, value) pair, so it is efficient exactly where the same value repeats consecutively (1)",
        options: ["Huffman coding", "Run-length encoding", "Dictionary coding", "Lossy quantisation"],
        answer: 1,
        explanation: "RLE replaces runs of a repeated value with (count, value) pairs."
      },
    ],
  },

  '4.6': {
    name: "Fundamentals of Computer Systems",
    questions: [
      {
        q: "Simplify A.(A + B) using Boolean absorption.",
        marks: 2,
        markScheme: "• A (1)\n• By the absorption law A·(A + B) = A; expanding gives A·A + A·B = A + A·B = A (1)",
        options: ["A", "B", "A + B", "A.B"],
        answer: 0,
        explanation: "Absorption law: A.(A + B) = A."
      },
      {
        q: "State the Boolean law that allows NOT(A AND B) to be rewritten as NOT A OR NOT B.",
        marks: 1,
        markScheme: "• De Morgan's law (1)",
        options: ["Distribution", "De Morgan", "Commutation", "Absorption"],
        answer: 1,
        explanation: "De Morgan's theorem."
      },
    ],
  },

  '4.7': {
    name: "Computer Organisation & Architecture",
    questions: [
      {
        q: "State which addressing mode places the operand directly in the instruction, and explain one advantage of it.",
        marks: 2,
        markScheme: "• Immediate addressing (1)\n• The operand field holds the literal value itself, so no further memory access is needed to fetch the data (1)",
        options: ["Direct", "Indirect", "Immediate", "Indexed"],
        answer: 2,
        explanation: "Immediate addressing stores a literal operand in the instruction itself."
      },
      {
        q: "State the factor by which pipelining a 4-stage CPU can improve throughput in ideal conditions, and explain why.",
        marks: 2,
        markScheme: "• Up to about 4× (1)\n• With four stages and the pipeline full, one instruction completes per clock cycle instead of one every four, though hazards and stalls reduce this in practice (1)",
        options: ["Halving", "Doubling", "3x", "4x"],
        answer: 3,
        explanation: "Ideally 4x throughput: one instruction completes per stage-cycle once the pipeline is filled."
      },
    ],
  },

  '4.8': {
    name: "Consequences of Uses of Computing",
    questions: [
      {
        q: "State the principle of the Data Protection Act 2018 that requires personal data to be kept only as long as it is needed, and explain what it requires.",
        marks: 2,
        markScheme: "• Storage limitation (1)\n• Personal data must not be kept in a form that identifies the data subject for longer than is necessary for the purposes for which it is processed (1)",
        options: ["Accuracy", "Purpose limitation", "Storage limitation", "Integrity and confidentiality"],
        answer: 2,
        explanation: "Storage limitation: data shall not be kept for longer than is necessary for the purposes for which it was processed."
      },
    ],
  },

  '4.9': {
    name: "Communication & Networking",
    questions: [
      {
        q: "State which protocol provides reliable, ordered delivery of a stream of bytes, and explain how it achieves this.",
        marks: 2,
        markScheme: "• TCP (the Transmission Control Protocol) (1)\n• TCP is connection-oriented and uses sequence numbers, acknowledgements and retransmission to deliver a reliable, ordered, error-checked byte stream; UDP does not (1)",
        options: ["UDP", "ICMP", "TCP", "IP"],
        answer: 2,
        explanation: "TCP provides reliable, ordered, error-checked stream delivery."
      },
      {
        q: "State how many bits of an IP address a subnet mask of 255.255.255.0 assigns to the network part, and explain how you know.",
        marks: 2,
        markScheme: "• 24 bits (a /24 network) (1)\n• 255.255.255.0 is 24 consecutive 1 bits followed by 8 zero bits, and the 1 bits mark the network portion (1)",
        options: ["8", "16", "24", "32"],
        answer: 2,
        explanation: "255.255.255.0 = 24 ones, so /24."
      },
    ],
  },

  '4.10': {
    name: "Fundamentals of Databases",
    questions: [
      {
        q: "State which type of join returns only rows with matching keys in both tables, and explain how it differs from a LEFT JOIN.",
        marks: 2,
        markScheme: "• An INNER JOIN (1)\n• It returns only those rows whose join keys match in both tables; a LEFT JOIN would also return unmatched rows from the left table (1)",
        options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
        answer: 2,
        explanation: "INNER JOIN returns only matched rows."
      },
      {
        q: "State the kind of dependency that third normal form (3NF) removes, and give an example.",
        marks: 2,
        markScheme: "• Transitive dependencies (1)\n• A non-key attribute must not depend on another non-key attribute: in X → Y → Z with X the key, Z should be moved to its own table (1)",
        options: ["Partial dependencies", "Transitive dependencies", "Foreign keys", "Null values"],
        answer: 1,
        explanation: "3NF removes transitive dependencies (X → Y → Z where X is a key, Y is a non-key)."
      },
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = CS_AQA_PRACTICE; }
