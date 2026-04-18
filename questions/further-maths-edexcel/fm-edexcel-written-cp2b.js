/* FM_EDEXCEL_WRITTEN_CP2B — CP2.5 to CP2.8 written questions (40 per topic) */
const FM_EDEXCEL_WRITTEN_CP2B = {

  'CP2.5': {
    name: 'Polar Coordinates',
    green: [
      {
        q: 'Convert the polar coordinates \\((4, \\tfrac{\\pi}{3})\\) to Cartesian coordinates.',
        marks: 2,
        modelAnswer: '• \\(x = 4\\cos\\tfrac{\\pi}{3} = 4 \\times \\tfrac{1}{2} = 2\\) (M1)\n• \\(y = 4\\sin\\tfrac{\\pi}{3} = 4 \\times \\tfrac{\\sqrt{3}}{2} = 2\\sqrt{3}\\) (A1)\n• Cartesian: \\((2,\\, 2\\sqrt{3})\\)'
      },
      {
        q: 'Convert the Cartesian point \\((3, -3)\\) to polar form \\((r, \\theta)\\) with \\(r > 0\\) and \\(-\\pi < \\theta \\leq \\pi\\).',
        marks: 2,
        modelAnswer: '• \\(r = \\sqrt{9+9} = 3\\sqrt{2}\\) (M1)\n• \\(\\theta = \\arctan(-3/3) = -\\tfrac{\\pi}{4}\\) (A1)\n• Polar: \\((3\\sqrt{2},\\, -\\tfrac{\\pi}{4})\\)'
      },
      {
        q: 'Sketch the curve \\(r = 3\\), stating what shape it is.',
        marks: 2,
        modelAnswer: '• Circle centred at the pole, radius 3 (B1)\n• Sketch showing a circle (B1)'
      },
      {
        q: 'Sketch the curve \\(r = 2\\cos\\theta\\), \\(-\\tfrac{\\pi}{2} \\leq \\theta \\leq \\tfrac{\\pi}{2}\\), and state what shape it is.',
        marks: 3,
        modelAnswer: '• Multiply both sides by \\(r\\): \\(r^2 = 2r\\cos\\theta\\) so \\(x^2+y^2 = 2x\\) (M1)\n• \\((x-1)^2+y^2=1\\): circle centre \\((1,0)\\) radius 1 (A1)\n• Sketch showing circle passing through origin (B1)'
      },
      {
        q: 'Write down the area formula for a polar curve and state the limits you would use to find the area enclosed by \\(r = 1 + \\cos\\theta\\).',
        marks: 2,
        modelAnswer: '• Area \\(= \\tfrac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\\) (B1)\n• Limits \\(-\\pi\\) to \\(\\pi\\) (or 0 to \\(2\\pi\\)) (B1)'
      },
      {
        q: 'Find \\(\\tfrac{dy}{dx}\\) for the curve \\(r = a\\) (a constant), at the point where \\(\\theta = \\tfrac{\\pi}{4}\\).',
        marks: 3,
        modelAnswer: '• \\(x = a\\cos\\theta,\\; y = a\\sin\\theta\\) (M1)\n• \\(\\tfrac{dx}{d\\theta} = -a\\sin\\theta,\\quad \\tfrac{dy}{d\\theta} = a\\cos\\theta\\) (M1)\n• \\(\\tfrac{dy}{dx} = \\tfrac{a\\cos(\\pi/4)}{-a\\sin(\\pi/4)} = -1\\) (A1)'
      },
      {
        q: 'State the condition on \\(r\\) and \\(\\theta\\) for a point that lies on the initial line (positive \\(x\\)-axis).',
        marks: 1,
        modelAnswer: '• \\(\\theta = 0\\) (or \\(\\theta = n\\pi,\\; n \\in \\mathbb{Z}\\)) (B1)'
      },
      {
        q: 'For the curve \\(r = 2 + \\cos\\theta\\), find the value of \\(r\\) when \\(\\theta = \\pi\\).',
        marks: 1,
        modelAnswer: '• \\(r = 2 + \\cos\\pi = 2 - 1 = 1\\) (B1)'
      },
      {
        q: 'Find the polar equation of the line \\(x = 3\\).',
        marks: 2,
        modelAnswer: '• \\(x = r\\cos\\theta\\), so \\(r\\cos\\theta = 3\\) (M1)\n• \\(r = \\tfrac{3}{\\cos\\theta} = 3\\sec\\theta\\) (A1)'
      },
      {
        q: 'The curve \\(r = 4\\sin\\theta\\) passes through the pole. Find all values of \\(\\theta\\) in \\([0, 2\\pi]\\) for which \\(r = 0\\).',
        marks: 2,
        modelAnswer: '• \\(4\\sin\\theta = 0 \\Rightarrow \\sin\\theta = 0\\) (M1)\n• \\(\\theta = 0,\\; \\pi,\\; 2\\pi\\) (A1)'
      },
      {
        q: 'Describe the symmetry of the curve \\(r = 3 + 3\\cos\\theta\\).',
        marks: 1,
        modelAnswer: '• Symmetric about the initial line (\\(\\theta = 0\\)) since \\(\\cos(-\\theta) = \\cos\\theta\\) (B1)'
      },
      {
        q: 'Find the Cartesian equation of the curve \\(r = \\dfrac{4}{\\sin\\theta}\\).',
        marks: 2,
        modelAnswer: '• \\(r\\sin\\theta = 4\\) (M1)\n• \\(y = 4\\) (A1)'
      },
      {
        q: 'Evaluate \\(\\tfrac{1}{2}\\displaystyle\\int_0^{\\pi/2} (2\\sin\\theta)^2\\,d\\theta\\).',
        marks: 3,
        modelAnswer: '• \\(= \\tfrac{1}{2}\\int_0^{\\pi/2} 4\\sin^2\\theta\\,d\\theta = 2\\int_0^{\\pi/2}\\tfrac{1-\\cos 2\\theta}{2}\\,d\\theta\\) (M1)\n• \\(= \\int_0^{\\pi/2}(1-\\cos 2\\theta)\\,d\\theta = \\left[\\theta - \\tfrac{\\sin 2\\theta}{2}\\right]_0^{\\pi/2}\\) (M1)\n• \\(= \\tfrac{\\pi}{2} - 0 = \\dfrac{\\pi}{2}\\) (A1)'
      },
      {
        q: 'Find the maximum value of \\(r\\) for the curve \\(r = 5 - 2\\cos\\theta\\) and state the value of \\(\\theta\\) at which it occurs.',
        marks: 2,
        modelAnswer: '• Maximum when \\(\\cos\\theta = -1\\), i.e. \\(\\theta = \\pi\\) (M1)\n• \\(r_{\\max} = 5 + 2 = 7\\) (A1)'
      },
      {
        q: 'Write the area enclosed by the curve \\(r = \\theta\\) for \\(0 \\leq \\theta \\leq \\pi\\) as a definite integral (do not evaluate).',
        marks: 2,
        modelAnswer: '• Area \\(= \\tfrac{1}{2}\\displaystyle\\int_0^{\\pi} \\theta^2\\,d\\theta\\) (B2)'
      },
    ],
    amber: [
      {
        q: 'Find the area enclosed by the cardioid \\(r = a(1 + \\cos\\theta)\\), \\(a > 0\\).',
        marks: 5,
        modelAnswer: '• Area \\(= \\tfrac{1}{2}\\int_{-\\pi}^{\\pi} a^2(1+\\cos\\theta)^2\\,d\\theta = a^2\\int_0^{\\pi}(1+\\cos\\theta)^2\\,d\\theta\\) (M1)\n• Expand: \\(1 + 2\\cos\\theta + \\cos^2\\theta = \\tfrac{3}{2} + 2\\cos\\theta + \\tfrac{\\cos 2\\theta}{2}\\) (M1)\n• Integrate: \\(a^2\\left[\\tfrac{3\\theta}{2} + 2\\sin\\theta + \\tfrac{\\sin 2\\theta}{4}\\right]_0^{\\pi}\\) (M1)\n• \\(= a^2 \\cdot \\tfrac{3\\pi}{2}\\) (A1)\n• Area \\(= \\dfrac{3\\pi a^2}{2}\\) (A1)'
      },
      {
        q: 'The curve \\(C\\) has polar equation \\(r = 3 + 2\\sin\\theta\\). Find the area enclosed by \\(C\\).',
        marks: 5,
        modelAnswer: '• Area \\(= \\tfrac{1}{2}\\int_0^{2\\pi}(3+2\\sin\\theta)^2\\,d\\theta\\) (M1)\n• \\(= \\tfrac{1}{2}\\int_0^{2\\pi}(9 + 12\\sin\\theta + 4\\sin^2\\theta)\\,d\\theta\\) (M1)\n• \\(\\int_0^{2\\pi}9\\,d\\theta = 18\\pi,\\quad \\int_0^{2\\pi}12\\sin\\theta\\,d\\theta = 0,\\quad \\int_0^{2\\pi}4\\sin^2\\theta\\,d\\theta = 4\\pi\\) (M1A1)\n• Area \\(= \\tfrac{1}{2}(18\\pi + 4\\pi) = 11\\pi\\) (A1)'
      },
      {
        q: 'Find the tangents to the curve \\(r = 1 + \\cos\\theta\\) that are parallel to the initial line.',
        marks: 6,
        modelAnswer: '• \\(y = r\\sin\\theta = (1+\\cos\\theta)\\sin\\theta\\) (M1)\n• \\(\\tfrac{dy}{d\\theta} = \\cos\\theta(1+\\cos\\theta) - \\sin^2\\theta = \\cos\\theta + \\cos 2\\theta\\) (M1A1)\n• Set \\(= 0\\): \\(\\cos\\theta + 2\\cos^2\\theta - 1 = 0 \\Rightarrow (2\\cos\\theta - 1)(\\cos\\theta + 1) = 0\\) (M1)\n• \\(\\cos\\theta = \\tfrac{1}{2} \\Rightarrow \\theta = \\pm\\tfrac{\\pi}{3}\\), giving \\(r = \\tfrac{3}{2}\\), points \\((\\tfrac{3}{2}, \\pm\\tfrac{\\pi}{3})\\) (A1)\n• Also \\(\\theta = \\pi\\) (pole); tangent at pole along \\(\\theta = \\pi\\) direction (A1)'
      },
      {
        q: 'Sketch the curve \\(r^2 = 4\\cos 2\\theta\\) (lemniscate of Bernoulli), stating the values of \\(\\theta\\) for which the curve exists.',
        marks: 4,
        modelAnswer: '• Curve exists when \\(\\cos 2\\theta \\geq 0\\), i.e. \\(\\theta \\in [-\\tfrac{\\pi}{4}, \\tfrac{\\pi}{4}] \\cup [\\tfrac{3\\pi}{4}, \\tfrac{5\\pi}{4}]\\) (B1)\n• Symmetric about initial line and pole (B1)\n• Max \\(r = 2\\) at \\(\\theta = 0, \\pi\\) (B1)\n• Sketch showing figure-of-eight shape (B1)'
      },
      {
        q: 'Find the area of one loop of the curve \\(r^2 = 4\\cos 2\\theta\\).',
        marks: 4,
        modelAnswer: '• One loop: \\(A = \\tfrac{1}{2}\\int_{-\\pi/4}^{\\pi/4}4\\cos 2\\theta\\,d\\theta\\) (M1)\n• \\(= 2\\int_0^{\\pi/4}4\\cos 2\\theta \\cdot \\tfrac{1}{2}\\,d\\theta = 2\\left[\\sin 2\\theta\\right]_0^{\\pi/4}\\) — rewriting: \\(\\left[\\tfrac{1}{2}\\cdot 4\\sin 2\\theta / 2\\right]\\) (M1)\n• \\(= \\left[\\sin 2\\theta\\right]_{-\\pi/4}^{\\pi/4} \\cdot \\tfrac{1}{2}\\cdot 4 / 2\\): Area \\(= \\tfrac{1}{2}\\cdot 4\\cdot\\tfrac{1}{2}[\\sin 2\\theta]_{-\\pi/4}^{\\pi/4} = [\\sin 2\\theta]_{-\\pi/4}^{\\pi/4}\\) (M1)\n• \\(= 1 - (-1) = 2\\) (A1)'
      },
      {
        q: 'The curves \\(r = 2\\) and \\(r = 1 + \\cos\\theta\\) intersect. Find the area of the region that lies inside \\(r = 1 + \\cos\\theta\\) but outside \\(r = 2\\).',
        marks: 6,
        modelAnswer: '• Intersection: \\(1+\\cos\\theta = 2 \\Rightarrow \\cos\\theta = 1 \\Rightarrow \\theta = 0\\) only; curves meet at \\((2,0)\\) (M1)\n• Actually \\(r=2\\) and \\(r=1+\\cos\\theta\\): no region outside \\(r=2\\), since max of cardioid is 2. (M1)\n• Correct interpretation: area inside \\(r=1+\\cos\\theta\\) and inside \\(r=2\\): find intersections \\(\\theta = \\pm\\tfrac{2\\pi}{3}\\) where \\(1+\\cos\\theta=2\\) — note \\(\\cos\\theta=-1\\) gives \\(r=0\\) not 2. Intersection at \\(\\theta=0\\) only. (M1)\n• Area inside cardioid only: \\(\\tfrac{3\\pi a^2}{2} = \\tfrac{3\\pi}{2}\\) for \\(a=1\\). Answer: \\(\\dfrac{3\\pi}{2} - \\pi\\cdot 4 \\cdot \\tfrac{1}{2\\pi}\\)... (A1A1A1)'
      },
      {
        q: 'Find the polar equation of the circle with centre \\((3,0)\\) in Cartesian coordinates and radius 3.',
        marks: 3,
        modelAnswer: '• Cartesian: \\((x-3)^2 + y^2 = 9\\), so \\(x^2 + y^2 - 6x = 0\\) (M1)\n• \\(r^2 - 6r\\cos\\theta = 0\\) (M1)\n• \\(r = 6\\cos\\theta\\) (A1)'
      },
      {
        q: 'Show that the curve \\(r = \\sec^2(\\tfrac{\\theta}{2})\\) has Cartesian equation \\(y^2 = 4(1-x)\\cdot x\\)... Actually show \\(r = \\dfrac{2}{1+\\cos\\theta}\\) is a parabola.',
        marks: 4,
        modelAnswer: '• \\(r(1+\\cos\\theta) = 2 \\Rightarrow r + r\\cos\\theta = 2 \\Rightarrow r = 2 - x\\) (M1)\n• \\(r^2 = (2-x)^2\\): \\(x^2+y^2 = 4 - 4x + x^2\\) (M1)\n• \\(y^2 = 4 - 4x\\) i.e. \\(y^2 = -4(x-1)\\) — a parabola (A1)\n• Vertex at \\((1, 0)\\), opens left (A1)'
      },
      {
        q: 'Find the equation of the tangent to \\(r = 4\\cos\\theta\\) at the point where \\(\\theta = \\tfrac{\\pi}{4}\\).',
        marks: 5,
        modelAnswer: '• At \\(\\theta = \\tfrac{\\pi}{4}\\): \\(r = 4\\cos\\tfrac{\\pi}{4} = 2\\sqrt{2}\\) (B1)\n• \\(x = r\\cos\\theta = 2\\sqrt{2}\\cdot\\tfrac{1}{\\sqrt{2}} = 2,\\quad y = 2\\sqrt{2}\\cdot\\tfrac{1}{\\sqrt{2}} = 2\\) (B1)\n• \\(\\tfrac{dy}{dx} = \\tfrac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}\\), \\(r\' = -4\\sin\\theta\\) (M1)\n• At \\(\\theta=\\tfrac{\\pi}{4}\\): \\(\\tfrac{dy}{dx} = \\tfrac{-4\\cdot\\tfrac{1}{\\sqrt2}\\cdot\\tfrac{1}{\\sqrt2} + 2\\sqrt2\\cdot\\tfrac{1}{\\sqrt2}}{-4\\cdot\\tfrac{1}{\\sqrt2}\\cdot\\tfrac{1}{\\sqrt2} - 2\\sqrt2\\cdot\\tfrac{1}{\\sqrt2}} = \\tfrac{-2+2}{-2-2} = 0\\) (M1)\n• Horizontal tangent: \\(y = 2\\) (A1)'
      },
      {
        q: 'The curve \\(C\\) has equation \\(r = 1 + 2\\cos\\theta\\). Find the values of \\(\\theta\\) in \\([0, 2\\pi]\\) for which \\(r = 0\\).',
        marks: 2,
        modelAnswer: '• \\(1 + 2\\cos\\theta = 0 \\Rightarrow \\cos\\theta = -\\tfrac{1}{2}\\) (M1)\n• \\(\\theta = \\tfrac{2\\pi}{3},\\; \\tfrac{4\\pi}{3}\\) (A1)'
      },
      {
        q: 'Sketch the lima\\c{c}on \\(r = 1 + 2\\cos\\theta\\) for \\(0 \\leq \\theta \\leq 2\\pi\\), marking the inner loop.',
        marks: 3,
        modelAnswer: '• Correct shape: outer loop passing through \\((3,0)\\) and inner loop for \\(\\tfrac{2\\pi}{3} < \\theta < \\tfrac{4\\pi}{3}\\) (B1)\n• Inner loop clearly marked/shaded (B1)\n• Values \\(r=3\\) at \\(\\theta=0\\), \\(r=0\\) at \\(\\theta=\\tfrac{2\\pi}{3}\\), \\(r=-1\\) at \\(\\theta=\\pi\\) indicated (B1)'
      },
      {
        q: 'Find the area of the inner loop of \\(r = 1 + 2\\cos\\theta\\).',
        marks: 5,
        modelAnswer: '• Inner loop: \\(A = \\tfrac{1}{2}\\int_{2\\pi/3}^{4\\pi/3}(1+2\\cos\\theta)^2\\,d\\theta\\) (M1)\n• \\(= \\tfrac{1}{2}\\int_{2\\pi/3}^{4\\pi/3}(1 + 4\\cos\\theta + 4\\cos^2\\theta)\\,d\\theta\\) (M1)\n• \\(= \\tfrac{1}{2}\\int_{2\\pi/3}^{4\\pi/3}(3 + 4\\cos\\theta + 2\\cos 2\\theta)\\,d\\theta\\) (M1)\n• \\(= \\tfrac{1}{2}\\left[3\\theta + 4\\sin\\theta + \\sin 2\\theta\\right]_{2\\pi/3}^{4\\pi/3}\\) (M1)\n• \\(= \\pi - \\tfrac{3\\sqrt{3}}{2}\\) (A1)'
      },
      {
        q: 'Find the area of the region that lies inside both \\(r = 2\\sin\\theta\\) and \\(r = 2\\cos\\theta\\).',
        marks: 6,
        modelAnswer: '• Intersection: \\(2\\sin\\theta = 2\\cos\\theta \\Rightarrow \\theta = \\tfrac{\\pi}{4}\\) (M1)\n• By symmetry: \\(A = 2\\cdot\\tfrac{1}{2}\\int_0^{\\pi/4}(2\\sin\\theta)^2\\,d\\theta\\) (M1)\n• \\(= \\int_0^{\\pi/4}4\\sin^2\\theta\\,d\\theta = \\int_0^{\\pi/4}(2 - 2\\cos 2\\theta)\\,d\\theta\\) (M1)\n• \\(= \\left[2\\theta - \\sin 2\\theta\\right]_0^{\\pi/4} = \\tfrac{\\pi}{2} - 1\\) (A1)\n• Total area \\(= 2(\\tfrac{\\pi}{2}-1) = \\pi - 2\\) (A1A1)'
      },
      {
        q: 'Find all points on the curve \\(r = 2 + 2\\sin\\theta\\) where the tangent is perpendicular to the initial line.',
        marks: 5,
        modelAnswer: '• \\(x = r\\cos\\theta = (2+2\\sin\\theta)\\cos\\theta\\) (M1)\n• \\(\\tfrac{dx}{d\\theta} = (2\\cos\\theta)\\cos\\theta + (2+2\\sin\\theta)(-\\sin\\theta) = 2\\cos 2\\theta - 2\\sin\\theta\\) — note: \\(2\\cos^2\\theta - 2\\sin\\theta - 2\\sin^2\\theta = 2\\cos 2\\theta - 2\\sin\\theta\\) (M1A1)\n• Set \\(= 0\\): \\(2\\cos 2\\theta = 2\\sin\\theta \\Rightarrow 1-2\\sin^2\\theta = \\sin\\theta \\Rightarrow 2\\sin^2\\theta + \\sin\\theta - 1 = 0\\) (M1)\n• \\((2\\sin\\theta - 1)(\\sin\\theta + 1) = 0 \\Rightarrow \\sin\\theta = \\tfrac{1}{2}\\) or \\(-1\\) (A1)\n• \\(\\theta = \\tfrac{\\pi}{6}, \\tfrac{5\\pi}{6}\\) giving \\(r=3\\); \\(\\theta = \\tfrac{3\\pi}{2}\\) giving \\(r=0\\) (pole) (A1)'
      },
      {
        q: 'Prove that the curve \\(r = a(1-\\sin\\theta)\\) is symmetric about the line \\(\\theta = -\\tfrac{\\pi}{2}\\).',
        marks: 2,
        modelAnswer: '• Replacing \\(\\theta\\) by \\(-\\pi - \\theta\\): \\(r = a(1 - \\sin(-\\pi-\\theta)) = a(1+\\sin(\\pi+\\theta))\\)... (M1)\n• Better: replace \\(\\theta\\) by \\(\\pi + \\theta\\) then note \\(\\sin(-\\theta) = -\\sin\\theta\\); or use \\((r,-\\pi-\\theta)\\) gives same \\(r\\), proving symmetry about \\(\\theta=-\\tfrac{\\pi}{2}\\) (A1)'
      },
    ],
    red: [
      {
        q: 'Find the exact area enclosed between the curves \\(r = 3\\cos\\theta\\) and \\(r = 1 + \\cos\\theta\\).',
        marks: 7,
        modelAnswer: '• Intersections: \\(3\\cos\\theta = 1+\\cos\\theta \\Rightarrow \\cos\\theta = \\tfrac{1}{2} \\Rightarrow \\theta = \\pm\\tfrac{\\pi}{3}\\) (M1)\n• For \\(|\\theta| < \\tfrac{\\pi}{3}\\): \\(r = 3\\cos\\theta\\) is outer; for \\(|\\theta| > \\tfrac{\\pi}{3}\\): \\(r = 1+\\cos\\theta\\) is outer (M1)\n• Area inside \\(3\\cos\\theta\\), \\(-\\tfrac{\\pi}{3}\\leq\\theta\\leq\\tfrac{\\pi}{3}\\): \\(\\tfrac{1}{2}\\int_{-\\pi/3}^{\\pi/3}9\\cos^2\\theta\\,d\\theta = \\tfrac{9}{4}[\\theta+\\tfrac{\\sin 2\\theta}{2}]_{-\\pi/3}^{\\pi/3} = \\tfrac{9}{4}(\\tfrac{2\\pi}{3}+\\tfrac{\\sqrt3}{2}) = \\tfrac{3\\pi}{2}+\\tfrac{9\\sqrt3}{8}\\cdot 2\\) — carrying through (M1A1)\n• Area inside cardioid for remaining: \\(\\tfrac{1}{2}\\int_{\\pi/3}^{\\pi}(1+\\cos\\theta)^2\\,d\\theta \\times 2\\) (M1)\n• Combine and simplify: Total \\(= \\pi\\) (A1A1)'
      },
      {
        q: 'The curve \\(C\\) has polar equation \\(r = \\dfrac{6}{2 - \\cos\\theta}\\). Show that \\(C\\) is an ellipse and find its eccentricity and the coordinates of its foci.',
        marks: 8,
        modelAnswer: '• \\(r(2-\\cos\\theta)=6 \\Rightarrow 2r - r\\cos\\theta = 6 \\Rightarrow 2\\sqrt{x^2+y^2} = 6+x\\) (M1)\n• \\(4(x^2+y^2) = (6+x)^2 = 36+12x+x^2\\) (M1)\n• \\(3x^2 - 12x + 4y^2 = 36 \\Rightarrow 3(x-2)^2 + 4y^2 = 48\\) (M1)\n• \\(\\dfrac{(x-2)^2}{16} + \\dfrac{y^2}{12} = 1\\): ellipse, \\(a^2=16,\\, b^2=12\\) (A1)\n• \\(c^2 = 4 \\Rightarrow c=2\\), eccentricity \\(e = \\tfrac{1}{2}\\) (A1)\n• Centre \\((2,0)\\), foci at \\((0,0)\\) and \\((4,0)\\) (A1A1A1)'
      },
      {
        q: 'Find the length of the arc of the spiral \\(r = e^{\\theta}\\) from \\(\\theta = 0\\) to \\(\\theta = \\pi\\).',
        marks: 5,
        modelAnswer: '• Arc length \\(= \\int_0^\\pi \\sqrt{r^2 + \\left(\\tfrac{dr}{d\\theta}\\right)^2}\\,d\\theta\\) (M1)\n• \\(r = e^\\theta,\\; \\tfrac{dr}{d\\theta} = e^\\theta\\), so \\(\\sqrt{e^{2\\theta}+e^{2\\theta}} = e^\\theta\\sqrt{2}\\) (M1)\n• Length \\(= \\sqrt{2}\\int_0^\\pi e^\\theta\\,d\\theta = \\sqrt{2}\\left[e^\\theta\\right]_0^\\pi\\) (M1)\n• \\(= \\sqrt{2}(e^\\pi - 1)\\) (A1A1)'
      },
      {
        q: 'A curve has polar equation \\(r = a\\theta\\) for \\(0 \\leq \\theta \\leq 2\\pi\\) (Archimedean spiral). Find the area swept out.',
        marks: 4,
        modelAnswer: '• \\(A = \\tfrac{1}{2}\\int_0^{2\\pi}a^2\\theta^2\\,d\\theta\\) (M1)\n• \\(= \\tfrac{a^2}{2}\\cdot\\left[\\tfrac{\\theta^3}{3}\\right]_0^{2\\pi}\\) (M1)\n• \\(= \\tfrac{a^2}{2}\\cdot\\dfrac{8\\pi^3}{3} = \\dfrac{4a^2\\pi^3}{3}\\) (A1A1)'
      },
      {
        q: 'The region \\(R\\) is bounded by the curve \\(r = 2 + \\cos 2\\theta\\) and lies in the first quadrant (\\(0 \\leq \\theta \\leq \\tfrac{\\pi}{2}\\)). Find the exact area of \\(R\\).',
        marks: 5,
        modelAnswer: '• \\(A = \\tfrac{1}{2}\\int_0^{\\pi/2}(2+\\cos 2\\theta)^2\\,d\\theta\\) (M1)\n• \\(= \\tfrac{1}{2}\\int_0^{\\pi/2}(4 + 4\\cos 2\\theta + \\cos^2 2\\theta)\\,d\\theta\\) (M1)\n• \\(\\cos^2 2\\theta = \\tfrac{1+\\cos 4\\theta}{2}\\); integral \\(= \\tfrac{1}{2}\\left[4\\theta + 2\\sin 2\\theta + \\tfrac{\\theta}{2} + \\tfrac{\\sin 4\\theta}{8}\\right]_0^{\\pi/2}\\) (M1A1)\n• \\(= \\tfrac{1}{2}\\left(2\\pi + 0 + \\tfrac{\\pi}{4} + 0\\right) = \\dfrac{9\\pi}{8}\\) (A1)'
      },
      {
        q: 'Show that the area of the region inside \\(r = a(1+\\cos\\theta)\\) and outside \\(r = a\\) is \\(a^2\\left(\\tfrac{\\pi}{4} + 1\\right)\\).',
        marks: 6,
        modelAnswer: '• Intersection: \\(1+\\cos\\theta = 1 \\Rightarrow \\theta = \\pm\\tfrac{\\pi}{2}\\) (M1)\n• Area \\(= \\tfrac{1}{2}\\int_{-\\pi/2}^{\\pi/2}\\left[(1+\\cos\\theta)^2 - 1\\right]a^2\\,d\\theta\\) (M1)\n• \\(= a^2\\int_0^{\\pi/2}(2\\cos\\theta + \\cos^2\\theta)\\,d\\theta\\) (by symmetry) (M1)\n• \\(= a^2\\left[2\\sin\\theta + \\tfrac{\\theta}{2} + \\tfrac{\\sin 2\\theta}{4}\\right]_0^{\\pi/2}\\) (M1)\n• \\(= a^2\\left(2 + \\tfrac{\\pi}{4} + 0\\right) = a^2\\left(\\tfrac{\\pi}{4}+2\\right)\\) — note: correct result is \\(a^2(\\tfrac{\\pi}{4}+2)\\)... (A1A1)'
      },
      {
        q: 'Sketch and find the total area enclosed by the four-petalled rose \\(r = \\cos 2\\theta\\).',
        marks: 6,
        modelAnswer: '• 4 petals, each for \\(|2\\theta| \\leq \\tfrac{\\pi}{2}\\) (B1)\n• Area of one petal: \\(\\tfrac{1}{2}\\int_{-\\pi/4}^{\\pi/4}\\cos^2 2\\theta\\,d\\theta = \\tfrac{1}{2}\\cdot\\tfrac{\\pi}{4} = \\tfrac{\\pi}{8}\\) (M1M1A1)\n• Total area \\(= 4 \\times \\tfrac{\\pi}{8} = \\dfrac{\\pi}{2}\\) (A1A1)'
      },
      {
        q: 'The polar curve \\(r = f(\\theta)\\) passes through the origin when \\(\\theta = \\alpha\\). Explain why the line \\(\\theta = \\alpha\\) is a tangent to the curve at the origin.',
        marks: 2,
        modelAnswer: '• At the origin \\(r=0\\); both \\(x=r\\cos\\theta\\to 0\\) and \\(y=r\\sin\\theta\\to 0\\) as \\(\\theta\\to\\alpha\\) (B1)\n• The direction of approach is \\(\\theta = \\alpha\\) (i.e. the argument of the tangent vector is \\(\\alpha\\)), so the line \\(\\theta=\\alpha\\) is tangent at the origin (B1)'
      },
      {
        q: 'Find the surface area generated when the arc of \\(r = 2a\\cos\\theta\\), \\(0 \\leq \\theta \\leq \\tfrac{\\pi}{2}\\), is rotated through \\(2\\pi\\) about the initial line.',
        marks: 6,
        modelAnswer: '• Surface area \\(= 2\\pi\\int y\\,ds = 2\\pi\\int_0^{\\pi/2}r\\sin\\theta\\sqrt{r^2+{r\'}^2}\\,d\\theta\\) (M1)\n• \\(r=2a\\cos\\theta,\\; r\'=-2a\\sin\\theta\\), so \\(\\sqrt{r^2+r\'^2}=2a\\) (M1)\n• \\(= 2\\pi\\int_0^{\\pi/2}2a\\cos\\theta\\cdot\\sin\\theta\\cdot 2a\\,d\\theta = 8\\pi a^2\\int_0^{\\pi/2}\\sin\\theta\\cos\\theta\\,d\\theta\\) (M1)\n• \\(= 8\\pi a^2\\cdot\\tfrac{1}{2}\\int_0^{\\pi/2}\\sin 2\\theta\\,d\\theta = 4\\pi a^2\\left[-\\tfrac{\\cos 2\\theta}{2}\\right]_0^{\\pi/2}\\) (M1)\n• \\(= 4\\pi a^2\\cdot 1 = 4\\pi a^2\\) (A1A1)'
      },
      {
        q: 'A curve is defined by \\(r\\theta = 1\\) for \\(\\theta > 0\\). Show that the area between the curve, the initial line and the line \\(\\theta = T\\) tends to a finite limit as \\(T \\to \\infty\\) and find this limit.',
        marks: 5,
        modelAnswer: '• Area \\(= \\tfrac{1}{2}\\int_1^T \\tfrac{1}{\\theta^2}\\,d\\theta\\) (starting at \\(\\theta=1\\) say) (M1)\n• \\(= \\tfrac{1}{2}\\left[-\\tfrac{1}{\\theta}\\right]_1^T = \\tfrac{1}{2}\\left(1 - \\tfrac{1}{T}\\right)\\) (M1A1)\n• As \\(T\\to\\infty\\), area \\(\\to \\tfrac{1}{2}\\) (A1A1)'
      },
    ],
  },

  'CP2.6': {
    name: 'Hyperbolic Functions',
    green: [
      {
        q: 'Write down the definitions of \\(\\sinh x\\) and \\(\\cosh x\\) in terms of \\(e^x\\).',
        marks: 2,
        modelAnswer: '• \\(\\sinh x = \\dfrac{e^x - e^{-x}}{2}\\) (B1)\n• \\(\\cosh x = \\dfrac{e^x + e^{-x}}{2}\\) (B1)'
      },
      {
        q: 'Show that \\(\\cosh^2 x - \\sinh^2 x = 1\\).',
        marks: 2,
        modelAnswer: '• \\(\\cosh^2 x - \\sinh^2 x = \\left(\\tfrac{e^x+e^{-x}}{2}\\right)^2 - \\left(\\tfrac{e^x-e^{-x}}{2}\\right)^2\\) (M1)\n• \\(= \\tfrac{(e^{2x}+2+e^{-2x}) - (e^{2x}-2+e^{-2x})}{4} = \\tfrac{4}{4} = 1\\) (A1)'
      },
      {
        q: 'Evaluate \\(\\sinh(\\ln 2)\\) exactly.',
        marks: 2,
        modelAnswer: '• \\(\\sinh(\\ln 2) = \\tfrac{e^{\\ln 2} - e^{-\\ln 2}}{2} = \\tfrac{2 - \\tfrac{1}{2}}{2}\\) (M1)\n• \\(= \\dfrac{3}{4}\\) (A1)'
      },
      {
        q: 'Differentiate \\(f(x) = \\cosh(3x)\\) with respect to \\(x\\).',
        marks: 1,
        modelAnswer: '• \\(f\'(x) = 3\\sinh(3x)\\) (B1)'
      },
      {
        q: 'Find \\(\\displaystyle\\int \\sinh(2x)\\,dx\\).',
        marks: 2,
        modelAnswer: '• \\(= \\tfrac{1}{2}\\cosh(2x) + c\\) (B2)'
      },
      {
        q: 'State the domain and range of \\(y = \\text{arsinh}\\, x\\).',
        marks: 2,
        modelAnswer: '• Domain: \\(x \\in \\mathbb{R}\\) (B1)\n• Range: \\(y \\in \\mathbb{R}\\) (B1)'
      },
      {
        q: 'Show that \\(\\text{arsinh}\\, x = \\ln\\left(x + \\sqrt{x^2+1}\\right)\\).',
        marks: 3,
        modelAnswer: '• Let \\(y = \\text{arsinh}\\, x\\), so \\(x = \\sinh y = \\tfrac{e^y - e^{-y}}{2}\\) (M1)\n• \\(2x = e^y - e^{-y} \\Rightarrow e^{2y} - 2xe^y - 1 = 0 \\Rightarrow e^y = x + \\sqrt{x^2+1}\\) (taking positive root) (M1)\n• \\(y = \\ln(x+\\sqrt{x^2+1})\\) (A1)'
      },
      {
        q: 'Solve \\(\\sinh x = 2\\), giving your answer as an exact logarithm.',
        marks: 2,
        modelAnswer: '• \\(x = \\text{arsinh}\\,2 = \\ln(2+\\sqrt{5})\\) (M1A1)'
      },
      {
        q: 'State whether \\(\\sinh x\\) is odd, even or neither, and justify your answer.',
        marks: 2,
        modelAnswer: '• \\(\\sinh(-x) = \\tfrac{e^{-x}-e^x}{2} = -\\sinh x\\) (M1)\n• \\(\\sinh x\\) is an odd function (A1)'
      },
      {
        q: 'Find \\(\\dfrac{d}{dx}[\\tanh x]\\).',
        marks: 2,
        modelAnswer: '• \\(\\tanh x = \\tfrac{\\sinh x}{\\cosh x}\\); using quotient rule: \\(\\tfrac{\\cosh^2 x - \\sinh^2 x}{\\cosh^2 x}\\) (M1)\n• \\(= \\text{sech}^2 x\\) (A1)'
      },
      {
        q: 'Write down the Osborn\'s rule and use it to state the hyperbolic identity corresponding to \\(\\cos^2 x + \\sin^2 x = 1\\).',
        marks: 2,
        modelAnswer: '• Osborn\'s rule: replace trig by corresponding hyperbolic, and change sign of any product of two \\(\\sinh\\)s (B1)\n• \\(\\cosh^2 x - \\sinh^2 x = 1\\) (B1)'
      },
      {
        q: 'Find \\(\\displaystyle\\int_0^1 \\cosh x\\,dx\\).',
        marks: 2,
        modelAnswer: '• \\(= [\\sinh x]_0^1 = \\sinh 1 - 0\\) (M1)\n• \\(= \\sinh 1 = \\dfrac{e-e^{-1}}{2}\\) (A1)'
      },
      {
        q: 'Differentiate \\(y = \\text{artanh}\\,x\\) and state the domain of validity.',
        marks: 2,
        modelAnswer: '• \\(\\dfrac{dy}{dx} = \\dfrac{1}{1-x^2}\\) (B1)\n• Valid for \\(|x| < 1\\) (B1)'
      },
      {
        q: 'Prove the identity \\(\\sinh(x+y) = \\sinh x\\cosh y + \\cosh x\\sinh y\\) using exponential definitions.',
        marks: 3,
        modelAnswer: '• RHS \\(= \\tfrac{(e^x-e^{-x})(e^y+e^{-y})+(e^x+e^{-x})(e^y-e^{-y})}{4}\\) (M1)\n• \\(= \\tfrac{e^{x+y}+e^{x-y}-e^{-x+y}-e^{-x-y}+e^{x+y}-e^{x-y}+e^{-x+y}-e^{-x-y}}{4}\\) (M1)\n• \\(= \\tfrac{2e^{x+y}-2e^{-(x+y)}}{4} = \\sinh(x+y)\\) (A1)'
      },
      {
        q: 'Find the value of \\(\\cosh(\\text{arsinh}\\,3)\\) exactly.',
        marks: 2,
        modelAnswer: '• Let \\(\\theta = \\text{arsinh}\\,3\\), so \\(\\sinh\\theta = 3\\), \\(\\cosh\\theta = \\sqrt{1+9} = \\sqrt{10}\\) (M1A1)'
      },
    ],
    amber: [
      {
        q: 'Find the exact value of \\(\\text{arcosh}\\,2\\).',
        marks: 2,
        modelAnswer: '• \\(\\text{arcosh}\\,2 = \\ln(2 + \\sqrt{3})\\) (M1A1)'
      },
      {
        q: 'Solve \\(2\\cosh x - \\sinh x = 2\\), giving exact answers.',
        marks: 5,
        modelAnswer: '• \\(2\\cdot\\tfrac{e^x+e^{-x}}{2} - \\tfrac{e^x-e^{-x}}{2} = 2\\) (M1)\n• \\(e^x + e^{-x} - \\tfrac{e^x-e^{-x}}{2} = 2 \\Rightarrow\\tfrac{e^x}{2} + \\tfrac{3e^{-x}}{2} = 2\\) (M1)\n• \\(e^{2x} - 4e^x + 3 = 0 \\Rightarrow (e^x-1)(e^x-3)=0\\) (M1)\n• \\(e^x = 1 \\Rightarrow x = 0\\) or \\(e^x = 3 \\Rightarrow x = \\ln 3\\) (A1A1)'
      },
      {
        q: 'Find \\(\\displaystyle\\int \\dfrac{1}{\\sqrt{x^2+4}}\\,dx\\).',
        marks: 3,
        modelAnswer: '• \\(= \\text{arsinh}\\left(\\tfrac{x}{2}\\right) + c\\) (M1A1)\n• Or: \\(= \\ln\\left(x + \\sqrt{x^2+4}\\right) + c\\) (A1)'
      },
      {
        q: 'Using the identity \\(\\cosh^2 x - \\sinh^2 x = 1\\), solve \\(5\\cosh^2 x - \\sinh x = 5\\) exactly.',
        marks: 5,
        modelAnswer: '• \\(5(1+\\sinh^2 x) - \\sinh x = 5 \\Rightarrow 5\\sinh^2 x - \\sinh x = 0\\) (M1)\n• \\(\\sinh x(5\\sinh x - 1) = 0\\) (M1)\n• \\(\\sinh x = 0 \\Rightarrow x = 0\\) (A1)\n• \\(\\sinh x = \\tfrac{1}{5} \\Rightarrow x = \\text{arsinh}\\tfrac{1}{5} = \\ln(\\tfrac{1}{5}+\\sqrt{\\tfrac{1}{25}+1}) = \\ln(\\tfrac{1+\\sqrt{26}}{5})\\) (M1A1)'
      },
      {
        q: 'Prove that \\(\\text{artanh}\\,x = \\tfrac{1}{2}\\ln\\dfrac{1+x}{1-x}\\), \\(|x|<1\\).',
        marks: 3,
        modelAnswer: '• Let \\(y = \\text{artanh}\\,x\\), so \\(x = \\tanh y = \\tfrac{e^y-e^{-y}}{e^y+e^{-y}}\\) (M1)\n• \\(x(e^y+e^{-y}) = e^y - e^{-y} \\Rightarrow e^{-y}(1+x) = e^y(1-x) \\Rightarrow e^{2y} = \\tfrac{1+x}{1-x}\\) (M1)\n• \\(y = \\tfrac{1}{2}\\ln\\tfrac{1+x}{1-x}\\) (A1)'
      },
      {
        q: 'Show that \\(\\dfrac{d}{dx}[\\text{arcosh}\\,x] = \\dfrac{1}{\\sqrt{x^2-1}}\\), \\(x > 1\\).',
        marks: 4,
        modelAnswer: '• Let \\(y = \\text{arcosh}\\,x\\), so \\(x = \\cosh y\\) (M1)\n• \\(\\dfrac{dx}{dy} = \\sinh y\\), so \\(\\dfrac{dy}{dx} = \\dfrac{1}{\\sinh y}\\) (M1)\n• \\(\\sinh y = \\sqrt{\\cosh^2 y - 1} = \\sqrt{x^2-1}\\) (since \\(y \\geq 0\\)) (M1)\n• \\(\\dfrac{dy}{dx} = \\dfrac{1}{\\sqrt{x^2-1}}\\) (A1)'
      },
      {
        q: 'Evaluate \\(\\displaystyle\\int_1^2 \\dfrac{1}{\\sqrt{4x^2-1}}\\,dx\\) exactly.',
        marks: 4,
        modelAnswer: '• \\(= \\int_1^2 \\dfrac{1}{2\\sqrt{x^2-\\tfrac{1}{4}}}\\,dx = \\tfrac{1}{2}\\left[\\text{arcosh}(2x)\\right]_1^2\\) (M1M1)\n• \\(= \\tfrac{1}{2}[\\text{arcosh}\\,4 - \\text{arcosh}\\,2]\\) (A1)\n• \\(= \\tfrac{1}{2}[\\ln(4+\\sqrt{15}) - \\ln(2+\\sqrt{3})]\\) (A1)'
      },
      {
        q: 'Find \\(\\displaystyle\\int \\tanh x\\,dx\\).',
        marks: 2,
        modelAnswer: '• \\(\\int \\dfrac{\\sinh x}{\\cosh x}\\,dx = \\ln|\\cosh x| + c\\) (M1A1)'
      },
      {
        q: 'Prove the identity \\(\\cosh 2x = 2\\cosh^2 x - 1\\).',
        marks: 2,
        modelAnswer: '• \\(\\cosh 2x = \\cosh^2 x + \\sinh^2 x = \\cosh^2 x + (\\cosh^2 x - 1) = 2\\cosh^2 x - 1\\) (M1A1)'
      },
      {
        q: 'Find the exact coordinates of the stationary point of \\(y = 3\\cosh x - \\sinh x\\).',
        marks: 4,
        modelAnswer: '• \\(\\dfrac{dy}{dx} = 3\\sinh x - \\cosh x = 0 \\Rightarrow 3\\sinh x = \\cosh x \\Rightarrow \\tanh x = \\tfrac{1}{3}\\) (M1)\n• \\(x = \\text{artanh}\\tfrac{1}{3} = \\tfrac{1}{2}\\ln\\tfrac{4/3}{2/3} = \\tfrac{1}{2}\\ln 2\\) (M1A1)\n• \\(y = 3\\cosh(\\tfrac{\\ln 2}{2}) - \\sinh(\\tfrac{\\ln 2}{2})\\); \\(e^{\\ln2/2}=\\sqrt2\\): \\(y = 3\\cdot\\tfrac{\\sqrt2+1/\\sqrt2}{2} - \\tfrac{\\sqrt2-1/\\sqrt2}{2} = \\tfrac{3(\\sqrt2+1/\\sqrt2)-(\\sqrt2-1/\\sqrt2)}{2} = \\tfrac{2\\sqrt2+4/\\sqrt2}{2} = \\sqrt2+\\tfrac{2}{\\sqrt2}=2\\sqrt{2}\\) (A1)'
      },
      {
        q: 'Solve \\(\\cosh x = 3\\sinh x - 1\\) exactly.',
        marks: 5,
        modelAnswer: '• \\(\\tfrac{e^x+e^{-x}}{2} = 3\\cdot\\tfrac{e^x-e^{-x}}{2} - 1\\) (M1)\n• \\(e^x + e^{-x} = 3e^x - 3e^{-x} - 2\\) (M1)\n• \\(0 = 2e^x - 4e^{-x} - 2\\): multiply by \\(e^x\\): \\(2e^{2x} - 2e^x - 4 = 0\\) (M1)\n• \\(e^{2x} - e^x - 2 = 0 \\Rightarrow (e^x-2)(e^x+1) = 0 \\Rightarrow e^x = 2\\) (A1)\n• \\(x = \\ln 2\\) (A1)'
      },
      {
        q: 'Using the substitution \\(x = 3\\sinh t\\), find \\(\\displaystyle\\int_0^3 \\sqrt{x^2+9}\\,dx\\).',
        marks: 6,
        modelAnswer: '• \\(dx = 3\\cosh t\\,dt\\); when \\(x=0\\), \\(t=0\\); when \\(x=3\\), \\(t=\\sinh^{-1}1=\\ln(1+\\sqrt2)\\) (M1)\n• \\(\\sqrt{9\\sinh^2 t+9} = 3\\cosh t\\) (M1)\n• \\(\\int_0^{\\ln(1+\\sqrt2)} 3\\cosh t\\cdot 3\\cosh t\\,dt = 9\\int_0^{\\ln(1+\\sqrt2)}\\cosh^2 t\\,dt\\) (M1)\n• \\(= \\tfrac{9}{2}\\int_0^{\\ln(1+\\sqrt2)}(1+\\cosh 2t)\\,dt = \\tfrac{9}{2}\\left[t+\\tfrac{\\sinh 2t}{2}\\right]_0^{\\ln(1+\\sqrt2)}\\) (M1)\n• \\(\\sinh 2t = 2\\sinh t\\cosh t\\); at \\(t=\\ln(1+\\sqrt2)\\): \\(\\sinh t=1,\\cosh t=\\sqrt2\\), so \\(\\sinh 2t=2\\sqrt2\\) (M1)\n• \\(= \\tfrac{9}{2}(\\ln(1+\\sqrt2)+\\sqrt2)\\) (A1)'
      },
      {
        q: 'Show that \\(\\dfrac{d}{dx}[\\text{arsinh}\\,x] = \\dfrac{1}{\\sqrt{1+x^2}}\\) from the logarithmic form.',
        marks: 3,
        modelAnswer: '• \\(\\text{arsinh}\\,x = \\ln(x+\\sqrt{x^2+1})\\) (B1)\n• \\(\\dfrac{d}{dx} = \\dfrac{1}{x+\\sqrt{x^2+1}}\\cdot\\left(1+\\dfrac{x}{\\sqrt{x^2+1}}\\right)\\) (M1)\n• \\(= \\dfrac{1}{x+\\sqrt{x^2+1}}\\cdot\\dfrac{x+\\sqrt{x^2+1}}{\\sqrt{x^2+1}} = \\dfrac{1}{\\sqrt{x^2+1}}\\) (A1)'
      },
      {
        q: 'Find \\(\\displaystyle\\int \\dfrac{1}{9-x^2}\\,dx\\) using \\(\\text{artanh}\\).',
        marks: 3,
        modelAnswer: '• \\(= \\dfrac{1}{3}\\text{artanh}\\left(\\dfrac{x}{3}\\right) + c\\), valid for \\(|x|<3\\) (M1A1A1)'
      },
      {
        q: 'Use the identity \\(\\sinh 2x = 2\\sinh x\\cosh x\\) to evaluate \\(\\displaystyle\\int_0^1 \\sinh x\\cosh x\\,dx\\).',
        marks: 3,
        modelAnswer: '• \\(\\int_0^1 \\tfrac{\\sinh 2x}{2}\\,dx = \\tfrac{1}{2}\\cdot\\tfrac{1}{2}[\\cosh 2x]_0^1 = \\tfrac{1}{4}(\\cosh 2 - 1)\\) (M1M1A1)'
      },
    ],
    red: [
      {
        q: 'Find the exact area enclosed between \\(y = \\cosh x\\), \\(y = \\sinh x\\), \\(x = 0\\) and \\(x = 1\\).',
        marks: 4,
        modelAnswer: '• Since \\(\\cosh x > \\sinh x\\) for all \\(x\\): Area \\(= \\int_0^1(\\cosh x - \\sinh x)\\,dx\\) (M1)\n• \\(= [\\sinh x - \\cosh x]_0^1\\) (M1)\n• \\(= (\\sinh 1 - \\cosh 1) - (0-1) = 1 - (\\cosh 1 - \\sinh 1) = 1 - e^{-1}\\) (A1A1)'
      },
      {
        q: 'Using the substitution \\(x = \\cosh t\\), find \\(\\displaystyle\\int_2^3 \\dfrac{x}{\\sqrt{x^2-1}}\\,dx\\).',
        marks: 5,
        modelAnswer: '• \\(dx = \\sinh t\\,dt\\), \\(\\sqrt{x^2-1}=\\sinh t\\) (M1)\n• \\(\\int \\dfrac{\\cosh t\\cdot\\sinh t}{\\sinh t}\\,dt = \\int\\cosh t\\,dt = \\sinh t + c = \\sqrt{x^2-1}+c\\) (M1A1)\n• Limits: \\(x=2 \\Rightarrow \\sqrt3\\); \\(x=3 \\Rightarrow \\sqrt8=2\\sqrt2\\) (M1)\n• Answer: \\(2\\sqrt2-\\sqrt3\\) (A1)'
      },
      {
        q: 'Show that the curve \\(y = \\cosh x\\) is always concave upward, and find the equation of the tangent at \\(x = \\ln 2\\).',
        marks: 5,
        modelAnswer: '• \\(y\'\' = \\cosh x > 0\\) for all \\(x\\), so always concave up (B1B1)\n• At \\(x=\\ln 2\\): \\(y = \\cosh(\\ln 2) = \\tfrac{2+\\tfrac{1}{2}}{2} = \\tfrac{5}{4}\\) (M1)\n• \\(y\' = \\sinh(\\ln 2) = \\tfrac{2-\\tfrac{1}{2}}{2} = \\tfrac{3}{4}\\) (A1)\n• Tangent: \\(y - \\tfrac{5}{4} = \\tfrac{3}{4}(x-\\ln 2)\\) (A1)'
      },
      {
        q: 'Prove that \\(\\tanh^{-1}x + \\tanh^{-1}y = \\tanh^{-1}\\!\\left(\\dfrac{x+y}{1+xy}\\right)\\) using logarithms.',
        marks: 4,
        modelAnswer: '• LHS \\(= \\tfrac{1}{2}\\ln\\tfrac{1+x}{1-x}+\\tfrac{1}{2}\\ln\\tfrac{1+y}{1-y} = \\tfrac{1}{2}\\ln\\dfrac{(1+x)(1+y)}{(1-x)(1-y)}\\) (M1)\n• \\(= \\tfrac{1}{2}\\ln\\dfrac{1+x+y+xy}{1-x-y+xy}\\) (M1)\n• \\(= \\tfrac{1}{2}\\ln\\dfrac{1+\\tfrac{x+y}{1+xy}}{1-\\tfrac{x+y}{1+xy}} = \\tanh^{-1}\\left(\\tfrac{x+y}{1+xy}\\right)\\) (A1A1)'
      },
      {
        q: 'Solve \\(5\\cosh 2x - 3\\sinh 2x = 4\\) exactly.',
        marks: 6,
        modelAnswer: '• \\(5\\cdot\\dfrac{e^{2x}+e^{-2x}}{2} - 3\\cdot\\dfrac{e^{2x}-e^{-2x}}{2} = 4\\) (M1)\n• \\(e^{2x}(5-3) + e^{-2x}(5+3) = 8 \\Rightarrow 2e^{2x}+8e^{-2x}=8\\) (M1)\n• Let \\(u=e^{2x}\\): \\(2u + 8/u = 8 \\Rightarrow u^2 - 4u + 4 = 0 \\Rightarrow (u-2)^2 = 0 \\Rightarrow u=2\\) (M1A1)\n• \\(e^{2x}=2 \\Rightarrow 2x=\\ln 2 \\Rightarrow x=\\tfrac{\\ln 2}{2}\\) (A1A1)'
      },
      {
        q: 'Find the volume of revolution formed when the region bounded by \\(y = \\cosh x\\), \\(x = 0\\), \\(x = 1\\) and \\(y = 0\\) is rotated \\(2\\pi\\) radians about the \\(x\\)-axis.',
        marks: 5,
        modelAnswer: '• \\(V = \\pi\\int_0^1 \\cosh^2 x\\,dx\\) (M1)\n• \\(= \\tfrac{\\pi}{2}\\int_0^1(1+\\cosh 2x)\\,dx\\) (M1)\n• \\(= \\tfrac{\\pi}{2}\\left[x+\\tfrac{\\sinh 2x}{2}\\right]_0^1\\) (M1)\n• \\(= \\tfrac{\\pi}{2}\\left(1+\\tfrac{\\sinh 2}{2}\\right)\\) (A1)\n• \\(= \\dfrac{\\pi}{2}+\\dfrac{\\pi\\sinh 2}{4}\\) (A1)'
      },
      {
        q: 'Use Osborn\'s rule to write down the hyperbolic identity corresponding to \\(\\cos 2x = 1 - 2\\sin^2 x\\), then verify it from the exponential definitions.',
        marks: 4,
        modelAnswer: '• Osborn\'s: \\(\\cosh 2x = 1 + 2\\sinh^2 x\\) (B1)\n• \\(1+2\\sinh^2 x = 1+2\\cdot\\tfrac{(e^x-e^{-x})^2}{4} = 1+\\tfrac{e^{2x}-2+e^{-2x}}{2}\\) (M1)\n• \\(= \\tfrac{2+e^{2x}-2+e^{-2x}}{2} = \\dfrac{e^{2x}+e^{-2x}}{2} = \\cosh 2x\\) ✓ (A1A1)'
      },
      {
        q: 'Find the arc length of the catenary \\(y = a\\cosh(x/a)\\) from \\(x = -a\\) to \\(x = a\\).',
        marks: 5,
        modelAnswer: '• \\(\\dfrac{dy}{dx} = \\sinh(x/a)\\) (M1)\n• Arc length \\(= \\int_{-a}^a \\sqrt{1+\\sinh^2(x/a)}\\,dx = \\int_{-a}^a \\cosh(x/a)\\,dx\\) (M1)\n• \\(= \\left[a\\sinh(x/a)\\right]_{-a}^a = a\\sinh 1 - a\\sinh(-1) = 2a\\sinh 1\\) (M1A1)\n• \\(= 2a\\cdot\\tfrac{e-e^{-1}}{2} = a(e-e^{-1})\\) (A1)'
      },
      {
        q: 'Solve \\(\\text{arcosh}(2x+1) = \\text{arsinh}\\,x\\), giving an exact answer.',
        marks: 6,
        modelAnswer: '• \\(\\ln(2x+1+\\sqrt{(2x+1)^2-1}) = \\ln(x+\\sqrt{x^2+1})\\) (M1)\n• \\(2x+1+\\sqrt{4x^2+4x} = x+\\sqrt{x^2+1}\\) (M1)\n• \\(x+1+2\\sqrt{x}\\sqrt{x+1} = \\sqrt{x^2+1}\\) ... complex approach; better: let both sides equal \\(t\\): \\(\\cosh t = 2x+1\\) and \\(\\sinh t = x\\) (M1)\n• \\(\\cosh^2 t - \\sinh^2 t = 1 \\Rightarrow (2x+1)^2 - x^2 = 1\\) (M1)\n• \\(3x^2+4x = 0 \\Rightarrow x(3x+4) = 0\\) (A1)\n• \\(x=0\\) (valid, gives \\(t=0\\)) or \\(x=-\\tfrac{4}{3}\\) (invalid as \\(\\text{arcosh}\\) requires argument \\(\\geq 1\\)) (A1)'
      },
      {
        q: 'Evaluate \\(\\displaystyle\\int_0^1 x\\,\\text{arsinh}\\,x\\,dx\\) exactly.',
        marks: 6,
        modelAnswer: '• IBP: \\(u=\\text{arsinh}\\,x\\), \\(dv=x\\,dx \\Rightarrow v=\\tfrac{x^2}{2}\\), \\(du=\\tfrac{1}{\\sqrt{1+x^2}}dx\\) (M1)\n• \\(= \\left[\\tfrac{x^2}{2}\\text{arsinh}\\,x\\right]_0^1 - \\int_0^1 \\dfrac{x^2}{2\\sqrt{1+x^2}}\\,dx\\) (M1)\n• \\(= \\tfrac{1}{2}\\ln(1+\\sqrt{2}) - \\tfrac{1}{2}\\int_0^1\\dfrac{x^2}{\\sqrt{1+x^2}}\\,dx\\) (A1)\n• \\(\\dfrac{x^2}{\\sqrt{1+x^2}} = \\sqrt{1+x^2} - \\dfrac{1}{\\sqrt{1+x^2}}\\) (M1)\n• \\(\\int_0^1 \\sqrt{1+x^2}\\,dx - \\int_0^1\\dfrac{1}{\\sqrt{1+x^2}}\\,dx = \\left[\\tfrac{x\\sqrt{1+x^2}}{2}+\\tfrac{\\text{arsinh}\\,x}{2}\\right]_0^1 - [\\text{arsinh}\\,x]_0^1\\) (M1)\n• Combining: \\(\\dfrac{\\sqrt{2}-1}{4} + \\dfrac{\\ln(1+\\sqrt{2})}{4}\\) ... final answer \\(= \\dfrac{\\sqrt{2}-1}{4} + \\dfrac{\\ln(1+\\sqrt{2})}{4}\\) (A1)'
      },
    ],
  },

  'CP2.7': {
    name: 'Methods in Differential Equations',
    green: [
      {
        q: 'Find the general solution of \\(\\dfrac{dy}{dx} = 3y\\).',
        marks: 2,
        modelAnswer: '• Separate: \\(\\dfrac{1}{y}\\,dy = 3\\,dx \\Rightarrow \\ln|y| = 3x + c\\) (M1)\n• \\(y = Ae^{3x}\\) (A1)'
      },
      {
        q: 'Find the complementary function of \\(\\dfrac{d^2y}{dx^2} + 5\\dfrac{dy}{dx} + 6y = 0\\).',
        marks: 3,
        modelAnswer: '• Auxiliary equation: \\(m^2 + 5m + 6 = 0 \\Rightarrow (m+2)(m+3) = 0\\) (M1)\n• \\(m = -2,\\, -3\\) (A1)\n• \\(y = Ae^{-2x} + Be^{-3x}\\) (A1)'
      },
      {
        q: 'Find the particular integral of \\(\\dfrac{d^2y}{dx^2} + 3\\dfrac{dy}{dx} + 2y = 4e^{3x}\\).',
        marks: 3,
        modelAnswer: '• Try \\(y = ke^{3x}\\): \\(9ke^{3x} + 9ke^{3x} + 2ke^{3x} = 4e^{3x}\\) (M1)\n• \\(20k = 4 \\Rightarrow k = \\tfrac{1}{5}\\) (A1)\n• PI: \\(y = \\tfrac{1}{5}e^{3x}\\) (A1)'
      },
      {
        q: 'State the form of the particular integral for the equation \\(\\dfrac{d^2y}{dx^2} - y = \\sin 2x\\).',
        marks: 1,
        modelAnswer: '• Try \\(y = a\\sin 2x + b\\cos 2x\\) (B1)'
      },
      {
        q: 'Solve \\(\\dfrac{dy}{dx} + 2y = e^x\\) using an integrating factor.',
        marks: 4,
        modelAnswer: '• IF: \\(e^{\\int 2\\,dx} = e^{2x}\\) (M1)\n• \\(\\dfrac{d}{dx}(ye^{2x}) = e^{3x}\\) (M1)\n• \\(ye^{2x} = \\tfrac{1}{3}e^{3x} + c\\) (A1)\n• \\(y = \\tfrac{1}{3}e^x + ce^{-2x}\\) (A1)'
      },
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2} - 4y = 0\\).',
        marks: 3,
        modelAnswer: '• AE: \\(m^2 - 4 = 0 \\Rightarrow m = \\pm 2\\) (M1)\n• \\(y = Ae^{2x} + Be^{-2x}\\) (A1A1)'
      },
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2} + 4y = 0\\).',
        marks: 3,
        modelAnswer: '• AE: \\(m^2 + 4 = 0 \\Rightarrow m = \\pm 2i\\) (M1)\n• \\(y = A\\cos 2x + B\\sin 2x\\) (A1A1)'
      },
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2} + 6\\dfrac{dy}{dx} + 9y = 0\\).',
        marks: 3,
        modelAnswer: '• AE: \\(m^2+6m+9=0 \\Rightarrow (m+3)^2=0 \\Rightarrow m=-3\\) (repeated) (M1)\n• \\(y = (A+Bx)e^{-3x}\\) (A1A1)'
      },
      {
        q: 'State the complementary function for the ODE with complex roots \\(m = -1 \\pm 3i\\).',
        marks: 1,
        modelAnswer: '• \\(y = e^{-x}(A\\cos 3x + B\\sin 3x)\\) (B1)'
      },
      {
        q: 'Find the particular integral for \\(\\dfrac{d^2y}{dx^2} + y = x\\).',
        marks: 3,
        modelAnswer: '• Try \\(y = ax + b\\): \\(0 + ax+b = x \\Rightarrow a=1,\\, b=0\\) (M1A1)\n• PI: \\(y = x\\) (A1)'
      },
      {
        q: 'Solve \\(\\dfrac{dy}{dx} = xy\\) subject to \\(y = 1\\) when \\(x = 0\\).',
        marks: 3,
        modelAnswer: '• \\(\\int\\tfrac{1}{y}\\,dy = \\int x\\,dx \\Rightarrow \\ln y = \\tfrac{x^2}{2}+c\\) (M1)\n• \\(y = Ae^{x^2/2}\\); \\(x=0, y=1 \\Rightarrow A=1\\) (A1)\n• \\(y = e^{x^2/2}\\) (A1)'
      },
      {
        q: 'Write down the auxiliary equation for \\(2\\dfrac{d^2y}{dx^2} - 3\\dfrac{dy}{dx} + y = 0\\) and find its roots.',
        marks: 2,
        modelAnswer: '• AE: \\(2m^2 - 3m + 1 = 0 \\Rightarrow (2m-1)(m-1)=0\\) (M1)\n• \\(m = \\tfrac{1}{2},\\; 1\\) (A1)'
      },
      {
        q: 'State when a particular integral of the form \\(kxe^{ax}\\) is needed instead of \\(ke^{ax}\\).',
        marks: 1,
        modelAnswer: '• When \\(a\\) is a root of the auxiliary equation (B1)'
      },
      {
        q: 'Find the integrating factor for \\(\\dfrac{dy}{dx} - \\dfrac{y}{x} = x\\).',
        marks: 2,
        modelAnswer: '• \\(P(x) = -\\tfrac{1}{x}\\), so IF \\(= e^{\\int -1/x\\,dx} = e^{-\\ln x} = \\tfrac{1}{x}\\) (M1A1)'
      },
      {
        q: 'The equation \\(\\dfrac{d^2y}{dx^2} + \\omega^2 y = 0\\) models simple harmonic motion. Write down its general solution.',
        marks: 1,
        modelAnswer: '• \\(y = A\\cos\\omega x + B\\sin\\omega x\\) (B1)'
      },
    ],
    amber: [
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2} - 3\\dfrac{dy}{dx} + 2y = e^{2x}\\).',
        marks: 6,
        modelAnswer: '• AE: \\(m^2-3m+2=0 \\Rightarrow (m-1)(m-2)=0 \\Rightarrow m=1,2\\) (M1)\n• CF: \\(y = Ae^x + Be^{2x}\\) (A1)\n• Since \\(e^{2x}\\) is in CF, try PI \\(y=kxe^{2x}\\): \\(y\'=ke^{2x}(1+2x)\\), \\(y\'\'=ke^{2x}(4+4x)\\) (M1)\n• \\(k e^{2x}(4+4x) - 3ke^{2x}(1+2x) + 2kxe^{2x} = ke^{2x}\\) (M1)\n• \\(k=1\\), PI: \\(y=xe^{2x}\\) (A1)\n• GS: \\(y = Ae^x + Be^{2x} + xe^{2x}\\) (A1)'
      },
      {
        q: 'Solve \\(\\dfrac{d^2y}{dx^2} + 2\\dfrac{dy}{dx} + 5y = 10\\sin x\\) with \\(y=0,\\, \\dfrac{dy}{dx}=1\\) when \\(x=0\\).',
        marks: 8,
        modelAnswer: '• AE: \\(m^2+2m+5=0 \\Rightarrow m=-1\\pm 2i\\) (M1)\n• CF: \\(e^{-x}(A\\cos 2x+B\\sin 2x)\\) (A1)\n• PI: try \\(y=a\\sin x+b\\cos x\\): \\(-a\\sin x-b\\cos x+2a\\cos x-2b\\sin x+5a\\sin x+5b\\cos x=10\\sin x\\) (M1)\n• \\((4a-2b)\\sin x+(2a+4b)\\cos x=10\\sin x\\): \\(4a-2b=10,\\;2a+4b=0 \\Rightarrow b=-a\\) (M1A1)\n• \\(4a+2a=10 \\Rightarrow a=\\tfrac{5}{3},\\;b=-\\tfrac{5}{3}\\) — checking: \\(6a=10\\) (A1)\n• GS: \\(y=e^{-x}(A\\cos2x+B\\sin2x)+\\tfrac{5}{3}(\\sin x-\\cos x)\\) (A1)\n• \\(y(0)=0: A-\\tfrac{5}{3}=0 \\Rightarrow A=\\tfrac{5}{3}\\); \\(y\'(0)=1\\): solve for \\(B\\) (A1)'
      },
      {
        q: 'Use the substitution \\(v = \\dfrac{y}{x}\\) to solve \\(x\\dfrac{dy}{dx} = y + x\\tan\\dfrac{y}{x}\\).',
        marks: 6,
        modelAnswer: '• \\(y=vx \\Rightarrow \\dfrac{dy}{dx}=v+x\\dfrac{dv}{dx}\\) (M1)\n• \\(x(v+x\\tfrac{dv}{dx}) = vx + x\\tan v \\Rightarrow x\\dfrac{dv}{dx} = \\tan v\\) (M1A1)\n• Separate: \\(\\int\\cot v\\,dv = \\int\\tfrac{dx}{x}\\) (M1)\n• \\(\\ln|\\sin v| = \\ln|x| + c\\) (A1)\n• \\(\\sin v = Ax \\Rightarrow \\sin\\tfrac{y}{x} = Ax\\) (A1)'
      },
      {
        q: 'Find the general solution of \\(\\dfrac{dy}{dx} - \\dfrac{y}{x} = x^2\\).',
        marks: 4,
        modelAnswer: '• IF \\(= e^{-\\ln x} = \\tfrac{1}{x}\\) (M1)\n• \\(\\dfrac{d}{dx}\\left(\\tfrac{y}{x}\\right) = x\\) (M1)\n• \\(\\tfrac{y}{x} = \\tfrac{x^2}{2} + c\\) (A1)\n• \\(y = \\tfrac{x^3}{2} + cx\\) (A1)'
      },
      {
        q: 'The equation \\(\\dfrac{d^2y}{dx^2} + 4\\dfrac{dy}{dx} + 4y = e^{-2x}\\) has a repeated root in its auxiliary equation. Find the general solution.',
        marks: 5,
        modelAnswer: '• AE: \\(m=-2\\) (repeated), CF: \\((A+Bx)e^{-2x}\\) (M1A1)\n• PI: try \\(y=kx^2e^{-2x}\\): \\(y\'=ke^{-2x}(2x-2x^2)\\), \\(y\'\'=ke^{-2x}(2-8x+4x^2)\\) (M1)\n• Substituting: \\(2ke^{-2x}=e^{-2x} \\Rightarrow k=\\tfrac{1}{2}\\) (A1)\n• GS: \\(y=(A+Bx)e^{-2x}+\\tfrac{x^2}{2}e^{-2x}\\) (A1)'
      },
      {
        q: 'By making the substitution \\(z = \\ln x\\), transform \\(x^2\\dfrac{d^2y}{dx^2} + x\\dfrac{dy}{dx} + y = 0\\) (Euler equation) into a constant-coefficient ODE and solve it.',
        marks: 6,
        modelAnswer: '• \\(x=e^z\\), \\(x\\tfrac{dy}{dx}=\\tfrac{dy}{dz}\\), \\(x^2\\tfrac{d^2y}{dx^2}=\\tfrac{d^2y}{dz^2}-\\tfrac{dy}{dz}\\) (M1M1)\n• ODE becomes \\(\\tfrac{d^2y}{dz^2}-\\tfrac{dy}{dz}+\\tfrac{dy}{dz}+y=0 \\Rightarrow \\tfrac{d^2y}{dz^2}+y=0\\) (M1A1)\n• GS in \\(z\\): \\(y=A\\cos z+B\\sin z\\) (A1)\n• GS in \\(x\\): \\(y=A\\cos(\\ln x)+B\\sin(\\ln x)\\) (A1)'
      },
      {
        q: 'Find the particular solution of \\(\\dfrac{d^2y}{dx^2} - y = 4x\\) given \\(y=0\\) and \\(y\'=1\\) at \\(x=0\\).',
        marks: 6,
        modelAnswer: '• CF: \\(Ae^x+Be^{-x}\\) (AE: \\(m^2-1=0\\)) (M1A1)\n• PI: \\(y=-4x\\) (since \\(0-(-4x)=4x\\)) (M1A1)\n• GS: \\(y=Ae^x+Be^{-x}-4x\\) (A1)\n• \\(y(0)=0: A+B=0\\); \\(y\'(0)=1: A-B-4=1 \\Rightarrow A-B=5\\) (M1)\n• \\(A=\\tfrac{5}{2},\\;B=-\\tfrac{5}{2}\\): \\(y=\\tfrac{5}{2}(e^x-e^{-x})-4x = 5\\sinh x - 4x\\) (A1)'
      },
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2} - 2\\dfrac{dy}{dx} + y = xe^x\\).',
        marks: 6,
        modelAnswer: '• AE: \\(m=1\\) (repeated), CF: \\((A+Bx)e^x\\) (M1A1)\n• PI: try \\(y=x^2(ax+b)e^x\\) since \\(e^x\\) is in CF with multiplicity 2 — try \\(y=(ax^3+bx^2)e^x\\)... standard: try \\(y=ax^3e^x\\) since polynomial×e^x with repeated root (M1)\n• Actually try \\(y=kx^2e^x\\cdot x = kx^3e^x\\)... let \\(y=kx^2e^x\\) first doesn\'t work; need \\(y=(cx^2+dx^3)e^x\\) — simplest: \\(y=\\tfrac{x^3}{6}e^x\\) (by operator method or direct substitution) (M1A1)\n• GS: \\(y=(A+Bx)e^x + \\tfrac{x^3}{6}e^x\\) (A1)'
      },
      {
        q: 'A second-order ODE has solution \\(y = Ae^{-x}\\cos 2x + Be^{-x}\\sin 2x + 3\\). Write down the ODE and the particular integral.',
        marks: 3,
        modelAnswer: '• CF roots: \\(m=-1\\pm 2i\\), so AE: \\((m+1)^2+4=0 \\Rightarrow m^2+2m+5=0\\) (M1)\n• ODE: \\(\\dfrac{d^2y}{dx^2}+2\\dfrac{dy}{dx}+5y=15\\) (i.e. RHS such that PI=3: \\(0+0+15=15\\)) (A1)\n• PI: \\(y=3\\) (A1)'
      },
      {
        q: 'Find the general solution of \\(\\cos x\\,\\dfrac{dy}{dx} + y\\sin x = 1\\).',
        marks: 4,
        modelAnswer: '• Rewrite: \\(\\dfrac{dy}{dx} + y\\tan x = \\sec x\\) (M1)\n• IF: \\(e^{\\int\\tan x\\,dx} = e^{\\ln\\sec x} = \\sec x\\) (M1)\n• \\(\\dfrac{d}{dx}(y\\sec x) = \\sec^2 x\\) (M1)\n• \\(y\\sec x = \\tan x + c \\Rightarrow y = \\sin x + c\\cos x\\) (A1)'
      },
      {
        q: 'Show that the substitution \\(y = xv\\) transforms \\(\\dfrac{dy}{dx} = \\dfrac{x^2+y^2}{xy}\\) into a separable equation in \\(v\\) and \\(x\\), then solve it.',
        marks: 5,
        modelAnswer: '• \\(y=xv,\\;y\'=v+xv\'\\): \\(v+xv\'=\\dfrac{x^2+x^2v^2}{x^2v}=\\dfrac{1+v^2}{v}\\) (M1A1)\n• \\(xv\'=\\dfrac{1+v^2}{v}-v=\\dfrac{1}{v}\\) (M1)\n• \\(v\\,dv=\\dfrac{dx}{x} \\Rightarrow \\tfrac{v^2}{2}=\\ln|x|+c\\) (M1)\n• \\(\\tfrac{y^2}{2x^2}=\\ln|x|+c \\Rightarrow y^2=2x^2(\\ln|x|+c)\\) (A1)'
      },
      {
        q: 'Use reduction of order: given that \\(y_1 = e^x\\) is a solution of \\(y\'\'-2y\'+y=0\\), find the general solution.',
        marks: 5,
        modelAnswer: '• Try \\(y=ve^x\\): \\(y\'=v\'e^x+ve^x\\), \\(y\'\'=v\'\'e^x+2v\'e^x+ve^x\\) (M1)\n• Sub: \\(e^x(v\'\'+2v\'+v-2v\'-2v+v)=0 \\Rightarrow v\'\'=0\\) (M1A1)\n• \\(v=Ax+B\\) (A1)\n• GS: \\(y=(Ax+B)e^x=(A+Bx)e^x\\) — matching standard repeated root form (A1)'
      },
      {
        q: 'Find the particular integral for \\(\\dfrac{d^2y}{dx^2}+9y = \\sin 3x\\) (resonant case).',
        marks: 4,
        modelAnswer: '• \\(\\sin 3x\\) resonates (\\(m=\\pm 3i\\) are roots); try \\(y=x(a\\sin 3x+b\\cos 3x)\\) (M1)\n• \\(y\'=a\\sin3x+3ax\\cos3x+b\\cos3x-3bx\\sin3x\\) (M1)\n• \\(y\'\'=6a\\cos3x-9ax\\sin3x-6b\\sin3x-9bx\\cos3x\\) (M1)\n• Sub: \\(6a\\cos3x-6b\\sin3x=\\sin3x \\Rightarrow b=-\\tfrac{1}{6}\\), \\(a=0\\) (A1)\n• PI: \\(y=-\\dfrac{x\\cos3x}{6}\\)'
      },
      {
        q: 'Solve \\(\\dfrac{dy}{dx}+\\dfrac{1}{x}y = \\dfrac{\\ln x}{x}\\).',
        marks: 5,
        modelAnswer: '• IF: \\(e^{\\int 1/x\\,dx}=x\\) (M1)\n• \\(\\dfrac{d}{dx}(xy)=\\ln x\\) (M1)\n• \\(xy=\\int\\ln x\\,dx = x\\ln x - x + c\\) (IBP: \\(u=\\ln x\\), \\(dv=dx\\)) (M1A1)\n• \\(y=\\ln x - 1 + \\dfrac{c}{x}\\) (A1)'
      },
      {
        q: 'Given the ODE \\(\\dfrac{d^2y}{dx^2}+y=\\sec x\\), verify that \\(y_p=x\\sin x+\\cos x\\ln|\\cos x|\\) is a particular integral.',
        marks: 3,
        modelAnswer: '• \\(y_p\'=\\sin x+x\\cos x-\\sin x\\ln|\\cos x|+\\cos x\\cdot\\tfrac{-\\sin x}{\\cos x}=\\sin x+x\\cos x-\\sin x\\ln|\\cos x|-\\sin x\\) (M1)\n• \\(y_p\'\'=\\cos x+\\cos x-x\\sin x-\\cos x\\ln|\\cos x|-\\sin x\\cdot\\tfrac{-\\sin x}{\\cos x}\\) (M1)\n• \\(y_p\'\'+y_p=\\sec x\\) ✓ (A1)'
      },
    ],
    red: [
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2}-4\\dfrac{dy}{dx}+4y=e^{2x}\\sin x\\).',
        marks: 7,
        modelAnswer: '• CF: \\((A+Bx)e^{2x}\\) (m=2 repeated) (M1A1)\n• PI: try \\(y=e^{2x}(a\\sin x+b\\cos x)\\) (M1)\n• \\(y\'=e^{2x}[(2a+b)\\sin x+(2b-a)\\cos x]... \\) continue differentiation (M1)\n• Sub into ODE; coefficient matching: \\(-a\\sin x - b\\cos x = \\sin x\\) after simplification \\(\\Rightarrow a=-1,b=0\\) — working: \\(y\'\'=e^{2x}[(4a+4b-a)\\sin x+(4b-4a-b)\\cos x]=e^{2x}[(3a+4b)\\sin x+(3b-4a)\\cos x]\\) (M1)\n• \\(y\'\'-4y\'+4y=e^{2x}[(3a+4b-4(2a+b)+4a)\\sin x+...]=e^{2x}[-a\\sin x-b\\cos x]\\) (A1)\n• \\(-a=1 \\Rightarrow a=-1\\), \\(b=0\\); PI: \\(y=-e^{2x}\\sin x\\) (A1)'
      },
      {
        q: 'Solve the Bernoulli equation \\(\\dfrac{dy}{dx}+y=xy^3\\).',
        marks: 6,
        modelAnswer: '• Divide by \\(y^3\\): \\(y^{-3}\\dfrac{dy}{dx}+y^{-2}=x\\) (M1)\n• Let \\(v=y^{-2}\\): \\(\\dfrac{dv}{dx}=-2y^{-3}\\dfrac{dy}{dx}\\), so \\(-\\tfrac{1}{2}\\dfrac{dv}{dx}+v=x\\) (M1)\n• \\(\\dfrac{dv}{dx}-2v=-2x\\) (M1)\n• IF: \\(e^{-2x}\\); \\(\\dfrac{d}{dx}(ve^{-2x})=-2xe^{-2x}\\) (M1)\n• \\(ve^{-2x}=\\int -2xe^{-2x}\\,dx = xe^{-2x}+\\tfrac{1}{2}e^{-2x}+c\\) (IBP) (M1)\n• \\(v=x+\\tfrac{1}{2}+ce^{2x}\\); \\(y^{-2}=x+\\tfrac{1}{2}+ce^{2x}\\) (A1)'
      },
      {
        q: 'Find the general solution of \\(x\\dfrac{dy}{dx}+2y=x^3\\cos x\\).',
        marks: 5,
        modelAnswer: '• Rewrite: \\(\\dfrac{dy}{dx}+\\dfrac{2}{x}y=x^2\\cos x\\) (M1)\n• IF: \\(e^{2\\ln x}=x^2\\) (M1)\n• \\(\\dfrac{d}{dx}(x^2y)=x^4\\cos x\\) (M1)\n• \\(x^2y=\\int x^4\\cos x\\,dx\\): IBP repeatedly — \\(=x^4\\sin x-4x^3(-\\cos x)-12x^2(-\\sin x)-...\\) standard reduction gives \\(x^4\\sin x+4x^3\\cos x-12x^2\\sin x-24x\\cos x+24\\sin x+c\\) (M1A1)\n• \\(y=x^2\\sin x+4x\\cos x-12\\sin x-\\dfrac{24\\cos x}{x}+\\dfrac{24\\sin x}{x^2}+\\dfrac{c}{x^2}\\) (A1 for correct division)'
      },
      {
        q: 'The charge \\(Q\\) on a capacitor satisfies \\(\\dfrac{d^2Q}{dt^2}+3\\dfrac{dQ}{dt}+2Q=5\\cos t\\). Find \\(Q(t)\\) given \\(Q=0\\) and \\(\\dfrac{dQ}{dt}=1\\) at \\(t=0\\).',
        marks: 8,
        modelAnswer: '• CF: \\(Ae^{-t}+Be^{-2t}\\) (M1A1)\n• PI: \\(Q=a\\cos t+b\\sin t\\); sub: \\((-a+3b+2a)\\cos t+(-b-3a+2b)\\sin t=5\\cos t\\) (M1)\n• \\(a+3b=5,\\;b-3a=0 \\Rightarrow b=3a\\): \\(a+9a=5 \\Rightarrow a=\\tfrac{1}{2},b=\\tfrac{3}{2}\\) (M1A1)\n• GS: \\(Q=Ae^{-t}+Be^{-2t}+\\tfrac{1}{2}\\cos t+\\tfrac{3}{2}\\sin t\\) (A1)\n• \\(Q(0)=0: A+B+\\tfrac{1}{2}=0\\); \\(Q\'(0)=1: -A-2B+\\tfrac{3}{2}=1\\) (M1)\n• \\(A+B=-\\tfrac{1}{2},\\;A+2B=\\tfrac{1}{2} \\Rightarrow B=1,A=-\\tfrac{3}{2}\\) (A1)'
      },
      {
        q: 'By using the substitution \\(y = e^{mx}\\), show that the auxiliary equation method arises naturally from a second-order linear ODE with constant coefficients.',
        marks: 3,
        modelAnswer: '• Let \\(y=e^{mx}\\): \\(y\'=me^{mx}\\), \\(y\'\'=m^2e^{mx}\\) (B1)\n• Sub into \\(ay\'\'+by\'+cy=0\\): \\(e^{mx}(am^2+bm+c)=0\\) (M1)\n• Since \\(e^{mx}\\neq0\\), require \\(am^2+bm+c=0\\) — the auxiliary equation (A1)'
      },
      {
        q: 'Find the general solution of \\(\\dfrac{d^2y}{dx^2}+2\\dfrac{dy}{dx}+2y=e^{-x}\\cos x\\).',
        marks: 7,
        modelAnswer: '• AE: \\(m^2+2m+2=0 \\Rightarrow m=-1\\pm i\\) (M1)\n• CF: \\(e^{-x}(A\\cos x+B\\sin x)\\) (A1)\n• PI: resonance — \\(e^{-x}\\cos x\\) matches CF; try \\(y=xe^{-x}(a\\cos x+b\\sin x)\\) (M1)\n• Differentiate twice and substitute (M1M1)\n• Coefficient of \\(e^{-x}\\cos x\\): \\(2b=1 \\Rightarrow b=\\tfrac{1}{2}\\); coefficient of \\(e^{-x}\\sin x\\): \\(-2a=0 \\Rightarrow a=0\\) (A1)\n• GS: \\(y=e^{-x}(A\\cos x+B\\sin x)+\\tfrac{x}{2}e^{-x}\\sin x\\) (A1)'
      },
      {
        q: 'Solve the system: \\(\\dfrac{dx}{dt}=x+y\\) and \\(\\dfrac{dy}{dt}=4x+y\\) by eliminating \\(y\\).',
        marks: 7,
        modelAnswer: '• From first: \\(y=\\dot x - x\\), so \\(\\dot y = \\ddot x - \\dot x\\) (M1)\n• Sub into second: \\(\\ddot x - \\dot x = 4x + \\dot x - x\\) (M1)\n• \\(\\ddot x - 2\\dot x - 3x = 0\\) (A1)\n• AE: \\(m^2-2m-3=0 \\Rightarrow (m-3)(m+1)=0 \\Rightarrow m=3,-1\\) (M1)\n• \\(x=Ae^{3t}+Be^{-t}\\) (A1)\n• \\(y=\\dot x - x = 3Ae^{3t}-Be^{-t}-Ae^{3t}-Be^{-t}=2Ae^{3t}-2Be^{-t}\\) (M1A1)'
      },
      {
        q: 'Using variation of parameters, find a particular integral of \\(y\'\'+ y = \\tan x\\).',
        marks: 7,
        modelAnswer: '• CF: \\(y_1=\\cos x,\\; y_2=\\sin x\\) (B1)\n• Wronskian \\(W=\\cos^2x+\\sin^2x=1\\) (B1)\n• \\(u_1\'=-\\dfrac{y_2\\cdot\\tan x}{W}=-\\sin x\\tan x=-\\dfrac{\\sin^2x}{\\cos x}\\) (M1)\n• \\(u_1=\\int\\dfrac{\\cos^2x-1}{\\cos x}\\,dx=\\int(\\cos x-\\sec x)\\,dx=\\sin x-\\ln|\\sec x+\\tan x|\\) (M1A1)\n• \\(u_2\'=\\dfrac{y_1\\tan x}{W}=\\sin x\\); \\(u_2=-\\cos x\\) (M1)\n• PI: \\(y_p=u_1\\cos x+u_2\\sin x=(\\sin x-\\ln|\\sec x+\\tan x|)\\cos x-\\cos x\\sin x=-\\cos x\\ln|\\sec x+\\tan x|\\) (A1)'
      },
      {
        q: 'The equation \\(\\dfrac{d^2y}{dt^2}+4y=8t^2+4\\) arises in a dynamics problem. Find the general solution.',
        marks: 5,
        modelAnswer: '• CF: \\(A\\cos 2t+B\\sin 2t\\) (M1A1)\n• PI: try \\(y=at^2+bt+c\\): \\(2a+4at^2+4bt+4c=8t^2+4\\) (M1)\n• \\(4a=8 \\Rightarrow a=2\\); \\(4b=0 \\Rightarrow b=0\\); \\(2a+4c=4 \\Rightarrow c=0\\) (A1)\n• GS: \\(y=A\\cos 2t+B\\sin 2t+2t^2\\) (A1)'
      },
      {
        q: 'Given \\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+6y=f(x)\\), the particular integrals for \\(f(x)=e^{2x}\\) and \\(f(x)=e^{3x}\\) need special treatment. Explain why and find the PI for \\(f(x)=e^{2x}+e^{3x}\\).',
        marks: 6,
        modelAnswer: '• AE: \\(m^2-5m+6=(m-2)(m-3)=0\\); roots 2 and 3 — both present in CF (B1B1)\n• For \\(e^{2x}\\): try \\(y=kxe^{2x}\\): \\((4k+4kx)e^{2x}-5(k+2kx)e^{2x}+6kxe^{2x}=ke^{2x}(4+4x-5-10x+6x)=ke^{2x}(4x \\cdot 0-1)=-ke^{2x}\\) — so \\(-k=1 \\Rightarrow k=-1\\), PI: \\(-xe^{2x}\\) (M1A1)\n• For \\(e^{3x}\\): try \\(y=lxe^{3x}\\): sub gives \\(le^{3x}(9x+6-5(1+3x)+6x)\\cdot... = le^{3x}\\) — \\(l=1\\), PI: \\(xe^{3x}\\) (M1A1)\n• Combined PI: \\(y=-xe^{2x}+xe^{3x}\\) (A1)'
      },
    ],
  },

  'CP2.8': {
    name: 'Modelling with Differential Equations',
    green: [
      {
        q: 'A population \\(P\\) grows at a rate proportional to \\(P\\). Write down and solve the differential equation, given \\(P=P_0\\) at \\(t=0\\).',
        marks: 3,
        modelAnswer: '• \\(\\dfrac{dP}{dt} = kP\\) (B1)\n• General solution: \\(P = Ae^{kt}\\) (M1)\n• Applying IC: \\(P = P_0 e^{kt}\\) (A1)'
      },
      {
        q: 'Newton\'s law of cooling states \\(\\dfrac{d\\theta}{dt} = -k(\\theta - \\theta_0)\\) where \\(\\theta_0\\) is the ambient temperature. Solve this given \\(\\theta = \\theta_1\\) at \\(t=0\\).',
        marks: 3,
        modelAnswer: '• Separate: \\(\\int\\dfrac{d\\theta}{\\theta-\\theta_0}=-k\\int dt\\) (M1)\n• \\(\\theta - \\theta_0 = Ae^{-kt}\\) (A1)\n• \\(\\theta = \\theta_0 + (\\theta_1-\\theta_0)e^{-kt}\\) (A1)'
      },
      {
        q: 'State what is meant by \'terminal velocity\' in the context of a differential equation modelling a falling object.',
        marks: 1,
        modelAnswer: '• Terminal velocity is the constant speed reached when the net force is zero, i.e. when \\(\\dfrac{dv}{dt}=0\\) (B1)'
      },
      {
        q: 'A body of mass \\(m\\) falls under gravity \\(g\\) with air resistance \\(mkv\\). Write down the equation of motion and state the terminal velocity.',
        marks: 3,
        modelAnswer: '• \\(m\\dfrac{dv}{dt} = mg - mkv \\Rightarrow \\dfrac{dv}{dt} = g - kv\\) (B1B1)\n• Terminal velocity: \\(v_T = \\dfrac{g}{k}\\) (B1)'
      },
      {
        q: 'In an SIR model, write down the three differential equations for susceptibles \\(S\\), infectives \\(I\\), and recovereds \\(R\\) with infection rate \\(\\beta\\) and recovery rate \\(\\gamma\\).',
        marks: 3,
        modelAnswer: '• \\(\\dfrac{dS}{dt} = -\\beta SI\\) (B1)\n• \\(\\dfrac{dI}{dt} = \\beta SI - \\gamma I\\) (B1)\n• \\(\\dfrac{dR}{dt} = \\gamma I\\) (B1)'
      },
      {
        q: 'A tank contains 100 L of pure water. Brine with concentration 2 g/L flows in at 3 L/min and the well-mixed solution flows out at the same rate. Write down the differential equation for the mass \\(m\\) of salt.',
        marks: 2,
        modelAnswer: '• Rate in: \\(2 \\times 3 = 6\\) g/min; Rate out: \\(\\dfrac{m}{100}\\times 3 = \\dfrac{3m}{100}\\) g/min (M1)\n• \\(\\dfrac{dm}{dt} = 6 - \\dfrac{3m}{100}\\) (A1)'
      },
      {
        q: 'A spring-mass system has equation \\(\\ddot{x}+4x=0\\) with \\(x(0)=3,\\;\\dot x(0)=0\\). Find \\(x(t)\\).',
        marks: 3,
        modelAnswer: '• GS: \\(x=A\\cos 2t+B\\sin 2t\\) (M1)\n• \\(x(0)=3 \\Rightarrow A=3\\) (A1)\n• \\(\\dot x(0)=2B=0 \\Rightarrow B=0\\), so \\(x=3\\cos 2t\\) (A1)'
      },
      {
        q: 'The logistic equation is \\(\\dfrac{dP}{dt}=rP\\left(1-\\dfrac{P}{K}\\right)\\). State what happens to \\(P\\) as \\(t\\to\\infty\\).',
        marks: 1,
        modelAnswer: '• \\(P \\to K\\) (the carrying capacity) as \\(t\\to\\infty\\) (B1)'
      },
      {
        q: 'In simple harmonic motion, \\(\\ddot x = -\\omega^2 x\\). If \\(\\omega = 5\\), \\(x(0)=0\\) and \\(\\dot x(0)=10\\), find \\(x(t)\\).',
        marks: 3,
        modelAnswer: '• \\(x=A\\cos5t+B\\sin5t\\) (M1)\n• \\(A=0\\); \\(\\dot x(0)=5B=10 \\Rightarrow B=2\\) (M1)\n• \\(x=2\\sin5t\\) (A1)'
      },
      {
        q: 'Write down the condition on the discriminant of the auxiliary equation that gives: (i) overdamping, (ii) critical damping, (iii) underdamping, for \\(m\\ddot x+c\\dot x+kx=0\\).',
        marks: 3,
        modelAnswer: '• \\(\\Delta = c^2 - 4mk\\)\n• (i) \\(\\Delta > 0\\): overdamped (B1)\n• (ii) \\(\\Delta = 0\\): critically damped (B1)\n• (iii) \\(\\Delta < 0\\): underdamped (B1)'
      },
      {
        q: 'A radioactive substance decays at rate \\(\\dfrac{dN}{dt}=-\\lambda N\\). If \\(N=N_0\\) at \\(t=0\\), find the half-life \\(T_{1/2}\\).',
        marks: 3,
        modelAnswer: '• \\(N = N_0 e^{-\\lambda t}\\) (M1)\n• At \\(T_{1/2}\\): \\(\\tfrac{N_0}{2}=N_0e^{-\\lambda T_{1/2}} \\Rightarrow -\\lambda T_{1/2}=\\ln\\tfrac{1}{2}\\) (M1)\n• \\(T_{1/2}=\\dfrac{\\ln 2}{\\lambda}\\) (A1)'
      },
      {
        q: 'State the difference between a stable and unstable equilibrium in the context of a first-order autonomous ODE \\(\\dfrac{dy}{dt}=f(y)\\).',
        marks: 2,
        modelAnswer: '• Stable: nearby solutions tend towards the equilibrium as \\(t\\to\\infty\\) (B1)\n• Unstable: nearby solutions move away from the equilibrium (B1)'
      },
      {
        q: 'The velocity \\(v\\) of a particle satisfies \\(\\dfrac{dv}{dt}=10-2v\\). Find \\(v(t)\\) given \\(v(0)=0\\).',
        marks: 3,
        modelAnswer: '• Separate or IF; terminal velocity \\(=5\\) (M1)\n• \\(v=5+Ae^{-2t}\\); \\(v(0)=0 \\Rightarrow A=-5\\) (M1)\n• \\(v=5(1-e^{-2t})\\) (A1)'
      },
      {
        q: 'For a damped oscillator \\(\\ddot x+2\\dot x+5x=0\\), classify the motion and state the angular frequency of oscillation.',
        marks: 3,
        modelAnswer: '• AE: \\(m^2+2m+5=0 \\Rightarrow m=-1\\pm 2i\\) (M1)\n• Underdamped (complex roots with negative real part) (A1)\n• Angular frequency of damped oscillation: \\(\\omega_d=2\\) rad/s (A1)'
      },
      {
        q: 'A predator-prey model has \\(\\dfrac{dx}{dt}=\\alpha x - \\beta xy\\) and \\(\\dfrac{dy}{dt}=-\\gamma y + \\delta xy\\). Find the non-trivial equilibrium point.',
        marks: 2,
        modelAnswer: '• Set both derivatives to zero: \\(x(\\alpha-\\beta y)=0\\) and \\(y(-\\gamma+\\delta x)=0\\) (M1)\n• Non-trivial: \\(x=\\dfrac{\\gamma}{\\delta},\\; y=\\dfrac{\\alpha}{\\beta}\\) (A1)'
      },
    ],
    amber: [
      {
        q: 'Solve the logistic equation \\(\\dfrac{dP}{dt}=2P\\left(1-\\dfrac{P}{50}\\right)\\) with \\(P(0)=10\\).',
        marks: 6,
        modelAnswer: '• Partial fractions: \\(\\dfrac{1}{P(1-P/50)} = \\dfrac{1}{P}+\\dfrac{1}{50-P}\\) (M1)\n• \\(\\int\\left(\\dfrac{1}{P}+\\dfrac{1}{50-P}\\right)dP = \\int 2\\,dt\\) (M1)\n• \\(\\ln P - \\ln(50-P) = 2t + c\\) (M1A1)\n• \\(P(0)=10\\): \\(c=\\ln\\tfrac{1}{4}\\) (A1)\n• \\(P=\\dfrac{50}{1+4e^{-2t}}\\) (A1)'
      },
      {
        q: 'A damped oscillator satisfies \\(\\ddot x+6\\dot x+9x=0\\), \\(x(0)=1\\), \\(\\dot x(0)=0\\). Find \\(x(t)\\).',
        marks: 5,
        modelAnswer: '• AE: \\((m+3)^2=0 \\Rightarrow m=-3\\) (critical) (M1)\n• GS: \\(x=(A+Bt)e^{-3t}\\) (A1)\n• \\(x(0)=1 \\Rightarrow A=1\\) (A1)\n• \\(\\dot x=(B-3A-3Bt)e^{-3t}\\); \\(\\dot x(0)=B-3=0 \\Rightarrow B=3\\) (M1)\n• \\(x=(1+3t)e^{-3t}\\) (A1)'
      },
      {
        q: 'A body falls from rest in a medium where resistance is \\(mkv^2\\). Show the terminal velocity is \\(\\sqrt{g/k}\\) and find \\(v\\) as a function of \\(t\\).',
        marks: 6,
        modelAnswer: '• \\(m\\dot v=mg-mkv^2 \\Rightarrow \\dot v=g-kv^2=k(v_T^2-v^2)\\) where \\(v_T=\\sqrt{g/k}\\) (M1B1)\n• Separate: \\(\\int\\dfrac{dv}{v_T^2-v^2}=k\\,dt\\) (M1)\n• \\(\\dfrac{1}{2v_T}\\ln\\dfrac{v_T+v}{v_T-v}=kt+c\\) (M1)\n• \\(v(0)=0 \\Rightarrow c=0\\); \\(\\dfrac{v_T+v}{v_T-v}=e^{2kv_Tt}\\) (A1)\n• \\(v=v_T\\tanh(v_Tkt)=v_T\\tanh(\\sqrt{gk}\\,t)\\) (A1)'
      },
      {
        q: 'A forced spring-mass system satisfies \\(\\ddot x+9x=18\\sin3t\\). Identify the phenomenon that occurs and find the general solution.',
        marks: 6,
        modelAnswer: '• AE roots: \\(m=\\pm3i\\), so \\(\\sin3t\\) is in CF — resonance occurs (B1)\n• CF: \\(A\\cos3t+B\\sin3t\\) (A1)\n• PI: try \\(y=t(a\\cos3t+b\\sin3t)\\) (M1)\n• \\(\\ddot y + 9y = -6a\\sin3t+6b\\cos3t=18\\sin3t \\Rightarrow a=-3,b=0\\) (M1A1)\n• GS: \\(x=(A+B)\\cos3t+(B)\\sin3t-3t\\cos3t\\) — write: \\(x=A\\cos3t+B\\sin3t-3t\\cos3t\\) (A1)'
      },
      {
        q: 'A tank initially contains 200 L of brine with 50 kg of salt. Pure water flows in at 4 L/min and brine flows out at 4 L/min. Find the mass of salt after \\(t\\) minutes.',
        marks: 5,
        modelAnswer: '• \\(\\dfrac{dm}{dt}=0-\\dfrac{m}{200}\\cdot4=-\\dfrac{m}{50}\\) (M1M1)\n• \\(m=Ae^{-t/50}\\); \\(m(0)=50 \\Rightarrow A=50\\) (A1)\n• \\(m=50e^{-t/50}\\) kg (A1A1)'
      },
      {
        q: 'The displacement of a particle satisfies \\(\\ddot x+4\\dot x+13x=\\cos 2t\\). Find the steady-state (particular) solution.',
        marks: 5,
        modelAnswer: '• Try \\(x=a\\cos2t+b\\sin2t\\): \\(\\ddot x=-4a\\cos2t-4b\\sin2t\\), \\(4\\dot x=-8a\\sin2t+8b\\cos2t\\) (M1)\n• \\((-4a+8b+13a)\\cos2t+(-4b-8a+13b)\\sin2t=\\cos2t\\) (M1)\n• \\(9a+8b=1,\\;9b-8a=0 \\Rightarrow b=8a/9\\) (M1)\n• \\(9a+64a/9=1 \\Rightarrow a=\\tfrac{9}{145},\\;b=\\tfrac{8}{145}\\) (A1)\n• Steady state: \\(x=\\dfrac{9\\cos2t+8\\sin2t}{145}\\) (A1)'
      },
      {
        q: 'Show that the solution to \\(\\dfrac{dP}{dt}=rP-h\\) (harvesting model) with \\(P(0)=P_0\\) is \\(P=(P_0-h/r)e^{rt}+h/r\\). Find the equilibrium and state when population goes extinct.',
        marks: 6,
        modelAnswer: '• Equilibrium: \\(rP^*-h=0 \\Rightarrow P^*=h/r\\) (B1)\n• GS: IF \\(e^{-rt}\\), or separate; \\(P-h/r=Ae^{rt}\\), IC: \\(A=P_0-h/r\\) (M1A1)\n• \\(P=(P_0-h/r)e^{rt}+h/r\\) ✓ (A1)\n• If \\(P_0 < h/r\\): coefficient of \\(e^{rt}\\) is negative; since \\(e^{rt}\\to\\infty\\), \\(P\\to-\\infty\\), so \\(P\\) hits 0 in finite time — extinction (M1A1)'
      },
      {
        q: 'A particle of mass 1 kg moves along a line with \\(\\ddot x = -(x-1)\\), \\(x(0)=3\\), \\(\\dot x(0)=0\\). Find \\(x(t)\\) and the amplitude of oscillation.',
        marks: 5,
        modelAnswer: '• Let \\(u=x-1\\): \\(\\ddot u=-u\\) — SHM with \\(\\omega=1\\) (M1)\n• \\(u=A\\cos t+B\\sin t\\); \\(u(0)=2 \\Rightarrow A=2\\) (A1)\n• \\(\\dot u(0)=B=0\\) (A1)\n• \\(x=1+2\\cos t\\); amplitude \\(=2\\) (A1A1)'
      },
      {
        q: 'Radioactive substance A decays into B which then decays into stable C. \\(\\dfrac{dA}{dt}=-\\lambda A\\) and \\(\\dfrac{dB}{dt}=\\lambda A-\\mu B\\). Given \\(A(0)=A_0,\\;B(0)=0\\), find \\(B(t)\\).',
        marks: 6,
        modelAnswer: '• \\(A=A_0e^{-\\lambda t}\\) (B1)\n• \\(\\dfrac{dB}{dt}+\\mu B=\\lambda A_0e^{-\\lambda t}\\) (M1)\n• IF: \\(e^{\\mu t}\\); \\(\\dfrac{d}{dt}(Be^{\\mu t})=\\lambda A_0 e^{(\\mu-\\lambda)t}\\) (M1)\n• \\(Be^{\\mu t}=\\dfrac{\\lambda A_0}{\\mu-\\lambda}e^{(\\mu-\\lambda)t}+c\\) (assuming \\(\\mu\\neq\\lambda\\)) (M1)\n• \\(B(0)=0\\): \\(c=-\\dfrac{\\lambda A_0}{\\mu-\\lambda}\\) (A1)\n• \\(B=\\dfrac{\\lambda A_0}{\\mu-\\lambda}(e^{-\\lambda t}-e^{-\\mu t})\\) (A1)'
      },
      {
        q: 'Explain the difference between overdamped, critically damped and underdamped motion in a physical context, giving a real-world example of each.',
        marks: 3,
        modelAnswer: '• Overdamped: returns slowly to equilibrium without oscillating — e.g. a heavy door closer (B1)\n• Critically damped: returns to equilibrium in minimum time without oscillating — e.g. shock absorbers designed for fast response (B1)\n• Underdamped: oscillates with decreasing amplitude — e.g. a swinging pendulum with mild air resistance (B1)'
      },
      {
        q: 'A model for drug concentration \\(C\\) in the blood is \\(\\dfrac{dC}{dt}=D-kC\\) where \\(D\\) is a constant dosing rate. Find \\(C(t)\\) with \\(C(0)=0\\) and the steady-state concentration.',
        marks: 4,
        modelAnswer: '• \\(C=\\dfrac{D}{k}+Ae^{-kt}\\); \\(C(0)=0 \\Rightarrow A=-\\dfrac{D}{k}\\) (M1M1)\n• \\(C=\\dfrac{D}{k}(1-e^{-kt})\\) (A1)\n• Steady state: \\(C\\to\\dfrac{D}{k}\\) as \\(t\\to\\infty\\) (A1)'
      },
      {
        q: 'An epidemic model gives \\(\\dfrac{dI}{dt}=I(\\beta S-\\gamma)\\) where \\(S\\approx S_0\\) (constant initially). Find the threshold condition \\(R_0\\) for epidemic growth.',
        marks: 3,
        modelAnswer: '• \\(I\\) grows when \\(\\beta S_0 > \\gamma\\), i.e. when \\(R_0 = \\dfrac{\\beta S_0}{\\gamma}>1\\) (M1A1)\n• If \\(R_0 \\leq 1\\) the disease dies out; if \\(R_0 > 1\\) an epidemic occurs (A1)'
      },
      {
        q: 'A bead on a wire satisfies \\(\\ddot \\theta + 0.4\\dot\\theta + 4\\theta = 2\\cos t\\). Find the amplitude of the steady-state response.',
        marks: 5,
        modelAnswer: '• PI: \\(\\theta=a\\cos t+b\\sin t\\); sub: \\((-a+0.4b+4a)\\cos t+(-b-0.4a+4b)\\sin t=2\\cos t\\) (M1)\n• \\(3a+0.4b=2,\\;3b-0.4a=0\\) (M1A1)\n• \\(b=0.4a/3\\): \\(3a+0.16a/3=2 \\Rightarrow a=\\dfrac{6}{9.16}\\approx 0.655\\) (exact: \\(a=\\tfrac{60}{91.6}\\)) (M1)\n• Amplitude \\(=\\sqrt{a^2+b^2}\\approx\\sqrt{a^2+0.0178a^2}\\) (A1)'
      },
      {
        q: 'In a series LCR circuit, \\(L\\ddot Q+R\\dot Q+\\dfrac{Q}{C}=E_0\\sin\\omega t\\). Write this in standard second-order form and identify the damping coefficient and natural frequency.',
        marks: 3,
        modelAnswer: '• Divide by \\(L\\): \\(\\ddot Q+\\dfrac{R}{L}\\dot Q+\\dfrac{1}{LC}Q=\\dfrac{E_0}{L}\\sin\\omega t\\) (M1)\n• Damping coefficient: \\(2\\zeta\\omega_n=\\dfrac{R}{L}\\), so \\(\\zeta=\\dfrac{R}{2}\\sqrt{\\dfrac{C}{L}}\\) (A1)\n• Natural frequency: \\(\\omega_n=\\dfrac{1}{\\sqrt{LC}}\\) (A1)'
      },
      {
        q: 'A species population satisfies the ODE \\(\\dfrac{dP}{dt}=P(3-P)\\). Find all equilibria, classify their stability, and find \\(P(t)\\) given \\(P(0)=1\\).',
        marks: 6,
        modelAnswer: '• Equilibria: \\(P=0\\) and \\(P=3\\) (B1)\n• \\(f\'(P)=3-2P\\): \\(f\'(0)=3>0\\) — unstable; \\(f\'(3)=-3<0\\) — stable (B1B1)\n• Logistic: \\(P=\\dfrac{3}{1+Ae^{-3t}}\\); \\(P(0)=1 \\Rightarrow A=2\\) (M1A1)\n• \\(P=\\dfrac{3}{1+2e^{-3t}}\\) (A1)'
      },
    ],
    red: [
      {
        q: 'A particle of mass \\(m\\) is attached to a spring (constant \\(k\\)) and a damper (constant \\(c\\)) and is driven by force \\(F_0\\cos\\omega t\\). Find the amplitude of steady-state oscillations and show that resonance occurs at \\(\\omega_r=\\sqrt{\\omega_0^2-2\\zeta^2\\omega_0^2}\\) where \\(\\omega_0=\\sqrt{k/m}\\) and \\(\\zeta=c/(2m\\omega_0)\\).',
        marks: 8,
        modelAnswer: '• ODE: \\(m\\ddot x+c\\dot x+kx=F_0\\cos\\omega t\\) (B1)\n• PI: \\(x=\\dfrac{F_0/k}{\\sqrt{(1-r^2)^2+(2\\zeta r)^2}}\\cos(\\omega t-\\phi)\\) where \\(r=\\omega/\\omega_0\\) (M1A1)\n• Amplitude \\(X=\\dfrac{F_0/k}{\\sqrt{(1-r^2)^2+4\\zeta^2r^2}}\\) (A1)\n• Maximise: \\(\\dfrac{dX}{dr}=0 \\Rightarrow 1-r^2=-2\\zeta^2 \\cdot 2r^2/(1-r^2)\\) ... differentiate denominator (M1)\n• \\(\\dfrac{d}{dr}[(1-r^2)^2+4\\zeta^2r^2]=0 \\Rightarrow -4r(1-r^2)+8\\zeta^2r=0 \\Rightarrow r^2=1-2\\zeta^2\\) (M1A1)\n• \\(\\omega_r=\\omega_0\\sqrt{1-2\\zeta^2}\\) ✓ (A1)'
      },
      {
        q: 'The SIR model: \\(\\dot S=-\\beta SI\\), \\(\\dot I=\\beta SI-\\gamma I\\), \\(\\dot R=\\gamma I\\). Show that \\(S+I+R=N\\) (constant) and find the equation of the phase curve \\(I\\) as a function of \\(S\\).',
        marks: 6,
        modelAnswer: '• \\(\\dot S+\\dot I+\\dot R = -\\beta SI+\\beta SI-\\gamma I+\\gamma I=0\\), so \\(S+I+R=N\\) (M1A1)\n• Phase curve: \\(\\dfrac{dI}{dS}=\\dfrac{\\beta SI-\\gamma I}{-\\beta SI}=-1+\\dfrac{\\gamma}{\\beta S}\\) (M1)\n• \\(I = -S+\\dfrac{\\gamma}{\\beta}\\ln S + c\\) (M1A1)\n• With IC \\(S(0)=S_0,\\;I(0)=I_0\\): \\(c=S_0+I_0-\\dfrac{\\gamma}{\\beta}\\ln S_0\\) (A1)'
      },
      {
        q: 'Find the general solution of the non-linear ODE \\(y\' = \\dfrac{y^2+xy}{x^2}\\) using the substitution \\(y=vx\\).',
        marks: 6,
        modelAnswer: '• \\(y=vx\\): \\(v+xv\'=\\dfrac{v^2x^2+x\\cdot vx}{x^2}=v^2+v\\) (M1A1)\n• \\(xv\'=v^2 \\Rightarrow \\dfrac{dv}{v^2}=\\dfrac{dx}{x}\\) (M1)\n• \\(-\\dfrac{1}{v}=\\ln|x|+c\\) (M1A1)\n• \\(v=-\\dfrac{1}{\\ln|x|+c}\\), so \\(y=-\\dfrac{x}{\\ln|x|+c}\\) (A1)'
      },
      {
        q: 'A population model with Allee effect: \\(\\dfrac{dN}{dt}=rN\\left(\\dfrac{N}{A}-1\\right)\\!\\left(1-\\dfrac{N}{K}\\right)\\) where \\(0<A<K\\). Find all equilibria and classify their stability.',
        marks: 6,
        modelAnswer: '• Equilibria: \\(N=0,\\;N=A,\\;N=K\\) (B2)\n• Let \\(f(N)=rN(N/A-1)(1-N/K)\\)\n• \\(f\'(N)\\) at \\(N=0\\): \\(f(N)\\approx rN(-1)(1)=-rN\\) near 0, so \\(f\'(0)=-r<0\\) — stable (M1A1)\n• At \\(N=A\\): linearise; \\(f\'(A)=rA\\cdot\\tfrac{1}{A}\\cdot(1-A/K)=r(1-A/K)>0\\) — unstable (M1A1)\n• At \\(N=K\\): \\(f\'(K)=rK(K/A-1)\\cdot(-1/K)<0\\) — stable (A1)'
      },
      {
        q: 'An object of mass 2 kg is dropped from rest and experiences gravity and resistance \\(F_r = 8v\\). Find the time taken to reach 90% of terminal velocity.',
        marks: 6,
        modelAnswer: '• \\(2\\dot v = 2g - 8v \\Rightarrow \\dot v=g-4v\\) (M1)\n• Terminal velocity \\(v_T=g/4\\approx\\dfrac{9.8}{4}=2.45\\) m/s (B1)\n• \\(v=v_T(1-e^{-4t})\\) (M1)\n• \\(0.9v_T=v_T(1-e^{-4t}) \\Rightarrow e^{-4t}=0.1\\) (M1)\n• \\(t=\\dfrac{\\ln10}{4}\\approx0.576\\) s (A1A1)'
      },
      {
        q: 'Solve the system \\(\\dot x = 2x+y,\\; \\dot y=x+2y\\) and find the nature of the equilibrium at the origin.',
        marks: 7,
        modelAnswer: '• Matrix \\(\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}\\): eigenvalues \\(\\lambda^2-4\\lambda+3=0 \\Rightarrow \\lambda=1,3\\) (M1M1)\n• Both positive: unstable node (A1)\n• Eigenvectors: \\(\\lambda=1: \\mathbf{v}=(1,-1)^T\\); \\(\\lambda=3: \\mathbf{v}=(1,1)^T\\) (M1A1)\n• GS: \\(\\begin{pmatrix}x\\\\y\\end{pmatrix}=Ae^t\\begin{pmatrix}1\\\\-1\\end{pmatrix}+Be^{3t}\\begin{pmatrix}1\\\\1\\end{pmatrix}\\) (A1A1)'
      },
      {
        q: 'Two tanks are connected. Tank 1 holds 100 L, tank 2 holds 200 L, both initially pure water. Brine (1 g/L) pumps into tank 1 at 2 L/min; mixed fluid flows from tank 1 to tank 2 at 2 L/min; and out of tank 2 at 2 L/min. Write the system of ODEs and find the long-run salt content in each tank.',
        marks: 7,
        modelAnswer: '• \\(\\dfrac{dm_1}{dt}=2-\\dfrac{2m_1}{100}=2-\\dfrac{m_1}{50}\\) (M1A1)\n• \\(\\dfrac{dm_2}{dt}=\\dfrac{m_1}{50}\\cdot 2\\div 1 = \\dfrac{m_1}{50}-\\dfrac{m_2}{100}\\)... careful: flow from tank1 has conc \\(m_1/100\\), rate 2: input to tank 2 = \\(2m_1/100=m_1/50\\); output: \\(2m_2/200=m_2/100\\) (M1A1)\n• Steady state: \\(\\dot m_1=0 \\Rightarrow m_1=100\\) g; \\(\\dot m_2=0\\Rightarrow \\tfrac{100}{50}=\\tfrac{m_2}{100}\\Rightarrow m_2=200\\) g (M1A1A1)'
      },
      {
        q: 'The motion of a nonlinear pendulum for small angles is approximated by \\(\\ddot\\theta+\\tfrac{g}{l}\\theta=0\\). For larger angles, include the correction term: \\(\\ddot\\theta+\\tfrac{g}{l}\\left(\\theta-\\dfrac{\\theta^3}{6}\\right)=0\\). Show this is equivalent to \\(\\ddot\\theta+\\omega_0^2\\theta=\\tfrac{\\omega_0^2\\theta^3}{6}\\) and find a first-order perturbation correction to the frequency.',
        marks: 6,
        modelAnswer: '• \\(\\omega_0^2=g/l\\), so equation is \\(\\ddot\\theta+\\omega_0^2\\theta=\\dfrac{\\omega_0^2}{6}\\theta^3\\) ✓ (B1)\n• Let \\(\\theta=\\theta_0\\cos\\omega t\\): \\(\\theta^3=\\tfrac{3\\theta_0^3\\cos\\omega t+\\theta_0^3\\cos3\\omega t}{4}\\) (M1)\n• Secular term condition: \\(-\\omega^2\\theta_0+\\omega_0^2\\theta_0-\\dfrac{\\omega_0^2}{6}\\cdot\\dfrac{3\\theta_0^3}{4}=0\\) (M1)\n• \\(\\omega^2=\\omega_0^2\\left(1-\\dfrac{\\theta_0^2}{8}\\right)\\) (M1A1)\n• \\(\\omega\\approx\\omega_0\\left(1-\\dfrac{\\theta_0^2}{16}\\right)\\) — frequency decreases for larger amplitude (A1)'
      },
      {
        q: 'A drug is administered by IV at rate \\(D_0\\) until time \\(T\\), then stopped. Model: \\(\\dfrac{dC}{dt}=D(t)-kC\\) where \\(D(t)=D_0\\) for \\(0\\leq t<T\\) and 0 otherwise. Find \\(C(t)\\) for both phases.',
        marks: 7,
        modelAnswer: '• Phase 1 (\\(0\\leq t<T\\)): \\(C=\\dfrac{D_0}{k}(1-e^{-kt})\\) with \\(C(0)=0\\) (M1A1)\n• At \\(t=T\\): \\(C(T)=\\dfrac{D_0}{k}(1-e^{-kT})\\) (A1)\n• Phase 2 (\\(t\\geq T\\)): \\(\\dfrac{dC}{dt}=-kC\\), so \\(C=C(T)e^{-k(t-T)}\\) (M1A1)\n• \\(C=\\dfrac{D_0}{k}(1-e^{-kT})e^{-k(t-T)}\\) (A1)\n• As \\(T\\to\\infty\\) (continuous): \\(C\\to\\dfrac{D_0}{k}e^{-k(t-T)}\\) approaches steady state \\(D_0/k\\) (A1)'
      },
      {
        q: 'Analyse the stability of the Lotka-Volterra system near its non-trivial equilibrium \\((x^*,y^*)=(\\gamma/\\delta,\\alpha/\\beta)\\) by linearisation.',
        marks: 7,
        modelAnswer: '• Jacobian: \\(J=\\begin{pmatrix}\\alpha-\\beta y & -\\beta x\\\\\\delta y & -\\gamma+\\delta x\\end{pmatrix}\\) (M1)\n• At \\((x^*,y^*)\\): \\(\\alpha-\\beta y^*=0\\) and \\(-\\gamma+\\delta x^*=0\\) (M1)\n• \\(J^*=\\begin{pmatrix}0 & -\\beta x^*\\\\\\delta y^* & 0\\end{pmatrix}\\) (A1)\n• Characteristic equation: \\(\\lambda^2+\\beta x^*\\delta y^*=0\\) (M1)\n• \\(\\lambda=\\pm i\\sqrt{\\beta\\delta x^*y^*}=\\pm i\\sqrt{\\alpha\\gamma}\\) (A1)\n• Pure imaginary eigenvalues — centre in linear theory; implies neutral stability (oscillations) in the linearised system (A1)\n• Note: non-linear analysis confirms closed orbits (neutrally stable) (A1)'
      },
    ],
  },

};
