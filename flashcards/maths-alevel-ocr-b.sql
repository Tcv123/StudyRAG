-- OCR B (MEI) A-Level Mathematics (H640) — Flashcards
-- Subject 'Mathematics', exam_board 'OCR B', level 'alevel'.
-- Single A-Level entry: AS (H630) content is folded into the same topic ids.
-- 16 cards per topic, card_order restarting at 1 within each topic.
--
-- RUN ONCE. These are plain INSERTs with no de-duplication, so running
-- the file twice would create a second copy of every card. To check
-- before running:
--   SELECT count(*) FROM flashcards
--    WHERE subject='Mathematics' AND exam_board='OCR B' AND level='alevel';
-- That should return 0 before, and 400 after.

ALTER TABLE flashcards ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'alevel'
  CHECK (level IN ('gcse','as','alevel'));

-- Topic 1.1 — Proof
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What is proof by deduction?', 'Proceeding from given assumptions through a series of logical steps to a conclusion.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What is proof by exhaustion?', 'Establishing a result by checking every case of a finite set of cases, having first shown the cases cover all possibilities.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What is proof by contradiction?', 'Assume the statement is false, reason correctly from that assumption, and derive an impossibility. The assumption must therefore be wrong.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'How do you disprove a general statement?', 'Give a single counter-example — one case for which the statement fails. One example never proves a general statement, but one counter-example always disproves it.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Is proof by induction part of H640?', 'No. Induction belongs to Further Mathematics, not to A-Level Mathematics B (MEI).', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What does P ⇒ Q mean, and how does it differ from P ⇔ Q?', 'P ⇒ Q means P implies Q. P ⇔ Q means each implies the other. Writing ⇔ requires both directions to hold.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What is the contrapositive of ''if P then Q'', and why is it useful?', '''If not Q then not P''. It is logically equivalent to the original, so proving it proves the original — often easier than a direct argument.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What is the converse of ''if P then Q''? Is it always true?', '''If Q then P''. It is a different statement and need not be true; confusing the two is a common error.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Give the counter-example that disproves ''every prime is odd''.', '2 is prime and even.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Give the counter-example that disproves ''n² − n + 41 is prime for every positive integer n''.', 'n = 41, where the expression equals 41², divisible by 41. It does give primes for n = 1 to 40, which is why testing values is not proof.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Outline the proof that √2 is irrational.', 'Assume √2 = p/q in lowest terms. Then p² = 2q², so p is even; writing p = 2k gives q² = 2k², so q is even. Both even contradicts lowest terms.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Why is ''in its lowest terms'' essential to the √2 proof?', 'It is the assumption the final contradiction violates. Without it, showing p and q are both even contradicts nothing and the proof fails.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Why can the √2 argument not be copied to prove √4 irrational?', 'It would need ''p² divisible by 4 ⇒ p divisible by 4'', which is false (take p = 2). The proof breaks exactly where it must, since √4 = 2 is rational.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'Outline Euclid''s proof that there are infinitely many primes.', 'Assume a finite list p₁…pₙ and form N = p₁p₂⋯pₙ + 1. No prime in the list divides N, so N is prime or has a prime factor outside the list — contradicting completeness.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'In Euclid''s proof, must N = p₁⋯pₙ + 1 be prime?', 'No. It need only have no factor in the list. With 2,3,5,7,11,13 you get 30031 = 59 × 509 — composite, but both factors lie outside the list.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.1', 'Proof', 'What is the negation of ''all swans are white''?', '''There exists a swan that is not white.'' It is not ''no swans are white'', which is a much stronger claim.', 16, 'alevel');

-- Topic 1.2 — Algebra
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'How do you simplify a surd such as √50?', 'Extract the largest square factor: √50 = √(25 × 2) = 5√2.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'How do you rationalise a denominator of the form a + √b?', 'Multiply numerator and denominator by the conjugate a − √b, using the difference of two squares to clear the surd.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'Is √(a + b) equal to √a + √b?', 'No. The product rule holds but the sum rule does not: √(9 + 16) = 5 while √9 + √16 = 7.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'State the laws of indices for multiplication, division and powers.', 'xᵃ × xᵇ = x^(a+b);  xᵃ ÷ xᵇ = x^(a−b);  (xᵃ)ᵇ = x^(ab).', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'What are x⁰, x^(−a) and x^(m/n)?', 'x⁰ = 1 for x ≠ 0;  x^(−a) = 1/xᵃ;  x^(m/n) = (ⁿ√x)^m — take the root first to keep the numbers small.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'What is the discriminant, and what do its three cases tell you?', 'b² − 4ac. Positive: two distinct real roots. Zero: one repeated root. Negative: no real roots.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'What is the difference between ''two distinct real roots'' and ''real roots''?', 'Distinct requires b² − 4ac > 0; ''real roots'' usually allows the repeated case, so b² − 4ac ≥ 0. The wording decides < or ≤ in the answer.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'What is the condition for a line to be tangent to a curve?', 'Substitute the line into the curve and set the discriminant of the resulting quadratic to zero.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'How do you complete the square for x² + bx + c?', 'Write (x + b/2)² and subtract (b/2)², then add c. For x² + 6x + 2 this gives (x + 3)² − 7, so the minimum is at (−3, −7).', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'How do you solve one linear and one quadratic simultaneous equation?', 'Always substitute the linear equation into the quadratic, then substitute the roots back into the linear equation and pair the values correctly.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'How do you solve a quadratic inequality such as x² − 4x − 5 > 0?', 'Factorise to find the critical values, then read the sign from the parabola''s shape. Upward parabola: positive outside the roots, so x < −1 or x > 5.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'Why can''t you multiply an inequality through by (x − 3)?', 'Its sign is unknown, so the inequality may or may not reverse. Instead collect over a common denominator, or multiply by the square (x − 3)², which is always positive.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'When do two solution intervals need ''or'' rather than ''and''?', 'Always, for two separate intervals. ''x < −1 and x > 5'' describes no numbers at all; the union needs ''or''.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'Write the four proportion relationships and their equations.', 'y ∝ x gives y = kx;  y ∝ 1/x gives y = k/x;  y ∝ xⁿ gives y = kxⁿ;  y ∝ 1/x² gives y = k/x².', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'What forms are used for partial fractions in H640?', 'Denominators with up to three linear factors, including repeated ones: A/(x+a) + B/(x+b), and for (x+a)² both A/(x+a) and B/(x+a)².', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.2', 'Algebra', 'What is the commonest error with repeated factors in partial fractions?', 'Omitting the A/(x+a) term and using only B/(x+a)². The system then has no solution.', 16, 'alevel');

-- Topic 1.3 — Functions
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'State the factor theorem.', 'If f(a) = 0 then (x − a) is a factor of f(x), and conversely.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'State the remainder theorem.', 'The remainder when f(x) is divided by (x − a) is f(a). A remainder of zero means (x − a) is a factor.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'To test whether (x + 3) is a factor, which value do you substitute?', 'x = −3, since (x + 3) = (x − (−3)). Substituting +3 is the standard sign error.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'When hunting for a first factor of a cubic, which values should you test?', 'The divisors of the constant term. For a constant of 6, test ±1, ±2, ±3, ±6.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'What is the domain and what is the range of a function?', 'The domain is the set of permitted inputs; the range is the set of outputs the function actually takes.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'What are the two usual causes of a restricted domain?', 'You cannot divide by zero, and you cannot take the square root of a negative number.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'How do you find the range of a quadratic?', 'Complete the square. For f(x) = x² − 4x + 7 = (x − 2)² + 3, the range is f(x) ≥ 3.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'What does fg(x) mean?', 'f(g(x)) — apply g first, then f. The inner function is the one written next to the x.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'Is composition of functions commutative?', 'No. With f(x) = 2x + 3 and g(x) = x², fg(x) = 2x² + 3 but gf(x) = (2x + 3)².', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'When does an inverse function exist?', 'Only when the function is one-to-one. A many-to-one function such as x² needs its domain restricted first.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'How do you find an inverse function?', 'Write y = f(x), rearrange to make x the subject, then swap the letters. Use the given domain to choose the sign of any square root.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'How are the graphs of f and f⁻¹ related?', 'Each is the reflection of the other in the line y = x. Domain and range swap, and any intersection lies on y = x.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'Define |x| as a piecewise function.', '|x| = x for x ≥ 0, and |x| = −x for x < 0. The graph is a V with vertex at the origin.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'How do you obtain y = |f(x)| from y = f(x)?', 'Reflect the parts below the x-axis up into it, leaving the rest unchanged. It acts on the OUTPUT.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'How do you obtain y = f(|x|) from y = f(x)?', 'Keep the x ≥ 0 part and reflect it in the y-axis, discarding the original x < 0 part. It acts on the INPUT.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.3', 'Functions', 'When is squaring a safe way to solve a modulus equation?', 'When both sides are non-negative — automatic for |A| = |B|. If one side could be negative, split into cases instead.', 16, 'alevel');

