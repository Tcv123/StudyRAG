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
  '3.3': { green: [], amber: [], red: [] },
  '3.4': { green: [], amber: [], red: [] },
  '3.5': { green: [], amber: [], red: [] },
  '3.6': { green: [], amber: [], red: [] },
  '3.7': { green: [], amber: [], red: [] },
  '3.8': { green: [], amber: [], red: [] },

};
