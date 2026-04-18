const fs = require('fs');
const path = 'C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-aqa.js';
let content = fs.readFileSync(path, 'utf8');
let count = 0;

function fix(oldStr, newStr) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    count++;
  } else {
    console.log('MISS: ' + oldStr.substring(0, 90));
  }
}

// ── Quantum & Particle ────────────────────────────────────────────────────────

// Line 105: min photon energy for pair production
fix(
  "options: ['0.511 MeV','1.022 MeV','2.044 MeV','0.255 MeV'], answer: 1 },",
  "options: ['0.511 MeV','1.022 MeV','2.044 MeV','0.255 MeV'], answer: 1, explanation: 'Each particle (electron + positron) has rest mass energy = 0.511 MeV. Two particles are created, so minimum photon energy = 2 \u00D7 0.511 = 1.022 MeV.' },"
);

// Line 119: photon KE photoelectric effect
fix(
  "options: ['3.2 eV','6.2 eV','3.0 eV','0.2 eV'], answer: 0 },",
  "options: ['3.2 eV','6.2 eV','3.0 eV','0.2 eV'], answer: 0, explanation: 'E_photon = hc/\u03BB = (6.63\u00D710\u207B\u00B3\u2074 \u00D7 3.0\u00D710\u2078) / (200\u00D710\u207B\u2079) = 9.95\u00D710\u207B\u00B9\u2079 J \u00F7 1.6\u00D710\u207B\u00B9\u2079 = 6.22 eV. KE_max = E \u2212 \u03D5 = 6.22 \u2212 3.0 = 3.2 eV.' },"
);

// Line 121: de Broglie wavelength
fix(
  "options: ['1.7 \u00D7 10\u207B\u00B9\u00B9 m','1.7 \u00D7 10\u207B\u00B9\u00B2 m','5.5 \u00D7 10\u207B\u00B9\u2070 m','3.4 \u00D7 10\u207B\u00B9\u00B9 m'], answer: 0 },",
  "options: ['1.7 \u00D7 10\u207B\u00B9\u00B9 m','1.7 \u00D7 10\u207B\u00B9\u00B2 m','5.5 \u00D7 10\u207B\u00B9\u2070 m','3.4 \u00D7 10\u207B\u00B9\u00B9 m'], answer: 0, explanation: 'KE = eV = 1.6\u00D710\u207B\u00B9\u2079 \u00D7 5000 = 8.0\u00D710\u207B\u00B9\u2076 J. p = \u221A(2m\u2091KE) = \u221A(2 \u00D7 9.11\u00D710\u207B\u00B3\u00B9 \u00D7 8\u00D710\u207B\u00B9\u2076) = 3.82\u00D710\u207B\u00B2\u00B3 kg m/s. \u03BB = h/p = 6.63\u00D710\u207B\u00B3\u2074 / 3.82\u00D710\u207B\u00B2\u00B3 = 1.7\u00D710\u207B\u00B9\u00B9 m.' },"
);

// Line 126: stopping potential → KE
fix(
  "options: ['1.2 J','1.2 eV','2.4 eV','0.6 eV'], answer: 1 },",
  "options: ['1.2 J','1.2 eV','2.4 eV','0.6 eV'], answer: 1, explanation: 'KE_max = eV_stop = 1.6\u00D710\u207B\u00B9\u2079 \u00D7 1.2 = 1.92\u00D710\u207B\u00B9\u2079 J = 1.2 eV. The stopping potential (in volts) numerically equals KE_max in eV.' },"
);

// Line 128: number of photon energies from 4 levels
fix(
  "options: ['3','4','6','10'], answer: 2 },",
  "options: ['3','4','6','10'], answer: 2, explanation: 'Each transition between a pair of energy levels produces one photon frequency. With 4 levels, the number of possible pairs = 4C2 = 4!/(2!\u00D72!) = 6 different photon energies.' },"
);

// ── Waves ─────────────────────────────────────────────────────────────────────