-- Topic 1.4 — Graphs
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What must a sketch show when ''key features'' are asked for?', 'Intercepts with both axes, asymptotes drawn dashed and labelled, turning points where relevant, and the behaviour as x → ±∞.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What does y = f(x) + a do to the graph?', 'Translates it a units in the positive y-direction. It acts on the output, so it behaves as expected.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What does y = f(x + a) do to the graph?', 'Translates it a units to the LEFT. Anything inside the bracket behaves in the opposite sense to what you expect.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What does y = af(x) do?', 'A stretch parallel to the y-axis, scale factor a. Every y-coordinate is multiplied by a.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What does y = f(ax) do?', 'A stretch parallel to the x-axis, scale factor 1/a. Every x-coordinate is divided by a.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'How is a translation written in vector notation?', 'y = f(x − 2) + 5 is a translation by the column vector (2, 5) — note that f(x − 2) shifts RIGHT by 2.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'Why must you factorise the inside before describing a combined transformation?', 'Because the stretch also scales the translation. Write f(3x − 6) as f(3(x − 2)) to get the order right.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What do y = −f(x) and y = f(−x) do?', '−f(x) reflects in the x-axis; f(−x) reflects in the y-axis.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'Where does a vertical asymptote occur?', 'Where the denominator is zero and the numerator is not. Watch for a cancelling factor, which gives a hole instead.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'How do you find a horizontal asymptote?', 'Consider the behaviour as x → ±∞. For y = x/(x − 1), divide top and bottom by x to get 1/(1 − 1/x) → 1, so y = 1.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'When does an oblique (slant) asymptote occur?', 'When the numerator''s degree is one more than the denominator''s. For y = (x² + 1)/x = x + 1/x, the asymptote is y = x.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'Can a curve cross an asymptote?', 'It may cross a horizontal or oblique asymptote, since those describe behaviour only far out. It can never cross a vertical one, where the function is undefined.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What does a repeated factor tell you about the graph at that root?', '(x − a) crosses; (x − a)² touches and turns back; (x − a)³ crosses but flattens, giving a point of inflection.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'How many roots and turning points can a degree-n polynomial have?', 'At most n real roots and at most n − 1 turning points.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'How do you find the number of solutions of f(x) = k graphically?', 'Draw the horizontal line y = k and count the intersections with y = f(x).', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.4', 'Graphs', 'What conditions make a graph symmetric about the y-axis or the origin?', 'f(−x) = f(x) gives symmetry about the y-axis (even); f(−x) = −f(x) gives symmetry about the origin (odd).', 16, 'alevel');

-- Topic 1.5 — Coordinate Geometry
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'Write down the gradient, midpoint and distance formulae.', 'Gradient (y₂ − y₁)/(x₂ − x₁); midpoint ((x₁+x₂)/2, (y₁+y₂)/2); distance √((x₂−x₁)² + (y₂−y₁)²).', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'What is the relationship between perpendicular gradients?', 'Their product is −1, so one is the negative reciprocal of the other. The rule fails for a vertical line, whose gradient is undefined.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you show three points are collinear?', 'Show the gradient between successive pairs is equal, and note they share a common point.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'Write down the equation of a circle with centre (a, b) and radius r.', '(x − a)² + (y − b)² = r². Note the signs: centre (2, −3) gives (x − 2)² + (y + 3)².', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you find the centre and radius from x² + y² + 2gx + 2fy + c = 0?', 'Complete the square in both x and y. The right-hand side is then r², so remember to take the square root.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'What is the commonest error when reading a circle equation?', 'Quoting r² as the radius. From (x − 3)² + (y + 2)² = 25 the radius is 5, not 25.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you find a circle''s equation from the endpoints of a diameter?', 'The centre is the midpoint; the radius is half the distance between the endpoints.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you tell whether a point is inside, on, or outside a circle?', 'Substitute the coordinates and compare with r². Greater than r² means outside; less means inside.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'State the three circle properties in the specification.', 'The angle in a semicircle is 90°; the perpendicular from the centre to a chord bisects it; a tangent is perpendicular to the radius at the point of contact.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you find the equation of a tangent to a circle at a given point?', 'Find the gradient of the radius to that point, take its negative reciprocal for the tangent, then use the point-gradient form.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you find how many times a line meets a circle?', 'Substitute the line into the circle and look at the discriminant of the resulting quadratic: two roots, one (tangent), or none.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'What are parametric equations?', 'x and y are each given as functions of a third variable, the parameter. Each parameter value gives one point on the curve.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'Why are parametric equations useful?', 'They describe curves that cannot be written as y = f(x), such as a full circle, which fails the one-output-per-input test.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'How do you convert parametric equations to Cartesian form?', 'Eliminate the parameter. Rearrange the SIMPLER equation for the parameter, or use sin²θ + cos²θ = 1 for trigonometric parameters.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'What is dy/dx for a parametric curve?', 'dy/dx = (dy/dt) ÷ (dx/dt). Getting the fraction the wrong way up is a standard error.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.5', 'Coordinate Geometry', 'What is the perpendicular distance from (x₀, y₀) to the line ax + by + c = 0?', '|ax₀ + by₀ + c| ÷ √(a² + b²). The line must first be rearranged into that form.', 16, 'alevel');

-- Topic 1.6 — Sequences & Series
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'Write down the nth term and sum formulae for an arithmetic sequence.', 'uₙ = a + (n − 1)d;  Sₙ = (n/2)(2a + (n − 1)d), or (n/2)(a + l) using the last term.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'Write down the nth term and sum formulae for a geometric sequence.', 'uₙ = arⁿ⁻¹;  Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'When does a geometric series converge, and what is its sum to infinity?', 'It converges if and only if |r| < 1, and then S∞ = a/(1 − r). Always state the condition.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What happens if you use the sum-to-infinity formula when |r| ≥ 1?', 'It produces a plausible-looking number that is meaningless, because the series diverges.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What is a recurrence relation?', 'A rule defining each term from the previous one, together with a starting value — for example u₍ₙ₊₁₎ = uₙ + 3 with u₁ = 2.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'How do you find the limit of a convergent recurrence relation?', 'Replace both u₍ₙ₊₁₎ and uₙ by L and solve for L, rejecting any root inconsistent with the sequence.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'Write the binomial expansion of (1 + x)ⁿ for a positive integer n.', '1 + nx + [n(n−1)/2!]x² + [n(n−1)(n−2)/3!]x³ + … It terminates, giving exactly n + 1 terms.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What is the standard error when expanding (1 + 2x)⁵?', 'Forgetting to raise the coefficient too: (2x)³ = 8x³, not 2x³.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'How do you find a particular coefficient in (a + b)ⁿ?', 'Use the term ⁿCᵣ a^(n−r) b^r, choosing r to give the required power.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What changes when the binomial index is negative or fractional?', 'The expansion no longer terminates — it becomes an infinite series — and it is valid only for |x| < 1.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What is the validity condition for expanding (1 + ax)ⁿ with non-integer n?', '|ax| < 1, that is |x| < 1/|a|. It is NOT |x| < 1 whenever there is a coefficient on x.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'Expand (1 + x)^(1/2) as far as the term in x².', '1 + x/2 − x²/8.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'How do you expand √(4 + x) using the binomial series?', 'Factorise first: √(4 + x) = 2(1 + x/4)^(1/2). The series cannot be applied to a bracket not starting with 1.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'How do you find the nth term given the sum of the first n terms?', 'uₙ = Sₙ − S₍ₙ₋₁₎. If Sₙ = n² then uₙ = n² − (n − 1)² = 2n − 1.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What are Σ from k=1 to n of k, and of (2k − 1)?', 'n(n + 1)/2 and n² respectively.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.6', 'Sequences & Series', 'What is the commonest confusion in sequences questions?', 'Mixing up uₙ (a single term) with Sₙ (a running total). Read the question twice.', 16, 'alevel');

