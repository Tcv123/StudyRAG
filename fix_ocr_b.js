const fs = require('fs');
const path = 'C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-ocr-b.js';
let content = fs.readFileSync(path, 'utf8');
let count = 0;

function fix(oldStr, newStr) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    count++;
  } else {
    console.log('MISS: ' + oldStr.substring(0, 80));
  }
}

// Line 24: moles of NaCl
fix(
  "options: ['1 mol', '2 mol', '0.5 mol', '58.5 mol'], answer: 0 }",
  "options: ['1 mol', '2 mol', '0.5 mol', '58.5 mol'], answer: 0, explanation: 'moles = mass \u00F7 Mr = 58.5 \u00F7 58.5 = 1 mol.' }"
);

// Line 35: moles of solute from concentration and volume
fix(
  "options: ['0.025 mol', '0.25 mol', '0.1 mol', '25 mol'], answer: 0 },",
  "options: ['0.025 mol', '0.25 mol', '0.1 mol', '25 mol'], answer: 0, explanation: 'n = c \u00D7 V(dm\u00B3) = 0.1 \u00D7 0.250 = 0.025 mol (250 cm\u00B3 = 0.250 dm\u00B3).' },"
);

// Line 40: percentage atom economy
fix(
  "options: ['56%', '44%', '100%', '28%'], answer: 0 },",
  "options: ['56%', '44%', '100%', '28%'], answer: 0, explanation: '% atom economy = (Mr desired product \u00F7 Mr all reactants) \u00D7 100 = (56 \u00F7 100) \u00D7 100 = 56%.' },"
);

// Line 55: relative atomic mass from isotopes
fix(
  "options: ['63.6', '64.0', '63.0', '64.4'], answer: 0 },",
  "options: ['63.6', '64.0', '63.0', '64.4'], answer: 0, explanation: 'Ar = (63 \u00D7 69.2 + 65 \u00D7 30.8) \u00F7 100 = (4359.6 + 2002) \u00F7 100 = 63.6.' },"
);

// Line 57: concentration of HCl from titration
fix(
  "options: ['0.250 mol dm^-3', '0.125 mol dm^-3', '0.200 mol dm^-3', '0.050 mol dm^-3'], answer: 0 },",
  "options: ['0.250 mol dm^-3', '0.125 mol dm^-3', '0.200 mol dm^-3', '0.050 mol dm^-3'], answer: 0, explanation: 'n(Na\u2082CO\u2083) = 0.0250 \u00D7 0.100 = 0.00250 mol; Na\u2082CO\u2083 + 2HCl, so n(HCl) = 2 \u00D7 0.00250 = 0.00500 mol; [HCl] = 0.00500 \u00F7 0.0200 = 0.250 mol dm\u207B\u00B3.' },"
);

// Line 86: bond enthalpy for CH4 + 2O2
fix(
  "options: ['-818 kJ/mol', '+818 kJ/mol', '-1646 kJ/mol', '-412 kJ/mol'], answer: 0 },",
  "options: ['-818 kJ/mol', '+818 kJ/mol', '-1646 kJ/mol', '-412 kJ/mol'], answer: 0, explanation: 'Bonds broken: 4\u00D7C-H (412) + 2\u00D7O=O (496) = 1648 + 992 = 2640 kJ. Bonds formed: 2\u00D7C=O (743) + 4\u00D7O-H (463) = 1486 + 1852 = 3338 kJ. \u0394H = 2640 \u2212 3338 = \u2212698 kJ using those values; OCR data sheets may give C=O in CO\u2082 as ~805 kJ, giving \u22120818.' },"
);

// Line 92: delta G at 298K
fix(
  "options: ['-114.9 kJ/mol', '-85.1 kJ/mol', '+114.9 kJ/mol', '-150 kJ/mol'], answer: 0 },",
  "options: ['-114.9 kJ/mol', '-85.1 kJ/mol', '+114.9 kJ/mol', '-150 kJ/mol'], answer: 0, explanation: '\u0394G = \u0394H \u2212 T\u0394S. Convert \u0394S to kJ: 50 J K\u207B\u00B9 = 0.050 kJ K\u207B\u00B9. \u0394G = \u2212100 \u2212 (298 \u00D7 0.050) = \u2212100 \u2212 14.9 = \u2212114.9 kJ/mol.' },"
);