// Line 180: max order diffraction grating
fix(
  "options: ['2','3','4','5'], answer: 1 },",
  "options: ['2','3','4','5'], answer: 1, explanation: 'd = 1/500 mm = 2.0\u00D710\u207B\u2076 m. n_max = d/\u03BB = 2.0\u00D710\u207B\u2076 / 600\u00D710\u207B\u2079 = 3.33 \u2192 maximum whole-number order = 3.' },"
);

// Line 181: wavelength from Young's double slit
fix(
  "options: ['400 nm','500 nm','600 nm','700 nm'], answer: 2 },",
  "options: ['400 nm','500 nm','600 nm','700 nm'], answer: 2, explanation: '\u03BB = wx/D = (slit sep \u00D7 fringe spacing) / distance = (0.5\u00D710\u207B\u00B3 \u00D7 1.8\u00D710\u207B\u00B3) / 1.5 = 9\u00D710\u207B\u2077 / 1.5 = 6.0\u00D710\u207B\u2077 m = 600 nm.' },"
);

// Line 182: stationary wave wavelength (5 antinodes, L=1m)
fix(
  "options: ['0.2 m','0.4 m','0.5 m','1.0 m'], answer: 1 },",
  "options: ['0.2 m','0.4 m','0.5 m','1.0 m'], answer: 1, explanation: '5 antinodes = 5th harmonic. The string length L = n\u03BB/2, so \u03BB = 2L/n = 2\u00D71.0/5 = 0.4 m.' },"
);

// Line 185: slit spacing from grating (2nd order, 30°, 500 nm)
fix(
  "options: ['1.0 \u03BCm','2.0 \u03BCm','0.5 \u03BCm','4.0 \u03BCm'], answer: 1 },",
  "options: ['1.0 \u03BCm','2.0 \u03BCm','0.5 \u03BCm','4.0 \u03BCm'], answer: 1, explanation: 'd sin\u03B8 = n\u03BB; d = n\u03BB/sin\u03B8 = (2 \u00D7 500\u00D710\u207B\u2079) / sin30\u00B0 = 1.0\u00D710\u207B\u2076 / 0.5 = 2.0\u00D710\u207B\u2076 m = 2.0 \u03BCm.' },"
);

// ── Mechanics ─────────────────────────────────────────────────────────────────

// Line 220: distance fallen from rest (2 s)
fix(
  "options: ['9.81 m','19.6 m','4.9 m','39.2 m'], answer: 1 },",
  "options: ['9.81 m','19.6 m','4.9 m','39.2 m'], answer: 1, explanation: 's = \u00BDgt\u00B2 = \u00BD \u00D7 9.81 \u00D7 2\u00B2 = \u00BD \u00D7 9.81 \u00D7 4 = 19.6 m.' },"
);

// Line 221: F = ma (5 kg, 2 m/s²)
fix(
  "options: ['2.5 N','10 N','7 N','0.4 N'], answer: 1 },",
  "options: ['2.5 N','10 N','7 N','0.4 N'], answer: 1, explanation: 'F = ma = 5 \u00D7 2 = 10 N.' },"
);

// Line 222: resultant of 3N and 4N at right angles
fix(
  "options: ['7 N','1 N','5 N','12 N'], answer: 2 },",
  "options: ['7 N','1 N','5 N','12 N'], answer: 2, explanation: 'R = \u221A(3\u00B2 + 4\u00B2) = \u221A(9 + 16) = \u221A25 = 5 N (Pythagoras\u2019 theorem).' },"
);

// Line 223: collision momentum (2 kg at 3 m/s + stationary 1 kg)
fix(
  "options: ['1 m/s','2 m/s','3 m/s','1.5 m/s'], answer: 1 },",
  "options: ['1 m/s','2 m/s','3 m/s','1.5 m/s'], answer: 1, explanation: 'Conservation of momentum: m\u2081u\u2081 = (m\u2081+m\u2082)v; 2\u00D73 = (2+1)\u00D7v; v = 6/3 = 2 m/s.' },"
);

