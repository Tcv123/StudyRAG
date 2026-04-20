/*
 * AQA GCSE Computer Science (8525) — Diagnostic MCQ Question Bank
 * 50 questions per topic: 20 green (recall/basic), 20 amber (application), 10 red (analysis/evaluate)
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 questions at random.
 * answer: 0-based index of correct option.
 */

const CS_AQA_QUESTIONS = {

  '3.1': {
    name: 'Fundamentals of Algorithms',
    green: [
      { q: 'What is an algorithm?', options: ['A programming language','A step-by-step set of instructions to solve a problem','A type of computer','A storage device'], answer: 1 },
      { q: 'Which of the following is the BEST description of the difference between an algorithm and a program?', options: ['There is no difference','An algorithm is the set of logical steps; a program is an algorithm written in a specific programming language','A program is always faster than an algorithm','An algorithm uses hardware; a program uses software'], answer: 1 },
      { q: 'Which flowchart symbol represents a decision?', options: ['Rectangle','Parallelogram','Diamond','Rounded rectangle'], answer: 2 },
      { q: 'Which flowchart symbol represents a process (e.g. an assignment)?', options: ['Rectangle','Diamond','Parallelogram','Oval'], answer: 0 },
      { q: 'Which flowchart symbol represents input or output?', options: ['Rectangle','Parallelogram','Diamond','Triangle'], answer: 1 },
      { q: 'Which flowchart symbol represents the start or end of an algorithm?', options: ['Diamond','Rectangle','Rounded rectangle (terminator)','Circle'], answer: 2 },
      { q: 'What is pseudo-code?', options: ['Code written in machine language','A structured, language-like way of writing an algorithm in plain English','A secret code used by programmers','Compiled source code'], answer: 1 },
      { q: 'What is the purpose of a trace table?', options: ['To design a graphical user interface','To record how variables change as an algorithm runs','To store program output','To compile source code'], answer: 1 },
      { q: 'What does a linear search do?', options: ['Splits the list in half repeatedly','Checks every item in a list one at a time from start to end','Sorts the list first then searches','Searches only even-indexed items'], answer: 1 },
      { q: 'What is required for binary search to work correctly?', options: ['The list must be empty','The list must be sorted','The list must contain only integers','The list must be short'], answer: 1 },
      { q: 'How does binary search narrow down the search space?', options: ['By removing the first item each time','By halving the remaining search space each step','By sorting the list again each pass','By doubling the list length'], answer: 1 },
      { q: 'What is a "pass" in bubble sort?', options: ['A single swap of two items','A single traversal through the list comparing adjacent pairs','A function call','A recursive step'], answer: 1 },
      { q: 'Which of the following does bubble sort do on each pair of adjacent items?', options: ['Adds them together','Compares them and swaps if in the wrong order','Removes them both','Copies the pair to a new list'], answer: 1 },
      { q: 'Merge sort is an example of which design technique?', options: ['Brute force','Trial and error','Divide and conquer','Greedy search'], answer: 2 },
      { q: 'What is decomposition in computational thinking?', options: ['Deleting unnecessary variables','Breaking a big problem down into smaller sub-problems','Removing detail from a model','Sorting a list'], answer: 1 },
      { q: 'What is abstraction in computational thinking?', options: ['Writing code in assembly language','Removing unnecessary detail so you can focus on what matters','Breaking a problem into sub-problems','Tracing through an algorithm'], answer: 1 },
      { q: 'Which algorithm only works on a sorted list?', options: ['Linear search','Bubble sort','Binary search','Merge sort'], answer: 2 },
      { q: 'Which sorting algorithm works by recursively splitting the list and merging sorted halves?', options: ['Bubble sort','Linear sort','Merge sort','Insertion sort'], answer: 2 },
      { q: 'In pseudo-code, what does the symbol \u2190 usually mean?', options: ['Equal to','Greater than','Assignment','Return'], answer: 2 },
      { q: 'Which of the following is NOT a property an algorithm must have?', options: ['It must terminate','Each step must be precise','It must be written in Python','It must produce the correct output for the same input'], answer: 2 },
    ],
    amber: [
      { q: 'A flowchart has: INPUT x, then decision "x > 5?". If yes OUTPUT "big", else OUTPUT "small". What does it output when x = 3?', options: ['big','small','nothing','x'], answer: 1 },
      { q: 'Consider: total \u2190 0; FOR i \u2190 1 TO 4: total \u2190 total + i. What is total after the loop?', options: ['4','6','10','16'], answer: 2 },
      { q: 'Linear search on the list [4, 9, 2, 7, 5] for value 7 takes how many comparisons?', options: ['1','2','3','4'], answer: 3 },
      { q: 'Binary search on the sorted list [2, 4, 6, 8, 10, 12, 14] looking for 10: which element is compared first?', options: ['2','8','10','14'], answer: 1 },
      { q: 'A bubble sort is run on [4, 1, 3, 2]. How many swaps happen in the FIRST pass?', options: ['0','1','2','3'], answer: 2 },
      { q: 'For a list of 16 sorted items, how many comparisons does binary search need at most?', options: ['2','4','8','16'], answer: 1 },
      { q: 'For a list of 16 items, how many comparisons does linear search need in the worst case?', options: ['4','8','16','256'], answer: 2 },
      { q: 'Which statement about a trace table is correct?', options: ['A new row is added each time a variable changes','A new row is added for every line of code','Trace tables only record output, not variables','Trace tables are used only for sorting algorithms'], answer: 0 },
      { q: 'Which of these is a valid reason to use a linear search rather than a binary search?', options: ['The list is very large','The list is unsorted','Fewer comparisons are needed','It always takes fewer steps'], answer: 1 },
      { q: 'Doubling the size of a list affects the worst-case comparisons of linear search by:', options: ['No change','Doubling them','Halving them','Squaring them'], answer: 1 },
      { q: 'Doubling the size of a list affects binary search worst-case comparisons by:', options: ['Adding 1 comparison','Doubling them','Halving them','Squaring them'], answer: 0 },
      { q: 'Bubble sort on [5, 4, 3, 2, 1] will take approximately how many comparisons in total?', options: ['4','10','25','100'], answer: 1 },
      { q: 'What is the OUTPUT? x \u2190 10; WHILE x > 0: x \u2190 x - 3; ENDWHILE; OUTPUT x', options: ['0','-1','-2','1'], answer: 2 },
      { q: 'Merging the two sorted lists [1, 4, 7] and [2, 3, 8] produces:', options: ['[1, 2, 3, 4, 7, 8]','[1, 4, 7, 2, 3, 8]','[8, 7, 4, 3, 2, 1]','[2, 3, 8, 1, 4, 7]'], answer: 0 },
      { q: 'You apply merge sort to [3, 1, 4, 1, 5]. After the final merge, what is the list?', options: ['[1, 1, 3, 4, 5]','[1, 3, 4, 1, 5]','[5, 4, 3, 1, 1]','[3, 1, 1, 4, 5]'], answer: 0 },
      { q: 'Which of the following BEST shows abstraction?', options: ['Writing a register program that stores only names and presence flags','Splitting a game into input, logic and render modules','Using a nested loop','Adding more RAM'], answer: 0 },
      { q: 'Which of the following BEST shows decomposition?', options: ['Ignoring a student\'s hair colour when writing a register','Splitting a shopping website into login, cart and payment modules','Reducing the size of integers used','Removing comments from code'], answer: 1 },
      { q: 'A linear search on a list of 1,000,000 items takes at most how many comparisons?', options: ['20','1000','1,000,000','1,000,000,000'], answer: 2 },
      { q: 'A binary search on 1,000,000 sorted items takes at most approximately how many comparisons?', options: ['20','1000','100,000','500,000'], answer: 0 },
      { q: 'Which of the following is true about bubble sort?', options: ['It is recursive','After each pass the largest remaining unsorted item is in its correct final position','It always needs a sorted list','It uses divide and conquer'], answer: 1 },
    ],
    red: [
      { q: 'Why does binary search take roughly log\u2082(n) comparisons?', options: ['Because it compares every pair of items','Because each step halves the remaining search space, and log\u2082(n) is the number of times n can be halved to reach 1','Because it uses recursion','Because sorted lists are faster to read'], answer: 1 },
      { q: 'For a list of 10 items, approximately how many comparisons does bubble sort make in the worst case?', options: ['10','20','45','100'], answer: 2 },
      { q: 'A company stores 2 million customer records that are updated constantly and searched many times per second. Which search approach is best overall?', options: ['Linear search on the unsorted list','Keep the list sorted and use binary search','Bubble sort then linear search each time','Use merge sort each time before searching'], answer: 1 },
      { q: 'A teacher is sorting a class list of 20 nearly-sorted names once a year. Which sort is a sensible choice?', options: ['Merge sort, because it is always fastest','Bubble sort, because it is simple and fast on small or nearly-sorted lists','Binary sort, because it needs fewer comparisons','None, sorting is never needed'], answer: 1 },
      { q: 'Which statement about merge sort is MOST accurate?', options: ['It is faster than bubble sort for large lists because its work grows like n log n rather than n\u00B2','It is simpler to implement than bubble sort','It does not require any extra memory','It only works on lists that are already sorted'], answer: 0 },
      { q: 'Why must binary search have a sorted list?', options: ['To make the code easier to write','Because it decides which half to discard by comparing against the middle item, which only works if items are in order','Because it is recursive','To save memory'], answer: 1 },
      { q: 'Which statement BEST captures the difference between decomposition and abstraction?', options: ['They are the same','Decomposition breaks a problem into sub-problems; abstraction removes unnecessary detail','Decomposition is faster; abstraction is slower','Abstraction only applies to sorting'], answer: 1 },
      { q: 'Comparing the efficiency of two algorithms on input size n, which pair grows MOST slowly as n increases?', options: ['n\u00B2 (bubble sort)','n (linear search)','log n (binary search)','n log n (merge sort)'], answer: 2 },
      { q: 'Which scenario is the best case for bubble sort?', options: ['An already-sorted list, which can be detected in one pass with no swaps','A reverse-sorted list','A list of equal items','A random list'], answer: 0 },
      { q: 'Evaluate: "Merge sort is always the best choice." Which response is MOST correct?', options: ['True, it is always fastest','Partly true: merge sort scales well for large lists but uses more memory and is more complex than bubble sort, which may be preferable for small or nearly-sorted data','False, merge sort never works','True, because it uses recursion'], answer: 1 },
    ],
  },
  '3.2': { name: 'Programming', green: [], amber: [], red: [] },
  '3.3': { name: 'Fundamentals of Data Representation', green: [], amber: [], red: [] },
  '3.4': { name: 'Computer Systems', green: [], amber: [], red: [] },
  '3.5': { name: 'Fundamentals of Computer Networks', green: [], amber: [], red: [] },
  '3.6': { name: 'Cyber Security', green: [], amber: [], red: [] },
  '3.7': { name: 'Relational Databases and SQL', green: [], amber: [], red: [] },
  '3.8': { name: 'Ethical, Legal and Environmental Impacts', green: [], amber: [], red: [] },

};