-- Topic 1.7 — Trigonometry
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'What is a radian, and how does it relate to degrees?', 'The angle subtended at the centre by an arc equal in length to the radius. π radians = 180°.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'Write down the arc length and sector area formulae.', 's = rθ and A = ½r²θ, both requiring θ in RADIANS. Using degrees gives an answer wrong by a factor of about 57.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'State the sine rule, the cosine rule and the triangle area formula.', 'a/sin A = b/sin B = c/sin C;  a² = b² + c² − 2bc cos A;  Area = ½ab sin C.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'When do you use the cosine rule rather than the sine rule?', 'With three sides, or two sides and the angle between them. Otherwise use the sine rule.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'What is the ambiguous case of the sine rule?', 'Given two sides and a non-included angle, sin θ = k has two solutions in 0° to 180°: θ and 180° − θ. Both must be checked.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'Give the exact values of sin, cos and tan at 30°, 45° and 60°.', 'sin: ½, √2/2, √3/2.  cos: √3/2, √2/2, ½.  tan: 1/√3, 1, √3.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'How do you find the second solution of sin x = k, cos x = k and tan x = k?', 'For sin: π − x. For cos: 2π − x. For tan: x + π.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'How do you solve an equation such as sin 2x = k over 0° ≤ x < 360°?', 'Widen the range FIRST: 2x runs over 0° to 720°. Solve there, then halve every answer. Halving first loses half the solutions.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'Define sec, cosec and cot.', 'sec θ = 1/cos θ;  cosec θ = 1/sin θ;  cot θ = 1/tan θ. Look at the third letter: se-c goes with c-os.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'State the two identities derived from sin²θ + cos²θ = 1.', '1 + tan²θ = sec²θ (divide by cos²θ);  1 + cot²θ = cosec²θ (divide by sin²θ).', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'Write down the compound angle formulae for sin(A ± B) and cos(A ± B).', 'sin(A ± B) = sin A cos B ± cos A sin B;  cos(A ± B) = cos A cos B ∓ sin A sin B — note the sign flip.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'Write down the three forms of cos 2θ.', 'cos²θ − sin²θ;  2cos²θ − 1;  1 − 2sin²θ. Choose the form matching the other function in the equation.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'What are sin 2θ and tan 2θ?', 'sin 2θ = 2 sin θ cos θ;  tan 2θ = 2tan θ/(1 − tan²θ).', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'How do you write a sin x + b cos x as a single trigonometric function?', 'As R sin(x + α) with R = √(a² + b²) and tan α = b/a. The expression then ranges between −R and R.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'State the small angle approximations.', 'For small θ in RADIANS: sin θ ≈ θ, tan θ ≈ θ, cos θ ≈ 1 − θ²/2. Also (sin θ)/θ → 1 as θ → 0.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.7', 'Trigonometry', 'What goes wrong if you divide a trigonometric equation by cos x?', 'You lose every solution where cos x = 0. Factorise instead of dividing, and check those cases separately.', 16, 'alevel');

-- Topic 1.8 — Exponentials & Logarithms
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'What is the relationship between aˣ and log_a x?', 'They are inverse functions: x = a^y is equivalent to y = log_a x. Their graphs are reflections in y = x.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'State the three laws of logarithms.', 'log(xy) = log x + log y;  log(x/y) = log x − log y;  log(xᵏ) = k log x.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'Is there a law for log(x + y)?', 'No. The addition law applies to a PRODUCT inside the logarithm, not a sum. log(x + y) ≠ log x + log y.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'What are log_a a and log_a 1?', 'log_a a = 1 and log_a 1 = 0.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'State the change of base formula.', 'log_a b = log b ÷ log a, for logarithms in any common base.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'How do you solve an equation such as 3ˣ = 20?', 'Take logarithms of both sides, then use the power law to bring x down: x = log 20 ÷ log 3 ≈ 2.727.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'What must you check after solving a logarithmic equation?', 'That each solution keeps every logarithm''s argument positive. Reject any root that makes an argument zero or negative.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'What is special about e?', 'It is the base for which the gradient of y = eˣ equals eˣ itself. More generally the gradient of e^(kx) is k e^(kx).', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'Why does the exponential model suit so many situations?', 'Because the derivative of e^(kt) is proportional to the function itself — exactly the condition ''rate of change proportional to current size''.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'What is ln x, and what are ln e and e^(ln x)?', 'ln x is log to base e, the inverse of eˣ. ln e = 1, and e^(ln x) = x for x > 0.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'How do you reduce y = axⁿ to linear form?', 'Take logs: log y = log a + n log x. Plot log y against log x — gradient n, intercept log a.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'How do you reduce y = abˣ to linear form?', 'Take logs: log y = log a + x log b. Plot log y against PLAIN x — gradient log b, intercept log a.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'How do you tell a power law from an exponential law using graphs?', 'A power law gives a straight line on log–log axes; an exponential law gives one with log y against plain x. The difference is whether the horizontal axis carries a logarithm.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'Write down the exponential growth and decay models.', 'N = N₀e^(kt) for growth and N = N₀e^(−kt) for decay, with k > 0 and N₀ the value at t = 0.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'How do you find the decay constant from a half-life T?', 'Set e^(−kT) = ½, so kT = ln 2 and k = (ln 2)/T.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.8', 'Exponentials & Logarithms', 'Give two criticisms of an exponential population growth model.', 'It predicts unbounded growth, ignoring finite resources; and it assumes k stays constant, though it may drift with conditions. A logistic model adds a carrying capacity.', 16, 'alevel');

-- Topic 1.9 — Differentiation
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'Write down the definition of the derivative as a limit.', 'f′(x) = limit as h → 0 of (f(x + h) − f(x))/h — the gradient of a chord becoming the gradient of the tangent.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'Why must you cancel the h before letting h → 0?', 'Substituting h = 0 first gives 0/0, which is undefined. Cancelling is the whole point of the method.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'What are the derivatives of xⁿ, eˣ and ln x?', 'nxⁿ⁻¹;  eˣ;  1/x.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'What are the derivatives of sin x, cos x and tan x?', 'cos x;  −sin x;  sec²x. These hold only when x is in RADIANS.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'Why do the trigonometric derivatives require radians?', 'They follow from the limit (sin h)/h → 1, which is true only in radians. In degrees an extra constant factor appears.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'State the chain rule.', 'The derivative of f(g(x)) is f′(g(x)) × g′(x) — the outer derivative times the inner derivative.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'State the product rule.', 'The derivative of uv is u′v + uv′.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'State the quotient rule.', 'The derivative of u/v is (u′v − uv′)/v². Note the minus, and that the order matters — reversing it flips every sign.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'How do you differentiate implicitly?', 'Differentiate both sides with respect to x, applying the chain rule to every y term so each contributes a factor dy/dx, then collect and solve.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'Why does a dy/dx appear when differentiating a y term?', 'Because y is itself a function of x, so the chain rule applies: differentiating f(y) with respect to x gives f′(y) × dy/dx.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'How do you find dy/dx and d²y/dx² for a parametric curve?', 'dy/dx = (dy/dt) ÷ (dx/dt). For the second derivative, differentiate dy/dx with respect to t and then divide by dx/dt — you cannot simply differentiate twice by t.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'How do you find the gradient of a tangent and of a normal?', 'The tangent gradient is dy/dx at that point; the normal gradient is −1 divided by that value.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'How do you classify a stationary point using the second derivative?', 'Positive means minimum, negative means maximum, zero is inconclusive and requires checking the gradient either side.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'Does d²y/dx² = 0 prove a point of inflection?', 'No. For y = x⁴ at the origin the second derivative is zero yet the point is a minimum. A genuine inflection needs the second derivative to CHANGE SIGN.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'How do connected rates of change work?', 'Link them by the chain rule, for example dV/dt = (dV/dr) × (dr/dt).', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.9', 'Differentiation', 'What are the two marks most often lost in an optimisation question?', 'Not justifying that the stationary point is the required maximum or minimum, and not answering the quantity actually asked for.', 16, 'alevel');

