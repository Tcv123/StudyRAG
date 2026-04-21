/*
 * AQA A-Level Computer Science (7517) — Practice Question Bank
 * Keyed by 7517 top-level topic (4.1 through 4.10).
 * Each entry holds an array of practice questions with options/answer/explanation.
 * Used by practice.html in open-study mode.
 */

const CS_AQA_PRACTICE = {

  '4.1': [
    { q: 'Which of the following would be classed as a parameter passed by reference?', options: ['An integer passed normally in most languages','A reference type such as an object/array in Java or C#','A constant','A local variable'], answer: 1, explanation: 'In Java and C#, object references are passed by value but the value is a reference — so modifying object state inside the method is visible to the caller. Primitive types are pass-by-value copies.' },
    { q: 'Given this pseudocode, what is the output? def f(n): if n <= 1: return n; return f(n-1) + f(n-2). f(5) =', options: ['3','5','8','13'], answer: 1, explanation: 'Fibonacci sequence: f(0)=0, f(1)=1, f(2)=1, f(3)=2, f(4)=3, f(5)=5.' },
    { q: 'What does the following Python expression evaluate to: [i*2 for i in range(4) if i % 2 == 0]?', options: ['[0, 2, 4, 6]','[0, 4]','[2, 6]','[]'], answer: 1, explanation: 'Only even i (0 and 2); doubled gives [0, 4].' },
  ],

  '4.2': [
    { q: 'A programmer needs O(1) lookup by key, O(1) insertion, with keys being short strings. Which structure is most appropriate?', options: ['Linked list','Hash table','Binary search tree','Sorted array'], answer: 1, explanation: 'Hash tables offer average O(1) lookup and insertion. BSTs are O(log n); arrays/lists are O(n).' },
    { q: 'A stack is used to check whether brackets ()[]{} are balanced. Which is the correct algorithm?', options: ['Push every character; pop at end','Push only opening brackets; on closing bracket pop and check it matches','Push only closing brackets','Use two stacks, one per bracket type'], answer: 1, explanation: 'Standard balanced-bracket algorithm: opens pushed, closes popped and compared.' },
  ],

  '4.3': [
    { q: 'Which sort is best if the array is almost sorted already?', options: ['Bubble sort','Insertion sort','Merge sort','Heap sort'], answer: 1, explanation: 'Insertion sort runs in near-linear time on nearly-sorted input because each new element slides a short distance.' },
    { q: 'What is the time complexity of inserting into a balanced BST with n nodes?', options: ['O(1)','O(log n)','O(n)','O(n log n)'], answer: 1, explanation: 'Balanced BSTs have height O(log n), so insertion follows a single root-to-leaf path.' },
  ],

  '4.4': [
    { q: 'Which is the regex for "one or more digits"?', options: ['[0-9]*','[0-9]+','\\\\d?','\\\\D+'], answer: 1, explanation: '[0-9]+ or equivalently \\d+ means one or more digits. * is zero or more; ? is optional; \\D is non-digit.' },
    { q: 'Which problem is decidable?', options: ['Halting Problem','Primality testing','Program equivalence in general','Rice\'s semantic property'], answer: 1, explanation: 'Primality is decidable (and in P since 2002). The others are undecidable.' },
  ],

  '4.5': [
    { q: 'Convert 0xB6 to binary.', options: ['1011 0110','1010 0110','1011 1100','0110 1011'], answer: 0, explanation: 'B = 1011, 6 = 0110.' },
    { q: 'Which compression technique is best suited to consecutive repeats in data?', options: ['Huffman coding','Run-length encoding','Dictionary coding','None of the above'], answer: 1, explanation: 'RLE replaces runs of a repeated value with (count, value) pairs.' },
  ],

  '4.6': [
    { q: 'Simplify A.(A + B) using Boolean absorption.', options: ['A','B','A + B','A.B'], answer: 0, explanation: 'Absorption law: A.(A + B) = A.' },
    { q: 'Which law allows NOT(A AND B) to be rewritten as NOT A OR NOT B?', options: ['Distribution','De Morgan','Commutation','Absorption'], answer: 1, explanation: 'De Morgan\'s theorem.' },
  ],

  '4.7': [
    { q: 'Which type of addressing mode places the operand directly in the instruction?', options: ['Direct','Indirect','Immediate','Indexed'], answer: 2, explanation: 'Immediate addressing stores a literal operand in the instruction itself.' },
    { q: 'Pipelining a 4-stage CPU improves throughput by up to roughly what factor (in ideal conditions)?', options: ['Halving','Doubling','3x','4x'], answer: 3, explanation: 'Ideally 4x throughput: one instruction completes per stage-cycle once the pipeline is filled.' },
  ],

  '4.8': [
    { q: 'Under the Data Protection Act 2018, which principle requires that personal data be kept only as long as needed?', options: ['Accuracy','Purpose limitation','Storage limitation','Integrity and confidentiality'], answer: 2, explanation: 'Storage limitation: data shall not be kept for longer than is necessary for the purposes for which it was processed.' },
  ],

  '4.9': [
    { q: 'Which protocol ensures reliable ordered delivery of bytes?', options: ['UDP','ICMP','TCP','IP'], answer: 2, explanation: 'TCP provides reliable, ordered, error-checked stream delivery.' },
    { q: 'A subnet mask of 255.255.255.0 means how many bits are used for the network part?', options: ['8','16','24','32'], answer: 2, explanation: '255.255.255.0 = 24 ones, so /24.' },
  ],

  '4.10': [
    { q: 'Which join returns only rows with matching keys in both tables?', options: ['LEFT JOIN','RIGHT JOIN','INNER JOIN','FULL OUTER JOIN'], answer: 2, explanation: 'INNER JOIN returns only matched rows.' },
    { q: 'The purpose of 3NF is to remove:', options: ['Partial dependencies','Transitive dependencies','Foreign keys','Null values'], answer: 1, explanation: '3NF removes transitive dependencies (X → Y → Z where X is a key, Y is a non-key).' },
  ],

};

if (typeof module !== 'undefined') { module.exports = CS_AQA_PRACTICE; }
