const fs = require('fs');
let src = fs.readFileSync('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-edexcel.js', 'utf8');
let count = 0, miss = 0;

function fix(old, rep) {
  if (src.includes(old)) { src = src.replace(old, rep); count++; }
  else { console.log('MISS: ' + old.substring(0, 80)); miss++; }
}

// ── T1: Working as a Physicist ──────────────────────────────────────────────
fix(
  "options: ['4.7 × 10⁶ Hz', '4.7 × 10⁹ Hz', '4.7 × 10¹² Hz', '4.7 × 10³ Hz'], answer: 'B' },",
  "options: ['4.7 × 10⁶ Hz', '4.7 × 10⁹ Hz', '4.7 × 10¹² Hz', '4.7 × 10³ Hz'], answer: 'B', explanation: 'Giga = 10⁹, so 4.7 GHz = 4.7 × 10⁹ Hz.' },"
);
fix(
  "options: ['2%', '4%', '5%', '8%'], answer: 'B' },",
  "options: ['2%', '4%', '5%', '8%'], answer: 'B', explanation: '% error = |measured − true| / true × 100 = (5.0 − 4.8) / 5.0 × 100 = 4%.' },"
);
fix(
  "options: ['5%', '10%', '15%', '20%'], answer: 'C' },",
  "options: ['5%', '10%', '15%', '20%'], answer: 'C', explanation: '% uncertainty in volume = 3 × % uncertainty in side = 3 × (0.1/2.0 × 100) = 3 × 5% = 15%.' },"
);
fix(
  "options: ['5%', '7%', '9%', '11%'], answer: 'C' },",
  "options: ['5%', '7%', '9%', '11%'], answer: 'C', explanation: 'ρ = RA/L; total % uncertainty = % unc(R) + % unc(A) + % unc(L) = 3 + 4 + 2 = 9%.' },"
);
fix(
  "options: ['0.013%', '0.064%', '0.13%', '0.64%'], answer: 'B' },",
  "options: ['0.013%', '0.064%', '0.13%', '0.64%'], answer: 'B', explanation: '% uncertainty = resolution / reading × 100 = 0.01 / 15.67 × 100 = 0.064%.' },"
);
fix(
  "options: ['±0.10 m/s', '±0.13 m/s', '±0.20 m/s', '±0.23 m/s'], answer: 'C' },",
  "options: ['±0.10 m/s', '±0.13 m/s', '±0.20 m/s', '±0.23 m/s'], answer: 'C', explanation: 'v = 1.50/0.60 = 2.5 m/s; % unc = (0.02/1.50 + 0.04/0.60) × 100 = 8%; Δv = 0.08 × 2.5 = 0.20 m/s.' },"
);

// ── T2: Mechanics – Amber ───────────────────────────────────────────────────
fix(
  "options: ['2 m/s²', '4 m/s²', '6 m/s²', '8 m/s²'], answer: 'B' },",
  "options: ['2 m/s²', '4 m/s²', '6 m/s²', '8 m/s²'], answer: 'B', explanation: 'a = Δv/t = (30 − 10)/5 = 4 m/s².' },"
);
fix(
  "options: ['1.4 s', '2.0 s', '2.8 s', '4.0 s'], answer: 'B' },",
  "options: ['1.4 s', '2.0 s', '2.8 s', '4.0 s'], answer: 'B', explanation: 'h = ½gt²; t = √(2h/g) = √(2×20/9.81) = √4.08 = 2.0 s.' },"
);
fix(
  "options: ['12 000 J', '24 000 J', '120 000 J', '240 000 J'], answer: 'D' },",
  "options: ['12 000 J', '24 000 J', '120 000 J', '240 000 J'], answer: 'D', explanation: 'W = ½mv² = ½ × 1200 × 20² = 240 000 J = 240 kJ.' },"
);
fix(
  "options: ['0.25 m/s', '0.5 m/s', '1.0 m/s', '1.5 m/s'], answer: 'A' },",
  "options: ['0.25 m/s', '0.5 m/s', '1.0 m/s', '1.5 m/s'], answer: 'A', explanation: 'p = 3×4 − 5×2 = 2 kg·m/s (3 kg direction +ve); v = 2/8 = 0.25 m/s.' },"
);
fix(
  "options: ['10 m', '20 m', '40 m', '80 m'], answer: 'C' },",
  "options: ['10 m', '20 m', '40 m', '80 m'], answer: 'C', explanation: 'a = F/m = 50/10 = 5 m/s²; s = ½at² = ½ × 5 × 4² = 40 m.' },"
);
fix(
  "options: ['10.0 m/s', '14.1 m/s', '17.3 m/s', '20.0 m/s'], answer: 'C' },",
  "options: ['10.0 m/s', '14.1 m/s', '17.3 m/s', '20.0 m/s'], answer: 'C', explanation: 'v_x = v cos 30° = 20 × 0.866 = 17.3 m/s.' },"
);
fix(
  "options: ['686 W', '916 W', '1029 W', '2744 W'], answer: 'B' },",
  "options: ['686 W', '916 W', '1029 W', '2744 W'], answer: 'B', explanation: 'P = mgh/t = 70 × 9.81 × 4 / 3 = 916 W.' },"
);
fix(
  "options: ['0 m/s', '3 m/s', '6 m/s', '12 m/s'], answer: 'A' },",
  "options: ['0 m/s', '3 m/s', '6 m/s', '12 m/s'], answer: 'A', explanation: 'In an elastic collision between equal masses, the moving ball stops and the stationary ball takes the original velocity: v₁′ = 0 m/s.' },"
);
fix(
  "options: ['14.7 m', '29.4 m', '44.1 m', '88.2 m'], answer: 'C' },",
  "options: ['14.7 m', '29.4 m', '44.1 m', '88.2 m'], answer: 'C', explanation: 's = ½gt² = ½ × 9.81 × 3² = 44.1 m.' },"
);
fix(
  "options: ['9 kW', '18 kW', '27 kW', '45 kW'], answer: 'B' },",
  "options: ['9 kW', '18 kW', '27 kW', '45 kW'], answer: 'B', explanation: 'At constant speed, driving force = resistive force = 600 N; P = Fv = 600 × 30 = 18 000 W = 18 kW.' },"
);
fix(
  "options: ['20 N', '34.6 N', '40 N', '80 N'], answer: 'A' },",
  "options: ['20 N', '34.6 N', '40 N', '80 N'], answer: 'A', explanation: 'F_x = 40 cos 60° = 40 × 0.5 = 20 N.' },"
);
fix(
  "options: ['9.9 m/s', '14.0 m/s', '19.8 m/s', '44.1 m/s'], answer: 'B' },",
  "options: ['9.9 m/s', '14.0 m/s', '19.8 m/s', '44.1 m/s'], answer: 'B', explanation: 'v² = 2gh = 2 × 9.81 × 10 = 196.2; v = 14.0 m/s.' },"
);
fix(
  "options: ['5 N', '10 N', '15 N', '20 N'], answer: 'B' },",
  "options: ['5 N', '10 N', '15 N', '20 N'], answer: 'B', explanation: 'F_net = F_applied − F_friction; 20 = 30 − F_f; F_f = 10 N.' },"
);
fix(
  "options: ['490 W', '654 W', '981 W', '1962 W'], answer: 'C' },",
  "options: ['490 W', '654 W', '981 W', '1962 W'], answer: 'C', explanation: 'P = mgh/t = 200 × 9.81 × 15 / 30 = 981 W.' },"
);
fix(
  "options: ['1.0 m/s', '2.0 m/s', '4.0 m/s', '8.0 m/s'], answer: 'B' },",
  "options: ['1.0 m/s', '2.0 m/s', '4.0 m/s', '8.0 m/s'], answer: 'B', explanation: 'Conservation of momentum: 0.01 × 400 = (0.01 + 2) × v; v = 4/2.01 ≈ 2.0 m/s.' },"
);
fix(
  "options: ['15.9 m', '25.5 m', '31.9 m', '63.7 m'], answer: 'C' },",
  "options: ['15.9 m', '25.5 m', '31.9 m', '63.7 m'], answer: 'C', explanation: 'v² = u² − 2gh; h = u²/(2g) = 25²/(2×9.81) = 625/19.62 = 31.9 m.' },"
);
fix(
  "options: ['500 W', '1000 W', '1500 W', '2667 W'], answer: 'C' },",
  "options: ['500 W', '1000 W', '1500 W', '2667 W'], answer: 'C', explanation: 'P_useful = efficiency × P_input = 0.75 × 2000 = 1500 W.' },"
);
fix(
  "options: ['1.75 m/s', '2.25 m/s', '2.75 m/s', '3.25 m/s'], answer: 'C' },",
  "options: ['1.75 m/s', '2.25 m/s', '2.75 m/s', '3.25 m/s'], answer: 'C', explanation: 'p = 3×4 + 5×2 = 22 kg·m/s; v = 22/8 = 2.75 m/s.' },"
);
fix(
  "options: ['4.0 m', '6.4 m', '8.1 m', '10.2 m'], answer: 'C' },",
  "options: ['4.0 m', '6.4 m', '8.1 m', '10.2 m'], answer: 'C', explanation: 't = √(2h/g) = √(10/9.81) = 1.01 s; x = v_x × t = 8 × 1.01 = 8.1 m.' },"
);
fix(
  "options: ['3.75 N·s', '15 N·s', '30 N·s', '60 N·s'], answer: 'D' },",
  "options: ['3.75 N·s', '15 N·s', '30 N·s', '60 N·s'], answer: 'D', explanation: 'J = F × t = 15 × 4 = 60 N·s.' },"
);