-- Topic 1.10 — Integration
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'What is the integral of xⁿ, and when does it fail?', 'x^(n+1)/(n + 1) + c, failing for n = −1 where the denominator would be zero. Then the integral of 1/x is ln|x| + c.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'Why is the modulus written in ln|x|?', 'So the result is valid for negative x too, since the logarithm of a negative number is undefined.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'Why does an indefinite integral need + c but a definite one does not?', 'Differentiating a constant gives zero, so it cannot be recovered. In a definite integral the constant appears in both F(b) and F(a) and cancels.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'State the Fundamental Theorem of Calculus.', 'The definite integral from a to b of f equals F(b) − F(a), where F′ = f. It links area with the antiderivative and shows the two processes are inverse.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'What happens to a region below the x-axis in a definite integral?', 'It contributes a negative amount. If the curve crosses the axis within the limits, split there and add the magnitudes, or the parts will cancel.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'How do you find the area between two curves?', 'Integrate (upper − lower) between the intersections, so the integrand is non-negative and the area comes out positive.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'When is integration by substitution the right method?', 'When the integrand contains an inner function together with its derivative — for example x e^(x²), where u = x² gives du = 2x dx.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'What must you also change when substituting in a DEFINITE integral?', 'The limits, converting them to values of u — or substitute back to x before applying the original limits.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'State the standard result for f′(x)/f(x).', 'Its integral is ln|f(x)| + c. For example the integral of 2x/(x² + 1) is ln(x² + 1) + c.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'State the integration by parts formula.', 'The integral of u(dv/dx) equals uv minus the integral of v(du/dx) — the reverse of the product rule.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'How do you choose u when integrating by parts?', 'Choose u to be the factor that becomes SIMPLER when differentiated, and dv/dx to be one you can integrate.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'How do you integrate ln x?', 'Write it as 1 × ln x, take u = ln x and dv/dx = 1. This gives x ln x − x + c.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'How do you integrate eˣ sin x?', 'Apply parts twice; the original integral reappears, so treat it as an unknown and solve the resulting equation algebraically.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'Why are partial fractions useful in integration?', 'A fraction with a factorised denominator has no standard integral, but splitting it gives terms A/(x + a), each integrating to a logarithm.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'How do you integrate cos²x?', 'Use the double angle identity cos²x = ½(1 + cos 2x), giving x/2 + (sin 2x)/4 + c.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.10', 'Integration', 'What are the integrals of sin x, cos x and sec²x?', '−cos x + c;  sin x + c;  tan x + c. The minus on the sine integral is the one most often dropped.', 16, 'alevel');

-- Topic 1.11 — Differential Equations
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'What is the difference between a general and a particular solution?', 'A general solution contains an arbitrary constant and represents a family of curves; a particular solution uses an initial condition to fix that constant.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'How do you separate the variables?', 'If dy/dx = f(x)g(y), gather all the y terms with dy and all the x terms with dx, then integrate both sides.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Translate ''the rate of growth is proportional to the size'' into an equation.', 'dP/dt = kP. For decay it is dN/dt = −kN with k positive.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Translate ''the rate is proportional to the square of the population''.', 'dP/dt = kP².', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Write down Newton''s law of cooling.', 'dθ/dt = −k(θ − θ₀), where θ₀ is the temperature of the surroundings — the rate is proportional to the excess temperature.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'What is the solution of dP/dt = kP with P = P₀ at t = 0?', 'P = P₀e^(kt).', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Why is it useful to write the constant as ln A?', 'It turns an additive constant into a multiplicative one, so ln y = ln x + c becomes y = Ax instead of y = e^c × x.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Solve dy/dx = xy with y = 1 at x = 0.', 'Separate to (1/y)dy = x dx, integrate to ln y = x²/2 + c, apply the condition to get c = 0, so y = e^(x²/2).', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'What does dy/dt = k(A − y) describe?', 'A quantity rising towards a ceiling A, with the rate falling as the gap closes. The solution has the form y = A − Be^(−kt).', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'What is terminal velocity, and how is it found from dv/dt = g − kv?', 'The speed at which acceleration becomes zero, so g − kv = 0 and v = g/k. It is approached asymptotically, never reached exactly.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Why is the logistic model preferred to dP/dt = kP for a population?', 'It includes a carrying capacity, so growth slows as resources become limiting, rather than continuing without bound.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'What technique does the logistic equation dy/dt = ky(1 − y) require?', 'Partial fractions, since separating leaves 1/(y(1 − y)) = 1/y + 1/(1 − y).', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'How do you check a cooling solution is right?', 'Check the long-term behaviour. As t → ∞ the temperature must tend to the ambient value; any other limit means an algebraic error.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Where must the constant of integration be applied?', 'Include it when you integrate, then use the initial condition to find it. Applying the condition before integrating is a common error.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Give three criticisms of a differential equation model.', 'Unbounded growth ignoring resources; the constant k assumed fixed when it may drift; and a discrete population treated as continuous.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.11', 'Differential Equations', 'Why is extrapolating a fitted model far beyond the data unjustified?', 'The model was fitted only where its assumptions held. Outside that range conditions may change and the relationship may no longer apply.', 16, 'alevel');

-- Topic 1.12 — Numerical Methods
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'State the change of sign condition for locating a root.', 'If f is CONTINUOUS on [a, b] and f(a), f(b) have opposite signs, then f(x) = 0 has at least one root in (a, b).', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'Which part of the change of sign argument is most often omitted?', 'The statement that f is continuous on the interval. Without it the argument is invalid.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'Name two situations in which a change of sign method fails.', 'A repeated root, where the curve touches without crossing, e.g. (x − 2)²; and a vertical asymptote, e.g. 1/(x − 2), where the sign changes but there is no root.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'How do you show a root is 1.86 correct to 2 decimal places?', 'Show f changes sign between the rounding bounds 1.855 and 1.865, so every value in that interval rounds to 1.86.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'What is fixed point iteration?', 'Rearrange f(x) = 0 into x = g(x), choose a starting value, then apply x₍ₙ₊₁₎ = g(xₙ) repeatedly.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'When does a fixed point iteration converge?', 'When |g′(x)| < 1 near the root. If |g′(x)| > 1 it diverges, so different rearrangements of the same equation can behave differently.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'What is the difference between a staircase and a cobweb diagram?', 'Both are drawn between y = g(x) and y = x. A staircase occurs when g′(x) > 0; a cobweb, spiralling and alternating sides, when g′(x) < 0.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'State the Newton-Raphson formula and its geometric meaning.', 'x₍ₙ₊₁₎ = xₙ − f(xₙ)/f′(xₙ). Follow the tangent at the current point down to where it meets the x-axis.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'Why does Newton-Raphson converge faster than a simple iteration?', 'Near a simple root the error is roughly SQUARED at each step, so the number of correct digits approximately doubles.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'When does Newton-Raphson fail?', 'When f′(xₙ) = 0, since the tangent is horizontal and never meets the axis; and near a stationary point, where a nearly horizontal tangent throws the next estimate far away.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'State the trapezium rule.', 'With h = (b − a)/n, the integral is approximately (h/2)[y₀ + yₙ + 2(y₁ + … + y₍ₙ₋₁₎)] — first and last counted once, interior ordinates doubled.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'How many ordinates are needed for n strips?', 'n + 1, since adjacent strips share an ordinate.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'When does the trapezium rule give an over- or under-estimate?', 'Concave upwards: chords lie above the curve, so it is an OVERestimate. Concave downwards: chords lie below, so it is an UNDERestimate.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'How should you justify the direction of a trapezium error?', 'Refer to the concavity: ''the curve is concave upwards on this interval, so each chord lies above it and the estimate is too large''.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'What happens to the trapezium rule error if you halve the strip width?', 'It reduces by a factor of roughly 4, since the error is approximately proportional to the square of the width.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.12', 'Numerical Methods', 'How can rectangles give bounds on an integral?', 'For a monotonic function, left-hand and right-hand rectangle sums lie on either side of the true value, bracketing it.', 16, 'alevel');

