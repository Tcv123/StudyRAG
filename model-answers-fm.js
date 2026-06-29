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
"fmath-edx-9fm0-2022-p2::5(c)": "Re(sum)=0: 1+2cos(2π/5)+2cos(4π/5)=0 → cos(2π/5)+cos(4π/5)=−½. □"

};
