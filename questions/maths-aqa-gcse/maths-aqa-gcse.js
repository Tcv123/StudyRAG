/*
 * AQA GCSE Mathematics (8300) — Question Bank
 * 40 questions per topic: 15 green (recall/basic), 15 amber (application), 10 red (analysis/multi-step)
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 questions at random.
 * answer: 0-based index of correct option.
 * higher: true = Higher-tier-only content (8300 is tiered; Foundation students can skip these).
 */

const MATHS_AQA_GCSE_QUESTIONS = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  "1.1": {
    "name": "Structure & Calculation",
    "green": [
      {
        "q": "Which symbol makes this statement true?  −7 ☐ −4",
        "options": [
          "<",
          ">",
          "=",
          "≥"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the value of the digit 6 in the number 2.463?",
        "options": [
          "6 tenths",
          "6 hundredths",
          "6 thousandths",
          "6 units"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out −8 + 3.",
        "options": [
          "11",
          "−11",
          "−5",
          "5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out −6 × −7.",
        "options": [
          "−13",
          "−42",
          "13",
          "42"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these numbers is prime?",
        "options": [
          "31",
          "21",
          "27",
          "39"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 4 + 6 × 2.",
        "options": [
          "20",
          "16",
          "12",
          "48"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the reciprocal of 5?",
        "options": [
          "−5",
          "−1/5",
          "1/5",
          "5²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these is a factor of 36?",
        "options": [
          "8",
          "24",
          "72",
          "9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the inverse operation of \"multiply by 4\"?",
        "options": [
          "Divide by 4",
          "Add 4",
          "Subtract 4",
          "Multiply by 1/2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 2 × 2 × 3 × 3 × 3 in index form.",
        "options": [
          "2³ × 3²",
          "2² × 3³",
          "6⁵",
          "4 × 9"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which list shows the first four multiples of 6?",
        "options": [
          "1, 2, 3, 6",
          "6, 12, 24, 36",
          "6, 12, 18, 24",
          "6, 16, 26, 36"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A shop buys a jacket for £40 (cost price) and sells it for £55 (selling price). What is the profit?",
        "options": [
          "£95",
          "£40",
          "£55",
          "£15"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Put these in order from smallest to largest: 0.4, −0.5, 1/3, −1",
        "options": [
          "−1, −0.5, 1/3, 0.4",
          "−0.5, −1, 1/3, 0.4",
          "−1, −0.5, 0.4, 1/3",
          "1/3, 0.4, −0.5, −1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out √49 + 2³.",
        "options": [
          "14",
          "15",
          "57",
          "13"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 0.07 × 100.",
        "options": [
          "0.7",
          "70",
          "7",
          "0.007"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "What is the highest common factor (HCF) of 24 and 36?",
        "options": [
          "12",
          "6",
          "72",
          "4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the lowest common multiple (LCM) of 6 and 8?",
        "options": [
          "48",
          "24",
          "14",
          "2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which is 60 written as a product of its prime factors?",
        "options": [
          "2 × 30",
          "2 × 3 × 10",
          "2² × 3 × 5",
          "2² × 15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out 2.4 × 0.3.",
        "options": [
          "7.2",
          "0.072",
          "72",
          "0.72"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out (−3)² − 4 × 2.",
        "options": [
          "1",
          "−17",
          "10",
          "−1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 2½ × (−4).",
        "options": [
          "−8½",
          "−10",
          "10",
          "−6½"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 12 − 18 ÷ 3 × 2.",
        "options": [
          "−4",
          "9",
          "0",
          "8"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Given that 23 × 47 = 1081, what is 2.3 × 4.7?",
        "options": [
          "108.1",
          "1.081",
          "0.1081",
          "10.81"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Sam pays income tax at 20% on £1200 of his monthly pay. How much income tax does he pay each month?",
        "options": [
          "£240",
          "£360",
          "£120",
          "£1560"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A bank balance is −£45. A credit of £120 is paid in. What is the new balance?",
        "options": [
          "−£165",
          "£75",
          "£165",
          "−£75"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "One bus leaves every 12 minutes and another every 20 minutes. They leave together at 9:00. After how many minutes do they next leave together?",
        "options": [
          "240",
          "32",
          "60",
          "4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out √(16 + 9) × 2.",
        "options": [
          "14",
          "50",
          "7",
          "10"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many different 2-digit numbers can be made from the digits 1, 4 and 7 if each digit is used at most once?",
        "options": [
          "6",
          "9",
          "3",
          "5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the reciprocal of 0.25?",
        "options": [
          "0.4",
          "4",
          "−0.25",
          "2.5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which statement is true?",
        "options": [
          "−3.5 > −2.5",
          "0.45 > 0.5",
          "−1.5 < −1.2",
          "3/5 < 0.55"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A code is 2 letters (A–Z, repeats allowed) followed by 3 digits (0–9, repeats allowed). How many different codes are possible?",
        "options": [
          "676 000",
          "26 000",
          "2 600 000",
          "650 000"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A = 2³ × 3 × 5² and B = 2² × 3² × 5. What is the HCF of A and B?",
        "options": [
          "1800",
          "60",
          "30",
          "120"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "P = 2⁴ × 3 × 7 and Q = 2 × 3³. What is the LCM of P and Q?",
        "options": [
          "6",
          "336",
          "3024",
          "9072"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A menu has 4 starters, 6 mains and 3 desserts. How many different three-course meals (one of each course) are possible?",
        "options": [
          "13",
          "36",
          "24",
          "72"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Pencils come in packs of 12 and rubbers in packs of 18. What is the least number of packs of each needed to have equal numbers of pencils and rubbers?",
        "options": [
          "3 pencil packs, 2 rubber packs",
          "2 pencil packs, 3 rubber packs",
          "18 pencil packs, 12 rubber packs",
          "6 pencil packs, 6 rubber packs"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many 4-digit PINs (digits 0–9) are there if no digit may be repeated?",
        "options": [
          "10 000",
          "5040",
          "210",
          "40"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A trader buys 40 shirts for £360 in total and sells all of them for £14 each. What is the total profit?",
        "options": [
          "£5",
          "£560",
          "£200",
          "£346"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Given that 156 × 24 = 3744, what is 3744 ÷ 0.24?",
        "options": [
          "156",
          "0.156",
          "1560",
          "15600"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A password is one letter from A–E followed by two different digits from 1–9. How many passwords are possible?",
        "options": [
          "360",
          "405",
          "22",
          "45"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which of these numbers has exactly three factors?",
        "options": [
          "21",
          "49",
          "27",
          "36"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.2 */
  "1.2": {
    "name": "Fractions, Decimals & Percentages",
    "green": [
      {
        "q": "Write 3/8 as a decimal.",
        "options": [
          "0.375",
          "0.38",
          "0.83",
          "0.0375"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 45% as a fraction in its simplest form.",
        "options": [
          "45/100",
          "9/20",
          "9/25",
          "4/5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 1/4 + 1/3.",
        "options": [
          "2/7",
          "1/7",
          "7/12",
          "2/12"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 0.6 as a fraction in its simplest form.",
        "options": [
          "6/100",
          "6/10",
          "2/3",
          "3/5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 2/5 of 35.",
        "options": [
          "14",
          "7",
          "70",
          "87.5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which decimal multiplier finds 15% of an amount?",
        "options": [
          "15",
          "0.15",
          "1.15",
          "0.015"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which fraction is equivalent to 3/4?",
        "options": [
          "6/12",
          "4/5",
          "9/12",
          "3/8"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 2⅓ as an improper fraction.",
        "options": [
          "5/3",
          "6/3",
          "23/3",
          "7/3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 3/5 × 2/7.",
        "options": [
          "6/35",
          "5/12",
          "21/10",
          "6/12"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 1 − 3/8.",
        "options": [
          "3/8",
          "5/8",
          "2/8",
          "1/8"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 12% of 50.",
        "options": [
          "0.6",
          "60",
          "6",
          "5.6"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Red and blue counters are in the ratio 2 : 5. What fraction of the counters are red?",
        "options": [
          "2/5",
          "5/7",
          "1/2",
          "2/7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is the largest?",
        "options": [
          "0.7",
          "2/3",
          "65%",
          "0.67"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 3/4 ÷ 1/2.",
        "options": [
          "3/8",
          "3/2",
          "2/3",
          "1/2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 0.035 as a percentage.",
        "options": [
          "35%",
          "0.35%",
          "3.5%",
          "350%"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Work out 2½ + 1¾.",
        "options": [
          "4¼",
          "3 4/6",
          "3¼",
          "4¾"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 1⅓ × 2¼.",
        "options": [
          "2 1/12",
          "3",
          "2 1/7",
          "3 1/12"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which multiplier increases an amount by 8%?",
        "options": [
          "0.08",
          "1.8",
          "1.08",
          "0.92"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Put these in order from smallest to largest: 5/8, 0.6, 61%, 2/3",
        "options": [
          "5/8, 0.6, 61%, 2/3",
          "0.6, 5/8, 61%, 2/3",
          "2/3, 5/8, 61%, 0.6",
          "0.6, 61%, 5/8, 2/3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these fractions is equal to a terminating decimal?",
        "options": [
          "7/40",
          "2/3",
          "5/6",
          "4/7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 4/5 ÷ 2/3.",
        "options": [
          "8/15",
          "6/5",
          "5/6",
          "8/3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A coat costs £80. The price is reduced by 3/8. What is the new price?",
        "options": [
          "£30",
          "£77",
          "£50",
          "£110"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Multiplying an amount by 0.85 gives:",
        "options": [
          "an increase of 85%",
          "a decrease of 85%",
          "an increase of 15%",
          "a decrease of 15%"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a class, 3/7 of the pupils are boys. What is the ratio of boys to girls?",
        "options": [
          "3 : 4",
          "3 : 7",
          "4 : 3",
          "7 : 3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 45% of 240.",
        "options": [
          "10.8",
          "108",
          "1080",
          "96"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 3/4 − 2/3.",
        "options": [
          "1/4",
          "1/7",
          "1/12",
          "5/12"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 0.444… (0.4 recurring) as a fraction.",
        "options": [
          "4/10",
          "2/5",
          "4/90",
          "4/9"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Write 0.272727… (27 recurring) as a fraction in its simplest form.",
        "options": [
          "3/11",
          "27/100",
          "2/7",
          "27/90"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Work out 2/3 of 5/8, giving your answer in its simplest form.",
        "options": [
          "7/11",
          "5/12",
          "16/15",
          "3/5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which calculation finds 17.5% of £240?",
        "options": [
          "240 × 1.175",
          "240 ÷ 17.5",
          "240 × 0.175",
          "240 × 17.5"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Write 0.1363636… (36 recurring) as a fraction in its simplest form.",
        "options": [
          "3/22",
          "136/999",
          "27/200",
          "13/99"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Write 0.2333… (3 recurring) as a fraction in its simplest form.",
        "options": [
          "23/99",
          "7/30",
          "23/100",
          "2/9"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Ana gets 1/4 of some money, Ben gets 2/5 and Cat gets the rest, which is £84. How much money was there in total?",
        "options": [
          "£336",
          "£210",
          "£240",
          "£180"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "£360 is increased by 15% and the result is then decreased by 15%. What is the final amount?",
        "options": [
          "£360.00",
          "£368.10",
          "£356.40",
          "£351.90"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Boys and girls in a club are in the ratio 5 : 3. 3/5 of the boys and 1/3 of the girls walk to the club. What fraction of all the members walk?",
        "options": [
          "1/2",
          "14/15",
          "7/16",
          "2/5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which recurring decimal is equal to 5/11?",
        "options": [
          "0.4555…",
          "0.4545…",
          "0.5454…",
          "0.4511…"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A tank is 3/5 full. After 24 litres are used it is 1/3 full. What is the capacity of the tank?",
        "options": [
          "40 litres",
          "72 litres",
          "90 litres",
          "60 litres"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out (2/3 + 1/4) ÷ 1⅚.",
        "options": [
          "11/72",
          "2",
          "121/72",
          "1/2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A price is multiplied by 1.2 and then by 0.75. What is the overall effect on the original price?",
        "options": [
          "10% decrease",
          "5% decrease",
          "5% increase",
          "10% increase"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 0.1888… (8 recurring) as a fraction in its simplest form.",
        "options": [
          "18/99",
          "17/90",
          "19/100",
          "17/99"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.3 */
  "1.3": {
    "name": "Measures, Accuracy & Bounds",
    "green": [
      {
        "q": "Round 7.386 to 1 decimal place.",
        "options": [
          "7.4",
          "7.3",
          "7.39",
          "7.0"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Round 0.04726 to 2 significant figures.",
        "options": [
          "0.05",
          "0.047",
          "0.0473",
          "0.04"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Round 38 652 to 1 significant figure.",
        "options": [
          "4",
          "30 000",
          "40 000",
          "39 000"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "How many centimetres are there in 4.5 metres?",
        "options": [
          "45 cm",
          "4500 cm",
          "0.45 cm",
          "450 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many grams are there in 2.3 kg?",
        "options": [
          "2300 g",
          "230 g",
          "23 000 g",
          "0.0023 g"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many millilitres are there in 0.75 litres?",
        "options": [
          "75 ml",
          "750 ml",
          "7.5 ml",
          "7500 ml"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How many cm² are there in 1 m²?",
        "options": [
          "100",
          "1000",
          "10 000",
          "1 000 000"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A length is 6 cm, correct to the nearest centimetre. What is the lower bound of the length?",
        "options": [
          "5 cm",
          "6.4 cm",
          "5.9 cm",
          "5.5 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Estimate 4.92 × 31.3 by rounding each number to 1 significant figure.",
        "options": [
          "150",
          "120",
          "160",
          "200"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many minutes are there in 2.25 hours?",
        "options": [
          "225",
          "135",
          "145",
          "150"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Round 3.0496 to 3 significant figures.",
        "options": [
          "3.04",
          "3.049",
          "3.05",
          "3.10"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "How many significant figures does 0.03040 have?",
        "options": [
          "2",
          "5",
          "3",
          "4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Truncate 8.379 to 1 decimal place.",
        "options": [
          "8.3",
          "8.4",
          "8.37",
          "8.38"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Convert 3.6 km to metres.",
        "options": [
          "360 m",
          "3600 m",
          "36 000 m",
          "0.0036 m"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which is the best estimate of 297 ÷ 0.51?",
        "options": [
          "150",
          "60",
          "600",
          "1500"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "A length x is 8.4 cm, correct to 1 decimal place. Which is the error interval for x?",
        "options": [
          "8.35 ≤ x < 8.45",
          "8.3 ≤ x < 8.5",
          "8.35 < x ≤ 8.45",
          "8.4 ≤ x < 8.5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A number y is truncated to 1 decimal place to give 5.7. Which is the error interval for y?",
        "options": [
          "5.65 ≤ y < 5.75",
          "5.7 ≤ y < 5.8",
          "5.6 < y ≤ 5.7",
          "5.7 < y ≤ 5.8"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Convert 2.5 m² to cm².",
        "options": [
          "250 cm²",
          "2500 cm²",
          "25 000 cm²",
          "250 000 cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Convert 4 500 000 cm³ to m³.",
        "options": [
          "45 m³",
          "450 m³",
          "0.45 m³",
          "4.5 m³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A car travels 150 km in 2 hours 30 minutes. What is its average speed?",
        "options": [
          "60 km/h",
          "65 km/h",
          "75 km/h",
          "57.7 km/h"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "By rounding each number to 1 significant figure, estimate (6.12 × 19.6) ÷ 0.495",
        "options": [
          "60",
          "240",
          "120",
          "2400"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A mass is 70 kg, correct to the nearest 10 kg. What is the upper bound of the mass?",
        "options": [
          "70 kg",
          "79 kg",
          "75 kg",
          "74.9 kg"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A rectangle has length 12 cm and width 5 cm, both correct to the nearest cm. What is the lower bound of its perimeter?",
        "options": [
          "33 cm",
          "34 cm",
          "30 cm",
          "32 cm"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A tank holds 2.4 m³ of water. How many litres is this?",
        "options": [
          "2400 litres",
          "240 litres",
          "24 000 litres",
          "2 400 000 litres"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Ella works out 21.3 × 0.48 on her calculator. Use estimation to decide which answer is correct.",
        "options": [
          "1.0224",
          "10.224",
          "102.24",
          "1022.4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Round 0.0009865 to 3 significant figures.",
        "options": [
          "0.000986",
          "0.00099",
          "0.000987",
          "0.001"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A plank is 2.4 m long, correct to the nearest 0.1 m. Three of these planks are laid end to end. What is the lower bound of the total length?",
        "options": [
          "7.15 m",
          "7.2 m",
          "6.9 m",
          "7.05 m"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "x = 20 correct to the nearest 10 and y = 4 correct to the nearest whole number. What is the upper bound of x ÷ y (to 3 s.f.)?",
        "options": [
          "7.14",
          "5.56",
          "6.25",
          "5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A time is 12.4 seconds, measured to the nearest 0.1 s. What is the lower bound of the time?",
        "options": [
          "12.3 s",
          "12.35 s",
          "12.40 s",
          "12.45 s"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "a = 6 and b = 4, both correct to the nearest whole number. What is the upper bound of a + b?",
        "options": [
          "10.5",
          "11.5",
          "11",
          "10.99"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A rectangle has length 8.6 cm and width 4.2 cm, both correct to 1 decimal place. What is the upper bound of its area?",
        "options": [
          "36.7625 cm²",
          "36.12 cm²",
          "35.4825 cm²",
          "36.33 cm²"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Speed = distance ÷ time. A distance is 100 m to the nearest metre and the time is 12.5 s to the nearest 0.1 s. Which calculation gives the lower bound of the speed?",
        "options": [
          "99.5 ÷ 12.45",
          "99.5 ÷ 12.55",
          "100.5 ÷ 12.55",
          "100.5 ÷ 12.45"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A cube has a volume of 0.008 m³. What is its side length in centimetres?",
        "options": [
          "2 cm",
          "80 cm",
          "20 cm",
          "200 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "p = 7.2 and q = 3.4, both correct to 1 decimal place. What is the upper bound of p − q?",
        "options": [
          "3.8",
          "3.85",
          "3.75",
          "3.9"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A number n is 4.6 when rounded to 1 decimal place AND 4.6 when truncated to 1 decimal place. Which is the error interval for n?",
        "options": [
          "4.6 ≤ n < 4.65",
          "4.55 ≤ n < 4.65",
          "4.6 ≤ n < 4.7",
          "4.55 ≤ n < 4.7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A square has an area of 50 cm², correct to the nearest cm². What is the upper bound of its side length, to 3 significant figures?",
        "options": [
          "7.07 cm",
          "7.11 cm",
          "7.04 cm",
          "7.10 cm"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Water flows into an empty tank at 2.5 litres per minute. The tank holds 0.3 m³. How long does it take to fill?",
        "options": [
          "12 minutes",
          "7.5 minutes",
          "2 hours",
          "20 hours"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A value has lower bound 3.4512 and upper bound 3.4538. Which is the value given to an appropriate degree of accuracy?",
        "options": [
          "3.4",
          "3.4512",
          "3.455",
          "3.45"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Kai estimates (41.7 × 9.86) ÷ 0.207 by rounding each number to 1 significant figure. The exact answer is about 1986. Which statement is correct?",
        "options": [
          "2000, an overestimate",
          "2000, an underestimate",
          "200, an overestimate",
          "20 000, an underestimate"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A field is 120 m long, correct to the nearest 10 m. A runner runs its length in 20 s, correct to the nearest second. What is the upper bound of the runner's speed?",
        "options": [
          "6.10 m/s",
          "6.41 m/s",
          "6.25 m/s",
          "5.61 m/s"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.4 */
  "1.4": {
    "name": "Powers, Roots, Surds & Standard Form",
    "green": [
      {
        "q": "What is 2⁵?",
        "options": [
          "32",
          "10",
          "25",
          "64"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is ∛64?",
        "options": [
          "8",
          "4",
          "21.3",
          "16"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is 13²?",
        "options": [
          "26",
          "139",
          "169",
          "196"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify 5⁴ × 5³. Give your answer as a power of 5.",
        "options": [
          "5¹²",
          "25⁷",
          "5¹",
          "5⁷"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Simplify 7⁹ ÷ 7³. Give your answer as a power of 7.",
        "options": [
          "7⁶",
          "7³",
          "1⁶",
          "7¹²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify (3²)⁴. Give your answer as a power of 3.",
        "options": [
          "3⁶",
          "3⁸",
          "9⁸",
          "3¹⁶"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is 10⁶ as an ordinary number?",
        "options": [
          "600 000",
          "10 000 000",
          "1 000 000",
          "100 000"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 45 000 in standard form.",
        "options": [
          "45 × 10³",
          "4.5 × 10³",
          "0.45 × 10⁵",
          "4.5 × 10⁴"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the value of 6⁰?",
        "options": [
          "1",
          "0",
          "6",
          "60"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 0.0007 in standard form.",
        "options": [
          "7 × 10⁻³",
          "7 × 10⁻⁴",
          "7 × 10⁴",
          "0.7 × 10⁻³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 3.2 × 10⁵ as an ordinary number.",
        "options": [
          "3 200 000",
          "32 000",
          "320 000",
          "0.000032"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the value of 25^(1/2)?",
        "options": [
          "12.5",
          "625",
          "1/25",
          "5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "What is the value of 4⁻¹?",
        "options": [
          "1/4",
          "−4",
          "−1/4",
          "4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify √12.",
        "options": [
          "3√2",
          "2√3",
          "4√3",
          "6√2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "What is the exact area of a circle of radius 3 cm?",
        "options": [
          "6π cm²",
          "3π cm²",
          "9π cm²",
          "28.3 cm²"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Work out (2 × 10³) × (4 × 10⁵). Give your answer in standard form.",
        "options": [
          "8 × 10⁸",
          "8 × 10¹⁵",
          "6 × 10⁸",
          "8 × 10²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out (9 × 10⁷) ÷ (3 × 10²). Give your answer in standard form.",
        "options": [
          "3 × 10⁹",
          "3 × 10⁵",
          "6 × 10⁵",
          "27 × 10⁵"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out (6 × 10⁴) × (5 × 10³). Give your answer in standard form.",
        "options": [
          "30 × 10⁷",
          "3 × 10⁷",
          "3 × 10⁸",
          "3 × 10¹²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify (2x³)⁴.",
        "options": [
          "8x⁷",
          "2x¹²",
          "8x¹²",
          "16x¹²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Evaluate 8^(2/3).",
        "options": [
          "4",
          "5.33",
          "2",
          "16"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Evaluate 16^(−1/2).",
        "options": [
          "−4",
          "1/4",
          "−8",
          "1/8"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Simplify √50 + √8.",
        "options": [
          "√58",
          "10√2",
          "7√2",
          "5√2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Rationalise the denominator of 6/√3 and simplify.",
        "options": [
          "6√3",
          "3√2",
          "√2",
          "2√3"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which is larger, 2⁶ or 6², and by how much?",
        "options": [
          "2⁶, by 28",
          "6², by 28",
          "2⁶, by 12",
          "They are equal"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out (5 × 10⁻³) + (3 × 10⁻²). Give your answer in standard form.",
        "options": [
          "8 × 10⁻⁵",
          "3.5 × 10⁻²",
          "8 × 10⁻²",
          "3.5 × 10⁻³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the value of 2⁻³?",
        "options": [
          "−8",
          "−6",
          "1/8",
          "1/6"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Find the value of n when 3ⁿ = 81 × 3²",
        "options": [
          "4",
          "8",
          "2",
          "6"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Without a calculator, estimate √40 to 1 decimal place.",
        "options": [
          "6.3",
          "6.7",
          "20",
          "6.1"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A calculator display shows 4.7E−3. What is this as an ordinary number?",
        "options": [
          "4700",
          "0.0047",
          "0.00047",
          "−4700"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the exact area of a semicircle of radius 4 cm?",
        "options": [
          "16π cm²",
          "4π cm²",
          "8π cm²",
          "25.1 cm²"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Expand and simplify (3 + √2)(3 − √2).",
        "options": [
          "7",
          "11",
          "9 − 2√2",
          "5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Expand and simplify (2 + √3)².",
        "options": [
          "7",
          "7 + 4√3",
          "4 + 2√3 + 3",
          "7 + 2√3"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "The mass of the Earth is 5.97 × 10²⁴ kg. The mass of the Moon is 7.35 × 10²² kg. How many times heavier is the Earth than the Moon, to the nearest whole number?",
        "options": [
          "8",
          "812",
          "81",
          "0.81"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Rationalise the denominator of 4/(3 − √5) and simplify.",
        "options": [
          "12 + 4√5",
          "(3 + √5)/4",
          "3 − √5",
          "3 + √5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Evaluate (27/8)^(−2/3).",
        "options": [
          "4/9",
          "9/4",
          "−9/4",
          "2/3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Work out (4.2 × 10⁵) − (3.5 × 10⁴). Give your answer in standard form.",
        "options": [
          "7 × 10¹",
          "3.85 × 10⁵",
          "0.7 × 10¹",
          "3.85 × 10⁴"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Given that 2ˣ = 32 and 2ʸ = 1/8, what is the value of x + y?",
        "options": [
          "8",
          "−2",
          "2",
          "−15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify √75 − √27 + √12.",
        "options": [
          "√60",
          "2√3",
          "6√3",
          "4√3"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Find the value of x when 9ˣ = 1/27.",
        "options": [
          "−3/2",
          "−3",
          "3/2",
          "−2/3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A circle of diameter 10 cm is cut out of a square of side 10 cm. What is the exact area that remains?",
        "options": [
          "100 − 10π cm²",
          "100 − 25π cm²",
          "100 − 100π cm²",
          "75π cm²"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.1 */
  "2.1": {
    "name": "Algebraic Notation & Manipulation",
    "green": [
      {
        "q": "How is y + y + y written in algebra?",
        "options": [
          "3y",
          "y³",
          "y + 3",
          "3 + 3y"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How is a × a × b written in algebra?",
        "options": [
          "2ab",
          "a²b",
          "ab²",
          "2a + b"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify 5x + 3x − 2x.",
        "options": [
          "10x",
          "8x",
          "6x",
          "4x"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Expand 4(x + 3).",
        "options": [
          "4x + 3",
          "x + 12",
          "4x + 7",
          "4x + 12"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out the value of 3a + 2 when a = 5.",
        "options": [
          "17",
          "37",
          "10",
          "15"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Factorise fully 6x + 9.",
        "options": [
          "3(2x + 6)",
          "3(2x + 3)",
          "6(x + 3)",
          "9(x + 6)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify (2x + 6)/(x + 3).",
        "options": [
          "2x",
          "6",
          "2",
          "x + 2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which of these is an equation?",
        "options": [
          "5x − 2y",
          "x² + 3x",
          "x + 4 < 9",
          "2x + 1 = 7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Simplify x³ × x⁴.",
        "options": [
          "x⁷",
          "x¹²",
          "2x⁷",
          "x¹"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify 12y⁶ ÷ 3y².",
        "options": [
          "4y³",
          "4y⁴",
          "9y⁴",
          "36y⁸"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the coefficient of x in 7x² − 3x + 5?",
        "options": [
          "7",
          "3",
          "−3",
          "5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify (x³)².",
        "options": [
          "x⁵",
          "x⁹",
          "2x³",
          "x⁶"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Expand and simplify (x + 2)(x + 5).",
        "options": [
          "x² + 7x + 10",
          "x² + 10x + 7",
          "x² + 7x + 7",
          "2x + 7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Factorise x² + 5x + 6.",
        "options": [
          "(x + 6)(x + 1)",
          "(x + 2)(x + 3)",
          "(x + 5)(x + 1)",
          "(x − 2)(x − 3)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Factorise 2x² + 7x + 3.",
        "options": [
          "(2x + 3)(x + 1)",
          "(2x + 1)(x + 1)",
          "(2x + 1)(x + 3)",
          "(x + 1)(x + 3)"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "Expand and simplify 3(x + 4) − 2(x − 1).",
        "options": [
          "x + 14",
          "x + 10",
          "x + 11",
          "5x + 14"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Expand and simplify (x − 3)(x + 7).",
        "options": [
          "x² − 4x − 21",
          "x² + 4x − 21",
          "x² + 4x + 21",
          "x² − 10x − 21"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Factorise x² − 49.",
        "options": [
          "(x − 7)²",
          "(x + 7)²",
          "(x + 7)(x − 7)",
          "x(x − 49)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Factorise fully 8x²y − 12xy².",
        "options": [
          "4(2x²y − 3xy²)",
          "2xy(4x − 6y)",
          "4x(2xy − 3y²)",
          "4xy(2x − 3y)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "v = u + at. Work out v when u = 12, a = −3 and t = 5.",
        "options": [
          "−3",
          "27",
          "3",
          "−15"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Expand and simplify (x − 5)².",
        "options": [
          "x² + 25",
          "x² − 10x + 25",
          "x² − 25",
          "x² − 10x − 25"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Factorise x² − 2x − 15.",
        "options": [
          "(x + 5)(x − 3)",
          "(x − 15)(x + 1)",
          "(x − 5)(x + 3)",
          "(x − 5)(x − 3)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify (2x³y)³.",
        "options": [
          "6x⁹y³",
          "2x⁹y³",
          "8x⁶y³",
          "8x⁹y³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Expand and simplify (x + 1)(x + 2)(x + 3).",
        "options": [
          "x³ + 6x² + 11x + 6",
          "x³ + 6x² + 6x + 6",
          "x³ + 5x² + 11x + 6",
          "x³ + 6x² + 11x + 5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which of these is an identity?",
        "options": [
          "2x + 3 = 11",
          "3(x + 2) ≡ 3x + 6",
          "x² = 9",
          "y = 2x + 1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out the value of p²q − pq when p = −2 and q = 3.",
        "options": [
          "−6",
          "6",
          "18",
          "−18"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Expand and simplify (√3 + 1)(√3 − 1).",
        "options": [
          "4",
          "2√3",
          "√3 − 1",
          "2"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Factorise 3x² + 10x − 8.",
        "options": [
          "(3x − 2)(x + 4)",
          "(3x + 2)(x − 4)",
          "(3x − 4)(x + 2)",
          "(3x + 4)(x − 2)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Simplify (x² − 9)/(x² + x − 6).",
        "options": [
          "(x + 3)/(x − 2)",
          "(x − 3)/(x − 2)",
          "(x − 3)/(x + 2)",
          "−9/(x − 6)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Simplify 2x⁻³ × 5x⁵.",
        "options": [
          "7x²",
          "10x⁻¹⁵",
          "10x²",
          "10x⁸"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Expand and simplify (2x + 3)(x − 4) − (x − 2)².",
        "options": [
          "x² − x − 16",
          "x² − 9x − 8",
          "x² − x − 8",
          "3x² − 9x − 8"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A rectangle is (2x + 1) cm long and (x + 3) cm wide. Which expression gives its area minus its perimeter?",
        "options": [
          "2x² + 13x + 11",
          "2x² + x − 5",
          "2x² + 4x − 1",
          "2x² + x + 11"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Factorise 2x² − 18 fully.",
        "options": [
          "2(x − 3)²",
          "(2x + 6)(x − 3)",
          "2(x + 3)(x − 3)",
          "2(x² − 9)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Expand and simplify (x + 2)²(x − 1).",
        "options": [
          "x³ + 3x² + 8x − 4",
          "x³ + 5x² + 4",
          "x³ + 3x² − 8x − 4",
          "x³ + 3x² − 4"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Write 3/(x + 2) + 2/(x − 1) as a single fraction.",
        "options": [
          "(5x + 1)/((x + 2)(x − 1))",
          "5/(2x + 1)",
          "(5x − 7)/((x + 2)(x − 1))",
          "(5x + 1)/(x² + 2)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Expand and simplify (2 + √5)².",
        "options": [
          "9",
          "9 + 4√5",
          "4 + 2√5 + 5",
          "9 + 2√5"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "(x + a)(x + 5) ≡ x² + bx + 15. What is the value of b?",
        "options": [
          "b = 3",
          "b = 15",
          "b = 8",
          "b = 5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify fully (2x² + 5x − 3)/(4x² − 1).",
        "options": [
          "(x + 3)/(2x − 1)",
          "(x − 3)/(2x + 1)",
          "(5x − 3)/(4x − 1)",
          "(x + 3)/(2x + 1)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Work out the value of 2x² − 5x + 1 when x = −3.",
        "options": [
          "34",
          "4",
          "52",
          "−2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Expand and simplify (x − 1)(x + 2)(2x + 3).",
        "options": [
          "2x³ + 5x² + x − 6",
          "2x³ + 5x² − x − 6",
          "2x³ + 3x² − x − 6",
          "2x³ + 5x² − 7x − 6"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.2 */
  "2.2": {
    "name": "Formulae, Identities, Proof & Functions",
    "green": [
      {
        "q": "Make x the subject of y = x + 7.",
        "options": [
          "x = y − 7",
          "x = y + 7",
          "x = 7 − y",
          "x = 7y"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Make a the subject of P = 4a.",
        "options": [
          "a = 4P",
          "a = P/4",
          "a = P − 4",
          "a = 4/P"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Use A = lw to find A when l = 8 and w = 3.5.",
        "options": [
          "11.5",
          "24",
          "28",
          "4.5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these is an identity?",
        "options": [
          "3x + 1 = 10x − 8",
          "x² + 4 = 20",
          "y = 3x − 2",
          "4(x − 2) ≡ 4x − 8"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A function machine multiplies the input by 3 and then adds 5. What is the output when the input is 4?",
        "options": [
          "17",
          "27",
          "12",
          "32"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A function machine multiplies by 2 and then subtracts 1. The output is 15. What was the input?",
        "options": [
          "29",
          "8",
          "7",
          "16"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make t the subject of v = u + at.",
        "options": [
          "t = v − u − a",
          "t = (v + u)/a",
          "t = (v − u)/a",
          "t = a(v − u)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Use s = ut + ½at² to find s when u = 0, a = 10 and t = 3.",
        "options": [
          "30",
          "90",
          "15",
          "45"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "f(x) = 3x − 2. Find f(4).",
        "options": [
          "10",
          "14",
          "5",
          "2"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which symbol means \"is identically equal to\"?",
        "options": [
          "=",
          "≡",
          "≈",
          "≠"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make r the subject of C = 2πr.",
        "options": [
          "r = 2πC",
          "r = C − 2π",
          "r = C/(2π)",
          "r = 2π/C"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "g(x) = x² + 1. Find g(−3).",
        "options": [
          "−8",
          "7",
          "−5",
          "10"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which statement is true for every value of x?",
        "options": [
          "2(x + 3) = 2x + 6",
          "2x + 3 = 9 − x",
          "x² + 1 = 2x + 1",
          "3(x + 1) = 3x + 1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Use F = ma to find a when F = 24 and m = 6.",
        "options": [
          "144",
          "4",
          "18",
          "30"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "n is an integer. Which expression is always even?",
        "options": [
          "n + 2",
          "2n + 1",
          "2n",
          "n²"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Make x the subject of y = (x + 3)/4.",
        "options": [
          "x = 4y − 3",
          "x = 4(y − 3)",
          "x = y/4 − 3",
          "x = 4y + 3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Make r the subject of A = πr² (r > 0).",
        "options": [
          "r = A/π²",
          "r = √(A/π)",
          "r = √A − π",
          "r = √(πA)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make x the subject of 5x − 2y = 3.",
        "options": [
          "x = (3 − 2y)/5",
          "x = 5(3 + 2y)",
          "x = (3 + 2y)/5",
          "x = (2y − 3)/5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Use v² = u² + 2as to find v (v > 0) when u = 3, a = 4 and s = 2.",
        "options": [
          "25",
          "11",
          "7",
          "5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "f(x) = 2x + 1 and g(x) = x². Work out fg(3).",
        "options": [
          "19",
          "49",
          "16",
          "13"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "f(x) = 5x − 3. Find f⁻¹(x).",
        "options": [
          "(x − 3)/5",
          "(x + 3)/5",
          "1/(5x − 3)",
          "5x + 3"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Use F = 9C/5 + 32 to convert 25 °C to degrees Fahrenheit.",
        "options": [
          "45 °F",
          "57 °F",
          "77 °F",
          "82 °F"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Make h the subject of V = ⅓πr²h.",
        "options": [
          "h = V/(3πr²)",
          "h = 3Vπr²",
          "h = πr²/(3V)",
          "h = 3V/(πr²)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "n is an integer. Which expression is always odd?",
        "options": [
          "2n + 1",
          "2n + 2",
          "n + 1",
          "3n"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these is NOT an identity?",
        "options": [
          "(x + 1)² ≡ x² + 2x + 1",
          "(x + 2)² = x² + 4",
          "x(x − 3) ≡ x² − 3x",
          "(x + 3)(x − 3) ≡ x² − 9"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "f(x) = x² − 4 and g(x) = x + 1. Find gf(x).",
        "options": [
          "x² + 2x − 3",
          "x² − 5",
          "x² − 3",
          "(x² − 4)(x + 1)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Make x the subject of y = 3x² − 5.",
        "options": [
          "x = √(y/3 + 5)",
          "x = √(3y + 5)",
          "x = (y + 5)/3",
          "x = ±√((y + 5)/3)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Make x the subject of ax + b = cx + d.",
        "options": [
          "x = (d − b)/(a − c)",
          "x = (d + b)/(a − c)",
          "x = (d − b)/(a + c)",
          "x = (b − d)/(a + c)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "f(x) = 4x + 7. Solve f⁻¹(x) = 3.",
        "options": [
          "x = −1",
          "x = 19",
          "x = 3",
          "x = 10"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "n is an integer. The sum n + (n + 1) + (n + 2) is always…",
        "options": [
          "even",
          "odd",
          "a multiple of 3",
          "a multiple of 6"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Make x the subject of y = (2x + 1)/(x − 3).",
        "options": [
          "x = (3y + 1)/(y − 2)",
          "x = (3y − 1)/(y − 2)",
          "x = (3y + 1)/(y + 2)",
          "x = (y + 1)/(y − 2)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "n is an integer. (2n + 1)² − (2n − 1)² simplifies to…",
        "options": [
          "4n, always a multiple of 4",
          "8n, always a multiple of 8",
          "2, always even",
          "8n + 2, always even"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "f(x) = 3x − 1 and g(x) = x/2 + 4. Solve fg(x) = 14.",
        "options": [
          "x = 1",
          "x = 6",
          "x = 2",
          "x = 10"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Use s = ut + ½at² to find u when s = 50, t = 4 and a = 5.",
        "options": [
          "u = 7.5",
          "u = 22.5",
          "u = 10",
          "u = 2.5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "f(x) = (x + 5)/2. Find f⁻¹(x).",
        "options": [
          "2x − 5",
          "2x + 5",
          "(x − 5)/2",
          "2(x + 5)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The sum of two consecutive odd numbers, (2n + 1) + (2n + 3), is always a multiple of…",
        "options": [
          "8",
          "4",
          "3",
          "6"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make a the subject of 3(a + b) = ab + 7.",
        "options": [
          "a = (7 + 3b)/(3 − b)",
          "a = (7 − 3b)/(3 + b)",
          "a = (7 − 3b)/(3 − b)",
          "a = (3b − 7)/(3 − b)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "4(x + a) − 3(x − 2) ≡ x + 14. Find the value of a.",
        "options": [
          "a = 5",
          "a = 3.5",
          "a = 8",
          "a = 2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "f(x) = x² and g(x) = x − 3. Solve fg(x) = gf(x).",
        "options": [
          "x = 2",
          "x = 1",
          "x = −2",
          "x = 0"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Make u the subject of v² = u² + 2as (u > 0).",
        "options": [
          "u = v − √(2as)",
          "u = √(v² − 2as)",
          "u = √(v²) − 2as",
          "u = (v² − 2as)²"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.3 */
  "2.3": {
    "name": "Linear Graphs & Coordinates",
    "green": [
      {
        "q": "Point P is 3 units left of the origin and 2 units up. What are the coordinates of P?",
        "options": [
          "(−3, 2)",
          "(2, −3)",
          "(3, −2)",
          "(−2, 3)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In which quadrant does the point (−4, 5) lie?",
        "options": [
          "First",
          "Second",
          "Third",
          "Fourth"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the gradient of the line y = 4x − 7?",
        "options": [
          "−7",
          "7",
          "4",
          "−4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the y-intercept of the line y = 3x + 5?",
        "options": [
          "(5, 0)",
          "(3, 0)",
          "(0, 3)",
          "(0, 5)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the midpoint of (2, 6) and (8, 10)?",
        "options": [
          "(5, 8)",
          "(6, 4)",
          "(10, 16)",
          "(3, 2)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which line is parallel to y = 2x + 1?",
        "options": [
          "y = x + 2",
          "y = 2x − 5",
          "y = −2x + 1",
          "y = ½x + 1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Two lines have gradients m₁ and m₂. Which condition means the lines are perpendicular?",
        "options": [
          "m₁ = m₂",
          "m₁ + m₂ = 0",
          "m₁ × m₂ = −1",
          "m₁ × m₂ = 1"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A line passes through (0, 1) and (2, 7). What is its gradient?",
        "options": [
          "6",
          "1/3",
          "2",
          "3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these lines is horizontal?",
        "options": [
          "y = 4",
          "x = 4",
          "y = 4x",
          "y = x + 4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which point lies on the line y = 2x + 3?",
        "options": [
          "(2, 6)",
          "(1, 5)",
          "(0, 2)",
          "(3, 8)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which line is perpendicular to y = −2x + 5?",
        "options": [
          "y = 2x + 5",
          "y = −½x + 3",
          "y = ½x − 4",
          "y = −2x − 1"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A line has gradient −2 and y-intercept 7. What is its equation?",
        "options": [
          "y = 7x − 2",
          "y = 2x + 7",
          "y = −2x − 7",
          "y = −2x + 7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What does a negative gradient tell you about a straight line?",
        "options": [
          "It slopes down as x increases",
          "It slopes up from left to right",
          "It is a horizontal line",
          "It passes through the origin"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the gradient of a line perpendicular to y = 3x + 1?",
        "options": [
          "3",
          "−1/3",
          "1/3",
          "−3"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Where does the line y = 5x − 10 cross the y-axis?",
        "options": [
          "(0, 10)",
          "(2, 0)",
          "(0, −10)",
          "(−10, 0)"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Find the equation of the line through (1, 5) and (3, 11).",
        "options": [
          "y = 3x + 2",
          "y = 3x + 5",
          "y = 2x + 3",
          "y = 6x − 1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A line has gradient 4 and passes through (2, 3). What is its equation?",
        "options": [
          "y = 4x + 3",
          "y = 4x − 5",
          "y = 4x + 11",
          "y = 2x + 3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the gradient of the line 3x + y = 12?",
        "options": [
          "3",
          "12",
          "−3",
          "4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the gradient of the line 2x + 4y = 8?",
        "options": [
          "2",
          "−2",
          "1/2",
          "−1/2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The midpoint of AB is (4, 1). A is the point (1, −3). What are the coordinates of B?",
        "options": [
          "(7, 5)",
          "(2.5, −1)",
          "(5, −2)",
          "(3, 4)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Where does the line y = 2x − 8 cross the x-axis?",
        "options": [
          "(0, −8)",
          "(4, 0)",
          "(−4, 0)",
          "(8, 0)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which line is parallel to 2y = 6x − 1?",
        "options": [
          "y = 6x + 2",
          "y = −3x + 1",
          "y = 3x + 4",
          "y = 2x − 1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A taxi fare is C = 2.5m + 4, where m is the number of miles and C is the cost in £. What does the 4 represent?",
        "options": [
          "The cost per mile in pounds",
          "The total cost of a 4-mile trip",
          "The number of miles travelled",
          "A fixed charge of £4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A line passes through (−2, 1) and (4, −2). What is its gradient?",
        "options": [
          "−1/2",
          "−2",
          "1/2",
          "2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which point lies on the line 3x − 2y = 6?",
        "options": [
          "(0, 3)",
          "(2, 0)",
          "(4, 2)",
          "(1, −1)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the gradient of a line perpendicular to the line through (1, 2) and (5, 4)?",
        "options": [
          "1/2",
          "2",
          "−2",
          "−1/2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Line A is y = ¼x − 3. Line B is perpendicular to line A and passes through (0, 6). What is the equation of line B?",
        "options": [
          "y = ¼x + 6",
          "y = −¼x + 6",
          "y = 4x + 6",
          "y = −4x + 6"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which pair of lines is perpendicular?",
        "options": [
          "y = 3x and y = −⅓x + 2",
          "y = 3x + 1 and y = 3x − 2",
          "y = 2x + 1 and y = −2x + 1",
          "y = ½x and y = −½x"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "What is the y-intercept of the line 2y = 6x + 4?",
        "options": [
          "(0, 4)",
          "(0, 2)",
          "(0, 6)",
          "(−2/3, 0)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Is the line y = −2x + 3 perpendicular to the line x − 2y = 4?",
        "options": [
          "No, the gradients are −2 and 2",
          "No, the gradients are −2 and −½",
          "Yes, the gradients are −2 and ½",
          "Yes, they are both straight lines"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A line passes through (−1, 7) and (3, −1). Where does it cross the x-axis?",
        "options": [
          "(2.5, 0)",
          "(0, 5)",
          "(−2.5, 0)",
          "(5, 0)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A plumber charges a fixed call-out fee plus an hourly rate. A 2-hour job costs £110 and a 5-hour job costs £215. What is the call-out fee?",
        "options": [
          "£35",
          "£40",
          "£55",
          "£75"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A is (2, 3) and B is (6, 11). Line L is parallel to AB and passes through (1, −4). What is the equation of L?",
        "options": [
          "y = 2x − 4",
          "y = ½x − 4.5",
          "y = 2x − 6",
          "y = 2x − 2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The line y = 3x + k passes through the midpoint of (−2, 5) and (6, 1). Find k.",
        "options": [
          "3",
          "9",
          "−6",
          "−3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Find the equation of the line perpendicular to y = 2x − 1 that passes through (4, 3).",
        "options": [
          "y = −½x + 5",
          "y = −½x + 1",
          "y = 2x − 5",
          "y = ½x + 1"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "What is the equation of the perpendicular bisector of A(1, 2) and B(5, 6)?",
        "options": [
          "y = x + 1",
          "y = −x + 7",
          "y = −x + 4",
          "y = x + 7"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Line L has equation 3y − 2x = 9. Which statement is true?",
        "options": [
          "L has gradient 2 and y-intercept 9",
          "L has gradient −2/3 and y-intercept 3",
          "L has gradient 2/3 and y-intercept 3",
          "L has gradient 3/2 and y-intercept 3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A line through (0, −2) and (k, 10) has gradient 4. Find k.",
        "options": [
          "2",
          "8",
          "12",
          "3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A is (−1, 2), B is (3, 4) and C is (k, 0). AB is perpendicular to BC. Find k.",
        "options": [
          "5",
          "1",
          "−5",
          "11"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A quadrilateral has vertices (1, 1), (5, 3), (4, 6) and (0, 4). Using gradients and lengths, what type of quadrilateral is it?",
        "options": [
          "Rectangle",
          "Parallelogram",
          "Kite",
          "Trapezium (only one pair of parallel sides)"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.4 */
  "2.4": {
    "name": "Non-linear Graphs",
    "green": [
      {
        "q": "What shape is the graph of y = x² − 4?",
        "options": [
          "A U-shaped parabola",
          "A straight line",
          "An S-shaped curve",
          "Two separate curves in opposite quadrants"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What are the roots of a quadratic graph?",
        "options": [
          "Where it crosses the y-axis",
          "Where it crosses the x-axis",
          "Its lowest or highest point",
          "Its line of symmetry"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The graph of y = x² − 2x − 8 crosses the x-axis at x = −2 and x = 4. What is the equation of its line of symmetry?",
        "options": [
          "x = 2",
          "x = −1",
          "x = 1",
          "x = 3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Where does the graph of y = x² + 3x − 10 cross the y-axis?",
        "options": [
          "(0, 10)",
          "(−10, 0)",
          "(0, 3)",
          "(0, −10)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which equation has a reciprocal graph?",
        "options": [
          "y = 1/x",
          "y = x² + 1",
          "y = x³",
          "y = 2x + 1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which equation has an S-shaped cubic graph through the origin?",
        "options": [
          "y = x²",
          "y = x³",
          "y = 1/x",
          "y = 3x"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "On a distance–time graph, what does a horizontal line show?",
        "options": [
          "Constant speed",
          "Accelerating",
          "The object is stationary",
          "Travelling back towards the start"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "On a distance–time graph, what does the gradient represent?",
        "options": [
          "Distance travelled",
          "Acceleration",
          "Time taken",
          "Speed"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which value of x cannot be used in y = 1/x?",
        "options": [
          "0",
          "1",
          "−1",
          "Any negative value"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "For the graph y = x², what is the value of y when x = −3?",
        "options": [
          "−9",
          "9",
          "−6",
          "6"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the equation of the circle with centre at the origin and radius 5?",
        "options": [
          "x² + y² = 5",
          "x + y = 25",
          "x² + y² = 25",
          "x² − y² = 25"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "What is the period of the graph y = sin x (x in degrees)?",
        "options": [
          "90°",
          "180°",
          "270°",
          "360°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The graph of y = f(x) is transformed to y = f(x) + 3. What is the transformation?",
        "options": [
          "Translation 3 units up",
          "Translation 3 units down",
          "Translation 3 units left",
          "Translation 3 units right"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which point does every graph of the form y = kˣ (k > 0) pass through?",
        "options": [
          "(1, 0)",
          "(0, 1)",
          "(0, 0)",
          "(1, 1)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A cubic graph crosses the x-axis at x = −1, x = 0 and x = 2. How many roots does it have?",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "By solving x² − 5x + 6 = 0, find where the graph of y = x² − 5x + 6 crosses the x-axis.",
        "options": [
          "x = 2 and x = 3",
          "x = −2 and x = −3",
          "x = 1 and x = 6",
          "x = −1 and x = 6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What are the coordinates of the turning point of y = (x − 1)(x − 7)?",
        "options": [
          "(4, 9)",
          "(4, −9)",
          "(−4, −9)",
          "(1, 7)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A student has drawn the graph of y = x² − 3. Which line should they draw to solve x² − 3 = 6?",
        "options": [
          "y = 3",
          "y = −3",
          "y = 6",
          "x = 6"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A car travels 120 km in 1.5 hours at a constant speed. What is the gradient of its distance–time graph, in km/h?",
        "options": [
          "180",
          "60",
          "1.25",
          "80"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "For y = 1/x, what happens to y as x becomes very large and positive?",
        "options": [
          "y gets closer to 0",
          "y gets very large",
          "y becomes negative",
          "y equals 1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A speed–time graph is a straight line from 0 m/s to 24 m/s over 8 seconds. What is the acceleration?",
        "options": [
          "192 m/s²",
          "3 m/s²",
          "16 m/s²",
          "0.33 m/s²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "x² + 6x + 2 = (x + 3)² − 7. What is the turning point of y = x² + 6x + 2?",
        "options": [
          "(3, −7)",
          "(−3, 11)",
          "(−3, −7)",
          "(−6, −34)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The graph of y = x² is transformed to y = (x − 4)². Which translation vector (right, up) describes this?",
        "options": [
          "Translation by (0, 4)",
          "Translation by (−4, 0)",
          "Translation by (0, −4)",
          "Translation by (4, 0)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which is the equation of the tangent to x² + y² = 25 at the point (3, 4)?",
        "options": [
          "3x + 4y = 25",
          "4x + 3y = 25",
          "3x − 4y = 25",
          "4x − 3y = 25"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "How many solutions does sin x = 0.5 have for 0° ≤ x ≤ 360°?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "The graph of y = f(x) has a maximum point at (2, 5). What is the maximum point of y = f(x) − 3?",
        "options": [
          "(−1, 5)",
          "(5, 5)",
          "(2, 2)",
          "(2, 8)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A tank fills at a constant rate. The depth rises from 20 cm to 80 cm in 15 minutes. What is the rate of change of depth?",
        "options": [
          "5.33 cm/min",
          "0.25 cm/min",
          "6 cm/min",
          "4 cm/min"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which equation has a graph with two separate branches that never touch either axis?",
        "options": [
          "y = 4/x",
          "y = 4x",
          "y = x² + 4",
          "y = x³ + 4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The value of an investment is V = 500 × 1.04ᵗ. Where does its graph cross the vertical (V) axis?",
        "options": [
          "V = 520",
          "V = 500",
          "V = 1.04",
          "V = 0"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "What are the roots of y = x² − 9?",
        "options": [
          "x = 3 only",
          "x = ±9",
          "x = ±3",
          "x = 9 only"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "By completing the square, find the turning point of y = x² − 8x + 20.",
        "options": [
          "(4, 4)",
          "(−4, 4)",
          "(4, 36)",
          "(8, 20)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A ball's height is h = 20t − 5t² metres after t seconds. After how long does it land (h = 0, t > 0)?",
        "options": [
          "2 s",
          "4 s",
          "20 s",
          "5 s"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The graph of y = f(x) has a minimum point at (3, −2). What is the minimum point of y = f(x + 3)?",
        "options": [
          "(6, −2)",
          "(3, 1)",
          "(0, −2)",
          "(3, −5)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A car accelerates uniformly from rest to 20 m/s in 10 s, then travels at 20 m/s for 15 s. Using the area under the velocity–time graph, how far does it travel?",
        "options": [
          "300 m",
          "500 m",
          "700 m",
          "400 m"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The graph of y = x² − 4x + 1 is drawn. Which straight line should be drawn on the same axes to solve x² − 5x + 3 = 0?",
        "options": [
          "y = x − 2",
          "y = −x + 2",
          "y = x + 2",
          "y = 5x − 3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The graph of y = x² + bx + c crosses the x-axis at (−1, 0) and (5, 0). Find b and c.",
        "options": [
          "b = 4, c = 5",
          "b = −4, c = −5",
          "b = −6, c = −5",
          "b = 4, c = −5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (−1, 7) lies on the circle x² + y² = 50. What is the gradient of the tangent at this point?",
        "options": [
          "−7",
          "7",
          "1/7",
          "−1/7"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A cyclist's distance–time graph is a straight line from (0 min, 0 km) to (40 min, 12 km). What is the speed in km/h?",
        "options": [
          "0.3 km/h",
          "30 km/h",
          "4.8 km/h",
          "18 km/h"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The point (−4, 3) lies on the graph of y = f(x). Which point must lie on the graph of y = f(−x)?",
        "options": [
          "(4, 3)",
          "(−4, −3)",
          "(4, −3)",
          "(3, −4)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which is the best description of the graph of y = x³ − 4x?",
        "options": [
          "A parabola with roots −2 and 2",
          "A cubic with roots −2, 0 and 2",
          "A cubic with roots 0 and 4 only",
          "A reciprocal curve with asymptote x = 0"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.5 */
  "2.5": {
    "name": "Equations & Inequalities",
    "green": [
      {
        "q": "Solve 4x + 9 = 37.",
        "options": [
          "x = 7",
          "x = 11.5",
          "x = 6",
          "x = 28"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve 3(x − 2) = 18.",
        "options": [
          "x = 6",
          "x = 8",
          "x = 20/3",
          "x = 4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Solve x/5 − 2 = 4.",
        "options": [
          "x = 10",
          "x = 2/5",
          "x = 30",
          "x = 22"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve 7x − 4 = 3x + 16.",
        "options": [
          "x = 3",
          "x = 1.2",
          "x = 2",
          "x = 5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which integers satisfy −1 < x ≤ 3?",
        "options": [
          "0, 1, 2, 3",
          "−1, 0, 1, 2, 3",
          "0, 1, 2",
          "−1, 0, 1, 2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve 2x + 3 > 11.",
        "options": [
          "x > 7",
          "x > 4",
          "x ≥ 4",
          "x < 4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A number line shows a closed (filled) circle at 2 with an arrow pointing to the right. Which inequality does it show?",
        "options": [
          "x > 2",
          "x < 2",
          "x ≥ 2",
          "x ≤ 2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve x² − 9x + 20 = 0 by factorising.",
        "options": [
          "x = −4 or x = −5",
          "x = 2 or x = 10",
          "x = 4 or x = −5",
          "x = 4 or x = 5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Solve (x + 3)(x − 7) = 0.",
        "options": [
          "x = −3 or x = 7",
          "x = 3 or x = −7",
          "x = 3 or x = 7",
          "x = −3 or x = −7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve x² + 2x − 15 = 0.",
        "options": [
          "x = 5 or x = −3",
          "x = −5 or x = 3",
          "x = −5 or x = −3",
          "x = 15 or x = −1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations x + y = 9 and x − y = 3.",
        "options": [
          "x = 3, y = 6",
          "x = 4.5, y = 4.5",
          "x = 6, y = 3",
          "x = 12, y = −3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve 5 − 2x ≤ 13.",
        "options": [
          "x ≤ −4",
          "x ≥ 4",
          "x ≤ 4",
          "x ≥ −4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which is x² + 6x + 1 written in completed-square form?",
        "options": [
          "(x + 3)² − 8",
          "(x + 3)² + 1",
          "(x + 6)² − 35",
          "(x + 3)² − 10"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "How is the solution set x > 2 written in set notation?",
        "options": [
          "{x : x ≥ 2}",
          "{x : x > 2}",
          "{2 : x > 2}",
          "{x > 2 : x}"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Which is the quadratic formula for solving ax² + bx + c = 0?",
        "options": [
          "x = (−b ± √(b² + 4ac)) / (2a)",
          "x = (b ± √(b² − 4ac)) / (2a)",
          "x = (−b ± √(b² − 4ac)) / (2a)",
          "x = −b ± √(b² − 4ac) / 2"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "A rectangle has length (2x + 3) cm and width x cm. Its perimeter is 36 cm. Find x.",
        "options": [
          "x = 5",
          "x = 11",
          "x = 5.5",
          "x = 6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve (2x − 1)/3 = (x + 4)/2.",
        "options": [
          "x = 13",
          "x = 14",
          "x = 5",
          "x = 10"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations 3x + 2y = 19 and x + 2y = 9.",
        "options": [
          "x = 2, y = 5",
          "x = 7, y = 1",
          "x = 5, y = 2",
          "x = 14, y = −2.5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations 2x + 3y = 13 and 5x − 2y = 4.",
        "options": [
          "x = 3, y = 2",
          "x = 1, y = 11/3",
          "x = −2, y = 17/3",
          "x = 2, y = 3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the largest integer n that satisfies 3n − 7 < 14?",
        "options": [
          "6",
          "7",
          "5",
          "4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "List the integers x that satisfy −4 ≤ 2x < 6.",
        "options": [
          "−4, −2, 0, 2, 4",
          "−2, −1, 0, 1, 2",
          "−1, 0, 1, 2",
          "−2, −1, 0, 1, 2, 3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Solve x² = 5x + 14.",
        "options": [
          "x = −7 or x = 2",
          "x = 14 or x = −1",
          "x = 7 or x = −2",
          "x = 7 only"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Use the quadratic formula to solve x² + 4x − 3 = 0. Give your answers to 2 decimal places.",
        "options": [
          "x = 0.65 or x = 4.65",
          "x = −0.65 or x = 4.65",
          "x = 3.29 or x = −0.71",
          "x = 0.65 or x = −4.65"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The graph of y = x² − 2x − 4 crosses the x-axis at about x = −1.2 and x = 3.2. What does this tell you?",
        "options": [
          "x² − 2x − 4 = 0 has solutions x ≈ −1.2 and x ≈ 3.2",
          "x² − 2x − 4 = 0 has no real solutions because the curve dips below the axis",
          "The y-intercepts of the curve are at about −1.2 and 3.2",
          "The minimum points of the curve are at x ≈ −1.2 and x ≈ 3.2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The lines y = 2x + 1 and y = 7 − x are drawn on the same axes. At which point do they intersect?",
        "options": [
          "(5, 2)",
          "(2, 5)",
          "(6, 1)",
          "(3, 4)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "2 adult tickets and 3 child tickets cost £36. 1 adult ticket and 1 child ticket cost £14. How much is one child ticket?",
        "options": [
          "£6",
          "£12",
          "£8",
          "£7.20"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve x² − x − 12 > 0.",
        "options": [
          "−3 < x < 4",
          "x > 4 only",
          "x < −4 or x > 3",
          "x < −3 or x > 4"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Using the iteration xₙ₊₁ = ∛(xₙ + 3) with x₁ = 1.5, find x₂ to 4 decimal places.",
        "options": [
          "1.6510",
          "2.1213",
          "1.6692",
          "0.5000"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The angles of a triangle are x°, 2x° and (3x − 12)°. Find x.",
        "options": [
          "x = 28",
          "x = 32",
          "x = 30",
          "x = 34"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which point satisfies all three inequalities y > 1, x + y < 6 and y ≤ 2x?",
        "options": [
          "(2, 1)",
          "(3, 3)",
          "(2, 3)",
          "(1, 3)"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A rectangle has length (x + 5) cm and width (x − 2) cm. Its area is 60 cm². Find x.",
        "options": [
          "x = 7",
          "x = 10",
          "x = 7 or x = −10",
          "x = 5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Ben is 3 times as old as Amy. In 5 years’ time the sum of their ages will be 46. How old is Amy now?",
        "options": [
          "11.5",
          "9",
          "27",
          "10.25"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find all the integers that satisfy both 2x + 1 > 5 and 3x − 4 ≤ 11.",
        "options": [
          "2, 3, 4, 5",
          "3, 4",
          "3, 4, 5",
          "2, 3, 4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations y = x + 1 and x² + y² = 13.",
        "options": [
          "x = 2, y = 3 only",
          "x = −2, y = −1 and x = 3, y = 4",
          "x = 3, y = 2 and x = −2, y = −3",
          "x = 2, y = 3 and x = −3, y = −2"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "f(x) = x³ − 5x + 1. Which statement correctly shows that f(x) = 0 has a root between x = 2 and x = 3?",
        "options": [
          "f(2) = −1 and f(3) = 13; the sign changes",
          "f(2) = 1 and f(3) = 13; both values are positive",
          "f(2) = −1 and f(3) = −13; there is no sign change",
          "f(2) = 19 and f(3) = 43; the values are increasing"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Write 2x² − 12x + 5 in the form a(x + b)² + c.",
        "options": [
          "2(x − 3)² + 5",
          "2(x − 3)² − 13",
          "2(x − 6)² − 67",
          "(2x − 3)² − 4"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "3 teas and 2 coffees cost £5.90. 2 teas and 3 coffees cost £6.10. How much does one coffee cost?",
        "options": [
          "£1.10",
          "£1.20",
          "£1.30",
          "£2.40"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve 2x² + 5x − 3 ≤ 0.",
        "options": [
          "x ≤ −3 or x ≥ 1/2",
          "−1/2 ≤ x ≤ 3",
          "−3 < x < 1/2",
          "−3 ≤ x ≤ 1/2"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Solve (x + 1)/2 + (x − 2)/3 = 4.",
        "options": [
          "x = 5",
          "x = 4.6",
          "x = 25",
          "x = 5.4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A rectangle measures (3x − 1) cm by (x + 4) cm. A square has side (x + 3) cm. The two shapes have equal perimeters. Find the side length of the square.",
        "options": [
          "1.5 cm",
          "4.5 cm",
          "18 cm",
          "6 cm"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.6 */
  "2.6": {
    "name": "Sequences",
    "green": [
      {
        "q": "What is the next term in the sequence 4, 11, 18, 25, …?",
        "options": [
          "32",
          "31",
          "33",
          "36"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the nth term of the sequence 7, 11, 15, 19, …?",
        "options": [
          "n + 4",
          "4n + 3",
          "4n + 7",
          "3n + 4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the 20th term of the sequence with nth term 5n − 2?",
        "options": [
          "103",
          "100",
          "98",
          "52"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The triangular numbers begin 1, 3, 6, 10, 15, … What is the next triangular number?",
        "options": [
          "20",
          "25",
          "30",
          "21"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the term-to-term rule for 3, 6, 12, 24, …?",
        "options": [
          "Multiply by 2",
          "Add 3",
          "Add 6",
          "Multiply by 3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these is a cube number?",
        "options": [
          "36",
          "64",
          "81",
          "100"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What are the first three terms of the sequence with nth term 3n + 5?",
        "options": [
          "5, 8, 11",
          "3, 8, 13",
          "8, 11, 14",
          "8, 13, 18"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In a Fibonacci-type sequence each term is the sum of the two terms before it. What is the next term of 2, 5, 7, 12, 19, …?",
        "options": [
          "26",
          "24",
          "38",
          "31"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is an arithmetic sequence?",
        "options": [
          "20, 17, 14, 11",
          "1, 4, 9, 16",
          "2, 4, 8, 16",
          "1, 1, 2, 3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the nth term of the sequence 30, 26, 22, 18, …?",
        "options": [
          "4n + 26",
          "34 − 4n",
          "30 − 4n",
          "26 − 4n"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the common ratio of the geometric sequence 81, 27, 9, 3, …?",
        "options": [
          "3",
          "−54",
          "1/3",
          "−3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the 5th square number?",
        "options": [
          "10",
          "16",
          "36",
          "25"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The sequence 4, 10, 20, 34, 52, … is quadratic. What is the coefficient of n² in its nth term?",
        "options": [
          "2",
          "4",
          "6",
          "1"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "What is the next term of the geometric sequence √2, 2, 2√2, 4, …?",
        "options": [
          "6",
          "4√2",
          "8",
          "5√2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "What is the nth term of the sequence 2, 5, 10, 17, 26, …?",
        "options": [
          "n² + 3",
          "2n² + 1",
          "n² + 1",
          "3n − 1"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "Is 75 a term in the sequence with nth term 4n + 3?",
        "options": [
          "Yes, it is the 18th term",
          "No, because 75 is odd",
          "Yes, it is the 19th term",
          "No, 4n + 3 is always even"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A sequence has nth term 6n − 1. Which is the first term greater than 100?",
        "options": [
          "16th",
          "17th",
          "18th",
          "101st"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Pattern 1 uses 4 matchsticks, pattern 2 uses 7 and pattern 3 uses 10. How many matchsticks are in pattern 50?",
        "options": [
          "150",
          "153",
          "151",
          "200"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A Fibonacci-type sequence starts 3, x, … (each term is the sum of the previous two). Its 5th term is 30. Find x.",
        "options": [
          "x = 9",
          "x = 6",
          "x = 7",
          "x = 8"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A geometric sequence has first term 2 and common ratio 3. What is the 5th term?",
        "options": [
          "162",
          "486",
          "54",
          "30"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the 6th term of the sequence with nth term n² + 2n?",
        "options": [
          "36",
          "48",
          "42",
          "63"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What name is given to the sequence 1, 8, 27, 64, …?",
        "options": [
          "Triangular numbers",
          "Square numbers",
          "Cube numbers",
          "Powers of 2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these sequences is quadratic (has a constant second difference)?",
        "options": [
          "3, 6, 12, 24",
          "5, 9, 13, 17",
          "1, 2, 3, 5, 8",
          "4, 7, 12, 19"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the nth term of the sequence 1/2, 2/3, 3/4, 4/5, …?",
        "options": [
          "n/(n + 1)",
          "(n + 1)/n",
          "n/(n + 2)",
          "1/(n + 1)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the nth term of the sequence 3, 9, 19, 33, 51, …?",
        "options": [
          "n² + 2",
          "2n² + 1",
          "2n² + 3",
          "4n² − 1"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "What is the nth term of the sequence 4, 11, 22, 37, 56, …?",
        "options": [
          "2n² + 3n − 1",
          "4n² − n + 1",
          "2n² + n + 1",
          "2n² + 2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A geometric sequence has first term 3 and common ratio √3. What is the 5th term?",
        "options": [
          "9√3",
          "27√3",
          "81",
          "27"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "What is the next term of the sequence 5, −10, 20, −40, …?",
        "options": [
          "80",
          "−80",
          "−20",
          "60"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The 4th term of an arithmetic sequence is 17 and the 9th term is 42. What is the nth term?",
        "options": [
          "5n + 2",
          "5n − 3",
          "5n − 2",
          "4n + 1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which term of the sequence 50, 47, 44, 41, … is the first negative term?",
        "options": [
          "17th",
          "19th",
          "18th",
          "16th"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A quadratic sequence begins 6, 13, 24, 39, … What is its 10th term?",
        "options": [
          "213",
          "203",
          "223",
          "303"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Sequence A has nth term 3n + 4. Sequence B has nth term 54 − 2n. In one position both sequences have the same term. What is that term?",
        "options": [
          "10",
          "34",
          "24",
          "44"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Pattern 1 has 8 tiles, pattern 2 has 12 tiles and pattern 3 has 16 tiles. Can a pattern use exactly 98 tiles?",
        "options": [
          "Yes, pattern 24 uses 98",
          "Yes, pattern 23 uses 98",
          "No, 4n + 4 = 98 gives n = 23.5",
          "No, because every pattern in this sequence uses an odd number of tiles"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A geometric sequence begins 2, 2√5, … What is its 4th term?",
        "options": [
          "50",
          "50√5",
          "2√15",
          "10√5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A Fibonacci-type sequence has 3rd term 7 and 6th term 31. What is its first term?",
        "options": [
          "2",
          "5",
          "7",
          "3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A sequence has nth term n² − 6n + 11. What is the smallest term in the sequence?",
        "options": [
          "11",
          "2",
          "3",
          "−9"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A sequence is defined by uₙ₊₁ = 2uₙ − 3 with u₁ = 5. What is u₄?",
        "options": [
          "13",
          "16",
          "19",
          "35"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A geometric sequence with a positive common ratio has 4th term 24 and 6th term 96. What is the first term?",
        "options": [
          "6",
          "1.5",
          "12",
          "3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the nth term of the sequence 10, 13, 14, 13, 10, …?",
        "options": [
          "−n² + 6n + 5",
          "n² + 6n + 5",
          "−2n² + 9n + 3",
          "−n² + 3n + 8"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A sequence begins 2.5, 4, 5.5, 7, … Which term is equal to 46?",
        "options": [
          "31st",
          "30th",
          "29th",
          "46th"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.1 */
  "3.1": {
    "name": "Ratio & Proportion",
    "green": [
      {
        "q": "Write the ratio 12 : 18 in its simplest form.",
        "options": [
          "2 : 3",
          "3 : 2",
          "6 : 9",
          "4 : 6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write the ratio 45 : 60 : 75 in its simplest form.",
        "options": [
          "9 : 12 : 15",
          "3 : 4 : 5",
          "5 : 4 : 3",
          "15 : 20 : 25"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 40 cm : 2 m as a ratio in its simplest form.",
        "options": [
          "20 : 1",
          "1 : 50",
          "1 : 5",
          "40 : 2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Share £60 in the ratio 1 : 2. How much is the larger share?",
        "options": [
          "£30",
          "£20",
          "£45",
          "£40"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Write 15 as a fraction of 40 in its simplest form.",
        "options": [
          "3/8",
          "8/3",
          "15/25",
          "3/5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A map has a scale of 1 : 50 000. What real distance does 1 cm on the map represent?",
        "options": [
          "50 m",
          "500 m",
          "5 km",
          "5000 m"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a class the ratio of boys to girls is 3 : 5. What fraction of the class are girls?",
        "options": [
          "3/5",
          "3/8",
          "5/8",
          "5/3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which symbol means \"is directly proportional to\"?",
        "options": [
          "≈",
          "≡",
          "≠",
          "∝"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "3 pens cost £1.20. How much do 5 pens cost?",
        "options": [
          "£2.00",
          "£1.80",
          "£2.40",
          "£6.00"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write the ratio 1.5 : 6 in the form 1 : n.",
        "options": [
          "1 : 9",
          "1 : 4",
          "1 : 3",
          "1 : 0.25"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "y is directly proportional to x³. When x is doubled, y is multiplied by",
        "options": [
          "6",
          "2",
          "8",
          "9"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "4 workers take 6 days to build a wall. At the same rate, how long would 8 workers take?",
        "options": [
          "12 days",
          "10 days",
          "2 days",
          "3 days"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "y is directly proportional to x². When x is multiplied by 3, y is multiplied by",
        "options": [
          "9",
          "3",
          "6",
          "27"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "y is inversely proportional to the square root of x. Which equation describes this?",
        "options": [
          "y = k√x",
          "y = k/√x",
          "y = k/x",
          "y = √x/k"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A recipe for 4 people uses 300 g of flour. How much flour is needed for 6 people?",
        "options": [
          "400 g",
          "500 g",
          "450 g",
          "600 g"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Share £84 in the ratio 2 : 5. How much is the smaller share?",
        "options": [
          "£24",
          "£60",
          "£16.80",
          "£33.60"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The ratio of red to blue counters in a bag is 3 : 4. There are 18 red counters. How many blue counters are there?",
        "options": [
          "21",
          "24",
          "42",
          "13.5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Rice is sold in a 500 g bag for £2.40 or a 750 g bag for £3.45. Which is better value?",
        "options": [
          "500 g, because it is cheaper",
          "500 g: 0.48p per gram",
          "750 g: 0.46p per gram",
          "They are the same value"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A map has a scale of 1 : 25 000. Two towns are 8 cm apart on the map. How far apart are they in real life?",
        "options": [
          "20 km",
          "0.2 km",
          "200 m",
          "2 km"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A : B = 2 : 3 and B : C = 4 : 5. Find A : C in its simplest form.",
        "options": [
          "8 : 15",
          "2 : 5",
          "6 : 5",
          "10 : 12"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "y is directly proportional to x. y = 12 when x = 4. Find y when x = 10.",
        "options": [
          "40",
          "30",
          "22",
          "18"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "6 identical machines take 10 hours to complete an order. How long would 4 of the machines take?",
        "options": [
          "6.67 hours",
          "12 hours",
          "15 hours",
          "20 hours"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Blue and yellow paint are mixed in the ratio 2 : 7 to make 45 litres of green paint. How much more yellow than blue is used?",
        "options": [
          "35 litres",
          "10 litres",
          "5 litres",
          "25 litres"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "y is directly proportional to x². y = 20 when x = 2. Find y when x = 5.",
        "options": [
          "125",
          "50",
          "100",
          "250"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "y is inversely proportional to x. y = 6 when x = 4. Find y when x = 3.",
        "options": [
          "4.5",
          "8",
          "18",
          "2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The distance d a stone falls is directly proportional to the square of the time t. d = 45 when t = 3. Which formula is correct?",
        "options": [
          "d = 15t²",
          "d = 15t",
          "d = 5t²",
          "d = 5t"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A model car is built to a scale of 1 : 40. The model is 11.5 cm long. How long is the real car?",
        "options": [
          "46 m",
          "0.46 m",
          "51.5 cm",
          "4.6 m"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Two mathematically similar cylinders have heights 6 cm and 9 cm. What is the ratio of their volumes?",
        "options": [
          "8 : 27",
          "4 : 9",
          "2 : 3",
          "16 : 81"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The exchange rate is £1 = €1.16. Convert €290 into pounds.",
        "options": [
          "£336.40",
          "£250",
          "£290",
          "£25"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The ratio x : y is 3 : 4. Which equation connects y and x?",
        "options": [
          "y = 3/4 x",
          "4y = 3x",
          "y = 4/3 x",
          "y = x + 1"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "The ratio of Ali's age to Ben's age is 3 : 5. In 6 years' time the ratio will be 2 : 3. How old is Ali now?",
        "options": [
          "18",
          "12",
          "30",
          "24"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "y is inversely proportional to √x. y = 4 when x = 9. Find y when x = 16.",
        "options": [
          "5.33",
          "3",
          "2.25",
          "6"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A bag holds red and blue beads in the ratio 2 : 3. After 10 red beads are added the ratio becomes 4 : 3. How many blue beads are there?",
        "options": [
          "10",
          "25",
          "15",
          "30"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Two similar solids have surface areas 16 cm² and 36 cm². The smaller has volume 40 cm³. What is the volume of the larger?",
        "options": [
          "90 cm³",
          "60 cm³",
          "202.5 cm³",
          "135 cm³"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Money is shared between A, B and C in the ratio 2 : 3 : 7. C gets £120 more than A. How much money was shared altogether?",
        "options": [
          "£288",
          "£240",
          "£360",
          "£168"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "y is directly proportional to x³. x is increased by 20%. What is the percentage increase in y?",
        "options": [
          "60%",
          "72.8%",
          "20%",
          "44%"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A rectangular field is drawn to a scale of 1 : 2000 as a 6 cm by 4.5 cm rectangle. What is the real area of the field?",
        "options": [
          "54 m²",
          "1080 m²",
          "10 800 m²",
          "108 000 m²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Concrete is made from cement, sand and gravel in the ratio 1 : 2 : 4 by mass. A builder has 50 kg cement, 120 kg sand and 160 kg gravel. What is the greatest mass of concrete she can make?",
        "options": [
          "330 kg",
          "350 kg",
          "420 kg",
          "280 kg"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "y = k/x². When x = 2, y = 10. Find the positive value of x when y = 2.5.",
        "options": [
          "4",
          "8",
          "16",
          "0.5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A straight-line graph of y against x passes through (0, 0) and (3, 7.5). Which describes the relationship?",
        "options": [
          "y = 3x + 7.5",
          "y = 2.5x, so y ∝ x",
          "y = 2.5/x, so y ∝ 1/x",
          "y = x + 4.5"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.2 */
  "3.2": {
    "name": "Percentages, Growth & Decay",
    "green": [
      {
        "q": "Write 35% as a decimal.",
        "options": [
          "0.35",
          "3.5",
          "0.035",
          "35.0"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Find 15% of £80.",
        "options": [
          "£15",
          "£12",
          "£8",
          "£1.20"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the multiplier for an increase of 8%?",
        "options": [
          "0.08",
          "0.92",
          "1.08",
          "1.8"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the multiplier for a decrease of 30%?",
        "options": [
          "1.3",
          "0.3",
          "1.03",
          "0.7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Write 18 as a percentage of 72.",
        "options": [
          "25%",
          "18%",
          "40%",
          "4%"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 3/5 as a percentage.",
        "options": [
          "35%",
          "60%",
          "0.6%",
          "53%"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Increase £40 by 25%.",
        "options": [
          "£45",
          "£65",
          "£50",
          "£10"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "£500 is invested at 3% per year simple interest. How much interest is earned in 4 years?",
        "options": [
          "£15",
          "£20",
          "£562.75",
          "£60"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A shirt costs £24. It is reduced by 10% in a sale. What is the sale price?",
        "options": [
          "£21.60",
          "£14",
          "£2.40",
          "£22.80"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is 150% of 60?",
        "options": [
          "40",
          "90",
          "150",
          "30"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A savings balance uₙ earns 3% interest each year and then £50 is added. Which iterative formula models this?",
        "options": [
          "uₙ₊₁ = 1.3uₙ + 50",
          "uₙ₊₁ = 1.03uₙ − 50",
          "uₙ₊₁ = 1.03uₙ + 50",
          "uₙ₊₁ = 50uₙ + 1.03"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which calculation gives the percentage change?",
        "options": [
          "change ÷ new × 100",
          "original ÷ change × 100",
          "new ÷ original",
          "change ÷ original × 100"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which gives the multiplier for 4% compound interest over 3 years?",
        "options": [
          "1.04³",
          "1.12",
          "3 × 1.04",
          "1.43"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A price rises from £50 to £60. What is the percentage increase?",
        "options": [
          "10%",
          "20%",
          "16.7%",
          "120%"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A car worth £12 000 loses 15% of its value in one year. What is it worth after the year?",
        "options": [
          "£1800",
          "£13 800",
          "£10 200",
          "£11 985"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "£3200 is invested at 2.5% per year compound interest. What is it worth after 2 years?",
        "options": [
          "£3362",
          "£3360",
          "£160",
          "£3280"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "After a 20% increase a price is £72. What was the original price?",
        "options": [
          "£57.60",
          "£60",
          "£86.40",
          "£52"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "After a 35% reduction a coat costs £52. What was the original price?",
        "options": [
          "£70.20",
          "£33.80",
          "£80",
          "£87"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A population of 8000 decreases by 5% each year. What is the population after 3 years?",
        "options": [
          "6800",
          "7600",
          "9261",
          "6859"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Sam scored 42 out of 60 in test A and 54 out of 75 in test B. In which test did he do better?",
        "options": [
          "Test B (72%)",
          "Test A (70%)",
          "Equal (both 72%)",
          "Test A (72%)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Shop A sells a lamp for £45 with 1/3 off. Shop B sells it for £42 with 30% off. Which is cheaper?",
        "options": [
          "Shop A, £30",
          "Shop B, £29.40",
          "Shop A, £15",
          "Same price, both £30"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Increase 240 by 12.5%.",
        "options": [
          "252.5",
          "30",
          "270",
          "262.5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A dog's mass falls from 80 kg to 68 kg. What is the percentage decrease?",
        "options": [
          "12%",
          "17.6%",
          "85%",
          "15%"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A salary increases by 4% one year and by 5% the next year. What single multiplier gives the overall change?",
        "options": [
          "1.092",
          "1.09",
          "1.9",
          "0.092"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "£1000 is invested at 5% per year compound interest. How much interest is earned in 3 years?",
        "options": [
          "£150",
          "£157.63",
          "£1157.63",
          "£115.76"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A car bought for £15 000 depreciates by 12% each year. Which formula gives its value V after n years?",
        "options": [
          "V = 15 000 × 0.12ⁿ",
          "V = 15 000 × 1.12ⁿ",
          "V = 15 000 × 0.88ⁿ",
          "V = 15 000 − 0.12n"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 7.5 kg as a percentage of 2 kg.",
        "options": [
          "37.5%",
          "26.7%",
          "3.75%",
          "375%"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A price of £96 includes VAT at 20%. What is the price before VAT?",
        "options": [
          "£80",
          "£76.80",
          "£115.20",
          "£116"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "uₙ₊₁ = 1.05uₙ − 20 and u₀ = 500. Find u₂.",
        "options": [
          "505",
          "510.25",
          "530.25",
          "551.25"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Pₙ₊₁ = 0.9Pₙ + 50 and P₀ = 200. Find P₁.",
        "options": [
          "180",
          "225",
          "230",
          "250"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A price is increased by 20% and then the new price is decreased by 20%. What is the overall change?",
        "options": [
          "4% decrease",
          "No change",
          "4% increase",
          "2% decrease"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A population follows Pₙ₊₁ = 1.1Pₙ − 300 with P₀ = 4000. After how many years does the population first exceed 4500?",
        "options": [
          "4",
          "5",
          "6",
          "3"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "£5000 is invested at 3% per year compound interest. After how many whole years is it first worth more than £6000?",
        "options": [
          "6",
          "5",
          "7",
          "10"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "An investment grows by 10% per year compound interest. After 2 years it is worth £4840. How much was invested?",
        "options": [
          "£4033.33",
          "£3872",
          "£4400",
          "£4000"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "An investment grows from £2000 to £2662 in 3 years at a constant compound rate. What is the annual rate?",
        "options": [
          "10%",
          "11%",
          "33.1%",
          "11.03%"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Option A: £8000 at 4% simple interest for 5 years. Option B: £8000 at 3.8% compound interest for 5 years. Which gives more, and what is its final value?",
        "options": [
          "A: £9600 beats B",
          "B: £9639.99 beats A",
          "Both give £9600",
          "A: £9733.22 beats B"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a sale prices are cut by 15%. A further 10% is then taken off the sale price. What is the total percentage reduction?",
        "options": [
          "25%",
          "76.5%",
          "23.5%",
          "24%"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A town of 25 000 people grows by 2% per year. What is the population after 10 years, to the nearest hundred?",
        "options": [
          "30 000",
          "30 400",
          "35 000",
          "30 500"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "uₙ₊₁ = 0.8uₙ + 30. The sequence settles to a long-term value. What is it?",
        "options": [
          "150",
          "37.5",
          "30",
          "120"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A trader buys 40 items at £6 each. She sells 30 at £10 each and the rest at £4 each. What is her percentage profit on the cost?",
        "options": [
          "29.4%",
          "41.7%",
          "58.3%",
          "25%"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.3 */
  "3.3": {
    "name": "Compound Measures & Rates of Change",
    "green": [
      {
        "q": "How many centimetres are there in 3.5 m?",
        "options": [
          "350",
          "35",
          "3500",
          "0.35"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Convert 2.4 kg into grams.",
        "options": [
          "240 g",
          "2400 g",
          "24 000 g",
          "24 g"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How many minutes are there in 2.25 hours?",
        "options": [
          "225",
          "125",
          "135",
          "145"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A car travels 150 km in 3 hours. What is its average speed?",
        "options": [
          "450 km/h",
          "45 km/h",
          "5 km/h",
          "50 km/h"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which formula gives density?",
        "options": [
          "mass ÷ volume",
          "volume ÷ mass",
          "mass × volume",
          "mass − volume"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which formula gives pressure?",
        "options": [
          "force × area",
          "force ÷ area",
          "area ÷ force",
          "force + area"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How many cm² are there in 1 m²?",
        "options": [
          "100",
          "1000",
          "10 000",
          "1 000 000"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "How many cm³ are there in 1 litre?",
        "options": [
          "100",
          "10",
          "10 000",
          "1000"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A chord joins two points on a curve. What does the gradient of the chord give?",
        "options": [
          "the average rate of change",
          "the exact rate at one point",
          "the y-intercept of the curve",
          "the area under the curve"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Sam is paid £84 for working 7 hours. What is his hourly rate of pay?",
        "options": [
          "£588",
          "£12",
          "£11",
          "£13"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How long does it take to travel 120 miles at an average speed of 40 mph?",
        "options": [
          "4 hours",
          "2 hours",
          "3 hours",
          "80 hours"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Mass is measured in grams and volume in cm³. What are the units of density?",
        "options": [
          "cm³/g",
          "g cm³",
          "g/cm²",
          "g/cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "On a straight-line distance–time graph, what does the gradient represent?",
        "options": [
          "speed",
          "distance",
          "time",
          "acceleration"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which describes a tangent to a curve?",
        "options": [
          "a line crossing the curve twice",
          "a line touching the curve once",
          "a line joining two points on it",
          "a line parallel to the y-axis"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "3 pens cost £2.40 altogether. What is the cost of one pen?",
        "options": [
          "£7.20",
          "£1.20",
          "£0.80",
          "£0.08"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Convert 72 km/h into m/s.",
        "options": [
          "20 m/s",
          "259.2 m/s",
          "7.2 m/s",
          "2 m/s"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "y = x² + 1. What is the average rate of change of y between x = 2 and x = 4?",
        "options": [
          "12",
          "6",
          "3",
          "8"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A force of 600 N acts on an area of 1.5 m². What is the pressure?",
        "options": [
          "900 N/m²",
          "4 N/m²",
          "400 N/m²",
          "0.0025 N/m²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A train travels 210 km at an average speed of 84 km/h. How long does the journey take?",
        "options": [
          "2 h 5 min",
          "2 h 50 min",
          "1 h 50 min",
          "2 h 30 min"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Pack A: 500 g for £1.80. Pack B: 750 g for £2.55. Which is better value?",
        "options": [
          "Pack B, 34p per 100 g",
          "Pack A, 36p per 100 g",
          "Both are equal value",
          "Pack A, 34p per 100 g"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A metal has density 8 g/cm³. What is the mass of 25 cm³ of the metal?",
        "options": [
          "3.125 g",
          "200 g",
          "33 g",
          "0.32 g"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Convert 4500 cm³ into m³.",
        "options": [
          "4.5 m³",
          "0.45 m³",
          "0.0045 m³",
          "0.00045 m³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A straight-line graph of cost (£) against time (hours) passes through (0, 30) and (4, 110). What is the rate of change?",
        "options": [
          "£27.50 per hour",
          "£30 per hour",
          "£80 per hour",
          "£20 per hour"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The tangent to a curve at x = 3 passes through (1, 2) and (5, 14). Estimate the gradient of the curve at x = 3.",
        "options": [
          "3",
          "4",
          "0.33",
          "2.8"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A car travels for 45 minutes at 64 km/h. How far does it travel?",
        "options": [
          "2880 km",
          "48 km",
          "42.5 km",
          "28.8 km"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Gold has density 19.3 g/cm³. A gold bar has mass 386 g. What is its volume?",
        "options": [
          "7449.8 cm³",
          "0.05 cm³",
          "20 cm³",
          "2 cm³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The pressure on an area of 0.4 m² is 250 N/m². What is the force?",
        "options": [
          "625 N",
          "62.5 N",
          "250.4 N",
          "100 N"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The graph of y against x is a straight line through the origin with positive gradient. What does this show?",
        "options": [
          "y is directly proportional to x",
          "y is inversely proportional to x",
          "y = x² for all values of x",
          "y decreases as x increases"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "For x > 0, which graph shows y inversely proportional to x?",
        "options": [
          "A straight line through the origin",
          "A curve falling towards both axes",
          "A horizontal straight line",
          "A U-shaped parabola"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A runner covers 400 m in 50 seconds. What is her average speed in km/h?",
        "options": [
          "8 km/h",
          "80 km/h",
          "28.8 km/h",
          "2.88 km/h"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A car travels 30 km at 60 km/h and then a further 30 km at 40 km/h. What is its average speed for the whole journey?",
        "options": [
          "48 km/h",
          "50 km/h",
          "45 km/h",
          "52 km/h"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "60 cm³ of metal A (density 9 g/cm³) is mixed with 40 cm³ of metal B (density 4 g/cm³). What is the density of the alloy?",
        "options": [
          "6.5 g/cm³",
          "7 g/cm³",
          "13 g/cm³",
          "6 g/cm³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "On a distance–time curve (distance in metres, time in seconds) the tangent at t = 4 passes through (2, 5) and (6, 21). Estimate the speed at t = 4 s.",
        "options": [
          "5.25 m/s",
          "2.5 m/s",
          "4 m/s",
          "0.25 m/s"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "What is the average rate of change of y = x² between x = 1 and x = 4?",
        "options": [
          "15",
          "3",
          "4",
          "5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A cuboid block measuring 20 cm by 10 cm by 5 cm has weight 40 N. What is the greatest pressure it can exert on a table?",
        "options": [
          "0.8 N/cm²",
          "0.2 N/cm²",
          "0.4 N/cm²",
          "0.04 N/cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What does the gradient of a tangent to a curve at a point give?",
        "options": [
          "The average rate of change over a whole interval",
          "The instantaneous rate of change at that point",
          "The area under the curve up to that point",
          "The total change in y divided by x"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "The volume of water in a tank is V = t² + 3t litres after t minutes. What is the average rate of flow between t = 2 and t = 5?",
        "options": [
          "8 L/min",
          "13 L/min",
          "10 L/min",
          "6 L/min"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "On a curved velocity–time graph, what does the gradient of the tangent at t = 6 s give?",
        "options": [
          "the distance travelled",
          "the average speed",
          "the time taken",
          "the acceleration at 6 s"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Amy earns £11.40 per hour. Ben earns £21 600 a year, working 40 hours a week for 48 weeks. Who has the higher hourly rate, and by how much?",
        "options": [
          "Ben, by 15p per hour",
          "Amy, by 15p per hour",
          "Amy, by 25p per hour",
          "They earn the same rate"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "On a distance–time curve, what does the gradient of the chord between two points give?",
        "options": [
          "the speed at the first point",
          "the speed at the second point",
          "the average speed between them",
          "the acceleration between the points"
        ],
        "answer": 2,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.1 */
  "4.1": {
    "name": "Angles, Polygons & Constructions",
    "green": [
      {
        "q": "What do the angles on a straight line add up to?",
        "options": [
          "180°",
          "360°",
          "90°",
          "270°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What do the angles around a point add up to?",
        "options": [
          "180°",
          "360°",
          "90°",
          "540°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A triangle has angles of 50° and 60°. What is the third angle?",
        "options": [
          "80°",
          "60°",
          "70°",
          "250°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Two straight lines cross. What is true about the vertically opposite angles?",
        "options": [
          "they add to 90°",
          "they add to 360°",
          "they are always 90°",
          "they are equal"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the sum of the interior angles of a quadrilateral?",
        "options": [
          "360°",
          "180°",
          "540°",
          "720°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the name of a polygon with 5 sides?",
        "options": [
          "hexagon",
          "pentagon",
          "octagon",
          "decagon"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the name of a triangle with three different side lengths?",
        "options": [
          "isosceles",
          "equilateral",
          "scalene",
          "right-angled"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A straight line crosses two parallel lines. What is true about corresponding angles?",
        "options": [
          "they add to 180°",
          "they add to 90°",
          "they add to 360°",
          "they are equal"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What do the exterior angles of any polygon add up to?",
        "options": [
          "360°",
          "180°",
          "540°",
          "720°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the three-figure bearing of due East?",
        "options": [
          "000°",
          "090°",
          "180°",
          "270°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which quadrilateral has exactly one pair of parallel sides?",
        "options": [
          "parallelogram",
          "rhombus",
          "trapezium",
          "kite"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which describes an acute angle?",
        "options": [
          "exactly 90°",
          "between 90° and 180°",
          "more than 180°",
          "less than 90°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many sides does an octagon have?",
        "options": [
          "8",
          "6",
          "10",
          "7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A straight line crosses two parallel lines. What is true about alternate angles?",
        "options": [
          "they add to 180°",
          "they are equal",
          "they add to 90°",
          "they add to 360°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the order of rotational symmetry of a square?",
        "options": [
          "1",
          "2",
          "4",
          "8"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "What is the sum of the interior angles of a hexagon?",
        "options": [
          "720°",
          "540°",
          "1080°",
          "360°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the size of each exterior angle of a regular octagon?",
        "options": [
          "40°",
          "45°",
          "135°",
          "60°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the size of each interior angle of a regular pentagon?",
        "options": [
          "72°",
          "540°",
          "108°",
          "120°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Each exterior angle of a regular polygon is 24°. How many sides does it have?",
        "options": [
          "12",
          "20",
          "10",
          "15"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "An isosceles triangle has an angle of 40° between its two equal sides. What is each base angle?",
        "options": [
          "70°",
          "140°",
          "40°",
          "50°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The bearing of A from B is 065°. What is the bearing of B from A?",
        "options": [
          "115°",
          "245°",
          "295°",
          "025°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Two co-interior angles between parallel lines are being found. One is 112°. What is the other?",
        "options": [
          "112°",
          "248°",
          "68°",
          "78°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which quadrilateral has four equal sides and diagonals that bisect each other at right angles, but need not have right angles?",
        "options": [
          "kite",
          "parallelogram",
          "trapezium",
          "rhombus"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the locus of points exactly 3 cm from a point P?",
        "options": [
          "a circle, centre P, radius 3 cm",
          "two parallel lines each 3 cm from P",
          "a square with sides 6 cm centred on P",
          "the perpendicular bisector through P"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the locus of points that are the same distance from two points A and B?",
        "options": [
          "a circle passing through both A and B",
          "the perpendicular bisector of AB",
          "a line parallel to AB through its midpoint",
          "the line segment joining A and B"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the locus of points that are the same distance from two intersecting straight lines?",
        "options": [
          "the perpendicular bisector",
          "a circle round the vertex",
          "the bisectors of the angles",
          "a line parallel to one line"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The angles of a triangle are in the ratio 2 : 3 : 4. What is the largest angle?",
        "options": [
          "40°",
          "60°",
          "90°",
          "80°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A map has scale 1 : 50 000. Two towns are 4 cm apart on the map. How far apart are they in real life?",
        "options": [
          "2 km",
          "20 km",
          "0.2 km",
          "200 km"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The angles of a quadrilateral are x, 2x, 3x and 4x. What is x?",
        "options": [
          "18°",
          "36°",
          "72°",
          "90°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A ship sails on a bearing of 270°. In which direction is it sailing?",
        "options": [
          "North",
          "South",
          "West",
          "East"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Each interior angle of a regular polygon is 156°. How many sides does it have?",
        "options": [
          "15",
          "24",
          "12",
          "18"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The interior angles of a polygon add up to 1980°. How many sides does it have?",
        "options": [
          "11",
          "13",
          "12",
          "14"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A straight line crosses two parallel lines, making corresponding angles of (3x + 10)° and (5x − 30)°. What is x?",
        "options": [
          "10",
          "40",
          "20",
          "25"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A regular hexagon and a square share a vertex and one side, and do not overlap. What is the remaining angle at the shared vertex?",
        "options": [
          "120°",
          "90°",
          "210°",
          "150°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "To prove the base angles of an isosceles triangle ABC (AB = AC) are equal, the bisector of angle A is drawn to meet BC at D. Which congruence condition proves triangles ABD and ACD congruent?",
        "options": [
          "SAS",
          "SSS",
          "RHS",
          "AAA"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "B is 8 km due North of A. C is 8 km due East of B. What is the bearing of C from A?",
        "options": [
          "090°",
          "045°",
          "135°",
          "315°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In triangle ABC, the exterior angle at C is 130° and angle A is 55°. What is angle B?",
        "options": [
          "50°",
          "55°",
          "75°",
          "65°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "ABCDE is a regular pentagon. The diagonal AC is drawn. What is angle BAC?",
        "options": [
          "72°",
          "54°",
          "108°",
          "36°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "ABCDEF is a regular hexagon. What is angle ACD?",
        "options": [
          "90°",
          "60°",
          "120°",
          "30°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The bearing of B from A is 300°. What is the bearing of A from B?",
        "options": [
          "060°",
          "120°",
          "240°",
          "030°"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.2 */
  "4.2": {
    "name": "Congruence, Similarity & Transformations",
    "green": [
      {
        "q": "Which of these is NOT a valid condition for proving two triangles are congruent?",
        "options": [
          "AAA",
          "SSS",
          "SAS",
          "RHS"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In the congruence condition RHS, what do the letters stand for?",
        "options": [
          "Right angle, Height, Side",
          "Right angle, Hypotenuse, Side",
          "Radius, Hypotenuse, Side",
          "Reflection, Height, Scale"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A translation is described by the column vector (3, −2), i.e. 3 on top and −2 below. What does this mean?",
        "options": [
          "3 left and 2 up",
          "2 right and 3 down",
          "3 right and 2 down",
          "3 right and 2 up"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (2, 5) is reflected in the x-axis. What are the coordinates of its image?",
        "options": [
          "(−2, 5)",
          "(5, 2)",
          "(−2, −5)",
          "(2, −5)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Two similar shapes have a length scale factor of 3. What is the area scale factor?",
        "options": [
          "9",
          "3",
          "6",
          "27"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which three facts are needed to describe a rotation fully?",
        "options": [
          "Angle, direction and a vector",
          "Centre, angle and direction",
          "Centre and a column vector",
          "Mirror line and a centre"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A line of length 4 cm is enlarged by scale factor 3. How long is the image?",
        "options": [
          "7 cm",
          "1.33 cm",
          "12 cm",
          "64 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which transformation changes the size of a shape?",
        "options": [
          "Translation",
          "Rotation",
          "Reflection",
          "Enlargement"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Shapes that are exactly the same shape and size are called…",
        "options": [
          "congruent",
          "similar",
          "regular",
          "symmetric"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The point (3, 1) is reflected in the line y = x. What are the coordinates of its image?",
        "options": [
          "(−3, −1)",
          "(1, 3)",
          "(3, −1)",
          "(−1, 3)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (2, 0) is rotated 90° anticlockwise about the origin. Where does it end up?",
        "options": [
          "(0, −2)",
          "(−2, 0)",
          "(0, 2)",
          "(2, 2)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A shape is enlarged by scale factor ½. What happens to its side lengths?",
        "options": [
          "2 times larger",
          "the same size",
          "turned upside down",
          "sides halved"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "An enlargement with scale factor −1 and centre the origin has the same effect as which single transformation?",
        "options": [
          "rotation 180° about origin",
          "reflection in the x-axis",
          "reflection in the line y = x",
          "translation by (−1, −1)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Rectangle A is 2 cm by 3 cm. Rectangle B is 6 cm by 9 cm. What is the scale factor of the enlargement from A to B?",
        "options": [
          "2",
          "3",
          "6",
          "1/3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (5, 2) is translated by the column vector (−4, 0). What is its image?",
        "options": [
          "(9, 2)",
          "(5, −2)",
          "(1, 2)",
          "(1, −2)"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Triangle ABC has AB = 5 cm, BC = 7 cm and angle B = 40°. Triangle PQR has PQ = 5 cm, QR = 7 cm and angle Q = 40°. Which condition proves they are congruent?",
        "options": [
          "SAS",
          "SSS",
          "ASA",
          "RHS"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A triangle has sides 4 cm, 6 cm and 8 cm. A similar triangle has shortest side 10 cm. How long is its longest side?",
        "options": [
          "14 cm",
          "20 cm",
          "16 cm",
          "12 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (3, −1) is enlarged by scale factor 2, centre (0, 0). What is its image?",
        "options": [
          "(5, 1)",
          "(6, −1)",
          "(6, −2)",
          "(3, −2)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (3, 1) is rotated 90° clockwise about the origin. What is its image?",
        "options": [
          "(−1, 3)",
          "(−3, 1)",
          "(−3, −1)",
          "(1, −3)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The point (4, 2) is rotated 180° about the point (1, 1). What is its image?",
        "options": [
          "(−2, 0)",
          "(−4, −2)",
          "(−3, −1)",
          "(2, 0)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The point (5, 3) is reflected in the line x = 2. What is its image?",
        "options": [
          "(5, 1)",
          "(−1, 3)",
          "(−5, 3)",
          "(1, 3)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (2, 4) is enlarged by scale factor 3 with centre (1, 2). What is its image?",
        "options": [
          "(6, 12)",
          "(5, 6)",
          "(4, 8)",
          "(3, 6)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A shape is translated by (2, 5) and then by (−6, 1). Which single translation has the same effect?",
        "options": [
          "(−4, 4)",
          "(8, 6)",
          "(4, 6)",
          "(−4, 6)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Two similar cylinders have heights 4 cm and 12 cm. The smaller has volume 50 cm³. What is the volume of the larger?",
        "options": [
          "1350 cm³",
          "150 cm³",
          "450 cm³",
          "1800 cm³"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Two similar triangles have areas 12 cm² and 108 cm². What is the ratio of their corresponding lengths?",
        "options": [
          "1 : 9",
          "1 : 3",
          "1 : 81",
          "1 : 4.5"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Triangle A has vertices (1, 1), (3, 1), (1, 2). Triangle B has vertices (−1, 1), (−3, 1), (−1, 2). Which single transformation maps A onto B?",
        "options": [
          "Rotation 90° about O",
          "Translation by (−2, 0)",
          "Reflection in the y-axis",
          "Reflection in the x-axis"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (3, 1) is enlarged by scale factor −2, centre the origin. What is its image?",
        "options": [
          "(6, 2)",
          "(1, −1)",
          "(−1.5, −0.5)",
          "(−6, −2)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A shape of area 5 cm² is enlarged by scale factor 3. What is the area of the image?",
        "options": [
          "45 cm²",
          "15 cm²",
          "135 cm²",
          "25 cm²"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A photo 10 cm wide and 15 cm long is enlarged so that its width is 25 cm. What is its new length?",
        "options": [
          "30 cm",
          "37.5 cm",
          "35 cm",
          "40 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Two triangles both have angles 50°, 60° and 70°. What can you definitely conclude?",
        "options": [
          "They are congruent",
          "They are both isosceles",
          "They are similar",
          "They have equal areas"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Point P(2, 5) is reflected in the x-axis and then rotated 90° anticlockwise about the origin. Where does P end up?",
        "options": [
          "(5, 2)",
          "(−5, −2)",
          "(−5, 2)",
          "(5, −2)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Two similar solids have surface areas 64 cm² and 144 cm². The smaller has volume 160 cm³. What is the volume of the larger?",
        "options": [
          "360 cm³",
          "540 cm³",
          "240 cm³",
          "810 cm³"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "In triangle ABC, D is on AB and E is on AC with DE parallel to BC. AD = 4 cm, DB = 6 cm and DE = 5 cm. How long is BC?",
        "options": [
          "7.5 cm",
          "11 cm",
          "12.5 cm",
          "15 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these points is invariant under a reflection in the line y = x?",
        "options": [
          "(3, −3)",
          "(0, 3)",
          "(3, 0)",
          "(−3, −3)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "An enlargement maps A(2, 3) to A′(6, 7) and B(4, 3) to B′(10, 7). What is the centre of enlargement?",
        "options": [
          "(−2, −1)",
          "(2, 1)",
          "(0, 0)",
          "(−1, −2)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The point (4, −2) is enlarged by scale factor −½ with centre (0, 2). What is its image?",
        "options": [
          "(2, 0)",
          "(−2, 4)",
          "(−2, 1)",
          "(2, −3)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Two similar cones have heights 6 cm and 9 cm. The larger cone has volume 270 cm³. What is the volume of the smaller cone?",
        "options": [
          "180 cm³",
          "120 cm³",
          "80 cm³",
          "60 cm³"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The point (5, 1) is rotated 90° anticlockwise about the point (2, 1). What is its image?",
        "options": [
          "(−1, 1)",
          "(5, 4)",
          "(2, −2)",
          "(2, 4)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Parallelogram ABCD is split by diagonal AC into triangles ABC and CDA. Using only side lengths, which condition shows the triangles are congruent?",
        "options": [
          "SSS",
          "RHS",
          "AAA",
          "None, they are only similar"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A 1.5 m post casts a 2 m shadow. At the same time a tree casts a 12 m shadow. How tall is the tree?",
        "options": [
          "16 m",
          "9 m",
          "8 m",
          "10.5 m"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.3 */
  "4.3": {
    "name": "Circles & Circle Theorems",
    "green": [
      {
        "q": "What is the name of the distance from the centre of a circle to its circumference?",
        "options": [
          "radius",
          "diameter",
          "chord",
          "tangent"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the name of a straight line that touches a circle at exactly one point?",
        "options": [
          "chord",
          "tangent",
          "diameter",
          "arc"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the region between a chord and an arc called?",
        "options": [
          "sector",
          "radius",
          "segment",
          "tangent"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A circle has diameter 10 cm. What is its circumference to 1 decimal place?",
        "options": [
          "78.5 cm",
          "15.7 cm",
          "62.8 cm",
          "31.4 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A circle has radius 3 cm. What is its area in terms of π?",
        "options": [
          "9π cm²",
          "6π cm²",
          "3π cm²",
          "36π cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the name of a straight line joining two points on the circumference?",
        "options": [
          "radius",
          "chord",
          "arc",
          "sector"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the angle in a semicircle?",
        "options": [
          "45°",
          "180°",
          "90°",
          "60°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "What is true about the opposite angles of a cyclic quadrilateral?",
        "options": [
          "they are equal",
          "they add to 360°",
          "they add to 90°",
          "they add to 180°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "What is a sector with an angle of 180° called?",
        "options": [
          "semicircle",
          "quadrant",
          "segment",
          "major arc"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A circle has radius 5 cm. What is its area to 1 decimal place?",
        "options": [
          "31.4 cm²",
          "78.5 cm²",
          "15.7 cm²",
          "157.1 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has radius 7 cm. What is its diameter?",
        "options": [
          "3.5 cm",
          "49 cm",
          "14 cm",
          "44 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The angle subtended by an arc at the centre is ___ the angle it subtends at the circumference.",
        "options": [
          "equal to",
          "half",
          "three times",
          "twice"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "What fraction of a full circle is a sector with angle 90°?",
        "options": [
          "¼",
          "½",
          "1/3",
          "1/9"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two tangents are drawn to a circle from the same external point. What is true about them?",
        "options": [
          "they are perpendicular",
          "they are equal in length",
          "they are parallel",
          "they always meet at the centre"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Which expression gives the circumference of a circle with diameter d and radius r?",
        "options": [
          "πr²",
          "2πr²",
          "πd",
          "2r"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Find the arc length of a sector with radius 6 cm and angle 60°.",
        "options": [
          "6.28 cm",
          "18.85 cm",
          "3.14 cm",
          "12.57 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Find the area of a sector with radius 10 cm and angle 72°.",
        "options": [
          "12.57 cm²",
          "62.83 cm²",
          "31.42 cm²",
          "125.66 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has circumference 50 cm. What is its radius to 2 decimal places?",
        "options": [
          "15.92 cm",
          "3.99 cm",
          "7.96 cm",
          "25.00 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "An arc subtends an angle of 35° at the circumference. What angle does it subtend at the centre?",
        "options": [
          "17.5°",
          "35°",
          "145°",
          "70°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "ABCD is a cyclic quadrilateral with angle A = 112°. What is angle C?",
        "options": [
          "68°",
          "112°",
          "248°",
          "78°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A semicircle has diameter 12 cm. What is its area in terms of π?",
        "options": [
          "36π cm²",
          "18π cm²",
          "72π cm²",
          "12π cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "TA is a tangent to a circle centre O at A. Angle AOT = 52°. What is angle ATO?",
        "options": [
          "52°",
          "128°",
          "38°",
          "48°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A circle has area 100π cm². What is its radius?",
        "options": [
          "50 cm",
          "5 cm",
          "100 cm",
          "10 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A, B, C and D lie on a circle, with C and D on the same side of chord AB. Angle ACB = 48°. What is angle ADB?",
        "options": [
          "48°",
          "96°",
          "24°",
          "132°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A sector has radius 9 cm and arc length 6π cm. What is the sector angle?",
        "options": [
          "60°",
          "120°",
          "240°",
          "108°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the perimeter of a quarter circle (sector) of radius 4 cm, to 2 decimal places?",
        "options": [
          "6.28 cm",
          "12.57 cm",
          "14.28 cm",
          "10.28 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A chord of length 16 cm is 6 cm from the centre of a circle. What is the radius?",
        "options": [
          "17.1 cm",
          "8 cm",
          "√28 cm",
          "10 cm"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The tangent at A makes an angle of 65° with chord AB. C is a point on the circle in the alternate segment. What is angle ACB?",
        "options": [
          "65°",
          "25°",
          "115°",
          "130°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A ring lies between two circles with the same centre and radii 5 cm and 3 cm. What is its area in terms of π?",
        "options": [
          "4π cm²",
          "16π cm²",
          "34π cm²",
          "2π cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "AB is a diameter of a circle and C is on the circumference. Angle CAB = 27°. What is angle ABC?",
        "options": [
          "27°",
          "153°",
          "63°",
          "90°"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A, B, C and D lie on a circle centre O, with C on the major arc AB and D on the minor arc AB. Angle AOB = 130°. What is angle ADB?",
        "options": [
          "115°",
          "65°",
          "130°",
          "50°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A sector of radius 6 cm has area 30 cm². What is the sector angle to 1 decimal place?",
        "options": [
          "47.7°",
          "95.5°",
          "83.3°",
          "191.0°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has radius 8 cm. Chord AB subtends a right angle at the centre O. What is the area of the minor segment to 2 decimal places?",
        "options": [
          "50.27 cm²",
          "32.00 cm²",
          "18.27 cm²",
          "82.27 cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "TA and TB are tangents to a circle centre O, touching it at A and B. Angle ATB = 50°. C is on the major arc AB. What is angle ACB?",
        "options": [
          "50°",
          "130°",
          "25°",
          "65°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "AB is a chord of a circle centre O and angle OAB = 34°. C is on the major arc AB. What is angle ACB?",
        "options": [
          "56°",
          "112°",
          "34°",
          "68°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A track is a rectangle 100 m by 60 m with a semicircle of diameter 60 m on each 60 m end (the 60 m sides are not part of the track). What is the length of the track to 1 dp?",
        "options": [
          "294.2 m",
          "388.5 m",
          "577.0 m",
          "320.0 m"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "ABCD is a cyclic quadrilateral. Angle ABC = 3x and angle ADC = x + 40°. What is angle ADC?",
        "options": [
          "35°",
          "105°",
          "75°",
          "45°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Triangle ABC is inscribed in a circle with AB = AC. The tangent at A makes an angle of 70° with chord AB. What is angle BAC?",
        "options": [
          "70°",
          "20°",
          "110°",
          "40°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A sector has angle 40° and arc length 8π cm. What is its radius?",
        "options": [
          "36 cm",
          "18 cm",
          "72 cm",
          "12 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In the proof that the angle at the centre is twice the angle at the circumference, the radius OC is drawn. Why are triangles OAC and OBC isosceles?",
        "options": [
          "the tangent meets OA at 90°",
          "OA, OB and OC are all radii",
          "AC and BC are equal chords",
          "angles in a semicircle are 90°"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.4 */
  "4.4": {
    "name": "Mensuration: Area, Volume & 3D",
    "green": [
      {
        "q": "What is the area of a rectangle 7 cm long and 4 cm wide?",
        "options": [
          "28 cm²",
          "22 cm²",
          "11 cm²",
          "14 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A triangle has base 10 cm and perpendicular height 6 cm. What is its area?",
        "options": [
          "60 cm²",
          "30 cm²",
          "16 cm²",
          "32 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A parallelogram has base 9 cm and perpendicular height 5 cm. What is its area?",
        "options": [
          "22.5 cm²",
          "28 cm²",
          "45 cm²",
          "14 cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "How many faces does a cuboid have?",
        "options": [
          "8",
          "12",
          "4",
          "6"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many edges does a cube have?",
        "options": [
          "12",
          "6",
          "8",
          "24"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these is a formula for the circumference of a circle?",
        "options": [
          "πr²",
          "πd",
          "2πr²",
          "πr"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How many square centimetres are there in 1 square metre?",
        "options": [
          "100",
          "1000",
          "10 000",
          "1 000 000"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the volume of a cuboid measuring 5 cm by 3 cm by 2 cm?",
        "options": [
          "10 cm³",
          "31 cm³",
          "15 cm³",
          "30 cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many vertices does a square-based pyramid have?",
        "options": [
          "5",
          "4",
          "8",
          "6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many cubic centimetres are equal to 1 litre?",
        "options": [
          "100 cm³",
          "1000 cm³",
          "10 cm³",
          "10 000 cm³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the view of a 3D solid seen from directly above called?",
        "options": [
          "Front elevation",
          "Side elevation",
          "Plan",
          "Net"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the area of a circle of radius 3 cm, in terms of π?",
        "options": [
          "6π cm²",
          "3π cm²",
          "36π cm²",
          "9π cm²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A trapezium has parallel sides 4 cm and 8 cm and perpendicular height 5 cm. What is its area?",
        "options": [
          "30 cm²",
          "60 cm²",
          "160 cm²",
          "17 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many faces does a triangular prism have?",
        "options": [
          "6",
          "5",
          "9",
          "4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the perimeter of a rectangle 8 cm long and 3 cm wide?",
        "options": [
          "24 cm",
          "11 cm",
          "22 cm",
          "19 cm"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "A cylinder has radius 5 cm and height 8 cm. What is its volume, in terms of π?",
        "options": [
          "200π cm³",
          "80π cm³",
          "400π cm³",
          "40π cm³"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the circumference of a circle with diameter 10 cm, to 1 decimal place?",
        "options": [
          "78.5 cm",
          "31.4 cm",
          "62.8 cm",
          "15.7 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A prism has cross-sectional area 12 cm² and length 9 cm. What is its volume?",
        "options": [
          "21 cm³",
          "54 cm³",
          "108 cm³",
          "216 cm³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Convert 3.5 m² to cm².",
        "options": [
          "350 cm²",
          "3500 cm²",
          "350 000 cm²",
          "35 000 cm²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the volume of a sphere of radius 3 cm, in terms of π? (V = 4/3 πr³)",
        "options": [
          "36π cm³",
          "12π cm³",
          "108π cm³",
          "27π cm³"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the total surface area of a cube with edges of 4 cm?",
        "options": [
          "64 cm²",
          "96 cm²",
          "16 cm²",
          "48 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A cone has base radius 3 cm and perpendicular height 10 cm. What is its volume, in terms of π? (V = 1/3 πr²h)",
        "options": [
          "90π cm³",
          "10π cm³",
          "30π cm³",
          "45π cm³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the perimeter of a semicircle with diameter 10 cm, in terms of π?",
        "options": [
          "5π cm",
          "10π + 10 cm",
          "10π cm",
          "5π + 10 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A pyramid has a square base of side 6 cm and perpendicular height 10 cm. What is its volume?",
        "options": [
          "120 cm³",
          "360 cm³",
          "60 cm³",
          "240 cm³"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the curved surface area of a cylinder with radius 4 cm and height 5 cm, in terms of π?",
        "options": [
          "80π cm²",
          "40π cm²",
          "20π cm²",
          "72π cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A cuboid has volume 120 cm³, length 6 cm and width 5 cm. What is its height?",
        "options": [
          "20 cm",
          "2 cm",
          "4 cm",
          "8 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The points A(1, 2), B(7, 2) and C(7, 6) are joined to make a triangle. What is its area?",
        "options": [
          "24 units²",
          "10 units²",
          "20 units²",
          "12 units²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the surface area of a sphere of radius 5 cm, in terms of π? (A = 4πr²)",
        "options": [
          "100π cm²",
          "25π cm²",
          "500π/3 cm²",
          "20π cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A cone of height 12 cm and base radius 6 cm has a small cone of height 4 cm and radius 2 cm cut from its top. What is the volume of the frustum left, in terms of π?",
        "options": [
          "128π cm³",
          "416π/3 cm³",
          "144π cm³",
          "400π/3 cm³"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A tank measures 50 cm by 40 cm by 30 cm. How many litres does it hold when full?",
        "options": [
          "600 litres",
          "6 litres",
          "60 litres",
          "6000 litres"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A shape is a 10 cm by 6 cm rectangle with a semicircle of diameter 6 cm joined to one 6 cm side. What is its area, to 1 decimal place?",
        "options": [
          "74.1 cm²",
          "88.3 cm²",
          "116.5 cm²",
          "67.1 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A cylinder of radius 3 cm holds exactly 1 litre of water. How deep is the water, to 1 decimal place?",
        "options": [
          "11.8 cm",
          "35.4 cm",
          "106.1 cm",
          "3.5 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the total surface area of a solid hemisphere of radius 6 cm, in terms of π?",
        "options": [
          "72π cm²",
          "144π cm²",
          "108π cm²",
          "36π cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A metal cube of side 10 cm is melted down and recast into solid spheres of radius 1 cm. What is the greatest number of complete spheres that can be made?",
        "options": [
          "239",
          "250",
          "1000",
          "238"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A solid is a cone on top of a hemisphere, both of radius 3 cm. The total height of the solid is 7 cm. What is its volume, in terms of π?",
        "options": [
          "30π cm³",
          "48π cm³",
          "21π cm³",
          "39π cm³"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A cone has base radius 5 cm and slant height 13 cm. What is its volume, in terms of π?",
        "options": [
          "325π/3 cm³",
          "100π cm³",
          "300π cm³",
          "65π cm³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A full cuboid tank 40 cm by 30 cm by 20 cm is emptied into a cylinder of radius 15 cm. How deep is the water in the cylinder, to 1 decimal place?",
        "options": [
          "10.8 cm",
          "106.7 cm",
          "34.0 cm",
          "8.5 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A bucket is a frustum: top radius 15 cm, base radius 10 cm, depth 20 cm. It is a cone of height 60 cm with a cone of height 40 cm removed. What is its capacity, to 3 significant figures?",
        "options": [
          "14.1 litres",
          "9.82 litres",
          "4.19 litres",
          "9.95 litres"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A 12 m by 8 m lawn contains a circular pond of diameter 4 m. One box of seed covers 20 m² of grass. How many boxes are needed for the lawn (not the pond)?",
        "options": [
          "5",
          "4",
          "6",
          "3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A solid cylinder has radius r and height 2r. Its volume equals that of a sphere of radius 6 cm. What is r, to 3 significant figures?",
        "options": [
          "6.00 cm",
          "5.24 cm",
          "4.16 cm",
          "8.32 cm"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.5 */
  "4.5": {
    "name": "Pythagoras & Trigonometry",
    "green": [
      {
        "q": "A right-angled triangle has shorter sides 6 cm and 8 cm. How long is the hypotenuse?",
        "options": [
          "10 cm",
          "14 cm",
          "7 cm",
          "100 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In a right-angled triangle, which side is the hypotenuse?",
        "options": [
          "The side next to the angle θ",
          "The side opposite the right angle",
          "The side opposite the angle θ",
          "The shortest side of the triangle"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a right-angled triangle, sin θ is equal to which ratio?",
        "options": [
          "adjacent ÷ hypotenuse",
          "opposite ÷ adjacent",
          "opposite ÷ hypotenuse",
          "hypotenuse ÷ opposite"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the exact value of sin 30°?",
        "options": [
          "√3/2",
          "1",
          "√2/2",
          "1/2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the exact value of tan 45°?",
        "options": [
          "1",
          "0",
          "√3",
          "1/2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the exact value of cos 60°?",
        "options": [
          "√3/2",
          "1/2",
          "0",
          "1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A right-angled triangle has hypotenuse 13 cm and one other side 5 cm. How long is the third side?",
        "options": [
          "8 cm",
          "18 cm",
          "12 cm",
          "√194 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which set of lengths is a Pythagorean triple?",
        "options": [
          "4, 5, 6",
          "2, 3, 4",
          "6, 8, 12",
          "5, 12, 13"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a right-angled triangle, tan θ is equal to which ratio?",
        "options": [
          "opposite ÷ adjacent",
          "adjacent ÷ opposite",
          "opposite ÷ hypotenuse",
          "adjacent ÷ hypotenuse"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the exact value of cos 0°?",
        "options": [
          "0",
          "1",
          "1/2",
          "undefined"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the exact value of sin 90°?",
        "options": [
          "0",
          "√3/2",
          "1",
          "1/2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the exact value of tan 60°?",
        "options": [
          "1/√3",
          "1",
          "√3/2",
          "√3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is the sine rule for triangle ABC?",
        "options": [
          "a/sin A = b/sin B",
          "a² = b² + c²",
          "a/cos A = b/cos B",
          "a sin A = b sin B"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A triangle has sides a and b with included angle C. Which formula gives its area?",
        "options": [
          "ab sin C",
          "½ab sin C",
          "½ab cos C",
          "½bc sin C"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Which trigonometric ratio links the opposite side and the hypotenuse?",
        "options": [
          "tan",
          "cos",
          "sin",
          "none"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "A right-angled triangle has shorter sides 7 cm and 9 cm. How long is the hypotenuse, to 1 decimal place?",
        "options": [
          "11.4 cm",
          "5.7 cm",
          "16.0 cm",
          "130 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A right-angled triangle has hypotenuse 10 cm and an angle of 40°. Find the side opposite the 40° angle, to 2 decimal places.",
        "options": [
          "7.66 cm",
          "6.43 cm",
          "8.39 cm",
          "15.56 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a right-angled triangle the side opposite θ is 5 cm and the side adjacent to θ is 8 cm. Find θ to 1 decimal place.",
        "options": [
          "38.7°",
          "58.0°",
          "32.0°",
          "51.3°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A 5 m ladder leans against a vertical wall. Its foot is 1.4 m from the wall on level ground. How high up the wall does it reach?",
        "options": [
          "5.19 m",
          "3.60 m",
          "6.40 m",
          "4.80 m"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the distance between the points (1, 2) and (7, 10)?",
        "options": [
          "10 units",
          "14 units",
          "8 units",
          "√28 units"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Is a triangle with sides 9 cm, 12 cm and 15 cm right-angled?",
        "options": [
          "No, as 9 + 12 ≠ 15",
          "Yes, as 9² + 12² = 15²",
          "No, as 9² + 15² ≠ 12²",
          "Yes, as 9 + 12 > 15"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A right-angled triangle has hypotenuse 20 cm and an angle of 35°. Find the side adjacent to the 35° angle, to 2 decimal places.",
        "options": [
          "11.47 cm",
          "14.00 cm",
          "16.38 cm",
          "24.42 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Without a calculator, work out sin 60° × cos 30°.",
        "options": [
          "√3/2",
          "3/2",
          "1/2",
          "3/4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A right-angled triangle has hypotenuse 12 cm and an angle of 30°. What is the exact length of the side opposite the 30° angle?",
        "options": [
          "6 cm",
          "6√3 cm",
          "12√3 cm",
          "4√3 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A ramp rises 1.2 m over a horizontal distance of 5 m. What angle does it make with the horizontal, to 1 decimal place?",
        "options": [
          "13.9°",
          "13.5°",
          "76.5°",
          "0.24°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A cuboid measures 3 cm by 4 cm by 12 cm. How long is its space diagonal?",
        "options": [
          "19 cm",
          "12.6 cm",
          "13 cm",
          "5 cm"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "In triangle ABC, a = 8 cm, A = 40° and B = 65°. Use the sine rule to find b, to 2 decimal places.",
        "options": [
          "5.67 cm",
          "7.51 cm",
          "12.02 cm",
          "11.28 cm"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "In triangle ABC, b = 5 cm, c = 7 cm and A = 60°. Use the cosine rule to find a, to 2 decimal places.",
        "options": [
          "6.24 cm",
          "10.44 cm",
          "8.60 cm",
          "3.00 cm"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A triangle has sides 9 cm and 10 cm with an included angle of 30°. What is its area?",
        "options": [
          "45 cm²",
          "22.5 cm²",
          "39.0 cm²",
          "19.5 cm²"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A triangle has sides 4 cm, 5 cm and 6 cm. What is the angle opposite the 6 cm side, to 1 decimal place?",
        "options": [
          "41.4°",
          "55.8°",
          "82.8°",
          "97.2°"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "An isosceles triangle has two sides of 10 cm and a base of 12 cm. What is its area?",
        "options": [
          "48 cm²",
          "60 cm²",
          "96 cm²",
          "40 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A ship sails 8 km due north and then 6 km due east. What is its bearing from its starting point, to 1 decimal place?",
        "options": [
          "053.1°",
          "036.9°",
          "323.1°",
          "216.9°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A cuboid is 8 cm long, 6 cm wide and 10 cm high. What is the angle between a space diagonal and the base?",
        "options": [
          "35.3°",
          "51.3°",
          "45.0°",
          "59.0°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "What is the exact height of an equilateral triangle with sides of 10 cm?",
        "options": [
          "5√2 cm",
          "10√3 cm",
          "5 cm",
          "5√3 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In triangle ABC, a = 7 cm, b = 9 cm and A = 40°. Which values of angle B are possible, to 1 decimal place?",
        "options": [
          "55.7° or 124.3°",
          "55.7° only",
          "124.3° only",
          "34.3° or 145.7°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A triangle has area 30 cm² and two sides of 8 cm and 10 cm. The angle between them is acute. What is that angle, to 1 decimal place?",
        "options": [
          "36.9°",
          "48.6°",
          "22.0°",
          "41.4°"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Two sides of a triangle are 5 cm and 7 cm and the angle between them is 120°. How long is the third side, to 2 decimal places?",
        "options": [
          "6.24 cm",
          "8.60 cm",
          "10.44 cm",
          "12.00 cm"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Standing 50 m from the base of a tower on level ground, Sam’s eye level is 1.6 m above the ground. The angle of elevation of the top is 32°. How tall is the tower, to 1 decimal place?",
        "options": [
          "26.5 m",
          "31.2 m",
          "28.1 m",
          "32.8 m"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A pyramid has a square base of side 8 cm and its apex is 10 cm vertically above the centre of the base. What angle does a sloping edge make with the base, to 1 decimal place?",
        "options": [
          "60.5°",
          "68.2°",
          "51.3°",
          "29.5°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A rectangle has a diagonal of 15 cm and a width of 9 cm. What is its perimeter?",
        "options": [
          "48 cm",
          "42 cm",
          "108 cm",
          "21 cm"
        ],
        "answer": 1,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.6 */
  "4.6": {
    "name": "Vectors",
    "green": [
      {
        "q": "a = (3, 2) and b = (1, −4). What is a + b?",
        "options": [
          "(4, −2)",
          "(2, 6)",
          "(4, 6)",
          "(3, −8)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "a = (2, −1). What is 3a?",
        "options": [
          "(5, 2)",
          "(6, −3)",
          "(6, 3)",
          "(2, −3)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Vector AB = (5, −2). What is vector BA?",
        "options": [
          "(5, 2)",
          "(−5, −2)",
          "(−5, 2)",
          "(5, −2)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which column vector describes a translation 4 units left and 3 units up?",
        "options": [
          "(4, 3)",
          "(−3, 4)",
          "(3, −4)",
          "(−4, 3)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "a = (6, 1) and b = (2, 5). What is a − b?",
        "options": [
          "(4, −4)",
          "(8, 6)",
          "(4, 4)",
          "(−4, 4)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What movement does the column vector (0, −5) describe?",
        "options": [
          "5 units right",
          "5 units down",
          "5 units up",
          "5 units left"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (2, 3) is translated by the vector (4, −1). Where does it move to?",
        "options": [
          "(6, 4)",
          "(−2, 4)",
          "(6, 2)",
          "(8, −3)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In the vector 4a, what is the number 4 called?",
        "options": [
          "a magnitude",
          "a component",
          "a direction",
          "a scalar"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "a = (−3, 7). What is −a?",
        "options": [
          "(3, −7)",
          "(−3, −7)",
          "(3, 7)",
          "(7, −3)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A is the point (1, 2) and B is the point (4, 7). What is the column vector AB?",
        "options": [
          "(5, 9)",
          "(3, 5)",
          "(−3, −5)",
          "(4, 7)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these vectors is parallel to (2, 3)?",
        "options": [
          "(3, 2)",
          "(2, −3)",
          "(6, 9)",
          "(4, 3)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "a = (1, 4) and b = (−2, 3). What is 2a + b?",
        "options": [
          "(−1, 7)",
          "(4, 5)",
          "(0, 7)",
          "(0, 11)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A vector has both",
        "options": [
          "magnitude and direction",
          "magnitude only",
          "direction only",
          "a starting point and an end point"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Shape A is translated by (3, −2) to give shape B. Which vector translates B back to A?",
        "options": [
          "(3, 2)",
          "(−3, 2)",
          "(−3, −2)",
          "(2, −3)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "a = (8, −6). What is ½a?",
        "options": [
          "(16, −12)",
          "(4, 6)",
          "(4, −3)",
          "(8, −3)"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "a = (2, 5) and b = (−1, 3). What is 2a − 3b?",
        "options": [
          "(7, 1)",
          "(1, 1)",
          "(7, 19)",
          "(1, 19)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "O is the origin, OA = a and OB = b. Which expression gives vector AB?",
        "options": [
          "a − b",
          "b − a",
          "a + b",
          "−a − b"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "(x, 4) + (3, y) = (7, −2). Find x and y.",
        "options": [
          "x = 10, y = 2",
          "x = 4, y = 2",
          "x = 4, y = −6",
          "x = −4, y = −6"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A shape is translated by (3, −5) and then by (−1, 2). Which single vector gives the same result?",
        "options": [
          "(4, −7)",
          "(−3, −10)",
          "(2, 3)",
          "(2, −3)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A translation maps P(−1, 4) onto P′(5, 1). What is the translation vector?",
        "options": [
          "(6, −3)",
          "(4, 5)",
          "(−6, 3)",
          "(6, 3)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "OABC is a parallelogram with OA = a and OC = c. What is vector OB?",
        "options": [
          "a − c",
          "a + c",
          "c − a",
          "2a + c"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "ABCD is a parallelogram with AB = p and AD = q. What is vector BD?",
        "options": [
          "p + q",
          "p − q",
          "q − p",
          "−p − q"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify 3(a + 2b) − 2(a − b).",
        "options": [
          "a + 4b",
          "5a + 8b",
          "a + 5b",
          "a + 8b"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "k(2, −3) = (−8, 12). What is the value of k?",
        "options": [
          "−4",
          "4",
          "−6",
          "6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "OA = a and OB = b. M is the midpoint of AB. What is vector AM?",
        "options": [
          "½(a + b)",
          "½(b − a)",
          "b − a",
          "½(a − b)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "a = (4, −1) and b = (−2, 3). Find the vector c such that a + c = b.",
        "options": [
          "(2, 2)",
          "(6, −4)",
          "(−6, 4)",
          "(−2, 2)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "OA = a and OB = b. P lies on AB with AP : PB = 1 : 2. What is vector OP?",
        "options": [
          "⅓a + ⅔b",
          "a + ⅓b",
          "⅓(a + b)",
          "⅔a + ⅓b"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which of these vectors is parallel to 2a − 3b?",
        "options": [
          "6b − 4a",
          "2a + 3b",
          "3a − 2b",
          "4a − 3b"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A shape is translated by (−4, 6). A point on the image is (3, −2). Where was this point on the original shape?",
        "options": [
          "(−1, 4)",
          "(7, −8)",
          "(−7, 8)",
          "(1, −4)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "p = (−2, 5). What is 3p − (4, 1)?",
        "options": [
          "(−2, 14)",
          "(−10, 16)",
          "(−10, 14)",
          "(2, 14)"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "OA = a and OB = b. P lies on AB with AP : PB = 3 : 1. What is vector OP?",
        "options": [
          "¼a + ¾b",
          "¾a + ¼b",
          "a + ¾b",
          "¾(a + b)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "AB = 2a + 6b and BC = a + 3b. What can you conclude?",
        "options": [
          "AB and BC are perpendicular to each other",
          "A, B and C lie on a straight line",
          "AB is half the length of BC",
          "ABC is an isosceles triangle"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "OA = a and OB = b. M is the midpoint of OA and N is the midpoint of OB. What is vector MN?",
        "options": [
          "½(a + b)",
          "b − a",
          "½(b − a)",
          "½(a − b)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "OA = 6a and OB = 6b. P lies on AB with AP : PB = 1 : 2. What is vector OP?",
        "options": [
          "2a + 4b",
          "3a + 3b",
          "6a + 2b",
          "4a + 2b"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A translation maps (2, −1) onto (−3, 4). The image is then translated by (1, −6). Which single vector maps (2, −1) to the final position?",
        "options": [
          "(−4, −1)",
          "(−6, 11)",
          "(−4, 1)",
          "(6, −11)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "p = (3, −2) and q = (−1, 4). Find the vector r such that 2p + r = 3q.",
        "options": [
          "(−9, 8)",
          "(−9, 16)",
          "(9, −16)",
          "(3, 16)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "OP = a + 2b and OQ = 3a + 6b. Which statement is correct?",
        "options": [
          "O, P and Q are collinear with OP : PQ = 1 : 3",
          "OP and OQ are perpendicular vectors here",
          "O, P and Q are collinear with OP : PQ = 1 : 2",
          "O, P and Q are collinear with OP : PQ = 2 : 1"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The vectors 2a + 3b and ka + 12b are parallel. What is the value of k?",
        "options": [
          "6",
          "4",
          "12",
          "8"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "ABCDEF is a regular hexagon with centre O. OA = a and OB = b. What is vector ED?",
        "options": [
          "b − a",
          "a − b",
          "a + b",
          "2b − a"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "OABC is a parallelogram with OA = a and OC = c. M is the midpoint of AB. What is vector OM?",
        "options": [
          "½a + c",
          "a + ½c",
          "½(a + c)",
          "a + c"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 5.1 */
  "5.1": {
    "name": "Probability",
    "green": [
      {
        "q": "A fair six-sided dice is rolled. What is the probability of getting an even number?",
        "options": [
          "1/2",
          "1/3",
          "1/6",
          "2/3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The probability that event A happens is 0.35. What is the probability that A does not happen?",
        "options": [
          "0.35",
          "0.65",
          "0.75",
          "1.35"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A bag contains 3 red, 5 blue and 2 green counters. One is taken at random. What is P(blue)?",
        "options": [
          "5/9",
          "3/10",
          "1/2",
          "1/5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the probability of an event that is certain to happen?",
        "options": [
          "0",
          "1/2",
          "0.9",
          "1"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "An event has probability 0.5. Which word best describes it?",
        "options": [
          "evens",
          "unlikely",
          "likely",
          "impossible"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A spinner lands on red 18 times in 60 spins. What is the relative frequency of red?",
        "options": [
          "0.18",
          "0.3",
          "0.6",
          "0.42"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "P(win) = 0.2 for a game. How many wins would you expect in 150 games?",
        "options": [
          "20",
          "75",
          "30",
          "0.2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Two coins are flipped. How many outcomes are in the sample space?",
        "options": [
          "2",
          "3",
          "6",
          "4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these cannot be a probability?",
        "options": [
          "1.2",
          "0",
          "0.99",
          "3/4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two events are mutually exclusive. What does this mean?",
        "options": [
          "Both can happen together",
          "They cannot happen at the same time",
          "One event makes the other one more likely",
          "They have equal probabilities"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A spinner can land on red, blue or green. P(red) = 0.2 and P(blue) = 0.35. What is P(green)?",
        "options": [
          "0.55",
          "0.4",
          "0.45",
          "0.5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A coin is flipped and a six-sided dice is rolled. How many possible outcomes are there?",
        "options": [
          "8",
          "6",
          "36",
          "12"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A letter is chosen at random from the word PROBABILITY. What is P(B)?",
        "options": [
          "2/11",
          "1/11",
          "2/9",
          "1/5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "As the number of trials in an experiment increases, the relative frequency",
        "options": [
          "becomes less reliable as an estimate of probability",
          "gets closer to the theoretical probability",
          "always equals 0.5",
          "becomes exactly 1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A and B are mutually exclusive. P(A) = 0.3 and P(B) = 0.4. What is P(A ∪ B)?",
        "options": [
          "0.12",
          "0.1",
          "0.7",
          "0.58"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "Two fair dice are rolled and the scores added. What is P(total = 7)?",
        "options": [
          "1/6",
          "7/36",
          "1/12",
          "1/36"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A and B are independent. P(A) = 0.6 and P(B) = 0.5. What is P(A and B)?",
        "options": [
          "1.1",
          "0.3",
          "0.1",
          "0.5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A bag has 4 red and 6 blue balls. A ball is taken, replaced, then a second is taken. What is P(both red)?",
        "options": [
          "2/15",
          "2/5",
          "4/25",
          "16/25"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A bag has 4 red and 6 blue balls. Two are taken without replacement. What is P(both red)?",
        "options": [
          "4/25",
          "3/25",
          "1/5",
          "2/15"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A biased spinner has P(red) = 0.15. It is spun 300 times. How many reds would you expect?",
        "options": [
          "45",
          "15",
          "30",
          "150"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In a class of 30, 12 play football, 15 play tennis and 5 play both. How many play neither?",
        "options": [
          "3",
          "8",
          "13",
          "22"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a class of 30, 12 play football (F), 15 play tennis (T) and 5 play both. A student is picked at random. What is P(F ∩ T′)?",
        "options": [
          "5/30",
          "12/30",
          "7/30",
          "10/30"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A dice is rolled 60 times and lands on six 25 times. What is the best conclusion?",
        "options": [
          "The dice is definitely fair",
          "The dice is definitely biased",
          "Six should come up 25 times in every 60",
          "The dice may be biased towards six"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Three fair coins are flipped. What is P(at least one head)?",
        "options": [
          "7/8",
          "1/8",
          "3/8",
          "1/2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A bag holds red and blue counters in the ratio 2 : 3. What is P(blue)?",
        "options": [
          "2/3",
          "3/5",
          "2/5",
          "3/2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A and B are independent. P(A) = 0.4 and P(B) = 0.25. What is P(neither A nor B)?",
        "options": [
          "0.35",
          "0.1",
          "0.45",
          "0.55"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Two fair spinners are each numbered 1, 2, 3, 4. The two scores are multiplied. What is P(product is even)?",
        "options": [
          "1/2",
          "1/4",
          "2/3",
          "3/4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "ξ = {1, 2, 3, …, 10}, A = {even numbers}, B = {multiples of 3}. What is A ∩ B?",
        "options": [
          "{6}",
          "{2, 3, 4, 6, 8, 9, 10}",
          "{3, 9}",
          "{6, 12}"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Of 80 people, 30 own a dog. 12 of the dog owners also own a cat. 20 of the people without a dog own a cat. How many own a cat?",
        "options": [
          "42",
          "32",
          "12",
          "50"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "P(a team wins a game) = 0.2. Games are independent. What is P(the team wins both of its next two games)?",
        "options": [
          "0.4",
          "0.2",
          "0.04",
          "0.64"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "In a class, 20 boys (12 like maths) and 30 girls (18 like maths). A student who likes maths is chosen at random. What is the probability it is a girl?",
        "options": [
          "3/5",
          "18/50",
          "3/10",
          "2/5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A bag has 5 red and 3 blue sweets. Two are taken without replacement. Given that the first is red, what is P(second is red)?",
        "options": [
          "5/8",
          "4/7",
          "5/7",
          "1/2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A bag has 5 red and 3 blue sweets. Two are taken without replacement. What is P(one of each colour)?",
        "options": [
          "15/32",
          "15/56",
          "15/28",
          "1/2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. What is P(A | B), the probability of A given B?",
        "options": [
          "0.2",
          "0.4",
          "0.8",
          "0.5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A fair dice is rolled twice. What is P(at least one six)?",
        "options": [
          "11/36",
          "1/3",
          "10/36",
          "1/36"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A four-colour spinner has P(red) = x, P(blue) = 2x, P(yellow) = 3x and P(green) = 0.1. What is x?",
        "options": [
          "0.1",
          "0.15",
          "0.18",
          "0.3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "P(Ben is late) = 0.2. If late, P(detention) = 0.6; if not late, P(detention) = 0.15. Ben gets a detention. What is the probability he was late?",
        "options": [
          "0.12",
          "0.24",
          "0.5",
          "0.6"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A game costs £1 to play and P(win £5) = 0.15. The game is played 200 times. What is the expected profit for the organiser?",
        "options": [
          "£30",
          "£150",
          "£170",
          "£50"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "n(ξ) = 40, n(A) = 18, n(B) = 15 and n((A ∪ B)′) = 12. A member of ξ is chosen at random. What is P(A ∩ B)?",
        "options": [
          "1/8",
          "3/10",
          "5/28",
          "7/40"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A bag has n counters, 3 of them red. Two are taken without replacement and P(both red) = 1/15. What is n?",
        "options": [
          "9",
          "10",
          "15",
          "6"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.1 */
  "6.1": {
    "name": "Sampling, Charts & Scatter Graphs",
    "green": [
      {
        "q": "In statistics, what is meant by the population?",
        "options": [
          "The whole group being studied",
          "A small group chosen from the whole group",
          "The number of people living in a town",
          "Only the people who reply to a survey"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Why might a sample be used instead of surveying the whole population?",
        "options": [
          "It always gives exact results",
          "It is quicker and cheaper",
          "It removes every possible bias",
          "It makes the population bigger"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a random sample, every member of the population…",
        "options": [
          "must be over 18 years old",
          "is asked the questions twice",
          "has an equal chance of being chosen",
          "is picked by the researcher personally"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A pie chart represents 36 people. How many degrees represent one person?",
        "options": [
          "36°",
          "5°",
          "100°",
          "10°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "On a scatter graph, as one variable increases the other also increases. What type of correlation is this?",
        "options": [
          "Positive",
          "Negative",
          "No correlation",
          "Inverse"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which diagram is most suitable for showing how a quantity changes over time?",
        "options": [
          "Pie chart",
          "Time series line graph",
          "Pictogram",
          "Scatter graph with no line"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a pictogram, one symbol represents 8 cars. How many cars do 3½ symbols represent?",
        "options": [
          "24",
          "32",
          "28",
          "11.5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A scatter graph shows that as temperature rises, sales of hot chocolate fall. What type of correlation is this?",
        "options": [
          "Positive",
          "No correlation",
          "Zero",
          "Negative"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is a line of best fit?",
        "options": [
          "A straight line following the trend of the points",
          "A zigzag line joining every point from left to right",
          "A line that must always pass through the origin",
          "A vertical line drawn through the middle point"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A sector of a pie chart has an angle of 90°. What fraction of the total does it represent?",
        "options": [
          "1/2",
          "1/4",
          "1/3",
          "1/9"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these is categorical data?",
        "options": [
          "Height in cm",
          "Number of siblings",
          "Favourite colour",
          "Time in seconds"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In a bar chart for categorical data, the bars should…",
        "options": [
          "touch each other with no gaps",
          "have widths that match the frequency",
          "be drawn in order of size only",
          "be equal widths with gaps between"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which diagram is best for ungrouped discrete numerical data, such as the number of pets owned?",
        "options": [
          "Vertical line chart",
          "Scatter graph of two variables",
          "Pie chart",
          "Time series graph"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What does \"no correlation\" mean on a scatter graph?",
        "options": [
          "The points lie close to a straight line",
          "No linear relationship between the variables",
          "One variable is always double the other one",
          "As one variable increases the other always decreases"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A tally shows two complete gates of five and then 3 more marks. What is the frequency?",
        "options": [
          "10",
          "8",
          "13",
          "15"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "In a survey of 60 students, 15 chose football. What angle represents football in a pie chart?",
        "options": [
          "90°",
          "15°",
          "60°",
          "25°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A pie chart for 150 people has a 72° sector for \"bus\". How many people travelled by bus?",
        "options": [
          "72",
          "30",
          "20",
          "50"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A school has 1200 pupils. In a random sample of 50 pupils, 12 walk to school. Estimate how many pupils in the school walk.",
        "options": [
          "240",
          "300",
          "288",
          "12"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A line of best fit passes through (2, 15) and (10, 55). Using the line, estimate y when x = 6.",
        "options": [
          "30",
          "40",
          "45",
          "35"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Why is interpolation usually more reliable than extrapolation?",
        "options": [
          "It estimates within the range of the data",
          "It predicts values far beyond the largest data value",
          "It always passes through the origin of the graph",
          "It ignores any outliers that appear on the graph"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A survey about exercise habits is carried out only on people leaving a gym. Why is the sample biased?",
        "options": [
          "The sample is far too large to be useful",
          "Gym users probably exercise more than most people",
          "The questions were asked to people in person",
          "The survey answers were kept anonymous"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a pictogram one symbol represents 12 ice creams. Monday shows 2¾ symbols. How many ice creams were sold on Monday?",
        "options": [
          "30",
          "27",
          "33",
          "36"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Quarterly sales (£ thousands) were Q1 40, Q2 52, Q3 61, Q4 45. What is the percentage increase from Q1 to Q3?",
        "options": [
          "21%",
          "61%",
          "34.4%",
          "52.5%"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A scatter graph shows strong positive correlation between hours revised and test score. Which statement is correct?",
        "options": [
          "Students who revised more tended to score higher",
          "Revising more definitely causes every student to score higher",
          "Every student who revised more scored higher",
          "There is no link between revision and scores"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In a pie chart the sector for \"cats\" is 120° and represents 40 pets. How many pets are in the survey altogether?",
        "options": [
          "360",
          "120",
          "80",
          "160"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "On a scatter graph of car age against value, one 2-year-old car is worth far less than all the others of similar age. This point is best described as…",
        "options": [
          "the line of best fit",
          "a positive correlation",
          "an outlier",
          "an interpolation"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A dual bar chart shows 14 boys and 18 girls chose maths, and 10 boys and 8 girls chose art. How many more students chose maths than art?",
        "options": [
          "4",
          "10",
          "18",
          "14"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which is the best way to choose a random sample of 30 from 600 students?",
        "options": [
          "Number them 1–600 and pick 30 using random numbers",
          "Choose the first 30 students to arrive at school",
          "Ask 30 of your own friends from different classes",
          "Pick all 30 students from the school football team"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A pie chart represents 240 people. How many people does a 45° sector represent?",
        "options": [
          "45",
          "30",
          "60",
          "24"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Shoe sizes: size 4 – 3 people, size 5 – 7, size 6 – 9, size 7 – 6. What fraction of the people wear size 6?",
        "options": [
          "9/16",
          "6/25",
          "9/25",
          "1/4"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A line of best fit y = 2.5x + 10 was drawn from data with x between 4 and 20. Which prediction is least reliable?",
        "options": [
          "x = 6",
          "x = 12",
          "x = 18",
          "x = 45"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a survey, 18 people chose tea, 30 chose coffee and 12 chose juice. What is the pie chart angle for juice?",
        "options": [
          "72°",
          "12°",
          "60°",
          "36°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "School A (300 pupils) has a 90° \"walk\" sector in its pie chart. School B (800 pupils) has a 45° \"walk\" sector. Which school has more pupils who walk, and by how many?",
        "options": [
          "School A, by 25",
          "School B, by 25",
          "School A, by 45",
          "They are equal"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A factory makes 8000 bulbs a day. In a random sample of 250 bulbs, 6 are faulty. Estimate the number of faulty bulbs made per day.",
        "options": [
          "48",
          "240",
          "192",
          "160"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A café's takings are high every weekend and low midweek. The manager compares Monday of week 1 (£320) with Saturday of week 3 (£890) and says takings have nearly tripled. What is the main flaw?",
        "options": [
          "Mondays are always the busiest day for cafés",
          "The two values should have been added together",
          "Time series graphs cannot be used for money",
          "He compares different days of the weekly cycle"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A town finds strong positive correlation between ice cream sales and cases of sunburn. Which is the best conclusion?",
        "options": [
          "Both are likely linked to a third factor: sunny weather",
          "Eating ice cream causes people to get sunburnt",
          "Getting sunburnt makes people buy more ice cream",
          "There is no relationship of any kind between them"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Asha asks 10 people in her street and 7 support a new park. She claims 70% of the 40 000 people in her town support it. What is the main limitation?",
        "options": [
          "70% has been calculated incorrectly",
          "The sample is small and not random",
          "She should have asked only 7 people",
          "A town is too large to sample at all"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A line of best fit for distance travelled (km, y-axis) against fuel used (litres, x-axis) passes through (0, 0) and (40, 600). What does its gradient represent?",
        "options": [
          "40 litres per km",
          "600 km per litre",
          "15 km per litre",
          "15 litres per km"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A pie chart has sectors of 100°, 80° and 60°, plus one sector for \"other\" representing 30 people. How many people are represented altogether?",
        "options": [
          "120",
          "30",
          "360",
          "90"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which pair of data is best displayed using a scatter graph?",
        "options": [
          "Arm span and height of 30 students",
          "Favourite fruit of 30 students",
          "Monthly rainfall over one year",
          "Number of pets owned by 30 students"
        ],
        "answer": 0,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.2 */
  "6.2": {
    "name": "Averages, Spread & Grouped Data",
    "green": [
      {
        "q": "Find the mode of 3, 7, 7, 2, 9, 7, 2.",
        "options": [
          "7",
          "2",
          "5.3",
          "9"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Find the median of 4, 9, 2, 7, 5.",
        "options": [
          "7",
          "5",
          "2",
          "5.4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find the range of 12, 5, 19, 8, 3.",
        "options": [
          "19",
          "12",
          "16",
          "8"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Find the mean of 6, 8, 10, 12.",
        "options": [
          "8",
          "10",
          "36",
          "9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is continuous data?",
        "options": [
          "Mass of a parcel",
          "Number of goals scored",
          "Shoe size",
          "Number of cars in a car park"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Data collected by the person who will use it, for example from their own survey, is called…",
        "options": [
          "secondary data",
          "primary data",
          "continuous data",
          "categorical data"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find the median of 3, 8, 6, 10, 1, 4.",
        "options": [
          "4",
          "6",
          "5",
          "5.3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In a grouped frequency table, the class with the highest frequency is called the…",
        "options": [
          "median class",
          "mean class",
          "range",
          "modal class"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the interquartile range?",
        "options": [
          "Upper quartile − lower quartile",
          "Largest value − smallest value of the data",
          "Median − lower quartile",
          "Mean − median"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "On a histogram with unequal class widths, what is plotted on the vertical axis?",
        "options": [
          "Frequency",
          "Frequency density",
          "Cumulative frequency",
          "Class width"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Frequency density is equal to…",
        "options": [
          "frequency × class width",
          "class width ÷ frequency",
          "frequency ÷ class width",
          "frequency ÷ total frequency"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which average is most affected by an extreme value (outlier)?",
        "options": [
          "Mode",
          "Median",
          "Modal class",
          "Mean"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which value is an outlier in the data 12, 14, 13, 15, 48, 14?",
        "options": [
          "48",
          "12",
          "15",
          "14"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "On a cumulative frequency graph, each cumulative frequency is plotted at the…",
        "options": [
          "midpoint of each class",
          "upper class boundary",
          "lower class boundary",
          "width of the class"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "What is the midpoint of the class 10 < t ≤ 20?",
        "options": [
          "10",
          "20",
          "15",
          "30"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Scores: 1 (frequency 4), 2 (frequency 6), 3 (frequency 7), 4 (frequency 3). Find the mean score.",
        "options": [
          "2.45",
          "2.5",
          "12.25",
          "3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Scores: 1 (frequency 4), 2 (frequency 6), 3 (frequency 7), 4 (frequency 3). What is the median score?",
        "options": [
          "3",
          "2.5",
          "2",
          "6.5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Times: 0 ≤ t < 10 (frequency 5), 10 ≤ t < 20 (frequency 8), 20 ≤ t < 30 (frequency 7). Estimate the mean time.",
        "options": [
          "15",
          "20",
          "16",
          "106.7"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Why is a mean calculated from a grouped frequency table only an estimate?",
        "options": [
          "Because the frequencies are always rounded to the nearest ten",
          "Because the total of the frequencies is never known",
          "Because the classes always overlap each other",
          "Exact values are unknown, so midpoints are used"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The mean of 5 numbers is 8. Four of the numbers are 6, 9, 7 and 10. What is the fifth number?",
        "options": [
          "8",
          "7",
          "40",
          "32"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Marks: 0–9 (frequency 6), 10–19 (frequency 11), 20–29 (frequency 9), 30–39 (frequency 4). Which class contains the median?",
        "options": [
          "0–9",
          "10–19",
          "20–29",
          "30–39"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The class 20 ≤ x < 35 has frequency 45. What is its frequency density?",
        "options": [
          "45",
          "15",
          "3",
          "0.33"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Find the lower quartile of 2, 4, 5, 7, 8, 10, 12.",
        "options": [
          "5",
          "7",
          "10",
          "4"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A box plot has lower quartile 18 and upper quartile 31. What is the interquartile range?",
        "options": [
          "13",
          "49",
          "24.5",
          "31"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Team A: mean score 52, range 30. Team B: mean score 48, range 12. Which statement is correct?",
        "options": [
          "Team B scored higher on average and its scores were more consistent",
          "Team A scored higher on average; Team B was more consistent",
          "Team A scored higher and was more consistent",
          "Team B scored lower and was less consistent"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A histogram bar for 10 ≤ t < 15 has frequency density 4.2. What is the frequency of this class?",
        "options": [
          "4.2",
          "2.1",
          "21",
          "42"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The mean of 10 numbers is 6. The number 17 is added to the list. What is the new mean?",
        "options": [
          "6.5",
          "11.5",
          "23",
          "7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A cumulative frequency graph shows 80 values. At what cumulative frequency should you read off the upper quartile?",
        "options": [
          "60",
          "40",
          "20",
          "75"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which average is the most suitable for the favourite colours of a class?",
        "options": [
          "Mean",
          "Mode",
          "Median",
          "Range"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The ages of 6 people are 14, 15, 15, 16, 17 and 68. Which average best represents a typical age?",
        "options": [
          "Mean, because it uses every one of the values",
          "Range, because it shows the spread",
          "Median, because it is not affected by 68",
          "Mode, because 68 is the largest"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Masses: 0 < m ≤ 20 (frequency 4), 20 < m ≤ 40 (frequency 10), 40 < m ≤ 60 (frequency 12), 60 < m ≤ 80 (frequency 4). Estimate the mean mass to 1 d.p.",
        "options": [
          "305",
          "50",
          "42.5",
          "40.7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The mean height of 12 boys is 160 cm and the mean height of 8 girls is 150 cm. Find the mean height of all 20 children.",
        "options": [
          "156 cm",
          "155 cm",
          "310 cm",
          "158 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A histogram has bars 0 ≤ t < 10 (frequency density 1.2), 10 ≤ t < 30 (frequency density 2.5) and 30 ≤ t < 60 (frequency density 0.8). How many values are there in total?",
        "options": [
          "4.5",
          "86",
          "74",
          "90"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A histogram bar for 20 ≤ x < 40 has frequency density 3. Estimate how many values lie between 25 and 40.",
        "options": [
          "60",
          "15",
          "45",
          "3"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Five whole numbers have mode 4, median 5 and mean 6. Which set could they be?",
        "options": [
          "4, 4, 5, 6, 7",
          "3, 4, 4, 5, 14",
          "4, 4, 6, 7, 9",
          "4, 4, 5, 8, 9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Box plot A has median 42 and IQR 10. Box plot B has median 47 and IQR 22. Which comparison is valid?",
        "options": [
          "B is higher on average; A is more consistent",
          "A is higher on average and also more consistent",
          "B is higher on average and also more consistent",
          "A and B have the same spread but different medians"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The mean of 4 numbers is 7. When one number is removed, the mean of the other three is 6. What number was removed?",
        "options": [
          "1",
          "10",
          "6",
          "13"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Why might the median be a better average than the mean for house prices in a town?",
        "options": [
          "The mean is harder to work out using a calculator",
          "The median always gives a larger value than the mean",
          "A few very expensive houses would distort the mean",
          "House prices are categorical, so need the median"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A cumulative frequency table shows: ≤ 10: 8, ≤ 20: 23, ≤ 30: 41, ≤ 40: 50. How many values lie between 20 and 30?",
        "options": [
          "41",
          "23",
          "64",
          "18"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Data in order: 3, 5, 6, 8, 9, 11, 12, 14, 15, 18, 30. An outlier is a value more than 1.5 × IQR above the upper quartile. Is 30 an outlier?",
        "options": [
          "Yes, it is above 28.5",
          "No, it is below 33",
          "Yes, it is above the median",
          "No, outliers must be negative"
        ],
        "answer": 0,
        "higher": true
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATHS_AQA_GCSE_QUESTIONS };
}