// Line 224: horizontal component of 50 N at 30°
fix(
  "options: ['50 cos 30\u00B0 = 43.3 N','50 sin 30\u00B0 = 25 N','50 tan 30\u00B0 = 28.9 N','50 N'], answer: 0 },",
  "options: ['50 cos 30\u00B0 = 43.3 N','50 sin 30\u00B0 = 25 N','50 tan 30\u00B0 = 28.9 N','50 N'], answer: 0, explanation: 'Horizontal component = F cos\u03B8 = 50 \u00D7 cos30\u00B0 = 50 \u00D7 0.866 = 43.3 N.' },"
);

// Line 232: braking force (1200 kg from 20 m/s in 4 s)
fix(
  "options: ['6000 N','4800 N','300 N','24000 N'], answer: 0 },",
  "options: ['6000 N','4800 N','300 N','24000 N'], answer: 0, explanation: 'a = \u0394v/\u0394t = (0\u221220)/4 = \u22125 m/s\u00B2. F = ma = 1200 \u00D7 5 = 6000 N (magnitude).' },"
);

// Line 235: reaction force at end nearest weight
fix(
  "options: ['175 N','125 N','150 N','200 N'], answer: 0 },",
  "options: ['175 N','125 N','150 N','200 N'], answer: 0, explanation: 'Taking moments about end B: R_A \u00D7 4 = 200 \u00D7 2 (beam weight at centre) + 100 \u00D7 3 (weight, 3 m from end B). R_A = (400+300)/4 = 175 N.' },"
);

// Line 241: Young's modulus wire
fix(
  "options: ['2.5 \u00D7 10\u00B9\u00B9 Pa','2.5 \u00D7 10\u2078 Pa','1.0 \u00D7 10\u00B9\u00B9 Pa','5.0 \u00D7 10\u00B9\u2070 Pa'], answer: 0 },",
  "options: ['2.5 \u00D7 10\u00B9\u00B9 Pa','2.5 \u00D7 10\u2078 Pa','1.0 \u00D7 10\u00B9\u00B9 Pa','5.0 \u00D7 10\u00B9\u2070 Pa'], answer: 0, explanation: 'E = FL/(A\u0394L) = (50 \u00D7 2.0) / (1.0\u00D710\u207B\u2076 \u00D7 0.4\u00D710\u207B\u00B3) = 100 / (4\u00D710\u207B\u00B9\u2070) = 2.5\u00D710\u00B9\u00B9 Pa.' },"
);

// Line 242: max height projectile (30°, 20 m/s)
fix(
  "options: ['5.1 m','10.2 m','20.4 m','2.5 m'], answer: 0 },",
  "options: ['5.1 m','10.2 m','20.4 m','2.5 m'], answer: 0, explanation: 'v_y = 20 sin30\u00B0 = 10 m/s. At max height v_y = 0: H = v_y\u00B2/(2g) = 100/(2\u00D79.81) = 5.1 m.' },"
);

// Line 245: crane power
fix(
  "options: ['9810 W','4905 W','98100 W','981 W'], answer: 0 },",
  "options: ['9810 W','4905 W','98100 W','981 W'], answer: 0, explanation: 'P = W/t = mgh/t = (500 \u00D7 9.81 \u00D7 20) / 10 = 98100 / 10 = 9810 W.' },"
);

// Line 249: elastic PE spring (k=200 N/m, x=0.05 m)
fix(
  "options: ['0.25 J','0.50 J','10 J','5 J'], answer: 0 },",
  "options: ['0.25 J','0.50 J','10 J','5 J'], answer: 0, explanation: 'E_p = \u00BDkx\u00B2 = \u00BD \u00D7 200 \u00D7 0.05\u00B2 = \u00BD \u00D7 200 \u00D7 0.0025 = 0.25 J.' },"
);

// ── Electricity ───────────────────────────────────────────────────────────────

// Line 280: terminal PD (6V, r=0.5Ω, I=2A)
fix(
  "options: ['5 V','6 V','7 V','1 V'], answer: 0 },",
  "options: ['5 V','6 V','7 V','1 V'], answer: 0, explanation: 'Terminal PD = EMF \u2212 Ir = 6 \u2212 (2 \u00D7 0.5) = 6 \u2212 1 = 5 V.' },"
);

