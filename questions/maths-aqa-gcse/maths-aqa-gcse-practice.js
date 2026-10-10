/*
 * AQA GCSE Mathematics (8300) — Exam Practice Question Bank
 * 20 questions per topic, 1-5 marks, with mark schemes ("• point (n)" lines summing to marks).
 * requiresDiagram: true where a figure is needed (it is also described in words).
 * higher: true = Higher-tier-only content.
 */

const MATHS_AQA_GCSE_PRACTICE = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  "1.1": {
    "name": "Structure & Calculation",
    "questions": [
      {
        "q": "Write these numbers in order, smallest first:  0.3,  −2,  1/4,  −0.25",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• −2, −0.25, 1/4, 0.3 (1)"
      },
      {
        "q": "Write down all the prime numbers between 20 and 40.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 23, 29, 31, 37 (all four and no others) (1)"
      },
      {
        "q": "Work out 3.7 × 2.6 without a calculator.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 37 × 26 = 962 or full correct method (e.g. grid with 3 × 2, 3 × 0.6, 0.7 × 2, 0.7 × 0.6) (1)\n• A1: 9.62 (1)"
      },
      {
        "q": "Work out 14.4 ÷ 0.6 without a calculator.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: rewrites as 144 ÷ 6 (multiplies both numbers by 10) (1)\n• A1: 24 (1)"
      },
      {
        "q": "Work out 8 − 3 × (−2)² + √36.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (−2)² = 4 and √36 = 6 seen, or 3 × 4 = 12 seen (1)\n• A1: 8 − 12 + 6 = 2 (1)"
      },
      {
        "q": "Write 84 as a product of its prime factors. Give your answer in index form.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: correct factor tree or repeated division, e.g. 84 → 2, 42 → 2, 21 → 3, 7 (1)\n• A1: 2² × 3 × 7 (1)"
      },
      {
        "q": "Find the highest common factor (HCF) of 42 and 70.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 42 = 2 × 3 × 7 and 70 = 2 × 5 × 7, or lists factors of both (1)\n• A1: 14 (1)"
      },
      {
        "q": "At 6 am the temperature was −7 °C. By noon it had risen by 12 °C. By midnight it had then fallen by 9 °C. What was the temperature at midnight?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: −7 + 12 = 5 (1)\n• A1: 5 − 9 = −4 °C (1)"
      },
      {
        "q": "You are given that 37 × 64 = 2368. Use this to write down the value of (a) 3.7 × 6.4  (b) 2368 ÷ 640",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 23.68 (1)\n• (b) 3.7 (1)"
      },
      {
        "q": "A television costs £350 before VAT. VAT at 20% is added. Work out the total cost of the television.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 20% of 350 = 70 or 350 × 1.2 (1)\n• A1: £420 (1)"
      },
      {
        "q": "A café meal deal is one sandwich, one drink and one snack. There are 5 sandwiches, 4 drinks and 3 snacks to choose from. How many different meal deals are possible?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 5 × 4 × 3 (product rule) (1)\n• A1: 60 (1)"
      },
      {
        "q": "Bus A leaves the station every 15 minutes. Bus B leaves every 25 minutes. Both buses leave at 9:00 am. At what time do they next leave the station together?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: lists multiples of 15 and 25, or uses 15 = 3 × 5 and 25 = 5² (1)\n• A1: LCM = 75 minutes (1)\n• A1: 10:15 am (1)"
      },
      {
        "q": "A = 2³ × 3² × 5 and B = 2 × 3³ × 7. Find (a) the HCF of A and B, (b) the LCM of A and B. You may leave your answers in index form.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) HCF = 2 × 3² (= 18) (1)\n• (b) M1: uses highest powers 2³, 3³, 5 and 7 (1)\n• (b) A1: LCM = 2³ × 3³ × 5 × 7 (= 7560) (1)"
      },
      {
        "q": "List all the 3-digit numbers that can be made using each of the digits 2, 5 and 8 exactly once. How many of them are greater than 500?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: systematic list with at least 4 correct numbers and no repeats (1)\n• A1: all six: 258, 285, 528, 582, 825, 852 (1)\n• A1: 4 numbers greater than 500 (1)"
      },
      {
        "q": "Jo’s bank balance is £215.40. Two debits are taken from her account: £86.75 and £162.30. A credit of £50 is then paid in. Work out her final balance.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 86.75 + 162.30 = 249.05 or 215.40 − 86.75 = 128.65 (1)\n• M1: 215.40 − 249.05 = −33.65 or 128.65 − 162.30 = −33.65 (1)\n• A1: −33.65 + 50 = £16.35 (1)"
      },
      {
        "q": "A trader buys 24 boxes of mangoes for £7.50 per box. She sells 20 boxes for £11 each and the remaining boxes for £6 each. Work out her total profit.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: cost price 24 × 7.50 = £180 (1)\n• M1: income 20 × 11 + 4 × 6 = 220 + 24 = £244 (1)\n• A1: profit = £64 (1)"
      },
      {
        "q": "A number plate is made of 2 letters (A–Z) followed by 3 digits (0–9). Letters and digits may repeat, but the first digit cannot be 0. How many different number plates are possible?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 26 × 26 for the letters (1)\n• M1: 9 × 10 × 10 for the digits (1)\n• A1: 608 400 (1)"
      },
      {
        "q": "A rectangular floor measures 3.6 m by 2.4 m. It is covered completely with identical square tiles, with no cutting. Each tile has sides that are a whole number of centimetres. Find the largest possible side length of a tile, and the number of these tiles needed.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: converts to 360 cm and 240 cm (1)\n• M1: finds HCF, e.g. 360 = 2³ × 3² × 5 and 240 = 2⁴ × 3 × 5 (1)\n• A1: largest tile 120 cm (1)\n• A1: (360 ÷ 120) × (240 ÷ 120) = 3 × 2 = 6 tiles (1)"
      },
      {
        "q": "Priya earns £34 500 per year. The first £12 570 is tax-free (personal allowance). She pays income tax at 20% on the rest. Ignoring any other deductions, work out her take-home pay per month.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: taxable income 34 500 − 12 570 = £21 930 (1)\n• M1: tax 21 930 × 0.2 = £4386 (1)\n• M1: annual take-home 34 500 − 4386 = £30 114 (1)\n• A1: 30 114 ÷ 12 = £2509.50 (1)"
      },
      {
        "q": "A PIN is made of 4 digits from 0–9. (a) How many different PINs are possible? (b) How many PINs have four different digits? (c) How many PINs have four different digits and are even (last digit 0, 2, 4, 6 or 8)?",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) 10⁴ = 10 000 (1)\n• (b) M1: 10 × 9 × 8 × 7 (1)\n• (b) A1: 5040 (1)\n• (c) M1: 5 choices for last digit, then 9 × 8 × 7 for the others (1)\n• (c) A1: 5 × 504 = 2520 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.2 */
  "1.2": {
    "name": "Fractions, Decimals & Percentages",
    "questions": [
      {
        "q": "Write 0.35 as a fraction in its simplest form.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 7/20 (1)"
      },
      {
        "q": "Write 3/8 as a percentage.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 37.5% (1)"
      },
      {
        "q": "Work out 2/3 + 3/5. Give your answer as a mixed number.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: common denominator 15, e.g. 10/15 + 9/15 (1)\n• A1: 19/15 = 1 4/15 (1)"
      },
      {
        "q": "Work out 3¼ − 1⅚. Give your answer as a mixed number in its simplest form.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 13/4 − 11/6 = 39/12 − 22/12, or equivalent correct method (1)\n• A1: 17/12 = 1 5/12 (1)"
      },
      {
        "q": "Work out 2⅖ × 1¼. Give your answer in its simplest form.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 12/5 × 5/4 (1)\n• A1: 60/20 = 3 (1)"
      },
      {
        "q": "Work out 1⅞ ÷ 3/4. Give your answer as a mixed number.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 15/8 × 4/3 (1)\n• A1: 60/24 = 5/2 = 2½ (1)"
      },
      {
        "q": "Write these in order, smallest first:  0.62,  5/8,  63%,  3/5",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: converts to a common form, e.g. 0.62, 0.625, 0.63, 0.6 (1)\n• A1: 3/5, 0.62, 5/8, 63% (1)"
      },
      {
        "q": "Without a calculator, work out 35% of £64.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: e.g. 10% = 6.40 and 5% = 3.20, so 30% + 5% = 19.20 + 3.20 (1)\n• A1: £22.40 (1)"
      },
      {
        "q": "Write down the decimal multiplier that (a) increases an amount by 4%, (b) decreases an amount by 30%.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 1.04 (1)\n• (b) 0.7 (1)"
      },
      {
        "q": "Write 7/11 as a recurring decimal.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: division 7 ÷ 11 started, e.g. 0.636… (1)\n• A1: 0.636363… written with dots over the 6 and the 3 (1)"
      },
      {
        "q": "A bag contains red, green and blue beads in the ratio 2 : 3 : 5. There are 60 beads. (a) What fraction of the beads are green? (b) How many green beads are there?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 3/10 (1)\n• (b) 3/10 × 60 = 18 (1)"
      },
      {
        "q": "Prove algebraically that 0.454545… (45 recurring) = 5/11.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: x = 0.4545… and 100x = 45.4545… (1)\n• M1: 100x − x = 99x = 45 (1)\n• A1: x = 45/99 = 5/11 shown (1)"
      },
      {
        "q": "Tom spends 2/5 of his money on rent and 1/4 of what is left on food. He has £540 left. How much money did he have at the start?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: after rent 3/5 left; food = 1/4 × 3/5 = 3/20 (1)\n• M1: fraction left = 3/5 × 3/4 = 9/20, so 9/20 of total = 540 (1)\n• A1: 540 ÷ 9 × 20 = £1200 (1)"
      },
      {
        "q": "A house is worth £185 000. Its value increases by 6% one year and then decreases by 6% the next year. Use multipliers to find its value after the two years, and explain why it is not £185 000.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 185 000 × 1.06 × 0.94 (1)\n• A1: £184 334 (1)\n• B1: the 6% decrease is of a larger amount (£196 100), so more is taken off than was added (1)"
      },
      {
        "q": "Amy and Ben share £91. Amy receives 5/8 of the amount Ben receives. How much does each person get?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Amy : Ben = 5 : 8 (1)\n• M1: 91 ÷ 13 = 7 (1)\n• A1: Amy £35 and Ben £56 (1)"
      },
      {
        "q": "Write 0.2111… (1 recurring) as a fraction in its simplest form. Show your working.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 100x = 21.111… and 10x = 2.111… (or equivalent pair) (1)\n• M1: 90x = 19 (1)\n• A1: x = 19/90 (1)"
      },
      {
        "q": "A rectangle measures 3½ cm by 2 2/7 cm. Work out (a) the exact area, (b) the exact perimeter as a mixed number.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) M1: 7/2 × 16/7 (1)\n• (a) A1: 8 cm² (1)\n• (b) 2 × (7/2 + 16/7) = 81/7 = 11 4/7 cm (1)"
      },
      {
        "q": "Jake earns £28 000 a year. He spends 2/7 of it on rent and saves 15% of it. (a) How much does he have left for other spending? (b) What fraction of his salary is this? Give your answer in its simplest form.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: rent 2/7 × 28 000 = £8000 (1)\n• M1: savings 0.15 × 28 000 = £4200 (1)\n• (a) A1: 28 000 − 8000 − 4200 = £15 800 (1)\n• (b) 15 800/28 000 = 79/140 (1)"
      },
      {
        "q": "Show that 0.333… + 0.151515… = 16/33.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 0.333… = 1/3 (or 3/9 or 33/99) (1)\n• M1: 0.1515… = 15/99 using 100x − x = 15 (1)\n• M1: 33/99 + 15/99 = 48/99 (1)\n• A1: 48/99 = 16/33 shown (1)"
      },
      {
        "q": "A coat normally costs £72 in three shops. Shop A: 1/3 off. Shop B: 30% off, then a further 5% off the sale price. Shop C: 2/5 off, but VAT at 20% is then added to the reduced price. Which shop is cheapest? Show all your working.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Shop A: 72 × 2/3 = £48 (1)\n• M1: Shop B: 72 × 0.7 × 0.95 (1)\n• A1: Shop B = £47.88 (1)\n• Shop C: 72 × 3/5 × 1.2 = £51.84 (1)\n• Shop B is cheapest, with all three prices correct (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.3 */
  "1.3": {
    "name": "Measures, Accuracy & Bounds",
    "questions": [
      {
        "q": "Round 6.4851 to 2 decimal places.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 6.49 (1)"
      },
      {
        "q": "Convert 3.2 litres into millilitres.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 3200 ml (1)"
      },
      {
        "q": "Write 47 382 correct to (a) 1 significant figure (b) 3 significant figures.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 50 000 (1)\n• (b) 47 400 (1)"
      },
      {
        "q": "Convert 5.6 m² into cm².",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 5.6 × 10 000 or 5.6 × 100 × 100 (1)\n• A1: 56 000 cm² (1)"
      },
      {
        "q": "By rounding each number to 1 significant figure, work out an estimate for (512 × 3.87) ÷ 0.198",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 500, 4 and 0.2 seen (1)\n• A1: (500 × 4) ÷ 0.2 = 2000 ÷ 0.2 = 10 000 (1)"
      },
      {
        "q": "The length L of a pencil is 14 cm, correct to the nearest centimetre. Write down the error interval for L.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: 13.5 as the lower limit with ≤ (1)\n• B1: 14.5 as the upper limit with < : 13.5 ≤ L < 14.5 (1)"
      },
      {
        "q": "A number x is truncated to 1 decimal place. The result is 7.3. Write down the error interval for x.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: 7.3 ≤ x (1)\n• B1: x < 7.4, so 7.3 ≤ x < 7.4 (1)"
      },
      {
        "q": "Convert 1.35 hours into hours and minutes.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 0.35 × 60 (1)\n• A1: 1 hour 21 minutes (1)"
      },
      {
        "q": "Convert 750 000 cm³ into m³.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 750 000 ÷ 1 000 000 or 1 m³ = 1 000 000 cm³ seen (1)\n• A1: 0.75 m³ (1)"
      },
      {
        "q": "Hannah works out 28.9 × 0.512 on her calculator. She gets 147.9680. Use estimation to show that her answer must be wrong.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 30 × 0.5 = 15 (or similar rounding) (1)\n• A1: Estimate ≈ 15, so 147.968 is about 10 times too big — the answer should be 14.7968 (1)"
      },
      {
        "q": "a = 3.7 and b = 2.1, both correct to 1 decimal place. Work out the upper bound of a + b.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 3.75 and 2.15 seen (1)\n• A1: 5.9 (1)"
      },
      {
        "q": "A cake needs 450 g of flour. Flour is sold in 1.5 kg bags. Lucy buys 4 bags. What is the greatest number of cakes she can make?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 4 × 1.5 = 6 kg = 6000 g (1)\n• M1: 6000 ÷ 450 = 13.3… (1)\n• A1: 13 cakes (1)"
      },
      {
        "q": "By rounding each number to 1 significant figure, work out an estimate for (19.6 × 3.08²) ÷ 0.48",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 20, 3 and 0.5 seen (1)\n• M1: 20 × 9 = 180 (1)\n• A1: 180 ÷ 0.5 = 360 (1)"
      },
      {
        "q": "A car travels at an average speed of 64 km/h for 2 hours 15 minutes. How far does it travel?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2 hours 15 minutes = 2.25 hours (1)\n• M1: 64 × 2.25 (1)\n• A1: 144 km (1)"
      },
      {
        "q": "A rectangle has length 7.5 cm and width 4.0 cm, both measured correct to 1 decimal place. Work out the lower bound of the area of the rectangle.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: 7.45 or 3.95 seen (1)\n• M1: 7.45 × 3.95 (1)\n• A1: 29.4275 cm² (1)"
      },
      {
        "q": "A runner runs 200 m, measured to the nearest 5 m, in a time of 24.6 seconds, measured to the nearest 0.1 second. Work out the upper bound of her average speed. Give your answer to 3 significant figures.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: 202.5 and 24.55 seen (1)\n• M1: 202.5 ÷ 24.55 (upper distance ÷ lower time) (1)\n• A1: 8.25 m/s (8.248…) (1)"
      },
      {
        "q": "A block of metal is a cuboid measuring 5 cm by 4 cm by 2.5 cm. The density of the metal is 2.7 g/cm³. Work out the mass of the block in kilograms.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Volume = 5 × 4 × 2.5 = 50 cm³ (1)\n• M1: Mass = 50 × 2.7 = 135 g (1)\n• A1: 0.135 kg (1)"
      },
      {
        "q": "p = 9.6 and q = 2.4, both correct to 1 decimal place. r = p ÷ q. By considering bounds, work out the value of r to a suitable degree of accuracy. You must show your working and give a reason for your answer.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: Upper bound = 9.65 ÷ 2.35 = 4.106… (1)\n• M1: Lower bound = 9.55 ÷ 2.45 = 3.897… (1)\n• A1: r = 4 (1)\n• B1: Reason: both bounds round to 4 to 1 significant figure (but give 4.1 and 3.9 to 2 s.f.) (1)"
      },
      {
        "q": "A car travels 84 km, correct to the nearest kilometre. It uses 6.2 litres of fuel, correct to 1 decimal place. Work out the lower bound of the fuel consumption in kilometres per litre.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: 83.5 seen (1)\n• B1: 6.25 seen (1)\n• M1: Lower bound of distance ÷ upper bound of fuel: 83.5 ÷ 6.25 (1)\n• A1: 13.36 km per litre (1)"
      },
      {
        "q": "A swimming pool is a cuboid 25 m long, 10 m wide and 1.8 m deep. It is filled with water at a rate of 400 litres per minute. How many hours does it take to fill the pool? Give your answer to the nearest hour.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Volume = 25 × 10 × 1.8 = 450 m³ (1)\n• M1: 450 × 1000 = 450 000 litres (1)\n• M1: 450 000 ÷ 400 = 1125 minutes (1)\n• M1: 1125 ÷ 60 = 18.75 hours (1)\n• A1: 19 hours (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.4 */
  "1.4": {
    "name": "Powers, Roots, Surds & Standard Form",
    "questions": [
      {
        "q": "Write down the value of ∛125.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 5 (1)"
      },
      {
        "q": "Write 7.04 × 10⁻³ as an ordinary number.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 0.00704 (1)"
      },
      {
        "q": "Simplify 4⁷ × 4⁻² ÷ 4³. Give your answer as a power of 4.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 4⁵ or 4⁴ seen (adding/subtracting indices correctly) (1)\n• A1: 4² (1)"
      },
      {
        "q": "Write in standard form (a) 56 000 000 (b) 0.0000362",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 5.6 × 10⁷ (1)\n• (b) 3.62 × 10⁻⁵ (1)"
      },
      {
        "q": "Work out (3 × 10⁴) × (7 × 10⁻⁹). Give your answer in standard form.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 21 × 10⁻⁵ (1)\n• A1: 2.1 × 10⁻⁴ (1)"
      },
      {
        "q": "Work out the value of 2³ × 3² − √144.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 8 × 9 = 72 and √144 = 12 (1)\n• A1: 60 (1)"
      },
      {
        "q": "Write down the value of (a) 7⁰ (b) 3⁻²",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 1 (1)\n• (b) 1/9 (1)"
      },
      {
        "q": "Work out the value of 64^(2/3).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: ∛64 = 4 or 64² = 4096 seen (1)\n• A1: 16 (1)"
      },
      {
        "q": "Simplify √72. Give your answer in the form a√b where a and b are integers and b is as small as possible.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: √36 × √2 or √(36 × 2) (1)\n• A1: 6√2 (1)"
      },
      {
        "q": "A circle has radius 6 cm. Work out the circumference of the circle. Give your answer in terms of π.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2 × π × 6 or π × 12 (1)\n• A1: 12π cm (1)"
      },
      {
        "q": "Rationalise the denominator of 5/√2.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: Multiplies numerator and denominator by √2 (1)\n• A1: 5√2/2 (1)"
      },
      {
        "q": "Work out (8.4 × 10⁶) ÷ (2.1 × 10⁻²). Give your answer in standard form.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 8.4 ÷ 2.1 = 4 (1)\n• M1: 10⁶ ÷ 10⁻² = 10⁸ (1)\n• A1: 4 × 10⁸ (1)"
      },
      {
        "q": "The population of a country is 6.7 × 10⁷. Of these, 2.4 × 10⁷ people live in cities. What percentage of the population lives in cities? Give your answer to the nearest whole number.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (2.4 × 10⁷) ÷ (6.7 × 10⁷) (1)\n• M1: × 100 giving 35.8… (1)\n• A1: 36% (1)"
      },
      {
        "q": "Simplify fully √45 + √20 − √5.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: √45 = 3√5 (1)\n• M1: √20 = 2√5 (1)\n• A1: 4√5 (1)"
      },
      {
        "q": "Work out the exact value of (16/81)^(−3/4).",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: Reciprocal: (81/16)^(3/4) (1)\n• M1: Fourth root: 3/2 (1)\n• A1: (3/2)³ = 27/8 (1)"
      },
      {
        "q": "Simplify (a) x⁵ × x³ (b) y¹⁰ ÷ y⁴ (c) (2p⁴)³",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) x⁸ (1)\n• (b) y⁶ (1)\n• (c) 8p¹² (1)"
      },
      {
        "q": "A shape is made from a square of side 6 cm with a semicircle joined to one side, so the diameter of the semicircle is that 6 cm side. Work out the perimeter of the shape. Give your answer in terms of π.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Three straight sides = 3 × 6 = 18 cm (1)\n• M1: Semicircle arc = ½ × π × 6 = 3π (1)\n• A1: 18 + 3π cm (1)"
      },
      {
        "q": "Rationalise the denominator and simplify 7/(3 + √2). Give your answer in the form a + b√2 where a and b are integers.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: Multiplies numerator and denominator by (3 − √2) (1)\n• M1: Numerator 21 − 7√2 (1)\n• M1: Denominator 9 − 2 = 7 (1)\n• A1: 3 − √2 (1)"
      },
      {
        "q": "The Sun is 1.5 × 10⁸ km from the Earth. Light travels at 3 × 10⁵ km per second. How long does light from the Sun take to reach the Earth? Give your answer in minutes and seconds.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Time = distance ÷ speed: (1.5 × 10⁸) ÷ (3 × 10⁵) (1)\n• M1: 0.5 × 10³ (1)\n• A1: 500 seconds (1)\n• A1: 8 minutes 20 seconds (1)"
      },
      {
        "q": "Solve 2ˣ × 4ˣ⁺¹ = 8³.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: Writes 4 as 2² (1)\n• M1: 4ˣ⁺¹ = 2²ˣ⁺² (1)\n• M1: 8³ = 2⁹ (1)\n• M1: x + 2x + 2 = 9, i.e. 3x + 2 = 9 (1)\n• A1: x = 7/3 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.1 */
  "2.1": {
    "name": "Algebraic Notation & Manipulation",
    "questions": [
      {
        "q": "Simplify 4a × 3b.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 12ab (1)"
      },
      {
        "q": "Simplify m × m × m × n.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• m³n (1)"
      },
      {
        "q": "Expand and simplify 5(2x − 3) + 3(x + 4).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 10x − 15 + 3x + 12 (at least three of the four terms correct) (1)\n• A1: 13x − 3 (1)"
      },
      {
        "q": "Factorise fully 15x²y + 10xy.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: a correct partial factorisation, e.g. 5x(3xy + 2y) or xy(15x + 10) (1)\n• B1: 5xy(3x + 2) (1)"
      },
      {
        "q": "Simplify 4x²y³ × 5x⁴y.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: two of the three parts correct: 20, x⁶, y⁴ (1)\n• B1: 20x⁶y⁴ (1)"
      },
      {
        "q": "Work out the value of 3p² − 2q when p = −4 and q = 5.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 3 × 16 − 2 × 5 or 48 − 10 (1)\n• A1: 38 (1)"
      },
      {
        "q": "Expand and simplify (x + 6)(x − 2).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: x² − 2x + 6x − 12 (all four terms, ignore signs for one) (1)\n• A1: x² + 4x − 12 (1)"
      },
      {
        "q": "Factorise x² + 9x + 20.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (x ± 4)(x ± 5) (1)\n• A1: (x + 4)(x + 5) (1)"
      },
      {
        "q": "Factorise x² − 64.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: recognises difference of two squares, e.g. (x ± 8)(x ± 8) (1)\n• A1: (x + 8)(x − 8) (1)"
      },
      {
        "q": "Here are four statements. A: 4x − 3   B: 2x + 1 = 9   C: A = lw   D: 5(x + 1) ≡ 5x + 5. Write down which one is an expression, which is an equation, which is a formula and which is an identity.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• A expression, B equation, C formula, D identity — all four correct (2)\n[B1 for two or three correct]"
      },
      {
        "q": "Expand and simplify (√5 + 2)(√5 − 3).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 5 − 3√5 + 2√5 − 6 (four terms with at least three correct) (1)\n• A1: −1 − √5 (1)"
      },
      {
        "q": "Expand and simplify (2x − 3)(3x + 4).",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: at least three of 6x², +8x, −9x, −12 correct (1)\n• M1: all four terms correct (1)\n• A1: 6x² − x − 12 (1)"
      },
      {
        "q": "A rectangle has length (x + 7) cm and width (x − 3) cm.\n(a) Show that the area of the rectangle is (x² + 4x − 21) cm².\n(b) Work out the area when x = 10.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (x + 7)(x − 3) = x² − 3x + 7x − 21 (1)\n• A1: x² + 4x − 21 shown (1)\n• B1: 119 cm² (1)"
      },
      {
        "q": "Factorise fully 3x² − 12x − 36.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: 3(x² − 4x − 12) (1)\n• M1: (x ± 6)(x ± 2) (1)\n• A1: 3(x − 6)(x + 2) (1)"
      },
      {
        "q": "Simplify (3x²y⁴)² ÷ x³y.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (3x²y⁴)² = 9x⁴y⁸ (1)\n• M1: subtracts indices, e.g. x⁴⁻³ or y⁸⁻¹ (1)\n• A1: 9xy⁷ (1)"
      },
      {
        "q": "Factorise 6x² − 7x − 3.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: ac = −18, numbers −9 and 2 found (1)\n• M1: 6x² − 9x + 2x − 3 = 3x(2x − 3) + 1(2x − 3) (1)\n• A1: (2x − 3)(3x + 1) (1)"
      },
      {
        "q": "Expand and simplify (x + 4)(x − 1)(x + 2).",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: expands two brackets correctly, e.g. (x + 4)(x − 1) = x² + 3x − 4 (1)\n• M1: multiplies by the third bracket, e.g. x³ + 2x² + 3x² + 6x − 4x − 8 (1)\n• A1: x³ + 5x² + 2x − 8 (1)"
      },
      {
        "q": "Simplify fully (x² − 16)/(2x² + 9x + 4).",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: x² − 16 = (x + 4)(x − 4) (1)\n• M1: (2x ± 1)(x ± 4) (1)\n• A1: 2x² + 9x + 4 = (2x + 1)(x + 4) (1)\n• A1: (x − 4)/(2x + 1) (1)"
      },
      {
        "q": "Write 2/(x + 3) − 1/(x − 2) as a single fraction in its simplest form.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: common denominator (x + 3)(x − 2) (1)\n• M1: numerator 2(x − 2) − (x + 3) (1)\n• M1: 2x − 4 − x − 3 (1)\n• A1: (x − 7)/((x + 3)(x − 2)) (1)"
      },
      {
        "q": "A square has side length (x + 3) cm. A rectangle has length (x + 7) cm and width (x − 1) cm. Show that the area of the square is always greater than the area of the rectangle by the same amount, and state this amount.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (x + 3)² = x² + 6x + 9 (1)\n• M1: (x + 7)(x − 1) = x² + 6x − 7 (1)\n• M1: (x² + 6x + 9) − (x² + 6x − 7) (1)\n• A1: 16 cm², a constant (no x terms) (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.2 */
  "2.2": {
    "name": "Formulae, Identities, Proof & Functions",
    "questions": [
      {
        "q": "Make p the subject of q = p − 9.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• p = q + 9 (1)"
      },
      {
        "q": "Is 5(x + 2) = 5x + 10 an equation or an identity? Give a reason.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Identity, because it is true for all values of x (1)"
      },
      {
        "q": "The perimeter of a rectangle is given by P = 2(l + w). Work out P when l = 7.5 cm and w = 4 cm.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2(7.5 + 4) or 2 × 11.5 (1)\n• A1: 23 cm (1)"
      },
      {
        "q": "Make x the subject of y = 4x + 9.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: y − 9 = 4x (1)\n• A1: x = (y − 9)/4 (1)"
      },
      {
        "q": "v = u + at. Work out the value of t when v = 30, u = 6 and a = 4.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 30 = 6 + 4t or t = (30 − 6)/4 (1)\n• A1: t = 6 (1)"
      },
      {
        "q": "A function machine takes an input, multiplies it by 4 and then subtracts 7. The output is 25. Work out the input.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: reverses the machine: (25 + 7) ÷ 4 (1)\n• A1: 8 (1)"
      },
      {
        "q": "Make r the subject of A = 4πr², where r > 0.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: r² = A/(4π) (1)\n• A1: r = √(A/(4π)) (1)"
      },
      {
        "q": "f(x) = 7 − 2x.\n(a) Work out f(−3).\n(b) Solve f(x) = 1.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) 13 (1)\n• (b) x = 3 (1)"
      },
      {
        "q": "f(x) = 3x + 2. Find f⁻¹(x).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: y = 3x + 2 rearranged to x = (y − 2)/3, or a correct reverse flow diagram (1)\n• A1: f⁻¹(x) = (x − 2)/3 (1)"
      },
      {
        "q": "Use the formula E = ½mv² to work out E when m = 12 and v = 5.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: ½ × 12 × 5² or 6 × 25 (1)\n• A1: 150 (1)"
      },
      {
        "q": "Show that 3(2x + 5) − 2(x + 1) ≡ 4x + 13.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 6x + 15 − 2x − 2 (1)\n• A1: 4x + 13 with full working shown (1)"
      },
      {
        "q": "Make x the subject of y = (3x − 4)/5 + 2.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: y − 2 = (3x − 4)/5 (1)\n• M1: 5(y − 2) = 3x − 4, i.e. 5y − 10 = 3x − 4 (1)\n• A1: x = (5y − 6)/3 (1)"
      },
      {
        "q": "Show that the sum of any three consecutive integers is always a multiple of 3.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: n, n + 1, n + 2 (or equivalent) (1)\n• M1: sum = 3n + 3 (1)\n• A1: 3n + 3 = 3(n + 1), which is a multiple of 3 (1)"
      },
      {
        "q": "(x + a)(x + 3) ≡ x² + bx + 12. Work out the values of a and b.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: expands to x² + 3x + ax + 3a (1)\n• A1: 3a = 12 so a = 4 (1)\n• A1: b = 3 + a = 7 (1)"
      },
      {
        "q": "f(x) = 2x − 5 and g(x) = x² + 1. Find gf(x). Give your answer in its simplest form.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: gf(x) = (2x − 5)² + 1 (1)\n• M1: (2x − 5)² = 4x² − 20x + 25 (1)\n• A1: 4x² − 20x + 26 (1)"
      },
      {
        "q": "Make x the subject of ax − 3 = bx + 7.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: collects x terms on one side: ax − bx = 7 + 3 (1)\n• M1: factorises: x(a − b) = 10 (1)\n• A1: x = 10/(a − b) (1)"
      },
      {
        "q": "Prove that the difference between the squares of any two consecutive integers is always odd.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: uses n and n + 1 (1)\n• M1: (n + 1)² − n² = n² + 2n + 1 − n² (1)\n• A1: = 2n + 1, which is one more than a multiple of 2, so always odd (1)"
      },
      {
        "q": "Make x the subject of y = (3x + 2)/(x − 4).",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: y(x − 4) = 3x + 2 (1)\n• M1: xy − 4y = 3x + 2 then xy − 3x = 4y + 2 (1)\n• M1: x(y − 3) = 4y + 2 (1)\n• A1: x = (4y + 2)/(y − 3) (1)"
      },
      {
        "q": "Prove that (2n + 3)² − (2n − 3)² is a multiple of 12 for all positive integers n.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: (2n + 3)² = 4n² + 12n + 9 (1)\n• M1: (2n − 3)² = 4n² − 12n + 9 (1)\n• A1: difference = 24n (1)\n• A1: 24n = 12 × 2n, so it is a multiple of 12 (1)"
      },
      {
        "q": "The formula s = ut + ½at² gives the distance s metres travelled.\n(a) Work out s when u = 3, t = 4 and a = 2.5.\n(b) Make a the subject of the formula.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) M1: 3 × 4 + ½ × 2.5 × 4² (1)\n• (a) A1: 32 m (1)\n• (b) M1: s − ut = ½at² or 2s − 2ut = at² (1)\n• (b) A1: a = 2(s − ut)/t² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.3 */
  "2.3": {
    "name": "Linear Graphs & Coordinates",
    "questions": [
      {
        "q": "Write down the coordinates of the point that is 4 units to the right of the origin and 3 units down.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: (4, −3) (1)"
      },
      {
        "q": "Write down the gradient of the line y = 7 − 3x.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: −3 (1)"
      },
      {
        "q": "A is the point (−3, 4) and B is the point (5, −2). Find the coordinates of the midpoint of AB.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (−3 + 5) ÷ 2 or (4 + (−2)) ÷ 2, or one coordinate correct (1)\n• A1: (1, 1) (1)"
      },
      {
        "q": "Complete a table of values for y = 2x − 1 for x = −1, 0, 1, 2 and 3, and write down the five coordinates you would plot.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: at least three correct y-values from −3, −1, 1, 3, 5 (1)\n• B1: all correct: (−1, −3), (0, −1), (1, 1), (2, 3), (3, 5) (1)"
      },
      {
        "q": "Work out the gradient of the straight line through (2, −1) and (6, 11).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (11 − (−1)) ÷ (6 − 2) or 12/4 (1)\n• A1: 3 (1)"
      },
      {
        "q": "Rearrange 4x + 2y = 10 into the form y = mx + c. Hence write down the gradient and the coordinates of the y-intercept.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: y = −2x + 5 (1)\n• A1: gradient −2 and y-intercept (0, 5) (1)"
      },
      {
        "q": "Show that the point (3, 7) lies on the line y = 3x − 2.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: substitutes x = 3: 3 × 3 − 2 (1)\n• A1: = 7, which equals the y-coordinate, so the point lies on the line (1)"
      },
      {
        "q": "The midpoint of AB is (2, 5). A is the point (−1, 8). Find the coordinates of B.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: x: 2 × 2 − (−1) or y: 2 × 5 − 8, or one coordinate correct (1)\n• A1: B = (5, 2) (1)"
      },
      {
        "q": "Here are four lines: y = 3x + 2, 2y = 6x − 5, y = 2x + 3, 3y = x + 6. Which two lines are parallel? Give a reason.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: y = 3x + 2 and 2y = 6x − 5 (1)\n• B1: reason: both have gradient 3 (2y = 6x − 5 gives y = 3x − 2.5) (1)"
      },
      {
        "q": "A mobile phone plan costs C = 12 + 0.05t pounds per month, where t is the number of minutes used. Interpret the values 12 and 0.05 in this context.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: 12 is the fixed monthly charge of £12 (the y-intercept / cost when t = 0) (1)\n• B1: 0.05 is the cost per minute, 5p per minute (the gradient / rate) (1)"
      },
      {
        "q": "Find the equation of the straight line with gradient 3 that passes through the point (2, 7).",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: y = 3x + c with (2, 7) substituted: 7 = 6 + c (1)\n• A1: c = 1 (1)\n• A1: y = 3x + 1 (1)"
      },
      {
        "q": "Find the equation of the straight line through (−2, 9) and (4, −3). Give your answer in the form y = mx + c.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: gradient = (−3 − 9) ÷ (4 − (−2)) = −12/6 (1)\n• A1: gradient = −2 (1)\n• A1: y = −2x + 5 (1)"
      },
      {
        "q": "Line L has equation y = 4x − 3. Find the equation of the line parallel to L that passes through (−1, 6).",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: gradient 4 used (1)\n• M1: 6 = 4 × (−1) + c (1)\n• A1: y = 4x + 10 (1)"
      },
      {
        "q": "A conversion graph between pounds (£) and euros (€) is a straight line through (0, 0) and (50, 58), where the horizontal axis is pounds. (a) Work out the gradient and say what it represents. (b) Convert £80 to euros.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: gradient = 58 ÷ 50 = 1.16 (1)\n• B1: it is the exchange rate, €1.16 per £1 (1)\n• B1: £80 × 1.16 = €92.80 (1)"
      },
      {
        "q": "Find the equation of the line that is perpendicular to y = 3x + 2 and passes through (6, 1).",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: perpendicular gradient −1/3 (1)\n• M1: 1 = −1/3 × 6 + c (1)\n• A1: y = −⅓x + 3 (or x + 3y = 9) (1)"
      },
      {
        "q": "Show that the lines 2y = x + 6 and y = 4 − 2x are perpendicular.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: 2y = x + 6 gives y = ½x + 3, gradient ½ (1)\n• B1: y = 4 − 2x has gradient −2 (1)\n• B1: ½ × (−2) = −1, so the lines are perpendicular (1)"
      },
      {
        "q": "A is the point (1, 3) and B is the point (7, 5). Find the equation of the perpendicular bisector of AB.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: midpoint (4, 4) (1)\n• B1: gradient of AB = 2/6 = 1/3 (1)\n• M1: perpendicular gradient −3 used with the midpoint: 4 = −3 × 4 + c (1)\n• A1: y = −3x + 16 (1)"
      },
      {
        "q": "A is (−2, 1), B is (4, 4), C is (6, 0) and D is (0, −3). Show that ABCD is a rectangle.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: gradient AB = 3/6 = ½ and gradient DC = 3/6 = ½ (1)\n• M1: gradient BC = −4/2 = −2 and gradient AD = −4/2 = −2 (1)\n• A1: opposite sides parallel, so ABCD is a parallelogram (1)\n• A1: ½ × (−2) = −1 so adjacent sides are perpendicular, hence a rectangle (1)"
      },
      {
        "q": "Line L passes through (1, 4) and (3, 10). Line M has equation y = 3x − 5. (a) Show that L and M are parallel. (b) Find the coordinates of the point where L crosses the x-axis.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: gradient of L = (10 − 4) ÷ (3 − 1) = 3 (1)\n• A1: M also has gradient 3, so L and M are parallel (1)\n• M1: equation of L: y = 3x + 1 (1)\n• A1: crosses the x-axis at (−1/3, 0) (1)"
      },
      {
        "q": "Write down the gradient of a line perpendicular to 5x + 2y = 7.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: y = −5/2 x + 7/2, gradient −5/2 (1)\n• A1: perpendicular gradient 2/5 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.4 */
  "2.4": {
    "name": "Non-linear Graphs",
    "questions": [
      {
        "q": "Write down the coordinates of the point where the graph of y = x² − 2x − 15 crosses the y-axis.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: (0, −15) (1)"
      },
      {
        "q": "Write down the name of the type of graph given by the equation y = 5/x.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: reciprocal (graph) (1)"
      },
      {
        "q": "Complete the table of values for y = x² − 2x for x = −2, −1, 0, 1, 2, 3 and 4.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: at least four correct values from 8, 3, 0, −1, 0, 3, 8 (1)\n• B1: all seven correct: 8, 3, 0, −1, 0, 3, 8 (1)"
      },
      {
        "q": "Solve x² + 2x − 15 = 0 to find the roots of the graph y = x² + 2x − 15.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (x + 5)(x − 3) = 0 (1)\n• A1: x = −5 and x = 3 (1)"
      },
      {
        "q": "A quadratic graph crosses the x-axis at x = −3 and x = 7. Write down the equation of its line of symmetry and explain how you know.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: x = 2 (1)\n• B1: the line of symmetry is halfway between the roots: (−3 + 7) ÷ 2 = 2 (1)"
      },
      {
        "q": "Complete the table of values for y = x³ − 3x for x = −2, −1, 0, 1 and 2.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: at least three correct values from −2, 2, 0, −2, 2 (1)\n• B1: all correct: −2, 2, 0, −2, 2 (1)"
      },
      {
        "q": "Describe two key features of the graph of y = 1/x.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: two separate branches, in the first and third quadrants (1)\n• B1: the axes are asymptotes — the curve never touches x = 0 or y = 0 (1)"
      },
      {
        "q": "Kim walks 3 km in 45 minutes at a steady speed. Work out the gradient of her distance–time graph in km/h.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 3 ÷ 0.75 (45 minutes = 0.75 hours) (1)\n• A1: 4 km/h (1)"
      },
      {
        "q": "A circle has its centre at the origin and passes through the point (6, −8). Write down the equation of the circle.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: r² = 6² + (−8)² = 100 (or r = 10) (1)\n• A1: x² + y² = 100 (1)"
      },
      {
        "q": "The graph of y = x² is transformed to the graph of y = x² − 5. (a) Describe the transformation. (b) Write down the coordinates of the turning point of y = x² − 5.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: translation 5 units down, vector (0, −5) (1)\n• B1: (0, −5) (1)"
      },
      {
        "q": "A train's distance–time graph has three straight sections: from 0 to 20 minutes it travels 15 km away from the station; from 20 to 30 minutes the graph is horizontal; from 30 to 60 minutes it returns 15 km to the station. (a) Work out the speed in the first section in km/h. (b) Describe what happens in the second section.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 15 ÷ (20/60) or 15 ÷ 1/3 (1)\n• A1: 45 km/h (1)\n• B1: the train is stationary (stopped) for 10 minutes (1)"
      },
      {
        "q": "Show that the turning point of y = (x − 2)(x − 8) is (5, −9).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: x-coordinate halfway between the roots 2 and 8: x = 5 (1)\n• A1: y = (5 − 2)(5 − 8) = 3 × (−3) = −9 (1)"
      },
      {
        "q": "y = x² − 4x − 5. (a) Find the roots of the graph. (b) Use symmetry to find the coordinates of the turning point.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (x − 5)(x + 1) = 0 (1)\n• A1: x = 5 and x = −1 (1)\n• A1: turning point (2, −9) (1)"
      },
      {
        "q": "Write x² − 10x + 18 in the form (x − a)² − b. Hence write down the coordinates of the turning point of y = x² − 10x + 18.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: (x − 5)² − 25 + 18 (1)\n• A1: (x − 5)² − 7 (1)\n• B1ft: turning point (5, −7) (1)"
      },
      {
        "q": "For the graph of y = cos x for 0° ≤ x ≤ 360°, write down (a) the coordinates of the minimum point, (b) the coordinates of the two maximum points, (c) the values of x where the graph crosses the x-axis.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• B1: minimum (180°, −1) (1)\n• B1: maxima (0°, 1) and (360°, 1) (1)\n• B1: x = 90° and x = 270° (1)"
      },
      {
        "q": "A car accelerates uniformly from rest to 15 m/s in 6 seconds, travels at 15 m/s for 10 seconds, then decelerates uniformly to rest in 4 seconds. Use the velocity–time graph to work out the total distance travelled.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: area of at least one section correct: ½ × 6 × 15 = 45, 10 × 15 = 150 or ½ × 4 × 15 = 30 (1)\n• M1: adds three areas (1)\n• A1: 225 m (1)"
      },
      {
        "q": "The time, t hours, for n workers to finish a job is t = 24/n. (a) Complete the table for n = 1, 2, 3, 4, 6, 8. (b) Explain why the graph of t against n never meets the n-axis.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: at least four correct from 24, 12, 8, 6, 4, 3 (1)\n• B1: all six correct (1)\n• B1: t = 24/n can never equal 0 (24 ÷ n is always positive) — it is a reciprocal graph (1)"
      },
      {
        "q": "Find the equation of the tangent to the circle x² + y² = 20 at the point (2, −4).",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: gradient of radius = −4 ÷ 2 = −2 (1)\n• M1: tangent gradient = ½ (negative reciprocal) (1)\n• M1: −4 = ½ × 2 + c (1)\n• A1: y = ½x − 5 (or x − 2y = 10) (1)"
      },
      {
        "q": "A velocity–time curve passes through these points (time in s, velocity in m/s): (0, 0), (2, 6), (4, 10), (6, 12). The curve gets less steep as time increases. (a) Use three trapezia of equal width to estimate the distance travelled in the first 6 seconds. (b) State whether this is an underestimate or an overestimate, giving a reason.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: ½ × 2 × (0 + 6) or ½ × 2 × (6 + 10) or ½ × 2 × (10 + 12) (1)\n• M1: 6 + 16 + 22 (1)\n• A1: 44 m (1)\n• B1: underestimate, because the curve bends above the straight tops of the trapezia (1)"
      },
      {
        "q": "y = x² − 2x − 3. (a) Complete a table of values for x = −2, −1, 0, 1, 2, 3, 4. (b) Write down the roots. (c) Write down the turning point. (d) Use your values to solve x² − 2x − 3 = 5.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: table 5, 0, −3, −4, −3, 0, 5 (1)\n• B1: roots x = −1 and x = 3 (1)\n• B1: turning point (1, −4) (1)\n• B1: y = 5 when x = −2 and x = 4 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.5 */
  "2.5": {
    "name": "Equations & Inequalities",
    "questions": [
      {
        "q": "Solve 6x = 42.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• x = 7 (1)"
      },
      {
        "q": "A number line shows an open circle at −1 with an arrow pointing to the right. Write down the inequality shown.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• x > −1 [strict inequality required] (1)"
      },
      {
        "q": "Solve 4x − 7 = 21.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 4x = 28 (1)\n• A1: x = 7 (1)"
      },
      {
        "q": "Solve 5(x + 2) = 35.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 5x + 10 = 35 or x + 2 = 7 (1)\n• A1: x = 5 (1)"
      },
      {
        "q": "Solve 7 − 3x < 19.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: −3x < 12 or 7 − 19 < 3x (1)\n• A1: x > −4 [sign reversed correctly] (1)"
      },
      {
        "q": "Solve x² − 3x − 10 = 0.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (x − 5)(x + 2) = 0 (1)\n• A1: x = 5 or x = −2 (1)"
      },
      {
        "q": "Solve x/3 + 4 = 10.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: x/3 = 6 (1)\n• A1: x = 18 (1)"
      },
      {
        "q": "Write x² + 10x + 7 in the form (x + a)² + b.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: (x + 5)² seen (1)\n• A1: (x + 5)² − 18 (1)"
      },
      {
        "q": "Solve 2x − 3 > 7. Give your answer using set notation.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 2x > 10, x > 5 (1)\n• A1: {x : x > 5} (1)"
      },
      {
        "q": "n is an integer and −6 < 2n ≤ 8. List all the possible values of n.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: −3 < n ≤ 4 (1)\n• A1: −2, −1, 0, 1, 2, 3, 4 [all seven, no extras] (1)"
      },
      {
        "q": "Use the iteration formula xₙ₊₁ = 3 + 1/xₙ with x₁ = 3 to find x₂ and x₃.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• x₂ = 3 + 1/3 = 10/3 (≈ 3.333) (1)\n• x₃ = 3 + 3/10 = 3.3 (1)"
      },
      {
        "q": "Solve 3(2x − 1) = 2(x + 7) + 3.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 6x − 3 = 2x + 14 + 3 (expanding both brackets correctly) (1)\n• M1: 4x = 20 (1)\n• A1: x = 5 (1)"
      },
      {
        "q": "Solve the simultaneous equations 3x + y = 11 and 2x − y = 4.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: add the equations to eliminate y: 5x = 15 (1)\n• A1: x = 3 (1)\n• A1: y = 2 (1)"
      },
      {
        "q": "Solve (2x + 1)/3 − (x − 2)/4 = 2.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: multiply through by 12: 4(2x + 1) − 3(x − 2) = 24 (1)\n• M1: 8x + 4 − 3x + 6 = 24, so 5x = 14 (1)\n• A1: x = 2.8 or 14/5 (1)"
      },
      {
        "q": "Solve 2x² − 5x − 4 = 0. Give your answers correct to 2 decimal places.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: x = (5 ± √((−5)² − 4 × 2 × (−4))) / (2 × 2) (1)\n• M1: x = (5 ± √57) / 4 (1)\n• A1: x = 3.14 and x = −0.64 (1)"
      },
      {
        "q": "The angles of a quadrilateral are x°, 2x°, (3x − 20)° and (x + 30)°. Work out the size of the largest angle.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: x + 2x + 3x − 20 + x + 30 = 360, so 7x + 10 = 360 (1)\n• A1: x = 50 (1)\n• A1: largest angle = 3(50) − 20 = 130° (1)"
      },
      {
        "q": "Solve the inequality x² + x − 12 < 0.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: (x + 4)(x − 3) factorised (1)\n• A1: critical values −4 and 3 (1)\n• A1: −4 < x < 3 (1)"
      },
      {
        "q": "Solve the simultaneous equations 4x + 3y = 6 and 3x − 2y = 13.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: scale to equal coefficients, e.g. 8x + 6y = 12 and 9x − 6y = 39 (1)\n• M1: add to eliminate y: 17x = 51 (1)\n• A1: x = 3 (1)\n• A1: y = −2 (1)"
      },
      {
        "q": "Solve the simultaneous equations y = 2x − 1 and y = x² − 4x + 4.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: substitute: x² − 4x + 4 = 2x − 1 (1)\n• M1: x² − 6x + 5 = 0, (x − 1)(x − 5) = 0 (1)\n• A1: x = 1 and x = 5 (1)\n• A1: y = 1 and y = 9 (correctly paired: (1, 1) and (5, 9)) (1)"
      },
      {
        "q": "(a) Show that the equation x³ − 3x − 5 = 0 has a solution between x = 2 and x = 3.\n(b) Show that x³ − 3x − 5 = 0 can be rearranged to give x = ∛(3x + 5).\n(c) Starting with x₁ = 2, use the iteration formula xₙ₊₁ = ∛(3xₙ + 5) to find the value of x₃ correct to 3 decimal places.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) M1: substitutes x = 2 and x = 3: 2³ − 6 − 5 = −3 and 3³ − 9 − 5 = 13 (1)\n• (a) A1: sign change (and continuous function) so a solution lies between 2 and 3 (1)\n• (b) x³ = 3x + 5 so x = ∛(3x + 5) (1)\n• (c) M1: x₂ = ∛11 = 2.2239… (1)\n• (c) A1: x₃ = 2.268 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.6 */
  "2.6": {
    "name": "Sequences",
    "questions": [
      {
        "q": "Write down the next term of the sequence 2, 9, 16, 23, …",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 30 (1)"
      },
      {
        "q": "Write down the 4th cube number.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 64 (1)"
      },
      {
        "q": "Find the nth term of the sequence 5, 9, 13, 17, …",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 4n seen (common difference 4) (1)\n• A1: 4n + 1 (1)"
      },
      {
        "q": "Work out the first three terms of the sequence with nth term n² + 4.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: any two of 5, 8, 13 correct (1)\n• A1: 5, 8, 13 (1)"
      },
      {
        "q": "The first term of a sequence is 6. The term-to-term rule is \"multiply by 3 then subtract 4\". Write down the next three terms.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 14 (1)\n• 38 and 110 (1)"
      },
      {
        "q": "Is 150 a term of the sequence with nth term 7n + 3? Show how you decide.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 7n + 3 = 150 so 7n = 147 (1)\n• A1: n = 21, a whole number, so yes, 150 is the 21st term (1)"
      },
      {
        "q": "A Fibonacci-type sequence has first term 4 and second term 7. Each term is the sum of the two terms before it. Write down the next three terms.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 11 and 18 (1)\n• 29 (1)"
      },
      {
        "q": "A geometric sequence begins 64, 16, … Write down the next two terms.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: common ratio 1/4 (or ÷ 4) (1)\n• A1: 4 and 1 (1)"
      },
      {
        "q": "A geometric sequence begins √3, 3, 3√3, 9, … Write down the common ratio and the next term.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Common ratio √3 (1)\n• Next term 9√3 (1)"
      },
      {
        "q": "The nth triangular number is n(n + 1)/2. Work out the 12th triangular number.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 12 × 13 / 2 (1)\n• A1: 78 (1)"
      },
      {
        "q": "Here is a quadratic sequence: 3, 8, 15, 24, … Work out the next two terms.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: first differences 5, 7, 9 with second difference 2 (1)\n• A1: 35 and 48 (1)"
      },
      {
        "q": "Pattern 1 uses 6 sticks, pattern 2 uses 11 sticks and pattern 3 uses 16 sticks.\n(a) Find an expression for the number of sticks in pattern n.\n(b) Which pattern uses 126 sticks?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) M1: 5n seen (1)\n• (a) A1: 5n + 1 (1)\n• (b) 5n + 1 = 126, so pattern 25 (1)"
      },
      {
        "q": "Find an expression for the nth term of the quadratic sequence 2, 9, 20, 35, 54, …",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: second difference 4, so 2n² (1)\n• M1: subtract 2n² to leave 0, 1, 2, 3, 4 (1)\n• A1: 2n² + n − 1 (1)"
      },
      {
        "q": "Sequence A has nth term 4n + 1. Sequence B has nth term 61 − 2n. Find the position and the value of the term that is the same in both sequences.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 4n + 1 = 61 − 2n (1)\n• A1: n = 10 (1)\n• A1: the term is 41 (1)"
      },
      {
        "q": "A geometric sequence has first term 5 and a positive common ratio. The third term is 45. Work out the 6th term.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 5r² = 45 so r² = 9 (1)\n• A1: r = 3 (1)\n• A1: 6th term = 5 × 3⁵ = 1215 (1)"
      },
      {
        "q": "In a Fibonacci-type sequence each term is the sum of the two terms before it. The first two terms are a and b. The 3rd term is 11 and the 5th term is 29. Find a and b.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 3rd term a + b = 11 and 5th term 2a + 3b = 29 (1)\n• A1: b = 7 (1)\n• A1: a = 4 (1)"
      },
      {
        "q": "Find an expression for the nth term of the sequence 12, 17, 20, 21, 20, …",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: second difference −2, so −n² (1)\n• M1: add n² to give 13, 21, 29, 37, … = 8n + 5 (1)\n• A1: −n² + 8n + 5 (1)"
      },
      {
        "q": "The nth term of a sequence is n² + 2n.\n(a) Work out the 9th term.\n(b) Show that 120 is a term of the sequence and state its position.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) 99 (1)\n• (b) M1: n² + 2n = 120 so n² + 2n − 120 = 0 (1)\n• (b) M1: (n + 12)(n − 10) = 0 (1)\n• (b) A1: n = 10 (reject n = −12), so 120 is the 10th term (1)"
      },
      {
        "q": "Tables are placed in a row. 1 table seats 6 people, 2 tables seat 10 people and 3 tables seat 14 people.\n(a) Find an expression for the number of people who can sit at n tables.\n(b) A party of 75 people need to sit at one row of tables. What is the least number of tables needed?",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) M1: 4n seen (1)\n• (a) A1: 4n + 2 (1)\n• (b) M1: 4n + 2 ≥ 75 or 18 tables seat 74 (1)\n• (b) A1: 19 tables (1)"
      },
      {
        "q": "A geometric sequence has first term 2 and second term 2√3.\n(a) Find the common ratio.\n(b) Find the 5th term.\n(c) Which is the first term of the sequence greater than 500?",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) r = √3 (1)\n• (b) M1: 2 × (√3)⁴ (1)\n• (b) A1: 18 (1)\n• (c) M1: 11th term = 2 × 3⁵ = 486 and 12th term = 486√3 ≈ 842 (1)\n• (c) A1: the 12th term (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.1 */
  "3.1": {
    "name": "Ratio & Proportion",
    "questions": [
      {
        "q": "Write the ratio 24 : 36 in its simplest form.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 2 : 3 (1)"
      },
      {
        "q": "Write 35 as a fraction of 60. Give your answer in its simplest form.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 7/12 (1)"
      },
      {
        "q": "Share £450 in the ratio 4 : 5.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 450 ÷ 9 = 50 (1)\n• A1: £200 and £250 (1)"
      },
      {
        "q": "A map has a scale of 1 : 50 000. Two villages are 7.5 km apart in real life. How far apart are they on the map? Give your answer in centimetres.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 7.5 km = 750 000 cm, or 750 000 ÷ 50 000 (1)\n• A1: 15 cm (1)"
      },
      {
        "q": "5 notebooks cost £8.75. Work out the cost of 8 of these notebooks.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 8.75 ÷ 5 = 1.75 (1)\n• A1: £14 (1)"
      },
      {
        "q": "Write the ratio 3 : 8 in the form 1 : n.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 8 ÷ 3 (1)\n• A1: 1 : 2.67 (accept 1 : 8/3 or 1 : 2.6 recurring) (1)"
      },
      {
        "q": "It takes 5 decorators 12 days to paint a school. How many days would it take 3 decorators working at the same rate?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 5 × 12 = 60 decorator-days (1)\n• A1: 60 ÷ 3 = 20 days (1)"
      },
      {
        "q": "Toilet rolls are sold in two packs. Pack A: 6 rolls for £3.30. Pack B: 9 rolls for £4.86. Which pack is better value? You must show your working.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Pack A 3.30 ÷ 6 = 55p per roll (1)\n• M1: Pack B 4.86 ÷ 9 = 54p per roll (1)\n• A1: Pack B is better value, with correct comparable values (1)"
      },
      {
        "q": "The exchange rate is £1 = €1.15. Convert €506 into pounds.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 506 ÷ 1.15 (1)\n• A1: £440 (1)"
      },
      {
        "q": "y is directly proportional to x. When x = 4, y = 18. Find y when x = 10.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 18 ÷ 4 = 4.5 (or y = 4.5x) (1)\n• A1: y = 45 (1)"
      },
      {
        "q": "y is directly proportional to x². Describe exactly what happens to y when x is multiplied by 4.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: y = kx² so new y = k(4x)² = 16kx² (1)\n• A1: y is multiplied by 16 (1)"
      },
      {
        "q": "In a club the ratio of boys to girls is 5 : 3. There are 14 more boys than girls. How many members does the club have?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: difference of 2 parts = 14 (1)\n• M1: 1 part = 7 (1)\n• A1: 8 × 7 = 56 members (1)"
      },
      {
        "q": "A : B = 3 : 4 and B : C = 6 : 5. Find A : B : C in its simplest form.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: makes B the same in both, e.g. A : B = 9 : 12 (1)\n• M1: B : C = 12 : 10 (1)\n• A1: 9 : 12 : 10 (1)"
      },
      {
        "q": "A recipe for 12 biscuits uses 150 g butter, 225 g flour and 60 g sugar. Sam has 400 g butter, 500 g flour and 200 g sugar. The recipe can be scaled to make any whole number of biscuits. What is the greatest number of biscuits Sam can make?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: amount per biscuit, e.g. butter 12.5 g, flour 18.75 g, sugar 5 g (1)\n• M1: biscuits possible from each: butter 32, flour 26.6…, sugar 40 (1)\n• A1: 26 biscuits (flour is the limiting ingredient) (1)"
      },
      {
        "q": "y is directly proportional to x². When x = 4, y = 48. Find the value of y when x = 2.5.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: y = kx² and 48 = k × 16 (1)\n• A1: k = 3, so y = 3x² (1)\n• A1: y = 3 × 6.25 = 18.75 (1)"
      },
      {
        "q": "T is inversely proportional to the square root of L. When L = 16, T = 6. Find T when L = 36.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: T = k/√L and 6 = k/4 (1)\n• A1: k = 24 (1)\n• A1: T = 24/6 = 4 (1)"
      },
      {
        "q": "A model ship is made to a scale of 1 : 150. (a) The real ship is 63 m long. Work out the length of the model in centimetres. (b) The model mast is 18 cm tall. Work out the height of the real mast in metres.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 6300 ÷ 150 (1)\n• A1: (a) 42 cm (1)\n• B1: (b) 18 × 150 = 2700 cm = 27 m (1)"
      },
      {
        "q": "Two bottles are mathematically similar. The smaller bottle is 12 cm tall and the larger is 18 cm tall. (a) The smaller bottle holds 400 ml. Work out the capacity of the larger bottle. (b) The surface area of the smaller bottle is 270 cm². Work out the surface area of the larger bottle.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: length scale factor 18 ÷ 12 = 1.5 (1)\n• A1: (a) 400 × 1.5³ = 1350 ml (1)\n• M1: area scale factor 1.5² = 2.25 (1)\n• A1: (b) 270 × 2.25 = 607.5 cm² (1)"
      },
      {
        "q": "A bag contains red and blue counters in the ratio 3 : 7. Kim removes 12 blue counters. The ratio of red to blue is now 1 : 2. How many counters were in the bag originally?",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: red = 3k, blue = 7k (or equivalent) (1)\n• M1: 3k : (7k − 12) = 1 : 2, so 6k = 7k − 12 (1)\n• A1: k = 12 (1)\n• A1: 10 × 12 = 120 counters (1)"
      },
      {
        "q": "The force F between two magnets is inversely proportional to the square of the distance d between them. When d = 3, F = 20. (a) Find a formula for F in terms of d. (b) Find d when F = 5.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: F = k/d² and 20 = k/9 (1)\n• A1: (a) F = 180/d² (1)\n• M1: (b) 5 = 180/d² so d² = 36 (1)\n• A1: d = 6 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.2 */
  "3.2": {
    "name": "Percentages, Growth & Decay",
    "questions": [
      {
        "q": "Write 0.045 as a percentage.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 4.5% (1)"
      },
      {
        "q": "Write down the single multiplier that decreases an amount by 17%.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 0.83 (1)"
      },
      {
        "q": "Without a calculator, work out 35% of £260.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 10% = 26 and 5% = 13, or 30% = 78 (1)\n• A1: £91 (1)"
      },
      {
        "q": "Write 45 minutes as a percentage of 2 hours.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 45/120 (same units) (1)\n• A1: 37.5% (1)"
      },
      {
        "q": "Increase £85 by 12%.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 85 × 1.12, or 85 + 10.20 (1)\n• A1: £95.20 (1)"
      },
      {
        "q": "A TV costs £450. In a sale the price is reduced by 18%. Work out the sale price.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 450 × 0.82, or 450 − 81 (1)\n• A1: £369 (1)"
      },
      {
        "q": "The price of a ticket rises from £36 to £45. Work out the percentage increase.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 9/36 × 100 (1)\n• A1: 25% (1)"
      },
      {
        "q": "£2400 is invested for 3 years at 3.5% per year simple interest. Work out the total interest earned.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2400 × 0.035 = 84 per year (1)\n• A1: 84 × 3 = £252 (1)"
      },
      {
        "q": "Write £18 as a percentage of £15.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 18/15 × 100 (1)\n• A1: 120% (1)"
      },
      {
        "q": "£6000 is invested at 2% per year compound interest. Work out its value after 3 years.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 6000 × 1.02³ (1)\n• A1: £6367.25 (1)"
      },
      {
        "q": "A jacket costs £66 including VAT at 20%. Work out the price before VAT was added.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 66 ÷ 1.2 (1)\n• A1: £55 (1)"
      },
      {
        "q": "A car is bought for £18 500. Its value depreciates by 12% each year. Work out its value after 4 years. Give your answer to the nearest pound.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: multiplier 0.88 (1)\n• M1: 18 500 × 0.88⁴ (1)\n• A1: £11 094 (1)"
      },
      {
        "q": "After a 15% pay rise, Jo's salary is £29 900. What was her salary before the rise?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 115% = 29 900 (1)\n• M1: 29 900 ÷ 1.15 (1)\n• A1: £26 000 (1)"
      },
      {
        "q": "Lee has £5000 to invest for 3 years. Bank A pays 4% per year simple interest. Bank B pays 3.9% per year compound interest. Which bank gives Lee more money after 3 years? Show your working.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Bank A 5000 + 3 × 200 = £5600 (1)\n• M1: Bank B 5000 × 1.039³ = £5608.11 (1)\n• A1: Bank B gives more, with both values correct (1)"
      },
      {
        "q": "A lake contains 1200 fish. The number of fish decreases by 8% each year. After how many years will there first be fewer than 800 fish?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: uses 1200 × 0.92ⁿ (1)\n• M1: trials around the answer, e.g. 1200 × 0.92⁴ = 859.7 and 1200 × 0.92⁵ = 790.9 (1)\n• A1: 5 years (1)"
      },
      {
        "q": "The price of a bike is increased by 10%. The new price is then decreased by 10%. Show that the final price is 1% less than the original price.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: multipliers 1.1 and 0.9 (or works with an example price) (1)\n• M1: 1.1 × 0.9 = 0.99 (1)\n• A1: 0.99 means 99% of the original, so 1% less (1)"
      },
      {
        "q": "A savings account balance uₙ (in £) after n years is modelled by uₙ₊₁ = 1.04uₙ − 50, with u₀ = 2000. Work out u₃.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: u₁ = 1.04 × 2000 − 50 = 2030 (1)\n• M1: u₂ = 1.04 × 2030 − 50 = 2061.20 (1)\n• A1: u₃ = 2093.648 = £2093.65 (1)"
      },
      {
        "q": "In 2023 Mo earned £31 200. In 2024 he earned £32 448. (a) Work out the percentage increase. (b) His pay increases by the same percentage each year. Work out his pay in 2026.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 32 448 ÷ 31 200 = 1.04 (or 1248/31 200 × 100) (1)\n• A1: (a) 4% (1)\n• M1: (b) 32 448 × 1.04² (1)\n• A1: £35 095.76 (1)"
      },
      {
        "q": "£8000 is invested at r% per year compound interest. After 4 years it is worth £9724.05. Work out the value of r.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 9724.05 ÷ 8000 = 1.2155… (1)\n• M1: fourth root, ⁴√1.21550625 (1)\n• A1: multiplier 1.05 (1)\n• A1: r = 5 (1)"
      },
      {
        "q": "The population of an island is modelled by Pₙ₊₁ = 1.2Pₙ − 150, where Pₙ is the population n years after 2020 and P₀ = 1000. In which year does the population first exceed 1500?",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: P₁ = 1050, P₂ = 1110 (1)\n• M1: continues correctly, P₃ = 1182, P₄ = 1268.4, P₅ = 1372.08 (1)\n• M1: P₆ = 1496.5 (below 1500) and P₇ = 1645.8 (above 1500) (1)\n• A1: 2027 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.3 */
  "3.3": {
    "name": "Compound Measures & Rates of Change",
    "questions": [
      {
        "q": "Convert 4.2 km into metres.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 4200 m (1)"
      },
      {
        "q": "State what the gradient of a tangent to a curve at a point represents.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• The instantaneous rate of change (of y with respect to x) at that point (1)"
      },
      {
        "q": "A cyclist travels 36 km in 1 hour 30 minutes. Work out her average speed in km/h.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 36 ÷ 1.5 (1)\n• A1: 24 km/h (1)"
      },
      {
        "q": "The density of copper is 8.96 g/cm³. Work out the mass of 50 cm³ of copper.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 8.96 × 50 (1)\n• A1: 448 g (1)"
      },
      {
        "q": "A force of 120 N acts on an area of 0.3 m². Work out the pressure.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 120 ÷ 0.3 (1)\n• A1: 400 N/m² (or 400 Pa) (1)"
      },
      {
        "q": "Convert a speed of 18 m/s into km/h.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 18 × 3600 ÷ 1000 or 18 × 3.6 (1)\n• A1: 64.8 km/h (1)"
      },
      {
        "q": "The tangent to the curve y = f(x) at x = 2 passes through the points (0, −3) and (4, 9). Estimate the gradient of the curve at x = 2.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: (9 − (−3)) ÷ (4 − 0) (1)\n• A1: 3 (1)"
      },
      {
        "q": "Jess earns £9.80 per hour. One week she works 32 hours. Work out how much she earns that week.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 9.80 × 32 (1)\n• A1: £313.60 (1)"
      },
      {
        "q": "Cola is sold in packs of 6 cans for £3.90 or packs of 10 cans for £6.30. Which pack is better value? You must show your working.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 3.90 ÷ 6 = 65p and 6.30 ÷ 10 = 63p (or equivalent comparison) (1)\n• A1: Pack of 10 is better value, with correct supporting figures (1)"
      },
      {
        "q": "A straight-line graph shows the depth of water, d cm, in a tank against time, t minutes. It passes through (0, 80) and (20, 20). Work out the gradient and say what it represents.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Gradient = (20 − 80) ÷ 20 = −3 (1)\n• The depth of water decreases by 3 cm every minute (1)"
      },
      {
        "q": "Work out the average rate of change of y = x³ between x = 1 and x = 3.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: (27 − 1) ÷ (3 − 1) (1)\n• A1: 13 (1)"
      },
      {
        "q": "A lorry travels 84 miles at an average speed of 56 mph. It leaves at 10:45. At what time does it arrive?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 84 ÷ 56 (1)\n• A1: 1.5 hours = 1 hour 30 minutes (1)\n• A1: 12:15 (1)"
      },
      {
        "q": "A block of wood is a cuboid measuring 12 cm by 5 cm by 4 cm. Its mass is 168 g. Work out the density of the wood.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Volume = 12 × 5 × 4 = 240 cm³ (1)\n• M1: 168 ÷ 240 (1)\n• A1: 0.7 g/cm³ (1)"
      },
      {
        "q": "A box has weight 72 N. Its base is a rectangle measuring 40 cm by 30 cm. Work out the pressure the box exerts on the floor in N/m².",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Area = 0.4 × 0.3 = 0.12 m² (or 1200 cm² converted correctly) (1)\n• M1: 72 ÷ 0.12 (1)\n• A1: 600 N/m² (1)"
      },
      {
        "q": "The distance–time graph of a car is a curve, with distance in metres and time in seconds. A tangent is drawn to the curve at t = 5. The tangent passes through the points (2, 0) and (8, 54). Estimate the speed of the car at t = 5 seconds, and state whether this is an average or an instantaneous speed.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: gradient = (54 − 0) ÷ (8 − 2) (1)\n• A1: 9 m/s (1)\n• Instantaneous speed (at t = 5) (1)"
      },
      {
        "q": "The height, h metres, of a ball t seconds after it is thrown is h = 20t − 5t². Work out the average rate of change of height between t = 0 and t = 2.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• h(0) = 0 and h(2) = 40 − 20 = 20 (1)\n• M1: (20 − 0) ÷ (2 − 0) (1)\n• A1: 10 m/s (1)"
      },
      {
        "q": "300 cm³ of liquid A with density 1.2 g/cm³ is mixed with 200 cm³ of liquid B with density 0.9 g/cm³. Work out the density of the mixture.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Masses: 300 × 1.2 = 360 g and 200 × 0.9 = 180 g (1)\n• M1: (360 + 180) ÷ (300 + 200) (1)\n• A1: 1.08 g/cm³ (1)"
      },
      {
        "q": "Paula drives 120 km at an average speed of 80 km/h. She then drives a further 60 km at an average speed of 40 km/h. Work out her average speed for the whole journey.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Time for first part = 120 ÷ 80 = 1.5 h (1)\n• Time for second part = 60 ÷ 40 = 1.5 h (1)\n• M1: total distance ÷ total time = 180 ÷ 3 (1)\n• A1: 60 km/h (1)"
      },
      {
        "q": "Water is poured into a container. The volume, V litres, after t minutes is V = 2t². (a) Work out the average rate of flow between t = 1 and t = 3. (b) A tangent to the graph of V against t is drawn at t = 2. It passes through (1, 0) and (3, 16). Use it to estimate the rate of flow at t = 2. (c) Compare your answers to (a) and (b).",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) V(1) = 2 and V(3) = 18 (1)\n• (a) (18 − 2) ÷ 2 = 8 litres per minute (1)\n• (b) (16 − 0) ÷ (3 − 1) = 8 litres per minute (1)\n• (c) They are the same / equal (1)"
      },
      {
        "q": "A concrete block is a cuboid measuring 0.5 m by 0.4 m by 0.3 m. Concrete has density 2400 kg/m³. The weight of the block in newtons is 10 × its mass in kg. Work out the greatest pressure the block can exert on level ground.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Volume = 0.5 × 0.4 × 0.3 = 0.06 m³ (1)\n• Mass = 0.06 × 2400 = 144 kg (1)\n• Weight = 1440 N (1)\n• Smallest face = 0.4 × 0.3 = 0.12 m² (1)\n• Pressure = 1440 ÷ 0.12 = 12 000 N/m² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.1 */
  "4.1": {
    "name": "Angles, Polygons & Constructions",
    "questions": [
      {
        "q": "Write down the name of a polygon with 10 sides.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Decagon (1)"
      },
      {
        "q": "Write down the three-figure bearing of South-West.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 225° (1)"
      },
      {
        "q": "Two angles on a straight line are 2x and 3x. Work out the value of x.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2x + 3x = 180 (1)\n• A1: x = 36 (1)"
      },
      {
        "q": "The angles of a triangle are x, x + 20° and 2x. Work out the value of x.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: x + x + 20 + 2x = 180 or 4x + 20 = 180 (1)\n• A1: x = 40 (1)"
      },
      {
        "q": "Work out the size of each interior angle of a regular decagon.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: exterior angle 360 ÷ 10 = 36° or angle sum (10 − 2) × 180 = 1440° (1)\n• A1: 144° (1)"
      },
      {
        "q": "One angle of an isosceles triangle is 110°. Work out the sizes of the other two angles.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: (180 − 110) ÷ 2 (1)\n• A1: 35° and 35° (1)"
      },
      {
        "q": "Give two properties of a rhombus that are not true for every parallelogram.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• All four sides are equal (1)\n• Diagonals cross at right angles (or diagonals bisect the angles) (1)"
      },
      {
        "q": "The bearing of Q from P is 128°. Work out the bearing of P from Q.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 128 + 180 (1)\n• A1: 308° (1)"
      },
      {
        "q": "A straight line crosses two parallel lines. One of the angles between the transversal and the first parallel line is 74°. Work out the co-interior angle at the second parallel line, giving a reason.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 106° (1)\n• Co-interior angles (between parallel lines) add up to 180° (1)"
      },
      {
        "q": "A map has a scale of 1 : 25 000. The distance between two churches on the map is 6.4 cm. Work out the real distance in kilometres.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 6.4 × 25 000 = 160 000 cm (1)\n• A1: 1.6 km (1)"
      },
      {
        "q": "Describe how to construct the perpendicular bisector of a line segment AB using only a ruler and compasses.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• With compasses set to more than half of AB, draw arcs from A and from B (same radius) above and below the line so they intersect twice (1)\n• Join the two intersection points with a straight line (1)"
      },
      {
        "q": "Each exterior angle of a regular polygon is 20°. (a) How many sides does the polygon have? (b) Work out the sum of its interior angles.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 360 ÷ 20 = 18 sides (1)\n• (b) M1: (18 − 2) × 180 (1)\n• (b) A1: 2880° (1)"
      },
      {
        "q": "The angles of a quadrilateral are 2x + 10, 3x, 4x − 20 and x + 30, in degrees. Work out the size of the largest angle.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 10x + 20 = 360 (1)\n• A1: x = 34 (1)\n• A1: largest angle 4 × 34 − 20 = 116° (1)"
      },
      {
        "q": "Prove that an exterior angle of a triangle is equal to the sum of the two interior opposite angles.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Let the interior angles be a, b and c, with exterior angle e next to c; a + b + c = 180 (angles in a triangle) (1)\n• e + c = 180 (angles on a straight line) (1)\n• So e = 180 − c = a + b (1)"
      },
      {
        "q": "A boat sails 5 km due East from a harbour H, then 5 km due South. Work out the bearing it must sail on to return directly to H.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Triangle is right-angled and isosceles, so the angle at the boat between North and the line to H is 45° (1)\n• H is North-West of the boat (1)\n• 315° (1)"
      },
      {
        "q": "The diagram shows a rectangular garden ABCD drawn to a scale of 1 cm to 1 m, with AB = 10 m along the bottom and AD = 6 m up the left side. A tree is to be planted so that it is within 4 m of corner A and nearer to side AB than to side AD. On the diagram, show the region where the tree can be planted.",
        "marks": 3,
        "requiresDiagram": true,
        "higher": false,
        "markScheme": "• Arc of radius 4 cm, centre A (1)\n• Accurate bisector of angle DAB with construction arcs shown (1)\n• Correct region identified: inside the arc and between AB and the bisector (1)"
      },
      {
        "q": "A regular hexagon and a regular pentagon share a common side AB and do not overlap. Work out the size of the angle at A between the other side of the hexagon and the other side of the pentagon.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Hexagon interior angle 120° (1)\n• Pentagon interior angle 108° (1)\n• 360 − 120 − 108 = 132° (1)"
      },
      {
        "q": "PQ and RS are parallel horizontal lines, with PQ above RS and Q and S to the right of P and R. T is a point between the lines, to the right of P and R. Angle QPT = 35° and angle SRT = 50°. Work out angle PTR, giving reasons for each step.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Draw a line through T parallel to PQ and RS (1)\n• Angle between PT and this line = 35° (alternate angles are equal) (1)\n• Angle between RT and this line = 50° (alternate angles are equal) (1)\n• Angle PTR = 35 + 50 = 85° (1)"
      },
      {
        "q": "ABCDEFGH is a regular octagon. Work out the size of angle ACD, showing your reasoning.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Interior angle of regular octagon = 135° (1)\n• Triangle ABC is isosceles because AB = BC (1)\n• Angle BCA = (180 − 135) ÷ 2 = 22.5° (1)\n• Angle ACD = 135 − 22.5 = 112.5° (1)"
      },
      {
        "q": "A ship leaves port P and sails 12 km on a bearing of 050° to point A. It then sails 9 km on a bearing of 140° to point B. (a) Show that angle PAB = 90°. (b) A scale drawing uses 1 cm to represent 2 km. Given that PB = 15 km, how long is PB on the drawing? (c) Write down the bearing of P from A.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) Bearing of P from A = 050 + 180 = 230° (1)\n• (a) Angle PAB = 230 − 140 = 90° (1)\n• (b) M1: 15 ÷ 2 (1)\n• (b) A1: 7.5 cm (1)\n• (c) 230° (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.2 */
  "4.2": {
    "name": "Congruence, Similarity & Transformations",
    "questions": [
      {
        "q": "Write down the column vector that describes a translation of 5 units to the left and 3 units up.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Column vector with −5 on top and 3 below, i.e. (−5, 3) (1)"
      },
      {
        "q": "Two right-angled triangles both have a hypotenuse of 13 cm and one other side of 5 cm. Write down the condition that shows they are congruent.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• RHS (right angle, hypotenuse, side) (1)"
      },
      {
        "q": "Point A has coordinates (3, −2). A is reflected in the y-axis to give B. B is then reflected in the x-axis to give C. Write down the coordinates of B and of C.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B = (−3, −2) (1)\n• C = (−3, 2) (1)"
      },
      {
        "q": "A triangle has vertices (1, 1), (3, 1) and (3, 2). It is translated by the column vector (−4, 3). Write down the coordinates of the vertices of the image.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: at least two vertices correct, or all moved 4 left and 3 up with one error (1)\n• A1: (−3, 4), (−1, 4), (−1, 5) (1)"
      },
      {
        "q": "Triangle P has vertices (1, 2), (4, 2) and (1, 4). P is rotated 90° clockwise about the origin. Write down the coordinates of the vertices of the image.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: two vertices correct, or a 90° anticlockwise rotation about O (1)\n• A1: (2, −1), (2, −4), (4, −1) (1)"
      },
      {
        "q": "A triangle has vertices (1, 1), (2, 1) and (1, 3). It is enlarged by scale factor 3, centre (0, 0). Write down the coordinates of the vertices of the image.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: multiplies coordinates by 3 (at least two vertices correct) (1)\n• A1: (3, 3), (6, 3), (3, 9) (1)"
      },
      {
        "q": "Rectangle A measures 4 cm by 10 cm. Rectangle B is mathematically similar to A and its shorter side is 6 cm. Work out the length of the longer side of B.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: scale factor 6 ÷ 4 = 1.5 (1)\n• A1: 15 cm (1)"
      },
      {
        "q": "The points (6, 4) and (10, 8) are enlarged by scale factor ½ with centre (2, 2). Work out the coordinates of the images of both points.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: vectors from centre (4, 2) and (8, 6) halved to (2, 1) and (4, 3) (1)\n• A1: (4, 3) and (6, 5) (1)"
      },
      {
        "q": "Two shapes are mathematically similar. The length scale factor from the smaller to the larger is 4. The smaller shape has area 7 cm². Work out the area of the larger shape.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: area scale factor 4² = 16 (1)\n• A1: 112 cm² (1)"
      },
      {
        "q": "Triangle A has vertices (1, 1), (3, 1) and (1, 2). Triangle B has vertices (1, −1), (3, −1) and (1, −2). Describe fully the single transformation that maps triangle A onto triangle B.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Reflection (1)\n• in the x-axis (y = 0) (1)"
      },
      {
        "q": "Triangle X has two angles of 40° and 65°. Triangle Y has two angles of 40° and 70°. Explain why the triangles are not similar.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Third angles found: X has 75°, Y has 70° (1)\n• Angles of X are 40°, 65°, 75° and of Y are 40°, 70°, 70°, so the angles are not all equal and the triangles are not similar (1)"
      },
      {
        "q": "In triangle ABC, D lies on AB and E lies on AC so that DE is parallel to BC. AD = 6 cm, AB = 15 cm, DE = 8 cm and AE = 5 cm. Work out the length of BC and the length of EC.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Scale factor 15 ÷ 6 = 2.5 (1)\n• BC = 8 × 2.5 = 20 cm (1)\n• AC = 5 × 2.5 = 12.5, so EC = 7.5 cm (1)"
      },
      {
        "q": "Two bottles are mathematically similar. The smaller bottle is 15 cm tall and holds 270 ml. The larger bottle is 25 cm tall. Work out how much the larger bottle holds.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: length scale factor 25 ÷ 15 = 5/3 (1)\n• M1: volume scale factor (5/3)³ = 125/27 (1)\n• A1: 270 × 125/27 = 1250 ml (1)"
      },
      {
        "q": "Two similar containers have surface areas 50 cm² and 200 cm². The larger container has volume 480 cm³. Work out the volume of the smaller container.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: area scale factor 4 so length scale factor √4 = 2 (1)\n• M1: volume scale factor 2³ = 8 (1)\n• A1: 480 ÷ 8 = 60 cm³ (1)"
      },
      {
        "q": "Triangle A has vertices (2, 1), (3, 1) and (2, 3). Triangle B has vertices (3, 2), (5, 2) and (3, 6). Describe fully the single transformation that maps triangle A onto triangle B.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Enlargement (1)\n• scale factor 2 (1)\n• centre (1, 0) (1)"
      },
      {
        "q": "ABC is an isosceles triangle with AB = AC. M is the midpoint of BC. Prove that triangles ABM and ACM are congruent.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• AB = AC (given) and BM = CM (M is the midpoint of BC) (1)\n• AM is common to both triangles (1)\n• So the triangles are congruent by SSS (1)"
      },
      {
        "q": "A triangle has vertices (2, 1), (4, 1) and (2, 4). It is enlarged by scale factor −½, centre (0, 0). Work out the coordinates of the vertices of the image.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: multiplies each coordinate by −½ (1)\n• A1: two vertices correct (1)\n• A1: (−1, −0.5), (−2, −0.5), (−1, −2) (1)"
      },
      {
        "q": "Triangle T has vertices (1, 2), (3, 2) and (3, 3). T is reflected in the line y = x to give triangle U. U is then reflected in the x-axis to give triangle V. Find the vertices of U and V, and describe fully the single transformation that maps T onto V.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• U: (2, 1), (2, 3), (3, 3) (1)\n• V: (2, −1), (2, −3), (3, −3) (1)\n• Rotation 90° clockwise (1)\n• about the origin (0, 0) (1)"
      },
      {
        "q": "In triangle ABC, X lies on AB and Y lies on AC so that XY is parallel to BC. AX = 4 cm, XB = 2 cm, XY = 5 cm and AC = 9 cm. Work out the length of BC and the length of AY.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Triangles AXY and ABC similar with scale factor AB ÷ AX = 6 ÷ 4 = 1.5 (1)\n• BC = 5 × 1.5 = 7.5 cm (1)\n• M1: AY = 9 ÷ 1.5 (1)\n• A1: AY = 6 cm (1)"
      },
      {
        "q": "Two solid pyramids are mathematically similar. Their volumes are 54 cm³ and 250 cm³. The smaller pyramid has surface area 36 cm². Work out the surface area of the larger pyramid.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Volume scale factor 250/54 = 125/27 (1)\n• Length scale factor ∛(125/27) = 5/3 (1)\n• Area scale factor (5/3)² = 25/9 (1)\n• 36 × 25/9 = 100 cm² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.3 */
  "4.3": {
    "name": "Circles & Circle Theorems",
    "questions": [
      {
        "q": "Write down the name of the longest chord of a circle.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Diameter (1)"
      },
      {
        "q": "Write down the name of the region of a circle bounded by a chord and an arc.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Segment (1)"
      },
      {
        "q": "A circle has radius 4.5 cm. Work out its circumference. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2 × π × 4.5 or 9π (1)\n• A1: 28.3 cm (1)"
      },
      {
        "q": "A circle has diameter 14 cm. Work out its area. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: π × 7² (1)\n• A1: 153.9 cm² (1)"
      },
      {
        "q": "A circle has circumference 12π cm. Work out its area. Give your answer in terms of π.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: radius = 12π ÷ 2π = 6 cm (1)\n• A1: 36π cm² (1)"
      },
      {
        "q": "A sector has radius 9 cm and angle 80°. Work out the arc length. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 80/360 × 2 × π × 9 (1)\n• A1: 12.6 cm (1)"
      },
      {
        "q": "A sector has radius 7 cm and angle 150°. Work out its area. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 150/360 × π × 7² (1)\n• A1: 64.1 cm² (1)"
      },
      {
        "q": "A, B and C are points on a circle centre O. Angle ACB = 41°, where C is on the major arc AB. Work out angle AOB. Give a reason for your answer.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• 82° (1)\n• Reason: the angle at the centre is twice the angle at the circumference (1)"
      },
      {
        "q": "ABCD is a cyclic quadrilateral. Angle BAD = 4x and angle BCD = x + 25°. Work out the value of x.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 4x + x + 25 = 180 (opposite angles of a cyclic quadrilateral) (1)\n• A1: x = 31 (1)"
      },
      {
        "q": "TA is a tangent to a circle centre O, touching the circle at A. TA = 8 cm and the radius OA = 6 cm. Work out the length OT.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Angle OAT = 90° (tangent perpendicular to radius) and OT² = 6² + 8² (1)\n• OT = 10 cm (1)"
      },
      {
        "q": "A circle has area 200 cm². Work out its radius. Give your answer to 2 decimal places.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: r² = 200 ÷ π or r = √(200 ÷ π) (1)\n• A1: 7.98 cm (1)"
      },
      {
        "q": "A semicircle has diameter 10 cm. Work out its perimeter. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: curved part = ½ × π × 10 = 5π (1)\n• M1: adds the diameter, 5π + 10 (1)\n• A1: 25.7 cm (1)"
      },
      {
        "q": "A sector has radius 12 cm and angle 45°. Work out the perimeter of the sector. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: arc = 45/360 × 2 × π × 12 = 3π (1)\n• M1: 3π + 12 + 12 (1)\n• A1: 33.4 cm (1)"
      },
      {
        "q": "A circle of diameter 10 cm fits exactly inside a square of side 10 cm, touching all four sides. Work out the area of the square that is outside the circle. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Area of square = 100 cm² (1)\n• Area of circle = π × 5² = 25π (1)\n• 100 − 25π = 21.5 cm² (1)"
      },
      {
        "q": "A and B are points on a circle centre O, and angle OAB = 28°. C is a point on the major arc AB. Work out angle ACB, giving reasons.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Angle OBA = 28° (triangle OAB is isosceles as OA = OB are radii) (1)\n• Angle AOB = 180 − 56 = 124° (1)\n• Angle ACB = 62° (angle at centre is twice angle at circumference) (1)"
      },
      {
        "q": "P, Q and R lie on a circle. The tangent at P makes an angle of 58° with the chord PQ, and R lies in the alternate segment. Angle PQR = 71°. Work out angle QPR, giving reasons.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Angle PRQ = 58° (1)\n• Reason: alternate segment theorem (1)\n• Angle QPR = 180 − 58 − 71 = 51° (1)"
      },
      {
        "q": "A sector of a circle of radius 8 cm has area 40 cm². Work out the angle of the sector. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: θ/360 × π × 8² = 40 (1)\n• M1: θ = 40 × 360 ÷ 64π (1)\n• A1: 71.6° (1)"
      },
      {
        "q": "AB is a diameter of a circle centre O and C is any other point on the circumference. Prove that angle ACB = 90°.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Join OC; OA = OB = OC (radii) so triangles OAC and OBC are isosceles (1)\n• Let angle OAC = angle OCA = x and angle OBC = angle OCB = y (1)\n• Angles in triangle ABC: x + y + (x + y) = 180, so 2x + 2y = 180 (1)\n• x + y = 90, so angle ACB = 90° (1)"
      },
      {
        "q": "A circle has centre O and radius 10 cm. A and B are points on the circle with angle AOB = 90°. Work out the area of the minor segment cut off by chord AB. Give your answer to 1 decimal place.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Sector area = 90/360 × π × 10² = 25π (1)\n• Triangle area = ½ × 10 × 10 = 50 (1)\n• M1: 25π − 50 (1)\n• A1: 28.5 cm² (1)"
      },
      {
        "q": "TA and TB are tangents to a circle centre O, touching the circle at A and B. Angle ATB = 40°. C is a point on the major arc AB. Work out angle ACB and angle OAB, giving reasons.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• Angles OAT = OBT = 90° (tangent perpendicular to radius), so angle AOB = 360 − 90 − 90 − 40 = 140° (1)\n• Angle ACB = 70° (angle at centre is twice angle at circumference) (1)\n• Triangle OAB is isosceles (OA = OB radii) (1)\n• Angle OAB = (180 − 140) ÷ 2 = 20° (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.4 */
  "4.4": {
    "name": "Mensuration: Area, Volume & 3D",
    "questions": [
      {
        "q": "Write down the number of vertices of a triangular prism.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 6 (1)"
      },
      {
        "q": "Convert 2.5 litres to cm³.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 2500 cm³ (1)"
      },
      {
        "q": "A trapezium has parallel sides of 7 cm and 11 cm. The perpendicular distance between them is 6 cm. Work out the area of the trapezium.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: ½ × (7 + 11) × 6 (1)\n• A1: 54 cm² (1)"
      },
      {
        "q": "A circle has radius 8 cm. Work out its circumference. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2 × π × 8 or π × 16 (1)\n• A1: 50.3 cm (accept 50.26… rounded correctly) (1)"
      },
      {
        "q": "A circle has diameter 12 cm. Work out its area. Give your answer in terms of π.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: radius = 6 and π × 6² (1)\n• A1: 36π cm² (1)"
      },
      {
        "q": "A triangular prism is 15 cm long. Its cross-section is a triangle with base 6 cm and perpendicular height 4 cm. Work out the volume of the prism.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: cross-section area = ½ × 6 × 4 = 12 (1)\n• A1: 12 × 15 = 180 cm³ (1)"
      },
      {
        "q": "Convert 45 000 cm² to m².",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: dividing by 10 000 (100²) (1)\n• A1: 4.5 m² (1)"
      },
      {
        "q": "A cuboid is 5 cm long, 3 cm wide and 2 cm high. It rests on a 5 cm by 3 cm face. Describe the plan and the front elevation (viewed from the 5 cm side), giving their dimensions.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Plan: a rectangle 5 cm by 3 cm (1)\n• Front elevation: a rectangle 5 cm by 2 cm (1)"
      },
      {
        "q": "The points A(−2, 1), B(4, 1), C(4, 5) and D(−2, 5) are the vertices of a rectangle. Work out the area and the perimeter of ABCD.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Sides 6 and 4, area = 24 units² (1)\n• Perimeter = 20 units (1)"
      },
      {
        "q": "Work out the total surface area of a cuboid measuring 6 cm by 4 cm by 3 cm.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2 × (6 × 4 + 6 × 3 + 4 × 3) or 24 + 24 + 18 + 18 + 12 + 12 (1)\n• A1: 108 cm² (1)"
      },
      {
        "q": "A sphere has radius 4.5 cm. Work out its volume. Give your answer to 3 significant figures. [Volume of a sphere = 4/3 πr³]",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 4/3 × π × 4.5³ (= 121.5π) (1)\n• A1: 382 cm³ (1)"
      },
      {
        "q": "A closed cylinder has radius 5 cm and height 12 cm. Work out its total surface area. Give your answer in terms of π.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: two circular ends 2 × π × 5² = 50π (1)\n• M1: curved surface 2 × π × 5 × 12 = 120π (1)\n• A1: 170π cm² (1)"
      },
      {
        "q": "A rectangle measures 12 cm by 8 cm. A quarter circle of radius 8 cm, centred at one corner of the rectangle, is cut out. Work out the area remaining. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: rectangle 12 × 8 = 96 (1)\n• M1: quarter circle ¼ × π × 8² = 16π (= 50.26…) (1)\n• A1: 96 − 16π = 45.7 cm² (1)"
      },
      {
        "q": "A solid cone has base radius 6 cm and perpendicular height 8 cm. Work out its total surface area. Give your answer in terms of π. [Curved surface area of a cone = πrl]",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: slant height l = √(6² + 8²) = 10 (1)\n• M1: curved surface π × 6 × 10 = 60π and base π × 6² = 36π (1)\n• A1: 96π cm² (1)"
      },
      {
        "q": "A cuboid tank is 80 cm long, 50 cm wide and 40 cm high. It contains water to a depth of 30 cm. How many more litres of water are needed to fill the tank?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 80 × 50 × 10 (empty depth) or 160 000 − 120 000 (1)\n• M1: 40 000 cm³ divided by 1000 (1)\n• A1: 40 litres (1)"
      },
      {
        "q": "A pyramid has a square base and perpendicular height 9 cm. Its volume is 192 cm³. Work out the length of a side of the base. [Volume of a pyramid = 1/3 × base area × height]",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 1/3 × x² × 9 = 192 (1)\n• M1: x² = 64 (1)\n• A1: 8 cm (1)"
      },
      {
        "q": "A grain silo is a cylinder of radius 3 m and height 10 m with a hemisphere of radius 3 m on top. Work out the volume of the silo. Give your answer to 3 significant figures.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: cylinder π × 3² × 10 = 90π (1)\n• M1: hemisphere ½ × 4/3 × π × 3³ = 18π (1)\n• A1: 108π = 339 m³ (1)"
      },
      {
        "q": "A frustum is made by removing a cone of height 6 cm and base radius 3 cm from the top of a cone of height 18 cm and base radius 9 cm. Work out the volume of the frustum. Give your answer to 3 significant figures. [Volume of a cone = 1/3 πr²h]",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: large cone 1/3 × π × 9² × 18 = 486π (1)\n• M1: small cone 1/3 × π × 3² × 6 = 18π (1)\n• M1: 486π − 18π = 468π (1)\n• A1: 1470 cm³ (1)"
      },
      {
        "q": "A solid metal sphere of radius 6 cm is melted down and recast into solid cones, each with base radius 3 cm and height 4 cm. No metal is wasted. How many cones can be made? [Volume of a sphere = 4/3 πr³, volume of a cone = 1/3 πr²h]",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: sphere volume 4/3 × π × 6³ = 288π (1)\n• M1: cone volume 1/3 × π × 3² × 4 = 12π (1)\n• M1: 288π ÷ 12π (1)\n• A1: 24 cones (1)"
      },
      {
        "q": "A toy is a solid made from a cone joined to a hemisphere. The cone and the hemisphere both have radius 5 cm, and the slant height of the cone is 13 cm. The whole outer surface of each toy is painted. One tin of paint covers 1500 cm². How many complete toys can be painted with one tin? [Curved surface area of a cone = πrl, surface area of a sphere = 4πr²]",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: cone curved surface π × 5 × 13 = 65π (1)\n• M1: hemisphere curved surface ½ × 4 × π × 5² = 50π (1)\n• A1: total 115π = 361.28… cm² (no flat circle, since it is joined) (1)\n• M1: 1500 ÷ 361.28… = 4.15… (1)\n• A1: 4 toys (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.5 */
  "4.5": {
    "name": "Pythagoras & Trigonometry",
    "questions": [
      {
        "q": "Write down the exact value of cos 30°.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• √3/2 (1)"
      },
      {
        "q": "Write down the exact value of tan 30°.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 1/√3 or √3/3 (1)"
      },
      {
        "q": "A right-angled triangle has shorter sides of 9 cm and 12 cm. Work out the length of the hypotenuse.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 9² + 12² = 81 + 144 = 225 (1)\n• A1: √225 = 15 cm (1)"
      },
      {
        "q": "A right-angled triangle has hypotenuse 25 cm and one shorter side 7 cm. Work out the length of the third side.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 25² − 7² = 625 − 49 = 576 (1)\n• A1: √576 = 24 cm (1)"
      },
      {
        "q": "Work out the distance between the points A(−3, 4) and B(5, −2).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: horizontal 8 and vertical 6, so 8² + 6² = 100 (1)\n• A1: 10 units (1)"
      },
      {
        "q": "In triangle ABC, angle B = 90°, angle A = 52° and the hypotenuse AC = 15 cm. Work out the length of BC. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: BC = 15 × sin 52° (1)\n• A1: 11.8 cm (1)"
      },
      {
        "q": "In a right-angled triangle the side adjacent to angle θ is 6 cm and the hypotenuse is 11 cm. Work out θ. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: cos θ = 6/11 (1)\n• A1: θ = cos⁻¹(6/11) = 56.9° (1)"
      },
      {
        "q": "A triangle has sides 20 cm, 21 cm and 29 cm. Show that the triangle is right-angled.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 20² + 21² = 400 + 441 = 841 (1)\n• 29² = 841, equal so right-angled by the converse of Pythagoras (1)"
      },
      {
        "q": "Without using a calculator, work out the value of sin 30° + cos 60° + tan 45°.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• ½, ½ and 1 seen (at least two correct) (1)\n• 2 (1)"
      },
      {
        "q": "A triangle has sides of 7 cm and 12 cm with an included angle of 50°. Work out the area of the triangle. Give your answer to 1 decimal place.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: ½ × 7 × 12 × sin 50° (1)\n• A1: 32.2 cm² (1)"
      },
      {
        "q": "A ladder 6.5 m long leans against a vertical wall. The foot of the ladder is on level ground, 2.5 m from the wall. Work out the angle the ladder makes with the ground. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: cos θ = 2.5/6.5 (or Pythagoras height 6 then tan θ = 6/2.5) (1)\n• M1: θ = cos⁻¹(2.5/6.5) (1)\n• A1: 67.4° (1)"
      },
      {
        "q": "An isosceles triangle has two sides of 13 cm and a base of 10 cm. Work out its area.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: half the base = 5 and 13² − 5² = 144 (1)\n• A1: perpendicular height = 12 cm (1)\n• A1: area = ½ × 10 × 12 = 60 cm² (1)"
      },
      {
        "q": "From the top of a vertical cliff 80 m high, the angle of depression of a boat at sea is 25°. Work out the horizontal distance from the foot of the cliff to the boat. Give your answer to 3 significant figures.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: angle of elevation from the boat = 25° (alternate angles) (1)\n• M1: tan 25° = 80/d so d = 80 ÷ tan 25° (1)\n• A1: 172 m (1)"
      },
      {
        "q": "A right-angled triangle has hypotenuse 8 cm and one angle of 60°. Without using a calculator, find the exact lengths of the side adjacent to the 60° angle and the side opposite it.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: adjacent = 8 cos 60° or opposite = 8 sin 60° (1)\n• A1: adjacent = 8 × ½ = 4 cm (1)\n• A1: opposite = 8 × √3/2 = 4√3 cm (1)"
      },
      {
        "q": "In triangle ABC, angle A = 48°, angle B = 73° and BC = a = 12 cm. Work out the length of AC = b. Give your answer to 3 significant figures.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: b/sin 73° = 12/sin 48° (1)\n• M1: b = 12 × sin 73° ÷ sin 48° (1)\n• A1: 15.4 cm (1)"
      },
      {
        "q": "In triangle ABC, AB = 11 cm, AC = 8 cm and angle BAC = 37°. Work out the length of BC. Give your answer to 3 significant figures.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: BC² = 8² + 11² − 2 × 8 × 11 × cos 37° (1)\n• M1: BC² = 44.44… (1)\n• A1: 6.67 cm (1)"
      },
      {
        "q": "A triangle has sides 7 cm, 9 cm and 12 cm. Work out the size of its largest angle. Give your answer to 1 decimal place.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: largest angle is opposite 12 cm; cos θ = (7² + 9² − 12²)/(2 × 7 × 9) (1)\n• M1: cos θ = −14/126 = −0.111… (1)\n• A1: 96.4° (1)"
      },
      {
        "q": "A cuboid ABCDEFGH has a rectangular base ABCD with AB = 5 cm and BC = 4 cm. The vertical edges, such as CG, are 3 cm. Work out (a) the length of the space diagonal AG and (b) the angle between AG and the base ABCD. Give answers to 1 decimal place.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: base diagonal AC² = 5² + 4² = 41 (1)\n• A1: AG = √(41 + 9) = √50 = 7.1 cm (1)\n• M1: tan θ = 3/√41 (or sin θ = 3/√50) (1)\n• A1: 25.1° (1)"
      },
      {
        "q": "A triangle has sides 5 cm, 6 cm and 7 cm. Work out the area of the triangle. Give your answer to 3 significant figures.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: cosine rule for an angle, e.g. cos C = (5² + 6² − 7²)/(2 × 5 × 6) = 0.2 (1)\n• A1: C = 78.46…° (1)\n• M1: area = ½ × 5 × 6 × sin 78.46…° (1)\n• A1: 14.7 cm² (1)"
      },
      {
        "q": "A ship leaves port P and sails 12 km on a bearing of 040° to point Q. It then sails 9 km on a bearing of 110° to point R. Work out (a) the distance PR and (b) the bearing of R from P. Give your answers to 1 decimal place.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: angle PQR = 110° (from back bearing 220° − 110°) (1)\n• M1: PR² = 12² + 9² − 2 × 12 × 9 × cos 110° (1)\n• A1: PR = 17.3 km (1)\n• M1: sin QPR = 9 × sin 110° ÷ 17.29… so QPR = 29.3° (1)\n• A1: bearing = 040° + 29.3° = 069.3° (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.6 */
  "4.6": {
    "name": "Vectors",
    "questions": [
      {
        "q": "Write down the column vector that describes a translation of 5 units to the left and 2 units down.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (−5, −2) (1)"
      },
      {
        "q": "a = (3, −4). Write down −2a as a column vector.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (−6, 8) (1)"
      },
      {
        "q": "a = (4, −3) and b = (−1, 5). Work out a + 2b as a column vector.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2b = (−2, 10) (1)\n• A1: (2, 7) (1)"
      },
      {
        "q": "a = (2, 1) and b = (5, −4). Work out 3a − b as a column vector.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 3a = (6, 3) or one correct component of the answer (1)\n• A1: (1, 7) (1)"
      },
      {
        "q": "A is the point (−2, 3) and B is the point (4, −1). Write down the column vector AB.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: one correct component, 6 or −4 (1)\n• B1: (6, −4) fully correct (1)"
      },
      {
        "q": "Triangle T has vertices (1, 1), (3, 1) and (1, 4). T is translated by the vector (−4, 2). Write down the coordinates of the vertices of the image.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: at least two vertices correct (1)\n• B1: all three correct: (−3, 3), (−1, 3), (−3, 6) (1)"
      },
      {
        "q": "Shape P is translated by (2, −3) to give shape Q. Shape Q is then translated by (−5, 1) to give shape R. Write down the column vector of the single translation that maps P onto R.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: adds the vectors, or one correct component (1)\n• A1: (−3, −2) (1)"
      },
      {
        "q": "(x, 3) + 2(4, y) = (11, −5). Find the values of x and y.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• x + 8 = 11 so x = 3 (1)\n• 3 + 2y = −5 so y = −4 (1)"
      },
      {
        "q": "O is the origin. OA = a and OB = b. Write down, in terms of a and b, (i) vector AB (ii) vector BA.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (i) AB = b − a (or −a + b) (1)\n• (ii) BA = a − b (1)"
      },
      {
        "q": "Show that the vector 4a − 6b is parallel to the vector 2a − 3b.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• 4a − 6b = 2(2a − 3b) (1)\n• States it is a scalar multiple of 2a − 3b, so the vectors are parallel (1)"
      },
      {
        "q": "p = (5, −2) and q = (−3, 1). Find the vector r such that p + 2r = q.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 2r = q − p (1)\n• M1: 2r = (−8, 3) (1)\n• A1: r = (−4, 1.5) (1)"
      },
      {
        "q": "OABC is a parallelogram. O is the origin, OA = a and OC = c. Write down, in terms of a and c, (i) vector OB (ii) vector AC (iii) vector CB.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (i) OB = a + c (1)\n• (ii) AC = c − a (1)\n• (iii) CB = a (1)"
      },
      {
        "q": "O is the origin, OA = a and OB = b. M is the midpoint of AB. Find vector OM in terms of a and b. Give your answer in its simplest form.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: AB = b − a (1)\n• M1: OM = a + ½(b − a) (1)\n• A1: OM = ½a + ½b or ½(a + b) (1)"
      },
      {
        "q": "O is the origin, OA = a and OB = b. P is the point on AB such that AP : PB = 2 : 3. Find vector OP in terms of a and b, in its simplest form.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: AB = b − a (1)\n• M1: AP = ⅖(b − a) and OP = a + ⅖(b − a) (1)\n• A1: OP = ⅗a + ⅖b (1)"
      },
      {
        "q": "m(2, −1) + n(1, 3) = (8, 3). Find the values of m and n.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: forms 2m + n = 8 and −m + 3n = 3 (1)\n• M1: correct method to eliminate one unknown, e.g. 7n = 14 (1)\n• A1: m = 3, n = 2 (1)"
      },
      {
        "q": "Point A(2, −5) is translated by the vector v to A′(−3, 1). Point B(4, 0) is translated by the same vector v. Find v and the coordinates of the image of B.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• B1: one correct component of v (1)\n• B1: v = (−5, 6) (1)\n• B1ft: image of B is (−1, 6) (1)"
      },
      {
        "q": "AB = 3a + 2b and BC = 6a + 4b. Prove that the points A, B and C lie on a straight line.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• BC = 2(3a + 2b) = 2AB (1)\n• so AB and BC are parallel (1)\n• and they share the point B, so A, B and C are collinear (1)"
      },
      {
        "q": "OAB is a triangle with OA = 3a and OB = 3b. P is the point on OA such that OP : PA = 1 : 2. Q is the point on OB such that OQ : QB = 1 : 2. Prove that PQ is parallel to AB.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• AB = 3b − 3a (1)\n• OP = a and OQ = b (1)\n• PQ = −a + b = b − a (1)\n• AB = 3(b − a) = 3PQ, a multiple of PQ, so PQ is parallel to AB (1)"
      },
      {
        "q": "OABC is a parallelogram with OA = a and OC = c. M is the midpoint of AB. The point D is such that OD = 2a + c. Prove that O, M and D lie on a straight line.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• AB = OC = c (1)\n• OM = a + ½c (1)\n• OD = 2a + c = 2(a + ½c) = 2OM (1)\n• OM and OD are parallel and share the point O, so O, M and D are collinear (1)"
      },
      {
        "q": "OAB is a triangle with OA = 4a and OB = 4b. P is the point on AB such that AP : PB = 1 : 3. The point Q is such that OQ = 6a + 2b. Prove that O, P and Q are collinear and find the ratio OP : PQ.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: AB = 4b − 4a (1)\n• M1: AP = ¼(4b − 4a) = b − a (1)\n• A1: OP = 4a + b − a = 3a + b (1)\n• OQ = 6a + 2b = 2(3a + b) = 2OP, parallel with common point O so collinear (1)\n• A1: OP : PQ = 1 : 1 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 5.1 */
  "5.1": {
    "name": "Probability",
    "questions": [
      {
        "q": "A fair six-sided dice is rolled. Write down the probability that it lands on 5.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 1/6 (1)"
      },
      {
        "q": "The probability that it rains tomorrow is 0.35. Write down the probability that it does not rain tomorrow.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 0.65 (1)"
      },
      {
        "q": "A biased spinner can land on red, blue, green or yellow. P(red) = 0.3, P(blue) = 0.25 and P(green) = 0.1. Work out P(yellow).",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 1 − (0.3 + 0.25 + 0.1) (1)\n• A1: 0.35 (1)"
      },
      {
        "q": "The probability that a biased spinner lands on 5 is 0.12. The spinner is spun 250 times. Work out an estimate for the number of times it lands on 5.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 0.12 × 250 (1)\n• A1: 30 (1)"
      },
      {
        "q": "A coin is thrown 200 times and lands on heads 116 times. (a) Work out the relative frequency of heads. (b) How could a more reliable estimate of the probability of heads be found?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 116/200 = 0.58 (accept 29/50 or 58%) (1)\n• (b) Throw the coin more times (increase the number of trials) (1)"
      },
      {
        "q": "Two fair spinners are each numbered 1, 2 and 3. Both are spun and the scores added. Work out the probability that the total is 4.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 9 equally likely outcomes with 3 giving a total of 4: (1, 3), (2, 2), (3, 1) (1)\n• A1: 3/9 = 1/3 (1)"
      },
      {
        "q": "A bag contains 7 red, 5 blue and 8 white beads. A bead is taken at random. Work out the probability that it is not blue.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 15 beads are not blue out of 20 (1)\n• A1: 15/20 = 3/4 (1)"
      },
      {
        "q": "Ali chooses one starter (soup or salad) and one main course (fish, pie or curry). List all the possible combinations he could choose.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• At least 4 correct combinations with none wrong (1)\n• All 6: soup-fish, soup-pie, soup-curry, salad-fish, salad-pie, salad-curry (1)"
      },
      {
        "q": "The probability that Sam's bus is late is 0.3. The probability that Sam's train is late is 0.2. The events are independent. Work out the probability that both are late.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 0.3 × 0.2 (1)\n• A1: 0.06 (1)"
      },
      {
        "q": "ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}. A = {factors of 12}. B = {odd numbers}. List the members of (i) A ∩ B (ii) A ∪ B.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (i) A ∩ B = {1, 3} (1)\n• (ii) A ∪ B = {1, 2, 3, 4, 5, 6, 7, 9, 11, 12} (1)"
      },
      {
        "q": "120 adults were asked if they exercise regularly. 45 of them were men. 30 of the men exercise regularly. 50 of the women exercise regularly. (a) How many of the adults do not exercise regularly? (b) One adult is chosen at random. Work out the probability that this adult is a woman who exercises regularly.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Women = 120 − 45 = 75 (1)\n• (a) 15 men + 25 women = 40 (1)\n• (b) 50/120 = 5/12 (1)"
      },
      {
        "q": "A bag contains 3 red and 7 green balls. A ball is taken at random, replaced, and then a second ball is taken. Work out the probability that both balls are the same colour.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 0.3 × 0.3 or 0.7 × 0.7 (1)\n• M1: 0.09 + 0.49 (1)\n• A1: 0.58 (1)"
      },
      {
        "q": "A box contains 4 red and 5 blue pens. Two pens are taken at random without replacement. Work out the probability that both pens are blue.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 5/9 for the first pen (1)\n• 4/8 for the second pen, multiplied (1)\n• 20/72 = 5/18 (1)"
      },
      {
        "q": "There are 40 students in a club. 22 study French, 17 study Spanish and 8 study both. One student is chosen at random. Work out the probability that the student studies neither French nor Spanish.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: French only 14 or Spanish only 9, or 22 + 17 − 8 = 31 (1)\n• M1: 40 − 31 = 9 study neither (1)\n• A1: 9/40 (1)"
      },
      {
        "q": "A biased four-sided spinner is numbered 1 to 4. P(1) = 0.4 and P(2) = 0.25. P(3) and P(4) are equal. The spinner is spun 160 times. Work out an estimate of the number of times it lands on 4.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 1 − 0.4 − 0.25 = 0.35 (1)\n• M1: P(4) = 0.35 ÷ 2 = 0.175 (1)\n• A1: 0.175 × 160 = 28 (1)"
      },
      {
        "q": "In a group of 80 students, 35 are in Year 10 and 45 are in Year 11. 20 of the Year 10 students and 30 of the Year 11 students own a bike. A student who owns a bike is chosen at random. Work out the probability that this student is in Year 11.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 20 + 30 = 50 students own a bike (1)\n• M1: 30 out of those 50 are in Year 11 (1)\n• A1: 30/50 = 3/5 (1)"
      },
      {
        "q": "The probability that Kai scores a penalty is 0.8. He takes three penalties; each is independent. Work out the probability that he scores (a) all three penalties (b) exactly two penalties.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) M1: 0.8 × 0.8 × 0.8 (1)\n• (a) A1: 0.512 (1)\n• (b) M1: 0.8 × 0.8 × 0.2 = 0.128 for one order, and 3 orders (1)\n• (b) A1: 3 × 0.128 = 0.384 (1)"
      },
      {
        "q": "The probability that it rains on a given day is 0.3. If it rains, the probability that Mia is late is 0.4. If it does not rain, the probability that Mia is late is 0.1. (a) Work out the probability that Mia is late. (b) Given that Mia is late, work out the probability that it rained.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) M1: 0.3 × 0.4 + 0.7 × 0.1 (1)\n• (a) A1: 0.19 (1)\n• (b) M1: 0.12 ÷ 0.19 (1)\n• (b) A1: 12/19 (≈ 0.632) (1)"
      },
      {
        "q": "P(A) = 0.45, P(B) = 0.3 and P(A ∩ B) = 0.1. (a) Work out P((A ∪ B)′). (b) Work out P(B | A).",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) M1: P(A ∪ B) = 0.45 + 0.3 − 0.1 = 0.65 (1)\n• (a) A1: 0.35 (1)\n• (b) M1: 0.1 ÷ 0.45 (1)\n• (b) A1: 2/9 (1)"
      },
      {
        "q": "A bag contains n sweets. 6 are orange and the rest are yellow. Two sweets are taken at random without replacement. The probability that both are orange is 1/3. Show that n² − n − 90 = 0 and hence find the number of sweets in the bag.",
        "marks": 5,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: 6/n × 5/(n − 1) (1)\n• M1: 30/(n(n − 1)) = 1/3 so n(n − 1) = 90 (1)\n• A1: n² − n − 90 = 0 shown convincingly (1)\n• M1: (n − 10)(n + 9) = 0 (1)\n• A1: n = 10 (reject n = −9) (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.1 */
  "6.1": {
    "name": "Sampling, Charts & Scatter Graphs",
    "questions": [
      {
        "q": "Write down one reason why a sample might be used rather than surveying the whole population.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Any valid reason, e.g. quicker, cheaper, population too large to survey, or testing destroys the items (1)"
      },
      {
        "q": "A scatter graph shows that as the age of a car increases, its value decreases. Write down the type of correlation shown.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Negative (correlation) (1)"
      },
      {
        "q": "In a survey of 45 people, 20 chose summer as their favourite season. Work out the angle of the sector for summer in a pie chart.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 360 ÷ 45 = 8° per person, or 20/45 × 360 (1)\n• A1: 160° (1)"
      },
      {
        "q": "In a pictogram, one symbol represents 6 books. Kai read 27 books. How many symbols should be drawn for Kai? Explain how the last symbol should be drawn.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 27 ÷ 6 = 4.5 (1)\n• A1: 4½ symbols — four whole symbols and half a symbol (1)"
      },
      {
        "q": "A pie chart represents 200 people. One sector has an angle of 54°. How many people does this sector represent?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 54/360 × 200 (1)\n• A1: 30 (1)"
      },
      {
        "q": "Ben wants to find out how often people in his town use the bus. He asks 50 people waiting at the bus station. Give two reasons why his sample may be biased.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• People at a bus station are likely to be bus users, so they over-represent regular users (1)\n• Only one place/time is sampled, so it is not random / not representative of the whole town (1)"
      },
      {
        "q": "A factory employs 800 workers. Describe how to select a random sample of 40 of the workers.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Give every worker a number from 1 to 800 (or list all names) (1)\n• Use a random number generator (or draw numbers from a hat) to select 40 different workers, ignoring repeats (1)"
      },
      {
        "q": "The table shows the age (years) and value (£ thousands) of six cars of the same model: (1, 18), (2, 15.5), (3, 14), (4, 11.5), (5, 10), (6, 7.5).\n(a) Describe the correlation shown by the data.\n(b) Plot the points, draw a line of best fit and use it to estimate the value of a car of this model that is 3½ years old.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) Negative correlation (1)\n• (b) Points plotted and a single straight line of best fit drawn following the trend (1)\n• (b) Estimate in range £12 000 to £13 500 (1)"
      },
      {
        "q": "In a primary school, a scatter graph shows strong positive correlation between shoe size and reading ability. Explain why this does not mean that bigger feet cause better reading.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Correlation does not show causation (1)\n• Both are linked to a third factor, age: older children have bigger feet and read better (1)"
      },
      {
        "q": "The number of visitors (thousands) to a museum each quarter is: 2024: Q1 12, Q2 18, Q3 25, Q4 15; 2025: Q1 13, Q2 20, Q3 28, Q4 16. Describe the overall trend and the seasonal pattern.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Trend: visitor numbers are increasing overall (each quarter in 2025 is higher than in 2024) (1)\n• Seasonal pattern: highest in Q3 (summer) and lowest in Q1 each year (1)"
      },
      {
        "q": "In a pie chart, 30 people are represented by a sector of 75°. How many people are represented by the whole pie chart?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 30 ÷ 75 = 0.4 people per degree, or 30/75 × 360 (1)\n• A1: 144 (1)"
      },
      {
        "q": "In a travel survey, 14 people walk, 22 take the bus, 18 go by car and 6 cycle. Work out the angle of each sector for a pie chart.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: total 60, so 360 ÷ 60 = 6° per person (1)\n• A1: at least two angles correct (1)\n• A1: Walk 84°, Bus 132°, Car 108°, Cycle 36° (1)"
      },
      {
        "q": "A farmer has 2400 apple trees. She inspects a random sample of 60 trees and finds that 9 are diseased.\n(a) Estimate the number of diseased trees in the whole orchard.\n(b) State one assumption you have made.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 9/60 (= 0.15) used as the proportion (1)\n• A1: 0.15 × 2400 = 360 (1)\n• B1: the sample is representative of the whole orchard (e.g. trees chosen at random) (1)"
      },
      {
        "q": "Data for daily temperatures from 10 °C to 25 °C give a line of best fit S = 12T − 40, where S is the number of ice creams sold and T is the temperature in °C.\n(a) Estimate the number of ice creams sold when T = 20.\n(b) Mia uses the equation to predict sales when T = 40. Explain why her prediction may be unreliable.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 12 × 20 − 40 (1)\n• A1: 200 (1)\n• B1: 40 °C is outside the data range (10–25 °C), so this is extrapolation and the trend may not continue (1)"
      },
      {
        "q": "A pie chart shows the favourite sport of 120 people. The angles are: football 150°, tennis 90°, swimming 75°, other 45°.\n(a) How many people chose football?\n(b) How many more people chose tennis than \"other\"?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 120 ÷ 360 = 1/3 person per degree, or 150/360 × 120 (1)\n• A1: football = 50 (1)\n• A1: tennis 30 − other 15 = 15 (1)"
      },
      {
        "q": "Two pie charts show the favourite subject of students. School P has 240 students and its maths sector is 90°. School Q has 600 students and its maths sector is 60°. Jo says, \"More students in School P chose maths.\" Is Jo correct? Show your working.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 90/360 × 240 = 60 (1)\n• M1: 60/360 × 600 = 100 (1)\n• A1: Jo is not correct — 100 students in Q chose maths compared with 60 in P (1)"
      },
      {
        "q": "Choose a suitable statistical diagram for each data set and give a reason.\n(a) The favourite crisp flavour of 30 pupils.\n(b) The average monthly temperature in a town over two years.\n(c) The heights and weights of 20 adults.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) Bar chart, pie chart or pictogram — categorical data (1)\n• (b) Time series line graph — shows change and seasonal pattern over time (1)\n• (c) Scatter graph — two variables (bivariate data) to look for correlation (1)"
      },
      {
        "q": "A random sample of 80 households in a town was asked how many cars they own: 0 cars – 12, 1 car – 36, 2 cars – 24, 3 or more cars – 8.\n(a) Work out the pie chart angle for each group.\n(b) The town has 15 000 households. Estimate how many households have 2 or more cars.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 360 ÷ 80 = 4.5° per household (1)\n• A1: 54°, 162°, 108°, 36° (1)\n• M1: (24 + 8)/80 = 32/80 = 0.4 (1)\n• A1: 0.4 × 15 000 = 6000 (1)"
      },
      {
        "q": "The hours of sunshine (x) and number of visitors (y) to a beach were recorded on 8 days: (2, 150), (3, 190), (4, 240), (5, 260), (6, 310), (7, 350), (8, 390), (9, 420).\n(a) Describe the correlation.\n(b) Draw a scatter graph with a line of best fit and use it to estimate the number of visitors on a day with 5½ hours of sunshine.\n(c) Explain whether it would be sensible to use your line to estimate visitors on a day with 14 hours of sunshine.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) Positive correlation (strong) (1)\n• (b) Single straight line of best fit drawn through the trend of the points (1)\n• (b) Estimate in range 270 to 305 visitors (1)\n• (c) Not sensible: 14 hours is outside the data range (extrapolation), so the trend may not continue (1)"
      },
      {
        "q": "A shop's sales (£ thousands) for each school term are: 2023: Term 1 42, Term 2 35, Term 3 58; 2024: Term 1 46, Term 2 38, Term 3 63.\n(a) Which term had the highest sales in each year?\n(b) Work out the percentage increase in total annual sales from 2023 to 2024. Give your answer to 1 decimal place.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) Term 3 in both years (1)\n• M1: totals 135 and 147 (1)\n• M1: (147 − 135)/135 × 100 (1)\n• A1: 8.9% (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.2 */
  "6.2": {
    "name": "Averages, Spread & Grouped Data",
    "questions": [
      {
        "q": "Write down the mode of 5, 3, 8, 5, 2, 5, 3.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• 5 (1)"
      },
      {
        "q": "State whether \"the time taken to run 100 m\" is discrete or continuous data.",
        "marks": 1,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Continuous (1)"
      },
      {
        "q": "Find the median of 14, 9, 21, 6, 17, 11.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: ordered 6, 9, 11, 14, 17, 21 and middle values 11 and 14 identified (1)\n• A1: 12.5 (1)"
      },
      {
        "q": "The mean of 4, 7, x, 10 and 12 is 8. Work out the value of x.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 5 × 8 = 40 and 40 − (4 + 7 + 10 + 12) (1)\n• A1: x = 7 (1)"
      },
      {
        "q": "Explain the difference between primary data and secondary data. Give an example of each.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Primary data is collected by the person using it, e.g. their own questionnaire or experiment (1)\n• Secondary data was collected by someone else, e.g. census figures, internet or newspaper data (1)"
      },
      {
        "q": "The midday temperatures (°C) on five days were −3, 5, 2, −7, 4. Work out the range.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 5 − (−7) (1)\n• A1: 12 °C (1)"
      },
      {
        "q": "The table shows the number of pets owned by 20 pupils: 0 pets – 7 pupils, 1 pet – 9 pupils, 2 pets – 3 pupils, 3 pets – 1 pupil. Work out the mean number of pets.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: Σfx = 0 + 9 + 6 + 3 = 18 (1)\n• A1: 18 ÷ 20 = 0.9 (1)"
      },
      {
        "q": "Work out the interquartile range of 3, 5, 7, 8, 10, 12, 15, 18, 21, 22, 25.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: lower quartile 7 (3rd value) and upper quartile 21 (9th value) (1)\n• A1: IQR = 21 − 7 = 14 (1)"
      },
      {
        "q": "(a) In a histogram, the class 15 < t ≤ 20 has frequency 18. Work out its frequency density.\n(b) The class 20 < t ≤ 40 has frequency density 1.5. Work out its frequency.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) 18 ÷ 5 = 3.6 (1)\n• (b) 1.5 × 20 = 30 (1)"
      },
      {
        "q": "The heights of 35 plants are grouped: 140 ≤ h < 150: 6, 150 ≤ h < 160: 12, 160 ≤ h < 170: 14, 170 ≤ h < 180: 3.\n(a) Write down the modal class.\n(b) Which class contains the median?",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 160 ≤ h < 170 (1)\n• (b) 150 ≤ h < 160 (median is the 18th value; cumulative frequencies 6, 18) (1)"
      },
      {
        "q": "Six runners' times (seconds) are 12.4, 13.1, 12.8, 13.5, 29.0, 12.9.\n(a) Identify the outlier and suggest a reason for it.\n(b) Work out the range of the times, ignoring the outlier.",
        "marks": 2,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 29.0 with a sensible reason, e.g. runner fell or recording error (1)\n• (b) 13.5 − 12.4 = 1.1 seconds (1)"
      },
      {
        "q": "The masses of 30 parcels are grouped: 0 < m ≤ 10: 3, 10 < m ≤ 20: 9, 20 < m ≤ 30: 12, 30 < m ≤ 40: 6 (kg). Work out an estimate for the mean mass.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: midpoints 5, 15, 25, 35 used (1)\n• M1: Σfx = 15 + 135 + 300 + 210 = 660, divided by 30 (1)\n• A1: 22 kg (1)"
      },
      {
        "q": "Shop A's daily sales (£) over 7 days were 410, 420, 380, 450, 430, 400, 440. Shop B's sales over the same days had a median of £385 and a range of £310. Work out the median and range for Shop A and compare the sales of the two shops.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• Median for A = £420 (ordered 380, 400, 410, 420, 430, 440, 450) (1)\n• Range for A = 450 − 380 = £70 (1)\n• A has a higher median, so A's sales were higher on average (1)\n• A has a smaller range, so A's sales were more consistent (1)"
      },
      {
        "q": "The mean score of 15 students in a test is 62. The mean score of another 10 students is 71. Work out the mean score of all 25 students.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: 15 × 62 = 930 and 10 × 71 = 710 (1)\n• M1: (930 + 710) ÷ 25 (1)\n• A1: 65.6 (1)"
      },
      {
        "q": "The times taken by 69 people are grouped: 0 < t ≤ 10: 15, 10 < t ≤ 15: 20, 15 < t ≤ 30: 24, 30 < t ≤ 50: 10. Work out the frequency density for each class, ready to draw a histogram.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: frequency ÷ class width used (1)\n• A1: at least two correct (1)\n• A1: 1.5, 4, 1.6, 0.5 (1)"
      },
      {
        "q": "A box plot shows the minimum 12, lower quartile 20, median 26, upper quartile 35 and maximum 48.\n(a) Work out the interquartile range.\n(b) Work out the range.\n(c) What percentage of the values are greater than 20?",
        "marks": 3,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) 35 − 20 = 15 (1)\n• (b) 48 − 12 = 36 (1)\n• (c) 75% (1)"
      },
      {
        "q": "The salaries in a small firm are £18 000, £19 500, £21 000, £22 000, £23 500 and £95 000.\n(a) Work out the mean salary.\n(b) Work out the median salary.\n(c) Which average better represents a typical salary? Give a reason.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• (a) 199 000 ÷ 6 = £33 166.67 (1)\n• (b) (21 000 + 22 000) ÷ 2 = £21 500 (1)\n• (c) Median — the mean is distorted by the outlier £95 000 (1)"
      },
      {
        "q": "The times (minutes) taken by 80 people to complete a puzzle are: 0 < t ≤ 10: 6, 10 < t ≤ 20: 18, 20 < t ≤ 30: 30, 30 < t ≤ 40: 20, 40 < t ≤ 50: 6.\n(a) Complete a cumulative frequency table.\n(b) Draw a cumulative frequency graph and use it to estimate the median and the interquartile range.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• (a) Cumulative frequencies 6, 24, 54, 74, 80 (1)\n• (b) Points plotted at upper class boundaries (10, 6), (20, 24), (30, 54), (40, 74), (50, 80) and joined with a curve or line from (0, 0) (1)\n• Median read at 40: answer in range 24 to 27 minutes (1)\n• IQR read at 20 and 60: answer in range 13 to 17 minutes (1)"
      },
      {
        "q": "The journey times of 40 pupils are: 0 < t ≤ 10: 8, 10 < t ≤ 20: 14, 20 < t ≤ 30: 12, 30 < t ≤ 40: 6 (minutes).\n(a) Work out an estimate for the mean journey time.\n(b) The head teacher says, \"Most pupils take more than 20 minutes.\" Is she correct? Explain.",
        "marks": 3,
        "requiresDiagram": false,
        "higher": false,
        "markScheme": "• M1: midpoints × frequencies: 40 + 210 + 300 + 210 = 760 (1)\n• A1: 760 ÷ 40 = 19 minutes (1)\n• (b) No — only 12 + 6 = 18 of the 40 pupils take more than 20 minutes, which is less than half (1)"
      },
      {
        "q": "A histogram of heights h (cm) has bars: 0 < h ≤ 20 with frequency density 0.5, 20 < h ≤ 30 with frequency density 2.4, 30 < h ≤ 40 with frequency density 3.2, 40 < h ≤ 70 with frequency density 0.6.\n(a) Work out the total number of items.\n(b) Estimate the number of items with heights between 35 cm and 50 cm.",
        "marks": 4,
        "requiresDiagram": false,
        "higher": true,
        "markScheme": "• M1: frequency = frequency density × class width, e.g. 10, 24, 32, 18 (1)\n• A1: total 84 (1)\n• M1: 5 × 3.2 = 16 and 10 × 0.6 = 6 (1)\n• A1: 22 (1)"
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATHS_AQA_GCSE_PRACTICE };
}