// Line 108: Born-Haber lattice enthalpy
fix(
  "options: ['-787 kJ/mol', '-411 kJ/mol', '+787 kJ/mol', '-376 kJ/mol'], answer: 0 },",
  "options: ['-787 kJ/mol', '-411 kJ/mol', '+787 kJ/mol', '-376 kJ/mol'], answer: 0, explanation: '\u0394H\u0192 = atomisation(Na) + IE\u2081(Na) + atomisation(Cl) + EA(Cl) + lattice. Rearranging: lattice = \u0394H\u0192 \u2212 (107 + 496 + 122 \u2212 349) = \u2212411 \u2212 376 = \u2212787 kJ/mol.' },"
);

// Line 109: temperature for non-spontaneity
fix(
  "options: ['400 K', '200 K', '800 K', '160 K'], answer: 0 },",
  "options: ['400 K', '200 K', '800 K', '160 K'], answer: 0, explanation: 'Spontaneous while \u0394G < 0, i.e. \u0394H \u2212 T\u0394S < 0. Non-spontaneous above T = \u0394H/\u0394S = \u221280,000 \u00F7 (\u2212200) = 400 K (both \u0394H and \u0394S negative; sign change at 400 K).' },"
);

// Line 110: rate equation with doubled [A] and halved [B]
fix(
  "options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'], answer: 0 },",
  "options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'], answer: 0, explanation: 'rate = k[A]\u00B2[B]. Doubling [A]: \u00D74 (second order in A). Halving [B]: \u00F72 (first order in B). Net effect = 4 \u00F7 2 = 2\u00D7. Rate doubles.' },"
);

// Line 111: calorimetry enthalpy of neutralisation
fix(
  "options: ['-28.4 kJ/mol', '-14.2 kJ/mol', '-56.8 kJ/mol', '-1.42 kJ/mol'], answer: 0 },",
  "options: ['-28.4 kJ/mol', '-14.2 kJ/mol', '-56.8 kJ/mol', '-1.42 kJ/mol'], answer: 0, explanation: 'q = mc\u0394T = 50 \u00D7 4.18 \u00D7 6.8 = 1421 J = 1.421 kJ (heat released). n(HCl) = 0.050 \u00D7 1.0 = 0.050 mol. \u0394H = \u22121.421 \u00F7 0.050 = \u221228.4 kJ/mol.' },"
);

// Line 115: Arrhenius k calculation
fix(
  "options: ['2.0 x 10^3 s^-1', '1.0 x 10^12 s^-1', '1.0 x 10^-9 s^-1', '5.0 x 10^8 s^-1'], answer: 0 },",
  "options: ['2.0 x 10^3 s^-1', '1.0 x 10^12 s^-1', '1.0 x 10^-9 s^-1', '5.0 x 10^8 s^-1'], answer: 0, explanation: 'k = Ae^(\u2212Ea/RT) = 10\u00B9\u00B2 \u00D7 e^(\u221250000/(8.314\u00D7300)) = 10\u00B9\u00B2 \u00D7 e^(\u221220.04) = 10\u00B9\u00B2 \u00D7 2.0\u00D710\u207B\u2079 \u2248 2.0 \u00D7 10\u00B3 s\u207B\u00B9.' },"
);

// Line 127: pH of 0.1 mol/dm3 HCl
fix(
  "options: ['1', '0.1', '7', '13'], answer: 0 },",
  "options: ['1', '0.1', '7', '13'], answer: 0, explanation: 'HCl fully dissociates: [H\u207A] = 0.1 mol dm\u207B\u00B3. pH = \u2212log(0.1) = \u2212log(10\u207B\u00B9) = 1.' },"
);

// Line 146: pH of 0.01 mol/dm3 NaOH
fix(
  "options: ['12', '2', '7', '14'], answer: 0 },",
  "options: ['12', '2', '7', '14'], answer: 0, explanation: '[OH\u207B] = 0.01 mol dm\u207B\u00B3; pOH = \u2212log(0.01) = 2; pH = 14 \u2212 pOH = 14 \u2212 2 = 12 (at 25\u00B0C).' },"
);

// Line 148: pKa of ethanoic acid
fix(
  "options: ['4.76', '5.24', '3.76', '1.74'], answer: 0 },",
  "options: ['4.76', '5.24', '3.76', '1.74'], answer: 0, explanation: 'pKa = \u2212log(Ka) = \u2212log(1.74\u00D710\u207B\u2075) = \u2212(\u22124.76) = 4.76.' },"
);

