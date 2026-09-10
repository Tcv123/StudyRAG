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

  '1.8': {
    green: [
      { q: 'Solve 3^(x) = 20, giving your answer to 3 decimal places.', marks: 3, marks_scheme: '1 mark: take logarithms of both sides, x log 3 = log 20. 1 mark: x = log 20 / log 3. 1 mark: x = 2.727 (3 d.p.).' },
    ],
    amber: [
      { q: 'Solve log₂ x + log₂(x − 2) = 3.', marks: 4, marks_scheme: '1 mark: combine using the addition law to give log₂(x(x − 2)) = 3. 1 mark: x² − 2x = 8. 1 mark: solve x² − 2x − 8 = 0 to give x = 4 or x = −2. 1 mark: reject x = −2 since the logarithm requires x > 2; x = 4.' },
    ],
    red: [
      { q: 'Experimental data are believed to satisfy y = axⁿ. Explain how a graph may be used to estimate a and n, and state which quantities should be plotted.', marks: 5, marks_scheme: '1 mark: take logarithms of both sides. 1 mark: log y = log a + n log x. 1 mark: state this is linear in log x. 1 mark: plot log y (vertical) against log x (horizontal). 1 mark: gradient gives n and the vertical intercept gives log a, so a = 10^(intercept).' },
    ],
  },

  '1.9': {
    green: [
      { q: 'Differentiate y = 3x³ − 4x² + 5x − 7.', marks: 2, marks_scheme: '1 mark: apply the power rule term by term. 1 mark: dy/dx = 9x² − 8x + 5.' },
    ],
    amber: [
      { q: 'Find the coordinates of the stationary points of y = x³ − 3x and determine their nature.', marks: 5, marks_scheme: '1 mark: dy/dx = 3x² − 3. 1 mark: set to zero to give x = 1 and x = −1. 1 mark: corresponding points (1, −2) and (−1, 2). 1 mark: d²y/dx² = 6x. 1 mark: at x = 1 second derivative is 6 > 0 so minimum; at x = −1 it is −6 < 0 so maximum.' },
    ],
    red: [
      { q: 'Differentiate y = x² from first principles.', marks: 4, marks_scheme: '1 mark: state the definition as the limit as h → 0 of ((x + h)² − x²)/h. 1 mark: expand the numerator to 2xh + h². 1 mark: divide by h to give 2x + h. 1 mark: take the limit as h → 0 to obtain dy/dx = 2x.' },
    ],
  },

  '1.10': {
    green: [
      { q: 'Evaluate ∫ from 1 to 3 of (2x + 1) dx.', marks: 3, marks_scheme: '1 mark: antiderivative x² + x. 1 mark: substitute the limits, (9 + 3) − (1 + 1). 1 mark: value 10.' },
    ],
    amber: [
      { q: 'Find the area enclosed between the curve y = x² and the line y = 2x.', marks: 5, marks_scheme: '1 mark: find intersections by solving x² = 2x, giving x = 0 and x = 2. 1 mark: set up ∫ from 0 to 2 of (2x − x²) dx. 1 mark: antiderivative x² − x³/3. 1 mark: substitute limits to give 4 − 8/3. 1 mark: area = 4/3.' },
    ],
    red: [
      { q: 'Find ∫x²eˣ dx.', marks: 6, marks_scheme: '1 mark: apply integration by parts with u = x², dv = eˣ dx. 1 mark: obtain x²eˣ − ∫2xeˣ dx. 1 mark: apply parts a second time to ∫2xeˣ dx with u = 2x. 1 mark: obtain 2xeˣ − ∫2eˣ dx. 1 mark: ∫2eˣ dx = 2eˣ. 1 mark: answer eˣ(x² − 2x + 2) + c.' },
    ],
  },

  '1.11': {
    green: [
      { q: 'Solve the differential equation dy/dx = 6x², given that y = 4 when x = 1.', marks: 3, marks_scheme: '1 mark: integrate to give y = 2x³ + c. 1 mark: substitute x = 1, y = 4 to give 4 = 2 + c. 1 mark: c = 2, so y = 2x³ + 2.' },
    ],
    amber: [
      { q: 'Solve dy/dx = xy given that y = 1 when x = 0.', marks: 5, marks_scheme: '1 mark: separate the variables to give (1/y) dy = x dx. 1 mark: integrate both sides. 1 mark: ln y = x²/2 + c. 1 mark: substitute x = 0, y = 1 to give c = 0. 1 mark: y = e^(x²/2).' },
    ],
    red: [
      { q: "A body cools according to Newton's law of cooling, dθ/dt = −k(θ − 20), where θ is in °C. Given θ = 100 when t = 0, solve the equation and state the long-term temperature.", marks: 6, marks_scheme: '1 mark: separate to give dθ/(θ − 20) = −k dt. 1 mark: integrate to ln(θ − 20) = −kt + c. 1 mark: rearrange to θ − 20 = Ae^(−kt). 1 mark: substitute t = 0, θ = 100 to give A = 80. 1 mark: θ = 20 + 80e^(−kt). 1 mark: as t → ∞ the exponential tends to 0, so the long-term temperature is 20 °C (the surrounding temperature).' },
    ],
  },

  '1.12': {
    green: [
      { q: 'Using the Newton-Raphson method with f(x) = x³ − 5 and x₀ = 2, carry out one iteration.', marks: 3, marks_scheme: "1 mark: f(2) = 3 and f'(2) = 12. 1 mark: apply x₁ = 2 − 3/12. 1 mark: x₁ = 1.75." },
    ],
    amber: [
      { q: 'Show that the equation x³ − 2x − 5 = 0 has a root between x = 2 and x = 3.', marks: 3, marks_scheme: '1 mark: evaluate f(2) = 8 − 4 − 5 = −1. 1 mark: evaluate f(3) = 27 − 6 − 5 = 16. 1 mark: f changes sign and f is continuous on [2, 3], so there is a root in the interval.' },
    ],
    red: [
      { q: 'Explain two distinct circumstances in which a change of sign method fails to locate a root correctly, giving an example of each.', marks: 6, marks_scheme: '1 mark: first case — the curve touches the x-axis without crossing it. 1 mark: example such as f(x) = (x − 2)², where f never changes sign despite a root at x = 2. 1 mark: explanation that a repeated root produces no sign change. 1 mark: second case — a vertical asymptote in the interval. 1 mark: example such as f(x) = 1/(x − 2), where f(1) = −1 and f(3) = 1. 1 mark: explanation that the sign change is caused by the discontinuity, not a root. (Accept as an alternative second case: several roots in the interval, so signs at the endpoints agree.)' },
    ],
  },

  '1.13': {
    green: [
      { q: 'Find the magnitude of the vector a = 2i − 3j + 6k.', marks: 2, marks_scheme: '1 mark: |a|² = 4 + 9 + 36 = 49. 1 mark: |a| = 7.' },
    ],
    amber: [
      { q: 'The points A and B have position vectors 2i + j and 6i + 4j. Find the vector AB, its magnitude, and a unit vector in the direction of AB.', marks: 5, marks_scheme: '1 mark: AB = b − a. 1 mark: AB = 4i + 3j. 1 mark: |AB|² = 16 + 9 = 25. 1 mark: |AB| = 5. 1 mark: unit vector = (4i + 3j)/5, i.e. 0.8i + 0.6j.' },
    ],
    red: [
      { q: 'The points A, B and C have position vectors i + j, 3i + 5j and 5i + 9j. Show that A, B and C are collinear.', marks: 4, marks_scheme: '1 mark: AB = b − a = 2i + 4j. 1 mark: BC = c − b = 2i + 4j. 1 mark: state that BC is a scalar multiple of AB (here BC = AB), so the vectors are parallel. 1 mark: since AB and BC are parallel and share the common point B, the three points are collinear.' },
    ],
  },

  '2.1': {
    green: [
      { q: 'Explain the difference between a population and a sample, and give one reason why a sample is often used in preference to a census.', marks: 3, marks_scheme: '1 mark: population is the entire group under study. 1 mark: a sample is a subset of that population. 1 mark: any valid reason, e.g. a census is too costly or time-consuming, or testing is destructive.' },
    ],
    amber: [
      { q: 'A school has 480 students in Year 12 and 320 in Year 13. Describe how to take a stratified sample of 120 students, stating how many should be taken from each year group.', marks: 4, marks_scheme: '1 mark: total population is 800, so the sampling fraction is 120/800 = 0.15. 1 mark: Year 12 gives 480 × 0.15 = 72. 1 mark: Year 13 gives 320 × 0.15 = 48. 1 mark: state that within each year group the students are then selected at random.' },
    ],
    red: [
      { q: 'A supermarket surveys shoppers on a Tuesday morning to estimate the mean weekly spending of all its customers. Identify two distinct sources of bias and suggest one improvement.', marks: 5, marks_scheme: '1 mark: first source — the time of day means only shoppers available on a weekday morning can be selected. 1 mark: explanation that these may differ systematically, e.g. fewer people in full-time work. 1 mark: second source — surveying at a single store, or non-response from those in a hurry. 1 mark: explanation of why this distorts the estimate. 1 mark: a sensible improvement, e.g. sample across several days, times and stores.' },
    ],
  },

  '2.2': {
    green: [
      { q: 'State what the area of each bar in a histogram represents, and explain how this differs from a frequency chart.', marks: 3, marks_scheme: '1 mark: in a histogram the area of each bar is proportional to frequency. 1 mark: the vertical axis is therefore frequency density, that is frequency ÷ class width. 1 mark: a frequency chart has equal width bars with frequency itself on the vertical axis.' },
    ],
    amber: [
      { q: 'A data set has mean 50 and standard deviation 4. A second data set is formed by adding 10 to every value. State the mean and standard deviation of the new set, justifying your answers.', marks: 4, marks_scheme: '1 mark: new mean is 60. 1 mark: justification that adding a constant translates every value, so the mean increases by the same amount. 1 mark: standard deviation is unchanged at 4. 1 mark: justification that the spread about the mean is unaffected by a translation.' },
    ],
    red: [
      { q: 'A data set of 10 values has Σx = 200 and Sxx = 360. Calculate the sample mean and the sample standard deviation, and determine whether the value 64 is an outlier using the 2-standard-deviation criterion.', marks: 6, marks_scheme: '1 mark: mean = 200/10 = 20. 1 mark: sample variance = Sxx/(n − 1) = 360/9. 1 mark: variance = 40. 1 mark: standard deviation = √40 ≈ 6.32. 1 mark: two standard deviations above the mean is 20 + 12.65 = 32.6 (3 s.f.). 1 mark: 64 lies well beyond this, so it is an outlier by this criterion.' },
    ],
  },

  '2.3': {
    green: [
      { q: 'Events A and B are independent with P(A) = 0.4 and P(B) = 0.5. Find P(A ∩ B) and P(A ∪ B).', marks: 3, marks_scheme: '1 mark: for independent events P(A ∩ B) = P(A) × P(B) = 0.2. 1 mark: use P(A ∪ B) = P(A) + P(B) − P(A ∩ B). 1 mark: P(A ∪ B) = 0.4 + 0.5 − 0.2 = 0.7.' },
    ],
    amber: [
      { q: 'A bag contains 5 red and 3 blue balls. Two balls are drawn at random without replacement. Find the probability that exactly one is red.', marks: 4, marks_scheme: '1 mark: identify the two cases, red then blue and blue then red. 1 mark: P(red then blue) = (5/8)(3/7) = 15/56. 1 mark: P(blue then red) = (3/8)(5/7) = 15/56. 1 mark: total = 30/56 = 15/28.' },
    ],
    red: [
      { q: 'A screening test is 95% accurate in both directions, and 1% of the population has the condition. Find the probability that a person who tests positive actually has the condition, and comment on your answer.', marks: 6, marks_scheme: '1 mark: P(has condition and tests positive) = 0.01 × 0.95 = 0.0095. 1 mark: P(no condition and tests positive) = 0.99 × 0.05 = 0.0495. 1 mark: P(tests positive) = 0.0095 + 0.0495 = 0.059. 1 mark: apply conditional probability P(condition | positive) = 0.0095/0.059. 1 mark: probability ≈ 0.161. 1 mark: comment that despite the test being 95% accurate, most positives are false positives because the condition is rare.' },
    ],
  },

  '2.4': {
    green: [
      { q: 'For X ~ B(10, 0.4), calculate P(X = 3) and state the mean of X.', marks: 3, marks_scheme: '1 mark: use the binomial probability ¹⁰C₃ (0.4)³ (0.6)⁷. 1 mark: P(X = 3) ≈ 0.215. 1 mark: mean = np = 10 × 0.4 = 4.' },
    ],
    amber: [
      { q: 'State three conditions that must hold for a situation to be modelled by a binomial distribution.', marks: 3, marks_scheme: '1 mark: a fixed number of trials. 1 mark: exactly two outcomes per trial, success and failure. 1 mark: the probability of success is the same each trial and the trials are independent. (Accept independence as a separate third condition in place of constant probability.)' },
    ],
    red: [
      { q: 'The random variable X has X ~ N(50, 16) and Y = 3X + 2. State the distribution of Y, justifying the mean and variance. Explain also why the points of inflection of the curve of X lie at 46 and 54.', marks: 6, marks_scheme: '1 mark: a linear transformation of a Normal variable is Normal. 1 mark: mean of Y = 3 × 50 + 2 = 152. 1 mark: variance of Y = 3² × 16 = 144. 1 mark: state Y ~ N(152, 144). 1 mark: the points of inflection of a Normal curve lie one standard deviation either side of the mean. 1 mark: σ = √16 = 4, so they are at 50 ± 4, i.e. 46 and 54.' },
    ],
  },

  '2.5': {
    green: [
      { q: 'A coin is suspected of being biased towards heads. State suitable null and alternative hypotheses, and say whether the test is one-tailed or two-tailed.', marks: 3, marks_scheme: '1 mark: H₀: p = 0.5. 1 mark: H₁: p > 0.5. 1 mark: the test is one-tailed, since a direction of bias is specified.' },
    ],
    amber: [
      { q: 'Explain what is meant by the significance level of a hypothesis test, and state what it means to reject the null hypothesis at the 5% level.', marks: 4, marks_scheme: '1 mark: the significance level is the probability of incorrectly rejecting the null hypothesis when it is in fact true. 1 mark: at the 5% level the critical region has probability at most 0.05 under H₀. 1 mark: rejecting H₀ means the observed result is unlikely, with probability at most 0.05, if H₀ were true. 1 mark: state that this is evidence against H₀, not proof that it is false.' },
    ],
    red: [
      { q: 'A random sample of 25 observations is drawn from a population modelled by N(μ, 100). Test, at the 5% significance level, the hypotheses H₀: μ = 40 against H₁: μ > 40, given a sample mean of 44.', marks: 6, marks_scheme: '1 mark: under H₀ the sample mean is Normally distributed with mean 40. 1 mark: variance of the sample mean = 100/25 = 4, so the standard deviation is 2. 1 mark: calculate the test statistic z = (44 − 40)/2. 1 mark: z = 2. 1 mark: compare with the one-tailed 5% critical value 1.645, and note 2 > 1.645. 1 mark: reject H₀; there is evidence at the 5% level that the population mean exceeds 40.' },
    ],
  },

  '3.1': {
    green: [
      { q: 'Explain what is meant by modelling an object as a particle, and state one situation in which this assumption would be unreasonable.', marks: 3, marks_scheme: '1 mark: a particle has mass but negligible size. 1 mark: so all forces may be taken to act at a single point and rotation is ignored. 1 mark: any reasonable situation where size or rotation matters, e.g. a ladder leaning against a wall, or a spinning ball.' },
    ],
    amber: [
      { q: 'A string in a pulley problem is described as "light and inextensible" and the pulley as "smooth". Explain what each of these three assumptions allows you to deduce.', marks: 4, marks_scheme: '1 mark: light means the string has negligible mass. 1 mark: so the tension is unchanged along its length. 1 mark: inextensible means the connected particles have accelerations of equal magnitude. 1 mark: smooth means there is no friction at the pulley, so the tension is the same on both sides.' },
    ],
    red: [
      { q: 'A speed is quoted as 36 km h⁻¹. Convert it to SI base units, showing your working, and state the SI unit of force in terms of base units.', marks: 4, marks_scheme: '1 mark: 36 km = 36000 m and 1 hour = 3600 s. 1 mark: divide to obtain 36000/3600. 1 mark: speed = 10 m s⁻¹. 1 mark: the newton is equivalent to kg m s⁻².' },
    ],
  },

  '3.2': {
    green: [
      { q: 'A particle starts from rest and accelerates uniformly at 2 m s⁻² for 5 s. Find its final velocity and the distance travelled.', marks: 4, marks_scheme: '1 mark: use v = u + at with u = 0. 1 mark: v = 10 m s⁻¹. 1 mark: use s = ut + ½at². 1 mark: s = 25 m.' },
    ],
    amber: [
      { q: 'A car travelling at 20 m s⁻¹ decelerates uniformly at 4 m s⁻² until it stops. Find the time taken and the distance travelled.', marks: 4, marks_scheme: '1 mark: use v = u + at with v = 0, u = 20, a = −4. 1 mark: t = 5 s. 1 mark: use s = ½(u + v)t or v² = u² + 2as. 1 mark: s = 50 m.' },
    ],
    red: [
      { q: 'A particle moves so that its displacement from the origin is s = t³ − 6t² + 9t metres at time t seconds. Find the times at which it is instantaneously at rest, and the total distance travelled between t = 0 and t = 4.', marks: 6, marks_scheme: '1 mark: differentiate to get v = 3t² − 12t + 9. 1 mark: set v = 0 and factorise to 3(t − 1)(t − 3) = 0. 1 mark: at rest at t = 1 and t = 3. 1 mark: evaluate s at t = 0, 1, 3, 4 giving 0, 4, 0, 4. 1 mark: recognise the direction reverses, so add the magnitudes 4 + 4 + 4. 1 mark: total distance = 12 m (note the displacement is only 4 m).' },
    ],
  },

  '3.3': {
    green: [
      { q: 'A particle has position vector r = 3t i + t² j. Find its velocity and its speed when t = 2.', marks: 4, marks_scheme: '1 mark: differentiate to get v = 3i + 2t j. 1 mark: at t = 2, v = 3i + 4j. 1 mark: speed = √(3² + 4²). 1 mark: speed = 5.' },
    ],
    amber: [
      { q: 'A particle has position vector r = 2t i + (t² − 1) j. Find the Cartesian equation of its path and describe the curve.', marks: 4, marks_scheme: '1 mark: write x = 2t and y = t² − 1. 1 mark: rearrange to t = x/2. 1 mark: substitute to give y = x²/4 − 1. 1 mark: describe as a parabola.' },
    ],
    red: [
      { q: 'Particle A has position vector (t + 1)i + 2t j and particle B has position vector (3t − 1)i + (t + 1)j. Show that they collide, and state the time and position of the collision.', marks: 5, marks_scheme: '1 mark: equate the i-components, t + 1 = 3t − 1. 1 mark: solve to give t = 1. 1 mark: equate the j-components, 2t = t + 1, also giving t = 1. 1 mark: state that both components agree at the same time, so a collision occurs at t = 1. 1 mark: substitute to find the position 2i + 2j.' },
    ],
  },

  '3.4': {
    green: [
      { q: 'State three standard modelling assumptions used for projectile motion.', marks: 3, marks_scheme: '1 mark: there is no air resistance. 1 mark: the projectile is modelled as a particle. 1 mark: gravity is constant in magnitude and always acts in the same direction (accept either as the third).' },
    ],
    amber: [
      { q: 'A ball is projected at 20 m s⁻¹ at 30° above the horizontal from level ground. Taking g = 9.8, find the maximum height reached and the time of flight.', marks: 5, marks_scheme: '1 mark: vertical component of initial velocity = 20 sin 30° = 10 m s⁻¹. 1 mark: at maximum height the vertical velocity is zero, so use v² = u² + 2as. 1 mark: maximum height = 10²/(2 × 9.8) = 5.10 m (3 s.f.). 1 mark: time of flight = 2u sin θ/g. 1 mark: time of flight = 20/9.8 = 2.04 s (3 s.f.).' },
    ],
    red: [
      { q: 'A projectile is launched from the origin at speed u and angle θ. Derive the Cartesian equation of its path, and hence explain why the path is a parabola.', marks: 6, marks_scheme: '1 mark: horizontal displacement x = u cos θ · t. 1 mark: vertical displacement y = u sin θ · t − ½gt². 1 mark: rearrange the first to t = x/(u cos θ). 1 mark: substitute into the second. 1 mark: obtain y = x tan θ − gx²/(2u² cos²θ). 1 mark: this is a quadratic in x with a negative x² coefficient, so the path is a parabola.' },
    ],
  },

  '3.5': {
    green: [
      { q: 'A block of mass 5 kg rests on a rough horizontal surface with coefficient of friction 0.4. Taking g = 9.8, find the normal reaction and the maximum possible frictional force.', marks: 4, marks_scheme: '1 mark: resolve vertically, R = mg. 1 mark: R = 49 N. 1 mark: maximum friction = μR. 1 mark: maximum friction = 0.4 × 49 = 19.6 N.' },
    ],
    amber: [
      { q: 'A 10 kg block rests on a plane inclined at 30° to the horizontal. Taking g = 9.8, find the components of its weight parallel and perpendicular to the plane.', marks: 4, marks_scheme: '1 mark: weight = 10 × 9.8 = 98 N. 1 mark: component parallel to the plane = 98 sin 30°. 1 mark: parallel component = 49 N. 1 mark: perpendicular component = 98 cos 30° = 84.9 N (3 s.f.).' },
    ],
    red: [
      { q: 'A block rests on a rough plane inclined at angle θ with coefficient of friction μ. Show that it remains at rest provided tan θ ≤ μ.', marks: 5, marks_scheme: '1 mark: resolve perpendicular to the plane, R = mg cos θ. 1 mark: resolve parallel to the plane, the component tending to move the block is mg sin θ. 1 mark: for equilibrium this must not exceed limiting friction, so mg sin θ ≤ μR. 1 mark: substitute R to give mg sin θ ≤ μ mg cos θ. 1 mark: divide by mg cos θ (positive for 0 < θ < 90°) to obtain tan θ ≤ μ.' },
    ],
  },

  '3.6': {
    green: [
      { q: "State Newton's three laws of motion.", marks: 3, marks_scheme: '1 mark: an object continues at rest or in uniform motion in a straight line unless acted on by a resultant force. 1 mark: a resultant force F on an object of fixed mass m gives acceleration a with F = ma. 1 mark: when one object exerts a force on another, there is a reaction equal in magnitude and opposite in direction.' },
    ],
    amber: [
      { q: 'A car of mass 1000 kg has a driving force of 3000 N and experiences a resistance of 1000 N. Find its acceleration.', marks: 3, marks_scheme: '1 mark: resultant force = 3000 − 1000. 1 mark: resultant = 2000 N. 1 mark: apply F = ma to give a = 2000/1000 = 2 m s⁻².' },
    ],
    red: [
      { q: 'Masses of 5 kg and 3 kg hang from the ends of a light inextensible string passing over a smooth pulley. Taking g = 9.8, find the acceleration of the system and the tension in the string.', marks: 6, marks_scheme: '1 mark: equation of motion for the 5 kg mass, 5g − T = 5a. 1 mark: equation of motion for the 3 kg mass, T − 3g = 3a. 1 mark: add the equations to eliminate T, giving 2g = 8a. 1 mark: a = 2.45 m s⁻². 1 mark: substitute back into either equation. 1 mark: T = 3(9.8 + 2.45) = 36.75 N.' },
    ],
  },

  '3.7': {
    green: [
      { q: 'A force of 12 N acts perpendicular to a rod at a point 0.5 m from a pivot. Find the moment of the force about the pivot, stating the units.', marks: 2, marks_scheme: '1 mark: moment = force × perpendicular distance = 12 × 0.5. 1 mark: moment = 6 N m.' },
    ],
    amber: [
      { q: 'A uniform plank of weight 200 N and length 4 m rests horizontally on supports at each end, with a load of 100 N at its midpoint. Find the reaction at each support.', marks: 4, marks_scheme: '1 mark: state that by symmetry the two reactions are equal. 1 mark: resolve vertically, R₁ + R₂ = 200 + 100 = 300. 1 mark: so each reaction is 150 N. 1 mark: confirm by taking moments about one support, which gives the same result.' },
    ],
    red: [
      { q: 'A non-uniform rod AB of length 4 m and weight 50 N rests horizontally on supports at A and B. The reaction at A is 20 N. Find the distance of the centre of mass from A.', marks: 5, marks_scheme: '1 mark: resolve vertically, R_A + R_B = 50. 1 mark: R_B = 30 N. 1 mark: take moments about A, letting the centre of mass be x from A. 1 mark: 50x = 30 × 4 = 120. 1 mark: x = 2.4 m from A.' },
    ],
  },

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_WRITTEN; }
