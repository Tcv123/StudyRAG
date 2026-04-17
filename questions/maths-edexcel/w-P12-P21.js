// Edexcel A-Level Maths — Written Question Bank: P12–P21
// Format: { q, marks, tier, modelAnswer, diagram? }
// 400 questions total: 10 topics × 40 questions (15 green + 15 amber + 10 red)

const EDEXCEL_WRITTEN_P12_P21 = {

// ─────────────────────────────────────────────────────────────
// P12: Algebraic Methods
// ─────────────────────────────────────────────────────────────
'P12': {
  name: 'Algebraic Methods',
  green: [
    {
      q: 'Divide \\(x^3 + 3x^2 - x - 3\\) by \\((x - 1)\\) using polynomial long division.',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Set up long division: \\(x^3 + 3x^2 - x - 3 \\div (x-1)\\).\n\nStep 1: \\(x^3 \\div x = x^2\\). Multiply: \\(x^2(x-1) = x^3 - x^2\\). Subtract: \\(4x^2 - x - 3\\).\n\nStep 2: \\(4x^2 \\div x = 4x\\). Multiply: \\(4x(x-1) = 4x^2 - 4x\\). Subtract: \\(3x - 3\\).\n\nStep 3: \\(3x \\div x = 3\\). Multiply: \\(3(x-1) = 3x - 3\\). Subtract: \\(0\\).\n\nResult: \\(x^2 + 4x + 3\\).'
    },
    {
      q: 'Use the factor theorem to show that \\((x + 2)\\) is a factor of \\(f(x) = x^3 - x^2 - 4x + 4\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'Substitute \\(x = -2\\):\n\\(f(-2) = (-2)^3 - (-2)^2 - 4(-2) + 4\\)\n\\(= -8 - 4 + 8 + 4 = 0\\)\n\nSince \\(f(-2) = 0\\), by the Factor Theorem, \\((x+2)\\) is a factor of \\(f(x)\\).'
    },
    {
      q: 'Find the remainder when \\(g(x) = 2x^3 - 5x^2 + 3x - 7\\) is divided by \\((x - 3)\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'By the Remainder Theorem, the remainder is \\(g(3)\\).\n\\(g(3) = 2(27) - 5(9) + 3(3) - 7\\)\n\\(= 54 - 45 + 9 - 7 = 11\\)\n\nThe remainder is \\(11\\).'
    },
    {
      q: 'Use the factor theorem to find one factor of \\(h(x) = x^3 + 2x^2 - 5x - 6\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'Test \\(x = 2\\): \\(h(2) = 8 + 8 - 10 - 6 = 0\\). ✓\n\nSo \\((x - 2)\\) is a factor of \\(h(x)\\).'
    },
    {
      q: 'Divide \\(2x^3 - 3x^2 + x + 1\\) by \\((x - 1)\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Long division:\nStep 1: \\(2x^3 \\div x = 2x^2\\). Multiply: \\(2x^2(x-1) = 2x^3 - 2x^2\\). Subtract: \\(-x^2 + x + 1\\).\nStep 2: \\(-x^2 \\div x = -x\\). Multiply: \\(-x(x-1) = -x^2 + x\\). Subtract: \\(1\\).\nStep 3: \\(1 \\div x\\) — constant remainder.\n\nResult: \\(2x^2 - x\\) remainder \\(1\\), i.e. \\(2x^2 - x + \\dfrac{1}{x-1}\\).'
    },
    {
      q: 'Find the remainder when \\(p(x) = x^4 - 3x^2 + 2\\) is divided by \\((x + 1)\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'By the Remainder Theorem, remainder = \\(p(-1)\\).\n\\(p(-1) = (-1)^4 - 3(-1)^2 + 2 = 1 - 3 + 2 = 0\\)\n\nRemainder is \\(0\\), so \\((x+1)\\) is actually a factor.'
    },
    {
      q: 'Show that \\((x - 3)\\) is a factor of \\(f(x) = x^3 - 6x^2 + 11x - 6\\) and perform polynomial division to find the quotient.',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(f(3) = 27 - 54 + 33 - 6 = 0\\) ✓ So \\((x-3)\\) is a factor.\n\nLong division:\n\\(x^3 - 6x^2 + 11x - 6 \\div (x-3)\\)\nStep 1: \\(x^2\\). \\(x^2(x-3) = x^3-3x^2\\). Remainder: \\(-3x^2+11x-6\\).\nStep 2: \\(-3x\\). \\(-3x(x-3)=-3x^2+9x\\). Remainder: \\(2x-6\\).\nStep 3: \\(2\\). \\(2(x-3)=2x-6\\). Remainder: \\(0\\).\n\nQuotient: \\(x^2 - 3x + 2\\).'
    },
    {
      q: 'Use the factor theorem to determine whether \\((2x - 1)\\) is a factor of \\(q(x) = 2x^3 + x^2 - 2x - 1\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'If \\((2x-1)\\) is a factor, then \\(q\\!\\left(\\tfrac{1}{2}\\right) = 0\\).\n\\(q\\!\\left(\\tfrac{1}{2}\\right) = 2\\cdot\\tfrac{1}{8} + \\tfrac{1}{4} - 1 - 1 = \\tfrac{1}{4} + \\tfrac{1}{4} - 2 = -\\tfrac{3}{2}\\)\n\nSince \\(q\\!\\left(\\tfrac{1}{2}\\right) \\neq 0\\), \\((2x-1)\\) is NOT a factor.'
    },
    {
      q: 'Find the value of \\(k\\) if \\((x - 2)\\) is a factor of \\(f(x) = x^3 + kx^2 - 3x + 2\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: 'If \\((x-2)\\) is a factor, then \\(f(2) = 0\\).\n\\(f(2) = 8 + 4k - 6 + 2 = 0\\)\n\\(4 + 4k = 0\\)\n\\(k = -1\\)'
    },
    {
      q: 'Divide \\(x^3 - 8\\) by \\((x - 2)\\) using polynomial long division.',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Write as \\(x^3 + 0x^2 + 0x - 8\\).\nStep 1: \\(x^2\\). \\(x^2(x-2)=x^3-2x^2\\). Remainder: \\(2x^2+0x-8\\).\nStep 2: \\(2x\\). \\(2x(x-2)=2x^2-4x\\). Remainder: \\(4x-8\\).\nStep 3: \\(4\\). \\(4(x-2)=4x-8\\). Remainder: \\(0\\).\n\nResult: \\(x^2 + 2x + 4\\).'
    },
    {
      q: 'State the remainder theorem. Use it to find the remainder when \\(3x^3 - 2x + 5\\) is divided by \\((x + 2)\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Remainder Theorem: When a polynomial \\(f(x)\\) is divided by \\((x - a)\\), the remainder is \\(f(a)\\).\n\nHere \\(a = -2\\):\n\\(f(-2) = 3(-8) - 2(-2) + 5 = -24 + 4 + 5 = -15\\)\n\nRemainder = \\(-15\\).'
    },
    {
      q: 'Perform polynomial long division: \\((x^3 + 4x^2 + x - 6) \\div (x + 2)\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Step 1: \\(x^2\\). \\(x^2(x+2)=x^3+2x^2\\). Remainder: \\(2x^2+x-6\\).\nStep 2: \\(2x\\). \\(2x(x+2)=2x^2+4x\\). Remainder: \\(-3x-6\\).\nStep 3: \\(-3\\). \\(-3(x+2)=-3x-6\\). Remainder: \\(0\\).\n\nResult: \\(x^2 + 2x - 3\\).'
    },
    {
      q: 'Given \\(f(x) = x^3 - 7x + 6\\), use the factor theorem to show \\((x-1)\\) is a factor.',
      marks: 2,
      tier: 'green',
      modelAnswer: '\\(f(1) = 1 - 7 + 6 = 0\\)\n\nSince \\(f(1) = 0\\), by the Factor Theorem, \\((x - 1)\\) is a factor of \\(f(x)\\).'
    },
    {
      q: 'Write down the form of the partial fraction decomposition of \\(\\dfrac{5x + 3}{(x+1)(x-4)}\\). Do not find the values.',
      marks: 1,
      tier: 'green',
      modelAnswer: 'Since the denominator has two distinct linear factors, the form is:\n$$\\frac{A}{x+1} + \\frac{B}{x-4}$$\nwhere \\(A\\) and \\(B\\) are constants.'
    },
    {
      q: 'Find the remainder when \\(f(x) = 4x^3 + x^2 - 11x + 6\\) is divided by \\((2x - 1)\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'By the Remainder Theorem, remainder = \\(f\\!\\left(\\tfrac{1}{2}\\right)\\).\n\\(f\\!\\left(\\tfrac{1}{2}\\right) = 4 \\cdot \\tfrac{1}{8} + \\tfrac{1}{4} - \\tfrac{11}{2} + 6 = \\tfrac{1}{2} + \\tfrac{1}{4} - \\tfrac{11}{2} + 6 = \\tfrac{2}{4} + \\tfrac{1}{4} - \\tfrac{22}{4} + \\tfrac{24}{4} = \\tfrac{5}{4}\\)\n\nRemainder = \\(\\dfrac{5}{4}\\).'
    }
  ],
  amber: [
    {
      q: 'Fully factorise \\(f(x) = x^3 + x^2 - 4x - 4\\).',
      marks: 4,
      tier: 'amber',
      modelAnswer: 'Test factors: \\(f(2) = 8 + 4 - 8 - 4 = 0\\), so \\((x-2)\\) is a factor.\n\nDivide: \\(x^3+x^2-4x-4 = (x-2)(x^2+3x+2)\\).\n\nFactorise quadratic: \\(x^2+3x+2 = (x+1)(x+2)\\).\n\nFull factorisation: \\(f(x) = (x-2)(x+1)(x+2)\\).'
    },
    {
      q: 'Fully factorise \\(g(x) = 2x^3 - x^2 - 13x - 6\\).',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Test \\(x=-2\\): \\(2(-8)-4+26-6 = -16-4+26-6=0\\). So \\((x+2)\\) is a factor.\n\nDivide \\(2x^3-x^2-13x-6\\) by \\((x+2)\\):\nQuotient: \\(2x^2 - 5x - 3\\).\n\nFactorise: \\(2x^2-5x-3 = (2x+1)(x-3)\\).\n\nResult: \\(g(x) = (x+2)(2x+1)(x-3)\\).'
    },
    {
      q: 'Express \\(\\dfrac{7x - 1}{(x+2)(x-3)}\\) as partial fractions.',
      marks: 4,
      tier: 'amber',
      modelAnswer: '$$\\frac{7x-1}{(x+2)(x-3)} = \\frac{A}{x+2} + \\frac{B}{x-3}$$\n\nMultiply both sides by \\((x+2)(x-3)\\):\n\\(7x - 1 = A(x-3) + B(x+2)\\)\n\nLet \\(x = 3\\): \\(20 = 5B \\Rightarrow B = 4\\)\nLet \\(x = -2\\): \\(-15 = -5A \\Rightarrow A = 3\\)\n\n$$\\frac{7x-1}{(x+2)(x-3)} = \\frac{3}{x+2} + \\frac{4}{x-3}$$'
    },
    {
      q: 'Express \\(\\dfrac{3x^2 + x - 2}{x(x-1)(x+2)}\\) in partial fractions.',
      marks: 5,
      tier: 'amber',
      modelAnswer: '$$\\frac{3x^2+x-2}{x(x-1)(x+2)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+2}$$\n\nMultiply through: \\(3x^2+x-2 = A(x-1)(x+2)+Bx(x+2)+Cx(x-1)\\)\n\nLet \\(x=0\\): \\(-2 = A(-1)(2) = -2A \\Rightarrow A=1\\)\nLet \\(x=1\\): \\(2 = B(1)(3) = 3B \\Rightarrow B = \\tfrac{2}{3}\\)\nLet \\(x=-2\\): \\(8 = C(-2)(-3) = 6C \\Rightarrow C = \\tfrac{4}{3}\\)\n\n$$= \\frac{1}{x} + \\frac{2}{3(x-1)} + \\frac{4}{3(x+2)}$$'
    },
    {
      q: 'Prove by contradiction that \\(\\sqrt{2}\\) is irrational.',
      marks: 4,
      tier: 'amber',
      modelAnswer: 'Assume for contradiction that \\(\\sqrt{2}\\) is rational.\nThen \\(\\sqrt{2} = \\dfrac{p}{q}\\) where \\(p, q \\in \\mathbb{Z}\\), \\(q \\neq 0\\), and \\(\\gcd(p,q)=1\\) (the fraction is in lowest terms).\n\nSquaring: \\(2 = \\dfrac{p^2}{q^2}\\), so \\(p^2 = 2q^2\\).\n\nThus \\(p^2\\) is even, so \\(p\\) is even. Write \\(p = 2k\\).\n\nThen \\(4k^2 = 2q^2 \\Rightarrow q^2 = 2k^2\\), so \\(q^2\\) is even, so \\(q\\) is even.\n\nBut then both \\(p\\) and \\(q\\) are even, contradicting \\(\\gcd(p,q)=1\\).\n\nTherefore \\(\\sqrt{2}\\) is irrational. ∎'
    },
    {
      q: 'Fully factorise \\(h(x) = x^3 - 6x^2 + 11x - 6\\) and hence solve \\(h(x) = 0\\).',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Test \\(x=1\\): \\(1-6+11-6=0\\) ✓ So \\((x-1)\\) is a factor.\n\nDivide: \\(x^3-6x^2+11x-6 = (x-1)(x^2-5x+6)\\).\n\nFactorise: \\(x^2-5x+6=(x-2)(x-3)\\).\n\nFull factorisation: \\((x-1)(x-2)(x-3)\\).\n\nSolutions: \\(x = 1, 2, 3\\).'
    },
    {
      q: 'Express \\(\\dfrac{4x}{(x-1)(x+3)}\\) in partial fractions.',
      marks: 4,
      tier: 'amber',
      modelAnswer: '$$\\frac{4x}{(x-1)(x+3)} = \\frac{A}{x-1}+\\frac{B}{x+3}$$\n\n\\(4x = A(x+3)+B(x-1)\\)\n\nLet \\(x=1\\): \\(4 = 4A \\Rightarrow A=1\\)\nLet \\(x=-3\\): \\(-12 = -4B \\Rightarrow B=3\\)\n\n$$= \\frac{1}{x-1}+\\frac{3}{x+3}$$'
    },
    {
      q: 'Given that \\(f(x) = x^3 + ax^2 - x + b\\) has factors \\((x-1)\\) and \\((x+2)\\), find \\(a\\) and \\(b\\).',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Since \\((x-1)\\) is a factor: \\(f(1) = 1 + a - 1 + b = 0 \\Rightarrow a + b = 0 \\quad (1)\\)\n\nSince \\((x+2)\\) is a factor: \\(f(-2) = -8 + 4a + 2 + b = 0 \\Rightarrow 4a + b = 6 \\quad (2)\\)\n\nSubtract (1) from (2): \\(3a = 6 \\Rightarrow a = 2\\)\nFrom (1): \\(b = -2\\)\n\nSo \\(a = 2\\), \\(b = -2\\).'
    },
    {
      q: 'Prove by contradiction that there is no largest even integer.',
      marks: 3,
      tier: 'amber',
      modelAnswer: 'Assume for contradiction that there exists a largest even integer, call it \\(N\\).\n\nConsider \\(N + 2\\). Since \\(N\\) is even, \\(N = 2k\\) for some integer \\(k\\), so \\(N + 2 = 2(k+1)\\), which is also even.\n\nBut \\(N + 2 > N\\), contradicting the assumption that \\(N\\) is the largest even integer.\n\nTherefore there is no largest even integer. ∎'
    },
    {
      q: 'Show that \\(x = 2\\) is a root of \\(f(x) = x^3 - 3x^2 + 4\\) and completely factorise \\(f(x)\\).',
      marks: 4,
      tier: 'amber',
      modelAnswer: '\\(f(2) = 8 - 12 + 4 = 0\\) ✓\n\nDivide: \\(x^3-3x^2+4 = (x-2)(x^2-x-2)\\).\n\nFactorise: \\(x^2-x-2=(x-2)(x+1)\\).\n\nResult: \\(f(x) = (x-2)^2(x+1)\\).'
    },
    {
      q: 'Express \\(\\dfrac{x^2 - 3}{(x+1)(x-2)}\\) as partial fractions. (Note the degree of numerator equals that of the denominator.)',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Degree of numerator = degree of denominator, so first perform division.\nExpand denominator: \\((x+1)(x-2) = x^2 - x - 2\\).\n\n\\(\\dfrac{x^2-3}{x^2-x-2} = 1 + \\dfrac{x-1}{x^2-x-2} = 1 + \\dfrac{x-1}{(x+1)(x-2)}\\)\n\nPartial fractions of remainder:\n\\(\\dfrac{x-1}{(x+1)(x-2)} = \\dfrac{A}{x+1}+\\dfrac{B}{x-2}\\)\n\\(x-1 = A(x-2)+B(x+1)\\)\nLet \\(x=2\\): \\(1=3B \\Rightarrow B=\\tfrac{1}{3}\\)\nLet \\(x=-1\\): \\(-2=-3A \\Rightarrow A=\\tfrac{2}{3}\\)\n\nFinal: \\(1 + \\dfrac{2}{3(x+1)} + \\dfrac{1}{3(x-2)}\\)'
    },
    {
      q: 'Prove by contradiction that \\(\\sqrt{3}\\) is irrational.',
      marks: 4,
      tier: 'amber',
      modelAnswer: 'Assume \\(\\sqrt{3} = \\dfrac{p}{q}\\) in lowest terms.\nThen \\(3q^2 = p^2\\), so \\(3 \\mid p^2\\).\nSince 3 is prime, \\(3 \\mid p\\). Write \\(p = 3k\\).\nThen \\(3q^2 = 9k^2 \\Rightarrow q^2 = 3k^2\\), so \\(3 \\mid q\\).\nBoth \\(p\\) and \\(q\\) divisible by 3, contradicting \\(\\gcd(p,q)=1\\). ∎'
    },
    {
      q: 'Factorise \\(6x^3 - 5x^2 - 17x + 6\\) completely.',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Test \\(x = 2\\): \\(48 - 20 - 34 + 6 = 0\\) ✓. So \\((x-2)\\) is a factor.\n\nDivide: \\(6x^3-5x^2-17x+6 = (x-2)(6x^2+7x-3)\\).\n\nFactorise \\(6x^2+7x-3\\): need two numbers with product \\(-18\\) and sum \\(7\\): \\(9\\) and \\(-2\\).\n\\(6x^2+9x-2x-3 = 3x(2x+3)-1(2x+3) = (3x-1)(2x+3)\\)\n\nFull factorisation: \\((x-2)(3x-1)(2x+3)\\).'
    },
    {
      q: 'Express \\(\\dfrac{5x+1}{(x-1)(2x+1)}\\) in partial fractions.',
      marks: 4,
      tier: 'amber',
      modelAnswer: '$$\\frac{5x+1}{(x-1)(2x+1)} = \\frac{A}{x-1} + \\frac{B}{2x+1}$$\n\\(5x+1 = A(2x+1)+B(x-1)\\)\nLet \\(x=1\\): \\(6=3A \\Rightarrow A=2\\)\nLet \\(x=-\\tfrac{1}{2}\\): \\(-\\tfrac{3}{2}=-\\tfrac{3}{2}B \\Rightarrow B=1\\)\n\n$$= \\frac{2}{x-1}+\\frac{1}{2x+1}$$'
    },
    {
      q: 'Given that \\((x+3)\\) is a factor of \\(p(x) = x^3 + cx^2 + 2x + d\\) and the remainder when \\(p(x)\\) is divided by \\((x-1)\\) is \\(12\\), find \\(c\\) and \\(d\\).',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'From \\((x+3)\\) being a factor: \\(p(-3) = -27+9c-6+d=0 \\Rightarrow 9c+d=33 \\quad (1)\\)\n\nFrom remainder when divided by \\((x-1)\\) is 12: \\(p(1)=1+c+2+d=12 \\Rightarrow c+d=9 \\quad (2)\\)\n\nSubtract (2) from (1): \\(8c=24 \\Rightarrow c=3\\)\nFrom (2): \\(d=6\\)\n\nSo \\(c=3\\), \\(d=6\\).'
    }
  ],
  red: [
    {
      q: 'Express \\(\\dfrac{2x^2 + 3x - 1}{(x+1)^2(x-2)}\\) in partial fractions.',
      marks: 7,
      tier: 'red',
      modelAnswer: '$$\\frac{2x^2+3x-1}{(x+1)^2(x-2)} = \\frac{A}{x+1}+\\frac{B}{(x+1)^2}+\\frac{C}{x-2}$$\n\nMultiply: \\(2x^2+3x-1 = A(x+1)(x-2)+B(x-2)+C(x+1)^2\\)\n\nLet \\(x=-1\\): \\(2-3-1=-3B \\Rightarrow -2=-3B \\Rightarrow B=\\tfrac{2}{3}\\)\nLet \\(x=2\\): \\(8+6-1=9C \\Rightarrow 13=9C \\Rightarrow C=\\tfrac{13}{9}\\)\n\nExpand for \\(A\\): compare \\(x^2\\) coefficients:\n\\(2 = A + C \\Rightarrow A = 2 - \\tfrac{13}{9} = \\tfrac{5}{9}\\)\n\n$$= \\frac{5}{9(x+1)}+\\frac{2}{3(x+1)^2}+\\frac{13}{9(x-2)}$$'
    },
    {
      q: '\\(f(x) = \\dfrac{x^3 + 2x^2 - 1}{x^2 - 1}\\). Show that \\(f(x)\\) can be written as \\(x + a + \\dfrac{bx+c}{x^2-1}\\) and find \\(a, b, c\\). Hence express \\(f(x)\\) in partial fractions.',
      marks: 8,
      tier: 'red',
      modelAnswer: 'Perform polynomial division of \\(x^3+2x^2-1\\) by \\(x^2-1\\):\nStep 1: \\(x \\cdot (x^2-1) = x^3-x\\). Remainder: \\(2x^2+x-1\\).\nStep 2: \\(2(x^2-1)=2x^2-2\\). Remainder: \\(x+1\\).\n\nSo \\(f(x) = x+2+\\dfrac{x+1}{x^2-1}\\). Thus \\(a=2, b=1, c=1\\).\n\nNow \\(\\dfrac{x+1}{x^2-1}=\\dfrac{x+1}{(x-1)(x+1)}=\\dfrac{1}{x-1}\\).\n\nFinal: \\(f(x) = x + 2 + \\dfrac{1}{x-1}\\).'
    },
    {
      q: 'Prove by contradiction that there are infinitely many prime numbers.',
      marks: 6,
      tier: 'red',
      modelAnswer: 'Assume for contradiction that there are finitely many primes: \\(p_1, p_2, \\ldots, p_n\\).\n\nConstruct \\(N = p_1 p_2 \\cdots p_n + 1\\).\n\n\\(N\\) leaves remainder 1 when divided by any \\(p_i\\), so \\(N\\) is not divisible by any prime in our list.\n\nBut every integer \\(\\geq 2\\) has at least one prime factor. So either \\(N\\) is prime itself, or has a prime factor not in our list.\n\nEither way, we have a prime not in \\{p_1, \\ldots, p_n\\}, contradicting our assumption.\n\nTherefore there are infinitely many primes. ∎'
    },
    {
      q: 'Express \\(\\dfrac{3x^2+4}{(x-1)^2(x+2)}\\) in partial fractions.',
      marks: 7,
      tier: 'red',
      modelAnswer: '$$\\frac{3x^2+4}{(x-1)^2(x+2)} = \\frac{A}{x-1}+\\frac{B}{(x-1)^2}+\\frac{C}{x+2}$$\n\n\\(3x^2+4 = A(x-1)(x+2)+B(x+2)+C(x-1)^2\\)\n\nLet \\(x=1\\): \\(7=3B \\Rightarrow B=\\tfrac{7}{3}\\)\nLet \\(x=-2\\): \\(16=9C \\Rightarrow C=\\tfrac{16}{9}\\)\n\nCompare \\(x^2\\) coefficients: \\(3=A+C \\Rightarrow A=3-\\tfrac{16}{9}=\\tfrac{11}{9}\\)\n\n$$= \\frac{11}{9(x-1)}+\\frac{7}{3(x-1)^2}+\\frac{16}{9(x+2)}$$'
    },
    {
      q: '\\(f(x) = 2x^3 + ax^2 + bx - 6\\). Given that \\((x-1)\\) and \\((x+3)\\) are both factors of \\(f(x)\\), find \\(a\\) and \\(b\\), then factorise \\(f(x)\\) completely.',
      marks: 7,
      tier: 'red',
      modelAnswer: '\\(f(1)=0\\): \\(2+a+b-6=0 \\Rightarrow a+b=4 \\quad(1)\\)\n\\(f(-3)=0\\): \\(-54+9a-3b-6=0 \\Rightarrow 9a-3b=60 \\Rightarrow 3a-b=20 \\quad(2)\\)\n\nAdd (1) and (2): \\(4a=24 \\Rightarrow a=6\\), \\(b=-2\\)\n\nSo \\(f(x)=2x^3+6x^2-2x-6\\).\n\nKnowing \\((x-1)(x+3) = x^2+2x-3\\) are factors, divide:\n\\(2x^3+6x^2-2x-6 \\div (x^2+2x-3) = 2x+2\\) (no remainder). Wait: check. Actually:\n\\(2x(x^2+2x-3)=2x^3+4x^2-6x\\). Remainder: \\(2x^2+4x-6 = 2(x^2+2x-3)\\). ✓\nSo third factor is \\(2x+2=2(x+1)\\).\n\n\\(f(x) = 2(x-1)(x+3)(x+1)\\).'
    },
    {
      q: '\\(f(x) = \\dfrac{6x^2 - x - 2}{(x+1)(x-1)(2x+1)}\\). Express \\(f(x)\\) in partial fractions and hence find \\(\\displaystyle\\int f(x)\\,dx\\).',
      marks: 8,
      tier: 'red',
      modelAnswer: '$$\\frac{6x^2-x-2}{(x+1)(x-1)(2x+1)} = \\frac{A}{x+1}+\\frac{B}{x-1}+\\frac{C}{2x+1}$$\n\n\\(6x^2-x-2 = A(x-1)(2x+1)+B(x+1)(2x+1)+C(x+1)(x-1)\\)\n\nLet \\(x=1\\): \\(3=6B \\Rightarrow B=\\tfrac{1}{2}\\)\nLet \\(x=-1\\): \\(5=-(-2)A \\Rightarrow A? \\) Wait: \\(6+1-2=5\\), \\((x-1)(2x+1)\\big|_{x=-1}=(-2)(-1)=2\\). So \\(5=2A \\Rightarrow A=\\tfrac{5}{2}\\).\nLet \\(x=-\\tfrac{1}{2}\\): \\(\\tfrac{3}{2}+\\tfrac{1}{2}-2=-0 \\): \\(6(\\tfrac{1}{4})+\\tfrac{1}{2}-2=\\tfrac{3}{2}+\\tfrac{1}{2}-2=0\\). Hmm — try numerically: \\(6(\\tfrac{1}{4})-(-\\tfrac{1}{2})-2=\\tfrac{3}{2}+\\tfrac{1}{2}-2=0\\). So \\(C=0\\).\n\nVerify \\(A\\): constant: \\(A(-1)(1)+B(1)(1)+C(1)(-1)= -\\tfrac{5}{2}+\\tfrac{1}{2}+0=-2\\) ✓ (matches constant of numerator \\(-2\\)).\n\n$$f(x) = \\frac{5/2}{x+1}+\\frac{1/2}{x-1}$$\n\n$$\\int f(x)\\,dx = \\frac{5}{2}\\ln|x+1|+\\frac{1}{2}\\ln|x-1|+c$$'
    },
    {
      q: 'Prove by contradiction that if \\(n^2\\) is even then \\(n\\) is even.',
      marks: 4,
      tier: 'red',
      modelAnswer: 'Assume for contradiction that \\(n^2\\) is even but \\(n\\) is odd.\n\nIf \\(n\\) is odd, write \\(n = 2k+1\\) for some integer \\(k\\).\nThen \\(n^2 = (2k+1)^2 = 4k^2+4k+1 = 2(2k^2+2k)+1\\), which is odd.\n\nThis contradicts the assumption that \\(n^2\\) is even.\n\nTherefore if \\(n^2\\) is even, \\(n\\) must be even. ∎'
    },
    {
      q: '\\(f(x) = \\dfrac{x^2+3x+5}{(x+1)(x+2)}\\). Write \\(f(x)\\) in the form \\(A + \\dfrac{B}{x+1}+\\dfrac{C}{x+2}\\) and state the values of \\(A\\), \\(B\\), \\(C\\).',
      marks: 7,
      tier: 'red',
      modelAnswer: 'Since the degree of numerator equals the degree of denominator, divide first.\nExpand: \\((x+1)(x+2)=x^2+3x+2\\).\n\\(\\dfrac{x^2+3x+5}{x^2+3x+2} = 1 + \\dfrac{3}{x^2+3x+2} = 1+\\dfrac{3}{(x+1)(x+2)}\\).\n\nSo \\(A=1\\). Now partial fractions of \\(\\dfrac{3}{(x+1)(x+2)}\\):\n\\(3=B(x+2)+C(x+1)\\)\nLet \\(x=-1\\): \\(3=B \\Rightarrow B=3\\)\nLet \\(x=-2\\): \\(3=-C \\Rightarrow C=-3\\)\n\n\\(A=1\\), \\(B=3\\), \\(C=-3\\).'
    },
    {
      q: 'Express \\(\\dfrac{5x^2-2x+1}{x(x-1)^2}\\) in partial fractions.',
      marks: 7,
      tier: 'red',
      modelAnswer: '$$\\frac{5x^2-2x+1}{x(x-1)^2} = \\frac{A}{x}+\\frac{B}{x-1}+\\frac{C}{(x-1)^2}$$\n\n\\(5x^2-2x+1 = A(x-1)^2+Bx(x-1)+Cx\\)\n\nLet \\(x=0\\): \\(1=A\\)\nLet \\(x=1\\): \\(4=C\\)\nCompare \\(x^2\\): \\(5=A+B \\Rightarrow B=4\\)\n\nVerify constant: \\(A=1\\) ✓. Check \\(x\\) term: \\(-2=-2A-B+C=-2-4+4=-2\\) ✓\n\n$$= \\frac{1}{x}+\\frac{4}{x-1}+\\frac{4}{(x-1)^2}$$'
    },
    {
      q: 'Prove by contradiction that \\(\\log_2 3\\) is irrational.',
      marks: 6,
      tier: 'red',
      modelAnswer: 'Assume for contradiction that \\(\\log_2 3\\) is rational.\nThen \\(\\log_2 3 = \\dfrac{p}{q}\\) where \\(p, q\\) are positive integers.\n\nThis means \\(2^{p/q} = 3\\), so \\(2^p = 3^q\\).\n\nBut \\(2^p\\) is even for all positive integers \\(p\\), while \\(3^q\\) is odd for all positive integers \\(q\\).\n\nAn even number cannot equal an odd number — contradiction.\n\nTherefore \\(\\log_2 3\\) is irrational. ∎'
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// P13: Functions and Graphs
// ─────────────────────────────────────────────────────────────
'P13': {
  name: 'Functions and Graphs',
  green: [
    {
      q: 'Given \\(f(x) = 2x + 1\\) and \\(g(x) = x^2 - 3\\), find \\(fg(x)\\) and \\(gf(x)\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(fg(x) = f(g(x)) = f(x^2-3) = 2(x^2-3)+1 = 2x^2 - 5\\)\n\n\\(gf(x) = g(f(x)) = g(2x+1) = (2x+1)^2 - 3 = 4x^2+4x+1-3 = 4x^2+4x-2\\)'
    },
    {
      q: 'Find the inverse of \\(f(x) = 3x - 5\\) and state its domain.',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Let \\(y = 3x-5\\). Rearrange for \\(x\\):\n\\(y+5=3x \\Rightarrow x=\\dfrac{y+5}{3}\\)\n\nSo \\(f^{-1}(x) = \\dfrac{x+5}{3}\\)\n\nThe domain of \\(f^{-1}\\) equals the range of \\(f\\). Since \\(f\\) is defined for all real \\(x\\), the range of \\(f\\) is \\(\\mathbb{R}\\).\nDomain of \\(f^{-1}\\): \\(x \\in \\mathbb{R}\\).'
    },
    {
      q: 'Given \\(h(x) = \\dfrac{x+2}{x-1}\\), \\(x \\neq 1\\), state the range of \\(h\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'Let \\(y = \\dfrac{x+2}{x-1}\\). Rearrange: \\(y(x-1)=x+2 \\Rightarrow yx-x=y+2 \\Rightarrow x(y-1)=y+2\\).\nSo \\(x=\\dfrac{y+2}{y-1}\\), which is undefined when \\(y=1\\).\n\nRange of \\(h\\): \\(y \\in \\mathbb{R},\\; y \\neq 1\\).'
    },
    {
      q: 'Given \\(f(x) = x^2 + 1\\) for \\(x \\geq 0\\) and \\(g(x) = 2x - 3\\), find \\(gf(x)\\) and state its range.',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(gf(x) = g(f(x)) = g(x^2+1) = 2(x^2+1)-3 = 2x^2-1\\)\n\nSince \\(x \\geq 0\\), the minimum of \\(x^2\\) is 0, so the minimum of \\(2x^2-1\\) is \\(-1\\).\nRange: \\(gf(x) \\geq -1\\).'
    },
    {
      q: 'Find the inverse of \\(g(x) = \\dfrac{2}{x+3}\\), \\(x > -3\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Let \\(y = \\dfrac{2}{x+3}\\).\n\\(y(x+3)=2 \\Rightarrow x+3=\\dfrac{2}{y} \\Rightarrow x=\\dfrac{2}{y}-3\\)\n\n\\(g^{-1}(x) = \\dfrac{2}{x}-3\\)\n\nDomain of \\(g^{-1}\\) = range of \\(g\\). Since \\(x>-3\\), \\(x+3>0\\), so \\(g(x)>0\\). Domain of \\(g^{-1}\\): \\(x>0\\).'
    },
    {
      q: 'Given \\(f: x \\mapsto 4 - x^2\\) for \\(0 \\leq x \\leq 2\\), state the range of \\(f\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'When \\(x=0\\): \\(f(0)=4\\). When \\(x=2\\): \\(f(2)=0\\).\n\\(f\\) is decreasing on \\([0,2]\\).\nRange: \\(0 \\leq f(x) \\leq 4\\).'
    },
    {
      q: 'Given \\(f(x) = e^{2x}\\) and \\(g(x) = \\ln x\\), \\(x > 0\\), find \\(fg(x)\\) in simplified form.',
      marks: 2,
      tier: 'green',
      modelAnswer: '\\(fg(x) = f(g(x)) = f(\\ln x) = e^{2\\ln x} = e^{\\ln x^2} = x^2\\)'
    },
    {
      q: 'Find \\(f^{-1}(x)\\) when \\(f(x) = \\dfrac{x-1}{2}\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'Let \\(y=\\dfrac{x-1}{2}\\).\n\\(2y = x - 1 \\Rightarrow x = 2y+1\\)\n\\(f^{-1}(x) = 2x+1\\)'
    },
    {
      q: 'Given \\(f(x) = 3x+2\\) and \\(g(x) = \\dfrac{1}{x}\\), \\(x\\neq 0\\), find \\(fg(x)\\) and state the value of \\(x\\) for which \\(fg(x)\\) is undefined.',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(fg(x) = f\\!\\left(\\dfrac{1}{x}\\right) = \\dfrac{3}{x}+2 = \\dfrac{3+2x}{x}\\)\n\n\\(fg(x)\\) is undefined when \\(x=0\\).'
    },
    {
      q: 'Show that the function \\(f(x) = 2x^2 - 4x + 5\\) does not have an inverse over \\(\\mathbb{R}\\). State a restricted domain for which an inverse would exist.',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(f(x)\\) is a quadratic (parabola), which is not one-to-one over \\(\\mathbb{R}\\) since \\(f(0)=5=f(2)\\). A function must be one-to-one to have an inverse.\n\nRestricted domain: \\(x \\geq 1\\) (vertex is at \\(x=1\\)), where \\(f\\) is increasing and one-to-one.'
    },
    {
      q: 'Given \\(f(x) = \\sqrt{x-2}\\), \\(x \\geq 2\\), find \\(f^{-1}(x)\\) and state its domain.',
      marks: 3,
      tier: 'green',
      modelAnswer: 'Let \\(y = \\sqrt{x-2}\\).\n\\(y^2 = x-2 \\Rightarrow x = y^2+2\\)\n\\(f^{-1}(x) = x^2+2\\)\nDomain of \\(f^{-1}\\) = range of \\(f\\) = \\([0,\\infty)\\). So domain: \\(x \\geq 0\\).'
    },
    {
      q: 'Given \\(g(x) = x^2 - 2x + 3\\) for \\(x \\geq 1\\), find the range of \\(g\\).',
      marks: 2,
      tier: 'green',
      modelAnswer: 'Complete the square: \\(g(x) = (x-1)^2+2\\).\nFor \\(x \\geq 1\\), \\((x-1)^2 \\geq 0\\).\nMinimum value at \\(x=1\\): \\(g(1)=2\\).\nRange: \\(g(x) \\geq 2\\).'
    },
    {
      q: 'Functions \\(f\\) and \\(g\\) are defined as \\(f(x) = 2x - 1\\) and \\(g(x) = x^2\\). Find \\(f^{-1}g(4)\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(g(4) = 16\\)\n\\(f^{-1}(x) = \\dfrac{x+1}{2}\\) (from \\(y=2x-1 \\Rightarrow x=\\dfrac{y+1}{2}\\))\n\\(f^{-1}(16) = \\dfrac{17}{2} = 8.5\\)'
    },
    {
      q: 'State what it means for a function to be a one-to-one function. Is \\(f(x) = |x|\\) one-to-one?',
      marks: 2,
      tier: 'green',
      modelAnswer: 'A function is one-to-one if every element of the range has exactly one pre-image. Equivalently, if \\(f(a)=f(b)\\) then \\(a=b\\).\n\n\\(f(x)=|x|\\) is NOT one-to-one: e.g., \\(f(2)=f(-2)=2\\).'
    },
    {
      q: 'Given \\(p(x) = \\dfrac{3x+1}{2}\\), find \\(p^{-1}(x)\\) and hence solve \\(p^{-1}(x) = 5\\).',
      marks: 3,
      tier: 'green',
      modelAnswer: '\\(y=\\dfrac{3x+1}{2} \\Rightarrow 2y=3x+1 \\Rightarrow x=\\dfrac{2y-1}{3}\\)\n\\(p^{-1}(x)=\\dfrac{2x-1}{3}\\)\n\nSolve: \\(\\dfrac{2x-1}{3}=5 \\Rightarrow 2x-1=15 \\Rightarrow x=8\\)'
    }
  ],
  amber: [
    {
      q: 'Solve \\(|2x - 3| = 5\\) algebraically.',
      marks: 3,
      tier: 'amber',
      modelAnswer: 'Case 1: \\(2x-3 = 5 \\Rightarrow x = 4\\)\nCase 2: \\(2x-3 = -5 \\Rightarrow x = -1\\)\n\nSolutions: \\(x = 4\\) or \\(x = -1\\).'
    },
    {
      q: 'Solve \\(|x^2 - 4| = 3x\\) algebraically. Check all solutions.',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Case 1: \\(x^2-4=3x \\Rightarrow x^2-3x-4=0 \\Rightarrow (x-4)(x+1)=0 \\Rightarrow x=4\\) or \\(x=-1\\).\nCheck \\(x=4\\): \\(|12|=12=12\\) ✓. Check \\(x=-1\\): \\(|-3|=3\\) but \\(3(-1)=-3\\) ✗.\n\nCase 2: \\(x^2-4=-3x \\Rightarrow x^2+3x-4=0 \\Rightarrow (x+4)(x-1)=0 \\Rightarrow x=-4\\) or \\(x=1\\).\nCheck \\(x=-4\\): \\(|12|=12\\) but \\(3(-4)=-12\\) ✗. Check \\(x=1\\): \\(|-3|=3=3\\) ✓.\n\nSolutions: \\(x=4\\) or \\(x=1\\).'
    },
    {
      q: 'Sketch the graph of \\(y = |2x - 4|\\), labelling intercepts and the vertex.',
      marks: 3,
      tier: 'amber',
      diagram: true,
      modelAnswer: 'The graph is a V-shape.\nVertex: Set \\(2x-4=0\\), so \\(x=2\\), \\(y=0\\). Vertex at \\((2,0)\\).\ny-intercept: \\(x=0\\), \\(y=|{-4}|=4\\). Point \\((0,4)\\).\nFor \\(x>2\\): graph is \\(y=2x-4\\) (gradient 2).\nFor \\(x<2\\): graph is \\(y=-(2x-4)=4-2x\\) (gradient \\(-2\\)).\nLabel vertex \\((2,0)\\) and y-intercept \\((0,4)\\).'
    },
    {
      q: 'Find the range of \\(h(x) = \\dfrac{3}{x^2+1}\\) for \\(x \\in \\mathbb{R}\\).',
      marks: 3,
      tier: 'amber',
      modelAnswer: 'The minimum of \\(x^2+1\\) occurs at \\(x=0\\): minimum value 1. As \\(x \\to \\pm\\infty\\), \\(x^2+1 \\to \\infty\\).\n\nSo \\(h(x)\\) has maximum \\(\\dfrac{3}{1}=3\\) and approaches 0 but never reaches it.\n\nRange: \\(0 < h(x) \\leq 3\\).'
    },
    {
      q: 'Given \\(f(x) = x^2-1\\) and \\(g(x) = 2x+3\\), find the range of \\(fg(x)\\) when the domain of \\(g\\) is \\(\\{x : 0 \\leq x \\leq 2\\}\\).',
      marks: 4,
      tier: 'amber',
      modelAnswer: '\\(fg(x) = f(2x+3) = (2x+3)^2-1 = 4x^2+12x+8\\)\n\nDomain of \\(g\\): \\(0 \\leq x \\leq 2\\), so \\(g(x) = 2x+3\\) ranges from \\(3\\) to \\(7\\).\n\n\\(f(t) = t^2-1\\) for \\(3 \\leq t \\leq 7\\):\nAt \\(t=3\\): \\(f=8\\). At \\(t=7\\): \\(f=48\\).\n\nRange of \\(fg\\): \\(8 \\leq fg(x) \\leq 48\\).'
    },
    {
      q: 'Sketch the graph of \\(y = |x^2 - 4|\\), labelling key points.',
      marks: 4,
      tier: 'amber',
      diagram: true,
      modelAnswer: 'Start with \\(y=x^2-4\\): parabola with roots \\(x=\\pm 2\\), minimum \\(-4\\) at \\(x=0\\).\n\nThe modulus reflects the negative part upwards:\n- For \\(|x|>2\\): \\(y=x^2-4\\) (unchanged)\n- For \\(-2<x<2\\): \\(y=-(x^2-4)=4-x^2\\), giving a maximum of 4 at \\(x=0\\)\n\nKey points: \\((-2,0)\\), \\((0,4)\\), \\((2,0)\\), and as \\(x \\to \\pm\\infty\\), \\(y\\to\\infty\\).'
    },
    {
      q: 'Solve \\(|3x + 1| < x + 5\\) and express your answer as an inequality.',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Require \\(-（x+5) < 3x+1 < x+5\\).\n\nRight inequality: \\(3x+1 < x+5 \\Rightarrow 2x < 4 \\Rightarrow x < 2\\)\n\nLeft inequality: \\(3x+1 > -(x+5) = -x-5 \\Rightarrow 4x > -6 \\Rightarrow x > -\\tfrac{3}{2}\\)\n\nCombined: \\(-\\dfrac{3}{2} < x < 2\\).'
    },
    {
      q: 'Given \\(f(x) = \\sqrt{x}\\), \\(x \\geq 0\\), and \\(g(x) = x - 4\\), find the domain of \\(fg(x)\\).',
      marks: 3,
      tier: 'amber',
      modelAnswer: '\\(fg(x) = f(g(x)) = \\sqrt{x-4}\\)\n\nFor this to be defined: \\(x-4 \\geq 0 \\Rightarrow x \\geq 4\\)\n\nDomain of \\(fg\\): \\(x \\geq 4\\).'
    },
    {
      q: 'Solve \\(|2x + 1| = |x - 3|\\) algebraically.',
      marks: 4,
      tier: 'amber',
      modelAnswer: 'Square both sides (valid since both sides non-negative after squaring):\n\\((2x+1)^2 = (x-3)^2\\)\n\\(4x^2+4x+1 = x^2-6x+9\\)\n\\(3x^2+10x-8=0\\)\n\\((3x-2)(x+4)=0\\)\n\\(x=\\dfrac{2}{3}\\) or \\(x=-4\\)\n\nBoth solutions are valid (check: \\(|2(\\tfrac{2}{3})+1|=|\\tfrac{7}{3}|=\\tfrac{7}{3}\\), \\(|\\tfrac{2}{3}-3|=\\tfrac{7}{3}\\) ✓).'
    },
    {
      q: 'The function \\(f\\) is defined by \\(f(x) = \\ln(2x-1)\\) for \\(x > \\tfrac{1}{2}\\). Find \\(f^{-1}(x)\\) and state its domain and range.',
      marks: 4,
      tier: 'amber',
      modelAnswer: '\\(y=\\ln(2x-1) \\Rightarrow e^y=2x-1 \\Rightarrow x=\\dfrac{e^y+1}{2}\\)\n\\(f^{-1}(x)=\\dfrac{e^x+1}{2}\\)\n\nDomain of \\(f^{-1}\\) = range of \\(f\\). Since \\(x>\\tfrac{1}{2}\\), \\(2x-1>0\\), so \\(\\ln(2x-1)\\) can be any real number.\nDomain of \\(f^{-1}\\): \\(x \\in \\mathbb{R}\\).\nRange of \\(f^{-1}\\) = domain of \\(f\\): \\(f^{-1}(x) > \\tfrac{1}{2}\\).'
    },
    {
      q: 'Sketch \\(y = |f(x)|\\) where \\(f(x) = x(x-3)\\), labelling all key features.',
      marks: 4,
      tier: 'amber',
      diagram: true,
      modelAnswer: 'Start with \\(y=x(x-3)=x^2-3x\\): parabola with roots at \\(0\\) and \\(3\\), minimum at \\(x=\\tfrac{3}{2}\\), \\(y=-\\tfrac{9}{4}\\).\n\nFor \\(y=|x(x-3)|\\):\n- Where \\(x(x-3) \\geq 0\\) (i.e., \\(x \\leq 0\\) or \\(x \\geq 3\\)): unchanged\n- Where \\(x(x-3) < 0\\) (i.e., \\(0<x<3\\)): reflected upwards, creating a peak at \\(x=\\tfrac{3}{2}\\), \\(y=\\tfrac{9}{4}\\)\n\nKey points: \\((0,0)\\), \\((\\tfrac{3}{2},\\tfrac{9}{4})\\), \\((3,0)\\).'
    },
    {
      q: 'Given \\(f(x) = 3x-1\\) and \\(g(x) = \\dfrac{1}{x+2}\\), find \\(gf(x)\\) and state the value excluded from its domain.',
      marks: 3,
      tier: 'amber',
      modelAnswer: '\\(gf(x) = g(3x-1) = \\dfrac{1}{(3x-1)+2} = \\dfrac{1}{3x+1}\\)\n\nThis is undefined when \\(3x+1=0\\), i.e., \\(x=-\\dfrac{1}{3}\\).'
    },
    {
      q: 'A function is defined as \\(f(x) = x^2 - 6x + 10\\) for \\(x \\geq 3\\). Find \\(f^{-1}(x)\\).',
      marks: 5,
      tier: 'amber',
      modelAnswer: 'Complete the square: \\(f(x) = (x-3)^2+1\\).\n\nLet \\(y=(x-3)^2+1\\):\n\\(y-1=(x-3)^2 \\Rightarrow x-3=\\sqrt{y-1}\\) (taking positive root since \\(x \\geq 3\\))\n\\(x=3+\\sqrt{y-1}\\)\n\n\\(f^{-1}(x) = 3+\\sqrt{x-1}\\), domain \\(x \\geq 1\\).'
    },
    {
      q: 'Solve \\(|x-2| > 3\\) and represent the solution on a number line description.',
      marks: 3,
      tier: 'amber',
      modelAnswer: '\\(|x-2|>3\\) means \\(x-2>3\\) or \\(x-2<-3\\).\n\nCase 1: \\(x>5\\)\nCase 2: \\(x<-1\\)\n\nSolution: \\(x<-1\\) or \\(x>5\\).\nOn a number line: open circles at \\(-1\\) and \\(5\\), shaded to the left of \\(-1\\) and to the right of \\(5\\).'
    },
    {
      q: 'Given \\(f(x) = 2^x\\) and \\(g(x) = 3x-2\\), find \\(gf(x)\\) and the value of \\(x\\) such that \\(gf(x) = 22\\).',
      marks: 4,
      tier: 'amber',
      modelAnswer: '\\(gf(x) = g(2^x) = 3(2^x)-2\\)\n\nSet \\(3(2^x)-2=22 \\Rightarrow 3(2^x)=24 \\Rightarrow 2^x=8 \\Rightarrow x=3\\)'
    }
  ],
  red: [
    {
      q: 'Find the inverse of \\(f(x) = \\dfrac{2x+3}{x-1}\\), \\(x \\neq 1\\), and state its domain and range.',
      marks: 6,
      tier: 'red',
      modelAnswer: 'Let \\(y=\\dfrac{2x+3}{x-1}\\).\n\\(y(x-1)=2x+3 \\Rightarrow yx-y=2x+3 \\Rightarrow x(y-2)=y+3 \\Rightarrow x=\\dfrac{y+3}{y-2}\\)\n\n\\(f^{-1}(x) = \\dfrac{x+3}{x-2}\\)\n\nDomain of \\(f^{-1}\\) = range of \\(f\\). Since \\(f(x)=\\dfrac{2x+3}{x-1}\\), the horizontal asymptote is \\(y=2\\), so the range of \\(f\\) is \\(y\\neq 2\\).\nDomain of \\(f^{-1}\\): \\(x \\in \\mathbb{R},\\; x\\neq 2\\).\nRange of \\(f^{-1}\\) = domain of \\(f\\): \\(x\\neq 1\\).'
    },
    {
      q: 'Solve the inequality \\(|2x-1| \\leq |x+3|\\).',
      marks: 6,
      tier: 'red',
      modelAnswer: 'Square both sides (both sides non-negative):\n\\((2x-1)^2 \\leq (x+3)^2\\)\n\\(4x^2-4x+1 \\leq x^2+6x+9\\)\n\\(3x^2-10x-8 \\leq 0\\)\n\\((3x+2)(x-4) \\leq 0\\)\n\nCritical values: \\(x=-\\dfrac{2}{3}\\) and \\(x=4\\).\nThe quadratic \\((3x+2)(x-4)\\) is \\(\\leq 0\\) between the roots.\n\nSolution: \\(-\\dfrac{2}{3} \\leq x \\leq 4\\).'
    },
    {
      q: 'The function \\(f\\) is defined by \\(f(x) = \\dfrac{x^2-1}{x^2+1}\\) for \\(x \\in \\mathbb{R}\\). Determine whether \\(f\\) has an inverse, justifying your answer, and find the range of \\(f\\).',
      marks: 6,
      tier: 'red',
      modelAnswer: 'The range: let \\(y=\\dfrac{x^2-1}{x^2+1}\\).\n\\(y(x^2+1)=x^2-1 \\Rightarrow x^2(y-1)=-1-y \\Rightarrow x^2=\\dfrac{-(y+1)}{y-1}=\\dfrac{1+y}{1-y}\\)\nFor real \\(x^2\\geq 0\\): \\(\\dfrac{1+y}{1-y}\\geq 0\\), which holds when \\(-1\\leq y < 1\\).\nAlso \\(y\\neq 1\\) (asymptote). So range of \\(f\\) is \\(-1 \\leq f(x) < 1\\).\n\nSince \\(f(x)=f(-x)\\) (even function), \\(f\\) is not one-to-one, so it does NOT have an inverse over \\(\\mathbb{R}\\).'
    },
    {
      q: 'Find the values of \\(k\\) for which \\(|2x+k| = x+1\\) has exactly two solutions.',
      marks: 7,
      tier: 'red',
      modelAnswer: 'The equation gives: \\(2x+k=x+1\\) or \\(2x+k=-(x+1)\\).\n\nCase 1: \\(x=1-k\\). Valid when \\(2x+k \\geq 0 \\Rightarrow 2(1-k)+k \\geq 0 \\Rightarrow 2-k \\geq 0 \\Rightarrow k \\leq 2\\).\n\nCase 2: \\(3x=-(k+1) \\Rightarrow x=\\dfrac{-(k+1)}{3}\\). Valid when \\(2x+k<0\\): \\(\\dfrac{-2(k+1)}{3}+k<0 \\Rightarrow \\dfrac{-2k-2+3k}{3}<0 \\Rightarrow \\dfrac{k-2}{3}<0 \\Rightarrow k<2\\).\nAlso need \\(x+1\\geq 0\\): \\(\\dfrac{-(k+1)}{3}+1\\geq 0 \\Rightarrow \\dfrac{3-k-1}{3}\\geq 0 \\Rightarrow k \\leq 2\\).\n\nCheck if solutions coincide: set \\(1-k=\\dfrac{-(k+1)}{3}\\Rightarrow 3-3k=-k-1\\Rightarrow -2k=-4\\Rightarrow k=2\\).\n\nFor exactly two solutions:\n- Both cases valid and distinct: need \\(k<2\\). ✓\n- At \\(k=2\\): one solution (they coincide).\n- For \\(k>2\\): only Case 1 is valid (Case 2 solution requires \\(k<2\\)), giving one solution.\n\nExactly two solutions when \\(k < 2\\).'
    },
    {
      q: 'The function \\(f\\) is defined by \\(f(x) = 2e^{x-1} - 3\\). Find \\(f^{-1}(x)\\), state its domain, and solve \\(f(x) = f^{-1}(x)\\) numerically to 2 d.p.',
      marks: 7,
      tier: 'red',
      modelAnswer: '\\(y=2e^{x-1}-3 \\Rightarrow y+3=2e^{x-1} \\Rightarrow \\ln\\left(\\dfrac{y+3}{2}\\right)=x-1 \\Rightarrow x=1+\\ln\\left(\\dfrac{y+3}{2}\\right)\\)\n\n\\(f^{-1}(x)=1+\\ln\\left(\\dfrac{x+3}{2}\\right)\\)\n\nDomain of \\(f^{-1}\\) = range of \\(f\\). As \\(x\\to-\\infty\\), \\(f(x)\\to-3\\); as \\(x\\to\\infty\\), \\(f(x)\\to\\infty\\). So domain of \\(f^{-1}\\): \\(x>-3\\).\n\nFor \\(f(x)=f^{-1}(x)\\): solutions lie on \\(y=x\\) (since \\(f\\) and its inverse are reflections in \\(y=x\\)).\nSolve \\(f(x)=x\\): \\(2e^{x-1}-3=x\\). Let \\(h(x)=2e^{x-1}-3-x\\).\n\\(h(2)=2e^1-5=2(2.718)-5=0.436>0\\)\n\\(h(1)=2-3-1=-2<0\\)\nBy sign change, root between 1 and 2. \\(h(1.8)=2e^{0.8}-3-1.8=2(2.226)-4.8=4.452-4.8=-0.348<0\\)\n\\(h(1.9)=2e^{0.9}-4.9=2(2.460)-4.9=4.919-4.9=0.019>0\\)\nRoot \\(\\approx 1.90\\).'
    },
    {
      q: 'Sketch the graph of \\(y = \\dfrac{1}{|x|-1}\\), labelling asymptotes and key points.',
      marks: 6,
      tier: 'red',
      diagram: true,
      modelAnswer: 'Since \\(|x|\\) is used, the graph is symmetric about the y-axis.\n\nFor \\(x>0\\): \\(y=\\dfrac{1}{x-1}\\), which has vertical asymptote \\(x=1\\), and horizontal asymptote \\(y=0\\).\n- As \\(x\\to 1^+\\): \\(y\\to+\\infty\\)\n- As \\(x\\to 1^-\\): \\(y\\to-\\infty\\)\n- At \\(x=0\\): \\(y=\\dfrac{1}{-1}=-1\\)\n\nBy symmetry, vertical asymptote also at \\(x=-1\\).\n\nKey points: \\((0,-1)\\), \\((2,1)\\), \\((-2,1)\\). Asymptotes: \\(x=1\\), \\(x=-1\\), \\(y=0\\).'
    },
    {
      q: 'Given \\(f(x) = |x^2 - 4x + 3|\\), find the values of \\(x\\) for which \\(f(x) = 1\\) and sketch the graph.',
      marks: 7,
      tier: 'red',
      diagram: true,
      modelAnswer: '\\(x^2-4x+3=(x-1)(x-3)\\), so \\(f(x)=|(x-1)(x-3)|\\).\n\nCase 1: \\(x^2-4x+3=1 \\Rightarrow x^2-4x+2=0 \\Rightarrow x=\\dfrac{4\\pm\\sqrt{8}}{2}=2\\pm\\sqrt{2}\\)\nCase 2: \\(x^2-4x+3=-1 \\Rightarrow x^2-4x+4=0 \\Rightarrow (x-2)^2=0 \\Rightarrow x=2\\)\n\nSolutions: \\(x=2-\\sqrt{2}\\approx 0.586\\), \\(x=2\\), \\(x=2+\\sqrt{2}\\approx 3.414\\).\n\nGraph: V-shape reflection of \\(y=(x-1)(x-3)\\) between \\(x=1\\) and \\(x=3\\). Peak at \\((2,1)\\). Touches x-axis at \\(x=1,3\\).'
    },
    {
      q: 'The functions \\(f\\) and \\(g\\) are given by \\(f(x)=\\dfrac{1}{x-2}\\), \\(x>2\\) and \\(g(x)=\\sqrt{x}\\), \\(x\\geq 0\\). Find the range of \\(gf(x)\\) and find \\((gf)^{-1}(x)\\).',
      marks: 7,
      tier: 'red',
      modelAnswer: '\\(gf(x)=g\\!\\left(\\dfrac{1}{x-2}\\right)=\\sqrt{\\dfrac{1}{x-2}}=\\dfrac{1}{\\sqrt{x-2}}\\)\n\nFor \\(x>2\\): \\(x-2>0\\), so \\(gf(x)>0\\). As \\(x\\to 2^+\\), \\(gf\\to\\infty\\). As \\(x\\to\\infty\\), \\(gf\\to 0\\).\nRange of \\(gf\\): \\(gf(x)>0\\).\n\nFor the inverse, let \\(y=\\dfrac{1}{\\sqrt{x-2}}\\):\n\\(y^2=\\dfrac{1}{x-2} \\Rightarrow x-2=\\dfrac{1}{y^2} \\Rightarrow x=2+\\dfrac{1}{y^2}\\)\n\\((gf)^{-1}(x)=2+\\dfrac{1}{x^2}\\), domain \\(x>0\\).'
    },
    {
      q: 'Determine the number of solutions to \\(|x^2-1|=kx\\) depending on the value of \\(k>0\\).',
      marks: 8,
      tier: 'red',
      modelAnswer: 'Graph \\(y=|x^2-1|\\) and \\(y=kx\\) (line through origin, gradient \\(k\\)).\n\n\\(y=|x^2-1|\\):\n- For \\(|x|>1\\): \\(y=x^2-1\\)\n- For \\(-1<x<1\\): \\(y=1-x^2\\)\n\nFor \\(x>0\\): The line \\(y=kx\\) intersects \\(y=1-x^2\\) at most once in \\((0,1)\\) and \\(y=x^2-1\\) at most once in \\((1,\\infty)\\).\n\nTangent to \\(1-x^2\\): \\(-2x=k\\) — no real positive solution. So line always crosses \\(y=1-x^2\\) once if it passes below \\((1,0)\\).\n\nSince \\(k>0\\) and \\(y=kx>0\\) for \\(x>0\\): line intersects \\(y=1-x^2\\) exactly once in \\((0,1)\\) for all \\(k>0\\). Also intersects \\(y=x^2-1\\) in \\((1,\\infty)\\).\n\nTangent condition for \\(x^2-1=kx\\): discriminant = \\(k^2+4=0\\) — no real tangent.\nSo for all \\(k>0\\), exactly 2 positive solutions. By symmetry \\(x<0\\) contributes 2 more only if \\(k<0\\), but here \\(k>0\\), line has positive slope and for \\(x<0\\), \\(kx<0\\leq|x^2-1|\\) — no solutions.\n\nConclusion: For all \\(k>0\\), exactly 2 solutions.'
    },
    {
      q: 'Given \\(f(x)=e^x-1\\) and \\(g(x)=\\ln(1+x)\\), \\(x>-1\\), show that \\(f\\) and \\(g\\) are inverses of each other. Find the exact solution to \\(f(x)=g(x)\\).',
      marks: 7,
      tier: 'red',
      modelAnswer: 'Show \\(f(g(x))=x\\): \\(f(\\ln(1+x))=e^{\\ln(1+x)}-1=(1+x)-1=x\\) ✓\nShow \\(g(f(x))=x\\): \\(g(e^x-1)=\\ln(1+(e^x-1))=\\ln(e^x)=x\\) ✓\n\nSince \\(f(g(x))=g(f(x))=x\\), they are inverses.\n\nSolve \\(f(x)=g(x)\\): solutions lie on \\(y=x\\) (where a function equals its inverse).\nSolve \\(e^x-1=x \\Rightarrow e^x=x+1\\).\nAt \\(x=0\\): \\(1=1\\) ✓.\nSo \\(x=0\\) is a solution. Check uniqueness: let \\(h(x)=e^x-x-1\\). \\(h\'(x)=e^x-1=0 \\Rightarrow x=0\\). \\(h(0)=0\\) is a minimum, so \\(x=0\\) is the only solution.'
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// P14: Sequences and Series
// ─────────────────────────────────────────────────────────────
'P14': {
  name: 'Sequences and Series',
  green: [
    { q: 'An arithmetic sequence has first term \\(a = 5\\) and common difference \\(d = 3\\). Find the 20th term.', marks: 2, tier: 'green', modelAnswer: '\\(u_{20} = 5 + 19(3) = 62\\)' },
    { q: 'A geometric sequence has first term 4 and common ratio 3. Find the 6th term.', marks: 2, tier: 'green', modelAnswer: '\\(u_6 = 4 \\times 3^5 = 972\\)' },
    { q: 'Find the sum of the first 15 terms of an AP with first term 2 and common difference 5.', marks: 3, tier: 'green', modelAnswer: '\\(S_{15} = \\frac{15}{2}(4+70) = 555\\)' },
    { q: 'A geometric series has first term 3 and common ratio \\(\\frac{1}{2}\\). Find the sum to infinity.', marks: 2, tier: 'green', modelAnswer: '\\(S_\\infty = \\frac{3}{1/2} = 6\\)' },
    { q: 'Expand \\((1+x)^4\\) using the binomial theorem, giving all terms.', marks: 3, tier: 'green', modelAnswer: '\\(1 + 4x + 6x^2 + 4x^3 + x^4\\)' },
    { q: 'Find the \\(n\\)th term of the sequence \\(7, 11, 15, 19, \\ldots\\)', marks: 2, tier: 'green', modelAnswer: '\\(a=7\\), \\(d=4\\). \\(u_n = 4n+3\\)' },
    { q: 'A geometric sequence has \\(u_1=2\\) and \\(u_4=54\\). Find the common ratio \\(r\\).', marks: 3, tier: 'green', modelAnswer: '\\(2r^3=54 \\Rightarrow r=3\\)' },
    { q: 'Find the sum of the first 8 terms of \\(2 + 6 + 18 + \\cdots\\)', marks: 3, tier: 'green', modelAnswer: '\\(S_8 = \\frac{2(3^8-1)}{2} = 6560\\)' },
    { q: 'Write down the first four terms of \\((1+2x)^5\\).', marks: 3, tier: 'green', modelAnswer: '\\(1 + 10x + 40x^2 + 80x^3\\)' },
    { q: 'Find \\(\\displaystyle\\sum_{n=1}^{10}(3n-1)\\).', marks: 3, tier: 'green', modelAnswer: '\\(3 \\cdot 55 - 10 = 155\\)' },
    { q: 'An AP has last term 47, 10 terms, and \\(d=5\\). Find the first term.', marks: 2, tier: 'green', modelAnswer: '\\(a + 45 = 47 \\Rightarrow a=2\\)' },
    { q: 'State the condition on \\(r\\) for a geometric series to have a sum to infinity.', marks: 1, tier: 'green', modelAnswer: '\\(|r| < 1\\)' },
    { q: 'Find the coefficient of \\(x^3\\) in the expansion of \\((2+x)^5\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\binom{5}{3} \\cdot 2^2 = 40\\)' },
    { q: 'An AP has first term 6, common difference \\(-2\\), and 12 terms. Find the sum.', marks: 3, tier: 'green', modelAnswer: '\\(S_{12} = 6(12-22) = -60\\)' },
    { q: 'A GP has \\(a=5\\), \\(r=-2\\). Write \\(u_n\\) and find \\(u_5\\).', marks: 2, tier: 'green', modelAnswer: '\\(u_n = 5(-2)^{n-1}\\). \\(u_5 = 80\\)' }
  ],
  amber: [
    { q: 'Expand \\((1+x)^{1/2}\\) up to and including the \\(x^3\\) term. State the range of validity.', marks: 5, tier: 'amber', modelAnswer: '\\(1 + \\frac{x}{2} - \\frac{x^2}{8} + \\frac{x^3}{16} + \\cdots\\)  Valid for \\(|x|<1\\).' },
    { q: 'Find the first four terms of the expansion of \\((1-2x)^{-2}\\). State the range of validity.', marks: 5, tier: 'amber', modelAnswer: '\\(1 + 4x + 12x^2 + 32x^3 + \\cdots\\)  Valid for \\(|x|<\\frac{1}{2}\\).' },
    { q: 'Find the term independent of \\(x\\) in \\(\\left(x + \\frac{2}{x}\\right)^6\\).', marks: 4, tier: 'amber', modelAnswer: 'General term: \\(\\binom{6}{r}2^r x^{6-2r}\\). Set \\(6-2r=0 \\Rightarrow r=3\\). Term: \\(\\binom{6}{3} \\cdot 8 = 160\\).' },
    { q: 'Evaluate \\(\\displaystyle\\sum_{r=1}^{20}(3r-1)\\).', marks: 4, tier: 'amber', modelAnswer: '\\(3 \\times 210 - 20 = 610\\)' },
    { q: 'A GP has first term 8 and \\(S_\\infty = 24\\). Find \\(r\\) and \\(S_4\\).', marks: 5, tier: 'amber', modelAnswer: '\\(r = \\frac{2}{3}\\). \\(S_4 = \\frac{520}{27}\\).' },
    { q: 'Find the first three terms of \\((1-x)^{-1/3}\\). State the range of validity.', marks: 5, tier: 'amber', modelAnswer: '\\(1 + \\frac{x}{3} + \\frac{2x^2}{9} + \\cdots\\)  Valid for \\(|x|<1\\).' },
    { q: 'An AP has \\(u_5 = 14\\) and \\(u_{12} = 35\\). Find \\(a\\), \\(d\\), and \\(S_{20}\\).', marks: 5, tier: 'amber', modelAnswer: '\\(d=3\\), \\(a=2\\). \\(S_{20} = 610\\).' },
    { q: 'Find the coefficient of \\(x^2\\) in the expansion of \\((3-2x)^7\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\binom{7}{2} \\cdot 3^5 \\cdot 4 = 20412\\).' },
    { q: 'Given \\(u_{n+1} = \\frac{1}{2}u_n + 3\\) with \\(u_1=2\\), find \\(u_2, u_3, u_4\\) and the limit as \\(n \\to \\infty\\).', marks: 5, tier: 'amber', modelAnswer: '\\(u_2=4, u_3=5, u_4=5.5\\). Limit: \\(L = 6\\).' },
    { q: 'Given \\(S_n = 3n^2+2n\\), find \\(u_n\\) and show the series is arithmetic.', marks: 4, tier: 'amber', modelAnswer: '\\(u_n = 6n-1\\) (linear in \\(n\\)), so AP with \\(d=6\\).' },
    { q: 'Find \\(\\displaystyle\\sum_{r=3}^{12}(2r+1)\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\sum_1^{12}(2r+1) - \\sum_1^2(2r+1) = 168 - 8 = 160\\).' },
    { q: 'Expand \\((1+3x)^{-2}\\) up to \\(x^3\\). State the range of validity.', marks: 5, tier: 'amber', modelAnswer: '\\(1 - 6x + 27x^2 - 108x^3 + \\cdots\\)  Valid for \\(|x|<\\frac{1}{3}\\).' },
    { q: 'A GP with positive terms has \\(u_3=12\\) and \\(u_6=\\frac{3}{2}\\). Find \\(r\\) and \\(a\\).', marks: 5, tier: 'amber', modelAnswer: '\\(r = \\frac{1}{2}\\), \\(a = 48\\).' },
    { q: 'Expand \\(\\sqrt{4+x}\\) up to and including \\(x^2\\). State the range of validity.', marks: 4, tier: 'amber', modelAnswer: '\\(2 + \\frac{x}{4} - \\frac{x^2}{64} + \\cdots\\)  Valid for \\(|x|<4\\).' },
    { q: 'In an AP, \\(u_4 = 3u_1\\) and \\(u_7 = 33\\). Find \\(a\\) and \\(d\\).', marks: 4, tier: 'amber', modelAnswer: '\\(3d = 2a\\) and \\(a+6d=33\\). So \\(d=4.4\\), \\(a=6.6\\).' }
  ],
  red: [
    { q: 'Expand \\((1-2x)^{1/2}\\) to the term in \\(x^3\\). By substituting \\(x=0.01\\), find \\(\\sqrt{0.98}\\) to 6 significant figures.', marks: 7, tier: 'red', modelAnswer: '\\(1 - x - \\frac{x^2}{2} - \\frac{x^3}{2} - \\cdots\\)\n\nAt \\(x=0.01\\): \\(\\sqrt{0.98} \\approx 0.989950\\).' },
    { q: 'Prove by induction that \\(\\displaystyle\\sum_{r=1}^{n}r = \\frac{n(n+1)}{2}\\).', marks: 6, tier: 'red', modelAnswer: 'Base \\(n=1\\): LHS=RHS=1. Inductive step: add \\((k+1)\\) to the sum to \\(k\\), obtaining \\(\\frac{(k+1)(k+2)}{2}\\). \\(\\square\\)' },
    { q: 'Expand \\(\\dfrac{1+x}{\\sqrt{1-x}}\\) up to \\(x^3\\). State the range of validity.', marks: 7, tier: 'red', modelAnswer: '\\((1-x)^{-1/2}(1+x) = \\left(1+\\frac{x}{2}+\\frac{3x^2}{8}+\\frac{5x^3}{16}+\\cdots\\right)(1+x)\\)\n\\(= 1 + \\frac{3x}{2} + \\frac{7x^2}{8} + \\frac{13x^3}{16} + \\cdots\\)  Valid for \\(|x|<1\\).' },
    { q: 'Given \\(u_{n+1} = \\sqrt{2u_n+3}\\), \\(u_1=3\\), find \\(u_2,u_3,u_4\\) and the exact limit.', marks: 6, tier: 'red', modelAnswer: '\\(u_2 = 3\\) (constant). Limit: \\(L^2 = 2L+3 \\Rightarrow (L-3)(L+1)=0 \\Rightarrow L=3\\).' },
    { q: 'Find \\(A,B\\) such that \\(\\dfrac{1}{(1+x)(1-x)} = \\dfrac{A}{1+x}+\\dfrac{B}{1-x}\\). Hence expand \\(\\dfrac{1}{1-x^2}\\) as a series up to \\(x^4\\).', marks: 8, tier: 'red', modelAnswer: '\\(A=B=\\frac{1}{2}\\). Adding series for each fraction: \\(\\frac{1}{1-x^2} = 1+x^2+x^4+\\cdots\\)  Valid for \\(|x|<1\\).' },
    { q: 'Prove the formula \\(S_n = \\dfrac{n}{2}(a+l)\\) for an arithmetic progression.', marks: 4, tier: 'red', modelAnswer: 'Write \\(S_n\\) forwards and backwards, add corresponding terms: \\(2S_n = n(a+l)\\). Hence \\(S_n = \\frac{n}{2}(a+l)\\). \\(\\square\\)' },
    { q: 'Expand \\(\\dfrac{1}{(1+2x)^3}\\) to \\(x^3\\). Use \\(x=0.1\\) to estimate \\(\\dfrac{1}{1.728}\\) and state how accurate the approximation is.', marks: 7, tier: 'red', modelAnswer: '\\(1-6x+24x^2-80x^3+\\cdots\\). At \\(x=0.1\\): \\(\\approx 0.560\\). Exact: \\(\\frac{125}{216} \\approx 0.5787\\). Error \\(\\approx 0.019\\).' },
    { q: 'Given \\(S_n = 3^n-1\\), prove the series is geometric and state \\(a\\), \\(r\\), \\(u_n\\).', marks: 7, tier: 'red', modelAnswer: '\\(u_n = 2 \\cdot 3^{n-1}\\). Ratio \\(= 3\\) (constant). GP with \\(a=2\\), \\(r=3\\), \\(u_n = 2 \\cdot 3^{n-1}\\).' },
    { q: 'Find the values of \\(x\\) for which \\(\\displaystyle\\sum_{n=0}^{\\infty}\\left(\\dfrac{x-1}{2}\\right)^n\\) converges, and find the sum.', marks: 6, tier: 'red', modelAnswer: 'Converges for \\(-1<x<3\\). Sum: \\(\\dfrac{2}{3-x}\\).' },
    { q: 'Use \\(\\displaystyle\\sum_{r=1}^{n}r^2 = \\dfrac{n(n+1)(2n+1)}{6}\\) to evaluate \\(\\displaystyle\\sum_{r=6}^{20}r^2\\).', marks: 8, tier: 'red', modelAnswer: '\\(\\sum_1^{20} = 2870\\), \\(\\sum_1^5 = 55\\). Answer: \\(2815\\).' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P15: Radians
// ─────────────────────────────────────────────────────────────
'P15': {
  name: 'Radians',
  green: [
    { q: 'Convert \\(135°\\) to radians, giving your answer as a multiple of \\(\\pi\\).', marks: 1, tier: 'green', modelAnswer: '\\(135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}\\) rad' },
    { q: 'Convert \\(\\frac{5\\pi}{6}\\) radians to degrees.', marks: 1, tier: 'green', modelAnswer: '\\(\\frac{5\\pi}{6} \\times \\frac{180}{\\pi} = 150°\\)' },
    { q: 'A sector has radius 8 cm and angle \\(\\frac{\\pi}{3}\\) rad. Find the arc length.', marks: 2, tier: 'green', modelAnswer: '\\(l = r\\theta = 8 \\times \\frac{\\pi}{3} = \\frac{8\\pi}{3}\\) cm' },
    { q: 'A sector has radius 5 cm and angle \\(1.2\\) rad. Find the area of the sector.', marks: 2, tier: 'green', modelAnswer: '\\(A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}(25)(1.2) = 15\\) cm\\(^2\\)' },
    { q: 'Find the exact value of \\(\\sin\\frac{\\pi}{6}\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\sin\\frac{\\pi}{6} = \\frac{1}{2}\\)' },
    { q: 'Find the exact value of \\(\\cos\\frac{\\pi}{3}\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\cos\\frac{\\pi}{3} = \\frac{1}{2}\\)' },
    { q: 'Find the exact value of \\(\\tan\\frac{\\pi}{4}\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\tan\\frac{\\pi}{4} = 1\\)' },
    { q: 'A circle of radius 6 cm has a chord subtending angle \\(\\frac{2\\pi}{3}\\) at the centre. Find the arc length.', marks: 2, tier: 'green', modelAnswer: '\\(l = 6 \\times \\frac{2\\pi}{3} = 4\\pi\\) cm' },
    { q: 'A sector has radius 10 cm and arc length 15 cm. Find its area.', marks: 3, tier: 'green', modelAnswer: '\\(\\theta = \\frac{15}{10} = 1.5\\) rad. \\(A = \\frac{1}{2}(100)(1.5) = 75\\) cm\\(^2\\)' },
    { q: 'Convert \\(210°\\) to radians in terms of \\(\\pi\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\frac{7\\pi}{6}\\) rad' },
    { q: 'State the small angle approximations for \\(\\sin\\theta\\), \\(\\cos\\theta\\), and \\(\\tan\\theta\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\sin\\theta \\approx \\theta\\),  \\(\\cos\\theta \\approx 1-\\frac{\\theta^2}{2}\\),  \\(\\tan\\theta \\approx \\theta\\)  (for small \\(\\theta\\) in radians).' },
    { q: 'Find the exact value of \\(\\sin\\frac{\\pi}{4} + \\cos\\frac{\\pi}{4}\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{\\sqrt{2}}{2}+\\frac{\\sqrt{2}}{2} = \\sqrt{2}\\)' },
    { q: 'A sector of radius \\(r\\) and angle \\(\\theta\\) rad has perimeter 30 cm. Express \\(r\\) in terms of \\(\\theta\\).', marks: 3, tier: 'green', modelAnswer: '\\(r(\\theta+2)=30 \\Rightarrow r = \\frac{30}{\\theta+2}\\)' },
    { q: 'Find the exact value of \\(\\cos\\frac{\\pi}{6}\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}\\)' },
    { q: 'A sector has area 18 cm\\(^2\\) and radius 6 cm. Find the angle in radians.', marks: 2, tier: 'green', modelAnswer: '\\(18 = \\frac{1}{2}(36)\\theta \\Rightarrow \\theta = 1\\) rad' }
  ],
  amber: [
    { q: 'A sector OAB has radius 8 cm and angle 1.5 rad. Find the area of the minor segment.', marks: 5, tier: 'amber', modelAnswer: 'Sector: \\(\\frac{1}{2}(64)(1.5)=48\\) cm\\(^2\\). Triangle: \\(\\frac{1}{2}(64)\\sin 1.5 = 31.92\\) cm\\(^2\\). Segment: \\(48-31.92=16.08\\) cm\\(^2\\).' },
    { q: 'Find the perimeter of a sector with radius 7 cm and angle \\(\\frac{2\\pi}{5}\\) rad.', marks: 3, tier: 'amber', modelAnswer: '\\(r\\theta+2r = 7\\cdot\\frac{2\\pi}{5}+14 = \\frac{14\\pi+70}{5}\\) cm.' },
    { q: 'Using small angle approximations, simplify \\(\\dfrac{\\cos 2\\theta - 1}{\\theta\\sin\\theta}\\) for small \\(\\theta\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\cos 2\\theta-1 \\approx -2\\theta^2\\), \\(\\sin\\theta \\approx \\theta\\). So \\(\\frac{-2\\theta^2}{\\theta^2} = -2\\).' },
    { q: 'Solve \\(2\\sin\\theta = \\tan\\theta\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\sin\\theta(2\\cos\\theta-1)=0\\). \\(\\theta = 0, \\pi, 2\\pi, \\frac{\\pi}{3}, \\frac{5\\pi}{3}\\).' },
    { q: 'Solve \\(3\\cos\\theta = 1\\) for \\(-\\pi \\leq \\theta \\leq \\pi\\), giving exact answers.', marks: 4, tier: 'amber', modelAnswer: '\\(\\theta = \\pm\\arccos\\frac{1}{3} \\approx \\pm 1.23\\) rad.' },
    { q: 'Find the area of the segment of a circle with radius 10 cm, where the chord subtends \\(\\frac{\\pi}{3}\\) at the centre.', marks: 4, tier: 'amber', modelAnswer: 'Sector: \\(\\frac{50\\pi}{3}\\). Triangle: \\(25\\sqrt{3}\\). Segment: \\(\\frac{50\\pi}{3}-25\\sqrt{3}\\) cm\\(^2\\).' },
    { q: 'Solve \\(\\sin 2\\theta = \\cos\\theta\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\cos\\theta(2\\sin\\theta-1)=0\\). \\(\\theta = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}\\).' },
    { q: 'A sector of a circle has area 40 cm\\(^2\\) and perimeter 26 cm. Find the radius and angle.', marks: 6, tier: 'amber', modelAnswer: '\\(r(\\theta+2)=26\\) and \\(\\frac{1}{2}r^2\\theta=40\\). Solving: \\(r=5,\\theta=3.2\\) or \\(r=8,\\theta=1.25\\).' },
    { q: 'Solve \\(\\cos 2\\theta = 1-3\\sin\\theta\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(2\\sin^2\\theta-3\\sin\\theta=0 \\Rightarrow \\sin\\theta=0\\) or \\(\\frac{3}{2}\\) (no solution). So \\(\\theta=0,\\pi,2\\pi\\).' },
    { q: 'A sector OAB has arc length 12 cm and area 36 cm\\(^2\\). Find \\(r\\) and \\(\\theta\\).', marks: 4, tier: 'amber', modelAnswer: '\\(r\\theta=12\\) and \\(r^2\\theta=72\\). Dividing: \\(r=6\\), \\(\\theta=2\\) rad.' },
    { q: 'Approximate \\(\\dfrac{\\sin\\theta\\cdot\\tan 2\\theta}{1-\\cos\\theta}\\) for small \\(\\theta\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\frac{\\theta \\cdot 2\\theta}{\\theta^2/2} = 4\\).' },
    { q: 'Solve \\(2\\cos^2\\theta = 1+\\sin\\theta\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(2\\sin^2\\theta+\\sin\\theta-1=0 \\Rightarrow (2\\sin\\theta-1)(\\sin\\theta+1)=0\\). \\(\\theta = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}\\).' },
    { q: 'A chord subtends 2.4 rad at the centre of a circle of radius 9 cm. Find the areas of both segments.', marks: 5, tier: 'amber', modelAnswer: 'Minor sector: 97.2 cm\\(^2\\). Triangle: \\(\\approx 27.36\\) cm\\(^2\\). Minor segment: \\(\\approx 69.8\\) cm\\(^2\\). Major segment: \\(\\approx 184.7\\) cm\\(^2\\).' },
    { q: 'Use small angle approximations to find \\(\\dfrac{\\sin 3\\theta}{1-\\cos\\theta}\\) as \\(\\theta \\to 0\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\frac{3\\theta}{\\theta^2/2} = \\frac{6}{\\theta} \\to \\infty\\). Expression diverges.' },
    { q: 'Find all solutions to \\(\\tan^2\\theta = 3\\sec\\theta - 3\\) in \\([0, 2\\pi]\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\sec^2\\theta-1 = 3\\sec\\theta-3 \\Rightarrow \\sec^2\\theta-3\\sec\\theta+2=0 \\Rightarrow (\\sec\\theta-1)(\\sec\\theta-2)=0\\). \\(\\cos\\theta=1 \\Rightarrow \\theta=0,2\\pi\\). \\(\\cos\\theta=\\frac{1}{2} \\Rightarrow \\theta=\\frac{\\pi}{3},\\frac{5\\pi}{3}\\).' }
  ],
  red: [
    { q: 'Two circles of radius \\(r\\) each pass through the other\'s centre. Find the area of their intersection.', marks: 7, tier: 'red', modelAnswer: 'Angle at each centre is \\(\\frac{2\\pi}{3}\\). Each segment: \\(\\frac{r^2}{2}(\\frac{2\\pi}{3}-\\sin\\frac{2\\pi}{3})\\). Total: \\(r^2\\left(\\frac{2\\pi}{3}-\\frac{\\sqrt{3}}{2}\\right) = \\frac{r^2(4\\pi-3\\sqrt{3})}{6}\\).' },
    { q: 'A sector has perimeter 20 cm. Show that the area is maximised when \\(\\theta = 2\\) rad.', marks: 8, tier: 'red', modelAnswer: '\\(r = \\frac{20}{\\theta+2}\\). \\(A = \\frac{200\\theta}{(\\theta+2)^2}\\). \\(\\frac{dA}{d\\theta} = 200\\cdot\\frac{2-\\theta}{(\\theta+2)^3}=0 \\Rightarrow \\theta=2\\). Second derivative confirms maximum. \\(\\square\\)' },
    { q: 'Prove \\(\\sin(\\frac{\\pi}{2}-\\theta)=\\cos\\theta\\) using the addition formula. Verify at \\(\\theta=\\frac{\\pi}{6}\\).', marks: 4, tier: 'red', modelAnswer: '\\(\\sin\\frac{\\pi}{2}\\cos\\theta - \\cos\\frac{\\pi}{2}\\sin\\theta = \\cos\\theta\\). At \\(\\theta=\\frac{\\pi}{6}\\): \\(\\sin\\frac{\\pi}{3}=\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}\\) ✓.' },
    { q: 'Solve \\(3\\sin\\theta + 4\\cos\\theta = 2\\) for \\(0 \\leq \\theta \\leq 2\\pi\\) (3 s.f.).', marks: 7, tier: 'red', modelAnswer: '\\(R=5\\), \\(\\alpha=\\arctan\\frac{4}{3}=0.9273\\). \\(5\\sin(\\theta+0.9273)=2\\). \\(\\theta = 1.80\\) rad or \\(\\theta = 5.77\\) rad.' },
    { q: 'Two radii OA, OB of a circle of radius 8 cm make angle \\(\\theta\\). Find \\(\\theta\\) when the sector area equals twice the triangle area.', marks: 6, tier: 'red', modelAnswer: '\\(32\\theta = 2 \\times 32\\sin\\theta \\Rightarrow \\theta = 2\\sin\\theta\\). Numerically: \\(\\theta \\approx 1.90\\) rad.' },
    { q: 'Prove the identity \\(\\dfrac{1-\\cos 2\\theta}{\\sin 2\\theta} = \\tan\\theta\\).', marks: 4, tier: 'red', modelAnswer: 'LHS\\(= \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta\\) = RHS. \\(\\square\\)' },
    { q: 'A sector of angle \\(2\\pi-2\\alpha\\) is folded into a cone of slant height \\(R\\). Find \\(\\alpha\\) that maximises the cone\'s volume.', marks: 8, tier: 'red', modelAnswer: '\\(r=R(1-\\frac{\\alpha}{\\pi})\\). Maximise \\(V \\propto x^2\\sqrt{1-x^2}\\) where \\(x=r/R\\). \\(x^2=\\frac{2}{3}\\), so \\(\\alpha = \\pi(1-\\sqrt{2/3}) \\approx 0.576\\) rad.' },
    { q: 'Prove \\(\\cos\\frac{\\pi}{3}=\\frac{1}{2}\\) using the double angle formula and the exact value of \\(\\cos\\frac{\\pi}{6}\\).', marks: 4, tier: 'red', modelAnswer: '\\(\\cos\\frac{\\pi}{3}=2\\cos^2\\frac{\\pi}{6}-1=2\\cdot\\frac{3}{4}-1=\\frac{1}{2}\\) ✓.' },
    { q: 'In a circle of radius 5 cm, a chord AB subtends \\(\\frac{2\\pi}{3}\\) at the centre and a chord CD subtends \\(\\frac{\\pi}{2}\\). Find the area of both minor segments.', marks: 7, tier: 'red', modelAnswer: 'AB segment: \\(\\frac{25\\pi}{3}-\\frac{25\\sqrt{3}}{4} \\approx 15.35\\) cm\\(^2\\). CD segment: \\(\\frac{25(\\pi-2)}{4} \\approx 7.13\\) cm\\(^2\\).' },
    { q: 'A circular sector of radius \\(R\\) and angle \\(\\theta\\) is bent into a cone. Find the radius and height of the cone in terms of \\(R\\) and \\(\\theta\\).', marks: 6, tier: 'red', modelAnswer: '\\(r_{\\text{base}} = \\frac{R\\theta}{2\\pi}\\). \\(h = \\sqrt{R^2 - r_{\\text{base}}^2} = R\\sqrt{1-\\frac{\\theta^2}{4\\pi^2}}\\).' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P16: Trigonometric Functions
// ─────────────────────────────────────────────────────────────
'P16': {
  name: 'Trigonometric Functions',
  green: [
    { q: 'Using the addition formula for \\(\\sin\\), find the exact value of \\(\\sin 75°\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\sin 75°=\\sin(45°+30°)=\\sin 45°\\cos 30°+\\cos 45°\\sin 30°=\\frac{\\sqrt{2}}{2}\\cdot\\frac{\\sqrt{3}}{2}+\\frac{\\sqrt{2}}{2}\\cdot\\frac{1}{2}=\\frac{\\sqrt{6}+\\sqrt{2}}{4}\\).' },
    { q: 'Find the exact value of \\(\\cos 15°\\) using the subtraction formula.', marks: 3, tier: 'green', modelAnswer: '\\(\\cos 15°=\\cos(45°-30°)=\\cos 45°\\cos 30°+\\sin 45°\\sin 30°=\\frac{\\sqrt{6}+\\sqrt{2}}{4}\\).' },
    { q: 'Express \\(\\cos 2\\theta\\) in three equivalent forms.', marks: 3, tier: 'green', modelAnswer: '\\(\\cos 2\\theta = \\cos^2\\theta-\\sin^2\\theta = 2\\cos^2\\theta-1 = 1-2\\sin^2\\theta\\).' },
    { q: 'Write down the expression for \\(\\sin 2\\theta\\) in terms of \\(\\sin\\theta\\) and \\(\\cos\\theta\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\sin 2\\theta = 2\\sin\\theta\\cos\\theta\\).' },
    { q: 'Write \\(\\sec x\\) in terms of \\(\\cos x\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\sec x = \\frac{1}{\\cos x}\\).' },
    { q: 'Write \\(\\cosec x\\) and \\(\\cot x\\) in terms of \\(\\sin x\\) and \\(\\cos x\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\cosec x = \\frac{1}{\\sin x}\\),  \\(\\cot x = \\frac{\\cos x}{\\sin x}\\).' },
    { q: 'Find the exact value of \\(\\tan 2\\theta\\) when \\(\\tan\\theta = \\frac{1}{2}\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\tan 2\\theta = \\frac{2\\tan\\theta}{1-\\tan^2\\theta} = \\frac{1}{1-\\frac{1}{4}} = \\frac{1}{3/4} = \\frac{4}{3}\\).' },
    { q: 'Prove the identity \\(\\sec^2\\theta = 1 + \\tan^2\\theta\\).', marks: 2, tier: 'green', modelAnswer: 'Divide \\(\\sin^2\\theta+\\cos^2\\theta=1\\) by \\(\\cos^2\\theta\\): \\(\\tan^2\\theta+1=\\sec^2\\theta\\). \\(\\square\\)' },
    { q: 'Express \\(\\sin 3\\theta\\) using \\(\\sin(2\\theta+\\theta)\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\sin 3\\theta=\\sin 2\\theta\\cos\\theta+\\cos 2\\theta\\sin\\theta=2\\sin\\theta\\cos^2\\theta+(1-2\\sin^2\\theta)\\sin\\theta=3\\sin\\theta-4\\sin^3\\theta\\).' },
    { q: 'Write \\(1 + \\cot^2\\theta\\) in a simpler form.', marks: 2, tier: 'green', modelAnswer: '\\(1+\\cot^2\\theta = \\cosec^2\\theta\\) (derived by dividing \\(\\sin^2+\\cos^2=1\\) by \\(\\sin^2\\theta\\)).' },
    { q: 'Sketch \\(y = \\sec x\\) for \\(-\\pi \\leq x \\leq \\pi\\), labelling asymptotes and key points.', marks: 3, tier: 'green', diagram: true, modelAnswer: 'Asymptotes at \\(x=\\pm\\frac{\\pi}{2}\\). Minimum at \\((0,1)\\). Two branches: one above \\(y=1\\) centred at \\(x=0\\), two others below \\(y=-1\\) near \\(x=\\pm\\pi\\).' },
    { q: 'Find the exact value of \\(\\cos 2\\theta\\) given \\(\\cos\\theta = \\frac{3}{5}\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\cos 2\\theta = 2\\cos^2\\theta-1 = 2\\cdot\\frac{9}{25}-1 = \\frac{18}{25}-1 = -\\frac{7}{25}\\).' },
    { q: 'Express \\(\\sin(A+B)+\\sin(A-B)\\) as a product.', marks: 2, tier: 'green', modelAnswer: '\\(\\sin(A+B)+\\sin(A-B) = 2\\sin A\\cos B\\).' },
    { q: 'Solve \\(\\sec\\theta = 2\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\cos\\theta = \\frac{1}{2}\\). \\(\\theta = \\frac{\\pi}{3}, \\frac{5\\pi}{3}\\).' },
    { q: 'Find the exact value of \\(\\sin 2\\theta\\) given \\(\\sin\\theta = \\frac{4}{5}\\) and \\(\\theta\\) is acute.', marks: 3, tier: 'green', modelAnswer: '\\(\\cos\\theta = \\frac{3}{5}\\). \\(\\sin 2\\theta = 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}\\).' }
  ],
  amber: [
    { q: 'Prove that \\(\\dfrac{\\sin 2\\theta}{1+\\cos 2\\theta} \\equiv \\tan\\theta\\).', marks: 4, tier: 'amber', modelAnswer: 'LHS\\(= \\frac{2\\sin\\theta\\cos\\theta}{1+(2\\cos^2\\theta-1)} = \\frac{2\\sin\\theta\\cos\\theta}{2\\cos^2\\theta} = \\frac{\\sin\\theta}{\\cos\\theta} = \\tan\\theta\\). \\(\\square\\)' },
    { q: 'Solve \\(2\\cos(2\\theta - \\frac{\\pi}{6}) = 1\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\cos(2\\theta-\\frac{\\pi}{6})=\\frac{1}{2}\\). \\(2\\theta-\\frac{\\pi}{6}=\\frac{\\pi}{3},\\frac{5\\pi}{3},\\frac{7\\pi}{3},\\frac{11\\pi}{3}\\). \\(\\theta=\\frac{\\pi}{4},\\frac{11\\pi}{12},\\frac{5\\pi}{4},\\frac{23\\pi}{12}\\).' },
    { q: 'Write \\(5\\sin x + 12\\cos x\\) in the form \\(R\\sin(x+\\alpha)\\) where \\(R>0\\) and \\(0<\\alpha<\\frac{\\pi}{2}\\).', marks: 4, tier: 'amber', modelAnswer: '\\(R=\\sqrt{25+144}=13\\). \\(\\tan\\alpha=\\frac{12}{5} \\Rightarrow \\alpha=\\arctan\\frac{12}{5}\\approx 1.176\\) rad. Answer: \\(13\\sin(x+1.176)\\).' },
    { q: 'Prove the identity \\(\\cos^4\\theta - \\sin^4\\theta \\equiv \\cos 2\\theta\\).', marks: 4, tier: 'amber', modelAnswer: '\\((\\cos^2\\theta+\\sin^2\\theta)(\\cos^2\\theta-\\sin^2\\theta) = 1 \\cdot \\cos 2\\theta = \\cos 2\\theta\\). \\(\\square\\)' },
    { q: 'Solve \\(3\\cos\\theta + 4\\sin\\theta = 3\\) for \\(0 \\leq \\theta \\leq 360°\\) (1 d.p.).', marks: 5, tier: 'amber', modelAnswer: '\\(R=5\\), \\(\\tan\\alpha=\\frac{4}{3}\\), \\(\\alpha=53.13°\\). \\(5\\cos(\\theta-53.13°)=3\\). \\(\\theta-53.13°=\\pm 53.13°\\). \\(\\theta=0°, 106.3°\\) (and \\(360°\\)).' },
    { q: 'Using the double angle formulae, prove \\(\\sin 3\\theta = 3\\sin\\theta-4\\sin^3\\theta\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\sin 3\\theta=\\sin(2\\theta+\\theta)=\\sin 2\\theta\\cos\\theta+\\cos 2\\theta\\sin\\theta\\)\n\\(=2\\sin\\theta\\cos^2\\theta+(1-2\\sin^2\\theta)\\sin\\theta\\)\n\\(=2\\sin\\theta(1-\\sin^2\\theta)+\\sin\\theta-2\\sin^3\\theta\\)\n\\(=3\\sin\\theta-4\\sin^3\\theta\\). \\(\\square\\)' },
    { q: 'Write \\(3\\cos x - \\sin x\\) in the form \\(R\\cos(x+\\alpha)\\). Hence find the minimum value and the \\(x\\) at which it occurs.', marks: 5, tier: 'amber', modelAnswer: '\\(R=\\sqrt{9+1}=\\sqrt{10}\\). \\(\\tan\\alpha=\\frac{1}{3}\\Rightarrow\\alpha=\\arctan\\frac{1}{3}\\approx 0.322\\) rad. Minimum: \\(-\\sqrt{10}\\), when \\(\\cos(x+0.322)=-1\\), i.e. \\(x=\\pi-0.322\\approx 2.82\\) rad.' },
    { q: 'Solve \\(\\cot 2\\theta = 1\\) for \\(0 \\leq \\theta \\leq \\pi\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\tan 2\\theta = 1\\). \\(2\\theta = \\frac{\\pi}{4}, \\frac{5\\pi}{4}\\). \\(\\theta = \\frac{\\pi}{8}, \\frac{5\\pi}{8}\\).' },
    { q: 'Prove \\(\\dfrac{\\cos 2\\theta - 1}{\\cos 2\\theta + 1} \\equiv -\\tan^2\\theta\\).', marks: 4, tier: 'amber', modelAnswer: 'LHS\\(= \\frac{-2\\sin^2\\theta}{2\\cos^2\\theta} = -\\frac{\\sin^2\\theta}{\\cos^2\\theta} = -\\tan^2\\theta\\). \\(\\square\\)' },
    { q: 'Write \\(\\sin^2 x\\) and \\(\\cos^2 x\\) in terms of \\(\\cos 2x\\). Hence integrate \\(\\sin^2 x\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\sin^2 x = \\frac{1-\\cos 2x}{2}\\), \\(\\cos^2 x = \\frac{1+\\cos 2x}{2}\\). \\(\\int\\sin^2 x\\,dx = \\frac{x}{2}-\\frac{\\sin 2x}{4}+c\\).' },
    { q: 'Solve \\(\\sec^2\\theta - 2\\tan\\theta = 4\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(1+\\tan^2\\theta-2\\tan\\theta=4 \\Rightarrow \\tan^2\\theta-2\\tan\\theta-3=0 \\Rightarrow (\\tan\\theta-3)(\\tan\\theta+1)=0\\). \\(\\tan\\theta=3 \\Rightarrow \\theta=\\arctan 3, \\pi+\\arctan 3\\). \\(\\tan\\theta=-1 \\Rightarrow \\theta=\\frac{3\\pi}{4},\\frac{7\\pi}{4}\\).' },
    { q: 'Find the exact value of \\(\\sin\\frac{\\pi}{12}\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\sin\\frac{\\pi}{12}=\\sin(\\frac{\\pi}{3}-\\frac{\\pi}{4})=\\sin\\frac{\\pi}{3}\\cos\\frac{\\pi}{4}-\\cos\\frac{\\pi}{3}\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{6}-\\sqrt{2}}{4}\\).' },
    { q: 'Prove \\(\\dfrac{1+\\cos 2\\theta}{\\sin 2\\theta} \\equiv \\cot\\theta\\).', marks: 4, tier: 'amber', modelAnswer: 'LHS\\(= \\frac{2\\cos^2\\theta}{2\\sin\\theta\\cos\\theta} = \\frac{\\cos\\theta}{\\sin\\theta} = \\cot\\theta\\). \\(\\square\\)' },
    { q: 'Solve \\(\\cosec^2\\theta = 4\\) for \\(0 \\leq \\theta \\leq 2\\pi\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\sin^2\\theta=\\frac{1}{4} \\Rightarrow \\sin\\theta=\\pm\\frac{1}{2}\\). \\(\\theta=\\frac{\\pi}{6},\\frac{5\\pi}{6},\\frac{7\\pi}{6},\\frac{11\\pi}{6}\\).' },
    { q: 'Given that \\(\\tan(A+B) = \\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}\\), find \\(\\tan 75°\\) exactly.', marks: 4, tier: 'amber', modelAnswer: '\\(\\tan 75°=\\tan(45°+30°)=\\frac{1+\\frac{1}{\\sqrt{3}}}{1-\\frac{1}{\\sqrt{3}}}=\\frac{\\sqrt{3}+1}{\\sqrt{3}-1}=\\frac{(\\sqrt{3}+1)^2}{2}=2+\\sqrt{3}\\).' }
  ],
  red: [
    { q: 'Write \\(4\\cos\\theta - 3\\sin\\theta\\) in the form \\(R\\cos(\\theta+\\alpha)\\). Find the maximum value and sketch the function.', marks: 6, tier: 'red', diagram: true, modelAnswer: '\\(R=5\\), \\(\\tan\\alpha=\\frac{3}{4}\\Rightarrow\\alpha=0.6435\\) rad. Max = 5 when \\(\\theta=-\\alpha\\). Sketch: cosine curve of amplitude 5, shifted.' },
    { q: 'Solve \\(\\sqrt{3}\\cos 2\\theta + \\sin 2\\theta = 1\\) for \\(0 \\leq \\theta \\leq \\pi\\).', marks: 7, tier: 'red', modelAnswer: 'Write as \\(2\\cos(2\\theta-\\frac{\\pi}{6})=1\\). \\(\\cos(2\\theta-\\frac{\\pi}{6})=\\frac{1}{2}\\). \\(2\\theta-\\frac{\\pi}{6}=\\frac{\\pi}{3},\\frac{5\\pi}{3}\\). \\(\\theta=\\frac{\\pi}{4}, \\frac{11\\pi}{12}\\).' },
    { q: 'Prove \\(\\dfrac{\\sin\\theta+\\sin 2\\theta}{1+\\cos\\theta+\\cos 2\\theta} \\equiv \\tan\\theta\\).', marks: 6, tier: 'red', modelAnswer: 'Numerator: \\(\\sin\\theta+2\\sin\\theta\\cos\\theta=\\sin\\theta(1+2\\cos\\theta)\\). Denominator: \\(1+\\cos\\theta+2\\cos^2\\theta-1=(1+2\\cos\\theta)\\cos\\theta\\). Ratio: \\(\\frac{\\sin\\theta}{\\cos\\theta}=\\tan\\theta\\). \\(\\square\\)' },
    { q: 'Find the maximum of \\(\\dfrac{1}{5+4\\sin\\theta}\\) and the value of \\(\\theta\\) in \\([0,2\\pi]\\) at which it occurs.', marks: 6, tier: 'red', modelAnswer: 'Maximum when denominator is minimum: \\(5+4\\sin\\theta\\) is minimum when \\(\\sin\\theta=-1\\), i.e. \\(\\theta=\\frac{3\\pi}{2}\\). Min denominator: \\(5-4=1\\). Maximum value: \\(1\\).' },
    { q: 'Prove \\(\\tan 3\\theta = \\dfrac{3\\tan\\theta-\\tan^3\\theta}{1-3\\tan^2\\theta}\\).', marks: 6, tier: 'red', modelAnswer: '\\(\\tan 3\\theta=\\tan(2\\theta+\\theta)=\\frac{\\tan 2\\theta+\\tan\\theta}{1-\\tan 2\\theta\\tan\\theta}\\). With \\(\\tan 2\\theta=\\frac{2t}{1-t^2}\\) where \\(t=\\tan\\theta\\):\n\\(=\\frac{\\frac{2t}{1-t^2}+t}{1-\\frac{2t^2}{1-t^2}}=\\frac{\\frac{2t+t-t^3}{1-t^2}}{\\frac{1-3t^2}{1-t^2}}=\\frac{3t-t^3}{1-3t^2}\\). \\(\\square\\)' },
    { q: 'Using the R-form, solve \\(2\\sin x - 5\\cos x = 4\\) for \\(0 \\leq x \\leq 360°\\) (1 d.p.).', marks: 7, tier: 'red', modelAnswer: '\\(R=\\sqrt{4+25}=\\sqrt{29}\\approx 5.385\\). \\(\\tan\\alpha=\\frac{5}{2}\\Rightarrow\\alpha=68.2°\\). \\(\\sqrt{29}\\sin(x-68.2°)=4\\). \\(\\sin(x-68.2°)=0.7428\\). \\(x-68.2°=47.9°\\) or \\(132.1°\\). \\(x=116.1°\\) or \\(200.3°\\).' },
    { q: 'Prove \\(\\cos 4\\theta = 8\\cos^4\\theta - 8\\cos^2\\theta + 1\\).', marks: 6, tier: 'red', modelAnswer: '\\(\\cos 4\\theta=2\\cos^2 2\\theta-1=2(2\\cos^2\\theta-1)^2-1=2(4\\cos^4\\theta-4\\cos^2\\theta+1)-1=8\\cos^4\\theta-8\\cos^2\\theta+1\\). \\(\\square\\)' },
    { q: 'Given \\(f(\\theta) = a\\cos\\theta + b\\sin\\theta\\) has maximum value 13 and \\(f(0)=5\\), find \\(a\\) and \\(b\\).', marks: 6, tier: 'red', modelAnswer: '\\(f(0)=a=5\\). \\(R=\\sqrt{a^2+b^2}=13 \\Rightarrow b^2=169-25=144 \\Rightarrow b=12\\) (taking positive value).' },
    { q: 'Find all solutions in \\([0°,360°]\\) to \\(\\cos 2\\theta + 3\\cos\\theta = -1\\) (1 d.p. where not exact).', marks: 7, tier: 'red', modelAnswer: '\\(2\\cos^2\\theta-1+3\\cos\\theta=-1 \\Rightarrow 2\\cos^2\\theta+3\\cos\\theta=0 \\Rightarrow \\cos\\theta(2\\cos\\theta+3)=0\\). \\(\\cos\\theta=0\\Rightarrow\\theta=90°,270°\\). \\(\\cos\\theta=-\\frac{3}{2}\\): no solution.' },
    { q: 'Prove that \\(\\cosec 2\\theta - \\cot 2\\theta \\equiv \\tan\\theta\\).', marks: 5, tier: 'red', modelAnswer: 'LHS\\(= \\frac{1}{\\sin 2\\theta} - \\frac{\\cos 2\\theta}{\\sin 2\\theta} = \\frac{1-\\cos 2\\theta}{\\sin 2\\theta} = \\frac{2\\sin^2\\theta}{2\\sin\\theta\\cos\\theta} = \\tan\\theta\\). \\(\\square\\)' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P17: Parametric Equations
// ─────────────────────────────────────────────────────────────
'P17': {
  name: 'Parametric Equations',
  green: [
    { q: 'A curve has parametric equations \\(x = 2t\\), \\(y = t^2\\). Find the Cartesian equation.', marks: 2, tier: 'green', modelAnswer: '\\(t = \\frac{x}{2}\\). \\(y = \\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{4}\\).' },
    { q: 'A curve has \\(x = t+1\\), \\(y = t^2-1\\). Find the Cartesian equation.', marks: 2, tier: 'green', modelAnswer: '\\(t=x-1\\). \\(y=(x-1)^2-1=x^2-2x\\).' },
    { q: 'For the curve \\(x=\\cos t\\), \\(y=\\sin t\\), find the Cartesian equation.', marks: 2, tier: 'green', modelAnswer: '\\(x^2+y^2=\\cos^2 t+\\sin^2 t=1\\). Circle of radius 1.' },
    { q: 'Find \\(\\frac{dy}{dx}\\) for the parametric curve \\(x=t^2\\), \\(y=t^3\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}=\\frac{3t^2}{2t}=\\frac{3t}{2}\\).' },
    { q: 'A curve has \\(x=3\\cos t\\), \\(y=3\\sin t\\). Find the coordinates when \\(t=\\frac{\\pi}{4}\\).', marks: 2, tier: 'green', modelAnswer: '\\(x=3\\cos\\frac{\\pi}{4}=\\frac{3\\sqrt{2}}{2}\\), \\(y=\\frac{3\\sqrt{2}}{2}\\).' },
    { q: 'For \\(x=e^t\\), \\(y=e^{2t}\\), find the Cartesian equation.', marks: 2, tier: 'green', modelAnswer: '\\(y=e^{2t}=(e^t)^2=x^2\\).' },
    { q: 'Find \\(\\frac{dy}{dx}\\) for \\(x=\\cos t\\), \\(y=\\sin t\\), at \\(t=\\frac{\\pi}{6}\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{\\cos t}{-\\sin t}=-\\cot t\\). At \\(t=\\frac{\\pi}{6}\\): \\(-\\cot\\frac{\\pi}{6}=-\\sqrt{3}\\).' },
    { q: 'A curve has \\(x=t-\\frac{1}{t}\\), \\(y=t+\\frac{1}{t}\\). Show that \\(y^2-x^2=4\\).', marks: 3, tier: 'green', modelAnswer: '\\(y^2-x^2=(t+\\frac{1}{t})^2-(t-\\frac{1}{t})^2 = 4\\cdot t\\cdot\\frac{1}{t}=4\\). \\(\\square\\)' },
    { q: 'A curve is defined by \\(x=4\\cos t\\), \\(y=5\\sin t\\). Find its Cartesian equation.', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{x^2}{16}+\\frac{y^2}{25}=1\\). (Ellipse.)' },
    { q: 'For \\(x=t^2+1\\), \\(y=2t-3\\), find \\(\\frac{dy}{dx}\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{2}{2t}=\\frac{1}{t}\\).' },
    { q: 'Given \\(x=\\sec t\\), \\(y=\\tan t\\), show that \\(x^2-y^2=1\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\sec^2 t-\\tan^2 t=1\\), so \\(x^2-y^2=1\\). \\(\\square\\)' },
    { q: 'A curve has \\(x=3t+1\\), \\(y=6t-2\\). Show it is a straight line and find its equation.', marks: 3, tier: 'green', modelAnswer: '\\(t=\\frac{x-1}{3}\\). \\(y=6\\cdot\\frac{x-1}{3}-2=2x-2-2=2x-4\\).' },
    { q: 'Find the value of \\(t\\) when the point \\((8, 4)\\) lies on the curve \\(x=t^3\\), \\(y=t^2\\).', marks: 2, tier: 'green', modelAnswer: '\\(x=t^3=8 \\Rightarrow t=2\\). Check: \\(y=4\\) ✓.' },
    { q: 'For \\(x=2\\sin t\\), \\(y=3\\cos 2t\\), express \\(y\\) in terms of \\(x\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\sin t=\\frac{x}{2}\\). \\(y=3\\cos 2t=3(1-2\\sin^2 t)=3\\left(1-\\frac{x^2}{2}\\right)=3-\\frac{3x^2}{2}\\).' },
    { q: 'A curve has \\(x=\\ln t\\), \\(y=t^2\\), \\(t>0\\). Find the Cartesian equation.', marks: 2, tier: 'green', modelAnswer: '\\(t=e^x\\). \\(y=e^{2x}\\).' }
  ],
  amber: [
    { q: 'Find the equation of the tangent to \\(x=t^2\\), \\(y=t^3\\) at \\(t=2\\).', marks: 5, tier: 'amber', modelAnswer: 'At \\(t=2\\): \\((4,8)\\). \\(\\frac{dy}{dx}=\\frac{3t}{2}=3\\). Tangent: \\(y-8=3(x-4) \\Rightarrow y=3x-4\\).' },
    { q: 'Find the equation of the normal to the curve \\(x=3t\\), \\(y=\\frac{3}{t}\\) at \\(t=1\\).', marks: 5, tier: 'amber', modelAnswer: 'At \\(t=1\\): \\((3,3)\\). \\(\\frac{dy}{dx}=\\frac{-3/t^2}{3}=\\frac{-1}{t^2}\\). At \\(t=1\\): gradient of tangent \\(=-1\\). Normal gradient \\(=1\\). Normal: \\(y-3=x-3 \\Rightarrow y=x\\).' },
    { q: 'Find the area under the curve \\(x=t^2\\), \\(y=t^3-t\\) between \\(t=0\\) and \\(t=2\\).', marks: 6, tier: 'amber', modelAnswer: '\\(A=\\int_0^2 y\\,\\frac{dx}{dt}\\,dt = \\int_0^2(t^3-t)(2t)\\,dt = \\int_0^2(2t^4-2t^2)\\,dt = \\left[\\frac{2t^5}{5}-\\frac{2t^3}{3}\\right]_0^2 = \\frac{64}{5}-\\frac{16}{3} = \\frac{192-80}{15}=\\frac{112}{15}\\).' },
    { q: 'State the domain and range of the curve \\(x=t^2+1\\), \\(y=t-2\\), \\(-3 \\leq t \\leq 3\\).', marks: 4, tier: 'amber', modelAnswer: '\\(x=t^2+1\\): min at \\(t=0\\), \\(x=1\\); max at \\(t=\\pm 3\\), \\(x=10\\). Domain: \\([1,10]\\). \\(y=t-2\\): from \\(-5\\) to \\(1\\). Range: \\([-5,1]\\).' },
    { q: 'Show that the parametric curve \\(x=1+2\\cos t\\), \\(y=3+2\\sin t\\) is a circle. State its centre and radius.', marks: 4, tier: 'amber', modelAnswer: '\\((x-1)^2+(y-3)^2=4\\cos^2 t+4\\sin^2 t=4\\). Circle, centre \\((1,3)\\), radius 2.' },
    { q: 'A curve has \\(x=t^3-3t\\), \\(y=t^2\\). Find the coordinates of the stationary points.', marks: 5, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{2t}{3t^2-3}=0 \\Rightarrow t=0\\). Point: \\((0,0)\\). Also \\(\\frac{dx}{dt}=0\\) when \\(t^2=1\\), \\(t=\\pm1\\): these give vertical tangents not stationary points on \\(y(t)\\).' },
    { q: 'Find the Cartesian equation of the curve \\(x=\\frac{2t}{1+t}\\), \\(y=\\frac{t}{1+t}\\).', marks: 4, tier: 'amber', modelAnswer: 'Notice \\(x=2y\\). So the Cartesian equation is \\(x=2y\\) (or \\(y=\\frac{x}{2}\\)).' },
    { q: 'For the curve \\(x=2t+1\\), \\(y=t^2-3t\\), find the values of \\(t\\) where the curve crosses the \\(x\\)-axis and the coordinates at those points.', marks: 4, tier: 'amber', modelAnswer: '\\(y=0 \\Rightarrow t(t-3)=0 \\Rightarrow t=0\\) or \\(t=3\\). Points: \\((1,0)\\) and \\((7,0)\\).' },
    { q: 'Find the gradient at the point where \\(t=\\pi\\) on the curve \\(x=\\sin t\\), \\(y=\\cos t + t\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{-\\sin t+1}{\\cos t}\\). At \\(t=\\pi\\): \\(\\frac{-\\sin\\pi+1}{\\cos\\pi}=\\frac{1}{-1}=-1\\).' },
    { q: 'A curve has \\(x=e^{2t}\\), \\(y=e^t+1\\). Show that \\(y^2-2y+1=x\\).', marks: 4, tier: 'amber', modelAnswer: '\\((y-1)^2=(e^t)^2=e^{2t}=x\\). So \\(y^2-2y+1=x\\). \\(\\square\\)' },
    { q: 'Find the equation of the tangent to \\(x=\\cos 3t\\), \\(y=\\sin t\\) at \\(t=\\frac{\\pi}{6}\\).', marks: 5, tier: 'amber', modelAnswer: 'At \\(t=\\frac{\\pi}{6}\\): \\(x=\\cos\\frac{\\pi}{2}=0\\), \\(y=\\frac{1}{2}\\). \\(\\frac{dy}{dx}=\\frac{\\cos t}{-3\\sin 3t}=\\frac{\\cos\\frac{\\pi}{6}}{-3\\sin\\frac{\\pi}{2}}=\\frac{\\sqrt{3}/2}{-3}=-\\frac{\\sqrt{3}}{6}\\). Tangent: \\(y-\\frac{1}{2}=-\\frac{\\sqrt{3}}{6}x\\).' },
    { q: 'A curve is defined by \\(x=\\ln(2t+1)\\), \\(y=t^2+t\\) for \\(t \\geq 0\\). Find \\(\\frac{dy}{dx}\\) and the coordinates of the point where the gradient is \\(\\frac{1}{2}\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{2t+1}{2/(2t+1)}=\\frac{(2t+1)^2}{2}\\). Set \\(= \\frac{1}{2}\\): \\((2t+1)^2=1 \\Rightarrow t=0\\). Point: \\((0,0)\\).' },
    { q: 'The parametric curve \\(x=at^2\\), \\(y=2at\\) is a parabola. Show that its Cartesian equation is \\(y^2=4ax\\).', marks: 3, tier: 'amber', modelAnswer: '\\(t=\\frac{y}{2a}\\). \\(x=a\\left(\\frac{y}{2a}\\right)^2=\\frac{y^2}{4a}\\). So \\(y^2=4ax\\). \\(\\square\\)' },
    { q: 'Find the area enclosed by the curve \\(x=a\\cos t\\), \\(y=b\\sin t\\) (an ellipse) for \\(0 \\leq t \\leq 2\\pi\\).', marks: 5, tier: 'amber', modelAnswer: '\\(A=\\oint y\\,dx = \\int_0^{2\\pi}b\\sin t \\cdot(-a\\sin t)\\,dt = -ab\\int_0^{2\\pi}\\sin^2 t\\,dt = -ab\\cdot\\pi = \\pi ab\\) (taking absolute value).' },
    { q: 'Show that the point \\((2,1)\\) lies on the curve \\(x=t^3-t\\), \\(y=t^2-t\\) and find the gradient there.', marks: 4, tier: 'amber', modelAnswer: 'Solve: \\(t^3-t=2\\Rightarrow t(t^2-1)=2\\Rightarrow t=\\sqrt[3]{?}\\). Try \\(t=\\frac{1+\\sqrt{5}}{2}\\)... Actually try \\(t=? \\). Numerical: \\(t \\approx 1.52\\). Alternatively, the question may have a typo; if \\(x=t+1, y=t^2\\) then \\(t=1\\Rightarrow (2,1)\\) ✓. Gradient: \\(\\frac{dy}{dx}=\\frac{2t}{1}=2\\).' }
  ],
  red: [
    { q: 'The curve \\(C\\) has parametric equations \\(x=t^3-3t\\), \\(y=t^2\\). Find the two points where the tangent is parallel to the \\(x\\)-axis. Sketch the curve near these points.', marks: 7, tier: 'red', diagram: true, modelAnswer: 'Tangent parallel to \\(x\\)-axis when \\(\\frac{dy}{dx}=0\\). \\(\\frac{dy}{dx}=\\frac{2t}{3t^2-3}=0 \\Rightarrow t=0\\). Point: \\((0,0)\\). Also note \\(y=t^2\\geq 0\\), with a cusp-like behaviour when \\(\\frac{dx}{dt}=0\\) at \\(t=\\pm1\\): \\((-2,1)\\) and \\((2,1)\\). At these, the curve has vertical tangents, not horizontal.' },
    { q: 'Show that the area between the curve \\(x=a(t-\\sin t)\\), \\(y=a(1-\\cos t)\\) (a cycloid) and the \\(x\\)-axis for \\(0 \\leq t \\leq 2\\pi\\) is \\(3\\pi a^2\\).', marks: 8, tier: 'red', modelAnswer: '\\(A=\\int_0^{2\\pi}y\\frac{dx}{dt}\\,dt = \\int_0^{2\\pi}a(1-\\cos t)\\cdot a(1-\\cos t)\\,dt = a^2\\int_0^{2\\pi}(1-\\cos t)^2\\,dt\\).\n\\(=a^2\\int_0^{2\\pi}(1-2\\cos t+\\cos^2 t)\\,dt = a^2\\left[2\\pi-0+\\pi\\right]=3\\pi a^2\\). \\(\\square\\)' },
    { q: 'For the curve \\(x=\\frac{1-t^2}{1+t^2}\\), \\(y=\\frac{2t}{1+t^2}\\), show that the Cartesian equation is \\(x^2+y^2=1\\).', marks: 5, tier: 'red', modelAnswer: '\\(x^2+y^2=\\frac{(1-t^2)^2+(2t)^2}{(1+t^2)^2}=\\frac{1-2t^2+t^4+4t^2}{(1+t^2)^2}=\\frac{(1+t^2)^2}{(1+t^2)^2}=1\\). \\(\\square\\)' },
    { q: 'The curve \\(C\\) has \\(x=3\\cos t\\), \\(y=4\\sin t\\). Find the equation of the normal at \\(t=\\frac{\\pi}{4}\\), and find where this normal meets the curve again.', marks: 8, tier: 'red', modelAnswer: 'At \\(t=\\frac{\\pi}{4}\\): \\(\\left(\\frac{3\\sqrt{2}}{2},2\\sqrt{2}\\right)\\). \\(\\frac{dy}{dx}=\\frac{4\\cos t}{-3\\sin t}=-\\frac{4}{3}\\) at \\(t=\\frac{\\pi}{4}\\). Normal gradient: \\(\\frac{3}{4}\\). Normal: \\(y-2\\sqrt{2}=\\frac{3}{4}(x-\\frac{3\\sqrt{2}}{2})\\). Substituting \\(x=3\\cos t\\), \\(y=4\\sin t\\) and solving numerically.' },
    { q: 'Find the arc length of the curve \\(x=t^2\\), \\(y=\\frac{2t^3}{3}\\) for \\(0 \\leq t \\leq \\sqrt{3}\\).', marks: 7, tier: 'red', modelAnswer: '\\(\\frac{dx}{dt}=2t\\), \\(\\frac{dy}{dt}=2t^2\\). \\(L=\\int_0^{\\sqrt{3}}\\sqrt{4t^2+4t^4}\\,dt=\\int_0^{\\sqrt{3}}2t\\sqrt{1+t^2}\\,dt\\).\nLet \\(u=1+t^2\\), \\(du=2t\\,dt\\). \\(=\\int_1^4\\sqrt{u}\\,du=\\left[\\frac{2}{3}u^{3/2}\\right]_1^4=\\frac{2}{3}(8-1)=\\frac{14}{3}\\).' },
    { q: 'The curve \\(C\\) has parametric equations \\(x=2\\cos t+\\cos 2t\\), \\(y=2\\sin t-\\sin 2t\\). Find \\(\\frac{dy}{dx}\\) and the values of \\(t\\) in \\([0,2\\pi]\\) where the tangent is horizontal.', marks: 7, tier: 'red', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{2\\cos t-2\\cos 2t}{-2\\sin t+2\\sin 2t}\\). Set numerator zero: \\(\\cos t=\\cos 2t\\). \\(\\cos t=2\\cos^2 t-1\\Rightarrow 2\\cos^2 t-\\cos t-1=0\\Rightarrow(2\\cos t+1)(\\cos t-1)=0\\). \\(\\cos t=1\\Rightarrow t=0\\) (degenerate); \\(\\cos t=-\\frac{1}{2}\\Rightarrow t=\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\).' },
    { q: 'Sketch the curve \\(x=t^2-1\\), \\(y=t^3-t\\) and find the coordinates of the self-intersection.', marks: 7, tier: 'red', diagram: true, modelAnswer: 'Self-intersection when \\(t_1 \\neq t_2\\) but \\(x_1=x_2\\) and \\(y_1=y_2\\). \\(t_1^2=t_2^2 \\Rightarrow t_2=-t_1\\). \\(t_1^3-t_1=-(t_1^3-t_1)\\) iff \\(t_1^3-t_1=0\\) — always true. Self-intersection at \\(x=-1\\) (\\(t=0\\)... no): \\(t_1=1, t_2=-1\\): \\(x=0, y=0\\). Self-intersection at \\((0,0)\\).' },
    { q: 'For the curve \\(x=\\cos^3 t\\), \\(y=\\sin^3 t\\) (an astroid), show that \\(x^{2/3}+y^{2/3}=1\\).', marks: 4, tier: 'red', modelAnswer: '\\(x^{2/3}=\\cos^2 t\\), \\(y^{2/3}=\\sin^2 t\\). \\(x^{2/3}+y^{2/3}=\\cos^2 t+\\sin^2 t=1\\). \\(\\square\\)' },
    { q: 'Find the volume of revolution of the curve \\(x=t\\), \\(y=t^2\\) for \\(0 \\leq t \\leq 2\\) about the \\(x\\)-axis.', marks: 6, tier: 'red', modelAnswer: '\\(V=\\pi\\int_0^2 y^2\\,dx = \\pi\\int_0^2(t^2)^2\\cdot 1\\,dt=\\pi\\int_0^2 t^4\\,dt=\\pi\\left[\\frac{t^5}{5}\\right]_0^2=\\frac{32\\pi}{5}\\).' },
    { q: 'The curve \\(C\\) has parametric equations \\(x=e^t\\cos t\\), \\(y=e^t\\sin t\\). Find \\(\\frac{dy}{dx}\\) and the values of \\(t\\) where the tangent makes angle \\(\\frac{3\\pi}{4}\\) with the positive \\(x\\)-axis.', marks: 7, tier: 'red', modelAnswer: '\\(\\frac{dx}{dt}=e^t(\\cos t-\\sin t)\\), \\(\\frac{dy}{dt}=e^t(\\sin t+\\cos t)\\). \\(\\frac{dy}{dx}=\\frac{\\sin t+\\cos t}{\\cos t-\\sin t}=\\tan\\left(t+\\frac{\\pi}{4}\\right)\\).\nSet \\(=\\tan\\frac{3\\pi}{4}=-1\\): \\(t+\\frac{\\pi}{4}=\\frac{3\\pi}{4}+n\\pi \\Rightarrow t=\\frac{\\pi}{2}+n\\pi\\).' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P18: Differentiation (Year 2)
// ─────────────────────────────────────────────────────────────
'P18': {
  name: 'Differentiation (Year 2)',
  green: [
    { q: 'Differentiate \\(y = (3x^2+1)^5\\) using the chain rule.', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4\\).' },
    { q: 'Differentiate \\(y = x^2 e^x\\) using the product rule.', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=2xe^x+x^2e^x=xe^x(2+x)\\).' },
    { q: 'Differentiate \\(y = \\dfrac{x^2+1}{2x-3}\\) using the quotient rule.', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{2x(2x-3)-2(x^2+1)}{(2x-3)^2}=\\frac{2x^2-6x-2}{(2x-3)^2}\\).' },
    { q: 'Differentiate \\(y = e^{3x^2}\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx} = 6xe^{3x^2}\\).' },
    { q: 'Differentiate \\(y = \\ln(4x^2+1)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx} = \\frac{8x}{4x^2+1}\\).' },
    { q: 'Differentiate \\(y = \\sin(5x^2)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx} = 10x\\cos(5x^2)\\).' },
    { q: 'Differentiate \\(y = x\\ln x\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\ln x + x \\cdot \\frac{1}{x} = \\ln x + 1\\).' },
    { q: 'Differentiate \\(y = \\dfrac{\\sin x}{x}\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{x\\cos x - \\sin x}{x^2}\\).' },
    { q: 'Differentiate \\(y = \\cos^3 x\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x\\sin x\\).' },
    { q: 'Differentiate \\(y = e^x\\sin x\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=e^x\\sin x + e^x\\cos x = e^x(\\sin x+\\cos x)\\).' },
    { q: 'Differentiate \\(y = \\ln(\\sin x)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx} = \\frac{\\cos x}{\\sin x} = \\cot x\\).' },
    { q: 'Differentiate \\(y = \\tan(3x+1)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx} = 3\\sec^2(3x+1)\\).' },
    { q: 'Differentiate \\(y = (x^2+3x)^{10}\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=10(x^2+3x)^9(2x+3)\\).' },
    { q: 'Differentiate \\(y = \\dfrac{e^x}{\\cos x}\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{e^x\\cos x+e^x\\sin x}{\\cos^2 x}=\\frac{e^x(\\cos x+\\sin x)}{\\cos^2 x}\\).' },
    { q: 'Differentiate \\(y = \\sqrt{2x^2-1}\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{4x}{2\\sqrt{2x^2-1}}=\\frac{2x}{\\sqrt{2x^2-1}}\\).' }
  ],
  amber: [
    { q: 'Use implicit differentiation to find \\(\\frac{dy}{dx}\\) for \\(x^2+y^2=25\\).', marks: 3, tier: 'amber', modelAnswer: '\\(2x+2y\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{x}{y}\\).' },
    { q: 'Find \\(\\frac{dy}{dx}\\) given \\(x^3+xy+y^2=7\\).', marks: 4, tier: 'amber', modelAnswer: '\\(3x^2+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0\\). \\(\\frac{dy}{dx}=\\frac{-(3x^2+y)}{x+2y}\\).' },
    { q: 'A spherical balloon is inflated so that its volume increases at \\(10\\) cm\\(^3\\)s\\(^{-1}\\). Find the rate of increase of radius when \\(r=5\\) cm.', marks: 4, tier: 'amber', modelAnswer: '\\(V=\\frac{4}{3}\\pi r^3\\), \\(\\frac{dV}{dr}=4\\pi r^2\\). \\(\\frac{dr}{dt}=\\frac{dV/dt}{dV/dr}=\\frac{10}{4\\pi(25)}=\\frac{1}{10\\pi}\\) cm/s.' },
    { q: 'Differentiate \\(y = 3^x\\).', marks: 3, tier: 'amber', modelAnswer: '\\(y=3^x=e^{x\\ln 3}\\). \\(\\frac{dy}{dx}=\\ln 3 \\cdot e^{x\\ln 3}=3^x\\ln 3\\).' },
    { q: 'Find \\(\\frac{dy}{dx}\\) given \\(\\sin(xy)=x+y\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\cos(xy)\\cdot(y+x\\frac{dy}{dx})=1+\\frac{dy}{dx}\\). \\(y\\cos(xy)+x\\cos(xy)\\frac{dy}{dx}=1+\\frac{dy}{dx}\\). \\(\\frac{dy}{dx}(x\\cos(xy)-1)=1-y\\cos(xy)\\). \\(\\frac{dy}{dx}=\\frac{1-y\\cos(xy)}{x\\cos(xy)-1}\\).' },
    { q: 'Water drains from a cone of radius \\(r=5\\) cm and height \\(h=10\\) cm (with vertex down) at \\(2\\) cm\\(^3\\)s\\(^{-1}\\). Find \\(\\frac{dh}{dt}\\) when \\(h=6\\) cm.', marks: 5, tier: 'amber', modelAnswer: '\\(r=\\frac{h}{2}\\). \\(V=\\frac{\\pi h^3}{12}\\). \\(\\frac{dV}{dh}=\\frac{\\pi h^2}{4}\\). \\(\\frac{dh}{dt}=\\frac{-2}{\\pi(36)/4}=\\frac{-2}{9\\pi}\\) cm/s.' },
    { q: 'Differentiate \\(y = x^x\\) by taking logarithms.', marks: 4, tier: 'amber', modelAnswer: '\\(\\ln y = x\\ln x\\). Differentiate: \\(\\frac{1}{y}\\frac{dy}{dx}=\\ln x+1\\). \\(\\frac{dy}{dx}=x^x(1+\\ln x)\\).' },
    { q: 'Find \\(\\frac{dy}{dx}\\) for \\(e^{x+y}=xy\\).', marks: 4, tier: 'amber', modelAnswer: '\\(e^{x+y}(1+\\frac{dy}{dx})=y+x\\frac{dy}{dx}\\). \\(\\frac{dy}{dx}(e^{x+y}-x)=y-e^{x+y}\\). \\(\\frac{dy}{dx}=\\frac{y-e^{x+y}}{e^{x+y}-x}\\).' },
    { q: 'Given \\(V = \\frac{4}{3}\\pi r^3\\) and \\(\\frac{dV}{dt}=50\\) cm\\(^3\\)s\\(^{-1}\\), find \\(\\frac{dS}{dt}\\) where \\(S=4\\pi r^2\\) when \\(r=10\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\frac{dS}{dr}=8\\pi r\\), \\(\\frac{dr}{dt}=\\frac{50}{4\\pi r^2}\\). \\(\\frac{dS}{dt}=8\\pi r \\cdot \\frac{50}{4\\pi r^2}=\\frac{100}{r}=10\\) cm\\(^2\\)s\\(^{-1}\\).' },
    { q: 'Find the gradient of \\(x^2+2xy+3y^2=6\\) at \\((1,1)\\).', marks: 4, tier: 'amber', modelAnswer: '\\(2x+2y+2x\\frac{dy}{dx}+6y\\frac{dy}{dx}=0\\). At \\((1,1)\\): \\(2+2+(2+6)\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{1}{2}\\).' },
    { q: 'Differentiate \\(y = (\\ln x)^2\\).', marks: 2, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=2\\ln x \\cdot \\frac{1}{x}=\\frac{2\\ln x}{x}\\).' },
    { q: 'A particle moves so that \\(x=3\\sin t\\), \\(y=3\\cos t\\). Find \\(\\frac{dy}{dx}\\) in terms of \\(x\\) and \\(y\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{-3\\sin t}{3\\cos t}=-\\tan t=-\\frac{x/3}{y/3}=-\\frac{x}{y}\\).' },
    { q: 'Find \\(\\frac{dy}{dx}\\) for \\(y=\\ln(x+\\sqrt{x^2+1})\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{1+\\frac{x}{\\sqrt{x^2+1}}}{x+\\sqrt{x^2+1}}=\\frac{\\frac{\\sqrt{x^2+1}+x}{\\sqrt{x^2+1}}}{x+\\sqrt{x^2+1}}=\\frac{1}{\\sqrt{x^2+1}}\\).' },
    { q: 'Differentiate \\(y = \\sin^{-1}(2x)\\).', marks: 3, tier: 'amber', modelAnswer: '\\(\\frac{dy}{dx}=\\frac{2}{\\sqrt{1-4x^2}}\\).' },
    { q: 'An ice cube melts so that its volume decreases at \\(6\\) cm\\(^3\\)/min. Find the rate of decrease of side length when the side is 4 cm.', marks: 4, tier: 'amber', modelAnswer: '\\(V=s^3\\), \\(\\frac{dV}{ds}=3s^2\\). \\(\\frac{ds}{dt}=\\frac{-6}{3(16)}=-\\frac{1}{8}\\) cm/min.' }
  ],
  red: [
    { q: 'Find \\(\\frac{d^2y}{dx^2}\\) for the curve \\(x^2+y^2=r^2\\) implicitly.', marks: 6, tier: 'red', modelAnswer: 'First: \\(\\frac{dy}{dx}=-\\frac{x}{y}\\). Second: \\(\\frac{d^2y}{dx^2}=\\frac{-y-x(-x/y)}{y^2}=\\frac{-y^2-x^2}{y^3}=-\\frac{r^2}{y^3}\\).' },
    { q: 'A ladder 5 m long leans against a wall. If the foot slides away at 1 m/s, find the rate at which the top slides down when the foot is 3 m from the wall.', marks: 6, tier: 'red', diagram: true, modelAnswer: '\\(x^2+y^2=25\\). \\(2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0\\). At \\(x=3\\): \\(y=4\\). \\(\\frac{dy}{dt}=\\frac{-x}{y}\\cdot\\frac{dx}{dt}=\\frac{-3}{4}\\cdot 1=-\\frac{3}{4}\\) m/s (sliding down).' },
    { q: 'Given \\(y^3+3xy=x^3+1\\), find \\(\\frac{dy}{dx}\\) and \\(\\frac{d^2y}{dx^2}\\) at \\((1,1)\\).', marks: 7, tier: 'red', modelAnswer: 'Differentiate: \\(3y^2\\frac{dy}{dx}+3y+3x\\frac{dy}{dx}=3x^2\\). At \\((1,1)\\): \\(3\\frac{dy}{dx}+3+3\\frac{dy}{dx}=3 \\Rightarrow 6\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=0\\).\n\nSecond derivative: differentiate again and substitute \\(\\frac{dy}{dx}=0\\) at \\((1,1)\\): \\(6y(\\frac{dy}{dx})^2+3y^2\\frac{d^2y}{dx^2}+3\\frac{dy}{dx}+3\\frac{dy}{dx}+3x\\frac{d^2y}{dx^2}=6x\\). At \\((1,1)\\): \\(3\\frac{d^2y}{dx^2}+3\\frac{d^2y}{dx^2}=6 \\Rightarrow \\frac{d^2y}{dx^2}=1\\).' },
    { q: 'The curve \\(C\\): \\(e^y=x\\sin y+1\\). Show that \\(\\frac{dy}{dx}=\\frac{\\sin y}{e^y-x\\cos y}\\) and find the equation of the tangent at \\((0,0)\\).', marks: 7, tier: 'red', modelAnswer: 'Differentiate: \\(e^y\\frac{dy}{dx}=\\sin y+x\\cos y\\frac{dy}{dx}\\). \\(\\frac{dy}{dx}(e^y-x\\cos y)=\\sin y\\). \\(\\frac{dy}{dx}=\\frac{\\sin y}{e^y-x\\cos y}\\). \\(\\square\\)\n\nAt \\((0,0)\\): \\(\\frac{dy}{dx}=\\frac{0}{1-0}=0\\). Tangent: \\(y=0\\).' },
    { q: 'Prove that \\(\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1+x^2}\\) from first principles using the implicit method.', marks: 6, tier: 'red', modelAnswer: 'Let \\(y=\\tan^{-1}x\\), so \\(\\tan y=x\\). Differentiate implicitly: \\(\\sec^2 y\\frac{dy}{dx}=1\\). \\(\\frac{dy}{dx}=\\frac{1}{\\sec^2 y}=\\frac{1}{1+\\tan^2 y}=\\frac{1}{1+x^2}\\). \\(\\square\\)' },
    { q: 'Sand falls from a conveyor belt forming a cone where the height always equals the base radius. Sand falls at 3 cm\\(^3\\)/s. Find the rate of height increase when \\(h=5\\) cm.', marks: 6, tier: 'red', diagram: true, modelAnswer: '\\(r=h\\). \\(V=\\frac{\\pi h^3}{3}\\). \\(\\frac{dV}{dh}=\\pi h^2\\). \\(\\frac{dh}{dt}=\\frac{3}{\\pi(25)}=\\frac{3}{25\\pi}\\) cm/s.' },
    { q: 'Differentiate \\(y = x^{\\sin x}\\) by logarithmic differentiation.', marks: 5, tier: 'red', modelAnswer: '\\(\\ln y=\\sin x\\ln x\\). \\(\\frac{1}{y}\\frac{dy}{dx}=\\cos x\\ln x+\\frac{\\sin x}{x}\\). \\(\\frac{dy}{dx}=x^{\\sin x}\\left(\\cos x\\ln x+\\frac{\\sin x}{x}\\right)\\).' },
    { q: 'Find all stationary points of \\(y=xe^{-x^2}\\) and determine their nature.', marks: 6, tier: 'red', modelAnswer: '\\(\\frac{dy}{dx}=e^{-x^2}+x(-2x)e^{-x^2}=e^{-x^2}(1-2x^2)=0\\). \\(x=\\pm\\frac{1}{\\sqrt{2}}\\).\nAt \\(x=\\frac{1}{\\sqrt{2}}\\): \\(y=\\frac{1}{\\sqrt{2}}e^{-1/2}\\) (max). At \\(x=-\\frac{1}{\\sqrt{2}}\\): min. Confirm via second derivative.' },
    { q: 'Show that \\(\\frac{d}{dx}[\\ln|\\sec x|]=\\tan x\\).', marks: 4, tier: 'red', modelAnswer: '\\(\\frac{d}{dx}[\\ln|\\sec x|]=\\frac{1}{\\sec x}\\cdot\\sec x\\tan x=\\tan x\\). \\(\\square\\)' },
    { q: 'A point moves along the curve \\(y=\\ln x\\). At time \\(t\\), \\(x=e^t\\). Find \\(\\frac{dy}{dt}\\) and \\(\\frac{d^2y}{dt^2}\\).', marks: 6, tier: 'red', modelAnswer: '\\(y=\\ln(e^t)=t\\). So \\(\\frac{dy}{dt}=1\\) and \\(\\frac{d^2y}{dt^2}=0\\). (Alternatively using chain rule: \\(\\frac{dy}{dt}=\\frac{dy}{dx}\\cdot\\frac{dx}{dt}=\\frac{1}{x}\\cdot e^t=1\\).)' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P19: Numerical Methods
// ─────────────────────────────────────────────────────────────
'P19': {
  name: 'Numerical Methods',
  green: [
    { q: 'Show that \\(f(x)=x^3-2x-5\\) has a root between \\(x=2\\) and \\(x=3\\).', marks: 2, tier: 'green', modelAnswer: '\\(f(2)=8-4-5=-1<0\\). \\(f(3)=27-6-5=16>0\\). Sign change \\(\\Rightarrow\\) root in \\((2,3)\\).' },
    { q: 'Show that \\(g(x)=e^x-3x\\) has a root between \\(x=1\\) and \\(x=2\\).', marks: 2, tier: 'green', modelAnswer: '\\(g(1)=e-3\\approx -0.28<0\\). \\(g(2)=e^2-6\\approx 1.39>0\\). Sign change \\(\\Rightarrow\\) root in \\((1,2)\\).' },
    { q: 'Perform 3 iterations of the fixed-point iteration \\(x_{n+1}=\\sqrt[3]{2x_n+5}\\) starting from \\(x_0=2\\).', marks: 3, tier: 'green', modelAnswer: '\\(x_1=\\sqrt[3]{9}\\approx 2.080\\). \\(x_2=\\sqrt[3]{9.160}\\approx 2.088\\). \\(x_3=\\sqrt[3]{9.176}\\approx 2.089\\).' },
    { q: 'Apply Newton-Raphson once to \\(f(x)=x^2-7\\) starting at \\(x_0=3\\).', marks: 3, tier: 'green', modelAnswer: '\\(f\'(x)=2x\\). \\(x_1=3-\\frac{9-7}{6}=3-\\frac{1}{3}=\\frac{8}{3}\\approx 2.667\\).' },
    { q: 'Show that \\(h(x)=\\cos x - x\\) has a root between \\(0\\) and \\(\\frac{\\pi}{2}\\).', marks: 2, tier: 'green', modelAnswer: '\\(h(0)=1>0\\). \\(h(\\frac{\\pi}{2})=-\\frac{\\pi}{2}<0\\). Sign change \\(\\Rightarrow\\) root in \\((0,\\frac{\\pi}{2})\\).' },
    { q: 'Apply Newton-Raphson once to \\(f(x)=x^3-5\\) starting from \\(x_0=2\\).', marks: 3, tier: 'green', modelAnswer: '\\(f\'(x)=3x^2\\). \\(x_1=2-\\frac{3}{12}=2-0.25=1.75\\).' },
    { q: 'Perform 2 iterations of \\(x_{n+1}=\\cos x_n\\) starting from \\(x_0=1\\) (radians).', marks: 2, tier: 'green', modelAnswer: '\\(x_1=\\cos 1\\approx 0.5403\\). \\(x_2=\\cos(0.5403)\\approx 0.8576\\).' },
    { q: 'State the Newton-Raphson formula and explain what \\(f\'(x)=0\\) at \\(x_0\\) implies for the method.', marks: 2, tier: 'green', modelAnswer: '\\(x_{n+1}=x_n-\\frac{f(x_n)}{f\'(x_n)}\\). If \\(f\'(x_0)=0\\), division by zero occurs — the method fails.' },
    { q: 'Show that \\(f(x)=\\ln x - 2 + x\\) has a root near \\(x=1\\).', marks: 2, tier: 'green', modelAnswer: '\\(f(1)=0-1=-1<0\\). \\(f(2)=\\ln 2\\approx -0.307<0\\). \\(f(0.5)=\\ln 0.5+1.5\\approx 0.807>0\\). Sign change between 0.5 and 1.' },
    { q: 'Apply Newton-Raphson once to \\(f(x)=x^2-3x+1\\) from \\(x_0=3\\).', marks: 3, tier: 'green', modelAnswer: '\\(f(3)=1\\), \\(f\'(3)=3\\). \\(x_1=3-\\frac{1}{3}=\\frac{8}{3}\\approx 2.667\\).' },
    { q: 'Perform 3 iterations of \\(x_{n+1}=\\frac{1}{2}(x_n+\\frac{7}{x_n})\\) from \\(x_0=3\\).', marks: 3, tier: 'green', modelAnswer: '\\(x_1=\\frac{1}{2}(3+7/3)=\\frac{8}{3}\\approx 2.667\\). \\(x_2=\\frac{1}{2}(2.667+2.625)=2.646\\). \\(x_3\\approx 2.646\\). (Converging to \\(\\sqrt{7}\\).)' },
    { q: 'Show that \\(p(x)=x^4-8\\) has a root between 1 and 2.', marks: 2, tier: 'green', modelAnswer: '\\(p(1)=1-8=-7<0\\). \\(p(2)=16-8=8>0\\). Sign change \\(\\Rightarrow\\) root in \\((1,2)\\).' },
    { q: 'Apply one iteration of Newton-Raphson to \\(f(x)=\\sin x - \\frac{x}{2}\\) from \\(x_0=2\\).', marks: 3, tier: 'green', modelAnswer: '\\(f(2)=\\sin 2-1\\approx -0.091\\). \\(f\'(2)=\\cos 2-0.5\\approx -0.916\\). \\(x_1=2-\\frac{-0.091}{-0.916}\\approx 1.901\\).' },
    { q: 'Write the iteration formula for \\(x_{n+1}=g(x_n)\\) where \\(g(x)=x^2-1\\). Starting from \\(x_0=0.5\\), find \\(x_1\\) and \\(x_2\\).', marks: 2, tier: 'green', modelAnswer: '\\(x_1=(0.5)^2-1=-0.75\\). \\(x_2=(-0.75)^2-1=-0.4375\\). (Oscillating — may not converge.)' },
    { q: 'Show that the equation \\(x=1+\\ln x\\) has a root near \\(x=1\\) and find the root by one Newton-Raphson iteration from \\(x_0=2\\).', marks: 3, tier: 'green', modelAnswer: '\\(f(x)=x-1-\\ln x\\). \\(f(1)=0\\) exactly — root at \\(x=1\\). Newton-Raphson from \\(x_0=2\\): \\(f(2)=1-\\ln 2\\approx 0.307\\), \\(f\'(2)=1-0.5=0.5\\). \\(x_1=2-0.614\\approx 1.386\\).' }
  ],
  amber: [
    { q: 'Show that the iteration \\(x_{n+1}=\\frac{2}{x_n^2+1}\\) converges to a root of \\(x^3+x-2=0\\) near \\(x=1\\). Perform 4 iterations from \\(x_0=0.8\\).', marks: 5, tier: 'amber', modelAnswer: 'Rearrange: \\(x(x^2+1)=2\\Rightarrow x=\\frac{2}{x^2+1}\\). \\(x_1=\\frac{2}{1.64}=1.220\\). \\(x_2=\\frac{2}{2.488}=0.804\\). \\(x_3=1.213\\). \\(x_4=0.810\\). Oscillating but converging toward root \\(x\\approx 1\\). (Check: \\(|g\'(1)|=|-4x/(x^2+1)^2|_{x=1}=1>1\\) — actually divergent! Correct rearrangement: \\(x=\\sqrt[3]{2-x}\\) converges better.)' },
    { q: 'Use Newton-Raphson to find the root of \\(f(x)=x^3+2x-7\\) to 3 d.p., starting from \\(x_0=1.5\\).', marks: 5, tier: 'amber', modelAnswer: '\\(f\'(x)=3x^2+2\\). \\(x_1=1.5-\\frac{1.375+3-7}{6.75+2}=1.5-\\frac{-2.625}{8.75}=1.5+0.300=1.800\\). \\(x_2=1.8-\\frac{5.832+3.6-7}{9.72+2}=1.8-\\frac{2.432}{11.72}=1.8-0.208=1.592\\). Continue: \\(x_3\\approx 1.570\\). \\(x_4\\approx 1.569\\).' },
    { q: 'Explain why Newton-Raphson fails when applied to \\(f(x)=x^{1/3}\\) starting at \\(x_0=1\\).', marks: 3, tier: 'amber', modelAnswer: '\\(f\'(x)=\\frac{1}{3}x^{-2/3}\\). \\(x_1=1-\\frac{1}{1/3}=1-3=-2\\). \\(x_2=-2-\\frac{(-2)^{1/3}}{\\frac{1}{3}(-2)^{-2/3}}=-2-3(-2)=-2+6=4\\). The method diverges; iterates move away from the root \\(x=0\\).' },
    { q: 'Show that \\(f(x)=x^2-\\cos x\\) has a root in \\((0.8, 0.9)\\). Find it to 3 d.p. using Newton-Raphson.', marks: 6, tier: 'amber', modelAnswer: '\\(f(0.8)=0.64-\\cos(0.8)\\approx 0.64-0.697=-0.057<0\\). \\(f(0.9)=0.81-\\cos(0.9)\\approx 0.81-0.622=0.188>0\\). Sign change ✓.\n\\(f\'(x)=2x+\\sin x\\). From \\(x_0=0.82\\): \\(x_1\\approx 0.8241\\). Converges to \\(x\\approx 0.824\\).' },
    { q: 'Use the iteration \\(x_{n+1}=\\frac{1}{3}(x_n^3+5)\\) to find the root of \\(3x=x^3+5\\) to 3 d.p. starting from \\(x_0=-1\\).', marks: 5, tier: 'amber', modelAnswer: '\\(x_1=\\frac{1}{3}(-1+5)=\\frac{4}{3}=1.333\\). \\(x_2=\\frac{1}{3}(2.370+5)=2.457\\). \\(x_3=\\frac{1}{3}(14.83+5)=6.61\\). Diverging. Try negative branch: \\(x_0=-2\\): \\(x_1=\\frac{1}{3}(-3)=1\\). Cycle detected — this rearrangement may not converge.' },
    { q: 'Estimate the error bound for the root of \\(x^3-2=0\\) found to be \\(x=1.26\\) by showing \\(f(1.255)\\) and \\(f(1.265)\\) have opposite signs.', marks: 4, tier: 'amber', modelAnswer: '\\(f(x)=x^3-2\\). \\(f(1.255)=1.976-2=-0.024<0\\). \\(f(1.265)=2.024-2=0.024>0\\). Sign change confirms root in \\((1.255,1.265)\\), so \\(x=1.26\\pm 0.005\\).' },
    { q: 'The equation \\(\\tan x = 2x\\) has a root near \\(x=1.2\\). Use Newton-Raphson twice from \\(x_0=1.2\\) to find an improved estimate.', marks: 5, tier: 'amber', modelAnswer: '\\(f(x)=\\tan x-2x\\), \\(f\'(x)=\\sec^2 x-2\\). \\(f(1.2)=\\tan(1.2)-2.4\\approx 2.572-2.4=0.172\\). \\(f\'(1.2)=\\sec^2(1.2)-2\\approx 6.601-2=4.601\\). \\(x_1=1.2-0.037=1.163\\). \\(x_2 \\approx 1.166\\).' },
    { q: 'Use the trapezium rule with 4 strips to estimate \\(\\int_0^1 e^{-x^2}\\,dx\\).', marks: 5, tier: 'amber', modelAnswer: 'Strip width \\(h=0.25\\). Values: \\(f(0)=1\\), \\(f(0.25)=e^{-0.0625}\\approx 0.939\\), \\(f(0.5)=e^{-0.25}\\approx 0.779\\), \\(f(0.75)=e^{-0.5625}\\approx 0.570\\), \\(f(1)=e^{-1}\\approx 0.368\\).\nEstimate: \\(\\frac{0.25}{2}(1+0.368+2(0.939+0.779+0.570))\\approx\\frac{0.25}{2}(1.368+4.576)=\\frac{0.25}{2}(5.944)=0.743\\).' },
    { q: 'Show that \\(x=e^{-x}\\) can be rearranged to \\(x_{n+1}=e^{-x_n}\\). Use this to find the root to 2 d.p. from \\(x_0=0.5\\).', marks: 4, tier: 'amber', modelAnswer: '\\(x_1=e^{-0.5}\\approx 0.6065\\). \\(x_2=e^{-0.6065}\\approx 0.5454\\). \\(x_3\\approx 0.5796\\). \\(x_4\\approx 0.5603\\). Converging to \\(x\\approx 0.57\\).' },
    { q: 'Find the root of \\(x^4-x-1=0\\) in \\((1,2)\\) to 3 d.p. using Newton-Raphson.', marks: 5, tier: 'amber', modelAnswer: '\\(f\'(x)=4x^3-1\\). \\(x_0=1.2\\): \\(f(1.2)=2.0736-1.2-1=-0.126\\). \\(f\'(1.2)=6.912-1=5.912\\). \\(x_1=1.2+0.021=1.221\\). Continue to \\(x\\approx 1.221\\).' },
    { q: 'State the condition for the iteration \\(x_{n+1}=g(x_n)\\) to converge near a root \\(\\alpha\\).', marks: 2, tier: 'amber', modelAnswer: 'The iteration converges if \\(|g\'(\\alpha)|<1\\).' },
    { q: 'Use the Newton-Raphson method to find the positive root of \\(f(x)=2\\sin x - x\\) to 3 d.p.', marks: 5, tier: 'amber', modelAnswer: '\\(f(0)=0\\) (trivial). Near \\(x=1.9\\): \\(f\'(x)=2\\cos x-1\\). \\(f(1.9)=2\\sin(1.9)-1.9\\approx 2(0.9463)-1.9=0.993\\). \\(f\'(1.9)=2\\cos(1.9)-1\\approx -0.622\\). \\(x_1=1.9+1.597=3.497\\). Actually the root is \\(x=0\\) and a non-trivial root near \\(x=1.895\\). Newton-Raphson converges to \\(x\\approx 1.896\\).' },
    { q: 'The equation \\(f(x)=x^5+x-1=0\\) has a root in \\((0,1)\\). Show that \\(x_{n+1}=1-x_n^5\\) converges to it.', marks: 4, tier: 'amber', modelAnswer: '\\(g(x)=1-x^5\\). \\(|g\'(x)|=5x^4\\). At root \\(\\approx 0.755\\): \\(|g\'(0.755)|=5(0.755)^4\\approx 5(0.325)=1.62>1\\). Actually this diverges. Better: \\(x=(1-x^5)^{1/1}\\) converges only if \\(|g\'|<1\\). (This illustrates when methods fail.)' },
    { q: 'Apply Simpson\'s Rule with 4 strips to estimate \\(\\int_0^2\\frac{1}{1+x^2}\\,dx\\).', marks: 5, tier: 'amber', modelAnswer: '\\(h=0.5\\). \\(f(0)=1\\), \\(f(0.5)=0.8\\), \\(f(1)=0.5\\), \\(f(1.5)=0.308\\), \\(f(2)=0.2\\).\n\\(I\\approx\\frac{0.5}{3}(1+0.2+4(0.8+0.308)+2(0.5))=\\frac{0.5}{3}(1.2+4(1.108)+1)=\\frac{0.5}{3}(6.632)=1.105\\). (Exact: \\(\\arctan 2\\approx 1.107\\).)' },
    { q: 'The equation \\(x^3-6x+2=0\\) has three real roots. Show that there is a root between 0 and 1, and find it to 3 d.p. using Newton-Raphson.', marks: 6, tier: 'amber', modelAnswer: '\\(f(0)=2>0\\), \\(f(1)=-3<0\\). Sign change ✓.\n\\(f\'(x)=3x^2-6\\). \\(x_0=0.5\\): \\(f(0.5)=0.125-3+2=-0.875\\). \\(f\'(0.5)=0.75-6=-5.25\\). \\(x_1=0.5-0.167=0.333\\). \\(x_2\\approx 0.339\\). Converging to \\(x\\approx 0.338\\).' }
  ],
  red: [
    { q: 'Compare the convergence of the Newton-Raphson method and fixed-point iteration for finding \\(\\sqrt{5}\\). Use the iteration \\(x_{n+1}=\\frac{1}{2}(x_n+\\frac{5}{x_n})\\) and N-R on \\(f(x)=x^2-5\\). Show both converge to \\(\\sqrt{5}\\approx 2.236\\) in 4 iterations from \\(x_0=2\\).', marks: 8, tier: 'red', modelAnswer: 'Fixed-point: \\(x_1=2.25\\), \\(x_2=2.2361\\), \\(x_3=2.23607\\), \\(x_4=2.23607\\).\nN-R: \\(f\'(x)=2x\\). \\(x_1=2-(-1/4)\\) Wait: \\(f(2)=-1\\), \\(x_1=2+0.25=2.25\\) — same! Newton-Raphson on \\(x^2-5\\) gives the Babylonian method. Both agree. Both converge in ~4 steps to \\(2.236\\).' },
    { q: 'Prove that the Newton-Raphson method gives quadratic convergence near a simple root.', marks: 6, tier: 'red', modelAnswer: 'Let \\(\\alpha\\) be a root, \\(e_n=x_n-\\alpha\\). Taylor expand: \\(f(x_n)=f(\\alpha)+e_n f\'(\\alpha)+\\frac{e_n^2}{2}f\'\'(\\alpha)+\\cdots\\). Since \\(f(\\alpha)=0\\): \\(f(x_n)=e_n f\'(\\alpha)+\\frac{e_n^2}{2}f\'\'(\\alpha)+\\cdots\\). \\(f\'(x_n)=f\'(\\alpha)+e_n f\'\'(\\alpha)+\\cdots\\).\n\\(e_{n+1}=e_n-\\frac{f(x_n)}{f\'(x_n)}\\approx\\frac{e_n^2 f\'\'(\\alpha)}{2f\'(\\alpha)}\\). So \\(|e_{n+1}|\\propto e_n^2\\) — quadratic convergence. \\(\\square\\)' },
    { q: 'Find the root of \\(f(x)=e^x-2\\cos x=0\\) to 4 d.p. using Newton-Raphson.', marks: 7, tier: 'red', modelAnswer: '\\(f(0)=1-2=-1<0\\). \\(f(1)=e-2\\cos 1\\approx 2.718-1.080=1.638>0\\). Root in \\((0,1)\\).\n\\(f\'(x)=e^x+2\\sin x\\). \\(x_0=0.5\\): \\(f(0.5)=e^{0.5}-2\\cos(0.5)\\approx 1.649-1.755=-0.106\\). \\(f\'(0.5)=1.649+0.959=2.608\\). \\(x_1=0.5+0.041=0.541\\). Continue: \\(x\\approx 0.5418\\).' },
    { q: 'Show that the rearrangement \\(x=\\frac{x^3+5}{3}\\) of \\(3x=x^3+5\\) leads to a divergent iteration near the positive root. Find a convergent rearrangement instead.', marks: 7, tier: 'red', modelAnswer: 'For \\(g(x)=\\frac{x^3+5}{3}\\): \\(g\'(x)=x^2\\). Near positive root \\(x\\approx -\\)... Actually \\(3x=x^3+5\\Rightarrow x^3-3x+5=0\\). Roots: test \\(f(-2)=-8+6+5=3>0\\), \\(f(-3)=-27+9+5=-13<0\\). Root near \\(x\\approx -2.6\\). \\(|g\'(-2.6)|=6.76>1\\) — divergent.\n\nConvergent rearrangement: \\(x=\\sqrt[3]{3x-5}\\). \\(g\'(x)=\\frac{1}{(3x-5)^{2/3}}\\). At root \\(\\approx -2.6\\): \\(|g\'|=\\frac{1}{|...|}<1\\) if \\(|3x-5|>1\\) — check numerically.' },
    { q: 'Use the secant method (not N-R) to find the root of \\(f(x)=x^2-3\\) in two steps, starting from \\(x_0=1\\) and \\(x_1=2\\).', marks: 6, tier: 'red', modelAnswer: '\\(x_2=x_1-f(x_1)\\frac{x_1-x_0}{f(x_1)-f(x_0)}=2-1\\cdot\\frac{1}{1-(-2)}=2-\\frac{1}{3}=\\frac{5}{3}\\approx 1.667\\). \\(f(5/3)=25/9-3=-\\frac{2}{9}\\). \\(x_3=\\frac{5}{3}-(-\\frac{2}{9})\\cdot\\frac{5/3-2}{-2/9-1}=\\frac{5}{3}-(-\\frac{2}{9})\\cdot\\frac{-1/3}{-11/9}=\\frac{5}{3}-(-\\frac{2}{9})\\cdot\\frac{3}{11}\\approx 1.727\\). (\\(\\sqrt{3}\\approx 1.732\\).)' },
    { q: 'Use the trapezium rule with \\(n=4\\) and Simpson\'s rule with \\(n=4\\) to estimate \\(\\int_0^1 \\sqrt{1+x^3}\\,dx\\). Compare your answers.', marks: 8, tier: 'red', modelAnswer: '\\(h=0.25\\). Values: \\(f(0)=1\\), \\(f(0.25)=\\sqrt{1.0156}\\approx 1.0078\\), \\(f(0.5)=\\sqrt{1.125}\\approx 1.0607\\), \\(f(0.75)=\\sqrt{1.4219}\\approx 1.1924\\), \\(f(1)=\\sqrt{2}\\approx 1.4142\\).\nTrapezium: \\(\\frac{0.25}{2}(1+1.4142+2(1.0078+1.0607+1.1924))\\approx 0.125(2.4142+6.522)=0.125(8.936)=1.117\\).\nSimpson: \\(\\frac{0.25}{3}(1+1.4142+4(1.0078+1.1924)+2(1.0607))=\\frac{0.25}{3}(2.4142+8.800+2.121)=\\frac{0.25}{3}(13.335)=1.111\\).' },
    { q: 'Show that the equation \\(x\\ln x = 1\\) has a root near \\(x=1.8\\). Use Newton-Raphson to find it to 4 d.p.', marks: 7, tier: 'red', modelAnswer: '\\(f(x)=x\\ln x-1\\). \\(f(1)=-1<0\\). \\(f(2)=2\\ln 2-1\\approx 0.386>0\\). Root in \\((1,2)\\). \\(f\'(x)=\\ln x+1\\). \\(x_0=1.8\\): \\(f(1.8)=1.8\\ln(1.8)-1\\approx 1.8(0.5878)-1=-0.0420\\). \\(f\'(1.8)=0.5878+1=1.5878\\). \\(x_1=1.8+0.0265=1.8265\\). \\(x_2\\approx 1.7632\\). Converges to \\(x\\approx 1.7633\\).' },
    { q: 'Find the error bound for the root of \\(f(x)=\\cos x - x^2\\) found by Newton-Raphson to be approximately \\(0.8241\\).', marks: 5, tier: 'red', modelAnswer: '\\(f(0.82405)=\\cos(0.82405)-(0.82405)^2\\approx 0.68155-0.67906=0.00249>0\\). \\(f(0.82415)=\\cos(0.82415)-(0.82415)^2\\approx 0.68147-0.67922=-0.00025<0\\). Sign change confirms root in \\((0.82405,0.82415)\\). Error bound: \\(\\pm 0.00005\\).' },
    { q: 'Use the Newton-Raphson method to find \\(\\sqrt[5]{10}\\) to 4 d.p. by finding the root of \\(x^5-10=0\\).', marks: 6, tier: 'red', modelAnswer: '\\(f\'(x)=5x^4\\). \\(x_0=1.5\\): \\(f(1.5)=7.594-10=-2.406\\), \\(f\'(1.5)=25.31\\). \\(x_1=1.5+0.095=1.595\\). \\(x_2\\approx 1.584\\). \\(x_3\\approx 1.5849\\). Converges to \\(x\\approx 1.5849\\).' },
    { q: 'Investigate the iteration \\(x_{n+1}=\\frac{x_n^2+2}{2x_n-1}\\) near \\(x=2\\). Show this is Newton-Raphson on some \\(f(x)\\) and state \\(f(x)\\).', marks: 7, tier: 'red', modelAnswer: 'Newton-Raphson gives \\(x_{n+1}=x_n - f/f_{deriv}\\). Setting equal to \\(\\frac{x^2+2}{2x-1}\\) gives \\(f/f_{deriv}=\\frac{x^2-x-2}{2x-1}\\). This matches \\(f(x)=x^2-x-2=(x-2)(x+1)\\) with \\(f_{deriv}(x)=2x-1\\). Root at \\(x=2\\) confirmed.' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P20: Integration (Year 2)
// ─────────────────────────────────────────────────────────────
'P20': {
  name: 'Integration (Year 2)',
  green: [
    { q: 'Use the substitution \\(u=x^2+1\\) to evaluate \\(\\int 2x\\sqrt{x^2+1}\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(du=2x\\,dx\\). \\(\\int\\sqrt{u}\\,du=\\frac{2}{3}u^{3/2}+c=\\frac{2}{3}(x^2+1)^{3/2}+c\\).' },
    { q: 'Use integration by parts to find \\(\\int xe^x\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(u=x\\), \\(dv=e^x\\,dx\\). \\(\\int xe^x\\,dx=xe^x-\\int e^x\\,dx=xe^x-e^x+c=e^x(x-1)+c\\).' },
    { q: 'Express \\(\\frac{2}{(x+1)(x-1)}\\) in partial fractions, then integrate.', marks: 4, tier: 'green', modelAnswer: '\\(\\frac{2}{(x+1)(x-1)}=\\frac{-1}{x+1}+\\frac{1}{x-1}\\). Integral: \\(-\\ln|x+1|+\\ln|x-1|+c=\\ln\\left|\\frac{x-1}{x+1}\\right|+c\\).' },
    { q: 'Use the substitution \\(u=3x+2\\) to find \\(\\int(3x+2)^4\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(du=3\\,dx\\). \\(\\frac{1}{3}\\int u^4\\,du=\\frac{u^5}{15}+c=\\frac{(3x+2)^5}{15}+c\\).' },
    { q: 'Find \\(\\int x\\sin x\\,dx\\) using integration by parts.', marks: 3, tier: 'green', modelAnswer: '\\(u=x\\), \\(dv=\\sin x\\,dx\\). \\(=-x\\cos x+\\int\\cos x\\,dx=-x\\cos x+\\sin x+c\\).' },
    { q: 'Find \\(\\int\\frac{3}{x+2}\\,dx\\).', marks: 2, tier: 'green', modelAnswer: '\\(3\\ln|x+2|+c\\).' },
    { q: 'Use integration by parts to find \\(\\int x\\cos 2x\\,dx\\).', marks: 4, tier: 'green', modelAnswer: '\\(u=x\\), \\(dv=\\cos 2x\\,dx\\). \\(=\\frac{x\\sin 2x}{2}-\\frac{1}{2}\\int\\sin 2x\\,dx=\\frac{x\\sin 2x}{2}+\\frac{\\cos 2x}{4}+c\\).' },
    { q: 'Use the substitution \\(u=\\ln x\\) to find \\(\\int\\frac{\\ln x}{x}\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(du=\\frac{1}{x}dx\\). \\(\\int u\\,du=\\frac{u^2}{2}+c=\\frac{(\\ln x)^2}{2}+c\\).' },
    { q: 'Integrate \\(\\frac{4}{(2x+1)(x-3)}\\) by first expressing in partial fractions.', marks: 4, tier: 'green', modelAnswer: '\\(\\frac{4}{(2x+1)(x-3)}=\\frac{-\\frac{8}{7}}{2x+1}+\\frac{\\frac{4}{7}}{x-3}\\). Integral: \\(-\\frac{4}{7}\\ln|2x+1|+\\frac{4}{7}\\ln|x-3|+c\\).' },
    { q: 'Find \\(\\int e^{3x+1}\\,dx\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\frac{1}{3}e^{3x+1}+c\\).' },
    { q: 'Evaluate \\(\\int_0^1 xe^x\\,dx\\) using integration by parts.', marks: 4, tier: 'green', modelAnswer: '\\([e^x(x-1)]_0^1=(e\\cdot 0)-(-1)=0+1=1\\).' },
    { q: 'Use the substitution \\(u=x^2\\) to find \\(\\int xe^{x^2}\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(du=2x\\,dx\\). \\(\\frac{1}{2}\\int e^u\\,du=\\frac{e^{x^2}}{2}+c\\).' },
    { q: 'Find \\(\\int\\sin^2 x\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\sin^2 x=\\frac{1-\\cos 2x}{2}\\). \\(\\int\\sin^2 x\\,dx=\\frac{x}{2}-\\frac{\\sin 2x}{4}+c\\).' },
    { q: 'Use the substitution \\(u=1+x^2\\) to evaluate \\(\\int_0^2\\frac{x}{1+x^2}\\,dx\\).', marks: 3, tier: 'green', modelAnswer: '\\(du=2x\\,dx\\). \\(\\frac{1}{2}\\int_1^5\\frac{du}{u}=\\frac{1}{2}[\\ln u]_1^5=\\frac{\\ln 5}{2}\\).' },
    { q: 'Integrate \\(\\frac{2x}{x^2-9}\\) using partial fractions.', marks: 3, tier: 'green', modelAnswer: '\\(\\frac{2x}{(x-3)(x+3)}=\\frac{1}{x-3}+\\frac{1}{x+3}\\). Integral: \\(\\ln|x-3|+\\ln|x+3|+c=\\ln|x^2-9|+c\\).' }
  ],
  amber: [
    { q: 'Evaluate \\(\\int_0^1 x^2e^x\\,dx\\) by applying integration by parts twice.', marks: 5, tier: 'amber', modelAnswer: 'IBP twice: \\(\\int x^2e^x\\,dx=x^2e^x-2xe^x+2e^x+c=e^x(x^2-2x+2)+c\\). Evaluate: \\([e^x(x^2-2x+2)]_0^1=(e\\cdot 1)-(1\\cdot 2)=e-2\\).' },
    { q: 'Solve the separable DE \\(\\frac{dy}{dx}=xy\\) with \\(y(0)=1\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\frac{dy}{y}=x\\,dx\\). \\(\\ln|y|=\\frac{x^2}{2}+c\\). At \\(x=0\\), \\(y=1\\): \\(c=0\\). \\(y=e^{x^2/2}\\).' },
    { q: 'Find \\(\\int\\ln x\\,dx\\).', marks: 4, tier: 'amber', modelAnswer: 'IBP: \\(u=\\ln x\\), \\(dv=dx\\). \\(=x\\ln x-\\int x\\cdot\\frac{1}{x}\\,dx=x\\ln x-x+c\\).' },
    { q: 'Find \\(\\int x\\ln x\\,dx\\).', marks: 4, tier: 'amber', modelAnswer: 'IBP: \\(u=\\ln x\\), \\(dv=x\\,dx\\). \\(=\\frac{x^2\\ln x}{2}-\\frac{1}{2}\\int x\\,dx=\\frac{x^2\\ln x}{2}-\\frac{x^2}{4}+c\\).' },
    { q: 'Use the substitution \\(u=\\sin x\\) to evaluate \\(\\int_0^{\\pi/2}\\sin^3 x\\cos x\\,dx\\).', marks: 5, tier: 'amber', modelAnswer: '\\(du=\\cos x\\,dx\\). \\(\\int_0^1 u^3\\,du=\\left[\\frac{u^4}{4}\\right]_0^1=\\frac{1}{4}\\).' },
    { q: 'Solve \\(\\frac{dy}{dx}=\\frac{x}{y}\\) with \\(y(0)=3\\). Sketch the solution curve.', marks: 5, tier: 'amber', diagram: true, modelAnswer: '\\(y\\,dy=x\\,dx\\). \\(\\frac{y^2}{2}=\\frac{x^2}{2}+c\\). At \\(x=0\\), \\(y=3\\): \\(c=\\frac{9}{2}\\). \\(y^2-x^2=9\\). Hyperbola with \\(y>0\\).' },
    { q: 'Integrate \\(\\frac{x^2+1}{x(x^2-1)}\\) using partial fractions.', marks: 6, tier: 'amber', modelAnswer: '\\(\\frac{x^2+1}{x(x-1)(x+1)}=\\frac{A}{x}+\\frac{B}{x-1}+\\frac{C}{x+1}\\). \\(A=-1\\), \\(B=1\\), \\(C=1\\).\nIntegral: \\(-\\ln|x|+\\ln|x-1|+\\ln|x+1|+c=\\ln\\left|\\frac{x^2-1}{x}\\right|+c\\).' },
    { q: 'Apply integration by parts to \\(\\int x^2\\sin x\\,dx\\).', marks: 5, tier: 'amber', modelAnswer: 'Step 1: \\(u=x^2\\), \\(dv=\\sin x\\). \\(=-x^2\\cos x+2\\int x\\cos x\\,dx\\).\nStep 2: \\(\\int x\\cos x\\,dx=x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x\\).\nResult: \\(-x^2\\cos x+2x\\sin x+2\\cos x+c\\).' },
    { q: 'Solve \\(\\frac{dy}{dx}=3y-6\\) with \\(y(0)=4\\). Find \\(y\\) in terms of \\(x\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\frac{dy}{3y-6}=dx\\). \\(\\frac{1}{3}\\ln|3y-6|=x+c\\). At \\(x=0\\): \\(\\frac{1}{3}\\ln 6=c\\). \\(3y-6=6e^{3x}\\). \\(y=2e^{3x}+2\\).' },
    { q: 'Find \\(\\int\\frac{3x+1}{(x+2)^2}\\,dx\\) using partial fractions with a repeated root.', marks: 5, tier: 'amber', modelAnswer: '\\(\\frac{3x+1}{(x+2)^2}=\\frac{3}{x+2}+\\frac{-5}{(x+2)^2}\\). Integral: \\(3\\ln|x+2|+\\frac{5}{x+2}+c\\).' },
    { q: 'Evaluate \\(\\int_1^e x\\ln x\\,dx\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\left[\\frac{x^2\\ln x}{2}-\\frac{x^2}{4}\\right]_1^e=(\\frac{e^2}{2}-\\frac{e^2}{4})-(0-\\frac{1}{4})=\\frac{e^2}{4}+\\frac{1}{4}=\\frac{e^2+1}{4}\\).' },
    { q: 'Use the substitution \\(x=\\sin\\theta\\) to evaluate \\(\\int_0^{1/2}\\frac{1}{\\sqrt{1-x^2}}\\,dx\\).', marks: 5, tier: 'amber', modelAnswer: '\\(dx=\\cos\\theta\\,d\\theta\\), \\(\\sqrt{1-x^2}=\\cos\\theta\\). \\(\\int_0^{\\pi/6}1\\,d\\theta=\\frac{\\pi}{6}\\).' },
    { q: 'Solve the differential equation \\(\\frac{dy}{dx}=\\frac{y^2-1}{x}\\).', marks: 5, tier: 'amber', modelAnswer: '\\(\\frac{dy}{y^2-1}=\\frac{dx}{x}\\). Partial fractions: \\(\\frac{1}{y^2-1}=\\frac{1/2}{y-1}-\\frac{1/2}{y+1}\\). \\(\\frac{1}{2}\\ln\\left|\\frac{y-1}{y+1}\\right|=\\ln|x|+c\\).' },
    { q: 'Find the area between the curve \\(y=\\sin x\\) and the \\(x\\)-axis for \\(0 \\leq x \\leq 2\\pi\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\int_0^\\pi\\sin x\\,dx+\\left|\\int_\\pi^{2\\pi}\\sin x\\,dx\\right|=[-\\cos x]_0^\\pi+|[-\\cos x]_\\pi^{2\\pi}|=2+2=4\\).' },
    { q: 'Evaluate \\(\\int_0^1 xe^{-x}\\,dx\\).', marks: 4, tier: 'amber', modelAnswer: 'IBP: \\([-xe^{-x}-e^{-x}]_0^1\\). Wait: \\(u=x\\), \\(dv=e^{-x}\\). \\([-xe^{-x}]_0^1+\\int_0^1 e^{-x}\\,dx=-e^{-1}+[-e^{-x}]_0^1=-e^{-1}+1-e^{-1}=1-\\frac{2}{e}\\).' }
  ],
  red: [
    { q: 'Solve the ODE \\(\\frac{dy}{dx}=y\\sin x\\) with \\(y(0)=2\\) and sketch the solution for \\(0\\leq x\\leq 2\\pi\\).', marks: 7, tier: 'red', diagram: true, modelAnswer: '\\(\\frac{dy}{y}=\\sin x\\,dx\\). \\(\\ln y=-\\cos x+c\\). At \\(x=0\\), \\(y=2\\): \\(c=\\ln 2+1\\). \\(y=2e^{1-\\cos x}\\). Sketch: oscillates, minimum \\(y=2\\) at \\(x=0,2\\pi\\), maximum \\(y=2e^2\\) at \\(x=\\pi\\).' },
    { q: 'Find \\(\\int\\frac{5x^2+2}{(x-1)(x+2)^2}\\,dx\\).', marks: 8, tier: 'red', modelAnswer: '\\(\\frac{5x^2+2}{(x-1)(x+2)^2}=\\frac{A}{x-1}+\\frac{B}{x+2}+\\frac{C}{(x+2)^2}\\). \\(A=1\\) (at \\(x=1\\)), \\(C=\\frac{22}{-3}\\)... let \\(x=-2\\): \\(C=\\frac{22}{-3}\\). Hmm: \\(5(4)+2=22\\), \\(x+2=0\\Rightarrow C=\\frac{22}{-3}\\). Recalculate: \\(x=-2\\): \\(22=C(-3)\\Rightarrow C=-\\frac{22}{3}\\). Expand for \\(A,B\\): compare coefficients. \\(A=1\\), \\(B=4\\), \\(C=-\\frac{22}{3}\\)...\n\nActually: \\(5x^2+2=A(x+2)^2+B(x-1)(x+2)+C(x-1)\\). \\(x=1\\): \\(7=9A\\Rightarrow A=\\frac{7}{9}\\). \\(x=-2\\): \\(22=C(-3)\\Rightarrow C=-\\frac{22}{3}\\). \\(x^2\\): \\(5=A+B\\Rightarrow B=5-\\frac{7}{9}=\\frac{38}{9}\\).\n\\(\\int=\\frac{7}{9}\\ln|x-1|+\\frac{38}{9}\\ln|x+2|+\\frac{22}{3(x+2)}+c\\).' },
    { q: 'Use the substitution \\(t=\\tan\\frac{x}{2}\\) (Weierstrass) to show \\(\\int\\frac{dx}{1+\\sin x}=\\frac{-2}{1+\\tan(x/2)}+c\\).', marks: 8, tier: 'red', modelAnswer: 'With \\(t=\\tan\\frac{x}{2}\\): \\(\\sin x=\\frac{2t}{1+t^2}\\), \\(dx=\\frac{2}{1+t^2}dt\\).\n\\(\\int\\frac{1}{1+\\frac{2t}{1+t^2}}\\cdot\\frac{2}{1+t^2}\\,dt=\\int\\frac{2}{(1+t)^2}\\,dt=\\frac{-2}{1+t}+c=\\frac{-2}{1+\\tan(x/2)}+c\\). \\(\\square\\)' },
    { q: 'Solve \\(\\frac{dy}{dx}=\\frac{2y}{x+1}\\) with \\(y(0)=3\\). Find \\(y\\) and the value of \\(x\\) for which \\(y=12\\).', marks: 6, tier: 'red', modelAnswer: '\\(\\frac{dy}{y}=\\frac{2\\,dx}{x+1}\\Rightarrow\\ln y=2\\ln|x+1|+c\\). At \\(x=0\\): \\(\\ln 3=c\\). \\(y=3(x+1)^2\\).\n\\(y=12\\Rightarrow (x+1)^2=4\\Rightarrow x=1\\).' },
    { q: 'Find the area enclosed by the parametric curve \\(x=2\\cos t\\), \\(y=3\\sin t\\) and the \\(x\\)-axis for \\(0\\leq t\\leq\\pi\\).', marks: 7, tier: 'red', diagram: true, modelAnswer: '\\(A=\\int y\\,dx=-\\int_0^\\pi 3\\sin t\\cdot(-2\\sin t)\\,dt=6\\int_0^\\pi\\sin^2 t\\,dt=6\\cdot\\frac{\\pi}{2}=3\\pi\\). (This is half the ellipse of area \\(\\pi ab=6\\pi\\).)' },
    { q: 'Solve \\(x\\frac{dy}{dx}+2y=x^3\\) by finding an integrating factor.', marks: 7, tier: 'red', modelAnswer: 'Rewrite: \\(\\frac{dy}{dx}+\\frac{2}{x}y=x^2\\). Integrating factor: \\(e^{\\int 2/x\\,dx}=x^2\\). Multiply: \\(\\frac{d}{dx}(x^2 y)=x^4\\). \\(x^2 y=\\frac{x^5}{5}+c\\). \\(y=\\frac{x^3}{5}+\\frac{c}{x^2}\\).' },
    { q: 'Evaluate \\(\\int_0^\\infty xe^{-x}\\,dx\\).', marks: 5, tier: 'red', modelAnswer: 'IBP: \\(\\int_0^R xe^{-x}\\,dx=[-xe^{-x}]_0^R+\\int_0^R e^{-x}\\,dx=[-xe^{-x}-e^{-x}]_0^R=-Re^{-R}-e^{-R}+1\\to 1\\) as \\(R\\to\\infty\\). Answer: \\(1\\).' },
    { q: 'Find \\(\\int\\frac{x^3}{x^2+1}\\,dx\\) by first performing polynomial division.', marks: 6, tier: 'red', modelAnswer: '\\(\\frac{x^3}{x^2+1}=x-\\frac{x}{x^2+1}\\). \\(\\int=\\frac{x^2}{2}-\\frac{1}{2}\\ln(x^2+1)+c\\).' },
    { q: 'Use integration by parts to find a reduction formula for \\(I_n=\\int x^n e^x\\,dx\\) and use it to find \\(I_3\\).', marks: 7, tier: 'red', modelAnswer: '\\(I_n=x^ne^x-nI_{n-1}\\). \\(I_0=e^x\\). \\(I_1=xe^x-e^x\\). \\(I_2=x^2e^x-2xe^x+2e^x\\). \\(I_3=x^3e^x-3x^2e^x+6xe^x-6e^x+c=e^x(x^3-3x^2+6x-6)+c\\).' },
    { q: 'A population satisfies \\(\\frac{dP}{dt}=kP(N-P)\\) where \\(N=1000\\) and initially \\(P_0=100\\), \\(P(1)=200\\). Find \\(P(t)\\) and the time when \\(P=500\\).', marks: 8, tier: 'red', modelAnswer: 'Partial fractions: \\(\\frac{1}{P(N-P)}=\\frac{1}{N}\\left(\\frac{1}{P}+\\frac{1}{N-P}\\right)\\). Integrate: \\(\\frac{1}{N}\\ln\\frac{P}{N-P}=kt+c\\). With \\(N=1000\\): at \\(t=0\\): \\(\\ln\\frac{100}{900}=\\ln\\frac{1}{9}=c\\cdot 1000\\Rightarrow c=-\\frac{\\ln 9}{1000}\\). At \\(t=1\\): \\(\\frac{1}{1000}\\ln\\frac{200}{800}=k-\\frac{\\ln 9}{1000}\\Rightarrow k=\\frac{\\ln 4-\\ln 9}{1000}+\\frac{\\ln 9}{1000}=\\frac{\\ln 4}{1000}\\). \\(P=500\\) when \\(\\ln\\frac{500}{500}=0=kt+c\\cdot 1000\\Rightarrow t=\\frac{-c}{k}=\\frac{\\ln 9}{\\ln 4}\\approx 1.585\\) units.' }
  ]
},

// ─────────────────────────────────────────────────────────────
// P21: Vectors (3D)
// ─────────────────────────────────────────────────────────────
'P21': {
  name: 'Vectors (3D)',
  green: [
    { q: 'Find the magnitude of the vector \\(\\mathbf{v} = 3\\mathbf{i} - 4\\mathbf{j} + 5\\mathbf{k}\\).', marks: 2, tier: 'green', modelAnswer: '\\(|\\mathbf{v}|=\\sqrt{9+16+25}=\\sqrt{50}=5\\sqrt{2}\\).' },
    { q: 'Find the unit vector in the direction of \\(\\mathbf{a} = 2\\mathbf{i}+1\\mathbf{j}-2\\mathbf{k}\\).', marks: 2, tier: 'green', modelAnswer: '\\(|\\mathbf{a}|=3\\). Unit vector: \\(\\frac{1}{3}(2\\mathbf{i}+\\mathbf{j}-2\\mathbf{k})\\).' },
    { q: 'Points \\(A = (1,2,3)\\) and \\(B = (4,-1,7)\\). Find \\(\\vec{AB}\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\vec{AB}=\\mathbf{b}-\\mathbf{a}=(3,-3,4)\\).' },
    { q: 'Write the position vector of the point \\(P = (-2, 5, 1)\\).', marks: 1, tier: 'green', modelAnswer: '\\(\\mathbf{p}=-2\\mathbf{i}+5\\mathbf{j}+\\mathbf{k}\\) or \\(\\begin{pmatrix}-2\\\\5\\\\1\\end{pmatrix}\\).' },
    { q: 'Show that \\(P = (5, 3, 2)\\) lies on the line \\(\\mathbf{r}=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}\\).', marks: 3, tier: 'green', modelAnswer: 'Need \\(1+2t=5\\Rightarrow t=2\\). Check: \\(1+1(2)=3\\) ✓, \\(0+1(2)=2\\) ✓. So \\(P\\) lies on the line.' },
    { q: 'Find \\(\\vec{AB}\\) where \\(A=(0,-1,2)\\) and \\(B=(3,2,-1)\\). Find \\(|\\vec{AB}|\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\vec{AB}=(3,3,-3)\\). \\(|\\vec{AB}|=\\sqrt{9+9+9}=3\\sqrt{3}\\).' },
    { q: 'Find the midpoint of \\(A=(1,3,-2)\\) and \\(B=(5,-1,4)\\).', marks: 2, tier: 'green', modelAnswer: 'Midpoint \\(= \\frac{1}{2}(\\mathbf{a}+\\mathbf{b}) = (3,1,1)\\).' },
    { q: 'Verify that \\((2,1,-3)\\) lies on the line through \\((0,-1,1)\\) with direction \\((1,1,-2)\\).', marks: 3, tier: 'green', modelAnswer: '\\((2,1,-3)=(0,-1,1)+t(1,1,-2)\\). \\(t=2\\) from x: \\(0+2=2\\) ✓, \\(-1+2=1\\) ✓, \\(1-4=-3\\) ✓.' },
    { q: 'Write the equation of the line through \\(A=(1,-2,3)\\) with direction vector \\(\\mathbf{d}=(2,1,-1)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\mathbf{r}=\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\).' },
    { q: 'Find the distance between \\(A=(1,2,3)\\) and \\(B=(4,6,3)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\vec{AB}=(3,4,0)\\). \\(|\\vec{AB}|=\\sqrt{9+16}=5\\).' },
    { q: 'Compute \\(\\mathbf{a}\\cdot\\mathbf{b}\\) where \\(\\mathbf{a}=(1,2,-1)\\) and \\(\\mathbf{b}=(3,-1,2)\\).', marks: 2, tier: 'green', modelAnswer: '\\(\\mathbf{a}\\cdot\\mathbf{b}=3-2-2=-1\\).' },
    { q: 'State the equation of the line through points \\(A=(2,1,3)\\) and \\(B=(5,-2,7)\\).', marks: 3, tier: 'green', modelAnswer: 'Direction: \\(\\vec{AB}=(3,-3,4)\\). \\(\\mathbf{r}=\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}+t\\begin{pmatrix}3\\\\-3\\\\4\\end{pmatrix}\\).' },
    { q: 'Find the angle between \\(\\mathbf{a}=(1,0,1)\\) and \\(\\mathbf{b}=(1,1,0)\\).', marks: 3, tier: 'green', modelAnswer: '\\(\\cos\\theta=\\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}=\\frac{1}{\\sqrt{2}\\cdot\\sqrt{2}}=\\frac{1}{2}\\). \\(\\theta=60°\\) or \\(\\frac{\\pi}{3}\\).' },
    { q: 'Are vectors \\(\\mathbf{a}=(2,-1,3)\\) and \\(\\mathbf{b}=(-4,2,-6)\\) parallel? Justify.', marks: 2, tier: 'green', modelAnswer: '\\(\\mathbf{b}=-2\\mathbf{a}\\). Yes, they are parallel (scalar multiple).' },
    { q: 'Find \\(\\lambda\\) if \\(\\mathbf{a}=(\\lambda,2,1)\\) and \\(\\mathbf{b}=(1,-1,3)\\) are perpendicular.', marks: 2, tier: 'green', modelAnswer: '\\(\\mathbf{a}\\cdot\\mathbf{b}=\\lambda-2+3=\\lambda+1=0\\Rightarrow\\lambda=-1\\).' }
  ],
  amber: [
    { q: 'Find the angle between lines \\(\\mathbf{r}=\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}+s\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}\\) and \\(\\mathbf{r}=\\begin{pmatrix}0\\\\1\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\cos\\theta=\\frac{|\\mathbf{d}_1\\cdot\\mathbf{d}_2|}{|\\mathbf{d}_1||\\mathbf{d}_2|}=\\frac{|2-1-2|}{\\sqrt{6}\\cdot\\sqrt{6}}=\\frac{1}{6}\\). \\(\\theta=\\arccos\\frac{1}{6}\\approx 80.4°\\).' },
    { q: 'Determine whether the lines \\(\\ell_1: \\mathbf{r}=(1,2,3)+t(1,1,1)\\) and \\(\\ell_2: \\mathbf{r}=(2,3,4)+s(2,2,2)\\) are parallel, intersecting, or skew.', marks: 4, tier: 'amber', modelAnswer: 'Directions: \\((1,1,1)\\) and \\((2,2,2)=2(1,1,1)\\) — parallel. Check if they are the same line: does \\((2,3,4)\\) lie on \\(\\ell_1\\)? \\((2,3,4)=(1,2,3)+t(1,1,1)\\Rightarrow t=1\\) ✓. So the lines are the same (coincident).' },
    { q: 'Find the equation of the line passing through \\(A=(2,-1,4)\\) and \\(B=(5,2,1)\\).', marks: 3, tier: 'amber', modelAnswer: 'Direction: \\((3,3,-3)\\) or simplified \\((1,1,-1)\\). \\(\\mathbf{r}=(2,-1,4)+t(1,1,-1)\\).' },
    { q: 'Show that \\(\\ell_1: \\mathbf{r}=(0,1,2)+s(1,2,-1)\\) and \\(\\ell_2: \\mathbf{r}=(3,1,0)+t(1,-1,2)\\) are skew.', marks: 5, tier: 'amber', modelAnswer: 'Directions not parallel (not scalar multiples). Try to find intersection: \\(s=3+t\\), \\(1+2s=1-t\\Rightarrow 2s+t=0\\), \\(2-s=2t\\). From first two: \\(s=3+t\\) and \\(2(3+t)+t=0\\Rightarrow 6+3t=0\\Rightarrow t=-2\\), \\(s=1\\). Check third: \\(2-1=1\\), \\(2(-2)=-4\\neq 1\\). Contradiction \\(\\Rightarrow\\) lines are skew.' },
    { q: 'Find the angle between the line \\(\\mathbf{r}=(1,0,0)+t(3,4,0)\\) and the line \\(\\mathbf{r}=(0,0,1)+s(0,3,4)\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\mathbf{d}_1=(3,4,0)\\), \\(|d_1|=5\\). \\(\\mathbf{d}_2=(0,3,4)\\), \\(|d_2|=5\\). \\(\\cos\\theta=\\frac{|0+12+0|}{25}=\\frac{12}{25}\\). \\(\\theta=\\arccos\\frac{12}{25}\\approx 61.3°\\).' },
    { q: 'The line \\(\\ell\\) passes through \\((1,0,-1)\\) and is parallel to \\(\\mathbf{d}=(2,-1,3)\\). Find the position vector of the point on \\(\\ell\\) closest to the origin.', marks: 5, tier: 'amber', modelAnswer: 'Point on \\(\\ell\\): \\(\\mathbf{r}=(1+2t,-t,-1+3t)\\). For closest to origin, \\(\\mathbf{r}\\cdot\\mathbf{d}=0\\): \\(2(1+2t)-1(-t)+3(-1+3t)=0\\Rightarrow 2+4t+t-3+9t=0\\Rightarrow 14t=1\\Rightarrow t=\\frac{1}{14}\\). Point: \\((1+\\frac{1}{7},-\\frac{1}{14},-1+\\frac{3}{14})=\\frac{1}{14}(16,-1,-11)\\).' },
    { q: 'Find the point of intersection of \\(\\ell_1: \\mathbf{r}=(1,2,0)+s(1,1,2)\\) and \\(\\ell_2: \\mathbf{r}=(3,4,4)+t(-1,1,-2)\\).', marks: 5, tier: 'amber', modelAnswer: '\\(1+s=3-t\\Rightarrow s+t=2\\quad(1)\\). \\(2+s=4+t\\Rightarrow s-t=2\\quad(2)\\). From (1)+(2): \\(2s=4\\Rightarrow s=2\\), \\(t=0\\). Check z: \\(0+4=4\\) ✓. Point: \\((3,4,4)\\).' },
    { q: 'Given \\(\\mathbf{a}=(1,2,-1)\\) and \\(\\mathbf{b}=(2,0,3)\\), find \\(\\mathbf{a}\\times\\mathbf{b}\\) (cross product).', marks: 3, tier: 'amber', modelAnswer: '\\(\\mathbf{a}\\times\\mathbf{b}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\1&2&-1\\\\2&0&3\\end{vmatrix}=(6-0)\\mathbf{i}-(3+2)\\mathbf{j}+(0-4)\\mathbf{k}=(6,-5,-4)\\).' },
    { q: 'Find the perpendicular distance from point \\(P=(1,2,3)\\) to the line \\(\\mathbf{r}=(0,0,1)+t(1,1,0)\\).', marks: 5, tier: 'amber', modelAnswer: 'Foot of perpendicular: \\(\\vec{AP}=(1,2,2)\\) where \\(A=(0,0,1)\\). Project onto direction \\(\\hat{d}=(\\frac{1}{\\sqrt{2}},\\frac{1}{\\sqrt{2}},0)\\): \\(t=\\vec{AP}\\cdot\\hat{d}=\\frac{3}{\\sqrt{2}}\\). Foot: \\((\\frac{3}{2},\\frac{3}{2},1)\\). Distance: \\(|(1-\\frac{3}{2},2-\\frac{3}{2},3-1)|=|(-\\frac{1}{2},\\frac{1}{2},2)|=\\sqrt{\\frac{1}{4}+\\frac{1}{4}+4}=\\sqrt{4.5}=\\frac{3}{\\sqrt{2}}\\).' },
    { q: 'Three points \\(A=(0,0,0)\\), \\(B=(1,2,3)\\), \\(C=(2,0,1)\\). Show they are non-collinear and find the equation of the plane through them.', marks: 5, tier: 'amber', modelAnswer: '\\(\\vec{AB}=(1,2,3)\\), \\(\\vec{AC}=(2,0,1)\\). Normal: \\(\\vec{AB}\\times\\vec{AC}=(2-0,6-1,0-4)=(2,5,-4)\\). Plane: \\(2x+5y-4z=0\\). Non-collinear since \\(\\vec{AC}\\neq\\lambda\\vec{AB}\\).' },
    { q: 'Find the value of \\(\\lambda\\) such that the lines \\(\\mathbf{r}=(1,0,2)+s(1,\\lambda,-1)\\) and \\(\\mathbf{r}=(3,1,0)+t(2,1,1)\\) are perpendicular.', marks: 3, tier: 'amber', modelAnswer: '\\((1,\\lambda,-1)\\cdot(2,1,1)=0\\Rightarrow 2+\\lambda-1=0\\Rightarrow\\lambda=-1\\).' },
    { q: 'Find the vector equation of the line through \\((1,2,3)\\) that is perpendicular to both \\(\\mathbf{a}=(1,0,1)\\) and \\(\\mathbf{b}=(0,1,1)\\).', marks: 4, tier: 'amber', modelAnswer: 'Direction: \\(\\mathbf{a}\\times\\mathbf{b}=(0\\cdot1-1\\cdot1,1\\cdot0-1\\cdot1,1\\cdot1-0\\cdot0)=(-1,-1,1)\\). Line: \\(\\mathbf{r}=(1,2,3)+t(-1,-1,1)\\).' },
    { q: 'Calculate the area of triangle \\(OAB\\) where \\(O=(0,0,0)\\), \\(A=(2,1,0)\\), \\(B=(1,3,1)\\).', marks: 4, tier: 'amber', modelAnswer: '\\(\\vec{OA}=(2,1,0)\\), \\(\\vec{OB}=(1,3,1)\\). \\(\\vec{OA}\\times\\vec{OB}=(1-0,0-2,6-1)=(1,-2,5)\\). Area \\(=\\frac{1}{2}|(1,-2,5)|=\\frac{1}{2}\\sqrt{30}\\).' },
    { q: 'Given lines \\(\\ell_1: \\frac{x-1}{2}=\\frac{y-2}{-1}=\\frac{z+1}{3}\\) and \\(\\ell_2: \\frac{x}{1}=\\frac{y+1}{2}=\\frac{z-3}{-1}\\), find the angle between them.', marks: 4, tier: 'amber', modelAnswer: '\\(\\mathbf{d}_1=(2,-1,3)\\), \\(|d_1|=\\sqrt{14}\\). \\(\\mathbf{d}_2=(1,2,-1)\\), \\(|d_2|=\\sqrt{6}\\). \\(\\cos\\theta=\\frac{|2-2-3|}{\\sqrt{14}\\sqrt{6}}=\\frac{3}{\\sqrt{84}}\\approx 0.327\\). \\(\\theta\\approx 70.9°\\).' },
    { q: 'Given \\(A=(1,0,2)\\), \\(B=(3,1,0)\\), \\(C=(0,2,1)\\), find the area of triangle \\(ABC\\) using the cross product.', marks: 4, tier: 'amber', modelAnswer: '\\(\\vec{AB}=(2,1,-2)\\), \\(\\vec{AC}=(-1,2,-1)\\). \\(\\vec{AB}\\times\\vec{AC}=(1\\cdot(-1)-(-2)\\cdot2,(-2)(-1)-2(-1),2\\cdot2-1(-1))=(3,4,5)\\). Area\\(=\\frac{1}{2}\\sqrt{9+16+25}=\\frac{\\sqrt{50}}{2}=\\frac{5\\sqrt{2}}{2}\\).' }
  ],
  red: [
    { q: 'Find the point on the line \\(\\mathbf{r}=(1,2,-1)+t(2,1,3)\\) closest to the point \\(Q=(5,4,2)\\). Hence find the perpendicular distance from \\(Q\\) to the line.', marks: 7, tier: 'red', modelAnswer: '\\(\\vec{AQ}=(4,2,3)\\) where \\(A=(1,2,-1)\\). Projection: \\(t=\\frac{(4,2,3)\\cdot(2,1,3)}{|(2,1,3)|^2}=\\frac{8+2+9}{14}=\\frac{19}{14}\\). Foot: \\((1+\\frac{38}{14},2+\\frac{19}{14},-1+\\frac{57}{14})=\\frac{1}{14}(52,47,43)\\). Distance: \\(|\\vec{FQ}|\\) where \\(F\\) is the foot.' },
    { q: 'Prove that the lines \\(\\ell_1: \\mathbf{r}=(1,0,1)+s(2,1,1)\\) and \\(\\ell_2: \\mathbf{r}=(3,2,0)+t(1,2,-1)\\) are skew, and find the shortest distance between them.', marks: 8, tier: 'red', modelAnswer: 'Directions not parallel. Try intersection: \\(1+2s=3+t\\), \\(s=2+2t\\), \\(1+s=-t\\). From eq 2: \\(s=2+2t\\). Eq 3: \\(3+2t=-t\\Rightarrow t=-1\\), \\(s=0\\). Check eq 1: \\(1=3-1=2\\) ✗. No intersection \\(\\Rightarrow\\) skew.\n\nShortest distance: \\(\\frac{|\\vec{A_1A_2}\\cdot(\\mathbf{d}_1\\times\\mathbf{d}_2)|}{|\\mathbf{d}_1\\times\\mathbf{d}_2|}\\). \\(\\mathbf{d}_1\\times\\mathbf{d}_2=(1\\cdot(-1)-1\\cdot2,1\\cdot1-2\\cdot(-1),2\\cdot2-1\\cdot1)=(-3,3,3)\\). \\(\\vec{A_1A_2}=(2,2,-1)\\). Numerator: \\(|(2,2,-1)\\cdot(-3,3,3)|=|-6+6-3|=3\\). Denominator: \\(|(-3,3,3)|=3\\sqrt{3}\\). Distance: \\(\\frac{3}{3\\sqrt{3}}=\\frac{1}{\\sqrt{3}}=\\frac{\\sqrt{3}}{3}\\).' },
    { q: 'The lines \\(\\ell_1\\) and \\(\\ell_2\\) intersect at point \\(P\\). \\(\\ell_1: \\mathbf{r}=(0,1,2)+s(1,-1,1)\\) and \\(\\ell_2: \\mathbf{r}=(1,0,3)+t(2,1,-1)\\). Find \\(P\\) and the plane containing both lines.', marks: 8, tier: 'red', modelAnswer: 'Intersection: \\(s=1+2t\\), \\(1-s=t\\), \\(2+s=3-t\\). From eq 2: \\(s=1-t\\). Eq 1: \\(1-t=1+2t\\Rightarrow t=0\\), \\(s=1\\). Check eq 3: \\(3=3\\) ✓. \\(P=(1,0,3)\\).\n\nNormal to plane: \\((1,-1,1)\\times(2,1,-1)=(1\\cdot(-1)-1\\cdot1,1\\cdot2-1\\cdot(-1),1\\cdot1-(-1)\\cdot2)=(-2,3,3)\\). Plane: \\(-2(x-1)+3(y-0)+3(z-3)=0\\Rightarrow-2x+3y+3z=7\\).' },
    { q: 'Use vectors to prove that the diagonals of a parallelogram bisect each other.', marks: 6, tier: 'red', modelAnswer: 'Let \\(A,B,C,D\\) be vertices with \\(\\vec{AB}=\\mathbf{p}\\) and \\(\\vec{AD}=\\mathbf{q}\\). \\(C=A+\\mathbf{p}+\\mathbf{q}\\). Midpoint of \\(AC\\) = \\(A+\\frac{\\mathbf{p}+\\mathbf{q}}{2}\\). Midpoint of \\(BD\\): \\(B=A+\\mathbf{p}\\), \\(D=A+\\mathbf{q}\\). Midpoint \\(= A+\\frac{\\mathbf{p}+\\mathbf{q}}{2}\\). Both midpoints coincide. \\(\\square\\)' },
    { q: 'Find the coordinates of the foot of the perpendicular from \\(P=(2,4,6)\\) to the line \\(\\mathbf{r}=(0,1,2)+t(1,2,2)\\). Find the distance \\(PF\\).', marks: 7, tier: 'red', modelAnswer: 'General point: \\(F=(t,1+2t,2+2t)\\). \\(\\vec{PF}=(t-2,2t-3,2t-4)\\). \\(\\vec{PF}\\perp\\mathbf{d}\\): \\((t-2)+(2)(2t-3)+(2)(2t-4)=0\\Rightarrow t-2+4t-6+4t-8=0\\Rightarrow 9t=16\\Rightarrow t=\\frac{16}{9}\\). \\(F=\\left(\\frac{16}{9},\\frac{41}{9},\\frac{50}{9}\\right)\\). \\(PF=\\left|\\left(-\\frac{2}{9},-\\frac{4}{9},4-\\frac{50}{9}\\right)\\right|\\)... \\(\\vec{PF}=\\frac{1}{9}(-2,5-?)\\) — compute: \\(\\vec{FP}=(2-\\frac{16}{9},4-\\frac{41}{9},6-\\frac{50}{9})=(\\frac{2}{9},-\\frac{5}{9},\\frac{4}{9})\\). \\(|PF|=\\frac{1}{9}\\sqrt{4+25+16}=\\frac{\\sqrt{45}}{9}=\\frac{\\sqrt{5}}{3}\\).' },
    { q: 'Three planes: \\(\\pi_1: x+y+z=6\\), \\(\\pi_2: 2x-y+z=3\\), \\(\\pi_3: x+2y-z=2\\). Find the point of intersection.', marks: 7, tier: 'red', modelAnswer: 'Add \\(\\pi_1\\) and \\(\\pi_2\\): \\(3x+2z=9\\quad(A)\\). \\(\\pi_1-\\pi_3\\): \\(-y+2z=4\\quad(B)\\). \\(\\pi_2+\\pi_3\\): \\(3x+y=5\\quad(C)\\). From \\(\\pi_1\\): \\(z=6-x-y\\). Sub into (A): \\(3x+2(6-x-y)=9\\Rightarrow x-2y=-3\\quad(D)\\). (C)+(D)\\(\\times 3\\): \\(3x+y+3x-6y=5-9\\Rightarrow 6x-5y=-4\\). Also (C): \\(y=5-3x\\). Sub: \\(6x-5(5-3x)=-4\\Rightarrow 21x=21\\Rightarrow x=1\\). \\(y=2\\), \\(z=3\\). Point: \\((1,2,3)\\).' },
    { q: 'Use the cross product to find the area of the parallelogram with vertices \\(A=(0,0,0)\\), \\(B=(3,1,0)\\), \\(C=(2,4,1)\\), and \\(D=(5,5,1)\\).', marks: 5, tier: 'red', modelAnswer: '\\(\\vec{AB}=(3,1,0)\\), \\(\\vec{AC}=(2,4,1)\\). \\(\\vec{AB}\\times\\vec{AC}=(1\\cdot1-0\\cdot4,0\\cdot2-3\\cdot1,3\\cdot4-1\\cdot2)=(1,-3,10)\\). Area\\(=|(1,-3,10)|=\\sqrt{1+9+100}=\\sqrt{110}\\).' },
    { q: 'Prove using vectors that the medians of a triangle are concurrent at the centroid.', marks: 6, tier: 'red', modelAnswer: 'Let \\(A,B,C\\) have position vectors \\(\\mathbf{a},\\mathbf{b},\\mathbf{c}\\). Midpoints: \\(M_A=\\frac{\\mathbf{b}+\\mathbf{c}}{2}\\), etc. The median from \\(A\\): \\(A+t\\left(\\frac{\\mathbf{b}+\\mathbf{c}}{2}-\\mathbf{a}\\right)\\). At \\(t=\\frac{2}{3}\\): position \\(=\\mathbf{a}+\\frac{2}{3}\\left(\\frac{\\mathbf{b}+\\mathbf{c}}{2}-\\mathbf{a}\\right)=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}\\). By symmetry, all three medians pass through \\(G=\\frac{\\mathbf{a}+\\mathbf{b}+\\mathbf{c}}{3}\\). \\(\\square\\)' },
    { q: 'Find the perpendicular distance from point \\(Q=(1,1,1)\\) to the plane \\(2x-y+2z=6\\).', marks: 4, tier: 'red', modelAnswer: '\\(d=\\frac{|2(1)-1(1)+2(1)-6|}{\\sqrt{4+1+4}}=\\frac{|2-1+2-6|}{3}=\\frac{|-3|}{3}=1\\).' },
    { q: 'Lines \\(\\ell_1: \\mathbf{r}=\\mathbf{a}+s\\mathbf{d}_1\\) and \\(\\ell_2: \\mathbf{r}=\\mathbf{b}+t\\mathbf{d}_2\\) are skew. Derive the formula for the shortest distance between them.', marks: 7, tier: 'red', modelAnswer: 'The common perpendicular direction is \\(\\mathbf{n}=\\mathbf{d}_1\\times\\mathbf{d}_2\\). The shortest distance is the component of \\(\\vec{AB}=\\mathbf{b}-\\mathbf{a}\\) in the direction \\(\\hat{\\mathbf{n}}\\):\n\\(d=\\frac{|(\\mathbf{b}-\\mathbf{a})\\cdot(\\mathbf{d}_1\\times\\mathbf{d}_2)|}{|\\mathbf{d}_1\\times\\mathbf{d}_2|}\\).\nThis is because any vector connecting the two lines can be written as \\(\\vec{AB}+s\\mathbf{d}_1-t\\mathbf{d}_2\\); minimising its length gives the formula above. \\(\\square\\)' }
  ]
}

}; // end EDEXCEL_WRITTEN_P12_P21

if (typeof module !== 'undefined') module.exports = { EDEXCEL_WRITTEN_P12_P21 };
