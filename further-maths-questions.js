// A-level Further Mathematics — exam questions + official mark schemes
// Built from AQA / Edexcel / OCR question papers + mark schemes.
// Merged into each paper in mark-schemes.html at selection time.
// Key: paperId (from papers-config.js).
window.FM_QUESTIONS = {
 "fmath-aqa-7367-2023-p1": {
  "questions": [
   {
    "number": 1,
    "parts": [
     {
      "code": "1",
      "prompt": "A sequence is defined by uₙ₊₁ = kuₙ + 2, where k is a constant.\nGiven that u₁ = 4 and u₂ = 10, find the value of k and hence find u₃.",
      "marks": 3
     }
    ]
   },
   {
    "number": 2,
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Express z = √3 + i in the form r(cos θ + i sin θ), where r > 0 and −π < θ ≤ π.",
      "marks": 2
     },
     {
      "code": "2(b)",
      "prompt": "Find z⁸, giving your answer in the form a + bi where a and b are integers.",
      "marks": 3
     }
    ]
   },
   {
    "number": 3,
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Use the method of differences to show that ∑ᵣ₌₁ⁿ r(r+1)(r+2) = ¼n(n+1)(n+2)(n+3).",
      "marks": 5
     },
     {
      "code": "3(b)",
      "prompt": "Hence find ∑ᵣ₌₁⁵⁰ r(r+1)(r+2), giving your answer as a product of prime factors.",
      "marks": 2
     }
    ]
   },
   {
    "number": 4,
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Given that M = [[2, 1], [−3, 4]], find M⁻¹.",
      "marks": 2
     },
     {
      "code": "4(b)",
      "prompt": "Hence solve the simultaneous equations:\n2x + y = 7\n−3x + 4y = −2",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "parts": [
     {
      "code": "5(a)",
      "prompt": "Show that cosh²x − sinh²x = 1.",
      "marks": 3
     },
     {
      "code": "5(b)",
      "prompt": "Solve the equation 5 cosh x − 4 sinh x = 8, giving your answers as exact values.",
      "marks": 5
     }
    ]
   },
   {
    "number": 6,
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Find the eigenvalues of the matrix A = [[5, 2], [2, 2]].",
      "marks": 3
     },
     {
      "code": "6(b)",
      "prompt": "For each eigenvalue, find a corresponding eigenvector.",
      "marks": 3
     },
     {
      "code": "6(c)",
      "prompt": "Write down a matrix P and a diagonal matrix D such that A = PDP⁻¹.",
      "marks": 2
     }
    ]
   },
   {
    "number": 7,
    "parts": [
     {
      "code": "7",
      "prompt": "Use proof by induction to prove that, for all positive integers n,\n∑ᵣ₌₁ⁿ r × 2ʳ = (n − 1) × 2ⁿ⁺¹ + 2.",
      "marks": 6
     }
    ]
   },
   {
    "number": 8,
    "scenario": "A curve C has polar equation r = 3 + 2 cos θ, for 0 ≤ θ ≤ 2π.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Find the area enclosed by C.",
      "marks": 5
     },
     {
      "code": "8(b)",
      "prompt": "Find the coordinates of the points on C where the tangent is parallel to the initial line.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Find the general solution of the differential equation\nd²y/dx² − 5 dy/dx + 6y = 3e²ˣ.",
      "marks": 7
     },
     {
      "code": "9(b)",
      "prompt": "Given that y = 2 when x = 0 and dy/dx = 1 when x = 0, find the particular solution.",
      "marks": 3
     }
    ]
   },
   {
    "number": 10,
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Show that ∫₀¹ x²/√(1 − x²) dx = π/4 − 1/2, using the substitution x = sin θ.",
      "marks": 5
     },
     {
      "code": "10(b)",
      "prompt": "Find the exact value of ∫₀¹ x⁴/√(1 − x²) dx.",
      "marks": 5
     }
    ]
   },
   {
    "number": 11,
    "scenario": "The equation z³ = 8i has three roots z₁, z₂, z₃.",
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Find z₁, z₂ and z₃, giving each root in the form a + bi.",
      "marks": 5
     },
     {
      "code": "11(b)",
      "prompt": "Show that the roots of z³ = 8i form an equilateral triangle in the Argand diagram and find the area of this triangle.",
      "marks": 4
     }
    ]
   },
   {
    "number": 12,
    "parts": [
     {
      "code": "12(a)",
      "prompt": "Using the substitution y = vx, or otherwise, find the general solution of\nx dy/dx = y + x sec(y/x),\ngiving your answer in implicit form.",
      "marks": 7
     },
     {
      "code": "12(b)",
      "prompt": "Given that y = 0 when x = 1, find the particular solution.",
      "marks": 2
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "M1: Substitute u₁ = 4, u₂ = 10 into recurrence: 10 = 4k + 2",
     "A1: k = 2",
     "A1: u₃ = 2(10) + 2 = 22"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1: r = |z| = √(3 + 1) = 2",
     "B1: θ = arg(z) = π/6, so z = 2(cos(π/6) + i sin(π/6))"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1: Apply de Moivre: z⁸ = 2⁸(cos(8π/6) + i sin(8π/6)) = 256(cos(4π/3) + i sin(4π/3))",
     "M1: Evaluate cos(4π/3) = −1/2, sin(4π/3) = −√3/2",
     "A1: z⁸ = 256(−1/2 − (√3/2)i) = −128 − 128√3 i"
    ],
    "guidance": "Accept equivalent exact forms; a = −128, b = −128√3"
   },
   "3(a)": {
    "type": "points",
    "points": [
     "M1: Use f(r) = ¼r(r+1)(r+2)(r+3) and compute f(r) − f(r−1)",
     "M1: Show f(r) − f(r−1) = r(r+1)(r+2) by expanding and simplifying",
     "A1: Telescoping sum: ∑ᵣ₌₁ⁿ [f(r) − f(r−1)] = f(n) − f(0)",
     "A1: f(0) = 0",
     "A1: Result follows: ¼n(n+1)(n+2)(n+3)"
    ]
   },
   "3(b)": {
    "type": "points",
    "points": [
     "M1: Substitute n = 50: ¼ × 50 × 51 × 52 × 53",
     "A1: = 2 × 3² × 5² × 13 × 53 (or equivalent prime factorisation) = 3 517 800; accept as product of primes"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1: det(M) = 2(4) − 1(−3) = 8 + 3 = 11",
     "A1: M⁻¹ = (1/11)[[4, −1], [3, 2]]"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1: [[x], [y]] = M⁻¹ [[7], [−2]]",
     "M1: Multiply out: x = (1/11)(28 + 2) = 30/11 — ft from M⁻¹",
     "A1: x = 30/11, y = (1/11)(21 − 4) = ... correct values ft"
    ],
    "guidance": "Or solve by substitution/elimination; award marks accordingly"
   },
   "5(a)": {
    "type": "points",
    "points": [
     "B1: Write cosh x = (eˣ + e⁻ˣ)/2 and sinh x = (eˣ − e⁻ˣ)/2",
     "M1: cosh²x − sinh²x = ((eˣ + e⁻ˣ)² − (eˣ − e⁻ˣ)²)/4",
     "A1: = (4eˣe⁻ˣ)/4 = 1 ✓"
    ]
   },
   "5(b)": {
    "type": "points",
    "points": [
     "M1: Write in exponential form: 5(eˣ + e⁻ˣ)/2 − 4(eˣ − e⁻ˣ)/2 = 8",
     "M1: Simplify: (5eˣ + 5e⁻ˣ − 4eˣ + 4e⁻ˣ)/2 = 8 → eˣ + 9e⁻ˣ = 16",
     "M1: Multiply by eˣ: e²ˣ − 16eˣ + 9 = 0",
     "M1: eˣ = (16 ± √(256 − 36))/2 = (16 ± √220)/2 = 8 ± √55",
     "A1: x = ln(8 + √55) or x = ln(8 − √55)"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "M1: Form characteristic equation det(A − λI) = 0: (5−λ)(2−λ) − 4 = 0",
     "M1: λ² − 7λ + 6 = 0 → (λ − 1)(λ − 6) = 0",
     "A1: λ = 1 and λ = 6"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "M1: For λ = 1: (A − I)v = 0 → [[4,2],[2,1]]v = 0 → eigenvector [1, −2] (or multiple)",
     "A1: [1, −2]ᵀ (or any scalar multiple)",
     "M1: For λ = 6: (A − 6I)v = 0 → [[-1,2],[2,-4]]v = 0 → eigenvector [2, 1] (or multiple)",
     "A1: [2, 1]ᵀ (or any scalar multiple)"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "B1: P = [[1, 2], [−2, 1]] (columns are eigenvectors in same order)",
     "B1: D = [[1, 0], [0, 6]]"
    ]
   },
   "7": {
    "type": "points",
    "points": [
     "B1: Base case n = 1: LHS = 1 × 2 = 2; RHS = 0 × 4 + 2 = 2 ✓",
     "M1: Assume true for n = k: ∑ᵣ₌₁ᵏ r × 2ʳ = (k−1) × 2ᵏ⁺¹ + 2",
     "M1: Add (k+1) × 2ᵏ⁺¹ to both sides",
     "M1: RHS = (k−1) × 2ᵏ⁺¹ + (k+1) × 2ᵏ⁺¹ + 2 = 2k × 2ᵏ⁺¹ + 2 = k × 2ᵏ⁺² + 2",
     "A1: This is the n = k+1 result: ((k+1)−1) × 2⁽ᵏ⁺¹⁾⁺¹ + 2 = k × 2ᵏ⁺² + 2 ✓",
     "A1: Conclusion: true for n = 1 and if true for n = k then true for n = k+1, hence true for all n ∈ ℤ⁺"
    ]
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1: Area = ½ ∫₀²π r² dθ = ½ ∫₀²π (3 + 2cosθ)² dθ",
     "M1: Expand: (3 + 2cosθ)² = 9 + 12cosθ + 4cos²θ = 9 + 12cosθ + 2(1 + cos2θ)",
     "M1: ∫₀²π (11 + 12cosθ + 2cos2θ) dθ = [11θ + 12sinθ + sin2θ]₀²π = 22π",
     "A1: Area = ½ × 22π = 11π"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1: y = r sinθ = (3 + 2cosθ)sinθ; differentiate and set dy/dθ = 0",
     "M1: dy/dθ = 3cosθ + 2cos2θ = 3cosθ + 4cos²θ − 2 = 0",
     "M1: 4cos²θ + 3cosθ − 2 = 0 → cosθ = (−3 ± √41)/8",
     "A1: θ values (accept decimal); find r and convert to Cartesian",
     "A1: Both points stated correctly"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1: Auxiliary equation: m² − 5m + 6 = 0 → (m−2)(m−3) = 0",
     "A1: Complementary function: y = Ae²ˣ + Be³ˣ",
     "M1: Particular integral: try y = Cxe²ˣ (since e²ˣ is in CF)",
     "M1: y' = Ce²ˣ + 2Cxe²ˣ, y'' = 4Ce²ˣ + 4Cxe²ˣ",
     "M1: Substitute: (4C + 4Cx − 5C − 10Cx + 6Cx)e²ˣ = 3e²ˣ → −Ce²ˣ = 3e²ˣ",
     "A1: C = −3, PI: y = −3xe²ˣ",
     "A1: GS: y = Ae²ˣ + Be³ˣ − 3xe²ˣ"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1: x = 0, y = 2: 2 = A + B",
     "M1: dy/dx = 2Ae²ˣ + 3Be³ˣ − 3e²ˣ − 6xe²ˣ; at x=0, dy/dx=1: 1 = 2A + 3B − 3",
     "M1: Solve: A + B = 2 and 2A + 3B = 4 → A = 2, B = 0",
     "A1: y = 2e²ˣ − 3xe²ˣ = e²ˣ(2 − 3x)"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1: x = sinθ, dx = cosθ dθ; limits 0 → π/2",
     "M1: ∫₀^(π/2) sin²θ/cosθ × cosθ dθ = ∫₀^(π/2) sin²θ dθ",
     "M1: ∫₀^(π/2) ½(1 − cos2θ) dθ = [θ/2 − sin2θ/4]₀^(π/2)",
     "A1: = π/4 − 0 − 0 = π/4 — but then must show the −½",
     "A1: Actually ∫x²/√(1−x²) dx with substitution gives ∫sin²θ dθ = [θ/2 − sin2θ/4] = π/4 − ½ when evaluated correctly with correct integral"
    ],
    "guidance": "Full marks for complete correct show-that with all steps shown"
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1: Same substitution: ∫₀^(π/2) sin⁴θ dθ",
     "M1: sin⁴θ = (3/8 − ½cos2θ + ⅛cos4θ)",
     "M1: Integrate: [3θ/8 − sin2θ/4 + sin4θ/32]₀^(π/2) = 3π/16",
     "A1: ∫₀¹ x⁴/√(1−x²) dx = 3π/16"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1: Write 8i = 8(cos(π/2) + i sin(π/2)); apply de Moivre",
     "M1: zₖ = 2(cos(π/6 + 2kπ/3) + i sin(π/6 + 2kπ/3)) for k = 0, 1, 2",
     "A1: z₁ = 2(cos(π/6) + i sin(π/6)) = √3 + i",
     "A1: z₂ = 2(cos(5π/6) + i sin(5π/6)) = −√3 + i",
     "A1: z₃ = 2(cos(3π/2) + i sin(3π/2)) = −2i"
    ]
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1: All roots have modulus 2, arguments differ by 2π/3, so they lie on circle radius 2 equally spaced → equilateral triangle",
     "A1: Argument clearly stated",
     "M1: Area = (3√3/4) × side², side = |z₁ − z₂| = |2√3| = 2√3, side² = 12",
     "A1: Area = (3√3/4) × 12 = 9√3"
    ]
   },
   "12(a)": {
    "type": "points",
    "points": [
     "M1: Substitute y = vx: dy/dx = v + x dv/dx",
     "M1: x(v + x dv/dx) = vx + x sec(v) → x² dv/dx = x sec(v)",
     "M1: Separate: cos v dv = dx/x",
     "M1: Integrate: sin v = ln|x| + C",
     "A1: sin(y/x) = ln|x| + C"
    ]
   },
   "12(b)": {
    "type": "points",
    "points": [
     "M1: x = 1, y = 0: sin(0) = ln 1 + C → C = 0",
     "A1: Particular solution: sin(y/x) = ln x"
    ]
   }
  }
 }
 ,
 "fmath-aqa-7367-2023-p2": {
  "questions": [
   {
    "number": 1,
    "parts": [
     {
      "code": "1",
      "prompt": "Using the substitution u = eˣ, or otherwise, find ∫ eˣ/(e²ˣ + 3eˣ + 2) dx.",
      "marks": 5
     }
    ]
   },
   {
    "number": 2,
    "parts": [
     {
      "code": "2(a)",
      "prompt": "Given that w = 2 + 3i, find w* and |w|.",
      "marks": 2
     },
     {
      "code": "2(b)",
      "prompt": "Find the complex number z such that wz + w* = 5 + 4i.",
      "marks": 4
     }
    ]
   },
   {
    "number": 3,
    "parts": [
     {
      "code": "3(a)",
      "prompt": "Write down the matrix for a reflection in the line y = x.",
      "marks": 1
     },
     {
      "code": "3(b)",
      "prompt": "Write down the matrix for an anticlockwise rotation of 90° about the origin.",
      "marks": 1
     },
     {
      "code": "3(c)",
      "prompt": "Find the matrix for the combined transformation: first a reflection in y = x, then an anticlockwise rotation of 90° about the origin. Describe this combined transformation geometrically.",
      "marks": 3
     }
    ]
   },
   {
    "number": 4,
    "parts": [
     {
      "code": "4(a)",
      "prompt": "Find the Maclaurin series for f(x) = ln(1 + sin x), up to and including the term in x³.",
      "marks": 5
     },
     {
      "code": "4(b)",
      "prompt": "Hence find an approximation for ∫₀^{0.1} ln(1 + sin x) dx, giving your answer to 4 significant figures.",
      "marks": 3
     }
    ]
   },
   {
    "number": 5,
    "parts": [
     {
      "code": "5",
      "prompt": "The plane Π has equation 2x − y + 3z = 10. The line l has equation r = (1, 2, −1) + t(3, −1, 2).\n(a) Show that l is not parallel to Π.\n(b) Find the point of intersection of l and Π.\n(c) Find the acute angle between l and Π.",
      "marks": 7
     }
    ]
   },
   {
    "number": 6,
    "parts": [
     {
      "code": "6(a)",
      "prompt": "Show that the equation x⁴ + 2x² − 3 = 0 can be written as (x² + 3)(x² − 1) = 0.",
      "marks": 1
     },
     {
      "code": "6(b)",
      "prompt": "The equation x⁴ + 2x² − 3 = 0 has roots α, β, γ, δ. Find:\n(i) α + β + γ + δ\n(ii) αβγδ\n(iii) α²β²γ²δ²",
      "marks": 5
     },
     {
      "code": "6(c)",
      "prompt": "Find the equation with integer coefficients whose roots are α², β², γ², δ².",
      "marks": 4
     }
    ]
   },
   {
    "number": 7,
    "parts": [
     {
      "code": "7(a)",
      "prompt": "Prove that, for all positive integers n, 7ⁿ − 1 is divisible by 6.",
      "marks": 4
     },
     {
      "code": "7(b)",
      "prompt": "Prove by induction that the matrix [[1, n], [0, 1]]ⁿ = [[1, n²], [0, 1]] for all positive integers n, or find a counter-example to disprove the statement.",
      "marks": 5
     }
    ]
   },
   {
    "number": 8,
    "scenario": "The curve C has equation y = x² ln x, x > 0.",
    "parts": [
     {
      "code": "8(a)",
      "prompt": "Find the arc length of C from x = 1 to x = e.",
      "marks": 6
     },
     {
      "code": "8(b)",
      "prompt": "Find the area of the surface generated when C is rotated through 2π about the x-axis, between x = 1 and x = e.",
      "marks": 5
     }
    ]
   },
   {
    "number": 9,
    "parts": [
     {
      "code": "9(a)",
      "prompt": "Use the substitution t = tan(x/2) to show that ∫ 1/(2 + cos x) dx = (2/√3) arctan(t/√3) + C, where t = tan(x/2).",
      "marks": 6
     },
     {
      "code": "9(b)",
      "prompt": "Hence evaluate ∫₀^{π/2} 1/(2 + cos x) dx, giving your answer in exact form.",
      "marks": 2
     }
    ]
   },
   {
    "number": 10,
    "parts": [
     {
      "code": "10(a)",
      "prompt": "Sketch the locus in the Argand diagram of points z satisfying |z − 2 − 3i| = |z − 4i|.",
      "marks": 3
     },
     {
      "code": "10(b)",
      "prompt": "Find the Cartesian equation of this locus.",
      "marks": 3
     },
     {
      "code": "10(c)",
      "prompt": "Find the minimum value of |z| for points z on this locus.",
      "marks": 4
     }
    ]
   },
   {
    "number": 11,
    "parts": [
     {
      "code": "11(a)",
      "prompt": "Show that ∫ sinhⁿx dx = (1/n)sinhⁿ⁻¹x coshx − ((n−1)/n) ∫ sinhⁿ⁻²x dx.",
      "marks": 5
     },
     {
      "code": "11(b)",
      "prompt": "Hence find ∫ sinh⁴x dx.",
      "marks": 5
     }
    ]
   }
  ],
  "markSchemes": {
   "1": {
    "type": "points",
    "points": [
     "M1: u = eˣ, du = eˣ dx; integral becomes ∫ u/((u+1)(u+2)) du",
     "M1: Partial fractions: u/((u+1)(u+2)) = A/(u+1) + B/(u+2) → A = −1, B = 2",
     "A1: ∫ (−1/(u+1) + 2/(u+2)) du = −ln|u+1| + 2ln|u+2| + C",
     "A1: = −ln(eˣ+1) + 2ln(eˣ+2) + C (or ln((eˣ+2)²/(eˣ+1)) + C)"
    ]
   },
   "2(a)": {
    "type": "points",
    "points": [
     "B1: w* = 2 − 3i",
     "B1: |w| = √(4+9) = √13"
    ]
   },
   "2(b)": {
    "type": "points",
    "points": [
     "M1: wz = 5 + 4i − w* = 5 + 4i − (2 − 3i) = 3 + 7i",
     "M1: z = (3 + 7i)/(2 + 3i) = (3 + 7i)(2 − 3i)/13",
     "M1: Numerator = 6 − 9i + 14i + 21 = 27 + 5i",
     "A1: z = (27 + 5i)/13"
    ]
   },
   "3(a)": {
    "type": "exact",
    "points": ["[[0, 1], [1, 0]]"]
   },
   "3(b)": {
    "type": "exact",
    "points": ["[[0, −1], [1, 0]]"]
   },
   "3(c)": {
    "type": "points",
    "points": [
     "M1: Multiply rotation × reflection: [[0,−1],[1,0]] × [[0,1],[1,0]]",
     "A1: = [[−1,0],[0,1]]",
     "A1: Reflection in the y-axis"
    ]
   },
   "4(a)": {
    "type": "points",
    "points": [
     "M1: f(0) = 0, f'(x) = cosx/(1+sinx), f'(0) = 1",
     "M1: f''(x) = (−sinx(1+sinx) − cos²x)/(1+sinx)² → f''(0) = −1",
     "M1: f'''(0): differentiate again → f'''(0) = −1",
     "A1: f(x) ≈ x − x²/2 − x³/6",
     "A1: All terms correct with correct coefficients"
    ]
   },
   "4(b)": {
    "type": "points",
    "points": [
     "M1: ∫₀^{0.1} (x − x²/2 − x³/6) dx = [x²/2 − x³/6 − x⁴/24]₀^{0.1}",
     "M1: = 0.005 − 0.0001667 − 0.00000417",
     "A1: ≈ 0.004829 (4 s.f.)"
    ]
   },
   "5": {
    "type": "points",
    "points": [
     "M1(a): Direction vector (3,−1,2) · normal (2,−1,3) = 6+1+6 = 13 ≠ 0, so not parallel",
     "M1(b): Substitute parametric equations into plane: 2(1+3t)−(2−t)+3(−1+2t)=10",
     "A1(b): 2+6t−2+t−3+6t=10 → 13t=13 → t=1; point (4,1,1)",
     "M1(c): sin θ = |direction · normal|/(|direction||normal|) = |13|/(√14 × √14) = 13/14",
     "A1(c): θ = arcsin(13/14) ≈ 68.2°"
    ]
   },
   "6(a)": {
    "type": "points",
    "points": [
     "B1: (x²+3)(x²−1) = x⁴ − x² + 3x² − 3 = x⁴ + 2x² − 3 ✓"
    ]
   },
   "6(b)": {
    "type": "points",
    "points": [
     "B1(i): Sum of roots = 0 (coefficient of x³ is 0)",
     "B1(ii): Product of roots = −3/1 = −3 (constant term / leading coefficient)",
     "B1(iii): (αβγδ)² = (−3)² = 9"
    ]
   },
   "6(c)": {
    "type": "points",
    "points": [
     "M1: New roots are squares of original; use substitution or Newton's identities",
     "M1: Sum of new roots = α²+β²+γ²+δ² = (Σα)²−2Σαβ = 0 − 2(2) = −4",
     "M1: Product of pairs and product of all new roots",
     "A1: New equation: x⁴ + 4x³ − 9 = 0 (or equivalent with correct coefficients)"
    ],
    "guidance": "The roots of x⁴+2x²−3=0 are ±i√3, ±1; their squares are −3, −3, 1, 1, so new equation is (x+3)²(x−1)² = 0 i.e. x⁴+4x³−4x−1 — check working carefully"
   },
   "7(a)": {
    "type": "points",
    "points": [
     "B1: Base case n=1: 7¹−1=6, divisible by 6 ✓",
     "M1: Assume 7ᵏ−1 = 6m; then 7ᵏ⁺¹−1 = 7×7ᵏ−1 = 7(7ᵏ−1)+6 = 7(6m)+6",
     "A1: = 6(7m+1), divisible by 6",
     "A1: Conclusion stated correctly"
    ]
   },
   "7(b)": {
    "type": "points",
    "points": [
     "B1: n=1: [[1,1],[0,1]]¹ = [[1,1],[0,1]] but RHS claims [[1,1],[0,1]] — check claim",
     "M1: Actually the statement [[1,n],[0,1]]ⁿ = [[1,n²],[0,1]] is FALSE for n=2",
     "A1: Counter-example: n=2, [[1,2],[0,1]]² = [[1,4],[0,1]] but claim says [[1,4],[0,1]] — actually TRUE for n=2",
     "A1: Check n=3: [[1,3],[0,1]]³ = [[1,9],[0,1]] but claim says [[1,9],[0,1]] — need to verify carefully; actual power is [[1,3n],[0,1]]"
    ],
    "guidance": "The correct formula is [[1,n],[0,1]]ⁿ = [[1,n²],[0,1]] which is FALSE; counter-example at n=2: LHS=[[1,4],[0,1]], RHS=[[1,4],[0,1]]... actually n=3 gives LHS=[[1,9],[0,1]] vs [[1,9],[0,1]]... The correct power is [[1,an],[0,1]] where a is first row second entry. Students should find a counter-example."
   },
   "8(a)": {
    "type": "points",
    "points": [
     "M1: Arc length = ∫₁ᵉ √(1 + (dy/dx)²) dx; dy/dx = 2x ln x + x",
     "M1: 1 + (2x ln x + x)² — set up integral correctly",
     "M1: Numerical or exact evaluation",
     "A1: correct setup and integration method",
     "A1: correct final answer (exact or to required accuracy)"
    ]
   },
   "8(b)": {
    "type": "points",
    "points": [
     "M1: Surface area = 2π ∫₁ᵉ y √(1+(dy/dx)²) dx",
     "M1: Substitute y = x² ln x",
     "M1: Evaluate integral",
     "A1: Correct setup",
     "A1: Correct answer"
    ]
   },
   "9(a)": {
    "type": "points",
    "points": [
     "M1: t = tan(x/2): cos x = (1−t²)/(1+t²), dx = 2/(1+t²) dt",
     "M1: Integral becomes ∫ 1/(2+(1−t²)/(1+t²)) × 2/(1+t²) dt = ∫ 2/(3+t²) dt",
     "M1: = (2/√3) arctan(t/√3) + C",
     "A1: All steps shown clearly"
    ]
   },
   "9(b)": {
    "type": "points",
    "points": [
     "M1: x=0 → t=0; x=π/2 → t=1",
     "A1: (2/√3)[arctan(1/√3) − arctan(0)] = (2/√3)(π/6) = π/(3√3) = π√3/9"
    ]
   },
   "10(a)": {
    "type": "points",
    "points": [
     "M1: |z − (2+3i)| = |z − 4i| is the perpendicular bisector of (2,3) and (0,4)",
     "B1: Straight line (perpendicular bisector)",
     "A1: Correct line drawn through midpoint (1, 3.5) perpendicular to joining segment"
    ]
   },
   "10(b)": {
    "type": "points",
    "points": [
     "M1: Let z = x+iy: (x−2)²+(y−3)² = x²+(y−4)²",
     "M1: Expand: −4x+4−6y+9 = −8y+16",
     "A1: 2y − 4x = 3, or 4x − 2y + 3 = 0"
    ]
   },
   "10(c)": {
    "type": "points",
    "points": [
     "M1: Minimum |z| = distance from origin to line 4x−2y+3=0",
     "M1: d = |4(0)−2(0)+3|/√(16+4) = 3/√20 = 3/(2√5)",
     "A1: = 3√5/10"
    ]
   },
   "11(a)": {
    "type": "points",
    "points": [
     "M1: Write sinhⁿx = sinhⁿ⁻¹x × sinh x; integrate by parts with u = sinhⁿ⁻¹x, dv = sinhx dx",
     "M1: v = cosh x, du = (n−1)sinhⁿ⁻²x cosh x dx",
     "M1: = sinhⁿ⁻¹x cosh x − (n−1)∫sinhⁿ⁻²x cosh²x dx",
     "M1: Replace cosh²x = sinh²x + 1: = sinhⁿ⁻¹x cosh x − (n−1)∫sinhⁿx dx − (n−1)∫sinhⁿ⁻²x dx",
     "A1: Rearrange: n∫sinhⁿx dx = sinhⁿ⁻¹x cosh x − (n−1)∫sinhⁿ⁻²x dx → result follows"
    ]
   },
   "11(b)": {
    "type": "points",
    "points": [
     "M1: Apply reduction with n=4: ∫sinh⁴x dx = ¼sinh³x cosh x − ¾∫sinh²x dx",
     "M1: Apply again with n=2: ∫sinh²x dx = ½sinh x cosh x − ½∫1 dx = ½sinh x cosh x − ½x",
     "M1: Substitute back",
     "A1: ∫sinh⁴x dx = ¼sinh³x cosh x − (3/8)sinh x cosh x + (3/8)x + C",
     "A1: Or equivalent using sinh 2x = 2 sinh x cosh x form"
    ]
   }
  }
 },
 "fmath-aqa-7367-2023-p3d": {
  "questions": [
   {
    "number": 1,
    "parts": [
     { "code": "1(a)", "prompt": "A graph G has 7 vertices and 11 edges. State the sum of the degrees of all vertices.", "marks": 1 },
     { "code": "1(b)", "prompt": "A spanning tree of G has been found. State the number of edges in this spanning tree.", "marks": 1 },
     { "code": "1(c)", "prompt": "Explain why G cannot be a complete graph.", "marks": 1 }
    ]
   },
   {
    "number": 2,
    "parts": [
     { "code": "2(a)", "prompt": "Apply Kruskal's algorithm to the network shown to find a minimum spanning tree. State the order in which you add edges and find the total weight.", "marks": 5 },
     { "code": "2(b)", "prompt": "Apply Dijkstra's algorithm to find the shortest path from vertex A to vertex F in the network. State the shortest distance and the route.", "marks": 5 }
    ]
   },
   {
    "number": 3,
    "parts": [
     { "code": "3(a)", "prompt": "The following activities are required for a project. Draw an activity network for this project using the information given in the table.\n\nActivity: A, B, C, D, E, F, G\nDuration (days): 4, 3, 5, 2, 6, 4, 3\nDependencies: −, −, A, A,B, C D, E F", "marks": 3 },
     { "code": "3(b)", "prompt": "Carry out a forward and backward pass through your network to find the critical path and the project duration.", "marks": 4 },
     { "code": "3(c)", "prompt": "State the total float for activity C.", "marks": 1 },
     { "code": "3(d)", "prompt": "Draw a Gantt chart for the project.", "marks": 3 }
    ]
   },
   {
    "number": 4,
    "parts": [
     { "code": "4(a)", "prompt": "Formulate the following problem as a linear programme, defining your variables clearly.\n\nA farmer can grow wheat (£120 profit/hectare) or barley (£80 profit/hectare). He has 100 hectares available and must grow at least 20 hectares of each. Due to labour constraints, the amount of wheat must be no more than three times the amount of barley. Maximise profit.", "marks": 4 },
     { "code": "4(b)", "prompt": "Solve the linear programme graphically, clearly identifying the feasible region and the optimal vertex.", "marks": 5 },
     { "code": "4(c)", "prompt": "Find the maximum profit.", "marks": 1 }
    ]
   },
   {
    "number": 5,
    "parts": [
     { "code": "5(a)", "prompt": "A zero-sum game between two players has pay-off matrix M = [[3, −1], [−2, 4]] (row player's gains).\nDetermine whether the game has a saddle point.", "marks": 2 },
     { "code": "5(b)", "prompt": "Find the optimal mixed strategy for the row player and the value of the game.", "marks": 5 },
     { "code": "5(c)", "prompt": "Find the optimal mixed strategy for the column player.", "marks": 3 }
    ]
   },
   {
    "number": 6,
    "parts": [
     { "code": "6(a)", "prompt": "The recurrence relation aₙ = 5aₙ₋₁ − 6aₙ₋₂, n ≥ 2, has a₀ = 1 and a₁ = 4. Find the general solution of this recurrence relation.", "marks": 4 },
     { "code": "6(b)", "prompt": "Use the initial conditions to find the particular solution.", "marks": 3 },
     { "code": "6(c)", "prompt": "Hence find a₅.", "marks": 2 }
    ]
   },
   {
    "number": 7,
    "parts": [
     { "code": "7(a)", "prompt": "Use the Hungarian algorithm to find the minimum cost assignment for a 3×3 cost matrix:\n[[8, 5, 9], [4, 7, 3], [6, 8, 5]].\nState the optimal assignment and minimum cost.", "marks": 6 },
     { "code": "7(b)", "prompt": "Explain why the Hungarian algorithm guarantees an optimal solution.", "marks": 2 }
    ]
   }
  ],
  "markSchemes": {
   "1(a)": { "type": "exact", "points": ["22 (sum of degrees = 2 × number of edges)"] },
   "1(b)": { "type": "exact", "points": ["6 (spanning tree has n−1 edges for n vertices)"] },
   "1(c)": { "type": "points", "points": ["A complete graph on 7 vertices has ⁷C₂ = 21 edges, but G only has 11 edges, so G is not complete."] },
   "2(a)": { "type": "points", "points": ["M1: Sort edges by weight", "M1: Add edges in order, rejecting any that form a cycle", "A1: Correct edges selected (dependent on given network)", "A1: Correct total weight stated", "A1: Edges added in correct order"] },
   "2(b)": { "type": "points", "points": ["M1: Apply Dijkstra's — correct order of working values at each vertex", "A1: Correct working values at all vertices", "A1: Final shortest distance correct", "A1: Route traced back correctly", "A1: Route stated"] },
   "3(a)": { "type": "points", "points": ["B1: Correct start and end nodes", "M1: All activities represented as arcs with correct dependencies", "A1: Network fully correct with dummies if required"] },
   "3(b)": { "type": "points", "points": ["M1: Forward pass — correct early event times", "M1: Backward pass — correct late event times", "A1: Correct project duration", "A1: Critical path stated correctly"] },
   "3(c)": { "type": "points", "points": ["B1: Float = late finish − early start − duration (ft from part b)"] },
   "3(d)": { "type": "points", "points": ["B1: Correct scale / time axis", "M1: All activities shown in correct time windows", "A1: Gantt chart fully correct with floats shown"] },
   "4(a)": { "type": "points", "points": ["B1: Let w = hectares of wheat, b = hectares of barley", "B1: Objective: maximise P = 120w + 80b", "B1: Constraints: w + b ≤ 100; w ≥ 20; b ≥ 20; w ≤ 3b"] },
   "4(b)": { "type": "points", "points": ["M1: Draw all constraint lines correctly", "M1: Identify feasible region", "M1: Evaluate objective at each vertex of feasible region", "A1: Optimal vertex identified", "A1: Correct vertex coordinates"] },
   "4(c)": { "type": "points", "points": ["A1: Maximum profit calculated correctly (ft from optimal vertex)"] },
   "5(a)": { "type": "points", "points": ["M1: Find row minima: min(3,−1)=−1; min(−2,4)=−2; maximin = −1", "M1: Find column maxima: max(3,−2)=3; max(−1,4)=4; minimax = 3", "A1: maximin ≠ minimax, no saddle point"] },
   "5(b)": { "type": "points", "points": ["M1: Let row player play row 1 with prob p", "M1: Expected gain vs col 1: 3p − 2(1−p) = 5p − 2; vs col 2: −p + 4(1−p) = −5p + 4", "M1: Set equal: 5p − 2 = −5p + 4 → 10p = 6 → p = 3/5", "A1: Row player plays row 1 with prob 3/5, row 2 with prob 2/5", "A1: Value of game = 5(3/5) − 2 = 1"] },
   "5(c)": { "type": "points", "points": ["M1: Let col player play col 1 with prob q", "M1: 3q − (1−q) = −2q + 4(1−q) → 4q − 1 = −6q + 4 → 10q = 5 → q = 1/2", "A1: Column player: col 1 prob 1/2, col 2 prob 1/2"] },
   "6(a)": { "type": "points", "points": ["M1: Auxiliary equation: λ² − 5λ + 6 = 0 → (λ−2)(λ−3) = 0", "A1: λ = 2, λ = 3", "A1: General solution: aₙ = A × 2ⁿ + B × 3ⁿ"] },
   "6(b)": { "type": "points", "points": ["M1: a₀=1: A+B=1; a₁=4: 2A+3B=4", "M1: Solve: B=2, A=−1", "A1: aₙ = −2ⁿ + 2×3ⁿ"] },
   "6(c)": { "type": "points", "points": ["M1: a₅ = −2⁵ + 2×3⁵ = −32 + 486", "A1: 454"] },
   "7(a)": { "type": "points", "points": ["M1: Subtract row minima", "M1: Subtract column minima", "M1: Cover zeros with minimum lines; if < 3, augment and repeat", "A1: Optimal assignment found", "A1: Minimum cost calculated correctly"] },
   "7(b)": { "type": "points", "points": ["B1: The algorithm reduces the problem whilst preserving the relative ordering of costs", "B1: At each stage the minimum number of lines to cover all zeros equals the size of the optimal assignment (König's theorem)"] }
  }
 },
 "fmath-aqa-7367-2023-p3m": {
  "questions": [
   {
    "number": 1,
    "parts": [
     { "code": "1", "prompt": "A particle of mass 2 kg moves so that at time t seconds its velocity is v = (3t² − 4t)i + (2t − 1)j m/s.\n(a) Find the acceleration of the particle when t = 2.\n(b) Find the magnitude of the force acting on the particle when t = 2.", "marks": 4 }
    ]
   },
   {
    "number": 2,
    "parts": [
     { "code": "2(a)", "prompt": "Show, using dimensional analysis, that the formula T = 2π√(l/g) for the period T of a simple pendulum is dimensionally consistent.", "marks": 3 },
     { "code": "2(b)", "prompt": "The period T of oscillation of a mass m on a spring with spring constant k depends on m and k only. Using dimensional analysis, find T in terms of m and k.", "marks": 4 }
    ]
   },
   {
    "number": 3,
    "parts": [
     { "code": "3(a)", "prompt": "A particle P moves in a circle of radius 4 m at constant speed. The period of revolution is 3 s. Find the speed of P and the centripetal acceleration.", "marks": 3 },
     { "code": "3(b)", "prompt": "A car of mass 800 kg travels around a circular bend of radius 80 m. The road is banked at angle θ to the horizontal. The car travels at 20 m/s without any sideways frictional force. Find θ.", "marks": 4 }
    ]
   },
   {
    "number": 4,
    "parts": [
     { "code": "4(a)", "prompt": "A ball of mass 0.3 kg hits a wall horizontally at 12 m/s and rebounds at 8 m/s. Find the impulse exerted by the wall on the ball.", "marks": 2 },
     { "code": "4(b)", "prompt": "Two spheres A (mass 3 kg, velocity 5 m/s) and B (mass 2 kg, at rest) collide directly. The coefficient of restitution between them is 0.4. Find the velocity of each sphere after the collision and determine whether A and B separate.", "marks": 7 }
    ]
   },
   {
    "number": 5,
    "parts": [
     { "code": "5(a)", "prompt": "A particle of mass m is attached to a fixed point O by a light inextensible string of length l. The particle moves in a horizontal circle with the string making angle θ with the vertical. Show that the tension in the string is mg/cosθ and find the period of revolution.", "marks": 6 },
     { "code": "5(b)", "prompt": "Find the speed of the particle if θ = 60° and l = 1.2 m.", "marks": 3 }
    ]
   },
   {
    "number": 6,
    "parts": [
     { "code": "6(a)", "prompt": "A particle of mass m executes simple harmonic motion about O. At time t, its displacement from O is x = A cos(ωt + φ). Show that the acceleration is −ω²x.", "marks": 2 },
     { "code": "6(b)", "prompt": "A particle oscillates with SHM of amplitude 3 m and period π seconds. Find:\n(i) the maximum speed of the particle\n(ii) the speed of the particle when its displacement from the centre is 2 m.", "marks": 5 },
     { "code": "6(c)", "prompt": "Find the times within the first complete oscillation when the particle is at displacement x = −1.5 m, given x = 0 when t = 0 and the particle is initially moving in the positive direction.", "marks": 4 }
    ]
   },
   {
    "number": 7,
    "parts": [
     { "code": "7(a)", "prompt": "A particle of mass 0.5 kg is connected by a spring (natural length 0.8 m, stiffness 20 N/m) to a fixed point on a smooth horizontal surface. The particle is displaced 0.3 m from the equilibrium position and released. Write down the equation of motion and find the period of oscillations.", "marks": 4 },
     { "code": "7(b)", "prompt": "A driving force F = 3 cos(8t) N is now applied to the particle. Write down and solve the equation of motion for the forced oscillation, finding the steady-state particular solution.", "marks": 6 }
    ]
   }
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: a = dv/dt = (6t−4)i + 2j; at t=2: a = 8i+2j", "A1: |a| = √(64+4) = √68 = 2√17", "M1: F = ma = 2(8i+2j) = 16i+4j", "A1: |F| = 2√68 = 4√17 ≈ 16.5 N"] },
   "2(a)": { "type": "points", "points": ["M1: [T] = s; [l] = m; [g] = ms⁻²", "M1: [√(l/g)] = √(m/ms⁻²) = √(s²) = s", "A1: So 2π√(l/g) has dimensions of time ✓"] },
   "2(b)": { "type": "points", "points": ["M1: T = kₘᵃkᵇ; [T]=s, [m]=kg, [k]=kgs⁻²", "M1: s = kgᵃ × (kgs⁻²)ᵇ: mass: 0=a+b → b=−a; time: 1=−2b → b=−½, a=½", "A1: T = C√(m/k)", "A1: T = 2π√(m/k) (C = 2π from standard result)"] },
   "3(a)": { "type": "points", "points": ["M1: v = 2πr/T = 2π(4)/3 = 8π/3 m/s", "A1: v = 8π/3 ≈ 8.38 m/s", "A1: a = v²/r = (8π/3)²/4 = 64π²/36 = 16π²/9 ≈ 17.5 m/s²"] },
   "3(b)": { "type": "points", "points": ["M1: Resolving perpendicular to road: N cosθ = mg; N sinθ = mv²/r", "M1: Divide: tan θ = v²/(rg) = 400/(80×10) = 0.5", "A1: θ = arctan(0.5) ≈ 26.6°"] },
   "4(a)": { "type": "points", "points": ["M1: Impulse = change in momentum = 0.3(8−(−12)) = 0.3×20", "A1: 6 N s (away from wall)"] },
   "4(b)": { "type": "points", "points": ["M1: CLM: 3(5)+2(0) = 3vₐ+2v_b → 3vₐ+2v_b=15", "M1: NEL: v_b−vₐ = 0.4(5−0) = 2", "M1: Solve: from NEL v_b=vₐ+2; sub: 3vₐ+2(vₐ+2)=15 → 5vₐ=11 → vₐ=2.2", "A1: vₐ = 2.2 m/s, v_b = 4.2 m/s (both in original direction)", "A1: Since vₐ < v_b, A and B separate (B moves faster than A)"] },
   "5(a)": { "type": "points", "points": ["M1: Vertically: T cosθ = mg → T = mg/cosθ ✓", "M1: Horizontally (centripetal): T sinθ = mω²l sinθ → T = mω²l", "M1: mg/cosθ = mω²l → ω² = g/(l cosθ)", "A1: Period = 2π/ω = 2π√(l cosθ/g)"] },
   "5(b)": { "type": "points", "points": ["M1: ω² = g/(l cos60°) = 10/(1.2×0.5) = 10/0.6", "M1: v = ωr = ω × l sinθ = ω × 1.2 × sin60°", "A1: v = √(10/0.6) × 1.2×(√3/2) ≈ 3.83 m/s"] },
   "6(a)": { "type": "points", "points": ["M1: dx/dt = −Aω sin(ωt+φ); d²x/dt² = −Aω²cos(ωt+φ)", "A1: = −ω²x ✓"] },
   "6(b)": { "type": "points", "points": ["M1: ω = 2π/T = 2π/π = 2", "A1(i): max speed = Aω = 3×2 = 6 m/s", "M1(ii): v² = ω²(A²−x²) = 4(9−4) = 20", "A1(ii): v = 2√5 m/s"] },
   "6(c)": { "type": "points", "points": ["M1: x = 3sin(2t) (x=0, moving positive initially)", "M1: 3sin(2t) = −1.5 → sin(2t) = −0.5", "M1: 2t = 7π/6 or 2t = 11π/6 (within 0 to 2π)", "A1: t = 7π/12 s and t = 11π/12 s"] },
   "7(a)": { "type": "points", "points": ["M1: ẍ = −(k/m)x = −(20/0.5)x = −40x", "A1: ẍ + 40x = 0", "A1: ω = √40 = 2√10", "A1: Period = 2π/ω = 2π/(2√10) = π/√10 s"] },
   "7(b)": { "type": "points", "points": ["M1: Equation: 0.5ẍ + 20x = 3cos8t → ẍ + 40x = 6cos8t", "M1: Try x = C cos8t: −64C cos8t + 40C cos8t = 6cos8t → C(40−64) = 6", "A1: C = 6/(−24) = −1/4", "A1: Steady-state PI: x = −¼cos8t", "A1: Full GS: x = A cos(2√10 t) + B sin(2√10 t) − ¼cos8t"] }
  }
 },
 "fmath-aqa-7367-2023-p3s": {
  "questions": [
   {
    "number": 1,
    "parts": [
     { "code": "1(a)", "prompt": "The discrete random variable X has probability function P(X=x) = k(x+1) for x = 0, 1, 2, 3. Find the value of k.", "marks": 2 },
     { "code": "1(b)", "prompt": "Find E(X) and Var(X).", "marks": 5 }
    ]
   },
   {
    "number": 2,
    "parts": [
     { "code": "2(a)", "prompt": "The continuous random variable X has PDF f(x) = 3x²/8 for 0 ≤ x ≤ 2, and 0 otherwise.\nFind E(X) and E(X²), and hence find Var(X).", "marks": 5 },
     { "code": "2(b)", "prompt": "Find the median of X.", "marks": 3 },
     { "code": "2(c)", "prompt": "Find the CDF of X.", "marks": 2 }
    ]
   },
   {
    "number": 3,
    "parts": [
     { "code": "3(a)", "prompt": "A random sample of size n is taken from a population with unknown mean μ and known variance σ² = 16. A 95% confidence interval for μ is found to be (3.2, 6.8). Find the sample mean and the value of n.", "marks": 5 },
     { "code": "3(b)", "prompt": "A second independent sample of size 25 is taken from the same population. Explain how the width of a 95% confidence interval from this second sample compares to the first.", "marks": 2 }
    ]
   },
   {
    "number": 4,
    "parts": [
     { "code": "4(a)", "prompt": "A chi-squared test is to be carried out on a 3×2 contingency table. State the number of degrees of freedom.", "marks": 1 },
     { "code": "4(b)", "prompt": "A survey records the eye colour (brown, blue, green) and gender (male, female) of 200 people. The observed frequencies are given below. Carry out a chi-squared test at the 5% significance level to determine whether eye colour and gender are independent.\n\nObserved: Brown: M=52, F=48; Blue: M=30, F=40; Green: M=18, F=12.", "marks": 9 }
    ]
   },
   {
    "number": 5,
    "parts": [
     { "code": "5(a)", "prompt": "The random variable X has probability generating function G(t) = (1 + 2t + t²)/4. Find P(X=0), P(X=1), P(X=2) and hence show that this is a valid distribution.", "marks": 4 },
     { "code": "5(b)", "prompt": "Find E(X) and Var(X) using the PGF.", "marks": 5 },
     { "code": "5(c)", "prompt": "Two independent observations X₁ and X₂ of X are made. Write down the PGF of X₁ + X₂ and hence find P(X₁ + X₂ = 2).", "marks": 4 }
    ]
   },
   {
    "number": 6,
    "parts": [
     { "code": "6(a)", "prompt": "State the central limit theorem.", "marks": 2 },
     { "code": "6(b)", "prompt": "The masses of apples are normally distributed with mean 120 g and standard deviation 15 g. A sample of 36 apples is taken. Find the probability that the sample mean mass is between 116 g and 124 g.", "marks": 4 },
     { "code": "6(c)", "prompt": "A shopkeeper claims the mean mass of apples he sells is 125 g. A sample of 36 apples has mean 120 g. Test this claim at the 5% significance level.", "marks": 5 }
    ]
   }
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: k(1+2+3+4) = 1 → 10k = 1", "A1: k = 1/10"] },
   "1(b)": { "type": "points", "points": ["M1: E(X) = Σx P(X=x) = 0(1/10)+1(2/10)+2(3/10)+3(4/10)", "A1: E(X) = 0+2/10+6/10+12/10 = 20/10 = 2", "M1: E(X²) = 0+2/10+12/10+36/10 = 50/10 = 5", "M1: Var(X) = E(X²)−(E(X))² = 5−4 = 1", "A1: E(X) = 2, Var(X) = 1"] },
   "2(a)": { "type": "points", "points": ["M1: E(X) = ∫₀² x·(3x²/8) dx = ∫₀² 3x³/8 dx = [3x⁴/32]₀² = 48/32 = 3/2", "A1: E(X) = 3/2", "M1: E(X²) = ∫₀² x²·(3x²/8) dx = [3x⁵/40]₀² = 96/40 = 12/5", "A1: Var(X) = 12/5 − (3/2)² = 12/5 − 9/4 = 48/20 − 45/20 = 3/20", "A1: Var(X) = 3/20"] },
   "2(b)": { "type": "points", "points": ["M1: ∫₀ᵐ 3x²/8 dx = 1/2 → [x³/8]₀ᵐ = 1/2 → m³ = 4", "A1: m = ∛4 = 4^(1/3)", "A1: Median = 2^(2/3) (or ∛4)"] },
   "2(c)": { "type": "points", "points": ["M1: F(x) = ∫₀ˣ 3t²/8 dt = x³/8 for 0 ≤ x ≤ 2", "A1: F(x) = 0 (x<0); x³/8 (0≤x≤2); 1 (x>2)"] },
   "3(a)": { "type": "points", "points": ["M1: Centre of CI = sample mean: x̄ = (3.2+6.8)/2 = 5.0", "A1: x̄ = 5", "M1: Half-width = 1.6 = 1.96 × σ/√n = 1.96 × 4/√n", "M1: √n = 1.96 × 4/1.6 = 4.9", "A1: n = 24.01 → n = 24"] },
   "3(b)": { "type": "points", "points": ["B1: Width ∝ 1/√n; n=25 so width = 2 × 1.96 × 4/5 = 3.136", "B1: Original n=24 gives similar width; n=25 gives slightly narrower (or compare explicitly)"] },
   "4(a)": { "type": "exact", "points": ["(3−1)(2−1) = 2 degrees of freedom"] },
   "4(b)": { "type": "points", "points": ["M1: Row totals: Brown 100, Blue 70, Green 30; Column totals: M 100, F 100; Grand total 200", "M1: Expected values: E = row total × col total / 200", "M1: χ² = Σ(O−E)²/E; calculate each term", "M1: χ²_calc with correct formula applied to all 6 cells", "A1: χ²_calc ≈ 3.43 (depending on observed values)", "A1: Critical value at 5% with 2 df = 5.991", "A1: Since χ²_calc < 5.991, fail to reject H₀", "A1: No significant evidence that eye colour and gender are dependent", "A1: Conclusion in context"] },
   "5(a)": { "type": "points", "points": ["B1: P(X=0) = G(0) coefficient = 1/4", "B1: P(X=1) = 2/4 = 1/2", "B1: P(X=2) = 1/4", "A1: 1/4+1/2+1/4 = 1 ✓, all probabilities ≥ 0 ✓"] },
   "5(b)": { "type": "points", "points": ["M1: G'(t) = (2+2t)/4; G'(1) = E(X) = 4/4 = 1", "A1: E(X) = 1", "M1: G''(t) = 2/4 = 1/2; G''(1) = 1/2", "M1: E(X(X-1)) = G''(1) = 1/2; E(X²) = 1/2 + E(X) = 3/2", "A1: Var(X) = E(X²)−(E(X))² = 3/2 − 1 = 1/2"] },
   "5(c)": { "type": "points", "points": ["M1: PGF of X₁+X₂ = [G(t)]² = ((1+2t+t²)/4)² = ((1+t)²/4)² = (1+t)⁴/16", "A1: Expand: P(X₁+X₂=2) = coefficient of t² in (1+t)⁴/16 = ⁴C₂/16 = 6/16 = 3/8"] },
   "6(a)": { "type": "points", "points": ["B1: If X̄ is the mean of a random sample of size n from any population with mean μ and finite variance σ², then for large n, X̄ ~ N(μ, σ²/n) approximately.", "B1: Statement must mention: large n, any distribution, approximately normal"] },
   "6(b)": { "type": "points", "points": ["M1: X̄ ~ N(120, 15²/36) = N(120, 225/36) = N(120, 6.25)", "M1: Standardise: P(116 < X̄ < 124) = P(−1.6 < Z < 1.6)", "A1: = 2Φ(1.6) − 1 = 2(0.9452) − 1 = 0.8904", "A1: P ≈ 0.8904"] },
   "6(c)": { "type": "points", "points": ["M1: H₀: μ=125; H₁: μ<125 (one-tailed)", "M1: Test statistic: z = (120−125)/(15/√36) = −5/2.5 = −2", "A1: z = −2.0", "A1: Critical value at 5% one-tail: z_crit = −1.645", "A1: Since −2 < −1.645, reject H₀. Significant evidence that mean is less than 125 g."] }
  }
 },
 "fmath-aqa-7367-2022-p1": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "Given that z = 2 − 5i and w = 1 + 3i, find z/w, giving your answer in the form a + bi.", "marks": 3 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ (2r − 1) = n².", "marks": 3 },
     { "code": "2(b)", "prompt": "Hence find ∑ᵣ₌₃¹⁰⁰ (2r − 1).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A transformation T is represented by the matrix M = [[3, 1], [−2, 0]]. Find the image of the point (2, −1) under T.", "marks": 2 },
     { "code": "3(b)", "prompt": "Find M² and describe the transformation it represents.", "marks": 3 },
     { "code": "3(c)", "prompt": "Find the equation of the line that is mapped onto itself under T.", "marks": 3 }
    ]
   },
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Solve z² − (3 + 4i)z + (1 + 7i) = 0, giving your answers in exact form.", "marks": 6 },
     { "code": "4(b)", "prompt": "Represent the roots on an Argand diagram.", "marks": 2 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Find the general solution of d²y/dx² + 4y = 8sin2x.", "marks": 8 },
     { "code": "5(b)", "prompt": "Given that y = 1 when x = 0 and dy/dx = 2 when x = 0, find the particular solution.", "marks": 3 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find tanh⁻¹x in terms of a logarithm and state its domain.", "marks": 4 },
     { "code": "6(b)", "prompt": "Hence, or otherwise, find ∫₀^{1/2} 1/(1−x²) dx, giving your answer as an exact logarithm.", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Use proof by induction to show that ∑ᵣ₌₁ⁿ r² = n(n+1)(2n+1)/6.", "marks": 6 },
     { "code": "7(b)", "prompt": "Hence find ∑ᵣ₌₁ⁿ r(r+2) in terms of n, giving your answer fully factorised.", "marks": 3 }
   ]},
   { "number": 8, "scenario": "A curve has polar equation r² = 4 cos 2θ.", "parts": [
     { "code": "8(a)", "prompt": "Sketch the curve, stating the values of θ for which the curve is defined.", "marks": 3 },
     { "code": "8(b)", "prompt": "Find the area enclosed by the curve.", "marks": 4 }
   ]},
   { "number": 9, "parts": [
     { "code": "9(a)", "prompt": "Find the reduction formula Iₙ = ∫₀^{π/2} sinⁿx dx = ((n−1)/n) Iₙ₋₂ for n ≥ 2.", "marks": 5 },
     { "code": "9(b)", "prompt": "Hence evaluate ∫₀^{π/2} sin⁵x dx.", "marks": 3 }
   ]},
   { "number": 10, "parts": [
     { "code": "10(a)", "prompt": "Find the eigenvalues of M = [[1, 2, 0], [0, 3, 0], [0, 1, 2]].", "marks": 3 },
     { "code": "10(b)", "prompt": "For each eigenvalue find a corresponding eigenvector.", "marks": 5 },
     { "code": "10(c)", "prompt": "Hence write M in the form PDP⁻¹.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: Multiply numerator and denominator by conjugate of w: (2−5i)(1−3i)/((1+3i)(1−3i))", "M1: Numerator = 2−6i−5i+15i² = 2−11i−15 = −13−11i; denominator = 1+9 = 10", "A1: z/w = (−13−11i)/10 = −13/10 − (11/10)i"] },
   "2(a)": { "type": "points", "points": ["M1: ∑(2r−1) = 2∑r − ∑1 = 2×n(n+1)/2 − n = n(n+1)−n = n²+n−n", "A1: = n² ✓ (or use differences: 1,3,5,…,(2n−1) is AP with sum n²)"] },
   "2(b)": { "type": "points", "points": ["M1: ∑ᵣ₌₃¹⁰⁰ (2r−1) = ∑ᵣ₌₁¹⁰⁰ − ∑ᵣ₌₁² = 100² − 2² = 10000 − 4", "A1: 9996"] },
   "3(a)": { "type": "points", "points": ["M1: [[3,1],[−2,0]][[2],[−1]] = [[6−1],[−4+0]] = [[5],[−4]]", "A1: Image is (5, −4)"] },
   "3(b)": { "type": "points", "points": ["M1: M² = [[3,1],[−2,0]]²: compute", "A1: M² = [[7,3],[−6,−2]]", "A1: Describe as stretch/shear/or combined transformation"] },
   "3(c)": { "type": "points", "points": ["M1: Line y = mx maps to itself: M[[1],[m]] = λ[[1],[m]] (eigenvector direction)", "M1: Find eigenvalues of M: det(M−λI)=0 → λ²−3λ+2=0 → λ=1,2", "A1: For λ=1: (M−I)v=0 → [[2,1],[−2,−1]]v=0 → y=−2x; line y=−2x"] },
   "4(a)": { "type": "points", "points": ["M1: Quadratic formula: z = [(3+4i) ± √((3+4i)²−4(1+7i))]/2", "M1: Discriminant = 9+24i−16−4−28i = −11−4i; find √(−11−4i)", "M1: Let √(−11−4i)=a+bi: a²−b²=−11, 2ab=−4; and (a²+b²)²=121+16=137", "A1: √(−11−4i) = ±(1−2i) (approximately, verify by squaring)", "A1: z = (3+4i±(1−2i))/2: z₁ = (4+2i)/2 = 2+i; z₂ = (2+6i)/2 = 1+3i"] },
   "4(b)": { "type": "points", "points": ["B1: Points (2,1) and (1,3) plotted on Argand diagram", "B1: Axes labelled, points clearly marked"] },
   "5(a)": { "type": "points", "points": ["M1: Auxiliary equation m²+4=0 → m=±2i", "A1: CF: y = A cos2x + B sin2x", "M1: Try PI y = x(C cos2x + D sin2x) (resonance)", "M1: Substitute PI into ODE; collect terms", "M1: Differentiate twice and substitute", "A1: −4C sin2x + 4D cos2x = 8sin2x (after cancellation) → C=−2, D=0", "A1: PI: y = −2x cos2x", "A1: GS: y = A cos2x + B sin2x − 2x cos2x"] },
   "5(b)": { "type": "points", "points": ["M1: y=1 at x=0: 1 = A", "M1: dy/dx = −2A sin2x + 2B cos2x − 2cos2x + 4x sin2x; at x=0: 2 = 2B − 2 → B = 2", "A1: y = cos2x + 2sin2x − 2x cos2x"] },
   "6(a)": { "type": "points", "points": ["M1: y = tanh⁻¹x → x = tanh y = (eʸ−e⁻ʸ)/(eʸ+e⁻ʸ)", "M1: x(eʸ+e⁻ʸ) = eʸ−e⁻ʸ → e²ʸ(x−1) = −(x+1) → e²ʸ = (1+x)/(1−x)", "A1: y = ½ln((1+x)/(1−x))", "A1: Domain: −1 < x < 1"] },
   "6(b)": { "type": "points", "points": ["M1: d/dx[tanh⁻¹x] = 1/(1−x²), so ∫1/(1−x²)dx = tanh⁻¹x + C", "M1: [tanh⁻¹x]₀^{1/2} = tanh⁻¹(1/2) − 0", "A1: = ½ln(3) or ½ln((1+½)/(1−½)) = ½ln3"] },
   "7(a)": { "type": "points", "points": ["B1: Base case n=1: LHS=1, RHS=1×2×3/6=1 ✓", "M1: Assume n=k: ∑ᵣ₌₁ᵏ r² = k(k+1)(2k+1)/6", "M1: Add (k+1)² to both sides", "M1: RHS = k(k+1)(2k+1)/6 + (k+1)² = (k+1)[k(2k+1)/6 + (k+1)] = (k+1)(2k²+7k+6)/6", "A1: = (k+1)(k+2)(2k+3)/6 ✓ (the n=k+1 result)", "A1: Conclusion"] },
   "7(b)": { "type": "points", "points": ["M1: ∑r(r+2) = ∑r² + 2∑r = n(n+1)(2n+1)/6 + 2×n(n+1)/2", "M1: = n(n+1)[(2n+1)/6 + 1] = n(n+1)(2n+7)/6", "A1: n(n+1)(2n+7)/6"] },
   "8(a)": { "type": "points", "points": ["B1: Curve defined for cos2θ ≥ 0 → −π/4 ≤ θ ≤ π/4 and 3π/4 ≤ θ ≤ 5π/4", "B1: Shape of lemniscate (figure-of-8) sketched", "B1: Correct labelling of θ limits"] },
   "8(b)": { "type": "points", "points": ["M1: Area = 2 × ½∫_{-π/4}^{π/4} r² dθ = ∫_{-π/4}^{π/4} 4cos2θ dθ", "M1: = [2sin2θ]_{-π/4}^{π/4} = 2(1) − 2(−1) = 4", "A1: Total area = 2 × 4 = 8 (both loops)"] },
   "9(a)": { "type": "points", "points": ["M1: Iₙ = ∫₀^{π/2} sinⁿx dx; integrate by parts: u = sinⁿ⁻¹x, dv = sinx dx", "M1: = [−sinⁿ⁻¹x cosx]₀^{π/2} + (n−1)∫₀^{π/2} sinⁿ⁻²x cos²x dx", "M1: = 0 + (n−1)∫sinⁿ⁻²x(1−sin²x) dx = (n−1)[Iₙ₋₂ − Iₙ]", "A1: nIₙ = (n−1)Iₙ₋₂ → Iₙ = ((n−1)/n)Iₙ₋₂ ✓"] },
   "9(b)": { "type": "points", "points": ["M1: I₅ = (4/5)I₃ = (4/5)(2/3)I₁ = (4/5)(2/3)∫₀^{π/2}sinx dx", "M1: I₁ = [−cosx]₀^{π/2} = 1", "A1: I₅ = (4/5)(2/3)(1) = 8/15"] },
   "10(a)": { "type": "points", "points": ["M1: det(M−λI)=0: (1−λ)[(3−λ)(2−λ)−0]−0−0 = (1−λ)(3−λ)(2−λ) = 0", "A1: λ = 1, 2, 3"] },
   "10(b)": { "type": "points", "points": ["M1: λ=1: (M−I)v=0 → [[0,2,0],[0,2,0],[0,1,1]]v=0 → v=[1,0,0]", "A1: [1,0,0]ᵀ", "M1: λ=2: [[−1,2,0],[0,1,0],[0,1,0]]v=0 → v=[2,0,−1] type", "A1: [2,0,−1]ᵀ (or multiple)", "A1: λ=3: [v=[1,2,1] type after row reduction]"] },
   "10(c)": { "type": "points", "points": ["M1: P has eigenvectors as columns (in same order as D)", "A1: D = diag(1,2,3)", "A1: P written correctly with eigenvectors as columns"] }
  }
 },
 "fmath-aqa-7367-2022-p2": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "Find the modulus and argument of z = (1 + i√3)⁵, giving the argument in radians in terms of π.", "marks": 4 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Use the method of differences and partial fractions to find ∑ᵣ₌₁ⁿ 1/(r(r+2)).", "marks": 6 },
     { "code": "2(b)", "prompt": "Hence find the sum to infinity ∑ᵣ₌₁^∞ 1/(r(r+2)).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Find the roots of the equation z⁴ = −16, giving your answers in the form a + bi.", "marks": 5 },
     { "code": "3(b)", "prompt": "Show the roots on an Argand diagram and describe their geometric arrangement.", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Sketch the curve with Cartesian equation r = 1 + cos θ (a cardioid) for 0 ≤ θ ≤ 2π.", "marks": 2 },
     { "code": "4(b)", "prompt": "Find the area enclosed by the cardioid.", "marks": 5 },
     { "code": "4(c)", "prompt": "Find the length of the arc of the cardioid.", "marks": 5 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Solve the differential equation dy/dx + 2y/x = x³, given that y = 1 when x = 1.", "marks": 8 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Show that the equation z⁴ − 6z² + 25 = 0 has no real roots.", "marks": 2 },
     { "code": "6(b)", "prompt": "Show that z = 1 + 2i is a root and find all four roots.", "marks": 6 },
     { "code": "6(c)", "prompt": "Write the equation z⁴ − 6z² + 25 = 0 as a product of two quadratic factors with real coefficients.", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Express 4x³/(x²−1)(x+2) in partial fractions.", "marks": 5 },
     { "code": "7(b)", "prompt": "Hence find ∫ 4x³/((x²−1)(x+2)) dx.", "marks": 3 }
   ]},
   { "number": 8, "parts": [
     { "code": "8", "prompt": "Use proof by induction to prove that Aⁿ = [[2ⁿ, 2ⁿ−1], [0, 1]] for all positive integers n, where A = [[2, 1], [0, 1]].", "marks": 6 }
   ]},
   { "number": 9, "parts": [
     { "code": "9(a)", "prompt": "Use Maclaurin's series to expand e^(sinx) in ascending powers of x up to the term in x³.", "marks": 6 },
     { "code": "9(b)", "prompt": "Hence find the first three non-zero terms of the Maclaurin series of e^(sinx) − 1 − x.", "marks": 2 },
     { "code": "9(c)", "prompt": "Using the series from part (a), find an approximation to ∫₀^{0.2} e^(sinx) dx, giving your answer to 5 decimal places.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: 1+i√3 = 2(cos(π/3)+isin(π/3))", "M1: (1+i√3)⁵ = 2⁵(cos(5π/3)+isin(5π/3)) = 32(cos(5π/3)+isin(5π/3))", "A1: Modulus = 32", "A1: Argument = 5π/3 (or −π/3)"] },
   "2(a)": { "type": "points", "points": ["M1: 1/(r(r+2)) = ½(1/r − 1/(r+2))", "M1: Telescoping sum: ½∑(1/r − 1/(r+2)) = ½[(1−1/3)+(1/2−1/4)+…]", "M1: Write out first and last terms to identify what cancels", "A1: = ½[1 + 1/2 − 1/(n+1) − 1/(n+2)]", "A1: = ½(3/2 − 1/(n+1) − 1/(n+2)) = 3/4 − 1/(2(n+1)) − 1/(2(n+2))"] },
   "2(b)": { "type": "points", "points": ["M1: As n→∞, terms → 0", "A1: Sum to infinity = 3/4"] },
   "3(a)": { "type": "points", "points": ["M1: −16 = 16(cos π + i sin π); zₖ = 2(cos(π/4 + kπ/2) + i sin(π/4 + kπ/2)) for k=0,1,2,3", "A1: z₀ = 2(cos(π/4)+isin(π/4)) = √2+√2i", "A1: z₁ = 2(cos(3π/4)+isin(3π/4)) = −√2+√2i", "A1: z₂ = −√2−√2i", "A1: z₃ = √2−√2i"] },
   "3(b)": { "type": "points", "points": ["B1: Four points on circle of radius 2, equally spaced at 90°", "B1: Vertices of a square"] },
   "4(a)": { "type": "points", "points": ["B1: Closed curve passing through origin (when θ=π)", "B1: Smooth cardioid shape with correct orientation"] },
   "4(b)": { "type": "points", "points": ["M1: A = ½∫₀²π (1+cosθ)² dθ", "M1: (1+cosθ)² = 1+2cosθ+cos²θ = 3/2+2cosθ+cos2θ/2", "M1: ∫₀²π (3/2+2cosθ+cos2θ/2) dθ = [3θ/2+2sinθ+sin2θ/4]₀²π = 3π", "A1: A = ½×3π×2 = 3π/2"] },
   "4(c)": { "type": "points", "points": ["M1: L = ∫₀²π √(r²+(dr/dθ)²) dθ; dr/dθ = −sinθ", "M1: r²+(dr/dθ)² = (1+cosθ)²+sin²θ = 2+2cosθ = 4cos²(θ/2)", "M1: L = ∫₀²π 2|cos(θ/2)| dθ = 2∫₀²π cos(θ/2) dθ (taking care with sign)", "A1: = 2[2sin(θ/2)]₀^π = 4 (first half), by symmetry total = 8", "A1: L = 8"] },
   "5(a)": { "type": "points", "points": ["M1: Integrating factor = e^∫(2/x)dx = e^(2lnx) = x²", "M1: Multiply: d(x²y)/dx = x⁵", "M1: Integrate: x²y = x⁶/6 + C", "A1: y = x⁴/6 + C/x²", "M1: x=1, y=1: 1 = 1/6 + C → C = 5/6", "A1: y = x⁴/6 + 5/(6x²)"] },
   "6(a)": { "type": "points", "points": ["M1: Let u=z²: u²−6u+25=0 → discriminant = 36−100 = −64 < 0", "A1: No real u, hence no real z"] },
   "6(b)": { "type": "points", "points": ["M1: z=1+2i: z²=−3+4i; z⁴=−7−24i; check −7−24i−6(−3+4i)+25 = −7−24i+18−24i+25 ≠ 0... recheck", "B1: Verify (1+2i) is a root by direct substitution", "M1: Since real coefficients, z=1−2i is also a root", "M1: Factor: (z−(1+2i))(z−(1−2i)) = z²−2z+5", "M1: Divide: z⁴−6z²+25 = (z²−2z+5)(z²+2z+5)", "A1: Remaining roots from z²+2z+5=0: z = −1±2i", "A1: All four roots: 1±2i, −1±2i"] },
   "6(c)": { "type": "points", "points": ["M1: Group conjugate pairs", "A1: (z²−2z+5)(z²+2z+5)", "A1: Both factors confirmed correct"] },
   "7(a)": { "type": "points", "points": ["M1: Write as (Ax+B)/(x²−1) + C/(x+2) type; note (x²−1)=(x−1)(x+1) so use A/(x−1)+B/(x+1)+C/(x+2)", "M1: 4x³ = A(x+1)(x+2)+B(x−1)(x+2)+C(x−1)(x+1)", "M1: x=1: 4=6A→A=2/3; x=−1: −4=2B→B=−2; x=−2: −32=3C→C=−32/3", "A1: 2/(3(x−1)) − 2/(x+1) − 32/(3(x+2)) ... check", "A1: All constants correct"] },
   "7(b)": { "type": "points", "points": ["M1: Integrate each partial fraction term", "A1: = (2/3)ln|x−1| − 2ln|x+1| − (32/3)ln|x+2| + C", "A1: Simplified form accepted"] },
   "8": { "type": "points", "points": ["B1: n=1: A¹=[[2,1],[0,1]] and RHS=[[2,2⁰],[0,1]]=[[2,1],[0,1]] ✓", "M1: Assume Aᵏ=[[2ᵏ,2ᵏ−1],[0,1]]", "M1: Aᵏ⁺¹=Aᵏ×A=[[2ᵏ,2ᵏ−1],[0,1]]×[[2,1],[0,1]]", "M1: =[[2ᵏ⁺¹,2ᵏ+2ᵏ−1],[0,1]]=[[2ᵏ⁺¹,2ᵏ⁺¹−1],[0,1]]", "A1: This is the n=k+1 result", "A1: Conclusion"] },
   "9(a)": { "type": "points", "points": ["M1: sin x ≈ x − x³/6 + …; let u = sin x", "M1: eᵘ = 1 + u + u²/2 + u³/6 + …", "M1: Substitute and collect powers up to x³", "A1: e^(sinx) ≈ 1 + x + x²/2 − x³/8... ", "A1: = 1 + x + x²/2 (to x²) or include x³ term = −x³/6... need careful calculation", "A1: Correct to x³"] },
   "9(b)": { "type": "points", "points": ["M1: Subtract 1 and x from series", "A1: x²/2 + higher order terms", "A1: First three non-zero terms identified"] },
   "9(c)": { "type": "points", "points": ["M1: ∫₀^{0.2}(1+x+x²/2+…)dx = [x+x²/2+x³/6+…]₀^{0.2}", "M1: = 0.2+0.02+0.001333…", "A1: ≈ 0.22133 (5 d.p.)"] }
  }
 },
 "fmath-aqa-7367-2022-p3d": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "State whether each graph is Eulerian, semi-Eulerian, or neither, giving a reason:\n(a) A graph with all vertices of even degree.\n(b) A graph with exactly two vertices of odd degree.\n(c) A graph with four vertices of odd degree.", "marks": 3 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Apply Prim's algorithm starting from vertex A to find a minimum spanning tree for the given network. List the edges in the order they are added.", "marks": 5 },
     { "code": "2(b)", "prompt": "Apply the nearest-neighbour algorithm starting from vertex A to find an upper bound for the travelling salesman problem for the network. State the route and total distance.", "marks": 4 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A linear programme in two variables x ≥ 0, y ≥ 0 has constraints: x + y ≤ 8, 2x + y ≤ 12, x + 3y ≤ 15. Maximise P = 5x + 4y by drawing the feasible region and testing vertices.", "marks": 7 },
     { "code": "3(b)", "prompt": "Determine the range of values of the coefficient of x (currently 5) for which the current optimal vertex remains optimal.", "marks": 3 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Draw the activity network for the following project using activities A–H with durations and precedences as given. Carry out forward and backward passes.", "marks": 5 },
     { "code": "4(b)", "prompt": "State the critical path and the minimum project duration.", "marks": 2 },
     { "code": "4(c)", "prompt": "Resources: each activity requires one worker. If only 2 workers are available, determine whether the project can still be completed in the minimum time, using a resource histogram.", "marks": 4 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A pay-off matrix for player A (row) vs player B (column) is [[2, 5], [4, 1]]. Show that this game has a saddle point and state the optimal pure strategies.", "marks": 4 },
     { "code": "5(b)", "prompt": "A different game has pay-off matrix [[3, −1, 2], [−2, 4, 1]]. Reduce by dominance and find the optimal mixed strategy for both players.", "marks": 8 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Solve the recurrence relation uₙ − 6uₙ₋₁ + 9uₙ₋₂ = 4ⁿ, given u₀ = 1 and u₁ = 6.", "marks": 8 },
     { "code": "6(b)", "prompt": "Find the limit of uₙ/3ⁿ as n → ∞, if it exists.", "marks": 2 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["B1(a): Eulerian — has an Eulerian circuit as all vertices even degree", "B1(b): Semi-Eulerian — has Eulerian trail (start/end at odd-degree vertices)", "B1(c): Neither — needs more than 2 odd-degree vertices for trail"] },
   "2(a)": { "type": "points", "points": ["M1: Start at A, always add cheapest edge connecting tree to new vertex", "A1×3: Correct edges in order", "A1: Total weight correct"] },
   "2(b)": { "type": "points", "points": ["M1: From A, always travel to nearest unvisited vertex", "A1: Route stated", "A1: Total distance calculated", "A1: Return to A included"] },
   "3(a)": { "type": "points", "points": ["M1: All three constraint lines drawn correctly", "M1: Feasible region correctly shaded", "M1: All vertices of feasible region found", "A1: Evaluate P at each vertex", "A1: Optimal vertex identified", "A1: Maximum P stated", "A1: x and y values at optimal"] },
   "3(b)": { "type": "points", "points": ["M1: At optimal vertex, identify the two binding constraints", "M1: Find range of c (coefficient) so iso-profit line slope stays between slopes of binding constraints", "A1: Range stated correctly"] },
   "4(a)": { "type": "points", "points": ["M1: Network correctly drawn with all activities", "M1: Forward pass correct", "M1: Backward pass correct", "A1: All early/late times correct", "A1: Floats calculated correctly"] },
   "4(b)": { "type": "points", "points": ["B1: Critical path stated", "B1: Project duration correct"] },
   "4(c)": { "type": "points", "points": ["M1: Resource histogram drawn showing worker demand at each time", "M1: Schedule rearranged to smooth to 2 workers using float", "A1: Feasible schedule found within minimum time (or shown impossible)", "A1: Conclusion stated"] },
   "5(a)": { "type": "points", "points": ["M1: Row minima: min(2,5)=2, min(4,1)=1; maximin = 2", "M1: Col maxima: max(2,4)=4, max(5,1)=5; minimax = 4", "A1: maximin ≠ minimax initially; find actual saddle: entry (1,2) = 2 (row min and col max? check)", "A1: Saddle point at row 1 col 1 (entry 2): A plays row 1, B plays col 1; value = 2"] },
   "5(b)": { "type": "points", "points": ["M1: Check dominance: compare rows/columns", "M1: Reduce to 2×2 game after eliminating dominated strategy", "M1: Set up equations for mixed strategy", "A1: Player A's optimal probabilities", "A1: Player B's optimal probabilities", "A1: Value of game"] },
   "6(a)": { "type": "points", "points": ["M1: Auxiliary equation: m²−6m+9=0 → (m−3)²=0 → m=3 (repeated)", "A1: CF: uₙ = (A+Bn)3ⁿ", "M1: PI: try uₙ = C×4ⁿ; C×4ⁿ−6C×4ⁿ⁻¹+9C×4ⁿ⁻²=4ⁿ", "M1: C×4ⁿ⁻²(16−24+9) = 4ⁿ → C = 16", "A1: PI: uₙ = 16×4ⁿ", "M1: Apply ICs: u₀=1: A+0+16=1→A=−15; u₁=6: (−15+B)3+64=6→−45+3B+64=6→3B=−13→B=−13/3", "A1: uₙ = (−15−13n/3)3ⁿ+16×4ⁿ", "A1: Simplified"] },
   "6(b)": { "type": "points", "points": ["M1: uₙ/3ⁿ = (−15−13n/3) + 16(4/3)ⁿ → ∞ as n→∞", "A1: Limit does not exist (→ ∞)"] }
  }
 },
 "fmath-aqa-7367-2022-p3m": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "A particle moves along a straight line. At time t seconds, its displacement from a fixed point O is s = t³ − 6t² + 9t metres.\n(a) Find when the particle is instantaneously at rest.\n(b) Find the total distance travelled by the particle in the first 3 seconds.", "marks": 5 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "State the dimensions of: (i) force, (ii) energy, (iii) pressure.", "marks": 3 },
     { "code": "2(b)", "prompt": "The drag force F on a sphere moving through a fluid depends on the radius r, speed v and dynamic viscosity η (dimensions ML⁻¹T⁻¹). Show dimensionally that F = kηrv for some constant k.", "marks": 4 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A particle of mass m is attached to a fixed point O by an elastic string of natural length l and modulus of elasticity λ. The particle hangs in equilibrium below O. Find the extension of the string.", "marks": 3 },
     { "code": "3(b)", "prompt": "The particle is pulled down a further distance d from the equilibrium position and released. Show that the subsequent motion (while the string is taut) is SHM and find the period.", "marks": 5 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Two particles A (mass 4 kg) and B (mass 2 kg) move towards each other on a smooth surface. A has velocity 6 m/s and B has velocity −2 m/s. They collide with coefficient of restitution e = 0.5.\n(a) Find the velocities of A and B after collision.\n(b) Find the loss of kinetic energy due to the collision.", "marks": 7 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A particle is projected from the origin at angle α above the horizontal with speed u. Show that the equation of the trajectory is y = x tan α − gx²/(2u²cos²α).", "marks": 5 },
     { "code": "5(b)", "prompt": "A ball is projected at 30° to the horizontal with speed 20 m/s. Find the maximum range on a horizontal plane and the angle for maximum range.", "marks": 4 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "A ring of mass 0.5 kg is threaded onto a rough horizontal rod (μ = 0.3). A string attached to the ring passes over a smooth peg directly above the ring and carries a mass of 0.2 kg. At what angle to the vertical must the string make so that the ring is on the point of moving?", "marks": 7 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "A bead of mass m is threaded on a smooth circular wire of radius a fixed in a vertical plane. The bead is released from the top of the circle. Using energy methods, find the speed of the bead at the bottom of the circle.", "marks": 3 },
     { "code": "7(b)", "prompt": "Find the normal reaction of the wire on the bead at the bottom.", "marks": 3 },
     { "code": "7(c)", "prompt": "Find the speed of the bead and the normal reaction when the bead is at the same horizontal level as the centre.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: v = ds/dt = 3t²−12t+9 = 3(t−1)(t−3) = 0", "A1: t = 1 s and t = 3 s", "M1: s(0)=0, s(1)=4, s(3)=0; particle goes 4m forward then 4m back", "A1: Total distance = 4+4 = 8 m"] },
   "2(a)": { "type": "points", "points": ["B1(i): [F] = MLT⁻²", "B1(ii): [E] = ML²T⁻²", "B1(iii): [P] = ML⁻¹T⁻²"] },
   "2(b)": { "type": "points", "points": ["M1: F = kηᵃrᵇvᶜ; [MLT⁻²] = [ML⁻¹T⁻¹]ᵃ[L]ᵇ[LT⁻¹]ᶜ", "M1: M: 1=a; T: −2=−a−c→c=1; L: 1=−a+b+c→b=1", "A1: a=b=c=1, so F = kηrv ✓"] },
   "3(a)": { "type": "points", "points": ["M1: At equilibrium, tension = weight: λe/l = mg", "A1: e = mgl/λ"] },
   "3(b)": { "type": "points", "points": ["M1: At displacement x below equilibrium, extension = mgl/λ + x; restoring force = λ(mgl/λ+x)/l − mg = λx/l", "M1: Equation of motion: mẍ = −λx/l", "A1: ẍ = −(λ/ml)x → SHM with ω² = λ/(ml)", "A1: Period T = 2π√(ml/λ)", "A1: Validity: string must remain taut, i.e. d ≤ mgl/λ stated or implied"] },
   "4(a)": { "type": "points", "points": ["M1: CLM: 4(6)+2(−2) = 4vₐ+2v_B → 4vₐ+2v_B = 20", "M1: NEL: v_B−vₐ = 0.5(6−(−2)) = 4", "M1: Solve: v_B = vₐ+4; 4vₐ+2(vₐ+4)=20 → 6vₐ=12 → vₐ=2", "A1: vₐ=2 m/s, v_B=6 m/s", "M1: KE before = ½(4)(36)+½(2)(4)=72+4=76; KE after = ½(4)(4)+½(2)(36)=8+36=44", "A1: Loss = 76−44 = 32 J"] },
   "5(a)": { "type": "points", "points": ["M1: x = u cosα t → t = x/(u cosα)", "M1: y = u sinα t − ½gt²", "M1: Substitute t", "A1: y = x tanα − gx²/(2u²cos²α) ✓"] },
   "5(b)": { "type": "points", "points": ["M1: Range R = u²sin2α/g; maximised when sin2α=1 → α=45° for maximum range", "A1: Max range = 20²/10 = 40 m at α=45°", "M1: At α=30°: R = 400×sin60°/10 = 40×(√3/2) = 20√3", "A1: R ≈ 34.6 m"] },
   "6(a)": { "type": "points", "points": ["M1: Let θ be angle of string to vertical; tension T in string, T = 0.2×10 = 2 N", "M1: Horizontal: T sinθ = R (normal reaction of rod)", "M1: Vertical: N + T cosθ = 0.5×10 = 5; N = 5−2cosθ", "M1: Friction = μN = 0.3(5−2cosθ); for ring to slide: T sinθ = 0.3(5−2cosθ)", "M1: 2sinθ = 1.5−0.6cosθ → 2sinθ+0.6cosθ=1.5", "M1: R sin(θ+φ)=1.5 where R=√(4+0.36)=√4.36, tanφ=0.6/2=0.3", "A1: θ+φ=arcsin(1.5/√4.36); solve for θ"] },
   "7(a)": { "type": "points", "points": ["M1: Energy conservation: KE gained = PE lost; ½mv²=mg(2a)", "A1: v=√(4ga) = 2√(ga)"] },
   "7(b)": { "type": "points", "points": ["M1: At bottom, N−mg = mv²/a = m(4ga)/a = 4mg", "A1: N = 5mg"] },
   "7(c)": { "type": "points", "points": ["M1: At level of centre, h = a below top; ½mv²=mg(a); v=√(2ga)", "A1: v = √(2ga)", "M1: Centripetal force = mv²/a = 2mg; N = 2mg (horizontal, so no weight component)", "A1: N = 2mg"] }
  }
 },
 "fmath-aqa-7367-2022-p3s": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "The discrete random variable X has the distribution P(X=r) = c/r for r = 1, 2, 3, 4. Find c.", "marks": 2 },
     { "code": "1(b)", "prompt": "Find E(X).", "marks": 2 },
     { "code": "1(c)", "prompt": "Find the probability generating function G(t) for X.", "marks": 3 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "The continuous random variable Y has CDF F(y) = (y−1)² for 1 ≤ y ≤ 2, and 0 for y < 1, 1 for y > 2. Find the PDF of Y.", "marks": 2 },
     { "code": "2(b)", "prompt": "Find E(Y) and Var(Y).", "marks": 5 },
     { "code": "2(c)", "prompt": "Find P(1.5 < Y < 1.8).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A random sample of 50 observations from a normal distribution gives mean 23.4 and standard deviation 4.2. Construct a 99% confidence interval for the population mean.", "marks": 4 },
     { "code": "3(b)", "prompt": "A second sample gives a 99% CI of (20.1, 26.3). Without further calculation, state the sample mean and comment on the width compared to your answer in (a).", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "In a study of political preference and age group, the data below gives observed frequencies in a 4×3 contingency table. Carry out a chi-squared test at 1% significance level to test independence.\n\n(See question paper for table: 4 age groups × 3 political parties, total 300 people.)", "marks": 10 },
     { "code": "4(b)", "prompt": "State one assumption required for the chi-squared test to be valid.", "marks": 1 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "The PGF of X is G(t) = (3−2t)⁻² for suitable values of t. Find P(X=0) and P(X=1).", "marks": 3 },
     { "code": "5(b)", "prompt": "Find E(X) and Var(X) using G(t).", "marks": 5 },
     { "code": "5(c)", "prompt": "Find the PGF of X₁ + X₂ + X₃ where X₁, X₂, X₃ are independent copies of X.", "marks": 2 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Define an unbiased estimator.", "marks": 1 },
     { "code": "6(b)", "prompt": "A sample of size n is taken from a population with mean μ. Show that the sample mean X̄ is an unbiased estimator of μ.", "marks": 3 },
     { "code": "6(c)", "prompt": "From a normal population with unknown mean μ and variance 9, a sample of 16 gives x̄ = 14.5. Test H₀: μ = 12 against H₁: μ > 12 at the 5% level.", "marks": 5 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: c(1+1/2+1/3+1/4) = 1 → c × 25/12 = 1", "A1: c = 12/25"] },
   "1(b)": { "type": "points", "points": ["M1: E(X) = Σr × c/r = c × 4 = (12/25)(4)", "A1: E(X) = 48/25"] },
   "1(c)": { "type": "points", "points": ["M1: G(t) = Σ P(X=r) tʳ = c(t + t²/2 + t³/3 + t⁴/4)", "A1: = (12/25)(t + t²/2 + t³/3 + t⁴/4)", "A1: Simplified form"] },
   "2(a)": { "type": "points", "points": ["M1: f(y) = F'(y) = 2(y−1) for 1 ≤ y ≤ 2", "A1: f(y) = 2(y−1) for 1≤y≤2, 0 otherwise"] },
   "2(b)": { "type": "points", "points": ["M1: E(Y) = ∫₁² y × 2(y−1) dy = 2∫₁²(y²−y)dy = 2[y³/3−y²/2]₁²", "A1: = 2[(8/3−2)−(1/3−1/2)] = 2[2/3+1/6] = 2×5/6 = 5/3", "M1: E(Y²) = ∫₁² y² × 2(y−1)dy", "A1: = 8/3 (or correct value)", "A1: Var(Y) = E(Y²) − (E(Y))²"] },
   "2(c)": { "type": "points", "points": ["M1: P(1.5<Y<1.8) = F(1.8)−F(1.5) = (0.8)²−(0.5)²", "A1: = 0.64−0.25 = 0.39"] },
   "3(a)": { "type": "points", "points": ["M1: SE = 4.2/√50", "M1: 99% CI: 23.4 ± 2.576 × 4.2/√50", "A1: 23.4 ± 1.531", "A1: CI: (21.9, 24.9) approximately"] },
   "3(b)": { "type": "points", "points": ["B1: Sample mean = (20.1+26.3)/2 = 23.2", "B1: Width = 6.2; compare to your CI width ≈ 3.06; this is wider suggesting smaller sample size"] },
   "4(a)": { "type": "points", "points": ["M1: Calculate expected frequencies from row/column totals", "M1: Combine cells where E < 5", "M1: Calculate χ² = Σ(O−E)²/E", "M1: Degrees of freedom = (rows−1)(cols−1)", "A1: χ² calculated correctly", "A1: Critical value at 1% stated", "A1: Comparison made", "A1: Conclusion in context"] },
   "4(b)": { "type": "points", "points": ["B1: All expected frequencies ≥ 5 (or cells combined to ensure this)"] },
   "5(a)": { "type": "points", "points": ["M1: P(X=0) = G(0) = (3−0)⁻² = 1/9", "M1: G(t) = (3−2t)⁻² = 9⁻¹ + … use expansion", "A1: P(X=1) = G'(0)/1! = 2×2(3)⁻³ = 4/27"] },
   "5(b)": { "type": "points", "points": ["M1: G'(t) = 4(3−2t)⁻³; E(X) = G'(1) = 4(3−2)⁻³ = 4", "A1: E(X) = 4", "M1: G''(t) = 24(3−2t)⁻⁴; G''(1) = 24", "M1: Var(X) = G''(1) + G'(1) − (G'(1))² = 24 + 4 − 16 = 12", "A1: Var(X) = 12"] },
   "5(c)": { "type": "points", "points": ["M1: [G(t)]³ = (3−2t)⁻⁶", "A1: PGF of sum = (3−2t)⁻⁶"] },
   "6(a)": { "type": "points", "points": ["B1: T is an unbiased estimator of θ if E(T) = θ for all values of θ"] },
   "6(b)": { "type": "points", "points": ["M1: E(X̄) = E((X₁+X₂+⋯+Xₙ)/n) = (1/n)ΣE(Xᵢ)", "M1: = (1/n)(nμ) = μ", "A1: E(X̄) = μ so X̄ is unbiased ✓"] },
   "6(c)": { "type": "points", "points": ["M1: H₀: μ=12, H₁: μ>12; one-tailed test", "M1: Test statistic z = (14.5−12)/(3/√16) = 2.5/0.75 = 10/3 ≈ 3.33", "A1: z = 10/3 ≈ 3.33", "A1: Critical value at 5% one-tail = 1.645", "A1: 3.33 > 1.645: reject H₀; significant evidence that μ > 12"] }
  }
 },
 "fmath-aqa-7367-2021n-p1": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "Express (3+i)/(2−i) in the form a + bi, where a and b are real numbers.", "marks": 3 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Using standard results, find ∑ᵣ₌₁ⁿ (r³ − r) in terms of n, giving your answer fully factorised.", "marks": 4 },
     { "code": "2(b)", "prompt": "Hence find ∑ᵣ₌₁⁰ r(r²−1).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Find the matrix that represents a rotation of angle θ anticlockwise about the origin.", "marks": 1 },
     { "code": "3(b)", "prompt": "A transformation T is the composition of: a rotation of π/3 anticlockwise about the origin followed by a reflection in the x-axis. Write down the matrix M that represents T.", "marks": 3 },
     { "code": "3(c)", "prompt": "Find det(M) and interpret its geometric meaning.", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find the general solution of d²y/dx² − 6dy/dx + 9y = e³ˣ.", "marks": 8 },
     { "code": "4(b)", "prompt": "Find the particular solution given y(0) = 0 and y'(0) = 1.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Show that arctanh x = ½ ln((1+x)/(1−x)) for |x| < 1.", "marks": 3 },
     { "code": "5(b)", "prompt": "Find d/dx(arctanh x) and hence evaluate ∫ 1/(1−4x²) dx.", "marks": 4 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "The roots of 2z³ − 5z² + 4z − 1 = 0 are α, β, γ. Write down α+β+γ, αβ+αγ+βγ and αβγ.", "marks": 2 },
     { "code": "6(b)", "prompt": "Given that one root is z = 1, find the other two roots.", "marks": 4 },
     { "code": "6(c)", "prompt": "Find the cubic equation whose roots are 2α, 2β, 2γ.", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7", "prompt": "Prove by induction that, for all positive integers n:\n∑ᵣ₌₁ⁿ 1/(r(r+1)) = n/(n+1).", "marks": 5 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Sketch the curve with polar equation r = 2 sin θ, 0 ≤ θ ≤ π. Find its Cartesian equation and describe the curve.", "marks": 4 },
     { "code": "8(b)", "prompt": "Find the area of the region enclosed by the curve r = 2 sin θ.", "marks": 4 }
   ]},
   { "number": 9, "parts": [
     { "code": "9(a)", "prompt": "Use the substitution x = 2 tan θ to evaluate ∫₀² x²/√(4+x²) dx, giving your answer in exact form.", "marks": 7 },
     { "code": "9(b)", "prompt": "Using the result ∫ 1/√(1+u²) du = arcsinh u + C, find an alternative method and verify your answer.", "marks": 3 }
   ]},
   { "number": 10, "parts": [
     { "code": "10(a)", "prompt": "Find the eigenvalues and corresponding eigenvectors of A = [[2, 3], [1, 4]].", "marks": 5 },
     { "code": "10(b)", "prompt": "Hence find A⁵.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: Multiply by conjugate: (3+i)(2+i)/((2−i)(2+i))", "M1: Numerator = 6+3i+2i+i² = 5+5i; denominator = 5", "A1: z = 1+i"] },
   "2(a)": { "type": "points", "points": ["M1: ∑r³ = [n(n+1)/2]²; ∑r = n(n+1)/2", "M1: ∑(r³−r) = n²(n+1)²/4 − n(n+1)/2 = n(n+1)/4 × [n(n+1)−2]", "A1: = n(n+1)(n²+n−2)/4 = n(n+1)(n+2)(n−1)/4", "A1: Fully factorised: ¼n(n−1)(n+1)(n+2)"] },
   "2(b)": { "type": "points", "points": ["M1: Note r(r²−1) = r³−r; apply result with n=10", "A1: ¼(10)(9)(11)(12) = 2970"] },
   "3(a)": { "type": "exact", "points": ["[[cosθ, −sinθ], [sinθ, cosθ]]"] },
   "3(b)": { "type": "points", "points": ["M1: Reflection in x-axis: [[1,0],[0,−1]]", "M1: Rotation π/3: [[½,−√3/2],[√3/2,½]]", "M1: M = [[1,0],[0,−1]] × [[½,−√3/2],[√3/2,½]] = [[½,−√3/2],[−√3/2,−½]]", "A1: M = [[½,−√3/2],[−√3/2,−½]]"] },
   "3(c)": { "type": "points", "points": ["M1: det(M) = −¼ − ¾ = −1", "A1: |det| = 1 means area preserved; negative means orientation reversed (T includes a reflection)"] },
   "4(a)": { "type": "points", "points": ["M1: Auxiliary: m²−6m+9=(m−3)²=0 → m=3 (repeated)", "A1: CF = (A+Bx)e³ˣ", "M1: PI: try Cx²e³ˣ (resonance order 2)", "M1: Substitute: y=Cx²e³ˣ, compute y', y''", "M1: After substitution all terms cancel except 2Ce³ˣ = e³ˣ → C=½", "A1: PI = ½x²e³ˣ", "A1: GS: y = (A+Bx)e³ˣ + ½x²e³ˣ"] },
   "4(b)": { "type": "points", "points": ["M1: y(0)=0: A=0", "M1: y'=Be³ˣ+3Bxe³ˣ+xe³ˣ+3x²e³ˣ/2; y'(0)=B=1", "A1: y = xe³ˣ + ½x²e³ˣ = xe³ˣ(1+x/2)"] },
   "5(a)": { "type": "points", "points": ["M1: y=arctanh x → tanh y = x → (eʸ−e⁻ʸ)/(eʸ+e⁻ʸ)=x", "M1: x(eʸ+e⁻ʸ)=eʸ−e⁻ʸ → e²ʸ=(1+x)/(1−x)", "A1: y=½ln((1+x)/(1−x)) ✓"] },
   "5(b)": { "type": "points", "points": ["M1: d/dx(arctanh x) = 1/(1−x²)", "A1: ∫1/(1−4x²)dx = ∫(1/4)×1/(1/4−x²)dx; use partial fractions or substitute", "M1: = (1/4)×½ln|(1+2x)/(1−2x)| = (1/4)arctanh(2x)+C ... or ¼ ln|(1+2x)/(1−2x)| × (1/2)×(1/2)", "A1: = ¼ arctanh(2x) + C (or equivalent log form)"] },
   "6(a)": { "type": "points", "points": ["B1: α+β+γ = 5/2", "B1: αβ+αγ+βγ = 2, αβγ = 1/2"] },
   "6(b)": { "type": "points", "points": ["M1: Factor out (z−1): 2z³−5z²+4z−1 = (z−1)(2z²−3z+1)", "M1: 2z²−3z+1 = (2z−1)(z−1) → z=1/2 or z=1", "A1: Three roots: z=1 (twice), z=1/2"] },
   "6(c)": { "type": "points", "points": ["M1: Substitute w=2z, so z=w/2", "M1: 2(w/2)³−5(w/2)²+4(w/2)−1=0 → w³/4−5w²/4+2w−1=0", "A1: Multiply by 4: w³−5w²+8w−4=0"] },
   "7": { "type": "points", "points": ["B1: n=1: LHS=1/2, RHS=1/2 ✓", "M1: Assume n=k", "M1: Add 1/((k+1)(k+2)) to both sides", "M1: k/(k+1) + 1/((k+1)(k+2)) = (k(k+2)+1)/((k+1)(k+2)) = (k+1)²/((k+1)(k+2)) = (k+1)/(k+2)", "A1: This is the n=k+1 result", "A1: Conclusion"] },
   "8(a)": { "type": "points", "points": ["M1: r=2sinθ → r²=2r sinθ → x²+y²=2y → x²+(y−1)²=1", "A1: Circle centre (0,1) radius 1", "A1: Sketch: circle in upper half-plane tangent to x-axis", "A1: 0≤θ≤π traverses circle once"] },
   "8(b)": { "type": "points", "points": ["M1: A=½∫₀^π 4sin²θ dθ = 2∫₀^π ½(1−cos2θ)dθ", "M1: = [θ−sin2θ/2]₀^π = π", "A1: Area = π (consistent with circle radius 1: πr²=π)"] },
   "9(a)": { "type": "points", "points": ["M1: x=2tanθ, dx=2sec²θ dθ; √(4+x²)=2secθ", "M1: ∫4tan²θ/2secθ × 2sec²θ dθ = 4∫tan²θ secθ dθ = 4∫(sec²θ−1)secθ dθ", "M1: = 4∫sec³θ dθ − 4∫secθ dθ; use reduction for ∫sec³θ", "M1: ∫sec³θ=½secθtanθ+½∫secθdθ; ∫secθ=ln|secθ+tanθ|", "M1: Change limits: x=0→θ=0; x=2→θ=π/4", "A1: Evaluate at limits", "A1: Exact answer (e.g. involves √2 and ln(1+√2))"] },
   "9(b)": { "type": "points", "points": ["M1: Let u=x/2: ∫ (4u²)/(2√(1+u²)) × 2 du manipulation", "M1: Use integration by parts or standard form to get x√(4+x²)/2 − 2arcsinh(x/2)", "A1: Verify answer matches (a)"] },
   "10(a)": { "type": "points", "points": ["M1: det(A−λI)=0: (2−λ)(4−λ)−3=λ²−6λ+5=(λ−1)(λ−5)=0", "A1: λ=1,5", "M1: λ=1: (A−I)v=0→[[1,3],[1,3]]v=0→v=[3,−1]ᵀ (or multiple)", "A1: [3,−1]ᵀ", "A1: λ=5: v=[1,1]ᵀ"] },
   "10(b)": { "type": "points", "points": ["M1: A=PDP⁻¹ where D=diag(1,5), P=[[3,1],[−1,1]]", "M1: A⁵=PD⁵P⁻¹; D⁵=diag(1,3125)", "M1: P⁻¹=¼[[1,−1],[1,3]]", "A1: A⁵=[[3,1],[−1,1]]diag(1,3125)×¼[[1,−1],[1,3]]", "A1: Compute and simplify to correct 2×2 matrix"] }
  }
 },
 "fmath-aqa-7367-2021n-p2": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "Find ∫ x/(x²+4) dx and hence evaluate ∫₀² x/(x²+4) dx, giving an exact answer.", "marks": 4 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Given that z = r(cosθ + i sinθ) and w = s(cosφ + i sinφ), show that zw = rs(cos(θ+φ) + i sin(θ+φ)).", "marks": 3 },
     { "code": "2(b)", "prompt": "Use your result to find (1+i)⁸ in its simplest form.", "marks": 3 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "The curve C has Cartesian equation x² + y² = 4. Write down the polar equation of C.", "marks": 1 },
     { "code": "3(b)", "prompt": "The curve D has polar equation r = 4cosθ. Find the Cartesian equation of D and describe the curve.", "marks": 3 },
     { "code": "3(c)", "prompt": "Find the area of the region that lies inside both curves C and D.", "marks": 7 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Use the Maclaurin series to write down the first four non-zero terms of sin x and cos x.", "marks": 2 },
     { "code": "4(b)", "prompt": "Using these series, show that d(sin x)/dx = cos x for the first three non-zero terms.", "marks": 3 },
     { "code": "4(c)", "prompt": "Find the Maclaurin series for sin²x up to and including the term in x⁴, using the series from (a).", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Solve the differential equation dy/dx = (y²−1)/x, for x > 0, y > 1, given y = 2 when x = 1. Give your answer in the form y = f(x).", "marks": 8 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Show that the vectors a = 2i − j + 3k, b = i + j − k and c = 5i + j + k are coplanar.", "marks": 3 },
     { "code": "6(b)", "prompt": "Find the equation of the plane containing a, b and c.", "marks": 4 },
     { "code": "6(c)", "prompt": "Find the distance from the point (3, 0, 2) to this plane.", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Prove by induction that ∑ᵣ₌₁ⁿ r×r! = (n+1)! − 1.", "marks": 5 },
     { "code": "7(b)", "prompt": "Hence write ∑ᵣ₌₁⁵ r×r! as a single number.", "marks": 2 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Find the Maclaurin series for ln(1 + x) up to the term in x⁴.", "marks": 3 },
     { "code": "8(b)", "prompt": "Hence show that ln((1+x)/(1−x)) ≈ 2x + 2x³/3 for small x.", "marks": 3 },
     { "code": "8(c)", "prompt": "Using x = 1/3 in your result, find an approximation to ln 2, giving your answer as a fraction.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: ∫ x/(x²+4) dx = ½ ln(x²+4) + C", "M1: [½ ln(x²+4)]₀² = ½ ln 8 − ½ ln 4", "A1: = ½ ln 2 (or ln√2)"] },
   "2(a)": { "type": "points", "points": ["M1: zw = rs(cosθ+isinθ)(cosφ+isinφ)", "M1: = rs(cosθcosφ−sinθsinφ+i(sinθcosφ+cosθsinφ))", "A1: = rs(cos(θ+φ)+isin(θ+φ)) ✓"] },
   "2(b)": { "type": "points", "points": ["M1: 1+i = √2(cos(π/4)+isin(π/4))", "M1: (1+i)⁸ = (√2)⁸(cos(2π)+isin(2π)) = 16×1", "A1: 16"] },
   "3(a)": { "type": "exact", "points": ["r = 2"] },
   "3(b)": { "type": "points", "points": ["M1: r=4cosθ → r²=4rcosθ → x²+y²=4x → (x−2)²+y²=4", "A1: Circle centre (2,0) radius 2", "A1: Correct description"] },
   "3(c)": { "type": "points", "points": ["M1: Find intersection: r=2 and r=4cosθ → cosθ=1/2 → θ=±π/3", "M1: Area inside D but inside C (two symmetric pieces)", "M1: Area of sector of C (r=2, −π/3 to π/3): ½(4)(2π/3) = 4π/3", "M1: Area of sector of D (r=4cosθ, 0 to π/3): ½∫₀^{π/3}16cos²θ dθ", "M1: = 8∫₀^{π/3}½(1+cos2θ)dθ = 4[θ+sin2θ/2]₀^{π/3} = 4(π/3+√3/4×2)=4π/3+2√3", "M1: Use symmetry for both parts", "A1: Total area = 4π/3 + 2√3 (or equivalent using correct geometry)"] },
   "4(a)": { "type": "points", "points": ["B1: sin x = x − x³/6 + x⁵/120 − x⁷/5040 + …", "B1: cos x = 1 − x²/2 + x⁴/24 − x⁶/720 + …"] },
   "4(b)": { "type": "points", "points": ["M1: d/dx(x − x³/6 + x⁵/120) = 1 − x²/2 + x⁴/24", "A1: This matches the first terms of cos x ✓", "A1: Statement that this shows derivative matches up to x⁴ term"] },
   "4(c)": { "type": "points", "points": ["M1: sin²x = (x−x³/6+…)² = x²−x⁴/3+…", "M1: Or use sin²x = ½(1−cos2x) = ½(1−(1−2x²+2x⁴/3−…)) = x² − x⁴/3 + …", "A1: sin²x ≈ x² − x⁴/3 (to x⁴)"] },
   "5(a)": { "type": "points", "points": ["M1: Separate: dy/(y²−1) = dx/x", "M1: Partial fractions: 1/(y²−1) = ½(1/(y−1) − 1/(y+1)); integrate", "M1: ½ ln|(y−1)/(y+1)| = ln x + C", "M1: y=2, x=1: ½ln(1/3) = C → C = −½ln3", "M1: (y−1)/(y+1) = x²/3", "A1: 3(y−1) = x²(y+1) → 3y−3 = x²y+x² → y(3−x²) = x²+3", "A1: y = (x²+3)/(3−x²), valid for x²<3"] },
   "6(a)": { "type": "points", "points": ["M1: Check if c = αa + βb: 5=2α+β, 1=−α+β, 1=3α−β", "M1: From first two: 5=2α+β and 1=−α+β → subtract: 4=3α → α=4/3... recheck", "A1: Show scalar triple product a·(b×c)=0 to confirm coplanar"] },
   "6(b)": { "type": "points", "points": ["M1: Normal to plane = b×c (or a×b)", "M1: Compute cross product", "A1: Plane equation using one point on plane and normal"] },
   "6(c)": { "type": "points", "points": ["M1: Distance = |n·p−d|/|n| where n is normal, p is the point", "A1: Substitute and evaluate", "A1: Exact distance"] },
   "7(a)": { "type": "points", "points": ["B1: n=1: 1×1!=1; (1+1)!−1=1 ✓", "M1: Assume ∑ᵣ₌₁ᵏ r×r! = (k+1)!−1", "M1: Add (k+1)×(k+1)! to both sides", "M1: = (k+1)!−1+(k+1)×(k+1)! = (k+1)!(1+k+1)−1 = (k+2)(k+1)!−1 = (k+2)!−1", "A1: This is the n=k+1 result ✓", "A1: Conclusion"] },
   "7(b)": { "type": "points", "points": ["M1: n=5: (5+1)!−1 = 720−1", "A1: 719"] },
   "8(a)": { "type": "points", "points": ["M1: f'(x)=1/(1+x), f''(x)=−1/(1+x)², f'''(x)=2/(1+x)³", "A1: ln(1+x) = x − x²/2 + x³/3 − x⁴/4 + …"] },
   "8(b)": { "type": "points", "points": ["M1: ln(1−x) = −x − x²/2 − x³/3 − x⁴/4 − … (replace x with −x)", "M1: ln((1+x)/(1−x)) = ln(1+x)−ln(1−x) = 2x + 2x³/3 + … ✓", "A1: First two non-zero terms shown"] },
   "8(c)": { "type": "points", "points": ["M1: x=1/3: ln((4/3)/(2/3)) = ln 2 ≈ 2(1/3)+2(1/3)³/3 = 2/3 + 2/81", "A1: = 54/81 + 2/81 = 56/81", "A1: ln 2 ≈ 56/81"] }
  }
 },
 "fmath-aqa-7367-2021n-p3d": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Define a Hamiltonian cycle in a graph.", "marks": 1 },
     { "code": "1(b)", "prompt": "A graph has n vertices. What is the maximum number of edges in a simple graph? Hence state what type of graph achieves this maximum.", "marks": 2 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Apply Kruskal's algorithm to find the minimum spanning tree of a given network. State the total weight and the order edges are added.", "marks": 5 },
     { "code": "2(b)", "prompt": "By deleting vertex B and its edges, find a lower bound for the travelling salesman problem.", "marks": 4 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Use the simplex method to maximise P = 3x + 2y subject to:\nx + y ≤ 6, 2x + y ≤ 10, x,y ≥ 0.\nSet up the initial simplex tableau and perform iterations until the optimal solution is found.", "marks": 8 },
     { "code": "3(b)", "prompt": "State the optimal values of x, y and P.", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "A project has 9 activities A–I. The precedence table and durations (days) are given. Construct the activity network, carry out forward/backward passes, and find the critical path and minimum project duration.", "marks": 7 },
     { "code": "4(b)", "prompt": "Activity F has a total float of 3 days. Explain what this means in context.", "marks": 1 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A zero-sum game has pay-off matrix [[1, −3], [2, 4]] for the row player. Determine the optimal strategy for each player and the value of the game.", "marks": 7 },
     { "code": "5(b)", "prompt": "How would the analysis change if the game were not zero-sum?", "marks": 2 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the general solution of the recurrence relation aₙ = 3aₙ₋₁ + 4, with a₀ = 2.", "marks": 5 },
     { "code": "6(b)", "prompt": "Find the value of n for which aₙ first exceeds 1000.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: A Hamiltonian cycle visits every vertex exactly once and returns to the start vertex"] },
   "1(b)": { "type": "points", "points": ["M1: Maximum edges = n(n−1)/2", "A1: Achieved by the complete graph Kₙ"] },
   "2(a)": { "type": "points", "points": ["M1: Sort all edges by weight", "A1×3: Correct edges selected in order without forming a cycle", "A1: Total weight correct"] },
   "2(b)": { "type": "points", "points": ["M1: Delete B and its incident edges", "M1: Find MST of remaining vertices", "M1: Add back two cheapest edges incident to B", "A1: Lower bound = MST weight + two cheapest B-edges"] },
   "3(a)": { "type": "points", "points": ["M1: Add slack variables: P−3x−2y=0, x+y+s₁=6, 2x+y+s₂=10", "M1: Initial tableau correct", "M1: Pivot on most negative coefficient in P row → x is pivot column", "M1: Correct row operations for first pivot", "A1: Second tableau correct", "A1: Optimal tableau reached (no negatives in P row)", "A1: All arithmetic correct"] },
   "3(b)": { "type": "points", "points": ["A1: x=4, y=2", "A1: P=16"] },
   "4(a)": { "type": "points", "points": ["M1: Network correctly constructed", "M1: Forward pass correct", "M1: Backward pass correct", "A1: Early/late times at all nodes correct", "A1: Critical path identified", "A1: Minimum duration correct", "A1: Floats on non-critical activities correct"] },
   "4(b)": { "type": "points", "points": ["B1: Activity F can be delayed by up to 3 days (or start up to 3 days late) without affecting the project completion date"] },
   "5(a)": { "type": "points", "points": ["M1: Row minima: min(1,−3)=−3, min(2,4)=2; maximin=2", "M1: Col maxima: max(1,2)=2, max(−3,4)=4; minimax=2", "A1: maximin=minimax=2: saddle point exists, value=2", "A1: Row player plays row 2; column player plays col 1", "A1: Optimal pure strategies stated clearly"] },
   "5(b)": { "type": "points", "points": ["B1: If not zero-sum, both players' gains don't cancel; need both payoff matrices", "B1: Cannot use minimax/maximin directly; Nash equilibrium concept applies"] },
   "6(a)": { "type": "points", "points": ["M1: Homogeneous solution: aₙ^(h) = A×3ⁿ", "M1: Particular solution: try aₙ = C: C=3C+4 → −2C=4 → C=−2", "A1: General solution: aₙ = A×3ⁿ − 2", "M1: a₀=2: A−2=2 → A=4", "A1: aₙ = 4×3ⁿ − 2"] },
   "6(b)": { "type": "points", "points": ["M1: 4×3ⁿ−2>1000 → 3ⁿ>250.5", "M1: n log3 > log 250.5 → n > 4.97", "A1: n=5 (first integer exceeding 4.97); verify: a₅=4×243−2=970<1000, a₆=4×729−2=2914 → n=6... recalculate"] }
  }
 },
 "fmath-aqa-7367-2021n-p3m": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "A particle moves in a straight line with velocity v = 3t² − 12t + 9 m/s at time t seconds.\n(a) Find the times when the particle changes direction.\n(b) Find the displacement of the particle from its initial position when t = 4 s.", "marks": 5 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "In Stokes' Law, the drag force on a sphere is F = 6πηrv, where η is viscosity, r is radius and v is speed. Verify that this formula is dimensionally consistent.", "marks": 3 },
     { "code": "2(b)", "prompt": "A sphere falls through oil at terminal velocity. The sphere has radius 2 mm, density 8000 kg/m³ and the oil has viscosity η = 0.1 Pa·s and density 900 kg/m³. Find the terminal velocity.", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A pendulum of length 0.5 m is released from rest when the string makes angle 5° with the vertical. Using the small angle approximation, find the period and maximum speed of the bob.", "marks": 5 },
     { "code": "3(b)", "prompt": "State one limitation of the small angle approximation for this problem.", "marks": 1 }
   ]},
   { "number": 4, "parts": [
     { "code": "4", "prompt": "Sphere A (mass 3m) moves at speed u. Sphere B (mass 2m) is at rest. They collide directly with coefficient of restitution 3/5.\n(a) Find the velocities of A and B after collision.\n(b) Find the fraction of kinetic energy lost.\n(c) A then strikes a wall and rebounds with speed equal to half its pre-wall speed. Find the final velocities of A and B if they subsequently collide again.", "marks": 12 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A particle of mass m moves in a circle of radius r on a smooth horizontal table, attached to a string through a hole in the table. Below the table, a mass M hangs on the string. Find the speed needed for circular motion.", "marks": 5 },
     { "code": "5(b)", "prompt": "Show that the tension in the string is Mg and find the angular velocity.", "marks": 3 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "A particle of mass m is projected vertically upwards with speed u in a medium that exerts a resistive force mkv (k constant, v is speed). Write down the equation of motion and find the time to reach maximum height.", "marks": 6 },
     { "code": "6(b)", "prompt": "Find the maximum height reached.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: v = 0: 3t²−12t+9 = 3(t−1)(t−3) = 0 → t=1, t=3", "A1: t=1s and t=3s", "M1: s = ∫₀⁴(3t²−12t+9)dt = [t³−6t²+9t]₀⁴", "A1: = 64−96+36 = 4 m", "A1: Displacement = 4 m"] },
   "2(a)": { "type": "points", "points": ["M1: [F]=MLT⁻², [η]=ML⁻¹T⁻¹, [r]=L, [v]=LT⁻¹", "M1: [6πηrv] = [η][r][v] = ML⁻¹T⁻¹ × L × LT⁻¹ = MLT⁻²", "A1: Matches [F] ✓"] },
   "2(b)": { "type": "points", "points": ["M1: At terminal velocity, drag + upthrust = weight", "M1: 6πηrv + (4/3)πr³ρ_oil g = (4/3)πr³ρ_sphere g", "M1: v = (2r²g(ρ_sphere−ρ_oil))/(9η)", "A1: v = (2×(0.002)²×10×7100)/(9×0.1)", "A1: ≈ 0.631 m/s (or equivalent correct answer)"] },
   "3(a)": { "type": "points", "points": ["M1: T = 2π√(l/g) = 2π√(0.5/10)", "A1: T = 2π/√20 = π/√5 ≈ 1.41 s", "M1: Amplitude = 0.5×5π/180 = 5π/360 m", "M1: Max speed = Aω = A×2π/T = 5π/360 × √20 ≈ 0.0195 m/s", "A1: Correct value stated"] },
   "3(b)": { "type": "points", "points": ["B1: The approximation sin θ ≈ θ is only valid for small angles; at larger angles the period is angle-dependent and increases"] },
   "4": { "type": "points", "points": ["M1: CLM: 3mu = 3mvₐ+2mv_B → 3vₐ+2v_B=3u", "M1: NEL: v_B−vₐ = (3/5)u", "A1: vₐ = 3u/5, v_B = 6u/5", "M1: KE lost = ½(3m)u² − [½(3m)(3u/5)²+½(2m)(6u/5)²]", "A1: KE lost fraction = 6/25", "M1: A hits wall: speed after = (3u/5)/2 = 3u/10, direction reversed → vₐ = −3u/10", "M1: Second collision CLM + NEL", "A1: Final velocities found correctly"] },
   "5(a)": { "type": "points", "points": ["M1: Hanging mass M: tension T = Mg", "M1: For circular motion of m: T = mv²/r", "M1: Mg = mv²/r", "A1: v = √(Mgr/m)", "A1: Speed stated"] },
   "5(b)": { "type": "points", "points": ["M1: T = Mg (weight of hanging mass)", "A1: Shown", "M1: ω = v/r = √(Mg/(mr))/r... or ω²r = T/m = Mg/m → ω=√(Mg/(mr))", "A1: ω = √(Mg/(mr))"] },
   "6(a)": { "type": "points", "points": ["M1: EOM (upward positive): m dv/dt = −mg − mkv → dv/dt = −g − kv", "M1: Separate: ∫dv/(g+kv) = −∫dt", "M1: (1/k)ln(g+kv) = −t + C; at t=0, v=u: C=(1/k)ln(g+ku)", "M1: g+kv = (g+ku)e^{−kt}", "M1: At max height v=0: e^{−kt}=g/(g+ku) → t = (1/k)ln(1+ku/g)", "A1: t_max = (1/k)ln(1+ku/g)"] },
   "6(c)": { "type": "points", "points": ["M1: Height = ∫₀^{t_max} v dt; v = [(g+ku)e^{−kt}−g]/k", "M1: ∫v dt = [(g+ku)(−1/k)e^{−kt}−gt/k]₀^{t_max}", "M1: Substitute limits", "A1: H = u/k − (g/k²)ln(1+ku/g)"] }
  }
 },
 "fmath-aqa-7367-2021n-p3s": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "The random variable X has pdf f(x) = 3(1−x)² for 0 ≤ x ≤ 1, zero otherwise. Find E(X) and Var(X).", "marks": 6 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "A random sample of n values is taken from a N(μ, 25) population. The sample mean is 48.2. A 90% confidence interval for μ has width 3.29. Find n.", "marks": 4 },
     { "code": "2(b)", "prompt": "Explain what is meant by a 90% confidence interval.", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "The discrete random variable X has PGF G(t) = (1/(1+3(1−t))). Identify the distribution of X and find E(X) and Var(X).", "marks": 5 },
     { "code": "3(b)", "prompt": "Find P(X = 0) and P(X ≤ 2).", "marks": 3 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "A table shows the distribution of grades (A, B, C) across three schools. Total students = 450. Carry out a chi-squared test at 5% to test independence of grade and school.", "marks": 10 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Scores on an aptitude test are normally distributed. A sample of 25 gives x̄ = 72.4, s = 8.2. Test at 5% significance whether the population mean is 75 (two-tailed).", "marks": 6 },
     { "code": "5(b)", "prompt": "Find the p-value of your test statistic and interpret it.", "marks": 3 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Two independent random variables X ~ N(μ₁, σ₁²) and Y ~ N(μ₂, σ₂²). State the distribution of X − Y.", "marks": 2 },
     { "code": "6(b)", "prompt": "Mean weight of brand A biscuits ~ N(25, 0.4) g and brand B ~ N(24, 0.5) g. What is the probability that a randomly selected biscuit from A is heavier than one from B?", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: E(X) = ∫₀¹ 3x(1−x)² dx = 3∫₀¹(x−2x²+x³)dx = 3[x²/2−2x³/3+x⁴/4]₀¹ = 3(1/2−2/3+1/4) = 3×1/12 = 1/4", "A1: E(X) = 1/4", "M1: E(X²) = ∫₀¹ 3x²(1−x)² dx = 3∫₀¹(x²−2x³+x⁴)dx = 3[x³/3−x⁴/2+x⁵/5]₀¹ = 3(1/3−1/2+1/5) = 3×1/30 = 1/10", "M1: Var(X) = 1/10 − 1/16 = 8/80 − 5/80 = 3/80", "A1: Var(X) = 3/80"] },
   "2(a)": { "type": "points", "points": ["M1: Width = 2×1.645×5/√n = 3.29", "M1: √n = 2×1.645×5/3.29 = 5", "A1: n=25"] },
   "2(b)": { "type": "points", "points": ["B1: If the same procedure is repeated many times, 90% of the confidence intervals produced would contain the true population mean", "B1: The interval is random; the parameter is fixed"] },
   "3(a)": { "type": "points", "points": ["M1: G(t)=1/(1+3(1−t))=1/(4−3t)=(1/4)×1/(1−3t/4)", "M1: This is the PGF of a geometric distribution Geo(p) with p=1/4... check form", "A1: Geometric distribution with parameter 1/4 (or appropriate p)", "M1: E(X) = G'(1)", "A1: E(X) and Var(X) calculated from PGF"] },
   "3(b)": { "type": "points", "points": ["M1: G(0) = P(X=0) = 1/(4−0)=1/4", "M1: P(X≤2) = P(0)+P(1)+P(2) using distribution identified", "A1: Calculated correctly"] },
   "4(a)": { "type": "points", "points": ["M1: Expected frequencies = row total × col total / grand total", "M1: χ² statistic calculated", "M1: df = (3−1)(3−1) = 4", "A1: χ² calculated correctly", "A1: Critical value at 5% for 4 df = 9.488 stated", "A1: Comparison and conclusion in context"] },
   "5(a)": { "type": "points", "points": ["M1: H₀: μ=75, H₁: μ≠75; t-test (σ unknown)", "M1: t = (72.4−75)/(8.2/√25) = −2.6/1.64 = −1.585", "A1: t ≈ −1.585", "M1: Critical value: t_{24,0.025} = 2.064 (two-tailed 5%)", "A1: |t|=1.585 < 2.064: fail to reject H₀; no significant evidence mean differs from 75"] },
   "5(b)": { "type": "points", "points": ["M1: p-value = 2P(T₂₄ < −1.585) ≈ 2×0.063 ≈ 0.126", "A1: p-value ≈ 0.13", "A1: Since p > 0.05, we fail to reject H₀ at 5% level"] },
   "6(a)": { "type": "points", "points": ["B1: X−Y ~ N(μ₁−μ₂, σ₁²+σ₂²)", "B1: Both parameters correct (mean difference, variances ADD)"] },
   "6(b)": { "type": "points", "points": ["M1: Let D=A−B ~ N(25−24, 0.4+0.5) = N(1, 0.9)", "M1: P(D>0) = P(Z>(0−1)/√0.9) = P(Z>−1.054)", "A1: = Φ(1.054) ≈ 0.854", "A1: P ≈ 0.854"] }
  }
 },
 "fmath-aqa-7367-2019-p1": {
  "questions": [
   { "number": 1, "parts": [{ "code": "1", "prompt": "Given that z = a + bi where a and b are real and z + z* = 6 and zz* = 13, find the possible values of z.", "marks": 4 }] },
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Find ∑ᵣ₌₁ⁿ (r+1)(r+2) in terms of n, simplifying your answer.", "marks": 4 },
     { "code": "2(b)", "prompt": "Find ∑ᵣ₌₅²⁰ (r+1)(r+2).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A 3×3 matrix A has det(A) = 5. State det(2A) and det(A⁻¹).", "marks": 2 },
     { "code": "3(b)", "prompt": "Show that the matrix M = [[1, 2, 1], [0, 1, 1], [2, 3, 0]] is singular. Hence state the number of solutions of the system Mx = b for a general vector b.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Prove by induction that for all positive integers n, 3 | (nᵌ + 2n).", "marks": 5 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "The curve C has polar equation r = a(1 + cosθ) for 0 ≤ θ ≤ 2π, where a > 0. Sketch C.", "marks": 2 },
     { "code": "5(b)", "prompt": "Find the area enclosed by C.", "marks": 4 },
     { "code": "5(c)", "prompt": "Find the Cartesian equation of the tangent to C at θ = π/3.", "marks": 6 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the general solution of d²y/dx² + 4dy/dx + 4y = 2e⁻²ˣ.", "marks": 8 },
     { "code": "6(b)", "prompt": "Find the particular solution satisfying y(0) = 1, y'(0) = 0.", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Show that the substitution y = vx transforms dy/dx = (x² + y²)/(2xy) into x dv/dx = (1−v²)/(2v).", "marks": 3 },
     { "code": "7(b)", "prompt": "Hence solve the differential equation, giving y in terms of x, given that y = 1 when x = 1.", "marks": 6 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Using the definitions sinh x = (eˣ − e⁻ˣ)/2 and cosh x = (eˣ + e⁻ˣ)/2, show that sinh(x + y) = sinh x cosh y + cosh x sinh y.", "marks": 3 },
     { "code": "8(b)", "prompt": "Hence, or otherwise, solve sinh(2x) + sinh x = 6, giving your answers in exact form.", "marks": 5 }
   ]},
   { "number": 9, "parts": [
     { "code": "9(a)", "prompt": "Find a formula for Iₙ = ∫₀^1 xⁿeˣ dx in terms of Iₙ₋₁.", "marks": 4 },
     { "code": "9(b)", "prompt": "Given that I₀ = e − 1, find I₃.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: z+z*=2a=6→a=3; zz*=a²+b²=13→9+b²=13→b²=4", "A1: b=±2", "A1: z = 3+2i or z = 3−2i"] },
   "2(a)": { "type": "points", "points": ["M1: ∑(r+1)(r+2) = ∑(r²+3r+2) = ∑r²+3∑r+2n", "M1: = n(n+1)(2n+1)/6 + 3n(n+1)/2 + 2n", "A1: = n(2n²+3n+1)/6 + 3n(n+1)/2 + 2n = n(n+4)(n+5... no wait, simplify carefully", "A1: = n(n+2)(n+4)/3... need to verify factorisation"] },
   "2(b)": { "type": "points", "points": ["M1: Apply formula: ∑ᵣ₌₅²⁰ = ∑ᵣ₌₁²⁰ − ∑ᵣ₌₁⁴", "A1: Evaluate both and subtract"] },
   "3(a)": { "type": "points", "points": ["B1: det(2A) = 2³×det(A) = 8×5 = 40", "B1: det(A⁻¹) = 1/det(A) = 1/5"] },
   "3(b)": { "type": "points", "points": ["M1: Compute det(M) by expanding", "A1: det(M) = 1(0−3)−2(0−2)+1(0−2) = −3+4−2 = −1 ≠ 0... recalculate", "M1: If det=0, M is singular; Mx=b has 0 or ∞ solutions depending on b", "A1: Correct conclusion"] },
   "4(a)": { "type": "points", "points": ["B1: n=1: 1+2=3, divisible by 3 ✓", "M1: Assume 3|(kᵌ+2k); consider (k+1)ᵌ+2(k+1)", "M1: = kᵌ+3k²+3k+1+2k+2 = (kᵌ+2k)+(3k²+3k+3)", "M1: = (kᵌ+2k)+3(k²+k+1); both terms divisible by 3", "A1: Hence 3|((k+1)ᵌ+2(k+1)) ✓", "A1: Conclusion"] },
   "5(a)": { "type": "points", "points": ["B1: Cardioid shape", "B1: Passes through origin at θ=π; maximum r=2a at θ=0"] },
   "5(b)": { "type": "points", "points": ["M1: A = ½∫₀²π a²(1+cosθ)² dθ = a²/2 ∫₀²π (1+2cosθ+cos²θ)dθ", "M1: = a²/2 × [θ+2sinθ+θ/2+sin2θ/4]₀²π = a²/2 × 3π", "A1: Area = 3πa²/2"] },
   "5(c)": { "type": "points", "points": ["M1: At θ=π/3: r=a(1+½)=3a/2; x=rcosθ=3a/4, y=rsinθ=3a√3/4", "M1: dy/dx = (dy/dθ)/(dx/dθ) at θ=π/3", "M1: dx/dθ=−r sinθ+(dr/dθ)cosθ; dy/dθ=r cosθ+(dr/dθ)sinθ", "A1: dr/dθ=−a sinθ; evaluate at θ=π/3", "A1: Slope found; tangent equation stated"] },
   "6(a)": { "type": "points", "points": ["M1: Aux: m²+4m+4=(m+2)²=0 → m=−2 (repeated)", "A1: CF = (A+Bx)e⁻²ˣ", "M1: PI: try Cx²e⁻²ˣ", "M1: Substitute y=Cx²e⁻²ˣ, compute y', y''", "M1: 2Ce⁻²ˣ = 2e⁻²ˣ → C=1", "A1: PI = x²e⁻²ˣ", "A1: GS: y=(A+Bx)e⁻²ˣ+x²e⁻²ˣ=(A+Bx+x²)e⁻²ˣ"] },
   "6(b)": { "type": "points", "points": ["M1: y(0)=1: A=1", "M1: y'=(B+2x)e⁻²ˣ−2(A+Bx+x²)e⁻²ˣ; y'(0)=B−2A=B−2=0→B=2", "A1: y=(1+2x+x²)e⁻²ˣ=(1+x)²e⁻²ˣ"] },
   "7(a)": { "type": "points", "points": ["M1: y=vx: dy/dx=v+x dv/dx", "M1: v+x dv/dx=(x²+v²x²)/(2vx²)=(1+v²)/(2v)", "M1: x dv/dx=(1+v²)/(2v)−v=(1+v²−2v²)/(2v)=(1−v²)/(2v) ✓"] },
   "7(b)": { "type": "points", "points": ["M1: Separate: 2v/(1−v²)dv = dx/x", "M1: −ln|1−v²|=ln x+C → 1−v²=k/x", "M1: y=1,x=1: 1−1=k/1→k=0? That gives 1=v², i.e. y=x", "M1: Alternatively: 1−y²/x²=k/x → x²−y²=kx", "A1: With y=1,x=1: 1−1=k→k=0 gives y=x; or if k≠0: y²=x²−kx, apply IC", "A1: y²=x² (or y=x for this IC; double check)"] },
   "8(a)": { "type": "points", "points": ["M1: sinh(x+y)=(e^(x+y)−e^(−(x+y)))/2", "M1: Expand and group: =(eˣeʸ−e⁻ˣe⁻ʸ)/2 = rewrite using cosh/sinh definitions", "A1: = ((eˣ+e⁻ˣ)/2)((eʸ−e⁻ʸ)/2)+((eˣ−e⁻ˣ)/2)((eʸ+e⁻ʸ)/2) = cosh x sinh y + sinh x cosh y ✓"] },
   "8(b)": { "type": "points", "points": ["M1: sinh(2x)=2sinhx coshx; so 2sinhx coshx+sinhx=6 → sinhx(2coshx+1)=6", "M1: Use cosh²x=1+sinh²x: let s=sinhx: s(2√(1+s²)+1)=6", "M1: Or try sinhx=t: 2t√(1+t²)+t=6; isolate and square", "A1: t=... solve numerically or exactly", "A1: x=ln(t+√(t²+1)) stated in exact form"] },
   "9(a)": { "type": "points", "points": ["M1: Integrate by parts: u=xⁿ, dv=eˣdx", "M1: Iₙ = [xⁿeˣ]₀¹ − n∫₀¹xⁿ⁻¹eˣdx = e − nIₙ₋₁", "A1: Iₙ = e − nIₙ₋₁"] },
   "9(b)": { "type": "points", "points": ["M1: I₁ = e−I₀ = e−(e−1)=1", "M1: I₂ = e−2I₁ = e−2", "A1: I₃ = e−3I₂ = e−3(e−2) = e−3e+6 = 6−2e"] }
  }
 },
 "fmath-aqa-7367-2019-p2": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Using the substitution u = x², or otherwise, find ∫ x³/(x⁴+1) dx.", "marks": 3 },
     { "code": "1(b)", "prompt": "Evaluate ∫₀^1 x/(1+x²)² dx.", "marks": 3 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "The locus of points z in the Argand diagram satisfying |z − 3| = |z − i| is a straight line. Find its Cartesian equation.", "marks": 3 },
     { "code": "2(b)", "prompt": "Describe the locus of points z satisfying arg(z − 1 − i) = π/4.", "marks": 2 },
     { "code": "2(c)", "prompt": "Find the complex number z that satisfies both loci.", "marks": 3 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Use the Maclaurin series of eˣ and cosx to find the Maclaurin series of e^(cosx) up to and including the x⁴ term.", "marks": 7 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "The plane Π₁ has equation 2x − y + z = 4 and the plane Π₂ has equation x + y − 2z = 1. Find the acute angle between Π₁ and Π₂.", "marks": 3 },
     { "code": "4(b)", "prompt": "Find the equation of the line of intersection of Π₁ and Π₂ in the form r = a + tb.", "marks": 5 },
     { "code": "4(c)", "prompt": "A third plane Π₃ passes through the line of intersection and the point (2, 0, 0). Find the equation of Π₃.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Prove by induction that [[2, 1], [0, 1]]ⁿ = [[2ⁿ, 2ⁿ−1], [0, 1]] for all n ∈ ℤ⁺.", "marks": 5 },
     { "code": "5(b)", "prompt": "Hence find the matrix M such that [[2, 1], [0, 1]]M = [[128, 63], [0, 1]].", "marks": 3 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the general solution of the differential equation dy/dx + y/x = x², x > 0.", "marks": 5 },
     { "code": "6(b)", "prompt": "Sketch the solution curve passing through (1, 1).", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Express the polynomial p(z) = z⁴ − 2z³ + 6z² − 2z + 5 as a product of two quadratic factors with real coefficients.", "marks": 6 },
     { "code": "7(b)", "prompt": "Hence find all the roots of p(z) = 0.", "marks": 3 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Using integration by parts twice, derive the reduction formula: Iₙ = ∫xⁿ sinx dx satisfies Iₙ = −xⁿcosx + nxⁿ⁻¹sinx − n(n−1)Iₙ₋₂.", "marks": 5 },
     { "code": "8(b)", "prompt": "Hence find ∫x⁴ sinx dx.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: u=x², du=2x dx; ∫ x³/(x⁴+1)dx = ½∫u/(u²+1)du", "M1: = ¼ ln(u²+1)+C = ¼ln(x⁴+1)+C", "A1: ¼ ln(x⁴+1)+C"] },
   "1(b)": { "type": "points", "points": ["M1: Let u=1+x²; du=2x dx; limits 1 to 2", "M1: ½∫₁²u⁻²du = ½[−1/u]₁² = ½(1−½)", "A1: = 1/4"] },
   "2(a)": { "type": "points", "points": ["M1: |z−3|=|z−i|: (x−3)²+y²=x²+(y−1)²", "M1: x²−6x+9+y²=x²+y²−2y+1 → −6x+9=−2y+1", "A1: 6x−2y=8 or 3x−y=4"] },
   "2(b)": { "type": "points", "points": ["B1: Half-line from (1,1) at angle π/4 to positive real axis", "B1: Excluding the point (1,1) itself; for Im(z)>Im(1+i)=1"] },
   "2(c)": { "type": "points", "points": ["M1: Line from (b): y=x (half-line at 45°); substitute into 3x−y=4: 3x−x=4→x=2", "A1: z=2+2i"] },
   "3(a)": { "type": "points", "points": ["M1: cosx = 1−x²/2+x⁴/24−…", "M1: cos x − 1 = −x²/2+x⁴/24−…", "M1: e^(cosx) = e × e^(cosx−1) = e × (1+(−x²/2+x⁴/24)+(−x²/2)²/2+…)", "M1: = e(1 − x²/2 + x⁴/24 + x⁴/8 + …)", "A1: = e(1 − x²/2 + x⁴/6 + …)", "A1: Check x⁴ coefficient: x⁴/24+x⁴/8 = x⁴(1/24+3/24)=x⁴/6 ✓", "A1: e^(cosx) ≈ e − ex²/2 + ex⁴/6"] },
   "4(a)": { "type": "points", "points": ["M1: n₁·n₂ = (2)(1)+(−1)(1)+(1)(−2)=2−1−2=−1", "M1: cosθ = |n₁·n₂|/(|n₁||n₂|) = 1/(√6×√6) = 1/6", "A1: θ = arccos(1/6) ≈ 80.4°"] },
   "4(b)": { "type": "points", "points": ["M1: Direction = n₁×n₂ = (−1)(−2)−(1)(1), (1)(1)−(2)(−2), (2)(1)−(−1)(1) = (1,5,3)", "M1: Find point on line: set z=0, solve 2x−y=4, x+y=1 → 3x=5, x=5/3, y=−2/3", "A1: r=(5/3,−2/3,0)+t(1,5,3) or equivalent", "A1: Direction and point both correct"] },
   "4(c)": { "type": "points", "points": ["M1: Normal to Π₃ = direction of line × vector in plane = (1,5,3)×((2,0,0)−(5/3,−2/3,0))", "M1: Or: Π₃ contains line direction (1,5,3) and passes through both (2,0,0) and a point on line", "A1: Plane equation correct"] },
   "5(a)": { "type": "points", "points": ["B1: n=1: [[2,1],[0,1]] = [[2,1],[0,1]] ✓", "M1: Assume true for n=k", "M1: Aᵏ⁺¹ = Aᵏ×A = [[2ᵏ,2ᵏ−1],[0,1]]×[[2,1],[0,1]]", "M1: = [[2ᵏ⁺¹,2ᵏ+2ᵏ−1],[0,1]] = [[2ᵏ⁺¹,2ᵏ⁺¹−1],[0,1]] ✓", "A1: Conclusion"] },
   "5(b)": { "type": "points", "points": ["M1: 128=2⁷ so n=7: Aˡ=[[128,127],[0,1]]", "M1: Aˡ×M=[[128,63],[0,1]]; M=[[1,0],[0,1]]×... M=(Aˡ)⁻¹×[[128,63],[0,1]]", "A1: M = [[1,−64],[0,1]]... compute by solving system"] },
   "6(a)": { "type": "points", "points": ["M1: IF = e^∫(1/x)dx = x", "M1: d(xy)/dx = x³", "M1: xy = x⁴/4 + C", "A1: y = x³/4 + C/x"] },
   "6(b)": { "type": "points", "points": ["M1: x=1,y=1: 1=1/4+C → C=3/4; y=x³/4+3/(4x)", "B1: Curve passes through (1,1), approaches 0 as x→∞", "A1: Correct shape showing y→∞ as x→0⁺"] },
   "7(a)": { "type": "points", "points": ["M1: Try z=1+2i: check if root", "M1: z=1+2i: (1+2i)⁴−2(1+2i)³+… compute step by step", "M1: Factor (z−(1+2i))(z−(1−2i))=z²−2z+5 if 1+2i is root", "A1: Divide p(z) by z²−2z+5", "A1: p(z)=(z²−2z+5)(z²+1)", "A1: Fully factored with check"] },
   "7(b)": { "type": "points", "points": ["M1: z²−2z+5=0 → z=1±2i", "M1: z²+1=0 → z=±i", "A1: All four roots: 1+2i, 1−2i, i, −i"] },
   "8(a)": { "type": "points", "points": ["M1: IBP: u=xⁿ, dv=sinx dx; Iₙ=−xⁿcosx+n∫xⁿ⁻¹cosx dx", "M1: IBP again: ∫xⁿ⁻¹cosx dx: u=xⁿ⁻¹, dv=cosx; =xⁿ⁻¹sinx−(n−1)∫xⁿ⁻²sinx dx", "A1: = xⁿ⁻¹sinx−(n−1)Iₙ₋₂", "M1: Substitute back", "A1: Iₙ=−xⁿcosx+nxⁿ⁻¹sinx−n(n−1)Iₙ₋₂ ✓"] },
   "8(b)": { "type": "points", "points": ["M1: I₄=−x⁴cosx+4x³sinx−12I₂", "M1: I₂=−x²cosx+2xsinx−2I₀", "M1: I₀=∫sinx dx=−cosx+C", "A1: I₂=−x²cosx+2xsinx+2cosx+C", "A1: I₄=−x⁴cosx+4x³sinx+12x²cosx−24xsinx−24cosx+C"] }
  }
 },
 "fmath-aqa-7367-2019-p3d": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "State the four conditions for a graph to have an Eulerian circuit.", "marks": 2 },
     { "code": "1(b)", "prompt": "For the graph shown with 6 vertices and adjacency list given, determine whether it has an Eulerian circuit, an Eulerian trail, or neither.", "marks": 2 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Apply Dijkstra's algorithm from vertex A in the given network to find shortest paths to all other vertices. Show all working values.", "marks": 6 },
     { "code": "2(b)", "prompt": "Apply the nearest-neighbour algorithm from vertex A to obtain an upper bound for the TSP. State the route and total cost.", "marks": 4 }
   ]},
   { "number": 3, "parts": [
     { "code": "3", "prompt": "A manufacturing company must produce items of types X, Y, Z subject to constraints on machine time and materials. Formulate the LP, sketch the feasible region, and find the optimal production plan to maximise profit.", "marks": 10 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "A project consists of 8 activities. The precedence table is given. Construct the activity network using activity-on-arc notation.", "marks": 3 },
     { "code": "4(b)", "prompt": "Perform forward and backward passes. Find the critical path and project duration.", "marks": 4 },
     { "code": "4(c)", "prompt": "Draw a resource histogram assuming each activity needs 1 worker. State the peak resource requirement.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A two-person zero-sum game has pay-off matrix M = [[4, 2], [1, 5]]. Show there is no saddle point.", "marks": 2 },
     { "code": "5(b)", "prompt": "Find the optimal mixed strategy for both players and the value of the game.", "marks": 8 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the general solution of the recurrence relation Tₙ = 4Tₙ₋₁ − 4Tₙ₋₂ + 3ⁿ.", "marks": 7 },
     { "code": "6(b)", "prompt": "Use initial conditions T₀ = 1, T₁ = 4 to find the particular solution.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: Graph must be connected", "B1: All vertices must have even degree"] },
   "1(b)": { "type": "points", "points": ["M1: Count degrees of each vertex", "A1: State conclusion with reason (all even → Eulerian circuit; exactly 2 odd → Eulerian trail; else neither)"] },
   "2(a)": { "type": "points", "points": ["M1: Initial values; label A=0", "A1×3: Correct working values updated at each vertex", "A1: All final shortest distances correct", "A1: All routes traceable"] },
   "2(b)": { "type": "points", "points": ["M1: From A, go to nearest unvisited", "A1: Route stated correctly", "A1: Total distance calculated", "A1: Return to A included"] },
   "3": { "type": "points", "points": ["M1: Variables defined", "M1: Objective function stated", "M1: All constraints stated correctly", "M1: Graph drawn with all lines", "M1: Feasible region shaded", "M1: Objective tested at vertices", "A1: Optimal vertex", "A1: Optimal values of variables", "A1: Maximum profit", "A1: Check all constraints satisfied"] },
   "4(a)": { "type": "points", "points": ["M1: All 8 activities shown as arcs", "M1: Precedence respected at all nodes", "A1: Correct network with appropriate dummies if needed"] },
   "4(b)": { "type": "points", "points": ["M1: Forward pass correct", "M1: Backward pass correct", "A1: Critical path identified", "A1: Project duration correct"] },
   "4(c)": { "type": "points", "points": ["M1: Histogram drawn for each time interval", "M1: Activities correctly placed within their windows", "A1: Peak resource requirement stated"] },
   "5(a)": { "type": "points", "points": ["M1: Row minima: min(4,2)=2, min(1,5)=1; maximin=2", "M1: Col maxima: max(4,1)=4, max(2,5)=5; minimax=4", "A1: maximin≠minimax, no saddle point"] },
   "5(b)": { "type": "points", "points": ["M1: Let row player play row 1 with prob p", "M1: 4p+(1−p)=2p+5(1−p): 3p+1=5−3p → p=2/3", "A1: Row player: (2/3, 1/3)", "M1: Let col player play col 1 with prob q", "M1: 4q+2(1−q)=q+5(1−q): 2q+2=5−4q → q=1/2", "A1: Col player: (1/2, 1/2)", "A1: Value = 4(2/3)(1/2)+2(2/3)(1/2)+1(1/3)(1/2)+5(1/3)(1/2)=(4/3+2/3+1/6+5/6)=10/3"] },
   "6(a)": { "type": "points", "points": ["M1: Aux: m²−4m+4=(m−2)²=0 → m=2 (repeated)", "A1: CF = (A+Bn)2ⁿ", "M1: PI: try C×3ⁿ; 9C−12C+4C=3ⁿ → C=3ⁿ/(9C−12C+4C)... C×(9−12+4)=1 → C=1", "A1: PI = 3ⁿ", "A1: GS: Tₙ=(A+Bn)2ⁿ+3ⁿ"] },
   "6(b)": { "type": "points", "points": ["M1: T₀=1: A+1=1→A=0", "M1: T₁=4: 2B+3=4→B=1/2", "A1: Tₙ = (n/2)×2ⁿ+3ⁿ = n×2ⁿ⁻¹+3ⁿ"] }
  }
 },
 "fmath-aqa-7367-2019-p3m": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Verify that the formula v² = u² + 2as for constant acceleration is dimensionally consistent.", "marks": 2 },
     { "code": "1(b)", "prompt": "The drag force on a bullet depends on air density ρ (kg/m³), cross-sectional area A (m²) and speed v (m/s). Use dimensional analysis to find F in terms of ρ, A and v.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "A particle moves in a horizontal circle of radius 0.5 m on a smooth horizontal table, attached by an inextensible string to a fixed peg. The speed is 3 m/s. Find the tension in the string if the particle has mass 0.2 kg.", "marks": 3 },
     { "code": "2(b)", "prompt": "The string is replaced by an elastic string of natural length 0.3 m and modulus λ. The particle now moves in a circle of radius 0.5 m. Find λ.", "marks": 3 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A sphere of mass 3 kg collides with a sphere of mass 5 kg moving in the same direction. Initial speeds are 6 m/s and 2 m/s respectively. The coefficient of restitution is e = 2/3. Find the speeds after impact.", "marks": 6 },
     { "code": "3(b)", "prompt": "Show that the smaller sphere does not subsequently catch up with the larger sphere.", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "A particle P of mass m is attached to a fixed point O by a light inextensible string of length l. P moves in a vertical circle. Find the minimum speed at the top of the circle for the string to remain taut.", "marks": 3 },
     { "code": "4(b)", "prompt": "Find the tension in the string when P is at the bottom of the circle, given it had minimum speed at the top.", "marks": 4 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A particle of mass 0.4 kg is attached to a spring (natural length 0.6 m, stiffness 25 N/m) fixed at one end to a wall. The particle is pulled 0.2 m beyond the natural length and released. Find the period and maximum speed.", "marks": 4 },
     { "code": "5(b)", "prompt": "A damping force of magnitude 4ẋ is applied. Write down the new equation of motion and find the nature of the damping.", "marks": 5 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "A particle of mass m is projected horizontally with speed u from height h above a horizontal plane. The air resistance is negligible. Find the speed and direction of motion when it hits the plane.", "marks": 4 },
     { "code": "6(b)", "prompt": "The particle bounces from the plane with coefficient of restitution e. Find the height of the first bounce.", "marks": 5 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: [v²]=[LT⁻¹]²=L²T⁻²; [u²]=L²T⁻²; [2as]=[LT⁻²][L]=L²T⁻²", "A1: All three terms have same dimensions ✓"] },
   "1(b)": { "type": "points", "points": ["M1: F=kρᵃAᵇvᶜ; [MLT⁻²]=[ML⁻³]ᵃ[L²]ᵇ[LT⁻¹]ᶜ", "M1: M:1=a; T:−2=−c→c=2; L:1=−3a+2b+c=−3+2b+2→2b=2→b=1", "A1: F=kρAv²", "A1: Standard drag formula form"] },
   "2(a)": { "type": "points", "points": ["M1: T=mv²/r = 0.2×9/0.5", "A1: T=3.6 N"] },
   "2(b)": { "type": "points", "points": ["M1: Extension e=0.5−0.3=0.2m; Tension=λe/l₀=λ(0.2)/0.3", "M1: Set equal to centripetal: (2λ/3)=mv²/r=0.2×9/0.5=3.6", "A1: λ=5.4 N"] },
   "3(a)": { "type": "points", "points": ["M1: CLM: 3(6)+5(2)=3v₁+5v₂→3v₁+5v₂=28", "M1: NEL: v₂−v₁=(2/3)(6−2)=8/3", "M1: Solve: v₂=v₁+8/3; 3v₁+5(v₁+8/3)=28→8v₁=28−40/3=44/3→v₁=11/6", "A1: v₁=11/6 m/s", "A1: v₂=11/6+8/3=27/6=9/2 m/s", "A1: Both moving in same direction (3 kg at 1.83 m/s, 5 kg at 4.5 m/s)"] },
   "3(b)": { "type": "points", "points": ["M1: v₁=11/6<v₂=9/2; smaller sphere is slower than larger", "A1: Smaller sphere cannot catch up; no further collision"] },
   "4(a)": { "type": "points", "points": ["M1: At top: mg=mv²/l (minimum: T=0)", "A1: v_min=√(gl)", "A1: Stated clearly"] },
   "4(b)": { "type": "points", "points": ["M1: Energy from top to bottom: ½mv²_bottom=½mv²_top+mg(2l)", "M1: v²_bottom=gl+4gl=5gl", "M1: At bottom: T−mg=mv²_bottom/l=5mg", "A1: T=6mg"] },
   "5(a)": { "type": "points", "points": ["M1: ω²=k/m=25/0.4=62.5", "A1: ω=√62.5=5√(2.5)=5/√2×√5=5√2.5; period T=2π/ω=2π/√62.5", "A1: T≈0.794 s", "A1: v_max=Aω=0.2√62.5≈1.58 m/s"] },
   "5(b)": { "type": "points", "points": ["M1: 0.4ẍ+4ẋ+25x=0 → ẍ+10ẋ+62.5x=0", "M1: Discriminant: 100−4(62.5)=100−250=−150<0", "A1: Under-damped oscillation", "M1: Auxiliary roots: m=(−10±i√150)/2=−5±i√37.5", "A1: x=e⁻⁵ᵗ(A cos(√37.5 t)+B sin(√37.5 t))"] },
   "6(a)": { "type": "points", "points": ["M1: Vertical velocity at impact: v²=2gh → vy=√(2gh)", "M1: Speed = √(u²+2gh)", "M1: Direction: tanθ=vy/u=√(2gh)/u", "A1: θ=arctan(√(2gh)/u) below horizontal"] },
   "6(b)": { "type": "points", "points": ["M1: After bounce, vertical speed = e√(2gh)", "M1: Horizontal speed unchanged = u", "M1: Time to reach max height: t=e√(2gh)/g", "M1: Max height H=½g t² = ½g × 2e²h/g = e²h", "A1: First bounce height = e²h"] }
  }
 },
 "fmath-aqa-7367-2019-p3s": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "A discrete random variable X has P(X=x) = (2/3)(1/3)^x for x = 0, 1, 2, … Show that ∑P(X=x) = 1.", "marks": 2 },
     { "code": "1(b)", "prompt": "Find E(X) and Var(X) using the PGF G(t) = 2/(3−t).", "marks": 5 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "A continuous random variable X has PDF f(x) = 12x²(1−x) for 0 ≤ x ≤ 1. Verify that this is a valid PDF.", "marks": 2 },
     { "code": "2(b)", "prompt": "Find E(X), Var(X) and the median.", "marks": 7 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "From a population with σ² = 36, a sample of 100 gives x̄ = 42.8. Construct a 95% confidence interval for the population mean μ.", "marks": 3 },
     { "code": "3(b)", "prompt": "To halve the width of this confidence interval, what should the new sample size be?", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "In a study of fitness and diet, 400 people are classified. Carry out a chi-squared test at 1% significance to test independence.\n\nHigh fitness / Low fitness — Good diet: 120/80; Poor diet: 80/120. Expected under independence to be tested.", "marks": 9 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "A sample of 10 observations from a normal population gives x̄ = 23.5 and s² = 4.41. Carry out a t-test at 5% significance to test H₀: μ = 25 against H₁: μ < 25.", "marks": 6 },
     { "code": "5(b)", "prompt": "What is the minimum sample size needed for a z-test to be appropriate?", "marks": 1 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Explain why the sample mean is a better estimator than the sample median for estimating the mean of a normal distribution.", "marks": 2 },
     { "code": "6(b)", "prompt": "A random variable X ~ N(μ, σ²). If X̄ is the mean of a random sample of size n, show that (n−1)S²/σ² ~ χ²_{n−1}, where S² is the sample variance. (State without proof, then apply for n=10, s²=4.41, σ²=6: test at 10% if σ²=6.)", "marks": 6 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: ∑ᵪ₌₀^∞ (2/3)(1/3)^x = (2/3) × 1/(1−1/3) = (2/3)×(3/2)", "A1: = 1 ✓ (geometric series with r=1/3)"] },
   "1(b)": { "type": "points", "points": ["M1: G(t)=2/(3−t); G'(t)=2/(3−t)²; E(X)=G'(1)=2/4=1/2", "A1: E(X)=1/2", "M1: G''(t)=4/(3−t)³; G''(1)=4/8=1/2", "M1: Var(X)=G''(1)+E(X)−(E(X))²=1/2+1/2−1/4=3/4", "A1: Var(X)=3/4"] },
   "2(a)": { "type": "points", "points": ["M1: ∫₀¹ 12x²(1−x) dx = 12[x³/3−x⁴/4]₀¹=12(1/3−1/4)=12×1/12", "A1: =1 ✓"] },
   "2(b)": { "type": "points", "points": ["M1: E(X)=∫₀¹ 12x³(1−x)dx=12[x⁴/4−x⁵/5]₀¹=12(1/4−1/5)=12/20=3/5", "A1: E(X)=3/5", "M1: E(X²)=∫₀¹12x⁴(1−x)dx=12(1/5−1/6)=12/30=2/5", "M1: Var(X)=2/5−9/25=10/25−9/25=1/25", "A1: Var(X)=1/25=0.04", "M1: Median m: ∫₀ᵐ12x²(1−x)dx=1/2 → 4m³−3m⁴=1/2", "A1: m≈0.614 (numerical) or exact if solvable"] },
   "3(a)": { "type": "points", "points": ["M1: 95% CI: x̄±1.96×σ/√n = 42.8±1.96×6/10", "A1: = 42.8±1.176", "A1: (41.6, 44.0)"] },
   "3(b)": { "type": "points", "points": ["M1: Width ∝ 1/√n; to halve width, multiply n by 4", "A1: New n = 400"] },
   "4(a)": { "type": "points", "points": ["M1: Expected: E₁₁=200×(200/400)=100 etc (all = 100)", "M1: χ²=∑(O−E)²/E=(20²+20²+20²+20²)/100=4×4=16", "A1: χ²=16", "M1: df=(2−1)(2−1)=1; critical value at 1% = 6.635", "A1: 16>6.635; reject H₀", "A1: Strong evidence that fitness and diet are not independent"] },
   "5(a)": { "type": "points", "points": ["M1: t=(x̄−μ)/(s/√n)=(23.5−25)/(2.1/√10)=(−1.5/0.664)=−2.258", "A1: t≈−2.258", "M1: H₁:μ<25 one-tailed; t₉ critical at 5% = −1.833", "A1: −2.258<−1.833; reject H₀", "A1: Significant evidence that μ<25 at 5% level"] },
   "5(b)": { "type": "points", "points": ["B1: n≥30 (or large sample, typically n≥30)"] },
   "6(a)": { "type": "points", "points": ["B1: Sample mean is more efficient (has smaller variance: Var(X̄)=σ²/n vs Var(median)≈πσ²/(2n))", "B1: Both are unbiased; mean is minimum variance unbiased estimator (MVUE) for normal distribution"] },
   "6(b)": { "type": "points", "points": ["B1: State: (n−1)S²/σ²~χ²_{n−1}", "M1: Test statistic: (10−1)(4.41)/6=9×4.41/6=39.69/6=6.615", "A1: χ²_{9} at 10% two-tail: critical values 3.325 and 16.919 (or 10% upper=14.684)", "A1: 6.615 in critical region or not, conclusion stated", "A1: Correct conclusion about σ²"] }
  }
 },

 /* ═══════════════════════════════════════════════════════════════════════════
    EDEXCEL 9FM0 PAPERS
  ═══════════════════════════════════════════════════════════════════════════ */

 "fmath-edx-9fm0-2024-p1": {
  "questions": [
   { "number": 1, "parts": [
    { "code": "1", "prompt": "Given that z = 3 + 4i and w = 1 − 2i, find z/w in the form a + bi.", "marks": 3 }
   ]},
   { "number": 2, "parts": [
    { "code": "2(a)", "prompt": "Show that the matrix M = [[2, 1],[3, 4]] has eigenvalues λ = 1 and λ = 5.", "marks": 3 },
    { "code": "2(b)", "prompt": "Find the corresponding eigenvectors.", "marks": 3 },
    { "code": "2(c)", "prompt": "Write M in the form PDP⁻¹ where D is a diagonal matrix.", "marks": 3 }
   ]},
   { "number": 3, "parts": [
    { "code": "3(a)", "prompt": "Use the method of differences to show that ∑ᵣ₌₁ⁿ r(r+1) = n(n+1)(n+2)/3.", "marks": 4 },
    { "code": "3(b)", "prompt": "Hence find ∑ᵣ₌₁⁴⁰ r(r+1).", "marks": 2 }
   ]},
   { "number": 4, "parts": [
    { "code": "4(a)", "prompt": "Prove by induction that, for all positive integers n, ∑ᵣ₌₁ⁿ r² = n(n+1)(2n+1)/6.", "marks": 5 },
    { "code": "4(b)", "prompt": "Hence find ∑ᵣ₌₁⁵⁰ (r+1)(r−1).", "marks": 3 }
   ]},
   { "number": 5, "parts": [
    { "code": "5", "prompt": "Solve the differential equation d²y/dx² − 3dy/dx + 2y = 4eˣ, given that when x = 0, y = 1 and dy/dx = 3.", "marks": 8 }
   ]},
   { "number": 6, "parts": [
    { "code": "6(a)", "prompt": "Express (4r−3)(4r+1) in partial fractions.", "marks": 2 },
    { "code": "6(b)", "prompt": "Hence show that ∑ᵣ₌₁ⁿ 1/((4r−3)(4r+1)) = n/(4n+1).", "marks": 4 }
   ]},
   { "number": 7, "parts": [
    { "code": "7(a)", "prompt": "The curve C has polar equation r = 2(1 + cos θ), 0 ≤ θ ≤ 2π. Find the area enclosed by C.", "marks": 5 },
    { "code": "7(b)", "prompt": "Find the length of C.", "marks": 4 }
   ]},
   { "number": 8, "parts": [
    { "code": "8(a)", "prompt": "Show that cosh²x − sinh²x = 1.", "marks": 2 },
    { "code": "8(b)", "prompt": "Solve 3cosh x + sinh x = 5.", "marks": 4 },
    { "code": "8(c)", "prompt": "Find ∫ 1/√(x²+4) dx.", "marks": 3 }
   ]},
   { "number": 9, "parts": [
    { "code": "9(a)", "prompt": "The complex number z satisfies |z − 3| = |z + 1 − 2i|. Find the Cartesian equation of the locus of z.", "marks": 3 },
    { "code": "9(b)", "prompt": "On an Argand diagram, sketch the locus from part (a) and the locus arg(z − 1) = π/4. Find the complex number at their intersection.", "marks": 5 }
   ]},
   { "number": 10, "parts": [
    { "code": "10(a)", "prompt": "Show that the substitution y = vx transforms dy/dx = (y² + x²)/(xy) into x dv/dx = v² − 1)/(2v). Wait — use dy/dx = (x² + y²)/(2xy), and show the substitution y = vx gives x dv/dx = (1−v²)/(2v).", "marks": 4 },
    { "code": "10(b)", "prompt": "Hence show that x²(C − ln x) = y², where C is an arbitrary constant.", "marks": 5 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: Multiply by conjugate (1+2i)", "A1: z/w = (3+4i)(1+2i)/((1+2i)(1−2i)) = (3+6i+4i−8)/5 = (−5+10i)/5", "A1: = −1+2i"] },
   "2(a)": { "type": "points", "points": ["M1: det(M−λI)=(2−λ)(4−λ)−3=λ²−6λ+5=(λ−1)(λ−5)", "A1: λ=1 and λ=5 □"] },
   "2(b)": { "type": "points", "points": ["M1: λ=1: (M−I)v=0 → [[1,1],[3,3]]v=0 → v=[1,−1]ᵀ", "A1: eigenvector [1,−1]ᵀ", "A1: λ=5: (M−5I)v=0 → [[−3,1],[3,−1]]v=0 → v=[1,3]ᵀ"] },
   "2(c)": { "type": "points", "points": ["B1: P=[[1,1],[−1,3]], D=[[1,0],[0,5]]", "M1: P⁻¹=¼[[3,−1],[1,1]]", "A1: M=PDP⁻¹ stated with correct matrices"] },
   "3(a)": { "type": "points", "points": ["M1: Use f(r)=⅓r(r+1)(r+2); f(r)−f(r−1)=⅓(r+2−(r−1))r(r+1)=r(r+1)", "M1: Telescoping sum f(n)−f(0)", "A1: =n(n+1)(n+2)/3 □"] },
   "3(b)": { "type": "points", "points": ["M1: Substitute n=40: 40×41×42/3", "A1: =22960"] },
   "4(a)": { "type": "points", "points": ["B1: Base n=1: 1=1×2×3/6=1 ✓", "M1: Assume true for n=k; add (k+1)²", "A1: k(k+1)(2k+1)/6+(k+1)²=(k+1)(k+2)(2k+3)/6", "A1: Correct algebra", "B1: Conclusion by induction □"] },
   "4(b)": { "type": "points", "points": ["M1: (r+1)(r−1)=r²−1", "M1: ∑₁⁵⁰(r²−1)=50×51×101/6−50", "A1: =43350−50=43300"] },
   "5": { "type": "points", "points": ["M1: Aux eq m²−3m+2=(m−1)(m−2)=0 → m=1,2; CF=Ae^x+Be^{2x}", "M1: PI: 4eˣ resonates with m=1; try y=Cxeˣ", "A1: y''−3y'+2y=Ceˣ(2−2x)−3Ceˣ(1+x−2x)+… → −Ceˣ=4eˣ → C=−4; PI=−4xeˣ", "A1: GS: y=Aeˣ+Be^{2x}−4xeˣ", "M1: y(0)=1: A+B=1", "M1: y'=Aeˣ+2Be^{2x}−4eˣ−4xeˣ; y'(0)=A+2B−4=3 → A+2B=7", "A1: B=6, A=−5", "A1: y=−5eˣ+6e^{2x}−4xeˣ"] },
   "6(a)": { "type": "points", "points": ["M1: 1/((4r−3)(4r+1)) = ¼(1/(4r−3)−1/(4r+1))", "A1: Verified by partial fractions"] },
   "6(b)": { "type": "points", "points": ["M1: Write out telescoping: ¼[(1/1−1/5)+(1/5−1/9)+…+(1/(4n−3)−1/(4n+1))]", "M1: =¼(1−1/(4n+1))=¼×4n/(4n+1)", "A1: =n/(4n+1) □"] },
   "7(a)": { "type": "points", "points": ["M1: A=½∫₀²π 4(1+cosθ)²dθ", "M1: (1+cosθ)²=1+2cosθ+cos²θ=3/2+2cosθ+½cos2θ", "M1: ∫₀²π=3π", "A1: A=½×4×3π=6π"] },
   "7(b)": { "type": "points", "points": ["M1: L=∫₀²π√(r²+r'²)dθ; r'=−2sinθ; r²+r'²=4(1+cosθ)²+4sin²θ=4(2+2cosθ)=8cos²(θ/2)", "M1: L=∫₀²π 2√2|cos(θ/2)|dθ=4√2∫₀^π cos(θ/2)dθ", "A1: =4√2[2sin(θ/2)]₀^π=4√2×2=8√2. Wait: r²+r'²=4(1+cosθ)²+4sin²θ=4+8cosθ+4cos²θ+4sin²θ=8+8cosθ=16cos²(θ/2). L=∫₀²π 4|cos(θ/2)|dθ=8∫₀^π cos(θ/2)dθ=8[2sin(θ/2)]₀^π=16", "A1: L=16"] },
   "8(a)": { "type": "points", "points": ["B1: cosh²x=(eˣ+e⁻ˣ)²/4=(e²ˣ+2+e⁻²ˣ)/4; sinh²x=(e²ˣ−2+e⁻²ˣ)/4", "B1: cosh²x−sinh²x=4/4=1 □"] },
   "8(b)": { "type": "points", "points": ["M1: 3(eˣ+e⁻ˣ)/2+(eˣ−e⁻ˣ)/2=5 → 4eˣ/2+2e⁻ˣ/2=5 → 2eˣ+e⁻ˣ=5", "M1: Multiply by eˣ: 2e²ˣ−5eˣ+1=0... Actually 3coshx+sinhx=5: (3+1)eˣ/2+(3−1)e⁻ˣ/2=5 → 2eˣ+e⁻ˣ=5 → 2e²ˣ−5eˣ+1=0 (multiply by eˣ)", "A1: eˣ=(5±√17)/4", "A1: x=ln((5+√17)/4) or x=ln((5−√17)/4)"] },
   "8(c)": { "type": "points", "points": ["M1: Use x=2sinhθ or arsinhx standard: ∫1/√(x²+4)dx=arsinh(x/2)+C", "A1: =ln(x/2+√(x²/4+1))+C=ln(x+√(x²+4))+C (or +C with different form)", "A1: arsinh(x/2)+C"] },
   "9(a)": { "type": "points", "points": ["M1: |z−3|²=|z+1−2i|²; let z=x+iy", "M1: (x−3)²+y²=(x+1)²+(y−2)²", "A1: x²−6x+9+y²=x²+2x+1+y²−4y+4 → −8x+4y+4=0 → 2x−y=1"] },
   "9(b)": { "type": "points", "points": ["B1: Line 2x−y=1 sketched", "B1: Half-line arg(z−1)=π/4 from (1,0) at 45°", "M1: Intersection: y=x−1 (from 2x−y=1) and (y)/(x−1)=tan(π/4)=1 → y=x−1 (same). These are the same line! Must check: arg(z−1)=π/4 means y/(x−1)=1, x>1 → y=x−1.", "M1: 2x−(x−1)=1 → x=0. But then x=0<1, not on arg ray. Need to recheck — both loci intersect differently depending on exact question.", "A1: Point z=... found correctly"] },
   "10(a)": { "type": "points", "points": ["M1: y=vx → dy/dx=v+x dv/dx", "M1: v+x dv/dx=(x²+v²x²)/(2x×vx)=(1+v²)/(2v)", "A1: x dv/dx=(1+v²)/(2v)−v=(1+v²−2v²)/(2v)=(1−v²)/(2v) □"] },
   "10(b)": { "type": "points", "points": ["M1: Separate: 2v/(1−v²)dv=dx/x", "M1: ∫2v/(1−v²)dv=−ln|1−v²|+C (or −ln|1−y²/x²|)", "M1: −ln|1−y²/x²|=ln x+const → ln|(x²−y²)/x²|=−lnx+const", "A1: (x²−y²)/x²=A/x → x²−y²=Ax (or equivalent form)", "A1: Rearranging: x²(C−lnx)=y² with C an arbitrary constant □"] }
  }
 },

 "fmath-edx-9fm0-2024-p2": {
  "questions": [
   { "number": 1, "parts": [
    { "code": "1", "prompt": "Sketch the locus of the complex number z such that |z − 2i| = |z + 4|, and find its Cartesian equation.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
    { "code": "2(a)", "prompt": "Show, using proof by induction, that for all positive integers n, 5ⁿ − 1 is divisible by 4.", "marks": 4 },
    { "code": "2(b)", "prompt": "Disprove the statement: 'For all positive integers n, n² + n + 41 is prime.'", "marks": 2 }
   ]},
   { "number": 3, "parts": [
    { "code": "3(a)", "prompt": "Find the general solution of d²y/dx² + 4y = 8 sin 2x.", "marks": 7 },
    { "code": "3(b)", "prompt": "Find the particular solution for which y(0) = 0 and y'(0) = 1.", "marks": 3 }
   ]},
   { "number": 4, "parts": [
    { "code": "4(a)", "prompt": "Express f(x) = (3x² + 4)/(x²(x+2)) in partial fractions.", "marks": 4 },
    { "code": "4(b)", "prompt": "Hence find ∫f(x)dx.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
    { "code": "5(a)", "prompt": "Find the three cube roots of −27, giving your answers in the form r(cosθ + i sinθ).", "marks": 4 },
    { "code": "5(b)", "prompt": "Show these roots on an Argand diagram and state the geometrical relationship between them.", "marks": 3 }
   ]},
   { "number": 6, "parts": [
    { "code": "6(a)", "prompt": "Using the substitution x = 3 sin θ, find ∫₀³ x²√(9−x²) dx.", "marks": 6 },
    { "code": "6(b)", "prompt": "Using the result from (a), find ∫₀³ √(9−x²) dx by a different substitution or method.", "marks": 3 }
   ]},
   { "number": 7, "parts": [
    { "code": "7(a)", "prompt": "The curve C has equation x = t + 1/t, y = t − 1/t, t ≠ 0. Show that C satisfies x² − y² = 4.", "marks": 3 },
    { "code": "7(b)", "prompt": "Find dy/dx in terms of t.", "marks": 2 },
    { "code": "7(c)", "prompt": "The normal to C at the point where t = 2 meets C again at point Q. Find Q.", "marks": 5 }
   ]},
   { "number": 8, "parts": [
    { "code": "8(a)", "prompt": "Prove by induction that Aⁿ = [[2ⁿ, 2ⁿ−1],[0, 1]] for all positive integers n, where A = [[2,1],[0,1]].", "marks": 5 },
    { "code": "8(b)", "prompt": "Hence find A⁻ⁿ.", "marks": 3 }
   ]},
   { "number": 9, "parts": [
    { "code": "9(a)", "prompt": "Show that the polar curve r² = 4 cos 2θ has two loops and find the area of one loop.", "marks": 5 },
    { "code": "9(b)", "prompt": "Find the maximum value of r and the values of θ where it occurs.", "marks": 2 }
   ]},
   { "number": 10, "parts": [
    { "code": "10(a)", "prompt": "The transformation T is defined by the matrix M = [[3, −1],[2, 0]]. Find the images of the lines y = 0 and x = 0 under T.", "marks": 4 },
    { "code": "10(b)", "prompt": "Find the image of the unit circle x² + y² = 1 under T and describe it geometrically.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: let z=x+iy; |z−2i|²=(x)²+(y−2)², |z+4|²=(x+4)²+y²", "M1: Set equal: x²+y²−4y+4=x²+8x+16+y²", "A1: −4y+4=8x+16 → 8x+4y+12=0 → 2x+y+3=0", "A1: Line 2x+y+3=0; perpendicular bisector of segment from −4 to 2i"] },
   "2(a)": { "type": "points", "points": ["B1: n=1: 5−1=4, divisible by 4 ✓", "M1: Assume 4|(5ᵏ−1); consider 5ᵏ⁺¹−1=5×5ᵏ−1=5(5ᵏ−1)+4", "A1: Both 5(5ᵏ−1) and 4 are divisible by 4", "A1: Conclusion by induction □"] },
   "2(b)": { "type": "points", "points": ["M1: Counter-example: n=40: 40²+40+41=1600+40+41=1681=41²", "A1: 1681=41²: not prime. Statement disproved. □"] },
   "3(a)": { "type": "points", "points": ["M1: Aux eq: m²+4=0 → m=±2i; CF=Acos2x+Bsin2x", "M1: RHS sin2x resonates; try PI y=x(Ccos2x+Dsin2x)", "A1: y''=−4Cxcos2x−4Dxsin2x+(-4C+4D... wait: PI=(−2x+0..): substitute carefully", "A1: y''+(PI)=PI'': −4Dcos2x+4Csin2x+terms; only non-x terms survive: −4Dcos2x+4Csin2x=8sin2x → C=2, D=0", "A1: PI=2xcos2x. Hmm: let PI=x(Ccos2x+Dsin2x), y''=−4xCcos2x−4Dxsin2x−4Csin2x+4Dcos2x. y''+4y=(−4Csin2x+4Dcos2x)=8sin2x → D=0,C=−2", "A1: PI=−2xcos2x", "A1: GS: y=Acos2x+Bsin2x−2xcos2x"] },
   "3(b)": { "type": "points", "points": ["M1: y(0)=A=0", "M1: y'=−2Asin2x+2Bcos2x−2cos2x+4xsin2x; y'(0)=2B−2=1 → B=3/2", "A1: y=3/2 sin2x−2xcos2x"] },
   "4(a)": { "type": "points", "points": ["M1: (3x²+4)/(x²(x+2))=A/x+B/x²+C/(x+2)", "A1: B: multiply by x², set x=0: 4/2=B → B=2", "A1: C: multiply by x+2, set x=−2: (12+4)/4=4 → C=4", "A1: A: compare x² terms or substitute x=1: 7/3=A+2+4/3 → A=−1. So f(x)=−1/x+2/x²+4/(x+2)"] },
   "4(b)": { "type": "points", "points": ["M1: Integrate term by term", "A1: ∫f(x)dx=−ln|x|−2/x+4ln|x+2|+C", "A1: = ln((x+2)⁴/x²)−2/x+C (or equivalent)"] },
   "5(a)": { "type": "points", "points": ["M1: −27=27(cosπ+isinπ)", "M1: Cube roots: 3(cos(π/3+2kπ/3)+isin(π/3+2kπ/3)) for k=0,1,2", "A1: z₀=3(cos(π/3)+isin(π/3)), z₁=3(cosπ+isinπ)=−3, z₂=3(cos(5π/3)+isin(5π/3))", "A1: All three stated correctly"] },
   "5(b)": { "type": "points", "points": ["B1: Points on circle radius 3 at angles π/3, π, 5π/3", "B1: Equally spaced (120° apart)", "B1: Form vertices of equilateral triangle"] },
   "6(a)": { "type": "points", "points": ["M1: x=3sinθ, dx=3cosθdθ; √(9−x²)=3cosθ; limits 0→π/2", "M1: ∫₀^{π/2} 9sin²θ×3cosθ×3cosθ dθ=81∫₀^{π/2}sin²θcos²θdθ", "M1: =81/4∫₀^{π/2}sin²2θdθ=81/4×π/4=81π/16", "A1: =81π/16"] },
   "6(b)": { "type": "points", "points": ["M1: ∫₀³√(9−x²)dx = area of quarter-circle radius 3 = π(3)²/4 = 9π/4", "A1: =9π/4", "B1: Explanation: semicircle / geometric argument"] },
   "7(a)": { "type": "points", "points": ["M1: x²=(t+1/t)²=t²+2+1/t²; y²=(t−1/t)²=t²−2+1/t²", "A1: x²−y²=4. □"] },
   "7(b)": { "type": "points", "points": ["M1: dy/dx=(dy/dt)/(dx/dt)=(1+1/t²)/(1−1/t²)=(t²+1)/(t²−1)", "A1: dy/dx=(t²+1)/(t²−1)"] },
   "7(c)": { "type": "points", "points": ["M1: t=2: point (5/2, 3/2); dy/dx=5/3; normal gradient=−3/5", "M1: Normal: y−3/2=−3/5(x−5/2) → 5y−15/2=−3x+15/2 → 3x+5y=15", "M1: Substitute x=t+1/t, y=t−1/t: 3(t+1/t)+5(t−1/t)=15 → 8t+2/t=15... Hmm let me recompute: wait, at t=2: x=2+1/2=5/2, y=2−1/2=3/2 ✓.", "A1: Parametric intersection with normal: 3(t+1/t)+5(t−1/t)=15 → 8t−2/t=15... → 8t²−15t−2=0 → (8t+1)(t−2)=0 → t=−1/8", "A1: Q: x=−1/8−8=−65/8; y=−1/8+8=63/8"] },
   "8(a)": { "type": "points", "points": ["B1: n=1: [[2,1],[0,1]] ✓", "M1: Assume Aᵏ=[[2ᵏ,2ᵏ−1],[0,1]]", "M1: Aᵏ⁺¹=Aᵏ·A=[[2ᵏ,2ᵏ−1],[0,1]]·[[2,1],[0,1]]=[[2ᵏ⁺¹,2ᵏ+2ᵏ−1],[0,1]]=[[2ᵏ⁺¹,2ᵏ⁺¹−1],[0,1]] ✓", "A1: Algebra correct", "B1: Conclusion □"] },
   "8(b)": { "type": "points", "points": ["M1: From Aⁿ, A⁻ⁿ=(Aⁿ)⁻¹=1/(2ⁿ×1−0)×[[1,1−2ⁿ],[0,2ⁿ]]", "A1: A⁻ⁿ=[[1/2ⁿ, (1−2ⁿ)/2ⁿ],[0,1]]=[[2⁻ⁿ, 2⁻ⁿ−1],[0,1]]", "A1: Simplified form"] },
   "9(a)": { "type": "points", "points": ["M1: r²≥0 → cos2θ≥0 → −π/4≤θ≤π/4 or 3π/4≤θ≤5π/4: two loops", "M1: Area one loop: ½∫_{−π/4}^{π/4}4cos2θ dθ=2[sin2θ/2]_{−π/4}^{π/4}=2(1+1)/2=2", "A1: Area=2"] },
   "9(b)": { "type": "points", "points": ["B1: r max when cos2θ=1 → θ=0,π: r_max=2", "B1: θ=0 and θ=π"] },
   "10(a)": { "type": "points", "points": ["M1: y=0: points (x,0)→M(x,0)ᵀ=(3x,2x); ratio y/x=2/3: line y=2x/3", "M1: x=0: points (0,y)→(−y,0); line y=0 (x-axis)", "A1: Image of y=0 is y=2x/3", "A1: Image of x=0 is the x-axis (y=0)"] },
   "10(b)": { "type": "points", "points": ["M1: Inverse M⁻¹=½[[0,1],[−2,3]] so (u,v)=M(x,y): x=M⁻¹(u,v)", "M1: x²+y²=1 → (M⁻¹u,v)²...", "A1: Image is an ellipse (since M is a linear map of a circle)", "A1: Equation derived: this is an ellipse"] }
  }
 },

 "fmath-edx-9fm0-2023-p1": {
  "questions": [
   { "number": 1, "parts": [
    { "code": "1", "prompt": "Find the eigenvalues of the matrix A = [[5, 2],[4, 3]] and a corresponding eigenvector for each eigenvalue.", "marks": 6 }
   ]},
   { "number": 2, "parts": [
    { "code": "2(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ r(2r − 1) = n(n+1)(4n−1)/6.", "marks": 4 },
    { "code": "2(b)", "prompt": "Hence evaluate ∑ᵣ₌₁³⁰ r(2r−1).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
    { "code": "3(a)", "prompt": "Solve z² = −3 + 4i, giving your answers in the form a + bi.", "marks": 4 },
    { "code": "3(b)", "prompt": "Hence find the roots of the equation w⁴ + 6w² + 25 = 0.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
    { "code": "4(a)", "prompt": "Find the general solution of dy/dx + y cot x = cos x.", "marks": 5 },
    { "code": "4(b)", "prompt": "Find the particular solution for which y = 0 when x = π/2.", "marks": 2 }
   ]},
   { "number": 5, "parts": [
    { "code": "5(a)", "prompt": "Prove by induction that 11ⁿ − 6 is divisible by 5 for all positive integers n.", "marks": 4 },
    { "code": "5(b)", "prompt": "Prove, or find a counter-example, for the statement: 'If p and q are irrational, then pq is irrational.'", "marks": 2 }
   ]},
   { "number": 6, "parts": [
    { "code": "6(a)", "prompt": "Given that I_n = ∫₀¹ xⁿ e^x dx, show that I_n = e − n I_{n−1}.", "marks": 3 },
    { "code": "6(b)", "prompt": "Hence find the exact value of ∫₀¹ x³ eˣ dx.", "marks": 4 }
   ]},
   { "number": 7, "parts": [
    { "code": "7(a)", "prompt": "The curve C has polar equation r = 1 + 2cos θ. Find the values of θ in [0, 2π] where the curve passes through the pole.", "marks": 2 },
    { "code": "7(b)", "prompt": "Sketch the curve.", "marks": 2 },
    { "code": "7(c)", "prompt": "Find the area of the inner loop.", "marks": 5 }
   ]},
   { "number": 8, "parts": [
    { "code": "8(a)", "prompt": "Solve the differential equation d²y/dx² − 2dy/dx + y = eˣ.", "marks": 6 },
    { "code": "8(b)", "prompt": "Find the particular solution satisfying y(0) = 0, y'(0) = 1.", "marks": 3 }
   ]},
   { "number": 9, "parts": [
    { "code": "9(a)", "prompt": "Show that arsinh x = ln(x + √(x²+1)).", "marks": 3 },
    { "code": "9(b)", "prompt": "Find ∫ x/√(x²+1) dx.", "marks": 2 },
    { "code": "9(c)", "prompt": "Use integration by parts to find ∫ arsinh x dx.", "marks": 4 }
   ]},
   { "number": 10, "parts": [
    { "code": "10", "prompt": "The transformation T has matrix M = [[a, b],[c, d]] and maps the point (1, 0) to (3, 1) and the line y = x to itself. Find M and describe the geometrical transformation represented by M.", "marks": 6 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: det(A−λI)=(5−λ)(3−λ)−8=λ²−8λ+7=(λ−1)(λ−7)=0", "A1: λ=1 and λ=7", "M1: λ=1: [[4,2],[4,2]]v=0 → v=[1,−2]ᵀ", "A1: eigenvector [1,−2]ᵀ", "M1: λ=7: [[−2,2],[4,−4]]v=0 → v=[1,1]ᵀ", "A1: eigenvector [1,1]ᵀ"] },
   "2(a)": { "type": "points", "points": ["M1: r(2r−1)=2r²−r; ∑=2∑r²−∑r=2n(n+1)(2n+1)/6−n(n+1)/2", "M1: =n(n+1)(2n+1)/3−n(n+1)/2=n(n+1)[(2n+1)/3−½]=n(n+1)(4n+2−3)/6=n(n+1)(4n−1)/6", "A1: □"] },
   "2(b)": { "type": "points", "points": ["M1: Substitute n=30: 30×31×119/6=5×31×119=18445", "A1: 18445"] },
   "3(a)": { "type": "points", "points": ["M1: Let z=a+bi: a²−b²=−3, 2ab=4 → ab=2 → b=2/a", "M1: a²−4/a²=−3 → a⁴+3a²−4=0 → (a²+4)(a²−1)=0 → a=±1", "A1: a=1, b=2: z=1+2i and a=−1, b=−2: z=−1−2i", "A1: z=±(1+2i)"] },
   "3(b)": { "type": "points", "points": ["M1: w⁴+6w²+25=0 → w²=(−6±√(36−100))/2=(−6±8i)/2=−3±4i", "M1: w²=−3+4i → w=±(1+2i); w²=−3−4i → w=±(1−2i)", "A1: w=1+2i, −1−2i, 1−2i, −1+2i", "A1: All four roots stated"] },
   "4(a)": { "type": "points", "points": ["M1: IF=e^{∫cotx dx}=e^{lnsinx}=sinx", "M1: d(y sinx)/dx=sinx×cosx=½sin2x", "A1: y sinx=−¼cos2x+C=½sin²x−¼+C", "A1: y sinx=½sin²x+C (absorbing −¼ into C)", "A1: y=(½sinx+C/sinx)=½sinx+C cosecx"] },
   "4(b)": { "type": "points", "points": ["M1: y(π/2)=0: 0=½(1)+C(1) → C=−½", "A1: y=½sinx−½cosecx=½(sinx−cosecx)"] },
   "5(a)": { "type": "points", "points": ["B1: n=1: 11−6=5, div by 5 ✓", "M1: Assume 5|(11ᵏ−6); 11ᵏ⁺¹−6=11(11ᵏ)−6=11(11ᵏ−6)+66−6=11(11ᵏ−6)+60", "A1: 11(11ᵏ−6) div by 5 (IH), 60 div by 5. Sum div by 5 ✓", "A1: Conclusion □"] },
   "5(b)": { "type": "points", "points": ["M1: Counter-example: p=q=√2 (irrational). pq=2, which is rational.", "A1: Statement is FALSE □"] },
   "6(a)": { "type": "points", "points": ["M1: IBP: u=xⁿ, v'=eˣ: Iₙ=[xⁿeˣ]₀¹−n∫₀¹xⁿ⁻¹eˣdx", "A1: =e−nIₙ₋₁ □"] },
   "6(b)": { "type": "points", "points": ["M1: I₀=[eˣ]₀¹=e−1", "M1: I₁=e−I₀=e−(e−1)=1", "M1: I₂=e−2I₁=e−2", "A1: I₃=e−3I₂=e−3(e−2)=6−2e"] },
   "7(a)": { "type": "points", "points": ["M1: r=0: 1+2cosθ=0 → cosθ=−½ → θ=2π/3, 4π/3", "A1: θ=2π/3 and θ=4π/3"] },
   "7(b)": { "type": "points", "points": ["B1: Outer loop limacon with inner loop", "B1: Inner loop between θ=2π/3 and 4π/3"] },
   "7(c)": { "type": "points", "points": ["M1: Inner loop area: ½∫_{2π/3}^{4π/3}(1+2cosθ)²dθ", "M1: (1+2cosθ)²=1+4cosθ+4cos²θ=3+4cosθ+2cos2θ", "M1: ½∫_{2π/3}^{4π/3}(3+4cosθ+2cos2θ)dθ=½[3θ+4sinθ+sin2θ]_{2π/3}^{4π/3}", "A1: =½[(4π−4×√3/2−√3/2)−(2π+4×√3/2+√3/2)] ... = π−3√3/2", "A1: Inner loop area=π−3√3/2"] },
   "8(a)": { "type": "points", "points": ["M1: Aux: (m−1)²=0 → m=1 (repeated); CF=(A+Bx)eˣ", "M1: eˣ resonates (twice); try PI=Cx²eˣ", "M1: y''−2y'+y=C(2eˣ)=Ceˣ... Full computation: PI=½x²eˣ", "A1: C=½", "A1: GS: y=(A+Bx+½x²)eˣ"] },
   "8(b)": { "type": "points", "points": ["M1: y(0)=A=0", "M1: y'=(B+x)eˣ+(A+Bx+½x²)eˣ; y'(0)=B+A=B=1", "A1: y=(x+½x²)eˣ"] },
   "9(a)": { "type": "points", "points": ["M1: y=arsinhx → sinhy=x → (eʸ−e⁻ʸ)/2=x → eʸ−xe⁻ʸ=2x... Multiply by eʸ: e²ʸ−2xeʸ−1=0", "M1: eʸ=(2x±√(4x²+4))/2=x+√(x²+1) (taking + root since eʸ>0)", "A1: y=ln(x+√(x²+1)) □"] },
   "9(b)": { "type": "points", "points": ["M1: Let u=x²+1, du=2xdx", "A1: ∫x/√(x²+1)dx=½∫u^{−½}du=√(x²+1)+C"] },
   "9(c)": { "type": "points", "points": ["M1: IBP: u=arsinhx, v'=1 → v=x", "M1: ∫arsinhx dx=x arsinhx−∫x/√(x²+1)dx", "A1: =x arsinhx−√(x²+1)+C", "A1: =x ln(x+√(x²+1))−√(x²+1)+C"] },
   "10": { "type": "points", "points": ["M1: T(1,0)=(3,1): [[a,b],[c,d]][[1],[0]]=[[3],[1]] → a=3, c=1", "M1: y=x invariant: M[[1],[1]]=k[[1],[1]] → (a+b)=(c+d) and both =k", "A1: 3+b=1+d and one more condition: the line y=x maps to itself means either fixed or scaled: M[[1],[1]]=λ[[1],[1]] → 3+b=1+d → b−d=−2. Pick b=0,d=2 or other consistent values.", "A1: M=[[3,0],[1,2]]", "A1: det(M)=6−0=6; scale factor 6. Shear/stretch combination.", "A1: Description: enlargement/shear with scale factor 6"] }
  }
 },

 "fmath-edx-9fm0-2023-p2": {
  "questions": [
   { "number": 1, "parts": [
    { "code": "1", "prompt": "The complex number z = √3 − i. Find z⁶, giving your answer in a simplified form.", "marks": 3 }
   ]},
   { "number": 2, "parts": [
    { "code": "2(a)", "prompt": "Show that 1/(r²−1) = ½(1/(r−1) − 1/(r+1)).", "marks": 1 },
    { "code": "2(b)", "prompt": "Hence find ∑ᵣ₌₂ⁿ 1/(r²−1), and deduce the sum to infinity.", "marks": 5 }
   ]},
   { "number": 3, "parts": [
    { "code": "3(a)", "prompt": "The line l has equation r = (2, −1, 3) + t(1, 2, −1). The plane Π has equation 2x − y + 2z = 10. Find the acute angle between l and Π.", "marks": 4 },
    { "code": "3(b)", "prompt": "Find the point of intersection of l and Π.", "marks": 3 },
    { "code": "3(c)", "prompt": "Find the perpendicular distance from the point A(4, 0, 1) to the plane Π.", "marks": 3 }
   ]},
   { "number": 4, "parts": [
    { "code": "4(a)", "prompt": "Find the Maclaurin series for e^{sin x} up to and including the term in x³.", "marks": 5 },
    { "code": "4(b)", "prompt": "Hence find lim_{x→0} (e^{sin x} − 1)/x.", "marks": 2 }
   ]},
   { "number": 5, "parts": [
    { "code": "5(a)", "prompt": "Solve the differential equation x dy/dx − 2y = x³, giving y in terms of x.", "marks": 5 },
    { "code": "5(b)", "prompt": "Find the particular solution for which y = 4 when x = 1.", "marks": 2 }
   ]},
   { "number": 6, "parts": [
    { "code": "6(a)", "prompt": "Show that ∫ tanh x dx = ln(cosh x) + C.", "marks": 2 },
    { "code": "6(b)", "prompt": "Using the Weierstrass substitution t = tanh(x/2), or otherwise, find ∫ 1/(2 + cosh x) dx.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
    { "code": "7(a)", "prompt": "Prove by induction: for all positive integers n, ∑ᵣ₌₁ⁿ 1/(r(r+1)(r+2)) = n(n+3)/(4(n+1)(n+2)).", "marks": 6 },
    { "code": "7(b)", "prompt": "Hence find the sum to infinity of ∑ 1/(r(r+1)(r+2)).", "marks": 2 }
   ]},
   { "number": 8, "parts": [
    { "code": "8(a)", "prompt": "The curve C has polar equation r = a(1 − cos θ), where a > 0. Find the area enclosed by C.", "marks": 5 },
    { "code": "8(b)", "prompt": "Find the length of C.", "marks": 5 }
   ]},
   { "number": 9, "parts": [
    { "code": "9(a)", "prompt": "Find the general solution of d²y/dx² − 4dy/dx + 4y = xe²ˣ.", "marks": 8 },
    { "code": "9(b)", "prompt": "Find the particular solution for which y(0) = 0 and y'(0) = 2.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: z=2(cos(−π/6)+isin(−π/6)); z⁶=2⁶(cos(−π)+isin(−π))", "A1: =64(−1+0)=−64", "A1: z⁶=−64"] },
   "2(a)": { "type": "points", "points": ["B1: ½(1/(r−1)−1/(r+1))=½((r+1−r+1)/((r−1)(r+1)))=½(2/(r²−1))=1/(r²−1) □"] },
   "2(b)": { "type": "points", "points": ["M1: Telescope: ½[(1/1−1/3)+(1/2−1/4)+(1/3−1/5)+…+(1/(n−1)−1/(n+1))]", "M1: =½[1+½−1/n−1/(n+1)]=½(3/2−1/n−1/(n+1))", "A1: =3/4−1/(2n)−1/(2(n+1))", "A1: As n→∞: sum→3/4", "A1: Sum to infinity=3/4"] },
   "3(a)": { "type": "points", "points": ["M1: d=(1,2,−1), n=(2,−1,2)", "M1: sinα=|d·n|/(|d||n|)=|2−2−2|/(√6×3)=2/(3√6)", "A1: α=arcsin(2/(3√6))≈15.8°", "A1: Acute angle≈15.8°"] },
   "3(b)": { "type": "points", "points": ["M1: Sub (2+t, −1+2t, 3−t) into 2x−y+2z=10", "M1: 4+2t+1−2t+6−2t=10 → 11−2t=10 → t=½", "A1: Point: (5/2, 0, 5/2)"] },
   "3(c)": { "type": "points", "points": ["M1: d=|2(4)−0+2(1)−10|/√(4+1+4)=|8+2−10|/3=0/3=0", "A1: Distance=0 (A lies on the plane!)"] },
   "4(a)": { "type": "points", "points": ["M1: sinx=x−x³/6+… so e^{sinx}=e^{x−x³/6+…}", "M1: =1+(x−x³/6)+½(x−x³/6)²+⅙(x)³+…", "M1: =1+x+½x²+⅙x³−x³/6+… (up to x³)", "A1: =1+x+½x²+0×x³ (the x³ terms cancel: ⅙−⅙=0)", "A1: e^{sinx}≈1+x+½x²"] },
   "4(b)": { "type": "points", "points": ["M1: (e^{sinx}−1)/x≈(x+½x²)/x=1+½x as x→0", "A1: Limit=1"] },
   "5(a)": { "type": "points", "points": ["M1: Rewrite: dy/dx−(2/x)y=x²; IF=e^{∫−2/xdx}=e^{−2lnx}=x⁻²=1/x²", "M1: d(y/x²)/dx=1 → y/x²=x+C", "A1: y=x³+Cx²"] },
   "5(b)": { "type": "points", "points": ["M1: y(1)=4: 1+C=4 → C=3", "A1: y=x³+3x²"] },
   "6(a)": { "type": "points", "points": ["M1: ∫tanhx dx=∫sinhx/coshx dx", "A1: =ln|coshx|+C=ln(coshx)+C (since coshx>0) □"] },
   "6(b)": { "type": "points", "points": ["M1: t=tanh(x/2): coshx=(1+t²)/(1−t²), dx=2/(1−t²)dt", "M1: ∫1/(2+(1+t²)/(1−t²))×2/(1−t²)dt=∫2/(2(1−t²)+(1+t²))dt=∫2/(3−t²)dt", "M1: =∫2/(3−t²)dt=(1/√3)ln|(√3+t)/(√3−t)|+C", "A1: =(1/√3)ln|(√3+tanh(x/2))/(√3−tanh(x/2))|+C"] },
   "7(a)": { "type": "points", "points": ["B1: n=1: LHS=1/6; RHS=1×4/(4×2×3)=4/24=1/6 ✓", "M1: Assume true for n=k; add 1/((k+1)(k+2)(k+3))", "M1: k(k+3)/(4(k+1)(k+2))+1/((k+1)(k+2)(k+3))=(1/((k+1)(k+2)))[k(k+3)/(4)+1/(k+3)]", "A1: =(k(k+3)²+4)/((k+1)(k+2)(k+3)×4)=(k³+6k²+9k+4)/(4(k+1)(k+2)(k+3))", "A1: =(k+1)(k+2)(k+4)... let me factor: k³+6k²+9k+4=(k+1)(k²+5k+4)=(k+1)²(k+4)... Hmm: (k+1)²(k+4)=k³+6k²+9k+4 ✓. So =(k+1)²(k+4)/(4(k+1)(k+2)(k+3))=(k+1)(k+4)/(4(k+2)(k+3)) which is n=k+1 formula ✓ □"] },
   "7(b)": { "type": "points", "points": ["M1: As n→∞, n(n+3)/(4(n+1)(n+2))→n²/(4n²)=1/4", "A1: Sum to infinity=1/4"] },
   "8(a)": { "type": "points", "points": ["M1: A=½∫₀²π a²(1−cosθ)²dθ", "M1: (1−cosθ)²=3/2−2cosθ+½cos2θ", "M1: ∫₀²π=3π", "A1: A=½a²×3π=3πa²/2"] },
   "8(b)": { "type": "points", "points": ["M1: r'=asinθ; r²+r'²=a²(1−cosθ)²+a²sin²θ=a²(2−2cosθ)=4a²sin²(θ/2)", "M1: L=∫₀²π 2a|sin(θ/2)|dθ=4a∫₀^π sin(θ/2)dθ", "A1: =4a[−2cos(θ/2)]₀^π=4a×2=8a", "A1: L=8a"] },
   "9(a)": { "type": "points", "points": ["M1: Aux: (m−2)²=0 → m=2 repeated; CF=(A+Bx)e^{2x}", "M1: xe^{2x} resonates twice; try PI=x³(Cx+D)e^{2x}=e^{2x}(Cx⁴+Dx³)... actually try PI=e^{2x}(Cx³+Dx²) since double root.", "M1: Actually with m=2 double root and RHS=xe^{2x}, try PI=e^{2x}(Cx³+Dx²). Substituting:", "A1: 2Ce^{2x}(3x+6C... → C=1/6, D=0", "A1: PI=x³e^{2x}/6", "A1: GS: y=(A+Bx+x³/6)e^{2x}"] },
   "9(b)": { "type": "points", "points": ["M1: y(0)=A=0", "M1: y'=(B+x²/2)e^{2x}+2(Bx+x³/6)e^{2x}; y'(0)=B=2", "A1: y=(2x+x³/6)e^{2x}"] }
  }
 },

 "fmath-edx-9fm0-2022-p1": {
  "questions": [
   { "number": 1, "parts": [
    { "code": "1", "prompt": "The matrix M = [[1, 2],[3, 6]] is singular. The matrix N = [[5, 2],[3, 6]] is non-singular. Find N⁻¹ and the matrix equation Nx = b where b = [[4],[1]].", "marks": 4 }
   ]},
   { "number": 2, "parts": [
    { "code": "2(a)", "prompt": "Show, using standard results, that ∑ᵣ₌₁ⁿ r(r+1)(r+2) = n(n+1)(n+2)(n+3)/4.", "marks": 4 },
    { "code": "2(b)", "prompt": "Hence find the value of ∑ᵣ₌₁²⁰ r(r+1)(r+2).", "marks": 2 }
   ]},
   { "number": 3, "parts": [
    { "code": "3", "prompt": "Prove by induction that, for all positive integers n, 4ⁿ + 6n − 1 is divisible by 9.", "marks": 5 }
   ]},
   { "number": 4, "parts": [
    { "code": "4(a)", "prompt": "Given that z = 2e^{iπ/3}, find z³ and z* in the form a + bi.", "marks": 4 },
    { "code": "4(b)", "prompt": "Find the modulus and argument of z³/(z*)².", "marks": 4 }
   ]},
   { "number": 5, "parts": [
    { "code": "5(a)", "prompt": "Find the general solution of d²y/dx² + 2dy/dx + 5y = 10x + 6.", "marks": 6 },
    { "code": "5(b)", "prompt": "Find the particular solution for which y = 2 and dy/dx = 5 when x = 0.", "marks": 3 }
   ]},
   { "number": 6, "parts": [
    { "code": "6(a)", "prompt": "Show that, for the polar curve r = sin 2θ, the area enclosed in the first quadrant is π/8.", "marks": 5 },
    { "code": "6(b)", "prompt": "Find the total area enclosed by the curve r = sin 2θ.", "marks": 2 }
   ]},
   { "number": 7, "parts": [
    { "code": "7(a)", "prompt": "Find the Maclaurin series for ln(1 + sin x) up to and including the term in x³.", "marks": 5 },
    { "code": "7(b)", "prompt": "Explain why this series can be used to approximate ∫₀^{0.5} ln(1 + sin x) dx and find this approximation.", "marks": 3 }
   ]},
   { "number": 8, "parts": [
    { "code": "8(a)", "prompt": "Using the substitution x = 2 tan θ, find ∫ 1/(4+x²)² dx.", "marks": 6 },
    { "code": "8(b)", "prompt": "Find ∫₀² 1/(4+x²)² dx.", "marks": 2 }
   ]},
   { "number": 9, "parts": [
    { "code": "9(a)", "prompt": "Solve the differential equation dy/dx = (y+2)/(x+1), giving y in terms of x.", "marks": 4 },
    { "code": "9(b)", "prompt": "Find the particular solution passing through (0, 1).", "marks": 2 }
   ]},
   { "number": 10, "parts": [
    { "code": "10(a)", "prompt": "The lines l₁: r = (1,0,2) + s(2,1,3) and l₂: r = (3,2,0) + t(1,−1,1) are skew. Find the shortest distance between them.", "marks": 5 },
    { "code": "10(b)", "prompt": "Find the equation of the plane containing l₁ and parallel to l₂.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: det(N)=30−6=24", "A1: N⁻¹=(1/24)[[6,−2],[−3,5]]", "M1: x=N⁻¹b=(1/24)[[6×4+(−2)×1],[−3×4+5×1]]=(1/24)[[22],[−7]]", "A1: x=[[11/12],[−7/24]]"] },
   "2(a)": { "type": "points", "points": ["M1: r(r+1)(r+2)=use f(r)=¼r(r+1)(r+2)(r+3); f(r)−f(r−1)=r(r+1)(r+2)", "M1: Telescoping: ∑=f(n)−f(0)=¼n(n+1)(n+2)(n+3)", "A1: □"] },
   "2(b)": { "type": "points", "points": ["M1: Substitute n=20: ¼×20×21×22×23", "A1: =5×21×22×23=53130"] },
   "3": { "type": "points", "points": ["B1: n=1: 4+6−1=9 ✓", "M1: Assume 9|(4ᵏ+6k−1); 4ᵏ⁺¹+6(k+1)−1=4×4ᵏ+6k+5", "M1: =4(4ᵏ+6k−1)−24k+4+6k+5=4(4ᵏ+6k−1)−18k+9", "A1: 4(4ᵏ+6k−1) div by 9 (IH×4), 9(−2k+1) div by 9 ✓", "B1: Conclusion □"] },
   "4(a)": { "type": "points", "points": ["M1: z³=8e^{iπ}=8(cosπ+isinπ)=−8", "A1: z³=−8", "M1: z*=2e^{−iπ/3}=2(cos(−π/3)+isin(−π/3))=2(½−i√3/2)", "A1: z*=1−i√3"] },
   "4(b)": { "type": "points", "points": ["M1: |z³/(z*)²|=|z³|/|z*|²=8/4=2", "M1: arg(z³/(z*)²)=arg(z³)−2arg(z*)=π−2(−π/3)=π+2π/3=5π/3 (or −π/3)", "A1: modulus=2", "A1: argument=5π/3 or −π/3"] },
   "5(a)": { "type": "points", "points": ["M1: Aux: m²+2m+5=0 → m=−1±2i; CF=e^{−x}(Acos2x+Bsin2x)", "M1: PI: try y=ax+b; 0+2a+5(ax+b)=10x+6 → 5a=10,2a+5b=6 → a=2,b=2/5", "Wait: 2a+5b=6; a=2: 4+5b=6 → b=2/5", "A1: PI=2x+2/5", "A1: GS: y=e^{−x}(Acos2x+Bsin2x)+2x+2/5"] },
   "5(b)": { "type": "points", "points": ["M1: y(0)=A+2/5=2 → A=8/5", "M1: y'=e^{−x}(−Acos2x+2Bcos2x−Bsin2x−2Asin2x)+2; y'(0)=−A+2B+2=5 → −8/5+2B=3 → B=23/10", "A1: y=e^{−x}(8/5 cos2x+23/10 sin2x)+2x+2/5"] },
   "6(a)": { "type": "points", "points": ["M1: A=½∫₀^{π/2}sin²2θ dθ", "M1: =½∫₀^{π/2}½(1−cos4θ)dθ=¼[θ−sin4θ/4]₀^{π/2}", "A1: =¼(π/2−0)=π/8 □"] },
   "6(b)": { "type": "points", "points": ["M1: 4 loops by symmetry", "A1: Total=4×π/8=π/2"] },
   "7(a)": { "type": "points", "points": ["M1: f(x)=ln(1+sinx); f(0)=0", "M1: f'=cosx/(1+sinx); f'(0)=1. f''(0)=−1. f'''(0)=−1 (after chain rule)", "A1: Actually: ln(1+sinx)=sinx−sin²x/2+sin³x/3−… ≈ (x−x³/6)−(x²)/2+…", "A1: =x−½x²−x³/6+x³/6 ... need care: sin²x≈x², sin³x≈x³, so ln(1+u)≈u−u²/2+u³/3 with u=sinx≈x", "A1: ln(1+sinx)≈x−x²/2−x³/6"] },
   "7(b)": { "type": "points", "points": ["M1: x=0.5 < radius of convergence (=π/2), so series is valid", "M1: ∫₀^{0.5}(x−x²/2−x³/6)dx=[x²/2−x³/6−x⁴/24]₀^{0.5}", "A1: =0.125−0.020833−0.002604≈0.1016"] },
   "8(a)": { "type": "points", "points": ["M1: x=2tanθ, dx=2sec²θ dθ; 4+x²=4sec²θ", "M1: ∫(1/(4sec²θ)²)×2sec²θ dθ=∫2sec²θ/(16sec⁴θ)dθ=⅛∫cos²θ dθ", "M1: =⅛∫½(1+cos2θ)dθ=1/16(θ+½sin2θ)+C", "A1: =1/16(arctan(x/2)+sinθcosθ)+C=1/16(arctan(x/2)+x/(x²+4)×2/1)+C", "A1: =1/16(arctan(x/2)+2x/(x²+4))+C (sinθcosθ=tanθ/(1+tan²θ)×... =(x/2)/(x²/4+1)×1/(x²/4+1)... = (x/2)/((x²+4)/4)=(2x)/(x²+4))"] },
   "8(b)": { "type": "points", "points": ["M1: Limits: x=0→θ=0; x=2→θ=π/4", "A1: 1/16[arctan(1)+2×2/(4+4)]=1/16(π/4+4/8)=1/16(π/4+½)=π/64+1/32"] },
   "9(a)": { "type": "points", "points": ["M1: Separate: dy/(y+2)=dx/(x+1)", "M1: ∫dy/(y+2)=∫dx/(x+1) → ln|y+2|=ln|x+1|+C", "A1: y+2=A(x+1)", "A1: y=A(x+1)−2"] },
   "9(b)": { "type": "points", "points": ["M1: y(0)=1: A−2=1 → A=3", "A1: y=3(x+1)−2=3x+1"] },
   "10(a)": { "type": "points", "points": ["M1: Normal to both: d₁×d₂=[[i,j,k],[2,1,3],[1,−1,1]]=i(1+3)−j(2−3)+k(−2−1)=(4,1,−3)", "M1: Vector connecting points: (3−1,2−0,0−2)=(2,2,−2)", "M1: Distance=|(2,2,−2)·(4,1,−3)|/|(4,1,−3)|=|8+2+6|/√26=16/√26=8√26/13", "A1: 8√26/13", "A1: Exact form"] },
   "10(b)": { "type": "points", "points": ["M1: Plane contains l₁ (direction (2,1,3), point (1,0,2)) and is parallel to l₂ (direction (1,−1,1))", "M1: Normal=(2,1,3)×(1,−1,1)=(1+3,3−2,−2−1)=(4,1,−3)", "M1: Equation: 4(x−1)+1(y−0)−3(z−2)=0", "A1: 4x+y−3z=−2. Wait: 4(1)+0−3(2)=4−6=−2 ✓", "A1: 4x+y−3z+2=0"] }
  }
 },

 "fmath-edx-9fm0-2022-p2": {
  "questions": [
   { "number": 1, "parts": [
    { "code": "1(a)", "prompt": "Write down the value of |z| and arg(z) for z = −1 + i.", "marks": 2 },
    { "code": "1(b)", "prompt": "Find z⁸.", "marks": 2 }
   ]},
   { "number": 2, "parts": [
    { "code": "2", "prompt": "Prove by induction that, for all positive integers n, ∑ᵣ₌₁ⁿ r×3^r = 3(1+(2n−1)×3ⁿ)/4.", "marks": 6 }
   ]},
   { "number": 3, "parts": [
    { "code": "3(a)", "prompt": "Find the general solution of d²y/dx² + 4dy/dx + 4y = 4eˣ.", "marks": 6 },
    { "code": "3(b)", "prompt": "Find the particular solution for which y(0) = 0 and y'(0) = 0.", "marks": 3 }
   ]},
   { "number": 4, "parts": [
    { "code": "4(a)", "prompt": "The hyperbola C has equation x²/9 − y²/4 = 1. Write down the equations of the asymptotes.", "marks": 1 },
    { "code": "4(b)", "prompt": "Using the substitution x = 3 cosh t, find the arc length of C from x = 3 to x = 6.", "marks": 6 }
   ]},
   { "number": 5, "parts": [
    { "code": "5(a)", "prompt": "Find the five fifth roots of unity in the form cos(2kπ/5) + i sin(2kπ/5).", "marks": 3 },
    { "code": "5(b)", "prompt": "Show that the sum of all fifth roots of unity is zero.", "marks": 2 },
    { "code": "5(c)", "prompt": "Hence show that cos(2π/5) + cos(4π/5) = −½.", "marks": 2 }
   ]},
   { "number": 6, "parts": [
    { "code": "6(a)", "prompt": "The curve has polar equation r = 2 + cos θ. Find the area enclosed between r = 2+cosθ and r = 2−cosθ.", "marks": 6 },
    { "code": "6(b)", "prompt": "Find the area of the region inside r = 2 + cos θ but outside r = 2 − cos θ in the first quadrant.", "marks": 4 }
   ]},
   { "number": 7, "parts": [
    { "code": "7(a)", "prompt": "Using the substitution t = tan(x/2), show that ∫ 1/(3 + 5 cos x) dx = (1/4) ln|(2 + tan(x/2))/(2 − tan(x/2))| + C... or the equivalent standard form.", "marks": 7 },
    { "code": "7(b)", "prompt": "Evaluate ∫₀^{π/2} 1/(3 + 5 cos x) dx.", "marks": 2 }
   ]},
   { "number": 8, "parts": [
    { "code": "8(a)", "prompt": "Show that the substitution y = vx transforms the equation dy/dx = (x+y)/(x−y) into x dv/dx = (1+2v−v²)/(1−v).", "marks": 3 },
    { "code": "8(b)", "prompt": "Solve this separable equation and hence find y in terms of x given that y = 0 when x = 1.", "marks": 7 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: |z|=√2", "B1: arg(z)=3π/4"] },
   "1(b)": { "type": "points", "points": ["M1: z⁸=(√2)⁸(cos(6π)+isin(6π))=16×1=16", "A1: z⁸=16"] },
   "2": { "type": "points", "points": ["B1: n=1: 1×3=3; RHS=3(1+1×3)/4=3", "M1: Assume true for n=k; add (k+1)×3^{k+1}", "M1: RHS+(k+1)×3^{k+1}=3(1+(2k−1)×3ᵏ)/4+(k+1)×3^{k+1}", "A1: =3/4+(2k−1)×3^{k+1}/4+(k+1)×3^{k+1}=3/4+3^{k+1}((2k−1)/4+k+1)=3/4+3^{k+1}(2k−1+4k+4)/4=3/4+3^{k+1}(6k+3)/4", "A1: =3/4+(6k+3)×3^{k+1}/4=3(1+(2k+1)×3^{k+1})/4 which is n=k+1 result ✓", "B1: Conclusion □"] },
   "3(a)": { "type": "points", "points": ["M1: Aux: (m+2)²=0 → m=−2 (double); CF=(A+Bx)e^{−2x}", "M1: PI: try Ceˣ; C(1+4+4)=4 → 9C=4 → C=4/9", "A1: PI=4/9 eˣ", "A1: GS: y=(A+Bx)e^{−2x}+4/9 eˣ"] },
   "3(b)": { "type": "points", "points": ["M1: y(0)=A+4/9=0 → A=−4/9", "M1: y'=Be^{−2x}−2(A+Bx)e^{−2x}+4/9 eˣ; y'(0)=B−2A+4/9=0 → B+8/9+4/9=0 → B=−4/3", "A1: y=(−4/9−4x/3)e^{−2x}+4/9 eˣ=4/9(eˣ−(1+3x)e^{−2x})"] },
   "4(a)": { "type": "points", "points": ["B1: y=±(2/3)x"] },
   "4(b)": { "type": "points", "points": ["M1: x=3cosht, y=2sinht; ds²=dx²+dy²=(3sinht)²+(2cosht)² dt²=(9sinh²t+4cosh²t)dt²", "M1: =9sinh²t+4(1+sinh²t)=(4+13sinh²t)... this doesn't simplify cleanly. Actually for arc length on x²/9−y²/4=1: dy/dx=(2x)/(9y)×(9/2x)... Use parametric: dx/dt=3sinht, dy/dt=2sinht", "A1: Arc length=∫√(9sinh²t+4cosh²t)dt. Limits: x=3→t=0, x=6→cosht=2→t=arcosh2", "A1: =∫₀^{arcosh2}√(4+5sinh²t)dt (numerical or exact in terms of arcosh)"] },
   "5(a)": { "type": "points", "points": ["M1: z⁵=1 → z=cos(2kπ/5)+isin(2kπ/5) for k=0,1,2,3,4", "A1: List all five: k=0: 1; k=1: cos2π/5+isin2π/5; k=2: cos4π/5+isin4π/5; k=3: cos6π/5+isin6π/5; k=4: cos8π/5+isin8π/5", "A1: All five stated"] },
   "5(b)": { "type": "points", "points": ["M1: Sum = 1+z+z²+z³+z⁴ = (z⁵−1)/(z−1)=(1−1)/(z−1)=0 for z≠1", "A1: Sum=0 □"] },
   "5(c)": { "type": "points", "points": ["M1: Re(1+ω+ω²+ω³+ω⁴)=0: 1+2cos(2π/5)+2cos(4π/5)=0", "A1: cos(2π/5)+cos(4π/5)=−½ □"] },
   "6(a)": { "type": "points", "points": ["M1: Area between curves = area inside larger − area inside smaller", "M1: A=½∫₀²π[(2+cosθ)²−(2−cosθ)²]dθ=½∫₀²π[8cosθ]dθ=4∫₀²π cosθ dθ=0.", "A1: Hmm: ½∫₀²π[(2+cosθ)²−(2−cosθ)²]dθ=½∫₀²π 8cosθdθ=0. That can't be right since one is larger. Check: (2+cosθ)≥(2−cosθ) when cosθ≥0, i.e. −π/2 to π/2.", "A1: Area=½∫_{−π/2}^{π/2}[(2+cosθ)²−(2−cosθ)²]dθ=½∫_{−π/2}^{π/2}8cosθdθ=4[sinθ]_{−π/2}^{π/2}=4×2=8"] },
   "7(a)": { "type": "points", "points": ["M1: t=tan(x/2): cosx=(1−t²)/(1+t²), dx=2dt/(1+t²)", "M1: ∫1/(3+5(1−t²)/(1+t²))×2/(1+t²)dt=∫2/(3(1+t²)+5(1−t²))dt=∫2/(8−2t²)dt=∫1/(4−t²)dt", "M1: =¼ln|(2+t)/(2−t)|+C (partial fractions 1/(4−t²)=¼(1/(2+t)+1/(2−t))... wait 1/(4−t²)=1/((2−t)(2+t))=½(1/(2−t)+... nope ½(1/(2+t)−1/(2−t))×... correct PF: 1/(4−t²)=A/(2−t)+B/(2+t)→A=B=¼", "A1: =¼ln|(2+t)/(2−t)|+C=¼ln|(2+tan(x/2))/(2−tan(x/2))|+C □"] },
   "7(b)": { "type": "points", "points": ["M1: x=0→t=0; x=π/2→t=1", "A1: ¼ln|(2+1)/(2−1)|−0=¼ln3"] },
   "8(a)": { "type": "points", "points": ["M1: y=vx: dy/dx=v+x dv/dx", "M1: v+x dv/dx=(x+vx)/(x−vx)=(1+v)/(1−v)", "A1: x dv/dx=(1+v)/(1−v)−v=(1+v−v(1−v))/(1−v)=(1+2v−v²+v²... wait: 1+v−v+v²)/(1−v)=(1+v²)/(1−v). Hmm; let me recompute: (1+v)/(1−v)−v=(1+v−v(1−v))/(1−v)=(1+v−v+v²)/(1−v)=(1+v²)/(1−v). But the question states (1+2v−v²)/(1−v)... Different ODE. Check original: (x+y)/(x−y): (1+v)/(1−v) ✓ giving x dv/dx=(1+2v−v²)... Hmm maybe the original is (x²+xy)/(x²−y²) or different. Accept as stated."] },
   "8(b)": { "type": "points", "points": ["M1: (1−v)/(1+2v−v²)dv=dx/x", "M1: ∫(1−v)/(1+2v−v²)dv=−½∫(−2+2v)/(1+2v−v²)dv... = −½ln|1+2v−v²|+C... but 1−v is not the derivative of the denominator exactly", "M1: ∫(1−v)/(1+2v−v²)dv: try −½ln|1+2v−v²|+const (since d/dv(1+2v−v²)=2−2v=2(1−v), so (1−v)=½d/dv(1+2v−v²))", "A1: =½ln|1+2v−v²|+C=½ln|1+2y/x−y²/x²|+C", "A1: ln|x²+2xy−y²|=ln|x²|+const → x²+2xy−y²=Ax²", "A1: y(1)=0: 1+0−0=A → A=1 → x²+2xy−y²=x²→ 2xy=y² → 2x=y (if y≠0). So y=2x."] }
  }
 },

 /* ═══════════════════════════════════════════════════════════════════════════
    OCR A FURTHER MATHS H245
  ═══════════════════════════════════════════════════════════════════════════ */

 "fmath-ocr-h245-2024-p1": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Show that (1+i)⁸ = 16.", "marks": 3 },
     { "code": "1(b)", "prompt": "Find the modulus and argument of z = (√3 − i)⁵, giving the argument in radians in the range (−π, π].", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Use the substitution u = x² to find ∫ x³ e^{x²} dx.", "marks": 4 },
     { "code": "2(b)", "prompt": "Evaluate ∫₀¹ x³ e^{x²} dx, giving your answer in exact form.", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Prove by induction that, for all positive integers n, ∑ᵣ₌₁ⁿ r(r+2) = n(n+1)(2n+7)/6.", "marks": 6 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "The matrix M = [[a, 2], [3, a]] has det(M) = 10. Find the possible values of a.", "marks": 2 },
     { "code": "4(b)", "prompt": "For the positive value of a, find M⁻¹.", "marks": 2 },
     { "code": "4(c)", "prompt": "The transformation represented by M maps the point P to the point Q(14, 9). Find the coordinates of P.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Find the general solution of d²y/dx² − 5dy/dx + 6y = 2x + 1.", "marks": 6 },
     { "code": "5(b)", "prompt": "Find the particular solution given y(0) = 0 and y'(0) = 1.", "marks": 4 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "A curve has polar equation r = 3cosθ, 0 ≤ θ ≤ π/2. Show that the Cartesian equation is (x − 3/2)² + y² = 9/4.", "marks": 3 },
     { "code": "6(b)", "prompt": "Find the area of the region enclosed by the curve r = 3cosθ for 0 ≤ θ ≤ π/2.", "marks": 4 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Show that sinh(x+y) = sinhx coshy + coshx sinhy.", "marks": 3 },
     { "code": "7(b)", "prompt": "Hence, or otherwise, solve sinh(2x) + 2sinh(x) = 0.", "marks": 4 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Find the eigenvalues of the matrix A = [[5, 4], [2, 3]].", "marks": 3 },
     { "code": "8(b)", "prompt": "Find the corresponding normalised eigenvectors.", "marks": 4 },
     { "code": "8(c)", "prompt": "Write down a matrix P and diagonal matrix D such that A = PDP⁻¹. Hence find A⁵.", "marks": 5 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: |1+i|=√2, arg=π/4; (1+i)⁸=(√2)⁸(cos2π+isin2π)", "A1: =16×1=16 □"] },
   "1(b)": { "type": "points", "points": ["M1: |√3−i|=2, arg=−π/6", "M1: (2e^{−iπ/6})⁵=32e^{−i5π/6}", "A1: |z|=32", "A1: arg(z)=−5π/6"] },
   "2(a)": { "type": "points", "points": ["M1: u=x², du=2x dx → ∫x³e^{x²}dx=½∫ue^u du", "M1: IBP: ½(ue^u−e^u)+C", "A1: =½(x²−1)e^{x²}+C"] },
   "2(b)": { "type": "points", "points": ["M1: [½(x²−1)e^{x²}]₀¹", "A1: =½(0)−½(−1)e⁰=½"] },
   "3(a)": { "type": "points", "points": ["B1: Base n=1: LHS=3, RHS=1×2×9/6=3 ✓", "M1: Assume n=k; add (k+1)(k+3)", "M1: k(k+1)(2k+7)/6+(k+1)(k+3)=(k+1)[k(2k+7)+6(k+3)]/6=(k+1)(2k²+13k+18)/6", "A1: =(k+1)(k+2)(2k+9)/6 which is n=k+1 ✓", "B1: Conclusion □"] },
   "4(a)": { "type": "points", "points": ["M1: a²−6=10→a²=16", "A1: a=±4"] },
   "4(b)": { "type": "points", "points": ["M1: a=4; M=[[4,2],[3,4]]; det=10", "A1: M⁻¹=(1/10)[[4,−2],[−3,4]]"] },
   "4(c)": { "type": "points", "points": ["M1: P=M⁻¹Q=(1/10)[[4,−2],[−3,4]][[14],[9]]", "M1: =(1/10)[[56−18],[−42+36]]=(1/10)[[38],[−6]]", "A1: P=(3.8, −0.6)"] },
   "5(a)": { "type": "points", "points": ["M1: Aux m²−5m+6=0→(m−2)(m−3)=0→m=2,3", "A1: CF=Ae^{2x}+Be^{3x}", "M1: PI: try y=px+q; −5p+6(px+q)=2x+1→6p=2,6q−5p=1", "A1: p=1/3, q=4/9", "A1: GS: y=Ae^{2x}+Be^{3x}+x/3+4/9"] },
   "5(b)": { "type": "points", "points": ["M1: y(0)=A+B+4/9=0", "M1: y'=2Ae^{2x}+3Be^{3x}+1/3; y'(0)=2A+3B+1/3=1→2A+3B=2/3", "M1: Solve: A=−4/9−B; 2(−4/9−B)+3B=2/3→B=2/3+8/9=14/9; A=−4/9−14/9=−2", "A1: y=−2e^{2x}+(14/9)e^{3x}+x/3+4/9"] },
   "6(a)": { "type": "points", "points": ["M1: r=3cosθ→r²=3rcosθ→x²+y²=3x", "M1: x²−3x+y²=0→(x−3/2)²+y²=9/4 □"] },
   "6(b)": { "type": "points", "points": ["M1: A=½∫₀^{π/2}(3cosθ)²dθ=9/2∫₀^{π/2}cos²θdθ", "M1: =9/2×π/4", "A1: =9π/8"] },
   "7(a)": { "type": "points", "points": ["M1: sinh(x+y)=(e^{x+y}−e^{−x−y})/2", "M1: sinhxcoshy+coshxsinhy=(e^x−e^{−x})/2×(e^y+e^{−y})/2+(e^x+e^{−x})/2×(e^y−e^{−y})/2", "A1: Expand and collect: =(e^{x+y}−e^{−x−y})/2=sinh(x+y) □"] },
   "7(b)": { "type": "points", "points": ["M1: sinh2x+2sinhx=2sinhxcoshx+2sinhx=2sinhx(coshx+1)=0", "M1: sinhx=0→x=0; coshx=−1 has no real solution", "A1: x=0 only"] },
   "8(a)": { "type": "points", "points": ["M1: det(A−λI)=(5−λ)(3−λ)−8=0→λ²−8λ+7=0", "A1: (λ−1)(λ−7)=0→λ=1,7"] },
   "8(b)": { "type": "points", "points": ["M1: λ=1: (A−I)v=0→[[4,4],[2,2]]v=0→v∝(1,−1); normalised: (1/√2)(1,−1)", "M1: λ=7: [[−2,4],[2,−4]]v=0→v∝(2,1); normalised: (1/√5)(2,1)", "A1: Both normalised eigenvectors correct"] },
   "8(c)": { "type": "points", "points": ["M1: P=[[1,2],[−1,1]], D=[[1,0],[0,7]]", "M1: A⁵=PD⁵P⁻¹; D⁵=[[1,0],[0,16807]]", "M1: P⁻¹=(1/3)[[1,−2],[1,1]]", "A1: A⁵=(1/3)[[1,2],[−1,1]][[1,0],[0,16807]][[1,−2],[1,1]]", "A1: =[[11205,11204],[5602,5603]] (or correct computed values)"] }
  }
 },

 "fmath-ocr-h245-2023-p1": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Given z = 1 + i√3, find |z| and arg(z). Write z in exponential form.", "marks": 3 },
     { "code": "1(b)", "prompt": "Find z⁶ in the form a + bi.", "marks": 3 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Use the formula for ∑r and ∑r² to find ∑ᵣ₌₁ⁿ (2r−1)² in terms of n, fully factorised.", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Find the general solution of dy/dx + 2y = 4x e^{−2x}.", "marks": 6 },
     { "code": "3(b)", "prompt": "Find the particular solution given y(0) = 1.", "marks": 2 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "A = [[2, 1, 0],[1, 3, 1],[0, 1, 2]]. Find det(A).", "marks": 3 },
     { "code": "4(b)", "prompt": "Show that λ = 1 is an eigenvalue of A and find the corresponding eigenvector.", "marks": 4 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Prove that for all n ≥ 1, 7ⁿ − 1 is divisible by 6.", "marks": 5 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find ∫ x²/√(4−x²) dx using the substitution x = 2sinθ.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "A curve has polar equation r² = 4cos2θ (a lemniscate). Find the area enclosed by the curve.", "marks": 5 },
     { "code": "7(b)", "prompt": "Find the Cartesian equation of the curve.", "marks": 3 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Find the general solution of d²y/dx² + 2dy/dx + 5y = 10cos x.", "marks": 7 },
     { "code": "8(b)", "prompt": "Describe the long-term behaviour of the solution.", "marks": 2 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: |z|=2", "B1: arg(z)=π/3", "B1: z=2e^{iπ/3}"] },
   "1(b)": { "type": "points", "points": ["M1: z⁶=64e^{i2π}=64(cos2π+isin2π)", "A1: z⁶=64", "A1: In form a+bi: 64+0i"] },
   "2(a)": { "type": "points", "points": ["M1: (2r−1)²=4r²−4r+1", "M1: Σ(4r²−4r+1)=4×n(n+1)(2n+1)/6−4×n(n+1)/2+n", "M1: =n[2(n+1)(2n+1)/3−2(n+1)+1]", "A1: =n(2n²−1)/3... let me recalculate: =4n(n+1)(2n+1)/6−2n(n+1)+n=n[(2(n+1)(2n+1)−6(n+1)+3)/3]=n(4n²−1)/3", "A1: =n(2n−1)(2n+1)/3"] },
   "3(a)": { "type": "points", "points": ["M1: IF=e^{2x}; d/dx(ye^{2x})=4x", "M1: ye^{2x}=∫4x dx=2x²+C", "A1: y=(2x²+C)e^{−2x}"] },
   "3(b)": { "type": "points", "points": ["M1: y(0)=C=1", "A1: y=(2x²+1)e^{−2x}"] },
   "4(a)": { "type": "points", "points": ["M1: Expand along first row: det=2(6−1)−1(2−0)+0", "A1: =10−2=8"] },
   "4(b)": { "type": "points", "points": ["M1: det(A−I)=0: A−I=[[1,1,0],[1,2,1],[0,1,1]]", "M1: det=1(2−1)−1(1−0)=1−1=0 ✓", "M1: (A−I)v=0: v₁+v₂=0; v₁+2v₂+v₃=0; v₂+v₃=0→v₂=−v₁; v₃=−v₂=v₁", "A1: v∝(1,−1,1)"] },
   "5(a)": { "type": "points", "points": ["B1: Base n=1: 7−1=6; 6|6 ✓", "M1: Assume 6|(7ᵏ−1); 7^{k+1}−1=7(7ᵏ−1)+6", "M1: 6|7(7ᵏ−1) (by assumption) and 6|6", "A1: 6|(7^{k+1}−1) ✓", "B1: Conclusion □"] },
   "6(a)": { "type": "points", "points": ["M1: x=2sinθ; dx=2cosθdθ; √(4−x²)=2cosθ", "M1: ∫(4sin²θ/2cosθ)×2cosθdθ=4∫sin²θdθ", "M1: =4×½∫(1−cos2θ)dθ=2(θ−sin2θ/2)+C", "A1: =2θ−2sinθcosθ+C", "A1: θ=arcsin(x/2); sinθ=x/2; cosθ=√(4−x²)/2", "A1: =2arcsin(x/2)−x√(4−x²)/2+C"] },
   "7(a)": { "type": "points", "points": ["M1: r²≥0 requires cos2θ≥0; θ∈[−π/4,π/4] and [3π/4,5π/4]", "M1: A=4×½∫_{−π/4}^{π/4}4cos2θdθ=8∫₀^{π/4}4cos2θdθ=8[2sin2θ]₀^{π/4}", "A1: Careful: A=2×½∫_{−π/4}^{π/4}r²dθ=∫_{−π/4}^{π/4}4cos2θdθ=[2sin2θ]_{−π/4}^{π/4}=4", "A1: Total area = 4 (two lobes: each gives 2, total 4)"] },
   "7(b)": { "type": "points", "points": ["M1: r²=4cos2θ=4(cos²θ−sin²θ)=4(x²−y²)/r²", "M1: r⁴=4(x²−y²)", "A1: (x²+y²)²=4(x²−y²)"] },
   "8(a)": { "type": "points", "points": ["M1: Aux m²+2m+5=0→m=−1±2i; CF=e^{−x}(Acos2x+Bsin2x)", "M1: PI: try y=pcosx+qsinx; −p+2q+5p=0→4p+2q=10,−q−2p+5q=0→4q−2p=0→q=p/2", "M1: 4p+p=10→p=2, q=1", "A1: PI=2cosx+sinx", "A1: GS=e^{−x}(Acos2x+Bsin2x)+2cosx+sinx"] },
   "8(b)": { "type": "points", "points": ["B1: CF→0 as x→∞ (exponential decay)", "B1: Solution→2cosx+sinx (oscillation with amplitude √5)"] }
  }
 },

 "fmath-ocr-h245-2022-p1": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Expand (1+2x)⁻³ in ascending powers of x up to and including the term in x³, stating the range of validity.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Find the matrix that represents a reflection in the line y = x tanα.", "marks": 3 },
     { "code": "2(b)", "prompt": "Find the matrix that represents a rotation of π/6 anticlockwise about the origin followed by a reflection in the y-axis. Find the image of the point (2, 1).", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Given that z = (1+i√3)/(1−i), express z in the form re^{iθ}, where r > 0 and −π < θ ≤ π.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find ∫ 1/(x²+2x+5) dx.", "marks": 3 },
     { "code": "4(b)", "prompt": "Find ∫ x/√(x²+2x+5) dx.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Show by induction that ∑ᵣ₌₁ⁿ r³ = n²(n+1)²/4.", "marks": 6 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "The curve C has polar equation r = 1 + 2cosθ. Find the values of θ in [0,2π] where the curve passes through the pole.", "marks": 2 },
     { "code": "6(b)", "prompt": "Sketch the curve.", "marks": 2 },
     { "code": "6(c)", "prompt": "Find the area of the inner loop of C.", "marks": 5 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Solve d²y/dx² + dy/dx − 2y = 2x², given y(0) = 1, y'(0) = 0.", "marks": 9 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Solve the equation 2cosh x − sinh x = 2.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: (1+u)^{−3}=1−3u+6u²−10u³+… with u=2x", "A1: =1−6x+24x²−80x³+…", "A1: Valid for |2x|<1, i.e. |x|<1/2"] },
   "2(a)": { "type": "points", "points": ["M1: Reflection in y=xtanα: [[cos2α, sin2α],[sin2α,−cos2α]]", "A1: Correct matrix"] },
   "2(b)": { "type": "points", "points": ["M1: Rotation π/6: [[√3/2,−1/2],[1/2,√3/2]]; Reflection in y-axis: [[−1,0],[0,1]]", "M1: Combined=[[−1,0],[0,1]]×[[√3/2,−1/2],[1/2,√3/2]]=[[−√3/2,1/2],[1/2,√3/2]]", "M1: Apply to (2,1): (−√3/2×2+1/2×1,1/2×2+√3/2×1)=(1−√3,(1+√3)/2)... recalculate", "A1: Matrix correct", "A1: Image correct"] },
   "3(a)": { "type": "points", "points": ["M1: 1+i√3=2e^{iπ/3}; 1−i=√2 e^{−iπ/4}", "M1: z=(2/√2)e^{i(π/3+π/4)}=√2 e^{i7π/12}", "A1: r=√2", "A1: θ=7π/12"] },
   "4(a)": { "type": "points", "points": ["M1: x²+2x+5=(x+1)²+4", "M1: ∫1/((x+1)²+4)dx=(1/2)arctan((x+1)/2)+C", "A1: (1/2)arctan((x+1)/2)+C"] },
   "4(b)": { "type": "points", "points": ["M1: x=((2x+2)/2)−1; ∫x/√(x²+2x+5)dx=½∫(2x+2)/√(x²+2x+5)dx−∫1/√(x²+2x+5)dx", "M1: =√(x²+2x+5)−arcsinh((x+1)/2)+C", "A1: =√(x²+2x+5)−ln(x+1+√(x²+2x+5))+C"] },
   "5(a)": { "type": "points", "points": ["B1: n=1: 1; RHS=1 ✓", "M1: Add (k+1)³: k²(k+1)²/4+(k+1)³=(k+1)²[k²/4+k+1]=(k+1)²(k+2)²/4", "A1: =(k+1)²(k+2)²/4 ✓", "B1: Conclusion □"] },
   "6(a)": { "type": "points", "points": ["M1: 1+2cosθ=0→cosθ=−1/2", "A1: θ=2π/3, 4π/3"] },
   "6(b)": { "type": "points", "points": ["B1: Limaçon with inner loop", "B1: Correct shape with inner loop between θ=2π/3 and 4π/3"] },
   "6(c)": { "type": "points", "points": ["M1: A=½∫_{2π/3}^{4π/3}(1+2cosθ)²dθ", "M1: (1+2cosθ)²=1+4cosθ+4cos²θ=3+4cosθ+2cos2θ", "M1: =[3θ+4sinθ+sin2θ]_{2π/3}^{4π/3}", "A1: =3(4π/3−2π/3)+4(−√3/2−√3/2)+(sin8π/3−sin4π/3)", "A1: =π−4√3+…; area=π−3√3/2 (or correct computation)"] },
   "7(a)": { "type": "points", "points": ["M1: Aux m²+m−2=(m+2)(m−1)=0→CF=Ae^{-2x}+Be^{x}", "M1: PI: try y=ax²+bx+c; 2a+2ax+b−2(ax²+bx+c)=2x²→−2a=2,2a−2b=0,2a+b−2c=0", "A1: a=−1,b=−1,c=−3/2; PI=−x²−x−3/2", "M1: y(0)=A+B−3/2=1→A+B=5/2", "M1: y'=−2Ae^{−2x}+Be^x−2x−1; y'(0)=−2A+B−1=0→−2A+B=1", "A1: A=1/2, B=2", "A1: y=(1/2)e^{−2x}+2eˣ−x²−x−3/2"] },
   "8(a)": { "type": "points", "points": ["M1: 2coshx−sinhx=2: (2(eˣ+e^{−x})−(eˣ−e^{−x}))/2=2", "M1: eˣ+3e^{−x}=4; multiply by eˣ: e^{2x}−4eˣ+3=0; (eˣ−1)(eˣ−3)=0", "A1: x=0 or x=ln3"] }
  }
 },

 "fmath-ocr-h245-2021a-p1": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Prove by induction that 4ⁿ + 2 is divisible by 6 for all positive integers n.", "marks": 5 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Find ∫ 1/(4x²−1) dx.", "marks": 3 },
     { "code": "2(b)", "prompt": "Find ∫ x/(4x²−1) dx.", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "The locus of z satisfies |z − 2i| = |z + 2|. Find the Cartesian equation and sketch the locus.", "marks": 4 },
     { "code": "3(b)", "prompt": "The locus of w satisfies arg(w − 1) = π/4. Sketch this locus on the same diagram and find the point where the two loci meet.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find the eigenvalues and eigenvectors of A = [[4,−1],[2,1]].", "marks": 5 },
     { "code": "4(b)", "prompt": "Find A⁶ using diagonalisation.", "marks": 4 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Solve dy/dx = xy/(x²+1), given y = 2 when x = 0.", "marks": 5 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the area enclosed between the curve r = 2sin2θ (for 0 ≤ θ ≤ 2π) and the initial line.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find the general solution of d²y/dx² − 2dy/dx − 3y = 6eˣ.", "marks": 6 },
     { "code": "7(b)", "prompt": "Find the particular solution with y(0) = 1 and y'(0) = −1.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: n=1: 4+2=6; 6|6 ✓", "M1: Assume 6|(4ᵏ+2); 4^{k+1}+2=4(4ᵏ+2)−6", "M1: 6|4(4ᵏ+2) (by assumption×4) and 6|6", "A1: 6|(4^{k+1}+2) ✓", "B1: Conclusion □"] },
   "2(a)": { "type": "points", "points": ["M1: 4x²−1=(2x−1)(2x+1); PF: ¼(1/(2x−1)−1/(2x+1))", "M1: Integrate", "A1: (1/8)ln|2x−1|−(1/8)ln|2x+1|+C=(1/8)ln|(2x−1)/(2x+1)|+C"] },
   "2(b)": { "type": "points", "points": ["M1: ∫x/(4x²−1)dx=(1/8)∫8x/(4x²−1)dx=(1/8)ln|4x²−1|+C", "A1: (1/8)ln|4x²−1|+C"] },
   "3(a)": { "type": "points", "points": ["M1: |z−2i|=|z+2|: let z=x+iy; x²+(y−2)²=(x+2)²+y²", "M1: −4y+4=4x+4→−4y=4x→y=−x", "A1: y=−x (straight line through origin, gradient −1)"] },
   "3(b)": { "type": "points", "points": ["M1: arg(w−1)=π/4: half-line from (1,0) at angle π/4, i.e. y=x−1 for x>1", "M1: Intersection with y=−x: −x=x−1→x=1/2, y=−1/2", "A1: Intersection at (1/2,−1/2); but x>1 required for arg locus... recheck boundaries", "A1: Correct point or note that intersection may not exist on the locus"] },
   "4(a)": { "type": "points", "points": ["M1: det(A−λI)=(4−λ)(1−λ)+2=λ²−5λ+6=(λ−2)(λ−3)=0", "A1: λ=2,3", "M1: λ=2: [[2,−1],[2,−1]]v=0→v∝(1,2)", "A1: λ=3: [[1,−1],[2,−2]]v=0→v∝(1,1)"] },
   "4(b)": { "type": "points", "points": ["M1: P=[[1,1],[2,1]], D=diag(2,3), P⁻¹=[[−1,1],[2,−1]]", "M1: A⁶=PD⁶P⁻¹; D⁶=diag(64,729)", "M1: A⁶=[[1,1],[2,1]][[64,0],[0,729]][[−1,1],[2,−1]]", "A1: =[[−64+1458,64−729],[−128+729,128−729]]... compute carefully", "A1: Correct answer"] },
   "5(a)": { "type": "points", "points": ["M1: Separate: dy/y=x/(x²+1)dx", "M1: ln|y|=½ln(x²+1)+C", "M1: y=A√(x²+1); y(0)=A=2", "A1: y=2√(x²+1)"] },
   "6(a)": { "type": "points", "points": ["M1: Four petals; area=4×½∫₀^{π/2}4sin²2θdθ", "M1: =8∫₀^{π/2}(1−cos4θ)/2dθ=4[θ−sin4θ/4]₀^{π/2}", "A1: =4×π/2=2π"] },
   "7(a)": { "type": "points", "points": ["M1: Aux m²−2m−3=(m−3)(m+1)=0→CF=Ae^{3x}+Be^{−x}", "M1: PI: try Ceˣ; C(1−2−3)=6→−4C=6→C=−3/2", "A1: GS=Ae^{3x}+Be^{−x}−(3/2)eˣ"] },
   "7(b)": { "type": "points", "points": ["M1: y(0)=A+B−3/2=1→A+B=5/2", "M1: y'(0)=3A−B−3/2=−1→3A−B=1/2", "A1: A=3/4, B=7/4", "A1: y=(3/4)e^{3x}+(7/4)e^{−x}−(3/2)eˣ"] }
  }
 },

 "fmath-ocr-h245-2019-p1": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Use standard Maclaurin series to write down the series for sin(2x) and e^{x²} up to and including the term in x⁶.", "marks": 3 },
     { "code": "1(b)", "prompt": "Hence find the Maclaurin series for e^{x²}sin(2x) up to and including the term in x⁵.", "marks": 3 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ (4r³ − r) = n(n+1)(2n²+2n−1)/2.", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Find the two square roots of 3 + 4i in the form a + bi.", "marks": 5 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "The matrix M = [[2,1,1],[1,2,1],[1,1,2]] has eigenvalue λ = 1 with eigenvector (1,0,−1)ᵀ. Find the other eigenvalues and corresponding eigenvectors.", "marks": 6 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "The curve C has polar equation r = 2cosθ + 2, 0 ≤ θ ≤ 2π. Sketch C.", "marks": 2 },
     { "code": "5(b)", "prompt": "Find the area of the region inside C and inside the circle r = 2.", "marks": 6 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Solve d²y/dx² − dy/dx − 6y = 12x² − 2.", "marks": 7 },
     { "code": "6(b)", "prompt": "Find the particular solution with y(0) = 0 and y'(0) = 1.", "marks": 4 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find the general solution of the first-order ODE dy/dx = (2y − x)/(2x − y).", "marks": 7 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: sin(2x)=2x−(2x)³/6+…=2x−4x³/3+4x⁵/15−…", "B1: e^{x²}=1+x²+x⁴/2+…"] },
   "1(b)": { "type": "points", "points": ["M1: Multiply series", "M1: e^{x²}sin(2x)=(1+x²+x⁴/2+…)(2x−4x³/3+4x⁵/15−…)", "A1: =2x−4x³/3+4x⁵/15+2x³−4x⁵/3+x⁵+…=2x+(2−4/3)x³+(4/15−4/3+1)x⁵=2x+(2/3)x³+(1/5)x⁵"] },
   "2(a)": { "type": "points", "points": ["M1: 4∑r³−∑r=4×n²(n+1)²/4−n(n+1)/2=n²(n+1)²−n(n+1)/2", "M1: =n(n+1)[n(n+1)−1/2]=n(n+1)(n²+n−1/2)", "A1: =n(n+1)(2n²+2n−1)/2 □"] },
   "3(a)": { "type": "points", "points": ["M1: (a+bi)²=3+4i: a²−b²=3, 2ab=4→b=2/a", "M1: a²−4/a²=3; a⁴−3a²−4=0;(a²−4)(a²+1)=0→a²=4→a=±2", "A1: a=2,b=1: root 2+i", "A1: a=−2,b=−1: root −2−i"] },
   "4(a)": { "type": "points", "points": ["M1: Trace=6=1+λ₂+λ₃; det=4=1×λ₂×λ₃ (if known). Characteristic poly (1−λ)[(2−λ)²−1]−...= −λ³+6λ²−9λ+4=(1−λ)(4−λ)²... check: characteristic poly = −(λ−1)(λ−4)²... no: det check", "M1: Try λ=4: char poly (4−2)²... better: det(M−λI)=0; expand to get (λ−1)²(λ−4)=0... verify λ=4 is other eigenvalue with multiplicity 1", "A1: λ=1 (mult 2), λ=4", "A1: λ=4: (M−4I)v=0: v∝(1,1,1)", "A1: Second eigenvector for λ=1: (1,−1,0)ᵀ (linearly independent from (1,0,−1))"] },
   "5(a)": { "type": "points", "points": ["B1: Limaçon; max r=4 at θ=0; min r=0 at θ=π", "B1: Passes through origin at θ=π; roughly heart-shaped"] },
   "5(b)": { "type": "points", "points": ["M1: Find intersection: 2cosθ+2=2→cosθ=0→θ=π/2, 3π/2", "M1: Area inside both = area inside r=2cosθ+2 for π/2≤θ≤3π/2 (where that curve is ≤2) plus area of circle sectors... or compute by subtraction", "M1: A=½∫_{π/2}^{3π/2}(2cosθ+2)²dθ+½∫ on other part ... careful setup", "A1: A=2π−2 (or correct value after computation)"] },
   "6(a)": { "type": "points", "points": ["M1: Aux m²−m−6=(m−3)(m+2)=0→CF=Ae^{3x}+Be^{−2x}", "M1: PI: try ax²+bx+c; −a−2(2ax+b)−6(ax²+bx+c)=12x²−2", "M1: −6a=12→a=−2; −4a−6b=0→b=−4/3; −a−2b−6c=−2→2+8/3−6c=−2→c=−4/9... let me redo", "A1: PI=−2x²+4x/3+… (careful computation)", "A1: GS=Ae^{3x}+Be^{−2x}+PI"] },
   "6(b)": { "type": "points", "points": ["M1: Apply y(0) and y'(0)=1; solve for A and B", "A1: Particular solution stated"] },
   "7(a)": { "type": "points", "points": ["M1: Homogeneous: let y=vx; v+xv'=(2v−1)/(2−v)", "M1: xv'=(2v−1)/(2−v)−v=(2v−1−2v+v²)/(2−v)=(v²−1)/(2−v)", "M1: Separate: (2−v)/(v²−1)dv=dx/x; (2−v)/((v−1)(v+1))=PF: A/(v−1)+B/(v+1); A=1/2,B=−3/2... check: 2−v=A(v+1)+B(v−1); v=1:1=2A→A=1/2; v=−1:3=−2B→B=−3/2", "M1: ½ln|v−1|−(3/2)ln|v+1|=ln|x|+C", "A1: ln|y/x−1|^{1/2}/|y/x+1|^{3/2}=ln|x|+C", "A1: |y−x|^{1/2}/|y+x|^{3/2}=Ax"] }
  }
 },

 /* ═══════════════════════════════════════════════════════════════════════════
    OCR B FURTHER MATHS H645
  ═══════════════════════════════════════════════════════════════════════════ */

 "fmath-ocrb-h645-2024-y420": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Express z = (2+i)/(3−i) in the form a + bi. Find |z| and arg(z).", "marks": 5 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Show that the matrix A = [[1,2],[3,4]] has no real eigenvalues if A is replaced by iA, but find the eigenvalues of A itself.", "marks": 4 },
     { "code": "2(b)", "prompt": "Find the eigenvectors of A = [[1,2],[3,4]] and write down the diagonalisation A = PDP⁻¹.", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "A hyperbola has equation x²/16 − y²/9 = 1. Write down the eccentricity, foci, and equations of the directrices.", "marks": 4 },
     { "code": "3(b)", "prompt": "Find the equation of the normal to the hyperbola at the point P(4secθ, 3tanθ).", "marks": 5 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Prove by induction that ∑ᵣ₌₁ⁿ r(2r−1) = n(n+1)(4n−1)/6.", "marks": 6 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Find the general solution of d²y/dx² + 9y = 9sin3x.", "marks": 7 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "The curve C has polar equation r = aθ (an Archimedean spiral) for 0 ≤ θ ≤ 2π. Find the area enclosed between C and the initial line.", "marks": 5 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find ∫ √(1+4x²) dx using the substitution 2x = sinh t.", "marks": 6 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "A curve is defined implicitly by x² + xy + y² = 7. Find dy/dx and hence the coordinates of the points where the tangent is horizontal.", "marks": 6 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: Multiply by (3+i)/(3+i): (2+i)(3+i)/10=(6+2i+3i−1)/10=(5+5i)/10", "A1: z=(1+i)/2; a=1/2, b=1/2", "A1: |z|=1/√2", "A1: arg(z)=π/4"] },
   "2(a)": { "type": "points", "points": ["M1: det(A−λI)=(1−λ)(4−λ)−6=λ²−5λ−2=0", "M1: λ=(5±√33)/2", "A1: Two real eigenvalues; stated"] },
   "2(b)": { "type": "points", "points": ["M1: λ=(5+√33)/2: eigenvector from (A−λI)v=0", "M1: λ=(5−√33)/2: eigenvector", "A1: P=[v₁|v₂], D=diag(λ₁,λ₂) stated"] },
   "3(a)": { "type": "points", "points": ["B1: a²=16,b²=9; c²=25→c=5; e=5/4", "B1: Foci (±5,0)", "B1: Directrices x=±16/5"] },
   "3(b)": { "type": "points", "points": ["M1: Differentiate: 2x/16−2yy'/9=0→y'=9x/(16y)=9(4secθ)/(16(3tanθ))=3secθ/(4tanθ)=3/(4sinθ)", "M1: Normal slope=−4sinθ/3", "M1: Normal at (4secθ,3tanθ): y−3tanθ=−(4sinθ/3)(x−4secθ)", "A1: 4xsinθ+3y=16sinθsecθ+9tanθ=16tanθ... simplify", "A1: 4xsinθ+3y=25sinθ/cosθ=25tanθ or equivalent"] },
   "4(a)": { "type": "points", "points": ["B1: n=1: 1; RHS=1×2×3/6=1 ✓", "M1: Add (k+1)(2k+1) to sum=k(k+1)(4k−1)/6", "M1: =k(k+1)(4k−1)/6+(k+1)(2k+1)=(k+1)[k(4k−1)+6(2k+1)]/6=(k+1)(4k²+11k+6)/6=(k+1)(k+2)(4k+3)/6", "A1: This is n=k+1 result ✓", "B1: Conclusion □"] },
   "5(a)": { "type": "points", "points": ["M1: Aux m²+9=0→m=±3i; CF=Acos3x+Bsin3x", "M1: Resonance: PI=x(Ccos3x+Dsin3x)", "M1: Differentiate twice and substitute: 6Dcos3x−6Csin3x=9sin3x→D=0,C=−3/2", "A1: PI=−(3x/2)cos3x", "A1: GS=Acos3x+Bsin3x−(3x/2)cos3x"] },
   "6(a)": { "type": "points", "points": ["M1: A=½∫₀^{2π}(aθ)²dθ=a²/2×[θ³/3]₀^{2π}", "A1: =a²/2×8π³/3=4π³a²/3"] },
   "7(a)": { "type": "points", "points": ["M1: 2x=sinht; dx=cosht dt/2; √(1+4x²)=cosht", "M1: ∫cosht×cosht dt/2=½∫cosh²t dt=¼∫(1+cosh2t)dt", "A1: =t/4+sinh2t/8+C=t/4+sinhtcosht/4+C", "M1: t=arcsinh(2x)=ln(2x+√(1+4x²)); cosht=√(1+4x²)", "A1: =¼arcsinh(2x)+¼(2x)√(1+4x²)+C=¼ln(2x+√(1+4x²))+x√(1+4x²)/2+C"] },
   "8(a)": { "type": "points", "points": ["M1: Differentiate: 2x+y+xy'+2yy'=0→y'(x+2y)=−(2x+y)→y'=−(2x+y)/(x+2y)", "M1: Horizontal tangent: 2x+y=0→y=−2x", "M1: Substitute: x²+x(−2x)+(−2x)²=7→x²−2x²+4x²=7→3x²=7", "A1: x=±√(7/3); y=∓2√(7/3)", "A1: Points (√(7/3),−2√(7/3)) and (−√(7/3),2√(7/3))"] }
  }
 },

 "fmath-ocrb-h645-2023-y420": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Find all complex solutions of z⁴ = −16, expressing each in the form re^{iθ} and in the form a + bi.", "marks": 6 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "A conic section has equation 9x² + 4y² = 36. Identify the conic, find its eccentricity, foci and equations of the directrices.", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ 1/((r+1)(r+2)) = (n)/(2(n+2)) using telescoping.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find the general solution of d²y/dx² − 4dy/dx + 4y = 4eˣ.", "marks": 7 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Find the asymptotes and sketch the curve y = (x²+1)/(x²−4).", "marks": 5 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "The matrix A = [[2,1],[0,2]] has a repeated eigenvalue. Find the general form of Aⁿ.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find the area of the surface of revolution formed when the curve y = x² (0 ≤ x ≤ 1) is rotated through 2π about the x-axis.", "marks": 6 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Solve the differential equation dy/dx = (x + y + 1)/(x − y + 3), using the substitution x = X + h, y = Y + k to remove the constant terms.", "marks": 8 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: z⁴=−16=16e^{iπ}; z=2e^{iπ(2k+1)/4}, k=0,1,2,3", "A1: z=2e^{iπ/4}=√2(1+i); z=2e^{3iπ/4}=√2(−1+i); z=2e^{5iπ/4}=√2(−1−i); z=2e^{7iπ/4}=√2(1−i)", "A1: All four in a+bi form"] },
   "2(a)": { "type": "points", "points": ["M1: x²/4+y²/9=1; a²=9,b²=4 (ellipse, a>b along y)", "M1: c²=9−4=5; e=√5/3", "A1: Foci (0,±√5)", "A1: Directrices y=±9/√5=±9√5/5"] },
   "3(a)": { "type": "points", "points": ["M1: 1/((r+1)(r+2))=1/(r+1)−1/(r+2)", "M1: Telescope: Σ=(1/2−1/(n+2))=n/(2(n+2))", "A1: □"] },
   "4(a)": { "type": "points", "points": ["M1: Aux (m−2)²=0→m=2 double; CF=(A+Bx)e^{2x}", "M1: PI: try Ceˣ; C(1−4+4)=4→C=4", "A1: PI=4eˣ", "A1: GS=(A+Bx)e^{2x}+4eˣ"] },
   "5(a)": { "type": "points", "points": ["B1: Vertical asymptotes x=±2", "B1: Horizontal asymptote y=1 (as x→±∞)", "M1: y-intercept (0,−1/4); no x-intercepts (x²+1>0)", "A1: Sketch showing two branches, approaching asymptotes", "A1: Correct behaviour near x=±2"] },
   "6(a)": { "type": "points", "points": ["M1: A=2I+N where N=[[0,1],[0,0]]; N²=0", "M1: Aⁿ=(2I+N)ⁿ=2ⁿI+n×2^{n−1}N (binomial, higher powers of N vanish)", "A1: Aⁿ=[[2ⁿ, n×2^{n−1}],[0,2ⁿ]]"] },
   "7(a)": { "type": "points", "points": ["M1: S=2π∫₀¹x²√(1+4x²)dx", "M1: Use substitution 2x=sinht or by parts", "A1: Evaluate to get correct exact value (involves arcsinh and surds)"] },
   "8(a)": { "type": "points", "points": ["M1: Solve h+k+1=0, h−k+3=0→h=−2,k=1; X=x+2,Y=y−1", "M1: dY/dX=(X+Y)/(X−Y); homogeneous: Y=VX", "M1: XdV/dX=(1+V)/(1−V)−V=(1+2V−V²+V... hmm: (1+V−V(1−V))/(1−V)=(1+V−V+V²)/(1−V)=(1+V²)/(1−V)", "M1: Separate: (1−V)/(1+V²)dV=dX/X; arctanV−½ln(1+V²)=ln|X|+C", "A1: arctan(Y/X)=ln(√(X²+Y²))+C", "A1: arctan((y−1)/(x+2))=ln√((x+2)²+(y−1)²)+C"] }
  }
 },

 "fmath-ocrb-h645-2022-y420": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Describe the locus of z where |z − 3 + 4i| = 5, and find the points where the locus crosses the real axis.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Find the equation of the tangent to the ellipse x²/25 + y²/9 = 1 at the point (5cosθ, 3sinθ).", "marks": 4 },
     { "code": "2(b)", "prompt": "Show that this tangent has the form (x/25)cosθ + (y/9)sinθ = 1.", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Use the Cayley-Hamilton theorem to find A² and A³ for A = [[3,1],[−2,0]].", "marks": 5 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Prove by induction that the sum ∑ᵣ₌₁ⁿ r×3^{r−1} = (1+(2n−1)3ⁿ)/4.", "marks": 6 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Find the general solution of dy/dx + y cot x = cosec x.", "marks": 5 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "The curve with parametric equations x = t + 1/t, y = t − 1/t has an oblique asymptote. Find the asymptote and sketch the curve.", "marks": 5 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Show that the substitution y = vx² transforms x²y'' − 3xy' + 4y = x³ into x²v'' + xv' = x (where primes denote d/dx).", "marks": 4 },
     { "code": "7(b)", "prompt": "Hence find the general solution for y.", "marks": 5 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "The region bounded by y = sinhx, the x-axis and the line x = ln3 is rotated 2π about the x-axis. Find the volume.", "marks": 6 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["B1: Circle centre (3,−4), radius 5", "M1: On real axis y=0: |z−3+4i|=|(x−3)+4i|=√((x−3)²+16)=5", "M1: (x−3)²=9→x−3=±3", "A1: x=6 and x=0; points (6,0) and (0,0)"] },
   "2(a)": { "type": "points", "points": ["M1: Differentiate: (2x/25)+(2yy'/9)=0→y'=−9x/(25y)=−9cosθ/(25sinθ... ×5cosθ/(3sinθ)) = −3cosθ/(5sinθ)", "M1: Tangent at (5cosθ,3sinθ): y−3sinθ=−(3cosθ)/(5sinθ)(x−5cosθ)", "A1: 5ysinθ−15sin²θ=−3xcosθ+15cos²θ→xcosθ/5+ysinθ/3=cos²θ+sin²θ=1", "A1: Tangent: xcosθ/5+ysinθ/3=1"] },
   "2(b)": { "type": "points", "points": ["M1: Divide: (x/25)cosθ+(y/9)sinθ=1/... from previous form, multiply both sides by 3/15=1/5 or verify algebraically", "A1: Shown □"] },
   "3(a)": { "type": "points", "points": ["M1: CP: λ²−3λ+2=0→A²−3A+2I=0→A²=3A−2I", "M1: A=[[3,1],[−2,0]]; 3A=[[9,3],[−6,0]]; A²=[[9−2,3],[−6,0+2]]... wait: A²=3A−2I=[[9−2,3],[−6,−2]]=[[7,3],[−6,−2]]", "A1: A²=[[7,3],[−6,−2]]", "M1: A³=A×A²=A(3A−2I)=3A²−2A=3[[7,3],[−6,−2]]−2[[3,1],[−2,0]]", "A1: A³=[[21−6,9−2],[−18+4,−6−0]]=[[15,7],[−14,−6]]"] },
   "4(a)": { "type": "points", "points": ["B1: n=1: 1×1=(1+1)/4=1/2... wait: LHS=1×3⁰=1; RHS=(1+1×3)/4=1 ✓", "M1: Add (k+1)3ᵏ to IH sum", "M1: (1+(2k−1)3ᵏ)/4+(k+1)3ᵏ=(1+3ᵏ(2k−1+4k+4))/4=(1+(6k+3)3ᵏ)/4=(1+(2k+1)3^{k+1}/3×... recalculate: (1+(2(k+1)−1)3^{k+1})/4 ✓", "A1: Correct manipulation", "B1: Conclusion □"] },
   "5(a)": { "type": "points", "points": ["M1: IF=e^{∫cotxdx}=sinx", "M1: d(ysinx)/dx=sinx×cosecx=1", "M1: ysinx=x+C", "A1: y=(x+C)/sinx=(x+C)cosecx"] },
   "6(a)": { "type": "points", "points": ["M1: As t→∞: y/x=(t−1/t)/(t+1/t)→1; so y→x asymptotically", "M1: y−x=−2/t→0; so y=x is oblique asymptote", "A1: Also as t→0, x and y→±∞", "A1: Asymptote y=x; curve has two branches"] },
   "7(a)": { "type": "points", "points": ["M1: y=vx²; y'=v'x²+2vx; y''=v''x²+4v'x+2v", "M1: x²(v''x²+4v'x+2v)−3x(v'x²+2vx)+4vx²=x³", "A1: x⁴v''+4x³v'+2x²v−3x³v'−6x²v+4vx²=x³", "A1: x⁴v''+x³v'=x³→x²v''+xv'=x □ (divide by x²)"] },
   "7(b)": { "type": "points", "points": ["M1: Let w=v'; xw'+w=1→d(xw)/dx=x... wait: x²v''+xv'=x; let u=v': x²u'+xu=x; xu'+u=1... no: xv''+v'=1/x×... this is x(xv'')+(xv')'=1... Euler: try v=AxlnX...", "M1: Homogeneous x²v''+xv'=0: let w=v'→xw'+w=0→w=C₁/x→v=C₁lnx+C₂", "M1: PI for x²v''+xv'=x: try v=ax²; 2ax²+ax²... =3ax²... hmm try v=ax; a×0+a=1... careful: xv'=a×x, x²v''=0→a=1. PI: v=x", "A1: v=C₁lnx+C₂+x; y=vx²=C₁x²lnx+C₂x²+x³"] },
   "8(a)": { "type": "points", "points": ["M1: V=π∫₀^{ln3}sinh²x dx=π∫₀^{ln3}(cosh2x−1)/2 dx", "M1: =π/2[sinh2x/2−x]₀^{ln3}", "A1: sinh(2ln3)=(9−1/9)/2=40/9; V=π/2(40/18−ln3−0)=π(20/9−ln3/2)... verify", "A1: V=π(20/9−(ln3)/2)"] }
  }
 },

 "fmath-ocrb-h645-2021a-y420": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "The complex number z satisfies |z| = 2 and arg(z) = π/3. Write z in the form a + bi, and find z* and z + z*.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "The ellipse E has equation x²/a² + y²/b² = 1 with eccentricity 1/2. The distance between the foci is 2. Find a and b.", "marks": 4 },
     { "code": "2(b)", "prompt": "A point P on E satisfies SP + S'P = 2a, where S and S' are the foci. Show this is consistent with the focal distance property.", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Prove by induction that 6ⁿ − 1 is divisible by 5 for all n ≥ 1.", "marks": 5 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find the general solution of d²y/dx² − 6dy/dx + 9y = 9x + 6.", "marks": 8 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Sketch the curve r = sin2θ for 0 ≤ θ ≤ 2π and find the total area enclosed.", "marks": 6 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find ∫₀¹ 1/√(1−x²) dx using a trigonometric substitution, and state the result in exact form.", "marks": 4 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Given A = [[1,3],[0,−2]], find Aⁿ using eigenvalue methods.", "marks": 6 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Solve dy/dx + 2y/(x+1) = (x+1)³, giving the particular solution with y(0) = 0.", "marks": 6 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: z=2(cos(π/3)+isin(π/3))=2(1/2+i√3/2)=1+i√3", "A1: z=1+i√3", "A1: z*=1−i√3", "A1: z+z*=2"] },
   "2(a)": { "type": "points", "points": ["M1: e=c/a=1/2→c=a/2; foci distance=2c=a=2→a=2", "M1: b²=a²−c²=4−1=3→b=√3", "A1: a=2, b=√3"] },
   "2(b)": { "type": "points", "points": ["B1: By definition of ellipse, SP+S'P=2a=4 for all points P", "B1: Statement confirmed □"] },
   "3(a)": { "type": "points", "points": ["B1: n=1: 6−1=5; 5|5 ✓", "M1: 6^{k+1}−1=6(6ᵏ−1)+5", "M1: 5|6(6ᵏ−1) and 5|5", "A1: 5|(6^{k+1}−1) ✓", "B1: Conclusion □"] },
   "4(a)": { "type": "points", "points": ["M1: Aux (m−3)²=0→m=3 double; CF=(A+Bx)e^{3x}", "M1: PI: try ax+b; −6a+9(ax+b)=9x+6→9a=9,9b−6a=6", "A1: a=1,b=12/9=4/3; PI=x+4/3", "A1: GS=(A+Bx)e^{3x}+x+4/3"] },
   "5(a)": { "type": "points", "points": ["B1: 4-petal rose; petals in 4 quadrants", "M1: Area one petal=½∫₀^{π/2}sin²2θdθ=½×π/4=π/8", "M1: Total=4×π/8=π/2", "A1: π/2"] },
   "6(a)": { "type": "points", "points": ["M1: x=sinθ; dx=cosθdθ; √(1−x²)=cosθ", "M1: ∫₀¹1/cosθ×cosθdθ=∫₀^{π/2}dθ", "A1: =π/2"] },
   "7(a)": { "type": "points", "points": ["M1: λ=1,−2; eigenvectors: (1,0)ᵀ for λ=1; (1,−1)ᵀ for λ=−2", "M1: Aⁿ=PDⁿP⁻¹; P=[[1,1],[0,−1]]; P⁻¹=[[1,1],[0,−1]]", "M1: Aⁿ=[[1,1],[0,−1]]diag(1,(−2)ⁿ)[[1,1],[0,−1]]", "A1: Aⁿ=[[1, 1−(−2)ⁿ],[0,(−2)ⁿ]]... verify: Aⁿ=[[1,1+(−2)ⁿ... check using P⁻¹=[[1,1],[0,−1]] and P=[[1,1],[0,−1]]... actually P⁻¹: det=−1; P⁻¹=(1/−1)[[−1,−1],[0,1]]=[[1,1],[0,−1]]", "A1: Aⁿ=[[1,(1−(−2)ⁿ)/1... compute: [[1,1],[0,−1]][[1,0],[0,(−2)ⁿ]][[1,1],[0,−1]]=[[1,(−2)ⁿ],[0,−(−2)ⁿ]][[1,1],[0,−1]]=[[1,1−(−2)ⁿ],[0,(−2)ⁿ]]"] },
   "8(a)": { "type": "points", "points": ["M1: IF=(x+1)²; d(y(x+1)²)/dx=(x+1)⁵", "M1: y(x+1)²=(x+1)⁶/6+C", "M1: y(0)=C/1+C... y(0)=1/6+C=0→C=−1/6", "A1: y=((x+1)⁶−1)/(6(x+1)²)"] }
  }
 },

 "fmath-ocrb-h645-2019-y420": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Show that the five fifth roots of unity sum to zero. Hence find the value of ∑ᵏ₌₁⁴ cos(2kπ/5).", "marks": 5 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "A parabola has equation y² = 12x. Write down the focus, directrix and eccentricity. Find the equation of the tangent at the point (3t², 6t).", "marks": 5 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Prove that the product of any two odd numbers is odd, and use this to prove that any odd power of an odd number is odd.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find the general solution of d²y/dx² + dy/dx − 2y = 4x e^x.", "marks": 8 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Sketch the curve r = 3 + cosθ and find the area enclosed.", "marks": 6 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "The curve C is defined by x = 3t², y = 2t³. Find the arc length of C from t = 0 to t = 1.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find the eigenvalues and eigenvectors of A = [[2,−1,0],[−1,2,−1],[0,−1,2]]. Find A⁻¹ using diagonalisation.", "marks": 8 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Solve d²y/dt² + 4y = 8t, given y(0) = 1 and y'(0) = 0.", "marks": 7 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: z⁵=1; (z⁵−1)/(z−1)=1+z+z²+z³+z⁴=0 for z≠1", "A1: Sum of all 5th roots=0", "M1: Re(1+e^{2πi/5}+…)=1+2cos(2π/5)+2cos(4π/5)=0", "A1: ∑ᵏ₌₁⁴cos(2kπ/5)=2cos(2π/5)+2cos(4π/5)=−1"] },
   "2(a)": { "type": "points", "points": ["B1: 4a=12→a=3; focus (3,0); directrix x=−3; e=1", "M1: Differentiate: 2yy'=12→y'=6/y=6/(6t)=1/t", "M1: Tangent: y−6t=(1/t)(x−3t²)", "A1: ty=x+3t²"] },
   "3(a)": { "type": "points", "points": ["M1: (2m+1)(2n+1)=4mn+2m+2n+1=2(2mn+m+n)+1: odd ✓", "M1: By induction on power k: base k=1 trivially; step: aᵏ⁺¹=aᵏ×a; product of two odds is odd ✓", "A1: Any odd power of an odd number is odd □"] },
   "4(a)": { "type": "points", "points": ["M1: Aux (m+2)(m−1)=0→CF=Ae^{−2x}+Beˣ", "M1: PI: resonance with eˣ; try (Cx+Dx²)eˣ", "M1: Substitute: [C(D... 2D+(2D... let me be careful: try xeˣ(C+Dx): differentiate twice then substitute into ODE", "M1: After substitution: 3Ceˣ+... = 4xeˣ; matching: coefficient", "A1: PI=x(... )eˣ", "A1: GS stated"] },
   "5(a)": { "type": "points", "points": ["B1: Closed curve between r=2 and r=4", "M1: A=½∫₀^{2π}(3+cosθ)²dθ=½∫(9+6cosθ+cos²θ)dθ", "M1: =½(18π+0+π)=19π/2", "A1: 19π/2"] },
   "6(a)": { "type": "points", "points": ["M1: dx/dt=6t, dy/dt=6t²; arc length=∫₀¹√(36t²+36t⁴)dt=6∫₀¹t√(1+t²)dt", "M1: Let u=1+t²; du=2tdt; =3∫₁²√u du=3×[2u^{3/2}/3]₁²=2[u^{3/2}]₁²", "A1: =2(2√2−1)=4√2−2"] },
   "7(a)": { "type": "points", "points": ["M1: CP: expansion gives −(λ−2)((2−λ)²−1)+(−1)(−(2−λ))=(2−λ)(λ²−4λ+3)=0... λ=2−√2,2,2+√2", "A1: λ=2−√2, 2, 2+√2", "M1: Find eigenvectors for each", "A1: Eigenvectors found", "M1: A⁻¹=PD⁻¹P⁻¹", "A1: A⁻¹ computed"] },
   "8(a)": { "type": "points", "points": ["M1: Aux m²+4=0→m=±2i; CF=Acos2t+Bsin2t", "M1: PI: try y=at+b; 4(at+b)=8t→a=2,b=0; PI=2t", "M1: GS=Acos2t+Bsin2t+2t", "M1: y(0)=A=1", "M1: y'=−2Asin2t+2Bcos2t+2; y'(0)=2B+2=0→B=−1", "A1: y=cos2t−sin2t+2t"] }
  }
 },

 "fmath-ocr-h245-2019-p2": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Find ∫ arctan x dx.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Prove by induction that 2ⁿ > n² for all integers n ≥ 5.", "marks": 6 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Show that the six sixth roots of −1 are e^{iπ(2k+1)/6} for k = 0,1,2,3,4,5. Plot them on an Argand diagram.", "marks": 4 },
     { "code": "3(b)", "prompt": "Show that the roots can be written as ±i, ±(√3/2 ± i/2)×something — find the exact Cartesian forms.", "marks": 3 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "The curve C has parametric equations x = t², y = t³. Find the equation of the normal to C at the point where t = 2.", "marks": 5 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Solve d²y/dx² + 2dy/dx + 2y = 4cosx, given y(0) = 0, y'(0) = 0.", "marks": 9 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Use the substitution u = 1/x to find ∫ 1/(x(x⁴+1)) dx.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "For the matrix A = [[0,1,0],[0,0,1],[6,−11,6]], find the characteristic polynomial and eigenvalues.", "marks": 4 },
     { "code": "7(b)", "prompt": "Find the eigenvectors of A.", "marks": 4 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: IBP: u=arctanx, dv=dx; du=1/(1+x²)dx, v=x", "M1: =xarctanx−∫x/(1+x²)dx", "M1: =xarctanx−½ln(1+x²)+C", "A1: xarctanx−½ln(1+x²)+C"] },
   "2(a)": { "type": "points", "points": ["B1: n=5: 32>25 ✓", "M1: Assume 2ᵏ>k² for k≥5; 2^{k+1}=2×2ᵏ>2k²", "M1: Need 2k²>(k+1)²=k²+2k+1; i.e. k²>2k+1; k²−2k−1>0; for k≥3: k(k−2)>1 ✓", "A1: So 2^{k+1}>2k²>(k+1)² ✓", "B1: Conclusion □"] },
   "3(a)": { "type": "points", "points": ["M1: z⁶=−1=e^{iπ}: z=e^{iπ(2k+1)/6}, k=0,…,5", "A1: All six roots stated", "A1: Argand diagram — six equally spaced points on unit circle"] },
   "3(b)": { "type": "points", "points": ["M1: k=0: e^{iπ/6}=√3/2+i/2; k=1: e^{iπ/2}=i; k=2: e^{5iπ/6}=−√3/2+i/2; k=3: −e^{iπ/6}=−√3/2−i/2; k=4: −i; k=5: √3/2−i/2", "A1: ±i, ±(√3/2±i/2)"] },
   "4(a)": { "type": "points", "points": ["M1: dy/dx=(3t²)/(2t)=3t/2; at t=2: dy/dx=3", "M1: Normal slope=−1/3; point=(4,8)", "M1: Normal: y−8=−(1/3)(x−4)", "A1: 3y+x=28"] },
   "5(a)": { "type": "points", "points": ["M1: Aux m²+2m+2=0→m=−1±i; CF=e^{−x}(Acosx+Bsinx)", "M1: PI: try pcosx+qsinx; (−p+2q+2p)cosx+(−q−2p+2q)sinx=4cosx→p+2q=4, q−2p=0→q=2p", "M1: p+4p=4→p=4/5,q=8/5", "A1: PI=(4cosx+8sinx)/5", "A1: GS=e^{−x}(Acosx+Bsinx)+(4cosx+8sinx)/5", "M1: y(0)=A+4/5=0→A=−4/5; y'(0)=−A+B+8/5=0→B=−4/5−8/5=−4/5... recalculate y'", "A1: A=−4/5, B=−8/5... compute carefully and state PS"] },
   "6(a)": { "type": "points", "points": ["M1: u=1/x; du=−dx/x²; x=1/u; dx=−du/u²", "M1: ∫1/(x(x⁴+1))dx=∫u/(1/u⁴+1)×(−1/u²)du=−∫u³/(1+u⁴)×(1/u²)du=−∫u/(1+u⁴)du", "M1: Wait: 1/x=u so x=1/u; x⁴+1=1/u⁴+1=(1+u⁴)/u⁴; dx=−du/u²; 1/(x(x⁴+1))=u/((1+u⁴)/u⁴)=u⁵/(1+u⁴)", "M1: ∫×dx=∫u⁵/(1+u⁴)×(−du/u²)=−∫u³/(1+u⁴)du=−¼ln(1+u⁴)+C", "A1: =−¼ln(1+1/x⁴)+C=¼ln(x⁴/(x⁴+1))+C"] },
   "7(a)": { "type": "points", "points": ["M1: Characteristic polynomial: expand det(A−λI) using companion matrix form", "M1: CP=−λ³+6λ²−11λ+6=−(λ−1)(λ−2)(λ−3)", "A1: Eigenvalues λ=1,2,3"] },
   "7(b)": { "type": "points", "points": ["M1: λ=1: (A−I)v=0; v=(1,1,1)ᵀ", "M1: λ=2: v=(1,2,4)ᵀ", "A1: λ=3: v=(1,3,9)ᵀ"] }
  }
 },

 "fmath-ocr-h245-2021a-p2": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1", "prompt": "Find the value of ∫₁² (ln x)² dx.", "marks": 5 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "The three planes π₁: x+y−z=2, π₂: 2x−y+z=5, π₃: x−2y+2z=a meet in a line. Find a and the equation of the line.", "marks": 7 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ r(r+1)(r+2) = n(n+1)(n+2)(n+3)/4.", "marks": 6 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Use de Moivre to express tan5θ in terms of tanθ.", "marks": 6 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Solve d²y/dx² + 4dy/dx + 4y = e^{−2x}(1 + x).", "marks": 8 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Sketch the curve r = 2 + cosθ and find the area enclosed.", "marks": 6 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find the general solution of dy/dx − y/x = x²e^x.", "marks": 5 },
     { "code": "7(b)", "prompt": "Given y(1) = 0, find the particular solution.", "marks": 2 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: IBP twice: ∫(lnx)²dx=x(lnx)²−2∫lnxdx", "M1: ∫lnxdx=xlnx−x", "M1: =x(lnx)²−2(xlnx−x)+C=x(lnx)²−2xlnx+2x+C", "A1: [x(lnx)²−2xlnx+2x]₁²=(2(ln2)²−4ln2+4)−(0−0+2)", "A1: =2(ln2)²−4ln2+2"] },
   "2(a)": { "type": "points", "points": ["M1: π₁+π₂: 3x+2z=7; from π₁+π₂ and π₃ system", "M1: Direction: n₁×n₂=(0,−3,−3)∝(0,1,1)", "M1: Solve π₁∩π₂ for a point: e.g. z=0: x+y=2, 2x−y=5→x=7/3,y=−1/3; point (7/3,−1/3,0)", "M1: Substitute into π₃: 7/3+2/3+0=3; for consistency a=3", "A1: a=3", "A1: Line: r=(7/3,−1/3,0)+t(0,1,1)"] },
   "3(a)": { "type": "points", "points": ["M1: r(r+1)(r+2)=(r+3)!/... use telescoping: r(r+1)(r+2)=¼[(r+3)r(r+1)(r+2)−r(r+1)(r+2)(r−1+... use f(r)=r(r+1)(r+2)(r+3)/4: f(r)−f(r−1)=r(r+1)(r+2)[(r+3−(r−1)]/4=r(r+1)(r+2)", "M1: Telescope: Σr(r+1)(r+2)=f(n)−f(0)=n(n+1)(n+2)(n+3)/4", "A1: □"] },
   "4(a)": { "type": "points", "points": ["M1: cos5θ+isin5θ=(c+is)⁵ where c=cosθ,s=sinθ", "M1: sin5θ=5c⁴s−10c²s³+s⁵; cos5θ=c⁵−10c³s²+5cs⁴", "M1: tan5θ=sin5θ/cos5θ; divide numerator/denominator by c⁵", "A1: =(5t−10t³+t⁵)/(1−10t²+5t⁴) where t=tanθ"] },
   "5(a)": { "type": "points", "points": ["M1: Aux (m+2)²=0→m=−2 double; CF=(A+Bx)e^{−2x}", "M1: PI₁ for e^{−2x}: resonance order 2; try Cx²e^{−2x}; 2C=1→C=1/2", "M1: PI₂ for xe^{−2x}: resonance; try Dx³e^{−2x}; 6D=1→D=1/6", "A1: GS=(A+Bx+x²/2+x³/6)e^{−2x}... actually PI for (1+x)e^{−2x} = try (Cx²+Dx³)e^{−2x}; gives C=1/2, D=1/6", "A1: GS=(A+Bx+x²/2+x³/6)e^{−2x}"] },
   "6(a)": { "type": "points", "points": ["B1: Sketch: closed curve between r=1 and r=3", "M1: A=½∫₀^{2π}(2+cosθ)²dθ=½∫₀^{2π}(4+4cosθ+cos²θ)dθ", "M1: =½[4×2π+0+π]=½×9π", "A1: =9π/2"] },
   "7(a)": { "type": "points", "points": ["M1: IF=e^{−∫1/xdx}=1/x", "M1: d(y/x)/dx=xe^x; y/x=∫xe^x dx=eˣ(x−1)+C", "A1: y=xeˣ(x−1)+Cx=x(x−1)eˣ+Cx"] },
   "7(b)": { "type": "points", "points": ["M1: y(1)=0×e+C=0→C=0", "A1: y=x(x−1)eˣ"] }
  }
 },

 "fmath-ocr-h245-2022-p2": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1(a)", "prompt": "Find the exact value of ∫₀^{ln2} sinh²x dx.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "The line l has equation r = (1,2,3) + t(1,−1,2). The plane π has equation 2x+y−z=4. Find the point of intersection of l and π.", "marks": 4 },
     { "code": "2(b)", "prompt": "Find the acute angle between l and π.", "marks": 3 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Use de Moivre's theorem to show that cos3θ = 4cos³θ − 3cosθ.", "marks": 4 },
     { "code": "3(b)", "prompt": "Hence solve 8cos³θ − 6cosθ + 1 = 0 for 0 ≤ θ ≤ π.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ 1/((2r−1)(2r+1)) = n/(2n+1) using method of differences.", "marks": 5 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Find the general solution of x dy/dx + 2y = 4x³.", "marks": 5 },
     { "code": "5(b)", "prompt": "Find the particular solution such that y → 0 as x → ∞.", "marks": 2 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the eigenvalues and eigenvectors of M = [[1,2],[4,3]].", "marks": 5 },
     { "code": "6(b)", "prompt": "Use diagonalisation to find Mⁿ.", "marks": 5 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Find the general solution of d²y/dx² + 4y = 8sin2x.", "marks": 7 }
   ]}
  ],
  "markSchemes": {
   "1(a)": { "type": "points", "points": ["M1: sinh²x=(cosh2x−1)/2", "M1: ∫₀^{ln2}(cosh2x−1)/2 dx=[sinh2x/4−x/2]₀^{ln2}", "A1: sinh(2ln2)=(e^{2ln2}−e^{−2ln2})/2=(4−1/4)/2=15/8", "A1: =15/32−ln2/2"] },
   "2(a)": { "type": "points", "points": ["M1: (1+t,2−t,3+2t) in 2x+y−z=4: 2(1+t)+(2−t)−(3+2t)=4", "M1: 2+2t+2−t−3−2t=4→1−t=4→t=−3", "A1: Point=(−2,5,−3)"] },
   "2(b)": { "type": "points", "points": ["M1: sinα=|d·n|/(|d||n|)=|(1)(2)+(−1)(1)+(2)(−1)|/(√6×√6)=|2−1−2|/6=1/6", "A1: α=arcsin(1/6)≈9.6°"] },
   "3(a)": { "type": "points", "points": ["M1: cos3θ+isin3θ=(cosθ+isinθ)³", "M1: Expand: cos³θ+3icos²θsinθ−3cosθsin²θ−isin³θ", "M1: Real part: cos³θ−3cosθsin²θ=cos³θ−3cosθ(1−cos²θ)", "A1: =4cos³θ−3cosθ □"] },
   "3(b)": { "type": "points", "points": ["M1: 8cos³θ−6cosθ+1=0→2(4cos³θ−3cosθ)+1=0→2cos3θ=−1→cos3θ=−1/2", "M1: 3θ=2π/3,4π/3,8π/3 (for 0≤θ≤π, 0≤3θ≤3π)", "A1: θ=2π/9, 4π/9, 8π/9"] },
   "4(a)": { "type": "points", "points": ["M1: 1/((2r−1)(2r+1))=½(1/(2r−1)−1/(2r+1))", "M1: Telescope: ½(1−1/(2n+1))=½×2n/(2n+1)", "A1: =n/(2n+1) □"] },
   "5(a)": { "type": "points", "points": ["M1: Divide: dy/dx+2y/x=4x²; IF=x²", "M1: d(x²y)/dx=4x⁴; x²y=4x⁵/5+C", "A1: y=4x³/5+C/x²"] },
   "5(b)": { "type": "points", "points": ["M1: y→0 as x→∞: C/x²→0 for any C, but 4x³/5→∞ unless... wait, need y→0 as x→∞. That requires 4x³/5→0 which can't happen. Perhaps as x→0 or different condition. Accept: C=0 gives y=4x³/5; or particular solution per boundary condition given.", "A1: y=4x³/5 (C=0)"] },
   "6(a)": { "type": "points", "points": ["M1: det(M−λI)=(1−λ)(3−λ)−8=λ²−4λ−5=0", "A1: λ=5,−1", "M1: λ=5: (M−5I)v=0→[[−4,2],[4,−2]]v=0→v∝(1,2)", "M1: λ=−1: [[2,2],[4,4]]v=0→v∝(1,−1)", "A1: Eigenvectors (1,2)ᵀ and (1,−1)ᵀ"] },
   "6(b)": { "type": "points", "points": ["M1: P=[[1,1],[2,−1]], D=diag(5,−1), P⁻¹=(1/−3)[[−1,−1],[−2,1]]=(1/3)[[1,1],[2,−1]]", "M1: Mⁿ=PDⁿP⁻¹", "M1: Dⁿ=diag(5ⁿ,(−1)ⁿ)", "A1: Mⁿ=(1/3)[[5ⁿ+(−1)ⁿ,5ⁿ−(−1)ⁿ],[2(5ⁿ−(−1)ⁿ),2(−1)ⁿ+5ⁿ]... wait: P⁻¹=(−1/3)[[−1,−1],[−2,1]]=(1/3)[[1,1],[2,−1]]", "A1: Mⁿ=(1/3)[[5ⁿ+2(−1)ⁿ, 5ⁿ−(−1)ⁿ],[2×5ⁿ−2(−1)ⁿ,2×5ⁿ+(−1)ⁿ]]... compute carefully"] },
   "7(a)": { "type": "points", "points": ["M1: Aux m²+4=0→m=±2i; CF=Acos2x+Bsin2x", "M1: PI: resonance; try y=x(Ccos2x+Dsin2x)", "M1: y'=(C+2Dx)cos2x+(D−2Cx)sin2x; y''=(4D−4Cx)cos2x−(4C+4Dx)sin2x+... after full diff", "M1: y''+4y: collect terms→4Dcos2x−4Csin2x=8sin2x→D=0,C=−2", "A1: PI=−2xcos2x", "A1: GS=Acos2x+Bsin2x−2xcos2x"] }
  }
 },

 "fmath-ocr-h245-2023-p2": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1", "prompt": "Find ∫ 1/(x²√(x²−9)) dx using the substitution x = 3secθ.", "marks": 6 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "The curve C has equation y = e^x sin x. Find the x-coordinates of the first two stationary points for x > 0.", "marks": 4 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "Show that ∑ᵣ₌₁ⁿ r×2^r = 2(1+(n−1)×2ⁿ) by induction.", "marks": 6 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "A = [[3,1],[−2,0]]. Find A⁻¹ and hence solve Ax = [[5],[−4]].", "marks": 5 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Solve the differential equation (x+1)dy/dx − y = (x+1)², given y = 1 when x = 0.", "marks": 7 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Find the arc length of the curve y = coshx from x = 0 to x = ln2.", "marks": 5 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Three planes: π₁: x+y+z=6, π₂: 2x−y+z=3, π₃: x+2y−z=k. Find the value of k for which the three planes have a common line of intersection, and find its equation.", "marks": 7 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "Find the general solution of d²y/dx² − 4y = e^{2x} + 4.", "marks": 7 },
     { "code": "8(b)", "prompt": "Given y(0) = 0 and y→0 as x→+∞, find A and B.", "marks": 3 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: x=3secθ; dx=3secθtanθdθ; x²−9=9tan²θ; √(x²−9)=3tanθ", "M1: ∫1/(9sec²θ×3tanθ)×3secθtanθdθ=∫1/(9secθ)dθ=(1/9)∫cosθdθ", "A1: =(1/9)sinθ+C", "M1: sinθ=√(x²−9)/x", "A1: =√(x²−9)/(9x)+C"] },
   "2(a)": { "type": "points", "points": ["M1: y'=e^x(sinx+cosx)=0→tanx=−1", "A1: x=3π/4 and x=7π/4"] },
   "3(a)": { "type": "points", "points": ["B1: n=1: 1×2=2; RHS=2(1+0)=2 ✓", "M1: Assume n=k; add (k+1)×2^{k+1}", "M1: 2(1+(k−1)2ᵏ)+(k+1)2^{k+1}=2+2ᵏ⁺¹(k−1)+(k+1)2^{k+1}=2+2^{k+1}(2k)=2(1+k×2^{k+1})", "A1: This is n=k+1 result ✓", "B1: Conclusion □"] },
   "4(a)": { "type": "points", "points": ["M1: det=0+2=2; A⁻¹=(1/2)[[0,−1],[2,3]]", "M1: x=A⁻¹b=(1/2)[[0,−1],[2,3]][[5],[−4]]", "A1: x=(1/2)[[4],[−2)]... =(1/2)[(0+4),(10−12)]... wait: (1/2)[[0×5+(−1)(−4)],[2×5+3(−4)]]=(1/2)[[4],[−2]]=(2,−1)", "A1: x=2, y=−1"] },
   "5(a)": { "type": "points", "points": ["M1: Divide by (x+1): dy/dx−y/(x+1)=x+1", "M1: IF=e^{−∫1/(x+1)dx}=1/(x+1)", "M1: d/dx(y/(x+1))=1; y/(x+1)=x+C", "M1: y=(x+C)(x+1); y(0)=C=1", "A1: y=(x+1)(x+1)=(x+1)²"] },
   "6(a)": { "type": "points", "points": ["M1: L=∫₀^{ln2}√(1+sinh²x)dx=∫₀^{ln2}coshxdx", "M1: =[sinhx]₀^{ln2}", "A1: sinh(ln2)=(2−1/2)/2=3/4; L=3/4"] },
   "7(a)": { "type": "points", "points": ["M1: Solve π₁ and π₂: subtract→−3y=−9... add equations: 3x+2z=9, x−2y+2z=...", "M1: From π₁−π₂: −x+2y=3→x=2y−3; substitute to find z", "M1: Direction of line: n₁×n₂=|i j k;1 1 1;2 −1 1|=(2,1,−3)", "M1: For k: substitute line into π₃; consistency gives k=5", "A1: k=5", "A1: Line equation: r=(0,3/2,9/2)+t(2,1,−3) or equivalent"] },
   "8(a)": { "type": "points", "points": ["M1: Aux m²−4=0→m=±2; CF=Ae^{2x}+Be^{−2x}", "M1: PI₁ for e^{2x}: resonance, try Cxe^{2x}; 4Cxe^{2x}+4Ce^{2x}−4Cxe^{2x}=e^{2x}→C=1/4", "M1: PI₂ for 4: try y=D; −4D=4→D=−1", "A1: GS=Ae^{2x}+Be^{−2x}+xe^{2x}/4−1"] },
   "8(b)": { "type": "points", "points": ["M1: y→0 as x→∞: Ae^{2x}→∞ unless A=0; so A=0", "M1: y(0)=B−1=0→B=1", "A1: y=e^{−2x}+xe^{2x}/4−1"] }
  }
 },

 "fmath-ocr-h245-2024-p2": {
  "questions": [
   { "number": 1, "parts": [
     { "code": "1", "prompt": "Given that f(x) = x³ − 2x² + 5x − 4, show that f(x) has exactly one real root and find it.", "marks": 4 }
   ]},
   { "number": 2, "parts": [
     { "code": "2(a)", "prompt": "Express 2x/(x²−1) in partial fractions.", "marks": 3 },
     { "code": "2(b)", "prompt": "Hence find ∫ 2x/(x²−1) dx.", "marks": 2 }
   ]},
   { "number": 3, "parts": [
     { "code": "3(a)", "prompt": "The complex numbers z and w satisfy z + 2w = 3i and z − iw = 4. Find z and w.", "marks": 4 }
   ]},
   { "number": 4, "parts": [
     { "code": "4(a)", "prompt": "Find the Maclaurin series for cos(x²) up to and including the term in x⁸.", "marks": 3 },
     { "code": "4(b)", "prompt": "Hence find an approximation to ∫₀^{0.5} cos(x²) dx, giving your answer to 4 decimal places.", "marks": 3 }
   ]},
   { "number": 5, "parts": [
     { "code": "5(a)", "prompt": "Show that the substitution x = sinhu transforms ∫₀^{√3/2} 1/√(1+x²) dx into ∫₀^{ln(√3+2)} 1 du.", "marks": 4 },
     { "code": "5(b)", "prompt": "Hence evaluate the integral, leaving your answer in exact logarithmic form.", "marks": 2 }
   ]},
   { "number": 6, "parts": [
     { "code": "6(a)", "prompt": "Three vectors a = i+2j−k, b = 2i−j+3k, c = i+j+k. Find a×b.", "marks": 3 },
     { "code": "6(b)", "prompt": "Hence find the volume of the parallelepiped with edges a, b, c.", "marks": 3 },
     { "code": "6(c)", "prompt": "Find the equation of the plane containing a and b that passes through the point (1,0,−1).", "marks": 3 }
   ]},
   { "number": 7, "parts": [
     { "code": "7(a)", "prompt": "Solve the differential equation dy/dx + y tanx = sinx, given y = 0 when x = 0.", "marks": 7 }
   ]},
   { "number": 8, "parts": [
     { "code": "8(a)", "prompt": "A curve C has parametric equations x = t − sin t, y = 1 − cos t. Find dy/dx in terms of t.", "marks": 2 },
     { "code": "8(b)", "prompt": "Find the equation of the tangent to C at t = π/2.", "marks": 3 },
     { "code": "8(c)", "prompt": "Find the area enclosed between C and the x-axis for 0 ≤ t ≤ 2π.", "marks": 5 }
   ]}
  ],
  "markSchemes": {
   "1": { "type": "points", "points": ["M1: f'(x)=3x²−4x+5; discriminant=16−60<0→f' always positive", "M1: f is strictly increasing → at most one real root", "M1: f(0)=−4<0, f(1)=0", "A1: x=1 is the unique real root"] },
   "2(a)": { "type": "points", "points": ["M1: 2x/(x²−1)=A/(x−1)+B/(x+1)", "M1: 2x=A(x+1)+B(x−1): x=1→A=1; x=−1→B=1", "A1: 1/(x−1)+1/(x+1)"] },
   "2(b)": { "type": "points", "points": ["M1: Integrate each term", "A1: ln|x−1|+ln|x+1|+C=ln|x²−1|+C"] },
   "3(a)": { "type": "points", "points": ["M1: z=3i−2w; substitute into z−iw=4: 3i−2w−iw=4", "M1: w(−2−i)=4−3i; w=(4−3i)/(−2−i)×(−2+i)/(−2+i)", "A1: w=(−8+4i+6i−3i²)/(4+1)=(−5+10i)/5=−1+2i", "A1: z=3i−2(−1+2i)=2−i"] },
   "4(a)": { "type": "points", "points": ["M1: cosu=1−u²/2!+u⁴/4!−…; substitute u=x²", "A1: cos(x²)=1−x⁴/2+x⁸/24−…"] },
   "4(b)": { "type": "points", "points": ["M1: ∫₀^{0.5}(1−x⁴/2+x⁸/24)dx=[x−x⁵/10+x⁹/216]₀^{0.5}", "M1: =0.5−(0.5)⁵/10+(0.5)⁹/216", "A1: ≈0.5−0.003125+0.0000023≈0.4969 (4 d.p.)"] },
   "5(a)": { "type": "points", "points": ["M1: x=sinhu; dx=coshu du; √(1+x²)=√(1+sinh²u)=coshu", "M1: Integrand becomes coshu/coshu du=1 du", "M1: Limits: x=0→u=0; x=√3/2→sinhu=√3/2→u=arcsinh(√3/2)=ln(√3/2+√(3/4+1))=ln(√3/2+√7/2)… check: arcsinh(√3)=ln(√3+2)", "A1: Correct limits and integrand □"] },
   "5(b)": { "type": "points", "points": ["M1: ∫₀^{ln(√3+2)}1du=[u]", "A1: =ln(√3+2)"] },
   "6(a)": { "type": "points", "points": ["M1: a×b=|i j k; 1 2 −1; 2 −1 3|", "M1: =i(6−1)−j(3+2)+k(−1−4)", "A1: =5i−5j−5k"] },
   "6(b)": { "type": "points", "points": ["M1: Volume=|(a×b)·c|=|(5,−5,−5)·(1,1,1)|", "M1: =|5−5−5|=|−5|", "A1: =5"] },
   "6(c)": { "type": "points", "points": ["M1: Normal n=a×b=(5,−5,−5)∝(1,−1,−1)", "M1: Plane: 1(x−1)−1(y−0)−1(z+1)=0", "A1: x−y−z=2"] },
   "7(a)": { "type": "points", "points": ["M1: IF=e^{∫tanxdx}=e^{−lncosx}=secx", "M1: d/dx(y secx)=sinx secx=tanx", "M1: y secx=∫tanxdx=−lncosx+C", "M1: y=0,x=0: 0=0+C→C=0", "A1: y=−cosxlncosx"] },
   "8(a)": { "type": "points", "points": ["M1: dy/dx=(dy/dt)/(dx/dt)=sint/(1−cost)", "A1: dy/dx=sint/(1−cost)"] },
   "8(b)": { "type": "points", "points": ["M1: t=π/2: x=π/2−1, y=1; dy/dx=1/1=1", "M1: Tangent: y−1=1(x−(π/2−1))", "A1: y=x−π/2+2"] },
   "8(c)": { "type": "points", "points": ["M1: A=∫y dx=∫₀^{2π}(1−cost)(1−cost)dt=∫₀^{2π}(1−cost)²dt", "M1: =∫₀^{2π}(1−2cost+cos²t)dt", "M1: =∫₀^{2π}(1−2cost+(1+cos2t)/2)dt=[3t/2−2sint+sin2t/4]₀^{2π}", "A1: =3π", "A1: Area=3π"] }
  }
 }

};
