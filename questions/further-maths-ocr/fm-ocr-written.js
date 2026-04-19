// Further Maths OCR A - Written diagnostic questions
// 4 green + 4 amber + 2 red per topic (10 per topic)
// Used by further-maths-ocr-diagnostic.html

const FM_OCR_WRITTEN = {
  '1.1': {
    name: 'Complex Numbers',
    green: [
      { q: 'Simplify \\((3+2i)-(1-i)\\).', marks: 2, tier: 'green', modelAnswer: `= 3+2i-1+i = 2+3i [M1, A1]` },
      { q: 'Find \\(|4-3i|\\).', marks: 2, tier: 'green', modelAnswer: `√(16+9) = 5 [M1, A1]` },
      { q: 'Express \\((2+i)(2-i)\\).', marks: 2, tier: 'green', modelAnswer: `4+1 = 5 [M1, A1]` },
      { q: 'Find \\(i^{10}\\).', marks: 2, tier: 'green', modelAnswer: `(i^4)^2 · i^2 = -1 [M1, A1]` },
    ],
    amber: [
      { q: 'Express \\(\\dfrac{3+i}{1+2i}\\) in form \\(a+bi\\).', marks: 4, tier: 'amber', modelAnswer: `Multiply by (1-2i): (3+i)(1-2i)/5 = (5-5i)/5 = 1-i [M1, M1, M1, A1]` },
      { q: 'Find modulus and argument of \\(-1+\\sqrt 3 i\\).', marks: 4, tier: 'amber', modelAnswer: `|z|=2 [M1]. 2nd quadrant, arg=2π/3 [M1, M1, A1]` },
      { q: 'Solve \\(z^2 + 4z + 13 = 0\\).', marks: 4, tier: 'amber', modelAnswer: `z = (-4±√(-36))/2 = -2±3i [M1, M1, A1, A1]` },
      { q: 'Sketch locus \\(|z-2|=|z+i|\\).', marks: 4, tier: 'amber', modelAnswer: `Perpendicular bisector of (2,0) and (0,-1) [M1, M1, M1, A1]`, hasDiagram: true },
    ],
    red: [
      { q: 'Find all fifth roots of \\(32i\\) in exponential form, and sketch on an Argand diagram.', marks: 6, tier: 'red', modelAnswer: `32i = 32 e^{i(π/2+2πk)} [M1]. z = 2 e^{i(π/10+2πk/5)}, k=0..4 [M1, M1]. List 5 roots [M1, A1]. Sketch equally spaced on circle radius 2 [A1]`, hasDiagram: true },
      { q: 'Use de Moivre to prove \\(\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta\\).', marks: 6, tier: 'red', modelAnswer: `(cosθ+isinθ)^3 = cos3θ+isin3θ [M1]. Expand RHS [M1]. Real part: cos³θ-3cosθ sin²θ [M1]. = 4cos³θ-3cosθ ✓ [M1, M1, A1]` },
    ],
  },
  '1.2': {
    name: 'Matrices',
    green: [
      { q: 'Compute \\(\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix}\\).', marks: 2, tier: 'green', modelAnswer: `(17, 39)^T [M1, A1]` },
      { q: 'Find \\(\\det\\begin{pmatrix}3&2\\\\1&4\\end{pmatrix}\\).', marks: 1, tier: 'green', modelAnswer: `10 [B1]` },
      { q: 'Write identity matrix \\(I_2\\).', marks: 1, tier: 'green', modelAnswer: `[[1,0],[0,1]] [B1]` },
      { q: 'Find inverse of \\(\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}\\).', marks: 3, tier: 'green', modelAnswer: `det=1. Inverse = [[1,-1],[-1,2]] [M1, M1, A1]` },
    ],
    amber: [
      { q: 'Find eigenvalues of \\(\\begin{pmatrix}4&-1\\\\2&1\\end{pmatrix}\\).', marks: 4, tier: 'amber', modelAnswer: `(4-λ)(1-λ)+2=0 → λ²-5λ+6=0 [M1, M1]. λ=2,3 [A1, A1]` },
      { q: 'Solve \\(x+2y=5, 3x-y=-1\\) using matrix inverse.', marks: 4, tier: 'amber', modelAnswer: `det=-7 [M1]. Inverse=(1/-7)[[-1,-2],[-3,1]] [M1]. x=3/7, y=16/7 [M1, A1]` },
      { q: 'Describe transformation \\(\\begin{pmatrix}0&-1\\\\-1&0\\end{pmatrix}\\).', marks: 3, tier: 'amber', modelAnswer: `Reflection in y=-x [B1, M1, A1]` },
      { q: 'Find area scale factor of \\(\\begin{pmatrix}3&2\\\\1&4\\end{pmatrix}\\).', marks: 2, tier: 'amber', modelAnswer: `|det|=10 [M1, A1]` },
    ],
    red: [
      { q: 'Diagonalise \\(A=\\begin{pmatrix}5&-1\\\\2&2\\end{pmatrix}\\) and compute \\(A^5\\).', marks: 6, tier: 'red', modelAnswer: `λ²-7λ+12=0 → λ=3,4 [M1]. Eigenvectors: λ=3: (1,2); λ=4: (1,1) [M1, M1]. P=[[1,1],[2,1]], D=diag(3,4). A^5=PD^5P^{-1} [M1, M1, A1]` },
      { q: 'Prove rotation matrix \\(R(\\theta)\\) satisfies \\(R^T R = I\\) and \\(\\det R = 1\\).', marks: 6, tier: 'red', modelAnswer: `R=[[cosθ,-sinθ],[sinθ,cosθ]]. Compute R^T R [M1, M1, M1]. Entries: cos²θ+sin²θ=1, off-diag 0 [M1, M1]. det: cos²θ+sin²θ=1 [A1]` },
    ],
  },
  '1.3': {
    name: 'Further Algebra and Functions',
    green: [
      { q: 'For \\(x^2-7x+10=0\\), find sum and product of roots.', marks: 2, tier: 'green', modelAnswer: `Sum=7, product=10 [B1, B1]` },
      { q: 'Compute \\(\\sum_{r=1}^{10} r\\).', marks: 1, tier: 'green', modelAnswer: `55 [B1]` },
      { q: 'Solve \\(|x-3|<5\\).', marks: 2, tier: 'green', modelAnswer: `-2<x<8 [M1, A1]` },
      { q: 'Express \\(\\dfrac{1}{x(x+1)}\\) in partial fractions.', marks: 2, tier: 'green', modelAnswer: `1/x - 1/(x+1) [M1, A1]` },
    ],
    amber: [
      { q: 'Find \\(\\alpha^2+\\beta^2\\) given \\(\\alpha+\\beta=4, \\alpha\\beta=3\\).', marks: 3, tier: 'amber', modelAnswer: `16-6=10 [M1, M1, A1]` },
      { q: 'Method of differences for \\(\\sum 1/(r(r+2))\\).', marks: 5, tier: 'amber', modelAnswer: `(1/2)(1/r-1/(r+2)) [M1, M1, M1, M1, A1]` },
      { q: 'Sketch \\(y=x/(x-2)\\) with asymptotes.', marks: 4, tier: 'amber', modelAnswer: `VA x=2, HA y=1, through origin [M1, M1, M1, A1]`, hasDiagram: true },
      { q: 'Solve \\(\\dfrac{2x+1}{x-3} \\ge 1\\).', marks: 4, tier: 'amber', modelAnswer: `Case analysis: x≤-4 or x>3 [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Prove \\(\\sum_{r=1}^n r(r+1) = n(n+1)(n+2)/3\\) by method of differences.', marks: 6, tier: 'red', modelAnswer: `r(r+1) = (1/3)[r(r+1)(r+2)-(r-1)r(r+1)] [M1, M1, M1]. Telescoping [M1, M1, A1]` },
      { q: 'Cubic with roots \\(\\alpha,\\beta,\\gamma\\) from \\(x^3-6x^2+11x-6=0\\). Find cubic with roots \\(\\alpha+\\beta, \\beta+\\gamma, \\gamma+\\alpha\\).', marks: 6, tier: 'red', modelAnswer: `Σα=6 so new roots 6-α_i [M1, M1]. Substitute y=6-x [M1, M1]. y³-12y²+47y-60=0 [M1, A1]` },
    ],
  },
  '1.4': {
    name: 'Further Calculus',
    green: [
      { q: 'Evaluate \\(\\int 1/(1+x^2)\\,dx\\).', marks: 1, tier: 'green', modelAnswer: `arctan x + c [B1]` },
      { q: 'Maclaurin of \\(e^x\\) to \\(x^2\\).', marks: 2, tier: 'green', modelAnswer: `1+x+x²/2 [M1, A1]` },
      { q: 'Volume of revolution \\(y=x\\), 0 to 1, x-axis.', marks: 2, tier: 'green', modelAnswer: `π/3 [M1, A1]` },
      { q: 'Evaluate \\(\\int 1/\\sqrt{1-x^2}\\,dx\\).', marks: 1, tier: 'green', modelAnswer: `arcsin x + c [B1]` },
    ],
    amber: [
      { q: 'Evaluate \\(\\int_0^1 1/\\sqrt{4-x^2}\\,dx\\).', marks: 3, tier: 'amber', modelAnswer: `[arcsin(x/2)]_0^1 = π/6 [M1, M1, A1]` },
      { q: 'Maclaurin of \\(\\ln(1+x)\\) to \\(x^4\\).', marks: 3, tier: 'amber', modelAnswer: `x-x²/2+x³/3-x⁴/4 [M1, M1, A1]` },
      { q: 'Mean value of \\(\\sin x\\) on \\([0,\\pi/2]\\).', marks: 3, tier: 'amber', modelAnswer: `(2/π)∫sin x dx = 2/π [M1, M1, A1]` },
      { q: 'Volume about y-axis: \\(y=x^2\\), 0 to 2.', marks: 4, tier: 'amber', modelAnswer: `π∫_0^4 y dy = 8π [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Find \\(\\int 1/(x^2+2x+10)\\,dx\\).', marks: 5, tier: 'red', modelAnswer: `Complete square: (x+1)²+9 [M1]. = (1/3)arctan((x+1)/3)+c [M1, M1, M1, A1]` },
      { q: 'Show \\(\\int_0^\\infty e^{-x}\\,dx = 1\\) and hence \\(\\int_0^\\infty xe^{-x}\\,dx = 1\\).', marks: 6, tier: 'red', modelAnswer: `First: [-e^{-x}]_0^∞=1 [M1, M1]. For xe^{-x}: parts [M1, M1, M1]. = 1 [A1]` },
    ],
  },
  '1.5': {
    name: 'Further Vectors',
    green: [
      { q: 'Find \\((2,-1,3)\\cdot(1,2,0)\\).', marks: 1, tier: 'green', modelAnswer: `0 [B1]` },
      { q: 'Angle between perpendicular vectors.', marks: 1, tier: 'green', modelAnswer: `π/2 [B1]` },
      { q: 'Vector eqn of line through \\((0,1,2)\\) parallel to \\((1,0,-1)\\).', marks: 2, tier: 'green', modelAnswer: `r=(0,1,2)+t(1,0,-1) [M1, A1]` },
      { q: 'A normal to plane \\(2x-y+z=4\\).', marks: 1, tier: 'green', modelAnswer: `(2,-1,1) [B1]` },
    ],
    amber: [
      { q: 'Compute \\((1,2,3)\\times(0,1,0)\\).', marks: 3, tier: 'amber', modelAnswer: `(-3,0,1) [M1, M1, A1]` },
      { q: 'Equation of plane through \\((1,0,0), (0,1,0), (0,0,1)\\).', marks: 4, tier: 'amber', modelAnswer: `Normal = (1,1,1). Plane: x+y+z=1 [M1, M1, M1, A1]` },
      { q: 'Shortest distance from origin to line \\(r=(1,0,0)+t(0,1,1)\\).', marks: 4, tier: 'amber', modelAnswer: `|(1,0,0)×(0,1,1)|/|(0,1,1)|=√2/√2=1 [M1, M1, M1, A1]` },
      { q: 'Angle between planes \\(x+y+z=1\\) and \\(2x-y+z=2\\).', marks: 4, tier: 'amber', modelAnswer: `cos θ=(2-1+1)/(√3·√6)=2/√18 [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Show lines \\(r=(1,0,0)+s(1,1,0)\\) and \\(r=(0,1,0)+t(0,1,1)\\) are skew and find the shortest distance.', marks: 6, tier: 'red', modelAnswer: `Non-parallel, no intersection [M1, M1]. Common perp n=(1,-1,1) [M1]. Vector between (−1,1,0). Distance = 2/√3 = 2√3/3 [M1, M1, A1]` },
      { q: 'Find the plane containing point \\((1,2,3)\\) and the line \\(r=t(1,1,1)\\).', marks: 6, tier: 'red', modelAnswer: `Normal = (1,2,3)×(1,1,1) = (-1,2,-1) [M1, M1, M1]. Plane through origin: -x+2y-z=0 [M1, M1, A1]` },
    ],
  },
  '1.6': {
    name: 'Polar Coordinates',
    green: [
      { q: 'Convert \\((1, \\pi)\\) to Cartesian.', marks: 1, tier: 'green', modelAnswer: `(-1,0) [B1]` },
      { q: 'Sketch \\(r=3\\).', marks: 2, tier: 'green', modelAnswer: `Circle radius 3 [B1, B1]`, hasDiagram: true },
      { q: 'Curve \\(\\theta=\\pi/2\\).', marks: 1, tier: 'green', modelAnswer: `Half-line along +y axis [B1]` },
      { q: 'Convert \\((0,2)\\) to polar.', marks: 2, tier: 'green', modelAnswer: `r=2, θ=π/2 [M1, A1]` },
    ],
    amber: [
      { q: 'Sketch cardioid \\(r=2(1+\\cos\\theta)\\).', marks: 3, tier: 'amber', modelAnswer: `Max r=4 at θ=0, r=0 at θ=π [B1, B1, B1]`, hasDiagram: true },
      { q: 'Area enclosed by \\(r=2\\sin\\theta\\).', marks: 4, tier: 'amber', modelAnswer: `A = (1/2)∫_0^π 4sin²θ dθ = π [M1, M1, M1, A1]` },
      { q: 'Convert \\(r=4\\cos\\theta\\) to Cartesian.', marks: 3, tier: 'amber', modelAnswer: `(x-2)²+y²=4 [M1, M1, A1]` },
      { q: 'Area of one petal of \\(r=\\sin 3\\theta\\).', marks: 4, tier: 'amber', modelAnswer: `π/12 [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Sketch \\(r=1+2\\cos\\theta\\) including inner loop, and find area of inner loop.', marks: 6, tier: 'red', modelAnswer: `Inner loop 2π/3<θ<4π/3 [M1, M1]. Area = π - 3√3/2 [M1, M1, M1, A1]`, hasDiagram: true },
      { q: 'Find area between \\(r=3\\) and cardioid \\(r=2+2\\cos\\theta\\), outside cardioid inside circle.', marks: 6, tier: 'red', modelAnswer: `Intersection θ=±π/3 [M1]. Integrate difference [M1, M1, M1, M1, A1]` },
    ],
  },
  '1.7': {
    name: 'Hyperbolic Functions',
    green: [
      { q: 'Value of \\(\\sinh 0\\).', marks: 1, tier: 'green', modelAnswer: `0 [B1]` },
      { q: 'Value of \\(\\cosh 0\\).', marks: 1, tier: 'green', modelAnswer: `1 [B1]` },
      { q: '\\(d/dx[\\sinh x]\\).', marks: 1, tier: 'green', modelAnswer: `cosh x [B1]` },
      { q: '\\(\\int \\cosh x\\,dx\\).', marks: 1, tier: 'green', modelAnswer: `sinh x + c [B1]` },
    ],
    amber: [
      { q: 'Prove \\(\\cosh^2 x - \\sinh^2 x = 1\\).', marks: 4, tier: 'amber', modelAnswer: `Expand in exponentials [M1, M1, M1, A1]` },
      { q: 'Solve \\(\\cosh x = 3\\).', marks: 4, tier: 'amber', modelAnswer: `x=ln(3±2√2) [M1, M1, M1, A1]` },
      { q: 'Differentiate \\(y=\\text{arsinh}(2x)\\).', marks: 3, tier: 'amber', modelAnswer: `2/√(4x²+1) [M1, M1, A1]` },
      { q: 'Find \\(\\int 1/\\sqrt{x^2+9}\\,dx\\).', marks: 3, tier: 'amber', modelAnswer: `arsinh(x/3)+c [M1, M1, A1]` },
    ],
    red: [
      { q: 'Prove \\(\\text{artanh}\\,x = (1/2)\\ln\\frac{1+x}{1-x}\\) for \\(-1<x<1\\).', marks: 6, tier: 'red', modelAnswer: `Let y=artanh x → x=tanh y [M1]. Solve for e^y [M1, M1, M1]. 2y=ln((1+x)/(1-x)) [M1, A1]` },
      { q: 'Solve \\(3\\sinh x + 4\\cosh x = 7\\).', marks: 6, tier: 'red', modelAnswer: `Substitute exponentials, solve quadratic in e^x [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  '1.8': {
    name: 'Differential Equations',
    green: [
      { q: 'Solve \\(dy/dx=3y, y(0)=2\\).', marks: 2, tier: 'green', modelAnswer: `y=2e^{3x} [M1, A1]` },
      { q: 'Solve \\(y''+y=0\\).', marks: 2, tier: 'green', modelAnswer: `y=A cos x+B sin x [M1, A1]` },
      { q: 'Order of \\(y'''+y''=0\\).', marks: 1, tier: 'green', modelAnswer: `3 [B1]` },
      { q: 'Integrating factor for \\(y'+2y=x\\).', marks: 1, tier: 'green', modelAnswer: `e^{2x} [B1]` },
    ],
    amber: [
      { q: 'Solve \\(y''-5y'+6y=0\\).', marks: 4, tier: 'amber', modelAnswer: `m=2,3 → y=Ae^{2x}+Be^{3x} [M1, M1, M1, A1]` },
      { q: 'Solve \\(dy/dx+y=e^{-x}\\).', marks: 4, tier: 'amber', modelAnswer: `IF=e^x. y=(x+c)e^{-x} [M1, M1, M1, A1]` },
      { q: 'Solve \\(y''+4y'+4y=0, y(0)=1, y'(0)=0\\).', marks: 5, tier: 'amber', modelAnswer: `(1+2x)e^{-2x} [M1, M1, M1, M1, A1]` },
      { q: 'Euler with h=0.1 on \\(y'=x+y, y(0)=1\\), find y(0.2).', marks: 4, tier: 'amber', modelAnswer: `y(0.1)=1.1, y(0.2)=1.22 [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Solve \\(y''+4y=\\sin 2x, y(0)=0, y'(0)=0\\).', marks: 6, tier: 'red', modelAnswer: `Resonance case. Particular y_p=-(x/4)cos 2x [M1, M1, M1]. Apply ICs to full solution [M1, M1, A1]` },
      { q: 'A 5kg mass, spring k=80, damping \\(-2v\\). Classify damping and find motion for x(0)=0.1, v(0)=0.', marks: 6, tier: 'red', modelAnswer: `ẍ+0.4ẋ+16x=0. Roots -0.2±3.997i underdamped [M1, M1, M1]. x(t)=e^{-0.2t}(0.1 cos ω't + 0.005 sin ω't) [M1, M1, A1]` },
    ],
  },
  '1.9': {
    name: 'Numerical Methods',
    green: [
      { q: 'NR for \\(f(x)=x^2-a\\).', marks: 2, tier: 'green', modelAnswer: `x_{n+1}=(x_n+a/x_n)/2 [M1, A1]` },
      { q: 'Trapezium rule uses which shape.', marks: 1, tier: 'green', modelAnswer: `Trapezia [B1]` },
      { q: 'Simpson\'s rule needs n...', marks: 1, tier: 'green', modelAnswer: `Even [B1]` },
      { q: 'Sign change f(1)=-1, f(2)=3 implies...', marks: 1, tier: 'green', modelAnswer: `Root in (1,2) [B1]` },
    ],
    amber: [
      { q: 'One NR step on \\(x^3-x-1=0\\) from x_0=1.3.', marks: 3, tier: 'amber', modelAnswer: `x_1≈1.3253 [M1, M1, A1]` },
      { q: 'Simpson n=2 on \\(\\int_0^2 x^3 dx\\).', marks: 4, tier: 'amber', modelAnswer: `h=1. S=(1/3)(0+4+8)=4 [M1, M1, M1, A1]` },
      { q: 'Fixed-point iteration \\(x_{n+1}=(x_n^2+1)/3\\) from x_0=0, 3 steps.', marks: 4, tier: 'amber', modelAnswer: `x_1=1/3, x_2≈0.370, x_3≈0.379 [M1, M1, M1, A1]` },
      { q: 'Bisection on \\(x^2-2\\), start [1,2], 3 iterations.', marks: 4, tier: 'amber', modelAnswer: `1.5 → 1.25 → 1.375 range [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Estimate \\(\\int_0^1 e^{-x^2}\\,dx\\) using Simpson n=4 to 4 dp.', marks: 6, tier: 'red', modelAnswer: `h=0.25. f: 1, 0.9394, 0.7788, 0.5698, 0.3679 [M1, M1]. S = 0.0833·(...) ≈ 0.7468 [M1, M1, M1, A1]` },
      { q: 'Show Newton-Raphson converges quadratically near root of smooth f.', marks: 6, tier: 'red', modelAnswer: `Taylor expand f around root α [M1, M1]. NR update error satisfies e_{n+1} ≈ (f''(α)/(2f'(α))) e_n² [M1, M1, M1, A1]` },
    ],
  },
  '1.10': {
    name: 'Proof by Induction',
    green: [
      { q: 'Base case for P(n), n≥1.', marks: 1, tier: 'green', modelAnswer: `Show P(1) true [B1]` },
      { q: 'Inductive step assumes?', marks: 1, tier: 'green', modelAnswer: `P(k) true [B1]` },
      { q: 'We then prove?', marks: 1, tier: 'green', modelAnswer: `P(k+1) [B1]` },
      { q: 'Verify 1+2=3 for n=2 in formula n(n+1)/2.', marks: 2, tier: 'green', modelAnswer: `2·3/2=3 ✓ [M1, A1]` },
    ],
    amber: [
      { q: 'Prove \\(\\sum r = n(n+1)/2\\) by induction.', marks: 5, tier: 'amber', modelAnswer: `Base ✓, assume k, show k+1 [B1, M1, M1, M1, A1]` },
      { q: 'Prove \\(7^n-1\\) divisible by 6.', marks: 5, tier: 'amber', modelAnswer: `Base 6 ✓. 7^{k+1}-1=7(6m+1)-1=6(7m+1) [B1, M1, M1, M1, A1]` },
      { q: 'Prove \\(2^n>n\\) for n≥1.', marks: 4, tier: 'amber', modelAnswer: `Base, inductive [B1, M1, M1, A1]` },
      { q: 'Prove \\(\\binom{1\\ 1}{0\\ 1}^n = \\binom{1\\ n}{0\\ 1}\\).', marks: 4, tier: 'amber', modelAnswer: `Matrix product step [B1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Prove \\(\\sum r^3 = (n(n+1)/2)^2\\) by induction.', marks: 6, tier: 'red', modelAnswer: `Base, assume k, add (k+1)^3, factorise [B1, M1, M1, M1, M1, A1]` },
      { q: 'Prove de Moivre \\((\\cos\\theta+i\\sin\\theta)^n = \\cos n\\theta+i\\sin n\\theta\\) by induction.', marks: 6, tier: 'red', modelAnswer: `Base ✓. Inductive: multiply by (cos θ+i sin θ), use compound angles [B1, M1, M1, M1, M1, A1]` },
    ],
  },
  'S1.1': {
    name: 'Discrete Random Variables',
    green: [
      { q: 'X~B(5,0.5): P(X=0).', marks: 2, tier: 'green', modelAnswer: `(0.5)^5=1/32 [M1, A1]` },
      { q: 'Mean of X~B(n,p).', marks: 1, tier: 'green', modelAnswer: `np [B1]` },
      { q: 'Mean of X~Po(λ).', marks: 1, tier: 'green', modelAnswer: `λ [B1]` },
      { q: 'P(X=1) for Po(2).', marks: 2, tier: 'green', modelAnswer: `2e^{-2} ≈ 0.2707 [M1, A1]` },
    ],
    amber: [
      { q: 'X~B(20,0.3). Find P(X≤5).', marks: 3, tier: 'amber', modelAnswer: `From tables ≈ 0.4164 [M1, M1, A1]` },
      { q: 'X~Po(4). Find P(X≥3).', marks: 4, tier: 'amber', modelAnswer: `≈ 0.7619 [M1, M1, M1, A1]` },
      { q: 'X~Geo(0.2). Find P(X=3).', marks: 3, tier: 'amber', modelAnswer: `(0.8)^2·0.2 = 0.128 [M1, M1, A1]` },
      { q: 'Given E(X)=5, E(X²)=30. Var?', marks: 2, tier: 'amber', modelAnswer: `5 [M1, A1]` },
    ],
    red: [
      { q: 'Factory: 200 items/day, each defective w.p. 0.01. Find P(>3 defective/day) using suitable approximation.', marks: 6, tier: 'red', modelAnswer: `Po(2) approx. 1-P(X≤3) ≈ 0.143 [M1, M1, M1, M1, M1, A1]` },
      { q: 'X~B(50,0.5). Normal approx with continuity correction for P(X≥30).', marks: 6, tier: 'red', modelAnswer: `μ=25, σ=3.536. P(X>29.5) via Z=1.273 → ≈0.1016 [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'S1.2': {
    name: 'Continuous Random Variables',
    green: [
      { q: 'X~N(0,1). P(Z<1).', marks: 2, tier: 'green', modelAnswer: `≈ 0.8413 [M1, A1]` },
      { q: 'Standardise X~N(10,4) at 14.', marks: 2, tier: 'green', modelAnswer: `Z=2 [M1, A1]` },
      { q: 'pdf properties.', marks: 2, tier: 'green', modelAnswer: `Non-negative, integrates to 1 [B1, B1]` },
      { q: 'E(X) for U(0,4).', marks: 1, tier: 'green', modelAnswer: `2 [B1]` },
    ],
    amber: [
      { q: 'pdf f(x)=kx on [0,3]. Find k and E(X).', marks: 4, tier: 'amber', modelAnswer: `k=2/9, E(X)=2 [M1, M1, M1, A1]` },
      { q: 'X~Exp(3). P(X>1).', marks: 3, tier: 'amber', modelAnswer: `e^{-3} ≈ 0.0498 [M1, M1, A1]` },
      { q: 'X~N(50,100). 95% range.', marks: 3, tier: 'amber', modelAnswer: `(30.4, 69.6) [M1, M1, A1]` },
      { q: '95% CI for μ: n=36, σ=3, x̄=4.', marks: 3, tier: 'amber', modelAnswer: `(3.02, 4.98) [M1, M1, A1]` },
    ],
    red: [
      { q: 'pdf \\(f(x)=c(4-x^2)\\) on \\([-2,2]\\). Find c and show E(X)=0.', marks: 6, tier: 'red', modelAnswer: `c=3/32, symmetry gives E=0 [M1, M1, M1, M1, M1, A1]` },
      { q: 'Test H0: μ=100, H1: μ>100 with n=25, x̄=104, σ=10 at 5%.', marks: 6, tier: 'red', modelAnswer: `Z=2>1.645, reject H0 [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'S1.3': {
    name: 'Statistical Inference',
    green: [
      { q: 't-statistic one-sample.', marks: 2, tier: 'green', modelAnswer: `t=(x̄-μ_0)/(s/√n) [M1, A1]` },
      { q: 'Type I error.', marks: 2, tier: 'green', modelAnswer: `Reject true H0 [B1, B1]` },
      { q: 'α for 5%.', marks: 1, tier: 'green', modelAnswer: `0.05 [B1]` },
      { q: 'Unbiased estimator of μ.', marks: 1, tier: 'green', modelAnswer: `x̄ [B1]` },
    ],
    amber: [
      { q: 'n=10, x̄=5.2, s=0.8. Test μ=5 two-sided 5%.', marks: 5, tier: 'amber', modelAnswer: `t≈0.79, not rejected [M1, M1, M1, M1, A1]` },
      { q: 'Two-sample pooled t statistic.', marks: 3, tier: 'amber', modelAnswer: `t=(x̄_1-x̄_2)/(s_p√(1/n_1+1/n_2)) [M1, M1, A1]` },
      { q: '95% CI for μ: n=25, x̄=99, s=4.', marks: 4, tier: 'amber', modelAnswer: `(97.35, 100.65) [M1, M1, M1, A1]` },
      { q: 'Paired diffs mean 3, sd 2, n=9. Test at 5%.', marks: 4, tier: 'amber', modelAnswer: `t=4.5, reject [M1, M1, M1, A1]` },
    ],
    red: [
      { q: 'Two independent groups n_1=n_2=15, x̄_1=102, x̄_2=98, s_1=5, s_2=4. Test μ_1>μ_2 at 5%.', marks: 6, tier: 'red', modelAnswer: `s_p≈4.53, t≈2.42 > 1.701 → reject [M1, M1, M1, M1, M1, A1]` },
      { q: 'Determine sample size for 95% CI half-width 0.5, σ=2.', marks: 6, tier: 'red', modelAnswer: `n = (1.96·2/0.5)² = 61.47 → n=62 [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'S1.4': {
    name: 'Chi-squared Tests',
    green: [
      { q: 'χ² test statistic.', marks: 2, tier: 'green', modelAnswer: `Σ(O-E)²/E [M1, A1]` },
      { q: 'df for 3x3 contingency.', marks: 2, tier: 'green', modelAnswer: `(3-1)(3-1)=4 [M1, A1]` },
      { q: 'χ² crit df=2, α=0.05.', marks: 1, tier: 'green', modelAnswer: `5.991 [B1]` },
      { q: 'Min E rule.', marks: 2, tier: 'green', modelAnswer: `E≥5; else combine [B1, B1]` },
    ],
    amber: [
      { q: 'Test fair die: observed 8,14,10,9,11,8 in 60 rolls. χ² and conclusion 5%.', marks: 5, tier: 'amber', modelAnswer: `χ²=2.6 < 11.07, not rejected [M1, M1, M1, M1, A1]` },
      { q: '2x2 [[20,30],[40,10]]: χ² for independence.', marks: 5, tier: 'amber', modelAnswer: `χ²≈16.67 [M1, M1, M1, M1, A1]` },
      { q: 'Conclude: df=1, crit 3.841.', marks: 2, tier: 'amber', modelAnswer: `Reject, dependent [M1, A1]` },
      { q: 'Df for binomial fit with estimated p.', marks: 2, tier: 'amber', modelAnswer: `k-2 [M1, A1]` },
    ],
    red: [
      { q: 'Test fit of Poisson to observed (0:10, 1:22, 2:20, 3:10, ≥4:8) for 70 trials.', marks: 6, tier: 'red', modelAnswer: `λ̂=x̄. Compute E, χ², df=k-2 [M1, M1, M1, M1, M1, A1]` },
      { q: 'Test gender vs colour preference: [[30,40,30],[40,20,40]]. χ² and conclusion 5%.', marks: 6, tier: 'red', modelAnswer: `E_ij computed, χ²≈9.52>5.991, reject [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'S1.5': {
    name: 'Probability Generating Functions',
    green: [
      { q: 'Definition of G_X(t).', marks: 2, tier: 'green', modelAnswer: `E(t^X) [M1, A1]` },
      { q: 'G_X(1)=?', marks: 1, tier: 'green', modelAnswer: `1 [B1]` },
      { q: 'E(X) via pgf.', marks: 1, tier: 'green', modelAnswer: `G'(1) [B1]` },
      { q: 'pgf of Bernoulli(p).', marks: 2, tier: 'green', modelAnswer: `1-p+pt [M1, A1]` },
    ],
    amber: [
      { q: 'Derive pgf of Po(λ).', marks: 4, tier: 'amber', modelAnswer: `e^{λ(t-1)} [M1, M1, M1, A1]` },
      { q: 'E(X), Var(X) for Po(λ) via pgf.', marks: 4, tier: 'amber', modelAnswer: `G'(1)=λ, G''(1)=λ². Var=λ [M1, M1, M1, A1]` },
      { q: 'pgf of Geo(p) on {1,2,...}.', marks: 3, tier: 'amber', modelAnswer: `pt/(1-(1-p)t) [M1, M1, A1]` },
      { q: 'pgf of sum of independents.', marks: 2, tier: 'amber', modelAnswer: `G_{X+Y}=G_X·G_Y [M1, A1]` },
    ],
    red: [
      { q: 'Prove sum of independent Po(λ), Po(μ) is Po(λ+μ) using pgfs.', marks: 6, tier: 'red', modelAnswer: `Product e^{λ(t-1)}·e^{μ(t-1)} = e^{(λ+μ)(t-1)} → Po(λ+μ) [M1, M1, M1, M1, M1, A1]` },
      { q: 'Random sum S=ΣX_i with N~Po(λ). Show G_S(t)=e^{λ(H(t)-1)}.', marks: 6, tier: 'red', modelAnswer: `G_S=E(t^S)=E(H(t)^N)=G_N(H(t))=e^{λ(H(t)-1)} [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'M1.1': {
    name: 'Dimensional Analysis',
    green: [
      { q: 'Dim of velocity.', marks: 1, tier: 'green', modelAnswer: `LT^{-1} [B1]` },
      { q: 'Dim of force.', marks: 1, tier: 'green', modelAnswer: `MLT^{-2} [B1]` },
      { q: 'Dim of acceleration.', marks: 1, tier: 'green', modelAnswer: `LT^{-2} [B1]` },
      { q: 'Dim of energy.', marks: 1, tier: 'green', modelAnswer: `ML²T^{-2} [B1]` },
    ],
    amber: [
      { q: 'Check \\(v^2=u^2+2as\\) dimensionally.', marks: 3, tier: 'amber', modelAnswer: `All terms L²T^{-2} ✓ [M1, M1, A1]` },
      { q: 'Derive T∝√(l/g) for pendulum.', marks: 5, tier: 'amber', modelAnswer: `a=1/2, b=-1/2 [M1, M1, M1, M1, A1]` },
      { q: 'Dim of gravitational constant G.', marks: 3, tier: 'amber', modelAnswer: `L^3 M^{-1} T^{-2} [M1, M1, A1]` },
      { q: 'Dim of pressure.', marks: 2, tier: 'amber', modelAnswer: `ML^{-1}T^{-2} [M1, A1]` },
    ],
    red: [
      { q: 'Deduce form for wave speed on string in terms of tension T and linear density μ.', marks: 6, tier: 'red', modelAnswer: `v=k√(T/μ) [M1, M1, M1, M1, M1, A1]` },
      { q: 'Show Reynolds number \\(\\rho vL/\\eta\\) is dimensionless.', marks: 6, tier: 'red', modelAnswer: `Confirm each dim cancels [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'M1.2': {
    name: 'Work, Energy and Power',
    green: [
      { q: 'W=Fd (const force).', marks: 1, tier: 'green', modelAnswer: `Stated [B1]` },
      { q: 'KE formula.', marks: 1, tier: 'green', modelAnswer: `(1/2)mv² [B1]` },
      { q: 'PE near Earth.', marks: 1, tier: 'green', modelAnswer: `mgh [B1]` },
      { q: 'Power = ?', marks: 1, tier: 'green', modelAnswer: `Work/time, or F·v [B1]` },
    ],
    amber: [
      { q: '2kg ball dropped 3m. Speed at impact.', marks: 3, tier: 'amber', modelAnswer: `√(2gh)≈7.67 m/s [M1, M1, A1]` },
      { q: 'EPE spring k=500, extension 0.05m.', marks: 2, tier: 'amber', modelAnswer: `0.625 J [M1, A1]` },
      { q: 'Engine P=20kW at v=10m/s. Force.', marks: 2, tier: 'amber', modelAnswer: `2000 N [M1, A1]` },
      { q: 'Car 1000kg 0→20 m/s over 100m against 200N resistance. Work done by engine.', marks: 4, tier: 'amber', modelAnswer: `220000 J [M1, M1, M1, A1]` },
    ],
    red: [
      { q: '3kg on spring k=200 displaced 0.1m on smooth horizontal surface. Max speed.', marks: 6, tier: 'red', modelAnswer: `EPE 1 J → KE 1 J → v=√(2/3)≈0.816 m/s [M1, M1, M1, M1, M1, A1]` },
      { q: 'Derive work-energy theorem for variable force.', marks: 6, tier: 'red', modelAnswer: `W=∫F dx = ∫mv dv = ΔKE [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'M1.3': {
    name: 'Impulse and Momentum',
    green: [
      { q: 'Momentum definition.', marks: 1, tier: 'green', modelAnswer: `mv [B1]` },
      { q: 'Impulse of constant F over Δt.', marks: 1, tier: 'green', modelAnswer: `FΔt [B1]` },
      { q: 'e=0 means.', marks: 1, tier: 'green', modelAnswer: `Perfectly inelastic [B1]` },
      { q: 'Units of momentum.', marks: 1, tier: 'green', modelAnswer: `kg m/s (Ns) [B1]` },
    ],
    amber: [
      { q: '2kg at 3m/s hits 1kg stationary, sticks. v.', marks: 3, tier: 'amber', modelAnswer: `2 m/s [M1, M1, A1]` },
      { q: '0.1kg ball: 10→-8 m/s. Impulse.', marks: 2, tier: 'amber', modelAnswer: `-1.8 Ns [M1, A1]` },
      { q: 'Ball from 2m, e=0.8. Bounce height.', marks: 3, tier: 'amber', modelAnswer: `1.28 m [M1, M1, A1]` },
      { q: 'Elastic equal masses, one stationary — show exchange.', marks: 4, tier: 'amber', modelAnswer: `Solve with conservation + e=1 [M1, M1, M1, A1]` },
    ],
    red: [
      { q: '0.01kg bullet at 500 m/s into 2kg block at rest. Common v and KE lost.', marks: 6, tier: 'red', modelAnswer: `v ≈ 2.488 m/s; KE lost ≈ 1243.78 J [M1, M1, M1, M1, M1, A1]` },
      { q: 'Spheres 2kg at 4 m/s and 3kg at -1 m/s collide, e=0.5. Final velocities.', marks: 6, tier: 'red', modelAnswer: `v_1=-0.5 m/s, v_2=2 m/s [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'M1.4': {
    name: 'Circular Motion',
    green: [
      { q: 'Centripetal acceleration formula.', marks: 1, tier: 'green', modelAnswer: `v²/r or ω²r [B1]` },
      { q: 'Direction of centripetal force.', marks: 1, tier: 'green', modelAnswer: `Toward centre [B1]` },
      { q: 'ω in terms of T.', marks: 1, tier: 'green', modelAnswer: `2π/T [B1]` },
      { q: '1kg circling 2m at 3 rad/s — F.', marks: 2, tier: 'green', modelAnswer: `18 N [M1, A1]` },
    ],
    amber: [
      { q: 'Car 800kg, r=50m, v=15 m/s. Friction force.', marks: 3, tier: 'amber', modelAnswer: `3600 N [M1, M1, A1]` },
      { q: 'Derive banked track: tanθ=v²/(rg).', marks: 4, tier: 'amber', modelAnswer: `Resolve horiz and vert, divide [M1, M1, M1, A1]` },
      { q: 'Conical pendulum L=1m, θ=30°. Speed.', marks: 4, tier: 'amber', modelAnswer: `v≈1.68 m/s [M1, M1, M1, A1]` },
      { q: 'Min speed at top of loop r=2m.', marks: 3, tier: 'amber', modelAnswer: `√(gr)≈4.43 m/s [M1, M1, A1]` },
    ],
    red: [
      { q: 'Show min speed at bottom of vertical circle on string is \\(\\sqrt{5gr}\\).', marks: 6, tier: 'red', modelAnswer: `Top: v²≥gr. Energy: v_bot²=v_top²+4gr ≥ 5gr [M1, M1, M1, M1, M1, A1]` },
      { q: 'Show Kepler\'s 3rd: \\(T^2\\propto(R+h)^3\\) for satellite circular orbit.', marks: 6, tier: 'red', modelAnswer: `v²=GM/(R+h). T=2π(R+h)/v. T²=4π²(R+h)³/(GM) [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'M1.5': {
    name: 'Simple Harmonic Motion',
    green: [
      { q: 'SHM equation.', marks: 1, tier: 'green', modelAnswer: `ẍ=-ω²x [B1]` },
      { q: 'Period in terms of ω.', marks: 1, tier: 'green', modelAnswer: `T=2π/ω [B1]` },
      { q: 'Max speed.', marks: 1, tier: 'green', modelAnswer: `Aω [B1]` },
      { q: 'Max acceleration.', marks: 1, tier: 'green', modelAnswer: `Aω² [B1]` },
    ],
    amber: [
      { q: 'Mass 2kg, spring k=50. Period.', marks: 3, tier: 'amber', modelAnswer: `T≈1.257 s [M1, M1, A1]` },
      { q: 'x=0.2 cos(3t). Max speed.', marks: 2, tier: 'amber', modelAnswer: `0.6 m/s [M1, A1]` },
      { q: 'Total energy formula.', marks: 2, tier: 'amber', modelAnswer: `(1/2)kA² [M1, A1]` },
      { q: 'Pendulum L=2m small amp. Period.', marks: 3, tier: 'amber', modelAnswer: `T≈2.84 s [M1, M1, A1]` },
    ],
    red: [
      { q: 'Spring: A=0.15m, T=0.8s. Find speed at x=0.05m and time from x=0.15 (rest) to x=0.', marks: 6, tier: 'red', modelAnswer: `ω=7.854. v≈1.11 m/s. t=T/4=0.2s [M1, M1, M1, M1, M1, A1]` },
      { q: 'Damped SHM \\(\\ddot x+2\\gamma \\dot x+\\omega_0^2 x=0\\). Classify solutions; period for underdamped.', marks: 6, tier: 'red', modelAnswer: `Cases: underdamped γ<ω_0, critical γ=ω_0, overdamped. T=2π/√(ω_0²-γ²) underdamped [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'D1.1': {
    name: 'Graph Theory',
    green: [
      { q: 'Define simple graph.', marks: 2, tier: 'green', modelAnswer: `No loops/multi-edges, undirected [B1, B1]` },
      { q: 'Edges in K_5.', marks: 2, tier: 'green', modelAnswer: `10 [M1, A1]` },
      { q: 'Sum of degrees = ?', marks: 1, tier: 'green', modelAnswer: `2|E| [B1]` },
      { q: 'Edges in tree of n vertices.', marks: 1, tier: 'green', modelAnswer: `n-1 [B1]` },
    ],
    amber: [
      { q: 'Eulerian condition.', marks: 2, tier: 'amber', modelAnswer: `Connected, all degrees even [M1, A1]` },
      { q: 'Euler formula planar graph.', marks: 2, tier: 'amber', modelAnswer: `V-E+F=2 [M1, A1]` },
      { q: 'Planar V=8, E=12. F.', marks: 2, tier: 'amber', modelAnswer: `F=6 [M1, A1]` },
      { q: 'Kruskal on edges AB 3, AC 1, BC 2, BD 4. MST weight.', marks: 4, tier: 'amber', modelAnswer: `7 [M1, M1, M1, A1]`, hasDiagram: true },
    ],
    red: [
      { q: 'Prove sum of degrees = 2|E|.', marks: 6, tier: 'red', modelAnswer: `Each edge contributes to two endpoint degrees [M1, M1, M1, M1, M1, A1]` },
      { q: 'Show \\(K_{3,3}\\) is non-planar using Euler\'s formula.', marks: 6, tier: 'red', modelAnswer: `V=6, E=9, F=5. Bipartite: 2E≥4F → 18≥20 contradiction [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'D1.2': {
    name: 'Networks',
    green: [
      { q: 'Dijkstra purpose.', marks: 1, tier: 'green', modelAnswer: `Shortest path from source [B1]` },
      { q: 'Why Dijkstra fails for negatives.', marks: 2, tier: 'green', modelAnswer: `Greedy assumes non-negative [M1, A1]` },
      { q: 'Define MST.', marks: 2, tier: 'green', modelAnswer: `Spanning tree of min total weight [B1, B1]` },
      { q: 'Prim/Kruskal produce ...', marks: 1, tier: 'green', modelAnswer: `MST [B1]` },
    ],
    amber: [
      { q: 'CPP: odd vertices A, B distance 5 apart. Extra cost.', marks: 3, tier: 'amber', modelAnswer: `5 [M1, M1, A1]` },
      { q: 'Nearest-neighbour TSP overview.', marks: 3, tier: 'amber', modelAnswer: `Start, go to nearest unvisited, return [M1, M1, A1]` },
      { q: 'Critical activity float.', marks: 1, tier: 'amber', modelAnswer: `Zero [B1]` },
      { q: 'Max-flow min-cut theorem.', marks: 2, tier: 'amber', modelAnswer: `Max flow = min cut capacity [M1, A1]` },
    ],
    red: [
      { q: 'Apply Dijkstra on graph AB(4), AC(2), BC(5), BD(10), CE(3), DE(1). Shortest A→D.', marks: 6, tier: 'red', modelAnswer: `D=6 via A-C-E-D [M1, M1, M1, M1, M1, A1]` },
      { q: 'Explain forward and backward pass in CPA and compute float.', marks: 6, tier: 'red', modelAnswer: `Forward: EST/EFT. Backward: LST/LFT. Float = LST-EST [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'D1.3': {
    name: 'Linear Programming',
    green: [
      { q: 'Formulate max 2x+3y s.t. x+y≤4, x,y≥0.', marks: 2, tier: 'green', modelAnswer: `Stated [M1, A1]` },
      { q: 'Feasible region is ...', marks: 2, tier: 'green', modelAnswer: `Convex intersection of half-planes [B1, B1]` },
      { q: 'Optimum lies ...', marks: 1, tier: 'green', modelAnswer: `At vertex [B1]` },
      { q: 'Purpose of slack variables.', marks: 2, tier: 'green', modelAnswer: `Convert ≤ to = [M1, A1]` },
    ],
    amber: [
      { q: 'Max 3x+2y s.t. x+y≤4, 2x+y≤5, x,y≥0.', marks: 5, tier: 'amber', modelAnswer: `Max 9 at (1,3) [M1, M1, M1, M1, A1]` },
      { q: 'Simplex pivot rule.', marks: 3, tier: 'amber', modelAnswer: `Most negative in z-row entering; min ratio leaving [M1, M1, A1]` },
      { q: 'Sensitivity analysis.', marks: 2, tier: 'amber', modelAnswer: `Effect of small RHS/obj changes [M1, A1]` },
      { q: 'Binary variables purpose.', marks: 2, tier: 'amber', modelAnswer: `Yes/no decisions [B1, B1]` },
    ],
    red: [
      { q: 'Formulate and solve: Product A (2hr, 1kg, £30), B (1hr, 2kg, £40); 100hr, 80kg available.', marks: 6, tier: 'red', modelAnswer: `Max 30x+40y s.t. 2x+y≤100, x+2y≤80. Optimum (40,20) with £2000 [M1, M1, M1, M1, M1, A1]` },
      { q: 'Describe simplex method with tableau setup and pivoting.', marks: 6, tier: 'red', modelAnswer: `Slack vars, initial tableau, entering/leaving vars, iterate [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'D1.4': {
    name: 'Game Theory',
    green: [
      { q: 'Zero-sum game.', marks: 2, tier: 'green', modelAnswer: `Payoffs sum to zero [B1, B1]` },
      { q: 'Pure strategy.', marks: 1, tier: 'green', modelAnswer: `Single chosen action [B1]` },
      { q: 'Saddle point condition.', marks: 2, tier: 'green', modelAnswer: `Row min = col max at entry [M1, A1]` },
      { q: 'Value of RPS.', marks: 1, tier: 'green', modelAnswer: `0 [B1]` },
    ],
    amber: [
      { q: 'Check saddle: [[4,2],[3,5]].', marks: 3, tier: 'amber', modelAnswer: `Maximin 3, minimax 4, no saddle [M1, M1, A1]` },
      { q: 'Mixed strategy on [[3,1],[1,2]]: p.', marks: 4, tier: 'amber', modelAnswer: `p=1/3 [M1, M1, M1, A1]` },
      { q: 'Value of that game.', marks: 2, tier: 'amber', modelAnswer: `5/3 [M1, A1]` },
      { q: 'Nash equilibrium.', marks: 2, tier: 'amber', modelAnswer: `No unilateral profitable deviation [M1, A1]` },
    ],
    red: [
      { q: 'Solve [[6,0],[1,5]] using mixed strategies and find value.', marks: 6, tier: 'red', modelAnswer: `p=0.4, value=3 [M1, M1, M1, M1, M1, A1]` },
      { q: 'Prisoner\'s Dilemma: identify Nash equilibrium and explain.', marks: 6, tier: 'red', modelAnswer: `(D,D) dominant strategy equilibrium; (C,C) Pareto superior [M1, M1, M1, M1, M1, A1]` },
    ],
  },
  'D1.5': {
    name: 'Recurrence Relations',
    green: [
      { q: 'Solve a_n=2a_{n-1}, a_0=3.', marks: 2, tier: 'green', modelAnswer: `3·2^n [M1, A1]` },
      { q: 'Solve a_n=a_{n-1}+2, a_0=1.', marks: 2, tier: 'green', modelAnswer: `1+2n [M1, A1]` },
      { q: 'Fibonacci recurrence.', marks: 1, tier: 'green', modelAnswer: `F_n=F_{n-1}+F_{n-2} [B1]` },
      { q: 'Order of \\(a_n=3a_{n-1}-a_{n-2}\\).', marks: 1, tier: 'green', modelAnswer: `2 [B1]` },
    ],
    amber: [
      { q: 'Solve a_n=5a_{n-1}-6a_{n-2}, a_0=0, a_1=1.', marks: 5, tier: 'amber', modelAnswer: `3^n-2^n [M1, M1, M1, M1, A1]` },
      { q: 'Tower of Hanoi closed form.', marks: 4, tier: 'amber', modelAnswer: `H_n=2^n-1 [M1, M1, M1, A1]` },
      { q: 'Repeated root case: a_n=4a_{n-1}-4a_{n-2}.', marks: 3, tier: 'amber', modelAnswer: `(A+Bn)·2^n [M1, M1, A1]` },
      { q: 'Non-homog particular trial for a_n=a_{n-1}+n.', marks: 2, tier: 'amber', modelAnswer: `Quadratic an²+bn+c [M1, A1]` },
    ],
    red: [
      { q: 'Solve \\(a_n=2a_{n-1}+3·5^n, a_0=1\\).', marks: 6, tier: 'red', modelAnswer: `a_n = -4·2^n + 5^{n+1} [M1, M1, M1, M1, M1, A1]` },
      { q: 'Derive Fibonacci closed form via characteristic equation.', marks: 6, tier: 'red', modelAnswer: `F_n = (φ^n-ψ^n)/√5 with φ,ψ = (1±√5)/2 [M1, M1, M1, M1, M1, A1]` },
    ],
  },
};

if (typeof module !== 'undefined') module.exports = FM_OCR_WRITTEN;
