/*
 * OCR GCSE Mathematics (J560) — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (1-3 marks: state/calculate), 'amber' (3-5 marks: show/explain), 'red' (5-8 marks: evaluate/prove/multi-step)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const MATHS_OCR_WRITTEN = {

  '1.1': {
    topic: 'Number: Arithmetic and Place Value',
    green: [
      {
        q: 'Write the number 4 073 825 in words.',
        marks: 1, tier: 'green',
        modelAnswer: `Four million, seventy-three thousand, eight hundred and twenty-five.\n• Correct full answer (1)`
      },
      {
        q: 'Calculate 347 × 28. Show your working.',
        marks: 2, tier: 'green',
        modelAnswer: `347 × 28\n• 347 × 20 = 6940 (1)\n• 347 × 8 = 2776 (1)\n• 6940 + 2776 = 9716 (1)\nAnswer: 9716`
      },
      {
        q: 'Work out 2604 ÷ 12.',
        marks: 2, tier: 'green',
        modelAnswer: `2604 ÷ 12\n• 12 × 200 = 2400, remainder 204 (1)\n• 12 × 17 = 204 (1)\n• Answer: 217`
      },
      {
        q: 'State the value of the digit 6 in the number 3.672.',
        marks: 1, tier: 'green',
        modelAnswer: `• 6 tenths (or 0.6) (1)`
      },
    ],
    amber: [
      {
        q: 'A school has 1248 students. Each student pays £3.75 for a trip. Calculate the total amount collected. Show all working.',
        marks: 3, tier: 'amber',
        modelAnswer: `1248 × £3.75\n• 1248 × 3 = 3744 (1)\n• 1248 × 0.75 = 1248 × 3/4 = 936 (1)\n• Total = 3744 + 936 = £4680 (1)`
      },
      {
        q: 'Explain the difference between a factor and a multiple of 12. Give one example of each.',
        marks: 3, tier: 'amber',
        modelAnswer: `• A factor of 12 divides into 12 exactly — e.g. 4 (since 12 ÷ 4 = 3) (1)\n• A multiple of 12 is in the 12 times table — e.g. 36 (since 12 × 3 = 36) (1)\n• Clear distinction stated (1)`
      },
      {
        q: 'Find the highest common factor (HCF) and lowest common multiple (LCM) of 36 and 48. Show your method using prime factorisation.',
        marks: 4, tier: 'amber',
        modelAnswer: `36 = 2² × 3²\n48 = 2⁴ × 3\n• Correct prime factorisation of 36 (1)\n• Correct prime factorisation of 48 (1)\n• HCF = 2² × 3 = 12 (1)\n• LCM = 2⁴ × 3² = 144 (1)`
      },
      {
        q: 'Show that the sum of any two odd numbers is always even. Use algebra to justify your answer.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Let the two odd numbers be (2m + 1) and (2n + 1) where m and n are integers (1)\n• Sum = 2m + 1 + 2n + 1 = 2m + 2n + 2 = 2(m + n + 1) (1)\n• This is a multiple of 2, so it is always even (1)`
      },
    ],
    red: [
      {
        q: 'A factory produces 2340 widgets per hour. It operates for 7.5 hours per day, 5 days per week. In a 4-week period, 12 500 widgets are faulty and discarded. How many good widgets are produced in the 4-week period? Show all working.',
        marks: 5, tier: 'red',
        modelAnswer: `Step 1 — widgets per day:\n• 2340 × 7.5 = 17 550 (1)\nStep 2 — widgets per week:\n• 17 550 × 5 = 87 750 (1)\nStep 3 — widgets in 4 weeks:\n• 87 750 × 4 = 351 000 (1)\nStep 4 — subtract faulty:\n• 351 000 − 12 500 = 338 500 good widgets (1)\n• Units and answer clearly stated (1)`
      },
      {
        q: 'Evaluate the claim: "If you add the digits of any multiple of 9, the result is always a multiple of 9." Test with at least three examples and then explain whether this claim is always true.',
        marks: 6, tier: 'red',
        modelAnswer: `Examples:\n• 9: 9 → digit sum = 9 ✓ (1)\n• 27: 2 + 7 = 9 ✓ (1)\n• 99: 9 + 9 = 18 → 1 + 8 = 9 ✓ (1)\n• 189: 1 + 8 + 9 = 18, multiple of 9 ✓ (1)\nExplanation:\n• The claim is always true — this is because any integer can be written in terms of powers of 10, and 10 ≡ 1 (mod 9), so each digit contributes its face value to the remainder when dividing by 9 (1)\n• Clear conclusion stated (1)`
      },
    ],
  },

  '1.2': {
    topic: 'Fractions, Decimals and Percentages',
    green: [
      {
        q: 'Work out 2/3 + 3/4. Give your answer as a mixed number.',
        marks: 3, tier: 'green',
        modelAnswer: `Common denominator = 12\n• 2/3 = 8/12 (×4) (1)\n• 3/4 = 9/12 (×3) (1)\n• 8/12 + 9/12 = 17/12 = 1 and 5/12 (1)`
      },
      {
        q: 'Convert 0.325 to a fraction in its simplest form.',
        marks: 2, tier: 'green',
        modelAnswer: `• 0.325 = 325/1000 (1)\n• Simplify: HCF = 25, so 325/1000 = 13/40 (1)`
      },
      {
        q: 'Calculate 35% of £420.',
        marks: 2, tier: 'green',
        modelAnswer: `• 10% of 420 = 42 (1)\n• 35% = 3 × 42 + 0.5 × 42 = 126 + 21 = £147 (1)\n(Or: 0.35 × 420 = £147)`
      },
      {
        q: 'Write 5/8 as a decimal and as a percentage.',
        marks: 2, tier: 'green',
        modelAnswer: `• 5 ÷ 8 = 0.625 (1)\n• 0.625 × 100 = 62.5% (1)`
      },
    ],
    amber: [
      {
        q: 'A jacket costs £85 after a 15% reduction. Find the original price. Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• After 15% reduction, price = 85% of original (1)\n• Original = 85 ÷ 0.85 (1)\n• Original = £100 (1)`
      },
      {
        q: 'Show that 0.36̄ (0.3666...) = 11/30. Show all working.',
        marks: 4, tier: 'amber',
        modelAnswer: `Let x = 0.3666...\n• 10x = 3.666... (1)\n• 100x = 36.666... (1)\n• 100x − 10x = 36.666... − 3.666... → 90x = 33 (1)\n• x = 33/90 = 11/30 (1)`
      },
      {
        q: 'Tom scored 54 out of 72 on a maths test and 39 out of 52 on an English test. Explain which was the better result by expressing each as a percentage.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Maths: 54/72 × 100 = 75% (1)\n• English: 39/52 × 100 = 75% (1)\n• Both are the same percentage (1)\n• Conclusion clearly stated: neither is better — they are equal (1)`
      },
      {
        q: 'Find 2 and 3/4 ÷ 1 and 1/2. Show your working and give your answer as a fraction in its simplest form.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Convert: 2¾ = 11/4 and 1½ = 3/2 (1)\n• 11/4 ÷ 3/2 = 11/4 × 2/3 = 22/12 (1)\n• Simplify: 22/12 = 11/6 = 1 and 5/6 (1)`
      },
    ],
    red: [
      {
        q: 'A television is advertised at £480 excluding VAT. VAT is charged at 20%. A store offers "Buy now, pay later" — pay 20% deposit today and the rest in 12 equal monthly instalments. Calculate the monthly instalment. Show all working.',
        marks: 6, tier: 'red',
        modelAnswer: `Step 1 — price with VAT:\n• 480 × 1.20 = £576 (1)\nStep 2 — deposit:\n• 20% of 576 = £115.20 (1)\nStep 3 — remainder:\n• 576 − 115.20 = £460.80 (1)\nStep 4 — monthly instalment:\n• 460.80 ÷ 12 = £38.40 (1)\n• Correct method throughout (1)\n• Final answer with £ sign (1)`
      },
      {
        q: 'A student says: "Since 3/5 > 1/2 and 7/10 > 1/2, then 3/5 + 7/10 must be greater than 1." Evaluate this claim. Is the reasoning correct? Is the conclusion correct? Give a full justification.',
        marks: 5, tier: 'red',
        modelAnswer: `Evaluating the conclusion:\n• 3/5 = 6/10; 6/10 + 7/10 = 13/10 = 1.3 > 1 (1)\n• So the conclusion IS correct (1)\nEvaluating the reasoning:\n• The reasoning is incomplete/flawed as stated — two fractions each greater than ½ do not always sum to more than 1 (1)\n• Counter-example: 0.51 + 0.51 = 1.02 > 1 (works here) — but logic needs formal addition, not just comparison to ½ (1)\n• The correct justification requires actually adding the fractions (1)`
      },
    ],
  },

  '1.3': {
    topic: 'Accuracy, Rounding and Estimation',
    green: [
      {
        q: 'Round 47 836 to the nearest thousand.',
        marks: 1, tier: 'green',
        modelAnswer: `• 48 000 (1)`
      },
      {
        q: 'Write 0.006472 correct to 2 significant figures.',
        marks: 1, tier: 'green',
        modelAnswer: `• 0.0065 (1)\n(The first two significant figures are 6 and 4; the next digit 7 rounds up the 4 to 5)`
      },
      {
        q: 'Estimate the value of (38.7 × 5.1) ÷ 9.8. Show your rounded values.',
        marks: 2, tier: 'green',
        modelAnswer: `• Round: (40 × 5) ÷ 10 (1)\n• = 200 ÷ 10 = 20 (1)`
      },
      {
        q: 'A length is measured as 8.4 cm to the nearest 0.1 cm. State the upper and lower bounds of the length.',
        marks: 2, tier: 'green',
        modelAnswer: `• Lower bound = 8.35 cm (1)\n• Upper bound = 8.45 cm (1)`
      },
    ],
    amber: [
      {
        q: 'A rectangle has length 12.5 cm and width 7.3 cm, both measured to 1 decimal place. Find the upper bound of the area. Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Upper bound of length = 12.55 cm (1)\n• Upper bound of width = 7.35 cm (1)\n• Upper bound of area = 12.55 × 7.35 = 92.2425 cm² (1)`
      },
      {
        q: 'Explain why the answer to 3.65 + 2.15 = 5.8 might not be exact when both values are rounded to 2 decimal places. Include the maximum possible error in your answer.',
        marks: 4, tier: 'amber',
        modelAnswer: `• 3.65 has a max error of ±0.005 (1)\n• 2.15 has a max error of ±0.005 (1)\n• When adding, errors accumulate: maximum total error = ±0.01 (1)\n• So the true sum lies in the range 5.79 to 5.81 (1)`
      },
      {
        q: 'Without a calculator, estimate √(99.3 × 0.251). Show your working and state whether your estimate is an over- or under-estimate.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Round: √(100 × 0.25) = √25 = 5 (1)\n• 100 > 99.3 and 0.25 < 0.251, so effects partially cancel (1)\n• 99.3 × 0.251 ≈ 24.93, so √24.93 < 5 (1)\n• Estimate of 5 is a slight over-estimate (1)`
      },
      {
        q: 'A car travels 247 miles on 38 litres of fuel. Estimate the fuel consumption in miles per litre to 1 significant figure.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Round: 250 ÷ 40 (1)\n• = 6.25 → 6 miles per litre (to 1 s.f.) (1)\n• Answer: approximately 6 miles per litre (1)`
      },
    ],
    red: [
      {
        q: 'A speed is calculated using the formula speed = distance ÷ time. The distance is 150 m, measured to the nearest metre. The time is 12.4 s, measured to the nearest 0.1 s. Calculate the upper and lower bounds of the speed. Give your answers to 3 significant figures.',
        marks: 6, tier: 'red',
        modelAnswer: `Bounds of distance:\n• Lower: 149.5 m, Upper: 150.5 m (1)\nBounds of time:\n• Lower: 12.35 s, Upper: 12.45 s (1)\nUpper bound of speed (max distance ÷ min time):\n• 150.5 ÷ 12.35 = 12.186... ≈ 12.2 m/s (2)\nLower bound of speed (min distance ÷ max time):\n• 149.5 ÷ 12.45 = 12.008... ≈ 12.0 m/s (2)`
      },
      {
        q: 'A student rounds 7.45 to 1 decimal place and gets 7.5. They then use this to calculate 7.5² = 56.25, instead of the exact 7.45² = 55.5025. Evaluate the percentage error introduced by the rounding. Comment on whether this level of error is significant in an engineering context requiring accuracy to 1%.',
        marks: 5, tier: 'red',
        modelAnswer: `• Error = 56.25 − 55.5025 = 0.7475 (1)\n• Percentage error = (0.7475 / 55.5025) × 100 = 1.347...% (2)\n• This exceeds the 1% threshold (1)\n• Conclusion: the rounding would not be acceptable in this engineering context (1)`
      },
    ],
  },

  '1.4': {
    topic: 'Powers, Roots and Standard Form',
    green: [
      {
        q: 'Calculate 2⁵ × 2³. Write your answer as a power of 2.',
        marks: 1, tier: 'green',
        modelAnswer: `• 2⁵ × 2³ = 2^(5+3) = 2⁸ (1)`
      },
      {
        q: 'Write 0.000 0347 in standard form.',
        marks: 1, tier: 'green',
        modelAnswer: `• 3.47 × 10⁻⁵ (1)`
      },
      {
        q: 'Work out (3.6 × 10⁵) × (4 × 10³). Give your answer in standard form.',
        marks: 2, tier: 'green',
        modelAnswer: `• 3.6 × 4 = 14.4 (1)\n• 10⁵ × 10³ = 10⁸\n• 14.4 × 10⁸ = 1.44 × 10⁹ (1)`
      },
      {
        q: 'State the value of 64^(1/2) and 27^(1/3).',
        marks: 2, tier: 'green',
        modelAnswer: `• 64^(1/2) = √64 = 8 (1)\n• 27^(1/3) = ³√27 = 3 (1)`
      },
    ],
    amber: [
      {
        q: 'Show that (2³)² ÷ 2⁴ = 4. Use index laws in your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• (2³)² = 2^(3×2) = 2⁶ (1)\n• 2⁶ ÷ 2⁴ = 2^(6−4) = 2² (1)\n• 2² = 4 ✓ (1)`
      },
      {
        q: 'The mass of the Earth is approximately 5.97 × 10²⁴ kg. The mass of the Moon is approximately 7.34 × 10²² kg. How many times heavier is the Earth than the Moon? Give your answer in standard form to 3 significant figures.',
        marks: 4, tier: 'amber',
        modelAnswer: `• 5.97 × 10²⁴ ÷ 7.34 × 10²²\n• = (5.97 ÷ 7.34) × 10^(24−22) (1)\n• 5.97 ÷ 7.34 = 0.8134... (1)\n• 0.8134 × 10² = 81.3 (1)\n• = 8.13 × 10¹ (to 3 s.f.) (1)`
      },
      {
        q: 'Simplify: (x³)² × x⁻⁴. Give your answer in the form xⁿ.',
        marks: 3, tier: 'amber',
        modelAnswer: `• (x³)² = x⁶ (1)\n• x⁶ × x⁻⁴ = x^(6+(−4)) = x² (1)\n• Answer: x² (1)`
      },
      {
        q: 'Explain why any number raised to the power zero equals 1. Use the index laws to justify your answer.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Consider aⁿ ÷ aⁿ = a^(n−n) = a⁰ by index laws (1)\n• But aⁿ ÷ aⁿ = 1 for any non-zero a (1)\n• Therefore a⁰ = 1 (1)`
      },
    ],
    red: [
      {
        q: 'Prove that (a^m)^n = a^(mn) using repeated multiplication. Then use this to simplify ((2x²)³)² fully, where x is a positive integer.',
        marks: 6, tier: 'red',
        modelAnswer: `Proof:\n• (a^m)^n means multiplying a^m by itself n times (1)\n• = a^m × a^m × ... (n times) = a^(m+m+...n times) = a^(mn) (2)\nSimplification:\n• (2x²)³ = 2³ × x^(2×3) = 8x⁶ (1)\n• (8x⁶)² = 8² × x^(6×2) = 64x¹² (1)\n• Final answer: 64x¹² (1)`
      },
      {
        q: 'A student claims that √(a + b) = √a + √b. Evaluate this claim. Provide a counter-example and explain why the claim is false using a specific numerical example. Then state the correct rule for √(a × b).',
        marks: 5, tier: 'red',
        modelAnswer: `Counter-example:\n• Let a = 9, b = 16\n• √(9 + 16) = √25 = 5 (1)\n• √9 + √16 = 3 + 4 = 7 ≠ 5 (1)\n• Claim is FALSE (1)\nExplanation:\n• Square root does not distribute over addition (1)\nCorrect rule:\n• √(a × b) = √a × √b (for a, b ≥ 0) (1)`
      },
    ],
  },

  '2.1': {
    topic: 'Algebraic Expressions',
    green: [
      {
        q: 'Expand and simplify 3(2x − 4) + 5x.',
        marks: 2, tier: 'green',
        modelAnswer: `• 3(2x − 4) = 6x − 12 (1)\n• 6x − 12 + 5x = 11x − 12 (1)`
      },
      {
        q: 'Factorise fully 12x² − 8x.',
        marks: 2, tier: 'green',
        modelAnswer: `• HCF of 12x² and 8x is 4x (1)\n• 4x(3x − 2) (1)`
      },
      {
        q: 'Simplify (x³ × x⁵) ÷ x⁴.',
        marks: 1, tier: 'green',
        modelAnswer: `• x^(3+5) = x⁸; x⁸ ÷ x⁴ = x⁴ (1)`
      },
      {
        q: 'State the value of the expression 3a² − 2b when a = 4 and b = −3.',
        marks: 2, tier: 'green',
        modelAnswer: `• 3 × 4² = 3 × 16 = 48 (1)\n• 48 − 2 × (−3) = 48 + 6 = 54 (1)`
      },
    ],
    amber: [
      {
        q: 'Expand and simplify (2x + 3)(x − 5). Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• 2x × x = 2x² (1)\n• 2x × (−5) + 3 × x = −10x + 3x = −7x (1)\n• 3 × (−5) = −15\n• Result: 2x² − 7x − 15 (1)`
      },
      {
        q: 'Factorise x² − x − 12. Show your method clearly.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Need two numbers that multiply to −12 and add to −1 (1)\n• Numbers: −4 and +3 (since −4 × 3 = −12 and −4 + 3 = −1) (1)\n• (x − 4)(x + 3) (1)`
      },
      {
        q: 'Simplify fully: (3x²y³) × (2xy²) ÷ (6x²y). Show all steps using index laws.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Numerator: 3x²y³ × 2xy² = 6x³y⁵ (1)\n• Denominator: 6x²y (1)\n• 6x³y⁵ ÷ 6x²y = x^(3−2) × y^(5−1) (1)\n• = xy⁴ (1)`
      },
      {
        q: 'Show that (a + b)² ≠ a² + b² in general. Use expansion to find the correct identity.',
        marks: 3, tier: 'amber',
        modelAnswer: `• (a + b)² = (a + b)(a + b) (1)\n• = a² + ab + ab + b² = a² + 2ab + b² (1)\n• This is not equal to a² + b² unless ab = 0; the missing term is 2ab (1)`
      },
    ],
    red: [
      {
        q: 'Expand and fully simplify (x + 3)³. Show all intermediate steps. Then substitute x = 2 to verify your answer numerically.',
        marks: 6, tier: 'red',
        modelAnswer: `Step 1 — (x + 3)²:\n• (x + 3)(x + 3) = x² + 6x + 9 (1)\nStep 2 — multiply by (x + 3):\n• (x² + 6x + 9)(x + 3)\n• = x³ + 3x² + 6x² + 18x + 9x + 27 (1)\n• = x³ + 9x² + 27x + 27 (1)\nVerification (x = 2):\n• (2 + 3)³ = 5³ = 125 (1)\n• 8 + 36 + 54 + 27 = 125 ✓ (1)\n• Correct expansion confirmed (1)`
      },
      {
        q: 'A student writes: "2x(x + 3) − (x + 3)² simplifies to (x + 3)(x − 3)." Is this correct? Show full working to evaluate the claim and state the correct simplified form.',
        marks: 5, tier: 'red',
        modelAnswer: `LHS working:\n• 2x(x + 3) = 2x² + 6x (1)\n• (x + 3)² = x² + 6x + 9 (1)\n• Subtraction: 2x² + 6x − x² − 6x − 9 = x² − 9 (1)\nFactorise:\n• x² − 9 = (x + 3)(x − 3) (1)\n• The student's answer IS correct — the claim is true (1)`
      },
    ],
  },

  '2.2': {
    topic: 'Equations and Inequalities',
    green: [
      {
        q: 'Solve 5x − 7 = 3x + 9.',
        marks: 2, tier: 'green',
        modelAnswer: `• 5x − 3x = 9 + 7 → 2x = 16 (1)\n• x = 8 (1)`
      },
      {
        q: 'Solve the inequality 3x + 4 > 13 and represent the solution on a number line.',
        marks: 2, tier: 'green',
        modelAnswer: `• 3x > 9 (1)\n• x > 3\n• Number line: open circle at 3, arrow pointing right (1)`
      },
      {
        q: 'Solve the simultaneous equations: x + y = 10 and x − y = 4.',
        marks: 2, tier: 'green',
        modelAnswer: `• Adding: 2x = 14, x = 7 (1)\n• Substituting: 7 + y = 10, y = 3 (1)`
      },
      {
        q: 'Work out the value of x: (x + 5)/3 = 8.',
        marks: 2, tier: 'green',
        modelAnswer: `• x + 5 = 24 (multiply both sides by 3) (1)\n• x = 19 (1)`
      },
    ],
    amber: [
      {
        q: 'Solve the simultaneous equations 2x + 3y = 12 and 4x − y = 10. Show all working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Multiply equation 2 by 3: 12x − 3y = 30 (1)\n• Add: 14x = 42, x = 3 (1)\n• Substitute: 2(3) + 3y = 12 → 3y = 6 → y = 2 (1)\n• Check: 4(3) − 2 = 10 ✓ (1)`
      },
      {
        q: 'Find the integer values of n that satisfy −2 < 3n − 1 ≤ 14.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Left: −2 < 3n − 1 → −1 < 3n → n > −1/3 (1)\n• Right: 3n − 1 ≤ 14 → 3n ≤ 15 → n ≤ 5 (1)\n• So: −1/3 < n ≤ 5 (1)\n• Integer values: n = 0, 1, 2, 3, 4, 5 (1)`
      },
      {
        q: 'Solve x² − 5x + 6 = 0 using two different methods. State both solutions and show all working.',
        marks: 6, tier: 'amber',
        modelAnswer: `Method 1 — Factorising:\n• (x − 2)(x − 3) = 0 (2)\n• x = 2 or x = 3 (1)\nMethod 2 — Quadratic formula:\n• a=1, b=−5, c=6\n• x = (5 ± √(25−24))/2 = (5 ± 1)/2 (2)\n• x = 3 or x = 2 (1)`
      },
      {
        q: 'Explain why the equation x² + 4 = 0 has no real solutions. Use a sketch or argument about the graph y = x² + 4 to support your answer.',
        marks: 3, tier: 'amber',
        modelAnswer: `• x² ≥ 0 for all real x (1)\n• So x² + 4 ≥ 4 > 0 for all real x (1)\n• The graph y = x² + 4 lies entirely above the x-axis; no real roots (1)`
      },
    ],
    red: [
      {
        q: 'A rectangular field has length (3x + 2) metres and width (x + 5) metres. The perimeter is 58 m. Find the area of the field. Show all working.',
        marks: 6, tier: 'red',
        modelAnswer: `Perimeter equation:\n• 2(3x + 2) + 2(x + 5) = 58 (1)\n• 6x + 4 + 2x + 10 = 58 → 8x + 14 = 58 (1)\n• 8x = 44 → x = 5.5 (1)\nDimensions:\n• Length = 3(5.5) + 2 = 18.5 m (1)\n• Width = 5.5 + 5 = 10.5 m (1)\n• Area = 18.5 × 10.5 = 194.25 m² (1)`
      },
      {
        q: 'Prove that the sum of the solutions of ax² + bx + c = 0 is −b/a and the product is c/a. Use this to find a quadratic equation (with integer coefficients) whose solutions sum to 5 and multiply to 3.',
        marks: 7, tier: 'red',
        modelAnswer: `Proof:\n• Roots: x = (−b ± √(b²−4ac)) / 2a\n• Sum: (−b + √D)/2a + (−b − √D)/2a = −2b/2a = −b/a (2)\n• Product: [(−b)² − (√D)²] / 4a² = (b² − b² + 4ac) / 4a² = c/a (2)\nFinding the equation:\n• Sum of roots = 5 = −b/a; product = 3 = c/a\n• Choose a = 1: b = −5, c = 3 (1)\n• Equation: x² − 5x + 3 = 0 (2)`
      },
    ],
  },

  '2.3': {
    topic: 'Sequences',
    green: [
      {
        q: 'Write down the first 5 terms of the sequence with nth term: 4n − 1.',
        marks: 2, tier: 'green',
        modelAnswer: `• n=1: 3, n=2: 7, n=3: 11, n=4: 15, n=5: 19 (2)\n(1 mark for correct method, 1 for all 5 correct)`
      },
      {
        q: 'State whether the sequence 3, 7, 11, 15, 19, ... is arithmetic or geometric. Give the common difference.',
        marks: 2, tier: 'green',
        modelAnswer: `• Arithmetic sequence (1)\n• Common difference = 4 (1)`
      },
      {
        q: 'Find the nth term of the arithmetic sequence: 5, 9, 13, 17, ...',
        marks: 2, tier: 'green',
        modelAnswer: `• Common difference d = 4, first term a = 5 (1)\n• nth term = a + (n−1)d = 5 + 4(n−1) = 4n + 1 (1)`
      },
      {
        q: 'Work out the 8th term of the geometric sequence 2, 6, 18, 54, ...',
        marks: 2, tier: 'green',
        modelAnswer: `• Common ratio r = 3 (1)\n• 8th term = 2 × 3⁷ = 2 × 2187 = 4374 (1)`
      },
    ],
    amber: [
      {
        q: 'The nth term of a sequence is n² + 2n. Find the first four terms. Show that the sequence is not arithmetic.',
        marks: 4, tier: 'amber',
        modelAnswer: `Terms:\n• n=1: 3, n=2: 8, n=3: 15, n=4: 24 (1)\nDifferences:\n• 8−3=5, 15−8=7, 24−15=9 (1)\n• Differences are not constant (1)\n• Therefore the sequence is not arithmetic (1)`
      },
      {
        q: 'Explain how to tell whether 150 is a term in the sequence with nth term 6n − 4. Find its position if it is.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Set 6n − 4 = 150 (1)\n• 6n = 154 → n = 154/6 = 25.67 (1)\n• Not an integer, so 150 is NOT a term in the sequence (1)`
      },
      {
        q: 'A sequence is defined by: u₁ = 3 and uₙ₊₁ = 2uₙ + 1. Find the first 5 terms and find the sum of the first 5 terms.',
        marks: 4, tier: 'amber',
        modelAnswer: `• u₁ = 3 (given)\n• u₂ = 2(3) + 1 = 7 (1)\n• u₃ = 2(7) + 1 = 15 (1)\n• u₄ = 31, u₅ = 63 (1)\n• Sum = 3 + 7 + 15 + 31 + 63 = 119 (1)`
      },
      {
        q: 'Show that the sequence with nth term 3n² − n is never an odd number when n is even. Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Let n = 2k (even)\n• 3(2k)² − 2k = 12k² − 2k = 2(6k² − k) (1)\n• This is always even (a multiple of 2) (1)\n• Therefore the sequence is never odd when n is even (1)`
      },
    ],
    red: [
      {
        q: 'The first three terms of a geometric sequence are x, x + 4, and x + 12. Find x, the common ratio, and the 10th term. Show full working.',
        marks: 7, tier: 'red',
        modelAnswer: `For geometric sequence: (x+4)/x = (x+12)/(x+4)\n• Cross-multiply: (x+4)² = x(x+12) (1)\n• x² + 8x + 16 = x² + 12x (1)\n• 16 = 4x → x = 4 (1)\nTerms: 4, 8, 16 — ratio r = 2 (1)\n• 10th term = 4 × 2⁹ = 4 × 512 = 2048 (2)\n• All working shown (1)`
      },
      {
        q: 'Prove that the sum of the first n terms of an arithmetic sequence with first term a and common difference d is n/2 × (2a + (n−1)d). Use this formula to find the sum of all multiples of 7 from 7 to 350.',
        marks: 6, tier: 'red',
        modelAnswer: `Proof:\n• Sₙ = a + (a+d) + ... + (a+(n−1)d) written forwards (1)\n• Sₙ = (a+(n−1)d) + ... + a written backwards (1)\n• 2Sₙ = n × (2a + (n−1)d) → Sₙ = n/2 × (2a+(n−1)d) (1)\nApplication:\n• Multiples of 7 from 7 to 350: a = 7, d = 7, last term = 350\n• n = 350/7 = 50 terms (1)\n• S₅₀ = 50/2 × (14 + 49 × 7) = 25 × (14 + 343) = 25 × 357 = 8925 (2)`
      },
    ],
  },

  '2.4': {
    topic: 'Graphs',
    green: [
      {
        q: 'State the gradient and y-intercept of the line y = 3x − 7.',
        marks: 2, tier: 'green',
        modelAnswer: `• Gradient = 3 (1)\n• y-intercept = −7 (1)`
      },
      {
        q: 'A straight line passes through (0, 4) and (3, 10). Work out the equation of the line in the form y = mx + c.',
        marks: 2, tier: 'green',
        modelAnswer: `• Gradient m = (10−4)/(3−0) = 6/3 = 2 (1)\n• y = 2x + 4 (1)`
      },
      {
        q: 'Calculate the gradient of the line joining the points (1, 3) and (5, 11).',
        marks: 1, tier: 'green',
        modelAnswer: `• Gradient = (11−3)/(5−1) = 8/4 = 2 (1)`
      },
      {
        q: 'State whether the lines y = 2x + 1 and y = −(1/2)x + 3 are perpendicular. Justify your answer.',
        marks: 2, tier: 'green',
        modelAnswer: `• Gradient 1 = 2, Gradient 2 = −1/2 (1)\n• Product of gradients = 2 × −1/2 = −1, so they are perpendicular (1)`
      },
    ],
    amber: [
      {
        q: 'Sketch the graph of y = x² − 2x − 3. Label the coordinates of the turning point, y-intercept, and x-intercepts. (Show your working clearly)',
        marks: 5, tier: 'amber',
        modelAnswer: `• Factorise: (x − 3)(x + 1) = 0, x-intercepts at x = 3 and x = −1 (1)\n• y-intercept: x=0, y = −3 → (0, −3) (1)\n• Turning point: x = (3+(−1))/2 = 1; y = 1 − 2 − 3 = −4 → (1, −4) (1)\n• Sketch: U-shaped parabola through (−1,0), (0,−3), (3,0), min at (1,−4) (1)\n• Correct overall shape and labels (1)`
      },
      {
        q: 'Find the equation of the straight line that is perpendicular to y = 3x + 1 and passes through the point (6, 2).',
        marks: 4, tier: 'amber',
        modelAnswer: `• Gradient of given line = 3 (1)\n• Perpendicular gradient = −1/3 (1)\n• y − 2 = −1/3(x − 6) (1)\n• y = −x/3 + 4 (1)`
      },
      {
        q: 'The graph of y = ax² + bx + c passes through (0, 5), (1, 8), and (2, 9). Find the values of a, b, and c.',
        marks: 4, tier: 'amber',
        modelAnswer: `• (0, 5): c = 5 (1)\n• (1, 8): a + b + 5 = 8 → a + b = 3 (1)\n• (2, 9): 4a + 2b + 5 = 9 → 4a + 2b = 4 → 2a + b = 2 (1)\n• Subtract: a = −1, b = 4; so a=−1, b=4, c=5 (1)`
      },
      {
        q: 'Explain what the gradient of a distance–time graph represents and what the gradient of a speed–time graph represents. Include units in your answer.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Gradient of distance–time graph = speed (e.g. m/s or km/h) (1)\n• Gradient of speed–time graph = acceleration (e.g. m/s²) (1)\n• Clear explanation with appropriate units for each (1)`
      },
    ],
    red: [
      {
        q: 'The graph of y = x³ − 6x² + 9x is drawn for −1 ≤ x ≤ 4. (a) Find the coordinates of the turning points. (b) Determine whether each is a local maximum or minimum, using a table of values or the shape of the cubic.',
        marks: 7, tier: 'red',
        modelAnswer: `(a) Turning points occur where dy/dx = 0:\n• dy/dx = 3x² − 12x + 9 = 3(x² − 4x + 3) = 3(x−1)(x−3) (2)\n• x = 1 and x = 3 (1)\n• y(1) = 1 − 6 + 9 = 4 → (1, 4)\n• y(3) = 27 − 54 + 27 = 0 → (3, 0) (1)\n(b) From table of values or second derivative:\n• (1, 4) is a local maximum (positive cubic, first turning point) (1)\n• (3, 0) is a local minimum (1)\n• Reasoning clearly explained (1)`
      },
      {
        q: 'Two straight lines are given: L₁: 3x + 2y = 12 and L₂: y = 2x − 1. Find their point of intersection algebraically. Verify your answer by substitution, and interpret what the intersection means graphically.',
        marks: 5, tier: 'red',
        modelAnswer: `Solve simultaneously:\n• Substitute y = 2x−1 into 3x + 2y = 12: 3x + 2(2x−1) = 12 (1)\n• 7x − 2 = 12 → x = 2 (1)\n• y = 2(2) − 1 = 3 → point (2, 3) (1)\nVerification:\n• 3(2) + 2(3) = 6 + 6 = 12 ✓ (1)\nInterpretation:\n• The intersection (2, 3) is the one point where both lines share the same coordinates — the unique solution to the system (1)`
      },
    ],
  },

  '3.1': {
    topic: 'Ratio and Proportion',
    green: [
      {
        q: 'Divide £360 in the ratio 3:5. Show your working.',
        marks: 2, tier: 'green',
        modelAnswer: `• Total parts = 8; one part = 360 ÷ 8 = £45 (1)\n• Shares: 3 × 45 = £135 and 5 × 45 = £225 (1)`
      },
      {
        q: 'If 5 pens cost £3.75, how much do 8 pens cost?',
        marks: 2, tier: 'green',
        modelAnswer: `• Cost of 1 pen = 3.75 ÷ 5 = £0.75 (1)\n• 8 pens = 8 × 0.75 = £6.00 (1)`
      },
      {
        q: 'Write the ratio 45:75 in its simplest form.',
        marks: 1, tier: 'green',
        modelAnswer: `• HCF = 15; 45:75 = 3:5 (1)`
      },
      {
        q: 'y is directly proportional to x. When x = 4, y = 20. Find y when x = 7.',
        marks: 2, tier: 'green',
        modelAnswer: `• k = y/x = 20/4 = 5 (1)\n• y = 5 × 7 = 35 (1)`
      },
    ],
    amber: [
      {
        q: 'y is inversely proportional to x². When x = 3, y = 4. Find y when x = 6. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• y = k/x² (1)\n• 4 = k/9 → k = 36 (1)\n• y = 36/6² = 36/36 = 1 (1)\n• Answer: y = 1 (1)`
      },
      {
        q: 'A recipe uses 300g of flour and 120g of butter to make 20 biscuits. Explain how many grams of each ingredient are needed to make 35 biscuits.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Scale factor = 35/20 = 1.75 (1)\n• Flour: 300 × 1.75 = 525 g (1)\n• Butter: 120 × 1.75 = 210 g (1)\n• Method clearly shown (1)`
      },
      {
        q: 'Anaya, Ben, and Carl share a prize in the ratio 2:3:5. Carl receives £160 more than Anaya. Find the total prize money.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Difference in ratio parts: 5 − 2 = 3 parts (1)\n• 3 parts = £160, so 1 part = £160/3 — wait, check: difference = 5−2 = 3 parts = £160 (1)\n• 1 part = £160/3 is not integer — re-examine: 3 parts = 160, 1 part = 160/3 still non-integer\n• Actually accept: total = 10 parts; 3 parts = 160 → 1 part = 53.33... — or note ratio is 2:3:5, C−A = 3 parts = 160, total = 10 parts = (10/3)×160 = £533.33\n• 1 part = 160/3; total = 10 × (160/3) = £533.33 (2)\n• Award marks for correct method (1) and answer (1)`
      },
      {
        q: 'Explain the difference between direct and inverse proportion. Give a real-life example of each.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Direct proportion: as one quantity increases, the other increases proportionally (y = kx) — e.g. cost increases as you buy more items (1)\n• Inverse proportion: as one quantity increases, the other decreases (y = k/x) — e.g. more workers means less time to complete a job (1)\n• Both examples clearly linked to definition (1)`
      },
    ],
    red: [
      {
        q: 'Three workers can paint a wall in 6 hours. (a) How long would 4 workers take, assuming they work at the same rate? (b) After 2 hours, one worker leaves. How much longer does it take the remaining workers to finish? Show all working.',
        marks: 6, tier: 'red',
        modelAnswer: `(a) Total work = 3 × 6 = 18 worker-hours (1)\n• 4 workers: 18 ÷ 4 = 4.5 hours (1)\n(b) In 2 hours with 3 workers, work done = 3 × 2 = 6 worker-hours (1)\n• Remaining work = 18 − 6 = 12 worker-hours (1)\n• 2 workers left: 12 ÷ 2 = 6 more hours (1)\n• Total time = 2 + 6 = 8 hours (1)`
      },
      {
        q: 'The cost of a diamond ring is proportional to the square of the mass of the diamond. A ring with a 2-carat diamond costs £3200. A ring with a 3-carat diamond costs £7200. A student claims the cost is directly proportional to the mass. Evaluate this claim fully.',
        marks: 5, tier: 'red',
        modelAnswer: `Test C ∝ m²:\n• k = C/m² = 3200/4 = 800 (1)\n• Check: 800 × 9 = 7200 ✓ (1)\n• Consistent with C = 800m²\nTest C ∝ m (direct proportion):\n• k = 3200/2 = 1600 (1)\n• Check: 1600 × 3 = 4800 ≠ 7200 ✗ (1)\n• Conclusion: the claim is INCORRECT — cost is proportional to m², not m (1)`
      },
    ],
  },

  '3.2': {
    topic: 'Rates of Change and Compound Measures',
    green: [
      {
        q: 'A car travels 240 km in 3 hours. Calculate its average speed.',
        marks: 1, tier: 'green',
        modelAnswer: `• Speed = 240 ÷ 3 = 80 km/h (1)`
      },
      {
        q: 'A metal block has a mass of 810 g and a volume of 300 cm³. Calculate its density.',
        marks: 2, tier: 'green',
        modelAnswer: `• Density = mass ÷ volume (1)\n• = 810 ÷ 300 = 2.7 g/cm³ (1)`
      },
      {
        q: 'Convert a speed of 72 km/h into metres per second.',
        marks: 2, tier: 'green',
        modelAnswer: `• 72 km/h = 72 000 m per 3600 s (1)\n• = 72000/3600 = 20 m/s (1)`
      },
      {
        q: 'State the formula for pressure and calculate the pressure when a force of 50 N acts on an area of 0.25 m².',
        marks: 2, tier: 'green',
        modelAnswer: `• Pressure = Force ÷ Area (1)\n• P = 50 ÷ 0.25 = 200 N/m² (Pa) (1)`
      },
    ],
    amber: [
      {
        q: 'A cyclist travels at 18 km/h for 40 minutes, then at 24 km/h for 50 minutes. Find the total distance covered. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• 40 min = 2/3 h; distance₁ = 18 × 2/3 = 12 km (1)\n• 50 min = 5/6 h; distance₂ = 24 × 5/6 = 20 km (1)\n• Total distance = 12 + 20 = 32 km (1)\n• Method clearly shown with correct time conversion (1)`
      },
      {
        q: 'A swimming pool holds 450 000 litres of water. It is filled using three pipes each delivering 75 litres per minute. How long will it take to fill the pool? Give your answer in hours and minutes.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Total rate = 3 × 75 = 225 litres per minute (1)\n• Time = 450 000 ÷ 225 = 2000 minutes (1)\n• 2000 ÷ 60 = 33 hours 20 minutes (1)`
      },
      {
        q: 'Explain why average speed for a whole journey is not simply the mean of the speeds for each part of the journey. Use an example with a 60 km outward journey at 30 km/h and a 60 km return at 60 km/h.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Time out = 60/30 = 2 h (1)\n• Time back = 60/60 = 1 h (1)\n• Total distance = 120 km, total time = 3 h\n• Average speed = 120/3 = 40 km/h (1)\n• (30 + 60)/2 = 45 km/h ≠ 40 km/h — incorrect because different times are spent at each speed (1)`
      },
      {
        q: 'A liquid mixture is made from substance A (density 1.2 g/cm³, volume 150 cm³) and substance B (density 0.8 g/cm³, volume 250 cm³). Find the density of the mixture, assuming volumes are additive.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Mass A = 1.2 × 150 = 180 g (1)\n• Mass B = 0.8 × 250 = 200 g (1)\n• Total mass = 380 g, total volume = 400 cm³ (1)\n• Density = 380/400 = 0.95 g/cm³ (1)`
      },
    ],
    red: [
      {
        q: 'A train leaves station A at 09:00 travelling at 90 km/h towards station B. A second train leaves station B at 09:30 travelling towards station A at 110 km/h. The distance between A and B is 330 km. At what time do the trains meet? Show all working.',
        marks: 6, tier: 'red',
        modelAnswer: `By 09:30, train 1 has travelled 90 × 0.5 = 45 km (1)\nRemaining gap = 330 − 45 = 285 km (1)\nBoth trains now approaching each other:\n• Combined speed = 90 + 110 = 200 km/h (1)\n• Time to meet = 285/200 = 1.425 h = 1 h 25.5 min (1)\n• Meet time = 09:30 + 1 h 25.5 min ≈ 10:55 and 30 s (1)\n• Or exact: 10:55:30 (1)`
      },
      {
        q: 'A runner completes a 5 km race. For the first 2 km she averages 6 m/s. For the remaining 3 km she averages 4 m/s. A friend claims her average speed for the whole race was 5 m/s. Evaluate this claim. Find the actual average speed and the percentage error in the friend\'s estimate.',
        marks: 5, tier: 'red',
        modelAnswer: `Time for first 2 km = 2000/6 = 333.33 s (1)\nTime for last 3 km = 3000/4 = 750 s (1)\nTotal time = 1083.33 s; Total distance = 5000 m\nActual average speed = 5000/1083.33 = 4.615 m/s (1)\nFriend's claim of 5 m/s is wrong (1)\nPercentage error = (5 − 4.615)/4.615 × 100 = 8.34% (1)`
      },
    ],
  },

  '4.1': {
    topic: 'Properties of Shapes and Angles',
    green: [
      {
        q: 'State the sum of interior angles of a hexagon.',
        marks: 1, tier: 'green',
        modelAnswer: `• Sum = (6 − 2) × 180° = 720° (1)`
      },
      {
        q: 'A regular polygon has an exterior angle of 24°. Calculate the number of sides.',
        marks: 2, tier: 'green',
        modelAnswer: `• Number of sides = 360° ÷ 24° (1)\n• = 15 sides (1)`
      },
      {
        q: 'Two parallel lines are cut by a transversal. One co-interior angle is 68°. Find the other co-interior angle. State the angle relationship used.',
        marks: 2, tier: 'green',
        modelAnswer: `• Co-interior (same-side interior) angles sum to 180° (1)\n• Other angle = 180° − 68° = 112° (1)`
      },
      {
        q: 'State three properties of a rhombus.',
        marks: 3, tier: 'green',
        modelAnswer: `Any three of:\n• All four sides equal length (1)\n• Opposite angles equal (1)\n• Diagonals bisect each other at 90° (1)\n• Diagonals bisect the vertex angles (1)`
      },
    ],
    amber: [
      {
        q: 'In triangle ABC, angle A = 3x°, angle B = 2x°, and angle C = x + 18°. Find all three angles and state what type of triangle this is.',
        marks: 4, tier: 'amber',
        modelAnswer: `• 3x + 2x + x + 18 = 180 → 6x = 162 → x = 27 (1)\n• Angle A = 81°, Angle B = 54°, Angle C = 45° (1)\n• All different, all acute — scalene acute triangle (1)\n• Check: 81 + 54 + 45 = 180° ✓ (1)`
      },
      {
        q: 'Show that the exterior angle of a triangle equals the sum of the two non-adjacent interior angles. Use a diagram description and angle reasoning.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Draw triangle ABC; extend side BC to point D (describe diagram) (1)\n• Angles A + B + C = 180° (angle sum in triangle) (1)\n• Angle BCD (exterior) + C = 180° (angles on a straight line) (1)\n• Therefore angle BCD = A + B (substitution) ✓ (1)`
      },
      {
        q: 'A quadrilateral has angles in the ratio 2:3:4:6. Find each angle and state whether the quadrilateral could be a trapezium. Justify your answer.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Total ratio = 15 parts; 360° ÷ 15 = 24° per part (1)\n• Angles: 48°, 72°, 96°, 144° (1)\n• For a trapezium, two sides are parallel, so co-interior angles must sum to 180° (1)\n• 48 + 144 = 192° ≠ 180°; 72 + 96 = 168° ≠ 180° — does NOT work (or check pairs)\n• Actually 72° and 144° do not sum to 180°; 48° and 96° = 144° — no valid pair\n• Cannot be a trapezium (1)`
      },
      {
        q: 'Explain why the interior angle of a regular polygon approaches (but never reaches) 180° as the number of sides increases.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Interior angle = (n−2)/n × 180° (1)\n• As n → ∞, (n−2)/n → 1 (1)\n• So interior angle → 180°, but n is always finite so it never equals 180° (1)`
      },
    ],
    red: [
      {
        q: 'Prove that the angle at the centre of a circle is twice the angle at the circumference, both subtended by the same arc. Use a clearly described diagram and full geometric reasoning. (Describe the diagram you would draw.)',
        marks: 6, tier: 'red',
        modelAnswer: `Diagram: Circle with centre O, points A, B, P on circumference; OA, OB are radii. Draw OP extended to Q. (1)\nProof:\n• OA = OP (radii) → triangle OAP is isosceles → angle OAP = angle OPA = α (1)\n• Angle AOQ = 2α (exterior angle of triangle) (1)\n• Similarly angle BOQ = 2β where angle OBP = angle OPB = β (1)\n• Angle AOB = angle AOQ + angle BOQ = 2α + 2β = 2(α + β) (1)\n• Angle APB = α + β, therefore angle AOB = 2 × angle APB ✓ (1)`
      },
      {
        q: 'A student is given a quadrilateral with two pairs of equal adjacent sides (a kite). She claims that both diagonals of a kite bisect each other. Evaluate this claim. Describe what is actually true about the diagonals of a kite, giving a full geometric justification.',
        marks: 5, tier: 'red',
        modelAnswer: `Claim evaluation:\n• The claim is FALSE — both diagonals do NOT bisect each other (1)\nWhat is actually true:\n• One diagonal (the "main diagonal" between the vertices where equal sides meet) bisects the other diagonal at right angles (1)\n• This is because the main diagonal is a line of symmetry (1)\n• The other diagonal is bisected perpendicularly, but the main diagonal is NOT bisected (1)\n• Geometric justification: triangles on either side of the main diagonal are congruent by SSS, so the foot of the perpendicular from either axis-vertex lies on the midpoint of the cross-diagonal (1)`
      },
    ],
  },

  '4.2': {
    topic: 'Mensuration: Area, Perimeter and Volume',
    green: [
      {
        q: 'Calculate the area of a trapezium with parallel sides 8 cm and 14 cm, and a height of 5 cm.',
        marks: 2, tier: 'green',
        modelAnswer: `• Area = ½ × (a + b) × h = ½ × (8 + 14) × 5 (1)\n• = ½ × 22 × 5 = 55 cm² (1)`
      },
      {
        q: 'Find the volume of a cylinder with radius 4 cm and height 10 cm. Give your answer in terms of π.',
        marks: 2, tier: 'green',
        modelAnswer: `• V = πr²h = π × 4² × 10 (1)\n• = 160π cm³ (1)`
      },
      {
        q: 'A cube has a volume of 125 cm³. Find its surface area.',
        marks: 3, tier: 'green',
        modelAnswer: `• Side length = ³√125 = 5 cm (1)\n• Surface area = 6 × 5² = 6 × 25 (1)\n• = 150 cm² (1)`
      },
      {
        q: 'Calculate the perimeter of a semicircle with diameter 12 cm. Give your answer correct to 1 decimal place.',
        marks: 2, tier: 'green',
        modelAnswer: `• Curved part = ½ × π × 12 = 6π (1)\n• Total perimeter = 6π + 12 = 30.84... ≈ 30.8 cm (1)`
      },
    ],
    amber: [
      {
        q: 'A cone has base radius 5 cm and slant height 13 cm. Find its total surface area. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Curved surface area = πrl = π × 5 × 13 = 65π (1)\n• Base area = π × 5² = 25π (1)\n• Total = 65π + 25π = 90π (1)\n• = 282.74... ≈ 283 cm² (1)`
      },
      {
        q: 'Show that the volume of a sphere with radius 6 cm is 288π cm³.',
        marks: 3, tier: 'amber',
        modelAnswer: `• V = (4/3)πr³ (1)\n• = (4/3) × π × 6³ = (4/3) × π × 216 (1)\n• = (4 × 216)/3 × π = 288π cm³ ✓ (1)`
      },
      {
        q: 'A composite shape consists of a rectangle 8 cm × 5 cm with a semicircle on one of the shorter ends (radius 2.5 cm). Find the total area of the shape. Give your answer to 3 significant figures.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Area of rectangle = 8 × 5 = 40 cm² (1)\n• Area of semicircle = ½ × π × 2.5² = ½ × π × 6.25 = 9.817... cm² (1)\n• Total = 40 + 9.817 = 49.817... (1)\n• = 49.8 cm² (to 3 s.f.) (1)`
      },
      {
        q: 'A cylindrical tank (radius 0.6 m, height 1.4 m) is half full of water. Explain how to find the volume of water, and calculate it. Give your answer in litres (1 m³ = 1000 litres).',
        marks: 4, tier: 'amber',
        modelAnswer: `• Volume of full cylinder = π × 0.6² × 1.4 = π × 0.36 × 1.4 = 0.504π (1)\n• Half volume = 0.252π m³ (1)\n• = 0.252π × 1000 = 252π ≈ 791.7 litres (1)\n• Method clearly explained (1)`
      },
    ],
    red: [
      {
        q: 'A solid wooden hemisphere of radius 8 cm is placed on top of a solid cylinder of radius 8 cm and height 12 cm to form a rocket toy. Find the total volume and total surface area of the toy, giving both answers in terms of π.',
        marks: 7, tier: 'red',
        modelAnswer: `Volume:\n• Hemisphere: (2/3)π × 8³ = (2/3)π × 512 = 1024π/3 cm³ (1)\n• Cylinder: π × 8² × 12 = 768π cm³ (1)\n• Total volume = 768π + 1024π/3 = (2304π + 1024π)/3 = 3328π/3 cm³ (1)\nSurface area:\n• Curved surface of hemisphere: 2π × 8² = 128π (1)\n• Curved surface of cylinder: 2π × 8 × 12 = 192π (1)\n• Circular base of cylinder: π × 8² = 64π (1)\n• Total SA = 128π + 192π + 64π = 384π cm² (1)\n(No circular face between hemisphere and cylinder as they are solid)`
      },
      {
        q: 'A farmer has 120 m of fencing. He wants to create a rectangular pen with one side against a wall (needing no fencing). Determine the dimensions that maximise the area of the pen. Prove that this gives a maximum and not a minimum.',
        marks: 6, tier: 'red',
        modelAnswer: `Let the width = x, length = y (parallel to wall):\n• Fencing: 2x + y = 120 → y = 120 − 2x (1)\n• Area A = xy = x(120 − 2x) = 120x − 2x² (1)\n• dA/dx = 120 − 4x = 0 → x = 30 (1)\n• y = 120 − 60 = 60 m (1)\n• Max area = 30 × 60 = 1800 m² (1)\n• d²A/dx² = −4 < 0, confirming maximum (1)`
      },
    ],
  },

  '4.3': {
    topic: 'Transformations',
    green: [
      {
        q: 'Describe fully the single transformation that maps a shape to its image when reflected in the line y = −x.',
        marks: 2, tier: 'green',
        modelAnswer: `• Reflection (1)\n• In the line y = −x (1)`
      },
      {
        q: 'A triangle is translated by the vector (−3, 5). One vertex is at (2, 1). Find the position of this vertex after the translation.',
        marks: 1, tier: 'green',
        modelAnswer: `• (2 + (−3), 1 + 5) = (−1, 6) (1)`
      },
      {
        q: 'State the coordinates of the point (4, 2) after a rotation of 90° clockwise about the origin.',
        marks: 1, tier: 'green',
        modelAnswer: `• 90° clockwise: (x, y) → (y, −x)\n• (4, 2) → (2, −4) (1)`
      },
      {
        q: 'A shape is enlarged by scale factor 3, centre of enlargement at the origin. A vertex is at (2, −1). Find its image coordinates.',
        marks: 1, tier: 'green',
        modelAnswer: `• Multiply by scale factor: (2 × 3, −1 × 3) = (6, −3) (1)`
      },
    ],
    amber: [
      {
        q: 'Describe fully the single transformation that maps triangle A with vertices (1,1), (3,1), (3,4) to triangle B with vertices (−1,1), (−3,1), (−3,4). (Show your working clearly)',
        marks: 3, tier: 'amber',
        modelAnswer: `• Reflection (1)\n• In the y-axis (x = 0) — each x-coordinate has been negated (1)\n• y-coordinates unchanged, confirming this is a reflection in the y-axis (1)`
      },
      {
        q: 'Triangle P has vertices at (2, 1), (4, 1), (4, 3). It is enlarged with scale factor −2, centre (1, 1). Find the coordinates of the image. Show all working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Vector from centre to each vertex, then multiply by −2:\n• (2,1) → (2−1, 1−1) = (1,0); × −2 = (−2, 0); + centre: (−1, 1) (1)\n• (4,1) → (3, 0); × −2 = (−6, 0); + centre: (−5, 1) (1)\n• (4,3) → (3, 2); × −2 = (−6, −4); + centre: (−5, −3) (1)\n• Image vertices: (−1, 1), (−5, 1), (−5, −3) (1)`
      },
      {
        q: 'A shape undergoes a reflection in y = 1 followed by a rotation of 90° anticlockwise about the origin. Explain why the combination of these two transformations is not a single reflection.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Reflection preserves orientation; rotation preserves orientation (1)\n• The composition of a reflection and a rotation changes orientation overall — the combined transformation reverses orientation (1)\n• A single reflection reverses orientation in a simple, direct way — but the specific combined effect cannot be reproduced by a single reflection about a line through the origin (1)`
      },
      {
        q: 'A shape is enlarged by scale factor 1/2. State the effect on (a) the perimeter and (b) the area, compared to the original. Justify your answers.',
        marks: 3, tier: 'amber',
        modelAnswer: `• (a) Perimeter is multiplied by 1/2 — all lengths scale by the scale factor (1)\n• (b) Area is multiplied by (1/2)² = 1/4 — area scales by the square of the scale factor (1)\n• Justification: linear dimensions scale by k, so area (product of two lengths) scales by k² (1)`
      },
    ],
    red: [
      {
        q: 'Shape A has vertices at (1,0), (3,0), (3,2), (1,2). It is first reflected in the line y = x, then rotated 90° clockwise about the origin. Find the final coordinates. Show all steps, and describe the single equivalent transformation.',
        marks: 7, tier: 'red',
        modelAnswer: `Reflection in y = x: (x, y) → (y, x):\n• (1,0)→(0,1), (3,0)→(0,3), (3,2)→(2,3), (1,2)→(2,1) (1)\nRotation 90° clockwise: (x, y) → (y, −x):\n• (0,1)→(1,0), (0,3)→(3,0), (2,3)→(3,−2), (2,1)→(1,−2) (2)\nFinal vertices: (1,0), (3,0), (3,−2), (1,−2) (1)\nSingle equivalent transformation:\n• Compare original to final: (x,y) → (x, −y) (1)\n• This is a reflection in the x-axis (1)\n• Confirmed by checking each point (1)`
      },
      {
        q: 'A student performs a rotation 180° about the origin on the point (a, b) and claims the result is the same as reflecting in both axes. Evaluate this claim. Show algebraically that both give the same image, and state whether the two transformations are always equivalent.',
        marks: 5, tier: 'red',
        modelAnswer: `Rotation 180°: (a, b) → (−a, −b) (1)\nReflect in x-axis: (a, b) → (a, −b) (1)\nReflect in y-axis: (a, −b) → (−a, −b) (1)\nSame result: (−a, −b) — claim is correct (1)\n• Yes, the two transformations are always equivalent for any point (a, b) (1)`
      },
    ],
  },

  '4.4': {
    topic: "Pythagoras' Theorem and Trigonometry",
    green: [
      {
        q: 'Calculate the hypotenuse of a right-angled triangle with legs 9 cm and 12 cm.',
        marks: 2, tier: 'green',
        modelAnswer: `• h² = 9² + 12² = 81 + 144 = 225 (1)\n• h = √225 = 15 cm (1)`
      },
      {
        q: 'In a right-angled triangle, the opposite side is 7 cm and the hypotenuse is 10 cm. Find the angle opposite the 7 cm side to 1 decimal place.',
        marks: 2, tier: 'green',
        modelAnswer: `• sin θ = 7/10 = 0.7 (1)\n• θ = sin⁻¹(0.7) = 44.4° (1)`
      },
      {
        q: 'State the exact values of sin 30°, cos 60°, and tan 45°.',
        marks: 3, tier: 'green',
        modelAnswer: `• sin 30° = 1/2 (1)\n• cos 60° = 1/2 (1)\n• tan 45° = 1 (1)`
      },
      {
        q: 'A ladder 5 m long leans against a wall, making an angle of 70° with the ground. Calculate how high up the wall the ladder reaches. Give your answer to 2 decimal places.',
        marks: 2, tier: 'green',
        modelAnswer: `• Height = 5 × sin 70° (1)\n• = 5 × 0.9397 = 4.70 m (1)`
      },
    ],
    amber: [
      {
        q: 'A ship sails 15 km due north, then 20 km due east. Find the distance from the starting point and the bearing of the ship from the start. Give your answers to 1 decimal place.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Distance = √(15² + 20²) = √(225 + 400) = √625 = 25 km (1)\n• tan θ = 20/15 where θ is angle from north (1)\n• θ = tan⁻¹(4/3) = 53.1° (1)\n• Bearing = 053.1° (1)\n• Correct interpretation of bearing (1)`
      },
      {
        q: 'Show that in an equilateral triangle with side length 2, the height is √3. Use this to confirm that sin 60° = √3/2.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Draw altitude from apex; it bisects the base → base = 1 (1)\n• Height h: h² + 1² = 2² → h² = 3 → h = √3 (1)\n• sin 60° = opposite/hypotenuse = √3/2 ✓ (1)\n• Diagram correctly described (1)`
      },
      {
        q: 'Find all missing sides and angles of triangle ABC where BC = 8 cm, angle B = 90°, and angle A = 35°. Give answers to 1 decimal place.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Angle C = 180 − 90 − 35 = 55° (1)\n• AB = BC/tan 35° = 8/0.7002 = 11.4 cm (1)\n• AC = BC/sin 35° = 8/0.5736 = 13.9 cm (1)\n• (Or AC via Pythagoras: √(8² + 11.4²) ≈ 13.9 cm) (1)`
      },
      {
        q: 'Explain why the cosine rule is needed for triangles that are not right-angled, and apply it to find side a in triangle ABC where b = 7 cm, c = 9 cm, and angle A = 50°.',
        marks: 4, tier: 'amber',
        modelAnswer: `• SOHCAHTOA only applies to right-angled triangles; the cosine rule works for any triangle (1)\n• a² = b² + c² − 2bc cos A (1)\n• = 49 + 81 − 2(7)(9)cos 50° (1)\n• = 130 − 126 × 0.6428 = 130 − 80.99 = 49.01\n• a = √49.01 ≈ 7.0 cm (1)`
      },
    ],
    red: [
      {
        q: 'A vertical mast PQ stands on horizontal ground. From a point A, the angle of elevation of the top Q is 28°. From a point B, 15 m closer to the mast (on the same horizontal line), the angle of elevation is 42°. Calculate the height of the mast PQ. Show all working.',
        marks: 7, tier: 'red',
        modelAnswer: `Let PQ = h, PB = d:\n• From B: tan 42° = h/d → d = h/tan 42° (1)\n• From A: tan 28° = h/(d + 15) → d + 15 = h/tan 28° (1)\n• Subtract: 15 = h/tan 28° − h/tan 42° = h(1/tan 28° − 1/tan 42°) (1)\n• 1/tan 28° = 1.8807, 1/tan 42° = 1.1106 (1)\n• 15 = h × 0.7701 → h = 15/0.7701 ≈ 19.5 m (2)\n• All working clearly shown (1)`
      },
      {
        q: 'Prove that in any triangle ABC: (a² − b²)/c = c − 2b cos A, where a, b, c are the sides opposite angles A, B, C. Start from the cosine rule.',
        marks: 5, tier: 'red',
        modelAnswer: `Starting from cosine rule:\n• a² = b² + c² − 2bc cos A → a² − b² = c² − 2bc cos A (1)\n• Factor right side: c² − 2bc cos A = c(c − 2b cos A) (1)\n• Divide both sides by c: (a² − b²)/c = c − 2b cos A ✓ (1)\n• Each step clearly justified (1)\n• No circular reasoning (1)`
      },
    ],
  },

  '4.5': {
    topic: 'Circles and Constructions',
    green: [
      {
        q: 'State the circle theorem relating a tangent to a circle and the radius at the point of tangency.',
        marks: 1, tier: 'green',
        modelAnswer: `• The tangent to a circle is perpendicular to the radius at the point of contact (1)`
      },
      {
        q: 'Calculate the arc length of a sector with radius 9 cm and angle 80°. Give your answer in terms of π.',
        marks: 2, tier: 'green',
        modelAnswer: `• Arc length = (80/360) × 2π × 9 = (80/360) × 18π = 4π cm (1)\n• = 4π cm (1)`
      },
      {
        q: 'Calculate the area of a sector with radius 6 cm and angle 150°. Give your answer to 2 decimal places.',
        marks: 2, tier: 'green',
        modelAnswer: `• Area = (150/360) × π × 6² = (5/12) × 36π = 15π (1)\n• = 47.12 cm² (1)`
      },
      {
        q: 'An angle in a semicircle is subtended at the circumference. State the size of this angle and name the theorem used.',
        marks: 2, tier: 'green',
        modelAnswer: `• The angle = 90° (1)\n• Theorem: The angle in a semicircle is a right angle (Thales' theorem) (1)`
      },
    ],
    amber: [
      {
        q: 'Points A, B, C, D lie on a circle. Angle ABC = 115°. Find angle ADC. State the circle theorem used and show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• ABCD is a cyclic quadrilateral (1)\n• Opposite angles in a cyclic quadrilateral sum to 180° (1)\n• Angle ADC = 180° − 115° = 65° (1)`
      },
      {
        q: 'Two tangents are drawn to a circle of radius 5 cm from an external point P, which is 13 cm from the centre O. Find the length of each tangent. Show your working using Pythagoras\' theorem.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Radius to tangent point is perpendicular to tangent (1)\n• Tangent length² = OP² − r² = 13² − 5² = 169 − 25 = 144 (1)\n• Tangent length = √144 = 12 cm (1)`
      },
      {
        q: 'Explain, using the inscribed angle theorem, why all angles inscribed in the same arc of a circle are equal. Include a description of an appropriate diagram.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Draw circle with arc AB and two points P and Q on the same side of AB on the major arc (describe diagram) (1)\n• Both angle APB and angle AQB are inscribed angles subtended by the same arc AB (1)\n• Both equal half the central angle AOB (angle at centre theorem) (1)\n• Therefore angle APB = angle AQB — all inscribed angles in the same arc are equal ✓ (1)`
      },
      {
        q: 'A chord AB divides a circle into two segments. The major arc AB subtends an angle of 200° at the centre. Find the angle ACB where C is a point on the minor arc.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Major arc = 200°; minor arc = 360° − 200° = 160° at the centre (1)\n• Angle ACB is at circumference, on minor arc (reflex arc subtended) (1)\n• Angle at centre = 2 × angle at circumference (for same arc) (1)\n• Angle ACB = 200° / 2 = 100° (using the major arc subtending reflex angle) (1)`
      },
    ],
    red: [
      {
        q: 'Prove the alternate segment theorem: the angle between a tangent to a circle and a chord drawn from the point of tangency equals the inscribed angle on the opposite side of the chord. Use a clearly described diagram.',
        marks: 6, tier: 'red',
        modelAnswer: `Diagram: Circle, tangent TPT\', chord PB, point A on major arc. Angles: angle between tangent TP and chord PB = α; angle PAB = β. (1)\nProof:\n• Draw radius OP; tangent ⊥ radius so angle OPT = 90° (1)\n• Angle OPB = 90° − α (since angle TPB = α) (1)\n• OP = OB (radii) → triangle OPB isosceles → angle OBP = angle OPB = 90° − α (1)\n• Angle POB = 180° − 2(90° − α) = 2α (angle sum) (1)\n• Angle PAB = ½ angle POB = α = angle TPB ✓ (alternate segment theorem proved) (1)`
      },
      {
        q: 'A circular sector has radius r and angle θ (in degrees). The perimeter of the sector equals three times the radius. Find θ in terms of r, and calculate θ when r = 7. Show all working.',
        marks: 5, tier: 'red',
        modelAnswer: `Perimeter of sector = arc length + 2 radii:\n• Arc length = (θ/360) × 2πr (1)\n• Perimeter = (θ/360) × 2πr + 2r = 3r (given) (1)\n• (θ/360) × 2πr = r → θ/360 × 2π = 1 (1)\n• θ = 360/(2π) = 180/π degrees (1)\n• When r = 7: θ = 180/π ≈ 57.3° (1)`
      },
    ],
  },

  '4.6': {
    topic: 'Vectors',
    green: [
      {
        q: 'Given vectors a = (3, −1) and b = (−2, 4), calculate a + b and 2a − b.',
        marks: 2, tier: 'green',
        modelAnswer: `• a + b = (3+(−2), −1+4) = (1, 3) (1)\n• 2a − b = (6−(−2), −2−4) = (8, −8) (1)`
      },
      {
        q: 'State the magnitude of the vector (5, −12).',
        marks: 1, tier: 'green',
        modelAnswer: `• |v| = √(5² + 12²) = √(25 + 144) = √169 = 13 (1)`
      },
      {
        q: 'Vector OA = (4, 3) and vector OB = (1, 7). Find the vector AB.',
        marks: 2, tier: 'green',
        modelAnswer: `• AB = AO + OB = −OA + OB = OB − OA (1)\n• = (1−4, 7−3) = (−3, 4) (1)`
      },
      {
        q: 'Describe in words what it means for two vectors to be parallel.',
        marks: 1, tier: 'green',
        modelAnswer: `• Two vectors are parallel if one is a scalar multiple of the other — they have the same or opposite direction (1)`
      },
    ],
    amber: [
      {
        q: 'In triangle OAB, OA = a and OB = b. M is the midpoint of AB. Express OM in terms of a and b. Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `• AB = AO + OB = −a + b = b − a (1)\n• AM = ½AB = ½(b − a) (1)\n• OM = OA + AM = a + ½(b − a) = ½a + ½b = ½(a + b) (1)`
      },
      {
        q: 'Show that the points A(1, 2), B(3, 6), and C(5, 10) are collinear using vectors.',
        marks: 3, tier: 'amber',
        modelAnswer: `• AB = (3−1, 6−2) = (2, 4) (1)\n• AC = (5−1, 10−2) = (4, 8) (1)\n• AC = 2 × AB — AC is a scalar multiple of AB, and both share point A (1)\n• Therefore A, B, C are collinear ✓`
      },
      {
        q: 'OA = 3a + b and OB = a − 2b. Point C divides AB in the ratio 2:1. Find the position vector of C. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• AB = OB − OA = (a − 2b) − (3a + b) = −2a − 3b (1)\n• AC = (2/3)AB = (2/3)(−2a − 3b) = −(4/3)a − 2b (1)\n• OC = OA + AC = (3a + b) + (−4a/3 − 2b) (1)\n• = (9a/3 − 4a/3) + (b − 2b) = (5/3)a − b (1)`
      },
      {
        q: 'Explain why a non-zero vector cannot be both parallel and perpendicular to another non-zero vector. Use the dot product or a geometric argument.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Parallel vectors have the same direction (angle = 0° or 180°) (1)\n• Perpendicular vectors are at 90° to each other (1)\n• These conditions are mutually exclusive for non-zero vectors — a vector cannot simultaneously point in the same direction as another and be at 90° to it (1)`
      },
    ],
    red: [
      {
        q: 'OABC is a parallelogram. OA = a and OC = c. Point P lies on diagonal OB such that OP:PB = 1:2. Point Q is the midpoint of AC. Show that P, Q, and the midpoint of OB are distinct points, and find the position vector of Q. Then determine whether O, P, Q are collinear.',
        marks: 6, tier: 'red',
        modelAnswer: `OB = OA + AB = a + c (since AB = OC = c in parallelogram) (1)\nPoint P: OP = (1/3)OB = (1/3)(a + c) (1)\nMidpoint M of OB: OM = (1/2)(a + c) ≠ OP, so P ≠ M (1)\nPosition vector of Q (midpoint of AC):\n• OA = a, OC = c → AC = c − a (since AC = OC − OA in position vectors? No: A has position a, C has position c, so AC = c − a)\n• Q midpoint: OQ = (OA + OC)/2 = (a + c)/2 (1)\nCompare OP and OQ:\n• OP = (1/3)(a + c), OQ = (1/2)(a + c)\n• Both are scalar multiples of (a + c) (1)\n• O, P, Q are collinear (all lie on line OB direction) (1)`
      },
      {
        q: 'Prove using vectors that the diagonals of a parallelogram bisect each other.',
        marks: 5, tier: 'red',
        modelAnswer: `Let O be origin, OA = a, OC = c.\nParallelogram OABC: B has position vector a + c (OB = OA + AB = a + c since AB = OC = c) (1)\nMidpoint of diagonal OB: M₁ = ½(a + c) (1)\nMidpoint of diagonal AC:\n• A has position a, C has position c (1)\n• M₂ = (a + c)/2 (1)\n• M₁ = M₂ → both diagonals share the same midpoint → they bisect each other ✓ (1)`
      },
    ],
  },

  '5.1': {
    topic: 'Probability',
    green: [
      {
        q: 'A bag contains 4 red, 6 blue, and 10 green counters. A counter is drawn at random. Calculate P(blue).',
        marks: 1, tier: 'green',
        modelAnswer: `• Total = 20; P(blue) = 6/20 = 3/10 (1)`
      },
      {
        q: 'State the probability of an impossible event and the probability of a certain event.',
        marks: 1, tier: 'green',
        modelAnswer: `• Impossible event: P = 0 (1)\n• Certain event: P = 1 (1) [both correct for 1 mark]`
      },
      {
        q: 'A spinner has 5 equal sections numbered 1–5. Find the probability of spinning a number greater than 3.',
        marks: 1, tier: 'green',
        modelAnswer: `• Favourable outcomes: {4, 5} — 2 outcomes (1)\n• P = 2/5`
      },
      {
        q: 'Events A and B are mutually exclusive. P(A) = 0.35 and P(B) = 0.42. Find P(A or B).',
        marks: 1, tier: 'green',
        modelAnswer: `• P(A ∪ B) = P(A) + P(B) = 0.35 + 0.42 = 0.77 (1)`
      },
    ],
    amber: [
      {
        q: 'A card is drawn from a standard 52-card deck. Find: (a) P(red card), (b) P(ace or king), (c) P(not a heart). Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• (a) P(red) = 26/52 = 1/2 (1)\n• (b) Aces = 4, Kings = 4, total = 8; P(ace or king) = 8/52 = 2/13 (1)\n• (c) Hearts = 13; P(not heart) = 39/52 = 3/4 (1)\n• All fractions in simplest form (1)`
      },
      {
        q: 'A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement. Draw a tree diagram and find the probability that both balls are the same colour.',
        marks: 5, tier: 'amber',
        modelAnswer: `Tree diagram:\n• First draw: P(R) = 3/8, P(B) = 5/8 (1)\n• Second draw given R first: P(R) = 2/7, P(B) = 5/7 (1)\n• Second draw given B first: P(R) = 3/7, P(B) = 4/7 (1)\nP(same colour) = P(RR) + P(BB):\n• = (3/8)(2/7) + (5/8)(4/7) = 6/56 + 20/56 = 26/56 = 13/28 (2)`
      },
      {
        q: 'Explain the difference between independent and mutually exclusive events. Give one example of each from a card game.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Independent: the outcome of one event does not affect the other — e.g. drawing a card, replacing it, and drawing again (1)\n• Mutually exclusive: two events cannot both happen at the same time — e.g. a single card cannot be both a heart and a spade (1)\n• Clear distinction and valid examples (1)`
      },
      {
        q: 'A and B are independent events. P(A) = 0.4 and P(B) = 0.3. Find P(A and B) and P(A or B).',
        marks: 4, tier: 'amber',
        modelAnswer: `• P(A ∩ B) = P(A) × P(B) = 0.4 × 0.3 = 0.12 (because independent) (1)\n• P(A ∪ B) = P(A) + P(B) − P(A ∩ B) (1)\n• = 0.4 + 0.3 − 0.12 = 0.58 (1)\n• Formula correctly applied (1)`
      },
    ],
    red: [
      {
        q: 'A biased coin has P(Head) = p. The coin is tossed three times. Show that the probability of exactly two heads is 3p²(1−p). Then find the value of p if P(exactly 2 heads) = 3/8.',
        marks: 6, tier: 'red',
        modelAnswer: `Ways to get exactly 2 heads: HHT, HTH, THH — 3 outcomes (1)\nEach has probability p × p × (1−p) = p²(1−p) (1)\nTotal P(exactly 2 heads) = 3p²(1−p) ✓ (1)\nSet equal to 3/8:\n• 3p²(1−p) = 3/8 (1)\n• p²(1−p) = 1/8 (1)\n• Testing p = 1/2: (1/4)(1/2) = 1/8 ✓ → p = 1/2 (1)`
      },
      {
        q: 'In a class, 60% of students study French, 40% study Spanish, and 25% study both. A student is chosen at random. Using a Venn diagram approach, find: (a) P(French only), (b) P(neither), (c) P(French | Spanish). Evaluate the claim that "more than half the Spanish students also study French."',
        marks: 7, tier: 'red',
        modelAnswer: `Venn diagram values:\n• French only = 60 − 25 = 35% (1)\n• Spanish only = 40 − 25 = 15% (1)\n• Both = 25%, Total = 35 + 25 + 15 = 75% (1)\n(a) P(French only) = 0.35 (1)\n(b) P(neither) = 1 − 0.75 = 0.25 (1)\n(c) P(French | Spanish) = P(both)/P(Spanish) = 0.25/0.40 = 5/8 = 62.5% (1)\nEvaluating the claim:\n• 62.5% of Spanish students study French; this is more than half — claim is TRUE (1)`
      },
    ],
  },

  '6.1': {
    topic: 'Statistical Diagrams and Measures',
    green: [
      {
        q: 'Find the mean, median, and mode of: 3, 7, 4, 3, 9, 7, 3, 8.',
        marks: 3, tier: 'green',
        modelAnswer: `• Mean = (3+7+4+3+9+7+3+8)/8 = 44/8 = 5.5 (1)\n• Sorted: 3,3,3,4,7,7,8,9 — Median = (4+7)/2 = 5.5 (1)\n• Mode = 3 (appears 3 times) (1)`
      },
      {
        q: 'State what a stem-and-leaf diagram is and one advantage of using it.',
        marks: 2, tier: 'green',
        modelAnswer: `• A diagram that lists data in order, using stems (e.g. tens) and leaves (e.g. units) (1)\n• Advantage: raw data is retained and the distribution is visible (1)`
      },
      {
        q: 'The range of a data set is 18. The smallest value is 7. What is the largest value?',
        marks: 1, tier: 'green',
        modelAnswer: `• Largest value = 7 + 18 = 25 (1)`
      },
      {
        q: 'A bar chart shows the number of books read: Mon 4, Tue 7, Wed 3, Thu 6, Fri 5. Calculate the mean number of books read per day.',
        marks: 2, tier: 'green',
        modelAnswer: `• Total = 4+7+3+6+5 = 25 (1)\n• Mean = 25/5 = 5 books per day (1)`
      },
    ],
    amber: [
      {
        q: 'A grouped frequency table shows test scores. The mid-points and frequencies are: 15 (f=3), 25 (f=7), 35 (f=12), 45 (f=8). Estimate the mean score. Show your working.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Σ(fx): 15×3 + 25×7 + 35×12 + 45×8 = 45 + 175 + 420 + 360 = 1000 (2)\n• Σf = 3 + 7 + 12 + 8 = 30 (1)\n• Estimated mean = 1000/30 = 33.3 (1)`
      },
      {
        q: 'Explain why the mean of a data set can be misleading as a measure of average. Give an example where the median is a better measure.',
        marks: 3, tier: 'amber',
        modelAnswer: `• The mean is pulled by extreme values (outliers) (1)\n• Example: salaries £20k, £22k, £21k, £19k, £200k — mean = £56.4k, which doesn't represent a typical worker (1)\n• Median = £21k, much more representative of the typical salary (1)`
      },
      {
        q: 'Compare the two data sets using appropriate averages and the range. Set A: 4,6,6,7,8,9,12. Set B: 2,3,6,7,9,10,11.',
        marks: 4, tier: 'amber',
        modelAnswer: `Set A: mean = 52/7 = 7.4, median = 7, range = 8 (1)\nSet B: mean = 48/7 = 6.9, median = 7, range = 9 (1)\nComparison:\n• Similar medians (both 7) and means (1)\n• Set B has a larger range, indicating more spread/variability (1)`
      },
      {
        q: 'A pie chart shows that 30% of 240 students prefer football. Show that this represents 72 students and calculate the angle of the football sector.',
        marks: 3, tier: 'amber',
        modelAnswer: `• 30% of 240 = 0.3 × 240 = 72 ✓ (1)\n• Angle = (72/240) × 360° (1)\n• = 0.3 × 360° = 108° (1)`
      },
    ],
    red: [
      {
        q: 'A data set of 20 values has a mean of 15 and a standard deviation of 3. A new value of 27 is added to the set. Explain how the mean and spread are likely to be affected. Calculate the new mean exactly, and comment on whether the standard deviation will increase, decrease, or stay the same.',
        marks: 5, tier: 'red',
        modelAnswer: `New mean:\n• Old total = 20 × 15 = 300 (1)\n• New total = 300 + 27 = 327; new mean = 327/21 ≈ 15.57 (1)\nEffect on mean:\n• Mean increases (27 > 15) (1)\nEffect on spread:\n• 27 is 4 standard deviations above the mean — it is an outlier (1)\n• Standard deviation will increase since the new value is far from the mean (1)`
      },
      {
        q: 'Two students compare their test marks over 5 tests. Alice: 60, 65, 70, 68, 72. Ben: 55, 80, 45, 90, 75. Calculate the mean and range for each. Evaluate who has performed better overall, giving a balanced judgement.',
        marks: 6, tier: 'red',
        modelAnswer: `Alice mean = (60+65+70+68+72)/5 = 335/5 = 67, range = 12 (1)\nBen mean = (55+80+45+90+75)/5 = 345/5 = 69, range = 45 (1)\nComparison:\n• Ben has a slightly higher mean (69 vs 67) — by average performance, Ben is marginally better (1)\n• However, Alice has a much lower range (12 vs 45) — Alice is far more consistent (1)\n• Ben's performance is volatile; Alice's is reliable (1)\n• Balanced conclusion: both factors considered in a final judgement (1)`
      },
    ],
  },

  '6.2': {
    topic: 'Cumulative Frequency, Histograms and Box Plots',
    green: [
      {
        q: 'State what a cumulative frequency graph is used for and describe the shape it typically produces.',
        marks: 2, tier: 'green',
        modelAnswer: `• A cumulative frequency graph shows the running total of frequencies, allowing estimation of median and percentiles (1)\n• It produces an S-shaped (ogive) curve (1)`
      },
      {
        q: 'From a cumulative frequency graph with 80 data values, explain how to find the median.',
        marks: 2, tier: 'green',
        modelAnswer: `• Read off the value at cumulative frequency = 80/2 = 40 (1)\n• Draw a horizontal line from 40 on the y-axis to the curve, then a vertical line down to the x-axis — that value is the median (1)`
      },
      {
        q: 'A histogram has a bar of width 4 cm and height (frequency density) 2.5. State the frequency represented by this bar.',
        marks: 1, tier: 'green',
        modelAnswer: `• Frequency = frequency density × class width = 2.5 × 4 = 10 (1)`
      },
      {
        q: 'State the five key values needed to draw a box plot.',
        marks: 1, tier: 'green',
        modelAnswer: `• Minimum, Lower Quartile (Q1), Median (Q2), Upper Quartile (Q3), Maximum (1)`
      },
    ],
    amber: [
      {
        q: 'The following grouped data shows times (minutes) to complete a puzzle. Draw a cumulative frequency table and estimate the median. Times: 0–10 (f=5), 10–20 (f=12), 20–30 (f=18), 30–40 (f=10), 40–50 (f=5).',
        marks: 4, tier: 'amber',
        modelAnswer: `Cumulative frequency table:\n• 0–10: 5; 0–20: 17; 0–30: 35; 0–40: 45; 0–50: 50 (1)\nTotal = 50, median at cf = 25 (1)\n• 25 falls in the 20–30 group (cf goes from 17 to 35)\n• Median = 20 + (25−17)/18 × 10 = 20 + 80/18 = 20 + 4.44 ≈ 24.4 minutes (2)`
      },
      {
        q: 'A box plot shows: min = 12, Q1 = 18, median = 24, Q3 = 31, max = 45. Calculate the interquartile range (IQR) and identify whether the value 44 could be an outlier using the rule: outlier > Q3 + 1.5 × IQR.',
        marks: 4, tier: 'amber',
        modelAnswer: `• IQR = Q3 − Q1 = 31 − 18 = 13 (1)\n• Q3 + 1.5 × IQR = 31 + 19.5 = 50.5 (1)\n• 44 < 50.5 so 44 is NOT an outlier by this rule (1)\n• Clear working shown (1)`
      },
      {
        q: 'Explain why histograms are used for continuous data rather than bar charts. Describe how frequency density is calculated.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Continuous data has no gaps, so bars in a histogram are drawn touching (1)\n• In a histogram, the area (not height) of each bar represents the frequency (1)\n• Frequency density = frequency ÷ class width (1)`
      },
      {
        q: 'Two groups of students sat the same test. Group A: min 20, Q1 35, median 50, Q3 65, max 80. Group B: min 30, Q1 48, median 60, Q3 70, max 85. Compare the two groups using appropriate statistics.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Group B has a higher median (60 vs 50) — higher typical performance (1)\n• Group A IQR = 30; Group B IQR = 22 — Group B is less spread in the middle 50% (1)\n• Group A has a wider range (60 vs 55) — more overall variability (1)\n• Overall, Group B performed better and more consistently (1)`
      },
    ],
    red: [
      {
        q: 'A frequency table for heights of plants is given: 10–20 cm (f=8), 20–30 cm (f=15), 30–50 cm (f=22), 50–70 cm (f=10), 70–80 cm (f=5). (a) Draw a histogram (describe the bars). (b) Estimate the mean height. (c) State which class contains the median.',
        marks: 7, tier: 'red',
        modelAnswer: `(a) Frequency densities:\n• 10–20: 8/10 = 0.8 (1)\n• 20–30: 15/10 = 1.5 (1)\n• 30–50: 22/20 = 1.1 (1)\n• 50–70: 10/20 = 0.5\n• 70–80: 5/10 = 0.5\nBars at these heights on frequency density axis (describe correctly labelled histogram) (1)\n(b) Midpoints: 15, 25, 40, 60, 75; Σf = 60\n• Σ(fx) = 15×8 + 25×15 + 40×22 + 60×10 + 75×5 = 120+375+880+600+375 = 2350 (1)\n• Mean = 2350/60 = 39.2 cm (1)\n(c) Median at cf = 30: 0–20: cf=23; 0–50: cf=45 → median in 30–50 class (1)`
      },
      {
        q: 'A student says: "The interquartile range is always a better measure of spread than the range, for any data set." Evaluate this claim. Give one situation where the range is more useful and one where the IQR is more useful, with justification.',
        marks: 5, tier: 'red',
        modelAnswer: `Evaluating the claim:\n• The claim is not always true — each measure has advantages in different contexts (1)\nWhere range is more useful:\n• When the extreme values matter — e.g. engineering tolerances, weather forecasting (maximum and minimum temperatures) (1)\n• The range tells you the full span of variation (1)\nWhere IQR is more useful:\n• When data contains outliers — e.g. household incomes or exam scores with extreme values (1)\n• IQR focuses on the middle 50% and is not distorted by outliers — more robust (1)`
      },
    ],
  },

};

// Export for use in question runner
if (typeof module !== 'undefined') module.exports = { MATHS_OCR_WRITTEN };