// ── T2: Mechanics – Red ─────────────────────────────────────────────────────
fix(
  "options: ['20.4 m', '40.8 m', '61.2 m', '81.5 m'], answer: 'B' },",
  "options: ['20.4 m', '40.8 m', '61.2 m', '81.5 m'], answer: 'B', explanation: 'v_y = 40 sin 45° = 28.28 m/s; h = v_y²/(2g) = 800/19.62 = 40.8 m.' },"
);
fix(
  "options: ['5000 N', '6107 N', '7113 N', '8400 N'], answer: 'C' },",
  "options: ['5000 N', '6107 N', '7113 N', '8400 N'], answer: 'C', explanation: 'a = 25/10 = 2.5 m/s²; F = ma + mg sin 5° + friction = 2000×2.5 + 2000×9.81×0.0872 + 400 ≈ 7113 N.' },"
);
fix(
  "options: ['5 N', '25 N', '45 N', '90 N'], answer: 'C' },",
  "options: ['5 N', '25 N', '45 N', '90 N'], answer: 'C', explanation: 'Δp = m(v₂ − v₁) = 0.1×(4−(−5)) = 0.9 N·s; F = Δp/Δt = 0.9/0.02 = 45 N.' },"
);
fix(
  "options: ['45.9 m', '66.3 m', '79.5 m', '91.8 m'], answer: 'C' },",
  "options: ['45.9 m', '66.3 m', '79.5 m', '91.8 m'], answer: 'C', explanation: 'v_x = 30 cos 60° = 15 m/s; v_y = 30 sin 60° = 26.0 m/s; t_flight = 2v_y/g = 5.30 s; range = 15 × 5.30 = 79.5 m.' },"
);
fix(
  "options: ['15.7 m/s', '22.1 m/s', '31.3 m/s', '49.0 m/s'], answer: 'B' },",
  "options: ['15.7 m/s', '22.1 m/s', '31.3 m/s', '49.0 m/s'], answer: 'B', explanation: 'At the top of the hill, mg = mv²/r; v = √(gr) = √(9.81×50) = 22.1 m/s.' },"
);
fix(
  "options: ['0.57 m', '1.15 m', '2.30 m', '4.59 m'], answer: 'B' },",
  "options: ['0.57 m', '1.15 m', '2.30 m', '4.59 m'], answer: 'B', explanation: 'a = μg = 0.4×9.81 = 3.924 m/s²; s = v²/(2a) = 3²/(2×3.924) = 1.15 m.' },"
);

// ── T3: Electric Circuits – Amber ───────────────────────────────────────────
fix(
  "options: ['1.0 A', '2.0 A', '2.4 A', '3.0 A'], answer: 'B' },",
  "options: ['1.0 A', '2.0 A', '2.4 A', '3.0 A'], answer: 'B', explanation: 'I = EMF/(R+r) = 6/(2.5+0.5) = 6/3 = 2.0 A.' },"
);
fix(
  "options: ['2 Ω', '3 Ω', '8 Ω', '16 Ω'], answer: 'B' },",
  "options: ['2 Ω', '3 Ω', '8 Ω', '16 Ω'], answer: 'B', explanation: '1/R = 1/4 + 1/12 = 3/12 + 1/12 = 4/12; R = 3 Ω.' },"
);
fix(
  "options: ['1.7 × 10⁻⁶ Ω·m', '3.4 × 10⁻⁶ Ω·m', '6.8 × 10⁻⁶ Ω·m', '1.7 × 10⁻⁵ Ω·m'], answer: 'A' },",
  "options: ['1.7 × 10⁻⁶ Ω·m', '3.4 × 10⁻⁶ Ω·m', '6.8 × 10⁻⁶ Ω·m', '1.7 × 10⁻⁵ Ω·m'], answer: 'A', explanation: 'ρ = RA/L = 3.4 × 1×10⁻⁶ / 2 = 1.7×10⁻⁶ Ω·m.' },"
);
fix(
  "options: ['3 V', '5 V', '7 V', '10 V'], answer: 'C' },",
  "options: ['3 V', '5 V', '7 V', '10 V'], answer: 'C', explanation: 'V_out = V_supply × R_2/(R_1+R_2) = 10 × 7/(3+7) = 7 V.' },"
);
fix(
  "options: ['5 V', '7 V', '9 V', '11 V'], answer: 'B' },",
  "options: ['5 V', '7 V', '9 V', '11 V'], answer: 'B', explanation: 'V_terminal = EMF − Ir = 9 − 2×1 = 7 V.' },"
);
fix(
  "options: ['6 C', '60 C', '180 C', '360 C'], answer: 'D' },",
  "options: ['6 C', '60 C', '180 C', '360 C'], answer: 'D', explanation: 'Q = It = 3 × (2×60) = 3 × 120 = 360 C.' },"
);
fix(
  "options: ['2 Ω', '6 Ω', '12 Ω', '18 Ω'], answer: 'A' },",
  "options: ['2 Ω', '6 Ω', '12 Ω', '18 Ω'], answer: 'A', explanation: 'Three equal resistors in parallel: R = R_each/n = 6/3 = 2 Ω.' },"
);
fix(
  "options: ['6 Ω', '12 Ω', '24 Ω', '48 Ω'], answer: 'C' },",
  "options: ['6 Ω', '12 Ω', '24 Ω', '48 Ω'], answer: 'C', explanation: 'R = V/I = 12/0.5 = 24 Ω.' },"
);
fix(
  "options: ['4.35 A', '8.70 A', '11.5 A', '17.4 A'], answer: 'B' },",
  "options: ['4.35 A', '8.70 A', '11.5 A', '17.4 A'], answer: 'B', explanation: 'I = P/V = 2000/230 = 8.70 A.' },"
);
fix(
  "options: ['2 Ω', '4 Ω', '8 Ω', '16 Ω'], answer: 'B' },",
  "options: ['2 Ω', '4 Ω', '8 Ω', '16 Ω'], answer: 'B', explanation: 'R ∝ L/A. L doubles → R×2; d doubles → A quadruples → R÷4. Net: 8×2/4 = 4 Ω.' },"
);
fix(
  "options: ['8 V', '10 V', '12 V', '14 V'], answer: 'C' },",
  "options: ['8 V', '10 V', '12 V', '14 V'], answer: 'C', explanation: 'V_6 = V_supply × R_6/(R_4+R_6) = 20 × 6/10 = 12 V.' },"
);
fix(
  "options: ['0.12 Ω', '1.2 Ω', '1.44 Ω', '8.33 Ω'], answer: 'C' },",
  "options: ['0.12 Ω', '1.2 Ω', '1.44 Ω', '8.33 Ω'], answer: 'C', explanation: 'R = V²/P = 12²/100 = 144/100 = 1.44 Ω.' },"
);
fix(
  "options: ['0.1 Ω', '0.2 Ω', '0.5 Ω', '1.8 Ω'], answer: 'B' },",
  "options: ['0.1 Ω', '0.2 Ω', '0.5 Ω', '1.8 Ω'], answer: 'B', explanation: 'Lost volts = EMF − V_terminal = 6 − 5.4 = 0.6 V; r = 0.6/3 = 0.2 Ω.' },"
);
fix(
  "options: ['0.5 Ω', '1.0 Ω', '2.0 Ω', '4.0 Ω'], answer: 'A' },",
  "options: ['0.5 Ω', '1.0 Ω', '2.0 Ω', '4.0 Ω'], answer: 'A', explanation: 'A ∝ d²; if d doubles, A quadruples; R = ρL/A → R_new = 2/4 = 0.5 Ω.' },"
);
fix(
  "options: ['0.91 V', '2.5 V', '5.0 V', '9.09 V'], answer: 'A' },",
  "options: ['0.91 V', '2.5 V', '5.0 V', '9.09 V'], answer: 'A', explanation: 'V = V_supply × R_thermistor/(R_fixed+R_thermistor) = 10 × 500/5500 ≈ 0.91 V.' },"
);
fix(
  "options: ['150 J', '450 J', '900 J', '1350 J'], answer: 'B' },",
  "options: ['150 J', '450 J', '900 J', '1350 J'], answer: 'B', explanation: 'E = I²Rt = 3² × 10 × 5 = 450 J.' },"
);
fix(
  "options: ['0.45 A', '2.0 A', '5.0 A', '50 A'], answer: 'C' },",
  "options: ['0.45 A', '2.0 A', '5.0 A', '50 A'], answer: 'C', explanation: 'Short circuit: external R = 0; I = EMF/r = 1.5/0.3 = 5.0 A.' },"
);
fix(
  "options: ['0.5 A', '0.75 A', '1.0 A', '1.5 A'], answer: 'C' },",
  "options: ['0.5 A', '0.75 A', '1.0 A', '1.5 A'], answer: 'C', explanation: 'Total EMF = 2×1.5 = 3 V; total r = 2×0.5 = 1 Ω; I = 3/(2+1) = 1.0 A.' },"
);
fix(
  "options: ['1 V', '2 V', '3 V', '4 V'], answer: 'B' },",
  "options: ['1 V', '2 V', '3 V', '4 V'], answer: 'B', explanation: 'V_out = 5 × 2/(2+3) = 2 V.' },"
);
fix(
  "options: ['3.2 × 10⁻¹⁹', '1.25 × 10¹⁹', '3.2 × 10¹⁹', '6.4 × 10¹⁹'], answer: 'B' },",
  "options: ['3.2 × 10⁻¹⁹', '1.25 × 10¹⁹', '3.2 × 10¹⁹', '6.4 × 10¹⁹'], answer: 'B', explanation: 'n = I/e = 2/(1.6×10⁻¹⁹) = 1.25×10¹⁹ electrons per second.' },"
);

// ── T3: Electric Circuits – Red ─────────────────────────────────────────────
fix(
  "options: ['75 Ω', '150 Ω', '300 Ω', '400 Ω'], answer: 'C' },",
  "options: ['75 Ω', '150 Ω', '300 Ω', '400 Ω'], answer: 'C', explanation: 'Balanced bridge: R₁/R₂ = R₃/R₄; 100/200 = 150/R; R = 150×200/100 = 300 Ω.' },"
);
fix(
  "options: ['0.5 A', '1.0 A', '1.5 A', '3.0 A'], answer: 'C' },",
  "options: ['0.5 A', '1.0 A', '1.5 A', '3.0 A'], answer: 'C', explanation: 'Three cells in parallel: effective EMF = 2 V, effective r = 1/3 Ω; I = 2/(1+1/3) = 1.5 A.' },"
);
fix(
  "options: ['5.0 V', '6.0 V', '6.67 V', '8.0 V'], answer: 'C' },",
  "options: ['5.0 V', '6.0 V', '6.67 V', '8.0 V'], answer: 'C', explanation: '4 kΩ voltmeter in parallel with 4 kΩ resistor gives 2 kΩ equivalent; V = 10×2/(1+2) = 6.67 V.' },"
);
fix(
  "options: ['0.52 mm', '0.74 mm', '1.04 mm', '1.48 mm'], answer: 'C' },",
  "options: ['0.52 mm', '0.74 mm', '1.04 mm', '1.48 mm'], answer: 'C', explanation: 'A = ρL/R = 1.7×10⁻⁸×5/0.1 = 8.5×10⁻⁷ m²; d = √(4A/π) = 1.04×10⁻³ m = 1.04 mm.' },"
);