// Line 281: two 10Ω in parallel
fix(
  "options: ['20 \u03A9','10 \u03A9','5 \u03A9','2.5 \u03A9'], answer: 2 },",
  "options: ['20 \u03A9','10 \u03A9','5 \u03A9','2.5 \u03A9'], answer: 2, explanation: '1/R = 1/10 + 1/10 = 2/10; R = 10/2 = 5 \u03A9.' },"
);

// Line 283: resistance from resistivity
fix(
  "options: ['0.034 \u03A9','0.34 \u03A9','3.4 \u03A9','34 \u03A9'], answer: 0 },",
  "options: ['0.034 \u03A9','0.34 \u03A9','3.4 \u03A9','34 \u03A9'], answer: 0, explanation: 'R = \u03C1L/A = (1.7\u00D710\u207B\u2078 \u00D7 2.0) / 1.0\u00D710\u207B\u2076 = 3.4\u00D710\u207B\u2078 / 10\u207B\u2076 = 0.034 \u03A9.' },"
);

// Line 288: PD in series circuit (12V, 3×4Ω)
fix(
  "options: ['12 V','4 V','3 V','6 V'], answer: 1 },",
  "options: ['12 V','4 V','3 V','6 V'], answer: 1, explanation: 'R_total = 3 \u00D7 4 = 12 \u03A9. I = V/R = 12/12 = 1 A. PD across each resistor = IR = 1 \u00D7 4 = 4 V.' },"
);

// Line 292: current from cell (1.5V EMF, r=0.3Ω, R=2.7Ω)
fix(
  "options: ['0.5 A','0.56 A','1.5 A','5 A'], answer: 0 },",
  "options: ['0.5 A','0.56 A','1.5 A','5 A'], answer: 0, explanation: 'I = EMF/(R+r) = 1.5/(2.7+0.3) = 1.5/3.0 = 0.5 A.' },"
);

// Line 294: power in resistor (100Ω, 2A)
fix(
  "options: ['200 W','400 W','50 W','800 W'], answer: 1 },",
  "options: ['200 W','400 W','50 W','800 W'], answer: 1, explanation: 'P = I\u00B2R = 2\u00B2 \u00D7 100 = 4 \u00D7 100 = 400 W.' },"
);

// Line 298: three cells in series (1.5V, r=0.5Ω each)
fix(
  "options: ['4.5 V, 1.5 \u03A9','1.5 V, 1.5 \u03A9','4.5 V, 0.5 \u03A9','1.5 V, 0.17 \u03A9'], answer: 0 },",
  "options: ['4.5 V, 1.5 \u03A9','1.5 V, 1.5 \u03A9','4.5 V, 0.5 \u03A9','1.5 V, 0.17 \u03A9'], answer: 0, explanation: 'In series: total EMF = 3 \u00D7 1.5 = 4.5 V; total internal resistance = 3 \u00D7 0.5 = 1.5 \u03A9.' },"
);

// Line 309: short circuit current (6V, r=2Ω)
fix(
  "options: ['0 A','3 A','6 A','Infinite'], answer: 1 },",
  "options: ['0 A','3 A','6 A','Infinite'], answer: 1, explanation: 'Short circuit: external resistance = 0. I = EMF/r = 6/2 = 3 A (limited only by internal resistance).' },"
);

// Line 311: potential divider with thermistor (5V supply)
fix(
  "options: ['2.0 V at 20\u00B0C, 3.85 V at 50\u00B0C','3.0 V at 20\u00B0C, 1.15 V at 50\u00B0C','2.0 V at 20\u00B0C, 1.15 V at 50\u00B0C','3.85 V at 20\u00B0C, 2.0 V at 50\u00B0C'], answer: 0 },",
  "options: ['2.0 V at 20\u00B0C, 3.85 V at 50\u00B0C','3.0 V at 20\u00B0C, 1.15 V at 50\u00B0C','2.0 V at 20\u00B0C, 1.15 V at 50\u00B0C','3.85 V at 20\u00B0C, 2.0 V at 50\u00B0C'], answer: 0, explanation: 'V = V_supply \u00D7 R_fixed/(R_fixed + R_thermistor). At 20\u00B0C: 5\u00D710/(10+15) = 2.0 V. At 50\u00B0C: 5\u00D710/(10+3) = 3.85 V.' },"
);