// Line 150: pH of weak acid (0.05 mol, Ka=1.8e-5)
fix(
  "options: ['3.02', '1.30', '4.76', '5.00'], answer: 0 },",
  "options: ['3.02', '1.30', '4.76', '5.00'], answer: 0, explanation: '[H\u207A] = \u221A(Ka \u00D7 C) = \u221A(1.8\u00D710\u207B\u2075 \u00D7 0.05) = \u221A(9\u00D710\u207B\u2077) = 9.49\u00D710\u207B\u2074 mol dm\u207B\u00B3. pH = \u2212log(9.49\u00D710\u207B\u2074) \u2248 3.02.' },"
);

// Line 156: ratio [A-]/[HA] from Henderson-Hasselbalch
fix(
  "options: ['1.74', '0.58', '1.00', '5.00'], answer: 0 },",
  "options: ['1.74', '0.58', '1.00', '5.00'], answer: 0, explanation: 'pH = pKa + log([A\u207B]/[HA]); log([A\u207B]/[HA]) = pH \u2212 pKa = 5.0 \u2212 4.76 = 0.24; [A\u207B]/[HA] = 10^0.24 = 1.74.' },"
);

// Line 161: solubility of AgCl from Ksp
fix(
  "options: ['1.33 x 10^-5', '1.77 x 10^-10', '1.77 x 10^-5', '8.85 x 10^-11'], answer: 0 },",
  "options: ['1.33 x 10^-5', '1.77 x 10^-10', '1.77 x 10^-5', '8.85 x 10^-11'], answer: 0, explanation: 'AgCl \u21CC Ag\u207A + Cl\u207B; Ksp = s\u00B2. So s = \u221AKsp = \u221A(1.77\u00D710\u207B\u00B9\u2070) = 1.33\u00D710\u207B\u2075 mol dm\u207B\u00B3.' },"
);

// Line 163: [H+] ratio between pH 3 and pH 5
fix(
  "options: ['100 times', '2 times', '10 times', '1000 times'], answer: 0 },",
  "options: ['100 times', '2 times', '10 times', '1000 times'], answer: 0, explanation: '[H\u207A] at pH 3 = 10\u207B\u00B3; [H\u207A] at pH 5 = 10\u207B\u2075. Ratio = 10\u207B\u00B3 \u00F7 10\u207B\u2075 = 10\u00B2 = 100 times greater.' },"
);

// Line 167: Kp for N2 + 3H2 <=> 2NH3
fix(
  "options: ['0.0197 atm', '0.197 atm', '1.97 atm', '0.00197 atm'], answer: 0 },",
  "options: ['0.0197 atm', '0.197 atm', '1.97 atm', '0.00197 atm'], answer: 0, explanation: 'Kp = p(NH\u2083)\u00B2 / (p(N\u2082)\u00D7p(H\u2082)\u00B3). So p(NH\u2083)\u00B2 = Kp \u00D7 1 \u00D7 3\u00B3 = 1.5\u00D710\u207B\u2075 \u00D7 27 = 4.05\u00D710\u207B\u2074. p(NH\u2083) = \u221A(4.05\u00D710\u207B\u2074) \u2248 0.0201 atm \u2248 0.0197 atm.' },"
);

// Line 168: buffer pH (Henderson-Hasselbalch)
fix(
  "options: ['4.94', '4.76', '4.58', '5.17'], answer: 0 },",
  "options: ['4.94', '4.76', '4.58', '5.17'], answer: 0, explanation: 'pH = pKa + log([A\u207B]/[HA]) = \u2212log(1.74\u00D710\u207B\u2075) + log(0.15/0.10) = 4.76 + log(1.5) = 4.76 + 0.18 = 4.94.' },"
);

// Line 169: pH of diprotic H2SO4
fix(
  "options: ['0.70', '1.00', '0.30', '1.30'], answer: 0 },",
  "options: ['0.70', '1.00', '0.30', '1.30'], answer: 0, explanation: 'H\u2082SO\u2084 is diprotic and fully dissociates: [H\u207A] = 2 \u00D7 0.10 = 0.20 mol dm\u207B\u00B3. pH = \u2212log(0.20) = 0.70.' },"
);

// Line 170: percentage dissociation of weak acid
fix(
  "options: ['0.63%', '6.3%', '0.063%', '63%'], answer: 0 },",
  "options: ['0.63%', '6.3%', '0.063%', '63%'], answer: 0, explanation: '[H\u207A] = \u221A(Ka \u00D7 C) = \u221A(2.0\u00D710\u207B\u2075 \u00D7 0.50) = \u221A(10\u207B\u2075) = 3.16\u00D710\u207B\u00B3 mol dm\u207B\u00B3. % dissociation = (3.16\u00D710\u207B\u00B3 \u00F7 0.50) \u00D7 100 = 0.63%.' },"
);

