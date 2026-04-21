// Edexcel A-Level Maths — Statistics & Mechanics MCQ Bank
// Topics: S6 (Regression & Correlation), S7 (Conditional Probability),
//         S8 (Normal Distribution), M1 (Modelling in Mechanics), M2 (Kinematics/SUVAT)
// Format: { q: '...', options: ['correct', 'wrong1', 'wrong2', 'wrong3'], answer: 0 }
// Tiers: green (12), amber (12), red (6) per topic

const EDEXCEL_MCQ_S6S8_M1M2 = {

  // ─────────────────────────────────────────────
  // S6: REGRESSION, CORRELATION & HYPOTHESIS TESTING
  // ─────────────────────────────────────────────
  S6: {
    green: [
      {
        q: 'The product moment correlation coefficient \\(r\\) always satisfies which inequality?',
        options: ['\\(-1 \\leq r \\leq 1\\)', '\\(0 \\leq r \\leq 1\\)', '\\(-\\infty < r < \\infty\\)', '\\(0 < r < 1\\)'],
        answer: 0
      },
      {
        q: 'A scatter diagram shows that as x increases, y generally decreases. What type of correlation is this?',
        options: ['Negative correlation', 'Positive correlation', 'Zero correlation', 'Non-linear correlation'],
        answer: 0
      },
      {
        q: 'Given \\(S_{xy} = 24\\), \\(S_{xx} = 16\\), the gradient of the regression line of y on x is:',
        options: ['\\(1.5\\)', '\\(0.667\\)', '\\(24\\)', '\\(384\\)'],
        answer: 0
      },
      {
        q: 'The regression line of y on x always passes through which point?',
        options: ['\\((\\bar{x}, \\bar{y})\\)', '\\((0, 0)\\)', '\\((0, a)\\) where \\(a\\) is the intercept only', '\\((\\bar{x}, 0)\\)'],
        answer: 0
      },
      {
        q: 'Which formula correctly gives \\(S_{xy}\\)?',
        options: ['\\(\\sum xy - \\dfrac{\\sum x \\sum y}{n}\\)', '\\(\\sum xy - n\\bar{x}\\bar{y}\\div n\\)', '\\(\\sum(x-\\bar{x})(y-\\bar{y}) \\div n\\)', '\\(\\sum xy \\div n\\)'],
        answer: 0
      },
      {
        q: 'A value of \\(r = -0.98\\) indicates:',
        options: ['Strong negative linear correlation', 'Weak negative linear correlation', 'Strong positive linear correlation', 'No linear correlation'],
        answer: 0
      },
      {
        q: 'What is the null hypothesis for a hypothesis test on the population PMCC \\(\\rho\\)?',
        options: ['\\(H_0: \\rho = 0\\)', '\\(H_0: \\rho \\neq 0\\)', '\\(H_0: r = 0\\)', '\\(H_0: \\rho = 1\\)'],
        answer: 0
      },
      {
        q: 'Predicting a y value for an x value outside the range of the data is called:',
        options: ['Extrapolation', 'Interpolation', 'Regression', 'Correlation'],
        answer: 0
      },
      {
        q: 'If \\(\\bar{x} = 5\\), \\(\\bar{y} = 12\\), and \\(b = 2\\), what is the intercept \\(a\\) of the regression line?',
        options: ['\\(2\\)', '\\(-2\\)', '\\(22\\)', '\\(10\\)'],
        answer: 0
      },
      {
        q: 'For a y on x regression line, it is appropriate to use it to:',
        options: ['Predict y given a value of x', 'Predict x given a value of y', 'Predict both x and y equally', 'Find the PMCC only'],
        answer: 0
      },
      {
        q: 'A correlation of \\(r = 0.3\\) compared to \\(r = 0.8\\) indicates:',
        options: ['Weaker positive linear correlation', 'Stronger positive linear correlation', 'The same strength', 'Negative correlation'],
        answer: 0
      },
      {
        q: 'Correlation between ice cream sales and drowning rates does NOT mean ice cream causes drowning. This illustrates:',
        options: ['Correlation does not imply causation', 'The regression line is inaccurate', 'The PMCC is zero', 'Extrapolation is being used'],
        answer: 0
      }
    ],
    amber: [
      {
        q: 'For \\(n = 8\\) data pairs, \\(S_{xy} = 30\\), \\(S_{xx} = 25\\), \\(S_{yy} = 40\\). Calculate \\(r\\) to 3 d.p.',
        options: ['\\(0.949\\)', '\\(0.750\\)', '\\(1.200\\)', '\\(0.857\\)'],
        answer: 0
      },
      {
        q: 'Data is coded using \\(p = x - 10\\) and \\(q = y - 5\\). The regression line of q on p is \\(q = 3 + 2p\\). What is the regression line of y on x?',
        options: ['\\(y = -12 + 2x\\)', '\\(y = 3 + 2x\\)', '\\(y = 8 + 2x\\)', '\\(y = 18 + 2x\\)'],
        answer: 0
      },
      {
        q: 'A researcher finds \\(r = 0.72\\) for \\(n = 12\\). The critical value at 5% (one-tailed) is 0.4973. What is the correct conclusion?',
        options: ['Reject \\(H_0\\); evidence of positive linear correlation', 'Accept \\(H_0\\); no evidence of correlation', 'Reject \\(H_0\\); evidence of negative correlation', 'The test is inconclusive'],
        answer: 0
      },
      {
        q: 'Given \\(\\sum x = 60\\), \\(\\sum y = 90\\), \\(\\sum x^2 = 500\\), \\(\\sum xy = 640\\), \\(n = 8\\). Calculate \\(S_{xy}\\).',
        options: ['\\(-32.5\\)', '\\(32.5\\)', '\\(640\\)', '\\(-640\\)'],
        answer: 0
      },
      {
        q: 'The gradient of the y on x regression line is \\(b = \\dfrac{S_{xy}}{S_{xx}}\\). If \\(S_{xy} < 0\\) and \\(S_{xx} > 0\\), the line has:',
        options: ['Negative gradient', 'Positive gradient', 'Zero gradient', 'Undefined gradient'],
        answer: 0
      },
      {
        q: 'For a two-tailed hypothesis test on \\(\\rho\\) at 5% significance with \\(n = 10\\), you should use the critical value table column for:',
        options: ['2.5%', '5%', '10%', '1%'],
        answer: 0
      },
      {
        q: 'Which of the following is most likely to have a PMCC close to \\(-1\\)?',
        options: ['Temperature and heating costs', 'Shoe size and exam scores', 'Height and weight', 'Age and number of teeth (for adults)'],
        answer: 0
      },
      {
        q: 'If data is coded and \\(r\\) is calculated, which statement is true?',
        options: ['\\(r\\) is unchanged by linear coding', '\\(r\\) doubles if data is doubled', '\\(r\\) becomes negative if data is shifted down', '\\(r\\) must be recalculated from original data'],
        answer: 0
      },
      {
        q: 'Given regression line \\(\\hat{y} = 1.2 + 0.8x\\), predict y when \\(x = 10\\).',
        options: ['\\(9.2\\)', '\\(8.0\\)', '\\(12.0\\)', '\\(1.2\\)'],
        answer: 0
      },
      {
        q: 'The residual for a data point \\((x_i, y_i)\\) is defined as:',
        options: ['\\(y_i - \\hat{y}_i\\)', '\\(\\hat{y}_i - y_i\\)', '\\(x_i - \\bar{x}\\)', '\\(y_i - \\bar{y}\\)'],
        answer: 0
      },
      {
        q: 'A one-tailed test for negative correlation has \\(H_1\\):',
        options: ['\\(\\rho < 0\\)', '\\(\\rho > 0\\)', '\\(\\rho \\neq 0\\)', '\\(\\rho = -1\\)'],
        answer: 0
      },
      {
        q: 'When is interpolation more reliable than extrapolation?',
        options: ['When predicting within the data range', 'When predicting far beyond the data', 'When \\(r = 0\\)', 'When the regression line has a steep gradient'],
        answer: 0
      }
    ],
    red: [
      {
        q: 'For \\(n = 7\\), \\(\\sum x = 35\\), \\(\\sum y = 56\\), \\(\\sum x^2 = 203\\), \\(\\sum y^2 = 480\\), \\(\\sum xy = 312\\). Calculate \\(r\\) correct to 3 s.f.',
        options: ['\\(0.820\\)','\\(0.904\\)','\\(0.951\\)','\\(-0.951\\)'], answer: 2
      },
      {
        q: 'Data coded as \\(p = \\frac{x-3}{2}\\), \\(q = \\frac{y-10}{5}\\). Regression line of q on p: \\(q = 0.4 + 1.6p\\). Find the regression line of y on x.',
        options: ['\\(y = 2 + 1.6x\\)','\\(y = 0.4 + 1.6x\\)','\\(y = 22 + 16x\\)','\\(y = 12 + 8x\\)'], answer: 2
      },
      {
        q: 'Test \\(H_0: \\rho = 0\\) vs \\(H_1: \\rho \\neq 0\\) at 1% significance, \\(n = 15\\), \\(r = 0.60\\). Critical value is 0.6411. Conclusion:',
        options: ['Do not reject \\(H_0\\); insufficient evidence of linear correlation','Reject \\(H_0\\); significant negative correlation','Accept \\(H_1\\) since \\(r > 0.5\\)','Reject \\(H_0\\); significant positive correlation'], answer: 0
      },
      {
        q: 'The least squares regression minimises which quantity?',
        options: ['The sum of squared vertical residuals \\(\\sum (y_i - \\hat{y}_i)^2\\)','The sum of squared horizontal residuals','The variance of x','The sum of absolute residuals \\(\\sum |y_i - \\hat{y}_i|\\)'], answer: 0
      },
      {
        q: 'For a bivariate dataset, \\(S_{xx} = 50\\), \\(S_{yy} = 72\\), \\(r = 0.6\\). Find \\(S_{xy}\\).',
        options: ['\\(\\sqrt{3600}\\)','\\(2160\\)','\\(25.46\\)','\\(30\\)'], answer: 2
      },
      {
        q: 'A student claims that because a regression line fits the data well (\\(r = 0.95\\)), the x-variable causes changes in y. Which response is correct?',
        options: ['Only \\(r = 1\\) proves causation','\\(r = 0.95\\) is not strong enough to make any conclusion','High \\(r\\) indicates strong correlation, but causation cannot be inferred from correlation alone','The student is correct: strong correlation always implies causation'], answer: 2
      }
    ]
  },

  // ─────────────────────────────────────────────
  // S7: CONDITIONAL PROBABILITY
  // ─────────────────────────────────────────────
  S7: {
    green: [
      {
        q: 'The formula for conditional probability \\(P(A|B)\\) is:',
        options: ['\\(\\dfrac{P(A \\cap B)}{P(B)}\\)', '\\(\\dfrac{P(A)}{P(B)}\\)', '\\(P(A) + P(B) - P(A \\cap B)\\)', '\\(\\dfrac{P(A \\cap B)}{P(A)}\\)'],
        answer: 0
      },
      {
        q: 'Events A and B are independent if and only if:',
        options: ['\\(P(A \\cap B) = P(A) \\times P(B)\\)', '\\(P(A \\cap B) = 0\\)', '\\(P(A|B) = P(B)\\)', '\\(P(A \\cup B) = 1\\)'],
        answer: 0
      },
      {
        q: 'The addition rule for probability is:',
        options: ['\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)', '\\(P(A \\cup B) = P(A) + P(B)\\)', '\\(P(A \\cup B) = P(A) \\times P(B)\\)', '\\(P(A \\cup B) = P(A|B) + P(B|A)\\)'],
        answer: 0
      },
      {
        q: 'The multiplication rule gives:',
        options: ['\\(P(A \\cap B) = P(A|B) \\times P(B)\\)', '\\(P(A \\cap B) = P(A) + P(B)\\)', '\\(P(A|B) = P(A \\cap B) + P(B)\\)', '\\(P(A \\cup B) = P(A|B) \\times P(B)\\)'],
        answer: 0
      },
      {
        q: 'If \\(P(A) = 0.4\\) and \\(P(B) = 0.3\\) and A, B are independent, then \\(P(A \\cap B) =\\)',
        options: ['\\(0.12\\)', '\\(0.70\\)', '\\(0.58\\)', '\\(0.10\\)'],
        answer: 0
      },
      {
        q: '\\(P(A|B) = 0.5\\) and \\(P(A) = 0.5\\). What can you conclude?',
        options: ['A and B are independent', 'A and B are mutually exclusive', '\\(P(B|A) = 0\\)', '\\(A \\subseteq B\\)'],
        answer: 0
      },
      {
        q: 'What does \\(A\'\\) represent in set notation?',
        options: ['The complement of A (not A)', 'A union B', 'A intersection B', 'A subset of B'],
        answer: 0
      },
      {
        q: 'Two mutually exclusive events A and B satisfy:',
        options: ['\\(P(A \\cap B) = 0\\)', '\\(P(A \\cap B) = P(A) \\times P(B)\\)', '\\(P(A|B) = P(A)\\)', '\\(P(A \\cup B) = 0\\)'],
        answer: 0
      },
      {
        q: 'The law of total probability states that \\(P(A) =\\)',
        options: ['\\(P(A|B)P(B) + P(A|B\')P(B\')\\)', '\\(P(A|B) + P(A|B\')\\)', '\\(P(A \\cap B) + P(A \\cap B\')\\)', 'Both A and C above'],
        answer: 0
      },
      {
        q: 'On a tree diagram, to find the probability of following a particular path, you:',
        options: ['Multiply the probabilities along the branches', 'Add the probabilities along the branches', 'Subtract the probabilities', 'Divide by the final branch probability'],
        answer: 0
      },
      {
        q: 'If \\(P(B|A) = 0.6\\) and \\(P(A) = 0.4\\), then \\(P(A \\cap B) =\\)',
        options: ['\\(0.24\\)', '\\(0.667\\)', '\\(0.16\\)', '\\(1.0\\)'],
        answer: 0
      },
      {
        q: 'In a 3-circle Venn diagram (events A, B, C), how many distinct regions are there inside the rectangle?',
        options: ['7', '6', '8', '3'],
        answer: 0
      }
    ],
    amber: [
      {
        q: '\\(P(A) = 0.5\\), \\(P(B) = 0.4\\), \\(P(A \\cup B) = 0.7\\). Find \\(P(A|B)\\).',
        options: ['\\(0.5\\)', '\\(0.7\\)', '\\(0.2\\)', '\\(0.4\\)'],
        answer: 0
      },
      {
        q: 'A bag has 5 red and 3 blue balls. Two drawn without replacement. Find \\(P(\\text{both red})\\).',
        options: ['\\(\\frac{5}{14}\\)', '\\(\\frac{25}{64}\\)', '\\(\\frac{5}{8}\\)', '\\(\\frac{1}{4}\\)'],
        answer: 0
      },
      {
        q: '\\(P(D) = 0.02\\), \\(P(T|D) = 0.98\\), \\(P(T|D\') = 0.05\\). Find \\(P(T)\\) using total probability.',
        options: ['\\(0.0686\\)', '\\(0.0196\\)', '\\(0.049\\)', '\\(0.10\\)'],
        answer: 0
      },
      {
        q: 'Given \\(P(A|B) = 0.3\\), \\(P(B) = 0.5\\), \\(P(A) = 0.2\\). Are A and B independent?',
        options: ['No, because \\(P(A|B) \\neq P(A)\\)', 'Yes, because \\(P(A \\cap B) = 0.15 = 0.3 \\times 0.5\\)', 'Yes, because \\(P(B|A) = 0.5\\)', 'Insufficient information'],
        answer: 0
      },
      {
        q: 'Using Bayes: \\(P(D) = 0.02\\), \\(P(T|D) = 0.98\\), \\(P(T|D\') = 0.05\\). Find \\(P(D|T)\\).',
        options: ['\\(0.286\\)', '\\(0.98\\)', '\\(0.02\\)', '\\(0.50\\)'],
        answer: 0
      },
      {
        q: 'In a class, 60% play sport (S), 40% play music (M), 25% do both. Find \\(P(S|M)\\).',
        options: ['\\(0.625\\)', '\\(0.25\\)', '\\(0.417\\)', '\\(0.40\\)'],
        answer: 0
      },
      {
        q: 'Events A and B are mutually exclusive with \\(P(A) = 0.3\\), \\(P(B) = 0.4\\). Find \\(P(A \\cup B)\\).',
        options: ['\\(0.7\\)', '\\(0.12\\)', '\\(0.58\\)', '\\(1.0\\)'],
        answer: 0
      },
      {
        q: 'A factory has two lines: Line 1 (70% output, 2% defect rate) and Line 2 (30% output, 5% defect rate). Find \\(P(\\text{defective})\\).',
        options: ['\\(0.029\\)', '\\(0.035\\)', '\\(0.020\\)', '\\(0.070\\)'],
        answer: 0
      },
      {
        q: 'If \\(P(A \\cap B) = 0.15\\) and \\(P(B) = 0.25\\), find \\(P(A\\'|B)\\).',
        options: ['\\(0.4\\)', '\\(0.6\\)', '\\(0.75\\)', '\\(0.25\\)'],
        answer: 0
      },
      {
        q: 'Which of the following correctly applies Bayes\\' theorem?',
        options: ['\\(P(B|A) = \\dfrac{P(A|B)P(B)}{P(A)}\\)', '\\(P(B|A) = \\dfrac{P(B)}{P(A|B)}\\)', '\\(P(B|A) = P(A|B) \\cdot P(A)\\)', '\\(P(B|A) = P(A|B)\\)'],
        answer: 0
      },
      {
        q: 'A Venn diagram shows \\(P(A \\cap B \\cap C) = 0.05\\), \\(P(A \\cap B) = 0.15\\). Find \\(P(A \\cap B \\cap C\')\\).',
        options: ['\\(0.10\\)', '\\(0.20\\)', '\\(0.05\\)', '\\(0.15\\)'],
        answer: 0
      },
      {
        q: 'If \\(P(A) = 0.6\\), \\(P(B\\'|A) = 0.3\\), find \\(P(A \\cap B)\\).',
        options: ['\\(0.42\\)', '\\(0.18\\)', '\\(0.30\\)', '\\(0.48\\)'],
        answer: 0
      }
    ],
    red: [
      {
        q: '\\(P(A) = 0.4\\), \\(P(B) = 0.35\\), \\(P(A \\cup B) = 0.58\\). Test whether A and B are independent.',
        options: ['Independent since \\(P(A \\cap B) = P(A) \\times P(B)\\)','Independent since \\(P(A \\cup B) \\neq 0\\)','Cannot be determined from this information','Not independent since \\(P(A \\cap B) = 0.17 \\neq 0.14 = P(A)P(B)\\)'], answer: 3
      },
      {
        q: 'Machine M1 makes 55% of items (1% defective); M2 makes 45% (3% defective). Given item is defective, find \\(P(M2|\\text{defective})\\).',
        options: ['\\(0.711\\)','\\(0.289\\)','\\(0.45\\)','\\(0.03\\)'], answer: 0
      },
      {
        q: '3 events A, B, C are mutually independent with \\(P(A)=0.3\\), \\(P(B)=0.4\\), \\(P(C)=0.5\\). Find \\(P(A \\cup B \\cup C)\\).',
        options: ['\\(0.06\\)','\\(0.94\\)','\\(1.2\\)','\\(0.79\\)'], answer: 3
      },
      {
        q: 'A box has 4 red (R), 3 blue (B), 2 green (G) balls. Two drawn without replacement. Find \\(P(\\text{both different colours})\\).',
        options: ['\\(\\frac{48}{72}\\)','\\(\\frac{29}{72}\\)','\\(\\frac{24}{72}\\)','\\(\\frac{52}{72}\\)'], answer: 3
      },
      {
        q: 'Given \\(P(A|B) = 2P(A|B\')\\), \\(P(B) = 0.6\\), \\(P(A) = 0.44\\). Find \\(P(A|B)\\).',
        options: ['\\(0.30\\)','\\(0.275\\)','\\(0.44\\)','\\(0.55\\)'], answer: 3
      },
      {
        q: 'Using total probability: \\(P(A) = P(A|B_1)P(B_1) + P(A|B_2)P(B_2) + P(A|B_3)P(B_3)\\). This requires \\(B_1, B_2, B_3\\) to be:',
        options: ['All with equal probability','Subsets of A','Mutually exclusive and exhaustive (partition of sample space)','Independent'], answer: 2
      }
    ]
  },

  // ─────────────────────────────────────────────
  // S8: NORMAL DISTRIBUTION
  // ─────────────────────────────────────────────
  S8: {
    green: [
      {
        q: 'If \\(X \\sim N(50, 25)\\), what is the standard deviation of X?',
        options: ['\\(5\\)', '\\(25\\)', '\\(50\\)', '\\(\\sqrt{50}\\)'],
        answer: 0
      },
      {
        q: 'The standard normal distribution is:',
        options: ['\\(Z \\sim N(0, 1)\\)', '\\(Z \\sim N(1, 0)\\)', '\\(Z \\sim N(\\mu, \\sigma)\\)', '\\(Z \\sim N(0, \\sigma^2)\\)'],
        answer: 0
      },
      {
        q: 'To standardise \\(X \\sim N(\\mu, \\sigma^2)\\), you use:',
        options: ['\\(Z = \\dfrac{X - \\mu}{\\sigma}\\)', '\\(Z = \\dfrac{X - \\sigma}{\\mu}\\)', '\\(Z = \\dfrac{X}{\\mu}\\)', '\\(Z = X - \\mu\\)'],
        answer: 0
      },
      {
        q: 'For a normal distribution, \\(P(X > a) =\\)',
        options: ['\\(1 - P(X < a)\\)', '\\(P(X < a)\\)', '\\(P(X < -a)\\)', '\\(P(X = a)\\)'],
        answer: 0
      },
      {
        q: 'A normal distribution is symmetric about its:',
        options: ['Mean', 'Standard deviation', 'Variance', 'Mode only'],
        answer: 0
      },
      {
        q: 'For \\(X \\sim B(200, 0.5)\\), which normal approximation is correct?',
        options: ['\\(X \\approx N(100, 50)\\)', '\\(X \\approx N(100, 0.5)\\)', '\\(X \\approx N(0.5, 200)\\)', '\\(X \\approx N(50, 100)\\)'],
        answer: 0
      },
      {
        q: 'The continuity correction for \\(P(X \\leq 30)\\) where X is binomial approximated by normal Y is:',
        options: ['\\(P(Y < 30.5)\\)', '\\(P(Y < 30)\\)', '\\(P(Y < 29.5)\\)', '\\(P(Y \\leq 30)\\)'],
        answer: 0
      },
      {
        q: '\\(P(Z < -1.5)\\) equals:',
        options: ['\\(1 - \\Phi(1.5)\\)', '\\(\\Phi(1.5)\\)', '\\(1 - \\Phi(-1.5)\\)', '\\(\\Phi(-1.5) - 1\\)'],
        answer: 0
      },
      {
        q: 'For what reason is the normal approximation to the binomial most accurate?',
        options: ['When \\(p\\) is close to 0.5 and \\(n\\) is large', 'When \\(p\\) is close to 0 and \\(n\\) is small', 'When \\(p = 1\\)', 'When \\(n < 30\\)'],
        answer: 0
      },
      {
        q: 'If \\(P(X < a) = 0.8413\\) and \\(X \\sim N(0,1)\\), then \\(a =\\)',
        options: ['\\(1\\)', '\\(-1\\)', '\\(0.8413\\)', '\\(2\\)'],
        answer: 0
      },
      {
        q: '\\(P(a < X < b) =\\)',
        options: ['\\(P(X < b) - P(X < a)\\)', '\\(P(X < b) + P(X < a)\\)', '\\(P(X < b) \\times P(X < a)\\)', '\\(P(X > a) - P(X > b)\\)'],
        answer: 0
      },
      {
        q: 'The total area under a normal distribution curve is:',
        options: ['\\(1\\)', '\\(0\\)', '\\(\\infty\\)', '\\(\\pi\\)'],
        answer: 0
      }
    ],
    amber: [
      {
        q: '\\(X \\sim N(40, 36)\\). Find \\(P(X < 46)\\). [\\(\\Phi(1) = 0.8413\\)]',
        options: ['\\(0.8413\\)', '\\(0.1587\\)', '\\(0.9772\\)', '\\(0.6915\\)'],
        answer: 0
      },
      {
        q: '\\(X \\sim N(100, 64)\\). Find \\(P(92 < X < 108)\\). [\\(\\Phi(1) = 0.8413\\)]',
        options: ['\\(0.6827\\)', '\\(0.3174\\)', '\\(0.8413\\)', '\\(0.9545\\)'],
        answer: 0
      },
      {
        q: '\\(X \\sim N(\\mu, 9)\\). \\(P(X < 25) = 0.9772\\). Find \\(\\mu\\). [\\(\\Phi(2) = 0.9772\\)]',
        options: ['\\(19\\)', '\\(21\\)', '\\(31\\)', '\\(23\\)'],
        answer: 0
      },
      {
        q: '\\(X \\sim N(50, \\sigma^2)\\). \\(P(X > 62) = 0.0668\\). Find \\(\\sigma\\). [\\(\\Phi(1.5) = 0.9332\\)]',
        options: ['\\(8\\)', '\\(6\\)', '\\(12\\)', '\\(4\\)'],
        answer: 0
      },
      {
        q: 'Find the value \\(a\\) such that \\(P(Z > a) = 0.05\\).',
        options: ['\\(1.645\\)', '\\(-1.645\\)', '\\(1.960\\)', '\\(0.05\\)'],
        answer: 0
      },
      {
        q: '\\(X \\sim B(80, 0.45)\\). Using normal approximation with continuity correction, find \\(P(X \\geq 40)\\).',
        options: ['\\(P\\left(Y > 39.5\\right)\\) where \\(Y \\sim N(36, 19.8)\\)', '\\(P(Y > 40)\\)', '\\(P(Y < 39.5)\\)', '\\(P(Y > 40.5)\\)'],
        answer: 0
      },
      {
        q: '\\(X \\sim N(\\mu, \\sigma^2)\\). \\(P(X < 20) = 0.2\\) and \\(P(X < 30) = 0.8\\). By symmetry, what is \\(\\mu\\)?',
        options: ['\\(25\\)', '\\(20\\)', '\\(30\\)', '\\(28\\)'],
        answer: 0
      },
      {
        q: '\\(X \\sim N(60, 100)\\). Find \\(P(X > 75)\\). [\\(\\Phi(1.5) = 0.9332\\)]',
        options: ['\\(0.0668\\)', '\\(0.9332\\)', '\\(0.3085\\)', '\\(0.1587\\)'],
        answer: 0
      },
      {
        q: 'For a hypothesis test \\(H_0: \\mu = 50\\), \\(H_1: \\mu > 50\\), the critical region at 5% (one-tailed) has z-value:',
        options: ['\\(z > 1.645\\)', '\\(z > 1.960\\)', '\\(z < -1.645\\)', '\\(z > 2.326\\)'],
        answer: 0
      },
      {
        q: 'Which conditions justify a normal approximation to \\(B(n,p)\\)?',
        options: ['Both \\(np > 5\\) and \\(n(1-p) > 5\\)', 'Only \\(n > 30\\)', 'Only \\(p > 0.5\\)', '\\(n < 10\\) and \\(p\\) close to 0'],
        answer: 0
      },
      {
        q: '\\(P(X < 45) = 0.3085\\) for \\(X \\sim N(50, \\sigma^2)\\). Find \\(\\sigma\\). [\\(\\Phi(0.5) = 0.6915\\)]',
        options: ['\\(10\\)', '\\(5\\)', '\\(2.5\\)', '\\(20\\)'],
        answer: 0
      },
      {
        q: 'A continuous correction changes \\(P(X = 42)\\) for binomial X to which normal probability?',
        options: ['\\(P(41.5 < Y < 42.5)\\)', '\\(P(Y = 42)\\)', '\\(P(Y < 42.5)\\)', '\\(P(Y > 41.5)\\)'],
        answer: 0
      }
    ],
    red: [
      {
        q: '\\(X \\sim N(\\mu, \\sigma^2)\\). \\(P(X < 18) = 0.1\\) and \\(P(X < 30) = 0.85\\). Find \\(\\mu\\) and \\(\\sigma\\). [\\(z_{0.1} = -1.282\\), \\(z_{0.85} = 1.036\\)]',
        options: ['\\(\\mu \\approx 22.3, \\sigma \\approx 3.7\\)','\\(\\mu = 25, \\sigma = 5\\)','\\(\\mu = 24, \\sigma = 6\\)','\\(\\mu \\approx 24.7, \\sigma \\approx 5.24\\)'], answer: 3
      },
      {
        q: '\\(X \\sim B(150, 0.3)\\). Using normal approximation, find \\(P(40 \\leq X \\leq 50)\\) (set up the z-scores correctly).',
        options: ['\\(P\\left(\\frac{40-45}{\\sqrt{31.5}} < Z < \\frac{50-45}{\\sqrt{31.5}}\\right)\\)','\\(P\\left(\\frac{40.5-45}{\\sqrt{31.5}} < Z < \\frac{49.5-45}{\\sqrt{31.5}}\\right)\\)','\\(P\\left(\\frac{40-45}{5.5} < Z < \\frac{50-45}{5.5}\\right)\\)','\\(P\\left(\\frac{39.5-45}{\\sqrt{31.5}} < Z < \\frac{50.5-45}{\\sqrt{31.5}}\\right)\\)'], answer: 3
      },
      {
        q: 'A machine fills bottles. Volume \\(X \\sim N(500, 25)\\). A bottle is rejected if it contains less than 493 ml. What proportion of bottles are rejected? [\\(\\Phi(1.4)=0.9192\\)]',
        options: ['\\(0.9192\\)','\\(0.1587\\)','\\(0.0808\\)','\\(0.9772\\)'], answer: 2
      },
      {
        q: 'For \\(X \\sim N(\\mu, \\sigma^2)\\), if \\(P(X < a) = 1 - P(X < a)\\), then \\(a =\\)',
        options: ['\\(0\\)','\\(\\sigma\\)','\\(\\mu + \\sigma\\)','\\(\\mu\\)'], answer: 3
      },
      {
        q: 'Test \\(H_0: \\mu = 200\\) vs \\(H_1: \\mu \\neq 200\\) at 5% level. Sample of \\(n=25\\), \\(\\bar{x} = 194\\), \\(\\sigma = 15\\). Is \\(H_0\\) rejected?',
        options: ['Yes; z = -2 is in critical region since \\(|{-2}| > 1.645\\)','No; \\(z = -2\\), critical value \\(\\pm 1.960\\), so \\(|z| > 1.960\\), reject \\(H_0\\)','No; \\(z = -2\\) and critical value is \\(\\pm 1.960\\), do not reject','Yes; any negative z-value leads to rejection'], answer: 1
      },
      {
        q: 'IQ scores follow \\(N(100, 225)\\). What percentage of people have IQ above 130? [\\(\\Phi(2) = 0.9772\\)]',
        options: ['\\(97.72\\%\\)','\\(5\\%\\)','\\(15.87\\%\\)','\\(2.28\\%\\)'], answer: 3
      }
    ]
  },

  // ─────────────────────────────────────────────
  // M1: MODELLING IN MECHANICS
  // ─────────────────────────────────────────────
  M1: {
    green: [
      {
        q: 'In mechanics, a "particle" model assumes:',
        options: ['Mass is concentrated at a point; no rotational effects', 'The object has no mass', 'The object is a rigid body', 'The surface is smooth'],
        answer: 0
      },
      {
        q: 'Newton\'s Second Law states:',
        options: ['\\(F = ma\\)', '\\(F = mv\\)', '\\(F = \\frac{m}{a}\\)', '\\(F = m + a\\)'],
        answer: 0
      },
      {
        q: 'The weight of a 4 kg object (using \\(g = 9.8 \\text{ m s}^{-2}\\)) is:',
        options: ['\\(39.2 \\text{ N}\\)', '\\(4 \\text{ N}\\)', '\\(9.8 \\text{ N}\\)', '\\(4.9 \\text{ N}\\)'],
        answer: 0
      },
      {
        q: 'A "smooth" surface means:',
        options: ['No friction acts between the surface and the object', 'The surface is horizontal', 'The object slides freely regardless of friction', 'The normal reaction is zero'],
        answer: 0
      },
      {
        q: 'On a free body diagram, which forces act on a book resting on a table?',
        options: ['Weight (downward) and normal reaction (upward)', 'Weight only', 'Normal reaction only', 'Weight, normal reaction, and friction'],
        answer: 0
      },
      {
        q: 'An "inextensible" string means:',
        options: ['The string does not stretch; objects at each end have the same acceleration', 'The string has no mass', 'The string can break', 'The tension varies along the string'],
        answer: 0
      },
      {
        q: 'Which of the following is a vector quantity?',
        options: ['Velocity', 'Speed', 'Mass', 'Distance'],
        answer: 0
      },
      {
        q: 'SI unit of force is:',
        options: ['Newton (N)', 'Kilogram (kg)', 'Joule (J)', 'Pascal (Pa)'],
        answer: 0
      },
      {
        q: 'Newton\'s First Law states an object at rest remains at rest unless:',
        options: ['A resultant force acts on it', 'It has zero mass', 'It is on a smooth surface', 'Friction is present'],
        answer: 0
      },
      {
        q: 'Friction force on a sliding object relates to the normal reaction by:',
        options: ['\\(F = \\mu R\\)', '\\(F = \\mu mg\\)', '\\(F = \\mu / R\\)', '\\(F = R/\\mu\\)'],
        answer: 0
      },
      {
        q: 'A "light" string or pulley means:',
        options: ['The mass of the string/pulley is negligible', 'The string is short', 'The string is horizontal', 'The tension is zero'],
        answer: 0
      },
      {
        q: 'Newton\'s Third Law says that if A exerts a force on B, then B exerts:',
        options: ['An equal and opposite force on A', 'The same force in the same direction on A', 'A force of twice the magnitude on A', 'No force on A'],
        answer: 0
      }
    ],
    amber: [
      {
        q: 'A 6 kg box is pushed along a smooth horizontal surface by a 30 N force. Find its acceleration.',
        options: ['\\(5 \\text{ m s}^{-2}\\)', '\\(0.2 \\text{ m s}^{-2}\\)', '\\(180 \\text{ m s}^{-2}\\)', '\\(36 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'A 5 kg particle rests on a smooth slope at 30° to the horizontal. The normal reaction is:',
        options: ['\\(5g\\cos 30° \\approx 42.4 \\text{ N}\\)', '\\(5g\\sin 30° = 24.5 \\text{ N}\\)', '\\(5g = 49 \\text{ N}\\)', '\\(5g\\cos 60° \\approx 24.5 \\text{ N}\\)'],
        answer: 0
      },
      {
        q: 'Resolve parallel to a slope of angle \\(\\theta\\) for a particle moving up the slope with acceleration \\(a\\). Which equation is correct (friction \\(F\\) acting down, push \\(P\\) up)?',
        options: ['\\(P - mg\\sin\\theta - F = ma\\)', '\\(P + mg\\sin\\theta - F = ma\\)', '\\(P - mg\\cos\\theta - F = ma\\)', '\\(P - mg\\sin\\theta + F = ma\\)'],
        answer: 0
      },
      {
        q: 'A 3 kg object experiences a resultant force of 12 N. Find the acceleration.',
        options: ['\\(4 \\text{ m s}^{-2}\\)', '\\(36 \\text{ m s}^{-2}\\)', '\\(0.25 \\text{ m s}^{-2}\\)', '\\(9 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'A horizontal force of 25 N acts on a 5 kg particle on a rough horizontal surface (\\(\\mu = 0.3\\)). Find the acceleration.',
        options: ['\\(2.06 \\text{ m s}^{-2}\\)', '\\(5 \\text{ m s}^{-2}\\)', '\\(2.94 \\text{ m s}^{-2}\\)', '\\(1.47 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'Two particles of 4 kg and 6 kg are connected by a light inextensible string over a smooth light pulley. What is the acceleration of the system?',
        options: ['\\(1.96 \\text{ m s}^{-2}\\)', '\\(9.8 \\text{ m s}^{-2}\\)', '\\(4.9 \\text{ m s}^{-2}\\)', '\\(0.98 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'A car of mass 1200 kg decelerates from 20 m/s to rest. If deceleration is 4 m/s², find the braking force.',
        options: ['\\(4800 \\text{ N}\\)', '\\(300 \\text{ N}\\)', '\\(24000 \\text{ N}\\)', '\\(1200 \\text{ N}\\)'],
        answer: 0
      },
      {
        q: 'Which assumption is made when modelling a ball on a string as circular motion?',
        options: ['The string is light and inextensible; the ball is a particle', 'The surface is smooth', 'The ball is a rigid body', 'Air resistance is included'],
        answer: 0
      },
      {
        q: 'A particle on a smooth inclined plane at angle \\(\\theta\\). The component of weight along the plane (taking down as positive) is:',
        options: ['\\(mg\\sin\\theta\\)', '\\(mg\\cos\\theta\\)', '\\(mg\\tan\\theta\\)', '\\(mg\\)'],
        answer: 0
      },
      {
        q: 'A particle in equilibrium on a rough horizontal surface has a horizontal force of 8 N applied. If mass is 4 kg, what is the minimum \\(\\mu\\) for equilibrium?',
        options: ['\\(0.204\\)', '\\(0.8\\)', '\\(0.4\\)', '\\(2\\)'],
        answer: 0
      },
      {
        q: 'For a particle on a rough surface, the condition for sliding to begin is:',
        options: ['Applied force \\(> \\mu R\\)', 'Applied force \\(= mg\\)', 'Applied force \\(< \\mu R\\)', '\\(\\mu > 1\\)'],
        answer: 0
      },
      {
        q: 'When modelling a see-saw, which model is most appropriate for the plank?',
        options: ['Uniform rod (rigid body with mass at midpoint)', 'Particle', 'Light rod', 'Smooth surface'],
        answer: 0
      }
    ],
    red: [
      {
        q: 'A 10 kg block on a rough slope at 40° is on the point of sliding. Find \\(\\mu\\). (\\(g = 9.8\\))',
        options: ['\\(\\mu = \\tan 40° \\approx 0.839\\)','\\(\\mu = \\cos 40° \\approx 0.766\\)','\\(\\mu = 0.5\\)','\\(\\mu = \\sin 40° \\approx 0.643\\)'], answer: 0
      },
      {
        q: 'A 4 kg particle is connected to a 7 kg particle by a string over a smooth pulley. Find the tension in the string.',
        options: ['\\(24.9 \\text{ N}\\)','\\(39.2 \\text{ N}\\)','\\(68.6 \\text{ N}\\)','\\(50.9 \\text{ N}\\)'], answer: 3
      },
      {
        q: 'A particle of mass 5 kg rests in equilibrium on a rough plane at 25° under a force of P N up the slope. \\(\\mu = 0.4\\). Find P.',
        options: ['\\(P = 5g\\sin25° - 0.4 \\times 5g\\cos25° \\approx 2.54 \\text{ N}\\)','\\(P = 5g\\sin25° + 0.4 \\times 5g\\cos25° \\approx 38.5 \\text{ N}\\)','\\(P = 5g\\cos25° \\approx 44.4 \\text{ N}\\)','\\(P = 0.4 \\times 5g \\approx 19.6 \\text{ N}\\)'], answer: 0
      },
      {
        q: 'A car engine exerts 3000 N driving force. Mass of car = 900 kg. Resistance = 600 N. Find acceleration.',
        options: ['\\(3.33 \\text{ m s}^{-2}\\)','\\(2.33 \\text{ m s}^{-2}\\)','\\(2.67 \\text{ m s}^{-2}\\)','\\(4.0 \\text{ m s}^{-2}\\)'], answer: 2
      },
      {
        q: 'Masses 3 kg (on rough table, \\(\\mu=0.25\\)) and 5 kg (hanging) connected by string over pulley. Find acceleration.',
        options: ['\\(4.9 \\text{ m s}^{-2}\\)','\\(7.35 \\text{ m s}^{-2}\\)','\\(5.15 \\text{ m s}^{-2}\\)','\\(6.125 \\text{ m s}^{-2}\\)'], answer: 2
      },
      {
        q: 'State the assumption that makes the tension the same throughout a string over a pulley.',
        options: ['The string is elastic','The string is light and inextensible; the pulley is smooth and light','The pulley is heavy','The surfaces are rough'], answer: 1
      }
    ]
  },

  // ─────────────────────────────────────────────
  // M2: KINEMATICS — SUVAT
  // ─────────────────────────────────────────────
  M2: {
    green: [
      {
        q: 'In SUVAT, \'s\' represents:',
        options: ['Displacement', 'Speed', 'Sum', 'Slope'],
        answer: 0
      },
      {
        q: 'Which SUVAT equation does NOT contain \'s\'?',
        options: ['\\(v = u + at\\)', '\\(s = ut + \\frac{1}{2}at^2\\)', '\\(v^2 = u^2 + 2as\\)', '\\(s = \\frac{1}{2}(u+v)t\\)'],
        answer: 0
      },
      {
        q: 'A car starts from rest and accelerates at 3 m/s² for 10 s. Its final velocity is:',
        options: ['\\(30 \\text{ m s}^{-1}\\)', '\\(3 \\text{ m s}^{-1}\\)', '\\(13 \\text{ m s}^{-1}\\)', '\\(300 \\text{ m s}^{-1}\\)'],
        answer: 0
      },
      {
        q: 'On a velocity-time graph, the gradient gives:',
        options: ['Acceleration', 'Displacement', 'Speed', 'Distance'],
        answer: 0
      },
      {
        q: 'On a displacement-time graph, a horizontal line indicates:',
        options: ['Zero velocity (object at rest)', 'Constant acceleration', 'Constant velocity', 'Negative acceleration'],
        answer: 0
      },
      {
        q: 'Taking upward as positive, the acceleration due to gravity for a projectile is:',
        options: ['\\(-9.8 \\text{ m s}^{-2}\\)', '\\(+9.8 \\text{ m s}^{-2}\\)', '\\(-10 \\text{ m s}^{-2}\\)', '\\(0 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'A ball thrown upward with \\(u = 20 \\text{ m s}^{-1}\\) has \\(v = 0\\) at maximum height. Using \\(a = -9.8\\), the time to reach max height is:',
        options: ['\\(\\approx 2.04 \\text{ s}\\)', '\\(\\approx 4.08 \\text{ s}\\)', '\\(\\approx 20 \\text{ s}\\)', '\\(\\approx 1.02 \\text{ s}\\)'],
        answer: 0
      },
      {
        q: 'The area under a velocity-time graph represents:',
        options: ['Displacement', 'Acceleration', 'Velocity', 'Force'],
        answer: 0
      },
      {
        q: 'A particle starts from rest. Using \\(s = ut + \\frac{1}{2}at^2\\) with \\(u=0\\), \\(a=4\\), \\(t=3\\), find s.',
        options: ['\\(18 \\text{ m}\\)', '\\(12 \\text{ m}\\)', '\\(36 \\text{ m}\\)', '\\(6 \\text{ m}\\)'],
        answer: 0
      },
      {
        q: 'SUVAT equations require which condition?',
        options: ['Constant acceleration', 'Zero initial velocity', 'Horizontal motion only', 'No external forces'],
        answer: 0
      },
      {
        q: 'For connected particles over a smooth pulley, which statement is true?',
        options: ['Both particles have the same magnitude of acceleration', 'Each particle has a different acceleration', 'Tension differs on each side of the pulley', 'Heavier mass accelerates more slowly'],
        answer: 0
      },
      {
        q: 'Which equation is used when \'t\' is unknown and you need to find \'v\' given \\(u\\), \\(a\\), \\(s\\)?',
        options: ['\\(v^2 = u^2 + 2as\\)', '\\(v = u + at\\)', '\\(s = ut + \\frac{1}{2}at^2\\)', '\\(s = \\frac{1}{2}(u+v)t\\)'],
        answer: 0
      }
    ],
    amber: [
      {
        q: 'A particle decelerates from 24 m/s to rest over 60 m. Find the deceleration.',
        options: ['\\(4.8 \\text{ m s}^{-2}\\)', '\\(0.4 \\text{ m s}^{-2}\\)', '\\(9.6 \\text{ m s}^{-2}\\)', '\\(2.4 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'A stone is dropped from rest off a cliff of height 80 m. How long does it take to reach the ground? (\\(g = 9.8\\))',
        options: ['\\(\\approx 4.04 \\text{ s}\\)', '\\(\\approx 2.86 \\text{ s}\\)', '\\(\\approx 8.16 \\text{ s}\\)', '\\(\\approx 16.3 \\text{ s}\\)'],
        answer: 0
      },
      {
        q: 'A ball is thrown upward at 14.7 m/s from the ground. Find the maximum height. (\\(g = 9.8\\))',
        options: ['\\(11.025 \\text{ m}\\)', '\\(22.05 \\text{ m}\\)', '\\(7.35 \\text{ m}\\)', '\\(14.7 \\text{ m}\\)'],
        answer: 0
      },
      {
        q: 'A train accelerates at 0.5 m/s² for 40 s from rest, then travels at constant velocity. What distance is covered in the acceleration phase?',
        options: ['\\(400 \\text{ m}\\)', '\\(200 \\text{ m}\\)', '\\(800 \\text{ m}\\)', '\\(20 \\text{ m}\\)'],
        answer: 0
      },
      {
        q: 'From a v-t graph, a trapezoid shape is formed with parallel sides 10 m/s and 20 m/s, and width 8 s. What is the displacement?',
        options: ['\\(120 \\text{ m}\\)', '\\(80 \\text{ m}\\)', '\\(160 \\text{ m}\\)', '\\(60 \\text{ m}\\)'],
        answer: 0
      },
      {
        q: 'A particle has initial velocity 6 m/s and decelerates at 2 m/s². When does it return to its starting position?',
        options: ['\\(t = 6 \\text{ s}\\)', '\\(t = 3 \\text{ s}\\)', '\\(t = 2 \\text{ s}\\)', '\\(t = 9 \\text{ s}\\)'],
        answer: 0
      },
      {
        q: 'Masses of 3 kg and 5 kg hang from a pulley (light, smooth string). Find the tension in the string.',
        options: ['\\(36.75 \\text{ N}\\)', '\\(49 \\text{ N}\\)', '\\(29.4 \\text{ N}\\)', '\\(19.6 \\text{ N}\\)'],
        answer: 0
      },
      {
        q: 'A ball is thrown horizontally at 12 m/s from a height of 45 m. How long does it take to hit the ground? (\\(g=9.8\\))',
        options: ['\\(\\approx 3.03 \\text{ s}\\)', '\\(\\approx 1.5 \\text{ s}\\)', '\\(\\approx 6.06 \\text{ s}\\)', '\\(\\approx 2.5 \\text{ s}\\)'],
        answer: 0
      },
      {
        q: 'A particle moves with constant velocity. Which graph shows this?',
        options: ['A straight line on a v-t graph with zero gradient (horizontal line)', 'A straight line with positive gradient on a v-t graph', 'A curved line on an s-t graph', 'A straight line with gradient on a s-t graph'],
        answer: 0
      },
      {
        q: 'A particle travels 200 m in the first 10 s and 300 m in the next 10 s of constant acceleration from rest. Find the acceleration.',
        options: ['\\(2 \\text{ m s}^{-2}\\)', '\\(4 \\text{ m s}^{-2}\\)', '\\(1 \\text{ m s}^{-2}\\)', '\\(3 \\text{ m s}^{-2}\\)'],
        answer: 0
      },
      {
        q: 'Object A: \\(u=0\\), \\(a=3\\), \\(t=5\\). Object B: \\(u=10\\), \\(a=0\\), \\(t=5\\). Which travels further?',
        options: ['A travels 37.5 m; B travels 50 m; so B travels further', 'A travels 75 m; B travels 50 m; so A travels further', 'Both travel the same distance', 'B travels 10 m; A travels 37.5 m; so A travels further'],
        answer: 0
      },
      {
        q: 'A ball is thrown upward. It is at height 20 m at \\(t = 1\\) s and \\(t = 3\\) s. Find the initial velocity. (\\(g = 9.8\\))',
        options: ['\\(u = 24.6 \\text{ m s}^{-1}\\)', '\\(u = 14.7 \\text{ m s}^{-1}\\)', '\\(u = 20 \\text{ m s}^{-1}\\)', '\\(u = 19.6 \\text{ m s}^{-1}\\)'],
        answer: 0
      }
    ],
    red: [
      {
        q: 'A particle is projected from a height of 30 m with upward velocity 10 m/s. Find its velocity when it hits the ground. (\\(g=9.8\\))',
        options: ['\\(\\approx 24.2 \\text{ m s}^{-1}\\) downward','\\(\\approx 27.1 \\text{ m s}^{-1}\\) downward','\\(\\approx 10 \\text{ m s}^{-1}\\) downward','\\(\\approx 19.8 \\text{ m s}^{-1}\\) downward'], answer: 1
      },
      {
        q: 'A particle moves with \\(s = 3t^2 - 12t + 9\\) (metres, seconds). At what time(s) is the particle at rest?',
        options: ['\\(t = 2 \\text{ s}\\)','\\(t = 3 \\text{ s}\\) only','\\(t = 1 \\text{ s}\\) and \\(t = 3 \\text{ s}\\)','\\(t = 0 \\text{ s}\\) and \\(t = 4 \\text{ s}\\)'], answer: 0
      },
      {
        q: 'Train A leaves station at rest with acceleration 0.4 m/s². Train B passes the same point 30 s later at constant 12 m/s. When and where do they meet?',
        options: ['\\(t \\approx 60 \\text{ s after A departs; } s \\approx 720 \\text{ m}\\)','\\(t = 45 \\text{ s after A departs; } s = 405 \\text{ m}\\)','\\(t \\approx 30 \\text{ s after A departs; } s = 360 \\text{ m}\\)','\\(t \\approx 90 \\text{ s after A departs; } s = 1080 \\text{ m}\\)'], answer: 0
      },
      {
        q: 'A particle decelerates at 2.5 m/s² and has \\(v = 0\\) after 8 s. Find its initial velocity and total displacement.',
        options: ['\\(u = 25 \\text{ m s}^{-1}\\), \\(s = 100 \\text{ m}\\)','\\(u = 20 \\text{ m s}^{-1}\\), \\(s = 160 \\text{ m}\\)','\\(u = 10 \\text{ m s}^{-1}\\), \\(s = 40 \\text{ m}\\)','\\(u = 20 \\text{ m s}^{-1}\\), \\(s = 80 \\text{ m}\\)'], answer: 3
      },
      {
        q: 'Two particles P and Q are at positions 0 and 80 m respectively on the same line. P moves at 6 m/s toward Q; Q moves at 2 m/s away. How long until they meet?',
        options: ['\\(10 \\text{ s}\\)','\\(20 \\text{ s}\\)','\\(16 \\text{ s}\\)','\\(40 \\text{ s}\\)'], answer: 1
      },
      {
        q: 'A vehicle accelerates from rest for \\(t_1\\) seconds to top speed \\(V\\), travels at \\(V\\) for 120 s, then decelerates uniformly to rest in 40 s. Total distance 3600 m; total time 200 s. Find \\(V\\) and \\(t_1\\).',
        options: ['\\(V = 24 \\text{ m s}^{-1}\\), \\(t_1 = 40 \\text{ s}\\)','\\(V = 20 \\text{ m s}^{-1}\\), \\(t_1 = 40 \\text{ s}\\)','\\(V = 18 \\text{ m s}^{-1}\\), \\(t_1 = 40 \\text{ s}\\)','\\(V = 20 \\text{ m s}^{-1}\\), \\(t_1 = 60 \\text{ s}\\)'], answer: 1
      }
    ]
  }

};
