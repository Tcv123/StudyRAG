/*
 * Pearson Edexcel GCSE Mathematics (1MA1) — Written / Short-Answer Question Bank (also the AI-feedback bank)
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (1-3 marks), 'amber' (3-5 marks), 'red' (5-7 marks) — difficulty, NOT exam tier.
 * higher: true = Higher-tier-only content (the exam tier).
 * modelAnswer: worked solution then "• point (n)" mark lines.
 */

const MATHS_EDEXCEL_GCSE_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  "1.1": {
    "topic": "Structure & Calculation",
    "green": [
      {
        "q": "Write 168 as a product of its prime factors. Give your answer in index form.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "168 = 2 × 84 = 2 × 2 × 42 = 2 × 2 × 2 × 21 = 2 × 2 × 2 × 3 × 7\n• Correct method, e.g. factor tree or repeated division by primes (1)\n• 2³ × 3 × 7 (1)"
      },
      {
        "q": "Work out 18 − (2 + 4)² ÷ 4 × 3. Show each step.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Brackets: 2 + 4 = 6. Powers: 6² = 36. Divide and multiply left to right: 36 ÷ 4 = 9, 9 × 3 = 27. Then 18 − 27 = −9\n• Correct order: 36 ÷ 4 × 3 = 27 (1)\n• −9 (1)"
      },
      {
        "q": "Write these numbers in order, smallest first. Show your working.\n0.6,  5/8,  −0.65,  −2/3",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "5/8 = 0.625 and −2/3 = −0.666…\nNegatives: −0.666… < −0.65. Positives: 0.6 < 0.625.\nOrder: −2/3, −0.65, 0.6, 5/8\n• Converts 5/8 to 0.625 (1)\n• Converts −2/3 to −0.666… or −0.67 (1)\n• Correct order −2/3, −0.65, 0.6, 5/8 (1)"
      },
      {
        "q": "A pizza takeaway offers 3 bases, 8 toppings and 2 sizes. Each pizza has one base, one topping and one size. Work out how many different pizzas are possible.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Using the product rule: 3 × 8 × 2 = 48\n• 3 × 8 × 2 (1)\n• 48 (1)"
      }
    ],
    "amber": [
      {
        "q": "Use prime factorisation to find the highest common factor (HCF) and the lowest common multiple (LCM) of 72 and 120.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "72 = 2³ × 3²\n120 = 2³ × 3 × 5\nHCF = lowest powers of shared primes = 2³ × 3 = 24\nLCM = highest powers of all primes = 2³ × 3² × 5 = 360\n• 72 = 2³ × 3² (1)\n• 120 = 2³ × 3 × 5 (1)\n• HCF = 24 (1)\n• LCM = 360 (1)"
      },
      {
        "q": "You are given that 67 × 38 = 2546. Without a calculator, write down the value of (a) 6.7 × 3.8, (b) 254.6 ÷ 0.38, (c) 0.067 × 380. Explain how you used the given fact.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Both numbers ÷ 10, so the answer ÷ 100: 25.46\n(b) 2546 ÷ 38 = 67. 254.6 is 2546 ÷ 10 and 0.38 is 38 ÷ 100, so the answer is 67 × 10 = 670\n(c) 0.067 = 67 ÷ 1000 and 380 = 38 × 10, so the answer is 2546 ÷ 100 = 25.46\n• (a) 25.46 (1)\n• (b) 670 (1)\n• (c) 25.46 with reasoning about powers of 10 (1)"
      },
      {
        "q": "A cinema charges £8.75 for an adult ticket and £5.40 for a child ticket. A family buys 2 adult tickets and 3 child tickets. They pay with three £20 notes. Work out how much change they should get. (Non-calculator)",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Adults: 2 × 8.75 = £17.50\nChildren: 3 × 5.40 = £16.20\nTotal: 17.50 + 16.20 = £33.70\nChange: 60 − 33.70 = £26.30\n• 2 × 8.75 = 17.50 (1)\n• 3 × 5.40 = 16.20 (1)\n• 60 − their total (1)\n• £26.30 (1)"
      },
      {
        "q": "A school offers 4 art options, 3 music options and 5 sport options. Each student chooses EITHER one art option and one music option, OR one music option and one sport option. How many different choices are possible?",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Art and music: 4 × 3 = 12\nMusic and sport: 3 × 5 = 15\nThe two cases are alternatives, so add: 12 + 15 = 27\n• 4 × 3 = 12 (1)\n• 3 × 5 = 15 (1)\n• Adds the two separate cases (1)\n• 27 (1)"
      }
    ],
    "red": [
      {
        "q": "Three runners go round a circular track. Runner A takes 72 seconds per lap, runner B takes 90 seconds and runner C takes 120 seconds. They start together from the start line at 10:00:00 and run at constant speeds.\n(a) After how many seconds are all three next at the start line together?\n(b) At what time is this?\n(c) How many complete laps has runner A run by then?",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "72 = 2³ × 3², 90 = 2 × 3² × 5, 120 = 2³ × 3 × 5\nLCM = 2³ × 3² × 5 = 360 seconds\n(b) 360 s = 6 minutes, so 10:06:00\n(c) 360 ÷ 72 = 5 laps\n• Prime factorisation of all three or lists of multiples (1)\n• Uses highest powers / common multiple method (1)\n• 360 seconds (1)\n• 10:06:00 (1)\n• 360 ÷ 72 (1)\n• 5 laps (1)"
      },
      {
        "q": "A PIN is made of 4 digits from 0 to 9.\n(a) How many PINs have no repeated digit?\n(b) How many PINs with no repeated digit start with an odd digit?\n(c) Digits may now be repeated. How many PINs contain at least one 7?",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) 10 × 9 × 8 × 7 = 5040\n(b) First digit: 5 odd choices, then 9 × 8 × 7: 5 × 9 × 8 × 7 = 2520\n(c) All PINs: 10⁴ = 10 000. PINs with no 7: 9⁴ = 6561. At least one 7: 10 000 − 6561 = 3439\n• 10 × 9 × 8 × 7 (1)\n• 5040 (1)\n• 5 × 9 × 8 × 7 (1)\n• 2520 (1)\n• 10 000 − 9⁴ (1)\n• 3439 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.2 */
  "1.2": {
    "topic": "Fractions, Decimals & Percentages",
    "green": [
      {
        "q": "Work out 5/8 + 2/3. Give your answer as a mixed number.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "LCM of 8 and 3 is 24: 15/24 + 16/24 = 31/24 = 1 7/24\n• Common denominator, e.g. 15/24 + 16/24 (1)\n• 1 7/24 (1)"
      },
      {
        "q": "Write 0.36 as (a) a fraction in its simplest form, (b) a percentage.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) 0.36 = 36/100 = 9/25\n(b) 0.36 × 100 = 36%\n• 9/25 (1)\n• 36% (1)"
      },
      {
        "q": "Work out 3/8 of £96 and 35% of £96. Which is larger, and by how much?",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "3/8 of 96 = 96 ÷ 8 × 3 = £36\n35% of 96: 10% = 9.60, 30% = 28.80, 5% = 4.80, so 35% = £33.60\n3/8 is larger by 36 − 33.60 = £2.40\n• £36 (1)\n• £33.60 (1)\n• 3/8 larger by £2.40 (1)"
      },
      {
        "q": "Write 0.888… (8 recurring) as a fraction. Show your method.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Let x = 0.888…\n10x = 8.888…\n10x − x: 9x = 8, so x = 8/9\n• 10x − x = 8, i.e. 9x = 8 (1)\n• 8/9 (1)"
      }
    ],
    "amber": [
      {
        "q": "Work out 4⅕ ÷ 1¾. Give your answer as a mixed number in its simplest form.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "4⅕ = 21/5 and 1¾ = 7/4\n21/5 ÷ 7/4 = 21/5 × 4/7 = 84/35 = 12/5 = 2⅖\n• Both as improper fractions: 21/5 and 7/4 (1)\n• Multiplies by the reciprocal: 21/5 × 4/7 (1)\n• 2⅖ (1)"
      },
      {
        "q": "Decrease £360 by 17.5% using a single multiplier. Explain why your multiplier works.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "After a 17.5% decrease, 100% − 17.5% = 82.5% of the amount remains, so the multiplier is 0.825\n360 × 0.825 = £297\n• Multiplier 0.825 (1)\n• Explanation: 100% − 17.5% = 82.5% remains (1)\n• £297 (1)"
      },
      {
        "q": "A choir has sopranos, altos and tenors in the ratio 5 : 4 : 3.\n(a) What fraction of the choir are altos?\n(b) 3/5 of the sopranos are girls. What fraction of the whole choir are soprano girls?\n(c) The choir has 48 members. How many soprano girls are there?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) 4/(5 + 4 + 3) = 4/12 = 1/3\n(b) Sopranos are 5/12 of the choir: 3/5 × 5/12 = 3/12 = 1/4\n(c) 1/4 × 48 = 12\n• 1/3 (1)\n• 3/5 × 5/12 (1)\n• 1/4 (1)\n• 12 (1)"
      },
      {
        "q": "Prove that 0.4181818… (18 recurring) = 23/55",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Let x = 0.41818…\n1000x = 418.1818…\n10x = 4.1818…\n990x = 414\nx = 414/990 = 23/55\n• 1000x = 418.18… and 10x = 4.18… (1)\n• Subtracts: 990x = 414 (1)\n• x = 414/990 (1)\n• Simplifies to 23/55 (1)"
      }
    ],
    "red": [
      {
        "q": "A club raises money in three ways. 2/7 of the total comes from a quiz. 3/5 of the remainder comes from a raffle. The rest, £840, comes from sponsors.\n(a) Work out the total amount raised.\n(b) What percentage of the total came from the raffle? Give your answer to 1 decimal place.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Remainder after quiz = 5/7. Raffle = 3/5 × 5/7 = 3/7 of the total.\nSponsors = 5/7 − 3/7 = 2/7 of the total = £840\n1/7 = £420, so total = £2940\nRaffle = 3/7 × 2940 = £1260; 1260 ÷ 2940 × 100 = 42.857…% = 42.9%\n• Remainder 5/7 (1)\n• Raffle 3/7 of total (1)\n• Sponsors 2/7 of total (1)\n• £2940 (1)\n• 1260 ÷ 2940 × 100 (1)\n• 42.9% (1)"
      },
      {
        "q": "(a) Show that 0.2454545… (45 recurring) = 27/110\n(b) Hence write 2.454545… as a fraction in its simplest form.\n(c) Explain, using the prime factors of 110, why 27/110 is a recurring decimal.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) x = 0.24545…, 1000x = 245.4545…, 10x = 2.4545…\n990x = 243, x = 243/990 = 27/110\n(b) 2.4545… = 10 × 0.24545… = 270/110 = 27/11\n(c) 110 = 2 × 5 × 11. 27/110 is in its simplest form and the denominator has a prime factor (11) other than 2 or 5, so the decimal cannot terminate\n• 1000x and 10x written (1)\n• 990x = 243 (1)\n• 243/990 = 27/110 (1)\n• Multiplies by 10 (1)\n• 27/11 (1)\n• 110 = 2 × 5 × 11 with factor 11 explained (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.3 */
  "1.3": {
    "topic": "Measures, Accuracy & Bounds",
    "green": [
      {
        "q": "Round 48.0573 to (a) 2 decimal places (b) 1 significant figure.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) The third decimal digit is 7, so round the 5 up.\n(b) The first significant figure is 4 and the next digit is 8, so round up to 50.\n• (a) 48.06 (1)\n• (b) 50 (1)"
      },
      {
        "q": "(a) Write 2.75 hours in hours and minutes. (b) Write 1 hour 48 minutes in hours, as a decimal.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) 0.75 × 60 = 45 minutes, so 2 hours 45 minutes.\n(b) 48 ÷ 60 = 0.8, so 1.8 hours.\n• (a) 2 hours 45 minutes (1)\n• (b) 1.8 hours (1)"
      },
      {
        "q": "The weight w of a suitcase is 70 kg, correct to the nearest 5 kg. Write down the error interval for w.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Half of 5 kg is 2.5 kg, so the limits are 70 − 2.5 and 70 + 2.5.\n• Lower limit 67.5 with ≤ (1)\n• Upper limit 72.5 with < : 67.5 ≤ w < 72.5 (1)"
      },
      {
        "q": "By rounding each number to 1 significant figure, work out an estimate for (61.4 + 18.9) ÷ (0.487 × 4.2)",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "61.4 ≈ 60, 18.9 ≈ 20, 0.487 ≈ 0.5, 4.2 ≈ 4\nNumerator 60 + 20 = 80; denominator 0.5 × 4 = 2\n80 ÷ 2 = 40\n• Each number rounded correctly to 1 s.f. (1)\n• 80 and 2 (1)\n• Estimate = 40 (1)"
      }
    ],
    "amber": [
      {
        "q": "A number y is truncated to 1 decimal place. The result is 3.8. Kim says y could be 3.85. Ali says y could be 3.79. Write down the error interval for y and say who is correct.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Truncating to 1 d.p. chops off the later digits, so y is at least 3.8 but less than 3.9.\n3.85 truncates to 3.8, but 3.79 truncates to 3.7.\n• 3.8 ≤ y (1)\n• y < 3.9, so 3.8 ≤ y < 3.9 (1)\n• Kim is correct; 3.79 is less than 3.8 so Ali is wrong (1)"
      },
      {
        "q": "A runner completes a 5 km race in 22 minutes 30 seconds. Work out her average speed (a) in km/h (b) in m/s, giving your answer to 3 significant figures.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "22 min 30 s = 22.5 minutes = 0.375 hours\n(a) 5 ÷ 0.375 = 13.33… km/h\n(b) 22.5 minutes = 1350 seconds; 5000 ÷ 1350 = 3.7037… m/s\n• Time as 0.375 hours (1)\n• (a) 13.3 km/h (13.33…) (1)\n• Uses 5000 m and 1350 s (1)\n• (b) 3.70 m/s (1)"
      },
      {
        "q": "x = 14.2 and y = 0.6, both correct to 1 decimal place. Work out (a) the upper bound of x ÷ y (b) the lower bound of x ÷ y. Give your answers to 3 significant figures.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Bounds: 14.15 ≤ x < 14.25 and 0.55 ≤ y < 0.65\nUpper bound of x ÷ y = UB(x) ÷ LB(y) = 14.25 ÷ 0.55 = 25.909…\nLower bound of x ÷ y = LB(x) ÷ UB(y) = 14.15 ÷ 0.65 = 21.769…\n• Bounds of x and y all correct (1)\n• Uses UB(x) ÷ LB(y) for the upper bound (1)\n• (a) 25.9 (1)\n• (b) 21.8 (1)"
      },
      {
        "q": "A rectangle has area 96 cm², correct to the nearest cm². Its length is 12.0 cm, correct to 1 decimal place. Work out the upper bound of the width of the rectangle. Give your answer to 3 significant figures.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Width = area ÷ length, so use the largest area and the smallest length.\nUB(area) = 96.5, LB(length) = 11.95\n96.5 ÷ 11.95 = 8.0753… cm\n• Upper bound of area 96.5 (1)\n• Lower bound of length 11.95 (1)\n• 96.5 ÷ 11.95 (1)\n• 8.08 cm (1)"
      }
    ],
    "red": [
      {
        "q": "A cuboid tank has a rectangular base 2.4 m by 1.5 m, both correct to the nearest 0.1 m. It contains 4.32 m³ of water, correct to 2 decimal places. Work out the upper and lower bounds of the depth of the water. Use them to give the depth to a suitable degree of accuracy, and explain your answer.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Depth = volume ÷ base area\nBase: 2.35 ≤ length < 2.45, 1.45 ≤ width < 1.55; volume: 4.315 ≤ V < 4.325\nUpper bound of depth = 4.325 ÷ (2.35 × 1.45) = 4.325 ÷ 3.4075 = 1.269… m\nLower bound of depth = 4.315 ÷ (2.45 × 1.55) = 4.315 ÷ 3.7975 = 1.136… m\nTo 2 s.f. these are 1.3 and 1.1 (different); to 1 s.f. both are 1.\n• Bounds of length and width (2.35, 2.45, 1.45, 1.55) (1)\n• Bounds of volume 4.315 and 4.325 (1)\n• Upper bound uses UB(V) ÷ (LB × LB) (1)\n• Upper bound 1.269… and lower bound 1.136… (1)\n• Depth = 1 m (1)\n• Reason: both bounds round to 1 to 1 s.f. but not to the same value to 2 s.f. (1)"
      },
      {
        "q": "A garden pond is a cuboid 3.2 m long, 1.5 m wide and 60 cm deep. It is filled with a hose at 8 litres per minute, starting at 9:15 am. (a) At what time will the pond be full? (b) Water costs £2.15 per m³. Work out the cost of the water needed to fill the pond.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "60 cm = 0.6 m\nVolume = 3.2 × 1.5 × 0.6 = 2.88 m³ = 2880 litres\nTime = 2880 ÷ 8 = 360 minutes = 6 hours, so full at 3:15 pm\nCost = 2.88 × £2.15 = £6.192 ≈ £6.19\n• Converts 60 cm to 0.6 m (1)\n• Volume 2.88 m³ (1)\n• 2880 litres (1)\n• 360 minutes (6 hours) (1)\n• (a) 3:15 pm (1)\n• (b) £6.19 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.4 */
  "1.4": {
    "topic": "Powers, Roots, Surds & Standard Form",
    "green": [
      {
        "q": "Write 0.000047 in standard form, and write 3.9 × 10⁷ as an ordinary number.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Move the decimal point 5 places to the right to get 4.7, so the power is −5.\n3.9 × 10 000 000 = 39 000 000\n• 4.7 × 10⁻⁵ (1)\n• 39 000 000 (1)"
      },
      {
        "q": "Simplify 2⁹ ÷ 2⁴, giving your answer as a power of 2. Then work out its value.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Subtract the indices: 9 − 4 = 5\n2⁵ = 2 × 2 × 2 × 2 × 2 = 32\n• 2⁵ (1)\n• 32 (1)"
      },
      {
        "q": "Work out the value of 3⁻² × 3⁵.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Add the indices: −2 + 5 = 3\n3³ = 27\n• 3³ seen (1)\n• 27 (1)"
      },
      {
        "q": "A semicircle has diameter 14 cm. Work out (a) its area (b) its perimeter. Give both answers in terms of π.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Radius = 14 ÷ 2 = 7 cm\nArea = ½ × π × 7² = 49π/2 = 24.5π cm²\nPerimeter = curved part + diameter = ½ × π × 14 + 14 = 7π + 14 cm\n• Radius 7 used (1)\n• (a) 24.5π cm² (1)\n• (b) 7π + 14 cm (1)"
      }
    ],
    "amber": [
      {
        "q": "(a) Simplify √12 × √15, giving your answer in the form a√b. (b) Rationalise the denominator of 15/√5 and simplify.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) √12 × √15 = √180 = √36 × √5 = 6√5\n(b) 15/√5 × √5/√5 = 15√5/5 = 3√5\n• √180 or 2√3 × √15 seen (1)\n• (a) 6√5 (1)\n• Multiplies by √5/√5 (1)\n• (b) 3√5 (1)"
      },
      {
        "q": "The population of the UK is 6.8 × 10⁷. The population of the world is 8.1 × 10⁹. (a) Work out the UK population as a percentage of the world population. Give your answer to 2 significant figures. (b) Work out the difference between the two populations. Give your answer in standard form.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) (6.8 × 10⁷) ÷ (8.1 × 10⁹) × 100 = 0.8395…%\n(b) 8 100 000 000 − 68 000 000 = 8 032 000 000\n• Divides 6.8 × 10⁷ by 8.1 × 10⁹ (1)\n• × 100 giving 0.839… (1)\n• (a) 0.84% (1)\n• (b) 8.032 × 10⁹ (1)"
      },
      {
        "q": "Use the laws of indices to explain why 2⁻³ = 1/8. Then write down the value of (1/2)⁻³.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "2² ÷ 2⁵ = 2²⁻⁵ = 2⁻³ by the division law.\nBut 2² ÷ 2⁵ = 4 ÷ 32 = 1/8, so 2⁻³ = 1/8.\n(1/2)⁻³ = (2/1)³ = 8\n• Uses the division law, e.g. 2² ÷ 2⁵ = 2⁻³ (1)\n• Shows the same division equals 1/8 (1)\n• (1/2)⁻³ = 8 (1)"
      },
      {
        "q": "Without using a calculator, estimate ∛30 to 1 decimal place. Show how you decide.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "3³ = 27 and 4³ = 64, so ∛30 is between 3 and 4 (close to 3).\n3.1³ = 29.791 and 3.2³ = 32.768\n30 is much closer to 29.791 than to 32.768, so ∛30 ≈ 3.1\n• States ∛30 is between 3 and 4 (1)\n• 3.1³ = 29.791 (1)\n• 3.2³ = 32.768 (1)\n• ∛30 ≈ 3.1 (1)"
      }
    ],
    "red": [
      {
        "q": "A rectangle has area 20 cm². Its length is (3 + √5) cm. (a) Show that the width of the rectangle is (15 − 5√5) cm. (b) Work out the perimeter of the rectangle. Give your answer in the form a + b√5 where a and b are integers.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) Width = 20/(3 + √5) = 20(3 − √5)/((3 + √5)(3 − √5)) = 20(3 − √5)/(9 − 5) = 5(3 − √5) = 15 − 5√5\n(b) Length + width = (3 + √5) + (15 − 5√5) = 18 − 4√5\nPerimeter = 2(18 − 4√5) = 36 − 8√5 cm\n• Width = 20 ÷ (3 + √5) (1)\n• Multiplies numerator and denominator by (3 − √5) (1)\n• Denominator 9 − 5 = 4 (1)\n• Width = 15 − 5√5 shown (1)\n• Length + width = 18 − 4√5 (1)\n• Perimeter = 36 − 8√5 cm (1)"
      },
      {
        "q": "At its closest, Mars is about 5.5 × 10⁷ km from the Earth. Radio signals travel at 3 × 10⁵ km per second. (a) How long does a radio signal take to travel from the Earth to Mars? Give your answer in minutes and seconds, to the nearest second. (b) A probe travels the same distance at an average speed of 2.5 × 10⁴ km/h. How many days does the journey take? Give your answer to the nearest day.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) (5.5 × 10⁷) ÷ (3 × 10⁵) = 183.33… seconds = 3 minutes 3 seconds\n(b) (5.5 × 10⁷) ÷ (2.5 × 10⁴) = 2.2 × 10³ = 2200 hours\n2200 ÷ 24 = 91.66… days ≈ 92 days\n• Divides distance by speed (1)\n• 183.3… seconds (1)\n• (a) 3 minutes 3 seconds (1)\n• 2.2 × 10³ hours (1)\n• ÷ 24 (1)\n• (b) 92 days (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.1 */
  "2.1": {
    "topic": "Algebraic Notation & Manipulation",
    "green": [
      {
        "q": "Simplify 9p − 4q + 2p + 7q − q.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "p terms: 9p + 2p = 11p. q terms: −4q + 7q − q = 2q.\n• Collects one type of term correctly, e.g. 11p or 2q (1)\n• 11p + 2q (1)"
      },
      {
        "q": "Expand and simplify 3(2x − 5) − 2(x − 4).",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "3(2x − 5) = 6x − 15 and −2(x − 4) = −2x + 8 (minus × minus gives plus).\n6x − 15 − 2x + 8 = 4x − 7\n• Both brackets expanded correctly: 6x − 15 − 2x + 8 (1)\n• 4x − 7 (1)"
      },
      {
        "q": "Factorise x² − 5x − 24.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Need two numbers with product −24 and sum −5: −8 and +3.\nx² − 5x − 24 = (x − 8)(x + 3). Check: −8x + 3x = −5x.\n• Identifies −8 and 3, or (x ± 8)(x ± 3) (1)\n• (x − 8)(x + 3) (1)"
      },
      {
        "q": "Factorise 3x² + 14x + 8.",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "ac = 3 × 8 = 24. Two numbers with product 24 and sum 14: 12 and 2.\n3x² + 12x + 2x + 8 = 3x(x + 4) + 2(x + 4) = (3x + 2)(x + 4).\nCheck: 3x² + 12x + 2x + 8 = 3x² + 14x + 8.\n• Finds 12 and 2, or sets up (3x ± a)(x ± b) with ab = 8 (1)\n• Splits the middle term and factorises in pairs correctly (1)\n• (3x + 2)(x + 4) (1)"
      }
    ],
    "amber": [
      {
        "q": "Expand and simplify (2x + 3)² − (x − 5)(x + 5).",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(2x + 3)² = (2x + 3)(2x + 3) = 4x² + 6x + 6x + 9 = 4x² + 12x + 9\n(x − 5)(x + 5) = x² − 25 (difference of two squares)\n4x² + 12x + 9 − (x² − 25) = 4x² + 12x + 9 − x² + 25 = 3x² + 12x + 34\n• (2x + 3)² = 4x² + 12x + 9 (1)\n• (x − 5)(x + 5) = x² − 25 (1)\n• Subtracts with correct sign changes: − x² + 25 (1)\n• 3x² + 12x + 34 (1)"
      },
      {
        "q": "Expand and simplify (4 + √3)(2 − √3).\nGive your answer in the form a + b√3, where a and b are integers.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "4 × 2 = 8, 4 × (−√3) = −4√3, √3 × 2 = 2√3, √3 × (−√3) = −3\n8 − 4√3 + 2√3 − 3 = 5 − 2√3\n• Four terms with at least three correct (1)\n• Uses √3 × √3 = 3 correctly (1)\n• 5 − 2√3 (a = 5, b = −2) (1)"
      },
      {
        "q": "Expand and simplify (x + 5)(2x − 1)(x − 3).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(x + 5)(2x − 1) = 2x² − x + 10x − 5 = 2x² + 9x − 5\n(2x² + 9x − 5)(x − 3) = 2x³ − 6x² + 9x² − 27x − 5x + 15 = 2x³ + 3x² − 32x + 15\nCheck with x = 1: 6 × 1 × (−2) = −12 and 2 + 3 − 32 + 15 = −12.\n• Expands one pair correctly, e.g. 2x² + 9x − 5 (1)\n• Multiplies by the third bracket giving six terms (1)\n• At least four of the six terms correct (1)\n• 2x³ + 3x² − 32x + 15 (1)"
      },
      {
        "q": "Simplify fully (3x²y⁵)³ ÷ 9x⁴y⁷.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(3x²y⁵)³ = 3³ × x⁶ × y¹⁵ = 27x⁶y¹⁵\n27x⁶y¹⁵ ÷ 9x⁴y⁷ = 3x⁶⁻⁴y¹⁵⁻⁷ = 3x²y⁸\n• 27x⁶y¹⁵ (1)\n• Correct division for at least two parts, e.g. 3, x², y⁸ (1)\n• 3x²y⁸ (1)"
      }
    ],
    "red": [
      {
        "q": "Simplify fully (x² − x − 12)/(x² − 16) ÷ (2x + 6)/(x² + 4x).",
        "marks": 5,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Factorise everything:\nx² − x − 12 = (x − 4)(x + 3); x² − 16 = (x + 4)(x − 4); 2x + 6 = 2(x + 3); x² + 4x = x(x + 4)\nTurn the division into multiplication by the reciprocal:\n(x − 4)(x + 3)/((x + 4)(x − 4)) × x(x + 4)/(2(x + 3))\nCancel (x − 4), (x + 3) and (x + 4): answer x/2\n• Factorises x² − x − 12 = (x − 4)(x + 3) (1)\n• Factorises x² − 16 = (x + 4)(x − 4) (1)\n• Factorises 2(x + 3) and x(x + 4) (1)\n• Inverts the second fraction and multiplies (1)\n• x/2 (1)"
      },
      {
        "q": "A rectangular garden measures (3x + 2) m by (x + 4) m.\nA square patio with sides of length (x + 1) m is laid in the garden. The rest of the garden is grass.\n(a) Show that the area of grass, in m², is 2x² + 12x + 7.\n(b) Work out the area of grass when x = 2.5.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Garden: (3x + 2)(x + 4) = 3x² + 12x + 2x + 8 = 3x² + 14x + 8\nPatio: (x + 1)² = x² + 2x + 1\nGrass: 3x² + 14x + 8 − (x² + 2x + 1) = 2x² + 12x + 7\n(b) 2(2.5)² + 12(2.5) + 7 = 12.5 + 30 + 7 = 49.5 m²\n(Check: 9.5 × 6.5 − 3.5² = 61.75 − 12.25 = 49.5)\n• (a) Garden area expanded: 3x² + 14x + 8 (1)\n• (a) Patio area expanded: x² + 2x + 1 (1)\n• (a) Subtracts, using a bracket for the patio area (1)\n• (a) Reaches 2x² + 12x + 7 with no errors (1)\n• (b) Substitutes x = 2.5 correctly (1)\n• (b) 49.5 m² (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.2 */
  "2.2": {
    "topic": "Formulae, Identities, Proof & Functions",
    "green": [
      {
        "q": "Make y the subject of 5x − 2y = 9.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "5x − 2y = 9\n5x − 9 = 2y (add 2y to both sides and subtract 9)\ny = (5x − 9)/2\n• Correct first step, e.g. 5x − 9 = 2y or −2y = 9 − 5x (1)\n• y = (5x − 9)/2 or equivalent (1)"
      },
      {
        "q": "The formula F = 1.8C + 32 converts a temperature in degrees Celsius, C, to degrees Fahrenheit, F.\nConvert −15 °C to degrees Fahrenheit.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "F = 1.8 × (−15) + 32 = −27 + 32 = 5\n• Substitutes correctly: 1.8 × (−15) + 32 (1)\n• 5 °F (1)"
      },
      {
        "q": "f(x) = 2x² + x\nWork out f(−3).",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "f(−3) = 2 × (−3)² + (−3) = 2 × 9 − 3 = 18 − 3 = 15\n• Substitutes x = −3 correctly, with (−3)² = 9 (1)\n• 15 (1)"
      },
      {
        "q": "(a) Explain why 3(x + 4) = 3x + 12 is an identity.\n(b) Solve the equation 3(x + 4) = 15.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) Expanding the left side gives 3x + 12, which is exactly the right side, so the statement is true for every value of x.\n(b) 3x + 12 = 15, so 3x = 3 and x = 1.\n• (a) States that it is true for all values of x, with a reason such as the left side expands to 3x + 12 (1)\n• (b) 3x + 12 = 15 or x + 4 = 5 (1)\n• (b) x = 1 (1)"
      }
    ],
    "amber": [
      {
        "q": "f(x) = 3x + 5 and g(x) = x² − 2\n(a) Work out gf(1).\n(b) Find f⁻¹(x).\n(c) Find fg(x). Give your answer in its simplest form.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) f(1) = 8, so gf(1) = g(8) = 64 − 2 = 62\n(b) y = 3x + 5 so x = (y − 5)/3; f⁻¹(x) = (x − 5)/3\n(c) fg(x) = 3(x² − 2) + 5 = 3x² − 6 + 5 = 3x² − 1\n• (a) 62 (1)\n• (b) Correct method, e.g. y − 5 = 3x (1)\n• (b) f⁻¹(x) = (x − 5)/3 (1)\n• (c) 3x² − 1 (1)"
      },
      {
        "q": "The time period, T seconds, of a pendulum of length l metres is given by T = 2π√(l/g), where g is a constant.\nMake l the subject of the formula.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Divide by 2π: T/(2π) = √(l/g)\nSquare both sides: T²/(4π²) = l/g\nMultiply by g: l = gT²/(4π²)\n• Divides by 2π correctly (1)\n• Squares both sides correctly, including squaring 2π to give 4π² (1)\n• l = gT²/(4π²) (1)"
      },
      {
        "q": "(a) Show that (2x + 5)² − (2x − 5)² ≡ 40x.\n(b) Hence, without a calculator, work out the value of 205² − 195².",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) (2x + 5)² = 4x² + 20x + 25 and (2x − 5)² = 4x² − 20x + 25\n4x² + 20x + 25 − (4x² − 20x + 25) = 40x\n(b) 2x + 5 = 205 and 2x − 5 = 195 when x = 100, so 205² − 195² = 40 × 100 = 4000\n• (a) Expands both brackets correctly (1)\n• (a) Subtracts with correct signs to reach 40x (1)\n• (b) Identifies x = 100 (1)\n• (b) 4000 (1)"
      },
      {
        "q": "Prove that the product of any two consecutive even numbers is always a multiple of 8.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Let the consecutive even numbers be 2n and 2n + 2, where n is an integer.\n2n(2n + 2) = 4n² + 4n = 4n(n + 1)\nOne of n and n + 1 must be even, so n(n + 1) is even, i.e. n(n + 1) = 2k for some integer k.\nSo the product = 4 × 2k = 8k, which is a multiple of 8.\n• Uses 2n and 2n + 2 (or equivalent) (1)\n• Product = 4n² + 4n or 4n(n + 1) (1)\n• States that n(n + 1) is even because one of two consecutive integers is even (1)\n• Concludes the product is 8 × an integer, so a multiple of 8 (1)"
      }
    ],
    "red": [
      {
        "q": "The total surface area, A cm², of a closed cylinder with radius r cm and height h cm is given by\nA = 2πr² + 2πrh\n(a) Work out A when r = 3 and h = 10. Give your answer correct to 3 significant figures.\n(b) Make h the subject of the formula.\n(c) A closed cylinder has radius 5 cm and total surface area 500 cm². Work out its height. Give your answer correct to 3 significant figures.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) A = 2π × 9 + 2π × 3 × 10 = 18π + 60π = 78π = 245.04… ≈ 245 cm²\n(b) A − 2πr² = 2πrh, so h = (A − 2πr²)/(2πr)\n(c) h = (500 − 2π × 25)/(2π × 5) = (500 − 157.08…)/31.415… = 10.915… ≈ 10.9 cm\n• (a) Correct substitution, e.g. 2π × 3² + 2π × 3 × 10 (1)\n• (a) 245 (1)\n• (b) A − 2πr² = 2πrh (1)\n• (b) h = (A − 2πr²)/(2πr) or equivalent (1)\n• (c) Correct substitution into their rearranged formula or into the original formula (1)\n• (c) 10.9 (1)"
      },
      {
        "q": "f(x) = (3x + 1)/(x − 2), x ≠ 2\n(a) Find f⁻¹(x).\n(b) Show that f(4) = 6.5 and use your answer to (a) to check that f⁻¹(6.5) = 4.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) y = (3x + 1)/(x − 2)\ny(x − 2) = 3x + 1\nxy − 2y = 3x + 1\nxy − 3x = 2y + 1\nx(y − 3) = 2y + 1\nx = (2y + 1)/(y − 3), so f⁻¹(x) = (2x + 1)/(x − 3)\n(b) f(4) = (12 + 1)/(4 − 2) = 13/2 = 6.5\nf⁻¹(6.5) = (13 + 1)/(6.5 − 3) = 14/3.5 = 4 ✓\n• (a) Multiplies by the denominator: y(x − 2) = 3x + 1 (1)\n• (a) Collects the x terms on one side: xy − 3x = 2y + 1 (1)\n• (a) Factorises: x(y − 3) = 2y + 1 (1)\n• (a) f⁻¹(x) = (2x + 1)/(x − 3) (1)\n• (b) f(4) = 13/2 = 6.5 (1)\n• (b) f⁻¹(6.5) = 14/3.5 = 4 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.3 */
  "2.3": {
    "topic": "Linear Graphs & Coordinates",
    "green": [
      {
        "q": "Find the coordinates of the midpoint of the line segment joining (−7, 2) and (3, 10).",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "x: (−7 + 3) ÷ 2 = −2; y: (2 + 10) ÷ 2 = 6\n• Adds and halves the x- and y-coordinates (1)\n• Midpoint (−2, 6) (1)"
      },
      {
        "q": "A straight line has equation 5y = 15x − 20. Write down its gradient and the coordinates of its y-intercept.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Divide every term by 5: y = 3x − 4\n• Gradient 3 (1)\n• y-intercept (0, −4) (1)"
      },
      {
        "q": "Line A has gradient −⅔. Write down the gradient of a line perpendicular to A and show that the two gradients multiply to give −1.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Negative reciprocal of −⅔ is 3/2. Check: −⅔ × 3/2 = −6/6 = −1.\n• Perpendicular gradient 3/2 (1)\n• Shows −⅔ × 3/2 = −1 (1)"
      },
      {
        "q": "Find an equation of the line with gradient −4 that passes through the point (2, −3).",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "y = −4x + c; substitute (2, −3): −3 = −8 + c, so c = 5.\n• Substitutes the point into y = −4x + c (1)\n• c = 5 (1)\n• y = −4x + 5 (1)"
      }
    ],
    "amber": [
      {
        "q": "Find an equation of the line through (−4, 1) and (2, 10). Give your answer in the form ax + by = c, where a, b and c are integers.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Gradient = (10 − 1) ÷ (2 − (−4)) = 9/6 = 3/2.\n1 = 3/2 × (−4) + c = −6 + c, so c = 7: y = 3/2 x + 7.\n× 2: 2y = 3x + 14, so 3x − 2y = −14.\n• Correct method for gradient (1)\n• Gradient 3/2 (1)\n• c = 7 (1)\n• 3x − 2y = −14 (or equivalent integer form) (1)"
      },
      {
        "q": "A(2, 1), B(8, 1) and C(10, 5) are three vertices of a parallelogram ABCD. Find the coordinates of D and work out the area of the parallelogram.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Step from B to A is (−6, 0); apply it to C: D = (10 − 6, 5 + 0) = (4, 5).\nBase AB = 8 − 2 = 6, perpendicular height = 5 − 1 = 4, area = 6 × 4 = 24.\n• Uses equal steps (vectors) along opposite sides (1)\n• D = (4, 5) (1)\n• Base 6 and perpendicular height 4 (1)\n• Area 24 square units (1)"
      },
      {
        "q": "Gym plan A costs C = 20 + 4v pounds per month, where v is the number of visits. Gym plan B costs £7 per visit with no monthly fee.\nInterpret the 20 and the 4 in plan A and work out the number of visits for which plan A becomes cheaper than plan B.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "In plan A, £20 is the fixed monthly fee and £4 is the cost of each visit. Plan B: C = 7v.\n20 + 4v = 7v gives 3v = 20, v = 6⅔. So plan A is cheaper for 7 or more visits.\n• Interprets 20 as the fixed fee and 4 as the cost per visit (1)\n• Writes plan B as C = 7v (1)\n• Solves 20 + 4v = 7v to get v = 6⅔ (or reads the intersection from graphs) (1)\n• Concludes plan A is cheaper for 7 or more visits (1)"
      },
      {
        "q": "Find an equation of the line that is perpendicular to 2x + 5y = 10 and passes through the point (2, −1).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "2x + 5y = 10 → y = −(2/5)x + 2, gradient −2/5.\nPerpendicular gradient = 5/2. −1 = 5/2 × 2 + c = 5 + c, so c = −6.\n• Gradient of given line −2/5 (1)\n• Perpendicular gradient 5/2 (1)\n• Substitutes (2, −1) to find c = −6 (1)\n• y = 5/2 x − 6 (or 5x − 2y = 12) (1)"
      }
    ],
    "red": [
      {
        "q": "A is (−3, 4), B is (5, 8), C is (7, 4) and D is (−1, 0). Prove that ABCD is a rectangle.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Gradient AB = (8 − 4) ÷ (5 − (−3)) = 4/8 = ½. Gradient DC = (4 − 0) ÷ (7 − (−1)) = 4/8 = ½.\nGradient BC = (4 − 8) ÷ (7 − 5) = −2. Gradient AD = (0 − 4) ÷ (−1 − (−3)) = −2.\nAB ∥ DC and BC ∥ AD, so ABCD is a parallelogram. ½ × (−2) = −1, so AB ⊥ BC.\nA parallelogram with a right angle is a rectangle.\n• Gradient AB = ½ (1)\n• Gradient DC = ½ (1)\n• Gradients BC and AD both −2 (1)\n• States opposite sides are parallel (1)\n• Shows ½ × (−2) = −1 so adjacent sides are perpendicular (1)\n• Complete conclusion: ABCD is a rectangle (1)"
      },
      {
        "q": "Line L passes through (−2, −1) and (4, 11). Line M has equation y = 9 − x.\n(a) Find an equation of L.\n(b) Find the coordinates of the point where L and M intersect.\n(c) Work out the area of the triangle enclosed by L, M and the x-axis.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Gradient = (11 − (−1)) ÷ (4 − (−2)) = 12/6 = 2; −1 = 2 × (−2) + c gives c = 3, so y = 2x + 3.\n(b) 2x + 3 = 9 − x → 3x = 6 → x = 2, y = 7. Intersection (2, 7).\n(c) L meets the x-axis at x = −1.5; M meets it at x = 9. Base = 10.5, height = 7, area = ½ × 10.5 × 7 = 36.75.\n• Gradient of L = 2 (1)\n• y = 2x + 3 (1)\n• Solves to get x = 2 (1)\n• Intersection (2, 7) (1)\n• x-intercepts −1.5 and 9 (1)\n• Area 36.75 square units (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.4 */
  "2.4": {
    "topic": "Non-linear Graphs",
    "green": [
      {
        "q": "Find the roots of the graph of y = x² − 7x + 10.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Solve x² − 7x + 10 = 0: (x − 2)(x − 5) = 0.\n• Correct factorisation (x − 2)(x − 5) (1)\n• Roots x = 2 and x = 5 (1)"
      },
      {
        "q": "A car travels 150 km in 2 hours 30 minutes at a constant speed. Work out the gradient of its distance–time graph and state what it represents.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Gradient = 150 ÷ 2.5 = 60.\n• Gradient 60 km/h (1)\n• It represents the speed of the car (1)"
      },
      {
        "q": "A circle has equation x² + y² = 81. Write down the coordinates of its centre and its radius.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "The equation has the form x² + y² = r² with r² = 81.\n• Centre (0, 0) (1)\n• Radius 9 (1)"
      },
      {
        "q": "For the graph of y = x² − 2x − 15, find the y-intercept, the roots and the turning point.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "x = 0 gives y = −15. (x − 5)(x + 3) = 0 gives roots 5 and −3.\nLine of symmetry x = (5 + (−3)) ÷ 2 = 1; y = 1 − 2 − 15 = −16.\n• y-intercept (0, −15) (1)\n• Roots x = 5 and x = −3 (1)\n• Turning point (1, −16) (1)"
      }
    ],
    "amber": [
      {
        "q": "Write y = x² + 8x + 11 in the form y = (x + p)² + q. Hence state the turning point of the graph, whether it is a maximum or a minimum, and how many times the graph crosses the x-axis.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "x² + 8x + 11 = (x + 4)² − 16 + 11 = (x + 4)² − 5.\nTurning point (−4, −5). Since (x + 4)² ≥ 0 it is a minimum, and as the minimum is below the x-axis the graph crosses it twice.\n• (x + 4)² (1)\n• − 5 (1)\n• Turning point (−4, −5) (1)\n• Minimum below the x-axis, so two roots (1)"
      },
      {
        "q": "The velocity–time graph of a car is a straight line from (0 s, 4 m/s) to (10 s, 24 m/s).\n(a) Work out the acceleration of the car.\n(b) Work out the velocity of the car after 6 seconds.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Gradient = (24 − 4) ÷ 10 = 2 m/s².\n(b) v = 4 + 2t, so at t = 6, v = 4 + 12 = 16 m/s.\n• Gradient method (24 − 4) ÷ 10 (1)\n• Acceleration 2 m/s² (1)\n• Uses v = 4 + 2t (or reads from the line) (1)\n• 16 m/s (1)"
      },
      {
        "q": "Use the graph of y = tan x to solve tan x = 1 for −180° ≤ x ≤ 360°.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "tan 45° = 1. The graph of y = tan x repeats every 180°, so the other solutions are 45° + 180° = 225° and 45° − 180° = −135°.\n• x = 45° (1)\n• Uses period 180° (1)\n• x = 225° (1)\n• x = −135° (1)"
      },
      {
        "q": "The time, t hours, that n people take to sort a pile of letters is t = 48/n.\nDescribe the shape of the graph of t against n, work out t when n = 6, and work out n when t = 4.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "t is inversely proportional to n, so the graph is a reciprocal curve: t decreases as n increases and the curve never meets the axes.\nn = 6: t = 48 ÷ 6 = 8. t = 4: n = 48 ÷ 4 = 12.\n• Reciprocal (inverse proportion) curve, decreasing, not meeting the axes (1)\n• t = 8 hours (1)\n• n = 12 people (1)"
      }
    ],
    "red": [
      {
        "q": "A car accelerates uniformly from rest to 20 m/s in 8 seconds. It then travels at 20 m/s for T seconds, and then decelerates uniformly to rest in 5 seconds. The total distance travelled is 690 m.\nUse a velocity–time graph to find T and the deceleration of the car.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Area of first triangle = ½ × 8 × 20 = 80 m. Area of rectangle = 20T. Area of last triangle = ½ × 5 × 20 = 50 m.\n80 + 20T + 50 = 690 → 20T = 560 → T = 28 s.\nDeceleration = 20 ÷ 5 = 4 m/s².\n• First section 80 m (1)\n• Last section 50 m (1)\n• Middle section 20T (1)\n• Equation 130 + 20T = 690 (1)\n• T = 28 seconds (1)\n• Deceleration 4 m/s² (1)"
      },
      {
        "q": "The point P(4, 2) lies on the circle x² + y² = 20.\nFind an equation of the tangent to the circle at P, and work out the area of the triangle enclosed by the tangent and the coordinate axes.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Check: 4² + 2² = 20. Gradient of OP = 2/4 = ½, so the tangent gradient is −2.\n2 = −2 × 4 + c → c = 10, tangent y = −2x + 10.\nCrosses the axes at (0, 10) and (5, 0). Area = ½ × 5 × 10 = 25.\n• Gradient of radius OP = ½ (1)\n• Tangent gradient −2 (1)\n• Substitutes P to get c = 10 (1)\n• y = −2x + 10 (1)\n• Intercepts (0, 10) and (5, 0) (1)\n• Area 25 square units (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.5 */
  "2.5": {
    "topic": "Equations & Inequalities",
    "green": [
      {
        "q": "Solve 5(x + 3) = 2x + 27.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Expand: 5x + 15 = 2x + 27. Subtract 2x and 15 from both sides: 3x = 12, so x = 4.\n• Expands and collects terms correctly to get 3x = 12 (1)\n• x = 4 (1)"
      },
      {
        "q": "Solve 2x − 9 < 5. Hence write down the largest integer that satisfies the inequality.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Add 9: 2x < 14, so x < 7. The largest integer less than 7 is 6 (7 itself is not included because the inequality is strict).\n• x < 7 (1)\n• 6 (1)"
      },
      {
        "q": "Solve x² − x − 20 = 0.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Two numbers with product −20 and sum −1 are −5 and 4. So (x − 5)(x + 4) = 0, giving x = 5 or x = −4.\n• (x − 5)(x + 4) = 0 (1)\n• x = 5 and x = −4 (1)"
      },
      {
        "q": "Solve x² + 10x + 7 = 0 by completing the square. Give your answers in the form a ± b√2.",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "x² + 10x + 7 = (x + 5)² − 25 + 7 = (x + 5)² − 18. So (x + 5)² = 18, x + 5 = ±√18 = ±3√2, giving x = −5 ± 3√2.\n• (x + 5)² − 18 = 0 (1)\n• x + 5 = ±√18 (1)\n• x = −5 ± 3√2 (1)"
      }
    ],
    "amber": [
      {
        "q": "Solve the simultaneous equations\n3x + 4y = 5\n2x − 3y = 9",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Multiply the first equation by 3: 9x + 12y = 15. Multiply the second by 4: 8x − 12y = 36. Add: 17x = 51, so x = 3. Substitute into the first: 9 + 4y = 5, 4y = −4, y = −1. Check: 2(3) − 3(−1) = 6 + 3 = 9 ✓\n• Scales equations to make the coefficients of y (or x) equal (1)\n• Adds/subtracts correctly to get 17x = 51 (1)\n• x = 3 (1)\n• y = −1 (1)"
      },
      {
        "q": "The sum of three consecutive odd numbers is 87. Use algebra to find the largest of the three numbers.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Let the smallest number be n. The numbers are n, n + 2 and n + 4. n + (n + 2) + (n + 4) = 87, so 3n + 6 = 87, 3n = 81, n = 27. The numbers are 27, 29 and 31, so the largest is 31.\n• Expressions n, n + 2, n + 4 (1)\n• Equation 3n + 6 = 87 (1)\n• n = 27 (1)\n• Largest number = 31 (1)"
      },
      {
        "q": "Solve x² − 3x − 10 ≤ 0. Give your answer using set notation.",
        "marks": 3,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Critical values: (x − 5)(x + 2) = 0, so x = 5 or x = −2. The graph y = x² − 3x − 10 is a ∪-shaped curve, below or on the x-axis between the roots, so −2 ≤ x ≤ 5. In set notation: {x : −2 ≤ x ≤ 5}.\n• Critical values −2 and 5 (1)\n• −2 ≤ x ≤ 5 (correct region, inclusive) (1)\n• {x : −2 ≤ x ≤ 5} (1)"
      },
      {
        "q": "Solve (x + 5)/2 − (2x − 1)/3 = 2.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Multiply every term by 6: 3(x + 5) − 2(2x − 1) = 12. Expand: 3x + 15 − 4x + 2 = 12 (note −2 × −1 = +2). Simplify: −x + 17 = 12, so x = 5. Check: 10/2 − 9/3 = 5 − 3 = 2 ✓\n• Multiplies every term by 6 (or a common multiple) (1)\n• Expands correctly, including the sign: 3x + 15 − 4x + 2 (1)\n• −x + 17 = 12 (1)\n• x = 5 (1)"
      }
    ],
    "red": [
      {
        "q": "Solve the simultaneous equations\nx² + y² = 13\ny = 2x + 1",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Substitute y = 2x + 1: x² + (2x + 1)² = 13, so x² + 4x² + 4x + 1 = 13, giving 5x² + 4x − 12 = 0. Factorise: (5x − 6)(x + 2) = 0, so x = 6/5 or x = −2. Substitute into y = 2x + 1: x = 6/5 gives y = 17/5; x = −2 gives y = −3. Check: (6/5)² + (17/5)² = 36/25 + 289/25 = 325/25 = 13 ✓\n• Substitutes the linear equation into the quadratic (1)\n• Expands (2x + 1)² correctly (1)\n• 5x² + 4x − 12 = 0 (1)\n• (5x − 6)(x + 2) = 0 or correct use of the formula (1)\n• x = 6/5 and x = −2 (1)\n• y = 17/5 and y = −3, correctly paired (1)"
      },
      {
        "q": "At a cinema, adult tickets cost £x each and child tickets cost £y each.\nThe Jones family buys 2 adult tickets and 3 child tickets for £43.50.\nThe Khan family buys 3 adult tickets and 1 child ticket for £39.\nMr Patel has £50. He wants to buy 2 adult tickets and 4 child tickets.\nDoes he have enough money? You must show your working.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Equations: 2x + 3y = 43.50 and 3x + y = 39. Multiply the second by 3: 9x + 3y = 117. Subtract the first: 7x = 73.50, so x = 10.50. Then y = 39 − 3(10.50) = 39 − 31.50 = 7.50. Cost for Mr Patel: 2(10.50) + 4(7.50) = 21 + 30 = £51. £51 > £50, so he does not have enough money (he is £1 short).\n• Forms both equations 2x + 3y = 43.50 and 3x + y = 39 (1)\n• Correct method to eliminate one variable (1)\n• x = 10.50 (1)\n• y = 7.50 (1)\n• Cost = 2 × 10.50 + 4 × 7.50 = £51 (1)\n• Conclusion: No, £51 is more than £50 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.6 */
  "2.6": {
    "topic": "Sequences",
    "green": [
      {
        "q": "Find an expression, in terms of n, for the nth term of the sequence 11, 17, 23, 29, …",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "The common difference is 6, so compare with 6n: 6, 12, 18, 24. Each term is 5 more, so the nth term is 6n + 5. Check: n = 1 gives 11 ✓\n• 6n seen (1)\n• 6n + 5 (1)"
      },
      {
        "q": "Is 200 a term of the sequence with nth term 7n − 3? Show how you decide.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Set 7n − 3 = 200, so 7n = 203 and n = 29. Since 29 is a positive whole number, 200 is a term (the 29th term).\n• 7n = 203 (1)\n• n = 29, so yes, it is the 29th term (1)"
      },
      {
        "q": "A Fibonacci-type sequence has first term x and second term 3x. The 5th term is 44. Work out the value of x.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Terms: x, 3x, 4x, 7x, 11x. So 11x = 44 and x = 4.\n• 5th term = 11x (1)\n• x = 4 (1)"
      },
      {
        "q": "Find an expression for the nth term of the quadratic sequence 6, 11, 18, 27, …",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "First differences 5, 7, 9; second difference 2, so the n² coefficient is 1. Term − n²: 5, 7, 9, 11, which has nth term 2n + 3. So the nth term is n² + 2n + 3. Check: n = 2 gives 4 + 4 + 3 = 11 ✓\n• Second difference 2, so n² (1)\n• Remaining sequence 5, 7, 9, 11 (1)\n• n² + 2n + 3 (1)"
      }
    ],
    "amber": [
      {
        "q": "Pattern 1 uses 8 matchsticks, pattern 2 uses 14 and pattern 3 uses 20. The patterns continue in the same way.\n(a) Find an expression for the number of matchsticks in pattern n.\n(b) Which pattern uses 152 matchsticks?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) The common difference is 6, so compare with 6n: 6, 12, 18. Each term is 2 more, so the nth term is 6n + 2.\n(b) 6n + 2 = 152, so 6n = 150 and n = 25. Pattern 25.\n• (a) 6n seen (1)\n• (a) 6n + 2 (1)\n• (b) 6n + 2 = 152 (1)\n• (b) Pattern 25 (1)"
      },
      {
        "q": "Sequence A has nth term 5n − 2. Sequence B has nth term 100 − 3n. Find the first position at which the term of sequence A is greater than the term of sequence B, and write down both terms at that position.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Solve 5n − 2 > 100 − 3n: 8n > 102, so n > 12.75. The first whole-number position is n = 13. A: 5(13) − 2 = 63. B: 100 − 3(13) = 61. 63 > 61 ✓ (at n = 12, A = 58 and B = 64).\n• Forms 5n − 2 > 100 − 3n or equates the nth terms (1)\n• n > 12.75 (or 8n = 102) (1)\n• n = 13 (1)\n• A = 63 and B = 61 (1)"
      },
      {
        "q": "A geometric sequence of positive numbers has 3rd term 18 and 5th term 162. Work out the first term and the 7th term.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Going from the 3rd to the 5th term multiplies by r², so r² = 162 ÷ 18 = 9 and r = 3 (positive). First term = 18 ÷ 3² = 2. 7th term = 162 × 3² = 1458.\n• r² = 9 (1)\n• r = 3 (1)\n• First term = 2 (1)\n• 7th term = 1458 (1)"
      },
      {
        "q": "The first two terms of a geometric sequence are √5 and 5.\n(a) Work out the 7th term, giving your answer in the form k√5.\n(b) Show that the 8th term is an integer.",
        "marks": 3,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) r = 5 ÷ √5 = √5. 7th term = √5 × (√5)⁶ = √5 × 125 = 125√5.\n(b) 8th term = 125√5 × √5 = 125 × 5 = 625, an integer.\n• Common ratio √5 (1)\n• (a) 125√5 (1)\n• (b) 125√5 × √5 = 625 (1)"
      }
    ],
    "red": [
      {
        "q": "Here are the first five terms of a quadratic sequence: 5, 12, 21, 32, 45\n(a) Find an expression, in terms of n, for the nth term.\n(b) Determine whether 140 is a term of the sequence. Show your working.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) First differences 7, 9, 11, 13; second difference 2, so the n² coefficient is 1. Term − n²: 4, 8, 12, 16, 20 = 4n. So the nth term is n² + 4n.\n(b) n² + 4n = 140, so n² + 4n − 140 = 0 and (n + 14)(n − 10) = 0. n = 10 (n = −14 is rejected because positions are positive). So 140 is the 10th term. Check: 100 + 40 = 140 ✓\n• (a) Second difference 2, so coefficient of n² is 1 (1)\n• (a) Subtracts n² to get 4, 8, 12, … (1)\n• (a) n² + 4n (1)\n• (b) n² + 4n − 140 = 0 (1)\n• (b) (n + 14)(n − 10) = 0 (1)\n• (b) n = 10, so yes, 140 is the 10th term (1)"
      },
      {
        "q": "A Fibonacci-type sequence has first term a and second term b. Each term after the second is the sum of the two terms before it.\nThe 3rd term is 7 and the 6th term is 31.\nWork out the values of a and b, and hence find the 10th term.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Terms: a, b, a + b, a + 2b, 2a + 3b, 3a + 5b. So a + b = 7 and 3a + 5b = 31. Multiply the first by 3: 3a + 3b = 21. Subtract: 2b = 10, so b = 5 and a = 2. Sequence: 2, 5, 7, 12, 19, 31, 50, 81, 131, 212. The 10th term is 212.\n• 6th term written as 3a + 5b (1)\n• Equations a + b = 7 and 3a + 5b = 31 (1)\n• Correct method to solve simultaneously (1)\n• a = 2 (1)\n• b = 5 (1)\n• 10th term = 212 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.1 */
  "3.1": {
    "topic": "Ratio & Proportion",
    "green": [
      {
        "q": "Write the ratio 750 g : 2.25 kg in its simplest form.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "2.25 kg = 2250 g, so the ratio is 750 : 2250. Dividing both parts by 750 gives 1 : 3.\n• Converts to the same units, 750 : 2250 (1)\n• 1 : 3 (1)"
      },
      {
        "q": "84 stickers are shared between Ali, Beth and Cara in the ratio 2 : 3 : 7. Work out how many stickers each person gets.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Total parts = 2 + 3 + 7 = 12. One part = 84 ÷ 12 = 7.\nAli 2 × 7 = 14, Beth 3 × 7 = 21, Cara 7 × 7 = 49. Check: 14 + 21 + 49 = 84.\n• 84 ÷ 12 = 7 (1)\n• 14, 21 and 49 (1)"
      },
      {
        "q": "A scale drawing of a sports hall uses a scale of 1 : 200. The hall is 32 m long and 18 m wide. Work out the length and the width of the hall on the drawing in centimetres.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "32 m = 3200 cm and 18 m = 1800 cm.\n3200 ÷ 200 = 16 cm and 1800 ÷ 200 = 9 cm.\n• Converts to centimetres (or divides metres by 200 and converts) (1)\n• Length 16 cm (1)\n• Width 9 cm (1)"
      },
      {
        "q": "y is directly proportional to the square root of x. Write an equation connecting y and x, and state what happens to y when x is multiplied by 9.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "y = k√x. If x is multiplied by 9, √x is multiplied by √9 = 3, so y is multiplied by 3.\n• y = k√x (1)\n• y is multiplied by 3 (1)"
      }
    ],
    "amber": [
      {
        "q": "Yoghurt is sold in three sizes: 150 g for 65p, 500 g for £1.90 and 1 kg for £3.95. Which size is the best value for money? You must show your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Cost per 100 g: 150 g pot 65 ÷ 1.5 = 43.3p; 500 g pot 190 ÷ 5 = 38p; 1 kg pot 395 ÷ 10 = 39.5p.\nThe 500 g pot has the lowest cost per 100 g, so it is the best value.\n• Uses a common unit (e.g. per 100 g or per gram) with consistent units (1)\n• Two correct comparable values, e.g. 43.3p and 38p (1)\n• All three correct: 43.3p, 38p, 39.5p (1)\n• Conclusion: 500 g is best value (1)"
      },
      {
        "q": "12 volunteers can pack all the food hampers for a charity in 5 hours.\n(a) How long would 15 volunteers take, working at the same rate?\n(b) The hampers must be packed in 3 hours. How many more volunteers than 12 are needed?",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Total work = 12 × 5 = 60 volunteer-hours.\n(a) 60 ÷ 15 = 4 hours.\n(b) 60 ÷ 3 = 20 volunteers are needed, so 20 − 12 = 8 more.\n• 12 × 5 = 60 volunteer-hours (1)\n• (a) 4 hours (1)\n• (b) 60 ÷ 3 = 20 (1)\n• (b) 8 more volunteers (1)"
      },
      {
        "q": "Two cylinders are mathematically similar. Their surface areas are 80 cm² and 180 cm². The volume of the smaller cylinder is 96 cm³. Work out the volume of the larger cylinder.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Area scale factor = 180 ÷ 80 = 2.25. Length scale factor = √2.25 = 1.5.\nVolume scale factor = 1.5³ = 3.375. Volume = 96 × 3.375 = 324 cm³.\n• Area scale factor 2.25 (1)\n• Length scale factor 1.5 (1)\n• Volume scale factor 3.375 (1)\n• 324 cm³ (1)"
      },
      {
        "q": "The cost of cheese, £C, is directly proportional to its mass, m kg. 0.4 kg of cheese costs £3.20.\n(a) Show that C = 8m.\n(b) Work out the mass of cheese that costs £11.60.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) C ÷ m is constant: 3.20 ÷ 0.4 = 8, so C = 8m.\n(b) 11.60 ÷ 8 = 1.45 kg.\n• 3.20 ÷ 0.4 seen (1)\n• k = 8, giving C = 8m (1)\n• (b) 1.45 kg (1)"
      }
    ],
    "red": [
      {
        "q": "Jen and Kai share some money in the ratio 2 : 3. Kai then gives Jen £18. The ratio of Jen's money to Kai's money is now 7 : 8.\n(a) Work out how much money they shared.\n(b) What fraction of the total does Jen have at the end?",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Let Jen have 2x and Kai 3x.\nAfter the gift: (2x + 18) : (3x − 18) = 7 : 8, so 8(2x + 18) = 7(3x − 18).\n16x + 144 = 21x − 126, so 5x = 270 and x = 54.\nTotal = 5x = £270 (Jen £108, Kai £162; after the gift £126 : £144 = 7 : 8).\n(b) Jen has 126 out of 270 = 7/15.\n• Shares written as 2x and 3x (1)\n• (2x + 18) : (3x − 18) = 7 : 8 (1)\n• 8(2x + 18) = 7(3x − 18) (1)\n• x = 54 (1)\n• (a) £270 (1)\n• (b) 7/15 (1)"
      },
      {
        "q": "The time, T seconds, for one swing of a pendulum is directly proportional to the square root of its length, L metres. When L = 1.44, T = 2.4.\n(a) Find a formula for T in terms of L.\n(b) Work out T when L = 2.25.\n(c) Work out L when T = 5.\n(d) Describe what happens to T when L is multiplied by 4.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) T = k√L, so 2.4 = k × 1.2 and k = 2. T = 2√L.\n(b) T = 2 × √2.25 = 2 × 1.5 = 3 seconds.\n(c) 5 = 2√L, so √L = 2.5 and L = 6.25 m.\n(d) √4 = 2, so T is multiplied by 2 (doubled).\n• T = k√L with substitution 2.4 = k × 1.2 (1)\n• T = 2√L (1)\n• (b) T = 3 (1)\n• (c) √L = 2.5 (1)\n• (c) L = 6.25 (1)\n• (d) T is doubled (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.2 */
  "3.2": {
    "topic": "Percentages, Growth & Decay",
    "green": [
      {
        "q": "Without using a calculator, work out 12.5% of £560.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "10% of 560 = 56. 2.5% is a quarter of 10%, so 2.5% = 14.\n12.5% = 56 + 14 = £70. (Or 12.5% = 1/8, and 560 ÷ 8 = 70.)\n• Correct method, e.g. 10% = 56 and 2.5% = 14 (1)\n• £70 (1)"
      },
      {
        "q": "The number of members of a club falls from 160 to 136. Work out the percentage decrease.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Decrease = 160 − 136 = 24. Percentage decrease = 24 ÷ 160 × 100 = 15%.\n• 24 ÷ 160 (× 100) (1)\n• 15% (1)"
      },
      {
        "q": "£2800 is invested for 4 years at 1.5% per year simple interest. Work out the total value of the investment at the end of the 4 years.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Interest per year = 2800 × 0.015 = £42.\nInterest for 4 years = 42 × 4 = £168.\nTotal value = 2800 + 168 = £2968.\n• 2800 × 0.015 = 42 (1)\n• 42 × 4 = 168 (1)\n• £2968 (1)"
      },
      {
        "q": "uₙ₊₁ = 1.1uₙ − 30 and u₀ = 200. Work out the value of u₂.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "u₁ = 1.1 × 200 − 30 = 220 − 30 = 190.\nu₂ = 1.1 × 190 − 30 = 209 − 30 = 179.\n• u₁ = 190 (1)\n• u₂ = 179 (1)"
      }
    ],
    "amber": [
      {
        "q": "In a sale, the price of a TV is reduced by 15% to £425.\n(a) Work out the price of the TV before the sale.\n(b) After the sale, the shop increases the sale price by 15%. Show that the TV does not return to its original price.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) 85% of the original = 425, so original = 425 ÷ 0.85 = £500.\n(b) 425 × 1.15 = £488.75, which is less than £500, because the 15% increase is of the smaller sale price.\n• (a) 425 ÷ 0.85 (1)\n• (a) £500 (1)\n• (b) 425 × 1.15 (1)\n• (b) £488.75 compared with £500 (1)"
      },
      {
        "q": "Omar has £6000 to invest for 3 years. Bank A pays 3.5% per year compound interest. Bank B pays 3.6% per year simple interest. Which bank gives Omar more money after 3 years? You must show your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Bank A: 6000 × 1.035³ = £6652.31 (to the nearest penny).\nBank B: interest = 6000 × 0.036 × 3 = £648, so total = £6648.\nBank A gives more, by about £4.31.\n• 6000 × 1.035³ (1)\n• £6652.31 (1)\n• Bank B total £6648 (1)\n• Bank A gives more, with correct figures (1)"
      },
      {
        "q": "A van costs £20 000. It loses 25% of its value in the first year and 10% of its value in each year after that. Work out the value of the van after 4 years.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "After year 1: 20 000 × 0.75 = £15 000.\nYears 2, 3 and 4: 15 000 × 0.9³ = 15 000 × 0.729 = £10 935.\n• 20 000 × 0.75 = 15 000 (1)\n• × 0.9³ (three further years) (1)\n• £10 935 (1)"
      },
      {
        "q": "Zara's savings are modelled by uₙ₊₁ = 1.025uₙ + 200, where uₙ is the balance in pounds after n years and u₀ = 1000.\n(a) Explain what the numbers 1.025 and 200 represent in this model.\n(b) Work out the balance after 2 years.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) 1.025 means 2.5% interest is added each year; 200 means £200 is paid in each year (after the interest).\n(b) u₁ = 1.025 × 1000 + 200 = 1225. u₂ = 1.025 × 1225 + 200 = 1255.625 + 200 = £1455.63.\n• (a) 1.025 is 2.5% interest per year (1)\n• (a) £200 deposited each year (1)\n• (b) u₁ = 1225 (1)\n• (b) £1455.63 (1)"
      }
    ],
    "red": [
      {
        "q": "Town X has a population of 60 000 that is increasing by 1.5% each year. Town Y has a population of 72 000 that is decreasing by 2% each year. After how many whole years will the population of Town X first be greater than the population of Town Y? You must show your working.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Town X after n years: 60 000 × 1.015ⁿ. Town Y after n years: 72 000 × 0.98ⁿ.\nn = 5: X = 64 637, Y = 65 082 (Y still larger).\nn = 6: X = 65 607, Y = 63 781 (X now larger).\nSo after 6 years.\n• Multiplier 1.015 for X (1)\n• Multiplier 0.98 for Y (1)\n• Uses 60 000 × 1.015ⁿ and 72 000 × 0.98ⁿ for at least one n (1)\n• Correct values for n = 5: 64 637 and 65 082 (1)\n• Correct values for n = 6: 65 607 and 63 781 (1)\n• 6 years (1)"
      },
      {
        "q": "Leo borrows £4000. Interest of 1.5% is added to the amount owed at the end of each month, and then Leo repays £250. The amount owed is modelled by Bₙ₊₁ = 1.015Bₙ − 250, with B₀ = 4000.\n(a) Work out B₁ and B₂.\n(b) After how many months does the amount owed first fall below £3000?\n(c) Explain why the loan would never be repaid if Leo repaid only £60 each month.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) B₁ = 1.015 × 4000 − 250 = 3810. B₂ = 1.015 × 3810 − 250 = 3617.15.\n(b) B₃ = 3421.41, B₄ = 3222.73, B₅ = 3021.07, B₆ = 2816.39, so after 6 months.\n(c) 1.5% of £4000 is £60, so the interest added each month equals the repayment and the balance stays at £4000.\n• (a) B₁ = 3810 (1)\n• (a) B₂ = 3617.15 (1)\n• (b) Continues iterating correctly to B₅ = 3021.07 (1)\n• (b) B₆ = 2816.39, so 6 months (1)\n• (c) Interest on £4000 is £60 (1)\n• (c) Interest equals the repayment, so the balance never decreases (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.3 */
  "3.3": {
    "topic": "Compound Measures & Rates of Change",
    "green": [
      {
        "q": "Change 1.8 m³ into litres.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "1 m³ = 1000 litres, so 1.8 × 1000 = 1800 litres.\n• Uses 1 m³ = 1000 litres (1)\n• 1800 litres (1)"
      },
      {
        "q": "A bus travels 42 miles in 1 hour 10 minutes. Work out its average speed in miles per hour.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "1 hour 10 minutes = 7/6 hours. Speed = 42 ÷ 7/6 = 36 mph.\n• 42 ÷ 1⅙ or 42 ÷ 70 × 60 (1)\n• 36 mph (1)"
      },
      {
        "q": "A block exerts a pressure of 250 N/m² on an area of 0.6 m². Work out the force exerted by the block.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Force = pressure × area = 250 × 0.6 = 150 N.\n• 250 × 0.6 (1)\n• 150 N (1)"
      },
      {
        "q": "Work out the average rate of change of y = 2x² − x between x = 1 and x = 3.",
        "marks": 3,
        "tier": "green",
        "higher": true,
        "modelAnswer": "When x = 1, y = 2 − 1 = 1. When x = 3, y = 18 − 3 = 15.\nGradient of chord = (15 − 1) ÷ (3 − 1) = 14 ÷ 2 = 7.\n• Both y values 1 and 15 (1)\n• (15 − 1) ÷ (3 − 1) (1)\n• 7 (1)"
      }
    ],
    "amber": [
      {
        "q": "Sofia drives 156 km at an average speed of 78 km/h. She stops for 20 minutes. She then drives 64 km in 50 minutes. Work out her average speed for the whole journey, including the stop. Give your answer to 3 significant figures.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Time for first part = 156 ÷ 78 = 2 hours.\nTotal time = 2 h + 20 min + 50 min = 3 h 10 min = 3.1666… hours.\nTotal distance = 156 + 64 = 220 km.\nAverage speed = 220 ÷ 3.1666… = 69.47… = 69.5 km/h.\n• 156 ÷ 78 = 2 hours (1)\n• Total time 3 h 10 min or 19/6 hours (1)\n• 220 ÷ 3.1666… (1)\n• 69.5 km/h (1)"
      },
      {
        "q": "An alloy is made by melting together 386 g of gold and 210 g of silver. Gold has density 19.3 g/cm³ and silver has density 10.5 g/cm³. Work out the density of the alloy.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Volume of gold = 386 ÷ 19.3 = 20 cm³. Volume of silver = 210 ÷ 10.5 = 20 cm³.\nDensity = (386 + 210) ÷ (20 + 20) = 596 ÷ 40 = 14.9 g/cm³.\n• Volume of gold 20 cm³ (1)\n• Volume of silver 20 cm³ (1)\n• Total mass ÷ total volume 596 ÷ 40 (1)\n• 14.9 g/cm³ (1)"
      },
      {
        "q": "Pack A contains 12 cans of lemonade, each 330 ml. It normally costs £5.40 but has 20% off. Pack B is a single 2 litre bottle costing £2.30. Which pack is better value? You must show your working.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Pack A: price = 0.8 × 5.40 = £4.32 for 12 × 330 = 3960 ml = 3.96 litres, so £4.32 ÷ 3.96 = £1.09 per litre.\nPack B: £2.30 ÷ 2 = £1.15 per litre.\nPack A is better value.\n• Sale price £4.32 (1)\n• Total volume 3960 ml or 3.96 litres (1)\n• Both unit prices, e.g. £1.09 and £1.15 per litre (1)\n• Pack A with correct comparison (1)"
      },
      {
        "q": "The height, h metres, of a ball t seconds after it is thrown is h = 20t − 5t². (a) Work out the average speed of the ball between t = 0 and t = 1. (b) The tangent to the curve at t = 1 passes through (0, 5) and (2, 25). Use it to estimate the speed of the ball at t = 1. (c) Explain why the answer to (b) is less than the answer to (a).",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) h(0) = 0, h(1) = 15, average speed = 15 ÷ 1 = 15 m/s.\n(b) Gradient of tangent = (25 − 5) ÷ (2 − 0) = 10 m/s.\n(c) The ball is slowing down as it rises, so its speed at t = 1 is less than its average speed over the first second.\n• (a) 15 m/s (1)\n• (b) (25 − 5) ÷ 2 (1)\n• (b) 10 m/s (1)\n• (c) the ball is slowing down / curve getting less steep (1)"
      }
    ],
    "red": [
      {
        "q": "A concrete block is a cuboid measuring 50 cm by 40 cm by 20 cm. Concrete has a density of 2400 kg/m³. The weight of the block in newtons is 10 × its mass in kg. Work out the greatest pressure, in N/m², that the block can exert on the ground.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Volume = 0.5 × 0.4 × 0.2 = 0.04 m³.\nMass = 2400 × 0.04 = 96 kg, so weight = 960 N.\nGreatest pressure uses the smallest face: 0.4 × 0.2 = 0.08 m².\nPressure = 960 ÷ 0.08 = 12 000 N/m².\n• Converts to metres or uses 1 m³ = 1 000 000 cm³ (1)\n• Volume 0.04 m³ (1)\n• Mass 96 kg (1)\n• Weight 960 N (1)\n• Smallest face area 0.08 m² (1)\n• 12 000 N/m² (1)"
      },
      {
        "q": "The velocity, v m/s, of a car t seconds after it starts is v = 0.5t² for 0 ≤ t ≤ 6. (a) Work out the average acceleration between t = 2 and t = 6. (b) A tangent to the velocity–time curve at t = 4 passes through (2, 0) and (6, 16). Estimate the acceleration at t = 4. (c) Work out the average acceleration between t = 0 and t = 4 and explain what the answers to (b) and (c) show about the motion.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) v(2) = 2, v(6) = 18, so (18 − 2) ÷ (6 − 2) = 4 m/s².\n(b) (16 − 0) ÷ (6 − 2) = 4 m/s².\n(c) v(0) = 0, v(4) = 8, so 8 ÷ 4 = 2 m/s². At t = 4 the acceleration (4) is greater than the average from 0 to 4 (2), so the acceleration is increasing.\n• (a) velocities 2 and 18 (1)\n• (a) 4 m/s² (1)\n• (b) (16 − 0) ÷ (6 − 2) (1)\n• (b) 4 m/s² (1)\n• (c) 2 m/s² (1)\n• (c) acceleration is increasing / car speeds up more and more quickly (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.1 */
  "4.1": {
    "topic": "Angles, Polygons & Constructions",
    "green": [
      {
        "q": "Work out the size of each interior angle of a regular nonagon (9 sides).",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Exterior angle = 360 ÷ 9 = 40°, so interior angle = 180 − 40 = 140°.\n• 360 ÷ 9 = 40 or (9 − 2) × 180 = 1260 (1)\n• 140° (1)"
      },
      {
        "q": "The bearing of Q from P is 312°. Work out the bearing of P from Q.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "The bearing is more than 180°, so subtract 180: 312 − 180 = 132°.\n• 312 − 180 (1)\n• 132° (1)"
      },
      {
        "q": "Two angles on a straight line are (4x + 10)° and (2x + 50)°. Work out the value of x.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Angles on a straight line add up to 180°: 4x + 10 + 2x + 50 = 180, so 6x = 120 and x = 20.\n• 4x + 10 + 2x + 50 = 180 (1)\n• x = 20 (1)"
      },
      {
        "q": "In quadrilateral ABCD, angle A = 90°, angle B = 2x, angle C = 3x and angle D = x + 30. Work out the size of the largest angle.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Angles in a quadrilateral add up to 360°: 90 + 2x + 3x + x + 30 = 360, so 6x = 240 and x = 40.\nAngles are 90°, 80°, 120° and 70°.\n• Equation equal to 360 (1)\n• x = 40 (1)\n• Largest angle 120° (1)"
      }
    ],
    "amber": [
      {
        "q": "PQ and RS are parallel lines, with Q and S on the right. A straight line crosses PQ at T and RS at U. Angle QTU = (3x + 12)° and angle TUS = (5x − 28)°. Work out the sizes of angle QTU and angle TUS. Give a reason for your method.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "QTU and TUS are on the same side of the transversal between the parallel lines, so they are co-interior and add up to 180°.\n3x + 12 + 5x − 28 = 180, so 8x = 196 and x = 24.5.\nAngle QTU = 85.5° and angle TUS = 94.5°.\n• Equation = 180 with reason co-interior angles add up to 180° (1)\n• x = 24.5 (1)\n• Angle QTU = 85.5° (1)\n• Angle TUS = 94.5° (1)"
      },
      {
        "q": "Each interior angle of a regular polygon is 4 times the size of each exterior angle. Work out the number of sides and the sum of the interior angles of the polygon.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Interior + exterior = 180, so 5e = 180 and e = 36°.\nn = 360 ÷ 36 = 10. Sum = (10 − 2) × 180 = 1440°.\n• 5e = 180 or e + 4e = 180 (1)\n• Exterior angle 36° (1)\n• 10 sides (1)\n• 1440° (1)"
      },
      {
        "q": "On a map with scale 1 : 25 000, a lighthouse L is 8.4 cm from a harbour H. The bearing of L from H is 072°. (a) Work out the real distance from H to L in kilometres. (b) Work out the bearing of H from L.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) 8.4 × 25 000 = 210 000 cm = 2100 m = 2.1 km.\n(b) 072 + 180 = 252°.\n• 8.4 × 25 000 (1)\n• 2.1 km (1)\n• 072 + 180 (1)\n• 252° (1)"
      },
      {
        "q": "A rectangular garden ABCD has AB = 12 m and AD = 8 m. A tree must be planted within 5 m of corner A and nearer to side AB than to side AD. Describe the region where the tree can be planted, and explain how you would draw it accurately on a plan with scale 1 cm to 2 m.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Within 5 m of A: inside a circle (arc) centre A, radius 5 m = 2.5 cm on the plan.\nNearer to AB than AD: the side of the bisector of angle DAB that contains AB.\nThe region is the sector between AB and the angle bisector, inside the arc.\n• Arc centre A, radius 5 m (1)\n• 2.5 cm on the plan (1)\n• Bisector of angle DAB, constructed with compasses (1)\n• Region identified: inside the arc, on the AB side of the bisector (1)"
      }
    ],
    "red": [
      {
        "q": "Triangle ABC has AB = AC and angle BAC = 44°. A straight line DAE is drawn through A parallel to BC, with D on the same side as B. The side BC is extended beyond C to a point F. Work out angle DAB and angle ACF. Give reasons for your working.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Base angles of an isosceles triangle are equal: angle ABC = angle ACB = (180 − 44) ÷ 2 = 68°.\nAngle DAB = angle ABC = 68° (alternate angles are equal).\nAngle ACF = 180 − 68 = 112° (angles on a straight line add up to 180°).\n• (180 − 44) ÷ 2 (1)\n• Angle ABC = 68° (1)\n• Reason: base angles of an isosceles triangle are equal (1)\n• Angle DAB = 68° (1)\n• Reason: alternate angles are equal (1)\n• Angle ACF = 112° with reason angles on a straight line (1)"
      },
      {
        "q": "Show that regular octagons and squares can fit together around a point with no gaps, but that regular pentagons alone cannot. Show all your working.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Regular octagon: exterior angle 360 ÷ 8 = 45°, interior angle 135°.\nTwo octagons and one square: 135 + 135 + 90 = 360°, so they fit around a point.\nRegular pentagon: exterior angle 360 ÷ 5 = 72°, interior angle 108°.\n360 ÷ 108 = 3.33…, not a whole number, so pentagons leave a gap (3 × 108 = 324°) or overlap (4 × 108 = 432°).\n• Octagon interior angle method (1)\n• 135° (1)\n• 135 + 135 + 90 = 360 (1)\n• Pentagon interior angle 108° (1)\n• 360 ÷ 108 not a whole number, or 324 and 432 (1)\n• Conclusion for both cases (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.2 */
  "4.2": {
    "topic": "Congruence, Similarity & Transformations",
    "green": [
      {
        "q": "Two triangles both have angles of 30°, 60° and 90°. Explain why the triangles are not necessarily congruent.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Equal angles only show that the triangles are similar. One triangle could be an enlargement of the other, e.g. sides 5, 8.66 and 10 cm compared with sides 10, 17.32 and 20 cm. AAA is not a congruence condition.\n• States that equal angles only guarantee similar shapes / AAA is not a condition (1)\n• Explains that the sizes (side lengths) can be different, e.g. one is an enlargement of the other (1)"
      },
      {
        "q": "The point (5, −3) is rotated 90° anticlockwise about the origin. Work out the coordinates of its image.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "A 90° anticlockwise rotation about O maps (x, y) to (−y, x). So (5, −3) maps to (3, 5).\n• Correct rule or method, e.g. a sketch or (x, y) → (−y, x) (1)\n• (3, 5) (1)"
      },
      {
        "q": "Triangle A has vertices (1, 1), (3, 1) and (1, 4). Triangle B has vertices (3, 3), (7, 3) and (3, 9). Describe fully the single transformation that maps triangle A onto triangle B.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Side (1, 1)–(3, 1) has length 2; the matching side of B, (3, 3)–(7, 3), has length 4, so the scale factor is 2. Lines joining (1, 1) to (3, 3), (3, 1) to (7, 3) and (1, 4) to (3, 9) all pass through (−1, −1), e.g. (−1, −1) + 2 × (2, 2) = (3, 3).\n• Enlargement (1)\n• Scale factor 2 (1)\n• Centre (−1, −1) (1)"
      },
      {
        "q": "Two mathematically similar boxes have a length scale factor of 3. The smaller box has volume 40 cm³. Work out the volume of the larger box.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Volume scale factor = 3³ = 27. Volume = 40 × 27 = 1080 cm³.\n• Cubes the length scale factor: 27 (1)\n• 1080 cm³ (1)"
      }
    ],
    "amber": [
      {
        "q": "Triangle ABC is isosceles with AB = AC. The point D lies on BC so that AD bisects angle BAC. Prove that triangles ABD and ACD are congruent, and hence show that BD = DC.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "AB = AC (given). Angle BAD = angle CAD (AD bisects angle BAC). AD is common to both triangles. So triangles ABD and ACD are congruent (SAS). Corresponding sides of congruent triangles are equal, so BD = DC.\n• AB = AC with reason (1)\n• Angle BAD = angle CAD with reason (1)\n• AD common and conclusion congruent by SAS (1)\n• BD = DC as corresponding sides of congruent triangles (1)"
      },
      {
        "q": "Triangle A has vertices (2, 3), (3, 3) and (2, 5). Triangle B has vertices (−1, 0), (−3, 0) and (−1, −4). Describe fully the single transformation that maps triangle A onto triangle B.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Side (2, 3)–(3, 3) has length 1 and the matching side (−1, 0)–(−3, 0) has length 2, pointing the opposite way, so the scale factor is −2. Centre: C = (P′ − kP) ÷ (1 − k) = ((−1, 0) − (−2)(2, 3)) ÷ 3 = (3, 6) ÷ 3 = (1, 2). Check: (1, 2) + (−2)(1, 3) = (−1, −4) for the vertex (2, 5).\n• Enlargement (1)\n• Size of scale factor 2 (1)\n• Scale factor negative, i.e. −2 (1)\n• Centre (1, 2) (1)"
      },
      {
        "q": "Triangles ABC and PQR are mathematically similar, with A corresponding to P, B to Q and C to R. AB = 6 cm, BC = 9 cm, AC = 7.5 cm and PQ = 10 cm. Work out the lengths of QR and PR, and the perimeter of triangle PQR.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Scale factor = 10 ÷ 6 = 5/3. QR = 9 × 5/3 = 15 cm. PR = 7.5 × 5/3 = 12.5 cm. Perimeter = 10 + 15 + 12.5 = 37.5 cm.\n• Scale factor 5/3 (1)\n• QR = 15 cm (1)\n• PR = 12.5 cm (1)\n• Perimeter 37.5 cm (1)"
      },
      {
        "q": "Triangle T has vertices (1, 2), (3, 2) and (3, 5). T is reflected in the x-axis to give T′. T′ is then rotated 90° anticlockwise about the origin to give T″. Describe fully the single transformation that maps T onto T″.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Reflect in x-axis: (1, −2), (3, −2), (3, −5). Rotate 90° anticlockwise, (x, y) → (−y, x): (2, 1), (2, 3), (5, 3). Overall (x, y) → (y, x), which is a reflection in the line y = x.\n• Correct vertices of T′ (1)\n• Correct vertices of T″ (1)\n• Reflection (1)\n• in the line y = x (1)"
      }
    ],
    "red": [
      {
        "q": "ABCD is a trapezium with AB parallel to DC. The diagonals AC and BD meet at X. AB = 12 cm, DC = 8 cm, AX = 9 cm and BD = 20 cm. Show that triangles ABX and CDX are similar, and work out the lengths of CX and DX.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Angle XAB = angle XCD (alternate angles, AB ∥ DC). Angle XBA = angle XDC (alternate angles). Angle AXB = angle CXD (vertically opposite). So triangles ABX and CDX are similar.\nScale factor from ABX to CDX = 8 ÷ 12 = ⅔. CX = 9 × ⅔ = 6 cm.\nDX = ⅔ × BX and BX + DX = 20, so (5/3) × BX = 20, BX = 12 cm and DX = 8 cm.\n• Pair of equal angles with reason (1)\n• Second pair with reason and conclusion similar (1)\n• Scale factor ⅔ (or 1.5) (1)\n• CX = 6 cm (1)\n• Forms BX + ⅔BX = 20 or equivalent (1)\n• DX = 8 cm (1)"
      },
      {
        "q": "ABCD is a square. E is a point on BC and F is a point on CD such that BE = CF. Prove that AE = BF and that AE is perpendicular to BF.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "In triangles ABE and BCF: AB = BC (sides of a square), angle ABE = angle BCF = 90° (angles of a square), BE = CF (given). So the triangles are congruent (SAS), hence AE = BF.\nAlso angle BAE = angle CBF (corresponding angles of congruent triangles). Let AE and BF meet at G. In triangle ABE, angle BAE + angle AEB = 90°, so angle CBF + angle AEB = 90°, i.e. angle GBE + angle GEB = 90°. So angle BGE = 180° − 90° = 90° and AE ⊥ BF.\n• AB = BC and BE = CF with reasons (1)\n• Angle ABE = angle BCF = 90° (1)\n• Congruent by SAS (1)\n• AE = BF as corresponding sides (1)\n• Angle BAE = angle CBF (1)\n• Uses angle sum to show angle BGE = 90° (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.3 */
  "4.3": {
    "topic": "Circles & Circle Theorems",
    "green": [
      {
        "q": "Explain the difference between a chord and a tangent of a circle.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "A chord is a straight line segment joining two points on the circumference. A tangent is a straight line that touches the circle at exactly one point and does not cross into it.\n• Chord: joins two points on the circle (1)\n• Tangent: touches the circle at exactly one point (1)"
      },
      {
        "q": "A circle has radius 2.5 cm. Work out its circumference and its area, giving each answer in terms of π.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "C = 2 × π × 2.5 = 5π cm. A = π × 2.5² = 6.25π cm².\n• Circumference 5π cm (1)\n• Area 6.25π cm² (1)"
      },
      {
        "q": "A sector of a circle has radius 20 cm and angle 54°. Work out the area of the sector, giving your answer correct to 3 significant figures.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "54/360 = 0.15. Circle area = π × 20² = 400π. Sector = 0.15 × 400π = 60π = 188.49… ≈ 188 cm².\n• Uses the fraction 54/360 (1)\n• Circle area 400π or 1256.6… (1)\n• 188 cm² (1)"
      },
      {
        "q": "A circle has circumference 31.4 cm. Work out the radius of the circle, giving your answer correct to 1 decimal place.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "2πr = 31.4, so r = 31.4 ÷ (2π) = 4.997… ≈ 5.0 cm.\n• 31.4 ÷ 2π (1)\n• 5.0 cm (1)"
      }
    ],
    "amber": [
      {
        "q": "A logo is a major sector of a circle with radius 5 cm and angle 216°. Work out the perimeter and the area of the logo, giving each answer correct to 1 decimal place.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Arc = 216/360 × 2π × 5 = 0.6 × 10π = 6π = 18.85… cm. Perimeter = 6π + 5 + 5 = 28.849… ≈ 28.8 cm.\nArea = 216/360 × π × 5² = 0.6 × 25π = 15π = 47.12… ≈ 47.1 cm².\n• Arc length 6π or 18.8… (1)\n• Adds two radii: perimeter 28.8 cm (1)\n• Method for sector area 216/360 × π × 25 (1)\n• Area 47.1 cm² (1)"
      },
      {
        "q": "AB is a diameter of a circle with centre O, and C is any point on the circumference. Prove that angle ACB = 90°.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "OA = OB = OC (radii), so triangles OAC and OBC are isosceles. Let angle OAC = angle OCA = x and angle OBC = angle OCB = y.\nIn triangle ABC: x + y + (x + y) = 180, so 2x + 2y = 180 and x + y = 90. Angle ACB = x + y = 90°.\n• Identifies OA = OB = OC as radii, giving isosceles triangles (1)\n• Labels base angles x and y correctly (1)\n• Angle sum of triangle ABC: 2x + 2y = 180 (1)\n• Concludes angle ACB = x + y = 90° (1)"
      },
      {
        "q": "A circular table top has diameter 1.2 m. (a) Work out the area of the table top, correct to 2 decimal places. (b) A strip of edging is fixed all the way round the edge of the table top. Edging costs £3.20 per metre. Work out the cost of the edging.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) r = 0.6 m; area = π × 0.6² = 0.36π = 1.130… ≈ 1.13 m².\n(b) Circumference = π × 1.2 = 3.769… m; cost = 3.769… × 3.20 = 12.06… ≈ £12.06.\n• Uses radius 0.6 in πr² (1)\n• Area 1.13 m² (1)\n• Circumference π × 1.2 = 3.77 m (1)\n• Cost £12.06 (1)"
      },
      {
        "q": "A, B and C are points on a circle centre O. C lies on the major arc AB and angle OAB = 22°. Work out the size of angle ACB, giving reasons for each step.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "OA = OB (radii), so triangle OAB is isosceles and angle OBA = 22°. Angle AOB = 180 − 22 − 22 = 136° (angles in a triangle). Angle ACB = 136 ÷ 2 = 68° (angle at the centre is twice the angle at the circumference).\n• Angle OBA = 22° because triangle OAB is isosceles (radii) (1)\n• Angle AOB = 136° (1)\n• Reason: angle at centre is twice angle at circumference (1)\n• Angle ACB = 68° (1)"
      }
    ],
    "red": [
      {
        "q": "A and B are points on a circle centre O. The line TA is the tangent to the circle at A, and the angle between TA and the chord AB is 70°. C is a point on the major arc AB. Work out the sizes of angles ACB, AOB and OAB, giving a reason for each.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Angle ACB = 70° (alternate segment theorem: the angle between tangent and chord equals the angle in the alternate segment).\nAngle AOB = 2 × 70 = 140° (angle at the centre is twice the angle at the circumference).\nAngle OAB = (180 − 140) ÷ 2 = 20° (triangle OAB is isosceles as OA = OB are radii). Check: angle OAT = 90° (tangent ⊥ radius) and 90 − 70 = 20°.\n• Angle ACB = 70° (1)\n• Reason: alternate segment theorem (1)\n• Angle AOB = 140° (1)\n• Reason: angle at centre is twice angle at circumference (1)\n• Angle OAB = 20° (1)\n• Reason: isosceles triangle (radii), or tangent perpendicular to radius (1)"
      },
      {
        "q": "A square is drawn with all four vertices on a circle of radius 8 cm, so the diagonals of the square are diameters of the circle. (a) Work out the area of the circle that lies outside the square, correct to 3 significant figures. (b) The region outside the square is made of four equal pieces. Work out the perimeter of one of these pieces, correct to 3 significant figures.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Circle area = π × 8² = 64π = 201.06… cm². Diagonal of square = 16 cm, so side² + side² = 16², side² = 128 and square area = 128 cm². Outside = 201.06… − 128 = 73.06… ≈ 73.1 cm².\n(b) Each piece is bounded by one side of the square and a quarter of the circumference. Side = √128 = 11.31… cm. Arc = ¼ × 2π × 8 = 4π = 12.56… cm. Perimeter = 11.31… + 12.56… = 23.88… ≈ 23.9 cm.\n• Circle area 64π or 201.1 (1)\n• Diagonal 16 cm used with Pythagoras or ½d² (1)\n• Square area 128 cm² (1)\n• Area outside 73.1 cm² (1)\n• Arc length 4π or 12.57 (1)\n• Perimeter 23.9 cm (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.4 */
  "4.4": {
    "topic": "Mensuration: Area, Volume & 3D",
    "green": [
      {
        "q": "A cylinder has radius 3 cm and height 8 cm. Work out the volume of the cylinder. Give your answer in terms of π.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "V = πr²h = π × 3² × 8 = 72π cm³\n• π × 3² × 8 (1)\n• 72π cm³ (1)"
      },
      {
        "q": "Change 0.85 m² into cm².",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "1 m = 100 cm, so 1 m² = 100 × 100 = 10 000 cm²\n0.85 × 10 000 = 8500 cm²\n• Multiplying by 10 000 (100²) (1)\n• 8500 cm² (1)"
      },
      {
        "q": "A trapezium has parallel sides of length 9 cm and 15 cm. Its area is 84 cm². Work out the perpendicular distance between the parallel sides.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Area = ½(a + b)h, so 84 = ½ × (9 + 15) × h = 12h\nh = 84 ÷ 12 = 7 cm\n• ½ × (9 + 15) = 12 (1)\n• 84 ÷ 12 (1)\n• 7 cm (1)"
      },
      {
        "q": "A prism has a cross-section that is a pentagon. Work out (a) the number of faces and (b) the number of edges of the prism.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) 2 pentagon ends + 5 rectangular faces = 7 faces\n(b) 5 edges on each end + 5 edges joining the ends = 15 edges\n• 7 faces (1)\n• 15 edges (1)"
      }
    ],
    "amber": [
      {
        "q": "A rectangular metal plate is 20 cm by 12 cm. A quarter circle of radius 6 cm is cut from each of two corners of the plate. Work out the area of the plate that is left. Give your answer correct to 1 decimal place.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Rectangle = 20 × 12 = 240 cm²\nEach quarter circle = ¼ × π × 6² = 9π cm², so two = 18π = 56.54… cm²\nArea left = 240 − 18π = 183.45… = 183.5 cm²\n• Rectangle 240 (1)\n• ¼ × π × 6² for one quarter circle (1)\n• 240 − 2 × 9π (1)\n• 183.5 cm² (1)"
      },
      {
        "q": "Two bottles are mathematically similar. The smaller bottle is 12 cm tall and holds 400 ml. The larger bottle holds 1350 ml. Work out the height of the larger bottle.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Volume scale factor = 1350 ÷ 400 = 3.375\nLength scale factor = ∛3.375 = 1.5\nHeight = 12 × 1.5 = 18 cm\n• 1350 ÷ 400 = 3.375 (1)\n• Recognising the length factor is the cube root (1)\n• 1.5 (1)\n• 18 cm (1)"
      },
      {
        "q": "The radius of a sphere is 4.0 cm, correct to 1 decimal place. Work out the upper bound for the volume of the sphere. Give your answer correct to 1 decimal place. [Volume of a sphere = 4/3 πr³]",
        "marks": 3,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Upper bound of radius = 4.05 cm\nV = 4/3 × π × 4.05³ = 278.26… = 278.3 cm³\n• 4.05 (1)\n• 4/3 × π × 4.05³ (1)\n• 278.3 cm³ (1)"
      },
      {
        "q": "A swimming pool is a prism 10 m wide. Its cross-section is a trapezium: the pool is 25 m long, 1 m deep at the shallow end and 3 m deep at the deep end. Water is pumped in at 2000 litres per minute. Work out how long it takes to fill the empty pool. Give your answer in hours and minutes. [1 m³ = 1000 litres]",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Cross-section = ½ × (1 + 3) × 25 = 50 m²\nVolume = 50 × 10 = 500 m³ = 500 000 litres\nTime = 500 000 ÷ 2000 = 250 minutes = 4 hours 10 minutes\n• ½ × (1 + 3) × 25 = 50 (1)\n• 50 × 10 = 500 m³ (1)\n• 500 000 ÷ 2000 (1)\n• 4 hours 10 minutes (1)"
      }
    ],
    "red": [
      {
        "q": "A container is a cylinder with radius 10 cm and height 30 cm. It is full of water. The water is poured into cone-shaped cups, each with radius 4 cm and perpendicular height 9 cm. (a) Work out how many cups can be filled completely. (b) Work out the volume of water left over. Give your answer correct to 3 significant figures. [Volume of a cone = ⅓πr²h]",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Cylinder = π × 10² × 30 = 3000π cm³\nCup = ⅓ × π × 4² × 9 = 48π cm³\n3000π ÷ 48π = 62.5, so 62 cups can be filled\nLeft over = 3000π − 62 × 48π = 24π = 75.4 cm³\n• 3000π (1)\n• 48π (1)\n• 3000π ÷ 48π = 62.5 (1)\n• 62 cups (rounding down) (1)\n• 3000π − 62 × 48π or 0.5 × 48π (1)\n• 75.4 cm³ (1)"
      },
      {
        "q": "A pyramid has a square base of side 10 cm. Its apex is vertically above the centre of the base and each sloping edge is 13 cm long. Work out the volume of the pyramid. Give your answer correct to 3 significant figures. [Volume of a pyramid = ⅓ × area of base × height]",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Diagonal of base = √(10² + 10²) = √200 = 14.14… cm\nHalf diagonal = √50 = 7.07… cm\nh² = 13² − 50 = 119, so h = 10.90… cm\nV = ⅓ × 100 × 10.90… = 363.6… = 364 cm³\n• √(10² + 10²) (1)\n• half diagonal √50 or 7.07 (1)\n• 13² − 50 = 119 (1)\n• h = 10.9 (1)\n• ⅓ × 100 × h (1)\n• 364 cm³ (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.5 */
  "4.5": {
    "topic": "Pythagoras & Trigonometry",
    "green": [
      {
        "q": "A right-angled triangle has shorter sides of 5.6 cm and 4.2 cm. Work out the length of the hypotenuse.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "c² = 5.6² + 4.2² = 31.36 + 17.64 = 49\nc = √49 = 7 cm\n• 5.6² + 4.2² (1)\n• 7 cm (1)"
      },
      {
        "q": "In a right-angled triangle, the side adjacent to angle θ is 8 cm and the hypotenuse is 13 cm. Work out θ. Give your answer correct to 1 decimal place.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Adjacent and hypotenuse, so use cos: cos θ = 8/13\nθ = cos⁻¹(8/13) = 52.02… = 52.0°\n• cos θ = 8/13 (1)\n• 52.0° (1)"
      },
      {
        "q": "Without a calculator, work out the exact value of sin 60° × tan 30°.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "sin 60° = √3/2 and tan 30° = 1/√3\n√3/2 × 1/√3 = 1/2\n• both exact values correct (1)\n• ½ (1)"
      },
      {
        "q": "In a right-angled triangle, the side opposite a 52° angle is 14 cm. Work out the length of the side adjacent to the 52° angle. Give your answer correct to 3 significant figures.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "tan 52° = 14/x\nx = 14 ÷ tan 52° = 10.937… = 10.9 cm\n• tan 52° = 14/x (1)\n• x = 14 ÷ tan 52° (1)\n• 10.9 cm (1)"
      }
    ],
    "amber": [
      {
        "q": "The diagonals of a rhombus are 16 cm and 12 cm long. (a) Work out the perimeter of the rhombus. (b) Work out the size of the obtuse angle of the rhombus, correct to 1 decimal place.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "The diagonals bisect each other at right angles, so each quarter is a right-angled triangle with legs 8 cm and 6 cm.\n(a) side = √(8² + 6²) = 10 cm, perimeter = 4 × 10 = 40 cm\n(b) The obtuse angle is split into two equal angles, each opposite the 8 cm leg: tan⁻¹(8/6) = 53.13…°\nObtuse angle = 2 × 53.13… = 106.3°\n• half diagonals 8 and 6 used in Pythagoras (1)\n• perimeter 40 cm (1)\n• tan⁻¹(8/6) = 53.1° (1)\n• 106.3° (1)"
      },
      {
        "q": "Two coastguard stations, A and B, are 5 km apart on a straight coast. A boat is at C. Angle CAB = 48° and angle CBA = 67°. Work out the distance AC. Give your answer correct to 3 significant figures.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Angle ACB = 180° − 48° − 67° = 65°\nAC/sin 67° = 5/sin 65°\nAC = 5 × sin 67° ÷ sin 65° = 5.078… = 5.08 km\n• angle ACB = 65° (1)\n• AC/sin 67° = 5/sin 65° (1)\n• AC = 5 sin 67° ÷ sin 65° (1)\n• 5.08 km (1)"
      },
      {
        "q": "Priya stands on level ground 25 m from the base of a vertical tree. Her eyes are 1.6 m above the ground. The angle of elevation of the top of the tree from her eyes is 32°. Show that the tree is more than 17 m tall.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Height above eye level: tan 32° = h/25, so h = 25 × tan 32° = 15.62… m\nTree height = 15.62… + 1.6 = 17.22… m, which is more than 17 m\n• tan 32° = h/25 (1)\n• h = 15.6 m (1)\n• adding 1.6 m (1)\n• 17.2 m > 17 m stated (1)"
      },
      {
        "q": "A triangle has two sides of length x cm and 2x cm. The angle between them is 30°. The area of the triangle is 40 cm². Work out the exact value of x. Give your answer as a simplified surd.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Area = ½ × x × 2x × sin 30° = x² × ½ = x²/2\nx²/2 = 40, so x² = 80\nx = √80 = 4√5\n• ½ × x × 2x × sin 30° (1)\n• sin 30° = ½ giving x²/2 = 40 (1)\n• x² = 80 (1)\n• x = 4√5 (1)"
      }
    ],
    "red": [
      {
        "q": "A ship sails from port P for 15 km on a bearing of 000° to a point Q. It then sails 8 km on a bearing of 090° to a point R. (a) Work out the distance PR. (b) Work out the bearing of R from P. (c) Work out the bearing of P from R. Give bearings to the nearest degree.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Angle PQR = 90°, so triangle PQR is right-angled at Q.\n(a) PR = √(15² + 8²) = √289 = 17 km\n(b) tan θ = 8/15, θ = 28.07…°, so the bearing of R from P is 028°\n(c) Back bearing = 028° + 180° = 208°\n• 15² + 8² (1)\n• 17 km (1)\n• tan θ = 8/15 (1)\n• 028° (1)\n• adding 180° (1)\n• 208° (1)"
      },
      {
        "q": "A triangular field has sides of length 40 m, 55 m and 70 m. (a) Work out the size of the largest angle of the field. (b) Work out the area of the field. Give your answers correct to 3 significant figures.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) The largest angle C is opposite the 70 m side.\ncos C = (40² + 55² − 70²) ÷ (2 × 40 × 55) = (1600 + 3025 − 4900) ÷ 4400 = −275/4400 = −0.0625\nC = 93.58… = 93.6°\n(b) Area = ½ × 40 × 55 × sin 93.58…° = 1100 × 0.998… = 1097.8… = 1100 m²\n• choosing the angle opposite 70 m (1)\n• cos C = (40² + 55² − 70²)/(2 × 40 × 55) (1)\n• −0.0625 (1)\n• 93.6° (1)\n• ½ × 40 × 55 × sin 93.6° (1)\n• 1100 m² (1098) (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.6 */
  "4.6": {
    "topic": "Vectors",
    "green": [
      {
        "q": "a = (−3, 4) and b = (5, −1). Work out a − 2b as a column vector.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "2b = (10, −2), so a − 2b = (−3 − 10, 4 − (−2)) = (−13, 6).\n• 2b = (10, −2) (1)\n• a − 2b = (−13, 6) (1)"
      },
      {
        "q": "Shape P has vertices (2, 3), (5, 3), (5, 5) and (2, 5). Shape Q has vertices (−1, −1), (2, −1), (2, 1) and (−1, 1). Describe fully the single transformation that maps shape P onto shape Q.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Every vertex moves 3 left and 4 down, e.g. (2, 3) → (−1, −1), and the shape keeps its size and orientation.\n• Translation (1)\n• by the vector (−3, −4) (1)"
      },
      {
        "q": "R is the point (−2, −3) and S is the point (4, 1). (a) Write down the column vector RS. (b) T is the point such that ST = RS. Work out the coordinates of T.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "(a) RS = (4 − (−2), 1 − (−3)) = (6, 4).\n(b) T = S + (6, 4) = (4 + 6, 1 + 4) = (10, 5).\n• Subtracts the coordinates of R from those of S (1)\n• RS = (6, 4) (1)\n• T = (10, 5) (1)"
      },
      {
        "q": "Is the vector 15a − 10b parallel to the vector 3a − 2b? Give a reason for your answer.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "15a − 10b = 5(3a − 2b), so it is 5 times the vector 3a − 2b.\n• Shows 15a − 10b = 5(3a − 2b) (1)\n• Yes: it is a scalar multiple, so the vectors are parallel (1)"
      }
    ],
    "amber": [
      {
        "q": "p = (k, 3) and q = (−2, m). Given that 2p + q = (8, 1), work out the values of k and m.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "2p = (2k, 6), so 2p + q = (2k − 2, 6 + m).\nTop: 2k − 2 = 8, so k = 5. Bottom: 6 + m = 1, so m = −5.\n• 2p + q = (2k − 2, 6 + m) (1)\n• k = 5 (1)\n• m = −5 (1)"
      },
      {
        "q": "OABC is a trapezium with O the origin. OA = a, OC = c and CB = 3a. M is the midpoint of CB. Find, in terms of a and c, (i) OB (ii) AB (iii) OM (iv) AM. Give each answer in its simplest form.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "OB = OC + CB = c + 3a. AB = AO + OB = −a + c + 3a = 2a + c.\nCM = ½ × 3a = 1.5a, so OM = c + 1.5a. AM = AO + OM = −a + c + 1.5a = 0.5a + c.\n• OB = 3a + c (1)\n• AB = 2a + c (1)\n• OM = 1.5a + c (1)\n• AM = 0.5a + c (1)"
      },
      {
        "q": "O is the origin, OA = a and OB = b. P is the point on AB such that AP : PB = 3 : 5. Find vector OP in terms of a and b, giving your answer in its simplest form.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "AB = b − a. AP : PB = 3 : 5 gives 8 parts, so AP = ⅜(b − a).\nOP = OA + AP = a + ⅜b − ⅜a = ⅝a + ⅜b.\n• AB = b − a (1)\n• AP = ⅜(b − a) (1)\n• OP = a + ⅜(b − a) (1)\n• OP = ⅝a + ⅜b (1)"
      },
      {
        "q": "a = (4, −2) and b = (1, 3). (a) Work out 2a − b as a column vector. (b) Find the vector d such that a + 2d = b.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) 2a = (8, −4), so 2a − b = (8 − 1, −4 − 3) = (7, −7).\n(b) 2d = b − a = (1 − 4, 3 − (−2)) = (−3, 5), so d = (−1.5, 2.5).\n• 2a = (8, −4) (1)\n• 2a − b = (7, −7) (1)\n• 2d = b − a = (−3, 5) (1)\n• d = (−1.5, 2.5) (1)"
      }
    ],
    "red": [
      {
        "q": "OAB is a triangle. OA = 6a and OB = 6b. P is the point on AB such that AP : PB = 1 : 2. The point C is such that OC = 10a + 5b. Prove that O, P and C lie on a straight line, and find the ratio OP : PC.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "AB = 6b − 6a. AP = ⅓(6b − 6a) = 2b − 2a.\nOP = OA + AP = 6a + 2b − 2a = 4a + 2b = 2(2a + b).\nOC = 10a + 5b = 5(2a + b), so OC = 2.5 × OP. OP and OC are parallel and both pass through O, so O, P and C are collinear.\nOP : OC = 2 : 5, so OP : PC = 2 : 3.\n• AB = 6b − 6a (1)\n• AP = 2b − 2a (1)\n• OP = 4a + 2b (1)\n• OC = 5(2a + b), a multiple of OP (1)\n• Parallel with common point O, so collinear (1)\n• OP : PC = 2 : 3 (1)"
      },
      {
        "q": "A robot moves on a grid using two moves: move a = (5, −2) and move b = (−3, 4). It makes m moves of type a and n moves of type b, and its overall translation is (−1, 6). Work out the values of m and n.",
        "marks": 5,
        "tier": "red",
        "higher": false,
        "modelAnswer": "ma + nb = (5m − 3n, −2m + 4n) = (−1, 6).\nFrom the bottom: −2m + 4n = 6, so m = 2n − 3.\nSubstitute in the top: 5(2n − 3) − 3n = −1, so 7n − 15 = −1, 7n = 14, n = 2, then m = 1.\nCheck: (5, −2) + 2(−3, 4) = (−1, 6).\n• 5m − 3n = −1 (1)\n• −2m + 4n = 6 (1)\n• Correct method to eliminate or substitute (1)\n• n = 2 (1)\n• m = 1 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 5.1 */
  "5.1": {
    "topic": "Probability",
    "green": [
      {
        "q": "A bag contains 3 red, 5 blue and 12 green counters. One counter is taken at random. Work out the probability that it is not green.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Not green = 3 + 5 = 8 counters out of 20. P = 8/20 = 2/5.\n• 8 counters are not green, out of 20 (1)\n• 2/5 (1)"
      },
      {
        "q": "A spinner is spun 250 times and lands on 5 on 45 occasions. Estimate the probability that it lands on 5, and the number of times it would land on 5 in 1000 spins.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Relative frequency = 45/250 = 0.18. Expected in 1000 spins = 0.18 × 1000 = 180.\n• 0.18 (1)\n• 180 (1)"
      },
      {
        "q": "Two fair four-sided spinners are each numbered 1, 2, 3 and 4. Both are spun and the scores are added. Work out the probability that the total is a prime number.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Sample space: 16 equally likely outcomes. Prime totals: 2 from (1, 1); 3 from (1, 2), (2, 1); 5 from (1, 4), (4, 1), (2, 3), (3, 2); 7 from (3, 4), (4, 3) — 9 outcomes. P = 9/16.\n• Uses a 4 × 4 sample space of 16 outcomes (1)\n• Identifies the 9 outcomes with a prime total (1)\n• 9/16 (1)"
      },
      {
        "q": "In a group of 30 people, 14 drink tea, 18 drink coffee and 5 drink both. A person who drinks coffee is chosen at random. Work out the probability that this person also drinks tea.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "Restrict to the 18 coffee drinkers; 5 of them also drink tea. P(tea | coffee) = 5/18.\n• Uses 18 coffee drinkers as the denominator (1)\n• 5/18 (1)"
      }
    ],
    "amber": [
      {
        "q": "The probability that a hockey team wins any match is 0.7. The team plays two matches and the results are independent. Use a tree diagram to work out the probability that the team wins at least one of the two matches.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Tree: first match W 0.7 / not W 0.3; second match W 0.7 / not W 0.3 on each branch.\nP(no wins) = 0.3 × 0.3 = 0.09, so P(at least one win) = 1 − 0.09 = 0.91.\n(Or 0.49 + 0.21 + 0.21 = 0.91.)\n• Correct branch probabilities 0.7 and 0.3 on both sets of branches (1)\n• Multiplies along branches, e.g. 0.3 × 0.3 (1)\n• Uses 1 − P(no wins) or adds the three winning outcomes (1)\n• 0.91 (1)"
      },
      {
        "q": "A drawer contains 4 white and 6 black socks. Leo takes two socks at random without replacement. Work out the probability that the two socks are the same colour.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "P(white, white) = 4/10 × 3/9 = 12/90. P(black, black) = 6/10 × 5/9 = 30/90.\nP(same colour) = 42/90 = 7/15.\n• Second-pick probabilities out of 9 (1)\n• 4/10 × 3/9 or 6/10 × 5/9 (1)\n• Adds both outcomes (1)\n• 42/90 = 7/15 (1)"
      },
      {
        "q": "150 members of a gym were surveyed. 90 are under 30 years old. 54 of the under-30s use the pool. 36 of the members aged 30 or over use the pool. (a) A member who uses the pool is chosen at random. Find the probability that they are under 30. (b) A member aged 30 or over is chosen at random. Find the probability that they do not use the pool.",
        "marks": 4,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "Two-way table: pool users 54 under 30 + 36 aged 30+ = 90. Members aged 30+ = 150 − 90 = 60, so 60 − 36 = 24 of them do not use the pool.\n(a) 54/90 = 3/5. (b) 24/60 = 2/5.\n• Pool users total 90 (1)\n• (a) 54/90 = 3/5 (1)\n• 60 members aged 30+, of whom 24 do not use the pool (1)\n• (b) 24/60 = 2/5 (1)"
      },
      {
        "q": "There are 60 students in a year group. 30 study history, 25 study geography and 12 study neither. One student is chosen at random. Work out the probability that the student studies exactly one of the two subjects.",
        "marks": 5,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "History or geography = 60 − 12 = 48. Both = 30 + 25 − 48 = 7. History only = 23, geography only = 18.\nExactly one = 23 + 18 = 41. P = 41/60.\n• 48 study at least one subject (1)\n• 7 study both (1)\n• History only 23 and geography only 18 (1)\n• 41 study exactly one (1)\n• 41/60 (1)"
      }
    ],
    "red": [
      {
        "q": "4% of the items made by a machine are faulty. A test correctly flags 95% of faulty items as faulty, but it also wrongly flags 10% of items that are not faulty. An item is chosen at random and the test flags it as faulty. Work out the probability that the item really is faulty. Give your answer to 3 significant figures.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "Use expected frequencies out of 10 000 items: 400 faulty, 9600 not faulty.\nFaulty and flagged = 95% of 400 = 380. Not faulty but flagged = 10% of 9600 = 960.\nTotal flagged = 380 + 960 = 1340. P(faulty | flagged) = 380/1340 = 19/67 = 0.284 (3 s.f.).\n• 400 faulty and 9600 not faulty (or 0.04 and 0.96 on a tree) (1)\n• 380 faulty items flagged (or 0.04 × 0.95 = 0.038) (1)\n• 960 good items flagged (or 0.96 × 0.1 = 0.096) (1)\n• 1340 flagged in total (or 0.134) (1)\n• Divides: 380 ÷ 1340 (1)\n• 0.284 (1)"
      },
      {
        "q": "A biased four-sided spinner is numbered 1, 2, 3 and 4. P(1) = 0.2, P(2) = 0.35, P(3) = x and P(4) = 2x. (a) Work out the value of x. (b) The spinner is spun twice. Work out the probability that it lands on 4 both times. (c) The spinner is spun 200 times. Work out an estimate for the number of times it lands on 3.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) 0.2 + 0.35 + x + 2x = 1, so 3x = 0.45 and x = 0.15.\n(b) P(4) = 2 × 0.15 = 0.3, so P(4 then 4) = 0.3 × 0.3 = 0.09.\n(c) 0.15 × 200 = 30.\n• Forms 0.55 + 3x = 1 (1)\n• x = 0.15 (1)\n• P(4) = 0.3 (1)\n• 0.3 × 0.3 (1)\n• 0.09 (1)\n• 30 (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.1 */
  "6.1": {
    "topic": "Sampling, Charts & Scatter Graphs",
    "green": [
      {
        "q": "A company makes batteries. Give two reasons why it would test a sample of its batteries to see how long they last, rather than testing every battery.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Testing a battery until it runs out uses it up, so testing every battery would leave none to sell. Testing a sample is also much quicker and cheaper.\n• Testing destroys/uses up the batteries (1)\n• Quicker or cheaper (1)"
      },
      {
        "q": "A pie chart represents 120 people. Work out the angle of the sector that represents 45 people.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "360 ÷ 120 = 3° per person, so 45 × 3 = 135°.\n• 360 ÷ 120 = 3 (1)\n• 135° (1)"
      },
      {
        "q": "Explain the difference between interpolation and extrapolation when using a line of best fit, and state which is usually more reliable.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Interpolation estimates a value inside the range of the data; extrapolation estimates a value outside it. Interpolation is more reliable because the trend may not continue beyond the data.\n• Interpolation within the data range, extrapolation outside it (1)\n• Interpolation more reliable, with reason (1)"
      },
      {
        "q": "In a pictogram, one ticket symbol represents 6 tickets sold. Friday shows 2½ symbols, Saturday shows 4 symbols and Sunday shows 3⅓ symbols. Work out the total number of tickets sold over the three days.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Friday 2.5 × 6 = 15; Saturday 4 × 6 = 24; Sunday 3 × 6 + 6 ÷ 3 = 18 + 2 = 20. Total = 15 + 24 + 20 = 59 tickets.\n• Friday 15 (1)\n• Saturday 24 and Sunday 20 (1)\n• Total 59 (1)"
      }
    ],
    "amber": [
      {
        "q": "A gym wants to know how satisfied its 2000 members are. The manager asks the first 15 members who arrive on Monday morning.\n(a) Give two reasons why this sample may be biased.\n(b) Describe a better way of choosing the sample.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Only people who come early on a Monday are asked, so members who use the gym at other times are not represented. 15 is a very small sample from 2000 members.\n(b) Number all 2000 members, then use a random number generator to choose a larger sample (e.g. 100 members), ignoring repeats.\n• Only one time/day represented — early Monday users may differ from others (1)\n• Sample of 15 is too small (1)\n• Use a random sample from a list of all members (1)\n• Use a larger sample (1)"
      },
      {
        "q": "45 people were asked which streaming service they use most: 18 chose Service A, 12 chose Service B, 9 chose Service C and 6 chose other. Work out the angles needed to draw a pie chart.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "360 ÷ 45 = 8° per person.\nA: 18 × 8 = 144°; B: 12 × 8 = 96°; C: 9 × 8 = 72°; other: 6 × 8 = 48°. Check: 144 + 96 + 72 + 48 = 360°.\n• 360 ÷ 45 = 8 (1)\n• A 144° (1)\n• B 96° and C 72° (1)\n• Other 48° (1)"
      },
      {
        "q": "The midday temperature (°C) and the number of hot drinks sold by a kiosk on eight days were: (4, 92), (7, 80), (9, 75), (10, 20), (12, 61), (15, 52), (18, 40), (22, 33).\n(a) Describe the correlation.\n(b) One point is an outlier. Write it down and suggest a reason for it.\n(c) Ignoring the outlier, use a line of best fit to estimate the number of hot drinks sold on a day when the temperature is 10 °C.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Negative correlation: as the temperature rises, fewer hot drinks are sold.\n(b) (10, 20) — e.g. the kiosk closed early that day.\n(c) A line of best fit through the other seven points, such as through (4, 90) and (22, 30), gives about 70 drinks at 10 °C (answers from 66 to 74 accepted).\n• Negative correlation (1)\n• (10, 20) with a sensible reason (1)\n• Line of best fit drawn ignoring the outlier and read at 10 °C (1)\n• Estimate in range 66 to 74 (1)"
      },
      {
        "q": "A shop's umbrella sales each quarter were: 2024: Q1 140, Q2 95, Q3 70, Q4 160; 2025: Q1 152, Q2 104, Q3 78, Q4 171.\n(a) Describe the seasonal pattern.\n(b) Describe the trend.\n(c) Explain why comparing Q4 2024 with Q2 2025 is not a sensible way to judge the trend.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) Sales are highest in Q4 and Q1 (autumn/winter) and lowest in Q3 (summer) each year.\n(b) Sales are increasing: each quarter of 2025 is higher than the same quarter of 2024.\n(c) Q4 is a peak season and Q2 is a quieter season, so the fall is due to the season, not the trend.\n• Seasonal pattern: low in Q3, high in Q4/Q1 (1)\n• Increasing trend, comparing like quarters (1)\n• Different seasons, so not like with like (1)"
      }
    ],
    "red": [
      {
        "q": "A town has 24 000 residents. A random sample of 120 residents were asked which new facility they would prefer: 34 chose a skate park, 50 chose a cinema and 36 chose a library.\n(a) Estimate the number of residents in the town who would prefer a cinema.\n(b) Work out the pie chart angles for the sample.\n(c) Comment on the reliability of your estimate in (a).",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) 50/120 × 24 000 = 10 000 residents.\n(b) 360 ÷ 120 = 3° per person: skate park 34 × 3 = 102°, cinema 50 × 3 = 150°, library 36 × 3 = 108° (total 360°).\n(c) The sample is random, so it should be fairly representative, but 120 is only 0.5% of the town, so a larger sample would give a more reliable estimate.\n• 50/120 × 24 000 seen (1)\n• 10 000 (1)\n• 360 ÷ 120 = 3 (1)\n• Skate park 102° (1)\n• Cinema 150° and library 108° (1)\n• Valid comment on reliability: random, but a larger sample would be better (1)"
      },
      {
        "q": "The distance from a city centre (km) and the average house price (£ thousands) in seven areas are: (1, 380), (2, 350), (4, 310), (5, 270), (7, 230), (8, 200), (10, 160). A line of best fit passes through (2, 350) and (8, 200).\n(a) Describe the relationship shown.\n(b) Find the equation of the line of best fit.\n(c) Interpret the gradient in context.\n(d) Estimate the average house price 6 km from the centre.\n(e) Explain why the line should not be used for an area 20 km from the centre.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "(a) Negative correlation: house prices tend to be lower further from the centre.\n(b) Gradient = (200 − 350) ÷ (8 − 2) = −25. Using (2, 350): 350 = −50 + c, so c = 400. Equation: P = −25d + 400.\n(c) Average house price falls by about £25 000 for each extra km from the centre.\n(d) P = −25 × 6 + 400 = 250, i.e. about £250 000.\n(e) 20 km is outside the data range; the equation gives −25 × 20 + 400 = −100, an impossible negative price, so extrapolating is unreliable.\n• Negative correlation in context (1)\n• Gradient −25 (1)\n• P = −25d + 400 (1)\n• Gradient interpreted: falls by £25 000 per km (1)\n• £250 000 (1)\n• Outside the range of the data / gives a negative price (1)"
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.2 */
  "6.2": {
    "topic": "Averages, Spread & Grouped Data",
    "green": [
      {
        "q": "Work out the mean and the range of 14, 9, 21, 6, 15.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Mean = (14 + 9 + 21 + 6 + 15) ÷ 5 = 65 ÷ 5 = 13. Range = 21 − 6 = 15.\n• Mean 13 (1)\n• Range 15 (1)"
      },
      {
        "q": "The mean of four numbers is 9. Three of the numbers are 7, 12 and 5. Work out the fourth number.",
        "marks": 2,
        "tier": "green",
        "higher": false,
        "modelAnswer": "Total = 4 × 9 = 36. 7 + 12 + 5 = 24, so the fourth number is 36 − 24 = 12.\n• Total 36 (1)\n• 12 (1)"
      },
      {
        "q": "Work out the interquartile range of 11, 13, 16, 18, 20, 23, 27.",
        "marks": 2,
        "tier": "green",
        "higher": true,
        "modelAnswer": "n = 7, so LQ is the 2nd value = 13 and UQ is the 6th value = 23. IQR = 23 − 13 = 10.\n• LQ 13 and UQ 23 (1)\n• IQR 10 (1)"
      },
      {
        "q": "The number of books read last month by 20 pupils is: 1 book – 6 pupils, 2 books – 9 pupils, 3 books – 3 pupils, 4 books – 2 pupils. Work out the mean number of books read.",
        "marks": 3,
        "tier": "green",
        "higher": false,
        "modelAnswer": "f × x: 6, 18, 9, 8. Σfx = 41. Mean = 41 ÷ 20 = 2.05 books.\n• Products 6, 18, 9, 8 (1)\n• Σfx = 41 (1)\n• Mean 2.05 (1)"
      }
    ],
    "amber": [
      {
        "q": "The masses of 50 apples are grouped: 80 < m ≤ 100: 7, 100 < m ≤ 120: 18, 120 < m ≤ 140: 16, 140 < m ≤ 160: 9 (grams).\n(a) Write down the modal class.\n(b) Work out an estimate for the mean mass.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "(a) 100 < m ≤ 120.\n(b) Midpoints 90, 110, 130, 150. Σfx = 630 + 1980 + 2080 + 1350 = 6040. Mean ≈ 6040 ÷ 50 = 120.8 g.\n• Modal class 100 < m ≤ 120 (1)\n• Midpoints used (1)\n• Σfx = 6040 (1)\n• 120.8 g (1)"
      },
      {
        "q": "Class P's scores in a quiz were 12, 15, 9, 18, 14, 16, 14. Class Q's scores had a median of 11 and a range of 15. Compare the scores of the two classes.",
        "marks": 4,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Class P in order: 9, 12, 14, 14, 15, 16, 18. Median = 14, range = 18 − 9 = 9.\nClass P had the higher median (14 > 11), so P scored better on average. Class P had the smaller range (9 < 15), so P's scores were more consistent.\n• Median 14 (1)\n• Range 9 (1)\n• Compares averages in context (1)\n• Compares spread in context (1)"
      },
      {
        "q": "The times taken by 66 people to complete a survey are grouped: 0 < t ≤ 10: 8, 10 < t ≤ 15: 15, 15 < t ≤ 20: 17, 20 < t ≤ 30: 16, 30 < t ≤ 50: 10 (minutes).\n(a) Work out the frequency density for each class.\n(b) Estimate the number of people who took between 12 and 25 minutes.",
        "marks": 5,
        "tier": "amber",
        "higher": true,
        "modelAnswer": "(a) 8 ÷ 10 = 0.8; 15 ÷ 5 = 3; 17 ÷ 5 = 3.4; 16 ÷ 10 = 1.6; 10 ÷ 20 = 0.5.\n(b) 12 to 15: 3 × 3 = 9; 15 to 20: 17; 20 to 25: 5 × 1.6 = 8. Estimate = 9 + 17 + 8 = 34 people.\n• At least three frequency densities correct (1)\n• All five correct (1)\n• 9 from 12 to 15 (1)\n• 8 from 20 to 25 (1)\n• 34 (1)"
      },
      {
        "q": "The mean of 8 numbers is 14. Two more numbers are added and the mean of all 10 numbers is 15. Work out the mean of the two numbers that were added.",
        "marks": 3,
        "tier": "amber",
        "higher": false,
        "modelAnswer": "Original total = 8 × 14 = 112. New total = 10 × 15 = 150. The two numbers add to 150 − 112 = 38, so their mean is 38 ÷ 2 = 19.\n• 112 (1)\n• 150 (1)\n• 19 (1)"
      }
    ],
    "red": [
      {
        "q": "The revision times of 80 Year 11 students last week are: 0 < t ≤ 2: 6, 2 < t ≤ 4: 16, 4 < t ≤ 6: 25, 6 < t ≤ 8: 21, 8 < t ≤ 10: 12 (hours).\n(a) Draw a cumulative frequency graph and use it to estimate the median and the interquartile range.\n(b) For Year 10 students, the median was 4.2 hours and the interquartile range was 4.5 hours. Compare the revision times of the two year groups.",
        "marks": 6,
        "tier": "red",
        "higher": true,
        "modelAnswer": "(a) Cumulative frequencies 6, 22, 47, 68, 80, plotted at (2, 6), (4, 22), (6, 47), (8, 68), (10, 80), starting at (0, 0).\nMedian: read at 40 → about 5.4 hours. LQ: read at 20 → about 3.75 hours. UQ: read at 60 → about 7.2 hours. IQR ≈ 7.2 − 3.75 ≈ 3.5 hours.\n(b) Year 11 have a higher median (5.4 > 4.2), so they revised more on average. Year 11 have a smaller IQR (3.5 < 4.5), so their revision times were more consistent.\n• Cumulative frequencies plotted at upper class boundaries (1)\n• Median in range 5.2 to 5.6 (1)\n• LQ 3.6 to 3.9 and UQ 7.1 to 7.4 (1)\n• IQR in range 3.2 to 3.8 (1)\n• Compares medians in context (1)\n• Compares IQRs in context (1)"
      },
      {
        "q": "The journey times of 25 trips along Route X and 25 trips along Route Y are grouped (minutes):\nRoute X: 0 < t ≤ 20: 3, 20 < t ≤ 40: 6, 40 < t ≤ 60: 9, 60 < t ≤ 80: 5, 80 < t ≤ 100: 2.\nRoute Y: 0 < t ≤ 20: 1, 20 < t ≤ 40: 4, 40 < t ≤ 60: 8, 60 < t ≤ 80: 9, 80 < t ≤ 100: 3.\nWork out an estimate for the mean of each route, write down each modal class, and decide which route is quicker.",
        "marks": 6,
        "tier": "red",
        "higher": false,
        "modelAnswer": "Midpoints 10, 30, 50, 70, 90.\nRoute X: Σfx = 30 + 180 + 450 + 350 + 180 = 1190, mean ≈ 1190 ÷ 25 = 47.6 minutes. Modal class 40 < t ≤ 60.\nRoute Y: Σfx = 10 + 120 + 400 + 630 + 270 = 1430, mean ≈ 1430 ÷ 25 = 57.2 minutes. Modal class 60 < t ≤ 80.\nRoute X is quicker on average: its estimated mean (47.6) and modal class are both lower.\n• Midpoints used (1)\n• Route X Σfx = 1190 (1)\n• Route X mean 47.6 (1)\n• Route Y mean 57.2 (1)\n• Both modal classes correct (1)\n• Route X quicker, with reason (1)"
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATHS_EDEXCEL_GCSE_WRITTEN };
}