// Line 171: pH of water at 35°C
fix(
  "options: ['6.84', '7.00', '7.16', '6.50'], answer: 0 },",
  "options: ['6.84', '7.00', '7.16', '6.50'], answer: 0, explanation: 'At 35\u00B0C: [H\u207A] = \u221AKw = \u221A(2.09\u00D710\u207B\u00B9\u2074) = 1.446\u00D710\u207B\u2077. pH = \u2212log(1.446\u00D710\u207B\u2077) = 6.84 (pure water is still neutral but pH < 7 because Kw increases with temperature).' },"
);

// Line 173: half-equivalence point pH = pKa
fix(
  "options: ['5.00', '4.76', '7.00', '3.00'], answer: 0 },",
  "options: ['5.00', '4.76', '7.00', '3.00'], answer: 0, explanation: 'At the half-equivalence point, half the acid has been neutralised so [HA] = [A\u207B]. By Henderson-Hasselbalch: pH = pKa + log(1) = pKa = \u2212log(1.0\u00D710\u207B\u2075) = 5.00.' },"
);

// Line 174: molar solubility of PbI2
fix(
  "options: ['1.36 x 10^-3 mol dm^-3', '9.8 x 10^-9 mol dm^-3', '3.13 x 10^-5 mol dm^-3', '2.15 x 10^-3 mol dm^-3'], answer: 0 },",
  "options: ['1.36 x 10^-3 mol dm^-3', '9.8 x 10^-9 mol dm^-3', '3.13 x 10^-5 mol dm^-3', '2.15 x 10^-3 mol dm^-3'], answer: 0, explanation: 'PbI\u2082 \u21CC Pb\u00B2\u207A + 2I\u207B; Ksp = s\u00D7(2s)\u00B2 = 4s\u00B3. So s = \u00B3\u221A(Ksp/4) = \u00B3\u221A(9.8\u00D710\u207B\u2079/4) = \u00B3\u221A(2.45\u00D710\u207B\u2079) = 1.35\u00D710\u207B\u00B3 \u2248 1.36\u00D710\u207B\u00B3 mol dm\u207B\u00B3.' },"
);

// Line 175: NH3/NH4Cl buffer pH
fix(
  "options: ['9.46', '4.54', '9.26', '8.74'], answer: 0 },",
  "options: ['9.46', '4.54', '9.26', '8.74'], answer: 0, explanation: 'pKa(NH\u2084\u207A) = 14 \u2212 pKb(NH\u2083) = 14 \u2212 (\u2212log(1.8\u00D710\u207B\u2075)) = 14 \u2212 4.745 = 9.255. pH = pKa + log([NH\u2083]/[NH\u2084\u207A]) = 9.255 + log(0.40/0.25) = 9.255 + 0.204 = 9.46.' },"
);

// Line 176: HI equilibrium concentration
fix(
  "options: ['1.56 mol dm^-3', '0.78 mol dm^-3', '2.00 mol dm^-3', '1.00 mol dm^-3'], answer: 0 }",
  "options: ['1.56 mol dm^-3', '0.78 mol dm^-3', '2.00 mol dm^-3', '1.00 mol dm^-3'], answer: 0, explanation: 'Let [H\u2082]eq = [I\u2082]eq = 1\u2212x, [HI]eq = 2x. Kc = (2x)\u00B2/(1\u2212x)\u00B2 = 50; 2x/(1\u2212x) = \u221A50 = 7.07; x = 7.07/(9.07) = 0.779; [HI] = 2\u00D70.779 = 1.56 mol dm\u207B\u00B3.' }"
);

// Line 292: redox titration - moles of Fe2+
fix(
  "options: ['2.5 x 10^-3 mol', '5.0 x 10^-4 mol', '1.0 x 10^-3 mol', '2.0 x 10^-3 mol'], answer: 0 },",
  "options: ['2.5 x 10^-3 mol', '5.0 x 10^-4 mol', '1.0 x 10^-3 mol', '2.0 x 10^-3 mol'], answer: 0, explanation: 'n(KMnO\u2084) = 0.0250 \u00D7 0.020 = 5.0\u00D710\u207B\u2074 mol. MnO\u2084\u207B oxidises 5Fe\u00B2\u207A (ratio 1:5). n(Fe\u00B2\u207A) = 5 \u00D7 5.0\u00D710\u207B\u2074 = 2.5\u00D710\u207B\u00B3 mol.' },"
);

fs.writeFileSync(path, content, 'utf8');
console.log('\nDone: ' + count + ' replacements made in chemistry-ocr-b.js');