// ── T4: Materials – Amber ───────────────────────────────────────────────────
fix(
  "options: ['1.5 J', '2.25 J', '15 J', '30 J'], answer: 'B' },",
  "options: ['1.5 J', '2.25 J', '15 J', '30 J'], answer: 'B', explanation: 'E = ½kx² = ½ × 200 × 0.15² = ½ × 200 × 0.0225 = 2.25 J.' },"
);
fix(
  "options: ['2.1 × 10¹¹ Pa', '4.2 × 10¹¹ Pa', '8.5 × 10¹⁰ Pa', '4.2 × 10¹⁰ Pa'], answer: 'B' },",
  "options: ['2.1 × 10¹¹ Pa', '4.2 × 10¹¹ Pa', '8.5 × 10¹⁰ Pa', '4.2 × 10¹⁰ Pa'], answer: 'B', explanation: 'A = π(0.25×10⁻³)² = 1.96×10⁻⁷ m²; σ = F/A = 50/1.96×10⁻⁷ = 2.55×10⁸ Pa; ε = 1.2×10⁻³/2 = 6×10⁻⁴; E = σ/ε = 4.2×10¹¹ Pa.' },"
);
fix(
  "options: ['50 N', '100 N', '200 N', '400 N'], answer: 'C' },",
  "options: ['50 N', '100 N', '200 N', '400 N'], answer: 'C', explanation: 'F = stress × A = 100×10⁶ × 2×10⁻⁶ = 200 N.' },"
);
fix(
  "options: ['270 kg/m³', '2700 kg/m³', '27 000 kg/m³', '0.27 kg/m³'], answer: 'B' },",
  "options: ['270 kg/m³', '2700 kg/m³', '27 000 kg/m³', '0.27 kg/m³'], answer: 'B', explanation: 'V = (0.1)³ = 10⁻³ m³; ρ = m/V = 2.7/10⁻³ = 2700 kg/m³.' },"
);
fix(
  "options: ['33.3 N/m', '66.7 N/m', '150 N/m', '300 N/m'], answer: 'B' },",
  "options: ['33.3 N/m', '66.7 N/m', '150 N/m', '300 N/m'], answer: 'B', explanation: '1/k = 1/100 + 1/200 = 3/200; k = 66.7 N/m.' },"
);
fix(
  "options: ['15 N', '20 N', '25 N', '50 N'], answer: 'C' },",
  "options: ['15 N', '20 N', '25 N', '50 N'], answer: 'C', explanation: 'Hooke\'s law: F ∝ x; F_new = 10 × (5/2) = 25 N.' },"
);
fix(
  "options: ['0.196 m', '0.392 m', '0.500 m', '0.981 m'], answer: 'B' },",
  "options: ['0.196 m', '0.392 m', '0.500 m', '0.981 m'], answer: 'B', explanation: 'x = mg/k = (2×9.81)/50 = 0.392 m.' },"
);
fix(
  "options: ['4 N', '8 N', '16 N', '32 N'], answer: 'C' },",
  "options: ['4 N', '8 N', '16 N', '32 N'], answer: 'C', explanation: 'Parallel springs: k_total = 80+80 = 160 N/m; F = kx = 160×0.1 = 16 N.' },"
);
fix(
  "options: ['1300 kg/m³', '2487 kg/m³', '6500 kg/m³', '13000 kg/m³'], answer: 'B' },",
  "options: ['1300 kg/m³', '2487 kg/m³', '6500 kg/m³', '13000 kg/m³'], answer: 'B', explanation: 'V = (4/3)π(0.05)³ = 5.24×10⁻⁴ m³; ρ = 1.3/5.24×10⁻⁴ ≈ 2487 kg/m³.' },"
);
fix(
  "options: ['98 N', '196 N', '393 N', '785 N'], answer: 'C' },",
  "options: ['98 N', '196 N', '393 N', '785 N'], answer: 'C', explanation: 'A = π(0.5×10⁻³)² = 7.85×10⁻⁷ m²; F = σA = 5×10⁸ × 7.85×10⁻⁷ = 393 N.' },"
);
fix(
  "options: ['0.72 mm', '1.43 mm', '2.87 mm', '5.73 mm'], answer: 'B' },",
  "options: ['0.72 mm', '1.43 mm', '2.87 mm', '5.73 mm'], answer: 'B', explanation: 'A = π(0.005)² = 7.85×10⁻⁵ m²; x = FL/(AE) = 15000×1.5/(7.85×10⁻⁵×2×10¹¹) = 1.43×10⁻³ m = 1.43 mm.' },"
);
fix(
  "options: ['40 N/m', '100 N/m', '200 N/m', '400 N/m'], answer: 'C' },",
  "options: ['40 N/m', '100 N/m', '200 N/m', '400 N/m'], answer: 'C', explanation: 'E = ½kx²; k = 2E/x² = 2×4/(0.2)² = 8/0.04 = 200 N/m.' },"
);
fix(
  "options: ['1.08 kg', '2.16 kg', '5.40 kg', '10.8 kg'], answer: 'B' },",
  "options: ['1.08 kg', '2.16 kg', '5.40 kg', '10.8 kg'], answer: 'B', explanation: 'V = L×A = 2×4×10⁻⁴ = 8×10⁻⁴ m³; m = ρV = 2700×8×10⁻⁴ = 2.16 kg.' },"
);
fix(
  "options: ['0.6 mm', '2 mm', '6 mm', '20 mm'], answer: 'C' },",
  "options: ['0.6 mm', '2 mm', '6 mm', '20 mm'], answer: 'C', explanation: 'x = strain × L = 0.002 × 3 = 0.006 m = 6 mm.' },"
);
fix(
  "options: ['1.3 × 10⁴ N/m', '1.3 × 10⁵ N/m', '1.3 × 10⁶ N/m', '1.3 × 10⁷ N/m'], answer: 'B' },",
  "options: ['1.3 × 10⁴ N/m', '1.3 × 10⁵ N/m', '1.3 × 10⁶ N/m', '1.3 × 10⁷ N/m'], answer: 'B', explanation: 'k = AE/L = 1×10⁻⁶ × 1.3×10¹¹ / 1.0 = 1.3×10⁵ N/m.' },"
);
fix(
  "options: ['100 N', '150 N', '200 N', '320 N'], answer: 'C' },",
  "options: ['100 N', '150 N', '200 N', '320 N'], answer: 'C', explanation: 'k = F/x = 80/0.04 = 2000 N/m; F_new = 2000×0.1 = 200 N.' },"
);
fix(
  "options: ['7:20', '20:7', '7:2', '2:7'], answer: 'B' },",
  "options: ['7:20', '20:7', '7:2', '2:7'], answer: 'B', explanation: 'x = FL/(AE); same F, L, A — so x ∝ 1/E. x_Al/x_steel = E_steel/E_Al = 2×10¹¹/(7×10¹⁰) = 20/7.' },"
);

// ── T4: Materials – Red ─────────────────────────────────────────────────────
fix(
  "options: ['140 MPa', '188 MPa', '235 MPa', '282 MPa'], answer: 'D' },",
  "options: ['140 MPa', '188 MPa', '235 MPa', '282 MPa'], answer: 'D', explanation: 'F = m(g+a) = 1200×(9.81+2) = 14 172 N; A = π(0.004)² = 5.03×10⁻⁵ m²; σ = F/A = 2.82×10⁸ Pa = 282 MPa.' },"
);
fix(
  "options: ['0.05 mm', '0.19 mm', '0.50 mm', '1.93 mm'], answer: 'D' },",
  "options: ['0.05 mm', '0.19 mm', '0.50 mm', '1.93 mm'], answer: 'D', explanation: 'x_steel = FL/(AE) = 10000/(10⁻⁴×2×10¹¹) = 0.5 mm; x_Al = 10000/(10⁻⁴×7×10¹⁰) = 1.43 mm; total = 1.93 mm.' },"
);
fix(
  "options: ['0.41 m', '0.82 m', '1.63 m', '3.26 m'], answer: 'B' },",
  "options: ['0.41 m', '0.82 m', '1.63 m', '3.26 m'], answer: 'B', explanation: 'PE_spring = ½kx² = ½×500×0.08² = 1.6 J; h = PE/(mg) = 1.6/(0.2×9.81) = 0.82 m.' },"
);
fix(
  "options: ['2/9', '9/2', '6/1', '2/3'], answer: 'A' },",
  "options: ['2/9', '9/2', '6/1', '2/3'], answer: 'A', explanation: 'x = FL/(AE); x_A/x_B = (L_A/L_B)×(A_B/A_A) = 2×(d_B/d_A)² = 2×(1/3)² = 2/9.' },"
);
fix(
  "options: ['0.1 mm', '0.5 mm', '1.0 mm', '5.0 mm'], answer: 'C' },",
  "options: ['0.1 mm', '0.5 mm', '1.0 mm', '5.0 mm'], answer: 'C', explanation: 'A = 0.3² = 0.09 m²; x = FL/(AE) = 900000×3/(0.09×3×10¹⁰) = 1.0×10⁻³ m = 1.0 mm.' },"
);
fix(
  "options: ['0.06 J', '0.12 J', '0.18 J', '0.21 J'], answer: 'B' },",
  "options: ['0.06 J', '0.12 J', '0.18 J', '0.21 J'], answer: 'B', explanation: 'Elastic energy is stored only in the Hooke\'s law region: E = ½Fx = ½×60×0.004 = 0.12 J.' },"
);

