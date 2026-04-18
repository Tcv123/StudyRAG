const fs = require('fs');

function applyReplacements(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  for (const [oldStr, newStr] of replacements) {
    if (content.includes(oldStr)) {
      content = content.replace(oldStr, newStr);
      count++;
    } else {
      console.log('MISS: ' + oldStr.substring(0, 70));
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Done ${filePath.split('/').pop()}: ${count}/${replacements.length} replaced`);
}

// ── chemistry-aqa.js ──────────────────────────────────────────────────────────
applyReplacements('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-aqa.js', [
  [
    "options: ['1.0 g', '4.0 g', '0.4 g', '10.0 g'], answer: 0 }",
    "options: ['1.0 g', '4.0 g', '0.4 g', '10.0 g'], answer: 0, explanation: 'moles = concentration \u00d7 volume(dm\u00b3) = 0.1 \u00d7 0.25 = 0.025 mol; mass = moles \u00d7 Mr = 0.025 \u00d7 40 = 1.0 g.' }"
  ],
  [
    "options: ['4.0 g', '2.0 g', '8.0 g', '6.0 g'], answer: 0 }",
    "options: ['4.0 g', '2.0 g', '8.0 g', '6.0 g'], answer: 0, explanation: 'moles Mg = 2.4\u00f724 = 0.1 mol; 2Mg:2MgO ratio is 1:1, so moles MgO = 0.1; mass = 0.1\u00d740 = 4.0 g.' }"
  ],
  [
    "options: ['-6.27 kJ', '-6270 kJ', '-62.7 kJ', '-0.627 kJ'], answer: 0 }",
    "options: ['-6.27 kJ', '-6270 kJ', '-62.7 kJ', '-0.627 kJ'], answer: 0, explanation: 'q = mc\u0394T = 100 g \u00d7 4.18 J g\u207b\u00b9K\u207b\u00b9 \u00d7 15 K = 6270 J = 6.27 kJ (negative: heat released by reaction).' }"
  ],
  [
    "options: ['-30 kJ', '+130 kJ', '-130 kJ', '+30 kJ'], answer: 0 }",
    "options: ['-30 kJ', '+130 kJ', '-130 kJ', '+30 kJ'], answer: 0, explanation: '\u0394H(A\u2192C) = \u0394H(A\u2192B) + \u0394H(B\u2192C) = (+50) + (\u221280) = \u221230 kJ.' }"
  ],
  [
    "options: ['10 cm3', '25 cm3', '50 cm3', '5 cm3'], answer: 0 }",
    "options: ['10 cm3', '25 cm3', '50 cm3', '5 cm3'], answer: 0, explanation: 'moles NaOH = 0.025 \u00d7 0.2 = 0.005 mol; HCl:NaOH = 1:1, so moles HCl = 0.005; V = 0.005\u00f70.5 = 0.01 dm\u00b3 = 10 cm\u00b3.' }"
  ],
  [
    "options: ['1', '2', '0.5', '24'], answer: 0 }",
    "options: ['1', '2', '0.5', '24'], answer: 0, explanation: 'n = volume \u00f7 molar volume = 24 \u00f7 24.0 = 1 mol (at RTP, 1 mol gas occupies 24.0 dm\u00b3).' }"
  ],
  [
    "options: ['56%', '44%', '100%', '28%'], answer: 0 }",
    "options: ['56%', '44%', '100%', '28%'], answer: 0, explanation: '% atom economy = (Mr desired product \u00f7 total Mr all products) \u00d7 100 = (56 \u00f7 (56+44)) \u00d7 100 = 56%.' }"
  ],
  [
    "options: ['C6H12O6', 'C3H6O3', 'CH2O', 'C2H4O2'], answer: 0 }",
    "options: ['C6H12O6', 'C3H6O3', 'CH2O', 'C2H4O2'], answer: 0, explanation: 'C: 40\u00f712=3.33; H: 6.7\u00f71=6.7; O: 53.3\u00f716=3.33 \u2192 ratio 1:2:1 \u2192 empirical CH\u2082O (Mr=30); 180\u00f730=6 \u2192 C\u2086H\u2081\u2082O\u2086.' }"
  ],
  [
    "options: ['0.188 mol dm^-3', '0.094 mol dm^-3', '0.235 mol dm^-3', '0.100 mol dm^-3'], answer: 0 }",
    "options: ['0.188 mol dm^-3', '0.094 mol dm^-3', '0.235 mol dm^-3', '0.100 mol dm^-3'], answer: 0, explanation: 'moles Na\u2082CO\u2083 = 0.0235 \u00d7 0.100 = 0.00235 mol; Na\u2082CO\u2083:2HCl ratio \u2192 moles HCl = 0.00470; [HCl] = 0.00470\u00f70.025 = 0.188 mol dm\u207b\u00b3.' }"
  ],
  [
    "options: ['2', '1', '0.01', '12'], answer: 0 }",
    "options: ['2', '1', '0.01', '12'], answer: 0, explanation: 'HCl fully dissociates: [H\u207a] = 0.01 = 10\u207b\u00b2 mol dm\u207b\u00b3. pH = \u2212log(10\u207b\u00b2) = 2.' }"
  ],
  [
    "options: ['13', '1', '7', '14'], answer: 0 }",
    "options: ['13', '1', '7', '14'], answer: 0, explanation: '[OH\u207b] = 0.1; pOH = \u2212log(0.1) = 1; at 25\u00b0C: pH = 14 \u2212 1 = 13.' }"
  ],
  [
    "options: ['+1.10 V', '-0.42 V', '+0.42 V', '-1.10 V'], answer: 0 }",
    "options: ['+1.10 V', '-0.42 V', '+0.42 V', '-1.10 V'], answer: 0, explanation: 'E_cell = E(cathode) \u2212 E(anode) = +0.34 \u2212 (\u22120.76) = +0.34 + 0.76 = +1.10 V.' }"
  ],
  [
    "options: ['-114.9 kJ', '-85.1 kJ', '+114.9 kJ', '-50 kJ'], answer: 0 }",
    "options: ['-114.9 kJ', '-85.1 kJ', '+114.9 kJ', '-50 kJ'], answer: 0, explanation: '\u0394G = \u0394H \u2212 T\u0394S. Convert \u0394S: 50 J K\u207b\u00b9 = 0.050 kJ K\u207b\u00b9. \u0394G = \u2212100 \u2212 (298\u00d70.050) = \u2212114.9 kJ.' }"
  ],
  [
    "options: ['1.82 x 10^-5 mol dm^-3', '1.35 x 10^-3 mol dm^-3', '1.82 x 10^-3 mol dm^-3', '1.35 x 10^-5 mol dm^-3'], answer: 0 }",
    "options: ['1.82 x 10^-5 mol dm^-3', '1.35 x 10^-3 mol dm^-3', '1.82 x 10^-3 mol dm^-3', '1.35 x 10^-5 mol dm^-3'], answer: 0, explanation: '[H\u207a] = 10^\u207b\u00b2\u00b7\u2078\u2077 = 1.35\u00d710\u207b\u00b3. Ka = [H\u207a]\u00b2\u00f7[HA] = (1.35\u00d710\u207b\u00b3)\u00b2\u00f70.1 = 1.82\u00d710\u207b\u2075 mol dm\u207b\u00b3.' }"
  ],
  [
    "options: ['4.94', '4.76', '4.58', '5.12'], answer: 0 }",
    "options: ['4.94', '4.76', '4.58', '5.12'], answer: 0, explanation: 'pH = pKa + log([A\u207b]/[HA]) = \u2212log(1.74\u00d710\u207b\u2075) + log(0.15/0.1) = 4.76 + 0.176 = 4.94.' }"
  ],
  [
    "options: ['Above 500 K', 'Below 500 K', 'At all temperatures', 'Never spontaneous'], answer: 0 }",
    "options: ['Above 500 K', 'Below 500 K', 'At all temperatures', 'Never spontaneous'], answer: 0, explanation: 'Spontaneous when \u0394G<0, i.e. T>\u0394H/\u0394S = 50,000 J\u00f7100 J K\u207b\u00b9 = 500 K.' }"
  ],
  [
    "options: ['Second order', 'First order', 'Zero order', 'Third order'], answer: 0 }",
    "options: ['Second order', 'First order', 'Zero order', 'Third order'], answer: 0, explanation: 'Rate\u221d1/t. [A] doubles (0.1\u21920.2) \u2192 rate ratio = 40/10 = 4 (quadrupled). Rate \u221d [A]\u00b2 \u2192 second order.' }"
  ],
]);

// ── chemistry-edexcel.js ──────────────────────────────────────────────────────
applyReplacements('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-edexcel.js', [
  [
    "options: ['-890 kJ mol^-1', '+890 kJ mol^-1', '0 kJ mol^-1', '-445 kJ mol^-1'], answer: 0",
    "options: ['-890 kJ mol^-1', '+890 kJ mol^-1', '0 kJ mol^-1', '-445 kJ mol^-1'], answer: 0, explanation: 'The standard enthalpy of combustion of methane is a defined/measured value of \u2212890 kJ mol\u207b\u00b9. The negative sign confirms the reaction is exothermic.'"
  ],
]);

// ── chemistry-ocr-a.js M2 calculation questions ───────────────────────────────
applyReplacements('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-ocr-a.js', [
  [
    "options: ['35.0', '35.5', '36.0', '35.2'], answer: 1 }",
    "options: ['35.0', '35.5', '36.0', '35.2'], answer: 1, explanation: 'Ar = (35\u00d775.8 + 37\u00d724.2) \u00f7 100 = (2653 + 896.4) \u00f7 100 = 3549.4 \u00f7 100 = 35.5.' }"
  ],
  [
    "options: ['0.50 g', '1.00 g', '2.50 g', '4.00 g'], answer: 1 }",
    "options: ['0.50 g', '1.00 g', '2.50 g', '4.00 g'], answer: 1, explanation: 'moles NaOH = c\u00d7V = 0.10\u00d70.250 = 0.025 mol; mass = 0.025\u00d740 = 1.00 g.' }"
  ],
  [
    "options: ['0.025 mol', '0.05 mol', '0.10 mol', '0.20 mol'], answer: 2 }",
    "options: ['0.025 mol', '0.05 mol', '0.10 mol', '0.20 mol'], answer: 2, explanation: 'Na\u2082CO\u2083 + 2HCl \u2192 2NaCl + H\u2082O + CO\u2082; ratio 1:2. moles HCl = 2 \u00d7 0.05 = 0.10 mol.' }"
  ],
  [
    "options: ['12.5 cm\u00b3', '25.0 cm\u00b3', '50.0 cm\u00b3', '10.0 cm\u00b3'], answer: 0 }",
    "options: ['12.5 cm\u00b3', '25.0 cm\u00b3', '50.0 cm\u00b3', '10.0 cm\u00b3'], answer: 0, explanation: 'moles NaOH = 0.025\u00d70.10 = 0.0025 mol; moles HCl needed = 0.0025; V = 0.0025\u00f70.20 = 0.0125 dm\u00b3 = 12.5 cm\u00b3.' }"
  ],
  [
    "options: ['CHO', 'CH\u2082O', 'C\u2082H\u2084O\u2082', 'CHO\u2082'], answer: 1 }",
    "options: ['CHO', 'CH\u2082O', 'C\u2082H\u2084O\u2082', 'CHO\u2082'], answer: 1, explanation: 'C: 40/12=3.33; H: 6.7/1=6.7; O: 53.3/16=3.33 \u2192 ratio 1:2:1 \u2192 empirical formula CH\u2082O.' }"
  ],
  [
    "options: ['0.10', '0.20', '0.40', '1.00'], answer: 2 }",
    "options: ['0.10', '0.20', '0.40', '1.00'], answer: 2, explanation: 'moles HCl = 7.30\u00f736.5 = 0.200 mol; V = 500 cm\u00b3 = 0.500 dm\u00b3; c = 0.200\u00f70.500 = 0.40 mol dm\u207b\u00b3.' }"
  ],
  [
    "options: ['2.4 dm\u00b3', '6.0 dm\u00b3', '12.0 dm\u00b3', '24.0 dm\u00b3'], answer: 1 }",
    "options: ['2.4 dm\u00b3', '6.0 dm\u00b3', '12.0 dm\u00b3', '24.0 dm\u00b3'], answer: 1, explanation: 'V = n \u00d7 molar volume = 0.25 \u00d7 24.0 = 6.0 dm\u00b3.' }"
  ],
  [
    "options: ['+4', '+5', '+6', '+7'], answer: 3 }",
    "options: ['+4', '+5', '+6', '+7'], answer: 3, explanation: 'In KMnO\u2084: K is +1, O is \u22122 (\u00d74 = \u22128). Sum = 0: (+1) + Mn + (\u22128) = 0 \u2192 Mn = +7.' }"
  ],
  [
    "options: ['+4', '+6', '-2', '+2'], answer: 1 }",
    "options: ['+4', '+6', '-2', '+2'], answer: 1, explanation: 'In SO\u2084\u00b2\u207b: O is \u22122 (\u00d74 = \u22128); total charge = \u22122. S + (\u22128) = \u22122 \u2192 S = +6.' }"
  ],
]);

// ── chemistry-ocr-b.js calculation questions ──────────────────────────────────
const orcbPath = 'C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-ocr-b.js';
const orcbContent = fs.readFileSync(orcbPath, 'utf8');
// check what calc questions exist
const calcLines = orcbContent.split('\n').filter((l,i) => l.includes('options') && (l.includes('mol') || l.includes('kJ') || l.includes('pH') || l.includes('cm3') || l.includes('%')));
console.log('\nchemistry-ocr-b calc lines found:', calcLines.length);

// ── physics-aqa.js calculation questions ─────────────────────────────────────
const physAqaPath = 'C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-aqa.js';
let physAqa = fs.readFileSync(physAqaPath, 'utf8');
const physCalcLines = physAqa.split('\n').filter(l => l.includes('options') && /[\d.]+ [kJVNA]/.test(l));
console.log('physics-aqa calc lines found:', physCalcLines.length);

// ── physics-edexcel.js ────────────────────────────────────────────────────────
const physEdPath = 'C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-edexcel.js';
let physEd = fs.readFileSync(physEdPath, 'utf8');
const physEdCalcLines = physEd.split('\n').filter(l => l.includes('options') && /[\d.]/.test(l) && l.includes('answer'));
console.log('physics-edexcel calc lines found:', physEdCalcLines.length);

console.log('\nAll done.');
