/*
 * OCR A-Level Mathematics (H240) — Written (long-answer) Question Bank
 * Keyed by H240 top-level topic.
 * Each entry: { green: [{ q, marks, marks_scheme }], amber: [...], red: [...] }.
 */

const MATHS_OCR_ALEVEL_WRITTEN = {
  '1.1': { green: [
    { q: 'Prove by deduction that the sum of two consecutive integers is odd.', marks: 3, marks_scheme: '1 mark: let the integers be n and n+1. 1 mark: sum = 2n + 1. 1 mark: 2n is even so 2n + 1 is odd.' },
  ], amber: [
    { q: 'Prove by contradiction that √2 is irrational.', marks: 5, marks_scheme: '1 mark: assume √2 = p/q in lowest terms. 1 mark: 2q² = p² so p² even ⇒ p even. 1 mark: let p = 2k so q² = 2k² ⇒ q² even ⇒ q even. 1 mark: both p and q even contradicts lowest terms. 1 mark: therefore √2 is irrational.' },
  ], red: [] },
  '1.2': { green: [{ q: 'Factorise 2x² + 7x − 15.', marks: 2, marks_scheme: '1 mark: identify factors (2x − 3)(x + 5). 1 mark: verify by expansion.' }], amber: [], red: [] },
  '1.3': { green: [{ q: 'Find the equation of the circle with centre (2, −1) and radius 4.', marks: 2, marks_scheme: '1 mark: (x−2)² + (y+1)² form. 1 mark: = 16.' }], amber: [], red: [] },
  '1.4': { green: [{ q: 'Find the sum of the first 20 terms of an arithmetic sequence with first term 3 and common difference 5.', marks: 3, marks_scheme: '1 mark: S_n = n/2(2a + (n-1)d). 1 mark: substitute a = 3, d = 5, n = 20. 1 mark: S_20 = 10(6 + 95) = 1010.' }], amber: [], red: [] },
  '1.5': { green: [{ q: 'Solve sin(x) = √3/2 for 0 ≤ x < 2π.', marks: 3, marks_scheme: '1 mark: principal value x = π/3. 1 mark: symmetric second solution x = π − π/3 = 2π/3. 1 mark: confirm no other solutions in range.' }], amber: [], red: [] },
  '1.6': { green: [{ q: 'Solve 2^(x+1) = 32.', marks: 2, marks_scheme: '1 mark: 32 = 2⁵ so x + 1 = 5. 1 mark: x = 4.' }], amber: [], red: [] },
  '1.7': { green: [{ q: 'Find dy/dx if y = 3x³ − 4x² + 5x − 7.', marks: 2, marks_scheme: '1 mark: apply power rule termwise. 1 mark: dy/dx = 9x² − 8x + 5.' }], amber: [], red: [] },
  '1.8': { green: [{ q: 'Evaluate ∫_1^3 (2x + 1) dx.', marks: 3, marks_scheme: '1 mark: antiderivative x² + x. 1 mark: apply limits. 1 mark: [9 + 3] − [1 + 1] = 10.' }], amber: [], red: [] },
  '1.9': { green: [{ q: 'Using Newton-Raphson, find one iteration from x₀ = 2 for f(x) = x³ − 5.', marks: 3, marks_scheme: '1 mark: f(2) = 3 and f\'(2) = 12. 1 mark: x₁ = 2 − 3/12. 1 mark: x₁ = 1.75.' }], amber: [], red: [] },
  '1.10': { green: [{ q: 'Find the magnitude of the vector a = 2i − 3j + 6k.', marks: 2, marks_scheme: '1 mark: |a|² = 4 + 9 + 36. 1 mark: |a| = 7.' }], amber: [], red: [] },
  '2.1': { green: [{ q: 'For X ~ B(10, 0.4), calculate P(X = 3).', marks: 3, marks_scheme: '1 mark: use binomial formula. 1 mark: 10C3 · 0.4³ · 0.6⁷. 1 mark: ≈ 0.2150.' }], amber: [], red: [] },
  '2.2': { green: [{ q: 'A particle starts from rest and accelerates at 2 m/s² for 5 s. Find its velocity and displacement.', marks: 4, marks_scheme: '1 mark: v = u + at. 1 mark: v = 10 m/s. 1 mark: s = ut + ½at². 1 mark: s = 25 m.' }], amber: [], red: [] },
};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_ALEVEL_WRITTEN; }
