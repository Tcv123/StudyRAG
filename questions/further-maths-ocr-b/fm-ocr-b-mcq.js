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
    { q: 'Mathematical induction requires proving which two steps?', options: ['Existence & uniqueness', 'Contradiction & construction', 'Hypothesis & conclusion', 'Base case & inductive step'], answer: 3 },
    { q: 'A proof by contradiction begins by assuming:', options: ['The statement holds', 'A counterexample exists', 'The statement is true', 'The negation of what is to be proved'], answer: 3 },
    { q: 'For a proof by induction on \\(n\\in\\mathbb{N}\\), we typically prove:', options: ['\\(P(0)\\)', '\\(P(k+1)\\) directly', '\\(P(k)\\)', '\\(P(1)\\) and then \\(P(k)\\Rightarrow P(k+1)\\)'], answer: 3 },
    { q: 'Proof by deduction uses:', options: ['Specific examples', 'Randomness', 'Probability', 'A chain of logical implications'], answer: 3 },
    { q: 'Direct proof of "\\(n\\) even \\(\\Rightarrow n^2\\) even" writes \\(n=2k\\) and concludes:', options: ['\\(n^2=2k\\)', '\\(n^2=k^2\\)', '\\(n^2=4k\\)', '\\(n^2=2(2k^2)\\), hence even'], answer: 3 },
  ],
  amber: [
    { q: 'To prove \\(\\sum_{r=1}^{n}r=n(n+1)/2\\) by induction, the step uses:', options: ['\\(k(k+1)/2+1\\)', '\\(\\frac{k(k+2)}{2}\\)', '\\((k+1)^2/2\\)', '\\(k(k+1)/2+(k+1)=(k+1)(k+2)/2\\)'], answer: 3 },
    { q: 'Proving \\(\\sqrt{2}\\) irrational uses contradiction: assume \\(\\sqrt{2}=a/b\\) in lowest terms, derive:', options: ['\\(a=b\\)', '\\(a^2=b\\)', '\\(a>b\\)', '\\(a^2=2b^2\\), so \\(a\\) and \\(b\\) both even'], answer: 3 },
    { q: 'For the step of proving \\(n^3-n\\) divisible by 6 by induction, factorise \\((k+1)^3-(k+1)\\) and use \\(k^3-k\\) divisible by 6, plus:', options: ['Nothing', 'An extra 2', '\\(k^3+k\\)', '\\(3k(k+1)\\) divisible by 6'], answer: 3 },
    { q: 'A "proof" that 1=2 via division by zero is invalid because:', options: ['Logic is broken', 'The argument assumes 1=2', 'Equality is not transitive', 'Division by 0 is undefined'], answer: 3 },
    { q: 'The conclusion of a valid induction must state:', options: ['The result is obvious', 'P(n) depends on \\(k\\)', 'Assume P(k) true', 'By induction, P(n) holds for all required \\(n\\)'], answer: 3 },
  ],
  red: [
    { q: 'Which statement is NOT proved by induction alone?', options: ['\\(2^n>n\\) for \\(n\\ge1\\)','\\(7^n-1\\) divisible by 6','\\(\\sum r=n(n+1)/2\\)','The set \\(\\mathbb{R}\\) is uncountable'], answer: 3 },
    { q: 'Strong induction differs from ordinary induction by:', options: ['Being weaker','Using contradiction','Skipping base case','Assuming \\(P(1),\\ldots,P(k)\\) all true in the step'], answer: 3 },
    { q: 'Proof by exhaustion is valid when:', options: ['The domain is infinite','We use contradiction','The number of cases is finite','We find one example'], answer: 2 },
    { q: 'De Moivre\'s theorem for negative \\(n\\) is proved using:', options: ['Binomial theorem only','Exhaustion','Direct expansion','The result for positive \\(n\\) plus \\(z^{-1}=\\bar{z}/|z|^2\\)'], answer: 3 },
  ],
},

