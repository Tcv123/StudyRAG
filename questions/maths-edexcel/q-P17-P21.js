// Edexcel A-Level Maths — P17–P21 MCQ Bank
// Format: { q, options: [correct, wrong1, wrong2, wrong3], answer: 0 }
// GREEN = recall (12 per topic), AMBER = multi-step (12 per topic), RED = A-grade (6 per topic)

const EDEXCEL_MCQ_P17_P21 = {

  // ─────────────────────────────────────────────
  // P17: PARAMETRIC EQUATIONS
  // ─────────────────────────────────────────────
  P17: [
    // GREEN (12)
    {
      tier: 'green',
      q: 'A curve is defined by \\(x = 2t\\) and \\(y = t^2\\). What is the Cartesian equation of the curve?',
      options: ['\\(y = \\frac{x}{2}\\)', '\\(y = \\frac{x^2}{4}\\)', '\\(y = x^2\\)', '\\(y = 2x^2\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'For \\(x = 3\\cos t,\\; y = 3\\sin t\\), what curve does this represent?',
      options: ['A parabola', 'A straight line', 'A circle of radius 3 centred at the origin', 'An ellipse'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'For parametric equations \\(x = f(t),\\; y = g(t)\\), what is \\(\\frac{dy}{dx}\\) equal to?',
      options: ['\\(\\dfrac{dx/dt}{dy/dt}\\)', '\\(\\dfrac{dy}{dt} \\cdot \\dfrac{dx}{dt}\\)', '\\(\\dfrac{d^2y}{dt^2}\\)', '\\(\\dfrac{dy/dt}{dx/dt}\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'The parametric curve \\(x = at^2,\\; y = 2at\\) has Cartesian equation:',
      options: ['\\(y^2 = 4ax\\)', '\\(y^2 = 2ax\\)', '\\(x^2 = 4ay\\)', '\\(y = 4ax\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'For \\(x = \\cos t,\\; y = \\sin t\\), at \\(t = \\pi/2\\) the coordinates are:',
      options: ['\\((0, -1)\\)', '\\((0, 1)\\)', '\\((1, 0)\\)', '\\((-1, 0)\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'What is the area under a parametric curve expressed as?',
      options: ['\\(\\int_\\alpha^\\beta y\\,dt\\)', '\\(\\int_\\alpha^\\beta \\frac{y}{x}\\,dt\\)', '\\(\\int_\\alpha^\\beta y\\,\\frac{dx}{dt}\\,dt\\)', '\\(\\int_\\alpha^\\beta x\\,\\frac{dy}{dt}\\,dt\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'For \\(x = e^t,\\; y = e^{2t}\\), the Cartesian equation is:',
      options: ['\\(y = 2x\\)', '\\(y = e^x\\)', '\\(y = \\ln x\\)', '\\(y = x^2\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'A curve is given by \\(x = t + 1,\\; y = t^2 - 1\\). At \\(t = 2\\), the point on the curve is:',
      options: ['\\((3, 3)\\)', '\\((2, 4)\\)', '\\((3, 5)\\)', '\\((4, 3)\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'For \\(x = \\cos t,\\; y = \\sin t,\\; 0 \\le t \\le 2\\pi\\), the curve is traced:',
      options: ['Along a semicircle only', 'Anticlockwise once around a unit circle', 'Clockwise once around a unit circle', 'Anticlockwise twice'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'For \\(x = 4\\cos t,\\; y = 3\\sin t\\), the Cartesian equation is:',
      options: ['\\(x^2+y^2=25\\)', '\\(\\frac{x^2}{9}+\\frac{y^2}{16}=1\\)', '\\(\\frac{x^2}{16}+\\frac{y^2}{9}=1\\)', '\\(\\frac{x^2}{4}+\\frac{y^2}{3}=1\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'At a stationary point of a parametric curve, which condition holds?',
      options: ['\\(\\frac{dx}{dt} = 0\\)', '\\(\\frac{dy}{dt} = \\frac{dx}{dt}\\)', '\\(\\frac{d^2y}{dx^2} = 0\\)', '\\(\\frac{dy}{dt} = 0\\) and \\(\\frac{dx}{dt} \\ne 0\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'To eliminate the parameter from \\(x = \\sec t,\\; y = \\tan t\\), which identity is used?',
      options: ['\\(\\sec^2 t - \\tan^2 t = 1\\)', '\\(\\sin^2 t + \\cos^2 t = 1\\)', '\\(\\tan^2 t + 1 = \\sec t\\)', '\\(\\sec t = 1/\\tan t\\)'],
      answer: 0
    },
    // AMBER (12)
    {
      tier: 'amber',
      q: 'For \\(x = t^2,\\; y = t^3\\), find \\(\\frac{dy}{dx}\\) at \\(t = 2\\).',
      options: ['\\(4\\)', '\\(3\\)', '\\(\\frac{3}{2}\\)', '\\(6\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: "Find the gradient of the tangent to \\(x = \\cos t,\\; y = \\sin 2t\\) at \\(t = \\pi/4\\).",
      options: ["\\(2\\)","\\(-\\frac{1}{2}\\)","\\(0\\)","\\(-2\\)"],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'The curve \\(x = t^2 + 1,\\; y = 2t\\) has a Cartesian equation. What is it?',
      options: ['\\(y^2 = 4(x+1)\\)', '\\(x = y^2 + 1\\)', '\\(y = 2\\sqrt{x-1}\\)', '\\(x = \\frac{y^2}{4} + 1\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find the equation of the tangent to \\(x = t^2,\\; y = 2t\\) at the point where \\(t = 3\\).',
      options: ['\\(y = \\frac{x}{3} + 3\\)', '\\(y = 3x - 3\\)', '\\(y = \\frac{x}{3} - 3\\)', '\\(y = \\frac{1}{3}x + 1\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: "For \\(x = 3t^2,\\; y = 6t\\), find \\(\\frac{d^2y}{dx^2}\\).",
      options: ["\\(\\frac{1}{6t^3}\\)","\\(-\\frac{1}{6t^3}\\)","\\(-\\frac{1}{3t^2}\\)","\\(-\\frac{1}{t^2}\\)"],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'A curve has \\(x = e^t,\\; y = e^{-t}\\). The Cartesian equation is \\(xy = k\\). What is \\(k\\)?',
      options: ['\\(0\\)', '\\(2\\)', '\\(1\\)', '\\(e\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Find the area under \\(x = t^2,\\; y = t^3\\) from \\(t = 0\\) to \\(t = 1\\).',
      options: ['\\(\\frac{1}{4}\\)', '\\(\\frac{1}{5}\\)', '\\(\\frac{2}{3}\\)', '\\(\\frac{2}{5}\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'For \\(x = 2\\cos t,\\; y = \\sin t\\), at \\(t = 0\\) the normal has gradient:',
      options: ['\\(0\\)', '\\(-2\\)', '\\(2\\)', '\\(\\infty\\) (vertical)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'For \\(x = t - \\sin t,\\; y = 1 - \\cos t\\), what is \\(\\frac{dy}{dx}\\) at \\(t = \\pi/2\\)?',
      options: ['\\(\\infty\\)', '\\(1\\)', '\\(-1\\)', '\\(0\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'The parametric curve \\(x = 2 + 3\\cos t,\\; y = -1 + 3\\sin t\\) is a circle. What is its centre?',
      options: ['\\((3, 3)\\)', '\\((0, 0)\\)', '\\((2, -1)\\)', '\\((-2, 1)\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'For \\(x = \\ln t,\\; y = t^2\\), find \\(\\frac{dy}{dx}\\) in terms of \\(t\\).',
      options: ['\\(\\frac{2}{t}\\)', '\\(2t\\ln t\\)', '\\(\\frac{1}{2t}\\)', '\\(2t^2\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'A curve \\(x = \\sin t,\\; y = \\cos 2t\\). Using the identity \\(\\cos 2t = 1 - 2\\sin^2 t\\), the Cartesian equation is:',
      options: ['\\(y = 1 - 2x^2\\)', '\\(y = 2x^2 - 1\\)', '\\(y = 1 + 2x^2\\)', '\\(y = \\cos^2 x\\)'],
      answer: 0
    },
    // RED (6)
    {
      tier: 'red',
      q: 'The curve \\(x = t^2,\\; y = t^3 - 3t\\) has two points where the tangent is parallel to the \\(x\\)-axis. The values of \\(t\\) are:',
      options: ['\\(t = 0\\) only', '\\(t = \\pm 1\\)', '\\(t = 0\\) and \\(t = 1\\)', '\\(t = \\pm \\sqrt{3}\\)'],
      answer: 1
    },
    {
      tier: 'red',
      q: 'For \\(x = 3t^2,\\; y = 2t^3\\), the second derivative \\(\\frac{d^2y}{dx^2}\\) at \\(t=1\\) is:',
      options: ['\\(\\frac{1}{9}\\)', '\\(1\\)', '\\(\\frac{1}{6}\\)', '\\(\\frac{1}{3}\\)'],
      answer: 2
    },
    {
      tier: 'red',
      q: 'Find the area enclosed between the curve \\(x = a\\cos^3 t,\\; y = a\\sin^3 t\\) and the positive \\(x\\)- and \\(y\\)-axes (for \\(0 \\le t \\le \\pi/2\\)).',
      options: ['\\(\\frac{\\pi a^2}{4}\\)', '\\(\\frac{a^2}{4}\\)', '\\(\\frac{3a^2}{8}\\)', '\\(\\frac{3\\pi a^2}{32}\\)'],
      answer: 3
    },
    {
      tier: 'red',
      q: "At what positive value of \\(t\\) does the normal to \\(x = t^2,\\; y = 2t\\) pass through the point \\((3, 0)\\)?",
      options: ["\\(t = 1\\)","\\(t = 2\\)","\\(t = \\sqrt{3}\\)","\\(t = \\sqrt{2}\\)"],
      answer: 0
    },
    {
      tier: 'red',
      q: 'The length of the arc of \\(x=\\cos t,\\;y=\\sin t\\) from \\(t=0\\) to \\(t=\\pi/2\\) is computed using \\(\\int_0^{\\pi/2}\\sqrt{\\dot x^2+\\dot y^2}\\,dt\\). The result is:',
      options: ['\\(2\\)', '\\(\\frac{\\pi}{2}\\)', '\\(\\pi\\)', '\\(1\\)'],
      answer: 1
    },
    {
      tier: 'red',
      q: 'For \\(x = t - \\sin t,\\; y = 1 - \\cos t\\) (a cycloid), where does \\(\\frac{dy}{dx}\\) not exist (vertical tangent)?',
      options: ['\\(t = \\pi\\)', '\\(t = \\pi/4\\)', '\\(t = 0, \\pm 2\\pi, \\pm 4\\pi, \\ldots\\)', '\\(t = \\pi/2\\)'],
      answer: 2
    },
  ],

  // ─────────────────────────────────────────────
  // P18: DIFFERENTIATION (YEAR 2)
  // ─────────────────────────────────────────────
  P18: [
    // GREEN (12)
    {
      tier: 'green',
      q: 'What is \\(\\frac{d}{dx}(e^x)\\)?',
      options: ['\\(xe^{x-1}\\)', '\\(e^{x+1}\\)', '\\(\\frac{e^x}{x}\\)', '\\(e^x\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'What is \\(\\frac{d}{dx}(\\ln x)\\)?',
      options: ['\\(\\frac{1}{x}\\)', '\\(\\ln x\\)', '\\(x\\ln x\\)', '\\(\\frac{1}{x^2}\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'What is \\(\\frac{d}{dx}(\\sin x)\\)?',
      options: ['\\(\\sec^2 x\\)', '\\(\\cos x\\)', '\\(-\\cos x\\)', '\\(-\\sin x\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'What is \\(\\frac{d}{dx}(\\tan x)\\)?',
      options: ['\\(-\\csc^2 x\\)', '\\(\\cos^2 x\\)', '\\(\\sec^2 x\\)', '\\(\\sec x\\tan x\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'The product rule states that \\(\\frac{d}{dx}(uv)\\) equals:',
      options: ["\\(u\\frac{du}{dx} + v\\frac{dv}{dx}\\)", "\\(\\frac{u}{v}\\frac{dv}{dx}\\)", "\\(uv\\frac{d}{dx}\\)", "\\(u\\frac{dv}{dx} + v\\frac{du}{dx}\\)"],
      answer: 3
    },
    {
      tier: 'green',
      q: 'If \\(f\'\'(x) > 0\\) at a stationary point, the point is a:',
      options: ['Local minimum', 'Local maximum', 'Point of inflection', 'Saddle point'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'What is \\(\\frac{d}{dx}(a^x)\\)?',
      options: ['\\(\\frac{a^x}{\\ln a}\\)', '\\(a^x \\ln a\\)', '\\(xa^{x-1}\\)', '\\(a^x\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The chain rule for \\(y = f(g(x))\\) gives \\(\\frac{dy}{dx} = \\)?',
      options: ['\\(f(g\'(x))\\)', '\\(f\'(g(x)) + g\'(x)\\)', '\\(f\'(g(x)) \\cdot g\'(x)\\)', '\\(f\'(x) \\cdot g\'(x)\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'Implicit differentiation of \\(y^2\\) with respect to \\(x\\) gives:',
      options: ['\\(2y\\)', '\\(y^2\\frac{dy}{dx}\\)', '\\(\\frac{1}{2y}\\)', '\\(2y\\frac{dy}{dx}\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'If \\(\\frac{dV}{dt} = 4\\) and \\(\\frac{dV}{dr} = 3r^2\\), then \\(\\frac{dr}{dt}\\) when \\(r=2\\) is:',
      options: ['\\(\\frac{1}{3}\\)', '\\(\\frac{4}{3}\\)', '\\(3\\)', '\\(\\frac{1}{12}\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'The quotient rule for \\(\\frac{u}{v}\\) gives:',
      options: ['\\(\\frac{du/dx}{dv/dx}\\)', '\\(\\frac{v\\,du/dx - u\\,dv/dx}{v^2}\\)', '\\(\\frac{u\\,dv/dx - v\\,du/dx}{v^2}\\)', '\\(\\frac{v\\,du/dx + u\\,dv/dx}{v^2}\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'What is \\(\\frac{d}{dx}(\\cos x)\\)?',
      options: ['\\(\\sec^2 x\\)', '\\(-\\cos x\\)', '\\(-\\sin x\\)', '\\(\\sin x\\)'],
      answer: 2
    },
    // AMBER (12)
    {
      tier: 'amber',
      q: 'Differentiate \\(y = x^2 e^{3x}\\).',
      options: ['\\(2xe^{3x}\\)', '\\(3x^2e^{3x}\\)', '\\(e^{3x}(6x^2+2x)\\)', '\\(e^{3x}(2x + 3x^2)\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find \\(\\frac{dy}{dx}\\) for \\(y = \\sin(x^2 + 1)\\).',
      options: ['\\(2x\\cos(x^2+1)\\)', '\\(\\cos(x^2+1)\\)', '\\(2x\\sin(x^2+1)\\)', '\\(-2x\\cos(x^2+1)\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'Find \\(\\frac{dy}{dx}\\) for \\(x^2 + y^2 = 16\\).',
      options: ['\\(\\frac{y}{x}\\)', '\\(-\\frac{x}{y}\\)', '\\(\\frac{x}{y}\\)', '\\(-\\frac{y}{x}\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Differentiate \\(y = \\frac{\\sin x}{x^2}\\) using the quotient rule.',
      options: ['\\(\\frac{\\cos x}{x^2}\\)', '\\(\\frac{x^2\\cos x - 2x\\sin x}{x^2}\\)', '\\(\\frac{x\\cos x - 2\\sin x}{x^3}\\)', '\\(\\frac{\\cos x}{2x}\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'A sphere has volume \\(V = \\frac{4}{3}\\pi r^3\\). If \\(\\frac{dV}{dt} = 10\\), find \\(\\frac{dr}{dt}\\) when \\(r = 3\\).',
      options: ['\\(\\frac{10}{9\\pi}\\)', '\\(\\frac{10}{3\\pi}\\)', '\\(\\frac{1}{36\\pi}\\)', '\\(\\frac{10}{36\\pi} = \\frac{5}{18\\pi}\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Differentiate \\(y = \\ln(\\sin x)\\).',
      options: ['\\(\\cot x\\)', '\\(\\frac{1}{\\sin x}\\)', '\\(\\cos x\\)', '\\(-\\cot x\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: "Find \\(\\frac{dy}{dx}\\) where \\(x^3 + y^3 = 6xy\\).",
      options: ["\\(\\frac{2y-x^2}{y^2}\\)","\\(\\frac{2y - x^2}{y^2 - 2x}\\)","\\(\\frac{x^2 - 2y}{y^2 - 2x}\\)","\\(\\frac{y-x^2}{y^2-x}\\)"],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Differentiate \\(y = e^{\\cos x}\\).',
      options: ['\\(-e^{\\cos x}\\)', '\\(e^{\\cos x}\\sin x\\)', '\\(-\\sin x \\cdot e^{\\cos x}\\)', '\\(\\cos x \\cdot e^{\\cos x}\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Find the second derivative of \\(y = x\\ln x\\).',
      options: ['\\(\\ln x + 1\\)', '\\(\\frac{1}{x} + 1\\)', '\\(\\ln x\\)', '\\(\\frac{1}{x}\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: "Find the gradient of \\(x^2 + 3xy + y^2 = 7\\) at the point \\((1, 1)\\).",
      options: ["\\(-1\\)","\\(1\\)","\\(-5\\)","\\(\\frac{1}{5}\\)"],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'Differentiate \\(y = \\tan^2 x\\) using the chain rule.',
      options: ['\\(\\sec^4 x\\)', '\\(2\\tan x \\sec^2 x\\)', '\\(2\\tan x\\)', '\\(\\sec^2(2x)\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Water drains from a cylinder of radius 5 cm. If \\(\\frac{dV}{dt} = -20\\pi\\) cm³/s, find \\(\\frac{dh}{dt}\\).',
      options: ['\\(-\\frac{20}{5}\\) cm/s', '\\(-\\frac{1}{5}\\) cm/s', '\\(-\\frac{4}{5}\\) cm/s', '\\(-4\\pi\\) cm/s'],
      answer: 2
    },
    // RED (6)
    {
      tier: 'red',
      q: 'Find all stationary points of \\(y = xe^{-x^2}\\).',
      options: ['\\(x = 0\\) and \\(x = 1\\)', '\\(x = \\pm 1\\)', '\\(x = 0\\) only', '\\(x = \\pm\\frac{1}{\\sqrt{2}}\\)'],
      answer: 3
    },
    {
      tier: 'red',
      q: 'For \\(y = x^x\\), find \\(\\frac{dy}{dx}\\).',
      options: ['\\(x^x(\\ln x + 1)\\)', '\\(x \\cdot x^{x-1}\\)', '\\(x^x \\ln x\\)', '\\(x^x / x\\)'],
      answer: 0
    },
    {
      tier: 'red',
      q: 'Using implicit differentiation, find \\(\\frac{d^2y}{dx^2}\\) for \\(x^2 + y^2 = r^2\\) at a general point.',
      options: ['\\(\\frac{r^2}{y^3}\\)', '\\(-\\frac{r^2}{y^3}\\)', '\\(-\\frac{1}{y}\\)', '\\(-\\frac{x^2}{y^3}\\)'],
      answer: 1
    },
    {
      tier: 'red',
      q: "The curve \\(e^{xy} = 2x + y + 1\\) passes through \\((0, 0)\\). Find \\(\\frac{dy}{dx}\\) at the origin.",
      options: ["\\(1\\)","\\(0\\)","\\(-2\\)","\\(2\\)"],
      answer: 2
    },
    {
      tier: 'red',
      q: 'Differentiate \\(y = \\sin^{-1}(2x)\\).',
      options: ['\\(\\frac{1}{\\sqrt{1-4x^2}}\\)', '\\(\\frac{2}{\\sqrt{1-2x}}\\)', '\\(\\frac{1}{1+4x^2}\\)', '\\(\\frac{2}{\\sqrt{1-4x^2}}\\)'],
      answer: 3
    },
    {
      tier: 'red',
      q: "A particle moves so that \\(x = \\sin^2 t,\\; y = \\cos t\\). Find the rate of change of \\(y\\) with respect to \\(x\\) when \\(t = \\pi/3\\).",
      options: ["\\(-1\\)","\\(-\\frac{\\sqrt{3}}{2}\\)","\\(-\\frac{1}{2}\\)","\\(-\\frac{1}{\\sqrt{3}}\\)"],
      answer: 0
    },
  ],

  // ─────────────────────────────────────────────
  // P19: NUMERICAL METHODS
  // ─────────────────────────────────────────────
  P19: [
    // GREEN (12)
    {
      tier: 'green',
      q: 'A sign change in \\(f(x)\\) over an interval \\([a,b]\\) implies a root provided:',
      options: ['\\(f\\) is differentiable at both ends', '\\(f\\) is continuous on \\([a,b]\\)', '\\(f\\) is positive at \\(a\\)', '\\(f\\) has no turning points'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The Newton-Raphson formula is:',
      options: ['\\(x_{n+1} = x_n + \\frac{f(x_n)}{f\'(x_n)}\\)', '\\(x_{n+1} = \\frac{f(x_n)}{f\'(x_n)}\\)', '\\(x_{n+1} = x_n - \\frac{f(x_n)}{f\'(x_n)}\\)', '\\(x_{n+1} = x_n - f(x_n)\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'Fixed-point iteration \\(x_{n+1} = g(x_n)\\) converges near root \\(\\alpha\\) when:',
      options: ['\\(|g\'(\\alpha)| > 1\\)', '\\(g\'(\\alpha) = 0\\)', '\\(g\'(\\alpha) = 1\\)', '\\(|g\'(\\alpha)| < 1\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'The trapezium rule with \\(n\\) strips has step size:',
      options: ['\\(h = \\frac{b-a}{n}\\)', '\\(h = \\frac{b+a}{n}\\)', '\\(h = \\frac{n}{b-a}\\)', '\\(h = (b-a)n\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'For \\(f(1) = -2\\) and \\(f(2) = 5\\), a root of \\(f(x) = 0\\) exists in:',
      options: ['Cannot be determined', '\\((1, 2)\\)', '\\((0, 1)\\)', '\\((2, 3)\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'Newton-Raphson fails when the starting point is near:',
      options: ['A maximum of \\(f\'\\)', 'A zero of \\(f\'\'\\)', 'A stationary point of \\(f\\)', 'A root of \\(f\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'A cobweb diagram for fixed-point iteration occurs when:',
      options: ['\\(0 < g\'(\\alpha) < 1\\)', '\\(g\'(\\alpha) > 1\\)', '\\(g\'(\\alpha) = 0\\)', '\\(-1 < g\'(\\alpha) < 0\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'A staircase diagram for fixed-point iteration occurs when:',
      options: ['\\(0 < g\'(\\alpha) < 1\\)', '\\(-1 < g\'(\\alpha) < 0\\)', '\\(g\'(\\alpha) > 1\\)', '\\(g\'(\\alpha) < -1\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'The change of sign method fails for \\(f(x) = (x-2)^2\\) because:',
      options: ['The root is irrational', 'There is a repeated root and no sign change', 'The function is not continuous', '\\(f(2)\\) is undefined'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'In the trapezium rule, the estimate is an overestimate when \\(f\\) is:',
      options: ['Linear', 'Oscillatory', 'Convex (concave up)', 'Concave (concave down)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'The trapezium rule formula is:',
      options: ['\\(h[y_0 + y_1 + \\cdots + y_n]\\)', '\\(\\frac{h}{2}[y_0 + y_n]\\)', '\\(h[y_0 + 2y_1 + \\cdots + y_n]/3\\)', '\\(\\frac{h}{2}[y_0 + 2(y_1+\\cdots+y_{n-1}) + y_n]\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'Increasing the number of strips in the trapezium rule generally:',
      options: ['Improves the accuracy of the approximation', 'Has no effect on accuracy', 'Always makes it an underestimate', 'Doubles the error'],
      answer: 0
    },
    // AMBER (12)
    {
      tier: 'amber',
      q: "Use Newton-Raphson once on \\(f(x) = x^3 - 5\\) with \\(x_0 = 2\\). Find \\(x_1\\).",
      options: ["\\(2.5\\)","\\(1.75\\)","\\(\\frac{11}{6} \\approx 1.833\\)","\\(2.25\\)"],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Show \\(f(x) = x^3 - x - 1\\) has a root in \\((1.3, 1.4)\\). Which of the following confirms this?',
      options: ['\\(f\'(1.3) > 0\\)', '\\(f(1) < 0\\) only', '\\(f(1.3) < 0\\) and \\(f(1.4) > 0\\) with \\(f\\) continuous', '\\(f(1.35) = 0\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Apply one iteration of \\(x_{n+1} = \\sqrt[3]{x_n + 1}\\) starting at \\(x_0 = 1\\). Find \\(x_1\\).',
      options: ['\\(1\\)', '\\(\\sqrt{2}\\)', '\\(2\\)', '\\(\\sqrt[3]{2} \\approx 1.26\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Estimate \\(\\int_0^2 x^2\\,dx\\) using the trapezium rule with \\(n=4\\) strips.',
      options: ['\\(2.75\\)', '\\(2.67\\)', '\\(3.0\\)', '\\(2.5\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'The iteration \\(x_{n+1} = \\frac{3}{x_n} + 1\\) has a fixed point at \\(x = ?\\)',
      options: ['\\(x = 4\\)', '\\(x = \\frac{1+\\sqrt{13}}{2}\\)', '\\(x = 3\\)', '\\(x = 2\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Explain why the change of sign method may give a false sign change for \\(f(x) = \\frac{1}{x-2}\\) near \\(x=2\\). This is because:',
      options: ['The derivative is zero at \\(x=2\\)', '\\(f(2)=0\\)', '\\(f\\) has a discontinuity (vertical asymptote) at \\(x=2\\), not a root', '\\(f\\) has a repeated root at \\(x=2\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Use Newton-Raphson on \\(f(x) = \\cos x - x\\) with \\(x_0 = 1\\). \\(f\'(x) = -\\sin x - 1\\). Find \\(x_1\\).',
      options: ['\\(0.5\\)', '\\(1.5\\)', '\\(0.9\\)', '\\(1 - \\frac{\\cos 1 - 1}{-\\sin 1 - 1} \\approx 0.750\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'The trapezium rule gives an underestimate when applied to \\(\\int_0^{\\pi/2} \\sin x\\,dx\\) because:',
      options: ['\\(\\sin x\\) is concave on \\([0,\\pi/2]\\)', '\\(\\sin x\\) is convex on \\([0,\\pi/2]\\)', 'The function is increasing', 'The integral equals 1'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'Show that \\(g(x) = \\sqrt{x+2}\\) gives a convergent iteration for the equation \\(x^2 - x - 2 = 0\\) near \\(x=2\\). \\(g\'(x)\\) at \\(x=2\\) is:',
      options: ['\\(0\\)', '\\(\\frac{1}{4} < 1\\), so convergent', '\\(2 > 1\\), so divergent', '\\(\\frac{1}{2\\sqrt{3}}\\), divergent'],
      answer: 1
    },
    {
      tier: 'amber',
      q: "Estimate \\(\\int_1^3 \\ln x\\,dx\\) using the trapezium rule with 4 strips (\\(h=0.5\\)).",
      options: ["\\(1.100\\)","\\(1.386\\)","\\(\\approx 1.282\\)","\\(1.296\\)"],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Why does Newton-Raphson fail if applied to \\(f(x) = x^{1/3}\\) starting at \\(x_0 = 1\\)?',
      options: ['The root is not in \\((0,1)\\)', '\\(f\\) is not continuous', 'The root is irrational', 'With \\(f\'(x) = \\frac{1}{3}x^{-2/3}\\) the formula reduces to \\(x_{n+1} = -2x_n\\), so the iterates double in size and move away from the root at \\(x=0\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'To verify a root is \\(\\alpha = 2.347\\) to 3 d.p., which values of \\(f\\) should you check?',
      options: ['\\(f(2.3465)\\) and \\(f(2.3475)\\)', '\\(f(2.3)\\) and \\(f(2.4)\\)', '\\(f(2.347)\\)', '\\(f(2.34)\\) and \\(f(2.35)\\)'],
      answer: 0
    },
    // RED (6)
    {
      tier: 'red',
      q: "Apply Newton-Raphson to \\(f(x) = x^3 - 3x + 1\\) with \\(x_0 = 0\\). What happens?",
      options: ["It fails because the tangent at \\(x_0 = 0\\) is vertical","It converges quickly to the root near \\(0.347\\): \\(x_1 = \\frac{1}{3}\\), \\(x_2 \\approx 0.3472\\)","It fails because \\(f(0) = 0\\)","It fails because the function has no roots"],
      answer: 1
    },
    {
      tier: 'red',
      q: 'The trapezium rule with \\(n\\) strips approximates \\(\\int_0^1 e^{x^2}dx\\). As \\(n \\to \\infty\\), the approximation:',
      options: ['Converges to 0', 'Converges to \\(e\\)', 'Converges to the exact value \\(\\int_0^1 e^{x^2}dx\\)', 'Diverges'],
      answer: 2
    },
    {
      tier: 'red',
      q: 'A student uses \\(x_{n+1} = x_n^2 - 2\\) near \\(x = 2\\) to solve \\(x^2 - x - 2 = 0\\). What happens?',
      options: ['It converges to \\(x=2\\)', 'It converges to \\(x=-1\\)', 'It oscillates between two values', 'The iteration diverges since \\(|g\'(2)| = 4 > 1\\)'],
      answer: 3
    },
    {
      tier: 'red',
      q: 'Using \\(h = 0.25\\) and the trapezium rule, estimate \\(\\int_0^1 \\frac{1}{1+x^2}dx\\). The exact answer is \\(\\pi/4\\). The error is approximately:',
      options: ['\\(0.0026\\)', '\\(0.05\\)', '\\(0.1\\)', '\\(0\\)'],
      answer: 0
    },
    {
      tier: 'red',
      q: 'The equation \\(e^x = 3 - 2x\\) has a root in \\((0,1)\\). An appropriate rearrangement for convergent iteration is:',
      options: ['\\(x = e^x - 3\\)', '\\(x = \\frac{3 - e^x}{2}\\) (converges since \\(|g\'| = e^x/2 < 1\\) near root)', '\\(x = \\ln(3-2x)\\) (always converges)', '\\(x = 3 - e^x\\) (always converges)'],
      answer: 1
    },
    {
      tier: 'red',
      q: 'The midpoint rule uses the value at the midpoint of each strip. Compared to the trapezium rule with the same \\(n\\), the midpoint rule error is approximately:',
      options: ['Double the trapezium rule error', 'Zero for any differentiable function', 'Half the trapezium rule error but opposite sign', 'Equal to the trapezium rule error'],
      answer: 2
    },
  ],

  // ─────────────────────────────────────────────
  // P20: INTEGRATION (YEAR 2)
  // ─────────────────────────────────────────────
  P20: [
    // GREEN (12)
    {
      tier: 'green',
      q: '\\(\\int e^{3x}\\,dx\\) equals:',
      options: ['\\(3e^{3x} + C\\)', '\\(e^{3x} + C\\)', '\\(\\frac{e^{3x}}{3x} + C\\)', '\\(\\frac{1}{3}e^{3x} + C\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: '\\(\\int \\cos(2x)\\,dx\\) equals:',
      options: ['\\(\\frac{1}{2}\\sin(2x) + C\\)', '\\(-\\frac{1}{2}\\sin(2x) + C\\)', '\\(2\\sin(2x) + C\\)', '\\(-\\sin(2x) + C\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: '\\(\\int \\frac{1}{3x+1}\\,dx\\) equals:',
      options: ['\\(\\frac{1}{(3x+1)^2} + C\\)', '\\(\\frac{1}{3}\\ln|3x+1| + C\\)', '\\(3\\ln|3x+1| + C\\)', '\\(\\ln|3x+1| + C\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'In integration by parts, which of these correctly describes LIATE?',
      options: ['A method for substitution only', 'Applicable only to definite integrals', 'Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential — choose \\(u\\) as the first in this order', 'The order for choosing \\(dv\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: '\\(\\int \\sin(5x)\\,dx\\) equals:',
      options: ['\\(\\frac{1}{5}\\cos(5x) + C\\)', '\\(-5\\cos(5x) + C\\)', '\\(5\\cos(5x) + C\\)', '\\(-\\frac{1}{5}\\cos(5x) + C\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'Which of the following is a separable ODE?',
      options: ['\\(\\frac{dy}{dx} = xy\\)', '\\(\\frac{dy}{dx} = x + y\\)', '\\(\\frac{d^2y}{dx^2} = y\\)', '\\(y\\frac{d^2y}{dx^2} = 1\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: '\\(\\int \\frac{2x}{x^2+1}\\,dx\\) equals:',
      options: ['\\(\\arctan x + C\\)', '\\(\\ln(x^2+1) + C\\)', '\\(\\frac{1}{x^2+1} + C\\)', '\\(2\\ln(x^2+1) + C\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The integration by parts formula is:',
      options: ['\\(\\int uv = u\'v - uv\'\\)', '\\(\\int u\\,dv = \\frac{uv}{2}\\)', '\\(\\int u\\,dv = uv - \\int v\\,du\\)', '\\(\\int u\\,dv = uv + \\int v\\,du\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: '\\(\\int a^x\\,dx\\) equals:',
      options: ['\\(a^x \\ln a + C\\)', '\\(\\frac{a^{x+1}}{x+1} + C\\)', '\\(xa^{x-1} + C\\)', '\\(\\frac{a^x}{\\ln a} + C\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'Solving \\(\\frac{dy}{dx} = 2y\\) by separation of variables gives:',
      options: ['\\(y = Ae^{2x}\\)', '\\(y = A + 2x\\)', '\\(y = 2ye^x\\)', '\\(y = Ae^{x/2}\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'When changing limits in definite integration by substitution with \\(u = x^2\\), if \\(x\\) goes from 0 to 2, \\(u\\) goes from:',
      options: ['2 to 4', '0 to 4', '0 to 2', '0 to \\(\\sqrt{2}\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The general solution of \\(\\frac{dN}{dt} = kN\\) is:',
      options: ['\\(N = ke^{N_0 t}\\)', '\\(N = \\frac{N_0}{kt}\\)', '\\(N = N_0 e^{kt}\\)', '\\(N = N_0 + kt\\)'],
      answer: 2
    },
    // AMBER (12)
    {
      tier: 'amber',
      q: 'Find \\(\\int xe^x\\,dx\\).',
      options: ['\\(xe^x + C\\)', '\\(e^x(x+1) + C\\)', '\\(\\frac{x^2e^x}{2} + C\\)', '\\(e^x(x-1) + C\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find \\(\\int x\\sin x\\,dx\\).',
      options: ['\\(\\sin x - x\\cos x + C\\)', '\\(-\\sin x + x\\cos x + C\\)', '\\(x\\cos x + C\\)', '\\(-x\\cos x + C\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'Use substitution \\(u = 2x+1\\) to find \\(\\int x(2x+1)^5\\,dx\\).',
      options: ['\\(\\frac{(2x+1)^7}{14} + C\\)', '\\(\\frac{(2x+1)^7}{28} - \\frac{(2x+1)^6}{24} + C\\)', '\\(\\frac{x(2x+1)^6}{12} + C\\)', '\\(\\frac{(2x+1)^6}{12} + C\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Decompose \\(\\frac{1}{(x-1)(x+2)}\\) into partial fractions.',
      options: ['\\(\\frac{1}{x+2} - \\frac{1}{x-1}\\)', '\\(\\frac{1/2}{x-1} + \\frac{1/2}{x+2}\\)', '\\(\\frac{1/3}{x-1} - \\frac{1/3}{x+2}\\)', '\\(\\frac{1}{x-1} - \\frac{1}{x+2}\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Find the particular solution of \\(\\frac{dy}{dx} = \\frac{x}{y}\\) given \\(y=2\\) when \\(x=0\\).',
      options: ['\\(y = x + 2\\)', '\\(y^2 = 2x^2 + 4\\)', '\\(y = \\sqrt{x^2 + 2}\\)', '\\(y^2 = x^2 + 4\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find \\(\\int \\ln x\\,dx\\).',
      options: ['\\(x\\ln x - x + C\\)', '\\(\\frac{1}{x} + C\\)', '\\(x\\ln x + C\\)', '\\(\\frac{\\ln^2 x}{2} + C\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'Using trig identity \\(\\sin^2 x = \\frac{1-\\cos 2x}{2}\\), evaluate \\(\\int_0^{\\pi/2}\\sin^2 x\\,dx\\).',
      options: ['\\(\\pi\\)', '\\(\\frac{\\pi}{4}\\)', '\\(\\frac{\\pi}{2}\\)', '\\(\\frac{1}{2}\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Find \\(\\int \\frac{3x^2}{x^3+1}\\,dx\\).',
      options: ['\\(3\\ln|x^3+1| + C\\)', '\\(\\frac{x^3}{x^3+1} + C\\)', '\\(\\ln|x^3+1| + C\\)', '\\(\\frac{3}{x^3+1} + C\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'Solve \\(\\frac{dy}{dx} = ky\\) given \\(y(0) = 100\\) and \\(y(5) = 50\\). Find \\(k\\).',
      options: ['\\(k = -\\frac{1}{5}\\)', '\\(k = \\ln 2\\)', '\\(k = \\frac{1}{50}\\)', '\\(k = -\\frac{\\ln 2}{5}\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find \\(\\int_0^1 \\frac{1}{\\sqrt{1-x^2}}\\,dx\\).',
      options: ['\\(\\frac{\\pi}{2}\\)', '\\(\\pi\\)', '\\(1\\)', '\\(\\frac{\\pi}{4}\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'Evaluate \\(\\int_0^{\\pi} x\\cos x\\,dx\\) using integration by parts.',
      options: ['\\(-\\pi\\)', '\\(-2\\)', '\\(0\\)', '\\(2\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'A bacteria culture grows according to \\(\\frac{dP}{dt} = 0.3P\\). Initially \\(P = 500\\). After 4 hours, \\(P\\) is approximately:',
      options: ['\\(600\\)', '\\(500 \\times 4.3 = 2150\\)', '\\(500e^{1.2} \\approx 1660\\)', '\\(500 \\times 1.3^4 \\approx 1820\\)'],
      answer: 2
    },
    // RED (6)
    {
      tier: 'red',
      q: 'Find \\(\\int e^x\\sin x\\,dx\\) using integration by parts twice.',
      options: ['\\(\\frac{e^x(\\sin x + \\cos x)}{2} + C\\)', '\\(e^x\\sin x - e^x\\cos x + C\\)', '\\(e^x\\cos x + C\\)', '\\(\\frac{e^x(\\sin x - \\cos x)}{2} + C\\)'],
      answer: 3
    },
    {
      tier: 'red',
      q: 'Find \\(\\int \\frac{x^2+1}{(x-1)(x^2+1)}\\,dx\\). First simplify using partial fractions.',
      options: ['\\(\\ln|x-1| + C\\)', '\\(\\ln|x-1| + \\arctan x + C\\)', '\\(\\frac{1}{x-1} + C\\)', '\\(\\ln(x^2+1) + C\\)'],
      answer: 0
    },
    {
      tier: 'red',
      q: 'Solve the ODE \\(\\frac{dy}{dx} = \\frac{1+y^2}{1+x^2}\\) with \\(y(0) = 0\\).',
      options: ['\\(y = \\sin x\\)', '\\(y = \\tan(\\arctan x) = x\\)', '\\(y = \\arctan x\\)', '\\(y = \\frac{x}{1+x^2}\\)'],
      answer: 1
    },
    {
      tier: 'red',
      q: "Using the substitution \\(t = \\tan(x/2)\\), which of these correctly transforms \\(\\int \\frac{1}{1+\\sin x}\\,dx\\)?",
      options: ["\\(\\int \\frac{2}{(1+t^2)(1+t)}\\,dt\\)","\\(\\int \\frac{1}{1+t}\\,dt\\)","\\(\\int \\frac{2}{(1+t)^2}\\,dt\\)","\\(\\int \\frac{1}{(1+t)^2}\\,dt\\)"],
      answer: 2
    },
    {
      tier: 'red',
      q: 'Newton\'s law of cooling: \\(\\frac{d\\theta}{dt} = -k(\\theta - 20)\\), \\(\\theta(0) = 80\\), \\(\\theta(10) = 60\\). Find \\(\\theta(20)\\).',
      options: ['\\(40\\)°C', '\\(50\\)°C', '\\(55\\)°C', '\\(20 + 60 \\cdot \\left(\\frac{40}{60}\\right)^2 = 46.\\overline{6}\\)°C'],
      answer: 3
    },
    {
      tier: 'red',
      q: 'Find \\(\\int_1^e \\frac{(\\ln x)^2}{x}\\,dx\\).',
      options: ['\\(\\frac{1}{3}\\)', '\\(1\\)', '\\(\\frac{1}{2}\\)', '\\(e-1\\)'],
      answer: 0
    },
  ],

  // ─────────────────────────────────────────────
  // P21: VECTORS (3D)
  // ─────────────────────────────────────────────
  P21: [
    // GREEN (12)
    {
      tier: 'green',
      q: 'The magnitude of \\(\\mathbf{a} = \\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}\\) is:',
      options: ['\\(25\\)', '\\(5\\)', '\\(7\\)', '\\(\\sqrt{7}\\)'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The dot product \\(\\mathbf{a}\\cdot\\mathbf{b} = 0\\) implies:',
      options: ['\\(|\\mathbf{a}| = |\\mathbf{b}|\\)', '\\(\\mathbf{a} = \\mathbf{b}\\)', '\\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) are perpendicular', '\\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) are parallel'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'The equation of a line through \\(\\mathbf{a}\\) with direction \\(\\mathbf{b}\\) is:',
      options: ['\\(\\mathbf{r} = t\\mathbf{a} + \\mathbf{b}\\)', '\\(\\mathbf{r} = \\mathbf{a} \\cdot t\\mathbf{b}\\)', '\\(\\mathbf{r} = \\mathbf{a} - \\mathbf{b}\\)', '\\(\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'The dot product \\(\\begin{pmatrix}2\\\\1\\\\-3\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\4\\\\2\\end{pmatrix}\\) equals:',
      options: ['\\(0\\)', '\\(6\\)', '\\(-4\\)', '\\(2\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'Two lines are parallel when their direction vectors are:',
      options: ['Unit vectors', 'Scalar multiples of each other', 'Perpendicular', 'Equal in magnitude'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The unit vector in the direction of \\(\\begin{pmatrix}0\\\\3\\\\4\\end{pmatrix}\\) is:',
      options: ['\\(\\begin{pmatrix}0\\\\1/3\\\\1/4\\end{pmatrix}\\)', '\\(\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\)', '\\(\\begin{pmatrix}0\\\\3/5\\\\4/5\\end{pmatrix}\\)', '\\(\\begin{pmatrix}0\\\\3\\\\4\\end{pmatrix}\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: 'The distance between \\(A(1,0,2)\\) and \\(B(4,3,2)\\) is:',
      options: ['\\(\\sqrt{13}\\)', '\\(6\\)', '\\(\\sqrt{22}\\)', '\\(3\\sqrt{2}\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'In 3D, the position vector of a point \\(P(x,y,z)\\) is:',
      options: ['\\(\\overrightarrow{OP} = x\\mathbf{i}+y\\mathbf{j}+z\\mathbf{k}\\)', '\\(x+y+z\\)', '\\(\\begin{pmatrix}y\\\\x\\\\z\\end{pmatrix}\\)', '\\(|x|+|y|+|z|\\)'],
      answer: 0
    },
    {
      tier: 'green',
      q: 'Skew lines are lines that are:',
      options: ['Equal in direction', 'Not parallel and not intersecting', 'Parallel and non-intersecting', 'Intersecting but not perpendicular'],
      answer: 1
    },
    {
      tier: 'green',
      q: 'The angle \\(\\theta\\) between vectors \\(\\mathbf{a}\\) and \\(\\mathbf{b}\\) satisfies:',
      options: ['\\(\\sin\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}\\)', '\\(\\cos\\theta = \\frac{|\\mathbf{a}|}{|\\mathbf{b}|}\\)', '\\(\\cos\\theta = \\frac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}\\)', '\\(\\cos\\theta = \\mathbf{a}\\cdot\\mathbf{b}\\)'],
      answer: 2
    },
    {
      tier: 'green',
      q: '\\(\\mathbf{i}\\cdot\\mathbf{j}\\) equals:',
      options: ['\\(1\\)', '\\(\\mathbf{k}\\)', '\\(-1\\)', '\\(0\\)'],
      answer: 3
    },
    {
      tier: 'green',
      q: 'The Cartesian form of the line \\(\\mathbf{r} = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\4\\end{pmatrix}\\) is:',
      options: ['\\(\\frac{x-1}{2}=\\frac{y-2}{-1}=\\frac{z-3}{4}\\)', '\\(\\frac{x+1}{2}=\\frac{y+2}{-1}=\\frac{z+3}{4}\\)', '\\(\\frac{x-2}{1}=\\frac{y+1}{2}=\\frac{z-4}{3}\\)', '\\(x-1=2(y-2)\\)'],
      answer: 0
    },
    // AMBER (12)
    {
      tier: 'amber',
      q: 'Find the angle between \\(\\mathbf{a}=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\) and \\(\\mathbf{b}=\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\).',
      options: ['\\(30°\\)', '\\(60°\\)', '\\(45°\\)', '\\(90°\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Find a vector perpendicular to both \\(\\mathbf{a}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) and \\(\\mathbf{b}=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\).',
      options: ['\\(\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}\\)', '\\(\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}\\)', '\\(\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\\)', '\\(\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'The line \\(\\ell_1: \\mathbf{r} = \\begin{pmatrix}0\\\\1\\\\2\\end{pmatrix}+s\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\) and \\(\\ell_2: \\mathbf{r} = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\2\\\\2\\end{pmatrix}\\) are:',
      options: ['Skew', 'Perpendicular', 'Parallel (same direction)', 'Identical'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find the equation of the line through \\(A(2,1,-1)\\) and \\(B(5,0,3)\\).',
      options: ['\\(\\mathbf{r}=\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}+t\\begin{pmatrix}3\\\\-1\\\\4\\end{pmatrix}\\)', '\\(\\mathbf{r}=\\begin{pmatrix}3\\\\-1\\\\4\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\)', '\\(\\mathbf{r}=t\\begin{pmatrix}5\\\\0\\\\3\\end{pmatrix}\\)', '\\(\\mathbf{r}=\\begin{pmatrix}2\\\\0\\\\-1\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: "Find \\(\\lambda\\) if \\(\\begin{pmatrix}\\lambda\\\\2\\\\1\\end{pmatrix}\\) is perpendicular to \\(\\begin{pmatrix}3\\\\-1\\\\1\\end{pmatrix}\\).",
      options: ["\\(\\lambda = -1\\)","\\(\\lambda = \\frac{1}{3}\\)","\\(\\lambda = -\\frac{1}{3}\\)","\\(\\lambda = 1\\)"],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'The angle between lines with directions \\(\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) and \\(\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\) is:',
      options: ['\\(60°\\)', '\\(90°\\)', '\\(45°\\)', '\\(30°\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: "Lines \\(\\ell_1\\): passes through \\((1,0,0)\\) with direction \\(\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\) and \\(\\ell_2\\): passes through \\((0,1,1)\\) with direction \\(\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}\\). Do they intersect?",
      options: ["Yes, at \\((0,0,0)\\)","No, they are parallel","Yes, at \\((1,1,0)\\)","No, they are skew"],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Find the acute angle between lines \\(\\frac{x-1}{2}=\\frac{y}{-1}=\\frac{z+3}{2}\\) and \\(\\frac{x}{1}=\\frac{y-1}{2}=\\frac{z}{2}\\).',
      options: ['\\(\\cos^{-1}\\left(\\frac{4}{9}\\right) \\approx 63.6°\\)', '\\(90°\\)', '\\(45°\\)', '\\(0°\\)'],
      answer: 0
    },
    {
      tier: 'amber',
      q: 'The point \\((3, 5, t)\\) lies on the line \\(\\mathbf{r} = \\begin{pmatrix}1\\\\3\\\\2\\end{pmatrix}+s\\begin{pmatrix}2\\\\2\\\\-1\\end{pmatrix}\\). Find \\(t\\).',
      options: ['\\(t = 0\\)', '\\(t = 1\\)', '\\(t = -1\\)', '\\(t = 2\\)'],
      answer: 1
    },
    {
      tier: 'amber',
      q: 'Point \\(P\\) lies on \\(\\mathbf{r} = \\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}\\). If \\(|\\overrightarrow{OP}|=6\\), find \\(P\\).',
      options: ['\\((1, 2, 2)\\)', '\\((6, 0, 0)\\)', '\\((2, 4, 4)\\)', '\\((3, 6, 6)\\)'],
      answer: 2
    },
    {
      tier: 'amber',
      q: 'The line through \\((1,1,1)\\) with direction \\(\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}\\) intersects the plane \\(z=0\\). At what point?',
      options: ['\\((0, 2, 0)\\)', '\\((2, 0, 0)\\)', '\\((1, 1, 0)\\)', '\\(\\left(\\frac{1}{2}, \\frac{3}{2}, 0\\right)\\)'],
      answer: 3
    },
    {
      tier: 'amber',
      q: 'Which condition makes lines \\(\\ell_1\\) and \\(\\ell_2\\) skew rather than intersecting?',
      options: ['Direction vectors are not parallel AND the system of equations for intersection has no solution', 'Direction vectors are parallel', 'Both lines lie in the same plane', 'The dot product of directions is zero'],
      answer: 0
    },
    // RED (6)
    {
      tier: 'red',
      q: 'Find the shortest distance from the point \\(P(1,0,0)\\) to the line \\(\\mathbf{r} = t\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\).',
      options: ['\\(\\frac{1}{2}\\)', '\\(\\frac{1}{\\sqrt{2}}\\)', '\\(1\\)', '\\(\\sqrt{2}\\)'],
      answer: 1
    },
    {
      tier: 'red',
      q: 'Show that the lines \\(\\mathbf{r}_1 = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+s\\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}\\) and \\(\\mathbf{r}_2=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}\\) are skew. The inconsistent component when you try to solve is:',
      options: ['The \\(y\\)-equation', 'All three are consistent', 'The \\(z\\)-equation is inconsistent', 'The \\(x\\)-equation'],
      answer: 2
    },
    {
      tier: 'red',
      q: 'Find the position vector of the foot of the perpendicular from \\(B(3,4,5)\\) to the line \\(\\mathbf{r}=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\).',
      options: ['\\(\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}\\)', '\\(\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}\\)', '\\(\\begin{pmatrix}5\\\\5\\\\5\\end{pmatrix}\\)', '\\(\\begin{pmatrix}4\\\\4\\\\4\\end{pmatrix}\\)'],
      answer: 3
    },
    {
      tier: 'red',
      q: 'Two lines intersect at \\(P\\). Line \\(\\ell_1\\) has direction \\(\\mathbf{d}_1 = \\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}\\) and \\(\\ell_2\\) has direction \\(\\mathbf{d}_2=\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\). The cosine of the acute angle between them is:',
      options: ['\\(\\frac{2}{\\sqrt{5}\\cdot\\sqrt{2}} = \\frac{2}{\\sqrt{10}}\\)', '\\(\\frac{1}{\\sqrt{10}}\\)', '\\(\\frac{3}{\\sqrt{10}}\\)', '\\(0\\)'],
      answer: 0
    },
    {
      tier: 'red',
      q: 'The midpoint \\(M\\) of \\(A(1,3,-1)\\) and \\(B(5,-1,3)\\) has position vector:',
      options: ['\\(\\begin{pmatrix}2\\\\4\\\\-1\\end{pmatrix}\\)', '\\(\\begin{pmatrix}3\\\\1\\\\1\\end{pmatrix}\\)', '\\(\\begin{pmatrix}4\\\\2\\\\2\\end{pmatrix}\\)', '\\(\\begin{pmatrix}6\\\\2\\\\2\\end{pmatrix}\\)'],
      answer: 1
    },
    {
      tier: 'red',
      q: 'A line passes through \\(A(2,1,3)\\) with direction \\(\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}\\). Another passes through \\(B(3,0,4)\\) with direction \\(\\begin{pmatrix}2\\\\4\\\\-2\\end{pmatrix}\\). These lines are:',
      options: ['Skew', 'Intersecting', 'Parallel but not the same line', 'The same line'],
      answer: 2
    },
  ],
};
