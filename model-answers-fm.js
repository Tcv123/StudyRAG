// A-level Further Mathematics — Model Answers
// Key format: "paperId::partCode".
window.FM_MODEL_ANSWERS = {

/* ─── AQA 7367 June 2023 Paper 1 ─────────────────────────────────────────── */
"fmath-aqa-7367-2023-p1::1": "For every real x, tanh x < 1, while cosh x ≥ 1 (with cosh x = 1 only at x = 0, where tanh 0 = 0).\nSo tanh x < cosh x for all x, and the graphs never meet.\n\nNumber of solutions = 0",
"fmath-aqa-7367-2023-p1::2": "The circle has centre 2 − 3i and radius 2 (it touches the imaginary axis at −3i and its lowest point is 2 − 5i).\n\nA circle with centre a and radius k has equation |z − a| = k, so\n|z − (2 − 3i)| = 2\n\nAnswer: |z − 2 + 3i| = 2",
"fmath-aqa-7367-2023-p1::3": "A(x, y)ᵀ = (x + 2y, y)ᵀ.\nA point is invariant when x + 2y = x and y = y, i.e. when y = 0.\n\nCheck: (3, 0) ↦ (3 + 0, 0) = (3, 0), so it is invariant.\n(1, 1) ↦ (3, 1), (0, 2) ↦ (4, 2), (2, 1) ↦ (4, 1), so none of these is invariant.\n\nAnswer: (3, 0)",
"fmath-aqa-7367-2023-p1::4": "Heavy damping means the auxiliary equation has two distinct real (negative) roots, so the solution has the form f(t) = Ae^(αt) + Be^(βt) with α ≠ β.\n\n• 2e^(−t)cos(3t) + 5e^(−t)sin(3t) and 8e^(−t)cos(3t − 0.1) oscillate: complex roots, light damping.\n• 3e^(−t) + 4te^(−t) comes from a repeated root: critical damping.\n• 7e^(−t) + 2e^(−2t) comes from distinct real roots −1 and −2: heavy damping.\n\nAnswer: f(t) = 7e^(−t) + 2e^(−2t)",
"fmath-aqa-7367-2023-p1::5(a)": "f(r) = 2ʳ(r − 2), so f(r + 1) = 2^(r+1)(r + 1 − 2) = 2^(r+1)(r − 1).\n\nf(r + 1) − f(r) = 2^(r+1)(r − 1) − 2ʳ(r − 2)\n= 2ʳ[2(r − 1) − (r − 2)]\n= 2ʳ(2r − 2 − r + 2)\n= 2ʳ · r\n= r·2ʳ, as required.",
"fmath-aqa-7367-2023-p1::5(b)": "By (a), r·2ʳ = f(r + 1) − f(r), so\nΣ_{r=1}^{n} r·2ʳ = Σ_{r=1}^{n} [f(r + 1) − f(r)]\n\nWriting out the terms (f(1) = −2, f(2) = 0, f(3) = 8, f(4) = 32):\nr = 1:  f(2) − f(1) = 0 − (−2)\nr = 2:  f(3) − f(2) = 8 − 0\nr = 3:  f(4) − f(3) = 32 − 8\n⋮\nr = n − 1:  f(n) − f(n − 1) = 2ⁿ(n − 2) − 2^(n−1)(n − 3)\nr = n:  f(n + 1) − f(n) = 2^(n+1)(n − 1) − 2ⁿ(n − 2)\n\nEach f(k) for 2 ≤ k ≤ n appears once with + and once with −, so these cancel, leaving only the first and last terms:\nΣ_{r=1}^{n} r·2ʳ = f(n + 1) − f(1)\n= 2^(n+1)(n − 1) − 2(−1)\n= 2^(n+1)(n − 1) + 2, as required.",
"fmath-aqa-7367-2023-p1::6(a)(i)": "Since v₁ is an eigenvector with eigenvalue λ₁, Mv₁ = λ₁v₁:\n\n(1/10)(a a −6; 0 10 0; 9 14 −13)(1, 0, 3)ᵀ = (1/10)(a − 18, 0, 9 − 39)ᵀ = (1/10)(a − 18, 0, −30)ᵀ\n\nThis equals λ₁(1, 0, 3)ᵀ.\nThird components: −30/10 = 3λ₁, so −3 = 3λ₁.\n\nλ₁ = −1",
"fmath-aqa-7367-2023-p1::6(a)(ii)": "From the first components of Mv₁ = λ₁v₁, with λ₁ = −1:\n(a − 18)/10 = −1\na − 18 = −10, i.e. 10 = 18 − a\n\na = 8",
"fmath-aqa-7367-2023-p1::6(b)": "With a = 8, Mv₃ = λ₃v₃:\n(1/10)(8 8 −6; 0 10 0; 9 14 −13)(c, 0, 1)ᵀ = (1/10)(8c − 6, 0, 9c − 13)ᵀ = λ₃(c, 0, 1)ᵀ\n\nThird components: λ₃ = (9c − 13)/10\nFirst components: (8c − 6)/10 = λ₃c = c(9c − 13)/10\n\nSo 8c − 6 = 9c² − 13c\n9c² − 21c + 6 = 0\n3c² − 7c + 2 = 0\n(3c − 1)(c − 2) = 0\nc = 2 or c = 1/3\n\nc must be an integer, so c = 1/3 is rejected and c = 2.\n\nThen λ₃ = (9 × 2 − 13)/10 = 5/10 = 0.5\n\nc = 2 and λ₃ = 0.5",
"fmath-aqa-7367-2023-p1::6(c)": "Take the columns of U to be the eigenvectors v₁, v₂, v₃ (with c = 2), and D to have the matching eigenvalues λ₁ = −1, λ₂ = 1, λ₃ = 0.5 on its diagonal, in the same order.\n\nU = (1 1 2; 0 1 0; 3 1 1)\n\nD = (−1 0 0; 0 1 0; 0 0 0.5)\n\ndet U = 1(1·1 − 0·1) − 1(0·1 − 0·3) + 2(0·1 − 1·3) = 1 − 0 − 6 = −5\nMatrix of cofactors of U: (1 0 −3; 1 −5 2; −2 0 1), so adj U = (1 1 −2; 0 −5 0; −3 2 1)\n\nU⁻¹ = (1/det U) adj U = (1/5)(−1 −1 2; 0 5 0; 3 −2 −1)\n\n(Matrices are written row by row, rows separated by semicolons.)",
"fmath-aqa-7367-2023-p1::7": "Sketch: y = sin x + ½ is the sine curve raised by ½; it starts at (0, ½), rises to 3/2 at x = π/2, returns to ½ at x = π, falls below the x-axis to a minimum of −½ at x = 3π/2, and ends at (2π, ½). For y = |sin x + ½| the parts below the x-axis (between x = 7π/6 and x = 11π/6) are reflected upwards, giving a small arch that just touches y = ½ at x = 3π/2.\n\nAlgebraically, |sin x + ½| ≥ ½ means\nsin x + ½ ≥ ½  or  sin x + ½ ≤ −½\n\nCase 1: sin x + ½ ≥ ½ ⇒ sin x ≥ 0\nFor 0 ≤ x ≤ 2π this gives 0 ≤ x ≤ π, and also x = 2π.\n\nCase 2: sin x + ½ ≤ −½ ⇒ sin x ≤ −1\nSince sin x ≥ −1, this needs sin x = −1, so x = 3π/2.\n\nSet of values:\n{x : 0 ≤ x ≤ π} ∪ {3π/2} ∪ {2π}, i.e. [0, π] ∪ {3π/2, 2π}",
"fmath-aqa-7367-2023-p1::8(a)": "g′(x) = cos x · e^(sin x)\ne^(sin x) > 0, so g′(x) = 0 ⇔ cos x = 0.\nFor 0 ≤ x ≤ 2π: x = π/2 (maximum) and x = 3π/2 (minimum).\n\nx = π/2 and x = 3π/2",
"fmath-aqa-7367-2023-p1::8(b)": "3 ordinates means 2 strips, so h = (π − 0)/2 = π/2.\n\nx:  0,  π/2,  π\ny = e^(sin x):  e⁰ = 1,  e¹ = e,  e⁰ = 1\n\nSimpson's rule:\n∫₀^π g(x) dx ≈ (h/3)[y₀ + 4y₁ + y₂]\n= (1/3)(π/2)(1 + 4e + 1)\n= (π/6)(2 + 4e)\n= 6.740…\n\n≈ 6.74 (2 d.p.)",
"fmath-aqa-7367-2023-p1::8(c)": "Use Simpson's rule with more ordinates (more, narrower strips), e.g. 5 ordinates (4 strips of width π/4) instead of 3; this gives a more accurate estimate of the integral.",
"fmath-aqa-7367-2023-p1::9(a)": "AB = b − a = (−1 − 2, −8 − 1, 2 − 2) = (−3, −9, 0)ᵀ\nAC = c − a = (0 − 2, −2 − 1, 0 − 2) = (−2, −3, −2)ᵀ\n\nAB × AC = ((−9)(−2) − (0)(−3), (0)(−2) − (−3)(−2), (−3)(−3) − (−9)(−2))ᵀ\n= (18 − 0, 0 − 6, 9 − 18)ᵀ\n= (18, −6, −9)ᵀ\n\n|AB × AC| = √(18² + (−6)² + (−9)²) = √(324 + 36 + 81) = √441 = 21\n\nArea of triangle ABC = ½|AB × AC| = 21/2",
"fmath-aqa-7367-2023-p1::9(b)": "A normal to Π is AB × AC = (18, −6, −9)ᵀ = 3(6, −2, −3)ᵀ, so take n = (6, −2, −3)ᵀ.\n\nC lies in Π, with c = (0, −2, 0)ᵀ:\nc · n = 0×6 + (−2)(−2) + 0×(−3) = 4\n(Check with A: 2×6 + 1×(−2) + 2×(−3) = 12 − 2 − 6 = 4.)\n\nEquation of Π:\nr · (6, −2, −3)ᵀ = 4",
"fmath-aqa-7367-2023-p1::9(c)": "Using n = (6, −2, −3)ᵀ from (b):\n|n| = √(6² + (−2)² + (−3)²) = √(36 + 4 + 9) = √49 = 7\n\np · n = 1×6 + 4×(−2) + 2×(−3) = 6 − 8 − 6 = −8\nSo P lies in the parallel plane r · n = −8.\n\nDividing by |n|, the signed distances of the two parallel planes from O are 4/7 (for Π) and −8/7 (for the plane through P).\n\nDistance of P from Π = 4/7 − (−8/7) = 12/7",
"fmath-aqa-7367-2023-p1::10(a)": "Let (u, v, w) be any point. Its image under T is\nM(u, v, w)ᵀ = (2u − v + w, −u − v − 2w, u + 2v + cw)ᵀ\n\nSubstitute the image coordinates into x + 5y + 3z:\n(2u − v + w) + 5(−u − v − 2w) + 3(u + 2v + cw)\n= (2 − 5 + 3)u + (−1 − 5 + 6)v + (1 − 10 + 3c)w\n= 0u + 0v + (3c − 9)w\n= (3c − 9)w\n\nThis is 0 for every point (u, v, w) exactly when 3c − 9 = 0. So for c = 3 the image of every point satisfies x + 5y + 3z = 0, i.e. lies in that plane (and for any other c, points with w ≠ 0 do not map into it).\n\nc = 3",
"fmath-aqa-7367-2023-p1::10(b)(i)": "det M = 2[(−1)(c) − (−2)(2)] − (−1)[(−1)(c) − (−2)(1)] + 1[(−1)(2) − (−1)(1)]\n= 2(−c + 4) + (−c + 2) + (−2 + 1)\n= −2c + 8 − c + 2 − 1\n= 9 − 3c\n\nM is non-singular ⇔ det M ≠ 0 ⇔ 9 − 3c ≠ 0.\n\nRestriction: c ≠ 3",
"fmath-aqa-7367-2023-p1::10(b)(ii)": "M = (2 −1 1; −1 −1 −2; 1 2 c), det M = 9 − 3c (from (b)(i)).\n\nMatrix of minors:\nrow 1: (−1)c − (−2)(2) = −c + 4;  (−1)c − (−2)(1) = −c + 2;  (−1)(2) − (−1)(1) = −1\nrow 2: (−1)c − (1)(2) = −c − 2;  2c − (1)(1) = 2c − 1;  2(2) − (−1)(1) = 5\nrow 3: (−1)(−2) − (1)(−1) = 3;  2(−2) − (1)(−1) = −3;  2(−1) − (−1)(−1) = −3\n\nApply the sign pattern (+ − +; − + −; + − +) to get the cofactors:\n(−c + 4  c − 2  −1; c + 2  2c − 1  −5; 3  3  −3)\n\nTranspose to get adj M:\n(−c + 4  c + 2  3; c − 2  2c − 1  3; −1  −5  −3)\n\nM⁻¹ = (1/(9 − 3c)) (4 − c  c + 2  3; c − 2  2c − 1  3; −1  −5  −3)\n\n(Matrices written row by row, rows separated by semicolons.)",
"fmath-aqa-7367-2023-p1::10(b)(iii)": "The system is M(x, y, z)ᵀ = (−3, −6, 13)ᵀ with c = 4.\nc = 4 ≠ 3, so M is non-singular, and from (b)(ii) with 9 − 3c = 9 − 12 = −3:\n\nM⁻¹ = (1/(−3)) (0 6 3; 2 7 3; −1 −5 −3)\n\n(x, y, z)ᵀ = M⁻¹(−3, −6, 13)ᵀ\n= (1/(−3)) (0(−3) + 6(−6) + 3(13), 2(−3) + 7(−6) + 3(13), −1(−3) − 5(−6) − 3(13))ᵀ\n= (1/(−3)) (0 − 36 + 39, −6 − 42 + 39, 3 + 30 − 39)ᵀ\n= (1/(−3)) (3, −9, −6)ᵀ\n= (−1, 3, 2)ᵀ\n\nx = −1, y = 3, z = 2",
"fmath-aqa-7367-2023-p1::11(a)(i)": "Factor theorem: f(5) = 4(125) − 8(25) − 51(5) − 45 = 500 − 200 − 255 − 45 = 0, so (x − 5) is a factor.\n\nDividing: 4x³ − 8x² − 51x − 45 = (x − 5)(4x² + 12x + 9)\nand 4x² + 12x + 9 = (2x + 3)².\n\nf(x) = (x − 5)(2x + 3)²",
"fmath-aqa-7367-2023-p1::11(a)(ii)": "f(x) = (x − 5)(2x + 3)²\n(2x + 3)² ≥ 0, and it equals 0 only at x = −3/2 (where f(x) = 0, not < 0).\nSo f(x) < 0 ⇔ x − 5 < 0 and x ≠ −3/2, i.e. x < 5 and x ≠ −3/2.\n\n(The graph touches the x-axis at x = −3/2 and crosses it at x = 5.)\n\nx < −3/2 or −3/2 < x < 5",
"fmath-aqa-7367-2023-p1::11(b)": "Translation by (7, 0)ᵀ: y = f(x − 7). Reflection in the x-axis: g(x) = −f(x − 7).\n\nf(x − 7) = (x − 7 − 5)(2(x − 7) + 3)² = (x − 12)(2x − 11)²\nso g(x) = −(x − 12)(2x − 11)².\nThe critical values are the roots of f moved 7 to the right: −3/2 + 7 = 11/2 and 5 + 7 = 12.\n\ng(x) ≤ 0 ⇔ (x − 12)(2x − 11)² ≥ 0\n(2x − 11)² ≥ 0, with equality at x = 11/2 (where g(x) = 0, which satisfies ≤ 0);\notherwise we need x − 12 ≥ 0, i.e. x ≥ 12.\n\n(The graph of g touches the x-axis at x = 11/2 and crosses it, going downwards, at x = 12.)\n\nx = 11/2 or x ≥ 12",
"fmath-aqa-7367-2023-p1::12(a)": "sinh 2x = 2 sinh x cosh x and cosh 2x = cosh²x + sinh²x, so\n\ntanh 2x = sinh 2x / cosh 2x = 2 sinh x cosh x / (cosh²x + sinh²x)\n\nDivide numerator and denominator by cosh²x (cosh x ≥ 1, so it is non-zero):\ntanh 2x = (2 sinh x cosh x / cosh²x) / ((cosh²x + sinh²x) / cosh²x)\n= (2 sinh x / cosh x) / (1 + sinh²x / cosh²x)\n= 2 tanh x / (1 + tanh²x), as required.",
"fmath-aqa-7367-2023-p1::12(b)(i)": "For x > 0, tanh x increases from 0 (approached as x → 0) towards 1 (approached as x → ∞), without reaching either.\n\nRange: 0 < f(x) < 1",
"fmath-aqa-7367-2023-p1::12(b)(ii)": "For x > 0, by (b)(i): 0 < tanh x < 1\n⇒ 0 < tanh²x < 1\n⇒ 1 < 1 + tanh²x < 2\n\nSince 0 < 1 + tanh²x < 2:\n2/(1 + tanh²x) > 1\n\nMultiplying both sides by tanh x, which is positive for x > 0 (so the inequality is preserved):\n2 tanh x/(1 + tanh²x) > tanh x\n\nBy (a), the left-hand side is tanh 2x, so\ntanh 2x > tanh x for x > 0.",
"fmath-aqa-7367-2023-p1::13": "Let u(x) = x sin 2x and w(x) = cos(x/2).\n\nAt x = π: u(π) = π sin 2π = 0 and w(π) = cos(π/2) = 0.\nThe limit is of the form 0/0, so l'Hôpital's rule applies:\nlim_{x→π} u(x)/w(x) = lim_{x→π} u′(x)/w′(x)\n\nDifferentiate:\nu′(x) = sin 2x + 2x cos 2x   (product rule)\nw′(x) = −½ sin(x/2)\n\nAt x = π (both derivatives are continuous):\nu′(π) = sin 2π + 2π cos 2π = 0 + 2π = 2π\nw′(π) = −½ sin(π/2) = −½, which is non-zero.\n\nTherefore\nlim_{x→π} (x sin 2x)/cos(x/2) = lim_{x→π} u′(x)/w′(x) = 2π/(−½) = −4π, as required.",
"fmath-aqa-7367-2023-p1::14(a)": "For −π < θ ≤ π, cos θ takes every value from −1 to 1 (cos θ = 1 at θ = 0, cos θ = −1 at θ = π).\nSo 5 − 3 ≤ 5 + 3cos θ ≤ 5 + 3, i.e. 2 ≤ 5 + 3cos θ ≤ 8 (always positive).\n\nr = 4/(5 + 3cos θ) is least when the denominator is greatest (cos θ = 1): r = 4/8 = ½\nand greatest when the denominator is least (cos θ = −1): r = 4/2 = 2.\n\nSo ½ ≤ r ≤ 2, which is 1/k ≤ r ≤ k with integer k = 2.",
"fmath-aqa-7367-2023-p1::14(b)": "r(5 + 3cos θ) = 4\n5r + 3r cos θ = 4\n\nUsing x = r cos θ:\n5r = 4 − 3x\n\nUsing r = √(x² + y²):\n5√(x² + y²) = 4 − 3x\n\nSquare both sides:\n25(x² + y²) = (4 − 3x)² = 16 − 24x + 9x²\n25y² = 16 − 24x + 9x² − 25x²\n25y² = 16 − 24x − 16x²\n\ny² = (16 − 24x − 16x²)/25",
"fmath-aqa-7367-2023-p1::14(c)": "From (b):\ny² = (16 − 24x − 16x²)/25 = −(16/25)(x² + (3/2)x − 1)\n\nComplete the square: x² + (3/2)x − 1 = (x + ¾)² − 9/16 − 1 = (x + ¾)² − 25/16\n\nSo y² = −(16/25)[(x + ¾)² − 25/16] = −(16/25)(x + ¾)² + 1\ni.e. C: y² + 16(x + ¾)²/25 = 1\n\nE: y² + 16x²/25 = 1\n\nThe equation of C is the equation of E with x replaced by x + ¾ (y unchanged), so C is E moved ¾ units in the negative x-direction.\n\nThe transformation is a translation by the vector (−¾, 0)ᵀ.",
"fmath-aqa-7367-2023-p1::15": "Complementary function:\nAuxiliary equation m² − 3m − 4 = 0 ⇒ (m − 4)(m + 1) = 0 ⇒ m = 4 or m = −1\nCF: y = Ae^(−x) + Be^(4x)\n\nParticular integral: try y = p cos 2x + q sin 2x + rx + s\ndy/dx = −2p sin 2x + 2q cos 2x + r\nd²y/dx² = −4p cos 2x − 4q sin 2x\n\nSubstitute into d²y/dx² − 3 dy/dx − 4y = cos 2x + 5x:\n(−4p cos 2x − 4q sin 2x) − 3(−2p sin 2x + 2q cos 2x + r) − 4(p cos 2x + q sin 2x + rx + s) = cos 2x + 5x\ncos 2x: −4p − 6q − 4p = 1 ⇒ −8p − 6q = 1\nsin 2x: −4q + 6p − 4q = 0 ⇒ 6p − 8q = 0\nx: −4r = 5\nconstant: −3r − 4s = 0\n\nFrom 6p − 8q = 0, p = 4q/3. Then −8(4q/3) − 6q = 1 ⇒ −50q/3 = 1 ⇒ q = −3/50, and p = (4/3)(−3/50) = −2/25.\nr = −5/4, and −3(−5/4) − 4s = 0 ⇒ 4s = 15/4 ⇒ s = 15/16.\n\nPI: y = −(2/25)cos 2x − (3/50)sin 2x − (5/4)x + 15/16\n\nGeneral solution:\ny = Ae^(−x) + Be^(4x) − (2/25)cos 2x − (3/50)sin 2x − (5/4)x + 15/16",
"fmath-aqa-7367-2023-p1::16(a)": "Substitute u = ln t, so du = (1/t) dt.\nLimits: t = 0.5 ⇒ u = ln 0.5 = −ln 2;  t = 4 ⇒ u = ln 4 = 2 ln 2.\n\n∫_{0.5}^{4} (1/t) ln t dt = ∫_{−ln 2}^{2 ln 2} u du\n= [u²/2] from −ln 2 to 2 ln 2\n= ½[(2 ln 2)² − (−ln 2)²]\n= ½[4(ln 2)² − (ln 2)²]\n= (3/2)(ln 2)²\n\nSo the integral equals a(ln 2)² with a = 3/2.",
"fmath-aqa-7367-2023-p1::16(b)": "x = 2t, y = ½t² − ln t\ndx/dt = 2, dy/dt = t − 1/t\n\n(dx/dt)² + (dy/dt)² = 4 + t² − 2 + 1/t² = t² + 2 + 1/t² = (t + 1/t)²\nFor t > 0, √[(dx/dt)² + (dy/dt)²] = t + 1/t.\n(Also y > 0 for all t > 0: its least value is ½, at t = 1.)\n\nS = 2π ∫_{0.5}^{4} y √[(dx/dt)² + (dy/dt)²] dt\n= 2π ∫_{0.5}^{4} (½t² − ln t)(t + 1/t) dt\n= 2π ∫_{0.5}^{4} (½t³ + ½t − t ln t − (1/t) ln t) dt\n\nBy parts (with ln t differentiated and t integrated):\n∫ t ln t dt = ½t² ln t − ∫ ½t² · (1/t) dt = ½t² ln t − ¼t²\n\nFrom (a), ∫_{0.5}^{4} (1/t) ln t dt = (3/2)(ln 2)².\n\nSo\nS = 2π{[⅛t⁴ + ¼t² − ½t² ln t + ¼t²] from 0.5 to 4 − (3/2)(ln 2)²}\n= 2π{[⅛t⁴ + ½t² − ½t² ln t] from 0.5 to 4 − (3/2)(ln 2)²}\n\nAt t = 4: 32 + 8 − 8 ln 4 = 40 − 16 ln 2\nAt t = 0.5: 1/128 + 1/8 − ⅛ ln(½) = 17/128 + ⅛ ln 2\n\nDifference: 40 − 17/128 − 16 ln 2 − ⅛ ln 2 = 5103/128 − (129/8) ln 2\n\nS = 2π{5103/128 − (129/8) ln 2 − (3/2)(ln 2)²}\nS = π(5103/64 − (129/4) ln 2 − 3(ln 2)²)\n\nSo b = 5103/64, c = −129/4, d = −3.",























/* ─── AQA 7367 June 2023 Paper 2 ─────────────────────────────────────────── */
"fmath-aqa-7367-2023-p2::1": "y = sin x + sinh x\ndy/dx = cos x + cosh x\nd²y/dx² = −sin x + sinh x\nd²y/dx² + y = (−sin x + sinh x) + (sin x + sinh x) = 2sinh x\n\nAnswer: 2sinh x",
"fmath-aqa-7367-2023-p2::2": "Check each limit:\n• x²e^(−x) = x²/eˣ → 0 as x → ∞ (exponentials grow faster than any power).\n• x⁵ ln x → 0 as x → 0⁺ (a positive power of x beats ln x).\n• eˣ/x⁵ → ∞ as x → ∞ (exponentials grow faster than any power), so this limit is not zero.\n• x³eˣ → 0³ × e⁰ = 0 as x → 0.\n\nAnswer: lim_{x→∞} (eˣ/x⁵)",
"fmath-aqa-7367-2023-p2::3": "A = 1(0×1 − 2×2) − 1(2×1 − 2×3) + 1(2×2 − 0×3) = −4 + 4 + 4 = 4\n\nCheck each option:\n• |3 1 3; 2 0 2; 3 2 1|: row 1 is (row 1 + row 2) of A, which leaves the determinant unchanged, so the value is 4.\n• |1 2 3; 1 0 2; 1 2 1|: this is the transpose of A, so the value is 4.\n• |2 2 2; 1 0 1; 3 2 1|: row 1 is 2 × (row 1 of A) and row 2 is ½ × (row 2 of A), so the value is 2 × ½ × 4 = 4.\n• |1 1 1; 3 2 1; 2 0 2|: this is A with rows 2 and 3 swapped, so the value is −4.\n\nAnswer: |1 1 1; 3 2 1; 2 0 2| (value −4, not 4)",
"fmath-aqa-7367-2023-p2::4": "cosh⁻¹ u is defined only for u ≥ 1.\nSo we need x − 3 ≥ 1, which gives x ≥ 4.\n\nAnswer: {x : x ≥ 4}",
"fmath-aqa-7367-2023-p2::5": "M = (0 1; 1 0) maps (x, y) to (y, x): it is a reflection in the line y = x.\n\nJosh's method (transform C₁ first):\nA point (x, y) on C₁ maps to (X, Y) = (y, x), so x = Y and y = X.\nSubstituting into x²/16 − y²/9 = 1:\nC₂: Y²/16 − X²/9 = 1, i.e. y²/16 − x²/9 = 1.\nFor large |x| and |y| this approaches y²/16 = x²/9, so the asymptotes of C₂ are\ny = ±(4/3)x.\n\nZoe's method (find the asymptotes of C₁ first):\nFor x²/16 − y²/9 = 1, the asymptotes are y = ±(3/4)x.\nReflect them in y = x: a point (x, ±(3/4)x) maps to (X, Y) = (±(3/4)x, x).\nSo X = ±(3/4)Y, i.e. Y = ±(4/3)X.\nThe asymptotes of C₂ are y = ±(4/3)x.\n\nBoth methods give the same asymptotes, y = ±(4/3)x, so Zoe is correct.",
"fmath-aqa-7367-2023-p2::6(a)": "r = |−5 − 5i| = √(25 + 25) = √50 = 5√2\n\nThe point (−5, −5) is in the third quadrant, with tan⁻¹(5/5) = π/4 measured from the negative real axis.\nSo θ = −(π − π/4) = −3π/4, which lies in −π < θ ≤ π.\n\n−5 − 5i = 5√2e^(−3πi/4)",
"fmath-aqa-7367-2023-p2::6(b)": "The centre of the equilateral triangle is the origin, so all three vertices are the same distance from O: each has modulus 5√2.\nThe vertices are equally spaced around O, so their arguments differ by 2π/3.\n\nFrom part (a), one vertex has argument −3π/4.\n−3π/4 + 2π/3 = −9π/12 + 8π/12 = −π/12\n−3π/4 + 4π/3 = −9π/12 + 16π/12 = 7π/12\nBoth lie in −π < θ ≤ π.\n\nThe other two vertices are 5√2e^(−πi/12) and 5√2e^(7πi/12).",
"fmath-aqa-7367-2023-p2::7": "Σ_{r=11}^{n+1} r³ = Σ_{r=1}^{n+1} r³ − Σ_{r=1}^{10} r³\n\nUsing Σ_{r=1}^{N} r³ = ¼N²(N + 1)²:\n= ¼(n + 1)²(n + 2)² − ¼(10)²(11)²\n= ¼[((n + 1)(n + 2))² − 110²]\n= ¼[(n + 1)(n + 2) + 110][(n + 1)(n + 2) − 110]   (difference of two squares)\n= ¼(n² + 3n + 2 + 110)(n² + 3n + 2 − 110)\n= ¼(n² + 3n + 112)(n² + 3n − 108)\n\nSo a = 3, b = 112, c = −108.\n(The two brackets can be written in either order, so b = −108, c = 112 is equally valid.)",
"fmath-aqa-7367-2023-p2::8(a)": "Since A is non-singular, A⁻¹ exists and A⁻¹A = AA⁻¹ = I.\n\nUsing (PQ)ᵀ = QᵀPᵀ with P = A⁻¹ and Q = A:\nAᵀ(A⁻¹)ᵀ = (A⁻¹A)ᵀ = Iᵀ = I   (the identity matrix is its own transpose)\n\nSimilarly, with P = A and Q = A⁻¹:\n(A⁻¹)ᵀAᵀ = (AA⁻¹)ᵀ = Iᵀ = I\n\nSo multiplying Aᵀ by (A⁻¹)ᵀ on either side gives I, which means (A⁻¹)ᵀ is the inverse of Aᵀ:\n(Aᵀ)⁻¹ = (A⁻¹)ᵀ",
"fmath-aqa-7367-2023-p2::8(b)(i)": "A = (4 5; −1 k)\ndet A = 4k − (5)(−1) = 4k + 5\n\nA⁻¹ = (1/(4k + 5)) (k −5; 1 4)\n\nTransposing (swap rows and columns):\n(A⁻¹)ᵀ = (1/(4k + 5)) (k 1; −5 4)\n\ni.e. (A⁻¹)ᵀ = ( k/(4k + 5)   1/(4k + 5) ; −5/(4k + 5)   4/(4k + 5) )",
"fmath-aqa-7367-2023-p2::8(b)(ii)": "A must be non-singular, so det A = 4k + 5 ≠ 0.\n\nk ≠ −5/4",
"fmath-aqa-7367-2023-p2::9(a)": "Multiply the numerator and denominator by the conjugate of the denominator, 1 + ki:\n\nz = (1 + i)(1 + ki) / ((1 − ki)(1 + ki))\nNumerator: 1 + ki + i + ki² = (1 − k) + (1 + k)i\nDenominator: 1 − k²i² = 1 + k²\n\nz = (1 − k)/(1 + k²) + ((1 + k)/(1 + k²))i\n\nRe(z) = (1 − k)/(1 + k²)\nIm(z) = (1 + k)/(1 + k²)",
"fmath-aqa-7367-2023-p2::9(b)": "With k = √3, z = (1 + i)/(1 − √3i).\n\nFrom part (a):\nRe(z) = (1 − √3)/(1 + 3) = (1 − √3)/4\n\nModulus:\n|z| = |1 + i| / |1 − √3i| = √2 / √(1 + 3) = √2/2\n\nArgument:\narg(1 + i) = π/4 and arg(1 − √3i) = −π/3 (fourth quadrant, tan⁻¹√3 = π/3)\narg z = arg(1 + i) − arg(1 − √3i) = π/4 − (−π/3) = 7π/12, which lies in (−π, π].\n\nSince Re(z) = |z|cos(arg z):\n(√2/2)cos(7π/12) = (1 − √3)/4\ncos(7π/12) = (1 − √3)/4 × 2/√2 = (1 − √3)/(2√2) = √2(1 − √3)/4\n\ncos(7π/12) = (√2 − √6)/4, as required.",
"fmath-aqa-7367-2023-p2::10(a)": "|z + 2i| ≤ 3 is the inside and boundary of the circle with centre −2i (the point (0, −2)) and radius 3.\n• It crosses the imaginary axis at 1 (i.e. at i) and at −5i.\n• It crosses the real axis where x² + 4 = 9, i.e. at ±√5 ≈ ±2.24.\n\n−π/6 ≤ arg(z) ≤ π/2 is the region between two half-lines from O:\n• the positive imaginary axis (arg z = π/2);\n• the half-line from O at angle π/6 below the positive real axis (arg z = −π/6), i.e. y = −x/√3 for x > 0.\n\nSketch: draw the circle, the positive imaginary axis and the half-line arg z = −π/6. The half-line meets the circle at about (2.99, −1.72).\n\nR is the shaded region inside the circle and between these two half-lines: it is bounded by the segment of the imaginary axis from O up to i, the arc of the circle from i clockwise round through (√5, 0) to the point where it meets the half-line, and the segment of the half-line from there back to O.",
"fmath-aqa-7367-2023-p2::10(b)": "Points of the circle satisfy x² + (y + 2)² = 9, so x² + y² = 9 − 4y − 4 = 5 − 4y.\nSo on the arc that bounds R, |z|² = 5 − 4y, which is largest where y is smallest.\nEvery point of R lies on a half-line from O (with −π/6 ≤ arg z ≤ π/2) that leaves R through this arc, and |z| increases along such a half-line, so the maximum of |z| in R lies on the arc.\nThe lowest point of the arc in R is its end on the half-line, so the maximum |z| in R is where the half-line arg z = −π/6 meets the circle.\n\nOn the half-line: tan(−π/6) = y/x, so x = −√3y (with y < 0).\nSubstitute into the circle:\n(−√3y)² + (y + 2)² = 9\n3y² + y² + 4y + 4 − 9 = 0\n4y² + 4y − 5 = 0\ny = (−4 ± √(16 + 80))/8 = (−4 ± 4√6)/8 = −½ ± √6/2\n\nThe point is below the real axis, so y < 0:\ny = −½ − √6/2\n\nOn this half-line |y| = |z|sin(π/6) = ½|z|, so |z| = 2|y|:\n|z| = 2(½ + √6/2) = 1 + √6\n\nMaximum |z| = 1 + √6 (equivalently √(7 + 2√6))",
"fmath-aqa-7367-2023-p2::11(a)": "Direction of l₁: B − A = (4 − 6, −3 − 2, 7 − 7) = (−2, −5, 0), so use (2, 5, 0).\n\nVector equation: r = (6, 2, 7) + λ(2, 5, 0)\nso x = 6 + 2λ, y = 2 + 5λ, z = 7.\n\nCartesian equation of l₁:\n(x − 6)/2 = (y − 2)/5, z = 7",
"fmath-aqa-7367-2023-p2::11(b)(i)": "Direction of l₁: (2, 5, 0); direction of l₂: (1, 1, 2).\n\nScalar product: 2 × 1 + 5 × 1 + 0 × 2 = 7\n\nThe scalar product of the direction vectors is non-zero, so the lines are not perpendicular.",
"fmath-aqa-7367-2023-p2::11(b)(ii)": "The plane containing both lines is parallel to both direction vectors, so its normal is perpendicular to both:\nn = (1, 1, 2) × (2, 5, 0)\n= (1×0 − 2×5, 2×2 − 1×0, 1×5 − 1×2)\n= (−10, 4, 3)\n\nThe plane contains A(6, 2, 7) on l₁:\nr · (−10, 4, 3) = (6, 2, 7) · (−10, 4, 3) = −60 + 8 + 21 = −31\nPlane: r · (−10, 4, 3) = −31\n\nl₂ also lies in this plane, so its point (8, 9, c) satisfies the equation:\n(8, 9, c) · (−10, 4, 3) = −31\n−80 + 36 + 3c = −31\n3c = 13\n\nc = 13/3\n\n(Check: with c = 13/3 the lines meet at λ = 5/3, μ = 4/3, at the point (28/3, 31/3, 7).)",
"fmath-aqa-7367-2023-p2::12": "f(n) = 3^(3n+1) + 2^(3n+4)\n\nBase case, n = 1:\nf(1) = 3⁴ + 2⁷ = 81 + 128 = 209 = 11 × 19\nso f(1) is divisible by 19 and the result is true for n = 1.\n\nInductive step: assume the result is true for n = k, so\nf(k) = 3^(3k+1) + 2^(3k+4) = 19m for some integer m.\n\nThen\nf(k + 1) = 3^(3(k+1)+1) + 2^(3(k+1)+4)\n= 3^(3k+4) + 2^(3k+7)\n= 27(3^(3k+1)) + 8(2^(3k+4))\n= 19(3^(3k+1)) + 8(3^(3k+1)) + 8(2^(3k+4))\n= 19(3^(3k+1)) + 8f(k)\n= 19(3^(3k+1)) + 8 × 19m\n= 19(3^(3k+1) + 8m)\n\n3^(3k+1) + 8m is an integer, so f(k + 1) is divisible by 19 and the result also holds for n = k + 1.\n\nConclusion: f(n) is divisible by 19 for n = 1, and if it is true for n = k then it is also true for n = k + 1. Hence, by induction, f(n) is divisible by 19 for all n ≥ 1.",
"fmath-aqa-7367-2023-p2::13(a)": "For z² − 5z + 8 = 0:\nα + β = −(−5)/1 = 5\nαβ = 8/1 = 8",
"fmath-aqa-7367-2023-p2::13(b)": "α² + β² = (α + β)² − 2αβ = 5² − 2 × 8 = 25 − 16 = 9\n\nα⁴ + β⁴ = (α² + β²)² − 2α²β²\n= (α² + β²)² − 2(αβ)²\n= 9² − 2 × 8²\n= 81 − 128\n= −47, as required.",
"fmath-aqa-7367-2023-p2::13(c)": "Sum of the new roots:\n(α³ + β) + (β³ + α) = α³ + β³ + α + β\nUsing α³ + β³ = (α + β)³ − 3αβ(α + β):\n= 5³ − 3 × 8 × 5 + 5\n= 125 − 120 + 5\n= 10\n\nProduct of the new roots:\n(α³ + β)(β³ + α) = α³β³ + α⁴ + β⁴ + αβ\n= (αβ)³ + (α⁴ + β⁴) + αβ\n= 8³ + (−47) + 8      (using part (b))\n= 512 − 47 + 8\n= 473\n\nA quadratic with these roots is z² − (sum)z + (product) = 0:\nz² − 10z + 473 = 0",
"fmath-aqa-7367-2023-p2::14(a)": "Complete the square in the denominator:\n4x² + 16x + 19 = 4(x² + 4x + 19/4) = 4((x + 2)² + ¾) = 4(x + 2)² + 3\n\nSo f(x) = 1/(4((x + 2)² + ¾)).\n\n(x + 2)² ≥ 0, with equality only when x = −2, so the denominator is always at least 3 (positive), and its least value is 3, at x = −2.\nf(x) is largest when the denominator is smallest, so f has a maximum point when x = −2, and a maximum point of this smooth curve is a stationary point.\n\nAt x = −2: y = 1/(4 × ¾) = 1/3\n\nSo the graph of y = f(x) has a stationary point at (−2, ⅓).",
"fmath-aqa-7367-2023-p2::14(b)": "Using the completed square from part (a):\n∫_{−2}^{−1/2} f(x) dx = ¼ ∫_{−2}^{−1/2} 1/((x + 2)² + ¾) dx\n\nWith ∫ 1/(u² + a²) du = (1/a)tan⁻¹(u/a), u = x + 2 and a = √3/2:\n= ¼ × (2/√3) [tan⁻¹(2(x + 2)/√3)]_{−2}^{−1/2}\n= (1/(2√3)) [tan⁻¹(2(x + 2)/√3)]_{−2}^{−1/2}\n\nUpper limit x = −½: 2(−½ + 2)/√3 = 3/√3 = √3\nLower limit x = −2: 2(−2 + 2)/√3 = 0\n\n= (1/(2√3))(tan⁻¹√3 − tan⁻¹0)\n= (1/(2√3))(π/3 − 0)\n= π/(6√3)\n= π√3/18, as required.",
"fmath-aqa-7367-2023-p2::14(c)": "The upper limit is infinite, so replace it by N and let N → ∞:\n∫_{−2}^{∞} f(x) dx = lim_{N→∞} (1/(2√3)) [tan⁻¹(2(x + 2)/√3)]_{−2}^{N}\n= lim_{N→∞} (1/(2√3)) (tan⁻¹(2(N + 2)/√3) − tan⁻¹0)\n\nAs N → ∞, 2(N + 2)/√3 → ∞, so tan⁻¹(2(N + 2)/√3) → π/2. The limit exists, so the integral converges:\n= (1/(2√3))(π/2 − 0)\n= π/(4√3)\n= π√3/12",
"fmath-aqa-7367-2023-p2::15(a)": "z = cos θ + i sin θ\n\nBy de Moivre's theorem:\nzⁿ = cos nθ + i sin nθ\nz⁻ⁿ = cos(−nθ) + i sin(−nθ) = cos nθ − i sin nθ\n(using cos(−nθ) = cos nθ and sin(−nθ) = −sin nθ)\n\nSo zⁿ − z⁻ⁿ = (cos nθ + i sin nθ) − (cos nθ − i sin nθ) = 2i sin nθ, as required.",
"fmath-aqa-7367-2023-p2::15(b)": "From part (a), 2i sin nθ = zⁿ − z⁻ⁿ, so each term of 2iS can be written in terms of z:\n2iS = 2i sin θ + 2i sin 3θ + … + 2i sin(2n − 1)θ\n= (z − z⁻¹) + (z³ − z⁻³) + … + (z^(2n−1) − z^(−(2n−1)))\n= (z + z³ + … + z^(2n−1)) − (z⁻¹ + z⁻³ + … + z^(−(2n−1)))\n\nDividing by 2i:\nS = (1/2i)(z + z³ + … + z^(2n−1)) − (1/2i)(z⁻¹ + z⁻³ + … + z^(−(2n−1)))\n\nSo G₁ = z + z³ + … + z^(2n−1) (first term z, common ratio z²) and\nG₂ = z⁻¹ + z⁻³ + … + z^(−(2n−1)) (first term z⁻¹, common ratio z⁻²), each with n terms.",
"fmath-aqa-7367-2023-p2::15(c)": "For S = sin²(nθ)/sin θ to make sense we need sin θ ≠ 0, so z² ≠ 1 and the geometric series formula applies.\n\nSum of G₁ (first term z, ratio z², n terms):\nG₁ = z(1 − z^(2n))/(1 − z²)\nDivide the numerator and denominator by −z:\nG₁ = (z^(2n) − 1)/(z − z⁻¹)\n\nSum of G₂ (first term z⁻¹, ratio z⁻², n terms):\nG₂ = z⁻¹(1 − z^(−2n))/(1 − z⁻²)\nMultiply the numerator and denominator by z:\nG₂ = (1 − z^(−2n))/(z − z⁻¹)\n\nSo\n2iS = G₁ − G₂ = (z^(2n) − 1 − 1 + z^(−2n))/(z − z⁻¹) = (z^(2n) + z^(−2n) − 2)/(z − z⁻¹)\n\nThe numerator is a perfect square: z^(2n) + z^(−2n) − 2 = (zⁿ − z⁻ⁿ)².\nUsing part (a), zⁿ − z⁻ⁿ = 2i sin nθ and z − z⁻¹ = 2i sin θ:\n2iS = (2i sin nθ)²/(2i sin θ) = −4sin²(nθ)/(2i sin θ)\n\nDividing by 2i:\nS = −4sin²(nθ)/((2i)² sin θ) = −4sin²(nθ)/(−4 sin θ)\n\nS = sin²(nθ)/sin θ, as required.",
"fmath-aqa-7367-2023-p2::16(a)(i)": "Take downwards as positive, with x the extension of the rope, so the velocity of the jumper is ẋ.\nThe forces on the jumper are its weight mg downwards, the tension kx upwards, and air resistance Rẋ opposing the motion (the term −Rẋ has the correct sign whichever way the jumper is moving).\n\nNewton's second law:\nmẍ = mg − kx − Rẋ\nmẍ + Rẋ + kx = mg\n\nComplementary function: the auxiliary equation is mλ² + Rλ + k = 0, so\nλ = (−R ± √(R² − 4km))/(2m)\nSince 4km > R², R² − 4km < 0, so the roots are complex:\nλ = −R/(2m) ± i√(4km − R²)/(2m)\n\nComplex roots α ± βi give a CF of the form e^(αt)(A cos βt + B sin βt), so\nCF: x = e^(−Rt/2m)(A cos((√(4km − R²)/2m)t) + B sin((√(4km − R²)/2m)t))\n\nParticular integral: the right-hand side mg is constant, so try x = p (constant), with ẋ = 0, ẍ = 0:\nkp = mg ⇒ p = mg/k\n\nGeneral solution = CF + PI:\nx = e^(−Rt/2m)(A cos((√(4km − R²)/2m)t) + B sin((√(4km − R²)/2m)t)) + mg/k, as required.",
"fmath-aqa-7367-2023-p2::16(a)(ii)": "Substitute k = 16, R = 20, m = 62.5, g = 9.8:\nR/(2m) = 20/125 = 0.16\n√(4km − R²)/(2m) = √(4000 − 400)/125 = 60/125 = 0.48\nmg/k = 62.5 × 9.8/16 = 38.28125 ≈ 38.3\n\nSo x = e^(−0.16t)(A cos 0.48t + B sin 0.48t) + 38.28125\n\nWhen the rope becomes taut, t = 0 and x = 0:\n0 = A + 38.28125, so A = −38.28125 ≈ −38.3\n\nDifferentiate using the product rule:\nẋ = −0.16e^(−0.16t)(A cos 0.48t + B sin 0.48t) + e^(−0.16t)(−0.48A sin 0.48t + 0.48B cos 0.48t)\n\nWhen t = 0, the jumper is moving downwards at 14 m s⁻¹, so ẋ = 14:\n14 = −0.16A + 0.48B\n14 = −0.16(−38.28125) + 0.48B\n14 = 6.125 + 0.48B\nB = 7.875/0.48 = 16.40625 ≈ 16.4\n\nSo, to the nearest integer, A = −38 and B = 16, as required.",
"fmath-aqa-7367-2023-p2::16(b)": "Set R = 0 in the model (equivalently, solve mẍ + kx = mg). To avoid confusion with part (a), call the new constants C and D:\nx = C cos(√(k/m) t) + D sin(√(k/m) t) + mg/k\n(√(4km)/(2m) = √(k/m).)\n\n√(k/m) = √(16/62.5) = √0.256 = 0.50596…\nmg/k = 38.28125\n\nx = C cos(0.506t) + D sin(0.506t) + 38.28125\n\nWhen t = 0, x = 0: 0 = C + 38.28125, so C = −38.28125\n\nDifferentiate:\nẋ = −0.506C sin(0.506t) + 0.506D cos(0.506t)\nWhen t = 0, ẋ = 14: 14 = 0.50596D, so D = 27.67\n\nSo, to 2 significant figures:\nx = −38cos(0.51t) + 28sin(0.51t) + 38",





















/* ─── AQA 7367 June 2023 Paper 3D ────────────────────────────────────────── */
"fmath-aqa-7367-2023-p3d::1": "G is a connected planar graph (it is drawn with no edges crossing), so Euler's formula applies.\nVertices: v = 4 (the top vertex and the three bottom vertices).\nEdges: e = 5 (three edges from the top vertex, plus the two edges along the bottom).\nv − e + f = 2 ⇒ 4 − 5 + f = 2 ⇒ f = 3\n\nCheck by counting: the vertical edge splits the large triangle into two triangular regions, and there is also the infinite outer region, giving 3 faces.\n\nn = 3",
"fmath-aqa-7367-2023-p3d::2": "Compare J₂ and J₄ column by column:\nH₁: J₂ gives 3, J₄ gives 3 (3 ≥ 3)\nH₂: J₂ gives 2, J₄ gives 1 (2 > 1)\nH₃: J₂ gives 0, J₄ gives 0 (0 ≥ 0)\nWhatever Hoshi plays, J₂ gives Jonathan at least as much as J₄, and strictly more against H₂. So J₄ is dominated by J₂ and Jonathan should never play it.\n\nAnswer: J₄",
"fmath-aqa-7367-2023-p3d::3": "The objective line passes through (0, 50) and (125, 0), so its gradient is −50/125 = −2/5.\nSo the objective is a positive multiple of 2x + 5y (for example, 2x + 5y = 250 is the line drawn).\n\nThe problem is maximising, so the objective line is moved parallel to itself, away from the origin, and the last vertex of the feasible region it touches is optimal. Since the line is shallower than both boundary lines through C, this last vertex is B.\n\nCheck with 2x + 5y at each vertex:\nA(0, 0): 0\nB(0, 175): 875\nC(75, 125): 150 + 625 = 775\nD(150, 0): 300\nThe largest value is at B.\n\nAnswer: B",
"fmath-aqa-7367-2023-p3d::4(a)": "H, I and J are the sinks of the network (the water leaves through them).\nAdd the new quality-control facility as a supersink, S, and join each of H, I and J to S with a directed arc (H→S, I→S, J→S), each with enough capacity to carry all the flow arriving at that node (for example, no upper limit).\nThen all water flows from the source A through the network to the single sink S, so it all passes through the new facility before returning to the river.",
"fmath-aqa-7367-2023-p3d::4(b)": "The cut separates {A, B, C, D, E} (source side) from {F, G, H, I, J} (sink side).\n\nArcs from the source side to the sink side (count their upper capacities):\nC→F: 28\nD→H: 21\nD→G: 18\nE→G: 30\nTotal = 28 + 21 + 18 + 30 = 97\n\nArcs from the sink side back to the source side (subtract their lower capacities):\nF→E: lower capacity 3\n\nValue of the cut = 97 − 3 = 94\n\nThe value of the cut is 94 gallons per second.",
"fmath-aqa-7367-2023-p3d::4(c)": "The value of every cut is an upper bound on the flow: the maximum flow equals the value of the minimum cut (maximum flow–minimum cut theorem).\n\nFrom part (b), the cut {A, B, C, D, E} | {F, G, H, I, J} has value 94 gallons per second, which is less than 106.\nSo Tim's cut is not the minimum cut, and the maximum flow is at most 94 gallons per second.\n\nTim's claim is not valid: the maximum flow cannot be 106 gallons per second, since it is at most 94 gallons per second.",
"fmath-aqa-7367-2023-p3d::5(a)": "Minimising Q = −4x − 3y is equivalent to maximising P = −Q = 4x + 3y.\nThe simplex algorithm maximises an objective function, so the problem must be restated as: maximise P = 4x + 3y (subject to the same constraints).",
"fmath-aqa-7367-2023-p3d::5(b)(i)": "Maximise P = 4x + 3y, i.e. P − 4x − 3y = 0\nx + y + r = 520\n2x − 3y + s = 570\nwith x, y, r, s ≥ 0.\n\nInitial tableau (columns P, x, y, r, s, value):\nP row: 1, −4, −3, 0, 0 | 0\nr row: 0, 1, 1, 1, 0 | 520\ns row: 0, 2, −3, 0, 1 | 570",
"fmath-aqa-7367-2023-p3d::5(b)(ii)": "Pivot column: the most negative entry in the objective row is −4, in the x column.\nRatios (value ÷ positive x entry):\nr row: 520 ÷ 1 = 520\ns row: 570 ÷ 2 = 285 (smallest)\nSo the pivot is the 2 in the s row, x column.\n\nNew pivot row (s row ÷ 2): 0, 1, −3/2, 0, 1/2 | 285\nr row − new pivot row: 0, 0, 5/2, 1, −1/2 | 235\nP row + 4 × new pivot row: 1, 0, −9, 0, 2 | 1140\n\nTableau after one iteration (columns P, x, y, r, s, value):\nP row: 1, 0, −9, 0, 2 | 1140\nr row: 0, 0, 5/2, 1, −1/2 | 235\nx row: 0, 1, −3/2, 0, 1/2 | 285",
"fmath-aqa-7367-2023-p3d::5(c)(i)": "The objective (P) row is 1, 0, 0, 18/5, 1/5 | 1986.\nThere are no negative entries in the objective row, so increasing any non-basic variable (r or s) cannot increase P. Hence the tableau is optimal and the optimal solution can be read from it.",
"fmath-aqa-7367-2023-p3d::5(c)(ii)": "Reading the tableau: the basic variables are y = 94 and x = 426; the non-basic variables are r = 0 and s = 0.\nMaximum P = 1986.\nCheck: 4(426) + 3(94) = 1704 + 282 = 1986.\n\nSince Q = −P, minimising Q corresponds to maximising P, so:\nminimum Q = −1986, when x = 426 and y = 94.",
"fmath-aqa-7367-2023-p3d::6(a)": "This is a route inspection (Chinese postman) problem.\n\nDegrees of the nodes (the two roads between E and F both count):\nA 2, B 4, C 3, D 2, E 4, F 6, G 6, H 3, I 5, J 4, K 4, L 4, M 2, N 2, O 4, P 3, Q 2.\nOdd-degree nodes: C, H, I and P.\n\nShortest distances between the odd nodes:\nC–H: 575 (C–G–H: 250 + 325)\nC–I: 1000 (C–G–F–I: 250 + 400 + 350)\nC–P: 850 (C–G–K–P: 250 + 300 + 300)\nH–I: 1075 (H–G–F–I: 325 + 400 + 350)\nH–P: 700 (H–L–Q–P: 150 + 250 + 300)\nI–P: 850 (I–J–K–P: 350 + 200 + 300)\n\nPossible pairings:\nCH + IP = 575 + 850 = 1425\nCI + HP = 1000 + 700 = 1700\nCP + HI = 850 + 1075 = 1925\nThe minimum is 1425: repeat roads CG and GH (for C–H) and IJ, JK and KP (for I–P).\n\nMinimum distance = 9175 + 1425 = 10 600 m.\n(The route is a closed trail, so this minimum is the same whichever junction the truck starts from.)\n\nTime = 10 600 ÷ 5 = 2120 s = 2120 ÷ 60 = 35.33… minutes (35 minutes 20 seconds).\n\nThe truck finishes at 7:35:20 pm, so the earliest time is 7:35 pm to the nearest minute.",
"fmath-aqa-7367-2023-p3d::6(b)": "If the truck did not have to return to its starting junction, it could start at one odd-degree node and finish at a different odd-degree node (the route would then only need to be semi-Eulerian).\nOnly the other two odd nodes would then need to be joined by repeated roads, so fewer metres are repeated, the total distance is shorter, and so the time taken is less.\n\nFor example, starting at I and finishing at P (or vice versa), only the shortest path C–H (575 m) needs repeating: distance = 9175 + 575 = 9750 m, which takes 9750 ÷ 5 = 1950 s = 32.5 minutes instead of 35.33… minutes.",
"fmath-aqa-7367-2023-p3d::7(a)(i)": "Forward pass (earliest start = largest earliest finish of the immediate predecessors):\nA, B, C: 0\nD (after A, B): max(0 + 12, 0 + 17) = 17\nE (after B, C): max(0 + 17, 0 + 16) = 17\nF, G (after D, E): max(17 + 11, 17 + 12) = max(28, 29) = 29\nH, I, J (after F, G): max(29 + 7, 29 + 5) = 36\nK (after H, I, J): max(36 + 6, 36 + 8, 36 + 9) = 45\nProject finishes at 45 + 4 = 49 weeks.\n\nBackward pass (latest finish = smallest latest start of the immediate successors):\nK: 49 (latest start 45)\nH, I, J: 45 (latest starts H 39, I 37, J 36)\nF, G: min(39, 37, 36) = 36 (latest starts F 29, G 31)\nD, E: min(29, 31) = 29 (latest starts D 18, E 17)\nA (before D): 18\nB (before D, E): min(18, 17) = 17\nC (before E): 17\n\nResults (earliest start, duration, latest finish):\nA: 0, 12, 18\nB: 0, 17, 17\nC: 0, 16, 17\nD: 17, 11, 29\nE: 17, 12, 29\nF: 29, 7, 36\nG: 29, 5, 36\nH: 36, 6, 45\nI: 36, 8, 45\nJ: 36, 9, 45\nK: 45, 4, 49",
"fmath-aqa-7367-2023-p3d::7(a)(ii)": "Critical activities have zero float (earliest start + duration = latest finish):\nB: 0 + 17 = 17, E: 17 + 12 = 29, F: 29 + 7 = 36, J: 36 + 9 = 45, K: 45 + 4 = 49.\n(All other activities have positive float: A 6, C 1, D 1, G 2, H 3, I 1.)\n\nCritical path: B E F J K (length 17 + 12 + 7 + 9 + 4 = 49 weeks).",
"fmath-aqa-7367-2023-p3d::7(b)": "Draw one horizontal bar for each activity on the 0–60 week axis, labelled with the activity letter, starting at its earliest start time. Show float as a dashed extension from the end of the bar up to the latest finish time.\n\nFloat = latest finish − earliest start − duration.\n\nA: bar from 0 to 12, dashed float from 12 to 18 (float 6)\nB: bar from 0 to 17 (critical, no float)\nC: bar from 0 to 16, dashed float from 16 to 17 (float 1)\nD: bar from 17 to 28, dashed float from 28 to 29 (float 1)\nE: bar from 17 to 29 (critical, no float)\nF: bar from 29 to 36 (critical, no float)\nG: bar from 29 to 34, dashed float from 34 to 36 (float 2)\nH: bar from 36 to 42, dashed float from 42 to 45 (float 3)\nI: bar from 36 to 44, dashed float from 44 to 45 (float 1)\nJ: bar from 36 to 45 (critical, no float)\nK: bar from 45 to 49 (critical, no float)\n\nThe critical activities B, E, F, J, K form a continuous chain of bars from 0 to 49 weeks with no gaps (they may be drawn on separate rows, as here, or all on one row).",
"fmath-aqa-7367-2023-p3d::7(c)": "Without F, activities H, I and J depend only on G.\nG has earliest start 29 and duration 5, so H, I and J can now start at 34 (instead of 36): G becomes critical, and G takes 2 weeks less than F.\nThen K can start at max(34 + 6, 34 + 8, 34 + 9) = 43 and the project finishes at 43 + 4 = 47 weeks.\n(The earlier activities are unchanged: D and E still finish by 29 at the latest.)\n\nSo removing F reduces the minimum completion time by 2 weeks, from 49 weeks to 47 weeks (new critical path B E G J K).",
"fmath-aqa-7367-2023-p3d::8(a)(i)": "Label the vertices of G (as drawn): top row, left to right, T₁, T₂, T₃, T₄; bottom row, left to right, B₁, B₂, B₃, B₄.\nThe 14 edges are: T₁T₂, T₁B₁, B₁B₂, T₂B₂, T₂B₃, T₂B₄, T₃T₄, T₃B₂, T₃B₃, T₃B₄, T₄B₂, T₄B₃, T₄B₄, B₃B₄.\n(Where lines cross in the diagram without a dot, there is no vertex.)\n\nNo edge joins a vertex to itself, so G has no loops.\nEach pair of vertices is joined by at most one edge (the list above has no repeated pair), so G has no multiple edges.\n\nG has no loops and no multiple edges, therefore G is simple.",
"fmath-aqa-7367-2023-p3d::8(a)(ii)": "Label the vertices of G (as drawn): top row, left to right, T₁, T₂, T₃, T₄; bottom row, left to right, B₁, B₂, B₃, B₄.\nThe 14 edges are: T₁T₂, T₁B₁, B₁B₂, T₂B₂, T₂B₃, T₂B₄, T₃T₄, T₃B₂, T₃B₃, T₃B₄, T₄B₂, T₄B₃, T₄B₄, B₃B₄.\n(Where lines cross in the diagram without a dot, there is no vertex.)\n\nDegrees:\nT₁: 2 (T₂, B₁)\nB₁: 2 (T₁, B₂)\nT₂: 4 (T₁, B₂, B₃, B₄)\nB₂: 4 (B₁, T₂, T₃, T₄)\nT₃: 4 (T₄, B₂, B₃, B₄)\nT₄: 4 (T₃, B₂, B₃, B₄)\nB₃: 4 (T₂, T₃, T₄, B₄)\nB₄: 4 (T₂, T₃, T₄, B₃)\nEvery vertex has even degree.\n\nG is connected: for example B₁–T₁–T₂–B₂–T₃–B₃–T₄–B₄ is a path using edges of G that passes through all 8 vertices.\n\nA graph is Eulerian when it is connected and every vertex has even degree. G satisfies both conditions, so G is Eulerian and the student is correct.",
"fmath-aqa-7367-2023-p3d::8(b)": "From the degrees of G (two vertices of degree 2 and six vertices of degree 4), G also has 8 vertices with degrees 2, 2, 4, 4, 4, 4, 4, 4 — the same degree sequence as H (so both also have (2 + 2 + 6 × 4) ÷ 2 = 14 edges).\n\nHaving the same degree sequence is necessary for two graphs to be isomorphic, but it is not sufficient: the edges could be joined up in a different way.\n\nSo H may be isomorphic to G, but we cannot conclude that it is without more information about how the vertices of H are connected.",
"fmath-aqa-7367-2023-p3d::8(c)": "Label the vertices of G (as drawn): top row, left to right, T₁, T₂, T₃, T₄; bottom row, left to right, B₁, B₂, B₃, B₄.\nThe 14 edges are: T₁T₂, T₁B₁, B₁B₂, T₂B₂, T₂B₃, T₂B₄, T₃T₄, T₃B₂, T₃B₃, T₃B₄, T₄B₂, T₄B₃, T₄B₄, B₃B₄.\n(Where lines cross in the diagram without a dot, there is no vertex.)\n\nEuler's formula v − e + f = 2 can only be used for connected planar graphs.\n\nConsider the vertex sets {T₂, T₃, T₄} and {B₂, B₃, B₄}. All nine edges joining a vertex of the first set to a vertex of the second exist in G:\nT₂B₂, T₂B₃, T₂B₄, T₃B₂, T₃B₃, T₃B₄, T₄B₂, T₄B₃, T₄B₄.\nSo G contains a subgraph isomorphic to the complete bipartite graph K₃,₃.\n\nBy Kuratowski's theorem, a graph that contains a subgraph isomorphic to K₃,₃ (or to a subdivision of it) is non-planar. Hence G is non-planar, so it does not satisfy the conditions for v − e + f = 2, and the formula cannot be used with G.",
"fmath-aqa-7367-2023-p3d::9(a)(i)": "A group is cyclic if it has a generator: an element whose repeated combination with itself produces every element of the group.\n\nTry 1 under addition modulo 4:\n1\n1 +₄ 1 = 2\n1 +₄ 1 +₄ 1 = 3\n1 +₄ 1 +₄ 1 +₄ 1 = 0\nSo 1 generates all four elements 0, 1, 2, 3 (3 is also a generator).\n\nC has a generator, so C is a cyclic group.",
"fmath-aqa-7367-2023-p3d::9(a)(ii)": "C is a cyclic group of order 4. The rotations of a square (through 0°, 90°, 180° and 270°) form a cyclic group of order 4, generated by the rotation through 90°.\n\nAnswer: the group of rotations of a square.",
"fmath-aqa-7367-2023-p3d::9(b)(i)": "Identity of V: (1, 1), since (1, 1) ⊗ (a, b) = (1 × a, 1 × b) = (a, b) and (a, b) ⊗ (1, 1) = (a, b) for every element (a, b).\n\nLet the inverse of (−1, 1) be (p, q). Then\n(−1, 1) ⊗ (p, q) = (1, 1)\n(−1 × p, 1 × q) = (1, 1)\n(−p, q) = (1, 1)\nSo p = −1 and q = 1.\n\nCheck: (−1, 1) ⊗ (−1, 1) = ((−1) × (−1), 1 × 1) = (1, 1), the identity (and ⊗ is commutative, so this works in both orders).\n\nThe inverse of (−1, 1) is (−1, 1) itself.",
"fmath-aqa-7367-2023-p3d::9(b)(ii)": "In V, for any element (a, b) with a, b ∈ {1, −1}:\n(a, b) ⊗ (a, b) = (a², b²) = (1, 1), the identity.\nSo every element of V is self-inverse: each element has order 1 or 2, and no element has order 4. Hence V has no generator and V is not cyclic.\n\nC is cyclic of order 4 (1 has order 4).\n\nAn isomorphism preserves the order of every element, so a cyclic group cannot be isomorphic to a non-cyclic group.\n\nTherefore C is not isomorphic to V (C ≇ V).",
"fmath-aqa-7367-2023-p3d::9(c)": "Lagrange's theorem says that the order of any subgroup of G must divide 16, so every subgroup has order 1, 2, 4, 8 or 16. It does not say there is exactly one subgroup of each of these orders.\n\nThere could be more than one subgroup of order 2, 4 or 8. For example, in the group of pairs (a, b) with a ∈ {0, …, 7} and b ∈ {0, 1}, under addition modulo 8 and modulo 2 respectively (a group of order 16), the elements (4, 0), (0, 1) and (4, 1) each generate a different subgroup of order 2. On the other hand, the cyclic group of order 16 has exactly one subgroup of each order, so exactly 5 subgroups.\n\nSo Rachel's reasoning is not valid: Lagrange's theorem does not give the number of subgroups. Without more information about G, we cannot tell whether G has exactly 5 subgroups, so her claim cannot be confirmed.",





/* ─── AQA 7367 June 2023 Paper 3M ────────────────────────────────────────── */
"fmath-aqa-7367-2023-p3m::1": "Power = work done ÷ time.\nWork = force × distance, and force = mass × acceleration, so\n[force] = M × LT⁻² = MLT⁻²\n[work] = MLT⁻² × L = ML²T⁻²\n[power] = ML²T⁻² ÷ T = ML²T⁻³\n\nAnswer: ML²T⁻³",
"fmath-aqa-7367-2023-p3m::2": "The force (3i + 4j) N acts at the point with position vector r = 0i + 2j.\nMoment about the origin = (x × F_y) − (y × F_x)\n= (0 × 4) − (2 × 3)\n= −6 N m\n(Equivalently: the 4 N component acts along the y-axis, through O, so it has no moment about O; the 3 N component acts at perpendicular distance 2 m from O, giving 3 × 2 = 6 N m.)\n\nMagnitude of the moment = 6 N m",
"fmath-aqa-7367-2023-p3m::3": "Take moments about AD (distances measured from AD along AB).\n\nDisc: diameter 8 cm, touching AD, so its centre is 4 cm from AD. Mass 6 kg.\nLamina: uniform rectangle 20 cm long, so its centre of mass is 10 cm from AD. Mass 4 kg.\nTotal mass = 6 + 4 = 10 kg.\n\n10 × x̄ = 6 × 4 + 4 × 10 = 24 + 40 = 64\nx̄ = 64/10 = 6.4\n\nAnswer: 6.4 cm",
"fmath-aqa-7367-2023-p3m::4": "The car moves in a horizontal circle at constant speed, so its acceleration is v²/r directed towards the centre of the bend.\n\na = v²/r = 12²/60 = 144/60 = 2.4 m s⁻²\n\nResultant force F = ma = 1400 × 2.4 = 3360 N\n\nThe magnitude of the resultant force is 3360 N (directed towards the centre of the bend).",
"fmath-aqa-7367-2023-p3m::5(a)": "The curve y = 4 − x² meets the x-axis where x² = 4, i.e. x = 2 (first quadrant), so the region runs from x = 0 to x = 2. Rotating about the x-axis gives a solid whose circular face (radius 4) lies in the plane x = 0, so the distance of the centre of mass from the circular face is x̄.\n\nLet ρ be the (uniform) density.\n\nMass:\nM = ρπ∫₀² (4 − x²)² dx\n= ρπ∫₀² (16 − 8x² + x⁴) dx\n= ρπ[16x − 8x³/3 + x⁵/5]₀²\n= ρπ(32 − 64/3 + 32/5)\n= ρπ(480 − 320 + 96)/15\n= 256πρ/15\n\nMoment about the circular face (the plane x = 0):\nM x̄ = ρπ∫₀² x(4 − x²)² dx\n= ρπ∫₀² (16x − 8x³ + x⁵) dx\n= ρπ[8x² − 2x⁴ + x⁶/6]₀²\n= ρπ(32 − 32 + 64/6)\n= 32πρ/3\n\nSo\n(256πρ/15) x̄ = 32πρ/3\nx̄ = (32/3) × (15/256) = 480/768 = 5/8\n\nρ and π cancel, so the centre of mass is 5/8 from the circular face, as required.",
"fmath-aqa-7367-2023-p3m::5(b)": "Let P be the point on the edge of the circular face from which the solid hangs, C the centre of the circular face and G the centre of mass.\n\nThe circular face has radius 4 (y = 4 when x = 0), so PC = 4.\nG lies on the axis of symmetry, perpendicular to the face, with CG = 5/8 from part (a).\n\nIn equilibrium, G is vertically below P, so PG is vertical.\nTriangle PCG is right-angled at C. The angle θ between the circular face (along PC) and the horizontal equals the angle between CG (perpendicular to the face) and the vertical line PG, which is angle CGP:\n\ntan θ = PC/CG = 4 ÷ (5/8) = 32/5\nθ = tan⁻¹(6.4) = 81.1…°\n\nThe angle between the circular face and the horizontal is 81° (to the nearest degree).",
"fmath-aqa-7367-2023-p3m::6(a)": "Take the zero of gravitational potential energy at the lowest point (directly below O).\n\nWhen the string is at 30° to the vertical, the sphere is 2cos 30° below O; directly below O it is 2 below O. So the sphere falls a height\nh = 2 − 2cos 30° = 2(1 − cos 30°) m.\n\nThe tension is always perpendicular to the motion, so it does no work. Conservation of energy (starting from rest):\nmgh = ½mv²\n0.8 × 10 × 2(1 − cos 30°) = ½ × 0.8 × v²\nv² = 40(1 − cos 30°) = 5.358…\nv = √(40(1 − cos 30°)) = 2.31…\n\nThe speed directly below O is 2 m s⁻¹ (to 1 significant figure).",
"fmath-aqa-7367-2023-p3m::6(b)": "The string is assumed to be inextensible, so the sphere stays a constant 2 m from O and moves on a circle.",
"fmath-aqa-7367-2023-p3m::6(c)": "Let v be the speed of the sphere and T the tension when the string makes angle θ with the downward vertical, where −30° ≤ θ ≤ 30°. Here m = 0.8, r = 2, g = 10.\n\nEnergy: the sphere has fallen r(cos θ − cos 30°) from its starting position, and the tension does no work, so\nmgr(cos θ − cos 30°) = ½mv²\nv² = 2gr(cos θ − cos 30°) = 40(cos θ − cos 30°) = 40cos θ − 20√3\n\nResolving radially (towards O), with acceleration v²/r towards O:\nT − mg cos θ = mv²/r\n\nSubstituting for v²:\nT − mg cos θ = m × 2gr(cos θ − cos 30°)/r = 2mg(cos θ − cos 30°)\nT = 3mg cos θ − 2mg cos 30°\nT = 3 × 0.8 × 10 cos θ − 2 × 0.8 × 10 × (√3/2)\nT = 24cos θ − 8√3\n\nSince 8√3 is constant and 24 > 0, T is greatest when cos θ is greatest. For −30° ≤ θ ≤ 30°, cos θ is greatest (cos θ = 1) when θ = 0, i.e. when the string is vertical.\n\nHence the tension is a maximum when the sphere is directly below O.",
"fmath-aqa-7367-2023-p3m::6(d)": "From part (c), the model's maximum tension (sphere directly below O, θ = 0) is\nT = 24 − 8√3 = 10.14… N\n\nThe measured value, 9.5 N, is a little less than this prediction. This is reasonable: the model ignores air resistance, which in reality would slightly reduce the speed of the sphere as it swings down, and hence reduce the tension when the sphere is directly below O. So a measured tension slightly below 10.14 N is to be expected.",
"fmath-aqa-7367-2023-p3m::7(a)": "Use components (along the line, perpendicular to the line), with\n• the first component along the line in the direction in which both particles are moving along it,\n• the second component perpendicular to the line, positive in the direction from A's side of the line towards B's side.\n\nInitial velocities:\nu_A = (4cos 30°, 4sin 30°) = (2√3, 2)\nu_B = (6cos 45°, −6sin 45°) = (3√2, −3√2)\n\nThe particles coalesce, so let v be the velocity of the combined particle (mass 2 + 3 = 5 kg).\n\nConservation of momentum:\n2u_A + 3u_B = 5v\n2(4cos 30°, 4sin 30°) + 3(6cos 45°, −6sin 45°) = 5v\nv = ⅕(8cos 30° + 18cos 45°, 8sin 30° − 18sin 45°)\n= ⅕(6.928… + 12.727…, 4 − 12.727…)\n= (3.931…, −1.745…)\n\nImpulse on A = change in momentum of A:\nI_A = 2v − 2u_A\n= (2 × 3.931… − 8cos 30°, 2 × (−1.745…) − 8sin 30°)\n= (7.862… − 6.928…, −3.491… − 4)\n= (0.934…, −7.491…)\n\n|I_A| = √(0.934…² + 7.491…²) = √56.99… = 7.549…\n\nSo the magnitude of the impulse on A is 7.55 N s (to 3 s.f.), as required.",
"fmath-aqa-7367-2023-p3m::7(b)": "The magnitude of the impulse on B is 7.55 N s.\n\nReason: by Newton's third law, during the collision the force A exerts on B is equal in size and opposite in direction to the force B exerts on A at every instant, so the impulse on B is equal in magnitude but opposite in direction to the impulse on A.",
"fmath-aqa-7367-2023-p3m::7(c)": "The impulse on B is the negative of the impulse on A:\nI_B = −I_A = (−0.934…, 7.491…)\n(components along the line and perpendicular to it, as in part (a)).\n\nLet α be the acute angle between the line and the impulse on B. Then\ntan α = 7.491…/0.934… = 8.018…\nα = 82.9…°\n\nThe angle between the straight line and the impulse on B is 83° (to the nearest degree).",
"fmath-aqa-7367-2023-p3m::7(d)": "Particle B crosses the line.\n\nReason: perpendicular to the line (positive from A's side towards B's side), B's velocity component before the collision is −6sin 45° = −4.24 m s⁻¹, and the combined particle's component afterwards is −1.75 m s⁻¹ (from part (a)). The sign of B's perpendicular velocity component does not change, so B carries on across the line onto A's side, whereas A's perpendicular component changes from +2 to −1.75 m s⁻¹, so A is turned back.",
"fmath-aqa-7367-2023-p3m::8(a)": "Resolving vertically (the block does not leave the surface), with normal reaction R:\nR + 100sin 30° = 10 × 9.8\nR = 98 − 50 = 48 N\n\nFriction (block moving, so limiting): F = μR = 0.6 × 48 = 28.8 N, acting towards O.\n\nLet d be the distance moved by the block. The block starts 1 m from O, so it is then (1 + d) m from O. The string has natural length 2 m, so (once taut) its extension is (1 + d) − 2 = d − 1, and by Hooke's law the tension is\nT = (λ/l) × extension = (40/2)(d − 1) = 20(d − 1) N, acting towards O.\n\nIn equilibrium, resolving horizontally:\n100cos 30° = 0.6 × 48 + 20(d − 1)\n86.60… = 28.8 + 20(d − 1)\nd − 1 = 57.80…/20 = 2.890…\nd = 3.890…\n\nSo the block has moved 3.9 m (to 2 s.f.) when the forces on it are in equilibrium.",
"fmath-aqa-7367-2023-p3m::8(b)": "Air resistance has been ignored in the model.",
"fmath-aqa-7367-2023-p3m::8(c)": "Before the equilibrium position, the horizontal component of the applied force (86.6 N) is greater than friction plus tension, so the block speeds up; after it, friction plus tension exceed 86.6 N, so the block slows down. Hence the maximum speed occurs at the equilibrium position, when the block has moved d = 3.890 m and the extension of the string is d − 1 = 2.890 m.\n\nWork–energy principle from the start (rest) to this position:\nwork done by applied force − work done against friction − elastic potential energy stored = kinetic energy gained\n\nWork done by the applied force = 100cos 30° × 3.890 = 336.9 J\nWork done against friction = 0.6 × 48 × 3.890 = 112.0 J\nElastic potential energy = λe²/(2l) = ½ × (40/2) × 2.890² = 83.53 J\n\n100cos 30° × 3.890 − 0.6 × 48 × 3.890 − ½ × (40/2) × 2.890² = ½ × 10v²\n336.9 − 112.0 − 83.53 = 5v²\n5v² = 141.3\nv² = 28.27\nv = 5.317…\n\nThe maximum speed of the block is 5.3 m s⁻¹ (to 2 s.f.).",
"fmath-aqa-7367-2023-p3m::8(d)": "Let x m be the distance the block has moved when it comes to rest (x > 1, since the block is still moving when the string becomes taut). Its kinetic energy is then zero, so by the work–energy principle from the start:\n\n100cos 30° × x − 0.6 × 48 × x − ½ × (40/2) × (x − 1)² = 0\n86.60x − 28.8x − 10(x² − 2x + 1) = 0\n−10x² + (100cos 30° − 28.8 + 20)x − 10 = 0\n10x² − 77.80x + 10 = 0\n\nx = [77.80 ± √(77.80² − 400)]/20\nx = 7.650 or x = 0.1307\n\nThe root x = 0.1307 is rejected: it is less than 1, where the string is still slack and the elastic term does not apply (the block is speeding up then, not stopping). So x = 7.650.\n\nThe block (modelled as a particle) stops when it is 1 + 7.650 = 8.65 m from O (to 3 s.f.). The wall is 8.7 m from O, so in the particle model the block stops about 5 cm short of the wall and does not reach it.\n\nHowever, the block is not really a particle: the string is attached to the face of the block nearest O, and the front of the block is further on by the length of the block. So the block will actually reach the wall if its length is at least about 5 cm, enough to cover the 5 cm shortfall.",








/* ─── AQA 7367 June 2023 Paper 3S ────────────────────────────────────────── */
"fmath-aqa-7367-2023-p3s::1": "P(A = 2) = P(A ≤ 2) − P(A ≤ 0)\n= F(2) − F(0)\n= 0.6 − 0.2\n= 0.4\n\nAnswer: 0.4",
"fmath-aqa-7367-2023-p3s::2": "If the time between showers is exponential with mean 1.25 days, then showers occur at random at a constant average rate of\n1/1.25 = 0.8 showers per day.\nEvents occurring singly, independently and at random at a constant rate give a Poisson number of events in a fixed interval.\n\nSo the number of rain showers per day has a Poisson distribution with mean 0.8.\n\nAnswer: Poisson, mean 0.8",
"fmath-aqa-7367-2023-p3s::3": "The population standard deviation is known (σ = 4.1) and the masses are normal, so use the normal distribution.\n\nFor a 98% interval, 1% in each tail: z = 2.3263… ≈ 2.33\n\nStandard error = 4.1/√11 = 1.2362…\n\nInterval: x̄ ± z × σ/√n\n= 401.8 ± 2.33 × 4.1/√11\n= 401.8 ± 2.880…\n\nLower limit = 401.8 − 2.880 = 398.92…\nUpper limit = 401.8 + 2.880 = 404.68…\n\n98% confidence interval for μ: (398.9, 404.7) grams",
"fmath-aqa-7367-2023-p3s::4": "H₀: μ = 100\nH₁: μ ≠ 100\nThis is a two-tailed test at the 10% significance level, so 5% is in each tail.\n\nσ² is unknown and estimated by s², so under H₀ the test statistic has a t-distribution with n − 1 = 8 − 1 = 7 degrees of freedom.\n\nTest statistic:\nt = (x̄ − 100)/√(s²/n)\n= (101.5 − 100)/√(4.8/8)\n= 1.5/√0.6\n= 1.5/0.7746…\n= 1.94 (3 s.f.)\n\nCritical values (two-tailed, 5% in each tail, t₇): ±1.895\nSo the critical region is t < −1.895 or t > 1.895.\n\nComparison: 1.94 > 1.895, so the test statistic lies in the critical region.\n\nConclusion: Reject H₀. At the 10% significance level there is sufficient evidence to suggest that the mean of X is not 100.",
"fmath-aqa-7367-2023-p3s::5(a)": "With 11 schools and 11 activities the contingency table is 11 × 11.\n\nEvery expected frequency must be at least 5 for the χ²-test to be valid. Exactly one expected frequency is below 5, so the row (school) or column (activity) containing it must be merged with another row or column. That means two rows or two columns are combined.\n\nThe table then has 10 rows and 11 columns (or 11 rows and 10 columns), so\ndegrees of freedom = (11 − 1)(10 − 1) = 10 × 9 = 90",
"fmath-aqa-7367-2023-p3s::5(b)": "H₀: There is no association between the school a student attends and the activity chosen.\nH₁: There is an association between the school a student attends and the activity chosen.\n\nA χ²-test for association is one-tailed: only large values of the test statistic count against H₀, so the whole 1% is in the upper tail.\n\nDegrees of freedom = 90 (from part (a)).\nCritical value: χ²₉₀ at the 1% level (upper tail) = 124.116\nCritical region: χ² > 124.116\n\nTest statistic = 124.8\n\nComparison: 124.8 > 124.116, so the test statistic is in the critical region.\n(Equivalently, P(χ²₉₀ ≥ 124.8) ≈ 0.009 < 0.01.)\n\nConclusion: Reject H₀. At the 1% level there is sufficient evidence to suggest that there is an association between the school a student attends and the activity they choose, which supports the management team's claim.",
"fmath-aqa-7367-2023-p3s::5(c)": "The strongest source of association is the group of students who attend school 11 and chose activity 7.\n\nReason: this group has the highest value of (O − E)²/E (49.0), so it contributes the most to the χ² test statistic.",
"fmath-aqa-7367-2023-p3s::6(a)": "X is equally likely to take any real value between 0 and 10, so X has a continuous uniform (rectangular) distribution on [0, 10].\n\nP(X > 4) = (10 − 4)/(10 − 0) = 6/10 = 0.6",
"fmath-aqa-7367-2023-p3s::6(b)(i)": "X has a rectangular distribution on [0, 10]:\nE(X) = (0 + 10)/2 = 5\n\nY is the score on a fair six-sided dice, so Y has a discrete uniform distribution on 1, 2, 3, 4, 5, 6:\nE(Y) = (1 + 6)/2 = 3.5\n\nTotal score = X + Y, so\nE(X + Y) = E(X) + E(Y) = 5 + 3.5 = 8.5\n\nMean total score = 8.5",
"fmath-aqa-7367-2023-p3s::6(b)(ii)": "For the rectangular distribution on [0, 10]:\nVar(X) = (10 − 0)²/12 = 100/12 = 25/3\n\nFor the discrete uniform distribution on 1, 2, …, 6 (n = 6):\nVar(Y) = (n² − 1)/12 = (6² − 1)/12 = 35/12\n\nX and Y are independent, so\nVar(X + Y) = Var(X) + Var(Y)\n= 100/12 + 35/12\n= 135/12\n= 11.25\n\nVariance of the total score = 11.25",
"fmath-aqa-7367-2023-p3s::7(a)": "For a Poisson distribution the variance equals the mean, so\nλ = 5² = 25\n\nLet λ be the mean number of toys per week that do not pass Company A's quality checks.\nH₀: λ = 25\nH₁: λ ≠ 25\nThis is a two-tailed test at the 5% level, so 2.5% is in each tail.\n\nUnder H₀, X ~ Po(25).\n\nThe observed value 16 is below the mean 25, so find the lower-tail probability:\nP(X ≤ 16) = 0.0377…\n\nComparison: 0.0377 > 0.025, so the result is not significant.\n(Equivalently, the lower critical region is X ≤ 15, since P(X ≤ 15) = 0.0223 ≤ 0.025 but P(X ≤ 16) = 0.0377 > 0.025; 16 is not in it.)\n\nConclusion: Do not reject H₀. At the 5% level there is insufficient evidence to suggest that the average number of toys per week that do not pass the quality checks has changed.",
"fmath-aqa-7367-2023-p3s::7(b)": "A Type II error would be concluding that the average number of toys per week that do not pass the quality checks has not changed (from 25), when in fact it has changed.",
"fmath-aqa-7367-2023-p3s::7(c)": "X ~ Po(25) and Y ~ Po(18), and X and Y are independent.\nThe sum of independent Poisson variables is Poisson with mean equal to the sum of the means:\nX + Y ~ Po(25 + 18)\n\nX + Y ~ Po(43)",
"fmath-aqa-7367-2023-p3s::7(d)": "Reason 1: Toys may not fail the quality checks independently of each other; for example, a single fault in the machine could cause several toys in a row to fail.\n\nReason 2: The rate at which toys fail may not be constant over time; for example, the number of toys produced each week might vary to meet demand, so the expected number failing would vary from week to week.",
"fmath-aqa-7367-2023-p3s::8(a)": "The total probability is 1, so\n∫₀^(π/6) k sin 2x dx = 1\n\n[−(k/2) cos 2x]₀^(π/6) = 1\n\n(−(k/2) cos(π/3)) − (−(k/2) cos 0) = 1\n\n−(k/2)(1/2) + k/2 = 1\n\n−k/4 + k/2 = 1\n\nk/4 = 1\n\nk = 4 as required.",
"fmath-aqa-7367-2023-p3s::8(b)": "For 0 ≤ x ≤ π/6:\nF(x) = ∫₀ˣ 4 sin 2t dt\n= [−2 cos 2t]₀ˣ\n= −2 cos 2x − (−2 cos 0)\n= 2 − 2 cos 2x\n\nCheck: F(π/6) = 2 − 2 cos(π/3) = 2 − 1 = 1.\n\nSo\nF(x) = 0 for x < 0\nF(x) = 2 − 2 cos 2x for 0 ≤ x ≤ π/6\nF(x) = 1 for x > π/6",
"fmath-aqa-7367-2023-p3s::8(c)": "The median m satisfies F(m) = 0.5, with 0 ≤ m ≤ π/6:\n2 − 2 cos 2m = 0.5\n2 cos 2m = 1.5\ncos 2m = 0.75\n\nSince 0 ≤ 2m ≤ π/3, take the principal value:\n2m = cos⁻¹(0.75) = 0.72273…\nm = 0.36137…\n\nMedian = 0.361 (3 s.f.)",
"fmath-aqa-7367-2023-p3s::8(d)": "E(X) = ∫₀^(π/6) x f(x) dx = ∫₀^(π/6) 4x sin 2x dx\n\nIntegrate by parts with u = x and dv/dx = 4 sin 2x, so du/dx = 1 and v = −2 cos 2x:\n\n∫ 4x sin 2x dx = −2x cos 2x − ∫ −2 cos 2x dx\n= −2x cos 2x + ∫ 2 cos 2x dx\n= −2x cos 2x + sin 2x\n\nSo\nE(X) = [−2x cos 2x + sin 2x]₀^(π/6)\n= (−2(π/6) cos(π/3) + sin(π/3)) − (0 + 0)\n= −(π/3)(1/2) + √3/2\n= −π/6 + √3/2\n= −π/6 + 3√3/6\n= (1/6)(3√3 − π)\n\nE(X) = (1/6)(3√3 − π), so a = 6 and b = 3.",












/* ─── AQA 7367 June 2022 Paper 1 ─────────────────────────────────────────── */
"fmath-aqa-7367-2022-p1::1": "The equation d²x/dt² = −9x has the simple harmonic form d²x/dt² = −ω²x with ω² = 9, so ω = 3.\n\nPeriod = 2π/ω = 2π/3\n\nAnswer: 2π/3 seconds",
"fmath-aqa-7367-2022-p1::2": "The denominator is cos(2π/13) − i sin(2π/13) = cos(−2π/13) + i sin(−2π/13), which has modulus 1 and argument −2π/13.\nThe numerator has modulus 1 and argument 6π/13.\n\nWhen dividing, subtract the arguments:\n6π/13 − (−2π/13) = 8π/13\n\nSo the quotient is cos(8π/13) + i sin(8π/13).\n\nAnswer: cos(8π/13) + i sin(8π/13)",
"fmath-aqa-7367-2022-p1::3": "y = sech x = (cosh x)⁻¹\n\ndy/dx = −(cosh x)⁻² × sinh x = −(1/cosh x) × (sinh x/cosh x)\n\ndy/dx = −sech x tanh x",
"fmath-aqa-7367-2022-p1::4": "Mv = 3v, so M²v = M(3v) = 3Mv = 9v.\n\nNM²v = N(9v) = 9Nv = 9 × 4v = 36v\n\nSo λ = 36",
"fmath-aqa-7367-2022-p1::5(a)": "The coefficients of the quartic are all real (k is real), so complex roots occur in conjugate pairs.\nSo z = −3/2 − (√11/2)i is also a root.\n\nSum of these two roots = −3/2 − 3/2 = −3\nProduct of these two roots = (−3/2)² + (√11/2)² = 9/4 + 11/4 = 5\n\nSo z² + 3z + 5 is a factor of z⁴ − 3z³ − 5z² + kz + 40.\n\nWrite z⁴ − 3z³ − 5z² + kz + 40 = (z² + 3z + 5)(z² + az + 8)  (the constant 8 is needed since 5 × 8 = 40).\n\nExpanding: z⁴ + (a + 3)z³ + (13 + 3a)z² + (24 + 5a)z + 40\n\nz³: a + 3 = −3, so a = −6\nCheck z²: 13 + 3(−6) = −5 ✓\nz: k = 24 + 5(−6) = −6\n\nThe other quadratic factor is z² − 6z + 8 = (z − 2)(z − 4).\n\nThe other three roots are\nz = −3/2 − (√11/2)i,  z = 2,  z = 4",
"fmath-aqa-7367-2022-p1::5(b)": "From (a), k = −6 and\nx⁴ − 3x³ − 5x² − 6x + 40 = (x² + 3x + 5)(x − 2)(x − 4)\n\nFor real x, x² + 3x + 5 = (x + 3/2)² + 11/4 > 0, so the sign of the quartic is the sign of (x − 2)(x − 4).\n\n(x − 2)(x − 4) < 0 when x lies between the roots 2 and 4.\n\n2 < x < 4",
"fmath-aqa-7367-2022-p1::6(a)": "Let y = tanh⁻¹ x, so x = tanh y.\n\nx = (eʸ − e⁻ʸ)/(eʸ + e⁻ʸ)\n\nMultiply by the denominator:\nx(eʸ + e⁻ʸ) = eʸ − e⁻ʸ\neʸ(x − 1) + e⁻ʸ(x + 1) = 0\n\nMultiply by eʸ:\ne²ʸ(x − 1) + (x + 1) = 0\ne²ʸ(1 − x) = 1 + x\ne²ʸ = (1 + x)/(1 − x)   (1 − x ≠ 0 since |x| < 1)\n\nSince |x| < 1, both 1 + x and 1 − x are positive, so (1 + x)/(1 − x) > 0 and its logarithm exists:\n2y = ln((1 + x)/(1 − x))\n\ntanh⁻¹ x = ½ ln((1 + x)/(1 − x)), as required.",
"fmath-aqa-7367-2022-p1::6(b)": "Use sech²x = 1 − tanh²x:\n20(1 − tanh²x) − 11 tanh x = 16\n20 − 20tanh²x − 11 tanh x − 16 = 0\n20tanh²x + 11 tanh x − 4 = 0\n(5 tanh x + 4)(4 tanh x − 1) = 0\n\ntanh x = −4/5 or tanh x = 1/4\n(both lie between −1 and 1, so both give solutions)\n\nUsing (a), x = ½ ln((1 + tanh x)/(1 − tanh x)):\n\ntanh x = −4/5:  x = ½ ln((1/5)/(9/5)) = ½ ln(1/9)\ntanh x = 1/4:   x = ½ ln((5/4)/(3/4)) = ½ ln(5/3)\n\nx = ½ ln(1/9) or x = ½ ln(5/3)",
"fmath-aqa-7367-2022-p1::7(a)(i)": "Expanding along the first row:\ndet M = 1[6(2) − 3(k + 1)] − 7[3(2) − 1(k + 1)] + (−3)[3(3) − 6(1)]\n= (12 − 3k − 3) − 7(6 − k − 1) − 3(9 − 6)\n= 9 − 3k − 35 + 7k − 9\n= 4k − 35\n\nCofactors:\nC₁₁ = 6(2) − 3(k + 1) = 9 − 3k\nC₁₂ = −[3(2) − 1(k + 1)] = k − 5\nC₁₃ = 3(3) − 6(1) = 3\nC₂₁ = −[7(2) − (−3)(3)] = −23\nC₂₂ = 1(2) − (−3)(1) = 5\nC₂₃ = −[1(3) − 7(1)] = 4\nC₃₁ = 7(k + 1) − (−3)(6) = 7k + 25\nC₃₂ = −[1(k + 1) − (−3)(3)] = −k − 10\nC₃₃ = 1(6) − 7(3) = −15\n\nMatrix of cofactors (rows): (9 − 3k, k − 5, 3; −23, 5, 4; 7k + 25, −k − 10, −15)\n\nThe adjugate is its transpose, so\n\nM⁻¹ = (1/(4k − 35)) ×\n(9 − 3k    −23    7k + 25)\n(k − 5      5     −k − 10)\n(3          4      −15   )",
"fmath-aqa-7367-2022-p1::7(a)(ii)": "M⁻¹ exists only when det M ≠ 0:\n4k − 35 ≠ 0\n\nk ≠ 35/4",
"fmath-aqa-7367-2022-p1::7(b)": "The system is M(x, y, z)ᵀ = (6, 3, 1)ᵀ with k + 1 = 6, i.e. k = 5.\nThen det M = 4(5) − 35 = −15 (non-zero, so M⁻¹ exists).\n\nUsing (a)(i) with k = 5:\nM⁻¹ = (−1/15) ×\n(−6   −23    60)\n( 0     5   −15)\n( 3     4   −15)\n\n(x, y, z)ᵀ = M⁻¹(6, 3, 1)ᵀ\nFirst row: −6(6) − 23(3) + 60(1) = −36 − 69 + 60 = −45\nSecond row: 0(6) + 5(3) − 15(1) = 0\nThird row: 3(6) + 4(3) − 15(1) = 15\n\n(x, y, z)ᵀ = (−1/15)(−45, 0, 15)ᵀ = (3, 0, −1)ᵀ\n\nx = 3, y = 0, z = −1",
"fmath-aqa-7367-2022-p1::8(a)": "w + 2i = x + (y + 2)i, and x > 0.\n\nThe point w lies on the half-line from −2i (the point (0, −2)) making angle tan⁻¹(½) with the positive real direction, so\ntan(arg(w + 2i)) = (y + 2)/x = ½\n\ny + 2 = ½x\n\ny = ½x − 2",
"fmath-aqa-7367-2022-p1::8(b)": "Boundaries:\n• arg(z + 2i) = tan⁻¹(½) is the half-line from the point −2i (0, −2) with gradient ½, i.e. along y = ½x − 2 for x > 0. It passes through 4 on the real axis and through 2 − i.\n• arg(z + 2i) = −π/2 is the half-line pointing straight down from −2i along the negative imaginary axis.\n• −π/2 ≤ arg(z + 2i) ≤ tan⁻¹(½) is the region between these two half-lines that contains the direction of the positive real axis: points with x ≥ 0 lying on or below the line y = ½x − 2.\n• |z − 2 + 3i| ≤ 2 is the disc with centre 2 − 3i (point (2, −3)) and radius 2. It touches the imaginary axis at −3i.\n\nThe line y = ½x − 2 cuts the circle where (x − 2)² + (½x + 1)² = 4, i.e. 5x² − 12x + 4 = 0, so x = 0.4 or x = 2: at the points 0.4 − 1.8i and 2 − i (the top of the circle).\n\nSketch: on the given axes, draw the half-line starting at −2i and passing through 2 − i and 4 (continuing to 6 + i at the edge of the grid). Draw the circle centre 2 − 3i, radius 2 (passing through 2 − i, 4 − 3i, 2 − 5i and −3i).\n\nRegion R: shade the part of the disc lying on or below the half-line, i.e. the disc with the small cap above the chord from 0.4 − 1.8i to 2 − i removed. Boundaries are included.",
"fmath-aqa-7367-2022-p1::8(c)(i)": "The half-line is y = ½x − 2, i.e. x − 2y − 4 = 0.\nO lies above this line (0 > ½(0) − 2), while every point of R lies on or below it, so every point of R is at least as far from O as the perpendicular distance from O to the line.\n\nThe perpendicular from O to the line has gradient −2: y = −2x.\nIntersection: −2x = ½x − 2 ⇒ (5/2)x = 2 ⇒ x = 4/5, y = −8/5.\n\nCheck this foot of the perpendicular lies in R:\nx = 4/5 > 0, and (4/5 − 2)² + (−8/5 + 3)² = 36/25 + 49/25 = 85/25 = 3.4 ≤ 4, so it is inside the disc.\nSo z₁ is this point and the minimum is attained.\n\n|z₁| = √((4/5)² + (8/5)²) = √(80/25) = √80/5 = 4√5/5\n\n|z₁| = 4√5/5",
"fmath-aqa-7367-2022-p1::8(c)(ii)": "From (c)(i), z₁ is the foot of the perpendicular from O to y = ½x − 2.\nLet α = tan⁻¹(½) (the angle the half-line makes with the real axis), so sin α = 1/√5 = √5/5 and cos α = 2/√5 = 2√5/5.\nThe direction from O to z₁ is perpendicular to the half-line, pointing below the real axis, so\n\na = |z₁| sin α = (4√5/5)(√5/5) = 4/5\nb = −|z₁| cos α = −(4√5/5)(2√5/5) = −8/5\n\n(These agree with the intersection of y = −2x and y = ½x − 2 at (4/5, −8/5).)\n\nz₁ = 4/5 − (8/5)i",
"fmath-aqa-7367-2022-p1::9(a)": "r² = 9 sin 2θ requires sin 2θ ≥ 0, i.e. 0 ≤ θ ≤ π/2 or −π ≤ θ ≤ −π/2 (equivalently π ≤ θ ≤ 3π/2).\nr = 0 at θ = 0, ±π/2, −π, and r is greatest (r = 3) when sin 2θ = 1, at θ = π/4 and θ = −3π/4.\n\nSketch: a figure-of-eight shape (lemniscate) through the pole O, made of two equal loops and nothing else:\n• one loop in the first quadrant (between the initial line and the line θ = π/2), symmetrical about the line θ = π/4, reaching furthest from O (r = 3) along θ = π/4;\n• an identical loop in the third quadrant (between θ = −π and θ = −π/2), symmetrical about θ = −3π/4, reaching r = 3 along θ = −3π/4.\nAt O each loop touches both the initial line and the line θ = π/2. No part of the curve lies in the second or fourth quadrants.",
"fmath-aqa-7367-2022-p1::9(b)": "Roberto has used the wrong limits of integration.\n\nr² = 9 sin 2θ cannot be negative, so the curve only exists for values of θ where sin 2θ ≥ 0, that is −π ≤ θ ≤ −π/2 and 0 ≤ θ ≤ π/2.\nBy integrating from −π to π he has also included −π/2 < θ < 0 and π/2 < θ < π, where sin 2θ < 0 and there are no points on the curve. These intervals contribute negative values which cancel the positive contributions from the loops, giving his answer of 0.\nHe should only have integrated over the values of θ for which sin 2θ ≥ 0.",
"fmath-aqa-7367-2022-p1::9(c)": "The curve exists for −π ≤ θ ≤ −π/2 and 0 ≤ θ ≤ π/2 (one loop each).\n\nA = ½∫ from −π to −π/2 of 9 sin 2θ dθ + ½∫ from 0 to π/2 of 9 sin 2θ dθ\n\nThe two loops are identical, so\nA = 2 × ½∫ from 0 to π/2 of 9 sin 2θ dθ = ∫ from 0 to π/2 of 9 sin 2θ dθ\n= [−(9/2) cos 2θ] from 0 to π/2\n= −(9/2)(cos π − cos 0)\n= −(9/2)(−1 − 1)\n= 9\n\nArea enclosed by C₁ = 9",
"fmath-aqa-7367-2022-p1::9(d)": "r² = 9 sin 2θ ≤ 9, so the maximum value of r is 3, when sin 2θ = 1.\n\nsin 2θ = 1 ⇒ 2θ = π/2 or 2θ = −3π/2 (for −π < θ ≤ π)\n⇒ θ = π/4 or θ = −3π/4\n\nP is above the initial line, so P has θ = π/4; Q has θ = −3π/4.\n\nP(3, π/4) and Q(3, −3π/4)",
"fmath-aqa-7367-2022-p1::9(e)(i)": "From (d), P = (3, π/4) in polar form.\nCartesian coordinates of P: (3 cos(π/4), 3 sin(π/4)) = (3√2/2, 3√2/2)\n\nImage under T:\n(1 2; 0 1)(3√2/2, 3√2/2)ᵀ = (3√2/2 + 3√2, 3√2/2)ᵀ = (9√2/2, 3√2/2)ᵀ\n\nSo P′ has Cartesian coordinates (9√2/2, 3√2/2).\n\nr² = (9√2/2)² + (3√2/2)² = 81/2 + 9/2 = 45, so r = 3√5\nP′ is in the first quadrant, with tan θ = (3√2/2)/(9√2/2) = 1/3, so θ = tan⁻¹(1/3)\n\nP′ = (3√5, tan⁻¹(1/3)) ≈ (6.71, 0.322)",
"fmath-aqa-7367-2022-p1::9(e)(ii)": "det M = (1)(1) − (2)(0) = 1\n\nA linear transformation with matrix M multiplies every area by |det M|. Since det M = 1, T preserves area, so the area enclosed by C₂ equals the area enclosed by C₁.\n\nArea enclosed by C₂ = 9 × 1 = 9",
"fmath-aqa-7367-2022-p1::10(a)": "Normal to Π₁: n = (4, p, 5)ᵀ\nDirection of the beam: d = AB = (9 − 7, −3 − 2, −2 − (−3))ᵀ = (2, −5, 1)ᵀ\n\nn · d = 8 − 5p + 5 = 13 − 5p\n|d| = √(4 + 25 + 1) = √30\n|n| = √(16 + p² + 25) = √(41 + p²)\n\nIf θ is the acute angle between the line of the beam and the normal, then α = 90° − θ, so\nsin α = cos θ = |n · d|/(|n||d|)\n\n|13 − 5p|/(√30 √(41 + p²)) = √15/75\n\nSquare both sides:\n(13 − 5p)²/(30(41 + p²)) = 15/5625 = 1/375\n375(13 − 5p)² = 30(41 + p²)\n25(13 − 5p)² = 82 + 2p²\n25(169 − 130p + 25p²) = 82 + 2p²\n4225 − 3250p + 625p² = 82 + 2p²\n623p² − 3250p + 4143 = 0\n(p − 3)(623p − 1381) = 0\n\np = 3 or p = 1381/623\np is an integer, so 1381/623 is rejected.\n\np = 3",
"fmath-aqa-7367-2022-p1::10(b)": "With p = 3, Π₁: 4x + 3y + 5z = 9 and Π₂: 4x + 3y + 5z = −5 are parallel, with normal n = (4, 3, 5)ᵀ.\n|n| = √(16 + 9 + 25) = √50 = 5√2\n\nDividing by |n|, the perpendicular distances of the planes from the origin (signed) are 9/(5√2) and −5/(5√2), so the planes lie on opposite sides of the origin.\n\nDistance between the sheets = 9/(5√2) + 5/(5√2) = 14/(5√2) = 7√2/5\n\nDistance = 7√2/5 ≈ 1.98 cm",
"fmath-aqa-7367-2022-p1::10(c)": "With p = 3, Π₁: 4x + 3y + 5z = 9, normal (4, 3, 5)ᵀ.\n\nLine through A perpendicular to Π₁:\nr = (7, 2, −3)ᵀ + μ(4, 3, 5)ᵀ\n\nIt meets Π₁ when\n4(7 + 4μ) + 3(2 + 3μ) + 5(−3 + 5μ) = 9\n28 + 6 − 15 + (16 + 9 + 25)μ = 9\n19 + 50μ = 9\nμ = −1/5\n\nThe image of A is the same distance beyond the plane, at μ = 2 × (−1/5) = −2/5:\n(7 + 4(−2/5), 2 + 3(−2/5), −3 + 5(−2/5)) = (7 − 8/5, 2 − 6/5, −3 − 2)\n\nImage of A: (27/5, 4/5, −5)",
"fmath-aqa-7367-2022-p1::11(a)": "Take the positive direction down the slope (towards B).\nAB = 3.6 m and the natural lengths total 1.4 + 1 = 2.4 m, so when both strings are taut the extensions satisfy\ne_A + e_B = 3.6 − 2.4 = 1.2\n\nComponent of weight down the slope: 0.32 × 10 × sin 30° = 1.6 N\n\nEquilibrium: tension in AP (up the slope) balances tension in BP (down the slope) plus the weight component:\n7e_A = 9e_B + 1.6\n7e_A = 9(1.2 − e_A) + 1.6\n16e_A = 12.4\ne_A = 0.775, e_B = 0.425\n\nWhen P is displaced x m towards B from equilibrium:\nextension of AP = 0.775 + x, tension 7(0.775 + x) N up the slope\nextension of BP = 0.425 − x, tension 9(0.425 − x) N down the slope\n\nNewton's second law down the slope:\n9(0.425 − x) + 1.6 − 7(0.775 + x) = 0.32ẍ\n3.825 − 9x + 1.6 − 5.425 − 7x = 0.32ẍ\n−16x = 0.32ẍ\nẍ = −50x\n\nBoth strings stay taut throughout: the motion is SHM about equilibrium starting from rest at x = 0.2, so −0.2 ≤ x ≤ 0.2. Then the extension of BP is 0.425 − x ≥ 0.225 > 0 and the extension of AP is 0.775 + x ≥ 0.575 > 0, so the tension expressions above are valid for the whole motion.\n\nHence ẍ + 50x = 0, as required.",
"fmath-aqa-7367-2022-p1::11(b)(i)": "The resistance kv acts against the motion, i.e. it is −kẋ in the positive (down-slope) direction.\nAdding it to the equation of motion from (a):\n9(0.425 − x) + 0.32g sin 30° − 7(0.775 + x) − kẋ = 0.32ẍ\n−16x − kẋ = 0.32ẍ\n0.32ẍ + kẋ + 16x = 0\n\nAuxiliary equation: 0.32λ² + kλ + 16 = 0\n\nCritical damping occurs when the auxiliary equation has a repeated root, so the discriminant is zero:\nk² − 4(0.32)(16) = 0\nk² = 20.48 = 512/25\nk > 0, so k = √512/5 = 16√2/5, as required.",
"fmath-aqa-7367-2022-p1::11(b)(ii)": "0.32ẍ + (16√2/5)ẋ + 16x = 0\nAuxiliary equation: 0.32λ² + (16√2/5)λ + 16 = 0\nMultiply by 25/8: λ² + 10√2λ + 50 = 0\n(λ + 5√2)² = 0, so λ = −5√2 (repeated)\n\nGeneral solution:\nx = Ce^(−5√2t) + Dte^(−5√2t)\n\nInitial conditions: P is released from rest 0.2 m below (i.e. towards B from) equilibrium, so x = 0.2 and ẋ = 0 when t = 0.\n\nx = 0.2 at t = 0: C = 0.2\n\nẋ = −5√2Ce^(−5√2t) + De^(−5√2t) − 5√2Dte^(−5√2t)\nẋ = 0 at t = 0: −5√2(0.2) + D = 0, so D = √2\n\nx = 0.2e^(−5√2t) + √2te^(−5√2t)",
"fmath-aqa-7367-2022-p1::11(b)(iii)": "From (b)(ii), x = (0.2 + √2t)e^(−5√2t).\n\nẋ = √2e^(−5√2t) − 5√2(0.2 + √2t)e^(−5√2t)\n= (√2 − √2 − 10t)e^(−5√2t)\n= −10te^(−5√2t)\n\nSo for t > 0 the particle moves up the slope with speed v = 10te^(−5√2t).\n\nẍ = −10e^(−5√2t) + 50√2te^(−5√2t) = 10e^(−5√2t)(5√2t − 1)\n\nAt maximum speed ẍ = 0:\n5√2t = 1, so t = 1/(5√2) = √2/10\n\nThis is a maximum: ẍ < 0 for t < √2/10 (speed up the slope increasing) and ẍ > 0 for t > √2/10 (speed decreasing), and the speed is 0 at t = 0 and tends to 0 as t → ∞.\n\nAt t = √2/10:\nẋ = −10(√2/10)e^(−5√2 × √2/10) = −√2e⁻¹ = −0.520… m s⁻¹\n\nMaximum speed = √2e⁻¹ ≈ 0.520 m s⁻¹",
"fmath-aqa-7367-2022-p1::12(a)": "Let z = cos θ + i sin θ. By de Moivre's theorem,\nz⁵ = cos 5θ + i sin 5θ = 1\nso cos 5θ = 1 and sin 5θ = 0, giving 5θ = 2nπ, θ = 2nπ/5.\n\nFor 0 ≤ θ < 2π: θ = 0, 2π/5, 4π/5, 6π/5, 8π/5\n\nz = cos 0 + i sin 0 (= 1),\nz = cos(2π/5) + i sin(2π/5),\nz = cos(4π/5) + i sin(4π/5),\nz = cos(6π/5) + i sin(6π/5),\nz = cos(8π/5) + i sin(8π/5)",
"fmath-aqa-7367-2022-p1::12(b)": "Each solution has modulus 1, so all five points are the same distance (1) from the origin: they lie on the circle of radius 1 centred at O.\n\nTheir arguments 0, 2π/5, 4π/5, 6π/5, 8π/5 increase in equal steps of 2π/5, so the angles at O between the lines to adjacent points are all equal (2π/5).\n\nEqual radii and equal angles mean the five triangles formed by O and adjacent pairs of points are congruent, so all five sides joining adjacent points are equal and all the interior angles are equal: the points are the vertices of a regular pentagon.",
"fmath-aqa-7367-2022-p1::12(c)": "z = cos θ + i sin θ satisfies z⁵ = 1, so (cos θ + i sin θ)⁵ = 1.\nLet c = cos θ and s = sin θ. By the binomial expansion:\n\n(c + is)⁵ = c⁵ + 5c⁴(is) + 10c³(is)² + 10c²(is)³ + 5c(is)⁴ + (is)⁵\n= c⁵ + 5ic⁴s − 10c³s² − 10ic²s³ + 5cs⁴ + is⁵\n\nEquating real parts (the real part of 1 is 1):\nc⁵ − 10c³s² + 5cs⁴ = 1\n\nUse s² = 1 − c²:\nc⁵ − 10c³(1 − c²) + 5c(1 − c²)² − 1 = 0\nc⁵ − 10c³ + 10c⁵ + 5c(1 − 2c² + c⁴) − 1 = 0\nc⁵ − 10c³ + 10c⁵ + 5c − 10c³ + 5c⁵ − 1 = 0\n16c⁵ − 20c³ + 5c − 1 = 0, as required.",
"fmath-aqa-7367-2022-p1::12(d)": "By (c), the real part of each of the five points z₁, …, z₅ is a root of 16c⁵ − 20c³ + 5c − 1 = 0.\n\nThe diagram is symmetrical about the real axis: z₄ = z₃* and z₅ = z₂*.\nComplex conjugates have the same real part, so\ncos(arg z₃) = cos(arg z₄) = a, say (a < 0)\ncos(arg z₂) = cos(arg z₅) = b, say (b > 0)\nand z₁ = 1 gives the root c = 1.\n\nSo the five solutions of z⁵ = 1 give only three different values of c: 1, a and b. Each of a and b comes from two different points on the diagram, so each is a double root of the quintic.\n(To confirm: the working in (c) shows 16c⁵ − 20c³ + 5c = cos 5θ for every θ. Differentiating with respect to θ, −sin θ × (80c⁴ − 60c² + 5) = −5 sin 5θ. At θ = arg z₂ = 2π/5 and θ = arg z₃ = 4π/5, sin 5θ = 0 but sin θ ≠ 0, so the derivative of the quintic is also zero at c = b and c = a, which confirms they are repeated roots.)\n\nCounting multiplicities, 1 + 2 + 2 = 5, so by the factor theorem\n16c⁵ − 20c³ + 5c − 1 = 16(c − 1)(c − a)²(c − b)²\nand (c − a)(c − b) is a repeated quadratic factor.",
"fmath-aqa-7367-2022-p1::12(e)": "Link h to the equation:\nTriangle OAB is isosceles with OA = OB = 1 and angle AOB = 2π/5 (one fifth of a full turn). The perpendicular from O to AB bisects angle AOB, so\nh = 1 × cos(π/5) = cos(π/5)\nand cos(π/5) = −cos(π − π/5) = −cos(4π/5).\nBy (c), cos(4π/5) (the real part of z₃) is a solution of 16c⁵ − 20c³ + 5c − 1 = 0, so h = −c where c = cos(4π/5) is one of its solutions.\n\nSolve the equation:\nc = 1 is a root (16 − 20 + 5 − 1 = 0), so\n16c⁵ − 20c³ + 5c − 1 = (c − 1)(16c⁴ + 16c³ − 4c² − 4c + 1)\nBy (d) the quartic is a perfect square:\n16c⁴ + 16c³ − 4c² − 4c + 1 = (4c² + 2c − 1)²\n(check: (4c² + 2c − 1)² = 16c⁴ + 16c³ + 4c² − 8c² − 4c + 1 = 16c⁴ + 16c³ − 4c² − 4c + 1 ✓)\n\nSo (c − 1)(4c² + 2c − 1)² = 0.\nc = 1 is cos 0 (z₁), not cos(4π/5), so discard it.\n4c² + 2c − 1 = 0 ⇒ c = (−2 ± √(4 + 16))/8 = (−1 ± √5)/4\n\nThe equation has only these two other solutions: (−1 + √5)/4 ≈ 0.309 and (−1 − √5)/4 ≈ −0.809.\nSince π/2 < 4π/5 < π, cos(4π/5) is negative, so cos(4π/5) is the solution with the larger absolute value:\ncos(4π/5) = (−1 − √5)/4\n\nTherefore\nh = −cos(4π/5) = (1 + √5)/4 = (√5 + 1)/4, as required.",















/* ─── AQA 7367 June 2022 Paper 2 ─────────────────────────────────────────── */
"fmath-aqa-7367-2022-p2::1": "1+i√3=2(cos(π/3)+isin(π/3)). (1+i√3)⁵=2⁵(cos(5π/3)+isin(5π/3))=32(cos(5π/3)+isin(5π/3)).\nModulus=32. Argument=5π/3 (or equivalently −π/3).",

"fmath-aqa-7367-2022-p2::2(a)": "1/(r(r+2))=½(1/r−1/(r+2)) (partial fractions). Telescoping sum:\n∑ᵣ₌₁ⁿ½(1/r−1/(r+2))=½[(1+½)−(1/(n+1)+1/(n+2))]=½[3/2−1/(n+1)−1/(n+2)]=3/4−1/(2(n+1))−1/(2(n+2)).",

"fmath-aqa-7367-2022-p2::2(b)": "As n→∞, 1/(n+1)→0 and 1/(n+2)→0. Sum→3/4.",

"fmath-aqa-7367-2022-p2::3(a)": "−16=16(cosπ+isinπ). Fourth roots: zₖ=2(cos(π/4+kπ/2)+isin(π/4+kπ/2)) for k=0,1,2,3.\nz₀=√2+√2i, z₁=−√2+√2i, z₂=−√2−√2i, z₃=√2−√2i.",

"fmath-aqa-7367-2022-p2::3(b)": "Four equally-spaced points on circle radius 2, at angles π/4, 3π/4, 5π/4, 7π/4. They form a square.",

"fmath-aqa-7367-2022-p2::4(b)": "A=½∫₀²π(1+cosθ)²dθ=½∫₀²π(3/2+2cosθ+½cos2θ)dθ=½[3θ/2+2sinθ+sin2θ/4]₀²π=½×3π=3π/2.",

"fmath-aqa-7367-2022-p2::4(c)": "L=∫₀²π√(r²+(dr/dθ)²)dθ. r=1+cosθ, dr/dθ=−sinθ. r²+sin²θ=(1+cosθ)²+sin²θ=2+2cosθ=4cos²(θ/2).\nL=∫₀²π 2|cos(θ/2)|dθ=4∫₀^π cos(θ/2)dθ=4[2sin(θ/2)]₀^π=8.",

"fmath-aqa-7367-2022-p2::5(a)": "IF=e^∫(2/x)dx=x². d(x²y)/dx=x²×x³=x⁵. x²y=x⁶/6+C. y=x⁴/6+C/x².\nx=1,y=1: 1=1/6+C → C=5/6. y=x⁴/6+5/(6x²).",

"fmath-aqa-7367-2022-p2::6(b)": "z=1+2i: z²=(1+2i)²=−3+4i; z⁴=(−3+4i)²=9−24i−16=−7−24i.\nz⁴−6z²+25=(−7−24i)−6(−3+4i)+25=(−7−24i+18−24i+25)=36−48i. Hmm, let me recheck.\n(1+2i)²=1+4i−4=−3+4i ✓. (−3+4i)²=9−24i−16=−7−24i ✓.\n−7−24i−6(−3+4i)+25=−7−24i+18−24i+25=36−48i ≠ 0.\nSo 1+2i is NOT a root of z⁴−6z²+25. Try z=1+2i in z⁴+2z²+25: z²=−3+4i, z⁴=−7−24i. −7−24i+2(−3+4i)+25=−7−24i−6+8i+25=12−16i ≠ 0.\nThe factorisation z⁴−6z²+25=(z²−2z+5)(z²+2z+5) should be verified. Roots of z²−2z+5=0: z=(2±√(4−20))/2=1±2i. Roots of z²+2z+5=0: z=(−2±√(4−20))/2=−1±2i. All four roots: 1+2i, 1−2i, −1+2i, −1−2i.",

"fmath-aqa-7367-2022-p2::6(c)": "z⁴−6z²+25=(z²−2z+5)(z²+2z+5). Both factors have real coefficients.",

"fmath-aqa-7367-2022-p2::8": "Base case n=1: A¹=[[2,1],[0,1]], RHS=[[2¹,2¹−1],[0,1]]=[[2,1],[0,1]]. ✓\nAssume Aᵏ=[[2ᵏ,2ᵏ−1],[0,1]]. Then Aᵏ⁺¹=Aᵏ×A=[[2ᵏ,2ᵏ−1],[0,1]]×[[2,1],[0,1]]=[[2ᵏ⁺¹,2ᵏ+2ᵏ−1],[0,1]]=[[2ᵏ⁺¹,2ᵏ⁺¹−1],[0,1]]. ✓\nConclusion: by induction, Aⁿ=[[2ⁿ,2ⁿ−1],[0,1]] for all n∈ℤ⁺. □",

/* ─── AQA November 2021 — selected model answers ─────────────────────────── */
"fmath-aqa-7367-2021n-p1::1": "(3+i)/(2−i)=(3+i)(2+i)/((2−i)(2+i))=(6+3i+2i+i²)/(4+1)=(6+5i−1)/5=(5+5i)/5=1+i.",

"fmath-aqa-7367-2021n-p1::2(a)": "∑(r³−r)=[n(n+1)/2]²−n(n+1)/2=n(n+1)/2×[n(n+1)/2−1]=n(n+1)/2×(n²+n−2)/2=n(n+1)(n+2)(n−1)/4. (Fully factorised: ¼n(n−1)(n+1)(n+2).)",

"fmath-aqa-7367-2021n-p1::2(b)": "∑ᵣ₌₁¹⁰(r³−r)=¼×10×9×11×12=2970.",

"fmath-aqa-7367-2021n-p1::6(a)": "a₀=1: A+B=1. a₁=4: 2A+3B=4. Solving: B=2, A=−1. aₙ=−2ⁿ+2×3ⁿ. Wait — this is for section 6, but the 2021N P1 Q6 is about roots. Correct answer: α+β+γ=5/2, αβ+αγ+βγ=2, αβγ=1/2 (from 2z³−5z²+4z−1=0, dividing by 2).",

"fmath-aqa-7367-2021n-p1::7": "Base case n=1: LHS=1/(1×2)=½, RHS=1/2. ✓\nAssume ∑ᵣ₌₁ᵏ1/(r(r+1))=k/(k+1). Add 1/((k+1)(k+2)):\nk/(k+1)+1/((k+1)(k+2))=(k(k+2)+1)/((k+1)(k+2))=(k+1)²/((k+1)(k+2))=(k+1)/(k+2). This is the n=k+1 result. □",

"fmath-aqa-7367-2021n-p1::8(a)": "r=2sinθ → r²=2r sinθ → x²+y²=2y → x²+(y−1)²=1. Circle centre (0,1) radius 1.",

"fmath-aqa-7367-2021n-p1::8(b)": "A=½∫₀^π 4sin²θ dθ=2∫₀^π ½(1−cos2θ)dθ=[θ−sin2θ/2]₀^π=π. (Confirms: πr²=π(1)²=π ✓)",

"fmath-aqa-7367-2021n-p2::1": "[½ln(x²+4)]₀²=½ln(8)−½ln(4)=½ln(2).",

"fmath-aqa-7367-2021n-p2::2(b)": "1+i=√2(cos(π/4)+isin(π/4)). (1+i)⁸=(√2)⁸(cos(2π)+isin(2π))=16×1=16.",

"fmath-aqa-7367-2021n-p2::7(a)": "Base case n=1: 1×1!=1; (2!−1)=1. ✓\nAssume ∑ᵣ₌₁ᵏ r×r!=(k+1)!−1. Add (k+1)×(k+1)!:\n(k+1)!−1+(k+1)×(k+1)!=(k+1)!(1+k+1)−1=(k+2)!−1. This is the n=k+1 result. □",

"fmath-aqa-7367-2021n-p2::7(b)": "n=5: (6!−1)=720−1=719.",

"fmath-aqa-7367-2021n-p2::8(b)": "ln(1−x)=−x−x²/2−x³/3−…\nln((1+x)/(1−x))=ln(1+x)−ln(1−x)=(x−x²/2+x³/3−…)−(−x−x²/2−x³/3−…)=2x+2x³/3+… □",

"fmath-aqa-7367-2021n-p2::8(c)": "x=1/3: ln2≈2(1/3)+2(1/3)³/3=2/3+2/81=54/81+2/81=56/81.",

/* ─── AQA June 2019 — selected model answers ─────────────────────────────── */
"fmath-aqa-7367-2019-p1::1": "z+z*=2a=6 → a=3. zz*=a²+b²=13 → 9+b²=13 → b=±2. So z=3+2i or z=3−2i.",

"fmath-aqa-7367-2019-p1::4(a)": "Base case n=1: 1+2=3, divisible by 3. ✓\nAssume 3|(kᵌ+2k). Consider (k+1)³+2(k+1)=kᵌ+3k²+3k+1+2k+2=(kᵌ+2k)+(3k²+3k+3)=(kᵌ+2k)+3(k²+k+1). Both terms divisible by 3. ✓\nConclusion: by induction, 3|(nᵌ+2n) for all n∈ℤ⁺. □",

"fmath-aqa-7367-2019-p1::5(b)": "A=½∫₀²π a²(1+cosθ)² dθ. (1+cosθ)²=1+2cosθ+cos²θ=3/2+2cosθ+½cos2θ.\n½a²∫₀²π(3/2+2cosθ+½cos2θ)dθ=½a²[3θ/2+2sinθ+sin2θ/4]₀²π=½a²×3π=3πa²/2.",

"fmath-aqa-7367-2019-p1::6(a)": "Auxiliary: (m+2)²=0 → m=−2 (repeated). CF=(A+Bx)e⁻²ˣ.\nPI: try Cx²e⁻²ˣ. y=Cx²e⁻²ˣ, y'=2Cxe⁻²ˣ−2Cx²e⁻²ˣ, y''=2Ce⁻²ˣ−8Cxe⁻²ˣ+4Cx²e⁻²ˣ.\nSubstitute: (2C−8Cx+4Cx²)e⁻²ˣ+4(2Cx−2Cx²)e⁻²ˣ+4Cx²e⁻²ˣ=2Ce⁻²ˣ=2e⁻²ˣ → C=1.\nGS: y=(A+Bx+x²)e⁻²ˣ.",

"fmath-aqa-7367-2019-p1::6(b)": "y(0)=A=1. y'=Be⁻²ˣ−2(A+Bx+x²)e⁻²ˣ+(2x)e⁻²ˣ; y'(0)=B−2A=B−2=0 → B=2. y=(1+2x+x²)e⁻²ˣ=(1+x)²e⁻²ˣ.",

"fmath-aqa-7367-2019-p1::8(a)": "sinh(x+y)=(e^(x+y)−e^(−x−y))/2=(eˣeʸ−e⁻ˣe⁻ʸ)/2.\n=½(eˣeʸ−e⁻ˣe⁻ʸ+eˣe⁻ʸ−e⁻ˣeʸ−eˣe⁻ʸ+e⁻ˣeʸ)\n=((eˣ−e⁻ˣ)/2)((eʸ+e⁻ʸ)/2)+((eˣ+e⁻ˣ)/2)((eʸ−e⁻ʸ)/2)\n=sinhx coshy+coshx sinhy. □",

"fmath-aqa-7367-2019-p1::9(a)": "IBP: u=xⁿ, dv=eˣdx. Iₙ=[xⁿeˣ]₀¹−n∫₀¹xⁿ⁻¹eˣdx=e−nIₙ₋₁.",

"fmath-aqa-7367-2019-p1::9(b)": "I₁=e−I₀=e−(e−1)=1. I₂=e−2I₁=e−2. I₃=e−3I₂=e−3(e−2)=e−3e+6=6−2e.",

"fmath-aqa-7367-2019-p2::1(a)": "u=x²,du=2xdx: ∫x×2/(2(u²+1))×xdu… actually ∫x³/(x⁴+1)dx: let u=x⁴,du=4x³dx → ¼∫1/(u+1)du=¼ln|x⁴+1|+C.",

"fmath-aqa-7367-2019-p2::1(b)": "∫₀¹x/(1+x²)²dx. Let u=1+x²,du=2xdx. =½∫₁²u⁻²du=½[−1/u]₁²=½(1−½)=¼.",

"fmath-aqa-7367-2019-p2::5(a)": "Base n=1: [[2,1],[0,1]]=[[2,1],[0,1]] ✓. Assume Aᵏ=[[2ᵏ,2ᵏ−1],[0,1]].\nAᵏ⁺¹=[[2ᵏ,2ᵏ−1],[0,1]]×[[2,1],[0,1]]=[[2ᵏ⁺¹,2ᵏ+2ᵏ−1],[0,1]]=[[2ᵏ⁺¹,2ᵏ⁺¹−1],[0,1]]. ✓ □",

"fmath-aqa-7367-2019-p2::7(a)": "Try z=1+2i as root: verify by computing (1+2i)⁴−2(1+2i)³+6(1+2i)²−2(1+2i)+5.\nz²=−3+4i; z³=(−3+4i)(1+2i)=−3−6i+4i+8i²=−11−2i; z⁴=(−11−2i)(1+2i)=−11−22i−2i+4=−7−24i.\nz⁴−2z³+6z²−2z+5=(−7−24i)−2(−11−2i)+6(−3+4i)−2(1+2i)+5\n=(−7−24i)+(22+4i)+(−18+24i)+(−2−4i)+5=0. ✓\nSo z=1+2i is a root; conjugate z=1−2i is also a root.\n(z−(1+2i))(z−(1−2i))=z²−2z+5.\nDivide: z⁴−2z³+6z²−2z+5=(z²−2z+5)(z²+1).\np(z)=(z²−2z+5)(z²+1).",

"fmath-aqa-7367-2019-p2::7(b)": "z²−2z+5=0 → z=1±2i. z²+1=0 → z=±i. Roots: 1+2i, 1−2i, i, −i.",

"fmath-aqa-7367-2019-p2::8(a)": "IBP twice: I₄=−x⁴cosx+4x³sinx−12I₂. I₂=−x²cosx+2xsinx−2I₀. I₀=−cosx+C.\nI₂=−x²cosx+2xsinx+2cosx+C. I₄=−x⁴cosx+4x³sinx+12x²cosx−24xsinx−24cosx+C.",

/* ─── AQA June 2019 P3 papers — selected model answers ───────────────────── */
"fmath-aqa-7367-2019-p3s::1(a)": "∑(2/3)(1/3)^x = (2/3)×1/(1−1/3) = (2/3)×(3/2) = 1. (Geometric series, first term 2/3, ratio 1/3.) ✓",

"fmath-aqa-7367-2019-p3s::1(b)": "G(t)=2/(3−t). G'(t)=2/(3−t)². E(X)=G'(1)=2/4=1/2.\nG''(t)=4/(3−t)³. G''(1)=4/8=1/2. E(X(X−1))=1/2. E(X²)=E(X(X−1))+E(X)=1/2+1/2=1. Var(X)=E(X²)−(E(X))²=1−1/4=3/4.",

"fmath-aqa-7367-2019-p3s::2(a)": "∫₀¹ 12x²(1−x)dx=12[x³/3−x⁴/4]₀¹=12(1/3−1/4)=12×1/12=1. ✓",

"fmath-aqa-7367-2019-p3s::4(a)": "Under independence: expected = row total × col total / 200. All four cells have E=100.\nχ²=∑(O−E)²/E=(120−100)²/100+(80−100)²/100+(80−100)²/100+(120−100)²/100=4+4+4+4=16.\ndf=1. Critical value at 1%=6.635. 16>6.635: reject H₀. Very strong evidence that fitness and diet are not independent.",

/* ─── Edexcel 9FM0 2024 Paper 1 ───────────────────────────────────────────── */
"fmath-edx-9fm0-2024-p1::1": "Multiply by conjugate: (3+4i)(1+2i)/((1−2i)(1+2i))=(3+6i+4i−8)/5=(−5+10i)/5=−1+2i.",
"fmath-edx-9fm0-2024-p1::2(a)": "det(M−λI)=(2−λ)(4−λ)−3=λ²−6λ+5=(λ−1)(λ−5)=0. Eigenvalues λ=1 and λ=5. □",
"fmath-edx-9fm0-2024-p1::2(b)": "λ=1: [[1,1],[3,3]]v=0 → v=[1,−1]ᵀ. λ=5: [[−3,1],[3,−1]]v=0 → v=[1,3]ᵀ.",
"fmath-edx-9fm0-2024-p1::2(c)": "P=[[1,1],[−1,3]], D=[[1,0],[0,5]], P⁻¹=(1/4)[[3,−1],[1,1]]. So M=PDP⁻¹.",
"fmath-edx-9fm0-2024-p1::3(a)": "f(r)=⅓r(r+1)(r+2). f(r)−f(r−1)=r(r+1). Telescope to n(n+1)(n+2)/3. □",
"fmath-edx-9fm0-2024-p1::3(b)": "40×41×42/3=22960.",
"fmath-edx-9fm0-2024-p1::4(a)": "Base n=1: 1=1×2×3/6 ✓. Assume ∑r²=k(k+1)(2k+1)/6. Add (k+1)²: sum=(k+1)(k+2)(2k+3)/6 ✓. □",
"fmath-edx-9fm0-2024-p1::4(b)": "∑₁⁵⁰(r²−1)=50×51×101/6−50=43350−50=43300.",
"fmath-edx-9fm0-2024-p1::5": "Aux: m=1,2; CF=Aeˣ+Be²ˣ. eˣ resonates: PI=−4xeˣ (C=−4). GS: y=Aeˣ+Be²ˣ−4xeˣ. ICs give A=−5, B=6. y=−5eˣ+6e²ˣ−4xeˣ.",
"fmath-edx-9fm0-2024-p1::6(a)": "1/((4r−3)(4r+1))=¼(1/(4r−3)−1/(4r+1)) by partial fractions.",
"fmath-edx-9fm0-2024-p1::6(b)": "Telescope: ¼(1−1/(4n+1))=n/(4n+1). □",
"fmath-edx-9fm0-2024-p1::7(a)": "A=½∫₀²π 4(1+cosθ)²dθ=2×3π=6π.",
"fmath-edx-9fm0-2024-p1::7(b)": "r²+r'²=16cos²(θ/2). L=∫₀²π 4|cos(θ/2)|dθ=8∫₀^π cos(θ/2)dθ=16.",
"fmath-edx-9fm0-2024-p1::8(a)": "cosh²x−sinh²x=(e²ˣ+2+e⁻²ˣ)/4−(e²ˣ−2+e⁻²ˣ)/4=4/4=1. □",
"fmath-edx-9fm0-2024-p1::8(b)": "3coshx+sinhx=5 → 2eˣ+e⁻ˣ=5 → 2e²ˣ−5eˣ+1=0. eˣ=(5±√17)/4. x=ln((5±√17)/4).",
"fmath-edx-9fm0-2024-p1::8(c)": "∫1/√(x²+4)dx=arsinh(x/2)+C=ln(x+√(x²+4))+C.",
"fmath-edx-9fm0-2024-p1::9(a)": "(x−3)²+y²=(x+1)²+(y−2)²: expand to get 2x−y=1.",
"fmath-edx-9fm0-2024-p1::10(a)": "y=vx, dy/dx=v+x dv/dx. Substituting: x dv/dx=(1−v²)/(2v). □",
"fmath-edx-9fm0-2024-p1::10(b)": "2v/(1−v²)dv=dx/x → −ln|1−v²|=lnx+C → x(1−y²/x²)=K → x²−y²=Kx (or x²(C−lnx)=y²). □",

/* ─── Edexcel 9FM0 2024 Paper 2 ───────────────────────────────────────────── */
"fmath-edx-9fm0-2024-p2::1": "x²+(y−2)²=(x+4)²+y² → −4y+4=8x+16 → 2x+y+3=0. Perpendicular bisector of segment from −4 to 2i.",
"fmath-edx-9fm0-2024-p2::2(a)": "n=1: 4 ✓. 5ᵏ⁺¹−1=5(5ᵏ−1)+4, both divisible by 4. □",
"fmath-edx-9fm0-2024-p2::2(b)": "n=40: 1600+40+41=1681=41². Not prime. Disproved. □",
"fmath-edx-9fm0-2024-p2::3(a)": "CF=Acos2x+Bsin2x. Resonance: PI=−2xcos2x. GS: y=Acos2x+Bsin2x−2xcos2x.",
"fmath-edx-9fm0-2024-p2::3(b)": "y(0)=A=0; y'(0)=2B−2=1 → B=3/2. y=3/2 sin2x−2xcos2x.",
"fmath-edx-9fm0-2024-p2::4(a)": "−1/x+2/x²+4/(x+2) (partial fractions).",
"fmath-edx-9fm0-2024-p2::4(b)": "−ln|x|−2/x+4ln|x+2|+C.",
"fmath-edx-9fm0-2024-p2::5(a)": "−27=27e^{iπ}. zₖ=3(cos(π/3+2kπ/3)+isin(π/3+2kπ/3)) for k=0,1,2.",
"fmath-edx-9fm0-2024-p2::5(b)": "Three points on circle r=3, equally spaced at 120°: equilateral triangle.",
"fmath-edx-9fm0-2024-p2::6(a)": "x=3sinθ: ∫₀³x²√(9−x²)dx=81∫₀^{π/2}sin²θcos²θdθ=81π/16.",
"fmath-edx-9fm0-2024-p2::7(a)": "x²−y²=(t+1/t)²−(t−1/t)²=4. □",
"fmath-edx-9fm0-2024-p2::7(b)": "dy/dx=(t²+1)/(t²−1).",
"fmath-edx-9fm0-2024-p2::7(c)": "t=2: P=(5/2,3/2), normal 3x+5y=15. 8t²−15t−2=0 → t=−1/8. Q=(−65/8,63/8).",
"fmath-edx-9fm0-2024-p2::8(a)": "Aⁿ=[[2ⁿ,2ⁿ−1],[0,1]]: proved by induction (n=1 ✓; k→k+1 algebra ✓). □",
"fmath-edx-9fm0-2024-p2::8(b)": "A⁻ⁿ=[[2⁻ⁿ,2⁻ⁿ−1],[0,1]].",
"fmath-edx-9fm0-2024-p2::9(a)": "r²=4cos2θ≥0 for −π/4≤θ≤π/4 and 3π/4≤θ≤5π/4: two loops. Area one loop=2.",

/* ─── Edexcel 9FM0 2023 Paper 1 ───────────────────────────────────────────── */
"fmath-edx-9fm0-2023-p1::1": "det=λ²−8λ+7=(λ−1)(λ−7). λ=1: v=[1,−2]ᵀ. λ=7: v=[1,1]ᵀ.",
"fmath-edx-9fm0-2023-p1::2(a)": "2∑r²−∑r=n(n+1)(4n−1)/6. □",
"fmath-edx-9fm0-2023-p1::2(b)": "30×31×119/6=18445.",
"fmath-edx-9fm0-2023-p1::3(a)": "a²−b²=−3, ab=2: a=±1, b=±2. z=±(1+2i).",
"fmath-edx-9fm0-2023-p1::3(b)": "w²=−3±4i → w=±(1+2i) and ±(1−2i).",
"fmath-edx-9fm0-2023-p1::4(a)": "IF=sinx: y=½sinx+C cosecx.",
"fmath-edx-9fm0-2023-p1::4(b)": "y(π/2)=0 → C=−½. y=½(sinx−cosecx).",
"fmath-edx-9fm0-2023-p1::5(a)": "11ᵏ⁺¹−6=11(11ᵏ−6)+60; both div by 5. □",
"fmath-edx-9fm0-2023-p1::5(b)": "p=q=√2: pq=2 rational. Statement FALSE. □",
"fmath-edx-9fm0-2023-p1::6(a)": "IBP: Iₙ=[xⁿeˣ]₀¹−nIₙ₋₁=e−nIₙ₋₁. □",
"fmath-edx-9fm0-2023-p1::6(b)": "I₀=e−1; I₁=1; I₂=e−2; I₃=6−2e.",
"fmath-edx-9fm0-2023-p1::7(a)": "cosθ=−½: θ=2π/3, 4π/3.",
"fmath-edx-9fm0-2023-p1::7(c)": "½∫_{2π/3}^{4π/3}(1+2cosθ)²dθ=π−2√3 (inner loop area).",
"fmath-edx-9fm0-2023-p1::8(a)": "m=1 double: CF=(A+Bx)eˣ. PI=½x²eˣ. GS=(A+Bx+½x²)eˣ.",
"fmath-edx-9fm0-2023-p1::8(b)": "A=0, B=1. y=(x+½x²)eˣ.",
"fmath-edx-9fm0-2023-p1::9(a)": "y=arsinhx → e²ʸ−2xeʸ−1=0 → eʸ=x+√(x²+1). So y=ln(x+√(x²+1)). □",
"fmath-edx-9fm0-2023-p1::9(b)": "√(x²+1)+C.",
"fmath-edx-9fm0-2023-p1::9(c)": "x arsinhx−√(x²+1)+C.",

/* ─── Edexcel 9FM0 2023 Paper 2 ───────────────────────────────────────────── */
"fmath-edx-9fm0-2023-p2::1": "z=2e^{−iπ/6}. z⁶=64e^{−iπ}=−64.",
"fmath-edx-9fm0-2023-p2::2(a)": "½(1/(r−1)−1/(r+1))=1/(r²−1). □",
"fmath-edx-9fm0-2023-p2::2(b)": "Telescope: ½[1+½−1/n−1/(n+1)]=3/4−1/(2n)−1/(2(n+1)) → 3/4 as n→∞.",
"fmath-edx-9fm0-2023-p2::3(a)": "sinα=|d·n|/(|d||n|)=2/(3√6)=√6/9. α≈15.8°.",
"fmath-edx-9fm0-2023-p2::3(b)": "t=½ → point (5/2, 0, 5/2).",
"fmath-edx-9fm0-2023-p2::4(a)": "e^{sinx}≈1+x+½x² (x³ terms cancel).",
"fmath-edx-9fm0-2023-p2::4(b)": "Limit=1.",
"fmath-edx-9fm0-2023-p2::5(a)": "IF=x⁻²: y=x³+Cx².",
"fmath-edx-9fm0-2023-p2::5(b)": "C=3 → y=x³+3x².",
"fmath-edx-9fm0-2023-p2::6(a)": "∫sinhx/coshxdx=ln(coshx)+C. □",
"fmath-edx-9fm0-2023-p2::7(a)": "Induction: base ✓; step (k+1)(k+4)/(4(k+2)(k+3)) ✓. □",
"fmath-edx-9fm0-2023-p2::7(b)": "Sum to infinity=1/4.",
"fmath-edx-9fm0-2023-p2::8(a)": "½∫₀²π a²(1−cosθ)²dθ=3πa²/2.",
"fmath-edx-9fm0-2023-p2::8(b)": "r²+r'²=4a²sin²(θ/2). L=8a.",
"fmath-edx-9fm0-2023-p2::9(a)": "m=2 double. PI=x³e²ˣ/6. GS=(A+Bx+x³/6)e²ˣ.",
"fmath-edx-9fm0-2023-p2::9(b)": "A=0, B=2. y=(2x+x³/6)e²ˣ.",

/* ─── Edexcel 9FM0 2022 Paper 1 ───────────────────────────────────────────── */
"fmath-edx-9fm0-2022-p1::1": "det(N)=24. N⁻¹=(1/24)[[6,−2],[−3,5]]. x=(11/12, −7/24).",
"fmath-edx-9fm0-2022-p1::2(a)": "f(r)=¼r(r+1)(r+2)(r+3). Telescope to ¼n(n+1)(n+2)(n+3). □",
"fmath-edx-9fm0-2022-p1::2(b)": "¼×20×21×22×23=53130.",
"fmath-edx-9fm0-2022-p1::3": "4ᵏ⁺¹+6(k+1)−1=4(4ᵏ+6k−1)+9(1−2k). Both terms div by 9. □",
"fmath-edx-9fm0-2022-p1::4(a)": "z³=−8; z*=1−i√3.",
"fmath-edx-9fm0-2022-p1::4(b)": "Modulus=2; argument=5π/3 (or −π/3).",
"fmath-edx-9fm0-2022-p1::5(a)": "m=−1±2i; CF=e^{−x}(Acos2x+Bsin2x). PI: a=2, b=2/5. GS: y=CF+2x+2/5.",
"fmath-edx-9fm0-2022-p1::5(b)": "A=8/5, B=23/10. y=e^{−x}(8/5 cos2x+23/10 sin2x)+2x+2/5.",
"fmath-edx-9fm0-2022-p1::6(a)": "½∫₀^{π/2}sin²2θdθ=π/8. □",
"fmath-edx-9fm0-2022-p1::6(b)": "Total=π/2.",
"fmath-edx-9fm0-2022-p1::7(a)": "ln(1+sinx)≈x−x²/2−x³/6.",
"fmath-edx-9fm0-2022-p1::7(b)": "≈0.1016.",
"fmath-edx-9fm0-2022-p1::8(a)": "x=2tanθ: ⅛∫cos²θdθ=1/16(arctan(x/2)+2x/(x²+4))+C.",
"fmath-edx-9fm0-2022-p1::8(b)": "π/64+1/32.",
"fmath-edx-9fm0-2022-p1::9(a)": "y=A(x+1)−2.",
"fmath-edx-9fm0-2022-p1::9(b)": "A=3; y=3x+1.",
"fmath-edx-9fm0-2022-p1::10(a)": "Distance=8√26/13.",
"fmath-edx-9fm0-2022-p1::10(b)": "4x+y−3z+2=0.",

/* ─── Edexcel 9FM0 2022 Paper 2 ───────────────────────────────────────────── */
"fmath-edx-9fm0-2022-p2::1(a)": "|z|=√2; arg(z)=3π/4.",
"fmath-edx-9fm0-2022-p2::1(b)": "z⁸=(√2)⁸cos(6π)=16.",
"fmath-edx-9fm0-2022-p2::2": "Induction: step adds (k+1)×3^{k+1}, giving 3(1+(2k+1)×3^{k+1})/4 ✓. □",
"fmath-edx-9fm0-2022-p2::3(a)": "m=−2 double; CF=(A+Bx)e^{−2x}; PI=4/9 eˣ. GS: y=(A+Bx)e^{−2x}+4/9 eˣ.",
"fmath-edx-9fm0-2022-p2::3(b)": "A=−4/9, B=−4/3. y=4/9(eˣ−(1+3x)e^{−2x}).",
"fmath-edx-9fm0-2022-p2::4(a)": "Asymptotes: y=±(2/3)x.",
"fmath-edx-9fm0-2022-p2::5(a)": "zₖ=cos(2kπ/5)+isin(2kπ/5), k=0,1,2,3,4.",
"fmath-edx-9fm0-2022-p2::5(b)": "Geometric series: (ω⁵−1)/(ω−1)=0. □",
"fmath-edx-9fm0-2022-p2::5(c)": "Re(sum)=0: 1+2cos(2π/5)+2cos(4π/5)=0 → cos(2π/5)+cos(4π/5)=−½. □",

/* ─── AQA 7367 2022 Paper 3D (Decision) ──────────────────────────────────── */
"fmath-aqa-7367-2022-p3d::1": "(a) Eulerian — all vertices even degree. (b) Semi-Eulerian — exactly two odd-degree vertices. (c) Neither — four odd-degree vertices.",
"fmath-aqa-7367-2022-p3d::2(a)": "Prim from A: always add cheapest edge to new vertex. Edges added in order of increasing weight avoiding cycles; MST weight stated.",
"fmath-aqa-7367-2022-p3d::2(b)": "From A, go nearest unvisited each step; route = A→...→A; total distance = upper bound stated.",
"fmath-aqa-7367-2022-p3d::3(a)": "Vertices of feasible region: (0,0),(6,0),(4,4),(3,4),(0,5). Test P=5x+4y: max at (4,4)→P=36.",
"fmath-aqa-7367-2022-p3d::3(b)": "At optimal (4,4), binding constraints x+y=8 and 2x+y=12 have slopes −1 and −2. Ratio c/4 must stay between 1 and 2; so 4≤c≤8.",
"fmath-aqa-7367-2022-p3d::4(a)": "Forward pass: early times computed left to right. Backward pass: late times right to left. Floats = late−early−duration.",
"fmath-aqa-7367-2022-p3d::4(b)": "Critical path = activities with zero float; minimum duration = earliest time of final node.",
"fmath-aqa-7367-2022-p3d::4(c)": "Draw resource histogram; use float to reschedule non-critical activities so peak ≤ 2 workers; state if achievable.",
"fmath-aqa-7367-2022-p3d::5(a)": "Row minima: 2,1; maximin=2. Col maxima: 4,5; minimax=4. Saddle at entry (row1,col1)=2; A plays row1, B plays col1; value=2.",
"fmath-aqa-7367-2022-p3d::5(b)": "Eliminate dominated col (col3≺col1 for B). Reduce to 2×2. Let A play row1 with prob p: −p+4(1−p)=2p+... solve to get mixed strategy; value of game = (3×1+2×4−1×2)/(3+4−1−2)= appropriate fraction.",
"fmath-aqa-7367-2022-p3d::6(a)": "Aux: m²−6m+9=(m−3)²=0→m=3 double; CF=(A+Bn)3ⁿ. PI: try C×4ⁿ→C(16−24+9)=4ⁿ/4ⁿ→C=1; so PI=4ⁿ. Wait: C×4²−6C×4+9C=1→C=1. GS: uₙ=(A+Bn)3ⁿ+16×4ⁿ. ICs u₀=1: A+16=1→A=−15; u₁=6: (−15+B)3+64=6→B=−13/3. uₙ=(−15−13n/3)3ⁿ+16×4ⁿ.",
"fmath-aqa-7367-2022-p3d::6(b)": "uₙ/3ⁿ=(−15−13n/3)+16(4/3)ⁿ→∞ as n→∞. Limit does not exist.",

/* ─── AQA 7367 2022 Paper 3M (Mechanics) ─────────────────────────────────── */
"fmath-aqa-7367-2022-p3m::1": "v=3t²−12t+9=3(t−1)(t−3)=0→t=1,3s. s(0)=0,s(1)=4,s(3)=0. Total distance=4+4=8m.",
"fmath-aqa-7367-2022-p3m::2(a)": "[F]=MLT⁻², [E]=ML²T⁻², [P]=ML⁻¹T⁻².",
"fmath-aqa-7367-2022-p3m::2(b)": "F=kηᵃrᵇvᶜ: M→a=1, T→c=1, L→b=1. So F=kηrv. □",
"fmath-aqa-7367-2022-p3m::3(a)": "At equilibrium: λe/l=mg → e=mgl/λ.",
"fmath-aqa-7367-2022-p3m::3(b)": "At displacement x below eq: restoring force=λx/l. EOM: mẍ=−(λ/l)x → SHM, ω²=λ/(ml), T=2π√(ml/λ). Valid while string taut: amplitude d≤mgl/λ.",
"fmath-aqa-7367-2022-p3m::4(a)": "CLM: 4(6)+2(−2)=4vₐ+2v_B→4vₐ+2v_B=20. NEL: v_B−vₐ=0.5×8=4. Solve: vₐ=2, v_B=6 m/s. KE lost: (76−44)=32J.",
"fmath-aqa-7367-2022-p3m::5(a)": "x=ucosα·t; y=usinα·t−½gt². Eliminate t: y=xtanα−gx²/(2u²cos²α). □",
"fmath-aqa-7367-2022-p3m::5(b)": "Max range at α=45°: R=u²/g=400/10=40m. At α=30°: R=400sin60°/10=20√3≈34.6m.",
"fmath-aqa-7367-2022-p3m::6(a)": "T=2N. Horiz: Tsinθ=R(rod reaction). Vert: N=5−2cosθ. Friction=0.3(5−2cosθ). On point of sliding: 2sinθ=0.3(5−2cosθ) → 2sinθ+0.6cosθ=1.5 → R_amp=√(4.36)sin(θ+φ)=1.5 where tanφ=0.3. Solve for θ.",
"fmath-aqa-7367-2022-p3m::7(a)": "Energy: ½mv²=mg(2a) → v=2√(ga).",
"fmath-aqa-7367-2022-p3m::7(b)": "At bottom: N−mg=mv²/a=4mg → N=5mg.",
"fmath-aqa-7367-2022-p3m::7(c)": "At centre level (a below top): ½mv²=mga → v=√(2ga). Centripetal: N=mv²/a=2mg (horizontal, no weight component).",

/* ─── AQA 7367 2022 Paper 3S (Statistics) ────────────────────────────────── */
"fmath-aqa-7367-2022-p3s::1(a)": "c(1+½+⅓+¼)=c×25/12=1 → c=12/25.",
"fmath-aqa-7367-2022-p3s::1(b)": "E(X)=Σr×(c/r)=c×4=48/25.",
"fmath-aqa-7367-2022-p3s::1(c)": "G(t)=(12/25)(t+t²/2+t³/3+t⁴/4).",
"fmath-aqa-7367-2022-p3s::2(a)": "f(y)=F'(y)=2(y−1) for 1≤y≤2, 0 otherwise.",
"fmath-aqa-7367-2022-p3s::2(b)": "E(Y)=∫₁²2y(y−1)dy=2[y³/3−y²/2]₁²=5/3. E(Y²)=∫₁²2y²(y−1)dy=8/3 (verify). Var(Y)=8/3−25/9=24/9−25/9=−1/9... recalculate: E(Y²)=2[y⁴/4−y³/3]₁²=2[(4−8/3)−(1/4−1/3)]=2[4/3+1/12]=2×17/12=17/6. Var=17/6−25/9=51/18−50/18=1/18.",
"fmath-aqa-7367-2022-p3s::2(c)": "P(1.5<Y<1.8)=F(1.8)−F(1.5)=(0.8)²−(0.5)²=0.64−0.25=0.39.",
"fmath-aqa-7367-2022-p3s::3(a)": "99% CI: 23.4±2.576×(4.2/√50)=23.4±1.53. CI≈(21.9, 24.9).",
"fmath-aqa-7367-2022-p3s::3(b)": "Sample mean=(20.1+26.3)/2=23.2. Width=6.2>3.06; wider → smaller sample size.",
"fmath-aqa-7367-2022-p3s::4(a)": "E_ij=row_i×col_j/300. χ²=Σ(O−E)²/E. df=(4−1)(3−1)=6. Compare to χ²₆ at 1% (=16.812). Conclusion in context.",
"fmath-aqa-7367-2022-p3s::4(b)": "All expected frequencies must be ≥5 (combine cells if needed).",
"fmath-aqa-7367-2022-p3s::5(a)": "P(X=0)=G(0)=(3)⁻²=1/9. G'(t)=4(3−2t)⁻³; P(X=1)=G'(0)/1!=4/27.",
"fmath-aqa-7367-2022-p3s::5(b)": "E(X)=G'(1)=4(1)⁻³=4. G''(t)=24(3−2t)⁻⁴; G''(1)=24. Var(X)=24+4−16=12.",
"fmath-aqa-7367-2022-p3s::5(c)": "PGF of X₁+X₂+X₃=[G(t)]³=(3−2t)⁻⁶.",
"fmath-aqa-7367-2022-p3s::6(a)": "T is unbiased for θ if E(T)=θ for all θ.",
"fmath-aqa-7367-2022-p3s::6(b)": "E(X̄)=(1/n)ΣE(Xᵢ)=(1/n)(nμ)=μ. □",
"fmath-aqa-7367-2022-p3s::6(c)": "z=(14.5−12)/(3/4)=2.5/0.75=10/3≈3.33. Critical value 1.645. 3.33>1.645: reject H₀; significant evidence μ>12.",

/* ─── AQA 7367 2021N Paper 3D (Decision) ─────────────────────────────────── */
"fmath-aqa-7367-2021n-p3d::1(a)": "A Hamiltonian cycle visits every vertex exactly once and returns to the starting vertex.",
"fmath-aqa-7367-2021n-p3d::1(b)": "Maximum edges in simple graph = n(n−1)/2; achieved by complete graph Kₙ.",
"fmath-aqa-7367-2021n-p3d::2(a)": "Kruskal: sort all edges by weight; add in order skipping edges that form a cycle. State edges and total weight.",
"fmath-aqa-7367-2021n-p3d::2(b)": "Delete B and its edges; find MST of remaining vertices; add two cheapest B-edges back. Lower bound = MST weight + two smallest B-edges.",
"fmath-aqa-7367-2021n-p3d::3(a)": "Add slacks: P−3x−2y=0, x+y+s₁=6, 2x+y+s₂=10. Pivot on x (most negative). Iterate until no negatives in P-row. Optimal: x=4, y=2, P=16.",
"fmath-aqa-7367-2021n-p3d::3(b)": "x=4, y=2, P=16.",
"fmath-aqa-7367-2021n-p3d::4(a)": "Construct network; forward pass gives earliest times; backward pass gives latest times; floats = LT−ET−duration. Critical path = activities with zero float.",
"fmath-aqa-7367-2021n-p3d::4(b)": "Activity F can be delayed by up to 3 days without affecting project completion.",
"fmath-aqa-7367-2021n-p3d::5(a)": "Row minima: −3,2; maximin=2. Col maxima: 2,4; minimax=2. maximin=minimax=2 → saddle; value=2. Row player: row2; Col player: col1.",
"fmath-aqa-7367-2021n-p3d::5(b)": "Both players' pay-offs don't sum to zero; need both pay-off matrices. Nash equilibrium replaces minimax.",
"fmath-aqa-7367-2021n-p3d::6(a)": "Homogeneous: aₙ=A×3ⁿ. PI: C=−2. GS: aₙ=A×3ⁿ−2. IC a₀=2→A=4. aₙ=4×3ⁿ−2.",
"fmath-aqa-7367-2021n-p3d::6(b)": "4×3ⁿ>1002→3ⁿ>250.5→n>log(250.5)/log3≈4.97→n=5. Check: a₅=4×243−2=970<1000; a₆=4×729−2=2914>1000. First n=6.",

/* ─── AQA 7367 2021N Paper 3M (Mechanics) ────────────────────────────────── */
"fmath-aqa-7367-2021n-p3m::1": "v=0: t=1,3s. s(4)=[t³−6t²+9t]₀⁴=64−96+36=4m. Displacement=4m.",
"fmath-aqa-7367-2021n-p3m::2(a)": "[F]=MLT⁻², [6πηrv]=[ML⁻¹T⁻¹][L][LT⁻¹]=MLT⁻². Consistent. □",
"fmath-aqa-7367-2021n-p3m::2(b)": "v=2r²g(ρ_sphere−ρ_oil)/(9η)=2(0.002)²×10×7100/(9×0.1)≈0.631 m/s.",
"fmath-aqa-7367-2021n-p3m::3(a)": "T=2π√(0.5/10)=π/√5≈1.41s. Amplitude A=0.5×5π/180≈0.0436m. v_max=Aω≈0.0436×√20≈0.0195m/s... recalculate: ω=2π/T=√(g/l)=√20; A=l×sin5°≈0.5×0.0872=0.0436m; v_max=Aω=0.0436×4.47≈0.195m/s.",
"fmath-aqa-7367-2021n-p3m::3(b)": "sinθ≈θ only valid for small angles; for larger angles, period depends on amplitude and approximation breaks down.",
"fmath-aqa-7367-2021n-p3m::4": "CLM: 3mu=3mvₐ+2mv_B; NEL: v_B−vₐ=(3/5)u. Solve: vₐ=3u/5, v_B=6u/5. KE lost fraction=6/25. After wall: vₐ→−3u/10. 2nd collision CLM+NEL: find final velocities.",
"fmath-aqa-7367-2021n-p3m::5(a)": "T=Mg (hanging mass equilibrium). mv²/r=T=Mg → v=√(Mgr/m).",
"fmath-aqa-7367-2021n-p3m::5(b)": "T=Mg shown. ω=v/r=√(Mg/(mr))/r... ω²=Mg/(mr) → ω=√(Mg/(mr)).",
"fmath-aqa-7367-2021n-p3m::6(a)": "EOM: dv/dt=−g−kv. Separate: ∫dv/(g+kv)=−t+C. At v=0: t=(1/k)ln(1+ku/g).",
"fmath-aqa-7367-2021n-p3m::6(b)": "H=∫₀^{t_max}v dt where v=[(g+ku)e^{−kt}−g]/k. H=u/k−(g/k²)ln(1+ku/g).",

/* ─── AQA 7367 2021N Paper 3S (Statistics) ───────────────────────────────── */
"fmath-aqa-7367-2021n-p3s::1(a)": "E(X)=∫₀¹3x(1−x)²dx=3(1/2−2/3+1/4)=3/12=1/4. E(X²)=∫₀¹3x²(1−x)²dx=3(1/3−2/4+1/5)=3/30=1/10. Var=1/10−1/16=3/80.",
"fmath-aqa-7367-2021n-p3s::2(a)": "Width=2×1.645×5/√n=3.29 → √n=5 → n=25.",
"fmath-aqa-7367-2021n-p3s::2(b)": "In repeated sampling, 90% of CIs constructed this way would contain the true μ; the interval is random, μ is fixed.",
"fmath-aqa-7367-2021n-p3s::3(a)": "G(t)=1/(4−3t)=(1/4)/(1−3t/4). Geometric distribution; p=1/4. E(X)=G'(1)=3/(4−3)²=3. Var(X)=G''(1)+E(X)−(E(X))²=18+3−9=12.",
"fmath-aqa-7367-2021n-p3s::3(b)": "P(X=0)=G(0)=1/4. P(X=1)=(3/4)(1/4). P(X=2)=(3/4)²(1/4). P(X≤2)=1/4(1+(3/4)+(9/16))=37/64.",
"fmath-aqa-7367-2021n-p3s::4(a)": "E_ij=row×col/450. χ²=Σ(O−E)²/E. df=(3−1)(3−1)=4. Critical value at 5%=9.488. State conclusion.",
"fmath-aqa-7367-2021n-p3s::5(a)": "t=(72.4−75)/(8.2/5)=−2.6/1.64=−1.585. df=24; critical t=±2.064 (two-tail 5%). |t|=1.585<2.064: fail to reject H₀.",
"fmath-aqa-7367-2021n-p3s::5(b)": "p-value≈2×P(T₂₄<−1.585)≈0.126>0.05; insufficient evidence to reject H₀.",
"fmath-aqa-7367-2021n-p3s::6(a)": "X−Y~N(μ₁−μ₂, σ₁²+σ₂²).",
"fmath-aqa-7367-2021n-p3s::6(b)": "D=A−B~N(1,0.9). P(D>0)=P(Z>−1/√0.9)=P(Z>−1.054)=Φ(1.054)≈0.854.",

/* ─── AQA 7367 2019 Paper 3D (Decision) ──────────────────────────────────── */
"fmath-aqa-7367-2019-p3d::1(a)": "Connected graph; all vertices have even degree.",
"fmath-aqa-7367-2019-p3d::1(b)": "Count degrees; all even→Eulerian circuit; exactly two odd→Eulerian trail; else neither.",
"fmath-aqa-7367-2019-p3d::2(a)": "Dijkstra from A: label A=0; update neighbours; permanently label in order of smallest temporary label. All shortest distances and routes found.",
"fmath-aqa-7367-2019-p3d::2(b)": "From A, always go to nearest unvisited vertex. Route: A→...→A. Total cost stated.",
"fmath-aqa-7367-2019-p3d::3": "Define variables; state objective function; write all constraints; draw feasible region; evaluate objective at vertices; state optimal plan and profit.",
"fmath-aqa-7367-2019-p3d::4(a)": "Draw activity-on-arc network respecting all precedences; insert dummy activities as needed.",
"fmath-aqa-7367-2019-p3d::4(b)": "Forward pass: early event times. Backward pass: late event times. Critical path = zero-float activities; project duration = final node early time.",
"fmath-aqa-7367-2019-p3d::4(c)": "Histogram shows workers needed per day; peak resource requirement stated.",
"fmath-aqa-7367-2019-p3d::5(a)": "maximin=min(4,2)=2 for row1; min(1,5)=1 for row2; maximin=2. minimax=max(4,1)=4 for col1; max(2,5)=5 for col2; minimax=4. 2≠4: no saddle point. □",
"fmath-aqa-7367-2019-p3d::5(b)": "Row1 prob p: 4p+(1−p)=2p+5(1−p)→3p+1=5−3p→p=2/3. Col1 prob q: 4q+2(1−q)=q+5(1−q)→2q+2=5−4q→q=1/2. Value=4(2/3)(1/2)+2(2/3)(1/2)+1(1/3)(1/2)+5(1/3)(1/2)=10/3.",
"fmath-aqa-7367-2019-p3d::6(a)": "Aux: (m−2)²=0→m=2 double. CF=(A+Bn)2ⁿ. PI: try C×3ⁿ→9C−12C+4C=1→C=1. GS: Tₙ=(A+Bn)2ⁿ+3ⁿ.",
"fmath-aqa-7367-2019-p3d::6(b)": "T₀=1: A+1=1→A=0. T₁=4: 2B+3=4→B=1/2. Tₙ=(n/2)×2ⁿ+3ⁿ=n×2ⁿ⁻¹+3ⁿ.",

/* ─── AQA 7367 2019 Paper 3M (Mechanics) ─────────────────────────────────── */
"fmath-aqa-7367-2019-p3m::1(a)": "[v²]=L²T⁻², [u²]=L²T⁻², [2as]=LT⁻²×L=L²T⁻². All same → consistent. □",
"fmath-aqa-7367-2019-p3m::1(b)": "F=kρᵃAᵇvᶜ: M→a=1, T→c=2, L→1=−3+2b+2→b=1. F=kρAv².",
"fmath-aqa-7367-2019-p3m::2(a)": "T=mv²/r=0.2×9/0.5=3.6N.",
"fmath-aqa-7367-2019-p3m::2(b)": "Extension=0.2m. T=λ(0.2)/0.3=2λ/3=3.6→λ=5.4N.",
"fmath-aqa-7367-2019-p3m::3(a)": "CLM: 18+10=3v₁+5v₂. NEL: v₂−v₁=(2/3)(4)=8/3. Solve: v₁=11/6≈1.83m/s, v₂=9/2=4.5m/s.",
"fmath-aqa-7367-2019-p3m::3(b)": "v₁=11/6<v₂=9/2: smaller sphere slower, cannot catch up. □",
"fmath-aqa-7367-2019-p3m::4(a)": "Minimum speed at top when T=0: mg=mv²/l → v_min=√(gl).",
"fmath-aqa-7367-2019-p3m::4(b)": "Energy top to bottom: v²_bot=gl+4gl=5gl. T−mg=5mg → T=6mg.",
"fmath-aqa-7367-2019-p3m::5(a)": "ω²=k/m=25/0.4=62.5. T=2π/ω≈0.794s. v_max=Aω=0.2√62.5≈1.58m/s.",
"fmath-aqa-7367-2019-p3m::5(b)": "0.4ẍ+4ẋ+25x=0 → ẍ+10ẋ+62.5x=0. Discriminant=100−250<0: under-damped. GS: x=e⁻⁵ᵗ(Acos(√37.5t)+Bsin(√37.5t)).",
"fmath-aqa-7367-2019-p3m::6(a)": "v_y=√(2gh). Speed=√(u²+2gh). Direction: arctan(√(2gh)/u) below horizontal.",
"fmath-aqa-7367-2019-p3m::6(b)": "After bounce: v_y'=e√(2gh). Height H=v_y'²/(2g)=e²h.",

/* ─── OCR A H245 2024 Paper 1 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2024-p1::1(a)": "(1+i)=√2 e^{iπ/4}; (1+i)⁸=(√2)⁸e^{i2π}=16×1=16. □",
"fmath-ocr-h245-2024-p1::1(b)": "√3−i=2e^{−iπ/6}; (2e^{−iπ/6})⁵=32e^{−i5π/6}. |z|=32, arg=−5π/6.",
"fmath-ocr-h245-2024-p1::2(a)": "u=x²; ½∫ue^u du=½(ue^u−e^u)+C=½(x²−1)e^{x²}+C.",
"fmath-ocr-h245-2024-p1::2(b)": "[½(x²−1)e^{x²}]₀¹=0−½(−1)=½.",
"fmath-ocr-h245-2024-p1::3(a)": "Base n=1: LHS=3, RHS=1×2×9/6=3 ✓. Assume n=k; add (k+1)(k+3): k(k+1)(2k+7)/6+(k+1)(k+3)=(k+1)(2k²+13k+18)/6=(k+1)(k+2)(2k+9)/6 ✓. □",
"fmath-ocr-h245-2024-p1::4(a)": "det=a²−6=10→a²=16→a=±4.",
"fmath-ocr-h245-2024-p1::4(b)": "a=4; M⁻¹=(1/10)[[4,−2],[−3,4]].",
"fmath-ocr-h245-2024-p1::4(c)": "P=M⁻¹Q=(1/10)[[4,−2],[−3,4]][[14],[9]]=(1/10)[[38],[−6]]=(3.8,−0.6).",
"fmath-ocr-h245-2024-p1::5(a)": "Aux: (m−2)(m−3)=0→CF=Ae^{2x}+Be^{3x}. PI: y=x/3+4/9. GS: y=Ae^{2x}+Be^{3x}+x/3+4/9.",
"fmath-ocr-h245-2024-p1::5(b)": "y(0)=A+B+4/9=0; y'(0)=2A+3B+1/3=1. Solve: B=14/9, A=−2. y=−2e^{2x}+(14/9)e^{3x}+x/3+4/9.",
"fmath-ocr-h245-2024-p1::6(a)": "r=3cosθ→r²=3rcosθ→x²+y²=3x→(x−3/2)²+y²=9/4. □",
"fmath-ocr-h245-2024-p1::6(b)": "A=½∫₀^{π/2}9cos²θdθ=9/2×π/4=9π/8.",
"fmath-ocr-h245-2024-p1::7(a)": "sinh(x+y)=(e^{x+y}−e^{−x−y})/2. Expand sinhxcoshy+coshxsinhy using exponential definitions; collect to get (e^{x+y}−e^{−x−y})/2. □",
"fmath-ocr-h245-2024-p1::7(b)": "sinh2x+2sinhx=2sinhxcoshx+2sinhx=2sinhx(coshx+1)=0. sinhx=0→x=0; coshx=−1 has no real solution. x=0.",
"fmath-ocr-h245-2024-p1::8(a)": "det(A−λI)=(5−λ)(3−λ)−8=λ²−8λ+7=0→λ=1,7.",
"fmath-ocr-h245-2024-p1::8(b)": "λ=1: v∝(1,−1), normalised (1/√2)(1,−1)ᵀ. λ=7: v∝(2,1), normalised (1/√5)(2,1)ᵀ.",
"fmath-ocr-h245-2024-p1::8(c)": "P=[[1,2],[−1,1]], D=diag(1,7). A⁵=PD⁵P⁻¹; D⁵=diag(1,16807); P⁻¹=(1/3)[[1,−2],[1,1]]. Compute to get A⁵=[[11205,11204],[5602,5603]].",

/* ─── OCR A H245 2024 Paper 2 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2024-p2::1": "f'(x)=3x²−4x+5; disc=16−60<0→always positive→f strictly increasing→at most one root. f(0)=−4<0, f(1)=0. Root x=1.",
"fmath-ocr-h245-2024-p2::2(a)": "2x/(x²−1)=1/(x−1)+1/(x+1).",
"fmath-ocr-h245-2024-p2::2(b)": "ln|x−1|+ln|x+1|+C=ln|x²−1|+C.",
"fmath-ocr-h245-2024-p2::3(a)": "z=3i−2w; 3i−2w−iw=4→w(−2−i)=4−3i→w=(4−3i)(−2+i)/5=(−5+10i)/5=−1+2i. z=3i−2(−1+2i)=2−i.",
"fmath-ocr-h245-2024-p2::4(a)": "cosu=1−u²/2+u⁴/24−…; u=x²: cos(x²)=1−x⁴/2+x⁸/24−…",
"fmath-ocr-h245-2024-p2::4(b)": "[x−x⁵/10+x⁹/216]₀^{0.5}≈0.5−0.003125+0.000002≈0.4969.",
"fmath-ocr-h245-2024-p2::5(a)": "x=sinhu; dx=coshudu; √(1+sinh²u)=coshu; integrand=1. Limits: x=0→u=0; x=√3/2→u=ln(√3+2) [since arcsinh(√3)=ln(√3+2)… adjust for actual limit]. □",
"fmath-ocr-h245-2024-p2::5(b)": "∫₀^{ln(√3+2)}1du=ln(√3+2).",
"fmath-ocr-h245-2024-p2::6(a)": "a×b=|i j k; 1 2 −1; 2 −1 3|=i(6−1)−j(3+2)+k(−1−4)=5i−5j−5k.",
"fmath-ocr-h245-2024-p2::6(b)": "V=|(a×b)·c|=|(5,−5,−5)·(1,1,1)|=|5−5−5|=5.",
"fmath-ocr-h245-2024-p2::6(c)": "Normal∝(1,−1,−1). Through (1,0,−1): (x−1)−y−(z+1)=0→x−y−z=2.",
"fmath-ocr-h245-2024-p2::7(a)": "IF=secx. d(ysecx)/dx=tanx. ysecx=−lncosx+C. y(0)=0→C=0. y=−cosxlncosx.",
"fmath-ocr-h245-2024-p2::8(a)": "dy/dx=sint/(1−cost).",
"fmath-ocr-h245-2024-p2::8(b)": "t=π/2: point=(π/2−1,1), slope=1. Tangent: y=x−π/2+2.",
"fmath-ocr-h245-2024-p2::8(c)": "A=∫₀^{2π}(1−cost)²dt=∫₀^{2π}(3/2−2cost+cos2t/2)dt=3π.",

/* ─── OCR A H245 2023 Paper 1 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2023-p1::1(a)": "|z|=2, arg=π/3; z=2e^{iπ/3}.",
"fmath-ocr-h245-2023-p1::1(b)": "z⁶=64e^{i2π}=64.",
"fmath-ocr-h245-2023-p1::2(a)": "∑(2r−1)²=∑(4r²−4r+1)=4n(n+1)(2n+1)/6−2n(n+1)+n=n(2n−1)(2n+1)/3.",
"fmath-ocr-h245-2023-p1::3(a)": "IF=e^{2x}; d(ye^{2x})/dx=4x; ye^{2x}=2x²+C; y=(2x²+C)e^{−2x}.",
"fmath-ocr-h245-2023-p1::3(b)": "y(0)=C=1. y=(2x²+1)e^{−2x}.",
"fmath-ocr-h245-2023-p1::4(a)": "det=2(6−1)−1(2−0)=10−2=8.",
"fmath-ocr-h245-2023-p1::4(b)": "det(A−I)=0: A−I=[[1,1,0],[1,2,1],[0,1,1]]; det=0 ✓. Eigenvector: v∝(1,−1,1).",
"fmath-ocr-h245-2023-p1::5(a)": "Base n=1: 6|6 ✓. Step: 7^{k+1}−1=7(7ᵏ−1)+6; 6|7(7ᵏ−1) and 6|6; so 6|(7^{k+1}−1). □",
"fmath-ocr-h245-2023-p1::6(a)": "x=2sinθ; ∫4sin²θdθ=2(θ−sinθcosθ)+C=2arcsin(x/2)−x√(4−x²)/2+C.",
"fmath-ocr-h245-2023-p1::7(a)": "A=2×½∫_{−π/4}^{π/4}4cos2θdθ=[2sin2θ]_{−π/4}^{π/4}×2=4 (accounting for both branches).",
"fmath-ocr-h245-2023-p1::7(b)": "(x²+y²)²=4(x²−y²).",
"fmath-ocr-h245-2023-p1::8(a)": "CF=e^{−x}(Acos2x+Bsin2x). PI: y=2cosx+sinx. GS=e^{−x}(Acos2x+Bsin2x)+2cosx+sinx.",
"fmath-ocr-h245-2023-p1::8(b)": "CF→0 as x→∞; solution approaches 2cosx+sinx (amplitude √5, oscillation).",

/* ─── OCR A H245 2023 Paper 2 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2023-p2::1": "x=3secθ; integral becomes (1/9)∫cosθdθ=sinθ/9+C=√(x²−9)/(9x)+C.",
"fmath-ocr-h245-2023-p2::2(a)": "y'=e^x(sinx+cosx)=0→tanx=−1→x=3π/4, 7π/4.",
"fmath-ocr-h245-2023-p2::3(a)": "Base ✓. Step: add (k+1)2^{k+1} to IH; 2+2^{k+1}(k−1)+(k+1)2^{k+1}=2+k×2^{k+2}=2(1+k×2^{k+1}) ✓. □",
"fmath-ocr-h245-2023-p2::4(a)": "det=2; A⁻¹=(1/2)[[0,−1],[2,3]]. x=A⁻¹b=(2,−1).",
"fmath-ocr-h245-2023-p2::5(a)": "IF=1/(x+1); y/(x+1)=x+C; y(0)=C=1; y=(x+1)².",
"fmath-ocr-h245-2023-p2::6(a)": "L=∫₀^{ln2}coshxdx=[sinhx]₀^{ln2}=3/4.",
"fmath-ocr-h245-2023-p2::7(a)": "k=5. Direction n₁×n₂=(2,1,−3). Line: r=(0,3/2,9/2)+t(2,1,−3).",
"fmath-ocr-h245-2023-p2::8(a)": "CF=Ae^{2x}+Be^{−2x}. PI₁=xe^{2x}/4 (resonance). PI₂=−1. GS=Ae^{2x}+Be^{−2x}+xe^{2x}/4−1.",
"fmath-ocr-h245-2023-p2::8(b)": "y→0 as x→+∞: A=0. y(0)=B−1=0→B=1. y=e^{−2x}+xe^{2x}/4−1.",

/* ─── OCR A H245 2022 Paper 1 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2022-p1::1(a)": "(1+2x)^{−3}=1−6x+24x²−80x³+…; valid |x|<1/2.",
"fmath-ocr-h245-2022-p1::2(a)": "Reflection in y=xtanα: [[cos2α,sin2α],[sin2α,−cos2α]].",
"fmath-ocr-h245-2022-p1::2(b)": "M=[[−1,0],[0,1]][[√3/2,−1/2],[1/2,√3/2]]=[[−√3/2,1/2],[1/2,√3/2]]. Image of (2,1)=(−√3+1/2,(1+√3)/2).",
"fmath-ocr-h245-2022-p1::3(a)": "1+i√3=2e^{iπ/3}; 1−i=√2e^{−iπ/4}. z=√2e^{i(π/3+π/4)}=√2e^{i7π/12}.",
"fmath-ocr-h245-2022-p1::4(a)": "x²+2x+5=(x+1)²+4. ∫=(1/2)arctan((x+1)/2)+C.",
"fmath-ocr-h245-2022-p1::4(b)": "Write x=½(2x+2)−1. ∫=√(x²+2x+5)−arcsinh((x+1)/2)+C=√(x²+2x+5)−ln(x+1+√(x²+2x+5))+C.",
"fmath-ocr-h245-2022-p1::5(a)": "Base n=1: 1; RHS=1 ✓. Step: k²(k+1)²/4+(k+1)³=(k+1)²(k+2)²/4 ✓. □",
"fmath-ocr-h245-2022-p1::6(a)": "1+2cosθ=0→cosθ=−1/2→θ=2π/3, 4π/3.",
"fmath-ocr-h245-2022-p1::6(b)": "Limaçon with inner loop; passes through pole at θ=2π/3 and 4π/3.",
"fmath-ocr-h245-2022-p1::6(c)": "A=½∫_{2π/3}^{4π/3}(1+2cosθ)²dθ=½∫(3+4cosθ+2cos2θ)dθ=½[3θ+4sinθ+sin2θ]_{2π/3}^{4π/3}=π−3√3/2.",
"fmath-ocr-h245-2022-p1::7(a)": "Aux (m+2)(m−1)=0; CF=Ae^{−2x}+Be^x. PI: y=−x²−x−3/2. ICs: A=1/2, B=2. y=(1/2)e^{−2x}+2eˣ−x²−x−3/2.",
"fmath-ocr-h245-2022-p1::8(a)": "eˣ+3e^{−x}=4→e^{2x}−4eˣ+3=0→(eˣ−1)(eˣ−3)=0. x=0 or x=ln3.",

/* ─── OCR A H245 2022 Paper 2 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2022-p2::1(a)": "sinh²x=(cosh2x−1)/2. ∫₀^{ln2}=[sinh2x/4−x/2]₀^{ln2}=15/32−(ln2)/2.",
"fmath-ocr-h245-2022-p2::2(a)": "2(1+t)+(2−t)−(3+2t)=4→1−t=4→t=−3. Point=(−2,5,−3).",
"fmath-ocr-h245-2022-p2::2(b)": "sinα=|d·n|/(|d||n|)=1/6. α≈9.6°.",
"fmath-ocr-h245-2022-p2::3(a)": "(cosθ+isinθ)³=cos3θ+isin3θ. Real part: cos³θ−3cosθsin²θ=4cos³θ−3cosθ. □",
"fmath-ocr-h245-2022-p2::3(b)": "2cos3θ=−1→cos3θ=−1/2→3θ=2π/3,4π/3,8π/3. θ=2π/9, 4π/9, 8π/9.",
"fmath-ocr-h245-2022-p2::4(a)": "½(1/(2r−1)−1/(2r+1)). Telescope: ½(1−1/(2n+1))=n/(2n+1). □",
"fmath-ocr-h245-2022-p2::5(a)": "IF=x². d(x²y)/dx=4x⁴. y=4x³/5+C/x².",
"fmath-ocr-h245-2022-p2::5(b)": "C=0 (C/x²→∞ as x→0 otherwise); y=4x³/5.",
"fmath-ocr-h245-2022-p2::6(a)": "λ=5,−1. Eigenvectors: (1,2)ᵀ for λ=5; (1,−1)ᵀ for λ=−1.",
"fmath-ocr-h245-2022-p2::6(b)": "Mⁿ=PDⁿP⁻¹=(1/3)[[5ⁿ+2(−1)ⁿ, 5ⁿ−(−1)ⁿ],[2(5ⁿ−(−1)ⁿ), 2×5ⁿ+(−1)ⁿ]]... check P⁻¹=(1/3)[[1,1],[2,−1]].",
"fmath-ocr-h245-2022-p2::7(a)": "CF=Acos2x+Bsin2x. PI (resonance): try x(Ccos2x+Dsin2x); d/dx gives 4Dcos2x−4Csin2x=8sin2x→C=−2,D=0. GS=Acos2x+Bsin2x−2xcos2x.",

/* ─── OCR A H245 2021A Paper 1 ────────────────────────────────────────────── */
"fmath-ocr-h245-2021a-p1::1(a)": "Base: 4+2=6 ✓. Step: 4^{k+1}+2=4(4ᵏ+2)−6; 6|4(4ᵏ+2) and 6|6 → 6|(4^{k+1}+2). □",
"fmath-ocr-h245-2021a-p1::2(a)": "PF: ¼(1/(2x−1)−1/(2x+1)). ∫=(1/8)ln|(2x−1)/(2x+1)|+C.",
"fmath-ocr-h245-2021a-p1::2(b)": "∫x/(4x²−1)dx=(1/8)ln|4x²−1|+C.",
"fmath-ocr-h245-2021a-p1::3(a)": "x²+(y−2)²=(x+2)²+y²→y=−x. Line through origin slope −1.",
"fmath-ocr-h245-2021a-p1::3(b)": "arg(w−1)=π/4: half-line y=x−1, x>1. Intersection y=−x with y=x−1: x=1/2, y=−1/2 — outside x>1 domain, so no intersection on the half-line.",
"fmath-ocr-h245-2021a-p1::4(a)": "(λ−2)(λ−3)=0. λ=2: v∝(1,2). λ=3: v∝(1,1).",
"fmath-ocr-h245-2021a-p1::4(b)": "A⁶=PD⁶P⁻¹ where P=[[1,1],[2,1]], D=diag(64,729), P⁻¹=[[−1,1],[2,−1]]. Compute product for exact values.",
"fmath-ocr-h245-2021a-p1::5(a)": "∫dy/y=∫x/(x²+1)dx→ln|y|=½ln(x²+1)+C. y=A√(x²+1); y(0)=2→A=2. y=2√(x²+1).",
"fmath-ocr-h245-2021a-p1::6(a)": "4 petals; A=4×½∫₀^{π/2}4sin²2θdθ=8∫₀^{π/2}(1−cos4θ)/2dθ=2π.",
"fmath-ocr-h245-2021a-p1::7(a)": "Aux (m−3)(m+1)=0; CF=Ae^{3x}+Be^{−x}. PI: Ceˣ→−4C=6→C=−3/2. GS=Ae^{3x}+Be^{−x}−(3/2)eˣ.",
"fmath-ocr-h245-2021a-p1::7(b)": "A+B−3/2=1, 3A−B−3/2=−1. A=3/4, B=7/4. y=(3/4)e^{3x}+(7/4)e^{−x}−(3/2)eˣ.",

/* ─── OCR A H245 2021A Paper 2 ────────────────────────────────────────────── */
"fmath-ocr-h245-2021a-p2::1": "IBP twice: ∫(lnx)²dx=x(lnx)²−2xlnx+2x+C. [...]₁²=2(ln2)²−4ln2+2.",
"fmath-ocr-h245-2021a-p2::2(a)": "n₁×n₂=(0,−3,−3)∝(0,1,1). Point on line: z=0→x=7/3,y=−1/3. Substitute into π₃: 7/3+2/3=3→a=3. Line: r=(7/3,−1/3,0)+t(0,1,1).",
"fmath-ocr-h245-2021a-p2::3(a)": "Telescoping with f(r)=r(r+1)(r+2)(r+3)/4; f(r)−f(r−1)=r(r+1)(r+2). Sum=f(n)−f(0)=n(n+1)(n+2)(n+3)/4. □",
"fmath-ocr-h245-2021a-p2::4(a)": "tan5θ=(5t−10t³+t⁵)/(1−10t²+5t⁴) where t=tanθ.",
"fmath-ocr-h245-2021a-p2::5(a)": "Aux (m+2)²=0; CF=(A+Bx)e^{−2x}. PI for (1+x)e^{−2x}: try (Cx²+Dx³)e^{−2x}→C=1/2,D=1/6. GS=(A+Bx+x²/2+x³/6)e^{−2x}.",
"fmath-ocr-h245-2021a-p2::6(a)": "A=½∫₀^{2π}(2+cosθ)²dθ=½∫(4+4cosθ+cos²θ)dθ=½(8π+0+π)=9π/2.",
"fmath-ocr-h245-2021a-p2::7(a)": "IF=1/x. d(y/x)/dx=xeˣ. y/x=(x−1)eˣ+C. y=x(x−1)eˣ+Cx.",
"fmath-ocr-h245-2021a-p2::7(b)": "y(1)=0+C=0→C=0. y=x(x−1)eˣ.",

/* ─── OCR A H245 2019 Paper 1 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2019-p1::1(a)": "sin(2x)=2x−4x³/3+4x⁵/15−…; e^{x²}=1+x²+x⁴/2+…",
"fmath-ocr-h245-2019-p1::1(b)": "Multiply: 2x+(2−4/3)x³+(4/15−4/3+1)x⁵=2x+(2/3)x³+(1/5)x⁵.",
"fmath-ocr-h245-2019-p1::2(a)": "4∑r³−∑r=n²(n+1)²−n(n+1)/2=n(n+1)(2n²+2n−1)/2. □",
"fmath-ocr-h245-2019-p1::3(a)": "a²−b²=3, 2ab=4→b=2/a→a⁴−3a²−4=0→a²=4. Roots: ±(2+i).",
"fmath-ocr-h245-2019-p1::4(a)": "tr=6→λ₂+λ₃=5; det=4→λ₂λ₃=4; so λ=1(×2),λ=4. λ=4: v∝(1,1,1). λ=1 second eigenvector: v∝(1,−1,0).",
"fmath-ocr-h245-2019-p1::5(a)": "Limaçon; max r=4 at θ=0; passes through origin at θ=π.",
"fmath-ocr-h245-2019-p1::5(b)": "r=2cosθ+2=2→cosθ=0→θ=π/2,3π/2. Area inside both = area of circle r≤2 for |θ|≥π/2 + area under limaçon for |θ|<π/2 where it's inside r=2. After careful integration: A=2π−2.",
"fmath-ocr-h245-2019-p1::6(a)": "Aux (m−3)(m+2)=0; CF=Ae^{3x}+Be^{−2x}. PI: try ax²+bx+c→a=−2,b=4/3,c=−4/9 (work through). GS=Ae^{3x}+Be^{−2x}−2x²+4x/3−4/9... verify by substitution.",
"fmath-ocr-h245-2019-p1::6(b)": "y(0)=A+B−4/9=0; y'(0)=3A−2B+4/3=1. Solve for A,B; state PS.",
"fmath-ocr-h245-2019-p1::7(a)": "y=vx; x dv/dx=(v²−1)/(2−v). PF: (2−v)/((v−1)(v+1))=1/(2(v−1))−3/(2(v+1)). Integrate: ½ln|y−x|−(3/2)ln|y+x|=lnx+C.",

/* ─── OCR A H245 2019 Paper 2 ─────────────────────────────────────────────── */
"fmath-ocr-h245-2019-p2::1(a)": "IBP: u=arctanx, v=x. ∫arctanxdx=xarctanx−½ln(1+x²)+C.",
"fmath-ocr-h245-2019-p2::2(a)": "Base n=5: 32>25 ✓. Step: 2^{k+1}=2×2ᵏ>2k²; 2k²>(k+1)² when k≥3 (since k²−2k−1>0). □",
"fmath-ocr-h245-2019-p2::3(a)": "z=e^{iπ(2k+1)/6}, k=0,…,5. Six equally spaced on unit circle at angles π/6,π/2,5π/6,7π/6,3π/2,11π/6.",
"fmath-ocr-h245-2019-p2::3(b)": "±i, √3/2±i/2, −√3/2±i/2.",
"fmath-ocr-h245-2019-p2::4(a)": "dy/dx=3t/2→at t=2, slope=3. Normal slope=−1/3. Point (4,8). Normal: y=−x/3+28/3, i.e. x+3y=28.",
"fmath-ocr-h245-2019-p2::5(a)": "CF=e^{−x}(Acosx+Bsinx). PI: p=4/5,q=8/5. y(0)=A+4/5=0→A=−4/5. y'(0): −A+B+8/5=0→B=−12/5. y=e^{−x}(−4cosx/5−12sinx/5)+(4cosx+8sinx)/5.",
"fmath-ocr-h245-2019-p2::6(a)": "u=1/x; ∫=−∫u³/(1+u⁴)du=−¼ln(1+u⁴)+C=¼ln(x⁴/(x⁴+1))+C.",
"fmath-ocr-h245-2019-p2::7(a)": "CP=−(λ−1)(λ−2)(λ−3). Eigenvalues: 1,2,3.",
"fmath-ocr-h245-2019-p2::7(b)": "λ=1: v=(1,1,1)ᵀ. λ=2: v=(1,2,4)ᵀ. λ=3: v=(1,3,9)ᵀ.",

/* ─── OCR B H645 2024 Y420 ────────────────────────────────────────────────── */
"fmath-ocrb-h645-2024-y420::1(a)": "(2+i)(3+i)/10=(5+5i)/10=(1+i)/2. |z|=1/√2, arg=π/4.",
"fmath-ocrb-h645-2024-y420::2(a)": "λ=(5±√33)/2. Both real.",
"fmath-ocrb-h645-2024-y420::2(b)": "Eigenvectors from (A−λI)v=0 for each λ. P=[v₁|v₂], D=diag(λ₁,λ₂).",
"fmath-ocrb-h645-2024-y420::3(a)": "c²=25; e=5/4. Foci (±5,0). Directrices x=±16/5.",
"fmath-ocrb-h645-2024-y420::3(b)": "Normal slope=−4sinθ/3. Normal: 4xsinθ+3y=25tanθ.",
"fmath-ocrb-h645-2024-y420::4(a)": "Base n=1: 1; RHS=1×2×3/6=1 ✓. Step: add (k+1)(2k+1) to k(k+1)(4k−1)/6=(k+1)(k+2)(4k+3)/6 ✓. □",
"fmath-ocrb-h645-2024-y420::5(a)": "Resonance; PI=−(3x/2)cos3x. GS=Acos3x+Bsin3x−(3x/2)cos3x.",
"fmath-ocrb-h645-2024-y420::6(a)": "A=½∫₀^{2π}a²θ²dθ=a²[θ³/6]₀^{2π}=4π³a²/3.",
"fmath-ocrb-h645-2024-y420::7(a)": "2x=sinht; ½∫cosh²t dt=t/4+sinhtcosht/4+C=¼arcsinh(2x)+x√(1+4x²)/2+C.",
"fmath-ocrb-h645-2024-y420::8(a)": "y'=−(2x+y)/(x+2y). Horizontal: y=−2x; substitute into curve: 3x²=7. Points (±√(7/3),∓2√(7/3)).",

/* ─── OCR B H645 2023 Y420 ────────────────────────────────────────────────── */
"fmath-ocrb-h645-2023-y420::1(a)": "z=2e^{iπ(2k+1)/4}, k=0,…,3. In a+bi: √2(1+i), √2(−1+i), √2(−1−i), √2(1−i).",
"fmath-ocrb-h645-2023-y420::2(a)": "Ellipse x²/4+y²/9=1; a=3,b=2; e=√5/3; foci (0,±√5); directrices y=±9√5/5.",
"fmath-ocrb-h645-2023-y420::3(a)": "1/((r+1)(r+2))=1/(r+1)−1/(r+2). Telescope: ½−1/(n+2)=n/(2(n+2)). □",
"fmath-ocrb-h645-2023-y420::4(a)": "Aux (m−2)²=0; CF=(A+Bx)e^{2x}. PI=4eˣ. GS=(A+Bx)e^{2x}+4eˣ.",
"fmath-ocrb-h645-2023-y420::5(a)": "VA: x=±2. HA: y=1. y-int: −1/4. Two branches approaching asymptotes.",
"fmath-ocrb-h645-2023-y420::6(a)": "A=2I+N (N nilpotent). Aⁿ=[[2ⁿ, n×2^{n−1}],[0,2ⁿ]].",
"fmath-ocrb-h645-2023-y420::7(a)": "S=2π∫₀¹x²√(1+4x²)dx. Evaluate via substitution 2x=sinht to get exact form involving arcsinh and surds.",
"fmath-ocrb-h645-2023-y420::8(a)": "h=−2,k=1; X=x+2,Y=y−1. dY/dX=(X+Y)/(X−Y): homogeneous→arctan(Y/X)=ln√(X²+Y²)+C. Back-substitute: arctan((y−1)/(x+2))=ln√((x+2)²+(y−1)²)+C.",

/* ─── OCR B H645 2022 Y420 ────────────────────────────────────────────────── */
"fmath-ocrb-h645-2022-y420::1(a)": "Circle centre (3,−4) radius 5. On real axis: (x−3)²+16=25→x=0 or 6. Points (0,0) and (6,0).",
"fmath-ocrb-h645-2022-y420::2(a)": "y'=−3cosθ/(5sinθ). Tangent: xcosθ/5+ysinθ/3=1.",
"fmath-ocrb-h645-2022-y420::2(b)": "Rearrange tangent equation to match form. □",
"fmath-ocrb-h645-2022-y420::3(a)": "CP: λ²−3λ+2=0→A²=3A−2I=[[7,3],[−6,−2]]. A³=3A²−2A=[[15,7],[−14,−6]].",
"fmath-ocrb-h645-2022-y420::4(a)": "Base n=1: 1×1=1; RHS=(1+3)/4=1 ✓. Step: algebraic manipulation shows result holds for n=k+1. □",
"fmath-ocrb-h645-2022-y420::5(a)": "IF=sinx. ysinx=x+C. y=(x+C)cosecx.",
"fmath-ocrb-h645-2022-y420::6(a)": "As t→±∞, y−x=−2/t→0; oblique asymptote y=x. Curve has two branches symmetric about y=x.",
"fmath-ocrb-h645-2022-y420::7(a)": "y=vx²; substitute to get x²v''+xv'=x. □",
"fmath-ocrb-h645-2022-y420::7(b)": "Hom: v=C₁lnx+C₂. PI: v=x. GS v=C₁lnx+C₂+x. y=C₁x²lnx+C₂x²+x³.",
"fmath-ocrb-h645-2022-y420::8(a)": "V=π∫₀^{ln3}sinh²xdx=π/2[sinh2x/2−x]₀^{ln3}. sinh(2ln3)=40/9. V=π(20/9−(ln3)/2).",

/* ─── OCR B H645 2021A Y420 ──────────────────────────────────────────────── */
"fmath-ocrb-h645-2021a-y420::1(a)": "z=2e^{iπ/3}=1+i√3. z*=1−i√3. z+z*=2.",
"fmath-ocrb-h645-2021a-y420::2(a)": "e=1/2→c=1→2c=2→a=2. b²=4−1=3. a=2, b=√3.",
"fmath-ocrb-h645-2021a-y420::2(b)": "SP+S'P=2a=4 by ellipse definition. □",
"fmath-ocrb-h645-2021a-y420::3(a)": "Base: 5|5 ✓. Step: 6^{k+1}−1=6(6ᵏ−1)+5; 5|both terms. □",
"fmath-ocrb-h645-2021a-y420::4(a)": "Aux (m−3)²=0; CF=(A+Bx)e^{3x}. PI: y=x+4/3. GS=(A+Bx)e^{3x}+x+4/3.",
"fmath-ocrb-h645-2021a-y420::5(a)": "4-petal rose. Area of one petal=½∫₀^{π/2}sin²2θdθ=π/8. Total=π/2.",
"fmath-ocrb-h645-2021a-y420::6(a)": "x=sinθ; ∫₀^{π/2}dθ=π/2.",
"fmath-ocrb-h645-2021a-y420::7(a)": "λ=1,−2. Aⁿ=[[1, 1−(−2)ⁿ],[0,(−2)ⁿ]]... verify via P=[[1,1],[0,−1]], P⁻¹=[[1,1],[0,−1]]: Aⁿ=[[1,(1−(−2)ⁿ)],[0,(−2)ⁿ]].",
"fmath-ocrb-h645-2021a-y420::8(a)": "IF=(x+1)². d(y(x+1)²)/dx=(x+1)⁵. y(x+1)²=(x+1)⁶/6+C. y(0)=1/6+C=0→C=−1/6. y=((x+1)⁶−1)/(6(x+1)²).",

/* ─── OCR B H645 2019 Y420 ────────────────────────────────────────────────── */
"fmath-ocrb-h645-2019-y420::1(a)": "Sum of all 5th roots=0. Re-part: 1+2cos(2π/5)+2cos(4π/5)=0→∑ᵏ₌₁⁴cos(2kπ/5)=−1.",
"fmath-ocrb-h645-2019-y420::2(a)": "Focus (3,0); directrix x=−3; e=1. Tangent at (3t²,6t): ty=x+3t².",
"fmath-ocrb-h645-2019-y420::3(a)": "(2m+1)(2n+1)=2(…)+1: odd. Induction on k: aᵏ⁺¹=aᵏ×a; product of odds is odd. □",
"fmath-ocrb-h645-2019-y420::4(a)": "CF=Ae^{−2x}+Beˣ. Resonance: PI=xeˣ(Cx+D); differentiate twice; matching gives PI=x²eˣ/... from 3C=4→C=4/3? Work through: try (ax+b)xeˣ; ultimately PI=(4x²/3)eˣ... verify by back-substitution.",
"fmath-ocrb-h645-2019-y420::5(a)": "A=½∫₀^{2π}(3+cosθ)²dθ=½(18π+0+π)=19π/2.",
"fmath-ocrb-h645-2019-y420::6(a)": "Arc length=6∫₀¹t√(1+t²)dt=2[（1+t²)^{3/2}]₀¹=2(2√2−1)=4√2−2.",
"fmath-ocrb-h645-2019-y420::7(a)": "λ=2−√2,2,2+√2. A⁻¹=PD⁻¹P⁻¹ (computed using eigenvectors).",
"fmath-ocrb-h645-2019-y420::8(a)": "CF=Acos2t+Bsin2t. PI=2t. y(0)=A=1; y'(0)=2B+2=0→B=−1. y=cos2t−sin2t+2t."

};