// ── T5: Waves – Amber ───────────────────────────────────────────────────────
fix(
  "options: ['169 m/s', '339 m/s', '571 m/s', '880 m/s'], answer: 'B' },",
  "options: ['169 m/s', '339 m/s', '571 m/s', '880 m/s'], answer: 'B', explanation: 'v = fλ = 440 × 0.77 = 339 m/s.' },"
);
fix(
  "options: ['19.5°', '28.1°', '30.0°', '35.3°'], answer: 'B' },",
  "options: ['19.5°', '28.1°', '30.0°', '35.3°'], answer: 'B', explanation: 'Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂; sin θ₂ = sin 45°/1.5 = 0.471; θ₂ = 28.1°.' },"
);
fix(
  "options: ['0.3 m', '0.6 m', '0.9 m', '1.8 m'], answer: 'B' },",
  "options: ['0.3 m', '0.6 m', '0.9 m', '1.8 m'], answer: 'B', explanation: '3rd harmonic: L = 3λ/2; λ = 2L/3 = 2×0.9/3 = 0.6 m.' },"
);
fix(
  "options: ['2.5 × 10¹⁴ Hz', '5.6 × 10¹⁴ Hz', '7.5 × 10¹⁴ Hz', '1.1 × 10¹⁵ Hz'], answer: 'B' },",
  "options: ['2.5 × 10¹⁴ Hz', '5.6 × 10¹⁴ Hz', '7.5 × 10¹⁴ Hz', '1.1 × 10¹⁵ Hz'], answer: 'B', explanation: 'f₀ = φ/h = 3.7×10⁻¹⁹ / 6.63×10⁻³⁴ = 5.58×10¹⁴ Hz ≈ 5.6×10¹⁴ Hz.' },"
);
fix(
  "options: ['400 nm', '500 nm', '600 nm', '700 nm'], answer: 'C' },",
  "options: ['400 nm', '500 nm', '600 nm', '700 nm'], answer: 'C', explanation: 'λ = wx/D = (0.5×10⁻³ × 2.4×10⁻³)/2 = 6.0×10⁻⁷ m = 600 nm.' },"
);
fix(
  "options: ['33.6°', '41.8°', '48.6°', '56.3°'], answer: 'B' },",
  "options: ['33.6°', '41.8°', '48.6°', '56.3°'], answer: 'B', explanation: 'sin c = 1/n = 1/1.5 = 0.667; c = arcsin(0.667) = 41.8°.' },"
);
fix(
  "options: ['1.99 × 10⁻¹⁹ J', '3.98 × 10⁻¹⁹ J', '5.97 × 10⁻¹⁹ J', '7.96 × 10⁻¹⁹ J'], answer: 'B' },",
  "options: ['1.99 × 10⁻¹⁹ J', '3.98 × 10⁻¹⁹ J', '5.97 × 10⁻¹⁹ J', '7.96 × 10⁻¹⁹ J'], answer: 'B', explanation: 'E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(500×10⁻⁹) = 3.98×10⁻¹⁹ J.' },"
);
fix(
  "options: ['50 Hz', '100 Hz', '200 Hz', '400 Hz'], answer: 'B' },",
  "options: ['50 Hz', '100 Hz', '200 Hz', '400 Hz'], answer: 'B', explanation: 'Closed pipe fundamental: L = λ/4; λ = 4×0.85 = 3.4 m; f = v/λ = 340/3.4 = 100 Hz.' },"
);
fix(
  "options: ['0.5 eV', '0.9 eV', '1.5 eV', '2.9 eV'], answer: 'B' },",
  "options: ['0.5 eV', '0.9 eV', '1.5 eV', '2.9 eV'], answer: 'B', explanation: 'E_photon = hf = 6.63×10⁻³⁴×7×10¹⁴ = 4.64×10⁻¹⁹ J = 2.9 eV; KE_max = 2.9 − 2.0 = 0.9 eV.' },"
);
fix(
  "options: ['8.6°', '12.3°', '17.5°', '21.1°'], answer: 'C' },",
  "options: ['8.6°', '12.3°', '17.5°', '21.1°'], answer: 'C', explanation: 'd = 1/(500×10³) = 2×10⁻⁶ m; sin θ = nλ/d = 600×10⁻⁹/2×10⁻⁶ = 0.3; θ = 17.5°.' },"
);
fix(
  "options: ['326 nm', '434 nm', '654 nm', '872 nm'], answer: 'C' },",
  "options: ['326 nm', '434 nm', '654 nm', '872 nm'], answer: 'C', explanation: 'ΔE = 3.4−1.5 = 1.9 eV = 3.04×10⁻¹⁹ J; λ = hc/ΔE = 1.99×10⁻²⁵/3.04×10⁻¹⁹ = 654 nm.' },"
);
fix(
  "options: ['0.3 m', '0.6 m', '1.2 m', '2.4 m'], answer: 'B' },",
  "options: ['0.3 m', '0.6 m', '1.2 m', '2.4 m'], answer: 'B', explanation: '4 antinodes = 4th harmonic; L = 4×(λ/2) = 2λ; λ = L/2 = 1.2/2 = 0.6 m.' },"
);
fix(
  "options: ['1.5 × 10⁸ m/s', '2.0 × 10⁸ m/s', '2.26 × 10⁸ m/s', '3.99 × 10⁸ m/s'], answer: 'C' },",
  "options: ['1.5 × 10⁸ m/s', '2.0 × 10⁸ m/s', '2.26 × 10⁸ m/s', '3.99 × 10⁸ m/s'], answer: 'C', explanation: 'v = c/n = 3×10⁸/1.33 = 2.26×10⁸ m/s.' },"
);
fix(
  "options: ['3.97 × 10⁻¹⁴ m', '7.94 × 10⁻¹⁴ m', '7.94 × 10⁻¹³ m', '3.97 × 10⁻¹³ m'], answer: 'B' },",
  "options: ['3.97 × 10⁻¹⁴ m', '7.94 × 10⁻¹⁴ m', '7.94 × 10⁻¹³ m', '3.97 × 10⁻¹³ m'], answer: 'B', explanation: 'p = mv = 1.67×10⁻²⁷×5×10⁶ = 8.35×10⁻²¹ kg·m/s; λ = h/p = 6.63×10⁻³⁴/8.35×10⁻²¹ = 7.94×10⁻¹⁴ m.' },"
);
fix(
  "options: ['12 cm', '40 cm', '60 cm', '120 cm'], answer: 'C' },",
  "options: ['12 cm', '40 cm', '60 cm', '120 cm'], answer: 'C', explanation: 'Lens formula: 1/v − 1/u = 1/f; u = −30 cm, f = +20 cm; 1/v = 1/20 + 1/(−30) = 1/60; wait: 1/v = 1/f + 1/u... Using 1/v = 1/20 − 1/30 = 1/60; v = 60 cm.' },"
);
fix(
  "options: ['400 Hz', '600 Hz', '800 Hz', '1000 Hz'], answer: 'C' },",
  "options: ['400 Hz', '600 Hz', '800 Hz', '1000 Hz'], answer: 'C', explanation: '4th harmonic frequency = 4 × fundamental = 4 × 200 = 800 Hz.' },"
);
fix(
  "options: ['3', '5', '7', '9'], answer: 'C' },",
  "options: ['3', '5', '7', '9'], answer: 'C', explanation: 'd = 1/(300×10³) = 3.33×10⁻⁶ m; n_max = d/λ = 3.33×10⁻⁶/450×10⁻⁹ = 7.4; so 7 complete orders visible.' },"
);

// ── T5: Waves – Red ─────────────────────────────────────────────────────────
fix(
  "options: ['0.7 eV', '1.2 eV', '1.7 eV', 'No emission occurs'], answer: 'A' },",
  "options: ['0.7 eV', '1.2 eV', '1.7 eV', 'No emission occurs'], answer: 'A', explanation: 'Work function φ = 5.0 − 2.2 = 2.8 eV; KE_max = 3.5 − 2.8 = 0.7 eV.' },"
);
fix(
  "options: ['122 nm', '365 nm', '486 nm', '656 nm'], answer: 'C' },",
  "options: ['122 nm', '365 nm', '486 nm', '656 nm'], answer: 'C', explanation: 'E_4 = −13.6/16 = −0.85 eV; E_2 = −13.6/4 = −3.4 eV; ΔE = 2.55 eV = 4.08×10⁻¹⁹ J; λ = hc/ΔE = 486 nm.' },"
);
fix(
  "options: ['52.6 N', '105 N', '210 N', '420 N'], answer: 'C' },",
  "options: ['52.6 N', '105 N', '210 N', '420 N'], answer: 'C', explanation: 'f₁ = (1/2L)√(T/μ); T = (2Lf₁)²μ = (2×0.64×330)²×1.2×10⁻³ = 422.4²×1.2×10⁻³ ≈ 214 N ≈ 210 N.' },"
);
fix(
  "options: ['0.06°', '0.17°', '0.34°', '0.69°'], answer: 'C' },",
  "options: ['0.06°', '0.17°', '0.34°', '0.69°'], answer: 'C', explanation: 'First minimum: sin θ = λ/a = 600×10⁻⁹/(0.1×10⁻³) = 6×10⁻³; θ = 0.34°.' },"
);

