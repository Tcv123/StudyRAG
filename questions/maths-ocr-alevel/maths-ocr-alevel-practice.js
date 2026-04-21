/*
 * OCR A-Level Mathematics (H240) — Practice Question Bank
 * Keyed by H240 top-level topic.
 */

const MATHS_OCR_ALEVEL_PRACTICE = {
  '1.1': [
    { q: 'Prove by exhaustion that n² + 2 is not divisible by 4 for any integer n.', options: ['Check n ≡ 0 (mod 4): n² + 2 ≡ 2','Check n ≡ 1: n² + 2 ≡ 3','Check n ≡ 2: n² + 2 ≡ 2','All of the above show n² + 2 is never ≡ 0 (mod 4)'], answer: 3, explanation: 'By exhaustion on n mod 4: n² + 2 mod 4 ∈ {2, 3, 2, 3}, never 0.' },
  ],
  '1.2': [
    { q: 'Solve 2x² − 3x − 2 = 0 by factorisation.', options: ['x = 2, x = −1/2','x = −2, x = 1/2','x = 1, x = −2','x = 2, x = 1/2'], answer: 0, explanation: 'Factor (2x + 1)(x − 2) = 0 ⇒ x = −1/2 or x = 2.' },
  ],
  '1.3': [
    { q: 'The line y = 2x + 3 is perpendicular to which of these?', options: ['y = 2x − 1','y = −x/2 + 5','y = x/2 + 1','y = −2x + 7'], answer: 1, explanation: 'Perpendicular gradient is −1/2. y = −x/2 + 5 has gradient −1/2.' },
  ],
  '1.4': [
    { q: 'Find the sum of the first 10 terms of a geometric series with first term 2 and common ratio 3.', options: ['2·(3¹⁰ − 1)/2 = 3¹⁰ − 1 = 59048','2 · 10 = 20','59049','29524'], answer: 0, explanation: 'Sum = a(r^n − 1)/(r − 1) = 2(59049 − 1)/2 = 59048.' },
  ],
  '1.5': [
    { q: 'Express 3 sin x + 4 cos x as R sin(x + α).', options: ['5 sin(x + arctan(4/3))','5 cos(x + α)','7 sin x','sin(x + π/4)'], answer: 0, explanation: 'R = √(9 + 16) = 5; tan α = 4/3 so α = arctan(4/3).' },
  ],
  '1.6': [
    { q: 'Solve 3^x = 20, giving answer to 3 significant figures.', options: ['x = 2.73','x = 2.00','x = 6.67','x = 1.30'], answer: 0, explanation: 'x = log(20)/log(3) = 1.301/0.477 ≈ 2.73.' },
  ],
  '1.7': [
    { q: 'Find the gradient of y = x·ln(x) at x = e.', options: ['ln(e) + 1 = 2','e','1/e','ln e'], answer: 0, explanation: 'dy/dx = ln x + 1 (product rule); at x = e, gradient = ln e + 1 = 2.' },
  ],
  '1.8': [
    { q: 'Find ∫ x·e^x dx.', options: ['xe^x − e^x + C','x²e^x/2 + C','e^x + C','xe^x + C'], answer: 0, explanation: 'Integration by parts: u = x, dv = e^x dx ⇒ xe^x − ∫ e^x dx = xe^x − e^x + C.' },
  ],
  '1.9': [
    { q: 'Use the trapezium rule with 4 strips to estimate ∫_0^2 x² dx.', options: ['2.75','8/3 ≈ 2.667','2.25','3.00'], answer: 0, explanation: 'h = 0.5. Values at x = 0, 0.5, 1, 1.5, 2: y = 0, 0.25, 1, 2.25, 4. T = 0.5/2 · (0 + 2(0.25+1+2.25) + 4) = 0.25 · 11 = 2.75.' },
  ],
  '1.10': [
    { q: 'Find the angle between a = i + 2j and b = 2i − j.', options: ['90°','45°','60°','180°'], answer: 0, explanation: 'a·b = 2 − 2 = 0 ⇒ vectors are perpendicular, angle = 90°.' },
  ],
  '2.1': [
    { q: 'For X ~ N(10, 4), find P(X < 12).', options: ['≈ 0.8413','0.5','0.25','0.9772'], answer: 0, explanation: 'Z = (12 − 10)/2 = 1. P(Z < 1) ≈ 0.8413.' },
  ],
  '2.2': [
    { q: 'A projectile is launched at 20 m/s at 30° to the horizontal. Its range (g = 9.8) is approximately:', options: ['35.3 m','40.0 m','20.0 m','50.0 m'], answer: 0, explanation: 'R = u² sin(2α)/g = 400·sin(60°)/9.8 = 400·0.866/9.8 ≈ 35.3 m.' },
  ],
};

if (typeof module !== 'undefined') { module.exports = MATHS_OCR_ALEVEL_PRACTICE; }
