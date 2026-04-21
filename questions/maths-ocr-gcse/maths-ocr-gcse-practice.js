/*
 * OCR GCSE Mathematics (J560) — Exam Practice Question Bank
 * All written/exam-style questions with OCR mark schemes.
 * 20 questions per topic, ranging from 1-mark to 8-mark questions.
 * Some questions require diagrams — these are marked with requiresDiagram: true
 */

const MATHS_OCR_PRACTICE = {

  '1.1': {
    name: 'Number: Arithmetic and Place Value',
    questions: [
      {
        q: 'Write the number 4 073 281 in words.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• Four million, seventy-three thousand, two hundred and eighty-one (1)`
      },
      {
        q: 'Write down the value of the digit 7 in the number 3 074 512.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 70 000 (1)`
      },
      {
        q: 'Work out 348 × 27.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Correct method shown e.g. long multiplication (1)\n• 9396 (1)`
      },
      {
        q: 'Work out 1 824 ÷ 16.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Correct method shown e.g. short or long division (1)\n• 114 (1)`
      },
      {
        q: 'A cinema has 38 rows with 24 seats in each row. Work out the total number of seats in the cinema.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 38 × 24 (1)\n• 912 (1)`
      },
      {
        q: 'Work out 5 + 3 × (8 − 2)².',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (8 − 2)² = 36 seen (1)\n• 5 + 3 × 36 = 5 + 108 = 113 (1)`
      },
      {
        q: 'Place these numbers in order from smallest to largest: 0.7, −3, 2, −1.5, 0.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• −3, −1.5, 0, 0.7, 2 (1)`
      },
      {
        q: 'Work out −4 × (−7).',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 28 (1)`
      },
      {
        q: 'Work out −18 ÷ 3 + (−2).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• −18 ÷ 3 = −6 (1)\n• −6 + (−2) = −8 (1)`
      },
      {
        q: 'State the highest common factor (HCF) of 36 and 48.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36 AND factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 (1)\n• HCF = 12 (1)`
      },
      {
        q: 'Find the lowest common multiple (LCM) of 8 and 12.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Multiples of 8: 8, 16, 24, ... AND multiples of 12: 12, 24, ... (1)\n• LCM = 24 (1)`
      },
      {
        q: 'Write 84 as a product of its prime factors. Give your answer in index form.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Correct factor tree or repeated division (1)\n• 2² × 3 × 7 (2) [award 1 mark for 2 × 2 × 3 × 7 without index form]`
      },
      {
        q: 'Use prime factor decomposition to find the HCF and LCM of 60 and 84.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• 60 = 2² × 3 × 5 (1)\n• 84 = 2² × 3 × 7 (1)\n• HCF = 2² × 3 = 12 (1)\n• LCM = 2² × 3 × 5 × 7 = 420 (1)`
      },
      {
        q: 'Buses to town leave every 8 minutes. Buses to the airport leave every 12 minutes. Both buses leave at 9:00 am. At what time do both buses next leave at the same time?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• LCM of 8 and 12 (1)\n• LCM = 24 (1)\n• 9:24 am (1)`
      },
      {
        q: 'Work out 2³ × 3² − 4 × 5.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2³ × 3² = 8 × 9 = 72 AND 4 × 5 = 20 (1)\n• 72 − 20 = 52 (1)`
      },
      {
        q: 'Show that 2² × 3³ = 108.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2² = 4 and 3³ = 27 (1)\n• 4 × 27 = 108 ✓ (1)`
      },
      {
        q: 'A factory produces 1 350 items per hour. How many items does it produce in a working week of 5 days, working 8 hours per day?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 8 × 5 = 40 hours (1)\n• 40 × 1350 (1)\n• 54 000 items (1)`
      },
      {
        q: 'Write down all the factors of 60.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• At least 8 factors found (1)\n• 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 (all correct) (1)`
      },
      {
        q: 'Explain why 1 is not a prime number.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• A prime number must have exactly two distinct factors; 1 has only one factor (itself) (1)`
      },
      {
        q: 'Work out: (a) 3 + 5 × 4 − 2  (b) (3 + 5) × (4 − 2)',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (a) 3 + 20 − 2 = 21 (1)\n• (b) 8 × 2 = 16 (1)`
      },
    ],
  },

  '1.2': {
    name: 'Fractions, Decimals and Percentages',
    questions: [
      {
        q: 'Work out ³⁄₄ + ²⁄₅. Give your answer as a fraction in its simplest form.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Common denominator of 20: 15/20 + 8/20 (1)\n• 23/20 or 1³⁄₂₀ (1)`
      },
      {
        q: 'Work out 2¹⁄₃ − 1³⁄₄. Give your answer as a fraction in its simplest form.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Convert to improper fractions: 7/3 − 7/4 (1)\n• Common denominator: 28/12 − 21/12 (1)\n• 7/12 (1)`
      },
      {
        q: 'Work out ³⁄₈ × ⁴⁄₉. Give your answer in its simplest form.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 12/72 (1)\n• 1/6 (1)`
      },
      {
        q: 'Work out 2²⁄₃ ÷ 1¹⁄₅. Give your answer as a mixed number in its simplest form.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Convert: 8/3 ÷ 6/5 (1)\n• Multiply by reciprocal: 8/3 × 5/6 = 40/18 (1)\n• 2²⁄₉ (1)`
      },
      {
        q: 'Express 0.35 as a fraction in its simplest form.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 35/100 (1)\n• 7/20 (1)`
      },
      {
        q: 'Convert 0.̄4̄̄5̄ (0.454545...) to a fraction in its simplest form.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Let x = 0.454545... so 100x = 45.454545... (1)\n• 99x = 45, so x = 45/99 (1)\n• 5/11 (1)`
      },
      {
        q: 'Work out 35% of £420.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 10% = £42 or 0.35 × 420 (1)\n• £147 (1)`
      },
      {
        q: 'A jacket costs £85. In a sale, the price is reduced by 20%. Work out the sale price.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 20% of £85 = £17 OR 0.80 × 85 (1)\n• £68 (1)`
      },
      {
        q: 'A car was bought for £12 000. Its value decreased by 15% in the first year. Work out its value after one year.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 0.85 × 12 000 (1)\n• £10 200 (1)`
      },
      {
        q: 'A price increases from £64 to £80. Calculate the percentage increase.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (80 − 64)/64 × 100 (1)\n• 25% (1)`
      },
      {
        q: 'After a 12% pay rise, James earns £22 400. Work out his salary before the rise.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 1.12 × original = 22 400 (1)\n• Original = 22 400 ÷ 1.12 (1)\n• £20 000 (1)`
      },
      {
        q: 'Write these in order from smallest to largest: 3/7, 0.43, 44%.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Convert all to decimals or percentages: 3/7 ≈ 0.4286, 0.43, 0.44 (1)\n• 3/7, 0.43, 44% (1)`
      },
      {
        q: 'A shop buys an item for £45 and sells it for £63. Calculate the percentage profit.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (63 − 45)/45 × 100 (1)\n• 40% (1)`
      },
      {
        q: 'Work out 1³⁄₅ × 2¹⁄₄. Give your answer as a mixed number.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Convert: 8/5 × 9/4 (1)\n• 72/20 (1)\n• 3³⁄₅ (1)`
      },
      {
        q: 'Work out 15% of 3/5 of 200.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 3/5 of 200 = 120 (1)\n• 15% of 120 (1)\n• 18 (1)`
      },
      {
        q: 'A television costs £360 plus 20% VAT. Work out the total price including VAT.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• VAT = 20% × 360 = £72 OR 1.2 × 360 (1)\n• £432 (1)`
      },
      {
        q: 'Show that 2/3 + 5/8 = 1 7/24.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Common denominator 24: 16/24 + 15/24 = 31/24 (1)\n• 31/24 = 1 7/24 ✓ (1)`
      },
      {
        q: 'In a class, 2/5 of students study French. Of those who study French, 3/4 also study Spanish. What fraction of the whole class studies both?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 3/4 × 2/5 (1)\n• 6/20 = 3/10 (1)`
      },
      {
        q: 'A house is valued at £250 000. Its value increases by 8% each year. What is its value after 2 years?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 1.08² × 250 000 (1)\n• 1.1664 × 250 000 (1)\n• £291 600 (1)`
      },
      {
        q: 'A bank offers simple interest at 3.5% per year. How much interest is earned on £800 over 4 years?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Interest per year = 3.5/100 × 800 = £28 (1)\n• Total interest = 28 × 4 (1)\n• £112 (1)`
      },
    ],
  },

  '1.3': {
    name: 'Accuracy, Rounding and Estimation',
    questions: [
      {
        q: 'Round 47 836 to the nearest thousand.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 48 000 (1)`
      },
      {
        q: 'Round 0.083 57 to 2 significant figures.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 0.084 (1)`
      },
      {
        q: 'Round 3.0749 to 3 significant figures.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 3.07 (1)`
      },
      {
        q: 'A length is measured as 8.4 cm correct to 1 decimal place. Write down the error interval for the length.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Lower bound = 8.35 cm (1)\n• Upper bound = 8.45 cm (1)\n• Accept: 8.35 ≤ l < 8.45`
      },
      {
        q: 'A mass is given as 250 g to the nearest 10 g. Write the error interval for the mass m.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Lower bound = 245 g (1)\n• Upper bound = 255 g (1)\n• Accept: 245 ≤ m < 255`
      },
      {
        q: 'Estimate the value of (39.7 × 5.1) ÷ 2.03. Show your working.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Round to 1 sf: (40 × 5) ÷ 2 (1)\n• 100 (1)\n• Accept any correct rounding strategy leading to a reasonable estimate`
      },
      {
        q: 'Estimate the value of √(98.3 × 4.1). Show your rounding.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• √(100 × 4) = √400 (1)\n• 20 (1)`
      },
      {
        q: 'A rectangle has length 7.3 cm and width 4.6 cm, both measured to 1 decimal place. Find the upper bound of the area.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Upper bound of length = 7.35 cm (1)\n• Upper bound of width = 4.65 cm (1)\n• Upper bound of area = 7.35 × 4.65 = 34.1775 cm² (1)`
      },
      {
        q: 'A journey takes 2.4 hours to 1 decimal place. The distance is 156 km to the nearest km. Calculate the upper bound of the average speed.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Upper bound of distance = 156.5 km (1)\n• Lower bound of time = 2.35 hours (1)\n• Upper bound of speed = 156.5 ÷ 2.35 (1)\n• 66.6 km/h (1 dp) (1)`
      },
      {
        q: 'A number is rounded to 2 decimal places giving 3.47. Write the error interval.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Lower bound = 3.465 (1)\n• Upper bound = 3.475 (1)\n• Accept: 3.465 ≤ n < 3.475`
      },
      {
        q: 'Without using a calculator, estimate the value of (5.2² × 9.8) / 0.51.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (25 × 10) / 0.5 (1)\n• 500 (1)`
      },
      {
        q: 'A box of cereal weighs 500 g to the nearest 10 g. 12 boxes are stacked. Find the lower bound of the total weight.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Lower bound of one box = 495 g (1)\n• 12 × 495 (1)\n• 5940 g (1)`
      },
      {
        q: 'Explain why the answer to 2.45 + 3.15 = 5.6 might not be exactly correct if both values are rounded to 2 decimal places.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Each value could be up to 0.005 above or below the stated figure (1)\n• Combined error could be up to 0.01, so true answer lies in [5.59, 5.61] (1)`
      },
      {
        q: 'A number n is rounded to the nearest integer and gives 14. State the error interval for n.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 13.5 ≤ n < 14.5 (1)`
      },
      {
        q: 'Estimate the cost of 38 items at £2.97 each.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 40 × £3 (1)\n• £120 (1)`
      },
      {
        q: 'A side of a square is measured as 9.5 cm to 1 decimal place. Find the lower bound of the perimeter.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Lower bound of side = 9.45 cm (1)\n• 4 × 9.45 = 37.8 cm (1)`
      },
      {
        q: 'Work out an estimate for (48.7 + 51.3) / (3.8 × 4.9).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (50 + 50) / (4 × 5) = 100 / 20 (1)\n• 5 (1)`
      },
      {
        q: 'A car travels 240 km (to the nearest 10 km) in 3 hours (to the nearest hour). Find the lower bound of the average speed.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Lower bound of distance = 235 km (1)\n• Upper bound of time = 3.5 hours (1)\n• 235 ÷ 3.5 = 67.1 km/h (1 dp) (1)`
      },
      {
        q: 'Give an example to show that the product of two numbers, each rounded to 2 significant figures, may not give the result rounded to 2 significant figures.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Valid example e.g. 3.4 × 2.5 = 8.5, but exact: 3.44 × 2.53 = 8.7032... ≠ 8.5 (1)\n• Clear explanation that rounding before multiplying introduces error (1)`
      },
      {
        q: 'A survey states there are 5 000 people in a town, rounded to the nearest 1 000. Write an inequality to show the possible actual number of people n.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 4500 ≤ n < 5500 (2) [award 1 mark if both bounds correct but inequality incorrect]`
      },
    ],
  },

  '1.4': {
    name: 'Powers, Roots and Standard Form',
    questions: [
      {
        q: 'Work out 5³.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 125 (1)`
      },
      {
        q: 'Work out √144 + ∛27.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• √144 = 12 AND ∛27 = 3 (1)\n• 15 (1)`
      },
      {
        q: 'Simplify: x⁵ × x³.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• x⁸ (1)`
      },
      {
        q: 'Simplify: (2x²y³)³.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Cube each element: 2³ = 8, x⁶, y⁹ (1)\n• 8x⁶y⁹ (1)`
      },
      {
        q: 'Write 4.7 × 10⁻³ as an ordinary number.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 0.0047 (1)`
      },
      {
        q: 'Write 0.000 056 in standard form.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 5.6 × 10⁻⁵ (1)`
      },
      {
        q: 'Write 3 480 000 in standard form.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 3.48 × 10⁶ (1)`
      },
      {
        q: 'Calculate (2.4 × 10⁵) × (3 × 10³). Give your answer in standard form.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2.4 × 3 = 7.2 AND 10⁵ × 10³ = 10⁸ (1)\n• 7.2 × 10⁸ (1)`
      },
      {
        q: 'Calculate (6 × 10⁷) ÷ (2.4 × 10³). Give your answer in standard form.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 6 ÷ 2.4 = 2.5 AND 10⁷ ÷ 10³ = 10⁴ (1)\n• 2.5 × 10⁴ (1)`
      },
      {
        q: 'Evaluate 8^(2/3).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• ∛8 = 2 (1)\n• 2² = 4 (1)`
      },
      {
        q: 'Evaluate 27^(−1/3).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• ∛27 = 3 (1)\n• 3⁻¹ = 1/3 (1)`
      },
      {
        q: 'Simplify: (x³)² ÷ x⁴.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (x³)² = x⁶ (1)\n• x⁶ ÷ x⁴ = x² (1)`
      },
      {
        q: 'Show that 4^(3/2) = 8.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 4^(1/2) = 2 (1)\n• 2³ = 8 ✓ (1)`
      },
      {
        q: 'The mass of a proton is 1.67 × 10⁻²⁷ kg. The mass of an electron is 9.11 × 10⁻³¹ kg. How many times heavier is a proton than an electron? Give your answer in standard form.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 1.67 × 10⁻²⁷ ÷ 9.11 × 10⁻³¹ (1)\n• 1.67 / 9.11 ≈ 0.1833... and 10⁻²⁷ ÷ 10⁻³¹ = 10⁴ (1)\n• 1.833... × 10³ (accept answers between 1.83 × 10³ and 1.84 × 10³) (1)`
      },
      {
        q: 'Simplify fully: (4a⁴b⁻²) / (2a⁻¹b³).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Divide coefficients: 4/2 = 2 (1)\n• a⁴ ÷ a⁻¹ = a⁵ (1)\n• b⁻² ÷ b³ = b⁻⁵, giving 2a⁵b⁻⁵ or 2a⁵/b⁵ (1)`
      },
      {
        q: 'Write down the value of 100⁰.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 1 (1)`
      },
      {
        q: 'Evaluate 16^(3/4).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• ⁴√16 = 2 (1)\n• 2³ = 8 (1)`
      },
      {
        q: 'The speed of light is approximately 3 × 10⁸ m/s. The distance from Earth to the Sun is 1.5 × 10¹¹ m. Work out the time, in minutes, it takes light to travel from the Sun to Earth.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Time (s) = 1.5 × 10¹¹ ÷ 3 × 10⁸ = 500 s (1)\n• Correct division of standard form numbers (1)\n• 500 ÷ 60 = 8.33 minutes (accept 8 minutes 20 seconds) (1)`
      },
      {
        q: 'Work out (3.2 × 10⁴) + (4.5 × 10³). Give your answer in standard form.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 32 000 + 4 500 = 36 500 (1)\n• 3.65 × 10⁴ (1)`
      },
      {
        q: 'Simplify (25x⁶)^(1/2).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 25^(1/2) = 5 (1)\n• 5x³ (1)`
      },
    ],
  },

  '2.1': {
    name: 'Algebraic Expressions',
    questions: [
      {
        q: 'Simplify: 4x + 3y − 2x + y.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 2x + 4y (1)`
      },
      {
        q: 'Expand and simplify: 3(2x − 4) + 2(x + 5).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 6x − 12 + 2x + 10 (1)\n• 8x − 2 (1)`
      },
      {
        q: 'Expand and simplify: (x + 3)(x − 5).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• x² − 5x + 3x − 15 (1)\n• x² − 2x − 15 (1)`
      },
      {
        q: 'Expand and simplify: (2x + 1)(3x − 4).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 6x² − 8x + 3x − 4 (1)\n• 6x² − 5x − 4 (1)`
      },
      {
        q: 'Factorise fully: 12x² − 8x.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Common factor 4x identified (1)\n• 4x(3x − 2) (1)`
      },
      {
        q: 'Factorise: x² + 7x + 12.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (x + 3)(x + 4) (2) [award 1 mark for two numbers that sum to 7 and multiply to 12 found]`
      },
      {
        q: 'Factorise: x² − 9.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• (x + 3)(x − 3) (1)`
      },
      {
        q: 'Factorise: 2x² + 5x − 3.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Attempt to split middle term or use trial for brackets (1)\n• Correct split: 2x² + 6x − x − 3 or correct brackets trial (1)\n• (2x − 1)(x + 3) (1)`
      },
      {
        q: 'Simplify: (x² − 4) / (x + 2).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Factorise numerator: (x + 2)(x − 2) (1)\n• x − 2 (1)`
      },
      {
        q: 'Show that (x + 2)² − (x − 2)² = 8x.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• (x + 2)² = x² + 4x + 4 (1)\n• (x − 2)² = x² − 4x + 4 (1)\n• Difference = 8x ✓ (1)`
      },
      {
        q: 'Expand and simplify: (x + 3)².',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• x² + 3x + 3x + 9 (1)\n• x² + 6x + 9 (1)`
      },
      {
        q: 'Simplify: (3x²y) × (4xy³).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Multiply coefficients: 12 (1)\n• x³y⁴, giving 12x³y⁴ (1)`
      },
      {
        q: 'Simplify: (6a³b²) ÷ (2ab⁴).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 6/2 = 3 (1)\n• 3a²b⁻² or 3a²/b² (1)`
      },
      {
        q: 'Given that x = 3 and y = −2, evaluate 2x² − 3y.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2(3)² − 3(−2) = 18 + 6 (1)\n• 24 (1)`
      },
      {
        q: 'Factorise fully: 3x²y − 6xy² + 9xy.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Identify HCF = 3xy (1)\n• 3xy(x − 2y + 3) (1)`
      },
      {
        q: 'Write an expression for the perimeter of a rectangle with length (3x + 2) and width (x − 1). Simplify your answer.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2(3x + 2) + 2(x − 1) = 6x + 4 + 2x − 2 (1)\n• 8x + 2 (1)`
      },
      {
        q: 'Prove that the product of two consecutive odd numbers is always odd.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Write consecutive odd numbers as (2n + 1) and (2n + 3) (1)\n• Product = (2n + 1)(2n + 3) = 4n² + 8n + 3 (1)\n• = 2(2n² + 4n + 1) + 1, which is of the form 2k + 1, hence odd (1)`
      },
      {
        q: 'Expand and simplify: (x − 1)(x + 2)(x + 3).',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Expand two brackets first, e.g. (x − 1)(x + 2) = x² + x − 2 (1)\n• (x² + x − 2)(x + 3) (1)\n• x³ + 3x² + x² + 3x − 2x − 6 (1)\n• x³ + 4x² + x − 6 (1)`
      },
      {
        q: 'Simplify: (x² + 2x − 15) / (x² − 25).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Numerator: (x + 5)(x − 3) (1)\n• Denominator: (x + 5)(x − 5) (1)\n• (x − 3)/(x − 5) (1)`
      },
      {
        q: 'Prove that n² + n is always even for all positive integers n.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• n² + n = n(n + 1) (1)\n• n and (n + 1) are consecutive integers, so one must be even, hence product is even (1)`
      },
    ],
  },

  '2.2': {
    name: 'Equations and Inequalities',
    questions: [
      {
        q: 'Solve: 5x − 3 = 17.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 5x = 20 (1)\n• x = 4 (1)`
      },
      {
        q: 'Solve: 3(2x + 1) = 4x + 11.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Expand: 6x + 3 = 4x + 11 (1)\n• 2x = 8 (1)\n• x = 4 (1)`
      },
      {
        q: 'Solve the equation x/4 + x/3 = 7.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Common denominator 12: 3x/12 + 4x/12 = 7 (1)\n• 7x = 84 (1)\n• x = 12 (1)`
      },
      {
        q: 'Solve: x² = 49.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• x = ±7 (1) [must have both values]`
      },
      {
        q: 'Solve: x² − 5x + 6 = 0.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Factorise: (x − 2)(x − 3) = 0 (1)\n• x = 2 (1)\n• x = 3 (1)`
      },
      {
        q: 'Solve: 2x² + 7x − 15 = 0.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• (2x − 3)(x + 5) = 0 (1)\n• x = 3/2 (1)\n• x = −5 (1)`
      },
      {
        q: 'Solve the inequality 3x − 4 > 11. Represent your answer on a number line.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 3x > 15, so x > 5 (1)\n• Open circle at 5, arrow pointing right (1)`
      },
      {
        q: 'Solve: −2 ≤ 3x + 1 < 10. List the integer values that satisfy the inequality.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• −3 ≤ 3x < 9 → −1 ≤ x < 3 (1)\n• Correct inequality −1 ≤ x < 3 (1)\n• Integer values: −1, 0, 1, 2 (1)`
      },
      {
        q: 'Solve simultaneously: 2x + y = 7 and x − y = 2.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Add equations to eliminate y: 3x = 9 (1)\n• x = 3 (1)\n• y = 1 (1)`
      },
      {
        q: 'Solve simultaneously: 3x + 2y = 11 and 2x − 3y = −4.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Multiply to match coefficients, e.g. ×3 and ×2: 9x + 6y = 33 and 4x − 6y = −8 (1)\n• Add: 13x = 25 (1)\n• x = 25/13... [check: use another valid approach for full marks] (1)\n• Alternatively: correct method leading to x = 1 and y = 4 (1) [award all 4 if both answers correct]`
      },
      {
        q: 'Make x the subject of: v = u + at.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• a = (v − u)/t OR t = (v − u)/a depending on instruction — award (1) for correct rearrangement making asked variable the subject`
      },
      {
        q: 'Make r the subject of: A = πr².',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• r² = A/π (1)\n• r = √(A/π) (1)`
      },
      {
        q: 'Make x the subject of: y = (3x − 2) / (x + 4).',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• y(x + 4) = 3x − 2 (1)\n• yx + 4y = 3x − 2 (1)\n• yx − 3x = −2 − 4y (1)\n• x = (−2 − 4y) / (y − 3) or equivalent (1)`
      },
      {
        q: 'Solve x² − 3x − 1 = 0. Give your solutions to 2 decimal places.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Correct use of quadratic formula: x = (3 ± √(9 + 4)) / 2 = (3 ± √13) / 2 (1)\n• x = 3.30 (1)\n• x = −0.30 (1)`
      },
      {
        q: 'Solve: (x + 1)² = 20. Give your solutions in the form p ± q√5.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• x + 1 = ±√20 = ±2√5 (1)\n• x = −1 ± 2√5 (1)\n• p = −1, q = 2 (1)`
      },
      {
        q: 'Tickets to a show cost £x for adults and £y for children. 3 adults and 2 children pay £31. 1 adult and 4 children pay £19. Find x and y.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Set up equations: 3x + 2y = 31 and x + 4y = 19 (1)\n• Eliminate one variable, e.g. 3x + 2y = 31 and 3x + 12y = 57 (1)\n• 10y = 26, y = 2.60 (1)\n• x = 19 − 4(2.60) = £8.60 (1)`
      },
      {
        q: 'Solve: x² + 6x + 9 = 0. Explain what the solution tells you about the graph of y = x² + 6x + 9.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• (x + 3)² = 0 → x = −3 (repeated root) (1)\n• The graph only touches (not crosses) the x-axis (1)\n• At x = −3 (1)`
      },
      {
        q: 'Find the integers n such that n² − 5n + 4 ≤ 0.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Factorise: (n − 1)(n − 4) ≤ 0 (1)\n• 1 ≤ n ≤ 4 (1)\n• Integers: 1, 2, 3, 4 (1)`
      },
      {
        q: 'Solve: 1/(x + 1) + 1/(x − 1) = 1. Give your solutions to 2 decimal places.',
        marks: 5,
        requiresDiagram: false,
        markScheme: `• Multiply through by (x + 1)(x − 1): (x − 1) + (x + 1) = (x + 1)(x − 1) (1)\n• 2x = x² − 1 (1)\n• x² − 2x − 1 = 0 (1)\n• x = (2 ± √8) / 2 = 1 ± √2 (1)\n• x = 2.41 or x = −0.41 (1)`
      },
      {
        q: 'Solve the simultaneous equations: y = x² − 3x + 2 and y = x − 1.',
        marks: 5,
        requiresDiagram: false,
        markScheme: `• Set equal: x² − 3x + 2 = x − 1 (1)\n• x² − 4x + 3 = 0 (1)\n• (x − 1)(x − 3) = 0 (1)\n• x = 1, y = 0 (1)\n• x = 3, y = 2 (1)`
      },
    ],
  },

  '2.3': {
    name: 'Sequences',
    questions: [
      {
        q: 'Write down the next two terms of the sequence: 3, 7, 11, 15, ...',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 19, 23 (1)`
      },
      {
        q: 'Find the nth term of the sequence: 5, 8, 11, 14, ...',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Common difference = 3 (1)\n• 3n + 2 (1)`
      },
      {
        q: 'The nth term of a sequence is 4n − 7. Find the 10th term.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 4(10) − 7 = 33 (1)`
      },
      {
        q: 'The nth term of a sequence is 4n − 7. Is 100 a term in this sequence? Explain your reasoning.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 4n − 7 = 100 → n = 107/4 = 26.75 (1)\n• Not a whole number, so 100 is NOT a term in the sequence (1)`
      },
      {
        q: 'Find the nth term of the sequence: 2, 5, 10, 17, 26, ...',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Second differences are constant (= 2), so quadratic (1)\n• n² + 1 (1)`
      },
      {
        q: 'A sequence has first term 3 and each subsequent term is double the previous term plus 1. Write down the first four terms.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 3, 7, 15, 31 (2) [award 1 mark for two correct terms after 3]`
      },
      {
        q: 'The Fibonacci sequence starts 1, 1, 2, 3, 5, 8, ... Write down the next three terms.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 13, 21, 34 (1)`
      },
      {
        q: 'Find the nth term of the sequence with first term 48 and common difference −6.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• a = 48, d = −6 (1)\n• 54 − 6n (1)`
      },
      {
        q: 'Show that the sequence 3n² + 2 generates a sequence with second differences equal to 6.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• First few terms: 5, 14, 29, 50, ... (1)\n• First differences: 9, 15, 21, ... (1)\n• Second differences: 6, 6, ... = 6 ✓ (1)`
      },
      {
        q: 'The nth term of sequence A is 3n + 1. The nth term of sequence B is n² − 2. Find the values of n for which both sequences have the same term.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Set equal: 3n + 1 = n² − 2 (1)\n• n² − 3n − 3 = 0 ... no, let's use: n² − 3n − 3 = 0 (1)\n• Correct quadratic manipulation (1)\n• n = (3 ± √21) / 2; valid positive integer n = 4: check 13 and 14 — not equal, so no positive integer solution (1) [award marks for correct algebraic approach]`
      },
      {
        q: 'Write down the first five terms of the sequence with nth term (−1)ⁿ × n.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (−1)¹×1, (−1)²×2, (−1)³×3, ... = −1, 2, −3, 4, −5 (2) [award 1 for at least 3 correct]`
      },
      {
        q: 'A sequence begins 100, 50, 25, 12.5, ... Describe the term-to-term rule and find the next term.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Multiply by 1/2 (or divide by 2) each time (1)\n• 6.25 (1)`
      },
      {
        q: 'In an arithmetic sequence, the 3rd term is 11 and the 7th term is 27. Find the first term and the common difference.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 7th − 3rd = 4d = 16, so d = 4 (1)\n• 11 = a + 2d = a + 8 (1)\n• a = 3 (1)`
      },
      {
        q: 'The nth term of a sequence is n/(n+1). Write the first four terms and explain whether the sequence is increasing or decreasing.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 1/2, 2/3, 3/4, 4/5 (1)\n• Increasing (1)\n• Each fraction gets closer to 1 but never reaches 1 / or numerator grows relative to denominator (1)`
      },
      {
        q: 'Find the sum of the first 20 terms of the arithmetic sequence: 4, 9, 14, 19, ...',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• a = 4, d = 5, n = 20 (1)\n• S = 20/2 × (2×4 + 19×5) = 10 × (8 + 95) = 10 × 103 (1)\n• 1030 (1)`
      },
      {
        q: 'Describe the term-to-term rule and position-to-term rule of the sequence: 1, 4, 9, 16, 25, ...',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Term-to-term: add consecutive odd numbers (3, 5, 7, ...) or valid description (1)\n• Position-to-term: nth term = n² (1)`
      },
      {
        q: 'A geometric sequence has first term 2 and common ratio 3. Write down the first four terms and find the nth term.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• First four terms: 2, 6, 18, 54 (1)\n• nth term = 2 × 3^(n−1) (2) [award 1 for correct form without simplification]`
      },
      {
        q: 'The nth term of a sequence is given by 2n² − 3n + 1. Is the sequence increasing for all n ≥ 1? Justify your answer.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Evaluate at n = 1: 0, n = 2: 3, n = 3: 10 (1)\n• Differences: 3, 7, 11, ... increasing (1)\n• Sequence decreases from n=1 to n=1 but increases from n=2 onward — or correct analysis showing minimum at n ≈ 0.75 (1)`
      },
      {
        q: 'A pattern of squares is built: Pattern 1 has 1 square, Pattern 2 has 5 squares, Pattern 3 has 13 squares. Find the number of squares in Pattern n.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Differences: 4, 8, ... second differences: 4 (1)\n• Quadratic form: an² + bn + c (1)\n• a = 2, using simultaneous equations to find b and c (1)\n• 2n² − 2n + 1 (1)`
      },
      {
        q: 'Prove that the sum of three consecutive even integers is always a multiple of 6.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Express as: 2n, 2n+2, 2n+4 (1)\n• Sum = 6n + 6 (1)\n• = 6(n + 1), which is a multiple of 6 ✓ (1)`
      },
    ],
  },

  '2.4': {
    name: 'Graphs',
    questions: [
      {
        q: 'Sketch the graph of y = x² − 4. Label the coordinates where the graph crosses the x-axis and y-axis.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct parabola shape, U-shaped, symmetric about y-axis (1)\n• y-intercept at (0, −4) labeled (1)\n• x-intercepts at (2, 0) and (−2, 0) labeled (1)`
      },
      {
        q: 'Draw the graph of y = 2x − 3 for values of x from −1 to 4.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct calculation of at least 3 points (1)\n• Points plotted correctly (1)\n• Straight line drawn through all correct points (1)`
      },
      {
        q: 'Find the gradient and y-intercept of the line 3x − 2y = 6.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Rearrange: y = 3x/2 − 3 (1)\n• Gradient = 3/2, y-intercept = −3 (1)`
      },
      {
        q: 'Find the equation of the straight line passing through (2, 5) and (6, 13).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Gradient = (13 − 5)/(6 − 2) = 8/4 = 2 (1)\n• Using y − y₁ = m(x − x₁): y − 5 = 2(x − 2) (1)\n• y = 2x + 1 (1)`
      },
      {
        q: 'Find the equation of the line perpendicular to y = 3x + 4 that passes through (6, 1).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Perpendicular gradient = −1/3 (1)\n• y − 1 = −1/3(x − 6) (1)\n• y = −x/3 + 3 (1)`
      },
      {
        q: 'Sketch the graph of y = x³ − x. Label any intercepts with the axes.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct cubic shape (1)\n• Intercepts at (0,0), (1,0), (−1,0) labeled (1)\n• Correct orientation: rises to right, falls to left (1)`
      },
      {
        q: 'On the coordinate grid, draw the graph of y = sin x for 0° ≤ x ≤ 360°. Label the key points.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct shape — smooth wave (1)\n• Passes through (0,0), (90°,1), (180°,0), (270°,−1), (360°,0) (1)\n• All five key coordinates labeled (1)`
      },
      {
        q: 'Use the graph of y = x² − 2x − 3 to solve the equation x² − 2x − 3 = 0.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Read x-intercepts from graph (1)\n• x = −1 and x = 3 (1)`
      },
      {
        q: 'Describe the transformation that maps y = f(x) onto y = f(x − 3) + 2.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Translation (1)\n• Vector (3, 2) or right 3 and up 2 (1)`
      },
      {
        q: 'Sketch the graph of y = 1/x for x > 0 and x < 0. State the equations of the asymptotes.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct reciprocal graph shape in first and third quadrants (1)\n• x = 0 (1)\n• y = 0 (1)`
      },
      {
        q: 'Sketch the graph of y = 2ˣ for −2 ≤ x ≤ 3. Label two points on the curve.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct exponential growth shape (1)\n• Passes through (0, 1) labeled (1)\n• One other correct labeled point, e.g. (1, 2) or (−1, 0.5) (1)`
      },
      {
        q: 'Describe fully the transformation that maps y = x² onto y = (x + 2)² − 5.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Translation (1)\n• Vector (−2, −5) or left 2 and down 5 (1)`
      },
      {
        q: 'Find the turning point of y = x² − 6x + 11 by completing the square.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• y = (x − 3)² − 9 + 11 (1)\n• y = (x − 3)² + 2 (1)\n• Turning point at (3, 2) (minimum) (1)`
      },
      {
        q: 'Sketch the graph of y = cos x for 0° ≤ x ≤ 360°. State the maximum and minimum values.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct cosine curve shape (1)\n• Starts at (0°, 1) and returns to (360°, 1) (1)\n• Maximum = 1, minimum = −1 (1)`
      },
      {
        q: 'The graph of y = f(x) is drawn. Sketch y = −f(x) and describe the transformation.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Reflection in the x-axis (1)\n• Sketch showing correct reflection (1)`
      },
      {
        q: 'A line has equation y = mx + 3. It passes through the point (4, 11). Find the value of m.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Substitute: 11 = 4m + 3 (1)\n• m = 2 (1)`
      },
      {
        q: 'Sketch y = tan x for 0° < x < 180°, showing the asymptote.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct shape in two regions (1)\n• Asymptote at x = 90° shown as dashed line (1)\n• Passes through (0°, 0) and (180°, 0) (1)`
      },
      {
        q: 'On a speed-time graph, the area under the graph represents distance. A trapezium-shaped region has parallel sides of 10 m/s and 16 m/s and a height of 8 s. Find the distance travelled.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Area of trapezium = ½(a + b)h (1)\n• = ½(10 + 16) × 8 (1)\n• = 104 m (1)`
      },
      {
        q: 'Describe how you can tell from the equation y = ax² + bx + c whether the parabola opens upwards or downwards.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• If a > 0, opens upward (U-shape); if a < 0, opens downward (n-shape) (1)`
      },
      {
        q: 'Find the x-coordinates of the points of intersection of y = x + 3 and y = x² + x − 6.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Set equal: x + 3 = x² + x − 6 (1)\n• x² − 9 = 0 (1)\n• (x + 3)(x − 3) = 0 (1)\n• x = −3 and x = 3 (1)`
      },
    ],
  },

  '3.1': {
    name: 'Ratio and Proportion',
    questions: [
      {
        q: 'Divide £360 in the ratio 3 : 5.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 3 + 5 = 8 parts; one part = £45 (1)\n• £135 : £225 (1)`
      },
      {
        q: 'Simplify the ratio 24 : 36 : 48.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 2 : 3 : 4 (1)`
      },
      {
        q: 'A recipe uses flour and butter in the ratio 5 : 2. If 350 g of flour is used, how much butter is needed?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 1 part = 70 g (1)\n• Butter = 2 × 70 = 140 g (1)`
      },
      {
        q: 'Amy and Ben share money in the ratio 3 : 7. Ben receives £84 more than Amy. Work out how much each person receives.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Difference in ratio parts = 4 parts = £84 (1)\n• 1 part = £21 (1)\n• Amy = £63, Ben = £147 (1)`
      },
      {
        q: 'y is directly proportional to x. When x = 4, y = 20. Find y when x = 7.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• y = kx → 20 = 4k (1)\n• k = 5 (1)\n• y = 5 × 7 = 35 (1)`
      },
      {
        q: 'y is inversely proportional to x. When x = 3, y = 12. Find y when x = 9.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• y = k/x → 12 = k/3, so k = 36 (1)\n• y = 36/9 (1)\n• y = 4 (1)`
      },
      {
        q: 'P is proportional to the square of Q. When Q = 4, P = 48. Find P when Q = 6.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• P = kQ² → 48 = 16k (1)\n• k = 3 (1)\n• P = 3 × 36 = 108 (1)`
      },
      {
        q: 'On a map, 1 cm represents 5 km. Two towns are 37 km apart. How far apart are they on the map?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 37 ÷ 5 (1)\n• 7.4 cm (1)`
      },
      {
        q: 'A model car has a scale of 1 : 24. The real car is 4.32 m long. Find the length of the model in cm.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 4.32 m = 432 cm (1)\n• 432 ÷ 24 = 18 cm (1)`
      },
      {
        q: '5 workers can build a wall in 12 days. How long would it take 8 workers, assuming they work at the same rate?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Inverse proportion: 5 × 12 = 60 worker-days (1)\n• 60 ÷ 8 (1)\n• 7.5 days (1)`
      },
      {
        q: 'A car travels 180 km on 15 litres of fuel. How far can it travel on 25 litres?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 180/15 = 12 km per litre (1)\n• 25 × 12 = 300 km (1)`
      },
      {
        q: 'Oranges cost £1.80 for 6 or £2.60 for 10. Which is better value? Show your working.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 6 for £1.80 → 30p each; 10 for £2.60 → 26p each (1)\n• 10 for £2.60 is better value (1)`
      },
      {
        q: 'In a class, the ratio of boys to girls is 3 : 4. There are 28 girls. How many students are there altogether?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 4 parts = 28, so 1 part = 7 (1)\n• Total = 7 × 7 = 49 (1)`
      },
      {
        q: 'y is inversely proportional to x². When x = 2, y = 9. Find y when x = 6.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• y = k/x² → 9 = k/4, so k = 36 (1)\n• y = 36/36 (1)\n• y = 1 (1)`
      },
      {
        q: 'The exchange rate is £1 = $1.28. Amelia exchanges £450. How many dollars does she receive?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 450 × 1.28 (1)\n• $576 (1)`
      },
      {
        q: 'Concrete is made from cement, sand and gravel in the ratio 1 : 2 : 3. How much sand is needed to make 480 kg of concrete?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Total parts = 6; each part = 80 kg (1)\n• Sand = 2 parts (1)\n• 160 kg (1)`
      },
      {
        q: 'Write the ratio 1.5 : 2.4 in the form 1 : n.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Divide both by 1.5 (1)\n• 1 : 1.6 (1)`
      },
      {
        q: 'T is directly proportional to √x. When T = 8, x = 16. Find x when T = 15.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• T = k√x → 8 = 4k (1)\n• k = 2, so T = 2√x (1)\n• 15 = 2√x → √x = 7.5 (1)\n• x = 56.25 (1)`
      },
      {
        q: 'Two similar triangles have corresponding sides in ratio 2 : 5. The area of the smaller triangle is 16 cm². Find the area of the larger triangle.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Area scale factor = (5/2)² = 25/4 (1)\n• 16 × 25/4 (1)\n• 100 cm² (1)`
      },
      {
        q: 'A journey of 300 km is shown as 6 cm on a map. A road on the map measures 4.5 cm. What is the actual length of this road?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Scale: 1 cm = 50 km (1)\n• 4.5 × 50 (1)\n• 225 km (1)`
      },
    ],
  },

  '3.2': {
    name: 'Rates of Change and Compound Measures',
    questions: [
      {
        q: 'A car travels 240 km in 3 hours. Calculate the average speed in km/h.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Speed = Distance ÷ Time (1)\n• 80 km/h (1)`
      },
      {
        q: 'A train travels at 120 km/h for 2 hours 30 minutes. How far does it travel?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2.5 hours (1)\n• 120 × 2.5 = 300 km (1)`
      },
      {
        q: 'A metal block has mass 810 g and volume 90 cm³. Calculate its density in g/cm³.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Density = Mass ÷ Volume (1)\n• 9 g/cm³ (1)`
      },
      {
        q: 'A substance has density 8.5 g/cm³. Find the mass of 40 cm³ of the substance.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Mass = Density × Volume (1)\n• 340 g (1)`
      },
      {
        q: 'A tap fills a 180-litre tank in 45 minutes. Calculate the flow rate in litres per minute.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 180 ÷ 45 (1)\n• 4 litres per minute (1)`
      },
      {
        q: 'A man works 37.5 hours per week. Convert this to seconds.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 37.5 × 60 = 2250 minutes (1)\n• 2250 × 60 (1)\n• 135 000 seconds (1)`
      },
      {
        q: 'A car accelerates from 0 to 60 km/h in 8 seconds. Calculate the acceleration in km/h per second.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Acceleration = change in speed / time (1)\n• 60 ÷ 8 = 7.5 km/h per second (1)`
      },
      {
        q: 'Convert 90 km/h into m/s.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 90 × 1000 ÷ 3600 (1)\n• 25 m/s (1)`
      },
      {
        q: 'A 600 g packet of cereal costs £2.40. A 900 g packet costs £3.45. Which is better value for money? Show your working.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 600 g: 2.40/600 = 0.4p/g (1)\n• 900 g: 3.45/900 = 0.383p/g (1)\n• 900 g packet is better value (1)`
      },
      {
        q: 'A gradient of a distance-time graph is 40 km/h for the first hour, then 0 for 30 minutes, then 60 km/h for 2 hours. How far has the object travelled in total?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 40 × 1 = 40 km (1)\n• 0 km in middle section (1)\n• 60 × 2 = 120 km; total = 160 km (1)`
      },
      {
        q: 'A slope has a gradient of 1 in 10 (1 metre rise per 10 metres horizontal). Express this gradient as a percentage.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 1/10 × 100 (1)\n• 10% (1)`
      },
      {
        q: 'Water flows through a pipe at 2 litres per second. How long (in minutes) will it take to fill a 900-litre tank?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Time = 900 ÷ 2 = 450 seconds (1)\n• 450 ÷ 60 (1)\n• 7.5 minutes (1)`
      },
      {
        q: 'A cheetah runs at 100 km/h. A lion runs at 80 km/h. How much further does the cheetah run in 15 minutes?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Cheetah: 100 × 0.25 = 25 km (1)\n• Lion: 80 × 0.25 = 20 km (1)\n• Difference = 5 km (1)`
      },
      {
        q: 'On a velocity-time graph, a straight line goes from (0, 0) to (5, 20). Describe the motion and calculate the acceleration.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Uniform acceleration (1)\n• Acceleration = gradient = 20/5 (1)\n• 4 m/s² (1)`
      },
      {
        q: 'A population grows from 5 000 to 6 200 over 4 years. Calculate the average annual rate of growth as a percentage of the original population.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Total increase = 1 200 (1)\n• Annual increase = 300 (1)\n• 300/5000 × 100 = 6% per year (1)`
      },
      {
        q: 'An alloy is made of copper and zinc with density 8.9 g/cm³ and 7.1 g/cm³ respectively, mixed in equal volumes. Estimate the density of the alloy.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Equal volumes, so average density (1)\n• (8.9 + 7.1) / 2 (1)\n• 8 g/cm³ (1)`
      },
      {
        q: 'A cyclist rides 60 km at 20 km/h and then a further 40 km at 16 km/h. Find the average speed for the whole journey.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Time for first leg = 3 hours (1)\n• Time for second leg = 2.5 hours (1)\n• Total: 100 km in 5.5 hours (1)\n• Average speed = 100/5.5 = 18.18 km/h (2 dp) (1)`
      },
      {
        q: 'A substance with density 2.7 g/cm³ is melted and poured into a cylinder of radius 3 cm and height 10 cm. Calculate the mass of substance used. (π ≈ 3.14)',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Volume = π × 3² × 10 (1)\n• V ≈ 282.6 cm³ (1)\n• Mass = 2.7 × 282.6 (1)\n• ≈ 763 g (1)`
      },
      {
        q: 'A particle moves so that its displacement s (metres) is given by s = 5t² + 3t. Find the average rate of change of s between t = 1 and t = 3.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• s(3) = 45 + 9 = 54 (1)\n• s(1) = 5 + 3 = 8 (1)\n• Average rate = (54 − 8)/(3 − 1) = 23 m/s (1)`
      },
      {
        q: 'Two cars A and B start from the same point. Car A travels north at 60 km/h. Car B travels east at 80 km/h. How far apart are they after 2 hours?',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Car A travels 120 km north (1)\n• Car B travels 160 km east (1)\n• Pythagoras: √(120² + 160²) = √(14400 + 25600) = √40000 (1)\n• 200 km (1)`
      },
    ],
  },

  '4.1': {
    name: 'Properties of Shapes and Angles',
    questions: [
      {
        q: 'State the sum of interior angles of a hexagon.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• (6 − 2) × 180 = 720° (1)`
      },
      {
        q: 'A regular polygon has an interior angle of 140°. How many sides does it have?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Exterior angle = 180 − 140 = 40° (1)\n• Number of sides = 360 ÷ 40 (1)\n• 9 sides (1)`
      },
      {
        q: 'Find the size of angle x. Angles on a straight line: 3x + 10 and 2x − 20.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Angles sum to 180°: 3x + 10 + 2x − 20 = 180 (1)\n• 5x − 10 = 180 → 5x = 190 (1)\n• x = 38° (1)`
      },
      {
        q: 'Two parallel lines are cut by a transversal. One co-interior angle is 112°. Find the other co-interior angle.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Co-interior angles sum to 180° (1)\n• 180 − 112 = 68° (1)`
      },
      {
        q: 'A triangle has angles in the ratio 1 : 2 : 3. Find each angle.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Total parts = 6; 180 ÷ 6 = 30° per part (1)\n• 30°, 60°, 90° (1)`
      },
      {
        q: 'Find the exterior angle of a regular octagon.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 360 ÷ 8 (1)\n• 45° (1)`
      },
      {
        q: 'ABCD is a parallelogram. Angle A = 72°. Find angles B, C and D.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Angle C = 72° (opposite angles equal) (1)\n• Angle B = Angle D = 108° (co-interior angles) (1)`
      },
      {
        q: 'Prove that the sum of angles in a triangle is 180°.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Draw line parallel to base through apex (1)\n• Use alternate angles: angle a = angle x and angle b = angle y (1)\n• Angles on a straight line: x + C + y = 180°, so a + b + C = 180° ✓ (1)`
      },
      {
        q: 'A kite has angles 65°, 65°, 110° and x°. Find x.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Angles in quadrilateral sum to 360° (1)\n• x = 360 − 65 − 65 − 110 = 120° (1)`
      },
      {
        q: 'Two angles of a triangle are 47° and 63°. The triangle is isoceles. Find all three possible sets of angles.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Third angle = 180 − 47 − 63 = 70° (1)\n• If 47° repeated: 47 + 47 + 86 = 180°... need to check validity (1)\n• Valid set: 47°, 63°, 70° (and 47°, 47°, 86° if valid) — award marks for correct reasoning (1)`
      },
      {
        q: 'State the properties that distinguish a rhombus from a square.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• A rhombus has all sides equal but angles are not 90° (1)\n• A square has all sides equal AND all right angles (1)`
      },
      {
        q: 'Find angle PQR given that PQ is parallel to SR, angle QPR = 35° and angle PSR = 70°.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Angle PRS = 35° (alternate angles, PQ ∥ SR) (1)\n• Angle PSR + angle RSP... correct use of angle rules (1)\n• Correct final answer with justification (1)`
      },
      {
        q: 'The angles of a quadrilateral are 2x, 3x, 4x and 5x. Find x and state each angle.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 2x + 3x + 4x + 5x = 360 → 14x = 360 (1)\n• x = 360/14 ≈ 25.7° (1)\n• Angles: ≈51.4°, 77.1°, 102.9°, 128.6° (1)`
      },
      {
        q: 'Explain why the exterior angles of any polygon sum to 360°.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Travelling around the polygon, you turn through a complete revolution (360°) (1)\n• Each exterior angle contributes to this rotation, so they sum to 360° regardless of number of sides (1)`
      },
      {
        q: 'In a regular polygon, each interior angle is 150°. Find the number of sides and the sum of interior angles.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Exterior angle = 30°, sides = 360/30 = 12 (1)\n• Sum of interior angles = (12 − 2) × 180 = 1800° (1)\n• Or: 12 × 150 = 1800° (1)`
      },
      {
        q: 'AB and CD are straight lines that intersect at O. Angle AOC = 3x + 10° and angle BOD = 5x − 20°. Find x and calculate all four angles at O.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Vertically opposite: 3x + 10 = 5x − 20 (1)\n• 2x = 30, x = 15 (1)\n• AOC = BOD = 55° (1)\n• AOD = BOC = 180 − 55 = 125° (1)`
      },
      {
        q: 'Show that the interior angles of a regular hexagon are each 120°.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Sum of interior angles = (6 − 2) × 180 = 720° (1)\n• Each angle = 720 ÷ 6 = 120° ✓ (1)`
      },
      {
        q: 'A quadrilateral has one line of symmetry. Name the type of quadrilateral and state its properties.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Kite (1)\n• Two pairs of adjacent equal sides; one diagonal bisects the other at right angles; one pair of equal angles (1)`
      },
      {
        q: 'Find the value of y if the angles in a pentagon are: y, y+10, y+20, y+30, y+40.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Sum of pentagon angles = 540° (1)\n• 5y + 100 = 540 → 5y = 440 (1)\n• y = 88° (1)`
      },
      {
        q: 'Describe the symmetry properties of a rectangle.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2 lines of symmetry (along the midpoints of opposite sides) (1)\n• Rotational symmetry of order 2 (1)`
      },
    ],
  },

  '4.2': {
    name: 'Mensuration: Area, Perimeter and Volume',
    questions: [
      {
        q: 'Find the area of a triangle with base 14 cm and perpendicular height 9 cm.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Area = ½ × 14 × 9 (1)\n• 63 cm² (1)`
      },
      {
        q: 'A trapezium has parallel sides of 8 cm and 12 cm and a perpendicular height of 5 cm. Find its area.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Area = ½(8 + 12) × 5 (1)\n• 50 cm² (1)`
      },
      {
        q: 'Find the circumference of a circle with radius 7 cm. Give your answer in terms of π.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• C = 2πr = 2π × 7 (1)\n• 14π cm (1)`
      },
      {
        q: 'A circle has area 50.24 cm². Find the radius. (Use π ≈ 3.14)',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• r² = 50.24/3.14 = 16 (1)\n• r = 4 cm (1)`
      },
      {
        q: 'A semicircle has diameter 12 cm. Find its area and perimeter.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Area = ½ × π × 6² = 18π ≈ 56.5 cm² (1)\n• Perimeter = πr + 2r = 6π + 12 (1)\n• ≈ 30.8 cm (1)`
      },
      {
        q: 'Find the volume of a cuboid with dimensions 5 cm × 4 cm × 8 cm.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• V = 5 × 4 × 8 (1)\n• 160 cm³ (1)`
      },
      {
        q: 'A cylinder has radius 5 cm and height 10 cm. Find the volume. Give your answer in terms of π.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• V = π × 5² × 10 (1)\n• 250π cm³ (1)`
      },
      {
        q: 'A cone has base radius 6 cm and height 8 cm. Find the volume. (V = ⅓πr²h)',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• V = ⅓ × π × 36 × 8 (1)\n• 96π ≈ 301.6 cm³ (1)`
      },
      {
        q: 'A sphere has radius 3 cm. Find its surface area and volume. (A = 4πr², V = ⁴⁄₃πr³)',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• SA = 4π × 9 = 36π cm² (1)\n• V = 4/3 × π × 27 = 36π cm³ (1)\n• Both in terms of π or as decimals correct to 1 dp (1)`
      },
      {
        q: 'A compound shape consists of a rectangle 10 cm × 6 cm with a semicircle of diameter 6 cm on top. Find the total area.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Rectangle area = 60 cm² (1)\n• Radius of semicircle = 3 cm (1)\n• Semicircle area = ½π(3²) = 4.5π ≈ 14.1 cm² (1)\n• Total ≈ 74.1 cm² (1)`
      },
      {
        q: 'A prism has a triangular cross-section with base 6 cm and height 4 cm. The prism is 10 cm long. Find the volume.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Cross-sectional area = ½ × 6 × 4 = 12 cm² (1)\n• V = 12 × 10 (1)\n• 120 cm³ (1)`
      },
      {
        q: 'A sector of a circle has radius 8 cm and angle 135°. Find the arc length and area.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Arc length = (135/360) × 2π × 8 = 6π cm (1)\n• Sector area = (135/360) × π × 64 = 24π cm² (1)\n• Arc ≈ 18.8 cm (1)\n• Area ≈ 75.4 cm² (1)`
      },
      {
        q: 'A hollow cylinder has external radius 5 cm, internal radius 3 cm and height 10 cm. Find the volume.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• External volume = π × 25 × 10 = 250π (1)\n• Internal volume = π × 9 × 10 = 90π (1)\n• Volume = 160π ≈ 502.7 cm³ (1)`
      },
      {
        q: 'The surface area of a cube is 96 cm². Find the length of one side and the volume.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• 6l² = 96, l² = 16 (1)\n• l = 4 cm (1)\n• Volume = 64 cm³ (1)`
      },
      {
        q: 'Two similar cylinders have heights 4 cm and 6 cm. The volume of the smaller is 80π cm³. Find the volume of the larger.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Linear scale factor = 6/4 = 3/2 (1)\n• Volume scale factor = (3/2)³ = 27/8 (1)\n• Volume = 80π × 27/8 = 270π cm³ ≈ 848.2 cm³ (1)`
      },
      {
        q: 'A swimming pool is 25 m long, 10 m wide, and averages 1.5 m deep. How many litres of water does it hold? (1 m³ = 1000 litres)',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Volume = 25 × 10 × 1.5 = 375 m³ (1)\n• 375 × 1000 (1)\n• 375 000 litres (1)`
      },
      {
        q: 'Find the area of a parallelogram with base 9 cm and perpendicular height 6 cm.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 9 × 6 = 54 cm² (1)`
      },
      {
        q: 'A frustum is formed by removing a small cone (radius 2 cm, height 3 cm) from a large cone (radius 6 cm, height 9 cm). Find the volume of the frustum.',
        marks: 5,
        requiresDiagram: false,
        markScheme: `• Large cone volume = ⅓π × 36 × 9 = 108π (1)\n• Small cone volume = ⅓π × 4 × 3 = 4π (1)\n• Frustum = 108π − 4π = 104π (1)\n• ≈ 326.7 cm³ (1)\n• Correct setup and subtraction shown (1)`
      },
      {
        q: 'A wire of radius 0.5 mm is bent into a circle of circumference 31.4 mm. Find the volume of metal used.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Volume of cylinder: πr²l where l = length of wire (1)\n• l = circumference of circle = 31.4 mm (1)\n• V = π × 0.25 × 31.4 (1)\n• ≈ 24.66 mm³ (1)`
      },
      {
        q: 'A sector has perimeter 30 cm and radius 9 cm. Find the angle of the sector.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Perimeter = 2r + arc length → arc = 30 − 18 = 12 cm (1)\n• Arc length = (θ/360) × 2π × 9 = 12 (1)\n• θ = 12 × 360 / (18π) (1)\n• θ ≈ 76.4° (1)`
      },
    ],
  },

  '4.3': {
    name: 'Transformations',
    questions: [
      {
        q: 'On the coordinate grid, reflect the triangle with vertices at (1,1), (3,1) and (1,4) in the line y = x. Write down the coordinates of the image.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Correct reflection in y = x (2)\n• Each point (x,y) maps to (y,x) (1)\n• Accept: image vertices at (1,1), (1,3) and (4,1)`
      },
      {
        q: 'Describe fully the single transformation that maps triangle A onto triangle B, where A has vertices (1,1), (3,1), (1,3) and B has vertices (−1,1), (−3,1), (−1,3).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Reflection (1)\n• In the y-axis (x = 0) (1)`
      },
      {
        q: 'Rotate the shape with vertices (2,1), (4,1), (4,3) by 90° clockwise about the origin. State the new coordinates.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Rule for 90° clockwise: (x, y) → (y, −x) (1)\n• Correct application to all three vertices (1)\n• (1,−2), (1,−4), (3,−4) (1)`
      },
      {
        q: 'Translate the triangle with vertices (1,2), (3,2), (2,4) by the vector (−3, 1). State the coordinates of the image.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Add (−3, 1) to each vertex (1)\n• (−2,3), (0,3), (−1,5) (1)`
      },
      {
        q: 'Enlarge the shape with vertices (0,0), (2,0), (0,3) by scale factor 2, centre (0,0). State the new vertices.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Multiply each coordinate by 2 (1)\n• (0,0), (4,0), (0,6) (1)`
      },
      {
        q: 'Enlarge the triangle with vertices (3,2), (5,2), (3,5) by scale factor −1, centre (4,3). State the new vertices.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Find vectors from centre to each vertex (1)\n• Multiply by −1 and add back to centre (1)\n• (5,4), (3,4), (5,1) (1)`
      },
      {
        q: 'Describe fully the transformation that maps A(2,1) to B(6,3) using an enlargement.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Scale factor identified (1)\n• Centre of enlargement identified correctly (1)\n• Full description: Enlargement, scale factor k, centre (x,y) (1)`
      },
      {
        q: 'A shape is reflected in y = −x. The original vertex is at (3, −2). Find the image.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Rule for reflection in y = −x: (x,y) → (−y, −x) (1)\n• Image: (2, −3) (1)`
      },
      {
        q: 'On the grid, draw the image of the shape after a rotation of 180° about the origin.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Rule: (x,y) → (−x, −y) (1)\n• All vertices correctly plotted and joined (1)`
      },
      {
        q: 'Triangle P has vertices (1,1), (4,1), (4,3). Triangle Q has vertices (2,2), (8,2), (8,6). Describe fully the single transformation that maps P to Q.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Enlargement (1)\n• Scale factor = 2 (1)\n• Centre of enlargement = (0,0) (1)`
      },
      {
        q: 'Reflect the point (5, 3) in the line x = 2. State the coordinates of the image.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Distance from x = 2 is 3 units to the right (1)\n• Image at (−1, 3) (1)`
      },
      {
        q: 'A transformation maps (x, y) to (−y, x). State the transformation and describe it fully.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Rotation (1)\n• 90° anticlockwise about the origin (1)`
      },
      {
        q: 'Triangle A has area 6 cm². It is enlarged with scale factor 3. What is the area of the image?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Area scale factor = 3² = 9 (1)\n• Area = 54 cm² (1)`
      },
      {
        q: 'The matrix for a transformation is [[0,−1],[1,0]]. Describe the transformation.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Rotation (1)\n• 90° anticlockwise about origin (1)`
      },
      {
        q: 'Describe fully the transformation that maps the line segment from (1,0) to (3,0) onto the line segment from (1,0) to (1,2).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Rotation (1)\n• 90° anticlockwise about (1,0) (1)`
      },
      {
        q: 'A shape is translated by (2,−3) and then by (−5, 4). What single translation has the same effect?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Add components: (2 + (−5), −3 + 4) (1)\n• (−3, 1) (1)`
      },
      {
        q: 'Draw the image of the triangle with vertices (0,0), (3,0), (0,4) after a reflection in the line y = 1.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Reflection rule: y → 2(1) − y = 2 − y (1)\n• New vertices: (0,2), (3,2), (0,−2) (1)\n• Correctly drawn on grid (1)`
      },
      {
        q: 'Describe two different single transformations that map a square onto itself (other than the identity).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Any valid transformation, e.g. rotation of 90° about its centre (1)\n• Another valid, e.g. reflection in a line of symmetry (1)`
      },
      {
        q: 'After an enlargement with scale factor 1/2, centre (0,0), the image has vertices at (1,2), (3,2), (3,4). Find the original vertices.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Multiply by 2 (inverse of scale factor ½) (1)\n• (2,4), (6,4), (6,8) (1)`
      },
      {
        q: 'Triangle A is reflected in the x-axis to give B. B is then reflected in the y-axis to give C. Describe the single transformation that maps A to C.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Rotation (1)\n• 180° about the origin (1)`
      },
    ],
  },

  '4.4': {
    name: "Pythagoras' Theorem and Trigonometry",
    questions: [
      {
        q: 'A right-angled triangle has legs of length 6 cm and 8 cm. Find the hypotenuse.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 6² + 8² = 36 + 64 = 100 (1)\n• Hypotenuse = 10 cm (1)`
      },
      {
        q: 'A ladder 5 m long rests against a wall. The foot of the ladder is 2 m from the base of the wall. How high up the wall does the ladder reach?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• h² = 5² − 2² = 25 − 4 = 21 (1)\n• h = √21 (1)\n• ≈ 4.58 m (1)`
      },
      {
        q: 'Show that the triangle with sides 5 cm, 12 cm and 13 cm is right-angled.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 5² + 12² = 25 + 144 = 169 (1)\n• 13² = 169 ✓, so right-angled by converse of Pythagoras (1)`
      },
      {
        q: 'In triangle ABC, angle B = 90°, AB = 9 cm, BC = 12 cm. Find angle A.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• tan A = BC/AB = 12/9 (1)\n• tan A = 4/3 (1)\n• A = tan⁻¹(4/3) = 53.1° (1)`
      },
      {
        q: 'In a right-angled triangle, the hypotenuse is 15 cm and one angle is 32°. Find the side adjacent to the 32° angle.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• cos 32° = adjacent/hypotenuse (1)\n• Adjacent = 15 × cos 32° (1)\n• ≈ 12.72 cm (1)`
      },
      {
        q: 'In a right-angled triangle, the opposite side to angle θ is 7 cm and the hypotenuse is 11 cm. Find θ.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• sin θ = 7/11 (1)\n• θ = sin⁻¹(7/11) ≈ 39.5° (1)`
      },
      {
        q: 'Find the length of the diagonal of a rectangle with dimensions 10 cm × 7 cm.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• d² = 10² + 7² = 100 + 49 = 149 (1)\n• d = √149 (1)\n• ≈ 12.21 cm (1)`
      },
      {
        q: 'A ship sails 8 km east then 6 km north. How far is it from its starting point?',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Distance² = 8² + 6² = 64 + 36 = 100 (1)\n• Distance = √100 (1)\n• 10 km (1)`
      },
      {
        q: 'Use the sine rule to find angle B in triangle ABC where a = 9 cm, b = 12 cm, A = 40°.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• sin B / 12 = sin 40° / 9 (1)\n• sin B = 12 × sin 40° / 9 (1)\n• B = sin⁻¹(0.857...) ≈ 58.9° (1)`
      },
      {
        q: 'In triangle ABC, a = 7 cm, b = 10 cm, C = 50°. Use the cosine rule to find side c.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• c² = a² + b² − 2ab cos C (1)\n• c² = 49 + 100 − 2(7)(10)cos 50° (1)\n• c² = 149 − 140 × 0.6428 = 149 − 89.99 = 59.01 (1)\n• c ≈ 7.68 cm (1)`
      },
      {
        q: 'Find the area of triangle ABC where a = 8 cm, b = 11 cm and C = 65°.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Area = ½ab sin C (1)\n• = ½ × 8 × 11 × sin 65° (1)\n• ≈ 39.87 cm² (1)`
      },
      {
        q: 'An isoceles triangle has two equal sides of 13 cm and a base of 10 cm. Find the perpendicular height.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Half base = 5 cm (1)\n• h² = 13² − 5² = 169 − 25 = 144 (1)\n• h = 12 cm (1)`
      },
      {
        q: 'A pilot flies due north for 200 km, then due east for 150 km. Find the bearing and distance back to the start.',
        marks: 5,
        requiresDiagram: false,
        markScheme: `• Distance = √(200² + 150²) = √(40000 + 22500) = √62500 (1)\n• = 250 km (1)\n• tan θ = 150/200, θ = 36.9° (1)\n• Bearing from current position = 180° + 90° − 36.9° = 233.1° (1)\n• Clear method shown (1)`
      },
      {
        q: 'In triangle PQR, PQ = 5 cm, QR = 7 cm and PR = 9 cm. Find angle P using the cosine rule.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• cos P = (PQ² + PR² − QR²) / (2 × PQ × PR) (1)\n• = (25 + 81 − 49) / (2 × 5 × 9) = 57/90 (1)\n• cos P = 0.6333... (1)\n• P = cos⁻¹(0.633) ≈ 50.7° (1)`
      },
      {
        q: 'Show that the exact value of sin 45° = 1/√2.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Isoceles right-angled triangle with equal legs 1 and 1 (1)\n• Hypotenuse = √2, so sin 45° = 1/√2 ✓ (1)`
      },
      {
        q: 'A vertical pole casts a shadow 4 m long. The angle of elevation of the sun is 35°. Find the height of the pole.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• tan 35° = height / 4 (1)\n• height = 4 × tan 35° (1)\n• ≈ 2.80 m (1)`
      },
      {
        q: 'Find the length of the space diagonal of a cuboid 3 cm × 4 cm × 12 cm.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Base diagonal² = 3² + 4² = 25, so base diagonal = 5 cm (1)\n• Space diagonal² = 5² + 12² = 25 + 144 = 169 (1)\n• Space diagonal = √169 (1)\n• = 13 cm (1)`
      },
      {
        q: 'In triangle ABC, A = 35°, B = 75°, c = 14 cm. Find side a using the sine rule.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Angle C = 180 − 35 − 75 = 70° (1)\n• a / sin A = c / sin C (1)\n• a = 14 × sin 35° / sin 70° (1)\n• ≈ 8.55 cm (1)`
      },
      {
        q: 'Prove that in any right-angled triangle with angle θ, sin²θ + cos²θ = 1.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• sin θ = opp/hyp, cos θ = adj/hyp (1)\n• sin²θ + cos²θ = (opp² + adj²)/hyp² (1)\n• By Pythagoras, opp² + adj² = hyp², so = 1 ✓ (1)`
      },
      {
        q: 'Two ships leave port. Ship A travels on a bearing of 040° for 30 km. Ship B travels on a bearing of 130° for 40 km. How far apart are the ships?',
        marks: 5,
        requiresDiagram: false,
        markScheme: `• Angle between paths = 130 − 40 = 90° (1)\n• Since the angle between them is 90°... (1)\n• Distance² = 30² + 40² = 900 + 1600 = 2500 (1)\n• Distance = 50 km (1)\n• Correct identification of 90° angle (1)`
      },
    ],
  },

  '4.5': {
    name: 'Circles and Constructions',
    questions: [
      {
        q: 'State the circle theorem: the angle at the centre is _______ the angle at the circumference when subtended by the same arc.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• Twice (1)`
      },
      {
        q: 'O is the centre of a circle. Angle AOB = 128°. Find angle ACB where C is on the major arc.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Angle at centre = 2 × angle at circumference (1)\n• Angle ACB = 128/2 = 64° (1)`
      },
      {
        q: 'A, B, C, D are points on a circle. Angle ABC = 73°. Find angle ADC.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Opposite angles in cyclic quadrilateral sum to 180° (1)\n• Angle ADC = 180 − 73 = 107° (1)`
      },
      {
        q: 'TA is a tangent to a circle at A. O is the centre. OA = 5 cm and OT = 13 cm. Find TA.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Angle OAT = 90° (tangent-radius perpendicular) (1)\n• TA² = OT² − OA² = 169 − 25 = 144 (1)\n• TA = 12 cm (1)`
      },
      {
        q: 'Construct a perpendicular bisector of line segment AB of length 8 cm. Show all arcs.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Arcs drawn from both ends of AB with radius greater than 4 cm (1)\n• Perpendicular bisector drawn through intersection points of arcs (1)`
      },
      {
        q: 'Construct an angle of 60° at point P. Show all construction arcs.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Arc centred at P drawn (1)\n• Equilateral triangle construction giving 60°; correct arcs shown (1)`
      },
      {
        q: 'AB and CD are two chords of a circle that intersect at P. AP = 4 cm, PB = 9 cm and CP = 6 cm. Find PD.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Intersecting chords: AP × PB = CP × PD (1)\n• 4 × 9 = 6 × PD → PD = 36/6 (1)\n• PD = 6 cm (1)`
      },
      {
        q: 'PQ is a tangent at Q to a circle. O is the centre. Angle QPO = 25°. Find angle QOP.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Angle OQP = 90° (tangent perpendicular to radius) (1)\n• Angles in triangle: 90 + 25 + angle QOP = 180 (1)\n• Angle QOP = 65° (1)`
      },
      {
        q: 'The angle in a semicircle is a right angle. Prove this using the circle theorem about angles at the centre.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Diameter subtends angle 180° at centre (straight line) (1)\n• Angle at centre = 2 × angle at circumference (1)\n• Angle at circumference = 90° ✓ (1)`
      },
      {
        q: 'Two tangents from point P touch a circle at A and B. PA = 7 cm. State the length of PB and the name of this theorem.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• PB = 7 cm (equal tangent theorem) (1)\n• Tangents from an external point are equal (1)`
      },
      {
        q: 'O is the centre of a circle. Angle OAB = 35° where AB is a chord. Find angle AOB.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• OA = OB (radii), so triangle OAB is isoceles (1)\n• Angle OBA = 35° (base angles equal) (1)\n• Angle AOB = 180 − 35 − 35 = 110° (1)`
      },
      {
        q: 'Find the equation of a circle with centre (3, −2) and radius 5.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• (x − 3)² + (y + 2)² = r² (1)\n• (x − 3)² + (y + 2)² = 25 (1)`
      },
      {
        q: 'The equation of a circle is x² + y² = 100. Find where it intersects the line y = 6.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Substitute: x² + 36 = 100 (1)\n• x² = 64, x = ±8 (1)\n• Intersection points: (8, 6) and (−8, 6) (1)`
      },
      {
        q: 'Construct a regular hexagon inscribed in a circle of radius 5 cm. State why this construction works.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Circle drawn with radius 5 cm (1)\n• Six equal arcs of radius 5 cm around circle (1)\n• Explanation: side of regular hexagon equals radius (1)`
      },
      {
        q: 'ABCD is a cyclic quadrilateral with angle A = 4x and angle C = 2x. Find x.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Opposite angles of cyclic quadrilateral sum to 180° (1)\n• 4x + 2x = 180 (1)\n• x = 30° (1)`
      },
      {
        q: 'A tangent to a circle meets a chord at 40°. Find the angle in the alternate segment.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Alternate segment theorem (1)\n• Angle = 40° (1)`
      },
      {
        q: 'Construct the circumscribed circle (circumcircle) of a triangle. Describe your method.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Construct perpendicular bisector of at least two sides (1)\n• Intersection gives circumcentre (1)\n• Circle drawn with correct radius through all three vertices (1)`
      },
      {
        q: 'A chord of length 16 cm is 6 cm from the centre of a circle. Find the radius of the circle.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Half chord = 8 cm (perpendicular from centre bisects chord) (1)\n• r² = 8² + 6² = 64 + 36 = 100 (1)\n• r = 10 cm (1)`
      },
      {
        q: 'Find the centre and radius of the circle x² + y² − 6x + 4y − 3 = 0.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Complete the square for x: (x − 3)² − 9 (1)\n• Complete the square for y: (y + 2)² − 4 (1)\n• (x − 3)² + (y + 2)² = 16 (1)\n• Centre (3, −2), radius 4 (1)`
      },
      {
        q: 'Describe and justify the locus of points equidistant from two fixed points A and B.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Perpendicular bisector of AB (1)\n• Any point on this line is equidistant from A and B by symmetry / congruent triangles (1)`
      },
      {
        q: 'Construct a 75° angle using ruler and compasses only. Show all construction lines.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Construct 60° angle (1)\n• Bisect to get 30°; 60° + 15° = 75° — or bisect 90° to get 45° then add 30° (1)\n• Correct final angle with all arcs shown (1)`
      },
    ],
  },

  '4.6': {
    name: 'Vectors',
    questions: [
      {
        q: 'Vector a = (3, 2) and vector b = (−1, 4). Find a + b.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• (2, 6) (1)`
      },
      {
        q: 'Vector p = (5, −3). Find 3p.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• (15, −9) (1)`
      },
      {
        q: 'Find the magnitude of vector (7, 24).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• |v| = √(7² + 24²) = √(49 + 576) = √625 (1)\n• 25 (1)`
      },
      {
        q: 'OABC is a parallelogram. OA = a and OC = c. Express OB in terms of a and c.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• OB = OA + AB = OA + OC (since AB parallel and equal to OC) (1)\n• OB = a + c (1)`
      },
      {
        q: 'M is the midpoint of AB. OA = a and OB = b. Find OM.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• OM = OA + AM = OA + ½AB (1)\n• OM = a + ½(b − a) = ½(a + b) (1)`
      },
      {
        q: 'OA = (4, 1), OB = (1, 5). Find the vector AB and its magnitude.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• AB = OB − OA = (−3, 4) (1)\n• |AB| = √(9 + 16) = √25 (1)\n• = 5 (1)`
      },
      {
        q: 'Vectors a = 2i + 3j and b = i − 4j. Find 2a − b.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• 2a = 4i + 6j (1)\n• 2a − b = (4−1)i + (6+4)j = 3i + 10j (1)`
      },
      {
        q: 'Show that points A, B and C with position vectors (1,2), (3,6) and (5,10) are collinear.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• AB = (2, 4) (1)\n• AC = (4, 8) = 2AB (1)\n• Since AC is a scalar multiple of AB and they share point A, the points are collinear (1)`
      },
      {
        q: 'OABC is a quadrilateral. OA = a, OB = b, OC = c. Express BC in terms of b and c.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• BC = BO + OC = −b + c (1)\n• BC = c − b (1)`
      },
      {
        q: 'In triangle OAB, OA = a and OB = b. P divides AB in the ratio 2:1. Find OP.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• AP = ⅔ × AB = ⅔(b − a) (1)\n• OP = OA + AP = a + ⅔(b − a) (1)\n• OP = ⅓a + ⅔b (1)`
      },
      {
        q: 'Find the unit vector in the direction of (5, 12).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Magnitude = √(25 + 144) = 13 (1)\n• Unit vector = (5/13, 12/13) (1)`
      },
      {
        q: 'Vectors a and b are not parallel. Simplify 3a + 2b − a + 5b.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 2a + 7b (1)`
      },
      {
        q: 'ABCD is a parallelogram. AB = p and AD = q. X is the midpoint of BC. Find AX in terms of p and q.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• BC = AD = q; X is midpoint of BC, so BX = ½q (1)\n• AX = AB + BX = p + ½q (1)\n• (1 mark for correct method) (1)`
      },
      {
        q: 'Given a = (2, 5) and b = (−3, 1), find a scalar k such that a + kb is parallel to the x-axis.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• a + kb = (2 − 3k, 5 + k) (1)\n• For parallel to x-axis, y-component = 0: 5 + k = 0 (1)\n• k = −5 (1)`
      },
      {
        q: 'State what it means for two vectors to be parallel.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• One vector is a scalar multiple of the other (1)`
      },
      {
        q: 'OA = 3a, OB = 4b. M is the midpoint of AB. N is the midpoint of OM. Find ON.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• AB = 4b − 3a (1)\n• OM = OA + ½AB = 3a + ½(4b − 3a) = 3a/2 + 2b (1)\n• ON = ½OM = 3a/4 + b (1)\n• Clear method (1)`
      },
      {
        q: 'Explain why a + b and a − b are perpendicular when |a| = |b|.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• (a + b)·(a − b) = |a|² − |b|² (1)\n• If |a| = |b| then |a|² − |b|² = 0 (1)\n• Zero dot product means perpendicular (1)`
      },
      {
        q: 'A boat has velocity (3, 4) km/h. A current adds velocity (−1, 2) km/h. Find the resultant speed.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Resultant = (2, 6) (1)\n• Speed = √(4 + 36) = √40 (1)\n• ≈ 6.32 km/h (1)`
      },
      {
        q: 'Points A, B, C have position vectors a, b, c. G is the centroid: OG = ⅓(a + b + c). If a = (1,2), b = (5,4), c = (3,6), find G.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• a + b + c = (9, 12) (1)\n• G = (3, 4) (1)`
      },
      {
        q: 'OAB is a triangle. OA = a, OB = b. C lies on AB such that AC:CB = 3:1. Find OC.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• AB = b − a (1)\n• AC = ¾ AB = ¾(b − a) (1)\n• OC = OA + AC = a + ¾(b − a) (1)\n• OC = ¼a + ¾b (1)`
      },
      {
        q: 'Verify that the vectors (6, −8) and (4, 3) are perpendicular.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Dot product = 6×4 + (−8)×3 = 24 − 24 = 0 (1)\n• Dot product = 0, so vectors are perpendicular ✓ (1)`
      },
    ],
  },

  '5.1': {
    name: 'Probability',
    questions: [
      {
        q: 'A bag contains 3 red, 5 blue and 2 green counters. A counter is chosen at random. Find the probability it is blue.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 5/10 = 1/2 (1)`
      },
      {
        q: 'A fair six-sided die is rolled. Find the probability of rolling a prime number.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Prime numbers on a die: 2, 3, 5 (1)\n• P = 3/6 = 1/2 (1)`
      },
      {
        q: 'The probability that it rains on any day is 0.3. Find the probability it does NOT rain.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 1 − 0.3 = 0.7 (1)`
      },
      {
        q: 'A and B are mutually exclusive events. P(A) = 0.4 and P(B) = 0.25. Find P(A or B).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Mutually exclusive: P(A ∪ B) = P(A) + P(B) (1)\n• 0.4 + 0.25 = 0.65 (1)`
      },
      {
        q: 'A and B are independent events. P(A) = 0.6 and P(B) = 0.4. Find P(A and B).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• P(A ∩ B) = P(A) × P(B) (1)\n• 0.6 × 0.4 = 0.24 (1)`
      },
      {
        q: 'A two-way table shows results of a survey on pet ownership. 30 own dogs, 20 own cats, 8 own both. Find the probability that a randomly selected person owns neither.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• P(dog or cat) = P(dog) + P(cat) − P(both) (1)\n• 30 + 20 − 8 = 42 own at least one (1)\n• P(neither) = (total − 42)/total — need total; answer dependent on stated total (1)`
      },
      {
        q: 'A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. Find the probability both are red.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• P(1st red) = 4/10 (1)\n• P(2nd red | 1st red) = 3/9 (1)\n• P(both red) = 4/10 × 3/9 = 12/90 = 2/15 (1)`
      },
      {
        q: 'A card is drawn from a standard pack of 52 cards. Find the probability it is a King or a Heart.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• P(King) = 4/52, P(Heart) = 13/52, P(King of Hearts) = 1/52 (1)\n• P(King or Heart) = 4/52 + 13/52 − 1/52 (1)\n• 16/52 = 4/13 (1)`
      },
      {
        q: 'A spinner has four sections: 1, 2, 3, 4 with probabilities 0.1, 0.3, p, 0.2. Find p and the probability of spinning a 3 or 4.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Probabilities sum to 1: p = 1 − 0.1 − 0.3 − 0.2 = 0.4 (1)\n• P(3 or 4) = 0.4 + 0.2 (1)\n• 0.6 (1)`
      },
      {
        q: 'Complete the tree diagram for tossing a biased coin twice where P(H) = 0.7. Find P(exactly one head).',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• First branch: P(H) = 0.7, P(T) = 0.3 (1)\n• Second branches correct (same as first) (1)\n• P(HT) = 0.7 × 0.3 = 0.21 (1)\n• P(exactly one H) = P(HT) + P(TH) = 0.21 + 0.21 = 0.42 (1)`
      },
      {
        q: 'A die is rolled 120 times. Estimate the number of times a 5 or 6 will appear.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• P(5 or 6) = 2/6 = 1/3 (1)\n• Expected = 1/3 × 120 = 40 (1)`
      },
      {
        q: 'Explain the difference between experimental probability and theoretical probability.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Experimental: based on results of an experiment/trials (1)\n• Theoretical: based on equally likely outcomes and reasoning, not experiment (1)`
      },
      {
        q: 'A box contains 5 white, 3 black and 2 grey balls. One ball is taken, its colour noted and it is NOT replaced. A second ball is then taken. Find P(both the same colour).',
        marks: 5,
        requiresDiagram: false,
        markScheme: `• P(WW) = 5/10 × 4/9 = 20/90 (1)\n• P(BB) = 3/10 × 2/9 = 6/90 (1)\n• P(GG) = 2/10 × 1/9 = 2/90 (1)\n• Total P = 28/90 (1)\n• = 14/45 (1)`
      },
      {
        q: 'The probability of event A is 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Are A and B independent? Show your working.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• If independent: P(A) × P(B) = 0.5 × 0.4 = 0.2 (1)\n• P(A ∩ B) = 0.2 = 0.2 ✓, so yes, A and B are independent (1)`
      },
      {
        q: 'Given P(A|B) = 0.6 and P(B) = 0.4, find P(A ∩ B).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• P(A ∩ B) = P(A|B) × P(B) (1)\n• 0.6 × 0.4 = 0.24 (1)`
      },
      {
        q: 'A Venn diagram shows two events A and B. P(A only) = 0.3, P(B only) = 0.25, P(A ∩ B) = 0.15. Find P(A ∪ B) and P(neither A nor B).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• P(A ∪ B) = 0.3 + 0.15 + 0.25 = 0.70 (1)\n• P(neither) = 1 − 0.70 (1)\n• 0.30 (1)`
      },
      {
        q: 'A test is taken by 80 students. 50 pass the first time. Of those who fail, 60% pass on the second attempt. Find the probability that a randomly chosen student passes eventually (1st or 2nd attempt).',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• P(pass 1st) = 50/80 = 5/8 (1)\n• P(fail 1st) = 30/80; P(pass 2nd) = 0.6 × 30/80 = 18/80 (1)\n• P(eventually pass) = 50/80 + 18/80 = 68/80 (1)\n• = 17/20 = 0.85 (1)`
      },
      {
        q: 'Three fair coins are tossed. Find the probability of at least two heads.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Sample space has 8 outcomes (1)\n• At least 2 heads: HHH, HHT, HTH, THH → 4 outcomes (1)\n• P = 4/8 = 1/2 (1)`
      },
      {
        q: 'Two events A and B are such that P(A) = 0.7 and P(A ∩ B) = 0.28. Find P(B|A).',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• P(B|A) = P(A ∩ B) / P(A) (1)\n• 0.28/0.7 = 0.4 (1)`
      },
      {
        q: 'In a group of 100 people, 40 like tea (T), 50 like coffee (C) and 20 like both. Draw a Venn diagram and find P(likes exactly one drink).',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• T only = 20, C only = 30, both = 20, neither = 30 (1)\n• Correct Venn diagram (1)\n• P(exactly one) = (20 + 30)/100 (1)\n• = 1/2 (1)`
      },
    ],
  },

  '6.1': {
    name: 'Statistical Diagrams and Measures',
    questions: [
      {
        q: 'The ages of 5 people are: 14, 17, 15, 14, 20. Find the mean, median and mode.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Mean = (14+17+15+14+20)/5 = 80/5 = 16 (1)\n• Median (ordered: 14,14,15,17,20) = 15 (1)\n• Mode = 14 (1)`
      },
      {
        q: 'The mean of 6 numbers is 9. Five of the numbers are 7, 11, 6, 10, 12. Find the sixth number.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Sum = 6 × 9 = 54 (1)\n• Sixth number = 54 − (7+11+6+10+12) = 54 − 46 = 8 (1)`
      },
      {
        q: 'Draw a frequency diagram (bar chart) for the following data: Red = 8, Blue = 12, Green = 5, Yellow = 7.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Correct bar heights for all four colours (1)\n• Bars of equal width, axes labelled (1)`
      },
      {
        q: 'The heights (cm) of 8 students are: 152, 148, 165, 160, 148, 172, 155, 161. Find the range and the interquartile range.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Range = 172 − 148 = 24 (1)\n• Ordered: 148,148,152,155,160,161,165,172 (1)\n• LQ = 152, UQ = 161 (or 150, 163 — method dependent) (1)\n• IQR = UQ − LQ = 9 (or correct from method) (1)`
      },
      {
        q: 'A data set has values: 3, 5, 7, 9, 11. State the effect on the mean of adding 4 to every value.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Original mean = 7 (1)\n• New mean = 7 + 4 = 11 (1)`
      },
      {
        q: 'A stem-and-leaf diagram shows results for two classes. Describe one advantage of using a back-to-back stem-and-leaf diagram.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• Allows direct comparison of two data sets using the same scale / easy to identify individual values (1)`
      },
      {
        q: 'Draw a scatter diagram for the data: x = [1,2,3,4,5,6], y = [3,5,4,7,8,9]. Describe the correlation.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Points plotted correctly (1)\n• Axes labelled with suitable scales (1)\n• Positive correlation described (1)`
      },
      {
        q: 'Explain the difference between discrete and continuous data. Give one example of each.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Discrete: can only take specific values (e.g. number of children) (1)\n• Continuous: can take any value in a range (e.g. height) (1)`
      },
      {
        q: 'The table shows grouped data. Find an estimate for the mean. Lengths: 0<l≤10 (f=5), 10<l≤20 (f=8), 20<l≤30 (f=7).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Midpoints: 5, 15, 25 (1)\n• Sum of fx = 5×5 + 8×15 + 7×25 = 25 + 120 + 175 = 320 (1)\n• Estimated mean = 320 / (5+8+7) = 320/20 = 16 (1)`
      },
      {
        q: 'A pie chart shows how a student spends their weekly pocket money. If the "food" sector has angle 108° and the total is £30, how much is spent on food?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Fraction of total = 108/360 = 0.3 (1)\n• 0.3 × £30 = £9 (1)`
      },
      {
        q: 'Describe what a line of best fit is and how it is used to make predictions.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• A straight line drawn through the middle of the data points on a scatter diagram (1)\n• Used to estimate the value of one variable given the other by reading off the line (1)`
      },
      {
        q: 'A set of 10 values has mean 15 and range 8. A new value of 20 is added. State how the mean changes and whether the range necessarily changes.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• New sum = 150 + 20 = 170; new mean = 170/11 ≈ 15.45 (1)\n• Mean increases (1)\n• Range may or may not change — only increases if 20 is a new maximum (1)`
      },
      {
        q: 'Identify possible sources of bias in a survey asking students outside a gym about their exercise habits.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Sample is not representative of all students (1)\n• Those outside a gym are likely to exercise more than average, creating biased results (1)`
      },
      {
        q: 'A data set has values: 12, 14, 12, 18, 16, 20, 14, 12. Draw a frequency table and state the modal class.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Tally/frequency table correctly completed (1)\n• Mode = 12 (frequency 3) (1)\n• (1 for fully correct frequency table) (1)`
      },
      {
        q: 'Compare the data sets A: {4, 5, 6, 7, 8} and B: {1, 3, 6, 9, 11} using appropriate measures of average and spread.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Mean A = 6, Mean B = 6 (same) (1)\n• Range A = 4, Range B = 10 (1)\n• B has greater spread/variation (1)\n• Comment using statistics in context (1)`
      },
      {
        q: 'A survey records the shoe sizes of 30 people. Explain why the median is a better measure of average than the mean if one person has unusually large feet.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• The mean is affected by extreme values (outliers) (1)\n• The median is resistant to outliers and better represents the typical shoe size (1)`
      },
      {
        q: 'The frequency table shows marks out of 10. Find the mean mark. Marks 6(f=3), 7(f=8), 8(f=5), 9(f=4).',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• ∑fx = 6×3 + 7×8 + 8×5 + 9×4 = 18+56+40+36 = 150 (1)\n• n = 3+8+5+4 = 20 (1)\n• Mean = 150/20 = 7.5 (1)`
      },
      {
        q: 'Write down the median of the data: 3, 5, 8, 11, 14, 17, 19.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• 11 (middle of 7 values) (1)`
      },
      {
        q: 'A time series graph shows monthly sales over a year, rising from January to July then falling. Describe the trend.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Sales increase from January, peak in July/summer (1)\n• Then decrease for the rest of the year (seasonal trend) (1)`
      },
      {
        q: 'Describe one disadvantage of using the range as a measure of spread.',
        marks: 1,
        requiresDiagram: false,
        markScheme: `• The range is affected by extreme values/outliers and does not reflect the spread of the middle data (1)`
      },
    ],
  },

  '6.2': {
    name: 'Cumulative Frequency, Histograms and Box Plots',
    questions: [
      {
        q: 'The cumulative frequency for exam marks is: 20 marks (cf=5), 40 marks (cf=20), 60 marks (cf=38), 80 marks (cf=47), 100 marks (cf=50). Find the median.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Median at n/2 = 25th value (1)\n• Read from graph at cf = 25 → median ≈ 44 marks (1)`
      },
      {
        q: 'From a cumulative frequency graph, the lower quartile is 35 and the upper quartile is 55. Find the interquartile range.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• IQR = UQ − LQ (1)\n• 55 − 35 = 20 (1)`
      },
      {
        q: 'Draw a cumulative frequency curve for the data: heights in [140,150) f=4, [150,160) f=11, [160,170) f=18, [170,180) f=10, [180,190) f=7.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Cumulative frequencies: 4, 15, 33, 43, 50 correct (1)\n• Points plotted at upper class boundaries (150, 160, ...) (1)\n• Smooth curve drawn through all points (1)`
      },
      {
        q: 'A box plot shows: minimum 10, LQ 25, median 35, UQ 50, maximum 80. State the IQR and range.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• IQR = 50 − 25 = 25 (1)\n• Range = 80 − 10 = 70 (1)`
      },
      {
        q: 'Draw a box plot for the following five-number summary: minimum 12, Q1 18, median 24, Q3 31, maximum 40.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Box drawn from Q1 = 18 to Q3 = 31 (1)\n• Median line at 24 inside box (1)\n• Whiskers to 12 and 40 (1)`
      },
      {
        q: 'A histogram shows frequency density on the y-axis. A bar covers 20 ≤ x < 30 with frequency density 3.5. Find the frequency for this class.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Frequency = frequency density × class width (1)\n• 3.5 × 10 = 35 (1)`
      },
      {
        q: 'In a histogram, the class 10 ≤ x < 20 has frequency 24 and class width 10. The class 20 ≤ x < 25 has frequency density 3.6. Find its frequency.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Frequency density for 10–20 = 24/10 = 2.4 (1)\n• Class width for 20–25 = 5 (1)\n• Frequency = 3.6 × 5 = 18 (1)`
      },
      {
        q: 'Compare two sets of data using their box plots. Box plot A: median 45, IQR 20. Box plot B: median 38, IQR 30. Make two comparisons.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• A has higher median, so typically higher values (1)\n• B has greater IQR, so more spread/variable data (1)`
      },
      {
        q: 'The frequency table shows: [0,10) f=8, [10,20) f=15, [20,40) f=22, [40,60) f=10. Draw the histogram.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Frequency densities: 0.8, 1.5, 1.1, 0.5 (1)\n• Correct bar heights proportional to frequency density (1)\n• Bars drawn with correct widths and axes labelled (1)`
      },
      {
        q: 'From a cumulative frequency graph for 80 values, estimate the number of values greater than 70.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Read cf at 70 from graph, e.g. cf = 60 (1)\n• Number greater = 80 − 60 = 20 (1) [follow through from cf read]`
      },
      {
        q: 'A data set has n = 100. The median from a cumulative frequency curve is found at cf = 50. Explain why the median is at the 50th value.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• The median divides the distribution in half (1)\n• n/2 = 50, so the 50th value is the middle value when data is ordered (1)`
      },
      {
        q: 'Two classes take the same test. Class A has median 62 and IQR 15. Class B has median 55 and IQR 25. Write two sentences comparing the results.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Class A performed better on average (higher median) (1)\n• Class B has more varied/spread results (higher IQR) (1)`
      },
      {
        q: 'A cumulative frequency graph has a very steep initial rise then flattens. What does this tell you about the data distribution?',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• Most values are clustered at the lower end of the range (1)\n• There are few values at higher levels / positively skewed distribution (1)`
      },
      {
        q: 'The heights of 200 plants are recorded. Draw a box plot given: minimum 12 cm, Q1 = 25 cm, median = 32 cm, Q3 = 41 cm, maximum 55 cm.',
        marks: 3,
        requiresDiagram: true,
        markScheme: `• Box from 25 to 41 cm (1)\n• Median line at 32 cm (1)\n• Whiskers from 12 to 55 cm correctly drawn (1)`
      },
      {
        q: 'Estimate the mean from a histogram with classes [0,10) fd=2, [10,20) fd=4, [20,30) fd=3, [30,40) fd=1.',
        marks: 4,
        requiresDiagram: false,
        markScheme: `• Frequencies: 20, 40, 30, 10 (total 100) (1)\n• Midpoints: 5, 15, 25, 35 (1)\n• ∑fx = 100 + 600 + 750 + 350 = 1800 (1)\n• Mean = 1800/100 = 18 (1)`
      },
      {
        q: 'Identify a potential outlier given a five-number summary: min 5, Q1 20, median 28, Q3 35, max 62. Use the rule: outlier if > Q3 + 1.5×IQR.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• IQR = 35 − 20 = 15 (1)\n• Threshold = 35 + 1.5 × 15 = 35 + 22.5 = 57.5 (1)\n• 62 > 57.5, so 62 is an outlier (1)`
      },
      {
        q: 'A frequency polygon is drawn by joining midpoints of class intervals. A class [10,20) has frequency 12. Plot the correct point for this class.',
        marks: 2,
        requiresDiagram: true,
        markScheme: `• Midpoint = 15 (1)\n• Point plotted at (15, 12) (1)`
      },
      {
        q: 'Explain why class widths must be considered when drawing a histogram for unequal class intervals.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• If class widths vary, using frequency on y-axis would make wider classes look more frequent than they are (1)\n• Frequency density (frequency ÷ class width) gives fair comparison between bars (1)`
      },
      {
        q: 'From a box plot, the data appears positively skewed. Explain what this means in terms of the median and quartiles.',
        marks: 2,
        requiresDiagram: false,
        markScheme: `• The median is closer to Q1 than to Q3 (1)\n• The upper whisker/tail is longer than the lower, indicating data spread more to the right (1)`
      },
      {
        q: 'The cumulative frequency for 60 students is: 0 at 0, 8 at 20, 26 at 40, 48 at 60, 58 at 80, 60 at 100. Estimate the percentage of students who scored above 50.',
        marks: 3,
        requiresDiagram: false,
        markScheme: `• Interpolate at 50: between cf=26 (at 40) and cf=48 (at 60), cf at 50 ≈ 26 + (10/20)(48−26) = 26 + 11 = 37 (1)\n• Students above 50 = 60 − 37 = 23 (1)\n• Percentage = 23/60 × 100 ≈ 38.3% (1)`
      },
    ],
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MATHS_OCR_PRACTICE;
}