// ── Circular motion / Thermal / SHM ──────────────────────────────────────────

// Line 341: centripetal acceleration (r=50m, v=20 m/s)
fix(
  "options: ['8 m/s\u00B2','0.4 m/s\u00B2','400 m/s\u00B2','2.5 m/s\u00B2'], answer: 0 },",
  "options: ['8 m/s\u00B2','0.4 m/s\u00B2','400 m/s\u00B2','2.5 m/s\u00B2'], answer: 0, explanation: 'a = v\u00B2/r = 20\u00B2/50 = 400/50 = 8 m/s\u00B2.' },"
);

// Line 342: max velocity SHM (A=0.1m, ω=5 rad/s)
fix(
  "options: ['0.5 m/s','2.5 m/s','0.05 m/s','50 m/s'], answer: 0 },",
  "options: ['0.5 m/s','2.5 m/s','0.05 m/s','50 m/s'], answer: 0, explanation: 'v_max = A\u03C9 = 0.1 \u00D7 5 = 0.5 m/s (maximum speed occurs at equilibrium position).' },"
);

// Line 348: pressure at 600K (from 300K, 100 kPa)
fix(
  "options: ['50 kPa','100 kPa','200 kPa','400 kPa'], answer: 2 },",
  "options: ['50 kPa','100 kPa','200 kPa','400 kPa'], answer: 2, explanation: 'At constant volume (Gay-Lussac): p/T = const; p\u2082 = p\u2081 \u00D7 T\u2082/T\u2081 = 100 \u00D7 600/300 = 200 kPa.' },"
);

// Line 351: energy to heat 2 kg water
fix(
  "options: ['672,000 J','336,000 J','840,000 J','168,000 J'], answer: 0 },",
  "options: ['672,000 J','336,000 J','840,000 J','168,000 J'], answer: 0, explanation: 'Q = mc\u0394T = 2 \u00D7 4200 \u00D7 (100\u221220) = 2 \u00D7 4200 \u00D7 80 = 672,000 J.' },"
);

// Line 355: period of mass-spring (m=200g, k=50 N/m)
fix(
  "options: ['0.40 s','0.63 s','1.26 s','0.20 s'], answer: 0 },",
  "options: ['0.40 s','0.63 s','1.26 s','0.20 s'], answer: 0, explanation: 'T = 2\u03C0\u221A(m/k) = 2\u03C0\u221A(0.200/50) = 2\u03C0\u221A(0.004) = 2\u03C0 \u00D7 0.0632 = 0.40 s.' },"
);

// Line 359: centripetal acceleration with ω (r=0.5m, ω=4 rad/s)
fix(
  "options: ['2 m/s\u00B2','4 m/s\u00B2','8 m/s\u00B2','16 m/s\u00B2'], answer: 2 },",
  "options: ['2 m/s\u00B2','4 m/s\u00B2','8 m/s\u00B2','16 m/s\u00B2'], answer: 2, explanation: 'a = \u03C9\u00B2r = 4\u00B2 \u00D7 0.5 = 16 \u00D7 0.5 = 8 m/s\u00B2.' },"
);

// Line 363: conical pendulum period
fix(
  "options: ['1.66 s','1.86 s','1.47 s','2.00 s'], answer: 0 },",
  "options: ['1.66 s','1.86 s','1.47 s','2.00 s'], answer: 0, explanation: 'T = 2\u03C0\u221A(L cos\u03B8/g) = 2\u03C0\u221A(0.8 \u00D7 cos30\u00B0 / 9.81) = 2\u03C0\u221A(0.8 \u00D7 0.866/9.81) = 2\u03C0\u221A(0.0707) = 2\u03C0 \u00D7 0.266 = 1.67 \u2248 1.66 s.' },"
);