'1.2': {
  name: 'Complex Numbers',
  green: [
    { q: '\\(i^2 = \\)', options: ['\\(1\\)', '\\(i\\)', '\\(-i\\)', '\\(-1\\)'], answer: 3 },
    { q: '\\(|3+4i|=\\)', options: ['\\(7\\)', '\\(25\\)', '\\(3+4\\)', '\\(5\\)'], answer: 3 },
    { q: 'The conjugate of \\(a+bi\\) is:', options: ['\\(-a+bi\\)', '\\(-a-bi\\)', '\\(b-ai\\)', '\\(a-bi\\)'], answer: 3 },
    { q: '\\((2+i)(2-i) = \\)', options: ['\\(3\\)', '\\(4-1\\)', '\\(4i\\)', '\\(5\\)'], answer: 3 },
    { q: 'Euler\'s formula: \\(e^{i\\theta} = \\)', options: ['\\(\\cos\\theta-i\\sin\\theta\\)', '\\(\\cosh\\theta+i\\sinh\\theta\\)', '\\(i(\\cos\\theta+\\sin\\theta)\\)', '\\(\\cos\\theta+i\\sin\\theta\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Simplify \\(\\dfrac{1+i}{1-i}\\).', options: ['\\(1\\)', '\\(-i\\)', '\\(1-i\\)', '\\(i\\)'], answer: 3 },
    { q: 'Solve \\(z^2 + 2z + 5 = 0\\).', options: ['\\(-1\\pm2i\\)', '\\(1\\pm2i\\)', '\\(-2\\pm i\\)', '\\(-1\\pm2i\\)'], answer: 0 },
    { q: 'Write \\(1 + i\\sqrt{3}\\) in modulus-argument form.', options: ['\\(2e^{i\\pi/6}\\)', '\\(e^{i\\pi/3}\\)', '\\(\\sqrt{2}e^{i\\pi/4}\\)', '\\(2e^{i\\pi/3}\\)'], answer: 3 },
    { q: 'By de Moivre: \\((\\cos\\theta+i\\sin\\theta)^4=\\)', options: ['\\(\\cos^4\\theta+i\\sin^4\\theta\\)', '\\(4\\cos\\theta+4i\\sin\\theta\\)', '\\(\\cos4\\theta-i\\sin4\\theta\\)', '\\(\\cos 4\\theta+i\\sin 4\\theta\\)'], answer: 3 },
    { q: 'If \\(2+3i\\) is a root of a real polynomial, another root is:', options: ['\\(-2-3i\\)', '\\(-2+3i\\)', '\\(3+2i\\)', '\\(2-3i\\)'], answer: 3 },
  ],
  red: [
    { q: 'How many distinct 5th roots of unity are there?', options: ['5','10','4','1'], answer: 0 },
    { q: 'The sum of all \\(n\\)th roots of unity (\\(n\\ge2\\)) equals:', options: ['\\(1\\)','\\(n\\)','\\(-1\\)','\\(0\\)'], answer: 3 },
    { q: 'Locus \\(|z-2|=|z+2i|\\) is:', options: ['Half-line','Perpendicular bisector of the segment from \\((2,0)\\) to \\((0,-2)\\)','Ellipse','Circle'], answer: 1 },
    { q: 'Use de Moivre to express \\(\\cos 3\\theta\\):', options: ['\\(3\\cos\\theta-4\\cos^3\\theta\\)','\\(\\cos^3\\theta\\) only','\\(4\\cos^3\\theta-3\\cos\\theta\\)','\\(3\\cos\\theta+\\cos 3\\theta\\)'], answer: 2 },
    { q: 'Transformation \\(w=iz\\) represents:', options: ['Reflection','Dilation','Identity','Rotation \\(\\pi/2\\) anticlockwise about origin'], answer: 3 },
  ],
},

'1.3': {
  name: 'Matrices',
  green: [
    { q: '\\(\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=\\)', options: ['\\(ac-bd\\)', '\\(ab-cd\\)', '\\(ab+cd\\)', '\\(ad-bc\\)'], answer: 3 },
    { q: 'For matrices \\(A\\) and \\(B\\), in general \\(AB\\):', options: ['Always equals \\(BA\\)', 'Always \\(=I\\)', 'Always \\(=0\\)', 'May not equal \\(BA\\)'], answer: 3 },
    { q: 'A \\(2\\times2\\) matrix is invertible iff:', options: ['det \\(=0\\)', 'It is symmetric', 'It is the identity', 'det \\(\\ne0\\)'], answer: 3 },
    { q: 'The matrix for rotation \\(\\theta\\) anticlockwise about origin:', options: ['\\([[\\cos\\theta,\\sin\\theta],[-\\sin\\theta,\\cos\\theta]]\\)', '\\([[1,0],[0,-1]]\\)', 'Diagonal', '\\([[\\cos\\theta,-\\sin\\theta],[\\sin\\theta,\\cos\\theta]]\\)'], answer: 3 },
    { q: 'The identity matrix \\(I_2\\) satisfies \\(AI=\\)', options: ['\\(0\\)', '\\(I\\)', '\\(2A\\)', '\\(A\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Area scale factor of transformation \\(\\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}\\):', options: ['\\(1\\)', '\\(3\\)', '\\(6\\)', '\\(5\\)'], answer: 3 },
    { q: 'Eigenvalues of \\(\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\):', options: ['\\(1,5\\)', '\\(0,2\\)', '\\(1,3\\)', '\\(2,3\\)'], answer: 3 },
    { q: 'The inverse of \\(\\begin{pmatrix}1&2\\\\3&5\\end{pmatrix}\\) is:', options: ['\\([[5,-2],[-3,1]]/2\\)', '\\(I\\)', '\\([[5,2],[3,1]]\\)', '\\([[-5,2],[3,-1]]\\)'], answer: 3, explanation: 'det=−1; inverse = (1/-1)·[[5,-2],[-3,1]] = [[-5,2],[3,-1]]' },
    { q: 'Solving \\(Ax=b\\) with \\(\\det A\\ne0\\) gives:', options: ['\\(x=A+b\\)', '\\(x=Ab\\)', 'No solution', '\\(x=A^{-1}b\\)'], answer: 3 },
    { q: 'If \\(A\\) is \\(3\\times3\\) and \\(\\det A=0\\), then the system \\(Ax=0\\) has:', options: ['A unique solution \\(x=0\\)', 'No solution', 'Exactly two solutions', 'A line or plane of solutions'], answer: 3 },
  ],
  red: [
    { q: 'An eigenvector \\(v\\) of \\(A\\) corresponding to eigenvalue \\(\\lambda\\) satisfies:', options: ['\\(Av=\\lambda v,\\; v\\ne0\\)','\\(\\det(A-v)=0\\)','\\(Av=\\lambda^2 v\\)','\\(Av=v\\)'], answer: 0 },
    { q: 'Diagonalisation: \\(A=PDP^{-1}\\) where:', options: ['\\(P\\) is diagonal, \\(D\\) has eigenvectors','\\(P\\) is always orthogonal','\\(D=I\\)','\\(D\\) is diagonal with eigenvalues; \\(P\\) has eigenvectors as columns'], answer: 3 },
    { q: '\\(A^n\\) where \\(A=PDP^{-1}\\) equals:', options: ['\\(P^nD^nP^{-n}\\)','\\(PD^nP^{-1}\\)','\\(P^nDP^{-n}\\)','\\(PD^nP^{-n}\\)'], answer: 1 },
    { q: 'Cayley–Hamilton theorem states that every matrix:', options: ['Has a unique inverse','Is symmetric','Satisfies its own characteristic equation','Equals its transpose'], answer: 2 },
    { q: 'The characteristic polynomial of \\(\\begin{pmatrix}4&1\\\\2&3\\end{pmatrix}\\) is:', options: ['\\(\\lambda^2-10\\)','\\(\\lambda^2-7\\lambda+12\\)','\\(\\lambda^2+5\\lambda+6\\)','\\(\\lambda^2-7\\lambda+10\\)'], answer: 3 },
  ],
},

'1.4': {
  name: 'Vectors',
  green: [
    { q: '\\(\\mathbf{a}\\cdot\\mathbf{b}\\) equals:', options: ['A vector', '\\(|\\mathbf{a}|+|\\mathbf{b}|\\)', '\\(\\mathbf{a}\\times\\mathbf{b}\\)', '\\(|\\mathbf{a}||\\mathbf{b}|\\cos\\theta\\)'], answer: 3 },
    { q: '\\(\\mathbf{a}\\times\\mathbf{b}\\) equals:', options: ['A scalar', '\\(\\mathbf{a}\\cdot\\mathbf{b}\\)', '\\(0\\) always', 'A vector perpendicular to both'], answer: 3 },
    { q: 'If \\(\\mathbf{a}\\cdot\\mathbf{b}=0\\) and both nonzero:', options: ['Parallel', 'Equal', 'Opposite', 'Perpendicular'], answer: 3 },
    { q: 'The vector equation of a line through \\(\\mathbf{a}\\) with direction \\(\\mathbf{d}\\):', options: ['\\(\\mathbf{a}+\\mathbf{d}\\)', '\\(\\mathbf{a}\\cdot\\mathbf{d}\\)', '\\(\\mathbf{a}\\times\\mathbf{d}\\)', '\\(\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}\\)'], answer: 3 },
    { q: 'A plane has normal vector \\(\\mathbf{n}\\). Its equation: \\(\\mathbf{r}\\cdot\\mathbf{n}=\\)', options: ['\\(0\\)', '\\(|\\mathbf{n}|\\)', '\\(\\mathbf{n}\\cdot\\mathbf{n}\\)', '\\(d\\) (constant)'], answer: 3 },
  ],
  amber: [
    { q: '\\((2,0,1)\\times(1,1,0)=\\)', options: ['\\((0,0,2)\\)', '\\((2,1,0)\\)', '\\((-1,1,2)\\)', '\\((-1,1,2)\\)'], answer: 2, explanation: '(0·0−1·1, −(2·0−1·1), 2·1−0·1) = (−1, 1, 2)' },
    { q: 'Scalar triple product \\(\\mathbf{a}\\cdot(\\mathbf{b}\\times\\mathbf{c})\\) represents:', options: ['Area', 'Length', 'Angle', 'Volume of parallelepiped'], answer: 3 },
    { q: 'Three vectors are coplanar iff their scalar triple product is:', options: ['Unit', 'Positive', 'Negative', 'Zero'], answer: 3 },
    { q: 'Angle between line \\(\\mathbf{d}\\) and plane normal \\(\\mathbf{n}\\) is \\(\\alpha\\); angle between line and plane is:', options: ['\\(\\alpha\\)', '\\(\\pi-\\alpha\\)', '\\(2\\alpha\\)', '\\(\\pi/2-\\alpha\\)'], answer: 3 },
    { q: 'Two lines are skew when:', options: ['They are parallel', 'They intersect', 'Directions are equal', 'They do not intersect and are not parallel'], answer: 3 },
  ],
  red: [
    { q: 'Shortest distance from point \\(\\mathbf{p}\\) to line \\(\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{d}\\):', options: ['\\(|\\mathbf{p}-\\mathbf{a}|\\)','\\(|(\\mathbf{p}-\\mathbf{a})\\cdot\\mathbf{d}|\\)','\\(|\\mathbf{d}|\\)','\\(|(\\mathbf{p}-\\mathbf{a})\\times\\mathbf{d}|/|\\mathbf{d}|\\)'], answer: 3 },
    { q: 'Two skew lines: shortest distance uses:', options: ['\\(|(\\mathbf{a}_2-\\mathbf{a}_1)\\cdot(\\mathbf{d}_1\\times\\mathbf{d}_2)|/|\\mathbf{d}_1\\times\\mathbf{d}_2|\\)','\\(|\\mathbf{a}_2-\\mathbf{a}_1|\\)','Distance from midpoint','\\(|\\mathbf{d}_1\\times\\mathbf{d}_2|\\)'], answer: 0 },
    { q: 'Area of triangle with vertices \\(\\mathbf{A},\\mathbf{B},\\mathbf{C}\\):', options: ['\\(\\mathbf{A}+\\mathbf{B}+\\mathbf{C}\\)','\\(\\tfrac{1}{2}|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\)','\\(\\tfrac{1}{2}|\\overrightarrow{AB}|\\)','\\(|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\)'], answer: 1 },
    { q: 'The equation of plane through 3 non-collinear points uses:', options: ['Average of points','Normal = (B−A) × (C−A)','Sum of vectors','Dot product of sides'], answer: 1 },
  ],
},

'1.5': {
  name: 'Series',
  green: [
    { q: '\\(\\sum_{r=1}^{n}r=\\)', options: ['\\(n^2\\)', '\\(n\\)', '\\(n(n+1)(2n+1)/6\\)', '\\(n(n+1)/2\\)'], answer: 3 },
    { q: '\\(\\sum_{r=1}^{n}r^2=\\)', options: ['\\(n^2(n+1)/2\\)', '\\([n(n+1)/2]^2\\)', '\\(n^2\\)', '\\(n(n+1)(2n+1)/6\\)'], answer: 3 },
    { q: '\\(\\sum_{r=1}^{n}r^3=\\)', options: ['\\(n(n+1)/2\\)', '\\(n^3\\)', '\\(n^2(n+1)^2/4\\)', '\\([n(n+1)/2]^2\\)'], answer: 3 },
    { q: 'Method of differences sums telescope if \\(f(r)=\\)', options: ['\\(r\\)', '\\(r^2\\)', '\\(\\ln r\\)', '\\(g(r+1)-g(r)\\)'], answer: 3 },
    { q: 'Maclaurin series of \\(e^x\\):', options: ['\\(1-x+x^2/2-\\cdots\\)', '\\(x+x^2/2+\\cdots\\)', '\\(1+x^2/2+\\cdots\\)', '\\(1+x+x^2/2!+x^3/3!+\\cdots\\)'], answer: 3 },
  ],
  amber: [
    { q: '\\(\\sum_{r=1}^{n}(2r-1)=\\)', options: ['\\(2n\\)', '\\(n(n+1)\\)', '\\(n+1\\)', '\\(n^2\\)'], answer: 3 },
    { q: 'Using partial fractions, \\(\\sum_{r=1}^{n}\\dfrac{1}{r(r+1)}=\\)', options: ['\\(n\\)', '\\(\\ln 2\\)', '\\(1\\)', '\\(\\dfrac{n}{n+1}\\)'], answer: 3 },
    { q: 'Coefficient of \\(x^3\\) in Maclaurin of \\(\\sin x\\):', options: ['\\(1/3\\)', '\\(-1/3\\)', '\\(1/6\\)', '\\(-1/6\\)'], answer: 3 },
    { q: '\\((1+x)^{1/2}\\) expansion to \\(x^2\\):', options: ['\\(1+x/2+x^2/4\\)', '\\(1+x-x^2/2\\)', '\\(1+x/2+x^2/2\\)', '\\(1+x/2-x^2/8\\)'], answer: 3 },
    { q: 'Radius of convergence of \\(\\ln(1+x)\\):', options: ['All \\(x\\)', '\\(|x|<2\\)', '\\(|x|<\\infty\\)', '\\(|x|<1\\) (with \\(x=1\\) included)'], answer: 3 },
  ],
  red: [
    { q: 'Evaluate \\(\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}\\) using series:', options: ['\\(2\\)','\\(0\\)','\\(1\\)','\\(1/2\\)'], answer: 3 },
    { q: '\\(\\sum_{r=1}^{\\infty}\\frac{1}{r(r+1)}\\) telescopes to:', options: ['\\(1/2\\)','\\(\\ln 2\\)','\\(1\\)','\\(\\infty\\)'], answer: 2 },
    { q: 'The Taylor expansion of \\(f\\) about \\(x=a\\):', options: ['\\(\\sum f^{(n)}(a)x^n/n!\\)','\\(\\sum f(a)/n!\\)','\\(f(a)+x\\)','\\(\\sum f^{(n)}(a)(x-a)^n/n!\\)'], answer: 3 },
    { q: '\\(e^{ix}\\) = ', options: ['\\(\\cos x+i\\sin x\\)','\\(i\\cos x+\\sin x\\)','\\(ix+e^x\\)','\\(e^x\\cos 1\\)'], answer: 0 },
  ],
},

'1.6': {
  name: 'Roots of Polynomials',
  green: [
    { q: 'For \\(ax^2+bx+c=0\\) with roots \\(\\alpha,\\beta\\): \\(\\alpha+\\beta=\\)', options: ['\\(c/a\\)', '\\(b/a\\)', '\\(-c/a\\)', '\\(-b/a\\)'], answer: 3 },
    { q: 'For \\(ax^2+bx+c=0\\): \\(\\alpha\\beta=\\)', options: ['\\(-c/a\\)', '\\(b/a\\)', '\\(-b/a\\)', '\\(c/a\\)'], answer: 3 },
    { q: 'For \\(ax^3+bx^2+cx+d=0\\) with roots \\(\\alpha,\\beta,\\gamma\\): \\(\\sum\\alpha=\\)', options: ['\\(b/a\\)', '\\(c/a\\)', '\\(d/a\\)', '\\(-b/a\\)'], answer: 3 },
    { q: 'For cubic as above: \\(\\alpha\\beta\\gamma=\\)', options: ['\\(c/a\\)', '\\(d/a\\)', '\\(-b/a\\)', '\\(-d/a\\)'], answer: 3 },
    { q: 'For quartic \\(ax^4+bx^3+\\cdots=0\\), sum of products of pairs \\(\\sum\\alpha\\beta\\) equals:', options: ['\\(-b/a\\)', '\\(-d/a\\)', '\\(e/a\\)', '\\(c/a\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Given \\(\\alpha+\\beta=4,\\alpha\\beta=3\\), find \\(\\alpha^2+\\beta^2\\):', options: ['\\(13\\)', '\\(7\\)', '\\(16\\)', '\\(10\\)'], answer: 3, explanation: '(α+β)²−2αβ=16−6=10' },
    { q: 'If roots of \\(x^2-5x+6=0\\) are \\(\\alpha,\\beta\\), quadratic with roots \\(\\alpha+2,\\beta+2\\):', options: ['\\(x^2-7x+20=0\\)', '\\(x^2-9x+16=0\\)', '\\(x^2-5x+10=0\\)', '\\(x^2-9x+20=0\\)'], answer: 3, explanation: 'sub y=x+2, x=y-2 → (y-2)²-5(y-2)+6=y²-9y+20=0' },
    { q: 'Cubic roots \\(\\alpha,\\beta,\\gamma\\) with \\(\\sum\\alpha=6, \\sum\\alpha\\beta=11,\\alpha\\beta\\gamma=6\\). Then \\(\\alpha^2+\\beta^2+\\gamma^2=\\)', options: ['\\(26\\)', '\\(6\\)', '\\(44\\)', '\\(14\\)'], answer: 3, explanation: '6²−2·11=36−22=14' },
    { q: 'Quadratic with roots reciprocals of \\(x^2-7x+2=0\\):', options: ['\\(2x^2+7x+1=0\\)', '\\(2x^2-x-1=0\\)', '\\(x^2+7x+2=0\\)', '\\(2x^2-7x+1=0\\)'], answer: 3, explanation: 'sub y=1/x: 1/y²−7/y+2=0 → 2y²−7y+1=0' },
    { q: 'For \\(\\alpha\\beta\\) given roots \\(2,3,4\\): \\(\\sum\\alpha\\beta=\\)', options: ['\\(9\\)', '\\(24\\)', '\\(12\\)', '\\(26\\)'], answer: 3, explanation: '2·3+3·4+2·4=6+12+8=26' },
  ],
  red: [
    { q: 'If \\(\\alpha,\\beta,\\gamma\\) are roots of cubic \\(x^3+px+q=0\\), then \\(\\alpha+\\beta+\\gamma=\\)', options: ['\\(-q\\)','\\(0\\)','\\(-p\\)','\\(p\\)'], answer: 1 },
    { q: 'For \\(ax^n+\\cdots+c=0\\), the constant term \\(c/a\\) equals:', options: ['Sum of pairs','Always 1','Sum of roots','\\((-1)^n\\) times product of roots'], answer: 3 },
    { q: 'Substitution \\(y=x+k\\) transforms roots by:', options: ['Scaling by \\(k\\)','Negating','Inverting','Shifting by \\(k\\)'], answer: 3 },
    { q: 'Finding cubic with roots \\(1/\\alpha,1/\\beta,1/\\gamma\\) uses substitution:', options: ['\\(y=\\alpha\\)','\\(y=x+1\\)','\\(y=-x\\)','\\(y=1/x\\)'], answer: 3 },
  ],
},

'1.7': {
  name: 'Polar Coordinates',
  green: [
    { q: 'Polar coordinates \\((r,\\theta)\\): \\(x=\\)', options: ['\\(r\\)', '\\(\\theta\\)', '\\(r\\sin\\theta\\)', '\\(r\\cos\\theta\\)'], answer: 3 },
    { q: 'Polar \\(y=\\)', options: ['\\(r\\cos\\theta\\)', '\\(\\theta\\)', '\\(\\tan\\theta\\)', '\\(r\\sin\\theta\\)'], answer: 3 },
    { q: 'OCR convention: \\(r\\) values are:', options: ['Integer', 'Complex', 'Negative only', 'Non-negative'], answer: 3 },
    { q: 'The curve \\(r=a\\) (constant) is:', options: ['A line through origin', 'A spiral', 'A half-line', 'A circle of radius \\(a\\)'], answer: 3 },
    { q: 'A cardioid is given by \\(r=\\)', options: ['\\(a\\sin 2\\theta\\)', '\\(a\\theta\\)', '\\(a+\\theta\\)', '\\(a(1+\\cos\\theta)\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Area enclosed by polar curve: \\(A=\\)', options: ['\\(\\int r\\,d\\theta\\)', '\\(\\int r^2\\,d\\theta\\)', '\\(\\tfrac{1}{2}\\int r\\,d\\theta\\)', '\\(\\tfrac{1}{2}\\int r^2\\,d\\theta\\)'], answer: 3 },
    { q: 'Convert \\((2,\\pi/3)\\) polar to Cartesian:', options: ['\\((1,1)\\)', '\\((2,\\sqrt{3})\\)', '\\((\\sqrt{3},1)\\)', '\\((1,\\sqrt{3})\\)'], answer: 3 },
    { q: '\\(r=2\\cos\\theta\\) is a circle:', options: ['Centre origin, radius 2', 'Centre \\((0,1)\\), radius 1', 'Centre \\((0,0)\\), radius 2', 'Centre \\((1,0)\\), radius 1'], answer: 3 },
    { q: 'Tangent at the pole of \\(r=\\sin 3\\theta\\) at \\(\\theta=0\\):', options: ['\\(\\theta=\\pi/2\\)', 'Vertical', 'Horizontal', 'Along \\(\\theta=0\\) (the initial line)'], answer: 3 },
    { q: 'Area enclosed by \\(r=2\\) (a circle of radius 2):', options: ['\\(2\\pi\\)', '\\(\\pi\\)', '\\(8\\pi\\)', '\\(4\\pi\\)'], answer: 3 },
  ],
  red: [
    { q: 'The number of petals of rose \\(r=a\\sin 4\\theta\\):', options: ['4','16','8','2'], answer: 2 },
    { q: 'Petals of \\(r=a\\sin 3\\theta\\):', options: ['3','12','2','6'], answer: 0 },
    { q: 'Horizontal tangents of polar curve occur when \\(dy/d\\theta=\\)', options: ['undefined','\\(\\infty\\)','\\(r\\cos\\theta\\)','0'], answer: 3 },
    { q: 'Area of one petal of \\(r=\\sin 2\\theta\\):', options: ['\\(\\pi/4\\)','\\(\\pi\\)','\\(\\pi/8\\)','\\(\\pi/2\\)'], answer: 2 },
  ],
},

'1.8': {
  name: 'Hyperbolic Functions',
  green: [
    { q: '\\(\\cosh x=\\)', options: ['\\((e^x-e^{-x})/2\\)', '\\(e^x-1\\)', '\\(1/\\cos x\\)', '\\((e^x+e^{-x})/2\\)'], answer: 3 },
    { q: '\\(\\sinh x=\\)', options: ['\\((e^x+e^{-x})/2\\)', '\\(-\\cos x\\)', '\\(e^x-1\\)', '\\((e^x-e^{-x})/2\\)'], answer: 3 },
    { q: '\\(\\cosh^2 x-\\sinh^2 x=\\)', options: ['\\(2\\)', '\\(0\\)', '\\(-1\\)', '\\(1\\)'], answer: 3 },
    { q: '\\(\\dfrac{d}{dx}\\sinh x=\\)', options: ['\\(-\\cosh x\\)', '\\(\\sinh x\\)', '\\(-\\sinh x\\)', '\\(\\cosh x\\)'], answer: 3 },
    { q: '\\(\\operatorname{arsinh} x=\\ln(x+\\sqrt{?})\\)', options: ['\\(x\\)', '\\(x^2-1\\)', '\\(x-1\\)', '\\(x^2+1\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Osborn\'s rule: the trig identity \\(\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B\\) becomes for hyperbolics:', options: ['\\(\\cosh(A+B)=\\cosh A\\cosh B-\\sinh A\\sinh B\\)', '\\(\\cosh(A+B)=\\cosh A\\cos B+\\sinh A\\sin B\\)', 'Unchanged', '\\(\\cosh(A+B)=\\cosh A\\cosh B+\\sinh A\\sinh B\\)'], answer: 3 },
    { q: 'Solve \\(\\cosh x=2\\):', options: ['\\(\\ln 2\\)', '\\(\\pm\\ln\\sqrt{2}\\)', '\\(\\pm\\arcsin 2\\)', '\\(\\pm\\ln(2+\\sqrt{3})\\)'], answer: 3 },
    { q: 'Evaluate \\(\\int\\sinh x\\,dx\\):', options: ['\\(-\\cosh x+C\\)', '\\(\\sinh x+C\\)', '\\(-\\sinh x+C\\)', '\\(\\cosh x+C\\)'], answer: 3 },
    { q: '\\(\\dfrac{d}{dx}\\tanh x=\\)', options: ['\\(\\operatorname{coth}^2 x\\)', '\\(\\cosh x\\)', '\\(\\sec^2 x\\)', '\\(\\operatorname{sech}^2 x\\)'], answer: 3 },
    { q: 'Integration \\(\\int\\dfrac{dx}{\\sqrt{x^2+4}}=\\)', options: ['\\(\\operatorname{arcosh}(x/2)\\)', '\\(\\arcsin(x/2)\\)', '\\(\\arctan(x/2)\\)', '\\(\\operatorname{arsinh}(x/2)+C\\)'], answer: 3 },
  ],
  red: [
    { q: 'Range of \\(\\tanh x\\):', options: ['\\([-1,1]\\)','\\(\\mathbb{R}\\)','\\([0,1]\\)','\\((-1,1)\\)'], answer: 3 },
    { q: '\\(\\cosh\\) is:', options: ['Odd','Decreasing','Unbounded below','Even'], answer: 3 },
    { q: 'For all real \\(x\\), \\(\\cosh x\\ge\\)', options: ['\\(0\\)','\\(-1\\)','\\(1\\)','\\(e^x\\)'], answer: 2 },
    { q: '\\(\\sinh 2x=\\)', options: ['\\(\\cosh^2 x+\\sinh^2 x\\)','\\(\\sinh^2 x-\\cosh^2 x\\)','\\(2\\sinh x\\cosh x\\)','\\(2\\cosh^2 x\\)'], answer: 2 },
  ],
},

'1.9': {
  name: 'Further Calculus',
  green: [
    { q: 'Improper integral \\(\\int_1^{\\infty}x^{-p}\\,dx\\) converges when:', options: ['\\(p<1\\)', '\\(p=1\\)', 'All \\(p\\)', '\\(p>1\\)'], answer: 3 },
    { q: 'Mean value of \\(f\\) on \\([a,b]\\):', options: ['\\(\\int f\\,dx\\)', '\\((b-a)\\int f\\,dx\\)', '\\(f(b)-f(a)\\)', '\\(\\frac{1}{b-a}\\int_a^b f\\,dx\\)'], answer: 3 },
    { q: 'Reduction formulae are typically derived using:', options: ['Substitution', 'Partial fractions', 'Power series', 'Integration by parts'], answer: 3 },
    { q: 'Arc length of \\(y=f(x)\\) from \\(a\\) to \\(b\\):', options: ['\\(\\int(1+f\')dx\\)', '\\(\\int f\\,dx\\)', '\\(|f(b)-f(a)|\\)', '\\(\\int\\sqrt{1+(f\')^2}\\,dx\\)'], answer: 3 },
    { q: 'Surface of revolution about \\(x\\)-axis: \\(S=\\)', options: ['\\(\\pi\\int y\\,dx\\)', '\\(2\\pi\\int y\\,dx\\)', '\\(\\pi\\int y\\sqrt{1+(y\')^2}\\,dx\\)', '\\(2\\pi\\int y\\sqrt{1+(y\')^2}\\,dx\\)'], answer: 3 },
  ],
  amber: [
    { q: '\\(\\int_0^1 \\dfrac{dx}{\\sqrt{x}}\\) is improper at \\(0\\); it equals:', options: ['Diverges', '\\(\\infty\\)', '\\(1\\)', '\\(2\\)'], answer: 3 },
    { q: '\\(\\int\\dfrac{dx}{\\sqrt{4-x^2}}\\):', options: ['\\(\\arctan(x/2)\\)', '\\(\\operatorname{arcosh}(x/2)\\)', '\\(\\operatorname{arsinh}(x/2)\\)', '\\(\\arcsin(x/2)+C\\)'], answer: 3 },
    { q: 'Reduction \\(I_n=\\int_0^{\\pi/2}\\sin^n x\\,dx\\). Then \\(I_n=\\)', options: ['\\(I_{n-1}\\)', '\\(n\\cdot I_{n-2}\\)', '\\(\\cos^n(\\pi/2)\\)', '\\(\\frac{n-1}{n}I_{n-2}\\)'], answer: 3 },
    { q: 'Arc length of \\(y=\\tfrac{2}{3}x^{3/2}\\) from 0 to 3:', options: ['\\(6\\)', '\\(3\\sqrt{3}\\)', '\\(2\\pi\\)', '\\(14/3\\)'], answer: 3 },
    { q: 'Mean of \\(\\sin x\\) on \\([0,\\pi]\\):', options: ['\\(0\\)', '\\(\\pi/2\\)', '\\(1\\)', '\\(2/\\pi\\)'], answer: 3 },
  ],
  red: [
    { q: '\\(\\int_0^{\\infty}e^{-x}\\,dx\\) equals:', options: ['\\(0\\)','\\(e\\)','\\(\\infty\\)','\\(1\\)'], answer: 3 },
    { q: '\\(\\int_0^{\\infty}xe^{-x}\\,dx\\) equals:', options: ['\\(2\\)','\\(1\\)','\\(0\\)','\\(e\\)'], answer: 1 },
    { q: 'Volume of revolution about \\(x\\)-axis of \\(y=\\sqrt{x}\\) from 0 to 4:', options: ['\\(\\pi\\)','\\(4\\pi\\)','\\(8\\pi\\)','\\(16\\pi\\)'], answer: 2 },
    { q: 'The integrand \\(\\sqrt{1+(y\')^2}\\) arises because:', options: ['Chain rule','Formula conversion','Pythagoras in polar','Pythagoras applied to \\(ds^2=dx^2+dy^2\\)'], answer: 3 },
  ],
},

'1.10': {
  name: 'Differential Equations',
  green: [
    { q: 'An integrating factor for \\(dy/dx+P(x)y=Q(x)\\):', options: ['\\(Q(x)\\)', '\\(e^{-\\int P\\,dx}\\)', '\\(P(x)\\)', '\\(e^{\\int P(x)\\,dx}\\)'], answer: 3 },
    { q: 'The auxiliary equation of \\(ay\'\'+by\'+cy=0\\):', options: ['\\(ax^2+bx+c=0\\)', 'Always \\(y=0\\)', 'Linear', '\\(am^2+bm+c=0\\)'], answer: 3 },
    { q: 'Complex auxiliary roots \\(p\\pm qi\\) give CF:', options: ['\\(Ae^{px}+Be^{qx}\\)', '\\((Ax+B)e^{px}\\)', '\\(A\\cos qx+B\\sin qx\\)', '\\(e^{px}(A\\cos qx+B\\sin qx)\\)'], answer: 3 },
    { q: 'Repeated real root \\(m=k\\) gives CF:', options: ['\\(Ae^{kx}\\)', '\\(Ae^{kx}+Bxe^{kx}\\)', '\\((A+B)e^{kx}\\)', '\\((A+Bx)e^{kx}\\)'], answer: 3 },
    { q: 'General solution of \\(y\'\'+y=f(x)\\):', options: ['PI only', 'CF − PI', 'Just PI', 'CF + PI'], answer: 3 },
  ],
  amber: [
    { q: 'Solve \\(y\'+2y=0\\):', options: ['\\(y=A\\sin 2x\\)', '\\(y=Ax\\)', '\\(y=A+2x\\)', '\\(y=Ae^{-2x}\\)'], answer: 3 },
    { q: 'Auxiliary for \\(y\'\'-4y\'+4y=0\\):', options: ['\\(m=4\\) simple', 'Complex roots', '\\(m=0\\)', '\\(m=2\\) repeated'], answer: 3 },
    { q: 'PI trial for \\(y\'\'-y=e^{2x}\\):', options: ['\\(Axe^{2x}\\)', '\\(A\\cos 2x\\)', '\\(A+Bx\\)', '\\(Ae^{2x}\\)'], answer: 3 },
    { q: 'IF for \\(y\'+2y/x=x^3\\):', options: ['\\(e^x\\)', '\\(x\\)', '\\(x^3\\)', '\\(x^2\\)'], answer: 3 },
    { q: 'For coupled system \\(x\'=x+y, y\'=x-y\\), eliminate to get:', options: ['1st order ODE', '\\(x\'\'+x=0\\)', '\\(x\'=0\\)', '\\(x\'\'-2x=0\\)'], answer: 3 },
  ],
  red: [
    { q: 'If PI trial is in CF, multiply trial by:', options: ['\\(x\\) (or \\(x^2\\) if repeated clash)','\\(x^2\\) always','Nothing','\\(e^x\\)'], answer: 0 },
    { q: 'Newton\'s Law of Cooling \\(dT/dt=-k(T-T_{env})\\) has solution:', options: ['\\(T=T_{env}+kt\\)','\\(T=T_0+kt\\)','\\(T=e^{-kt}\\)','\\(T=T_{env}+Ce^{-kt}\\)'], answer: 3 },
    { q: 'Underdamped oscillator has aux roots:', options: ['Real positive','Real distinct','Real repeated','Complex with negative real part'], answer: 3 },
    { q: 'Resonance occurs when:', options: ['Frequency is zero','Damping is high','Driving frequency matches natural frequency','CF is a polynomial'], answer: 2 },
  ],
},

/* ═══════════════════════════════ MECHANICS MINOR ═══════════════════════════════ */

'M1.1': {
  name: 'Dimensional Analysis',
  green: [
    { q: 'Dimensions of force:', options: ['\\(ML^{-1}\\)', '\\(L/T\\)', '\\(MT^{-2}\\)', '\\(MLT^{-2}\\)'], answer: 3 },
    { q: 'Dimensions of velocity:', options: ['\\(T\\)', '\\(L\\)', '\\(MLT^{-1}\\)', '\\(LT^{-1}\\)'], answer: 3 },
    { q: 'Dimensions of energy:', options: ['\\(MLT^{-2}\\)', '\\(L^2T^{-1}\\)', '\\(ML^{-2}T^{-2}\\)', '\\(ML^2T^{-2}\\)'], answer: 3 },
    { q: 'Dimensions of power:', options: ['\\(ML^2T^{-2}\\)', '\\(MT^{-3}\\)', '\\(MLT^{-2}\\)', '\\(ML^2T^{-3}\\)'], answer: 3 },
    { q: 'Dimensionless quantity example:', options: ['Speed', 'Work', 'Momentum', 'Angle in radians'], answer: 3 },
  ],
  amber: [
    { q: 'An angle (radians) has dimensions:', options: ['\\(L\\)', '\\(L/T\\)', '\\(T^{-1}\\)', 'Dimensionless'], answer: 3 },
    { q: 'Checking \\(s=ut+\\tfrac{1}{2}at^2\\): all terms have dimensions:', options: ['\\(T\\)', '\\(M\\)', '\\(LT^{-1}\\)', '\\(L\\)'], answer: 3 },
    { q: 'Period of pendulum \\(T=k\\sqrt{l/g}\\) is dimensionally consistent because:', options: ['\\(kl/g=T\\)', 'Always', '\\(k^2=T\\)', 'Both sides have dimensions of time'], answer: 3 },
    { q: 'In \\(F=k m v^2/r\\), \\(k\\) must be:', options: ['\\(M\\)', '\\(T\\)', '\\(L\\)', 'Dimensionless'], answer: 3 },
    { q: 'If \\(E\\propto m^a v^b\\), dimensional analysis gives \\(a,b=\\)', options: ['\\(1,1\\)', '\\(2,1\\)', '\\(0,2\\)', '\\(1,2\\)'], answer: 3 },
  ],
  red: [
    { q: 'Dimensional analysis can find:', options: ['Exact constants','Numerical prefactors','Form of dependence on variables','Dimensionless scaling factors'], answer: 2 },
    { q: 'Dimensional analysis cannot:', options: ['Find dimensions','Check formulas','Find power dependencies','Determine dimensionless constants'], answer: 3 },
    { q: 'Angular frequency has dimensions:', options: ['\\(L\\)','\\(T\\)','Dimensionless','\\(T^{-1}\\)'], answer: 3 },
    { q: 'Trig/log/exp arguments must be:', options: ['Dimensionless','Integers','Small','In SI units'], answer: 0 },
  ],
},

'M1.2': {
  name: 'Work, Energy & Power',
  green: [
    { q: 'Work done by constant force over displacement:', options: ['\\(F/s\\)', '\\(Fs^2\\)', '\\(F+s\\)', '\\(Fs\\cos\\theta\\)'], answer: 3 },
    { q: 'Kinetic energy:', options: ['\\(mv\\)', '\\(mg h\\)', '\\(mv/2\\)', '\\(\\tfrac{1}{2}mv^2\\)'], answer: 3 },
    { q: 'Gravitational PE (near Earth):', options: ['\\(\\tfrac{1}{2}mgh\\)', '\\(m/h\\)', '\\(gh\\)', '\\(mgh\\)'], answer: 3 },
    { q: 'Power = ...', options: ['Work \\(\\times\\) time', 'Force \\(\\times\\) distance', 'Force/time', 'Work / time (or \\(Fv\\))'], answer: 3 },
    { q: 'SI unit of power:', options: ['newton', 'joule', 'pascal', 'watt'], answer: 3 },
  ],
  amber: [
    { q: 'Ball dropped from 5 m (\\(g=9.8\\)). Speed just before impact:', options: ['\\(5\\) m/s', '\\(9.8\\) m/s', '\\(7\\) m/s', '\\(\\sqrt{98}\\approx9.90\\) m/s'], answer: 3 },
    { q: 'Elastic PE in spring of stiffness \\(k\\) at extension \\(x\\):', options: ['\\(kx\\)', '\\(k/x\\)', '\\(kx^2\\)', '\\(\\tfrac{1}{2}kx^2\\)'], answer: 3 },
    { q: 'At top speed on level road with resistance \\(R\\) and power \\(P\\):', options: ['\\(P=R\\)', '\\(P/R=1\\)', '\\(v=P^2/R\\)', '\\(v=P/R\\)'], answer: 3 },
    { q: 'Work-energy theorem: \\(W_{\\text{total}}=\\)', options: ['\\(\\Delta(PE)\\)', '\\(\\Delta(p)\\)', '\\(0\\)', '\\(\\Delta(KE)\\)'], answer: 3 },
    { q: 'If \\(P=Fv\\) and \\(F=ma+R\\), on level track:', options: ['\\(a=v\\)', '\\(P=\\text{const}\\)', '\\(R=0\\)', '\\(P/v-R=ma\\)'], answer: 3 },
  ],
  red: [
    { q: 'Car mass \\(m=1000\\), power \\(P=20\\) kW, resistance \\(R=500\\) N. At \\(v=20\\) m/s, acceleration:', options: ['\\(1\\) m/s²','\\(0\\) m/s²','\\(0.5\\) m/s²','\\(0.5\\) m/s²'], answer: 3, explanation: 'F=1000 N, net=500, a=0.5' },
    { q: 'Elastic string modulus \\(\\lambda\\), natural length \\(\\ell_0\\), extension \\(x\\). EPE:', options: ['\\(\\lambda x\\)','\\(\\lambda x/\\ell_0\\)','\\(\\lambda x^2/\\ell_0\\)','\\(\\lambda x^2/(2\\ell_0)\\)'], answer: 3 },
    { q: 'Energy lost to friction = ', options: ['Friction × acceleration','0 (always)','\\(\\mu R\\)','Friction force × distance traveled'], answer: 3 },
    { q: 'Pulling with force at angle \\(\\theta\\) above horizontal: horizontal work:', options: ['\\(F\\sin\\theta\\cdot s\\)','\\(Fs\\)','\\(Fs/\\cos\\theta\\)','\\(F\\cos\\theta\\cdot s\\)'], answer: 3 },
  ],
},

'M1.3': {
  name: 'Impulse & Momentum',
  green: [
    { q: 'Momentum:', options: ['\\(mv^2\\)', '\\(m\\)', '\\(v\\)', '\\(mv\\)'], answer: 3 },
    { q: 'Impulse = ', options: ['\\(F\\)', '\\(\\Delta v\\)', '\\(m\\cdot\\text{time}\\)', '\\(F\\Delta t = \\Delta p\\)'], answer: 3 },
    { q: 'Coefficient of restitution \\(e\\):', options: ['\\(\\le 0\\)', '\\(>1\\)', '\\(\\ge0\\) only', '\\(0\\le e\\le 1\\)'], answer: 3 },
    { q: 'Perfectly elastic collision: \\(e=\\)', options: ['\\(0\\)', '\\(\\infty\\)', '\\(-1\\)', '\\(1\\)'], answer: 3 },
    { q: 'Inelastic collision: \\(e=\\)', options: ['\\(0.5\\)', '\\(1\\)', 'Undefined', '\\(0\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Momentum conservation in collision:', options: ['Kinetic energy conserved', '\\(p_1=p_2\\)', 'Only for \\(e=1\\)', '\\(m_1u_1+m_2u_2=m_1v_1+m_2v_2\\)'], answer: 3 },
    { q: 'Newton\'s law of restitution: \\(v_2-v_1=\\)', options: ['\\(e(u_1+u_2)\\)', '\\(e(u_1-u_2)\\)', '\\(0\\)', '\\(-e(u_2-u_1)\\) i.e. \\(v_2-v_1=e(u_1-u_2)\\)'], answer: 3 },
    { q: 'Ball of mass 2 kg moving 5 m/s hits stationary 3 kg, \\(e=0\\). Combined speed:', options: ['\\(5\\)', '\\(3\\)', '\\(1.67\\)', '\\(2\\) m/s'], answer: 3, explanation: '10=5v → v=2' },
    { q: 'Ball bouncing on floor, \\(e=0.5\\). After dropping from 2 m, next height:', options: ['\\(1\\)', '\\(2\\)', '\\(0.25\\)', '\\(0.5\\)'], answer: 3, explanation: 'e² × h = 0.25·2 = 0.5' },
    { q: 'Oblique impact with smooth wall: parallel component of velocity is:', options: ['Zero', 'Reversed', '\\(e\\times\\) original', 'Unchanged'], answer: 3 },
  ],
  red: [
    { q: 'KE lost in collision = ', options: ['\\(m_1+m_2\\)','\\(\\tfrac{1}{2}\\frac{m_1m_2}{m_1+m_2}(u_1-u_2)^2(1-e^2)\\)','Momentum','0'], answer: 1 },
    { q: 'For successive bounces with \\(e<1\\), total distance converges because:', options: ['Gravity decreases','\\(e^2>1\\)','Geometric series with ratio \\(e^2<1\\)','No friction'], answer: 2 },
    { q: 'Impulse as vector equals:', options: ['Vector change in momentum','\\(m\\cdot\\Delta v_x\\) only','\\(\\Delta(m)\\)','\\(|v|m\\)'], answer: 0 },
    { q: 'Elastic collision (\\(e=1\\)) between equal masses, one at rest:', options: ['Both stop','Both continue','First speeds up','Moving ball stops; other moves off with same velocity'], answer: 3 },
  ],
},

'M1.4': {
  name: 'Circular Motion',
  green: [
    { q: 'Angular velocity \\(\\omega\\) relates to linear speed by:', options: ['\\(v=\\omega\\)', '\\(v=\\omega^2 r\\)', '\\(v=\\omega/r\\)', '\\(v=r\\omega\\)'], answer: 3 },
    { q: 'Centripetal acceleration:', options: ['\\(v/r\\)', '\\(\\omega r\\)', '\\(vr\\)', '\\(v^2/r\\) or \\(r\\omega^2\\)'], answer: 3 },
    { q: 'Centripetal force is directed:', options: ['Tangentially', 'Outward', 'At 45°', 'Towards the centre'], answer: 3 },
    { q: 'Period of circular motion:', options: ['\\(\\omega\\)', '\\(1/\\omega\\)', '\\(r\\)', '\\(2\\pi/\\omega\\)'], answer: 3 },
    { q: 'Units of angular velocity:', options: ['m/s', 's', 'Hz', 'rad/s'], answer: 3 },
  ],
  amber: [
    { q: 'Conical pendulum: \\(\\tan\\theta=\\)', options: ['\\(v/g\\)', '\\(r/g\\)', '\\(\\omega g\\)', '\\(r\\omega^2/g\\)'], answer: 3 },
    { q: 'Banked track design speed: \\(\\tan\\alpha=\\)', options: ['\\(v\\)', '\\(g/v^2\\)', '\\(r/v\\)', '\\(v^2/(rg)\\)'], answer: 3 },
    { q: 'Vertical circle: minimum speed at top requires:', options: ['\\(v=0\\)', '\\(v\\geq 0\\)', '\\(v=g\\)', '\\(v^2\\ge gr\\)'], answer: 3 },
    { q: 'Coin on turntable: friction supplies:', options: ['Weight', 'Tangential acceleration only', '\\(mg\\)', 'The centripetal force'], answer: 3 },
    { q: 'Car rounding curve at \\(v\\), radius \\(r\\): min coefficient of friction \\(\\mu=\\)', options: ['\\(v\\)', '\\(v^2/r\\)', '\\(rg\\)', '\\(v^2/(rg)\\)'], answer: 3 },
  ],
  red: [
    { q: 'At top of vertical loop, tension is 0 when:', options: ['\\(v=0\\)','Always','Never','\\(v^2=gr\\)'], answer: 3 },
    { q: 'Conservation of energy in vertical circle gives:', options: ['\\(\\tfrac{1}{2}v^2+gh=\\) const','No constraint','Energy is lost to friction','KE stays constant'], answer: 0 },
    { q: 'A string/rod: at top of circle, string goes slack when:', options: ['Speed drops below \\(\\sqrt{gr}\\)','Tension positive','Always','Speed is zero'], answer: 0 },
    { q: 'For "just completes circle" on a light rod (not string): speed at top:', options: ['\\(\\sqrt{gr}\\)','Must be \\(>\\sqrt{gr}\\)','Infinity','Can be 0'], answer: 3 },
  ],
},

'M1.5': {
  name: 'Centres of Mass',
  green: [
    { q: 'For a system: \\(\\bar{x}=\\)', options: ['Mean of \\(x_i\\)', '\\(\\sum x_i\\)', '\\(n\\sum m_i x_i\\)', '\\(\\sum m_ix_i/\\sum m_i\\)'], answer: 3 },
    { q: 'CoM of uniform rod length \\(L\\):', options: ['At end', '\\(L/3\\)', '\\(L/4\\)', 'At \\(L/2\\)'], answer: 3 },
    { q: 'CoM of uniform triangle:', options: ['Midpoint of base', 'Orthocentre', 'Circumcentre', 'Centroid'], answer: 3 },
    { q: 'CoM of semicircular lamina radius \\(r\\):', options: ['\\(r/3\\)', '\\(r/2\\)', '\\(r\\)', '\\(4r/(3\\pi)\\) from diameter'], answer: 3 },
    { q: 'CoM of a solid hemisphere of radius \\(r\\), from flat face:', options: ['\\(r/2\\)', '\\(r\\)', '\\(2r/3\\)', '\\(3r/8\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Composite body with hole: treat the hole as:', options: ['Normal mass', 'Zero', 'Full mass', 'Negative mass'], answer: 3 },
    { q: 'CoM of solid cone (height \\(h\\)) from base:', options: ['\\(h/3\\)', '\\(h/2\\)', '\\(2h/3\\)', '\\(h/4\\)'], answer: 3 },
    { q: 'Object suspended freely: CoM sits:', options: ['Above', 'On suspension point', 'Off to one side', 'Directly below the suspension point'], answer: 3 },
    { q: 'L-shape lamina CoM found by:', options: ['Average of endpoints', 'Just the midpoint', 'Density', 'Summing area-weighted centroids of rectangles'], answer: 3 },
    { q: 'CoM of hollow hemispherical shell radius \\(r\\):', options: ['\\(r/3\\)', '\\(r/4\\)', '\\(3r/8\\)', '\\(r/2\\)'], answer: 3 },
  ],
  red: [
    { q: 'Body topples when:', options: ['Friction is low','Mass is large','Vertical through CoM falls outside the base','Centre is high'], answer: 2 },
    { q: 'Body slides before toppling if \\(\\mu < a/h\\) where \\(a\\) is half-base, \\(h\\) is CoM height — slide vs. topple angle:', options: ['Depends on mass','Always topples','Always slides','Compare \\(\\mu\\) with \\(a/h\\)'], answer: 3 },
    { q: 'For a region with \\(y=f(x)\\): \\(\\bar{x}=\\)', options: ['Average','0','\\(\\int xf\\,dx/\\int f\\,dx\\)','Same as \\(\\bar{y}\\)'], answer: 2 },
    { q: 'Solid of revolution \\(y=f(x)\\) about \\(x\\)-axis: \\(\\bar{x}=\\)', options: ['Same as lamina','\\(\\int f\\,dx\\)','\\(\\int x\\cdot y^2\\,dx / \\int y^2\\,dx\\)','Centroid of curve'], answer: 2 },
  ],
},

/* ═══════════════════════════════ STATISTICS MINOR ═══════════════════════════════ */

'S1.1': {
  name: 'Discrete Random Variables',
  green: [
    { q: 'For discrete \\(X\\): \\(\\sum P(X=x)=\\)', options: ['\\(\\mu\\)', '\\(0\\)', 'Any positive number', '\\(1\\)'], answer: 3 },
    { q: '\\(E(X)=\\)', options: ['\\(\\sum P(X=x)\\)', '\\(\\max x\\)', '\\(0\\)', '\\(\\sum x P(X=x)\\)'], answer: 3 },
    { q: '\\(\\operatorname{Var}(X)=\\)', options: ['\\(E(X)^2\\)', '\\(|\\mu|\\)', '\\(\\sigma\\)', '\\(E(X^2)-\\mu^2\\)'], answer: 3 },
    { q: '\\(E(aX+b)=\\)', options: ['\\(aE(X)\\)', '\\(E(X)+b\\)', '\\(a+b\\)', '\\(aE(X)+b\\)'], answer: 3 },
    { q: '\\(\\operatorname{Var}(aX+b)=\\)', options: ['\\(a\\operatorname{Var}(X)\\)', '\\(\\operatorname{Var}(X)+b\\)', '\\(a+b\\)', '\\(a^2\\operatorname{Var}(X)\\)'], answer: 3 },
  ],
  amber: [
    { q: 'For \\(X\\sim B(n,p)\\): \\(E(X)=\\)', options: ['\\(p\\)', '\\(nq\\)', '\\(n(1-p)\\)', '\\(np\\)'], answer: 3 },
    { q: 'For \\(X\\sim B(n,p)\\): \\(\\operatorname{Var}(X)=\\)', options: ['\\(n^2p\\)', '\\(np\\)', '\\(np\\)', '\\(np(1-p)\\)'], answer: 3 },
    { q: 'For independent \\(X,Y\\): \\(\\operatorname{Var}(X-Y)=\\)', options: ['\\(\\operatorname{Var}(X)-\\operatorname{Var}(Y)\\)', '\\(|\\operatorname{Var}(X)-\\operatorname{Var}(Y)|\\)', '0', '\\(\\operatorname{Var}(X)+\\operatorname{Var}(Y)\\)'], answer: 3 },
    { q: '\\(X\\) uniform on \\(\\{1,\\ldots,n\\}\\): \\(E(X)=\\)', options: ['\\(n/2\\)', '\\(1\\)', '\\(n\\)', '\\((n+1)/2\\)'], answer: 3 },
    { q: 'Uniform on \\(\\{1,\\ldots,n\\}\\): \\(\\operatorname{Var}(X)=\\)', options: ['\\(n/2\\)', '\\((n+1)/12\\)', '\\(n^2/12\\)', '\\((n^2-1)/12\\)'], answer: 3 },
  ],
  red: [
    { q: 'Joint pmf: \\(X\\) and \\(Y\\) independent iff:', options: ['Marginals equal','\\(P(X=x,Y=y)=P(X=x)P(Y=y)\\) for all \\(x,y\\)','Always','\\(P(X,Y)=P(X)+P(Y)\\)'], answer: 1 },
    { q: 'Covariance \\(\\operatorname{Cov}(X,Y)=\\)', options: ['\\(\\sqrt{\\operatorname{Var}(X)\\operatorname{Var}(Y)}\\)','\\(\\operatorname{Var}(X+Y)/2\\)','\\(E(XY)-E(X)E(Y)\\)','\\(E(X)E(Y)\\)'], answer: 2 },
    { q: '\\(\\operatorname{Var}(X+Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)+\\)', options: ['\\(\\mu_X\\mu_Y\\)','\\(\\operatorname{Cov}(X,Y)\\)','0','\\(2\\operatorname{Cov}(X,Y)\\)'], answer: 3 },
    { q: 'If \\(X\\perp Y\\) then \\(\\operatorname{Cov}(X,Y)=\\)', options: ['\\(\\mu_X\\)','1','\\(0\\)','Undefined'], answer: 2 },
  ],
},

'S1.2': {
  name: 'Poisson Distribution',
  green: [
    { q: 'Poisson pmf:', options: ['\\(\\binom{n}{r}p^r(1-p)^{n-r}\\)', '\\(e^r\\lambda/r!\\)', '\\(r!e^{-\\lambda}\\)', '\\(\\dfrac{e^{-\\lambda}\\lambda^r}{r!}\\)'], answer: 3 },
    { q: '\\(E(X)\\) for \\(\\operatorname{Po}(\\lambda)\\):', options: ['\\(\\lambda^2\\)', '\\(1\\)', '\\(1/\\lambda\\)', '\\(\\lambda\\)'], answer: 3 },
    { q: '\\(\\operatorname{Var}(X)\\) for \\(\\operatorname{Po}(\\lambda)\\):', options: ['\\(\\lambda^2\\)', '\\(1\\)', '\\(\\sqrt\\lambda\\)', '\\(\\lambda\\)'], answer: 3 },
    { q: 'Independent \\(\\operatorname{Po}(\\lambda_1)+\\operatorname{Po}(\\lambda_2)=\\)', options: ['\\(\\operatorname{Po}(\\lambda_1-\\lambda_2)\\)', '\\(\\operatorname{Po}(\\lambda_1\\lambda_2)\\)', '\\(\\operatorname{Po}(|\\lambda_1-\\lambda_2|)\\)', '\\(\\operatorname{Po}(\\lambda_1+\\lambda_2)\\)'], answer: 3 },
    { q: 'Poisson models events which are:', options: ['Always occurring', 'Bunched', 'Negatively correlated', 'Independent with constant rate'], answer: 3 },
  ],
  amber: [
    { q: 'Events at rate 2/min: probability of 0 in 1 min:', options: ['\\(0\\)', '\\(1/2\\)', '\\(2e^{-2}\\)', '\\(e^{-2}\\)'], answer: 3 },
    { q: 'Approximating \\(B(100,0.02)\\) by Poisson: \\(\\lambda=\\)', options: ['\\(100\\)', '\\(0.02\\)', '\\(50\\)', '\\(2\\)'], answer: 3 },
    { q: 'For \\(X\\sim\\operatorname{Po}(3)\\): \\(P(X=2)=\\)', options: ['\\(3e^{-3}/2\\)', '\\(3e^{-3}\\)', '\\(9e^{-3}\\)', '\\(9e^{-3}/2\\)'], answer: 3 },
    { q: 'Events at rate 4/hour: probability of exactly 1 in 15 min:', options: ['\\(4e^{-1}\\)', '\\(e^{-4}\\)', '\\(e^{-15}\\)', '\\(e^{-1}\\) (since rate in 15 min is 1)'], answer: 3 },
    { q: 'Testing \\(H_0:\\lambda=5\\), \\(H_1:\\lambda>5\\), observe \\(X=10\\). The p-value is:', options: ['\\(P(X=10)\\)', '\\(P(X\\le 10|\\lambda=5)\\)', 'Not defined', '\\(P(X\\ge 10|\\lambda=5)\\)'], answer: 3 },
  ],
  red: [
    { q: 'Rare-events rule: \\(B(n,p)\\approx\\operatorname{Po}(np)\\) requires:', options: ['\\(n\\) large, \\(p\\) small','\\(n\\) small','Always','\\(p\\) close to 1'], answer: 0 },
    { q: 'For a Poisson test 2-tailed, we compare:', options: ['Mean of test','Observed to \\(\\lambda\\)','Just upper tail','The smaller tail probability to \\(\\alpha/2\\)'], answer: 3 },
    { q: 'Poisson process waiting times follow:', options: ['Poisson','Normal','Exponential','Uniform'], answer: 2 },
    { q: 'Between arrivals with rate \\(\\lambda\\), mean wait:', options: ['\\(\\lambda\\)','\\(\\lambda^2\\)','0','\\(1/\\lambda\\)'], answer: 3 },
  ],
},

'S1.3': {
  name: 'Bivariate Data & Correlation',
  green: [
    { q: 'Pearson product-moment correlation coefficient \\(r\\) satisfies:', options: ['\\(r\\in\\mathbb{R}\\)', '\\(r\\ge0\\)', '\\(r\\) is any number', '\\(-1\\le r\\le1\\)'], answer: 3 },
    { q: '\\(r=1\\) means:', options: ['No correlation', 'Negative linear', 'Quadratic', 'Perfect positive linear'], answer: 3 },
    { q: '\\(r=0\\) means:', options: ['Strong negative', 'Perfect', 'Zero correlation of any kind', 'No linear correlation'], answer: 3 },
    { q: 'Spearman rank correlation \\(\\rho_s\\) is based on:', options: ['Means', 'Medians', 'Raw data', 'Ranks of the data'], answer: 3 },
    { q: 'Regression line \\(y=a+bx\\) through \\((\\bar{x},\\bar{y})\\) passes through:', options: ['Origin', 'Highest point', 'Median', '\\((\\bar{x},\\bar{y})\\)'], answer: 3 },
  ],
  amber: [
    { q: 'PMCC formula uses:', options: ['Sum of \\(x\\) and \\(y\\) only', 'Ranks', 'Percentiles', '\\(S_{xy}/\\sqrt{S_{xx}S_{yy}}\\)'], answer: 3 },
    { q: 'Spearman formula (no ties): \\(\\rho_s=1-\\)', options: ['\\(\\sum d/n\\)', '\\(d^2\\)', 'Nothing', '\\(6\\sum d^2/(n^3-n)\\)'], answer: 3 },
    { q: 'Null hypothesis for test of zero correlation:', options: ['\\(\\mu=0\\)', '\\(\\sigma=0\\)', '\\(r=1\\)', '\\(\\rho=0\\)'], answer: 3 },
    { q: 'Regression line of \\(y\\) on \\(x\\) minimises:', options: ['Sum of \\(x-\\bar{x}\\)', 'Horizontal distances', 'Perpendicular distances', 'Sum of squared vertical residuals'], answer: 3 },
    { q: 'Slope \\(b\\) in regression \\(y=a+bx\\):', options: ['\\(S_{xy}+S_{xx}\\)', '\\(S_{xx}/S_{yy}\\)', 'PMCC', '\\(S_{xy}/S_{xx}\\)'], answer: 3 },
  ],
  red: [
    { q: 'Correlation does not imply:', options: ['Association','Causation','Positive slope','Linearity'], answer: 1 },
    { q: 'If \\(r\\) is close to 0, data:', options: ['Is linear','Is noisy','Has outliers','May have no linear relation (possible nonlinear pattern)'], answer: 3 },
    { q: 'PMCC is unchanged under:', options: ['Absolute value','Linear transformations of \\(x\\) and \\(y\\) (sign preserved)','Negating \\(y\\)','Adding outliers'], answer: 1 },
    { q: 'Spearman detects:', options: ['Only linear','Only quadratic','Causation','Monotonic relationships'], answer: 3 },
  ],
},

'S1.4': {
  name: 'Chi-squared Tests',
  green: [
    { q: '\\(\\chi^2\\) statistic:', options: ['\\(\\sum(O-E)\\)', '\\(\\sum(O-E)^2\\)', '\\(\\sum(O-E)^2/O\\)', '\\(\\sum(O-E)^2/E\\)'], answer: 3 },
    { q: '\\(\\chi^2\\) is always:', options: ['Zero', 'Negative', 'Symmetric', 'Non-negative'], answer: 3 },
    { q: 'Degrees of freedom for goodness-of-fit to \\(k\\) classes:', options: ['\\(k\\)', '\\(k+1\\)', '\\(k-2\\)', '\\(k-1\\) minus number of estimated parameters'], answer: 3 },
    { q: 'Contingency table \\(r\\times c\\): df = ', options: ['\\(rc\\)', '\\(r+c\\)', '\\(rc-1\\)', '\\((r-1)(c-1)\\)'], answer: 3 },
    { q: 'Yates\' correction is for:', options: ['Any df', 'Large df', 'Very small samples', '\\(df=1\\) with small counts'], answer: 3 },
  ],
  amber: [
    { q: 'Test is valid when:', options: ['\\(E_i=0\\) OK', '\\(O_i\\ge5\\)', 'Any \\(O\\)', 'All \\(E_i\\ge5\\) (pool if needed)'], answer: 3 },
    { q: 'Expected under independence: \\(E_{ij}=\\)', options: ['\\(\\text{row}_i\\)', '\\(\\text{col}_j\\)', '\\(N/rc\\)', '(row × col)/\\(N\\)'], answer: 3 },
    { q: 'Critical value exceeded → ', options: ['Accept \\(H_0\\)', 'Nothing', 'Always accept \\(H_1\\)', 'Reject \\(H_0\\)'], answer: 3 },
    { q: 'Parameters estimated from data reduce df by:', options: ['0', '1 only', '2 each', '1 per parameter'], answer: 3 },
    { q: '\\(\\chi^2\\) test is:', options: ['Two-tailed', 'Small-sample', 'Normal-based', 'Always one-tailed (upper)'], answer: 3 },
  ],
  red: [
    { q: 'For \\(2\\times 2\\) table with Yates:', options: ['\\(\\sum(O-E)^2/E\\)','Subtract 1','\\(\\sum(|O-E|-0.5)^2/E\\)','Same as large'], answer: 2 },
    { q: 'If observed = expected everywhere, \\(\\chi^2=\\)', options: ['1','\\(\\infty\\)','Critical value','0'], answer: 3 },
    { q: '\\(\\chi^2\\) is approximately chi-squared distribution because:', options: ['It is Poisson','It sums squares','By symmetry','CLT: \\((O-E)/\\sqrt{E}\\approx N(0,1)\\)'], answer: 3 },
    { q: 'A very small \\(\\chi^2\\) (much smaller than expected) might indicate:', options: ['Too many d.f.','Data too good a fit — possibly fudged','Obviously correct','Test failure'], answer: 1 },
  ],
},

'S1.5': {
  name: 'Non-parametric Tests',
  green: [
    { q: 'Non-parametric tests:', options: ['Assume normality', 'Need large \\(n\\)', 'Test variance only', 'Make no or few distributional assumptions'], answer: 3 },
    { q: 'Sign test uses:', options: ['Sum of ranks', 'Mean', 'Variance', 'Number of positive vs. negative signs'], answer: 3 },
    { q: 'Wilcoxon signed-rank test ranks:', options: ['Raw values', 'Squares', 'Proportions', 'Absolute differences'], answer: 3 },
    { q: 'Wilcoxon rank-sum (Mann–Whitney) tests:', options: ['Two variances', 'Correlation', 'Independence', 'Two independent samples'], answer: 3 },
    { q: 'Null hypothesis for paired sign test:', options: ['Mean diff = 0', 'Variance = 1', 'Data normal', 'Median of differences = 0'], answer: 3 },
  ],
  amber: [
    { q: 'Sign test: under \\(H_0\\), number of positives \\(\\sim\\)', options: ['Poisson', 'Normal', 'Geometric', '\\(B(n,0.5)\\)'], answer: 3 },
    { q: 'Wilcoxon signed-rank: ignore pairs with:', options: ['Large difference', 'Outliers', 'Missing values', 'Zero difference'], answer: 3 },
    { q: 'Wilcoxon signed-rank statistic = ', options: ['Sum of all ranks', 'Median', 'Number of positives', 'Smaller of sum of positive / negative signed ranks'], answer: 3 },
    { q: 'Mann–Whitney \\(U\\): for samples \\(n_1,n_2\\), min value is:', options: ['\\(n_1n_2\\)', '\\(n_1+n_2\\)', 'Always 0', '0'], answer: 3 },
    { q: 'Non-parametric tests are:', options: ['Always more powerful', 'Assumption-heavy', 'Faster', 'Less powerful than \\(t\\)-test when assumptions hold, but robust'], answer: 3 },
  ],
  red: [
    { q: 'Use sign test rather than Wilcoxon signed-rank when:', options: ['Small \\(n\\)','Data is normal','Only ordinal data (cannot rank differences)','Paired data'], answer: 2 },
    { q: 'Wilcoxon rank-sum ranks all observations from both groups together, then:', options: ['Counts ties','Averages','Compares means','Sums the ranks in one group and compares'], answer: 3 },
    { q: 'Advantages of non-parametric tests:', options: ['Robust to outliers and non-normality','Smaller \\(\\alpha\\)','Simpler computation','Always more powerful'], answer: 0 },
    { q: 'Ties are handled in Wilcoxon by:', options: ['Random assignment','Rank 0','Ignoring','Assigning average of tied ranks'], answer: 3 },
  ],
},

/* ═══════════════════════════════ MODELLING WITH ALGORITHMS ═══════════════════════════════ */

'A1.1': {
  name: 'Graphs & Networks',
  green: [
    { q: 'A graph has:', options: ['Only edges', 'Only vertices', 'Numbers', 'Vertices and edges'], answer: 3 },
    { q: 'Degree of a vertex = ', options: ['Coordinate', 'Weight', 'Number of vertices', 'Number of incident edges'], answer: 3 },
    { q: 'Complete graph \\(K_n\\) has edges:', options: ['\\(n\\)', '\\(n^2\\)', '\\(2n\\)', '\\(n(n-1)/2\\)'], answer: 3 },
    { q: 'A tree on \\(n\\) vertices has edges:', options: ['\\(n\\)', '\\(n^2\\)', '\\(n+1\\)', '\\(n-1\\)'], answer: 3 },
    { q: 'Sum of all degrees = ', options: ['\\(|V|\\)', '\\(|V|-1\\)', '\\(|V|+|E|\\)', '\\(2|E|\\)'], answer: 3 },
  ],
  amber: [
    { q: 'Eulerian circuit exists iff graph connected and:', options: ['\\(K_n\\)', 'Hamiltonian', 'Has odd vertices', 'All vertices have even degree'], answer: 3 },
    { q: 'Semi-Eulerian (Eulerian trail) needs exactly:', options: ['0 odd vertices', 'All odd', '1 odd', '2 odd-degree vertices'], answer: 3 },
    { q: 'Euler\'s formula for connected planar: \\(V-E+F=\\)', options: ['0', '1', '\\(|E|\\)', '2'], answer: 3 },
    { q: 'A bipartite graph has no:', options: ['Trees', 'Connected components', 'Degrees', 'Odd cycles'], answer: 3 },
    { q: 'Number of spanning trees in \\(K_3\\):', options: ['1', '2', '9', '3'], answer: 3 },
  ],
  red: [
    { q: 'Hamiltonian cycle visits:', options: ['Every vertex exactly once, returning to start','Every vertex twice','Every edge once','Only adjacent'], answer: 0 },
    { q: 'No simple test for Hamiltonicity — problem is:', options: ['Solvable always','Trivial','NP-complete','Polynomial'], answer: 2 },
    { q: 'Planar graph satisfies \\(E\\le\\)', options: ['\\(V\\)','\\(V^2\\)','\\(V-1\\)','\\(3V-6\\)'], answer: 3 },
    { q: 'Smallest non-planar graphs:', options: ['\\(K_3\\)','\\(K_5\\) and \\(K_{3,3}\\)','Tree','\\(K_4\\)'], answer: 1 },
  ],
},

'A1.2': {
  name: 'Network Algorithms',
  green: [
    { q: 'Minimum Spanning Tree: choose edges to:', options: ['Maximise length', 'Include all cycles', 'Minimise vertex count', 'Connect all vertices, minimise total weight, no cycles'], answer: 3 },
    { q: 'Prim\'s algorithm starts:', options: ['From any edge', 'At a random vertex each step', 'Sorts edges', 'At a single vertex, extends by nearest'], answer: 3 },
    { q: 'Kruskal\'s algorithm processes edges:', options: ['In any order', 'Random', 'By vertex degree', 'In increasing order of weight, skipping cycles'], answer: 3 },
    { q: 'Dijkstra finds:', options: ['MST', 'Eulerian trail', 'Hamilton cycle', 'Shortest path from source'], answer: 3 },
    { q: 'Dijkstra assumes:', options: ['Planar graph', 'Negative weights OK', 'Unweighted only', 'Non-negative weights'], answer: 3 },
  ],
  amber: [
    { q: 'Route inspection: if graph has all even degrees, optimal tour weight = ', options: ['Half total', 'Plus repeats', '0', 'Total edge weight (Eulerian)'], answer: 3 },
    { q: 'Chinese Postman with 2 odd vertices: repeat shortest path between them:', options: ['Many times', 'Nothing repeated', 'Longest path', 'Shortest path'], answer: 3 },
    { q: 'TSP lower bound by delete-vertex method uses:', options: ['Hamilton cycle', 'Shortest spanning tree', 'Eulerian trail', 'MST of remaining + two shortest edges at deleted vertex'], answer: 3 },
    { q: 'Nearest-neighbour TSP heuristic: start and:', options: ['Go to farthest', 'Random choice', 'Always backtrack', 'Go to nearest unvisited'], answer: 3 },
    { q: 'Dijkstra labels: each vertex gets a:', options: ['Color', 'Two sublabels', 'Predecessor only', 'Temporary label updated until made permanent'], answer: 3 },
  ],
  red: [
    { q: 'Prim vs Kruskal: results are:', options: ['Always different','Depend on weights','Prim is faster','Always same MST weight (tree may differ if ties)'], answer: 3 },
    { q: 'TSP upper bound via nearest-neighbour is:', options: ['Exact','Lower bound','Meaningless','Heuristic, may not be optimal'], answer: 3 },
    { q: 'Dijkstra\'s complexity is typically:', options: ['\\(O(2^V)\\)','\\(O(1)\\)','\\(O(V)\\)','\\(O(E\\log V)\\) or \\(O(V^2)\\)'], answer: 3 },
    { q: 'Route inspection needs:', options: ['Connected graph','MST','Planarity','Hamiltonicity'], answer: 0 },
  ],
},

'A1.3': {
  name: 'Linear Programming',
  green: [
    { q: 'LP seeks to optimise:', options: ['A quadratic', 'Any function', 'Absolute values', 'A linear objective subject to linear constraints'], answer: 3 },
    { q: 'Decision variables are typically:', options: ['Negative only', 'Integer', 'Bounded only', 'Non-negative'], answer: 3 },
    { q: 'Feasible region: set of points that:', options: ['Maximise the objective', 'Are integer', 'Are on the objective line', 'Satisfy all constraints'], answer: 3 },
    { q: 'Optimal solution of an LP lies at:', options: ['Centre of region', 'Any point', 'Edge only', 'A vertex (basic solution)'], answer: 3 },
    { q: 'The Simplex method:', options: ['Random walk', 'Uses graphs', 'Solves nonlinear', 'Moves vertex-to-vertex improving objective'], answer: 3 },
  ],
  amber: [
    { q: 'Slack variable converts \\(\\le\\) into:', options: ['\\(=0\\)', '\\(\\geq\\)', 'Nothing', 'Equality with non-negative slack added'], answer: 3 },
    { q: 'In Simplex, pivot column chosen as:', options: ['Any column', 'Smallest entry', 'Largest ratio', 'Most negative entry in objective row'], answer: 3 },
    { q: 'Pivot row chosen by:', options: ['Largest', 'Random', 'Column with zero', 'Smallest non-negative ratio (RHS / pivot col)'], answer: 3 },
    { q: 'If objective row has no negative entries:', options: ['Iterate again', 'Infeasible', 'Error', 'Optimal solution reached'], answer: 3 },
    { q: 'A tight constraint has slack:', options: ['Positive', 'Infinite', 'Negative', 'Zero'], answer: 3 },
  ],
  red: [
    { q: 'Graphical method works for:', options: ['2 variables','Any LP','3 variables','Simplex only'], answer: 0 },
    { q: 'LP may have:', options: ['No feasible region, unbounded optimum, or infinitely many solutions','Negative infeasible','Always finite optimum','Only one solution'], answer: 0 },
    { q: 'Integer Programming (LP with integer constraints) is:', options: ['Same as LP','Easier','Always solvable by graphical','Harder (NP-hard in general)'], answer: 3 },
    { q: 'Artificial variables are used for:', options: ['\\(\\geq\\) or \\(=\\) constraints (Big-M method)','Slack','\\(\\le\\) constraints','Linear only'], answer: 0 },
  ],
},

'A1.4': {
  name: 'Critical Path Analysis',
  green: [
    { q: 'Activity-on-arc network shows:', options: ['Resources', 'Only costs', 'Random paths', 'Activities as arcs, events at nodes'], answer: 3 },
    { q: 'Earliest event time computed via:', options: ['Backward pass', 'Random', 'Subtraction', 'Forward pass from start'], answer: 3 },
    { q: 'Latest event time computed via:', options: ['Forward pass', 'Random', 'Addition', 'Backward pass from end'], answer: 3 },
    { q: 'Critical path is the:', options: ['Shortest', 'Any path', 'Tree', 'Longest path through the network'], answer: 3 },
    { q: 'Float of a critical activity:', options: ['Positive', 'Negative', 'Undefined', 'Zero'], answer: 3 },
  ],
  amber: [
    { q: 'Total float of activity (i,j):', options: ['\\(t_j - t_i\\)', 'Duration', 'Earliest - latest', '\\(LT_j - ET_i -\\) duration'], answer: 3 },
    { q: 'Dummy activities:', options: ['Have cost', 'Impossible', 'Are deleted', 'Have zero duration, used for dependency only'], answer: 3 },
    { q: 'Gantt chart represents:', options: ['Cycles', 'Probabilities', 'Cost', 'Activities as horizontal bars over time'], answer: 3 },
    { q: 'Scheduling with resource constraint may:', options: ['Shorten critical path', 'Not affect time', 'Remove dummies', 'Lengthen project time'], answer: 3 },
    { q: 'Precedence table describes:', options: ['Durations only', 'Resources', 'Events', 'Which activities must precede others'], answer: 3 },
  ],
  red: [
    { q: 'PERT uses:', options: ['Uniform','Normal','Deterministic only','Three-point (optimistic, most likely, pessimistic) estimates'], answer: 3 },
    { q: 'Crashing an activity:', options: ['Reduces float only','Shortens duration at extra cost','Delays project','Has no cost'], answer: 1 },
    { q: 'Independent float is:', options: ['Always positive','Same as total','Greater than total','Float usable without affecting successors'], answer: 3 },
    { q: 'A project\'s duration equals:', options: ['The critical-path length','Shortest path','Sum of all durations','Mean duration'], answer: 0 },
  ],
},

'A1.5': {
  name: 'Simulation',
  green: [
    { q: 'Simulation is useful when:', options: ['Analytical is easy', 'Random not involved', 'Only small problems', 'Problem is too complex for analytical solution'], answer: 3 },
    { q: 'Random numbers for simulation come from:', options: ['Mean', 'Variance', 'Any sequence', 'Uniform distribution (pseudo-random generator)'], answer: 3 },
    { q: 'Monte Carlo simulation uses:', options: ['One trial', 'Deterministic inputs', 'Graph theory', 'Repeated random trials'], answer: 3 },
    { q: 'A queue simulation tracks:', options: ['Only arrivals', 'Service only', 'Cost', 'Arrivals, service times, queue length over time'], answer: 3 },
    { q: 'Simulation outputs typically:', options: ['Always exact', 'Single values', 'No variance', 'Estimates with sampling variance'], answer: 3 },
  ],
  amber: [
    { q: 'Using \\(U\\sim U(0,1)\\), simulate a Bernoulli(0.3) by:', options: ['\\(U+0.3\\)', 'Sign', 'Always 1', 'Indicator that \\(U<0.3\\)'], answer: 3 },
    { q: 'Inverse transform method: use:', options: ['Mean', 'Random variance', 'Sampling', 'Inverse of CDF'], answer: 3 },
    { q: 'Variance reduction technique:', options: ['Make more runs', 'Increase \\(n\\)', 'Smaller intervals', 'Antithetic variates / common random numbers'], answer: 3 },
    { q: 'Seeding ensures:', options: ['Only fast execution', 'Randomness', 'No randomness', 'Reproducibility of simulation'], answer: 3 },
    { q: 'Poisson arrivals can be simulated via:', options: ['Uniform directly', 'Normal approximation', 'Sum of Bernoullis', 'Exponential inter-arrival times'], answer: 3 },
  ],
  red: [
    { q: 'Convergence of Monte Carlo estimate:', options: ['\\(O(1/n)\\)','\\(O(1/\\sqrt{n})\\)','\\(O(\\log n)\\)','\\(O(1)\\)'], answer: 1 },
    { q: 'Queue with single server: Little\'s law \\(L=\\lambda W\\) relates:', options: ['Only service times','Time and cost','Space and rate','Mean queue length, arrival rate, mean wait'], answer: 3 },
    { q: 'A deterministic queue system has:', options: ['Exponential arrivals','Same results','Random outputs','Fixed arrival and service times'], answer: 3 },
    { q: 'Simulation cannot:', options: ['Give bounds','Help design','Use random data','Replace a proven theorem'], answer: 3 },
  ],
},

}; // end FM_OCR_B_MCQ