// ── T6: Further Mechanics – Amber ───────────────────────────────────────────
fix(
  "options: ['6000 N', '12000 N', '15000 N', '30000 N'], answer: 'B' },",
  "options: ['6000 N', '12000 N', '15000 N', '30000 N'], answer: 'B', explanation: 'F = mv²/r = 1500×20²/50 = 1500×400/50 = 12 000 N.' },"
);
fix(
  "options: ['4 m/s²', '10 m/s²', '20 m/s²', '25 m/s²'], answer: 'C' },",
  "options: ['4 m/s²', '10 m/s²', '20 m/s²', '25 m/s²'], answer: 'C', explanation: 'a = ω²r = 5² × 0.8 = 20 m/s².' },"
);
fix(
  "options: ['1 N·s', '4 N·s', '7 N·s', '14 N·s'], answer: 'C' },",
  "options: ['1 N·s', '4 N·s', '7 N·s', '14 N·s'], answer: 'C', explanation: 'J = mΔv = 0.5×(6−(−8)) = 0.5×14 = 7 N·s.' },"
);
fix(
  "options: ['0.4 m/s', '0.8 m/s', '1.6 m/s', '2.2 m/s'], answer: 'B' },",
  "options: ['0.4 m/s', '0.8 m/s', '1.6 m/s', '2.2 m/s'], answer: 'B', explanation: 'p = 2×5 − 3×2 = 4 kg·m/s; v = 4/(2+3) = 0.8 m/s.' },"
);
fix(
  "options: ['15.4 m/s²', '24.7 m/s²', '30.8 m/s²', '49.3 m/s²'], answer: 'C' },",
  "options: ['15.4 m/s²', '24.7 m/s²', '30.8 m/s²', '49.3 m/s²'], answer: 'C', explanation: 'a = 4π²r/T² = 4π²×0.5/0.8² = 4π²×0.5/0.64 = 30.8 m/s².' },"
);
fix(
  "options: ['10 m/s', '20 m/s', '30 m/s', '60 m/s'], answer: 'C' },",
  "options: ['10 m/s', '20 m/s', '30 m/s', '60 m/s'], answer: 'C', explanation: 'J = Ft = 20×3 = 60 N·s = mv; v = 60/2 = 30 m/s.' },"
);
fix(
  "options: ['0.5 N·s', '1.0 N·s', '1.5 N·s', '1.73 N·s'], answer: 'D' },",
  "options: ['0.5 N·s', '1.0 N·s', '1.5 N·s', '1.73 N·s'], answer: 'D', explanation: 'Component perpendicular to wall = v cos 30° = 10×0.866 = 8.66 m/s; J = 2mv_⊥ = 2×0.1×8.66 = 1.73 N·s.' },"
);
fix(
  "options: ['7.0 m/s', '10.0 m/s', '14.0 m/s', '19.6 m/s'], answer: 'C' },",
  "options: ['7.0 m/s', '10.0 m/s', '14.0 m/s', '19.6 m/s'], answer: 'C', explanation: 'At the top, mg = mv²/r (contact just lost); v = √(gr) = √(9.81×20) = 14.0 m/s.' },"
);
fix(
  "options: ['1580 m/s²', '3158 m/s²', '3948 m/s²', '7896 m/s²'], answer: 'C' },",
  "options: ['1580 m/s²', '3158 m/s²', '3948 m/s²', '7896 m/s²'], answer: 'C', explanation: 'ω = 1200×2π/60 = 125.7 rad/s; a = ω²r = 125.7²×0.25 = 3948 m/s².' },"
);
fix(
  "options: ['1 m/s east', '2 m/s east', '3 m/s east', '4 m/s east'], answer: 'B' },",
  "options: ['1 m/s east', '2 m/s east', '3 m/s east', '4 m/s east'], answer: 'B', explanation: 'Conservation of momentum: 2×6 = 2×2 + 4v_B; 12 = 4 + 4v_B; v_B = 2 m/s east.' },"
);
fix(
  "options: ['0.25 s', '0.5 s', '1.0 s', '2.0 s'], answer: 'B' },",
  "options: ['0.25 s', '0.5 s', '1.0 s', '2.0 s'], answer: 'B', explanation: 'T = 2π/ω = 2π/(4π) = 0.5 s.' },"
);
fix(
  "options: ['1.2 N', '1.8 N', '3.6 N', '7.2 N'], answer: 'C' },",
  "options: ['1.2 N', '1.8 N', '3.6 N', '7.2 N'], answer: 'C', explanation: 'F = mv²/r = 0.2×3²/0.5 = 0.2×9/0.5 = 3.6 N.' },"
);
fix(
  "options: ['4.8 N', '24 N', '48 N', '96 N'], answer: 'C' },",
  "options: ['4.8 N', '24 N', '48 N', '96 N'], answer: 'C', explanation: 'F = mΔv/Δt = 0.16×30/0.1 = 48 N.' },"
);
fix(
  "options: ['5.2 m/s', '10.5 m/s', '15.7 m/s', '100 m/s'], answer: 'B' },",
  "options: ['5.2 m/s', '10.5 m/s', '15.7 m/s', '100 m/s'], answer: 'B', explanation: 'f = 50/60 Hz; v = 2πrf = 2π×2×(50/60) = 10.5 m/s.' },"
);
fix(
  "options: ['2.21 m/s', '3.13 m/s', '4.43 m/s', '9.81 m/s'], answer: 'B' },",
  "options: ['2.21 m/s', '3.13 m/s', '4.43 m/s', '9.81 m/s'], answer: 'B', explanation: 'Minimum speed at top: mg = mv²/r; v = √(gr) = √(9.81×1.0) = 3.13 m/s.' },"
);
fix(
  "options: ['588.6 N', '1080 N', '1668.6 N', '2160 N'], answer: 'C' },",
  "options: ['588.6 N', '1080 N', '1668.6 N', '2160 N'], answer: 'C', explanation: 'At bottom: N − mg = mv²/r; N = m(g+v²/r) = 60×(9.81+144/8) = 60×27.81 = 1668.6 N.' },"
);
fix(
  "options: ['5 N·s', '10 N·s', '20 N·s', '40 N·s'], answer: 'B' },",
  "options: ['5 N·s', '10 N·s', '20 N·s', '40 N·s'], answer: 'B', explanation: 'Impulse = area under F-t graph = ½ × 40 × 0.5 = 10 N·s.' },"
);
fix(
  "options: ['1.05 rad/s', '2.09 rad/s', '3.49 rad/s', '6.98 rad/s'], answer: 'C' },",
  "options: ['1.05 rad/s', '2.09 rad/s', '3.49 rad/s', '6.98 rad/s'], answer: 'C', explanation: 'ω = 2π × (33.33/60) = 2π × 0.5556 = 3.49 rad/s.' },"
);

// ── T6: Further Mechanics – Red ─────────────────────────────────────────────
fix(
  "options: ['3.8 m/s', '5.4 m/s', '6.3 m/s', '7.7 m/s'], answer: 'B' },",
  "options: ['3.8 m/s', '5.4 m/s', '6.3 m/s', '7.7 m/s'], answer: 'B', explanation: 'At top (T=0): v²_top = gr = 9.81×0.6 = 5.886 m²/s²; energy conservation: v²_bottom = v²_top + 4gr = 5.886+23.54 = 29.43; v = 5.4 m/s.' },"
);
fix(
  "options: ['−5 m/s', '−2.5 m/s', '2.5 m/s', '5 m/s'], answer: 'A' },",
  "options: ['−5 m/s', '−2.5 m/s', '2.5 m/s', '5 m/s'], answer: 'A', explanation: 'Elastic collision: v_A′ = (m_A−m_B)u_A/(m_A+m_B) = (2−6)×10/8 = −5 m/s.' },"
);
fix(
  "options: ['1.45 s', '1.68 s', '1.86 s', '2.01 s'], answer: 'C' },",
  "options: ['1.45 s', '1.68 s', '1.86 s', '2.01 s'], answer: 'C', explanation: 'T = 2π√(L cos θ/g) = 2π√(1.0×cos 30°/9.81) = 2π√(0.0883) = 1.86 s.' },"
);
fix(
  "options: ['12.6 m/s', '15.3 m/s', '18.9 m/s', '22.4 m/s'], answer: 'C' },",
  "options: ['12.6 m/s', '15.3 m/s', '18.9 m/s', '22.4 m/s'], answer: 'C', explanation: 'Banked curve (no friction): v = √(rg tan θ) = √(100×9.81×tan 20°) = √(357) = 18.9 m/s.' },"
);