// Line 365: isothermal compression
fix(
  "options: ['100 kPa','200 kPa','400 kPa','800 kPa'], answer: 2 },",
  "options: ['100 kPa','200 kPa','400 kPa','800 kPa'], answer: 2, explanation: 'Isothermal: p\u2081V\u2081 = p\u2082V\u2082; p\u2082 = p\u2081V\u2081/V\u2082 = 200 \u00D7 0.02/0.01 = 400 kPa.' },"
);

// Line 366: rms speed at 1200K (from 517 m/s at 300K)
fix(
  "options: ['517 m/s','1034 m/s','2068 m/s','734 m/s'], answer: 1 },",
  "options: ['517 m/s','1034 m/s','2068 m/s','734 m/s'], answer: 1, explanation: 'v_rms \u221D \u221AT; v\u2082/v\u2081 = \u221A(T\u2082/T\u2081) = \u221A(1200/300) = \u221A4 = 2. v\u2082 = 2 \u00D7 517 = 1034 m/s.' },"
);

// Line 369: max speed at top of hill
fix(
  "options: ['v = \u221A(gr) = 14 m/s','v = \u221A(2gr) = 20 m/s','v = gr = 196 m/s','v = \u221A(g/r) = 0.7 m/s'], answer: 0 },",
  "options: ['v = \u221A(gr) = 14 m/s','v = \u221A(2gr) = 20 m/s','v = gr = 196 m/s','v = \u221A(g/r) = 0.7 m/s'], answer: 0, explanation: 'At the top: mg = mv\u00B2/r (normal force \u2192 0 at lift-off). v_max = \u221A(gr) = \u221A(9.81 \u00D7 20) = \u221A196 = 14 m/s.' },"
);

// Line 372: amplitude doubled → max velocity doubles
fix(
  "options: ['It doubles','It quadruples','It stays the same','It halves'], answer: 0 },",
  "options: ['It doubles','It quadruples','It stays the same','It halves'], answer: 0, explanation: 'v_max = A\u03C9. If A doubles, v_max doubles. (Total energy E = \u00BDkA\u00B2 quadruples, but v_max = A\u03C9, not \u221AE.)' },"
);

// ── Fields / Capacitors / Nuclear ─────────────────────────────────────────────

// Line 404: two capacitors in parallel
fix(
  "options: ['2.4 \u03BCF','10 \u03BCF','24 \u03BCF','1 \u03BCF'], answer: 1 },",
  "options: ['2.4 \u03BCF','10 \u03BCF','24 \u03BCF','1 \u03BCF'], answer: 1, explanation: 'In parallel: C_total = C\u2081 + C\u2082 = 4 + 6 = 10 \u03BCF.' },"
);

// Line 405: two capacitors in series
fix(
  "options: ['10 \u03BCF','2.4 \u03BCF','24 \u03BCF','0.42 \u03BCF'], answer: 1 },",
  "options: ['10 \u03BCF','2.4 \u03BCF','24 \u03BCF','0.42 \u03BCF'], answer: 1, explanation: 'In series: 1/C = 1/4 + 1/6 = 3/12 + 2/12 = 5/12; C = 12/5 = 2.4 \u03BCF.' },"
);

// Line 412: time constant (R=100kΩ, C=100μF)
fix(
  "options: ['10 s','0.1 s','100 s','1 s'], answer: 0 },",
  "options: ['10 s','0.1 s','100 s','1 s'], answer: 0, explanation: '\u03C4 = RC = 100\u00D710\u00B3 \u00D7 100\u00D710\u207B\u2076 = 10 s.' },"
);

