const fs = require('fs');

// Fix chemistry-ocr-a.js — 3 missed questions (file uses literal \u00B3 text sequences)
let oa = fs.readFileSync('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-ocr-a.js', 'utf8');
let count = 0;

// Debug: check exact char sequence
const idx = oa.indexOf('12.5 cm');
console.log('chars after "12.5 cm":', JSON.stringify(oa.substring(idx + 7, idx + 16)));

// 1. Volume of HCl needed (12.5 cm with literal \u00B3)
const old1 = "options: ['12.5 cm\\u00B3', '25.0 cm\\u00B3', '50.0 cm\\u00B3', '10.0 cm\\u00B3'], answer: 0 },";
const new1 = "options: ['12.5 cm\\u00B3', '25.0 cm\\u00B3', '50.0 cm\\u00B3', '10.0 cm\\u00B3'], answer: 0, explanation: 'moles NaOH = 0.025 dm\\u00B3 \\u00D7 0.10 mol dm\\u207B\\u00B3 = 0.0025 mol; moles HCl = 0.0025 (1:1 ratio); V = 0.0025 \\u00F7 0.20 = 0.0125 dm\\u00B3 = 12.5 cm\\u00B3.' },";
console.log('Searching for:', JSON.stringify(old1.substring(0, 30)));
if (oa.includes(old1)) { oa = oa.replace(old1, new1); count++; console.log('Q1 (HCl volume) fixed'); } else { console.log('Q1 MISS'); }

// 2. Empirical formula CH2O (uses literal \u2082)
const old2 = "options: ['CHO', 'CH\\u2082O', 'C\\u2082H\\u2084O\\u2082', 'CHO\\u2082'], answer: 1 },";
const new2 = "options: ['CHO', 'CH\\u2082O', 'C\\u2082H\\u2084O\\u2082', 'CHO\\u2082'], answer: 1, explanation: 'Divide each % by atomic mass: C: 40.0\\u00F712=3.33; H: 6.7\\u00F71=6.7; O: 53.3\\u00F716=3.33. Ratio = 1:2:1, giving empirical formula CH\\u2082O.' },";
if (oa.includes(old2)) { oa = oa.replace(old2, new2); count++; console.log('Q2 (empirical formula) fixed'); } else { console.log('Q2 MISS'); }

// 3. Gas volume dm3
const old3 = "options: ['2.4 dm\\u00B3', '6.0 dm\\u00B3', '12.0 dm\\u00B3', '24.0 dm\\u00B3'], answer: 1 },";
const new3 = "options: ['2.4 dm\\u00B3', '6.0 dm\\u00B3', '12.0 dm\\u00B3', '24.0 dm\\u00B3'], answer: 1, explanation: 'V = n \\u00D7 molar volume = 0.25 mol \\u00D7 24.0 dm\\u00B3 mol\\u207B\\u00B9 = 6.0 dm\\u00B3.' },";
if (oa.includes(old3)) { oa = oa.replace(old3, new3); count++; console.log('Q3 (gas volume) fixed'); } else { console.log('Q3 MISS'); }

fs.writeFileSync('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/chemistry/chemistry-ocr-a.js', oa);
console.log('\nDone: ' + count + '/3 fixed');