// ── T7: Electric and Magnetic Fields – Amber ────────────────────────────────
fix(
  "options: ['1.69 N', '3.37 N', '6.74 N', '33.7 N'], answer: 'B' },",
  "options: ['1.69 N', '3.37 N', '6.74 N', '33.7 N'], answer: 'B', explanation: 'F = kq₁q₂/r² = 8.99×10⁹×3×10⁻⁶×5×10⁻⁶/0.2² = 134.85×10⁻³/0.04 = 3.37 N.' },"
);
fix(
  "options: ['0.72 mJ', '1.44 mJ', '7.2 mJ', '14.4 mJ'], answer: 'C' },",
  "options: ['0.72 mJ', '1.44 mJ', '7.2 mJ', '14.4 mJ'], answer: 'C', explanation: 'E = ½CV² = ½×100×10⁻⁶×12² = 7.2×10⁻³ J = 7.2 mJ.' },"
);
fix(
  "options: ['0.05 s', '0.5 s', '5 s', '50 s'], answer: 'B' },",
  "options: ['0.05 s', '0.5 s', '5 s', '50 s'], answer: 'B', explanation: 'τ = RC = 10×10³ × 50×10⁻⁶ = 0.5 s.' },"
);
fix(
  "options: ['1.6 × 10⁻¹³ N', '3.2 × 10⁻¹³ N', '1.6 × 10⁻¹² N', '3.2 × 10⁻¹² N'], answer: 'A' },",
  "options: ['1.6 × 10⁻¹³ N', '3.2 × 10⁻¹³ N', '1.6 × 10⁻¹² N', '3.2 × 10⁻¹² N'], answer: 'A', explanation: 'F = Bqv = 0.5×1.6×10⁻¹⁹×2×10⁶ = 1.6×10⁻¹³ N.' },"
);
fix(
  "options: ['0.024 N', '0.12 N', '0.24 N', '2.4 N'], answer: 'C' },",
  "options: ['0.024 N', '0.12 N', '0.24 N', '2.4 N'], answer: 'C', explanation: 'F = BIL = 0.2×4×0.3 = 0.24 N.' },"
);
fix(
  "options: ['500 V/m', '2000 V/m', '20000 V/m', '50000 V/m'], answer: 'C' },",
  "options: ['500 V/m', '2000 V/m', '20000 V/m', '50000 V/m'], answer: 'C', explanation: 'E = V/d = 100/(5×10⁻³) = 20 000 V/m.' },"
);
fix(
  "options: ['4 V', '20 V', '40 V', '80 V'], answer: 'C' },",
  "options: ['4 V', '20 V', '40 V', '80 V'], answer: 'C', explanation: 'EMF = NΔΦ/Δt = 200×(5−1)×10⁻³/0.02 = 200×0.2 = 40 V.' },"
);
fix(
  "options: ['0.11 s', '0.55 s', '1.1 s', '5.5 s'], answer: 'C' },",
  "options: ['0.11 s', '0.55 s', '1.1 s', '5.5 s'], answer: 'C', explanation: 'At t = τ, charge = Q₀e⁻¹ ≈ 37%; τ = RC = 5000×220×10⁻⁶ = 1.1 s.' },"
);
fix(
  "options: ['400 V', '800 V', '4000 V', '8000 V'], answer: 'B' },",
  "options: ['400 V', '800 V', '4000 V', '8000 V'], answer: 'B', explanation: 'E = F/Q = 2×10⁻⁴/5×10⁻⁹ = 4×10⁴ V/m; V = Ed = 4×10⁴×0.02 = 800 V.' },"
);
fix(
  "options: ['18.0 kV', '36.0 kV', '72.0 kV', '144 kV'], answer: 'C' },",
  "options: ['18.0 kV', '36.0 kV', '72.0 kV', '144 kV'], answer: 'C', explanation: 'V = kQ/r = 8.99×10⁹×4×10⁻⁶/0.5 = 71 920 V ≈ 72.0 kV.' },"
);
fix(
  "options: ['10 μF', '50 μF', '100 μF', '200 μF'], answer: 'C' },",
  "options: ['10 μF', '50 μF', '100 μF', '200 μF'], answer: 'C', explanation: 'E = ½CV²; C = 2E/V² = 2×0.5/100² = 1.0×10⁻⁴ F = 100 μF.' },"
);
fix(
  "options: ['2.4 × 10⁶ m/s', '4.8 × 10⁶ m/s', '9.6 × 10⁶ m/s', '1.9 × 10⁷ m/s'], answer: 'B' },",
  "options: ['2.4 × 10⁶ m/s', '4.8 × 10⁶ m/s', '9.6 × 10⁶ m/s', '1.9 × 10⁷ m/s'], answer: 'B', explanation: 'BQv = mv²/r; v = BQr/m = 0.5×1.6×10⁻¹⁹×0.1/(1.67×10⁻²⁷) = 4.8×10⁶ m/s.' },"
);
fix(
  "options: ['0.5 μF', '1 μF', '3.67 μF', '11 μF'], answer: 'B' },",
  "options: ['0.5 μF', '1 μF', '3.67 μF', '11 μF'], answer: 'B', explanation: '1/C = 1/2+1/3+1/6 = 3/6+2/6+1/6 = 6/6 = 1; C = 1 μF.' },"
);
fix(
  "options: ['2 V', '10 V', '20 V', '40 V'], answer: 'C' },",
  "options: ['2 V', '10 V', '20 V', '40 V'], answer: 'C', explanation: 'EMF = NΔΦ/Δt = 50×0.04/0.1 = 20 V.' },"
);
fix(
  "options: ['6.6 × 10⁶ m/s', '1.3 × 10⁷ m/s', '2.6 × 10⁷ m/s', '5.3 × 10⁷ m/s'], answer: 'B' },",
  "options: ['6.6 × 10⁶ m/s', '1.3 × 10⁷ m/s', '2.6 × 10⁷ m/s', '5.3 × 10⁷ m/s'], answer: 'B', explanation: 'KE = eV = 1.6×10⁻¹⁹×500 = 8×10⁻¹⁷ J; v = √(2KE/m) = √(1.756×10¹⁴) = 1.3×10⁷ m/s.' },"
);
fix(
  "options: ['1.33 μF', '4 μF', '8 μF', '12 μF'], answer: 'D' },",
  "options: ['1.33 μF', '4 μF', '8 μF', '12 μF'], answer: 'D', explanation: 'Capacitors in parallel: C = 4+4+4 = 12 μF.' },"
);
fix(
  "options: ['0.3 mA', '3 mA', '6 mA', '30 mA'], answer: 'B' },",
  "options: ['0.3 mA', '3 mA', '6 mA', '30 mA'], answer: 'B', explanation: 'I₀ = V₀/R = 6/2000 = 3×10⁻³ A = 3 mA.' },"
);
fix(
  "options: ['5 × 10⁻⁶ N/m', '5 × 10⁻⁵ N/m', '5 × 10⁻⁴ N/m', '5 × 10⁻³ N/m'], answer: 'B' },",
  "options: ['5 × 10⁻⁶ N/m', '5 × 10⁻⁵ N/m', '5 × 10⁻⁴ N/m', '5 × 10⁻³ N/m'], answer: 'B', explanation: 'F/L = μ₀I₁I₂/(2πd) = 4π×10⁻⁷×5×5/(2π×0.1) = 5×10⁻⁵ N/m.' },"
);
fix(
  "options: ['4.23 × 10⁻⁴ C', '4.23 × 10⁻³ C', '4.23 × 10⁻² C', '4.23 × 10⁻¹ C'], answer: 'A' },",
  "options: ['4.23 × 10⁻⁴ C', '4.23 × 10⁻³ C', '4.23 × 10⁻² C', '4.23 × 10⁻¹ C'], answer: 'A', explanation: 'Q = CV = 47×10⁻⁶×9 = 423×10⁻⁶ C = 4.23×10⁻⁴ C.' },"
);

// ── T7: Electric and Magnetic Fields – Red ──────────────────────────────────
fix(
  "options: ['2.7 V', '5.4 V', '7.4 V', '10.8 V'], answer: 'A' },",
  "options: ['2.7 V', '5.4 V', '7.4 V', '10.8 V'], answer: 'A', explanation: 'τ = RC = 50×10³×100×10⁻⁶ = 5 s; V = 20e^(−10/5) = 20e^−² = 20×0.135 = 2.7 V.' },"
);
fix(
  "options: ['d/4', 'd/3', 'd/2', '2d/3'], answer: 'C' },",
  "options: ['d/4', 'd/3', 'd/2', '2d/3'], answer: 'C', explanation: 'V = kQ/r₁ + k(−Q)/r₂ = 0 requires r₁ = r₂; the midpoint at d/2 is equidistant from both charges.' },"
);
fix(
  "options: ['12 V', '30 V', '60 V', '120 V'], answer: 'C' },",
  "options: ['12 V', '30 V', '60 V', '120 V'], answer: 'C', explanation: 'Peak EMF = NBAω = 100×0.3×(0.2)²×50 = 100×0.3×0.04×50 = 60 V.' },"
);
fix(
  "options: ['0.5', '1', '2', '3'], answer: 'B' },",
  "options: ['0.5', '1', '2', '3'], answer: 'B', explanation: 'E ∝ V² ∝ e^(−2t/τ); for E = e⁻²E₀ ≈ 0.135E₀ need 2t/τ = 2 → t = 1 time constant.' },"
);
fix(
  "options: ['3 × 10³ m/s', '3 × 10⁴ m/s', '3 × 10⁵ m/s', '3 × 10⁶ m/s'], answer: 'C' },",
  "options: ['3 × 10³ m/s', '3 × 10⁴ m/s', '3 × 10⁵ m/s', '3 × 10⁶ m/s'], answer: 'C', explanation: 'Electric force = magnetic force: qE = qvB; v = E/B = 3×10⁴/0.1 = 3×10⁵ m/s.' },"
);

// ── T9: Thermodynamics – Amber ──────────────────────────────────────────────
fix(
  "options: ['336 kJ', '504 kJ', '672 kJ', '840 kJ'], answer: 'C' },",
  "options: ['336 kJ', '504 kJ', '672 kJ', '840 kJ'], answer: 'C', explanation: 'Q = mcΔT = 2×4200×(100−20) = 2×4200×80 = 672 000 J = 672 kJ.' },"
);
fix(
  "options: ['50 kPa', '100 kPa', '200 kPa', '400 kPa'], answer: 'C' },",
  "options: ['50 kPa', '100 kPa', '200 kPa', '400 kPa'], answer: 'C', explanation: 'Pressure law (constant V): P₂/T₂ = P₁/T₁; P₂ = 100×600/300 = 200 kPa.' },"
);
fix(
  "options: ['0.006 m³', '0.012 m³', '0.025 m³', '0.050 m³'], answer: 'B' },",
  "options: ['0.006 m³', '0.012 m³', '0.025 m³', '0.050 m³'], answer: 'B', explanation: 'V = nRT/P = 0.5×8.31×300/100000 = 1246.5/100000 = 0.0125 m³ ≈ 0.012 m³.' },"
);
fix(
  "options: ['2.07 × 10⁻²¹ J', '4.14 × 10⁻²¹ J', '6.21 × 10⁻²¹ J', '8.28 × 10⁻²¹ J'], answer: 'C' },",
  "options: ['2.07 × 10⁻²¹ J', '4.14 × 10⁻²¹ J', '6.21 × 10⁻²¹ J', '8.28 × 10⁻²¹ J'], answer: 'C', explanation: 'KE = (3/2)kT = 1.5×1.38×10⁻²³×300 = 6.21×10⁻²¹ J.' },"
);
fix(
  "options: ['83.5 kJ', '167 kJ', '334 kJ', '668 kJ'], answer: 'B' },",
  "options: ['83.5 kJ', '167 kJ', '334 kJ', '668 kJ'], answer: 'B', explanation: 'Q = mL_f = 0.5×3.34×10⁵ = 1.67×10⁵ J = 167 kJ.' },"
);
fix(
  "options: ['40 kPa', '80 kPa', '100 kPa', '500 kPa'], answer: 'B' },",
  "options: ['40 kPa', '80 kPa', '100 kPa', '500 kPa'], answer: 'B', explanation: 'Boyle\'s law: P₁V₁ = P₂V₂; P₂ = 200×0.02/0.05 = 80 kPa.' },"
);
fix(
  "options: ['273 m/s', '390 m/s', '517 m/s', '690 m/s'], answer: 'C' },",
  "options: ['273 m/s', '390 m/s', '517 m/s', '690 m/s'], answer: 'C', explanation: 'v_rms = √(3RT/M) = √(3×8.31×300/0.028) = √(267 107) = 517 m/s.' },"
);
fix(
  "options: ['40°C', '313°C', '586°C', '293°C'], answer: 'B' },",
  "options: ['40°C', '313°C', '586°C', '293°C'], answer: 'B', explanation: 'T₁ = 20+273 = 293 K; pressure doubles → T₂ = 2×293 = 586 K = 313°C.' },"
);
fix(
  "options: ['2.26 MJ', '4.52 MJ', '6.78 MJ', '9.04 MJ'], answer: 'C' },",
  "options: ['2.26 MJ', '4.52 MJ', '6.78 MJ', '9.04 MJ'], answer: 'C', explanation: 'Q = mL_v = 3×2.26×10⁶ = 6.78×10⁶ J = 6.78 MJ.' },"
);
fix(
  "options: ['0.022 m³', '0.045 m³', '0.089 m³', '0.112 m³'], answer: 'B' },",
  "options: ['0.022 m³', '0.045 m³', '0.089 m³', '0.112 m³'], answer: 'B', explanation: 'V = nRT/P = 2×8.31×273/101300 = 4537/101300 = 0.0448 m³ ≈ 0.045 m³.' },"
);
fix(
  "options: ['300 J', '500 J', '800 J', '1300 J'], answer: 'A' },",
  "options: ['300 J', '500 J', '800 J', '1300 J'], answer: 'A', explanation: 'First law of thermodynamics: ΔU = Q − W = 800 − 500 = 300 J.' },"
);
fix(
  "options: ['80 K', '120 K', '160 K', '240 K'], answer: 'C' },",
  "options: ['80 K', '120 K', '160 K', '240 K'], answer: 'C', explanation: 'v_rms = √(3RT/M); T = Mv²/(3R) = 0.004×10⁶/(3×8.31) = 4000/24.93 = 160 K.' },"
);
fix(
  "options: ['36°C', '127°C', '400°C', '673°C'], answer: 'B' },",
  "options: ['36°C', '127°C', '400°C', '673°C'], answer: 'B', explanation: 'Charles\'s law: T₂ = T₁×V₂/V₁ = 300×0.04/0.03 = 400 K = 127°C.' },"
);
fix(
  "options: ['315 s', '525 s', '630 s', '1050 s'], answer: 'C' },",
  "options: ['315 s', '525 s', '630 s', '1050 s'], answer: 'C', explanation: 'Q = mcΔT = 5×4200×60 = 1 260 000 J; t = Q/P = 1 260 000/2000 = 630 s.' },"
);
fix(
  "options: ['50 kPa', '100 kPa', '150 kPa', '200 kPa'], answer: 'B' },",
  "options: ['50 kPa', '100 kPa', '150 kPa', '200 kPa'], answer: 'B', explanation: 'P = ⅓ρ<c²> = ⅓×1.2×500² = ⅓×300 000 = 100 000 Pa = 100 kPa.' },"
);
fix(
  "options: ['122 J', '244 J', '366 J', '488 J'], answer: 'C' },",
  "options: ['122 J', '244 J', '366 J', '488 J'], answer: 'C', explanation: 'U = (3/2)nRT = 1.5×0.1×8.31×293 = 365 J ≈ 366 J.' },"
);
fix(
  "options: ['100 J', '200 J', '400 J', '600 J'], answer: 'C' },",
  "options: ['100 J', '200 J', '400 J', '600 J'], answer: 'C', explanation: 'W = PΔV = 200×10³×(3−1)×10⁻³ = 400 J.' },"
);
fix(
  "options: ['triples', 'increases by √3', 'increases by 9', 'stays the same'], answer: 'B' },",
  "options: ['triples', 'increases by √3', 'increases by 9', 'stays the same'], answer: 'B', explanation: 'v_rms ∝ √T; if T triples, v_rms increases by factor √3.' },"
);
fix(
  "options: ['2.01 × 10²³', '6.02 × 10²³', '1.81 × 10²⁴', '3.61 × 10²⁴'], answer: 'C' },",
  "options: ['2.01 × 10²³', '6.02 × 10²³', '1.81 × 10²⁴', '3.61 × 10²⁴'], answer: 'C', explanation: 'N = nN_A = 3×6.02×10²³ = 1.806×10²⁴ ≈ 1.81×10²⁴.' },"
);