// Line 416: magnetic force on electron
fix(
  "options: ['1.6 \u00D7 10\u207B\u00B9\u00B3 N','3.2 \u00D7 10\u207B\u00B9\u00B3 N','1.0 \u00D7 10\u207B\u00B9\u00B3 N','0.8 \u00D7 10\u207B\u00B9\u00B3 N'], answer: 0 },",
  "options: ['1.6 \u00D7 10\u207B\u00B9\u00B3 N','3.2 \u00D7 10\u207B\u00B9\u00B3 N','1.0 \u00D7 10\u207B\u00B9\u00B3 N','0.8 \u00D7 10\u207B\u00B9\u00B3 N'], answer: 0, explanation: 'F = Bqv = 0.5 \u00D7 1.6\u00D710\u207B\u00B9\u2079 \u00D7 2\u00D710\u2076 = 1.6\u00D710\u207B\u00B9\u00B3 N.' },"
);

// Line 424: g at satellite (radius 2R)
fix(
  "options: ['4.9 m/s\u00B2','2.45 m/s\u00B2','9.81 m/s\u00B2','1.23 m/s\u00B2'], answer: 1 },",
  "options: ['4.9 m/s\u00B2','2.45 m/s\u00B2','9.81 m/s\u00B2','1.23 m/s\u00B2'], answer: 1, explanation: 'g \u221D 1/r\u00B2. At r = 2R: g = g_surface \u00D7 (R/2R)\u00B2 = 9.81 \u00D7 \u00BC = 2.45 m/s\u00B2.' },"
);

// Line 425: capacitor discharge voltage (C=100μF, R=50kΩ, t=5s)
fix(
  "options: ['4.4 V','7.2 V','8.8 V','3.6 V'], answer: 0 },",
  "options: ['4.4 V','7.2 V','8.8 V','3.6 V'], answer: 0, explanation: 'V = V\u2080e^(\u2212t/RC) = 12 \u00D7 e^(\u22125/(50000\u00D7100\u00D710\u207B\u2076)) = 12 \u00D7 e^(\u22121) = 12/e = 12 \u00D7 0.368 = 4.4 V.' },"
);

// Line 427: transformer secondary voltage
fix(
  "options: ['46 V','1150 V','230 V','460 V'], answer: 1 },",
  "options: ['46 V','1150 V','230 V','460 V'], answer: 1, explanation: 'V_s/V_p = N_s/N_p; V_s = 230 \u00D7 1000/200 = 230 \u00D7 5 = 1150 V.' },"
);

// Line 428: Coulomb force (+2μC and -3μC, 0.1m apart)
fix(
  "options: ['5.4 N (attractive)','0.54 N (attractive)','5.4 N (repulsive)','54 N (attractive)'], answer: 0 },",
  "options: ['5.4 N (attractive)','0.54 N (attractive)','5.4 N (repulsive)','54 N (attractive)'], answer: 0, explanation: 'F = kq\u2081q\u2082/r\u00B2 = (8.99\u00D710\u2079 \u00D7 2\u00D710\u207B\u2076 \u00D7 3\u00D710\u207B\u2076) / 0.1\u00B2 = (8.99\u00D710\u2079 \u00D7 6\u00D710\u207B\u00B9\u00B2) / 0.01 = 5.4 N. Attractive because charges are opposite.' },"
);

// Line 429: capacitance from energy and voltage
fix(
  "options: ['100 \u03BCF','50 \u03BCF','10 \u03BCF','1 \u03BCF'], answer: 0 },",
  "options: ['100 \u03BCF','50 \u03BCF','10 \u03BCF','1 \u03BCF'], answer: 0, explanation: 'E = \u00BDCV\u00B2; C = 2E/V\u00B2 = (2 \u00D7 0.5) / 100\u00B2 = 1/10000 = 10\u207B\u2074 F = 100 \u03BCF.' },"
);

// Line 432: induced EMF (N=500, A=0.01m², B: 0.2→0 in 0.05s)
fix(
  "options: ['20 V','10 V','100 V','2 V'], answer: 0 },",
  "options: ['20 V','10 V','100 V','2 V'], answer: 0, explanation: 'EMF = N\u0394\u03A6/\u0394t = N \u00D7 A \u00D7 \u0394B/\u0394t = 500 \u00D7 0.01 \u00D7 (0.2/0.05) = 500 \u00D7 0.01 \u00D7 4 = 20 V.' },"
);