-- Topic 1.13 — Vectors
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'What is the difference between a scalar and a vector?', 'A scalar has magnitude only (mass, time, speed); a vector has magnitude and direction (displacement, velocity, force).', 1, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'Is the scalar (dot) product part of H640?', 'No. Neither the dot product nor the vector equation of a line is in this specification. Angles are handled by trigonometry instead.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How are vectors written in print and by hand?', 'Bold in print, underlined by hand. The magnitude is written |a| or a in italic.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How do you find the magnitude of a vector in 2D and 3D?', '√(a₁² + a₂²) in two dimensions;  √(a₁² + a₂² + a₃²) in three.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How do you find a unit vector in the direction of a?', 'Divide a by its magnitude: â = a/|a|. For 6i − 8j, the magnitude is 10 so the unit vector is 0.6i − 0.8j.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'When are two non-zero vectors parallel?', 'When one is a scalar multiple of the other. A negative scalar reverses the direction but they remain parallel.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'Write down the vector AB in terms of position vectors.', 'AB = b − a — destination minus start. Reversing it gives the same magnitude in the opposite direction.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How do you find the distance between two points from their position vectors?', 'It is |b − a|, the magnitude of the vector joining them.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'What is the position vector of the midpoint of AB?', '(a + b)/2. More generally the point dividing AB in the ratio m : n is (na + mb)/(m + n).', 9, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How do you convert between component and magnitude-direction form?', 'a₁ = r cos θ and a₂ = r sin θ; conversely r = √(a₁² + a₂²) and tan θ = a₂/a₁.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'Why is arctan alone not enough to give a direction?', 'It returns angles only in the first and fourth quadrants. Use the signs of the components to identify the quadrant and adjust — (−3, −4) gives 233.1°, not 53.1°.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How do you prove three points collinear using vectors?', 'Show one joining vector is a scalar multiple of another, AND state that they share a common point. Parallel alone is not enough.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'What does the sum of force vectors represent?', 'The resultant force. The specification explicitly includes using vectors for problems involving forces.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'What is the condition for a set of forces to be in equilibrium?', 'Their vector sum is the zero vector, so drawn head to tail they form a closed figure.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'Is |a + b| equal to |a| + |b|?', 'Not in general. It lies between ||a| − |b|| and |a| + |b|, reaching the upper value only when the vectors point the same way.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '1.13', 'Vectors', 'How does 3D vector work extend the 2D case?', 'A third component along k is added. Magnitudes involve the sum of three squares, and all the 2D techniques carry over.', 16, 'alevel');

-- Topic 2.1 — Sampling
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'What is the difference between a population and a sample?', 'A population is the entire group being studied; a sample is a subset used to draw conclusions about it.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'What is the difference between a parameter and a statistic?', 'A parameter describes the POPULATION; a statistic is calculated from a SAMPLE and used to estimate it.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Define simple random sampling.', 'Every possible sample of the required size has the same probability of being selected. It requires a complete sampling frame.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'What is a sampling frame?', 'A list of all members of the population, from which the sample is drawn. An incomplete frame means some members can never be selected.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Describe systematic sampling and its main risk.', 'Select every kth member of an ordered list. It fails if the list has a repeating pattern matching the sampling interval.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Describe stratified sampling.', 'Divide the population into strata and sample each in proportion to its size, selecting AT RANDOM within each stratum.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'How does quota sampling differ from stratified sampling?', 'Both fix the number per category, but quota sampling does not select at random within each — the interviewer chooses whoever is convenient.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Describe cluster sampling and when it is used.', 'Divide the population into groups and survey whole groups chosen at random. Useful when the population is spread over a wide area and travel costs matter.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Why are self-selected samples usually biased?', 'People with strong opinions are far more likely to volunteer, so such samples over-represent strong views.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'What is opportunity sampling and its weakness?', 'Selecting whoever is conveniently available. Quick and needs no frame, but unlikely to be representative.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Define bias in sampling.', 'A method is biased if it systematically favours certain outcomes, so estimates from it are systematically wrong.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Name three common sources of bias.', 'An incomplete sampling frame; non-response, where non-responders differ from responders; and the time or place of sampling.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Does increasing the sample size remove bias?', 'No. It reduces VARIABILITY — the standard deviation of the sample mean is σ/√n — but a badly designed large sample is still biased.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'By what factor does quadrupling the sample size reduce the standard deviation of the sample mean?', 'By a factor of 2, since the standard deviation is σ/√n and √4 = 2.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'Why do two random samples from the same population give different means?', 'Sampling variability. Different samples contain different individuals, so neither result is an error.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '2.1', 'Sampling', 'What is the purpose of the large data set, and what is available in the exam?', 'To make its contexts familiar through classroom use. No printout is provided in the exam, though selected data or summary statistics may be given. From September 2026 a single LDS is used.', 16, 'alevel');

-- Topic 2.2 — Data Presentation & Interpretation
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'Name the four types of data.', 'Categorical (labels), discrete (separate numerical values), continuous (any value in a range) and ranked (ordered positions).', 1, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'In a histogram, what represents frequency?', 'The AREA of each bar. The vertical axis is frequency density, which is frequency divided by class width.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'How does a frequency chart differ from a histogram?', 'A frequency chart has equal-width bars with FREQUENCY on the vertical axis; a histogram may have unequal widths and uses frequency density.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'How are comparative pie charts scaled?', 'The AREA is proportional to frequency. Since area ∝ r², the radii are proportional to the square roots of the frequencies.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What does a box-and-whisker diagram show?', 'The median, the lower and upper quartiles, and the extreme values. The box spans the interquartile range.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'Name the four measures of central tendency in the specification.', 'Mean, median, mode and midrange — the midrange being the average of the smallest and largest values.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'When is the median preferred to the mean?', 'For skewed data or when outliers are present, since the median depends only on position in the order and resists extremes.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'When is a weighted mean appropriate?', 'When combining groups of different sizes, weighting each group mean by the size of that group.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What is the formula for the sample variance?', 's² = Sxx/(n − 1). Dividing by n − 1, not n, makes it an unbiased estimator of the population variance.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What are the units of variance and standard deviation?', 'Standard deviation carries the same units as the data; variance carries their square.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What happens to the mean and standard deviation if a constant is added to every value?', 'The mean increases by that constant; the standard deviation is UNCHANGED, since a translation does not alter the spread.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What happens if every value is multiplied by k?', 'Both the mean and the standard deviation are multiplied by |k|.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'State the two accepted criteria for an outlier.', 'At least 2 standard deviations from the mean, OR at least 1.5 × IQR beyond the nearer quartile.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What does data cleaning involve?', 'Dealing with missing data, correcting or removing clear errors, and deciding how to treat outliers — always with the reason stated.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'Does correlation imply causation?', 'No. A third variable may drive both, as with ice cream sales and drownings, which are both driven by hot weather.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '2.2', 'Data Presentation & Interpretation', 'What does H640 require and exclude regarding regression and correlation?', 'You INTERPRET a given regression line or correlation coefficient, including judging extrapolation. CALCULATING either is excluded, and coefficient names are not required.', 16, 'alevel');

