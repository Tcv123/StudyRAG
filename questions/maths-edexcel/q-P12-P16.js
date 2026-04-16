// Edexcel A-Level Maths Year 2 Pure — MCQ Bank: P12–P16
// Format: { q, options: [correct, wrong1, wrong2, wrong3], answer: 0 }
// Tiers: green (recall), amber (multi-step), red (A-grade)

const EDEXCEL_MCQ_P12_P16 = [

  // ─── P12: Algebraic Methods ───────────────────────────────────────────

  // GREEN (12)
  {
    tier: 'green',
    topic: 'P12',
    q: 'According to the Factor Theorem, \\(f(a) = 0\\) implies which of the following?',
    options: ['\\((x - a)\\) is a factor of \\(f(x)\\)', '\\((x + a)\\) is a factor of \\(f(x)\\)', '\\(f(x)\\) has no real roots', '\\(a\\) is the remainder when dividing by \\(x\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'What is the remainder when \\(f(x) = x^3 - 2x + 5\\) is divided by \\((x - 1)\\)?',
    options: ['4', '5', '2', '−2'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'Which partial fraction form is correct for \\(\\dfrac{3x + 1}{(x-1)(x+2)}\\)?',
    options: ['\\(\\dfrac{A}{x-1} + \\dfrac{B}{x+2}\\)', '\\(\\dfrac{A}{(x-1)(x+2)}\\)', '\\(\\dfrac{Ax+B}{x-1} + \\dfrac{C}{x+2}\\)', '\\(\\dfrac{A}{x-1} + \\dfrac{Bx+C}{x+2}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'The partial fraction decomposition of \\(\\dfrac{f(x)}{(ax+b)^2}\\) has the form:',
    options: ['\\(\\dfrac{A}{ax+b} + \\dfrac{B}{(ax+b)^2}\\)', '\\(\\dfrac{A}{ax+b} + \\dfrac{B}{ax+b}\\)', '\\(\\dfrac{Ax+B}{(ax+b)^2}\\)', '\\(\\dfrac{A}{(ax+b)^2}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'In proof by contradiction, the first step is to:',
    options: ['Assume the negation of the statement to be proved', 'Assume the statement is true', 'Find a counterexample', 'Prove a simpler related result'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'Is \\(\\dfrac{x^3 + 2x}{x^2 - 1}\\) a proper or improper fraction?',
    options: ['Improper, because degree of numerator \\(\\geq\\) degree of denominator', 'Proper, because the numerator has more terms', 'Proper, because \\(x^3\\) divides evenly', 'Improper only if the denominator has repeated factors'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'When dividing \\(f(x)\\) by \\((2x - 1)\\), the Remainder Theorem gives the remainder as:',
    options: ['\\(f\\!\\left(\\frac{1}{2}\\right)\\)', '\\(f(2)\\)', '\\(f(-1)\\)', '\\(f(1)\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'Which is a factor of \\(f(x) = x^3 - 6x^2 + 11x - 6\\)?',
    options: ['\\((x - 1)\\)', '\\((x + 1)\\)', '\\((x + 2)\\)', '\\((x - 4)\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'What contradiction arises in proving \\(\\sqrt{2}\\) is irrational (assuming it equals \\(p/q\\) in lowest terms)?',
    options: ['Both \\(p\\) and \\(q\\) must be even, contradicting \\(\\gcd(p,q)=1\\)', '\\(p^2 = 2q\\) has no integer solution', '\\(\\sqrt{2}\\) cannot be written as a fraction', '\\(p\\) and \\(q\\) must both be odd'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'The degree of the remainder when dividing by a linear factor must be:',
    options: ['0 (a constant)', '1', 'Less than the divisor degree — 1', 'Equal to the numerator degree'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'Algebraic long division of \\(x^3 + 3x^2 - x + 2\\) by \\((x-1)\\) gives a remainder of:',
    options: ['5', '4', '3', '1'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P12',
    q: 'For the partial fraction \\(\\dfrac{5}{(x+1)(x-4)}\\), the value of \\(A\\) in \\(\\dfrac{A}{x+1} + \\dfrac{B}{x-4}\\) is:',
    options: ['\\(-1\\)', '1', '5', '\\(-5\\)'],
    answer: 0
  },

  // AMBER (12)
  {
    tier: 'amber',
    topic: 'P12',
    q: 'Given \\(f(x) = 2x^3 - 3x^2 - 11x + 6\\), which linear factor can be confirmed by the Factor Theorem, and what is the fully factorised form?',
    options: ['\\((x-3)(2x+1)(x-2)\\) — verified by \\(f(3)=0\\)', '\\((x+3)(x-1)(2x-2)\\)', '\\((x-2)(x+2)(2x-3)\\)', '\\((2x-1)(x-3)(x+2)\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'Express \\(\\dfrac{x^2 + 5x + 3}{(x+1)(x+2)}\\) in partial fractions. What preliminary step is needed?',
    options: ['Polynomial division, since the fraction is improper', 'Multiply numerator and denominator by \\((x+1)\\)', 'No preliminary step — substitute directly', 'Complete the square on the numerator'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'When \\(x^3 + ax^2 - x + b\\) is divided by \\((x-2)\\) the remainder is 9, and \\((x+1)\\) is a factor. Find \\(a + b\\).',
    options: ['3', '5', '−1', '7'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'The expression \\(\\dfrac{6x^2 + 5x - 6}{(3x-2)(2x+3)}\\) simplifies to partial fractions. What is the sum \\(A + B\\)?',
    options: ['2', '3', '1', '0'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'In the proof that there are infinitely many primes, the key is to consider \\(N = p_1 p_2 \\cdots p_n + 1\\). Why does this lead to a contradiction?',
    options: ['\\(N\\) has a prime factor not in the list \\(\\{p_1,\\ldots,p_n\\}\\)', '\\(N\\) itself must be prime', '\\(N\\) is divisible by all primes in the list', '\\(N\\) cannot be factored'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: '\\(f(x) = x^3 + px^2 + qx - 10\\) has factors \\((x+2)\\) and \\((x-1)\\). Find \\(p\\).',
    options: ['4', '3', '−2', '5'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'Dividing \\(2x^3 - 5x^2 + x + 2\\) by \\((x - 2)\\) gives quotient:',
    options: ['\\(2x^2 - x - 1\\)', '\\(2x^2 + x + 1\\)', '\\(2x^2 - 3x - 1\\)', '\\(2x^2 - x + 1\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'Express \\(\\dfrac{3x}{(x-1)^2(x+2)}\\) as partial fractions. How many constants are needed?',
    options: ['3 — one for each distinct factor including the repeated one', '2', '4', '1'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'The equation \\(x^3 - 7x - 6 = 0\\) has three integer roots. What are they?',
    options: ['\\(-1, -2, 3\\)', '\\(1, 2, -3\\)', '\\(-1, 2, 3\\)', '\\(1, -2, -3\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'A student writes \\(\\dfrac{4x^2+3}{(x^2-1)} \\equiv \\dfrac{A}{x-1}+\\dfrac{B}{x+1}\\). Is this correct?',
    options: ['No — the fraction is improper; divide first to get \\(4 + \\dfrac{7}{(x-1)(x+1)}\\)', 'Yes — partial fractions apply directly', 'No — a quadratic denominator requires \\(Ax+B\\)', 'Yes — degree of numerator does not matter'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'Prove by contradiction: if \\(n^2\\) is even then \\(n\\) is even. Which key step is used?',
    options: ['Assume \\(n\\) is odd, then \\(n^2\\) is odd — contradiction', 'Assume \\(n^2\\) is odd, derive \\(n\\) is even', 'Use the Factor Theorem on \\(n^2 - 2k\\)', 'Show \\(n^2\\) has no odd divisors'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P12',
    q: 'Find the value of \\(B\\) in \\(\\dfrac{5x-1}{(x-1)^2} \\equiv \\dfrac{A}{x-1} + \\dfrac{B}{(x-1)^2}\\).',
    options: ['4', '5', '−1', '1'],
    answer: 0
  },

  // RED (6)
  {
    tier: 'red',
    topic: 'P12',
    q: '\\(f(x) = 6x^3 + ax^2 + bx - 2\\). Given \\((2x-1)\\) and \\((3x+2)\\) are both factors, find \\(a\\) and \\(b\\) then state the third factor.',
    options: ['\\(a=1,\\ b=-5\\); third factor \\((x+2)\\)', '\\(a=2,\\ b=-3\\); third factor \\((x-2)\\)', '\\(a=-1,\\ b=5\\); third factor \\((x-2)\\)', '\\(a=3,\\ b=-4\\); third factor \\((x+1)\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P12',
    q: 'Express \\(\\dfrac{2x^3 + x^2 - x + 3}{(x+1)(x-1)}\\) in the form \\(ax + b + \\dfrac{C}{x+1} + \\dfrac{D}{x-1}\\).',
    options: ['\\(2x + 1 + \\dfrac{-1}{x+1} + \\dfrac{3}{x-1}\\)', '\\(2x + 3 + \\dfrac{1}{x+1} + \\dfrac{2}{x-1}\\)', '\\(2x - 1 + \\dfrac{2}{x+1} + \\dfrac{1}{x-1}\\)', '\\(2x + 1 + \\dfrac{3}{x+1} + \\dfrac{-1}{x-1}\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P12',
    q: 'Prove by contradiction: the sum of a rational and an irrational number is irrational. The key contradiction is:',
    options: ['Rearranging produces an irrational = rational, which is impossible', 'The sum must be positive', 'An irrational squared is rational', 'Rational numbers cannot be added to irrationals'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P12',
    q: 'The remainder when \\(f(x) = px^3 + 3x^2 - 2x + q\\) is divided by \\((x-1)\\) is twice the remainder when divided by \\((x+1)\\). Which relationship holds?',
    options: ['\\(p + q = -1\\)', '\\(p + q = 1\\)', '\\(p - q = 2\\)', '\\(2p + q = 0\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P12',
    q: 'Given \\(\\dfrac{f(x)}{(x-1)^2(x+3)}\\) in partial fractions, which method most efficiently finds all three constants?',
    options: ['Cover-up for the non-repeated factor; substitute a convenient value and equate coefficients for the repeated factor', 'Equate coefficients only for all three constants', 'Substitute \\(x=0, 1, -3\\) into the multiplied identity', 'Use long division first'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P12',
    q: 'Prove by contradiction that \\(\\log_2 3\\) is irrational.',
    options: ['Assume \\(\\log_2 3 = p/q\\); then \\(2^p = 3^q\\) — a power of 2 equals a power of 3, impossible since they have different prime factors', 'Assume \\(\\log_2 3\\) is rational; then \\(\\log_2 3 = 0\\)', 'Note \\(\\log_2 3 > 1\\) and use the Factor Theorem', '\\(\\log_2 3\\) is between integers so cannot be rational'],
    answer: 0
  },

  // ─── P13: Functions and Graphs ────────────────────────────────────────

  // GREEN (12)
  {
    tier: 'green',
    topic: 'P13',
    q: 'The notation \\(fg(x)\\) means:',
    options: ['Apply \\(g\\) first, then \\(f\\) to the result', 'Apply \\(f\\) first, then \\(g\\)', 'Multiply \\(f(x)\\) and \\(g(x)\\)', 'Add \\(f(x)\\) and \\(g(x)\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'The domain of \\(f^{-1}\\) equals:',
    options: ['The range of \\(f\\)', 'The domain of \\(f\\)', 'All real numbers', 'The range of \\(f^{-1}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'The graph of \\(y = f^{-1}(x)\\) is the reflection of \\(y = f(x)\\) in:',
    options: ['The line \\(y = x\\)', 'The \\(x\\)-axis', 'The \\(y\\)-axis', 'The line \\(y = -x\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: '\\(|{-7}|\\) equals:',
    options: ['7', '−7', '0', '49'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'The graph of \\(y = f(x) + 3\\) is obtained from \\(y = f(x)\\) by:',
    options: ['Translation \\(\\begin{pmatrix}0\\\\3\\end{pmatrix}\\)', 'Translation \\(\\begin{pmatrix}3\\\\0\\end{pmatrix}\\)', 'Vertical stretch factor 3', 'Horizontal stretch factor \\(\\frac{1}{3}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'The graph of \\(y = f(2x)\\) is a:',
    options: ['Horizontal stretch, scale factor \\(\\frac{1}{2}\\)', 'Vertical stretch, scale factor 2', 'Horizontal stretch, scale factor 2', 'Vertical stretch, scale factor \\(\\frac{1}{2}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'To find \\(f^{-1}(x)\\) algebraically, you:',
    options: ['Write \\(y=f(x)\\), swap \\(x\\) and \\(y\\), rearrange for \\(y\\)', 'Reflect the equation in \\(y = x\\)', 'Differentiate \\(f(x)\\) and invert', 'Set \\(f(x) = 0\\) and solve'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'Which of these is NOT a valid function?',
    options: ['A one-to-many mapping', 'A many-to-one mapping', 'A one-to-one mapping', 'A constant function'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'The range of \\(f(x) = x^2 + 1\\) for \\(x \\in \\mathbb{R}\\) is:',
    options: ['\\(f(x) \\geq 1\\)', '\\(f(x) > 0\\)', '\\(f(x) \\geq 0\\)', 'All real numbers'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'The graph of \\(y = |f(x)|\\) is produced by:',
    options: ['Reflecting all parts of \\(y=f(x)\\) below the \\(x\\)-axis up above it', 'Reflecting all of \\(y=f(x)\\) in the \\(y\\)-axis', 'Taking only the positive part of \\(f(x)\\)', 'Squaring all \\(y\\)-values'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: '\\(y = -f(x)\\) represents:',
    options: ['Reflection in the \\(x\\)-axis', 'Reflection in the \\(y\\)-axis', 'Reflection in \\(y = x\\)', 'Vertical stretch factor \\(-1\\) — same as reflection in the origin'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P13',
    q: 'If \\(f(x) = 3x - 1\\), find \\(f^{-1}(x)\\).',
    options: ['\\(\\dfrac{x+1}{3}\\)', '\\(\\dfrac{x-1}{3}\\)', '\\(3x + 1\\)', '\\(\\dfrac{1}{3x-1}\\)'],
    answer: 0
  },

  // AMBER (12)
  {
    tier: 'amber',
    topic: 'P13',
    q: 'Given \\(f(x)=2x+1\\) and \\(g(x)=x^2-3\\), find \\(fg(2)\\).',
    options: ['3', '−1', '9', '5'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'Solve \\(|2x - 3| = 5\\).',
    options: ['\\(x = 4\\) or \\(x = -1\\)', '\\(x = 4\\) or \\(x = 1\\)', '\\(x = -4\\) or \\(x = 1\\)', '\\(x = 8\\) or \\(x = -2\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'For \\(f(x) = \\dfrac{1}{x-2}\\), \\(x > 2\\), what is the domain of \\(f^{-1}\\)?',
    options: ['\\(x > 0\\)', '\\(x < 0\\)', '\\(x > 2\\)', 'All real \\(x\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'The solution to \\(|x + 1| < 3\\) is:',
    options: ['\\(-4 < x < 2\\)', '\\(x < -4\\) or \\(x > 2\\)', '\\(-2 < x < 4\\)', '\\(x > 2\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'Describe fully the transformation from \\(y = f(x)\\) to \\(y = 3f(x+2)\\).',
    options: ['Translation \\(\\begin{pmatrix}-2\\\\0\\end{pmatrix}\\) then vertical stretch SF 3', 'Vertical stretch SF 3 then translation \\(\\begin{pmatrix}2\\\\0\\end{pmatrix}\\)', 'Translation \\(\\begin{pmatrix}2\\\\0\\end{pmatrix}\\) then vertical stretch SF 3', 'Horizontal stretch SF 3 then translation \\(\\begin{pmatrix}-2\\\\0\\end{pmatrix}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'Given \\(g(x) = x^2\\), \\(x \\geq 0\\) and \\(h(x) = \\sqrt{x}\\), \\(x \\geq 0\\), what is \\(gh(x)\\)?',
    options: ['\\(x\\)', '\\(x^2\\)', '\\(\\sqrt{x}\\)', '\\(x^4\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'How many solutions does \\(|x^2 - 4| = 3\\) have?',
    options: ['4', '2', '3', '1'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'Find \\(f^{-1}(x)\\) where \\(f(x) = \\dfrac{x}{x+3}\\), \\(x \\neq -3\\).',
    options: ['\\(\\dfrac{3x}{1-x}\\)', '\\(\\dfrac{x+3}{x}\\)', '\\(\\dfrac{3}{x-1}\\)', '\\(\\dfrac{x}{3-x}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'A function \\(f\\) has domain \\(\\{x : x \\geq 2\\}\\) and range \\(\\{y : y \\geq 0\\}\\). Which statement about \\(f^{-1}\\) is correct?',
    options: ['Domain of \\(f^{-1}\\) is \\(\\{x : x \\geq 0\\}\\); range is \\(\\{y : y \\geq 2\\}\\)', 'Domain of \\(f^{-1}\\) is \\(\\{x : x \\geq 2\\}\\); range is \\(\\{y : y \\geq 0\\}\\)', 'Domain and range of \\(f^{-1}\\) are both \\(\\{x : x \\geq 0\\}\\)', '\\(f^{-1}\\) does not exist'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'The graph of \\(y = f(-x) + 2\\) compared to \\(y = f(x)\\) is:',
    options: ['Reflected in the \\(y\\)-axis and shifted up 2', 'Reflected in the \\(x\\)-axis and shifted up 2', 'Reflected in \\(y = x\\) and shifted up 2', 'Reflected in the \\(y\\)-axis and shifted right 2'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'Solve \\(|3x - 1| > 5\\).',
    options: ['\\(x > 2\\) or \\(x < -\\frac{4}{3}\\)', '\\(-\\frac{4}{3} < x < 2\\)', '\\(x > 2\\) only', '\\(x < -\\frac{4}{3}\\) only'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P13',
    q: 'If \\(f(x) = e^x\\) and \\(g(x) = \\ln x\\), \\(x > 0\\), then \\(fg(x)\\) equals:',
    options: ['\\(x\\)', '\\(e^{\\ln x}\\) — always \\(x\\)', '\\(\\ln(e^x)\\) — also \\(x\\)', '\\(e^x \\cdot \\ln x\\)'],
    answer: 0
  },

  // RED (6)
  {
    tier: 'red',
    topic: 'P13',
    q: 'The function \\(f(x) = x^2 - 4x + 5\\) has domain \\(x \\geq 2\\). Find \\(f^{-1}(x)\\) and state its domain.',
    options: ['\\(f^{-1}(x) = 2 + \\sqrt{x-1}\\), domain \\(x \\geq 1\\)', '\\(f^{-1}(x) = 2 - \\sqrt{x-1}\\), domain \\(x \\geq 1\\)', '\\(f^{-1}(x) = \\sqrt{x-5} + 2\\), domain \\(x \\geq 5\\)', '\\(f^{-1}(x) = 2 + \\sqrt{x+1}\\), domain \\(x \\geq 0\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P13',
    q: 'The graph of \\(y = |2x - 1|\\) intersects \\(y = x + 1\\). How many intersections are there and what are the \\(x\\)-values?',
    options: ['2 intersections: \\(x = 2\\) and \\(x = 0\\)', '1 intersection: \\(x = 2\\) only', '2 intersections: \\(x = 1\\) and \\(x = -\\frac{1}{2}\\)', '3 intersections'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P13',
    q: 'For \\(f\\!: x \\mapsto \\dfrac{2x+3}{x-1}\\), \\(x \\neq 1\\), which statement is true?',
    options: ['\\(f = f^{-1}\\) — the function is self-inverse', '\\(f^{-1}(x) = \\dfrac{x+3}{x-2}\\)', '\\(ff(x) = x + 3\\)', 'The range of \\(f\\) includes all real numbers'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P13',
    q: 'Describe all transformations mapping \\(y = \\ln x\\) to \\(y = 3\\ln(2x - 4)\\). In which order must they be applied?',
    options: ['Horizontal stretch SF \\(\\frac{1}{2}\\), translation \\(\\begin{pmatrix}2\\\\0\\end{pmatrix}\\), vertical stretch SF 3', 'Translation \\(\\begin{pmatrix}4\\\\0\\end{pmatrix}\\), horizontal stretch SF \\(\\frac{1}{2}\\), vertical stretch SF 3', 'Vertical stretch SF 3, horizontal stretch SF 2, translation \\(\\begin{pmatrix}4\\\\0\\end{pmatrix}\\)', 'Translation \\(\\begin{pmatrix}-2\\\\0\\end{pmatrix}\\), vertical stretch SF 3, horizontal stretch SF \\(\\frac{1}{2}\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P13',
    q: 'Solve \\(|x^2 - 5| = |x - 1|\\), giving all real solutions.',
    options: ['\\(x = 2, x = -2, x = \\dfrac{1+\\sqrt{17}}{2}\\)', '\\(x = 2, x = -2\\)', '\\(x = 1, x = -1, x = 2\\)', '\\(x = 2, x = -3\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P13',
    q: 'The function \\(h(x) = \\dfrac{ax + b}{cx + d}\\) satisfies \\(h = h^{-1}\\) for all \\(x\\) in its domain. Which condition on \\(a, b, c, d\\) ensures this?',
    options: ['\\(a + d = 0\\)', '\\(a = d\\)', '\\(b = c\\)', '\\(ad - bc = 1\\)'],
    answer: 0
  },

  // ─── P14: Sequences and Series ───────────────────────────────────────

  // GREEN (12)
  {
    tier: 'green',
    topic: 'P14',
    q: 'The \\(n\\)th term of an arithmetic sequence with first term \\(a\\) and common difference \\(d\\) is:',
    options: ['\\(a + (n-1)d\\)', '\\(a + nd\\)', '\\(a \\cdot d^{n-1}\\)', '\\(nd + a\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'The sum formula for a geometric series with \\(n\\) terms, first term \\(a\\) and ratio \\(r \\neq 1\\) is:',
    options: ['\\(\\dfrac{a(r^n - 1)}{r - 1}\\)', '\\(\\dfrac{a(1+r^n)}{r+1}\\)', '\\(a(r^n - 1)\\)', '\\(\\dfrac{a}{1-r}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'The sum to infinity \\(S_\\infty = \\dfrac{a}{1-r}\\) is valid when:',
    options: ['\\(|r| < 1\\)', '\\(r < 1\\)', '\\(r > 0\\)', '\\(|r| > 1\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: '\\(\\displaystyle\\sum_{r=1}^{n} r = \\)',
    options: ['\\(\\dfrac{n(n+1)}{2}\\)', '\\(\\dfrac{n(n-1)}{2}\\)', '\\(n^2\\)', '\\(\\dfrac{n(2n+1)}{2}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'What is \\(\\binom{5}{2}\\)?',
    options: ['10', '5', '20', '15'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'In the binomial expansion \\((1+x)^n\\) for rational \\(n\\), the series is valid for:',
    options: ['\\(|x| < 1\\)', '\\(x > 0\\)', 'All \\(x\\)', '\\(n > 0\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'An arithmetic sequence has \\(a = 3\\), \\(d = 4\\). What is \\(u_{10}\\)?',
    options: ['39', '40', '43', '36'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'The common ratio of the geometric sequence 2, 6, 18, 54, … is:',
    options: ['3', '4', '\\(\\frac{1}{3}\\)', '2'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: '\\(S_\\infty\\) of a geometric series with \\(a = 8\\), \\(r = \\frac{1}{2}\\) equals:',
    options: ['16', '8', '12', '4'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: '\\(\\displaystyle\\sum_{r=1}^{n} r^2 = \\)',
    options: ['\\(\\dfrac{n(n+1)(2n+1)}{6}\\)', '\\(\\dfrac{n(n+1)}{2}\\)', '\\(\\dfrac{n^2(n+1)}{2}\\)', '\\(\\dfrac{n(2n+1)(2n-1)}{6}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'For the recurrence \\(u_{n+1} = 3u_n + 1\\), \\(u_1 = 2\\). Find \\(u_3\\).',
    options: ['22', '20', '7', '16'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P14',
    q: 'The general term in the binomial expansion \\((a+b)^n\\) is:',
    options: ['\\(\\binom{n}{r}a^{n-r}b^r\\)', '\\(\\binom{n}{r}a^r b^{n-r}\\)', '\\(\\binom{r}{n}a^{n-r}b^r\\)', '\\(n!\\,a^{n-r}b^r\\)'],
    answer: 0
  },

  // AMBER (12)
  {
    tier: 'amber',
    topic: 'P14',
    q: 'The first three terms of an arithmetic series are \\(x+1\\), \\(3x-1\\), \\(4x+5\\). Find \\(x\\) and the common difference.',
    options: ['\\(x = -3\\), \\(d = -10\\)', '\\(x = 3\\), \\(d = 8\\)', '\\(x = -3\\), \\(d = 10\\)', '\\(x = 2\\), \\(d = 5\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'A geometric series has \\(S_\\infty = 12\\) and \\(S_2 = 9\\). Find \\(a\\).',
    options: ['\\(6\\)', '\\(8\\)', '\\(3\\)', '\\(9\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'Find the coefficient of \\(x^3\\) in \\((1 + 2x)^6\\).',
    options: ['160', '120', '80', '240'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'The sum of the first \\(n\\) terms of an arithmetic series is \\(S_n = 3n^2 + n\\). Find the first term and common difference.',
    options: ['\\(a = 4\\), \\(d = 6\\)', '\\(a = 3\\), \\(d = 6\\)', '\\(a = 4\\), \\(d = 3\\)', '\\(a = 1\\), \\(d = 6\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'Find the first three terms of \\((1-3x)^{-2}\\) for \\(|x| < \\frac{1}{3}\\).',
    options: ['\\(1 + 6x + 27x^2 + \\cdots\\)', '\\(1 - 6x + 27x^2 + \\cdots\\)', '\\(1 + 3x + 9x^2 + \\cdots\\)', '\\(1 - 3x + 9x^2 + \\cdots\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'An arithmetic series has 20 terms. The first term is 5 and the last is 62. Find \\(S_{20}\\).',
    options: ['670', '640', '620', '700'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'Which is the correct expansion of \\((2+x)^{-1}\\) for \\(|x| < 2\\), up to \\(x^2\\)?',
    options: ['\\(\\frac{1}{2} - \\frac{x}{4} + \\frac{x^2}{8} - \\cdots\\)', '\\(\\frac{1}{2} + \\frac{x}{4} + \\frac{x^2}{8} + \\cdots\\)', '\\(1 - \\frac{x}{2} + \\frac{x^2}{4} - \\cdots\\)', '\\(\\frac{1}{2} - \\frac{x}{2} + \\frac{x^2}{2} - \\cdots\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: '\\(\\displaystyle\\sum_{r=3}^{10} (2r-1)\\) equals:',
    options: ['96', '104', '80', '88'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'A geometric sequence has \\(u_3 = 12\\) and \\(u_6 = 96\\). Find the common ratio.',
    options: ['2', '3', '4', '\\(\\frac{1}{2}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'The recurrence \\(u_{n+1} = ku_n\\), \\(u_1 = 4\\) represents a geometric sequence. For it to converge to 0, what condition on \\(k\\) is needed?',
    options: ['\\(|k| < 1\\)', '\\(k < 1\\)', '\\(k > 0\\)', '\\(k \\neq 0\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'Find the term independent of \\(x\\) in \\(\\left(x + \\dfrac{2}{x}\\right)^6\\).',
    options: ['240', '160', '120', '192'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P14',
    q: 'An arithmetic series has \\(S_n > 200\\) for the first time when \\(n = k\\). Given \\(a = 3\\), \\(d = 2\\), find \\(k\\).',
    options: ['13', '14', '12', '15'],
    answer: 0
  },

  // RED (6)
  {
    tier: 'red',
    topic: 'P14',
    q: 'The \\(n\\)th term of a sequence is \\(u_n = \\dfrac{3n+1}{n+2}\\). Show the sequence is increasing and find \\(\\lim_{n\\to\\infty} u_n\\).',
    options: ['The sequence is increasing and converges to 3', 'The sequence is decreasing and converges to 3', 'The sequence converges to \\(\\frac{1}{2}\\)', 'The sequence diverges'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P14',
    q: 'Given \\((1+ax)^n = 1 - 12x + 60x^2 - \\cdots\\), find \\(a\\) and \\(n\\).',
    options: ['\\(a = -2\\), \\(n = 6\\)', '\\(a = 2\\), \\(n = 6\\)', '\\(a = -3\\), \\(n = 4\\)', '\\(a = -2\\), \\(n = -6\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P14',
    q: 'Evaluate \\(\\displaystyle\\sum_{r=1}^{n}(3r^2 + 2r - 1)\\) in factorised form.',
    options: ['\\(n(n+2)(n+1)\\)', '\\(n(n+1)(n+2)\\)', '\\(\\frac{n(n+1)(3n+1)}{2}\\)', '\\(n(3n+5)(n-1)\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P14',
    q: 'The sum of an arithmetic series is \\(S_n = \\frac{n}{2}(3n-1)\\). Find the value of \\(n\\) for which \\(u_n = 50\\).',
    options: ['17', '18', '16', '19'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P14',
    q: 'Use the expansion of \\((1+x)^{1/2}\\) to estimate \\(\\sqrt{1.04}\\) to 4 decimal places.',
    options: ['1.0198', '1.0200', '1.0196', '1.0202'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P14',
    q: 'A geometric series has first term \\(a\\) and ratio \\(r\\). Given \\(S_\\infty = 4S_3\\), find \\(r\\).',
    options: ['\\(\\dfrac{1}{\\sqrt[3]{4}}\\) — i.e. \\(4^{-1/3}\\)', '\\(\\frac{1}{4}\\)', '\\(\\frac{3}{4}\\)', '\\(\\frac{1}{2}\\)'],
    answer: 0
  },

  // ─── P15: Radians ─────────────────────────────────────────────────────

  // GREEN (12)
  {
    tier: 'green',
    topic: 'P15',
    q: '\\(\\pi\\) radians is equal to:',
    options: ['180°', '360°', '90°', '270°'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'Convert 60° to radians.',
    options: ['\\(\\dfrac{\\pi}{3}\\)', '\\(\\dfrac{\\pi}{6}\\)', '\\(\\dfrac{\\pi}{4}\\)', '\\(\\dfrac{2\\pi}{3}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'The arc length formula (\\(\\theta\\) in radians) is:',
    options: ['\\(l = r\\theta\\)', '\\(l = \\frac{1}{2}r^2\\theta\\)', '\\(l = 2r\\theta\\)', '\\(l = r^2\\theta\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'The area of a sector formula is:',
    options: ['\\(A = \\dfrac{1}{2}r^2\\theta\\)', '\\(A = r^2\\theta\\)', '\\(A = \\dfrac{1}{2}r\\theta\\)', '\\(A = r\\theta^2\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: '\\(\\sin\\dfrac{\\pi}{6}\\) equals:',
    options: ['\\(\\dfrac{1}{2}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)', '\\(\\dfrac{\\sqrt{2}}{2}\\)', '1'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'Convert \\(\\dfrac{3\\pi}{4}\\) radians to degrees.',
    options: ['135°', '120°', '150°', '270°'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'The small angle approximation for \\(\\sin\\theta\\) is:',
    options: ['\\(\\theta\\)', '\\(1 - \\dfrac{\\theta^2}{2}\\)', '\\(\\theta + \\dfrac{\\theta^3}{6}\\)', '\\(\\theta^2\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'The area of a segment is:',
    options: ['\\(\\dfrac{1}{2}r^2(\\theta - \\sin\\theta)\\)', '\\(\\dfrac{1}{2}r^2\\theta\\)', '\\(\\dfrac{1}{2}r^2\\sin\\theta\\)', '\\(r^2(\\theta - \\sin\\theta)\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: '\\(\\tan\\dfrac{\\pi}{4}\\) equals:',
    options: ['1', '\\(\\sqrt{3}\\)', '\\(\\dfrac{1}{\\sqrt{3}}\\)', '0'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'The small angle approximation for \\(\\cos\\theta\\) is:',
    options: ['\\(1 - \\dfrac{\\theta^2}{2}\\)', '\\(\\theta\\)', '\\(1 + \\dfrac{\\theta^2}{2}\\)', '\\(\\dfrac{1}{\\theta}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'A sector has radius 5 cm and angle \\(\\dfrac{\\pi}{4}\\) rad. Its arc length is:',
    options: ['\\(\\dfrac{5\\pi}{4}\\) cm', '\\(\\dfrac{25\\pi}{4}\\) cm', '\\(\\dfrac{5\\pi}{8}\\) cm', '\\(5\\pi\\) cm'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P15',
    q: 'The perimeter of a sector with radius \\(r\\) and angle \\(\\theta\\) rad is:',
    options: ['\\(r\\theta + 2r\\)', '\\(r\\theta + r\\)', '\\(2r\\theta + r\\)', '\\(r(\\theta + \\pi)\\)'],
    answer: 0
  },

  // AMBER (12)
  {
    tier: 'amber',
    topic: 'P15',
    q: 'A sector has area 24 cm² and radius 6 cm. Find the angle in radians.',
    options: ['\\(\\dfrac{4}{3}\\) rad', '\\(\\dfrac{2}{3}\\) rad', '2 rad', '4 rad'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'Find the area of a segment with radius 8 cm and angle \\(\\dfrac{\\pi}{3}\\) rad.',
    options: ['\\(\\dfrac{32\\pi}{3} - 16\\sqrt{3}\\) cm²', '\\(\\dfrac{32\\pi}{3}\\) cm²', '\\(16\\pi - 8\\sqrt{3}\\) cm²', '\\(\\dfrac{16\\pi}{3} - 8\\sqrt{3}\\) cm²'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'Use small angle approximations to simplify \\(\\dfrac{\\sin 2\\theta}{\\tan 3\\theta}\\) for small \\(\\theta\\).',
    options: ['\\(\\dfrac{2}{3}\\)', '\\(\\dfrac{2\\theta}{3\\theta} = \\dfrac{2}{3}\\)', '\\(\\dfrac{2\\theta}{3}\\)', '\\(\\dfrac{6\\theta^2}{1}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'Two radii of length 10 cm enclose a sector of area 40 cm². Find the perimeter of the sector.',
    options: ['\\(8 + 20 = 28\\) cm', '28 cm', '24 cm', '36 cm'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'A chord divides a circle of radius 6 cm, subtending angle \\(\\dfrac{2\\pi}{3}\\) at the centre. Find the area of the minor segment.',
    options: ['\\(12\\pi - 9\\sqrt{3}\\) cm²', '\\(12\\pi\\) cm²', '\\(6\\pi - 9\\sqrt{3}\\) cm²', '\\(6\\pi + 9\\sqrt{3}\\) cm²'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'The arc length of a sector is 15 cm and the radius is 6 cm. Find the angle of the sector in radians.',
    options: ['2.5 rad', '2 rad', '3 rad', '1.5 rad'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'Show that for small \\(\\theta\\), \\(\\dfrac{1 - \\cos\\theta}{\\sin\\theta} \\approx \\dfrac{\\theta}{2}\\). Which approximations are used?',
    options: ['\\(\\cos\\theta \\approx 1 - \\frac{\\theta^2}{2}\\) and \\(\\sin\\theta \\approx \\theta\\)', '\\(\\cos\\theta \\approx 1\\) and \\(\\sin\\theta \\approx \\theta\\)', '\\(\\tan\\theta \\approx \\theta\\) and \\(\\cos\\theta \\approx 1\\)', '\\(\\sin\\theta \\approx \\theta\\) and \\(\\cos\\theta \\approx 1 + \\frac{\\theta^2}{2}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'A sector OAB has radius 5 cm. Arc AB = 8 cm. Find the area of triangle OAB.',
    options: ['\\(\\dfrac{25\\sin(1.6)}{2}\\) cm²', '\\(20\\) cm²', '\\(\\dfrac{25\\sin(8/5)}{2}\\) — same as first option', '\\(10\\sin(1.6)\\) cm²'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'Convert 210° to radians in exact form.',
    options: ['\\(\\dfrac{7\\pi}{6}\\)', '\\(\\dfrac{7\\pi}{4}\\)', '\\(\\dfrac{3\\pi}{2}\\)', '\\(\\dfrac{5\\pi}{6}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'A circle has radius \\(r\\). A sector has perimeter equal to the full circumference. Find \\(\\theta\\).',
    options: ['\\(2\\pi - 2\\) rad', '\\(2\\pi\\) rad', '\\(\\pi - 2\\) rad', '\\(\\pi + 2\\) rad'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'Given small angle approximation, simplify \\(\\dfrac{3\\theta - \\sin 3\\theta}{\\theta^3}\\).',
    options: ['\\(\\dfrac{9}{2}\\)', '3', '\\(\\dfrac{3}{2}\\)', '9'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P15',
    q: 'A minor sector has area \\(A\\) and the major sector of the same circle has area \\(3A\\). If the radius is 4 cm, find the angle of the minor sector.',
    options: ['\\(\\dfrac{\\pi}{2}\\) rad', '\\(\\dfrac{\\pi}{4}\\) rad', '\\(\\pi\\) rad', '\\(\\dfrac{3\\pi}{2}\\) rad'],
    answer: 0
  },

  // RED (6)
  {
    tier: 'red',
    topic: 'P15',
    q: 'A sector of radius \\(r\\) and angle \\(\\theta\\) has area equal to twice its arc length. Find the relationship between \\(r\\) and \\(\\theta\\).',
    options: ['\\(r = 4\\) (independent of \\(\\theta\\))', '\\(r\\theta = 4\\)', '\\(r = 2\\theta\\)', '\\(r^2 = 4\\theta\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P15',
    q: 'Triangle OAB has \\(OA = OB = r\\) and angle \\(AOB = \\theta\\). Show that the area of the segment between chord AB and arc AB is \\(\\frac{1}{2}r^2(\\theta - \\sin\\theta)\\). Which formula for the area of triangle OAB is used?',
    options: ['\\(\\dfrac{1}{2}r^2\\sin\\theta\\)', '\\(\\dfrac{1}{2}r^2\\theta\\)', '\\(\\dfrac{1}{2} \\times \\text{base} \\times r\\)', '\\(r^2\\sin\\theta\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P15',
    q: 'A circle has two chords creating sectors of angles \\(\\alpha\\) and \\(\\beta\\) (where \\(\\alpha + \\beta = 2\\pi\\)). The minor segment area is \\(S_1\\) and major segment area is \\(S_2\\). Find \\(S_1 + S_2\\).',
    options: ['\\(\\pi r^2\\) — the full circle area', '\\(\\pi r^2 - r^2\\sin\\alpha\\)', '\\(r^2(\\pi - \\sin\\alpha)\\)', '\\(2\\pi r^2\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P15',
    q: 'Two circles of radius \\(r\\) overlap such that each passes through the other\'s centre. Find the area of the overlap region in terms of \\(r\\).',
    options: ['\\(r^2\\!\\left(\\dfrac{\\pi}{3} - \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\pi}{3} - \\dfrac{\\sqrt{3}}{2}\\right) = r^2\\!\\left(\\dfrac{2\\pi}{3} - \\sqrt{3}\\right)\\)', '\\(\\dfrac{\\pi r^2}{3}\\)', '\\(r^2(\\pi - \\sqrt{3})\\)', '\\(\\dfrac{2\\pi r^2}{3} + r^2\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P15',
    q: 'A sector has perimeter \\(P\\) and area \\(A\\). Express \\(A\\) in terms of \\(P\\) and \\(r\\).',
    options: ['\\(A = \\dfrac{r(P - 2r)}{2}\\)', '\\(A = \\dfrac{P^2}{4r}\\)', '\\(A = Pr - r^2\\)', '\\(A = \\dfrac{P-r}{2}\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P15',
    q: 'For small \\(\\theta\\), show \\(\\cos\\theta + \\sin\\theta \\approx 1 + \\theta - \\dfrac{\\theta^2}{2}\\). What is the percentage error when \\(\\theta = 0.1\\) rad?',
    options: ['Approximately 0.04%', '0.5%', '1%', '0.1%'],
    answer: 0
  },

  // ─── P16: Trigonometric Functions ─────────────────────────────────────

  // GREEN (12)
  {
    tier: 'green',
    topic: 'P16',
    q: '\\(\\sec x\\) is defined as:',
    options: ['\\(\\dfrac{1}{\\cos x}\\)', '\\(\\dfrac{1}{\\sin x}\\)', '\\(\\dfrac{\\cos x}{\\sin x}\\)', '\\(\\dfrac{\\sin x}{\\cos x}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: 'The identity \\(1 + \\tan^2 x \\equiv\\) ?',
    options: ['\\(\\sec^2 x\\)', '\\(\\cosec^2 x\\)', '\\(\\cot^2 x\\)', '\\(1 + \\sec^2 x\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: '\\(\\sin 2A\\) equals:',
    options: ['\\(2\\sin A\\cos A\\)', '\\(\\sin^2 A - \\cos^2 A\\)', '\\(2\\cos^2 A - 1\\)', '\\(1 - 2\\sin^2 A\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: '\\(\\cos 2A\\) can be written as: (select ALL that are correct — choose the option listing them all)',
    options: ['\\(\\cos^2 A - \\sin^2 A\\), or \\(2\\cos^2 A - 1\\), or \\(1 - 2\\sin^2 A\\)', '\\(2\\cos A\\sin A\\) only', '\\(\\cos^2 A + \\sin^2 A\\)', '\\(1 - \\cos^2 A\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: 'The range of \\(\\arcsin x\\) is:',
    options: ['\\(-\\dfrac{\\pi}{2} \\leq y \\leq \\dfrac{\\pi}{2}\\)', '\\(0 \\leq y \\leq \\pi\\)', 'All reals', '\\(-\\pi \\leq y \\leq \\pi\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: 'The domain of \\(\\arccos x\\) is:',
    options: ['\\(-1 \\leq x \\leq 1\\)', '\\(0 \\leq x \\leq \\pi\\)', 'All reals', '\\(x > 0\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: '\\(\\sin(A + B)\\) equals:',
    options: ['\\(\\sin A\\cos B + \\cos A\\sin B\\)', '\\(\\sin A\\cos B - \\cos A\\sin B\\)', '\\(\\cos A\\cos B - \\sin A\\sin B\\)', '\\(\\sin A\\sin B - \\cos A\\cos B\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: 'The identity \\(1 + \\cot^2 x \\equiv\\) ?',
    options: ['\\(\\cosec^2 x\\)', '\\(\\sec^2 x\\)', '\\(\\tan^2 x\\)', '\\(1 + \\cosec^2 x\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: 'In the R-form \\(a\\sin x + b\\cos x = R\\sin(x + \\alpha)\\), \\(R\\) equals:',
    options: ['\\(\\sqrt{a^2 + b^2}\\)', '\\(a + b\\)', '\\(\\sqrt{a^2 - b^2}\\)', '\\(a^2 + b^2\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: '\\(\\cot x =\\)',
    options: ['\\(\\dfrac{\\cos x}{\\sin x}\\)', '\\(\\dfrac{\\sin x}{\\cos x}\\)', '\\(\\dfrac{1}{\\cos x}\\)', '\\(\\dfrac{1}{\\sin x}\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: '\\(\\cos(A - B)\\) equals:',
    options: ['\\(\\cos A\\cos B + \\sin A\\sin B\\)', '\\(\\cos A\\cos B - \\sin A\\sin B\\)', '\\(\\sin A\\cos B - \\cos A\\sin B\\)', '\\(\\sin A\\sin B - \\cos A\\cos B\\)'],
    answer: 0
  },
  {
    tier: 'green',
    topic: 'P16',
    q: 'The range of \\(\\arctan x\\) is:',
    options: ['\\(-\\dfrac{\\pi}{2} < y < \\dfrac{\\pi}{2}\\)', '\\(0 < y < \\pi\\)', '\\(-\\pi < y < \\pi\\)', 'All reals'],
    answer: 0
  },

  // AMBER (12)
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Simplify \\(\\dfrac{\\sin 2x}{1 + \\cos 2x}\\).',
    options: ['\\(\\tan x\\)', '\\(\\cot x\\)', '\\(\\sin x\\)', '\\(2\\sin x\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Write \\(5\\sin x + 12\\cos x\\) in the form \\(R\\sin(x + \\alpha)\\).',
    options: ['\\(13\\sin(x + 1.176)\\)', '\\(13\\sin(x + 0.395)\\)', '\\(17\\sin(x + 1.176)\\)', '\\(13\\cos(x + 1.176)\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Solve \\(2\\cos^2 x - \\cos x - 1 = 0\\) for \\(0 \\leq x \\leq 2\\pi\\).',
    options: ['\\(x = \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}\\)', '\\(x = \\dfrac{\\pi}{3}, \\dfrac{5\\pi}{3}\\)', '\\(x = \\pi, \\dfrac{\\pi}{3}\\)', '\\(x = 0, \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Prove \\(\\sec^2 x + \\cosec^2 x \\equiv \\sec^2 x\\,\\cosec^2 x\\). What is the key step?',
    options: ['Divide both sides by \\(\\sec^2 x\\,\\cosec^2 x\\) to get \\(\\sin^2 x + \\cos^2 x \\equiv 1\\)', 'Expand using double angle formulae', 'Use \\(\\sec^2 x = 1 + \\tan^2 x\\) and factorise', 'Write everything in terms of \\(\\tan x\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Find the exact value of \\(\\cos 15°\\).',
    options: ['\\(\\dfrac{\\sqrt{6}+\\sqrt{2}}{4}\\)', '\\(\\dfrac{\\sqrt{6}-\\sqrt{2}}{4}\\)', '\\(\\dfrac{\\sqrt{3}+1}{4}\\)', '\\(\\dfrac{1+\\sqrt{3}}{2\\sqrt{2}}\\) — same as first option'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'The maximum value of \\(3\\sin x - 4\\cos x\\) is:',
    options: ['5', '7', '\\(\\sqrt{7}\\)', '1'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Solve \\(\\sec^2 x = 4\\) for \\(0 \\leq x \\leq 2\\pi\\).',
    options: ['\\(x = \\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}, \\dfrac{4\\pi}{3}, \\dfrac{5\\pi}{3}\\)', '\\(x = \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}, \\dfrac{5\\pi}{4}, \\dfrac{7\\pi}{4}\\)', '\\(x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\dfrac{7\\pi}{6}, \\dfrac{11\\pi}{6}\\)', '\\(x = \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Express \\(\\cos^2 x\\) in terms of \\(\\cos 2x\\).',
    options: ['\\(\\dfrac{1 + \\cos 2x}{2}\\)', '\\(\\dfrac{1 - \\cos 2x}{2}\\)', '\\(1 - \\sin^2 x\\) — not the same form', '\\(\\dfrac{\\cos 2x}{2}\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Solve \\(\\cosec x = 2\\) for \\(0 < x < 2\\pi\\).',
    options: ['\\(x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\)', '\\(x = \\dfrac{\\pi}{3}, \\dfrac{2\\pi}{3}\\)', '\\(x = \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}\\)', '\\(x = \\dfrac{\\pi}{2}\\) only'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Using double angle formulae, solve \\(\\cos 2x = \\sin x\\) for \\(0 \\leq x \\leq 2\\pi\\).',
    options: ['\\(x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}, \\dfrac{3\\pi}{2}\\)', '\\(x = \\dfrac{\\pi}{3}, \\pi, \\dfrac{5\\pi}{3}\\)', '\\(x = \\dfrac{\\pi}{6}, \\dfrac{5\\pi}{6}\\)', '\\(x = 0, \\dfrac{\\pi}{2}, \\pi\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: '\\(\\tan(A+B) = \\dfrac{\\tan A + \\tan B}{?}\\)',
    options: ['\\(1 - \\tan A\\tan B\\)', '\\(1 + \\tan A\\tan B\\)', '\\(\\tan A\\tan B\\)', '\\(\\tan A - \\tan B\\)'],
    answer: 0
  },
  {
    tier: 'amber',
    topic: 'P16',
    q: 'Given \\(\\sin x = \\dfrac{3}{5}\\) and \\(x\\) is acute, find \\(\\cos 2x\\).',
    options: ['\\(\\dfrac{7}{25}\\)', '\\(\\dfrac{24}{25}\\)', '\\(-\\dfrac{7}{25}\\)', '\\(\\dfrac{9}{25}\\)'],
    answer: 0
  },

  // RED (6)
  {
    tier: 'red',
    topic: 'P16',
    q: 'Solve \\(5\\sin x + 12\\cos x = 6\\) for \\(0 \\leq x \\leq 2\\pi\\). Express \\(x\\) in terms of \\(\\arcsin\\).',
    options: ['\\(x = \\arcsin\\!\\left(\\frac{6}{13}\\right) - \\arctan\\!\\left(\\frac{12}{5}\\right)\\) and the second solution in range', '\\(x = \\arcsin\\!\\left(\\frac{6}{13}\\right)\\) only', '\\(x = \\arccos\\!\\left(\\frac{6}{13}\\right) - 1.176\\)', '\\(x = 0.487\\) rad and \\(x = 3.629\\) rad'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P16',
    q: 'Prove: \\(\\dfrac{\\tan x - \\sin x}{\\tan x + \\sin x} \\equiv \\dfrac{1 - \\cos x}{1 + \\cos x}\\).',
    options: ['Factor out \\(\\sin x\\) from numerator and denominator, then divide by \\(\\cos x\\)', 'Use double angle for \\(\\sin x\\)', 'Use \\(\\tan^2 x = \\sec^2 x - 1\\)', 'Substitute \\(x = \\pi/4\\) to verify'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P16',
    q: 'Find all solutions to \\(3\\cot^2 x - \\cot x - 2 = 0\\) in \\(0 < x < \\pi\\).',
    options: ['\\(x = \\arctan\\!\\left(\\frac{1}{-2/3}\\right)\\) adjusted for range \\(\\approx 0.405\\) and \\(x = \\arctan(1) = \\frac{\\pi}{4}\\)', '\\(x = \\frac{\\pi}{4}\\) only', '\\(x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\)', '\\(x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P16',
    q: 'Given \\(\\cos(x+30°) = 3\\sin x\\), find \\(\\tan x\\) exactly.',
    options: ['\\(\\dfrac{\\sqrt{3}}{4}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)', '\\(\\dfrac{1}{2\\sqrt{3}}\\)', '\\(\\dfrac{\\sqrt{3}}{5}\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P16',
    q: 'Prove: \\(\\dfrac{1 - \\cos 2x}{\\sin 2x} \\equiv \\tan x\\).',
    options: ['Use \\(1-\\cos 2x = 2\\sin^2 x\\) and \\(\\sin 2x = 2\\sin x\\cos x\\), then simplify', 'Use \\(\\tan 2x\\) formula', 'Expand \\(\\cos 2x = \\cos^2 x - \\sin^2 x\\) only', 'Apply the addition formula for \\(\\sin\\)'],
    answer: 0
  },
  {
    tier: 'red',
    topic: 'P16',
    q: 'The function \\(f(x) = a\\sin x + b\\cos x\\) has maximum value 10 and \\(f(0) = 6\\). Find \\(a\\).',
    options: ['8', '6', '\\(\\sqrt{64}\\) = 8', '\\(2\\sqrt{19}\\)'],
    answer: 0
  }

];