// ── T9: Thermodynamics – Red ────────────────────────────────────────────────
fix(
  "options: ['100 J', '200 J', '300 J', '500 J'], answer: 'C' },",
  "options: ['100 J', '200 J', '300 J', '500 J'], answer: 'C', explanation: 'Isothermal: ΔU₁ = 0 (T constant); isovolumetric: W = 0, so ΔU₂ = Q = 300 J; total ΔU = 300 J.' },"
);
fix(
  "options: ['12.5 kJ', '16.6 kJ', '24.9 kJ', '33.2 kJ'], answer: 'C' },",
  "options: ['12.5 kJ', '16.6 kJ', '24.9 kJ', '33.2 kJ'], answer: 'C', explanation: 'For monatomic gas: U = (3/2)nRT; n_total = 5; U = 1.5×5×8.31×400 = 24 930 J ≈ 24.9 kJ.' },"
);
fix(
  "options: ['P/4', 'P/2', 'P', '2P'], answer: 'B' },",
  "options: ['P/4', 'P/2', 'P', '2P'], answer: 'B', explanation: 'Gas expands to fill double the volume at constant T (free expansion): P₂ = P×(V/2)/V = P/2.' },"
);
fix(
  "options: ['200 kPa', '252 kPa', '317 kPa', '400 kPa'], answer: 'C' },",
  "options: ['200 kPa', '252 kPa', '317 kPa', '400 kPa'], answer: 'C', explanation: 'Adiabatic: P₂ = P₁(V₁/V₂)^γ = 100×2^(5/3) = 100×3.17 = 317 kPa.' },"
);

// ── T10: Space – Amber ──────────────────────────────────────────────────────
fix(
  "options: ['290 nm', '483 nm', '580 nm', '967 nm'], answer: 'B' },",
  "options: ['290 nm', '483 nm', '580 nm', '967 nm'], answer: 'B', explanation: 'Wien\'s law: λ_peak = W/T = 2.9×10⁻³/6000 = 4.83×10⁻⁷ m = 483 nm.' },"
);
fix(
  "options: ['1', '2', '4', '16'], answer: 'B' },",
  "options: ['1', '2', '4', '16'], answer: 'B', explanation: 'L ∝ R²T⁴; 4L☉ = (R/R☉)²×(T/T☉)⁴×L☉ = (R/R☉)²×1×L☉; R/R☉ = √4 = 2.' },"
);
fix(
  "options: ['107 Mpc', '214 Mpc', '321 Mpc', '1050 Mpc'], answer: 'B' },",
  "options: ['107 Mpc', '214 Mpc', '321 Mpc', '1050 Mpc'], answer: 'B', explanation: 'd = v/H₀ = 15 000 km/s ÷ 70 km/s/Mpc = 214 Mpc.' },"
);
fix(
  "options: ['4140 K', '6200 K', '8286 K', '10150 K'], answer: 'C' },",
  "options: ['4140 K', '6200 K', '8286 K', '10150 K'], answer: 'C', explanation: 'T = W/λ_peak = 2.9×10⁻³/(350×10⁻⁹) = 8286 K.' },"
);
fix(
  "options: ['1.5 × 10⁶ m/s', '1.5 × 10⁷ m/s', '6 × 10⁶ m/s', '3 × 10⁷ m/s'], answer: 'B' },",
  "options: ['1.5 × 10⁶ m/s', '1.5 × 10⁷ m/s', '6 × 10⁶ m/s', '3 × 10⁷ m/s'], answer: 'B', explanation: 'v = zc = 0.05×3×10⁸ = 1.5×10⁷ m/s.' },"
);
fix(
  "options: ['40 L☉', '160 L☉', '640 L☉', '1600 L☉'], answer: 'D' },",
  "options: ['40 L☉', '160 L☉', '640 L☉', '1600 L☉'], answer: 'D', explanation: 'L/L☉ = (R/R☉)²×(T/T☉)⁴ = 10²×2⁴ = 100×16 = 1600 L☉.' },"
);
fix(
  "options: ['7 billion years', '10 billion years', '14 billion years', '20 billion years'], answer: 'C' },",
  "options: ['7 billion years', '10 billion years', '14 billion years', '20 billion years'], answer: 'C', explanation: 'Age ≈ 1/H₀ = 1/(70 km/s/Mpc) = 1/(2.27×10⁻¹⁸ s⁻¹) ≈ 4.4×10¹⁷ s ≈ 14 billion years.' },"
);
fix(
  "options: ['2.3 × 10⁹ m', '4.6 × 10⁹ m', '2.3 × 10¹⁰ m', '4.6 × 10¹⁰ m'], answer: 'A' },",
  "options: ['2.3 × 10⁹ m', '4.6 × 10⁹ m', '2.3 × 10¹⁰ m', '4.6 × 10¹⁰ m'], answer: 'A', explanation: 'L = 4πσR²T⁴; R = √(L/(4πσT⁴)) = √(3.8×10²⁸/(4π×5.67×10⁻⁸×10¹⁶)) = 2.3×10⁹ m.' },"
);
fix(
  "options: ['0.011', '0.021', '0.031', '0.041'], answer: 'B' },",
  "options: ['0.011', '0.021', '0.031', '0.041'], answer: 'B', explanation: 'z = Δλ/λ = (670−656)/656 = 14/656 = 0.021.' },"
);
fix(
  "options: ['1/4', '1/2', '2', '4'], answer: 'D' },",
  "options: ['1/4', '1/2', '2', '4'], answer: 'D', explanation: 'Wien\'s law: λ ∝ 1/T; λ_A/λ_B = T_B/T_A = 12000/3000 = 4.' },"
);
fix(
  "options: ['0.023', '0.047', '0.093', '0.14'], answer: 'B' },",
  "options: ['0.023', '0.047', '0.093', '0.14'], answer: 'B', explanation: 'v = H₀d = 70×200 = 14 000 km/s; z = v/c = 1.4×10⁷/3×10⁸ = 0.047.' },"
);
fix(
  "options: ['1.5 K', '2.9 K', '5.8 K', '29 K'], answer: 'B' },",
  "options: ['1.5 K', '2.9 K', '5.8 K', '29 K'], answer: 'B', explanation: 'T = W/λ_peak = 2.9×10⁻³/10⁻³ = 2.9 K.' },"
);
fix(
  "options: ['25 R☉', '50 R☉', '100 R☉', '200 R☉'], answer: 'C' },",
  "options: ['25 R☉', '50 R☉', '100 R☉', '200 R☉'], answer: 'C', explanation: 'L/L☉ = (R/R☉)²×(T/T☉)⁴; (R/R☉)² = 1000/(3500/5800)⁴ ≈ 7500; R/R☉ ≈ 87 ≈ 100 R☉.' },"
);
fix(
  "options: ['1:2', '1:4', '1:8', '1:16'], answer: 'B' },",
  "options: ['1:2', '1:4', '1:8', '1:16'], answer: 'B', explanation: 'By Hubble\'s law v ∝ d and z = v/c, so z ∝ d; distance ratio = z₁/z₂ = 0.01/0.04 = 1:4.' },"
);
fix(
  "options: ['5 pc', '10 pc', '20 pc', '50 pc'], answer: 'C' },",
  "options: ['5 pc', '10 pc', '20 pc', '50 pc'], answer: 'C', explanation: 'd = 1/p (arcsec) = 1/0.05 = 20 pc.' },"
);

