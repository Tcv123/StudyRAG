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
      { q: 'Proof by contradiction begins by:', options: ['Drawing a diagram','Assuming the statement is true','Assuming the statement to be proved is false','Checking small cases'], answer: 2 }, // p3
      { q: 'The symbol ⟹ means:', options: ['Equals','If and only if','Approximately equals','Implies'], answer: 3 }, // p1
      { q: 'The symbol ⇔ means:', options: ['If and only if','Implies','Proportional to','Much greater than'], answer: 0 }, // p1
      { q: 'A counter-example is used to:', options: ['Restate a theorem','Disprove a general statement','Prove a general statement','Define a term'], answer: 1 }, // p2
      { q: 'The symbol ∀ means:', options: ['Is a subset of','The empty set','For all','There exists'], answer: 2 }, // p1
      { q: 'The symbol ∃ means:', options: ['For all','Therefore','Is an element of','There exists'], answer: 3 }, // p1
      { q: 'Which value disproves "all odd numbers are prime"?', options: ['9','3','5','7'], answer: 0 }, // p2
      { q: 'Proof by deduction proceeds by:', options: ['Listing every case','Logical steps from given assumptions to a conclusion','Testing a few values','Assuming the negation'], answer: 1 }, // p1
      { q: 'A conjecture is:', options: ['A definition','An axiom','A statement believed true but not yet proved','A proved theorem'], answer: 2 }, // p1
      { q: 'A smaller result proved in order to establish a larger theorem is called:', options: ['A conjecture','An axiom','A counter-example','A lemma'], answer: 3 }, // p1
      { q: 'To prove deductively that the sum of two even numbers is even, the two numbers are written as:', options: ['2a and 2b','2a and 2a','a and a + 2','2a + 1 and 2b + 1'], answer: 0 }, // p1
      { q: 'The irrationality of √2 is proved by:', options: ['Contradiction','Exhaustion','Counter-example','Direct calculation'], answer: 0 }, // p3
      { q: "Euclid's classical theorem about primes states that:", options: ['There are exactly 100 primes','There are infinitely many primes','Every prime is odd','Primes become evenly spaced'], answer: 1 }, // p3
      { q: 'To disprove a general statement you need:', options: ['A proof by exhaustion','Infinitely many cases','One counter-example','Two counter-examples'], answer: 2 }, // p2
      { q: 'In the implication "if P then Q", P is called the:', options: ['Conclusion','Contrapositive','Converse','Hypothesis'], answer: 3 }, // p1
      { q: 'The contrapositive of "if P then Q" is:', options: ['If not Q then not P','If Q then P','If not P then not Q','If P then not Q'], answer: 0 }, // p1
      { q: 'Proof by exhaustion is possible only when:', options: ['The variable is real','The number of cases is finite','The statement involves primes','The statement is false'], answer: 1 }, // p1
      { q: 'A statement assumed true without proof is called:', options: ['A theorem','A corollary','An axiom','A lemma'], answer: 2 }, // p1
    ],
    amber: [
      { q: 'The claim "n² − n + 41 is prime for every positive integer n" is disproved by:', options: ['n = 2','n = 10','It cannot be disproved','n = 41, since the expression equals 41²'], answer: 3 }, // p2
      { q: 'In proving √2 irrational by contradiction, the contradiction arises because:', options: ['p and q are both shown to be even, contradicting p/q being in lowest terms','p² is shown to be odd','q is shown to be zero','√2 is shown to be greater than 1'], answer: 0 }, // p3
      { q: 'If P ⟹ Q is true and Q is false, then:', options: ['Q is true','P is false','P is true','P is undetermined'], answer: 1 }, // p1
      { q: 'Which value disproves "2ⁿ − 1 is prime for every positive integer n"?', options: ['n = 3, giving 7','n = 5, giving 31 (a prime)','n = 4, giving 15 = 3 × 5','n = 2, giving 3'], answer: 2 }, // p2
      { q: 'Deductively, the sum of two odd numbers 2a + 1 and 2b + 1 simplifies to:', options: ['2(a + b) + 1, which is always odd','4ab, which is even','a + b, of unknown parity','2(a + b + 1), which is even'], answer: 3 }, // p1
      { q: 'The contrapositive of "if n² is odd then n is odd" is:', options: ['If n is even then n² is even','If n is odd then n² is odd','If n² is even then n is even','If n is not odd then n² is odd'], answer: 0 }, // p1
      { q: 'Which value disproves "if n is prime then 2ⁿ − 1 is prime"?', options: ['n = 7','n = 11, since 2047 = 23 × 89','n = 3','n = 5'], answer: 1 }, // p2
      { q: 'To prove the product of two consecutive integers is always even, the key observation is:', options: ['Their sum is odd','Their difference is 1, which is odd','One of n and n + 1 must be even','Both are even'], answer: 2 }, // p1
      { q: '"Without loss of generality" (WLOG) means:', options: ['The remaining cases are ignored','All constraints are dropped','Induction is being used','A particular case may be assumed because the argument applies symmetrically to the others'], answer: 3 }, // p1
      { q: 'The statement "x² = 4 ⟹ x = 2" is false because:', options: ['x could equal −2','x could be irrational','4 is not a square','x must be positive'], answer: 0 }, // p1
      { q: 'The negation of "all swans are white" is:', options: ['Some swans are white','There exists a swan that is not white','No swan is white','All swans are black'], answer: 1 }, // p2
      { q: 'Expanding (2n + 1)² − (2n − 1)² gives:', options: ['4n²','8n + 2','8n','2'], answer: 2 }, // p1
      { q: 'The fact "if a² is divisible by 3 then a is divisible by 3" is the key step in proving:', options: ['√4 is irrational','3 is prime','There are infinitely many primes','√3 is irrational'], answer: 3 }, // p3
      { q: 'Which value disproves "n² + n + 1 is prime for every positive integer n"?', options: ['n = 4, giving 21 = 3 × 7','n = 1, giving 3','n = 2, giving 7','n = 3, giving 13 (a prime)'], answer: 0 }, // p2
      { q: 'To prove by exhaustion that n² leaves remainder 0 or 1 on division by 4, it is enough to consider:', options: ['n positive only','n even and n odd','n prime and n composite','n < 10'], answer: 1 }, // p1
      { q: 'Deductively, the sum of three consecutive integers n − 1, n, n + 1 is:', options: ['n³','Always prime whenever n is odd','3n, which is divisible by 3','3n + 1'], answer: 2 }, // p1
      { q: 'A proof that assumes the negation and derives an impossibility is called:', options: ['Proof by exhaustion','Proof by deduction','Disproof by counter-example','Proof by contradiction'], answer: 3 }, // p3
      { q: 'The converse of "if P then Q" is:', options: ['If Q then P','If not P then not Q','If not Q then not P','P if and only if Q'], answer: 0 }, // p1
      { q: 'Which statement is true for every integer n?', options: ['n² = n','n² ≥ n','n² > n','n² ≤ n'], answer: 1 }, // p1
      { q: 'To prove "the square of any odd number is odd", write the odd number as:', options: ['k + 1, then square','k², then double','2k + 1, then square to get 2(2k² + 2k) + 1','2k, then square'], answer: 2 }, // p1
    ],
    red: [
      { q: "Euclid's proof of infinitely many primes takes a finite list p₁…p_n and forms N = p₁p₂⋯p_n + 1. The contradiction follows because:", options: ['N is always prime','N is always composite','N is divisible by every p_i','N is divisible by no prime in the list, so N is prime or has a prime factor outside it'], answer: 3 }, // p3
      { q: 'In the proof that √2 is irrational, the assumption that p/q is in lowest terms is essential because:', options: ['It is the assumption the final contradiction violates','It makes q positive','It ensures p is prime, so that p² has exactly three factors','It guarantees p > q'], answer: 0 }, // p3
      { q: 'The √2 argument fails if copied to prove √4 irrational because the step that breaks down is:', options: ['"q is an integer", which fails','"p² divisible by 4 ⟹ p divisible by 4", which is false (take p = 2)','"p/q in lowest terms", which cannot be assumed when the surd is a whole number','"4q² = p²", which is not valid'], answer: 1 }, // p3
      { q: 'To prove by exhaustion that n² ≡ 1 (mod 3) whenever 3 does not divide n, the cases required are:', options: ['n < 3 only','n even and n odd, since these cover all integers','n ≡ 1 (mod 3) and n ≡ 2 (mod 3)','n prime and n composite'], answer: 2 }, // p1
      { q: 'The negation of "∀x ∃y such that P(x, y)" is:', options: ['∀x ∀y, P(x, y) is false','∃x ∃y such that P(x, y) is false for both','∀x ∃y such that P(x, y) is false','∃x such that ∀y, P(x, y) is false'], answer: 3 }, // p2
      { q: 'To prove √2 + √3 is irrational, the standard opening move is:', options: ['Assume it equals a rational r, then square to isolate a surd','Compute its decimal expansion and show it never terminates or repeats','Use proof by exhaustion','Find a counter-example'], answer: 0 }, // p3
      { q: 'Fermat conjectured that 2^(2ⁿ) + 1 is prime for all n. This is disproved by:', options: ['n = 4, since 2^(2⁴) + 1 = 65537 is composite','n = 5, since 4294967297 = 641 × 6700417','n = 2','n = 3'], answer: 1 }, // p2
      { q: 'The cleanest route to proving "if 2ⁿ − 1 is prime then n is prime" is:', options: ['Exhaustion over n ≤ 20','A counter-example','Prove the contrapositive: if n is composite then 2ⁿ − 1 factorises','Direct deduction from the primality of 2ⁿ − 1, factorising it for each prime n'], answer: 2 }, // p1
      { q: 'A proof by contradiction is logically valid because:', options: ['Every mathematical statement is true','Counter-examples are impossible','Contradictions are always resolvable','A statement and its negation cannot both hold, so a false negation forces the statement'], answer: 3 }, // p3
      { q: 'Disproving "every odd number ≥ 3 is the sum of a prime and a power of 2" requires:', options: ['One explicit odd number for which no such decomposition exists','A general algebraic argument','Checking all odd numbers','Proof by exhaustion'], answer: 0 }, // p2
    ],
  },

  '1.2': {
    name: 'Algebra',
    green: [
      { q: 'Simplify √50.', options: ['10√5','5√2','2√5','25√2'], answer: 1 }, // a10
      { q: 'Rationalise the denominator of 1/√5.', options: ['√5','1/5','√5/5','5√5'], answer: 2 }, // a11
      { q: 'For x ≠ 0, x⁰ equals:', options: ['0','x','Undefined','1'], answer: 3 }, // a13
      { q: 'x⁻ᵃ is equal to:', options: ['1/xᵃ','−xᵃ','xᵃ','0'], answer: 0 }, // a13
      { q: 'x^(1/2) is equal to:', options: ['2x','√x','x²','1/x'], answer: 1 }, // a13
      { q: 'The discriminant of ax² + bx + c is:', options: ['4ac − b²','−b/2a','b² − 4ac','b² + 4ac'], answer: 2 }, // a3
      { q: 'If the discriminant is positive, the quadratic has:', options: ['One repeated root','No real roots','Three roots','Two distinct real roots'], answer: 3 }, // a3
      { q: 'If the discriminant is zero, the quadratic has:', options: ['One repeated root','Two distinct real roots','No real roots','Infinitely many roots'], answer: 0 }, // a3
      { q: 'If the discriminant is negative, the quadratic has:', options: ['One real root','No real roots','Two distinct real roots','One repeated root'], answer: 1 }, // a3
      { q: 'Solve 2x + 6 = 14.', options: ['x = 3','x = 7','x = 4','x = 10'], answer: 2 }, // a-star
      { q: 'Factorise x² − 9.', options: ['(x − 3)²','(x − 9)(x + 1)','(x + 9)(x − 1)','(x − 3)(x + 3)'], answer: 3 }, // a2
      { q: 'Solve x² − 5x + 6 = 0.', options: ['x = 2 or x = 3','x = −2 or x = −3','x = 1 or x = 6','x = 5 or x = 6'], answer: 0 }, // a2
      { q: 'xᵃ × xᵇ equals:', options: ['2x^(a+b)','x^(a+b)','x^(ab)','x^(a−b)'], answer: 1 }, // a12
      { q: '(xᵃ)ᵇ equals:', options: ['x^(a−b)','xᵃ + xᵇ','x^(ab)','x^(a+b)'], answer: 2 }, // a12
      { q: 'Make r the subject of C = 2πr.', options: ['r = 2πC','r = C − 2π','r = 2π/C','r = C/(2π)'], answer: 3 }, // a-star
      { q: 'If y is directly proportional to x, then:', options: ['y = kx for some constant k','y = k/x','y = k + x','y = kx²'], answer: 0 }, // a14
      { q: 'If y is inversely proportional to x, then:', options: ['y = kx²','y = k/x','y = kx','y = k − x'], answer: 1 }, // a14
      { q: 'Solve 3x < 12.', options: ['x < 36','x > 36','x < 4','x > 4'], answer: 2 }, // a7
      { q: 'Simplify √8 + √2.', options: ['√10','2√10','4√2','3√2'], answer: 3 }, // a10
      { q: 'Solve x² = 16.', options: ['x = ±4','x = 4','x = 8','x = ±8'], answer: 0 }, // a2
    ],
    amber: [
      { q: 'Rationalise the denominator of 1/(3 + √5).', options: ['3 − √5','(3 − √5)/4','(3 + √5)/4','(3 − √5)/14'], answer: 1 }, // a11
      { q: 'Complete the square for x² + 6x + 2.', options: ['(x + 6)² − 34','(x − 3)² − 7','(x + 3)² − 7','(x + 3)² + 7'], answer: 2 }, // a2
      { q: 'Solve x² − 4x − 5 > 0.', options: ['−1 < x < 5','x < 5','x > −1','x < −1 or x > 5'], answer: 3 }, // a8
      { q: 'For what values of k does kx² + 4x + k = 0 have a repeated root?', options: ['k = ±2','k = 2 only','k = ±4','k = 0'], answer: 0 }, // a3
      { q: 'Solve simultaneously y = x + 1 and x² + y² = 25.', options: ['(5, 6) and (−5, −4)','(3, 4) and (−4, −3)','(3, 4) only','(4, 5) and (−3, −2)'], answer: 1 }, // a5
      { q: 'Solve 2^(2x) − 5·2ˣ + 4 = 0.', options: ['x = 2 only','x = 1 or x = 2','x = 0 or x = 2','x = 1 or x = 4'], answer: 2 }, // a2
      { q: 'Simplify (2x²y³)³.', options: ['6x⁶y⁹','8x⁵y⁶','2x⁶y⁹','8x⁶y⁹'], answer: 3 }, // a12
      { q: 'Solve |x − 3| < 2.', options: ['1 < x < 5','x < 1 or x > 5','−5 < x < −1','x < 5'], answer: 0 }, // a7
      { q: 'y is inversely proportional to x². If y = 4 when x = 3, find y when x = 6.', options: ['16','1','2','8'], answer: 1 }, // a14
      { q: 'Solve x³ − 4x = 0.', options: ['x = 0 or 4','x = 0 or 2','x = 0, 2 or −2','x = 2 or −2'], answer: 2 }, // a2
      { q: 'Evaluate 8^(2/3).', options: ['16','6','2','4'], answer: 3 }, // a13
      { q: 'Solve 3/(x − 1) = x + 1.', options: ['x = 2 or x = −2','x = 2 only','x = 1 or x = 3','x = 4'], answer: 0 }, // a2
      { q: 'Find k so that x² + kx + 9 = 0 has equal roots.', options: ['k = 9','k = ±6','k = 6 only','k = ±3'], answer: 1 }, // a3
      { q: 'Solve simultaneously 2x + 3y = 7 and 3x − y = 5.', options: ['x = 3, y = 4','x = −1, y = 3','x = 2, y = 1','x = 1, y = 2'], answer: 2 }, // a4
      { q: 'In set notation, "x < 2 or x > 5" is written:', options: ['{x : x < 2} ∩ {x : x > 5}','{x : 2 < x < 5}','{x : x > 2}','{x : x < 2} ∪ {x : x > 5}'], answer: 3 }, // a9
      { q: 'Express (5x + 1)/((x + 1)(x − 2)) in partial fractions.', options: ['(4/3)/(x + 1) + (11/3)/(x − 2)','1/(x + 1) + 4/(x − 2)','2/(x + 1) + 3/(x − 2)','(4/3)/(x + 1) − (11/3)/(x − 2)'], answer: 0 }, // a15
      { q: 'The point of intersection of two graphs corresponds to:', options: ['A root of one equation only','A simultaneous solution of their equations','A turning point','An asymptote'], answer: 1 }, // a6
      { q: 'Solve 9ˣ = 3^(x+1).', options: ['x = 3','x = 1/2','x = 1','x = 0'], answer: 2 }, // a12
      { q: 'Rationalise (√7 − √3)/(√7 + √3).', options: ['(10 + 2√21)/4','√7 − √3','(4 − 2√21)/10','(10 − 2√21)/4'], answer: 3 }, // a11
      { q: 'Solve (x − 1)(x + 2)(x − 3) = 0.', options: ['x = 1, −2 or 3','x = −1, 2 or −3','x = 1 or 3','x = 0'], answer: 0 }, // a2
    ],
    red: [
      { q: 'Solve x⁴ − 5x² + 4 = 0.', options: ['x = ±1 only','x = ±1 or x = ±2','x = 1 or x = 4 (as x²)','x = ±2 only'], answer: 1 }, // a2
      { q: 'Express (2x + 3)/((x + 1)²(x − 2)) in partial fractions. The correct form to assume is:', options: ['A/(x + 1) + B/(x − 2)','(Ax + B)/(x + 1)² + C/(x − 2)','A/(x + 1) + B/(x + 1)² + C/(x − 2)','A/(x + 1)² + B/(x − 2)'], answer: 2 }, // a15
      { q: 'For which k does kx² + (k + 3)x + 4 = 0 have no real roots?', options: ['k < 1 or k > 9','k > 9 only','k < 0','1 < k < 9'], answer: 3 }, // a3
      { q: 'Solve (2x + 1)/(x − 3) > 1.', options: ['x < −4 or x > 3','−4 < x < 3','x > 3 only','x < 3'], answer: 0 }, // a8
      { q: 'When solving an inequality involving an algebraic fraction, multiplying both sides by (x − 3) is unsafe because:', options: ['It changes the degree','Its sign is unknown, so the inequality may reverse','It may equal zero only','It introduces surds'], answer: 1 }, // a8
      { q: 'The condition for the line y = mx + c to be tangent to y = x² is:', options: ['m + c = 0','c = 0','m² + 4c = 0','m² − 4c = 0'], answer: 2 }, // a3
      { q: 'Solve |2x + 1| = |x − 3|.', options: ['x = 2/3 only','x = 4 or x = −2/3','x = −4 only','x = −4 or x = 2/3'], answer: 3 }, // a7
      { q: 'Simplify (√3 + 1)/(√3 − 1) + (√3 − 1)/(√3 + 1).', options: ['4','2√3','2','8'], answer: 0 }, // a11
      { q: 'If y ∝ √x and x is multiplied by 9, then y is:', options: ['Unchanged','Multiplied by 3','Multiplied by 9','Divided by 3'], answer: 1 }, // a14
      { q: 'The equation x² + bx + c = 0 has roots α and β. Then α + β and αβ equal:', options: ['−b and c','b and −c','b and c','−b and −c'], answer: 0 }, // a2
    ],
  },

  '1.3': {
    name: 'Functions',
    green: [
      { q: 'The factor theorem states that if f(a) = 0 then:', options: ['f(x) has no roots','x = a is an asymptote','(x − a) is a factor of f(x)','(x + a) is a factor of f(x)'], answer: 2 }, // f-poly
      { q: 'The remainder when f(x) is divided by (x − a) is:', options: ['f(−a)','0','f(0)','f(a)'], answer: 3 }, // f-poly
      { q: 'The degree of 3x⁴ − 2x + 1 is:', options: ['4','3','1','5'], answer: 0 }, // f-poly
      { q: 'If f(x) = x² + 1, then f(3) equals:', options: ['4','10','7','9'], answer: 1 }, // f1
      { q: 'The domain of a function is:', options: ['The set of roots','The set of asymptotes','The set of permitted inputs','The set of outputs'], answer: 2 }, // f1
      { q: 'The range of a function is:', options: ['The set of inputs','Its degree','Its gradient','The set of outputs it takes'], answer: 3 }, // f1
      { q: '|−5| equals:', options: ['5','−5','0','25'], answer: 0 }, // f-mod
      { q: 'For x < 0, |x| equals:', options: ['x²','−x','x','0'], answer: 1 }, // f-mod
      { q: 'A one-to-one function has the property that:', options: ['It has no inverse','It is always increasing','Each output comes from exactly one input','Each input gives two outputs'], answer: 2 }, // f1
      { q: 'The notation fg(x) means:', options: ['g(f(x))','f(x) × g(x)','f(x) + g(x)','f(g(x))'], answer: 3 }, // f1
      { q: 'If f(x) = 2x + 1, the inverse function f⁻¹(x) is:', options: ['(x − 1)/2','2x − 1','1/(2x + 1)','(x + 1)/2'], answer: 0 }, // f1
      { q: 'The graph of y = |x| has the shape of:', options: ['A hyperbola','A V with vertex at the origin','A parabola','A straight line'], answer: 1 }, // f-mod
      { q: 'For f(x) = x² with domain all real numbers, the range is:', options: ['All real numbers','y ≤ 0','y ≥ 0','y > 0'], answer: 2 }, // f1
      { q: 'If (x − 2) is a factor of f(x), then:', options: ['f(−2) = 0','f(0) = 2','f(2) = 2','f(2) = 0'], answer: 3 }, // f-poly
      { q: 'If f(x) = x + 3, then ff(x) equals:', options: ['x + 6','x + 3','x² + 9','2x + 3'], answer: 0 }, // f1
      { q: 'The graph of an inverse function is the reflection of the original in the line:', options: ['y = −x','y = x','y = 0','x = 0'], answer: 1 }, // f1
      { q: 'Which of these is a many-to-one function?', options: ['y = x³','y = x − 4','y = x²','y = 2x + 1'], answer: 2 }, // f1
      { q: 'The domain of f(x) = 1/x must exclude:', options: ['x = 1','x < 0','x > 0','x = 0'], answer: 3 }, // f1
      { q: 'Solve |x| = 7.', options: ['x = 7 or x = −7','x = 7','x = −7','No solution'], answer: 0 }, // f-mod
      { q: 'Multiplying a degree 2 polynomial by a degree 3 polynomial gives a polynomial of degree:', options: ['2','5','6','3'], answer: 1 }, // f-poly
    ],
    amber: [
      { q: 'Fully factorise x³ − 6x² + 11x − 6.', options: ['(x − 1)(x − 2)(x + 3)','(x − 6)(x² + 1)','(x − 1)(x − 2)(x − 3)','(x + 1)(x + 2)(x + 3)'], answer: 2 }, // f-poly
      { q: 'The range of f(x) = x² − 4x + 7 is:', options: ['y ≥ 7','y ≥ 0','All real numbers','y ≥ 3'], answer: 3 }, // f1
      { q: 'If f(x) = 2x + 3 and g(x) = x², then fg(x) equals:', options: ['2x² + 3','(2x + 3)²','2x³','4x² + 9'], answer: 0 }, // f1
      { q: 'If f(x) = 2x + 3 and g(x) = x², then gf(x) equals:', options: ['2x² + 9','(2x + 3)²','2x² + 3','4x² + 3'], answer: 1 }, // f1
      { q: 'Solve |2x − 1| = 5.', options: ['x = 2 or x = −3','x = ±5','x = 3 or x = −2','x = 3 only'], answer: 2 }, // f-mod
      { q: 'Solve |x + 2| > 3.', options: ['−5 < x < 1','x > 1 only','x < −5 only','x < −5 or x > 1'], answer: 3 }, // f-mod
      { q: 'The inverse of f(x) = 3/(x − 2) is:', options: ['3/x + 2','3/(x + 2)','(x − 2)/3','3x − 2'], answer: 0 }, // f1
      { q: 'Find the remainder when x³ + 2x² − x + 4 is divided by (x + 1).', options: ['0','6','4','2'], answer: 1 }, // f-poly
      { q: 'Verify that (x + 3) is a factor of x³ + 2x² − 5x − 6 by evaluating:', options: ['f(0), which gives −6','f(1), which gives −8','f(−3), which gives 0','f(3), which gives 0'], answer: 2 }, // f-poly
      { q: 'The vertex of y = |x − 2| is at:', options: ['(0, 2)','(−2, 0)','(0, −2)','(2, 0)'], answer: 3 }, // f-mod
      { q: 'The domain of f(x) = √(x − 3) is:', options: ['x ≥ 3','x > 3','x ≤ 3','All real numbers'], answer: 0 }, // f1
      { q: 'To make f(x) = x² invertible, a suitable restricted domain is:', options: ['−1 ≤ x ≤ 1','x ≥ 0','All real numbers','x ≠ 0'], answer: 1 }, // f1
      { q: 'For f(x) = 1/(x − 1) with x > 1, the range is:', options: ['y < 0','All real numbers','y > 0','y ≥ 0'], answer: 2 }, // f1
      { q: 'Solve |x − 1| = |x + 3|.', options: ['x = 1','x = −3','No solution','x = −1'], answer: 3 }, // f-mod
      { q: 'Dividing a polynomial by a quadratic gives a remainder of degree at most:', options: ['1','2','0','3'], answer: 0 }, // f-poly
      { q: 'The graph of y = |f(x)| is obtained from y = f(x) by:', options: ['Stretching it vertically','Reflecting the parts below the x-axis in the x-axis','Reflecting the whole graph in the y-axis','Translating it upwards'], answer: 1 }, // f-mod
      { q: 'The graph of y = f(|x|) is obtained from y = f(x) by:', options: ['Translating it left','Stretching it horizontally','Reflecting the x ≥ 0 part in the y-axis','Reflecting the whole graph in the x-axis'], answer: 2 }, // f-mod
      { q: 'Fully factorise 2x³ − x² − 13x − 6.', options: ['(x + 3)(2x − 1)(x − 2)','(x − 3)(x + 1)(2x + 2)','(2x − 3)(x + 1)(x + 2)','(x − 3)(2x + 1)(x + 2)'], answer: 3 }, // f-poly
      { q: 'A function is invertible if and only if it is:', options: ['One-to-one on its domain','Many-to-one','Continuous','Increasing'], answer: 0 }, // f1
      { q: 'If f(x) = eˣ, then f is one-to-one because:', options: ['It has an asymptote','No horizontal line meets the graph more than once','It is always positive','It passes through (0, 1)'], answer: 1 }, // f1
    ],
    red: [
      { q: 'Solve |2x − 3| < |x|.', options: ['−3 < x < 1','x > 3','1 < x < 3','x < 1 or x > 3'], answer: 2 }, // f-mod
      { q: 'For f(x) = x² − 4x with domain x ≥ 2, the inverse is:', options: ['f⁻¹(x) = 2 − √(x + 4)','f⁻¹(x) = √(x + 4)','f⁻¹(x) = (x + 4)/2','f⁻¹(x) = 2 + √(x + 4)'], answer: 3 }, // f1
      { q: 'Fully factorise x³ − 3x + 2.', options: ['(x − 1)²(x + 2)','(x − 1)(x + 2)²','(x + 1)²(x − 2)','(x − 1)(x − 2)(x + 1)'], answer: 0 }, // f-poly
      { q: 'The range of f(x) = x/(x² + 1) for real x is:', options: ['0 < y < 1','−1/2 ≤ y ≤ 1/2','y ≥ 0','All real numbers'], answer: 1 }, // f1
      { q: 'Solve |x² − 4| = 3.', options: ['x = ±√7 only','x = ±3','x = ±1 or x = ±√7','x = ±1 only'], answer: 2 }, // f-mod
      { q: 'The inverse of f(x) = (2x + 1)/(x − 3) is:', options: ['(3x − 1)/(x + 2)','(x − 3)/(2x + 1)','(2x − 1)/(x + 3)','(3x + 1)/(x − 2)'], answer: 3 }, // f1
      { q: 'The equation |x − 1| + |x + 2| = 3 has:', options: ['Infinitely many solutions, namely −2 ≤ x ≤ 1','Exactly two solutions','Exactly one solution','No solutions'], answer: 0 }, // f-mod
      { q: 'The composite gf(x) may fail to exist because:', options: ['f is many-to-one','The range of f is not contained in the domain of g','f is not continuous','g has no inverse'], answer: 1 }, // f1
      { q: 'If (x − 2) is a factor of x³ + ax² − 5x + 6, then a equals:', options: ['−4','4','−1','1'], answer: 2 }, // f-poly
      { q: 'The number of real solutions of |x²  − 1| = k for 0 < k < 1 is:', options: ['2','3','0','4'], answer: 3 }, // f-mod
    ],
  },

  '1.4': {
    name: 'Graphs',
    green: [
      { q: 'The graph of y = 1/x has asymptotes:', options: ['x = 0 and y = 0','x = 1 and y = 1','y = x only','None'], answer: 0 }, // g1
      { q: 'y = f(x) + a is a translation of y = f(x) by:', options: ['A stretch of factor a','a units in the positive y-direction','a units in the positive x-direction','a units in the negative y-direction'], answer: 1 }, // g2
      { q: 'y = f(x + a) is a translation of y = f(x) by:', options: ['a units up','a units down','a units in the negative x-direction','a units in the positive x-direction'], answer: 2 }, // g2
      { q: 'y = af(x) is a stretch of y = f(x):', options: ['Parallel to the x-axis, scale factor a','Parallel to the y-axis, scale factor 1/a','A translation','Parallel to the y-axis, scale factor a'], answer: 3 }, // g2
      { q: 'y = f(ax) is a stretch of y = f(x):', options: ['Parallel to the x-axis, scale factor 1/a','Parallel to the x-axis, scale factor a','Parallel to the y-axis, scale factor a','A reflection'], answer: 0 }, // g2
      { q: 'y = −f(x) is a reflection of y = f(x) in:', options: ['The origin','The x-axis','The y-axis','The line y = x'], answer: 1 }, // g2
      { q: 'y = f(−x) is a reflection of y = f(x) in:', options: ['The line y = x','The origin','The y-axis','The x-axis'], answer: 2 }, // g2
      { q: 'The graph of y = x² is:', options: ['A straight line','A hyperbola','A circle','A parabola'], answer: 3 }, // g1
      { q: 'The graph of y = 2ˣ passes through:', options: ['(0, 1)','(1, 0)','(0, 0)','(0, 2)'], answer: 0 }, // g1
      { q: 'A vertical asymptote of a rational function occurs where:', options: ['x = 0','The denominator is zero and the numerator is not','The numerator is zero','The gradient is zero'], answer: 1 }, // g1
      { q: 'Translating y = x² by 3 units up gives:', options: ['y = 3x²','y = x² − 3','y = x² + 3','y = (x + 3)²'], answer: 2 }, // g2
      { q: 'The number of real roots of an equation equals the number of:', options: ['Turning points','Asymptotes','y-intercepts','Times its graph crosses or touches the x-axis'], answer: 3 }, // g1
      { q: 'For all x ≠ 0, the graph of y = 1/x² lies:', options: ['Entirely above the x-axis','Entirely below the x-axis','In two opposite quadrants','On the x-axis'], answer: 0 }, // g1
      { q: 'A cubic polynomial has at most how many real roots?', options: ['1','3','2','4'], answer: 1 }, // g1
      { q: 'The domain of y = √x is:', options: ['All real numbers','x ≤ 0','x ≥ 0','x > 0'], answer: 2 }, // g1
      { q: 'The turning point of y = (x − 2)² is at:', options: ['(−2, 0)','(0, 2)','(0, 4)','(2, 0)'], answer: 3 }, // g2
      { q: 'y = f(x) − 5 is a translation of y = f(x) by:', options: ['5 units down','5 units up','5 units left','5 units right'], answer: 0 }, // g2
      { q: 'The horizontal asymptote of y = 2ˣ is:', options: ['x = 0','y = 0','y = 1','y = 2'], answer: 1 }, // g1
      { q: 'The graph of y = x³ passes through the origin and is:', options: ['Symmetric about the y-axis','Bounded','Increasing for all x','Decreasing for all x'], answer: 2 }, // g1
      { q: 'The y-intercept of a graph is found by substituting:', options: ['y = 0','x = 1','y = 1','x = 0'], answer: 3 }, // g1
    ],
    amber: [
      { q: 'The graph of y = (x − 1)² + 4 has its minimum at:', options: ['(1, 4)','(−1, 4)','(1, −4)','(4, 1)'], answer: 0 }, // g2
      { q: 'y = 3f(x − 2) transforms y = f(x) by:', options: ['A reflection and a translation','A translation 2 right, then a stretch factor 3 parallel to the y-axis','A stretch factor 3 parallel to the x-axis, then a translation 2 units left','A translation 2 left and a stretch factor 1/3'], answer: 1 }, // g2
      { q: 'The asymptotes of y = 1/(x − 3) are:', options: ['x = −3 and y = 0','y = 3 only','x = 3 and y = 0','x = 0 and y = 3'], answer: 2 }, // g1
      { q: 'Using vector notation, the translation taking y = f(x) to y = f(x − 2) + 5 is:', options: ['(−2, 5)','(2, −5)','(5, 2)','(2, 5)'], answer: 3 }, // g2
      { q: 'The graph of y = x²(x − 2) crosses or touches the x-axis at:', options: ['x = 0 (touching) and x = 2 (crossing)','x = 0 and x = −2, both crossing','x = 2 only','x = 0 only'], answer: 0 }, // g1
      { q: 'The curve y = (x + 1)(x − 2)(x − 4) crosses the y-axis at:', options: ['(0, 4)','(0, 8)','(0, −8)','(0, 0)'], answer: 1 }, // g1
      { q: 'The graph of y = 2/(x + 1) − 3 has horizontal asymptote:', options: ['y = 0','y = 2','y = −3','y = 3'], answer: 2 }, // g1
      { q: 'Reflecting y = eˣ in the y-axis gives:', options: ['y = −eˣ','y = ln x','y = eˣ + 1','y = e⁻ˣ'], answer: 3 }, // g2
      { q: 'The curve y = x³ − 3x has turning points at:', options: ['x = 1 and x = −1','x = 0 only','x = 3 and x = −3','x = √3 and x = −√3'], answer: 0 }, // g1
      { q: 'To sketch y = f(2x) from y = f(x), each x-coordinate is:', options: ['Negated','Halved','Doubled','Unchanged'], answer: 1 }, // g2
      { q: 'The graph of y = |x − 1| − 2 has its minimum at:', options: ['(1, 2)','(2, −1)','(1, −2)','(−1, −2)'], answer: 2 }, // g2
      { q: 'y = x⁴ has a graph that is:', options: ['Symmetric about the origin','Increasing for all x','A parabola','Symmetric about the y-axis with a minimum at the origin'], answer: 3 }, // g1
      { q: 'The curve y = 1/(x² − 4) has vertical asymptotes at:', options: ['x = 2 and x = −2','x = 4 only','x = 0','No asymptotes'], answer: 0 }, // g1
      { q: 'Applying y = f(x) → y = −f(x) → y = −f(x) + 3 gives, in order:', options: ['A stretch then a translation','A reflection in the x-axis then a translation 3 up','A translation 3 up then a reflection in the y-axis','Two reflections'], answer: 1 }, // g2
      { q: 'The number of intersections of y = x² and y = x + 2 is:', options: ['0','3','2','1'], answer: 2 }, // g1
      { q: 'The graph of y = ln x has:', options: ['A horizontal asymptote at y = 0','No asymptotes','A minimum at (1, 0)','A vertical asymptote at x = 0 and passes through (1, 0)'], answer: 3 }, // g1
      { q: 'y = f(x) is stretched by scale factor 1/2 parallel to the y-axis. The new equation is:', options: ['y = ½f(x)','y = f(x/2)','y = f(2x)','y = 2f(x)'], answer: 0 }, // g2
      { q: 'The curve y = x/(x − 1) has horizontal asymptote:', options: ['No horizontal asymptote','y = 1','y = 0','y = −1'], answer: 1 }, // g1
      { q: 'The graph of y = (x − 3)² − 4 crosses the x-axis at:', options: ['x = −1 and x = 5','x = 3 only','x = 1 and x = 5','x = 3 and x = −4'], answer: 2 }, // g1
      { q: 'Sketching y = f(x) and y = f⁻¹(x) on the same axes, they intersect on:', options: ['The x-axis','The y-axis','Never','The line y = x, where solutions exist'], answer: 3 }, // g2
    ],
    red: [
      { q: 'The curve y = (x² − 1)/(x − 1), simplified, is:', options: ['y = x + 1 with a hole at x = 1','y = x + 1 for all x','y = x − 1','A hyperbola'], answer: 0 }, // g1
      { q: 'y = f(x) is transformed to y = 2f(3x − 6). Written as a sequence, this is:', options: ['Stretch 3 in x then translate 6 left','Translate 6 right, stretch factor 1/3 in x, stretch factor 2 in y','Stretch 1/3 in x, translate 6 right, stretch 2 in y','Translate 2 right then stretch 3 in x'], answer: 1 }, // g2
      { q: 'The curve y = x + 1/x has a local minimum at:', options: ['(−1, −2) only','(2, 2.5)','(1, 2)','(0, 0)'], answer: 2 }, // g1
      { q: 'The oblique (slant) asymptote of y = (x² + 1)/x is:', options: ['y = 1','x = 0 only','y = x + 1','y = x'], answer: 3 }, // g1
      { q: 'For y = k/(x − 2) + 1 to pass through the origin, k must be:', options: ['2','−2','1','0'], answer: 0 }, // g1
      { q: 'The number of real solutions of x³ − 3x = k for −2 < k < 2 is:', options: ['0','3','1','2'], answer: 1 }, // g1
      { q: 'y = f(x) has a maximum at (2, 5). After y = f(x + 1) − 3, the maximum is at:', options: ['(1, 8)','(3, 8)','(1, 2)','(3, 2)'], answer: 2 }, // g2
      { q: 'The curve y = 1/(x² + 1) has:', options: ['Vertical asymptotes at x = ±1','A minimum at the origin','No turning points','A maximum at (0, 1) and horizontal asymptote y = 0'], answer: 3 }, // g1
      { q: 'The graphs of y = eˣ and y = x + 1 meet:', options: ['Exactly once, at x = 0','Exactly twice, at x = 0 and x = 1','Never','Infinitely often'], answer: 0 }, // g1
      { q: 'A curve is symmetric about the origin if:', options: ['It has an asymptote at x = 0','f(−x) = −f(x) for all x','f(−x) = f(x) for all x','f(x) > 0 for all x'], answer: 1 }, // g1
    ],
  },

  '1.5': {
    name: 'Coordinate Geometry',
    green: [
      { q: 'The gradient of the line joining (1, 2) and (3, 8) is:', options: ['4','1/3','3','2'], answer: 2 }, // c1
      { q: 'The line with gradient 2 through (0, 5) has equation:', options: ['y = 5x + 2','y = 2x − 5','y = x + 5','y = 2x + 5'], answer: 3 }, // c1
      { q: 'The midpoint of (2, 4) and (6, 10) is:', options: ['(4, 7)','(8, 14)','(2, 3)','(4, 6)'], answer: 0 }, // c1
      { q: 'The distance between (0, 0) and (3, 4) is:', options: ['25','5','7','12'], answer: 1 }, // c1
      { q: 'The circle with centre the origin and radius 5 has equation:', options: ['(x − 5)² + y² = 0','x + y = 5','x² + y² = 25','x² + y² = 5'], answer: 2 }, // c2
      { q: 'The circle (x − 2)² + (y + 3)² = 16 has centre:', options: ['(−2, 3)','(2, 3)','(4, −3)','(2, −3)'], answer: 3 }, // c2
      { q: 'The circle (x − 2)² + (y + 3)² = 16 has radius:', options: ['4','16','8','2'], answer: 0 }, // c2
      { q: 'A line perpendicular to one of gradient 3 has gradient:', options: ['−3','−1/3','1/3','3'], answer: 1 }, // c1
      { q: 'Two distinct parallel lines have:', options: ['A single intersection','Equal intercepts','Equal gradients','Product of gradients −1'], answer: 2 }, // c1
      { q: 'The form y − y₁ = m(x − x₁) is known as:', options: ['The intercept form','The general form','The parametric form','The point-gradient form'], answer: 3 }, // c1
      { q: 'The gradient of the line through (1, 1) and (3, 5) is:', options: ['2','3','1/2','4'], answer: 0 }, // c1
      { q: 'The x-intercept of y = 2x − 6 is:', options: ['−3','3','−6','6'], answer: 1 }, // c1
      { q: 'The angle in a semicircle is:', options: ['180°','45°','90°','60°'], answer: 2 }, // c2
      { q: 'The perpendicular from the centre of a circle to a chord:', options: ['Is equal to the radius','Is parallel to the chord','Meets the chord at 45°','Bisects the chord'], answer: 3 }, // c2
      { q: 'A tangent to a circle is perpendicular to:', options: ['The radius at the point of contact','Any chord','The diameter through the centre only','The x-axis'], answer: 0 }, // c2
      { q: 'The circle x² + y² − 4x = 0 has centre:', options: ['(4, 0)','(2, 0)','(−2, 0)','(0, 2)'], answer: 1 }, // c2
      { q: 'The distance between (1, 2) and (4, 6) is:', options: ['3','25','5','7'], answer: 2 }, // c1
      { q: 'The gradient of the line y = 5 is:', options: ['5','Undefined','1','0'], answer: 3 }, // c1
      { q: 'The gradient of the line x = 3 is:', options: ['Undefined','0','3','1/3'], answer: 0 }, // c1
      { q: 'The parametric equations x = t, y = t² describe:', options: ['A circle','y = x²','y = x','x = y²'], answer: 1 }, // c3
    ],
    amber: [
      { q: 'The circle x² + y² − 6x + 4y − 12 = 0 has centre and radius:', options: ['(3, −2), r = 25','(6, −4), r = 5','(3, −2), r = 5','(−3, 2), r = 5'], answer: 2 }, // c2
      { q: 'The perpendicular bisector of the segment joining (1, 2) and (5, 6) is:', options: ['y = x + 1','y = −x + 3','y = x + 7','y = −x + 7'], answer: 3 }, // c1
      { q: 'The tangent to x² + y² = 25 at the point (3, 4) is:', options: ['3x + 4y = 25','4x + 3y = 25','3x − 4y = 25','x + y = 7'], answer: 0 }, // c2
      { q: 'Eliminating t from x = 2t, y = t² gives:', options: ['y = x/2','y = x²/4','y = 2x²','y = x²'], answer: 1 }, // c3
      { q: 'Eliminating t from x = cos t, y = sin t gives:', options: ['x² − y² = 1','x + y = 1','x² + y² = 1','y = x'], answer: 2 }, // c3
      { q: 'The gradient of 2x + 3y = 6 is:', options: ['2/3','−3/2','3/2','−2/3'], answer: 3 }, // c1
      { q: 'The line through the origin perpendicular to 2x + 3y = 6 is:', options: ['y = (3/2)x','y = (−2/3)x','y = (2/3)x','y = (−3/2)x'], answer: 0 }, // c1
      { q: 'Eliminating t from x = t + 1, y = t² − 1 gives:', options: ['y = (x − 1)²','y = (x − 1)² − 1','y = (x + 1)² − 1','y = x² − 1'], answer: 1 }, // c3
      { q: 'The circle x² + y² + 2x − 6y + 1 = 0 has centre and radius:', options: ['(−1, 3), r = 9','(−2, 6), r = 3','(−1, 3), r = 3','(1, −3), r = 3'], answer: 2 }, // c2
      { q: 'The point (5, 5) relative to the circle x² + y² = 25 lies:', options: ['Inside it','On it','At its centre','Outside it'], answer: 3 }, // c2
      { q: 'The circle with diameter from (1, 2) to (7, 10) has centre and radius:', options: ['(4, 6), r = 5','(4, 6), r = 10','(3, 4), r = 5','(8, 12), r = 5'], answer: 0 }, // c2
      { q: 'Eliminating t from x = 3cos t, y = 2sin t gives:', options: ['x²/3 + y²/2 = 1','x²/9 + y²/4 = 1','x²/4 + y²/9 = 1','x² + y² = 1'], answer: 1 }, // c3
      { q: 'The line through (2, 3) parallel to y = 4x − 1 is:', options: ['y = −4x + 11','y = (1/4)x + 2.5','y = 4x − 5','y = 4x + 5'], answer: 2 }, // c1
      { q: 'The lines y = 2x + 1 and y = −x + 7 intersect at:', options: ['(5, 2)','(1, 3)','(3, 4)','(2, 5)'], answer: 3 }, // c1
      { q: 'Eliminating t from x = t², y = 2t gives:', options: ['y² = 4x','y = 4x²','y² = x','y = 2x²'], answer: 0 }, // c3
      { q: 'The length of the chord cut from y = x by x² + y² = 8 is:', options: ['4','4√2','2√2','8'], answer: 1 }, // c2
      { q: 'The line y = x + 1 and the circle x² + y² = 25 intersect in how many points?', options: ['0','3','2','1'], answer: 2 }, // c2
      { q: 'The circle x² + y² = r² has a tangent at (a, b) with equation:', options: ['ax − by = r²','bx + ay = r²','ax + by = r','ax + by = r²'], answer: 3 }, // c2
      { q: 'Three points are collinear if:', options: ['The gradients between successive pairs are equal','They form a right angle','They are equidistant','Their midpoints coincide'], answer: 0 }, // c1
      { q: 'The shortest distance from the centre of a circle to a tangent equals:', options: ['Half the radius','The radius','The diameter','Zero'], answer: 1 }, // c2
    ],
    red: [
      { q: 'For the line y = mx to be tangent to the circle (x − 5)² + y² = 9, m must satisfy:', options: ['m² = 9','9m² = 25','16m² = 9','25m² = 9'], answer: 2 }, // c2
      { q: 'Eliminating θ from x = 2 + 3cos θ, y = −1 + 3sin θ gives:', options: ['(x + 2)² + (y − 1)² = 9','(x − 2)² + (y + 1)² = 3','x² + y² = 9','(x − 2)² + (y + 1)² = 9'], answer: 3 }, // c3
      { q: 'Two circles with centres 10 apart and radii 4 and 6:', options: ['Touch externally at exactly one point','Intersect at two points','Do not meet','Are concentric'], answer: 0 }, // c2
      { q: 'The perpendicular distance from (1, 1) to the line 3x + 4y − 10 = 0 is:', options: ['2','3/5','1','7/5'], answer: 1 }, // c1
      { q: 'The curve given by x = t², y = t³ passes through the origin with:', options: ['A vertical asymptote','A point of inflection only','A cusp, since dy/dx = 3t/2 → 0 but the curve reverses in x','A smooth minimum'], answer: 2 }, // c3
      { q: 'The circle through (0, 0), (4, 0) and (0, 6) has centre:', options: ['(4, 6)','(0, 0)','(3, 2)','(2, 3)'], answer: 3 }, // c2
      { q: 'For x = t + 1/t, y = t − 1/t, eliminating t gives:', options: ['x² − y² = 4','x² + y² = 4','x² − y² = 2','xy = 1'], answer: 0 }, // c3
      { q: 'The line y = x + c meets x² + y² = 8 in exactly one point when c equals:', options: ['±8','±4','±2','±2√2'], answer: 1 }, // c2
      { q: 'The locus of points equidistant from (0, 0) and (4, 0) is:', options: ['The line y = 2','The parabola y² = 4x','The line x = 2','The circle x² + y² = 4'], answer: 2 }, // c1
      { q: 'For the parametric curve x = 2t, y = t², the gradient dy/dx at parameter t is:', options: ['2t','t/2','1/(2t)','t'], answer: 3 }, // c3
    ],
  },

  '1.6': {
    name: 'Sequences & Series',
    green: [
      { q: 'The value of ⁵C₂ is:', options: ['10','20','7','25'], answer: 0 }, // s-bin
      { q: 'The nth term of an arithmetic sequence with first term a and common difference d is:', options: ['a − (n − 1)d','a + (n − 1)d','a + nd','arⁿ⁻¹'], answer: 1 }, // s1
      { q: 'The nth term of a geometric sequence with first term a and common ratio r is:', options: ['a + (n − 1)r','a/rⁿ','arⁿ⁻¹','arⁿ'], answer: 2 }, // s1
      { q: 'The sum of the first n terms of an arithmetic series is:', options: ['n(a + d)','a(1 − rⁿ)/(1 − r)','na','(n/2)(2a + (n − 1)d)'], answer: 3 }, // s1
      { q: 'The sum of the first n terms of a geometric series (r ≠ 1) is:', options: ['a(1 − rⁿ)/(1 − r)','(n/2)(2a + (n − 1)d)','a/(1 − r)','arⁿ'], answer: 0 }, // s1
      { q: 'The sum to infinity of a geometric series exists when:', options: ['r > 0','|r| < 1','|r| > 1','r = 1'], answer: 1 }, // s1
      { q: 'The sum to infinity of a convergent geometric series is:', options: ['a/r','ar','a/(1 − r)','a(1 − r)'], answer: 2 }, // s1
      { q: 'In the sequence 3, 7, 11, 15, … the common difference is:', options: ['3','7','2','4'], answer: 3 }, // s1
      { q: 'In the sequence 2, 6, 18, 54, … the common ratio is:', options: ['3','4','2','6'], answer: 0 }, // s1
      { q: 'Expanding (1 + x)² gives:', options: ['2 + 2x','1 + 2x + x²','1 + x + x²','1 + x²'], answer: 1 }, // s-bin
      { q: 'ⁿC₀ equals:', options: ['n','n!','1','0'], answer: 2 }, // s-bin
      { q: 'ⁿCₙ equals:', options: ['n','0','n!','1'], answer: 3 }, // s-bin
      { q: "The row of Pascal's triangle giving the coefficients of (a + b)⁴ is:", options: ['1 4 6 4 1','1 3 3 1','1 5 10 10 5 1','1 4 4 1'], answer: 0 }, // s-bin
      { q: 'The 10th term of the arithmetic sequence 5, 8, 11, … is:', options: ['29','32','35','30'], answer: 1 }, // s1
      { q: 'The sum of the first 10 positive integers is:', options: ['100','50','55','45'], answer: 2 }, // s1
      { q: 'The symbol Σ denotes:', options: ['A product','A limit','A derivative','A sum'], answer: 3 }, // s1
      { q: 'The value of Σ from k = 1 to 5 of k is:', options: ['15','10','25','5'], answer: 0 }, // s1
      { q: 'The 4th term of the geometric sequence 3, 6, 12, … is:', options: ['48','24','18','36'], answer: 1 }, // s1
      { q: 'For the recurrence u₍ₙ₊₁₎ = uₙ + 3 with u₁ = 2, the value of u₂ is:', options: ['3','2','5','6'], answer: 2 }, // s1
      { q: 'A sequence in which each term is a fixed multiple of the previous one is:', options: ['Arithmetic','Periodic','Constant','Geometric'], answer: 3 }, // s1
    ],
    amber: [
      { q: 'The sum of the first 20 terms of an arithmetic series with a = 3, d = 5 is:', options: ['1010','1000','980','1050'], answer: 0 }, // s1
      { q: 'The coefficient of x³ in (1 + 2x)⁵ is:', options: ['32','80','40','10'], answer: 1 }, // s-bin
      { q: 'The sum to infinity of 8 + 4 + 2 + … is:', options: ['20','32','16','12'], answer: 2 }, // s1
      { q: 'The first three terms of (1 + x)^(1/2) are:', options: ['1 + x/2 + x²/8','1 + x − x²','1 + 2x + x²','1 + x/2 − x²/8'], answer: 3 }, // s-bin2
      { q: 'The expansion of (1 − x)⁻¹ for |x| < 1 is:', options: ['1 + x + x² + x³ + …','1 − x + x² − x³ + …','1 + x² + x⁴ + …','1 − x − x² − …'], answer: 0 }, // s-bin2
      { q: 'The number of terms in the arithmetic sequence 5, 9, 13, …, 101 is:', options: ['20','25','24','26'], answer: 1 }, // s1
      { q: 'The coefficient of x² in (2 + x)⁶ is:', options: ['15','480','240','60'], answer: 2 }, // s-bin
      { q: 'The sum of the arithmetic series 2 + 5 + 8 + … + 59 is:', options: ['590','620','600','610'], answer: 3 }, // s1
      { q: 'For a geometric series with a = 2 and r = 3, the sum of the first 5 terms is:', options: ['242','162','486','240'], answer: 0 }, // s1
      { q: 'The binomial expansion of (1 + x)ⁿ for non-integer n is valid for:', options: ['|x| < n','|x| < 1','All x','x > 0'], answer: 1 }, // s-bin2
      { q: 'Σ from k = 1 to n of k equals:', options: ['n(n + 1)','(n + 1)/2','n(n + 1)/2','n²'], answer: 2 }, // s1
      { q: 'The first three terms of (1 + 3x)⁻² are:', options: ['1 + 6x + 27x²','1 − 3x + 9x²','1 − 6x + 9x²','1 − 6x + 27x²'], answer: 3 }, // s-bin2
      { q: 'An arithmetic sequence has 5th term 17 and 10th term 32. Its first term and common difference are:', options: ['a = 5, d = 3','a = 3, d = 5','a = 2, d = 3','a = 17, d = 3'], answer: 0 }, // s1
      { q: 'The sum to infinity of a geometric series with a = 12 and r = 1/3 is:', options: ['24','18','16','36'], answer: 1 }, // s1
      { q: 'The coefficient of x² in (2 − x)⁴ is:', options: ['16','6','24','−24'], answer: 2 }, // s-bin
      { q: 'The value of Σ from k = 0 to 4 of 2ᵏ is:', options: ['32','15','16','31'], answer: 3 }, // s1
      { q: 'Which sequence is NOT geometric?', options: ['1, 3, 5, 7, …','1, 3, 9, 27, …','2, −4, 8, −16, …','5, 5, 5, 5, …'], answer: 0 }, // s1
      { q: 'If a recurrence uₙ converges to a limit L, then L satisfies:', options: ['L = ∞','The equation obtained by replacing both uₙ and u₍ₙ₊₁₎ by L','uₙ = 0','L = u₁'], answer: 1 }, // s1
      { q: 'The 6th term of a geometric sequence with a = 1 and r = −2 is:', options: ['−64','64','−32','32'], answer: 2 }, // s1
      { q: 'In sigma notation the sum 3 + 6 + 9 + … + 30 is:', options: ['Σ from k = 1 to 30 of 3k','Σ from k = 3 to 30 of k','Σ from k = 1 to 10 of k','Σ from k = 1 to 10 of 3k'], answer: 3 }, // s1
    ],
    red: [
      { q: 'The coefficient of x² in the expansion of (1 + x)^(−1/2) is:', options: ['3/8','−1/8','1/8','−3/8'], answer: 0 }, // s-bin2
      { q: 'The expansion of (1 + 2x)^(1/2) is valid for:', options: ['All x','|x| < 1/2','|x| < 1','|x| < 2'], answer: 1 }, // s-bin2
      { q: 'If the sum of the first n terms of a series is n², the nth term is:', options: ['2n','n² − 1','2n − 1','n'], answer: 2 }, // s1
      { q: 'Using the binomial expansion of (1 + x)^(1/2) with x = 0.02, √1.02 is approximately:', options: ['1.01','1.0099','1.02','1.00995'], answer: 3 }, // s-bin2
      { q: 'The recurrence u₍ₙ₊₁₎ = √(2 + uₙ) converges to the limit:', options: ['2','1','√2','4'], answer: 0 }, // s1
      { q: 'Σ from k = 1 to n of (2k − 1) equals:', options: ['n(n − 1)','n²','n(n + 1)','2n'], answer: 1 }, // s1
      { q: 'A geometric series has sum to infinity equal to 3a, where a is the first term. Its common ratio is:', options: ['3','1/2','2/3','1/3'], answer: 2 }, // s1
      { q: 'The expansion of (1 + x)ⁿ for positive integer n has how many terms?', options: ['n','n − 1','Infinitely many','n + 1'], answer: 3 }, // s-bin
      { q: 'The coefficient of x³ in (1 + x)(1 + 2x)⁴ is:', options: ['56','32','48','80'], answer: 0 }, // s-bin
      { q: 'An arithmetic series has first term 20 and common difference −3. The sum of its terms is greatest when n equals:', options: ['20','7','6','8'], answer: 1 }, // s1
    ],
  },

  '1.7': {
    name: 'Trigonometry',
    green: [
      { q: 'The exact value of sin 30° is:', options: ['√2/2','1','1/2','√3/2'], answer: 2 }, // t1
      { q: 'The exact value of cos 60° is:', options: ['√3/2','√2/2','0','1/2'], answer: 3 }, // t1
      { q: 'The exact value of tan 45° is:', options: ['1','0','√3','1/√3'], answer: 0 }, // t1
      { q: 'The identity sin²θ + cos²θ equals:', options: ['tan²θ','1','0','2'], answer: 1 }, // t2
      { q: 'The area of a triangle with sides a, b and included angle C is:', options: ['ab sin C','½ab tan C','½ab sin C','½ab cos C'], answer: 2 }, // t-area
      { q: 'The sine rule states:', options: ['a² = b² + c² − 2bc cos A','a sin A = b sin B','a + b = c','a/sin A = b/sin B = c/sin C'], answer: 3 }, // t-rule
      { q: 'The cosine rule states:', options: ['a² = b² + c² − 2bc cos A','a/sin A = b/sin B','a² = b² + c²','cos A = a/b'], answer: 0 }, // t-rule
      { q: 'π radians is equal to:', options: ['270°','180°','90°','360°'], answer: 1 }, // t-rad
      { q: '90° expressed in radians is:', options: ['π','2π','π/2','π/4'], answer: 2 }, // t-rad
      { q: 'sec θ is defined as:', options: ['1/sin θ','1/tan θ','cos θ','1/cos θ'], answer: 3 }, // t-sec
      { q: 'cosec θ is defined as:', options: ['1/sin θ','1/cos θ','1/tan θ','sin θ'], answer: 0 }, // t-sec
      { q: 'cot θ is defined as:', options: ['tan θ','1/tan θ','1/sin θ','1/cos θ'], answer: 1 }, // t-sec
      { q: 'tan θ is equal to:', options: ['sin θ · cos θ','1/sin θ','sin θ / cos θ','cos θ / sin θ'], answer: 2 }, // t2
      { q: 'The period of y = sin x is:', options: ['π','π/2','4π','2π'], answer: 3 }, // t1
      { q: 'The period of y = tan x is:', options: ['π','2π','π/2','3π'], answer: 0 }, // t1
      { q: 'The amplitude of y = 3 sin x is:', options: ['1/3','3','1','6'], answer: 1 }, // t1
      { q: 'sin(−θ) equals:', options: ['cos θ','−cos θ','−sin θ','sin θ'], answer: 2 }, // t1
      { q: 'cos(−θ) equals:', options: ['−cos θ','sin θ','−sin θ','cos θ'], answer: 3 }, // t1
      { q: 'The length of an arc subtending angle θ radians at the centre of a circle of radius r is:', options: ['rθ','½r²θ','2πr','rθ²'], answer: 0 }, // t-rad
      { q: 'The area of a sector subtending angle θ radians in a circle of radius r is:', options: ['½rθ','½r²θ','rθ','πr²'], answer: 1 }, // t-rad
    ],
    amber: [
      { q: 'Solve sin x = √3/2 for 0 ≤ x < 2π.', options: ['x = π/6 or 5π/6','x = 2π/3 or 4π/3','x = π/3 or 2π/3','x = π/3 only'], answer: 2 }, // t3
      { q: 'The double angle identity for sin 2θ is:', options: ['sin²θ − cos²θ','2 cos²θ − 1','1 − 2 sin²θ','2 sin θ cos θ'], answer: 3 }, // t-comp
      { q: 'One form of the double angle identity for cos 2θ is:', options: ['2 cos²θ − 1','2 sin θ cos θ','cos²θ + sin²θ','1 + 2 sin²θ'], answer: 0 }, // t-comp
      { q: 'The identity 1 + tan²θ equals:', options: ['1','sec²θ','cosec²θ','cot²θ'], answer: 1 }, // t-sec
      { q: 'The identity 1 + cot²θ equals:', options: ['tan²θ','1','cosec²θ','sec²θ'], answer: 2 }, // t-sec
      { q: 'The compound angle formula for sin(A + B) is:', options: ['sin A cos B − cos A sin B','cos A cos B − sin A sin B','sin A sin B + cos A cos B','sin A cos B + cos A sin B'], answer: 3 }, // t-comp
      { q: 'Solve 2 cos x = 1 for 0° ≤ x < 360°.', options: ['x = 60° or 300°','x = 60° only','x = 30° or 330°','x = 120° or 240°'], answer: 0 }, // t3
      { q: 'Expressing 3 sin x + 4 cos x as R sin(x + α), the value of R is:', options: ['12','5','7','25'], answer: 1 }, // t-comp
      { q: 'Solve tan x = 1 for 0 ≤ x < 2π.', options: ['x = π/4 or 3π/4','x = 3π/4 or 7π/4','x = π/4 or 5π/4','x = π/4 only'], answer: 2 }, // t3
      { q: 'For small x measured in radians, sin x is approximately:', options: ['1','x²/2','1 − x²/2','x'], answer: 3 }, // t-small
      { q: 'For small x measured in radians, cos x is approximately:', options: ['1 − x²/2','x','1','x²/2'], answer: 0 }, // t-small
      { q: 'Solve sin 2x = 0.5 for 0° ≤ x < 360°.', options: ['x = 30°, 150°, 210°, 330°','x = 15°, 75°, 195°, 255°','x = 30°, 150°','x = 15°, 75°'], answer: 1 }, // t3
      { q: 'The area of a sector of radius 6 subtending π/3 radians is:', options: ['3π','2π','6π','12π'], answer: 2 }, // t-rad
      { q: 'The arc length in a circle of radius 5 subtending 0.8 radians is:', options: ['8','2.5','6.25','4'], answer: 3 }, // t-rad
      { q: 'An alternative form of cos 2θ is:', options: ['1 − 2 sin²θ','1 + 2 sin²θ','2 sin θ cos θ','sin²θ − 1'], answer: 0 }, // t-comp
      { q: 'Solve cos x = −1/2 for 0 ≤ x < 2π.', options: ['x = 2π/3 only','x = 2π/3 or 4π/3','x = π/3 or 5π/3','x = π/6 or 11π/6'], answer: 1 }, // t3
      { q: 'The compound angle formula for tan(A + B) is:', options: ['tan A + tan B','tan A tan B','(tan A + tan B)/(1 − tan A tan B)','(tan A − tan B)/(1 + tan A tan B)'], answer: 2 }, // t-comp
      { q: 'The exact value of sin 60° is:', options: ['1/2','√2/2','1','√3/2'], answer: 3 }, // t1
      { q: 'Solve sec x = 2 for 0 ≤ x < 2π.', options: ['x = π/3 or 5π/3','x = π/3 only','x = π/6 or 11π/6','x = 2π/3 or 4π/3'], answer: 0 }, // t-sec
      { q: 'The maximum value of 5 sin x + 12 cos x is:', options: ['25','13','17','12'], answer: 1 }, // t-comp
    ],
    red: [
      { q: 'Solve 2 sin²x + sin x − 1 = 0 for 0 ≤ x < 2π.', options: ['x = π/2 or 3π/2','x = π/3, 2π/3 or 3π/2','x = π/6, 5π/6 or 3π/2','x = π/6 or 5π/6'], answer: 2 }, // t3
      { q: 'The number of solutions of sin 3x = 0.5 for 0 ≤ x < 2π is:', options: ['3','2','4','6'], answer: 3 }, // t3
      { q: 'The number of solutions of tan 2x = 1 for 0 ≤ x < 2π is:', options: ['4','2','8','1'], answer: 0 }, // t3
      { q: 'Solve sin x = cos x for 0 ≤ x < 2π.', options: ['x = 3π/4 or 7π/4','x = π/4 or 5π/4','x = π/4 only','x = π/4 or 3π/4'], answer: 1 }, // t3
      { q: 'Writing 5 sin x − 12 cos x as R sin(x − α), the values of R and tan α are:', options: ['R = 17, tan α = 12/5','R = 7, tan α = 5/12','R = 13, tan α = 12/5','R = 13, tan α = 5/12'], answer: 2 }, // t-comp
      { q: 'Using sin 3θ = 3 sin θ − 4 sin³θ, the value of sin 3θ when sin θ = 1/2 is:', options: ['1/2','0','√3/2','1'], answer: 3 }, // t-comp
      { q: 'As x → 0 with x in radians, the limit of (sin x)/x is:', options: ['1','0','∞','1/2'], answer: 0 }, // t-small
      { q: 'The minimum value of 3 + 2 cos x is:', options: ['−2','1','3','5'], answer: 1 }, // t-comp
      { q: 'Solve 3 cos 2x + sin x = 2 for 0 ≤ x < 2π. The equation first reduces to:', options: ['3 sin²x + sin x = 0','sin x = 2/3','6 sin²x − sin x − 1 = 0','6 cos²x − cos x − 1 = 0'], answer: 2 }, // t3
      { q: 'The identity (1 − cos 2θ)/(sin 2θ) simplifies to:', options: ['cot θ','sin θ','2 tan θ','tan θ'], answer: 3 }, // t-comp
    ],
  },

  '1.8': {
    name: 'Exponentials & Logarithms',
    green: [
      { q: 'The value of log_a a is:', options: ['1','0','a','Undefined'], answer: 0 }, // E5
      { q: 'The value of log_a 1 is:', options: ['Undefined','0','1','a'], answer: 1 }, // E5
      { q: 'log(xy) is equal to:', options: ['log x − log y','x log y','log x + log y','log x × log y'], answer: 2 }, // E4
      { q: 'log(x/y) is equal to:', options: ['log x / log y','log x + log y','log(x − y)','log x − log y'], answer: 3 }, // E4
      { q: 'log(xᵏ) is equal to:', options: ['k log x','(log x)ᵏ','k + log x','log k × log x'], answer: 0 }, // E4
      { q: 'The value of ln e is:', options: ['Undefined','1','0','e'], answer: 1 }, // E10
      { q: 'The value of e⁰ is:', options: ['e','Undefined','1','0'], answer: 2 }, // E8
      { q: 'For a > 0, the graph of y = aˣ always passes through:', options: ['(1, 0)','(0, 0)','(1, 1)','(0, 1)'], answer: 3 }, // E1
      { q: 'The function ln x is the inverse of:', options: ['eˣ','x²','1/x','10ˣ'], answer: 0 }, // E10
      { q: 'The value of log₂ 8 is:', options: ['8','3','4','2'], answer: 1 }, // E2
      { q: 'Solve 2ˣ = 16.', options: ['x = 2','x = 16','x = 4','x = 8'], answer: 2 }, // E6
      { q: 'The value of log₁₀ 100 is:', options: ['10','100','1','2'], answer: 3 }, // E2
      { q: 'The graph of y = ln x has a vertical asymptote at:', options: ['x = 0','x = 1','y = 0','x = e'], answer: 0 }, // E3
      { q: 'To 3 decimal places, e is approximately:', options: ['2.303','2.718','3.142','1.414'], answer: 1 }, // E8
      { q: 'The gradient of the curve y = e^(kx) is:', options: ['kx·e^(kx)','e^(kx)/k','ke^(kx)','e^(kx)'], answer: 2 }, // E9
      { q: 'Solve eˣ = 1.', options: ['x = 1','x = e','No solution','x = 0'], answer: 3 }, // E6
      { q: 'The value of log₃ 9 is:', options: ['2','3','9','1/2'], answer: 0 }, // E2
      { q: 'For all real x, the value of eˣ is:', options: ['Always greater than 1','Always positive','Always negative','Sometimes zero'], answer: 1 }, // E8
      { q: 'The value of ln 1 is:', options: ['e','Undefined','0','1'], answer: 2 }, // E5
      { q: 'Written in logarithmic form, 2⁵ = 32 becomes:', options: ['log₅ 32 = 2','log₃₂ 2 = 5','log₂ 5 = 32','log₂ 32 = 5'], answer: 3 }, // E2
    ],
    amber: [
      { q: 'Solve 2^(x+1) = 32.', options: ['x = 4','x = 5','x = 16','x = 3'], answer: 0 }, // E6
      { q: 'Solve 3ˣ = 20, giving your answer to 3 decimal places.', options: ['x = 3.044','x = 2.727','x = 6.667','x = 1.301'], answer: 1 }, // E6
      { q: 'Solve log₂ x + log₂(x − 2) = 3.', options: ['x = 8','x = 4 or x = −2','x = 4','x = 2'], answer: 2 }, // E4
      { q: 'To reduce y = axⁿ to linear form, take logarithms to obtain:', options: ['log y = a + nx','y = log a + n log x','log y = n log a + log x','log y = log a + n log x'], answer: 3 }, // E7
      { q: 'To reduce y = abˣ to linear form, take logarithms to obtain:', options: ['log y = log a + x log b','log y = log a + b log x','y = log a + x log b','log y = a log b + x'], answer: 0 }, // E7
      { q: 'Solve ln x = 3.', options: ['x = 3','x = e³','x = 3e','x = ln 3'], answer: 1 }, // E6
      { q: 'The change of base rule states log_a b equals:', options: ['log a × log b','log(b − a)','log b / log a','log a / log b'], answer: 2 }, // E4
      { q: 'Solve e^(2x) = 7.', options: ['x = ln 7','x = 2 ln 7','x = ln 3.5','x = ½ln 7'], answer: 3 }, // E6
      { q: 'Solve log_x 16 = 2.', options: ['x = 4','x = 8','x = 16','x = 32'], answer: 0 }, // E2
      { q: 'For the model y = 5e^(−0.2t), the value of y at t = 0 is:', options: ['1','5','0','0.2'], answer: 1 }, // E11
      { q: 'As t → ∞, the model y = 5e^(−0.2t) tends to:', options: ['∞','0.2','0','5'], answer: 2 }, // E11
      { q: 'Solve 2 ln x = ln 9 for x > 0.', options: ['x = 9','x = 4.5','x = 81','x = 3'], answer: 3 }, // E4
      { q: 'Solve 5^(2x) = 5^(x+3).', options: ['x = 3','x = 1','x = 5','x = 1.5'], answer: 0 }, // E6
      { q: 'The value of (log 8)/(log 2) is:', options: ['0.25','3','4','6'], answer: 1 }, // E4
      { q: 'A quantity grows so that dy/dx is proportional to y. Its graph is:', options: ['Linear','Logarithmic','Exponential','Quadratic'], answer: 2 }, // E11
      { q: 'A quantity satisfies dy/dx proportional to x. Its graph is:', options: ['Exponential','Linear','Logarithmic','Quadratic'], answer: 3 }, // E11
      { q: 'Solve eˣ − 5e^(−x) = 4.', options: ['x = ln 5','x = ln 4','x = ln 5 or x = 0','x = −ln 5'], answer: 0 }, // E6
      { q: 'The horizontal asymptote of y = 2 + e^(−x) is:', options: ['x = 2','y = 2','y = 0','y = 1'], answer: 1 }, // E3
      { q: 'Under continuous compound interest, an amount P after time t at rate r is:', options: ['P + rt','Pe^(r/t)','Pe^(rt)','P(1 + r)ᵗ'], answer: 2 }, // E11
      { q: 'For radioactive decay N = N₀e^(−kt), the half-life satisfies:', options: ['e^(−kt) = 2','kt = 2','N = 0','e^(−kt) = 1/2'], answer: 3 }, // E11
    ],
    red: [
      { q: 'Experimental data plotted as log y against log x gives a straight line of gradient n and intercept log a. The relationship is:', options: ['y = axⁿ','y = abˣ','y = a + nx','y = aeⁿˣ'], answer: 0 }, // E7
      { q: 'Solve 3^(2x) − 4·3ˣ + 3 = 0.', options: ['x = 1 only','x = 0 or x = 1','x = 1 or x = 3','x = 0 only'], answer: 1 }, // E6
      { q: 'Solve ln(x + 1) − ln(x − 1) = ln 3.', options: ['x = 1','x = 4','x = 2','x = 3'], answer: 2 }, // E4
      { q: 'Experimental data plotted as log y against x gives a straight line. The relationship is of the form:', options: ['y = axⁿ','y = a + bx','y = a ln x','y = abˣ'], answer: 3 }, // E7
      { q: 'The inverse of the function y = 3e^(2x) is:', options: ['y = ½ln(x/3)','y = ln(x/3)','y = 3 ln(x/2)','y = ½ln(3x)'], answer: 0 }, // E10
      { q: 'A population model P = P₀e^(kt) is criticised because:', options: ['It is always decreasing','It grows without limit, ignoring resource constraints','It cannot model growth','It requires P₀ = 0'], answer: 1 }, // E11
      { q: 'Solve 2ˣ = 3^(x−1), giving x in terms of logarithms.', options: ['x = ln 3/ln 2','x = ln 6','x = ln 3/(ln 3 − ln 2)','x = ln 2/(ln 3 − ln 2)'], answer: 2 }, // E6
      { q: 'If N = N₀e^(−kt) has half-life 5, then k equals:', options: ['5 ln 2','(ln 5)/2','1/5','(ln 2)/5'], answer: 3 }, // E11
      { q: 'Solve log₄ x = 3/2.', options: ['x = 8','x = 6','x = 64','x = 2'], answer: 0 }, // E2
      { q: 'The curve y = ln(x − 2) crosses the x-axis at:', options: ['(0, 0)','(3, 0)','(2, 0)','(1, 0)'], answer: 1 }, // E3
    ],
  },

  '1.9': {
    name: 'Differentiation',
    green: [
      { q: 'The derivative of xⁿ is:', options: ['nxⁿ','xⁿ/n','nxⁿ⁻¹','xⁿ⁻¹'], answer: 2 }, // c1
      { q: 'The derivative of 3x² is:', options: ['3x','6x²','x³','6x'], answer: 3 }, // c1
      { q: 'The derivative of a constant is:', options: ['0','1','The constant','Undefined'], answer: 0 }, // c1
      { q: 'The derivative of eˣ is:', options: ['xeˣ','eˣ','xeˣ⁻¹','eˣ/x'], answer: 1 }, // c-exp
      { q: 'The derivative of ln x is:', options: ['x','1/ln x','1/x','ln x'], answer: 2 }, // c-exp
      { q: 'The derivative of sin x (x in radians) is:', options: ['−cos x','−sin x','sec²x','cos x'], answer: 3 }, // c-trig
      { q: 'The derivative of cos x (x in radians) is:', options: ['−sin x','sin x','−cos x','cosec²x'], answer: 0 }, // c-trig
      { q: 'At a stationary point, dy/dx equals:', options: ['The y-value','0','1','∞'], answer: 1 }, // c-app
      { q: 'If d²y/dx² > 0 at a stationary point, the point is a:', options: ['Point of inflection','Discontinuity','Minimum','Maximum'], answer: 2 }, // c-app
      { q: 'If d²y/dx² < 0 at a stationary point, the point is a:', options: ['Minimum','Point of inflection','Discontinuity','Maximum'], answer: 3 }, // c-app
      { q: 'The derivative of 5x is:', options: ['5','5x','0','x'], answer: 0 }, // c1
      { q: 'The derivative of x³ − 2x is:', options: ['3x³ − 2','3x² − 2','3x² − 2x','x² − 2'], answer: 1 }, // c1
      { q: 'The chain rule states that the derivative of f(g(x)) is:', options: ["f'(g'(x))","f(g'(x))","f'(g(x))·g'(x)","f'(x)·g'(x)"], answer: 2 }, // c-rules
      { q: 'The product rule states that the derivative of uv is:', options: ["u'v'","u'v − uv'","(uv)'","u'v + uv'"], answer: 3 }, // c-rules
      { q: 'The quotient rule states that the derivative of u/v is:', options: ["(u'v − uv')/v²","(u'v + uv')/v²","u'/v'","(uv' − u'v)/v²"], answer: 0 }, // c-rules
      { q: 'Differentiation from first principles uses the limit as h → 0 of:', options: ['f(x)/h','(f(x + h) − f(x))/h','(f(x + h) + f(x))/h','f(x + h) − f(x)'], answer: 1 }, // c-first
      { q: 'The derivative of e^(kx) is:', options: ['e^(kx)/k','kxe^(kx)','ke^(kx)','e^(kx)'], answer: 2 }, // c-exp
      { q: 'dy/dx represents:', options: ['The value of y','The area under the curve','The y-intercept','The rate of change of y with respect to x'], answer: 3 }, // c1
      { q: 'The derivative of √x is:', options: ['1/(2√x)','2√x','√x/2','1/√x'], answer: 0 }, // c1
      { q: 'A function is increasing on an interval when:', options: ['d²y/dx² > 0 there','dy/dx > 0 there','dy/dx < 0 there','dy/dx = 0 there'], answer: 1 }, // c-app
    ],
    amber: [
      { q: 'Differentiate x²eˣ.', options: ['x²eˣ','2xeˣ − x²eˣ','2xeˣ + x²eˣ','2xeˣ'], answer: 2 }, // c-rules
      { q: 'Differentiate sin 3x.', options: ['cos 3x','−3cos 3x','3sin 3x','3cos 3x'], answer: 3 }, // c-rules
      { q: 'Differentiate ln(2x + 1).', options: ['2/(2x + 1)','1/(2x + 1)','1/(2x)','2 ln(2x + 1)'], answer: 0 }, // c-rules
      { q: 'The stationary points of y = x³ − 3x occur at:', options: ['x = √3 and x = −√3','x = 1 and x = −1','x = 0 only','x = 3 and x = −3'], answer: 1 }, // c-app
      { q: 'Differentiate (x + 1)/(x − 1).', options: ['1/(x − 1)²','−2/(x + 1)²','−2/(x − 1)²','2/(x − 1)²'], answer: 2 }, // c-rules
      { q: 'For x² + y² = 25, implicit differentiation gives dy/dx =', options: ['x/y','−y/x','y/x','−x/y'], answer: 3 }, // c-imp
      { q: "For the parametric curve x = t², y = t³, dy/dx equals:", options: ["3t/2","6t³","2t/3t²","3t²"], answer: 0 }, // c-par
      { q: 'The derivative of tan x is:', options: ['cot x','sec²x','−cosec²x','sec x tan x'], answer: 1 }, // c-trig
      { q: 'Differentiate e^(x²).', options: ['x²e^(x²)','2e^(x²)','2xe^(x²)','e^(x²)'], answer: 2 }, // c-rules
      { q: 'The gradient of the normal to a curve at a point where dy/dx = m is:', options: ['m','1/m','−m','−1/m'], answer: 3 }, // c-app
      { q: 'Differentiate x ln x.', options: ['ln x + 1','1/x','ln x','x + ln x'], answer: 0 }, // c-rules
      { q: 'Differentiate cos²x.', options: ['sin 2x','−sin 2x','2cos x','−2cos x'], answer: 1 }, // c-rules
      { q: 'Differentiate (2x + 1)⁵.', options: ['2(2x + 1)⁴','10(2x + 1)⁵','10(2x + 1)⁴','5(2x + 1)⁴'], answer: 2 }, // c-rules
      { q: 'A point of inflection on y = f(x) requires that:', options: ["f'(x) = 0 only","f''(x) > 0","f(x) = 0","f''(x) = 0 and f'' changes sign there"], answer: 3 }, // c-app
      { q: 'Differentiate 1/x.', options: ['−1/x²','1/x²','ln x','−1/x'], answer: 0 }, // c1
      { q: 'If displacement is s(t), the velocity is:', options: ['s/t','ds/dt','d²s/dt²','∫s dt'], answer: 1 }, // c-app
      { q: 'The equation of the tangent to y = x² at (2, 4) is:', options: ['y = 2x','y = 4x','y = 4x − 4','y = 4x + 4'], answer: 2 }, // c-app
      { q: 'Differentiate x³ ln x.', options: ['3x² ln x','x² + 3x²','3x² ln x + x³','3x² ln x + x²'], answer: 3 }, // c-rules
      { q: 'The rate of change of the area A of a circle with respect to its radius r is:', options: ['2πr','πr²','2π','πr'], answer: 0 }, // c-app
      { q: 'Differentiate sin x cos x.', options: ['sin 2x','cos 2x','−sin 2x','cos²x'], answer: 1 }, // c-rules
    ],
    red: [
      { q: 'Differentiating y = x² from first principles, the expression ((x + h)² − x²)/h simplifies before the limit to:', options: ['h','2xh + h²','2x + h','2x'], answer: 2 }, // c-first
      { q: 'For x³ + y³ = 6xy, implicit differentiation gives dy/dx =', options: ['(x² − 2y)/(y² − 2x)','(2y − x²)/(2x − y²)','(y² − 2x)/(2y − x²)','(2y − x²)/(y² − 2x)'], answer: 3 }, // c-imp
      { q: 'The stationary point of y = xe^(−x) occurs at:', options: ['x = 1','x = 0','x = −1','x = e'], answer: 0 }, // c-app
      { q: 'Differentiate ln(sec x).', options: ['sec x tan x','tan x','sec x','cot x'], answer: 1 }, // c-rules
      { q: 'The curve y = x⁴ has f″(0) = 0 at the origin, yet the origin is:', options: ['A maximum','A discontinuity','A minimum, since f″ does not change sign','A point of inflection'], answer: 2 }, // c-app
      { q: 'A sphere of radius r has volume V = (4/3)πr³. If dr/dt = 2, then dV/dt equals:', options: ['4πr²','(8/3)πr²','4πr³','8πr²'], answer: 3 }, // c-app
      { q: 'For the parametric curve x = 2t, y = t², the second derivative d²y/dx² equals:', options: ['1/2','t/2','2','t'], answer: 0 }, // c-par
      { q: 'Differentiate xˣ for x > 0.', options: ['xˣ','xˣ(1 + ln x)','x·xˣ⁻¹','xˣ ln x'], answer: 1 }, // c-rules
      { q: 'A closed cylinder has fixed volume V. Its surface area is minimised when:', options: ['The radius is 1','The height is twice the diameter','The height equals the diameter','The height equals the radius'], answer: 2 }, // c-app
      { q: 'Differentiate sin²x cos x.', options: ['2 sin x cos x','−sin³x','2 sin x cos²x','2 sin x cos²x − sin³x'], answer: 3 }, // c-rules
    ],
  },

  '1.10': {
    name: 'Integration',
    green: [
      { q: 'For n ≠ −1, ∫xⁿ dx equals:', options: ['xⁿ⁺¹/(n + 1) + c','nxⁿ⁻¹ + c','xⁿ/n + c','xⁿ⁺¹ + c'], answer: 0 }, // c20
      { q: '∫(1/x) dx equals:', options: ['−1/x² + c','ln|x| + c','1/x² + c','x ln x + c'], answer: 1 }, // c-int
      { q: '∫eˣ dx equals:', options: ['eˣ/x + c','e^(x+1)/(x+1) + c','eˣ + c','xeˣ + c'], answer: 2 }, // c-int
      { q: '∫cos x dx equals:', options: ['−sin x + c','cos x + c','−cos x + c','sin x + c'], answer: 3 }, // c-int
      { q: '∫sin x dx equals:', options: ['−cos x + c','cos x + c','sin x + c','−sin x + c'], answer: 0 }, // c-int
      { q: 'An indefinite integral requires:', options: ['A derivative','A constant of integration','Limits','A substitution'], answer: 1 }, // c20
      { q: '∫2x dx equals:', options: ['2 + c','x²/2 + c','x² + c','2x² + c'], answer: 2 }, // c20
      { q: 'A definite integral of a positive function represents:', options: ['The gradient','The turning point','The derivative','The area between the curve and the x-axis'], answer: 3 }, // c-area
      { q: 'Integration is the reverse process of:', options: ['Differentiation','Factorising','Substitution','Taking logarithms'], answer: 0 }, // c20
      { q: '∫k dx, where k is a constant, equals:', options: ['0','kx + c','k + c','kx²/2 + c'], answer: 1 }, // c20
      { q: '∫x² dx equals:', options: ['x³ + c','3x³ + c','x³/3 + c','2x + c'], answer: 2 }, // c20
      { q: 'If a region lies below the x-axis, its definite integral is:', options: ['Positive','Zero','Undefined','Negative'], answer: 3 }, // c-area
      { q: '∫e^(kx) dx equals:', options: ['e^(kx)/k + c','ke^(kx) + c','e^(kx) + c','e^(kx)/x + c'], answer: 0 }, // c-int
      { q: 'Swapping the limits of a definite integral:', options: ['Makes it zero','Changes its sign','Leaves it unchanged','Doubles it'], answer: 1 }, // c-area
      { q: 'The value of ∫ from 0 to 1 of x dx is:', options: ['0','2','1/2','1'], answer: 2 }, // c-area
      { q: '∫3x² dx equals:', options: ['3x³ + c','6x + c','x³/3 + c','x³ + c'], answer: 3 }, // c20
      { q: '∫(1/x²) dx equals:', options: ['−1/x + c','1/x + c','ln|x²| + c','−2/x³ + c'], answer: 0 }, // c20
      { q: '∫sec²x dx equals:', options: ['−tan x + c','tan x + c','sec x + c','cot x + c'], answer: 1 }, // c-int
      { q: 'The Fundamental Theorem of Calculus links:', options: ['Limits and sequences','Vectors and matrices','Differentiation and integration as inverse processes','Areas and gradients of straight lines'], answer: 2 }, // c-ftc
      { q: 'The value of ∫ from 1 to 3 of (2x + 1) dx is:', options: ['12','8','14','10'], answer: 3 }, // c-area
    ],
    amber: [
      { q: '∫(2x + 1)⁵ dx equals:', options: ['(2x + 1)⁶/12 + c','(2x + 1)⁶/6 + c','10(2x + 1)⁴ + c','(2x + 1)⁶/2 + c'], answer: 0 }, // c-sub
      { q: '∫x e^(x²) dx equals:', options: ['x²e^(x²)/2 + c','½e^(x²) + c','e^(x²) + c','2xe^(x²) + c'], answer: 1 }, // c-sub
      { q: '∫x eˣ dx equals:', options: ['x²eˣ/2 + c','xeˣ + c','eˣ(x − 1) + c','eˣ(x + 1) + c'], answer: 2 }, // c-parts
      { q: '∫1/(2x + 1) dx equals:', options: ['ln|2x + 1| + c','2 ln|2x + 1| + c','−1/(2x + 1)² + c','½ln|2x + 1| + c'], answer: 3 }, // c-sub
      { q: 'The area enclosed between y = x and y = x² from x = 0 to x = 1 is:', options: ['1/6','1/2','1/3','1'], answer: 0 }, // c-area
      { q: '∫sin 2x dx equals:', options: ['2cos 2x + c','−½cos 2x + c','−2cos 2x + c','½cos 2x + c'], answer: 1 }, // c-sub
      { q: 'The value of ∫ from 0 to π of sin x dx is:', options: ['1','π','2','0'], answer: 2 }, // c-area
      { q: 'The integration by parts formula is:', options: ['∫u dv = uv + ∫v du','∫uv dx = ∫u dx ∫v dx','∫u dv = u∫dv','∫u dv = uv − ∫v du'], answer: 3 }, // c-parts
      { q: 'For ∫2x(x² + 1)³ dx the natural substitution is:', options: ['u = x² + 1','u = 2x','u = x³','u = (x² + 1)³'], answer: 0 }, // c-sub
      { q: 'To integrate cos²x, the useful identity is:', options: ['cos²x = ½(1 − cos 2x)','cos²x = ½(1 + cos 2x)','cos²x = 1 − sin²x only','cos 2x = 2 sin x cos x'], answer: 1 }, // c-sub
      { q: 'The value of ∫ from 0 to 2 of (3x² + 2x) dx is:', options: ['10','16','12','8'], answer: 2 }, // c-area
      { q: '∫tan x dx equals:', options: ['ln|cos x| + c','sec²x + c','−ln|sec x| + c','ln|sec x| + c'], answer: 3 }, // c-int
      { q: '∫(x + 1)/x dx equals:', options: ['x + ln|x| + c','ln|x + 1| + c','x²/2 + x + c','1 + ln|x| + c'], answer: 0 }, // c-int
      { q: 'The value of ∫ from −1 to 1 of x³ dx is:', options: ['1/4','0','1/2','2'], answer: 1 }, // c-area
      { q: 'The definite integral of a rate of change over an interval gives:', options: ['The maximum value','The gradient','The total change in the quantity','The average rate'], answer: 2 }, // c-app
      { q: 'To integrate 5/((x + 1)(x − 4)), the first step is:', options: ['Substitute u = x + 1','Integrate by parts','Use the chain rule','Express it in partial fractions'], answer: 3 }, // c-pf
      { q: '∫cos 3x dx equals:', options: ['⅓sin 3x + c','3 sin 3x + c','−⅓sin 3x + c','sin 3x + c'], answer: 0 }, // c-sub
      { q: 'When a substitution is used in a definite integral, you must also:', options: ['Swap the limits','Change the limits to match the new variable','Double the answer','Add a constant of integration'], answer: 1 }, // c-sub
      { q: '∫(3x + 2)⁴ dx equals:', options: ['12(3x + 2)³ + c','(3x + 2)⁵/3 + c','(3x + 2)⁵/15 + c','(3x + 2)⁵/5 + c'], answer: 2 }, // c-sub
      { q: 'The area between the curve y = 4 − x² and the x-axis, between its roots, is:', options: ['16/3','8','16','32/3'], answer: 3 }, // c-area
    ],
    red: [
      { q: '∫ln x dx equals:', options: ['x ln x − x + c','1/x + c','x ln x + c','(ln x)²/2 + c'], answer: 0 }, // c-parts
      { q: '∫x²eˣ dx requires integration by parts applied:', options: ['Not at all','Twice','Once','Three times'], answer: 1 }, // c-parts
      { q: 'The value of ∫ from 0 to π/2 of sin x cos x dx is:', options: ['0','1/4','1/2','1'], answer: 2 }, // c-sub
      { q: '∫1/(x ln x) dx equals:', options: ['(ln x)²/2 + c','1/ln x + c','x ln x + c','ln|ln x| + c'], answer: 3 }, // c-sub
      { q: 'Expressing (2x + 3)/((x + 1)(x + 2)) in partial fractions gives:', options: ['1/(x + 1) + 1/(x + 2)','1/(x + 1) − 1/(x + 2)','2/(x + 1) + 1/(x + 2)','3/(x + 1) − 1/(x + 2)'], answer: 0 }, // c-pf
      { q: '∫sin³x dx is best handled by writing sin³x as:', options: ['3 sin x − sin 3x directly','sin x(1 − cos²x), then substituting u = cos x','(sin x)³ and using the power rule','½(1 − cos 2x) sin x only'], answer: 1 }, // c-sub
      { q: '∫eˣ sin x dx is evaluated by:', options: ['Partial fractions','The power rule','Integrating by parts twice and solving for the original integral','A single substitution'], answer: 2 }, // c-parts
      { q: 'The area enclosed between y = x² and y = 2x is:', options: ['8/3','2','2/3','4/3'], answer: 3 }, // c-area
      { q: 'The value of ∫ from 1 to e of (1/x) dx is:', options: ['1','e','e − 1','0'], answer: 0 }, // c-int
      { q: 'Using the substitution u = x² + 1, the integral ∫ from 0 to 1 of 2x/(x² + 1) dx becomes ∫ from 1 to 2 of (1/u) du, giving:', options: ['2 ln 2','ln 2','ln 3','1'], answer: 1 }, // c-sub
    ],
  },

  '1.11': {
    name: 'Differential Equations',
    green: [
      { q: 'The differential equation dy/dt = ky models:', options: ['Simple harmonic motion','Constant velocity','Exponential growth or decay','Linear growth'], answer: 2 }, // c-de
      { q: 'To solve a separable equation dy/dx = f(x)g(y), you first:', options: ['Differentiate both sides','Substitute y = 0','Use the product rule','Separate the variables and integrate both sides'], answer: 3 }, // c-de
      { q: 'A general solution of a differential equation contains:', options: ['An arbitrary constant','No constants','Only numbers','A second derivative'], answer: 0 }, // c-de
      { q: 'To obtain a particular solution you need:', options: ['A limit','An initial or boundary condition','A second differential equation','A substitution'], answer: 1 }, // c-de
      { q: 'Solve dy/dx = 2x.', options: ['y = x²','y = 2x² + c','y = x² + c','y = 2 + c'], answer: 2 }, // c-de
      { q: 'An equation involving only dy/dx and not higher derivatives is called:', options: ['Second order','Linear','Homogeneous','First order'], answer: 3 }, // c-de
      { q: 'Solve dy/dx = 3.', options: ['y = 3x + c','y = 3 + c','y = 3x','y = x³ + c'], answer: 0 }, // c-de
      { q: 'If a quantity decreases at a rate proportional to its amount, then:', options: ['dy/dt = 0','dy/dt = −ky with k > 0','dy/dt = ky with k > 0 (growth)','dy/dt = k'], answer: 1 }, // c-de
      { q: 'The solution of dy/dx = y is:', options: ['y = Ax','y = ln x + c','y = Aeˣ','y = x + c'], answer: 2 }, // c-de
      { q: 'The solution of dP/dt = kP with P = P₀ at t = 0 is:', options: ['P = P₀ + kt (linear)','P = P₀kt','P = kP₀t²','P = P₀e^(kt)'], answer: 3 }, // c-de
      { q: "Newton's law of cooling states that the rate of cooling is proportional to:", options: ['The excess temperature over the surroundings','The time elapsed','The square of the temperature','The mass only'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = 1/x for x > 0.', options: ['y = x ln x + c','y = ln x + c','y = −1/x² + c','y = 1/x + c'], answer: 1 }, // c-de
      { q: 'If dy/dx = 0 for all x, then y is:', options: ['Exponential','Zero','Constant','Linear in x'], answer: 2 }, // c-de
      { q: 'In dy/dt = ky, the variable t is the:', options: ['Dependent variable','Constant of integration','Rate','Independent variable'], answer: 3 }, // c-de
      { q: 'The equation dy/dx = x/y is:', options: ['Separable','Not separable','Second order','Linear with constant coefficients'], answer: 0 }, // c-de
      { q: 'If v is velocity and t is time, dv/dt represents:', options: ['Distance','Acceleration','Displacement','Speed'], answer: 1 }, // c-de
      { q: 'Solve dy/dx = eˣ.', options: ['y = eˣ/x + c','y = e^(x+1) + c','y = eˣ + c','y = xeˣ + c'], answer: 2 }, // c-de
      { q: 'In an exponential decay model, the constant k is:', options: ['Always negative in the solution exponent only','Zero','Undefined','Positive, with a minus sign in the equation'], answer: 3 }, // c-de
      { q: 'Forming a differential equation from a worded problem means:', options: ['Translating the stated rate of change into an equation','Solving for y directly','Drawing a graph','Finding a limit'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = cos x.', options: ['y = −cos x + c','y = sin x + c','y = −sin x + c','y = cos x + c'], answer: 1 }, // c-de
    ],
    amber: [
      { q: 'Solve dy/dx = xy given y = 1 when x = 0.', options: ['y = x²/2 + 1','y = e^(x²)','y = e^(x²/2)','y = eˣ'], answer: 2 }, // c-de
      { q: 'Solve dy/dx = y/x for x > 0.', options: ['y = A/x','y = A ln x','y = Aeˣ','y = Ax'], answer: 3 }, // c-de
      { q: 'Solve dN/dt = −kN with N = N₀ at t = 0.', options: ['N = N₀e^(−kt)','N = N₀ − kt','N = N₀e^(kt), k > 0','N = N₀/kt'], answer: 0 }, // c-de
      { q: "Newton's law of cooling is written as:", options: ['dθ/dt = −kt','dθ/dt = −k(θ − θ₀)','dθ/dt = −kθ²','dθ/dt = k'], answer: 1 }, // c-de
      { q: 'Solve dy/dt = 3y given y = 5 when t = 0.', options: ['y = 5 + 3t','y = 15t','y = 5e^(3t)','y = 3e^(5t)'], answer: 2 }, // c-de
      { q: 'Solve dy/dx = y cos x.', options: ['y = A sin x','y = Ae^(cos x)','y = A + sin x','y = Ae^(sin x)'], answer: 3 }, // c-de
      { q: 'Solve dy/dx = eˣ/y.', options: ['y² = 2eˣ + c','y = eˣ + c','y² = eˣ + c (no factor 2)','y = 2eˣ + c'], answer: 0 }, // c-de
      { q: 'The equation dy/dt = k(A − y) describes a quantity that:', options: ['Oscillates','Approaches the limiting value A','Grows without limit','Decays to zero'], answer: 1 }, // c-de
      { q: 'Solve dy/dx = 2xy².', options: ['1/y = x² + c (sign lost)','y² = x² + c','−1/y = x² + c','y = x² + c'], answer: 2 }, // c-de
      { q: 'For radioactive decay dN/dt = −kN, the half-life T satisfies:', options: ['kT = 2','T = k/2','kT = 1','kT = ln 2'], answer: 3 }, // c-de
      { q: 'Solve dy/dx = x²y.', options: ['y = Ae^(x³/3)','y = Ae^(x²) (x² not x³)','y = x³/3 + c','y = Ax³'], answer: 0 }, // c-de
      { q: 'A logistic model is preferred to dP/dt = kP because:', options: ['It always decreases','It includes a carrying capacity that limits growth','It is easier to solve','It has no constants'], answer: 1 }, // c-de
      { q: 'Solve dy/dx = (1 + y)/x for x > 0.', options: ['1 + y = A ln x','y = x + c','1 + y = Ax','y = Ax'], answer: 2 }, // c-de
      { q: 'Water drains from a tank so that dV/dt = −k√V. This equation is:', options: ['Not separable','Second order','Linear in V','Separable, giving √V as a linear function of t'], answer: 3 }, // c-de
      { q: 'If dy/dx = k(y − 5) and y > 5 with k > 0, then y:', options: ['Increases away from 5','Decreases towards 5','Stays constant','Oscillates about 5'], answer: 0 }, // c-de
      { q: 'The statement "the rate of growth is proportional to the square of the population" becomes:', options: ['dP/dt = 2kP','dP/dt = kP²','dP/dt = kP','dP/dt = k√P'], answer: 1 }, // c-de
      { q: 'Solve dy/dx = 6x² given y = 4 when x = 1.', options: ['y = 2x³ + 4','y = 6x³ + 4','y = 2x³ + 2','y = 2x³'], answer: 2 }, // c-de
      { q: 'Separating dy/dx = y² sin x gives:', options: ['∫y² dy = ∫sin x dx','∫y dy = ∫sin x dx','∫dy = ∫y² sin x dx (unseparated)','∫y⁻² dy = ∫sin x dx'], answer: 3 }, // c-de
      { q: 'In the model dθ/dt = −k(θ − 20) with θ = 100 at t = 0, the solution is:', options: ['θ = 20 + 80e^(−kt)','θ = 100e^(−kt)','θ = 20 + 100e^(−kt)','θ = 80 + 20e^(−kt)'], answer: 0 }, // c-de
      { q: 'The long-term value predicted by θ = 20 + 80e^(−kt) with k > 0 is:', options: ['0','20','100','80'], answer: 1 }, // c-de
    ],
    red: [
      { q: 'To solve the logistic equation dy/dx = y(1 − y), the required technique is:', options: ['Substitute u = y²','Use the product rule','Separate and use partial fractions on 1/(y(1 − y))','Integrate by parts'], answer: 2 }, // c-de
      { q: 'Solve x dy/dx + y = 0.', options: ['y = cx','y = c − x','x + y = c','xy = c'], answer: 3 }, // c-de
      { q: 'A body falls subject to dv/dt = g − kv. Its terminal velocity is:', options: ['g/k','gk','k/g','0'], answer: 0 }, // c-de
      { q: 'Solve dy/dx = y tan x.', options: ['y = A sin x','y = A sec x','y = A cos x','y = A tan x'], answer: 1 }, // c-de
      { q: 'Solve (1 + x²) dy/dx = xy.', options: ['y = A ln(1 + x²)','y = Ae^(x²)','y = A√(1 + x²)','y = A(1 + x²)'], answer: 2 }, // c-de
      { q: 'Solve dy/dx = (x + 1)/(y − 2).', options: ['(y − 2)² = 2x² + 2x + c (doubled)','y − 2 = x² + 2x + c','y² = x² + c','(y − 2)² = x² + 2x + c'], answer: 3 }, // c-de
      { q: 'In dv/dt = g − kv, the approach to terminal velocity is:', options: ['Exponential, never exactly reaching it in finite time','Linear','Instantaneous','Oscillatory'], answer: 0 }, // c-de
      { q: 'A criticism of the model dP/dt = kP for a real population is that:', options: ['It has no initial condition','It predicts unbounded growth, ignoring finite resources','It cannot be solved','It requires P < 0'], answer: 1 }, // c-de
      { q: 'Solve dy/dx = e^(x−y).', options: ['e^(−y) = eˣ + c','y = e^(x−y) + c','e^y = eˣ + c','y = eˣ + c'], answer: 2 }, // c-de
      { q: 'A tank holds 100 litres of brine. If salt enters at a constant rate and the well-mixed solution leaves at the same volumetric rate, the amount of salt S satisfies an equation of the form:', options: ['dS/dt = aS','dS/dt = a','dS/dt = −bS² (outflow only)','dS/dt = a − bS'], answer: 3 }, // c-de
    ],
  },

  '1.12': {
    name: 'Numerical Methods',
    green: [
      { q: 'If f is continuous and f(a) and f(b) have opposite signs, then in the interval (a, b) there is:', options: ['At least one root of f(x) = 0','Exactly one root and no turning points','No root','A turning point'], answer: 0 }, // e1
      { q: 'The Newton-Raphson formula is:', options: ["x₍ₙ₊₁₎ = xₙ − f'(xₙ)/f(xₙ)","x₍ₙ₊₁₎ = xₙ − f(xₙ)/f'(xₙ)","x₍ₙ₊₁₎ = xₙ + f(xₙ)/f'(xₙ)","x₍ₙ₊₁₎ = f(xₙ)/f'(xₙ)"], answer: 1 }, // e4
      { q: 'A fixed point iteration requires the equation to be rearranged into the form:', options: ['y = mx + c','g(x) = 0','x = g(x)','f(x) = 0'], answer: 2 }, // e3
      { q: 'The trapezium rule is used to find an approximate value of:', options: ['A derivative at a single point','A root','A limit','A definite integral'], answer: 3 }, // c34
      { q: 'Increasing the number of strips in the trapezium rule generally:', options: ['Improves the accuracy','Reduces the accuracy of the estimate','Has no effect','Changes the sign'], answer: 0 }, // c34
      { q: 'Staircase and cobweb diagrams are used to illustrate:', options: ['Differentiation from first principles of a curve','The behaviour of a fixed point iteration','The trapezium rule','Integration by parts'], answer: 1 }, // e3
      { q: 'A numerical iteration applied to an equation:', options: ['Always diverges','Gives an exact answer','May converge to a root or may diverge','Always converges'], answer: 2 }, // e5
      { q: 'For n strips over the interval from a to b, the strip width h is:', options: ['(b − a)n','(a + b)/n','n/(b − a)','(b − a)/n'], answer: 3 }, // c34
      { q: 'The Newton-Raphson method requires knowledge of:', options: ["The derivative f'(x)","The second derivative only",'The integral of f','No extra information'], answer: 0 }, // e4
      { q: 'A root of f(x) = 0 corresponds to a point where the graph of y = f(x):', options: ['Has an asymptote','Meets the x-axis','Meets the y-axis','Has a maximum'], answer: 1 }, // e1
      { q: 'Any iterative method requires:', options: ['An exact solution','A definite integral','A starting value','Two derivatives'], answer: 2 }, // e3
      { q: 'A change of sign method may fail if the curve:', options: ['Crosses the x-axis once at a steep gradient','Is a straight line','Has a positive gradient','Touches the x-axis without crossing it'], answer: 3 }, // e2
      { q: 'Numerical methods generally produce:', options: ['An approximation to a specified accuracy','An exact answer','A general formula','A proof'], answer: 0 }, // e1
      { q: 'Using n strips, the number of ordinates needed for the trapezium rule is:', options: ['2n','n + 1','n','n − 1'], answer: 1 }, // c34
      { q: 'If f(1) < 0 and f(2) > 0 for a continuous f, a root lies in:', options: ['(2, 3)','No interval','(1, 2)','(0, 1)'], answer: 2 }, // e1
      { q: 'Summing the areas of rectangles under a curve gives:', options: ['The exact area','The gradient','A root','A bound on the area under the curve'], answer: 3 }, // c35
      { q: 'Geometrically, one Newton-Raphson step follows:', options: ['The tangent at the current point to where it meets the x-axis','The chord between two points','A vertical line','The normal to the curve'], answer: 0 }, // e4
      { q: 'A change of sign method can also fail if, in the interval, the function has:', options: ['A minimum above the axis','A vertical asymptote','A single root','A constant value'], answer: 1 }, // e2
      { q: 'An iteration is said to converge when successive iterates:', options: ['Increase without limit','Repeat exactly','Get arbitrarily close to a fixed value','Alternate in sign'], answer: 2 }, // e5
      { q: 'Locating an interval containing a root is usually done:', options: ['After the iteration converges','Instead of any iteration','Only for linear equations','Before starting an iterative method, to give a starting value'], answer: 3 }, // e1
    ],
    amber: [
      { q: 'For f(x) = x³ − 5 and x₀ = 2, one Newton-Raphson iteration gives x₁ =', options: ['1.75','2.25','1.5','1.6'], answer: 0 }, // e4
      { q: 'The equation x³ − x − 4 = 0 can be rearranged for iteration as:', options: ['x = x³ + 4','x = (x + 4)^(1/3)','x = x³ − 4','x = 4/x³'], answer: 1 }, // e3
      { q: 'For f(x) = x³ − 2x − 5, a root lies in the interval:', options: ['(1, 2)','(3, 4)','(2, 3), since f(2) = −1 and f(3) = 16','(0, 1)'], answer: 2 }, // e1
      { q: 'The iteration x₍ₙ₊₁₎ = √(xₙ + 2) converges to:', options: ['1','4','−1','2'], answer: 3 }, // e3
      { q: 'For f(x) = x² − 2 and x₀ = 1, one Newton-Raphson iteration gives x₁ =', options: ['1.5','0.5','2','1.25'], answer: 0 }, // e4
      { q: 'The Newton-Raphson method fails at a point where:', options: ['f is increasing',"f'(xₙ) = 0","f(xₙ) = 0",'xₙ is negative'], answer: 1 }, // e5
      { q: 'The trapezium rule applied to a curve that is concave upwards gives:', options: ['The exact value','A negative value','An overestimate of the integral','An underestimate of the integral'], answer: 2 }, // c34
      { q: 'The trapezium rule applied to a curve that is concave downwards gives:', options: ['An overestimate of the integral, whatever the strip width','The exact value','Zero','An underestimate of the integral'], answer: 3 }, // c34
      { q: 'Using 4 strips over the interval from 1 to 3, the strip width h is:', options: ['0.5','0.25','2','4'], answer: 0 }, // c34
      { q: 'A change of sign search over an interval containing two roots may:', options: ['Give an exact answer','Detect no sign change and so miss both roots','Always find both','Always find one'], answer: 1 }, // e2
      { q: 'A fixed point iteration x = g(x) converges near a root when, approximately:', options: ["g'(x) = 0 exactly","g(x) = 0","|g'(x)| < 1 near the root","|g'(x)| > 1 near the root"], answer: 2 }, // e5
      { q: 'A cobweb diagram (rather than a staircase) arises when, near the root:', options: ["g'(x) is positive","g'(x) = 1",'g is constant',"g'(x) is negative"], answer: 3 }, // e3
      { q: 'For an increasing function, rectangles drawn using left-hand ordinates give:', options: ['A lower bound for the area','An upper bound for the area','The exact area','A negative area'], answer: 0 }, // c35
      { q: 'The equation eˣ = 3 − x has a root in the interval:', options: ['(2, 3)','(0, 1)','(1, 2)','(−1, 0)'], answer: 1 }, // e1
      { q: 'The trapezium rule formula for n strips is approximately:', options: ['(h/3)[y₀ + 4y₁ + yₙ]','h(y₀ + yₙ)','(h/2)[y₀ + yₙ + 2(y₁ + … + y₍ₙ₋₁₎)]','h[y₀ + y₁ + … + yₙ]'], answer: 2 }, // c34
      { q: 'Rearranging x² − x − 3 = 0 as x = 3/(x − 1) is valid provided:', options: ['x > 0','x is an integer','x < 3','x ≠ 1'], answer: 3 }, // e3
      { q: 'To show a root is 1.86 correct to 2 decimal places, you check the sign of f at:', options: ['1.855 and 1.865','1.86 only','1.8 and 1.9','1.85 and 1.86 (either side)'], answer: 0 }, // e1
      { q: 'If an iteration produces values increasing without limit, the iteration has:', options: ['Reached machine precision','Diverged','Converged','Found a root'], answer: 1 }, // e5
      { q: 'A different rearrangement of the same equation into x = g(x) may:', options: ['Never converge','Change the roots','Converge when another rearrangement diverges','Always give the same behaviour'], answer: 2 }, // e3
      { q: 'Applying Newton-Raphson to f(x) = x² − a gives the iteration:', options: ['x₍ₙ₊₁₎ = xₙ − a','x₍ₙ₊₁₎ = a/xₙ','x₍ₙ₊₁₎ = 2xₙ − a','x₍ₙ₊₁₎ = ½(xₙ + a/xₙ)'], answer: 3 }, // e4
    ],
    red: [
      { q: 'For f(x) = (x − 2)², a change of sign method applied around x = 2 fails because:', options: ['The curve touches the x-axis without crossing, so f never changes sign','The function is discontinuous','There is no root','The derivative is undefined'], answer: 0 }, // e2
      { q: 'For f(x) = 1/(x − 2), the values f(1) = −1 and f(3) = 1 change sign, yet:', options: ['f is continuous throughout','There is no root — the sign change is caused by a vertical asymptote','There is a root at x = 2','The method has converged'], answer: 1 }, // e2
      { q: 'For f(x) = x³ − 5 with x₀ = 2, two Newton-Raphson iterations give x₂ ≈', options: ['1.6980','1.7320','1.7109','1.7500'], answer: 2 }, // e4
      { q: 'Newton-Raphson typically converges faster than a simple fixed point iteration because its error is:', options: ['Halved at each step, like the interval bisection method','Constant','Increasing','Roughly squared at each step near a simple root'], answer: 3 }, // e4
      { q: 'If a fixed point iteration has |g′(x)| > 1 near the root, then the iteration:', options: ['Diverges away from the root','Converges quickly','Converges slowly','Finds a different root further away from the start'], answer: 0 }, // e5
      { q: 'Halving the strip width in the trapezium rule reduces the error by a factor of roughly:', options: ['16','4','2','8'], answer: 1 }, // c34
      { q: 'Newton-Raphson started very close to a stationary point of f may:', options: ['Fail to start','Give an exact answer','Jump far away, converging to a different root or diverging','Always converge to the nearest root, but more slowly than usual'], answer: 2 }, // e5
      { q: 'To justify that a trapezium estimate is an overestimate, you should state that on the interval the curve is:', options: ['Increasing','Positive','Differentiable','Concave upwards, so each chord lies above the curve'], answer: 3 }, // c34
      { q: 'The iteration x₍ₙ₊₁₎ = (xₙ + 4)^(1/3) applied to x³ − x − 4 = 0 converges because near the root:', options: ["|g'(x)| < 1","|g'(x)| > 1","g'(x) = 1",'g is linear'], answer: 0 }, // e5
      { q: 'Upper and lower rectangle sums for a monotonic function on an interval:', options: ['Are equal','Bracket the true value of the integral','Both overestimate the true value of the integral','Both underestimate it'], answer: 1 }, // c35
    ],
  },

  '1.13': {
    name: 'Vectors',
    green: [
      { q: 'The magnitude of the vector a = 3i + 4j is:', options: ['12','25','5','7'], answer: 2 }, // v3
      { q: 'The position vector of the point (2, 3) is:', options: ['3i + 2j','i + j','2i − 3j','2i + 3j'], answer: 3 }, // v4
      { q: 'For points A and B with position vectors a and b, the vector AB equals:', options: ['b − a','a − b','a + b','(a + b)/2'], answer: 0 }, // v4
      { q: 'A unit vector is a vector whose magnitude is:', options: ['Its direction','1','0','Any positive number'], answer: 1 }, // v1
      { q: 'Multiplying a vector by the scalar 3:', options: ['Rotates it','Leaves it unchanged','Triples its magnitude and keeps its direction','Triples its direction'], answer: 2 }, // v2
      { q: 'Vectors are added by:', options: ['Multiplying components','Adding magnitudes only','Adding directions only','Adding corresponding components'], answer: 3 }, // v2
      { q: 'In printed work, vectors are conventionally shown in:', options: ['Bold type','Italic type','Capital letters','Brackets only'], answer: 0 }, // v1
      { q: 'Two non-zero vectors are parallel if one is:', options: ['Of the same magnitude','A scalar multiple of the other','Equal to the other','Perpendicular to the other'], answer: 1 }, // v1
      { q: 'The magnitude of the vector a is written:', options: ['1/a','−a','|a| or a','a²'], answer: 2 }, // v1
      { q: 'The zero vector has:', options: ['Magnitude 1','Infinite magnitude','A direction along i','Zero magnitude and no defined direction'], answer: 3 }, // v1
      { q: 'The magnitude of the vector 5i is:', options: ['5','1','25','0'], answer: 0 }, // v3
      { q: 'The vectors i and j are unit vectors directed along:', options: ['The line y = x','The x-axis and y-axis respectively','The y-axis and x-axis respectively','Any two directions'], answer: 1 }, // v1
      { q: 'Extending vector work to three dimensions introduces the unit vector:', options: ['m, along the y-axis','n, along the origin','k, along the z-axis','l, along the x-axis'], answer: 2 }, // v7
      { q: 'Two vectors are equal when they have:', options: ['The same magnitude only','The same direction only','The same starting point','The same magnitude and the same direction'], answer: 3 }, // v1
      { q: 'Vector addition is commutative, meaning:', options: ['a + b = b + a','a + b = a − b','a + b = 0','ab = ba'], answer: 0 }, // v2
      { q: 'The magnitude of 6i + 8j is:', options: ['100','10','14','48'], answer: 1 }, // v3
      { q: 'Points that lie on the same straight line are described as:', options: ['Parallel','Perpendicular','Collinear','Coplanar'], answer: 2 }, // v1
      { q: 'The magnitude of −a compared with the magnitude of a is:', options: ['Negative','Larger','Zero','Equal'], answer: 3 }, // v2
      { q: 'The sum of vectors representing forces is interpreted as:', options: ['The resultant force','The average force on the object','The friction','The moment'], answer: 0 }, // v6
      { q: 'A vector written in column form (3, −2) is equivalent to:', options: ['2i − 3j','3i − 2j','−2i + 3j','3i + 2j'], answer: 1 }, // v1
    ],
    amber: [
      { q: 'The magnitude of a = 2i − 3j + 6k is:', options: ['41','5','7','11'], answer: 2 }, // v7
      { q: 'A unit vector in the direction of 3i + 4j is:', options: ['(3i + 4j)/7','3i + 4j','(4i + 3j)/5','(3i + 4j)/5'], answer: 3 }, // v3
      { q: 'For A(1, 2) and B(4, 6), the vector AB and its magnitude are:', options: ['3i + 4j, magnitude 5','5i + 8j, magnitude 9','3i + 4j, magnitude 7','−3i − 4j, magnitude 5'], answer: 0 }, // v4
      { q: 'The vector 2i + kj is parallel to 4i + 6j when k equals:', options: ['12','3','2','6'], answer: 1 }, // v1
      { q: 'The position vector of the midpoint of AB, where A and B have position vectors a and b, is:', options: ['a + b','(a − b)/2','(a + b)/2','(b − a)/2'], answer: 2 }, // v4
      { q: 'In magnitude-direction form, 3i + 3j has magnitude and direction:', options: ['3 at 45°','6 at 45°','3√2 at 60°','3√2 at 45° above the x-axis'], answer: 3 }, // v3
      { q: 'The distance between the points (1, 2, 3) and (4, 6, 3) is:', options: ['5','7','9','25'], answer: 0 }, // v7
      { q: 'A vector of magnitude 10 at 30° above the x-axis has components:', options: ['5i + 5√3 j only','10cos30° i + 10sin30° j','10sin30° i + 10cos30° j','10i + 30j'], answer: 1 }, // v3
      { q: 'The magnitude of i + 2j + 2k is:', options: ['9','7','3','5'], answer: 2 }, // v7
      { q: 'If a = 4i + j and b = i − 2j, then a − b equals:', options: ['5i − j','3i − j','−3i − 3j','3i + 3j'], answer: 3 }, // v2
      { q: 'Two forces 3i + 2j and −i + 4j act on a particle. Their resultant is:', options: ['2i + 6j','4i − 2j','2i − 2j','−3i + 8j'], answer: 0 }, // v6
      { q: 'A unit vector in the direction of 2i − j + 2k is:', options: ['2i − j + 2k','(2i − j + 2k)/3','(2i − j + 2k)/5','(2i − j + 2k)/9'], answer: 1 }, // v7
      { q: 'Multiplying a vector by −1:', options: ['Leaves it unchanged','Makes it a unit vector','Reverses its direction and keeps its magnitude','Reverses its magnitude'], answer: 2 }, // v2
      { q: 'Points A, B and C are collinear if:', options: ['AB equals BC','|AB| = |BC|','AB + BC = 0','AB is a scalar multiple of BC'], answer: 3 }, // v1
      { q: 'If the position vectors of A and B are 2i + j and 6i + 4j, then |AB| equals:', options: ['5','7','3','25'], answer: 0 }, // v5
      { q: 'The resultant of three forces is zero when:', options: ['Each is a unit vector','Their vector sum is the zero vector','Their magnitudes are equal','They are parallel'], answer: 1 }, // v6
      { q: 'The vector 6i − 8j written as a unit vector is:', options: ['6i − 8j','0.6i + 0.8j','0.6i − 0.8j','0.8i − 0.6j'], answer: 2 }, // v3
      { q: 'The magnitude of the vector from (0, 0, 0) to (2, 3, 6) is:', options: ['11','9','5','7'], answer: 3 }, // v7
      { q: 'If a = 3i − j and b = λ(3i − j), then a and b are:', options: ['Parallel for every non-zero λ','Equal for every λ','Perpendicular','Never parallel'], answer: 0 }, // v1
      { q: 'For a vector with components (−3, 4), the angle it makes with the positive x-axis lies in:', options: ['The fourth quadrant','The second quadrant','The first quadrant','The third quadrant'], answer: 1 }, // v3
    ],
    red: [
      { q: 'A, B and C have position vectors i + j, 3i + 5j and 5i + 9j. These points are:', options: ['The vertices of a right angle','Coincident','Collinear, since AB = 2i + 4j and BC = 2i + 4j','Not collinear'], answer: 2 }, // v1
      { q: 'The point P divides AB in the ratio 2:1, where A and B have position vectors a and b. The position vector of P is:', options: ['(2a + b)/3','(a + b)/2','2b − a','(a + 2b)/3'], answer: 3 }, // v4
      { q: 'A vector has components (−3, −4). Its magnitude and direction from the positive x-axis are:', options: ['5, at 180° + 53.1° = 233.1°','5, at 53.1°','7, at 233.1°','5, at 126.9°'], answer: 0 }, // v3
      { q: 'OACB is a parallelogram with OA = a and OB = b. The vector OC equals:', options: ['(a + b)/2','a + b','a − b','b − a'], answer: 1 }, // v2
      { q: 'The value of λ for which 2i + 4j + λk is parallel to i + 2j + 3k is:', options: ['2','12','6','3'], answer: 2 }, // v7
      { q: 'Three forces F₁ = 2i + 3j, F₂ = −5i + j and F₃ act on a particle in equilibrium. F₃ equals:', options: ['−3i + 4j','3i + 4j','−7i − 2j','3i − 4j'], answer: 3 }, // v6
      { q: 'The centroid of a triangle with vertices at position vectors a, b and c has position vector:', options: ['(a + b + c)/3','(a + b + c)/2','a + b + c','(a + b)/2'], answer: 0 }, // v4
      { q: 'If |a| = 5 and |b| = 12, the magnitude of a + b:', options: ['Is always 7','Lies between 7 and 17 inclusive, depending on their directions','Is always 17','Is always 13'], answer: 1 }, // v2
      { q: 'For A(2, −1, 4) and B(5, 3, 0), the distance AB is:', options: ['7','√61','√41','√29'], answer: 2 }, // v7
      { q: 'M is the midpoint of BC in triangle ABC with position vectors a, b, c. The vector AM equals:', options: ['(b + c)/2 + a','(b − c)/2 − a','a − (b + c)/2','(b + c)/2 − a'], answer: 3 }, // v4
    ],
  },

  '2.1': {
    name: 'Sampling',
    green: [
      { q: 'A population in statistics means:', options: ['The entire group being studied','Only the people living in a country','A sample of 100','The largest subgroup'], answer: 0 }, // p21
      { q: 'A sample is:', options: ['A biased group','A subset of the population','The whole population being studied','A summary statistic'], answer: 1 }, // p21
      { q: 'In simple random sampling:', options: ['Groups are sampled whole','Volunteers come forward','Every sample of the required size is equally likely to be selected','The first items in a list are chosen'], answer: 2 }, // p23
      { q: 'Opportunity sampling means selecting:', options: ['Every kth member of a list','Proportionally from subgroups (strata)','Whole clusters at random','Whoever is conveniently available'], answer: 3 }, // p24
      { q: 'Systematic sampling means selecting:', options: ['Every kth member from an ordered list','Whoever is available at the time of sampling','Volunteers','Whole groups'], answer: 0 }, // p24
      { q: 'Stratified sampling means:', options: ['Choosing every kth item','Sampling each subgroup in proportion to its size in the population','Sampling only one subgroup','Choosing volunteers'], answer: 1 }, // p24
      { q: 'Quota sampling means:', options: ['Sampling whole clusters','Using a census','Selecting until a set number from each category is reached','Selecting at random from a complete list of the whole population'], answer: 2 }, // p24
      { q: 'Cluster sampling means:', options: ['Sampling every kth item','Sampling proportionally by subgroup, choosing individuals at random from each','Asking for volunteers','Dividing the population into groups and sampling whole groups'], answer: 3 }, // p24
      { q: 'A self-selected sample consists of:', options: ['Those who choose to take part','Those chosen at random from a sampling frame','Every kth person','A stratified subset'], answer: 0 }, // p24
      { q: 'A census collects data from:', options: ['Volunteers only','The whole population','A random sample of the population','A single cluster'], answer: 1 }, // p21
      { q: 'A sample mean is often used as:', options: ['A measure of spread','A significance level','An estimate of the population mean','The exact value of the population mean itself'], answer: 2 }, // p22
      { q: 'Bias in sampling means:', options: ['The sample is small','The data are continuous','The mean is large','The sampling method systematically favours certain outcomes'], answer: 3 }, // p25
      { q: 'Two different samples from the same population:', options: ['May lead to different conclusions','Must give identical results if both are random','Are always biased','Must be the same size'], answer: 0 }, // p22
      { q: 'A sampling frame is:', options: ['The set of results obtained','A list of all members of the population from which the sample is drawn','The size of the sample','The margin of error'], answer: 1 }, // p23
      { q: 'A main reason for sampling rather than taking a census is:', options: ['It removes all bias','It is always required by law','Cost and time','Greater accuracy'], answer: 2 }, // p25
      { q: 'In general, increasing the sample size:', options: ['Increases bias','Has no effect','Reduces the population','Makes estimates of population quantities more reliable'], answer: 3 }, // p22
      { q: 'A quantity calculated from a sample is called:', options: ['A statistic','A parameter','A population','A census'], answer: 0 }, // p22
      { q: 'A quantity describing the whole population is called:', options: ['An outlier','A parameter','A statistic','A sample'], answer: 1 }, // p22
      { q: 'Random number generators are used in sampling to:', options: ['Remove outliers','Calculate the mean','Select members without favouring any particular ones','Increase the sample size'], answer: 2 }, // p23
      { q: 'Using a sample to draw a conclusion about the population is called:', options: ['Enumeration','Stratification','Cleaning','Inference'], answer: 3 }, // p22
    ],
    amber: [
      { q: 'A researcher selects every 10th name from an alphabetical register. This is:', options: ['Systematic sampling','Simple random sampling','Stratified sampling','Cluster sampling'], answer: 0 }, // p24
      { q: "A school has 600 girls and 400 boys. A random sample of 30 girls and a separate random sample of 20 boys are chosen from the school lists. This is:", options: ["Opportunity sampling","Stratified sampling","Quota sampling","Cluster sampling"], answer: 1 }, // p24
      { q: 'A journalist interviews the first 30 people leaving a station. This is:', options: ['Systematic sampling','Stratified sampling','Opportunity sampling','Simple random sampling'], answer: 2 }, // p24
      { q: 'An online poll is answered by readers who choose to respond. The main problem is:', options: ['The sample is too random','The population is too small','There is no sampling frame needed','The sample is self-selected and likely to be biased towards those with strong views'], answer: 3 }, // p25
      { q: 'A town is divided into 20 districts and 3 whole districts are surveyed. This is:', options: ['Cluster sampling','Stratified sampling','Systematic sampling','Quota sampling'], answer: 0 }, // p24
      { q: 'A school of 1200 students has 300 in Year 12. In a stratified sample of 80, the number from Year 12 should be:', options: ['15','20','30','40'], answer: 1 }, // p24
      { q: 'The main advantage of stratified over simple random sampling is that it:', options: ['Removes the need for a sampling frame, so it is always quicker and cheaper','Guarantees no bias at all','Ensures each subgroup is represented in proportion to its size','Is always cheaper'], answer: 2 }, // p25
      { q: 'A disadvantage of opportunity sampling is that:', options: ['It requires a full sampling frame of the whole population','It is very time-consuming','It needs random numbers','It is unlikely to be representative of the population'], answer: 3 }, // p25
      { q: 'The main difference between quota and stratified sampling is that quota sampling:', options: ['Does not select within each category at random','Uses larger samples','Requires a sampling frame for each separate category','Is always unbiased'], answer: 0 }, // p24
      { q: 'Simple random sampling requires:', options: ['A large budget','A complete sampling frame','A stratified population with known sizes','Volunteers'], answer: 1 }, // p23
      { q: 'An incomplete sampling frame is a problem because:', options: ['It changes the population mean','It prevents calculation of the median and the quartiles of the sample data','Some members of the population can never be selected, introducing bias','It makes the sample too large'], answer: 2 }, // p25
      { q: 'Non-response bias arises when:', options: ['The sample is too small','Random numbers are reused','The population is finite','Those who do not respond differ systematically from those who do'], answer: 3 }, // p25
      { q: 'Systematic sampling can go wrong if the ordered list:', options: ['Has a repeating pattern matching the sampling interval','Is alphabetical','Is very long','Contains no duplicates, so each member can only be picked once'], answer: 0 }, // p25
      { q: 'A census is most appropriate when:', options: ['Time is short','The population is small and accessible','The population is very large and spread out','Testing destroys the item'], answer: 1 }, // p25
      { q: 'A census would be unsuitable for testing the lifetime of light bulbs because:', options: ['The population is too small','Bulbs are not random','Testing destroys every bulb','Bulbs are too cheap'], answer: 2 }, // p25
      { q: 'The sample variance is used as:', options: ['A measure of bias in the sampling method used','The population mean','A significance level','An estimate of the population variance'], answer: 3 }, // p22
      { q: 'A large data set is issued in advance of the examination so that learners:', options: ['Become familiar with its contexts and can interpret related data more confidently','Can memorise every value','Need not revise statistics','Can avoid using a calculator'], answer: 0 }, // LDS
      { q: 'In the examination, learners working with the large data set:', options: ['Are given the whole data set','Will not have a printout, though selected data or summary statistics may be given','Must bring a full printout','May use the internet'], answer: 1 }, // LDS
      { q: 'A conclusion drawn from a sample applies to the population only:', options: ['If the sample is small','If the data are categorical','With some uncertainty, since the sample may not be representative','With certainty'], answer: 2 }, // p22
      { q: 'Choosing an appropriate sampling technique depends mainly on:', options: ['The mean of the data','The number of outliers','The significance level','The context, the available sampling frame and practical constraints'], answer: 3 }, // p25
    ],
    red: [
      { q: 'A college has 480 in Year 12 and 320 in Year 13. For a stratified sample of 120, the numbers from each year should be:', options: ['72 and 48','60 and 60','70 and 50','80 and 40'], answer: 0 }, // p24
      { q: 'A factory samples every 12th item from a production line where a fault recurs on every 12th item. The sample will:', options: ['Have no bias','Either always or never include faulty items, badly misrepresenting the fault rate','Be perfectly representative','Be a simple random sample'], answer: 1 }, // p25
      { q: 'A supermarket surveys shoppers on a Tuesday morning about weekly spending. The most serious criticism is that:', options: ['Spending is continuous data','The mean cannot be found','Tuesday-morning shoppers may differ systematically from the full customer population','The sample size is unknown'], answer: 2 }, // p25
      { q: 'Two researchers take independent random samples from the same population and obtain different means. This shows that:', options: ['One researcher made an error, as random samples from one population always agree','The population has no mean','The sampling was biased','Sample statistics vary between samples; neither is necessarily wrong'], answer: 3 }, // p22
      { q: 'A researcher wants opinions from a population spread over a very large area with a limited travel budget. The most practical method is:', options: ['Cluster sampling, since whole areas can be surveyed cheaply','Simple random sampling across the whole area, using a full list of residents','A full census','Systematic sampling of the national register'], answer: 0 }, // p25
      { q: 'Quadrupling the sample size reduces the standard deviation of the sample mean by a factor of:', options: ['No change','2','4','16'], answer: 1 }, // p22
      { q: 'A sample is drawn from a telephone directory to estimate national opinion. The most serious source of bias is that:', options: ['The sample is too large','Telephone numbers are discrete data, so the sample cannot be random at all','People without listed landlines cannot be selected at all','The directory is alphabetical'], answer: 2 }, // p25
      { q: 'A "self-selected sample is always useless" claim is too strong because:', options: ['Self-selection removes bias','It is a form of random sampling','It always matches the population','It may still be informative if its limitations are recognised and stated'], answer: 3 }, // p25
      { q: 'OCR provides three large data sets for Mathematics B (MEI) on a rotating cycle. For any one cohort of students:', options: ['Just one of them is the focus of some examination questions','All three are examined in the same paper','A different one is examined in each year of the course','None of them is used in the examination'], answer: 0 }, // LDS
      { q: 'A sampling method is described as unbiased when:', options: ['The sample is large','It does not systematically favour any particular outcomes','It always gives the correct answer for the population parameter','The sample equals the population'], answer: 1 }, // p25
    ],
  },

  '2.2': {
    name: 'Data Presentation & Interpretation',
    green: [
      { q: 'Shoe colour is an example of which type of data?', options: ['Continuous','Ranked','Categorical','Discrete (countable)'], answer: 2 }, // D1
      { q: 'The number of cars passing a point is an example of:', options: ['Continuous data','Categorical data','Ranked data','Discrete data'], answer: 3 }, // D1
      { q: 'The height of a plant is an example of:', options: ['Continuous data','Discrete data','Categorical data','Ranked data'], answer: 0 }, // D1
      { q: 'In a histogram, the quantity proportional to frequency is the:', options: ['Perimeter of each bar','Area of each bar','Height of each bar','Width of each bar'], answer: 1 }, // D2
      { q: 'A frequency chart differs from a histogram in that it has:', options: ['No vertical axis','Area proportional to frequency','Equal width bars and frequency on the vertical axis','Unequal width bars'], answer: 2 }, // D1
      { q: 'The median of a data set is:', options: ['The most common value','The arithmetic average','The largest value','The middle value when the data are in order'], answer: 3 }, // D10
      { q: 'The mode of a data set is:', options: ['The most frequently occurring value','The middle value','The average','The range'], answer: 0 }, // D10
      { q: 'The midrange is calculated as:', options: ['The sum divided by n','(minimum + maximum)/2','The middle value','The most common value'], answer: 1 }, // D10
      { q: 'The range of a data set is:', options: ['The middle value','The standard deviation','Maximum − minimum','Q3 − Q1'], answer: 2 }, // D11
      { q: 'The interquartile range is:', options: ['Maximum − minimum','The median','Twice the standard deviation','Q3 − Q1'], answer: 3 }, // D11
      { q: 'A box-and-whisker diagram displays:', options: ['Median, quartiles and extreme values','Only the mean','Only the mode','Frequency density'], answer: 0 }, // D1
      { q: 'A dot plot represents frequency using:', options: ['A single line','Stacks of dots in lines','Bars of varying width and height','Sectors of a circle'], answer: 1 }, // D1
      { q: 'A scatter diagram is used to display:', options: ['Frequency densities','Ranked data only','Bivariate data','Single-variable categorical data'], answer: 2 }, // D6
      { q: 'Standard deviation is a measure of:', options: ['Central tendency','Correlation','Frequency','Spread'], answer: 3 }, // D12
      { q: 'The variance is equal to:', options: ['The square of the standard deviation','The square root of the standard deviation','The range squared','Twice the standard deviation'], answer: 0 }, // D12
      { q: 'Positive correlation means that as one variable increases, the other:', options: ['Becomes categorical','Tends to increase','Tends to decrease','Stays constant'], answer: 1 }, // D6
      { q: 'An outlier is an item of data that is:', options: ['Always an error','The median','Inconsistent with the rest of the data','Always the largest value in the data set'], answer: 2 }, // D13
      { q: 'A pie chart is most suitable for showing:', options: ['Continuous grouped data','Correlation','Cumulative frequency','Proportions of a whole for categorical data'], answer: 3 }, // D1
      { q: 'A stem-and-leaf diagram has the advantage that:', options: ['The original data values are retained','It shows correlation','It needs no key','It uses area to represent the frequency'], answer: 0 }, // D1
      { q: 'The arithmetic mean is calculated as:', options: ['The largest minus the smallest','The sum of the values divided by how many there are','The middle value','The most common value'], answer: 1 }, // D10
    ],
    amber: [
      { q: 'The sample variance s² is calculated by dividing Sxx by:', options: ['n + 1','n²','n − 1','n'], answer: 2 }, // D12
      { q: 'One accepted criterion identifies an outlier as a value at least:', options: ['1 standard deviation from the mean','3 standard deviations from the mean','half a standard deviation from the mean','2 standard deviations from the mean'], answer: 3 }, // D13
      { q: 'The other accepted criterion identifies an outlier as a value at least:', options: ['1.5 × IQR beyond the nearer quartile','1.5 × IQR beyond the median','2 × IQR beyond the mean','1 × IQR beyond the nearer of the two quartiles'], answer: 0 }, // D13
      { q: 'In a histogram, the height of each bar represents:', options: ['Relative position','Frequency density, that is frequency ÷ class width','Frequency','Cumulative frequency'], answer: 1 }, // D2
      { q: 'In comparative pie charts, the quantity made proportional to frequency is the:', options: ['Circumference','Angle only','Area of the circle','Radius of the circle'], answer: 2 }, // D1
      { q: 'Extrapolation from a regression line may not be justified because:', options: ['It is always arithmetically wrong','Regression lines have no gradient','The data become categorical','The relationship may not continue beyond the range of the data'], answer: 3 }, // D6
      { q: 'A strong correlation between two variables does NOT establish that:', options: ['One variable causes the other','The points lie close to a line','There is an association','The data are bivariate'], answer: 0 }, // D7
      { q: 'For markedly skewed data, the most appropriate measure of central tendency is usually the:', options: ['Range','Median','Mean','Midrange'], answer: 1 }, // D10
      { q: 'A weighted mean is appropriate when:', options: ['The data are categorical','There are outliers','The groups being combined are of different sizes','All values are equal'], answer: 2 }, // D10
      { q: 'Adding a constant 5 to every value in a data set:', options: ['Increases both the mean and the standard deviation by 5 each time it is done','Leaves the mean unchanged','Multiplies the standard deviation by 5','Increases the mean by 5 and leaves the standard deviation unchanged'], answer: 3 }, // D12
      { q: 'Multiplying every value in a data set by 3:', options: ['Multiplies both the mean and the standard deviation by 3','Multiplies the mean by 3 and leaves the standard deviation unchanged','Multiplies the variance by 3','Leaves the mean unchanged'], answer: 0 }, // D12
      { q: 'Compared with the median, the mean is:', options: ['Never affected','More affected by an extreme outlier','Less affected by an extreme outlier','Equally affected'], answer: 1 }, // D10
      { q: 'A scatter diagram showing points scattered with no pattern indicates:', options: ['Strong negative correlation','A causal relationship','Little or no correlation between the variables','Strong positive correlation'], answer: 2 }, // D6
      { q: 'Interpolation means estimating a value:', options: ['Beyond the range of the observed data','From a different data set','Without any data','Within the range of the observed data'], answer: 3 }, // D6
      { q: 'As the size of an unbiased sample increases, diagrams representing it:', options: ['Become more representative of the theoretical probability distribution','Become less representative','Are unaffected','Become categorical'], answer: 0 }, // D5
      { q: 'For grouped continuous data with unequal class widths, the correct diagram is a:', options: ['Vertical line chart','Histogram','Bar chart','Pie chart'], answer: 1 }, // D1
      { q: 'Data cleaning includes dealing with:', options: ['Only the mean','Only categorical data','Missing data, errors and outliers','Only outliers'], answer: 2 }, // D14
      { q: 'A cumulative frequency diagram is most directly used to estimate:', options: ['The mode','The variance','The correlation between two variables','The median and quartiles'], answer: 3 }, // D1
      { q: 'The standard deviation of a set of lengths measured in cm has units of:', options: ['cm','cm²','No units','cm⁻¹'], answer: 0 }, // D12
      { q: 'A vertical line chart is most appropriate for:', options: ['Bivariate data','Discrete numerical data','Continuous grouped data','Categorical data with unequal groups'], answer: 1 }, // D1
    ],
    red: [
      { q: 'A data set has mean 50 and standard deviation 4. Using the 2-standard-deviation criterion, an outlier is any value:', options: ['Below 40 or above 60','Above 58 only','Below 42 or above 58','Below 46 or above 54'], answer: 2 }, // D13
      { q: 'A data set has Q1 = 20 and Q3 = 32. Using the 1.5 × IQR criterion, an outlier is any value:', options: ['Below 8 or above 44','Below 14 or above 38','Below 5 or above 47','Below 2 or above 50'], answer: 3 }, // D13
      { q: 'Two comparative pie charts represent frequencies 50 and 200, with area proportional to frequency. The ratio of their radii is:', options: ['1 : 2','1 : 4','1 : 16','2 : 1'], answer: 0 }, // D1
      { q: 'In a histogram, a bar of width 5 has frequency density 3. Its frequency is:', options: ['0.6','15','5','3'], answer: 1 }, // D2
      { q: 'For a data set of 10 values with Σx = 200 and Sxx = 360, the sample standard deviation is:', options: ['√360 ≈ 18.97','40','√40 ≈ 6.32','√36 = 6.00'], answer: 2 }, // D12
      { q: 'In a box plot, the median sits much closer to Q1 than to Q3. This indicates:', options: ['Negative skew','Symmetry','No spread','Positive skew'], answer: 3 }, // D1
      { q: 'A regression line is quoted in a question. The specification expects learners to:', options: ['Interpret it, including interpolation and extrapolation, rather than calculate its equation','Calculate its equation from raw data','Derive it algebraically','Prove it is a best fit'], answer: 0 }, // D6
      { q: 'A correlation coefficient is given in a question. The specification expects learners to:', options: ['Prove its properties','Use it to make an inference, not to calculate it or name it','Calculate it from the raw data','Name the particular coefficient used and state its exact formula'], answer: 1 }, // H10
      { q: 'An item recorded as a height of 1750 cm in a set of adult heights should be treated as:', options: ['The median','Missing data','A likely data-entry error, to be corrected or removed with justification','A genuine value to keep unchanged'], answer: 2 }, // D14
      { q: 'Removing a genuine outlier from a data set without justification is poor practice because:', options: ['It always lowers the mean','It changes the units','It makes the data categorical','It discards real information and can distort the conclusions'], answer: 3 }, // D14
    ],
  },

  '2.3': {
    name: 'Probability',
    green: [
      { q: 'For equally likely outcomes, the probability of an event is:', options: ['Favourable outcomes ÷ total outcomes','Total outcomes ÷ favourable outcomes','Always 1/2','The number of favourable outcomes'], answer: 0 }, // u-basic
      { q: 'The complementary event of A is written:', options: ['P(A)',"A′, the event \"not A\"",'A ∩ B','A ∪ B'], answer: 1 }, // u-basic
      { q: 'P(A′) equals:', options: ['1 + P(A)','0','1 − P(A)','P(A)'], answer: 2 }, // u-basic
      { q: 'The probability of rolling a 3 on a fair six-sided die is:', options: ['1/3','1/2','3/6','1/6'], answer: 3 }, // u-basic
      { q: 'All probabilities lie in the interval:', options: ['0 to 1 inclusive','−1 to 1','0 to 100','1 to 6'], answer: 0 }, // u-basic
      { q: 'The expected frequency of an event with probability p in n trials is:', options: ['n + p','np','n/p','p/n'], answer: 1 }, // u-basic
      { q: 'Two events are mutually exclusive if they:', options: ['Are independent','Have equal probability','Cannot both occur','Always both occur'], answer: 2 }, // u1
      { q: 'For mutually exclusive events A and B, P(A or B) equals:', options: ['P(A) × P(B)','P(A) − P(B)','P(A)/P(B)','P(A) + P(B)'], answer: 3 }, // u2
      { q: 'Two events are independent if:', options: ['The occurrence of one does not affect the probability of the other','They cannot both occur','They have the same probability','They are complementary'], answer: 0 }, // u1
      { q: 'For independent events A and B, P(A and B) equals:', options: ['P(A|B)','P(A) × P(B)','P(A) + P(B)','P(A) − P(B)'], answer: 1 }, // u3
      { q: 'A tree diagram is most useful for:', options: ['Finding the median','Calculating variance','Showing successive events and their probabilities','Displaying continuous data'], answer: 2 }, // u-basic
      { q: 'A Venn diagram is used to show:', options: ['Frequency density','Correlation','Cumulative frequency','How events overlap'], answer: 3 }, // u5
      { q: 'The probability of an impossible event is:', options: ['0','1','1/2','Undefined'], answer: 0 }, // u-basic
      { q: 'The probability of a certain event is:', options: ['100','1','0','1/2'], answer: 1 }, // u-basic
      { q: 'The probability of getting a head on a fair coin toss is:', options: ['1','0','1/2','1/4'], answer: 2 }, // u-basic
      { q: 'A sample space is:', options: ['The set of all the favourable outcomes','A single outcome','A probability','The set of all possible outcomes'], answer: 3 }, // u-basic
      { q: 'The notation A ∩ B means:', options: ['A and B both occur','Either A or B (or both) occurs','A does not occur','A given B'], answer: 0 }, // u5
      { q: 'The notation A ∪ B means:', options: ['A or B (or both) occurs','A and B both occur','Neither occurs','A given B'], answer: 0 }, // u5
      { q: 'Drawing a card at random from a standard 52-card pack, P(a heart) is:', options: ['1/4','1/13','1/52','1/2'], answer: 0 }, // u-basic
      { q: 'The notation P(A|B) means:', options: ['The probability of A given that B has occurred','The probability of A and B','The probability of A or B','The probability of B given A'], answer: 0 }, // u6
    ],
    amber: [
      { q: 'For any two events, P(A ∪ B) equals:', options: ['P(A) − P(B)','P(A) + P(B) − P(A ∩ B)','P(A) + P(B)','P(A) × P(B)'], answer: 1 }, // u5
      { q: 'For mutually exclusive events, P(A ∩ B) equals:', options: ['P(A)P(B)','P(A) + P(B)','0','1'], answer: 2 }, // u4
      { q: 'The conditional probability formula is P(A|B) =', options: ['P(A ∩ B)/P(A)','P(A)P(B)','P(A ∪ B)/P(B)','P(A ∩ B)/P(B)'], answer: 3 }, // u6
      { q: 'Events A and B are independent precisely when:', options: ['P(A|B) = P(A)','P(A|B) = P(B)','P(A ∩ B) = 0','P(A ∪ B) = 1'], answer: 0 }, // u7
      { q: 'A bag holds 4 red and 6 blue balls. Two are drawn without replacement. P(both red) is:', options: ['8/45','2/15','4/25','1/5'], answer: 1 }, // u3
      { q: 'A fair coin is tossed three times. P(exactly two heads) is:', options: ['1/2','1/4','3/8','1/8'], answer: 2 }, // u3
      { q: 'P(A) = 0.4, P(B) = 0.5 and A, B are independent. P(A ∩ B) is:', options: ['0.9','0.1','0.45','0.2'], answer: 3 }, // u3
      { q: 'P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Then P(A ∪ B) is:', options: ['0.7','0.9','0.5','0.3'], answer: 0 }, // u5
      { q: 'Two fair dice are rolled. P(total of 7) is:', options: ['5/36','1/6','1/12','1/36'], answer: 1 }, // u-basic
      { q: 'A card is drawn from a standard pack. P(a king or a heart) is:', options: ['4/52','13/52','16/52','17/52'], answer: 2 }, // u5
      { q: 'If P(A|B) = P(A), the events A and B are:', options: ['Mutually exclusive','Complementary','Certain','Independent'], answer: 3 }, // u7
      { q: 'Mutually exclusive events with non-zero probabilities are:', options: ['Never independent','Always independent','Sometimes independent','Complementary'], answer: 0 }, // u4
      { q: 'Venn diagrams in this specification are used for at most:', options: ['Any number of events','Three events','Two events','Four events'], answer: 1 }, // u5
      { q: 'A box holds 3 faulty and 7 working items. One is chosen at random. P(faulty) is:', options: ['0.1','0.37','0.3','0.7'], answer: 2 }, // u-basic
      { q: 'P(A) = 0.6 and P(B|A) = 0.5. Then P(A ∩ B) is:', options: ['1.1','0.83','0.1','0.3'], answer: 3 }, // u6
      { q: 'In 200 trials of an event with probability 0.15, the expected frequency is:', options: ['30','15','200','1.5'], answer: 0 }, // u-basic
      { q: 'Two cards are drawn with replacement from a pack. P(both hearts) is:', options: ['1/52','1/16','1/17','1/4'], answer: 1 }, // u3
      { q: 'A two-way table is useful for calculating:', options: ['Frequency density','Regression lines','Conditional probabilities','Standard deviation'], answer: 2 }, // u6
      { q: 'A fair die is rolled twice. P(at least one six) is:', options: ['1/3','1/36','25/36','11/36'], answer: 3 }, // u-basic
      { q: 'If A and B are independent, then A′ and B are:', options: ['Also independent','Mutually exclusive','Dependent','Complementary'], answer: 0 }, // u7
    ],
    red: [
      { q: 'P(A) = 0.5, P(B) = 0.4, P(A ∪ B) = 0.7. Then P(A|B) equals:', options: ['0.8','0.5','0.4','0.2'], answer: 1 }, // u6
      { q: 'A test is 95% accurate and 1% of a population has the disease. For a positive result, the probability of actually having the disease is closest to:', options: ['0.99','0.05','0.16','0.95'], answer: 2 }, // u6
      { q: 'Given P(B|A), P(A) and P(B), finding P(A|B) is an example of:', options: ['Mutual exclusivity','Independence testing','Expected frequency','Reverse conditional probability'], answer: 3 }, // u6
      { q: 'Three fair coins are tossed. Given that at least one head appears, P(all three are heads) is:', options: ['1/7','1/8','1/3','1/2'], answer: 0 }, // u6
      { q: 'A bag holds 5 red and 3 blue balls. Two are drawn without replacement. P(exactly one red) is:', options: ['9/28','15/28','5/14 (5/8 × 4/7)','3/28'], answer: 1 }, // u3
      { q: 'For events with P(A) = 0.3, P(B) = 0.5, and A, B mutually exclusive, P(A|B) equals:', options: ['0.6','0.8','0','0.15'], answer: 2 }, // u4
      { q: 'A machine has three independent components each working with probability 0.9. P(all three work) is:', options: ['0.9','0.27','0.999','0.729'], answer: 3 }, // u3
      { q: 'For the same machine, P(at least one component fails) is:', options: ['0.271','0.1','0.729','0.3'], answer: 0 }, // u3
      { q: 'If P(A ∩ B) = P(A)P(B) and both probabilities are non-zero, then A and B:', options: ['Cannot both occur','Are independent but not mutually exclusive','Are mutually exclusive','Are complementary'], answer: 1 }, // u4
      { q: 'A student argues that because two events cannot happen together they must be independent. This is:', options: ['Correct only for fair dice','Correct if the probabilities are equal','Wrong — mutual exclusivity and independence are different, and generally incompatible','Correct'], answer: 2 }, // u4
    ],
  },

  '2.4': {
    name: 'Probability Distributions',
    green: [
      { q: 'For X ~ B(n, p), the mean of X is:', options: ['npq','p/n','n/p','np'], answer: 3 }, // R4
      { q: 'Which is NOT required for a binomial model?', options: ['The trials are carried out in a fixed order','A fixed number of trials','Exactly two outcomes per trial','The probability of success is the same each trial'], answer: 0 }, // R1
      { q: 'The notation X ~ B(n, p) means X:', options: ['Has mean n','Has the binomial distribution with parameters n and p','Is Normally distributed','Is a constant'], answer: 1 }, // R1
      { q: 'In a binomial distribution, q is defined as:', options: ['np','p/n','1 − p','p − 1'], answer: 2 }, // R2
      { q: 'The symbol ~ in X ~ B(n, p) is read as:', options: ['"is approximately equal to"','"is proportional to"','"tends to"','"has the distribution"'], answer: 3 }, // R1
      { q: 'A discrete random variable is conventionally written using:', options: ['A capital letter such as X','A lower-case letter only','A Greek letter','A number'], answer: 0 }, // R6
      { q: 'For a discrete random variable, the sum of all the probabilities is:', options: ['p','1','0','n'], answer: 1 }, // R6
      { q: 'A discrete uniform distribution is one in which:', options: ['There are exactly two outcomes','The mean is zero','All outcomes are equally likely','Outcomes become more likely in order'], answer: 2 }, // R7
      { q: 'The Normal distribution is written:', options: ['X ~ B(μ, σ) (binomial)','X ~ N(n, p)','X ~ U(a, b)','X ~ N(μ, σ²)'], answer: 3 }, // R8
      { q: 'The graph of a Normal distribution is:', options: ['Symmetric and bell-shaped','Skewed to the right','Rectangular','A straight line'], answer: 0 }, // R9
      { q: 'The line of symmetry of a Normal curve is located at:', options: ['The mode only, which differs from the mean','The mean','One standard deviation above the mean','Zero'], answer: 1 }, // R11
      { q: 'The area under a Normal curve represents:', options: ['The mean','The standard deviation','Probability','Frequency density'], answer: 2 }, // R9
      { q: 'The total area under any Normal curve is:', options: ['0','μ','σ','1'], answer: 3 }, // R9
      { q: 'The standard Normal distribution is:', options: ['N(0, 1)','N(1, 0)','N(0, 0)','N(1, 1)'], answer: 0 }, // R10
      { q: 'For X ~ B(20, 0.3), the mean is:', options: ['14','6','20','0.3'], answer: 1 }, // R4
      { q: 'The expected frequency of successes in n trials with probability p is:', options: ['p','n − p','np','n/p'], answer: 2 }, // R5
      { q: 'A binomial distribution arises when the trials are:', options: ['Dependent on one another','Continuous','Infinite in number','Independent of one another'], answer: 3 }, // R1
      { q: 'For a Normal distribution, the mean, median and mode are:', options: ['All equal','All different','In the ratio 1:2:3','Undefined'], answer: 0 }, // R9
      { q: 'The parameter σ in N(μ, σ²) is the:', options: ['Sample size','Standard deviation','Variance','Mean'], answer: 1 }, // R8
      { q: 'A binomial random variable counts:', options: ['A continuous measurement','The mean of a sample','The number of successes in a fixed number of trials','The time until the first success'], answer: 2 }, // R1
    ],
    amber: [
      { q: 'X ~ B(10, 0.4). P(X = 3) is closest to:', options: ['0.121','0.382','0.045','0.215'], answer: 3 }, // R3
      { q: 'A continuity correction is needed when:', options: ['A continuous Normal distribution models discrete data','A discrete distribution models continuous data','The sample size is small','The mean equals the variance'], answer: 0 }, // R8
      { q: 'To standardise a Normal variable X, you calculate:', options: ['Z = (X + μ)/σ','Z = (X − μ)/σ','Z = (X − σ)/μ','Z = X/σ'], answer: 1 }, // R10
      { q: 'X ~ B(12, 0.25). The mean of X is:', options: ['0.25','9','3','12'], answer: 2 }, // R4
      { q: 'In 50 trials with probability of success 0.2, the expected number of successes is:', options: ['40','0.2','50','10'], answer: 3 }, // R5
      { q: 'For X ~ B(8, 0.5), P(X = 0) equals:', options: ['(0.5)⁸','0','0.5','8 × 0.5'], answer: 0 }, // R3
      { q: 'Modelling the number of heads in 20 coin tosses is appropriate with:', options: ['No distribution','A binomial distribution','A Normal distribution only','A discrete uniform distribution'], answer: 1 }, // R1
      { q: 'A Normal model may be inappropriate when the data are:', options: ['Continuous','Large in number','Markedly skewed','Symmetric'], answer: 2 }, // R8
      { q: 'If X ~ N(μ, σ²) and Y = aX + b, then Y is:', options: ['Binomially distributed','Not a standard distribution','Uniformly distributed','Normally distributed with mean aμ + b'], answer: 3 }, // R10
      { q: 'For a Normal distribution, approximately what percentage of values lie within one standard deviation of the mean?', options: ['68%','95%','50%','99.7%'], answer: 0 }, // R9
      { q: 'For a Normal distribution, approximately what percentage of values lie within two standard deviations of the mean?', options: ['50%','95%','68%','99.7%'], answer: 1 }, // R9
      { q: 'X ~ B(5, 0.2). P(X ≥ 1) equals:', options: ['5 × 0.2','0.2⁵','1 − 0.8⁵','0.8⁵ (P(X = 0))'], answer: 2 }, // R3
      { q: 'Using a Normal model for a discrete count X, P(X ≤ 10) becomes:', options: ['P(X < 10)','P(X < 9.5)','P(X < 11)','P(X < 10.5)'], answer: 3 }, // R8
      { q: 'As the sample size increases, a histogram of samples drawn from a Normal population:', options: ['Tends towards the Normal curve','Becomes rectangular','Becomes skewed','Is unaffected'], answer: 0 }, // R9
      { q: 'For X ~ N(100, 25), the standard deviation is:', options: ['100','5','25','10'], answer: 1 }, // R8
      { q: 'X ~ N(60, 16). The value of Z corresponding to X = 68 is:', options: ['8','4','2','0.5'], answer: 2 }, // R10
      { q: 'A probability function given in a table must satisfy:', options: ['All probabilities equal','A mean of zero','Exactly two outcomes','All probabilities non-negative and summing to 1'], answer: 3 }, // R6
      { q: 'The number of sixes in 30 rolls of a fair die is modelled by:', options: ['B(30, 1/6)','B(6, 1/30)','N(30, 1/6)','A discrete uniform distribution'], answer: 0 }, // R1
      { q: 'A binomial model would be inappropriate for drawing balls from a bag without replacement because:', options: ['The number of trials is not fixed','The probability of success changes between trials','There are more than two outcomes','The trials are continuous'], answer: 1 }, // R1
      { q: 'For X ~ N(μ, σ²), P(X > μ) equals:', options: ['0','0.68','0.5','1'], answer: 2 }, // R9
    ],
    red: [
      { q: 'X ~ N(50, 16) and Y = 3X + 2. Then Y has distribution:', options: ['N(152, 48)','N(152, 16)','N(150, 144)','N(152, 144)'], answer: 3 }, // R10
      { q: 'For X ~ N(μ, σ²), the points of inflection of the Normal curve lie at:', options: ['μ ± σ','μ ± 2σ','μ only','μ ± σ²'], answer: 0 }, // R11
      { q: 'X ~ B(20, 0.5) is approximated by a Normal distribution. Using a continuity correction, P(X ≥ 12) becomes:', options: ['P(X > 11)','P(X > 11.5)','P(X > 12.5)','P(X > 12)'], answer: 1 }, // R8
      { q: 'The random variable X has P(X = x) = kx for x = 1, 2, 3, 4. The value of k is:', options: ['1','0.4','0.1','0.25'], answer: 2 }, // R6
      { q: 'X ~ N(80, 25). The value of X corresponding to Z = −1.6 is:', options: ['88','78.4','76','72'], answer: 3 }, // R10
      { q: 'A model assumes a binomial distribution for the number of defective items in a large batch sampled without replacement. This is:', options: ['Acceptable as an approximation when the batch is very large relative to the sample','Exactly correct','Never acceptable','Only correct for p = 0.5'], answer: 0 }, // R13
      { q: 'X ~ N(0, 1). Then P(Z < −1.2) equals:', options: ['0.5 + P(Z < 1.2)','1 − P(Z < 1.2)','P(Z < 1.2)','P(Z > 1.2) − 1'], answer: 1 }, // R10
      { q: 'Critiquing a probability model means:', options: ['Increasing the sample size','Removing outliers','Examining whether its assumptions are reasonable in the given context','Recalculating the mean'], answer: 2 }, // R13
      { q: 'Two independent Normal variables are added. Their sum is:', options: ['Binomially distributed','Uniformly distributed','Not a standard distribution','Normally distributed'], answer: 3 }, // R10
      { q: 'For X ~ B(n, p), doubling n while keeping p fixed changes the mean to:', options: ['2np','np','np/2','4np'], answer: 0 }, // R4
    ],
  },

  '2.5': {
    name: 'Statistical Hypothesis Testing',
    green: [
      { q: 'The null hypothesis H₀ is:', options: ['The significance level','The default assumption being tested','The conclusion you hope to reach from the data','Always false'], answer: 1 }, // H1
      { q: 'The alternative hypothesis H₁ states:', options: ['The sample size','The p-value','What is believed if the null hypothesis is rejected','The same as H₀'], answer: 2 }, // H1
      { q: 'The significance level of a test is:', options: ['The probability H₀ is true','The sample size','The test statistic','The probability of incorrectly rejecting the null hypothesis'], answer: 3 }, // H3
      { q: 'The critical region is also known as the:', options: ['Rejection region','Acceptance region','Confidence interval','Sample space'], answer: 0 }, // H1
      { q: 'If the test statistic falls in the acceptance region, you:', options: ['Repeat the test','Do not reject the null hypothesis','Reject the null hypothesis','Accept the alternative hypothesis'], answer: 1 }, // H6
      { q: 'A 1-tail test is used when the alternative hypothesis specifies:', options: ['No change','Two populations','A change in one particular direction','A change in either direction from the stated value'], answer: 2 }, // H2
      { q: 'A 2-tail test is used when the alternative hypothesis specifies:', options: ['An increase only','A decrease only','No change','A change in either direction'], answer: 3 }, // H2
      { q: 'The p-value is:', options: ['The probability of a result at least as extreme as the one observed, assuming H₀','The probability H₀ is true','The significance level','The sample proportion'], answer: 0 }, // H1
      { q: 'If the p-value is less than the significance level, you:', options: ['Change the hypotheses','Reject the null hypothesis','Do not reject the null hypothesis','Increase the sample size'], answer: 1 }, // H5
      { q: 'For a binomial hypothesis test, H₀ takes the form:', options: ['p ≠ a particular value','n = a particular value','p = a particular value','p > a particular value'], answer: 2 }, // H4
      { q: 'The test statistic is:', options: ['The null hypothesis','The population mean','The significance level','The quantity calculated from the sample and compared with the critical value'], answer: 3 }, // H1
      { q: 'A hypothesis test uses a sample in order to:', options: ['Make an inference about the population','Describe only the sample','Remove outliers','Calculate a regression line through the sample data points'], answer: 0 }, // H3
      { q: 'A critical value marks the boundary of the:', options: ['Confidence level','Critical region','Sample','Population'], answer: 1 }, // H1
      { q: 'Hypotheses are always stated in terms of:', options: ['The test statistic','The p-value','A population parameter','A sample statistic such as the sample mean'], answer: 2 }, // H4
      { q: 'A conclusion to a hypothesis test should always be:', options: ['Given as "accept H₀"','Purely numerical','Left implicit','Stated in the context of the original problem'], answer: 3 }, // H5
      { q: 'A significance level of 5% means the critical region has probability:', options: ['At most 0.05 under H₀','0.95 under H₀ in each tail','0.05 under H₁','Exactly 0.5'], answer: 0 }, // H3
      { q: 'Correlation measures:', options: ['The sample size','How close data points lie to a straight line','The gradient of the regression line between the two variables','The spread of one variable'], answer: 1 }, // H10
      { q: 'A rank correlation coefficient measures correlation between:', options: ['Two categorical variables','The residuals','The ranks of the data','The raw data values'], answer: 2 }, // H10
      { q: 'For a test on a population mean, H₀ takes the form:', options: ['x̄ = a particular value','σ = a particular value','n = a particular value','μ = a particular value'], answer: 3 }, // H8
      { q: 'Never rejecting the null hypothesis when it is false is a failure to detect:', options: ['A real effect','An outlier','A sampling frame','A critical value'], answer: 0 }, // H3
    ],
    amber: [
      { q: 'A coin is suspected of being biased towards heads. The hypotheses are:', options: ['H₀: p = 0.5, H₁: p < 0.5','H₀: p = 0.5, H₁: p > 0.5, one-tailed','H₀: p = 0.5, H₁: p ≠ 0.5, two-tailed','H₀: p > 0.5, H₁: p = 0.5'], answer: 1 }, // H2
      { q: 'A coin is suspected of being biased, without saying in which direction. The test should be:', options: ['One-tailed, with H₁: p < 0.5','Not a hypothesis test','Two-tailed, with H₁: p ≠ 0.5','One-tailed, with H₁: p > 0.5'], answer: 2 }, // H2
      { q: 'For random samples of size n drawn from N(μ, σ²), the sample mean has distribution:', options: ['N(μ, σ²)','N(μ/n, σ²)','N(nμ, nσ²)','N(μ, σ²/n)'], answer: 3 }, // H7
      { q: 'The standard deviation of the sample mean for samples of size n is:', options: ['σ/√n','σ/n (s.e.)','σ√n','σ'], answer: 0 }, // H7
      { q: 'For X ~ N(100, 36) and samples of size 9, the sample mean has standard deviation:', options: ['36','2','4','6'], answer: 1 }, // H7
      { q: 'The Central Limit Theorem allows a Normal test for a mean when:', options: ['The population is binomial only','The variance is unknown and the sample is small, whatever the population shape','The sample is large, even if the population is not Normal','The sample is small'], answer: 2 }, // H7
      { q: 'A test for a single mean using the Normal distribution is valid when:', options: ['The sample size is 2','The data are categorical','The variance is always unknown','The population variance is known, or unknown with a large sample'], answer: 3 }, // H8
      { q: 'In a binomial test at the 5% level, the observed p-value is 0.032. The conclusion is:', options: ['Reject H₀, since 0.032 < 0.05','Do not reject H₀, since 0.032 is small','Accept H₁ with certainty','The test is invalid'], answer: 0 }, // H5
      { q: 'In a binomial test at the 5% level, the observed p-value is 0.08. The conclusion is:', options: ['The test is invalid','There is insufficient evidence to reject H₀','Reject H₀','H₀ is proved true'], answer: 1 }, // H5
      { q: 'For a two-tailed test at the 5% level, each tail carries a probability of:', options: ['0.1','0.5','0.025','0.050 (5%)'], answer: 2 }, // H2
      { q: 'The acceptance region consists of those values of the test statistic for which:', options: ['H₀ is rejected','H₁ is proved','The p-value is zero','H₀ is not rejected'], answer: 3 }, // H6
      { q: 'Writing "accept H₀" is discouraged because:', options: ['Failing to reject H₀ is not proof that it is true','H₀ is always false','It is too long','It changes the significance level of the test after it has been carried out'], answer: 0 }, // H5
      { q: 'Reducing the significance level from 5% to 1% makes rejecting H₀:', options: ['Unaffected','Harder, requiring stronger evidence','Easier','Impossible'], answer: 1 }, // H3
      { q: 'A given correlation coefficient is compared with a critical value in order to:', options: ['Find the mean','Identify outliers','Infer whether there is correlation in the population','Calculate the regression line'], answer: 2 }, // H11
      { q: 'For a correlation test, the null hypothesis is usually that in the population there is:', options: ['Perfect correlation','Negative correlation','A causal relationship','No correlation'], answer: 3 }, // H11
      { q: 'The specification requires learners to know the names of particular correlation coefficients:', options: ['False — names are not required','True for all coefficients','True for rank coefficients only','True only at A Level'], answer: 0 }, // H10
      { q: 'In a test of H₀: μ = 50 against H₁: μ > 50, a sample mean of 47 would:', options: ['Require a two-tailed test','Give no evidence at all against H₀ in the stated direction','Lead to rejection of H₀','Prove H₀'], answer: 1 }, // H8
      { q: 'A binomial test uses n = 20 and H₀: p = 0.3. The test statistic is:', options: ['The significance level','The p-value','The observed number of successes','The sample mean of the 20 observations'], answer: 2 }, // H4
      { q: 'A significance level must be chosen:', options: ['After seeing the result of the test','From the p-value','From the sample mean','Before the data are examined'], answer: 3 }, // H3
      { q: '"Association" differs from "correlation" in that association refers to:', options: ['A more general relationship between the variables','A straight-line relationship only','A causal link','Identical values'], answer: 0 }, // H11
    ],
    red: [
      { q: 'A sample of 25 is drawn from N(μ, 100). Under H₀: μ = 40, the sample mean has distribution:', options: ['N(40, 2)','N(40, 4)','N(40, 100)','N(40, 20)'], answer: 1 }, // H7
      { q: 'For that test, a sample mean of 44 gives a test statistic z of:', options: ['0.4','1','2','4'], answer: 2 }, // H8
      { q: 'A result is significant at the 5% level but not at the 1% level. This means the p-value lies:', options: ['Below 0.01','Above 0.05','Exactly at 0.05, on the boundary','Between 0.01 and 0.05'], answer: 3 }, // H5
      { q: 'For a binomial test the probability of the test statistic falling in the rejection region is:', options: ['Usually less than the intended significance level, because the distribution is discrete','Exactly the significance level','Always greater than the significance level','Always zero'], answer: 0 }, // H3
      { q: 'A researcher runs 20 independent tests at the 5% level on data with no real effect. The expected number of significant results is:', options: ['20','1','0','5'], answer: 1 }, // H3
      { q: 'A significant correlation between ice cream sales and drownings does not establish causation because:', options: ['The sample was too large','The test was two-tailed','A third variable such as hot weather may influence both','Correlation coefficients are unreliable, so the relationship is probably a fluke'], answer: 2 }, // H11
      { q: 'A test of H₀: p = 0.4 against H₁: p ≠ 0.4 at the 10% level uses critical regions in:', options: ['One tail with probability 0.10','Both tails, each with probability 0.10, so 20% in total','Neither tail','Both tails, each with probability at most 0.05'], answer: 3 }, // H2
      { q: 'Increasing the sample size in a test for a mean, with everything else fixed:', options: ['Reduces the standard deviation of the sample mean, making real differences easier to detect','Increases the standard deviation of the sample mean','Has no effect on the test','Raises the significance level'], answer: 0 }, // H7
      { q: 'The conclusion "the coin is definitely biased" after rejecting H₀ at the 5% level is wrong because:', options: ['The sample was random','A hypothesis test gives evidence, never proof','The significance level was too high, as 5% is not strict enough to prove it','Two tails were used'], answer: 1 }, // H5
      { q: 'A hypothesis test for a mean uses the Normal distribution with an unknown population variance and a sample of size 8. This is:', options: ['Valid because n > 5','Valid only for a two-tailed test','Not valid here, since the sample is small and the variance unknown','Always valid'], answer: 2 }, // H8
    ],
  },

  '3.1': {
    name: 'Models & Quantities',
    green: [
      { q: 'In mechanics, modelling an object as a "particle" means treating it as:', options: ['Having size but no mass','Being perfectly rigid','Being frictionless','Having mass but no size'], answer: 3 }, // p32
      { q: 'The modelling assumption "light" means the object:', options: ['Has negligible mass','Has negligible size','Cannot stretch','Is smooth'], answer: 0 }, // p31
      { q: 'The modelling assumption "smooth" means:', options: ['The object cannot stretch','There is no friction','There is no air resistance','The mass is negligible'], answer: 1 }, // p31
      { q: 'The modelling assumption "inextensible" means the object:', options: ['Has no friction','Has uniform density','Cannot stretch','Has no mass'], answer: 2 }, // p31
      { q: 'The modelling assumption "uniform" means:', options: ['The object cannot bend','There is no friction','The object is light','Mass is evenly distributed throughout'], answer: 3 }, // p31
      { q: 'The modelling assumption "rigid" means the object:', options: ['Does not bend or deform','Has no mass','Is smooth','Is inextensible'], answer: 0 }, // p31
      { q: 'The SI base unit of length is the:', options: ['Newton','Metre','Centimetre','Kilometre'], answer: 1 }, // p33
      { q: 'The SI base unit of mass is the:', options: ['Newton (N)','Tonne','Kilogram','Gram'], answer: 2 }, // p33
      { q: 'The SI base unit of time is the:', options: ['Minute','Hour','Hertz','Second'], answer: 3 }, // p33
      { q: 'The SI unit of velocity is:', options: ['m s⁻¹','m s⁻²','N','kg m'], answer: 0 }, // p34
      { q: 'The SI unit of acceleration is:', options: ['kg','m s⁻²','m s⁻¹','N'], answer: 1 }, // p34
      { q: 'The SI unit of force is the:', options: ['Joule (J)','Pascal (Pa)','Newton (N)','Kilogram (kg)'], answer: 2 }, // p34
      { q: 'The SI unit of moment is the:', options: ['Newton (N)','Joule (J)','Metre (m)','Newton metre (N m)'], answer: 3 }, // p35
      { q: 'Weight is:', options: ['A force, measured in newtons','A mass, measured in kilograms','A distance','A speed'], answer: 0 }, // p34
      { q: 'Mass is measured in kilograms and weight in:', options: ['Seconds','Newtons','Kilograms','Metres'], answer: 1 }, // p34
      { q: 'The modelling assumption "thin" is applied to an object whose:', options: ['Surface is frictionless','Length is negligible','Thickness is negligible','Mass is negligible'], answer: 2 }, // p31
      { q: 'Modelling a car as a particle is reasonable when:', options: ['It is turning sharply','Its rotation matters','It is at rest','Its size is small compared with the distances involved'], answer: 3 }, // p32
      { q: 'A modelling assumption is used in order to:', options: ['Simplify a real situation enough to analyse it mathematically','Make the answer exactly correct','Avoid using units','Remove all forces'], answer: 0 }, // p31
      { q: 'The unit N m is used for:', options: ['Mass','Moment','Force','Velocity'], answer: 1 }, // p35
      { q: 'A quantity derived from the base quantities of length, mass and time is called a:', options: ['Scalar only','Vector only','Derived quantity','Base quantity'], answer: 2 }, // p34
    ],
    amber: [
      { q: 'A string modelled as "light and inextensible" has:', options: ['Mass but a fixed length','Negligible mass and variable length','Friction and mass','Negligible mass and a fixed length'], answer: 3 }, // p31
      { q: 'Modelling a pulley as "smooth" means:', options: ['The tension is the same on both sides of the string','The pulley has no mass','The string cannot stretch','The system is in equilibrium'], answer: 0 }, // p31
      { q: 'A 5 kg mass has weight, taking g = 9.8, of:', options: ['9.8 N','49 N','5 N','0.51 N'], answer: 1 }, // p34
      { q: 'Unless otherwise specified, in examinations the value of g should be taken as:', options: ['9.81','9','9.8','10'], answer: 2 }, // F2
      { q: 'Modelling a bridge cable as a particle would be inappropriate because:', options: ['It has no weight','It is smooth','It is rigid','Its length and the distribution of its mass are essential to the problem'], answer: 3 }, // p32
      { q: 'The weight of an object of mass m is:', options: ['mg newtons','m newtons','g newtons','m/g newtons'], answer: 0 }, // p34
      { q: 'A modelling assumption of "no air resistance" is least reasonable for:', options: ['A stationary mass','A feather falling a long distance','A dense ball falling a short distance','A block sliding on ice'], answer: 1 }, // p31
      { q: 'The unit of force, the newton, is equivalent in base units to:', options: ['kg m² s⁻²','kg s⁻²','kg m s⁻²','kg m s⁻¹'], answer: 2 }, // p34
      { q: 'A mass of 200 g expressed in SI base units is:', options: ['200 kg','2 kg','0.002 kg','0.2 kg'], answer: 3 }, // p33
      { q: 'A speed of 36 km h⁻¹ expressed in m s⁻¹ is:', options: ['10','36','3.6','360'], answer: 0 }, // p33
      { q: 'The assumption "the rod is uniform" allows you to take its weight as acting:', options: ['Nowhere','At its midpoint','At one end','At the pivot or support'], answer: 1 }, // p31
      { q: 'A "long term" modelling assumption refers to:', options: ['A large force','A heavy object','Behaviour after a long time has elapsed','A long object'], answer: 2 }, // p31
      { q: 'Refining a model generally means:', options: ['Adding more assumptions','Ignoring the data','Changing the units','Removing a simplifying assumption to improve realism'], answer: 3 }, // p31
      { q: 'A quantity of 15 N m describes a:', options: ['Moment','Force','Velocity','Mass'], answer: 0 }, // p35
      { q: 'Which of these is a vector quantity?', options: ['Time','Velocity','Speed (m/s)','Mass'], answer: 1 }, // p34
      { q: 'Which of these is a scalar quantity?', options: ['Velocity','Acceleration','Mass','Force'], answer: 2 }, // p34
      { q: 'A tension of 20 N in a light inextensible string over a smooth pulley is:', options: ['Different on each side','Zero','Equal to the weight','The same throughout the string'], answer: 3 }, // p31
      { q: 'The mass of an object taken to the Moon:', options: ['Stays the same, although its weight changes','Changes, although its weight stays the same','Becomes zero','Doubles'], answer: 0 }, // p34
      { q: 'Modelling a ladder as a "uniform rigid rod" assumes:', options: ['Variable length','Evenly distributed mass and no bending','Negligible mass','No friction'], answer: 1 }, // p31
      { q: 'A force of 1 N gives a mass of 1 kg an acceleration of:', options: ['1 m s⁻¹','0','1 m s⁻²','9.8 m s⁻²'], answer: 2 }, // p34
    ],
    red: [
      { q: 'A 2 kg mass hangs at rest from a light inextensible string. Taking g = 9.8, the tension is:', options: ['2 N','9.80 N (g only)','0 N','19.6 N'], answer: 3 }, // p34
      { q: 'An answer given as "the acceleration is 3 kg" is wrong because:', options: ['Acceleration has units m s⁻², not kg','The number is too small','Acceleration cannot be positive when a mass is involved','Acceleration is a scalar'], answer: 0 }, // p34
      { q: 'Which modelling assumption is being dropped when air resistance is introduced into a projectile model?', options: ['That the ground is horizontal','That the only force acting after release is weight','That the projectile is a particle with no size or rotation','That gravity is constant'], answer: 1 }, // y1
      { q: 'A speed of 5 m s⁻¹ expressed in km h⁻¹ is:', options: ['1.39','0.3','18','50'], answer: 2 }, // p33
      { q: 'Modelling a train as a set of connected particles rather than one particle is necessary when:', options: ['The train moves in a straight line along a level track at constant speed','Friction is negligible','The train is at rest','The forces in the couplings between carriages are required'], answer: 3 }, // n4
      { q: 'Taking g = 10 rather than 9.8 in a calculation will:', options: ['Introduce a small systematic error of about 2%','Give an exactly correct answer, as 10 is a better value for g','Make no difference','Change the units'], answer: 0 }, // F2
      { q: 'The quantity kg m s⁻² is dimensionally equivalent to:', options: ['A velocity','A force','An acceleration','A moment'], answer: 1 }, // p34
      { q: 'A moment of 12 N m could arise from:', options: ['A mass of 12 kg','A force of 3 N at 3 m','A force of 4 N acting perpendicular to a rod 3 m from the pivot','A force of 12 N acting at the pivot'], answer: 2 }, // p35
      { q: 'The assumption that a string is inextensible is essential in a connected-particle problem because it ensures that:', options: ['The tension is zero','The pulley is smooth','The masses are equal','Both particles have the same magnitude of acceleration'], answer: 3 }, // n4
      { q: 'Stating modelling assumptions matters because:', options: ['The validity of the conclusions depends on them holding in the real situation','It lengthens the answer','It removes the need for units','It guarantees the answer is exact'], answer: 0 }, // p31
    ],
  },

  '3.2': {
    name: 'Kinematics in 1 Dimension',
    green: [
      { q: 'Displacement differs from distance in that displacement:', options: ['Cannot be negative','Is a vector, so it has direction as well as magnitude','Is always larger','Is measured in seconds'], answer: 1 }, // k2
      { q: 'Speed is:', options: ['The gradient of a velocity-time graph','Always negative','The magnitude of velocity','A vector quantity'], answer: 2 }, // k3
      { q: 'The gradient of a displacement-time graph gives:', options: ['Acceleration','Distance','Time','Velocity'], answer: 3 }, // k4
      { q: 'The area under a velocity-time graph gives:', options: ['Displacement','Acceleration','Speed','Force'], answer: 0 }, // k4
      { q: 'The gradient of a velocity-time graph gives:', options: ['Speed','Acceleration','Displacement','Distance travelled'], answer: 1 }, // k4
      { q: 'Which constant-acceleration formula does NOT involve displacement?', options: ['v² = u² + 2as','s = ½(u + v)t','v = u + at','s = ut + ½at²'], answer: 2 }, // k6
      { q: 'The formula s = ut + ½at² gives:', options: ['Velocity in terms of time','Acceleration','Average speed','Displacement in terms of initial velocity, acceleration and time'], answer: 3 }, // k6
      { q: 'The formula v² = u² + 2as does NOT involve:', options: ['Time','Displacement','Acceleration','Initial velocity'], answer: 0 }, // k6
      { q: 'Average speed is calculated as:', options: ['Acceleration × time','Distance travelled ÷ elapsed time','Displacement ÷ elapsed time','Final velocity ÷ 2'], answer: 1 }, // k1
      { q: 'Average velocity is calculated as:', options: ['(u + v)/2 always','Acceleration × time','Overall displacement ÷ elapsed time','Total distance travelled ÷ elapsed time'], answer: 2 }, // k1
      { q: 'On a displacement-time graph, constant velocity appears as:', options: ['A curve','A horizontal line at zero','A vertical line','A straight line'], answer: 3 }, // k4
      { q: 'A body starting "from rest" has initial velocity:', options: ['0','Its maximum value','Equal to the acceleration','Undefined'], answer: 0 }, // k6
      { q: 'For a body moving in the positive direction, negative acceleration means it is:', options: ['Reversing immediately','Slowing down','Speeding up','At rest'], answer: 1 }, // k3
      { q: 'On a velocity-time graph, a horizontal line represents:', options: ['Zero displacement','Increasing speed','Constant velocity','Constant acceleration'], answer: 2 }, // k4
      { q: 'The constant acceleration (suvat) formulae may be used only when:', options: ['The velocity is constant','The motion is vertical','The body starts from rest','The acceleration is constant'], answer: 3 }, // k6
      { q: 'Distance travelled compared with the magnitude of displacement is:', options: ['Always greater than or equal to it','Always less than it','Always equal to it','Unrelated'], answer: 0 }, // k2
      { q: 'The units of acceleration are:', options: ['s','m s⁻²','m s⁻¹','m'], answer: 1 }, // k1
      { q: 'A body momentarily at rest has:', options: ['Acceleration zero only','Constant velocity','Velocity zero, though its acceleration need not be zero','Both velocity and acceleration zero'], answer: 2 }, // k3
      { q: 'Position differs from displacement in that position is measured:', options: ['From the starting point only','Always in metres','As a scalar','From a fixed origin'], answer: 3 }, // k2
      { q: 'If velocity is the derivative of displacement, then acceleration is:', options: ['The derivative of velocity','The integral of velocity','The derivative of distance','The integral of displacement'], answer: 0 }, // k5
    ],
    amber: [
      { q: 'A particle starts from rest and accelerates at 2 m s⁻² for 5 s. Its final velocity is:', options: ['5 m s⁻¹','10 m s⁻¹','2 m s⁻¹','25 m s⁻¹'], answer: 1 }, // k6
      { q: 'A particle starts from rest and accelerates at 2 m s⁻² for 5 s. Its displacement after 5 s is:', options: ['50 m','5 m','25 m','10 m'], answer: 2 }, // k6
      { q: 'A stone is dropped from rest. Taking g = 9.8, its speed after 2 s is:', options: ['9.8 m s⁻¹','4.9 m s⁻¹','39.2 m s⁻¹','19.6 m s⁻¹'], answer: 3 }, // k6
      { q: 'A stone is dropped from rest. Taking g = 9.8, the distance fallen in 2 s is:', options: ['19.6 m','9.8 m','39.2 m','4.9 m'], answer: 0 }, // k6
      { q: 'A car travelling at 20 m s⁻¹ decelerates uniformly at 4 m s⁻² to rest. The time taken is:', options: ['2 s','5 s','4 s','80 s'], answer: 1 }, // k6
      { q: 'A car travelling at 20 m s⁻¹ decelerates uniformly at 4 m s⁻² to rest. The distance travelled while stopping is:', options: ['40 m','25 m','50 m','100 m'], answer: 2 }, // k6
      { q: 'A body has u = 5 m s⁻¹ and accelerates at 3 m s⁻² over 10 m. Its final speed is closest to:', options: ['8.50 m s⁻¹','35.0 m s⁻¹','6.40 m s⁻¹','9.22 m s⁻¹'], answer: 3 }, // k6
      { q: 'A car slows from 30 m s⁻¹ to rest in 6 s. Its acceleration is:', options: ['−5 m s⁻²','5 m s⁻²','−180 m s⁻²','−0.2 m s⁻²'], answer: 0 }, // k6
      { q: 'For s = t³ − 3t, the velocity at t = 2 is:', options: ['12','9','2','6'], answer: 1 }, // k5
      { q: 'A body travels 100 m north then 100 m south in 40 s. Its average velocity is:', options: ['2.5 m s⁻¹','200 m s⁻¹','0 m s⁻¹','5 m s⁻¹'], answer: 2 }, // k1
      { q: 'A body travels 100 m north then 100 m south in 40 s. Its average speed is:', options: ['0 m s⁻¹','2.5 m s⁻¹','10 m s⁻¹','5 m s⁻¹'], answer: 3 }, // k1
      { q: 'A body accelerates uniformly from 10 to 30 m s⁻¹ in 4 s. The distance covered is:', options: ['80 m','40 m','120 m','20 m'], answer: 0 }, // k6
      { q: 'A ball thrown vertically upwards reaches its maximum height when:', options: ['It returns to the thrower','Its velocity is zero','Its acceleration is zero','Its speed is greatest'], answer: 1 }, // k6
      { q: 'A stone falls from rest through 45 m. Taking g = 9.8, the time taken is closest to:', options: ['9.18 s','2.14 s','3.03 s','4.59 s'], answer: 2 }, // k6
      { q: 'On a velocity-time graph, area below the time axis represents:', options: ['Distance travelled forwards','Zero displacement','Acceleration','Displacement in the negative direction'], answer: 3 }, // k4
      { q: 'Two cars travel in the same direction at 30 and 20 m s⁻¹. The velocity of the first relative to the second is:', options: ['10 m s⁻¹','50 m s⁻¹','−10 m s⁻¹','600 m s⁻¹'], answer: 0 }, // k1
      { q: 'Given a = dv/dt, velocity is obtained from acceleration by:', options: ['Dividing by time','Integrating with respect to time','Differentiating with respect to time','Multiplying by time'], answer: 1 }, // k5
      { q: 'A velocity-time graph is a straight line through the origin. This indicates:', options: ['Zero acceleration','Deceleration','Constant acceleration from rest','Constant velocity'], answer: 2 }, // k4
      { q: 'The magnitude of acceleration differs from acceleration in that the magnitude:', options: ['Includes direction','Is measured in m s⁻¹','Is always zero','Is never negative'], answer: 3 }, // k3
      { q: 'A trapezium on a velocity-time graph with parallel sides 4 and 10 and width 6 represents a displacement of:', options: ['42 m','60 m','24 m','84 m'], answer: 0 }, // k4
    ],
    red: [
      { q: 'For s = t³ − 6t² + 9t, the particle is instantaneously at rest at:', options: ['t = 1 only','t = 1 and t = 3','t = 0 and t = 3','t = 2 only'], answer: 1 }, // k5
      { q: 'A particle moves with s = t³ − 6t² + 9t. Between t = 0 and t = 4, the total distance travelled is:', options: ['8 m (4 + 4)','0 m','12 m','4 m'], answer: 2 }, // k5
      { q: 'A particle moves with s = t³ − 6t² + 9t. Between t = 0 and t = 4, the displacement is:', options: ['12 m','0 m','8 m','4 m'], answer: 3 }, // k5
      { q: 'A ball is thrown vertically upwards at 14.7 m s⁻¹. Taking g = 9.8, its maximum height above the point of projection is:', options: ['11.025 m','14.7 m','22.05 m (u²/g)','7.35 m'], answer: 0 }, // k6
      { q: 'A particle has acceleration a = 6t and velocity 2 m s⁻¹ when t = 0. Its velocity at time t is:', options: ['2t³ + 2','3t² + 2','6t + 2','3t²'], answer: 1 }, // k5
      { q: 'A body travels at 12 m s⁻¹ for 5 s then decelerates uniformly to rest over the next 4 s. The total distance is:', options: ['108 m','48 m','84 m','60 m'], answer: 2 }, // k4
      { q: 'The suvat formulae cannot be applied to a body whose acceleration is a = 6t because:', options: ['Time is negative','The units are wrong','The body is at rest','The acceleration is not constant, so calculus is needed instead'], answer: 3 }, // k5
      { q: 'A particle moves so that its velocity changes sign during the interval considered. Its distance travelled is found by:', options: ['Splitting the interval at the instant of zero velocity and adding the magnitudes','Integrating velocity over the whole interval','Taking the final displacement','Averaging the velocities'], answer: 0 }, // k5
      { q: 'A stone thrown down at 5 m s⁻¹ from a height falls for 2 s. Taking g = 9.8, the distance fallen is:', options: ['24.6 m','29.6 m','19.6 m','9.8 m'], answer: 1 }, // k6
      { q: 'For a body with constant acceleration, the average velocity over an interval equals:', options: ['The maximum velocity','Zero','½(u + v), the mean of the initial and final velocities','The final velocity'], answer: 2 }, // k6
    ],
  },

  '3.3': {
    name: 'Kinematics in 2 Dimensions',
    green: [
      { q: 'The position vector r of a particle gives its position:', options: ['Relative to its starting point only','As a scalar distance','At time zero only','Relative to a fixed origin'], answer: 3 }, // k9
      { q: 'In two dimensions, velocity is obtained from position by:', options: ['Differentiating r with respect to t','Integrating r with respect to time t','Dividing r by t','Multiplying r by t'], answer: 0 }, // k10
      { q: 'Acceleration is obtained from velocity by:', options: ['Taking the magnitude of v','Differentiating v with respect to t','Integrating v with respect to time t','Dividing v by t'], answer: 1 }, // k10
      { q: 'The speed of a particle with velocity v is:', options: ['v itself','The direction of v','|v|, the magnitude of v','The i-component of v, along the x-axis'], answer: 2 }, // k9
      { q: 'The distance of a particle from the origin is:', options: ['|v|','|a|','r itself','|r|'], answer: 3 }, // k9
      { q: 'The vector form of v = u + at applies when:', options: ['The acceleration is constant','The velocity is constant','The motion is in one dimension','The particle is at rest'], answer: 0 }, // k10
      { q: 'The position of B relative to A is given by:', options: ['|r_B| − |r_A|','r_B − r_A','r_A − r_B','r_A + r_B'], answer: 1 }, // k9
      { q: 'A two-dimensional velocity is commonly written in terms of:', options: ['Degrees only','The unit vector k only, pointing out of the page','The unit vectors i and j','A single scalar'], answer: 2 }, // k10
      { q: 'Average velocity in two dimensions is:', options: ['Total distance travelled ÷ elapsed time','The mean of the speeds','Always zero','Overall displacement ÷ elapsed time'], answer: 3 }, // k9
      { q: 'Velocity is obtained from acceleration by:', options: ['Integrating with respect to time','Differentiating with respect to time','Multiplying by time only','Taking the magnitude'], answer: 0 }, // k10
      { q: 'If the acceleration of a particle is zero, its path is:', options: ['Undefined','A straight line travelled at constant velocity','A parabola','A circle'], answer: 1 }, // k10
      { q: 'Motion in the i and j directions under constant acceleration can be treated:', options: ['Only using scalars','Only in one dimension','Independently, component by component','Only together'], answer: 2 }, // k10
      { q: 'The Cartesian equation of the path of a particle is found by:', options: ['Differentiating twice','Integrating the speed','Taking the magnitude of r','Eliminating t between the component equations'], answer: 3 }, // k11
      { q: 'Distance travelled along a curved path is:', options: ['Generally greater than the distance from the starting point','Always equal to the displacement','Always less than the displacement','Always zero'], answer: 0 }, // k9
      { q: 'The direction of motion of a particle at an instant is given by the direction of:', options: ['The origin','Its velocity vector','Its position vector','Its acceleration vector'], answer: 1 }, // k9
      { q: 'The magnitude of the vector 3i + 4j is:', options: ['12','25','5','7'], answer: 2 }, // k9
      { q: 'The vector form of s = ut + ½at² gives:', options: ['Speed as a scalar','Acceleration','Time','Displacement as a vector'], answer: 3 }, // k10
      { q: 'The velocity of A relative to B is:', options: ['v_A − v_B','v_B − v_A','v_A + v_B','|v_A| − |v_B|'], answer: 0 }, // k10
      { q: 'A particle is at the origin when its position vector equals:', options: ['i + j','The zero vector','Its velocity','Its acceleration'], answer: 1 }, // k9
      { q: 'Displacement in two dimensions is:', options: ['Always positive','A scalar','A vector from the start point to the end point','The length of the path travelled'], answer: 2 }, // k9
    ],
    amber: [
      { q: 'A particle has r = 3t i + t² j. Its velocity is:', options: ['3t i + 2t j','3i + t² j','6t j','3i + 2t j'], answer: 3 }, // k10
      { q: 'A particle has r = 3t i + t² j. Its speed at t = 2 is:', options: ['5','7','4','3'], answer: 0 }, // k10
      { q: 'A particle has r = 3t i + t² j. Its acceleration is:', options: ['0','2j','3i','2t j'], answer: 1 }, // k10
      { q: 'A particle has r = 3t i + t² j. The Cartesian equation of its path is:', options: ['y = 3x² (x = t)','y = x/3','y = x²/9','y = x²'], answer: 2 }, // k11
      { q: 'A particle has r = 2t i + (t² − 1) j. Its path has Cartesian equation:', options: ['y = x² − 1','y = 4x² − 1','y = x/2 − 1','y = x²/4 − 1'], answer: 3 }, // k11
      { q: 'A particle has a = 2i + 6t j and v = i at t = 0. Its velocity at time t is:', options: ['(1 + 2t)i + 3t² j','2t i + 3t² j','(1 + 2t)i + 6t j','2i + 6t j'], answer: 0 }, // k10
      { q: 'A has velocity 5i + 2j and B has velocity 3i − j. The velocity of A relative to B is:', options: ['2i + j','2i + 3j','8i + j','−2i − 3j'], answer: 1 }, // k10
      { q: 'A has position 3i + 4j and B has position 7i + j. The position of B relative to A is:', options: ['10i + 5j','4i + 3j','4i − 3j','−4i + 3j'], answer: 2 }, // k9
      { q: 'A has position 3i + 4j and B has position 7i + j. The distance between A and B is:', options: ['7','25','1','5'], answer: 3 }, // k9
      { q: 'A particle starts at 2i + j with constant velocity 3i − j. Its position at t = 4 is:', options: ['14i − 3j','12i − 4j','5i','14i + 5j'], answer: 0 }, // k10
      { q: 'Two particles collide when:', options: ['Their accelerations are equal','Their position vectors are equal at the same instant','Their velocities are equal','Their speeds are equal'], answer: 1 }, // k10
      { q: 'A velocity of 6i + 8j has magnitude and direction:', options: ['10, at 36.9°','48, at 53.1°','10, at 53.1° above the i-direction','14, at 53.1°'], answer: 2 }, // k9
      { q: 'A particle moves with constant velocity. Its path is:', options: ['A parabola','A circle','A curve of unknown shape','A straight line'], answer: 3 }, // k10
      { q: 'For constant acceleration in two dimensions, s = ½(u + v)t is:', options: ['Valid, applied as a vector equation','Only valid in one dimension','Never valid','Valid only for zero acceleration'], answer: 0 }, // k10
      { q: 'A particle has velocity 4i − 3j. Its speed is:', options: ['25','5','1','7'], answer: 1 }, // k9
      { q: 'A particle has r = (t² − 4t)i + 3t j. It crosses the j-axis when:', options: ['t = 2','Never','t = 0 or t = 4','t = 4 only'], answer: 2 }, // k11
      { q: 'A particle has u = 2i, a = j and moves for 4 s. Its displacement is:', options: ['8i + 4j','2i + 8j','8i + 16j','8i + 8j'], answer: 3 }, // k10
      { q: 'Two particles have the same velocity vector. The velocity of one relative to the other is:', options: ['The zero vector','Twice the velocity','Undefined','Their sum'], answer: 0 }, // k10
      { q: 'Vectors r, v and a for a particle moving in a plane all have:', options: ['No components','Two components each','One component each','Three components each'], answer: 1 }, // k9
      { q: 'A particle with a = 0 and u = 3i − 4j travels for 5 s. The distance from its starting point is:', options: ['15','20','25','5'], answer: 2 }, // k10
    ],
    red: [
      { q: 'A particle has r = t² i + (2t − t²) j. Its velocity is zero:', options: ['At t = 1','At t = 2','At all times','At no time, since the i-component 2t vanishes only at t = 0 where the j-component is 2'], answer: 3 }, // k10
      { q: 'A has position (t + 1)i + 2t j and B has position (3t − 1)i + (t + 1) j. They collide when:', options: ['t = 1, since both position vectors equal 2i + 2j','t = 2','t = 0','They never collide'], answer: 0 }, // k10
      { q: 'A particle has r = 4t i + (3t − 5t²) j. Its path is:', options: ['A hyperbola','A parabola','A straight line','A circle'], answer: 1 }, // k11
      { q: 'A particle has a = 6t i − 2j, with v = 0 and r = 0 at t = 0. Its position at time t is:', options: ['2t³ i − t² j','t³ i − 2t² j','t³ i − t² j','3t² i − 2t j'], answer: 2 }, // k10
      { q: 'A boat steers with velocity 4i and the current is 3j. The resultant velocity has magnitude:', options: ['7','1','12','5'], answer: 3 }, // k10
      { q: 'Two ships have constant velocities. The distance between them is least when:', options: ['The relative position vector is shortest, found by minimising its magnitude','Their speeds are equal','Their velocities are equal','They are at the origin'], answer: 0 }, // k10
      { q: 'For a particle with r = (2t)i + (t²)j, the average velocity between t = 0 and t = 2 is:', options: ['i + j','2i + 2j','2i + 4j','4i + 4j'], answer: 1 }, // k9
      { q: 'A particle projected with u = 5i + 12j has initial speed:', options: ['7','60','13','17'], answer: 2 }, // k9
      { q: 'For a particle moving with constant acceleration a from initial velocity u, the vector form v = u + at shows that:', options: ['The speed is constant','The path is always a straight line in the direction of u','The acceleration varies','The change in velocity is always parallel to a'], answer: 3 }, // k10
      { q: 'A particle has r = (t − 2)i + (t² − 4)j. It passes through the origin when:', options: ['t = 2','t = 0','t = −2','Never'], answer: 0 }, // k11
    ],
  },

  '3.4': {
    name: 'Projectiles',
    green: [
      { q: 'In standard projectile modelling, the horizontal acceleration is:', options: ['Variable','Zero','g downwards','g upwards'], answer: 1 }, // y1
      { q: 'In standard projectile modelling, the vertical acceleration is:', options: ['g upwards','Variable','g downwards','Zero'], answer: 2 }, // y1
      { q: 'At its maximum height, a projectile has:', options: ['Zero horizontal velocity','Zero speed','Zero acceleration','Zero vertical velocity'], answer: 3 }, // y2
      { q: 'Throughout the flight, the horizontal component of velocity is:', options: ['Constant','Increasing','Decreasing','Zero'], answer: 0 }, // y1
      { q: 'The path of a projectile under standard modelling assumptions is:', options: ['A hyperbola','A parabola','A straight line','A circle'], answer: 1 }, // y4
      { q: 'Which is a standard modelling assumption for projectile motion?', options: ['The projectile is a rigid body','Gravity varies with height','There is no air resistance','Air resistance is proportional to speed'], answer: 2 }, // y1
      { q: 'Standard projectile modelling treats the projectile as:', options: ['A uniform rod','A rigid lamina','A light string','A particle'], answer: 3 }, // y1
      { q: 'For a projectile launched at speed u and angle θ, the horizontal component of the initial velocity is:', options: ['u cos θ','u sin θ','u tan θ','u'], answer: 0 }, // y1
      { q: 'For a projectile launched at speed u and angle θ above the horizontal, the vertical component of the initial velocity is:', options: ['u','u sin θ','u cos θ','u tan θ'], answer: 1 }, // y1
      { q: 'On level ground, the range of a projectile is greatest when the angle of projection is:', options: ['60°','90°','45°','30°'], answer: 2 }, // y2
      { q: 'A ball thrown horizontally has initial vertical velocity:', options: ['g','u','u sin θ','0'], answer: 3 }, // y1
      { q: 'Unless otherwise specified, the value of g used in examinations is:', options: ['9.8','10','9.81','9'], answer: 0 }, // F2
      { q: 'Horizontal and vertical motion of a projectile are treated:', options: ['As a circular motion','Independently','Only together','As one scalar equation'], answer: 1 }, // y1
      { q: 'For projection and landing at the same height, the speed on landing equals:', options: ['Twice the speed of projection','Half the speed of projection','The speed of projection','Zero'], answer: 2 }, // y2
      { q: 'Calculations involving air resistance are:', options: ['Required for all projectiles at AS and A Level','Required only at A Level','Required only for heavy objects','Excluded from this specification'], answer: 3 }, // y1
      { q: 'The vertical motion of a projectile is an example of:', options: ['Motion with constant acceleration','Motion with constant velocity','Circular motion','Motion with zero acceleration'], answer: 0 }, // y1
      { q: 'The assumption that gravity always acts in the same direction is reasonable when:', options: ['The angle is 45°','The horizontal distance travelled is small','The projectile is heavy','The speed is large'], answer: 1 }, // y1
      { q: 'The time of flight of a projectile on level ground is:', options: ['Independent of the angle','Always 1 second','Twice the time taken to reach maximum height','Equal to the time to maximum height'], answer: 2 }, // y2
      { q: 'The direction of a projectile’s velocity at its highest point is:', options: ['Vertical','At 45°','Undefined','Horizontal'], answer: 3 }, // y2
      { q: 'The Cartesian equation of a projectile path is obtained by:', options: ['Eliminating t between the horizontal and vertical component equations','Differentiating the speed','Integrating the acceleration twice with respect to x','Taking the magnitude of the velocity'], answer: 0 }, // y4
    ],
    amber: [
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal. Its initial horizontal component is closest to:', options: ['11.5 m s⁻¹','17.3 m s⁻¹','10.0 m s⁻¹','20.0 m s⁻¹'], answer: 1 }, // y1
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal. Its initial vertical component is:', options: ['20.0 m s⁻¹','5.0 m s⁻¹','10.0 m s⁻¹','17.3 m s⁻¹'], answer: 2 }, // y1
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal. Taking g = 9.8, the time to reach maximum height is closest to:', options: ['2.04 s','0.51 s','1.77 s','1.02 s'], answer: 3 }, // y2
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal. Taking g = 9.8, the maximum height above the point of projection is closest to:', options: ['5.10 m','10.2 m','2.55 m','15.3 m'], answer: 0 }, // y2
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal over level ground. Taking g = 9.8, the time of flight is closest to:', options: ['3.06 s','2.04 s','1.02 s','4.08 s'], answer: 1 }, // y2
      { q: 'A projectile is launched at 20 m s⁻¹ at 30° to the horizontal over level ground. Taking g = 9.8, the range is closest to:', options: ['20.4 m','70.7 m','35.3 m','17.7 m'], answer: 2 }, // y2
      { q: 'A ball is thrown horizontally at 15 m s⁻¹ from a height of 20 m. Taking g = 9.8, the time to reach the ground is closest to:', options: ['1.43 s','4.08 s','2.86 s','2.02 s'], answer: 3 }, // y2
      { q: 'A ball is thrown horizontally at 15 m s⁻¹ from a height of 20 m. Taking g = 9.8, the horizontal distance travelled before landing is closest to:', options: ['30.3 m','21.4 m','15.0 m','61.2 m'], answer: 0 }, // y2
      { q: 'For a projectile launched at speed u and angle θ, the time of flight on level ground is:', options: ['u / g','2u sin θ / g','u sin θ / g','2u cos θ / g'], answer: 1 }, // y2
      { q: 'For a projectile launched at speed u and angle θ above the horizontal, the maximum height is:', options: ['u² / (2g)','u sin θ / g','u² sin²θ / (2g)','u² sin θ / (2g)'], answer: 2 }, // y2
      { q: 'For a projectile launched at speed u and angle θ above the horizontal, the range on level ground is:', options: ['u² sin θ / g','2u² sin θ / g','u² cos θ / g','u² sin 2θ / g'], answer: 3 }, // y2
      { q: 'At time t, the vertical component of a projectile’s velocity is:', options: ['u sin θ − gt','u sin θ + gt','u cos θ − gt','−gt'], answer: 0 }, // y2
      { q: 'At time t, the horizontal displacement of a projectile is:', options: ['u t','u cos θ · t','u sin θ · t','u cos θ · t − ½gt²'], answer: 1 }, // y2
      { q: 'At time t, the vertical displacement of a projectile is:', options: ['u cos θ · t − ½gt²','−½gt²','u sin θ · t − ½gt²','u sin θ · t'], answer: 2 }, // y2
      { q: 'A stone dropped from rest and a stone thrown horizontally from the same height:', options: ['Reach the ground at different times','Travel the same horizontal distance','Have the same speed on landing','Reach the ground at the same time'], answer: 3 }, // y1
      { q: 'A projectile launched at 40 m s⁻¹ at 90° to the horizontal, taking g = 9.8, reaches a maximum height of about:', options: ['81.6 m','40.0 m','163 m','20.4 m'], answer: 0 }, // y2
      { q: 'For a projectile on level ground, the angle of the velocity on landing compared with the angle of projection is:', options: ['Always 45°','Equal in magnitude but below the horizontal','Steeper','Shallower'], answer: 1 }, // y2
      { q: 'Two projectiles launched at the same speed at 30° and 60° on level ground have:', options: ['The same time of flight','Nothing in common','The same range','The same maximum height'], answer: 2 }, // y2
      { q: 'The initial speed of a projectile can be found given:', options: ['Its mass only','The value of g only','Its colour','Its range and angle of projection on level ground'], answer: 3 }, // y3
      { q: 'A projectile is launched and lands at a lower level than its start. Compared with level ground, its time of flight is:', options: ['Longer','Shorter','The same','Zero'], answer: 0 }, // y2
    ],
    red: [
      { q: 'The Cartesian equation of a projectile path launched from the origin at speed u and angle θ is:', options: ['y = x sin θ − gx²/2','y = x tan θ − gx²/(2u² cos²θ)','y = x tan θ − gx²/(2u²)','y = x tan θ + gx²/(2u² cos²θ)'], answer: 1 }, // y4
      { q: 'On level ground, two distinct angles of projection give the same range. If one is 25°, the other is:', options: ['45°','75°','65°','35°'], answer: 2 }, // y2
      { q: 'A projectile launched at speed u at 45° on level ground has range:', options: ['u²/(2g)','2u²/g','u²/(4g)','u²/g'], answer: 3 }, // y2
      { q: 'A ball is projected at 25 m s⁻¹ at 36.9° (so sin θ = 0.6). Taking g = 9.8, its maximum height is closest to:', options: ['11.5 m','22.9 m','5.7 m','31.9 m'], answer: 0 }, // y2
      { q: 'A projectile reaches a given height twice during its flight because:', options: ['The path is circular','The quadratic in t for vertical displacement has two roots, on the way up and on the way down','Gravity reverses','The horizontal velocity changes'], answer: 1 }, // y2
      { q: 'For a projectile launched from a height h above level ground, the time of flight is found by solving:', options: ['t = 2u sin θ / g','h = ½gt² only','−h = u sin θ · t − ½gt², taking the positive root','h = u sin θ · t'], answer: 2 }, // y2
      { q: 'Introducing air resistance into a projectile model would generally:', options: ['Increase the range','Leave the path a parabola','Have no effect','Reduce both the range and the maximum height'], answer: 3 }, // y1
      { q: 'A projectile must clear a wall of height 3 m at horizontal distance 20 m. The check required is:', options: ['Substitute x = 20 into the path equation and confirm y > 3','Confirm the range exceeds 20 m only','Confirm the maximum height exceeds 3 m only, wherever it occurs along the path','Confirm the angle exceeds 45°'], answer: 0 }, // y4
      { q: 'The speed of a projectile at time t is found from its components as:', options: ['u cos θ only','√((u cos θ)² + (u sin θ − gt)²)','u cos θ + u sin θ − gt (added directly)','u − gt'], answer: 1 }, // y2
      { q: 'A projectile launched at 30° with range 50 m on level ground, taking g = 9.8, has initial speed closest to:', options: ['35.0 m s⁻¹','49.0 m s⁻¹','23.8 m s⁻¹','15.6 m s⁻¹'], answer: 2 }, // y3
    ],
  },

  '3.5': {
    name: 'Forces',
    green: [
      { q: 'The weight of an object acts:', options: ['Vertically upwards','Perpendicular to the surface','Along the direction of motion','Vertically downwards'], answer: 3 }, // F1
      { q: 'The normal reaction acts:', options: ['Perpendicular to the surface of contact','Along the surface','Vertically downwards always, like the weight','In the direction of motion'], answer: 0 }, // F1
      { q: 'Tension in a string:', options: ['Is always zero','Pulls on the objects at each end','Pushes the objects apart','Acts perpendicular to the string'], answer: 1 }, // F1
      { q: 'A thrust (or compression) in a rod:', options: ['Acts perpendicular to the rod at each end of it','Equals the weight','Pushes the objects at each end apart','Pulls them together'], answer: 2 }, // F1
      { q: 'A frictional force acts:', options: ['Perpendicular to the surface','Vertically downwards','In the direction of motion','Along the surface, opposing relative motion or tendency to move'], answer: 3 }, // F1
      { q: 'A surface described as "smooth" has:', options: ['No friction','Large friction','A normal reaction of zero','No weight'], answer: 0 }, // F1
      { q: 'A surface described as "rough" means:', options: ['Weight is negligible','There may be a frictional force','There is no normal reaction at the surface','The object cannot move'], answer: 1 }, // F1
      { q: 'A particle is in equilibrium if and only if:', options: ['It is at rest at the origin','Friction is zero','The resultant of the forces acting on it is zero','Its weight is zero'], answer: 2 }, // F5
      { q: 'The weight of a body of mass m is:', options: ['m newtons','g newtons','mg kilograms','mg newtons'], answer: 3 }, // F1
      { q: 'Force is:', options: ['A vector quantity measured in newtons','A scalar quantity measured in newtons','A scalar measured in kilograms','A vector measured in kilograms'], answer: 0 }, // F1
      { q: 'The value of the normal reaction:', options: ['Is always mg cos θ','Depends on the other forces acting','Always equals the weight of the object on it','Is always zero'], answer: 1 }, // F1
      { q: 'The acceleration due to gravity g is:', options: ['A force','Measured in newtons','Not a universal constant, but often modelled as constant on Earth','A universal constant everywhere'], answer: 2 }, // F2
      { q: 'A force diagram should show:', options: ['Only the weight','Only the applied force and the resulting motion','The velocity','All the forces acting on the body'], answer: 3 }, // F3
      { q: 'A driving force is:', options: ['The forward force produced by an engine','A resistance to motion from the air and road','The normal reaction','The weight'], answer: 0 }, // F1
      { q: 'Air resistance is an example of:', options: ['A tension','A resistance force opposing motion','A driving force','A normal reaction'], answer: 1 }, // F1
      { q: 'Concurrent forces are forces that:', options: ['Are all parallel','Sum to zero','All act through the same point','Are all equal in magnitude and direction'], answer: 2 }, // F4
      { q: 'Vectors representing a set of forces in equilibrium:', options: ['Sum to the weight','Form an open polygon','Are all parallel','Sum to zero and can be drawn as a closed figure'], answer: 3 }, // F8
      { q: 'Resolving a force means:', options: ['Writing it as components in two chosen perpendicular directions','Adding it to another force','Removing it','Finding its moment'], answer: 0 }, // F6
      { q: 'An internal force in a system is one that acts:', options: ['Only vertically','Between parts of the system','From outside the system on each of its parts','Only at the surface'], answer: 1 }, // F3
      { q: 'A body resting on a horizontal table experiences a normal reaction that is:', options: ['Horizontal','Zero','Vertically upwards','Vertically downwards'], answer: 2 }, // F1
    ],
    amber: [
      { q: 'A 5 kg block rests on a horizontal table with no other vertical forces. Taking g = 9.8, the normal reaction is:', options: ['5 N','9.8 N','24.5 N','49 N'], answer: 3 }, // F1
      { q: 'For a body on a plane inclined at θ, the component of weight along the plane is:', options: ['mg sin θ','mg cos θ','mg tan θ','mg'], answer: 0 }, // F6
      { q: 'For a body of mass m on a plane inclined at θ, the component of weight perpendicular to the plane is:', options: ['mg','mg cos θ','mg sin θ','mg tan θ'], answer: 1 }, // F6
      { q: 'The relationship between friction F, coefficient μ and normal reaction R is:', options: ['F ≥ μR','F = R/μ','F ≤ μR','F = μR always'], answer: 2 }, // F10
      { q: 'When a body is on the point of sliding, the friction is:', options: ['Zero','Greater than μR','Equal to the weight','Limiting, so F = μR'], answer: 3 }, // F10
      { q: 'With μ = 0.4 and R = 50 N, the maximum possible frictional force is:', options: ['20 N','125 N','50 N','0.4 N'], answer: 0 }, // F10
      { q: 'A force of 20 N acts at 30° above the horizontal. Its horizontal component is closest to:', options: ['11.5 N','17.3 N','10.0 N','20.0 N'], answer: 1 }, // F6
      { q: 'A force of 20 N acts at 30° above the horizontal. Its vertical component is:', options: ['20.0 N','5.0 N','10.0 N','17.3 N'], answer: 2 }, // F6
      { q: 'A 10 kg block on a plane inclined at 30°. Taking g = 9.8, the component of weight down the plane is:', options: ['84.9 N','98 N','56.6 N','49 N'], answer: 3 }, // F6
      { q: 'A 10 kg block rests on a plane inclined at 30°. Taking g = 9.8, the normal reaction perpendicular to the plane is closest to:', options: ['84.9 N','49 N','98 N','56.6 N'], answer: 0 }, // F6
      { q: 'The angle of friction λ satisfies:', options: ['λ = μ','tan λ = μ','sin λ = μ','cos λ = μ'], answer: 1 }, // F11
      { q: 'The coefficient of friction μ:', options: ['Is measured in kg','Is always greater than 1','Has no units','Is measured in newtons'], answer: 2 }, // F10
      { q: 'Two perpendicular forces of 3 N and 4 N have a resultant of magnitude:', options: ['7 N','1 N','12 N','5 N'], answer: 3 }, // F4
      { q: 'A force given as 3i + 4j newtons has magnitude:', options: ['5 N','7 N','12 N','25 N'], answer: 0 }, // F4
      { q: 'Pressing down on a block on a horizontal surface:', options: ['Removes friction','Increases the normal reaction and so the maximum friction','Decreases the normal reaction','Leaves the normal reaction unchanged'], answer: 1 }, // F1
      { q: 'For a body in equilibrium on an inclined plane, it is usually easiest to resolve:', options: ['Along the weight only','In no particular direction','Parallel and perpendicular to the plane','Horizontally and vertically only'], answer: 2 }, // F6
      { q: 'A person stands in a lift accelerating upwards. The normal reaction on them is:', options: ['Less than their weight','Equal to their weight','Zero','Greater than their weight'], answer: 3 }, // F1
      { q: 'For a body in equilibrium, resolving in any direction gives:', options: ['A total component of zero in that direction','A total equal to the weight','A total equal to mg sin θ','No information'], answer: 0 }, // F5
      { q: 'A block on a smooth plane inclined at 30° is released. Taking g = 9.8, its acceleration down the plane is:', options: ['2.45 m s⁻²','4.9 m s⁻²','9.8 m s⁻²','8.49 m s⁻²'], answer: 1 }, // F6
      { q: 'Friction acts on a stationary block being pushed but not moving. Its magnitude equals:', options: ['Zero','The weight','The applied force, up to the limiting value μR','μR always'], answer: 2 }, // F10
    ],
    red: [
      { q: 'A block rests on a rough plane inclined at angle θ with coefficient of friction μ. It remains at rest provided:', options: ['tan θ ≥ μ','sin θ ≤ μ','cos θ ≤ μ','tan θ ≤ μ'], answer: 3 }, // F11
      { q: 'A 4 kg block on a rough horizontal surface has μ = 0.25. Taking g = 9.8, the horizontal force needed to make it start to slide is closest to:', options: ['9.8 N','39.2 N','2.45 N','19.6 N'], answer: 0 }, // F10
      { q: 'Pulling a block along a horizontal surface with a force at an angle above the horizontal:', options: ['Removes the weight','Reduces the normal reaction and so reduces the friction','Increases the normal reaction','Leaves friction unchanged'], answer: 1 }, // F10
      { q: 'A block in limiting equilibrium on a rough inclined plane has friction acting:', options: ['Perpendicular to the plane','Vertically upwards','Up the plane, opposing the tendency to slide down','Down the plane, in the same direction as the component of weight'], answer: 2 }, // F10
      { q: 'Three concurrent forces hold a particle in equilibrium. Drawn head-to-tail they form:', options: ['An open path','A straight line always','A circle','A closed triangle'], answer: 3 }, // F8
      { q: 'A 2 kg block on a rough plane inclined at 20° with μ = 0.5. Taking g = 9.8, the block:', options: ['Remains at rest, since tan 20° ≈ 0.364 < 0.5','Slides down','Accelerates up the plane','Is in limiting equilibrium, on the point of sliding down'], answer: 0 }, // F11
      { q: 'The inverse square law for gravitation is:', options: ['Used to find friction','Excluded from this specification','Required for all force problems','Used to find the normal reaction'], answer: 1 }, // F2
      { q: 'A body hangs in equilibrium from two strings at different angles. The number of independent equations obtained by resolving is:', options: ['Three','Four','Two, one in each of two perpendicular directions','One'], answer: 2 }, // F9
      { q: 'A crate is pushed at constant velocity across a rough floor. The applied horizontal force equals:', options: ['The weight','The normal reaction','Zero','The frictional force, since the acceleration is zero'], answer: 3 }, // F9
      { q: 'A lift descends and decelerates to rest. During the deceleration, the normal reaction on a passenger is:', options: ['Greater than their weight','Less than their weight, as they are moving downwards','Equal to their weight','Zero'], answer: 0 }, // F1
    ],
  },

  '3.6': {
    name: "Newton's Laws of Motion",
    green: [
      { q: "Newton's first law states that an object continues at rest or in uniform motion in a straight line unless:", options: ['Gravity acts on it','It is acted on by a resultant force','Its mass changes','It is on a rough surface, where friction always acts'], answer: 1 }, // n1
      { q: "Newton's second law is expressed as:", options: ['F = m/a','F = ma², where a is the speed of the object in m/s','F = ma, where F is the resultant force','F = mv'], answer: 2 }, // n1
      { q: "Newton's third law states that when one object exerts a force on another:", options: ['The reaction is smaller','There is no reaction','The reaction acts on the same object','There is a reaction equal in magnitude and opposite in direction'], answer: 3 }, // n1
      { q: 'The equation of motion for a particle is:', options: ["The application of Newton's second law to that particle",'A kinematics graph','The definition of weight','A statement of equilibrium only'], answer: 0 }, // n2
      { q: 'Rearranging F = ma gives acceleration as:', options: ['a = F − m','a = F/m','a = mF','a = m/F'], answer: 1 }, // n3
      { q: 'If the resultant force on a body is zero, the body:', options: ['Must be accelerating','Has zero mass','Remains at rest or continues at constant velocity','Must be at rest'], answer: 2 }, // n1
      { q: 'Doubling the resultant force on a fixed mass:', options: ['Halves the acceleration','Leaves acceleration unchanged','Doubles the mass','Doubles the acceleration'], answer: 3 }, // n3
      { q: 'Doubling the mass while keeping the resultant force fixed:', options: ['Halves the acceleration','Doubles the acceleration','Leaves acceleration unchanged','Doubles the force'], answer: 0 }, // n3
      { q: 'The two forces in a Newton\'s third law pair act:', options: ['Only when moving','On different objects','On the same object','In the same direction'], answer: 1 }, // n1
      { q: 'For two particles connected by a light inextensible string, the magnitudes of their accelerations are:', options: ['Always zero','Unrelated','Equal','In the ratio of their masses'], answer: 2 }, // n4
      { q: 'For a light inextensible string over a smooth pulley, the tension is:', options: ['Different on each side of the pulley wheel','Equal to the total weight','Zero','The same throughout the string'], answer: 3 }, // n4
      { q: 'A body in free fall, ignoring resistance, has acceleration:', options: ['g downwards','Zero','g upwards','Depending on its mass'], answer: 0 }, // n3
      { q: "Newton's second law applied in two dimensions is:", options: ['Valid only when a = 0','A vector equation, so it may be applied component by component','A scalar equation only','Not applicable'], answer: 1 }, // n7
      { q: 'When a whole system is treated as one body, internal forces:', options: ['Become external','Double','Cancel in pairs and can be ignored','Must be added twice'], answer: 2 }, // n4
      { q: 'Problems involving variable mass are:', options: ['Required at A Level for rockets and raindrops','Required at AS Level','Required for pulleys','Excluded from this specification'], answer: 3 }, // n3
      { q: 'The F in F = ma must be:', options: ['The resultant of all forces acting','Any one of the forces','The weight only','The largest force'], answer: 0 }, // n3
      { q: 'Equilibrium is the special case of the equation of motion in which:', options: ['v = 0 only','a = 0','m = 0','F is largest'], answer: 1 }, // n3
      { q: 'A train made of an engine and carriages may be modelled as:', options: ['A projectile','A light string','A set of connected particles','A single rigid lamina of uniform density'], answer: 2 }, // n4
      { q: 'The weight of a body of mass m used in an equation of motion is:', options: ['m','g','m/g','mg'], answer: 3 }, // n3
      { q: 'An external force on a system is one exerted:', options: ['By something outside the system','Between the parts of the system itself','Only by gravity','Only by friction'], answer: 0 }, // n4
    ],
    amber: [
      { q: 'A resultant force of 20 N acts on a mass of 4 kg. The acceleration is:', options: ['16 m s⁻²','5 m s⁻²','80 m s⁻²','0.2 m s⁻²'], answer: 1 }, // n3
      { q: 'A mass of 2 kg accelerates at 3 m s⁻². The resultant force is:', options: ['0.67 N','5 N','6 N','1.5 N'], answer: 2 }, // n3
      { q: 'For a person of mass m in a lift accelerating upwards at a, the equation of motion is:', options: ['mg − R = ma','R + mg = ma','R = mg','R − mg = ma'], answer: 3 }, // n3
      { q: 'For a person of mass m in a lift accelerating downwards at a, with normal reaction R, the equation of motion is:', options: ['mg − R = ma','R − mg = ma','R + mg = ma','R = 0'], answer: 0 }, // n3
      { q: 'Two masses m₁ > m₂ hang over a smooth pulley. Their common acceleration is:', options: ['g','(m₁ − m₂)g/(m₁ + m₂)','(m₁ + m₂)g/(m₁ − m₂)','m₁g/m₂'], answer: 1 }, // n5
      { q: 'A 3 kg block is pulled along a smooth horizontal surface by a force of 12 N. Its acceleration is:', options: ['0.25 m s⁻²','9.8 m s⁻²','4 m s⁻²','36 m s⁻²'], answer: 2 }, // n3
      { q: 'For a block of mass m on a rough surface pulled by force P, the equation of motion is:', options: ['P + μR = ma','P = ma','μR = ma','P − μR = ma'], answer: 3 }, // n3
      { q: 'A car of mass 1000 kg has a driving force of 3000 N and resistance 1000 N. Its acceleration is:', options: ['2 m s⁻²','3 m s⁻²','4 m s⁻²','1 m s⁻²'], answer: 0 }, // n3
      { q: 'A book rests on a table. The reaction to the book\'s weight, in the third-law sense, is:', options: ['Friction','The gravitational pull of the book on the Earth','The normal reaction from the table','The weight of the table'], answer: 1 }, // n1
      { q: 'A body of mass 5 kg falls with air resistance 19 N. Taking g = 9.8, its acceleration is closest to:', options: ['3.8 m s⁻²','13.6 m s⁻²','6.0 m s⁻²','9.8 m s⁻²'], answer: 2 }, // n3
      { q: 'A resultant force 6i + 8j N acts on a 2 kg particle. Its acceleration has magnitude:', options: ['10 m s⁻²','20 m s⁻²','2.5 m s⁻²','5 m s⁻²'], answer: 3 }, // n7
      { q: 'A body reaches terminal velocity when:', options: ['The resistance equals the weight, so the resultant force is zero','The weight becomes zero','The acceleration equals g','It stops falling'], answer: 0 }, // n3
      { q: 'For connected particles, writing an equation for the whole system is useful because:', options: ['Acceleration disappears','The internal tension cancels, leaving only external forces','It gives the tension directly','It removes the weight'], answer: 1 }, // n4
      { q: 'To find the tension in a connecting string, you should:', options: ['Ignore the acceleration','Set the tension to zero','Write the equation of motion for one particle separately','Use the whole system only'], answer: 2 }, // n5
      { q: 'A train of total mass 50 000 kg accelerates at 0.2 m s⁻² with resistance 5000 N. The driving force is:', options: ['10 000 N','5000 N','20 000 N','15 000 N'], answer: 3 }, // n4
      { q: 'A lift moving upwards at constant velocity exerts on a passenger a normal reaction that is:', options: ['Equal to their weight','Greater than their weight','Less than their weight','Zero'], answer: 0 }, // n3
      { q: 'A 2 kg particle on a smooth plane inclined at 30° has acceleration down the plane, taking g = 9.8, of:', options: ['8.49 m s⁻²','4.9 m s⁻²','9.8 m s⁻²','2.45 m s⁻²'], answer: 1 }, // n3
      { q: 'A car decelerates under a resistance of 2000 N with mass 800 kg. Its deceleration is:', options: ['4 m s⁻²','1.6 m s⁻²','2.5 m s⁻²','0.4 m s⁻²'], answer: 2 }, // n3
      { q: 'Applying F = ma to a body requires the mass to be:', options: ['Changing','Zero','Equal to the weight','Constant, since variable mass is excluded here'], answer: 3 }, // n3
      { q: 'A particle is in equilibrium under three forces. Applying F = ma gives:', options: ['Resultant force zero, since a = 0','Resultant force mg','a = g','Nothing useful'], answer: 0 }, // n3
    ],
    red: [
      { q: 'Masses of 5 kg and 3 kg hang over a smooth pulley. Taking g = 9.8, the acceleration is:', options: ['9.8 m s⁻²','2.45 m s⁻²','4.9 m s⁻²','1.225 m s⁻²'], answer: 1 }, // n5
      { q: 'Masses of 5 kg and 3 kg hang over a smooth pulley. Taking g = 9.8, the tension in the string is:', options: ['29.4 N','24.5 N','36.75 N','49 N'], answer: 2 }, // n5
      { q: 'A 4 kg block on a smooth table is connected over a smooth pulley to a 2 kg hanging mass. Taking g = 9.8, the acceleration is closest to:', options: ['4.9 m s⁻²','1.63 m s⁻²','9.8 m s⁻²','3.27 m s⁻²'], answer: 3 }, // n5
      { q: 'A 4 kg block on a smooth table is connected over a smooth pulley to a 2 kg hanging mass. Taking g = 9.8, the tension is closest to:', options: ['13.1 N','19.6 N','26.1 N','6.5 N'], answer: 0 }, // n5
      { q: 'An engine of mass 20 000 kg pulls a carriage of mass 10 000 kg with total driving force 45 000 N and no resistance. The force in the coupling is:', options: ['22 500 N','15 000 N','45 000 N','30 000 N'], answer: 1 }, // n5
      { q: 'A student says "the table pushes up on the book and the book\'s weight pushes down, so these are a third-law pair". This is wrong because:', options: ['A third-law pair acts on two different bodies, but both of these act on the book','The forces are unequal','Weight is not a force','The book is not moving'], answer: 0 }, // n1
      { q: 'A 70 kg passenger is in a lift accelerating upwards at 2 m s⁻². Taking g = 9.8, the normal reaction is:', options: ['140 N','546 N','826 N','686 N'], answer: 2 }, // n3
      { q: 'A particle of mass 0.5 kg has resultant force 3i − 4j N. Its acceleration is:', options: ['1.5i − 2j m s⁻²','3i − 4j m s⁻²','10 m s⁻²','6i − 8j m s⁻²'], answer: 3 }, // n7
      { q: 'A 1200 kg car travelling at 20 m s⁻¹ brakes to rest in 40 m. The constant braking force required is:', options: ['6000 N','3000 N','12 000 N','600 N'], answer: 0 }, // n3
      { q: 'In a connected-particle problem, the assumption that the pulley is smooth is needed so that:', options: ['The masses are equal','The tension is the same on both sides of the string','The accelerations differ','The string can stretch'], answer: 1 }, // n4
    ],
  },

  '3.7': {
    name: 'Rigid Bodies',
    green: [
      { q: 'The moment of a force about a point is measured in:', options: ['m s⁻²','J','N m','N'], answer: 2 }, // F13
      { q: 'The moment of a force about a point equals:', options: ['Force × time','Force ÷ distance','Force + distance','Force × perpendicular distance from the point'], answer: 3 }, // F13
      { q: 'A force of 12 N acts perpendicular to a rod, 0.5 m from the pivot. The moment about the pivot is:', options: ['6 N m','24 N m','12 N m','0.5 N m'], answer: 0 }, // F13
      { q: 'A rigid body is in equilibrium when:', options: ['All forces act through a single point','The resultant force is zero and the sum of the moments about any one point is zero','The resultant force is zero only','The sum of moments about the centre of mass is zero only, whatever the resultant force'], answer: 1 }, // F14
      { q: 'A system of forces can have a turning effect on:', options: ['A light string','A smooth surface','A rigid body','A particle only'], answer: 2 }, // F15
      { q: 'For the purpose of calculating its moment, the weight of a body acts through:', options: ['One end','The pivot','The point of application of the largest force','Its centre of mass'], answer: 3 }, // F16
      { q: 'For a uniform rod, the centre of mass is at:', options: ['Its midpoint','One end','A quarter of the way along','The pivot'], answer: 0 }, // F16
      { q: 'A force acting through the pivot has a moment about that pivot of:', options: ['Infinity','Zero','Its full magnitude','Half its magnitude'], answer: 1 }, // F13
      { q: 'Moments are described as clockwise or anticlockwise because:', options: ['Distance has direction','Moments are always positive, whichever way the force turns','A turning effect has a sense of rotation','Forces are scalars'], answer: 2 }, // F15
      { q: 'A rigid body is one that:', options: ['Has no mass','Is frictionless','Cannot rotate about any axis','Does not bend or deform'], answer: 3 }, // F14
      { q: 'A lamina is:', options: ['A flat body whose thickness is negligible','A rod','A light string','A particle'], answer: 0 }, // F13
      { q: 'Increasing the perpendicular distance from the pivot, with the force unchanged:', options: ['Reverses the moment','Increases the moment','Decreases the moment','Leaves the moment unchanged'], answer: 1 }, // F13
      { q: 'Although N m and J have the same base units, moment is quoted in:', options: ['N','m','N m, to distinguish it from energy','J'], answer: 2 }, // F13
      { q: 'For a body in equilibrium, taking moments about a point gives:', options: ['Total moment equals the weight','Total moment equals mg','No information','Total clockwise moment equals total anticlockwise moment'], answer: 3 }, // F14
      { q: 'In this specification, the forces considered in moments problems are:', options: ['Coplanar and perpendicular to the rod or edge','In three dimensions','Always parallel to the rod or edge they act on','Always at 45°'], answer: 0 }, // F13
      { q: 'The bodies considered in this section are:', options: ['Any shape','Rods and rectangular laminas, possibly non-uniform','Spheres only','Particles only'], answer: 1 }, // F13
      { q: 'A seesaw balances when:', options: ['The distances are equal','The weights are zero','The moments about the pivot are equal and opposite','The masses are equal'], answer: 2 }, // F14
      { q: 'When taking moments, a sensible choice of pivot is a point:', options: ['As far away as possible','At the centre of mass always, whatever forces are unknown','Outside the body','Through which an unknown force acts, eliminating it'], answer: 3 }, // F14
      { q: 'Equilibrium of a rigid body requires how many types of condition?', options: ['Two — forces and moments','One — forces only (no moments)','One — moments only','Three'], answer: 0 }, // F14
      { q: 'A force of 15 N acts perpendicular to a rod at 2 m from the pivot. Its moment is:', options: ['13 N m','30 N m','7.5 N m','17 N m'], answer: 1 }, // F13
    ],
    amber: [
      { q: 'A light rod is pivoted at its centre. A 30 N weight hangs 2 m from the pivot on one side. A 40 N weight balances it at a distance of:', options: ['1.0 m','2.0 m','1.5 m','2.5 m'], answer: 2 }, // F14
      { q: 'A uniform rod of weight 100 N and length 6 m rests on supports at its two ends. Each reaction is:', options: ['100 N','25 N','60 N','50 N'], answer: 3 }, // F16
      { q: 'A uniform rod of length 2L has its weight acting at a distance from one end of:', options: ['L','2L','L/2','0'], answer: 0 }, // F16
      { q: 'For a rigid body in equilibrium, the sum of the moments is zero about:', options: ['The midpoint only','Any point you choose','The centre of mass only','A support only'], answer: 1 }, // F14
      { q: 'A uniform plank of weight 200 N and length 4 m rests on supports at each end, with a 100 N load at its midpoint. Each reaction is:', options: ['300 N','200 N','150 N','100 N'], answer: 2 }, // F14
      { q: 'Taking moments about a support is useful because:', options: ['It doubles the moment','It removes the weight','It makes the body uniform','The reaction at that support has zero moment there'], answer: 3 }, // F14
      { q: 'Two children of weights 300 N and 500 N sit on a seesaw pivoted at its centre. If the lighter sits 2 m from the pivot, the heavier must sit at:', options: ['1.2 m','1.5 m','3.33 m','2.0 m'], answer: 0 }, // F14
      { q: 'For a non-uniform rod, the centre of mass:', options: ['Is at one end','Is not at the midpoint and must be given or found','Is always at the midpoint','Does not exist'], answer: 1 }, // F16
      { q: 'A rod rests on two supports. The sum of the two reactions equals:', options: ['Twice the weight of the rod in total','Zero','The total downward force on the rod','Half the weight'], answer: 2 }, // F14
      { q: 'A 40 N force acts perpendicular to a 3 m rod at its far end from the pivot. The moment is:', options: ['13.3 N m','43 N m','37 N m','120 N m'], answer: 3 }, // F13
      { q: 'A uniform beam is supported at one end and held by a vertical force at the other. Taking moments about the supported end eliminates:', options: ['The reaction at that end','The weight','The applied force at the other end','Nothing'], answer: 0 }, // F14
      { q: 'For a body in equilibrium under parallel vertical forces, resolving vertically gives:', options: ['The pivot position','Total upward force equals total downward force','Total moment about the centre of mass equals zero','The centre of mass'], answer: 1 }, // F14
      { q: 'Finding the centre of mass of a composite body is:', options: ['Required at AS Level','Required for laminas only, not for rods or beams','Excluded from this specification','Required at A Level'], answer: 2 }, // F16
      { q: 'A vector treatment of moments is:', options: ['Required for rods','Required for laminas','Required in three dimensions for all bodies','Excluded from this specification'], answer: 3 }, // F13
      { q: 'In moments questions, the centre of mass may be found:', options: ['From symmetry, from the information given, or by taking moments','Only by integration','Only by experiment','Never'], answer: 0 }, // F16
      { q: 'A uniform rectangular lamina has its centre of mass:', options: ['Outside the lamina','At the intersection of its diagonals','At one corner','At the midpoint of one of its longer edges'], answer: 1 }, // F16
      { q: 'A rod pivoted at one end with a load at the other requires, to stay horizontal:', options: ['Zero weight','A smooth pivot only','An additional force providing a balancing moment','No additional force'], answer: 2 }, // F14
      { q: 'Doubling both the force and its distance from the pivot changes the moment by a factor of:', options: ['2','1','1/2','4'], answer: 3 }, // F13
      { q: 'A rigid body under a single non-zero force applied away from its centre of mass will:', options: ['Not be in equilibrium, since both the resultant force and the moment are non-zero','Be in equilibrium','Only translate','Only rotate'], answer: 0 }, // F14
      { q: 'The reaction at a support becomes zero when the body:', options: ['Has zero weight','Is on the point of tipping about the other support','Is uniform','Is horizontal'], answer: 1 }, // F14
    ],
    red: [
      { q: 'A non-uniform rod AB of length 4 m and weight 50 N rests horizontally on supports at A and B. The reaction at A is 20 N. The centre of mass is, from A:', options: ['2.0 m','2.5 m','2.4 m','1.6 m'], answer: 2 }, // F16
      { q: 'A uniform plank of length 6 m and weight 300 N rests on supports 1 m from each end. A child of weight 200 N stands at one end. The reaction at the nearer support is:', options: ['250 N','150 N','350 N','400 N'], answer: 3 }, // F14
      { q: 'A uniform rod of weight W and length 2a rests on a support at distance a/2 from one end. It will tip about that support unless:', options: ['An additional force provides a balancing moment','The rod is light','The support is smooth, so no friction can act on the rod','The rod is vertical'], answer: 0 }, // F14
      { q: 'A uniform beam of weight 400 N and length 8 m is supported at one end and at a point 6 m from that end. The reaction at the far support is closest to:', options: ['400 N','267 N','200 N','133 N'], answer: 1 }, // F14
      { q: 'A rod is in equilibrium under three vertical forces. The number of independent equations available is:', options: ['Three','Four','Two — one resolving, one taking moments','One'], answer: 2 }, // F14
      { q: 'A non-uniform rod of weight 80 N and length 5 m rests on supports at its ends, with reactions 30 N and 50 N. Its centre of mass is, from the 30 N end:', options: ['1.875 m','2.5 m','2.0 m','3.125 m'], answer: 3 }, // F16
      { q: 'A plank overhangs a support. A person walking out along the overhang causes tipping when:', options: ['The anticlockwise moment about the support exceeds the clockwise moment','Their weight exceeds the plank\'s weight','The plank becomes non-uniform','The reaction doubles'], answer: 0 }, // F14
      { q: 'Taking moments about two different points for a body in equilibrium gives:', options: ['No information','Two valid equations, though they may not be independent of the resolving equation','Contradictory results','Only one equation'], answer: 1 }, // F14
      { q: 'A uniform rod of weight 60 N and length 4 m is hinged at A and held horizontal by a vertical string at B. The tension in the string is:', options: ['120 N','15 N','30 N','60 N'], answer: 2 }, // F14
      { q: 'A uniform rod of weight 60 N and length 4 m is hinged at A and held horizontal by a vertical string at B. The vertical force at the hinge A is:', options: ['60 N upwards','30 N downwards','Zero','30 N upwards'], answer: 3 }, // F14
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_QUESTIONS; }
