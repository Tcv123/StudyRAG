// A-level Further Mathematics — exam questions + official mark schemes
// Built from AQA / Edexcel / OCR question papers + mark schemes.
// Merged into each paper in mark-schemes.html at selection time.
// Key: paperId (from papers-config.js).
window.FM_QUESTIONS = {
 "fmath-aqa-7367-2023-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "",
    "parts": [
     {
      "code": "1",
      "prompt": "How many solutions does tanh x = cosh x have?\nOptions: 0   1   2   3",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Argand diagram (on the question paper) shows a circle centred at 2 − 3i with radius 2: it touches the imaginary axis at −3i, and its highest and lowest points are 2 − i and 2 − 5i (it does not reach the real axis).",
    "parts": [
     {
      "code": "2",
      "prompt": "Choose the equation of the locus.\nOptions: A   z − 2 + 3i   = 2   B   z + 2 − 3i   = 2   C   z − 2 + 3i   = 4   D   z + 2 − 3i   = 4",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A = (1 2; 0 1) represents a transformation.",
    "parts": [
     {
      "code": "3",
      "prompt": "Which point is invariant under this transformation?\nOptions: (1, 1)   (0, 2)   (3, 0)   (2, 1)",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "f(t) solves a second order differential equation that models heavy damping.",
    "parts": [
     {
      "code": "4",
      "prompt": "Which could be f(t)?\nOptions: f(t) = 2e^(−t)cos(3t) + 5e^(−t)sin(3t)   f(t) = 3e^(−t) + 4te^(−t)   f(t) = 7e^(−t) + 2e^(−2t)   f(t) = 8e^(−t)cos(3t − 0.1)",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "f(r) = 2ʳ(r − 2), r ∈ ℤ.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that f(r + 1) − f(r) = r·2ʳ.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Use the method of differences to show that Σ_{r=1}^{n} r·2ʳ = 2^(n+1)(n − 1) + 2.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "M = (1/10)(a a −6; 0 10 0; 9 14 −13), a real. Eigenvectors v₁ = (1, 0, 3)ᵀ, v₂ = (1, 1, 1)ᵀ, v₃ = (c, 0, 1)ᵀ with eigenvalues λ₁, λ₂ = 1, λ₃; c is an integer.",
    "parts": [
     {
      "code": "6(a)(i)",
      "prompt": "Find λ₁.",
      "marks": 2
     },
     {
      "code": "6(a)(ii)",
      "prompt": "Find a.",
      "marks": 2
     },
     {
      "code": "6(b)",
      "prompt": "Find the integer c and λ₃.",
      "marks": 4
     },
     {
      "code": "6(c)",
      "prompt": "Find U, D and U⁻¹ with D diagonal and M = UDU⁻¹.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "f(x) = |sin x + ½|, 0 ≤ x ≤ 2π.",
    "parts": [
     {
      "code": "7",
      "prompt": "Find, in set notation, the set of x for which f(x) ≥ ½.",
      "marks": 5
     }
    ]
   },
   {
    "number": 8,
    "scenario": "g(x) = e^(sin x), 0 ≤ x ≤ 2π (graph on the question paper: starts at y = 1, a maximum then a minimum).",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Give the exact x-coordinates of the stationary points of y = g(x).",
      "marks": 1
     },
     {
      "code": "8(b)",
      "prompt": "Estimate ∫₀^π g(x) dx using Simpson's rule with 3 ordinates, to 2 decimal places.",
      "marks": 3
     },
     {
      "code": "8(c)",
      "prompt": "Explain how Simpson's rule could give a more accurate estimate of the integral in (b).",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Points A, B, C have position vectors a = 2i + j + 2k, b = −i − 8j + 2k, c = −2j.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find the area of triangle ABC.",
      "marks": 4
     },
     {
      "code": "9(b)",
      "prompt": "A, B and C lie in plane Π. Find an equation of Π in the form r·n = d.",
      "marks": 2
     },
     {
      "code": "9(c)",
      "prompt": "P has position vector p = i + 4j + 2k. Find the exact distance of P from Π.",
      "marks": 3
     }
    ]
   },
   {
    "number": 10,
    "scenario": "M = (2 −1 1; −1 −1 −2; 1 2 c), c real; T is the linear transformation represented by M.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Show that for one value of c every image point under T lies in the plane x + 5y + 3z = 0, and state that value of c.",
      "marks": 3
     },
     {
      "code": "10(b)(i)",
      "prompt": "M is non-singular. State any restrictions on c.",
      "marks": 2
     },
     {
      "code": "10(b)(ii)",
      "prompt": "Find M⁻¹ in terms of c.",
      "marks": 4
     },
     {
      "code": "10(b)(iii)",
      "prompt": "Using (b)(ii), solve 2x − y + z = −3, −x − y − 2z = −6, x + 2y + 4z = 13.",
      "marks": 3
     }
    ]
   },
   {
    "number": 11,
    "scenario": "f(x) = 4x³ − 8x² − 51x − 45, x ∈ ℝ.",
    "parts": [
     {
      "code": "11(a)(i)",
      "prompt": "Factorise f(x) fully.",
      "marks": 2
     },
     {
      "code": "11(a)(ii)",
      "prompt": "Hence solve f(x) < 0.",
      "marks": 2
     },
     {
      "code": "11(b)",
      "prompt": "y = f(x) is translated by (7, 0)ᵀ and then reflected in the x-axis to give y = g(x). Solve g(x) ≤ 0.",
      "marks": 3
     }
    ]
   },
   {
    "number": 12,
    "scenario": "",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "From the identities for sinh 2x and cosh 2x, prove that tanh 2x = 2tanh x/(1 + tanh²x).",
      "marks": 2
     },
     {
      "code": "12(b)(i)",
      "prompt": "f(x) = tanh x, x > 0. State the range of f.",
      "marks": 1
     },
     {
      "code": "12(b)(ii)",
      "prompt": "Use (a) and (b)(i) to prove that tanh 2x > tanh x for x > 0.",
      "marks": 3
     }
    ]
   },
   {
    "number": 13,
    "scenario": "",
    "parts": [
     {
      "code": "13",
      "prompt": "Prove, using l'Hôpital's rule, that lim_{x→π} (x sin 2x)/cos(x/2) = −4π.",
      "marks": 5
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Curve C has polar equation r = 4/(5 + 3cos θ), −π < θ ≤ π.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Show that 1/k ≤ r ≤ k for some integer k.",
      "marks": 2
     },
     {
      "code": "14(b)",
      "prompt": "Find the Cartesian equation of C in the form y² = f(x).",
      "marks": 4
     },
     {
      "code": "14(c)",
      "prompt": "Ellipse E: y² + 16x²/25 = 1. Find the transformation mapping E onto C.",
      "marks": 4
     }
    ]
   },
   {
    "number": 15,
    "scenario": "",
    "parts": [
     {
      "code": "15",
      "prompt": "Find the general solution of d²y/dx² − 3 dy/dx − 4y = cos 2x + 5x.",
      "marks": 9
     }
    ]
   },
   {
    "number": 16,
    "scenario": "",
    "parts": [
     {
      "code": "16(a)",
      "prompt": "Show that ∫_{0.5}^{4} (1/t) ln t dt = a(ln 2)², finding the rational number a.",
      "marks": 4
     },
     {
      "code": "16(b)",
      "prompt": "Curve C: x = 2t, y = ½t² − ln t, t > 0. The arc from t = 0.5 to t = 4 is rotated 2π about the x-axis, giving surface area S. Find S exactly in the form π(b + c ln 2 + d(ln 2)²) with b, c, d rational.",
      "marks": 7
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 A: 0"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 A: |z − 2 + 3i| = 2"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 C: (3, 0)"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "B1 C: f(t) = 7e^(−t) + 2e^(−2t)"
    ]
   },
   "7": {
    "type": "points",
    "points": [
     "M1 Sketch of y = sin x + ½ (or |sin x + ½|), or one equation/inequality without modulus, e.g. sin x + ½ = ½",
     "A1 0 ≤ x ≤ π (condone strict)",
     "M1 Correct shape of |sin x + ½|, or the other case sin x + ½ = −½, or two critical values from a quadratic in sin x",
     "A1 3π/2",
     "A1 In set notation: {x : 0 ≤ x ≤ π} ∪ {3π/2} ∪ {2π}, e.g. [0, π] ∪ {3π/2, 2π}"
    ]
   },
   "13": {
    "type": "points",
    "points": [
     "E1 Numerator and denominator both 0 at x = π",
     "M1 Differentiates numerator and denominator",
     "A1 f′(π) = 2π cos 2π + sin 2π = 2π and g′(π) = −½ sin(π/2) = −½",
     "M1 Forms f′(π)/g′(π)",
     "R1 Reasoned argument with clear limiting process: 2π/(−½) = −4π"
    ],
    "guidance": "E0 M1 A1 M1 R1 is possible."
   },
   "15": {
    "type": "points",
    "points": [
     "M1 Auxiliary equation m² − 3m − 4 = 0, m = 4, −1",
     "A1 CF y = Ae^(−x) + Be^(4x)",
     "M1 PI of form p cos 2x + q sin 2x + rx + s",
     "M1 First and second derivatives of their PI",
     "M1 Substitutes into the equation",
     "M1 Compares cos 2x and sin 2x coefficients and solves: 6p − 8q = 0, −6q − 8p = 1",
     "M1 Compares x and constant terms and solves: −4r = 5, −3r − 4s = 0",
     "A1 p = −2/25, q = −3/50 or r = −5/4, s = 15/16",
     "R1 y = Ae^(−x) + Be^(4x) − (2/25)cos 2x − (3/50)sin 2x − (5/4)x + 15/16"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Correct f(r + 1) and forms the difference, e.g. 2^(r+1)(r − 1) − 2ʳ(r − 2)",
     "R1 Rigorous argument to r·2ʳ, showing f(r + 1) − f(r), r·2ʳ and at least one intermediate step, e.g. 2ʳ(2r − 2 − r + 2)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 At least two lines of differences from (a), e.g. f(2) − f(1)",
     "M1 At least two consecutive lines shown cancelling (PI)",
     "A1 Reduces to two terms: f(n + 1) − f(1) = 2^(n+1)(n − 1) − 2(−1)",
     "R1 Reasoned completion to 2^(n+1)(n − 1) + 2; needs first two and last two lines seen"
    ]
   },
   "6(a)(i)": {
    "type": "points",
    "points": [
     "M1 Uses Mv₁ = λ₁v₁: (1/10)(a − 18, 0, −30)ᵀ = λ₁(1, 0, 3)ᵀ",
     "A1 λ₁ = −1"
    ]
   },
   "6(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Linear equation in a from the eigenvector definition, e.g. 10 = 18 − a",
     "A1 a = 8"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Appropriate method for λ or c, e.g. M(c, 0, 1)ᵀ = λ₃(c, 0, 1)ᵀ (PI by λ₃ = 0.5)",
     "M1 Equation in λ or c: (8c − 6)/10 = c(9c − 13)/10, i.e. 9c² − 21c + 6 = 0 (PI by λ₃ = 0.5)",
     "A1 λ₃ = 0.5",
     "A1 c = 2 (c = 1/3 rejected as not an integer)"
    ],
    "guidance": "No method shown scores 0/4 if λ₃ is wrong."
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1F U = (1 1 2; 0 1 0; 3 1 1), ft their c",
     "B1F D = diag(−1, 1, 0.5), ft their eigenvalues and consistent with U",
     "B1F U⁻¹ = (1/5)(−1 −1 2; 0 5 0; 3 −2 −1), ft their U"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 x = π/2 and 3π/2"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Three y-values: 1, e, 1 at x = 0, π/2, π",
     "M1 Simpson's rule used correctly, (1/3)(π/2)(1 + 1 + 4e) (condone 5 ordinates)",
     "A1 6.74 (awrt)"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "E1 Use more ordinates/strips, e.g. 5 ordinates"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 Two vectors in the plane, e.g. AB = (−3, −9, 0)ᵀ, AC = (−2, −3, −2)ᵀ",
     "M1 Method for the area, e.g. vector product AB × AC = (18, −6, −9)ᵀ",
     "M1 Area = ½|AB × AC|",
     "A1 21/2 with no incorrect working"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Scalar product of their normal with a point in Π, e.g. (0, −2, 0)·(6, −2, −3) = 4",
     "A1 r·(6, −2, −3)ᵀ = 4"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 p·n = −8 for the parallel plane through P, or correct distance formula, or perpendicular line substituted into Π",
     "M1 Divides by |n| = 7 (d = 4/7 and −8/7), or substitutes correctly into the formula",
     "A1 12/7"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 Image of general point: (2x − y + z, −x − y − 2z, x + 2y + cz)",
     "M1 Substitutes into x + 5y + 3z",
     "R1 Gets (−9 + 3c)z, so every image lies in the plane when c = 3"
    ]
   },
   "10(b)(i)": {
    "type": "points",
    "points": [
     "M1 det M = 2(−c + 4) + (−c + 2) + (−2 + 1) = 9 − 3c",
     "A1 c ≠ 3"
    ]
   },
   "10(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Minors/cofactors with at least four correct (PI by transpose; condone overall sign errors)",
     "M1 At least seven correct",
     "A1 All correct: cofactors (−c + 4, c − 2, −1; c + 2, 2c − 1, −5; 3, 3, −3)",
     "A1 M⁻¹ = (1/(9 − 3c))(−c + 4, c + 2, 3; c − 2, 2c − 1, 3; −1, −5, −3)"
    ]
   },
   "10(b)(iii)": {
    "type": "points",
    "points": [
     "B1F M⁻¹ with c = 4: −(1/3)(0 6 3; 2 7 3; −1 −5 −3), need not be simplified",
     "M1 Forms M⁻¹(−3, −6, 13)ᵀ (condone in terms of c)",
     "R1 x = −1, y = 3, z = 2"
    ],
    "guidance": "Accept (x, y, z)ᵀ = (−1, 3, 2)ᵀ but not r = (−1, 3, 2)ᵀ. No working or a method not using M⁻¹v scores 0."
   },
   "11(a)(i)": {
    "type": "points",
    "points": [
     "M1 One factor of f(x)",
     "A1 f(x) = (x − 5)(2x + 3)²"
    ]
   },
   "11(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Deduces x < 5",
     "A1 x < −3/2 or −3/2 < x < 5"
    ]
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1 ±5.5 or ±12 (ft 7 + their critical values)",
     "A1F 5.5 and 12",
     "A1 x = 11/2 or x ≥ 12"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "M1 tanh 2x = 2sinh x cosh x/(cosh²x + sinh²x)",
     "R1 Divides through by cosh²x to reach 2tanh x/(1 + tanh²x)"
    ]
   },
   "12(b)(i)": {
    "type": "points",
    "points": [
     "B1 0 < f(x) < 1"
    ]
   },
   "12(b)(ii)": {
    "type": "points",
    "points": [
     "M1 From the range, 1 < 1 + tanh²x < 2",
     "M1 So 2/(1 + tanh²x) > 1",
     "R1 Reasoned conclusion: 2tanh x/(1 + tanh²x) > tanh x, so tanh 2x > tanh x"
    ],
    "guidance": "Working backwards from the result to the range of tanh x scores 0/3."
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Uses range of cos θ: r least at cos θ = 1, greatest at cos θ = −1 (or k = 2)",
     "R1 ½ ≤ r ≤ 2"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "M1 Uses x = r cos θ: 5r = 4 − 3x",
     "M1 Uses r² = x² + y²",
     "M1 Removes the root and makes ky² the subject in x and y only: 25(x² + y²) = (4 − 3x)²",
     "A1 y² = (16 − 24x − 16x²)/25 (ISW)"
    ]
   },
   "14(c)": {
    "type": "points",
    "points": [
     "M1 Completes the square in x: y² = −(16/25)(x² + 3x/2 − 1)",
     "M1 Rearranges to y² + (16/25)(x + ¾)² = 1",
     "M1 Deduces a horizontal translation (PI by (p, 0)ᵀ)",
     "A1 Translation by (−¾, 0)ᵀ as the only transformation"
    ]
   },
   "16(a)": {
    "type": "points",
    "points": [
     "M1 Suitable method: parts (u = ln t) or substitution u = ln t / inspection",
     "A1 2∫(1/t) ln t dt = (ln t)², or ∫u du = u²/2",
     "M1 Substitutes limits and uses log laws in terms of ln 2: ½[(2 ln 2)² − (−ln 2)²]",
     "R1 Rigorous argument to (3/2)(ln 2)², so a = 3/2"
    ],
    "guidance": "No method shown scores 0/4."
   },
   "16(b)": {
    "type": "points",
    "points": [
     "B1 (dx/dt)² + (dy/dt)² = t² + 2 + 1/t² = (t + 1/t)²",
     "M1 Substitutes into S = 2π∫y√(…) dt",
     "A1 Integrand expanded: ½t³ + ½t − t ln t − (1/t) ln t",
     "M1 Integration by parts for k∫t ln t dt",
     "A1 ∫t ln t dt = ½t² ln t − ¼t²",
     "M1 Substitutes limits into at⁴ + bt² + ct² ln t and uses (a)",
     "R1 S = π(5103/64 − (129/4) ln 2 − 3(ln 2)²)"
    ]
   }
  }
 }
 ,
 "fmath-aqa-7367-2023-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "",
    "parts": [
     {
      "code": "1",
      "prompt": "If y = sin x + sinh x, find d²y/dx² + y.\nOptions: 2sin x   −2sin x   2sinh x   −2sinh x",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "",
    "parts": [
     {
      "code": "2",
      "prompt": "Which expression is not equal to zero?\nOptions: lim_{x→∞} (x²e^(−x))   lim_{x→0} (x⁵ ln x)   lim_{x→∞} (eˣ/x⁵)   lim_{x→0} (x³eˣ)",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A = |1 1 1; 2 0 2; 3 2 1| (a determinant).",
    "parts": [
     {
      "code": "3",
      "prompt": "Which determinant does not equal A?\nOptions: A   3 1 3; 2 0 2; 3 2 1   B   1 2 3; 1 0 2; 1 2 1   C   2 2 2; 1 0 1; 3 2 1   D   1 1 1; 3 2 1; 2 0 2",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "f(x) = cosh⁻¹(x − 3).",
    "parts": [
     {
      "code": "4",
      "prompt": "Choose the largest possible domain of f.\nOptions: {x : x ≥ 4}   {x : x ≥ 3}   {x : x ≥ 1}   {x : x ≥ 0}",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Problem: curve C₁ is x²/16 − y²/9 = 1; M = (0 1; 1 0) maps C₁ onto C₂; find the asymptotes of C₂. Josh says you must transform C₁ first and then find the asymptotes of C₂. Zoe says finding the asymptotes of C₁ and then transforming them gives the same result.",
    "parts": [
     {
      "code": "5",
      "prompt": "Show that Zoe is right.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Write −5 − 5i as re^(iθ), −π < θ ≤ π.",
      "marks": 2
     },
     {
      "code": "6(b)",
      "prompt": "−5 − 5i is one vertex of an equilateral triangle centred at the origin. Find the other two vertices as re^(iθ), −π < θ ≤ π.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "",
    "parts": [
     {
      "code": "7",
      "prompt": "Show that Σ_{r=11}^{n+1} r³ = ¼(n² + an + b)(n² + an + c), finding the integers a, b and c.",
      "marks": 3
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A is a non-singular 2 × 2 matrix with transpose Aᵀ.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Using (AB)ᵀ = BᵀAᵀ, show that (A⁻¹)ᵀ = (Aᵀ)⁻¹.",
      "marks": 3
     },
     {
      "code": "8(b)(i)",
      "prompt": "A = (4 5; −1 k), k a real constant. Find (A⁻¹)ᵀ in terms of k.",
      "marks": 2
     },
     {
      "code": "8(b)(ii)",
      "prompt": "State the restriction on k.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "z = (1 + i)/(1 − ki), k real.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find Re(z) and Im(z) in terms of k.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "With k = √3, use (a) to show that cos(7π/12) = (√2 − √6)/4.",
      "marks": 5
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Region R in the Argand diagram: |z + 2i| ≤ 3 and −π/6 ≤ arg(z) ≤ π/2.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Sketch R on an Argand diagram.",
      "marks": 3
     },
     {
      "code": "10(b)",
      "prompt": "Find the exact maximum value of |z| in R.",
      "marks": 5
     }
    ]
   },
   {
    "number": 11,
    "scenario": "Line l₁ passes through A(6, 2, 7) and B(4, −3, 7). Line l₂: r = (8, 9, c)ᵀ + μ(1, 1, 2)ᵀ, c constant.",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Find a Cartesian equation of l₁.",
      "marks": 2
     },
     {
      "code": "11(b)(i)",
      "prompt": "Explain why l₁ and l₂ are not perpendicular.",
      "marks": 2
     },
     {
      "code": "11(b)(ii)",
      "prompt": "l₁ and l₂ lie in the same plane. Find c.",
      "marks": 5
     }
    ]
   },
   {
    "number": 12,
    "scenario": "f(n) = 3^(3n+1) + 2^(3n+4), n ∈ ℤ⁺.",
    "parts": [
     {
      "code": "12",
      "prompt": "Prove by induction that f(n) is divisible by 19 for n ≥ 1.",
      "marks": 6
     }
    ]
   },
   {
    "number": 13,
    "scenario": "z² − 5z + 8 = 0 has roots α and β.",
    "parts": [
     {
      "code": "13(a)",
      "prompt": "Write down α + β and αβ.",
      "marks": 2
     },
     {
      "code": "13(b)",
      "prompt": "Without finding α or β, show that α⁴ + β⁴ = −47.",
      "marks": 4
     },
     {
      "code": "13(c)",
      "prompt": "Find a quadratic equation with integer coefficients whose roots are α³ + β and β³ + α.",
      "marks": 5
     }
    ]
   },
   {
    "number": 14,
    "scenario": "f(x) = 1/(4x² + 16x + 19), x ∈ ℝ.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Without calculus, show that y = f(x) has a stationary point at (−2, ⅓).",
      "marks": 3
     },
     {
      "code": "14(b)",
      "prompt": "Show that ∫_{−2}^{−1/2} f(x) dx = π√3/18.",
      "marks": 5
     },
     {
      "code": "14(c)",
      "prompt": "Find ∫_{−2}^{∞} f(x) dx, fully justifying your answer.",
      "marks": 2
     }
    ]
   },
   {
    "number": 15,
    "scenario": "",
    "parts": [
     {
      "code": "15(a)",
      "prompt": "With z = cos θ + i sin θ, use de Moivre's theorem to show zⁿ − z⁻ⁿ = 2i sin nθ.",
      "marks": 2
     },
     {
      "code": "15(b)",
      "prompt": "S = sin θ + sin 3θ + … + sin(2n − 1)θ. Use (a) to write S = (1/2i)(G₁) − (1/2i)(G₂) where G₁ and G₂ are geometric series.",
      "marks": 3
     },
     {
      "code": "15(c)",
      "prompt": "Hence show that S = sin²(nθ)/sin θ.",
      "marks": 5
     }
    ]
   },
   {
    "number": 16,
    "scenario": "A bungee jumper of mass m kg on an elastic rope falls vertically from the fixed point. t seconds after the rope becomes taut, its extension is x m and the speed is v m s⁻¹. Model: forces are weight, tension kx N and air resistance Rv N, with k, R constants and 4km > R².",
    "parts": [
     {
      "code": "16(a)(i)",
      "prompt": "Show that the model gives x = e^(−Rt/2m)(A cos((√(4km − R²)/2m)t) + B sin((√(4km − R²)/2m)t)) + mg/k, with A and B constants (no need to find them).",
      "marks": 6
     },
     {
      "code": "16(a)(ii)",
      "prompt": "Given k = 16, R = 20, m = 62.5, g = 9.8 m s⁻², and speed 14 m s⁻¹ when the rope becomes taut, show that A = −38 and B = 16 to the nearest integer.",
      "marks": 6
     },
     {
      "code": "16(b)",
      "prompt": "A simpler model takes air resistance as zero, with k, m, g unchanged. Find x in terms of t, giving all constants to 2 significant figures.",
      "marks": 4
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 C: 2sinh x"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 C: lim_{x→∞} (eˣ/x⁵)"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 D: |1 1 1; 3 2 1; 2 0 2|"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "B1 A: {x : x ≥ 4}"
    ]
   },
   "5": {
    "type": "points",
    "points": [
     "B1 Asymptotes of C₁: y = ±(3/4)x",
     "B1 C₂ (reflection in y = x): y²/16 − x²/9 = 1",
     "B1 Asymptotes of C₂: y = ±(4/3)x",
     "M1 Finds the asymptotes of C₂ by both methods",
     "R1 Both give y = ±(4/3)x, so Zoe is correct"
    ]
   },
   "7": {
    "type": "points",
    "points": [
     "M1 Writes the sum as Σ_{1}^{n+1} r³ − Σ_{1}^{10} r³",
     "A1 ¼(n + 1)²(n + 2)² − ¼(10)²(11)², unsimplified",
     "R1 ¼(n² + 3n + 112)(n² + 3n − 108): a = 3, b = 112, c = −108"
    ]
   },
   "12": {
    "type": "points",
    "points": [
     "B1 n = 1: f(1) = 3⁴ + 2⁷ = 209 = 11 × 19",
     "M1 Assumes f(k) divisible by 19, e.g. f(k) = 19m",
     "M1 Writes f(k + 1) = 3^(3k+4) + 2^(3k+7) in terms of k",
     "M1 Writes f(k + 1) (or f(k + 1) − f(k)) as a(3^(3k+1)) + b(2^(3k+4)), e.g. 27(3^(3k+1)) + 8(2^(3k+4))",
     "R1 Deduces f(k + 1) = 19(3^(3k+1)) + 8f(k) = 19(3^(3k+1) + 8m), divisible by 19",
     "R1 Full induction conclusion: true for n = 1, true for k ⇒ true for k + 1, so true for all n ≥ 1"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 Correct modulus 5√2 (allow √50) or argument −3π/4",
     "B1 5√2e^(−3πi/4)"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 All moduli equal",
     "M1 Adds a multiple of 2π/3 to the argument from (a)",
     "A1 5√2e^(−πi/12) and 5√2e^(7πi/12) (allow √50)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Uses (AB)ᵀ = BᵀAᵀ in a statement with A⁻¹, e.g. Aᵀ(A⁻¹)ᵀ = (A⁻¹A)ᵀ (A⁻ᵀ notation not accepted)",
     "M1 Uses Iᵀ = I (PI)",
     "R1 Reasoned conclusion (Aᵀ)⁻¹ = (A⁻¹)ᵀ"
    ]
   },
   "8(b)(i)": {
    "type": "points",
    "points": [
     "M1 Finds A⁻¹ = (1/(4k + 5))(k −5; 1 4) or Aᵀ",
     "A1 (A⁻¹)ᵀ = (1/(4k + 5))(k 1; −5 4) (factor outside allowed)"
    ]
   },
   "8(b)(ii)": {
    "type": "points",
    "points": [
     "B1F k ≠ −5/4 (ft their det A)"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Multiplies top and bottom by 1 + ki",
     "A1 Re(z) = (1 − k)/(1 + k²), Im(z) = (1 + k)/(1 + k²) (condone i included)"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Substitutes k = √3 and finds |z|",
     "A1 |z| = |1 + i|/|1 − √3i| = √2/2",
     "B1 arg z = π/4 − (−π/3) = 7π/12 by a correct method",
     "M1 Forms |z|cos(arg z) = Re(z) = (1 − √3)/4",
     "R1 cos(7π/12) = √2(1 − √3)/4 = (√2 − √6)/4"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 Circle centre −2i radius 3, crossing the imaginary axis at 1",
     "B1 Half-line from O at angle −π/6 (between −π/4 and 0)",
     "B1 Correct region shaded or labelled"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Max |z| where the half-line arg z = −π/6 meets the circle (PI)",
     "M1 Method for a quadratic in x, y or |z|, e.g. x = −√3y with x² + (y + 2)² = 9",
     "A1 Correct quadratic, e.g. 4y² + 4y − 5 = 0",
     "M1 Expression for the maximum |z|, e.g. |z| = 2|y| with y = −½ − √6/2",
     "A1 1 + √6 (ACF, e.g. √(7 + 2√6))"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1 Direction of l₁, e.g. (2, 5, 0)ᵀ (PI)",
     "A1 (x − 6)/2 = (y − 2)/5, z = 7"
    ]
   },
   "11(b)(i)": {
    "type": "points",
    "points": [
     "B1 Scalar product of directions: 2 × 1 + 5 × 1 + 0 = 7",
     "E1 Non-zero, so the lines are not perpendicular"
    ]
   },
   "11(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Normal to both lines, e.g. (1, 1, 2) × (2, 5, 0) = (−10, 4, 3), or a method for the intersection point",
     "M1 Scalar product with a point on l₁ for the constant (PI), or two simultaneous equations in λ and μ only",
     "A1 Plane r·(−10, 4, 3)ᵀ = −31, or correct simultaneous equations",
     "M1 Forms and solves an equation in c: −80 + 36 + 3c = −31",
     "A1 c = 13/3"
    ]
   },
   "13(a)": {
    "type": "points",
    "points": [
     "B1 α + β = 5",
     "B1 αβ = 8"
    ]
   },
   "13(b)": {
    "type": "points",
    "points": [
     "M1 α² + β² = (α + β)² − 2αβ",
     "A1 α² + β² = 9",
     "M1 α⁴ + β⁴ = (α² + β²)² − 2α²β²",
     "R1 9² − 2 × 8² = −47 (cso)"
    ]
   },
   "13(c)": {
    "type": "points",
    "points": [
     "M1 Sum of new roots via sums/products: (α + β)³ − 3αβ(α + β) + α + β",
     "A1 Sum = 10",
     "M1 Product = α³β³ + α⁴ + β⁴ + αβ",
     "A1 Product = 8³ − 47 + 8 = 473",
     "A1 z² − 10z + 473 = 0 (any variable)"
    ]
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Completes the square: f(x) = 1/(4((x + 2)² + ¾)), or sets f(x) = k and forms a quadratic in x",
     "E1 Stationary point at x = −2 (denominator least), or discriminant = 0 solved for k",
     "R1 Reasoned argument without calculus: y = 1/(4 × ¾) = ⅓, giving (−2, ⅓)"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "M1 Denominator in completed-square form: ¼∫1/((x + 2)² + ¾) dx",
     "M1 Uses inverse tan for 1/((x + k)² + a²), or a correct substitution",
     "A1 A tan⁻¹(2(x + 2)/√3), with A = 1/(2√3)",
     "M1 Substitutes the upper limit correctly",
     "R1 (1/(2√3))(π/3 − 0) = π√3/18; substitution of −2 must be seen"
    ]
   },
   "14(c)": {
    "type": "points",
    "points": [
     "E1 Replaces ∞ by N and considers the limit as N → ∞",
     "B1 π√3/12 (ACF)"
    ]
   },
   "15(a)": {
    "type": "points",
    "points": [
     "M1 Uses de Moivre",
     "R1 z⁻ⁿ = cos(−nθ) + i sin(−nθ) = cos nθ − i sin nθ, so zⁿ − z⁻ⁿ = 2i sin nθ; must see cos(−nθ) + i sin(−nθ) and zⁿ − z⁻ⁿ"
    ]
   },
   "15(b)": {
    "type": "points",
    "points": [
     "M1 Writes at least three terms of S in z using (a)",
     "M1 S or 2iS as the difference of two series",
     "R1 S = (1/2i)(z + z³ + … + z^(2n−1)) − (1/2i)(z⁻¹ + z⁻³ + … + z^(−(2n−1)))"
    ]
   },
   "15(c)": {
    "type": "points",
    "points": [
     "M1 Geometric series sums, e.g. z(1 − z^(2n))/(1 − z²) and z⁻¹(1 − z^(−2n))/(1 − z⁻²)",
     "A1 Both sums fully correct",
     "B1 Gets z − z⁻¹ in a denominator",
     "B1 Gets z^(2n) + z^(−2n) − 2 in the numerator of a single fraction",
     "R1 Reasoned argument via (zⁿ − z⁻ⁿ)² = (2i sin nθ)² to S = sin²(nθ)/sin θ"
    ]
   },
   "16(a)(i)": {
    "type": "points",
    "points": [
     "M1 Equation of motion with at least three correct terms (a and/or v accepted)",
     "A1 mẍ + Rẋ + kx = mg",
     "M1 Solves auxiliary equation mλ² + Rλ + k = 0: λ = −R/2m ± i√(4km − R²)/2m",
     "A1 CF consistent with roots, choice of form justified",
     "B1 PI x = mg/k by a correct method",
     "R1 Fully reasoned result (condone bracket slips)"
    ]
   },
   "16(a)(ii)": {
    "type": "points",
    "points": [
     "B1 x = e^(−0.16t)(A cos 0.48t + B sin 0.48t) + 38.3",
     "M1 Uses t = 0, x = 0",
     "A1 A = −38.3 (or better)",
     "M1 Product rule to differentiate x",
     "M1 Uses t = 0, v = 14: 14 = −0.16(−38.3) + 0.48B",
     "A1 B = 16.4, so A = −38 and B = 16 to the nearest integer"
    ]
   },
   "16(b)": {
    "type": "points",
    "points": [
     "B1 Sets R = 0 in (a)(i), or solves the equation of motion with R = 0: x = A cos(0.506t) + B sin(0.506t) + 38.3",
     "M1 Differentiates the displacement",
     "M1 Uses t = 0, x = 0 and v = 14: A = −38.3, B = 14/0.506 = 27.7",
     "A1 x = −38cos(0.51t) + 28sin(0.51t) + 38 (2 sf or better)"
    ]
   }
  }
 },
 "fmath-aqa-7367-2023-p3d": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "A simple connected graph G (diagram on the question paper) has 4 vertices: a top vertex joined to three collinear bottom vertices, which are joined in a path left–middle–right (5 edges). G has n faces.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find n.\nOptions: 2   3   4   5",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Zero-sum game, pay-offs for Jonathan (rows J₁–J₄) against Hoshi (columns H₁, H₂, H₃): J₁: −2, 3, 2; J₂: 3, 2, 0; J₃: 4, −1, 3; J₄: 3, 1, 0. There is no stable solution.",
    "parts": [
     {
      "code": "2",
      "prompt": "Which strategy should Jonathan never play?\nOptions: J₁   J₂   J₃   J₄",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A maximising LP problem is drawn on a graph (on the question paper). Feasible region has vertices A(0, 0), B(0, 175), C(75, 125), D(150, 0); boundary lines run from (0, 175) through C to about (250, 8), and from (0, 250) through C to (150, 0). The objective line runs from (0, 50) to (125, 0).",
    "parts": [
     {
      "code": "3",
      "prompt": "Which vertex is optimal?\nOptions: A   B   C   D",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Water-pipe network with source A; water leaves through treatment nodes H, I and J. Arcs (lower, upper capacity in gallons/s): A→B (5, 24), A→E (6, 12), A→C (7, 23), B→D (0, 14), B→E (3, 9), D→E (6, 9), D→H (2, 21), D→G (5, 18), C→E (4, 15), C→F (3, 28), E→G (1, 30), F→E (3, 10), F→G (7, 15), F→I (8, 22), G→H (7, 11), G→J (8, 17), G→I (2, 15).",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "All water must pass a new final check facility before returning to the river. Explain, using network terms, how to add it to the network.",
      "marks": 2
     },
     {
      "code": "4(b)",
      "prompt": "Find the value of the cut {A, B, C, D, E} | {F, G, H, I, J}.",
      "marks": 1
     },
     {
      "code": "4(c)",
      "prompt": "Tim correctly finds the cut {A, B, C, D, E, F} | {G, H, I, J} has value 106 and claims the maximum flow is 106. Comment on his claim.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Minimise Q = −4x − 3y subject to x + y ≤ 520, 2x − 3y ≤ 570, x ≥ 0, y ≥ 0. The student introduces P = 4x + 3y and slack variables r and s.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "State one further change needed before the simplex algorithm can be used.",
      "marks": 1
     },
     {
      "code": "5(b)(i)",
      "prompt": "Write the initial simplex tableau (columns P, x, y, r, s, value).",
      "marks": 2
     },
     {
      "code": "5(b)(ii)",
      "prompt": "Carry out one iteration of the simplex algorithm.",
      "marks": 2
     },
     {
      "code": "5(c)(i)",
      "prompt": "After a further iteration the tableau is: P row (1, 0, 0, 18/5, 1/5 | 1986); y row (0, 0, 1, 2/5, −1/5 | 94); x row (0, 1, 0, 3/5, 1/5 | 426). Explain how the student knows this tableau gives the optimal solution.",
      "marks": 1
     },
     {
      "code": "5(c)(ii)",
      "prompt": "Find the optimal solution of the original problem.",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Roads on an estate (lengths in m): AB 250, BC 400, CD 300, AE 150, EF 300 and a second road EF 300, BF 250, BG 500, CG 250, DH 350, FG 400, GH 325, EI 350, FI 350, FJ 300, GK 300, GL 400, HL 150, IJ 350, JK 200, KL 400, IN 250, IO 350, JO 300, OM 300, MP 300, KP 300, LQ 250, NO 250, PQ 300. Total 9175 m. A gritter must travel every road at least once, starting and finishing at the same junction.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "The gritter starts at 7:00 pm and averages 5 m/s. Find, to the nearest minute, the earliest time it can finish. Justify fully.",
      "marks": 6
     },
     {
      "code": "6(b)",
      "prompt": "Explain how relaxing the same start/finish requirement could reduce the time taken.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Activity network (weeks): A 12, B 17, C 16 start at time 0. A and B precede D (11); B and C precede E (12); D and E each precede F (7) and G (5); F and G each precede H (6), I (8) and J (9); H, I and J precede K (4).",
    "parts": [
     {
      "code": "7(a)(i)",
      "prompt": "Find the earliest start and latest finish time of each activity.",
      "marks": 2
     },
     {
      "code": "7(a)(ii)",
      "prompt": "State the critical path.",
      "marks": 1
     },
     {
      "code": "7(b)",
      "prompt": "Draw a cascade (Gantt) chart with every activity starting as early as possible.",
      "marks": 3
     },
     {
      "code": "7(c)",
      "prompt": "Activity F is removed. Explain the effect on the minimum completion time.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Graph G (diagram on the question paper) has 8 vertices P₁…P₈ and 14 edges: P₁P₂, P₁P₃, P₂P₄, P₃P₄, P₃P₆, P₃P₈, P₄P₅, P₄P₇, P₅P₆, P₅P₇, P₅P₈, P₆P₇, P₆P₈, P₇P₈.",
    "parts": [
     {
      "code": "8(a)(i)",
      "prompt": "State, with a reason, whether G is simple.",
      "marks": 2
     },
     {
      "code": "8(a)(ii)",
      "prompt": "Explain why G is Eulerian.",
      "marks": 2
     },
     {
      "code": "8(b)",
      "prompt": "Graph H has 8 vertices with degrees 2, 2, 4, 4, 4, 4, 4, 4. Comment on whether H is isomorphic to G.",
      "marks": 2
     },
     {
      "code": "8(c)",
      "prompt": "Euler's formula v − e + f = 2 applies only under certain conditions. Prove that G does not meet them.",
      "marks": 3
     }
    ]
   },
   {
    "number": 9,
    "scenario": "(C, +₄) is the group {0, 1, 2, 3} under addition mod 4. (V, ⊗) is the group {(1, 1), (1, −1), (−1, 1), (−1, −1)} with (a, b) ⊗ (c, d) = (a × c, b × d).",
    "parts": [
     {
      "code": "9(a)(i)",
      "prompt": "Show that C is cyclic.",
      "marks": 2
     },
     {
      "code": "9(a)(ii)",
      "prompt": "State the symmetry group of a regular polygon that is isomorphic to C.",
      "marks": 1
     },
     {
      "code": "9(b)(i)",
      "prompt": "Find, with full justification, the inverse of (−1, 1) in V.",
      "marks": 2
     },
     {
      "code": "9(b)(ii)",
      "prompt": "Decide, with a reason, whether C ≅ V.",
      "marks": 2
     },
     {
      "code": "9(c)",
      "prompt": "G has order 16. Rachel says that, since 16 has factors 1, 2, 4, 8, 16, Lagrange's theorem means G has exactly 5 subgroups. Comment on her claim.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 3"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 J₄"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 B"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "E1 New facility joined to H, I and J (the sinks)",
     "B1 Identifies the new facility as a supersink"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 94 gallons per second (units condoned)"
    ]
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 Compares 106 with their cut from (b), or finds another cut below 106",
     "B1F So Tim is wrong: max flow equals the minimum cut, which is at most 94"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 P must be maximised"
    ]
   },
   "5(b)(i)": {
    "type": "points",
    "points": [
     "M1 At least one correct row",
     "A1 Rows: (1, −4, −3, 0, 0 | 0), (0, 1, 1, 1, 0 | 520), (0, 2, −3, 0, 1 | 570)"
    ]
   },
   "5(b)(ii)": {
    "type": "points",
    "points": [
     "M1 At least one correct non-pivot row",
     "A1 Rows: (1, 0, −9, 0, 2 | 1140), (0, 0, 5/2, 1, −1/2 | 235), (0, 1, −3/2, 0, 1/2 | 285)"
    ]
   },
   "5(c)(i)": {
    "type": "points",
    "points": [
     "B1 No negative entries in the objective row"
    ]
   },
   "5(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Reads max P = 1986, or x = 426, y = 94",
     "A1 Minimum Q = −1986"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Route inspection; odd nodes C, H, I, P",
     "M1 At least one correct pairing total (CH 575, IP 850, CI 1000, HP 700, CP 850, HI 1075)",
     "A1 All three pairings: CH+IP 1425, CI+HP 1700, CP+HI 1925",
     "M1 Minimum distance 9175 + 1425 = 10 600 m",
     "M1 Time 10 600 ÷ (5 × 60) = 35.3 minutes",
     "A1 7:36 pm (7:35 pm allowed; must say pm)"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "E1 Start at one odd node and finish at another (make the route semi-Eulerian)",
     "E1 So less distance repeated, hence less time"
    ]
   },
   "7(a)(i)": {
    "type": "points",
    "points": [
     "B1 Earliest starts: A, B, C 0; D, E 17; F, G 29; H, I, J 36; K 45",
     "B1 Latest finishes: A 18, B 17, C 17, D 29, E 29, F 36, G 36, H 45, I 45, J 45, K 49"
    ]
   },
   "7(a)(ii)": {
    "type": "points",
    "points": [
     "B1 B E F J K"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 All 11 activities shown and labelled",
     "A1 The 5 critical activities correct",
     "A1 Fully correct with all floats (A float 6, C 1, D 1, G 2, H 3, I 1)"
    ],
    "guidance": "A float of 5 for A is condoned if A's latest finish was given as 17 in (a)(i)."
   },
   "7(c)": {
    "type": "points",
    "points": [
     "B1 G becomes critical, or H, I, J can start at 34",
     "B1 Minimum completion time falls by 2 weeks, to 47"
    ]
   },
   "8(a)(i)": {
    "type": "points",
    "points": [
     "M1 No multiple edges, or no loops",
     "A1 No multiple edges and no loops, so G is simple"
    ]
   },
   "8(a)(ii)": {
    "type": "points",
    "points": [
     "M1 G is connected, or every vertex has even degree",
     "R1 Both conditions met, so Eulerian"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 G has the same degree sequence 2, 2, 4, 4, 4, 4, 4, 4",
     "A1 So H may be isomorphic to G, but this is not certain"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "B1 Formula needs a connected planar graph",
     "M1 G contains a subgraph isomorphic to K₃,₃",
     "R1 By Kuratowski's theorem G is non-planar, so the formula does not apply"
    ]
   },
   "9(a)(i)": {
    "type": "points",
    "points": [
     "M1 Seeks a generator of C",
     "A1 1 (or 3) generates all elements, so C is cyclic"
    ]
   },
   "9(a)(ii)": {
    "type": "points",
    "points": [
     "B1 Rotations of a square"
    ]
   },
   "9(b)(i)": {
    "type": "points",
    "points": [
     "M1 (−1, 1) ⊗ (a, b) = (1, 1), i.e. (−a, b) = (1, 1)",
     "A1 Inverse is (−1, 1)"
    ]
   },
   "9(b)(ii)": {
    "type": "points",
    "points": [
     "M1 V is not cyclic (every element self-inverse, no generator)",
     "A1 C is cyclic and V is not, so C and V are not isomorphic"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 There may be more than one subgroup for a given factor (e.g. several of order 2)",
     "A1 Not enough information: cannot tell whether exactly 5 subgroups, so the claim cannot be confirmed"
    ]
   }
  }
 },
 "fmath-aqa-7367-2023-p3m": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Dimensional analysis.",
    "parts": [
     {
      "code": "1",
      "prompt": "Give the dimensions of power.\nOptions: ML²T⁻³   ML³T⁻³   ML³T⁻²   ML²T⁻²",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "A force (3i + 4j) N acts at the point (0, 2); i and j are along the x- and y-axes.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the magnitude of the moment of the force about the origin.\nOptions: 6 N m   8 N m   10 N m   14 N m",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A uniform disc (mass 6 kg, diameter 8 cm) is fixed on a uniform rectangular lamina ABCD (mass 4 kg, AB = 20 cm long, AD = 8 cm wide). The disc touches sides AB, AD and CD (diagram on the question paper).",
    "parts": [
     {
      "code": "3",
      "prompt": "Find the distance of the composite body's centre of mass from AD.\nOptions: 4 cm   5.6 cm   6.4 cm   8.8 cm",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "A 1400 kg car travels at a constant 12 m s⁻¹ round a horizontal circular bend of radius 60 m.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the magnitude of the resultant force on the car.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "The region in the first quadrant bounded by y = 4 − x² and the coordinate axes is rotated 360° about the x-axis to form a uniform solid.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that the centre of mass is 5/8 from the circular face.",
      "marks": 5
     },
     {
      "code": "5(b)",
      "prompt": "The solid hangs in equilibrium from a point on the rim of its circular face. Find, to the nearest degree, the angle between the circular face and the horizontal.",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Use g = 10 m s⁻². A 0.8 kg sphere hangs on a string of length 2 m from fixed point O. It is released from rest with the string taut at 30° to the vertical.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find the sphere's speed when it is directly below O.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "State an assumption you made about the string.",
      "marks": 1
     },
     {
      "code": "6(c)",
      "prompt": "With the string at angle θ to the downward vertical, find the tension in terms of θ and show it is greatest when the sphere is directly below O.",
      "marks": 6
     },
     {
      "code": "6(d)",
      "prompt": "An experiment measures the tension directly below O as 9.5 N. Explain, with calculation, why this is reasonable.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "On a smooth horizontal surface, particles A (2 kg) and B (3 kg) approach a marked straight line from opposite sides. A moves at 4 m s⁻¹ at 30° to the line; B moves at 6 m s⁻¹ at 45° to the line; both head in the same direction along the line and meet at the same point on it (diagram on the question paper). They collide on the line and coalesce.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that the impulse on A has magnitude 7.55 N s to 3 s.f.",
      "marks": 8
     },
     {
      "code": "7(b)",
      "prompt": "State, with a reason, the magnitude of the impulse on B.",
      "marks": 2
     },
     {
      "code": "7(c)",
      "prompt": "Find, to the nearest degree, the angle between the line and the impulse on B.",
      "marks": 2
     },
     {
      "code": "7(d)",
      "prompt": "One particle crosses the line during the collision. State which, with a reason.",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Use g = 9.8 m s⁻². A 10 kg block rests on a horizontal surface 1 m from fixed point O, attached to O by an elastic string (λ = 40 N, natural length 2 m). μ = 0.6. A 100 N force at 30° above the horizontal, directed away from O, pulls the block along a line perpendicular to a vertical wall beyond it.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that the block has moved 3.9 m (2 s.f.) when the forces on it are in equilibrium.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "State one limitation of your model.",
      "marks": 1
     },
     {
      "code": "8(c)",
      "prompt": "Find the block's maximum speed.",
      "marks": 4
     },
     {
      "code": "8(d)",
      "prompt": "The wall is 8.7 m from O. Decide, with calculations, whether the block reaches it.",
      "marks": 4
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 ML²T⁻³"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 6 N m"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 6.4 cm"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "M1 Acceleration v²/r = 12²/60",
     "A1 F = 1400 × 12²/60 = 3360 N (accept 3400)"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 Limits 0 to 2",
     "B1 Volume/mass: ρπ∫₀² (4 − x²)² dx = 256πρ/15",
     "M1 Moment integral ρπ∫₀² x(4 − x²)² dx set up",
     "A1 Integral gives 32/3 (×πρ)",
     "R1 x̄ = (32/3) ÷ (256/15) = 480/768 = 5/8, with ρ and π shown"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 tan θ using two of 4, 5/8 and 4.05 (e.g. tan θ = 32/5)",
     "A1 θ = 81°"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Energy equation with GPE and KE",
     "A1 0.8 × 10 × 2(1 − cos 30°) = ½ × 0.8v²",
     "A1 v = √(40(1 − cos 30°)) = 2.31, i.e. 2 m s⁻¹ to 1 s.f."
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1 String is inextensible (or light)"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "M1 Energy equation in cos θ: v² = 2gr(cos θ − cos 30°) = 40cos θ − 20√3",
     "M1 Radial equation of motion with three terms",
     "A1 T − mg cos θ = mv²/r",
     "M1 Eliminates v",
     "B1 Maximum when cos θ = 1, i.e. θ = 0",
     "R1 T = 24cos θ − 8√3, greatest when sphere is directly below O"
    ]
   },
   "6(d)": {
    "type": "points",
    "points": [
     "B1F Maximum tension 24 − 8√3 = 10.14 N",
     "E1 Air resistance lowers speed (or g < 10), so a measured value slightly below 10.14 is reasonable"
    ],
    "guidance": "E1 only if a value above 9.5 N was found."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Velocities as vectors/components",
     "A1 u_A = (4cos 30°, 4sin 30°), u_B = (6cos 45°, −6sin 45°)",
     "M1 Conservation of momentum in vector form (or two component equations)",
     "A1 2u_A + 3u_B = 5v",
     "A1 v = ⅕(8cos 30° + 18cos 45°, 8sin 30° − 18sin 45°)",
     "B1 Impulse = change in momentum",
     "M1 I_A = 2v − 2u_A with their values",
     "R1 I_A = (0.934, −7.491), |I_A| = 7.549… = 7.55 N s"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 7.55 N s",
     "E1 Equal in size and opposite in direction to the impulse on A"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 tan α = 7.491/0.934 (= 8.018)",
     "A1 83° (accept 97°)"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "E1 B crosses: its velocity component perpendicular to the line keeps its sign"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 R = 10 × 9.8 − 100 sin 30° = 48",
     "B1 Tension (40/2)(d − 1) by Hooke's law",
     "M1 Equilibrium equation with three terms",
     "R1 100cos 30° = 0.6 × 48 + 20(d − 1), d = 3.890 = 3.9 m"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 Air resistance ignored"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "B1 Maximum speed at equilibrium position (3.89 or extension 2.89)",
     "M1 At least three of four work-energy terms",
     "A1 100cos 30° × 3.89 − 0.6 × 48 × 3.89 − ½ × (40/2) × 2.89² = ½ × 10v²",
     "A1 v = 5.3 m s⁻¹"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 Energy argument with at least two correct terms",
     "A1 100cos 30° x − 0.6 × 48x − ½ × (40/2)(x − 1)² = 0, i.e. 10x² − 77.80x + 10 = 0",
     "A1F x = 7.65, so the block (as a particle) stops 8.65 m from O, 5 cm short of the wall",
     "E1 It may reach the wall only if the block's own length covers the 5 cm gap"
    ]
   }
  }
 },
 "fmath-aqa-7367-2023-p3s": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Discrete random variable A takes values 0, 2, 4 with cumulative distribution function F(a) = P(A ≤ a): F(0) = 0.2, F(2) = 0.6, F(4) = 1.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find P(A = 2).\nOptions: 0   0.4   0.6   0.8",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "The time T days between autumn rain showers in a city is modelled as exponential with mean 1.25.",
    "parts": [
     {
      "code": "2",
      "prompt": "Give the distribution of the number of showers per day.\nOptions: Exponential, mean 0.8   Exponential, mean 1.25   Poisson, mean 0.8   Poisson, mean 1.25",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Tin masses are normal with mean μ g and standard deviation 4.1 g. A sample of 11 tins has mean 401.8 g.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find a 98% confidence interval for μ, to 1 d.p.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "X is normal with unknown mean μ and variance σ². A sample of 8 gives x̄ = 101.5 and unbiased variance estimate s² = 4.8.",
    "parts": [
     {
      "code": "4",
      "prompt": "Test H₀: μ = 100 against H₁: μ ≠ 100 at the 10% significance level.",
      "marks": 5
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Across 11 schools, each student picks one of 11 enrichment activities. The counts by school and activity are analysed with a χ² test for association.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Exactly one expected frequency is below 5. Explain why there are 90 degrees of freedom.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "The test statistic is 124.8. Test, at the 1% level, the claim that school and activity choice are associated.",
      "marks": 5
     },
     {
      "code": "5(c)",
      "prompt": "Values of (O − E)²/E: school 3/activity 1: 0.01; school 8/activity 3: 18.5; school 8/activity 7: 24.2; school 11/activity 7: 49.0. State, with a reason, which group is the strongest source of association.",
      "marks": 1
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Round 1 of a game gives a random real score X between 0 and 10. Round 2 gives score Y from a fair six-sided dice (1–6); X and Y are independent.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find P(X > 4).",
      "marks": 1
     },
     {
      "code": "6(b)(i)",
      "prompt": "Find the mean total score.",
      "marks": 3
     },
     {
      "code": "6(b)(ii)",
      "prompt": "Find the variance of the total score.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Company A's weekly number of toys failing quality checks is modelled as Poisson X with standard deviation 5. After a machine repair, 16 toys fail in the next week.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Test at the 5% level whether the weekly mean number of failures has changed.",
      "marks": 7
     },
     {
      "code": "7(b)",
      "prompt": "State in context what a Type II error would mean here.",
      "marks": 1
     },
     {
      "code": "7(c)",
      "prompt": "Company B's weekly failures are Poisson Y with mean 18, independent of X. Give the distribution of the combined weekly failures.",
      "marks": 1
     },
     {
      "code": "7(d)",
      "prompt": "Give two reasons why a Poisson model might not be valid for the weekly failures.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "X has pdf f(x) = k sin 2x for 0 ≤ x ≤ π/6, and 0 otherwise.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that k = 4.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "Find the cumulative distribution function F(x).",
      "marks": 3
     },
     {
      "code": "8(c)",
      "prompt": "Find the median of X to 3 s.f.",
      "marks": 2
     },
     {
      "code": "8(d)",
      "prompt": "Find E(X) in the form (1/a)(b√3 − π), with a and b integers.",
      "marks": 5
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 0.4"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 Poisson, mean 0.8"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 z = 2.33 (2.32 condoned)",
     "M1 401.8 ± z × 4.1/√11",
     "A1 (398.9, 404.7)"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "B1 Critical value t₇ = 1.895",
     "M1 t = (101.5 − 100)/√(4.8/8)",
     "A1 t = 1.94 (or p-value 0.0468)",
     "R1 Compares 1.94 > 1.895 (or p with 0.05)",
     "E1 Reject H₀"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "E1 Two rows or two columns must be merged",
     "E1 So dof = (11 − 1)(10 − 1) = 90"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1 H₀: no association between school and activity; H₁: association",
     "B1 Critical value 124.116 (or p ≈ 0.009)",
     "R1 124.8 > 124.116",
     "E1F Reject H₀",
     "E1F Sufficient evidence of an association between school and activity chosen"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "B1 School 11, activity 7: largest (O − E)²/E value"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 Rectangular model: P(X > 4) = 0.6"
    ]
   },
   "6(b)(i)": {
    "type": "points",
    "points": [
     "B1 E(X) = 5",
     "M1 Discrete uniform: E(Y) = 3.5",
     "A1F Mean total 8.5"
    ]
   },
   "6(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Correct variance formula used for X or Y",
     "A1 Var(X) = 100/12, Var(Y) = 35/12",
     "A1F Var(X + Y) = 11.25"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 λ = 5² = 25",
     "B1F H₀: λ = 25, H₁: λ ≠ 25",
     "M1 Uses Po(25) for a probability involving 16",
     "A1 P(X ≤ 16) = 0.0377",
     "R1 0.0377 > 0.025 (or 16 not in critical region X ≤ 15)",
     "E1F Do not reject H₀",
     "E1F Insufficient evidence that the mean weekly number of failing toys has changed"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "E1 Concluding the mean weekly number of failing toys has not changed when it has"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "B1F X + Y ~ Po(43)"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "E1 Failures of individual toys may not be independent",
     "E1 Rate may not be constant, e.g. output varies with demand"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 ∫₀^(π/6) k sin 2x dx = 1",
     "A1 Integral −(k/2)cos 2x",
     "M1 Substitutes limits: −(k/2)cos(π/3) + k/2 = 1",
     "R1 k/4 = 1, so k = 4"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 F(x) = ∫₀ˣ 4 sin 2y dy",
     "A1 F(x) = 2 − 2cos 2x for 0 ≤ x ≤ π/6",
     "A1 Full F: 0 for x < 0, 2 − 2cos 2x for 0 ≤ x ≤ π/6, 1 for x > π/6"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 2 − 2cos 2m = 0.5, so cos 2m = 0.75",
     "A1 m = 0.361"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 E(X) = ∫ x f(x) dx = ∫₀^(π/6) 4x sin 2x dx",
     "M1 By parts with u = x",
     "A1 [−2x cos 2x + sin 2x]",
     "M1 Substitutes limits: (−π/6 + √3/2) − 0",
     "R1 E(X) = (1/6)(3√3 − π)"
    ]
   }
  }
 },
 "fmath-aqa-7367-2022-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "A particle's displacement x m from equilibrium at time t s satisfies d²x/dt² = −9x.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find the period of the motion in seconds.\nOptions: π/9   2π/9   π/3   2π/3",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Complex numbers in modulus-argument form.",
    "parts": [
     {
      "code": "2",
      "prompt": "Simplify (cos(6π/13) + i sin(6π/13)) / (cos(2π/13) − i sin(2π/13)).\nOptions: cos(8π/13) + i sin(8π/13)   cos(8π/13) − i sin(8π/13)   cos(4π/13) + i sin(4π/13)   cos(4π/13) − i sin(4π/13)",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "y = sech x.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find dy/dx.\nOptions: sech x tanh x   −sech x tanh x   cosech x coth x   −cosech x coth x",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "v is an eigenvector of N with eigenvalue 4 and of M with eigenvalue 3; NM²v = λv.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find λ.\nOptions: 10   24   36   144",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "z = −3/2 + (√11/2)i is a root of z⁴ − 3z³ − 5z² + kz + 40 = 0, where k is real.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find the other three roots.",
      "marks": 5
     },
     {
      "code": "5(b)",
      "prompt": "For real x, solve x⁴ − 3x³ − 5x² + kx + 40 < 0.",
      "marks": 1
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Inverse hyperbolic functions.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "For |x| < 1, prove that tanh⁻¹x = ½ ln((1 + x)/(1 − x)).",
      "marks": 4
     },
     {
      "code": "6(b)",
      "prompt": "Solve 20 sech²x − 11 tanh x = 16, giving answers in logarithmic form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "M = (1 7 −3; 3 6 k+1; 1 3 2), where k is a constant.",
    "parts": [
     {
      "code": "7(a)(i)",
      "prompt": "Given M is non-singular, find M⁻¹ in terms of k.",
      "marks": 5
     },
     {
      "code": "7(a)(ii)",
      "prompt": "State any restrictions on k.",
      "marks": 1
     },
     {
      "code": "7(b)",
      "prompt": "Using (a)(i), solve x + 7y − 3z = 6, 3x + 6y + 6z = 3, x + 3y + 2z = 1.",
      "marks": 3
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Loci in the Argand diagram; w = x + iy with x > 0.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "arg(w + 2i) = tan⁻¹(½). Find y in terms of x.",
      "marks": 2
     },
     {
      "code": "8(b)",
      "prompt": "z satisfies −π/2 ≤ arg(z + 2i) ≤ tan⁻¹(½) and |z − 2 + 3i| ≤ 2. Sketch the region R of z on an Argand diagram (axes −6 to 6).",
      "marks": 4
     },
     {
      "code": "8(c)(i)",
      "prompt": "z₁ is the point of R with |z| minimum. Find the exact value of |z₁|.",
      "marks": 3
     },
     {
      "code": "8(c)(ii)",
      "prompt": "Express z₁ in the form a + ib.",
      "marks": 2
     }
    ]
   },
   {
    "number": 9,
    "scenario": "C₁ has polar equation r² = 9 sin 2θ for all possible θ. Roberto finds its area as A = ½∫ from −π to π of 9 sin 2θ dθ = [−(9/4)cos 2θ] from −π to π = 0.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Sketch C₁.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "Explain what Roberto has done wrong.",
      "marks": 2
     },
     {
      "code": "9(c)",
      "prompt": "Find the area enclosed by C₁.",
      "marks": 2
     },
     {
      "code": "9(d)",
      "prompt": "P and Q are the distinct points of C₁ where r is maximum, with P above the initial line. Find their polar coordinates.",
      "marks": 2
     },
     {
      "code": "9(e)(i)",
      "prompt": "The transformation T has matrix M = (1 2; 0 1) and maps C₁ onto C₂. T maps P to P′. Find the polar coordinates of P′.",
      "marks": 4
     },
     {
      "code": "9(e)(ii)",
      "prompt": "Find the area enclosed by C₂, fully justifying your answer.",
      "marks": 2
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Lengths in cm. A laser pen runs from A(7, 2, −3) to B(9, −3, −2) and the beam continues in a straight line towards a glass sheet in plane Π₁: 4x + py + 5z = 9, where p is an integer.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "The beam meets Π₁ at an acute angle α with sin α = √15/75. Find p.",
      "marks": 6
     },
     {
      "code": "10(b)",
      "prompt": "A second sheet lies in Π₂: 4x + py + 5z = −5, on the other side of Π₁. Find the distance between the sheets.",
      "marks": 2
     },
     {
      "code": "10(c)",
      "prompt": "A is reflected in Π₁. Find the coordinates of its image.",
      "marks": 4
     }
    ]
   },
   {
    "number": 11,
    "scenario": "Use g = 10 m s⁻². A smooth plane is inclined at 30°. Fixed points A and B are 3.6 m apart on a line of greatest slope, A higher. Particle P, 0.32 kg, is attached to strings from A and B and moves on line AB. AP: natural length 1.4 m, tension 7e_A N. BP: natural length 1 m, tension 9e_B N. P is held 0.2 m below its equilibrium position and released from rest; x m is its displacement towards B from equilibrium at time t s. (Diagram on the question paper.)",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Show that ẍ + 50x = 0, fully justifying your answer.",
      "marks": 5
     },
     {
      "code": "11(b)(i)",
      "prompt": "Repeated in oil with resistance kv N (v the speed), giving critical damping. Show that k = 16√2/5.",
      "marks": 3
     },
     {
      "code": "11(b)(ii)",
      "prompt": "Find x in terms of t, in exact form.",
      "marks": 6
     },
     {
      "code": "11(b)(iii)",
      "prompt": "Find the maximum speed of the particle.",
      "marks": 5
     }
    ]
   },
   {
    "number": 12,
    "scenario": "The solutions of z⁵ = 1 are shown on an Argand diagram as z₁ (on the positive real axis), z₂ and z₃ above the real axis, and z₄ and z₅ below it (z₄ = z₃*, z₅ = z₂*).",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "Solve z⁵ = 1, with z = cos θ + i sin θ and 0 ≤ θ < 2π.",
      "marks": 2
     },
     {
      "code": "12(b)",
      "prompt": "Explain why these points are the vertices of a regular pentagon.",
      "marks": 2
     },
     {
      "code": "12(c)",
      "prompt": "Show that if c = cos θ, where cos θ + i sin θ solves z⁵ = 1, then 16c⁵ − 20c³ + 5c − 1 = 0.",
      "marks": 5
     },
     {
      "code": "12(d)",
      "prompt": "Explain, using the Argand diagram, why 16c⁵ − 20c³ + 5c − 1 has a repeated quadratic factor.",
      "marks": 3
     },
     {
      "code": "12(e)",
      "prompt": "Regular pentagon ABCDE has centre O with OA = … = OE = 1; h is the distance from O to AB. By solving 16c⁵ − 20c³ + 5c − 1 = 0, show that h = (√5 + 1)/4.",
      "marks": 5
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 D: 2π/3"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 A: cos(8π/13) + i sin(8π/13)"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 B: −sech x tanh x"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "B1 C: 36"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 States the conjugate −3/2 − (√11/2)i is a root",
     "M1 Forms a quadratic factor (sum −3, product 5), or substitutes a complex root into the quartic",
     "A1 z² + 3z + 5, or k = −6",
     "M1 Finds the second quadratic factor, or solves the quartic using their k",
     "A1 Other roots 2 and 4 (with −3/2 − (√11/2)i)"
    ],
    "guidance": "Second factor z² − 6z + 8 = (z − 2)(z − 4)."
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1F 2 < x < 4 (follow through their two distinct real roots)"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 Writes x = tanh y in exponential form, x = (eʸ − e⁻ʸ)/(eʸ + e⁻ʸ)",
     "M1 Clears the denominator and multiplies through by eʸ (or e⁻ʸ)",
     "A1 e²ʸ = (1 + x)/(1 − x) or equivalent",
     "R1 Rigorous completion to the given result"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Uses sech²x = 1 − tanh²x (or exponentials) to get an equation in one function (condone sign slips)",
     "M1 Solves their quadratic for two values (e.g. 20tanh²x + 11tanh x − 4 = 0)",
     "A1 tanh x = −4/5 and 1/4 (or e²ˣ = 1/9 and 5/3, or eˣ = 1/3 and √15/3)",
     "A1 x = ½ ln(1/9) and x = ½ ln(5/3), any correct exact log form, ISW"
    ],
    "guidance": "Equivalent: x = −ln 3 and x = ln(√15/3)."
   },
   "7(a)(i)": {
    "type": "points",
    "points": [
     "M1 Expands det M to a linear expression in k: 4k − 35",
     "B1 Matrix of minors/cofactors with at least four elements correct (condone overall sign error on elements; transposed form fine)",
     "B1 At least seven elements correct",
     "B1 All cofactors correct",
     "A1 M⁻¹ = (1/(4k − 35))(9 − 3k −23 7k+25; k − 5 5 −k−10; 3 4 −15)"
    ]
   },
   "7(a)(ii)": {
    "type": "points",
    "points": [
     "B1F k ≠ 35/4 (from their det)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1F Their M⁻¹ with k = 5: −(1/15)(−6 −23 60; 0 5 −15; 3 4 −15), need not be simplified",
     "M1 Multiplies their M⁻¹ by (6, 3, 1)ᵀ",
     "A1 x = 3, y = 0, z = −1 (CSO)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Deduces gradient ½ or that the line passes through (0, −2)",
     "A1 y = ½x − 2"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1F Half-line from −2i through 4 (condone full line; ft (a))",
     "M1 Circle or arc with centre 2 − 3i or radius 2",
     "A1 Circle with centre 2 − 3i and radius 2",
     "A1 Correct region indicated"
    ]
   },
   "8(c)(i)": {
    "type": "points",
    "points": [
     "B1F Identifies the nearest point of their region to O, e.g. foot of perpendicular from O to the half-line, y = −2x",
     "M1 Finds the distance from O to that point, e.g. 4 sin(tan⁻¹ ½) or intersection of y = ½x − 2 and y = −2x",
     "A1 |z₁| = 4√5/5"
    ]
   },
   "8(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Uses their (c)(i) to find a or b",
     "A1 z₁ = 4/5 − (8/5)i (CSO)"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 At least one loop in the correct place",
     "B1 Both loops correct (similar size, in the 1st and 3rd quadrants) and no others"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Says his limits of integration are wrong",
     "R1 Explains only θ with sin 2θ ≥ 0 are valid since r² ≥ 0"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 Area integral with valid limits, e.g. 2 × ½∫ from 0 to π/2 of 9 sin 2θ dθ (PI by 9/4, 9/2 or 9)",
     "A1 Area = 9"
    ]
   },
   "9(d)": {
    "type": "points",
    "points": [
     "M1 At least one correct θ with sin 2θ = 1 (r = 3)",
     "A1 P(3, π/4) and Q(3, −3π/4) (or 5π/4); decimals to 3 sf OK; condone r and θ swapped"
    ]
   },
   "9(e)(i)": {
    "type": "points",
    "points": [
     "B1F Cartesian coordinates of P: (3√2/2, 3√2/2)",
     "M1 Multiplies by M (Mv) to get (9√2/2, 3√2/2)",
     "M1 Finds r = 3√5 or θ = tan⁻¹(1/3) for their image",
     "A1F (3√5, tan⁻¹(1/3)), awrt (6.7, 0.32); requires both M marks"
    ]
   },
   "9(e)(ii)": {
    "type": "points",
    "points": [
     "E1 det M = 1, so area is unchanged (area × det M)",
     "B1F Area = 9 × 1 = 9"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 Normal n = (4, p, 5)ᵀ",
     "B1 AB = (2, −5, 1)ᵀ (or BA)",
     "B1F n·c = 13 − 5p with |c| = √30 and |n| = √(41 + p²)",
     "M1 Uses scalar (or vector) product to get an equation in p",
     "M1 Squares to remove roots, e.g. 82 + 2p² = 5²(13 − 5p)²",
     "R1 Solves 623p² − 3250p + 4143 = 0, rejects 1381/623 as non-integer, p = 3"
    ],
    "guidance": "Condone a missing modulus sign."
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Divides constants by |n| = 5√2",
     "A1F 14/(5√2) = 7√2/5 ≈ 1.98 cm (at least 2 sf)"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "B1F Line through A normal to Π₁: r = (7, 2, −3) + μ(4, 3, 5)",
     "M1 Substitutes into Π₁ to find μ = −1/5",
     "M1 Doubles μ (−2/5) to find the image point",
     "A1F (27/5, 4/5, −5); not a position vector, no marks for using Π₂"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "B1 Equilibrium equation 7e_A = 9e_B + 0.32g sin 30° (condone sign errors), with e_A + e_B = 1.2, giving e_A = 0.775, e_B = 0.425",
     "B1F At least one correct tension in x, 9(e_B − x) or 7(e_A + x)",
     "M1 Four-term equation of motion with at least two correct terms",
     "A1F Correct equation, e.g. 9(0.425 − x) + 1.6 − 7(0.775 + x) = 0.32ẍ",
     "R1 Rigorous argument to −16x = 0.32ẍ, so ẍ + 50x = 0"
    ]
   },
   "11(b)(i)": {
    "type": "points",
    "points": [
     "B1 Correct DE or auxiliary equation, e.g. 0.32λ² + kλ + 16 = 0",
     "M1 Sets b² − 4ac = 0",
     "R1 k² = 512/25 so k = 16√2/5 from correct working"
    ]
   },
   "11(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Solves auxiliary equation: λ = −5√2 (repeated)",
     "A1F x = Ae^(−5√2t) + Bte^(−5√2t)",
     "B1 x = 0.2 at t = 0 gives A = 0.2",
     "M1 Uses ẋ = 0 at t = 0",
     "A1F B = √2",
     "R1 x = 0.2e^(−5√2t) + √2te^(−5√2t) by rigorous argument"
    ]
   },
   "11(b)(iii)": {
    "type": "points",
    "points": [
     "M1 Sets up an equation for t at maximum speed (ẍ = 0) from a damped model",
     "A1F Correct equation, e.g. −10e^(−5√2t) + 50√2te^(−5√2t) = 0",
     "A1F t = 1/(5√2) = √2/10",
     "M1 Uses their t to find the velocity, ẋ = −10te^(−5√2t)",
     "A1 Maximum speed √2e⁻¹ = 0.520… m s⁻¹ (ẋ = −√2e⁻¹); scheme quotes 0.5 m s⁻¹, at least 1 sf or exact; −0.5 scores A0"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "M1 At least one correct non-zero argument",
     "A1 θ = 0, 2π/5, 4π/5, 6π/5, 8π/5 (condone z = 1)"
    ]
   },
   "12(b)": {
    "type": "points",
    "points": [
     "E1 All points are distance 1 from the origin",
     "E1 Adjacent points subtend equal angles (2π/5) at the origin"
    ]
   },
   "12(c)": {
    "type": "points",
    "points": [
     "M1 Expands (cos θ + i sin θ)⁵ (condone slips in imaginary part)",
     "A1 Correct unsimplified real part c⁵ − 10c³s² + 5cs⁴",
     "M1 Equates real parts to 1",
     "M1 Uses s² = 1 − c² to write in c only",
     "R1 Rigorous completion to 16c⁵ − 20c³ + 5c − 1 = 0"
    ]
   },
   "12(d)": {
    "type": "points",
    "points": [
     "E1 z₄ = z₃* and z₅ = z₂*, so they share real parts: cos(arg z₃) = cos(arg z₄) = a, cos(arg z₂) = cos(arg z₅) = b",
     "M1 These real parts are roots of 16c⁵ − 20c³ + 5c − 1 = 0",
     "R1 Each is a double root, so (c − a)(c − b) is a repeated quadratic factor"
    ]
   },
   "12(e)": {
    "type": "points",
    "points": [
     "B1 h is a solution of the equation (may appear anywhere)",
     "M1 Factorises: (c − 1)(16c⁴ + 16c³ − 4c² − 4c + 1) = 0 or better, e.g. (4c² + 2c − 1)² = 0",
     "A1 c = (−1 ± √5)/4, only two solutions",
     "E1 Selects the solution with the larger absolute value",
     "R1 Rigorous argument that h = (√5 + 1)/4"
    ]
   }
  }
 },
 "fmath-aqa-7367-2022-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Complex division.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find the imaginary part of (5 + i)/(1 − i).\nOptions: −3   −2   2   3",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "f(x) = 10x⁴.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the mean value of f between x = 0 and x = a.\nOptions: 10a³   40a³   2a⁴   4a⁵",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "The roots of x² − px − 6 = 0 are α and β.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find α² + β² in terms of p.\nOptions: p² − 6   p² + 6   p² − 12   p² + 12",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Hyperbolic graphs.",
    "parts": [
     {
      "code": "4",
      "prompt": "Which graph meets y = sinh x at exactly one point?\nOptions: y = cosech x   y = cosh x   y = coth x   y = sech x",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Series proof.",
    "parts": [
     {
      "code": "5",
      "prompt": "Prove by induction that for all integers n ≥ 1, Σ from r = 1 to n of r³ = (½n(n + 1))².",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Part of y = f(x) is shown (diagram on the question paper; as drawn, the curve bends downward between x = a and x = b and TPQ lies above it). TPQ is the tangent at P((a + b)/2, f((a + b)/2)). S(a, 0) and T lie on x = a; Q and R(b, 0) lie on x = b. Sharon estimates ∫ from a to b of f(x) dx with the mid-ordinate rule using one strip.",
    "parts": [
     {
      "code": "6",
      "prompt": "Using the area of trapezium QRST, state with reasons whether her estimate is an under-estimate or an over-estimate.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "f(x) = (ax − 5)/(2x + b), x ∈ ℝ, x ≠ 9/2, with a and b integers. The graph of y = f(x) has asymptotes x = 9/2 and y = 3.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find a and b.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Solve f(x) ≤ x + 2, fully justifying your answer.",
      "marks": 6
     }
    ]
   },
   {
    "number": 8,
    "scenario": "f(x) = sec x.",
    "parts": [
     {
      "code": "8(a)(i)",
      "prompt": "Show that f⁽⁴⁾(0) = 5.",
      "marks": 4
     },
     {
      "code": "8(a)(ii)",
      "prompt": "Hence find the first three non-zero terms of the Maclaurin series for sec x.",
      "marks": 2
     },
     {
      "code": "8(b)",
      "prompt": "Prove that lim as x → 0 of (sec x − cosh x)/x⁴ = 1/6.",
      "marks": 4
     }
    ]
   },
   {
    "number": 9,
    "scenario": "dy/dx = (x² − 9)^(1/2) + 2xy/(x² − 9), x > 3. The curve passes through (5, 12.3).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Use Euler's method once, then the midpoint formula y_(r+1) = y_(r−1) + 2h f(x_r, y_r), x_(r+1) = x_r + h once, both with h = 0.1, to estimate y at x = 5.2 to 6 significant figures.",
      "marks": 4
     },
     {
      "code": "9(b)(i)",
      "prompt": "Find the general solution of the differential equation.",
      "marks": 6
     },
     {
      "code": "9(b)(ii)",
      "prompt": "Given y = 12.3 when x = 5, find y when x = 5.2 to 6 significant figures.",
      "marks": 3
     },
     {
      "code": "9(c)",
      "prompt": "Comment on the accuracy of your answer to (a).",
      "marks": 1
     }
    ]
   },
   {
    "number": 10,
    "scenario": "C₁: x²/25 − y²/4 = 1. C₂: x² − 25y² − 6x − 200y − 416 = 0.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Find a sequence of transformations mapping C₁ onto C₂.",
      "marks": 4
     },
     {
      "code": "10(b)",
      "prompt": "Find the asymptotes of C₂ in the form ax + by + c = 0 with integers a, b, c.",
      "marks": 3
     }
    ]
   },
   {
    "number": 11,
    "scenario": "M = (5/2 −3/2; −3/2 13/2).",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Find the eigenvalues and corresponding eigenvectors of M.",
      "marks": 5
     },
     {
      "code": "11(b)(i)",
      "prompt": "Describe, with full justification, how the directions of the invariant lines of M are related.",
      "marks": 2
     },
     {
      "code": "11(b)(ii)",
      "prompt": "Describe fully the transformation represented by M.",
      "marks": 2
     }
    ]
   },
   {
    "number": 12,
    "scenario": "A region bounded by the x-axis, y = f(x), x = a and x = b (diagram on the question paper) is rotated 2π radians about the x-axis.",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "Show that the volume of the solid is π∫ from a to b of (f(x))² dx.",
      "marks": 4
     },
     {
      "code": "12(b)",
      "prompt": "With a = 1, b = 2 and f(x) = (x + 3)/((x + 1)√x), show the volume is π(ln(2ᵐ/3ⁿ) − 2/3) for integers m and n.",
      "marks": 7
     }
    ]
   },
   {
    "number": 13,
    "scenario": "A is the matrix of reflection in y = mx, m constant. B = (3 0; 0 3).",
    "parts": [
     {
      "code": "13(a)",
      "prompt": "Show that A = (1/(m² + 1))(1 − m² 2m; 2m m² − 1). The formulae booklet result may be used.",
      "marks": 5
     },
     {
      "code": "13(b)",
      "prompt": "Show that (BA)² = kI, where I is the 2 × 2 identity and k is an integer.",
      "marks": 3
     },
     {
      "code": "13(c)(i)",
      "prompt": "On a diagram showing a point P and the line y = mx (on the question paper; m > 0 and P lies close to O, between the x-axis and the line), draw four lines demonstrating the result of (b), labelling P′, the image of P under (BA)².",
      "marks": 2
     },
     {
      "code": "13(c)(ii)",
      "prompt": "Explain how your diagram shows the result of (b).",
      "marks": 2
     },
     {
      "code": "13(d)",
      "prompt": "C = (12/5 9/5; 9/5 −12/5). Find m such that C = BA, fully justifying your answer.",
      "marks": 4
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Rabbits and birds of prey on an island: x rabbits and y birds at time t years (t ≥ 0); at t = 0, x = 1755 and y = 30. For t > 0 the rabbits breed at a% per year, each bird kills b rabbits per year on average, birds die at c per year, and birds increase at d% of the rabbit population per year. Model: dx/dt = 0.4x − 13y (1), dy/dt = 0.01x − 1.95 (2).",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "State the values of a, b, c and d.",
      "marks": 2
     },
     {
      "code": "14(b)",
      "prompt": "Solve the coupled equations to find x and y in terms of t.",
      "marks": 9
     },
     {
      "code": "14(c)",
      "prompt": "Given x and y are positive for 0 ≤ t ≤ 5, use (b) to show that the plan to eliminate the rabbits will succeed.",
      "marks": 3
     }
    ]
   }
  ],
  "markSchemes": {}
 },
 "fmath-aqa-7367-2022-p3d": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Graph G contains a subgraph isomorphic to K₅ (complete graph on 5 vertices).",
    "parts": [
     {
      "code": "1",
      "prompt": "Which statement about G must be true?\nOptions: G is not connected   G is not Hamiltonian   G is not planar   G is not simple",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Graph A is connected and planar, with 12 vertices, 18 edges and n faces.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find n.\nOptions: 4   8   28   32",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A project has 12 activities A to L, each needing one worker, all starting at their earliest start times; ADGJL is critical. Resource histogram (on the question paper), in weeks: A 0–10, B 0–5, C 0–5, D 10–20, E 10–17, F 10–15, G 20–30, H 20–25, I 30–40, J 30–40, K 30–40, L 40–45. Only two workers are available.",
    "parts": [
     {
      "code": "3",
      "prompt": "Which could be a correctly levelled histogram? (Each option has A 0–10, D 10–20, G 20–30, J 30–40, L 40–45 on the lower level, and B 0–5, C 5–10 on the upper level.)\nOptions: upper E 10–15, F 15–22, H 22–27, I 30–40, K 40–50   upper E 10–17, F 17–22, H 22–27, I 30–40, K 40–45; lower K 45–50   upper E 10–17, F 17–22, H 22–27, K 27–30, I 30–40, K 40–45; lower K 45–47   upper E 10–15, F 15–22, H 22–27, K 27–30, I 30–40, K 40–47",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Zero-sum game, pay-offs for Ben (rows A–D) against Jadzia (columns X, Y, Z): A (−3 2 3); B (6 0 −4); C (7 −1 1); D (6 −2 1).",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "State, with a reason, which strategy Ben should never play.",
      "marks": 1
     },
     {
      "code": "4(b)",
      "prompt": "Determine, with full justification, whether the game has a stable solution.",
      "marks": 3
     },
     {
      "code": "4(c)",
      "prompt": "Jadzia always plays her play-safe strategy. Explain how Ben maximises his expected pay-off.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Village street network (lengths in m; diagram on the question paper): ON 100, OP 75, PQ 75, QL 75, KL 100, LM 150, LJ 100, KJ 125, BA 150, AC 50, JC 50, CM 175, CD 25, MN 150, MH 75, HG 100, HI 125, ID 75, DE 150, EF 200, FG 125. Total length 2250 m. Lights are on one side of each street only. A worker must walk every street at least once, starting and ending at the same junction; the shortest such walk is x m.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find x, fully justifying your answer.",
      "marks": 4
     },
     {
      "code": "5(b)",
      "prompt": "A regulation requires the mean distance between adjacent lights along a street to be under 25 m. The worker counted 91 lights. Does the village meet the regulation?",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Activity network (durations in weeks): A 4, B 6, C 5 (no predecessors); D 5 after A, B; E 4 after B; F 5 after B, C; G 4 after D, E; H 5 after E, F; I 6 after G; J 7 after G, H; K 5 after H; L 5 after I, J; M 4 after J, K.",
    "parts": [
     {
      "code": "6(a)(i)",
      "prompt": "Find the earliest start time and latest finish time of every activity.",
      "marks": 3
     },
     {
      "code": "6(a)(ii)",
      "prompt": "List all the critical activities.",
      "marks": 1
     },
     {
      "code": "6(b)",
      "prompt": "One activity can be shortened by 2 weeks. State, with a reason, which one gives the largest cut in minimum completion time.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Group G has operation * and prime order p.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find, with full justification, the number of distinct subgroups of G.",
      "marks": 2
     },
     {
      "code": "7(b)(i)",
      "prompt": "G has an element g of period p. Give the general name for such an element.",
      "marks": 1
     },
     {
      "code": "7(b)(ii)",
      "prompt": "Name a group isomorphic to G.",
      "marks": 1
     },
     {
      "code": "7(c)",
      "prompt": "G contains gʳ with r < p. Find its inverse in terms of g, r and p.",
      "marks": 2
     },
     {
      "code": "7(d)(i)",
      "prompt": "Now p = 5, * is addition modulo 5 and G = {0, 1, 2, 3, 4}. Explain why G is closed.",
      "marks": 1
     },
     {
      "code": "7(d)(ii)",
      "prompt": "Complete the Cayley table for (G, *).",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Gas pipe network (Figure 1 on the question paper), arcs with lower,upper capacity in m³s⁻¹ and initial flow: SA 11,25 (23); SB 7,38 (33); SC 4,19 (17); AG 5,17 (17); AE 4,16 (12); DA 3,6 (6); BD 4,19 (17); DE 3,17 (7); DF 2,14 (4); BC 3,13 (6); BF 0,10 (10); CF 10,25 (23); EG 2,25 (9); EH 10,26 (10); FH 10,40 (37). The initial feasible flow is 73 m³s⁻¹; sinks are G and H.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Add a supersink T to the network.",
      "marks": 2
     },
     {
      "code": "8(b)",
      "prompt": "Use flow augmentation to find the maximum flow, listing each augmenting path and its flow.",
      "marks": 4
     },
     {
      "code": "8(c)",
      "prompt": "Prove that your flow is maximal.",
      "marks": 2
     },
     {
      "code": "8(d)",
      "prompt": "A trainee says raising the upper capacity of AG will raise the maximum flow, since AG's flow can't currently increase. Comment on this claim.",
      "marks": 2
     }
    ]
   },
   {
    "number": 9,
    "scenario": "On the positive integers, x ⊕ y = x + y + 8 (mod k² − 16k + 74), where k is a positive integer.",
    "parts": [
     {
      "code": "9(a)(i)",
      "prompt": "Show that ⊕ is commutative.",
      "marks": 1
     },
     {
      "code": "9(a)(ii)",
      "prompt": "Determine, with full justification, whether ⊕ is associative.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "Find the values of k for which 3 is an identity element under ⊕.",
      "marks": 3
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Kira and Julian play a zero-sum game with no stable solution. Kira (strategies K₁, K₂, K₃, probabilities p₁, p₂, p₃, game value v) sets up: maximise v subject to 7p₁ + p₂ + 8p₃ ≥ v, 3p₁ + 7p₂ + 2p₃ ≥ v, 9p₁ + 2p₂ + 4p₃ ≥ v, p₁ + p₂ + p₃ ≤ 1, p₁, p₂, p₃ ≥ 0.",
    "parts": [
     {
      "code": "10(a)(i)",
      "prompt": "Explain why p₁ + p₂ + p₃ ≤ 1 is needed.",
      "marks": 1
     },
     {
      "code": "10(a)(ii)",
      "prompt": "Explain why p₁, p₂, p₃ ≥ 0 is needed.",
      "marks": 1
     },
     {
      "code": "10(b)",
      "prompt": "Julian has strategies J₁, J₂, J₃. Complete Kira's pay-off matrix (K₁ against J₁ is 7).",
      "marks": 3
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 G is not planar (C)"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 n = 8 (B)"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 Second option (B): K split 40–45 on the upper level and 45–50 after L"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 D is dominated by C (6 ≤ 7, −2 ≤ −1, 1 ≤ 1), so never play D"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 All row minima (−3, −4, −1) or all column maxima (7, 2, 3)",
     "A1 max(row minima) = −1 and min(column maxima) = 2",
     "R1 −1 ≠ 2, so no stable solution"
    ],
    "guidance": "Including strategy D is ignored."
   },
   "4(c)": {
    "type": "points",
    "points": [
     "E1 Jadzia's play-safe strategy is Y",
     "B1 So Ben should play A"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Route inspection: odd nodes B, D, H, J",
     "M1 At least five correct shortest odd-node distances (BD 225, BH 425, BJ 250, HJ 275, DJ 75, DH 200)",
     "A1 Best pairing BJ + DH = 450 (others 500, 500)",
     "A1F x = 2250 + 450 = 2700"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Uses the 2250 m total, e.g. 2250 ÷ 91 ≈ 24.7 m (or finds the minimum number of lights needed)",
     "R1 24.7 < 25, so the village meets the regulation"
    ]
   },
   "6(a)(i)": {
    "type": "points",
    "points": [
     "M1 Correct earliest starts for E, G and H (6, 11, 11)",
     "A1 All earliest starts: A 0, B 0, C 0, D 6, E 6, F 6, G 11, H 11, I 15, J 16, K 16, L 23, M 23",
     "B1 All latest finishes: A 7, B 6, C 6, D 12, E 11, F 11, G 16, H 16, I 23, J 23, K 24, L 28, M 28"
    ],
    "guidance": "An 'END' activity is condoned."
   },
   "6(a)(ii)": {
    "type": "points",
    "points": [
     "B1 B, F, H, J, L and no others"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Chooses J",
     "R1 Cutting J by 2 weeks cuts the minimum completion time by 2 weeks"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 G has two subgroups (orders 1 and p)",
     "R1 Argument: p prime has only factors 1 and p, so by Lagrange's theorem only two subgroups"
    ]
   },
   "7(b)(i)": {
    "type": "points",
    "points": [
     "B1 Generator"
    ]
   },
   "7(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Cyclic group of order p (or a specific example)"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 Sets up gʳ * x = e (or x * gʳ = e), e.g. gʳ⁺ᵏ = gᵖ",
     "A1 Inverse is g^(p−r)"
    ]
   },
   "7(d)(i)": {
    "type": "points",
    "points": [
     "E1 a + b (mod 5) is always one of 0–4, all in G"
    ]
   },
   "7(d)(ii)": {
    "type": "points",
    "points": [
     "B1 Correct table: rows 0 (0 1 2 3 4), 1 (1 2 3 4 0), 2 (2 3 4 0 1), 3 (3 4 0 1 2), 4 (4 0 1 2 3)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Directed arcs from G and H to T",
     "A1 Correct capacities: GT 7,42 (flow 26) and HT 20,66 (flow 47)"
    ],
    "guidance": "The scheme's wording names the arcs 'GT and GH'; HT is meant."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 One correct augmenting path with flow, e.g. SAEGT 2",
     "A1 Second correct path, e.g. SBDEGT 2",
     "A1 Third correct path, e.g. SCFHT 2, and no wrong paths",
     "B1 Maximum flow 79 m³s⁻¹"
    ],
    "guidance": "T may be omitted from the paths."
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 Minimum cut {S, B, C} | {A, D, E, F, G, H, T} = 25 + 19 + 10 + 25 = 79",
     "R1 Flow 79 equals the cut, so maximal by the max-flow min-cut theorem"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 AG is not what limits the maximum flow",
     "R1 Flow into A is already at its maximum, so the claim is wrong"
    ]
   },
   "9(a)(i)": {
    "type": "points",
    "points": [
     "B1 x ⊕ y and y ⊕ x both equal x + y + 8 (mod k² − 16k + 74)"
    ],
    "guidance": "Missing modulus condoned throughout Q9."
   },
   "9(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Forms (x ⊕ y) ⊕ z or x ⊕ (y ⊕ z) and gets x + y + z + 16",
     "R1 Both equal x + y + z + 16, so ⊕ is associative"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 3 ⊕ x = x + 11 (mod k² − 16k + 74)",
     "A1 Identity requires modulus 11: k² − 16k + 74 = 11",
     "A1 k² − 16k + 63 = 0, k = 7 or 9 only"
    ]
   },
   "10(a)(i)": {
    "type": "points",
    "points": [
     "E1 Probabilities cannot sum to more than 1"
    ]
   },
   "10(a)(ii)": {
    "type": "points",
    "points": [
     "E1 Probabilities cannot be negative"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Uses the constraints to get at least two correct entries",
     "A1 At least two correct rows or columns",
     "A1 Full matrix: K₁ (7 3 9); K₂ (1 7 2); K₃ (8 2 4)"
    ]
   }
  }
 },
 "fmath-aqa-7367-2022-p3m": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Force–time graph (on the question paper) over 5 s: F rises linearly from 0 to a peak of 7 N, then falls linearly to 0 at t = 5 s (a triangle).",
    "parts": [
     {
      "code": "1",
      "prompt": "Find the magnitude of the impulse.\nOptions: 17.5 N s   25 N s   35 N s   70 N s",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "A 1200 kg car moves at a constant 18 m s⁻¹ on a straight level road against total resistance 240 N.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the engine's power.\nOptions: 900 W   4320 W   16 000 W   21 600 W",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Light rod AB, 40 cm long, carries particles of 5 kg at A, 1 kg at B and 4 kg at its midpoint.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find the distance of the centre of mass from the midpoint.\nOptions: 4 cm   8 cm   12 cm   28 cm",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Orbital speed is modelled as v = Gᵃmᵇrᶜ, where G is the gravitational constant (N m² kg⁻²), m the Earth's mass (kg) and r the orbit radius (m).",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "State the dimensions of force.",
      "marks": 1
     },
     {
      "code": "4(b)",
      "prompt": "Use dimensional analysis to find a, b and c.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "A 10 000 kg train at 0.3 m s⁻¹ hits a buffer, which stops it while compressing 0.2 m. At compression x m the buffer force is F = Ax + 9000x² N, with A constant.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find, in terms of A, the work done compressing the buffer 0.2 m.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Find A.",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "A 5 kg particle moves on a circle with position vector r = (2 sin 3t)i + (2 cos 3t)j metres at time t s.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Prove that the velocity is perpendicular to the position vector.",
      "marks": 4
     },
     {
      "code": "6(b)",
      "prompt": "Prove that the resultant force has constant magnitude.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Equal-mass white and red snooker balls on a horizontal table ABCD. The white ball, moving at 2 m s⁻¹ parallel to AB, hits the stationary red ball. Afterwards the white moves at 0.8 m s⁻¹ at 30° to AB (towards AB) and the red at v m s⁻¹ at angle θ to CD (towards CD). At impact the white ball's distance from AB equals the red ball's distance from CD. Model the balls as particles with no air resistance (diagram on the question paper).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Explain why the balls reach their sides of the table at the same time.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Show that θ = 17.0° to 1 d.p.",
      "marks": 4
     },
     {
      "code": "7(c)",
      "prompt": "Find v.",
      "marks": 2
     },
     {
      "code": "7(d)",
      "prompt": "Determine, with full justification, which ball travels further before hitting the side.",
      "marks": 2
     },
     {
      "code": "7(e)",
      "prompt": "Suggest one refinement to the model.",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Take g = 9.8 m s⁻². A rope pulls a 60 kg crate from rest along rough horizontal ground (μ = 0.4) with tension 240 N at 30° above the horizontal. After 5 m the rope comes off.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Use energy to find the crate's maximum speed.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "Use energy to find the total distance travelled.",
      "marks": 2
     },
     {
      "code": "8(c)",
      "prompt": "A student says that in reality the crate probably travels no more than 5.3 m. Comment on this.",
      "marks": 2
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Composite body (Figure 1): a 9 kg block of square cross-section, side 20 cm, with top-left corner A, bottom-left F and bottom-right E. A 1 kg block of side 4 cm (top edge CD) is fixed on its top at the right-hand end, its right side in line with the big block's right side (the side above E); B, the small block's bottom-left corner, is on the big block's top edge 16 cm from A.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find the distance of the composite body's centre of mass from AF.",
      "marks": 2
     },
     {
      "code": "9(b)(i)",
      "prompt": "A uniform 12 kg rod of length 1 m rests with its upper end against a smooth vertical wall, on the AF side of the body, and its lower end on the body at B; the rod makes 60° with AB. The body stands on horizontal ground (μ = 0.3). A particle of m kg is fixed on the rod 75 cm from B (Figure 2). Write down the vertical reaction on the rod at B in terms of m and g.",
      "marks": 1
     },
     {
      "code": "9(b)(ii)",
      "prompt": "Show that the horizontal reaction on the rod at B has magnitude g(6 + 0.75m)/√3.",
      "marks": 3
     },
     {
      "code": "9(b)(iii)",
      "prompt": "Find, with full justification, the largest m for which the body neither slides nor topples.",
      "marks": 6
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 17.5 N s (A)"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 4320 W (B)"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 8 cm (B)"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 MLT⁻²"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 [G] = MLT⁻² × L²M⁻² = M⁻¹L³T⁻²",
     "M1 Dimensional equation LT⁻¹ = M⁻ᵃL³ᵃT⁻²ᵃ × Mᵇ × Lᶜ with at least two of the others correct",
     "M1 At least one of a, b, c correct (1 = 3a + c, 0 = b − a, −1 = −2a)",
     "A1 a = ½, b = ½, c = −½"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Work done = ∫₀^0.2 (Ax + 9000x²) dx (limits condoned)",
     "A1 A/50 + 24"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 ½ × 10000 × 0.3² = A/50 + 24, i.e. 450 = A/50 + 24",
     "A1F A = 21 300"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Differentiates with at least one component right",
     "A1 v = 6cos3t i − 6sin3t j",
     "M1 Forms v·r (or gradients of both vectors)",
     "R1 v·r = 12sin3t cos3t − 12cos3t sin3t = 0, so perpendicular (or gradient product −1)"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1 a = −18sin3t i − 18cos3t j",
     "M1 Finds |a| or uses F = ma",
     "R1 F = −90sin3t i − 90cos3t j, |F| = √(90²(sin²3t + cos²3t)) = 90 N, constant; identity must be used"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Momentum components perpendicular to the sides are equal in size for both balls",
     "R1 Equal masses give equal perpendicular velocity components, and equal distances, so same time"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 Momentum conservation in both directions",
     "A1 v cosθ = 2 − 0.8cos30° = 2 − 2√3/5 and v sinθ = 0.8sin30° = 0.4",
     "M1 tanθ = 0.4/(2 − 2√3/5) = 0.3060…",
     "A1 θ = 17.01…° = 17.0° (AG; must see 17.01 or better)"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 Uses a momentum equation or Pythagoras, e.g. v = 0.8sin30°/sin17.0°",
     "A1 v = 1.37 (awrt 1.4)"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "M1 Comparable quantities, e.g. parallel components 0.8cos30° = 0.693 and 1.37cos17.0° = 1.31 (or angles, or speed and time)",
     "R1 Red ball travels further, as both take the same time"
    ]
   },
   "7(e)": {
    "type": "points",
    "points": [
     "B1 Include air resistance or the balls' rotation (a refinement, not a criticism)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 R + 240sin30° = 60 × 9.8, R = 468",
     "M1 Three-term energy equation, at least two terms right",
     "A1F 240cos30° × 5 − 0.4 × 468 × 5 = ½ × 60v² (ft R = 60g)",
     "A1 600√3 − 936 = 30v², v = 1.85…, awrt 1.9 m s⁻¹"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 103.23 = 0.4 × 588 × d (R = 588), d = 0.44",
     "A1 Total distance 5.4 m (2 s.f., with units)"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "E1 Air resistance has been ignored",
     "E1 So the crate probably won't reach 5.4 m; the claim is reasonable"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 x̄ = (9 × 10 + 1 × 18)/10 (one distance error condoned)",
     "A1 10.8 cm"
    ]
   },
   "9(b)(i)": {
    "type": "points",
    "points": [
     "B1 R = (12 + m)g"
    ]
   },
   "9(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Moments about a point on the rod, at least two correct terms",
     "A1 About B: P sin60° = 12g × 0.5cos60° + mg × 0.75cos60° (wall reaction P = horizontal force S)",
     "R1 S = g(6 + 0.75m)/tan60° = g(6 + 0.75m)/√3 (AG)"
    ]
   },
   "9(b)(iii)": {
    "type": "points",
    "points": [
     "M1 Toppling moments about E with the horizontal force correct, at least three terms",
     "A1 10g × 9.2 + (12 + m)g × 4 = 20 × g(6 + 0.75m)/√3",
     "A1 m = (140√3 − 120)/(15 − 4√3) = 15.2 (awrt 15)",
     "M1 Sliding: g(6 + 0.75m)/√3 = 0.3(22 + m)g (block mass omission condoned)",
     "A1 m = (6 − 6.6√3)/(0.3√3 − 0.75) = 23.6 (awrt 24)",
     "R1 Maximum m = 15.2 (awrt 15), from correct working"
    ]
   }
  }
 },
 "fmath-aqa-7367-2022-p3s": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "T has a discrete uniform distribution on 1, 2, 3, …, 16.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find Var(T).\nOptions: 1.25   18.75   21.25   21.33",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "X has pdf f(x) = 1 for 0 < x ≤ ½, f(x) = (3/8)x⁻² for ½ < x ≤ 3/2, and 0 otherwise.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find P(X < 1).\nOptions: 1/8   3/8   5/8   7/8",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "X is exponential with pdf f(x) = λe^(−λx) for x ≥ 0.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Show that the cdf is F(x) = 1 − e^(−λx) for x ≥ 0.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "With λ = 2, find P(X > 1) to 3 d.p.",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "scenario": "A field grows only daisies (mean 16 per m²) and dandelions (mean 10 per m²), independently.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "With a Poisson model, find the probability that a random square metre has at least 30 flowers in total, to 3 d.p.",
      "marks": 3
     },
     {
      "code": "4(b)",
      "prompt": "A full survey gives a standard deviation of 10 for total flowers per m². State, with a reason, whether the model in (a) is valid.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Apple mass X g is modelled as normal. A random sample of 12 gives Σx = 1038 and Σx² = 90 100.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that a 99% confidence interval for the population mean is (81.7, 91.3) to 3 s.f.",
      "marks": 4
     },
     {
      "code": "5(b)",
      "prompt": "Padraig tests H₀: μ = 85 against H₁: μ ≠ 85 at the 1% level using this sample. State, with a reason, whether H₀ is accepted or rejected.",
      "marks": 1
     },
     {
      "code": "5(c)",
      "prompt": "Interpret the conclusion of (b) in context.",
      "marks": 1
     }
    ]
   },
   {
    "number": 6,
    "scenario": "X takes values 0, 1, 2 with P(X = 0) = a, P(X = 1) = b, P(X = 2) = c (0 otherwise). E(X) = 1.2 and Var(X) = 0.56.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Deduce a, b and c.",
      "marks": 6
     },
     {
      "code": "6(b)",
      "prompt": "Y is continuous, independent of X, with variance 15. Find Var(X − 2Y − 11).",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Air-quality measurements in countries A and B are ranked 1 (pollution below a threshold) or 2 (above). A random sample of 500: A — Rank 1: 87, Rank 2: 101 (total 188); B — Rank 1: 167, Rank 2: 145 (total 312); column totals 254 and 246. The scientist claims country and air quality are associated.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Test the claim at the 10% significance level.",
      "marks": 8
     },
     {
      "code": "7(b)",
      "prompt": "State what a Type I error would mean in this context.",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Continuous X has cdf F(x) = 0 for x = 0 (as printed), F(x) = e^(kx) − 1 for 0 ≤ x ≤ 5, F(x) = 1 for x > 5.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that k = (1/5) ln 2.",
      "marks": 2
     },
     {
      "code": "8(b)",
      "prompt": "Show that the median is a(ln b / ln 2) − c for integers a, b, c to be found.",
      "marks": 3
     },
     {
      "code": "8(c)",
      "prompt": "Show that the mean is p − q/ln 2 for integers p, q to be found.",
      "marks": 6
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Lianne models the maximum use time (hours) of a rechargeable battery between recharges as a rectangular distribution on [8, 12].",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "p = P(time > 10.5 h). Lianne buys only if p > 0.4. Will she buy it?",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "A histogram of 100 recharges (on the question paper) has five unequal-width bars running from 8 to 12 h and is roughly bell-shaped: low frequency density near 8 and 12, highest around 10 h. Explain why the model in (a) may be invalid and name a better distribution.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 21.25 (C)"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 7/8 (D)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Uses ∫ λe^(−λt) dt (missing dt or using x condoned)",
     "A1 Correct integral −e^(−λt) (may be unsimplified)",
     "R1 Limits 0 to x substituted correctly (or F(0) = 0 used) to give 1 − e^(−λx)"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 F(1) = awrt 0.865, or correct integral (PI by answer)",
     "A1 P(X > 1) = e^(−2) = 0.135 (awrt)"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Total ~ Po(26) (PI)",
     "M1 Uses the model for P(X ≥ 30), P(X > 30), P(X ≤ 29) or P(X ≤ 30)",
     "A1 1 − 0.759 = 0.241 (awrt)"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Compares 26 with 100, or √26 with 10",
     "A1F Variance 10² is not close to the mean 26, so the Poisson model is not valid"
    ],
    "guidance": "Must not use or imply ≠."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 x̄ = 86.5, s² = 28.45 (awrt 28.45 or 28.455; or s awrt 5.334)",
     "B1 t₁₁ = 3.106 (awrt)",
     "M1 Correct interval formula, 86.5 ± 3.106 × √(28.45/12) (2.58 condoned in place of t)",
     "R1 Substitutes correctly to reach (81.7, 91.3)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "E1 H₀ accepted, since 85 lies inside the interval"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "E1 Not enough evidence that the mean apple mass differs from 85 g (non-definite, in context)"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 One correct equation: a + b + c = 1, b + 2c = 1.2, or b + 4c − 1.2² = 0.56 (oe)",
     "B1 Two correct equations",
     "B1 All three correct equations (b + 4c = 2)",
     "M1 Attempts to solve for one of a, b, c",
     "A1 One value correct",
     "A1 a = 0.2, b = 0.4, c = 0.4"
    ],
    "guidance": "a + b + c = 1 may be implied by values summing to 1."
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Var(X) + 2²Var(Y) = 0.56 + 2² × 15 (one slip condoned, e.g. 2Var(Y) or a minus)",
     "A1 60.56"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 H₀: no association between country and air quality; H₁: association",
     "M1 Expected values (PI): A 95.504, 92.496; B 158.496, 153.504",
     "M1 Yates-corrected statistic Σ(|O − E| − 0.5)²/E (PI; Σ(O − E)²/E condoned)",
     "A1 Test statistic 2.1849 (awrt 2.2)",
     "B1 Critical value χ²(1) at 10% = 2.706 (awrt 2.7), or p-value awrt 0.14",
     "R1 Compares correctly: 2.1849 < 2.706",
     "E1F Accept H₀",
     "E1F No evidence of an association between country and air quality (non-definite)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "E1 Concluding country and air quality are associated when they are not"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 e^(5k) − 1 = 1",
     "R1 e^(5k) = 2, 5k = ln 2, k = (1/5) ln 2"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 e^((m/5) ln 2) − 1 = 0.5",
     "M1 Logs to (m/5) ln 2 = ln 1.5",
     "R1 (m/5) ln 2 = ln 3 − ln 2, so m = 5(ln 3/ln 2) − 5"
    ],
    "guidance": "(1/5) ln 2 may be left as k until the final line."
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 f(x) = ((1/5) ln 2) e^((x/5) ln 2), of the form Ae^(kx)",
     "M1 E(X) = A∫ x e^(kx) dx (dx condoned)",
     "M1 Integration by parts the right way round",
     "A1 [x e^((x/5) ln 2) − (5/ln 2) e^((x/5) ln 2)] from 0 to 5",
     "M1 Substitutes 0 and 5 correctly",
     "R1 (10 − 10/ln 2) − (−5/ln 2) = 10 − 5/ln 2"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 P(X > 10.5) = ¼ × 1.5 = 0.375",
     "E1F 0.375 < 0.4, so she won't buy it"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "E1 Frequency density is not roughly constant over 8 to 12 hours",
     "B1 Use a normal distribution instead"
    ]
   }
  }
 },
 "fmath-aqa-7367-2021n-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Sum of a series.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find Σ (r² − 2r) for r = 1 to 20.\nOptions: 2450   2660   5320   43680",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "z = 1 − 3i is a root of z² + pz + r = 0, with p and r real.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find r.\nOptions: −8   −2   6   10",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Curve C has polar equation r² sin 2θ = 4.",
    "parts": [
     {
      "code": "3",
      "prompt": "Choose a Cartesian equation for C.\nOptions: y = 2x   y = x/2   y = 2/x   y = 4x",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Equation 3tanh²x − 2sech x = 2. You may use cosh⁻¹y = ln(y + √(y² − 1)).",
    "parts": [
     {
      "code": "4",
      "prompt": "Show that the solutions are x = ±ln(a + √b) for integers a and b, and find a and b.",
      "marks": 5
     }
    ]
   },
   {
    "number": 5,
    "scenario": "M = (3 2 −2; 0 1 0; 0 0 1).",
    "parts": [
     {
      "code": "5",
      "prompt": "Prove by induction that Mⁿ = (3ⁿ 3ⁿ−1 −3ⁿ+1; 0 1 0; 0 0 1) for all integers n ≥ 1.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Complex equation (2z − z*)* = z².",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Show the equation has exactly four solutions and state them.",
      "marks": 7
     },
     {
      "code": "6(b)(i)",
      "prompt": "Plot the four solutions on an Argand diagram and join them to make a quadrilateral with one line of symmetry.",
      "marks": 2
     },
     {
      "code": "6(b)(ii)",
      "prompt": "Show the quadrilateral has area √15/2.",
      "marks": 1
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Graph of y = f(x) for −4 ≤ x ≤ 4 (on the question paper): crosses the x-axis at x = 1 and x = 3 and the y-axis at y = 2. It decreases from a nearly flat level on the left, through (0, 2) and (1, 0), to a minimum below the axis between 1 and 3, then rises through (3, 0).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Sketch y = |f(x)|, showing axis intercepts.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Sketch y = 1/f(x), showing axis intercepts and asymptotes.",
      "marks": 3
     },
     {
      "code": "7(c)",
      "prompt": "Sketch y = f(|x|), showing axis intercepts.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A 4 kg particle moves in a horizontal line with velocity v m s⁻¹ at time t s. Forces: driving force 1.8 N, further driving force 30√t N, resistance 0.08v² N. At t = 70, v = 54.",
    "parts": [
     {
      "code": "8",
      "prompt": "Use Euler's method with step 0.5 to estimate the velocity at t = 71, to 4 significant figures.",
      "marks": 6
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Limit of xe⁻ˣ as x → ∞.",
    "parts": [
     {
      "code": "9",
      "prompt": "Use l'Hôpital's rule to show that the limit is 0, justifying fully.",
      "marks": 4
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Improper integral ∫₀⁸ ln x dx.",
    "parts": [
     {
      "code": "10",
      "prompt": "Evaluate the integral, showing the limiting process.",
      "marks": 6
     }
    ]
   },
   {
    "number": 11,
    "scenario": "L₁: r = (2, 2, 3)ᵀ + λ(2, 3, −1)ᵀ; L₂: r = (6, 4, 1)ᵀ + μ(−2, 1, 1)ᵀ. Both lines lie in plane Π₁. A(4, −1, −1), B(1, 5, −7), C(3, 4, −8) lie in plane Π₂.",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Find the acute angle between L₁ and L₂ to the nearest 0.1°.",
      "marks": 3
     },
     {
      "code": "11(b)(i)",
      "prompt": "Find the equation of Π₁ in the form r.n = d.",
      "marks": 4
     },
     {
      "code": "11(b)(ii)",
      "prompt": "Hence find the shortest distance from Π₁ to the origin.",
      "marks": 1
     },
     {
      "code": "11(c)",
      "prompt": "Find the angle between Π₁ and Π₂ to the nearest 0.1°.",
      "marks": 4
     }
    ]
   },
   {
    "number": 12,
    "scenario": "A = (1 5 3; 4 −2 p; 8 5 −11), p constant. Planes: x + 5y + 3z = 5, 4x − 2y + pz = 24, 8x + 5y − 11z = −30.",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "Given A is non-singular, find A⁻¹ in terms of p and state any restriction on p.",
      "marks": 6
     },
     {
      "code": "12(b)(i)",
      "prompt": "Find, in terms of p, the point where the three planes meet.",
      "marks": 4
     },
     {
      "code": "12(b)(ii)",
      "prompt": "For p = 2, show the planes are mutually perpendicular.",
      "marks": 4
     }
    ]
   },
   {
    "number": 13,
    "scenario": "S has matrix (3 0; 0 1); T is a translation by (0, −5)ᵀ. Kamla applies S then T to graphs. Leo says applying T then S would sometimes give a different result; Kamla disagrees.",
    "parts": [
     {
      "code": "13",
      "prompt": "Decide who is right, with full justification.",
      "marks": 3
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Hyperbola H: y² − x² = 16; circle C: x² + y² = 32. The shaded first-quadrant region (diagram on the question paper) is bounded by H, C and both axes: under H from x = 0 to where H meets C, then under C down to the x-axis.",
    "parts": [
     {
      "code": "14",
      "prompt": "Show that the shaded area is 16π/3 + 8ln((√2 + √6)/2).",
      "marks": 12
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Use g = 9.8 m s⁻². Particle P, mass m, is joined by light elastic strings AP and BP to points A and B, 4 m apart on a rough horizontal floor of a container (μ = 0.68). Tension in AP is 24m·e_A for extension e_A; tension in BP is 10m·e_B for extension e_B. Natural lengths: AP 1 m, BP 1.3 m. P lies on the line AB.",
    "parts": [
     {
      "code": "15(a)",
      "prompt": "Show that the tensions are equal when AP = 1.5 m.",
      "marks": 1
     },
     {
      "code": "15(b)",
      "prompt": "P is released from rest with AP = 1.9 m; at time t, AP = 1.5 + x. Show that while P moves towards A, d²x/dt² + 34x = 6.664.",
      "marks": 3
     },
     {
      "code": "15(c)",
      "prompt": "The container is filled with oil and P is again released from rest at AP = 1.9 m. The oil gives a resistance 10mv N, where v is the speed. Find x in terms of t while P moves towards A.",
      "marks": 9
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 2450"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 10"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 y = 2/x"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "M1 Uses a hyperbolic identity (e.g. tanh²x = 1 − sech²x) or exponential form",
     "M1 Solves the resulting quadratic/quartic and chooses the positive root",
     "B1 Correct value: sech x = 1/3 (cosh x = 3), rejecting sech x = −1",
     "M1 Writes x in log form containing 3 or √8 or 2√2",
     "A1 x = ±ln(3 + √8), so a = 3, b = 8"
    ],
    "guidance": "Missing ± condoned in working before the final answer; ±ln(3 + 2√2) condoned."
   },
   "5": {
    "type": "points",
    "points": [
     "B1 Checks n = 1 gives M and says the result holds for n = 1",
     "B1 Assumes the result for n = k",
     "M1 Writes Mᵏ⁺¹ as MMᵏ or MᵏM",
     "A1 Correctly simplified Mᵏ⁺¹ = (3ᵏ⁺¹ 3ᵏ⁺¹−1 −3ᵏ⁺¹+1; 0 1 0; 0 0 1)",
     "R1 Full conclusion: true for n = 1, true for k ⇒ true for k + 1, hence true for all n ≥ 1"
    ],
    "guidance": "n in place of k is condoned for the first four marks but not for R1."
   },
   "8": {
    "type": "points",
    "points": [
     "M1 Newton's second law with four terms: 4 dv/dt = 1.8 + 30√t − 0.08v²",
     "A1 dv/dt = 0.45 + 7.5√t − 0.02v²",
     "M1 First Euler step: v(70.5) ≈ 54 + 0.5(0.45 + 7.5√70 − 0.02 × 54²)",
     "A1 v(70.5) ≈ 56.4 (56.4398…)",
     "M1 Applies Euler's method exactly twice",
     "A1 v(71) ≈ 56.30 m s⁻¹"
    ]
   },
   "9": {
    "type": "points",
    "points": [
     "M1 Takes f(x) = x, g(x) = eˣ with l'Hôpital's rule",
     "E1 Notes f and g both tend to ∞ as x → ∞",
     "A1 f′(x)/g′(x) = e⁻ˣ",
     "R1 Correct reasoning to limit of e⁻ˣ = 0"
    ],
    "guidance": "The E1 explanation is not required for R1."
   },
   "10": {
    "type": "points",
    "points": [
     "E1 Writes the integral as the limit as h → 0 of ∫ₕ⁸ ln x dx",
     "M1 Uses integration by parts (or the known integral of ln x)",
     "A1 x ln x − x",
     "M1 Substitutes 8 correctly into their expression",
     "M1 Uses the limit h ln h → 0 as h → 0",
     "A1 8ln 8 − 8, with h ln h → 0 stated"
    ],
    "guidance": "No marks for an answer with no working."
   },
   "13": {
    "type": "points",
    "points": [
     "B1 S then T maps (x, y) to (3x, y − 5), or S is a stretch parallel to the x-axis",
     "B1 T then S also gives (3x, y − 5), or S only affects x while T only affects y",
     "R1 Complete argument that Kamla is correct"
    ]
   },
   "14": {
    "type": "points",
    "points": [
     "M1 Solves simultaneously for the x-coordinate of the intersection P",
     "A1 x = 2√2",
     "M1 Splits the region into parts, at least one an integral with correct limits",
     "M1 Substitution for A₁ = ∫₀^(2√2) √(x² + 16) dx, e.g. x = 4sinh u",
     "A1 Integrand 16cosh²u",
     "M1 Uses a hyperbolic identity: 8∫(cosh 2u + 1) du",
     "M1 Deduces sinh 2u = √3",
     "A1 A₁ = 4√3 + 8ln((√2 + √6)/2)",
     "M1 Sector minus triangle (or a substitution) for A₂",
     "M1 OP makes angle π/3 with the x-axis",
     "A1 A₂ = 16π/3 − 4√3",
     "R1 Adds the two areas to get the result"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Writes z = x + iy (and z*)",
     "A1 (2z − z*)* = x − 3iy and z² = x² − y² + 2ixy",
     "M1 Equates real and imaginary parts: x = x² − y², −3y = 2xy",
     "A1 Deduces y = 0 or x = −3/2",
     "A1 y = 0 gives x = 0 or 1 (z = 0, z = 1)",
     "A1 Any two correct solutions in the form z = …",
     "R1 Clear argument giving exactly four solutions: 0, 1, −3/2 ± (√15/2)i"
    ]
   },
   "6(b)(i)": {
    "type": "points",
    "points": [
     "B1F Plots their four points correctly (labels not needed)",
     "B1F Joins them into a shape symmetric about the real axis"
    ]
   },
   "6(b)(ii)": {
    "type": "points",
    "points": [
     "R1 Two triangles each of area ½ × 1 × √15/2 = √15/4, total √15/2"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Reflects the part below the x-axis in the x-axis",
     "A1 Correct graph with intercepts 2, 1 and 3"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 Asymptotes x = 1 and x = 3 (and y = 0)",
     "M1 Correct shape: positive increasing left of x = 1; negative with a local maximum between 1 and 3; positive decreasing right of x = 3",
     "A1F Correct graph including y-intercept ½"
    ],
    "guidance": "One wrong asymptote condoned."
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 Reflects the right-hand part (x ≥ 0) in the y-axis",
     "A1 Intercepts shown: y = 2 and x = ±1, ±3"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1 Scalar product of directions: (2, 3, −1)·(−2, 1, 1) = −2",
     "M1 Divides by √14 × √6 (implied by about 103°)",
     "A1 77.4°"
    ]
   },
   "11(b)(i)": {
    "type": "points",
    "points": [
     "M1 Vector product of the direction vectors",
     "A1 (4, 0, 8) or multiple, e.g. (1, 0, 2)",
     "M1 Dot product of normal with a point on the plane",
     "A1 r.(1, 0, 2) = 8 (or multiple)"
    ]
   },
   "11(b)(ii)": {
    "type": "points",
    "points": [
     "B1F Distance 8/√5"
    ]
   },
   "11(c)": {
    "type": "points",
    "points": [
     "M1 Forms two vectors in Π₂ (e.g. AB = −3(1, −2, 2), AC = (−1, 5, −7)) and takes their cross product",
     "A1 n₂ = (4, 5, 3) or multiple",
     "M1 Scalar product of the two normals",
     "A1 cos β = 2/√10, β = 50.8° (129.2° accepted)"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "M1 Expands |A| by 2×2 determinants",
     "A1 |A| = 350 + 35p = 35(10 + p)",
     "M1 Minors/cofactors with four entries right",
     "A1 Cofactors (22 − 5p 44 + 8p 36; 70 −35 35; 5p + 6 12 − p −22)",
     "A1F Transposes and divides by their determinant (at most one further error)",
     "R1 A⁻¹ = 1/(350 + 35p) × (22 − 5p 70 5p + 6; 44 + 8p −35 12 − p; 36 35 −22) with p ≠ −10"
    ]
   },
   "12(b)(i)": {
    "type": "points",
    "points": [
     "M1 Multiplies A⁻¹ by (5, 24, −30)ᵀ or eliminates a variable",
     "A1F One coordinate correct",
     "A1F Two coordinates correct",
     "R1 ((46 − 5p)/(10 + p), (−28 + 2p)/(10 + p), 48/(10 + p))"
    ]
   },
   "12(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Scalar product of two normals, e.g. (1, 5, 3)·(4, −2, 2)",
     "A1 = 0, so those planes are perpendicular",
     "M1 Cross product of the same normals, or the other two scalar products",
     "R1 (1, 5, 3) × (4, −2, 2) = 2(8, 5, −11), parallel to the third normal (or all three scalar products zero), so mutually perpendicular"
    ]
   },
   "15(a)": {
    "type": "points",
    "points": [
     "R1 T_AP = 24m(0.5) = 12m and T_BP = 10m(1.2) = 12m, so equal"
    ]
   },
   "15(b)": {
    "type": "points",
    "points": [
     "B1 One tension correct",
     "M1 Four-term equation of motion: m ẍ = 10m(1.2 − x) − 24m(0.5 + x) + 6.664m",
     "R1 Rigorous completion to ẍ + 34x = 6.664"
    ],
    "guidance": "Friction 0.68 × 9.8m = 6.664m opposes motion towards A."
   },
   "15(c)": {
    "type": "points",
    "points": [
     "B1 ẍ + 10ẋ + 34x = 6.664",
     "M1 Solves auxiliary equation λ² + 10λ + 34 = 0: λ = −5 ± 3i",
     "A1F CF x = e⁻⁵ᵗ(A cos 3t + B sin 3t)",
     "B1 PI x = 0.196",
     "A1F General solution: CF + 0.196",
     "B1 x = 0.4 at t = 0 gives A = 0.204",
     "M1 Sets ẋ = 0 at t = 0",
     "A1 B = 0.34",
     "R1 x = 0.204e⁻⁵ᵗ cos 3t + 0.34e⁻⁵ᵗ sin 3t + 0.196"
    ]
   }
  }
 },
 "fmath-aqa-7367-2021n-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Singular matrices.",
    "parts": [
     {
      "code": "1",
      "prompt": "Which matrix is singular?\nOptions: (1 0; 0 1)   (1 1; 2 2)   (0 1; 1 0)   (1 −2; 1 2)",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Complex number −4 − 7i.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find arg(−4 − 7i) to the nearest degree.\nOptions: −120°   −60°   30°   60°",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Line L: r = (3, 2, 0)ᵀ + λ(−1, −2, 5)ᵀ.",
    "parts": [
     {
      "code": "3",
      "prompt": "Which line is perpendicular to L?\nOptions: r = (2, −3, 4)ᵀ + μ(1, 2, −5)ᵀ   r = (1, 0, 1)ᵀ + μ(2, −3, 1)ᵀ   r = (1, 2, 1)ᵀ + μ(1, 1, 2)ᵀ   r = (0, 3, 2)ᵀ + μ(4, 3, 2)ᵀ",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Sums of odd numbers via differences.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Show that (r + 1)² − r² = 2r + 1.",
      "marks": 1
     },
     {
      "code": "4(b)",
      "prompt": "Use the method of differences to show Σ (2r + 1) from r = 1 to n equals n² + 2n.",
      "marks": 3
     },
     {
      "code": "4(c)",
      "prompt": "Check the result of (b) using the standard formula for Σ r.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "z³ + 2z² − 5z − 3 = 0 has roots α, β, γ.",
    "parts": [
     {
      "code": "5",
      "prompt": "Find a cubic equation whose roots are ½α − 1, ½β − 1 and ½γ − 1.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Ellipse E₁: x² + y²/4 = 1. Translating E₁ by (3, 0)ᵀ gives E₂. Ellipse E₃: x²/4 + (y − 3)² = 1. Lines L_A and L_B each touch both E₂ and E₃; L_A is nearer the origin, and both ellipses lie between the lines.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Write down the equation of E₂.",
      "marks": 1
     },
     {
      "code": "6(b)",
      "prompt": "Describe the transformation taking E₂ to E₃.",
      "marks": 1
     },
     {
      "code": "6(c)",
      "prompt": "Sketch and label E₂, E₃, L_A and L_B (line intercepts not needed).",
      "marks": 4
     },
     {
      "code": "6(d)",
      "prompt": "Explain, without calculation, why L_A has equation x + y = c for a constant c.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Astroid x = 4cos³t, y = 4sin³t, 0 ≤ t < 2π (diagram on the question paper; t = 0 at (4, 0), t = π/2 at (0, 4)). The arc from t = 0 to t = π/2 is rotated through 2π about the x-axis.",
    "parts": [
     {
      "code": "7",
      "prompt": "Show that the curved surface area is bπ/c for integers b and c.",
      "marks": 7
     }
    ]
   },
   {
    "number": 8,
    "scenario": "z satisfies |z* − 1 − 2i| = |z − 3| and |z − a| = 3, with a real.",
    "parts": [
     {
      "code": "8",
      "prompt": "Show that a lies in [1 − s√t, 1 + s√t] where s and t are primes.",
      "marks": 6
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Line L: r = (7/4)sec θ, −π/2 < θ < π/2. Curve C: r = 3 + cos θ, −π < θ ≤ π. Region R: r > (7/4)sec θ and r < 3 + cos θ.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Show L is perpendicular to the initial line.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "Find the polar coordinates of the intersections of L and C, with full justification.",
      "marks": 5
     },
     {
      "code": "9(c)",
      "prompt": "Find the exact area of R.",
      "marks": 7
     }
    ]
   },
   {
    "number": 10,
    "scenario": "A seabird colony has y birds at time t years. Losses (death or leaving) happen at a rate proportional to y; in one year they equal 16% of the birds present at the start of the year.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "With no births or arrivals, find k (3 s.f.) such that dy/dt = −ky.",
      "marks": 4
     },
     {
      "code": "10(b)",
      "prompt": "Losses continue as in (a), but births add 20t birds per year and a protection group adds 45 birds per year. Write a first-order differential equation for y and t.",
      "marks": 2
     },
     {
      "code": "10(c)",
      "prompt": "Initially there are 340 birds. Solve the equation from (b) for y in terms of t.",
      "marks": 5
     },
     {
      "code": "10(d)",
      "prompt": "Give two limitations of the model.",
      "marks": 2
     }
    ]
   },
   {
    "number": 11,
    "scenario": "L₁: (x + 1)/3 = (−y + 5)/2 = (2z + 5)/3. L₂: (2x − 1)/2 = (y − 14)/m = (z + 12)/p. The non-singular matrix N = (−0.5 1 2; 1 b 4; −3 −2 c) maps L₁ onto L₂.",
    "parts": [
     {
      "code": "11",
      "prompt": "Find b, c, m and p, fully justifying your answers.",
      "marks": 9
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Sₙ = ∫₀ᵃ xⁿ sinh x dx, n ≥ 0.",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "Show that for n ≥ 2, Sₙ = n(n − 1)Sₙ₋₂ + aⁿ cosh a − naⁿ⁻¹ sinh a.",
      "marks": 7
     },
     {
      "code": "12(b)",
      "prompt": "Hence show ∫₀¹ x⁴ sinh x dx = (9/2)e + (65/2)e⁻¹ − 24.",
      "marks": 5
     }
    ]
   },
   {
    "number": 13,
    "scenario": "cos 6θ = 0 has solutions including θ = π/4 and θ = 3π/4.",
    "parts": [
     {
      "code": "13(a)",
      "prompt": "Find the other solutions for 0 ≤ θ ≤ π.",
      "marks": 2
     },
     {
      "code": "13(b)",
      "prompt": "Use de Moivre's theorem to show cos 6θ = 32cos⁶θ − 48cos⁴θ + 18cos²θ − 1.",
      "marks": 5
     },
     {
      "code": "13(c)",
      "prompt": "Using θ = π/4 and 3π/4, find a factor (a cos²θ + b) of 32cos⁶θ − 48cos⁴θ + 18cos²θ − 1, with a, b integers.",
      "marks": 4
     },
     {
      "code": "13(d)",
      "prompt": "Hence show cos(11π/12) = −√((2 + √3)/4).",
      "marks": 5
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 (1 1; 2 2)"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 −120°"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 r = (0, 3, 2)ᵀ + μ(4, 3, 2)ᵀ"
    ]
   },
   "5": {
    "type": "points",
    "points": [
     "M1 w = ½z − 1 (or states Σα, Σαβ, αβγ for the original)",
     "A1 z = 2w + 2 (or new sum of roots −4)",
     "M1 Substitutes into the original cubic (or new pairwise sum)",
     "M1 Simplifies (or new product of roots)",
     "A1 8w³ + 32w² + 30w + 3 = 0 (any correct form)"
    ]
   },
   "7": {
    "type": "points",
    "points": [
     "M1 Differentiates x and y",
     "A1 ẋ² + ẏ² = 144cos⁴t sin²t + 144sin⁴t cos²t",
     "B1 Uses cos² + sin² = 1: 144cos²t sin²t, root 12cos t sin t",
     "M1 Substitutes into S = 2π∫ y√(ẋ² + ẏ²) dt",
     "A1 S = 96π∫₀^(π/2) sin⁴t cos t dt with correct limits",
     "A1 Integrates to k sin⁵t",
     "R1 S = 96π/5"
    ]
   },
   "8": {
    "type": "points",
    "points": [
     "M1 Writes z = x + iy and substitutes into the first equation",
     "A1 y = 1 − x",
     "B1 (x − a)² + y² = 9, a circle centre (a, 0) radius 3",
     "M1 Solves simultaneously: 2x² − (2a + 2)x + a² − 8 = 0",
     "E1 Uses discriminant ≥ 0",
     "R1 (a − 1)² ≤ 18, so a ∈ [1 − 3√2, 1 + 3√2]"
    ]
   },
   "11": {
    "type": "points",
    "points": [
     "B1 A point on L₁ or L₂, e.g. (−1, 5, −5/2) on L₁",
     "B1 A direction for L₁ or L₂, e.g. (3, −2, 3/2) or (6, −4, 3)",
     "B1 Vector equations of both lines, e.g. L₂: (1/2, 14, −12) + μ(1, m, p)",
     "M1 Matrix equation: N × general point of L₁ = general point of L₂ (different parameters)",
     "M1 Collects and simplifies terms",
     "M1 Compares constant terms to get b or c",
     "A1 b = 5 and c = 2",
     "M1 Uses b and c to find m or p (μ = −λ)",
     "A1 m = 2 and p = 4"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "R1 Expands from (r + 1)² − r² = r² + 2r + 1 − r² = 2r + 1"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Writes the sum as Σ((r + 1)² − r²) and lists at least the first two or last two terms",
     "M1 Identifies and simplifies the two terms left after cancelling",
     "R1 (n + 1)² − 1 = n² + 2n, starting from Σ(2r + 1) and showing first two and last two terms"
    ]
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 States Σ r = ½n(n + 1)",
     "M1 Splits into 2Σr + Σ1 and uses the formula",
     "R1 2 × ½n(n + 1) + n = n² + 2n"
    ],
    "guidance": "Missing limits on the sigma signs condoned."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 (x − 3)² + y²/4 = 1"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1 Reflection in y = x"
    ],
    "guidance": "A correct sequence of transformations is condoned."
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1 Two ellipses, one crossing the positive x-axis and one the positive y-axis",
     "B1 Intercepts shown: E₂ at x = 2 and 4, E₃ at y = 2 and 4",
     "B1 At least one correct tangent (x = 2 or y = 2 condoned)",
     "B1 Both lines drawn and labelled correctly"
    ]
   },
   "6(d)": {
    "type": "points",
    "points": [
     "E1 E₃ is the reflection of E₂ in y = x",
     "E1 So the common tangent is perpendicular to y = x, gradient −1, giving x + y = c"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 r cos θ = 7/4, so x = 7/4",
     "E1 Hence perpendicular to the initial line (x-axis)"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Equation in θ or r: (7/4)sec θ = 3 + cos θ",
     "M1 Rearranges and solves: 4cos²θ + 12cos θ − 7 = 0",
     "E1 Rejects cos θ = −7/2 as outside [−1, 1]",
     "A1 cos θ = ½",
     "A1 (7/2, π/3) and (7/2, −π/3)"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 Identifies the region (sector of C minus triangle OPQ)",
     "B1 Triangle area = ½ × 7√3/2 × 7/4 = 49√3/16",
     "M1 k∫(3 + cos θ)² dθ",
     "M1 Uses cos²θ = ½cos 2θ + ½",
     "A1F Integrates their three-term expression correctly",
     "A1 Sector area 19π/6 + 25√3/8 (or half of it)",
     "A1 Area of R = 19π/6 + √3/16"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 Separates variables",
     "M1 Exponential form y = y₀e⁻ᵏᵗ",
     "M1 0.84y₀ = y₀e⁻ᵏ",
     "A1 k = 0.174"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Three-term equation with dy/dt",
     "A1F dy/dt = −0.174y + 45 + 20t (k may be used)"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "M1 CF + PI (or integrating factor)",
     "M1 PI of form p + qt (or parts on the teᵏᵗ term)",
     "A1F General solution y = Ae⁻⁰·¹⁷⁴ᵗ − 402 + 115t (q = 115, p = −402)",
     "M1 Uses y = 340 at t = 0 to find the constant",
     "A1 y = 742e⁻⁰·¹⁷⁴ᵗ − 402 + 115t"
    ]
   },
   "10(d)": {
    "type": "points",
    "points": [
     "E1 A valid limitation, e.g. births happen in a breeding season, not steadily",
     "E1 A second valid limitation, e.g. the population grows without limit in the long run"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "M1 Chooses integration by parts",
     "A1 u = xⁿ, v′ = sinh x giving u′ = nxⁿ⁻¹, v = cosh x",
     "A1 Sₙ = aⁿcosh a − n∫₀ᵃ xⁿ⁻¹cosh x dx",
     "M1 Integrates by parts again on ∫xʳ cosh x dx",
     "A1 Correct second result with limits: aⁿcosh a − n(aⁿ⁻¹sinh a − (n − 1)Sₙ₋₂)",
     "M1 Expresses Sₙ in terms of Sₙ₋₂",
     "R1 Rigorous completion with correct limits throughout"
    ]
   },
   "12(b)": {
    "type": "points",
    "points": [
     "M1 Recognises S₄ with a = 1, needing S₂ and S₀",
     "M1 Uses the reduction formula once: S₂ = 2S₀ + cosh 1 − 2sinh 1 = 3cosh 1 − 2sinh 1 − 2",
     "M1 Uses it a second time, with S₀ = cosh 1 − 1: S₄ = 12S₂ + cosh 1 − 4sinh 1 = 37cosh 1 − 28sinh 1 − 24",
     "M1 Converts cosh 1 and sinh 1 to exponentials",
     "R1 (9/2)e + (65/2)e⁻¹ − 24"
    ]
   },
   "13(a)": {
    "type": "points",
    "points": [
     "M1 At least two correct solutions",
     "A1 θ = π/12, 5π/12, 7π/12, 11π/12"
    ]
   },
   "13(b)": {
    "type": "points",
    "points": [
     "M1 Expands (cos θ + i sin θ)⁶",
     "M1 Equates real parts",
     "A1 cos⁶θ − 15cos⁴θ sin²θ + 15cos²θ sin⁴θ − sin⁶θ",
     "M1 Uses sin²θ = 1 − cos²θ",
     "R1 Rigorous completion to the given result"
    ]
   },
   "13(c)": {
    "type": "points",
    "points": [
     "M1 θ = π/4 (or 3π/4) also solves the polynomial equation from (b)",
     "M1 Factor theorem: (cos θ − 1/√2) and (cos θ + 1/√2) are factors",
     "M1 Multiplies the linear factors: cos²θ − ½",
     "R1 (2cos²θ − 1) is a factor (oe)"
    ]
   },
   "13(d)": {
    "type": "points",
    "points": [
     "M1 Divides by their quadratic factor: (2c² − 1)(16c⁴ − 16c² + 1), c = cos θ",
     "M1 Solves 16c⁴ − 16c² + 1 = 0 as a quadratic in c²",
     "E1 Explains its roots are the cosines of the angles in (a)",
     "A1 c = ±√((2 ± √3)/4)",
     "R1 11π/12 has the negative cosine of largest size, so cos(11π/12) = −√((2 + √3)/4)"
    ]
   }
  }
 },
 "fmath-aqa-7367-2021n-p3d": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Critical path analysis.",
    "parts": [
     {
      "code": "1",
      "prompt": "Which statement about critical path analysis is always true?\nOptions: Every activity network has exactly one critical path   Every critical activity has a non-zero float   The first activity on a critical path has earliest start time zero   A delay to a critical activity may not delay the project",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Pipe network with arcs labelled (lower, upper) capacity: A→B (1,8), A→D (3,7), A→C (4,19), B→E (0,10), B→D (4,9), D→E (3,9), C→D (2,11), F→D (7,7), D→H (2,14), C→F (1,18), E→G (2,15), E→H (0,16), F→H (4,10), F→I (3,11). (Diagram on the question paper.)",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the value of the cut {A, B, C, D, E} | {F, G, H, I}.\nOptions: 56   58   63   70",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A mine has entrance X and 8 ventilation shafts A–H. Possible tunnels with estimated precious metal (tonnes): GH 5.5, GD 2.0, GE 4.5, DE 4.0, EF 2.0, FH 2.0, HC 2.0, AD 3.0, DB 2.0, BE 3.0, EC 2.0, FC 2.5, AB 2.5, BC 3.5, AX 2.5, BX 3.0, XC 2.0. (Network diagram on the question paper.) Only 8 tunnels can be dug, and every shaft must be reachable from the entrance.",
    "parts": [
     {
      "code": "3(a)(i)",
      "prompt": "To maximise the metal extracted, determine which tunnels should be dug.",
      "marks": 2
     },
     {
      "code": "3(a)(ii)",
      "prompt": "Estimate the maximum amount of metal that can be extracted.",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Comment on why the true maximum may differ from your answer to (a)(ii).",
      "marks": 2
     },
     {
      "code": "3(c)",
      "prompt": "Tunnel CF is now banned. Determine any effect on your answers to (a)(i) and (a)(ii).",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "scenario": "A tanker starts and ends at refinery O and delivers to stations A–F. Road distances (miles): AB 13, AE 14, AC 7, BC 8, CE 13, CD 11, CF 12, BO 12, BF 15, OF 10, DE 6, DF 6, EF 11. (Network diagram on the question paper.) Each delivery takes 30 minutes; average driving speed is 40 mph. T minutes is the minimum total time to deliver to all six stations and return.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Use the nearest neighbour algorithm from O to find an upper bound for T.",
      "marks": 5
     },
     {
      "code": "4(b)",
      "prompt": "Road CE cannot be used by tankers. State, with a reason, the effect on your answer to (a).",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Groups. In the multiplicative group of integers modulo 13, G = (⟨10⟩, ×₁₃).",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Describe the conditions for a set S under a binary operation * to be a group.",
      "marks": 3
     },
     {
      "code": "5(b)(i)",
      "prompt": "Explain why G is abelian.",
      "marks": 1
     },
     {
      "code": "5(b)(ii)",
      "prompt": "Find the order of G.",
      "marks": 2
     },
     {
      "code": "5(c)",
      "prompt": "State the identity element of G and prove that it is the identity, with full justification.",
      "marks": 3
     },
     {
      "code": "5(d)",
      "prompt": "Find all proper non-trivial subgroups of G, in the form (⟨g⟩, ×₁₃) with integer g < 13.",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Planar graphs.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "A connected planar graph has (x + 1)² vertices, (25 + 2x − 2y) edges and (y − 1)² faces, where x > 0 and y > 0. Find the possible numbers of vertices, edges and faces.",
      "marks": 6
     },
     {
      "code": "6(b)",
      "prompt": "Explain, with full justification, why the complete graph K₆ is not planar.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Zero-sum game, pay-off matrix for Avon (rows A₁, A₂, A₃; Roj's columns R₁, R₂, R₃): A₁ (3 1 4); A₂ (2 3 2); A₃ (6 2 1). There is no stable solution. p₁, p₂, p₃ are the probabilities Avon plays A₁, A₂, A₃ and v is the value of the game for Avon.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Formulate Avon's problem of finding his optimal mixed strategy as a linear programming problem.",
      "marks": 4
     },
     {
      "code": "7(b)(i)",
      "prompt": "Complete the initial Simplex tableau (columns P, v, p₁, p₂, p₃, …, value).",
      "marks": 3
     },
     {
      "code": "7(b)(ii)",
      "prompt": "Perform one iteration of the Simplex algorithm.",
      "marks": 3
     },
     {
      "code": "7(c)(i)",
      "prompt": "Part of the final tableau gives p₁ = 0.25, p₂ = 0.70, p₃ = 0.05 (rows with 1 in one p column, 0 in the others). Find Avon's optimal mixed strategy.",
      "marks": 1
     },
     {
      "code": "7(c)(ii)",
      "prompt": "Find the value of the game for Avon.",
      "marks": 1
     },
     {
      "code": "7(d)",
      "prompt": "Roj always plays R₂. Explain how Avon's strategy from (c)(i) should change and find his maximum expected pay-off.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 C: the first activity on a critical path has earliest start time zero"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 A: 56"
    ]
   },
   "3(a)(i)": {
    "type": "points",
    "points": [
     "M1 Models as a maximum spanning tree, listing at least 4 correct arcs",
     "A1 All 8 arcs: XB 3.0, BC 3.5, BE 3.0, EG 4.5, GH 5.5, DE 4.0, AD 3.0, CF 2.5"
    ],
    "guidance": "E.g. by Prim's algorithm adapted to choose the largest arc each time."
   },
   "3(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Adds the weights of their 8 arcs",
     "A1F 29 tonnes (with units), follow through from their tree"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "E1 The arc weights are only estimates, so 29 tonnes is an estimate",
     "E1 So the true maximum could be more or less than 29 tonnes"
    ]
   },
   "3(c)": {
    "type": "points",
    "points": [
     "M1 Considers removing CF from their tree (replace with EF or HF)",
     "A1 Estimate falls by 0.5 tonnes to 28.5 tonnes (CAO; condone no units)"
    ],
    "guidance": "The scheme's typical solution says EF and HF have weight 3.0; on the network both are 2.0, which is what gives the 0.5 drop."
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Nearest neighbour cycle from O: O–F–D–E–C–A–B–O (condone omitting B–O)",
     "A1 Distance 10 + 6 + 6 + 13 + 7 + 13 + 12 = 67 miles",
     "A1F Driving time (67/40) × 60 = 100.5 minutes, from their distance",
     "M1 Delivery time 6 × 30 = 180 minutes",
     "A1 Upper bound T = 280.5 minutes (CAO)"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 CE was in the cycle; A is now nearest to E, so AE is used (then AC)",
     "A1 New cycle O–F–D–E–A–C–B–O = 63 miles, so the bound drops by 6 to 274.5 minutes"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 Names at least three of the conditions, or describes one correctly",
     "B1 Describes at least two conditions correctly",
     "B1 Describes all four correctly and no others: closure (a*b ∈ S), identity (e*a = a = a*e), inverses (a*b = e = b*a), associativity ((a*b)*c = a*(b*c))"
    ]
   },
   "5(b)(i)": {
    "type": "points",
    "points": [
     "E1 Multiplication modulo n is commutative, so G is abelian"
    ]
   },
   "5(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Finds 10² ≡ 9 and 10³ ≡ 12 (mod 13)",
     "A1 Powers 10, 9, 12, 3, 4, 1, so the order of G is 6"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "B1 Identity is 1",
     "M1 Shows that multiplying any element g by 1 leaves it unchanged (left or right)",
     "R1 Full proof: 1 ×₁₃ g = g and g ×₁₃ 1 = g (or uses commutativity/abelian property), with conclusion"
    ]
   },
   "5(d)": {
    "type": "points",
    "points": [
     "B1 At least one correct subgroup (condone poor notation)",
     "B1 Both (⟨9⟩, ×₁₃) and (⟨12⟩, ×₁₃) and no others"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Uses Euler's formula V − E + F = 2",
     "A1 (x + 1)² − (25 + 2x − 2y) + (y − 1)² = 2",
     "M1 Expands and simplifies",
     "A1 x² + y² = 25, so x = 3, y = 4 or x = 4, y = 3",
     "A1 One correct set: V = 16, E = 23, F = 9 (or V = 25, E = 27, F = 4)",
     "A1 Both sets and no others"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "E1 K₆ contains K₅ (or K₃,₃) as a subgraph",
     "R1 By Kuratowski's theorem a graph containing a subdivision of K₅ or K₃,₃ is non-planar, so K₆ is not planar"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 At least one correct expression in p₁, p₂, p₃ from the matrix",
     "A1 3p₁ + 2p₂ + 6p₃ ≥ v, p₁ + 3p₂ + 2p₃ ≥ v, 4p₁ + 2p₂ + p₃ ≥ v",
     "B1 p₁ + p₂ + p₃ ≤ 1",
     "A1 Maximise P = v subject to these, with p₁, p₂, p₃ ≥ 0"
    ]
   },
   "7(b)(i)": {
    "type": "points",
    "points": [
     "M1 Four slack variables s₁–s₄ in the headings",
     "A1 Two rows correct",
     "A1 All rows correct"
    ],
    "guidance": "Columns P, v, p₁, p₂, p₃, s₁, s₂, s₃, s₄, value: (1 −1 0 0 0 0 0 0 0 | 0); (0 1 −3 −2 −6 1 0 0 0 | 0); (0 1 −1 −3 −2 0 1 0 0 | 0); (0 1 −4 −2 −1 0 0 1 0 | 0); (0 0 1 1 1 0 0 0 1 | 1)."
   },
   "7(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Modifies at least one non-pivot row correctly",
     "A1 At least three rows correct",
     "A1 All rows correct"
    ],
    "guidance": "Pivot on v in the s₁ row: (1 0 −3 −2 −6 1 0 0 0 | 0); (0 1 −3 −2 −6 1 0 0 0 | 0); (0 0 2 −1 4 −1 1 0 0 | 0); (0 0 −1 0 5 −1 0 1 0 | 0); (0 0 1 1 1 0 0 0 1 | 1)."
   },
   "7(c)(i)": {
    "type": "points",
    "points": [
     "B1 Play A₁ with probability 0.25, A₂ with 0.70, A₃ with 0.05"
    ]
   },
   "7(c)(ii)": {
    "type": "points",
    "points": [
     "B1 v = 3 × 0.25 + 2 × 0.70 + 6 × 0.05 = 2.45"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "E1 Avon should play A₂ every time",
     "E1 Maximum expected pay-off 3"
    ]
   }
  }
 },
 "fmath-aqa-7367-2021n-p3m": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "A spring of natural length 50 cm and modulus λ N stores 4 J of elastic potential energy when compressed by 5 cm.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find λ.\nOptions: 8   16   800   1600",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "A couple is formed by two 7 N forces acting perpendicular to a 20 cm rod, one at each end, in opposite directions. (Diagram on the question paper.)",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the magnitude of the moment of the couple.\nOptions: 1.4 N m   2.8 N m   140 N m   280 N m",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A 0.4 kg ball moving at 6 m s⁻¹ is hit by a bat and leaves at 8 m s⁻¹, perpendicular to its original direction.",
    "parts": [
     {
      "code": "3",
      "prompt": "Show that the impulse on the ball has magnitude 4 N s.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "A spring has stiffness k.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find the dimensions of k.",
      "marks": 1
     },
     {
      "code": "4(b)",
      "prompt": "A particle of mass m kg hangs on the spring and oscillates vertically with period t seconds. A model is t = p m^a g^b k^c, with p dimensionless and g m s⁻² the acceleration due to gravity. Find a, b and c for dimensional consistency.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "A uniform lamina occupies the region bounded by y = x² + 1, x = 0, x = 4 and y = 0. (Diagram on the question paper.)",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find the exact coordinates of the centre of mass.",
      "marks": 4
     },
     {
      "code": "5(b)",
      "prompt": "The lamina hangs freely in equilibrium from the point where the curve meets x = 4. Find, to the nearest degree, the angle between the vertical and the longest straight edge.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "A ball of mass m kg is dropped from rest at height h m onto a horizontal surface; the coefficient of restitution is e.",
    "parts": [
     {
      "code": "6",
      "prompt": "Prove that the kinetic energy lost in the first bounce is mgh(1 − e²).",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "A sphere hangs from O on a light string of length 1.5 m. A thin horizontal bar lies 0.9 m directly below O, perpendicular to the plane of motion. The sphere is released from rest with the string taut at angle α to the downward vertical. After the string catches on the bar, it goes slack when the angle between the two sections of string is 60°. Ben's diagram (on the question paper) shows the sphere starting level with the bar (string from O at angle α), swinging down under the bar and round it, and the string going slack at a point drawn above the bar's level, so higher than the starting position; the angle there, between the upward vertical through the bar and the string, is labelled 60° but drawn much narrower (about 25°).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Give two reasons why Ben's diagram represents the situation poorly.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Sketch an improved diagram.",
      "marks": 1
     },
     {
      "code": "7(c)",
      "prompt": "Find α to the nearest degree.",
      "marks": 6
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Use g = 9.8 m s⁻². A lift raises a 250 kg crate from rest at x = 0 with upward force P = k(x + 1)(12 − x) + 2450 N, where x m is the height risen and k is a constant.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that the work done by P as the crate rises 12 m is 29400 + 360k.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "The speed at a height of 12 m is 3 m s⁻¹. Find the speed at 15 m.",
      "marks": 5
     },
     {
      "code": "8(c)",
      "prompt": "Find the height at which the crate's speed becomes zero.",
      "marks": 2
     },
     {
      "code": "8(d)",
      "prompt": "Explain why ignoring air resistance is reasonable here.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Use g = 9.81 m s⁻². A conical pendulum: a 0.2 kg sphere on an elastic string (natural length 1.6 m, modulus 200 N) moves in a horizontal circle of radius 0.5 m at v m s⁻¹, with the string at angle α to the vertical.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Show that 62.5 − 200 sin α = 1.962 tan α.",
      "marks": 5
     },
     {
      "code": "9(b)",
      "prompt": "Use your calculator to find α.",
      "marks": 1
     },
     {
      "code": "9(c)",
      "prompt": "Find v.",
      "marks": 4
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 D: 1600"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 A: 1.4 N m"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "M1 Uses vectors or a diagram for the momentum change, e.g. u = 6i, v = 8j",
     "M1 Impulse = change in momentum in 2D: I = 0.4 × 8j − 0.4 × 6i = −2.4i + 3.2j",
     "R1 |I| = √(2.4² + 3.2²) = 4 N s from a valid argument"
    ]
   },
   "6": {
    "type": "points",
    "points": [
     "B1 Impact speed U = √(2gh) (or U² or KE in terms of h)",
     "M1 Rebound speed V = e√(2gh)",
     "M1 KE lost = ½mU² − ½mV²",
     "R1 = mgh − mghe² = mgh(1 − e²), rigorous argument"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 MT⁻² (CAO)"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Sets up T = Mᵃ(LT⁻²)ᵇ(MT⁻²)ᶜ with at least two dimensions right",
     "M1 Three equations: a + c = 0, b = 0, −2b − 2c = 1",
     "A1 a = ½, b = 0, c = −½"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 Area (mass) ∫₀⁴ (x² + 1) dx = 76/3",
     "M1 x̄ from (76/3)x̄ = ∫₀⁴ (x³ + x) dx = 72 (condone missing density)",
     "M1 ȳ from (76/3)ȳ = ½∫₀⁴ (x² + 1)² dx = 3772/30 (condone missing density)",
     "A1 (54/19, 943/190) as exact fractions"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Diagram with centre of mass below the suspension point (4, 17) and the angle marked (PI)",
     "M1 tan α = (4 − 54/19)/(17 − 943/190)",
     "A1F α = 5°, follow through from (a)"
    ],
    "guidance": "The longest straight edge is the vertical edge x = 4, length 17."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "E1 The 60° angle is drawn too small",
     "E1 The sphere must start higher than the point where the string goes slack"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 Sketch with the sphere starting above the level at which the string goes slack"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "B1 Introduces mass m and uses it in an equation",
     "M1 Radial Newton's second law at the slack point (radius 0.6 m, T = 0): mg cos 60° = mv²/0.6",
     "A1 v² = 0.6g cos 60°",
     "M1 Three-term energy equation with their v",
     "A1 Correct energy equation, e.g. GPE zero at bar: mgh = ½m(0.6g cos 60°) + mg(0.6 cos 60°), giving h = 0.45",
     "A1 cos α = 0.45/1.5 = 0.3, so α = 73°"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Work done = ∫ P dx (condone missing dx)",
     "A1 ∫₀¹² [k(x + 1)(12 − x) + 2450] dx with correct limits",
     "R1 Rigorous evaluation to 360k + 29400"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Energy equation for k: 29400 + 360k = 250 × 9.8 × 12 + ½ × 250 × 3²",
     "A1 360k = 1125, k = 25/8",
     "M1 Work done from 0 to 15 m (or 12 to 15 m): 36750 + (25/8)(585/2)",
     "M1 Energy equation for speed at 15 m: 36750 + (25/8)(585/2) = 250 × 9.8 × 15 + ½ × 250v²",
     "A1 v = 2.7 m s⁻¹ (2.704) to 2 s.f. with units"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 Equation for x (PI): 12kx + 11kx²/2 − kx³/3 = 0",
     "A1 Roots 0, 18.45, −1.95, so height 18 m (awrt 18; condone missing units)"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "E1 The crate moves at very low speeds"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Relates string length to radius: (1.6 + e) sin α = 0.5",
     "M1 Hooke's law: T = 200(0.5/sin α − 1.6)/1.6 = 62.5/sin α − 200",
     "M1 Resolves vertically: T cos α = 0.2g = 1.962",
     "M1 Eliminates tension and extension: 1.962/cos α = 62.5/sin α − 200",
     "R1 Multiplies by sin α to reach 1.962 tan α = 62.5 − 200 sin α, with justification for tan α"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "B1 α = 18.0° (awrt 18)"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "B1 T = 1.962/cos 18.02° = 2.0632",
     "M1 Resolves horizontally: T sin α = 0.2v²/0.5",
     "A1 Correct equation",
     "A1 v = 1.26 m s⁻¹ (3 s.f.)"
    ]
   }
  }
 },
 "fmath-aqa-7367-2021n-p3s": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "X has a discrete uniform distribution on 1, 2, 3, …, 10.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find P(X ≥ 7).\nOptions: 0.3   0.4   0.6   0.7",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "X is a random variable with variance Var(X); a and b are non-zero constants.",
    "parts": [
     {
      "code": "2",
      "prompt": "Which expression equals Var(aX + b)?\nOptions: aVar(X)   aVar(X) + b   a²Var(X)   a²Var(X) + b",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A game scores 10, 20 or 30 points. P(20) is twice P(30) and half P(10).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find the mean score for one game, to 2 decimal places.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "Mina's father multiplies her score by 5, subtracts 10, and gives her that many pence (to the nearest penny). Find the expected amount she receives.",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Oscar uses a random sample of 150 June days to build a 95% confidence interval of width 0.8 °C for the mean daily maximum temperature in a village, assuming a normal distribution.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find the sample standard deviation to 3 significant figures.",
      "marks": 3
     },
     {
      "code": "4(b)",
      "prompt": "The sample mean is 25.3 °C. Oscar claims the population mean is 26.0 °C. Does the interval support his claim? Explain.",
      "marks": 2
     },
     {
      "code": "4(c)",
      "prompt": "Explain how Oscar could make his 95% interval narrower.",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Continuous X has cumulative distribution function F(x) = 0 for x ≤ 1; (1/10)x − 1/10 for 1 < x ≤ 6; (1/90)x² + 1/10 for 6 < x ≤ 9; 1 for x > 9.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find the probability density function f(x).",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Show that Var(X) = 6737/1200.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Danai tests for association between town and the yearly number of speeding offences.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "State the hypotheses.",
      "marks": 1
     },
     {
      "code": "6(b)(i)",
      "prompt": "In her n × m contingency table (n > 3, m > 3) one expected frequency is below 5. Explain what she should do before computing the test statistic.",
      "marks": 2
     },
     {
      "code": "6(b)(ii)",
      "prompt": "Give an expression for the test statistic.",
      "marks": 1
     },
     {
      "code": "6(c)",
      "prompt": "The test statistic is 45.22 with 25 degrees of freedom. Determine the outcome at the 1% level.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "X is exponentially distributed with parameter λ.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Prove that E(X) = 1/λ.",
      "marks": 4
     },
     {
      "code": "7(b)",
      "prompt": "Prove that Var(X) = 1/λ².",
      "marks": 7
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Monthly complaints X over 60 months: Σx = 102, Σ(x − x̄)² = 103.25. Complaints per month are modelled as Po(1.7) and, independently, enquiries per month as Po(5.2).",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Use the data to explain why Po(1.7) may be a suitable model for monthly complaints.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "After a new product launches, one randomly chosen month has 3 complaints and enquiries in total. Test at the 10% level whether the mean monthly total has changed.",
      "marks": 6
     },
     {
      "code": "8(c)",
      "prompt": "The mean monthly total is later found to be 6.1. Find the power of the test in (b), to 4 decimal places.",
      "marks": 4
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 B: 0.4"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 C: a²Var(X)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Probabilities 4a, 2a, a for 10, 20, 30 with 7a = 1, so a = 1/7",
     "M1 E(X) = 10 × 4/7 + 20 × 2/7 + 30 × 1/7",
     "A1 15.71 points (awrt)"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Uses E(5X − 10) = 5E(X) − 10 (condone sign error), or recalculates with the transformed variable",
     "A1F 5 × 15.71 − 10 = 69 pence (awrt 69; ft their mean)"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 z = 1.96 (awrt; PI)",
     "M1 Half-width 0.4 = 1.96 × s/√150, solved for s (PI)",
     "A1 s = 2.50 °C (awrt; accept 2.5)"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 Upper limit 25.3 + 0.4 = 25.7",
     "E1F 26 > 25.7 is outside the interval, so it does not support the claim (ft their upper limit)"
    ]
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 Take a larger random sample"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Differentiates to get 1/10 or x/45",
     "A1 f(x) = 1/10 for 1 < x ≤ 6; x/45 for 6 < x ≤ 9; 0 otherwise"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 E(X) = ∫₁⁶ x/10 dx + ∫₆⁹ x²/45 dx",
     "M1 E(X²) = ∫₁⁶ x²/10 dx + ∫₆⁹ x³/45 dx",
     "A1 E(X) = 5.55 or E(X²) = 437/12 (accept awrt 36.4; PI)",
     "R1 Var(X) = 437/12 − 5.55² = 6737/1200, rigorous"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 H₀: no association between town and number of speeding offences per year; H₁: there is an association"
    ],
    "guidance": "Variables must be named in at least H₀."
   },
   "6(b)(i)": {
    "type": "points",
    "points": [
     "E1 Merge the row or column containing the expected frequency below 5 with another suitable row or column",
     "E1 Do this for both the observed and expected frequencies"
    ]
   },
   "6(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Σ (O − E)²/E"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "R1 Compares with the critical value χ²₂₅(1%) = 44.314: 45.22 > 44.314",
     "E1 Reject H₀",
     "E1F Some evidence of association between town and number of speeding offences per year (not definite; ft their decision)"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 E(X) = lim(k→∞) ∫₀ᵏ λx e^(−λx) dx (condone ∫₀^∞, missing dx, sign slip in power)",
     "A1F Integration by parts: [−x e^(−λx)]₀ᵏ + ∫₀ᵏ e^(−λx) dx",
     "M1 Integrates e^(−λx) to −(1/λ)e^(−λx)",
     "R1 Rigorous completion: 0 − (−1/λ) = 1/λ (condone no limiting process)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 E(X²) = lim(k→∞) ∫₀ᵏ λx² e^(−λx) dx",
     "A1F Parts once: [−x² e^(−λx)]₀ᵏ + ∫₀ᵏ 2x e^(−λx) dx",
     "A1F Parts twice: [−(2/λ)x e^(−λx)]₀ᵏ + ∫₀ᵏ (2/λ) e^(−λx) dx",
     "M1 Integrates (2/λ)e^(−λx) to −(2/λ²)e^(−λx)",
     "A1 E(X²) = 2/λ²",
     "M1 Var(X) = E(X²) − (E(X))² = 2/λ² − (1/λ)²",
     "R1 Rigorous completion to 1/λ² (condone no limiting process)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 x̄ = 102/60 = 1.7",
     "B1 s² = 103.25/59 = 1.75",
     "E1 Mean ≈ variance, so Po(1.7) is appropriate (both values seen; condone σ²)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 H₀: λ = 6.9, H₁: λ ≠ 6.9 (or in terms of 1.7 and 5.2)",
     "M1 Uses Po(6.9) for the total",
     "A1 P(X ≤ 3) = 0.087 (awrt)",
     "R1 Compares with 0.05 (two-tailed): 0.087 > 0.05",
     "E1 Do not reject H₀",
     "E1F No evidence that the mean total per month has changed (not definite; ft)"
    ],
    "guidance": "The scheme's conclusion says 'per day'; the question is per month."
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 P(X ≤ 2) = 0.031 or P(X ≥ 12) = 0.049 under Po(6.9) (PI)",
     "A1 Critical region X ≤ 2 or X ≥ 12",
     "M1 Uses Po(6.1)",
     "A1 Power = P(Y ≤ 2) + P(Y ≥ 12) = 0.05765 + 0.02244 = 0.0801 (awrt)"
    ],
    "guidance": "The scheme prints P(X ≤ 2) = 0.031; under Po(6.9) it is 0.0320 (3 s.f.). Either tail is still below 0.05, so the critical region is unchanged."
   }
  }
 },
 "fmath-aqa-7367-2019-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Largest possible domain {x : |x| < 1}.",
    "parts": [
     {
      "code": "1",
      "prompt": "Which function has {x : |x| < 1} as its greatest possible domain?\nOptions: cosh x   cosh⁻¹x   tanh x   tanh⁻¹x",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "The Maclaurin series of f(x) begins x − ½x³ (first two non-zero terms).",
    "parts": [
     {
      "code": "2",
      "prompt": "Which could be f(x)?\nOptions: xe^(½x²)   ½sin 2x   x cos x   (1 + x³)^(−½)",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "f(x) = x² − 1.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find the mean value of f(x) between x = −0.5 and x = 1.7, to 3 s.f.\nOptions: −0.521   −0.434   −0.237   0.786",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Complex equation 2z − 5iz* = 12.",
    "parts": [
     {
      "code": "4",
      "prompt": "Solve the equation.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Plane r·(1, 1, 1)ᵀ = 7; line r = (2, 0, 1)ᵀ + μ(1, 0, 1)ᵀ.",
    "parts": [
     {
      "code": "5",
      "prompt": "Find the acute angle between the line and the plane, to the nearest 0.1°.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Hyperbolic powers.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Show cosh³x + sinh³x = ¼e^(mx) + ¾e^(nx) for integers m and n.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Hence write cosh⁶x − sinh⁶x as (a cosh(kx) + b)/8 with integers a, b, k.",
      "marks": 5
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Non-singular square matrices with AR = B, where R is a rotation through θ about the z-axis and B = (−cos θ sin θ 0; sin θ cos θ 0; 0 0 1).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that A does not depend on θ.",
      "marks": 3
     },
     {
      "code": "7(b)",
      "prompt": "Fully describe the single transformation given by A.",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "z = cos θ + i sin θ.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Use de Moivre's theorem to prove zⁿ − 1/zⁿ = 2i sin nθ.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "Write sin⁵θ in terms of sin 5θ, sin 3θ and sin θ.",
      "marks": 4
     },
     {
      "code": "8(c)",
      "prompt": "Hence show ∫₀^(π/3) sin⁵θ dθ = 53/480.",
      "marks": 3
     }
    ]
   },
   {
    "number": 9,
    "scenario": "z³ = √2 − √6 i.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Solve, giving roots as re^(iθ) with r > 0 and 0 ≤ θ < 2π.",
      "marks": 5
     },
     {
      "code": "9(b)",
      "prompt": "The matrix M = (5 1; 1 3) transforms the points representing the roots on an Argand diagram. Find the exact area of the shape made by joining the image points.",
      "marks": 4
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Line L passes through A(5, −4, 6) and B(6, −6, 8); C is (15, −5, 9).",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Find the coordinates of D, the point on L nearest to C.",
      "marks": 6
     },
     {
      "code": "10(b)",
      "prompt": "Hence find the exact shortest distance from C to L.",
      "marks": 2
     }
    ]
   },
   {
    "number": 11,
    "scenario": "x dy/dx − 2y = x³/√(4 − 2x − x²), for 0 < x < √5 − 1.",
    "parts": [
     {
      "code": "11",
      "prompt": "Find the general solution.",
      "marks": 7
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Planes 4x − 5y + z = 8, 3x + 2y − kz = 6, (k − 2)x + ky − 8z = 6 (k real) do not meet at a unique point.",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "Find the possible values of k.",
      "marks": 3
     },
     {
      "code": "12(b)",
      "prompt": "For each k, identify the configuration of the planes with full justification, saying whether the system is consistent.",
      "marks": 5
     }
    ]
   },
   {
    "number": 13,
    "scenario": "z³ + kz² + 9 = 0 has roots α, β, γ. The equation 9z³ − 40z² + rz + s = 0 has roots αβ + γ, βγ + α, γα + β.",
    "parts": [
     {
      "code": "13(a)(i)",
      "prompt": "Show α² + β² + γ² = k².",
      "marks": 3
     },
     {
      "code": "13(a)(ii)",
      "prompt": "Show α²β² + β²γ² + γ²α² = −18k.",
      "marks": 4
     },
     {
      "code": "13(b)(i)",
      "prompt": "Show k = −40/9.",
      "marks": 1
     },
     {
      "code": "13(b)(ii)",
      "prompt": "Without finding α, β, γ, find s, with justification.",
      "marks": 6
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Take g = 10 m s⁻². A mass m sits on a light spring fixed to the base of a long oil-filled tube (diagram on the question paper); compression ε m gives thrust 9mε N. The mass is released from rest with compression 20/9 m. The oil gives resistance 6mv N at speed v m s⁻¹. x m is the displacement above the starting point after t s.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Find x in terms of t.",
      "marks": 10
     },
     {
      "code": "14(b)",
      "prompt": "State, with a reason, the type of damping.",
      "marks": 1
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Part of a spiral curve (diagram on the question paper). P has polar coordinates (r, θ), 0 ≤ θ ≤ π/2; O is the pole; T and S lie on the initial line (S beyond T); TPQ is the tangent at P.",
    "parts": [
     {
      "code": "15(a)",
      "prompt": "Show the gradient of TPQ is ((dr/dθ)sin θ + r cos θ)/((dr/dθ)cos θ − r sin θ).",
      "marks": 4
     },
     {
      "code": "15(b)",
      "prompt": "The curve is r = e^((cot b)θ), with constant 0 < b < π/2. Using (a), show the angle between OP and TPQ is independent of θ.",
      "marks": 7
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 tanh⁻¹x (D)"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 x cos x (C)"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 −0.237 (C)"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "M1 Writes z = x + iy and z* = x − iy correctly in the equation",
     "M1 Equates real and imaginary parts: 2x − 5y = 12, 2y − 5x = 0",
     "M1 Solves correctly (correct conjugate used)",
     "A1 z = −8/7 − (20/7)i"
    ]
   },
   "5": {
    "type": "points",
    "points": [
     "M1 Scalar product of normal and direction: 2",
     "M1 Divides by product of magnitudes √3 × √2: cos α = 2/√6",
     "A1 Angle = 90° − α = 54.7°"
    ],
    "guidance": "Either M1 implied by awrt 35° seen."
   },
   "11": {
    "type": "points",
    "points": [
     "M1 Divides by x: dy/dx − 2y/x = x²/√(4 − 2x − x²)",
     "M1 Integrating factor e^(−2 ln x) = x⁻²",
     "M1 Multiplies through by their integrating factor",
     "A1 LHS integrates to y/x²",
     "M1 Completes the square: 4 − 2x − x² = 5 − (x + 1)²",
     "M1 Uses an inverse sine (or inverse cosh/sinh) to integrate their RHS",
     "A1 y = x²(sin⁻¹((x + 1)/√5) + c)"
    ],
    "guidance": "Answer as y/x² = … accepted."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Uses exponential forms of cosh x and sinh x",
     "A1 Correct expansions: cosh³x = ⅛(e³ˣ + 3eˣ + 3e⁻ˣ + e⁻³ˣ), sinh³x = ⅛(e³ˣ − 3eˣ + 3e⁻ˣ − e⁻³ˣ)",
     "R1 Rigorous argument giving ¼e³ˣ + ¾e⁻ˣ, with definitions stated"
    ],
    "guidance": "No method shown scores 0/3."
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1 cosh³x − sinh³x = ¾eˣ + ¼e⁻³ˣ",
     "M1 Uses difference of two squares to write cosh⁶x − sinh⁶x in exponentials",
     "A1F Their correct product, e.g. (3/16)e⁴ˣ + 9/16 + 1/16 + (3/16)e⁻⁴ˣ",
     "M1 Extracts (3/8)cosh 4x or equivalent",
     "R1 Rigorous completion: (3 cosh 4x + 5)/8"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 R⁻¹ = (cos θ sin θ 0; −sin θ cos θ 0; 0 0 1)",
     "M1 A = BR⁻¹ (post-multiplies B by R⁻¹)",
     "R1 A = (−1 0 0; 0 1 0; 0 0 1), with a conclusion that A is independent of θ"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "E1 Reflection in the plane x = 0 (the y–z plane)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 zⁿ = cos nθ + i sin nθ",
     "B1 1/zⁿ = cos(−nθ) + i sin(−nθ) = cos nθ − i sin nθ",
     "R1 Rigorous subtraction giving 2i sin nθ, using odd/even properties"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Expands (z − 1/z)⁵ = z⁵ − 5z³ + 10z − 10z⁻¹ + 5z⁻³ − z⁻⁵",
     "M1 Groups into three pairs zⁿ − z⁻ⁿ",
     "M1 Replaces each pair with 2i sin nθ: 32i sin⁵θ = 2i sin 5θ − 10i sin 3θ + 20i sin θ",
     "A1 sin⁵θ = (1/16)sin 5θ − (5/16)sin 3θ + (5/8)sin θ"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 Integrates correctly: [−(1/80)cos 5θ + (5/48)cos 3θ − (5/8)cos θ]",
     "M1 Clear substitution of limits π/3 and 0",
     "R1 Rigorous completion to 53/480"
    ],
    "guidance": "No method shown scores 0/3."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 z³ = 2√2 e^(−πi/3) (correct r and θ, possibly implied)",
     "B1F Modulus of z = √2 (awrt 1.41 or (2√2)^(1/3))",
     "M1 Divides their argument by 3",
     "A1 Three correct arguments 5π/9, 11π/9, 17π/9",
     "A1 z = √2e^(5πi/9), √2e^(11πi/9), √2e^(17πi/9)"
    ],
    "guidance": "Negative equivalents −7π/9, −π/9 accepted for the angles."
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Area of their triangle 3 × ½ × √2 × √2 × sin(2π/3), or applies M to the three points",
     "A1 Original area 3√3/2, or three correct image points",
     "M1 det M = 14 used as area scale factor, or area of the new triangle found",
     "A1 21√3 in exact form"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 Equation of L (one error in direction allowed)",
     "A1 r = (5, −4, 6)ᵀ + μ(1, −2, 2)ᵀ",
     "B1F Vector joining C and a general point of L (scheme calls it line to C): (−10 + μ, 1 − 2μ, −3 + 2μ)ᵀ, i.e. from C to the line",
     "M1 Scalar product with direction (1, −2, 2)ᵀ set to 0",
     "A1F μ = 2",
     "A1 D = (7, −8, 10)"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Components of CD = D − C = (−8, −3, 1) (magnitudes must be correct, sign ignored; one error allowed)",
     "A1F CD = √74"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "M1 Sets the coefficient determinant to 0",
     "M1 Forms and solves a quadratic: 9k² − 9k − 180 = 0",
     "A1 k = 5 and k = −4"
    ]
   },
   "12(b)": {
    "type": "points",
    "points": [
     "M1 Substitutes their first k with a valid method (e.g. row reduction)",
     "M1 k = 5: shows equations are consistent, with working",
     "A1 k = 5: planes form a sheaf meeting in a common line",
     "B1 k = −4: inconsistent, since equations 2 and 3 become 3x + 2y + 4z = 6 and −6x − 4y − 8z = 6",
     "B1 k = −4: two parallel distinct planes, with the third crossing both"
    ]
   },
   "13(a)(i)": {
    "type": "points",
    "points": [
     "M1 Expands (α + β + γ)² correctly",
     "B1 Uses α + β + γ = −k and αβ + βγ + γα = 0",
     "R1 Rigorous completion (α + β + γ = k not condoned here)"
    ]
   },
   "13(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Expands (αβ + βγ + γα)²",
     "M1 Writes Σα²β² in terms of symmetric functions: (Σαβ)² − 2αβγ(α + β + γ)",
     "B1 αβγ = −9",
     "R1 Rigorous completion to −18k"
    ]
   },
   "13(b)(i)": {
    "type": "points",
    "points": [
     "R1 Sum of new roots = Σαβ + Σα = 40/9, with Σα = −k and Σαβ = 0, gives k = −40/9"
    ]
   },
   "13(b)(ii)": {
    "type": "points",
    "points": [
     "B1 −s/9 = (αβ + γ)(βγ + α)(γα + β)",
     "M1 Expands the product (one or two errors allowed)",
     "M1 Groups degree-5 terms as αβγ(α² + β² + γ²)",
     "M1 Collects the rest as (αβγ)² + αβγ + Σα²β², with (αβγ)² = 81",
     "M1 Substitutes values: 81 − 9 − 18k − 9k² = −232/9",
     "R1 s = 232 from correct reasoning"
    ]
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Equation of motion with at least three terms, two correct",
     "A1 9m(20/9 − x) − mg − 6mẋ = mẍ, giving ẍ + 6ẋ + 9x = 10",
     "M1 Solves auxiliary equation λ² + 6λ + 9 = 0: λ = −3 (repeated)",
     "A1F CF x = Ae⁻³ᵗ + Bte⁻³ᵗ",
     "B1F PI x = 10/9",
     "A1F General solution x = Ae⁻³ᵗ + Bte⁻³ᵗ + 10/9",
     "B1 x = 0 at t = 0 gives A = −10/9",
     "M1 Uses ẋ = 0 at t = 0",
     "A1 B = −30/9",
     "R1 x = −(10/9)e⁻³ᵗ − (10/3)te⁻³ᵗ + 10/9"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "B1 Critical damping, as the auxiliary equation has equal roots"
    ]
   },
   "15(a)": {
    "type": "points",
    "points": [
     "B1 x = r cos θ, y = r sin θ",
     "M1 Correct dy/dθ or dx/dθ using the product rule",
     "M1 Divides dy/dθ by dx/dθ",
     "R1 Completes proof, stating gradient = dy/dx"
    ]
   },
   "15(b)": {
    "type": "points",
    "points": [
     "B1 dr/dθ = (cot b)e^((cot b)θ)",
     "M1 Substitutes r and dr/dθ into the gradient from (a)",
     "M1 Rearranges towards a compound-angle form, e.g. (cos b sin θ + sin b cos θ)/(cos b cos θ − sin b sin θ)",
     "M1 Gradient of TPQ = tan(θ + b)",
     "M1 Angle STP = θ + b (−(θ + b) condoned)",
     "M1 Geometric argument (exterior angle of triangle OPT) that angle OPT = b",
     "R1 Rigorous conclusion that the angle does not depend on θ"
    ]
   }
  }
 },
 "fmath-aqa-7367-2019-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "z is a complex number with conjugate z*.",
    "parts": [
     {
      "code": "1",
      "prompt": "Which statement is not always true?\nOptions: (z*)* = z   zz* =   z   ²   (−z)* = −(z*)   z − z* = z* − z",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Curve y = ax²/(x − 1), a a non-zero constant.",
    "parts": [
     {
      "code": "2",
      "prompt": "Which line is an asymptote?\nOptions: y = ax + a   y = ax   y = ax − a   y = a",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A = {x : −√2 < x < 0} ∪ {x : 0 < x < √2}.",
    "parts": [
     {
      "code": "3",
      "prompt": "Which inequality has solution set A?\nOptions: A   x² − 1   > 1   B   x² − 1   ≥ 1   C   x² − 1   < 1   D   x² − 1   ≤ 1",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "k is a positive integer with Σ_(r=1)^k (3r − k) = 90.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find k.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Curve y = cosh x.",
    "parts": [
     {
      "code": "5",
      "prompt": "Show the arc length from x = a to x = b (0 < a < b) is sinh b − sinh a.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Circle C: |z − 2 − 5i| = a in the complex plane. The point z₁ on C has the smallest argument of all points on C, and arg(z₁) = π/4.",
    "parts": [
     {
      "code": "6",
      "prompt": "Prove a = 3√2/2.",
      "marks": 6
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Points A(4, 5, 2), B(−3, 2, −4), C(2, 6, 1).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Use a vector product to show triangle ABC has area 5√11/2.",
      "marks": 4
     },
     {
      "code": "7(b)",
      "prompt": "Find a vector equation r·n = k of the plane through A, B and C.",
      "marks": 1
     },
     {
      "code": "7(c)",
      "prompt": "Hence find the exact distance of the plane from the origin.",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Parabola P₁: y² = 4ax, a > 0, is translated by (b, 0)ᵀ, b > 0, to give parabola P₂.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "y = mx is a tangent to P₂. Prove m = ±√(a/b), without using differentiation.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "y = √(a/b) x meets P₂ at D. Region R is bounded by the x-axis, P₂ and the vertical line through D. Find, in terms of a and b, the volume when R is rotated 2π about the x-axis, with full justification.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "scenario": "M = (1/5 2/5; −3/5 13/10).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find the eigenvalues and corresponding eigenvectors of M.",
      "marks": 5
     },
     {
      "code": "9(b)",
      "prompt": "Find U and diagonal D with M = UDU⁻¹.",
      "marks": 2
     },
     {
      "code": "9(c)",
      "prompt": "Mⁿ → L as n → ∞. Find L.",
      "marks": 4
     },
     {
      "code": "9(d)",
      "prompt": "L maps every point onto a line. Find its equation.",
      "marks": 2
     }
    ]
   },
   {
    "number": 10,
    "scenario": "f(n) = n³ + 3n² + 8n.",
    "parts": [
     {
      "code": "10",
      "prompt": "Prove by induction that f(n) is divisible by 6 for all integers n ≥ 1.",
      "marks": 7
     }
    ]
   },
   {
    "number": 11,
    "scenario": "L₁: (x − 2)/3 = (y + 4)/8 = (4z − 5)/5. L₂: (r − (−2, 0, 3)ᵀ) × (2, 1, 3)ᵀ = 0.",
    "parts": [
     {
      "code": "11",
      "prompt": "Find the shortest distance between the lines, to 3 s.f.",
      "marks": 8
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Problem: z = 2 − 3i is a root of 2z³ + mz² + pz + 91 = 0; find m and p. Abel claims a solution; Bonnie says there is not enough information. Abel starts by saying 2 + 3i must also be a root.",
    "parts": [
     {
      "code": "12(a)",
      "prompt": "State one extra fact about m and p that would make Abel's first step valid.",
      "marks": 1
     },
     {
      "code": "12(b)",
      "prompt": "Prove that Bonnie is right.",
      "marks": 4
     }
    ]
   },
   {
    "number": 13,
    "scenario": "∫₃^∞ x²e^(−2x) dx.",
    "parts": [
     {
      "code": "13(a)",
      "prompt": "Explain why this integral is improper.",
      "marks": 1
     },
     {
      "code": "13(b)",
      "prompt": "Evaluate it, showing the limiting process.",
      "marks": 9
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Sₙ = Σ_(r=1)^n 1/((r + 1)(r + 3)), n ≥ 1.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Use the method of differences to show Sₙ = (5n² + an)/(12(n + b)(n + c)) for integers a, b, c.",
      "marks": 6
     },
     {
      "code": "14(b)",
      "prompt": "Show that, for any k > 12/5, if 5/12 − Sₙ < 1/k then n > (k − 5 + √(k² + 1))/2.",
      "marks": 6
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Tanks A and B each hold 800 litres and start full of pure water (diagram on the question paper). For t > 0: water with salt concentration μ g/litre enters A at a constant rate; 16 litres/min flow from A to B; r litres/min flow from B to A; water leaves B through a waste pipe; each tank stays at 800 litres. x g and y g of salt are in A and B at t minutes. dx/dt = 36 − 0.02x + 0.005y (1); dy/dt = 0.02x − 0.02y (2).",
    "parts": [
     {
      "code": "15(a)",
      "prompt": "Find r.",
      "marks": 2
     },
     {
      "code": "15(b)",
      "prompt": "Show μ = 3.",
      "marks": 3
     },
     {
      "code": "15(c)",
      "prompt": "Solve the coupled equations for x and y in terms of t.",
      "marks": 9
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 z − z* = z* − z (D)"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 y = ax + a (A)"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 |x² − 1| < 1 (C)"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "M1 Expresses the sum in k: (3/2)k(k + 1) − k² (one error allowed)",
     "A1 Correct quadratic ½k² + (3/2)k = 90",
     "A1 k = 12"
    ],
    "guidance": "Correct answer with no method scores 3/3; trial and improvement counts as no method."
   },
   "5": {
    "type": "points",
    "points": [
     "M1 Substitutes dy/dx = sinh x into s = ∫√(1 + (dy/dx)²) dx (limits may be missing)",
     "M1 Uses 1 + sinh²x = cosh²x to simplify",
     "M1 Integrates cosh x to sinh x",
     "R1 Substitutes limits with a rigorous argument to sinh b − sinh a"
    ]
   },
   "6": {
    "type": "points",
    "points": [
     "M1 Sets real and imaginary parts of z₁ equal (z₁ = k + ki), or uses y = x",
     "M1 Uses the half-line arg z = π/4 as a tangent to C",
     "M1 Equation for the gradient from (2, 5) to (k, k) being −1, or right-angled triangle, or substitutes y = x into the circle",
     "M1 Correct equation from their method, e.g. (5 − k)/(2 − k) = −1 (implied by k = 3.5)",
     "A1 a² = (5 − 3.5)² + (2 − 3.5)² = 4.5",
     "R1 Fully rigorous proof giving a = 3√2/2"
    ]
   },
   "10": {
    "type": "points",
    "points": [
     "B1 f(1) = 12 = 2 × 6, true for n = 1",
     "M1 Assumes true for n = k",
     "M1 Considers f(k + 1) − f(k)",
     "A1 f(k + 1) − f(k) = 3k² + 9k + 12",
     "M1 Shows the difference is a multiple of 3: 3(k² + 3k) + 12",
     "M1 Shows it is a multiple of 2 (k(k + 3) is even)",
     "R1 Rigorous conclusion explaining the induction"
    ]
   },
   "11": {
    "type": "points",
    "points": [
     "B1 Point on L₁, e.g. (2, −4, 5/4)",
     "B1 Direction of L₁, e.g. (3, 8, 5/4) or (12, 32, 5)",
     "B1 Point (−2, 0, 3) and direction (2, 1, 3) for L₂",
     "B1F Vector between lines (4, −4, −7/4)",
     "M1 Vector product of directions, or scalar products giving simultaneous equations",
     "A1 (12, 32, 5) × (2, 1, 3) = (91, −26, −52)",
     "M1 Uses this to find the distance: 43/√69",
     "A1 5.18 (awrt; exact accepted)"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Forms two vectors, e.g. AB = (−7, −3, −6), AC = (−2, 1, −1), at least one correct",
     "A1 AB × AC = (9, 5, −13)",
     "M1 Area = ½|AB × AC|",
     "R1 Rigorous completion to 5√11/2 with 'Area =' stated"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 r·(9, 5, −13) = 35"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "B1F 35/√275 = 7√11/11"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 P₂: y² = 4a(x − b)",
     "M1 Substitutes y = mx to get m²x² − 4ax + 4ab = 0",
     "M1 Sets discriminant to zero: 16a² − 16m²ab = 0",
     "R1 Rigorous completion to m = ±√(a/b)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Forms a quadratic in x: x²a = 4ab(x − b)",
     "A1 (x − 2b)² = 0, so x = 2b at D",
     "B1 V = π∫_b^(2b) 4a(x − b) dx (limits may be missing)",
     "M1 Integrates with lower limit b",
     "A1 V = 2πab²"
    ],
    "guidance": "Translating back by (−b, 0) and finding π∫₀^b 4ax dx is also accepted if clearly explained."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Characteristic equation λ² − 1.5λ + 0.5 = 0 (one error allowed)",
     "A1 λ = 1 and λ = 0.5",
     "M1 Correct equation for an eigenvector",
     "A1 λ = 1: (1, 2)ᵀ or any multiple",
     "A1 λ = 0.5: (4, 3)ᵀ or any multiple"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "B1F U = (4 1; 3 2), no zero column",
     "B1F D = (½ 0; 0 1), consistent with U"
    ],
    "guidance": "Equally U = (1 4; 2 3) with D = (1 0; 0 ½)."
   },
   "9(c)": {
    "type": "points",
    "points": [
     "B1 U⁻¹ = (1/5)(2 −1; −3 4)",
     "M1 Mⁿ = UDⁿU⁻¹ in correct order with powers inside Dⁿ",
     "M1 Takes n → ∞ limit of Dⁿ: (0 0; 0 1)",
     "R1 L = (−0.6 0.8; −1.2 1.6)"
    ],
    "guidance": "Correct answer scores 4/4."
   },
   "9(d)": {
    "type": "points",
    "points": [
     "M1 Image equations x′ = (1/5)(−3x + 4y), y′ = (2/5)(−3x + 4y)",
     "A1 y = 2x"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "R1 m and p are real (integers condoned)"
    ]
   },
   "12(b)": {
    "type": "points",
    "points": [
     "R1 Finds one valid pair, e.g. roots 2 − 3i, 2 + 3i, −7/2 give m = −1, p = −2 (or substitutes z = 2 − 3i and expands, or uses root relations without 2 + 3i)",
     "M1 Uses product of roots = −91/2 to find another pair of roots, or treats m, p as complex",
     "M1 Finds another valid set, e.g. 2 − 3i, 4 + 6i, −7/4, or forms simultaneous equations for real and imaginary parts",
     "R1 Concludes more than one (m, p) is possible (or the linear system has no unique solution), so Bonnie is right"
    ]
   },
   "13(a)": {
    "type": "points",
    "points": [
     "R1 The upper limit is infinite"
    ]
   },
   "13(b)": {
    "type": "points",
    "points": [
     "M1 Integration by parts twice",
     "B1 Correct u′ = 2x and v = −½e^(−2x) first time",
     "B1 ∫x²e^(−2x) dx = −½x²e^(−2x) + ∫xe^(−2x) dx",
     "M1 Parts on k∫xe^(−2x) dx",
     "A1 −½x²e^(−2x) − ½xe^(−2x) − ¼e^(−2x)",
     "E1 Writes the improper integral as lim_(n→∞) ∫₃ⁿ",
     "M1 Uses n²e^(−n), ne^(−n), e^(−n) → 0",
     "M1 Substitutes the lower limit 3 into the three-term expression",
     "A1 25e⁻⁶/4 (awrt 0.0155)"
    ]
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Uses partial fractions",
     "A1 1/(r + 1) − 1/(r + 3) = 2/((r + 1)(r + 3))",
     "M1 Method of differences showing first three and last two terms",
     "A1 2Sₙ = ½ + ⅓ − 1/(n + 2) − 1/(n + 3)",
     "M1 Combines over a common denominator",
     "R1 Sₙ = (5n² + 13n)/(12(n + 2)(n + 3))"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "B1 5/12 − (5n² + 13n)/(12(n + 2)(n + 3)) < 1/k",
     "M1 Simplifies to (12n + 30)/(12(n + 2)(n + 3)) < 1/k",
     "M1 Clears fractions, noting positive denominators: k(12n + 30) < 12(n + 2)(n + 3)",
     "M1 Quadratic form 2n² + (10 − 2k)n + (12 − 5k) > 0",
     "M1 Root(s), e.g. (2k − 10 + √(4k² + 4))/4",
     "R1 Rigorous finish, discussing root signs (12 − 5k < 0 gives one positive, one negative root)"
    ]
   },
   "15(a)": {
    "type": "points",
    "points": [
     "M1 Uses tank capacity with a coefficient: r = 0.005 × 800",
     "A1 r = 4"
    ]
   },
   "15(b)": {
    "type": "points",
    "points": [
     "M1 Inflow to A is 16 − 4 = 12 litres/min",
     "M1 12μ = 36",
     "R1 Rigorous completion to μ = 3"
    ]
   },
   "15(c)": {
    "type": "points",
    "points": [
     "M1 Differentiates one equation, e.g. x = 50ẏ + y",
     "M1 Substitutes to eliminate one variable",
     "A1 50ÿ + 2ẏ + 0.015y = 36 (or 200ẍ + 8ẋ + 0.06x = 144)",
     "M1 Auxiliary roots −0.03 and −0.01",
     "M1 Valid PI, e.g. 2400",
     "A1F General solution for one variable, e.g. y = Ae^(−0.03t) + Be^(−0.01t) + 2400",
     "A1 General solutions for both x and y",
     "M1 Uses x = y = 0 at t = 0 to find constants",
     "A1 x = −600e^(−0.03t) − 1800e^(−0.01t) + 2400, y = 1200e^(−0.03t) − 3600e^(−0.01t) + 2400"
    ]
   }
  }
 },
 "fmath-aqa-7367-2019-p3d": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Zero-sum game; pay-off matrix for Deanna (rows A–D) against Will (columns X, Y, Z): rows A: −1, 0, 2 | B: −2, −1, 3 | C: 5, −2, −3 | D: 6, −2, 0.",
    "parts": [
     {
      "code": "1",
      "prompt": "Which is Deanna's play-safe strategy?\nOptions: A   B   C   D",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Graph D is a tree with 6 vertices: two adjacent vertices of degree 3, each also joined to two vertices of degree 1 (an 'H' shape; diagram on the question paper).",
    "parts": [
     {
      "code": "2",
      "prompt": "Which graph is a subdivision of D? The options are drawn as the letters L, I, N, K.\nOptions: 'L' (a path of 6 vertices)   'I' (two degree-3 vertices, each with two pendant vertices, joined through one extra vertex)   'N' (a path of 7 vertices)   'K' (one degree-4 vertex with two pendant edges and two paths of length 2)",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Optimal Simplex tableau (columns P, x, y, z, r, s, value): row 1 (1, k² + k − 6, 0, 0, k − 1, 1, 20); row 2 (0, 0, 0, 1, 1.5, 0, 6); row 3 (0, 0, 1, 0, 0, 0.5, 86).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Deduce the range of possible values of k.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "State the value of s at the optimum.",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Connected planar graph P on vertices A–E with adjacency matrix (rows A to E): A (0 1 1 0 1), B (1 0 1 0 1), C (1 1 0 1 1), D (0 0 1 0 1), E (1 1 1 1 0). Ore's theorem: a simple graph on n ≥ 3 vertices is Hamiltonian if deg X + deg Y ≥ n for every non-adjacent pair X, Y.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Draw P.",
      "marks": 1
     },
     {
      "code": "4(b)",
      "prompt": "Use Euler's formula to show that P has exactly 5 faces.",
      "marks": 2
     },
     {
      "code": "4(c)",
      "prompt": "Use Ore's theorem to prove P is Hamiltonian, with full justification.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "S = {A, B, C, D} with A = (1 0; 0 1), B = (0 −1; 1 0), C = (−1 0; 0 −1), D = (0 1; −1 0). G is the group formed by S under matrix multiplication. H = (⟨i⟩, ×) where i² = −1.",
    "parts": [
     {
      "code": "5(a)(i)",
      "prompt": "Prove that B generates G, with full justification.",
      "marks": 3
     },
     {
      "code": "5(a)(ii)",
      "prompt": "Show that G ≅ H, with full justification.",
      "marks": 4
     },
     {
      "code": "5(b)(i)",
      "prompt": "Explain, with full justification, why H has no subgroup of order 3.",
      "marks": 2
     },
     {
      "code": "5(b)(ii)",
      "prompt": "Find every subgroup of H.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "A traffic warden checks short-stay bays (on one side of each street) along a street network, lengths in metres: AB 110, BC 160, CD 75, AE 60, BF 60, EF 110, CG 75, DH 65, GH 80, FI 75, GJ 60, IJ 160 (diagram on the question paper). Walking speed 4.8 km/h when not issuing fines.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "The warden must walk every street at least once, returning to the starting corner. Find the least possible time to the nearest minute, fully justified.",
      "marks": 5
     },
     {
      "code": "6(b)",
      "prompt": "Explain why the real time might differ from the answer to (a).",
      "marks": 1
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Water-pipe network (Figure 1), arcs given as capacity (initial flow) in litres per second: SA 12 (12), SB 18 (14), SC 17 (12), BA 8 (4), AD 19 (16), BF 5 (3), BH 4 (4), BC 3 (3), CH 16 (15), DE 13 (12), DF 12 (4), FE 5 (0), EG 15 (12), FG 14 (7), HG 3 (2), GT 28 (21), HT 18 (17). Initial feasible flow is 38 litres per second.",
    "parts": [
     {
      "code": "7(a)(i)",
      "prompt": "Find the value of the cut {S, A, B, C} | {D, E, F, G, H, T}.",
      "marks": 1
     },
     {
      "code": "7(a)(ii)",
      "prompt": "Interpret your answer to (a)(i) in context.",
      "marks": 1
     },
     {
      "code": "7(b)(i)",
      "prompt": "Label Figure 2 with the potential increase and decrease of flow on each arc, from the initial flow.",
      "marks": 2
     },
     {
      "code": "7(b)(ii)",
      "prompt": "Use flow augmentation to find the maximum flow, recording each augmenting path and its flow and updating Figure 2.",
      "marks": 4
     },
     {
      "code": "7(c)",
      "prompt": "One pipe is to be replaced by a larger one. Explain which pipe, and deduce the effect on the maximum flow.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Car project, activities with duration (days) and immediate predecessors: A 7 (−), B 6 (−), C 15 (−), D 9 (A, B), E 8 (D), F 6 (C, D), G 7 (C), H 14 (E), I 17 (F, G), J 9 (H, I), K 8 (I), L 12 (J, K). Each activity needs one team member. Figure 3 is an activity-on-node grid with boxes for earliest start, duration and latest finish (A, B, C already drawn); Figures 4 and 5 are resource-histogram grids (0–70 days, 0–5 workers).",
    "parts": [
     {
      "code": "8(a)(i)",
      "prompt": "Complete the activity network on Figure 3.",
      "marks": 2
     },
     {
      "code": "8(a)(ii)",
      "prompt": "Find and show the earliest start and latest finish for each activity.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "State the critical path(s).",
      "marks": 1
     },
     {
      "code": "8(c)(i)",
      "prompt": "Draw a resource histogram, each activity starting as early as possible, for completion in the minimum time.",
      "marks": 2
     },
     {
      "code": "8(c)(ii)",
      "prompt": "Only two team members are available. Explain the effect on the minimum completion time.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 A"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 B (the 'I' graph)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 From the objective row, at least one correct inequality, e.g. k² + k − 6 ≥ 0 or k − 1 ≥ 0 (strict condoned)",
     "A1 Critical values k = 2 and k = −3",
     "A1 Combines k ≥ 2 or k ≤ −3 with k ≥ 1 to get k ≥ 2 (strict not condoned)"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 s = 0"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 Correct labelled graph: edges AB, AC, AE, BC, BE, CD, CE, DE"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 v − e + f = 2",
     "A1 v = 5, e = 8 so f = 2 + 8 − 5 = 5"
    ]
   },
   "4(c)": {
    "type": "points",
    "points": [
     "M1 Non-adjacent pairs are A & D and B & D",
     "A1 deg A = 3, deg B = 3, deg D = 2, so both sums are 5",
     "R1 Both sums ≥ n = 5, so by Ore's theorem P is Hamiltonian"
    ]
   },
   "5(a)(i)": {
    "type": "points",
    "points": [
     "M1 Correctly finds Bⁿ for one of n = 2, 3, 4",
     "A1 B² = C, B³ = D, B⁴ = A all correct",
     "R1 Powers of B give every element of G, so B is a generator"
    ]
   },
   "5(a)(ii)": {
    "type": "points",
    "points": [
     "B1 One correct correspondence (e.g. B ↦ i), or states G is cyclic of order 4",
     "B1 Full correct mapping B ↦ i, C ↦ −1, D ↦ −i, A ↦ 1 in good notation, or identifies i as a generator of H",
     "E1 States the mapping is one-to-one, or that H is cyclic of order 4",
     "R1 Complete argument concluding G ≅ H"
    ]
   },
   "5(b)(i)": {
    "type": "points",
    "points": [
     "B1 |H| = 4",
     "E1 3 does not divide 4, so by Lagrange's theorem there is no subgroup of order 3"
    ]
   },
   "5(b)(ii)": {
    "type": "points",
    "points": [
     "M1 One subgroup found, e.g. {1, −1}",
     "A1 A second subgroup, e.g. {1}",
     "A1 All three and no others: {1}, {1, −1}, H = {1, −1, i, −i}, correct notation"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Route inspection; odd vertices B, C, F, G",
     "A1 Pairings: BC + FG = 160 + 295 = 455, BF + CG = 60 + 75 = 135, BG + CF = 235 + 220 = 455",
     "B1 Total street length 1090 m",
     "M1 Minimum distance 1090 + 135 = 1225 m",
     "A1 1225/4800 × 60 ≈ 15 minutes"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "E1 Stopping to issue fines lowers the average speed, so the walk takes longer (or other plausible reason with its effect)"
    ]
   },
   "7(a)(i)": {
    "type": "points",
    "points": [
     "B1 44 litres per second"
    ]
   },
   "7(a)(ii)": {
    "type": "points",
    "points": [
     "B1F The maximum flow through the pipes is at most 44 litres per second"
    ]
   },
   "7(b)(i)": {
    "type": "points",
    "points": [
     "M1 Correct potential increase/decrease on SA, SB, SC, GT, HT (reversed condoned)",
     "A1 All arcs correct, e.g. SA 0/12, SB 4/14, SC 5/12, AD 3/16, GT 7/21, HT 1/17"
    ]
   },
   "7(b)(ii)": {
    "type": "points",
    "points": [
     "M1 One correct augmenting path and flow",
     "A1 Two correct paths and flows",
     "A1 At least three correct paths totalling 6, e.g. SCHT 1, SBADFGT 3, SBFGT 1, SCBFGT 1",
     "B1 Maximum flow 38 + 6 = 44 litres per second"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "E1 Upgrade pipe BF",
     "B1F Maximum flow rises by 2 to 46 litres per second"
    ]
   },
   "8(a)(i)": {
    "type": "points",
    "points": [
     "M1 Network with at least 10 labelled activities and at least 4 correct connections",
     "A1 Fully correct network (arrows may be omitted)"
    ]
   },
   "8(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Earliest starts of E, F, G correct (16, 16, 15)",
     "A1 All earliest starts correct: A 0, B 0, C 0, D 7, E 16, F 16, G 15, H 24, I 22, J 39, K 39, L 48",
     "B1 All latest finishes correct: A 7, B 7, C 15, D 16, E 25, F 22, G 22, H 39, I 39, J 48, K 48, L 60"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 A–D–F–I–J–L and C–G–I–J–L, and no others"
    ]
   },
   "8(c)(i)": {
    "type": "points",
    "points": [
     "M1 Histogram with consistent scale, at least 10 labelled blocks and a critical path along the bottom row (floats condoned, overhangs not)",
     "A1 Fully correct histogram (peak of 3 workers; finishes at day 60)"
    ]
   },
   "8(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Notes A and B cannot run together with two workers (implied by Figure 5 or a 6-day increase)",
     "R1 Minimum completion time rises to 66 days"
    ],
    "guidance": "B must follow A, so D starts at 13 at the earliest; E, F, G then need only two workers."
   }
  }
 },
 "fmath-aqa-7367-2019-p3m": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Spring: natural length 0.4 m, modulus of elasticity 55 N, extension 0.08 m.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find the elastic potential energy stored.\nOptions: 0.176 J   0.44 J   0.88 J   1.76 J",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "A particle turns at 72 revolutions per minute.",
    "parts": [
     {
      "code": "2",
      "prompt": "Convert to rad s⁻¹.\nOptions: 6π/5   12π/5   12π   24π",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A disc of mass m and radius r spins with angular speed ω about the axis through its centre perpendicular to its face. Model for kinetic energy: E = k mᵃ rᵇ ωᶜ, where k is dimensionless.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find a, b and c.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Use g = 10 m s⁻². A 500 g sphere hangs on an inelastic string of length 1.2 m from fixed point O. It is held with the string taut at 20° to the vertical, touching a student's chin, and released from rest; the student stays still (diagram on the question paper).",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find the sphere's maximum speed.",
      "marks": 3
     },
     {
      "code": "4(b)",
      "prompt": "Find the greatest tension in the string.",
      "marks": 3
     },
     {
      "code": "4(c)",
      "prompt": "Say, with a reason, whether the sphere hits the chin again.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "The triangle with vertices (0, 0), (8, 0) and (0, 4) (cm) is rotated 360° about the x-axis to form a solid cone.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "State an assumption needed to locate the cone's centre of mass.",
      "marks": 1
     },
     {
      "code": "5(b)",
      "prompt": "Prove by integration that the centre of mass is 2 cm from the plane face.",
      "marks": 5
     },
     {
      "code": "5(c)(i)",
      "prompt": "The cone stands on its plane face on a rough board whose inclination is slowly increased; it topples without sliding. Find the board's angle to the horizontal at toppling, to the nearest degree.",
      "marks": 2
     },
     {
      "code": "5(c)(ii)",
      "prompt": "Find the possible range of the coefficient of friction.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "A ball on a smooth horizontal surface hits a fixed vertical wall: before impact 7 m s⁻¹ at 40° to the wall, after impact 5 m s⁻¹ at 26° to the wall. Treat the ball as a particle.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find the coefficient of restitution to 2 significant figures.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Decide, with full justification, whether the wall is smooth.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "A 2.5 kg particle is tied to a light inextensible string of length 75 cm fixed at A, and to an elastic string (natural length 30 cm, modulus λ N) fixed at B, 60 cm vertically below A. The particle moves in a horizontal circle centred at B with angular speed 8 rad s⁻¹.",
    "parts": [
     {
      "code": "7",
      "prompt": "Find λ in terms of g.",
      "marks": 9
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Use g = 9.8 m s⁻². Reverse bungee: two identical elastic ropes (natural length 30 m, modulus 3150 N) are fixed at the two top edges of a gorge 40 m wide and 50 m deep, and both attached to Hannah (84 kg, a particle). She is released from rest at the centre of the gorge floor (diagram on the question paper).",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that her speed when the ropes go slack is 30 m s⁻¹ to 2 significant figures.",
      "marks": 6
     },
     {
      "code": "8(b)",
      "prompt": "Decide whether she is moving up or down when the ropes next become taut.",
      "marks": 5
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 0.44 J"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 12π/5"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "B1 [E] = ML²T⁻² (units condoned)",
     "M1 Equates to M^a L^b T^(−c) to form equations (PI by two correct values)",
     "A1 a = 1, b = 2, c = 2"
    ],
    "guidance": "Correct answer with no working scores 3/3."
   },
   "7": {
    "type": "points",
    "points": [
     "B1 sin θ = 60/75 = 4/5, cos θ = 3/5 (PI by θ = 36.9° or 53.1°)",
     "B1F Radius r = 0.75 cos θ = 0.45 m (45 cm)",
     "M1 Vertical equation for inextensible string tension, T₁ sin θ = 2.5g",
     "A1 T₁ = 25g/8",
     "M1 Resolves towards centre using both tensions and mrω²",
     "A1 T₂ + T₁ cos θ = 2.5 × 0.45 × 8²",
     "A1 T₂ = 72 − 15g/8",
     "M1 Hooke's law with their T₂: 72 − 15g/8 = λ(0.45 − 0.3)/0.3",
     "A1 λ = 144 − 15g/4"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Energy equation equating KE gained and GPE lost (not suvat)",
     "A1 ½ × 0.5v² = 0.5 × 10 × 1.2(1 − cos 20°)",
     "A1 v = √1.447 ≈ 1 m s⁻¹ (1 sf; awrt 1.2 condoned)"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Max tension at lowest point; forms equation with their speed",
     "A1 T − 0.5 × 10 = 0.5 × 1.447/1.2",
     "A1 T = 5.60 ≈ 6 N (1 sf; awrt 5.6 condoned)"
    ]
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 No, it will not touch the chin again",
     "E1F Air resistance means it cannot return to its starting position (follow through if they say it does)"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 The cone is uniform (or of constant density)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1 Line y = 4 − ½x",
     "B1 Mass = ⅓π × 4² × 8ρ = 128πρ/3",
     "M1 (128πρ/3) x̄ = πρ ∫₀⁸ x(4 − ½x)² dx",
     "A1 (128/3) x̄ = 256/3",
     "R1 x̄ = 2 with rigorous argument and correct notation (density included)"
    ]
   },
   "5(c)(i)": {
    "type": "points",
    "points": [
     "M1 tan α = 4/2 (accept 2/4 oe; PI by 26.6° or 27°)",
     "A1 α = 63°"
    ]
   },
   "5(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Uses F and R in a friction equation or inequality, e.g. mg sin α = μmg cos α",
     "A1F μ = tan α = 2 (follow through only from tan α = ½)",
     "A1 μ > 2"
    ],
    "guidance": "Correct answer with no working scores 3/3."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Perpendicular components with 7 and sin/cos 40°, 5 and sin/cos 26°",
     "A1 7 sin 40° × e = 5 sin 26°",
     "A1 e = 0.49 (2 sf)"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Parallel components 7 cos 40° = 5.36 and 5 cos 26° = 4.49",
     "A1 These are unequal (parallel component reduced)",
     "R1 Numerical comparison stated, so the wall is not smooth"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Pythagoras for initial extension (√(50² + 20²) − 30 = 23.85 m) or height risen",
     "M1 Initial EPE = 2 × ½ × (3150/30) × 23.85²",
     "A1 EPE = 59 735 J (awrt 59 700)",
     "A1 GPE gained when slack = 84 × 9.8 × (50 − √(30² − 20²)) = 22 753 J (awrt 22 750)",
     "M1 Energy conservation: 59 735 − 22 753 = ½ × 84v²",
     "R1 v = √880 = 29.6… ≈ 30 m s⁻¹ (2 sf) with rigorous argument"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 First comparison quantity, e.g. height at which ropes go taut (or GPE there, or max height if ropes stay slack)",
     "A1 Correct value, e.g. h = 50 + √(30² − 20²) = 72.4 m",
     "M1 Second comparison quantity, e.g. greatest height if ropes stay slack",
     "A1 Correct value, e.g. 59 735 = 84 × 9.8h gives h = 72.6 m",
     "E1 Ropes go taut just below her highest point, so she is moving up (or: with air resistance they probably won't go taut until she is falling)"
    ]
   }
  }
 },
 "fmath-aqa-7367-2019-p3s": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Discrete random variable X with Var(X) = 5.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find Var(4X − 3).\nOptions: 17   20   77   80",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Amy samples 50 values from N(μ, 16) to test H₀: μ = 52 against H₁: μ > 52, rejecting H₀ if the sample mean exceeds 53. The true mean is 53.5.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the probability of a Type II error.\nOptions: 0.4%   3.9%   18.9%   45.0%",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Alan's journey times are normal with standard deviation 6 minutes. A random sample of 5 journeys has mean 36 minutes.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find a 95% confidence interval for the mean journey time, to 1 decimal place.",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Alan says his mean time is 30 minutes. Does the interval support this? Give a reason.",
      "marks": 1
     },
     {
      "code": "3(c)",
      "prompt": "If σ were unknown and the sample standard deviation were 6, how would the working in (a) change?",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "X has a rectangular (continuous uniform) distribution with mean 3 and variance 3.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find the probability density function of X, with full justification.",
      "marks": 5
     },
     {
      "code": "4(b)(i)",
      "prompt": "Roy uses X to model the distance (m) from P at which a 6 m clothes line between points P and Q breaks. Give a criticism of this model.",
      "marks": 1
     },
     {
      "code": "4(b)(ii)",
      "prompt": "Sketch the pdf of a better model on axes of f(x) against x.",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Insurance claims £X have pdf f(x) = k/x for 1 < x < a, and 0 otherwise. The median claim is £200.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that k = 1/(2 ln 200).",
      "marks": 3
     },
     {
      "code": "5(b)",
      "prompt": "Find P(X < 2000) to 3 significant figures.",
      "marks": 2
     },
     {
      "code": "5(c)",
      "prompt": "The largest possible claim is £2000. Suggest how the pdf could be refined.",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "August driving tests: centre A, 102 candidates of whom 60 passed; centre B, 110 candidates of whom 80 passed.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Test at the 5% level whether test result is independent of centre.",
      "marks": 8
     },
     {
      "code": "6(b)",
      "prompt": "Rebecca says that if the test rejects H₀, passing is easier at centre B. Do you agree? Give a reason.",
      "marks": 1
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Chocolate bars are labelled as having mean mass 45 g; a shopkeeper claims the mean is falling. A sample of 6 bars gives Σx = 246 and Σx² = 10198.",
    "parts": [
     {
      "code": "7",
      "prompt": "Test the claim at the 5% level, stating any assumptions.",
      "marks": 9
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Calls to an office follow a Poisson distribution with mean 3 per 10 minutes.",
    "parts": [
     {
      "code": "8(a)(i)",
      "prompt": "Find P(exactly 2 calls in 10 minutes).",
      "marks": 1
     },
     {
      "code": "8(a)(ii)",
      "prompt": "Find P(more than 30 calls in one hour).",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "An hour is split into six 10-minute periods. Find the probability that exactly two of the periods have exactly 2 calls.",
      "marks": 3
     },
     {
      "code": "8(c)(i)",
      "prompt": "A call has just arrived. Find the probability that the next call is more than 10 minutes away.",
      "marks": 3
     },
     {
      "code": "8(c)(ii)",
      "prompt": "Mahah arrives 5 minutes after the last call. State, with explanation, the probability that the next call comes more than 10 minutes after her arrival.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 80"
    ]
   },
   "2": {
    "type": "points",
    "points": [
     "B1 18.9%"
    ]
   },
   "7": {
    "type": "points",
    "points": [
     "B1 H₀: μ = 45, H₁: μ < 45",
     "E1 Assume masses are normally distributed",
     "B1 x̄ = 41",
     "B1 s² = (10198 − 246²/6)/5 = 22.4 (s awrt 4.73)",
     "M1 t = (41 − 45)/√(22.4/6)",
     "A1 t = −2.07 (or p awrt 0.0466)",
     "R1 Compares with critical value −2.015 (t₅, awrt −2.02) or p with 0.05",
     "E1F Reject H₀",
     "E1F Some evidence the shopkeeper is right that bars are getting lighter"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 x̄ ± z√(σ²/n) with z awrt 1.96 (or 1.64/1.645), e.g. 36 ± 1.96 × 6/√5",
     "A1 (30.7, 41.3) awrt"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "E1F No: 30 lies outside the interval (follow through their interval)"
    ]
   },
   "3(c)": {
    "type": "points",
    "points": [
     "E1 A t-value (t distribution) replaces z, e.g. 1.96 becomes awrt 2.78"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Equation from E(X) = 3, e.g. ½(a + b) = 3",
     "M1 Equation from Var(X) = 3, e.g. (b − a)²/12 = 3",
     "A1 Correct equation in one unknown, e.g. (b − 6 + b)²/12 = 3",
     "A1 a = 0, b = 6",
     "A1F f(x) = 1/6 for 0 ≤ x ≤ 6, 0 otherwise"
    ]
   },
   "4(b)(i)": {
    "type": "points",
    "points": [
     "E1 Valid criticism, e.g. the line is more likely to snap in the middle (or near clothes, or due to tension)"
    ]
   },
   "4(b)(ii)": {
    "type": "points",
    "points": [
     "B1F Symmetric pdf on [0, 6] with maximum matching their criticism, zero beyond 6"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 ∫₁²⁰⁰ k/x dx = 0.5",
     "M1 Integrates: [k ln x]",
     "R1 k ln 200 = 0.5 so k = 1/(2 ln 200), fully correct"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 (1/(2 ln 200)) ∫₁²⁰⁰⁰ (1/x) dx",
     "A1 0.717 (awrt)"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "E1 Restrict the model to 1 to 2000 (e.g. set a = 2000)",
     "E1 Change k (e.g. k = 1/ln 2000 ≈ 0.132) so P(X < 2000) = 1, or keep the pdf and put probability 1 − (b) at 2000"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 H₀: no association between result and centre; H₁: association",
     "M1 Contingency table: A 60 pass, 42 fail; B 80 pass, 30 fail; totals 140, 72, 212",
     "M1 Expected: A 67.4, 34.6; B 72.6, 37.4",
     "M1 χ² with Yates' correction using their values (no Yates condoned)",
     "A1 Test statistic ≈ 4.0",
     "R1 Compares with critical value 3.84 (1 df), or p ≈ 0.045–0.047 with 0.05",
     "E1F Reject H₀",
     "E1F Some evidence that result and centre are not independent (non-definite, in context)"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "E1 Disagree: another underlying cause could explain the higher pass rate at B"
    ]
   },
   "8(a)(i)": {
    "type": "points",
    "points": [
     "B1 P(X = 2) = 0.224 (awrt)"
    ]
   },
   "8(a)(ii)": {
    "type": "points",
    "points": [
     "B1 Y ~ Po(18)",
     "M1 P(Y ≥ 31) = 1 − P(Y ≤ 30)",
     "A1 0.0033 (awrt)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 C ~ B(6, 0.224)",
     "M1 (6C2) × 0.224² × (1 − 0.224)⁴",
     "A1 0.273 (awrt)"
    ]
   },
   "8(c)(i)": {
    "type": "points",
    "points": [
     "B1 Exponential (or Poisson) model with λ = 3 per 10 minutes",
     "M1 P(T > 1) = e^(−3)",
     "A1 0.0498 (awrt)"
    ]
   },
   "8(c)(ii)": {
    "type": "points",
    "points": [
     "B1F 0.0498",
     "E1 Same answer because the exponential distribution is memoryless"
    ]
   }
  }
 },

 /* ═══════════════════════════════════════════════════════════════════════════
    EDEXCEL 9FM0 PAPERS
  ═══════════════════════════════════════════════════════════════════════════ */

 "fmath-edx-9fm0-2024-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "f(z) = z⁴ − 6z³ + az² + bz + 145, with a and b real constants. One root of f(z) = 0 is 2 + 5i.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Find the other roots of f(z) = 0.",
      "marks": 7
     },
     {
      "code": "1(b)",
      "prompt": "Plot all the roots of f(z) = 0 on one Argand diagram.",
      "marks": 2
     }
    ]
   },
   {
    "number": 2,
    "scenario": "The equation 2x³ − 3x² + 12x + 7 = 0 has roots α, β and γ. Do not solve the equation.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "State the values of α + β + γ, αβ + αγ + βγ and αβγ.",
      "marks": 1
     },
     {
      "code": "2(b)",
      "prompt": "Using part (a), find (i) 2/α + 2/β + 2/γ, (ii) (α − 1)(β − 1)(γ − 1), (iii) α² + β² + γ².",
      "marks": 7
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Show all working; calculator-only solutions are not accepted. A pool P (Figure 1, a three-lobed shape on the question paper) sits inside a circle C of radius 6 m with the same centre; the shaded region T between the pool edge and C is tiled. The pool edge is modelled by r = 4 − a sin 3θ, 0 ≤ θ ≤ 2π, with a > 0. The shortest distance from the pool edge to C is 0.5 m.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find a.",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Using algebraic integration, find the exact area of T according to the model.",
      "marks": 6
     }
    ]
   },
   {
    "number": 4,
    "scenario": "z = e^(iθ), with θ real.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Show that zⁿ + 1/zⁿ ≡ 2 cos nθ for positive integer n.",
      "marks": 2
     },
     {
      "code": "4(b)",
      "prompt": "Show that cos⁵θ = (1/16)(cos 5θ + 5 cos 3θ + 10 cos θ).",
      "marks": 5
     },
     {
      "code": "4(c)",
      "prompt": "Hence, with clear reasoning, solve cos 5θ + 5 cos 3θ + 12 cos θ = 0 for 0 ≤ θ < 2π.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "A raindrop falls from rest. Its downward velocity v m s⁻¹ at t seconds satisfies (t + 2) dv/dt + 3v = k(t + 2) − 3, t ≥ 0, where k is a positive constant.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Solve the differential equation to show that v = (k/4)(t + 2) − 1 + 4(2 − k)/(t + 2)³.",
      "marks": 5
     },
     {
      "code": "5(b)",
      "prompt": "Given v = 4 when t = 2, find the model's velocity 5 seconds after the drop begins to fall.",
      "marks": 3
     },
     {
      "code": "5(c)",
      "prompt": "Comment on how valid the model is for very large t.",
      "marks": 1
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Proof by induction.",
    "parts": [
     {
      "code": "6",
      "prompt": "Prove by induction that Σ_{r=1}^{n} (2r − 1)² = (1/3)n(4n² − 1) for all positive integers n.",
      "marks": 6
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Line l₁: r = i − 2j + 3k + λ(2i + j − 4k). Line l₂: r = 5i + pj − 7k + μ(6i + j + 8k), where p is a constant. Plane Π contains both lines.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that 3i − 10j − k is perpendicular to Π.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Hence find a Cartesian equation of Π.",
      "marks": 2
     },
     {
      "code": "7(c)",
      "prompt": "Hence find p.",
      "marks": 2
     },
     {
      "code": "7(d)",
      "prompt": "l₁ and l₂ meet at A, and B is (12, −11, 6). Find the acute angle between AB and Π, to the nearest degree.",
      "marks": 4
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Type A bacteria (x) are introduced into a population of type B bacteria (y). At time t days: dx/dt = x + y and dy/dt = 3y − 2x.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that d²x/dt² − 4 dx/dt + 5x = 0.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "Find a general solution for x at time t days.",
      "marks": 4
     },
     {
      "code": "8(c)",
      "prompt": "Find a general solution for y at time t days.",
      "marks": 2
     },
     {
      "code": "8(d)",
      "prompt": "The model predicts the two populations are equal at time T hours (note: t is in days). Given x = 100 and y = 275 when t = 0, find T to 2 decimal places.",
      "marks": 5
     },
     {
      "code": "8(e)",
      "prompt": "Give one limitation of the model.",
      "marks": 1
     }
    ]
   }
  ],
  "markSchemes": {
   "6": {
    "type": "points",
    "points": [
     "B1 n = 1: both sides equal 1, so true for n = 1",
     "M1 Assumes true for n = k and adds (2(k + 1) − 1)²",
     "dM1 Factorises (2k + 1) or expands fully",
     "A1 E.g. (1/3)(k + 1)(2k + 3)(2k + 1) or 4k³/3 + 4k² + 11k/3 + 1",
     "A1 = (1/3)(k + 1)(4(k + 1)² − 1)",
     "A1 Full conclusion: true for n = 1, n = k ⇒ n = k + 1, so true for all positive n"
    ]
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 2 − 5i is also a root",
     "M1 Multiplies (z − (2 + 5i))(z − (2 − 5i)) or uses sum 4 and product 29 of the pair",
     "A1 Quadratic factor z² − 4z + 29",
     "M1 Finds the other quadratic factor of the quartic, (z² − 4z + 29)(z² + cz + 5)",
     "A1 z² − 2z + 5 = 0",
     "M1 Solves their second quadratic",
     "A1 z = 1 ± 2i"
    ],
    "guidance": "Alternatives: sum/product of all four roots (sum 6, product 145) giving δ² − 2δ + 5 = 0; or substitute 2 + 5i to get a = 42, b = −78 and solve the quartic."
   },
   "1(b)": {
    "type": "points",
    "points": [
     "B1ft One complex conjugate pair plotted correctly, symmetric in the real axis",
     "B1 All four roots (2, ±5) and (1, ±2) plotted and labelled in roughly the right places"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1 α + β + γ = 3/2, αβ + αγ + βγ = 6, αβγ = −7/2"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 (i) Uses 2(αβ + αγ + βγ)/αβγ with their values",
     "A1ft (i) −24/7",
     "M1 (ii) Expands the product fully",
     "A1 (ii) Correct form αβγ − (αβ + αγ + βγ) + (α + β + γ) − 1",
     "A1 (ii) −9",
     "M1 (iii) Uses (α + β + γ)² − 2(αβ + αγ + βγ)",
     "A1ft (iii) 9/4 − 12 = −39/4"
    ],
    "guidance": "Must use part (a); other methods score nothing."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Maximum r = 4 + a = 5.5",
     "A1 a = 1.5"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Pool area = ½∫₀^{2π} (4 − 1.5 sin 3θ)² dθ",
     "M1 Expands and uses sin²3θ = (1 − cos 6θ)/2",
     "A1ft Correct integral 16θ + 4 cos 3θ + (9/8)(θ − sin 6θ/6)",
     "dM1 Applies limits to get pool area 137π/8",
     "DM1 Area of T = 36π − 137π/8",
     "A1 151π/8 m²"
    ],
    "guidance": "18.875π accepted; must be exact."
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 zⁿ + z⁻ⁿ = e^(inθ) + e^(−inθ)",
     "A1* = cos nθ + i sin nθ + cos nθ − i sin nθ = 2 cos nθ"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 (z + z⁻¹)⁵ = 32 cos⁵θ",
     "M1 Binomial expansion of (z + z⁻¹)⁵",
     "A1 z⁵ + 5z³ + 10z + 10z⁻¹ + 5z⁻³ + z⁻⁵",
     "M1 Groups terms and uses (a): 2 cos 5θ + 10 cos 3θ + 20 cos θ",
     "A1* cos⁵θ = (1/16)(cos 5θ + 5 cos 3θ + 10 cos θ)"
    ],
    "guidance": "Alternative via De Moivre: cos 5θ = Re(cos θ + i sin θ)⁵ and cos³θ = ¼(cos 3θ + 3 cos θ)."
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 Equation becomes 16 cos⁵θ = −2 cos θ",
     "M1 Factorises 2 cos θ(8 cos⁴θ + 1) = 0 and solves",
     "A1 8cos⁴θ + 1 = 0 has no solutions, so θ = π/2, 3π/2"
    ],
    "guidance": "Dividing by cos θ is M0; answers only score 0."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Integrating factor e^(∫3/(t+2) dt) = (t + 2)³",
     "M1 v(t + 2)³ = ∫(k(t + 2)³ − 3(t + 2)²) dt",
     "A1 v(t + 2)³ = (k/4)(t + 2)⁴ − (t + 2)³ (+ c)",
     "M1 t = 0, v = 0 gives c = 8 − 4k",
     "A1* Reaches the given result"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 4 = k − 1 + 4(2 − k)/64 gives k = 5.2",
     "dM1 Substitutes k = 5.2 and t = 5",
     "A1 v = 8.06 m s⁻¹ (awrt; 5531/686 exact)"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "B1 E.g. velocity grows without limit, which is unrealistic; or the drop reaches the ground / a terminal velocity"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Scalar products with 2i + j − 4k and 6i + j + 8k",
     "A1 Both equal 0, so perpendicular to Π"
    ],
    "guidance": "Alternative: cross product of the directions = 4(3i − 10j − k)."
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 (3i − 10j − k)·(i − 2j + 3k) = 20",
     "A1 3x − 10y − z = 20"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 15 − 10p + 7 = 20, solves for p",
     "A1 p = 0.2"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "M1 Finds A: λ = 2.3 (μ = 0.1), A(5.6, 0.3, −6.2)",
     "M1 AB = 6.4i − 11.3j + 12.2k and AB·n = 120",
     "M1 Uses cos or sin of the angle with |AB| and |n| to find the angle",
     "A1 40° (awrt)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Differentiates: d²x/dt² = dx/dt + 3y − 2x",
     "M1 Substitutes y = dx/dt − x",
     "A1* d²x/dt² − 4 dx/dt + 5x = 0"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Solves m² − 4m + 5 = 0",
     "A1 m = 2 ± i",
     "M1 Complementary function form e^(αt)(A cos βt + B sin βt)",
     "A1 x = e^(2t)(A cos t + B sin t)"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 y = dx/dt − x using the product rule",
     "A1 y = e^(2t)((A + B) cos t + (B − A) sin t)"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 A = 100, B = 175",
     "dM1 Sets x = y: 100 cos t + 175 sin t = 275 cos t + 75 sin t, gives tan t",
     "A1 tan t = 1.75",
     "M1 Solves tan t = 1.75 in radians and multiplies by 24 (days to hours): T = 24 tan⁻¹(1.75)",
     "A1 T = 25.24"
    ]
   },
   "8(e)": {
    "type": "points",
    "points": [
     "B1 Populations become negative at some times, which is impossible"
    ]
   }
  }
 },

 "fmath-edx-9fm0-2024-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Hyperbolic identities and equations.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Using the exponential definition of sinh x, prove that 4 sinh³x + 3 sinh x ≡ sinh 3x.",
      "marks": 2
     },
     {
      "code": "1(b)",
      "prompt": "Hence solve sinh 3x = 19 sinh x, giving answers as simplified natural logarithms where appropriate.",
      "marks": 5
     }
    ]
   },
   {
    "number": 2,
    "scenario": "f(x) = tanh⁻¹((3 − x)/(6 + x)), |x| < 3/2.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Show that f′(x) = −1/(2x + 3).",
      "marks": 4
     },
     {
      "code": "2(b)",
      "prompt": "Hence find f″(x).",
      "marks": 1
     },
     {
      "code": "2(c)",
      "prompt": "Hence show that the Maclaurin series for f(x) up to the x² term is ln p + qx + rx², finding the constants p, q and r.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "The integral I = ∫_{4/3}^{∞} 1/(9x² + 16) dx.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Explain why I is an improper integral.",
      "marks": 1
     },
     {
      "code": "3(b)",
      "prompt": "Show that I = kπ, finding the constant k.",
      "marks": 4
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Method of differences.",
    "parts": [
     {
      "code": "4",
      "prompt": "Use the method of differences to show that Σ_{r=1}^{n} 2/((r + 4)(r + 6)) = n(an + b)/(30(n + 5)(n + 6)), finding the integers a and b.",
      "marks": 6
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Locus C: |z − 4| = 4. Locus D: arg z = π/3. A = {z : |z − 4| ≤ 4} ∩ {z : 0 ≤ arg z ≤ π/3}.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Sketch C and D on one Argand diagram.",
      "marks": 4
     },
     {
      "code": "5(b)",
      "prompt": "Shade the set of points A on your diagram.",
      "marks": 1
     },
     {
      "code": "5(c)",
      "prompt": "Find the area of the region A in the form pπ + q√3, stating the constants p and q.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "A particle P moves along the x-axis, x metres from O at time t seconds (t ≥ 0), with 2 d²x/dt² + 5 dx/dt + 2x = 4t + 12.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find the general solution of the differential equation.",
      "marks": 6
     },
     {
      "code": "6(b)",
      "prompt": "Hence find the particular solution with x = 3 and dx/dt = −2 at t = 0.",
      "marks": 3
     },
     {
      "code": "6(c)",
      "prompt": "(i) Show that the model's minimum distance between O and P is (2 + ln 2) m. (ii) Justify that this is a minimum.",
      "marks": 4
     },
     {
      "code": "6(d)",
      "prompt": "For large t the particle is expected to move at constant speed. Comment on the model's suitability in light of this.",
      "marks": 1
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Roots of complex equations.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find the roots of z⁶ = 1 in the form e^(iθ), 0 ≤ θ < 2π.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Show these roots on one Argand diagram.",
      "marks": 2
     },
     {
      "code": "7(c)",
      "prompt": "Show that (√3 + i)⁶ = −64.",
      "marks": 2
     },
     {
      "code": "7(d)",
      "prompt": "Hence, or otherwise, solve z⁶ + 64 = 0, giving roots as re^(iθ), 0 ≤ θ < 2π.",
      "marks": 3
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A = (3 1 −1; 1 1 1; k 3 6), with k ≠ 0.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Find A⁻¹ in terms of k.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "Find, in simplest form in terms of k, the point where the planes 3x + y − z = 3, x + y + z = 1 and kx + 3y + 6z = 6 meet.",
      "marks": 3
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Figure 1 (on the question paper) shows the vertical cross-section ABCDEFA of a vase. The neck from AB down to FC is a cylinder of diameter 4 cm (AB = 4 cm) and height 4.5 cm; FC is 7 cm above the horizontal base ED, with E directly below F and D directly below C. In Figure 2 the origin O is on the vase's central vertical axis at base level, with D on the x-axis and C above it; the curve CD is modelled by x = a + 3 sin 2t, y = b cos t, 0 ≤ t ≤ π/2, with a and b constants.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find a and b according to the model.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "Using algebraic integration with full working, find the model's volume of the vase to the nearest cm³.",
      "marks": 7
     },
     {
      "code": "9(c)",
      "prompt": "State one limitation of the model.",
      "marks": 1
     }
    ]
   }
  ],
  "markSchemes": {
   "4": {
    "type": "points",
    "points": [
     "M1 Finds partial fractions A/(r + 4) + B/(r + 6)",
     "A1 1/(r + 4) − 1/(r + 6)",
     "M1 Lists terms from both ends to show cancellation",
     "A1 Remaining terms 1/5 + 1/6 − 1/(n + 5) − 1/(n + 6)",
     "M1 Combines over a common denominator to get a quadratic numerator",
     "A1 n(11n + 61)/(30(n + 5)(n + 6))"
    ]
   },
   "1(a)": {
    "type": "points",
    "points": [
     "M1 Writes sinh x = (eˣ − e⁻ˣ)/2 and cubes, e.g. 4(e³ˣ − 3eˣ + 3e⁻ˣ − e⁻³ˣ)/8 + 3(eˣ − e⁻ˣ)/2",
     "A1* Simplifies to (e³ˣ − e⁻³ˣ)/2 = sinh 3x"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1 Uses (a): 4 sinh³x − 16 sinh x = 0, i.e. 4 sinh x(sinh²x − 4) = 0",
     "B1 x = 0",
     "M1 sinh x = ±2 and uses x = ln(±2 + √5)",
     "A1 One of x = ln(2 + √5) or ln(−2 + √5)",
     "A1 Both non-zero roots, e.g. x = ±ln(2 + √5) or ½ln(9 ± 4√5), no extras"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "M1 Quotient rule on (3 − x)/(6 + x)",
     "A1 Derivative −9/(6 + x)²",
     "dM1 Chain rule: f′(x) = 1/(1 − ((3 − x)/(6 + x))²) × −9/(6 + x)²",
     "A1* Simplifies via −9/(18x + 27) to −1/(2x + 3)"
    ],
    "guidance": "Alternatives: implicit differentiation of tanh y, or the log form f(x) = ½ ln(9/(3 + 2x))."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "B1 f″(x) = 2/(2x + 3)²"
    ]
   },
   "2(c)": {
    "type": "points",
    "points": [
     "M1 Finds at least two of f(0) = tanh⁻¹(½) = ½ ln 3, f′(0) = −1/3, f″(0) = 2/9",
     "M1 Uses f(0) + x f′(0) + (x²/2) f″(0)",
     "A1 ln√3 − x/3 + x²/9"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "B1 The upper limit is infinite"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Integrates to the form α arctan(βx)",
     "A1 (1/12) arctan(3x/4)",
     "dM1 Applies limits t → ∞ and 4/3 using a limiting process",
     "A1 (1/12)(π/2 − π/4) = π/48"
    ],
    "guidance": "No evidence of the limit t → ∞ loses the final A mark."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Circle with centre on the real axis",
     "A1 Circle touching the imaginary axis at the origin",
     "M1 Half-line from the origin in the first quadrant",
     "A1 Fully correct: half-line meets the circle at O and at a point left of the centre"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1ft Shades the part of the circle above the real axis and below the half-line"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "M1 Solves (x − 4)² + y² = 16 with y = √3x for the intersection",
     "A1 (2, 2√3)",
     "dM1 Complete strategy for the area, e.g. sector ½·4²·(2π/3) plus triangle ½·4·2√3",
     "A1 16π/3 + 4√3"
    ],
    "guidance": "Polar alternative: r = 8 cos θ, area ∫₀^{π/3} (16 + 16 cos 2θ) dθ."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Solves 2m² + 5m + 2 = 0: m = −½, −2",
     "A1 CF Ae^(−0.5t) + Be^(−2t)",
     "B1 PI of the form x = pt + q",
     "M1 Substitutes: 5p + 2pt + 2q = 4t + 12",
     "A1 p = 2, q = 1",
     "A1ft x = Ae^(−0.5t) + Be^(−2t) + 2t + 1"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 t = 0, x = 3: A + B + 1 = 3",
     "M1 Differentiates and uses dx/dt = −2 at t = 0 to find A and B",
     "A1 x = 2e^(−2t) + 2t + 1"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "M1 (i) dx/dt = −4e^(−2t) + 2",
     "dM1 (i) Sets to 0: t = ½ ln 2",
     "A1* (i) x = 1 + ln 2 + 1 = 2 + ln 2",
     "B1ft (ii) d²x/dt² = 8e^(−2t) > 0 for all t, so a minimum"
    ]
   },
   "6(d)": {
    "type": "points",
    "points": [
     "B1ft As t → ∞, e^(−2t) → 0 so x → 2t + 1 (speed → 2), constant speed, so the model is suitable"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 z = e^(kπi/3)",
     "A1 All six roots, k = 0, 1, 2, 3, 4, 5"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 Six points forming a hexagon, one on each real half-axis and one in each quadrant",
     "dB1 Hexagon centred on the origin, symmetric about both axes"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 Writes √3 + i = 2e^(πi/6) (or expands binomially) and raises to the 6th power",
     "A1* 64e^(iπ) = −64"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "B1 r = 2",
     "M1 z = 2e^(πi/6) × e^(kπi/3)",
     "A1 z = 2e^((π/6 + kπ/3)i), k = 0, …, 5: arguments π/6, π/2, 5π/6, 7π/6, 3π/2, 11π/6"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 det A = 2k",
     "M1 Cofactors or minors, at least 6 correct",
     "dM1 Complete method including dividing by the determinant",
     "A1 A⁻¹ = (1/2k)(3 −9 2; k − 6 18 + k −4; 3 − k k − 9 2)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Multiplies A⁻¹ by (3, 1, 6)ᵀ",
     "A1 Any two of x = 6/k, y = (2k − 12)/k, z = (6 − k)/k",
     "A1 Point (6/k, 2 − 12/k, 6/k − 1) as coordinates"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 a = 2 or b = 7",
     "B1 a = 2 and b = 7"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 V = π∫x² (dy/dt) dt = π∫(2 + 3 sin 2t)²(−7 sin t) dt",
     "M1 Expands and uses sin 2t = 2 sin t cos t to reach an integrable form",
     "A1ft At least two terms integrated correctly: −7π[−4 cos t + 8 sin³t − 12 cos³t + (36/5) cos⁵t]",
     "A1 Fully correct integration",
     "B1 Cylinder volume π × 2² × 4.5 = 18π",
     "ddM1 Correct limits 0 and π/2 and adds the cylinder: 588π/5 + 18π",
     "A1 426 cm³ (awrt)"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "B1 E.g. vase may not be smooth or symmetric, measurements may be inaccurate, wall thickness ignored, base may not be flat"
    ]
   }
  }
 },

 "fmath-edx-9fm0-2023-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "The cubic x³ − 7x² − 12x + 6 = 0 has roots α, β and γ. Do not solve the equation.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find a cubic equation with roots α + 2, β + 2 and γ + 2, in the form w³ + pw² + qw + r = 0 with p, q, r integers.",
      "marks": 5
     }
    ]
   },
   {
    "number": 2,
    "scenario": "The expression x² + 4x − 5.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Write x² + 4x − 5 as (x + p)² + q, with p and q integers.",
      "marks": 1
     },
     {
      "code": "2(b)",
      "prompt": "Hence use a formula-book standard integral to find ∫ 1/√(x² + 4x − 5) dx.",
      "marks": 2
     },
     {
      "code": "2(c)",
      "prompt": "Find the mean value of f(x) = 1/√(x² + 4x − 5) for 3 ≤ x ≤ 13, as A ln B with A and B in simplest form.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Show all working; calculator-only solutions are not accepted. z₁ = −4 + 4i and z₂ = 3(cos(17π/12) + i sin(17π/12)).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Write z₁ as r(cos θ + i sin θ) with r > 0 and 0 ≤ θ < 2π.",
      "marks": 2
     },
     {
      "code": "3(b)(i)",
      "prompt": "Find z₁/z₂ in the form a + ib with a, b exact.",
      "marks": 2
     },
     {
      "code": "3(b)(ii)",
      "prompt": "Find (z₂)⁴ in the form a + ib with a, b exact.",
      "marks": 2
     },
     {
      "code": "3(c)",
      "prompt": "On one Argand diagram show (i) z₁, z₂ and z₁/z₂, and (ii) the region {z : |z − z₁| < |z − z₂|}.",
      "marks": 4
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Proof by induction with matrices.",
    "parts": [
     {
      "code": "4",
      "prompt": "Prove by induction that (1 −2; 0 1)ⁿ = (1 −2n; 0 1) for n ∈ ℕ.",
      "marks": 5
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Line l₁: (x + 5)/1 = (y + 4)/(−3) = (z − 3)/5. Plane Π₁: 2x + 3y − 2z = 6. Line l₂ is the reflection of l₁ in Π₁. Plane Π₂ contains l₁ and l₂. Plane Π₃: r·(1, 1, a)ᵀ = b, with a and b constants.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find where l₁ meets Π₁.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Show that l₂ has vector equation r = (−7, 2, −7)ᵀ + μ(10, 6, 2)ᵀ.",
      "marks": 5
     },
     {
      "code": "5(c)",
      "prompt": "Find a vector equation of the line where Π₁ and Π₂ meet.",
      "marks": 2
     },
     {
      "code": "5(d)",
      "prompt": "Given that Π₁, Π₂ and Π₃ form a sheaf, find a and b.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "A large tank initially holds 10 litres. At t minutes it holds V litres; water flows in at (3 − 4/(1 + e^(0.8t))) litres per minute and out at a rate proportional to V. At t = 0 the volume is falling at 3 litres per minute.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Show that dV/dt = 3 − 4/(1 + e^(0.8t)) − 0.4V.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Find d/dt(arctan e^(0.4t)).",
      "marks": 2
     },
     {
      "code": "6(c)",
      "prompt": "Hence, by solving the equation in (a), find V = f(t) in simplest form.",
      "marks": 6
     },
     {
      "code": "6(d)",
      "prompt": "After 10 minutes the tank held 8 litres. Evaluate the model in light of this.",
      "marks": 1
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Show all working; calculator-only solutions are not accepted.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Explain why Σ_{r=1}^{2n} (−1)ʳ f(r) = Σ_{r=1}^{n} (f(2r) − f(2r − 1)) for any function f and n ∈ ℕ.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Using standard summation formulae, show that Σ_{r=1}^{2n} r((−1)ʳ + 2r)² = n(2n + 1)(8n² + 4n + 5).",
      "marks": 6
     },
     {
      "code": "7(c)",
      "prompt": "Hence evaluate Σ_{r=14}^{50} r((−1)ʳ + 2r)².",
      "marks": 4
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A colony of small mammals is split into newborns N (under 1 month), juveniles J (1 to 3 months) and breeders B (over 3 months). Model: (Nₙ₊₁, Jₙ₊₁, Bₙ₊₁)ᵀ = (0 0 2; a b 0; 0 0.48 0.96)(Nₙ, Jₙ, Bₙ)ᵀ, with a, b constants and n months after the start. Initially there are only breeders; after 2 months the model gives 48 newborns and 40 juveniles.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "State one limitation of dividing the mammals into these categories.",
      "marks": 1
     },
     {
      "code": "8(b)",
      "prompt": "(i) Find the number of mammals at the start. (ii) Show that a = 0.8.",
      "marks": 4
     },
     {
      "code": "8(c)",
      "prompt": "Find, in terms of b, the inverse of (0 0 2; 0.8 b 0; 0 0.48 0.96).",
      "marks": 3
     },
     {
      "code": "8(d)",
      "prompt": "The model gives about 1015 mammals in total at the start of one month and about 596 newborns, 464 juveniles and 437 breeders at the start of the next. Find b to 2 decimal places.",
      "marks": 3
     },
     {
      "code": "8(e)",
      "prompt": "Newborn males and females are to be tracked separately; 42% of newborns are male. Refine the matrix equation, giving a reason (no need to estimate unknown values, but show known ones).",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 Uses x = w − 2",
     "M1 Substitutes into the cubic: (w − 2)³ − 7(w − 2)² − 12(w − 2) + 6",
     "M1 Expands and collects into a cubic in w",
     "A1 At least two of p, q, r correct",
     "A1 w³ − 13w² + 28w − 6 = 0"
    ],
    "guidance": "Alternative: new sum 13, new pair sum 28, new product 6 from α + β + γ = 7, Σαβ = −12, αβγ = −6."
   },
   "4": {
    "type": "points",
    "points": [
     "B1 n = 1: (1 −2×1; 0 1) = (1 −2; 0 1)",
     "M1 Assumes true for n = k and multiplies by (1 −2; 0 1) either way round",
     "A1 (1 −2k − 2; 0 1)",
     "A1 = (1 −2(k + 1); 0 1)",
     "A1 Full conclusion: true for n = 1 and if true for n = k then for n = k + 1, so true for all n"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1 (x + 2)² − 9"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Integral of the form arcosh((x + p)/√q) or ln(x + p + √((x + p)² − q))",
     "A1 arcosh((x + 2)/3) or ln(x + 2 + √((x + 2)² − 9)) (+ c)"
    ]
   },
   "2(c)": {
    "type": "points",
    "points": [
     "B1 Mean = (1/(13 − 3))∫₃¹³ f(x) dx",
     "M1 Applies limits: (1/10)(arcosh 5 − arcosh(5/3))",
     "A1 (1/10) ln((5 + 2√6)/3) or (1/20) ln((49 + 20√6)/9)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 |z₁| = √32 or arg z₁ = 3π/4",
     "A1 4√2(cos(3π/4) + i sin(3π/4))"
    ]
   },
   "3(b)(i)": {
    "type": "points",
    "points": [
     "M1 Divides moduli and subtracts arguments (3π/4 − 17π/12), or other correct method",
     "A1 −2√2/3 − (2√6/3)i"
    ],
    "guidance": "Correct answer without working scores no marks."
   },
   "3(b)(ii)": {
    "type": "points",
    "points": [
     "M1 De Moivre: modulus 3⁴, argument 4 × 17π/12",
     "A1 81/2 − (81√3/2)i"
    ],
    "guidance": "Correct answer without working scores no marks."
   },
   "3(c)": {
    "type": "points",
    "points": [
     "B1 (i) z₁ (on y = −x, second quadrant) and z₂ (third quadrant, closer to origin) placed correctly",
     "B1ft (i) z₁/z₂ in the correct (third) quadrant",
     "M1 (ii) Draws the perpendicular bisector of z₁z₂ (or a line crossing z₁z₂) and shades one side",
     "A1 (ii) Correct perpendicular bisector of z₁z₂; the required region is the side containing z₁ (above the bisector)"
    ],
    "guidance": "The bisector has a shallow positive gradient. For A1 either side may be shaded as long as the upper region containing z₁ is clearly not being discounted; z₁ must be in quadrant 2 and z₂ in quadrant 3. A separate diagram for (ii) is fine."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes (λ − 5, −3λ − 4, 5λ + 3) into Π₁ and solves (λ = −2)",
     "A1 (−7, 2, −7)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 From (−5, −4, 3) on l₁, line along the normal (2, 3, −2) meets Π₁ at t = 2",
     "M1 Doubles the parameter to get the mirror point",
     "A1 Mirror point (3, 8, −5)",
     "ddM1 Direction from (−7, 2, −7) to (3, 8, −5)",
     "A1* r = (−7, 2, −7) + μ(10, 6, 2)"
    ],
    "guidance": "Alternative first two marks: distance from (−5, −4, 3) to Π₁ is 2√17, then k = 4 along the normal."
   },
   "5(c)": {
    "type": "points",
    "points": [
     "M1 Complete method, e.g. uses the foot of the perpendicular (−1, 2, −1) and (−7, 2, −7)",
     "A1 r = (−7, 2, −7) + s(6, 0, 6), or equivalent e.g. (−1, 2, −1) + s(1, 0, 1)"
    ]
   },
   "5(d)": {
    "type": "points",
    "points": [
     "M1 Line direction (1, 0, 1) perpendicular to (1, 1, a): 1 + a = 0",
     "A1 a = −1",
     "A1 b = (−7, 2, −7)·(1, 1, −1) = 2"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 dV/dt = 3 − 4/(1 + e^(0.8t)) ± kV",
     "dM1 Uses t = 0, V = 10, dV/dt = −3 to find k",
     "A1* 10k = 4, k = 0.4, giving the stated equation"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Chain rule: (1/(1 + (e^(0.4t))²)) × ke^(0.4t)",
     "A1 2e^(0.4t)/(5(1 + e^(0.8t)))"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1 Integrating factor e^(0.4t)",
     "M1 e^(0.4t)V = ∫(3e^(0.4t) − 4e^(0.4t)/(1 + e^(0.8t))) dt",
     "M1 Integrates to Ae^(0.4t) − B arctan(e^(0.4t))",
     "A1 e^(0.4t)V = 7.5e^(0.4t) − 10 arctan(e^(0.4t)) (+ c)",
     "M1 Uses V = 10 at t = 0 to find c",
     "A1 V = 7.5 − 10e^(−0.4t) arctan(e^(0.4t)) + 2.5(π + 1)e^(−0.4t)"
    ]
   },
   "6(d)": {
    "type": "points",
    "points": [
     "B1ft Finds V(10) ≈ 7.4 litres and comments, e.g. about 7.5% below the actual 8 litres so not very accurate"
    ],
    "guidance": "Guide: 7.7 ≤ V < 8.3 good model; 7 to 7.7 or 8.3 to 9 either verdict accepted; outside that not good."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Notes even terms are added and odd terms subtracted, e.g. −f(1) + f(2) − f(3) + f(4) − …",
     "A1* Groups as f(2) + f(4) + … + f(2n) − (f(1) + f(3) + … + f(2n − 1)) and concludes"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 Expands the summand to r(1 + 4r(−1)ʳ + 4r²), using (−1)²ʳ = 1",
     "M1 Applies Σr and Σr³ formulae with upper limit 2n",
     "M1 Uses (a): Σ(−1)ʳr² = Σ((2r)² − (2r − 1)²)",
     "B1 4Σ(−1)ʳr² = 4(4(n/2)(n + 1) − n), e.g. 8n² + 4n",
     "dM1 Takes out the factor n(2n + 1)",
     "A1* n(2n + 1)(8n² + 4n + 5)"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 Splits as sum to 50 minus sum to 13",
     "M1 Uses even upper limits with a balancing term, e.g. minus the r = 13 term 13 × 25²",
     "M1 Uses (b) with n = 25 and n = 6: 25 × 51 × 5105 − 6 × 13 × 317 − 13 × 25²",
     "A1 6476024"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 Valid limitation of the categories, e.g. breeding may not start at exactly 3 months, older mammals stop breeding, some over 3 months are infertile, some juveniles may breed"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 (i) Applies the matrix (or its square) to (0, 0, k)ᵀ",
     "dM1 (i) 48 = 2 × 0.96k, solves for k",
     "A1 (i) k = 25, so 25 mammals at the start",
     "A1* (ii) 40 = 2ka gives a = 0.8"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "B1 Determinant 0.768 (96/125)",
     "M1 Adjoint (0.96b 0.96 −2b; −0.768 0 1.6; 0.384 0 0), at least 3 non-zero entries right",
     "A1 Inverse (1.25b 1.25 −125b/48; −1 0 25/12; 0.5 0 0)"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 Multiplies the inverse by (596, 464, 437)ᵀ and adds the components",
     "dM1 Sets the total equal to 1015 and solves for b",
     "A1 b = 0.45 (awrt)"
    ]
   },
   "8(e)": {
    "type": "points",
    "points": [
     "M1 New variables for male and female newborns and a 4×4 matrix with the right zero structure",
     "A1ft E.g. (NMₙ₊₁, NFₙ₊₁, Jₙ₊₁, Bₙ₊₁)ᵀ = (0 0 0 0.84; 0 0 0 1.16; ? ? 0.45 0; 0 0 0.48 0.96)(NMₙ, NFₙ, Jₙ, Bₙ)ᵀ"
    ]
   }
  }
 },

 "fmath-edx-9fm0-2023-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Polar curve r = 2√(sinh θ + cosh θ), 0 ≤ θ ≤ π (sketch on the question paper). Region R lies between the curve, the initial line and the line θ = π.",
    "parts": [
     {
      "code": "1",
      "prompt": "Using algebraic integration, find the exact area of R in the form pe^q − r, where p, q and r are real.",
      "marks": 4
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Maclaurin series.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Write down the Maclaurin series of eˣ up to the x³ term.",
      "marks": 1
     },
     {
      "code": "2(b)",
      "prompt": "Without differentiating, find the Maclaurin series of e^(eˣ − 1) up to the x³ term, with simplified coefficients.",
      "marks": 5
     }
    ]
   },
   {
    "number": 3,
    "scenario": "M = (−2 5; 6 k), k constant, and M² + 11M = aI where a is a constant and I is the 2 × 2 identity.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "(i) Find a. (ii) Show that k = −9.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "Find the equations of the invariant lines of the transformation given by M.",
      "marks": 6
     },
     {
      "code": "3(c)",
      "prompt": "State which, if any, of these lines are lines of fixed points, with a reason.",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Polar curve C: r = 3 + √5 cos θ, 0 ≤ θ ≤ 2π. At point A, with 0 < θ < π/2, the tangent to C is parallel to the initial line.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Sketch C, labelling the pole, the initial line and the value of r where C meets the initial line.",
      "marks": 2
     },
     {
      "code": "4(b)",
      "prompt": "Use calculus to show that cos θ = 1/√5 at A.",
      "marks": 4
     },
     {
      "code": "4(c)",
      "prompt": "Hence find r at A.",
      "marks": 1
     }
    ]
   },
   {
    "number": 5,
    "scenario": "z₁ = 35 − 25i and z₂ = −29 + 39i are opposite vertices of a regular hexagon H in the complex plane, with centre α. β = (1 + i)/64. The vertices of H are the roots of (β(z − α))⁶ = 1.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that α = 3 + 7i.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Show that β(z₁ − α) = 1.",
      "marks": 2
     },
     {
      "code": "5(c)(i)",
      "prompt": "Write down the roots of w⁶ = 1 in the form re^(iθ).",
      "marks": 1
     },
     {
      "code": "5(c)(ii)",
      "prompt": "Hence or otherwise find the other four vertices of H in Cartesian form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "y = e^(2x) sinh x.",
    "parts": [
     {
      "code": "6",
      "prompt": "Prove by induction that, for n ∈ ℕ, dⁿy/dxⁿ = e^(2x)( ((3ⁿ + 1)/2) sinh x + ((3ⁿ − 1)/2) cosh x ).",
      "marks": 6
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Show all working; calculator-only solutions are not accepted. The largest of 100 picked berries (about 2.8 cm long) is modelled by rotating the curve 16x² + 3y² − y cos(5y/2) = 6, x ≥ 0, through 2π about the y-axis (units cm; sketch on the question paper). The curve meets the y-axis at y = −1.545 and y = 1.257 (4 s.f.).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Use algebraic integration to find the modelled volume of this berry.",
      "marks": 6
     },
     {
      "code": "7(b)",
      "prompt": "All 100 berries are squeezed for juice. Using (a), decide whether there is likely to be enough to fill a 200 cm³ cup, with a reason.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A cubic equation has three distinct roots on one straight line in the complex plane. f(z) = 8z³ + bz² + cz + d (b, c, d real) has distinct collinear roots, one of which is 3/2 + (3/2)i. g(z) = z³ + Pz² + Qz + 12 (P, Q real) has 3 distinct roots on a different line from those of f(z); f and g share one root, and −4 is a root of g(z).",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Describe the possible lines the roots of such a cubic can lie on.",
      "marks": 2
     },
     {
      "code": "8(b)",
      "prompt": "State the other two roots of f(z).",
      "marks": 1
     },
     {
      "code": "8(c)(i)",
      "prompt": "Write down the common root.",
      "marks": 1
     },
     {
      "code": "8(c)(ii)",
      "prompt": "Find the remaining root of g(z).",
      "marks": 3
     },
     {
      "code": "8(d)",
      "prompt": "Hence solve f(z) = g(z).",
      "marks": 4
     }
    ]
   },
   {
    "number": 9,
    "scenario": "An antibiotic is given intravenously at a constant rate, starting with none in the patient. At t minutes, blood concentration is x mg/ml and tissue concentration y mg/ml, with dx/dt = 0.025y − 0.045x + 2 and dy/dt = 0.032x − 0.025y. To be effective, the tissue concentration must eventually be between 185 and 200 mg/ml.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Show that 40000 d²y/dt² + 2800 dy/dt + 13y = 2560.",
      "marks": 3
     },
     {
      "code": "9(b)",
      "prompt": "Find a general solution for the tissue concentration y.",
      "marks": 5
     },
     {
      "code": "9(c)",
      "prompt": "Hence find the particular solution for y.",
      "marks": 4
     },
     {
      "code": "9(d)",
      "prompt": "Decide whether the rate of administration is effective, with a reason.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 Area = ½∫₀^π 4(sinh θ + cosh θ) dθ (½ and limits correct)",
     "M1 Integrates: sinh → ±cosh, cosh → ±sinh (or uses sinh θ + cosh θ = e^θ)",
     "M1 Substitutes limits, subtracts and uses exponential definitions: 2(e^π − e⁰)",
     "A1 2e^π − 2"
    ]
   },
   "6": {
    "type": "points",
    "points": [
     "M1 Differentiates: dy/dx = 2e^(2x) sinh x + e^(2x) cosh x",
     "A1 Shows n = 1 gives e^(2x)(2 sinh x + cosh x), matching the formula",
     "M1 Assumes true for n = k and differentiates using the product rule",
     "dM1 Factors e^(2x) and collects sinh and cosh terms",
     "A1 Reaches e^(2x)(((3^(k+1) + 1)/2) sinh x + ((3^(k+1) − 1)/2) cosh x)",
     "A1 Full conclusion: true for n = 1 and n = k ⇒ n = k + 1, so true for all n ∈ ℕ"
    ],
    "guidance": "Exponential-definition approach (y = ½(e^(3x) − eˣ)) is equally valid."
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1 eˣ = 1 + x + x²/2 + x³/6"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Applies the exponential series once, either in the index or to e^(eˣ − 1) = 1 + (eˣ − 1) + (eˣ − 1)²/2! + …",
     "M1 Complete method producing a cubic polynomial in x only",
     "dM1 Expands and collects one term per power",
     "A1 Any two of the coefficients of x, x², x³ correct",
     "A1 1 + x + x² + (5/6)x³"
    ],
    "guidance": "Using differentiation scores nothing. Writing e^(eˣ)·e^(−1) can earn at most M1M1M0A0A0."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Finds M² = (34 5k−10; 6k−12 k²+30) and forms M² + 11M = aI",
     "A1 a = 12",
     "A1* k = −9 from an off-diagonal (e.g. 5k − 10 + 55 = 0); if k² + 11k + 18 = 0 is used, k = −2 must be rejected"
    ],
    "guidance": "Alternatively substitute k = −9, show M² + 11M = 12I and conclude."
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Maps (x, mx + c) to (X, mX + c) and forms the simultaneous equations",
     "M1 Eliminates X to get an equation in x",
     "A1 (5m² + 7m − 6)x + (5m + 10)c = 0",
     "M1 Solves 5m² + 7m − 6 = 0: m = −2, 3/5",
     "A1 m = 3/5 needs c = 0: y = (3/5)x",
     "A1 m = −2 allows any c: y = −2x + c"
    ],
    "guidance": "Eigenvalue approach (λ = 1, −12) is accepted. Giving y = −2x only loses the final A1."
   },
   "3(c)": {
    "type": "points",
    "points": [
     "B1 y = (3/5)x is a line of fixed points, e.g. since (x, 3x/5) maps to itself"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 Correct cardioid-like shape with a dimple",
     "B1 Pole, initial line and r = 3 + √5 on the initial line labelled"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Differentiates y = r sin θ = 3 sin θ + √5 sin θ cos θ",
     "A1 3 cos θ + √5 cos 2θ (or equivalent)",
     "M1 Sets to zero and forms a quadratic in cos θ: 2√5 cos²θ + 3 cos θ − √5 = 0",
     "A1 cos θ = (−3 ± 7)/(4√5); rejects the negative root to get cos θ = 1/√5"
    ]
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 r = 4"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Midpoint of z₁ and z₂",
     "A1* α = 3 + 7i"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 ((1 + i)/64)(32 − 32i), expanded using i² = −1",
     "A1* 64/64 = 1 with no errors"
    ]
   },
   "5(c)(i)": {
    "type": "points",
    "points": [
     "B1 w = e^(ikπ/3), k = 0, 1, …, 5 (or equivalent set)"
    ]
   },
   "5(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Sets β(z − α) = e^(ikπ/3) and solves z = e^(ikπ/3)/β + α",
     "M1 Converts at least one new vertex to Cartesian form",
     "A1 Two of: (19 + 16√3) + (−9 + 16√3)i, (−13 + 16√3) + (23 + 16√3)i, (−13 − 16√3) + (23 − 16√3)i, (19 − 16√3) − (9 + 16√3)i",
     "A1 All four exact, no extras"
    ],
    "guidance": "Decimals 46.7 + 18.7i, −40.7 − 4.7i, 14.7 + 50.7i, −8.7 − 36.7i score A1A0. Rotation-matrix method about 3 + 7i also accepted. The scheme's question total reads 11 but the parts sum to 9."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 V = (π/16)∫ from −1.545 to 1.257 of (6 − 3y² + y cos(5y/2)) dy",
     "M1 Integrates the constant and y² terms: Ky − Ly³",
     "M1 Integration by parts on y cos(5y/2): (2/5)y sin(5y/2) + (4/25) cos(5y/2)",
     "A1 (1/16)(6y − y³ + (2/5)y sin(5y/2) + (4/25) cos(5y/2))",
     "M1 Substitutes the limits into their integral: (1/16)(5.3954… − (−6.1101…)) (working in degrees condoned for this mark)",
     "A1 2.26 cm³ (awrt; 0.719π cm³), with all previous marks"
    ],
    "guidance": "Calculator-only integration scores at most B1M0M0A0M1A0."
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1ft 100 × 2.26 ≈ 226 cm³ as a maximum",
     "B1ft Conclusion with reason, e.g. not all of a berry is juice or most berries are smaller, so unlikely to fill 200 cm³"
    ],
    "guidance": "The scheme's part subtotal for (b) is printed as (1), but it lists B1ft B1ft and the paper allocates 2."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 One line: the real axis (y = 0)",
     "B1 Second line: a vertical line x = k (all roots share their real part)"
    ],
    "guidance": "'Any line' scores B1B1."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 3/2 and 3/2 − (3/2)i"
    ]
   },
   "8(c)(i)": {
    "type": "points",
    "points": [
     "B1 3/2"
    ]
   },
   "8(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Product of roots: (3/2)(−4)α = −12 (or writes g in factor form)",
     "M1 Solves for the third root",
     "A1 α = 2"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 Forms f(z) = 8(z − 3/2)(z² − 3z + 9/2) = 8z³ − 36z² + 72z − 54 (factor 8 needed)",
     "M1 Equates to g(z) = (z − 3/2)(z + 4)(z − 2) and cancels the common factor to get a quadratic",
     "M1 Solves 7z² − 26z + 44 = 0",
     "A1 z = 3/2, (13 ± i√139)/7"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 Differentiates: d²y/dt² = 0.032 dx/dt − 0.025 dy/dt",
     "M1 Eliminates x using the second equation",
     "A1* 40000 d²y/dt² + 2800 dy/dt + 13y = 2560"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Solves 40000m² + 2800m + 13 = 0",
     "M1 CF of the form Ae^(m₁t) + Be^(m₂t)",
     "A1 y = Ae^(−t/200) + Be^(−13t/200)",
     "M1 PI y = k: 13k = 2560",
     "A1ft y = Ae^(−0.005t) + Be^(−0.065t) + 2560/13"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 t = 0, y = 0: A + B + 2560/13 = 0",
     "B1 At t = 0, x = 0 so dy/dt = 0",
     "M1 Differentiates and uses dy/dt = 0: A = −13B",
     "A1 y = −(640/3)e^(−t/200) + (640/39)e^(−13t/200) + 2560/13"
    ]
   },
   "9(d)": {
    "type": "points",
    "points": [
     "M1 As t → ∞ the exponential terms → 0",
     "A1ft y → 2560/13 ≈ 197, within 185–200, so effective"
    ]
   }
  }
 },

 "fmath-edx-9fm0-2022-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "f(z) = z³ + az + 52, where a is a real constant; 2 − 3i is a root of f(z) = 0.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Write down the other complex root.",
      "marks": 1
     },
     {
      "code": "1(b)",
      "prompt": "Hence (i) solve f(z) = 0 completely and (ii) find a.",
      "marks": 4
     },
     {
      "code": "1(c)",
      "prompt": "Plot all the roots of f(z) = 0 on one Argand diagram.",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Show all working; calculator-only solutions are not accepted.",
    "parts": [
     {
      "code": "2",
      "prompt": "Solve 64 cosh⁴x − 64 cosh²x − 9 = 0, giving answers as q ln 2 with q rational and in simplest form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Differential equation cos x dy/dx + y sin x = e^(2x) cos²x.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find the general solution in the form y = f(x).",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "Given y = 3 when x = 0, find the smallest positive x for which y = 0.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Logarithmic series.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Use the method of differences to prove that, for n > 2, Σ_{r=2}^{n} ln((r + 1)/(r − 1)) ≡ ln(n(n + 1)/2).",
      "marks": 4
     },
     {
      "code": "4(b)",
      "prompt": "Hence find Σ_{r=51}^{100} ln(((r + 1)/(r − 1))³⁵) exactly in the form a ln(b/c), with a, b, c integers.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "M = (a 2 −3; 2 3 0; 4 a 2), where a is a constant.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that M is non-singular for every value of a.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Find M⁻¹ in terms of a.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "The function (2x² + 3x + 6)/((x + 1)(x² + 4)).",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Write it in partial fractions.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Hence show that its integral from 0 to 2 equals ln(a√2) + bπ, finding the constants a and b.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "z = a + bi, with a and b real.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that zz* is real.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Given zz* = 18 and z/z* = 7/9 + (4√2/9)i, find the possible values of z.",
      "marks": 5
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A solid paperweight with a flat base (Figure 1) is modelled by rotating through 180° about the x-axis the region R between y = H cos³(x/4) (−4 ≤ x ≤ 4, H > 0, x in radians), the lines x = −4 and x = 4, and the x-axis (Figure 2 on the question paper). The paperweight's greatest height is 2 cm.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Given zⁿ + 1/zⁿ = 2 cos nθ (n ∈ ℕ), show that 32 cos⁶θ ≡ cos 6θ + 6 cos 4θ + 15 cos 2θ + 10.",
      "marks": 5
     },
     {
      "code": "8(b)",
      "prompt": "Write down H.",
      "marks": 1
     },
     {
      "code": "8(c)",
      "prompt": "Using algebraic integration and (a), find the modelled volume in cm³ to 2 decimal places (calculator-only solutions not accepted).",
      "marks": 5
     },
     {
      "code": "8(d)",
      "prompt": "State one limitation of the model.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Hyperbolic functions.",
    "parts": [
     {
      "code": "9(i)(a)",
      "prompt": "Explain why ∫₀^∞ cosh x dx is an improper integral.",
      "marks": 1
     },
     {
      "code": "9(i)(b)",
      "prompt": "Show that ∫₀^∞ cosh x dx diverges.",
      "marks": 3
     },
     {
      "code": "9(ii)",
      "prompt": "4 sinh x = p cosh x, where p is a real constant, has real solutions. Find the possible range of p.",
      "marks": 2
     }
    ]
   },
   {
    "number": 10,
    "scenario": "A pendulum (Figure 3 on the question paper) is modelled by d²θ/dt² + 9θ = ½ cos 3t, where θ radians is its angle to the downward vertical t seconds after it starts. Initially θ = π/3 and it is at rest; at t = 10, θ = α. The true value of α is 0.62. The equation models forced harmonic motion.",
    "parts": [
     {
      "code": "10(a)(i)",
      "prompt": "Show that θ = (1/12) t sin 3t is a particular solution.",
      "marks": 4
     },
     {
      "code": "10(a)(ii)",
      "prompt": "Hence find the general solution.",
      "marks": 4
     },
     {
      "code": "10(b)",
      "prompt": "Find α to 3 significant figures according to the model.",
      "marks": 4
     },
     {
      "code": "10(c)",
      "prompt": "Evaluate the model.",
      "marks": 1
     },
     {
      "code": "10(d)",
      "prompt": "Modify the differential equation so that it models simple harmonic motion.",
      "marks": 1
     }
    ]
   }
  ],
  "markSchemes": {
   "2": {
    "type": "points",
    "points": [
     "M1 Solves the quadratic in cosh²x, e.g. (8cosh²x − 9)(8cosh²x + 1) = 0",
     "A1 cosh²x = 9/8",
     "M1 cosh x = (3/4)√2, then uses arcosh's log form or exponentials to find x",
     "A1 x = ±½ ln 2 only"
    ],
    "guidance": "Alternatives: 16 sinh²2x = 9 giving sinh 2x = ±3/4, or 4e^(4x) − 17 + 4e^(−4x) = 0."
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 2 + 3i"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1 Complete method for the third root, e.g. (z² − 4z + 13)(z + 4), or sum of roots = 0, or product = −52",
     "A1 z = 2 ± 3i, −4",
     "M1 Complete method for a, e.g. expanding the factors or pair sum",
     "A1 a = −3"
    ]
   },
   "1(c)": {
    "type": "points",
    "points": [
     "B1ft −4 on the negative real axis (further from O than 2) and 2 ± 3i placed symmetrically in quadrants 1 and 4"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Divides by cos x; IF = e^(∫tan x dx) = sec x; y sec x = ∫e^(2x) dx",
     "A1 y sec x = ½e^(2x) (+c)",
     "A1 y = (½e^(2x) + c) cos x"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 x = 0, y = 3 gives c = 5/2",
     "M1 Sets y = 0: cos x = 0",
     "A1 x = π/2 (awrt 1.57)"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Writes ln((r + 1)/(r − 1)) = ln(r + 1) − ln(r − 1)",
     "dM1 Lists terms (r = 2, 3, 4, …, n − 1, n) showing cancellation",
     "A1 Remaining terms ln n + ln(n + 1) − ln 2",
     "A1* ln(n(n + 1)/2) cso"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Sum to 100 minus sum to 50 using (a): ln(100 × 101/2) − ln(50 × 51/2)",
     "M1 Uses log laws with the power 35",
     "A1 35 ln(202/51)"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 det M = a(6) − 2(4) − 3(2a − 12)",
     "A1 det M = 28 ≠ 0, so non-singular for all a"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Matrix of minors (at least 5 correct): (6 4 2a−12; 4+3a 2a+12 a²−8; 9 6 3a−4)",
     "M1 Applies cofactor signs and transposes",
     "M1 Divides by the determinant",
     "A1 M⁻¹ = (1/28)(6 −4−3a 9; −4 2a+12 −6; 2a−12 8−a² 3a−4)"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Form A/(x + 1) + (Bx + C)/(x² + 4) and sets up the identity",
     "dM1 Full method for all three constants",
     "A1 A = 1, B = 1, C = 2"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Splits and integrates to α ln(x + 1) + β ln(x² + 4) + λ arctan(x/2) form",
     "A1 ln(x + 1) + ½ ln(x² + 4) + arctan(x/2)",
     "dM1 Applies limits 0 and 2 and combines logs",
     "A1 ln(3√2) + π/4"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 z* = a − bi and expands (a + bi)(a − bi)",
     "A1 a² + b², so zz* is real"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 Makes the denominator real, e.g. z/z* = z²/18 so z² = 14 + 8√2 i",
     "M1 Forms two equations in a and b from the given facts",
     "A1 Two correct equations, e.g. a² + b² = 18 and a² − b² = 14 (2ab = 8√2)",
     "dM1 Solves simultaneously for a or b",
     "A1 z = ±(4 + √2 i) only"
    ],
    "guidance": "A polar method via arg z is also possible."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 (z + 1/z)⁶ = 64 cos⁶θ",
     "M1 Binomial expansion of (z + 1/z)⁶ (at least 3 correct terms)",
     "A1 (z⁶ + z⁻⁶) + 6(z⁴ + z⁻⁴) + 15(z² + z⁻²) + 20",
     "M1 Pairs terms using zⁿ + z⁻ⁿ = 2 cos nθ",
     "A1* 32 cos⁶θ = cos 6θ + 6 cos 4θ + 15 cos 2θ + 10 cso"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 H = 2"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "B1ft Volume = ½π∫(2cos³(x/4))² dx (180° rotation)",
     "M1 Uses (a) to write cos⁶(x/4) as (1/32)(cos(3x/2) + 6 cos x + 15 cos(x/2) + 10) and integrates",
     "A1 (1/32)((2/3) sin(3x/2) + 6 sin x + 30 sin(x/2) + 10x)",
     "dM1 Applies limits correctly (0 to 4 doubled, or −4 to 4)",
     "A1 24.56 cm³ cao"
    ],
    "guidance": "An answer alone can score at most B1."
   },
   "8(d)": {
    "type": "points",
    "points": [
     "B1 Sensible limitation, e.g. curve may not fit the shape, inaccurate measurements, surface not smooth"
    ]
   },
   "9(i)(a)": {
    "type": "points",
    "points": [
     "B1 The interval is unbounded (upper limit is infinite)"
    ]
   },
   "9(i)(b)": {
    "type": "points",
    "points": [
     "B1 Writes it as lim_{t→∞} ∫₀ᵗ cosh x dx",
     "M1 Integrates to sinh t − 0 (or exponential form) using limits 0 and t",
     "A1 As t → ∞, sinh t → ∞ (eᵗ → ∞), so divergent (cso)"
    ]
   },
   "9(ii)": {
    "type": "points",
    "points": [
     "M1 Divides by cosh x: tanh x = p/4 (or uses exponentials: e^(2x) = (p + 4)/(4 − p))",
     "A1 −4 < p < 4"
    ]
   },
   "10(a)(i)": {
    "type": "points",
    "points": [
     "M1 Differentiates θ = (1/12) t sin 3t twice using the product rule",
     "A1 dθ/dt = (1/12) sin 3t + (1/4) t cos 3t, d²θ/dt² = ½ cos 3t − (3/4) t sin 3t",
     "dM1 Substitutes into the equation",
     "A1* Obtains ½ cos 3t, confirming the PI"
    ],
    "guidance": "Alternatively try θ = λt sin 3t and find λ = 1/12."
   },
   "10(a)(ii)": {
    "type": "points",
    "points": [
     "M1 m² + 9 = 0, m = ±3i",
     "A1 CF θ = A cos 3t + B sin 3t",
     "dM1 GS = CF + PI",
     "A1 θ = A cos 3t + B sin 3t + (1/12) t sin 3t"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 t = 0, θ = π/3 gives A = π/3",
     "M1 Differentiates and uses dθ/dt = 0 at t = 0: B = 0",
     "ddM1 Substitutes t = 10: (π/3) cos 30 + (10/12) sin 30",
     "A1 α = ±0.662 (awrt)"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "B1ft 0.662 is close to 0.62, so a good model (at t = 10)"
    ]
   },
   "10(d)": {
    "type": "points",
    "points": [
     "B1 d²θ/dt² + 9θ = 0 (or any constant on the right)"
    ]
   }
  }
 },

 "fmath-edx-9fm0-2022-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "A student finds arg(z₁/z₂) for z₁ = 3 − 3i and z₂ = √3 + i. Their working: Line 1: arg(z₁) = tan⁻¹(3/3) = π/4. Line 2: arg(z₂) = tan⁻¹(1/√3) = π/6. Line 3: arg(z₁/z₂) = arg(z₁)/arg(z₂). Line 4: = (π/4)/(π/6) = 3/2. Lines 1 and 3 contain errors.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Correct the student's error in (i) line 1 and (ii) line 3.",
      "marks": 2
     },
     {
      "code": "1(b)",
      "prompt": "Write down the correct value of arg(z₁/z₂).",
      "marks": 1
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Show all working. A college runs only Construction, Design and Hospitality; each student takes exactly one. In 2019 there were 1110 students, with 370 more on Construction than on Hospitality. In 2020 Construction rose by 1.25%, Design rose by 2.5% and Hospitality fell by 2%, and the college total rose by 0.27% (2 s.f.).",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "(i) Define a variable for each course's 2019 enrolment. (ii) Write down three equations modelling the situation.",
      "marks": 4
     },
     {
      "code": "2(b)",
      "prompt": "Form and solve a matrix equation to find the 2019 enrolment on each course.",
      "marks": 4
     }
    ]
   },
   {
    "number": 3,
    "scenario": "M = (3 a; 0 1), a constant. Triangle T (area 5 cm²) is mapped to T′ (area 1215 cm²) by Mⁿ, n ∈ ℕ, and vertex A(2, −2) maps to A′(123, −2).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Prove by induction that, for n ∈ ℕ, Mⁿ = (3ⁿ (a/2)(3ⁿ − 1); 0 1).",
      "marks": 6
     },
     {
      "code": "3(b)",
      "prompt": "Find (i) n and (ii) a.",
      "marks": 5
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Complex numbers in exponential form and loci.",
    "parts": [
     {
      "code": "4(i)",
      "prompt": "Given z₁ = 6e^(iπ/3) and z₂ = 6√3 e^(5πi/6), show that z₁ + z₂ = 12e^(2πi/3).",
      "marks": 3
     },
     {
      "code": "4(ii)",
      "prompt": "Given arg(z − 5) = 2π/3, find the least possible value of |z|.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Inverse sine.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Given y = arcsin x, −1 ≤ x ≤ 1, show that dy/dx = 1/√(1 − x²).",
      "marks": 3
     },
     {
      "code": "5(b)",
      "prompt": "Prove that f(x) = arcsin(eˣ), x ≤ 0, has no stationary points.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "4x³ + px² − 14x + q = 0 (p, q real and positive) has roots α, β, γ, with α² + β² + γ² = 16 and 1/α + 1/β + 1/γ = 14/3.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Show that p = 12.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Find q.",
      "marks": 3
     },
     {
      "code": "6(c)",
      "prompt": "Without solving the cubic, find (α − 1)(β − 1)(γ − 1).",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Curve C: r = 1 + tan θ, 0 ≤ θ < π/3 (Figure 1 on the question paper). The tangent to C at A is perpendicular to the initial line. Region R is bounded by C, this tangent and the initial line.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Use differentiation to prove that A has polar coordinates (2, π/4).",
      "marks": 4
     },
     {
      "code": "7(b)",
      "prompt": "Use calculus to show that the area of R is exactly ½(1 − ln 2).",
      "marks": 6
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Two birds fly in straight lines towards a nest: r₁ = (−1, 5, 2)ᵀ + λ(2, a, 0)ᵀ and r₂ = (4, −1, 3)ᵀ + μ(0, 1, −1)ᵀ, where a is a constant. The angle between the paths is 120°. The nest is modelled at the common point of the paths; the park's ground is the plane 2x − 3y + z = 2.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Find a.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "Verify that the paths have a common point and find its coordinates.",
      "marks": 5
     },
     {
      "code": "8(c)",
      "prompt": "Hence find the shortest distance from the nest to the ground.",
      "marks": 3
     },
     {
      "code": "8(d)",
      "prompt": "Comment, with a reason, on whether your answer to (c) is reliable.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "y = coshⁿx, n ≥ 5.",
    "parts": [
     {
      "code": "9(a)(i)",
      "prompt": "Show that d²y/dx² = n² coshⁿx − n(n − 1) coshⁿ⁻²x.",
      "marks": 4
     },
     {
      "code": "9(a)(ii)",
      "prompt": "Find an expression for d⁴y/dx⁴.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "Hence find the first three non-zero terms of the Maclaurin series for y, with simplified coefficients.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1(a)": {
    "type": "points",
    "points": [
     "B1 (i) arg(z₁) = tan⁻¹(−3/3) = −π/4 (or 7π/4)",
     "B1 (ii) arg(z₁/z₂) = arg(z₁) − arg(z₂): the arguments are subtracted"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "B1ft −π/4 − π/6 = −5π/12 (or 19π/12)"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1 Defines C, D, H (or x, y, z) as the numbers on each course",
     "M1 Finds the 2020 increase (1110 × 0.0027 ≈ 3) or total (≈ 1113)",
     "M1 Sets up at least two model equations",
     "A1 C + D + H = 1110, C − H = 370, 0.0125C + 0.025D − 0.02H = 3 (or 1.0125C + 1.025D + 0.98H = 1113)"
    ],
    "guidance": "Parts (i) and (ii) are marked together; 1112.997 is also accepted."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Writes a matrix equation from their equations",
     "A1ft Correct matrix equation, e.g. (1 1 1; 1 0 −1; 0.0125 0.025 −0.02)(C, D, H)ᵀ = (1110, 370, 3)ᵀ",
     "dM1 Uses the inverse matrix to find at least one value",
     "A1 Construction 720, Design 40, Hospitality 350"
    ],
    "guidance": "No matrix equation means no marks in (b). The scheme table prints M1 A1ft dM1 A1 (kept here); its note says ePen records these as M1 M1 A1 A1."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "B1 n = 1 gives (3 a; 0 1), so true for n = 1",
     "M1 Assumes true for n = k",
     "M1 Multiplies the assumed result by M (either order)",
     "A1 Correct unsimplified product, e.g. (3·3ᵏ a·3ᵏ + (a/2)(3ᵏ − 1); 0 1)",
     "A1 Simplifies to (3ᵏ⁺¹ (a/2)(3ᵏ⁺¹ − 1); 0 1)",
     "A1 Full conclusion: true for n = 1 and k ⇒ k + 1, so true for all n ∈ ℕ"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 det(Mⁿ) = 3ⁿ (or det M = 3)",
     "M1 5 × 3ⁿ = 1215 so 3ⁿ = 243",
     "A1 n = 5",
     "M1 Mⁿ(2, −2)ᵀ = (123, −2)ᵀ: 2(3ⁿ) − 2(a/2)(3ⁿ − 1) = 123",
     "A1 a = 1.5"
    ]
   },
   "4(i)": {
    "type": "points",
    "points": [
     "M1 Converts both to a + bi and adds: (3 + 3√3 i) + (−9 + 3√3 i) = −6 + 6√3 i",
     "dM1 Shows the modulus 12 and argument 2π/3 by working",
     "A1* z₁ + z₂ = 12e^(2πi/3)"
    ]
   },
   "4(ii)": {
    "type": "points",
    "points": [
     "M1 Diagram: half-line from 5 at angle 2π/3; shortest distance is perpendicular from O",
     "M1 Trigonometry: sin(π/3) = |z|/5",
     "A1 |z| = 5√3/2"
    ],
    "guidance": "Alternatives: minimise x² + y² on y = −√3x + 5√3 (x = 3.75), or intersect with the perpendicular through O at (15/4, 5√3/4)."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 sin y = x, differentiates: cos y dy/dx = 1",
     "M1 Uses sin²y + cos²y = 1 to get cos y = √(1 − x²)",
     "A1* dy/dx = 1/√(1 − x²) cso"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Chain rule: f′(x) = (1/√(1 − e^(2x))) × …",
     "A1 f′(x) = eˣ/√(1 − e^(2x))",
     "A1 eˣ ≠ 0 (eˣ > 0), so f′(x) ≠ 0: no stationary points"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 α + β + γ = −p/4 and αβ + βγ + γα = −7/2",
     "M1 (α + β + γ)² = Σα² + 2Σαβ: (−p/4)² = 16 + 2(−7/2)",
     "A1* p = 12 cso"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 1/α + 1/β + 1/γ = (Σαβ)/(αβγ)",
     "M1 (−7/2)/(−q/4) = 14/3 and solves",
     "A1 q = 3"
    ],
    "guidance": "Alternatively substitute x = 1/w: qw³ − 14w² + 12w + 4 = 0, so 14/q = 14/3."
   },
   "6(c)": {
    "type": "points",
    "points": [
     "M1 Expands (α − 1)(β − 1)(γ − 1)",
     "A1 αβγ − Σαβ + Σα − 1",
     "dM1 Substitutes −3/4, −7/2 and −3",
     "A1 −5/4"
    ],
    "guidance": "Alternatively substitute x + 1 into the cubic: the constant term is 5, giving −5/4."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 x = r cos θ = cos θ + sin θ and differentiates",
     "A1 dx/dθ = −sin θ + cos θ (or equivalent)",
     "dM1 Sets dx/dθ = 0: tan θ = 1, θ = π/4",
     "A1* r = 1 + tan(π/4) = 2, so A is (2, π/4)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 ½∫(1 + tan θ)² dθ, using tan²θ = sec²θ − 1, and integrates",
     "A1 ½[2 ln|sec θ| + tan θ] (or equivalent)",
     "dM1 Limits 0 to π/4: ln√2 + ½",
     "M1 Triangle area ½(2 cos π/4)(2 sin π/4) = 1",
     "M1 Area R = triangle − curve area = 1 − (ln√2 + ½)",
     "A1* ½(1 − ln 2) cso"
    ],
    "guidance": "The substitution u = tan θ is also accepted."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Scalar product of directions with cos 120°",
     "A1 a/(√(4 + a²)√2) = −½",
     "M1 Squares and solves: a² = 4",
     "A1 a = −2"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Two component equations, e.g. −1 + 2λ = 4, 2 = 3 − μ",
     "M1 Solves: λ = 5/2, μ = 1",
     "dM1 Substitutes into a line",
     "A1 (4, 0, 2)",
     "B1 Checks the third equation (5 − 2λ = 0 = −1 + μ), so the lines meet"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 Point-to-plane distance: |2(4) − 3(0) + 2 − 2|/√(2² + 3² + 1²)",
     "A1ft Correct expression for their point",
     "A1 8/√14 = 4√14/7 (awrt 2.1)"
    ],
    "guidance": "The scheme table prints M1 A1ft A1 (kept here); its note says ePen records these as M1 M1 A1. Alternative: subtract the plane's distances from the origin, 10/√14 − 2/√14."
   },
   "8(d)": {
    "type": "points",
    "points": [
     "B1 Not reliable, e.g. birds do not fly in straight lines, ground is not flat, nest is not a point"
    ]
   },
   "9(a)(i)": {
    "type": "points",
    "points": [
     "M1 Chain and product rules for first and second derivatives",
     "A1 dy/dx = n coshⁿ⁻¹x sinh x; d²y/dx² = n(n − 1) coshⁿ⁻²x sinh²x + n coshⁿx",
     "M1 Uses sinh²x = cosh²x − 1",
     "A1* n² coshⁿx − n(n − 1) coshⁿ⁻²x cso"
    ]
   },
   "9(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Differentiates twice more to the correct form",
     "A1 d⁴y/dx⁴ = n³(n − 1) coshⁿ⁻²x sinh²x + n³ coshⁿx − n(n − 1)(n − 2)(n − 3) coshⁿ⁻⁴x sinh²x − n(n − 1)(n − 2) coshⁿ⁻²x (unsimplified fine)"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Evaluates at x = 0: y = 1, y′ = 0, y″ = n² − n(n − 1), y‴ = 0, y⁽⁴⁾ = n³ − n(n − 1)(n − 2), and uses the Maclaurin formula",
     "A1 y = 1 + nx²/2 + (3n² − 2n)x⁴/24 + … cso"
    ]
   }
  }
 },

 /* ═══════════════════════════════════════════════════════════════════════════
    OCR A FURTHER MATHS H245
  ═══════════════════════════════════════════════════════════════════════════ */

 "fmath-ocr-h245-2024-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "y = sin⁻¹(x²).",
    "parts": [
     {
      "code": "1",
      "prompt": "Find dy/dx.",
      "marks": 3
     }
    ]
   },
   {
    "number": 2,
    "scenario": "C₁ = {z : 0 ≤ arg(z + i) ≤ ¼π}. C₂ is the interior of the circle with centre 3 and radius 2 (shown shaded, with a dashed boundary, on an Argand diagram on the question paper).",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Shade the region representing C₁ on an Argand diagram.",
      "marks": 2
     },
     {
      "code": "2(b)",
      "prompt": "Determine whether 1.2 + 0.8i lies in C₁.",
      "marks": 2
     },
     {
      "code": "2(c)",
      "prompt": "Define C₂ using set notation.",
      "marks": 2
     },
     {
      "code": "2(d)",
      "prompt": "Determine whether 1.2 + 0.8i lies in C₂.",
      "marks": 2
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Transformation T has matrix N = (a 4 2; 5 1 0; 3 6 3), where a is a constant.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find N² in terms of a.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "Find det N in terms of a.",
      "marks": 2
     },
     {
      "code": "3(c)",
      "prompt": "a = 13 to the nearest integer. Shape S₁ has volume 11.6 (1 d.p.) and T maps it to S₂. A student says the volume of S₂ is below 400. Comment on this claim.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Detailed reasoning required. 2x³ + 3x² + 6x − 3 = 0 has roots α, β, γ.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find a cubic equation with integer coefficients whose roots are α²βγ, αβ²γ and αβγ².",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "The rational function 12x³ / ((2x + 1)(2x² + 1)).",
    "parts": [
     {
      "code": "5",
      "prompt": "Express it in partial fractions.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "6",
      "prompt": "Find the exact value of ∫ from 9 to ∞ of 18/(x²√x) dx.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Curve C: y = 16cosh x − sinh 2x.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Using the exponential definitions of cosh u and sinh u, prove sinh 2u ≡ 2 sinh u cosh u.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Show that d²y/dx² = 0 has exactly one solution.",
      "marks": 4
     },
     {
      "code": "7(c)",
      "prompt": "Given C has exactly one point of inflection, use (b) to find its exact coordinates, using logarithmic form where appropriate.",
      "marks": 3
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Divisibility by induction.",
    "parts": [
     {
      "code": "8",
      "prompt": "Prove by induction that 11 × 7ⁿ − 13ⁿ − 1 is divisible by 3 for all integers n ≥ 0.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "scenario": "The curves y = (ln(1 + x))² and y = 2x³ meet at the origin O and at a point A with x > 0 (sketch on the question paper).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find the Maclaurin series of (ln(1 + x))² as far as the x⁴ term.",
      "marks": 3
     },
     {
      "code": "9(b)",
      "prompt": "Detailed reasoning required. Use (a) to estimate the x-coordinate of A to 2 decimal places.",
      "marks": 3
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Particle B, mass 3 kg, moves in a line with velocity v m s⁻¹. For 0 ≤ t < ¼π the only force on it is −(15 sin 4t + 6v tan 2t) N. At t = 0, v = 4.5. The motion is modelled by dv/dt + P(t)v = Q(t).",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Find P(t) and Q(t).",
      "marks": 2
     },
     {
      "code": "10(b)",
      "prompt": "Using an integrating factor, find the first time at which B is at rest according to the model.",
      "marks": 8
     }
    ]
   },
   {
    "number": 11,
    "scenario": "Construction site model in metres, floor in the x-y plane. Four vertical poles P₁, P₂, P₃, P₄ have tops at (0, 0, 18), (12, 14, 20), (0, 11, 7) and (18, 2, 16), bottoms directly below on the floor (diagram not to scale on the question paper). Wire S joins the tops of P₁ and P₂; wire T joins the tops of P₃ and P₄. S is r = (0, 0, 18)ᵀ + λ(6, 7, 1)ᵀ, 0 ≤ λ ≤ 2.",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Give a vector equation of the segment T in the same form, with a direction vector of coprime integers.",
      "marks": 2
     },
     {
      "code": "11(b)",
      "prompt": "Test 1 requires S and T to be at least 5 m apart everywhere. Using a suitable formula, decide whether the site passes.",
      "marks": 2
     },
     {
      "code": "11(c)",
      "prompt": "A camera is at a point Q on S. Test 2 requires Q to be at least 19 m from the top of P₃. Decide whether such a Q exists.",
      "marks": 3
     }
    ]
   },
   {
    "number": 12,
    "scenario": "For k > 0, curve Cₖ has polar equation r = k(cos θ + 1) + 10/k, 0 ≤ θ ≤ 2π; each Cₖ is a single closed loop (C₁₀.₅ sketched on the question paper) enclosing area Aₖ, which has a single minimum.",
    "parts": [
     {
      "code": "12",
      "prompt": "Find the exact value of k that minimises Aₖ.",
      "marks": 7
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 1/√(1 − (x²)²) seen",
     "M1 Multiplies by 2x (chain rule)",
     "A1 dy/dx = 2x/√(1 − x⁴)"
    ],
    "guidance": "Implicit route: B1 cos y dy/dx = 2x; M1 replaces cos y by √(1 − x⁴); A1 as above. Must be in terms of x; ISW."
   },
   "4": {
    "type": "points",
    "points": [
     "M1 αβγ = 3/2",
     "M1 Substitution w = (3/2)x, i.e. x = (2/3)w",
     "A1 16w³ + 36w² + 108w − 81 = 0"
    ],
    "guidance": "Alternative via symmetric functions: Σα = −3/2, Σαβ = 3; new sums −9/4, 27/4 and product 81/16."
   },
   "5": {
    "type": "points",
    "points": [
     "B1 Form A + B/(2x + 1) + (Cx + D)/(2x² + 1)",
     "M1* Identity 12x³ ≡ A(2x + 1)(2x² + 1) + B(2x² + 1) + (Cx + D)(2x + 1)",
     "M1dep* Equates coefficients or substitutes, e.g. A = 3, A + B + D = 0",
     "A1 Two of A = 3, B = −1, C = −2, D = −2",
     "A1 3 − 1/(2x + 1) − (2x + 2)/(2x² + 1)"
    ],
    "guidance": "Alternative: divide first to get 3, then split (−6x² − 6x − 3)/((2x + 1)(2x² + 1))."
   },
   "6": {
    "type": "points",
    "points": [
     "M1* Integrates to the form ax^(−3/2): 18(−(2/3)x^(−3/2))",
     "M1 Uses lower limit 9 and a finite upper limit k",
     "B1dep* k^(−3/2) → 0 as k → ∞, clearly as a limit",
     "A1 4/9"
    ]
   },
   "8": {
    "type": "points",
    "points": [
     "B1 n = 0: 11 − 1 − 1 = 9, divisible by 3",
     "M1* Assumes 11 × 7ᵏ − 13ᵏ − 1 = 3m",
     "M1dep* Writes 11 × 7ᵏ⁺¹ − 13ᵏ⁺¹ − 1 = 7(3m + 13ᵏ + 1) − 13ᵏ⁺¹ − 1",
     "A1 = 3(7m + 2 − 2 × 13ᵏ), a multiple of 3",
     "A1 Full conclusion: true for n = 0 and k ⇒ k + 1, so true for all n ≥ 0"
    ],
    "guidance": "Alternative: f(k + 1) − f(k) = 66 × 7ᵏ − 12 × 13ᵏ, so f(k + 1) = f(k) + 3(22 × 7ᵏ − 4 × 13ᵏ). Base case n = 1 (63) can earn B1, but the final A1 needs n = 0 dealt with as well."
   },
   "12": {
    "type": "points",
    "points": [
     "M1* ½∫₀^2π (k(cos θ + 1) + 10/k)² dθ",
     "M1 Expands and uses cos²θ = ½(1 + cos 2θ)",
     "M1dep* Integrates correctly term by term",
     "M1 Applies limits 0 and 2π",
     "A1 Aₖ = π(3k²/2 + 20 + 100/k²)",
     "M1 dAₖ/dk = π(3k − 200/k³) = 0",
     "A1 k = (200/3)^(1/4)"
    ],
    "guidance": "Missing ½ gives π(3k² + 40 + 200k⁻²): final A0 unless justified."
   },
   "2(a)": {
    "type": "points",
    "points": [
     "M1 Half-line from (0, −1) (or ±1 on an axis) at about π/4 to the positive real axis",
     "A1 Solid half-line from −i through 1, region between it and the line Im z = −1 shaded"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 arg(1.2 + 1.8i) = arctan(1.8/1.2)",
     "A1 0.98… > π/4 (0.785…), so not in C₁"
    ],
    "guidance": "Alternative: half-line is y = x − 1, so at x = 1.2, y = 0.2 < 0.8, not in C₁. SC B2 for 1.8 > 1.2 with 'no'."
   },
   "2(c)": {
    "type": "points",
    "points": [
     "M1 |z − 3| and 2 seen",
     "A1 {z : |z − 3| < 2}"
    ],
    "guidance": "SC1 for {z : |z + 3| < 2} or {z : |z − 3| < 4}."
   },
   "2(d)": {
    "type": "points",
    "points": [
     "M1 |1.2 + 0.8i − 3| = √((−1.8)² + 0.8²) = √3.88",
     "A1 √3.88 (≈ 1.97) < 2, so it is in C₂"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 3×3 matrix with at least three correct entries",
     "M1 At least two rows or two columns correct",
     "A1 N² = (a² + 26  4a + 16  2a + 6; 5a + 5  21  10; 3a + 39  36  15)"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Correct expansion, e.g. a(3 − 0) − 4(15 − 0) + 2(30 − 3)",
     "A1 det N = 3a − 6"
    ]
   },
   "3(c)": {
    "type": "points",
    "points": [
     "M1 Volume = 11.6 × det N, using bounds 11.55 ≤ V₁ < 11.65 and 12.5 ≤ a < 13.5",
     "A1 A correct bound: upper 11.65 × 34.5 = 401.925, lower 11.55 × 31.5 = 363.825",
     "A1 Volume could be above or below 400, so the claim is not necessarily true"
    ],
    "guidance": "If M0, SC1 for 144.375 and 157.275 (using det N = 13)."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 2 sinh u cosh u = 2((eᵘ − e⁻ᵘ)/2)((eᵘ + e⁻ᵘ)/2)",
     "A1 = ½(e²ᵘ − e⁻²ᵘ) = sinh 2u, complete proof"
    ],
    "guidance": "May work from sinh 2u to the right-hand side. SC B1 if working from the identity to a true statement."
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1* dy/dx = 16 sinh x − 2cosh 2x (form ±16 sinh x ± k cosh 2x)",
     "A1 d²y/dx² = 16cosh x − 4 sinh 2x",
     "M1dep* Uses (a): 16cosh x − 8 sinh x cosh x = 8cosh x(2 − sinh x)",
     "A1 cosh x > 0 (never zero), so only sinh x = 2, x = sinh⁻¹ 2"
    ],
    "guidance": "Exponential routes allowed, e.g. quartic e⁴ˣ − 4e³ˣ − 4eˣ − 1 = 0 with unique root ln(2 + √5)."
   },
   "7(c)": {
    "type": "points",
    "points": [
     "B1 x = ln(2 + √5)",
     "B1FT cosh x = √5, e.g. from √(1 + 2²)",
     "B1 y = 12√5"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Squares x − x²/2 + x³/3 − …",
     "B1 x² − x³ correct",
     "A1 + (11/12)x⁴"
    ],
    "guidance": "Alternative by differentiation: f″(0) = 2, f‴(0) = −6, f⁗(0) = 22."
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1* x² − x³ + (11/12)x⁴ = 2x³",
     "M1dep* x²(1 − 3x + (11/12)x²) = 0",
     "A1 Roots (18 ± 8√3)/11 = 0.377… or 2.896…; x ≈ 0.38 since the series needs −1 < x ≤ 1"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 −(15 sin 4t + 6v tan 2t) = 3 dv/dt",
     "A1 dv/dt + 2v tan 2t = −5 sin 4t, so P = 2 tan 2t, Q = −5 sin 4t"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1* I = e^(∫2 tan 2t dt)",
     "M1 I = e^(−ln cos 2t) = sec 2t",
     "M1dep* v sec 2t = −5∫sin 4t sec 2t dt",
     "M1 Simplifies to −10∫sin 2t dt",
     "A1 v sec 2t = 5cos 2t + c",
     "M1 v(0) = 4.5 gives c = −0.5",
     "M1dep* 0 = 5cos 2t − 0.5, so cos 2t = 0.1",
     "A1 t = 0.735 s"
    ],
    "guidance": "42.1 (degrees) scores A0."
   },
   "11(a)": {
    "type": "points",
    "points": [
     "B1* Two of: 'r =', a correct position vector, a lowest-terms direction with parameter",
     "B1dep* r = (0, 11, 7)ᵀ + μ(2, −1, 1)ᵀ"
    ],
    "guidance": "Equivalents such as (18, 2, 16)ᵀ + μ(−2, 1, −1)ᵀ accepted. A missing or wrong range for μ is condoned (for the given form it would be 0 ≤ μ ≤ 9, but the scheme does not require it)."
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1 n = (6, 7, 1)ᵀ × (2, −1, 1)ᵀ = (8, −4, −20)ᵀ and D = |((0, 0, 18) − (0, 11, 7))·n| / |n|",
     "A1 D = 22√30/15 ≈ 8.03 > 5, so Test 1 passed"
    ]
   },
   "11(c)": {
    "type": "points",
    "points": [
     "B1 PQ = ±(6λ, 7λ − 11, λ + 11)",
     "B1 |PQ| = √((6λ)² + (7λ − 11)² + (λ + 11)²)",
     "B1 86λ² − 132λ − 119 ≥ 0 gives λ ≥ 2.17 or λ ≤ −0.637, outside 0 ≤ λ ≤ 2, so not possible"
    ],
    "guidance": "Alternative: the furthest points are the ends, at distances 11√2 ≈ 15.56 and √322 ≈ 17.94, both below 19."
   }
  }
 },

 "fmath-ocr-h245-2023-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find the value of Σ (r = 1 to 50) r²(16 − r).",
      "marks": 3
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Detailed reasoning required. The equation z⁴ + 4z³ + 9z² + 10z + 6 = 0 has roots α, β, γ, δ.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Show that w⁴ + 3w² + 2 = 0 is a quartic with roots α + 1, β + 1, γ + 1, δ + 1.",
      "marks": 3
     },
     {
      "code": "2(b)",
      "prompt": "Hence find the exact roots of z⁴ + 4z³ + 9z² + 10z + 6 = 0.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Complex numbers in exponential form.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Show that (−3 + √3 i)/2 = √3 e^(5πi/6).",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Hence find the exact roots of z⁵ = 9(−3 + √3 i)/2, in the form re^(iθ) with r > 0 and 0 ≤ θ < 2π.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Transformations T_A and T_B have matrices A = (0 −1; 1 0) and B = (0 1; 1 0). T_C has matrix C = (½ 0; 0 ⅓). Region R is x² + y² ≤ 36, and R′ is the image of R under T_C.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Describe geometrically the single transformation T_A followed by T_B.",
      "marks": 2
     },
     {
      "code": "4(b)",
      "prompt": "By thinking about T_A, find the matrix A⁴²³.",
      "marks": 3
     },
     {
      "code": "4(c)(i)",
      "prompt": "Find the exact area of R′.",
      "marks": 2
     },
     {
      "code": "4(c)(ii)",
      "prompt": "Sketch R′, labelling every point where its boundary meets the coordinate axes.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Second-order linear differential equations.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find the general solution of d²y/dx² − 2 dy/dx + 5y = 0.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Hence find the general solution of d²y/dx² − 2 dy/dx + 5y = x(4 − 5x).",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Detailed reasoning required. A machine's power output is modelled by p = 20 − 20 tanh(1.44t) watts, t hours after switch-on (t ≥ 0).",
    "parts": [
     {
      "code": "6",
      "prompt": "Using the model, find the mean power output over the first half hour, to 2 decimal places.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "A particle P of mass 0.5 kg moves in a straight line in a wind tunnel; x m is its displacement from fixed point O at time t s (x ≥ 0 for all t ≥ 0). Forces: 5(t + 1)cosh t N in the positive x-direction; 0.5x N towards O; |dx/dt| N in the direction of motion. The engineer's equation is 5(t + 1)cosh t − 0.5x + dx/dt = 0.5 d²x/dt². At t = 0, x = 6 and P moves towards O at 5 m s⁻¹. The particular solution x = f(t) has a Maclaurin series valid for all t ≥ 0. After 0.25 s, P has actually moved 1.43 m towards O.",
    "parts": [
     {
      "code": "7(a)(i)",
      "prompt": "Explain the sign of the dx/dt term in the equation.",
      "marks": 1
     },
     {
      "code": "7(a)(ii)",
      "prompt": "Without solving the equation, find the acceleration of P at t = 0.",
      "marks": 2
     },
     {
      "code": "7(b)(i)",
      "prompt": "Show that the Maclaurin series for f(t) up to the t term is 6 − 5t.",
      "marks": 1
     },
     {
      "code": "7(b)(ii)",
      "prompt": "Use (a)(ii) to show the t² term is −3t².",
      "marks": 1
     },
     {
      "code": "7(b)(iii)",
      "prompt": "By differentiating the differential equation with respect to t, show the t³ term is 0.5t³.",
      "marks": 4
     },
     {
      "code": "7(c)(i)",
      "prompt": "Using the series up to t³, evaluate how suitable the model is for the displacement at t = 0.25.",
      "marks": 1
     },
     {
      "code": "7(c)(ii)",
      "prompt": "Explain why the series up to t³ may not be sensible for judging the model at t = 10.",
      "marks": 1
     }
    ]
   },
   {
    "number": 8,
    "scenario": "P(0, 2, 3), Q(2, 0, 1), R(1, 3, 0); θ is the acute angle between PQ and PR. Triangle PQR lies in plane Π. S is (5, 3, −1). Tetrahedron PQRS is rotated about the y-axis to P′Q′R′S′, and S′ has x-coordinate 2√2.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that sin θ = (2/11)√22.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "Find an equation of Π in the form ax + by + cz = d with integer a, b, c, d.",
      "marks": 3
     },
     {
      "code": "8(c)",
      "prompt": "Using the shortest distance from S to Π, show the volume of PQRS is 14/3. (Volume = ⅓ × base area × perpendicular height.)",
      "marks": 4
     },
     {
      "code": "8(d)",
      "prompt": "Using the Formulae Booklet matrix for rotation by θ about the y-axis, find the exact possible coordinates of R′.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Detailed reasoning required. f(x) = sin(4 sin⁻¹(x^(1/5))) − 8 sin(2 sin⁻¹(x^(1/5))) + 12 sin⁻¹(x^(1/5)), for real x with 0 ≤ x < 1. R is the unbounded region between y = 1/√(1 − x^(2/5)) (0 ≤ x < 1), the x-axis, x = 0 and the asymptote x = 1 (diagram on the question paper); its area is finite.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Use de Moivre's theorem to find constants A, B, C with sin⁴θ ≡ A cos 4θ + B cos 2θ + C.",
      "marks": 5
     },
     {
      "code": "9(b)",
      "prompt": "Show that f′(x) = 32 / (5√(1 − x^(2/5))).",
      "marks": 6
     },
     {
      "code": "9(c)",
      "prompt": "Find the exact area of R.",
      "marks": 3
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "M1 Splits into 16Σr² − Σr³ and uses the correct standard formulae",
     "M1 Substitutes n = 50, e.g. (16/6)×50×51×101 − ¼×50²×51²",
     "A1 −938825 with all notation correct"
    ],
    "guidance": "Alternative: simplify first to n(n + 1)(32 + 61n − 3n²)/12, then substitute n = 50."
   },
   "6": {
    "type": "points",
    "points": [
     "B1 Mean = (1/0.5)∫₀^0.5 (20 − 20 tanh 1.44t) dt",
     "M1 ∫ tanh 1.44t dt = k ln cosh 1.44t (or k ln|e^(1.44t) + e^(−1.44t)|)",
     "A1 Fully correct integral with k = 1/1.44",
     "A1 20 − (40/1.44) ln(2.5412/2) = 13.35 W (cao, clear working)"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes z = w − 1",
     "M1 Expands, with at least (w − 1)⁴ seen",
     "A1 Convincingly reaches w⁴ + 3w² + 2 = 0 (AG; must end '= 0', in variable w)"
    ],
    "guidance": "Alternatives: substitute w = z + 1 into the answer to recover the original quartic (M1 A1); or B1 B1 B1 via root symmetry (Σα = −4, Σαβ = 9, Σαβγ = −10, αβγδ = 6, giving new sums 0, 3, 0 and product 2)."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Solves the quadratic in w²: w² = −1, −2",
     "M1 Square roots with ±: w = ±i, ±√2 i",
     "A1 z = −1 ± i, −1 ± √2 i (cao)"
    ],
    "guidance": "Answers with no working score 0."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "B1 Modulus: ½√(9 + 3) = ½√12 = √3 (AG, must show method)",
     "B1 Argument: arctan(−√3/3) = −π/6, so θ = π − π/6 = 5π/6 (AG)"
    ],
    "guidance": "Alternative M1 A1: expand √3(cos 5π/6 + i sin 5π/6) = (√3 i − 3)/2."
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 r = (9√3)^(1/5) = √3",
     "M1 θ = (5π/6 + 2kπ)/5 = (π/30)(5 + 12k), k = 0, …, 4",
     "A1 z = √3e^(πi/6), √3e^(17πi/30), √3e^(29πi/30), √3e^(41πi/30), √3e^(53πi/30)"
    ],
    "guidance": "If M0, SC B1 for all five roots correct."
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Multiplies in the right order: BA = (1 0; 0 −1)",
     "A1 Reflection in the x-axis (y = 0)"
    ],
    "guidance": "Or: A is a 90° anticlockwise rotation, B a reflection in y = x. Correct answer with no working B2."
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 T_A is a rotation of 90° anticlockwise about O",
     "M1 A⁴ = I, and 423 leaves remainder 3 on division by 4, so A⁴²³ = A³",
     "A1 A⁴²³ = (0 1; −1 0)"
    ]
   },
   "4(c)(i)": {
    "type": "points",
    "points": [
     "M1 det C = ½ × ⅓ = 1/6 seen",
     "A1 Area = 36π/6 = 6π (cao)"
    ],
    "guidance": "Or ellipse area πab = π × 3 × 2."
   },
   "4(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Closed ellipse-shaped region, wider horizontally than vertically",
     "A1 Axis intercepts labelled at x = ±3",
     "A1 Intercepts labelled at y = ±2",
     "A1 Region shaded or labelled R′, all correct"
    ],
    "guidance": "Only positive intercepts labelled: A1 rather than A2 for the intercepts. Axes swapped: A1."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 Auxiliary equation n² − 2n + 5 = 0 gives n = 1 ± 2i",
     "B1 y = eˣ(A cos 2x + B sin 2x) (ft complex roots)"
    ],
    "guidance": "Equivalent forms accepted; must be written as y = …"
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1 Trial function y = ax² + bx + c",
     "M1 Differentiates and substitutes into the equation",
     "A1 a = −1, b = 0, c = 2/5",
     "A1ft y = eˣ(A cos 2x + B sin 2x) − x² + 2/5"
    ],
    "guidance": "Final mark follows through their PI and CF, provided the CF has exactly two arbitrary constants."
   },
   "7(a)(i)": {
    "type": "points",
    "points": [
     "B1 Positive because this force acts in the same direction as the motion"
    ]
   },
   "7(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Substitutes t = 0, x = 6, dx/dt = ±5: ½ẍ = 5 − 3 − 5",
     "A1 Acceleration −6 m s⁻² (or 6 towards O)"
    ]
   },
   "7(b)(i)": {
    "type": "points",
    "points": [
     "B1 Uses f(0) = 6 and f′(0) = −5 in the Maclaurin form to get 6 − 5t (AG)"
    ]
   },
   "7(b)(ii)": {
    "type": "points",
    "points": [
     "B1 f″(0) = −6, so the term is (−6)t²/2! = −3t² (AG)"
    ]
   },
   "7(b)(iii)": {
    "type": "points",
    "points": [
     "M1 Differentiates using d(cosh t)/dt = sinh t and the product rule",
     "A1 5cosh t + 5(t + 1)sinh t − 0.5 dx/dt + d²x/dt² = ½ d³x/dt³",
     "M1 Substitutes t = 0: 5 + 0 + 2.5 − 6 = ½f‴(0)",
     "A1 f‴(0) = 3, so the term is 3t³/3! = ½t³ (AG)"
    ]
   },
   "7(c)(i)": {
    "type": "points",
    "points": [
     "B1 x(0.25) ≈ 4.570, so distance ≈ 1.430 m; close to 1.43, so the model is suitable"
    ]
   },
   "7(c)(ii)": {
    "type": "points",
    "points": [
     "B1 For t > 1 the higher-power terms are large and cannot be neglected, so more terms would be needed"
    ],
    "guidance": "Just stating f(10) = 156 is too large is not enough."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 PQ = (2, −2, −2)ᵀ and PR = (1, 1, −3)ᵀ",
     "M1 Scalar product with magnitudes: cos θ = 6/(√12√11)",
     "A1 sin θ = √(8/11) = (2/11)√22 in exact form (AG)"
    ],
    "guidance": "Alternatives: |PQ × PR| = 4√6 over √12√11; or sides √11, √11, √12 with the cosine rule (cos θ = √(3/11)) or an isosceles median."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 PQ × PR = 4(2, 1, 1)ᵀ (or another valid normal)",
     "M1 Uses r·n = d with their normal",
     "A1 2x + y + z = 5"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 Shortest-distance method with their normal",
     "A1 Distance = |10 + 3 − 1 − 5|/√6 = 7/√6",
     "M1 Base area ½|PQ||PR| sin θ (or ½|PQ × PR|) times their distance, divided by 3",
     "A1 V = ⅓ × ½ × 2√3 × √11 × (2/11)√22 × 7/√6 = 14/3 (AG)"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 Rotation matrix (cos φ 0 sin φ; 0 1 0; −sin φ 0 cos φ) times OS (or OR)",
     "M1 From 5cos φ − sin φ = 2√2, forms a quadratic in cos φ or sin φ, e.g. 26cos²φ − 20√2 cos φ + 7 = 0",
     "A1 cos φ = √2/2 or 7√2/26 (exact)",
     "M1 Finds the matching sin φ (√2/2 or −17√2/26) and applies the matrix to OR",
     "A1 R′ = (√2/2, 3, −√2/2) or (7√2/26, 3, 17√2/26), both and no others"
    ],
    "guidance": "Alternative for the first three marks: write 5cos φ − sin φ = √26 cos(φ + α) with tan α = 1/5. If no other marks, SC B1 for any R′ with y-coordinate 3."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 e^(iθ) − e^(−iθ) = 2i sin θ",
     "M1 (e^(iθ) − e^(−iθ))⁴ = 16 sin⁴θ",
     "M1 Expands: e^(4iθ) − 4e^(2iθ) + 6 − 4e^(−2iθ) + e^(−4iθ)",
     "M1 Groups terms: 2cos 4θ − 8cos 2θ + 6 = 16 sin⁴θ",
     "A1 A = 1/8, B = −1/2, C = 3/8 (cao)"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "B1 d(sin⁻¹u)/du = 1/√(1 − u²)",
     "M1 Uses the chain rule with u = x^(1/5), v = sin⁻¹u",
     "A1 Correct derivative: (4cos 4v − 16cos 2v + 12) × 1/√(1 − x^(2/5)) × (1/5)x^(−4/5)",
     "M1 Uses part (a): 4cos 4v − 16cos 2v + 12 = 32 sin⁴v",
     "M1 sin⁴(sin⁻¹ x^(1/5)) = x^(4/5)",
     "A1 f′(x) = 32/(5√(1 − x^(2/5))) clearly shown (AG)"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 Area = lim k→1 of ∫₀ᵏ = (5/32) lim (f(k) − f(0)), using part (b) with upper limit k < 1",
     "M1 Correct use of limits: f(0) = 0 and sin⁻¹(k^(1/5)) → π/2, so f(k) → 6π",
     "A1 Area = (5/32) × 6π = 15π/16"
    ]
   }
  }
 },

 "fmath-ocr-h245-2022-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Detailed reasoning required. Region R lies between y = √(sinh x), the x-axis and x = 2 ln 3 (axes in cm; diagram on the question paper). A chocolate piece is modelled as the solid formed when R is rotated fully about the x-axis.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Show that cosh(2 ln 3) = 41/9.",
      "marks": 2
     },
     {
      "code": "1(b)",
      "prompt": "Find the exact volume of one chocolate piece under the model.",
      "marks": 4
     }
    ]
   },
   {
    "number": 2,
    "scenario": "A = (2 −2; 1 3). C = (2, 0, 1)ᵀ (a column) and D = (0 2 p) (a row), with p a constant.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Find det A.",
      "marks": 1
     },
     {
      "code": "2(b)",
      "prompt": "Write down A⁻¹.",
      "marks": 1
     },
     {
      "code": "2(c)",
      "prompt": "Hence solve A(x, y)ᵀ = (−1, 2)ᵀ.",
      "marks": 2
     },
     {
      "code": "2(d)",
      "prompt": "Write down the matrix B for which AB = 4I.",
      "marks": 1
     },
     {
      "code": "2(e)",
      "prompt": "Find CD and DC in terms of p.",
      "marks": 3
     },
     {
      "code": "2(f)",
      "prompt": "CD ≠ DC disproves a claimed property of matrix multiplication. Name the property.",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Detailed reasoning required. Loci C₁: |z| = |z − 2i| and C₂: |z − 2| = √5.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find the roots of 2z² − 2z + 5 = 0.",
      "marks": 2
     },
     {
      "code": "3(b)(i)",
      "prompt": "Sketch C₁ and C₂ on one Argand diagram, showing any intercepts with the imaginary axis.",
      "marks": 3
     },
     {
      "code": "3(b)(ii)",
      "prompt": "Shade the region {z : |z| ≤ |z − 2i|} ∩ {z : |z − 2| ≤ √5}.",
      "marks": 1
     },
     {
      "code": "3(c)(i)",
      "prompt": "Show that both roots of 2z² − 2z + 5 = 0 satisfy |z − 2| < √5.",
      "marks": 2
     },
     {
      "code": "3(c)(ii)",
      "prompt": "State, with a reason, which root satisfies |z| < |z − 2i|.",
      "marks": 1
     },
     {
      "code": "3(d)",
      "prompt": "Mark the roots on the Argand diagram from part (b).",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Line r = (−√3, 1, 3)ᵀ + λ(1, 2√3, −√3)ᵀ.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the acute angle between this line and the y-axis.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Curve C: r = 3(1 − sin 2θ), 0 ≤ θ ≤ 2π. It has two loops meeting at O, one above-left and one below-right of the pole (diagram on the question paper).",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that C has cartesian equation (x² + y²)³ = 9(x − y)⁴.",
      "marks": 3
     },
     {
      "code": "5(b)",
      "prompt": "Show that y = x is a line of symmetry of C.",
      "marks": 2
     },
     {
      "code": "5(c)",
      "prompt": "Detailed reasoning required. Find the exact area of each loop of C.",
      "marks": 6
     }
    ]
   },
   {
    "number": 6,
    "scenario": "y = x cosh x.",
    "parts": [
     {
      "code": "6",
      "prompt": "Prove by induction that d^(2n−1)y/dx^(2n−1) = x sinh x + (2n − 1) cosh x for all integers n ≥ 1.",
      "marks": 6
     }
    ]
   },
   {
    "number": 7,
    "scenario": "(x² + 18)/(x²(x² + 9)) ≡ A/x + B/x² + (Cx + D)/(x² + 9).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find A, B, C and D.",
      "marks": 4
     },
     {
      "code": "7(b)",
      "prompt": "Detailed reasoning required. Hence find the exact value of ∫₃^∞ (x² + 18)/(x²(x² + 9)) dx.",
      "marks": 6
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Pesticide moves between a crop (x grams after t days) and its soil (y grams). At t = 0, x = y = 0. Initially no pesticide is lost and it is added to the crop at a constant k grams per day, k > 6. Model for t ≥ 0: dx/dt = −2x + 78y + k, dy/dt = 2x − 78y. The crop fails safety standards if it holds more than 250 g. A refined model (with decay in the soil) gives x = k[20 − e^(−41t)(20 cosh(√1677 t) + (819/√1677) sinh(√1677 t))].",
    "parts": [
     {
      "code": "8(a)(i)",
      "prompt": "Show that d²x/dt² + 80 dx/dt = 78k.",
      "marks": 2
     },
     {
      "code": "8(a)(ii)",
      "prompt": "Find the particular solution for x in terms of k and t.",
      "marks": 7
     },
     {
      "code": "8(a)(iii)",
      "prompt": "The crop is tested after 50 days. Explain why, under this model, it fails the standards.",
      "marks": 1
     },
     {
      "code": "8(b)",
      "prompt": "With k < 12, decide whether under the refined model the crop fails the standards in the long run.",
      "marks": 2
     },
     {
      "code": "8(c)",
      "prompt": "Give a reason why a non-constant rate of adding pesticide might be more realistic.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "A, B, C on an Argand diagram represent the cube roots of unity (A = 1 on the positive real axis). L, M, N are the midpoints of AB, BC and CA.",
    "parts": [
     {
      "code": "9",
      "prompt": "Find a degree-6 polynomial equation with integer coefficients whose roots are the numbers represented by A, B, C, L, M and N.",
      "marks": 5
     }
    ]
   }
  ],
  "markSchemes": {
   "4": {
    "type": "points",
    "points": [
     "B1 y-axis direction (0, 1, 0)ᵀ",
     "M1 Dot product with (1, 2√3, −√3)ᵀ = 2√3",
     "M1 cos θ = 2√3/(1 × √(1 + 12 + 3)) = 2√3/4",
     "A1 θ = π/6 (30°)"
    ],
    "guidance": "SC B2 for the right answer with no working."
   },
   "6": {
    "type": "points",
    "points": [
     "B1 n = 1: dy/dx = cosh x + x sinh x, matching RHS",
     "M1* Assumes true for n = k",
     "M1dep Differentiates once by the product rule: sinh x + x cosh x + (2k − 1) sinh x",
     "M1dep Differentiates again: x sinh x + (2k + 1) cosh x",
     "A1* Matches the form x sinh x + (2(k + 1) − 1) cosh x",
     "A1dep Conclusion: true for n = k ⇒ true for n = k + 1, and true for n = 1, so true for all n ≥ 1"
    ]
   },
   "9": {
    "type": "points",
    "points": [
     "B1 A, B, C satisfy z³ − 1 = 0",
     "B1 M = −½ (or L, N as ½e^(±πi/3))",
     "M1 L, M, N satisfy 8z³ + 1 = 0",
     "M1 Forms (z³ − 1)(8z³ + 1) = 0",
     "A1 8z⁶ − 7z³ − 1 = 0"
    ],
    "guidance": "Alternative: find all six points and multiply the quadratics z² + z + 1, 4z² − 2z + 1 and 2z² − z − 1."
   },
   "1(a)": {
    "type": "points",
    "points": [
     "M1 Uses cosh x = ½(eˣ + e⁻ˣ): (e^(2ln3) + e^(−2ln3))/2",
     "A1 ½(9 + 1/9) = 41/9 (answer given; 9 and 1/9 or equivalent must be seen)"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1 V = π∫₀^(2ln3) sinh x dx (integrating y²; missing π condoned)",
     "A1 π[cosh x]",
     "M1 Substitutes limits and subtracts: π(cosh(2 ln 3) − cosh 0)",
     "A1 32π/9 cm³ (oe)"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1 det A = 8"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "B1 A⁻¹ = (1/8)(3 2; −1 2) (ft their det)"
    ]
   },
   "2(c)": {
    "type": "points",
    "points": [
     "M1 Multiplies A⁻¹ by (−1, 2)ᵀ",
     "A1 x = 1/8, y = 5/8 (ft)"
    ]
   },
   "2(d)": {
    "type": "points",
    "points": [
     "B1 B = ½(3 2; −1 2), i.e. 4A⁻¹ (ft)"
    ]
   },
   "2(e)": {
    "type": "points",
    "points": [
     "B1 DC = (p), a 1×1 matrix",
     "M1 3×3 matrix for CD with at least one correct row or non-zero column",
     "A1 CD = (0 4 2p; 0 0 0; 0 2 p)"
    ],
    "guidance": "SC B2 if both matrices are right but CD and DC swapped or unlabelled; SC B1 for one correct matrix."
   },
   "2(f)": {
    "type": "points",
    "points": [
     "B1 Commutativity (accept 'commutative' or 'non-commutative')"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Correct quadratic formula or completing the square, root of a negative seen",
     "A1 z = ½ ± (3/2)i"
    ]
   },
   "3(b)(i)": {
    "type": "points",
    "points": [
     "B1 C₁ is the line Im(z) = 1",
     "B1 C₂ is a circle centred at 2",
     "B1 Circle meets the imaginary axis at ±i"
    ]
   },
   "3(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Shades the part of the circle below the line (major segment) (ft)"
    ]
   },
   "3(c)(i)": {
    "type": "points",
    "points": [
     "M1 |z − 2| = |−3/2 ± (3/2)i| = √(9/2) for at least one root (ft)",
     "A1 √(9/2) < √(10/2) = √5, with the inequality clearly stated (answer given)"
    ]
   },
   "3(c)(ii)": {
    "type": "points",
    "points": [
     "B1 ½ − (3/2)i, since its imaginary part −3/2 < 1 (or compares distances to O and 2i)"
    ]
   },
   "3(d)": {
    "type": "points",
    "points": [
     "M1 A complex-conjugate pair plotted",
     "A1 Roughly correct positions inside the circle, one above and one below the line"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Uses sin 2θ = 2 sin θ cos θ with x = r cos θ, y = r sin θ: r = 3(1 − 2xy/r²)",
     "A1 Any correct equation with θ removed, e.g. r³ = 3(x − y)²",
     "A1 Squares to reach (x² + y²)³ = 9(x − y)⁴ (answer given)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Swaps x and y",
     "A1 Shows the equation is unchanged since (y − x)⁴ = (x − y)⁴"
    ],
    "guidance": "Alternative: show sin 2θ is symmetric about θ = π/4 (e.g. sin 2(π/4 + α) = sin 2(π/4 − α)), and y = x is θ = π/4."
   },
   "5(c)": {
    "type": "points",
    "points": [
     "B1 Correct limits for one loop, π/4 to 5π/4",
     "M1 Uses A = ½∫r² dθ",
     "M1* Expands and uses sin² 2θ = ½(1 − cos 4θ)",
     "M1dep Integrates: (9/2)[3θ/2 + cos 2θ − (1/8) sin 4θ]",
     "M1 Substitutes limits and subtracts",
     "A1 Each loop has area 27π/4 (stated for each)"
    ],
    "guidance": "Alternative last two marks: limits 0 to 2π give 27π/2 for both loops, so 27π/4 each by symmetry in y = x."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 x² + 18 ≡ Ax(x² + 9) + B(x² + 9) + (Cx + D)x²",
     "M1 Enough substitutions or coefficient comparisons to find all four",
     "A1 Two coefficients correct",
     "A1 A = 0, B = 2, C = 0, D = −1"
    ],
    "guidance": "SC B1 after M0 if at least one coefficient is correct."
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 Integrates to include an inverse tan term",
     "A1 −2/x − (1/3) tan⁻¹(x/3) (ft their (a))",
     "M1 Uses a limiting process, upper limit k → ∞",
     "A1 States 2/k → 0 as k → ∞",
     "A1 States tan⁻¹(k/3) → π/2 as k → ∞",
     "A1 2/3 − π/12"
    ],
    "guidance": "Writing 1/∞ = 0 or tan⁻¹∞ = π/2 without a limit loses the relevant A mark."
   },
   "8(a)(i)": {
    "type": "points",
    "points": [
     "M1 Differentiates dx/dt and substitutes dy/dt: −2 dx/dt + 78(2x − 78y)",
     "A1 Eliminates y via 78y = dx/dt + 2x − k to reach d²x/dt² + 80 dx/dt = 78k (answer given)"
    ]
   },
   "8(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Auxiliary equation λ² + 80λ = 0, so λ = 0, −80",
     "A1 CF x = A + Be^(−80t)",
     "M1 Trial x = at (+ b) suited to the CF",
     "A1 GS x = A + Be^(−80t) + (39/40)kt",
     "M1 t = 0, x = 0 gives A + B = 0",
     "M1 Uses dx/dt = k at t = 0 (as x = y = 0) for a second equation",
     "A1 x = (k/3200)(1 − e^(−80t) + 3120t)"
    ],
    "guidance": "Alternative for the first four marks: integrate to ẋ + 80x = 78kt + c and use integrating factor e^(80t) with parts. The second M1 can also come from the GS for y with x = y = 0. The scheme's appendix marks a y-first solution similarly."
   },
   "8(a)(iii)": {
    "type": "points",
    "points": [
     "B1 At t = 50, x > 156000k/3200 = 48.75k > 292.5 > 250 since k > 6, so it fails"
    ],
    "guidance": "Ignoring the negligible exponential is condoned; must use t = 50 and k > 6."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 √1677 ≈ 40.95 < 41, so e^(−41t)(cosh, sinh terms) has only decaying exponentials (or e^(−41t) dominates)",
     "A1 x → 20k < 240 < 250, so the crop passes in the long run"
    ],
    "guidance": "SC B1 for 20k < 240 < 250 assuming the second term tends to 0 without justification."
   },
   "8(c)": {
    "type": "points",
    "points": [
     "B1 e.g. pesticide is sprayed at intervals, or depends on weather/season, pest attack or crop growth"
    ]
   }
  }
 },

 "fmath-ocr-h245-2021a-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Loci in the Argand diagram.",
    "parts": [
     {
      "code": "1(a)(i)",
      "prompt": "On one Argand diagram, sketch the locus |z − 1 + 2i| = 3.",
      "marks": 2
     },
     {
      "code": "1(a)(ii)",
      "prompt": "On the same diagram, sketch the locus |z + 1| = |z − 2|.",
      "marks": 2
     },
     {
      "code": "1(b)",
      "prompt": "Shade the region where |z − 1 + 2i| ≤ 3 and |z + 1| ≤ |z − 2|.",
      "marks": 2
     }
    ]
   },
   {
    "number": 2,
    "scenario": "f(x) = tan⁻¹(1 + x).",
    "parts": [
     {
      "code": "2(a)(i)",
      "prompt": "Find f(0).",
      "marks": 1
     },
     {
      "code": "2(a)(ii)",
      "prompt": "Find f′(0).",
      "marks": 2
     },
     {
      "code": "2(a)(iii)",
      "prompt": "Show that f″(0) = −½.",
      "marks": 3
     },
     {
      "code": "2(b)",
      "prompt": "Hence write down the Maclaurin series of f(x) as far as the x² term.",
      "marks": 2
     }
    ]
   },
   {
    "number": 3,
    "scenario": "f(z) = z³ − 3z² + kz − 5 for complex z, with k a real constant. The roots of f(z) = 0 are α, β, γ, and α² + β² + γ² = −5.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Explain why f(z) = 0 has exactly one real root.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "Find k.",
      "marks": 3
     },
     {
      "code": "3(c)",
      "prompt": "Find a cubic equation with integer coefficients whose roots are 1/α, 1/β and 1/γ.",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "scenario": "A(4, 2, 0), B(1, 5, 3), C(1, 4, −2). Line l passes through A and B; M is the point of l nearest to C.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find a cartesian equation of l.",
      "marks": 3
     },
     {
      "code": "4(b)",
      "prompt": "Find the coordinates of M.",
      "marks": 4
     },
     {
      "code": "4(c)",
      "prompt": "Find the exact area of triangle ABC.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "",
    "parts": [
     {
      "code": "5",
      "prompt": "Using de Moivre's theorem, find constants A, B, C with sin⁵θ ≡ A sin θ + B sin 3θ + C sin 5θ.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Units are cm. O is the origin; A(1, 0), B(1, 4), C(6, 9), D(0, 9). Arc BC lies on x² + (y − 10)² = 37. The closed shape OABCD is made of segments OA, AB, arc BC, segments CD and DO (diagram on the question paper: a thin 1 cm wide strip from y = 0 to 4, flaring out along the arc to width 6 at y = 9). A funnel is modelled by rotating OABCD through 2π about the y-axis.",
    "parts": [
     {
      "code": "6",
      "prompt": "Find the volume of the funnel given by the model.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Polar curve r = sin 3θ for 0 ≤ θ ≤ π/3 (a single loop from the pole, sketched on the question paper).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find the values of θ at the pole.",
      "marks": 1
     },
     {
      "code": "7(b)",
      "prompt": "Give the polar coordinates of the point where r is greatest.",
      "marks": 2
     },
     {
      "code": "7(c)",
      "prompt": "Showing detailed reasoning, find the exact area enclosed by the curve.",
      "marks": 4
     },
     {
      "code": "7(d)",
      "prompt": "Using sin 3θ = 3 sin θ − 4 sin³θ, find a cartesian equation of the curve.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "f(x) = 4 sinh x + 3 cosh x.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that y = f(x) has no turning points.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "Find the exact solution of f(x) = 5.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Transformation T is represented by the matrix (2 1; −1 0).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "The line y = kx is invariant under T. Find k.",
      "marks": 4
     },
     {
      "code": "9(b)",
      "prompt": "Decide whether this line y = kx is a line of invariant points of T.",
      "marks": 1
     }
    ]
   },
   {
    "number": 10,
    "scenario": "",
    "parts": [
     {
      "code": "10",
      "prompt": "By an algebraic method, find the smallest n for which Σ_{r=1}^{n} 1/((2r − 1)(2r + 1)) ≥ 0.49.",
      "marks": 8
     }
    ]
   },
   {
    "number": 11,
    "scenario": "A door's angle θ radians from its closed (equilibrium) position can be positive or negative. It is released from rest in an open position at t = 0. Proposed model for t ≥ 0: d²θ/dt² + λ dθ/dt + 3θ = 0, where λ ≥ 0 is constant.",
    "parts": [
     {
      "code": "11(a)(i)",
      "prompt": "For what value of λ is the motion simple harmonic?",
      "marks": 1
     },
     {
      "code": "11(a)(ii)",
      "prompt": "Briefly explain why simple harmonic motion is an unrealistic model for the door.",
      "marks": 1
     },
     {
      "code": "11(b)",
      "prompt": "Find the range of λ for which the door never passes through the equilibrium position.",
      "marks": 2
     },
     {
      "code": "11(c)",
      "prompt": "Sketch a possible θ–t graph for λ outside the range in (b) but with motion that is not simple harmonic.",
      "marks": 1
     }
    ]
   }
  ],
  "markSchemes": {
   "5": {
    "type": "points",
    "points": [
     "M1 z = cos θ + i sin θ, so z − 1/z = 2i sin θ",
     "A1 (z − 1/z)⁵ = 32i sin⁵θ = z⁵ − 5z³ + 10z − 10/z + 5/z³ − 1/z⁵",
     "M1 Groups into sines: 2i sin 5θ − 10i sin 3θ + 20i sin θ",
     "A1 A = 5/8, B = −5/16, C = 1/16"
    ],
    "guidance": "Alternatives: exponential form of sin θ, or expanding (cos θ + i sin θ)⁵ and (cos θ + i sin θ)³ and eliminating sin³θ. The i must be seen."
   },
   "6": {
    "type": "points",
    "points": [
     "M1 Splits into cylinder for AB (π × 1² × 4 = 4π) plus π∫₄⁹ (37 − (y − 10)²) dy for BC",
     "A1 Arc part = 340π/3 = 356.05…",
     "A1 Total = 352π/3 ≈ 369 cm³"
    ],
    "guidance": "Units not required."
   },
   "10": {
    "type": "points",
    "points": [
     "M1 Partial fractions A/(2r − 1) + B/(2r + 1)",
     "M1 Method for A and B",
     "A1 A = ½, B = −½",
     "M1 Method of differences",
     "M1 Cancellation handled",
     "A1 Sum = ½(1 − 1/(2n + 1)) oe",
     "M1 Sets their sum ≥ 0.49: n ≥ 0.98n + 0.49",
     "A1 n ≥ 24.5, so n = 25"
    ],
    "guidance": "Purely numerical solutions score 0."
   },
   "1(a)(i)": {
    "type": "points",
    "points": [
     "B1 Circle",
     "B1 Centre 1 − 2i, radius 3"
    ],
    "guidance": "Freehand circles accepted; a marked point (1, −2) and an indication of radius 3 (e.g. passing through (4, −2)) suffice."
   },
   "1(a)(ii)": {
    "type": "points",
    "points": [
     "B1 Vertical straight line",
     "B1 The line x = ½"
    ],
    "guidance": "Can be shown by ½ labelled on the real axis with a vertical line through it."
   },
   "1(b)": {
    "type": "points",
    "points": [
     "B1 Region inside the circle",
     "B1 And to the left of x = ½"
    ],
    "guidance": "Second mark follows their line if vertical."
   },
   "2(a)(i)": {
    "type": "points",
    "points": [
     "B1 f(0) = π/4"
    ],
    "guidance": "Not 45°."
   },
   "2(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Differentiates: f′(x) = 1/(1 + (1 + x)²)",
     "A1 f′(0) = ½"
    ],
    "guidance": "f′(x) = 1/(1 + x²) scores M0."
   },
   "2(a)(iii)": {
    "type": "points",
    "points": [
     "M1 Differentiates their f′(x) = (2 + 2x + x²)⁻¹",
     "A1 f″(x) = −(2 + 2x)/(2 + 2x + x²)² oe",
     "A1 Substitution seen: f″(0) = −2/4 = −½ (AG)"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Uses f(0) + f′(0)x + f″(0)x²/2 with their values",
     "A1 f(x) ≈ π/4 + x/2 − x²/4"
    ],
    "guidance": "A1 follows through their values from (a)."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "B1 α² + β² + γ² = −5 < 0 means at least one root is non-real",
     "B1 Non-real roots occur in conjugate pairs, so there are two",
     "B1 Three roots with two non-real leaves exactly one real root"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 α + β + γ = 3",
     "M1 Uses (α + β + γ)² = Σα² + 2Σαβ and substitutes: 9 = −5 + 2Σαβ",
     "A1 k = Σαβ = 7"
    ],
    "guidance": "M1 condones a missing 2 and sign slips."
   },
   "3(c)": {
    "type": "points",
    "points": [
     "M1 Substitutes z = 1/u: (1/u)³ − 3(1/u)² + 7(1/u) − 5 = 0",
     "A1 −5u³ + 7u² − 3u + 1 = 0 oe"
    ],
    "guidance": "Alternative: Σ1/α = 7/5, Σ1/(αβ) = 3/5, 1/(αβγ) = 1/5 for M1. Equation in z allowed; ft their k; '= 0' needed for A1."
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 AB = (−3, 3, 3)ᵀ oe",
     "M1 r = (4, 2, 0)ᵀ + λ(−3, 3, 3)ᵀ",
     "A1 (4 − x)/3 = (y − 2)/3 = z/3, i.e. 4 − x = y − 2 = z"
    ],
    "guidance": "Equivalent forms accepted, e.g. 1 − x = y − 5 = z − 3 using B."
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 General point on l: (4 − 3λ, 2 + 3λ, 3λ)",
     "A1 CM = (3 − 3λ, 3λ − 2, 3λ + 2)ᵀ",
     "M1 CM · (−3, 3, 3)ᵀ = 0, giving 27λ = 9",
     "A1 λ = ⅓, M = (3, 3, 1)"
    ],
    "guidance": "Alternative for last two marks: minimise |CM|² as a quadratic in λ. Vector answer not accepted for final A1."
   },
   "4(c)": {
    "type": "points",
    "points": [
     "B1 CM² = 14",
     "B1 AB² = 27",
     "M1 Area = ½|AB||CM|",
     "A1 Area = (3/2)√42"
    ],
    "guidance": "Alternatives: ½|AB × BC| = ½|(−12, −15, 3)ᵀ| = ½√378; or via cos θ = −4/√78, sin θ = √31/√39."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 θ = 0 and θ = π/3"
    ],
    "guidance": "No extra values in range."
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 r = 1",
     "B1 θ = π/6"
    ]
   },
   "7(c)": {
    "type": "points",
    "points": [
     "M1 Area = ½∫₀^{π/3} sin²3θ dθ",
     "M1* Uses double angle: ¼∫(1 − cos 6θ) dθ",
     "DepM1 Integrates: ¼[θ − (1/6) sin 6θ]",
     "A1 Correct limits seen, area = π/12"
    ]
   },
   "7(d)": {
    "type": "points",
    "points": [
     "M1 Uses triple angle and y = r sin θ: r = 3y/r − 4(y/r)³",
     "A1 (x² + y²)² = 3y(x² + y²) − 4y³ oe, e.g. (x² + y²)² = 3x²y − y³"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 dy/dx = 4 cosh x + 3 sinh x",
     "M1 Sets to 0 and uses exponentials",
     "A1 e²ˣ = −1/7, impossible since e²ˣ > 0, so no turning points"
    ],
    "guidance": "Alternative: tanh x = −4/3 but |tanh x| < 1."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Writes in exponentials",
     "M1 Reaches 7e²ˣ − 10eˣ − 1 = 0",
     "A1 eˣ = (5 ± √32)/7",
     "A1 Rejects (5 − √32)/7 since eˣ > 0",
     "A1 x = ln((5 + 4√2)/7)"
    ],
    "guidance": "Alternative via cosh: 7cosh²x + 30cosh x − 41 = 0, cosh x = (−15 + 16√2)/7, rejecting the negative root."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Applies matrix to (x, kx)ᵀ",
     "A1 Image (2x + kx, −x)ᵀ",
     "M1 Image on same line: −x = k(2x + kx), so k² + 2k + 1 = 0",
     "A1 k = −1 (y = −x)"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "B1 (x, −x)ᵀ maps to (2x − x, −x)ᵀ = (x, −x)ᵀ, so yes, it is a line of invariant points, with reason"
    ],
    "guidance": "Testing one point other than the origin is enough."
   },
   "11(a)(i)": {
    "type": "points",
    "points": [
     "B1 λ = 0"
    ]
   },
   "11(a)(ii)": {
    "type": "points",
    "points": [
     "B1 A real door comes to rest closed; SHM would oscillate forever"
    ]
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1 Over- or critical damping: λ² − 12 ≥ 0",
     "A1 λ ≥ 2√3"
    ],
    "guidance": "Ignore λ ≤ −2√3."
   },
   "11(c)": {
    "type": "points",
    "points": [
     "B1 Under-damped graph: starts non-zero on θ-axis with zero gradient, at least two decreasing peaks, approaching the t-axis"
    ]
   }
  }
 },

 "fmath-ocr-h245-2019-p1": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Detailed reasoning required. α and β are the roots of x² − 2x + 5 = 0.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "State α + β and αβ.",
      "marks": 1
     },
     {
      "code": "1(b)",
      "prompt": "Using part (a), find a quadratic equation whose roots are α + 1/β and β + 1/α.",
      "marks": 3
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Loci in the Argand diagram.",
    "parts": [
     {
      "code": "2",
      "prompt": "Shade on an Argand diagram the region {z : |z| ≤ |z − 4|} ∩ {z : |z − 3 − 2i| ≤ 2}.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Detailed reasoning required. x = 2 + 5i is one root of x³ − 2x² + 21x + 58 = 0.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find all the roots of the equation.",
      "marks": 4
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Standard summation formulae for Σr and Σr².",
    "parts": [
     {
      "code": "4",
      "prompt": "Use the formulae for Σr and Σr² to show that Σ_{r=1}^{10} r(3r − 2) = 1045.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Curve y = 5cosh x + 3sinh x (sketch on the question paper: a U-shaped curve, entirely above the x-axis, with its minimum just left of the y-axis).",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Solve 5cosh x + 3sinh x = 4, giving the exact solution.",
      "marks": 4
     },
     {
      "code": "5(b)",
      "prompt": "Detailed reasoning required. Evaluate ∫_{−1}^{1} (5cosh x + 3sinh x) dx in the form ae + b/e, with a and b integers.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "y = tan⁻¹ √(2x).",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find dy/dx.",
      "marks": 2
     },
     {
      "code": "6(b)",
      "prompt": "Show that ∫_{1/6}^{1/2} √x / (x + 2x²) dx = kπ, stating the exact value of k.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "sech x = 1/cosh x.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that sech x = 2eˣ/(e²ˣ + 1).",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Find ∫ sech x dx using a suitable substitution.",
      "marks": 4
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Plane 4x + 2y + z = 7. Point A is (9, 6, 1); B is the mirror image of A in the plane.",
    "parts": [
     {
      "code": "8",
      "prompt": "Find the coordinates of B.",
      "marks": 6
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Detailed reasoning required. ω = cos(2π/5) + i sin(2π/5); equation z⁵ = 1.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Show that ω satisfies z⁵ = 1.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "State the remaining four roots of z⁵ = 1.",
      "marks": 1
     },
     {
      "code": "9(c)",
      "prompt": "Show that ω + ω² + ω³ + ω⁴ = −1.",
      "marks": 2
     },
     {
      "code": "9(d)",
      "prompt": "Deduce that (ω + 1/ω)² + (ω + 1/ω) − 1 = 0.",
      "marks": 3
     },
     {
      "code": "9(e)",
      "prompt": "Deduce cos(2π/5) in the form a + b√c, with a, b, c rational.",
      "marks": 4
     }
    ]
   },
   {
    "number": 10,
    "scenario": "A = (a 2 0; 0 a 2; 4 5 1). Simultaneous equations: ax + 2y = 6, ay + 2z = 8, 4x + 5y + z = 16.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Find det A in terms of a, in simplified form.",
      "marks": 2
     },
     {
      "code": "10(b)",
      "prompt": "Find the values of a that make A singular.",
      "marks": 2
     },
     {
      "code": "10(c)",
      "prompt": "For each value of a from (b), decide whether the equations have a unique solution (and find it), infinitely many solutions, or no solution.",
      "marks": 7
     }
    ]
   },
   {
    "number": 11,
    "scenario": "A particle hangs on a spring in a resistive medium; the top of the spring oscillates vertically. Displacement x below equilibrium at time t satisfies d²x/dt² + 2 dx/dt + 5x = 10 sin t. At t = 0 the particle is at rest with x = 2.",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Find the particular solution.",
      "marks": 11
     },
     {
      "code": "11(b)",
      "prompt": "Give an approximate equation for x when t is large.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "2": {
    "type": "points",
    "points": [
     "B1 Circle centre 3 + 2i, radius 2 (touching the real axis)",
     "B1 Line Re(z) = 2",
     "B1 Shades the part of the circle with Re(z) ≤ 2"
    ],
    "guidance": "Shading the unwanted region is fine if clearly labelled as such."
   },
   "3": {
    "type": "points",
    "points": [
     "B1 2 − 5i is also a root (soi, e.g. by the factor x² − 4x + 29)",
     "M1 Factorises using the conjugate pair, e.g. (x − a)(x² − 4x + 29)",
     "A1 Shows convincingly a = −2, i.e. factor (x + 2)",
     "A1 Roots x = −2, 2 + 5i, 2 − 5i"
    ],
    "guidance": "Any valid route to the real root (division, factor theorem, sum of roots) with full reasoning."
   },
   "4": {
    "type": "points",
    "points": [
     "M1 Splits into 3Σr² − 2Σr",
     "M1 Uses both formulae with n = 10: 3(⅙·10·11·21) − 2(½·10·11)",
     "A1 = 55 × 19 = 1045 (AG; or 1155 − 110)"
    ],
    "guidance": "Alternatively simplify to ½n(n + 1)(2n − 1) first, then put n = 10."
   },
   "8": {
    "type": "points",
    "points": [
     "B1 Line AB has direction (4, 2, 1)ᵀ",
     "M1 General point on the line (9 + 4λ, 6 + 2λ, 1 + λ)",
     "M1 Substitutes into the plane: 49 + 21λ = 7",
     "M1 Doubles λ for the reflection",
     "A1 λ = −2 at the foot (soi), so λ = −4 at B",
     "A1 B = (−7, −2, −3) (must be coordinates)"
    ],
    "guidance": "Alternative: distance from A to plane = 42/√21 = 2√21, so AB = 4√21; point on normal with 21λ² = 336 gives λ = ±4; reject (25, 14, 5) on the same side."
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 α + β = 2 and αβ = 5"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1 Finds both the sum and product of the new roots in terms of α + β and αβ",
     "A1 Sum = α + β + (α + β)/αβ = 12/5 or product = αβ + 2 + 1/αβ = 36/5",
     "A1 Both, giving 5x² − 12x + 36 = 0 (oe)"
    ],
    "guidance": "Detailed reasoning: finding the roots explicitly scores M0."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Writes cosh and sinh in exponentials",
     "M1 Multiplies by eˣ to get 4e²ˣ − 4eˣ + 1 = 0, i.e. (2eˣ − 1)² = 0",
     "A1 eˣ = ½",
     "A1 x = −ln 2 (oe)"
    ],
    "guidance": "Alternative: 5cosh x + 3sinh x = 4cosh(x + α) with tanh α = 3/5, α = ln 2, so x = −ln 2."
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Integrates to 5sinh x + 3cosh x",
     "M1 Converts to exponentials and applies limits −1 to 1: (4e − e⁻¹) − (4e⁻¹ − e)",
     "A1 5e − 5/e"
    ],
    "guidance": "Alternatively write the integrand as ½(8eˣ + 2e⁻ˣ) and integrate to [4eˣ − e⁻ˣ]."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Chain rule: 1/(1 + 2x) × d/dx(√(2x))",
     "A1 dy/dx = 1/((1 + 2x)√(2x)) oe, e.g. √2/((1 + 2x)·2√x)"
    ],
    "guidance": "Alternatively differentiate tan y = √(2x) implicitly. The scheme prints [4] beside this alternative in error; the part is worth 2."
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Rewrites the integrand towards the form of (a) (limits ignored)",
     "A1 √2 ∫ 1/((1 + 2x)√(2x)) dx",
     "M1 Uses (a): √2[tan⁻¹√(2x)] with correct limits in order = √2(tan⁻¹1 − tan⁻¹(1/√3))",
     "A1 √2(π/4 − π/6) = (√2/12)π, so k = √2/12 (oe)"
    ],
    "guidance": "Alternatively substitute u = √x, giving 2∫1/(1 + 2u²) du = √2[tan⁻¹(u√2)]."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 cosh x = (eˣ + e⁻ˣ)/2 = (e²ˣ + 1)/(2eˣ)",
     "A1 Reciprocal gives sech x = 2eˣ/(e²ˣ + 1) (AG)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 Substitutes u = eˣ, du = eˣ dx, using (a)",
     "A1 Integral entirely in u: ∫ 2/(u² + 1) du",
     "M1 Standard integral and substitutes back",
     "A1 2tan⁻¹(eˣ) + c (must include c)"
    ],
    "guidance": "Alternatives: u = sinh x gives tan⁻¹(sinh x) + c; eˣ = tan u gives 2tan⁻¹(eˣ) + c. Absence of du is allowed."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Finds ω⁵ using de Moivre",
     "A1 ω⁵ = cos 2π + i sin 2π = 1 (AG)"
    ],
    "guidance": "Exponential form acceptable."
   },
   "9(b)": {
    "type": "points",
    "points": [
     "B1 ω², ω³, ω⁴ and 1"
    ],
    "guidance": "Or cos(2kπ/5) + i sin(2kπ/5) for k = 2, 3, 4 and 1."
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 Uses ω⁵ − 1 = (ω − 1)(ω⁴ + ω³ + ω² + ω + 1) = 0",
     "A1 ω ≠ 1, so ω⁴ + ω³ + ω² + ω = −1 (AG)"
    ],
    "guidance": "Alternatively geometric series sum, or sum of roots of z⁵ − 1 = 0 is 0 since the z⁴ coefficient is 0 (with explanation)."
   },
   "9(d)": {
    "type": "points",
    "points": [
     "M1 Expands: ω² + 2 + 1/ω² + ω + 1/ω − 1",
     "A1 = (1/ω²)(ω⁴ + ω³ + ω² + ω + 1)",
     "A1 = 0 using (c), since 1/ω² ≠ 0"
    ],
    "guidance": "Alternatively start from ω⁴ + ω³ + ω² + ω + 1 = 0 and take out ω²."
   },
   "9(e)": {
    "type": "points",
    "points": [
     "B1 ω + 1/ω = 2cos(2π/5) (may be seen in (d))",
     "B1 Solving the quadratic: ω + 1/ω = (−1 ± √5)/2",
     "M1 Equates: 2cos(2π/5) = (√5 − 1)/2",
     "A1 cos(2π/5) = −¼ + ¼√5 (taking the positive value)"
    ],
    "guidance": "Only this form (or −0.25 + 0.25√5) is accepted."
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 Attempts the determinant",
     "A1 det A = a² − 10a + 16"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Solves their quadratic: (a − 2)(a − 8) = 0",
     "A1 a = 2 or a = 8"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "B1 No unique solution for either value, since det A = 0 (soi by correct conclusions)",
     "M1 Substitutes a = 2 and solves",
     "A1 Finds 2p₁ + ½p₂ = p₃ (2x + 2y = 6, 2y + 2z = 8, 4x + 5y + z = 16)",
     "A1 Infinite set of solutions when a = 2",
     "M1 Substitutes a = 8 and solves",
     "A1 ½p₁ + ½p₂ gives 4x + 5y + z = 7",
     "A1 7 ≠ 16, so no solution when a = 8"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1 Auxiliary equation n² + 2n + 5 = 0",
     "A1 n = −1 ± 2i, CF x = e⁻ᵗ(A cos 2t + B sin 2t)",
     "M1 PI of form a sin t + b cos t, differentiated twice",
     "M1 (dep) Substitutes PI into the DE",
     "A1 a = 2, b = −1",
     "A1 GS x = e⁻ᵗ(A cos 2t + B sin 2t) + 2 sin t − cos t",
     "B1 Uses x = 2 and dx/dt = 0 at t = 0 in two equations",
     "B1 A = 3",
     "M1 (dep) Differentiates their GS and substitutes t = 0: −A + 2B + 2 = 0",
     "A1 B = ½",
     "A1 x = e⁻ᵗ(3 cos 2t + ½ sin 2t) + 2 sin t − cos t"
    ],
    "guidance": "Equivalent (e.g. exponential) forms of the CF are accepted."
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1 Notes e⁻ᵗ → 0 as t → ∞",
     "A1 x ≈ 2 sin t − cos t (= accepted; ft their (a))"
    ],
    "guidance": "The final line alone earns both marks."
   }
  }
 },

 /* ═══════════════════════════════════════════════════════════════════════════
    OCR B FURTHER MATHS H645
  ═══════════════════════════════════════════════════════════════════════════ */

 "fmath-ocrb-h645-2024-y420": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Series: Σ_{r=1}^{n} 1/((r+1)(r+2)).",
    "parts": [
     {
      "code": "1",
      "prompt": "Write 1/(r+1) − 1/(r+2) as one fraction, then use it to find Σ_{r=1}^{n} 1/((r+1)(r+2)) in terms of n.",
      "marks": 4
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Complex numbers u = −1 + i and v = −2 − i.",
    "parts": [
     {
      "code": "2(a)(i)",
      "prompt": "Find u − v in the form a + bi.",
      "marks": 1
     },
     {
      "code": "2(a)(ii)",
      "prompt": "Showing detailed reasoning, find u/v in the form a + bi.",
      "marks": 3
     },
     {
      "code": "2(b)",
      "prompt": "Write u in exact modulus-argument form.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "The cubic 2x³ − 2x² + 8x − 15 = 0 has roots α, β, γ.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find α² + β² + γ².",
      "marks": 4
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Curve y = 1/√(k² + x²), k > 0. The region bounded by the curve, both axes and x = k is turned through 2π about the x-axis, giving a solid of volume 1.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the exact value of k.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Vectors u = (−2, 1, 2)ᵀ, v = (a, 0, 1)ᵀ and u × v = (1, b, 3)ᵀ.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Find a and b.",
      "marks": 3
     },
     {
      "code": "5(b)",
      "prompt": "Use u × v to find the acute angle between u and v.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Loci on separate Argand diagrams.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Sketch the region |z − 1 − 2i| ≤ 4.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Sketch the locus arg(z + i) = π/3.",
      "marks": 3
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Integral ∫₁² 1/∛(x − 2) dx.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Say why this integral is improper.",
      "marks": 1
     },
     {
      "code": "7(b)",
      "prompt": "Showing detailed reasoning, evaluate the integral using a limit argument.",
      "marks": 4
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Matrix M = (1 λ; 0 1), λ a non-zero constant, represents transformation T.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Describe T fully.",
      "marks": 2
     },
     {
      "code": "8(b)(i)",
      "prompt": "Find det M.",
      "marks": 1
     },
     {
      "code": "8(b)(ii)",
      "prompt": "Give two properties of T implied by det M.",
      "marks": 2
     },
     {
      "code": "8(c)",
      "prompt": "Prove by induction that Mⁿ = (1 nλ; 0 1) for positive integers n.",
      "marks": 4
     },
     {
      "code": "8(d)",
      "prompt": "Describe the single transformation equivalent to applying T n times.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Polar curve r = a sin 3θ, 0 ≤ θ ≤ π, a > 0.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Sketch the curve, using a broken line where r < 0.",
      "marks": 3
     },
     {
      "code": "9(b)",
      "prompt": "Showing detailed reasoning, find the area of one loop.",
      "marks": 5
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Maclaurin series for ln(1 + x³).",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Give the first three terms.",
      "marks": 1
     },
     {
      "code": "10(b)",
      "prompt": "Use them to show ln(1.125) ≈ n/1536 and find the integer n.",
      "marks": 3
     },
     {
      "code": "10(c)",
      "prompt": "Using the same three terms, Charlie gets ln 9 ≈ 147 (3 s.f.), but ln 9 = 2.20. Explain the error.",
      "marks": 2
     }
    ]
   },
   {
    "number": 11,
    "scenario": "Plane Π: 2x − y + 2z = 4. Point P(8, 4, 5). Line L: (x − 2)/3 = y/2 = (z + 3)/4.",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Find the shortest distance from P to Π.",
      "marks": 2
     },
     {
      "code": "11(b)",
      "prompt": "Show P is on L.",
      "marks": 2
     },
     {
      "code": "11(c)",
      "prompt": "Find where L meets Π.",
      "marks": 3
     },
     {
      "code": "11(d)",
      "prompt": "Find the acute angle between L and Π.",
      "marks": 4
     },
     {
      "code": "11(e)",
      "prompt": "Use (b), (c) and (d) to confirm (a).",
      "marks": 3
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Curve x = 2cosh t + sinh t, y = cosh t − 2sinh t (diagram on the question paper: crosses the positive x-axis at A; B is on the curve above A).",
    "parts": [
     {
      "code": "12(a)(i)",
      "prompt": "Find, in logarithmic form, the value of t at A.",
      "marks": 4
     },
     {
      "code": "12(a)(ii)",
      "prompt": "Find the x-coordinate of A to 3 s.f.",
      "marks": 2
     },
     {
      "code": "12(b)",
      "prompt": "B has t = 0. Find the equation of the tangent at B.",
      "marks": 6
     }
    ]
   },
   {
    "number": 13,
    "scenario": "z = ⅓e^(iθ), 0 < θ < π/2. Points P₁, P₂, P₃, … represent z, z², z³, … and O is the origin.",
    "parts": [
     {
      "code": "13(a)(i)",
      "prompt": "State the ratio OPₙ₊₁ : OPₙ.",
      "marks": 1
     },
     {
      "code": "13(a)(ii)",
      "prompt": "State the angle Pₙ₊₁OPₙ.",
      "marks": 1
     },
     {
      "code": "13(b)(i)",
      "prompt": "Show (3 − e^(iθ))(3 − e^(−iθ)) = a + b cos θ for integers a, b.",
      "marks": 2
     },
     {
      "code": "13(b)(ii)",
      "prompt": "Using the sum to infinity of z + z² + z³ + …, show ⅓sin θ + (1/9)sin 2θ + (1/27)sin 3θ + … = 3sin θ/(10 − 6cos θ).",
      "marks": 6
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Differential equation y″ + y′ − 2y = 12e^(−x).",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Find the general solution.",
      "marks": 7
     },
     {
      "code": "14(b)",
      "prompt": "Given y → 0 as x → ∞ and y′ = 0 at x = 0, find the exact x where y = 0.",
      "marks": 5
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Planes x + ky + 3z = 1, 3x + 4y + 2z = 3, x + 3y − z = −k, where k is a constant.",
    "parts": [
     {
      "code": "15(a)",
      "prompt": "Show the planes meet at a single point for all but one value of k, and find it.",
      "marks": 4
     },
     {
      "code": "15(b)",
      "prompt": "Show that, when there is a unique point, its y-coordinate does not depend on k.",
      "marks": 6
     }
    ]
   },
   {
    "number": 16,
    "scenario": "Integral ∫₀¹ 1/√(x² + x + 1) dx.",
    "parts": [
     {
      "code": "16",
      "prompt": "Showing detailed reasoning, show it equals ln((a + b√3)/c) for integers a, b, c.",
      "marks": 6
     }
    ]
   },
   {
    "number": 17,
    "scenario": "Tank starts with 1000 litres; liquid leaves at 5 litres/min while salt is added at 10 g/min. x grams of salt after t minutes, x = 0 at t = 0. Model: salt dissolves instantly and evenly, and does not change the volume.",
    "parts": [
     {
      "code": "17(a)(i)",
      "prompt": "Show the concentration is x/(1000 − 5t) g per litre.",
      "marks": 1
     },
     {
      "code": "17(a)(ii)",
      "prompt": "Hence show dx/dt + x/(200 − t) = 10.",
      "marks": 3
     },
     {
      "code": "17(b)",
      "prompt": "Show by integration that x = 10(200 − t) ln(200/(200 − t)).",
      "marks": 8
     },
     {
      "code": "17(c)(i)",
      "prompt": "Find the mass of salt when half the liquid has gone.",
      "marks": 2
     },
     {
      "code": "17(c)(ii)",
      "prompt": "Find when the mass of salt is largest.",
      "marks": 5
     },
     {
      "code": "17(d)",
      "prompt": "The observed concentration is higher than the model predicts. Suggest why.",
      "marks": 1
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 1/(r+1) − 1/(r+2) = 1/((r+1)(r+2))",
     "M1* Writes out enough terms, 1/2 − 1/3 + 1/3 − …, to show cancellation (first term correct)",
     "M1dep Identifies the last surviving term … − 1/(n+2)",
     "A1 Sum = 1/2 − 1/(n+2) (or n/(2(n+2)))"
    ],
    "guidance": "Alternative: split into Σ_{r=1}^{n} 1/(r+1) − Σ_{r=2}^{n+1} 1/(r+1) and substitute limits for the M marks."
   },
   "3": {
    "type": "points",
    "points": [
     "B1 α + β + γ = 1",
     "B1 αβ + βγ + γα = 4",
     "M1 α² + β² + γ² = (α + β + γ)² − 2(αβ + βγ + γα)",
     "A1 −7"
    ],
    "guidance": "Alternative: substitute x = √z, square to get 4z³ + 28z² + 4z − 225 = 0, then sum of roots = −7."
   },
   "4": {
    "type": "points",
    "points": [
     "B1 V = π∫₀ᵏ 1/(k² + x²) dx",
     "B1 Integrates to π[(1/k) arctan(x/k)]",
     "B1 1 = π²/(4k)",
     "B1 k = π²/4"
    ]
   },
   "16": {
    "type": "points",
    "points": [
     "B1 Completes the square: (x + ½)² + ¾",
     "M1* Substitutes u = x + ½, limits ½ to 3/2",
     "A1 arsinh(u/(½√3)) or ln(u + √(u² + ¾))",
     "A1 ln(√3 + 2) − ln(3/√3), or ln(3/2 + √3) − ln(3/2)",
     "M1dep Combines logs",
     "A1 ln((3 + 2√3)/3)"
    ],
    "guidance": "Alternative: integrate directly by inspection as arsinh((x + ½)/(½√3))."
   },
   "2(a)(i)": {
    "type": "points",
    "points": [
     "B1 1 + 2i"
    ]
   },
   "2(a)(ii)": {
    "type": "points",
    "points": [
     "M1* Multiplies top and bottom by the conjugate −2 + i (or 2 − i)",
     "M1dep Expands the numerator (at least three terms) with denominator 5",
     "A1 u/v = 1/5 − (3/5)i"
    ],
    "guidance": "Alternative: set −1 + i = (−2 − i)(a + bi) and equate real and imaginary parts."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "B1 Modulus √2",
     "B1 Argument 3π/4 (condone 135°)",
     "B1 u = √2(cos(3π/4) + i sin(3π/4)), exact"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 u × v = (1, 2 + 2a, −a)ᵀ",
     "M1 Sets 2 + 2a = b and −a = 3",
     "A1 a = −3, b = −4"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Uses sin θ = |u × v| / (|u||v|) with their vectors",
     "A1FT sin θ = √26/(√9 √10)",
     "A1 θ = 32.5° (33° or 0.57 rad or better)"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 A circle",
     "A1 Centre 1 + 2i, radius 4 (circle reaches all four quadrants)",
     "A1 Solid boundary with the inside shaded"
    ],
    "guidance": "Shading the unwanted region is fine if clearly indicated."
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 A half-line",
     "A1 Starting from −i",
     "A1 At angle π/3 to the real axis"
    ],
    "guidance": "Accept 60°, or x-intercept √3/3 marked if the half-line starts at −i; −π/3 not accepted."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 The integrand is undefined at x = 2 (must refer to x = 2)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1* ∫(x − 2)^(−1/3) dx = (3/2)(x − 2)^(2/3)",
     "B1 Introduces a limit a → 2 as the upper limit",
     "B1 Shows lim_{a→2} (3/2)(a − 2)^(2/3) = 0",
     "B1dep Value −3/2"
    ],
    "guidance": "Alternative: substitute u = x − 2 and take a → 0 as the upper limit."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Shear",
     "A1 x-axis fixed (invariant points), (0, 1) → (λ, 1)"
    ],
    "guidance": "Other mappings such as (1, 1) → (1 + λ, 1) accepted; shear factor not accepted."
   },
   "8(b)(i)": {
    "type": "points",
    "points": [
     "B1 1"
    ]
   },
   "8(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Area is preserved",
     "B1 Orientation is preserved"
    ]
   },
   "8(c)": {
    "type": "points",
    "points": [
     "B1 True for n = 1 (1 × λ seen)",
     "M1 Assumes true for n = k and forms Mᵏ⁺¹ = MᵏM (or MMᵏ)",
     "A1* Obtains (1 λ(1 + k); 0 1) with intermediate step",
     "A1dep Full conclusion covering n = 1 and k → k + 1"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "B1 Shear, x-axis fixed, (0, 1) → (nλ, 1)"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1* One loop correctly placed (initial line shown)",
     "B1* Exactly three loops correctly placed",
     "B1dep Only the lower loop drawn broken"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 A = ∫ ½a² sin²3θ dθ",
     "A1 Correct limits, e.g. 0 to π/3",
     "M1 Uses sin²3θ = ½(1 − cos 6θ)",
     "A1 ¼a²[θ − (1/6) sin 6θ]",
     "A1 πa²/12"
    ],
    "guidance": "SC B4 for an otherwise correct answer using limits outside 0 to π."
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 x³ − x⁶/2 + x⁹/3"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Uses x = ½ (or x³ = 0.125)",
     "A1 (½)³ − ½(½)⁶ + ⅓(½)⁹",
     "A1 181/1536, so n = 181"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "M1 Charlie used x = 2 (x³ = 8)",
     "A1 The series is valid only for −1 < x ≤ 1 (−1 < x³ ≤ 1)"
    ],
    "guidance": "Not awarded if spoilt by an incorrect statement."
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1 d = |2×8 − 4 + 2×5 − 4| / √(2² + 1² + 2²)",
     "A1 6"
    ],
    "guidance": "Alternative: foot of perpendicular (4, 6, 1), then distance 6."
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1 Substitutes: (8 − 2)/3 = 4/2 = (5 + 3)/4 = 2",
     "A1 Concludes P lies on L"
    ]
   },
   "11(c)": {
    "type": "points",
    "points": [
     "M1 2(2 + 3λ) − 2λ + 2(−3 + 4λ) = 4",
     "A1 λ = ½",
     "A1 (7/2, 1, −1)"
    ]
   },
   "11(d)": {
    "type": "points",
    "points": [
     "M1 cos θ = (2i − j + 2k)·(3i + 2j + 4k)/(√9 √29) = 12/(3√29)",
     "A1 θ = 42.03° (angle with normal)",
     "M1 Angle with plane = 90° − θ",
     "A1 48.0° (0.837 rad)"
    ],
    "guidance": "Alternatives: sin φ = 12/(3√29) directly (M2 A2), or use the vector product."
   },
   "11(e)": {
    "type": "points",
    "points": [
     "M1 Distance from P to the intersection point √((8 − 7/2)² + 3² + 6²)",
     "A1 3√29/2 (8.0777…)",
     "A1 (3√29/2) × 12/(3√29) = 6"
    ]
   },
   "12(a)(i)": {
    "type": "points",
    "points": [
     "M1* cosh t − 2sinh t = 0 gives tanh t (uses tanh = sinh/cosh)",
     "A1 tanh t = ½",
     "M1dep Uses artanh formula: t = ½ ln((1 + ½)/(1 − ½))",
     "A1 t = ½ ln 3"
    ],
    "guidance": "Alternatives: exponential form giving e²ᵗ = 3, or squaring to get sinh t = 1/√3 (reject negatives)."
   },
   "12(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Substitutes t = ½ ln 3 (0.5493) into x",
     "A1 2.89"
    ]
   },
   "12(b)": {
    "type": "points",
    "points": [
     "M1 dy/dx = (dy/dt)/(dx/dt)",
     "A1 (sinh t − 2cosh t)/(2sinh t + cosh t)",
     "A1 Gradient −2 at t = 0",
     "B1 B = (2, 1)",
     "M1 y − 1 = −2(x − 2)",
     "A1 y = −2x + 5"
    ]
   },
   "13(a)(i)": {
    "type": "points",
    "points": [
     "B1 1 : 3 (or ⅓ : 1)"
    ]
   },
   "13(a)(ii)": {
    "type": "points",
    "points": [
     "B1 θ"
    ]
   },
   "13(b)(i)": {
    "type": "points",
    "points": [
     "M1 Expands: 9 − 3e^(iθ) − 3e^(−iθ) + 1",
     "A1 10 − 6cos θ"
    ]
   },
   "13(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Writes the series as ⅓e^(iθ) + (1/9)e^(2iθ) + …",
     "A1 Sum = (⅓e^(iθ))/(1 − ⅓e^(iθ)) = e^(iθ)/(3 − e^(iθ))",
     "M1* Multiplies top and bottom by 3 − e^(−iθ)",
     "A1 (3e^(iθ) − 1)/(10 − 6cos θ)",
     "M1dep Uses e^(iθ) = cos θ + i sin θ in the numerator",
     "A1 Imaginary part gives 3sin θ/(10 − 6cos θ) (AG)"
    ]
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Auxiliary equation λ² + λ − 2 = 0",
     "A1 λ = −2, 1",
     "A1 CF Ae^(−2x) + Be^x",
     "B1 PI of form Ce^(−x)",
     "M1 Differentiates twice and substitutes: (C − C − 2C)e^(−x) = 12e^(−x)",
     "A1 C = −6",
     "A1 y = Ae^(−2x) + Be^x − 6e^(−x)"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "B1FT B = 0",
     "M1* y′ = −2Ae^(−2x) + Be^x + 6e^(−x) with x = 0",
     "A1 A = 3, so y = 3e^(−2x) − 6e^(−x)",
     "M1dep Solves y = 0, e.g. 3e^(−x)(e^(−x) − 2) = 0",
     "A1 x = −ln 2"
    ]
   },
   "15(a)": {
    "type": "points",
    "points": [
     "M1 Considers the determinant of (1 k 3; 3 4 2; 1 3 −1)",
     "M1 Method: 1×(−10) − k×(−5) + 3×5",
     "A1 det = 5k + 5",
     "A1 Unique point unless k = −1"
    ],
    "guidance": "SC B2 for 5k + 5 without working plus correct conclusion. Alternative: solve for x, y, z with denominator 5k + 5 (B2*, B1dep, B1)."
   },
   "15(b)": {
    "type": "points",
    "points": [
     "M1 Finds at least two correct cofactors",
     "A1 Cofactors correct",
     "M1 Transposes and divides by det M",
     "A1 M⁻¹ = (1/(5k + 5))(−10 k+9 2k−12; 5 −4 7; 5 k−3 4−3k) (middle row matters)",
     "M1 Multiplies M⁻¹ by (1, 3, −k)ᵀ",
     "A1 y = (−7 − 7k)/(5k + 5) = −7/5, independent of k"
    ],
    "guidance": "Alternative: eliminate variables, e.g. 5x + 10y = 3 − 2k and 4x + (9 + k)y = 1 − 3k, leading to (5 + 5k)y = −7k − 7 (M1* A1 M1* A1 M1dep A1cao)."
   },
   "17(a)(i)": {
    "type": "points",
    "points": [
     "B1 Volume after t minutes is 1000 − 5t, so concentration x/(1000 − 5t) (AG)"
    ]
   },
   "17(a)(ii)": {
    "type": "points",
    "points": [
     "B1* dx/dt = 10 …",
     "B1* … minus 5 × x/(1000 − 5t)",
     "B1dep Simplifies to the given equation (AG)"
    ]
   },
   "17(b)": {
    "type": "points",
    "points": [
     "M1 Integrating factor e^(∫1/(200 − t) dt)",
     "A1 IF = 1/(200 − t)",
     "M1 Multiplies through by the IF",
     "M1* d/dt(x/(200 − t)) = 10/(200 − t)",
     "A1 x/(200 − t) = −10 ln(200 − t) + c",
     "B1FT t = 0, x = 0 gives c = 10 ln 200",
     "M1dep Combines logs: 10 ln(200/(200 − t))",
     "A1 x = 10(200 − t) ln(200/(200 − t)) (AG)"
    ]
   },
   "17(c)(i)": {
    "type": "points",
    "points": [
     "M1 Half gone when t = 100",
     "A1 x = 1000 ln 2 = 693 g"
    ],
    "guidance": "Accept 690 or better."
   },
   "17(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Sets dx/dt = 0",
     "M1* 10(200 − t) ln(200/(200 − t)) = 10(200 − t)",
     "A1 ln(200/(200 − t)) = 1",
     "M1dep 200/(200 − t) = e",
     "A1 t = 126.42… (130 to 2 s.f. or better)"
    ],
    "guidance": "Exact value not accepted."
   },
   "17(d)": {
    "type": "points",
    "points": [
     "B1 Salt does not really dissolve/mix instantly or uniformly"
    ],
    "guidance": "Reasons about volume, evaporation or temperature are not accepted."
   }
  }
 },

 "fmath-ocrb-h645-2023-y420": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "z = a + ib; w = (5 + i√3)/(2 − i√3).",
    "parts": [
     {
      "code": "1(a)(i)",
      "prompt": "Write down z*.",
      "marks": 1
     },
     {
      "code": "1(a)(ii)",
      "prompt": "Find Re(iz).",
      "marks": 2
     },
     {
      "code": "1(b)(i)",
      "prompt": "Detailed reasoning required. Write w as x + iy.",
      "marks": 2
     },
     {
      "code": "1(b)(ii)",
      "prompt": "Write w in modulus-argument form.",
      "marks": 2
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the angle between the vector 3i + 2j + k and the plane −x + 3y + 2z = 8.",
      "marks": 5
     }
    ]
   },
   {
    "number": 3,
    "scenario": "The series 1/(1×3) + 1/(2×4) + 1/(3×5) + … + 1/(n(n + 2)).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Using partial fractions and the method of differences, show that the sum to n terms is 3/4 − (an + b)/(2(n + 1)(n + 2)) for integers a and b to be found.",
      "marks": 5
     },
     {
      "code": "3(b)",
      "prompt": "Deduce the sum to infinity.",
      "marks": 1
     }
    ]
   },
   {
    "number": 4,
    "scenario": "f(x) = √(1 + 2x).",
    "parts": [
     {
      "code": "4(a)(i)",
      "prompt": "Find f′(x) and f″(x).",
      "marks": 2
     },
     {
      "code": "4(a)(ii)",
      "prompt": "Hence give the first three terms of the Maclaurin series of √(1 + 2x).",
      "marks": 2
     },
     {
      "code": "4(b)",
      "prompt": "Using a suitable x, show that √5 ≈ 143/64.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Sixth roots of −64.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Detailed reasoning required. Find the sixth roots of −64 in the form re^(iθ).",
      "marks": 4
     },
     {
      "code": "5(b)",
      "prompt": "Show the roots on an Argand diagram.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "M = (0 1; 1 0), N = (2 0; 0 1).",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Detailed reasoning required. Decide whether M and N commute.",
      "marks": 3
     },
     {
      "code": "6(b)(i)",
      "prompt": "Describe the transformation represented by M.",
      "marks": 1
     },
     {
      "code": "6(b)(ii)",
      "prompt": "Describe the transformation represented by N.",
      "marks": 2
     },
     {
      "code": "6(c)",
      "prompt": "What does the result of (a) mean for these transformations?",
      "marks": 1
     },
     {
      "code": "6(d)",
      "prompt": "Show algebraically that every line parallel to the x-axis is invariant under N.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Polar curve r = a(1 − 2 sin θ), 0 ≤ θ ≤ 2π, a > 0 (diagram on the question paper): a large outer loop and a smaller inner loop, both passing through O. It crosses the initial line at A; B and C are the lowest points of the inner and outer loops.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Give r and θ at A, B and C.",
      "marks": 3
     },
     {
      "code": "7(b)",
      "prompt": "Find the set of θ values giving points on the inner loop.",
      "marks": 3
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Proof by induction.",
    "parts": [
     {
      "code": "8",
      "prompt": "Prove that 8ⁿ − 3ⁿ is divisible by 5 for all positive integers n.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Current I = a sin nt amps (a, n > 0). The RMS current is the square root of the mean of I² over one period 2π/n.",
    "parts": [
     {
      "code": "9",
      "prompt": "Show that the RMS current is a/√2 amps.",
      "marks": 6
     }
    ]
   },
   {
    "number": 10,
    "scenario": "x³ − 4x² + 7x + c = 0 (c constant) has roots α, β and α + β.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Find the roots.",
      "marks": 6
     },
     {
      "code": "10(b)",
      "prompt": "Find c.",
      "marks": 1
     }
    ]
   },
   {
    "number": 11,
    "scenario": "First-order differential equation.",
    "parts": [
     {
      "code": "11",
      "prompt": "Solve cosh x dy/dx − 2y sinh x = cosh x, with y = 1 at x = 0.",
      "marks": 7
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Multiple-angle identity.",
    "parts": [
     {
      "code": "12",
      "prompt": "Show that sin⁵θ = a sin 5θ + b sin 3θ + c sin θ, finding the constants a, b, c.",
      "marks": 7
     }
    ]
   },
   {
    "number": 13,
    "scenario": "Regions in the Argand diagram.",
    "parts": [
     {
      "code": "13(a)(i)",
      "prompt": "On its own Argand diagram, show |z| ≤ √5.",
      "marks": 3
     },
     {
      "code": "13(a)(ii)",
      "prompt": "On its own Argand diagram, show |z + 2 − 4i| ≥ |z − 2 − 6i|.",
      "marks": 3
     },
     {
      "code": "13(b)",
      "prompt": "Show that exactly one z satisfies both inequalities, and find it.",
      "marks": 8
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Planes kx − z = 2, −x + ky + 2z = 1, 2kx + 2y + 3z = 0, with k constant.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Using a determinant, show that the planes meet at a single point for every k.",
      "marks": 5
     },
     {
      "code": "14(b)",
      "prompt": "Using matrices, find the intersection point in terms of k.",
      "marks": 8
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "15",
      "prompt": "Evaluate ∫_1^2 1/√(1 + 2x − x²) dx in terms of π.",
      "marks": 5
     }
    ]
   },
   {
    "number": 16,
    "scenario": "P(4, 1, 0) is the same distance from the plane 2x + y + 2z = 0 as from the line (x − 3)/2 = (y − 1)/b = (z + 5)/3, where b > 0.",
    "parts": [
     {
      "code": "16",
      "prompt": "Find b.",
      "marks": 10
     }
    ]
   },
   {
    "number": 17,
    "scenario": "Competing species X and Y, numbers x and y at time t years: dx/dt = kx − ay and dy/dt = ky − bx, with k, a, b positive constants. Later parts use k = 0.015, a = 0.04, b = 0.01, with x = x₀ and y = y₀ at t = 0.",
    "parts": [
     {
      "code": "17(a)(i)",
      "prompt": "Show that x = Ae^((k+n)t) + Be^((k−n)t), where n = √(ab).",
      "marks": 6
     },
     {
      "code": "17(a)(ii)",
      "prompt": "Hence find y in terms of A, B, k, n, a and t.",
      "marks": 2
     },
     {
      "code": "17(b)(i)",
      "prompt": "Show that x = ½(x₀ − 2y₀)e^(0.035t) + ½(x₀ + 2y₀)e^(−0.005t).",
      "marks": 3
     },
     {
      "code": "17(b)(ii)",
      "prompt": "Hence show that y = ¼(x₀ + 2y₀)e^(−0.005t) − ¼(x₀ − 2y₀)e^(0.035t).",
      "marks": 1
     },
     {
      "code": "17(c)(i)",
      "prompt": "With x₀ = 500, y₀ = 300: how many of each species after 25 years?",
      "marks": 2
     },
     {
      "code": "17(c)(ii)",
      "prompt": "Detailed reasoning required. When are the two numbers equal?",
      "marks": 4
     },
     {
      "code": "17(c)(iii)",
      "prompt": "Does either species ever die out? Justify.",
      "marks": 3
     },
     {
      "code": "17(d)(i)",
      "prompt": "Studies suggest one species always ends up dominating. Give a relation between x₀ and y₀ for which the model does not predict this.",
      "marks": 1
     },
     {
      "code": "17(d)(ii)",
      "prompt": "Explain the long-term prediction in this exceptional case.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "2": {
    "type": "points",
    "points": [
     "B1 Normal −i + 3j + 2k (may be implied)",
     "M1 Scalar product with their normal: cos θ = 5/(√14√14)",
     "A1 θ = 69.07… (or 1.2… rad)",
     "M1 90° − their θ",
     "A1 20.9° (0.365 rad)"
    ],
    "guidance": "Alternatively sin θ = 5/14 directly (M2 A2), or via the vector product |(1, −7, 11)ᵀ|/14."
   },
   "8": {
    "type": "points",
    "points": [
     "B1 n = 1: 8 − 3 = 5, divisible by 5",
     "M1 Assumes true for n = k: 8ᵏ = 3ᵏ + 5m",
     "M1 Uses the assumption: 8ᵏ⁺¹ − 3ᵏ⁺¹ = 8(3ᵏ + 5m) − 3 × 3ᵏ",
     "A1 = 5 × 3ᵏ + 40m = 5(3ᵏ + 8m), divisible by 5",
     "A1 Full conclusion (needs all previous marks)"
    ],
    "guidance": "Alternative: u_{k+1} − u_k = 2(8ᵏ − 3ᵏ) + 5(8ᵏ)."
   },
   "9": {
    "type": "points",
    "points": [
     "M1* Uses the double-angle formula for sin²nt",
     "A1 ½k ∫_0^{2π/n} (1 − cos 2nt) dt, with k = a²",
     "M1dep ½k[t − (1/(2n)) sin 2nt]",
     "A1 ∫I² dt = πa²/n",
     "M1 Divides by 2π/n",
     "A1 Mean of I² = a²/2, so RMS = a/√2 (answer given)"
    ]
   },
   "11": {
    "type": "points",
    "points": [
     "B1 dy/dx − 2y tanh x = 1",
     "M1 IF = exp(−∫2 tanh x dx) from dy/dx on its own",
     "A1 IF = e^(−2 ln cosh x) = sech²x",
     "M1 d/dx(y sech²x) = sech²x (multiplies through by their IF)",
     "A1 y sech²x = tanh x + c",
     "M1 Uses x = 0, y = 1: c = 1",
     "A1 y = cosh²x(tanh x + 1)"
    ],
    "guidance": "Equivalent forms e.g. cosh x(sinh x + cosh x) or eˣ cosh x. The scheme's guidance column prints x = 1, y = 1 for finding c, but its working (and the question) use x = 0, y = 1, giving c = 1."
   },
   "12": {
    "type": "points",
    "points": [
     "M1 Considers (z − 1/z)⁵",
     "B1 = 32i sin⁵θ (seen anywhere)",
     "M1 Expands: z⁵ − 5z³ + 10z − 10/z + 5/z³ − 1/z⁵",
     "A1 Pairs terms: (z⁵ − 1/z⁵) − 5(z³ − 1/z³) + 10(z − 1/z)",
     "M1 Uses zⁿ − 1/zⁿ = 2i sin nθ (FT)",
     "A1 2i sin 5θ − 10i sin 3θ + 20i sin θ",
     "A1 sin⁵θ = (1/16) sin 5θ − (5/16) sin 3θ + (5/8) sin θ"
    ],
    "guidance": "Alternatives: (e^(iθ) − e^(−iθ))⁵, or de Moivre expansions of sin 5θ and sin 3θ."
   },
   "15": {
    "type": "points",
    "points": [
     "M1 Completes the square: 2 − (x − 1)²",
     "A1 Correct form",
     "M1 [arcsin((x − 1)/k)]",
     "A1 k = √2",
     "A1 arcsin(1/√2) − arcsin 0 = π/4 (both limits seen)"
    ],
    "guidance": "Alternative: u = x − 1, ∫_0^1 1/√(2 − u²) du."
   },
   "16": {
    "type": "points",
    "points": [
     "M1* Distance to plane |2×4 + 1×1 + 0|/√(2² + 1² + 2²)",
     "A1 = 3",
     "M1 Line r = 3i + j − 5k + λ(2i + bj + 3k)",
     "A1 With A(3, 1, −5) on the line, AP = i + 5k (or its negative)",
     "M1 AP × d = (i + 5k) × (2i + bj + 3k)",
     "A1 = −5bi + 7j + bk",
     "M1* Distance to line |AP × d|/|d|",
     "A1 √(26b² + 49)/√(13 + b²)",
     "M1dep Equates the distances: 26b² + 49 = 9(13 + b²)",
     "A1 b = 2"
    ],
    "guidance": "Alternatives: foot of perpendicular with λ = 17/(13 + b²); a repeated-root discriminant condition; or cos θ = 17/(√26√(13 + b²)) with Pythagoras."
   },
   "1(a)(i)": {
    "type": "points",
    "points": [
     "B1 z* = a − ib"
    ]
   },
   "1(a)(ii)": {
    "type": "points",
    "points": [
     "M1 iz = −b + ai",
     "A1 Re(iz) = −b"
    ]
   },
   "1(b)(i)": {
    "type": "points",
    "points": [
     "M1 Multiplies top and bottom by 2 + √3i: (7 + 7√3i)/7",
     "A1 w = 1 + √3i (intermediate step must be seen)"
    ]
   },
   "1(b)(ii)": {
    "type": "points",
    "points": [
     "B1ft Modulus 2 or argument π/3 (their values, may be implied)",
     "B1 w = 2(cos π/3 + i sin π/3) cao (allow 60°)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 1 = A(r + 2) + Br",
     "A1 A = ½, B = −½",
     "M1 Writes enough terms to show the cancellation pattern",
     "A1 ½[1 + ½ − 1/(n + 1) − 1/(n + 2)]",
     "A1 3/4 − (2n + 3)/(2(n + 1)(n + 2)), so a = 2, b = 3"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 3/4"
    ]
   },
   "4(a)(i)": {
    "type": "points",
    "points": [
     "B1 f′(x) = (1 + 2x)^(−½)",
     "B1 f″(x) = −(1 + 2x)^(−3/2)"
    ]
   },
   "4(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Their f(0) = 1, f′(0) = 1, f″(0) = −1 substituted into Maclaurin",
     "A1 1 + x − ½x²"
    ],
    "guidance": "Must come from correct derivatives, not a binomial expansion."
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1 Uses x = 1/8: √(1 + 2 × 1/8) ≈ 1 + 1/8 − ½(1/8)²",
     "A1 √5 ≈ 143/64 (answer given)"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 z⁶ = 64(cos π + i sin π) or 64e^(iπ) (condone −π)",
     "B1 r = 2 (may be implied)",
     "A1 One root correct",
     "A1 All correct: 2e^(iπ/6), 2e^(iπ/2), 2e^(5iπ/6), 2e^(−iπ/6), 2e^(−iπ/2), 2e^(−5iπ/6)"
    ],
    "guidance": "Arguments 7π/6, 3π/2, 11π/6 also accepted."
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Six points roughly on a circle centred O",
     "A1 Approximately a regular hexagon",
     "A1 Root at 2i or −2i indicated"
    ],
    "guidance": "Final A1 not given if (a) has wrong roots."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1 Finds both MN and NM",
     "A1* MN = (0 1; 2 0), NM = (0 2; 1 0)",
     "A1 So they do not commute (depends on A1*)"
    ]
   },
   "6(b)(i)": {
    "type": "points",
    "points": [
     "B1 Reflection in y = x"
    ]
   },
   "6(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Stretch parallel to the x-axis",
     "A1 Scale factor 2"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1 The order in which the transformations are applied matters"
    ]
   },
   "6(d)": {
    "type": "points",
    "points": [
     "M1 N(x, y)ᵀ = (2x, y)ᵀ, or N applied to (x, mx + c)ᵀ",
     "A1 y-coordinate is unchanged, so lines parallel to the x-axis are invariant"
    ],
    "guidance": "SC1 for a correct geometric argument."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 A: r = a, θ = 0 (or 2π)",
     "B1 B: r = −a, θ = π/2",
     "B1 C: r = 3a, θ = 3π/2"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 sin θ > ½ (allow equation or other inequality)",
     "A1 θ = π/6 and 5π/6",
     "A1 π/6 < θ < 5π/6 (condone ≤)"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 Sum of roots: 2(α + β) = 4, so α + β = 2",
     "B1 αβ + (α + β)α + (α + β)β = 7, or αβ + 2(α + β) = 7",
     "M1 Substitutes to get a quadratic, e.g. x + 3/x = 2",
     "A1 x² − 2x + 3 = 0",
     "M1 Solves their quadratic",
     "A1 Roots 1 + i√2, 1 − i√2 and 2"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "B1 c = −6"
    ]
   },
   "13(a)(i)": {
    "type": "points",
    "points": [
     "M1 Circle centred O",
     "A1 Radius √5",
     "A1 Inside shaded (or excluded region clearly marked)"
    ]
   },
   "13(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Points (−2, 4) and (2, 6) identified",
     "A1 Perpendicular bisector of (−2, 4) and (2, 6)",
     "A1 Region to the right of the line shaded (or equivalent)"
    ]
   },
   "13(b)": {
    "type": "points",
    "points": [
     "M1 Gradient −2",
     "B1 Through (0, 5)",
     "A1 y = −2x + 5 (inequality allowed)",
     "B1 Circle x² + y² = 5",
     "M1 x² + (5 − 2x)² = 5 (must be an equation)",
     "M1 Simplifies to 5x² − 20x + 20 = 0",
     "A1* x = 2 only (or y = 1 only)",
     "A1dep Unique solution z = 2 + i"
    ],
    "guidance": "Alternative: squares (x + 2)² + (y − 4)² = (x − 2)² + (y − 6)² and expands (M1 M1) to reach the same line."
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Uses the determinant of (k 0 −1; −1 k 2; 2k 2 3)",
     "M1 Expands by any row or column: k(3k − 4) − 1(−2 − 2k²)",
     "A1 5k² − 4k + 2",
     "M1 Shows no real roots: discriminant 16 − 40 = −24 < 0 (or completing the square)",
     "A1 Determinant never zero, so the planes always meet at a point"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "M1 At least 5 cofactors correct",
     "A1 All cofactors correct",
     "M1 Transposes the cofactor matrix",
     "M1 Divides by their determinant",
     "A1 M⁻¹ = (1/(5k² − 4k + 2))(3k − 4, −2, k; 4k + 3, 5k, −2k + 1; −2 − 2k², −2k, k²)",
     "M1 Finds M⁻¹(2, 1, 0)ᵀ",
     "A2,1,0 ((6k − 10), (13k + 6), (−4k² − 2k − 4)) each over 5k² − 4k + 2"
    ],
    "guidance": "A2,1,0 is printed as one award worth up to 2: A1 for one coordinate correct, or for all three correct FT their determinant."
   },
   "17(a)(i)": {
    "type": "points",
    "points": [
     "M1* Differentiates dx/dt with respect to t",
     "M1dep Substitutes for dy/dt",
     "M1dep Substitutes for y",
     "A1 d²x/dt² − 2k dx/dt + (k² − n²)x = 0 (ab may appear for n²)",
     "M1 Auxiliary equation m² − 2km + (k² − n²) = 0, m = k ± n",
     "A1 x = Ae^((k+n)t) + Be^((k−n)t) (answer given)"
    ]
   },
   "17(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Differentiates x",
     "A1 y = (n/a)(−Ae^((k+n)t) + Be^((k−n)t))"
    ]
   },
   "17(b)(i)": {
    "type": "points",
    "points": [
     "M1 n = √(ab) = √0.0004 = 0.02, so k + n = 0.035 and k − n = −0.005",
     "M1 From x₀ = A + B and y₀ = −½(A − B), finds A = ½(x₀ − 2y₀), B = ½(x₀ + 2y₀)",
     "A1 Result shown (answer given, needs both M marks)"
    ],
    "guidance": "The scheme prints n = √0.004 here; with a = 0.04 and b = 0.01, ab = 0.0004, so n = √0.0004 = 0.02 (its value 0.02 is right)."
   },
   "17(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Substitutes into y and simplifies to the given result (first step must be seen)"
    ]
   },
   "17(c)(i)": {
    "type": "points",
    "points": [
     "M1 x = −50e^(0.875) + 550e^(−0.125) or y = 275e^(−0.125) + 25e^(0.875)",
     "A1 x = 365, y = 302 (allow 303)"
    ]
   },
   "17(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Sets x = y: −50e^(0.035t) + 550e^(−0.005t) = 275e^(−0.005t) + 25e^(0.035t)",
     "M1 Collects terms: 275e^(−0.005t) = 75e^(0.035t)",
     "M1 Takes logs: 0.04t = ln(11/3)",
     "A1 t = 32.5, so equal after about 32 or 33 years"
    ]
   },
   "17(c)(iii)": {
    "type": "points",
    "points": [
     "M1 X does die out: 550e^(−0.005t) → 0 while −50e^(0.035t) is always negative",
     "A1 Complete explanation (e.g. x = 0 at t ≈ 59.94)",
     "B1 Y never dies out, as y is a sum of two positive terms"
    ]
   },
   "17(d)(i)": {
    "type": "points",
    "points": [
     "B1 x₀ = 2y₀"
    ]
   },
   "17(d)(ii)": {
    "type": "points",
    "points": [
     "M1 x = Ce^(−0.005t), y = ½Ce^(−0.005t)",
     "A1 Both populations tend to zero"
    ]
   }
  }
 },

 "fmath-ocrb-h645-2022-y420": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Summation using a difference identity.",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Using (r + 1)³ − r³, find Σ_{r=1}^{n} (3r² + 3r + 1).",
      "marks": 3
     },
     {
      "code": "1(b)",
      "prompt": "Hence find Σ_{r=1}^{n} r(r + 1), fully factorised.",
      "marks": 4
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the exact value of ∫_3^∞ 1/(x² − 4x + 5) dx.",
      "marks": 5
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "3",
      "prompt": "Solve 3 cosh x = 2 sinh²x, giving the solutions as exact logarithms.",
      "marks": 6
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Matrix transformations.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "The matrix (m 2 1; 0 1 −2; 2 0 3), m constant, maps the vertices of a cube onto points lying in one plane. Find m.",
      "marks": 3
     },
     {
      "code": "4(b)",
      "prompt": "Plane transformations S and T have matrices M = (k 1; −3 4) and N, where det N = 3k + 1. U is S followed by T. U preserves orientation and has area scale factor 2. Find the possible values of k.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Polar curve r = a(1 − cos θ), 0 ≤ θ < 2π, with a a positive constant.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Sketch the curve.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Find the exact area enclosed by the curve.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Proof by induction.",
    "parts": [
     {
      "code": "6",
      "prompt": "Prove that (2 0; −1 1)ⁿ = (2ⁿ 0; 1 − 2ⁿ 1) for every positive integer n.",
      "marks": 5
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "7",
      "prompt": "Show that ∫_2^3 (x + 1)/((x − 1)(x² + 1)) dx = ½ ln 2.",
      "marks": 9
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Loci {z : arg(z − 10) = ¾π} and {z : |z − 3 − 6i| = k}, k > 0. One of their intersection points lies on the imaginary axis.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Sketch both loci on one Argand diagram.",
      "marks": 4
     },
     {
      "code": "8(b)",
      "prompt": "Detailed reasoning required. Find the complex numbers at the points of intersection.",
      "marks": 7
     }
    ]
   },
   {
    "number": 9,
    "scenario": "f(x) = ln(1 + sinh x).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "If k is in the domain of f, explain why k > ln(√2 − 1).",
      "marks": 2
     },
     {
      "code": "9(b)(i)",
      "prompt": "Find f′(x).",
      "marks": 2
     },
     {
      "code": "9(b)(ii)",
      "prompt": "Show that f″(x) = (a sinh x + b)/(1 + sinh x)² for integers a and b to be found.",
      "marks": 3
     },
     {
      "code": "9(c)",
      "prompt": "Hence find a quadratic approximation to f(x) for small x.",
      "marks": 3
     },
     {
      "code": "9(d)",
      "prompt": "Find the percentage error of this approximation at x = 0.1.",
      "marks": 2
     }
    ]
   },
   {
    "number": 10,
    "scenario": "4x⁴ + 16x³ + ax² + bx + 6 = 0, with a, b real, has roots α, 2/α, β and 3β.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Given β < 0, find all four roots.",
      "marks": 6
     },
     {
      "code": "10(b)",
      "prompt": "Find a and b.",
      "marks": 4
     }
    ]
   },
   {
    "number": 11,
    "scenario": "An Argand diagram (on the question paper) shows point A for z₁, in the first quadrant at an argument of roughly 30°. z₂ = z₁e^(2πi/3) and z₃ = z₁e^(4πi/3).",
    "parts": [
     {
      "code": "11(a)(i)",
      "prompt": "Mark points B and C representing z₂ and z₃ on the diagram.",
      "marks": 2
     },
     {
      "code": "11(a)(ii)",
      "prompt": "Show that z₁ + z₂ + z₃ = 0.",
      "marks": 2
     },
     {
      "code": "11(b)",
      "prompt": "Given z₁, z₂, z₃ are the roots of z³ = 8i, find them exactly in the form a + bi.",
      "marks": 4
     }
    ]
   },
   {
    "number": 12,
    "scenario": "First-order differential equation.",
    "parts": [
     {
      "code": "12",
      "prompt": "Solve (4 − x²) dy/dx − xy = 1 with y = 1 at x = 0, giving y = f(x).",
      "marks": 9
     }
    ]
   },
   {
    "number": 13,
    "scenario": "A(4, 0, −1), B(10, 4, −3). Planes Π₁: x − 2y = 5 and Π₂: 2x + 3y − z = −4.",
    "parts": [
     {
      "code": "13(a)",
      "prompt": "Find the acute angle between line AB and Π₁.",
      "marks": 4
     },
     {
      "code": "13(b)",
      "prompt": "Show that AB meets Π₁ and Π₂ at the same point and give its coordinates.",
      "marks": 5
     },
     {
      "code": "13(c)(i)",
      "prompt": "Find (i − 2j) × (2i + 3j − k).",
      "marks": 1
     },
     {
      "code": "13(c)(ii)",
      "prompt": "Hence find the acute angle between Π₁ and Π₂.",
      "marks": 3
     },
     {
      "code": "13(c)(iii)",
      "prompt": "Find the shortest distance from A to the line of intersection of Π₁ and Π₂.",
      "marks": 4
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Complex exponentials and a trigonometric series.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Express (3 − e^(2iθ))(3 − e^(−2iθ)) in terms of cos 2θ.",
      "marks": 2
     },
     {
      "code": "14(b)",
      "prompt": "Hence show that sin θ + ⅓ sin 3θ + (1/9) sin 5θ + (1/27) sin 7θ + … = 6 sin θ/(5 − 3 cos 2θ).",
      "marks": 6
     }
    ]
   },
   {
    "number": 15,
    "scenario": "A particle of mass m kg moves on a horizontal line; displacement x m from O at time t s, velocity v m s⁻¹, with a force 2mx N towards O (diagram on the question paper). It starts 2 m from O on the positive side, moving away from O at 1 m s⁻¹.",
    "parts": [
     {
      "code": "15(a)(i)",
      "prompt": "Show that d²x/dt² + 2x = 0 models the motion.",
      "marks": 1
     },
     {
      "code": "15(a)(ii)",
      "prompt": "Name the type of motion.",
      "marks": 1
     },
     {
      "code": "15(a)(iii)",
      "prompt": "Write down the period.",
      "marks": 1
     },
     {
      "code": "15(a)(iv)",
      "prompt": "Find x in terms of t.",
      "marks": 4
     },
     {
      "code": "15(a)(v)",
      "prompt": "Find the amplitude.",
      "marks": 2
     },
     {
      "code": "15(b)(i)",
      "prompt": "A damping force 2mv N is added. Show that d²x/dt² + 2 dx/dt + 2x = 0.",
      "marks": 1
     },
     {
      "code": "15(b)(ii)",
      "prompt": "With a reason, say whether this is under-, critically or over-damped.",
      "marks": 1
     },
     {
      "code": "15(b)(iii)",
      "prompt": "Find the general solution.",
      "marks": 3
     },
     {
      "code": "15(c)(i)",
      "prompt": "A further force 2m cos 2t N is added, giving d²x/dt² + 2 dx/dt + 2x = 2 cos 2t. Find x in terms of t (same initial conditions).",
      "marks": 7
     },
     {
      "code": "15(c)(ii)",
      "prompt": "In the long run the particle performs SHM with period just over 3 s. Verify this agrees with (c)(i).",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "2": {
    "type": "points",
    "points": [
     "M1 Completes the square: (x − 2)² + 1",
     "A1 [arctan(x − 2)]",
     "E1 Clear limit argument: arctan(k − 2) → π/2 as k → ∞",
     "B1 π/2 − π/4",
     "B1 Integral = π/4"
    ]
   },
   "3": {
    "type": "points",
    "points": [
     "M1 Uses sinh²x = cosh²x − 1",
     "A1 2cosh²x − 3cosh x − 2 = 0",
     "M1 Solves the quadratic: (2cosh x + 1)(cosh x − 2) = 0",
     "A1 cosh x = 2 (−½ rejected; need not be shown)",
     "A1 x = ln(2 + √3)",
     "A1 x = −ln(2 + √3), or ln(2 − √3)"
    ]
   },
   "6": {
    "type": "points",
    "points": [
     "B1 Verifies the case n = 1",
     "M1 Assumes true for n = k and writes the (k + 1) power as (2ᵏ 0; 1 − 2ᵏ 1)(2 0; −1 1)",
     "M1 Multiplies out: (2ᵏ⁺¹ 0; 2 − 2ᵏ⁺¹ − 1 1)",
     "A1 (2ᵏ⁺¹ 0; 1 − 2ᵏ⁺¹ 1), so true for n = k + 1",
     "B1cao Full concluding statement"
    ],
    "guidance": "The final B1 needs all four earlier marks."
   },
   "7": {
    "type": "points",
    "points": [
     "M1 Correct partial fraction form A/(x − 1) + (Bx + C)/(x² + 1)",
     "A1 A = 1",
     "A1 B = −1",
     "A1 C = 0",
     "B1ft ln(x − 1)",
     "M1 k ln(x² + 1)",
     "A1ft k = −½",
     "M1 Combines two of the log terms correctly after substituting limits, e.g. ln 2 − ½ ln(10/5)",
     "A1 ½ ln 2 (answer given)"
    ]
   },
   "12": {
    "type": "points",
    "points": [
     "B1 dy/dx − x/(4 − x²) y = 1/(4 − x²)",
     "M1 Integrating factor exp(−∫x/(4 − x²) dx) from dy/dx on its own",
     "M1 Integrates: e^(½ ln(4 − x²))",
     "A1 IF = √(4 − x²)",
     "M1 Multiplies through by their IF: d/dx(√(4 − x²) y) = 1/√(4 − x²)",
     "A1 √(4 − x²) y = arcsin(x/2) + c",
     "M1 Rearranges to y = (arcsin(½x) + c)/√(4 − x²) including c",
     "M1 Uses x = 0, y = 1: c = 2",
     "A1 y = (arcsin(½x) + 2)/√(4 − x²)"
    ]
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 (r + 1)³ − r³ = 3r² + 3r + 1 (may be implied)",
     "M1 Writes the sum as a telescoping series of differences 2³ − 1³ + … + (n + 1)³ − n³",
     "A1 (n + 1)³ − 1"
    ],
    "guidance": "Standard summation formulae cannot earn the last two marks."
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1* 3Σr(r + 1) + n = (n + 1)³ − 1, using Σ1 = n",
     "A1 Σr(r + 1) = ⅓[(n + 1)³ − 1 − n]",
     "M1dep* Factorises correctly using n or n + 1, e.g. ⅓(n + 1)[(n + 1)² − 1]",
     "A1 ⅓n(n + 1)(n + 2)"
    ],
    "guidance": "SC2 for a correct answer via standard summation formulae."
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1 Finds the determinant: 3m − 10",
     "A1 Sets 3m − 10 = 0",
     "A1 m = 10/3"
    ],
    "guidance": "Alternative: scalar triple product of the columns gives 3m − 10 = 0."
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 det M = 4k + 3",
     "M1 Uses det(NM) = det N × det M (may be implied)",
     "M1 Sets (3k + 1)(4k + 3) = 2",
     "A1 k = −1 or k = −1/12"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Closed loop symmetrical about the initial line",
     "A1 Correct cardioid shape with a cusp at O"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 A = ∫_0^{2π} ½a²(1 − cos θ)² dθ (limits may come later)",
     "M1 Expands correctly",
     "M1 Uses cos²θ = ½(1 + cos 2θ)",
     "B1 Integrates to k[3θ − 4 sin θ + ½ sin 2θ]",
     "A1cao 3πa²/2"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Half-line starting at 10 on the real axis",
     "A1 At 135° (45° to the real axis), meeting the imaginary axis at 10i",
     "B1 Circle centred at 3 + 6i",
     "B1 Circle meets the half-line on the imaginary axis"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 One intersection is 10i",
     "M1* k² = (3 − 0)² + (6 − 10)²",
     "A1 k = 5",
     "M1dep* Solves x + y = 10 with (x − 3)² + (y − 6)² = 25",
     "M1 Forms a quadratic: 2x² − 14x = 0",
     "A1 x = 7, y = 3",
     "A1 Other point is 7 + 3i"
    ],
    "guidance": "Alternative via the perpendicular from (3, 6) to the chord (y = x + 3), midpoint (3½, 6½), giving (7, 3). Modulus–argument form √58(cos 0.405 + i sin 0.405) accepted."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Requires 1 + sinh k > 0, i.e. sinh k > −1",
     "A1 k > arsinh(−1) = ln(√2 − 1) (answer given)"
    ]
   },
   "9(b)(i)": {
    "type": "points",
    "points": [
     "M1 Chain rule",
     "A1 f′(x) = cosh x/(1 + sinh x)"
    ]
   },
   "9(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Quotient or product rule: ((1 + sinh x)sinh x − cosh²x)/(1 + sinh x)²",
     "M1 Uses cosh²x − sinh²x = 1",
     "A1 f″(x) = (sinh x − 1)/(1 + sinh x)², so a = 1, b = −1"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "B1ft f(0) = 0, f′(0) = 1, f″(0) = −1 (may be implied)",
     "M1 Maclaurin series attempted with their values substituted",
     "A1cao f(x) ≈ x − ½x²"
    ]
   },
   "9(d)": {
    "type": "points",
    "points": [
     "M1 (ln(1 + sinh 0.1) − 0.095)/ln(1 + sinh 0.1) × 100",
     "A1 0.48% (allow −0.48%)"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 Product of roots: α × (2/α) × β × 3β = 6/4",
     "A1 β = −½",
     "M1 Sum of roots: α + 2/α + β + 3β = −16/4",
     "A1 α² + 2α + 2 = 0",
     "M1 Solves their quadratic for α",
     "A1 Roots −1 + i, −1 − i, −½, −3/2"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1 Sum of products in pairs = a/4, no missing terms",
     "A1 a = 27",
     "M1 Sum of products in threes = −b/4, no missing terms",
     "A1 b = 22"
    ],
    "guidance": "Alternatives: expand (x² + 2x + 2)(4x² + 8x + 3), or substitute x = −½ and x = −3/2 into the quartic."
   },
   "11(a)(i)": {
    "type": "points",
    "points": [
     "M1 B and C on a circle centre O through A",
     "A1 A, B, C form an approximately equilateral triangle; B and C labelled"
    ]
   },
   "11(a)(ii)": {
    "type": "points",
    "points": [
     "M1 z₁(1 + e^(2πi/3) + e^(4πi/3)) summed as a GP, or other correct method",
     "A1 z₁(1 − e^(2πi))/(1 − e^(2πi/3)) = 0"
    ],
    "guidance": "Alternative: 1 + cos(2π/3) + cos(4π/3) + i(sin(2π/3) + sin(4π/3)) = 0."
   },
   "11(b)": {
    "type": "points",
    "points": [
     "B1 z³ = 8e^(iπ/2) (exponential or mod-arg form, may be implied)",
     "B1 |z| = 2 (may be implied)",
     "B1 Two roots correct from √3 + i, −√3 + i, −2i",
     "B1 All three roots correct"
    ]
   },
   "13(a)": {
    "type": "points",
    "points": [
     "B1 AB = 6i + 4j − 2k (or any multiple)",
     "M1 Angle with normal i − 2j: cos θ = (3i + 2j − k)·(i − 2j)/(√14√5) = −1/(√14√5)",
     "A1 θ = 96.9°",
     "A1 Angle with plane 6.9° (7° or better; 0.1198 rad)"
    ]
   },
   "13(b)": {
    "type": "points",
    "points": [
     "B1ft r = 4i − k + λ(3i + 2j − k)",
     "M1 Substitutes into Π₁: 4 + 3λ − 4λ = 5, λ = −1",
     "A1 Meets Π₁ at (1, −2, 0)",
     "M1 Substitutes this point into Π₂ (or solves the line with Π₂)",
     "A1 2(1) + 3(−2) − 0 = −4, so the point lies on Π₂"
    ]
   },
   "13(c)(i)": {
    "type": "points",
    "points": [
     "B1 2i + j + 7k"
    ]
   },
   "13(c)(ii)": {
    "type": "points",
    "points": [
     "B1 |cross product| = √54 (may be implied)",
     "M1 √5 × √14 sin θ = √54",
     "A1 θ = 61.4° (1.07 rad)"
    ]
   },
   "13(c)(iii)": {
    "type": "points",
    "points": [
     "B1ft 2i + j + 7k is the direction of the line of intersection (used in numerator and denominator)",
     "M1 (3, 2, −1)ᵀ × (2, 1, 7)ᵀ = (15, −23, −1)ᵀ",
     "M1 d = √(15² + 23² + 1²)/√(2² + 1² + 7²)",
     "A1cao 3.74"
    ]
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Expands: 9 − 3(e^(2iθ) + e^(−2iθ)) + 1",
     "A1 10 − 6 cos 2θ"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "M1 Forms C + iS = e^(iθ) + ⅓e^(3iθ) + (1/9)e^(5iθ) + … (at least 2 terms)",
     "M1 Uses the sum to infinity of a GP",
     "A1 e^(iθ)/(1 − ⅓e^(2iθ))",
     "M1* Multiplies numerator and denominator by 3 − e^(−2iθ): 3e^(iθ)(3 − e^(−2iθ))/(10 − 6 cos 2θ)",
     "M1dep* Uses e^(iθ) = cos θ + i sin θ after making the denominator real",
     "A1 S = (9 sin θ + 3 sin θ)/(10 − 6 cos 2θ) = 6 sin θ/(5 − 3 cos 2θ) (answer given)"
    ]
   },
   "15(a)(i)": {
    "type": "points",
    "points": [
     "B1 m d²x/dt² = −2mx gives d²x/dt² + 2x = 0 (answer given)"
    ]
   },
   "15(a)(ii)": {
    "type": "points",
    "points": [
     "B1 Simple harmonic motion"
    ]
   },
   "15(a)(iii)": {
    "type": "points",
    "points": [
     "B1 2π/√2 = √2π s (awrt 4.4)"
    ]
   },
   "15(a)(iv)": {
    "type": "points",
    "points": [
     "B1 x = A cos √2t + B sin √2t",
     "B1 t = 0, x = 2 gives A = 2",
     "M1 Differentiates a cos/sin function of t",
     "A1 B = √2/2, so x = 2 cos √2t + (√2/2) sin √2t"
    ]
   },
   "15(a)(v)": {
    "type": "points",
    "points": [
     "M1 √(2² + (½√2)²)",
     "A1 3√2/2 m (awrt 2.1)"
    ]
   },
   "15(b)(i)": {
    "type": "points",
    "points": [
     "B1 m d²x/dt² = −2mx − 2m dx/dt, giving the result (answer given)"
    ]
   },
   "15(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Under-damped since 2² − 4 × 1 × 2 < 0 (or complex roots −1 ± i)"
    ]
   },
   "15(b)(iii)": {
    "type": "points",
    "points": [
     "M1 Auxiliary equation λ² + 2λ + 2 = 0",
     "A1 λ = −1 ± i",
     "A1 x = e^(−t)(A cos t + B sin t)"
    ]
   },
   "15(c)(i)": {
    "type": "points",
    "points": [
     "M1 PI x = C cos 2t + D sin 2t",
     "M1 Substitutes: −4C + 4D + 2C = 2 and −4D − 4C + 2D = 0",
     "A1 C = −0.2, D = 0.4",
     "B1 t = 0, x = 2 gives A = 2.2 (from correct CF)",
     "M1* Differentiates CF + PI using the product rule",
     "M1dep* Uses t = 0, dx/dt = 1 to get an equation in A and B: 1 = −A + B + 0.8",
     "A1cao x = e^(−t)(2.2 cos t + 2.4 sin t) − 0.2 cos 2t + 0.4 sin 2t"
    ]
   },
   "15(c)(ii)": {
    "type": "points",
    "points": [
     "M1 As t → ∞, x → −0.2 cos 2t + 0.4 sin 2t (needs e^(−kt) and cos/sin terms)",
     "A1 SHM with period 2π/2 = π ≈ 3.14 s"
    ]
   }
  }
 },

 "fmath-ocrb-h645-2021a-y420": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Write 1/((2r − 1)(2r + 1)) in partial fractions.",
      "marks": 3
     },
     {
      "code": "1(b)",
      "prompt": "Hence find Σ_{r=1}^{n} 1/((2r − 1)(2r + 1)) as a single fraction.",
      "marks": 4
     }
    ]
   },
   {
    "number": 2,
    "scenario": "You must show detailed reasoning.",
    "parts": [
     {
      "code": "2",
      "prompt": "Find the gradient of y = 6 arcsin(2x) where x = ¼, in the form m√n with m and n integers.",
      "marks": 4
     }
    ]
   },
   {
    "number": 3,
    "scenario": "You must show detailed reasoning. z₁ = −2 + 2i and z₂ = 2(cos(π/6) + i sin(π/6)).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find the modulus and argument of z₁.",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Hence write z₁/z₂ in exact modulus-argument form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 4,
    "scenario": "You must show detailed reasoning.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the mean value of 1/(1 + 4x²) over −1 ≤ x ≤ 1, to 3 significant figures.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Use a Maclaurin series to find a quadratic approximation to ln(1 + 2x).",
      "marks": 1
     },
     {
      "code": "5(b)",
      "prompt": "Find the percentage error when this approximation is used to estimate ln(1.2).",
      "marks": 3
     },
     {
      "code": "5(c)",
      "prompt": "Jane tries to use the same series to approximate ln 3. Explain whether this is valid.",
      "marks": 2
     }
    ]
   },
   {
    "number": 6,
    "scenario": "",
    "parts": [
     {
      "code": "6",
      "prompt": "The line y = mx is invariant under the transformation with matrix (1 2; 2 −2). Find the possible values of m.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "",
    "parts": [
     {
      "code": "7",
      "prompt": "Prove that Σ_{r=1}^{n} r/2^(r−1) = 4 − (n + 2)/2^(n−1) for all n ≥ 1.",
      "marks": 6
     }
    ]
   },
   {
    "number": 8,
    "scenario": "4x⁴ − 4x³ + px² + qx − 9 = 0, with constants p and q, has roots α, −α, β and 1/β.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Find the exact roots.",
      "marks": 5
     },
     {
      "code": "8(b)",
      "prompt": "Find p and q.",
      "marks": 4
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Transformation T of the plane has matrix M = (−1 0; −2 1). OABC is the unit square.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Plot the image OA′B′C′ of OABC under T (grid in the answer booklet).",
      "marks": 2
     },
     {
      "code": "9(b)(i)",
      "prompt": "Find det M.",
      "marks": 1
     },
     {
      "code": "9(b)(ii)",
      "prompt": "Explain what the value of det M tells you about OA′B′C′.",
      "marks": 2
     },
     {
      "code": "9(c)(i)",
      "prompt": "T is equivalent to two successive transformations. Describe fully two such transformations.",
      "marks": 3
     },
     {
      "code": "9(c)(ii)",
      "prompt": "Verify your answer using matrices.",
      "marks": 3
     }
    ]
   },
   {
    "number": 10,
    "scenario": "",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Show the three cube roots of unity on an Argand diagram.",
      "marks": 2
     },
     {
      "code": "10(b)(i)",
      "prompt": "Find the exact roots of z³ − 1 = √3 i in the form re^(iθ), with r > 0 and −π < θ < π.",
      "marks": 5
     },
     {
      "code": "10(b)(ii)",
      "prompt": "The cube roots of unity form triangle Δ₁ and the roots of z³ − 1 = √3 i form triangle Δ₂. Give a sequence of two transformations taking Δ₁ to Δ₂.",
      "marks": 2
     },
     {
      "code": "10(b)(iii)",
      "prompt": "Calling the roots from (b)(i) z₁, z₂, z₃, simplify z₁ + z₂ + z₃ to verify that the sum is zero.",
      "marks": 2
     },
     {
      "code": "10(b)(iv)",
      "prompt": "Hence show that sin 20° + sin 140° = sin 100°.",
      "marks": 2
     }
    ]
   },
   {
    "number": 11,
    "scenario": "u = λi + j − 3k and v = i + 2j − 2k.",
    "parts": [
     {
      "code": "11(a)(i)",
      "prompt": "Find u.v in terms of λ.",
      "marks": 1
     },
     {
      "code": "11(a)(ii)",
      "prompt": "Find u × v in terms of λ.",
      "marks": 2
     },
     {
      "code": "11(b)(i)",
      "prompt": "Hence find the acute angle between the planes 2x + y − 3z = 10 and x + 2y − 2z = 10.",
      "marks": 3
     },
     {
      "code": "11(b)(ii)",
      "prompt": "Hence find the shortest distance between the lines (x − 3)/3 = y/1 = (z − 2)/(−3) and x/1 = (y − 4)/2 = (z + 2)/(−2), as a multiple of √2.",
      "marks": 3
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Fig. 12 (on the question paper) shows rhombus OACB on an Argand diagram, with O at the origin, A (representing z) and B (representing w) both in the first quadrant and A closer to the real axis; C is the fourth vertex.",
    "parts": [
     {
      "code": "12",
      "prompt": "Prove that arg(z + w) = ½(arg z + arg w).",
      "marks": 4
     }
    ]
   },
   {
    "number": 13,
    "scenario": "",
    "parts": [
     {
      "code": "13",
      "prompt": "Find the general solution of d²y/dx² + 2 dy/dx − 3y = 2eˣ.",
      "marks": 7
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Polar curve r = a(cos θ + 2 sin θ), a > 0, 0 ≤ θ ≤ π.",
    "parts": [
     {
      "code": "14(a)",
      "prompt": "Find the polar coordinates of the point on the curve furthest from the pole.",
      "marks": 7
     },
     {
      "code": "14(b)(i)",
      "prompt": "Show that the curve is a circle and state its radius.",
      "marks": 6
     },
     {
      "code": "14(b)(ii)",
      "prompt": "Write down the polar coordinates of its centre.",
      "marks": 1
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Planes: −4x + ky + 7z = 4, x − 2y + 5z = l, 2x + 3y + z = 2.",
    "parts": [
     {
      "code": "15",
      "prompt": "The three planes form a sheaf. Find k and l.",
      "marks": 6
     }
    ]
   },
   {
    "number": 16,
    "scenario": "",
    "parts": [
     {
      "code": "16(a)",
      "prompt": "Using exponentials, show that cosh 2u = 1 + 2 sinh²u.",
      "marks": 4
     },
     {
      "code": "16(b)",
      "prompt": "Show that ∫₀² x²/√(4 + x²) dx = 2√2 − 2 ln(1 + √2).",
      "marks": 10
     }
    ]
   },
   {
    "number": 17,
    "scenario": "A vessel starts with 1 litre of pure water. Chemical flows in at a constant a litres/min and mixes instantly; mixture is drained at a constant b litres/min. After t minutes the vessel holds x litres of chemical.",
    "parts": [
     {
      "code": "17(a)(i)",
      "prompt": "Show that the proportion of chemical after t minutes is x/(1 + (a − b)t).",
      "marks": 2
     },
     {
      "code": "17(a)(ii)",
      "prompt": "Hence show that dx/dt + bx/(1 + (a − b)t) = a.",
      "marks": 2
     },
     {
      "code": "17(b)(i)",
      "prompt": "Case b = a: solve the differential equation for x in terms of a and t.",
      "marks": 4
     },
     {
      "code": "17(b)(ii)",
      "prompt": "After 1 minute the vessel holds equal amounts of water and chemical. Find the inflow rate.",
      "marks": 2
     },
     {
      "code": "17(c)(i)",
      "prompt": "Case b = 2a: explain why the equation from (a)(ii) is not valid for t ≥ 1/a.",
      "marks": 1
     },
     {
      "code": "17(c)(ii)",
      "prompt": "Find the greatest amount of chemical in the vessel.",
      "marks": 9
     }
    ]
   }
  ],
  "markSchemes": {
   "2": {
    "type": "points",
    "points": [
     "B1 Derivative of form k/√(1 − 4x²)",
     "M1 Chain rule factor 2",
     "A1 dy/dx = 12/√(1 − 4x²)",
     "A1 At x = ¼: 8√3"
    ],
    "guidance": "Alternative: sin(y/6) = 2x, dx/dy = (1/12)cos(y/6), y = π at x = ¼."
   },
   "4": {
    "type": "points",
    "points": [
     "B1 Mean = (1/2)∫₋₁¹ 1/(1 + 4x²) dx",
     "M1 Rearranges to (1/8)∫ 1/(¼ + x²) dx (or substitutes u = 2x)",
     "A1 (1/8)[2 arctan 2x]₋₁¹",
     "A1 ½ arctan 2 ≈ 0.554"
    ]
   },
   "6": {
    "type": "points",
    "points": [
     "M1 (1 2; 2 −2)(x, y)ᵀ = (x + 2y, 2x − 2y)ᵀ",
     "M1 Substitutes y = mx into 2x − 2y = m(x + 2y)",
     "A1 2x − 2mx = m(x + 2mx), giving 2m² + 3m − 2 = 0",
     "A1 m = −2 or ½"
    ]
   },
   "7": {
    "type": "points",
    "points": [
     "B1 n = 1: sum = 1 = 4 − 3/2⁰",
     "M1 Assumes true for n = k",
     "M1 Adds (k + 1)/2^k to 4 − (k + 2)/2^(k−1)",
     "M1 Combines: 4 − (2k + 4 − k − 1)/2^k",
     "A1 = 4 − ((k + 1) + 2)/2^k, the n = k + 1 form",
     "A1 Full inductive conclusion (depends on all previous marks)"
    ]
   },
   "12": {
    "type": "points",
    "points": [
     "B1 z + w is represented by C, so arg(z + w) = α + β (α = angle to OA, β = angle AOC)",
     "M1 Diagonal OC bisects angle BOA, so angle BOC = β",
     "M1 arg z + arg w = α + (α + 2β) = 2(α + β)",
     "A1 arg(z + w) = ½(arg z + arg w) (AG)"
    ]
   },
   "13": {
    "type": "points",
    "points": [
     "M1 Auxiliary equation λ² + 2λ − 3 = 0, λ = −3, 1",
     "A1 CF y = Ae^(−3x) + Beˣ",
     "M1 PI of form Cxeˣ",
     "A1 dy/dx = C(eˣ + xeˣ)",
     "A1 d²y/dx² = C(2eˣ + xeˣ)",
     "M1 Substitutes: 4C = 2, C = ½",
     "A1 y = Ae^(−3x) + Beˣ + ½xeˣ"
    ]
   },
   "15": {
    "type": "points",
    "points": [
     "M1 Determinant of coefficients = −4(−17) − k(−9) + 7(7)",
     "M1 Sets 117 + 9k = 0",
     "A1 k = −13",
     "M1 Eliminates a variable: (1) + 2×(3) gives −7y + 9z = 8",
     "M1 Second 2-variable equation: (3) − 2×(2) gives 7y − 9z = 2 − 2l",
     "A1 2l − 2 = 8 so l = 5"
    ],
    "guidance": "B2 for using linear dependency to find k; M2 for 2×(2) − 3×(3)."
   },
   "1(a)": {
    "type": "points",
    "points": [
     "M1 Sets 1 = A(2r + 1) + B(2r − 1) (or cover-up)",
     "A1 A = ½",
     "A1 B = −½"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1* Writes the sum as ½Σ(1/(2r − 1) − 1/(2r + 1))",
     "M1dep* Shows terms cancelling clearly",
     "A1 ½(1 − 1/(2n + 1))",
     "A1 n/(2n + 1)"
    ],
    "guidance": "SC B3 for a fully correct sum using A = −½, B = ½."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "B1 |z₁| = √8",
     "E1 arg z₁ = 3π/4 with some reasoning"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 |z₁/z₂| = √8/2 = √2",
     "M1 Uses arg(z₁/z₂) = arg z₁ − arg z₂",
     "A1 3π/4 − π/6 = 7π/12",
     "B1 z₁/z₂ = √2(cos(7π/12) + i sin(7π/12))"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 ln(1 + 2x) ≈ 2x − 2x²"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1ft Approximation ln 1.2 ≈ 0.18",
     "M1 % error = 100 × (0.18 − ln 1.2)/ln 1.2",
     "A1 (−)1.27%"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "M1 Validity needs −1 < 2x ≤ 1, i.e. −½ < x ≤ ½ (x = 1 needed here)",
     "A1 Series does not converge at x = 1, so not valid"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Product of roots: −α² = −9/4",
     "A1 α = ±3/2",
     "M1 Sum of roots: β + 1/β = 1",
     "A1 β² − β + 1 = 0, β = (1 ± i√3)/2",
     "A1 Roots ±3/2 and (1 ± i√3)/2"
    ],
    "guidance": "Alternative: expand (x − α)(x + α)(x − β)(x − 1/β) and compare coefficients."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Sum of pairs = 1 − α² (unsimplified expression)",
     "A1 = −5/4 so p = −5",
     "M1 Sum of triples = −α²(β + 1/β) = −9/4",
     "A1 q = 9"
    ],
    "guidance": "Alternative: expand (x² − 9/4)(x² − x + 1) = x⁴ − x³ − (5/4)x² + (9/4)x − 9/4."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Multiplies M by the square's vertices",
     "A1 A′(−1, −2), B′(−1, −1), C′(0, 1) plotted correctly"
    ],
    "guidance": "SC B1 for an unlabelled correct diagram with no working."
   },
   "9(b)(i)": {
    "type": "points",
    "points": [
     "B1 det M = −1"
    ]
   },
   "9(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Area unchanged",
     "B1 Orientation reversed"
    ]
   },
   "9(c)(i)": {
    "type": "points",
    "points": [
     "B1 Reflection in the y-axis",
     "M1 Followed by a shear",
     "A1 Shear with y-axis invariant, (−1, 0) → (−1, −2) (or equivalent, e.g. (1, 0) → (1, 2))"
    ],
    "guidance": "Alternatively shear first (y-axis invariant, (1, 0) → (1, −2)) then reflect in the y-axis."
   },
   "9(c)(ii)": {
    "type": "points",
    "points": [
     "B1 Reflection matrix (−1 0; 0 1)",
     "B1 Shear matrix (1 0; 2 1)",
     "B1 (1 0; 2 1)(−1 0; 0 1) = (−1 0; −2 1), order matching part (i)"
    ],
    "guidance": "For shear first: (−1 0; 0 1)(1 0; −2 1) = (−1 0; −2 1)."
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 z = 1 shown",
     "B1 Other two roots forming an equilateral triangle"
    ]
   },
   "10(b)(i)": {
    "type": "points",
    "points": [
     "B1 |1 + √3 i| = 2",
     "B1 arg(1 + √3 i) = π/3",
     "B1ft z = ∛2 e^(iπ/9)",
     "B1ft ∛2 e^(7iπ/9)",
     "B1ft ∛2 e^(−5iπ/9)"
    ],
    "guidance": "Correct roots in cis form lose one mark only."
   },
   "10(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Rotation through 20° (oe)",
     "B1 Enlargement scale factor ∛2"
    ]
   },
   "10(b)(iii)": {
    "type": "points",
    "points": [
     "M1 Uses sum of a GP, e.g. ∛2 e^(−5iπ/9)(1 − (e^(2iπ/3))³)/(1 − e^(2iπ/3))",
     "A1 Numerator has 1 − e^(2iπ) = 0 so sum is 0"
    ],
    "guidance": "May use cos θ + i sin θ but a factor must be taken out for M1."
   },
   "10(b)(iv)": {
    "type": "points",
    "points": [
     "M1 Imaginary part of sum is zero: sin(π/9) + sin(7π/9) + sin(−5π/9) = 0",
     "A1 sin 20° + sin 140° = −sin(−100°) = sin 100° (AG)"
    ]
   },
   "11(a)(i)": {
    "type": "points",
    "points": [
     "B1 u.v = λ + 8"
    ]
   },
   "11(a)(ii)": {
    "type": "points",
    "points": [
     "B1 One of the i, j, k components correct",
     "B1 u × v = 4i + (2λ − 3)j + (2λ − 1)k"
    ]
   },
   "11(b)(i)": {
    "type": "points",
    "points": [
     "M1 Uses normals 2i + j − 3k and i + 2j − 2k, i.e. λ = 2",
     "M1 cos θ = 10/(√14 √9)",
     "A1 θ = 27.0° (0.472 rad)"
    ]
   },
   "11(b)(ii)": {
    "type": "points",
    "points": [
     "M1 Directions 3i + j − 3k and i + 2j − 2k, so λ = 3",
     "M1 With λ = 3, u × v = 4i + 3j + 5k",
     "A1 Distance = |(4, 3, 5)·(3, −4, 4)|/√50 = 20/(5√2) = 2√2"
    ]
   },
   "14(a)": {
    "type": "points",
    "points": [
     "M1 Writes cos θ + 2 sin θ as R cos(θ − α)",
     "A1 R = √5",
     "M1 tan α = 2",
     "A1 α = 1.107",
     "M1 r = √5 a cos(θ − 1.107) is greatest when the cosine is 1",
     "A1 θ = 1.107 rad",
     "A1 Point (√5 a, 1.107)"
    ],
    "guidance": "Alternative: dr/dθ = a(−sin θ + 2 cos θ) = 0 gives tan θ = 2, θ = 1.107, r = √5 a ≈ 2.24a (2.24 or better)."
   },
   "14(b)(i)": {
    "type": "points",
    "points": [
     "M1 Attempts a Cartesian equation",
     "M1 Multiplies by r: r² = ar cos θ + 2ar sin θ",
     "A1 x² + y² = ax + 2ay",
     "M1 Completes the square: (x − ½a)² + (y − a)² = (5/4)a²",
     "A1 This is a circle",
     "A1 Radius ½√5 a"
    ]
   },
   "14(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Centre (½√5 a, 1.107)"
    ]
   },
   "16(a)": {
    "type": "points",
    "points": [
     "B1 LHS = (e^(2u) + e^(−2u))/2",
     "B1 RHS = 1 + 2((eᵘ − e^(−u))/2)²",
     "B1 = 1 + 2(e^(2u) − 2 + e^(−2u))/4",
     "B1 Simplifies to (e^(2u) + e^(−2u))/2 = LHS"
    ]
   },
   "16(b)": {
    "type": "points",
    "points": [
     "M1 Substitutes x = 2 sinh u, dx = 2 cosh u du",
     "A1 Integral becomes ∫₀^(arsinh 1) 4sinh²u·2cosh u/√(4 + 4sinh²u) du",
     "M1 Uses 1 + sinh²u = cosh²u",
     "A1 ∫₀^(arsinh 1) 4sinh²u du",
     "M1 Uses the identity: ∫(2cosh 2u − 2) du",
     "A1 [sinh 2u − 2u] from 0 to arsinh 1",
     "B1 arsinh 1 = ln(1 + √2)",
     "M1 Writes sinh 2u in exponentials of ln(1 + √2) (or uses 2 sinh u √(1 + sinh²u) = 2√2)",
     "M1 Reaches ½[(1 + √2)² − (1 + √2)⁻²], using (1 + √2)⁻¹ = √2 − 1",
     "A1 ½[(3 + 2√2) − (3 − 2√2)] − 2 ln(1 + √2) = 2√2 − 2 ln(1 + √2) (AG)"
    ],
    "guidance": "Alternative for the last 6 marks: write 4sinh²u = (eᵘ − e^(−u))², integrate to [½e^(2u) − 2u − ½e^(−2u)] and substitute."
   },
   "17(a)(i)": {
    "type": "points",
    "points": [
     "M1 In: at litres, out: bt litres, so volume 1 + (a − b)t",
     "A1 Proportion x/(1 + (a − b)t) (AG)"
    ]
   },
   "17(a)(ii)": {
    "type": "points",
    "points": [
     "M1 dx/dt = a − bx/(1 + (a − b)t) (rate in minus rate out)",
     "A1 Rearranges to the given equation (AG)"
    ]
   },
   "17(b)(i)": {
    "type": "points",
    "points": [
     "M1 dx/dt + ax = a; separates variables ∫1/(1 − x) dx = ∫a dt (or IF e^(at))",
     "A1 −ln(1 − x) = at + c",
     "B1 t = 0, x = 0 gives c = 0",
     "A1 x = 1 − e^(−at)"
    ]
   },
   "17(b)(ii)": {
    "type": "points",
    "points": [
     "M1 ½ = 1 − e^(−a)",
     "A1 a = ln 2 = 0.693 litres/min"
    ]
   },
   "17(c)(i)": {
    "type": "points",
    "points": [
     "B1 At t = 1/a the vessel is empty (volume would be negative beyond)"
    ]
   },
   "17(c)(ii)": {
    "type": "points",
    "points": [
     "B1 dx/dt + 2ax/(1 − at) = a",
     "M1 Integrating factor e^(∫2a/(1 − at) dt)",
     "A1 IF = (1 − at)⁻²",
     "M1 d/dt(x(1 − at)⁻²) = a(1 − at)⁻²",
     "A1 x(1 − at)⁻² = (1 − at)⁻¹ + c",
     "M1 t = 0, x = 0 gives c = −1",
     "A1 x = (1 − at) − (1 − at)² = at(1 − at)",
     "M1 dx/dt = a − 2a²t = 0 at t = 1/(2a) (or completing the square)",
     "A1 Maximum x = ½ − ¼ = 0.25 litres"
    ]
   }
  }
 },

 "fmath-ocrb-h645-2019-y420": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "",
    "parts": [
     {
      "code": "1",
      "prompt": "Find Σ_{r=1}^{n} (2r² − 1), giving the result fully factorised.",
      "marks": 4
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Planes x + 2y + cz = 4 and 2x − cy + 6z = 9 are perpendicular (c constant).",
    "parts": [
     {
      "code": "2",
      "prompt": "Find c.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A = (3 1; 2 1), B = (k 1; 2 0), with k a constant.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Verify that (AB)⁻¹ = B⁻¹A⁻¹ for these matrices.",
      "marks": 5
     },
     {
      "code": "3(b)",
      "prompt": "Determine whether A and B commute under multiplication.",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Detailed reasoning required. Fig. 4 (on the question paper) shows the region bounded by y = sec(½x), the x-axis, the y-axis and x = ½π. The region is rotated through 2π about the x-axis.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the exact volume of the solid formed.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "",
    "parts": [
     {
      "code": "5",
      "prompt": "Use the Maclaurin series for cos 2x to show that for small x, sin²x ≈ ax² + bx⁴ + cx⁶, giving a, b, c exactly.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "6",
      "prompt": "Evaluate ∫₂^∞ 1/(4 + x²) dx.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Curve: (x² + y²)² = 2c²xy, c a positive constant.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that its polar equation is r² = c² sin 2θ.",
      "marks": 2
     },
     {
      "code": "7(b)",
      "prompt": "Sketch r = c√(sin 2θ) and r = −c√(sin 2θ) for 0 ≤ θ ≤ ½π.",
      "marks": 3
     },
     {
      "code": "7(c)",
      "prompt": "Find the area enclosed by one loop from part (b).",
      "marks": 3
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Detailed reasoning required. The equation x³ − x² + kx − 2 = 0 has roots α, 1/α and β.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Find the three roots exactly.",
      "marks": 6
     },
     {
      "code": "8(b)",
      "prompt": "Find k.",
      "marks": 2
     }
    ]
   },
   {
    "number": 9,
    "scenario": "",
    "parts": [
     {
      "code": "9",
      "prompt": "Prove by induction that 5ⁿ + 2 × 11ⁿ is divisible by 3 for every positive integer n.",
      "marks": 7
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Given −1 + i is a root of z³ = a + bi (a, b real), find a and b.",
      "marks": 3
     },
     {
      "code": "10(b)",
      "prompt": "Find all roots of this equation in the form re^{iθ}, with r and θ exact.",
      "marks": 4
     },
     {
      "code": "10(c)",
      "prompt": "Chris says complex roots of polynomial equations occur in conjugate pairs. Explain why this fails for the equation in (a).",
      "marks": 1
     }
    ]
   },
   {
    "number": 11,
    "scenario": "M₁ = (3/5 −4/5; 4/5 3/5), M₂ = (1 0; 0 −1).",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Describe fully the transformations given by M₁ and M₂.",
      "marks": 4
     },
     {
      "code": "11(b)",
      "prompt": "R is the reflection given by M₃ = M₁M₂. Find its mirror line.",
      "marks": 5
     },
     {
      "code": "11(c)",
      "prompt": "Someone claims M₄ = M₂M₁ is a reflection in the same line as R. Is this right? Explain.",
      "marks": 3
     }
    ]
   },
   {
    "number": 12,
    "scenario": "Lines L₁: x/2 = y/3 = z/1; L₂: x/1 = y/2 = z/(−4); L₃: (x − 1)/1 = (y − 2)/1 = (z + 4)/5. They meet in pairs.",
    "parts": [
     {
      "code": "12",
      "prompt": "Find the area of the triangle formed by the three lines.",
      "marks": 9
     }
    ]
   },
   {
    "number": 13,
    "scenario": "",
    "parts": [
     {
      "code": "13(a)",
      "prompt": "Using the log form of arcosh x, prove d/dx(arcosh x) = 1/√(x² − 1).",
      "marks": 5
     },
     {
      "code": "13(b)",
      "prompt": "Hence find ∫₁² arcosh x dx exactly in log form.",
      "marks": 5
     },
     {
      "code": "13(c)",
      "prompt": "A calculator gives an error for ∫₀¹ arcosh x dx. Explain why.",
      "marks": 1
     }
    ]
   },
   {
    "number": 14,
    "scenario": "Planes: −x + ay = 2; 2x + 3y + z = −3; x + by + z = c (a, b, c constants).",
    "parts": [
     {
      "code": "14(a)(i)",
      "prompt": "If the planes do not meet at a unique point, find b in terms of a.",
      "marks": 4
     },
     {
      "code": "14(a)(ii)",
      "prompt": "Find c so that the planes form a sheaf.",
      "marks": 3
     },
     {
      "code": "14(b)",
      "prompt": "With b = a and c = 1, find the intersection point in terms of a.",
      "marks": 6
     }
    ]
   },
   {
    "number": 15,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "15",
      "prompt": "Show that ∫_{3/4}^{3/2} 1/√(4x² − 4x + 2) dx = ½ ln((3 + √5)/2).",
      "marks": 8
     }
    ]
   },
   {
    "number": 16,
    "scenario": "Series: C = ½cos θ + ¼cos 2θ + ⅛cos 3θ + … + (1/2ⁿ)cos nθ; S = ½sin θ + ¼sin 2θ + … + (1/2ⁿ)sin nθ.",
    "parts": [
     {
      "code": "16(a)",
      "prompt": "Show that (2 − e^{iθ})(2 − e^{−iθ}) = 5 − 4cos θ.",
      "marks": 3
     },
     {
      "code": "16(b)",
      "prompt": "Show that C = [2ⁿ(2cos θ − 1) − 2cos(n + 1)θ + cos nθ] / [2ⁿ(5 − 4cos θ)].",
      "marks": 9
     }
    ]
   },
   {
    "number": 17,
    "scenario": "A cyclist (total mass m kg) starts from rest, accelerates for 5 s, then brakes for 5 s and stops at t = 10. Velocity v m s⁻¹ at time t s (0 ≤ t ≤ 10). Resistance of 0.1mv N acts throughout. When braking (5 ≤ t ≤ 10) there is an extra constant resistance 2m N and no driving force. When accelerating (0 ≤ t ≤ 5) the driving force is proportional to t.",
    "parts": [
     {
      "code": "17(a)",
      "prompt": "Why is this resistance model more realistic than a constant force?",
      "marks": 1
     },
     {
      "code": "17(b)",
      "prompt": "Show that dv/dt + 0.1v = −2 for 5 ≤ t ≤ 10.",
      "marks": 1
     },
     {
      "code": "17(c)(i)",
      "prompt": "Solve the differential equation from (b).",
      "marks": 5
     },
     {
      "code": "17(c)(ii)",
      "prompt": "Hence find v at t = 5.",
      "marks": 1
     },
     {
      "code": "17(d)",
      "prompt": "Show that dv/dt + 0.1v = λt for 0 ≤ t ≤ 5, λ a positive constant.",
      "marks": 1
     },
     {
      "code": "17(e)(i)",
      "prompt": "Show by integration that v = 10λ(t − 10 + 10e^{−0.1t}) for 0 ≤ t ≤ 5.",
      "marks": 5
     },
     {
      "code": "17(e)(ii)",
      "prompt": "Hence find λ.",
      "marks": 2
     },
     {
      "code": "17(f)",
      "prompt": "Find the total distance travelled, to the nearest metre.",
      "marks": 6
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "B1 Uses standard result: (1/3)n(n+1)(2n+1) for Σ2r²",
     "B1 Subtracts n",
     "B1 Takes out the factor n correctly: (1/3)n(2n² + 3n − 2)",
     "B1cao (1/3)n(2n − 1)(n + 2)"
    ],
    "guidance": "Equivalent forms such as (2/6)n(2n − 1)(n + 2) are accepted."
   },
   "2": {
    "type": "points",
    "points": [
     "M1 Scalar product of normals set to 0: (i + 2j + ck)·(2i − cj + 6k) = 0",
     "A1 2 − 2c + 6c = 0",
     "A1 c = −½"
    ]
   },
   "4": {
    "type": "points",
    "points": [
     "B1 V = ∫₀^{π/2} π sec²(½x) dx, correct integral and limits",
     "B1 Integrates to π[2tan(½x)]",
     "B1cao V = π(2tan(¼π) − 0) = 2π"
    ],
    "guidance": "Missing π is condoned for the second B1; an unsupported answer scores B0."
   },
   "5": {
    "type": "points",
    "points": [
     "M1 Writes cos 2x = 1 − (2x)²/2! + (2x)⁴/4! − (2x)⁶/6! + … (at least 3 terms right)",
     "A1 cos 2x = 1 − 2x² + (2/3)x⁴ − (4/45)x⁶ + …",
     "M1 Uses sin²x = ½(1 − cos 2x)",
     "A2,1,0 sin²x ≈ x² − (1/3)x⁴ + (2/45)x⁶, so a = 1, b = −1/3, c = 2/45"
    ],
    "guidance": "Unsimplified fractions are allowed for the first A1; a good first-principles attempt is also accepted."
   },
   "6": {
    "type": "points",
    "points": [
     "B1 Integral is [½ arctan(x/2)]",
     "B2 As x → ∞, arctan(½x) → ½π (B1 for ½π alone)",
     "B1 I = π/8"
    ],
    "guidance": "0.393 or better earns the final B1 if unsupported."
   },
   "9": {
    "type": "points",
    "points": [
     "B1* n = 1: 5 + 22 = 27, divisible by 3",
     "M1 Assumes u_k = 5ᵏ + 2 × 11ᵏ divisible by 3 (e.g. = 3m)",
     "M1 Writes u_{k+1} = 5^{k+1} + 2 × 11^{k+1}",
     "M1 Substitutes for 5ᵏ: u_{k+1} = 5(u_k − 2 × 11ᵏ) + 22 × 11ᵏ",
     "A1 = 5u_k + 12 × 11ᵏ",
     "A1* Hence u_{k+1} divisible by 3",
     "A1dep Full conclusion: true for n = 1 and k ⇒ k + 1, so true for all positive n"
    ],
    "guidance": "Alternatives for the last M1 A1: u_{k+1} = 11u_k − 6 × 5ᵏ, or u_{k+1} + u_k = 6 × 5ᵏ + 24 × 11ᵏ. The final A1 depends on the starred marks."
   },
   "12": {
    "type": "points",
    "points": [
     "M1 Attempts to solve a pair, e.g. L₁ and L₃: λ = −4 + 5ν, then −8 + 10ν = 1 + ν",
     "B1 ν = 1, λ = 1: L₁ and L₃ meet at (2, 3, 1)",
     "B1 L₂ and L₃ meet at (1, 2, −4)",
     "B1 L₁ and L₂ meet at the origin",
     "M1 Angle via cos θ = (2i + 3j + k)·(i + 2j − 4k)/(√14 √21) or cosine rule",
     "A1 cos θ = 4/(√14 √21)",
     "A1 θ = 76.5° (1.335 rad); other angles 59.0°, 44.4°",
     "M1 Area = ½√14 √21 sin 76.5°",
     "A1 Area = 8.34 (√278/2)"
    ],
    "guidance": "Cross-product route: (2i + 3j + k) × (i + 2j − 4k) = −14i + 9j + k (M1 A1), area = ½√(14² + 9² + 1²) = ½√278 = 8.34 (M1 A2). Sides are √14, √21, √27."
   },
   "15": {
    "type": "points",
    "points": [
     "M1 Completes the square: √((2x − 1)² + 1)",
     "M1 Integral involves arsinh(2x − 1)",
     "A1 [½ arsinh(2x − 1)] (or log form)",
     "M1 Uses arsinh x = ln(x + √(x² + 1))",
     "A1 ½[ln(2 + √5) − ln(½ + √5/2)]",
     "M1 Combines logs: ½ ln(2(√5 + 2)/(√5 + 1))",
     "M1 Rationalises the denominator (must be seen)",
     "A1cao ½ ln((√5 + 3)/2) (answer given)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "B1 AB = (3k+2 3; 2k+2 2)",
     "B1ft (AB)⁻¹ = −½(2 −3; −2k−2 3k+2) (follow through their AB if det ≠ 0)",
     "B1 A⁻¹ = (1 −1; −2 3)",
     "B1 B⁻¹ = −½(0 −1; −2 k)",
     "B1 B⁻¹A⁻¹ = −½(2 −3; −2k−2 3k+2), matching (AB)⁻¹"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 BA = (3k+2 k+1; 6 2)",
     "B1 AB = BA only when k = 2"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes x = r cos θ, y = r sin θ, x² + y² = r²: (r²)² = 2c²r cos θ r sin θ",
     "A1 r² = 2c² cos θ sin θ = c² sin 2θ (answer given)"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 One loop drawn (first quadrant)",
     "B1* Both loops shown with nothing extra",
     "B1dep Negative-r loop in the third quadrant drawn broken/distinguished"
    ],
    "guidance": "Separate diagrams are allowed."
   },
   "7(c)": {
    "type": "points",
    "points": [
     "B1 A = ∫₀^{π/2} ½c² sin 2θ dθ",
     "B1 Integrates to [−¼c² cos 2θ]",
     "B1cao A = ½c²"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Product of roots: α·(1/α)·β = 2",
     "A1 β = 2",
     "M1 Sum of roots: α + 1/α + β = 1",
     "A1 α² + α + 1 = 0 (or equivalent quadratic)",
     "M1 Solves the quadratic: α = (−1 ± √−3)/2",
     "A1 Roots 2, −½ + (√3/2)i, −½ − (√3/2)i"
    ],
    "guidance": "Alternative: factorise as (x − 2)(x² + x + 1) = 0 for M1 A1."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 k = sum of products in pairs: α·(1/α) + αβ + β/α",
     "A1 k = 1 + 2(α + 1/α) = 1 − 2 = −1"
    ],
    "guidance": "Direct substitution or the factor theorem also works."
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 Expands (−1 + i)³ = (−1)³ + 3(−1)²i + 3(−1)i² + i³",
     "A1 Correct expansion",
     "A1 = 2 + 2i, so a = 2, b = 2"
    ],
    "guidance": "Alternative: −1 + i = √2 e^{3iπ/4}, cube to 2√2 e^{9iπ/4} = 2 + 2i (B1 M1 A1)."
   },
   "10(b)": {
    "type": "points",
    "points": [
     "B1 Three roots each of modulus √2",
     "B1 √2 e^{iπ/12}",
     "B1 √2 e^{3iπ/4}",
     "B1 √2 e^{−7iπ/12}"
    ],
    "guidance": "Equivalent arguments in 0 < θ < 2π, e.g. √2 e^{17iπ/12}, are accepted; modulus may be written 8^{1/6}."
   },
   "10(c)": {
    "type": "points",
    "points": [
     "B1 The result only holds when the polynomial has real coefficients, which this does not"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1 M₁ is a rotation",
     "A1 Angle cos⁻¹(3/5) = 53.1° (0.927 rad)",
     "A1 Anticlockwise about O",
     "B1 M₂ is reflection in the x-axis"
    ]
   },
   "11(b)": {
    "type": "points",
    "points": [
     "B1 M₃ = (3/5 4/5; 4/5 −3/5)",
     "M1 Seeks invariant points: M₃(x, y)ᵀ = (x, y)ᵀ",
     "A2 (3/5)x + (4/5)y = x and (4/5)x − (3/5)y = y (either or both)",
     "A1 y = ½x is the mirror line"
    ],
    "guidance": "Alternatively use an invariant line y = mx: 2m² + 3m − 2 = 0 gives m = ½ or −2. Or match to the reflection matrix form to get 2m² − 5m + 2 = 0 and discard m = 2."
   },
   "11(c)": {
    "type": "points",
    "points": [
     "B1 M₄ = (3/5 −4/5; −4/5 −3/5)",
     "M1 Notes M₄ ≠ M₃ (or finds its mirror line)",
     "A1 So the lines differ (M₄ mirror line is y = −½x); the claim is wrong"
    ]
   },
   "13(a)": {
    "type": "points",
    "points": [
     "M1 y = ln(x + √(x² − 1)) and d/du(ln u) = 1/u",
     "M1 Chain rule on √(x² − 1)",
     "A1 dy/dx = (1 + x(x² − 1)^{−1/2}) / (x + (x² − 1)^{1/2})",
     "A1 = ((x² − 1)^{1/2} + x) / ((x + (x² − 1)^{1/2})(x² − 1)^{1/2})",
     "A1cao = 1/(x² − 1)^{1/2} (answer given)"
    ],
    "guidance": "Alternatively start from eʸ = x + √(x² − 1) and differentiate implicitly."
   },
   "13(b)": {
    "type": "points",
    "points": [
     "M1 Integration by parts with u = arcosh x, v′ = 1",
     "A1 [x arcosh x] − ∫ x/√(x² − 1) dx",
     "M1 Integrates x/√(x² − 1) by substitution or inspection",
     "A1 [x arcosh x − √(x² − 1)]",
     "A1cao 2 arcosh 2 − arcosh 1 − √3 = 2ln(2 + √3) − √3"
    ],
    "guidance": "Equivalent forms e.g. ln(7 + 4√3) − √3; do not leave ln 1. Alternative: x = cosh u, ∫u sinh u du = [u cosh u − sinh u] (M1 M1 A1 A1 A1)."
   },
   "13(c)": {
    "type": "points",
    "points": [
     "B1 arcosh x is undefined for x < 1 (√(x² − 1) is not real there)"
    ]
   },
   "14(a)(i)": {
    "type": "points",
    "points": [
     "M1 Coefficient matrix M = (−1 a 0; 2 3 1; 1 b 1)",
     "B1 det M = b − 3 − a",
     "M1 Sets det M = 0",
     "A1 b = a + 3"
    ]
   },
   "14(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Reduces to two equations in two unknowns (one with c): x = ay − 2 gives (2a + 3)y + z = 1 and (a + b)y + z = c + 2",
     "M1 Uses b = a + 3 to find c for consistency: (2a + 3)y + z = c + 2",
     "A1cao c = −1"
    ]
   },
   "14(b)": {
    "type": "points",
    "points": [
     "M1 Attempts M⁻¹",
     "A2 M⁻¹ = −(1/3)(3−a −a a; −1 −1 1; 2a−3 2a −3−2a) (A1 for any 6 entries right)",
     "M1 Multiplies by 1/their det",
     "M1 M⁻¹(2, −3, 1)ᵀ = −(1/3)(6 + 2a, 2, −4a − 9)ᵀ",
     "A1cao Point (−(6 + 2a)/3, −2/3, (4a + 9)/3)"
    ],
    "guidance": "Alternative by elimination: z = −2x − 1, y = (2 + x)/a, substitute into third equation (M1 M1 M1 A3)."
   },
   "16(a)": {
    "type": "points",
    "points": [
     "M1 Expands using e^{iθ}e^{−iθ} = 1: 4 − 2(e^{iθ} + e^{−iθ}) + 1",
     "M1 Uses e^{iθ} + e^{−iθ} = 2cos θ",
     "A1 = 5 − 4cos θ (answer given)"
    ],
    "guidance": "The scheme prints the middle line as \"5 − 2.2cosθ\", meaning 5 − 2 × 2cos θ."
   },
   "16(b)": {
    "type": "points",
    "points": [
     "M1 Forms C + iS = ½e^{iθ} + ¼e^{2iθ} + … (at least 2 terms)",
     "A1 Correct, with nth term (1/2ⁿ)e^{inθ}",
     "M1 Sums the GP (S∞ condoned)",
     "A1 ½e^{iθ}(1 − (½e^{iθ})ⁿ)/(1 − ½e^{iθ})",
     "M1 Multiplies top and bottom by the conjugate (2 − e^{−iθ})",
     "M1 Expands brackets (one slip allowed, not with S∞)",
     "A1 e^{iθ}(2 − (1/2^{n−1})e^{inθ} − e^{−iθ} + (1/2ⁿ)e^{(n−1)iθ})/(5 − 4cos θ)",
     "M1 Takes the real part of (2^{n+1}e^{iθ} − 2e^{(n+1)iθ} − 2ⁿ + e^{inθ})/(2ⁿ(5 − 4cos θ)) (not on S∞)",
     "A1cao Given result, with subsidiary denominators cleared"
    ],
    "guidance": "Alternative: write each cosine via (e^{ikθ} + e^{−ikθ})/2, sum two GPs, combine and expand (M1 M1 A1 M1 A1 M1 A1 M1 A1)."
   },
   "17(a)": {
    "type": "points",
    "points": [
     "B1 Resistance probably increases with speed"
    ],
    "guidance": "'Proportional to' or 'varies with' velocity also accepted."
   },
   "17(b)": {
    "type": "points",
    "points": [
     "B1 N2L: m dv/dt = −2m − 0.1mv, giving dv/dt + 0.1v = −2"
    ]
   },
   "17(c)(i)": {
    "type": "points",
    "points": [
     "M1 Integrating factor e^{0.1t}",
     "M1 d/dt(v e^{0.1t}) = −2e^{0.1t}",
     "A1 v e^{0.1t} = −20e^{0.1t} + c",
     "M1 Uses t = 10, v = 0: c = 20e",
     "A1cao v = 20(e^{1−0.1t} − 1)"
    ],
    "guidance": "Also 54.4e^{−0.1t} − 20. Alternatives: separate variables (10 ln(2 + 0.1v) = −t + c), or CF Ae^{−0.1t} + PI −20 with t = 10, v = 0 giving A = 20e. The scheme's CF/PI alternative prints the condition as \"t = 0, v = 10\"; it means t = 10, v = 0 (as its own note says), giving 0 = Ae⁻¹ − 20."
   },
   "17(c)(ii)": {
    "type": "points",
    "points": [
     "B1 v = 20(e^{0.5} − 1) = 12.97 m s⁻¹ (13 or better)"
    ]
   },
   "17(d)": {
    "type": "points",
    "points": [
     "B1 N2L: m dv/dt = ct − 0.1mv, so dv/dt + 0.1v = λt with λ = c/m"
    ]
   },
   "17(e)(i)": {
    "type": "points",
    "points": [
     "M1 d/dt(v e^{0.1t}) = λt e^{0.1t}",
     "M1 Integrates by parts: 10λt e^{0.1t} − ∫10λ e^{0.1t} dt",
     "A1 v e^{0.1t} = 10λt e^{0.1t} − 100λ e^{0.1t} + c",
     "M1 Uses t = 0, v = 0: c = 100λ",
     "A1 v = 10λ(t − 10 + 10e^{−0.1t}) (answer given)"
    ],
    "guidance": "Alternative: CF Ae^{−0.1t}, PI Ct + D with C = 10λ, D = −100λ, then A = 100λ."
   },
   "17(e)(ii)": {
    "type": "points",
    "points": [
     "M1 At t = 5 equates: 20(e^{0.5} − 1) = 10λ(10e^{−0.5} − 5)",
     "A1 λ = 1.218 (1.2 or better)"
    ]
   },
   "17(f)": {
    "type": "points",
    "points": [
     "M1 s₁ = ∫₀⁵ 10λ(t − 10 + 10e^{−0.1t}) dt",
     "B1 10λ[½t² − 10t − 100e^{−0.1t}]",
     "A1 s₁ = 12.18(12.5 + 50 − 100e^{−0.5}) = 22.49 m (art 22.5)",
     "M1 s₂ = ∫₅¹⁰ 20(e^{1−0.1t} − 1) dt",
     "A1 s₂ = 20[−10e^{1−0.1t} − t]₅¹⁰ = 20(−15 + 10e^{0.5}) = 29.74 m (29.7)",
     "A1cao Total distance 52 m"
    ],
    "guidance": "Here 12.5 + 50 comes from (12.5 − 50 − 100e^{−0.5}) − (−100), i.e. the t = 0 limit already included. s₂ uses the (c)(i) solution; each A1 is soi."
   }
  }
 },

 "fmath-ocr-h245-2019-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Detailed reasoning required. Series with general term 1/(r² + 3r + 2).",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Use partial fractions to show that Σ_{r=1}^{n} 1/(r² + 3r + 2) = ½ − 1/(n + 2).",
      "marks": 5
     },
     {
      "code": "1(b)",
      "prompt": "Using (a), find Σ_{r=1}^{∞} 1/(r² + 3r + 2).",
      "marks": 2
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Plane Π: r·(3, 6, −2)ᵀ = 15; point C(4, −5, 1). Lines l₁: r = (4, 3, 1)ᵀ + λ(−2, 4, −2)ᵀ and l₂: r = (5, 2, 4)ᵀ + μ(1, −2, 1)ᵀ.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Find the shortest distance from C to Π.",
      "marks": 3
     },
     {
      "code": "2(b)",
      "prompt": "Find the exact distance between l₁ and l₂.",
      "marks": 5
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Detailed reasoning required. Improper integral.",
    "parts": [
     {
      "code": "3",
      "prompt": "Show that ∫_{5}^{∞} (x − 1)^(−3/2) dx = 1.",
      "marks": 5
     }
    ]
   },
   {
    "number": 4,
    "scenario": "T is a 2-D shear with the y-axis invariant, mapping (2, 1) to (2, 9); A is its matrix.",
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find A.",
      "marks": 3
     },
     {
      "code": "4(b)",
      "prompt": "Use det A to explain why T preserves area.",
      "marks": 2
     }
    ]
   },
   {
    "number": 5,
    "scenario": "A 2 kg particle moves on the x-axis with velocity v m s⁻¹ at time t s. Forces: ½t N in the positive x-direction and v N in the negative x-direction. It starts from rest at t = 0. At t = 2 the positive force is replaced by a constant ½ N in the same direction.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that dv/dt + ½v = ¼t models the motion.",
      "marks": 1
     },
     {
      "code": "5(b)",
      "prompt": "Find v in terms of t.",
      "marks": 5
     },
     {
      "code": "5(c)",
      "prompt": "Find the velocity at t = 2.",
      "marks": 1
     },
     {
      "code": "5(d)",
      "prompt": "Adapt the differential equation of (a) to model the motion for t ≥ 2.",
      "marks": 1
     },
     {
      "code": "5(e)",
      "prompt": "Using the model from (d), find an exact expression for v for t ≥ 2.",
      "marks": 3
     }
    ]
   },
   {
    "number": 6,
    "scenario": "On a smooth horizontal surface, particle P is released from rest at fixed point A and moves with SHM in a line. It is next at rest 0.2 s later at B, 0.2 m from A. M is the midpoint of AB; x m is P's displacement from M at time t s after release.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Sketch x against t for 0 ≤ t ≤ 0.4.",
      "marks": 4
     },
     {
      "code": "6(b)",
      "prompt": "Find P's displacement from M 0.75 s after release.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "On an Argand diagram, 2 + 3i and 1 − i are adjacent vertices of a square S.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find the area of S.",
      "marks": 3
     },
     {
      "code": "7(b)",
      "prompt": "Find every possible pair of complex numbers for the other two vertices.",
      "marks": 4
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Express sin θ using e^(iθ) and e^(−iθ) to show that sin⁶θ = (1/32)(10 − 15cos 2θ + 6cos 4θ − cos 6θ).",
      "marks": 5
     },
     {
      "code": "8(b)",
      "prompt": "Deduce that sin(π/8) = ½ ⁶√(20 − 14√2).",
      "marks": 3
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Detailed reasoning required. Polar curve r = √(sin θ) e^(⅓cos θ), 0 ≤ θ ≤ π (diagram on the question paper: a single closed loop above the initial line, starting and ending at the pole O).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find the exact area enclosed by the curve.",
      "marks": 4
     },
     {
      "code": "9(b)",
      "prompt": "Show that the maximum value of r is √(√3/2) e^(1/6).",
      "marks": 7
     }
    ]
   },
   {
    "number": 10,
    "scenario": "f(x) = ln(½ + cos x).",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "By differentiating, find the first two non-zero terms of the Maclaurin series of ln(½ + cos x).",
      "marks": 4
     },
     {
      "code": "10(b)",
      "prompt": "Use the root of ln(½ + cos x) = 0 to deduce that π ≈ 3√(3 ln(3/2)).",
      "marks": 3
     }
    ]
   }
  ],
  "markSchemes": {
   "3": {
    "type": "points",
    "points": [
     "B1 ∫(x − 1)^(−3/2) dx = −2(x − 1)^(−1/2)",
     "M1 Uses a finite upper limit N",
     "A1 −2/√(N − 1) + 2/√(5 − 1)",
     "B1 States lim_{N→∞} 1/√(N − 1) = 0 (not just 1/∞ = 0)",
     "A1 Integral = lim(…) = 1 with a convincing argument (AG)"
    ]
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 Factorises the denominator as (r + 1)(r + 2) (soi)",
     "M1 Partial-fraction form A/(r + 1) + B/(r + 2) (soi by correct answer)",
     "A1 A = 1, B = −1",
     "M1 Writes out terms ½ − ⅓ + ⅓ − ¼ + … + 1/(n + 1) − 1/(n + 2)",
     "A1 = ½ − 1/(n + 2) with cancellation evident (AG)"
    ],
    "guidance": "For the second M1, omitting the +¼ and −1/(n + 1) terms is condoned."
   },
   "1(b)": {
    "type": "points",
    "points": [
     "B1 Sum to infinity = ½",
     "B1 Because 1/(n + 2) → 0 as n → ∞"
    ],
    "guidance": "Must indicate 1/(n + 2) is close to zero (\"small\") for large n."
   },
   "2(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes into the point–plane distance formula |(4, −5, 1)·(3, 6, −2) − 15| / |(3, 6, −2)|",
     "M1 Evaluates |(3, 6, −2)| = √(3² + 6² + 2²) = 7 or the scalar product (soi)",
     "A1 Distance = 5"
    ],
    "guidance": "Or substitute (4, −5, 1) + λ(3, 6, −2) into the plane to find λ."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Vector between points on the two lines, e.g. (5, 2, 4) − (4, 3, 1) = (1, −1, 3)",
     "*M1 Scalar product with direction (1, −2, 1) to find cos θ: 6 = √11√6 cos θ",
     "A1 cos θ = ±6/√66 (or θ ≈ 0.740 rad / 42.4°)",
     "dep*M1 d = |r| sin θ = |r|√(1 − cos²θ)",
     "A1 d = √5"
    ],
    "guidance": "The lines are parallel; ignore attempts to use the skew-lines formula. Alternatives: foot of perpendicular at μ = −1, point (4, 4, 3); minimise √(6μ² + 12μ + 11); or |(1, −1, 3) × (1, −2, 1)| / |(1, −2, 1)| = √30/√6."
   },
   "4(a)": {
    "type": "points",
    "points": [
     "B1 Form A = (1 0; k 1)",
     "M1 Applies their A to (2, 1)ᵀ and equates to (2, 9)ᵀ: 2k + 1 = 9",
     "A1 k = 4, A = (1 0; 4 1)"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "B1 det A = 1",
     "B1 Determinant is the area scale factor, so a value of 1 leaves area unchanged"
    ],
    "guidance": "Both ideas needed for the explanation."
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1 F = ma: ½t − v = 2 dv/dt, so dv/dt + ½v = ¼t (AG)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1 Integrating factor e^(t/2)",
     "M1 Multiplies through and writes LHS as d/dt(v e^(t/2)) = ¼t e^(t/2)",
     "A1 v e^(t/2) = ½t e^(t/2) − e^(t/2) + c",
     "M1 Uses v = 0 at t = 0: c = 1",
     "A1 v = ½t − 1 + e^(−t/2)"
    ],
    "guidance": "Alternative: CF Ae^(−t/2), PI at + b with a = ½, b = −1, then A = 1."
   },
   "5(c)": {
    "type": "points",
    "points": [
     "B1 v = e⁻¹ m s⁻¹ (awrt 0.368)"
    ]
   },
   "5(d)": {
    "type": "points",
    "points": [
     "B1 Right-hand side becomes ¼: dv/dt + ½v = ¼ (oe)"
    ]
   },
   "5(e)": {
    "type": "points",
    "points": [
     "B1 v e^(t/2) = ½e^(t/2) + c (oe)",
     "M1 Uses v = e⁻¹ at t = 2: c = 1 − ½e",
     "A1 v = ½ + (1 − ½e)e^(−t/2)"
    ],
    "guidance": "SC1 for v e^(t/2) = (α/2)e^(t/2) + c. Separating variables to −ln(1 − 2v) = ½t + c′ with c′ = 1 + ln(1 − 2e⁻¹) is also valid."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 At least one cycle of a cosine-type graph (x = −0.1 at t = 0)",
     "B1 Amplitude 0.1",
     "B1 Period 0.4",
     "B1 Crosses the t-axis at 0.1 and 0.3 (indicated)"
    ],
    "guidance": "Graph must be flat at the turning points and continuous; a non-inverted cos graph can still get 4/4. Ignore anything outside [0, 0.4]."
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 x = ±0.1cos(5πt) (or 0.1sin(5πt ± ½π)) at t = 0.75 or 0.35",
     "A1 x = −√2/20 ≈ −0.0707"
    ],
    "guidance": "Amplitude 0.2 condoned for M1; argument from the sketch also acceptable."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 Side vector (2 + 3i) − (1 − i) = ±(1 + 4i) (soi)",
     "M1 |1 + 4i|² = 1² + 4², or squares their side",
     "A1 Area = 17"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "*M1 Multiplies the side by ±i to get a perpendicular side, ±(4 − i)",
     "dep*M1 Finds both pairs: (2 + 3i) ± i(1 + 4i) and (1 − i) ± i(1 + 4i)",
     "A1 Vertices −3 and −2 + 4i",
     "A1 Or 5 − 2i and 6 + 2i (both clearly paired, in complex form)"
    ],
    "guidance": "If M1 M0 A0 A0, SC1 for any two correct vertices. Vector methods also fine."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "*B1 sin θ = (e^(iθ) − e^(−iθ))/(2i)",
     "M1 Raises to the sixth power with (2i)⁶ = −64",
     "M1 Binomial expansion: e^(6iθ) − 6e^(4iθ) + 15e^(2iθ) − 20 + 15e^(−2iθ) − 6e^(−4iθ) + e^(−6iθ)",
     "M1 Pairs terms using e^(iφ) + e^(−iφ) = 2cos φ",
     "dep*A1 −(1/64)(2cos 6θ − 12cos 4θ + 30cos 2θ − 20) = (1/32)(10 − 15cos 2θ + 6cos 4θ − cos 6θ) (AG)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "*M1 Uses θ = π/8 and evaluates a cosine, e.g. cos 2θ = √2/2",
     "dep*M1 Substitutes all cosines: sin⁶(π/8) = (1/32)(10 − 15√2/2 − (−√2/2) + 6·0)",
     "A1 sin(π/8) = ⁶√((1/64)(20 − 14√2)) = ½ ⁶√(20 − 14√2) (AG)"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 Area = ½∫ r² dθ in terms of θ",
     "*A1 ½∫_0^π sin θ e^(⅔cos θ) dθ (squared out, with limits)",
     "dep*M1 Integrates: −(1/2)(3/2)[e^(⅔cos θ)]_0^π",
     "A1 (3/4)(e^(2/3) − e^(−2/3))"
    ],
    "guidance": "M1 can be implied by 1.0757…"
   },
   "9(b)": {
    "type": "points",
    "points": [
     "*M1 Differentiates with product and chain rules",
     "A1 dr/dθ = (1/6)(sin θ)^(−1/2) e^(⅓cos θ)(3cos θ − 2sin²θ)",
     "dep*M1 Sets dr/dθ = 0 giving 3cos θ − 2sin²θ = 0",
     "M1 Uses cos² + sin² = 1: 2cos²θ + 3cos θ − 2 = 0",
     "*A1 cos θ = ½ or −2",
     "dep*A1 Rejects cos θ = −2",
     "A1 sin θ = √3/2, r = √(√3/2) e^(1/6) (AG)"
    ],
    "guidance": "Or a quadratic in sin²θ: 4sin⁴θ + 9sin²θ − 9 = 0, sin²θ = ¾, rejecting −3."
   },
   "10(a)": {
    "type": "points",
    "points": [
     "B1 f(0) = ln(3/2)",
     "M1 f′(x) = −sin x/(½ + cos x), so f′(0) = 0",
     "A1 Second derivative by quotient rule, giving f″(0) = −⅔",
     "A1 ln(½ + cos x) ≈ ln(3/2) − x²/3"
    ],
    "guidance": "SC1 for the correct expansion if nothing else scores."
   },
   "10(b)": {
    "type": "points",
    "points": [
     "B1 Root x = π/3 (or −π/3)",
     "M1 Substitutes into the series and sets ≈ 0: ln(3/2) − (π/3)²/3 ≈ 0",
     "A1 π ≈ √(27 ln(3/2)) = 3√(3 ln(3/2)), using ≈"
    ]
   }
  }
 },

 "fmath-ocr-h245-2021a-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "A = (1 −2 −1; 2 −3 1; a 1 1) and B = (−6 3 −4; −1 6 −4; 8 −8 −1), where a is a constant.",
    "parts": [
     {
      "code": "1",
      "prompt": "Find a such that AB = BA.",
      "marks": 3
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Detailed reasoning required. z₁ = 3 − 7i and z₂ = 2 + 4i.",
    "parts": [
     {
      "code": "2(a)(i)",
      "prompt": "Write 3z₁ + 4z₂ exactly in the form a + bi.",
      "marks": 1
     },
     {
      "code": "2(a)(ii)",
      "prompt": "Write z₁z₂ exactly in the form a + bi.",
      "marks": 2
     },
     {
      "code": "2(a)(iii)",
      "prompt": "Write z₁/z₂ exactly in the form a + bi.",
      "marks": 2
     },
     {
      "code": "2(b)",
      "prompt": "Give z₁ in modulus-argument form, with exact modulus and argument to 3 s.f.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Line l₁: r = (1, −3, 3)ᵀ + λ(3, 2, −2)ᵀ. Plane Π: r · (2, −5, −3)ᵀ = 4. A is the point of l₁ with λ = 1. Line l₂ passes through A, is perpendicular to l₁ and is parallel to Π.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find the position vector of the point where l₁ meets Π.",
      "marks": 3
     },
     {
      "code": "3(b)",
      "prompt": "Find the acute angle between l₁ and Π.",
      "marks": 3
     },
     {
      "code": "3(c)",
      "prompt": "Find a vector equation of l₂.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the value of Σ_{r=1}^{100} (2r + 3)².",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "From the exponential definition of cosh x, prove cosh 2x ≡ 2cosh²x − 1.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Solve cosh 2x = 3 cosh x + 1, giving every answer in exact logarithmic form.",
      "marks": 6
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Detailed reasoning required. A = (1 2; 0 1). B = (7 2; 21 7) represents, in this order: a shear fixing the y-axis that sends (1, 1) to (1, 4); then the transformation given by A; then a stretch of scale factor p with the x-axis invariant.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Describe the transformation represented by A.",
      "marks": 1
     },
     {
      "code": "6(b)",
      "prompt": "Show that A preserves the area of any shape.",
      "marks": 1
     },
     {
      "code": "6(c)",
      "prompt": "Find p.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Detailed reasoning required. Consider (x³ + x² + 9x − 1)/(x³ + x² + 4x + 4).",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find A, B, C such that the fraction ≡ A + (Bx + C)/(x³ + x² + 4x + 4).",
      "marks": 1
     },
     {
      "code": "7(b)",
      "prompt": "Hence write the fraction in partial fractions.",
      "marks": 5
     },
     {
      "code": "7(c)",
      "prompt": "Using (b), find ∫₀² of the fraction dx in the form a + ln b + cπ, with a an integer and b, c rational.",
      "marks": 4
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A 2 kg particle P moves only along a segment OA of length 0.9 m on a rough horizontal surface, starting from rest at O. At time t s its displacement from O is x m and velocity v m s⁻¹. A force 4e⁻²ᵗ N acts towards A for t ≥ 0, and resistance is modelled as proportional to v. When t = ln 2, v = 0.5 and the resultant force is 0 N.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Show that the model gives dv/dt + v = 2e⁻²ᵗ.",
      "marks": 3
     },
     {
      "code": "8(b)",
      "prompt": "Find v in terms of t for t ≥ 0.",
      "marks": 5
     },
     {
      "code": "8(c)",
      "prompt": "Using the behaviour of v for large t, explain why the speed must reach a maximum at some t > 0.",
      "marks": 2
     },
     {
      "code": "8(d)",
      "prompt": "Find that maximum speed.",
      "marks": 2
     },
     {
      "code": "8(e)",
      "prompt": "Find the largest t for which the model is valid.",
      "marks": 4
     }
    ]
   },
   {
    "number": 9,
    "scenario": "A = (2 3; 0 2).",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Using A, A², A³ and A⁴, conjecture a formula for Aⁿ, n ≥ 1.",
      "marks": 2
     },
     {
      "code": "9(b)",
      "prompt": "Prove your conjecture by induction.",
      "marks": 4
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Use a Maclaurin series to prove that eˣ > 1 + x for x > 0.",
      "marks": 2
     },
     {
      "code": "10(b)",
      "prompt": "Hence, with a suitable substitution, deduce that eᵗ > et for t > 1.",
      "marks": 1
     },
     {
      "code": "10(c)",
      "prompt": "Using (b) with a suitable t, decide which is larger: e^π or π^e.",
      "marks": 3
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "M1 Computes AB = (−12 −1 5; −1 −20 3; 7 − 6a 3a − 2 −4a − 5) or BA = (−4a −1 5; 11 − 4a −20 3; −8 − a 7 −17)",
     "M1 Finds both products and equates a useful entry, e.g. −12 = −4a or 7 − 6a = −8 − a",
     "A1 a = 3"
    ],
    "guidance": "First M1 condones up to 3 errors; A1 not given if either product has more than 3 errors."
   },
   "4": {
    "type": "points",
    "points": [
     "B1 Expands and splits: 4Σr² + 12Σr + 9Σ1",
     "M1 Uses Σr² = (1/6)(100)(101)(201)",
     "A1 1414900"
    ]
   },
   "2(a)(i)": {
    "type": "points",
    "points": [
     "B1 17 − 5i"
    ]
   },
   "2(a)(ii)": {
    "type": "points",
    "points": [
     "M1 Expands using i² = −1 (at least 3 terms correct)",
     "A1 34 − 2i"
    ]
   },
   "2(a)(iii)": {
    "type": "points",
    "points": [
     "M1 Multiplies top and bottom by the conjugate 2 − 4i",
     "A1 −11/10 − (13/10)i"
    ],
    "guidance": "Expansion must be seen; (−11 − 13i)/10 allowed."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Explicit working for √(3² + 7²) or tan⁻¹(−7/3)",
     "A1 |z₁| = √58 or arg z₁ = −1.17 (awrt)",
     "A1 z₁ = √58(cos(−1.17) + i sin(−1.17)) oe"
    ],
    "guidance": "Argument may be 5.12; degrees not condoned; round brackets condoned."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes the line into the plane equation",
     "M1 Expands dot product and solves: 8 + 2λ = 4, λ = −2",
     "A1 Position vector (−5, −7, 7)ᵀ"
    ],
    "guidance": "Coordinates condoned."
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Uses scalar product of (2, −5, −3)ᵀ and (3, 2, −2)ᵀ with moduli: 2/(√38√17) = 2/√646",
     "A1 Angle with normal 85.5° (awrt)",
     "A1 Acute angle with plane 4.51° (awrt)"
    ],
    "guidance": "Radians: 1.49 then 0.0788. May use sin directly or a cross product."
   },
   "3(c)": {
    "type": "points",
    "points": [
     "B1 A = (4, −1, 1)",
     "M1 Direction (3, 2, −2)ᵀ × (2, −5, −3)ᵀ = (−16, 5, −19)ᵀ",
     "A1 r = (4, −1, 1)ᵀ + μ(−16, 5, −19)ᵀ oe"
    ],
    "guidance": "Must be written as r = …"
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes cosh x = (eˣ + e⁻ˣ)/2 into the RHS",
     "A1 Simplifies to (e²ˣ + e⁻²ˣ)/2 = cosh 2x, complete proof (AG)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1 Uses (a) to get 2cosh²x − 3cosh x − 2 = 0",
     "M1 Solves the quadratic",
     "A1 cosh x = 2 or −½",
     "A1 Rejects −½ because cosh x ≥ 1",
     "A1 One correct answer, e.g. x = ln(2 + √3)",
     "A1 Both: x = ln(2 ± √3)"
    ],
    "guidance": "Second root may be given as −ln(2 + √3)."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 Shear with x-axis invariant, sending (0, 1) to (2, 1)"
    ],
    "guidance": "Any useful point and its image; not 'scale factor'."
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1 det A = 1 × 1 − 0 × 2 = 1, which is the area scale factor"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1 First shear matrix (1 0; 3 1)",
     "B1 A(1 0; 3 1) = (7 2; 3 1)",
     "M1 Stretch (1 0; 0 p) multiplied with their matrix",
     "A1 (7 2; 3p p) = B gives p = 7"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1 A = 1, B = 5, C = −5"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1 x³ + x² + 4x + 4 = (x + 1)(x² + 4)",
     "M1 (5x − 5)/(…) = D/(x + 1) + (Ex + F)/(x² + 4)",
     "A1 D = −2",
     "A1 F = 3",
     "A1 1 − 2/(x + 1) + (2x + 3)/(x² + 4)"
    ],
    "guidance": "ft for the second and third coefficients."
   },
   "7(c)": {
    "type": "points",
    "points": [
     "*M1 Splits (2x + 3)/(x² + 4) into 2x/(x² + 4) + 3/(x² + 4)",
     "dep*M1 Integrates: x − 2ln(x + 1) + ln(x² + 4) + (3/2)tan⁻¹(x/2)",
     "M1 Substitutes limits exactly: 2 − 2ln 3 + ln 8 + 3π/8 − ln 4",
     "A1 2 + ln(2/9) + (3/8)π"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1 Newton II: 2 dv/dt = 4e⁻²ᵗ − kv",
     "M1 At t = ln 2: 0 = 1 − 0.5k",
     "A1 k = 2, giving dv/dt + v = 2e⁻²ᵗ (AG)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "*B1 Integrating factor eᵗ",
     "*M1 LHS as d/dt(eᵗv) = 2e⁻ᵗ",
     "A1 eᵗv = −2e⁻ᵗ + c",
     "dep*M1 t = 0, v = 0 gives c = 2",
     "A1 v = 2e⁻ᵗ − 2e⁻²ᵗ"
    ],
    "guidance": "CF + PI route allowed: v = Ae⁻ᵗ − 2e⁻²ᵗ."
   },
   "8(c)": {
    "type": "points",
    "points": [
     "M1 As t → ∞, v → 0",
     "A1 Speed starts at 0, ends at 0 and is positive in between, so has a maximum for some t > 0"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 dv/dt = 0 at t = ln 2",
     "A1 v_max = 0.5"
    ]
   },
   "8(e)": {
    "type": "points",
    "points": [
     "M1 Integrates: x = −2e⁻ᵗ + e⁻²ᵗ + d",
     "M1 x = 0 at t = 0 gives d = 1",
     "M1 Model valid only while x ≤ 0.9: 0.9 = −2e⁻ᵗ + e⁻²ᵗ + 1",
     "A1 e⁻ᵗ = (10 − 3√10)/10, t = ln(10/(10 − 3√10)) = 2.97"
    ],
    "guidance": "Rejecting the other root (t < 0) may be implicit."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 A² = (4 12; 0 4), A³ = (8 36; 0 8), A⁴ = (16 96; 0 16)",
     "B1 Aⁿ = (2ⁿ 3n·2ⁿ⁻¹; 0 2ⁿ)"
    ],
    "guidance": "Any conjecture fitting n = 1 to 4."
   },
   "9(b)": {
    "type": "points",
    "points": [
     "B1 True for n = 1",
     "M1 Assumes true for n = k",
     "M1 Aᵏ⁺¹ = AᵏA, expanded using the hypothesis",
     "A1 Obtains (2ᵏ⁺¹ 3(k + 1)2ᵏ; 0 2ᵏ⁺¹) and concludes the induction properly (AG)"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1 Uses eˣ = 1 + x + x²/2! + x³/3! + …",
     "A1 Extra terms positive for x > 0, so eˣ > 1 + x (AG)"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "B1 x = t − 1 gives eᵗ⁻¹ > t, so eᵗ > et (AG)"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "B1 t = π/e > 1, with justification (2 < e < 3, π > 3)",
     "M1 Substitutes: e^(π/e) > π",
     "A1 e^π > π^e"
    ],
    "guidance": "Alternative: t = ln π. Not using (b) scores M0A0."
   }
  }
 },

 "fmath-ocr-h245-2022-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Lines r = 2i + 3j + 3k + λ(i − 2j + k) and r = i + 11j − 4k + μ(−i + 3j − 2k).",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Find a vector perpendicular to both 3i − 5j − k and i + 3j − 4k.",
      "marks": 1
     },
     {
      "code": "1(b)",
      "prompt": "Show that the two lines meet, and give the point of intersection.",
      "marks": 5
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Polar curves C₁: r = 2θ and C₂: r = θ + 1, for 0 ≤ θ ≤ 2π. C₁ meets the initial line at the pole and at a point A. A sketch of C₁ (a spiral from O ending at A on the initial line) is on the question paper.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Write down the polar coordinates of A.",
      "marks": 2
     },
     {
      "code": "2(b)",
      "prompt": "Find the polar coordinates of the point where C₁ and C₂ intersect.",
      "marks": 2
     },
     {
      "code": "2(c)",
      "prompt": "Add a sketch of C₂ to the sketch of C₁.",
      "marks": 1
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Detailed reasoning required. 4x³ + 6x² − 3x + 9 = 0 has roots α, β, γ.",
    "parts": [
     {
      "code": "3",
      "prompt": "Find a cubic equation with integer coefficients whose roots are α + β, β + γ and γ + α.",
      "marks": 6
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the least n for which (1² + 2² + … + n²)/(1 + 2 + … + n) > 341.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Hyperbolic identities and an equation.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Using the exponential definitions of sinh x and cosh x, prove cosh 2x ≡ cosh²x + sinh²x.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Hence express cosh 2x in terms of cosh x.",
      "marks": 1
     },
     {
      "code": "5(c)",
      "prompt": "Solve 5 cosh 2x = 16 cosh x + 21, giving answers in exact logarithmic form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Particle P starts at O and is projected along the x-axis, then oscillates along it. At time t s, displacement x m, velocity v m s⁻¹. Model: ẍ + ω²x = 0, ω rad s⁻¹ a positive constant. P is instantaneously at rest at D, where x = d (d > 0). Define z = 1/v. The model is valid if z_m exceeds 8. d = 0.25 (to 2 s.f.) and ω = 0.75 ± 0.02.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Write down the general solution of the differential equation.",
      "marks": 1
     },
     {
      "code": "6(b)",
      "prompt": "Find x and v in terms of ω, d and t only.",
      "marks": 3
     },
     {
      "code": "6(c)",
      "prompt": "Hence show that v² = ω²(d² − x²).",
      "marks": 1
     },
     {
      "code": "6(d)",
      "prompt": "Using (c), find z_m, the mean value of z with respect to displacement, as P goes from O to D.",
      "marks": 2
     },
     {
      "code": "6(e)",
      "prompt": "What can be inferred about the model's validity from this information?",
      "marks": 1
     },
     {
      "code": "6(f)",
      "prompt": "Find the least possible initial projection speed under the model, to 2 s.f.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "scenario": "a is real. A = (2 4 −6; −3 10−4a 9; 7 4 4). The system 2x + 4y − 6z = 6, −3x + (10 − 4a)y + 9z = −9, 7x + 4y + 4z = 11 is A(x, y, z)ᵀ = (6, −9, 11)ᵀ. T is the transformation given by A; an object of volume |5a − 20| is mapped by T.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Find det A in terms of a.",
      "marks": 2
     },
     {
      "code": "7(b)(i)",
      "prompt": "When A is non-singular, solve the system using A⁻¹.",
      "marks": 5
     },
     {
      "code": "7(b)(ii)",
      "prompt": "When A is singular, describe how the three planes are arranged.",
      "marks": 3
     },
     {
      "code": "7(c)(i)",
      "prompt": "Find the values of a for which T reverses orientation.",
      "marks": 1
     },
     {
      "code": "7(c)(ii)",
      "prompt": "Find the values of a for which the image has smaller volume than the object.",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Detailed reasoning required. Σ_(r=k)^98 (5r + 2)/(r(r + 1)(r + 2)) = 20539/34650 for some k.",
    "parts": [
     {
      "code": "8",
      "prompt": "Find k.",
      "marks": 7
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Show that Re(e^(4iθ)(e^(iθ) + e^(−iθ))⁴) = a cos 4θ cos⁴θ, finding the integer a.",
      "marks": 3
     },
     {
      "code": "9(b)",
      "prompt": "Hence show that cos(π/12) = ½ ∜(b + c√3), finding the integers b and c.",
      "marks": 6
     }
    ]
   },
   {
    "number": 10,
    "scenario": "A = (3, −2, −1), B = (13, 10, 9). Plane Π_A contains A and plane Π_B contains B; they are parallel. Any normal to Π_A has equal x and y components. The shortest distance between the planes is 2. There are two possible planes Π_A.",
    "parts": [
     {
      "code": "10",
      "prompt": "Find the acute angle between the two possible planes Π_A.",
      "marks": 8
     }
    ]
   }
  ],
  "markSchemes": {
   "3": {
    "type": "points",
    "points": [
     "B1 Σα = −3/2, Σαβ = −3/4, αβγ = −9/4",
     "B1 Sum of new roots = 2Σα = −3",
     "M1 Writes the new pair-sum or product in terms of the basic symmetric functions, e.g. (Σα)² + Σαβ or ΣαΣαβ − αβγ",
     "A1 New pair-sum = 9/4 − 3/4 = 3/2",
     "A1 New product = (−3/2)(−3/4) + 9/4 = 27/8",
     "A1 8u³ + 24u² + 12u − 27 = 0"
    ],
    "guidance": "Alternative: substitute x = −3/2 − u into the cubic (B1 B1 M1, then A3 for the fully correct equation, with partial credit for some coefficients)."
   },
   "4": {
    "type": "points",
    "points": [
     "M1 Uses the standard sums: (n(n + 1)(2n + 1)/6)/(n(n + 1)/2)",
     "M1 Cancels to (2n + 1)/3 > 341",
     "A1 n > 511",
     "A1 Least n = 512"
    ],
    "guidance": "Solving an equation rather than the inequality scores M1 M1 A0 A1; using ≥ 342 gets M0."
   },
   "8": {
    "type": "points",
    "points": [
     "M1 Partial fractions of the form A/r + B/(r + 1) + C/(r + 2)",
     "A1 1/r + 3/(r + 1) − 4/(r + 2)",
     "M1 Writes enough terms (start and end) to show the cancellation",
     "A1 Sum = 1/k + 4/(k + 1) − 124/2475",
     "M1 Sets equal to 20539/34650 and forms a quadratic: 9k² − 61k − 14 = 0",
     "A1 (9k + 2)(k − 7) = 0, so k = −2/9 or 7",
     "A1 k is an integer, so k = 7"
    ],
    "guidance": "Saying only k ≥ 0 is not a valid reason for rejecting −2/9."
   },
   "10": {
    "type": "points",
    "points": [
     "*M1 AB = (10, 12, 10)ᵀ (or difference of plane constants)",
     "dep*M1 Shortest distance: ±2 = |AB · n|/|n|",
     "*M1 Normal n = (a, a, c)ᵀ used consistently",
     "A1 Quadratic 119a² + 110ac + 24c² = 0",
     "dep*M1 Solves, (7a + 4c)(17a + 6c) = 0, to get one normal",
     "A1 Normals (4, 4, −7)ᵀ and (6, 6, −17)ᵀ",
     "Dep*M1 Dot product of the normals = 167",
     "A1 cos θ = 167/171, acute angle ≈ 12.4° (0.217 rad)"
    ]
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 23i + 11j + 14k (or any non-zero multiple)"
    ]
   },
   "1(b)": {
    "type": "points",
    "points": [
     "M1 A correct component equation, e.g. x: 2 + λ = 1 − μ; y: 3 − 2λ = 11 + 3μ; z: 3 + λ = −4 − 2μ",
     "M1 Uses two equations to eliminate λ or μ",
     "A1 μ = −6, λ = 5",
     "B1FT Checks the unused equation, e.g. z: 3 + 5 = 8 = −4 − 2(−6)",
     "B1 Point of intersection (7, −7, 8)"
    ],
    "guidance": "The check must show the substitution, not just LHS = RHS = 8."
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1 θ = 2π",
     "B1 r = 4π, so A is [4π, 2π]"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 Sets 2θ = θ + 1",
     "A1 θ = 1, r = 2: [2, 1]"
    ]
   },
   "2(c)": {
    "type": "points",
    "points": [
     "B1 C₂ spirals out from [1, 0], outside C₁ until they meet once in the first quadrant, then inside C₁, ending on the initial line"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes the exponential forms of both cosh x and sinh x",
     "A1 ¼(2e^(2x) + 2e^(−2x)) = cosh 2x, with working shown (answer given)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1 Uses cosh²x − sinh²x = 1 to get cosh 2x = 2cosh²x − 1"
    ]
   },
   "5(c)": {
    "type": "points",
    "points": [
     "M1 Forms a quadratic: 5c² − 8c − 13 = 0",
     "A1 c = 13/5, with c = −1 rejected since cosh x ≥ 1",
     "M1 Uses the cosh⁻¹ log formula (or a quadratic in eˣ): ln(13/5 + √((13/5)² − 1)) = ln 5",
     "A1 x = ±ln 5 (both)"
    ],
    "guidance": "Alternative: exponentials give 5e^(4x) − 16e^(3x) − 42e^(2x) − 16eˣ + 5 = 0 = (eˣ − 5)(5eˣ − 1)(eˣ + 1)²; reject eˣ = −1."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 x = A sin ωt + B cos ωt (or R sin(ωt + φ))"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 t = 0, x = 0 gives B = 0",
     "A1 At rest when x = d, so A = d: x = d sin ωt",
     "A1 v = ωd cos ωt"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1 ω²(d² − d² sin² ωt) = (ωd cos ωt)² = v² (answer given)"
    ]
   },
   "6(d)": {
    "type": "points",
    "points": [
     "M1 z_m = (1/d)∫₀^d 1/(ω√(d² − x²)) dx",
     "A1 z_m = π/(2ωd)"
    ]
   },
   "6(e)": {
    "type": "points",
    "points": [
     "B1 d = 0.25, ω = 0.75 give z_m ≈ 8.38, so probably valid, but d = 0.255, ω = 0.77 give about 7.99998, so validity is not certain"
    ]
   },
   "6(f)": {
    "type": "points",
    "points": [
     "M1 Initial speed = ωd (t = 0 in v)",
     "A1 0.73 × 0.245 = 0.179, so 0.18 m s⁻¹"
    ]
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Expands the determinant",
     "A1 800 − 200a = 200(4 − a)"
    ]
   },
   "7(b)(i)": {
    "type": "points",
    "points": [
     "*M1 At least five correct cofactors (or minors)",
     "dep*M1 Transposes and applies signs correctly: adj A = (4−16a −40 96−24a; 75 50 0; 28a−82 20 32−8a)",
     "A1FT A⁻¹ = adj A/(800 − 200a)",
     "M1 Multiplies A⁻¹ by (6, −9, 11)ᵀ: (1440 − 360a, 0, −320 + 80a)ᵀ/(800 − 200a)",
     "A1 x = 9/5, y = 0, z = −2/5"
    ]
   },
   "7(b)(ii)": {
    "type": "points",
    "points": [
     "M1 det A = 0 gives a = 4, so the second equation is −3x − 6y + 9z = −9",
     "M1 Notes it is a multiple of the first equation (same normal, consistent)",
     "A1 The first two planes coincide; the third crosses them in a line"
    ]
   },
   "7(c)(i)": {
    "type": "points",
    "points": [
     "B1FT det A < 0, so a > 4"
    ]
   },
   "7(c)(ii)": {
    "type": "points",
    "points": [
     "M1 Uses |det A| < 1 as the volume scale factor condition",
     "A1 799/200 < a < 801/200 with a ≠ 4"
    ],
    "guidance": "Strict inequalities required."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 e^(iθ) + e^(−iθ) = 2 cos θ",
     "M1 De Moivre: e^(4iθ) = cos 4θ + i sin 4θ",
     "A1 Real part 16 cos 4θ cos⁴θ, so a = 16"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "*M1 Binomial expansion of (e^(iθ) + e^(−iθ))⁴ with correct coefficients",
     "dep*M1 Converts to trig form, e.g. e^(8iθ) = cos 8θ + i sin 8θ",
     "dep*M1 Takes real parts: 16 cos 4θ cos⁴θ = cos 8θ + 4cos 6θ + 6cos 4θ + 4cos 2θ + 1",
     "dep*M1 Substitutes θ = π/12",
     "dep*M1 Correct values of all the cos(nπ/6) terms: cos(π/12) = ∜((1/8)(−½ + 0 + 3 + 2√3 + 1))",
     "A1 ∜((7 + 4√3)/16) = ½∜(7 + 4√3), so b = 7, c = 4"
    ]
   }
  }
 },

 "fmath-ocr-h245-2023-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Matrices. P = (1 0 −2 2; 4 2 −2 3). Q = (1 2), R = (3 −4; 2 3), S = (3 −2). A is a 4 × 5 matrix; C = BA can be formed and C has 6 rows.",
    "parts": [
     {
      "code": "1(a)(i)",
      "prompt": "State the dimensions of P.",
      "marks": 1
     },
     {
      "code": "1(a)(ii)",
      "prompt": "Write down Pᵀ.",
      "marks": 1
     },
     {
      "code": "1(b)",
      "prompt": "Two of Q, R, S can be added: write down their sum.",
      "marks": 1
     },
     {
      "code": "1(c)(i)",
      "prompt": "How many columns does C have?",
      "marks": 1
     },
     {
      "code": "1(c)(ii)",
      "prompt": "State the dimensions of B.",
      "marks": 1
     },
     {
      "code": "1(c)(iii)",
      "prompt": "Explain whether AB can be formed.",
      "marks": 1
     },
     {
      "code": "1(d)",
      "prompt": "Find c such that (−2 3; 6 10)(c 5; 10 13) = (c 5; 10 13)(−2 3; 6 10).",
      "marks": 2
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Express −24 + 7i in modulus-argument form.",
      "marks": 3
     },
     {
      "code": "2(b)",
      "prompt": "Solve iz + 3w = −7i and −6z + 5iw = 3 + 13i, giving z and w in cartesian form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 3,
    "scenario": "Inverse hyperbolic functions.",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Show that d/du (sinh⁻¹u) = 1/√(u² + 1).",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Find the normal to y = sinh⁻¹2x at x = √6, as y = mx + c with m and c exact and not in hyperbolic form.",
      "marks": 4
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Detailed reasoning required. Region R (units cm) lies between y = 1/√(3x² − 3x + 1), the x-axis, x = ½ and x = 1 (diagram on the question paper; the curve peaks at y = 2 when x = ½). A pendant is modelled as R rotated through 2π about the x-axis.",
    "parts": [
     {
      "code": "4",
      "prompt": "Find the exact volume of metal needed for the pendant according to the model.",
      "marks": 4
     }
    ]
   },
   {
    "number": 5,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Using the exponential definitions of sinh x and cosh x, show that sinh 2x ≡ 2 sinh x cosh x.",
      "marks": 2
     },
     {
      "code": "5(b)",
      "prompt": "Solve 15 sinh x + 16 cosh x − 6 sinh 2x = 20, giving all answers in logarithmic form.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Plane Π: r = (−1, 2, 1)ᵀ + λ(4, 4, 3)ᵀ + μ(−2, 3, 1)ᵀ. A is the point (9, −7, 20); F is the foot of the perpendicular from A to Π.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find the acute angle between Π and the plane r·(2, 0, 3)ᵀ = 4.",
      "marks": 4
     },
     {
      "code": "6(b)",
      "prompt": "Find the coordinates of F.",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "scenario": "Detailed reasoning required. You may use Σ (r = 1 to ∞) 1/r² = π²/6.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Show that Σ (r = 1 to n) (5r + 6)/(r³ + r²) = a/(n + 1) + b + c Σ (r = 1 to n) 1/r², finding integers a, b, c.",
      "marks": 6
     },
     {
      "code": "7(b)",
      "prompt": "Show that Σ (r = 1 to ∞) (5r + 6)/(r³ + r²) exists and equals (π − 1)(π + 1).",
      "marks": 2
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A current surge I units at time t s starts at t = 0 with I = 0; at t = 1, I = 5. During the surge (2t − t²) dI/dt = (2t − t²)^(3/2) − 2(t − 1)I. The surge ends when the current is zero again.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Use an integrating factor to show that I = (2t − t²)(sin⁻¹(t − 1) + 5) during the surge.",
      "marks": 6
     },
     {
      "code": "8(b)",
      "prompt": "Find how long the surge lasts according to the model.",
      "marks": 2
     },
     {
      "code": "8(c)",
      "prompt": "Find the exact rate of increase of the current at the start of the surge.",
      "marks": 3
     }
    ]
   },
   {
    "number": 9,
    "scenario": "y = f(t) = ln(1 + at), where a is a constant.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Using the first four derivatives, conjecture a formula for dⁿy/dtⁿ in terms of n and a (integer n ≥ 1).",
      "marks": 3
     },
     {
      "code": "9(b)",
      "prompt": "Prove the conjecture by induction.",
      "marks": 4
     },
     {
      "code": "9(c)",
      "prompt": "For f(t) = ln(1 + 2t), find the rate of change of the 6th derivative of f when t = 3/2.",
      "marks": 2
     }
    ]
   },
   {
    "number": 10,
    "scenario": "Detailed reasoning required. A floor region R (metres, radians, polar coordinates) is enclosed by C₁: r = 5 and C₂: r = 3 cosh θ, both for −½π ≤ θ ≤ ½π; R is the part inside C₁ and outside C₂, crossing the initial line between r = 3 and r = 5 (diagram on the question paper). One tin of paint covers 0.5 m².",
    "parts": [
     {
      "code": "10",
      "prompt": "Find the smallest number of tins needed to paint R completely.",
      "marks": 7
     }
    ]
   }
  ],
  "markSchemes": {
   "4": {
    "type": "points",
    "points": [
     "M1 V = π∫ from ½ to 1 of y² dx, i.e. π∫ 1/(3x² − 3x + 1) dx",
     "M1 Completes the square: (π/3)∫ 1/((x − ½)² + 1/12) dx",
     "A1 Integrates to (2π/√3) tan⁻¹(√3(2x − 1))",
     "A1 (2π/√3)(π/3) = 2√3π²/9 cm³"
    ]
   },
   "10": {
    "type": "points",
    "points": [
     "B1 Curves meet when 3cosh θ = 5: θ = ±cosh⁻¹(5/3) = ±ln 3",
     "B1ft Sector area of C₁: ½ × 5² × 2ln 3 = 25 ln 3 (awrt 27.5)",
     "M1 Area formula ½∫ (3cosh θ)² dθ with limits ±ln 3",
     "*M1 Writes cosh²θ in integrable form, e.g. ¼(e^(2θ) + e^(−2θ) + 2)",
     "dep*M1 Integrates and substitutes limits: area under C₂ = 10 + (9/2)ln 3 (awrt 13.3)",
     "A1 Area of R = 25 ln 3 − (10 + (9/2)ln 3) = (41/2)ln 3 − 10 ≈ 12.52",
     "A1 12.52/0.5 = 25.04, so 26 tins"
    ],
    "guidance": "If B1 B1 M1 M0 M0, SC B1 for each of the last two answers."
   },
   "1(a)(i)": {
    "type": "points",
    "points": [
     "B1 2 × 4"
    ]
   },
   "1(a)(ii)": {
    "type": "points",
    "points": [
     "B1 Pᵀ = (1 4; 0 2; −2 −2; 2 3)"
    ],
    "guidance": "Poor or missing brackets condoned here."
   },
   "1(b)": {
    "type": "points",
    "points": [
     "B1 Q + S = (4 0)"
    ],
    "guidance": "Not (4, 0)."
   },
   "1(c)(i)": {
    "type": "points",
    "points": [
     "B1 5"
    ]
   },
   "1(c)(ii)": {
    "type": "points",
    "points": [
     "B1 6 × 4"
    ]
   },
   "1(c)(iii)": {
    "type": "points",
    "points": [
     "B1 No: A has 5 columns but B has 6 rows, and these must match"
    ],
    "guidance": "Must refer to 'number of' columns/rows (or equivalent), with a word implying comparison if numbers are used."
   },
   "1(d)": {
    "type": "points",
    "points": [
     "M1 Multiplies both ways: (30 − 2c 29; 6c + 100 160) and (30 − 2c 3c + 50; 58 160)",
     "A1 6c + 100 = 58 or 3c + 50 = 29, so c = −7"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "M1 Uses a correct formula for modulus or argument, e.g. √(24² + 7²) or tan⁻¹(7/−24)",
     "A1 Modulus 25 and argument awrt 2.86 (or −0.284)",
     "A1 −24 + 7i = 25(cos 2.86 + i sin 2.86)"
    ],
    "guidance": "Degrees (163.7°) condoned for the first A1. Equivalent notation such as exponential form accepted."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "*M1 Scales the equations (using i² = −1) so one unknown has matching coefficients",
     "A1 13w = −13 − 39i, so w = −1 − 3i",
     "dep*M1 Substitutes back and solves for the other unknown",
     "A1 z = 2 − 3i"
    ],
    "guidance": "Alternatives: substitution; equating real and imaginary parts with z = a + bi, w = c + di; or inverse matrix (1/13)(5i −3; 6 i)."
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 sinh y = u, cosh y dy/du = 1, uses cosh²y − sinh²y = 1 to get dy/du = 1/(±√(u² + 1))",
     "A1 Rejects the negative since the gradient of sinh⁻¹u is never negative (AG)"
    ],
    "guidance": "Alternatives: differentiate ln(u + √(u² + 1)); or integrate 1/√(u² + 1) with u = sinh v."
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1 Chain rule: dy/dx = 2/√(4x² + 1)",
     "M1 y-coordinate at x = √6: sinh⁻¹2√6 = ln(5 + 2√6)",
     "M1 Gradient 2/5 at x = √6, so normal gradient −5/2",
     "A1 y = −(5/2)x + ln(5 + 2√6) + 5√6/2"
    ]
   },
   "5(a)": {
    "type": "points",
    "points": [
     "M1 Uses 2 × (eˣ − e⁻ˣ)/2 × (eˣ + e⁻ˣ)/2",
     "A1 Simplifies to (e²ˣ − e⁻²ˣ)/2 = sinh 2x with a step shown (AG)"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "B1 Uses sinh 2x = 2 sinh x cosh x",
     "M1 Rearranges to 12sc − 16c − 15s + 20 = 0 and factorises: (3s − 4)(4c − 5) = 0",
     "A1 sinh x = 4/3 or cosh x = 5/4",
     "A1 sinh⁻¹(4/3) = ln 3",
     "A1 cosh⁻¹(5/4) gives x = ±ln 2 (± must be explicit)"
    ],
    "guidance": "Alternative: exponential form gives 6y⁴ − 31y³ + 40y² − y − 6 = 0 with y = eˣ = (y − 2)(y − 3)(2y − 1)(3y + 1), rejecting y = −⅓; marks B1 *M1 *dep*M1 dep*M1 A1."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 Normal to Π: (4, 4, 3)ᵀ × (−2, 3, 1)ᵀ = −5(1, 2, −4)ᵀ",
     "M1 Angle between normals: (1, 2, −4)·(2, 0, 3) = −10",
     "M1 cos θ = −10/(√21√13)",
     "A1 θ = 127.2°, so acute angle 52.8° (awrt 0.921 rad)"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1 Plane equation: r·(1, 2, −4) = −1",
     "M1 Line AF: (9, −7, 20) + v(1, 2, −4), substituted into the plane",
     "A1 −85 + 21v = −1, so v = 4",
     "A1 F = (13, 1, 4)"
    ],
    "guidance": "Alternatives: solve the vector equations (λ = 2, μ = −3, v = 4); set AF·(4, 4, 3) = AF·(−2, 3, 1) = 0; or distance 84/√21 = 4√21 along the unit normal."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "*M1 Partial fractions A/r + B/r² + C/(r + 1)",
     "*M1 Valid method to find coefficients",
     "A1 C = 1 (any one correct non-zero coefficient)",
     "A1 B = 6, A = −1",
     "dep*M1 Splits the sum to show the cancelling pattern of 1/(r + 1) − 1/r",
     "A1 Result 1/(n + 1) − 1 + 6Σ1/r², so a = 1, b = −1, c = 6"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 1/(n + 1) → 0 as n → ∞",
     "A1 Limit is −1 + 6 × π²/6 = π² − 1 = (π − 1)(π + 1) (AG)"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "*M1 Rearranges to dI/dt + (2(t − 1)/(2t − t²))I = (2t − t²)^(1/2)",
     "A1 Integrating factor 1/(2t − t²)",
     "*dep*M1 Multiplies through and writes LHS as d/dt[(2t − t²)⁻¹I]",
     "dep*M1 Integrates RHS by completing the square: ∫ 1/√(1 − (t − 1)²) dt",
     "*A1 sin⁻¹(t − 1) + c",
     "dep*A1 Uses t = 1, I = 5 to get c = 5, giving I = (2t − t²)(sin⁻¹(t − 1) + 5) (AG)"
    ],
    "guidance": "Checking the given answer by substitution is not enough; c must be derived."
   },
   "8(b)": {
    "type": "points",
    "points": [
     "B1 I = 0 gives t = 2, so the surge lasts 2 seconds",
     "B1 sin⁻¹(t − 1) = −5 is impossible since sin⁻¹ lies in [−½π, ½π]"
    ],
    "guidance": "If B0 B0, SC1 for about 1.96 s found from sin(−5) + 1 after t = 2."
   },
   "8(c)": {
    "type": "points",
    "points": [
     "*M1 Obtains dI/dt in terms of t (from the DE or the product rule)",
     "M1 dep* Simplifies so there is no zero denominator at t = 0: dI/dt = (2t − t²)^(1/2) − 2(t − 1)(sin⁻¹(t − 1) + 5)",
     "A1 At t = 0: 2(5 − ½π) = 10 − π"
    ],
    "guidance": "If M0 on either method mark, SC B1 for the correct answer."
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1 dy/dt = a/(1 + at)",
     "A1 d²y/dt² = −a²(1 + at)⁻², d³y/dt³ = 2a³(1 + at)⁻³, d⁴y/dt⁴ = −6a⁴(1 + at)⁻⁴",
     "A1 dⁿy/dtⁿ = (−1)ⁿ⁻¹ aⁿ (n − 1)! (1 + at)⁻ⁿ"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "*B1ft Checks n = 1 against their first derivative",
     "M1 Assumes true for n = k and differentiates the kth derivative",
     "*A1 Obtains (−1)ᵏ aᵏ⁺¹ k! (1 + at)^(−(k + 1)) with working",
     "dep*A1 Complete inductive conclusion for all integers n ≥ 1"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "M1 Uses the seventh derivative",
     "A1 a = 2, t = 3/2: 2⁷ × 720 × 4⁻⁷ = 45/8 = 5.625"
    ]
   }
  }
 },

 "fmath-ocr-h245-2024-p2": {
  "verified": "2026-09-22",
  "source": "Rebuilt from the official question paper and mark scheme; wording paraphrased — see the PDFs for exact questions and diagrams.",
  "questions": [
   {
    "number": 1,
    "scenario": "Telescoping sums of 1/r − 1/(r + 1).",
    "parts": [
     {
      "code": "1(a)",
      "prompt": "Using the method of differences, show that Σ from r = 1 to n of (1/r − 1/(r + 1)) = 1 − 1/(n + 1).",
      "marks": 1
     },
     {
      "code": "1(b)(i)",
      "prompt": "Hence find Σ from r = 1 to 99 of (1/r − 1/(r + 1)).",
      "marks": 1
     },
     {
      "code": "1(b)(ii)",
      "prompt": "Hence find Σ from r = 100 to ∞ of (1/r − 1/(r + 1)).",
      "marks": 3
     }
    ]
   },
   {
    "number": 2,
    "scenario": "Detailed reasoning required.",
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Solve x² − 6x + 58 = 0, giving the roots as a + bi.",
      "marks": 3
     },
     {
      "code": "2(b)",
      "prompt": "Find the exact value of arg((−10 + 5√12 i)⁵).",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "scenario": "A = (4 −3; −2 2) and B = (3 −5; 0 1).",
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Find 2A − 4B.",
      "marks": 2
     },
     {
      "code": "3(b)",
      "prompt": "Write down the matrix C with AC = 2A.",
      "marks": 1
     },
     {
      "code": "3(c)",
      "prompt": "Find det A.",
      "marks": 1
     },
     {
      "code": "3(d)",
      "prompt": "Detailed reasoning required. Use A⁻¹ to solve 4x − 3y = 7 and −2x + 2y = 9.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "scenario": "Detailed reasoning required. S is the sum of the squares of the odd positive integers from 1² up to 779².",
    "parts": [
     {
      "code": "4",
      "prompt": "Find S.",
      "marks": 5
     }
    ]
   },
   {
    "number": 5,
    "scenario": "a = i + (1 − p)j + (p + 2)k, b = 2i + j + k, c = i + 14j + (p − 3)k, with p a constant; a × b is perpendicular to c.",
    "parts": [
     {
      "code": "5",
      "prompt": "Find the possible values of p.",
      "marks": 6
     }
    ]
   },
   {
    "number": 6,
    "scenario": "Polar curve C: r = 6 sin(2θ) sinh(⅓θ), 0 ≤ θ ≤ ½π (pole at the origin, initial line along the positive x-axis). Partial table of r: θ = 0 → 0; π/12 → 0.262; π/6 → ?; π/4 → ?; π/3 → 1.851; 5π/12 → ?; π/2 → ?. A is the point of C furthest from the pole, at θ = φ.",
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Explain why C is a single loop in the first quadrant through the pole.",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "Complete the table and sketch C on a polar grid.",
      "marks": 3
     },
     {
      "code": "6(c)",
      "prompt": "Show that φ = (3/2) ln((6 − tan 2φ)/(6 + tan 2φ)).",
      "marks": 4
     },
     {
      "code": "6(d)",
      "prompt": "Given the relevant root is φ = 1.0207 (5 s.f.), find the distance of A from the pole to 3 s.f.",
      "marks": 1
     }
    ]
   },
   {
    "number": 7,
    "scenario": "f(x) = 1/√(17cosh x − 15 sinh x). The region under y = f(x) between x = 0 and x = ln 3 is rotated through 2π about the x-axis to give solid S.",
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Write 17cosh x − 15 sinh x as e⁻ˣ(ae^(bx) + c) with integers a, b, c.",
      "marks": 3
     },
     {
      "code": "7(b)",
      "prompt": "Detailed reasoning required. With a suitable substitution and formula-book results, show the volume of S is kπ tan⁻¹ q for rationals k and q, and find them.",
      "marks": 7
     }
    ]
   },
   {
    "number": 8,
    "scenario": "Children in a play centre move freely between a bouncy-castle room (C children at time t hours) and a ball-pit room (P children), treated as continuous, with children tending to move to the less crowded room. Model: dP/dt = α(P − C) + γt, dC/dt = α(C − P).",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Explain why α must be negative.",
      "marks": 1
     },
     {
      "code": "8(b)",
      "prompt": "With α = −2 and γ = 32, show that d²P/dt² + 4 dP/dt = 64t + 32.",
      "marks": 2
     },
     {
      "code": "8(c)(i)",
      "prompt": "Find the complementary function of the equation in (b).",
      "marks": 1
     },
     {
      "code": "8(c)(ii)",
      "prompt": "Explain why a particular integral P = at + b fails here.",
      "marks": 1
     },
     {
      "code": "8(c)(iii)",
      "prompt": "Using a particular integral P = at² + bt, find the general solution.",
      "marks": 3
     },
     {
      "code": "8(d)",
      "prompt": "At some moment there are 55 children in the ball pits, arriving at 24 per hour. Estimate the number in the ball pits 30 minutes later.",
      "marks": 4
     },
     {
      "code": "8(e)",
      "prompt": "Explain why the model fails for very large t.",
      "marks": 1
     }
    ]
   },
   {
    "number": 9,
    "scenario": "Arguments lie in [0, 2π). ω₀ = 1, ω₁, …, ωₙ₋₁ are the nth roots of unity (n ≥ 3) in order of increasing argument.",
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Using a diagram, explain why ωₖ = (ω₁)ᵏ for k = 2, …, n − 1.",
      "marks": 3
     },
     {
      "code": "9(b)",
      "prompt": "Use (a) to show Σ from k = 0 to n − 1 of ωₖ = 0.",
      "marks": 2
     },
     {
      "code": "9(c)",
      "prompt": "Show that z + z* = 2Re(z) for any complex z.",
      "marks": 1
     },
     {
      "code": "9(d)",
      "prompt": "Use (b) and (c) to show Σ Re(ωₖ) = 0 (k = 0 to n − 1).",
      "marks": 1
     },
     {
      "code": "9(e)",
      "prompt": "Using a diagram, explain why Re(ωₖ) = Re(ωₙ₋ₖ) for k = 1, …, n − 1.",
      "marks": 1
     },
     {
      "code": "9(f)(i)",
      "prompt": "For n = 5, use (d) and (e) to show cos(4π/5) = a + b cos(2π/5) for rationals a, b.",
      "marks": 2
     },
     {
      "code": "9(f)(ii)",
      "prompt": "Hence find the exact value of cos(2π/5).",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "4": {
    "type": "points",
    "points": [
     "M1 S = Σ from r = 1 to 390 of (2r − 1)²",
     "M1 = 4Σr² − 4Σr + Σ1",
     "B1FT Σr² (to 390) = 19 849 115",
     "B1FT Σr (to 390) = 76 245 and Σ1 = 390",
     "A1 S = 79 091 870"
    ],
    "guidance": "Alternative: Σ to 779 of r² (157 879 930) minus 4 × Σ to 389 of r² (19 697 015)."
   },
   "5": {
    "type": "points",
    "points": [
     "M1* Forms a × b",
     "A1 a × b = (−1 − 2p, 2p + 3, 2p − 1)ᵀ",
     "M1 Scalar product with c: 1(−1 − 2p) + 14(2p + 3) + (p − 3)(2p − 1)",
     "B1 Perpendicular means c·(a × b) = 0",
     "depM1* Rearranges to 2p² + 19p + 44 = 0",
     "A1 p = −4 or p = −11/2"
    ],
    "guidance": "If M0 M0, SC B1 for a correct scalar product of any two vectors involving p."
   },
   "1(a)": {
    "type": "points",
    "points": [
     "B1 Writes out terms (r = 1, 2, …, n) showing the cancellation, leaving 1 − 1/(n + 1)"
    ],
    "guidance": "Answer given; enough intermediate terms must be shown."
   },
   "1(b)(i)": {
    "type": "points",
    "points": [
     "B1 1 − 1/100 = 99/100"
    ]
   },
   "1(b)(ii)": {
    "type": "points",
    "points": [
     "B1 Limit: 1/(n + 1) → 0 as n → ∞, so the sum to infinity is 1",
     "M1 Sum from 100 to ∞ = (sum from 1 to ∞) − (sum from 1 to 99)",
     "A1 1 − 99/100 = 1/100"
    ],
    "guidance": "If B0 M0, SC B1 for 0.01 from 1 − 0.99."
   },
   "2(a)": {
    "type": "points",
    "points": [
     "M1 Quadratic formula or completing the square",
     "B1FT √(−196) = 14i",
     "A1 x = 3 ± 7i"
    ],
    "guidance": "Alternative via conjugate roots: sum 6, product 58, so a = 3, b² = 49."
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1 arg(−10 + 5√12 i) = 2π/3",
     "M1 De Moivre: 5 × 2π/3 = 10π/3",
     "A1 −2π/3 (or 4π/3)"
    ]
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1 (8 −6; −4 4) − (12 −20; 0 4)",
     "A1 (−4 14; −4 0)"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "B1 C = (2 0; 0 2) = 2I"
    ]
   },
   "3(c)": {
    "type": "points",
    "points": [
     "B1 det A = 8 − 6 = 2"
    ]
   },
   "3(d)": {
    "type": "points",
    "points": [
     "M1 A(x, y)ᵀ = (7, 9)ᵀ",
     "M1 (x, y)ᵀ = ½(2 3; 2 4)(7, 9)ᵀ",
     "A1 x = 41/2, y = 25"
    ],
    "guidance": "A matrix method is required; any other method scores 0."
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1 r = 0 at θ = 0 and θ = π/2, so the curve starts and ends at the pole",
     "B1 0 ≤ θ ≤ π/2 gives the first quadrant",
     "B1 Only two values of θ give r = 0, so only one loop"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1* Table: π/6 → 0.912, π/4 → 1.589, 5π/12 → 1.351, π/2 → 0",
     "M1 All points plotted approximately correctly",
     "A1dep* Smooth single closed loop through the points, cusp at the pole, maximum r between π/4 and 5π/12"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "M1 Product rule on r(θ)",
     "A1 dr/dθ = 12cos 2θ sinh(θ/3) + 2 sin 2θ cosh(θ/3)",
     "M1 Sets to 0 and rearranges to 6 tanh(φ/3) = −tan 2φ",
     "A1 φ/3 = tanh⁻¹(−(1/6)tan 2φ) = ½ ln(…), giving the result"
    ],
    "guidance": "Answer given, so the tanh⁻¹ log form step must be shown."
   },
   "6(d)": {
    "type": "points",
    "points": [
     "B1 r = 6 sin(2.0414) sinh(0.3402…) = 1.85"
    ],
    "guidance": "0.0741 comes from working in degrees."
   },
   "7(a)": {
    "type": "points",
    "points": [
     "M1 Substitutes exponential forms of cosh and sinh",
     "M1 Collects to eˣ + 16e⁻ˣ",
     "A1 e⁻ˣ(e²ˣ + 16): a = 1, b = 2, c = 16"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "M1 V = π∫₀^ln3 f(x)² dx",
     "M1 = π∫ eˣ/(e²ˣ + 16) dx",
     "M1 Substitution u = eˣ (or e⁻ˣ, or eˣ = 4 tan u)",
     "M1* Reduces to π∫ 1/(u² + 16) du",
     "B1FT Integrates to ¼ tan⁻¹(u/4)",
     "depM1* Limits u = 1 to 3: V = (π/4)(tan⁻¹(3/4) − tan⁻¹(1/4))",
     "A1 Uses tan(A − B): V = ¼π tan⁻¹(8/19), so k = ¼, q = 8/19"
    ],
    "guidance": "A decimal 0.3129… alone, or used to find k and q, scores A0."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "B1 If C > P children leave the castle room, so dC/dt < 0 while C − P > 0, forcing α < 0"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1 Differentiates dP/dt = 2C − 2P + 32t and substitutes for dC/dt",
     "A1 Eliminates C to reach d²P/dt² + 4 dP/dt = 64t + 32"
    ],
    "guidance": "Answer given."
   },
   "8(c)(i)": {
    "type": "points",
    "points": [
     "B1 m² + 4m = 0, m = 0 or −4, CF P = A + Be^(−4t)"
    ]
   },
   "8(c)(ii)": {
    "type": "points",
    "points": [
     "B1 A constant is already part of the CF, so it vanishes in the LHS (or cannot give the 64t term)"
    ]
   },
   "8(c)(iii)": {
    "type": "points",
    "points": [
     "M1 Substitutes P′ = 2at + b, P″ = 2a: 8at + 4b + 2a = 64t + 32",
     "A1 a = 8, b = 4",
     "A1FT P = A + Be^(−4t) + 8t² + 4t"
    ]
   },
   "8(d)": {
    "type": "points",
    "points": [
     "M1 t = 0, P = 55 gives A + B = 55",
     "M1 P′ = −4Be^(−4t) + 16t + 4",
     "M1 P′(0) = 24 gives B = −5, A = 60",
     "A1 P(½) = 60 − 5e⁻² + 2 + 2 = 63.3, so 63 children"
    ]
   },
   "8(e)": {
    "type": "points",
    "points": [
     "B1 P grows like 8t², but numbers of children cannot grow without limit"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "B1 Diagram: roots as vertices of a regular n-gon on the unit circle, 1 as ω₀ and ω₁ next, equal angles",
     "B1 |ω₁| = 1 so multiplying by ω₁ keeps modulus 1",
     "B1 Multiplying by ω₁ rotates by 2π/n, moving each root to the next"
    ],
    "guidance": "Alternative for the last two: ω₁ = e^(2πi/n) so ω₁ᵏ = e^(2πki/n) = ωₖ."
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1 Sum is a geometric series with ratio ω₁ ≠ 1 and n terms",
     "A1 (ω₁ⁿ − 1)/(ω₁ − 1) = 0 since ω₁ⁿ = 1"
    ]
   },
   "9(c)": {
    "type": "points",
    "points": [
     "B1 z = a + bi, z* = a − bi, sum 2a = 2Re(z)"
    ]
   },
   "9(d)": {
    "type": "points",
    "points": [
     "B1 Conjugating gives Σωₖ* = 0, so Σ(ωₖ + ωₖ*) = Σ2Re(ωₖ) = 0"
    ]
   },
   "9(e)": {
    "type": "points",
    "points": [
     "B1 The n-gon is symmetric in the real axis (ωₙ₋ₖ = ωₖ*), shown on a diagram"
    ]
   },
   "9(f)(i)": {
    "type": "points",
    "points": [
     "M1 arg ω₁ = 2π/5",
     "A1 1 + 2cos(2π/5) + 2cos(4π/5) = 0, so a = −½, b = −1"
    ]
   },
   "9(f)(ii)": {
    "type": "points",
    "points": [
     "M1 2c² − 1 = −½ − c gives 4c² + 2c − 1 = 0, c = (−1 ± √5)/4",
     "A1 cos(2π/5) > 0 (acute), so cos(2π/5) = (−1 + √5)/4"
    ]
   }
  }
 }

};
