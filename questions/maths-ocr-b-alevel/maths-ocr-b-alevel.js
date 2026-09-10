/*
 * OCR B (MEI) A-Level Mathematics (H640) — Multiple-Choice Question Bank
 * Single A-Level entry: AS (H630) content is a strict subset of H640 and is
 * folded into the same topic ids — there is no separate AS key.
 * Keyed by topic id: 1.1–1.13 Pure, 2.1–2.5 Statistics, 3.1–3.7 Mechanics.
 * Each topic holds: { name, green: [], amber: [], red: [] }.
 * Target 20 green + 20 amber + 10 red per topic (50 total).
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 MCQs at random.
 * Trailing comments give the MEI specification reference for each question.
 */

const MATHS_OCR_B_ALEVEL_QUESTIONS = {

  '1.1': {
    name: 'Proof',
    green: [
      { q: 'Proof by exhaustion establishes a result by:', options: ['Checking every case of a finite set of cases','Assuming the statement is false and deriving a contradiction','Producing a single counter-example','Applying the result to arbitrarily large n'], answer: 0 }, // p1
      { q: 'Which single value disproves "every prime number is odd"?', options: ['1','2','9','15'], answer: 1 }, // p2
      { q: 'Proof by contradiction begins by:', options: ['Assuming the statement to be proved is false','Checking small cases','Drawing a diagram','Assuming the statement is true'], answer: 0 }, // p3
      { q: 'The symbol ⟹ means:', options: ['Implies','Equals','If and only if','Approximately equals'], answer: 0 }, // p1
      { q: 'The symbol ⇔ means:', options: ['If and only if','Implies','Proportional to','Much greater than'], answer: 0 }, // p1
      { q: 'A counter-example is used to:', options: ['Disprove a general statement','Prove a general statement','Define a term','Restate a theorem'], answer: 0 }, // p2
      { q: 'The symbol ∀ means:', options: ['For all','There exists','Is a subset of','The empty set'], answer: 0 }, // p1
      { q: 'The symbol ∃ means:', options: ['There exists','For all','Therefore','Is an element of'], answer: 0 }, // p1
      { q: 'Which value disproves "all odd numbers are prime"?', options: ['9','3','5','7'], answer: 0 }, // p2
      { q: 'Proof by deduction proceeds by:', options: ['Logical steps from given assumptions to a conclusion','Testing a few values','Assuming the negation','Listing every case'], answer: 0 }, // p1
      { q: 'A conjecture is:', options: ['A statement believed true but not yet proved','A proved theorem','A definition','An axiom'], answer: 0 }, // p1
      { q: 'A smaller result proved in order to establish a larger theorem is called:', options: ['A lemma','A conjecture','An axiom','A counter-example'], answer: 0 }, // p1
      { q: 'To prove deductively that the sum of two even numbers is even, the two numbers are written as:', options: ['2a and 2b','2a and 2a','a and a + 2','2a + 1 and 2b + 1'], answer: 0 }, // p1
      { q: 'The irrationality of √2 is proved by:', options: ['Contradiction','Exhaustion','Counter-example','Direct calculation'], answer: 0 }, // p3
      { q: "Euclid's classical theorem about primes states that:", options: ['There are infinitely many primes','Every prime is odd','Primes become evenly spaced','There are exactly 100 primes'], answer: 0 }, // p3
      { q: 'To disprove a general statement you need:', options: ['One counter-example','Two counter-examples','A proof by exhaustion','Infinitely many cases'], answer: 0 }, // p2
      { q: 'In the implication "if P then Q", P is called the:', options: ['Hypothesis','Conclusion','Contrapositive','Converse'], answer: 0 }, // p1
      { q: 'The contrapositive of "if P then Q" is:', options: ['If not Q then not P','If Q then P','If not P then not Q','If P then not Q'], answer: 0 }, // p1
      { q: 'Proof by exhaustion is possible only when:', options: ['The number of cases is finite','The statement involves primes','The statement is false','The variable is real'], answer: 0 }, // p1
      { q: 'A statement assumed true without proof is called:', options: ['An axiom','A lemma','A theorem','A corollary'], answer: 0 }, // p1
    ],
    amber: [
      { q: 'The claim "n² − n + 41 is prime for every positive integer n" is disproved by:', options: ['n = 41, since the expression equals 41²','n = 2','n = 10','It cannot be disproved'], answer: 0 }, // p2
      { q: 'In proving √2 irrational by contradiction, the contradiction arises because:', options: ['p and q are both shown to be even, contradicting p/q being in lowest terms','p² is shown to be odd','q is shown to be zero','√2 is shown to be greater than 1'], answer: 0 }, // p3
      { q: 'If P ⟹ Q is true and Q is false, then:', options: ['P is false','P is true','P is undetermined','Q is true'], answer: 0 }, // p1
      { q: 'Which value disproves "2ⁿ − 1 is prime for every positive integer n"?', options: ['n = 4, giving 15 = 3 × 5','n = 2, giving 3','n = 3, giving 7','n = 5, giving 31'], answer: 0 }, // p2
      { q: 'Deductively, the sum of two odd numbers 2a + 1 and 2b + 1 simplifies to:', options: ['2(a + b + 1), which is even','2(a + b) + 1, which is odd','4ab, which is even','a + b, of unknown parity'], answer: 0 }, // p1
      { q: 'The contrapositive of "if n² is odd then n is odd" is:', options: ['If n is even then n² is even','If n is odd then n² is odd','If n² is even then n is even','If n is not odd then n² is odd'], answer: 0 }, // p1
      { q: 'Which value disproves "if n is prime then 2ⁿ − 1 is prime"?', options: ['n = 11, since 2047 = 23 × 89','n = 3','n = 5','n = 7'], answer: 0 }, // p2
      { q: 'To prove the product of two consecutive integers is always even, the key observation is:', options: ['One of n and n + 1 must be even','Both are even','Their sum is odd','Their difference is 1'], answer: 0 }, // p1
      { q: '"Without loss of generality" (WLOG) means:', options: ['A particular case may be assumed because the argument applies symmetrically to the others','The remaining cases are ignored','All constraints are dropped','Induction is being used'], answer: 0 }, // p1
      { q: 'The statement "x² = 4 ⟹ x = 2" is false because:', options: ['x could equal −2','x could be irrational','4 is not a square','x must be positive'], answer: 0 }, // p1
      { q: 'The negation of "all swans are white" is:', options: ['There exists a swan that is not white','No swan is white','All swans are black','Some swans are white'], answer: 0 }, // p2
      { q: 'Expanding (2n + 1)² − (2n − 1)² gives:', options: ['8n','2','4n²','8n + 2'], answer: 0 }, // p1
      { q: 'The fact "if a² is divisible by 3 then a is divisible by 3" is the key step in proving:', options: ['√3 is irrational','√4 is irrational','3 is prime','There are infinitely many primes'], answer: 0 }, // p3
      { q: 'Which value disproves "n² + n + 1 is prime for every positive integer n"?', options: ['n = 4, giving 21 = 3 × 7','n = 1, giving 3','n = 2, giving 7','n = 3, giving 13'], answer: 0 }, // p2
      { q: 'To prove by exhaustion that n² leaves remainder 0 or 1 on division by 4, it is enough to consider:', options: ['n even and n odd','n prime and n composite','n < 10','n positive only'], answer: 0 }, // p1
      { q: 'Deductively, the sum of three consecutive integers n − 1, n, n + 1 is:', options: ['3n, which is divisible by 3','3n + 1','n³','Always prime'], answer: 0 }, // p1
      { q: 'A proof that assumes the negation and derives an impossibility is called:', options: ['Proof by contradiction','Proof by exhaustion','Proof by deduction','Disproof by counter-example'], answer: 0 }, // p3
      { q: 'The converse of "if P then Q" is:', options: ['If Q then P','If not P then not Q','If not Q then not P','P if and only if Q'], answer: 0 }, // p1
      { q: 'Which statement is true for every integer n?', options: ['n² ≥ n','n² > n','n² ≤ n','n² = n'], answer: 0 }, // p1
      { q: 'To prove "the square of any odd number is odd", write the odd number as:', options: ['2k + 1, then square to get 2(2k² + 2k) + 1','2k, then square','k + 1, then square','k², then double'], answer: 0 }, // p1
    ],
    red: [
      { q: "Euclid's proof of infinitely many primes takes a finite list p₁…p_n and forms N = p₁p₂⋯p_n + 1. The contradiction follows because:", options: ['N is divisible by no prime in the list, so N is prime or has a prime factor outside it','N is always prime','N is always composite','N is divisible by every p_i'], answer: 0 }, // p3
      { q: 'In the proof that √2 is irrational, the assumption that p/q is in lowest terms is essential because:', options: ['It is the assumption the final contradiction violates','It makes q positive','It ensures p is prime','It guarantees p > q'], answer: 0 }, // p3
      { q: 'The √2 argument fails if copied to prove √4 irrational because the step that breaks down is:', options: ['"p² divisible by 4 ⟹ p divisible by 4", which is false (take p = 2)','"p/q in lowest terms", which cannot be assumed','"4q² = p²", which is not valid','"q is an integer", which fails'], answer: 0 }, // p3
      { q: 'To prove by exhaustion that n² ≡ 1 (mod 3) whenever 3 does not divide n, the cases required are:', options: ['n ≡ 1 (mod 3) and n ≡ 2 (mod 3)','n prime and n composite','n < 3 only','n even and n odd'], answer: 0 }, // p1
      { q: 'The negation of "∀x ∃y such that P(x, y)" is:', options: ['∃x such that ∀y, P(x, y) is false','∀x ∀y, P(x, y) is false','∃x ∃y such that P(x, y) is false','∀x ∃y such that P(x, y) is false'], answer: 0 }, // p2
      { q: 'To prove √2 + √3 is irrational, the standard opening move is:', options: ['Assume it equals a rational r, then square to isolate a surd','Compute its decimal expansion','Use proof by exhaustion','Find a counter-example'], answer: 0 }, // p3
      { q: 'Fermat conjectured that 2^(2ⁿ) + 1 is prime for all n. This is disproved by:', options: ['n = 5, since 4294967297 = 641 × 6700417','n = 2','n = 3','n = 4'], answer: 0 }, // p2
      { q: 'The cleanest route to proving "if 2ⁿ − 1 is prime then n is prime" is:', options: ['Prove the contrapositive: if n is composite then 2ⁿ − 1 factorises','Direct deduction from primality of 2ⁿ − 1','Exhaustion over n ≤ 20','A counter-example'], answer: 0 }, // p1
      { q: 'A proof by contradiction is logically valid because:', options: ['A statement and its negation cannot both hold, so a false negation forces the statement','Every mathematical statement is true','Counter-examples are impossible','Contradictions are always resolvable'], answer: 0 }, // p3
      { q: 'Disproving "every odd number ≥ 3 is the sum of a prime and a power of 2" requires:', options: ['One explicit odd number for which no such decomposition exists','A general algebraic argument','Checking all odd numbers','Proof by exhaustion'], answer: 0 }, // p2
    ],
  },

  '1.2': {
    name: 'Algebra',
    green: [
      { q: 'Simplify √50.', options: ['5√2','2√5','25√2','10√5'], answer: 0 }, // a10
      { q: 'Rationalise the denominator of 1/√5.', options: ['√5/5','5√5','√5','1/5'], answer: 0 }, // a11
      { q: 'For x ≠ 0, x⁰ equals:', options: ['1','0','x','Undefined'], answer: 0 }, // a13
      { q: 'x⁻ᵃ is equal to:', options: ['1/xᵃ','−xᵃ','xᵃ','0'], answer: 0 }, // a13
      { q: 'x^(1/2) is equal to:', options: ['√x','x²','1/x','2x'], answer: 0 }, // a13
      { q: 'The discriminant of ax² + bx + c is:', options: ['b² − 4ac','b² + 4ac','4ac − b²','−b/2a'], answer: 0 }, // a3
      { q: 'If the discriminant is positive, the quadratic has:', options: ['Two distinct real roots','One repeated root','No real roots','Three roots'], answer: 0 }, // a3
      { q: 'If the discriminant is zero, the quadratic has:', options: ['One repeated root','Two distinct real roots','No real roots','Infinitely many roots'], answer: 0 }, // a3
      { q: 'If the discriminant is negative, the quadratic has:', options: ['No real roots','Two distinct real roots','One repeated root','One real root'], answer: 0 }, // a3
      { q: 'Solve 2x + 6 = 14.', options: ['x = 4','x = 10','x = 3','x = 7'], answer: 0 }, // a-star
      { q: 'Factorise x² − 9.', options: ['(x − 3)(x + 3)','(x − 3)²','(x − 9)(x + 1)','(x + 9)(x − 1)'], answer: 0 }, // a2
      { q: 'Solve x² − 5x + 6 = 0.', options: ['x = 2 or x = 3','x = −2 or x = −3','x = 1 or x = 6','x = 5 or x = 6'], answer: 0 }, // a2
      { q: 'xᵃ × xᵇ equals:', options: ['x^(a+b)','x^(ab)','x^(a−b)','2x^(a+b)'], answer: 0 }, // a12
      { q: '(xᵃ)ᵇ equals:', options: ['x^(ab)','x^(a+b)','x^(a−b)','xᵃ + xᵇ'], answer: 0 }, // a12
      { q: 'Make r the subject of C = 2πr.', options: ['r = C/(2π)','r = 2πC','r = C − 2π','r = 2π/C'], answer: 0 }, // a-star
      { q: 'If y is directly proportional to x, then:', options: ['y = kx for some constant k','y = k/x','y = k + x','y = kx²'], answer: 0 }, // a14
      { q: 'If y is inversely proportional to x, then:', options: ['y = k/x','y = kx','y = k − x','y = kx²'], answer: 0 }, // a14
      { q: 'Solve 3x < 12.', options: ['x < 4','x > 4','x < 36','x > 36'], answer: 0 }, // a7
      { q: 'Simplify √8 + √2.', options: ['3√2','√10','2√10','4√2'], answer: 0 }, // a10
      { q: 'Solve x² = 16.', options: ['x = ±4','x = 4','x = 8','x = ±8'], answer: 0 }, // a2
    ],
    amber: [
      { q: 'Rationalise the denominator of 1/(3 + √5).', options: ['(3 − √5)/4','(3 + √5)/4','(3 − √5)/14','3 − √5'], answer: 0 }, // a11
      { q: 'Complete the square for x² + 6x + 2.', options: ['(x + 3)² − 7','(x + 3)² + 7','(x + 6)² − 34','(x − 3)² − 7'], answer: 0 }, // a2
      { q: 'Solve x² − 4x − 5 > 0.', options: ['x < −1 or x > 5','−1 < x < 5','x < 5','x > −1'], answer: 0 }, // a8
      { q: 'For what values of k does kx² + 4x + k = 0 have a repeated root?', options: ['k = ±2','k = 2 only','k = ±4','k = 0'], answer: 0 }, // a3
      { q: 'Solve simultaneously y = x + 1 and x² + y² = 25.', options: ['(3, 4) and (−4, −3)','(3, 4) only','(4, 5) and (−3, −2)','(5, 6) and (−5, −4)'], answer: 0 }, // a5
      { q: 'Solve 2^(2x) − 5·2ˣ + 4 = 0.', options: ['x = 0 or x = 2','x = 1 or x = 4','x = 2 only','x = 1 or x = 2'], answer: 0 }, // a2
      { q: 'Simplify (2x²y³)³.', options: ['8x⁶y⁹','6x⁶y⁹','8x⁵y⁶','2x⁶y⁹'], answer: 0 }, // a12
      { q: 'Solve |x − 3| < 2.', options: ['1 < x < 5','x < 1 or x > 5','−5 < x < −1','x < 5'], answer: 0 }, // a7
      { q: 'y is inversely proportional to x². If y = 4 when x = 3, find y when x = 6.', options: ['1','2','8','16'], answer: 0 }, // a14
      { q: 'Solve x³ − 4x = 0.', options: ['x = 0, 2 or −2','x = 2 or −2','x = 0 or 4','x = 0 or 2'], answer: 0 }, // a2
      { q: 'Evaluate 8^(2/3).', options: ['4','16','6','2'], answer: 0 }, // a13
      { q: 'Solve 3/(x − 1) = x + 1.', options: ['x = 2 or x = −2','x = 2 only','x = 1 or x = 3','x = 4'], answer: 0 }, // a2
      { q: 'Find k so that x² + kx + 9 = 0 has equal roots.', options: ['k = ±6','k = 6 only','k = ±3','k = 9'], answer: 0 }, // a3
      { q: 'Solve simultaneously 2x + 3y = 7 and 3x − y = 5.', options: ['x = 2, y = 1','x = 1, y = 2','x = 3, y = 4','x = −1, y = 3'], answer: 0 }, // a4
      { q: 'In set notation, "x < 2 or x > 5" is written:', options: ['{x : x < 2} ∪ {x : x > 5}','{x : x < 2} ∩ {x : x > 5}','{x : 2 < x < 5}','{x : x > 2}'], answer: 0 }, // a9
      { q: 'Express (5x + 1)/((x + 1)(x − 2)) in partial fractions.', options: ['(4/3)/(x + 1) + (11/3)/(x − 2)','1/(x + 1) + 4/(x − 2)','2/(x + 1) + 3/(x − 2)','(4/3)/(x + 1) − (11/3)/(x − 2)'], answer: 0 }, // a15
      { q: 'The point of intersection of two graphs corresponds to:', options: ['A simultaneous solution of their equations','A turning point','An asymptote','A root of one equation only'], answer: 0 }, // a6
      { q: 'Solve 9ˣ = 3^(x+1).', options: ['x = 1','x = 0','x = 3','x = 1/2'], answer: 0 }, // a12
      { q: 'Rationalise (√7 − √3)/(√7 + √3).', options: ['(10 − 2√21)/4','(10 + 2√21)/4','√7 − √3','(4 − 2√21)/10'], answer: 0 }, // a11
      { q: 'Solve (x − 1)(x + 2)(x − 3) = 0.', options: ['x = 1, −2 or 3','x = −1, 2 or −3','x = 1 or 3','x = 0'], answer: 0 }, // a2
    ],
    red: [
      { q: 'Solve x⁴ − 5x² + 4 = 0.', options: ['x = ±1 or x = ±2','x = 1 or x = 4','x = ±2 only','x = ±1 only'], answer: 0 }, // a2
      { q: 'Express (2x + 3)/((x + 1)²(x − 2)) in partial fractions. The correct form to assume is:', options: ['A/(x + 1) + B/(x + 1)² + C/(x − 2)','A/(x + 1)² + B/(x − 2)','A/(x + 1) + B/(x − 2)','(Ax + B)/(x + 1)² + C/(x − 2)'], answer: 0 }, // a15
      { q: 'For which k does kx² + (k + 3)x + 4 = 0 have no real roots?', options: ['1 < k < 9','k < 1 or k > 9','k > 9 only','k < 0'], answer: 0 }, // a3
      { q: 'Solve (2x + 1)/(x − 3) > 1.', options: ['x < −4 or x > 3','−4 < x < 3','x > 3 only','x < 3'], answer: 0 }, // a8
      { q: 'When solving an inequality involving an algebraic fraction, multiplying both sides by (x − 3) is unsafe because:', options: ['Its sign is unknown, so the inequality may reverse','It may equal zero only','It introduces surds','It changes the degree'], answer: 0 }, // a8
      { q: 'The condition for the line y = mx + c to be tangent to y = x² is:', options: ['m² + 4c = 0','m² − 4c = 0','m + c = 0','c = 0'], answer: 0 }, // a3
      { q: 'Solve |2x + 1| = |x − 3|.', options: ['x = −4 or x = 2/3','x = 2/3 only','x = 4 or x = −2/3','x = −4 only'], answer: 0 }, // a7
      { q: 'Simplify (√3 + 1)/(√3 − 1) + (√3 − 1)/(√3 + 1).', options: ['4','2√3','2','8'], answer: 0 }, // a11
      { q: 'If y ∝ √x and x is multiplied by 9, then y is:', options: ['Multiplied by 3','Multiplied by 9','Divided by 3','Unchanged'], answer: 0 }, // a14
      { q: 'The equation x² + bx + c = 0 has roots α and β. Then α + β and αβ equal:', options: ['−b and c','b and −c','b and c','−b and −c'], answer: 0 }, // a2
    ],
  },

  '1.3': {
    name: 'Functions',
    green: [
      { q: 'The factor theorem states that if f(a) = 0 then:', options: ['(x − a) is a factor of f(x)','(x + a) is a factor of f(x)','f(x) has no roots','x = a is an asymptote'], answer: 0 }, // f-poly
      { q: 'The remainder when f(x) is divided by (x − a) is:', options: ['f(a)','f(−a)','0','f(0)'], answer: 0 }, // f-poly
      { q: 'The degree of 3x⁴ − 2x + 1 is:', options: ['4','3','1','5'], answer: 0 }, // f-poly
      { q: 'If f(x) = x² + 1, then f(3) equals:', options: ['10','7','9','4'], answer: 0 }, // f1
      { q: 'The domain of a function is:', options: ['The set of permitted inputs','The set of outputs','The set of roots','The set of asymptotes'], answer: 0 }, // f1
      { q: 'The range of a function is:', options: ['The set of outputs it takes','The set of inputs','Its degree','Its gradient'], answer: 0 }, // f1
      { q: '|−5| equals:', options: ['5','−5','0','25'], answer: 0 }, // f-mod
      { q: 'For x < 0, |x| equals:', options: ['−x','x','0','x²'], answer: 0 }, // f-mod
      { q: 'A one-to-one function has the property that:', options: ['Each output comes from exactly one input','Each input gives two outputs','It has no inverse','It is always increasing'], answer: 0 }, // f1
      { q: 'The notation fg(x) means:', options: ['f(g(x))','g(f(x))','f(x) × g(x)','f(x) + g(x)'], answer: 0 }, // f1
      { q: 'If f(x) = 2x + 1, the inverse function f⁻¹(x) is:', options: ['(x − 1)/2','2x − 1','1/(2x + 1)','(x + 1)/2'], answer: 0 }, // f1
      { q: 'The graph of y = |x| has the shape of:', options: ['A V with vertex at the origin','A parabola','A straight line','A hyperbola'], answer: 0 }, // f-mod
      { q: 'For f(x) = x² with domain all real numbers, the range is:', options: ['y ≥ 0','y > 0','All real numbers','y ≤ 0'], answer: 0 }, // f1
      { q: 'If (x − 2) is a factor of f(x), then:', options: ['f(2) = 0','f(−2) = 0','f(0) = 2','f(2) = 2'], answer: 0 }, // f-poly
      { q: 'If f(x) = x + 3, then ff(x) equals:', options: ['x + 6','x + 3','x² + 9','2x + 3'], answer: 0 }, // f1
      { q: 'The graph of an inverse function is the reflection of the original in the line:', options: ['y = x','y = 0','x = 0','y = −x'], answer: 0 }, // f1
      { q: 'Which of these is a many-to-one function?', options: ['y = x²','y = 2x + 1','y = x³','y = x − 4'], answer: 0 }, // f1
      { q: 'The domain of f(x) = 1/x must exclude:', options: ['x = 0','x = 1','x < 0','x > 0'], answer: 0 }, // f1
      { q: 'Solve |x| = 7.', options: ['x = 7 or x = −7','x = 7','x = −7','No solution'], answer: 0 }, // f-mod
      { q: 'Multiplying a degree 2 polynomial by a degree 3 polynomial gives a polynomial of degree:', options: ['5','6','3','2'], answer: 0 }, // f-poly
    ],
    amber: [
      { q: 'Fully factorise x³ − 6x² + 11x − 6.', options: ['(x − 1)(x − 2)(x − 3)','(x + 1)(x + 2)(x + 3)','(x − 1)(x − 2)(x + 3)','(x − 6)(x² + 1)'], answer: 0 }, // f-poly
      { q: 'The range of f(x) = x² − 4x + 7 is:', options: ['y ≥ 3','y ≥ 7','y ≥ 0','All real numbers'], answer: 0 }, // f1
      { q: 'If f(x) = 2x + 3 and g(x) = x², then fg(x) equals:', options: ['2x² + 3','(2x + 3)²','2x³','4x² + 9'], answer: 0 }, // f1
      { q: 'If f(x) = 2x + 3 and g(x) = x², then gf(x) equals:', options: ['(2x + 3)²','2x² + 3','4x² + 3','2x² + 9'], answer: 0 }, // f1
      { q: 'Solve |2x − 1| = 5.', options: ['x = 3 or x = −2','x = 3 only','x = 2 or x = −3','x = ±5'], answer: 0 }, // f-mod
      { q: 'Solve |x + 2| > 3.', options: ['x < −5 or x > 1','−5 < x < 1','x > 1 only','x < −5 only'], answer: 0 }, // f-mod
      { q: 'The inverse of f(x) = 3/(x − 2) is:', options: ['3/x + 2','3/(x + 2)','(x − 2)/3','3x − 2'], answer: 0 }, // f1
      { q: 'Find the remainder when x³ + 2x² − x + 4 is divided by (x + 1).', options: ['6','4','2','0'], answer: 0 }, // f-poly
      { q: 'Verify that (x + 3) is a factor of x³ + 2x² − 5x − 6 by evaluating:', options: ['f(−3), which gives 0','f(3), which gives 0','f(0), which gives −6','f(1), which gives −8'], answer: 0 }, // f-poly
      { q: 'The vertex of y = |x − 2| is at:', options: ['(2, 0)','(0, 2)','(−2, 0)','(0, −2)'], answer: 0 }, // f-mod
      { q: 'The domain of f(x) = √(x − 3) is:', options: ['x ≥ 3','x > 3','x ≤ 3','All real numbers'], answer: 0 }, // f1
      { q: 'To make f(x) = x² invertible, a suitable restricted domain is:', options: ['x ≥ 0','All real numbers','x ≠ 0','−1 ≤ x ≤ 1'], answer: 0 }, // f1
      { q: 'For f(x) = 1/(x − 1) with x > 1, the range is:', options: ['y > 0','y ≥ 0','y < 0','All real numbers'], answer: 0 }, // f1
      { q: 'Solve |x − 1| = |x + 3|.', options: ['x = −1','x = 1','x = −3','No solution'], answer: 0 }, // f-mod
      { q: 'Dividing a polynomial by a quadratic gives a remainder of degree at most:', options: ['1','2','0','3'], answer: 0 }, // f-poly
      { q: 'The graph of y = |f(x)| is obtained from y = f(x) by:', options: ['Reflecting the parts below the x-axis in the x-axis','Reflecting the whole graph in the y-axis','Translating it upwards','Stretching it vertically'], answer: 0 }, // f-mod
      { q: 'The graph of y = f(|x|) is obtained from y = f(x) by:', options: ['Reflecting the x ≥ 0 part in the y-axis','Reflecting the whole graph in the x-axis','Translating it left','Stretching it horizontally'], answer: 0 }, // f-mod
      { q: 'Fully factorise 2x³ − x² − 13x − 6.', options: ['(x − 3)(2x + 1)(x + 2)','(x + 3)(2x − 1)(x − 2)','(x − 3)(x + 1)(2x + 2)','(2x − 3)(x + 1)(x + 2)'], answer: 0 }, // f-poly
      { q: 'A function is invertible if and only if it is:', options: ['One-to-one on its domain','Many-to-one','Continuous','Increasing'], answer: 0 }, // f1
      { q: 'If f(x) = eˣ, then f is one-to-one because:', options: ['No horizontal line meets the graph more than once','It is always positive','It passes through (0, 1)','It has an asymptote'], answer: 0 }, // f1
    ],
    red: [
      { q: 'Solve |2x − 3| < |x|.', options: ['1 < x < 3','x < 1 or x > 3','−3 < x < 1','x > 3'], answer: 0 }, // f-mod
      { q: 'For f(x) = x² − 4x with domain x ≥ 2, the inverse is:', options: ['f⁻¹(x) = 2 + √(x + 4)','f⁻¹(x) = 2 − √(x + 4)','f⁻¹(x) = √(x + 4)','f⁻¹(x) = (x + 4)/2'], answer: 0 }, // f1
      { q: 'Fully factorise x³ − 3x + 2.', options: ['(x − 1)²(x + 2)','(x − 1)(x + 2)²','(x + 1)²(x − 2)','(x − 1)(x − 2)(x + 1)'], answer: 0 }, // f-poly
      { q: 'The range of f(x) = x/(x² + 1) for real x is:', options: ['−1/2 ≤ y ≤ 1/2','y ≥ 0','All real numbers','0 < y < 1'], answer: 0 }, // f1
      { q: 'Solve |x² − 4| = 3.', options: ['x = ±1 or x = ±√7','x = ±1 only','x = ±√7 only','x = ±3'], answer: 0 }, // f-mod
      { q: 'The inverse of f(x) = (2x + 1)/(x − 3) is:', options: ['(3x + 1)/(x − 2)','(3x − 1)/(x + 2)','(x − 3)/(2x + 1)','(2x − 1)/(x + 3)'], answer: 0 }, // f1
      { q: 'The equation |x − 1| + |x + 2| = 3 has:', options: ['Infinitely many solutions, namely −2 ≤ x ≤ 1','Exactly two solutions','Exactly one solution','No solutions'], answer: 0 }, // f-mod
      { q: 'The composite gf(x) may fail to exist because:', options: ['The range of f is not contained in the domain of g','f is not continuous','g has no inverse','f is many-to-one'], answer: 0 }, // f1
      { q: 'If (x − 2) is a factor of x³ + ax² − 5x + 6, then a equals:', options: ['−1','1','−4','4'], answer: 0 }, // f-poly
      { q: 'The number of real solutions of |x²  − 1| = k for 0 < k < 1 is:', options: ['4','2','3','0'], answer: 0 }, // f-mod
    ],
  },

  '1.4': {
    name: 'Graphs',
    green: [
      { q: 'The graph of y = 1/x has asymptotes:', options: ['x = 0 and y = 0','x = 1 and y = 1','y = x only','None'], answer: 0 }, // g1
      { q: 'y = f(x) + a is a translation of y = f(x) by:', options: ['a units in the positive y-direction','a units in the positive x-direction','a units in the negative y-direction','A stretch of factor a'], answer: 0 }, // g2
      { q: 'y = f(x + a) is a translation of y = f(x) by:', options: ['a units in the negative x-direction','a units in the positive x-direction','a units up','a units down'], answer: 0 }, // g2
      { q: 'y = af(x) is a stretch of y = f(x):', options: ['Parallel to the y-axis, scale factor a','Parallel to the x-axis, scale factor a','Parallel to the y-axis, scale factor 1/a','A translation'], answer: 0 }, // g2
      { q: 'y = f(ax) is a stretch of y = f(x):', options: ['Parallel to the x-axis, scale factor 1/a','Parallel to the x-axis, scale factor a','Parallel to the y-axis, scale factor a','A reflection'], answer: 0 }, // g2
      { q: 'y = −f(x) is a reflection of y = f(x) in:', options: ['The x-axis','The y-axis','The line y = x','The origin'], answer: 0 }, // g2
      { q: 'y = f(−x) is a reflection of y = f(x) in:', options: ['The y-axis','The x-axis','The line y = x','The origin'], answer: 0 }, // g2
      { q: 'The graph of y = x² is:', options: ['A parabola','A straight line','A hyperbola','A circle'], answer: 0 }, // g1
      { q: 'The graph of y = 2ˣ passes through:', options: ['(0, 1)','(1, 0)','(0, 0)','(0, 2)'], answer: 0 }, // g1
      { q: 'A vertical asymptote of a rational function occurs where:', options: ['The denominator is zero and the numerator is not','The numerator is zero','The gradient is zero','x = 0'], answer: 0 }, // g1
      { q: 'Translating y = x² by 3 units up gives:', options: ['y = x² + 3','y = (x + 3)²','y = 3x²','y = x² − 3'], answer: 0 }, // g2
      { q: 'The number of real roots of an equation equals the number of:', options: ['Times its graph crosses or touches the x-axis','Turning points','Asymptotes','y-intercepts'], answer: 0 }, // g1
      { q: 'For all x ≠ 0, the graph of y = 1/x² lies:', options: ['Entirely above the x-axis','Entirely below the x-axis','In two opposite quadrants','On the x-axis'], answer: 0 }, // g1
      { q: 'A cubic polynomial has at most how many real roots?', options: ['3','2','4','1'], answer: 0 }, // g1
      { q: 'The domain of y = √x is:', options: ['x ≥ 0','x > 0','All real numbers','x ≤ 0'], answer: 0 }, // g1
      { q: 'The turning point of y = (x − 2)² is at:', options: ['(2, 0)','(−2, 0)','(0, 2)','(0, 4)'], answer: 0 }, // g2
      { q: 'y = f(x) − 5 is a translation of y = f(x) by:', options: ['5 units down','5 units up','5 units left','5 units right'], answer: 0 }, // g2
      { q: 'The horizontal asymptote of y = 2ˣ is:', options: ['y = 0','y = 1','y = 2','x = 0'], answer: 0 }, // g1
      { q: 'The graph of y = x³ passes through the origin and is:', options: ['Increasing for all x','Decreasing for all x','Symmetric about the y-axis','Bounded'], answer: 0 }, // g1
      { q: 'The y-intercept of a graph is found by substituting:', options: ['x = 0','y = 0','x = 1','y = 1'], answer: 0 }, // g1
    ],
    amber: [
      { q: 'The graph of y = (x − 1)² + 4 has its minimum at:', options: ['(1, 4)','(−1, 4)','(1, −4)','(4, 1)'], answer: 0 }, // g2
      { q: 'y = 3f(x − 2) transforms y = f(x) by:', options: ['A translation 2 right, then a stretch factor 3 parallel to the y-axis','A stretch factor 3 parallel to the x-axis, then a translation 2 left','A translation 2 left and a stretch factor 1/3','A reflection and a translation'], answer: 0 }, // g2
      { q: 'The asymptotes of y = 1/(x − 3) are:', options: ['x = 3 and y = 0','x = 0 and y = 3','x = −3 and y = 0','y = 3 only'], answer: 0 }, // g1
      { q: 'Using vector notation, the translation taking y = f(x) to y = f(x − 2) + 5 is:', options: ['(2, 5)','(−2, 5)','(2, −5)','(5, 2)'], answer: 0 }, // g2
      { q: 'The graph of y = x²(x − 2) crosses or touches the x-axis at:', options: ['x = 0 (touching) and x = 2 (crossing)','x = 0 and x = −2, both crossing','x = 2 only','x = 0 only'], answer: 0 }, // g1
      { q: 'The curve y = (x + 1)(x − 2)(x − 4) crosses the y-axis at:', options: ['(0, 8)','(0, −8)','(0, 0)','(0, 4)'], answer: 0 }, // g1
      { q: 'The graph of y = 2/(x + 1) − 3 has horizontal asymptote:', options: ['y = −3','y = 3','y = 0','y = 2'], answer: 0 }, // g1
      { q: 'Reflecting y = eˣ in the y-axis gives:', options: ['y = e⁻ˣ','y = −eˣ','y = ln x','y = eˣ + 1'], answer: 0 }, // g2
      { q: 'The curve y = x³ − 3x has turning points at:', options: ['x = 1 and x = −1','x = 0 only','x = 3 and x = −3','x = √3 and x = −√3'], answer: 0 }, // g1
      { q: 'To sketch y = f(2x) from y = f(x), each x-coordinate is:', options: ['Halved','Doubled','Unchanged','Negated'], answer: 0 }, // g2
      { q: 'The graph of y = |x − 1| − 2 has its minimum at:', options: ['(1, −2)','(−1, −2)','(1, 2)','(2, −1)'], answer: 0 }, // g2
      { q: 'y = x⁴ has a graph that is:', options: ['Symmetric about the y-axis with a minimum at the origin','Symmetric about the origin','Increasing for all x','A parabola'], answer: 0 }, // g1
      { q: 'The curve y = 1/(x² − 4) has vertical asymptotes at:', options: ['x = 2 and x = −2','x = 4 only','x = 0','No asymptotes'], answer: 0 }, // g1
      { q: 'Applying y = f(x) → y = −f(x) → y = −f(x) + 3 gives, in order:', options: ['A reflection in the x-axis then a translation 3 up','A translation 3 up then a reflection in the y-axis','Two reflections','A stretch then a translation'], answer: 0 }, // g2
      { q: 'The number of intersections of y = x² and y = x + 2 is:', options: ['2','1','0','3'], answer: 0 }, // g1
      { q: 'The graph of y = ln x has:', options: ['A vertical asymptote at x = 0 and passes through (1, 0)','A horizontal asymptote at y = 0','No asymptotes','A minimum at (1, 0)'], answer: 0 }, // g1
      { q: 'y = f(x) is stretched by scale factor 1/2 parallel to the y-axis. The new equation is:', options: ['y = ½f(x)','y = f(x/2)','y = f(2x)','y = 2f(x)'], answer: 0 }, // g2
      { q: 'The curve y = x/(x − 1) has horizontal asymptote:', options: ['y = 1','y = 0','y = −1','No horizontal asymptote'], answer: 0 }, // g1
      { q: 'The graph of y = (x − 3)² − 4 crosses the x-axis at:', options: ['x = 1 and x = 5','x = 3 and x = −4','x = −1 and x = 5','x = 3 only'], answer: 0 }, // g1
      { q: 'Sketching y = f(x) and y = f⁻¹(x) on the same axes, they intersect on:', options: ['The line y = x, where solutions exist','The x-axis','The y-axis','Never'], answer: 0 }, // g2
    ],
    red: [
      { q: 'The curve y = (x² − 1)/(x − 1), simplified, is:', options: ['y = x + 1 with a hole at x = 1','y = x + 1 for all x','y = x − 1','A hyperbola'], answer: 0 }, // g1
      { q: 'y = f(x) is transformed to y = 2f(3x − 6). Written as a sequence, this is:', options: ['Translate 6 right, stretch factor 1/3 in x, stretch factor 2 in y','Stretch 1/3 in x, translate 6 right, stretch 2 in y','Translate 2 right then stretch 3 in x','Stretch 3 in x then translate 6 left'], answer: 0 }, // g2
      { q: 'The curve y = x + 1/x has a local minimum at:', options: ['(1, 2)','(0, 0)','(−1, −2) only','(2, 2.5)'], answer: 0 }, // g1
      { q: 'The oblique (slant) asymptote of y = (x² + 1)/x is:', options: ['y = x','y = 1','x = 0 only','y = x + 1'], answer: 0 }, // g1
      { q: 'For y = k/(x − 2) + 1 to pass through the origin, k must be:', options: ['2','−2','1','0'], answer: 0 }, // g1
      { q: 'The number of real solutions of x³ − 3x = k for −2 < k < 2 is:', options: ['3','1','2','0'], answer: 0 }, // g1
      { q: 'y = f(x) has a maximum at (2, 5). After y = f(x + 1) − 3, the maximum is at:', options: ['(1, 2)','(3, 2)','(1, 8)','(3, 8)'], answer: 0 }, // g2
      { q: 'The curve y = 1/(x² + 1) has:', options: ['A maximum at (0, 1) and horizontal asymptote y = 0','Vertical asymptotes at x = ±1','A minimum at the origin','No turning points'], answer: 0 }, // g1
      { q: 'The graphs of y = eˣ and y = x + 1 meet:', options: ['Exactly once, at x = 0','Exactly twice','Never','Infinitely often'], answer: 0 }, // g1
      { q: 'A curve is symmetric about the origin if:', options: ['f(−x) = −f(x) for all x','f(−x) = f(x) for all x','f(x) > 0 for all x','It has an asymptote at x = 0'], answer: 0 }, // g1
    ],
  },

  '1.5': {
    name: 'Coordinate Geometry',
    green: [
      { q: 'The gradient of the line joining (1, 2) and (3, 8) is:', options: ['3','2','4','1/3'], answer: 0 }, // c1
      { q: 'The line with gradient 2 through (0, 5) has equation:', options: ['y = 2x + 5','y = 5x + 2','y = 2x − 5','y = x + 5'], answer: 0 }, // c1
      { q: 'The midpoint of (2, 4) and (6, 10) is:', options: ['(4, 7)','(8, 14)','(2, 3)','(4, 6)'], answer: 0 }, // c1
      { q: 'The distance between (0, 0) and (3, 4) is:', options: ['5','7','12','25'], answer: 0 }, // c1
      { q: 'The circle with centre the origin and radius 5 has equation:', options: ['x² + y² = 25','x² + y² = 5','(x − 5)² + y² = 0','x + y = 5'], answer: 0 }, // c2
      { q: 'The circle (x − 2)² + (y + 3)² = 16 has centre:', options: ['(2, −3)','(−2, 3)','(2, 3)','(4, −3)'], answer: 0 }, // c2
      { q: 'The circle (x − 2)² + (y + 3)² = 16 has radius:', options: ['4','16','8','2'], answer: 0 }, // c2
      { q: 'A line perpendicular to one of gradient 3 has gradient:', options: ['−1/3','1/3','3','−3'], answer: 0 }, // c1
      { q: 'Two distinct parallel lines have:', options: ['Equal gradients','Product of gradients −1','A single intersection','Equal intercepts'], answer: 0 }, // c1
      { q: 'The form y − y₁ = m(x − x₁) is known as:', options: ['The point-gradient form','The intercept form','The general form','The parametric form'], answer: 0 }, // c1
      { q: 'The gradient of the line through (1, 1) and (3, 5) is:', options: ['2','3','1/2','4'], answer: 0 }, // c1
      { q: 'The x-intercept of y = 2x − 6 is:', options: ['3','−6','6','−3'], answer: 0 }, // c1
      { q: 'The angle in a semicircle is:', options: ['90°','60°','180°','45°'], answer: 0 }, // c2
      { q: 'The perpendicular from the centre of a circle to a chord:', options: ['Bisects the chord','Is equal to the radius','Is parallel to the chord','Meets the chord at 45°'], answer: 0 }, // c2
      { q: 'A tangent to a circle is perpendicular to:', options: ['The radius at the point of contact','Any chord','The diameter through the centre only','The x-axis'], answer: 0 }, // c2
      { q: 'The circle x² + y² − 4x = 0 has centre:', options: ['(2, 0)','(−2, 0)','(0, 2)','(4, 0)'], answer: 0 }, // c2
      { q: 'The distance between (1, 2) and (4, 6) is:', options: ['5','7','3','25'], answer: 0 }, // c1
      { q: 'The gradient of the line y = 5 is:', options: ['0','5','Undefined','1'], answer: 0 }, // c1
      { q: 'The gradient of the line x = 3 is:', options: ['Undefined','0','3','1/3'], answer: 0 }, // c1
      { q: 'The parametric equations x = t, y = t² describe:', options: ['y = x²','y = x','x = y²','A circle'], answer: 0 }, // c3
    ],
    amber: [
      { q: 'The circle x² + y² − 6x + 4y − 12 = 0 has centre and radius:', options: ['(3, −2), r = 5','(−3, 2), r = 5','(3, −2), r = 25','(6, −4), r = 5'], answer: 0 }, // c2
      { q: 'The perpendicular bisector of the segment joining (1, 2) and (5, 6) is:', options: ['y = −x + 7','y = x + 1','y = −x + 3','y = x + 7'], answer: 0 }, // c1
      { q: 'The tangent to x² + y² = 25 at the point (3, 4) is:', options: ['3x + 4y = 25','4x + 3y = 25','3x − 4y = 25','x + y = 7'], answer: 0 }, // c2
      { q: 'Eliminating t from x = 2t, y = t² gives:', options: ['y = x²/4','y = 2x²','y = x²','y = x/2'], answer: 0 }, // c3
      { q: 'Eliminating t from x = cos t, y = sin t gives:', options: ['x² + y² = 1','y = x','x² − y² = 1','x + y = 1'], answer: 0 }, // c3
      { q: 'The gradient of 2x + 3y = 6 is:', options: ['−2/3','2/3','−3/2','3/2'], answer: 0 }, // c1
      { q: 'The line through the origin perpendicular to 2x + 3y = 6 is:', options: ['y = (3/2)x','y = (−2/3)x','y = (2/3)x','y = (−3/2)x'], answer: 0 }, // c1
      { q: 'Eliminating t from x = t + 1, y = t² − 1 gives:', options: ['y = (x − 1)² − 1','y = (x + 1)² − 1','y = x² − 1','y = (x − 1)²'], answer: 0 }, // c3
      { q: 'The circle x² + y² + 2x − 6y + 1 = 0 has centre and radius:', options: ['(−1, 3), r = 3','(1, −3), r = 3','(−1, 3), r = 9','(−2, 6), r = 3'], answer: 0 }, // c2
      { q: 'The point (5, 5) relative to the circle x² + y² = 25 lies:', options: ['Outside it','Inside it','On it','At its centre'], answer: 0 }, // c2
      { q: 'The circle with diameter from (1, 2) to (7, 10) has centre and radius:', options: ['(4, 6), r = 5','(4, 6), r = 10','(3, 4), r = 5','(8, 12), r = 5'], answer: 0 }, // c2
      { q: 'Eliminating t from x = 3cos t, y = 2sin t gives:', options: ['x²/9 + y²/4 = 1','x²/4 + y²/9 = 1','x² + y² = 1','x²/3 + y²/2 = 1'], answer: 0 }, // c3
      { q: 'The line through (2, 3) parallel to y = 4x − 1 is:', options: ['y = 4x − 5','y = 4x + 5','y = −4x + 11','y = (1/4)x + 2.5'], answer: 0 }, // c1
      { q: 'The lines y = 2x + 1 and y = −x + 7 intersect at:', options: ['(2, 5)','(5, 2)','(1, 3)','(3, 4)'], answer: 0 }, // c1
      { q: 'Eliminating t from x = t², y = 2t gives:', options: ['y² = 4x','y = 4x²','y² = x','y = 2x²'], answer: 0 }, // c3
      { q: 'The length of the chord cut from y = x by x² + y² = 8 is:', options: ['4√2','2√2','8','4'], answer: 0 }, // c2
      { q: 'The line y = x + 1 and the circle x² + y² = 25 intersect in how many points?', options: ['2','1','0','3'], answer: 0 }, // c2
      { q: 'The circle x² + y² = r² has a tangent at (a, b) with equation:', options: ['ax + by = r²','ax − by = r²','bx + ay = r²','ax + by = r'], answer: 0 }, // c2
      { q: 'Three points are collinear if:', options: ['The gradients between successive pairs are equal','They form a right angle','They are equidistant','Their midpoints coincide'], answer: 0 }, // c1
      { q: 'The shortest distance from the centre of a circle to a tangent equals:', options: ['The radius','The diameter','Zero','Half the radius'], answer: 0 }, // c2
    ],
    red: [
      { q: 'For the line y = mx to be tangent to the circle (x − 5)² + y² = 9, m must satisfy:', options: ['16m² = 9','25m² = 9','m² = 9','9m² = 25'], answer: 0 }, // c2
      { q: 'Eliminating θ from x = 2 + 3cos θ, y = −1 + 3sin θ gives:', options: ['(x − 2)² + (y + 1)² = 9','(x + 2)² + (y − 1)² = 9','(x − 2)² + (y + 1)² = 3','x² + y² = 9'], answer: 0 }, // c3
      { q: 'Two circles with centres 10 apart and radii 4 and 6:', options: ['Touch externally at exactly one point','Intersect at two points','Do not meet','Are concentric'], answer: 0 }, // c2
      { q: 'The perpendicular distance from (1, 1) to the line 3x + 4y − 10 = 0 is:', options: ['3/5','1','7/5','2'], answer: 0 }, // c1
      { q: 'The curve given by x = t², y = t³ passes through the origin with:', options: ['A cusp, since dy/dx = 3t/2 → 0 but the curve reverses in x','A smooth minimum','A vertical asymptote','A point of inflection only'], answer: 0 }, // c3
      { q: 'The circle through (0, 0), (4, 0) and (0, 6) has centre:', options: ['(2, 3)','(4, 6)','(0, 0)','(3, 2)'], answer: 0 }, // c2
      { q: 'For x = t + 1/t, y = t − 1/t, eliminating t gives:', options: ['x² − y² = 4','x² + y² = 4','x² − y² = 2','xy = 1'], answer: 0 }, // c3
      { q: 'The line y = x + c meets x² + y² = 8 in exactly one point when c equals:', options: ['±4','±2','±2√2','±8'], answer: 0 }, // c2
      { q: 'The locus of points equidistant from (0, 0) and (4, 0) is:', options: ['The line x = 2','The circle x² + y² = 4','The line y = 2','The parabola y² = 4x'], answer: 0 }, // c1
      { q: 'For the parametric curve x = 2t, y = t², the gradient dy/dx at parameter t is:', options: ['t','2t','t/2','1/(2t)'], answer: 0 }, // c3
    ],
  },

  '1.6': {
    name: 'Sequences & Series',
    green: [
      { q: 'The value of ⁵C₂ is:', options: ['10','20','7','25'], answer: 0 }, // s-bin
      { q: 'The nth term of an arithmetic sequence with first term a and common difference d is:', options: ['a + (n − 1)d','a + nd','arⁿ⁻¹','a − (n − 1)d'], answer: 0 }, // s1
      { q: 'The nth term of a geometric sequence with first term a and common ratio r is:', options: ['arⁿ⁻¹','arⁿ','a + (n − 1)r','a/rⁿ'], answer: 0 }, // s1
      { q: 'The sum of the first n terms of an arithmetic series is:', options: ['(n/2)(2a + (n − 1)d)','n(a + d)','a(1 − rⁿ)/(1 − r)','na'], answer: 0 }, // s1
      { q: 'The sum of the first n terms of a geometric series (r ≠ 1) is:', options: ['a(1 − rⁿ)/(1 − r)','(n/2)(2a + (n − 1)d)','a/(1 − r)','arⁿ'], answer: 0 }, // s1
      { q: 'The sum to infinity of a geometric series exists when:', options: ['|r| < 1','|r| > 1','r = 1','r > 0'], answer: 0 }, // s1
      { q: 'The sum to infinity of a convergent geometric series is:', options: ['a/(1 − r)','a(1 − r)','a/r','ar'], answer: 0 }, // s1
      { q: 'In the sequence 3, 7, 11, 15, … the common difference is:', options: ['4','3','7','2'], answer: 0 }, // s1
      { q: 'In the sequence 2, 6, 18, 54, … the common ratio is:', options: ['3','4','2','6'], answer: 0 }, // s1
      { q: 'Expanding (1 + x)² gives:', options: ['1 + 2x + x²','1 + x + x²','1 + x²','2 + 2x'], answer: 0 }, // s-bin
      { q: 'ⁿC₀ equals:', options: ['1','0','n','n!'], answer: 0 }, // s-bin
      { q: 'ⁿCₙ equals:', options: ['1','n','0','n!'], answer: 0 }, // s-bin
      { q: "The row of Pascal's triangle giving the coefficients of (a + b)⁴ is:", options: ['1 4 6 4 1','1 3 3 1','1 5 10 10 5 1','1 4 4 1'], answer: 0 }, // s-bin
      { q: 'The 10th term of the arithmetic sequence 5, 8, 11, … is:', options: ['32','35','30','29'], answer: 0 }, // s1
      { q: 'The sum of the first 10 positive integers is:', options: ['55','45','100','50'], answer: 0 }, // s1
      { q: 'The symbol Σ denotes:', options: ['A sum','A product','A limit','A derivative'], answer: 0 }, // s1
      { q: 'The value of Σ from k = 1 to 5 of k is:', options: ['15','10','25','5'], answer: 0 }, // s1
      { q: 'The 4th term of the geometric sequence 3, 6, 12, … is:', options: ['24','18','36','48'], answer: 0 }, // s1
      { q: 'For the recurrence u₍ₙ₊₁₎ = uₙ + 3 with u₁ = 2, the value of u₂ is:', options: ['5','6','3','2'], answer: 0 }, // s1
      { q: 'A sequence in which each term is a fixed multiple of the previous one is:', options: ['Geometric','Arithmetic','Periodic','Constant'], answer: 0 }, // s1
    ],
    amber: [
      { q: 'The sum of the first 20 terms of an arithmetic series with a = 3, d = 5 is:', options: ['1010','1000','980','1050'], answer: 0 }, // s1
      { q: 'The coefficient of x³ in (1 + 2x)⁵ is:', options: ['80','40','10','32'], answer: 0 }, // s-bin
      { q: 'The sum to infinity of 8 + 4 + 2 + … is:', options: ['16','12','20','32'], answer: 0 }, // s1
      { q: 'The first three terms of (1 + x)^(1/2) are:', options: ['1 + x/2 − x²/8','1 + x/2 + x²/8','1 + x − x²','1 + 2x + x²'], answer: 0 }, // s-bin2
      { q: 'The expansion of (1 − x)⁻¹ for |x| < 1 is:', options: ['1 + x + x² + x³ + …','1 − x + x² − x³ + …','1 + x² + x⁴ + …','1 − x − x² − …'], answer: 0 }, // s-bin2
      { q: 'The number of terms in the arithmetic sequence 5, 9, 13, …, 101 is:', options: ['25','24','26','20'], answer: 0 }, // s1
      { q: 'The coefficient of x² in (2 + x)⁶ is:', options: ['240','60','15','480'], answer: 0 }, // s-bin
      { q: 'The sum of the arithmetic series 2 + 5 + 8 + … + 59 is:', options: ['610','590','620','600'], answer: 0 }, // s1
      { q: 'For a geometric series with a = 2 and r = 3, the sum of the first 5 terms is:', options: ['242','162','486','240'], answer: 0 }, // s1
      { q: 'The binomial expansion of (1 + x)ⁿ for non-integer n is valid for:', options: ['|x| < 1','All x','x > 0','|x| < n'], answer: 0 }, // s-bin2
      { q: 'Σ from k = 1 to n of k equals:', options: ['n(n + 1)/2','n²','n(n + 1)','(n + 1)/2'], answer: 0 }, // s1
      { q: 'The first three terms of (1 + 3x)⁻² are:', options: ['1 − 6x + 27x²','1 + 6x + 27x²','1 − 3x + 9x²','1 − 6x + 9x²'], answer: 0 }, // s-bin2
      { q: 'An arithmetic sequence has 5th term 17 and 10th term 32. Its first term and common difference are:', options: ['a = 5, d = 3','a = 3, d = 5','a = 2, d = 3','a = 17, d = 3'], answer: 0 }, // s1
      { q: 'The sum to infinity of a geometric series with a = 12 and r = 1/3 is:', options: ['18','16','36','24'], answer: 0 }, // s1
      { q: 'The coefficient of x² in (2 − x)⁴ is:', options: ['24','−24','16','6'], answer: 0 }, // s-bin
      { q: 'The value of Σ from k = 0 to 4 of 2ᵏ is:', options: ['31','32','15','16'], answer: 0 }, // s1
      { q: 'Which sequence is NOT geometric?', options: ['1, 3, 5, 7, …','1, 3, 9, 27, …','2, −4, 8, −16, …','5, 5, 5, 5, …'], answer: 0 }, // s1
      { q: 'If a recurrence uₙ converges to a limit L, then L satisfies:', options: ['The equation obtained by replacing both uₙ and u₍ₙ₊₁₎ by L','uₙ = 0','L = u₁','L = ∞'], answer: 0 }, // s1
      { q: 'The 6th term of a geometric sequence with a = 1 and r = −2 is:', options: ['−32','32','−64','64'], answer: 0 }, // s1
      { q: 'In sigma notation the sum 3 + 6 + 9 + … + 30 is:', options: ['Σ from k = 1 to 10 of 3k','Σ from k = 1 to 30 of 3k','Σ from k = 3 to 30 of k','Σ from k = 1 to 10 of k'], answer: 0 }, // s1
    ],
    red: [
      { q: 'The coefficient of x² in the expansion of (1 + x)^(−1/2) is:', options: ['3/8','−1/8','1/8','−3/8'], answer: 0 }, // s-bin2
      { q: 'The expansion of (1 + 2x)^(1/2) is valid for:', options: ['|x| < 1/2','|x| < 1','|x| < 2','All x'], answer: 0 }, // s-bin2
      { q: 'If the sum of the first n terms of a series is n², the nth term is:', options: ['2n − 1','n','2n','n² − 1'], answer: 0 }, // s1
      { q: 'Using the binomial expansion of (1 + x)^(1/2) with x = 0.02, √1.02 is approximately:', options: ['1.00995','1.01','1.0099','1.02'], answer: 0 }, // s-bin2
      { q: 'The recurrence u₍ₙ₊₁₎ = √(2 + uₙ) converges to the limit:', options: ['2','1','√2','4'], answer: 0 }, // s1
      { q: 'Σ from k = 1 to n of (2k − 1) equals:', options: ['n²','n(n + 1)','2n','n(n − 1)'], answer: 0 }, // s1
      { q: 'A geometric series has sum to infinity equal to 3a, where a is the first term. Its common ratio is:', options: ['2/3','1/3','3','1/2'], answer: 0 }, // s1
      { q: 'The expansion of (1 + x)ⁿ for positive integer n has how many terms?', options: ['n + 1','n','n − 1','Infinitely many'], answer: 0 }, // s-bin
      { q: 'The coefficient of x³ in (1 + x)(1 + 2x)⁴ is:', options: ['56','32','48','80'], answer: 0 }, // s-bin
      { q: 'An arithmetic series has first term 20 and common difference −3. The sum of its terms is greatest when n equals:', options: ['7','6','8','20'], answer: 0 }, // s1
    ],
  },

  '1.7': {
    name: 'Trigonometry',
    green: [
      { q: 'The exact value of sin 30° is:', options: ['1/2','√3/2','√2/2','1'], answer: 0 }, // t1
      { q: 'The exact value of cos 60° is:', options: ['1/2','√3/2','√2/2','0'], answer: 0 }, // t1
      { q: 'The exact value of tan 45° is:', options: ['1','0','√3','1/√3'], answer: 0 }, // t1
      { q: 'The identity sin²θ + cos²θ equals:', options: ['1','0','2','tan²θ'], answer: 0 }, // t2
      { q: 'The area of a triangle with sides a, b and included angle C is:', options: ['½ab sin C','½ab cos C','ab sin C','½ab tan C'], answer: 0 }, // t-area
      { q: 'The sine rule states:', options: ['a/sin A = b/sin B = c/sin C','a² = b² + c² − 2bc cos A','a sin A = b sin B','a + b = c'], answer: 0 }, // t-rule
      { q: 'The cosine rule states:', options: ['a² = b² + c² − 2bc cos A','a/sin A = b/sin B','a² = b² + c²','cos A = a/b'], answer: 0 }, // t-rule
      { q: 'π radians is equal to:', options: ['180°','90°','360°','270°'], answer: 0 }, // t-rad
      { q: '90° expressed in radians is:', options: ['π/2','π/4','π','2π'], answer: 0 }, // t-rad
      { q: 'sec θ is defined as:', options: ['1/cos θ','1/sin θ','1/tan θ','cos θ'], answer: 0 }, // t-sec
      { q: 'cosec θ is defined as:', options: ['1/sin θ','1/cos θ','1/tan θ','sin θ'], answer: 0 }, // t-sec
      { q: 'cot θ is defined as:', options: ['1/tan θ','1/sin θ','1/cos θ','tan θ'], answer: 0 }, // t-sec
      { q: 'tan θ is equal to:', options: ['sin θ / cos θ','cos θ / sin θ','sin θ · cos θ','1/sin θ'], answer: 0 }, // t2
      { q: 'The period of y = sin x is:', options: ['2π','π','π/2','4π'], answer: 0 }, // t1
      { q: 'The period of y = tan x is:', options: ['π','2π','π/2','3π'], answer: 0 }, // t1
      { q: 'The amplitude of y = 3 sin x is:', options: ['3','1','6','1/3'], answer: 0 }, // t1
      { q: 'sin(−θ) equals:', options: ['−sin θ','sin θ','cos θ','−cos θ'], answer: 0 }, // t1
      { q: 'cos(−θ) equals:', options: ['cos θ','−cos θ','sin θ','−sin θ'], answer: 0 }, // t1
      { q: 'The length of an arc subtending angle θ radians at the centre of a circle of radius r is:', options: ['rθ','½r²θ','2πr','rθ²'], answer: 0 }, // t-rad
      { q: 'The area of a sector subtending angle θ radians in a circle of radius r is:', options: ['½r²θ','rθ','πr²','½rθ'], answer: 0 }, // t-rad
    ],
    amber: [
      { q: 'Solve sin x = √3/2 for 0 ≤ x < 2π.', options: ['x = π/3 or 2π/3','x = π/3 only','x = π/6 or 5π/6','x = 2π/3 or 4π/3'], answer: 0 }, // t3
      { q: 'The double angle identity for sin 2θ is:', options: ['2 sin θ cos θ','sin²θ − cos²θ','2 cos²θ − 1','1 − 2 sin²θ'], answer: 0 }, // t-comp
      { q: 'One form of the double angle identity for cos 2θ is:', options: ['2 cos²θ − 1','2 sin θ cos θ','cos²θ + sin²θ','1 + 2 sin²θ'], answer: 0 }, // t-comp
      { q: 'The identity 1 + tan²θ equals:', options: ['sec²θ','cosec²θ','cot²θ','1'], answer: 0 }, // t-sec
      { q: 'The identity 1 + cot²θ equals:', options: ['cosec²θ','sec²θ','tan²θ','1'], answer: 0 }, // t-sec
      { q: 'The compound angle formula for sin(A + B) is:', options: ['sin A cos B + cos A sin B','sin A cos B − cos A sin B','cos A cos B − sin A sin B','sin A sin B + cos A cos B'], answer: 0 }, // t-comp
      { q: 'Solve 2 cos x = 1 for 0° ≤ x < 360°.', options: ['x = 60° or 300°','x = 60° only','x = 30° or 330°','x = 120° or 240°'], answer: 0 }, // t3
      { q: 'Expressing 3 sin x + 4 cos x as R sin(x + α), the value of R is:', options: ['5','7','25','12'], answer: 0 }, // t-comp
      { q: 'Solve tan x = 1 for 0 ≤ x < 2π.', options: ['x = π/4 or 5π/4','x = π/4 only','x = π/4 or 3π/4','x = 3π/4 or 7π/4'], answer: 0 }, // t3
      { q: 'For small x measured in radians, sin x is approximately:', options: ['x','1','x²/2','1 − x²/2'], answer: 0 }, // t-small
      { q: 'For small x measured in radians, cos x is approximately:', options: ['1 − x²/2','x','1','x²/2'], answer: 0 }, // t-small
      { q: 'Solve sin 2x = 0.5 for 0° ≤ x < 360°.', options: ['x = 15°, 75°, 195°, 255°','x = 30°, 150°','x = 15°, 75°','x = 30°, 150°, 210°, 330°'], answer: 0 }, // t3
      { q: 'The area of a sector of radius 6 subtending π/3 radians is:', options: ['6π','12π','3π','2π'], answer: 0 }, // t-rad
      { q: 'The arc length in a circle of radius 5 subtending 0.8 radians is:', options: ['4','8','2.5','6.25'], answer: 0 }, // t-rad
      { q: 'An alternative form of cos 2θ is:', options: ['1 − 2 sin²θ','1 + 2 sin²θ','2 sin θ cos θ','sin²θ − 1'], answer: 0 }, // t-comp
      { q: 'Solve cos x = −1/2 for 0 ≤ x < 2π.', options: ['x = 2π/3 or 4π/3','x = π/3 or 5π/3','x = π/6 or 11π/6','x = 2π/3 only'], answer: 0 }, // t3
      { q: 'The compound angle formula for tan(A + B) is:', options: ['(tan A + tan B)/(1 − tan A tan B)','(tan A − tan B)/(1 + tan A tan B)','tan A + tan B','tan A tan B'], answer: 0 }, // t-comp
      { q: 'The exact value of sin 60° is:', options: ['√3/2','1/2','√2/2','1'], answer: 0 }, // t1
      { q: 'Solve sec x = 2 for 0 ≤ x < 2π.', options: ['x = π/3 or 5π/3','x = π/3 only','x = π/6 or 11π/6','x = 2π/3 or 4π/3'], answer: 0 }, // t-sec
      { q: 'The maximum value of 5 sin x + 12 cos x is:', options: ['13','17','12','25'], answer: 0 }, // t-comp
    ],
    red: [
      { q: 'Solve 2 sin²x + sin x − 1 = 0 for 0 ≤ x < 2π.', options: ['x = π/6, 5π/6 or 3π/2','x = π/6 or 5π/6','x = π/2 or 3π/2','x = π/3, 2π/3 or 3π/2'], answer: 0 }, // t3
      { q: 'The number of solutions of sin 3x = 0.5 for 0 ≤ x < 2π is:', options: ['6','3','2','4'], answer: 0 }, // t3
      { q: 'The number of solutions of tan 2x = 1 for 0 ≤ x < 2π is:', options: ['4','2','8','1'], answer: 0 }, // t3
      { q: 'Solve sin x = cos x for 0 ≤ x < 2π.', options: ['x = π/4 or 5π/4','x = π/4 only','x = π/4 or 3π/4','x = 3π/4 or 7π/4'], answer: 0 }, // t3
      { q: 'Writing 5 sin x − 12 cos x as R sin(x − α), the values of R and tan α are:', options: ['R = 13, tan α = 12/5','R = 13, tan α = 5/12','R = 17, tan α = 12/5','R = 7, tan α = 5/12'], answer: 0 }, // t-comp
      { q: 'Using sin 3θ = 3 sin θ − 4 sin³θ, the value of sin 3θ when sin θ = 1/2 is:', options: ['1','1/2','0','√3/2'], answer: 0 }, // t-comp
      { q: 'As x → 0 with x in radians, the limit of (sin x)/x is:', options: ['1','0','∞','1/2'], answer: 0 }, // t-small
      { q: 'The minimum value of 3 + 2 cos x is:', options: ['1','3','5','−2'], answer: 0 }, // t-comp
      { q: 'Solve 3 cos 2x + sin x = 2 for 0 ≤ x < 2π. The equation first reduces to:', options: ['6 sin²x − sin x − 1 = 0','6 cos²x − cos x − 1 = 0','3 sin²x + sin x = 0','sin x = 2/3'], answer: 0 }, // t3
      { q: 'The identity (1 − cos 2θ)/(sin 2θ) simplifies to:', options: ['tan θ','cot θ','sin θ','2 tan θ'], answer: 0 }, // t-comp
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_QUESTIONS; }
