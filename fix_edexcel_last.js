const fs = require('fs');
let src = fs.readFileSync('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-edexcel.js', 'utf8');
let count = 0, miss = 0;

function fix(old, rep) {
  if (src.includes(old)) { src = src.replace(old, rep); count++; }
  else { console.log('MISS: ' + old.substring(0, 80)); miss++; }
}

// These are the LAST questions in their amber/red sections — no trailing comma after }

// T1 red: speed uncertainty (last in red)
fix(
  "options: ['±0.10 m/s', '±0.13 m/s', '±0.20 m/s', '±0.23 m/s'], answer: 'C' }\n    ]\n  },\n  'T2':",
  "options: ['±0.10 m/s', '±0.13 m/s', '±0.20 m/s', '±0.23 m/s'], answer: 'C', explanation: 'v = 1.50/0.60 = 2.5 m/s; % unc = (0.02/1.50 + 0.04/0.60)×100 = 8%; \u0394v = 0.08\u00D72.5 = 0.20 m/s.' }\n    ]\n  },\n  'T2':"
);

// T2 amber: impulse 60 Ns (last in amber)
fix(
  "options: ['3.75 N\u00B7s', '15 N\u00B7s', '30 N\u00B7s', '60 N\u00B7s'], answer: 'D' }\n    ],\n    red:",
  "options: ['3.75 N\u00B7s', '15 N\u00B7s', '30 N\u00B7s', '60 N\u00B7s'], answer: 'D', explanation: 'J = F\u00D7t = 15\u00D74 = 60 N\u00B7s.' }\n    ],\n    red:"
);

// T2 red: conveyor belt (last in red)
fix(
  "options: ['0.57 m', '1.15 m', '2.30 m', '4.59 m'], answer: 'B' }\n    ]\n  },\n  'T3':",
  "options: ['0.57 m', '1.15 m', '2.30 m', '4.59 m'], answer: 'B', explanation: 'a = \u03BCg = 0.4\u00D79.81 = 3.924 m/s\u00B2; s = v\u00B2/(2a) = 9/7.848 = 1.15 m.' }\n    ]\n  },\n  'T3':"
);

// T3 amber: electrons per second (last in amber)
fix(
  "options: ['3.2 \u00D7 10\u207B\u00B9\u2079', '1.25 \u00D7 10\u00B9\u2079', '3.2 \u00D7 10\u00B9\u2079', '6.4 \u00D7 10\u00B9\u2079'], answer: 'B' }\n    ],\n    red:",
  "options: ['3.2 \u00D7 10\u207B\u00B9\u2079', '1.25 \u00D7 10\u00B9\u2079', '3.2 \u00D7 10\u00B9\u2079', '6.4 \u00D7 10\u00B9\u2079'], answer: 'B', explanation: 'n = I/e = 2/(1.6\u00D710\u207B\u00B9\u2079) = 1.25\u00D710\u00B9\u2079 electrons per second.' }\n    ],\n    red:"
);

// T3 red: minimum wire diameter (last in red)
fix(
  "options: ['0.52 mm', '0.74 mm', '1.04 mm', '1.48 mm'], answer: 'C' }\n    ]\n  },\n  'T4':",
  "options: ['0.52 mm', '0.74 mm', '1.04 mm', '1.48 mm'], answer: 'C', explanation: 'A = \u03C1L/R = 1.7\u00D710\u207B\u2078\u00D75/0.1 = 8.5\u00D710\u207B\u2077 m\u00B2; d = \u221A(4A/\u03C0) = 1.04\u00D710\u207B\u00B3 m = 1.04 mm.' }\n    ]\n  },\n  'T4':"
);

// T4 amber: extension ratio Al:Steel (last in amber)
fix(
  "options: ['7:20', '20:7', '7:2', '2:7'], answer: 'B' }\n    ],\n    red:",
  "options: ['7:20', '20:7', '7:2', '2:7'], answer: 'B', explanation: 'x \u221D 1/E (same F, L, A); x_Al/x_steel = E_steel/E_Al = 2\u00D710\u00B9\u00B9/(7\u00D710\u00B9\u2070) = 20/7.' }\n    ],\n    red:"
);

// T4 red: elastic energy at 7mm (last in red)
fix(
  "options: ['0.06 J', '0.12 J', '0.18 J', '0.21 J'], answer: 'B' }\n    ]\n  },\n  'T5':",
  "options: ['0.06 J', '0.12 J', '0.18 J', '0.21 J'], answer: 'B', explanation: 'Elastic energy stored only in Hooke\u2019s law region (up to 4 mm): E = \u00BDFx = \u00BD\u00D760\u00D70.004 = 0.12 J.' }\n    ]\n  },\n  'T5':"
);

