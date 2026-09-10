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

};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_B_ALEVEL_WRITTEN; }