-- Topic 2.3 — Probability
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'How is probability calculated for equally likely outcomes?', 'Favourable outcomes divided by total outcomes. Every probability lies between 0 and 1 inclusive.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'What is a complementary event?', 'A′ is the event that A does not occur, and P(A′) = 1 − P(A). It is the fastest route for ''at least one'' questions.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'What is the expected frequency of an event in n trials?', 'nP(A). In 200 trials with probability 0.15, the expected frequency is 30.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'What do A ∩ B and A ∪ B mean?', 'A ∩ B means both occur; A ∪ B means A or B or both occur.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'Define mutually exclusive events and give the addition rule.', 'They cannot both occur, so P(A ∩ B) = 0 and P(A ∪ B) = P(A) + P(B).', 5, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'Define independent events and give the multiplication rule.', 'The occurrence of one does not affect the probability of the other, so P(A ∩ B) = P(A)P(B).', 6, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'Can mutually exclusive events with non-zero probabilities be independent?', 'No. If B occurred then A definitely did not, which is a strong dependence. The two ideas are generally incompatible.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'State the general addition rule.', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B). The subtraction avoids double-counting the overlap.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'State the conditional probability formula.', 'P(A | B) = P(A ∩ B)/P(B). Rearranged, it gives the multiplication rule that a tree diagram encodes.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'What is the test for independence using conditional probability?', 'A and B are independent if and only if P(A | B) = P(A) — knowing B tells you nothing about A.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'How does drawing without replacement differ from with replacement?', 'Without replacement the composition changes, so the draws are dependent and conditional probabilities are needed. With replacement they are independent.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'How do you use a tree diagram?', 'Multiply along a path to find the probability of that sequence; add the probabilities of all paths giving the required outcome. Branches from any node sum to 1.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'How many events can a Venn diagram show in this specification?', 'Up to three.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'What is reverse conditional probability?', 'Finding P(A | B) when P(B | A) is given. The two are NOT equal — build a tree or table, find P(A ∩ B) and P(B), then divide.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'Why can a 95% accurate test give mostly false positives?', 'If the condition is rare, the small false-positive rate applies to the large healthy majority. With 1% prevalence, P(condition | positive) ≈ 0.16.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '2.3', 'Probability', 'What does P(A|B) = 0 tell you about mutually exclusive events?', 'That if B has occurred, A cannot have occurred — the conditional probability is zero.', 16, 'alevel');

-- Topic 2.4 — Probability Distributions
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What is a discrete random variable?', 'A variable taking separate values each with a given probability. Capital X denotes the variable; lower-case x or r a particular value.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What condition must a discrete probability distribution satisfy?', 'All probabilities non-negative and summing to 1.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What is a discrete uniform distribution?', 'One in which all outcomes are equally likely, such as the score on a fair die.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'State the four conditions for a binomial model.', 'A fixed number of trials; exactly two outcomes per trial; the same probability of success each time; and independent trials.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What does X ~ B(n, p) mean?', 'X has the binomial distribution with n trials and probability p of success. The symbol ~ is read ''has the distribution''.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'Write down the binomial probability formula.', 'P(X = r) = ⁿCᵣ pʳ q^(n−r), where q = 1 − p.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What is the mean of a binomial distribution?', 'np. For X ~ B(20, 0.3) the mean is 6.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'How do you find P(X ≥ 1) for a binomial?', 'Use the complement: 1 − P(X = 0) = 1 − qⁿ. Far quicker than summing the terms.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'When does a binomial model fail, and when is it still acceptable?', 'It fails for sampling without replacement, since p changes. It remains a good approximation when the population is very large relative to the sample.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What does X ~ N(μ, σ²) mean, and what is the commonest error?', 'X is Normally distributed with mean μ and VARIANCE σ². Reading the second parameter as the standard deviation is the standard error — N(100, 25) has σ = 5.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'Name four properties of the Normal curve.', 'Symmetric about the mean; mean = median = mode; total area 1 with area representing probability; points of inflection at μ ± σ.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'Roughly what proportion lies within one and two standard deviations of the mean?', 'About 68% within one, and about 95% within two.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'How do you standardise a Normal variable?', 'Z = (X − μ)/σ, giving the standard Normal distribution N(0, 1).', 13, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'If X ~ N(μ, σ²) and Y = aX + b, what is the distribution of Y?', 'Also Normal, with mean aμ + b and variance a²σ². The multiplier is SQUARED in the variance; b affects the mean only.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'What is a continuity correction and why is it needed?', 'A half-unit adjustment when a continuous Normal distribution models discrete data. P(X ≥ 12) becomes P(X > 11.5); P(X ≤ 10) becomes P(X < 10.5).', 15, 'alevel'),
  ('Mathematics', 'OCR B', '2.4', 'Probability Distributions', 'How do you judge whether a Normal approximation to a binomial is reasonable?', 'From the SHAPE — a roughly symmetric, bell-shaped histogram. Knowing formal conditions for the approximation is excluded from this specification.', 16, 'alevel');

-- Topic 2.5 — Statistical Hypothesis Testing
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What are the null and alternative hypotheses?', 'H₀ is the default assumption being tested, always an equality; H₁ is what is concluded if H₀ is rejected.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'Must hypotheses refer to the sample or the population?', 'The POPULATION parameter — p or μ. Writing H₀: x̄ = 50 is wrong; it must be H₀: μ = 50.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What is the significance level?', 'The probability of incorrectly rejecting a TRUE null hypothesis. It sets the size of the critical region.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'Define critical region, acceptance region and critical value.', 'The critical (rejection) region contains test statistic values leading to rejection; the acceptance region those that do not; the critical value is the boundary.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What is a p-value and how is it used?', 'The probability of a result at least as extreme as the one observed, assuming H₀. Reject H₀ if it is below the significance level.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'When is a test one-tailed and when two-tailed?', 'One-tailed when H₁ specifies a DIRECTION (''biased towards heads''); two-tailed when it does not (''biased'', ''has changed'').', 6, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'For a two-tailed test at the 5% level, what probability does each tail carry?', '0.025 — the level is split equally between the tails.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'Why should you never write ''accept H₀''?', 'Failing to reject is not proof that H₀ is true; it means only that the evidence was not strong enough. Write ''insufficient evidence to reject H₀''.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'Does rejecting H₀ prove the alternative?', 'No. It gives EVIDENCE, never proof — an unlikely result can still occur by chance.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What form does H₀ take in a binomial test, and what is the test statistic?', 'H₀: p = a particular value. The test statistic is the observed number of successes.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'Why is the rejection probability for a binomial test usually below the significance level?', 'Because the binomial distribution is discrete, so probabilities accumulate in jumps and the region cannot usually match the level exactly.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What is the distribution of the sample mean from N(μ, σ²)?', 'Normal with mean μ and variance σ²/n, so its standard deviation is σ/√n.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What does the Central Limit Theorem say?', 'For a large sample the sample mean is approximately Normal even when the population is not — which is what allows a Normal test on a mean.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'When is a Normal test on a mean valid?', 'When the population variance is known, OR it is unknown but the sample is large. A small sample with unknown variance satisfies neither.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'Write down the test statistic for a Normal test on a mean.', 'z = (x̄ − μ)/(σ/√n). Dividing by σ instead of σ/√n is the standard error and makes real effects harder to detect.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '2.5', 'Statistical Hypothesis Testing', 'What must every hypothesis test conclusion include?', 'A statement in the CONTEXT of the original problem, not merely ''reject H₀''.', 16, 'alevel');

