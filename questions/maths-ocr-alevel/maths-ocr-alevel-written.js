/*
 * OCR A-Level Mathematics (H240) — Written (long-answer) Question Bank
 * Keyed by H240 top-level topic (1.1-1.10 Pure, 2.1 Statistics, 2.2 Mechanics).
 * Each entry: { green: [{ q, marks, marks_scheme }], amber: [...], red: [...] }.
 * The diagnostic swaps one MCQ for a written question from a randomly chosen tier,
 * so every topic carries at least one question in each tier.
 */

const MATHS_OCR_ALEVEL_WRITTEN = {

  '1.1': {
    green: [
    { q: 'Prove by deduction that the sum of two consecutive integers is odd.', marks: 3, marks_scheme: '1 mark: let the integers be n and n+1. 1 mark: sum = 2n + 1. 1 mark: 2n is even so 2n + 1 is odd.' },
    { q: 'Prove by deduction that the sum of any two consecutive integers is odd.', marks: 3, marks_scheme: '1 mark: Let the integers be n and n + 1. 1 mark: Sum = 2n + 1. 1 mark: 2n is even so 2n + 1 is odd, as required.' },
    ],
    amber: [
    { q: 'Prove by contradiction that √2 is irrational.', marks: 5, marks_scheme: '1 mark: assume √2 = p/q in lowest terms. 1 mark: 2q² = p² so p² even ⇒ p even. 1 mark: let p = 2k so q² = 2k² ⇒ q² even ⇒ q even. 1 mark: both p and q even contradicts lowest terms. 1 mark: therefore √2 is irrational.' },
    { q: 'Prove that the difference between the squares of any two consecutive integers is odd.', marks: 3, marks_scheme: '1 mark: Let the integers be n and n + 1. 1 mark: (n + 1)² − n² = 2n + 1. 1 mark: 2n is even so 2n + 1 is odd.' },
    ],
    red: [
    { q: 'Prove that the sum of the interior angles of any triangle is 180°, using parallel lines.', marks: 4, marks_scheme: '1 mark: Draw a line through one vertex parallel to the opposite side. 1 mark: The two alternate angle pairs are equal. 1 mark: These two angles and the included angle form a straight line. 1 mark: So the three interior angles total 180°.' },
    ],
  },

  '1.2': {
    green: [
    { q: 'Factorise 2x² + 7x − 15.', marks: 2, marks_scheme: '1 mark: identify factors (2x − 3)(x + 5). 1 mark: verify by expansion.' },
    { q: 'Simplify (3x²y³)⁴ ÷ (9x³y²), leaving your answer in index form.', marks: 3, marks_scheme: '1 mark: (3x²y³)⁴ = 81x⁸y¹². 1 mark: Divide by 9x³y². 1 mark: = 9x⁵y¹⁰.' },
    ],
    amber: [
    { q: 'Solve |x + 2| < 6.', marks: 3, marks_scheme: '1 mark: −6 < x + 2 < 6. 1 mark: Subtract 2 throughout. 1 mark: −8 < x < 4.' },
    { q: 'Given f(x) = x² and g(x) = x + 3, find fg(x) and gf(x).', marks: 3, marks_scheme: '1 mark: fg(x) = f(x + 3) = (x + 3)². 1 mark: gf(x) = g(x²) = x² + 3. 1 mark: The two are different, so composition is not commutative.' },
    ],
    red: [
    { q: 'Find the set of values of x for which x² > 3x + 10.', marks: 4, marks_scheme: '1 mark: Rearrange: x² − 3x − 10 > 0. 1 mark: Factorise: (x − 5)(x + 2) > 0. 1 mark: Critical values −2 and 5. 1 mark: x < −2 or x > 5.' },
    ],
  },

  '1.3': {
    green: [
    { q: 'Find the equation of the circle with centre (2, −1) and radius 4.', marks: 2, marks_scheme: '1 mark: (x−2)² + (y+1)² form. 1 mark: = 16.' },
    { q: 'Find the equation of the line through (2, 5) and (6, 13), giving your answer in the form y = mx + c.', marks: 3, marks_scheme: '1 mark: Gradient = (13 − 5)/(6 − 2) = 2. 1 mark: y − 5 = 2(x − 2). 1 mark: y = 2x + 1.' },
    ],
    amber: [
    { q: 'The points A(0, 0), B(6, 0) and C(6, 8) form a triangle. Show that a circle through all three has AC as a diameter.', marks: 4, marks_scheme: '1 mark: Gradient AB = 0 and gradient BC is undefined, so angle ABC = 90°. 1 mark: The angle in a semicircle is 90°. 1 mark: So AC must be a diameter. 1 mark: Centre is the midpoint of AC, (3, 4).' },
    { q: 'Find the equation of the line parallel to y = 4x − 1 passing through (2, 3).', marks: 3, marks_scheme: '1 mark: Parallel lines share gradient 4. 1 mark: y − 3 = 4(x − 2). 1 mark: y = 4x − 5.' },
    ],
    red: [
    { q: 'Find the equation of the circle with (1, 2) and (7, 10) as the ends of a diameter.', marks: 4, marks_scheme: '1 mark: Centre is the midpoint, (4, 6). 1 mark: Radius = half the distance = ½√(36 + 64) = 5. 1 mark: (x − 4)² + (y − 6)² = 25. 1 mark: Equation stated correctly.' },
    ],
  },

  '1.4': {
    green: [
    { q: 'Find the sum of the first 20 terms of an arithmetic sequence with first term 3 and common difference 5.', marks: 3, marks_scheme: '1 mark: S_n = n/2(2a + (n-1)d). 1 mark: substitute a = 3, d = 5, n = 20. 1 mark: S_20 = 10(6 + 95) = 1010.' },
    { q: 'An arithmetic sequence has first term 7 and common difference 4. Find the 20th term.', marks: 3, marks_scheme: '1 mark: uₙ = a + (n − 1)d. 1 mark: u₂₀ = 7 + 19 × 4. 1 mark: = 83.' },
    ],
    amber: [
    { q: 'A sequence is defined by u(n+1) = uₙ + 4 with u₁ = 2. Describe the sequence and find uₙ.', marks: 3, marks_scheme: '1 mark: Each term increases by 4, so it is arithmetic. 1 mark: a = 2 and d = 4. 1 mark: uₙ = 4n − 2.' },
    { q: 'Use a binomial expansion to estimate 1.02⁶ to 4 decimal places.', marks: 4, marks_scheme: '1 mark: Write as (1 + 0.02)⁶. 1 mark: ≈ 1 + 6(0.02) + 15(0.02)². 1 mark: = 1 + 0.12 + 0.006. 1 mark: ≈ 1.1262.' },
    ],
    red: [
    { q: 'Prove that the sum of an arithmetic series is (n/2)(2a + (n − 1)d).', marks: 4, marks_scheme: '1 mark: Write S forwards and backwards. 1 mark: Add the two, pairing terms. 1 mark: Each of the n pairs totals 2a + (n − 1)d. 1 mark: So 2S = n[2a + (n − 1)d], giving the result.' },
    ],
  },

  '1.5': {
    green: [
    { q: 'Solve sin(x) = √3/2 for 0 ≤ x < 2π.', marks: 3, marks_scheme: '1 mark: principal value x = π/3. 1 mark: symmetric second solution x = π − π/3 = 2π/3. 1 mark: confirm no other solutions in range.' },
    { q: 'Convert 135° to radians, giving an exact answer.', marks: 2, marks_scheme: '1 mark: Multiply by π/180. 1 mark: 135π/180 = 3π/4.' },
    ],
    amber: [
    { q: 'Solve 2cos²x − cos x − 1 = 0 for 0° ≤ x ≤ 360°.', marks: 4, marks_scheme: '1 mark: Factorise: (2cos x + 1)(cos x − 1) = 0. 1 mark: cos x = −1/2 gives x = 120° or 240°. 1 mark: cos x = 1 gives x = 0° or 360°. 1 mark: All four values stated.' },
    { q: 'State the maximum and minimum values of 7sin x + 24cos x, and the value of x giving the maximum.', marks: 4, marks_scheme: '1 mark: R = √(49 + 576) = 25. 1 mark: Maximum 25 and minimum −25. 1 mark: Maximum when sin(x + α) = 1 with tan α = 24/7. 1 mark: α = 73.7°, so x = 16.3°.' },
    ],
    red: [
    { q: 'Prove that (1 − cos 2θ)/sin 2θ = tan θ.', marks: 4, marks_scheme: '1 mark: Use 1 − cos 2θ = 2sin²θ. 1 mark: Use sin 2θ = 2 sin θ cos θ. 1 mark: The ratio is 2sin²θ/(2 sin θ cos θ). 1 mark: = sin θ/cos θ = tan θ.' },
    ],
  },

  '1.6': {
    green: [
    { q: 'Solve 2^(x+1) = 32.', marks: 2, marks_scheme: '1 mark: 32 = 2⁵ so x + 1 = 5. 1 mark: x = 4.' },
    { q: 'Sketch y = 2ˣ, stating the y-intercept and the equation of the asymptote.', marks: 3, marks_scheme: '1 mark: Increasing curve, always positive. 1 mark: Passes through (0, 1). 1 mark: Horizontal asymptote y = 0.' },
    ],
    amber: [
    { q: 'Differentiate y = ln(5x).', marks: 3, marks_scheme: '1 mark: Write as ln 5 + ln x. 1 mark: The derivative of ln 5 is 0. 1 mark: dy/dx = 1/x.' },
    { q: 'The value of a car is V = 18000 × 0.85^t. Find its value after 5 years.', marks: 3, marks_scheme: '1 mark: V = 18000 × 0.85⁵. 1 mark: 0.85⁵ = 0.4437. 1 mark: V ≈ £7987.' },
    ],
    red: [
    { q: 'Data fits y = ab^x. A graph of log y against x gives gradient 0.3 and intercept 1.2. Find a and b.', marks: 4, marks_scheme: '1 mark: The intercept is log a = 1.2. 1 mark: a = 10^1.2 = 15.8. 1 mark: The gradient is log b = 0.3. 1 mark: b = 10^0.3 = 2.00.' },
    ],
  },

  '1.7': {
    green: [
    { q: 'Find dy/dx if y = 3x³ − 4x² + 5x − 7.', marks: 2, marks_scheme: '1 mark: apply power rule termwise. 1 mark: dy/dx = 9x² − 8x + 5.' },
    { q: 'Differentiate y = 4x³ − 2x² + 7x − 1.', marks: 3, marks_scheme: '1 mark: Differentiate term by term. 1 mark: 4x³ gives 12x² and −2x² gives −4x. 1 mark: dy/dx = 12x² − 4x + 7.' },
    ],
    amber: [
    { q: 'Find the point of inflection of y = x³ − 3x² + 2x.', marks: 4, marks_scheme: '1 mark: dy/dx = 3x² − 6x + 2. 1 mark: d²y/dx² = 6x − 6. 1 mark: Set to zero: x = 1. 1 mark: y = 0, so the inflection is at (1, 0).' },
    { q: 'Find dy/dx for the implicit relation x² + y² = 25.', marks: 3, marks_scheme: '1 mark: Differentiate both sides with respect to x. 1 mark: 2x + 2y(dy/dx) = 0. 1 mark: dy/dx = −x/y.' },
    ],
    red: [
    { q: 'Find dy/dx for x² + xy + y² = 7.', marks: 4, marks_scheme: '1 mark: Differentiate: 2x + [y + x(dy/dx)] + 2y(dy/dx) = 0. 1 mark: Group the dy/dx terms. 1 mark: (x + 2y)(dy/dx) = −2x − y. 1 mark: dy/dx = −(2x + y)/(x + 2y).' },
    ],
  },

  '1.8': {
    green: [
    { q: 'Evaluate ∫_1^3 (2x + 1) dx.', marks: 3, marks_scheme: '1 mark: antiderivative x² + x. 1 mark: apply limits. 1 mark: [9 + 3] − [1 + 1] = 10.' },
    { q: 'Find ∫(3x² + 4x − 5) dx.', marks: 3, marks_scheme: '1 mark: Raise each power by one and divide. 1 mark: 3x² gives x³ and 4x gives 2x². 1 mark: = x³ + 2x² − 5x + c.' },
    ],
    amber: [
    { q: 'Find the area between the curve y = x² and the line y = x.', marks: 4, marks_scheme: '1 mark: They meet where x² = x, so x = 0 and x = 1. 1 mark: Area = ∫ from 0 to 1 of (x − x²) dx. 1 mark: = [x²/2 − x³/3] = 1/2 − 1/3. 1 mark: = 1/6.' },
    { q: 'Evaluate ∫ from 0 to π/2 of cos x dx.', marks: 3, marks_scheme: '1 mark: Integral is sin x. 1 mark: = sin(π/2) − sin 0. 1 mark: = 1.' },
    ],
    red: [
    { q: 'Use the substitution u = 3x − 1 to evaluate ∫ from 1 to 2 of (3x − 1)⁵ dx.', marks: 4, marks_scheme: '1 mark: du = 3 dx, so dx = du/3. 1 mark: Limits become u = 2 and u = 5. 1 mark: (1/3)[u⁶/6] from 2 to 5. 1 mark: = (15625 − 64)/18 = 15561/18 = 1729/2 = 864.5.' },
    ],
  },

  '1.9': {
    green: [
    { q: 'Using Newton-Raphson, find one iteration from x₀ = 2 for f(x) = x³ − 5.', marks: 3, marks_scheme: '1 mark: f(2) = 3 and f\'(2) = 12. 1 mark: x₁ = 2 − 3/12. 1 mark: x₁ = 1.75.' },
    { q: 'Show that f(x) = x³ − x − 1 has a root between x = 1 and x = 2.', marks: 3, marks_scheme: '1 mark: f(1) = 1 − 1 − 1 = −1. 1 mark: f(2) = 8 − 2 − 1 = 5. 1 mark: There is a sign change and f is continuous, so a root lies between them.' },
    ],
    amber: [
    { q: 'Use Newton-Raphson once on f(x) = x³ − x − 1 with x_0 = 1.5.', marks: 4, marks_scheme: '1 mark: f(1.5) = 0.875 and f\'(x) = 3x² − 1. 1 mark: f\'(1.5) = 5.75. 1 mark: x_1 = 1.5 − 0.875/5.75. 1 mark: x_1 = 1.3478 to 4 d.p.' },
    { q: 'Use the trapezium rule with 4 strips to estimate ∫ from 1 to 3 of 1/x dx.', marks: 4, marks_scheme: '1 mark: h = 0.5 with ordinates 1, 0.6667, 0.5, 0.4 and 0.3333. 1 mark: (h/2)[first + last + 2(middle)]. 1 mark: = 0.25[1.3333 + 2(1.5667)]. 1 mark: = 1.1167 to 4 d.p.' },
    ],
    red: [
    { q: 'For x_(n+1) = (x_n² + 3)/4, decide which fixed point attracts nearby iterates.', marks: 4, marks_scheme: '1 mark: g\'(x) = x/2. 1 mark: At x = 1, |g\'| = 0.5 which is less than 1. 1 mark: At x = 3, |g\'| = 1.5 which is greater than 1. 1 mark: So x = 1 attracts and x = 3 repels.' },
    ],
  },

  '1.10': {
    green: [
    { q: 'Find the magnitude of the vector a = 2i − 3j + 6k.', marks: 2, marks_scheme: '1 mark: |a|² = 4 + 9 + 36. 1 mark: |a| = 7.' },
    { q: 'Given a = 3i + 4j, find |a|.', marks: 3, marks_scheme: '1 mark: Use |a| = √(x² + y²). 1 mark: = √(9 + 16) = √25. 1 mark: = 5.' },
    ],
    amber: [
    { q: 'Points P(2, −1, 3) and Q(5, 3, 3) are given. Find PQ and |PQ|.', marks: 4, marks_scheme: '1 mark: PQ = (3, 4, 0). 1 mark: |PQ| = √(9 + 16 + 0). 1 mark: = √25. 1 mark: = 5.' },
    { q: 'OACB is a parallelogram with OA = a and OB = b. Express OC and AB in terms of a and b.', marks: 3, marks_scheme: '1 mark: OC = OA + AC = a + b. 1 mark: AB = OB − OA. 1 mark: AB = b − a.' },
    ],
    red: [
    { q: 'Given a = 2i + 3j and b = 4i + j, show that a + b and a − b are not perpendicular.', marks: 4, marks_scheme: '1 mark: a + b = 6i + 4j and a − b = −2i + 2j. 1 mark: Their scalar product is −12 + 8. 1 mark: = −4, which is not zero. 1 mark: So they are not perpendicular.' },
    ],
  },

  '2.1': {
    green: [
    { q: 'For X ~ B(10, 0.4), calculate P(X = 3).', marks: 3, marks_scheme: '1 mark: use binomial formula. 1 mark: 10C3 · 0.4³ · 0.6⁷. 1 mark: ≈ 0.2150.' },
    { q: 'Explain what is meant by a census and by a sample.', marks: 2, marks_scheme: '1 mark: A census collects data from every member of the population. 1 mark: A sample collects data from only part of the population.' },
    ],
    amber: [
    { q: 'For a data set with Q1 = 12 and Q3 = 20, determine whether 34 is an outlier.', marks: 4, marks_scheme: '1 mark: IQR = 8. 1 mark: Upper fence = 20 + 1.5 × 8. 1 mark: = 32. 1 mark: 34 exceeds 32, so it is an outlier.' },
    { q: 'Explain why correlation does not imply causation, with an example.', marks: 3, marks_scheme: '1 mark: Two variables may both be influenced by a third factor. 1 mark: For example ice cream sales and drowning incidents both rise in summer. 1 mark: The link is temperature, not a causal connection between them.' },
    ],
    red: [
    { q: 'A coin is tossed 20 times giving 15 heads. Test at the 5% level whether it is biased towards heads.', marks: 4, marks_scheme: '1 mark: H0: p = 0.5 and H1: p > 0.5. 1 mark: Assuming H0, X ~ B(20, 0.5). 1 mark: P(X ≥ 15) = 0.0207, which is less than 0.05. 1 mark: Reject H0: there is evidence the coin is biased towards heads.' },
    ],
  },

  '2.2': {
    green: [
    { q: 'A particle starts from rest and accelerates at 2 m/s² for 5 s. Find its velocity and displacement.', marks: 4, marks_scheme: '1 mark: v = u + at. 1 mark: v = 10 m/s. 1 mark: s = ut + ½at². 1 mark: s = 25 m.' },
    { q: 'A ball is dropped from rest and falls for 3 seconds. Find its speed on landing, taking g = 9.8 m/s².', marks: 3, marks_scheme: '1 mark: v = u + at with u = 0 and a = 9.8. 1 mark: v = 9.8 × 3. 1 mark: v = 29.4 m/s.' },
    ],
    amber: [
    { q: 'A 5 kg mass hangs at rest on a light string. Find the tension, g = 9.8.', marks: 3, marks_scheme: '1 mark: The mass is in equilibrium so T = W. 1 mark: W = mg = 5 × 9.8. 1 mark: T = 49 N.' },
    { q: 'Two masses of 3 kg and 5 kg hang over a smooth pulley on a light string. Find the acceleration, g = 9.8.', marks: 4, marks_scheme: '1 mark: For the 5 kg mass: 5g − T = 5a. 1 mark: For the 3 kg mass: T − 3g = 3a. 1 mark: Adding: 2g = 8a. 1 mark: a = 2.45 m/s².' },
    ],
    red: [
    { q: 'A 4 kg mass on a smooth table is connected over a pulley to a 2 kg hanging mass. Find the acceleration, g = 9.8.', marks: 4, marks_scheme: '1 mark: For the hanging mass: 2g − T = 2a. 1 mark: For the table mass: T = 4a. 1 mark: Adding: 2g = 6a. 1 mark: a = 3.27 m/s² to 3 s.f.' },
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_ALEVEL_WRITTEN; }