// T5 amber: grating orders (last in amber)
fix(
  "options: ['3', '5', '7', '9'], answer: 'C' }\n    ],\n    red:",
  "options: ['3', '5', '7', '9'], answer: 'C', explanation: 'd = 1/(300\u00D710\u00B3) = 3.33\u00D710\u207B\u2076 m; n_max = d/\u03BB = 3.33\u00D710\u207B\u2076/450\u00D710\u207B\u2079 = 7.4; so 7 complete orders visible.' }\n    ],\n    red:"
);

// T5 red: single slit minimum (last in red)
fix(
  "options: ['0.06\u00B0', '0.17\u00B0', '0.34\u00B0', '0.69\u00B0'], answer: 'C' }\n    ]\n  },\n  'T6':",
  "options: ['0.06\u00B0', '0.17\u00B0', '0.34\u00B0', '0.69\u00B0'], answer: 'C', explanation: 'First minimum: sin \u03B8 = \u03BB/a = 600\u00D710\u207B\u2079/(0.1\u00D710\u207B\u00B3) = 6\u00D710\u207B\u00B3; \u03B8 = 0.34\u00B0.' }\n    ]\n  },\n  'T6':"
);

// T6 amber: turntable omega (last in amber)
fix(
  "options: ['1.05 rad/s', '2.09 rad/s', '3.49 rad/s', '6.98 rad/s'], answer: 'C' }\n    ],\n    red:",
  "options: ['1.05 rad/s', '2.09 rad/s', '3.49 rad/s', '6.98 rad/s'], answer: 'C', explanation: '\u03C9 = 2\u03C0\u00D7(33.33/60) = 2\u03C0\u00D70.5556 = 3.49 rad/s.' }\n    ],\n    red:"
);

// T7 amber: charge Q=CV (last in amber)
fix(
  "options: ['4.23 \u00D7 10\u207B\u2074 C', '4.23 \u00D7 10\u207B\u00B3 C', '4.23 \u00D7 10\u207B\u00B2 C', '4.23 \u00D7 10\u207B\u00B9 C'], answer: 'A' }\n    ],\n    red:",
  "options: ['4.23 \u00D7 10\u207B\u2074 C', '4.23 \u00D7 10\u207B\u00B3 C', '4.23 \u00D7 10\u207B\u00B2 C', '4.23 \u00D7 10\u207B\u00B9 C'], answer: 'A', explanation: 'Q = CV = 47\u00D710\u207B\u2076\u00D79 = 423\u00D710\u207B\u2076 C = 4.23\u00D710\u207B\u2074 C.' }\n    ],\n    red:"
);

// T7 red: velocity selector (last in red)
fix(
  "options: ['3 \u00D7 10\u00B3 m/s', '3 \u00D7 10\u2074 m/s', '3 \u00D7 10\u2075 m/s', '3 \u00D7 10\u2076 m/s'], answer: 'C' }\n    ]\n  },\n  'T8':",
  "options: ['3 \u00D7 10\u00B3 m/s', '3 \u00D7 10\u2074 m/s', '3 \u00D7 10\u2075 m/s', '3 \u00D7 10\u2076 m/s'], answer: 'C', explanation: 'Electric force = magnetic force: qE = qvB; v = E/B = 3\u00D710\u2074/0.1 = 3\u00D710\u2075 m/s.' }\n    ]\n  },\n  'T8':"
);

// T9 amber: total molecules (last in amber)
fix(
  "options: ['2.01 \u00D7 10\u00B2\u00B3', '6.02 \u00D7 10\u00B2\u00B3', '1.81 \u00D7 10\u00B2\u2074', '3.61 \u00D7 10\u00B2\u2074'], answer: 'C' }\n    ],\n    red:",
  "options: ['2.01 \u00D7 10\u00B2\u00B3', '6.02 \u00D7 10\u00B2\u00B3', '1.81 \u00D7 10\u00B2\u2074', '3.61 \u00D7 10\u00B2\u2074'], answer: 'C', explanation: 'N = nN_A = 3\u00D76.02\u00D710\u00B2\u00B3 = 1.81\u00D710\u00B2\u2074.' }\n    ],\n    red:"
);

// T10 amber: parallax distance (last in amber)
fix(
  "options: ['5 pc', '10 pc', '20 pc', '50 pc'], answer: 'C' }\n    ],\n    red:",
  "options: ['5 pc', '10 pc', '20 pc', '50 pc'], answer: 'C', explanation: 'd = 1/p (arcsec) = 1/0.05 = 20 pc.' }\n    ],\n    red:"
);

fs.writeFileSync('C:/Users/tcvas/OneDrive/Desktop/Learning/questions/physics/physics-edexcel.js', src);
console.log('Done: ' + count + ' fixed, ' + miss + ' missed.');
