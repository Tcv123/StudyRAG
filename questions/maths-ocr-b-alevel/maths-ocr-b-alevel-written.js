/*
 * OCR B (MEI) A-Level Mathematics (H640) — Written (long-answer) Question Bank
 * Single A-Level entry: AS (H630) content is folded into the same topic ids.
 * Keyed by topic id. Each entry: { green: [{ q, marks, marks_scheme }], amber: [...], red: [...] }.
 * The diagnostic swaps one MCQ for a written question from a randomly chosen tier,
 * so every topic should carry at least one question in each tier.
 */

const MATHS_OCR_B_ALEVEL_WRITTEN = {

  '1.1': {
    green: [
      { q: 'Prove by deduction that the sum of any two consecutive integers is odd.', marks: 3, marks_scheme: '1 mark: let the integers be n and n + 1. 1 mark: sum = 2n + 1. 1 mark: 2n is even, so 2n + 1 is odd. Conclusion stated.' },
    ],
    amber: [
      { q: 'Prove by contradiction that √2 is irrational.', marks: 5, marks_scheme: '1 mark: assume √2 = p/q with p, q integers and the fraction in lowest terms. 1 mark: 2q² = p², so p² is even and hence p is even. 1 mark: write p = 2k, giving q² = 2k², so q² is even and hence q is even. 1 mark: p and q are both even, contradicting "lowest terms". 1 mark: conclude √2 is irrational.' },
    ],
    red: [
      { q: 'Prove that there are infinitely many prime numbers.', marks: 6, marks_scheme: '1 mark: assume for contradiction there are finitely many primes p₁, p₂, …, p_n. 1 mark: define N = p₁p₂⋯p_n + 1. 1 mark: state that N leaves remainder 1 on division by each p_i. 1 mark: so no p_i divides N. 1 mark: therefore N is either prime itself or has a prime factor not in the list. 1 mark: either case contradicts the list being complete; conclude there are infinitely many primes.' },
    ],
  },

  '1.2': {
    green: [
      { q: 'Solve the quadratic equation 2x² + 7x − 15 = 0 by factorising.', marks: 3, marks_scheme: '1 mark: factorise as (2x − 3)(x + 5). 1 mark: set each factor to zero. 1 mark: x = 3/2 or x = −5.' },
    ],
    amber: [
      { q: 'Express 1/(3 + √5) with a rational denominator, giving your answer in simplest form.', marks: 3, marks_scheme: '1 mark: multiply numerator and denominator by the conjugate 3 − √5. 1 mark: denominator becomes 9 − 5 = 4. 1 mark: answer (3 − √5)/4.' },
    ],
    red: [
      { q: 'Find the set of values of k for which kx² + (k + 3)x + 4 = 0 has no real roots.', marks: 5, marks_scheme: '1 mark: state the condition discriminant < 0. 1 mark: form (k + 3)² − 16k < 0. 1 mark: expand to k² − 10k + 9 < 0. 1 mark: factorise as (k − 1)(k − 9) < 0. 1 mark: conclude 1 < k < 9.' },
    ],
  },

  '1.3': {
    green: [
      { q: 'The function f is defined by f(x) = 2x + 5. Find f⁻¹(x).', marks: 3, marks_scheme: '1 mark: write y = 2x + 5 and rearrange for x. 1 mark: x = (y − 5)/2. 1 mark: state f⁻¹(x) = (x − 5)/2.' },
    ],
    amber: [
      { q: 'Show that (x + 3) is a factor of f(x) = x³ + 2x² − 5x − 6, and hence factorise f(x) completely.', marks: 5, marks_scheme: '1 mark: apply the factor theorem by evaluating f(−3). 1 mark: f(−3) = −27 + 18 + 15 − 6 = 0, so (x + 3) is a factor. 1 mark: divide to obtain the quadratic x² − x − 2. 1 mark: factorise as (x − 2)(x + 1). 1 mark: f(x) = (x + 3)(x − 2)(x + 1).' },
    ],
    red: [
      { q: 'Solve the inequality |2x − 3| < |x|.', marks: 5, marks_scheme: '1 mark: square both sides (valid as both are non-negative). 1 mark: 4x² − 12x + 9 < x². 1 mark: rearrange to 3x² − 12x + 9 < 0, i.e. x² − 4x + 3 < 0. 1 mark: factorise (x − 1)(x − 3) < 0. 1 mark: conclude 1 < x < 3.' },
    ],
  },

  '1.4': {
    green: [
      { q: 'Describe the single transformation that maps the graph of y = f(x) onto y = f(x − 4).', marks: 2, marks_scheme: '1 mark: identify it as a translation. 1 mark: 4 units in the positive x-direction, i.e. by the vector (4, 0).' },
    ],
    amber: [
      { q: 'The curve y = f(x) has a maximum at (2, 5). State the coordinates of the maximum of y = 3f(x + 1) − 2.', marks: 3, marks_scheme: '1 mark: the translation x → x + 1 moves the point 1 unit left, giving x = 1. 1 mark: the stretch of factor 3 parallel to the y-axis gives y = 15. 1 mark: the translation 2 down gives the maximum at (1, 13).' },
    ],
    red: [
      { q: 'Sketch the curve y = x/(x − 1), stating the equations of both asymptotes and the coordinates of any intersections with the axes.', marks: 5, marks_scheme: '1 mark: vertical asymptote x = 1 (denominator zero). 1 mark: horizontal asymptote y = 1 (behaviour as x → ±∞). 1 mark: passes through the origin (0, 0), the only axis intercept. 1 mark: correct branch shape for x < 1. 1 mark: correct branch shape for x > 1.' },
    ],
  },

  '1.5': {
    green: [
      { q: 'Find the centre and radius of the circle (x − 4)² + (y + 1)² = 36.', marks: 2, marks_scheme: '1 mark: centre (4, −1). 1 mark: radius 6.' },
    ],
    amber: [
      { q: 'Find the centre and radius of the circle x² + y² − 6x + 4y − 12 = 0.', marks: 4, marks_scheme: '1 mark: complete the square in x to give (x − 3)² − 9. 1 mark: complete the square in y to give (y + 2)² − 4. 1 mark: rearrange to (x − 3)² + (y + 2)² = 25. 1 mark: centre (3, −2), radius 5.' },
    ],
    red: [
      { q: 'A curve has parametric equations x = 2 + 3cos θ, y = −1 + 3sin θ. Find its Cartesian equation and describe the curve.', marks: 4, marks_scheme: '1 mark: rearrange to cos θ = (x − 2)/3 and sin θ = (y + 1)/3. 1 mark: use the identity sin²θ + cos²θ = 1. 1 mark: obtain (x − 2)² + (y + 1)² = 9. 1 mark: describe as a circle, centre (2, −1), radius 3.' },
    ],
  },

  '1.6': {
    green: [
      { q: 'Find the sum of the first 20 terms of the arithmetic series with first term 3 and common difference 5.', marks: 3, marks_scheme: '1 mark: quote S_n = (n/2)(2a + (n − 1)d). 1 mark: substitute a = 3, d = 5, n = 20. 1 mark: S₂₀ = 10(6 + 95) = 1010.' },
    ],
    amber: [
      { q: 'Find the coefficient of x³ in the binomial expansion of (1 + 2x)⁵.', marks: 3, marks_scheme: '1 mark: identify the required term as ⁵C₃(2x)³. 1 mark: ⁵C₃ = 10 and (2x)³ = 8x³. 1 mark: coefficient = 80.' },
    ],
    red: [
      { q: 'Expand (1 + 2x)^(1/2) in ascending powers of x up to and including the term in x², and state the range of values of x for which the expansion is valid.', marks: 5, marks_scheme: '1 mark: apply the binomial series with n = 1/2 and term 2x. 1 mark: first-order term (1/2)(2x) = x. 1 mark: second-order term [(1/2)(−1/2)/2](2x)² = −x²/2. 1 mark: expansion 1 + x − x²/2. 1 mark: valid for |2x| < 1, i.e. |x| < 1/2.' },
    ],
  },

  '1.7': {
    green: [
      { q: 'Solve sin x = √3/2 for 0 ≤ x < 2π, giving exact answers.', marks: 3, marks_scheme: '1 mark: principal value x = π/3. 1 mark: second solution from symmetry x = π − π/3 = 2π/3. 1 mark: state both and confirm no others in the interval.' },
    ],
    amber: [
      { q: 'Express 3 sin x + 4 cos x in the form R sin(x + α), where R > 0 and 0 < α < π/2. Hence state the maximum value of the expression.', marks: 5, marks_scheme: '1 mark: R = √(3² + 4²). 1 mark: R = 5. 1 mark: tan α = 4/3. 1 mark: α = 0.927 radians (3 s.f.). 1 mark: maximum value is 5, occurring when sin(x + α) = 1.' },
    ],
    red: [
      { q: 'Solve 3 cos 2x + sin x = 2 for 0 ≤ x < 2π.', marks: 6, marks_scheme: '1 mark: use cos 2x = 1 − 2sin²x. 1 mark: substitute to get 3 − 6sin²x + sin x = 2. 1 mark: rearrange to 6sin²x − sin x − 1 = 0. 1 mark: factorise (3 sin x + 1)(2 sin x − 1) = 0. 1 mark: sin x = 1/2 gives x = π/6, 5π/6. 1 mark: sin x = −1/3 gives x = 3.481, 5.944 radians (3 d.p.).' },
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_WRITTEN; }
