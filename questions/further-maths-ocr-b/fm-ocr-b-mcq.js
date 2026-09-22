/*
 * OCR B (MEI) A-Level Further Mathematics (H645) — MCQ Question Bank
 * Core Pure 1.1–1.10 | Mechanics M1.1–M1.5 | Statistics S1.1–S1.5 | Algorithms A1.1–A1.5
 * Each topic: ~5 green (recall), ~5 amber (application), ~5 red (analysis/proof)
 * Diagnostic selects 2 green + 2 amber + 1 red (always 1 written question from the written bank)
 */

const FM_OCR_B_MCQ = {

/* ═══════════════════════════════ CORE PURE ═══════════════════════════════ */

'1.1': {
  name: 'Proof',
  green: [
    { q: 'Mathematical induction requires proving which two steps?', options: ['Base case & inductive step', 'Existence & uniqueness', 'Contradiction & construction', 'Hypothesis & conclusion'], answer: 0 },
    { q: 'A proof by contradiction begins by assuming:', options: ['The statement is true', 'The negation of what is to be proved', 'The statement holds', 'A counterexample to the statement already exists'], answer: 1 },
    { q: 'For a proof by induction on \\(n\\in\\mathbb{N}\\), we typically prove:', options: ['\\(P(k+1)\\) directly', '\\(P(k)\\)', '\\(P(1)\\) and then \\(P(k)\\Rightarrow P(k+1)\\)', '\\(P(0)\\)'], answer: 2 },
    { q: 'Proof by deduction uses:', options: ['Specific examples that confirm the result', 'Randomness', 'Probability', 'A chain of logical implications'], answer: 3 },
    { q: 'Direct proof of "\\(n\\) even \\(\\Rightarrow n^2\\) even" writes \\(n=2k\\) and concludes:', options: ['\\(n^2=2(2k^2)\\), hence even', '\\(n^2=2k\\)', '\\(n^2=k^2\\)', '\\(n^2=4k\\), hence divisible by 4'], answer: 0 },
  ],
  amber: [
    { q: 'To prove \\(\\sum_{r=1}^{n}r=n(n+1)/2\\) by induction, the step uses:', options: ['\\((k+1)^2/2\\)', '\\(k(k+1)/2+(k+1)=(k+1)(k+2)/2\\)', '\\(k(k+1)/2+1\\)', '\\(\\frac{k(k+2)}{2}+(k+1)^2\\) (squared term)'], answer: 1 },
    { q: 'Proving \\(\\sqrt{2}\\) irrational uses contradiction: assume \\(\\sqrt{2}=a/b\\) in lowest terms, derive:', options: ['\\(a^2=b\\)', '\\(a>b\\)', '\\(a^2=2b^2\\), so \\(a\\) and \\(b\\) both even', '\\(a=b\\)'], answer: 2 },
    { q: 'For the step of proving \\(n^3-n\\) divisible by 6 by induction, factorise \\((k+1)^3-(k+1)\\) and use \\(k^3-k\\) divisible by 6, plus:', options: ['Nothing', 'An extra 2 from the constant terms', '\\(k^3+k\\)', '\\(3k(k+1)\\) divisible by 6'], answer: 3 },
    { q: 'A "proof" that 1=2 via division by zero is invalid because:', options: ['Division by 0 is undefined', 'Logic is broken', 'The argument assumes 1=2', 'Equality is not transitive'], answer: 0 },
    { q: 'The conclusion of a valid induction must state:', options: ['Assume P(k) true', 'By induction, P(n) holds for all required \\(n\\)', 'The result is obvious', 'P(n) depends on \\(k\\), so it holds whenever P(k) holds'], answer: 1 },
  ],
  red: [
    { q: 'Which statement is NOT proved by induction alone?', options: ['\\(7^n-1\\) is divisible by 6 for every positive integer \\(n\\)','\\(\\sum r=n(n+1)/2\\)','The set \\(\\mathbb{R}\\) is uncountable','\\(2^n>n\\) for \\(n\\ge1\\)'], answer: 2 },
    { q: 'Strong induction differs from ordinary induction by:', options: ['Being weaker','Using contradiction','Skipping the base case and assuming every earlier case directly','Assuming \\(P(1),\\ldots,P(k)\\) all true in the step'], answer: 3 },
    { q: 'Proof by exhaustion is valid when:', options: ['The number of cases is finite','We find one example','The domain is infinite','We use contradiction for every single case'], answer: 0 },
    { q: 'De Moivre\'s theorem for negative \\(n\\) is proved using:', options: ['Direct expansion','The result for positive \\(n\\) plus \\(z^{-1}=\\bar{z}/|z|^2\\)','Binomial theorem only','Exhaustion'], answer: 1 },
  ],
},

'1.2': {
  name: 'Complex Numbers',
  green: [
    { q: '\\(i^2 = \\)', options: ['\\(i\\)', '\\(-i\\)', '\\(-1\\)', '\\(1\\)'], answer: 2 },
    { q: '\\(|3+4i|=\\)', options: ['\\(7\\)', '\\(25\\)', '\\(3+4\\)', '\\(5\\)'], answer: 3 },
    { q: 'The conjugate of \\(a+bi\\) is:', options: ['\\(a-bi\\)', '\\(-a+bi\\)', '\\(-a-bi\\)', '\\(b-ai\\)'], answer: 0 },
    { q: '\\((2+i)(2-i) = \\)', options: ['\\(4i\\)', '\\(5\\)', '\\(3\\)', '\\(4-1\\)'], answer: 1 },
    { q: 'Euler\'s formula: \\(e^{i\\theta} = \\)', options: ['\\(\\cosh\\theta+i\\sinh\\theta\\)', '\\(i(\\cos\\theta+\\sin\\theta)\\)', '\\(\\cos\\theta+i\\sin\\theta\\)', '\\(\\cos\\theta-i\\sin\\theta\\)'], answer: 2 },
  ],
  amber: [
    { q: 'Simplify \\(\\dfrac{1+i}{1-i}\\).', options: ['\\(1\\)', '\\(-i\\)', '\\(1-i\\)', '\\(i\\)'], answer: 3 },
    { q: 'Solve \\(z^2 + 2z + 5 = 0\\).', options: ['\\(-1\\pm2i\\)', '\\(1\\pm2i\\)', '\\(-2\\pm i\\)', '\\(-1\\pm4i\\)'], answer: 0 },
    { q: 'Write \\(1 + i\\sqrt{3}\\) in modulus-argument form.', options: ['\\(\\sqrt{2}e^{i\\pi/4}\\)', '\\(2e^{i\\pi/3}\\)', '\\(2e^{i\\pi/6}\\)', '\\(e^{i\\pi/3}\\)'], answer: 1 },
    { q: 'By de Moivre: \\((\\cos\\theta+i\\sin\\theta)^4=\\)', options: ['\\(4\\cos\\theta+4i\\sin\\theta\\)', '\\(\\cos4\\theta-i\\sin4\\theta\\)', '\\(\\cos 4\\theta+i\\sin 4\\theta\\)', '\\(\\cos^4\\theta+i\\sin^4\\theta\\)'], answer: 2 },
    { q: 'If \\(2+3i\\) is a root of a real polynomial, another root is:', options: ['\\(-2-3i\\)', '\\(-2+3i\\)', '\\(3+2i\\)', '\\(2-3i\\)'], answer: 3 },
  ],
  red: [
    { q: 'How many distinct 5th roots of unity are there?', options: ['5','10','4','1'], answer: 0 },
    { q: 'The sum of all \\(n\\)th roots of unity (\\(n\\ge2\\)) equals:', options: ['\\(-1\\)','\\(0\\)','\\(1\\)','\\(n\\)'], answer: 1 },
    { q: 'Locus \\(|z-2|=|z+2i|\\) is:', options: ['Circle','Half-line','Perpendicular bisector of the segment from \\((2,0)\\) to \\((0,-2)\\)','Ellipse'], answer: 2 },
    { q: 'Use de Moivre to express \\(\\cos 3\\theta\\):', options: ['\\(3\\cos\\theta+\\cos 3\\theta\\)','\\(3\\cos\\theta-4\\cos^3\\theta\\)','\\(\\cos^3\\theta\\) only','\\(4\\cos^3\\theta-3\\cos\\theta\\)'], answer: 3 },
    { q: 'Transformation \\(w=iz\\) represents:', options: ['Rotation \\(\\pi/2\\) anticlockwise about origin','Reflection in the imaginary axis of the Argand diagram','Dilation','Identity'], answer: 0 },
  ],
},

'1.3': {
  name: 'Matrices',
  green: [
    { q: '\\(\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=\\)', options: ['\\(ab+cd\\)', '\\(ad-bc\\)', '\\(ac-bd\\)', '\\(ab-cd\\)'], answer: 1 },
    { q: 'For matrices \\(A\\) and \\(B\\), in general \\(AB\\):', options: ['Always \\(=I\\)', 'Always \\(=0\\)', 'May not equal \\(BA\\)', 'Always equals \\(BA\\)'], answer: 2 },
    { q: 'A \\(2\\times2\\) matrix is invertible iff:', options: ['det \\(=0\\)', 'It is symmetric', 'It is the identity', 'det \\(\\ne0\\)'], answer: 3 },
    { q: 'The matrix for rotation \\(\\theta\\) anticlockwise about origin:', options: ['\\([[\\cos\\theta,-\\sin\\theta],[\\sin\\theta,\\cos\\theta]]\\)', '\\([[\\cos\\theta,\\sin\\theta],[-\\sin\\theta,\\cos\\theta]]\\)', '\\([[1,0],[0,-1]]\\)', 'Diagonal'], answer: 0 },
    { q: 'The identity matrix \\(I_2\\) satisfies \\(AI=\\)', options: ['\\(2A\\)', '\\(A\\)', '\\(0\\)', '\\(I\\)'], answer: 1 },
  ],
  amber: [
    { q: 'Area scale factor of transformation \\(\\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}\\):', options: ['\\(3\\)', '\\(6\\)', '\\(5\\)', '\\(1\\)'], answer: 2 },
    { q: 'Eigenvalues of \\(\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\):', options: ['\\(1,5\\)', '\\(0,2\\)', '\\(1,3\\)', '\\(2,3\\)'], answer: 3 },
    { q: 'The inverse of \\(\\begin{pmatrix}1&2\\\\3&5\\end{pmatrix}\\) is:', options: ['\\([[-5,2],[3,-1]]\\)', '\\([[5,-2],[-3,1]]/2\\)', '\\(I\\)', '\\([[5,2],[3,1]]\\)'], answer: 0, explanation: 'det=−1; inverse = (1/-1)·[[5,-2],[-3,1]] = [[-5,2],[3,-1]]' },
    { q: 'Solving \\(Ax=b\\) with \\(\\det A\\ne0\\) gives:', options: ['No solution (singular)', '\\(x=A^{-1}b\\)', '\\(x=A+b\\)', '\\(x=Ab\\)'], answer: 1 },
    { q: 'If \\(A\\) is \\(3\\times3\\) and \\(\\det A=0\\), then the system \\(Ax=0\\) has:', options: ['No solution', 'Exactly two solutions', 'A line or plane of solutions', 'A unique solution \\(x=0\\)'], answer: 2 },
  ],
  red: [
    { q: 'An eigenvector \\(v\\) of \\(A\\) corresponding to eigenvalue \\(\\lambda\\) satisfies:', options: ['\\(\\det(A-v)=0\\)','\\(Av=\\lambda^2 v,\\; v\\ne0\\) (squared)','\\(Av=v\\)','\\(Av=\\lambda v,\\; v\\ne0\\)'], answer: 3 },
    { q: 'Diagonalisation: \\(A=PDP^{-1}\\) where:', options: ['\\(D\\) is diagonal with eigenvalues; \\(P\\) has eigenvectors as columns','\\(P\\) is diagonal, \\(D\\) has eigenvectors','\\(P\\) is always orthogonal','\\(D=I\\)'], answer: 0 },
    { q: '\\(A^n\\) where \\(A=PDP^{-1}\\) equals:', options: ['\\(P^nD^nP^{-n}\\)','\\(PD^nP^{-1}\\)','\\(P^nDP^{-n}\\)','\\(PD^nP^{-n}\\)'], answer: 1 },
    { q: 'Cayley–Hamilton theorem states that every matrix:', options: ['Has a unique inverse','Is symmetric','Satisfies its own characteristic equation','Equals its transpose and has a unique inverse'], answer: 2 },
    { q: 'The characteristic polynomial of \\(\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}\\) is:', options: ['\\(\\lambda^2-10\\)','\\(\\lambda^2-7\\lambda+12\\)','\\(\\lambda^2+5\\lambda+6\\)','\\(\\lambda^2-7\\lambda+10\\)'], answer: 3 },
  ],
},

'1.4': {
  name: 'Vectors',
  green: [
    { q: '\\(\\mathbf{a}\\cdot\\mathbf{b}\\) equals:', options: ['\\(|\\mathbf{a}||\\mathbf{b}|\\cos\\theta\\)', 'A vector', '\\(|\\mathbf{a}|+|\\mathbf{b}|\\)', '\\(\\mathbf{a}\\times\\mathbf{b}\\) (a vector)'], answer: 0 },
    { q: '\\(\\mathbf{a}\\times\\mathbf{b}\\) equals:', options: ['\\(0\\) always', 'A vector perpendicular to both', 'A scalar', '\\(\\mathbf{a}\\cdot\\mathbf{b}\\) (the same scalar)'], answer: 1 },
    { q: 'If \\(\\mathbf{a}\\cdot\\mathbf{b}=0\\) and both nonzero:', options: ['Equal', 'Opposite', 'Perpendicular', 'Parallel to each other'], answer: 2 },
    { q: 'The vector equation of a line through \\(\\mathbf{a}\\) with direction \\(\\mathbf{d}\\):', options: ['\\(\\mathbf{a}+\\mathbf{d}\\)', '\\(\\mathbf{a}\\cdot\\mathbf{d}\\)', '\\(\\mathbf{a}\\times\\mathbf{d}\\)', '\\(\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}\\)'], answer: 3 },
    { q: 'A plane has normal vector \\(\\mathbf{n}\\). Its equation: \\(\\mathbf{r}\\cdot\\mathbf{n}=\\)', options: ['\\(d\\) (constant)', '\\(0\\)', '\\(|\\mathbf{n}|\\)', '\\(\\mathbf{n}\\cdot\\mathbf{n}\\)'], answer: 0 },
  ],
  amber: [
    { q: '\\((2,0,1)\\times(1,1,0)=\\)', options: ['\\((2,1,0)\\)', '\\((-1,1,2)\\)', '\\((1,-1,2)\\)', '\\((0,0,2)\\)'], answer: 1, explanation: '(0·0−1·1, −(2·0−1·1), 2·1−0·1) = (−1, 1, 2)' },
    { q: 'Scalar triple product \\(\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})\\) represents:', options: ['Length', 'Angle', 'Volume of parallelepiped', 'Area of the parallelogram formed'], answer: 2 },
    { q: 'Three vectors are coplanar iff their scalar triple product is:', options: ['Unit', 'Positive', 'Negative', 'Zero'], answer: 3 },
    { q: 'Angle between line \\(\\mathbf{d}\\) and plane normal \\(\\mathbf{n}\\) is \\(\\alpha\\); angle between line and plane is:', options: ['\\(\\pi/2-\\alpha\\)', '\\(\\alpha\\)', '\\(\\pi-\\alpha\\) (obtuse)', '\\(2\\alpha\\)'], answer: 0 },
    { q: 'Two lines are skew when:', options: ['Directions are equal', 'They do not intersect and are not parallel', 'They are parallel', 'They intersect'], answer: 1 },
  ],
  red: [
    { q: 'Shortest distance from point \\(\\mathbf{p}\\) to line \\(\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}\\):', options: ['\\(|(\\mathbf{p}-\\mathbf{a})\\cdot\\mathbf{d}|/|\\mathbf{d}|\\) (the projection)','\\(|\\mathbf{d}|\\)','\\(|(\\mathbf{p}-\\mathbf{a})\\times\\mathbf{d}|/|\\mathbf{d}|\\)','\\(|\\mathbf{p}-\\mathbf{a}|\\)'], answer: 2 },
    { q: 'Two skew lines: shortest distance uses:', options: ['\\(|\\mathbf{a}_2-\\mathbf{a}_1|\\)','Distance from midpoint','\\(|\\mathbf{d}_1\\times\\mathbf{d}_2|\\)','\\(\\dfrac{|(\\mathbf{a}_2-\\mathbf{a}_1)\\cdot(\\mathbf{d}_1\\times\\mathbf{d}_2)|}{|\\mathbf{d}_1\\times\\mathbf{d}_2|}\\)'], answer: 3 },
    { q: 'Area of triangle with vertices \\(\\mathbf{A},\\mathbf{B},\\mathbf{C}\\):', options: ['\\(\\tfrac{1}{2}|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\)','\\(\\tfrac{1}{2}|\\overrightarrow{AB}|\\)','\\(|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\) (the parallelogram)','\\(\\mathbf{A}+\\mathbf{B}+\\mathbf{C}\\)'], answer: 0 },
    { q: 'The equation of plane through 3 non-collinear points uses:', options: ['Average of points','Normal = (B−A) × (C−A)','Sum of vectors','Dot product of the two sides AB and AC'], answer: 1 },
  ],
},

'1.5': {
  name: 'Series',
  green: [
    { q: '\\(\\sum_{r=1}^{n}r=\\)', options: ['\\(n\\)', '\\(n(n+1)(2n+1)/6\\)', '\\(n(n+1)/2\\)', '\\(n^2\\)'], answer: 2 },
    { q: '\\(\\sum_{r=1}^{n}r^2=\\)', options: ['\\(n^2(n+1)/2\\)', '\\([n(n+1)/2]^2\\) (for cubes)', '\\(n^2\\)', '\\(n(n+1)(2n+1)/6\\)'], answer: 3 },
    { q: '\\(\\sum_{r=1}^{n}r^3=\\)', options: ['\\([n(n+1)/2]^2\\)', '\\(n(n+1)/2\\)', '\\(n^3\\)', '\\(n^2(n+1)^2/4\\)'], answer: 0 },
    { q: 'Method of differences sums telescope if \\(f(r)=\\)', options: ['\\(\\ln r\\) or \\(r\\ln r\\) terms', '\\(g(r+1)-g(r)\\)', '\\(r\\)', '\\(r^2\\)'], answer: 1 },
    { q: 'Maclaurin series of \\(e^x\\):', options: ['\\(x+x^2/2+\\cdots\\)', '\\(1+x^2/2+\\cdots\\)', '\\(1+x+x^2/2!+x^3/3!+\\cdots\\)', '\\(1-x+x^2/2-\\cdots\\)'], answer: 2 },
  ],
  amber: [
    { q: '\\(\\sum_{r=1}^{n}(2r-1)=\\)', options: ['\\(2n\\)', '\\(n(n+1)\\)', '\\(n+1\\)', '\\(n^2\\)'], answer: 3 },
    { q: 'Using partial fractions, \\(\\sum_{r=1}^{n}\\dfrac{1}{r(r+1)}=\\)', options: ['\\(\\dfrac{n}{n+1}\\)', '\\(n\\)', '\\(\\ln 2\\) (for all \\(n\\))', '\\(1\\)'], answer: 0 },
    { q: 'Coefficient of \\(x^3\\) in Maclaurin of \\(\\sin x\\):', options: ['\\(1/6\\)', '\\(-1/6\\)', '\\(1/3\\)', '\\(-1/3\\)'], answer: 1 },
    { q: '\\((1+x)^{1/2}\\) expansion to \\(x^2\\):', options: ['\\(1+x-x^2/2\\)', '\\(1+x/2+x^2/2\\)', '\\(1+x/2-x^2/8\\)', '\\(1+x/2+x^2/4\\)'], answer: 2 },
    { q: 'Radius of convergence of \\(\\ln(1+x)\\):', options: ['All \\(x\\)', '\\(|x|<2\\)', '\\(|x|<\\infty\\)', '\\(|x|<1\\) (radius 1)'], answer: 3 },
  ],
  red: [
    { q: 'Evaluate \\(\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}\\) using series:', options: ['\\(1/2\\)','\\(2\\)','\\(0\\) (as \\(x\\to0\\))','\\(1\\)'], answer: 0 },
    { q: '\\(\\sum_{r=1}^{\\infty}\\frac{1}{r(r+1)}\\) telescopes to:', options: ['\\(\\ln 2\\)','\\(1\\)','\\(\\infty\\)','\\(1/2\\)'], answer: 1 },
    { q: 'The Taylor expansion of \\(f\\) about \\(x=a\\):', options: ['\\(\\sum f(a)/n!\\)','\\(f(a)+x\\)','\\(\\sum f^{(n)}(a)(x-a)^n/n!\\)','\\(\\sum f^{(n)}(a)x^n/n!\\)'], answer: 2 },
    { q: '\\(e^{ix}\\) = ', options: ['\\(i\\cos x+\\sin x\\)','\\(ix+e^x\\)','\\(e^x\\cos 1\\)','\\(\\cos x+i\\sin x\\)'], answer: 3 },
  ],
},

'1.6': {
  name: 'Roots of Polynomials',
  green: [
    { q: 'For \\(ax^2+bx+c=0\\) with roots \\(\\alpha,\\beta\\): \\(\\alpha+\\beta=\\)', options: ['\\(-b/a\\)', '\\(c/a\\)', '\\(b/a\\)', '\\(-c/a\\)'], answer: 0 },
    { q: 'For \\(ax^2+bx+c=0\\): \\(\\alpha\\beta=\\)', options: ['\\(-b/a\\)', '\\(c/a\\)', '\\(-c/a\\)', '\\(b/a\\)'], answer: 1 },
    { q: 'For \\(ax^3+bx^2+cx+d=0\\) with roots \\(\\alpha,\\beta,\\gamma\\): \\(\\sum\\alpha=\\)', options: ['\\(c/a\\)', '\\(d/a\\)', '\\(-b/a\\)', '\\(b/a\\)'], answer: 2 },
    { q: 'For the cubic \\(ax^3+bx^2+cx+d=0\\) with roots \\(\\alpha,\\beta,\\gamma\\): \\(\\alpha\\beta\\gamma=\\)', options: ['\\(c/a\\)', '\\(d/a\\)', '\\(-b/a\\)', '\\(-d/a\\)'], answer: 3 },
    { q: 'For quartic \\(ax^4+bx^3+\\cdots=0\\), sum of products of pairs \\(\\sum\\alpha\\beta\\) equals:', options: ['\\(c/a\\)', '\\(-b/a\\)', '\\(-d/a\\)', '\\(e/a\\)'], answer: 0 },
  ],
  amber: [
    { q: 'Given \\(\\alpha+\\beta=4,\\alpha\\beta=3\\), find \\(\\alpha^2+\\beta^2\\):', options: ['\\(16\\)', '\\(10\\)', '\\(13\\)', '\\(7\\)'], answer: 1, explanation: '(α+β)²−2αβ=16−6=10' },
    { q: 'If roots of \\(x^2-5x+6=0\\) are \\(\\alpha,\\beta\\), quadratic with roots \\(\\alpha+2,\\beta+2\\):', options: ['\\(x^2-9x+16=0\\)', '\\(x^2-5x+10=0\\)', '\\(x^2-9x+20=0\\)', '\\(x^2-7x+20=0\\)'], answer: 2, explanation: 'sub y=x+2, x=y-2 → (y-2)²-5(y-2)+6=y²-9y+20=0' },
    { q: 'Cubic roots \\(\\alpha,\\beta,\\gamma\\) with \\(\\sum\\alpha=6, \\sum\\alpha\\beta=11,\\alpha\\beta\\gamma=6\\). Then \\(\\alpha^2+\\beta^2+\\gamma^2=\\)', options: ['\\(26\\)', '\\(6\\)', '\\(44\\)', '\\(14\\)'], answer: 3, explanation: '6²−2·11=36−22=14' },
    { q: 'Quadratic with roots reciprocals of \\(x^2-7x+2=0\\):', options: ['\\(2x^2-7x+1=0\\)', '\\(2x^2+7x+1=0\\)', '\\(2x^2-x-1=0\\)', '\\(x^2+7x+2=0\\)'], answer: 0, explanation: 'sub y=1/x: 1/y²−7/y+2=0 → 2y²−7y+1=0' },
    { q: 'For \\(\\alpha\\beta\\) given roots \\(2,3,4\\): \\(\\sum\\alpha\\beta=\\)', options: ['\\(12\\)', '\\(26\\)', '\\(9\\)', '\\(24\\)'], answer: 1, explanation: '2·3+3·4+2·4=6+12+8=26' },
  ],
  red: [
    { q: 'If \\(\\alpha,\\beta,\\gamma\\) are roots of cubic \\(x^3+px+q=0\\), then \\(\\alpha+\\beta+\\gamma=\\)', options: ['\\(p\\)','\\(-q\\)','\\(0\\)','\\(-p\\)'], answer: 2 },
    { q: 'For \\(ax^n+\\cdots+c=0\\), the constant term \\(c/a\\) equals:', options: ['Sum of pairs','Always 1','Sum of roots','\\((-1)^n\\) times product of roots'], answer: 3 },
    { q: 'Substitution \\(y=x+k\\) transforms roots by:', options: ['Shifting by \\(k\\)','Scaling every root by a factor of \\(k\\)','Negating','Inverting'], answer: 0 },
    { q: 'Finding cubic with roots \\(1/\\alpha,1/\\beta,1/\\gamma\\) uses substitution:', options: ['\\(y=-x\\)','\\(y=1/x\\)','\\(y=\\alpha\\)','\\(y=x+1\\)'], answer: 1 },
  ],
},

'1.7': {
  name: 'Polar Coordinates',
  green: [
    { q: 'Polar coordinates \\((r,\\theta)\\): \\(x=\\)', options: ['\\(\\theta\\)', '\\(r\\sin\\theta\\)', '\\(r\\cos\\theta\\)', '\\(r\\)'], answer: 2 },
    { q: 'Polar \\(y=\\)', options: ['\\(r\\cos\\theta\\)', '\\(\\theta\\)', '\\(\\tan\\theta\\)', '\\(r\\sin\\theta\\)'], answer: 3 },
    { q: 'OCR convention: \\(r\\) values are:', options: ['Non-negative', 'Integer', 'Complex', 'Negative only'], answer: 0 },
    { q: 'The curve \\(r=a\\) (constant) is:', options: ['A half-line', 'A circle of radius \\(a\\)', 'A line through origin', 'A spiral'], answer: 1 },
    { q: 'A cardioid is given by \\(r=\\)', options: ['\\(a\\theta\\)', '\\(a+\\theta\\)', '\\(a(1+\\cos\\theta)\\)', '\\(a\\sin 2\\theta\\) (a rose)'], answer: 2 },
  ],
  amber: [
    { q: 'Area enclosed by polar curve: \\(A=\\)', options: ['\\(\\int r\\,d\\theta\\)', '\\(\\int r^2\\,d\\theta\\)', '\\(\\tfrac{1}{2}\\int r\\,d\\theta\\) (no square)', '\\(\\tfrac{1}{2}\\int r^2\\,d\\theta\\)'], answer: 3 },
    { q: 'Convert \\((2,\\pi/3)\\) polar to Cartesian:', options: ['\\((1,\\sqrt{3})\\)', '\\((1,1)\\)', '\\((2,\\sqrt{3})\\)', '\\((\\sqrt{3},1)\\)'], answer: 0 },
    { q: '\\(r=2\\cos\\theta\\) is a circle:', options: ['Centre \\((0,0)\\), radius 2', 'Centre \\((1,0)\\), radius 1', 'Centre origin, radius 2', 'Centre \\((0,1)\\), radius 1'], answer: 1 },
    { q: 'Tangent at the pole of \\(r=\\sin 3\\theta\\) at \\(\\theta=0\\):', options: ['Vertical', 'Horizontal', 'Along \\(\\theta=0\\) (the initial line)', '\\(\\theta=\\pi/2\\)'], answer: 2 },
    { q: 'Area enclosed by \\(r=2\\) (a circle of radius 2):', options: ['\\(2\\pi\\)', '\\(\\pi\\)', '\\(8\\pi\\)', '\\(4\\pi\\)'], answer: 3 },
  ],
  red: [
    { q: 'The number of petals of rose \\(r=a\\sin 4\\theta\\):', options: ['8','2','4','16'], answer: 0 },
    { q: 'Petals of \\(r=a\\sin 3\\theta\\):', options: ['6','3','12','2'], answer: 1 },
    { q: 'Horizontal tangents of polar curve occur when \\(dy/d\\theta=\\)', options: ['\\(\\infty\\)','\\(r\\cos\\theta\\)','0','undefined'], answer: 2 },
    { q: 'Area of one petal of \\(r=\\sin 2\\theta\\):', options: ['\\(\\pi/2\\)','\\(\\pi/4\\)','\\(\\pi\\)','\\(\\pi/8\\)'], answer: 3 },
  ],
},

'1.8': {
  name: 'Hyperbolic Functions',
  green: [
    { q: '\\(\\cosh x=\\)', options: ['\\((e^x+e^{-x})/2\\)', '\\((e^x-e^{-x})/2\\)', '\\(e^x-1\\)', '\\(1/\\cos x\\)'], answer: 0 },
    { q: '\\(\\sinh x=\\)', options: ['\\(e^x-1\\)', '\\((e^x-e^{-x})/2\\)', '\\((e^x+e^{-x})/2\\)', '\\(-\\cos x\\)'], answer: 1 },
    { q: '\\(\\cosh^2 x-\\sinh^2 x=\\)', options: ['\\(0\\)', '\\(-1\\)', '\\(1\\)', '\\(2\\)'], answer: 2 },
    { q: '\\(\\dfrac{d}{dx}\\sinh x=\\)', options: ['\\(-\\cosh x\\)', '\\(\\sinh x\\)', '\\(-\\sinh x\\)', '\\(\\cosh x\\)'], answer: 3 },
    { q: '\\(\\operatorname{arsinh} x=\\ln(x+\\sqrt{?})\\)', options: ['\\(x^2+1\\)', '\\(x\\)', '\\(x^2-1\\)', '\\(x-1\\)'], answer: 0 },
  ],
  amber: [
    { q: 'Osborn\'s rule: the trig identity \\(\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B\\) becomes for hyperbolics:', options: ['Unchanged', '\\(\\cosh(A+B)=\\cosh A\\cosh B+\\sinh A\\sinh B\\)', '\\(\\cosh(A+B)=\\cosh A\\cosh B-\\sinh A\\sinh B\\)', '\\(\\cosh(A+B)=\\cosh A\\cos B+\\sinh A\\sin B\\)'], answer: 1 },
    { q: 'Solve \\(\\cosh x=2\\):', options: ['\\(\\pm\\ln\\sqrt{2}\\)', '\\(\\pm\\arcsin 2\\)', '\\(\\pm\\ln(2+\\sqrt{3})\\)', '\\(\\ln 2\\)'], answer: 2 },
    { q: 'Evaluate \\(\\int\\sinh x\\,dx\\):', options: ['\\(-\\cosh x+C\\)', '\\(\\sinh x+C\\)', '\\(-\\sinh x+C\\)', '\\(\\cosh x+C\\)'], answer: 3 },
    { q: '\\(\\dfrac{d}{dx}\\tanh x=\\)', options: ['\\(\\operatorname{sech}^2 x\\)', '\\(\\operatorname{coth}^2 x\\)', '\\(\\cosh x\\)', '\\(\\sec^2 x\\)'], answer: 0 },
    { q: 'Integration \\(\\int\\dfrac{dx}{\\sqrt{x^2+4}}=\\)', options: ['\\(\\arctan(x/2)\\)', '\\(\\operatorname{arsinh}(x/2)+C\\)', '\\(\\operatorname{arcosh}(x/2)+C\\) for \\(x\\ge2\\)', '\\(\\arcsin(x/2)\\)'], answer: 1 },
  ],
  red: [
    { q: 'Range of \\(\\tanh x\\):', options: ['\\(\\mathbb{R}\\)','\\([0,1]\\)','\\((-1,1)\\)','\\([-1,1]\\)'], answer: 2 },
    { q: '\\(\\cosh\\) is:', options: ['Odd','Decreasing','Unbounded below','Even'], answer: 3 },
    { q: 'For all real \\(x\\), \\(\\cosh x\\ge\\)', options: ['\\(1\\)','\\(e^x\\)','\\(0\\)','\\(-1\\)'], answer: 0 },
    { q: '\\(\\sinh 2x=\\)', options: ['\\(\\sinh^2 x-\\cosh^2 x\\)','\\(2\\sinh x\\cosh x\\)','\\(2\\cosh^2 x\\)','\\(\\cosh^2 x+\\sinh^2 x\\)'], answer: 1 },
  ],
},

'1.9': {
  name: 'Further Calculus',
  green: [
    { q: 'Improper integral \\(\\int_1^{\\infty}x^{-p}\\,dx\\) converges when:', options: ['\\(p=1\\)', 'All \\(p\\)', '\\(p>1\\)', '\\(p<1\\)'], answer: 2 },
    { q: 'Mean value of \\(f\\) on \\([a,b]\\):', options: ['\\(\\int f\\,dx\\)', '\\((b-a)\\int f\\,dx\\)', '\\(f(b)-f(a)\\)', '\\(\\frac{1}{b-a}\\int_a^b f\\,dx\\)'], answer: 3 },
    { q: 'Reduction formulae are typically derived using:', options: ['Integration by parts', 'Substitution', 'Partial fractions of the integrand', 'Power series'], answer: 0 },
    { q: 'Arc length of \\(y=f(x)\\) from \\(a\\) to \\(b\\):', options: ['\\(|f(b)-f(a)|\\)', '\\(\\int\\sqrt{1+(f\')^2}\\,dx\\)', '\\(\\int(1+f^{\\prime})\\,dx\\) (no square root)', '\\(\\int f\\,dx\\)'], answer: 1 },
    { q: 'Surface of revolution about \\(x\\)-axis: \\(S=\\)', options: ['\\(2\\pi\\int y\\,dx\\)', '\\(\\pi\\int y\\sqrt{1+(y^{\\prime})^2}\\,dx\\) (no factor 2)', '\\(2\\pi\\int y\\sqrt{1+(y\')^2}\\,dx\\)', '\\(\\pi\\int y\\,dx\\)'], answer: 2 },
  ],
  amber: [
    { q: '\\(\\int_0^1 \\dfrac{dx}{\\sqrt{x}}\\) is improper at \\(0\\); it equals:', options: ['Diverges', '\\(\\infty\\)', '\\(1\\)', '\\(2\\)'], answer: 3 },
    { q: '\\(\\int\\dfrac{dx}{\\sqrt{4-x^2}}\\):', options: ['\\(\\arcsin(x/2)+C\\)', '\\(\\arctan(x/2)\\)', '\\(\\operatorname{arcosh}(x/2)\\)', '\\(\\operatorname{arsinh}(x/2)\\)'], answer: 0 },
    { q: 'Reduction \\(I_n=\\int_0^{\\pi/2}\\sin^n x\\,dx\\). Then \\(I_n=\\)', options: ['\\(\\cos^n(\\pi/2)\\)', '\\(\\frac{n-1}{n}I_{n-2}\\)', '\\(I_{n-1}\\)', '\\(n\\cdot I_{n-2}\\)'], answer: 1 },
    { q: 'Arc length of \\(y=\\tfrac{2}{3}x^{3/2}\\) from 0 to 3:', options: ['\\(3\\sqrt{3}\\)', '\\(2\\pi\\)', '\\(14/3\\)', '\\(6\\)'], answer: 2 },
    { q: 'Mean of \\(\\sin x\\) on \\([0,\\pi]\\):', options: ['\\(0\\)', '\\(\\pi/2\\)', '\\(1\\)', '\\(2/\\pi\\)'], answer: 3 },
  ],
  red: [
    { q: '\\(\\int_0^{\\infty}e^{-x}\\,dx\\) equals:', options: ['\\(1\\)','\\(0\\)','\\(e\\)','\\(\\infty\\)'], answer: 0 },
    { q: '\\(\\int_0^{\\infty}xe^{-x}\\,dx\\) equals:', options: ['\\(2\\)','\\(1\\)','\\(0\\)','\\(e\\)'], answer: 1 },
    { q: 'Volume of revolution about \\(x\\)-axis of \\(y=\\sqrt{x}\\) from 0 to 4:', options: ['\\(\\pi\\)','\\(4\\pi\\)','\\(8\\pi\\)','\\(16\\pi\\)'], answer: 2 },
    { q: 'The integrand \\(\\sqrt{1+(y\')^2}\\) arises because:', options: ['Chain rule','Formula conversion','Pythagoras in polar','Pythagoras applied to \\(ds^2=dx^2+dy^2\\)'], answer: 3 },
  ],
},

'1.10': {
  name: 'Differential Equations',
  green: [
    { q: 'An integrating factor for \\(dy/dx+P(x)y=Q(x)\\):', options: ['\\(e^{\\int P(x)\\,dx}\\)', '\\(Q(x)\\)', '\\(e^{-\\int P\\,dx}\\) (negative)', '\\(P(x)\\)'], answer: 0 },
    { q: 'The auxiliary equation of \\(ay\'\'+by\'+cy=0\\):', options: ['Linear', '\\(am^2+bm+c=0\\)', '\\(ax^2+bx+c=0\\)', 'Always \\(y=0\\)'], answer: 1 },
    { q: 'Complex auxiliary roots \\(p\\pm qi\\) give CF:', options: ['\\((Ax+B)e^{px}\\)', '\\(A\\cos qx+B\\sin qx\\)', '\\(e^{px}(A\\cos qx+B\\sin qx)\\)', '\\(Ae^{px}+Be^{qx}\\)'], answer: 2 },
    { q: 'Repeated real root \\(m=k\\) gives CF:', options: ['\\(Ae^{kx}\\)', '\\(Ae^{kx}+Bxe^{kx}\\)', '\\((A+B)e^{kx}\\)', '\\((A+Bx)e^{kx}\\)'], answer: 3 },
    { q: 'General solution of \\(y\'\'+y=f(x)\\):', options: ['CF + PI', 'PI only', 'CF − PI', 'Just PI'], answer: 0 },
  ],
  amber: [
    { q: 'Solve \\(y\'+2y=0\\):', options: ['\\(y=A+2x\\)', '\\(y=Ae^{-2x}\\)', '\\(y=A\\sin 2x\\)', '\\(y=Ax\\)'], answer: 1 },
    { q: 'Auxiliary for \\(y\'\'-4y\'+4y=0\\):', options: ['Complex roots', '\\(m=0\\)', '\\(m=2\\) repeated', '\\(m=4\\) simple'], answer: 2 },
    { q: 'PI trial for \\(y\'\'-y=e^{2x}\\):', options: ['\\(Axe^{2x}\\)', '\\(A\\cos 2x\\)', '\\(A+Bx\\)', '\\(Ae^{2x}\\)'], answer: 3 },
    { q: 'IF for \\(y\'+2y/x=x^3\\):', options: ['\\(x^2\\)', '\\(e^x\\)', '\\(x\\)', '\\(x^3\\)'], answer: 0 },
    { q: 'For coupled system \\(x\'=x+y, y\'=x-y\\), eliminate to get:', options: ['\\(x\'=0\\)', '\\(x\'\'-2x=0\\)', '1st order ODE', '\\(x\'\'+x=0\\)'], answer: 1 },
  ],
  red: [
    { q: 'If PI trial is in CF, multiply trial by:', options: ['Nothing','\\(e^x\\)','\\(x\\) (or \\(x^2\\) if repeated clash)','\\(x^2\\) always, whatever the clash is'], answer: 2 },
    { q: 'Newton\'s Law of Cooling \\(dT/dt=-k(T-T_{env})\\) has solution:', options: ['\\(T=T_{env}+kt\\) (linear cooling)','\\(T=T_0+kt\\)','\\(T=e^{-kt}\\)','\\(T=T_{env}+Ce^{-kt}\\)'], answer: 3 },
    { q: 'Underdamped oscillator has aux roots:', options: ['Complex with negative real part','Real positive','Real, distinct and both negative','Real repeated'], answer: 0 },
    { q: 'Resonance occurs when:', options: ['Damping is high','Driving frequency matches natural frequency','CF is a polynomial','Frequency is zero'], answer: 1 },
  ],
},

/* ═══════════════════════════════ MECHANICS MINOR ═══════════════════════════════ */

'M1.1': {
  name: 'Dimensional Analysis',
  green: [
    { q: 'Dimensions of force:', options: ['\\(L/T\\)', '\\(MT^{-2}\\)', '\\(MLT^{-2}\\)', '\\(ML^{-1}\\) (per length)'], answer: 2 },
    { q: 'Dimensions of velocity:', options: ['\\(T\\)', '\\(L\\)', '\\(MLT^{-1}\\)', '\\(LT^{-1}\\)'], answer: 3 },
    { q: 'Dimensions of energy:', options: ['\\(ML^2T^{-2}\\)', '\\(MLT^{-2}\\)', '\\(L^2T^{-1}\\)', '\\(ML^{-2}T^{-2}\\)'], answer: 0 },
    { q: 'Dimensions of power:', options: ['\\(MLT^{-2}\\)', '\\(ML^2T^{-3}\\)', '\\(ML^2T^{-2}\\)', '\\(MT^{-3}\\)'], answer: 1 },
    { q: 'Dimensionless quantity example:', options: ['Work', 'Momentum', 'Angle in radians', 'Speed'], answer: 2 },
  ],
  amber: [
    { q: 'An angle (radians) has dimensions:', options: ['\\(L\\) (arc length)', '\\(L/T\\)', '\\(T^{-1}\\)', 'Dimensionless'], answer: 3 },
    { q: 'Checking \\(s=ut+\\tfrac{1}{2}at^2\\): all terms have dimensions:', options: ['\\(L\\)', '\\(T\\)', '\\(M\\)', '\\(LT^{-1}\\)'], answer: 0 },
    { q: 'Period of pendulum \\(T=k\\sqrt{l/g}\\) is dimensionally consistent because:', options: ['\\(k^2=T\\)', 'Both sides have dimensions of time', '\\(kl/g=T\\)', 'Always'], answer: 1 },
    { q: 'In \\(F=k m v^2/r\\), \\(k\\) must be:', options: ['\\(T\\)', '\\(L\\) (a length)', 'Dimensionless', '\\(M\\)'], answer: 2 },
    { q: 'If \\(E\\propto m^a v^b\\), dimensional analysis gives \\(a,b=\\)', options: ['\\(1,1\\)', '\\(2,1\\)', '\\(0,2\\)', '\\(1,2\\)'], answer: 3 },
  ],
  red: [
    { q: 'Dimensional analysis can find:', options: ['Form of dependence on variables','Dimensionless scaling factors and their exact values','Exact constants','Numerical prefactors'], answer: 0 },
    { q: 'Dimensional analysis cannot:', options: ['Find power dependencies','Determine dimensionless constants','Find dimensions','Check formulas'], answer: 1 },
    { q: 'Angular frequency has dimensions:', options: ['\\(T\\)','Dimensionless','\\(T^{-1}\\)','\\(L\\)'], answer: 2 },
    { q: 'Trig/log/exp arguments must be:', options: ['Integers','Small','In SI base units only','Dimensionless'], answer: 3 },
  ],
},

'M1.2': {
  name: 'Work, Energy & Power',
  green: [
    { q: 'Work done by constant force over displacement:', options: ['\\(Fs\\cos\\theta\\)', '\\(F/s\\)', '\\(Fs^2\\) (squared)', '\\(F+s\\)'], answer: 0 },
    { q: 'Kinetic energy:', options: ['\\(mv/2\\)', '\\(\\tfrac{1}{2}mv^2\\)', '\\(mv\\)', '\\(mg h\\)'], answer: 1 },
    { q: 'Gravitational PE (near Earth):', options: ['\\(m/h\\)', '\\(gh\\)', '\\(mgh\\)', '\\(\\tfrac{1}{2}mgh\\)'], answer: 2 },
    { q: 'Power = ...', options: ['Work \\(\\times\\) time', 'Force \\(\\times\\) distance', 'Force/time', 'Work / time (or \\(Fv\\))'], answer: 3 },
    { q: 'SI unit of power:', options: ['watt', 'newton', 'joule', 'pascal'], answer: 0 },
  ],
  amber: [
    { q: 'Ball dropped from 5 m (\\(g=9.8\\)). Speed just before impact:', options: ['\\(7\\) m/s', '\\(\\sqrt{98}\\approx9.90\\) m/s', '\\(5\\) m/s', '\\(9.8\\) m/s'], answer: 1 },
    { q: 'Elastic PE in spring of stiffness \\(k\\) at extension \\(x\\):', options: ['\\(k/x\\)', '\\(kx^2\\) (no factor ½)', '\\(\\tfrac{1}{2}kx^2\\)', '\\(kx\\)'], answer: 2 },
    { q: 'At top speed on level road with resistance \\(R\\) and power \\(P\\):', options: ['\\(P=R\\)', '\\(P/R=1\\)', '\\(v=P^2/R\\)', '\\(v=P/R\\)'], answer: 3 },
    { q: 'Work-energy theorem: \\(W_{\\text{total}}=\\)', options: ['\\(\\Delta(KE)\\)', '\\(\\Delta(PE)\\)', '\\(\\Delta(p)\\)', '\\(0\\)'], answer: 0 },
    { q: 'If \\(P=Fv\\) and \\(F=ma+R\\), on level track:', options: ['\\(R=0\\)', '\\(P/v-R=ma\\)', '\\(a=v\\)', '\\(P=\\text{const}\\)'], answer: 1 },
  ],
  red: [
    { q: 'Car mass \\(m=1000\\), power \\(P=20\\) kW, resistance \\(R=500\\) N. At \\(v=20\\) m/s, acceleration:', options: ['\\(0\\) m/s²', '\\(0.25\\) m/s²', '\\(0.5\\) m/s²', '\\(1\\) m/s²'], answer: 2, explanation: 'F=1000 N, net=500, a=0.5' },
    { q: 'Elastic string modulus \\(\\lambda\\), natural length \\(\\ell_0\\), extension \\(x\\). EPE:', options: ['\\(\\lambda x\\)','\\(\\lambda x/\\ell_0\\)','\\(\\lambda x^2/\\ell_0\\) (no factor ½)','\\(\\lambda x^2/(2\\ell_0)\\)'], answer: 3 },
    { q: 'Energy lost to friction = ', options: ['Friction force × distance traveled','Friction × acceleration','0 (always)','\\(\\mu R\\)'], answer: 0 },
    { q: 'Pulling with force at angle \\(\\theta\\) above horizontal: horizontal work:', options: ['\\(Fs/\\cos\\theta\\)','\\(F\\cos\\theta\\cdot s\\)','\\(F\\sin\\theta\\cdot s\\)','\\(Fs\\)'], answer: 1 },
  ],
},

'M1.3': {
  name: 'Impulse & Momentum',
  green: [
    { q: 'Momentum:', options: ['\\(m\\)', '\\(v\\)', '\\(mv\\)', '\\(mv^2\\)'], answer: 2 },
    { q: 'Impulse = ', options: ['\\(F\\)', '\\(\\Delta v\\)', '\\(m\\cdot\\text{time}\\)', '\\(F\\Delta t = \\Delta p\\)'], answer: 3 },
    { q: 'Coefficient of restitution \\(e\\):', options: ['\\(0\\le e\\le 1\\)', '\\(\\le 0\\)', '\\(>1\\)', '\\(\\ge0\\) only, with no upper limit'], answer: 0 },
    { q: 'Perfectly elastic collision: \\(e=\\)', options: ['\\(-1\\)', '\\(1\\)', '\\(0\\)', '\\(\\infty\\)'], answer: 1 },
    { q: "Perfectly inelastic collision: \\(e=\\)", options: ["\\(1\\)","Undefined","\\(0\\)","\\(0.5\\)"], answer: 2 },
  ],
  amber: [
    { q: 'Momentum conservation in collision:', options: ['Kinetic energy is conserved in every collision', '\\(p_1=p_2\\)', 'Only for \\(e=1\\)', '\\(m_1u_1+m_2u_2=m_1v_1+m_2v_2\\)'], answer: 3 },
    { q: 'Newton\'s law of restitution: \\(v_2-v_1=\\)', options: ['\\(-e(u_2-u_1)\\) i.e. \\(v_2-v_1=e(u_1-u_2)\\)', '\\(e(u_1+u_2)\\)', '\\(e(u_1-u_2)\\)', '\\(0\\)'], answer: 0 },
    { q: 'Ball of mass 2 kg moving 5 m/s hits stationary 3 kg, \\(e=0\\). Combined speed:', options: ['\\(1.67\\) m/s', '\\(2\\) m/s', '\\(5\\)', '\\(3\\)'], answer: 1, explanation: '10=5v → v=2' },
    { q: 'Ball bouncing on floor, \\(e=0.5\\). After dropping from 2 m, next height:', options: ['\\(2\\)', '\\(0.25\\)', '\\(0.5\\)', '\\(1\\)'], answer: 2, explanation: 'e² × h = 0.25·2 = 0.5' },
    { q: 'Oblique impact with smooth wall: parallel component of velocity is:', options: ['Zero', 'Reversed', '\\(e\\times\\) original', 'Unchanged'], answer: 3 },
  ],
  red: [
    { q: 'KE lost in collision = ', options: ['\\(\\tfrac{1}{2}\\frac{m_1m_2}{m_1+m_2}(u_1-u_2)^2(1-e^2)\\)','Momentum','0','\\(m_1+m_2\\)'], answer: 0 },
    { q: 'For successive bounces with \\(e<1\\), total distance converges because:', options: ['\\(e^2>1\\)','Geometric series with ratio \\(e^2<1\\)','No friction','Gravity decreases with each successive bounce'], answer: 1 },
    { q: 'Impulse as vector equals:', options: ['\\(\\Delta(m)\\)','\\(|v|m\\)','Vector change in momentum','\\(m\\cdot\\Delta v_x\\) only'], answer: 2 },
    { q: 'Elastic collision (\\(e=1\\)) between equal masses, one at rest:', options: ['Both stop','Both continue','First ball speeds up and the second moves off at half the speed','Moving ball stops; other moves off with same velocity'], answer: 3 },
  ],
},

'M1.4': {
  name: 'Circular Motion',
  green: [
    { q: 'Angular velocity \\(\\omega\\) relates to linear speed by:', options: ['\\(v=r\\omega\\)', '\\(v=\\omega\\)', '\\(v=\\omega^2 r\\)', '\\(v=\\omega/r\\)'], answer: 0 },
    { q: 'Centripetal acceleration:', options: ['\\(vr\\)', '\\(v^2/r\\) or \\(r\\omega^2\\)', '\\(v/r\\)', '\\(\\omega r\\)'], answer: 1 },
    { q: 'Centripetal force is directed:', options: ['Outward', 'At 45°', 'Towards the centre', 'Tangentially (forward)'], answer: 2 },
    { q: 'Period of circular motion:', options: ['\\(\\omega\\)', '\\(1/\\omega\\) (seconds)', '\\(r\\)', '\\(2\\pi/\\omega\\)'], answer: 3 },
    { q: 'Units of angular velocity:', options: ['rad/s', 'm/s (m s⁻¹)', 's', 'Hz'], answer: 0 },
  ],
  amber: [
    { q: 'Conical pendulum: \\(\\tan\\theta=\\)', options: ['\\(\\omega g/r\\) (inverted)', '\\(r\\omega^2/g\\)', '\\(v/g\\)', '\\(r/g\\)'], answer: 1 },
    { q: 'Banked track design speed: \\(\\tan\\alpha=\\)', options: ['\\(g/v^2\\) (inverted)', '\\(r/v\\)', '\\(v^2/(rg)\\)', '\\(v\\)'], answer: 2 },
    { q: 'Vertical circle: minimum speed at top requires:', options: ['\\(v=0\\)', '\\(v\\geq 0\\) (any speed)', '\\(v=g\\)', '\\(v^2\\ge gr\\)'], answer: 3 },
    { q: 'Coin on turntable: friction supplies:', options: ['The centripetal force', 'Weight', 'Tangential acceleration only', '\\(mg\\)'], answer: 0 },
    { q: 'Car rounding curve at \\(v\\), radius \\(r\\): min coefficient of friction \\(\\mu=\\)', options: ['\\(rg\\)', '\\(v^2/(rg)\\)', '\\(v\\)', '\\(v^2/r\\)'], answer: 1 },
  ],
  red: [
    { q: 'At top of vertical loop, tension is 0 when:', options: ['Always','Never','\\(v^2=gr\\)','\\(v=0\\) (at rest)'], answer: 2 },
    { q: 'Conservation of energy in vertical circle gives:', options: ['No constraint','Energy is lost to friction at every point on the circle','KE stays constant','\\(\\tfrac{1}{2}v^2+gh=\\) const'], answer: 3 },
    { q: 'A string/rod: at top of circle, string goes slack when:', options: ['Speed drops below \\(\\sqrt{gr}\\)','Tension positive','Always','Speed is zero'], answer: 0 },
    { q: 'For "just completes circle" on a light rod (not string): speed at top:', options: ['Infinity','Can be 0','\\(\\sqrt{gr}\\)','Must be \\(>\\sqrt{gr}\\)'], answer: 1 },
  ],
},

'M1.5': {
  name: 'Centres of Mass',
  green: [
    { q: 'For a system: \\(\\bar{x}=\\)', options: ['\\(\\sum x_i\\)', '\\(n\\sum m_i x_i/\\sum x_i\\)', '\\(\\sum m_ix_i/\\sum m_i\\)', 'Mean of \\(x_i\\)'], answer: 2 },
    { q: 'CoM of uniform rod length \\(L\\):', options: ['At end', 'At \\(L/3\\) from one end', '\\(L/4\\)', 'At \\(L/2\\)'], answer: 3 },
    { q: 'CoM of uniform triangle:', options: ['Centroid', 'Midpoint of base', 'Orthocentre', 'Circumcentre'], answer: 0 },
    { q: 'CoM of semicircular lamina radius \\(r\\):', options: ['\\(r\\)', '\\(4r/(3\\pi)\\) from diameter', '\\(r/3\\)', '\\(r/2\\)'], answer: 1 },
    { q: 'CoM of a solid hemisphere of radius \\(r\\), from flat face:', options: ['\\(r\\)', '\\(2r/3\\)', '\\(3r/8\\)', '\\(r/2\\)'], answer: 2 },
  ],
  amber: [
    { q: 'Composite body with hole: treat the hole as:', options: ['Normal mass (added)', 'Zero', 'Full mass', 'Negative mass'], answer: 3 },
    { q: 'CoM of solid cone (height \\(h\\)) from base:', options: ['\\(h/4\\)', '\\(h/3\\)', '\\(h/2\\)', '\\(2h/3\\)'], answer: 0 },
    { q: 'Object suspended freely: CoM sits:', options: ['Off to one side of the suspension point', 'Directly below the suspension point', 'Above', 'On suspension point'], answer: 1 },
    { q: 'L-shape lamina CoM found by:', options: ['Just the midpoint', 'Density', 'Summing area-weighted centroids of rectangles', 'Average of endpoints'], answer: 2 },
    { q: 'CoM of hollow hemispherical shell radius \\(r\\):', options: ['\\(r/3\\)', '\\(r/4\\)', '\\(3r/8\\)', '\\(r/2\\)'], answer: 3 },
  ],
  red: [
    { q: 'Body topples when:', options: ['Vertical through CoM falls outside the base','Centre is high','Friction is low','Mass is large'], answer: 0 },
    { q: 'Body slides before toppling if \\(\\mu < a/h\\) where \\(a\\) is half-base, \\(h\\) is CoM height — slide vs. topple angle:', options: ['Always slides','Compare \\(\\mu\\) with \\(a/h\\)','Depends only on the mass of the body','Always topples'], answer: 1 },
    { q: 'For a region with \\(y=f(x)\\): \\(\\bar{x}=\\)', options: ['Average','0','\\(\\int xf\\,dx/\\int f\\,dx\\)','Same as \\(\\bar{y}\\) by symmetry'], answer: 2 },
    { q: 'Solid of revolution \\(y=f(x)\\) about \\(x\\)-axis: \\(\\bar{x}=\\)', options: ['Centroid of curve','Same as for the lamina with the same boundary','\\(\\int f\\,dx\\)','\\(\\int x\\cdot y^2\\,dx / \\int y^2\\,dx\\)'], answer: 3 },
  ],
},

/* ═══════════════════════════════ STATISTICS MINOR ═══════════════════════════════ */

'S1.1': {
  name: 'Discrete Random Variables',
  green: [
    { q: 'For discrete \\(X\\): \\(\\sum P(X=x)=\\)', options: ['\\(1\\)', '\\(\\mu\\)', '\\(0\\)', 'Any positive number'], answer: 0 },
    { q: '\\(E(X)=\\)', options: ['\\(0\\)', '\\(\\sum x P(X=x)\\)', '\\(\\sum P(X=x)\\) (equals 1)', '\\(\\max x\\)'], answer: 1 },
    { q: '\\(\\operatorname{Var}(X)=\\)', options: ['\\(|\\mu|\\)', '\\(\\sigma\\)', '\\(E(X^2)-\\mu^2\\)', '\\(E(X)^2\\)'], answer: 2 },
    { q: '\\(E(aX+b)=\\)', options: ['\\(aE(X)\\)', '\\(E(X)+b\\) (no \\(a\\))', '\\(a+b\\)', '\\(aE(X)+b\\)'], answer: 3 },
    { q: '\\(\\operatorname{Var}(aX+b)=\\)', options: ['\\(a^2\\operatorname{Var}(X)\\)', '\\(a\\operatorname{Var}(X)+b\\) (linear)', '\\(\\operatorname{Var}(X)+b\\)', '\\(a+b\\)'], answer: 0 },
  ],
  amber: [
    { q: 'For \\(X\\sim B(n,p)\\): \\(E(X)=\\)', options: ['\\(n(1-p)\\)', '\\(np\\)', '\\(p\\)', '\\(nq\\)'], answer: 1 },
    { q: 'For \\(X\\sim B(n,p)\\): \\(\\operatorname{Var}(X)=\\)', options: ['\\(np\\)', '\\(np^2\\)', '\\(np(1-p)\\)', '\\(n^2p(1-p)\\)'], answer: 2 },
    { q: 'For independent \\(X,Y\\): \\(\\operatorname{Var}(X-Y)=\\)', options: ['\\(\\operatorname{Var}(X)-\\operatorname{Var}(Y)\\)', '\\(|\\operatorname{Var}(X)-\\operatorname{Var}(Y)|\\)', '0', '\\(\\operatorname{Var}(X)+\\operatorname{Var}(Y)\\)'], answer: 3 },
    { q: '\\(X\\) uniform on \\(\\{1,\\ldots,n\\}\\): \\(E(X)=\\)', options: ['\\((n+1)/2\\)', '\\(n/2\\)', '\\(1\\)', '\\(n\\)'], answer: 0 },
    { q: 'Uniform on \\(\\{1,\\ldots,n\\}\\): \\(\\operatorname{Var}(X)=\\)', options: ['\\(n^2/12\\)', '\\((n^2-1)/12\\)', '\\(n/2\\)', '\\((n+1)/12\\) (for \\(n\\) values)'], answer: 1 },
  ],
  red: [
    { q: 'Joint pmf: \\(X\\) and \\(Y\\) independent iff:', options: ['\\(P(X,Y)=P(X)+P(Y)\\)','Marginals equal','\\(P(X=x,Y=y)=P(X=x)P(Y=y)\\) for all \\(x,y\\)','Always'], answer: 2 },
    { q: 'Covariance \\(\\operatorname{Cov}(X,Y)=\\)', options: ['\\(E(X)E(Y)\\)','\\(\\sqrt{\\operatorname{Var}(X)\\operatorname{Var}(Y)}\\)','\\(\\operatorname{Var}(X+Y)/2\\)','\\(E(XY)-E(X)E(Y)\\)'], answer: 3 },
    { q: '\\(\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+\\)', options: ['\\(2\\operatorname{Cov}(X,Y)\\)','\\(\\mu_X\\mu_Y\\)','\\(\\operatorname{Cov}(X,Y)\\) (only once)','0'], answer: 0 },
    { q: 'If \\(X\\perp Y\\) then \\(\\operatorname{Cov}(X,Y)=\\)', options: ['1','\\(0\\)','Undefined','\\(\\mu_X\\)'], answer: 1 },
  ],
},

'S1.2': {
  name: 'Poisson Distribution',
  green: [
    { q: 'Poisson pmf:', options: ['\\(e^r\\lambda/r!\\)', '\\(r!e^{-\\lambda}\\)', '\\(\\dfrac{e^{-\\lambda}\\lambda^r}{r!}\\)', '\\(\\binom{n}{r}p^r(1-p)^{n-r}\\) (the binomial pmf)'], answer: 2 },
    { q: '\\(E(X)\\) for \\(\\operatorname{Po}(\\lambda)\\):', options: ['\\(\\lambda^2\\)', '\\(1\\)', '\\(1/\\lambda\\)', '\\(\\lambda\\)'], answer: 3 },
    { q: '\\(\\operatorname{Var}(X)\\) for \\(\\operatorname{Po}(\\lambda)\\):', options: ['\\(\\lambda\\)', '\\(\\lambda^2\\)', '\\(1\\)', '\\(\\sqrt\\lambda\\)'], answer: 0 },
    { q: 'Independent \\(\\operatorname{Po}(\\lambda_1)+\\operatorname{Po}(\\lambda_2)=\\)', options: ['\\(\\operatorname{Po}(|\\lambda_1-\\lambda_2|)\\)', '\\(\\operatorname{Po}(\\lambda_1+\\lambda_2)\\)', '\\(\\operatorname{Po}(\\lambda_1-\\lambda_2)\\)', '\\(\\operatorname{Po}(\\lambda_1\\lambda_2)\\)'], answer: 1 },
    { q: 'Poisson models events which are:', options: ['Bunched', 'Negatively correlated', 'Independent with constant rate', 'Always occurring'], answer: 2 },
  ],
  amber: [
    { q: 'Events at rate 2/min: probability of 0 in 1 min:', options: ['\\(0\\)', '\\(1/2\\)', '\\(2e^{-2}\\)', '\\(e^{-2}\\)'], answer: 3 },
    { q: 'Approximating \\(B(100,0.02)\\) by Poisson: \\(\\lambda=\\)', options: ['\\(2\\)', '\\(100\\)', '\\(0.02\\)', '\\(50\\)'], answer: 0 },
    { q: 'For \\(X\\sim\\operatorname{Po}(3)\\): \\(P(X=2)=\\)', options: ['\\(9e^{-3}\\)', '\\(9e^{-3}/2\\)', '\\(3e^{-3}/2\\)', '\\(3e^{-3}\\)'], answer: 1 },
    { q: 'Events at rate 4/hour: probability of exactly 1 in 15 min:', options: ['\\(e^{-4}\\)', '\\(e^{-15}\\)', '\\(e^{-1}\\) (since rate in 15 min is 1)', '\\(4e^{-1}\\)'], answer: 2 },
    { q: 'Testing \\(H_0:\\lambda=5\\), \\(H_1:\\lambda>5\\), observe \\(X=10\\). The p-value is:', options: ['\\(P(X=10)\\)', '\\(P(X\\le 10|\\lambda=5)\\)', 'Not defined', '\\(P(X\\ge 10|\\lambda=5)\\)'], answer: 3 },
  ],
  red: [
    { q: 'Rare-events rule: \\(B(n,p)\\approx\\operatorname{Po}(np)\\) requires:', options: ['\\(n\\) large, \\(p\\) small','\\(n\\) small','Always','\\(p\\) close to 1 and \\(n\\) small'], answer: 0 },
    { q: 'For a Poisson test 2-tailed, we compare:', options: ['Just upper tail','The smaller tail probability to \\(\\alpha/2\\)','Mean of test','Observed to \\(\\lambda\\)'], answer: 1 },
    { q: 'Poisson process waiting times follow:', options: ['Poisson (discrete counts)','Normal','Exponential','Uniform'], answer: 2 },
    { q: 'Between arrivals with rate \\(\\lambda\\), mean wait:', options: ['\\(\\lambda\\)','\\(\\lambda^2\\)','0','\\(1/\\lambda\\)'], answer: 3 },
  ],
},

'S1.3': {
  name: 'Bivariate Data & Correlation',
  green: [
    { q: 'Pearson product-moment correlation coefficient \\(r\\) satisfies:', options: ['\\(-1\\le r\\le1\\)', '\\(r\\in\\mathbb{R}\\)', '\\(r\\ge0\\)', '\\(r\\) is any number'], answer: 0 },
    { q: '\\(r=1\\) means:', options: ['Quadratic', 'Perfect positive linear', 'No correlation', 'Negative linear correlation'], answer: 1 },
    { q: '\\(r=0\\) means:', options: ['Perfect', 'Zero correlation of any kind', 'No linear correlation', 'Strong negative'], answer: 2 },
    { q: 'Spearman rank correlation \\(\\rho_s\\) is based on:', options: ['Means', 'Medians', 'Raw data', 'Ranks of the data'], answer: 3 },
    { q: 'Regression line \\(y=a+bx\\) through \\((\\bar{x},\\bar{y})\\) passes through:', options: ['\\((\\bar{x},\\bar{y})\\)', 'Origin', 'The highest point on the scatter graph', 'Median'], answer: 0 },
  ],
  amber: [
    { q: 'PMCC formula uses:', options: ['Percentiles', '\\(S_{xy}/\\sqrt{S_{xx}S_{yy}}\\)', 'The sums of \\(x\\) and \\(y\\) only, not products', 'Ranks'], answer: 1 },
    { q: 'Spearman formula (no ties): \\(\\rho_s=1-\\)', options: ['\\(d^2\\)', 'Nothing', '\\(6\\sum d^2/(n^3-n)\\)', '\\(\\sum d/n\\) (the mean difference of ranks)'], answer: 2 },
    { q: 'Null hypothesis for test of zero correlation:', options: ['\\(\\mu=0\\)', '\\(\\sigma=0\\)', '\\(r=1\\)', '\\(\\rho=0\\)'], answer: 3 },
    { q: 'Regression line of \\(y\\) on \\(x\\) minimises:', options: ['Sum of squared vertical residuals', 'Sum of \\(x-\\bar{x}\\)', 'Horizontal distances', 'Perpendicular distances'], answer: 0 },
    { q: 'Slope \\(b\\) in regression \\(y=a+bx\\):', options: ['PMCC', '\\(S_{xy}/S_{xx}\\)', '\\(S_{xy}+S_{xx}\\)', '\\(S_{xx}/S_{yy}\\)'], answer: 1 },
  ],
  red: [
    { q: 'Correlation does not imply:', options: ['Linearity','Association','Causation','Positive slope'], answer: 2 },
    { q: 'If \\(r\\) is close to 0, data:', options: ['Is linear','Is noisy','Has outliers','May have no linear relation (possible nonlinear pattern)'], answer: 3 },
    { q: 'PMCC is unchanged under:', options: ['Linear transformations of \\(x\\) and \\(y\\) (sign preserved)','Negating \\(y\\) while leaving \\(x\\) unchanged, so the sign flips','Adding outliers','Absolute value'], answer: 0 },
    { q: 'Spearman detects:', options: ['Causation','Monotonic relationships','Only linear','Only linear relationships between the variables'], answer: 1 },
  ],
},

'S1.4': {
  name: 'Chi-squared Tests',
  green: [
    { q: '\\(\\chi^2\\) statistic:', options: ['\\(\\sum(O-E)^2\\)', '\\(\\sum(O-E)^2/O\\)', '\\(\\sum(O-E)^2/E\\)', '\\(\\sum(O-E)\\)'], answer: 2 },
    { q: '\\(\\chi^2\\) is always:', options: ['Zero', 'Negative', 'Symmetric about 0', 'Non-negative'], answer: 3 },
    { q: 'Degrees of freedom for goodness-of-fit to \\(k\\) classes:', options: ['\\(k-1\\) minus number of estimated parameters', '\\(k\\)', '\\(k+1\\)', '\\(k-2\\)'], answer: 0 },
    { q: 'Contingency table \\(r\\times c\\): df = ', options: ['\\(rc-1\\) (all cells)', '\\((r-1)(c-1)\\)', '\\(rc\\)', '\\(r+c\\)'], answer: 1 },
    { q: 'Yates\' correction is for:', options: ['Large df', 'Very small samples with any number of df', '\\(df=1\\) with small counts', 'Any df'], answer: 2 },
  ],
  amber: [
    { q: 'Test is valid when:', options: ['\\(E_i=0\\) OK', '\\(O_i\\ge5\\)', 'Any \\(O\\)', 'All \\(E_i\\ge5\\) (pool if needed)'], answer: 3 },
    { q: 'Expected under independence: \\(E_{ij}=\\)', options: ['(row × col)/\\(N\\)', '\\(\\text{row}_i\\)', '\\(\\text{col}_j\\)', '\\(N/(rc)\\) for every cell'], answer: 0 },
    { q: 'Critical value exceeded → ', options: ['Always accept \\(H_1\\)', 'Reject \\(H_0\\)', 'Accept \\(H_0\\)', 'Nothing'], answer: 1 },
    { q: 'Parameters estimated from data reduce df by:', options: ['1 only', '2 each, always, per parameter', '1 per parameter', '0'], answer: 2 },
    { q: '\\(\\chi^2\\) test is:', options: ['Two-tailed, with half the significance in each tail', 'Small-sample', 'Normal-based', 'Always one-tailed (upper)'], answer: 3 },
  ],
  red: [
    { q: 'For \\(2\\times 2\\) table with Yates:', options: ['\\(\\sum(|O-E|-0.5)^2/E\\)','Same as large','\\(\\sum(O-E)^2/E\\) (no correction)','Subtract 1'], answer: 0 },
    { q: 'If observed = expected everywhere, \\(\\chi^2=\\)', options: ['Critical value','0','1','\\(\\infty\\)'], answer: 1 },
    { q: '\\(\\chi^2\\) is approximately chi-squared distribution because:', options: ['It sums squares','By symmetry','CLT: \\((O-E)/\\sqrt{E}\\approx N(0,1)\\)','It is Poisson'], answer: 2 },
    { q: 'A very small \\(\\chi^2\\) (much smaller than expected) might indicate:', options: ['Obviously correct data, with a perfect model','Test failure','Too many d.f.','Data too good a fit — possibly fudged'], answer: 3 },
  ],
},

'S1.5': {
  name: 'Non-parametric Tests',
  green: [
    { q: 'Non-parametric tests:', options: ['Make no or few distributional assumptions', 'Assume normality', 'Need large \\(n\\)', 'Test the variance only, assuming the data are normal'], answer: 0 },
    { q: 'Sign test uses:', options: ['Variance', 'Number of positive vs. negative signs', 'Sum of ranks', 'Mean'], answer: 1 },
    { q: 'Wilcoxon signed-rank test ranks:', options: ['Squares', 'Proportions', 'Absolute differences', 'Raw values of the data'], answer: 2 },
    { q: 'Wilcoxon rank-sum (Mann–Whitney) tests:', options: ['Two variances from paired data', 'Correlation', 'Independence', 'Two independent samples'], answer: 3 },
    { q: 'Null hypothesis for paired sign test:', options: ['Median of differences = 0', 'Mean of the differences = 0', 'Variance = 1', 'Data normal'], answer: 0 },
  ],
  amber: [
    { q: 'Sign test: under \\(H_0\\), number of positives \\(\\sim\\)', options: ['Geometric', '\\(B(n,0.5)\\)', 'Poisson', 'Normal \\(N(n/2, n/4)\\)'], answer: 1 },
    { q: 'Wilcoxon signed-rank: ignore pairs with:', options: ['Outliers', 'Missing values', 'Zero difference', 'Large difference'], answer: 2 },
    { q: 'Wilcoxon signed-rank statistic = ', options: ['Sum of all ranks', 'Median', 'Number of positive differences in the sample (the sign count)', 'Smaller of sum of positive / negative signed ranks'], answer: 3 },
    { q: "Mann–Whitney \\(U\\): for samples \\(n_1,n_2\\), min value is:", options: ["0","\\(n_1n_2\\)","\\(n_1+n_2\\)","\\(n_1n_2/2\\)"], answer: 0 },
    { q: 'Non-parametric tests are:', options: ['Faster', 'Less powerful than \\(t\\)-test when assumptions hold, but robust', 'Always more powerful', 'Assumption-heavy'], answer: 1 },
  ],
  red: [
    { q: 'Use sign test rather than Wilcoxon signed-rank when:', options: ['Small \\(n\\)','Data is normal','Only ordinal data (cannot rank differences)','Paired data'], answer: 2 },
    { q: 'Wilcoxon rank-sum ranks all observations from both groups together, then:', options: ['Counts ties','Averages','Compares the means of the two groups directly','Sums the ranks in one group and compares'], answer: 3 },
    { q: 'Advantages of non-parametric tests:', options: ['Robust to outliers and non-normality','Smaller \\(\\alpha\\)','Simpler computation','Always more powerful than the equivalent parametric tests'], answer: 0 },
    { q: 'Ties are handled in Wilcoxon by:', options: ['Ignoring','Assigning average of tied ranks','Random assignment of ranks to tied values','Rank 0'], answer: 1 },
  ],
},

/* ═══════════════════════════════ MODELLING WITH ALGORITHMS ═══════════════════════════════ */

'A1.1': {
  name: 'Graphs & Networks',
  green: [
    { q: 'A graph has:', options: ['Only vertices (nodes)', 'Numbers', 'Vertices and edges', 'Only edges'], answer: 2 },
    { q: 'Degree of a vertex = ', options: ['Coordinate', 'Weight', 'Number of vertices', 'Number of incident edges'], answer: 3 },
    { q: 'Complete graph \\(K_n\\) has edges:', options: ['\\(n(n-1)/2\\)', '\\(n\\)', '\\(n^2\\) (each pair twice)', '\\(2n\\)'], answer: 0 },
    { q: 'A tree on \\(n\\) vertices has edges:', options: ['\\(n+1\\)', '\\(n-1\\)', '\\(n\\)', '\\(n^2\\)'], answer: 1 },
    { q: 'Sum of all degrees = ', options: ['\\(|V|-1\\)', '\\(|V|+|E|\\)', '\\(2|E|\\)', '\\(|V|\\)'], answer: 2 },
  ],
  amber: [
    { q: 'Eulerian circuit exists iff graph connected and:', options: ['\\(K_n\\)', 'Hamiltonian', 'Has odd vertices', 'All vertices have even degree'], answer: 3 },
    { q: 'Semi-Eulerian (Eulerian trail) needs exactly:', options: ['2 odd-degree vertices', '0 odd-degree vertices at all', 'All odd', '1 odd'], answer: 0 },
    { q: 'Euler\'s formula for connected planar: \\(V-E+F=\\)', options: ['\\(|E|\\)', '2', '0', '1'], answer: 1 },
    { q: 'A bipartite graph has no:', options: ['Connected components', 'Degrees', 'Odd cycles', 'Trees'], answer: 2 },
    { q: 'Number of spanning trees in \\(K_3\\):', options: ['1', '2', '9', '3'], answer: 3 },
  ],
  red: [
    { q: 'Hamiltonian cycle visits:', options: ['Every vertex exactly once, returning to start','Every vertex twice','Every edge once','Only adjacent'], answer: 0 },
    { q: 'No simple test for Hamiltonicity — problem is:', options: ['Trivial','NP-complete','Polynomial','Solvable always'], answer: 1 },
    { q: 'Planar graph satisfies \\(E\\le\\)', options: ['\\(V^2\\)','\\(V-1\\) (a tree)','\\(3V-6\\)','\\(V\\)'], answer: 2 },
    { q: 'Smallest non-planar graphs:', options: ['Tree','\\(K_4\\) and \\(K_{2,3}\\) only','\\(K_3\\)','\\(K_5\\) and \\(K_{3,3}\\)'], answer: 3 },
  ],
},

'A1.2': {
  name: 'Network Algorithms',
  green: [
    { q: 'Minimum Spanning Tree: choose edges to:', options: ['Connect all vertices, minimise total weight, no cycles', 'Maximise length', 'Include all cycles', 'Minimise vertex count'], answer: 0 },
    { q: 'Prim\'s algorithm starts:', options: ['Sorts edges', 'At a single vertex, extends by nearest', 'From any edge', 'At a random vertex each step, adding the lightest arc anywhere'], answer: 1 },
    { q: 'Kruskal\'s algorithm processes edges:', options: ['Random', 'By vertex degree, from highest to lowest, skipping loops', 'In increasing order of weight, skipping cycles', 'In any order'], answer: 2 },
    { q: 'Dijkstra finds:', options: ['MST', 'An Eulerian trail through every arc', 'Hamilton cycle', 'Shortest path from source'], answer: 3 },
    { q: 'Dijkstra assumes:', options: ['Non-negative weights', 'Planar graph', 'Negative weights are allowed', 'Unweighted only'], answer: 0 },
  ],
  amber: [
    { q: 'Route inspection: if graph has all even degrees, optimal tour weight = ', options: ['0', 'Total edge weight (Eulerian)', 'Half total', 'Plus the repeated shortest paths'], answer: 1 },
    { q: 'Chinese Postman with 2 odd vertices: repeat shortest path between them:', options: ['Nothing repeated', 'Longest path', 'Shortest path', 'Many times'], answer: 2 },
    { q: 'TSP lower bound by delete-vertex method uses:', options: ['Hamilton cycle', 'Shortest spanning tree', 'Eulerian trail', 'MST of remaining + two shortest edges at deleted vertex'], answer: 3 },
    { q: 'Nearest-neighbour TSP heuristic: start and:', options: ['Go to nearest unvisited', 'Go to farthest', 'Random choice', 'Always backtrack to the start'], answer: 0 },
    { q: 'Dijkstra labels: each vertex gets a:', options: ['Predecessor only', 'Temporary label updated until made permanent', 'Color', 'Two sublabels, fixed from the start and never updated'], answer: 1 },
  ],
  red: [
    { q: 'Prim vs Kruskal: results are:', options: ['Depend on weights','Prim is faster','Always same MST weight (tree may differ if ties)','Always different'], answer: 2 },
    { q: 'TSP upper bound via nearest-neighbour is:', options: ['Exact','A lower bound for the optimal tour','Meaningless','Heuristic, may not be optimal'], answer: 3 },
    { q: 'Dijkstra\'s complexity is typically:', options: ['\\(O(E\\log V)\\) or \\(O(V^2)\\)','\\(O(2^V)\\) (exponential in \\(V\\))','\\(O(1)\\)','\\(O(V)\\)'], answer: 0 },
    { q: 'Route inspection needs:', options: ['Hamiltonicity','Connected graph','MST','Planarity of the network'], answer: 1 },
  ],
},

'A1.3': {
  name: 'Linear Programming',
  green: [
    { q: 'LP seeks to optimise:', options: ['Any function', 'Absolute values', 'A linear objective subject to linear constraints', 'A quadratic'], answer: 2 },
    { q: 'Decision variables are typically:', options: ['Negative only', 'Integer', 'Bounded only', 'Non-negative'], answer: 3 },
    { q: 'Feasible region: set of points that:', options: ['Satisfy all constraints', 'Maximise the objective', 'Are integer', 'Are on the objective line'], answer: 0 },
    { q: 'Optimal solution of an LP lies at:', options: ['Edge only', 'A vertex (basic solution)', 'The centre of the feasible region', 'Any point'], answer: 1 },
    { q: 'The Simplex method:', options: ['Uses graphs', 'Solves nonlinear problems by following gradients', 'Moves vertex-to-vertex improving objective', 'Random walk'], answer: 2 },
  ],
  amber: [
    { q: 'Slack variable converts \\(\\le\\) into:', options: ['\\(=0\\)', '\\(\\geq\\)', 'Nothing', 'Equality with non-negative slack added'], answer: 3 },
    { q: 'In Simplex, pivot column chosen as:', options: ['Most negative entry in objective row', 'Any column', 'Smallest entry', 'The largest ratio in the constraint rows'], answer: 0 },
    { q: 'Pivot row chosen by:', options: ['The column containing a zero in the objective row', 'Smallest non-negative ratio (RHS / pivot col)', 'Largest', 'Random'], answer: 1 },
    { q: 'If objective row has no negative entries:', options: ['Infeasible', 'Error', 'Optimal solution reached', 'Iterate again, choosing a new pivot'], answer: 2 },
    { q: 'A tight constraint has slack:', options: ['Positive', 'Infinite', 'Negative', 'Zero'], answer: 3 },
  ],
  red: [
    { q: 'Graphical method works for:', options: ['2 variables','Any LP','3 variables','Simplex only'], answer: 0 },
    { q: 'LP may have:', options: ['Only one solution','No feasible region, unbounded optimum, or infinitely many solutions','Negative infeasible','Always finite optimum'], answer: 1 },
    { q: 'Integer Programming (LP with integer constraints) is:', options: ['Easier','Always solvable by graphical','Harder (NP-hard in general)','Same as LP'], answer: 2 },
    { q: 'Artificial variables are used for:', options: ['Slack','\\(\\le\\) constraints (as with slack variables)','Linear only','\\(\\geq\\) or \\(=\\) constraints (Big-M method)'], answer: 3 },
  ],
},

'A1.4': {
  name: 'Critical Path Analysis',
  green: [
    { q: 'Activity-on-arc network shows:', options: ['Activities as arcs, events at nodes', 'Resources needed by each event in turn', 'Only costs', 'Random paths'], answer: 0 },
    { q: 'Earliest event time computed via:', options: ['Subtraction', 'Forward pass from start', 'Backward pass from the end', 'Random'], answer: 1 },
    { q: 'Latest event time computed via:', options: ['Random', 'Addition', 'Backward pass from end', 'Forward pass from the start'], answer: 2 },
    { q: 'Critical path is the:', options: ['Shortest', 'Any path', 'Tree', 'Longest path through the network'], answer: 3 },
    { q: 'Float of a critical activity:', options: ['Zero', 'Positive', 'Negative', 'Undefined'], answer: 0 },
  ],
  amber: [
    { q: 'Total float of activity (i,j):', options: ['Earliest − latest event time', '\\(LT_j - ET_i -\\) duration', '\\(t_j - t_i\\)', 'Duration'], answer: 1 },
    { q: 'Dummy activities:', options: ['Impossible', 'Are deleted', 'Have zero duration, used for dependency only', 'Have cost'], answer: 2 },
    { q: 'Gantt chart represents:', options: ['Cycles', 'Probabilities of each activity finishing', 'Cost', 'Activities as horizontal bars over time'], answer: 3 },
    { q: 'Scheduling with resource constraint may:', options: ['Lengthen project time', 'Shorten critical path', 'Not affect time', 'Remove dummies'], answer: 0 },
    { q: 'Precedence table describes:', options: ['Events', 'Which activities must precede others', 'The durations of the activities only, in order', 'Resources'], answer: 1 },
  ],
  red: [
    { q: 'PERT uses:', options: ['Normal','Deterministic only','Three-point (optimistic, most likely, pessimistic) estimates','Uniform'], answer: 2 },
    { q: 'Crashing an activity:', options: ['Delays project','Has no cost','Reduces the float only, without changing duration','Shortens duration at extra cost'], answer: 3 },
    { q: 'Independent float is:', options: ['Float usable without affecting successors','Always positive','Same as total','Greater than the total float for that activity'], answer: 0 },
    { q: 'A project\'s duration equals:', options: ['Mean duration','The critical-path length','Shortest path','The sum of all the activity durations'], answer: 1 },
  ],
},

'A1.5': {
  name: 'Simulation',
  green: [
    { q: 'Simulation is useful when:', options: ['Random variation is not involved in the problem', 'Only small problems', 'Problem is too complex for analytical solution', 'Analytical is easy'], answer: 2 },
    { q: 'Random numbers for simulation come from:', options: ['Mean', 'Variance', 'Any sequence of numbers at all, even a repeating one', 'Uniform distribution (pseudo-random generator)'], answer: 3 },
    { q: 'Monte Carlo simulation uses:', options: ['Repeated random trials', 'One trial', 'Deterministic inputs only', 'Graph theory'], answer: 0 },
    { q: 'A queue simulation tracks:', options: ['Cost', 'Arrivals, service times, queue length over time', 'Only arrivals', 'Service only'], answer: 1 },
    { q: 'Simulation outputs typically:', options: ['Single exact values with no spread', 'No variance', 'Estimates with sampling variance', 'Always exact'], answer: 2 },
  ],
  amber: [
    { q: 'Using \\(U\\sim U(0,1)\\), simulate a Bernoulli(0.3) by:', options: ['\\(U+0.3\\), rounded down to 0 or 1', 'Sign', 'Always 1', 'Indicator that \\(U<0.3\\)'], answer: 3 },
    { q: 'Inverse transform method: use:', options: ['Inverse of CDF', 'Mean', 'Random variance', 'Sampling'], answer: 0 },
    { q: 'Variance reduction technique:', options: ['Smaller intervals', 'Antithetic variates / common random numbers', 'Make more runs', 'Increase \\(n\\)'], answer: 1 },
    { q: 'Seeding ensures:', options: ['Randomness', 'No randomness', 'Reproducibility of simulation', 'Only fast execution of the model'], answer: 2 },
    { q: 'Poisson arrivals can be simulated via:', options: ['Uniform directly', 'Normal approximation to the arrival counts', 'Sum of Bernoullis', 'Exponential inter-arrival times'], answer: 3 },
  ],
  red: [
    { q: 'Convergence of Monte Carlo estimate:', options: ['\\(O(1/\\sqrt{n})\\)','\\(O(\\log n)\\)','\\(O(1)\\)','\\(O(1/n)\\) (linear)'], answer: 0 },
    { q: 'Queue with single server: Little\'s law \\(L=\\lambda W\\) relates:', options: ['Space and rate','Mean queue length, arrival rate, mean wait','Only service times','Time and cost'], answer: 1 },
    { q: 'A deterministic queue system has:', options: ['Same results','Random outputs','Fixed arrival and service times','Exponential arrivals and random service times'], answer: 2 },
    { q: 'Simulation cannot:', options: ['Give bounds','Help design','Use random data as its inputs','Replace a proven theorem'], answer: 3 },
  ],
},

}; // end FM_OCR_B_MCQ
