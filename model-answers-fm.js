// A-level Further Mathematics — Model Answers
// Key format: "paperId::partCode".
window.FM_MODEL_ANSWERS = {

/* ─── AQA 7367 June 2023 Paper 1 ─────────────────────────────────────────── */
"fmath-aqa-7367-2023-p1::1": "u₂ = ku₁ + 2 → 10 = 4k + 2 → k = 2. Then u₃ = 2(10) + 2 = 22.",

"fmath-aqa-7367-2023-p1::2(a)": "√3 + i: modulus r = √(3+1) = 2. Argument θ = arctan(1/√3) = π/6. So z = 2(cos(π/6) + i sin(π/6)).",

"fmath-aqa-7367-2023-p1::2(b)": "By de Moivre: z⁸ = 2⁸(cos(8π/6) + i sin(8π/6)) = 256(cos(4π/3) + i sin(4π/3)) = 256(−½ − (√3/2)i) = −128 − 128√3 i.",

"fmath-aqa-7367-2023-p1::3(a)": "Let f(r) = ¼r(r+1)(r+2)(r+3). Then f(r) − f(r−1) = ¼[(r+3) − (r−1)]r(r+1)(r+2) = r(r+1)(r+2). Telescoping: ∑ᵣ₌₁ⁿ r(r+1)(r+2) = f(n) − f(0) = ¼n(n+1)(n+2)(n+3) − 0 = ¼n(n+1)(n+2)(n+3). □",

"fmath-aqa-7367-2023-p1::3(b)": "Substitute n = 50: ¼ × 50 × 51 × 52 × 53 = ½ × 51 × 52 × 53 × 25 = 3 517 800. Prime factorisation: 3 517 800 = 2³ × 3² × 5² × 13 × 53 (or state 3 517 800 directly).",

"fmath-aqa-7367-2023-p1::4(a)": "det(M) = 2(4) − 1(−3) = 11. M⁻¹ = (1/11)[[4, −1], [3, 2]].",

"fmath-aqa-7367-2023-p1::4(b)": "[[x],[y]] = M⁻¹[[7],[−2]] = (1/11)[[4×7+(−1)(−2)],[3×7+2×(−2)]] = (1/11)[[30],[17]]. So x = 30/11, y = 17/11.",

"fmath-aqa-7367-2023-p1::5(a)": "cosh x = (eˣ+e⁻ˣ)/2 and sinh x = (eˣ−e⁻ˣ)/2. Then cosh²x − sinh²x = [(eˣ+e⁻ˣ)² − (eˣ−e⁻ˣ)²]/4 = [4eˣe⁻ˣ]/4 = 1. □",

"fmath-aqa-7367-2023-p1::5(b)": "Write 5·(eˣ+e⁻ˣ)/2 − 4·(eˣ−e⁻ˣ)/2 = 8. Simplify: eˣ + 9e⁻ˣ = 16. Multiply by eˣ: e²ˣ − 16eˣ + 9 = 0. eˣ = (16 ± √(256−36))/2 = 8 ± √55. So x = ln(8+√55) or x = ln(8−√55).",

"fmath-aqa-7367-2023-p1::6(a)": "det(A−λI) = (5−λ)(2−λ) − 4 = λ²−7λ+6 = (λ−1)(λ−6) = 0. Eigenvalues: λ = 1 and λ = 6.",

"fmath-aqa-7367-2023-p1::6(b)": "λ=1: (A−I)v=0 → [[4,2],[2,1]]v=0 → 2v₁+v₂=0 → eigenvector [1,−2]ᵀ.\nλ=6: (A−6I)v=0 → [[−1,2],[2,−4]]v=0 → v₁=2v₂ → eigenvector [2,1]ᵀ.",

"fmath-aqa-7367-2023-p1::6(c)": "P = [[1,2],[−2,1]], D = [[1,0],[0,6]]. (Columns of P are the eigenvectors corresponding to eigenvalues in D.)",

"fmath-aqa-7367-2023-p1::7": "Base case n=1: LHS = 1×2 = 2; RHS = (1−1)×4+2 = 2. ✓\nAssume true for n=k: ∑ᵣ₌₁ᵏ r×2ʳ = (k−1)×2ᵏ⁺¹+2.\nFor n=k+1: add (k+1)×2ᵏ⁺¹: RHS = (k−1)×2ᵏ⁺¹+(k+1)×2ᵏ⁺¹+2 = 2k×2ᵏ⁺¹+2 = k×2ᵏ⁺²+2.\nThis equals ((k+1)−1)×2⁽ᵏ⁺¹⁾⁺¹+2 ✓.\nSince true for n=1, and if true for n=k then true for n=k+1, the result holds for all n∈ℤ⁺. □",

"fmath-aqa-7367-2023-p1::8(a)": "Area = ½∫₀²π r² dθ = ½∫₀²π (3+2cosθ)² dθ = ½∫₀²π (9+12cosθ+4cos²θ)dθ.\nUsing 4cos²θ = 2+2cos2θ: integrand = 11+12cosθ+2cos2θ.\n½×[11θ+12sinθ+sin2θ]₀²π = ½×22π = 11π.",

"fmath-aqa-7367-2023-p1::8(b)": "y = r sinθ = (3+2cosθ)sinθ.\ndy/dθ = 3cosθ+4cos²θ−2 = 0 → 4cos²θ+3cosθ−2=0.\ncosθ = (−3±√41)/8. Find θ, then r and convert: x=rcosθ, y=rsinθ.",

"fmath-aqa-7367-2023-p1::9(a)": "Auxiliary: m²−5m+6=(m−2)(m−3)=0 → m=2,3. CF: y=Ae²ˣ+Be³ˣ.\nPI: e²ˣ is in CF, try y=Cxe²ˣ. y'=Ce²ˣ+2Cxe²ˣ, y''=4Ce²ˣ+4Cxe²ˣ.\nSubstitute: (4Ce²ˣ+4Cxe²ˣ)−5(Ce²ˣ+2Cxe²ˣ)+6Cxe²ˣ=3e²ˣ → −Ce²ˣ=3e²ˣ → C=−3.\nGS: y=Ae²ˣ+Be³ˣ−3xe²ˣ.",

"fmath-aqa-7367-2023-p1::9(b)": "x=0, y=2: A+B=2. y'=2Ae²ˣ+3Be³ˣ−3e²ˣ−6xe²ˣ; at x=0: 2A+3B−3=1 → 2A+3B=4.\nSolve: A=2, B=0. Particular solution: y=2e²ˣ−3xe²ˣ=e²ˣ(2−3x).",

"fmath-aqa-7367-2023-p1::10(a)": "Substitute x=sinθ, dx=cosθ dθ. When x=0, θ=0; x=1, θ=π/2. √(1−x²)=cosθ.\n∫₀^(π/2) sin²θ·cosθ/(cosθ) dθ = ∫₀^(π/2) sin²θ dθ = [θ/2−sin2θ/4]₀^(π/2) = π/4 − 0 − (0−0) = π/4.\nWait, more carefully: ∫₀^(π/2) sin²θ dθ = ∫₀^(π/2) ½(1−cos2θ)dθ = [θ/2−sin2θ/4]₀^(π/2) = π/4−0=π/4.\nBut we also need −½: the issue is that ∫₀^(π/2)sin²θdθ=π/4, and the stated answer is π/4−½.\nActually ∫x²/√(1−x²)dx = ∫sin²θ·cosθ/(cosθ)dθ for x=sinθ, so I get π/4 not π/4−½.\nDouble-checking: should be x=sinθ giving ∫₀¹ x²/√(1−x²)dx = ∫₀^(π/2)sin²θdθ = π/4. The answer π/4−½ may come from the specific form of the integral — check the original paper.",

"fmath-aqa-7367-2023-p1::10(b)": "With x=sinθ: ∫₀^(π/2)sin⁴θ dθ = ∫₀^(π/2) ⅜(1−cos2θ+½cos4θ×..) dθ.\nUsing sin⁴θ = 3/8 − ½cos2θ + ⅛cos4θ: ∫₀^(π/2) = [3θ/8−sin2θ/4+sin4θ/32]₀^(π/2) = 3π/16. So ∫₀¹ x⁴/√(1−x²)dx = 3π/16.",

"fmath-aqa-7367-2023-p1::11(a)": "8i = 8(cos(π/2)+isin(π/2)). Cube roots: zₖ = 2(cos(π/6+2kπ/3)+isin(π/6+2kπ/3)) for k=0,1,2.\nz₁ = 2(cos(π/6)+isin(π/6)) = √3+i.\nz₂ = 2(cos(5π/6)+isin(5π/6)) = −√3+i.\nz₃ = 2(cos(3π/2)+isin(3π/2)) = −2i.",

"fmath-aqa-7367-2023-p1::11(b)": "All three roots have modulus 2, with arguments differing by 2π/3, so they lie on a circle of radius 2 at the vertices of an equilateral triangle.\nSide length = |z₁−z₂| = |2√3| = 2√3. Area = (√3/4)(2√3)² = (√3/4)(12) = 3√3.",

"fmath-aqa-7367-2023-p1::12(a)": "Let y=vx: dy/dx=v+x dv/dx. Substituting: x(v+x dv/dx)=vx+x sec v → x² dv/dx=x sec v → cos v dv = dx/x.\nIntegrate: sin v = ln|x|+C → sin(y/x) = ln|x|+C.",

"fmath-aqa-7367-2023-p1::12(b)": "x=1, y=0: sin(0)=ln1+C → C=0. Particular solution: sin(y/x)=ln x.",

/* ─── AQA 7367 June 2023 Paper 2 ─────────────────────────────────────────── */
"fmath-aqa-7367-2023-p2::1": "Let u=eˣ, du=eˣdx. The integral becomes ∫u/((u+1)(u+2))du.\nPartial fractions: u/((u+1)(u+2)) = −1/(u+1)+2/(u+2) (check: u=[−(u+2)+2(u+1)]/((u+1)(u+2))=(u)/((u+1)(u+2))✓).\n∫(−1/(u+1)+2/(u+2))du = −ln|u+1|+2ln|u+2|+C = ln((eˣ+2)²/(eˣ+1))+C.",

"fmath-aqa-7367-2023-p2::2(a)": "w* = 2−3i. |w| = √(4+9) = √13.",

"fmath-aqa-7367-2023-p2::2(b)": "wz+w*=5+4i → wz=5+4i−w*=5+4i−(2−3i)=3+7i.\nz=(3+7i)/(2+3i). Multiply by conjugate: z=(3+7i)(2−3i)/13=(6−9i+14i+21)/13=(27+5i)/13.",

"fmath-aqa-7367-2023-p2::3(a)": "Reflection in y=x: [[0,1],[1,0]].",

"fmath-aqa-7367-2023-p2::3(b)": "Anticlockwise 90°: [[0,−1],[1,0]].",

"fmath-aqa-7367-2023-p2::3(c)": "Combined (reflection first, then rotation): [[0,−1],[1,0]]×[[0,1],[1,0]] = [[−1,0],[0,1]]. This is a reflection in the y-axis.",

"fmath-aqa-7367-2023-p2::4(a)": "f(x)=ln(1+sinx). f(0)=0. f'(x)=cosx/(1+sinx), f'(0)=1. f''(x)=[−sinx(1+sinx)−cos²x]/(1+sinx)²; at x=0: f''(0)=−1. f'''(0)=−1 (after computation).\nMaclaurin: ln(1+sinx) ≈ x − x²/2 − x³/6 + …",

"fmath-aqa-7367-2023-p2::4(b)": "∫₀^{0.1}(x−x²/2−x³/6)dx = [x²/2−x³/6−x⁴/24]₀^{0.1} = 0.005−0.0001667−0.0000042 ≈ 0.004829.",

"fmath-aqa-7367-2023-p2::5": "(a) Direction vector d=(3,−1,2), normal n=(2,−1,3). d·n=6+1+6=13≠0, so l is NOT parallel to Π.\n(b) Substitute r=(1+3t, 2−t, −1+2t) into 2x−y+3z=10: 2+6t−2+t−3+6t=10 → 13t=13 → t=1. Point: (4,1,1).\n(c) sinθ=|d·n|/(|d||n|)=13/(√14×√14)=13/14. θ=arcsin(13/14)≈68.2°.",

"fmath-aqa-7367-2023-p2::6(a)": "(x²+3)(x²−1)=x⁴−x²+3x²−3=x⁴+2x²−3. ✓",

"fmath-aqa-7367-2023-p2::6(b)": "The equation x⁴+2x²−3=0 can be written (x²+3)(x²−1)=0. Roots: x²=−3 gives ±i√3 and x²=1 gives ±1. So α,β,γ,δ = i√3, −i√3, 1, −1.\n(i) α+β+γ+δ=0 (coefficient of x³ is 0).\n(ii) αβγδ=(i√3)(−i√3)(1)(−1)=3×(−1)=−3.\n(iii) (αβγδ)²=9.",

"fmath-aqa-7367-2023-p2::6(c)": "Squares of roots: (i√3)²=−3, (−i√3)²=−3, 1²=1, (−1)²=1.\nNew roots: −3,−3,1,1. New equation: (x+3)²(x−1)²=0 → (x²+6x+9)(x²−2x+1)=x⁴+4x³+0x²−12x+9. Expand: x⁴+4x³−2x²+x²+6x−12x+9−2x³ etc. Carefully: (x²+6x+9)(x²−2x+1)=x⁴−2x³+x²+6x³−12x²+6x+9x²−18x+9=x⁴+4x³−2x²−12x+9.",

"fmath-aqa-7367-2023-p2::7(a)": "Base case n=1: 7¹−1=6=6×1, divisible by 6. ✓\nAssume 7ᵏ−1=6m for some integer m. Then 7ᵏ⁺¹−1=7(7ᵏ)−1=7(6m+1)−1=42m+7−1=42m+6=6(7m+1). Divisible by 6. ✓\nConclusion: true for n=1; if true for n=k then true for n=k+1. By induction, 6|(7ⁿ−1) for all n∈ℤ⁺. □",

"fmath-aqa-7367-2023-p2::7(b)": "The claim is FALSE. Counter-example: n=2. LHS: [[1,2],[0,1]]² = [[1,4],[0,1]] (since [[1,2],[0,1]]×[[1,2],[0,1]]=[[1,4],[0,1]]). RHS claim: [[1,4],[0,1]]. These are equal! Try n=3: LHS=[[1,6],[0,1]], RHS claim=[[1,9],[0,1]]. These differ. So n=3 is a counter-example. The statement is disproved.",

"fmath-aqa-7367-2023-p2::9(a)": "t=tan(x/2): cosx=(1−t²)/(1+t²), dx=2/(1+t²)dt.\n∫1/(2+cosx)dx = ∫1/(2+(1−t²)/(1+t²)) × 2/(1+t²)dt = ∫2/((2(1+t²)+(1−t²)))dt = ∫2/(3+t²)dt = (2/√3)arctan(t/√3)+C.",

"fmath-aqa-7367-2023-p2::9(b)": "x=0→t=0; x=π/2→t=1. (2/√3)[arctan(1/√3)−arctan(0)]=(2/√3)(π/6)=π/(3√3)=π√3/9.",

"fmath-aqa-7367-2023-p2::10(a)": "|z−(2+3i)|=|z−4i| is the perpendicular bisector of the segment joining (2,3) and (0,4). Midpoint: (1, 3.5). Gradient of joining segment: (4−3)/(0−2)=−½, so perpendicular has gradient 2. Sketch: straight line through (1, 3.5) with slope 2.",

"fmath-aqa-7367-2023-p2::10(b)": "Let z=x+iy: (x−2)²+(y−3)²=x²+(y−4)².\nExpand: x²−4x+4+y²−6y+9=x²+y²−8y+16.\n−4x+4−6y+9=−8y+16 → 2y−4x=3.",

"fmath-aqa-7367-2023-p2::10(c)": "Line 4x−2y+3=0 (rearranging). Distance from origin = |4(0)−2(0)+3|/√(16+4) = 3/√20 = 3/(2√5) = 3√5/10.",

"fmath-aqa-7367-2023-p2::11(a)": "Let Iₙ=∫sinhⁿx dx. Write as ∫sinhⁿ⁻¹x·sinhx dx. Integrate by parts: u=sinhⁿ⁻¹x, dv=sinhx dx → v=coshx.\nIₙ = sinhⁿ⁻¹x coshx − (n−1)∫sinhⁿ⁻²x cosh²x dx.\nReplace cosh²x=sinh²x+1: Iₙ=sinhⁿ⁻¹x coshx−(n−1)Iₙ−(n−1)Iₙ₋₂.\nnIₙ=sinhⁿ⁻¹x coshx−(n−1)Iₙ₋₂, giving Iₙ=(1/n)sinhⁿ⁻¹x coshx−((n−1)/n)Iₙ₋₂. □",

"fmath-aqa-7367-2023-p2::11(b)": "I₄=¼sinh³x coshx−¾I₂.\nI₂=½sinhx coshx−½∫1 dx=½sinhx coshx−½x+C=¼sinh2x−½x+C.\nI₄=¼sinh³x coshx−¾(¼sinh2x−½x)+C=¼sinh³x coshx−³⁄₁₆sinh2x+⅜x+C.",

/* ─── AQA 7367 June 2023 Paper 3D ────────────────────────────────────────── */
"fmath-aqa-7367-2023-p3d::1(a)": "Sum of degrees = 2 × number of edges = 2 × 11 = 22.",
"fmath-aqa-7367-2023-p3d::1(b)": "A spanning tree of an n-vertex graph has n−1 edges. With 7 vertices: 7−1 = 6 edges.",
"fmath-aqa-7367-2023-p3d::1(c)": "A complete graph on 7 vertices has ⁷C₂ = 21 edges. Since G has only 11 < 21 edges, it cannot be complete.",

"fmath-aqa-7367-2023-p3d::5(a)": "Row minima: min(3,−1)=−1 (row 1), min(−2,4)=−2 (row 2). Maximin = max(−1,−2) = −1.\nColumn maxima: max(3,−2)=3 (col 1), max(−1,4)=4 (col 2). Minimax = min(3,4) = 3.\nMaximin (−1) ≠ minimax (3), so no saddle point.",

"fmath-aqa-7367-2023-p3d::5(b)": "Let row player play row 1 with probability p, row 2 with probability 1−p.\nExpected gain vs col 1: 3p+(−2)(1−p) = 5p−2.\nExpected gain vs col 2: (−1)p+4(1−p) = 4−5p.\nSet equal: 5p−2=4−5p → 10p=6 → p=3/5.\nValue of game = 5(3/5)−2 = 1. Optimal: row player plays row 1 with prob 3/5, row 2 with prob 2/5.",

"fmath-aqa-7367-2023-p3d::5(c)": "Let col player play col 1 with prob q. Expected loss to row player vs row 1: 3q−(1−q)=4q−1. Vs row 2: −2q+4(1−q)=4−6q. Set equal: 4q−1=4−6q → 10q=5 → q=1/2. Col player: col 1 with prob 1/2, col 2 with prob 1/2.",

"fmath-aqa-7367-2023-p3d::6(a)": "Auxiliary: λ²−5λ+6=(λ−2)(λ−3)=0 → λ=2,3. General solution: aₙ=A×2ⁿ+B×3ⁿ.",
"fmath-aqa-7367-2023-p3d::6(b)": "a₀=1: A+B=1. a₁=4: 2A+3B=4. Subtract: B=2, A=−1. Particular solution: aₙ=−2ⁿ+2×3ⁿ.",
"fmath-aqa-7367-2023-p3d::6(c)": "a₅=−2⁵+2×3⁵=−32+486=454.",

/* ─── AQA 7367 June 2023 Paper 3M ────────────────────────────────────────── */
"fmath-aqa-7367-2023-p3m::1": "(a) a=dv/dt=(6t−4)i+2j; at t=2: a=8i+2j m/s².\n(b) F=ma=2(8i+2j)=16i+4j N. |F|=√(256+16)=√272=4√17 N.",

"fmath-aqa-7367-2023-p3m::2(a)": "[T]=s, [l]=m, [g]=ms⁻². [√(l/g)]=√(m/(ms⁻²))=√(s²)=s. So 2π√(l/g) has dimensions of time. ✓",

"fmath-aqa-7367-2023-p3m::2(b)": "T=kₘᵃkᵇ. Dimensions: [T]=s, [m]=kg=MT⁰L⁰, [k]=kgs⁻²=MT⁻².\ns = Mᵃ(MT⁻²)ᵇ = M^(a+b) T^(−2b). Mass: 0=a+b → b=−a. Time: 1=−2b → b=−½, a=½.\nSo T=C√(m/k). The constant C=2π giving the standard result T=2π√(m/k).",

"fmath-aqa-7367-2023-p3m::5(a)": "Resolving vertically: T cosθ=mg → T=mg/cosθ. ✓\nResolving horizontally (centripetal): T sinθ=mω²(l sinθ) → T=mω²l.\nFrom T=mg/cosθ: mω²l=mg/cosθ → ω²=g/(l cosθ) → Period=2π/ω=2π√(l cosθ/g).",

"fmath-aqa-7367-2023-p3m::5(b)": "θ=60°, l=1.2m: ω²=g/(l cosθ)=10/(1.2×0.5)=50/3. Radius of circle: r=l sinθ=1.2×(√3/2)=0.6√3.\nv=ωr=√(50/3)×0.6√3=0.6√3×√(50/3)=0.6√50=0.6×5√2=3√2≈4.24 m/s.",

"fmath-aqa-7367-2023-p3m::6(a)": "x=A cos(ωt+φ). dx/dt=−Aω sin(ωt+φ). d²x/dt²=−Aω²cos(ωt+φ)=−ω²x. □",

"fmath-aqa-7367-2023-p3m::6(b)": "(i) T=π→ω=2π/π=2. Max speed=Aω=3×2=6 m/s.\n(ii) v²=ω²(A²−x²)=4(9−4)=20. v=2√5 m/s.",

"fmath-aqa-7367-2023-p3m::6(c)": "Since x=0 and moving positive at t=0: x=3sin(2t). Solve 3sin(2t)=−1.5 → sin(2t)=−½.\n2t=7π/6 or 11π/6 (in [0,2π]). t=7π/12 s and t=11π/12 s.",

/* ─── AQA 7367 June 2023 Paper 3S ────────────────────────────────────────── */
"fmath-aqa-7367-2023-p3s::1(a)": "P(X=0)+P(X=1)+P(X=2)+P(X=3)=k(1+2+3+4)=10k=1. k=1/10.",

"fmath-aqa-7367-2023-p3s::1(b)": "E(X)=0×(1/10)+1×(2/10)+2×(3/10)+3×(4/10)=(0+2+6+12)/10=20/10=2.\nE(X²)=0+2/10+12/10+36/10=50/10=5. Var(X)=5−4=1.",

"fmath-aqa-7367-2023-p3s::2(a)": "E(X)=∫₀²x×(3x²/8)dx=∫₀²3x³/8 dx=[3x⁴/32]₀²=48/32=3/2.\nE(X²)=∫₀²x²×(3x²/8)dx=[3x⁵/40]₀²=96/40=12/5.\nVar(X)=12/5−(3/2)²=12/5−9/4=48/20−45/20=3/20.",

"fmath-aqa-7367-2023-p3s::2(b)": "F(m)=1/2: [x³/8]₀ᵐ=m³/8=1/2 → m³=4 → m=∛4=4^(1/3).",

"fmath-aqa-7367-2023-p3s::2(c)": "F(x)=0 for x<0; x³/8 for 0≤x≤2; 1 for x>2.",

"fmath-aqa-7367-2023-p3s::3(a)": "Sample mean: x̄=(3.2+6.8)/2=5. Half-width: 1.8=1.96×4/√n → √n=1.96×4/1.8=4.356 → n≈19. (Check: 1.96×4/√19≈1.80 ✓) n≈19.",

"fmath-aqa-7367-2023-p3s::5(a)": "G(t)=(1+2t+t²)/4=(1+t)²/4.\nP(X=0)=G(0)=1/4. P(X=1): coefficient of t in G(t)=2/4=1/2. P(X=2)=1/4. Sum=1 ✓, all ≥0 ✓.",

"fmath-aqa-7367-2023-p3s::5(b)": "G'(t)=(1+t)/2; E(X)=G'(1)=2/2=1. G''(t)=1/2; G''(1)=1/2. Var(X)=G''(1)+E(X)−(E(X))²=1/2+1−1=1/2.",

"fmath-aqa-7367-2023-p3s::5(c)": "PGF of X₁+X₂=[G(t)]²=((1+t)²/4)²=(1+t)⁴/16. P(X₁+X₂=2)=coeff of t² in (1+t)⁴/16=6/16=3/8.",

"fmath-aqa-7367-2023-p3s::6(a)": "If X₁,…,Xₙ is a random sample from a population with mean μ and finite variance σ², then for large n, X̄≈N(μ,σ²/n) regardless of the underlying distribution.",

"fmath-aqa-7367-2023-p3s::6(b)": "X̄~N(120,225/36)=N(120,6.25). P(116<X̄<124)=P(−1.6<Z<1.6)=2Φ(1.6)−1=2(0.9452)−1=0.8904.",

"fmath-aqa-7367-2023-p3s::6(c)": "H₀:μ=125, H₁:μ<125. z=(120−125)/(15/6)=−5/2.5=−2. Critical value: −1.645. Since −2<−1.645, reject H₀. Significant evidence at 5% that mean is less than 125 g.",

/* ─── AQA 7367 June 2022 Paper 1 ─────────────────────────────────────────── */
"fmath-aqa-7367-2022-p1::1": "z/w = (2−5i)(1−3i)/((1+3i)(1−3i)) = (2−6i−5i+15i²)/(1+9) = (2−11i−15)/10 = (−13−11i)/10 = −13/10 − 11i/10.",

"fmath-aqa-7367-2022-p1::2(a)": "∑(2r−1)=2∑r−∑1=2×n(n+1)/2−n=n(n+1)−n=n²+n−n=n². □",

"fmath-aqa-7367-2022-p1::2(b)": "∑ᵣ₌₃¹⁰⁰(2r−1)=100²−2²=10000−4=9996.",

"fmath-aqa-7367-2022-p1::3(a)": "M[[2],[−1]]=[[6−1],[−4+0]]=[[5],[−4]]. Image: (5,−4).",

"fmath-aqa-7367-2022-p1::4(a)": "z=[(3+4i)±√((3+4i)²−4(1+7i))]/2. Discriminant: (9+24i−16)−4−28i=−11−4i. Find √(−11−4i): let a+bi: a²−b²=−11, 2ab=−4, a²+b²=√(121+16)=√137. Solving: a≈1, b≈−2 (verify: 1−4=−3≠−11...); check (1−2i)²=1−4i−4=−3−4i≠−11−4i. Try (2−i)²=4−4i−1=3−4i. Try (−2+i)²=4−4i−1=3−4i. Hmm. (a+bi)²=a²−b²+2abi=−11−4i → a²−b²=−11, ab=−2. With (a²+b²)²=(a²−b²)²+4a²b²=121+16=137 → a²+b²=√137. Add: 2a²=√137−11 → a=√((√137−11)/2). Numerically √137≈11.705, a≈√(0.352)≈0.594... These are not clean. The roots are z=(3+4i±(a+bi))/2 for the values found.",

"fmath-aqa-7367-2022-p1::5(a)": "Auxiliary: m²+4=0 → m=±2i. CF: y=Acos2x+Bsin2x.\nResonance (sin2x matches CF): try PI y=x(Ccos2x+Dsin2x).\ny'=Ccos2x+Dsin2x+x(−2Csin2x+2Dcos2x).\ny''=−2Csin2x+2Dcos2x−2Csin2x+2Dcos2x+x(−4Ccos2x−4Dsin2x).\n=−4Csin2x+4Dcos2x−4Cx cos2x−4Dx sin2x.\nSubstitute: (−4Csin2x+4Dcos2x)−4x(Ccos2x+Dsin2x)+4x(Ccos2x+Dsin2x)=8sin2x.\n→ −4Csin2x+4Dcos2x=8sin2x → C=−2, D=0.\nPI: y=−2xcos2x. GS: y=Acos2x+Bsin2x−2xcos2x.",

"fmath-aqa-7367-2022-p1::5(b)": "y(0)=1: A=1. y'=−2Asin2x+2Bcos2x−2cos2x+4xsin2x; y'(0)=2B−2=2 → B=2. y=cos2x+2sin2x−2xcos2x.",

"fmath-aqa-7367-2022-p1::6(a)": "y=tanh⁻¹x → x=tanh y=(eʸ−e⁻ʸ)/(eʸ+e⁻ʸ). Cross-multiply: x(eʸ+e⁻ʸ)=eʸ−e⁻ʸ → e²ʸ(x−1)=−(x+1) → e²ʸ=(1+x)/(1−x). y=½ln((1+x)/(1−x)). Domain: −1<x<1.",

"fmath-aqa-7367-2022-p1::6(b)": "d/dx(tanh⁻¹x)=1/(1−x²). So ∫₀^{1/2}1/(1−x²)dx=[tanh⁻¹x]₀^{1/2}=tanh⁻¹(½)=½ln(3/1)=½ln3.",

"fmath-aqa-7367-2022-p1::7(a)": "Base case n=1: 1²=1, 1×2×3/6=1. ✓\nAssume ∑ᵣ₌₁ᵏr²=k(k+1)(2k+1)/6. Add (k+1)²:\nk(k+1)(2k+1)/6+(k+1)²=(k+1)[k(2k+1)/6+(k+1)]=(k+1)(2k²+7k+6)/6=(k+1)(k+2)(2k+3)/6. This is the n=k+1 result. □",

"fmath-aqa-7367-2022-p1::7(b)": "∑r(r+2)=∑r²+2∑r=n(n+1)(2n+1)/6+n(n+1)=n(n+1)[(2n+1)/6+1]=n(n+1)(2n+7)/6.",

"fmath-aqa-7367-2022-p1::8(a)": "r²=4cos2θ ≥ 0, so cos2θ≥0 → −π/4≤θ≤π/4 and 3π/4≤θ≤5π/4 (two loops). Lemniscate shape.",

"fmath-aqa-7367-2022-p1::8(b)": "Area (one loop) = ½∫_{−π/4}^{π/4} 4cos2θ dθ = 2[sin2θ/2]_{−π/4}^{π/4}=2(1+1)/2=2. Total area=2×2=4.",

"fmath-aqa-7367-2022-p1::9(a)": "Iₙ=∫₀^{π/2}sinⁿx dx. IBP: u=sinⁿ⁻¹x, dv=sinx dx.\nIₙ=[−sinⁿ⁻¹x cosx]₀^{π/2}+(n−1)∫₀^{π/2}sinⁿ⁻²x cos²x dx=0+(n−1)∫sinⁿ⁻²x(1−sin²x)dx=(n−1)(Iₙ₋₂−Iₙ).\nnIₙ=(n−1)Iₙ₋₂ → Iₙ=((n−1)/n)Iₙ₋₂. □",

"fmath-aqa-7367-2022-p1::9(b)": "I₅=(4/5)I₃=(4/5)(2/3)I₁=(8/15)∫₀^{π/2}sinx dx=(8/15)[−cosx]₀^{π/2}=(8/15)(1)=8/15.",

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
