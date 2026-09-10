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

  '1.8': {
    name: 'Exponentials & Logarithms',
    green: [
      { q: 'The value of log_a a is:', options: ['1','0','a','Undefined'], answer: 0 }, // E5
      { q: 'The value of log_a 1 is:', options: ['0','1','a','Undefined'], answer: 0 }, // E5
      { q: 'log(xy) is equal to:', options: ['log x + log y','log x × log y','log x − log y','x log y'], answer: 0 }, // E4
      { q: 'log(x/y) is equal to:', options: ['log x − log y','log x / log y','log x + log y','log(x − y)'], answer: 0 }, // E4
      { q: 'log(xᵏ) is equal to:', options: ['k log x','(log x)ᵏ','k + log x','log k × log x'], answer: 0 }, // E4
      { q: 'The value of ln e is:', options: ['1','0','e','Undefined'], answer: 0 }, // E10
      { q: 'The value of e⁰ is:', options: ['1','0','e','Undefined'], answer: 0 }, // E8
      { q: 'For a > 0, the graph of y = aˣ always passes through:', options: ['(0, 1)','(1, 0)','(0, 0)','(1, 1)'], answer: 0 }, // E1
      { q: 'The function ln x is the inverse of:', options: ['eˣ','x²','1/x','10ˣ'], answer: 0 }, // E10
      { q: 'The value of log₂ 8 is:', options: ['3','4','2','8'], answer: 0 }, // E2
      { q: 'Solve 2ˣ = 16.', options: ['x = 4','x = 8','x = 2','x = 16'], answer: 0 }, // E6
      { q: 'The value of log₁₀ 100 is:', options: ['2','10','100','1'], answer: 0 }, // E2
      { q: 'The graph of y = ln x has a vertical asymptote at:', options: ['x = 0','x = 1','y = 0','x = e'], answer: 0 }, // E3
      { q: 'To 3 decimal places, e is approximately:', options: ['2.718','3.142','1.414','2.303'], answer: 0 }, // E8
      { q: 'The gradient of the curve y = e^(kx) is:', options: ['ke^(kx)','e^(kx)','kx·e^(kx)','e^(kx)/k'], answer: 0 }, // E9
      { q: 'Solve eˣ = 1.', options: ['x = 0','x = 1','x = e','No solution'], answer: 0 }, // E6
      { q: 'The value of log₃ 9 is:', options: ['2','3','9','1/2'], answer: 0 }, // E2
      { q: 'For all real x, the value of eˣ is:', options: ['Always positive','Always negative','Sometimes zero','Always greater than 1'], answer: 0 }, // E8
      { q: 'The value of ln 1 is:', options: ['0','1','e','Undefined'], answer: 0 }, // E5
      { q: 'Written in logarithmic form, 2⁵ = 32 becomes:', options: ['log₂ 32 = 5','log₅ 32 = 2','log₃₂ 2 = 5','log₂ 5 = 32'], answer: 0 }, // E2
    ],
    amber: [
      { q: 'Solve 2^(x+1) = 32.', options: ['x = 4','x = 5','x = 16','x = 3'], answer: 0 }, // E6
      { q: 'Solve 3ˣ = 20, giving your answer to 3 decimal places.', options: ['x = 2.727','x = 6.667','x = 1.301','x = 3.044'], answer: 0 }, // E6
      { q: 'Solve log₂ x + log₂(x − 2) = 3.', options: ['x = 4','x = 2','x = 8','x = 4 or x = −2'], answer: 0 }, // E4
      { q: 'To reduce y = axⁿ to linear form, take logarithms to obtain:', options: ['log y = log a + n log x','log y = a + nx','y = log a + n log x','log y = n log a + log x'], answer: 0 }, // E7
      { q: 'To reduce y = abˣ to linear form, take logarithms to obtain:', options: ['log y = log a + x log b','log y = log a + b log x','y = log a + x log b','log y = a log b + x'], answer: 0 }, // E7
      { q: 'Solve ln x = 3.', options: ['x = e³','x = 3e','x = ln 3','x = 3'], answer: 0 }, // E6
      { q: 'The change of base rule states log_a b equals:', options: ['log b / log a','log a / log b','log a × log b','log(b − a)'], answer: 0 }, // E4
      { q: 'Solve e^(2x) = 7.', options: ['x = ½ln 7','x = ln 7','x = 2 ln 7','x = ln 3.5'], answer: 0 }, // E6
      { q: 'Solve log_x 16 = 2.', options: ['x = 4','x = 8','x = 16','x = 32'], answer: 0 }, // E2
      { q: 'For the model y = 5e^(−0.2t), the value of y at t = 0 is:', options: ['5','0','0.2','1'], answer: 0 }, // E11
      { q: 'As t → ∞, the model y = 5e^(−0.2t) tends to:', options: ['0','5','∞','0.2'], answer: 0 }, // E11
      { q: 'Solve 2 ln x = ln 9 for x > 0.', options: ['x = 3','x = 9','x = 4.5','x = 81'], answer: 0 }, // E4
      { q: 'Solve 5^(2x) = 5^(x+3).', options: ['x = 3','x = 1','x = 5','x = 1.5'], answer: 0 }, // E6
      { q: 'The value of (log 8)/(log 2) is:', options: ['3','4','6','0.25'], answer: 0 }, // E4
      { q: 'A quantity grows so that dy/dx is proportional to y. Its graph is:', options: ['Exponential','Quadratic','Linear','Logarithmic'], answer: 0 }, // E11
      { q: 'A quantity satisfies dy/dx proportional to x. Its graph is:', options: ['Quadratic','Exponential','Linear','Logarithmic'], answer: 0 }, // E11
      { q: 'Solve eˣ − 5e^(−x) = 4.', options: ['x = ln 5','x = ln 4','x = ln 5 or x = 0','x = −ln 5'], answer: 0 }, // E6
      { q: 'The horizontal asymptote of y = 2 + e^(−x) is:', options: ['y = 2','y = 0','y = 1','x = 2'], answer: 0 }, // E3
      { q: 'Under continuous compound interest, an amount P after time t at rate r is:', options: ['Pe^(rt)','P(1 + r)ᵗ','P + rt','Pe^(r/t)'], answer: 0 }, // E11
      { q: 'For radioactive decay N = N₀e^(−kt), the half-life satisfies:', options: ['e^(−kt) = 1/2','e^(−kt) = 2','kt = 2','N = 0'], answer: 0 }, // E11
    ],
    red: [
      { q: 'Experimental data plotted as log y against log x gives a straight line of gradient n and intercept log a. The relationship is:', options: ['y = axⁿ','y = abˣ','y = a + nx','y = aeⁿˣ'], answer: 0 }, // E7
      { q: 'Solve 3^(2x) − 4·3ˣ + 3 = 0.', options: ['x = 0 or x = 1','x = 1 or x = 3','x = 0 only','x = 1 only'], answer: 0 }, // E6
      { q: 'Solve ln(x + 1) − ln(x − 1) = ln 3.', options: ['x = 2','x = 3','x = 1','x = 4'], answer: 0 }, // E4
      { q: 'Experimental data plotted as log y against x gives a straight line. The relationship is of the form:', options: ['y = abˣ','y = axⁿ','y = a + bx','y = a ln x'], answer: 0 }, // E7
      { q: 'The inverse of the function y = 3e^(2x) is:', options: ['y = ½ln(x/3)','y = ln(x/3)','y = 3 ln(x/2)','y = ½ln(3x)'], answer: 0 }, // E10
      { q: 'A population model P = P₀e^(kt) is criticised because:', options: ['It grows without limit, ignoring resource constraints','It cannot model growth','It requires P₀ = 0','It is always decreasing'], answer: 0 }, // E11
      { q: 'Solve 2ˣ = 3^(x−1), giving x in terms of logarithms.', options: ['x = ln 3/(ln 3 − ln 2)','x = ln 2/(ln 3 − ln 2)','x = ln 3/ln 2','x = ln 6'], answer: 0 }, // E6
      { q: 'If N = N₀e^(−kt) has half-life 5, then k equals:', options: ['(ln 2)/5','5 ln 2','(ln 5)/2','1/5'], answer: 0 }, // E11
      { q: 'Solve log₄ x = 3/2.', options: ['x = 8','x = 6','x = 64','x = 2'], answer: 0 }, // E2
      { q: 'The curve y = ln(x − 2) crosses the x-axis at:', options: ['(3, 0)','(2, 0)','(1, 0)','(0, 0)'], answer: 0 }, // E3
    ],
  },

  '1.9': {
    name: 'Differentiation',
    green: [
      { q: 'The derivative of xⁿ is:', options: ['nxⁿ⁻¹','xⁿ⁻¹','nxⁿ','xⁿ/n'], answer: 0 }, // c1
      { q: 'The derivative of 3x² is:', options: ['6x','3x','6x²','x³'], answer: 0 }, // c1
      { q: 'The derivative of a constant is:', options: ['0','1','The constant','Undefined'], answer: 0 }, // c1
      { q: 'The derivative of eˣ is:', options: ['eˣ','xeˣ⁻¹','eˣ/x','xeˣ'], answer: 0 }, // c-exp
      { q: 'The derivative of ln x is:', options: ['1/x','ln x','x','1/ln x'], answer: 0 }, // c-exp
      { q: 'The derivative of sin x (x in radians) is:', options: ['cos x','−cos x','−sin x','sec²x'], answer: 0 }, // c-trig
      { q: 'The derivative of cos x (x in radians) is:', options: ['−sin x','sin x','−cos x','cosec²x'], answer: 0 }, // c-trig
      { q: 'At a stationary point, dy/dx equals:', options: ['0','1','∞','The y-value'], answer: 0 }, // c-app
      { q: 'If d²y/dx² > 0 at a stationary point, the point is a:', options: ['Minimum','Maximum','Point of inflection','Discontinuity'], answer: 0 }, // c-app
      { q: 'If d²y/dx² < 0 at a stationary point, the point is a:', options: ['Maximum','Minimum','Point of inflection','Discontinuity'], answer: 0 }, // c-app
      { q: 'The derivative of 5x is:', options: ['5','5x','0','x'], answer: 0 }, // c1
      { q: 'The derivative of x³ − 2x is:', options: ['3x² − 2','3x² − 2x','x² − 2','3x³ − 2'], answer: 0 }, // c1
      { q: 'The chain rule states that the derivative of f(g(x)) is:', options: ["f'(g(x))·g'(x)","f'(x)·g'(x)","f'(g'(x))","f(g'(x))"], answer: 0 }, // c-rules
      { q: 'The product rule states that the derivative of uv is:', options: ["u'v + uv'","u'v'","u'v − uv'","(uv)'"], answer: 0 }, // c-rules
      { q: 'The quotient rule states that the derivative of u/v is:', options: ["(u'v − uv')/v²","(u'v + uv')/v²","u'/v'","(uv' − u'v)/v²"], answer: 0 }, // c-rules
      { q: 'Differentiation from first principles uses the limit as h → 0 of:', options: ['(f(x + h) − f(x))/h','(f(x + h) + f(x))/h','f(x + h) − f(x)','f(x)/h'], answer: 0 }, // c-first
      { q: 'The derivative of e^(kx) is:', options: ['ke^(kx)','e^(kx)','e^(kx)/k','kxe^(kx)'], answer: 0 }, // c-exp
      { q: 'dy/dx represents:', options: ['The rate of change of y with respect to x','The value of y','The area under the curve','The y-intercept'], answer: 0 }, // c1
      { q: 'The derivative of √x is:', options: ['1/(2√x)','2√x','√x/2','1/√x'], answer: 0 }, // c1
      { q: 'A function is increasing on an interval when:', options: ['dy/dx > 0 there','dy/dx < 0 there','dy/dx = 0 there','d²y/dx² > 0 there'], answer: 0 }, // c-app
    ],
    amber: [
      { q: 'Differentiate x²eˣ.', options: ['2xeˣ + x²eˣ','2xeˣ','x²eˣ','2xeˣ − x²eˣ'], answer: 0 }, // c-rules
      { q: 'Differentiate sin 3x.', options: ['3cos 3x','cos 3x','−3cos 3x','3sin 3x'], answer: 0 }, // c-rules
      { q: 'Differentiate ln(2x + 1).', options: ['2/(2x + 1)','1/(2x + 1)','1/(2x)','2 ln(2x + 1)'], answer: 0 }, // c-rules
      { q: 'The stationary points of y = x³ − 3x occur at:', options: ['x = 1 and x = −1','x = 0 only','x = 3 and x = −3','x = √3 and x = −√3'], answer: 0 }, // c-app
      { q: 'Differentiate (x + 1)/(x − 1).', options: ['−2/(x − 1)²','2/(x − 1)²','1/(x − 1)²','−2/(x + 1)²'], answer: 0 }, // c-rules
      { q: 'For x² + y² = 25, implicit differentiation gives dy/dx =', options: ['−x/y','x/y','−y/x','y/x'], answer: 0 }, // c-imp
      { q: 'For the parametric curve x = t², y = t³, dy/dx equals:', options: ['3t/2','3t²/2t','2t/3t²','3t²'], answer: 0 }, // c-par
      { q: 'The derivative of tan x is:', options: ['sec²x','−cosec²x','sec x tan x','cot x'], answer: 0 }, // c-trig
      { q: 'Differentiate e^(x²).', options: ['2xe^(x²)','e^(x²)','x²e^(x²)','2e^(x²)'], answer: 0 }, // c-rules
      { q: 'The gradient of the normal to a curve at a point where dy/dx = m is:', options: ['−1/m','m','1/m','−m'], answer: 0 }, // c-app
      { q: 'Differentiate x ln x.', options: ['ln x + 1','1/x','ln x','x + ln x'], answer: 0 }, // c-rules
      { q: 'Differentiate cos²x.', options: ['−sin 2x','2cos x','−2cos x','sin 2x'], answer: 0 }, // c-rules
      { q: 'Differentiate (2x + 1)⁵.', options: ['10(2x + 1)⁴','5(2x + 1)⁴','2(2x + 1)⁴','10(2x + 1)⁵'], answer: 0 }, // c-rules
      { q: 'A point of inflection on y = f(x) requires that:', options: ["f''(x) = 0 and f'' changes sign there","f'(x) = 0 only","f''(x) > 0","f(x) = 0"], answer: 0 }, // c-app
      { q: 'Differentiate 1/x.', options: ['−1/x²','1/x²','ln x','−1/x'], answer: 0 }, // c1
      { q: 'If displacement is s(t), the velocity is:', options: ['ds/dt','d²s/dt²','∫s dt','s/t'], answer: 0 }, // c-app
      { q: 'The equation of the tangent to y = x² at (2, 4) is:', options: ['y = 4x − 4','y = 4x + 4','y = 2x','y = 4x'], answer: 0 }, // c-app
      { q: 'Differentiate x³ ln x.', options: ['3x² ln x + x²','3x² ln x','x² + 3x²','3x² ln x + x³'], answer: 0 }, // c-rules
      { q: 'The rate of change of the area A of a circle with respect to its radius r is:', options: ['2πr','πr²','2π','πr'], answer: 0 }, // c-app
      { q: 'Differentiate sin x cos x.', options: ['cos 2x','−sin 2x','cos²x','sin 2x'], answer: 0 }, // c-rules
    ],
    red: [
      { q: 'Differentiating y = x² from first principles, the expression ((x + h)² − x²)/h simplifies before the limit to:', options: ['2x + h','2x','h','2xh + h²'], answer: 0 }, // c-first
      { q: 'For x³ + y³ = 6xy, implicit differentiation gives dy/dx =', options: ['(2y − x²)/(y² − 2x)','(x² − 2y)/(y² − 2x)','(2y − x²)/(2x − y²)','(y² − 2x)/(2y − x²)'], answer: 0 }, // c-imp
      { q: 'The stationary point of y = xe^(−x) occurs at:', options: ['x = 1','x = 0','x = −1','x = e'], answer: 0 }, // c-app
      { q: 'Differentiate ln(sec x).', options: ['tan x','sec x','cot x','sec x tan x'], answer: 0 }, // c-rules
      { q: 'The curve y = x⁴ has f″(0) = 0 at the origin, yet the origin is:', options: ['A minimum, since f″ does not change sign','A point of inflection','A maximum','A discontinuity'], answer: 0 }, // c-app
      { q: 'A sphere of radius r has volume V = (4/3)πr³. If dr/dt = 2, then dV/dt equals:', options: ['8πr²','4πr²','(8/3)πr²','4πr³'], answer: 0 }, // c-app
      { q: 'For the parametric curve x = 2t, y = t², the second derivative d²y/dx² equals:', options: ['1/2','t/2','2','t'], answer: 0 }, // c-par
      { q: 'Differentiate xˣ for x > 0.', options: ['xˣ(1 + ln x)','x·xˣ⁻¹','xˣ ln x','xˣ'], answer: 0 }, // c-rules
      { q: 'A closed cylinder has fixed volume V. Its surface area is minimised when:', options: ['The height equals the diameter','The height equals the radius','The radius is 1','The height is twice the diameter'], answer: 0 }, // c-app
      { q: 'Differentiate sin²x cos x.', options: ['2 sin x cos²x − sin³x','2 sin x cos x','−sin³x','2 sin x cos²x'], answer: 0 }, // c-rules
    ],
  },

  '1.10': {
    name: 'Integration',
    green: [
      { q: 'For n ≠ −1, ∫xⁿ dx equals:', options: ['xⁿ⁺¹/(n + 1) + c','nxⁿ⁻¹ + c','xⁿ/n + c','xⁿ⁺¹ + c'], answer: 0 }, // c20
      { q: '∫(1/x) dx equals:', options: ['ln|x| + c','1/x² + c','x ln x + c','−1/x² + c'], answer: 0 }, // c-int
      { q: '∫eˣ dx equals:', options: ['eˣ + c','xeˣ + c','eˣ/x + c','e^(x+1)/(x+1) + c'], answer: 0 }, // c-int
      { q: '∫cos x dx equals:', options: ['sin x + c','−sin x + c','cos x + c','−cos x + c'], answer: 0 }, // c-int
      { q: '∫sin x dx equals:', options: ['−cos x + c','cos x + c','sin x + c','−sin x + c'], answer: 0 }, // c-int
      { q: 'An indefinite integral requires:', options: ['A constant of integration','Limits','A substitution','A derivative'], answer: 0 }, // c20
      { q: '∫2x dx equals:', options: ['x² + c','2x² + c','2 + c','x²/2 + c'], answer: 0 }, // c20
      { q: 'A definite integral of a positive function represents:', options: ['The area between the curve and the x-axis','The gradient','The turning point','The derivative'], answer: 0 }, // c-area
      { q: 'Integration is the reverse process of:', options: ['Differentiation','Factorising','Substitution','Taking logarithms'], answer: 0 }, // c20
      { q: '∫k dx, where k is a constant, equals:', options: ['kx + c','k + c','kx²/2 + c','0'], answer: 0 }, // c20
      { q: '∫x² dx equals:', options: ['x³/3 + c','2x + c','x³ + c','3x³ + c'], answer: 0 }, // c20
      { q: 'If a region lies below the x-axis, its definite integral is:', options: ['Negative','Positive','Zero','Undefined'], answer: 0 }, // c-area
      { q: '∫e^(kx) dx equals:', options: ['e^(kx)/k + c','ke^(kx) + c','e^(kx) + c','e^(kx)/x + c'], answer: 0 }, // c-int
      { q: 'Swapping the limits of a definite integral:', options: ['Changes its sign','Leaves it unchanged','Doubles it','Makes it zero'], answer: 0 }, // c-area
      { q: 'The value of ∫ from 0 to 1 of x dx is:', options: ['1/2','1','0','2'], answer: 0 }, // c-area
      { q: '∫3x² dx equals:', options: ['x³ + c','3x³ + c','6x + c','x³/3 + c'], answer: 0 }, // c20
      { q: '∫(1/x²) dx equals:', options: ['−1/x + c','1/x + c','ln|x²| + c','−2/x³ + c'], answer: 0 }, // c20
      { q: '∫sec²x dx equals:', options: ['tan x + c','sec x + c','cot x + c','−tan x + c'], answer: 0 }, // c-int
      { q: 'The Fundamental Theorem of Calculus links:', options: ['Differentiation and integration as inverse processes','Areas and gradients of straight lines','Limits and sequences','Vectors and matrices'], answer: 0 }, // c-ftc
      { q: 'The value of ∫ from 1 to 3 of (2x + 1) dx is:', options: ['10','12','8','14'], answer: 0 }, // c-area
    ],
    amber: [
      { q: '∫(2x + 1)⁵ dx equals:', options: ['(2x + 1)⁶/12 + c','(2x + 1)⁶/6 + c','10(2x + 1)⁴ + c','(2x + 1)⁶/2 + c'], answer: 0 }, // c-sub
      { q: '∫x e^(x²) dx equals:', options: ['½e^(x²) + c','e^(x²) + c','2xe^(x²) + c','x²e^(x²)/2 + c'], answer: 0 }, // c-sub
      { q: '∫x eˣ dx equals:', options: ['eˣ(x − 1) + c','eˣ(x + 1) + c','x²eˣ/2 + c','xeˣ + c'], answer: 0 }, // c-parts
      { q: '∫1/(2x + 1) dx equals:', options: ['½ln|2x + 1| + c','ln|2x + 1| + c','2 ln|2x + 1| + c','−1/(2x + 1)² + c'], answer: 0 }, // c-sub
      { q: 'The area enclosed between y = x and y = x² from x = 0 to x = 1 is:', options: ['1/6','1/2','1/3','1'], answer: 0 }, // c-area
      { q: '∫sin 2x dx equals:', options: ['−½cos 2x + c','−2cos 2x + c','½cos 2x + c','2cos 2x + c'], answer: 0 }, // c-sub
      { q: 'The value of ∫ from 0 to π of sin x dx is:', options: ['2','0','1','π'], answer: 0 }, // c-area
      { q: 'The integration by parts formula is:', options: ['∫u dv = uv − ∫v du','∫u dv = uv + ∫v du','∫uv dx = ∫u dx ∫v dx','∫u dv = u∫dv'], answer: 0 }, // c-parts
      { q: 'For ∫2x(x² + 1)³ dx the natural substitution is:', options: ['u = x² + 1','u = 2x','u = x³','u = (x² + 1)³'], answer: 0 }, // c-sub
      { q: 'To integrate cos²x, the useful identity is:', options: ['cos²x = ½(1 + cos 2x)','cos²x = 1 − sin²x only','cos 2x = 2 sin x cos x','cos²x = ½(1 − cos 2x)'], answer: 0 }, // c-sub
      { q: 'The value of ∫ from 0 to 2 of (3x² + 2x) dx is:', options: ['12','8','10','16'], answer: 0 }, // c-area
      { q: '∫tan x dx equals:', options: ['ln|sec x| + c','ln|cos x| + c','sec²x + c','−ln|sec x| + c'], answer: 0 }, // c-int
      { q: '∫(x + 1)/x dx equals:', options: ['x + ln|x| + c','ln|x + 1| + c','x²/2 + x + c','1 + ln|x| + c'], answer: 0 }, // c-int
      { q: 'The value of ∫ from −1 to 1 of x³ dx is:', options: ['0','1/2','2','1/4'], answer: 0 }, // c-area
      { q: 'The definite integral of a rate of change over an interval gives:', options: ['The total change in the quantity','The average rate','The maximum value','The gradient'], answer: 0 }, // c-app
      { q: 'To integrate 5/((x + 1)(x − 4)), the first step is:', options: ['Express it in partial fractions','Substitute u = x + 1','Integrate by parts','Use the chain rule'], answer: 0 }, // c-pf
      { q: '∫cos 3x dx equals:', options: ['⅓sin 3x + c','3 sin 3x + c','−⅓sin 3x + c','sin 3x + c'], answer: 0 }, // c-sub
      { q: 'When a substitution is used in a definite integral, you must also:', options: ['Change the limits to match the new variable','Double the answer','Add a constant of integration','Swap the limits'], answer: 0 }, // c-sub
      { q: '∫(3x + 2)⁴ dx equals:', options: ['(3x + 2)⁵/15 + c','(3x + 2)⁵/5 + c','12(3x + 2)³ + c','(3x + 2)⁵/3 + c'], answer: 0 }, // c-sub
      { q: 'The area between the curve y = 4 − x² and the x-axis, between its roots, is:', options: ['32/3','16/3','8','16'], answer: 0 }, // c-area
    ],
    red: [
      { q: '∫ln x dx equals:', options: ['x ln x − x + c','1/x + c','x ln x + c','(ln x)²/2 + c'], answer: 0 }, // c-parts
      { q: '∫x²eˣ dx requires integration by parts applied:', options: ['Twice','Once','Three times','Not at all'], answer: 0 }, // c-parts
      { q: 'The value of ∫ from 0 to π/2 of sin x cos x dx is:', options: ['1/2','1','0','1/4'], answer: 0 }, // c-sub
      { q: '∫1/(x ln x) dx equals:', options: ['ln|ln x| + c','(ln x)²/2 + c','1/ln x + c','x ln x + c'], answer: 0 }, // c-sub
      { q: 'Expressing (2x + 3)/((x + 1)(x + 2)) in partial fractions gives:', options: ['1/(x + 1) + 1/(x + 2)','1/(x + 1) − 1/(x + 2)','2/(x + 1) + 1/(x + 2)','3/(x + 1) − 1/(x + 2)'], answer: 0 }, // c-pf
      { q: '∫sin³x dx is best handled by writing sin³x as:', options: ['sin x(1 − cos²x), then substituting u = cos x','(sin x)³ and using the power rule','½(1 − cos 2x) sin x only','3 sin x − sin 3x directly'], answer: 0 }, // c-sub
      { q: '∫eˣ sin x dx is evaluated by:', options: ['Integrating by parts twice and solving for the original integral','A single substitution','Partial fractions','The power rule'], answer: 0 }, // c-parts
      { q: 'The area enclosed between y = x² and y = 2x is:', options: ['4/3','8/3','2','2/3'], answer: 0 }, // c-area
      { q: 'The value of ∫ from 1 to e of (1/x) dx is:', options: ['1','e','e − 1','0'], answer: 0 }, // c-int
      { q: 'Using the substitution u = x² + 1, the integral ∫ from 0 to 1 of 2x/(x² + 1) dx becomes ∫ from 1 to 2 of (1/u) du, giving:', options: ['ln 2','ln 3','1','2 ln 2'], answer: 0 }, // c-sub
    ],
  },

  '1.11': {
    name: 'Differential Equations',
    green: [
      { q: 'The differential equation dy/dt = ky models:', options: ['Exponential growth or decay','Linear growth','Simple harmonic motion','Constant velocity'], answer: 0 }, // c-de
      { q: 'To solve a separable equation dy/dx = f(x)g(y), you first:', options: ['Separate the variables and integrate both sides','Differentiate both sides','Substitute y = 0','Use the product rule'], answer: 0 }, // c-de
      { q: 'A general solution of a differential equation contains:', options: ['An arbitrary constant','No constants','Only numbers','A second derivative'], answer: 0 }, // c-de
      { q: 'To obtain a particular solution you need:', options: ['An initial or boundary condition','A second differential equation','A substitution','A limit'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = 2x.', options: ['y = x² + c','y = 2 + c','y = x²','y = 2x² + c'], answer: 0 }, // c-de
      { q: 'An equation involving only dy/dx and not higher derivatives is called:', options: ['First order','Second order','Linear','Homogeneous'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = 3.', options: ['y = 3x + c','y = 3 + c','y = 3x','y = x³ + c'], answer: 0 }, // c-de
      { q: 'If a quantity decreases at a rate proportional to its amount, then:', options: ['dy/dt = −ky with k > 0','dy/dt = ky with k > 0','dy/dt = k','dy/dt = 0'], answer: 0 }, // c-de
      { q: 'The solution of dy/dx = y is:', options: ['y = Aeˣ','y = x + c','y = Ax','y = ln x + c'], answer: 0 }, // c-de
      { q: 'The solution of dP/dt = kP with P = P₀ at t = 0 is:', options: ['P = P₀e^(kt)','P = P₀ + kt','P = P₀kt','P = kP₀t²'], answer: 0 }, // c-de
      { q: "Newton's law of cooling states that the rate of cooling is proportional to:", options: ['The excess temperature over the surroundings','The time elapsed','The square of the temperature','The mass only'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = 1/x for x > 0.', options: ['y = ln x + c','y = −1/x² + c','y = 1/x + c','y = x ln x + c'], answer: 0 }, // c-de
      { q: 'If dy/dx = 0 for all x, then y is:', options: ['Constant','Linear in x','Exponential','Zero'], answer: 0 }, // c-de
      { q: 'In dy/dt = ky, the variable t is the:', options: ['Independent variable','Dependent variable','Constant of integration','Rate'], answer: 0 }, // c-de
      { q: 'The equation dy/dx = x/y is:', options: ['Separable','Not separable','Second order','Linear with constant coefficients'], answer: 0 }, // c-de
      { q: 'If v is velocity and t is time, dv/dt represents:', options: ['Acceleration','Displacement','Speed','Distance'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = eˣ.', options: ['y = eˣ + c','y = xeˣ + c','y = eˣ/x + c','y = e^(x+1) + c'], answer: 0 }, // c-de
      { q: 'In an exponential decay model, the constant k is:', options: ['Positive, with a minus sign in the equation','Always negative in the solution exponent only','Zero','Undefined'], answer: 0 }, // c-de
      { q: 'Forming a differential equation from a worded problem means:', options: ['Translating the stated rate of change into an equation','Solving for y directly','Drawing a graph','Finding a limit'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = cos x.', options: ['y = sin x + c','y = −sin x + c','y = cos x + c','y = −cos x + c'], answer: 0 }, // c-de
    ],
    amber: [
      { q: 'Solve dy/dx = xy given y = 1 when x = 0.', options: ['y = e^(x²/2)','y = eˣ','y = x²/2 + 1','y = e^(x²)'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = y/x for x > 0.', options: ['y = Ax','y = A/x','y = A ln x','y = Aeˣ'], answer: 0 }, // c-de
      { q: 'Solve dN/dt = −kN with N = N₀ at t = 0.', options: ['N = N₀e^(−kt)','N = N₀ − kt','N = N₀e^(kt)','N = N₀/kt'], answer: 0 }, // c-de
      { q: "Newton's law of cooling is written as:", options: ['dθ/dt = −k(θ − θ₀)','dθ/dt = −kθ²','dθ/dt = k','dθ/dt = −kt'], answer: 0 }, // c-de
      { q: 'Solve dy/dt = 3y given y = 5 when t = 0.', options: ['y = 5e^(3t)','y = 3e^(5t)','y = 5 + 3t','y = 15t'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = y cos x.', options: ['y = Ae^(sin x)','y = A sin x','y = Ae^(cos x)','y = A + sin x'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = eˣ/y.', options: ['y² = 2eˣ + c','y = eˣ + c','y² = eˣ + c','y = 2eˣ + c'], answer: 0 }, // c-de
      { q: 'The equation dy/dt = k(A − y) describes a quantity that:', options: ['Approaches the limiting value A','Grows without limit','Decays to zero','Oscillates'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = 2xy².', options: ['−1/y = x² + c','y = x² + c','1/y = x² + c','y² = x² + c'], answer: 0 }, // c-de
      { q: 'For radioactive decay dN/dt = −kN, the half-life T satisfies:', options: ['kT = ln 2','kT = 2','T = k/2','kT = 1'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = x²y.', options: ['y = Ae^(x³/3)','y = Ae^(x²)','y = x³/3 + c','y = Ax³'], answer: 0 }, // c-de
      { q: 'A logistic model is preferred to dP/dt = kP because:', options: ['It includes a carrying capacity that limits growth','It is easier to solve','It has no constants','It always decreases'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = (1 + y)/x for x > 0.', options: ['1 + y = Ax','y = Ax','1 + y = A ln x','y = x + c'], answer: 0 }, // c-de
      { q: 'Water drains from a tank so that dV/dt = −k√V. This equation is:', options: ['Separable, giving √V as a linear function of t','Not separable','Second order','Linear in V'], answer: 0 }, // c-de
      { q: 'If dy/dx = k(y − 5) and y > 5 with k > 0, then y:', options: ['Increases away from 5','Decreases towards 5','Stays constant','Oscillates about 5'], answer: 0 }, // c-de
      { q: 'The statement "the rate of growth is proportional to the square of the population" becomes:', options: ['dP/dt = kP²','dP/dt = kP','dP/dt = k√P','dP/dt = 2kP'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = 6x² given y = 4 when x = 1.', options: ['y = 2x³ + 2','y = 2x³','y = 2x³ + 4','y = 6x³ + 4'], answer: 0 }, // c-de
      { q: 'Separating dy/dx = y² sin x gives:', options: ['∫y⁻² dy = ∫sin x dx','∫y² dy = ∫sin x dx','∫y dy = ∫sin x dx','∫dy = ∫y² sin x dx'], answer: 0 }, // c-de
      { q: 'In the model dθ/dt = −k(θ − 20) with θ = 100 at t = 0, the solution is:', options: ['θ = 20 + 80e^(−kt)','θ = 100e^(−kt)','θ = 20 + 100e^(−kt)','θ = 80 + 20e^(−kt)'], answer: 0 }, // c-de
      { q: 'The long-term value predicted by θ = 20 + 80e^(−kt) with k > 0 is:', options: ['20','100','80','0'], answer: 0 }, // c-de
    ],
    red: [
      { q: 'To solve the logistic equation dy/dx = y(1 − y), the required technique is:', options: ['Separate and use partial fractions on 1/(y(1 − y))','Integrate by parts','Substitute u = y²','Use the product rule'], answer: 0 }, // c-de
      { q: 'Solve x dy/dx + y = 0.', options: ['xy = c','y = cx','y = c − x','x + y = c'], answer: 0 }, // c-de
      { q: 'A body falls subject to dv/dt = g − kv. Its terminal velocity is:', options: ['g/k','gk','k/g','0'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = y tan x.', options: ['y = A sec x','y = A cos x','y = A tan x','y = A sin x'], answer: 0 }, // c-de
      { q: 'Solve (1 + x²) dy/dx = xy.', options: ['y = A√(1 + x²)','y = A(1 + x²)','y = A ln(1 + x²)','y = Ae^(x²)'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = (x + 1)/(y − 2).', options: ['(y − 2)² = x² + 2x + c','(y − 2)² = 2x² + c','y − 2 = x² + 2x + c','y² = x² + c'], answer: 0 }, // c-de
      { q: 'In dv/dt = g − kv, the approach to terminal velocity is:', options: ['Exponential, never exactly reaching it in finite time','Linear','Instantaneous','Oscillatory'], answer: 0 }, // c-de
      { q: 'A criticism of the model dP/dt = kP for a real population is that:', options: ['It predicts unbounded growth, ignoring finite resources','It cannot be solved','It requires P < 0','It has no initial condition'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = e^(x−y).', options: ['e^y = eˣ + c','y = eˣ + c','e^(−y) = eˣ + c','y = e^(x−y) + c'], answer: 0 }, // c-de
      { q: 'A tank holds 100 litres of brine. If salt enters at a constant rate and the well-mixed solution leaves at the same volumetric rate, the amount of salt S satisfies an equation of the form:', options: ['dS/dt = a − bS','dS/dt = aS','dS/dt = a','dS/dt = −bS²'], answer: 0 }, // c-de
    ],
  },

  '1.12': {
    name: 'Numerical Methods',
    green: [
      { q: 'If f is continuous and f(a) and f(b) have opposite signs, then in the interval (a, b) there is:', options: ['At least one root of f(x) = 0','Exactly one root','No root','A turning point'], answer: 0 }, // e1
      { q: 'The Newton-Raphson formula is:', options: ["x₍ₙ₊₁₎ = xₙ − f(xₙ)/f'(xₙ)","x₍ₙ₊₁₎ = xₙ + f(xₙ)/f'(xₙ)","x₍ₙ₊₁₎ = f(xₙ)/f'(xₙ)","x₍ₙ₊₁₎ = xₙ − f'(xₙ)/f(xₙ)"], answer: 0 }, // e4
      { q: 'A fixed point iteration requires the equation to be rearranged into the form:', options: ['x = g(x)','f(x) = 0','y = mx + c','g(x) = 0'], answer: 0 }, // e3
      { q: 'The trapezium rule is used to find an approximate value of:', options: ['A definite integral','A derivative','A root','A limit'], answer: 0 }, // c34
      { q: 'Increasing the number of strips in the trapezium rule generally:', options: ['Improves the accuracy','Reduces the accuracy','Has no effect','Changes the sign'], answer: 0 }, // c34
      { q: 'Staircase and cobweb diagrams are used to illustrate:', options: ['The behaviour of a fixed point iteration','The trapezium rule','Integration by parts','Differentiation from first principles'], answer: 0 }, // e3
      { q: 'A numerical iteration applied to an equation:', options: ['May converge to a root or may diverge','Always converges','Always diverges','Gives an exact answer'], answer: 0 }, // e5
      { q: 'For n strips over the interval from a to b, the strip width h is:', options: ['(b − a)/n','(b − a)n','(a + b)/n','n/(b − a)'], answer: 0 }, // c34
      { q: 'The Newton-Raphson method requires knowledge of:', options: ["The derivative f'(x)","The second derivative only",'The integral of f','No extra information'], answer: 0 }, // e4
      { q: 'A root of f(x) = 0 corresponds to a point where the graph of y = f(x):', options: ['Meets the x-axis','Meets the y-axis','Has a maximum','Has an asymptote'], answer: 0 }, // e1
      { q: 'Any iterative method requires:', options: ['A starting value','Two derivatives','An exact solution','A definite integral'], answer: 0 }, // e3
      { q: 'A change of sign method may fail if the curve:', options: ['Touches the x-axis without crossing it','Crosses the x-axis once','Is a straight line','Has a positive gradient'], answer: 0 }, // e2
      { q: 'Numerical methods generally produce:', options: ['An approximation to a specified accuracy','An exact answer','A general formula','A proof'], answer: 0 }, // e1
      { q: 'Using n strips, the number of ordinates needed for the trapezium rule is:', options: ['n + 1','n','n − 1','2n'], answer: 0 }, // c34
      { q: 'If f(1) < 0 and f(2) > 0 for a continuous f, a root lies in:', options: ['(1, 2)','(0, 1)','(2, 3)','No interval'], answer: 0 }, // e1
      { q: 'Summing the areas of rectangles under a curve gives:', options: ['A bound on the area under the curve','The exact area','The gradient','A root'], answer: 0 }, // c35
      { q: 'Geometrically, one Newton-Raphson step follows:', options: ['The tangent at the current point to where it meets the x-axis','The chord between two points','A vertical line','The normal to the curve'], answer: 0 }, // e4
      { q: 'A change of sign method can also fail if, in the interval, the function has:', options: ['A vertical asymptote','A single root','A constant value','A minimum above the axis'], answer: 0 }, // e2
      { q: 'An iteration is said to converge when successive iterates:', options: ['Get arbitrarily close to a fixed value','Alternate in sign','Increase without limit','Repeat exactly'], answer: 0 }, // e5
      { q: 'Locating an interval containing a root is usually done:', options: ['Before starting an iterative method, to give a starting value','After the iteration converges','Instead of any iteration','Only for linear equations'], answer: 0 }, // e1
    ],
    amber: [
      { q: 'For f(x) = x³ − 5 and x₀ = 2, one Newton-Raphson iteration gives x₁ =', options: ['1.75','2.25','1.5','1.6'], answer: 0 }, // e4
      { q: 'The equation x³ − x − 4 = 0 can be rearranged for iteration as:', options: ['x = (x + 4)^(1/3)','x = x³ − 4','x = 4/x³','x = x³ + 4'], answer: 0 }, // e3
      { q: 'For f(x) = x³ − 2x − 5, a root lies in the interval:', options: ['(2, 3), since f(2) = −1 and f(3) = 16','(0, 1)','(1, 2)','(3, 4)'], answer: 0 }, // e1
      { q: 'The iteration x₍ₙ₊₁₎ = √(xₙ + 2) converges to:', options: ['2','1','4','−1'], answer: 0 }, // e3
      { q: 'For f(x) = x² − 2 and x₀ = 1, one Newton-Raphson iteration gives x₁ =', options: ['1.5','0.5','2','1.25'], answer: 0 }, // e4
      { q: 'The Newton-Raphson method fails at a point where:', options: ["f'(xₙ) = 0","f(xₙ) = 0",'xₙ is negative','f is increasing'], answer: 0 }, // e5
      { q: 'The trapezium rule applied to a curve that is concave upwards gives:', options: ['An overestimate of the integral','An underestimate of the integral','The exact value','A negative value'], answer: 0 }, // c34
      { q: 'The trapezium rule applied to a curve that is concave downwards gives:', options: ['An underestimate of the integral','An overestimate of the integral','The exact value','Zero'], answer: 0 }, // c34
      { q: 'Using 4 strips over the interval from 1 to 3, the strip width h is:', options: ['0.5','0.25','2','4'], answer: 0 }, // c34
      { q: 'A change of sign search over an interval containing two roots may:', options: ['Detect no sign change and so miss both roots','Always find both','Always find one','Give an exact answer'], answer: 0 }, // e2
      { q: 'A fixed point iteration x = g(x) converges near a root when, approximately:', options: ["|g'(x)| < 1 near the root","|g'(x)| > 1 near the root","g'(x) = 0 exactly","g(x) = 0"], answer: 0 }, // e5
      { q: 'A cobweb diagram (rather than a staircase) arises when, near the root:', options: ["g'(x) is negative","g'(x) is positive","g'(x) = 1",'g is constant'], answer: 0 }, // e3
      { q: 'For an increasing function, rectangles drawn using left-hand ordinates give:', options: ['A lower bound for the area','An upper bound for the area','The exact area','A negative area'], answer: 0 }, // c35
      { q: 'The equation eˣ = 3 − x has a root in the interval:', options: ['(0, 1)','(1, 2)','(−1, 0)','(2, 3)'], answer: 0 }, // e1
      { q: 'The trapezium rule formula for n strips is approximately:', options: ['(h/2)[y₀ + yₙ + 2(y₁ + … + y₍ₙ₋₁₎)]','h[y₀ + y₁ + … + yₙ]','(h/3)[y₀ + 4y₁ + yₙ]','h(y₀ + yₙ)'], answer: 0 }, // c34
      { q: 'Rearranging x² − x − 3 = 0 as x = 3/(x − 1) is valid provided:', options: ['x ≠ 1','x > 0','x is an integer','x < 3'], answer: 0 }, // e3
      { q: 'To show a root is 1.86 correct to 2 decimal places, you check the sign of f at:', options: ['1.855 and 1.865','1.86 only','1.8 and 1.9','1.85 and 1.86'], answer: 0 }, // e1
      { q: 'If an iteration produces values increasing without limit, the iteration has:', options: ['Diverged','Converged','Found a root','Reached machine precision'], answer: 0 }, // e5
      { q: 'A different rearrangement of the same equation into x = g(x) may:', options: ['Converge when another rearrangement diverges','Always give the same behaviour','Never converge','Change the roots'], answer: 0 }, // e3
      { q: 'Applying Newton-Raphson to f(x) = x² − a gives the iteration:', options: ['x₍ₙ₊₁₎ = ½(xₙ + a/xₙ)','x₍ₙ₊₁₎ = xₙ − a','x₍ₙ₊₁₎ = a/xₙ','x₍ₙ₊₁₎ = 2xₙ − a'], answer: 0 }, // e4
    ],
    red: [
      { q: 'For f(x) = (x − 2)², a change of sign method applied around x = 2 fails because:', options: ['The curve touches the x-axis without crossing, so f never changes sign','The function is discontinuous','There is no root','The derivative is undefined'], answer: 0 }, // e2
      { q: 'For f(x) = 1/(x − 2), the values f(1) = −1 and f(3) = 1 change sign, yet:', options: ['There is no root — the sign change is caused by a vertical asymptote','There is a root at x = 2','The method has converged','f is continuous throughout'], answer: 0 }, // e2
      { q: 'For f(x) = x³ − 5 with x₀ = 2, two Newton-Raphson iterations give x₂ ≈', options: ['1.7109','1.7500','1.6980','1.7320'], answer: 0 }, // e4
      { q: 'Newton-Raphson typically converges faster than a simple fixed point iteration because its error is:', options: ['Roughly squared at each step near a simple root','Halved at each step','Constant','Increasing'], answer: 0 }, // e4
      { q: 'If a fixed point iteration has |g′(x)| > 1 near the root, then the iteration:', options: ['Diverges away from the root','Converges quickly','Converges slowly','Finds a different root'], answer: 0 }, // e5
      { q: 'Halving the strip width in the trapezium rule reduces the error by a factor of roughly:', options: ['4','2','8','16'], answer: 0 }, // c34
      { q: 'Newton-Raphson started very close to a stationary point of f may:', options: ['Jump far away, converging to a different root or diverging','Always converge to the nearest root','Fail to start','Give an exact answer'], answer: 0 }, // e5
      { q: 'To justify that a trapezium estimate is an overestimate, you should state that on the interval the curve is:', options: ['Concave upwards, so each chord lies above the curve','Increasing','Positive','Differentiable'], answer: 0 }, // c34
      { q: 'The iteration x₍ₙ₊₁₎ = (xₙ + 4)^(1/3) applied to x³ − x − 4 = 0 converges because near the root:', options: ["|g'(x)| < 1","|g'(x)| > 1","g'(x) = 1",'g is linear'], answer: 0 }, // e5
      { q: 'Upper and lower rectangle sums for a monotonic function on an interval:', options: ['Bracket the true value of the integral','Both overestimate it','Both underestimate it','Are equal'], answer: 0 }, // c35
    ],
  },

  '1.13': {
    name: 'Vectors',
    green: [
      { q: 'The magnitude of the vector a = 3i + 4j is:', options: ['5','7','12','25'], answer: 0 }, // v3
      { q: 'The position vector of the point (2, 3) is:', options: ['2i + 3j','3i + 2j','i + j','2i − 3j'], answer: 0 }, // v4
      { q: 'For points A and B with position vectors a and b, the vector AB equals:', options: ['b − a','a − b','a + b','(a + b)/2'], answer: 0 }, // v4
      { q: 'A unit vector is a vector whose magnitude is:', options: ['1','0','Any positive number','Its direction'], answer: 0 }, // v1
      { q: 'Multiplying a vector by the scalar 3:', options: ['Triples its magnitude and keeps its direction','Triples its direction','Rotates it','Leaves it unchanged'], answer: 0 }, // v2
      { q: 'Vectors are added by:', options: ['Adding corresponding components','Multiplying components','Adding magnitudes only','Adding directions only'], answer: 0 }, // v2
      { q: 'In printed work, vectors are conventionally shown in:', options: ['Bold type','Italic type','Capital letters','Brackets only'], answer: 0 }, // v1
      { q: 'Two non-zero vectors are parallel if one is:', options: ['A scalar multiple of the other','Equal to the other','Perpendicular to the other','Of the same magnitude'], answer: 0 }, // v1
      { q: 'The magnitude of the vector a is written:', options: ['|a| or a','a²','1/a','−a'], answer: 0 }, // v1
      { q: 'The zero vector has:', options: ['Zero magnitude and no defined direction','Magnitude 1','Infinite magnitude','A direction along i'], answer: 0 }, // v1
      { q: 'The magnitude of the vector 5i is:', options: ['5','1','25','0'], answer: 0 }, // v3
      { q: 'The vectors i and j are unit vectors directed along:', options: ['The x-axis and y-axis respectively','The y-axis and x-axis respectively','Any two directions','The line y = x'], answer: 0 }, // v1
      { q: 'Extending vector work to three dimensions introduces the unit vector:', options: ['k, along the z-axis','l, along the x-axis','m, along the y-axis','n, along the origin'], answer: 0 }, // v7
      { q: 'Two vectors are equal when they have:', options: ['The same magnitude and the same direction','The same magnitude only','The same direction only','The same starting point'], answer: 0 }, // v1
      { q: 'Vector addition is commutative, meaning:', options: ['a + b = b + a','a + b = a − b','a + b = 0','ab = ba'], answer: 0 }, // v2
      { q: 'The magnitude of 6i + 8j is:', options: ['10','14','48','100'], answer: 0 }, // v3
      { q: 'Points that lie on the same straight line are described as:', options: ['Collinear','Coplanar','Parallel','Perpendicular'], answer: 0 }, // v1
      { q: 'The magnitude of −a compared with the magnitude of a is:', options: ['Equal','Negative','Larger','Zero'], answer: 0 }, // v2
      { q: 'The sum of vectors representing forces is interpreted as:', options: ['The resultant force','The average force','The friction','The moment'], answer: 0 }, // v6
      { q: 'A vector written in column form (3, −2) is equivalent to:', options: ['3i − 2j','−2i + 3j','3i + 2j','2i − 3j'], answer: 0 }, // v1
    ],
    amber: [
      { q: 'The magnitude of a = 2i − 3j + 6k is:', options: ['7','11','41','5'], answer: 0 }, // v7
      { q: 'A unit vector in the direction of 3i + 4j is:', options: ['(3i + 4j)/5','(3i + 4j)/7','3i + 4j','(4i + 3j)/5'], answer: 0 }, // v3
      { q: 'For A(1, 2) and B(4, 6), the vector AB and its magnitude are:', options: ['3i + 4j, magnitude 5','5i + 8j, magnitude 9','3i + 4j, magnitude 7','−3i − 4j, magnitude 5'], answer: 0 }, // v4
      { q: 'The vector 2i + kj is parallel to 4i + 6j when k equals:', options: ['3','2','6','12'], answer: 0 }, // v1
      { q: 'The position vector of the midpoint of AB, where A and B have position vectors a and b, is:', options: ['(a + b)/2','(b − a)/2','a + b','(a − b)/2'], answer: 0 }, // v4
      { q: 'In magnitude-direction form, 3i + 3j has magnitude and direction:', options: ['3√2 at 45° above the x-axis','3 at 45°','6 at 45°','3√2 at 60°'], answer: 0 }, // v3
      { q: 'The distance between the points (1, 2, 3) and (4, 6, 3) is:', options: ['5','7','9','25'], answer: 0 }, // v7
      { q: 'A vector of magnitude 10 at 30° above the x-axis has components:', options: ['10cos30° i + 10sin30° j','10sin30° i + 10cos30° j','10i + 30j','5i + 5√3 j only'], answer: 0 }, // v3
      { q: 'The magnitude of i + 2j + 2k is:', options: ['3','5','9','7'], answer: 0 }, // v7
      { q: 'If a = 4i + j and b = i − 2j, then a − b equals:', options: ['3i + 3j','5i − j','3i − j','−3i − 3j'], answer: 0 }, // v2
      { q: 'Two forces 3i + 2j and −i + 4j act on a particle. Their resultant is:', options: ['2i + 6j','4i − 2j','2i − 2j','−3i + 8j'], answer: 0 }, // v6
      { q: 'A unit vector in the direction of 2i − j + 2k is:', options: ['(2i − j + 2k)/3','(2i − j + 2k)/5','(2i − j + 2k)/9','2i − j + 2k'], answer: 0 }, // v7
      { q: 'Multiplying a vector by −1:', options: ['Reverses its direction and keeps its magnitude','Reverses its magnitude','Leaves it unchanged','Makes it a unit vector'], answer: 0 }, // v2
      { q: 'Points A, B and C are collinear if:', options: ['AB is a scalar multiple of BC','AB equals BC','|AB| = |BC|','AB + BC = 0'], answer: 0 }, // v1
      { q: 'If the position vectors of A and B are 2i + j and 6i + 4j, then |AB| equals:', options: ['5','7','3','25'], answer: 0 }, // v5
      { q: 'The resultant of three forces is zero when:', options: ['Their vector sum is the zero vector','Their magnitudes are equal','They are parallel','Each is a unit vector'], answer: 0 }, // v6
      { q: 'The vector 6i − 8j written as a unit vector is:', options: ['0.6i − 0.8j','0.8i − 0.6j','6i − 8j','0.6i + 0.8j'], answer: 0 }, // v3
      { q: 'The magnitude of the vector from (0, 0, 0) to (2, 3, 6) is:', options: ['7','11','9','5'], answer: 0 }, // v7
      { q: 'If a = 3i − j and b = λ(3i − j), then a and b are:', options: ['Parallel for every non-zero λ','Equal for every λ','Perpendicular','Never parallel'], answer: 0 }, // v1
      { q: 'For a vector with components (−3, 4), the angle it makes with the positive x-axis lies in:', options: ['The second quadrant','The first quadrant','The third quadrant','The fourth quadrant'], answer: 0 }, // v3
    ],
    red: [
      { q: 'A, B and C have position vectors i + j, 3i + 5j and 5i + 9j. These points are:', options: ['Collinear, since AB = 2i + 4j and BC = 2i + 4j','Not collinear','The vertices of a right angle','Coincident'], answer: 0 }, // v1
      { q: 'The point P divides AB in the ratio 2:1, where A and B have position vectors a and b. The position vector of P is:', options: ['(a + 2b)/3','(2a + b)/3','(a + b)/2','2b − a'], answer: 0 }, // v4
      { q: 'A vector has components (−3, −4). Its magnitude and direction from the positive x-axis are:', options: ['5, at 180° + 53.1° = 233.1°','5, at 53.1°','7, at 233.1°','5, at 126.9°'], answer: 0 }, // v3
      { q: 'OACB is a parallelogram with OA = a and OB = b. The vector OC equals:', options: ['a + b','a − b','b − a','(a + b)/2'], answer: 0 }, // v2
      { q: 'The value of λ for which 2i + 4j + λk is parallel to i + 2j + 3k is:', options: ['6','3','2','12'], answer: 0 }, // v7
      { q: 'Three forces F₁ = 2i + 3j, F₂ = −5i + j and F₃ act on a particle in equilibrium. F₃ equals:', options: ['3i − 4j','−3i + 4j','3i + 4j','−7i − 2j'], answer: 0 }, // v6
      { q: 'The centroid of a triangle with vertices at position vectors a, b and c has position vector:', options: ['(a + b + c)/3','(a + b + c)/2','a + b + c','(a + b)/2'], answer: 0 }, // v4
      { q: 'If |a| = 5 and |b| = 12, the magnitude of a + b:', options: ['Lies between 7 and 17 inclusive, depending on their directions','Is always 17','Is always 13','Is always 7'], answer: 0 }, // v2
      { q: 'For A(2, −1, 4) and B(5, 3, 0), the distance AB is:', options: ['√41','√29','7','√61'], answer: 0 }, // v7
      { q: 'M is the midpoint of BC in triangle ABC with position vectors a, b, c. The vector AM equals:', options: ['(b + c)/2 − a','(b + c)/2 + a','(b − c)/2 − a','a − (b + c)/2'], answer: 0 }, // v4
    ],
  },

  '2.1': {
    name: 'Sampling',
    green: [
      { q: 'A population in statistics means:', options: ['The entire group being studied','Only the people in a country','A sample of 100','The largest subgroup'], answer: 0 }, // p21
      { q: 'A sample is:', options: ['A subset of the population','The whole population','A summary statistic','A biased group'], answer: 0 }, // p21
      { q: 'In simple random sampling:', options: ['Every sample of the required size is equally likely to be selected','The first items in a list are chosen','Groups are sampled whole','Volunteers come forward'], answer: 0 }, // p23
      { q: 'Opportunity sampling means selecting:', options: ['Whoever is conveniently available','Every kth member of a list','Proportionally from subgroups','Whole clusters at random'], answer: 0 }, // p24
      { q: 'Systematic sampling means selecting:', options: ['Every kth member from an ordered list','Whoever is available','Volunteers','Whole groups'], answer: 0 }, // p24
      { q: 'Stratified sampling means:', options: ['Sampling each subgroup in proportion to its size in the population','Sampling only one subgroup','Choosing volunteers','Choosing every kth item'], answer: 0 }, // p24
      { q: 'Quota sampling means:', options: ['Selecting until a set number from each category is reached','Selecting randomly from a list','Sampling whole clusters','Using a census'], answer: 0 }, // p24
      { q: 'Cluster sampling means:', options: ['Dividing the population into groups and sampling whole groups','Sampling every kth item','Sampling proportionally by subgroup','Asking for volunteers'], answer: 0 }, // p24
      { q: 'A self-selected sample consists of:', options: ['Those who choose to take part','Those chosen at random','Every kth person','A stratified subset'], answer: 0 }, // p24
      { q: 'A census collects data from:', options: ['The whole population','A random sample','A single cluster','Volunteers only'], answer: 0 }, // p21
      { q: 'A sample mean is often used as:', options: ['An estimate of the population mean','The exact population mean','A measure of spread','A significance level'], answer: 0 }, // p22
      { q: 'Bias in sampling means:', options: ['The sampling method systematically favours certain outcomes','The sample is small','The data are continuous','The mean is large'], answer: 0 }, // p25
      { q: 'Two different samples from the same population:', options: ['May lead to different conclusions','Must give identical results','Are always biased','Must be the same size'], answer: 0 }, // p22
      { q: 'A sampling frame is:', options: ['A list of all members of the population from which the sample is drawn','The size of the sample','The margin of error','The set of results obtained'], answer: 0 }, // p23
      { q: 'A main reason for sampling rather than taking a census is:', options: ['Cost and time','Greater accuracy','It removes all bias','It is always required by law'], answer: 0 }, // p25
      { q: 'In general, increasing the sample size:', options: ['Makes estimates of population quantities more reliable','Increases bias','Has no effect','Reduces the population'], answer: 0 }, // p22
      { q: 'A quantity calculated from a sample is called:', options: ['A statistic','A parameter','A population','A census'], answer: 0 }, // p22
      { q: 'A quantity describing the whole population is called:', options: ['A parameter','A statistic','A sample','An outlier'], answer: 0 }, // p22
      { q: 'Random number generators are used in sampling to:', options: ['Select members without favouring any particular ones','Increase the sample size','Remove outliers','Calculate the mean'], answer: 0 }, // p23
      { q: 'Using a sample to draw a conclusion about the population is called:', options: ['Inference','Enumeration','Stratification','Cleaning'], answer: 0 }, // p22
    ],
    amber: [
      { q: 'A researcher selects every 10th name from an alphabetical register. This is:', options: ['Systematic sampling','Simple random sampling','Stratified sampling','Cluster sampling'], answer: 0 }, // p24
      { q: 'A school has 600 girls and 400 boys. A sample of 50 contains 30 girls and 20 boys. This is:', options: ['Stratified sampling','Quota sampling','Cluster sampling','Opportunity sampling'], answer: 0 }, // p24
      { q: 'A journalist interviews the first 30 people leaving a station. This is:', options: ['Opportunity sampling','Simple random sampling','Systematic sampling','Stratified sampling'], answer: 0 }, // p24
      { q: 'An online poll is answered by readers who choose to respond. The main problem is:', options: ['The sample is self-selected and likely to be biased towards those with strong views','The sample is too random','The population is too small','There is no sampling frame needed'], answer: 0 }, // p25
      { q: 'A town is divided into 20 districts and 3 whole districts are surveyed. This is:', options: ['Cluster sampling','Stratified sampling','Systematic sampling','Quota sampling'], answer: 0 }, // p24
      { q: 'A school of 1200 students has 300 in Year 12. In a stratified sample of 80, the number from Year 12 should be:', options: ['20','30','40','15'], answer: 0 }, // p24
      { q: 'The main advantage of stratified over simple random sampling is that it:', options: ['Ensures each subgroup is represented in proportion to its size','Is always cheaper','Removes the need for a sampling frame','Guarantees no bias at all'], answer: 0 }, // p25
      { q: 'A disadvantage of opportunity sampling is that:', options: ['It is unlikely to be representative of the population','It requires a full sampling frame','It is very time-consuming','It needs random numbers'], answer: 0 }, // p25
      { q: 'The main difference between quota and stratified sampling is that quota sampling:', options: ['Does not select within each category at random','Uses larger samples','Requires a sampling frame','Is always unbiased'], answer: 0 }, // p24
      { q: 'Simple random sampling requires:', options: ['A complete sampling frame','A stratified population','Volunteers','A large budget'], answer: 0 }, // p23
      { q: 'An incomplete sampling frame is a problem because:', options: ['Some members of the population can never be selected, introducing bias','It makes the sample too large','It changes the population mean','It prevents calculation of the median'], answer: 0 }, // p25
      { q: 'Non-response bias arises when:', options: ['Those who do not respond differ systematically from those who do','The sample is too small','Random numbers are reused','The population is finite'], answer: 0 }, // p25
      { q: 'Systematic sampling can go wrong if the ordered list:', options: ['Has a repeating pattern matching the sampling interval','Is alphabetical','Is very long','Contains no duplicates'], answer: 0 }, // p25
      { q: 'A census is most appropriate when:', options: ['The population is small and accessible','The population is very large','Testing destroys the item','Time is short'], answer: 0 }, // p25
      { q: 'A census would be unsuitable for testing the lifetime of light bulbs because:', options: ['Testing destroys every bulb','Bulbs are too cheap','The population is too small','Bulbs are not random'], answer: 0 }, // p25
      { q: 'The sample variance is used as:', options: ['An estimate of the population variance','A measure of bias','The population mean','A significance level'], answer: 0 }, // p22
      { q: 'A large data set is issued in advance of the examination so that learners:', options: ['Become familiar with its contexts and can interpret related data more confidently','Can memorise every value','Need not revise statistics','Can avoid using a calculator'], answer: 0 }, // LDS
      { q: 'In the examination, learners working with the large data set:', options: ['Will not have a printout, though selected data or summary statistics may be given','Must bring a full printout','May use the internet','Are given the whole data set'], answer: 0 }, // LDS
      { q: 'A conclusion drawn from a sample applies to the population only:', options: ['With some uncertainty, since the sample may not be representative','With certainty','If the sample is small','If the data are categorical'], answer: 0 }, // p22
      { q: 'Choosing an appropriate sampling technique depends mainly on:', options: ['The context, the available sampling frame and practical constraints','The mean of the data','The number of outliers','The significance level'], answer: 0 }, // p25
    ],
    red: [
      { q: 'A college has 480 in Year 12 and 320 in Year 13. For a stratified sample of 120, the numbers from each year should be:', options: ['72 and 48','60 and 60','70 and 50','80 and 40'], answer: 0 }, // p24
      { q: 'A factory samples every 12th item from a production line where a fault recurs on every 12th item. The sample will:', options: ['Either always or never include faulty items, badly misrepresenting the fault rate','Be perfectly representative','Be a simple random sample','Have no bias'], answer: 0 }, // p25
      { q: 'A supermarket surveys shoppers on a Tuesday morning about weekly spending. The most serious criticism is that:', options: ['Tuesday-morning shoppers may differ systematically from the full customer population','The sample size is unknown','Spending is continuous data','The mean cannot be found'], answer: 0 }, // p25
      { q: 'Two researchers take independent random samples from the same population and obtain different means. This shows that:', options: ['Sample statistics vary between samples; neither is necessarily wrong','One researcher made an error','The population has no mean','The sampling was biased'], answer: 0 }, // p22
      { q: 'A researcher wants opinions from a population spread over a very large area with a limited travel budget. The most practical method is:', options: ['Cluster sampling, since whole areas can be surveyed cheaply','Simple random sampling across the whole area','A full census','Systematic sampling of the national register'], answer: 0 }, // p25
      { q: 'Quadrupling the sample size reduces the standard deviation of the sample mean by a factor of:', options: ['2','4','16','No change'], answer: 0 }, // p22
      { q: 'A sample is drawn from a telephone directory to estimate national opinion. The most serious source of bias is that:', options: ['People without listed landlines cannot be selected at all','The directory is alphabetical','The sample is too large','Telephone numbers are discrete'], answer: 0 }, // p25
      { q: 'A "self-selected sample is always useless" claim is too strong because:', options: ['It may still be informative if its limitations are recognised and stated','Self-selection removes bias','It is a form of random sampling','It always matches the population'], answer: 0 }, // p25
      { q: 'From September 2026, students on a two-year AS/A Level Mathematics B (MEI) programme use:', options: ['A single large data set','Three large data sets in rotation','A different data set each year','No data set'], answer: 0 }, // LDS
      { q: 'A sampling method is described as unbiased when:', options: ['It does not systematically favour any particular outcomes','It always gives the correct answer','The sample equals the population','The sample is large'], answer: 0 }, // p25
    ],
  },

  '2.2': {
    name: 'Data Presentation & Interpretation',
    green: [
      { q: 'Shoe colour is an example of which type of data?', options: ['Categorical','Discrete','Continuous','Ranked'], answer: 0 }, // D1
      { q: 'The number of cars passing a point is an example of:', options: ['Discrete data','Continuous data','Categorical data','Ranked data'], answer: 0 }, // D1
      { q: 'The height of a plant is an example of:', options: ['Continuous data','Discrete data','Categorical data','Ranked data'], answer: 0 }, // D1
      { q: 'In a histogram, the quantity proportional to frequency is the:', options: ['Area of each bar','Height of each bar','Width of each bar','Perimeter of each bar'], answer: 0 }, // D2
      { q: 'A frequency chart differs from a histogram in that it has:', options: ['Equal width bars and frequency on the vertical axis','Unequal width bars','No vertical axis','Area proportional to frequency'], answer: 0 }, // D1
      { q: 'The median of a data set is:', options: ['The middle value when the data are in order','The most common value','The arithmetic average','The largest value'], answer: 0 }, // D10
      { q: 'The mode of a data set is:', options: ['The most frequently occurring value','The middle value','The average','The range'], answer: 0 }, // D10
      { q: 'The midrange is calculated as:', options: ['(minimum + maximum)/2','The middle value','The most common value','The sum divided by n'], answer: 0 }, // D10
      { q: 'The range of a data set is:', options: ['Maximum − minimum','Q3 − Q1','The middle value','The standard deviation'], answer: 0 }, // D11
      { q: 'The interquartile range is:', options: ['Q3 − Q1','Maximum − minimum','The median','Twice the standard deviation'], answer: 0 }, // D11
      { q: 'A box-and-whisker diagram displays:', options: ['Median, quartiles and extreme values','Only the mean','Only the mode','Frequency density'], answer: 0 }, // D1
      { q: 'A dot plot represents frequency using:', options: ['Stacks of dots in lines','Bars of varying width','Sectors of a circle','A single line'], answer: 0 }, // D1
      { q: 'A scatter diagram is used to display:', options: ['Bivariate data','Single-variable categorical data','Frequency densities','Ranked data only'], answer: 0 }, // D6
      { q: 'Standard deviation is a measure of:', options: ['Spread','Central tendency','Correlation','Frequency'], answer: 0 }, // D12
      { q: 'The variance is equal to:', options: ['The square of the standard deviation','The square root of the standard deviation','The range squared','Twice the standard deviation'], answer: 0 }, // D12
      { q: 'Positive correlation means that as one variable increases, the other:', options: ['Tends to increase','Tends to decrease','Stays constant','Becomes categorical'], answer: 0 }, // D6
      { q: 'An outlier is an item of data that is:', options: ['Inconsistent with the rest of the data','Always the largest value','Always an error','The median'], answer: 0 }, // D13
      { q: 'A pie chart is most suitable for showing:', options: ['Proportions of a whole for categorical data','Continuous grouped data','Correlation','Cumulative frequency'], answer: 0 }, // D1
      { q: 'A stem-and-leaf diagram has the advantage that:', options: ['The original data values are retained','It shows correlation','It needs no key','It uses area for frequency'], answer: 0 }, // D1
      { q: 'The arithmetic mean is calculated as:', options: ['The sum of the values divided by how many there are','The middle value','The most common value','The largest minus the smallest'], answer: 0 }, // D10
    ],
    amber: [
      { q: 'The sample variance s² is calculated by dividing Sxx by:', options: ['n − 1','n','n + 1','n²'], answer: 0 }, // D12
      { q: 'One accepted criterion identifies an outlier as a value at least:', options: ['2 standard deviations from the mean','1 standard deviation from the mean','3 standard deviations from the mean','half a standard deviation from the mean'], answer: 0 }, // D13
      { q: 'The other accepted criterion identifies an outlier as a value at least:', options: ['1.5 × IQR beyond the nearer quartile','1.5 × IQR beyond the median','2 × IQR beyond the mean','1 × IQR beyond the nearer quartile'], answer: 0 }, // D13
      { q: 'In a histogram, the height of each bar represents:', options: ['Frequency density, that is frequency ÷ class width','Frequency','Cumulative frequency','Relative position'], answer: 0 }, // D2
      { q: 'In comparative pie charts, the quantity made proportional to frequency is the:', options: ['Area of the circle','Radius of the circle','Circumference','Angle only'], answer: 0 }, // D1
      { q: 'Extrapolation from a regression line may not be justified because:', options: ['The relationship may not continue beyond the range of the data','It is always arithmetically wrong','Regression lines have no gradient','The data become categorical'], answer: 0 }, // D6
      { q: 'A strong correlation between two variables does NOT establish that:', options: ['One variable causes the other','The points lie close to a line','There is an association','The data are bivariate'], answer: 0 }, // D7
      { q: 'For markedly skewed data, the most appropriate measure of central tendency is usually the:', options: ['Median','Mean','Midrange','Range'], answer: 0 }, // D10
      { q: 'A weighted mean is appropriate when:', options: ['The groups being combined are of different sizes','All values are equal','The data are categorical','There are outliers'], answer: 0 }, // D10
      { q: 'Adding a constant 5 to every value in a data set:', options: ['Increases the mean by 5 and leaves the standard deviation unchanged','Increases both the mean and the standard deviation by 5','Leaves the mean unchanged','Multiplies the standard deviation by 5'], answer: 0 }, // D12
      { q: 'Multiplying every value in a data set by 3:', options: ['Multiplies both the mean and the standard deviation by 3','Multiplies the mean by 3 and leaves the standard deviation unchanged','Multiplies the variance by 3','Leaves the mean unchanged'], answer: 0 }, // D12
      { q: 'Compared with the median, the mean is:', options: ['More affected by an extreme outlier','Less affected by an extreme outlier','Equally affected','Never affected'], answer: 0 }, // D10
      { q: 'A scatter diagram showing points scattered with no pattern indicates:', options: ['Little or no correlation between the variables','Strong positive correlation','Strong negative correlation','A causal relationship'], answer: 0 }, // D6
      { q: 'Interpolation means estimating a value:', options: ['Within the range of the observed data','Beyond the range of the observed data','From a different data set','Without any data'], answer: 0 }, // D6
      { q: 'As the size of an unbiased sample increases, diagrams representing it:', options: ['Become more representative of the theoretical probability distribution','Become less representative','Are unaffected','Become categorical'], answer: 0 }, // D5
      { q: 'For grouped continuous data with unequal class widths, the correct diagram is a:', options: ['Histogram','Bar chart','Pie chart','Vertical line chart'], answer: 0 }, // D1
      { q: 'Data cleaning includes dealing with:', options: ['Missing data, errors and outliers','Only outliers','Only the mean','Only categorical data'], answer: 0 }, // D14
      { q: 'A cumulative frequency diagram is most directly used to estimate:', options: ['The median and quartiles','The mode','The variance','The correlation'], answer: 0 }, // D1
      { q: 'The standard deviation of a set of lengths measured in cm has units of:', options: ['cm','cm²','No units','cm⁻¹'], answer: 0 }, // D12
      { q: 'A vertical line chart is most appropriate for:', options: ['Discrete numerical data','Continuous grouped data','Categorical data with unequal groups','Bivariate data'], answer: 0 }, // D1
    ],
    red: [
      { q: 'A data set has mean 50 and standard deviation 4. Using the 2-standard-deviation criterion, an outlier is any value:', options: ['Below 42 or above 58','Below 46 or above 54','Below 40 or above 60','Above 58 only'], answer: 0 }, // D13
      { q: 'A data set has Q1 = 20 and Q3 = 32. Using the 1.5 × IQR criterion, an outlier is any value:', options: ['Below 2 or above 50','Below 8 or above 44','Below 14 or above 38','Below 5 or above 47'], answer: 0 }, // D13
      { q: 'Two comparative pie charts represent frequencies 50 and 200, with area proportional to frequency. The ratio of their radii is:', options: ['1 : 2','1 : 4','1 : 16','2 : 1'], answer: 0 }, // D1
      { q: 'In a histogram, a bar of width 5 has frequency density 3. Its frequency is:', options: ['15','5','3','0.6'], answer: 0 }, // D2
      { q: 'For a data set of 10 values with Σx = 200 and Sxx = 360, the sample standard deviation is:', options: ['√40 ≈ 6.32','√36 = 6.00','√360 ≈ 18.97','40'], answer: 0 }, // D12
      { q: 'In a box plot, the median sits much closer to Q1 than to Q3. This indicates:', options: ['Positive skew','Negative skew','Symmetry','No spread'], answer: 0 }, // D1
      { q: 'A regression line is quoted in a question. The specification expects learners to:', options: ['Interpret it, including interpolation and extrapolation, rather than calculate its equation','Calculate its equation from raw data','Derive it algebraically','Prove it is a best fit'], answer: 0 }, // D6
      { q: 'A correlation coefficient is given in a question. The specification expects learners to:', options: ['Use it to make an inference, not to calculate it or name it','Calculate it from the raw data','Name the particular coefficient used','Prove its properties'], answer: 0 }, // H10
      { q: 'An item recorded as a height of 1750 cm in a set of adult heights should be treated as:', options: ['A likely data-entry error, to be corrected or removed with justification','A genuine value to keep unchanged','The median','Missing data'], answer: 0 }, // D14
      { q: 'Removing a genuine outlier from a data set without justification is poor practice because:', options: ['It discards real information and can distort the conclusions','It always lowers the mean','It changes the units','It makes the data categorical'], answer: 0 }, // D14
    ],
  },

  '2.3': {
    name: 'Probability',
    green: [
      { q: 'For equally likely outcomes, the probability of an event is:', options: ['Favourable outcomes ÷ total outcomes','Total outcomes ÷ favourable outcomes','Always 1/2','The number of favourable outcomes'], answer: 0 }, // u-basic
      { q: 'The complementary event of A is written:', options: ["A′, the event \"not A\"",'A ∩ B','A ∪ B','P(A)'], answer: 0 }, // u-basic
      { q: 'P(A′) equals:', options: ['1 − P(A)','P(A)','1 + P(A)','0'], answer: 0 }, // u-basic
      { q: 'The probability of rolling a 3 on a fair six-sided die is:', options: ['1/6','1/3','1/2','3/6'], answer: 0 }, // u-basic
      { q: 'All probabilities lie in the interval:', options: ['0 to 1 inclusive','−1 to 1','0 to 100','1 to 6'], answer: 0 }, // u-basic
      { q: 'The expected frequency of an event with probability p in n trials is:', options: ['np','n/p','p/n','n + p'], answer: 0 }, // u-basic
      { q: 'Two events are mutually exclusive if they:', options: ['Cannot both occur','Always both occur','Are independent','Have equal probability'], answer: 0 }, // u1
      { q: 'For mutually exclusive events A and B, P(A or B) equals:', options: ['P(A) + P(B)','P(A) × P(B)','P(A) − P(B)','P(A)/P(B)'], answer: 0 }, // u2
      { q: 'Two events are independent if:', options: ['The occurrence of one does not affect the probability of the other','They cannot both occur','They have the same probability','They are complementary'], answer: 0 }, // u1
      { q: 'For independent events A and B, P(A and B) equals:', options: ['P(A) × P(B)','P(A) + P(B)','P(A) − P(B)','P(A|B)'], answer: 0 }, // u3
      { q: 'A tree diagram is most useful for:', options: ['Showing successive events and their probabilities','Displaying continuous data','Finding the median','Calculating variance'], answer: 0 }, // u-basic
      { q: 'A Venn diagram is used to show:', options: ['How events overlap','Frequency density','Correlation','Cumulative frequency'], answer: 0 }, // u5
      { q: 'The probability of an impossible event is:', options: ['0','1','1/2','Undefined'], answer: 0 }, // u-basic
      { q: 'The probability of a certain event is:', options: ['1','0','1/2','100'], answer: 0 }, // u-basic
      { q: 'The probability of getting a head on a fair coin toss is:', options: ['1/2','1/4','1','0'], answer: 0 }, // u-basic
      { q: 'A sample space is:', options: ['The set of all possible outcomes','The set of favourable outcomes','A single outcome','A probability'], answer: 0 }, // u-basic
      { q: 'The notation A ∩ B means:', options: ['A and B both occur','A or B occurs','A does not occur','A given B'], answer: 0 }, // u5
      { q: 'The notation A ∪ B means:', options: ['A or B (or both) occurs','A and B both occur','Neither occurs','A given B'], answer: 0 }, // u5
      { q: 'Drawing a card at random from a standard 52-card pack, P(a heart) is:', options: ['1/4','1/13','1/52','1/2'], answer: 0 }, // u-basic
      { q: 'The notation P(A|B) means:', options: ['The probability of A given that B has occurred','The probability of A and B','The probability of A or B','The probability of B given A'], answer: 0 }, // u6
    ],
    amber: [
      { q: 'For any two events, P(A ∪ B) equals:', options: ['P(A) + P(B) − P(A ∩ B)','P(A) + P(B)','P(A) × P(B)','P(A) − P(B)'], answer: 0 }, // u5
      { q: 'For mutually exclusive events, P(A ∩ B) equals:', options: ['0','1','P(A)P(B)','P(A) + P(B)'], answer: 0 }, // u4
      { q: 'The conditional probability formula is P(A|B) =', options: ['P(A ∩ B)/P(B)','P(A ∩ B)/P(A)','P(A)P(B)','P(A ∪ B)/P(B)'], answer: 0 }, // u6
      { q: 'Events A and B are independent precisely when:', options: ['P(A|B) = P(A)','P(A|B) = P(B)','P(A ∩ B) = 0','P(A ∪ B) = 1'], answer: 0 }, // u7
      { q: 'A bag holds 4 red and 6 blue balls. Two are drawn without replacement. P(both red) is:', options: ['2/15','4/25','1/5','8/45'], answer: 0 }, // u3
      { q: 'A fair coin is tossed three times. P(exactly two heads) is:', options: ['3/8','1/8','1/2','1/4'], answer: 0 }, // u3
      { q: 'P(A) = 0.4, P(B) = 0.5 and A, B are independent. P(A ∩ B) is:', options: ['0.2','0.9','0.1','0.45'], answer: 0 }, // u3
      { q: 'P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Then P(A ∪ B) is:', options: ['0.7','0.9','0.5','0.3'], answer: 0 }, // u5
      { q: 'Two fair dice are rolled. P(total of 7) is:', options: ['1/6','1/12','1/36','5/36'], answer: 0 }, // u-basic
      { q: 'A card is drawn from a standard pack. P(a king or a heart) is:', options: ['16/52','17/52','4/52','13/52'], answer: 0 }, // u5
      { q: 'If P(A|B) = P(A), the events A and B are:', options: ['Independent','Mutually exclusive','Complementary','Certain'], answer: 0 }, // u7
      { q: 'Mutually exclusive events with non-zero probabilities are:', options: ['Never independent','Always independent','Sometimes independent','Complementary'], answer: 0 }, // u4
      { q: 'Venn diagrams in this specification are used for at most:', options: ['Three events','Two events','Four events','Any number of events'], answer: 0 }, // u5
      { q: 'A box holds 3 faulty and 7 working items. One is chosen at random. P(faulty) is:', options: ['0.3','0.7','0.1','0.37'], answer: 0 }, // u-basic
      { q: 'P(A) = 0.6 and P(B|A) = 0.5. Then P(A ∩ B) is:', options: ['0.3','1.1','0.83','0.1'], answer: 0 }, // u6
      { q: 'In 200 trials of an event with probability 0.15, the expected frequency is:', options: ['30','15','200','1.5'], answer: 0 }, // u-basic
      { q: 'Two cards are drawn with replacement from a pack. P(both hearts) is:', options: ['1/16','1/17','1/4','1/52'], answer: 0 }, // u3
      { q: 'A two-way table is useful for calculating:', options: ['Conditional probabilities','Standard deviation','Frequency density','Regression lines'], answer: 0 }, // u6
      { q: 'A fair die is rolled twice. P(at least one six) is:', options: ['11/36','1/3','1/36','25/36'], answer: 0 }, // u-basic
      { q: 'If A and B are independent, then A′ and B are:', options: ['Also independent','Mutually exclusive','Dependent','Complementary'], answer: 0 }, // u7
    ],
    red: [
      { q: 'P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.7. Then P(A|B) equals:', options: ['0.5','0.4','0.2','0.8'], answer: 0 }, // u6
      { q: 'A test is 95% accurate and 1% of a population has the disease. For a positive result, the probability of actually having the disease is closest to:', options: ['0.16','0.95','0.99','0.05'], answer: 0 }, // u6
      { q: 'Given P(B|A), P(A) and P(B), finding P(A|B) is an example of:', options: ['Reverse conditional probability','Mutual exclusivity','Independence testing','Expected frequency'], answer: 0 }, // u6
      { q: 'Three fair coins are tossed. Given that at least one head appears, P(all three are heads) is:', options: ['1/7','1/8','1/3','1/2'], answer: 0 }, // u6
      { q: 'A bag holds 5 red and 3 blue balls. Two are drawn without replacement. P(exactly one red) is:', options: ['15/28','5/14','3/28','9/28'], answer: 0 }, // u3
      { q: 'For events with P(A) = 0.3, P(B) = 0.5, and A, B mutually exclusive, P(A|B) equals:', options: ['0','0.15','0.6','0.8'], answer: 0 }, // u4
      { q: 'A machine has three independent components each working with probability 0.9. P(all three work) is:', options: ['0.729','0.9','0.27','0.999'], answer: 0 }, // u3
      { q: 'For the same machine, P(at least one component fails) is:', options: ['0.271','0.1','0.729','0.3'], answer: 0 }, // u3
      { q: 'If P(A ∩ B) = P(A)P(B) and both probabilities are non-zero, then A and B:', options: ['Are independent but not mutually exclusive','Are mutually exclusive','Are complementary','Cannot both occur'], answer: 0 }, // u4
      { q: 'A student argues that because two events cannot happen together they must be independent. This is:', options: ['Wrong — mutual exclusivity and independence are different, and generally incompatible','Correct','Correct only for fair dice','Correct if the probabilities are equal'], answer: 0 }, // u4
    ],
  },

  '2.4': {
    name: 'Probability Distributions',
    green: [
      { q: 'For X ~ B(n, p), the mean of X is:', options: ['np','npq','p/n','n/p'], answer: 0 }, // R4
      { q: 'Which is NOT required for a binomial model?', options: ['The trials are carried out in a fixed order','A fixed number of trials','Exactly two outcomes per trial','The probability of success is the same each trial'], answer: 0 }, // R1
      { q: 'The notation X ~ B(n, p) means X:', options: ['Has the binomial distribution with parameters n and p','Is Normally distributed','Is a constant','Has mean n'], answer: 0 }, // R1
      { q: 'In a binomial distribution, q is defined as:', options: ['1 − p','p − 1','np','p/n'], answer: 0 }, // R2
      { q: 'The symbol ~ in X ~ B(n, p) is read as:', options: ['"has the distribution"','"is approximately"','"is proportional to"','"tends to"'], answer: 0 }, // R1
      { q: 'A discrete random variable is conventionally written using:', options: ['A capital letter such as X','A lower-case letter only','A Greek letter','A number'], answer: 0 }, // R6
      { q: 'For a discrete random variable, the sum of all the probabilities is:', options: ['1','0','n','p'], answer: 0 }, // R6
      { q: 'A discrete uniform distribution is one in which:', options: ['All outcomes are equally likely','Outcomes become more likely in order','There are exactly two outcomes','The mean is zero'], answer: 0 }, // R7
      { q: 'The Normal distribution is written:', options: ['X ~ N(μ, σ²)','X ~ B(μ, σ)','X ~ N(n, p)','X ~ U(a, b)'], answer: 0 }, // R8
      { q: 'The graph of a Normal distribution is:', options: ['Symmetric and bell-shaped','Skewed to the right','Rectangular','A straight line'], answer: 0 }, // R9
      { q: 'The line of symmetry of a Normal curve is located at:', options: ['The mean','One standard deviation above the mean','Zero','The mode only, which differs from the mean'], answer: 0 }, // R11
      { q: 'The area under a Normal curve represents:', options: ['Probability','Frequency density','The mean','The standard deviation'], answer: 0 }, // R9
      { q: 'The total area under any Normal curve is:', options: ['1','0','μ','σ'], answer: 0 }, // R9
      { q: 'The standard Normal distribution is:', options: ['N(0, 1)','N(1, 0)','N(0, 0)','N(1, 1)'], answer: 0 }, // R10
      { q: 'For X ~ B(20, 0.3), the mean is:', options: ['6','20','0.3','14'], answer: 0 }, // R4
      { q: 'The expected frequency of successes in n trials with probability p is:', options: ['np','n/p','p','n − p'], answer: 0 }, // R5
      { q: 'A binomial distribution arises when the trials are:', options: ['Independent of one another','Dependent on one another','Continuous','Infinite in number'], answer: 0 }, // R1
      { q: 'For a Normal distribution, the mean, median and mode are:', options: ['All equal','All different','In the ratio 1:2:3','Undefined'], answer: 0 }, // R9
      { q: 'The parameter σ in N(μ, σ²) is the:', options: ['Standard deviation','Variance','Mean','Sample size'], answer: 0 }, // R8
      { q: 'A binomial random variable counts:', options: ['The number of successes in a fixed number of trials','The time until the first success','A continuous measurement','The mean of a sample'], answer: 0 }, // R1
    ],
    amber: [
      { q: 'X ~ B(10, 0.4). P(X = 3) is closest to:', options: ['0.215','0.121','0.382','0.045'], answer: 0 }, // R3
      { q: 'A continuity correction is needed when:', options: ['A continuous Normal distribution models discrete data','A discrete distribution models continuous data','The sample size is small','The mean equals the variance'], answer: 0 }, // R8
      { q: 'To standardise a Normal variable X, you calculate:', options: ['Z = (X − μ)/σ','Z = (X − σ)/μ','Z = X/σ','Z = (X + μ)/σ'], answer: 0 }, // R10
      { q: 'X ~ B(12, 0.25). The mean of X is:', options: ['3','12','0.25','9'], answer: 0 }, // R4
      { q: 'In 50 trials with probability of success 0.2, the expected number of successes is:', options: ['10','40','0.2','50'], answer: 0 }, // R5
      { q: 'For X ~ B(8, 0.5), P(X = 0) equals:', options: ['(0.5)⁸','0','0.5','8 × 0.5'], answer: 0 }, // R3
      { q: 'Modelling the number of heads in 20 coin tosses is appropriate with:', options: ['A binomial distribution','A Normal distribution only','A discrete uniform distribution','No distribution'], answer: 0 }, // R1
      { q: 'A Normal model may be inappropriate when the data are:', options: ['Markedly skewed','Symmetric','Continuous','Large in number'], answer: 0 }, // R8
      { q: 'If X ~ N(μ, σ²) and Y = aX + b, then Y is:', options: ['Normally distributed with mean aμ + b','Binomially distributed','Not a standard distribution','Uniformly distributed'], answer: 0 }, // R10
      { q: 'For a Normal distribution, approximately what percentage of values lie within one standard deviation of the mean?', options: ['68%','95%','50%','99.7%'], answer: 0 }, // R9
      { q: 'For a Normal distribution, approximately what percentage of values lie within two standard deviations of the mean?', options: ['95%','68%','99.7%','50%'], answer: 0 }, // R9
      { q: 'X ~ B(5, 0.2). P(X ≥ 1) equals:', options: ['1 − 0.8⁵','0.8⁵','5 × 0.2','0.2⁵'], answer: 0 }, // R3
      { q: 'Using a Normal model for a discrete count X, P(X ≤ 10) becomes:', options: ['P(X < 10.5)','P(X < 10)','P(X < 9.5)','P(X < 11)'], answer: 0 }, // R8
      { q: 'As the sample size increases, a histogram of samples drawn from a Normal population:', options: ['Tends towards the Normal curve','Becomes rectangular','Becomes skewed','Is unaffected'], answer: 0 }, // R9
      { q: 'For X ~ N(100, 25), the standard deviation is:', options: ['5','25','10','100'], answer: 0 }, // R8
      { q: 'X ~ N(60, 16). The value of Z corresponding to X = 68 is:', options: ['2','0.5','8','4'], answer: 0 }, // R10
      { q: 'A probability function given in a table must satisfy:', options: ['All probabilities non-negative and summing to 1','All probabilities equal','A mean of zero','Exactly two outcomes'], answer: 0 }, // R6
      { q: 'The number of sixes in 30 rolls of a fair die is modelled by:', options: ['B(30, 1/6)','B(6, 1/30)','N(30, 1/6)','A discrete uniform distribution'], answer: 0 }, // R1
      { q: 'A binomial model would be inappropriate for drawing balls from a bag without replacement because:', options: ['The probability of success changes between trials','There are more than two outcomes','The trials are continuous','The number of trials is not fixed'], answer: 0 }, // R1
      { q: 'For X ~ N(μ, σ²), P(X > μ) equals:', options: ['0.5','1','0','0.68'], answer: 0 }, // R9
    ],
    red: [
      { q: 'X ~ N(50, 16) and Y = 3X + 2. Then Y has distribution:', options: ['N(152, 144)','N(152, 48)','N(152, 16)','N(150, 144)'], answer: 0 }, // R10
      { q: 'For X ~ N(μ, σ²), the points of inflection of the Normal curve lie at:', options: ['μ ± σ','μ ± 2σ','μ only','μ ± σ²'], answer: 0 }, // R11
      { q: 'X ~ B(20, 0.5) is approximated by a Normal distribution. Using a continuity correction, P(X ≥ 12) becomes:', options: ['P(X > 11.5)','P(X > 12.5)','P(X > 12)','P(X > 11)'], answer: 0 }, // R8
      { q: 'The random variable X has P(X = x) = kx for x = 1, 2, 3, 4. The value of k is:', options: ['0.1','0.25','1','0.4'], answer: 0 }, // R6
      { q: 'X ~ N(80, 25). The value of X corresponding to Z = −1.6 is:', options: ['72','88','78.4','76'], answer: 0 }, // R10
      { q: 'A model assumes a binomial distribution for the number of defective items in a large batch sampled without replacement. This is:', options: ['Acceptable as an approximation when the batch is very large relative to the sample','Exactly correct','Never acceptable','Only correct for p = 0.5'], answer: 0 }, // R13
      { q: 'X ~ N(0, 1). Then P(Z < −1.2) equals:', options: ['1 − P(Z < 1.2)','P(Z < 1.2)','P(Z > 1.2) − 1','0.5 + P(Z < 1.2)'], answer: 0 }, // R10
      { q: 'Critiquing a probability model means:', options: ['Examining whether its assumptions are reasonable in the given context','Recalculating the mean','Increasing the sample size','Removing outliers'], answer: 0 }, // R13
      { q: 'Two independent Normal variables are added. Their sum is:', options: ['Normally distributed','Binomially distributed','Uniformly distributed','Not a standard distribution'], answer: 0 }, // R10
      { q: 'For X ~ B(n, p), doubling n while keeping p fixed changes the mean to:', options: ['2np','np','np/2','4np'], answer: 0 }, // R4
    ],
  },

  '2.5': {
    name: 'Statistical Hypothesis Testing',
    green: [
      { q: 'The null hypothesis H₀ is:', options: ['The default assumption being tested','The conclusion you hope to reach','Always false','The significance level'], answer: 0 }, // H1
      { q: 'The alternative hypothesis H₁ states:', options: ['What is believed if the null hypothesis is rejected','The same as H₀','The sample size','The p-value'], answer: 0 }, // H1
      { q: 'The significance level of a test is:', options: ['The probability of incorrectly rejecting the null hypothesis','The probability H₀ is true','The sample size','The test statistic'], answer: 0 }, // H3
      { q: 'The critical region is also known as the:', options: ['Rejection region','Acceptance region','Confidence interval','Sample space'], answer: 0 }, // H1
      { q: 'If the test statistic falls in the acceptance region, you:', options: ['Do not reject the null hypothesis','Reject the null hypothesis','Accept the alternative hypothesis','Repeat the test'], answer: 0 }, // H6
      { q: 'A 1-tail test is used when the alternative hypothesis specifies:', options: ['A change in one particular direction','A change in either direction','No change','Two populations'], answer: 0 }, // H2
      { q: 'A 2-tail test is used when the alternative hypothesis specifies:', options: ['A change in either direction','An increase only','A decrease only','No change'], answer: 0 }, // H2
      { q: 'The p-value is:', options: ['The probability of a result at least as extreme as the one observed, assuming H₀','The probability H₀ is true','The significance level','The sample proportion'], answer: 0 }, // H1
      { q: 'If the p-value is less than the significance level, you:', options: ['Reject the null hypothesis','Do not reject the null hypothesis','Increase the sample size','Change the hypotheses'], answer: 0 }, // H5
      { q: 'For a binomial hypothesis test, H₀ takes the form:', options: ['p = a particular value','p > a particular value','p ≠ a particular value','n = a particular value'], answer: 0 }, // H4
      { q: 'The test statistic is:', options: ['The quantity calculated from the sample and compared with the critical value','The null hypothesis','The population mean','The significance level'], answer: 0 }, // H1
      { q: 'A hypothesis test uses a sample in order to:', options: ['Make an inference about the population','Describe only the sample','Remove outliers','Calculate a regression line'], answer: 0 }, // H3
      { q: 'A critical value marks the boundary of the:', options: ['Critical region','Sample','Population','Confidence level'], answer: 0 }, // H1
      { q: 'Hypotheses are always stated in terms of:', options: ['A population parameter','A sample statistic','The test statistic','The p-value'], answer: 0 }, // H4
      { q: 'A conclusion to a hypothesis test should always be:', options: ['Stated in the context of the original problem','Given as "accept H₀"','Purely numerical','Left implicit'], answer: 0 }, // H5
      { q: 'A significance level of 5% means the critical region has probability:', options: ['At most 0.05 under H₀','0.95 under H₀','0.05 under H₁','Exactly 0.5'], answer: 0 }, // H3
      { q: 'Correlation measures:', options: ['How close data points lie to a straight line','The gradient of the regression line','The spread of one variable','The sample size'], answer: 0 }, // H10
      { q: 'A rank correlation coefficient measures correlation between:', options: ['The ranks of the data','The raw data values','Two categorical variables','The residuals'], answer: 0 }, // H10
      { q: 'For a test on a population mean, H₀ takes the form:', options: ['μ = a particular value','x̄ = a particular value','σ = a particular value','n = a particular value'], answer: 0 }, // H8
      { q: 'Never rejecting the null hypothesis when it is false is a failure to detect:', options: ['A real effect','An outlier','A sampling frame','A critical value'], answer: 0 }, // H3
    ],
    amber: [
      { q: 'A coin is suspected of being biased towards heads. The hypotheses are:', options: ['H₀: p = 0.5, H₁: p > 0.5, one-tailed','H₀: p = 0.5, H₁: p ≠ 0.5, two-tailed','H₀: p > 0.5, H₁: p = 0.5','H₀: p = 0.5, H₁: p < 0.5'], answer: 0 }, // H2
      { q: 'A coin is suspected of being biased, without saying in which direction. The test should be:', options: ['Two-tailed, with H₁: p ≠ 0.5','One-tailed, with H₁: p > 0.5','One-tailed, with H₁: p < 0.5','Not a hypothesis test'], answer: 0 }, // H2
      { q: 'For random samples of size n drawn from N(μ, σ²), the sample mean has distribution:', options: ['N(μ, σ²/n)','N(μ, σ²)','N(μ/n, σ²)','N(nμ, nσ²)'], answer: 0 }, // H7
      { q: 'The standard deviation of the sample mean for samples of size n is:', options: ['σ/√n','σ/n','σ√n','σ'], answer: 0 }, // H7
      { q: 'For X ~ N(100, 36) and samples of size 9, the sample mean has standard deviation:', options: ['2','4','6','36'], answer: 0 }, // H7
      { q: 'The Central Limit Theorem allows a Normal test for a mean when:', options: ['The sample is large, even if the population is not Normal','The sample is small','The population is binomial only','The variance is unknown and the sample is small'], answer: 0 }, // H7
      { q: 'A test for a single mean using the Normal distribution is valid when:', options: ['The population variance is known, or unknown with a large sample','The sample size is 2','The data are categorical','The variance is always unknown'], answer: 0 }, // H8
      { q: 'In a binomial test at the 5% level, the observed p-value is 0.032. The conclusion is:', options: ['Reject H₀, since 0.032 < 0.05','Do not reject H₀','Accept H₁ with certainty','The test is invalid'], answer: 0 }, // H5
      { q: 'In a binomial test at the 5% level, the observed p-value is 0.08. The conclusion is:', options: ['There is insufficient evidence to reject H₀','Reject H₀','H₀ is proved true','The test is invalid'], answer: 0 }, // H5
      { q: 'For a two-tailed test at the 5% level, each tail carries a probability of:', options: ['0.025','0.05','0.1','0.5'], answer: 0 }, // H2
      { q: 'The acceptance region consists of those values of the test statistic for which:', options: ['H₀ is not rejected','H₀ is rejected','H₁ is proved','The p-value is zero'], answer: 0 }, // H6
      { q: 'Writing "accept H₀" is discouraged because:', options: ['Failing to reject H₀ is not proof that it is true','H₀ is always false','It is too long','It changes the significance level'], answer: 0 }, // H5
      { q: 'Reducing the significance level from 5% to 1% makes rejecting H₀:', options: ['Harder, requiring stronger evidence','Easier','Impossible','Unaffected'], answer: 0 }, // H3
      { q: 'A given correlation coefficient is compared with a critical value in order to:', options: ['Infer whether there is correlation in the population','Calculate the regression line','Find the mean','Identify outliers'], answer: 0 }, // H11
      { q: 'For a correlation test, the null hypothesis is usually that in the population there is:', options: ['No correlation','Perfect correlation','Negative correlation','A causal relationship'], answer: 0 }, // H11
      { q: 'The specification requires learners to know the names of particular correlation coefficients:', options: ['False — names are not required','True for all coefficients','True for rank coefficients only','True only at A Level'], answer: 0 }, // H10
      { q: 'In a test of H₀: μ = 50 against H₁: μ > 50, a sample mean of 47 would:', options: ['Give no evidence at all against H₀ in the stated direction','Lead to rejection of H₀','Prove H₀','Require a two-tailed test'], answer: 0 }, // H8
      { q: 'A binomial test uses n = 20 and H₀: p = 0.3. The test statistic is:', options: ['The observed number of successes','The sample mean','The significance level','The p-value'], answer: 0 }, // H4
      { q: 'A significance level must be chosen:', options: ['Before the data are examined','After seeing the result','From the p-value','From the sample mean'], answer: 0 }, // H3
      { q: '"Association" differs from "correlation" in that association refers to:', options: ['A more general relationship between the variables','A straight-line relationship only','A causal link','Identical values'], answer: 0 }, // H11
    ],
    red: [
      { q: 'A sample of 25 is drawn from N(μ, 100). Under H₀: μ = 40, the sample mean has distribution:', options: ['N(40, 4)','N(40, 100)','N(40, 20)','N(40, 2)'], answer: 0 }, // H7
      { q: 'For that test, a sample mean of 44 gives a test statistic z of:', options: ['2','4','0.4','1'], answer: 0 }, // H8
      { q: 'A result is significant at the 5% level but not at the 1% level. This means the p-value lies:', options: ['Between 0.01 and 0.05','Below 0.01','Above 0.05','Exactly at 0.05'], answer: 0 }, // H5
      { q: 'For a binomial test the probability of the test statistic falling in the rejection region is:', options: ['Usually less than the intended significance level, because the distribution is discrete','Exactly the significance level','Always greater than the significance level','Always zero'], answer: 0 }, // H3
      { q: 'A researcher runs 20 independent tests at the 5% level on data with no real effect. The expected number of significant results is:', options: ['1','0','5','20'], answer: 0 }, // H3
      { q: 'A significant correlation between ice cream sales and drownings does not establish causation because:', options: ['A third variable such as hot weather may influence both','Correlation coefficients are unreliable','The sample was too large','The test was two-tailed'], answer: 0 }, // H11
      { q: 'A test of H₀: p = 0.4 against H₁: p ≠ 0.4 at the 10% level uses critical regions in:', options: ['Both tails, each with probability at most 0.05','One tail with probability 0.10','Both tails, each with probability 0.10','Neither tail'], answer: 0 }, // H2
      { q: 'Increasing the sample size in a test for a mean, with everything else fixed:', options: ['Reduces the standard deviation of the sample mean, making real differences easier to detect','Increases the standard deviation of the sample mean','Has no effect on the test','Raises the significance level'], answer: 0 }, // H7
      { q: 'The conclusion "the coin is definitely biased" after rejecting H₀ at the 5% level is wrong because:', options: ['A hypothesis test gives evidence, never proof','The significance level was too high','Two tails were used','The sample was random'], answer: 0 }, // H5
      { q: 'A hypothesis test for a mean uses the Normal distribution with an unknown population variance and a sample of size 8. This is:', options: ['Not valid here, since the sample is small and the variance unknown','Always valid','Valid because n > 5','Valid only for a two-tailed test'], answer: 0 }, // H8
    ],
  },

  '3.1': {
    name: 'Models & Quantities',
    green: [
      { q: 'In mechanics, modelling an object as a "particle" means treating it as:', options: ['Having mass but no size','Having size but no mass','Being perfectly rigid','Being frictionless'], answer: 0 }, // p32
      { q: 'The modelling assumption "light" means the object:', options: ['Has negligible mass','Has negligible size','Cannot stretch','Is smooth'], answer: 0 }, // p31
      { q: 'The modelling assumption "smooth" means:', options: ['There is no friction','There is no air resistance','The mass is negligible','The object cannot stretch'], answer: 0 }, // p31
      { q: 'The modelling assumption "inextensible" means the object:', options: ['Cannot stretch','Has no mass','Has no friction','Has uniform density'], answer: 0 }, // p31
      { q: 'The modelling assumption "uniform" means:', options: ['Mass is evenly distributed throughout','The object cannot bend','There is no friction','The object is light'], answer: 0 }, // p31
      { q: 'The modelling assumption "rigid" means the object:', options: ['Does not bend or deform','Has no mass','Is smooth','Is inextensible'], answer: 0 }, // p31
      { q: 'The SI base unit of length is the:', options: ['Metre','Centimetre','Kilometre','Newton'], answer: 0 }, // p33
      { q: 'The SI base unit of mass is the:', options: ['Kilogram','Gram','Newton','Tonne'], answer: 0 }, // p33
      { q: 'The SI base unit of time is the:', options: ['Second','Minute','Hour','Hertz'], answer: 0 }, // p33
      { q: 'The SI unit of velocity is:', options: ['m s⁻¹','m s⁻²','N','kg m'], answer: 0 }, // p34
      { q: 'The SI unit of acceleration is:', options: ['m s⁻²','m s⁻¹','N','kg'], answer: 0 }, // p34
      { q: 'The SI unit of force is the:', options: ['Newton (N)','Kilogram (kg)','Joule (J)','Pascal (Pa)'], answer: 0 }, // p34
      { q: 'The SI unit of moment is the:', options: ['Newton metre (N m)','Newton (N)','Joule (J)','Metre (m)'], answer: 0 }, // p35
      { q: 'Weight is:', options: ['A force, measured in newtons','A mass, measured in kilograms','A distance','A speed'], answer: 0 }, // p34
      { q: 'Mass is measured in kilograms and weight in:', options: ['Newtons','Kilograms','Metres','Seconds'], answer: 0 }, // p34
      { q: 'The modelling assumption "thin" is applied to an object whose:', options: ['Thickness is negligible','Mass is negligible','Surface is frictionless','Length is negligible'], answer: 0 }, // p31
      { q: 'Modelling a car as a particle is reasonable when:', options: ['Its size is small compared with the distances involved','It is turning sharply','Its rotation matters','It is at rest'], answer: 0 }, // p32
      { q: 'A modelling assumption is used in order to:', options: ['Simplify a real situation enough to analyse it mathematically','Make the answer exactly correct','Avoid using units','Remove all forces'], answer: 0 }, // p31
      { q: 'The unit N m is used for:', options: ['Moment','Force','Velocity','Mass'], answer: 0 }, // p35
      { q: 'A quantity derived from the base quantities of length, mass and time is called a:', options: ['Derived quantity','Base quantity','Scalar only','Vector only'], answer: 0 }, // p34
    ],
    amber: [
      { q: 'A string modelled as "light and inextensible" has:', options: ['Negligible mass and a fixed length','Mass but a fixed length','Negligible mass and variable length','Friction and mass'], answer: 0 }, // p31
      { q: 'Modelling a pulley as "smooth" means:', options: ['The tension is the same on both sides of the string','The pulley has no mass','The string cannot stretch','The system is in equilibrium'], answer: 0 }, // p31
      { q: 'A 5 kg mass has weight, taking g = 9.8, of:', options: ['49 N','5 N','0.51 N','9.8 N'], answer: 0 }, // p34
      { q: 'Unless otherwise specified, in examinations the value of g should be taken as:', options: ['9.8','10','9.81','9'], answer: 0 }, // F2
      { q: 'Modelling a bridge cable as a particle would be inappropriate because:', options: ['Its length and the distribution of its mass are essential to the problem','It has no weight','It is smooth','It is rigid'], answer: 0 }, // p32
      { q: 'The weight of an object of mass m is:', options: ['mg newtons','m newtons','g newtons','m/g newtons'], answer: 0 }, // p34
      { q: 'A modelling assumption of "no air resistance" is least reasonable for:', options: ['A feather falling a long distance','A dense ball falling a short distance','A block sliding on ice','A stationary mass'], answer: 0 }, // p31
      { q: 'The unit of force, the newton, is equivalent in base units to:', options: ['kg m s⁻²','kg m s⁻¹','kg m² s⁻²','kg s⁻²'], answer: 0 }, // p34
      { q: 'A mass of 200 g expressed in SI base units is:', options: ['0.2 kg','200 kg','2 kg','0.002 kg'], answer: 0 }, // p33
      { q: 'A speed of 36 km h⁻¹ expressed in m s⁻¹ is:', options: ['10','36','3.6','360'], answer: 0 }, // p33
      { q: 'The assumption "the rod is uniform" allows you to take its weight as acting:', options: ['At its midpoint','At one end','At the pivot','Nowhere'], answer: 0 }, // p31
      { q: 'A "long term" modelling assumption refers to:', options: ['Behaviour after a long time has elapsed','A long object','A large force','A heavy object'], answer: 0 }, // p31
      { q: 'Refining a model generally means:', options: ['Removing a simplifying assumption to improve realism','Adding more assumptions','Ignoring the data','Changing the units'], answer: 0 }, // p31
      { q: 'A quantity of 15 N m describes a:', options: ['Moment','Force','Velocity','Mass'], answer: 0 }, // p35
      { q: 'Which of these is a vector quantity?', options: ['Velocity','Speed','Mass','Time'], answer: 0 }, // p34
      { q: 'Which of these is a scalar quantity?', options: ['Mass','Force','Velocity','Acceleration'], answer: 0 }, // p34
      { q: 'A tension of 20 N in a light inextensible string over a smooth pulley is:', options: ['The same throughout the string','Different on each side','Zero','Equal to the weight'], answer: 0 }, // p31
      { q: 'The mass of an object taken to the Moon:', options: ['Stays the same, although its weight changes','Changes, although its weight stays the same','Becomes zero','Doubles'], answer: 0 }, // p34
      { q: 'Modelling a ladder as a "uniform rigid rod" assumes:', options: ['Evenly distributed mass and no bending','Negligible mass','No friction','Variable length'], answer: 0 }, // p31
      { q: 'A force of 1 N gives a mass of 1 kg an acceleration of:', options: ['1 m s⁻²','9.8 m s⁻²','1 m s⁻¹','0'], answer: 0 }, // p34
    ],
    red: [
      { q: 'A 2 kg mass hangs at rest from a light inextensible string. Taking g = 9.8, the tension is:', options: ['19.6 N','2 N','9.8 N','0 N'], answer: 0 }, // p34
      { q: 'An answer given as "the acceleration is 3 kg" is wrong because:', options: ['Acceleration has units m s⁻², not kg','The number is too small','Acceleration cannot be positive','Acceleration is a scalar'], answer: 0 }, // p34
      { q: 'Which modelling assumption is being dropped when air resistance is introduced into a projectile model?', options: ['That the only force acting after release is weight','That the projectile is a particle','That gravity is constant','That the ground is horizontal'], answer: 0 }, // y1
      { q: 'A speed of 5 m s⁻¹ expressed in km h⁻¹ is:', options: ['18','50','1.39','0.3'], answer: 0 }, // p33
      { q: 'Modelling a train as a set of connected particles rather than one particle is necessary when:', options: ['The forces in the couplings between carriages are required','The train moves in a straight line','Friction is negligible','The train is at rest'], answer: 0 }, // n4
      { q: 'Taking g = 10 rather than 9.8 in a calculation will:', options: ['Introduce a small systematic error of about 2%','Give an exactly correct answer','Make no difference','Change the units'], answer: 0 }, // F2
      { q: 'The quantity kg m s⁻² is dimensionally equivalent to:', options: ['A force','An acceleration','A moment','A velocity'], answer: 0 }, // p34
      { q: 'A moment of 12 N m could arise from:', options: ['A force of 4 N acting perpendicular to a rod 3 m from the pivot','A force of 12 N acting at the pivot','A mass of 12 kg','A force of 3 N at 3 m'], answer: 0 }, // p35
      { q: 'The assumption that a string is inextensible is essential in a connected-particle problem because it ensures that:', options: ['Both particles have the same magnitude of acceleration','The tension is zero','The pulley is smooth','The masses are equal'], answer: 0 }, // n4
      { q: 'Stating modelling assumptions matters because:', options: ['The validity of the conclusions depends on them holding in the real situation','It lengthens the answer','It removes the need for units','It guarantees the answer is exact'], answer: 0 }, // p31
    ],
  },

  '3.2': {
    name: 'Kinematics in 1 Dimension',
    green: [
      { q: 'Displacement differs from distance in that displacement:', options: ['Is a vector, so it has direction as well as magnitude','Is always larger','Is measured in seconds','Cannot be negative'], answer: 0 }, // k2
      { q: 'Speed is:', options: ['The magnitude of velocity','A vector quantity','The gradient of a velocity-time graph','Always negative'], answer: 0 }, // k3
      { q: 'The gradient of a displacement-time graph gives:', options: ['Velocity','Acceleration','Distance','Time'], answer: 0 }, // k4
      { q: 'The area under a velocity-time graph gives:', options: ['Displacement','Acceleration','Speed','Force'], answer: 0 }, // k4
      { q: 'The gradient of a velocity-time graph gives:', options: ['Acceleration','Displacement','Distance travelled','Speed'], answer: 0 }, // k4
      { q: 'Which constant-acceleration formula does NOT involve displacement?', options: ['v = u + at','s = ut + ½at²','v² = u² + 2as','s = ½(u + v)t'], answer: 0 }, // k6
      { q: 'The formula s = ut + ½at² gives:', options: ['Displacement in terms of initial velocity, acceleration and time','Velocity in terms of time','Acceleration','Average speed'], answer: 0 }, // k6
      { q: 'The formula v² = u² + 2as does NOT involve:', options: ['Time','Displacement','Acceleration','Initial velocity'], answer: 0 }, // k6
      { q: 'Average speed is calculated as:', options: ['Distance travelled ÷ elapsed time','Displacement ÷ elapsed time','Final velocity ÷ 2','Acceleration × time'], answer: 0 }, // k1
      { q: 'Average velocity is calculated as:', options: ['Overall displacement ÷ elapsed time','Distance travelled ÷ elapsed time','(u + v)/2 always','Acceleration × time'], answer: 0 }, // k1
      { q: 'On a displacement-time graph, constant velocity appears as:', options: ['A straight line','A curve','A horizontal line at zero','A vertical line'], answer: 0 }, // k4
      { q: 'A body starting "from rest" has initial velocity:', options: ['0','Its maximum value','Equal to the acceleration','Undefined'], answer: 0 }, // k6
      { q: 'For a body moving in the positive direction, negative acceleration means it is:', options: ['Slowing down','Speeding up','At rest','Reversing immediately'], answer: 0 }, // k3
      { q: 'On a velocity-time graph, a horizontal line represents:', options: ['Constant velocity','Constant acceleration','Zero displacement','Increasing speed'], answer: 0 }, // k4
      { q: 'The constant acceleration (suvat) formulae may be used only when:', options: ['The acceleration is constant','The velocity is constant','The motion is vertical','The body starts from rest'], answer: 0 }, // k6
      { q: 'Distance travelled compared with the magnitude of displacement is:', options: ['Always greater than or equal to it','Always less than it','Always equal to it','Unrelated'], answer: 0 }, // k2
      { q: 'The units of acceleration are:', options: ['m s⁻²','m s⁻¹','m','s'], answer: 0 }, // k1
      { q: 'A body momentarily at rest has:', options: ['Velocity zero, though its acceleration need not be zero','Both velocity and acceleration zero','Acceleration zero only','Constant velocity'], answer: 0 }, // k3
      { q: 'Position differs from displacement in that position is measured:', options: ['From a fixed origin','From the starting point only','Always in metres','As a scalar'], answer: 0 }, // k2
      { q: 'If velocity is the derivative of displacement, then acceleration is:', options: ['The derivative of velocity','The integral of velocity','The derivative of distance','The integral of displacement'], answer: 0 }, // k5
    ],
    amber: [
      { q: 'A particle starts from rest and accelerates at 2 m s⁻² for 5 s. Its final velocity is:', options: ['10 m s⁻¹','2 m s⁻¹','25 m s⁻¹','5 m s⁻¹'], answer: 0 }, // k6
      { q: 'For that same particle, the displacement after 5 s is:', options: ['25 m','10 m','50 m','5 m'], answer: 0 }, // k6
      { q: 'A stone is dropped from rest. Taking g = 9.8, its speed after 2 s is:', options: ['19.6 m s⁻¹','9.8 m s⁻¹','4.9 m s⁻¹','39.2 m s⁻¹'], answer: 0 }, // k6
      { q: 'For that same stone, the distance fallen in 2 s is:', options: ['19.6 m','9.8 m','39.2 m','4.9 m'], answer: 0 }, // k6
      { q: 'A car travelling at 20 m s⁻¹ decelerates uniformly at 4 m s⁻² to rest. The time taken is:', options: ['5 s','4 s','80 s','2 s'], answer: 0 }, // k6
      { q: 'For that same car, the distance travelled while stopping is:', options: ['50 m','100 m','40 m','25 m'], answer: 0 }, // k6
      { q: 'A body has u = 5 m s⁻¹ and accelerates at 3 m s⁻² over 10 m. Its final speed is closest to:', options: ['9.22 m s⁻¹','8.50 m s⁻¹','35.0 m s⁻¹','6.40 m s⁻¹'], answer: 0 }, // k6
      { q: 'A car slows from 30 m s⁻¹ to rest in 6 s. Its acceleration is:', options: ['−5 m s⁻²','5 m s⁻²','−180 m s⁻²','−0.2 m s⁻²'], answer: 0 }, // k6
      { q: 'For s = t³ − 3t, the velocity at t = 2 is:', options: ['9','2','6','12'], answer: 0 }, // k5
      { q: 'A body travels 100 m north then 100 m south in 40 s. Its average velocity is:', options: ['0 m s⁻¹','5 m s⁻¹','2.5 m s⁻¹','200 m s⁻¹'], answer: 0 }, // k1
      { q: 'For that same journey, the average speed is:', options: ['5 m s⁻¹','0 m s⁻¹','2.5 m s⁻¹','10 m s⁻¹'], answer: 0 }, // k1
      { q: 'A body accelerates uniformly from 10 to 30 m s⁻¹ in 4 s. The distance covered is:', options: ['80 m','40 m','120 m','20 m'], answer: 0 }, // k6
      { q: 'A ball thrown vertically upwards reaches its maximum height when:', options: ['Its velocity is zero','Its acceleration is zero','Its speed is greatest','It returns to the thrower'], answer: 0 }, // k6
      { q: 'A stone falls from rest through 45 m. Taking g = 9.8, the time taken is closest to:', options: ['3.03 s','4.59 s','9.18 s','2.14 s'], answer: 0 }, // k6
      { q: 'On a velocity-time graph, area below the time axis represents:', options: ['Displacement in the negative direction','Distance travelled forwards','Zero displacement','Acceleration'], answer: 0 }, // k4
      { q: 'Two cars travel in the same direction at 30 and 20 m s⁻¹. The velocity of the first relative to the second is:', options: ['10 m s⁻¹','50 m s⁻¹','−10 m s⁻¹','600 m s⁻¹'], answer: 0 }, // k1
      { q: 'Given a = dv/dt, velocity is obtained from acceleration by:', options: ['Integrating with respect to time','Differentiating with respect to time','Multiplying by time','Dividing by time'], answer: 0 }, // k5
      { q: 'A velocity-time graph is a straight line through the origin. This indicates:', options: ['Constant acceleration from rest','Constant velocity','Zero acceleration','Deceleration'], answer: 0 }, // k4
      { q: 'The magnitude of acceleration differs from acceleration in that the magnitude:', options: ['Is never negative','Includes direction','Is measured in m s⁻¹','Is always zero'], answer: 0 }, // k3
      { q: 'A trapezium on a velocity-time graph with parallel sides 4 and 10 and width 6 represents a displacement of:', options: ['42 m','60 m','24 m','84 m'], answer: 0 }, // k4
    ],
    red: [
      { q: 'For s = t³ − 6t² + 9t, the particle is instantaneously at rest at:', options: ['t = 1 and t = 3','t = 0 and t = 3','t = 2 only','t = 1 only'], answer: 0 }, // k5
      { q: 'For that same motion between t = 0 and t = 4, the total distance travelled is:', options: ['12 m','4 m','8 m','0 m'], answer: 0 }, // k5
      { q: 'For that same motion between t = 0 and t = 4, the displacement is:', options: ['4 m','12 m','0 m','8 m'], answer: 0 }, // k5
      { q: 'A ball is thrown vertically upwards at 14.7 m s⁻¹. Taking g = 9.8, its maximum height above the point of projection is:', options: ['11.025 m','14.7 m','22.05 m','7.35 m'], answer: 0 }, // k6
      { q: 'A particle has acceleration a = 6t and velocity 2 m s⁻¹ when t = 0. Its velocity at time t is:', options: ['3t² + 2','6t + 2','3t²','2t³ + 2'], answer: 0 }, // k5
      { q: 'A body travels at 12 m s⁻¹ for 5 s then decelerates uniformly to rest over the next 4 s. The total distance is:', options: ['84 m','60 m','108 m','48 m'], answer: 0 }, // k4
      { q: 'The suvat formulae cannot be applied to a body whose acceleration is a = 6t because:', options: ['The acceleration is not constant, so calculus is needed instead','Time is negative','The units are wrong','The body is at rest'], answer: 0 }, // k5
      { q: 'A particle moves so that its velocity changes sign during the interval considered. Its distance travelled is found by:', options: ['Splitting the interval at the instant of zero velocity and adding the magnitudes','Integrating velocity over the whole interval','Taking the final displacement','Averaging the velocities'], answer: 0 }, // k5
      { q: 'A stone thrown down at 5 m s⁻¹ from a height falls for 2 s. Taking g = 9.8, the distance fallen is:', options: ['29.6 m','19.6 m','9.8 m','24.6 m'], answer: 0 }, // k6
      { q: 'For a body with constant acceleration, the average velocity over an interval equals:', options: ['½(u + v), the mean of the initial and final velocities','The final velocity','The maximum velocity','Zero'], answer: 0 }, // k6
    ],
  },

  '3.3': {
    name: 'Kinematics in 2 Dimensions',
    green: [
      { q: 'The position vector r of a particle gives its position:', options: ['Relative to a fixed origin','Relative to its starting point only','As a scalar distance','At time zero only'], answer: 0 }, // k9
      { q: 'In two dimensions, velocity is obtained from position by:', options: ['Differentiating r with respect to t','Integrating r with respect to t','Dividing r by t','Multiplying r by t'], answer: 0 }, // k10
      { q: 'Acceleration is obtained from velocity by:', options: ['Differentiating v with respect to t','Integrating v with respect to t','Dividing v by t','Taking the magnitude of v'], answer: 0 }, // k10
      { q: 'The speed of a particle with velocity v is:', options: ['|v|, the magnitude of v','The i-component of v','v itself','The direction of v'], answer: 0 }, // k9
      { q: 'The distance of a particle from the origin is:', options: ['|r|','|v|','|a|','r itself'], answer: 0 }, // k9
      { q: 'The vector form of v = u + at applies when:', options: ['The acceleration is constant','The velocity is constant','The motion is in one dimension','The particle is at rest'], answer: 0 }, // k10
      { q: 'The position of B relative to A is given by:', options: ['r_B − r_A','r_A − r_B','r_A + r_B','|r_B| − |r_A|'], answer: 0 }, // k9
      { q: 'A two-dimensional velocity is commonly written in terms of:', options: ['The unit vectors i and j','A single scalar','Degrees only','The unit vector k only'], answer: 0 }, // k10
      { q: 'Average velocity in two dimensions is:', options: ['Overall displacement ÷ elapsed time','Distance travelled ÷ elapsed time','The mean of the speeds','Always zero'], answer: 0 }, // k9
      { q: 'Velocity is obtained from acceleration by:', options: ['Integrating with respect to time','Differentiating with respect to time','Multiplying by time only','Taking the magnitude'], answer: 0 }, // k10
      { q: 'If the acceleration of a particle is zero, its path is:', options: ['A straight line travelled at constant velocity','A parabola','A circle','Undefined'], answer: 0 }, // k10
      { q: 'Motion in the i and j directions under constant acceleration can be treated:', options: ['Independently, component by component','Only together','Only using scalars','Only in one dimension'], answer: 0 }, // k10
      { q: 'The Cartesian equation of the path of a particle is found by:', options: ['Eliminating t between the component equations','Differentiating twice','Integrating the speed','Taking the magnitude of r'], answer: 0 }, // k11
      { q: 'Distance travelled along a curved path is:', options: ['Generally greater than the distance from the starting point','Always equal to the displacement','Always less than the displacement','Always zero'], answer: 0 }, // k9
      { q: 'The direction of motion of a particle at an instant is given by the direction of:', options: ['Its velocity vector','Its position vector','Its acceleration vector','The origin'], answer: 0 }, // k9
      { q: 'The magnitude of the vector 3i + 4j is:', options: ['5','7','12','25'], answer: 0 }, // k9
      { q: 'The vector form of s = ut + ½at² gives:', options: ['Displacement as a vector','Speed as a scalar','Acceleration','Time'], answer: 0 }, // k10
      { q: 'The velocity of A relative to B is:', options: ['v_A − v_B','v_B − v_A','v_A + v_B','|v_A| − |v_B|'], answer: 0 }, // k10
      { q: 'A particle is at the origin when its position vector equals:', options: ['The zero vector','Its velocity','Its acceleration','i + j'], answer: 0 }, // k9
      { q: 'Displacement in two dimensions is:', options: ['A vector from the start point to the end point','The length of the path travelled','Always positive','A scalar'], answer: 0 }, // k9
    ],
    amber: [
      { q: 'A particle has r = 3t i + t² j. Its velocity is:', options: ['3i + 2t j','3t i + 2t j','3i + t² j','6t j'], answer: 0 }, // k10
      { q: 'For that same particle, the speed at t = 2 is:', options: ['5','7','4','3'], answer: 0 }, // k10
      { q: 'For that same particle, the acceleration is:', options: ['2j','3i','2t j','0'], answer: 0 }, // k10
      { q: 'For that same particle, the Cartesian equation of its path is:', options: ['y = x²/9','y = x²','y = 3x²','y = x/3'], answer: 0 }, // k11
      { q: 'A particle has r = 2t i + (t² − 1) j. Its path has Cartesian equation:', options: ['y = x²/4 − 1','y = x² − 1','y = 4x² − 1','y = x/2 − 1'], answer: 0 }, // k11
      { q: 'A particle has a = 2i + 6t j and v = i at t = 0. Its velocity at time t is:', options: ['(1 + 2t)i + 3t² j','2t i + 3t² j','(1 + 2t)i + 6t j','2i + 6t j'], answer: 0 }, // k10
      { q: 'A has velocity 5i + 2j and B has velocity 3i − j. The velocity of A relative to B is:', options: ['2i + 3j','8i + j','−2i − 3j','2i + j'], answer: 0 }, // k10
      { q: 'A has position 3i + 4j and B has position 7i + j. The position of B relative to A is:', options: ['4i − 3j','−4i + 3j','10i + 5j','4i + 3j'], answer: 0 }, // k9
      { q: 'For that same pair, the distance between A and B is:', options: ['5','7','25','1'], answer: 0 }, // k9
      { q: 'A particle starts at 2i + j with constant velocity 3i − j. Its position at t = 4 is:', options: ['14i − 3j','12i − 4j','5i','14i + 5j'], answer: 0 }, // k10
      { q: 'Two particles collide when:', options: ['Their position vectors are equal at the same instant','Their velocities are equal','Their speeds are equal','Their accelerations are equal'], answer: 0 }, // k10
      { q: 'A velocity of 6i + 8j has magnitude and direction:', options: ['10, at 53.1° above the i-direction','14, at 53.1°','10, at 36.9°','48, at 53.1°'], answer: 0 }, // k9
      { q: 'A particle moves with constant velocity. Its path is:', options: ['A straight line','A parabola','A circle','A curve of unknown shape'], answer: 0 }, // k10
      { q: 'For constant acceleration in two dimensions, s = ½(u + v)t is:', options: ['Valid, applied as a vector equation','Only valid in one dimension','Never valid','Valid only for zero acceleration'], answer: 0 }, // k10
      { q: 'A particle has velocity 4i − 3j. Its speed is:', options: ['5','1','7','25'], answer: 0 }, // k9
      { q: 'A particle has r = (t² − 4t)i + 3t j. It crosses the j-axis when:', options: ['t = 0 or t = 4','t = 4 only','t = 2','Never'], answer: 0 }, // k11
      { q: 'A particle has u = 2i, a = j and moves for 4 s. Its displacement is:', options: ['8i + 8j','8i + 4j','2i + 8j','8i + 16j'], answer: 0 }, // k10
      { q: 'Two particles have the same velocity vector. The velocity of one relative to the other is:', options: ['The zero vector','Twice the velocity','Undefined','Their sum'], answer: 0 }, // k10
      { q: 'Vectors r, v and a for a particle moving in a plane all have:', options: ['Two components each','One component each','Three components each','No components'], answer: 0 }, // k9
      { q: 'A particle with a = 0 and u = 3i − 4j travels for 5 s. The distance from its starting point is:', options: ['25','5','15','20'], answer: 0 }, // k10
    ],
    red: [
      { q: 'A particle has r = t² i + (2t − t²) j. Its velocity is zero:', options: ['At no time, since the i-component 2t vanishes only at t = 0 where the j-component is 2','At t = 1','At t = 2','At all times'], answer: 0 }, // k10
      { q: 'A has position (t + 1)i + 2t j and B has position (3t − 1)i + (t + 1) j. They collide when:', options: ['t = 1, since both position vectors equal 2i + 2j','t = 2','t = 0','They never collide'], answer: 0 }, // k10
      { q: 'A particle has r = 4t i + (3t − 5t²) j. Its path is:', options: ['A parabola','A straight line','A circle','A hyperbola'], answer: 0 }, // k11
      { q: 'A particle has a = 6t i − 2j, with v = 0 and r = 0 at t = 0. Its position at time t is:', options: ['t³ i − t² j','3t² i − 2t j','2t³ i − t² j','t³ i − 2t² j'], answer: 0 }, // k10
      { q: 'A boat steers with velocity 4i and the current is 3j. The resultant velocity has magnitude:', options: ['5','7','1','12'], answer: 0 }, // k10
      { q: 'Two ships have constant velocities. The distance between them is least when:', options: ['The relative position vector is shortest, found by minimising its magnitude','Their speeds are equal','Their velocities are equal','They are at the origin'], answer: 0 }, // k10
      { q: 'For a particle with r = (2t)i + (t²)j, the average velocity between t = 0 and t = 2 is:', options: ['2i + 2j','2i + 4j','4i + 4j','i + j'], answer: 0 }, // k9
      { q: 'A particle projected with u = 5i + 12j has initial speed:', options: ['13','17','7','60'], answer: 0 }, // k9
      { q: 'For a particle moving with constant acceleration a from initial velocity u, the vector form v = u + at shows that:', options: ['The change in velocity is always parallel to a','The speed is constant','The path is a straight line','The acceleration varies'], answer: 0 }, // k10
      { q: 'A particle has r = (t − 2)i + (t² − 4)j. It passes through the origin when:', options: ['t = 2','t = 0','t = −2','Never'], answer: 0 }, // k11
    ],
  },

  '3.4': {
    name: 'Projectiles',
    green: [
      { q: 'In standard projectile modelling, the horizontal acceleration is:', options: ['Zero','g downwards','g upwards','Variable'], answer: 0 }, // y1
      { q: 'In standard projectile modelling, the vertical acceleration is:', options: ['g downwards','Zero','g upwards','Variable'], answer: 0 }, // y1
      { q: 'At its maximum height, a projectile has:', options: ['Zero vertical velocity','Zero horizontal velocity','Zero speed','Zero acceleration'], answer: 0 }, // y2
      { q: 'Throughout the flight, the horizontal component of velocity is:', options: ['Constant','Increasing','Decreasing','Zero'], answer: 0 }, // y1
      { q: 'The path of a projectile under standard modelling assumptions is:', options: ['A parabola','A straight line','A circle','A hyperbola'], answer: 0 }, // y4
      { q: 'Which is a standard modelling assumption for projectile motion?', options: ['There is no air resistance','Air resistance is proportional to speed','The projectile is a rigid body','Gravity varies with height'], answer: 0 }, // y1
      { q: 'Standard projectile modelling treats the projectile as:', options: ['A particle','A uniform rod','A rigid lamina','A light string'], answer: 0 }, // y1
      { q: 'For a projectile launched at speed u and angle θ, the horizontal component of the initial velocity is:', options: ['u cos θ','u sin θ','u tan θ','u'], answer: 0 }, // y1
      { q: 'For that same projectile, the vertical component of the initial velocity is:', options: ['u sin θ','u cos θ','u tan θ','u'], answer: 0 }, // y1
      { q: 'On level ground, the range of a projectile is greatest when the angle of projection is:', options: ['45°','30°','60°','90°'], answer: 0 }, // y2
      { q: 'A ball thrown horizontally has initial vertical velocity:', options: ['0','g','u','u sin θ'], answer: 0 }, // y1
      { q: 'Unless otherwise specified, the value of g used in examinations is:', options: ['9.8','10','9.81','9'], answer: 0 }, // F2
      { q: 'Horizontal and vertical motion of a projectile are treated:', options: ['Independently','Only together','As one scalar equation','As a circular motion'], answer: 0 }, // y1
      { q: 'For projection and landing at the same height, the speed on landing equals:', options: ['The speed of projection','Zero','Twice the speed of projection','Half the speed of projection'], answer: 0 }, // y2
      { q: 'Calculations involving air resistance are:', options: ['Excluded from this specification','Required for all projectiles','Required only at A Level','Required only for heavy objects'], answer: 0 }, // y1
      { q: 'The vertical motion of a projectile is an example of:', options: ['Motion with constant acceleration','Motion with constant velocity','Circular motion','Motion with zero acceleration'], answer: 0 }, // y1
      { q: 'The assumption that gravity always acts in the same direction is reasonable when:', options: ['The horizontal distance travelled is small','The projectile is heavy','The speed is large','The angle is 45°'], answer: 0 }, // y1
      { q: 'The time of flight of a projectile on level ground is:', options: ['Twice the time taken to reach maximum height','Equal to the time to maximum height','Independent of the angle','Always 1 second'], answer: 0 }, // y2
      { q: 'The direction of a projectile’s velocity at its highest point is:', options: ['Horizontal','Vertical','At 45°','Undefined'], answer: 0 }, // y2
      { q: 'The Cartesian equation of a projectile path is obtained by:', options: ['Eliminating t between the horizontal and vertical component equations','Differentiating the speed','Integrating the acceleration twice with respect to x','Taking the magnitude of the velocity'], answer: 0 }, // y4
    ],
    amber: [
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal. Its initial horizontal component is closest to:', options: ['17.3 m s⁻¹','10.0 m s⁻¹','20.0 m s⁻¹','11.5 m s⁻¹'], answer: 0 }, // y1
      { q: 'For that same projectile, the initial vertical component is:', options: ['10.0 m s⁻¹','17.3 m s⁻¹','20.0 m s⁻¹','5.0 m s⁻¹'], answer: 0 }, // y1
      { q: 'For that same projectile, taking g = 9.8, the time to reach maximum height is closest to:', options: ['1.02 s','2.04 s','0.51 s','1.77 s'], answer: 0 }, // y2
      { q: 'For that same projectile, the maximum height above the point of projection is closest to:', options: ['5.10 m','10.2 m','2.55 m','15.3 m'], answer: 0 }, // y2
      { q: 'For that same projectile on level ground, the time of flight is closest to:', options: ['2.04 s','1.02 s','4.08 s','3.06 s'], answer: 0 }, // y2
      { q: 'For that same projectile on level ground, the range is closest to:', options: ['35.3 m','17.7 m','20.4 m','70.7 m'], answer: 0 }, // y2
      { q: 'A ball is thrown horizontally at 15 m s⁻¹ from a height of 20 m. Taking g = 9.8, the time to reach the ground is closest to:', options: ['2.02 s','1.43 s','4.08 s','2.86 s'], answer: 0 }, // y2
      { q: 'For that same ball, the horizontal distance travelled before landing is closest to:', options: ['30.3 m','21.4 m','15.0 m','61.2 m'], answer: 0 }, // y2
      { q: 'For a projectile launched at speed u and angle θ, the time of flight on level ground is:', options: ['2u sin θ / g','u sin θ / g','2u cos θ / g','u / g'], answer: 0 }, // y2
      { q: 'For that same projectile, the maximum height is:', options: ['u² sin²θ / (2g)','u² sin θ / (2g)','u² / (2g)','u sin θ / g'], answer: 0 }, // y2
      { q: 'For that same projectile, the range on level ground is:', options: ['u² sin 2θ / g','u² sin θ / g','2u² sin θ / g','u² cos θ / g'], answer: 0 }, // y2
      { q: 'At time t, the vertical component of a projectile’s velocity is:', options: ['u sin θ − gt','u sin θ + gt','u cos θ − gt','−gt'], answer: 0 }, // y2
      { q: 'At time t, the horizontal displacement of a projectile is:', options: ['u cos θ · t','u sin θ · t','u cos θ · t − ½gt²','u t'], answer: 0 }, // y2
      { q: 'At time t, the vertical displacement of a projectile is:', options: ['u sin θ · t − ½gt²','u sin θ · t','u cos θ · t − ½gt²','−½gt²'], answer: 0 }, // y2
      { q: 'A stone dropped from rest and a stone thrown horizontally from the same height:', options: ['Reach the ground at the same time','Reach the ground at different times','Travel the same horizontal distance','Have the same speed on landing'], answer: 0 }, // y1
      { q: 'A projectile launched at 40 m s⁻¹ at 90° to the horizontal, taking g = 9.8, reaches a maximum height of about:', options: ['81.6 m','40.0 m','163 m','20.4 m'], answer: 0 }, // y2
      { q: 'For a projectile on level ground, the angle of the velocity on landing compared with the angle of projection is:', options: ['Equal in magnitude but below the horizontal','Steeper','Shallower','Always 45°'], answer: 0 }, // y2
      { q: 'Two projectiles launched at the same speed at 30° and 60° on level ground have:', options: ['The same range','The same maximum height','The same time of flight','Nothing in common'], answer: 0 }, // y2
      { q: 'The initial speed of a projectile can be found given:', options: ['Its range and angle of projection on level ground','Its mass only','The value of g only','Its colour'], answer: 0 }, // y3
      { q: 'A projectile is launched and lands at a lower level than its start. Compared with level ground, its time of flight is:', options: ['Longer','Shorter','The same','Zero'], answer: 0 }, // y2
    ],
    red: [
      { q: 'The Cartesian equation of a projectile path launched from the origin at speed u and angle θ is:', options: ['y = x tan θ − gx²/(2u² cos²θ)','y = x tan θ − gx²/(2u²)','y = x tan θ + gx²/(2u² cos²θ)','y = x sin θ − gx²/2'], answer: 0 }, // y4
      { q: 'On level ground, two distinct angles of projection give the same range. If one is 25°, the other is:', options: ['65°','35°','45°','75°'], answer: 0 }, // y2
      { q: 'A projectile launched at speed u at 45° on level ground has range:', options: ['u²/g','u²/(2g)','2u²/g','u²/(4g)'], answer: 0 }, // y2
      { q: 'A ball is projected at 25 m s⁻¹ at 36.9° (so sin θ = 0.6). Taking g = 9.8, its maximum height is closest to:', options: ['11.5 m','22.9 m','5.7 m','31.9 m'], answer: 0 }, // y2
      { q: 'A projectile reaches a given height twice during its flight because:', options: ['The quadratic in t for vertical displacement has two roots, on the way up and on the way down','Gravity reverses','The horizontal velocity changes','The path is circular'], answer: 0 }, // y2
      { q: 'For a projectile launched from a height h above level ground, the time of flight is found by solving:', options: ['−h = u sin θ · t − ½gt², taking the positive root','h = u sin θ · t','t = 2u sin θ / g','h = ½gt² only'], answer: 0 }, // y2
      { q: 'Introducing air resistance into a projectile model would generally:', options: ['Reduce both the range and the maximum height','Increase the range','Leave the path a parabola','Have no effect'], answer: 0 }, // y1
      { q: 'A projectile must clear a wall of height 3 m at horizontal distance 20 m. The check required is:', options: ['Substitute x = 20 into the path equation and confirm y > 3','Confirm the range exceeds 20 m only','Confirm the maximum height exceeds 3 m only','Confirm the angle exceeds 45°'], answer: 0 }, // y4
      { q: 'The speed of a projectile at time t is found from its components as:', options: ['√((u cos θ)² + (u sin θ − gt)²)','u cos θ + u sin θ − gt','u − gt','u cos θ only'], answer: 0 }, // y2
      { q: 'A projectile launched at 30° with range 50 m on level ground, taking g = 9.8, has initial speed closest to:', options: ['23.8 m s⁻¹','15.6 m s⁻¹','35.0 m s⁻¹','49.0 m s⁻¹'], answer: 0 }, // y3
    ],
  },

  '3.5': {
    name: 'Forces',
    green: [
      { q: 'The weight of an object acts:', options: ['Vertically downwards','Vertically upwards','Perpendicular to the surface','Along the direction of motion'], answer: 0 }, // F1
      { q: 'The normal reaction acts:', options: ['Perpendicular to the surface of contact','Along the surface','Vertically downwards always','In the direction of motion'], answer: 0 }, // F1
      { q: 'Tension in a string:', options: ['Pulls on the objects at each end','Pushes the objects apart','Acts perpendicular to the string','Is always zero'], answer: 0 }, // F1
      { q: 'A thrust (or compression) in a rod:', options: ['Pushes the objects at each end apart','Pulls them together','Acts perpendicular to the rod','Equals the weight'], answer: 0 }, // F1
      { q: 'A frictional force acts:', options: ['Along the surface, opposing relative motion or tendency to move','Perpendicular to the surface','Vertically downwards','In the direction of motion'], answer: 0 }, // F1
      { q: 'A surface described as "smooth" has:', options: ['No friction','Large friction','A normal reaction of zero','No weight'], answer: 0 }, // F1
      { q: 'A surface described as "rough" means:', options: ['There may be a frictional force','There is no normal reaction','The object cannot move','Weight is negligible'], answer: 0 }, // F1
      { q: 'A particle is in equilibrium if and only if:', options: ['The resultant of the forces acting on it is zero','Its weight is zero','It is at rest at the origin','Friction is zero'], answer: 0 }, // F5
      { q: 'The weight of a body of mass m is:', options: ['mg newtons','m newtons','g newtons','mg kilograms'], answer: 0 }, // F1
      { q: 'Force is:', options: ['A vector quantity measured in newtons','A scalar quantity measured in newtons','A scalar measured in kilograms','A vector measured in kilograms'], answer: 0 }, // F1
      { q: 'The value of the normal reaction:', options: ['Depends on the other forces acting','Always equals the weight','Is always zero','Is always mg cos θ'], answer: 0 }, // F1
      { q: 'The acceleration due to gravity g is:', options: ['Not a universal constant, but often modelled as constant on Earth','A universal constant everywhere','A force','Measured in newtons'], answer: 0 }, // F2
      { q: 'A force diagram should show:', options: ['All the forces acting on the body','Only the weight','Only the applied force','The velocity'], answer: 0 }, // F3
      { q: 'A driving force is:', options: ['The forward force produced by an engine','A resistance to motion','The normal reaction','The weight'], answer: 0 }, // F1
      { q: 'Air resistance is an example of:', options: ['A resistance force opposing motion','A driving force','A normal reaction','A tension'], answer: 0 }, // F1
      { q: 'Concurrent forces are forces that:', options: ['All act through the same point','Are all equal','Are all parallel','Sum to zero'], answer: 0 }, // F4
      { q: 'Vectors representing a set of forces in equilibrium:', options: ['Sum to zero and can be drawn as a closed figure','Sum to the weight','Form an open polygon','Are all parallel'], answer: 0 }, // F8
      { q: 'Resolving a force means:', options: ['Writing it as components in two chosen perpendicular directions','Adding it to another force','Removing it','Finding its moment'], answer: 0 }, // F6
      { q: 'An internal force in a system is one that acts:', options: ['Between parts of the system','From outside the system','Only at the surface','Only vertically'], answer: 0 }, // F3
      { q: 'A body resting on a horizontal table experiences a normal reaction that is:', options: ['Vertically upwards','Vertically downwards','Horizontal','Zero'], answer: 0 }, // F1
    ],
    amber: [
      { q: 'A 5 kg block rests on a horizontal table with no other vertical forces. Taking g = 9.8, the normal reaction is:', options: ['49 N','5 N','9.8 N','24.5 N'], answer: 0 }, // F1
      { q: 'For a body on a plane inclined at θ, the component of weight along the plane is:', options: ['mg sin θ','mg cos θ','mg tan θ','mg'], answer: 0 }, // F6
      { q: 'For that same body, the component of weight perpendicular to the plane is:', options: ['mg cos θ','mg sin θ','mg tan θ','mg'], answer: 0 }, // F6
      { q: 'The relationship between friction F, coefficient μ and normal reaction R is:', options: ['F ≤ μR','F = μR always','F ≥ μR','F = R/μ'], answer: 0 }, // F10
      { q: 'When a body is on the point of sliding, the friction is:', options: ['Limiting, so F = μR','Zero','Greater than μR','Equal to the weight'], answer: 0 }, // F10
      { q: 'With μ = 0.4 and R = 50 N, the maximum possible frictional force is:', options: ['20 N','125 N','50 N','0.4 N'], answer: 0 }, // F10
      { q: 'A force of 20 N acts at 30° above the horizontal. Its horizontal component is closest to:', options: ['17.3 N','10.0 N','20.0 N','11.5 N'], answer: 0 }, // F6
      { q: 'For that same force, the vertical component is:', options: ['10.0 N','17.3 N','20.0 N','5.0 N'], answer: 0 }, // F6
      { q: 'A 10 kg block on a plane inclined at 30°. Taking g = 9.8, the component of weight down the plane is:', options: ['49 N','84.9 N','98 N','56.6 N'], answer: 0 }, // F6
      { q: 'For that same block, the normal reaction perpendicular to the plane is closest to:', options: ['84.9 N','49 N','98 N','56.6 N'], answer: 0 }, // F6
      { q: 'The angle of friction λ satisfies:', options: ['tan λ = μ','sin λ = μ','cos λ = μ','λ = μ'], answer: 0 }, // F11
      { q: 'The coefficient of friction μ:', options: ['Has no units','Is measured in newtons','Is measured in kg','Is always greater than 1'], answer: 0 }, // F10
      { q: 'Two perpendicular forces of 3 N and 4 N have a resultant of magnitude:', options: ['5 N','7 N','1 N','12 N'], answer: 0 }, // F4
      { q: 'A force given as 3i + 4j newtons has magnitude:', options: ['5 N','7 N','12 N','25 N'], answer: 0 }, // F4
      { q: 'Pressing down on a block on a horizontal surface:', options: ['Increases the normal reaction and so the maximum friction','Decreases the normal reaction','Leaves the normal reaction unchanged','Removes friction'], answer: 0 }, // F1
      { q: 'For a body in equilibrium on an inclined plane, it is usually easiest to resolve:', options: ['Parallel and perpendicular to the plane','Horizontally and vertically only','Along the weight only','In no particular direction'], answer: 0 }, // F6
      { q: 'A person stands in a lift accelerating upwards. The normal reaction on them is:', options: ['Greater than their weight','Less than their weight','Equal to their weight','Zero'], answer: 0 }, // F1
      { q: 'For a body in equilibrium, resolving in any direction gives:', options: ['A total component of zero in that direction','A total equal to the weight','A total equal to mg sin θ','No information'], answer: 0 }, // F5
      { q: 'A block on a smooth plane inclined at 30° is released. Taking g = 9.8, its acceleration down the plane is:', options: ['4.9 m s⁻²','9.8 m s⁻²','8.49 m s⁻²','2.45 m s⁻²'], answer: 0 }, // F6
      { q: 'Friction acts on a stationary block being pushed but not moving. Its magnitude equals:', options: ['The applied force, up to the limiting value μR','μR always','Zero','The weight'], answer: 0 }, // F10
    ],
    red: [
      { q: 'A block rests on a rough plane inclined at angle θ with coefficient of friction μ. It remains at rest provided:', options: ['tan θ ≤ μ','tan θ ≥ μ','sin θ ≤ μ','cos θ ≤ μ'], answer: 0 }, // F11
      { q: 'A 4 kg block on a rough horizontal surface has μ = 0.25. Taking g = 9.8, the horizontal force needed to make it start to slide is closest to:', options: ['9.8 N','39.2 N','2.45 N','19.6 N'], answer: 0 }, // F10
      { q: 'Pulling a block along a horizontal surface with a force at an angle above the horizontal:', options: ['Reduces the normal reaction and so reduces the friction','Increases the normal reaction','Leaves friction unchanged','Removes the weight'], answer: 0 }, // F10
      { q: 'A block in limiting equilibrium on a rough inclined plane has friction acting:', options: ['Up the plane, opposing the tendency to slide down','Down the plane','Perpendicular to the plane','Vertically upwards'], answer: 0 }, // F10
      { q: 'Three concurrent forces hold a particle in equilibrium. Drawn head-to-tail they form:', options: ['A closed triangle','An open path','A straight line always','A circle'], answer: 0 }, // F8
      { q: 'A 2 kg block on a rough plane inclined at 20° with μ = 0.5. Taking g = 9.8, the block:', options: ['Remains at rest, since tan 20° ≈ 0.364 < 0.5','Slides down','Accelerates up the plane','Is in limiting equilibrium'], answer: 0 }, // F11
      { q: 'The inverse square law for gravitation is:', options: ['Excluded from this specification','Required for all force problems','Used to find the normal reaction','Used to find friction'], answer: 0 }, // F2
      { q: 'A body hangs in equilibrium from two strings at different angles. The number of independent equations obtained by resolving is:', options: ['Two, one in each of two perpendicular directions','One','Three','Four'], answer: 0 }, // F9
      { q: 'A crate is pushed at constant velocity across a rough floor. The applied horizontal force equals:', options: ['The frictional force, since the acceleration is zero','The weight','The normal reaction','Zero'], answer: 0 }, // F9
      { q: 'A lift descends and decelerates to rest. During the deceleration, the normal reaction on a passenger is:', options: ['Greater than their weight','Less than their weight','Equal to their weight','Zero'], answer: 0 }, // F1
    ],
  },

  '3.6': {
    name: "Newton's Laws of Motion",
    green: [
      { q: "Newton's first law states that an object continues at rest or in uniform motion in a straight line unless:", options: ['It is acted on by a resultant force','Its mass changes','It is on a rough surface','Gravity acts on it'], answer: 0 }, // n1
      { q: "Newton's second law is expressed as:", options: ['F = ma, where F is the resultant force','F = mv','F = m/a','F = ma², where a is speed'], answer: 0 }, // n1
      { q: "Newton's third law states that when one object exerts a force on another:", options: ['There is a reaction equal in magnitude and opposite in direction','The reaction is smaller','There is no reaction','The reaction acts on the same object'], answer: 0 }, // n1
      { q: 'The equation of motion for a particle is:', options: ["The application of Newton's second law to that particle",'A kinematics graph','The definition of weight','A statement of equilibrium only'], answer: 0 }, // n2
      { q: 'Rearranging F = ma gives acceleration as:', options: ['a = F/m','a = mF','a = m/F','a = F − m'], answer: 0 }, // n3
      { q: 'If the resultant force on a body is zero, the body:', options: ['Remains at rest or continues at constant velocity','Must be at rest','Must be accelerating','Has zero mass'], answer: 0 }, // n1
      { q: 'Doubling the resultant force on a fixed mass:', options: ['Doubles the acceleration','Halves the acceleration','Leaves acceleration unchanged','Doubles the mass'], answer: 0 }, // n3
      { q: 'Doubling the mass while keeping the resultant force fixed:', options: ['Halves the acceleration','Doubles the acceleration','Leaves acceleration unchanged','Doubles the force'], answer: 0 }, // n3
      { q: 'The two forces in a Newton\'s third law pair act:', options: ['On different objects','On the same object','In the same direction','Only when moving'], answer: 0 }, // n1
      { q: 'For two particles connected by a light inextensible string, the magnitudes of their accelerations are:', options: ['Equal','In the ratio of their masses','Always zero','Unrelated'], answer: 0 }, // n4
      { q: 'For a light inextensible string over a smooth pulley, the tension is:', options: ['The same throughout the string','Different on each side','Equal to the total weight','Zero'], answer: 0 }, // n4
      { q: 'A body in free fall, ignoring resistance, has acceleration:', options: ['g downwards','Zero','g upwards','Depending on its mass'], answer: 0 }, // n3
      { q: "Newton's second law applied in two dimensions is:", options: ['A vector equation, so it may be applied component by component','A scalar equation only','Not applicable','Valid only when a = 0'], answer: 0 }, // n7
      { q: 'When a whole system is treated as one body, internal forces:', options: ['Cancel in pairs and can be ignored','Must be added twice','Become external','Double'], answer: 0 }, // n4
      { q: 'Problems involving variable mass are:', options: ['Excluded from this specification','Required at A Level','Required at AS Level','Required for pulleys'], answer: 0 }, // n3
      { q: 'The F in F = ma must be:', options: ['The resultant of all forces acting','Any one of the forces','The weight only','The largest force'], answer: 0 }, // n3
      { q: 'Equilibrium is the special case of the equation of motion in which:', options: ['a = 0','m = 0','F is largest','v = 0 only'], answer: 0 }, // n3
      { q: 'A train made of an engine and carriages may be modelled as:', options: ['A set of connected particles','A single rigid lamina','A projectile','A light string'], answer: 0 }, // n4
      { q: 'The weight of a body of mass m used in an equation of motion is:', options: ['mg','m','g','m/g'], answer: 0 }, // n3
      { q: 'An external force on a system is one exerted:', options: ['By something outside the system','Between parts of the system','Only by gravity','Only by friction'], answer: 0 }, // n4
    ],
    amber: [
      { q: 'A resultant force of 20 N acts on a mass of 4 kg. The acceleration is:', options: ['5 m s⁻²','80 m s⁻²','0.2 m s⁻²','16 m s⁻²'], answer: 0 }, // n3
      { q: 'A mass of 2 kg accelerates at 3 m s⁻². The resultant force is:', options: ['6 N','1.5 N','0.67 N','5 N'], answer: 0 }, // n3
      { q: 'For a person of mass m in a lift accelerating upwards at a, the equation of motion is:', options: ['R − mg = ma','mg − R = ma','R + mg = ma','R = mg'], answer: 0 }, // n3
      { q: 'For that same person in a lift accelerating downwards at a, the equation is:', options: ['mg − R = ma','R − mg = ma','R + mg = ma','R = 0'], answer: 0 }, // n3
      { q: 'Two masses m₁ > m₂ hang over a smooth pulley. Their common acceleration is:', options: ['(m₁ − m₂)g/(m₁ + m₂)','(m₁ + m₂)g/(m₁ − m₂)','m₁g/m₂','g'], answer: 0 }, // n5
      { q: 'A 3 kg block is pulled along a smooth horizontal surface by a force of 12 N. Its acceleration is:', options: ['4 m s⁻²','36 m s⁻²','0.25 m s⁻²','9.8 m s⁻²'], answer: 0 }, // n3
      { q: 'For a block of mass m on a rough surface pulled by force P, the equation of motion is:', options: ['P − μR = ma','P + μR = ma','P = ma','μR = ma'], answer: 0 }, // n3
      { q: 'A car of mass 1000 kg has a driving force of 3000 N and resistance 1000 N. Its acceleration is:', options: ['2 m s⁻²','3 m s⁻²','4 m s⁻²','1 m s⁻²'], answer: 0 }, // n3
      { q: 'A book rests on a table. The reaction to the book\'s weight, in the third-law sense, is:', options: ['The gravitational pull of the book on the Earth','The normal reaction from the table','The weight of the table','Friction'], answer: 0 }, // n1
      { q: 'A body of mass 5 kg falls with air resistance 19 N. Taking g = 9.8, its acceleration is closest to:', options: ['6.0 m s⁻²','9.8 m s⁻²','3.8 m s⁻²','13.6 m s⁻²'], answer: 0 }, // n3
      { q: 'A resultant force 6i + 8j N acts on a 2 kg particle. Its acceleration has magnitude:', options: ['5 m s⁻²','10 m s⁻²','20 m s⁻²','2.5 m s⁻²'], answer: 0 }, // n7
      { q: 'A body reaches terminal velocity when:', options: ['The resistance equals the weight, so the resultant force is zero','The weight becomes zero','The acceleration equals g','It stops falling'], answer: 0 }, // n3
      { q: 'For connected particles, writing an equation for the whole system is useful because:', options: ['The internal tension cancels, leaving only external forces','It gives the tension directly','It removes the weight','Acceleration disappears'], answer: 0 }, // n4
      { q: 'To find the tension in a connecting string, you should:', options: ['Write the equation of motion for one particle separately','Use the whole system only','Ignore the acceleration','Set the tension to zero'], answer: 0 }, // n5
      { q: 'A train of total mass 50 000 kg accelerates at 0.2 m s⁻² with resistance 5000 N. The driving force is:', options: ['15 000 N','10 000 N','5000 N','20 000 N'], answer: 0 }, // n4
      { q: 'A lift moving upwards at constant velocity exerts on a passenger a normal reaction that is:', options: ['Equal to their weight','Greater than their weight','Less than their weight','Zero'], answer: 0 }, // n3
      { q: 'A 2 kg particle on a smooth plane inclined at 30° has acceleration down the plane, taking g = 9.8, of:', options: ['4.9 m s⁻²','9.8 m s⁻²','2.45 m s⁻²','8.49 m s⁻²'], answer: 0 }, // n3
      { q: 'A car decelerates under a resistance of 2000 N with mass 800 kg. Its deceleration is:', options: ['2.5 m s⁻²','0.4 m s⁻²','4 m s⁻²','1.6 m s⁻²'], answer: 0 }, // n3
      { q: 'Applying F = ma to a body requires the mass to be:', options: ['Constant, since variable mass is excluded here','Changing','Zero','Equal to the weight'], answer: 0 }, // n3
      { q: 'A particle is in equilibrium under three forces. Applying F = ma gives:', options: ['Resultant force zero, since a = 0','Resultant force mg','a = g','Nothing useful'], answer: 0 }, // n3
    ],
    red: [
      { q: 'Masses of 5 kg and 3 kg hang over a smooth pulley. Taking g = 9.8, the acceleration is:', options: ['2.45 m s⁻²','4.9 m s⁻²','1.225 m s⁻²','9.8 m s⁻²'], answer: 0 }, // n5
      { q: 'For that same system, the tension in the string is:', options: ['36.75 N','49 N','29.4 N','24.5 N'], answer: 0 }, // n5
      { q: 'A 4 kg block on a smooth table is connected over a smooth pulley to a 2 kg hanging mass. Taking g = 9.8, the acceleration is closest to:', options: ['3.27 m s⁻²','4.9 m s⁻²','1.63 m s⁻²','9.8 m s⁻²'], answer: 0 }, // n5
      { q: 'For that same system, the tension is closest to:', options: ['13.1 N','19.6 N','26.1 N','6.5 N'], answer: 0 }, // n5
      { q: 'An engine of mass 20 000 kg pulls a carriage of mass 10 000 kg with total driving force 45 000 N and no resistance. The force in the coupling is:', options: ['15 000 N','45 000 N','30 000 N','22 500 N'], answer: 0 }, // n5
      { q: 'A student says "the table pushes up on the book and the book\'s weight pushes down, so these are a third-law pair". This is wrong because:', options: ['A third-law pair acts on two different bodies, but both of these act on the book','The forces are unequal','Weight is not a force','The book is not moving'], answer: 0 }, // n1
      { q: 'A 70 kg passenger is in a lift accelerating upwards at 2 m s⁻². Taking g = 9.8, the normal reaction is:', options: ['826 N','686 N','140 N','546 N'], answer: 0 }, // n3
      { q: 'A particle of mass 0.5 kg has resultant force 3i − 4j N. Its acceleration is:', options: ['6i − 8j m s⁻²','1.5i − 2j m s⁻²','3i − 4j m s⁻²','10 m s⁻²'], answer: 0 }, // n7
      { q: 'A 1200 kg car travelling at 20 m s⁻¹ brakes to rest in 40 m. The constant braking force required is:', options: ['6000 N','3000 N','12 000 N','600 N'], answer: 0 }, // n3
      { q: 'In a connected-particle problem, the assumption that the pulley is smooth is needed so that:', options: ['The tension is the same on both sides of the string','The accelerations differ','The string can stretch','The masses are equal'], answer: 0 }, // n4
    ],
  },

  '3.7': {
    name: 'Rigid Bodies',
    green: [
      { q: 'The moment of a force about a point is measured in:', options: ['N m','N','m s⁻²','J'], answer: 0 }, // F13
      { q: 'The moment of a force about a point equals:', options: ['Force × perpendicular distance from the point','Force × time','Force ÷ distance','Force + distance'], answer: 0 }, // F13
      { q: 'A force of 12 N acts perpendicular to a rod, 0.5 m from the pivot. The moment about the pivot is:', options: ['6 N m','24 N m','12 N m','0.5 N m'], answer: 0 }, // F13
      { q: 'A rigid body is in equilibrium when:', options: ['The resultant force is zero and the sum of the moments about any one point is zero','The resultant force is zero only','The sum of moments about the centre of mass is zero only','All forces act through a single point'], answer: 0 }, // F14
      { q: 'A system of forces can have a turning effect on:', options: ['A rigid body','A particle only','A light string','A smooth surface'], answer: 0 }, // F15
      { q: 'For the purpose of calculating its moment, the weight of a body acts through:', options: ['Its centre of mass','One end','The pivot','The point of application of the largest force'], answer: 0 }, // F16
      { q: 'For a uniform rod, the centre of mass is at:', options: ['Its midpoint','One end','A quarter of the way along','The pivot'], answer: 0 }, // F16
      { q: 'A force acting through the pivot has a moment about that pivot of:', options: ['Zero','Its full magnitude','Half its magnitude','Infinity'], answer: 0 }, // F13
      { q: 'Moments are described as clockwise or anticlockwise because:', options: ['A turning effect has a sense of rotation','Forces are scalars','Distance has direction','Moments are always positive'], answer: 0 }, // F15
      { q: 'A rigid body is one that:', options: ['Does not bend or deform','Has no mass','Is frictionless','Cannot rotate'], answer: 0 }, // F14
      { q: 'A lamina is:', options: ['A flat body whose thickness is negligible','A rod','A light string','A particle'], answer: 0 }, // F13
      { q: 'Increasing the perpendicular distance from the pivot, with the force unchanged:', options: ['Increases the moment','Decreases the moment','Leaves the moment unchanged','Reverses the moment'], answer: 0 }, // F13
      { q: 'Although N m and J have the same base units, moment is quoted in:', options: ['N m, to distinguish it from energy','J','N','m'], answer: 0 }, // F13
      { q: 'For a body in equilibrium, taking moments about a point gives:', options: ['Total clockwise moment equals total anticlockwise moment','Total moment equals the weight','Total moment equals mg','No information'], answer: 0 }, // F14
      { q: 'In this specification, the forces considered in moments problems are:', options: ['Coplanar and perpendicular to the rod or edge','In three dimensions','Always parallel to the rod','Always at 45°'], answer: 0 }, // F13
      { q: 'The bodies considered in this section are:', options: ['Rods and rectangular laminas, possibly non-uniform','Spheres only','Particles only','Any shape'], answer: 0 }, // F13
      { q: 'A seesaw balances when:', options: ['The moments about the pivot are equal and opposite','The masses are equal','The distances are equal','The weights are zero'], answer: 0 }, // F14
      { q: 'When taking moments, a sensible choice of pivot is a point:', options: ['Through which an unknown force acts, eliminating it','As far away as possible','At the centre of mass always','Outside the body'], answer: 0 }, // F14
      { q: 'Equilibrium of a rigid body requires how many types of condition?', options: ['Two — forces and moments','One — forces only','One — moments only','Three'], answer: 0 }, // F14
      { q: 'A force of 15 N acts perpendicular to a rod at 2 m from the pivot. Its moment is:', options: ['30 N m','7.5 N m','17 N m','13 N m'], answer: 0 }, // F13
    ],
    amber: [
      { q: 'A light rod is pivoted at its centre. A 30 N weight hangs 2 m from the pivot on one side. A 40 N weight balances it at a distance of:', options: ['1.5 m','2.5 m','1.0 m','2.0 m'], answer: 0 }, // F14
      { q: 'A uniform rod of weight 100 N and length 6 m rests on supports at its two ends. Each reaction is:', options: ['50 N','100 N','25 N','60 N'], answer: 0 }, // F16
      { q: 'A uniform rod of length 2L has its weight acting at a distance from one end of:', options: ['L','2L','L/2','0'], answer: 0 }, // F16
      { q: 'For a rigid body in equilibrium, the sum of the moments is zero about:', options: ['Any point you choose','The centre of mass only','A support only','The midpoint only'], answer: 0 }, // F14
      { q: 'A uniform plank of weight 200 N and length 4 m rests on supports at each end, with a 100 N load at its midpoint. Each reaction is:', options: ['150 N','100 N','300 N','200 N'], answer: 0 }, // F14
      { q: 'Taking moments about a support is useful because:', options: ['The reaction at that support has zero moment there','It doubles the moment','It removes the weight','It makes the body uniform'], answer: 0 }, // F14
      { q: 'Two children of weights 300 N and 500 N sit on a seesaw pivoted at its centre. If the lighter sits 2 m from the pivot, the heavier must sit at:', options: ['1.2 m','1.5 m','3.33 m','2.0 m'], answer: 0 }, // F14
      { q: 'For a non-uniform rod, the centre of mass:', options: ['Is not at the midpoint and must be given or found','Is always at the midpoint','Does not exist','Is at one end'], answer: 0 }, // F16
      { q: 'A rod rests on two supports. The sum of the two reactions equals:', options: ['The total downward force on the rod','Half the weight','Twice the weight','Zero'], answer: 0 }, // F14
      { q: 'A 40 N force acts perpendicular to a 3 m rod at its far end from the pivot. The moment is:', options: ['120 N m','13.3 N m','43 N m','37 N m'], answer: 0 }, // F13
      { q: 'A uniform beam is supported at one end and held by a vertical force at the other. Taking moments about the supported end eliminates:', options: ['The reaction at that end','The weight','The applied force','Nothing'], answer: 0 }, // F14
      { q: 'For a body in equilibrium under parallel vertical forces, resolving vertically gives:', options: ['Total upward force equals total downward force','Total moment equals zero','The centre of mass','The pivot position'], answer: 0 }, // F14
      { q: 'Finding the centre of mass of a composite body is:', options: ['Excluded from this specification','Required at A Level','Required at AS Level','Required for laminas only'], answer: 0 }, // F16
      { q: 'A vector treatment of moments is:', options: ['Excluded from this specification','Required for rods','Required for laminas','Required in three dimensions'], answer: 0 }, // F13
      { q: 'In moments questions, the centre of mass may be found:', options: ['From symmetry, from the information given, or by taking moments','Only by integration','Only by experiment','Never'], answer: 0 }, // F16
      { q: 'A uniform rectangular lamina has its centre of mass:', options: ['At the intersection of its diagonals','At one corner','At the midpoint of one edge','Outside the lamina'], answer: 0 }, // F16
      { q: 'A rod pivoted at one end with a load at the other requires, to stay horizontal:', options: ['An additional force providing a balancing moment','No additional force','Zero weight','A smooth pivot only'], answer: 0 }, // F14
      { q: 'Doubling both the force and its distance from the pivot changes the moment by a factor of:', options: ['4','2','1','1/2'], answer: 0 }, // F13
      { q: 'A rigid body under a single non-zero force applied away from its centre of mass will:', options: ['Not be in equilibrium, since both the resultant force and the moment are non-zero','Be in equilibrium','Only translate','Only rotate'], answer: 0 }, // F14
      { q: 'The reaction at a support becomes zero when the body:', options: ['Is on the point of tipping about the other support','Is uniform','Is horizontal','Has zero weight'], answer: 0 }, // F14
    ],
    red: [
      { q: 'A non-uniform rod AB of length 4 m and weight 50 N rests horizontally on supports at A and B. The reaction at A is 20 N. The centre of mass is, from A:', options: ['2.4 m','1.6 m','2.0 m','2.5 m'], answer: 0 }, // F16
      { q: 'A uniform plank of length 6 m and weight 300 N rests on supports 1 m from each end. A child of weight 200 N stands at one end. The reaction at the nearer support is:', options: ['400 N','250 N','150 N','350 N'], answer: 0 }, // F14
      { q: 'A uniform rod of weight W and length 2a rests on a support at distance a/2 from one end. It will tip about that support unless:', options: ['An additional force provides a balancing moment','The rod is light','The support is smooth','The rod is vertical'], answer: 0 }, // F14
      { q: 'A uniform beam of weight 400 N and length 8 m is supported at one end and at a point 6 m from that end. The reaction at the far support is closest to:', options: ['267 N','200 N','133 N','400 N'], answer: 0 }, // F14
      { q: 'A rod is in equilibrium under three vertical forces. The number of independent equations available is:', options: ['Two — one resolving, one taking moments','One','Three','Four'], answer: 0 }, // F14
      { q: 'A non-uniform rod of weight 80 N and length 5 m rests on supports at its ends, with reactions 30 N and 50 N. Its centre of mass is, from the 30 N end:', options: ['3.125 m','1.875 m','2.5 m','2.0 m'], answer: 0 }, // F16
      { q: 'A plank overhangs a support. A person walking out along the overhang causes tipping when:', options: ['The anticlockwise moment about the support exceeds the clockwise moment','Their weight exceeds the plank\'s weight','The plank becomes non-uniform','The reaction doubles'], answer: 0 }, // F14
      { q: 'Taking moments about two different points for a body in equilibrium gives:', options: ['Two valid equations, though they may not be independent of the resolving equation','Contradictory results','Only one equation','No information'], answer: 0 }, // F14
      { q: 'A uniform rod of weight 60 N and length 4 m is hinged at A and held horizontal by a vertical string at B. The tension in the string is:', options: ['30 N','60 N','120 N','15 N'], answer: 0 }, // F14
      { q: 'For that same rod, the vertical force at the hinge A is:', options: ['30 N upwards','60 N upwards','30 N downwards','Zero'], answer: 0 }, // F14
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_QUESTIONS; }