-- Topic 3.1 — Models & Quantities
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What does modelling an object as a particle mean?', 'It has mass but negligible size, so all forces act at a single point and rotation is ignored.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What does ''light'' mean, and what does it let you deduce?', 'Negligible mass. For a string it means the tension is the same throughout its length.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What does ''smooth'' mean for a surface or a pulley?', 'No friction. For a pulley it means the tension is unchanged across it, so it is equal on both sides.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What does ''inextensible'' mean, and why does it matter?', 'The string cannot stretch, so connected particles have accelerations of EQUAL MAGNITUDE — which is what lets you use one value of a.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What does ''uniform'' mean, and how is it used?', 'Mass is evenly distributed, so the weight acts at the geometric centre — the midpoint for a rod.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What does ''rigid'' mean?', 'The body does not bend or deform under load, so its shape is fixed.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'Name the three SI base quantities used in mechanics and their units.', 'Length in metres (m), time in seconds (s), mass in kilograms (kg).', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'Give the units of velocity, acceleration, force and moment.', 'm s⁻¹;  m s⁻²;  newton (N);  newton metre (N m).', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'Express the newton in base units.', '1 N = 1 kg m s⁻², from F = ma.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'Why is a moment quoted in N m rather than joules?', 'Although the base units coincide, the units are kept distinct to distinguish a turning effect from an energy.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What is the difference between mass and weight?', 'Mass is a scalar in kilograms and is a property of the object; weight is the force of gravity on it, W = mg, in newtons, and depends on the local value of g.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What value of g is used in examinations for this specification?', '9.8 unless otherwise specified. Using 10 introduces a systematic error of about 2%.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'Is g a universal constant?', 'No — it depends on location in the universe. On Earth it is modelled as constant. The inverse square law for gravitation is EXCLUDED from H640.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'What happens to mass and weight on the Moon?', 'The mass is unchanged; the weight decreases, because g is smaller there.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'Convert 36 km h⁻¹ to m s⁻¹.', '36000 m ÷ 3600 s = 10 m s⁻¹. Conversely 5 m s⁻¹ is 18 km h⁻¹.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.1', 'Models & Quantities', 'When is the particle model inappropriate?', 'When size or rotation matters — a ladder against a wall, a spinning ball, or a cable whose length is the point of the problem.', 16, 'alevel');

-- Topic 3.2 — Kinematics in 1 Dimension
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'What is the difference between distance travelled and displacement?', 'Distance travelled is the total path length, a scalar; displacement is the net change in position, a vector.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'What is the difference between speed and velocity?', 'Speed is the magnitude of velocity, so it is a scalar and never negative; velocity carries direction.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'Give the formulae for average speed and average velocity.', 'Average speed = distance travelled ÷ time; average velocity = overall displacement ÷ time. A there-and-back journey has zero average velocity.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'What do the gradient and area of a velocity-time graph give?', 'Gradient gives acceleration; area gives displacement.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'What does the gradient of a displacement-time graph give?', 'Velocity.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'What does area below the time axis on a velocity-time graph mean?', 'Displacement in the negative direction. For DISTANCE travelled, add its magnitude rather than subtracting.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'Write down the five constant acceleration formulae.', 'v = u + at;  s = ut + ½at²;  s = vt − ½at²;  s = ½(u + v)t;  v² = u² + 2as.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'When may the suvat formulae be used?', 'Only when the acceleration is CONSTANT. If acceleration varies with time, calculus is required.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'How do you choose which suvat formula to use?', 'Each omits one of the five quantities. Pick the one omitting the quantity you neither know nor want.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'A particle starts from rest and accelerates at 2 m s⁻² for 5 s. Find v and s.', 'v = 10 m s⁻¹ and s = 25 m.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'Why must you fix a positive direction in a vertical motion problem?', 'Displacement, velocity and acceleration are all signed. If upwards is positive then a = −9.8 THROUGHOUT — including at the top and on the way down.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'At the top of a vertical throw, what is zero — the velocity or the acceleration?', 'The velocity. The acceleration is still g downwards, which is why the body does not stay there.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'State the calculus relationships for kinematics.', 'v = ds/dt and a = dv/dt; conversely v = ∫a dt and s = ∫v dt, each with a constant fixed by initial conditions.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'How do you find distance travelled when the velocity changes sign?', 'Find the times where v = 0, split the interval there, and add the MAGNITUDES of the separate displacements.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'Why does integrating velocity straight through give displacement, not distance?', 'Negative velocity contributes negatively, so the parts partially cancel, giving the net change rather than the total path length.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.2', 'Kinematics in 1 Dimension', 'What is relative velocity in one dimension?', 'The velocity of A relative to B is v_A − v_B. Two cars at 30 and 20 m s⁻¹ close the gap at only 10 m s⁻¹.', 16, 'alevel');

-- Topic 3.3 — Kinematics in 2 Dimensions
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'How are velocity and acceleration obtained from a position vector?', 'By differentiating with respect to t, component by component. Integrating reverses the process.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'Why can vector calculus be done component by component?', 'The i and j directions are fixed and independent of time, so each component is an independent function of t.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'What is the speed of a particle with velocity v?', '|v|, the magnitude — a scalar. Quoting a speed as a vector loses the mark.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'If r = 3t i + t² j, what are v and a?', 'v = 3i + 2t j and a = 2j. At t = 2 the speed is |3i + 4j| = 5.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'Why is a VECTOR constant of integration needed?', 'Each component has its own arbitrary constant; together they form a constant vector fixed by the initial conditions in both directions.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'Write down the vector forms of the suvat formulae.', 'v = u + at;  s = ut + ½at²;  s = vt − ½at²;  s = ½(u + v)t — all valid for constant acceleration.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'Why is the change in velocity always parallel to the acceleration?', 'From v = u + at, the change is at, a scalar multiple of a.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'What is the path of a particle with zero acceleration?', 'A straight line travelled at constant velocity.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'How do you find relative position and relative velocity?', 'Position of B relative to A is r_B − r_A; velocity of A relative to B is v_A − v_B.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'What is the condition for two particles to collide?', 'Their position vectors must be EQUAL AT THE SAME INSTANT — both components must give the same value of t.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'Why is checking one component not enough for a collision?', 'If the components give different times, the paths cross but the particles are never there together.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'How do you find when two particles are closest?', 'Write the relative position vector as a function of t, then minimise its magnitude.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'How do you find the Cartesian equation of a path?', 'Write the components as x and y in terms of t and eliminate t, rearranging the simpler equation first.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'For r = 3t i + t² j, what is the Cartesian equation?', 'x = 3t gives t = x/3, so y = x²/9 — a parabola.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'What is the difference between distance from the origin and distance travelled?', 'Distance from the origin is |r|; distance travelled is the length of the path, generally greater.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.3', 'Kinematics in 2 Dimensions', 'What extra unit vector appears in three dimensions?', 'k, along the z-axis. Magnitudes then involve the sum of three squares.', 16, 'alevel');

-- Topic 3.4 — Projectiles
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'State the four standard projectile modelling assumptions.', 'No air resistance; the projectile is a particle; gravity always acts in the same direction; gravity is constant in magnitude.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'What is the central idea that makes projectile problems work?', 'Horizontal and vertical motion are INDEPENDENT. Horizontally there is no acceleration; vertically the acceleration is g downwards. Time links them.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Give the initial velocity components for launch at speed u and angle θ.', 'Horizontal u cos θ, vertical u sin θ.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Give the displacement components at time t.', 'Horizontal u cos θ × t;  vertical u sin θ × t − ½gt².', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Write down the time of flight, maximum height and range on level ground.', 'T = 2u sin θ/g;  H = u²sin²θ/(2g);  R = u² sin 2θ/g.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'At what angle is the range greatest, and why?', '45°, because R depends on sin 2θ, which is greatest when 2θ = 90°. Maximum range is u²/g.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Why do two angles give the same range?', 'Because sin 2θ = sin(180° − 2θ), so θ and 90° − θ give equal ranges. The partner of 25° is 65°.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'What is the velocity at the highest point?', 'Horizontal, of magnitude u cos θ — NOT zero. Only the vertical component vanishes.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Why do a horizontally thrown ball and a dropped ball land together?', 'Both have zero initial vertical velocity, and horizontal motion does not affect the vertical fall.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Derive the Cartesian equation of a projectile path.', 'From x = u cos θ t, t = x/(u cos θ). Substituting gives y = x tan θ − gx²/(2u²cos²θ) — a downward parabola.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'How do you check a projectile clears an obstacle?', 'Substitute the obstacle''s horizontal distance into the path equation and confirm y exceeds its height. Checking the range or maximum height alone is NOT sufficient.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'How do you handle projection from a height h above the landing point?', 'Take upwards as positive; the vertical displacement on landing is −h. Solve −h = u sin θ t − ½gt² and take the positive root.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'Why does a projectile pass a given height twice?', 'The vertical displacement equation is a quadratic in t, with two roots — once rising and once falling.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'What is the speed of a projectile at time t?', '√((u cos θ)² + (u sin θ − gt)²), combining the constant horizontal and changing vertical components.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'For level ground, how does the landing speed compare with the launch speed?', 'They are equal, and the landing angle below the horizontal equals the projection angle above it.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.4', 'Projectiles', 'What would introducing air resistance do?', 'Reduce both the range and the maximum height, and destroy the symmetry of the path. Calculations with air resistance are EXCLUDED from H640.', 16, 'alevel');

