/*
 * Pearson Edexcel GCSE Mathematics (1MA1) — Question Bank
 * 40 questions per topic: 15 green (recall/basic), 15 amber (application), 10 red (analysis/multi-step)
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 questions at random.
 * answer: 0-based index of correct option.
 * higher: true = Higher-tier-only content (1MA1 is tiered; Foundation students can skip these).
 */

const MATHS_EDEXCEL_GCSE_QUESTIONS = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  "1.1": {
    "name": "Structure & Calculation",
    "green": [
      {
        "q": "Which of these statements is true?",
        "options": [
          "−9 < −4",
          "−4 < −9",
          "−9 > −4",
          "−9 = −4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the value of the digit 4 in the number 31.045?",
        "options": [
          "4 tenths",
          "4 hundredths",
          "4 thousandths",
          "4 tens"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out −5 − 9.",
        "options": [
          "4",
          "−4",
          "−14",
          "14"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out −36 ÷ −4.",
        "options": [
          "−9",
          "−40",
          "40",
          "9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these numbers is a prime number?",
        "options": [
          "41",
          "51",
          "1",
          "27"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 20 − 4 × 3.",
        "options": [
          "48",
          "8",
          "68",
          "12"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the reciprocal of 8?",
        "options": [
          "−8",
          "0.8",
          "1/8",
          "64"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these numbers is a multiple of 7?",
        "options": [
          "17",
          "27",
          "47",
          "63"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "There are m ways of doing one task and, for each of these, n ways of doing a second task. How many ways are there of doing both tasks?",
        "options": [
          "m × n",
          "m + n",
          "mⁿ",
          "m − n"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Write 3 × 3 × 3 × 3 × 5 × 5 in index form.",
        "options": [
          "4³ × 2⁵",
          "3⁴ × 5²",
          "3⁴ + 5²",
          "12 × 10"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which operation is the inverse of \"subtract 15\"?",
        "options": [
          "subtract 15",
          "divide by 15",
          "add 15",
          "multiply by −15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out 0.6 × 0.4.",
        "options": [
          "2.4",
          "0.024",
          "24",
          "0.24"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 7.2 ÷ 100.",
        "options": [
          "0.072",
          "0.72",
          "720",
          "0.0072"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which symbol means \"is not equal to\"?",
        "options": [
          "≤",
          "≠",
          "≥",
          "≈"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 5² − √25.",
        "options": [
          "5",
          "0",
          "20",
          "10"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "What is the highest common factor (HCF) of 18 and 30?",
        "options": [
          "3",
          "90",
          "2",
          "6"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the lowest common multiple (LCM) of 9 and 12?",
        "options": [
          "36",
          "108",
          "3",
          "72"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which shows 90 written as a product of its prime factors?",
        "options": [
          "9 × 10",
          "2 × 3² × 5",
          "2² × 3 × 5",
          "2 × 3 × 15"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A combination lock has 3 dials. Each dial shows a digit from 0 to 9. How many different combinations are possible?",
        "options": [
          "30",
          "27",
          "1000",
          "720"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Work out (−4)² + 3 × (−5).",
        "options": [
          "−31",
          "−95",
          "31",
          "1"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 1½ × (−6).",
        "options": [
          "−9",
          "9",
          "−3",
          "−7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 30 − 12 ÷ 4 × 2.",
        "options": [
          "28.5",
          "24",
          "9",
          "12"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Given that 34 × 56 = 1904, what is the value of 3.4 × 0.56?",
        "options": [
          "19.04",
          "0.1904",
          "1.904",
          "190.4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out 4.8 ÷ 0.06.",
        "options": [
          "8",
          "0.8",
          "800",
          "80"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The temperature at midnight was −6 °C. At noon it was 9 °C. By how many degrees did the temperature rise?",
        "options": [
          "15 °C",
          "3 °C",
          "−15 °C",
          "−3 °C"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two lights start flashing at the same time. One flashes every 8 seconds and the other every 14 seconds. After how many seconds do they next flash at the same time?",
        "options": [
          "112",
          "56",
          "2",
          "22"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out √(100 − 36) ÷ 2.",
        "options": [
          "2",
          "32",
          "4",
          "8"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In how many different orders can 5 people stand in a line?",
        "options": [
          "25",
          "5",
          "15",
          "120"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "What is the reciprocal of 0.2?",
        "options": [
          "5",
          "−0.2",
          "0.5",
          "2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these statements is true?",
        "options": [
          "0.7 < 0.65",
          "1/3 > 0.3",
          "−0.5 < −0.55",
          "2/5 ≥ 0.45"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A code is 1 letter from A to Z followed by 2 digits from 0 to 9. Letters and digits may be repeated. How many different codes are possible?",
        "options": [
          "46",
          "260",
          "2600",
          "2340"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A = 2² × 3³ × 5 and B = 2³ × 3 × 7. What is the HCF of A and B?",
        "options": [
          "2³ × 3³ × 5 × 7",
          "6",
          "24",
          "12"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "C = 2 × 3² × 5 and D = 2² × 3 × 11. What is the LCM of C and D?",
        "options": [
          "1980",
          "6",
          "11 880",
          "990"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A restaurant has 5 starters, 7 mains and 4 desserts. How many different three-course meals (one starter, one main and one dessert) are possible?",
        "options": [
          "16",
          "140",
          "35",
          "70"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Plates are sold in packs of 6 and cups in packs of 15. Ali wants to buy exactly the same number of plates and cups. What is the smallest number of packs of plates he can buy?",
        "options": [
          "2",
          "30",
          "5",
          "90"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "How many 3-digit numbers can be made using the digits 1 to 9 if no digit may be used more than once?",
        "options": [
          "729",
          "27",
          "84",
          "504"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Given that 125 × 36 = 4500, what is the value of 450 ÷ 0.36?",
        "options": [
          "1250",
          "125",
          "12.5",
          "12 500"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these numbers has exactly three factors?",
        "options": [
          "21",
          "121",
          "81",
          "64"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A password is 2 different letters chosen from A, B, C, D and E, followed by 1 digit from 0 to 9. How many different passwords are possible?",
        "options": [
          "250",
          "19",
          "200",
          "100"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The number 2ⁿ × 3 has exactly 8 factors. What is the value of n?",
        "options": [
          "4",
          "8",
          "2",
          "3"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.2 */
  "1.2": {
    "name": "Fractions, Decimals & Percentages",
    "green": [
      {
        "q": "Write 5/8 as a decimal.",
        "options": [
          "0.625",
          "0.58",
          "1.6",
          "0.6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 35% as a fraction in its simplest form.",
        "options": [
          "35/10",
          "7/20",
          "3/5",
          "1/35"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 2/5 + 1/3.",
        "options": [
          "3/8",
          "3/15",
          "11/15",
          "2/15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 0.45 as a fraction in its simplest form.",
        "options": [
          "45/10",
          "4/5",
          "9/2",
          "9/20"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 3/4 of 28.",
        "options": [
          "21",
          "7",
          "112",
          "24"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which decimal multiplier would you use to find 6% of an amount?",
        "options": [
          "0.6",
          "0.06",
          "6",
          "1.06"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which fraction is equivalent to 2/3?",
        "options": [
          "4/5",
          "3/2",
          "10/15",
          "2/6"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 3⅖ as an improper fraction.",
        "options": [
          "6/5",
          "11/5",
          "15/2",
          "17/5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 4/9 × 3/8. Give your answer in its simplest form.",
        "options": [
          "1/6",
          "7/17",
          "32/27",
          "3/2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 1 − 5/12.",
        "options": [
          "17/12",
          "7/12",
          "4/12",
          "7/11"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out 30% of 70.",
        "options": [
          "2.1",
          "210",
          "21",
          "40"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Jo and Kim share some sweets in the ratio 3 : 4. What fraction of the sweets does Jo get?",
        "options": [
          "3/4",
          "4/7",
          "1/3",
          "3/7"
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
          "0.69"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 5/6 ÷ 1/3.",
        "options": [
          "5/18",
          "2½",
          "1/2",
          "2/5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 0.08 as a percentage.",
        "options": [
          "0.8%",
          "80%",
          "8%",
          "0.08%"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Work out 1⅔ + 2¾.",
        "options": [
          "3 5/7",
          "4 5/7",
          "3 5/12",
          "4 5/12"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 2½ × 1⅕.",
        "options": [
          "3",
          "2 1/10",
          "3 7/10",
          "25/12"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which multiplier decreases an amount by 15%?",
        "options": [
          "0.15",
          "0.85",
          "1.15",
          "−0.15"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Put these in order, smallest first:  3/8,  0.4,  35%,  0.385",
        "options": [
          "3/8, 35%, 0.385, 0.4",
          "35%, 0.385, 3/8, 0.4",
          "35%, 3/8, 0.385, 0.4",
          "0.4, 0.385, 3/8, 35%"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which fraction is equal to 0.875?",
        "options": [
          "8/7",
          "875/100",
          "5/8",
          "7/8"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 3/5 ÷ 9/10. Give your answer in its simplest form.",
        "options": [
          "2/3",
          "27/50",
          "3/2",
          "6/5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A jacket costs £64. The price is reduced by 3/8. What is the new price?",
        "options": [
          "£24",
          "£40",
          "£61",
          "£52"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Multiplying an amount by 1.3 gives:",
        "options": [
          "a 3% increase",
          "a 13% increase",
          "a 30% increase",
          "a 30% decrease"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In a club, 5/9 of the members are girls. The rest are boys. What is the ratio of girls to boys?",
        "options": [
          "5 : 9",
          "4 : 5",
          "9 : 5",
          "5 : 4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out 35% of 260.",
        "options": [
          "91",
          "9.1",
          "26",
          "169"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 5/6 − 3/4.",
        "options": [
          "1",
          "1/12",
          "1/24",
          "1/2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 0.555… (5 recurring) as a fraction.",
        "options": [
          "1/2",
          "55/100",
          "5/9",
          "5/99"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Write 0.181818… (18 recurring) as a fraction in its simplest form.",
        "options": [
          "9/50",
          "1/5",
          "18/999",
          "2/11"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Work out −2¼ + 3½.",
        "options": [
          "1¼",
          "−5¾",
          "5¾",
          "−1¼"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which calculation finds 12.5% of £320?",
        "options": [
          "320 × 12.5",
          "320 ÷ 8",
          "320 ÷ 12.5",
          "320 × 1.125"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Write 0.3181818… (18 recurring) as a fraction in its simplest form.",
        "options": [
          "53/165",
          "7/20",
          "7/22",
          "3/22"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Write 0.4666… (6 recurring) as a fraction in its simplest form.",
        "options": [
          "233/500",
          "7/9",
          "2/3",
          "7/15"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Priya gives 1/3 of her money to her brother and 1/4 of her money to her sister. She has £75 left. How much money did she have at the start?",
        "options": [
          "£180",
          "£128.57",
          "£100",
          "£300"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "£500 is increased by 20%. The new amount is then decreased by 20%. What is the final amount?",
        "options": [
          "£500",
          "£480",
          "£520",
          "£400"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Cats and dogs at a shelter are in the ratio 3 : 5. 1/3 of the cats and 4/5 of the dogs are female. What fraction of all the animals are female?",
        "options": [
          "17/15",
          "17/30",
          "5/8",
          "4/15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A jug is 4/5 full of juice. After 150 ml is poured out, the jug is 1/2 full. What is the capacity of the jug?",
        "options": [
          "300 ml",
          "187.5 ml",
          "1500 ml",
          "500 ml"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out (3/4 − 1/6) ÷ 1¾.",
        "options": [
          "1/3",
          "49/48",
          "1",
          "7/3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A price is multiplied by 0.8 and then the result is multiplied by 1.25. What is the overall effect on the original price?",
        "options": [
          "a 5% increase",
          "No change",
          "a 5% decrease",
          "a 45% increase"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which recurring decimal is equal to 4/11?",
        "options": [
          "0.444…",
          "0.3666…",
          "0.363636…",
          "0.411411…"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which fraction is equal to 1.222… (2 recurring)?",
        "options": [
          "6/5",
          "12/9",
          "122/100",
          "11/9"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.3 */
  "1.3": {
    "name": "Measures, Accuracy & Bounds",
    "green": [
      {
        "q": "Round 5.8374 to 2 decimal places.",
        "options": [
          "5.84",
          "5.83",
          "5.837",
          "5.8"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Round 0.006182 to 2 significant figures.",
        "options": [
          "0.006",
          "0.0062",
          "0.0061",
          "0.00618"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Round 52 791 to 2 significant figures.",
        "options": [
          "53",
          "52 000",
          "53 000",
          "52 800"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "How many metres are there in 2.7 km?",
        "options": [
          "270 m",
          "27 000 m",
          "0.0027 m",
          "2700 m"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Change 4600 g into kilograms.",
        "options": [
          "4.6 kg",
          "46 kg",
          "0.46 kg",
          "460 kg"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many cm³ are there in 3 litres?",
        "options": [
          "300 cm³",
          "3000 cm³",
          "30 000 cm³",
          "3 000 000 cm³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How many mm² are there in 1 cm²?",
        "options": [
          "10 mm²",
          "1000 mm²",
          "100 mm²",
          "10 000 mm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 3 hours 45 minutes as a number of hours.",
        "options": [
          "3.45 hours",
          "3.65 hours",
          "3.4 hours",
          "3.75 hours"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "By rounding each number to 1 significant figure, estimate 39.2 × 5.87",
        "options": [
          "240",
          "200",
          "230",
          "2400"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many significant figures does 0.05020 have?",
        "options": [
          "2",
          "4",
          "3",
          "5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Truncate 6.987 to 2 decimal places.",
        "options": [
          "6.99",
          "7.00",
          "6.98",
          "6.9"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The mass of a dog is 9 kg, correct to the nearest kilogram. What is the upper bound of the mass?",
        "options": [
          "9.4 kg",
          "9.49 kg",
          "10 kg",
          "9.5 kg"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Round 2.996 to 2 decimal places.",
        "options": [
          "3.00",
          "2.99",
          "2.10",
          "3.1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write £4.07 in pence.",
        "options": [
          "47p",
          "407p",
          "4070p",
          "40.7p"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Density = mass ÷ volume. A block has a mass of 600 g and a volume of 50 cm³. Work out its density.",
        "options": [
          "30 000 g/cm³",
          "0.083 g/cm³",
          "12 g/cm³",
          "650 g/cm³"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "The length L of a rope is 6.3 m, correct to 1 decimal place. Which is the error interval for L?",
        "options": [
          "6.2 ≤ L < 6.4",
          "6.25 < L ≤ 6.35",
          "6.3 ≤ L < 6.4",
          "6.25 ≤ L < 6.35"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A number y is truncated to a whole number. The result is 17. Which is the error interval for y?",
        "options": [
          "17 ≤ y < 18",
          "16.5 ≤ y < 17.5",
          "16 < y ≤ 17",
          "17 < y ≤ 18"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Change 0.65 m² into cm².",
        "options": [
          "65 cm²",
          "6500 cm²",
          "650 cm²",
          "65 000 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Change 2 300 000 cm³ into m³.",
        "options": [
          "23 m³",
          "230 m³",
          "2.3 m³",
          "0.23 m³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A train travels 210 km in 1 hour 45 minutes. Work out its average speed.",
        "options": [
          "144.8 km/h",
          "105 km/h",
          "367.5 km/h",
          "120 km/h"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "By rounding each number to 1 significant figure, work out an estimate for (8.73 × 21.4) ÷ 0.38",
        "options": [
          "450",
          "45",
          "4500",
          "72"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "n = 4700, correct to 2 significant figures. Which is the error interval for n?",
        "options": [
          "4600 ≤ n < 4800",
          "4650 ≤ n < 4750",
          "4695 ≤ n < 4705",
          "4650 < n ≤ 4750"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The mass of a parcel is 300 g, correct to the nearest 50 g. What is the lower bound of the mass?",
        "options": [
          "250 g",
          "295 g",
          "275 g",
          "299.5 g"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Jay works out 4.12 × 0.297 on his calculator. Use estimation to decide which answer is correct.",
        "options": [
          "12.2364",
          "0.122364",
          "122.364",
          "1.22364"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Round 0.00040519 to 3 significant figures.",
        "options": [
          "0.000405",
          "0.000406",
          "0.0004",
          "0.00041"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A rectangle has length 15 cm and width 8 cm, both correct to the nearest centimetre. What is the upper bound of its perimeter?",
        "options": [
          "46 cm",
          "48 cm",
          "44 cm",
          "47 cm"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A crate holds 5 identical boxes. Each box has a mass of 1.2 kg, correct to the nearest 0.1 kg. What is the upper bound of the total mass of the 5 boxes?",
        "options": [
          "6.05 kg",
          "6.5 kg",
          "6.25 kg",
          "6 kg"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "a = 9 and b = 3, both correct to the nearest whole number. What is the lower bound of a − b?",
        "options": [
          "6",
          "7",
          "5.5",
          "5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Pressure = force ÷ area. A force of 240 N acts on an area of 0.6 m². Work out the pressure.",
        "options": [
          "400 N/m²",
          "144 N/m²",
          "40 N/m²",
          "4000 N/m²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A time is 9.86 seconds, correct to 2 decimal places. What is the upper bound of the time?",
        "options": [
          "9.87 s",
          "9.865 s",
          "9.869 s",
          "9.9 s"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A rectangle measures 6.4 cm by 3.8 cm, both correct to 1 decimal place. What is the upper bound of its area?",
        "options": [
          "24.32 cm²",
          "23.8175 cm²",
          "24.8325 cm²",
          "24.51 cm²"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Density = mass ÷ volume. A stone has mass 250 g, correct to the nearest 10 g, and volume 32 cm³, correct to the nearest cm³. Which calculation gives the upper bound of the density?",
        "options": [
          "255 ÷ 32.5",
          "245 ÷ 31.5",
          "245 ÷ 32.5",
          "255 ÷ 31.5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A cube has a volume of 0.027 m³. What is the length of one edge in centimetres?",
        "options": [
          "30 cm",
          "3 cm",
          "9 cm",
          "300 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "x = 12.6 and y = 4.3, both correct to 1 decimal place. What is the lower bound of x − y?",
        "options": [
          "8.3",
          "8.2",
          "8.25",
          "8.4"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A number n is 12 when rounded to the nearest whole number, and 11 when truncated to a whole number. Which is the error interval for n?",
        "options": [
          "11 ≤ n < 12",
          "11.5 ≤ n < 12.5",
          "11.5 ≤ n < 12",
          "11 ≤ n < 12.5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The area of a circle is 80 cm², correct to the nearest cm². What is the lower bound of its radius, to 3 significant figures?",
        "options": [
          "5.05 cm",
          "5.06 cm",
          "8.92 cm",
          "5.03 cm"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A paddling pool holds 54 m³ of water when full. It is filled at 300 litres per minute. How long does it take to fill the empty pool?",
        "options": [
          "3 hours",
          "18 minutes",
          "30 hours",
          "1.8 hours"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The lower bound of a value is 6.8349 and the upper bound is 6.8412. What is the value to an appropriate degree of accuracy?",
        "options": [
          "6.83",
          "6.8",
          "6.84",
          "7"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Mo estimates (59.7 × 0.312) ÷ 2.04 by rounding each number to 1 significant figure. The exact answer is 9.13 to 3 s.f. Which statement is correct?",
        "options": [
          "9, an overestimate",
          "90, an overestimate",
          "9, an underestimate",
          "0.9, an underestimate"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A car travels 250 km, correct to the nearest 10 km, in 3.2 hours, correct to 1 decimal place. What is the lower bound of its average speed, to 3 significant figures?",
        "options": [
          "78.1 km/h",
          "81.0 km/h",
          "77.8 km/h",
          "75.4 km/h"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 1.4 */
  "1.4": {
    "name": "Powers, Roots, Surds & Standard Form",
    "green": [
      {
        "q": "Work out 3⁴.",
        "options": [
          "81",
          "12",
          "64",
          "27"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out √196.",
        "options": [
          "98",
          "14",
          "13",
          "16"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write down the value of ∛125.",
        "options": [
          "25",
          "41.7",
          "5",
          "15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify 6³ × 6⁵. Give your answer as a power of 6.",
        "options": [
          "6¹⁵",
          "36⁸",
          "6²",
          "6⁸"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Simplify 9¹⁰ ÷ 9². Give your answer as a power of 9.",
        "options": [
          "9⁸",
          "9⁵",
          "9¹²",
          "1⁸"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify (5³)³. Give your answer as a power of 5.",
        "options": [
          "5⁶",
          "5⁹",
          "5²⁷",
          "25⁹"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out the value of 2⁻².",
        "options": [
          "−4",
          "−1/4",
          "1/4",
          "4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write 7.1 × 10⁴ as an ordinary number.",
        "options": [
          "710 000",
          "7100",
          "0.00071",
          "71 000"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Write 0.00052 in standard form.",
        "options": [
          "5.2 × 10⁻⁴",
          "5.2 × 10⁻³",
          "52 × 10⁻⁵",
          "5.2 × 10⁴"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 830 000 in standard form.",
        "options": [
          "83 × 10⁴",
          "8.3 × 10⁵",
          "8.3 × 10⁴",
          "0.83 × 10⁶"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write down the value of 12⁰.",
        "options": [
          "0",
          "12",
          "1",
          "120"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the value of 49^(1/2).",
        "options": [
          "24.5",
          "2401",
          "1/49",
          "7"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Simplify √20.",
        "options": [
          "2√5",
          "4√5",
          "5√2",
          "10√2"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A circle has radius 7 cm. What is its exact circumference?",
        "options": [
          "49π cm",
          "14π cm",
          "7π cm",
          "44 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these numbers is NOT a power of 2?",
        "options": [
          "16",
          "64",
          "24",
          "128"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Work out (3 × 10⁵) × (2 × 10⁴). Give your answer in standard form.",
        "options": [
          "6 × 10²⁰",
          "5 × 10⁹",
          "6 × 10¹",
          "6 × 10⁹"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out (8 × 10⁹) ÷ (4 × 10³). Give your answer in standard form.",
        "options": [
          "2 × 10⁶",
          "2 × 10³",
          "4 × 10⁶",
          "2 × 10¹²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out (7 × 10³) × (6 × 10⁻⁵). Give your answer in standard form.",
        "options": [
          "42 × 10⁻²",
          "4.2 × 10⁻¹",
          "4.2 × 10⁻²",
          "4.2 × 10⁻¹⁵"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify (3y⁴)².",
        "options": [
          "6y⁸",
          "3y⁸",
          "9y⁸",
          "9y⁶"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the value of 27^(2/3).",
        "options": [
          "18",
          "3",
          "6",
          "9"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Work out the value of 4⁻¹ × 4³.",
        "options": [
          "16",
          "1/64",
          "64",
          "−16"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify √18 + √32.",
        "options": [
          "√50",
          "7√2",
          "12√2",
          "6√2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Rationalise the denominator of 10/√5 and simplify.",
        "options": [
          "10√5",
          "√2",
          "2√5",
          "5√2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which is larger, 3⁵ or 5³, and by how much?",
        "options": [
          "5³, by 118",
          "They are equal",
          "3⁵, by 15",
          "3⁵, by 118"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out (6 × 10⁻⁴) + (2 × 10⁻³). Give your answer in standard form.",
        "options": [
          "2.6 × 10⁻³",
          "8 × 10⁻⁷",
          "8 × 10⁻⁴",
          "2.6 × 10⁻⁴"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out the value of 5⁻³.",
        "options": [
          "−125",
          "1/125",
          "−15",
          "1/15"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find the value of n when 2ⁿ = 16 × 2³",
        "options": [
          "12",
          "4",
          "7",
          "48"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out √0.36",
        "options": [
          "0.06",
          "0.18",
          "0.006",
          "0.6"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A calculator display shows 3.08E5. What is this as an ordinary number?",
        "options": [
          "308 000",
          "3 080 000",
          "30 800",
          "0.0000308"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A quarter circle has radius 6 cm. What is its exact area?",
        "options": [
          "36π cm²",
          "9π cm²",
          "3π cm²",
          "18π cm²"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Expand and simplify (5 − √3)(5 + √3).",
        "options": [
          "28",
          "16",
          "22",
          "25 − √3"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Expand and simplify (3 − √5)².",
        "options": [
          "4",
          "14 − 3√5",
          "14 + 6√5",
          "14 − 6√5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The mass of Jupiter is 1.90 × 10²⁷ kg. The mass of the Earth is 5.97 × 10²⁴ kg. How many times heavier is Jupiter than the Earth, to the nearest whole number?",
        "options": [
          "318",
          "32",
          "3183",
          "0.318"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Rationalise the denominator of 6/(4 − √10) and simplify.",
        "options": [
          "4 − √10",
          "4 + √10",
          "24 + 6√10",
          "(4 + √10)/6"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Work out the value of (16/25)^(−3/2).",
        "options": [
          "64/125",
          "−125/64",
          "125/64",
          "5/4"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Work out (6.3 × 10⁶) − (8 × 10⁵). Give your answer in standard form.",
        "options": [
          "−1.7 × 10¹",
          "5.5 × 10⁵",
          "−1.7 × 10⁶",
          "5.5 × 10⁶"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "3ˣ = 243 and 3ʸ = 1/9. Work out the value of x − y.",
        "options": [
          "7",
          "3",
          "−3",
          "11"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify √98 − √50 + √8.",
        "options": [
          "√56",
          "4√2",
          "2√2",
          "6√2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Solve 8ˣ = 1/16.",
        "options": [
          "x = −2",
          "x = −3/4",
          "x = −4/3",
          "x = 4/3"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A semicircle has diameter 12 cm. What is its exact perimeter?",
        "options": [
          "18π cm",
          "12π + 12 cm",
          "6π cm",
          "6π + 12 cm"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.1 */
  "2.1": {
    "name": "Algebraic Notation & Manipulation",
    "green": [
      {
        "q": "Simplify 4 × p × q × 3.",
        "options": [
          "7pq",
          "12p + q",
          "12pq",
          "43pq"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Write t × t × t × s using algebraic notation.",
        "options": [
          "st³",
          "3st",
          "t³ + s",
          "s³t"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify 6m − 2m + 3m.",
        "options": [
          "11m",
          "7m",
          "m",
          "7m³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Expand 5(x − 4).",
        "options": [
          "5x − 20",
          "5x − 4",
          "5x + 20",
          "x − 20"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out the value of 4b − 7 when b = 3.",
        "options": [
          "5",
          "36",
          "0",
          "19"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Factorise 10y + 15 completely.",
        "options": [
          "5(2y + 15)",
          "10(y + 5)",
          "5y(2 + 3)",
          "5(2y + 3)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which one of these is a formula?",
        "options": [
          "3x + 4 = 19",
          "P = 2l + 2w",
          "2(x + 1) ≡ 2x + 2",
          "5x − 2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify a⁵ × a³.",
        "options": [
          "a¹⁵",
          "a⁸",
          "a²",
          "2a⁸"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify 20k⁸ ÷ 4k².",
        "options": [
          "5k⁶",
          "5k⁴",
          "16k⁶",
          "80k¹⁰"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the coefficient of x in 4x³ − 9x + 2?",
        "options": [
          "9",
          "4",
          "−9",
          "2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify (m⁴)³.",
        "options": [
          "m⁷",
          "m¹²",
          "m⁶⁴",
          "3m⁴"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Expand and simplify (x + 3)(x + 4).",
        "options": [
          "x² + 12x + 7",
          "x² + 7x + 7",
          "x² + 12",
          "x² + 7x + 12"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Factorise x² + 8x + 15.",
        "options": [
          "(x + 1)(x + 15)",
          "(x + 2)(x + 6)",
          "(x − 3)(x − 5)",
          "(x + 3)(x + 5)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How should m ÷ n be written in algebra?",
        "options": [
          "mn",
          "m/n",
          "n/m",
          "m − n"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify (3x + 12)/(x + 4).",
        "options": [
          "12",
          "3x",
          "x + 3",
          "3"
        ],
        "answer": 3,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "Expand and simplify 4(x + 2) − 3(x − 5).",
        "options": [
          "x − 7",
          "x + 3",
          "x + 23",
          "7x + 23"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Expand and simplify (x − 6)(x + 2).",
        "options": [
          "x² + 4x − 12",
          "x² − 4x − 12",
          "x² − 4x + 12",
          "x² − 8x − 12"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Factorise x² − 81.",
        "options": [
          "(x − 9)²",
          "(x + 9)²",
          "(x − 3)(x + 27)",
          "(x + 9)(x − 9)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Factorise fully 12a²b + 18ab².",
        "options": [
          "6ab(2a + 3b)",
          "6(2a²b + 3ab²)",
          "3ab(4a + 6b)",
          "ab(12a + 18b)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The formula E = mc² is used in physics. Work out E when m = 3 and c = 4.",
        "options": [
          "144",
          "48",
          "24",
          "19"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Expand and simplify (x + 4)².",
        "options": [
          "x² + 8x + 16",
          "x² + 16",
          "x² + 4x + 16",
          "x² + 8x + 8"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Factorise x² − 3x − 10.",
        "options": [
          "(x − 5)(x + 2)",
          "(x + 5)(x − 2)",
          "(x − 10)(x + 1)",
          "(x − 5)(x − 2)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Simplify (4a²b)³.",
        "options": [
          "12a⁶b³",
          "64a⁶b³",
          "64a⁵b³",
          "4a⁶b³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which one of these is an identity?",
        "options": [
          "3x + 2 = 11",
          "3x + 2 > 11",
          "y = 3x + 2",
          "3(x + 2) ≡ 3x + 6"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Work out the value of a² − 3ab when a = −4 and b = 2.",
        "options": [
          "8",
          "−40",
          "40",
          "−8"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Simplify 3x⁻² × 4x⁶.",
        "options": [
          "7x⁴",
          "12x⁻¹²",
          "12x⁴",
          "12x⁸"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Expand and simplify (2x + 5)(x − 3).",
        "options": [
          "2x² + x − 15",
          "2x² − x − 15",
          "2x² − 11x − 15",
          "2x² − x + 15"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify fully (x + 2)/(x² + 5x + 6).",
        "options": [
          "x + 3",
          "1/(5x + 3)",
          "1/(x + 2)",
          "1/(x + 3)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Expand and simplify (√5 + 1)(√5 + 3).",
        "options": [
          "8 + 3√5",
          "5 + 4√5",
          "8 + 4√5",
          "28 + 4√5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Factorise 2x² + 5x + 3.",
        "options": [
          "(2x + 1)(x + 3)",
          "(2x − 3)(x − 1)",
          "(x + 3)(x + 2)",
          "(2x + 3)(x + 1)"
        ],
        "answer": 3,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "Expand and simplify (x + 2)(x − 3)(x + 1).",
        "options": [
          "x³ − 7x − 6",
          "x³ + 7x − 6",
          "x³ − 7x + 6",
          "x³ − 2x² − 7x − 6"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Simplify fully (x² − 25)/(x² + 2x − 15).",
        "options": [
          "(x − 5)/(x + 3)",
          "(x + 5)/(x + 3)",
          "(x − 5)/(x − 3)",
          "5/3"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Write 2/(x + 1) + 3/(x − 2) as a single fraction.",
        "options": [
          "5/(2x − 1)",
          "(5x + 1)/((x + 1)(x − 2))",
          "(5x − 7)/((x + 1)(x − 2))",
          "(5x − 1)/((x + 1)(x − 2))"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Expand and simplify (3x − 1)(x + 2) − (x + 1)².",
        "options": [
          "2x² + 3x − 3",
          "2x² + 7x − 1",
          "2x² + 5x − 3",
          "4x² + 7x − 1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Factorise fully 3x² − 48.",
        "options": [
          "3(x² − 16)",
          "(3x − 12)(x + 4)",
          "3(x − 4)²",
          "3(x + 4)(x − 4)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "(x + a)(x + 4) ≡ x² + bx − 20, where a and b are constants. What is the value of b?",
        "options": [
          "9",
          "−5",
          "−1",
          "1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A square has sides of length (2x + 3) cm. Which expression gives its area in cm²?",
        "options": [
          "4x² + 12x + 9",
          "4x² + 9",
          "2x² + 12x + 9",
          "4x² + 6x + 9"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Expand and simplify (3 − √2)².",
        "options": [
          "7",
          "7 − 6√2",
          "11 − 6√2",
          "11 − 3√2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Factorise 6x² − x − 2.",
        "options": [
          "(3x + 2)(2x − 1)",
          "(3x − 2)(2x + 1)",
          "(6x − 2)(x + 1)",
          "(6x + 1)(x − 2)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Simplify fully (x² + 3x)/(x² − 9) × (x − 3)/x.",
        "options": [
          "x",
          "(x − 3)/(x + 3)",
          "1",
          "3/x"
        ],
        "answer": 2,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.2 */
  "2.2": {
    "name": "Formulae, Identities, Proof & Functions",
    "green": [
      {
        "q": "Make x the subject of y = x − 4.",
        "options": [
          "x = y − 4",
          "x = y + 4",
          "x = 4 − y",
          "x = 4y"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make w the subject of A = 6w.",
        "options": [
          "w = A/6",
          "w = 6A",
          "w = A − 6",
          "w = 6/A"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Use the formula P = 2l + 2w to work out P when l = 9 and w = 4.",
        "options": [
          "22",
          "13",
          "144",
          "26"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The statement 2(x + 5) = 2x + 10 is true for every value of x. What is this type of statement called?",
        "options": [
          "An equation",
          "A formula",
          "An expression",
          "An identity"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A function machine multiplies the input by 5 and then subtracts 3. The input is 6. What is the output?",
        "options": [
          "27",
          "15",
          "33",
          "8"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A function machine multiplies the input by 3 and then adds 8. The output is 23. What is the input?",
        "options": [
          "5",
          "77",
          "15",
          "61"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Use the formula F = ma to work out F when m = 12 and a = 2.5.",
        "options": [
          "14.5",
          "30",
          "4.8",
          "9.5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make h the subject of A = bh.",
        "options": [
          "h = Ab",
          "h = A/b",
          "h = b/A",
          "h = A − b"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "n is an integer. Which expression is always a multiple of 5?",
        "options": [
          "n + 5",
          "5n + 2",
          "5n + 10",
          "10n + 1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which one of these is an equation that is NOT an identity?",
        "options": [
          "3(x + 1) = 3x + 3",
          "x + x = 2x",
          "3x + 1 = 10",
          "5x − x = 4x"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Use the formula v = u + at to work out v when u = 4, a = 9.8 and t = 2.",
        "options": [
          "23.6",
          "27.6",
          "15.8",
          "19.6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "f(x) = 4x + 1. Work out f(3).",
        "options": [
          "16",
          "7",
          "12",
          "13"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "g(x) = 10 − x². Work out g(−2).",
        "options": [
          "14",
          "6",
          "8",
          "12"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Make x the subject of y = 2x + 6.",
        "options": [
          "x = y/2 − 6",
          "x = (y − 6)/2",
          "x = (y + 6)/2",
          "x = 2(y − 6)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In the formula A = πr², which letter is the subject?",
        "options": [
          "r",
          "π",
          "Both A and r",
          "A"
        ],
        "answer": 3,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Make x the subject of y = (x − 5)/3.",
        "options": [
          "x = 3y + 5",
          "x = 3y − 5",
          "x = (y + 5)/3",
          "x = 3(y − 5)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Make r the subject of V = πr²h, where r > 0.",
        "options": [
          "r = V/(2πh)",
          "r = √(Vπh)",
          "r = √(V/(πh))",
          "r = (V/(πh))²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Make y the subject of 4x + 3y = 12.",
        "options": [
          "y = (12 − 4x)/3",
          "y = (12 + 4x)/3",
          "y = 4 − 4x",
          "y = 3(12 − 4x)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Use v² = u² + 2as to work out v when u = 5, a = 3 and s = 4. (v > 0)",
        "options": [
          "49",
          "29",
          "13",
          "7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Make t the subject of s = ½gt², where t > 0.",
        "options": [
          "t = √(s/(2g))",
          "t = √(2s/g)",
          "t = 2s/g",
          "t = √(2s) − g"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Use C = 5(F − 32)/9 to convert 50 °F into degrees Celsius.",
        "options": [
          "18",
          "122",
          "−4.2",
          "10"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "n is an integer. Which statement about 4n + 6 is always true?",
        "options": [
          "It is a multiple of 4",
          "It is odd",
          "It is a multiple of 6",
          "It is even but not a multiple of 4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "5(x + a) − 2(x + 1) ≡ 3x + 13, where a is a constant. Work out the value of a.",
        "options": [
          "2.2",
          "3",
          "15",
          "2.6"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Make u the subject of v = u + at.",
        "options": [
          "u = v + at",
          "u = (v − t)/a",
          "u = at − v",
          "u = v − at"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which one of these is NOT true for every value of x?",
        "options": [
          "(x + 3)(x − 3) = x² − 9",
          "2(x + 3) = 2x + 6",
          "(x + 3)² = x² + 9",
          "x(x + 3) = x² + 3x"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Use the formula E = ½mv² to work out E when m = 8 and v = 3.",
        "options": [
          "36",
          "12",
          "144",
          "72"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Make x the subject of y = x² + 7.",
        "options": [
          "x = ±√y − 7",
          "x = ±√(y − 7)",
          "x = (y − 7)²",
          "x = ±(y − 7)/2"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "f(x) = 2x − 3 and g(x) = x + 5. Work out fg(1).",
        "options": [
          "4",
          "−6",
          "9",
          "5"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "f(x) = 6x + 1. Find f⁻¹(x).",
        "options": [
          "f⁻¹(x) = 1/(6x + 1)",
          "f⁻¹(x) = (x − 1)/6",
          "f⁻¹(x) = x/6 − 1",
          "f⁻¹(x) = (x + 1)/6"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "f(x) = x² and g(x) = 3x − 1. Find gf(x).",
        "options": [
          "gf(x) = (3x − 1)²",
          "gf(x) = 9x² − 1",
          "gf(x) = 3x³ − x²",
          "gf(x) = 3x² − 1"
        ],
        "answer": 3,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "Make x the subject of 3x + a = bx − 4.",
        "options": [
          "x = (a − 4)/(b − 3)",
          "x = (a + 4)/(3 − b)",
          "x = (a + 4)/(b − 3)",
          "x = (4 − a)/(b + 3)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Make x the subject of y = (x + 4)/(x − 2).",
        "options": [
          "x = (2y − 4)/(y − 1)",
          "x = (2y + 4)/(y + 1)",
          "x = (2y + 4)/(y − 1)",
          "x = (4 − 2y)/(y − 1)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "f(x) = 5x + 2. Solve f⁻¹(x) = 4.",
        "options": [
          "x = 0.4",
          "x = 18",
          "x = 22",
          "x = 1.2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "n is a positive integer. Expanding and simplifying (n + 5)² − (n + 1)² shows that it is always a multiple of which number?",
        "options": [
          "8",
          "16",
          "6",
          "24"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Make a the subject of s = ut + ½at².",
        "options": [
          "a = (2s − ut)/t²",
          "a = 2(s − ut)/t",
          "a = 2(s − ut)/t²",
          "a = (s − ut)/(2t²)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Use s = ut + ½at² to work out a when s = 60, u = 5 and t = 4.",
        "options": [
          "2.5",
          "5",
          "20",
          "10"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "f(x) = 2x + 3 and g(x) = x². Solve gf(x) = 49.",
        "options": [
          "x = 2 only",
          "x = 23",
          "x = 2 or x = −5",
          "x = 2 or x = 5"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "n is an integer. The sum of three consecutive odd numbers, (2n + 1) + (2n + 3) + (2n + 5), simplifies to 6n + 9. Which statement must be true?",
        "options": [
          "The sum is always a multiple of 3",
          "The sum is always a multiple of 6",
          "The sum is always even",
          "The sum is always a multiple of 9"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "f(x) = (2x − 1)/3. Find f⁻¹(x).",
        "options": [
          "f⁻¹(x) = (3x + 1)/2",
          "f⁻¹(x) = (3x − 1)/2",
          "f⁻¹(x) = 3/(2x − 1)",
          "f⁻¹(x) = (2x + 1)/3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "3(x + a) + b(x − 2) ≡ 7x + 4, where a and b are constants. Work out the values of a and b.",
        "options": [
          "a = 4/3, b = 4",
          "a = 4, b = 7",
          "a = −4/3, b = 4",
          "a = 4, b = 4"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.3 */
  "2.3": {
    "name": "Linear Graphs & Coordinates",
    "green": [
      {
        "q": "Which of these points lies in the fourth quadrant?",
        "options": [
          "(−3, 4)",
          "(3, −4)",
          "(−3, −4)",
          "(3, 4)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write down the coordinates of the point that is 2 units to the left of the origin and 6 units down.",
        "options": [
          "(−2, −6)",
          "(−6, −2)",
          "(2, 6)",
          "(−2, 6)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the gradient of the line y = 5 − 2x?",
        "options": [
          "5",
          "2",
          "−2",
          "−5"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Where does the line y = 4x − 9 cross the y-axis?",
        "options": [
          "(−9, 0)",
          "(0, 4)",
          "(2.25, 0)",
          "(0, −9)"
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
        "q": "Work out the midpoint of the line segment joining (2, 8) and (6, 2).",
        "options": [
          "(8, 10)",
          "(4, 5)",
          "(2, −3)",
          "(4, 3)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these lines is parallel to y = 3x + 1?",
        "options": [
          "y = x + 3",
          "y = −3x + 1",
          "y = 3x − 4",
          "y = x/3 + 1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the gradient of the straight line through (1, 2) and (3, 10).",
        "options": [
          "¼",
          "8",
          "3",
          "4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Does the point (2, 7) lie on the line y = 3x + 1?",
        "options": [
          "Yes, because 3 × 2 + 1 = 7",
          "No, because 3 × 7 + 1 ≠ 2",
          "No, because 2 + 1 ≠ 7",
          "No, because 3 × 2 ≠ 7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which equation describes the x-axis?",
        "options": [
          "x = 0",
          "y = 0",
          "y = x",
          "y = 1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "For the line y = 2x − 1, what is the value of y when x = −3?",
        "options": [
          "5",
          "−5",
          "−7",
          "7"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which is the equation of the line with gradient 5 and y-intercept (0, −2)?",
        "options": [
          "y = −2x + 5",
          "y = 5x + 2",
          "y = 2x − 5",
          "y = 5x − 2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the gradient of the line 2y = 8x + 6?",
        "options": [
          "4",
          "8",
          "3",
          "6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the gradient of a line perpendicular to y = 2x + 7?",
        "options": [
          "−2",
          "−½",
          "½",
          "2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A straight line slopes downwards from left to right. What can you say about its gradient?",
        "options": [
          "It is positive",
          "It is zero",
          "It is undefined",
          "It is negative"
        ],
        "answer": 3,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Find the equation of the line with gradient −3 that passes through (2, 5).",
        "options": [
          "y = −3x − 1",
          "y = −3x + 11",
          "y = −3x + 5",
          "y = 5x − 3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find the equation of the straight line through (1, 4) and (3, 10).",
        "options": [
          "y = 3x + 4",
          "y = 6x − 2",
          "y = 3x + 1",
          "y = 3x − 1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Line L has equation 3x + 2y = 12. What is the gradient of L?",
        "options": [
          "3",
          "6",
          "−2/3",
          "−3/2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Where does the line 2x + 5y = 20 cross the x-axis?",
        "options": [
          "(10, 0)",
          "(0, 4)",
          "(4, 0)",
          "(0, 10)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A is the point (−1, 3). The midpoint of AB is (2, 5). Work out the coordinates of B.",
        "options": [
          "(0.5, 4)",
          "(3, 2)",
          "(5, 7)",
          "(1, 8)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The cost, C pounds, of a taxi journey of d miles is given by C = 1.8d + 3.5. What does the 1.8 represent?",
        "options": [
          "The fixed charge",
          "The cost per mile",
          "The total cost of a 1-mile journey",
          "The number of miles travelled per pound"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these lines is parallel to 4x + 2y = 7?",
        "options": [
          "y = 4x + 7",
          "y = 2x − 7",
          "y = −½x + 3",
          "y = −2x + 5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A(−2, 1), B(4, 1) and C(4, 6) are three vertices of a rectangle ABCD. What are the coordinates of D?",
        "options": [
          "(−2, 6)",
          "(6, −2)",
          "(−2, −4)",
          "(4, −4)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Find the equation of the straight line through (0, 3) and (4, 0).",
        "options": [
          "y = −(4/3)x + 3",
          "y = −(3/4)x + 3",
          "y = (3/4)x + 3",
          "y = −(3/4)x + 4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A line is perpendicular to y = −⅓x + 4 and passes through (1, 2). What is its equation?",
        "options": [
          "y = −3x + 5",
          "y = ⅓x + 5/3",
          "y = 3x − 1",
          "y = 3x + 2"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A cyclist's distance–time graph is a straight line from (0 minutes, 0 km) to (40 minutes, 12 km). What is the cyclist's speed?",
        "options": [
          "0.3 km/h",
          "18 km/h",
          "3.3 km/h",
          "30 km/h"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The line y = 2x + k passes through the point (3, 1). Find the value of k.",
        "options": [
          "7",
          "5",
          "−5",
          "−2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these points lies on the line 3x − 2y = 8?",
        "options": [
          "(2, 1)",
          "(0, 4)",
          "(−2, 1)",
          "(4, 2)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The lines y = 2x + 1 and y = 7 − x are drawn on the same axes. At which point do they intersect?",
        "options": [
          "(2, 5)",
          "(5, 2)",
          "(6, 13)",
          "(2, 3)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A line is perpendicular to y = 2x − 1 and crosses the x-axis at (6, 0). Where does it cross the y-axis?",
        "options": [
          "(0, −3)",
          "(0, 3)",
          "(0, 6)",
          "(0, −12)"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "Which statement about the lines 2y = x + 6 and y = 3 − 2x is true?",
        "options": [
          "They are perpendicular",
          "They are parallel",
          "They are neither parallel nor perpendicular",
          "They are the same line"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A is (2, 1) and B is (6, 9). Find the equation of the perpendicular bisector of AB.",
        "options": [
          "y = 2x − 3",
          "y = −2x + 13",
          "y = −½x + 5",
          "y = −½x + 7"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "ABCD is a parallelogram with A(1, 2), B(6, 3) and C(8, 7). Work out the coordinates of D.",
        "options": [
          "(13, 8)",
          "(−1, −2)",
          "(3, 6)",
          "(4.5, 4.5)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A phone plan has a fixed monthly charge plus a cost per minute. 100 minutes cost £17 and 250 minutes cost £26. What is the fixed monthly charge?",
        "options": [
          "£0.06",
          "£17",
          "£8",
          "£11"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Line L passes through (−2, 7) and (4, −5). Where does L cross the x-axis?",
        "options": [
          "(0, 3)",
          "(−1.5, 0)",
          "(1.5, 0)",
          "(3, 0)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The lines y = 6, x = 1 and y = 2x enclose a triangle. Work out its area.",
        "options": [
          "4",
          "8",
          "6",
          "12"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A is (−1, 2), B is (3, 4) and C is (5, k). Angle ABC is 90°. Find the value of k.",
        "options": [
          "5",
          "8",
          "0",
          "3"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Find the equation of the line through (3, −1) that is parallel to 2x − 3y = 6.",
        "options": [
          "2x − 3y = 9",
          "2x − 3y = −9",
          "3x − 2y = 11",
          "2x + 3y = 3"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A conversion graph between pounds (£) and euros (€) is a straight line through the origin and the point (£50, €58). Change €145 into pounds.",
        "options": [
          "£168.20",
          "£125",
          "£145",
          "£116"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The line y = mx + 4 passes through the midpoint of (2, 3) and (6, −1). Find the value of m.",
        "options": [
          "¾",
          "−4/3",
          "−½",
          "−¾"
        ],
        "answer": 3,
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
          "A straight line",
          "A U-shaped parabola",
          "A ∩-shaped parabola",
          "Two separate curves"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Where does the graph of y = x² + 3x − 10 cross the y-axis?",
        "options": [
          "(0, −10)",
          "(−10, 0)",
          "(0, 3)",
          "(0, 10)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What are the roots of y = (x − 2)(x + 5)?",
        "options": [
          "x = −2 and x = 5",
          "x = 2 and x = 5",
          "x = 2 and x = −5",
          "x = −10 only"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which equation has a graph made of two separate branches, with both axes as asymptotes?",
        "options": [
          "y = x³",
          "y = 6x",
          "y = x² + 6",
          "y = 6/x"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "On a distance–time graph, what does a horizontal line segment show?",
        "options": [
          "The object is stationary",
          "The object is moving at constant speed",
          "The object is accelerating",
          "The object is returning to the start"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these is the equation of a cubic graph?",
        "options": [
          "y = 2x − 3",
          "y = x³ − 2x",
          "y = 3/x",
          "y = 3x²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A quadratic graph crosses the x-axis at x = −1 and x = 5. What is the equation of its line of symmetry?",
        "options": [
          "x = 3",
          "x = 4",
          "x = 2",
          "y = 2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which point lies on every graph of the form y = kˣ, where k > 0?",
        "options": [
          "(0, 0)",
          "(1, 0)",
          "(1, 1)",
          "(0, 1)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The graph of y = 4x − x² has one turning point. What type of turning point is it?",
        "options": [
          "A maximum",
          "A minimum",
          "A root",
          "An asymptote"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the equation of the circle with centre the origin and radius 6?",
        "options": [
          "x² + y² = 6",
          "x² + y² = 36",
          "x² + y² = 12",
          "x + y = 36"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "On a velocity–time graph, what does the gradient represent?",
        "options": [
          "Distance travelled",
          "Speed",
          "Acceleration",
          "Time taken"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the greatest value of sin x?",
        "options": [
          "90",
          "360",
          "180",
          "1"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "For the graph of y = 1/x, which value of x is not allowed?",
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
        "q": "y is directly proportional to x. Which describes the graph of y against x?",
        "options": [
          "A horizontal line",
          "A straight line through the origin",
          "A straight line with a positive y-intercept",
          "A curve through the origin"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The graph of y = f(x) is translated 3 units up. What is the equation of the new graph?",
        "options": [
          "y = f(x + 3)",
          "y = f(x − 3)",
          "y = f(x) + 3",
          "y = 3f(x)"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "For y = x² − 6x + 5, work out the value of y when x = −1.",
        "options": [
          "10",
          "0",
          "12",
          "−2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What are the coordinates of the turning point of y = x² − 4x − 12?",
        "options": [
          "(2, −16)",
          "(−2, −16)",
          "(2, −12)",
          "(4, −12)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What are the roots of y = x² − 9x + 20?",
        "options": [
          "x = −4 and x = −5",
          "x = 4 and x = 5",
          "x = 2 and x = 10",
          "x = −2 and x = −10"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A car accelerates uniformly from 5 m/s to 25 m/s in 8 seconds. What is its acceleration?",
        "options": [
          "3.125 m/s²",
          "0.4 m/s²",
          "2.5 m/s²",
          "20 m/s²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "By completing the square, find the turning point of y = x² + 10x + 7.",
        "options": [
          "(5, −18)",
          "(−5, 7)",
          "(−5, 32)",
          "(−5, −18)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The graph of y = x² − 3x is drawn. Which line should be drawn on the same axes to solve x² − 3x = 4?",
        "options": [
          "y = 4",
          "x = 4",
          "y = 4x",
          "y = −4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many solutions does cos x = 0.3 have for 0° ≤ x ≤ 360°?",
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
        "q": "A walker travels 6 km in 1.5 hours at a constant speed. What is the gradient of her distance–time graph?",
        "options": [
          "9 km/h",
          "0.25 km/h",
          "4 km/h",
          "7.5 km/h"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the radius of the circle x² + y² = 45?",
        "options": [
          "45",
          "22.5",
          "9√5",
          "3√5"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The graph of y = x² is transformed to the graph of y = (x − 4)². Describe the transformation.",
        "options": [
          "Translation 4 units right",
          "Translation 4 units left",
          "Translation 4 units up",
          "Translation 4 units down"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "y is inversely proportional to x, for x > 0. Which describes the graph of y against x?",
        "options": [
          "A straight line through the origin",
          "A curve where y decreases as x increases, never touching the axes",
          "A U-shaped parabola",
          "A horizontal straight line"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The size of a population is P = 200 × 1.5ᵗ after t years. Which describes the graph of P against t?",
        "options": [
          "A straight line with gradient 1.5",
          "Exponential decay starting at (0, 200)",
          "Exponential growth starting at (0, 200)",
          "Exponential growth starting at (0, 1.5)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which describes the graph of y = −x³?",
        "options": [
          "An S-shape from top-left to bottom-right, through the origin",
          "An S-shape from bottom-left to top-right, through the origin",
          "A U-shape with minimum at the origin",
          "A ∩-shape with maximum at the origin"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What are the roots of y = x³ − 9x?",
        "options": [
          "0 and 9",
          "3 and −3 only",
          "0, 3 and 9",
          "−3, 0 and 3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The graph of y = f(x) is reflected in the x-axis. What is the equation of the new graph?",
        "options": [
          "y = f(−x)",
          "y = −f(x)",
          "y = f(x) − 1",
          "y = 1/f(x)"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A car accelerates uniformly from rest to 12 m/s in 4 s, travels at 12 m/s for 10 s, then decelerates uniformly to rest in 6 s. Use the velocity–time graph to work out the total distance travelled.",
        "options": [
          "240 m",
          "144 m",
          "20 m",
          "180 m"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Find an equation of the tangent to the circle x² + y² = 10 at the point (1, 3).",
        "options": [
          "y = 3x",
          "3x + y = 6",
          "x − 3y = −8",
          "x + 3y = 10"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "What are the coordinates of the turning point of y = 2x² − 12x + 23?",
        "options": [
          "(3, 14)",
          "(−3, 5)",
          "(3, 5)",
          "(6, 23)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A ball is thrown upwards. Its height, h metres, after t seconds is h = 30t − 5t². Work out the greatest height of the ball.",
        "options": [
          "45 m",
          "90 m",
          "6 m",
          "3 m"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve sin x = −0.5 for 0° ≤ x ≤ 360°.",
        "options": [
          "−30° and 210°",
          "210° and 330°",
          "150° and 210°",
          "30° and 150°"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "The graph of y = f(x) has a turning point at (2, −3). What are the coordinates of the turning point of y = f(x + 4) − 1?",
        "options": [
          "(6, −4)",
          "(−2, −4)",
          "(−2, −2)",
          "(6, −2)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Water is poured at a constant rate into a container made of a wide cylinder with a narrow cylinder fixed on top. Which describes the graph of depth of water against time?",
        "options": [
          "Two straight segments, the second steeper than the first",
          "Two straight segments, the second less steep than the first",
          "A single curve that gets steeper",
          "One straight line"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Use 4 trapezia of equal width to estimate the area under y = x² + 1 between x = 0 and x = 4.",
        "options": [
          "25⅓",
          "52",
          "26",
          "18"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The point (4, 7) lies on the graph of y = f(x). Which point must lie on the graph of y = −f(x − 2)?",
        "options": [
          "(2, −7)",
          "(6, 7)",
          "(−6, −7)",
          "(6, −7)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A cyclist leaves home at 09:00 and rides 12 km in 45 minutes. She rests for 15 minutes, then rides straight home at 16 km/h. At what time does she get home?",
        "options": [
          "10:30",
          "11:00",
          "10:15",
          "10:45"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.5 */
  "2.5": {
    "name": "Equations & Inequalities",
    "green": [
      {
        "q": "Solve 5x − 8 = 27.",
        "options": [
          "x = 7",
          "x = 3.8",
          "x = 35",
          "x = 4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve 4(x + 3) = 32.",
        "options": [
          "x = 8",
          "x = 5",
          "x = 7.25",
          "x = 11"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Solve x/4 + 3 = 9.",
        "options": [
          "x = 48",
          "x = 1.5",
          "x = 24",
          "x = 6"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve 9x + 2 = 4x + 22.",
        "options": [
          "x = 4.8",
          "x = 20",
          "x = 20/13",
          "x = 4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which number line shows the inequality x ≥ −2?",
        "options": [
          "A filled (closed) circle at −2 with an arrow pointing right",
          "An open circle at −2 with an arrow pointing right",
          "A filled (closed) circle at −2 with an arrow pointing left",
          "An open circle at −2 with an arrow pointing left"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve 3x − 5 < 13.",
        "options": [
          "x > 6",
          "x < 6",
          "x < 8/3",
          "x ≤ 6"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Solve x² − 7x + 12 = 0.",
        "options": [
          "x = −3 or x = −4",
          "x = 2 or x = 6",
          "x = 3 or x = 4",
          "x = 1 or x = 12"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve x² − 49 = 0.",
        "options": [
          "x = 7 only",
          "x = 24.5 or x = −24.5",
          "x = 49 or x = −49",
          "x = 7 or x = −7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "n is an integer and −2 < n ≤ 3. Which list gives all the possible values of n?",
        "options": [
          "−1, 0, 1, 2, 3",
          "−2, −1, 0, 1, 2, 3",
          "−1, 0, 1, 2",
          "−2, −1, 0, 1, 2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations x + y = 10 and x − y = 4.",
        "options": [
          "x = 3, y = 7",
          "x = 7, y = 3",
          "x = 6, y = 4",
          "x = 14, y = −4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Priya thinks of a number. She multiplies it by 3 and then adds 7. Her answer is 34. What number did she think of?",
        "options": [
          "13⅔",
          "109",
          "9",
          "27"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "x = 3 is the solution of which equation?",
        "options": [
          "4x + 5 = 7",
          "3x − 4 = 7",
          "2x + 3 = 7",
          "4x − 5 = 7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is the quadratic formula for solving ax² + bx + c = 0?",
        "options": [
          "x = (−b ± √(b² − 4ac)) / 2a",
          "x = (b ± √(b² − 4ac)) / 2a",
          "x = (−b ± √(b² + 4ac)) / 2a",
          "x = (−b ± √(b² − 4ac)) / a"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "What does the set notation {x : x > 3} mean?",
        "options": [
          "The set containing only the numbers x and 3",
          "The set of all values of x such that x is greater than 3",
          "The set of all values of x such that x is less than 3",
          "The set of all values of x such that x is greater than or equal to 3"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Using the iteration formula xₙ₊₁ = √(xₙ + 5) with x₁ = 2, work out x₂ correct to 3 decimal places.",
        "options": [
          "2.236",
          "3.500",
          "2.646",
          "7.000"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "Solve (3x + 1)/4 = 7.",
        "options": [
          "x = 2",
          "x = 9.67",
          "x = 1.75",
          "x = 9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Solve 4(2x − 1) = 3(x + 7).",
        "options": [
          "x = 5",
          "x = 3.4",
          "x = 4.4",
          "x = 25/11"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve 7 − 2x ≥ 15.",
        "options": [
          "x ≥ −4",
          "x ≤ −4",
          "x ≤ 4",
          "x ≥ 4"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The angles of a triangle are x°, (2x + 10)° and (3x − 40)°. Work out the value of x.",
        "options": [
          "x = 25",
          "x = 36.67",
          "x = 35",
          "x = 30"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve x² + 2x − 15 = 0.",
        "options": [
          "x = 5 or x = −3",
          "x = −15 or x = 1",
          "x = 5 or x = 3",
          "x = −5 or x = 3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations 3x + 2y = 16 and x + 2y = 8.",
        "options": [
          "x = 4, y = 2",
          "x = 2, y = 4",
          "x = 6, y = 1",
          "x = 4, y = −2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the smallest integer n that satisfies 4n − 3 > 17?",
        "options": [
          "5",
          "6",
          "4",
          "21"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The graph of y = x² − 3x − 1 is drawn accurately. Which gives the approximate solutions of x² − 3x − 1 = 0 read from the graph?",
        "options": [
          "x ≈ 0.3 and x ≈ −3.3",
          "x = −1 only",
          "x ≈ −0.3 and x ≈ 3.3",
          "x ≈ 1.5 only"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve x² + 4x − 3 = 0. Give your answers correct to 2 decimal places.",
        "options": [
          "x = −0.65 or x = 4.65",
          "x = −1 or x = −3",
          "x = −1.35 or x = −6.65",
          "x = 0.65 or x = −4.65"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Write x² − 8x + 5 in the form (x + a)² + b.",
        "options": [
          "(x − 4)² − 11",
          "(x − 4)² + 21",
          "(x − 8)² − 59",
          "(x + 4)² − 11"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Solve 2x − 1 ≤ 9. Give your answer using set notation.",
        "options": [
          "{x : x < 5}",
          "{x : x ≤ 5}",
          "{x : x ≥ 5}",
          "{x : x ≤ 4}"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Ali is 4 years older than Bea. The sum of their ages is 30. How old is Bea?",
        "options": [
          "17",
          "15",
          "13",
          "11"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve x/3 − 2 = x/5.",
        "options": [
          "x = −15",
          "x = 7.5",
          "x = 3.75",
          "x = 15"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which value of x satisfies both 2x + 1 > 7 and x − 4 ≤ 2?",
        "options": [
          "6",
          "3",
          "7",
          "2.5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "f(x) = x³ + x − 5. Which pair of values shows that f(x) = 0 has a solution between x = 1 and x = 2?",
        "options": [
          "f(1) = 3 and f(2) = −5",
          "f(1) = −3 and f(2) = 5",
          "f(1) = −5 and f(2) = 3",
          "f(1) = 1 and f(2) = 5"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A rectangle has length (2x + 3) cm and width (x − 1) cm. Its perimeter is 34 cm. Work out the area of the rectangle.",
        "options": [
          "26 cm²",
          "65 cm²",
          "52 cm²",
          "36 cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations 4x + 3y = 6 and 6x − 5y = 47.",
        "options": [
          "x = 4.5, y = 4",
          "x = −4, y = 4.5",
          "x = 3, y = −2",
          "x = 4.5, y = −4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "At a theatre, 2 adult tickets and 3 child tickets cost £36. 1 adult ticket and 4 child tickets cost £33. Work out the cost of one adult ticket.",
        "options": [
          "£9",
          "£6",
          "£7.50",
          "£12"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Solve the simultaneous equations x² + y² = 10 and y = x + 2.",
        "options": [
          "(1, 3) and (−3, 1)",
          "(1, 3) and (−3, −1)",
          "(−1, 1) and (3, 5)",
          "(1, 3) only"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Solve x² − 2x − 8 > 0.",
        "options": [
          "−2 < x < 4",
          "x < −4 or x > 2",
          "x < −2 or x > 4",
          "−2 > x > 4"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "n is an integer and 3 ≤ 2n + 5 < 15. Work out the sum of all the possible values of n.",
        "options": [
          "10",
          "14",
          "15",
          "9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Leo has three times as many sweets as Kate. Leo gives Kate 8 sweets and now they have the same number. How many sweets do they have altogether?",
        "options": [
          "32",
          "8",
          "24",
          "16"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The equation x² + 6x + k = 0 has exactly one (repeated) solution. Work out the value of k.",
        "options": [
          "3",
          "9",
          "36",
          "−9"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A rectangle has width x cm and length (x + 5) cm. Its area is 84 cm². Work out the value of x.",
        "options": [
          "x = −12",
          "x = 7 or x = −12",
          "x = 7",
          "x = 12"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A taxi charges £3 plus £1.80 per mile. Sam has £20. What is the greatest whole number of miles Sam can travel?",
        "options": [
          "10",
          "11",
          "9.44",
          "9"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 2.6 */
  "2.6": {
    "name": "Sequences",
    "green": [
      {
        "q": "Write down the next term of the sequence 4, 11, 18, 25, …",
        "options": [
          "32",
          "31",
          "36",
          "29"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The nth term of a sequence is 3n + 2. Work out the 10th term.",
        "options": [
          "36",
          "32",
          "35",
          "13"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these numbers is a triangular number?",
        "options": [
          "16",
          "12",
          "15",
          "18"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the 5th cube number?",
        "options": [
          "15",
          "25",
          "64",
          "125"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Here is a Fibonacci-type sequence: 3, 5, 8, 13, … Write down the next term.",
        "options": [
          "21",
          "18",
          "26",
          "20"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write down the next term of the geometric sequence 3, 6, 12, 24, …",
        "options": [
          "36",
          "48",
          "30",
          "27"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find the nth term of the sequence 6, 10, 14, 18, …",
        "options": [
          "n + 4",
          "4n + 6",
          "4n + 2",
          "6n + 4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The nth term of a sequence is n² − 1. Write down the first three terms.",
        "options": [
          "1, 4, 9",
          "0, 1, 2",
          "1, 3, 5",
          "0, 3, 8"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The first term of a sequence is 20. The term-to-term rule is \"subtract 6\". What is the 4th term?",
        "options": [
          "2",
          "8",
          "−4",
          "14"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these sequences is a quadratic sequence?",
        "options": [
          "2, 5, 8, 11, …",
          "2, 5, 10, 17, …",
          "2, 4, 8, 16, …",
          "2, 3, 5, 8, …"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the common difference of the sequence 30, 26, 22, 18, …?",
        "options": [
          "4",
          "26",
          "−4",
          "−3"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which statement describes the sequence 1, 4, 9, 16, 25, …?",
        "options": [
          "Add 3 each time",
          "The odd numbers, with nth term 2n − 1",
          "The nth term is 3n − 2",
          "The square numbers, with nth term n²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A geometric sequence begins 2, 2√3, 6, … Write down the next term.",
        "options": [
          "6√3",
          "18",
          "12",
          "6 + 2√3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The second difference of a quadratic sequence is 6. What is the coefficient of n² in its nth term?",
        "options": [
          "6",
          "3",
          "12",
          "2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "The Fibonacci sequence begins 1, 1, 2, 3, 5, … What is the 8th term?",
        "options": [
          "13",
          "34",
          "21",
          "16"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Find the nth term of the sequence 9, 7, 5, 3, …",
        "options": [
          "2n + 7",
          "9 − 2n",
          "7 − 2n",
          "11 − 2n"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Is 100 a term of the sequence with nth term 3n + 4?",
        "options": [
          "Yes, it is the 32nd term",
          "No, because 100 ÷ 3 is not a whole number",
          "Yes, it is the 33rd term",
          "No, because 96 is not a multiple of 4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Pattern 1 uses 5 tiles, pattern 2 uses 9 tiles and pattern 3 uses 13 tiles. The patterns continue in the same way. How many tiles are in pattern 20?",
        "options": [
          "85",
          "81",
          "80",
          "100"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The first term of a sequence is 3. The term-to-term rule is \"multiply by 2 then add 1\". What is the 4th term?",
        "options": [
          "15",
          "63",
          "31",
          "24"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A geometric sequence begins 80, 40, 20, … What is the 6th term?",
        "options": [
          "5",
          "−120",
          "1.25",
          "2.5"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Here is a quadratic sequence: 4, 7, 12, 19, … Work out the next two terms.",
        "options": [
          "28 and 39",
          "26 and 33",
          "28 and 37",
          "27 and 37"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A Fibonacci-type sequence has first term a and second term b. Which expression gives the 5th term?",
        "options": [
          "3a + 2b",
          "2a + 3b",
          "a + 3b",
          "3a + 5b"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The nth term of a sequence is 5n − 3. Which term is equal to 87?",
        "options": [
          "The 17th term",
          "The 432nd term",
          "The 18th term",
          "The 16.8th term"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Find the nth term of the sequence 2, 8, 18, 32, …",
        "options": [
          "6n − 4",
          "n² + 1",
          "4n² − 2",
          "2n²"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Find the nth term of the sequence 4, 9, 16, 25, …",
        "options": [
          "n² + 2n + 1",
          "n² + 3",
          "5n − 1",
          "2n² + 2"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "What is the common ratio of the geometric sequence 162, 54, 18, …?",
        "options": [
          "3",
          "1/3",
          "−108",
          "1/9"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The nth term of a sequence is n² + 3n. Work out the 10th term.",
        "options": [
          "103",
          "60",
          "130",
          "400"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the 10th triangular number.",
        "options": [
          "100",
          "45",
          "66",
          "55"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A geometric sequence has first term 5 and common ratio √2. Work out the 5th term.",
        "options": [
          "20",
          "10",
          "20√2",
          "40"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A sequence has nth term an² + bn. The first two terms are 5 and 14. Work out the value of a.",
        "options": [
          "a = 3",
          "a = 2",
          "a = 4.5",
          "a = 1"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "Sequence A has nth term 3n + 7. Sequence B begins 59, 55, 51, … The terms of A and B in the same position are equal for one value of n. What is the value of these equal terms?",
        "options": [
          "8",
          "35",
          "31",
          "27"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The 4th term of a linear sequence is 23 and the 9th term is 48. Find the nth term.",
        "options": [
          "5n − 2",
          "4n + 7",
          "5n + 8",
          "5n + 3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "1 table seats 4 people, 2 tables in a row seat 6 people and 3 tables in a row seat 8 people. What is the least number of tables in a row needed to seat 45 people?",
        "options": [
          "22",
          "21",
          "23",
          "11"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Find the nth term of the quadratic sequence 3, 8, 15, 24, …",
        "options": [
          "n² + 2",
          "n² + 2n",
          "5n − 2",
          "2n² + n"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Find the nth term of the quadratic sequence 7, 10, 11, 10, …",
        "options": [
          "n² + 6n + 2",
          "−2n² + 9n",
          "−n² + 6n + 2",
          "−n² + 4n + 4"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "In a Fibonacci-type sequence the 4th term is 17 and the 6th term is 44. What are the first two terms?",
        "options": [
          "7 and 3",
          "1 and 8",
          "5 and 6",
          "3 and 7"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A geometric sequence has a positive common ratio. The 2nd term is 6 and the 4th term is 18. Work out the 1st term.",
        "options": [
          "2√3",
          "3",
          "2",
          "6√3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A geometric sequence begins 2, 6, 18, 54, … Which is the first term greater than 10 000?",
        "options": [
          "The 8th term",
          "The 9th term",
          "The 10th term",
          "The 7th term"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The nth term of a sequence is 7n − 40. What is the first positive term of the sequence?",
        "options": [
          "−5",
          "9",
          "2",
          "40"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The nth term of a sequence is n² − 4n. Which term is equal to 45?",
        "options": [
          "The 5th term",
          "The −5th term",
          "Both the 9th and the −5th terms",
          "The 9th term"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.1 */
  "3.1": {
    "name": "Ratio & Proportion",
    "green": [
      {
        "q": "Write the ratio 28 : 42 in its simplest form.",
        "options": [
          "2 : 3",
          "4 : 6",
          "14 : 21",
          "3 : 2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write the ratio 36 : 48 : 60 in its simplest form.",
        "options": [
          "6 : 8 : 10",
          "3 : 4 : 5",
          "9 : 12 : 15",
          "12 : 16 : 20"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 30 cm : 1.5 m as a ratio in its simplest form.",
        "options": [
          "20 : 1",
          "1 : 50",
          "1 : 5",
          "2 : 1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Share £72 in the ratio 5 : 3. How much is the larger share?",
        "options": [
          "£27",
          "£36",
          "£120",
          "£45"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Write 18 as a fraction of 45. Give your answer in its simplest form.",
        "options": [
          "2/5",
          "5/2",
          "3/5",
          "18/63"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A map has a scale of 1 : 25 000. What real distance does 1 cm on the map represent?",
        "options": [
          "25 m",
          "250 m",
          "2.5 km",
          "25 km"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a pet shelter the ratio of cats to dogs is 4 : 7. What fraction of these animals are dogs?",
        "options": [
          "7/4",
          "4/7",
          "7/11",
          "4/11"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "4 notebooks cost £3.60. At the same price, how much do 7 notebooks cost?",
        "options": [
          "£25.20",
          "£6.60",
          "£5.60",
          "£6.30"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Write the ratio 2 : 5 in the form 1 : n.",
        "options": [
          "1 : 2.5",
          "1 : 3",
          "1 : 0.4",
          "2.5 : 1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A photo 6 cm wide is enlarged so that it is 15 cm wide. What is the scale factor of the enlargement?",
        "options": [
          "9",
          "2.5",
          "0.4",
          "3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "5 workers take 12 days to paint a school. At the same rate, how long would 10 workers take?",
        "options": [
          "24 days",
          "7 days",
          "6 days",
          "10 days"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The ratio x : y is 2 : 5. Which equation connects y and x?",
        "options": [
          "y = 2x/5",
          "y = x + 3",
          "y = 10x",
          "y = 5x/2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which equation shows that y is inversely proportional to the square of x?",
        "options": [
          "y = k/x²",
          "y = kx²",
          "y = k/x",
          "y = k − x²"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "y is directly proportional to x². When x is multiplied by 5, y is multiplied by",
        "options": [
          "5",
          "25",
          "10",
          "√5"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A recipe for 6 people uses 450 g of rice. How much rice is needed for 4 people?",
        "options": [
          "225 g",
          "600 g",
          "300 g",
          "675 g"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Share £96 in the ratio 3 : 5. How much is the smaller share?",
        "options": [
          "£60",
          "£32",
          "£57.60",
          "£36"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Green and yellow beads are in the ratio 2 : 9. There are 36 yellow beads. How many green beads are there?",
        "options": [
          "8",
          "162",
          "4",
          "29"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Rice is sold in a 400 g bag for £2.60 or a 650 g bag for £4.03. Which is better value?",
        "options": [
          "400 g bag",
          "650 g bag",
          "They are the same value",
          "You cannot tell without the price per bag"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A map has a scale of 1 : 40 000. Two farms are 6.5 cm apart on the map. How far apart are they in real life?",
        "options": [
          "26 km",
          "260 m",
          "2.6 km",
          "0.26 km"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A : B = 3 : 5 and B : C = 2 : 7. Find A : C in its simplest form.",
        "options": [
          "3 : 7",
          "3 : 35",
          "15 : 14",
          "6 : 35"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "y is directly proportional to x. y = 21 when x = 6. Find y when x = 10.",
        "options": [
          "35",
          "25",
          "12.6",
          "70"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "8 identical pumps empty a pool in 15 hours. How long would 6 of these pumps take?",
        "options": [
          "11.25 hours",
          "20 hours",
          "13 hours",
          "18 hours"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Red and white paint are mixed in the ratio 3 : 5 to make 32 litres of pink paint. How much more white paint than red paint is used?",
        "options": [
          "2 litres",
          "20 litres",
          "8 litres",
          "12 litres"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The exchange rate is £1 = $1.27. Convert £350 into dollars.",
        "options": [
          "$275.59",
          "$351.27",
          "$4445.00",
          "$444.50"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A model railway uses a scale of 1 : 72. A real carriage is 21.6 m long. How long is the model carriage?",
        "options": [
          "30 cm",
          "3 cm",
          "300 cm",
          "1555.2 m"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Write 1.2 kg as a fraction of 800 g. Give your answer in its simplest form.",
        "options": [
          "2/3",
          "3/2",
          "3/20",
          "3/5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which table of values shows y inversely proportional to x?",
        "options": [
          "x = 1, 2, 4 and y = 3, 6, 12",
          "x = 1, 2, 4 and y = 12, 10, 8",
          "x = 1, 2, 4 and y = 12, 6, 3",
          "x = 1, 2, 4 and y = 12, 3, 0.75"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "y is directly proportional to x². y = 18 when x = 3. Find y when x = 5.",
        "options": [
          "30",
          "25",
          "150",
          "50"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Two mathematically similar cones have heights 4 cm and 10 cm. What is the ratio of their surface areas?",
        "options": [
          "4 : 25",
          "2 : 5",
          "8 : 125",
          "4 : 10"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which graph shows that y is directly proportional to x?",
        "options": [
          "A straight line crossing the y-axis at 3",
          "A straight line through the origin",
          "A curve that gets closer to both axes",
          "A horizontal straight line"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "The ratio of Kim's age to Lee's age is 4 : 7. In 9 years' time the ratio will be 5 : 8. How old is Kim now?",
        "options": [
          "45",
          "9",
          "36",
          "63"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "y is inversely proportional to x². y = 5 when x = 4. Find y when x = 10.",
        "options": [
          "2",
          "8",
          "31.25",
          "0.8"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A jar holds red and blue counters in the ratio 5 : 3. After 12 blue counters are added, the ratio is 1 : 1. How many red counters are in the jar?",
        "options": [
          "30",
          "18",
          "48",
          "60"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two mathematically similar jugs have capacities 250 ml and 2000 ml. The smaller jug is 9 cm tall. How tall is the larger jug?",
        "options": [
          "72 cm",
          "18 cm",
          "25.5 cm",
          "36 cm"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Money is shared between A, B and C in the ratio 3 : 4 : 8. C gets £150 more than B. How much money was shared?",
        "options": [
          "£450",
          "£2250",
          "£562.50",
          "£600"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "y is directly proportional to x². x is increased by 10%. What is the percentage increase in y?",
        "options": [
          "10%",
          "20%",
          "1%",
          "21%"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A scale drawing of a rectangular garden uses a scale of 1 : 500. On the drawing the garden is 8 cm by 5 cm. What is the real area of the garden?",
        "options": [
          "1000 m²",
          "2 m²",
          "200 m²",
          "10 000 m²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Pastry uses flour, butter and sugar in the ratio 6 : 3 : 1 by mass. Dev has 900 g flour, 400 g butter and 200 g sugar. What is the greatest mass of pastry he can make, to the nearest gram?",
        "options": [
          "1500 g",
          "1333 g",
          "2000 g",
          "1200 g"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "y is inversely proportional to √x. y = 6 when x = 4. Find x when y = 2.",
        "options": [
          "6",
          "9",
          "36",
          "144"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "y is directly proportional to x³. y = 2 when x = 1. Find x when y = 54.",
        "options": [
          "27",
          "9",
          "18",
          "3"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.2 */
  "3.2": {
    "name": "Percentages, Growth & Decay",
    "green": [
      {
        "q": "Write 62% as a decimal.",
        "options": [
          "0.62",
          "6.2",
          "0.062",
          "62.0"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Work out 35% of £60.",
        "options": [
          "£25",
          "£21",
          "£39",
          "£2.10"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the multiplier for an increase of 6%?",
        "options": [
          "1.6",
          "0.06",
          "1.06",
          "0.94"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the multiplier for a decrease of 25%?",
        "options": [
          "0.25",
          "1.25",
          "1.025",
          "0.75"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Write 27 as a percentage of 90.",
        "options": [
          "30%",
          "3.33%",
          "27%",
          "63%"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A loan balance Bₙ (in £) is charged 2% interest each month, and then £150 is repaid. Which iterative formula models the balance?",
        "options": [
          "Bₙ₊₁ = 1.2Bₙ − 150",
          "Bₙ₊₁ = 1.02Bₙ − 150",
          "Bₙ₊₁ = 0.98Bₙ − 150",
          "Bₙ₊₁ = 1.02Bₙ + 150"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Increase £60 by 15%.",
        "options": [
          "£75",
          "£51",
          "£69",
          "£60.15"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "£800 is invested at 2.5% per year simple interest. How much interest is earned in 3 years?",
        "options": [
          "£20",
          "£61.51",
          "£860",
          "£60"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A jumper costs £45. It is reduced by 20% in a sale. What is the sale price?",
        "options": [
          "£36",
          "£25",
          "£9",
          "£44.20"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is 175% of 40?",
        "options": [
          "30",
          "70",
          "7",
          "115"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A fish population Pₙ falls by 10% each year and then 200 fish are added. Which iterative formula models the population?",
        "options": [
          "Pₙ₊₁ = 1.1Pₙ + 200",
          "Pₙ₊₁ = 0.1Pₙ + 200",
          "Pₙ₊₁ = 0.9Pₙ + 200",
          "Pₙ₊₁ = 0.9Pₙ − 200"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which calculation gives the percentage change from an original value to a new value?",
        "options": [
          "(change ÷ new value) × 100",
          "(new value ÷ original) × 100",
          "(original ÷ change) × 100",
          "(change ÷ original) × 100"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which calculation gives the value of £2000 after 5 years at 3% per year compound interest?",
        "options": [
          "2000 × 1.03⁵",
          "2000 × 1.3⁵",
          "2000 × 1.03 × 5",
          "2000 × 0.03⁵"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A price rises from £80 to £92. What is the percentage increase?",
        "options": [
          "12%",
          "15%",
          "13.0%",
          "115%"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A phone worth £600 loses 30% of its value in one year. What is it worth after the year?",
        "options": [
          "£180",
          "£570",
          "£420",
          "£400"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "£4500 is invested at 2% per year compound interest. What is it worth after 3 years?",
        "options": [
          "£4770.00",
          "£4590.00",
          "£275.44",
          "£4775.44"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "After a 25% increase a price is £85. What was the original price?",
        "options": [
          "£68",
          "£63.75",
          "£60",
          "£106.25"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "After a 40% reduction a coat costs £57. What was the original price?",
        "options": [
          "£79.80",
          "£95",
          "£34.20",
          "£142.50"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A population of 12 000 decreases by 4% each year. What is the population after 2 years, to the nearest whole number?",
        "options": [
          "11 040",
          "11 520",
          "11 059",
          "10 140"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Ravi scored 54 out of 72 in Maths and 48 out of 60 in English. In which subject did he do better?",
        "options": [
          "Maths (75% compared with 80%)",
          "Maths, because 54 is more than 48",
          "Both are the same",
          "English (80% compared with 75%)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Shop A sells a bike for £120 with 1/4 off. Shop B sells the same bike for £110 with 15% off. Which is cheaper, and by how much?",
        "options": [
          "Shop A, by £3.50",
          "Shop B, by £3.50",
          "Shop A, by £10",
          "They cost the same"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "uₙ₊₁ = 1.2uₙ − k and u₀ = 50. Given that u₁ = 45, find k.",
        "options": [
          "5",
          "15",
          "9",
          "21"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A plant's height falls from 64 cm to 52 cm. What is the percentage decrease?",
        "options": [
          "23.1%",
          "12%",
          "18.75%",
          "81.25%"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A wage rises by 3% one year and by 6% the next year. What single multiplier gives the overall change?",
        "options": [
          "1.09",
          "1.18",
          "1.9",
          "1.0918"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "£2500 is invested at 4% per year compound interest. How much interest is earned in 2 years?",
        "options": [
          "£204",
          "£200",
          "£2704",
          "£104"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A boat bought for £24 000 depreciates by 8% each year. Which formula gives its value V after n years?",
        "options": [
          "V = 24 000 × 0.08ⁿ",
          "V = 24 000 × 0.92ⁿ",
          "V = 24 000 × 1.08ⁿ",
          "V = 24 000 − 0.08n"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 4.2 m as a percentage of 1.5 m.",
        "options": [
          "35.7%",
          "28%",
          "280%",
          "180%"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A price of £138 includes VAT at 20%. What is the price before VAT?",
        "options": [
          "£110.40",
          "£118",
          "£165.60",
          "£115"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "uₙ₊₁ = 1.1uₙ − 50 and u₀ = 400. Find u₂.",
        "options": [
          "379",
          "390",
          "434",
          "385"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Pₙ₊₁ = 0.8Pₙ + 60 and P₀ = 300. Find P₁.",
        "options": [
          "240",
          "300",
          "360",
          "288"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A price is increased by 25% and then the new price is decreased by 20%. What is the overall change?",
        "options": [
          "A 5% increase",
          "A 5% decrease",
          "No overall change",
          "A 1% decrease"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A population is modelled by Pₙ₊₁ = 1.05Pₙ − 100, with P₀ = 3000. After how many years does the population first exceed 3300?",
        "options": [
          "5 years",
          "7 years",
          "3 years",
          "6 years"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "£6000 is invested at 2.5% per year compound interest. After how many whole years is it first worth more than £7000?",
        "options": [
          "7 years",
          "6 years",
          "5 years",
          "8 years"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "An investment grows by 8% per year compound interest. After 2 years it is worth £5832. How much was invested?",
        "options": [
          "£4898.88",
          "£5000",
          "£5400",
          "£4665.60"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "An investment grows from £5000 to £5788.13 in 3 years at a constant compound rate. What is the annual rate of interest?",
        "options": [
          "5.25%",
          "15.8%",
          "5%",
          "1.05%"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Option A: £10 000 at 3% per year simple interest for 6 years. Option B: £10 000 at 2.8% per year compound interest for 6 years. Which gives more money at the end?",
        "options": [
          "Option A, by about £2",
          "Option A, by about £200",
          "They give exactly the same",
          "Option B, by about £2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a sale, prices are cut by 20%. A further 15% is then taken off the sale price. What is the total percentage reduction?",
        "options": [
          "32%",
          "35%",
          "3%",
          "68%"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A town of 40 000 people grows by 1.5% per year. What is the population after 8 years, to the nearest whole number?",
        "options": [
          "44 800",
          "45 060",
          "45 000",
          "40 480"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "uₙ₊₁ = 0.6uₙ + 48. The sequence settles to a long-term value. What is it?",
        "options": [
          "80",
          "48",
          "120",
          "30"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A trader buys 50 items at £8 each. She sells 35 of them at £12 each and the rest at £5 each. What is her percentage profit?",
        "options": [
          "19.2%",
          "95%",
          "50%",
          "23.75%"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 3.3 */
  "3.3": {
    "name": "Compound Measures & Rates of Change",
    "green": [
      {
        "q": "Convert 6.5 km into metres.",
        "options": [
          "6500 m",
          "650 m",
          "65 000 m",
          "0.0065 m"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many seconds are there in 12 minutes?",
        "options": [
          "120",
          "720",
          "1200",
          "72"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Write 3.75 hours in hours and minutes.",
        "options": [
          "3 hours 75 minutes",
          "3 hours 7.5 minutes",
          "3 hours 45 minutes",
          "3 hours 15 minutes"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A train travels 240 km in 2 hours. Work out its average speed.",
        "options": [
          "480 km/h",
          "242 km/h",
          "60 km/h",
          "120 km/h"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many cm² are there in 1 m²?",
        "options": [
          "10 000",
          "100",
          "1000",
          "1 000 000"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many cm³ are there in 1 litre?",
        "options": [
          "100",
          "1000",
          "10",
          "1 000 000"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which formula gives density?",
        "options": [
          "volume ÷ mass",
          "mass × volume",
          "mass ÷ volume",
          "mass − volume"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which of these is a unit of pressure?",
        "options": [
          "g/cm³",
          "m/s",
          "kg/m",
          "N/m²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Sam is paid £84 for 7 hours of work. Work out his hourly rate of pay.",
        "options": [
          "£12",
          "£588",
          "£14",
          "£11"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What does the gradient of a distance–time graph represent?",
        "options": [
          "Total distance travelled",
          "Speed",
          "Time taken",
          "Acceleration"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A 2.5 kg bag of rice costs £3. Work out the cost per kilogram.",
        "options": [
          "£7.50",
          "£0.83",
          "£1.20",
          "£1.50"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which graph shows that y is directly proportional to x?",
        "options": [
          "A straight line crossing the y-axis at 5",
          "A curve that gets closer and closer to both axes",
          "A horizontal straight line",
          "A straight line through the origin"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "On a curved graph, what does the gradient of the tangent at a point give?",
        "options": [
          "The instantaneous rate of change at that point",
          "The average rate of change between two points",
          "The y-intercept of the curve",
          "The area under the curve"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A chord joins two points on a curve. What does the gradient of the chord represent?",
        "options": [
          "The instantaneous rate of change at the first point",
          "The average rate of change between the two points",
          "The total change in y",
          "The area under the curve between the two points"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Convert 5 m/s into km/h.",
        "options": [
          "1.39 km/h",
          "300 km/h",
          "18 km/h",
          "50 km/h"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "A car travels for 45 minutes at an average speed of 72 km/h. How far does it travel?",
        "options": [
          "3240 km",
          "32.4 km",
          "96 km",
          "54 km"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Convert 54 km/h into m/s.",
        "options": [
          "15 m/s",
          "194.4 m/s",
          "54 000 m/s",
          "0.9 m/s"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Convert 3.6 m² into cm².",
        "options": [
          "360 cm²",
          "36 000 cm²",
          "3600 cm²",
          "3 600 000 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Convert 2 500 000 cm³ into m³.",
        "options": [
          "25 m³",
          "2500 m³",
          "2.5 m³",
          "0.25 m³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A stone has mass 540 g and volume 200 cm³. Work out its density.",
        "options": [
          "0.37 g/cm³",
          "108 000 g/cm³",
          "340 g/cm³",
          "2.7 g/cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A force of 600 N acts on an area of 0.25 m². Work out the pressure.",
        "options": [
          "2400 N/m²",
          "150 N/m²",
          "0.00042 N/m²",
          "600.25 N/m²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Gold has a density of 19.3 g/cm³. Work out the mass of 5 cm³ of gold.",
        "options": [
          "3.86 g",
          "96.5 g",
          "0.26 g",
          "24.3 g"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Pack A: 400 g of cereal for £2.40. Pack B: 650 g for £3.64. Which is better value?",
        "options": [
          "Pack A, because it costs 0.6p per gram compared with 0.56p",
          "Pack A, because it costs less money",
          "Pack B, because it costs 0.56p per gram compared with 0.6p",
          "They are exactly the same value"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A plumber’s charges are shown by a straight line through (0, 40) and (4, 200), where x is hours and y is cost in £. What is the hourly rate?",
        "options": [
          "£50 per hour",
          "£160 per hour",
          "£60 per hour",
          "£40 per hour"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The depth of water in a tank falls steadily from 90 cm to 30 cm in 15 minutes. Describe the rate of change of depth.",
        "options": [
          "It decreases by 4 cm per minute",
          "It decreases by 6 cm per minute",
          "It decreases by 2 cm per minute",
          "It decreases by 60 cm per minute"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A runner covers 400 m in 50 seconds. Work out her average speed in km/h.",
        "options": [
          "8 km/h",
          "28.8 km/h",
          "2.22 km/h",
          "480 km/h"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How long does it take to travel 210 km at an average speed of 84 km/h?",
        "options": [
          "2 hours 5 minutes",
          "2 hours 50 minutes",
          "2 hours 30 minutes",
          "0.4 hours"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the average rate of change of y = x² + 1 between x = 1 and x = 3.",
        "options": [
          "8",
          "5",
          "2",
          "4"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A tangent is drawn to a distance–time curve at t = 4 s. It passes through (1, 0) and (7, 30), with distance in metres. Estimate the speed at t = 4 s.",
        "options": [
          "5 m/s",
          "30 m/s",
          "4.29 m/s",
          "7.5 m/s"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A distance–time graph is a curve that gets steeper as time increases. What does this show?",
        "options": [
          "The object is slowing down",
          "The object is speeding up",
          "The object is moving at a constant speed",
          "The object is stationary"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A car travels 40 km at 80 km/h and then 60 km at 60 km/h. Work out its average speed for the whole journey.",
        "options": [
          "70 km/h",
          "50 km/h",
          "66.7 km/h",
          "75 km/h"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "250 cm³ of liquid A (density 1.2 g/cm³) is mixed with 150 cm³ of liquid B (density 0.8 g/cm³). Work out the density of the mixture.",
        "options": [
          "1.0 g/cm³",
          "1.1 g/cm³",
          "2.0 g/cm³",
          "1.05 g/cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A cuboid measuring 20 cm × 15 cm × 8 cm has a weight of 120 N. Work out the greatest pressure it can exert on a table.",
        "options": [
          "1 N/cm²",
          "0.4 N/cm²",
          "0.75 N/cm²",
          "0.05 N/cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Convert a density of 1.5 g/cm³ into kg/m³.",
        "options": [
          "1.5 kg/m³",
          "1500 kg/m³",
          "0.0015 kg/m³",
          "15 000 kg/m³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A tank holds 0.9 m³. Water flows in at 12 litres per minute. How long does the empty tank take to fill?",
        "options": [
          "0.075 minutes",
          "7.5 minutes",
          "75 minutes",
          "750 minutes"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Ali earns £27 900 a year. He works 37.5 hours a week for 48 weeks a year. Work out his hourly rate of pay.",
        "options": [
          "£14.31",
          "£744",
          "£581.25",
          "£15.50"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A tangent to the curve y = x³ at x = 2 passes through (1, −4) and (3, 20). Use it to estimate the gradient of the curve at x = 2.",
        "options": [
          "12",
          "8",
          "6.67",
          "24"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The volume of water in a tank is V = 3t² litres after t minutes. Work out the average rate of change of volume between t = 2 and t = 5.",
        "options": [
          "63 litres per minute",
          "21 litres per minute",
          "15 litres per minute",
          "30 litres per minute"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "On a velocity–time curve, the tangent at t = 3 s passes through (0, 2) and (6, 20), with velocity in m/s. Estimate the acceleration at t = 3 s.",
        "options": [
          "3.33 m/s²",
          "18 m/s²",
          "3 m/s²",
          "6.67 m/s²"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The tangent to y = x² at (4, 16) passes through (2, 0). How does the instantaneous rate of change at x = 4 compare with the average rate of change from x = 0 to x = 4?",
        "options": [
          "Both rates equal 4",
          "The instantaneous rate (4) is half the average rate (8)",
          "Both rates equal 8",
          "The instantaneous rate (8) is double the average rate (4)"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.1 */
  "4.1": {
    "name": "Angles, Polygons & Constructions",
    "green": [
      {
        "q": "What do angles on a straight line add up to?",
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
        "q": "What do angles around a point add up to?",
        "options": [
          "180°",
          "360°",
          "540°",
          "90°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What type of angle is 215°?",
        "options": [
          "Obtuse",
          "Acute",
          "Reflex",
          "Straight"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the sum of the interior angles of any quadrilateral?",
        "options": [
          "180°",
          "540°",
          "720°",
          "360°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the size of each exterior angle of a regular hexagon?",
        "options": [
          "60°",
          "120°",
          "720°",
          "30°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the sum of the exterior angles of any polygon?",
        "options": [
          "180°",
          "360°",
          "(n − 2) × 180°",
          "720°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Two parallel lines are crossed by a transversal. What is true about alternate angles?",
        "options": [
          "They add up to 180°",
          "They add up to 90°",
          "They are equal",
          "They add up to 360°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which quadrilateral has exactly one pair of parallel sides?",
        "options": [
          "Parallelogram",
          "Kite",
          "Rhombus",
          "Trapezium"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "How many lines of symmetry does a regular pentagon have?",
        "options": [
          "5",
          "1",
          "10",
          "0"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How is a bearing measured?",
        "options": [
          "Anticlockwise from North",
          "Clockwise from North",
          "Clockwise from East",
          "Anticlockwise from South"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the three-figure bearing of due West?",
        "options": [
          "090°",
          "027°",
          "270°",
          "180°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In triangle PQR, angle PQR is the angle at which vertex?",
        "options": [
          "P",
          "R",
          "Between sides PR and QR",
          "Q"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the locus of points that are the same distance from two fixed points A and B?",
        "options": [
          "The perpendicular bisector of AB",
          "A circle with centre A",
          "The line through A and B",
          "The bisector of angle AB"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the shortest distance from a point to a straight line?",
        "options": [
          "The distance measured at 45° to the line",
          "The perpendicular distance",
          "The horizontal distance",
          "The distance to the nearest end of the line"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What is the order of rotational symmetry of a rhombus that is not a square?",
        "options": [
          "4",
          "1",
          "2",
          "0"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Two angles on a straight line are 3x and 2x + 30. Work out the value of x.",
        "options": [
          "36",
          "42",
          "50",
          "30"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A triangle has angles of 48°, 67° and x. Work out x.",
        "options": [
          "65°",
          "115°",
          "245°",
          "75°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "An isosceles triangle has an angle of 40° between its two equal sides. Work out one of its base angles.",
        "options": [
          "140°",
          "70°",
          "40°",
          "50°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out the sum of the interior angles of an octagon.",
        "options": [
          "1440°",
          "1260°",
          "1080°",
          "900°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the size of each interior angle of a regular decagon.",
        "options": [
          "36°",
          "162°",
          "1440°",
          "144°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Each exterior angle of a regular polygon is 30°. How many sides does it have?",
        "options": [
          "12",
          "6",
          "10",
          "15"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A transversal crosses two parallel lines. Two corresponding angles are (4x − 15)° and (2x + 35)°. Work out x.",
        "options": [
          "10",
          "25",
          "8.3",
          "50"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A transversal crosses two parallel lines. One of a pair of co-interior angles is 115°. What is the other?",
        "options": [
          "115°",
          "245°",
          "65°",
          "75°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The bearing of B from A is 125°. What is the bearing of A from B?",
        "options": [
          "235°",
          "055°",
          "145°",
          "305°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A map has a scale of 1 : 50 000. Two villages are 4.6 cm apart on the map. How far apart are they in real life?",
        "options": [
          "2.3 km",
          "23 km",
          "0.23 km",
          "230 km"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The two interior opposite angles of an exterior angle of a triangle are 52° and 71°. Work out the exterior angle.",
        "options": [
          "57°",
          "123°",
          "109°",
          "237°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A kite has two equal angles of 110°. Its third angle is 85°. Work out its fourth angle.",
        "options": [
          "85°",
          "70°",
          "55°",
          "125°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The angles of a quadrilateral are x, 2x, 3x and 4x. Work out the largest angle.",
        "options": [
          "36°",
          "72°",
          "108°",
          "144°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which property does a rhombus have that a general parallelogram does not?",
        "options": [
          "Its diagonals cross at right angles",
          "Its opposite sides are parallel",
          "Its opposite angles are equal",
          "Its diagonals bisect each other"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "From A, the bearing of B is 070° and the bearing of C is 160°. Work out angle BAC.",
        "options": [
          "230°",
          "90°",
          "110°",
          "70°"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "Each interior angle of a regular polygon is 165°. How many sides does the polygon have?",
        "options": [
          "12",
          "15",
          "24",
          "22"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The interior angles of a polygon add up to 2340°. How many sides does it have?",
        "options": [
          "13",
          "17",
          "11",
          "15"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A regular hexagon and a square share a side and meet at a vertex without overlapping. Work out the angle in the gap between them at that vertex.",
        "options": [
          "150°",
          "210°",
          "30°",
          "60°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Why can a regular polygon NOT have an exterior angle of 50°?",
        "options": [
          "50 is not a factor of 180",
          "360 ÷ 50 is not a whole number",
          "The interior angle would be 130°, which is obtuse",
          "Exterior angles must be less than 45°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "ABCDE is a regular pentagon. Work out angle ACD.",
        "options": [
          "36°",
          "108°",
          "72°",
          "54°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "AB and CD are parallel lines with B and D on the right. Point E lies between the lines, to the right of A and C. Angle BAE = 42° and angle DCE = 68°. Work out angle AEC.",
        "options": [
          "26°",
          "70°",
          "250°",
          "110°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a regular polygon, interior angle : exterior angle = 7 : 2. How many sides does it have?",
        "options": [
          "9",
          "7",
          "14",
          "18"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A ship sails from P on a bearing of 060° to Q, then on a bearing of 150° to R. Work out angle PQR.",
        "options": [
          "30°",
          "90°",
          "150°",
          "210°"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "One angle of an isosceles triangle is 50°. What could the other two angles be?",
        "options": [
          "65° and 65° only",
          "50° and 80° only",
          "65° and 65°, or 50° and 80°",
          "50° and 50°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The angles of a pentagon are x, x + 10, x + 20, x + 30 and x + 40 degrees. Work out the largest angle.",
        "options": [
          "88°",
          "108°",
          "148°",
          "128°"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.2 */
  "4.2": {
    "name": "Congruence, Similarity & Transformations",
    "green": [
      {
        "q": "Which of these is NOT enough on its own to prove that two triangles are congruent?",
        "options": [
          "Two sides and a non-included angle (SSA)",
          "Two sides and the included angle (SAS)",
          "Two angles and a corresponding side (ASA)",
          "Three sides (SSS)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two right-angled triangles have equal hypotenuses and one other pair of equal sides. Which congruence condition does this give?",
        "options": [
          "SAS",
          "RHS",
          "ASA",
          "SSS"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A translation is given by the column vector with −2 on top and 5 below. What does it do?",
        "options": [
          "Moves 2 right and 5 up",
          "Moves 5 left and 2 up",
          "Moves 2 left and 5 up",
          "Moves 2 left and 5 down"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (−3, 4) is reflected in the y-axis. What are the coordinates of its image?",
        "options": [
          "(−3, −4)",
          "(4, −3)",
          "(3, −4)",
          "(3, 4)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Shapes that are exactly the same shape but may be different sizes are called…",
        "options": [
          "similar",
          "congruent",
          "symmetrical",
          "regular"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A triangle is enlarged by scale factor 4. One side of the triangle is 2.5 cm. How long is this side on the image?",
        "options": [
          "6.5 cm",
          "10 cm",
          "0.625 cm",
          "40 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "What information is needed to describe a reflection fully?",
        "options": [
          "The centre of reflection",
          "A column vector",
          "The equation of the mirror line",
          "The scale factor"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (4, 1) is rotated 180° about the origin. What are the coordinates of its image?",
        "options": [
          "(1, 4)",
          "(−4, 1)",
          "(4, −1)",
          "(−4, −1)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Two shapes are mathematically similar. The length scale factor is 5. What is the area scale factor?",
        "options": [
          "25",
          "5",
          "10",
          "125"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A shape is enlarged by scale factor ⅓. What happens to its side lengths?",
        "options": [
          "They are multiplied by 3",
          "They are divided by 3",
          "They each decrease by 3 cm",
          "They stay the same"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (6, −2) is reflected in the x-axis. What are the coordinates of its image?",
        "options": [
          "(−6, −2)",
          "(−2, 6)",
          "(6, 2)",
          "(−6, 2)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Square P has sides of 3 cm. Square Q has sides of 12 cm. What is the scale factor of the enlargement that maps P onto Q?",
        "options": [
          "9",
          "¼",
          "16",
          "4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A shape is enlarged by scale factor −2. How does the image compare with the object?",
        "options": [
          "Twice as long, on the opposite side of the centre and upside down",
          "Twice as long, on the same side of the centre",
          "Half as long, on the opposite side of the centre",
          "The same size, reflected in the centre"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which of these transformations does NOT always produce an image congruent to the object?",
        "options": [
          "Rotation",
          "Enlargement",
          "Translation",
          "Reflection"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (−1, 3) is translated by the column vector with 4 on top and −5 below. What is its image?",
        "options": [
          "(3, 8)",
          "(−5, 8)",
          "(3, −2)",
          "(−5, −2)"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Triangle ABC has AB = 6 cm, angle A = 50° and angle B = 70°. Triangle PQR has PQ = 6 cm, angle P = 50° and angle Q = 70°. Which condition proves the triangles are congruent?",
        "options": [
          "SAS",
          "SSS",
          "RHS",
          "ASA"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A triangle has sides 5 cm, 7 cm and 9 cm. A similar triangle has shortest side 15 cm. How long is its longest side?",
        "options": [
          "27 cm",
          "19 cm",
          "21 cm",
          "45 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The point (−2, 3) is enlarged by scale factor 3, centre (0, 0). What is its image?",
        "options": [
          "(1, 6)",
          "(−6, 9)",
          "(−6, 3)",
          "(6, 9)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (2, 5) is rotated 90° anticlockwise about the origin. What is its image?",
        "options": [
          "(5, −2)",
          "(−2, −5)",
          "(−5, 2)",
          "(5, 2)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (1, 4) is reflected in the line y = 1. What is its image?",
        "options": [
          "(1, 2)",
          "(−1, 4)",
          "(1, −4)",
          "(1, −2)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The point (7, 2) is rotated 180° about the point (3, 1). What is its image?",
        "options": [
          "(−1, 0)",
          "(−7, −2)",
          "(−4, −1)",
          "(1, 0)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The point (5, 3) is enlarged by scale factor 2 with centre (1, 1). What is its image?",
        "options": [
          "(10, 6)",
          "(9, 5)",
          "(11, 7)",
          "(6, 4)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A photo is 12 cm wide and 18 cm long. It is enlarged so that its width is 20 cm. What is the length of the enlarged photo?",
        "options": [
          "26 cm",
          "27 cm",
          "30 cm",
          "24 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Two mathematically similar jugs have heights 10 cm and 15 cm. The smaller jug holds 400 ml. How much does the larger jug hold?",
        "options": [
          "600 ml",
          "900 ml",
          "800 ml",
          "1350 ml"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Two similar triangles have areas 20 cm² and 45 cm². What is the ratio of their corresponding lengths?",
        "options": [
          "2 : 3",
          "4 : 9",
          "8 : 27",
          "16 : 81"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Triangle A has vertices (2, 1), (4, 1) and (2, 3). Triangle B has vertices (−2, 1), (−4, 1) and (−2, 3). Which single transformation maps A onto B?",
        "options": [
          "Reflection in the x-axis",
          "Reflection in the y-axis",
          "Rotation of 180° about the origin",
          "Translation by the column vector (−4, 0)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (4, −2) is enlarged by scale factor −½, centre (0, 0). What is its image?",
        "options": [
          "(2, −1)",
          "(−8, 4)",
          "(−2, 1)",
          "(8, −4)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A shape has area 6 cm². It is enlarged by scale factor 4. What is the area of the image?",
        "options": [
          "24 cm²",
          "36 cm²",
          "384 cm²",
          "96 cm²"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Triangle X has angles 35°, 65° and 80°. Triangle Y has two angles of 65° and 80°. What can you definitely conclude?",
        "options": [
          "The triangles are similar",
          "The triangles are congruent",
          "Triangle Y is right-angled",
          "The triangles have the same perimeter"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The point (3, −5) is reflected in the line y = x. What is its image?",
        "options": [
          "(5, −3)",
          "(−5, 3)",
          "(−3, 5)",
          "(3, 5)"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "In triangle ABC, D is on AB and E is on AC so that DE is parallel to BC. AD = 3 cm, DB = 5 cm and BC = 12 cm. How long is DE?",
        "options": [
          "7.2 cm",
          "20 cm",
          "4.5 cm",
          "7 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The point (1, 3) is reflected in the y-axis and the image is then rotated 90° clockwise about the origin. What are the final coordinates?",
        "options": [
          "(−3, −1)",
          "(1, −3)",
          "(−3, 1)",
          "(3, 1)"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Two mathematically similar solids have surface areas 50 cm² and 72 cm². The smaller solid has volume 250 cm³. What is the volume of the larger solid?",
        "options": [
          "432 cm³",
          "360 cm³",
          "300 cm³",
          "518.4 cm³"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "An enlargement maps A(1, 2) to A′(3, 6) and B(2, 2) to B′(5, 6). What is the centre of enlargement?",
        "options": [
          "(1, 2)",
          "(−1, −2)",
          "(0, 0)",
          "(−2, −1)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Two mathematically similar cones have volumes 16 cm³ and 54 cm³. The smaller cone is 6 cm tall. How tall is the larger cone?",
        "options": [
          "20.25 cm",
          "7.35 cm",
          "9 cm",
          "13.5 cm"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The point (6, 2) is rotated 90° clockwise about the point (2, −1). What is its image?",
        "options": [
          "(−1, 3)",
          "(2, −6)",
          "(3, −4)",
          "(5, −5)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these points is invariant under a reflection in the line y = −x?",
        "options": [
          "(−2, 2)",
          "(2, 2)",
          "(0, 2)",
          "(2, 0)"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A triangle is reflected in the line x = 4, and the image is then reflected in the line x = 6. Which single transformation has the same effect?",
        "options": [
          "Reflection in the line x = 5",
          "Translation by the column vector (4, 0)",
          "Translation by the column vector (2, 0)",
          "Rotation of 180° about (5, 0)"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Lines AE and BD cross at C, and AB is parallel to DE. AB = 10 cm, DE = 4 cm and CD = 3 cm. How long is BC?",
        "options": [
          "1.2 cm",
          "9 cm",
          "7.5 cm",
          "6 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A model car is made to a scale of 1 : 20. The paintwork on the real car has an area of 12 m². What is the area of the paintwork on the model?",
        "options": [
          "6000 cm²",
          "600 cm²",
          "0.03 cm²",
          "300 cm²"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.3 */
  "4.3": {
    "name": "Circles & Circle Theorems",
    "green": [
      {
        "q": "What is the name for part of the circumference of a circle?",
        "options": [
          "arc",
          "sector",
          "segment",
          "chord"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the name of the region bounded by two radii and an arc?",
        "options": [
          "segment",
          "sector",
          "chord",
          "tangent"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has radius 4 cm. What is its diameter?",
        "options": [
          "2 cm",
          "16 cm",
          "8 cm",
          "4π cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which formula gives the area of a circle with radius r?",
        "options": [
          "2πr",
          "πd",
          "2πr²",
          "πr²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A circle has radius 5 cm. What is its circumference in terms of π?",
        "options": [
          "10π cm",
          "25π cm",
          "5π cm",
          "2.5π cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A circle has diameter 8 cm. What is its area in terms of π?",
        "options": [
          "64π cm²",
          "16π cm²",
          "8π cm²",
          "32π cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has radius 10 cm. What is its circumference, to 1 decimal place?",
        "options": [
          "31.4 cm",
          "314.2 cm",
          "62.8 cm",
          "628.3 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What fraction of a full circle is a sector with angle 120°?",
        "options": [
          "¼",
          "½",
          "⅔",
          "⅓"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What is the angle between a tangent and the radius drawn to the point of contact?",
        "options": [
          "90°",
          "180°",
          "45°",
          "60°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which of these is a region of a circle rather than a line?",
        "options": [
          "chord",
          "segment",
          "tangent",
          "radius"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A quadrant is a sector with which angle?",
        "options": [
          "180°",
          "45°",
          "90°",
          "60°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "ABCD is a cyclic quadrilateral. Angle ABC = 70°. What is angle ADC?",
        "options": [
          "70°",
          "20°",
          "290°",
          "110°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A circle has radius 3 cm. What is its area, to 1 decimal place?",
        "options": [
          "28.3 cm²",
          "18.8 cm²",
          "9.4 cm²",
          "113.1 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which expression gives the arc length of a sector with angle θ and radius r?",
        "options": [
          "θ/360 × πr²",
          "θ/360 × 2πr",
          "θ × 2πr",
          "360/θ × 2πr"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "An arc subtends an angle of 140° at the centre of a circle. What angle does it subtend at a point on the circumference (in the major segment)?",
        "options": [
          "280°",
          "40°",
          "70°",
          "140°"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "A sector has radius 9 cm and angle 40°. What is its arc length, to 2 decimal places?",
        "options": [
          "28.27 cm",
          "3.14 cm",
          "56.55 cm",
          "6.28 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A sector has radius 6 cm and angle 150°. What is its area, to 2 decimal places?",
        "options": [
          "47.12 cm²",
          "15.71 cm²",
          "113.10 cm²",
          "94.25 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A circle has circumference 30π cm. What is its area in terms of π?",
        "options": [
          "900π cm²",
          "225π cm²",
          "30π cm²",
          "15π cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has area 64π cm². What is its diameter?",
        "options": [
          "8 cm",
          "32 cm",
          "16 cm",
          "4 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A, B and C lie on a circle centre O, with C on the major arc AB. Angle AOB = 110°. What is angle ACB?",
        "options": [
          "220°",
          "110°",
          "70°",
          "55°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "AB is a diameter of a circle and C is a point on the circumference. Angle ABC = 34°. What is angle BAC?",
        "options": [
          "56°",
          "34°",
          "146°",
          "90°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A quarter circle (quadrant) has radius 6 cm. What is its perimeter, in terms of π?",
        "options": [
          "(3π + 6) cm",
          "(3π + 12) cm",
          "9π cm",
          "(6π + 12) cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A semicircle has radius 5 cm. What is its perimeter, to 1 decimal place?",
        "options": [
          "15.7 cm",
          "31.4 cm",
          "25.7 cm",
          "20.7 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A sector has radius 10 cm and arc length 5π cm. What is the angle of the sector?",
        "options": [
          "45°",
          "180°",
          "60°",
          "90°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "TA is a tangent to a circle centre O at A. OA = 5 cm and TA = 12 cm. What is the length of OT?",
        "options": [
          "13 cm",
          "17 cm",
          "√119 cm",
          "7 cm"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A circle has area 50 cm². What is its radius, to 2 decimal places?",
        "options": [
          "7.96 cm",
          "3.99 cm",
          "15.92 cm",
          "2.82 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "TA and TB are tangents to a circle centre O, touching it at A and B. Angle ATB = 70°. What is angle AOB?",
        "options": [
          "70°",
          "140°",
          "110°",
          "35°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "The tangent to a circle at P makes an angle of 64° with the chord PQ. R is a point on the circle in the alternate segment, and angle QPR = 50°. What is angle PQR?",
        "options": [
          "64°",
          "50°",
          "116°",
          "66°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A ring is the region between two circles with the same centre and radii 7 cm and 4 cm. What is the area of the ring in terms of π?",
        "options": [
          "33π cm²",
          "9π cm²",
          "65π cm²",
          "3π cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A wheel has diameter 70 cm. How far does it travel in 10 complete turns, to 1 decimal place?",
        "options": [
          "44.0 m",
          "22.0 m",
          "3.8 m",
          "2.2 m"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A, B, C and D lie on a circle centre O. C is on the major arc AB and D is on the minor arc AB. Angle AOB = 150°. What is angle ADB?",
        "options": [
          "75°",
          "150°",
          "105°",
          "210°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A sector of radius 8 cm has area 40 cm². What is the angle of the sector, to 1 decimal place?",
        "options": [
          "35.8°",
          "143.2°",
          "286.5°",
          "71.6°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A circle has radius 6 cm. Chord AB subtends a right angle at the centre O. What is the area of the minor segment, to 1 decimal place?",
        "options": [
          "10.3 cm²",
          "28.3 cm²",
          "18.0 cm²",
          "46.3 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "AB is a chord of a circle centre O, and angle OBA = 25°. C is a point on the major arc AB. What is angle ACB?",
        "options": [
          "50°",
          "65°",
          "130°",
          "25°"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A running track has two straights of 85 m and two semicircular ends, each with diameter 64 m. What is the length of the track, to the nearest metre?",
        "options": [
          "234 m",
          "572 m",
          "371 m",
          "271 m"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A chord of length 10 cm is drawn in a circle of radius 13 cm. How far is the chord from the centre of the circle?",
        "options": [
          "√69 cm",
          "√194 cm",
          "8 cm",
          "12 cm"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "ABCD is a cyclic quadrilateral. Angle BAD = (3x + 10)° and angle BCD = (2x − 5)°. What is the size of angle BCD?",
        "options": [
          "65°",
          "115°",
          "35°",
          "70°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A sector has angle 72° and arc length 4π cm. What is its radius?",
        "options": [
          "20 cm",
          "10 cm",
          "5 cm",
          "2 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Triangle ABC is drawn inside a circle. The tangent at A makes an angle of 52° with AB on one side and 68° with AC on the other side. What is angle BAC?",
        "options": [
          "120°",
          "52°",
          "60°",
          "68°"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Which fact is used to prove that the opposite angles of a cyclic quadrilateral add up to 180°?",
        "options": [
          "The tangent is perpendicular to the radius",
          "The angle in a semicircle is 90°",
          "The alternate segment theorem",
          "The angle at the centre is twice the angle at the circumference"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.4 */
  "4.4": {
    "name": "Mensuration: Area, Volume & 3D",
    "green": [
      {
        "q": "How many edges does a square-based pyramid have?",
        "options": [
          "8",
          "5",
          "4",
          "6"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many vertices does a cone have?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A parallelogram has base 12 cm and perpendicular height 5 cm. What is its area?",
        "options": [
          "30 cm²",
          "34 cm²",
          "60 cm²",
          "17 cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Change 4 m² into cm².",
        "options": [
          "400 cm²",
          "4000 cm²",
          "400 000 cm²",
          "40 000 cm²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A triangle has base 8 cm and perpendicular height 7 cm. Work out its area.",
        "options": [
          "28 cm²",
          "56 cm²",
          "15 cm²",
          "30 cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the plan of a 3D shape?",
        "options": [
          "The view from the front",
          "The view from directly above",
          "The view from the side",
          "The net of the shape"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A circle has diameter 10 cm. What is its circumference, in terms of π?",
        "options": [
          "5π cm",
          "25π cm",
          "10π cm",
          "20π cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the area of a circle of radius 7 cm. Leave your answer in terms of π.",
        "options": [
          "14π cm²",
          "7π cm²",
          "196π cm²",
          "49π cm²"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Two solids are mathematically similar. The lengths of the larger solid are 2 times the lengths of the smaller solid. What is the ratio of their volumes?",
        "options": [
          "1 : 8",
          "1 : 2",
          "1 : 4",
          "1 : 6"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A cuboid measures 5 cm by 4 cm by 3 cm. Work out its volume.",
        "options": [
          "12 cm³",
          "60 cm³",
          "47 cm³",
          "94 cm³"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A trapezium has parallel sides 6 cm and 10 cm. The perpendicular distance between them is 4 cm. Work out its area.",
        "options": [
          "64 cm²",
          "20 cm²",
          "32 cm²",
          "240 cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A prism has a cross-section of area 15 cm² and a length of 8 cm. Work out its volume.",
        "options": [
          "23 cm³",
          "60 cm³",
          "30 cm³",
          "120 cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which solid has one curved surface, no edges and no vertices?",
        "options": [
          "Sphere",
          "Cylinder",
          "Cone",
          "Hemisphere"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "How many of the faces of a triangular prism are rectangles?",
        "options": [
          "6",
          "3",
          "2",
          "5"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "How many mm³ are there in 1 cm³?",
        "options": [
          "10 mm³",
          "100 mm³",
          "1000 mm³",
          "10 000 mm³"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "A cylinder has radius 4 cm and height 10 cm. Work out its volume, in terms of π.",
        "options": [
          "80π cm³",
          "40π cm³",
          "16π cm³",
          "160π cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A semicircle has diameter 12 cm. Work out its perimeter, correct to 1 decimal place.",
        "options": [
          "30.8 cm",
          "18.8 cm",
          "37.7 cm",
          "24.8 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Change 25 000 cm² into m².",
        "options": [
          "250 m²",
          "2.5 m²",
          "25 m²",
          "0.25 m²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A pyramid has a square base of side 6 cm and a perpendicular height of 10 cm. Work out its volume. [Volume of a pyramid = ⅓ × area of base × height]",
        "options": [
          "360 cm³",
          "180 cm³",
          "120 cm³",
          "20 cm³"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A sphere has radius 6 cm. Work out its volume, in terms of π. [Volume of a sphere = 4/3 πr³]",
        "options": [
          "144π cm³",
          "864π cm³",
          "48π cm³",
          "288π cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A cone has base radius 5 cm and slant height 13 cm. Work out its curved surface area, in terms of π. [Curved surface area of a cone = πrl]",
        "options": [
          "65π cm²",
          "25π cm²",
          "90π cm²",
          "130π cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A rectangle 10 cm by 6 cm has a rectangle 4 cm by 3 cm cut out of one corner. Work out the area of the shape that is left.",
        "options": [
          "60 cm²",
          "48 cm²",
          "72 cm²",
          "36 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A fish tank is a cuboid 50 cm long, 40 cm wide and 30 cm high. How many litres of water does it hold when full?",
        "options": [
          "600 litres",
          "6 litres",
          "60 litres",
          "6000 litres"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A quarter circle has radius 8 cm. Work out its perimeter, correct to 1 decimal place.",
        "options": [
          "12.6 cm",
          "20.6 cm",
          "50.3 cm",
          "28.6 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A cylinder has radius 3 cm and height 7 cm. Work out its curved surface area, in terms of π.",
        "options": [
          "42π cm²",
          "21π cm²",
          "63π cm²",
          "60π cm²"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A cube has a volume of 64 cm³. Work out its total surface area.",
        "options": [
          "64 cm²",
          "96 cm²",
          "16 cm²",
          "384 cm²"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A triangle has vertices A(1, 1), B(9, 1) and C(4, 7). Work out its area.",
        "options": [
          "48 units²",
          "30 units²",
          "24 units²",
          "27 units²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A prism is 10 cm long. Its cross-section is a right-angled triangle whose two shorter sides are 6 cm and 8 cm. Work out its volume.",
        "options": [
          "480 cm³",
          "140 cm³",
          "2400 cm³",
          "240 cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A solid hemisphere has radius 3 cm. Work out its volume, in terms of π. [Volume of a sphere = 4/3 πr³]",
        "options": [
          "18π cm³",
          "36π cm³",
          "9π cm³",
          "27π cm³"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two similar shapes have lengths in the ratio 1 : 3. The smaller shape has area 5 cm². Work out the area of the larger shape.",
        "options": [
          "15 cm²",
          "45 cm²",
          "135 cm²",
          "25 cm²"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A cylinder has volume 500 cm³ and radius 5 cm. Work out its height, correct to 3 significant figures.",
        "options": [
          "20 cm",
          "3.18 cm",
          "6.37 cm",
          "2.12 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A solid metal sphere of radius 3 cm is melted down and recast as a cylinder of radius 2 cm. Work out the height of the cylinder. [Volume of a sphere = 4/3 πr³]",
        "options": [
          "3 cm",
          "27 cm",
          "12 cm",
          "9 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A solid cone has base radius 5 cm and perpendicular height 12 cm. Work out its total surface area, in terms of π. [Curved surface area of a cone = πrl]",
        "options": [
          "65π cm²",
          "85π cm²",
          "90π cm²",
          "155π cm²"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Two solids are mathematically similar. Their surface areas are 36 cm² and 81 cm². The smaller solid has volume 160 cm³. Work out the volume of the larger solid.",
        "options": [
          "360 cm³",
          "240 cm³",
          "810 cm³",
          "540 cm³"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A cuboid measures 6 cm by 8 cm by 24 cm. Work out the length of the longest straight rod that fits inside it (the space diagonal).",
        "options": [
          "26 cm",
          "38 cm",
          "10 cm",
          "25.3 cm"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A cube has side length 5 cm, measured correct to the nearest centimetre. Work out the upper bound for its volume.",
        "options": [
          "125 cm³",
          "166.375 cm³",
          "91.125 cm³",
          "157.464 cm³"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A rectangle has length (3 + √2) cm and width (3 − √2) cm. Work out its area.",
        "options": [
          "11 cm²",
          "9 cm²",
          "7 cm²",
          "9 − √2 cm²"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A solid is made from a cylinder of radius 4 cm and height 9 cm with a cone of radius 4 cm and perpendicular height 6 cm on top. Work out the total volume, in terms of π. [Volume of a cone = ⅓πr²h]",
        "options": [
          "240π cm³",
          "160π cm³",
          "208π cm³",
          "176π cm³"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A rectangle has length (2x + 1) cm and width (x + 3) cm. Its area is 52 cm². Work out the value of x.",
        "options": [
          "3.5",
          "7",
          "−7",
          "24.5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A pyramid has a square base of side 8 cm. Its apex is vertically above the centre of the base and each sloping edge is 9 cm long. Work out the perpendicular height of the pyramid.",
        "options": [
          "8.06 cm",
          "7 cm",
          "12.0 cm",
          "5.66 cm"
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
        "q": "The two shorter sides of a right-angled triangle are 9 cm and 12 cm. Work out the length of the longest side.",
        "options": [
          "15 cm",
          "21 cm",
          "225 cm",
          "108 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which side of a right-angled triangle is called the hypotenuse?",
        "options": [
          "The shortest side",
          "The side opposite the right angle",
          "The side next to the angle θ",
          "The side opposite the angle θ"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which ratio of sides defines sin θ in a right-angled triangle?",
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
        "q": "Which of these is equal to sin 30°?",
        "options": [
          "√3/2",
          "1",
          "√2/2",
          "½"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is equal to cos 60°?",
        "options": [
          "½",
          "√3/2",
          "0",
          "1"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Without a calculator, tan 45° is equal to which value?",
        "options": [
          "0",
          "1",
          "√2/2",
          "√3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A right-angled triangle has hypotenuse 13 cm and one shorter side 5 cm. How long is the third side?",
        "options": [
          "13.9 cm",
          "8 cm",
          "12 cm",
          "18 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A triangle has sides 5 cm, 7 cm and 9 cm. Is it right-angled?",
        "options": [
          "Yes, because 5² + 7² = 9²",
          "Yes, because 5 + 7 is greater than 9",
          "No, because 9² is less than 5² + 7²",
          "No, because 5² + 7² = 74 but 9² = 81"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these is equal to cos 0°?",
        "options": [
          "1",
          "0",
          "½",
          "It is not defined"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In a right-angled triangle you know the side adjacent to angle θ and you want the side opposite θ. Which ratio should you use?",
        "options": [
          "sin",
          "tan",
          "cos",
          "None — use Pythagoras"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Without a calculator, tan 60° is equal to which value?",
        "options": [
          "1/√3",
          "√3/2",
          "√3",
          "1"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Work out the distance between the points (1, 2) and (4, 6).",
        "options": [
          "7 units",
          "25 units",
          "√7 units",
          "5 units"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a right-angled triangle the hypotenuse is 10 cm. Side x is opposite an angle of 30°. Work out x.",
        "options": [
          "5 cm",
          "8.66 cm",
          "20 cm",
          "5.77 cm"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which rule states that a/sin A = b/sin B = c/sin C?",
        "options": [
          "The cosine rule",
          "The sine rule",
          "Pythagoras’ theorem",
          "The area rule"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Triangle ABC has sides a and b with included angle C. Which formula gives its area?",
        "options": [
          "½ab",
          "ab sin C",
          "½ab sin C",
          "½ab cos C"
        ],
        "answer": 2,
        "higher": true
      }
    ],
    "amber": [
      {
        "q": "A ladder 6.5 m long leans against a vertical wall. The foot of the ladder is 2.5 m from the wall on horizontal ground. How far up the wall does the ladder reach?",
        "options": [
          "6.96 m",
          "4 m",
          "9 m",
          "6 m"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a right-angled triangle, the side opposite angle θ is 7 cm and the hypotenuse is 12 cm. Work out θ, correct to 1 decimal place.",
        "options": [
          "35.7°",
          "30.3°",
          "54.3°",
          "0.6°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In a right-angled triangle, the hypotenuse is 20 cm and one angle is 40°. Work out the side adjacent to the 40° angle, correct to 3 significant figures.",
        "options": [
          "12.9 cm",
          "15.3 cm",
          "26.1 cm",
          "16.8 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a right-angled triangle, the side opposite a 35° angle is 9 cm. Work out the side x adjacent to the 35° angle, correct to 3 significant figures.",
        "options": [
          "6.30 cm",
          "15.7 cm",
          "12.9 cm",
          "7.37 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A right-angled triangle has hypotenuse 6 cm. Work out the exact length of the side opposite the 60° angle.",
        "options": [
          "3 cm",
          "6√3 cm",
          "2√3 cm",
          "3√3 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A tower is 30 m tall. Amir stands on level ground 50 m from the foot of the tower. Work out the angle of elevation of the top of the tower from Amir’s feet, correct to 1 decimal place.",
        "options": [
          "31.0°",
          "36.9°",
          "59.0°",
          "53.1°"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "An isosceles triangle has two sides of 10 cm and a base of 12 cm. Work out its perpendicular height.",
        "options": [
          "11.7 cm",
          "8 cm",
          "6 cm",
          "64 cm"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Work out the distance between the points (−2, 3) and (4, −5).",
        "options": [
          "√40 units",
          "14 units",
          "10 units",
          "100 units"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A rectangle is 8 cm by 15 cm. Work out the length of its diagonal.",
        "options": [
          "23 cm",
          "289 cm",
          "12.7 cm",
          "17 cm"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In triangle ABC, angle A = 50°, angle B = 70° and a = 8 cm. Work out b, correct to 3 significant figures.",
        "options": [
          "9.81 cm",
          "6.52 cm",
          "9.04 cm",
          "8.00 cm"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "In triangle ABC, b = 5 cm, c = 7 cm and angle A = 60°. Work out a, correct to 3 significant figures.",
        "options": [
          "10.4 cm",
          "6.24 cm",
          "8.60 cm",
          "39.0 cm"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A triangle has sides 8 cm and 11 cm with an included angle of 30°. Work out its area.",
        "options": [
          "44 cm²",
          "38.1 cm²",
          "22 cm²",
          "88 cm²"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Work out the exact value of cos 30° × tan 60°.",
        "options": [
          "√3",
          "¾",
          "1",
          "3/2"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these sets of side lengths does NOT make a right-angled triangle?",
        "options": [
          "6, 8, 11",
          "5, 12, 13",
          "8, 15, 17",
          "9, 40, 41"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A cuboid measures 3 cm by 4 cm by 12 cm. Work out the length of its space diagonal.",
        "options": [
          "19 cm",
          "13 cm",
          "5 cm",
          "12.4 cm"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "A ramp is 4.2 m long and rises a vertical height of 0.9 m. Work out the angle the ramp makes with the horizontal, correct to 1 decimal place.",
        "options": [
          "12.1°",
          "77.6°",
          "12.4°",
          "77.9°"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "An isosceles triangle has two sides of 9 cm and a base of 10 cm. Work out the size of one of its base angles, correct to 1 decimal place.",
        "options": [
          "33.7°",
          "29.1°",
          "67.5°",
          "56.3°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In triangle ABC, a = 8 cm, b = 11 cm and angle A = 35°. Which values are possible for angle B?",
        "options": [
          "52.1° only",
          "127.9° only",
          "52.1° or 127.9°",
          "No triangle is possible"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A triangle has sides 5 cm, 6 cm and 8 cm. Work out its largest angle, correct to 1 decimal place.",
        "options": [
          "87.1°",
          "38.6°",
          "48.5°",
          "92.9°"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "A triangle has sides 9 cm and 12 cm and an area of 35 cm². Work out the size of the acute angle between these two sides, correct to 1 decimal place.",
        "options": [
          "40.4°",
          "18.9°",
          "49.6°",
          "32.9°"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A cuboid has a base 8 cm by 6 cm and a height of 5 cm. Work out the angle between a space diagonal and the base, correct to 1 decimal place.",
        "options": [
          "32.0°",
          "26.6°",
          "39.8°",
          "63.4°"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "In triangle PQR, angle Q = 90°, angle P = 60° and PQ = 4 cm. Without a calculator, work out the exact length of QR.",
        "options": [
          "8 cm",
          "4√3/3 cm",
          "4√3 cm",
          "2√3 cm"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A flagpole stands on top of a building. From a point on level ground 40 m from the building, the angle of elevation of the top of the building is 35° and the angle of elevation of the top of the flagpole is 42°. Work out the length of the flagpole, correct to 1 decimal place.",
        "options": [
          "36.0 m",
          "28.0 m",
          "4.9 m",
          "8.0 m"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A boat sails 12 km from a harbour, then turns and sails 15 km. The angle between the two legs of the journey (inside the triangle formed with the harbour) is 110°. Work out the boat’s distance from the harbour, correct to 3 significant figures.",
        "options": [
          "22.2 km",
          "15.7 km",
          "19.2 km",
          "27 km"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A triangle has sides 6 cm and 10 cm with an included angle of 60°. Work out its exact area.",
        "options": [
          "30√3 cm²",
          "15√3 cm²",
          "15 cm²",
          "30 cm²"
        ],
        "answer": 1,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 4.6 */
  "4.6": {
    "name": "Vectors",
    "green": [
      {
        "q": "a = (4, −1) and b = (2, 5). Work out a + b.",
        "options": [
          "(6, 4)",
          "(2, −6)",
          "(8, −5)",
          "(6, −4)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "b = (−3, 2). Work out 4b.",
        "options": [
          "(1, 6)",
          "(−12, 8)",
          "(−12, 2)",
          "(12, −8)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which column vector describes a translation of 2 units right and 6 units down?",
        "options": [
          "(−2, 6)",
          "(6, −2)",
          "(2, −6)",
          "(2, 6)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What movement does the column vector (−3, 0) describe?",
        "options": [
          "3 units right",
          "3 units down",
          "3 units up",
          "3 units left"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Vector CD = (−2, 7). What is vector DC?",
        "options": [
          "(2, −7)",
          "(−2, −7)",
          "(2, 7)",
          "(7, −2)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "a = (5, 3) and b = (1, −2). Work out a − b.",
        "options": [
          "(6, 1)",
          "(4, 5)",
          "(4, 1)",
          "(−4, −5)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The point (−1, 4) is translated by the vector (3, −5). Write down the coordinates of its image.",
        "options": [
          "(−4, 9)",
          "(2, 9)",
          "(2, −1)",
          "(−3, −20)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "P is the point (3, −1) and Q is the point (7, 2). What is the column vector PQ?",
        "options": [
          "(10, 1)",
          "(−4, −3)",
          "(7, 2)",
          "(4, 3)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "a = (10, −4). Work out ½a.",
        "options": [
          "(5, −2)",
          "(20, −8)",
          "(5, −4)",
          "(10, −2)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Which of these is a scalar, not a vector?",
        "options": [
          "the column vector (7, 0)",
          "the number 7",
          "a translation 7 units to the right",
          "the vector AB"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these vectors is parallel to (3, −1)?",
        "options": [
          "(1, −3)",
          "(3, 1)",
          "(−6, 2)",
          "(6, −3)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "a = (2, −3) and b = (−1, 4). Work out 3a + b.",
        "options": [
          "(7, −13)",
          "(3, 3)",
          "(5, −13)",
          "(5, −5)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Shape A is translated by (−6, 1) to give shape B. Which column vector translates shape B back onto shape A?",
        "options": [
          "(6, −1)",
          "(−6, −1)",
          "(6, 1)",
          "(1, −6)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "a = (0, −4). Work out −3a.",
        "options": [
          "(0, −12)",
          "(0, 12)",
          "(−3, 12)",
          "(3, 12)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "p = (−1.5, 4). Work out 2p.",
        "options": [
          "(0.5, 6)",
          "(−3, 4)",
          "(−3, 8)",
          "(3, −8)"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "a = (3, −2) and b = (−1, 4). Work out 2a − 3b.",
        "options": [
          "(3, 8)",
          "(9, 8)",
          "(5, −16)",
          "(9, −16)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "O is the origin, OP = p and OQ = q. Which expression gives vector PQ?",
        "options": [
          "q − p",
          "p − q",
          "p + q",
          "−p − q"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "(x, −1) + (5, y) = (2, 6). Find x and y.",
        "options": [
          "x = 7, y = 7",
          "x = −3, y = 7",
          "x = −3, y = 5",
          "x = 3, y = −7"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A shape is translated by (−2, 4) and then by (5, −7). Which single vector has the same effect?",
        "options": [
          "(−7, 11)",
          "(3, 11)",
          "(3, −3)",
          "(−10, −28)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A translation maps A(4, −3) onto A′(−1, 2). Which column vector describes the translation?",
        "options": [
          "(5, −5)",
          "(3, −1)",
          "(−5, −1)",
          "(−5, 5)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "OABC is a parallelogram with OA = a and OC = c. What is vector AC?",
        "options": [
          "c − a",
          "a − c",
          "a + c",
          "−a − c"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "ABCD is a parallelogram with AB = p and AD = q. What is vector CA?",
        "options": [
          "p + q",
          "−p − q",
          "p − q",
          "q − p"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Simplify 2(3a − b) − (a + 4b).",
        "options": [
          "5a + 2b",
          "7a − 6b",
          "5a − 6b",
          "6a − 6b"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "k(−3, 5) = (12, −20). What is the value of k?",
        "options": [
          "4",
          "−15",
          "9",
          "−4"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "a = (1, −5) and b = (4, 2). Find the vector c such that b + c = a.",
        "options": [
          "(−3, −7)",
          "(3, 7)",
          "(5, −3)",
          "(−3, −3)"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A shape is translated by (3, −4). A vertex of the image is at (−2, 5). Where was this vertex on the original shape?",
        "options": [
          "(1, 1)",
          "(−5, 9)",
          "(5, −9)",
          "(−5, 1)"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "O is the origin, OA = a and OB = b. M is the midpoint of AB. What is vector OM?",
        "options": [
          "½(b − a)",
          "a + b",
          "½(a + b)",
          "½a + b"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "O is the origin, OA = a and OB = b. P lies on AB with AP : PB = 1 : 3. What is vector OP?",
        "options": [
          "¼a + ¾b",
          "⅔a + ⅓b",
          "¼(a + b)",
          "¾a + ¼b"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which of these vectors is parallel to 3a − b?",
        "options": [
          "−9a + 3b",
          "3a + b",
          "a − 3b",
          "6a − b"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "p = (2, −1). Work out 4p + (−3, 6).",
        "options": [
          "(11, −10)",
          "(5, 2)",
          "(−1, 5)",
          "(5, −2)"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "O is the origin, OA = a and OB = b. P lies on AB with AP : PB = 2 : 1. What is vector OP?",
        "options": [
          "⅔a + ⅓b",
          "a + ⅔b",
          "⅓a + ⅔b",
          "⅔(a + b)"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "PQ = 3a − 6b and QR = −a + 2b. What can you conclude?",
        "options": [
          "PQ is perpendicular to QR",
          "PQ and QR are the same length",
          "PQR is a right-angled triangle",
          "P, Q and R lie on a straight line"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "O is the origin, OA = a and OB = b. M is the midpoint of OA and N is the midpoint of AB. What is vector MN?",
        "options": [
          "½b",
          "½(a + b)",
          "½(b − a)",
          "b − a"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "OA = 4a and OB = 8b. P lies on AB with AP : PB = 3 : 1. What is vector OP?",
        "options": [
          "3a + 2b",
          "a + 6b",
          "3a + 6b",
          "a + 2b"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A translation maps (−3, 2) onto (1, −4). The image is then translated by (−6, 3). Which single vector maps (−3, 2) to the final position?",
        "options": [
          "(10, −9)",
          "(−2, −1)",
          "(−2, −3)",
          "(2, 3)"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "p = (4, −1) and q = (−2, 3). Find the vector r such that 3p − r = 2q.",
        "options": [
          "(8, 3)",
          "(−16, 9)",
          "(16, 3)",
          "(16, −9)"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "OP = 2a − b and OQ = 8a − 4b. Which statement is correct?",
        "options": [
          "O, P and Q are collinear with OP : PQ = 1 : 3",
          "O, P and Q are collinear with OP : PQ = 1 : 4",
          "O, P and Q are collinear with OP : PQ = 4 : 1",
          "OP and OQ are perpendicular"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The vectors 3a − 4b and ka + 10b are parallel. What is the value of k?",
        "options": [
          "7.5",
          "−7.5",
          "−1.2",
          "−30"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "ABCDEF is a regular hexagon with centre O. OA = a and OB = b. What is vector AC?",
        "options": [
          "b − a",
          "2b − a",
          "b − 2a",
          "a + b"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "a = (2, 1) and b = (−1, 3). Given that ma + nb = (7, 0), find m and n.",
        "options": [
          "m = −3, n = 1",
          "m = 3, n = 1",
          "m = 1, n = −5",
          "m = 3, n = −1"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 5.1 */
  "5.1": {
    "name": "Probability",
    "green": [
      {
        "q": "A fair six-sided dice is rolled. What is the probability that it lands on a number greater than 4?",
        "options": [
          "1/3",
          "2/3",
          "1/6",
          "1/2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The probability that event A happens is 0.42. What is the probability that A does not happen?",
        "options": [
          "0.42",
          "0.58",
          "0.68",
          "1.42"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A bag contains 4 yellow, 7 green and 9 white beads. One bead is taken at random. What is P(green)?",
        "options": [
          "7/13",
          "1/3",
          "7/20",
          "7/9"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "What is the probability of an event that is impossible?",
        "options": [
          "1",
          "0.1",
          "−1",
          "0"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The probability that it rains tomorrow is 0.85. Which word best describes this event?",
        "options": [
          "likely",
          "unlikely",
          "evens",
          "impossible"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A drawing pin is dropped 75 times and lands point up 33 times. What is the relative frequency of landing point up?",
        "options": [
          "0.33",
          "0.44",
          "0.75",
          "0.56"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The probability that a biased coin lands on heads is 0.35. The coin is thrown 400 times. How many heads would you expect?",
        "options": [
          "35",
          "200",
          "140",
          "260"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A spinner numbered 1 to 5 is spun and a coin is thrown. How many possible outcomes are there?",
        "options": [
          "7",
          "5",
          "25",
          "10"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which of these cannot be a probability?",
        "options": [
          "7/6",
          "0.07",
          "0",
          "6/7"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Two events are independent. What does this mean?",
        "options": [
          "They cannot both happen at the same time",
          "The outcome of one does not affect the probability of the other",
          "They always happen together",
          "Their probabilities add up to 1"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A spinner can land on red, blue, green or yellow. P(red) = 0.1, P(blue) = 0.3 and P(green) = 0.25. What is P(yellow)?",
        "options": [
          "0.65",
          "0.45",
          "0.35",
          "0.4"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A letter is chosen at random from the word STATISTICS. What is P(S)?",
        "options": [
          "1/10",
          "3/7",
          "1/5",
          "3/10"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Two fair coins are thrown. What is the probability of getting two heads?",
        "options": [
          "1/4",
          "1/2",
          "1/3",
          "1/8"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A dice is rolled 12 times and never lands on 6. Which statement is best?",
        "options": [
          "The dice must be biased",
          "This could happen with a fair dice; many more rolls are needed",
          "The next roll is certain to be a 6",
          "The probability of rolling a 6 on this dice is 0"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Events A and B are mutually exclusive. P(A) = 0.25 and P(B) = 0.45. What is P(A or B)?",
        "options": [
          "0.1125",
          "0.2",
          "0.7",
          "0.3"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Two fair six-sided dice are rolled and the scores are added. What is P(total = 9)?",
        "options": [
          "1/4",
          "1/6",
          "1/12",
          "1/9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A and B are independent events. P(A) = 0.7 and P(B) = 0.4. What is P(A and B)?",
        "options": [
          "0.28",
          "1.1",
          "0.3",
          "0.82"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A bag has 3 red and 7 blue balls. A ball is taken at random and replaced, then a second ball is taken. What is P(both blue)?",
        "options": [
          "7/15",
          "49/100",
          "7/10",
          "14/100"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A bag has 3 red and 7 blue balls. Two balls are taken at random without replacement. What is P(both red)?",
        "options": [
          "9/100",
          "1/30",
          "1/15",
          "6/20"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The probability that a biased dice lands on 6 is 0.22. The dice is rolled 250 times. Work out an estimate for the number of sixes.",
        "options": [
          "22",
          "41.7",
          "228",
          "55"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a group of 50 students, 23 like crisps, 31 like chocolate and 9 like both. How many like neither?",
        "options": [
          "5",
          "14",
          "9",
          "45"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "In a group of 40 people, 18 swim (S), 22 run (R) and 7 do both. One person is chosen at random. What is P(S ∩ R′)?",
        "options": [
          "18/40",
          "11/40",
          "7/40",
          "15/40"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Four students test the same coin. Ali throws it 10 times, Bea 50 times, Cal 100 times and Dee 500 times. Whose results give the most reliable estimate of P(heads)?",
        "options": [
          "Ali",
          "Cal",
          "Dee",
          "All are equally reliable"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Three fair coins are thrown. What is P(exactly two heads)?",
        "options": [
          "1/8",
          "1/4",
          "1/2",
          "3/8"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "P(A) = 0.5 and P(A ∩ B) = 0.2. What is P(B | A), the probability of B given A?",
        "options": [
          "0.4",
          "0.1",
          "0.7",
          "0.3"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A and B are independent events. P(A) = 0.3 and P(B) = 0.6. What is the probability that exactly one of A and B happens?",
        "options": [
          "0.18",
          "0.54",
          "0.9",
          "0.28"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A frequency tree shows 200 learner drivers. 80 took a course and 60 of these passed first time. Of the 120 who did not take a course, 54 passed first time. A driver who passed first time is chosen at random. What is the probability they took the course?",
        "options": [
          "3/4",
          "3/10",
          "10/19",
          "2/5"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "ξ = {1, 2, 3, …, 12}, A = {multiples of 3} and B = {factors of 12}. Which set is A ∩ B?",
        "options": [
          "{3, 6, 9, 12}",
          "{1, 2, 3, 4, 6, 9, 12}",
          "{3, 6}",
          "{3, 6, 12}"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A frequency tree shows 120 people: 70 are male and 40 of these wear glasses; 22 of the females wear glasses. How many of the 120 people do not wear glasses?",
        "options": [
          "58",
          "30",
          "28",
          "62"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "60 students: 25 boys and 35 girls. 15 of the boys and 20 of the girls have a pet. A student with a pet is chosen at random. What is the probability it is a boy?",
        "options": [
          "3/5",
          "3/7",
          "1/4",
          "5/12"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "80 people were asked if they prefer tea or coffee. 35 were adults and 45 were children. 20 of the adults and 30 of the children prefer tea. A person who prefers tea is chosen at random. What is the probability they are a child?",
        "options": [
          "2/3",
          "3/8",
          "3/5",
          "9/16"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A bag has 6 red and 4 blue sweets. Two are taken at random without replacement. Given that the first sweet is blue, what is the probability that the second is blue?",
        "options": [
          "2/5",
          "4/9",
          "2/15",
          "1/3"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A bag has 6 red and 4 blue sweets. Two are taken at random without replacement. What is the probability that they are different colours?",
        "options": [
          "8/15",
          "4/15",
          "12/25",
          "1/2"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.3. What is P(B | A)?",
        "options": [
          "0.3",
          "0.5",
          "0.6",
          "0.18"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A spinner lands on red with probability 0.4. It is spun three times. What is the probability that it lands on red at least once?",
        "options": [
          "1.2",
          "0.064",
          "0.784",
          "0.216"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A four-sided spinner has P(1) = 0.3, P(2) = x, P(3) = 2x and P(4) = x + 0.1. What is the value of x?",
        "options": [
          "0.175",
          "0.6",
          "0.2",
          "0.15"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "P(Zara's bus is late) = 0.25. If the bus is late, P(she misses the meeting) = 0.8; if not, P(she misses the meeting) = 0.1. Zara misses the meeting. What is the probability that her bus was late?",
        "options": [
          "8/11",
          "0.2",
          "0.8",
          "0.275"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A game costs £2 to play. The probability of winning a £10 prize is 0.12. The game is played 500 times. What is the expected profit for the organiser?",
        "options": [
          "£600",
          "£400",
          "£520",
          "£880"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "n(ξ) = 50, n(A) = 24, n(B) = 19 and n((A ∪ B)′) = 15. A member of ξ is chosen at random. What is P(A ∩ B)?",
        "options": [
          "3/10",
          "8/35",
          "4/25",
          "7/50"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A bag contains n counters, 4 of them green. Two counters are taken at random without replacement. P(both green) = 2/15. What is the value of n?",
        "options": [
          "9",
          "15",
          "30",
          "10"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.1 */
  "6.1": {
    "name": "Sampling, Charts & Scatter Graphs",
    "green": [
      {
        "q": "A council wants to know the views of all 9000 adults in a town. It asks 300 of these adults for their views. What are the 300 adults called?",
        "options": [
          "A sample",
          "The population",
          "A census",
          "A sampling frame"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is a census?",
        "options": [
          "A survey of a random sample of the population",
          "A survey of every member of the population",
          "A survey of exactly 10% of the population",
          "A survey of people chosen by the researcher"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A company tests how long its matches burn. Why does it test a sample rather than every match?",
        "options": [
          "A sample always gives the exact answer",
          "A sample can never be biased",
          "Testing destroys the matches, so testing them all would leave none to sell",
          "A sample includes every match made"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A pie chart shows information about 90 people. How many degrees represent one person?",
        "options": [
          "90°",
          "0.25°",
          "3.6°",
          "4°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a pictogram, one symbol represents 10 bikes. How many bikes do 4½ symbols represent?",
        "options": [
          "45",
          "40",
          "9",
          "450"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The longer a car engine runs, the more fuel it uses. What type of correlation would a scatter graph of these two variables show?",
        "options": [
          "Negative",
          "Positive",
          "No correlation",
          "Causation"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A scatter graph shows the number of hours of daylight and the electricity used for lighting in a house. As daylight increases, electricity used decreases. What type of correlation is this?",
        "options": [
          "Positive",
          "No correlation",
          "Negative",
          "Zero"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Which diagram is most suitable for showing the number of children in each of 30 families?",
        "options": [
          "Time series graph",
          "Scatter graph",
          "Line of best fit",
          "Vertical line chart"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "What must every pictogram include?",
        "options": [
          "A key showing what one symbol represents",
          "Angles that add up to 360°",
          "A vertical axis starting at 0",
          "A line of best fit"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A sector of a pie chart has an angle of 120°. What fraction of the total does it represent?",
        "options": [
          "1/120",
          "1/3",
          "1/4",
          "2/3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which of these is discrete numerical data?",
        "options": [
          "The height of a pupil",
          "A pupil's favourite sport",
          "The number of pupils in a class",
          "The time a pupil takes to run 100 m"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "On a scatter graph, what is the name for a point that does not fit the general pattern of the other points?",
        "options": [
          "The mode",
          "The trend",
          "An interpolation",
          "An outlier"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A time series graph shows that sales of ice cream peak every July and are lowest every January. What is this repeating pattern called?",
        "options": [
          "A seasonal pattern",
          "Negative correlation",
          "An outlier",
          "Extrapolation"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Using a line of best fit to estimate a value outside the range of the data collected is called…",
        "options": [
          "interpolation",
          "extrapolation",
          "correlation",
          "sampling"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A tally shows three complete gates of five followed by 1 more mark. What is the frequency?",
        "options": [
          "13",
          "15",
          "16",
          "4"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "In a survey of 40 students, 14 chose swimming as their favourite sport. Work out the angle for swimming in a pie chart.",
        "options": [
          "35°",
          "140°",
          "14°",
          "126°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A pie chart shows how 180 people travel to work. The sector for \"train\" has an angle of 50°. How many people travel by train?",
        "options": [
          "25",
          "50",
          "100",
          "36"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A town has 1500 households. In a random sample of 40 households, 6 have no car. Estimate the number of households in the town with no car.",
        "options": [
          "240",
          "225",
          "250",
          "1494"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A line of best fit passes through (0, 12) and (20, 52). Use the line to estimate y when x = 15.",
        "options": [
          "30",
          "39",
          "42",
          "47"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A survey asking how often people use the town library is carried out only inside the library. Why is this sample biased?",
        "options": [
          "The sample is too large",
          "Everyone in the library has the same chance of being asked",
          "The library is open every day",
          "People in the library probably use it more often than most people in the town"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "In a pictogram, one symbol represents 8 books. Thursday shows 3¼ symbols. How many books does this represent?",
        "options": [
          "26",
          "24",
          "32",
          "30"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A shop records its sales every quarter. Which comparison is best for deciding whether sales are increasing over time?",
        "options": [
          "Compare the highest and lowest quarters of last year",
          "Compare Q1 of this year with Q1 of last year",
          "Compare Q3 of last year with Q1 of this year",
          "Look only at the most recent quarter"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "In a pie chart, the sector for \"cats\" has an angle of 72° and represents 18 pets. How many pets are shown in the whole pie chart?",
        "options": [
          "20",
          "108",
          "90",
          "360"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A scatter graph shows strong negative correlation between the age of a car and its value. Which statement is correct?",
        "options": [
          "Older cars tend to be worth more",
          "Every older car is worth less than every newer car",
          "There is no relationship between age and value",
          "Older cars tend to be worth less"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Kim asks 10 people what they think about a new road and uses their answers to describe the views of 50 000 people. What is the main problem?",
        "options": [
          "A sample this small is unlikely to represent the population",
          "Samples are always biased",
          "A sample must contain at least half the population",
          "Opinions cannot be collected in a sample"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A composite bar chart shows how 40 pupils travelled on Monday. The bar is split into car 15, bus 10 and walk. How many pupils walked?",
        "options": [
          "40",
          "15",
          "25",
          "10"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A pie chart represents 240 people. How many people does a 30° sector represent?",
        "options": [
          "8",
          "30",
          "20",
          "72"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A line of best fit has equation y = 3x + 5 and was drawn for x-values from 2 to 10. Estimate y when x = 6.",
        "options": [
          "18",
          "33",
          "29",
          "23"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which pair of variables is most likely to show no correlation?",
        "options": [
          "A student's house number and their maths test score",
          "Height and arm span of adults",
          "Outside temperature and cost of heating a house",
          "Age of a car and its value"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "The number of pets owned by 20 pupils is: 0 pets – 6 pupils, 1 pet – 9 pupils, 2 pets – 4 pupils, 3 pets – 1 pupil. What fraction of the pupils own at least 2 pets?",
        "options": [
          "1/5",
          "1/4",
          "3/4",
          "1/2"
        ],
        "answer": 1,
        "higher": false
      }
    ],
    "red": [
      {
        "q": "A line of best fit y = 4x + 20 was drawn from data with x-values between 5 and 30. For which value of x is a prediction least reliable?",
        "options": [
          "x = 6",
          "x = 18",
          "x = 60",
          "x = 29"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "In a survey, 25 people chose tea, 35 chose coffee and 20 chose juice. Work out the pie chart angle for juice.",
        "options": [
          "72°",
          "20°",
          "80°",
          "90°"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Club A has 180 members and its pie chart has an 80° sector for \"swimming\". Club B has 450 members and its pie chart has a 40° sector for \"swimming\". Which statement is correct?",
        "options": [
          "Club B has more swimmers, by 10",
          "Club A has more swimmers, by 40",
          "Club A has more swimmers, by 10",
          "Both clubs have the same number of swimmers"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A factory makes 9000 phones a week. In a random sample of 120 phones, 4 are faulty. Estimate the number of faulty phones made in a week.",
        "options": [
          "30",
          "300",
          "2250",
          "480"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A restaurant's takings are always high in December. The owner compares December 2024 (£48 000) with February 2025 (£21 000) and says business is falling. What is the main flaw?",
        "options": [
          "The sample size is too small",
          "Correlation does not imply causation",
          "December is a seasonal peak, so he should compare the same month in different years",
          "He should have drawn a pie chart"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "There is strong positive correlation between the number of fire engines sent to a fire and the amount of damage caused. What is the best conclusion?",
        "options": [
          "Fire engines cause the damage",
          "Sending fewer fire engines would reduce the damage",
          "There is no relationship between the variables",
          "Bigger fires lead to both more fire engines and more damage"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A website about video games asks its visitors whether games are good for teenagers, and 85% say yes. Why can this not be used to describe the views of all UK adults?",
        "options": [
          "Visitors choose to reply and are likely to be keen on games, so the sample is biased",
          "85% is too high a percentage to be correct",
          "Percentages cannot be worked out from a sample",
          "The results should have been shown in a pie chart"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A taxi company's line of best fit for cost (£, y) against distance (miles, x) passes through (0, 3) and (10, 18). What does the value 3 represent?",
        "options": [
          "A cost of £3 per mile",
          "A fixed charge of £3 before any distance is travelled",
          "A cost of £1.50 per mile",
          "A maximum journey of 3 miles"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A pie chart has sectors of 150°, 90° and 75°, plus a sector for \"other\" that represents 18 people. How many people are represented altogether?",
        "options": [
          "72",
          "120",
          "144",
          "162"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "A school has 1000 pupils. Sam asks 20 of his friends and finds 5 are vegetarian. Ana takes a random sample of 200 pupils and finds 36 are vegetarian. What is the best estimate of the number of vegetarians in the school?",
        "options": [
          "250, because Sam's proportion is higher",
          "215, the mean of the two estimates",
          "41, the total number of vegetarians found",
          "180, because Ana's sample is random and larger"
        ],
        "answer": 3,
        "higher": false
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────── 6.2 */
  "6.2": {
    "name": "Averages, Spread & Grouped Data",
    "green": [
      {
        "q": "Find the mode of 4, 9, 6, 9, 3, 6, 9.",
        "options": [
          "9",
          "6",
          "3",
          "4"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Find the median of 8, 3, 11, 5, 7.",
        "options": [
          "11",
          "7",
          "6.8",
          "8"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Find the range of 15, 4, 22, 9, 31.",
        "options": [
          "31",
          "18",
          "27",
          "16.2"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Find the mean of 5, 7, 9, 11, 13.",
        "options": [
          "45",
          "11.25",
          "7",
          "9"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which average can be used for categorical data such as favourite colour?",
        "options": [
          "Mode",
          "Mean",
          "Median",
          "Range"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the midpoint of the class 20 < m ≤ 30?",
        "options": [
          "10",
          "25",
          "30",
          "50"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "To estimate the mean from a grouped frequency table, each class is represented by…",
        "options": [
          "the upper bound of the class",
          "the class width",
          "the midpoint of the class",
          "the frequency of the class"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Times: 0 < t ≤ 10 (frequency 7), 10 < t ≤ 20 (frequency 12), 20 < t ≤ 30 (frequency 9). What is the modal class?",
        "options": [
          "12",
          "20 < t ≤ 30",
          "0 < t ≤ 10",
          "10 < t ≤ 20"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Which value is an outlier in the data 21, 24, 19, 23, 96, 22?",
        "options": [
          "96",
          "19",
          "24",
          "22"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "What is the interquartile range?",
        "options": [
          "Largest value − smallest value",
          "Upper quartile − lower quartile",
          "Median − lower quartile",
          "(Upper quartile + lower quartile) ÷ 2"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "On a histogram with unequal class widths, what goes on the vertical axis?",
        "options": [
          "Frequency",
          "Cumulative frequency",
          "Frequency density",
          "Class width"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Frequency density is equal to…",
        "options": [
          "class width ÷ frequency",
          "frequency × class width",
          "frequency ÷ total frequency",
          "frequency ÷ class width"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "Which five values are shown on a box plot?",
        "options": [
          "Minimum, lower quartile, median, upper quartile, maximum",
          "Minimum, mean, mode, median, maximum",
          "Lower quartile, mean, upper quartile, range, IQR",
          "Mean, median, mode, range, total"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Which of these is continuous data?",
        "options": [
          "The number of goals in a match",
          "The mass of a newborn baby",
          "A person's shoe size",
          "The number of cars in a car park"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Which statement about the median is true?",
        "options": [
          "It is always the most common value",
          "It must always be one of the data values",
          "It is not affected much by extreme values",
          "It uses every value in its calculation"
        ],
        "answer": 2,
        "higher": false
      }
    ],
    "amber": [
      {
        "q": "Goals scored: 0 (frequency 3), 1 (frequency 7), 2 (frequency 6), 3 (frequency 4). Work out the mean number of goals.",
        "options": [
          "7.75",
          "1.5",
          "5",
          "1.55"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "Goals scored: 0 (frequency 3), 1 (frequency 7), 2 (frequency 6), 3 (frequency 4). What is the median number of goals?",
        "options": [
          "1.5",
          "1",
          "2",
          "6.5"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Times: 0 < t ≤ 20 (frequency 4), 20 < t ≤ 40 (frequency 10), 40 < t ≤ 60 (frequency 6). Work out an estimate for the mean time.",
        "options": [
          "30",
          "32",
          "160",
          "213.3"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "The mean of 6 numbers is 15. Five of the numbers are 12, 18, 9, 20 and 14. What is the sixth number?",
        "options": [
          "14.6",
          "15",
          "17",
          "163"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Marks: 0–9 (frequency 5), 10–19 (frequency 9), 20–29 (frequency 7), 30–39 (frequency 11). Which class contains the median?",
        "options": [
          "30–39",
          "10–19",
          "0–9",
          "20–29"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The class 15 < x ≤ 25 has frequency 34. What is its frequency density?",
        "options": [
          "3.4",
          "340",
          "1.36",
          "0.29"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "Find the lower quartile of 3, 6, 7, 9, 12, 14, 15, 18, 20, 22, 25.",
        "options": [
          "6",
          "7",
          "14",
          "18"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "A box plot shows minimum 10, lower quartile 24, median 31, upper quartile 39, maximum 52. What is the interquartile range?",
        "options": [
          "42",
          "8",
          "15",
          "7"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "Class A: mean score 64, range 40. Class B: mean score 58, range 18. Which statement is correct?",
        "options": [
          "Class B scored higher on average and was more consistent",
          "Class A scored higher on average and was more consistent",
          "Class B scored higher on average; Class A was more consistent",
          "Class A scored higher on average; Class B was more consistent"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A histogram bar for the class 30 < t ≤ 50 has frequency density 1.6. What is the frequency of this class?",
        "options": [
          "32",
          "1.6",
          "80",
          "12.5"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "The mean of 8 numbers is 5. The number 14 is added to the list. What is the new mean?",
        "options": [
          "9.5",
          "6",
          "5",
          "6.75"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "A cumulative frequency graph shows 120 values. At what cumulative frequency should you read off the lower quartile?",
        "options": [
          "25",
          "60",
          "30",
          "90"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A shoe shop wants to know which size to stock the most of. Which average should it use?",
        "options": [
          "Mean",
          "Median",
          "Range",
          "Mode"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "The ages of six people are 22, 24, 25, 25, 27 and 81. Which average best represents a typical age?",
        "options": [
          "Median, because it is not affected by 81",
          "Mean, because it uses every value",
          "Range, because it shows the spread",
          "Mean, because 81 is the largest value"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "A cumulative frequency table shows: ≤ 10: 6, ≤ 20: 19, ≤ 30: 37, ≤ 40: 45, ≤ 50: 48. How many values lie between 20 and 40?",
        "options": [
          "18",
          "26",
          "8",
          "64"
        ],
        "answer": 1,
        "higher": true
      }
    ],
    "red": [
      {
        "q": "Masses: 0 < m ≤ 10 (frequency 6), 10 < m ≤ 20 (frequency 9), 20 < m ≤ 30 (frequency 11), 30 < m ≤ 40 (frequency 4). Estimate the mean mass to 1 d.p.",
        "options": [
          "145.0",
          "20.0",
          "19.3",
          "25.0"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "The mean score of 15 girls is 72 and the mean score of 10 boys is 62. Work out the mean score of all 25 students.",
        "options": [
          "67",
          "70",
          "65",
          "68"
        ],
        "answer": 3,
        "higher": false
      },
      {
        "q": "A histogram has bars 0 < t ≤ 5 (frequency density 2.4), 5 < t ≤ 15 (frequency density 3.1) and 15 < t ≤ 35 (frequency density 0.9). How many values are there in total?",
        "options": [
          "61",
          "6.4",
          "64",
          "43"
        ],
        "answer": 0,
        "higher": true
      },
      {
        "q": "A histogram bar for 10 ≤ x < 30 has frequency density 2.5. Estimate how many values lie between 18 and 30.",
        "options": [
          "50",
          "30",
          "20",
          "12"
        ],
        "answer": 1,
        "higher": true
      },
      {
        "q": "Five whole numbers have mode 3, median 6 and mean 7. Which set could they be?",
        "options": [
          "3, 3, 6, 8, 10",
          "3, 6, 6, 9, 11",
          "3, 3, 6, 9, 14",
          "2, 3, 3, 6, 21"
        ],
        "answer": 2,
        "higher": false
      },
      {
        "q": "Box plot A has median 58 and IQR 12. Box plot B has median 52 and IQR 25. Which comparison is valid?",
        "options": [
          "B is higher on average and more consistent",
          "A is higher on average but B is more consistent",
          "B is higher on average but A is more consistent",
          "A is higher on average and more consistent"
        ],
        "answer": 3,
        "higher": true
      },
      {
        "q": "The mean of 5 numbers is 12. One number is removed and the mean of the remaining 4 numbers is 10. Which number was removed?",
        "options": [
          "20",
          "2",
          "11",
          "22"
        ],
        "answer": 0,
        "higher": false
      },
      {
        "q": "Why might the median be a better average than the mean for the salaries in a company?",
        "options": [
          "The median uses every salary in its calculation",
          "A few very high salaries would make the mean unrepresentative",
          "The mean cannot be calculated for amounts of money",
          "The median is always larger than the mean"
        ],
        "answer": 1,
        "higher": false
      },
      {
        "q": "Data in order: 4, 7, 8, 10, 11, 13, 15, 16, 18, 21, 40. An outlier is a value more than 1.5 × IQR above the upper quartile. Is 40 an outlier?",
        "options": [
          "No, because 40 is less than 18 + 1.5 × 36 = 72",
          "No, because 40 is within the range of the data",
          "Yes, because 40 is greater than 33",
          "Yes, because 40 is greater than 18 + 10 = 28"
        ],
        "answer": 2,
        "higher": true
      },
      {
        "q": "A cumulative frequency graph for the times of 60 people shows a cumulative frequency of 48 at 45 minutes. What percentage of the people took more than 45 minutes?",
        "options": [
          "80%",
          "12%",
          "48%",
          "20%"
        ],
        "answer": 3,
        "higher": true
      }
    ]
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MATHS_EDEXCEL_GCSE_QUESTIONS };
}