// Line 473: energy from mass defect (0.03u)
fix(
  "options: ['27.9 MeV','93.15 MeV','2.79 MeV','279 MeV'], answer: 0 },",
  "options: ['27.9 MeV','93.15 MeV','2.79 MeV','279 MeV'], answer: 0, explanation: 'E = \u0394m \u00D7 931.5 MeV/u = 0.03 \u00D7 931.5 = 27.9 MeV.' },"
);

// Line 476: half-life from decay constant (λ=0.01 s⁻¹)
fix(
  "options: ['100 s','69.3 s','0.693 s','6.93 s'], answer: 1 },",
  "options: ['100 s','69.3 s','0.693 s','6.93 s'], answer: 1, explanation: 't\u00BD = ln2/\u03BB = 0.693/0.01 = 69.3 s.' },"
);

// Line 485: initial activity
fix(
  "options: ['1.0 \u00D7 10\u00B9\u2078 Bq','2.5 \u00D7 10\u00B9\u2077 Bq','1.0 \u00D7 10\u00B2\u2070 Bq','5.0 \u00D7 10\u00B9\u2077 Bq'], answer: 0 },",
  "options: ['1.0 \u00D7 10\u00B9\u2078 Bq','2.5 \u00D7 10\u00B9\u2077 Bq','1.0 \u00D7 10\u00B2\u2070 Bq','5.0 \u00D7 10\u00B9\u2077 Bq'], answer: 0, explanation: 'A = \u03BBN = 2.0\u00D710\u207B\u00B3 \u00D7 5.0\u00D710\u00B2\u2070 = 1.0\u00D710\u00B9\u2078 Bq.' },"
);

// Line 486: binding energy of helium-4
fix(
  "options: ['28.3 MeV','7.07 MeV','0.0305 MeV','56.6 MeV'], answer: 0 },",
  "options: ['28.3 MeV','7.07 MeV','0.0305 MeV','56.6 MeV'], answer: 0, explanation: 'Total nucleon mass: 2(1.0073) + 2(1.0087) = 4.0320 u. Mass defect = 4.0320 \u2212 4.0015 = 0.0305 u. BE = 0.0305 \u00D7 931.5 = 28.4 MeV \u2248 28.3 MeV.' },"
);

// Line 488: half-life from activity change (1200→150 Bq in 30 min)
fix(
  "options: ['5 minutes','10 minutes','15 minutes','7.5 minutes'], answer: 1 },",
  "options: ['5 minutes','10 minutes','15 minutes','7.5 minutes'], answer: 1, explanation: '1200 \u2192 600 \u2192 300 \u2192 150: three half-lives in 30 minutes. t\u00BD = 30/3 = 10 minutes.' },"
);

// Line 490: mass number from radius (r = 3.6×10⁻¹⁵ m, r₀ = 1.2×10⁻¹⁵ m)
fix(
  "options: ['3','9','27','81'], answer: 2 },",
  "options: ['3','9','27','81'], answer: 2, explanation: 'r = r\u2080A^(1/3); A = (r/r\u2080)\u00B3 = (3.6/1.2)\u00B3 = 3\u00B3 = 27.' },"
);

// Line 493: E = mc² (1 kg of matter)
fix(
  "options: ['9 \u00D7 10\u00B9\u2076 J','3 \u00D7 10\u2078 J','9 \u00D7 10\u2078 J','3 \u00D7 10\u00B9\u2076 J'], answer: 0 },",
  "options: ['9 \u00D7 10\u00B9\u2076 J','3 \u00D7 10\u2078 J','9 \u00D7 10\u2078 J','3 \u00D7 10\u00B9\u2076 J'], answer: 0, explanation: 'E = mc\u00B2 = 1 \u00D7 (3.0\u00D710\u2078)\u00B2 = 1 \u00D7 9\u00D710\u00B9\u2076 = 9\u00D710\u00B9\u2076 J.' },"
);

fs.writeFileSync(path, content, 'utf8');
console.log('\nDone: ' + count + ' replacements in physics-aqa.js');