-- Topic 3.5 — Forces
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Name four common forces and their directions.', 'Weight acts vertically downwards; normal reaction perpendicular to the surface; tension along a string pulling inwards; friction along the surface opposing motion.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'What is the difference between tension and thrust?', 'Tension pulls the ends together; thrust pushes them apart. A string can only pull; a rod can do either.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Is the normal reaction always equal to the weight?', 'No. It depends on the other forces: pressing down increases it, pulling upwards at an angle reduces it, and on a slope it is mg cos θ.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Give the components of weight on a plane inclined at θ.', 'mg sin θ along the plane and mg cos θ perpendicular to it. Check with θ = 0: sin 0 = 0, so the along-plane component vanishes as it should.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Why resolve parallel and perpendicular to an inclined plane?', 'It puts the normal reaction on one axis and the friction on the other, so each equation contains fewer unknowns.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'State the condition for a particle to be in equilibrium.', 'The resultant of the forces is zero. Equivalently, resolving in ANY direction gives zero.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Does equilibrium mean at rest?', 'No. Constant velocity also gives zero acceleration and therefore zero resultant force.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'What shape do forces in equilibrium form when drawn head to tail?', 'A closed polygon — a closed triangle for three forces.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'State the friction inequality.', 'F ≤ μR. Friction takes whatever value prevents motion, up to a maximum of μR.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'When can you use F = μR?', 'Only when the body is moving or ON THE POINT of moving (limiting friction). Otherwise friction simply equals the applied force.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'What are the units of the coefficient of friction?', 'None — it is a ratio of two forces, so the units cancel.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'State the condition for a block to remain at rest on a rough slope.', 'tan θ ≤ μ. Note it is independent of the mass, which cancels.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Which way does friction act on a block in limiting equilibrium on a slope?', 'UP the plane, opposing the tendency to slide down.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'What is the angle of friction?', 'λ, satisfying tan λ = μ.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'Why is pulling a case easier than pushing it down at an angle?', 'Pulling upwards at an angle reduces the normal reaction and hence the maximum friction; pushing downwards increases both.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.5', 'Forces', 'What is the acceleration of a block released on a SMOOTH plane inclined at θ?', 'a = g sin θ, since there is no friction. At 30° with g = 9.8 this is 4.9 m s⁻².', 16, 'alevel');

-- Topic 3.6 — Newton's Laws of Motion
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'State Newton''s first law.', 'An object continues at rest or in uniform motion in a straight line unless acted on by a resultant force.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'State Newton''s second law.', 'A resultant force F on an object of fixed mass m gives acceleration a with F = ma.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'State Newton''s third law.', 'When one object exerts a force on another, there is a reaction equal in magnitude and opposite in direction.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'What must the F in F = ma be?', 'The RESULTANT of all forces acting. Using a single force and ignoring friction or weight is the standard structural error.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'How do you write down an equation of motion?', 'Draw a force diagram, choose a positive direction (usually that of the acceleration), resolve in that direction and set the total equal to ma.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'How is equilibrium a special case of the second law?', 'Setting a = 0 gives a resultant force of zero — which also recovers the first law.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'Why is the second law a vector equation?', 'Both force and acceleration are vectors, so it holds independently in each direction and may be applied component by component.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'Are variable mass problems in this specification?', 'No — they are excluded, so m may always be treated as constant.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'For a person in a lift accelerating upwards at a, what is the normal reaction?', 'R − mg = ma, so R = m(g + a) — greater than the weight, which is why they feel heavier.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'A lift descends and decelerates. Is the reaction more or less than the weight?', 'More. Decelerating while descending means the acceleration is directed UPWARDS. Read the acceleration, not the direction of travel.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'Why are a book''s weight and the table''s reaction NOT a third-law pair?', 'Both act on the BOOK. A third-law pair acts on two different bodies; the true partner of the weight is the book''s pull on the Earth.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'What is the simple test for a third-law pair?', 'If the two forces act on the same object, they cannot be a pair.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'What two assumptions make a pulley problem solvable?', 'A light inextensible string gives equal tension throughout and equal magnitudes of acceleration; a smooth pulley leaves the tension unchanged across it.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'When do you use the whole system, and when individual particles?', 'Whole system for the ACCELERATION, since internal tensions cancel. Individual particles for the TENSION or coupling force, which then appears explicitly.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'For masses m₁ > m₂ over a smooth pulley, what is the acceleration?', 'a = (m₁ − m₂)g/(m₁ + m₂). For 5 kg and 3 kg with g = 9.8 this is 2.45 m s⁻², and T = 36.75 N.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.6', 'Newton''s Laws of Motion', 'How can you check a pulley tension is plausible?', 'It must lie BETWEEN the two weights — less than the heavier, more than the lighter.', 16, 'alevel');

-- Topic 3.7 — Rigid Bodies
INSERT INTO flashcards (subject, exam_board, topic_id, topic_name, front, back, card_order, level) VALUES
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Why does the point of application matter for a rigid body but not a particle?', 'A particle has no size, so forces only translate it. A rigid body has extent, so forces can also produce a turning effect.', 1, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Define the moment of a force and give its units.', 'Moment = force × perpendicular distance from the point. Units are newton metres, N m.', 2, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'What is the moment of a force acting through the pivot?', 'Zero, since the perpendicular distance is zero. This is why choosing the pivot cleverly removes unknowns.', 3, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'State the two conditions for a rigid body to be in equilibrium.', 'The resultant force is zero, AND the sum of the moments about any one point is zero.', 4, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Why is the force condition alone insufficient?', 'Two equal and opposite forces applied at different points give no net force but do produce a turning effect.', 5, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'About which point may moments be taken?', 'Any point, once the body is in equilibrium — so choose the most convenient.', 6, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'What is the standard pivot-choosing technique?', 'Take moments about a point through which an UNKNOWN force acts, so that force has zero moment and drops out of the equation.', 7, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Where does the weight of a body act?', 'Through its centre of mass — the midpoint for a uniform rod, the intersection of the diagonals for a uniform rectangular lamina.', 8, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Where is the centre of mass of a NON-uniform rod?', 'Not at the midpoint. It must be given, found by symmetry, or found by taking moments.', 9, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'A non-uniform rod AB, 4 m long, weight 50 N, rests on supports at A and B with R_A = 20 N. Where is the centre of mass?', 'R_B = 30 N. Moments about A: 50x = 30 × 4 = 120, so x = 2.4 m from A.', 10, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'How can you sanity-check the position of a centre of mass?', 'It lies closer to the support with the LARGER reaction.', 11, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'What is the condition for a body to be on the point of tipping?', 'The reaction at the OTHER support falls to zero, so all the weight is carried by the support about which it tips.', 12, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'What bodies and forces does H640 restrict moments problems to?', 'Rods and rectangular laminas, possibly non-uniform, with coplanar forces acting perpendicular to the rod or edge.', 13, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Which two moments topics are excluded from H640?', 'A vector treatment of moments, and finding the centre of mass of a composite body.', 14, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'How many unknowns can be found for a body in equilibrium under vertical forces?', 'At most two, since only two independent equations are available — one from resolving and one from moments.', 15, 'alevel'),
  ('Mathematics', 'OCR B', '3.7', 'Rigid Bodies', 'Why take moments about the foot of a ladder?', 'Both the normal reaction and the friction at the foot act through that point, so both have zero moment there — removing two unknowns at once.', 16, 'alevel');
