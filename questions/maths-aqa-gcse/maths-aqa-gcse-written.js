/*
 * AQA GCSE Mathematics (8300) — Written / Short-Answer Question Bank (also the AI-feedback bank)
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (1-3 marks), 'amber' (3-5 marks), 'red' (5-7 marks) — difficulty, NOT exam tier.
 * higher: true = Higher-tier-only content (the exam tier).
 * modelAnswer: worked solution then "• point (n)" mark lines.
 */

const MATHS_AQA_GCSE_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  "1.1": {
    "topic": "Structure & Calculation",
    "green": [
      {
        "q": "Write 126 as a product of its prime factors in index form.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "126 = 2 × 63 = 2 × 3 × 21 = 2 × 3 × 3 × 7\n• Correct method, e.g. factor tree or repeated division by primes (1)\n• 2 × 3² × 7 (1)"
      },
      {
        "q": "Work out 5 + 2 × (9 − 4)² − √16. Show each step.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Brackets: 9 − 4 = 5. Indices/roots: 5² = 25, √16 = 4. Multiply: 2 × 25 = 50. Then 5 + 50 − 4 = 51.\n• Correct order of operations shown, e.g. 2 × 25 = 50 (1)\n• 51 (1)"
      },
      {
        "q": "Write these numbers in order from smallest to largest. Show your working.  3/8,  0.38,  −0.4,  −3/7",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "3/8 = 0.375 and −3/7 = −0.428…\nOrder: −3/7, −0.4, 3/8, 0.38\n• Converts 3/8 to 0.375 (1)\n• Converts −3/7 to −0.43 (or compares −3/7 and −0.4 correctly) (1)\n• Correct order −3/7, −0.4, 3/8, 0.38 (1)"
      },
      {
        "q": "Explain why 51 is not a prime number.",
        "marks": 1,
        "tier": "green",
        "higher": false,
        "modelAnswer": "51 = 3 × 17, so it has factors other than 1 and itself.\n• Shows a factor pair other than 1 × 51, e.g. 3 × 17 (1)"
      }
    ],
    "amber": [
      {
        "q": "Use prime factorisation to find the HCF and the LCM of 60 and 84.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "60 = 2² × 3 × 5 and 84 = 2² × 3 × 7\nHCF = product of shared primes with lowest powers = 2² × 3 = 12\nLCM = all primes with highest powers = 2² × 3 × 5 × 7 = 420\n• 60 = 2² × 3 × 5 (1)\n• 84 = 2² × 3 × 7 (1)\n• HCF = 12 (1)\n• LCM = 420 (1)"
      },
      {
        "q": "You are given that 43 × 27 = 1161. Without a calculator, write down the value of (a) 4.3 × 2.7, (b) 116.1 ÷ 0.27, (c) 0.43 × 270. Explain how you used the fact given.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Both numbers are ÷ 10, so the answer is 1161 ÷ 100 = 11.61.\n(b) 116.1 ÷ 0.27 = 11 610 ÷ 27 = 430 (multiply both by 100; then use 1161 ÷ 27 = 43).\n(c) 0.43 × 270 = 43 × 27 × (1/100) × 10 = 116.1\n• (a) 11.61 (1)\n• (b) 430 (1)\n• (c) 116.1 (1)"
      },
      {
        "q": "A shop buys 50 umbrellas for £6.40 each. It sells 35 of them for £12 each and the rest in a sale for £5 each. Does the shop make a profit or a loss, and how much?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Cost price = 50 × 6.40 = £320\nIncome = 35 × 12 + 15 × 5 = 420 + 75 = £495\n495 − 320 = £175 profit\n• Cost 50 × 6.40 = £320 (1)\n• 35 × 12 = 420 and 15 × 5 = 75 (1)\n• Income £495 (1)\n• Profit of £175 (1)"
      },
      {
        "q": "A school lunch menu has 3 starters, 5 mains and 4 desserts. A pupil may choose: a main only; or a main and a dessert; or a starter, a main and a dessert. How many different lunches are possible?",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Main only: 5\nMain and dessert: 5 × 4 = 20\nStarter, main and dessert: 3 × 5 × 4 = 60\nTotal = 5 + 20 + 60 = 85\n• Main only = 5 (1)\n• 5 × 4 = 20 (1)\n• 3 × 5 × 4 = 60 (1)\n• Total 85 (1)"
      }
    ],
    "red": [
      {
        "q": "Two lighthouses flash together at exactly 21:00:00. One flashes every 18 seconds and the other every 30 seconds. (a) After how many seconds do they next flash together? (b) How many more times do they flash together before 21:10:00? (c) At what time is the last of these?",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "18 = 2 × 3² and 30 = 2 × 3 × 5, so LCM = 2 × 3² × 5 = 90 s\n10 minutes = 600 s; 600 ÷ 90 = 6.67, so 6 more times\nLast one at 6 × 90 = 540 s = 9 min after 21:00:00, i.e. 21:09:00\n• Method for LCM, e.g. prime factors or lists of multiples (1)\n• LCM = 90 seconds (1)\n• Converts 10 minutes to 600 s and divides by 90 (1)\n• 6 times (1)\n• 21:09:00 (1)"
      },
      {
        "q": "A code is made of 3 letters chosen from A, B, C, D, E followed by 2 digits from 0–9. (a) How many codes are possible if repeats are allowed? (b) How many codes are possible if no letter is repeated and the two digits are different? (c) Of the codes in (b), how many start with the letter A?",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) 5 × 5 × 5 × 10 × 10 = 12 500\n(b) 5 × 4 × 3 × 10 × 9 = 5400\n(c) First letter fixed: 1 × 4 × 3 × 10 × 9 = 1080\n• (a) M1: 5³ × 10² (1)\n• (a) A1: 12 500 (1)\n• (b) M1: 5 × 4 × 3 and 10 × 9 (1)\n• (b) A1: 5400 (1)\n• (c) M1: 1 × 4 × 3 × 10 × 9 (or 5400 ÷ 5) (1)\n• (c) A1: 1080 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.2 */
  "1.2": {
    "topic": "Fractions, Decimals & Percentages",
    "green": [
      {
        "q": "Work out 3/4 + 5/6. Give your answer as a mixed number.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "LCM of 4 and 6 is 12: 3/4 = 9/12 and 5/6 = 10/12\n9/12 + 10/12 = 19/12 = 1 7/12\n• Correct common denominator, e.g. 9/12 + 10/12 (1)\n• 1 7/12 (1)"
      },
      {
        "q": "Write 7/20 as (a) a decimal, (b) a percentage.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "7/20 = 35/100\n• (a) 0.35 (1)\n• (b) 35% (1)"
      },
      {
        "q": "Work out 2/5 of £85 and 15% of £85. What is the difference between them?",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "2/5 of 85 = 85 ÷ 5 × 2 = £34\n15% of 85 = 8.50 + 4.25 = £12.75\nDifference = 34 − 12.75 = £21.25\n• £34 (1)\n• £12.75 (1)\n• £21.25 (1)"
      },
      {
        "q": "Write 0.777… (7 recurring) as a fraction. Show your method.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Let x = 0.777…, so 10x = 7.777…\n10x − x = 9x = 7, so x = 7/9\n• 10x = 7.777… and subtracts x (1)\n• 7/9 (1)"
      }
    ],
    "amber": [
      {
        "q": "Work out 2⅔ ÷ 1⅗. Give your answer as a mixed number in its simplest form.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "2⅔ = 8/3 and 1⅗ = 8/5\n8/3 ÷ 8/5 = 8/3 × 5/8 = 40/24 = 5/3 = 1⅔\n• Converts both to improper fractions 8/3 and 8/5 (1)\n• Multiplies by the reciprocal: 8/3 × 5/8 (1)\n• 1⅔ (1)"
      },
      {
        "q": "Increase 240 by 12.5% using a single multiplier. Explain why your multiplier works.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "The new amount is 100% + 12.5% = 112.5% of the original, and 112.5% = 1.125.\n240 × 1.125 = 270\n• Multiplier 1.125 (1)\n• Explanation: 100% + 12.5% = 112.5% = 1.125 (1)\n• 270 (1)"
      },
      {
        "q": "A fruit bowl contains apples, oranges and bananas in the ratio 4 : 3 : 5. (a) What fraction of the fruit are bananas? (b) 1/4 of the apples are green. What fraction of all the fruit are green apples? (c) There are 36 pieces of fruit. How many green apples are there?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Total parts = 4 + 3 + 5 = 12\n(a) Bananas = 5/12\n(b) Apples = 4/12 = 1/3; green apples = 1/4 × 1/3 = 1/12\n(c) 1/12 × 36 = 3\n• (a) 5/12 (1)\n• (b) apples are 4/12 (or 1/3) of the fruit (1)\n• (b) 1/12 (1)\n• (c) 3 (1)"
      },
      {
        "q": "Prove that 0.2777… (7 recurring) = 5/18.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Let x = 0.2777…\n10x = 2.777… and 100x = 27.777…\n100x − 10x = 90x = 25\nx = 25/90 = 5/18\n• Two multiples with the same recurring part, e.g. 10x and 100x (1)\n• Subtracts: 90x = 25 (1)\n• x = 25/90 (1)\n• Simplifies to 5/18 (1)"
      }
    ],
    "red": [
      {
        "q": "A charity raises money in three ways. 3/8 of the total comes from a fun run. 2/5 of the remainder comes from a bake sale. The rest, £1350, comes from donations. (a) How much money was raised in total? (b) What percentage of the total came from the bake sale?",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Remainder after fun run = 1 − 3/8 = 5/8\nBake sale = 2/5 × 5/8 = 1/4 of the total\nDonations = 5/8 − 1/4 = 3/8 of the total\n3/8 of total = £1350, so total = 1350 ÷ 3 × 8 = £3600\nBake sale = 1/4 of 3600 = £900 = 25%\n• Remainder 5/8 (1)\n• Bake sale = 2/5 × 5/8 = 1/4 (1)\n• Donations = 3/8 of the total (1)\n• Total = £3600 (1)\n• Bake sale = £900 (1)\n• 25% (1)"
      },
      {
        "q": "(a) Prove that 0.1363636… (36 recurring) = 3/22. (b) Hence write 0.01363636… as a fraction. (c) Explain, using the prime factors of 22, why 3/22 must be a recurring decimal.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) Let x = 0.13636…; 1000x = 136.3636… and 10x = 1.3636…\n990x = 135, so x = 135/990 = 3/22\n(b) 0.013636… = x ÷ 10 = 3/220\n(c) 22 = 2 × 11. A fraction in its simplest form terminates only if the denominator has no prime factors other than 2 and 5; 11 is a prime factor, so 3/22 recurs.\n• (a) Suitable pair, e.g. 1000x and 10x (or 100x and x then ÷ 10) (1)\n• (a) 990x = 135 (1)\n• (a) 135/990 simplified to 3/22 (1)\n• (b) 3/220 (1)\n• (c) 22 = 2 × 11 (1)\n• (c) the prime factor 11 (not 2 or 5) means it cannot terminate (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.3 */
  "1.3": {
    "topic": "Measures, Accuracy & Bounds",
    "green": [
      {
        "q": "Round (a) 0.0058362 to 2 significant figures (b) 3.14159 to 3 decimal places.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) First significant figure is 5, second is 8, next digit 3 → round down.\n(b) Third decimal digit is 1, next digit 5 → round up.\n• (a) 0.0058 (1)\n• (b) 3.142 (1)"
      },
      {
        "q": "Convert 0.45 km into centimetres.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "0.45 km × 1000 = 450 m, then 450 m × 100 = 45 000 cm\n• Correct method: × 1000 then × 100 (or × 100 000) (1)\n• 45 000 cm (1)"
      },
      {
        "q": "The mass m of a parcel is 2.6 kg, correct to 1 decimal place. Write down the error interval for m.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Half of 0.1 is 0.05, so the limits are 2.6 − 0.05 and 2.6 + 0.05.\n• Lower limit 2.55 with ≤ (1)\n• Upper limit 2.65 with < : 2.55 ≤ m < 2.65 (1)"
      },
      {
        "q": "By rounding each number to 1 significant figure, work out an estimate for (8.93 × 41.2) ÷ 0.193",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "8.93 ≈ 9, 41.2 ≈ 40, 0.193 ≈ 0.2\n• Each number rounded correctly to 1 s.f. (1)\n• 9 × 40 = 360 (1)\n• 360 ÷ 0.2 = 1800 (1)"
      }
    ],
    "amber": [
      {
        "q": "Jo truncates 6.87 to 1 decimal place. Sam rounds 6.87 to 1 decimal place. Write down both answers and explain why they are different.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Truncating cuts off the digits after the first decimal place; rounding looks at the next digit (7), which is 5 or more, so rounds up.\n• Jo (truncation): 6.8 (1)\n• Sam (rounding): 6.9 (1)\n• Explanation: truncation just chops off the extra digits, rounding goes up because the next digit 7 ≥ 5 (1)"
      },
      {
        "q": "A water tank is a cuboid measuring 80 cm by 50 cm by 40 cm. It is full of water. The tank is emptied at a rate of 2.5 litres per minute. How long does it take to empty the tank?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Volume = 80 × 50 × 40 = 160 000 cm³\n1 litre = 1000 cm³, so 160 000 cm³ = 160 litres\nTime = 160 ÷ 2.5 = 64 minutes\n• Volume 160 000 cm³ (1)\n• Converts to 160 litres (1)\n• 160 ÷ 2.5 (1)\n• 64 minutes (1)"
      },
      {
        "q": "x = 5.3 and y = 2.8, both correct to 1 decimal place. Work out (a) the upper bound of x − y (b) the lower bound of x − y.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Bounds: 5.25 ≤ x < 5.35 and 2.75 ≤ y < 2.85\nUpper bound of x − y = UB(x) − LB(y) = 5.35 − 2.75 = 2.6\nLower bound of x − y = LB(x) − UB(y) = 5.25 − 2.85 = 2.4\n• Bounds of x and y all correct (1)\n• Uses UB(x) − LB(y) (1)\n• (a) 2.6 (1)\n• (b) 2.4 (1)"
      },
      {
        "q": "The area of a square is 64 cm², correct to the nearest cm². Work out the upper and lower bounds of the side length of the square. Give your answers to 3 significant figures.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Area bounds: 63.5 ≤ A < 64.5\nSide = √A\nLower bound = √63.5 = 7.968… ≈ 7.97 cm\nUpper bound = √64.5 = 8.031… ≈ 8.03 cm\n• Lower bound of area 63.5 (1)\n• Upper bound of area 64.5 (1)\n• Lower bound of side 7.97 cm (1)\n• Upper bound of side 8.03 cm (1)"
      }
    ],
    "red": [
      {
        "q": "Ravi runs 400 m, measured to the nearest 10 m, in 52.3 seconds, measured to 1 decimal place. Work out the upper and lower bounds of his average speed, and use them to give his speed to an appropriate degree of accuracy. Explain your answer.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Distance: 395 ≤ d < 405. Time: 52.25 ≤ t < 52.35\nUpper bound of speed = 405 ÷ 52.25 = 7.751… m/s\nLower bound of speed = 395 ÷ 52.35 = 7.545… m/s\nTo 2 s.f. these are 7.8 and 7.5 (different); to 1 s.f. both are 8.\n• Distance bounds 395 and 405 (1)\n• Time bounds 52.25 and 52.35 (1)\n• Upper bound = 405 ÷ 52.25 = 7.75… (1)\n• Lower bound = 395 ÷ 52.35 = 7.54… (1)\n• Speed = 8 m/s (1)\n• Reason: both bounds round to 8 to 1 s.f. but not to the same value to 2 s.f. (1)"
      },
      {
        "q": "A rectangular floor measures 4.2 m by 3.5 m. It is to be covered with square tiles of side 30 cm. Assume cut pieces can be used, so the number of tiles needed is the floor area divided by the area of one tile, rounded up. Tiles are sold in boxes of 12 for £18.99 per box. Work out the cost of the tiles.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Floor area = 4.2 × 3.5 = 14.7 m² = 147 000 cm²\nTile area = 30 × 30 = 900 cm²\nTiles = 147 000 ÷ 900 = 163.3… → 164 tiles\nBoxes = 164 ÷ 12 = 13.6… → 14 boxes\nCost = 14 × £18.99 = £265.86\n• Floor area 14.7 m² (1)\n• Converts units consistently, e.g. 147 000 cm² or tile 0.09 m² (1)\n• 163.3… tiles (1)\n• Rounds up to 164 tiles (1)\n• 14 boxes (1)\n• £265.86 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.4 */
  "1.4": {
    "topic": "Powers, Roots, Surds & Standard Form",
    "green": [
      {
        "q": "Write 0.0000815 in standard form and write 6.02 × 10⁵ as an ordinary number.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Move the decimal point 5 places right to get 8.15, so the power is −5.\n6.02 × 100 000 = 602 000\n• 8.15 × 10⁻⁵ (1)\n• 602 000 (1)"
      },
      {
        "q": "Simplify 3⁸ × 3⁻⁵, then work out its value.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Add the indices: 8 + (−5) = 3\n• 3³ (1)\n• 27 (1)"
      },
      {
        "q": "Work out the value of 125^(−1/3).",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "The negative means reciprocal, the 1/3 means cube root.\n125^(−1/3) = 1 ÷ ∛125 = 1/5\n• ∛125 = 5 or reciprocal 1/125^(1/3) seen (1)\n• 1/5 (1)"
      },
      {
        "q": "A circle has diameter 10 cm. Work out (a) its area (b) its circumference. Give both answers in terms of π.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Radius = 10 ÷ 2 = 5 cm\nArea = π × 5² = 25π cm²\nCircumference = π × 10 = 10π cm\n• Radius 5 used in area (1)\n• (a) 25π cm² (1)\n• (b) 10π cm (1)"
      }
    ],
    "amber": [
      {
        "q": "(a) Simplify √48 + √27. (b) Rationalise the denominator of 12/√3 and simplify.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) √48 = √16 × √3 = 4√3; √27 = √9 × √3 = 3√3; sum = 7√3\n(b) 12/√3 × √3/√3 = 12√3/3 = 4√3\n• √48 = 4√3 and √27 = 3√3 (1)\n• (a) 7√3 (1)\n• Multiplies by √3/√3 (1)\n• (b) 4√3 (1)"
      },
      {
        "q": "A virus has a diameter of 1.2 × 10⁻⁷ m. How many of these viruses would fit side by side across a length of 3 cm? Give your answer in standard form.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "3 cm = 0.03 m = 3 × 10⁻² m\nNumber = (3 × 10⁻²) ÷ (1.2 × 10⁻⁷) = 2.5 × 10⁵\n• Converts 3 cm to 3 × 10⁻² m (1)\n• Divides length by diameter (1)\n• 3 ÷ 1.2 = 2.5 and 10⁻² ÷ 10⁻⁷ = 10⁵ (1)\n• 2.5 × 10⁵ (1)"
      },
      {
        "q": "Use the laws of indices to explain why 5⁰ = 1. Then write down the value of 5⁻².",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "5³ ÷ 5³ = 5³⁻³ = 5⁰ using the division law, but any non-zero number divided by itself is 1, so 5⁰ = 1.\n5⁻² = 1/5² = 1/25\n• Uses the division law, e.g. 5³ ÷ 5³ = 5⁰ (1)\n• States the same division equals 1, so 5⁰ = 1 (1)\n• 5⁻² = 1/25 (1)"
      },
      {
        "q": "Without using a calculator, estimate √70 to 1 decimal place. Show how you decide.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "8² = 64 and 9² = 81, so √70 is between 8 and 9 (nearer 8).\n8.3² = 68.89 and 8.4² = 70.56\n70 is closer to 70.56 than to 68.89, so √70 ≈ 8.4\n• States √70 is between 8 and 9 (1)\n• 8.3² = 68.89 (1)\n• 8.4² = 70.56 (1)\n• √70 ≈ 8.4 (1)"
      }
    ],
    "red": [
      {
        "q": "A rectangle has length (5 + √3) cm and width (5 − √3) cm. (a) Show that the area of the rectangle is an integer. (b) Work out the exact perimeter. (c) Work out the exact length of a diagonal, giving your answer as a simplified surd.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) Area = (5 + √3)(5 − √3) = 25 − 5√3 + 5√3 − 3 = 22 cm², an integer\n(b) Perimeter = 2(5 + √3) + 2(5 − √3) = 20 cm\n(c) Diagonal² = (5 + √3)² + (5 − √3)² = (28 + 10√3) + (28 − 10√3) = 56\nDiagonal = √56 = √4 × √14 = 2√14 cm\n• Expands (5 + √3)(5 − √3) with the √3 terms cancelling (1)\n• Area = 22 (1)\n• Perimeter = 20 cm (1)\n• Uses Pythagoras: (5 + √3)² + (5 − √3)² (1)\n• Diagonal² = 56 (1)\n• Diagonal = 2√14 cm (1)"
      },
      {
        "q": "The mass of one carbon atom is 1.99 × 10⁻²³ g. (a) Work out the mass of 6 × 10²³ carbon atoms. (b) How many carbon atoms are there in 1 kg of carbon? Give your answer in standard form to 3 significant figures.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) (1.99 × 10⁻²³) × (6 × 10²³) = 11.94 × 10⁰ = 11.94 g\n(b) 1 kg = 1000 g = 1 × 10³ g\n(1 × 10³) ÷ (1.99 × 10⁻²³) = 5.0251… × 10²⁵ ≈ 5.03 × 10²⁵\n• 1.99 × 6 = 11.94 (1)\n• 10⁻²³ × 10²³ = 10⁰ = 1 (1)\n• (a) 11.94 g (1)\n• Converts 1 kg to 1000 g (1)\n• Divides 1000 by 1.99 × 10⁻²³ (1)\n• (b) 5.03 × 10²⁵ (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.1 */
  "2.1": {
    "topic": "Algebraic Notation & Manipulation",
    "green": [
      {
        "q": "Simplify 7a + 4b − 3a + 2b − b.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "7a − 3a = 4a; 4b + 2b − b = 5b\n• Collects either the a terms or the b terms correctly (1)\n• 4a + 5b (1)"
      },
      {
        "q": "Expand and simplify 4(3x − 2) − 5(x − 3).",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "4(3x − 2) = 12x − 8 and −5(x − 3) = −5x + 15\n12x − 8 − 5x + 15 = 7x + 7\n• Both brackets expanded correctly, including −5 × −3 = +15 (1)\n• 7x + 7 (1)"
      },
      {
        "q": "Factorise x² − 3x − 28.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Need two numbers with product −28 and sum −3: −7 and +4\n• (x ± 7)(x ± 4) (1)\n• (x − 7)(x + 4) (1)"
      },
      {
        "q": "Factorise 2x² + 11x + 12.",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "ac = 2 × 12 = 24; two numbers with product 24 and sum 11: 3 and 8\n2x² + 3x + 8x + 12 = x(2x + 3) + 4(2x + 3)\n• Finds 3 and 8 (or a correct split of the middle term) (1)\n• Correct grouping, e.g. x(2x + 3) + 4(2x + 3) (1)\n• (2x + 3)(x + 4) (1)"
      }
    ],
    "amber": [
      {
        "q": "Expand and simplify (3x + 2)² − (x + 4)(x − 4).",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(3x + 2)² = 9x² + 12x + 4\n(x + 4)(x − 4) = x² − 16\n9x² + 12x + 4 − x² + 16 = 8x² + 12x + 20\n• (3x + 2)² = 9x² + 12x + 4 (1)\n• (x + 4)(x − 4) = x² − 16 (1)\n• Subtracts correctly, so −(−16) = +16 (1)\n• 8x² + 12x + 20 (1)"
      },
      {
        "q": "Simplify fully (2x³y²)⁴ ÷ 4x⁵y³.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(2x³y²)⁴ = 16x¹²y⁸\n16x¹²y⁸ ÷ 4x⁵y³ = 4x⁷y⁵\n• 16x¹²y⁸ (1)\n• Divides coefficients and subtracts indices (1)\n• 4x⁷y⁵ (1)"
      },
      {
        "q": "Expand and simplify (2x − 1)(x + 3)(x − 2).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(x + 3)(x − 2) = x² + x − 6\n(2x − 1)(x² + x − 6) = 2x³ + 2x² − 12x − x² − x + 6\n= 2x³ + x² − 13x + 6\n• Correct expansion of any two brackets (1)\n• Multiplies by the third bracket with at least 4 of 6 terms correct (1)\n• All 6 terms correct (1)\n• 2x³ + x² − 13x + 6 (1)"
      },
      {
        "q": "Kim says that (x + 5)² = x² + 25. Show that Kim is wrong and write the correct expansion.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(x + 5)² = (x + 5)(x + 5) = x² + 5x + 5x + 25 = x² + 10x + 25\nCheck with a value: x = 1 gives 6² = 36 but 1 + 25 = 26, so they are not equal.\n• Writes (x + 5)(x + 5) or uses a counter-example (1)\n• Explains Kim has missed the middle terms 5x + 5x (1)\n• x² + 10x + 25 (1)"
      }
    ],
    "red": [
      {
        "q": "Simplify fully (x² + 2x − 15)/(x² − 9) ÷ (x + 5)/(2x + 6).",
        "marks": 5,
        "tier": "red",
        "higher": true,
        "modelAnswer": "x² + 2x − 15 = (x + 5)(x − 3)\nx² − 9 = (x + 3)(x − 3)\n2x + 6 = 2(x + 3)\nDivide by flipping the second fraction:\n(x + 5)(x − 3)/((x + 3)(x − 3)) × 2(x + 3)/(x + 5) = 2\n• Factorises x² + 2x − 15 = (x + 5)(x − 3) (1)\n• Factorises x² − 9 = (x + 3)(x − 3) (1)\n• Factorises 2x + 6 = 2(x + 3) (1)\n• Inverts the second fraction and multiplies (1)\n• Cancels to 2 (1)"
      },
      {
        "q": "A rectangle has length (2x + 5) cm and width (x + 3) cm. A square of side (x + 2) cm is cut out of the rectangle.\n(a) Show that the remaining area is (x² + 7x + 11) cm².\n(b) Work out the remaining area when x = 4.",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Rectangle: (2x + 5)(x + 3) = 2x² + 6x + 5x + 15 = 2x² + 11x + 15\nSquare: (x + 2)² = x² + 4x + 4\nRemaining: 2x² + 11x + 15 − (x² + 4x + 4) = x² + 7x + 11\n(b) 4² + 7 × 4 + 11 = 16 + 28 + 11 = 55 cm² (check: 13 × 7 − 6² = 91 − 36 = 55)\n• Four terms of the rectangle expansion (1)\n• 2x² + 11x + 15 (1)\n• Square area x² + 4x + 4 (1)\n• Subtracts to show x² + 7x + 11 (1)\n• 55 cm² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.2 */
  "2.2": {
    "topic": "Formulae, Identities, Proof & Functions",
    "green": [
      {
        "q": "Make x the subject of 3x + 2y = 12.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "3x = 12 − 2y\nx = (12 − 2y)/3\n• Subtracts 2y from both sides: 3x = 12 − 2y (1)\n• x = (12 − 2y)/3 (1)"
      },
      {
        "q": "Use the formula C = 5(F − 32)/9 to convert 77 °F to degrees Celsius.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "C = 5(77 − 32)/9 = 5 × 45/9 = 225/9 = 25\n• Correct substitution 5(77 − 32)/9 (1)\n• 25 °C (1)"
      },
      {
        "q": "Explain the difference between an equation and an identity. Give an example of each.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "An equation is only true for particular values of the letter, e.g. 2x + 1 = 9 is only true when x = 4.\nAn identity is true for every value of the letter, e.g. 3(x + 2) ≡ 3x + 6.\n• Equation: true for specific value(s) only, with a valid example (1)\n• Identity: true for all values, with a valid example (1)\n• Uses or mentions the ≡ symbol for an identity (1)"
      },
      {
        "q": "f(x) = x² − 3x. Work out f(−2).",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "f(−2) = (−2)² − 3 × (−2) = 4 + 6 = 10\n• Correct substitution with (−2)² = 4 (1)\n• 10 (1)"
      }
    ],
    "amber": [
      {
        "q": "f(x) = 4x − 1 and g(x) = (x + 3)/2.\n(a) Work out fg(5).\n(b) Find g⁻¹(x).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) g(5) = (5 + 3)/2 = 4, then f(4) = 4 × 4 − 1 = 15\n(b) y = (x + 3)/2 → 2y = x + 3 → x = 2y − 3, so g⁻¹(x) = 2x − 3\n• g(5) = 4 (1)\n• fg(5) = 15 (1)\n• Correct first step of rearranging, e.g. 2y = x + 3 (1)\n• g⁻¹(x) = 2x − 3 (1)"
      },
      {
        "q": "The volume of a sphere is V = (4/3)πr³. Make r the subject of the formula.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "3V = 4πr³\nr³ = 3V/(4π)\nr = ∛(3V/(4π))\n• Multiplies by 3: 3V = 4πr³ (1)\n• r³ = 3V/(4π) (1)\n• r = ∛(3V/(4π)) (1)"
      },
      {
        "q": "Prove that the product of any two odd numbers is always odd.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Let the odd numbers be 2m + 1 and 2n + 1, where m and n are integers.\n(2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1\n2(2mn + m + n) is even, so adding 1 gives an odd number.\n• Uses 2m + 1 and 2n + 1 with different letters (1)\n• Expands correctly to 4mn + 2m + 2n + 1 (1)\n• Writes as 2(2mn + m + n) + 1 (1)\n• Concluding statement: even + 1 is odd, so the product is always odd (1)"
      },
      {
        "q": "(a) Show that (x + 4)² − (x − 4)² ≡ 16x.\n(b) Hence work out 104² − 96² without a calculator.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) (x + 4)² = x² + 8x + 16 and (x − 4)² = x² − 8x + 16\nx² + 8x + 16 − x² + 8x − 16 = 16x\n(b) Use x = 100: 104² − 96² = 16 × 100 = 1600\n• Both expansions correct (1)\n• Subtracts correctly to reach 16x (1)\n• Identifies x = 100 (1)\n• 1600 (1)"
      }
    ],
    "red": [
      {
        "q": "A taxi company uses the formula C = 2.5 + 1.8m to work out the cost, £C, of a journey of m miles.\n(a) Work out the cost of a 12-mile journey.\n(b) Make m the subject of the formula.\n(c) Sam has £30. What is the greatest whole number of miles he can travel?",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) C = 2.5 + 1.8 × 12 = 2.5 + 21.6 = £24.10\n(b) C − 2.5 = 1.8m → m = (C − 2.5)/1.8\n(c) m = (30 − 2.5)/1.8 = 27.5/1.8 = 15.27…, so 15 miles\n• (a) £24.10 (1)\n• (b) C − 2.5 = 1.8m (1)\n• (b) m = (C − 2.5)/1.8 (1)\n• (c) Substitutes 30 to get 15.27… (1)\n• (c) 15 miles (rounds down, as 16 miles would cost £31.30) (1)"
      },
      {
        "q": "f(x) = 3x − 2 and g(x) = x + 4.\n(a) Show that fg(x) − gf(x) is a constant and state its value.\n(b) Solve f⁻¹(x) = g(x).",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) fg(x) = 3(x + 4) − 2 = 3x + 10\ngf(x) = (3x − 2) + 4 = 3x + 2\nfg(x) − gf(x) = 8, a constant\n(b) f⁻¹(x) = (x + 2)/3\n(x + 2)/3 = x + 4 → x + 2 = 3x + 12 → −2x = 10 → x = −5\nCheck: f⁻¹(−5) = −1 and g(−5) = −1 ✓\n• fg(x) = 3x + 10 (1)\n• gf(x) = 3x + 2 (1)\n• Difference = 8 (1)\n• f⁻¹(x) = (x + 2)/3 (1)\n• Forms and rearranges (x + 2)/3 = x + 4 (1)\n• x = −5 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.3 */
  "2.3": {
    "topic": "Linear Graphs & Coordinates",
    "green": [
      {
        "q": "Find the midpoint of the line segment joining (−4, 7) and (10, −1).",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "x: (−4 + 10) ÷ 2 = 3, y: (7 + (−1)) ÷ 2 = 3\n• Adds and halves the coordinates (1)\n• Midpoint (3, 3) (1)"
      },
      {
        "q": "Find the gradient and the y-intercept of the line 3y = 6x − 9.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Divide by 3: y = 2x − 3\n• Gradient 2 (1)\n• y-intercept (0, −3) (1)"
      },
      {
        "q": "Write down the gradient of a line perpendicular to y = −4x + 1. Explain how you found it.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Perpendicular gradients multiply to −1, so the new gradient is −1 ÷ (−4) = ¼.\n• Gradient ¼ (1)\n• Explanation: negative reciprocal / m₁ × m₂ = −1 (1)"
      },
      {
        "q": "Find the equation of the straight line through (0, −2) and (4, 10).",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Gradient = (10 − (−2)) ÷ (4 − 0) = 12/4 = 3; y-intercept is −2.\n• Correct method for gradient (1)\n• Gradient = 3 (1)\n• y = 3x − 2 (1)"
      }
    ],
    "amber": [
      {
        "q": "Find the equation of the line through (−3, 8) and (5, −4). Give your answer in the form ax + by = c, where a, b and c are integers.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Gradient = (−4 − 8) ÷ (5 − (−3)) = −12/8 = −3/2\n8 = −3/2 × (−3) + c, so 8 = 4.5 + c and c = 3.5\ny = −1.5x + 3.5 → 2y = −3x + 7 → 3x + 2y = 7\n• Gradient method (1)\n• Gradient −3/2 (1)\n• y = −1.5x + 3.5 (1)\n• 3x + 2y = 7 (1)"
      },
      {
        "q": "An electrician charges a fixed call-out fee plus an hourly rate. A 3-hour job costs £150 and a 7-hour job costs £290. Find a formula for the cost C (£) of an h-hour job, and interpret the gradient and intercept.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Gradient = (290 − 150) ÷ (7 − 3) = 140/4 = 35\n150 = 35 × 3 + c, so c = 45\n• Hourly rate 35 found (1)\n• C = 35h + 45 (1)\n• Gradient: £35 charged per hour (1)\n• Intercept: £45 fixed call-out fee (1)"
      },
      {
        "q": "Find the equation of the line perpendicular to 2x − 5y = 10 that passes through (2, −1).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "5y = 2x − 10 → y = 2/5 x − 2, gradient 2/5\nPerpendicular gradient = −5/2\n−1 = −5/2 × 2 + c → −1 = −5 + c → c = 4\n• Gradient of given line 2/5 (1)\n• Perpendicular gradient −5/2 (1)\n• Substitutes (2, −1) to find c (1)\n• y = −5/2 x + 4 (or 5x + 2y = 8) (1)"
      },
      {
        "q": "Explain why the lines y = 2x + 3 and 4x − 2y = 1 never meet.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "4x − 2y = 1 → 2y = 4x − 1 → y = 2x − 0.5\n• Rearranges the second line to y = 2x − 0.5 (1)\n• Both lines have gradient 2, so they are parallel (1)\n• Different y-intercepts (3 and −0.5), so they are not the same line and never meet (1)"
      }
    ],
    "red": [
      {
        "q": "A is (−1, 4), B is (3, 6) and C is (5, 2). (a) Show that angle ABC is a right angle. (b) Find the equation of the line through C parallel to AB. (c) Find the area of triangle ABC.",
        "marks": 7,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) Gradient AB = (6 − 4) ÷ (3 − (−1)) = 2/4 = ½; gradient BC = (2 − 6) ÷ (5 − 3) = −2. ½ × (−2) = −1, so AB ⟂ BC.\n(b) y = ½x + c through (5, 2): 2 = 2.5 + c, c = −0.5, so y = ½x − ½\n(c) AB = √(4² + 2²) = √20, BC = √(2² + 4²) = √20; area = ½ × √20 × √20 = 10\n• Gradient AB = ½ (1)\n• Gradient BC = −2 (1)\n• Product −1 so right angle at B (1)\n• Uses gradient ½ with point C (1)\n• y = ½x − ½ (1)\n• AB = BC = √20 (1)\n• Area = 10 square units (1)"
      },
      {
        "q": "The points A(1, 2), B(5, 4) and C(k, 8) lie on the same straight line. (a) Find the gradient of AB. (b) Find the equation of the line. (c) Find k. (d) Find the midpoint of AC.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Gradient = (4 − 2) ÷ (5 − 1) = 2/4 = ½\n(b) 2 = ½ × 1 + c → c = 1.5, so y = ½x + 1.5\n(c) 8 = ½k + 1.5 → ½k = 6.5 → k = 13\n(d) Midpoint of (1, 2) and (13, 8) = (7, 5)\n• Gradient ½ (1)\n• c = 1.5 (1)\n• y = ½x + 1.5 (1)\n• Substitutes y = 8 (1)\n• k = 13 (1)\n• Midpoint (7, 5) (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.4 */
  "2.4": {
    "topic": "Non-linear Graphs",
    "green": [
      {
        "q": "Find the roots of y = x² − 7x + 10 and state where the graph crosses the y-axis.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "x² − 7x + 10 = (x − 2)(x − 5) = 0\n• Correct factorisation (1)\n• Roots x = 2 and x = 5 (1)\n• y-intercept (0, 10) (1)"
      },
      {
        "q": "Describe the shapes of the graphs y = x³ and y = 1/x.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "y = x³ is an S-shaped curve through the origin, rising from bottom-left to top-right.\ny = 1/x has two separate branches (first and third quadrants) and never touches either axis.\n• y = x³ correctly described (1)\n• y = 1/x correctly described, including asymptotes (1)"
      },
      {
        "q": "A runner's distance–time graph is a straight line from (0 s, 0 m) to (50 s, 400 m). Work out the runner's speed and say what the gradient represents.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Gradient = 400 ÷ 50 = 8\n• Speed = 8 m/s (1)\n• The gradient of a distance–time graph represents speed (1)"
      },
      {
        "q": "State the centre and radius of the circle x² + y² = 49.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "x² + y² = r² has centre (0, 0) and radius r; r² = 49.\n• Centre (0, 0) (1)\n• Radius 7 (1)"
      }
    ],
    "amber": [
      {
        "q": "For y = x² + 2x − 8, find (a) the roots, (b) the y-intercept, (c) the turning point, using symmetry.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) (x + 4)(x − 2) = 0, so x = −4 and x = 2\n(b) x = 0 gives y = −8\n(c) Line of symmetry x = (−4 + 2) ÷ 2 = −1; y = 1 − 2 − 8 = −9\n• Correct factorisation (1)\n• Roots −4 and 2 (1)\n• y-intercept (0, −8) (1)\n• Turning point (−1, −9) (1)"
      },
      {
        "q": "Complete the square for y = x² − 6x + 11. Hence explain why the graph never crosses the x-axis.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2\n• (x − 3)² seen (1)\n• (x − 3)² + 2 (1)\n• Minimum point (3, 2) (1)\n• The minimum y-value is 2 > 0, so the graph is always above the x-axis (1)"
      },
      {
        "q": "The graph of y = f(x) has a maximum point at (1, 6) and crosses the x-axis at (−2, 0) and (4, 0). Give the maximum or minimum point and the x-axis crossings of (a) y = f(x + 2), (b) y = −f(x).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) f(x + 2) is a translation 2 units left: maximum (−1, 6), crosses at (−4, 0) and (2, 0)\n(b) −f(x) is a reflection in the x-axis: minimum (1, −6), crosses at (−2, 0) and (4, 0)\n• Maximum (−1, 6) (1)\n• Crossings (−4, 0) and (2, 0) (1)\n• Minimum (1, −6) (1)\n• Crossings unchanged at (−2, 0) and (4, 0) (1)"
      },
      {
        "q": "Water is poured at a constant rate into a container made of a wide cylinder with a narrower cylinder on top. Describe the graph of depth of water against time.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "• Two straight-line sections, because each part has constant cross-section (1)\n• The first section is less steep, as the wide cylinder fills slowly (1)\n• The second section is steeper, starting at the depth where the cylinders join (1)"
      }
    ],
    "red": [
      {
        "q": "The circle C has equation x² + y² = 25. (a) Show that (−3, 4) lies on C. (b) Find the equation of the tangent to C at (−3, 4). (c) Find where the tangent crosses the x-axis.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) (−3)² + 4² = 9 + 16 = 25 ✓\n(b) Gradient of radius = 4 ÷ (−3) = −4/3, so tangent gradient = 3/4. 4 = ¾ × (−3) + c gives c = 25/4, so y = ¾x + 25/4 (or 4y = 3x + 25)\n(c) y = 0: 3x + 25 = 0, x = −25/3\n• Shows 9 + 16 = 25 (1)\n• Radius gradient −4/3 (1)\n• Tangent gradient 3/4 (1)\n• Substitutes (−3, 4) to find c (1)\n• y = ¾x + 25/4 (1)\n• Crosses x-axis at (−25/3, 0) (1)"
      },
      {
        "q": "A ball is thrown from a cliff. Its height above the sea after t seconds is h = 30 + 25t − 5t² metres. (a) Write down the height of the cliff. (b) Find when the ball is again at 30 m. (c) Find when it hits the sea. (d) Use symmetry to find the maximum height.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) t = 0: h = 30 m\n(b) 30 + 25t − 5t² = 30 → 5t(5 − t) = 0 → t = 5 s\n(c) 5t² − 25t − 30 = 0 → t² − 5t − 6 = 0 → (t − 6)(t + 1) = 0 → t = 6 s (t = −1 rejected)\n(d) Symmetry: t = (0 + 5) ÷ 2 = 2.5; h = 30 + 62.5 − 31.25 = 61.25 m\n• 30 m (1)\n• 5t(5 − t) = 0 or equivalent (1)\n• t = 5 s (1)\n• (t − 6)(t + 1) = 0 (1)\n• t = 6 s with t = −1 rejected (1)\n• Maximum 61.25 m at t = 2.5 s (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.5 */
  "2.5": {
    "topic": "Equations & Inequalities",
    "green": [
      {
        "q": "Solve 8x − 5 = 3x + 20.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "8x − 3x = 20 + 5, so 5x = 25 and x = 5.\n• Collects x terms and numbers correctly: 5x = 25 (1)\n• x = 5 (1)"
      },
      {
        "q": "Solve 4 − x ≥ 2x − 11 and describe how you would show the solution on a number line.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "4 + 11 ≥ 2x + x gives 15 ≥ 3x, so x ≤ 5. On a number line: a closed (filled) circle at 5 with an arrow pointing left.\n• 15 ≥ 3x or equivalent (1)\n• x ≤ 5 with closed circle at 5 and arrow to the left (1)"
      },
      {
        "q": "Solve x² + 7x + 12 = 0.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Find two numbers with product 12 and sum 7: 3 and 4. So (x + 3)(x + 4) = 0, giving x = −3 or x = −4.\n• (x + 3)(x + 4) = 0 (1)\n• x = −3 (1)\n• x = −4 (1)"
      },
      {
        "q": "Solve x² − 6x + 4 = 0 by completing the square. Give your answers in surd form.",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "x² − 6x + 4 = (x − 3)² − 9 + 4 = (x − 3)² − 5. So (x − 3)² = 5, x − 3 = ±√5, x = 3 ± √5.\n• (x − 3)² − 5 = 0 (1)\n• x − 3 = ±√5 (1)\n• x = 3 + √5 and x = 3 − √5 (1)"
      }
    ],
    "amber": [
      {
        "q": "Solve the simultaneous equations 5x + 2y = 20 and 3x − 4y = 25. Show all your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Multiply the first equation by 2: 10x + 4y = 40. Add to 3x − 4y = 25: 13x = 65, so x = 5. Substitute: 25 + 2y = 20, 2y = −5, y = −2.5. Check: 3(5) − 4(−2.5) = 15 + 10 = 25 ✓\n• Correct scaling to match coefficients of y (1)\n• Eliminates to get 13x = 65 (1)\n• x = 5 (1)\n• y = −2.5 (1)"
      },
      {
        "q": "Pens cost x pence each and pencils cost y pence each. 4 pens and 3 pencils cost £2.70. 2 pens and 5 pencils cost £2.40. Work out the cost of one pen and the cost of one pencil.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "4x + 3y = 270 and 2x + 5y = 240. Double the second: 4x + 10y = 480. Subtract the first: 7y = 210, y = 30. Then 4x + 90 = 270, 4x = 180, x = 45. A pen costs 45p and a pencil costs 30p.\n• Forms both equations 4x + 3y = 270 and 2x + 5y = 240 (1)\n• Correct method to eliminate one variable (1)\n• Pencil = 30p (1)\n• Pen = 45p (1)"
      },
      {
        "q": "Use the quadratic formula to solve 3x² + 2x − 7 = 0. Give your answers correct to 2 decimal places.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "a = 3, b = 2, c = −7. x = (−2 ± √(2² − 4 × 3 × (−7))) / (2 × 3) = (−2 ± √88) / 6. √88 = 9.3808…, so x = 7.3808…/6 = 1.23 or x = −11.3808…/6 = −1.90.\n• Correct substitution into the formula (1)\n• Discriminant = 88 (1)\n• x = 1.23 (1)\n• x = −1.90 (1)"
      },
      {
        "q": "Solve the inequality 2x² − 7x − 15 > 0. Give your answer using set notation.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Factorise: (2x + 3)(x − 5) > 0. Critical values x = −3/2 and x = 5. The graph y = (2x + 3)(x − 5) is a ∪-shaped parabola, which is above the x-axis outside the roots, so x < −3/2 or x > 5. In set notation: {x : x < −3/2} ∪ {x : x > 5}.\n• Factorises to (2x + 3)(x − 5) (1)\n• Critical values −3/2 and 5 (1)\n• x < −3/2 or x > 5 (1)\n• Correct set notation {x : x < −3/2} ∪ {x : x > 5} (1)"
      }
    ],
    "red": [
      {
        "q": "Solve the simultaneous equations x² + y² = 25 and y = 2x − 5. Show all your working.",
        "marks": 5,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Substitute y = 2x − 5: x² + (2x − 5)² = 25, so x² + 4x² − 20x + 25 = 25, giving 5x² − 20x = 0, i.e. 5x(x − 4) = 0. So x = 0 or x = 4. When x = 0, y = −5; when x = 4, y = 3. Solutions: (0, −5) and (4, 3).\n• Substitutes the linear equation into the circle equation (1)\n• Expands correctly: 5x² − 20x = 0 (1)\n• x = 0 and x = 4 (1)\n• y = −5 when x = 0 (1)\n• y = 3 when x = 4 (1)"
      },
      {
        "q": "A triangle has sides of length (x + 5) cm, (2x + 1) cm and (3x − 2) cm. A rectangle measures (x + 6) cm by (x + 2) cm. The triangle and the rectangle have the same perimeter. Find the length of the longest side of the triangle and the area of the rectangle.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Triangle perimeter = x + 5 + 2x + 1 + 3x − 2 = 6x + 4. Rectangle perimeter = 2(x + 6) + 2(x + 2) = 4x + 16. So 6x + 4 = 4x + 16, 2x = 12, x = 6. Triangle sides: 11 cm, 13 cm, 16 cm, so the longest side is 16 cm. Rectangle: 12 cm by 8 cm, area = 96 cm².\n• Triangle perimeter 6x + 4 (1)\n• Rectangle perimeter 4x + 16 (1)\n• Forms the equation 6x + 4 = 4x + 16 (1)\n• x = 6 (1)\n• Longest side = 16 cm (1)\n• Area = 12 × 8 = 96 cm² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.6 */
  "2.6": {
    "topic": "Sequences",
    "green": [
      {
        "q": "Find the nth term of the sequence 8, 14, 20, 26, …",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "The common difference is 6, so the nth term starts 6n. 6n gives 6, 12, 18, …; each term is 2 more, so the nth term is 6n + 2.\n• 6n (1)\n• 6n + 2 (1)"
      },
      {
        "q": "The first term of a sequence is 3. The term-to-term rule is \"multiply by 2 then add 1\". Write down the first four terms.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "3 × 2 + 1 = 7, 7 × 2 + 1 = 15, 15 × 2 + 1 = 31. The first four terms are 3, 7, 15, 31.\n• 7 and 15 (1)\n• 31 (1)"
      },
      {
        "q": "Find the nth term of the sequence 40, 37, 34, 31, … and use it to find the 25th term.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "The common difference is −3, so the nth term starts −3n. The zeroth term would be 40 + 3 = 43, so the nth term is 43 − 3n. 25th term = 43 − 3 × 25 = 43 − 75 = −32.\n• −3n seen (1)\n• 43 − 3n (1)\n• 25th term = −32 (1)"
      },
      {
        "q": "Find the nth term of the quadratic sequence 4, 7, 12, 19, 28, …",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "First differences 3, 5, 7, 9; second difference 2, so the coefficient of n² is 2 ÷ 2 = 1. Subtract n² (1, 4, 9, 16, 25) from the terms: 3, 3, 3, 3, 3. So the nth term is n² + 3.\n• Second difference 2 so n² (1)\n• Subtracts n² to get a constant 3 (1)\n• n² + 3 (1)"
      }
    ],
    "amber": [
      {
        "q": "Pattern 1 has 5 dots, pattern 2 has 9 dots and pattern 3 has 13 dots. Ella says \"Pattern 30 has 120 dots.\" Is Ella correct? Show your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "The number of dots goes up by 4 each time, so the nth term is 4n + 1. Pattern 30 has 4 × 30 + 1 = 121 dots, so Ella is wrong (she has used 4n).\n• 4n seen (1)\n• 4n + 1 (1)\n• 4 × 30 + 1 = 121 (1)\n• Conclusion: Ella is not correct (1)"
      },
      {
        "q": "Find an expression for the nth term of the sequence 3, 10, 21, 36, 55, …",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "First differences 7, 11, 15, 19; second difference 4, so the n² coefficient is 4 ÷ 2 = 2. 2n² gives 2, 8, 18, 32, 50. Subtract: 1, 2, 3, 4, 5, which is n. So the nth term is 2n² + n.\n• Second difference of 4 found (1)\n• 2n² (1)\n• Subtracts 2n² to get 1, 2, 3, 4, 5 (1)\n• 2n² + n (1)"
      },
      {
        "q": "A geometric sequence has a positive common ratio. Its 2nd term is 12 and its 5th term is 324. Find the first term and the 7th term.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "From the 2nd term to the 5th term you multiply by r three times: r³ = 324 ÷ 12 = 27, so r = 3. First term = 12 ÷ 3 = 4. 7th term = 4 × 3⁶ = 4 × 729 = 2916.\n• r³ = 27 (1)\n• r = 3 (1)\n• First term = 4 (1)\n• 7th term = 2916 (1)"
      },
      {
        "q": "A geometric sequence begins 3, 3√2, 6, … Find the 9th term. Give your answer as an integer.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Common ratio = 3√2 ÷ 3 = √2. 9th term = 3 × (√2)⁸. (√2)² = 2, so (√2)⁸ = 2⁴ = 16. 9th term = 3 × 16 = 48.\n• Common ratio √2 (1)\n• 3 × (√2)⁸ (1)\n• (√2)⁸ = 16 (1)\n• 48 (1)"
      }
    ],
    "red": [
      {
        "q": "Sequence A has nth term 5n − 4. Sequence B begins 100, 96, 92, 88, …\n(a) Find the nth term of sequence B.\n(b) Find the position at which A and B have the same value, and state that value.\n(c) Explain why no term of sequence A is a multiple of 5.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Common difference −4, zeroth term 104, so B has nth term 104 − 4n.\n(b) 5n − 4 = 104 − 4n gives 9n = 108, n = 12. Value = 5 × 12 − 4 = 56 (check: 104 − 48 = 56).\n(c) 5n − 4 = 5(n − 1) + 1, which is always 1 more than a multiple of 5, so it can never be a multiple of 5.\n• (a) −4n seen (1)\n• (a) 104 − 4n (1)\n• (b) Forms 5n − 4 = 104 − 4n (1)\n• (b) n = 12 (1)\n• (b) Value 56 (1)\n• (c) Valid explanation, e.g. every term is 1 more than a multiple of 5 (terms end in 1 or 6) (1)"
      },
      {
        "q": "A sequence begins 7, 14, 25, 40, 59, …\n(a) Find an expression for the nth term.\n(b) Is 300 a term of the sequence? Explain your answer.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) First differences 7, 11, 15, 19; second difference 4, so 2n². 2n² gives 2, 8, 18, 32, 50; subtracting leaves 5, 6, 7, 8, 9 = n + 4. So the nth term is 2n² + n + 4.\n(b) 11th term = 2(121) + 11 + 4 = 257; 12th term = 2(144) + 12 + 4 = 304. The terms are increasing and 300 lies between 257 and 304, so 300 is not a term.\n• (a) Second difference 4 so 2n² (1)\n• (a) Remaining linear sequence 5, 6, 7, 8, 9 (1)\n• (a) n + 4 (1)\n• (a) 2n² + n + 4 (1)\n• (b) Evaluates the 11th and 12th terms (257 and 304) or solves 2n² + n − 296 = 0 (1)\n• (b) Conclusion: not a term, as no whole-number n gives 300 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.1 */
  "3.1": {
    "topic": "Ratio & Proportion",
    "green": [
      {
        "q": "Write the ratio 2.5 kg : 750 g in its simplest form.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "2.5 kg = 2500 g, so the ratio is 2500 : 750 = 10 : 3.\n• Converts to the same units, 2500 : 750 (1)\n• 10 : 3 (1)"
      },
      {
        "q": "72 sweets are shared between Ann, Bea and Cal in the ratio 5 : 3 : 1. How many sweets does each person get?",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Total parts = 5 + 3 + 1 = 9. One part = 72 ÷ 9 = 8.\nAnn 40, Bea 24, Cal 8.\n• 72 ÷ 9 = 8 (1)\n• 40, 24 and 8 (1)"
      },
      {
        "q": "A map has a scale of 1 : 25 000. A route measures 9.6 cm on the map. Work out the real length of the route in kilometres.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "9.6 × 25 000 = 240 000 cm\n240 000 cm ÷ 100 = 2400 m = 2.4 km\n• 9.6 × 25 000 = 240 000 cm (1)\n• Converts correctly to 2400 m (1)\n• 2.4 km (1)"
      },
      {
        "q": "y is inversely proportional to x². Write an equation connecting y and x, and describe what happens to y when x is doubled.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "y = k/x². If x is doubled, y = k/(2x)² = k/(4x²), so y is divided by 4.\n• y = k/x² (1)\n• y is divided by 4 (becomes a quarter of its value) (1)"
      }
    ],
    "amber": [
      {
        "q": "Orange juice is sold in three sizes: 1 litre for £1.35, 1.5 litres for £1.95 and 2 litres for £2.70. Which size is the best value for money? Show your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Cost per litre:\n1 litre: £1.35 per litre\n1.5 litres: 1.95 ÷ 1.5 = £1.30 per litre\n2 litres: 2.70 ÷ 2 = £1.35 per litre\n• Cost per litre of 1.5 litre size = £1.30 (1)\n• Cost per litre of 2 litre size = £1.35 (1)\n• All three values comparable (same unit) (1)\n• 1.5 litres is best value (1)"
      },
      {
        "q": "Show that the ratios 6 : 15 and 10 : 25 are equivalent, and write the first number as a fraction of the second.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "6 : 15 = 2 : 5 (divide by 3) and 10 : 25 = 2 : 5 (divide by 5).\nBoth simplify to 2 : 5, so they are in proportion. The first is 2/5 of the second.\n• 6 : 15 simplified to 2 : 5 (1)\n• 10 : 25 simplified to 2 : 5 with conclusion they are equivalent (1)\n• 2/5 (1)"
      },
      {
        "q": "y is directly proportional to the square root of x. When x = 16, y = 10. (a) Find y when x = 49. (b) Find x when y = 30.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "y = k√x, so 10 = k × 4 and k = 2.5. Formula: y = 2.5√x.\n(a) y = 2.5 × 7 = 17.5\n(b) 30 = 2.5√x so √x = 12 and x = 144.\n• y = k√x with 10 = 4k (1)\n• k = 2.5 (1)\n• (a) y = 17.5 (1)\n• (b) x = 144 (1)"
      },
      {
        "q": "6 workers can harvest a field in 15 hours. (a) How long would 9 workers take? (b) The farmer needs the field harvested in 5 hours. How many workers are needed? (c) State one assumption you have made.",
        "marks": 5,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Total work = 6 × 15 = 90 worker-hours.\n(a) 90 ÷ 9 = 10 hours\n(b) 90 ÷ 5 = 18 workers\n(c) All workers work at the same constant rate.\n• 90 worker-hours (1)\n• (a) 10 hours (1)\n• (b) 90 ÷ 5 (1)\n• 18 workers (1)\n• (c) Valid assumption, e.g. every worker works at the same rate (1)"
      }
    ],
    "red": [
      {
        "q": "Amy and Ben share some money in the ratio 3 : 5. Ben then gives Amy £30. They now have equal amounts. How much money did they share?",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Let Amy have 3k and Ben 5k.\nAfter the gift: 3k + 30 = 5k − 30\n60 = 2k, so k = 30\nTotal = 8k = £240 (Amy £90, Ben £150; after the gift both have £120)\n• Uses 3k and 5k (or equivalent) (1)\n• Forms 3k + 30 = 5k − 30 (1)\n• Solves to k = 30 (1)\n• Total = 8 × 30 (1)\n• £240 (1)"
      },
      {
        "q": "Two cones are mathematically similar. Their volumes are 54 cm³ and 250 cm³. The smaller cone has base radius 3 cm and total surface area 45π cm². Work out the base radius and the total surface area of the larger cone.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Volume ratio 54 : 250 = 27 : 125.\nLength ratio = ∛27 : ∛125 = 3 : 5, so length scale factor = 5/3.\nRadius of larger cone = 3 × 5/3 = 5 cm.\nArea ratio = 3² : 5² = 9 : 25, so area scale factor = 25/9.\nSurface area = 45π × 25/9 = 125π cm² (≈ 392.7 cm²).\n• Volume ratio simplified to 27 : 125 (1)\n• Length scale factor 5/3 (cube root) (1)\n• Radius = 5 cm (1)\n• Area scale factor (5/3)² = 25/9 (1)\n• 45π × 25/9 (1)\n• 125π cm² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.2 */
  "3.2": {
    "topic": "Percentages, Growth & Decay",
    "green": [
      {
        "q": "Without a calculator, work out 17.5% of £360.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "10% = 36, 5% = 18, 2.5% = 9\n17.5% = 36 + 18 + 9 = £63\n• Correct build-up of 10%, 5% and 2.5% (1)\n• £63 (1)"
      },
      {
        "q": "A plant's height falls from 250 mm to 195 mm. Work out the percentage decrease.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Decrease = 250 − 195 = 55\n55/250 × 100 = 22%\n• 55/250 × 100 (1)\n• 22% (1)"
      },
      {
        "q": "£1500 is invested for 5 years at 2.4% per year simple interest. Work out the total value of the investment at the end of the 5 years.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Interest per year = 1500 × 0.024 = £36\nInterest for 5 years = 36 × 5 = £180\nTotal = 1500 + 180 = £1680\n• £36 per year (1)\n• £180 interest (1)\n• £1680 (1)"
      },
      {
        "q": "Which is larger, 3/8 or 0.4? Use percentages to explain your answer.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "3/8 = 37.5% and 0.4 = 40%, so 0.4 is larger.\n• Both converted: 37.5% and 40% (1)\n• 0.4 is larger (1)"
      }
    ],
    "amber": [
      {
        "q": "In a sale a laptop is reduced by 20% to £552. (a) Work out the original price. (b) After the sale the shop increases the sale price by 20%. Explain why the laptop does not return to its original price.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) 80% = £552, so original = 552 ÷ 0.8 = £690.\n(b) 552 × 1.2 = £662.40, not £690. The 20% increase is 20% of the smaller sale price, so it adds less than the 20% that was taken off the larger original price.\n• 552 ÷ 0.8 (1)\n• £690 (1)\n• 552 × 1.2 = £662.40 (1)\n• Explains the percentages are of different amounts (1)"
      },
      {
        "q": "£4000 is invested for 4 years. Compare the total value with 3% per year compound interest and with 3% per year simple interest. How much more does compound interest give?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Compound: 4000 × 1.03⁴ = £4502.04 (4502.035…)\nSimple: 4000 + 4 × 120 = £4480\nDifference = 4502.04 − 4480 = £22.04\n• 4000 × 1.03⁴ (1)\n• £4502.04 (1)\n• Simple interest total £4480 (1)\n• £22.04 (1)"
      },
      {
        "q": "A van costs £24 000. It loses 20% of its value in the first year and 15% of its value in each year after that. Work out its value after 3 years.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "After 1 year: 24 000 × 0.8 = 19 200\nAfter 3 years: 19 200 × 0.85² = £13 872\n• 24 000 × 0.8 = 19 200 (1)\n• × 0.85² (1)\n• £13 872 (1)"
      },
      {
        "q": "Priya's savings are modelled by uₙ₊₁ = 1.03uₙ + 100, where uₙ is the balance in pounds after n years and u₀ = 1000. (a) Explain what the numbers 1.03 and 100 represent. (b) Work out u₃.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) 1.03: 3% interest is added each year. 100: £100 is added to the account each year (after the interest).\n(b) u₁ = 1030 + 100 = 1130\nu₂ = 1.03 × 1130 + 100 = 1263.90\nu₃ = 1.03 × 1263.90 + 100 = 1401.817 = £1401.82\n• 1.03 is 3% interest (1)\n• 100 is £100 deposited each year (1)\n• u₁ = 1130 and u₂ = 1263.90 (1)\n• u₃ = £1401.82 (1)"
      }
    ],
    "red": [
      {
        "q": "Town A has a population of 45 000, which is increasing by 2% each year. Town B has a population of 52 000, which is decreasing by 1.5% each year. After how many whole years will the population of Town A first be greater than the population of Town B? Show your working.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Town A after n years: 45 000 × 1.02ⁿ\nTown B after n years: 52 000 × 0.985ⁿ\nn = 4: A = 48 709, B = 48 950 (A smaller)\nn = 5: A = 49 684, B = 48 215 (A larger)\nAnswer: 5 years\n• Multiplier 1.02 for Town A (1)\n• Multiplier 0.985 for Town B (1)\n• Forms 45 000 × 1.02ⁿ and 52 000 × 0.985ⁿ (1)\n• Correct values for n = 4 (1)\n• Correct values for n = 5 (1)\n• 5 years (1)"
      },
      {
        "q": "A loan of £5000 is charged 1% interest per month. At the end of each month £300 is repaid. The balance Bₙ after n months satisfies Bₙ₊₁ = 1.01Bₙ − 300, with B₀ = 5000. (a) Work out the balance after 3 months. (b) Explain why, if only £50 were repaid each month, the loan would never be paid off.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) B₁ = 1.01 × 5000 − 300 = 4750\nB₂ = 1.01 × 4750 − 300 = 4497.50\nB₃ = 1.01 × 4497.50 − 300 = 4242.475 = £4242.48\n(b) With £50 repaid: B₁ = 1.01 × 5000 − 50 = 5000. The interest each month (1% of £5000 = £50) equals the repayment, so the balance stays at £5000 for ever.\n• B₁ = 4750 (1)\n• B₂ = 4497.50 (1)\n• B₃ = £4242.48 (1)\n• Shows 1% of 5000 = 50 (1)\n• B₁ = 5000 again, balance unchanged (1)\n• Concludes the balance never decreases so the loan is never repaid (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.3 */
  "3.3": {
    "topic": "Compound Measures & Rates of Change",
    "green": [
      {
        "q": "Convert 90 km/h into metres per second. Show your working.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "90 km/h = 90 000 m in 3600 s\n• 90 × 1000 ÷ 3600 (1)\n• 25 m/s (1)"
      },
      {
        "q": "A force of 450 N acts on an area of 1.5 m². Work out the pressure.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Pressure = force ÷ area\n• 450 ÷ 1.5 (1)\n• 300 N/m² (1)"
      },
      {
        "q": "Silver has density 10.5 g/cm³. A silver bar has volume 40 cm³. Work out the mass of the bar in kilograms.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Mass = density × volume = 10.5 × 40 = 420 g = 0.42 kg\n• Uses mass = density × volume (1)\n• 420 g (1)\n• 0.42 kg (1)"
      },
      {
        "q": "Explain the difference between the gradient of a chord and the gradient of a tangent on a curved graph.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "A chord joins two points on the curve; a tangent touches the curve at one point.\n• Gradient of a chord gives the average rate of change between two points (1)\n• Gradient of a tangent gives the instantaneous rate of change at one point (1)"
      }
    ],
    "amber": [
      {
        "q": "Orange juice is sold in three sizes: 250 ml for £1.20, 400 ml for £1.80 and 1 litre for £4.70. Which size is the best value? Show your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Cost per 100 ml: 250 ml → 120 ÷ 2.5 = 48p; 400 ml → 180 ÷ 4 = 45p; 1 litre → 470 ÷ 10 = 47p\n• Converts to a common unit (e.g. per 100 ml or per ml) (1)\n• Two correct unit costs (1)\n• All three correct unit costs (1)\n• 400 ml is the best value (1)"
      },
      {
        "q": "A straight-line graph shows a plumber’s charge, C pounds, for a job lasting h hours. It passes through (0, 45) and (3, 141). (a) Work out the gradient and explain what it represents. (b) Explain what the 45 represents. (c) Work out the charge for a 5-hour job.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Gradient = (141 − 45) ÷ 3 = 96 ÷ 3 = 32. C = 32h + 45, so a 5-hour job costs 32 × 5 + 45 = £205.\n• Gradient 32 (1)\n• £32 charged per hour (1)\n• £45 is a fixed call-out charge (1)\n• £205 (1)"
      },
      {
        "q": "An object moves so that its distance from a point is d = t² metres after t seconds. (a) Work out its average speed over the first 3 seconds. (b) A tangent to the distance–time graph at t = 3 passes through (1.5, 0) and (4, 15). Estimate the speed at t = 3. (c) Explain why your answer to (b) is larger than your answer to (a).",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) d(3) = 9, so average speed = 9 ÷ 3 = 3 m/s. (b) Gradient = 15 ÷ 2.5 = 6 m/s. (c) The curve gets steeper, so the object is speeding up.\n• d(3) = 9 and 9 ÷ 3 (1)\n• Average speed 3 m/s (1)\n• (15 − 0) ÷ (4 − 1.5) (1)\n• Speed at t = 3 is 6 m/s (1)\n• Object is accelerating, so speed at the end is more than the average (1)"
      },
      {
        "q": "Aluminium has density 2.7 g/cm³. Convert this density into kg/m³, showing your working.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "1 m³ = 100 × 100 × 100 = 1 000 000 cm³. Mass of 1 m³ = 2.7 × 1 000 000 = 2 700 000 g = 2700 kg.\n• 1 m³ = 1 000 000 cm³ (1)\n• 2 700 000 g (1)\n• 2700 kg/m³ (1)"
      }
    ],
    "red": [
      {
        "q": "Ali drives 150 km from A to B. He drives the first 90 km at an average speed of 60 km/h and the rest at an average speed of 80 km/h. He also stops for 20 minutes. He leaves A at 09:40. (a) At what time does he arrive at B? (b) Work out his average speed for the whole journey, including the stop, to 1 decimal place.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "First part: 90 ÷ 60 = 1.5 h. Second part: 60 ÷ 80 = 0.75 h. Total = 2.25 h + 20 min = 2 h 35 min. 09:40 + 2 h 35 min = 12:15. Average speed = 150 ÷ (155/60) = 58.1 km/h.\n• 1.5 h for first part (1)\n• 0.75 h (45 min) for second part (1)\n• Total time 2 h 35 min (1)\n• Arrives 12:15 (1)\n• 150 ÷ 2.583… (1)\n• 58.1 km/h (1)"
      },
      {
        "q": "The depth, h cm, of water in a tank t minutes after filling starts is h = 0.5t² + 2t, for 0 ≤ t ≤ 6. (a) Work out the average rate of increase of depth between t = 2 and t = 6. (b) A tangent to the graph at t = 4 passes through (2, 4) and (6, 28). Estimate the rate of increase of depth at t = 4. (c) Comment on your answers.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) h(2) = 2 + 4 = 6, h(6) = 18 + 12 = 30; (30 − 6) ÷ (6 − 2) = 6 cm/min. (b) (28 − 4) ÷ (6 − 2) = 6 cm/min. (c) They are equal.\n• h(2) = 6 (1)\n• h(6) = 30 (1)\n• Average rate 6 cm per minute (1)\n• Method for gradient of tangent (1)\n• 6 cm per minute at t = 4 (1)\n• The instantaneous rate at t = 4 equals the average rate from t = 2 to t = 6 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.1 */
  "4.1": {
    "topic": "Angles, Polygons & Constructions",
    "green": [
      {
        "q": "Work out the sum of the interior angles of a pentagon. Show how you get your answer.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "A pentagon splits into 3 triangles from one vertex: 3 × 180 = 540°.\n• (5 − 2) × 180 or 3 triangles (1)\n• 540° (1)"
      },
      {
        "q": "The bearing of B from A is 040°. Work out the bearing of A from B.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Back bearing = 040 + 180 = 220°.\n• Adds 180° (1)\n• 220° (1)"
      },
      {
        "q": "State three properties of a kite.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "• Two pairs of equal adjacent sides (1)\n• One pair of equal opposite angles (1)\n• Diagonals cross at right angles (one diagonal bisects the other) / one line of symmetry (1)"
      },
      {
        "q": "Each exterior angle of a regular polygon is 30°. Work out the number of sides and the size of each interior angle.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "360 ÷ 30 = 12 sides; interior angle = 180 − 30 = 150°.\n• 12 sides (1)\n• 150° (1)"
      }
    ],
    "amber": [
      {
        "q": "Prove that the angles in a triangle add up to 180°. Give a reason for each step.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Triangle ABC with angles a, b, c at A, B, C. Draw a line through A parallel to BC.\n• Line drawn through one vertex parallel to the opposite side (1)\n• The angle next to a on one side equals b (alternate angles are equal) (1)\n• The angle on the other side equals c (alternate angles are equal) (1)\n• These three angles lie on a straight line, so a + b + c = 180° (1)"
      },
      {
        "q": "Describe how to construct an angle of 30° using only a ruler and compasses.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "• Draw a line and mark a point O; with compasses centred on O draw an arc crossing the line at X (1)\n• With the same radius, centre X, draw an arc crossing the first arc at Y; angle XOY = 60° because triangle OXY is equilateral (1)\n• With centres X and Y and equal radius, draw arcs that meet at Z (1)\n• Join OZ; it bisects the 60° angle, giving 30° (1)"
      },
      {
        "q": "Explain why a regular polygon cannot have an interior angle of 100°.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Exterior angle = 180 − 100 = 80°. Number of sides = 360 ÷ 80 = 4.5.\n• Exterior angle 80° (1)\n• 360 ÷ 80 = 4.5 (1)\n• Number of sides must be a whole number, so it is impossible (1)"
      },
      {
        "q": "Two radio masts, A and B, are 8 km apart. A signal from mast A reaches up to 5 km; a signal from mast B reaches up to 4 km. Describe, with construction details, the region that receives both signals, and the points in that region that are equally distant from A and B.",
        "marks": 5,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "• Draw AB to scale (e.g. 1 cm = 1 km, so AB = 8 cm) (1)\n• Circle centre A, radius 5 cm (1)\n• Circle centre B, radius 4 cm (1)\n• The region receiving both signals is where the two circles overlap (1)\n• Points equally distant from A and B lie on the perpendicular bisector of AB, within the overlap (1)"
      }
    ],
    "red": [
      {
        "q": "ABC is an isosceles triangle with AB = AC and angle BAC = 36°. D is a point on AC such that BD = BC. Prove that AD = BD.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Angle ABC = angle ACB = (180 − 36) ÷ 2 = 72°. Triangle BDC is isosceles (BD = BC), so angle BDC = angle BCD = 72°, and angle DBC = 180 − 144 = 36°. Angle ABD = 72 − 36 = 36° = angle BAD, so triangle ABD is isosceles and AD = BD.\n• Base angles of triangle ABC: (180 − 36) ÷ 2 (1)\n• 72° each (1)\n• Angle BDC = 72° (base angles of isosceles triangle BDC) (1)\n• Angle DBC = 36° (angles in a triangle) (1)\n• Angle ABD = 72 − 36 = 36° (1)\n• Angle ABD = angle BAD, so triangle ABD is isosceles and AD = BD (1)"
      },
      {
        "q": "Each interior angle of a regular polygon is five times the size of each exterior angle. (a) Work out the number of sides. (b) Work out the sum of the interior angles. (c) Can copies of this polygon fit together around a point without gaps? Explain.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Let exterior angle = e. Then 5e + e = 180, so e = 30° and n = 360 ÷ 30 = 12. Sum = (12 − 2) × 180 = 1800°. Interior angle = 150°; 360 ÷ 150 = 2.4, not a whole number, so no.\n• 5e + e = 180 (1)\n• e = 30° (1)\n• 12 sides (1)\n• (12 − 2) × 180 (1)\n• 1800° (1)\n• 360 ÷ 150 is not a whole number, so they do not fit (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.2 */
  "4.2": {
    "topic": "Congruence, Similarity & Transformations",
    "green": [
      {
        "q": "List the four conditions that can be used to prove that two triangles are congruent.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "SSS (three sides), SAS (two sides and the included angle), ASA or AAS (two angles and a corresponding side), RHS (right angle, hypotenuse, side).\n• Any two correct conditions (1)\n• All four correct (1)"
      },
      {
        "q": "The point (−1, 4) is translated by the column vector (3, −5). Work out the coordinates of its image.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "x: −1 + 3 = 2, y: 4 + (−5) = −1\n• Adds the vector components to the coordinates (1)\n• Image (2, −1) (1)"
      },
      {
        "q": "Two shapes are mathematically similar with a length scale factor of 2.5. The smaller shape has area 8 cm². Work out the area of the larger shape.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Area scale factor = 2.5² = 6.25, area = 8 × 6.25 = 50 cm²\n• Squares the length scale factor: 6.25 (1)\n• 50 cm² (1)"
      },
      {
        "q": "Triangle A has vertices (1, 0), (3, 0) and (1, 1). Triangle B has vertices (0, 1), (0, 3) and (−1, 1). Describe fully the single transformation that maps A onto B.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Each point (x, y) maps to (−y, x), e.g. (3, 0) goes to (0, 3).\n• Rotation (1)\n• 90° anticlockwise (1)\n• about the origin (0, 0) (1)"
      }
    ],
    "amber": [
      {
        "q": "In triangle PQR, S lies on PQ and T lies on PR so that ST is parallel to QR. PS = 5 cm, SQ = 3 cm, ST = 6 cm and PT = 4 cm. Work out the length of QR and the length of TR.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Triangles PST and PQR are similar (corresponding angles). PQ = 8 cm, so scale factor = 8 ÷ 5 = 1.6.\nQR = 6 × 1.6 = 9.6 cm. PR = 4 × 1.6 = 6.4 cm, so TR = 6.4 − 4 = 2.4 cm.\n• Scale factor 1.6 (1)\n• QR = 9.6 cm (1)\n• PR = 6.4 cm (1)\n• TR = 2.4 cm (1)"
      },
      {
        "q": "Triangle A has vertices (2, 2), (4, 2) and (2, 6). Triangle B has vertices (−1, −1), (−2, −1) and (−1, −3). Describe fully the single transformation that maps A onto B.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Each image point is −½ times the original point, e.g. (4, 2) maps to (−2, −1), so B is half the size, on the opposite side of the origin and upside down.\n• Enlargement (1)\n• size of scale factor ½ (1)\n• scale factor is negative, i.e. −½ (1)\n• centre (0, 0) (1)"
      },
      {
        "q": "ABCD is a parallelogram. Prove that triangles ABD and CDB are congruent.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "In a parallelogram opposite sides are equal.\n• AB = CD (opposite sides of a parallelogram) (1)\n• AD = CB (opposite sides of a parallelogram) (1)\n• BD is a common side (1)\n• So triangles ABD and CDB are congruent by SSS (1)"
      },
      {
        "q": "Two jugs are mathematically similar. Their heights are 12 cm and 18 cm. The smaller jug holds 0.8 litres. The larger jug has a surface area of 540 cm². Work out the capacity of the larger jug and the surface area of the smaller jug.",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Length scale factor = 18 ÷ 12 = 1.5. Volume scale factor = 1.5³ = 3.375, capacity = 0.8 × 3.375 = 2.7 litres.\nArea scale factor = 1.5² = 2.25, smaller surface area = 540 ÷ 2.25 = 240 cm².\n• Length scale factor 1.5 (1)\n• Volume scale factor 3.375 (1)\n• 2.7 litres (1)\n• Area scale factor 2.25 (1)\n• 240 cm² (1)"
      }
    ],
    "red": [
      {
        "q": "Triangle T has vertices (1, 2), (3, 2) and (1, 5). T is reflected in the line y = x and the image is then rotated 180° about the origin to give triangle W. Show that W is a single reflection of T, state the mirror line, and describe the invariant points of this combined transformation.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Reflection in y = x: (x, y) → (y, x), giving (2, 1), (2, 3), (5, 1).\nRotation 180° about O: (x, y) → (−x, −y), giving W = (−2, −1), (−2, −3), (−5, −1).\nOverall (x, y) → (−y, −x), which is a reflection in the line y = −x.\nA point is invariant when (−y, −x) = (x, y), i.e. when y = −x.\n• Correct first image (2, 1), (2, 3), (5, 1) (1)\n• Correct W (−2, −1), (−2, −3), (−5, −1) (1)\n• Single transformation is a reflection (1)\n• in the line y = −x (1)\n• Invariant points are the points on the line y = −x (1)\n• Justified, e.g. (−y, −x) = (x, y) only when y = −x (1)"
      },
      {
        "q": "Straight lines AE and BD cross at C. AB is parallel to DE. AB = 9 cm, DE = 6 cm, AC = 7.5 cm and CD = 4 cm. Prove that triangles ABC and EDC are similar, then work out the lengths of CE and BC.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Angle ACB = angle ECD (vertically opposite). Angle BAC = angle DEC and angle ABC = angle EDC (alternate angles, AB parallel to DE). So the triangles are similar, with A ↔ E, B ↔ D.\nScale factor from EDC to ABC = 9 ÷ 6 = 1.5. CE = 7.5 ÷ 1.5 = 5 cm. BC = 4 × 1.5 = 6 cm.\n• Vertically opposite angles at C equal (1)\n• A pair of alternate angles equal with reason (1)\n• Conclude similar (all three angles equal) (1)\n• Scale factor 1.5 (1)\n• CE = 5 cm (1)\n• BC = 6 cm (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.3 */
  "4.3": {
    "topic": "Circles & Circle Theorems",
    "green": [
      {
        "q": "Explain the difference between a sector and a segment of a circle.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "A sector is the region bounded by two radii and an arc (a \"pizza slice\"). A segment is the region bounded by a chord and an arc.\n• Sector: two radii and an arc (1)\n• Segment: a chord and an arc (1)"
      },
      {
        "q": "A circle has radius 6 cm. Work out its area, giving your answer (a) in terms of π and (b) to 3 significant figures.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Area = π × 6² = 36π cm² ≈ 113.097… so 113 cm²\n• 36π cm² (1)\n• 113 cm² (1)"
      },
      {
        "q": "A sector has radius 15 cm and angle 100°. Work out its arc length to 1 decimal place.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Arc length = 100/360 × 2 × π × 15 = 100/360 × 30π = 26.179…\n• Uses fraction 100/360 of the circumference (1)\n• Circumference 30π or 94.2… (1)\n• 26.2 cm (1)"
      },
      {
        "q": "ABCD is a cyclic quadrilateral with angle ABC = 97°. Work out angle ADC and state the circle theorem you used.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Angle ADC = 180 − 97 = 83°\n• 83° (1)\n• Opposite angles of a cyclic quadrilateral add up to 180° (1)"
      }
    ],
    "amber": [
      {
        "q": "A shape is made from a rectangle 8 cm by 6 cm with a semicircle of diameter 8 cm attached along one of the 8 cm sides. Work out the area and the perimeter of the shape, each to 1 decimal place.",
        "marks": 5,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Area: rectangle 8 × 6 = 48; semicircle ½ × π × 4² = 8π = 25.13…; total 73.13… so 73.1 cm².\nPerimeter: curved edge ½ × π × 8 = 4π = 12.57…; straight edges 8 + 6 + 6 = 20; total 32.57… so 32.6 cm.\n• Semicircle area 8π or 25.1 (1)\n• Total area 73.1 cm² (1)\n• Curved edge 4π or 12.6 (1)\n• Straight edges total 20 cm, not including the joined side (1)\n• Perimeter 32.6 cm (1)"
      },
      {
        "q": "Prove that the opposite angles of a cyclic quadrilateral add up to 180°. You may use the theorem that the angle at the centre is twice the angle at the circumference.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Let ABCD be cyclic with centre O. Let angle BAD = x and angle BCD = y. Join OB and OD.\nThe angle at O subtended by arc BCD is 2x; the reflex angle at O subtended by arc BAD is 2y.\nThese two angles make a full turn, so 2x + 2y = 360, giving x + y = 180.\n• Draws radii OB and OD and labels angle BAD = x, BCD = y (1)\n• Angle at centre = 2x (angle at centre twice angle at circumference) (1)\n• Reflex angle at centre = 2y (1)\n• 2x + 2y = 360 (angles at a point) so x + y = 180° (1)"
      },
      {
        "q": "A chord AB of length 24 cm lies in a circle of centre O and radius 13 cm. Work out the perpendicular distance from O to AB, and the area of triangle OAB.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "The perpendicular from the centre bisects the chord, so the half-chord is 12 cm.\nDistance = √(13² − 12²) = √25 = 5 cm. Area = ½ × 24 × 5 = 60 cm².\n• Half-chord 12 cm (perpendicular from centre bisects chord) (1)\n• 13² − 12² seen (1)\n• Distance 5 cm (1)\n• Area 60 cm² (1)"
      },
      {
        "q": "A sector has radius 5 cm and arc length 7 cm. Work out the angle of the sector to 1 decimal place, and the perimeter of the sector.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "θ/360 × 2 × π × 5 = 7, so θ = 7 × 360 ÷ 10π = 80.21…°\nPerimeter = 7 + 5 + 5 = 17 cm\n• Correct equation θ/360 × 10π = 7 (1)\n• 80.2° (1)\n• Perimeter 17 cm (1)"
      }
    ],
    "red": [
      {
        "q": "A, B and C lie on a circle centre O. TA is the tangent at A, and the angle between TA and chord AB is 64°. C lies in the alternate segment. D lies on the minor arc AB. Work out angles ACB, AOB, OAB and ADB, giving reasons.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Angle ACB = 64° (alternate segment theorem).\nAngle AOB = 2 × 64 = 128° (angle at centre is twice angle at circumference).\nTriangle OAB is isosceles (OA = OB), so angle OAB = (180 − 128) ÷ 2 = 26°. (Check: 90 − 64 = 26, as the tangent is perpendicular to OA.)\nACBD is a cyclic quadrilateral, so angle ADB = 180 − 64 = 116°.\n• Angle ACB = 64° (1)\n• Reason: alternate segment theorem (1)\n• Angle AOB = 128° (1)\n• Reason: angle at centre is twice angle at circumference (1)\n• Angle OAB = 26° (1)\n• Angle ADB = 116° with cyclic quadrilateral reason (1)"
      },
      {
        "q": "A window is a rectangle 1.2 m wide and 1.5 m tall with a semicircle of diameter 1.2 m on top. (a) Work out the area of glass to 2 decimal places. (b) Edging is fitted around the whole outside edge. It costs £4.50 per metre and is sold only in whole metres. Work out the cost of the edging.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Rectangle 1.2 × 1.5 = 1.8; semicircle ½ × π × 0.6² = 0.18π = 0.565…; total 2.365… so 2.37 m².\n(b) Perimeter = 1.2 + 1.5 + 1.5 + ½ × π × 1.2 = 4.2 + 0.6π = 6.085… m, so buy 7 m. Cost 7 × £4.50 = £31.50.\n• Semicircle area 0.18π or 0.565 (1)\n• Area 2.37 m² (1)\n• Curved edge 0.6π or 1.88… (1)\n• Perimeter 6.08… m (1)\n• Rounds up to 7 m (1)\n• £31.50 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.4 */
  "4.4": {
    "topic": "Mensuration: Area, Volume & 3D",
    "green": [
      {
        "q": "A triangle has base 14 cm and perpendicular height 9 cm. Work out its area.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Area = ½ × base × perpendicular height = ½ × 14 × 9 = 63 cm²\n• ½ × 14 × 9 (1)\n• 63 cm² (1)"
      },
      {
        "q": "A 3D solid has 5 faces, 9 edges and 6 vertices. (a) Name the solid. (b) How many faces does a cylinder have?",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) Two triangular faces and three rectangular faces: a triangular prism.\n(b) A cylinder has 2 flat circular faces and 1 curved surface, so 3.\n• Triangular prism (1)\n• 3 (two flat, one curved) (1)"
      },
      {
        "q": "Convert 7.2 m³ to cm³.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "1 m = 100 cm so 1 m³ = 100³ = 1 000 000 cm³\n7.2 × 1 000 000 = 7 200 000 cm³\n• Multiplying by 1 000 000 (100³) (1)\n• 7 200 000 cm³ (1)"
      },
      {
        "q": "A circle has radius 7 cm. Work out (a) its circumference and (b) its area. Give each answer to 1 decimal place.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) C = 2πr = 2 × π × 7 = 43.98… = 44.0 cm\n(b) A = πr² = π × 49 = 153.93… = 153.9 cm²\n• 2 × π × 7 or 14π (1)\n• 44.0 cm (1)\n• 153.9 cm² (1)"
      }
    ],
    "amber": [
      {
        "q": "A cylinder has diameter 10 cm and height 14 cm. Work out its volume. Give your answer to 3 significant figures.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Radius = 10 ÷ 2 = 5 cm\nV = πr²h = π × 25 × 14 = 350π = 1099.55… cm³\n• Radius 5 used (1)\n• π × 5² × 14 (1)\n• 1100 cm³ (1)"
      },
      {
        "q": "A prism is 10 cm long. Its cross-section is a right-angled triangle with sides 3 cm, 4 cm and 5 cm. Work out the total surface area of the prism.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Triangle area = ½ × 3 × 4 = 6 cm², two ends = 12 cm²\nRectangles = (3 + 4 + 5) × 10 = 120 cm²\nTotal = 12 + 120 = 132 cm²\n• Triangle area 6 using the two shorter sides (1)\n• Two triangular ends = 12 (1)\n• Three rectangles totalling 120 (1)\n• 132 cm² (1)"
      },
      {
        "q": "A cone has base radius 4 cm and slant height 5 cm. Work out its volume. Give your answer to 1 decimal place. [Volume of a cone = 1/3 πr²h]",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Perpendicular height h = √(5² − 4²) = √9 = 3 cm\nV = 1/3 × π × 4² × 3 = 16π = 50.26… cm³\n• Pythagoras: 5² − 4² (1)\n• h = 3 (1)\n• 1/3 × π × 16 × 3 (1)\n• 50.3 cm³ (1)"
      },
      {
        "q": "A lampshade is a frustum. It is made by removing a cone of height 10 cm and base radius 4 cm from the top of a cone of height 20 cm and base radius 8 cm. Work out the volume of the frustum to 3 significant figures.",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Large cone: 1/3 × π × 8² × 20 = 1280π/3\nSmall cone: 1/3 × π × 4² × 10 = 160π/3\nFrustum = 1280π/3 − 160π/3 = 1120π/3 = 1172.86… cm³\n• Correct method for large cone volume (1)\n• 1280π/3 (= 1340.4…) (1)\n• Small cone 160π/3 (= 167.5…) (1)\n• Subtracting small from large (1)\n• 1170 cm³ (1)"
      }
    ],
    "red": [
      {
        "q": "A swimming pool is 20 m long and 8 m wide. The floor slopes evenly so the depth is 1 m at the shallow end and 3 m at the deep end (the side view is a trapezium). The pool is filled at 400 litres per minute. How long does it take to fill the empty pool? Give your answer in hours and minutes.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Cross-section (trapezium) = ½ × (1 + 3) × 20 = 40 m²\nVolume = 40 × 8 = 320 m³\n1 m³ = 1000 litres so 320 m³ = 320 000 litres\nTime = 320 000 ÷ 400 = 800 minutes = 13 hours 20 minutes\n• Trapezium area ½ × (1 + 3) × 20 (1)\n• 40 m² (1)\n• Volume 320 m³ (1)\n• Converting to 320 000 litres (1)\n• 800 minutes (1)\n• 13 hours 20 minutes (1)"
      },
      {
        "q": "A cylinder of radius 6 cm and height 20 cm contains water to a depth of 15 cm. A solid metal sphere of radius 4.5 cm is dropped in and sinks. Work out the new depth of the water and decide whether the water overflows. [Volume of a sphere = 4/3 πr³]",
        "marks": 7,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Sphere volume = 4/3 × π × 4.5³ = 121.5π cm³\nCross-section of cylinder = π × 6² = 36π cm²\nRise = 121.5π ÷ 36π = 3.375 cm\nNew depth = 15 + 3.375 = 18.375 ≈ 18.4 cm\nSphere diameter 9 cm < 18.4 cm so it is fully submerged; 18.4 < 20 so no overflow.\n• 4/3 × π × 4.5³ (1)\n• 121.5π or 381.7… (1)\n• Cylinder cross-section 36π (1)\n• Rise = sphere volume ÷ cross-section (1)\n• 3.375 cm (1)\n• New depth 18.4 cm (1)\n• Conclusion: does not overflow, as 18.4 < 20 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.5 */
  "4.5": {
    "topic": "Pythagoras & Trigonometry",
    "green": [
      {
        "q": "A right-angled triangle has shorter sides of 8 cm and 15 cm. Work out the length of the hypotenuse.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "c² = 8² + 15² = 64 + 225 = 289\nc = √289 = 17 cm\n• 8² + 15² = 289 (1)\n• 17 cm (1)"
      },
      {
        "q": "In a right-angled triangle, the side opposite angle θ is 7 cm and the side adjacent to θ is 4 cm. Work out θ to 1 decimal place.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "tan θ = opposite/adjacent = 7/4 = 1.75\nθ = tan⁻¹(1.75) = 60.255…°\n• tan θ = 7/4 (1)\n• 60.3° (1)"
      },
      {
        "q": "Use a right-angled isosceles triangle with shorter sides of 1 unit to find the exact value of sin 45°.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "The two base angles are both 45° because the triangle is isosceles.\nHypotenuse = √(1² + 1²) = √2\nsin 45° = opposite/hypotenuse = 1/√2 = √2/2\n• Angles are 45° as the triangle is isosceles and right-angled (1)\n• Hypotenuse √2 (1)\n• sin 45° = 1/√2 (or √2/2) (1)"
      },
      {
        "q": "A triangle has sides of 6 cm and 9 cm with an included angle of 110°. Work out its area to 1 decimal place.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Area = ½ab sin C = ½ × 6 × 9 × sin 110° = 27 × 0.9396… = 25.37…\n• ½ × 6 × 9 × sin 110° (1)\n• 25.4 cm² (1)"
      }
    ],
    "amber": [
      {
        "q": "A rectangular field is 120 m long and 50 m wide. Ali walks from one corner to the opposite corner along two edges. Bea walks straight across the diagonal. How much shorter is Bea’s route?",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Ali: 120 + 50 = 170 m\nBea: √(120² + 50²) = √(14 400 + 2500) = √16 900 = 130 m\nDifference = 170 − 130 = 40 m\n• Ali’s route 170 m (1)\n• Diagonal √16 900 = 130 m (1)\n• 40 m shorter (1)"
      },
      {
        "q": "In triangle ABC, BC = a = 10 cm, AC = b = 13 cm and angle B = 70°. Work out angle A and angle C, each to 1 decimal place.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Sine rule: sin A / 10 = sin 70° / 13\nsin A = 10 × sin 70° ÷ 13 = 0.7228…\nA = 46.3° (the obtuse option 133.7° is impossible since 133.7° + 70° > 180°)\nC = 180° − 70° − 46.3° = 63.7°\n• sin A/10 = sin 70°/13 (1)\n• sin A = 0.7228… (1)\n• A = 46.3° (1)\n• C = 63.7° (1)"
      },
      {
        "q": "A kite is flown on a straight string 40 m long. The string makes an angle of 35° with the horizontal, and is held 1.2 m above level ground. How high is the kite above the ground? Give your answer to 1 decimal place.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Height above hand = 40 × sin 35° = 22.94… m\nHeight above ground = 22.94… + 1.2 = 24.14… m\n• 40 × sin 35° (1)\n• 22.9… m (1)\n• 24.1 m including the 1.2 m (1)"
      },
      {
        "q": "A pyramid has a square base of side 6 cm. Its apex is vertically above the centre of the base and each sloping edge is 9 cm. Work out (a) the vertical height of the pyramid and (b) the angle a sloping edge makes with the base. Give answers to 1 decimal place.",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Base diagonal = √(6² + 6²) = √72 = 6√2, so half-diagonal = 3√2 = 4.24… cm\nHeight = √(9² − 18) = √63 = 7.94 cm (1 dp: 7.9 cm)\nAngle: cos θ = 3√2 / 9, so θ = 61.9°\n• Base diagonal √72 (1)\n• Half-diagonal 3√2 = 4.24… (1)\n• Height √(81 − 18) = √63 (1)\n• Height 7.9 cm (1)\n• Angle 61.9° (1)"
      }
    ],
    "red": [
      {
        "q": "Triangle ABC has a right angle at B. D is a point on BC. AB = 9 cm, angle ADB = 50° and angle ACB = 30°. Work out the length DC. Give your answer to 3 significant figures.",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "In triangle ABD: tan 50° = 9/BD, so BD = 9 ÷ tan 50° = 7.551… cm\nIn triangle ABC: tan 30° = 9/BC, so BC = 9 ÷ tan 30° = 15.588… cm\nDC = BC − BD = 15.588… − 7.551… = 8.036… cm\n• tan 50° = 9/BD (1)\n• BD = 7.55… (1)\n• tan 30° = 9/BC (1)\n• BC = 15.58… (or 9√3) (1)\n• DC = 8.04 cm (1)"
      },
      {
        "q": "In triangle PQR, PQ = 9 cm, QR = 14 cm and angle PQR = 115°. Work out (a) the length PR, (b) angle QPR and (c) the area of the triangle. Give answers to 3 significant figures.",
        "marks": 7,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) PR² = 9² + 14² − 2 × 9 × 14 × cos 115° = 277 + 106.50… = 383.50…\nPR = 19.58… = 19.6 cm\n(b) sin QPR / 14 = sin 115° / 19.58…, sin QPR = 0.6479…, QPR = 40.4°\n(c) Area = ½ × 9 × 14 × sin 115° = 57.09… = 57.1 cm²\n• Cosine rule set up correctly (1)\n• PR² = 383.5… (1)\n• PR = 19.6 cm (1)\n• Sine rule set up correctly (1)\n• QPR = 40.4° (1)\n• ½ × 9 × 14 × sin 115° (1)\n• 57.1 cm² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.6 */
  "4.6": {
    "topic": "Vectors",
    "green": [
      {
        "q": "a = (5, −1) and b = (−2, 3). Work out 2a + b as a column vector.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "2a = (10, −2), so 2a + b = (10 + (−2), −2 + 3) = (8, 1).\n• 2a = (10, −2) (1)\n• 2a + b = (8, 1) (1)"
      },
      {
        "q": "Triangle A has vertices (1, 2), (3, 2) and (3, 5). Triangle B has vertices (−2, 4), (0, 4) and (0, 7). Describe fully the single transformation that maps triangle A onto triangle B.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Each vertex moves 3 left and 2 up, e.g. (1, 2) → (−2, 4).\n• Translation (1)\n• by the vector (−3, 2) (1)"
      },
      {
        "q": "A is the point (3, −2) and B is the point (−1, 6). Write down the column vectors AB and BA.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "AB = B − A = (−1 − 3, 6 − (−2)) = (−4, 8). BA is the reverse: (4, −8).\n• Subtracts coordinates of A from B (1)\n• AB = (−4, 8) (1)\n• BA = (4, −8) (1)"
      },
      {
        "q": "Is the vector 6a − 9b parallel to the vector 2a − 3b? Explain your answer.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "6a − 9b = 3(2a − 3b), so it is 3 times 2a − 3b.\n• Shows 6a − 9b = 3(2a − 3b) (1)\n• Yes — a scalar multiple, so the vectors are parallel (1)"
      }
    ],
    "amber": [
      {
        "q": "p = (2, k) and q = (m, −3). Given that 3p − q = (7, 9), find the values of k and m.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "3p = (6, 3k), so 3p − q = (6 − m, 3k + 3).\nTop: 6 − m = 7 so m = −1. Bottom: 3k + 3 = 9 so k = 2.\n• 3p − q = (6 − m, 3k + 3) (1)\n• m = −1 (1)\n• k = 2 (1)"
      },
      {
        "q": "ABCD is a parallelogram with AB = a and AD = d. E is the midpoint of CD. Find, in terms of a and d, (i) AC (ii) AE (iii) BE.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "AC = AB + BC = a + d. DC = a, so DE = ½a and AE = AD + DE = d + ½a.\nBE = BA + AE = −a + d + ½a = d − ½a.\n• AC = a + d (1)\n• DE = ½a (1)\n• AE = d + ½a (1)\n• BE = d − ½a (1)"
      },
      {
        "q": "O is the origin, OA = a and OB = b. P is the point on AB such that AP : PB = 1 : 3. Find OP in terms of a and b, giving your answer in its simplest form.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "AB = b − a. P is ¼ of the way from A to B, so AP = ¼(b − a).\nOP = OA + AP = a + ¼b − ¼a = ¾a + ¼b.\n• AB = b − a (1)\n• AP = ¼(b − a) (1)\n• OP = a + ¼(b − a) (1)\n• OP = ¾a + ¼b (1)"
      },
      {
        "q": "OP = 2a + b, OQ = 5a + 4b and OR = 9a + 8b. Prove that P, Q and R are collinear and find the ratio PQ : QR.",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "PQ = OQ − OP = 3a + 3b = 3(a + b). QR = OR − OQ = 4a + 4b = 4(a + b).\nBoth are multiples of a + b, so they are parallel, and they share the point Q, so P, Q and R lie on one straight line. PQ : QR = 3 : 4.\n• PQ = 3a + 3b (1)\n• QR = 4a + 4b (1)\n• Both multiples of (a + b), so parallel (1)\n• Common point Q, so collinear (1)\n• PQ : QR = 3 : 4 (1)"
      }
    ],
    "red": [
      {
        "q": "OAB is a triangle with OA = 3a and OB = 3b. P is the point on OA such that OP : PA = 1 : 2. Q is the point on AB such that AQ : QB = 2 : 1. Prove that PQ is parallel to OB, and state the ratio PQ : OB.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "AB = 3b − 3a, so AQ = ⅔(3b − 3a) = 2b − 2a. PA = ⅔ of OA = 2a.\nPQ = PA + AQ = 2a + 2b − 2a = 2b. OB = 3b, so PQ = ⅔OB: PQ is a multiple of OB, hence parallel. PQ : OB = 2 : 3.\n• AB = 3b − 3a (1)\n• AQ = 2b − 2a (1)\n• PA = 2a (1)\n• PQ = PA + AQ (1)\n• PQ = 2b (1)\n• PQ = ⅔OB so parallel, ratio 2 : 3 (1)"
      },
      {
        "q": "a = (3, −2), b = (−1, 4) and c = (7, −8). Find the values of the scalars m and n such that ma + nb = c.",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "ma + nb = (3m − n, −2m + 4n) = (7, −8).\n3m − n = 7 gives n = 3m − 7. Substitute: −2m + 4(3m − 7) = −8, so 10m − 28 = −8, 10m = 20, m = 2, n = −1.\nCheck: 2(3, −2) − (−1, 4) = (7, −8).\n• 3m − n = 7 (1)\n• −2m + 4n = −8 (1)\n• Correct method to eliminate or substitute (1)\n• m = 2 (1)\n• n = −1 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 5.1 */
  "5.1": {
    "topic": "Probability",
    "green": [
      {
        "q": "A bag contains 4 red, 6 blue and 10 green counters. One counter is taken at random. Work out the probability that it is red or blue.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Red or blue = 4 + 6 = 10 counters out of 20. P = 10/20 = 1/2.\n• 10 counters are red or blue, out of 20 (1)\n• 1/2 (1)"
      },
      {
        "q": "A drawing pin is dropped 150 times and lands point up 63 times. Estimate the probability that it lands point up, and the number of times it would land point up in 600 drops.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Relative frequency = 63/150 = 0.42. Expected in 600 drops = 0.42 × 600 = 252.\n• 0.42 (1)\n• 252 (1)"
      },
      {
        "q": "Two fair six-sided dice are rolled. Work out the probability that the difference between the two scores is 2.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Sample space: 36 equally likely outcomes. Difference 2: (1, 3), (3, 1), (2, 4), (4, 2), (3, 5), (5, 3), (4, 6), (6, 4) — 8 outcomes. P = 8/36 = 2/9.\n• Uses a 6 × 6 sample space of 36 outcomes (1)\n• Identifies 8 outcomes with difference 2 (1)\n• 8/36 = 2/9 (1)"
      },
      {
        "q": "A and B are mutually exclusive events. P(A) = 0.25 and P(B) = 0.4. Work out P((A ∪ B)′).",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Mutually exclusive, so P(A ∪ B) = 0.25 + 0.4 = 0.65. P((A ∪ B)′) = 1 − 0.65 = 0.35.\n• P(A ∪ B) = 0.65 (1)\n• 0.35 (1)"
      }
    ],
    "amber": [
      {
        "q": "A spinner has P(red) = 0.6 and P(blue) = 0.4. It is spun twice. Use a tree diagram to work out the probability that it lands on red exactly once.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Tree: first spin R 0.6 / B 0.4; second spin R 0.6 / B 0.4 on each branch.\nP(R then B) = 0.6 × 0.4 = 0.24; P(B then R) = 0.4 × 0.6 = 0.24. Total = 0.48.\n• Correct branch probabilities 0.6 and 0.4 on both sets of branches (1)\n• Multiplies along branches, e.g. 0.6 × 0.4 (1)\n• Adds the two outcomes RB and BR (1)\n• 0.48 (1)"
      },
      {
        "q": "A box has 5 dark and 3 milk chocolates. Lily eats two at random. Work out the probability that she eats one of each type.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Without replacement. P(dark then milk) = 5/8 × 3/7 = 15/56. P(milk then dark) = 3/8 × 5/7 = 15/56.\nTotal = 30/56 = 15/28.\n• Second-pick probabilities out of 7 (1)\n• 5/8 × 3/7 or 3/8 × 5/7 (1)\n• Adds both orders (1)\n• 30/56 = 15/28 (1)"
      },
      {
        "q": "200 people were asked whether they prefer tea or coffee. 120 were adults and 80 were children. 45 adults and 20 children preferred tea; everyone else preferred coffee. (a) A person who prefers tea is chosen at random. Find the probability they are an adult. (b) A person who prefers coffee is chosen at random. Find the probability they are a child.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Two-way table: tea 45 adults + 20 children = 65; coffee 75 adults + 60 children = 135.\n(a) 45/65 = 9/13. (b) 60/135 = 4/9.\n• Tea total 65 (1)\n• (a) 45/65 = 9/13 (1)\n• Coffee: 75 adults and 60 children, total 135 (1)\n• (b) 60/135 = 4/9 (1)"
      },
      {
        "q": "In a group of 50 people, 28 own a cat, 20 own a dog and 9 own neither. One person is chosen at random. Work out the probability that they own exactly one of the two pets.",
        "marks": 5,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Cat or dog = 50 − 9 = 41. Both = 28 + 20 − 41 = 7. Cat only = 21, dog only = 13.\nExactly one = 21 + 13 = 34. P = 34/50 = 17/25.\n• 41 own at least one pet (1)\n• 7 own both (1)\n• Cat only 21 and dog only 13 (1)\n• 34 own exactly one (1)\n• 34/50 = 17/25 (1)"
      }
    ],
    "red": [
      {
        "q": "A bag contains 4 red and 6 blue counters. Two counters are taken at random without replacement. Given that at least one of the counters is red, work out the probability that both are red.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "P(both red) = 4/10 × 3/9 = 12/90 = 2/15. P(no red) = 6/10 × 5/9 = 30/90 = 1/3.\nP(at least one red) = 1 − 1/3 = 2/3 = 60/90.\nP(both red | at least one red) = (12/90) ÷ (60/90) = 12/60 = 1/5.\n• M1: 4/10 × 3/9 (1)\n• A1: P(both red) = 2/15 (1)\n• P(no red) = 1/3 (1)\n• P(at least one red) = 2/3 (1)\n• Divides: P(both red) ÷ P(at least one red) (1)\n• 1/5 (1)"
      },
      {
        "q": "At a fair, a game costs 50p. Two fair dice are rolled; if the total is 10 or more the player wins £3. The game is played 360 times. Work out the expected profit or loss for the stall holder, and comment on whether the game is fair.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Totals of 10 or more: 10 (4,6)(5,5)(6,4), 11 (5,6)(6,5), 12 (6,6) — 6 of 36 outcomes, so P(win) = 1/6.\nExpected wins = 360 × 1/6 = 60. Takings = 360 × £0.50 = £180. Payouts = 60 × £3 = £180.\nExpected profit = £0, so on average neither side gains: the game is fair.\n• Lists the 6 outcomes with total 10 or more (1)\n• P(win) = 6/36 = 1/6 (1)\n• Expected wins 60 (1)\n• Takings £180 (1)\n• Payouts £180 (1)\n• Expected profit £0, the game is fair (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.1 */
  "6.1": {
    "topic": "Sampling, Charts & Scatter Graphs",
    "green": [
      {
        "q": "Explain the difference between a population and a sample.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "The population is the whole group you want to find out about; a sample is a smaller part of that group that is actually surveyed.\n• Population = the entire group being studied (1)\n• Sample = a selected part (subset) of the population (1)"
      },
      {
        "q": "A pie chart represents 72 people. Work out the angle of the sector that represents 14 people.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "360 ÷ 72 = 5° per person, so 14 × 5 = 70°.\n• 360 ÷ 72 = 5 or 14/72 × 360 (1)\n• 70° (1)"
      },
      {
        "q": "State what is meant by (a) positive correlation and (b) no correlation on a scatter graph.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) As one variable increases, the other tends to increase — points slope upwards.\n(b) There is no relationship between the variables — points are scattered with no pattern.\n• (a) both variables increase together (1)\n• (b) no relationship / no pattern (1)"
      },
      {
        "q": "In a pictogram, one cup symbol represents 4 cups of coffee sold. Monday shows 3 symbols, Tuesday 2¼ symbols and Wednesday 4½ symbols. Work out the total number of cups sold on the three days.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Monday 3 × 4 = 12, Tuesday 2¼ × 4 = 9, Wednesday 4½ × 4 = 18. Total = 12 + 9 + 18 = 39 cups.\n• Monday 12 (1)\n• Tuesday 9 and Wednesday 18 (1)\n• Total 39 (1)"
      }
    ],
    "amber": [
      {
        "q": "A council wants to know what residents think of a proposed leisure centre. It posts questionnaires to 100 homes on the street next to the proposed site. Give three criticisms of this sampling method and suggest one improvement.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Only one street is sampled, and it is next to the site, so the sample is biased and not random. Residents nearby may feel strongly (noise, traffic, convenience). Not everyone will return a postal questionnaire. A better method is a random sample from the whole council area.\n• Not random — only one street is chosen (1)\n• Biased — people living next to the site may have stronger views than the wider population (1)\n• Non-response: many people may not return a postal questionnaire, or the sample may be too small for a whole town (1)\n• Improvement: choose homes at random from a list of all residents across the whole area (and/or use a larger sample) (1)"
      },
      {
        "q": "In a survey, 25 people chose apple, 40 banana, 15 orange and 10 grapes as their favourite fruit. Work out the angles needed to draw a pie chart.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Total = 25 + 40 + 15 + 10 = 90. 360 ÷ 90 = 4° per person.\nApple 25 × 4 = 100°, banana 40 × 4 = 160°, orange 15 × 4 = 60°, grapes 10 × 4 = 40°. Check: 100 + 160 + 60 + 40 = 360°.\n• 360 ÷ 90 = 4 (1)\n• Apple 100° (1)\n• Banana 160° (1)\n• Orange 60° and grapes 40° (1)"
      },
      {
        "q": "Seven students' maths and physics marks are: (35, 40), (48, 50), (52, 57), (60, 62), (70, 72), (80, 30), (85, 88).\n(a) Describe the correlation.\n(b) Identify the outlier and suggest a reason for it.\n(c) Ignoring the outlier, estimate the physics mark of a student who scored 65 in maths.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Ignoring one point, the marks show strong positive correlation: higher maths marks go with higher physics marks.\n(b) (80, 30) does not fit the pattern — e.g. the student was ill or missed part of the physics exam.\n(c) A line of best fit through the other points gives about 68 for a maths mark of 65.\n• Positive correlation (1)\n• Outlier (80, 30) identified (1)\n• Sensible reason, e.g. absent/ill for physics (1)\n• Estimate in range 63 to 72 (1)"
      },
      {
        "q": "A household's electricity use (kWh) each quarter was: 2024: Q1 900, Q2 620, Q3 480, Q4 850; 2025: Q1 870, Q2 600, Q3 450, Q4 820. Describe the seasonal pattern and the overall trend, using figures to support your answer.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Each year use is highest in Q1 (winter) and lowest in Q3 (summer), e.g. 900 vs 480 in 2024. Every quarter in 2025 is lower than the same quarter in 2024 (totals 2850 kWh and 2740 kWh), so the trend is slightly downward.\n• Seasonal: highest in Q1/winter, lowest in Q3/summer (1)\n• Trend: decreasing overall (1)\n• Supported with figures, e.g. totals 2850 → 2740 or each quarter 20–30 kWh lower (1)"
      }
    ],
    "red": [
      {
        "q": "A school has 1500 students. A random sample of 75 students was asked how they travel to school: 30 walk, 25 take the bus and 20 come by car.\n(a) Estimate how many students in the whole school travel by bus.\n(b) Work out the pie chart angles for the sample.\n(c) Comment on how reliable your estimate in (a) is likely to be.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) 25/75 = 1/3, and 1/3 × 1500 = 500 students.\n(b) 360 ÷ 75 = 4.8° per student: walk 30 × 4.8 = 144°, bus 25 × 4.8 = 120°, car 20 × 4.8 = 96° (total 360°).\n(c) The sample is random, so it should be fairly representative, but 75 is only 5% of the school; a larger sample would give a more reliable estimate.\n• 25/75 or 1/3 (1)\n• 500 (1)\n• 360 ÷ 75 = 4.8 (1)\n• Walk 144° (1)\n• Bus 120° and car 96° (1)\n• Valid comment: random so reasonably reliable, but a larger sample would be more reliable (1)"
      },
      {
        "q": "The engine size (litres) and fuel economy (miles per gallon) of 8 cars are: (1.0, 58), (1.2, 55), (1.4, 50), (1.6, 46), (1.8, 44), (2.0, 40), (2.5, 34), (3.0, 28).\n(a) Describe the correlation and interpret it in context.\n(b) A line of best fit passes through (1.0, 58) and (3.0, 28). Find its equation and use it to estimate the fuel economy of a 2.2-litre car.\n(c) Explain why using the line for a 5-litre engine would be unreliable.\n(d) Does the data prove that bigger engines cause worse fuel economy? Explain.",
        "marks": 7,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Strong negative correlation: cars with bigger engines tend to travel fewer miles per gallon.\n(b) Gradient = (28 − 58)/(3.0 − 1.0) = −30/2 = −15. y = −15x + c, 58 = −15 + c, c = 73, so y = −15x + 73. At x = 2.2: y = −33 + 73 = 40 mpg.\n(c) 5 litres is outside the data range (1.0–3.0), so this is extrapolation; the line would give −2 mpg, which is impossible.\n(d) No — correlation does not prove causation; other factors (car weight, type) may be involved.\n• Negative correlation (1)\n• Interpretation in context (1)\n• Gradient −15 (1)\n• y = −15x + 73 (1)\n• 40 mpg (1)\n• Extrapolation outside data range / gives impossible value (1)\n• Correlation does not imply causation (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.2 */
  "6.2": {
    "topic": "Averages, Spread & Grouped Data",
    "green": [
      {
        "q": "Work out the mean and the range of 7, 3, 9, 5, 11.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Mean = (7 + 3 + 9 + 5 + 11) ÷ 5 = 35 ÷ 5 = 7. Range = 11 − 3 = 8.\n• Mean = 7 (1)\n• Range = 8 (1)"
      },
      {
        "q": "Explain the difference between discrete data and continuous data. Give an example of each.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Discrete data can only take particular (usually whole-number) values, e.g. number of children in a family. Continuous data can take any value in a range and is measured, e.g. height or time.\n• Discrete: separate/counted values with example (1)\n• Continuous: any value in a range/measured with example (1)"
      },
      {
        "q": "The number of pets owned by 20 people is: 0 pets – 5 people, 1 pet – 8 people, 2 pets – 4 people, 3 pets – 3 people. Work out the mean number of pets per person.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Σfx = 0 × 5 + 1 × 8 + 2 × 4 + 3 × 3 = 0 + 8 + 8 + 9 = 25. Mean = 25 ÷ 20 = 1.25.\n• Multiplying each value by its frequency (1)\n• Σfx = 25 (1)\n• 25 ÷ 20 = 1.25 (1)"
      },
      {
        "q": "Work out the interquartile range of 4, 6, 7, 9, 12, 13, 15.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "There are 7 values. Lower quartile = 2nd value = 6; upper quartile = 6th value = 13. IQR = 13 − 6 = 7.\n• LQ = 6 and UQ = 13 (1)\n• IQR = 7 (1)"
      }
    ],
    "amber": [
      {
        "q": "The lengths of 40 worms (cm) are grouped: 0 < l ≤ 5: 4, 5 < l ≤ 10: 11, 10 < l ≤ 15: 15, 15 < l ≤ 20: 10. (a) Work out an estimate for the mean length. (b) Write down the modal class. (c) Which class contains the median?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Midpoints 2.5, 7.5, 12.5, 17.5. Σfx = 10 + 82.5 + 187.5 + 175 = 455. Mean ≈ 455 ÷ 40 = 11.375 ≈ 11.4 cm.\n(b) 10 < l ≤ 15.\n(c) Median is the 20.5th value; cumulative frequencies 4, 15, 30 so it is in 10 < l ≤ 15.\n• Midpoints × frequencies (1)\n• 11.4 cm (accept 11.375) (1)\n• Modal class 10 < l ≤ 15 (1)\n• Median class 10 < l ≤ 15 (1)"
      },
      {
        "q": "Group X's reaction times (seconds) are 0.38, 0.41, 0.45, 0.40, 0.46. Group Y has a mean reaction time of 0.36 s and a range of 0.31 s. Work out the mean and range for Group X and compare the two groups.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Mean X = 2.10 ÷ 5 = 0.42 s. Range X = 0.46 − 0.38 = 0.08 s.\nGroup Y has a lower mean, so Y reacted faster on average. Group X has a much smaller range, so X's times were more consistent.\n• Mean X = 0.42 s (1)\n• Range X = 0.08 s (1)\n• Comparison of averages in context: Y faster on average (1)\n• Comparison of spread in context: X more consistent (1)"
      },
      {
        "q": "Times (minutes) are grouped: 0 < t ≤ 5: 10, 5 < t ≤ 10: 16, 10 < t ≤ 20: 18, 20 < t ≤ 40: 12. (a) Work out the frequency density for each class. (b) Describe how you would draw the histogram. (c) Estimate how many times are between 15 and 30 minutes.",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) FD = frequency ÷ class width: 10 ÷ 5 = 2, 16 ÷ 5 = 3.2, 18 ÷ 10 = 1.8, 12 ÷ 20 = 0.6.\n(b) Time on a continuous horizontal scale, frequency density on the vertical axis, bars with no gaps whose widths are the class widths and heights the frequency densities.\n(c) 15 to 20: 5 × 1.8 = 9; 20 to 30: 10 × 0.6 = 6. Total ≈ 15.\n• FD = frequency ÷ class width used (1)\n• All four FDs correct: 2, 3.2, 1.8, 0.6 (1)\n• Axes and bar widths/heights described correctly (1)\n• 5 × 1.8 = 9 and 10 × 0.6 = 6 (1)\n• Estimate 15 (1)"
      },
      {
        "q": "The mean of 6 numbers is 12. A seventh number is added and the mean becomes 13. Work out the seventh number.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Total of 6 numbers = 6 × 12 = 72. Total of 7 numbers = 7 × 13 = 91. Seventh number = 91 − 72 = 19.\n• 6 × 12 = 72 (1)\n• 7 × 13 = 91 (1)\n• 19 (1)"
      }
    ],
    "red": [
      {
        "q": "The times (seconds) for boys to complete a puzzle are summarised as: minimum 32, lower quartile 38, median 45, upper quartile 52, maximum 66. The girls' times are: 30, 34, 35, 39, 40, 42, 44, 46, 47, 50, 58. (a) Find the median, quartiles and interquartile range for the girls. (b) Compare the times of the boys and the girls.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) 11 values: median = 6th = 42, LQ = 3rd = 35, UQ = 9th = 47, IQR = 47 − 35 = 12.\nBoys' IQR = 52 − 38 = 14.\n(b) The girls' median (42 s) is lower than the boys' (45 s), so the girls were faster on average. The girls' IQR (12 s) is smaller than the boys' (14 s), so the girls' times were more consistent.\n• Median 42 (1)\n• LQ 35 and UQ 47 (1)\n• Girls' IQR 12 (1)\n• Boys' IQR 14 (1)\n• Compares medians in context: girls faster on average (1)\n• Compares IQRs in context: girls more consistent (1)"
      },
      {
        "q": "The test scores of 30 students in Class A are grouped: 0 < s ≤ 20: 2, 20 < s ≤ 40: 5, 40 < s ≤ 60: 9, 60 < s ≤ 80: 10, 80 < s ≤ 100: 4. Class B's estimated mean score is 58. (a) Work out an estimate for the mean score of Class A. (b) Compare the classes and explain one limitation of your comparison.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Midpoints 10, 30, 50, 70, 90. Σfx = 20 + 150 + 450 + 700 + 360 = 1680. Mean ≈ 1680 ÷ 30 = 56.\n(b) Class B's mean (58) is higher than Class A's (56), so Class B did slightly better on average. However, both means are estimates from grouped data (midpoints used), and no measure of spread is given, so the comparison is limited.\n• Midpoints used (1)\n• Products fx found (1)\n• Σfx = 1680 (1)\n• Mean = 56 (1)\n• Class B higher on average (1)\n• Limitation: estimates from grouped data / no spread compared (1)"
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATHS_AQA_GCSE_WRITTEN };
}
