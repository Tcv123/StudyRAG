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

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_QUESTIONS; }