// ── T10: Space – Red ────────────────────────────────────────────────────────
fix(
  "options: ['2.7 R☉', '5.4 R☉', '10.8 R☉', '21.6 R☉'], answer: 'B' },",
  "options: ['2.7 R☉', '5.4 R☉', '10.8 R☉', '21.6 R☉'], answer: 'B', explanation: 'L/L☉ = (R/R☉)²(T/T☉)⁴; (R/R☉)² = 10000/(25000/5800)⁴ ≈ 10000/344 ≈ 29; R/R☉ ≈ 5.4.' },"
);
fix(
  "options: ['2.0 × 10¹¹ m/s²', '2.0 × 10¹² m/s²', '2.0 × 10¹³ m/s²', '2.0 × 10¹⁴ m/s²'], answer: 'B' },",
  "options: ['2.0 × 10¹¹ m/s²', '2.0 × 10¹² m/s²', '2.0 × 10¹³ m/s²', '2.0 × 10¹⁴ m/s²'], answer: 'B', explanation: 'M = 1.5×2.0×10³⁰ = 3.0×10³⁰ kg; g = GM/r² = 6.67×10⁻¹¹×3.0×10³⁰/(10⁴)² = 2.0×10¹² m/s².' },"
);
fix(
  "options: ['3 km', '15 km', '30 km', '150 km'], answer: 'C' },",
  "options: ['3 km', '15 km', '30 km', '150 km'], answer: 'C', explanation: 'r_s = 2GM/c² = 2×6.67×10⁻¹¹×10×2.0×10³⁰/(3×10⁸)² = 2.964×10⁴ m ≈ 30 km.' },"
);

// ── T11: Nuclear Radiation – Amber ──────────────────────────────────────────
fix(
  "options: ['1/4', '1/8', '1/16', '1/32'], answer: 'C' },",
  "options: ['1/4', '1/8', '1/16', '1/32'], answer: 'C', explanation: '24 h = 4 half-lives; N/N₀ = (½)⁴ = 1/16.' },"
);
fix(
  "options: ['25 Bq', '50 Bq', '100 Bq', '200 Bq'], answer: 'C' },",
  "options: ['25 Bq', '50 Bq', '100 Bq', '200 Bq'], answer: 'C', explanation: '12 days = 3 half-lives; A = 800×(½)³ = 800/8 = 100 Bq.' },"
);
fix(
  "options: ['7.08 MeV', '14.2 MeV', '28.3 MeV', '56.7 MeV'], answer: 'C' },",
  "options: ['7.08 MeV', '14.2 MeV', '28.3 MeV', '56.7 MeV'], answer: 'C', explanation: 'BE = Δm × 931.5 MeV/u = 0.0304 × 931.5 = 28.3 MeV.' },"
);
fix(
  "options: ['0.0116 s⁻¹', '0.00116 s⁻¹', '0.0693 s⁻¹', '6.93 s⁻¹'], answer: 'B' },",
  "options: ['0.0116 s⁻¹', '0.00116 s⁻¹', '0.0693 s⁻¹', '6.93 s⁻¹'], answer: 'B', explanation: 'λ = ln2/t½ = 0.693/(10×60) = 0.693/600 = 1.155×10⁻³ s⁻¹ ≈ 0.00116 s⁻¹.' },"
);
fix(
  "options: ['90 MeV', '120 MeV', '210 MeV', '2000 MeV'], answer: 'C' },",
  "options: ['90 MeV', '120 MeV', '210 MeV', '2000 MeV'], answer: 'C', explanation: 'ΔBE/nucleon = 8.5−7.6 = 0.9 MeV; total energy = 0.9×236 ≈ 212 MeV ≈ 210 MeV.' },"
);
fix(
  "options: ['1.49 × 10⁻¹⁰ J', '4.97 × 10⁻¹⁰ J', '1.49 × 10⁻⁹ J', '4.97 × 10⁻⁹ J'], answer: 'A' },",
  "options: ['1.49 × 10⁻¹⁰ J', '4.97 × 10⁻¹⁰ J', '1.49 × 10⁻⁹ J', '4.97 × 10⁻⁹ J'], answer: 'A', explanation: 'E = mc² = 1.66×10⁻²⁷×(3×10⁸)² = 1.66×10⁻²⁷×9×10¹⁶ = 1.49×10⁻¹⁰ J.' },"
);
fix(
  "options: ['2 × 10⁴ Bq', '5 × 10⁴ Bq', '2 × 10⁵ Bq', '5 × 10⁵ Bq'], answer: 'A' },",
  "options: ['2 × 10⁴ Bq', '5 × 10⁴ Bq', '2 × 10⁵ Bq', '5 × 10⁵ Bq'], answer: 'A', explanation: 'A = λN = 0.02×10⁶ = 2×10⁴ Bq.' },"
);
fix(
  "options: ['2865 years', '5730 years', '11460 years', '17190 years'], answer: 'C' },",
  "options: ['2865 years', '5730 years', '11460 years', '17190 years'], answer: 'C', explanation: '25% remaining = 2 half-lives; age = 2×5730 = 11 460 years.' },"
);
fix(
  "options: ['8.8 MeV', '13.2 MeV', '17.6 MeV', '26.4 MeV'], answer: 'C' },",
  "options: ['8.8 MeV', '13.2 MeV', '17.6 MeV', '26.4 MeV'], answer: 'C', explanation: 'E = Δm × 931.5 = 0.0189 × 931.5 = 17.6 MeV.' },"
);
fix(
  "options: ['2 min', '3 min', '4.5 min', '6 min'], answer: 'B' },",
  "options: ['2 min', '3 min', '4.5 min', '6 min'], answer: 'B', explanation: '1200 → 600 → 300 → 150 Bq: 3 half-lives in 9 min; t½ = 9/3 = 3 min.' },"
);
fix(
  "options: ['7.2 MeV', '8.0 MeV', '8.8 MeV', '9.6 MeV'], answer: 'C' },",
  "options: ['7.2 MeV', '8.0 MeV', '8.8 MeV', '9.6 MeV'], answer: 'C', explanation: 'BE per nucleon = total BE / A = 492/56 = 8.79 ≈ 8.8 MeV.' },"
);
fix(
  "options: ['2.9 × 10²⁰ Hz', '4.8 × 10¹⁹ Hz', '2.9 × 10¹⁹ Hz', '4.8 × 10¹⁸ Hz'], answer: 'A' },",
  "options: ['2.9 × 10²⁰ Hz', '4.8 × 10¹⁹ Hz', '2.9 × 10¹⁹ Hz', '4.8 × 10¹⁸ Hz'], answer: 'A', explanation: 'E = hf; f = E/h = (1.2×10⁶×1.6×10⁻¹⁹)/6.63×10⁻³⁴ = 1.92×10⁻¹³/6.63×10⁻³⁴ = 2.9×10²⁰ Hz.' },"
);
fix(
  "options: ['3 × 10⁸ J', '9 × 10¹⁶ J', '9 × 10⁸ J', '3 × 10¹⁶ J'], answer: 'B' },",
  "options: ['3 × 10⁸ J', '9 × 10¹⁶ J', '9 × 10⁸ J', '3 × 10¹⁶ J'], answer: 'B', explanation: 'E = mc² = 1×(3×10⁸)² = 9×10¹⁶ J.' },"
);
fix(
  "options: ['5 × 10⁷', '2.5 × 10⁷', '1.25 × 10⁷', '6.25 × 10⁶'], answer: 'C' },",
  "options: ['5 × 10⁷', '2.5 × 10⁷', '1.25 × 10⁷', '6.25 × 10⁶'], answer: 'C', explanation: '11.4 days = 3 half-lives; N = 10⁸×(½)³ = 10⁸/8 = 1.25×10⁷.' },"
);

// ── T11: Nuclear Radiation – Red ────────────────────────────────────────────
fix(
  "options: ['4 × 10⁻⁹ W', '4 × 10⁻⁸ W', '4 × 10⁻⁷ W', '4 × 10⁻⁶ W'], answer: 'A' },",
  "options: ['4 × 10⁻⁹ W', '4 × 10⁻⁸ W', '4 × 10⁻⁷ W', '4 × 10⁻⁶ W'], answer: 'A', explanation: 'P = A × E_decay = 5000 × 5×10⁶ × 1.6×10⁻¹⁹ = 5000 × 8×10⁻¹³ = 4×10⁻⁹ W.' },"
);
fix(
  "options: ['0.054 MeV', '0.086 MeV', '0.108 MeV', '0.172 MeV'], answer: 'B' },",
  "options: ['0.054 MeV', '0.086 MeV', '0.108 MeV', '0.172 MeV'], answer: 'B', explanation: 'Momentum conservation: KE_Rn/KE_α = m_α/m_Rn = 4/222; KE_Rn = 4.78×4/222 = 0.086 MeV.' },"
);
fix(
  "options: ['5.1 MeV', '7.1 MeV', '8.5 MeV', '28.3 MeV'], answer: 'B' },",
  "options: ['5.1 MeV', '7.1 MeV', '8.5 MeV', '28.3 MeV'], answer: 'B', explanation: 'Δm = 2×1.00783+2×1.00867−4.00260 = 0.03040 u; BE = 0.03040×931.5 = 28.3 MeV; /4 nucleons = 7.1 MeV.' },"
);
fix(
  "options: ['2.3 t½', '3.3 t½', '4.3 t½', '5.3 t½'], answer: 'B' },",
  "options: ['2.3 t½', '3.3 t½', '4.3 t½', '5.3 t½'], answer: 'B', explanation: 'A = A₀(½)^(t/t½); 0.1 = (½)^(t/t½); t/t½ = log(0.1)/log(0.5) = 1/0.301 = 3.32 ≈ 3.3 t½.' },"
);

fs.writeFileSync('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-edexcel.js', src);
console.log('\nDone: ' + count + ' fixed, ' + miss + ' missed.');
