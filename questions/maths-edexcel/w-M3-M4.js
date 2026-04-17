const EDEXCEL_WRITTEN_M3_M4 = {

  'M3': {
    name: 'Forces and Newton\'s Laws',
    green: [
      {
        q: 'A particle of mass 5 kg is acted on by a resultant force of 20 N. Find the acceleration of the particle.',
        marks: 2, tier: 'green',
        modelAnswer: 'Apply Newton\'s second law: \\(F = ma\\). \\(20 = 5a\\), so \\(a = 4\\) m/s².'
      },
      {
        q: 'A particle of mass 8 kg accelerates at 3 m/s². Find the resultant force acting on it.',
        marks: 2, tier: 'green',
        modelAnswer: '\\(F = ma = 8 \\times 3 = 24\\) N.'
      },
      {
        q: 'A force of 45 N produces an acceleration of 9 m/s² in a particle. Find the mass of the particle.',
        marks: 2, tier: 'green',
        modelAnswer: '\\(F = ma \\Rightarrow m = \\dfrac{F}{a} = \\dfrac{45}{9} = 5\\) kg.'
      },
      {
        q: 'Find the weight of a particle of mass 3 kg. Take \\(g = 9.8\\) m/s².',
        marks: 2, tier: 'green',
        modelAnswer: '\\(W = mg = 3 \\times 9.8 = 29.4\\) N.'
      },
      {
        q: 'A particle of mass 4 kg rests on a smooth horizontal surface. Find the normal reaction exerted by the surface on the particle. Take \\(g = 9.8\\) m/s².',
        marks: 2, tier: 'green',
        modelAnswer: 'Since the surface is horizontal and the particle is in equilibrium vertically: \\(R = mg = 4 \\times 9.8 = 39.2\\) N.'
      },
      {
        q: 'A particle of mass 6 kg rests on a smooth horizontal floor. A horizontal force of 12 N acts on it. Find its acceleration.',
        marks: 2, tier: 'green',
        modelAnswer: 'Resolving horizontally: \\(F = ma\\), so \\(12 = 6a\\), giving \\(a = 2\\) m/s².'
      },
      {
        q: 'A particle of mass 2.5 kg is pulled across a smooth horizontal surface by a horizontal force of 15 N. Find the acceleration and the normal reaction. (\\(g = 9.8\\) m/s²)',
        marks: 3, tier: 'green',
        modelAnswer: 'Horizontally: \\(15 = 2.5a\\), so \\(a = 6\\) m/s². Vertically (equilibrium): \\(R = mg = 2.5 \\times 9.8 = 24.5\\) N.'
      },
      {
        q: 'Two masses of 3 kg and 5 kg are connected by a light inextensible string passing over a smooth fixed pulley (Atwood machine). Find the acceleration of the system. (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'green',
        modelAnswer: 'Let \\(a\\) be the acceleration. For the 5 kg mass (moving down): \\(5g - T = 5a\\). For the 3 kg mass (moving up): \\(T - 3g = 3a\\). Adding: \\(2g = 8a\\), so \\(a = \\dfrac{2 \\times 9.8}{8} = 2.45\\) m/s².',
        diagram: true
      },
      {
        q: 'In an Atwood machine, masses of 4 kg and 6 kg hang over a smooth pulley. Find the tension in the string. (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'green',
        modelAnswer: 'Acceleration: \\(a = \\dfrac{(6-4)g}{6+4} = \\dfrac{2 \\times 9.8}{10} = 1.96\\) m/s². Tension from the 4 kg equation: \\(T - 4g = 4a\\), so \\(T = 4(9.8 + 1.96) = 4 \\times 11.76 = 47.04\\) N.',
        diagram: true
      },
      {
        q: 'A particle of mass 10 kg rests on a rough horizontal surface. A horizontal force of 30 N is applied. The normal reaction is 98 N. Find the frictional force if the particle is in equilibrium. (\\(g = 9.8\\) m/s²)',
        marks: 3, tier: 'green',
        modelAnswer: 'Since the particle is in equilibrium, the frictional force equals the applied force: \\(F_{\\text{friction}} = 30\\) N (opposing motion).'
      },
      {
        q: 'A box of mass 7 kg rests on a smooth horizontal table. Find the normal reaction when a vertical downward force of 20 N is also applied to the box. (\\(g = 9.8\\) m/s²)',
        marks: 3, tier: 'green',
        modelAnswer: 'Resolving vertically (equilibrium): \\(R = mg + F = 7 \\times 9.8 + 20 = 68.6 + 20 = 88.6\\) N.'
      },
      {
        q: 'A force of \\((3\\mathbf{i} + 4\\mathbf{j})\\) N acts on a particle of mass 5 kg. Find the magnitude of the acceleration.',
        marks: 3, tier: 'green',
        modelAnswer: 'Magnitude of force: \\(|F| = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = 5\\) N. Acceleration: \\(a = \\dfrac{F}{m} = \\dfrac{5}{5} = 1\\) m/s².'
      },
      {
        q: 'A particle of mass 3 kg is on a smooth horizontal surface. It accelerates from rest to 12 m/s in 4 s. Find the horizontal force acting on it.',
        marks: 3, tier: 'green',
        modelAnswer: 'First find acceleration: \\(a = \\dfrac{v-u}{t} = \\dfrac{12-0}{4} = 3\\) m/s². Then \\(F = ma = 3 \\times 3 = 9\\) N.'
      },
      {
        q: 'A particle of mass 12 kg slides down a smooth inclined plane at 30° to the horizontal. Find the component of gravity along the slope. (\\(g = 9.8\\) m/s²)',
        marks: 3, tier: 'green',
        modelAnswer: 'Component of gravity along slope \\(= mg\\sin 30° = 12 \\times 9.8 \\times 0.5 = 58.8\\) N. This is also the net force, giving acceleration \\(a = g\\sin 30° = 4.9\\) m/s².',
        diagram: true
      },
      {
        q: 'In an Atwood machine, masses of 2 kg and 8 kg are connected over a smooth pulley. Find the acceleration of the system and the tension in the string. (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'green',
        modelAnswer: 'Acceleration: \\(a = \\dfrac{(8-2)g}{8+2} = \\dfrac{6 \\times 9.8}{10} = 5.88\\) m/s². Tension: \\(T = 2(g + a) = 2(9.8 + 5.88) = 2 \\times 15.68 = 31.36\\) N.',
        diagram: true
      },
    ],
    amber: [
      {
        q: 'A particle of mass 5 kg rests on a smooth horizontal table and is connected by a light inextensible string, passing over a smooth pulley at the edge of the table, to a mass of 3 kg hanging freely. Find the acceleration of the system and the tension in the string. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'Let \\(a\\) = acceleration, \\(T\\) = tension. For 3 kg (hanging, moving down): \\(3g - T = 3a\\). For 5 kg (on table, moving horizontally): \\(T = 5a\\). Substitute: \\(3g - 5a = 3a\\), so \\(8a = 3 \\times 9.8 = 29.4\\), giving \\(a = 3.675\\) m/s². Then \\(T = 5 \\times 3.675 = 18.375\\) N.',
        diagram: true
      },
      {
        q: 'A particle of mass 4 kg is on a smooth table connected to a hanging mass of 6 kg via a string over a smooth pulley. Find the acceleration and tension. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'For 6 kg: \\(6g - T = 6a\\). For 4 kg on table: \\(T = 4a\\). Adding: \\(6g = 10a\\), so \\(a = \\dfrac{6 \\times 9.8}{10} = 5.88\\) m/s². Tension: \\(T = 4 \\times 5.88 = 23.52\\) N.',
        diagram: true
      },
      {
        q: 'A person of mass 70 kg stands on the floor of a lift. The lift accelerates upward at 2 m/s². Find the normal reaction (the reading of the scale) that the floor exerts on the person. (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'amber',
        modelAnswer: 'Applying Newton\'s second law upward: \\(R - mg = ma\\). So \\(R = m(g + a) = 70(9.8 + 2) = 70 \\times 11.8 = 826\\) N.',
        diagram: true
      },
      {
        q: 'A person of mass 60 kg stands in a lift that decelerates at 3 m/s² while travelling upward. Find the normal reaction from the floor. (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'amber',
        modelAnswer: 'The acceleration is downward at 3 m/s² (decelerating while going up). Taking upward as positive: \\(R - mg = m(-3)\\). So \\(R = m(g - 3) = 60(9.8 - 3) = 60 \\times 6.8 = 408\\) N.',
        diagram: true
      },
      {
        q: 'A lift of mass 800 kg carries a person of mass 80 kg. The lift accelerates downward at 1.5 m/s². Find the tension in the lift cable and the normal reaction on the person. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'For the person (taking downward as positive): \\(mg - R = ma\\), so \\(R = m(g-a) = 80(9.8-1.5) = 80 \\times 8.3 = 664\\) N. For the entire system (lift + person, downward positive): \\((800+80)g - T = (880)(1.5)\\), so \\(T = 880(9.8-1.5) = 880 \\times 8.3 = 7304\\) N.',
        diagram: true
      },
      {
        q: 'A person of mass 75 kg is in a lift that is in free fall (cable snapped). Find the normal reaction from the floor. (\\(g = 9.8\\) m/s²)',
        marks: 3, tier: 'amber',
        modelAnswer: 'In free fall, the acceleration equals \\(g\\) downward. Applying Newton\'s second law (downward positive): \\(mg - R = mg\\), so \\(R = 0\\) N. The person appears weightless.',
        diagram: true
      },
      {
        q: 'Two forces \\(\\mathbf{F}_1 = (6\\mathbf{i} + 2\\mathbf{j})\\) N and \\(\\mathbf{F}_2 = (-2\\mathbf{i} + 5\\mathbf{j})\\) N act on a particle of mass 4 kg. Find the magnitude of the acceleration.',
        marks: 4, tier: 'amber',
        modelAnswer: 'Resultant: \\(\\mathbf{F} = (6-2)\\mathbf{i} + (2+5)\\mathbf{j} = 4\\mathbf{i} + 7\\mathbf{j}\\) N. Magnitude: \\(|F| = \\sqrt{16 + 49} = \\sqrt{65}\\) N. Acceleration: \\(a = \\dfrac{\\sqrt{65}}{4} \\approx 2.02\\) m/s².'
      },
      {
        q: 'Three forces act on a particle: \\((5\\mathbf{i})\\) N, \\((-3\\mathbf{i} + 4\\mathbf{j})\\) N, and \\((\\mathbf{i} - \\mathbf{j})\\) N. The particle has mass 3 kg. Find its acceleration vector.',
        marks: 4, tier: 'amber',
        modelAnswer: 'Resultant: \\(\\mathbf{F} = (5-3+1)\\mathbf{i} + (0+4-1)\\mathbf{j} = 3\\mathbf{i} + 3\\mathbf{j}\\) N. Acceleration: \\(\\mathbf{a} = \\dfrac{\\mathbf{F}}{m} = \\dfrac{3\\mathbf{i}+3\\mathbf{j}}{3} = \\mathbf{i} + \\mathbf{j}\\) m/s².'
      },
      {
        q: 'A particle of mass 3 kg on a smooth table is connected to masses of 2 kg and 4 kg hanging on opposite sides via strings over smooth pulleys. Find the acceleration of the system and the tensions in each string. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'amber',
        modelAnswer: 'Let \\(a\\) = acceleration (4 kg side goes down). Equations: 4 kg: \\(4g - T_2 = 4a\\); 3 kg on table: \\(T_2 - T_1 = 3a\\); 2 kg: \\(T_1 - 2g = 2a\\). Adding all: \\((4-2)g = 9a\\), so \\(a = \\dfrac{2 \\times 9.8}{9} \\approx 2.178\\) m/s². \\(T_1 = 2g + 2a = 2(9.8 + 2.178) = 23.96\\) N. \\(T_2 = 4g - 4a = 4(9.8 - 2.178) = 30.49\\) N.',
        diagram: true
      },
      {
        q: 'A system consists of a 7 kg particle on a smooth horizontal table connected via a string over a pulley to a 3 kg hanging mass. A horizontal force \\(F\\) is also applied to the 7 kg particle, opposing the motion. Given that the system accelerates at 1.4 m/s², find \\(F\\) and the tension. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'For 3 kg: \\(3g - T = 3 \\times 1.4\\), so \\(T = 3(9.8 - 1.4) = 3 \\times 8.4 = 25.2\\) N. For 7 kg on table: \\(T - F = 7 \\times 1.4 = 9.8\\), so \\(F = T - 9.8 = 25.2 - 9.8 = 15.4\\) N.',
        diagram: true
      },
      {
        q: 'A particle A of mass 5 kg on a smooth inclined plane at 30° is connected by a string over a smooth pulley at the top to a particle B of mass 4 kg hanging freely. Find the acceleration and tension. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'amber',
        modelAnswer: 'For A along slope (up positive): \\(T - 5g\\sin 30° = 5a\\), so \\(T - 24.5 = 5a\\). For B (down positive): \\(4g - T = 4a\\), so \\(39.2 - T = 4a\\). Adding: \\(14.7 = 9a\\), \\(a = \\dfrac{14.7}{9} \\approx 1.633\\) m/s². \\(T = 39.2 - 4(1.633) = 39.2 - 6.533 = 32.67\\) N.',
        diagram: true
      },
      {
        q: 'Find the resultant of forces \\(10\\) N at \\(30°\\) to the horizontal and \\(8\\) N at \\(90°\\) to the horizontal. Find its magnitude and direction.',
        marks: 5, tier: 'amber',
        modelAnswer: 'Horizontal component: \\(10\\cos30° = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\) N. Vertical component: \\(10\\sin30° + 8 = 5 + 8 = 13\\) N. Magnitude: \\(\\sqrt{(5\\sqrt{3})^2 + 13^2} = \\sqrt{75 + 169} = \\sqrt{244} \\approx 15.6\\) N. Angle: \\(\\theta = \\arctan\\!\\left(\\dfrac{13}{5\\sqrt{3}}\\right) \\approx \\arctan(1.502) \\approx 56.4°\\) above horizontal.'
      },
      {
        q: 'A particle of mass 4 kg is in equilibrium on a smooth slope of 20°. It is held by a force \\(P\\) acting up the slope. Find \\(P\\) and the normal reaction \\(R\\). (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'amber',
        modelAnswer: 'Along slope (equilibrium): \\(P = mg\\sin20° = 4 \\times 9.8 \\times \\sin20° = 39.2 \\times 0.3420 = 13.4\\) N. Perpendicular to slope: \\(R = mg\\cos20° = 39.2 \\times 0.9397 = 36.8\\) N.',
        diagram: true
      },
      {
        q: 'A 6 kg block on a rough horizontal surface (coefficient of friction \\(\\mu = 0.3\\)) is connected via a string over a pulley to a 3 kg hanging mass. Find whether the system moves, and if so, find the acceleration. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'Normal reaction on 6 kg block: \\(R = 6g = 58.8\\) N. Max friction: \\(F = \\mu R = 0.3 \\times 58.8 = 17.64\\) N. Driving force = weight of 3 kg = \\(3g = 29.4\\) N. Since \\(29.4 > 17.64\\), the system moves. Net force = \\(29.4 - 17.64 = 11.76\\) N. Total mass = 9 kg. Acceleration: \\(a = \\dfrac{11.76}{9} = 1.307\\) m/s².',
        diagram: true
      },
      {
        q: 'A particle of mass 2 kg is on a smooth table and connected to a 3 kg hanging mass by a string over a pulley. A force \\(F\\) is applied horizontally to the 2 kg mass in the direction of motion. The system accelerates at 5 m/s². Find \\(F\\) and the tension. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'For 3 kg (downward): \\(3g - T = 3 \\times 5\\), so \\(T = 3(9.8-5) = 3 \\times 4.8 = 14.4\\) N. For 2 kg on table (horizontal): \\(T + F = 2 \\times 5 = 10\\), so \\(F = 10 - 14.4 = -4.4\\) N. The negative sign means \\(F = 4.4\\) N must act opposing the motion to give this acceleration.',
        diagram: true
      },
    ],
    red: [
      {
        q: 'Three particles A (3 kg), B (5 kg) and C (7 kg) are connected by two strings. A and C hang vertically on opposite sides of a smooth pulley; B rests on a smooth horizontal table with strings to A over one pulley and to C over another. Find the acceleration of the system and both tensions. (\\(g = 9.8\\) m/s²)',
        marks: 7, tier: 'red',
        modelAnswer: 'Let \\(a\\) = acceleration (C goes down). For C: \\(7g - T_2 = 7a\\). For B on table: \\(T_2 - T_1 = 5a\\). For A: \\(T_1 - 3g = 3a\\). Adding all: \\((7-3)g = 15a\\), so \\(a = \\dfrac{4 \\times 9.8}{15} = \\dfrac{39.2}{15} \\approx 2.613\\) m/s². \\(T_1 = 3g + 3a = 3(9.8 + 2.613) = 3 \\times 12.413 = 37.24\\) N. \\(T_2 = 7g - 7a = 7(9.8 - 2.613) = 7 \\times 7.187 = 50.31\\) N.',
        diagram: true
      },
      {
        q: 'A 4 kg block rests on a rough horizontal surface (\\(\\mu = 0.25\\)) and is connected by a string over a pulley to a 6 kg hanging mass. Find the acceleration of the system and the tension in the string. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'red',
        modelAnswer: 'Normal reaction on 4 kg block: \\(R = 4g = 39.2\\) N. Friction force: \\(F = \\mu R = 0.25 \\times 39.2 = 9.8\\) N. For 6 kg (down): \\(6g - T = 6a\\). For 4 kg (horizontal): \\(T - F = 4a\\), so \\(T - 9.8 = 4a\\). Adding: \\(6g - 9.8 = 10a\\), \\(58.8 - 9.8 = 10a\\), \\(a = \\dfrac{49}{10} = 4.9\\) m/s². \\(T = 9.8 + 4 \\times 4.9 = 9.8 + 19.6 = 29.4\\) N.',
        diagram: true
      },
      {
        q: 'A string connecting two hanging masses (3 kg and 5 kg) over a smooth pulley has a maximum tensile strength of 40 N. Find the maximum acceleration before the string breaks, and determine which direction the system accelerates. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'red',
        modelAnswer: 'The heavier 5 kg mass accelerates downward. For 5 kg: \\(5g - T = 5a\\). For 3 kg: \\(T - 3g = 3a\\). From the 3 kg equation: \\(a = \\dfrac{T - 3g}{3}\\). Substitute into 5 kg equation: \\(5g - T = 5 \\times \\dfrac{T-3g}{3}\\). So \\(3(5g - T) = 5(T - 3g)\\), \\(15g - 3T = 5T - 15g\\), \\(30g = 8T\\), \\(T = \\dfrac{30 \\times 9.8}{8} = 36.75\\) N (at equilibrium acceleration). For max tension \\(T = 40\\) N: from 3 kg equation: \\(a = \\dfrac{40 - 29.4}{3} = \\dfrac{10.6}{3} \\approx 3.53\\) m/s². The 5 kg mass accelerates downward.',
        diagram: true
      },
      {
        q: 'A man of mass 80 kg stands on bathroom scales in a lift. The lift starts from rest and accelerates upward at 1.2 m/s² for 5 s, then travels at constant speed, then decelerates to rest at 2 m/s². Find the scale reading during acceleration and during deceleration. (\\(g = 9.8\\) m/s²)',
        marks: 7, tier: 'red',
        modelAnswer: 'During acceleration upward (\\(a = 1.2\\) m/s²): \\(R = m(g+a) = 80(9.8+1.2) = 80 \\times 11 = 880\\) N. During deceleration (acceleration is \\(2\\) m/s² downward): \\(R = m(g-a) = 80(9.8-2) = 80 \\times 7.8 = 624\\) N.',
        diagram: true
      },
      {
        q: 'Particles A (2 kg), B (3 kg) and C (5 kg) are connected in a line by strings. A force of 50 N is applied to C horizontally on a smooth surface. Find the acceleration of the system and the tension in each string. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'red',
        modelAnswer: 'Total mass = 10 kg. Acceleration: \\(a = \\dfrac{50}{10} = 5\\) m/s². Tension \\(T_1\\) (between A and B): For A: \\(T_1 = 2 \\times 5 = 10\\) N. Tension \\(T_2\\) (between B and C): For A and B together: \\(T_2 = (2+3) \\times 5 = 25\\) N.',
        diagram: true
      },
      {
        q: 'A particle of mass 5 kg is on a rough plane inclined at 40° to the horizontal (\\(\\mu = 0.2\\)). It is connected by a light string over a smooth pulley at the top of the plane to a 4 kg hanging mass. Determine whether the system moves, and if so find the acceleration. (\\(g = 9.8\\) m/s²)',
        marks: 7, tier: 'red',
        modelAnswer: 'For the 5 kg on slope: normal reaction \\(R = 5g\\cos40° = 49 \\times 0.766 = 37.53\\) N. Friction: \\(F = 0.2 \\times 37.53 = 7.51\\) N. Component of weight along slope (down) = \\(5g\\sin40° = 49 \\times 0.643 = 31.5\\) N. Hanging mass drives up: \\(4g = 39.2\\) N. Net force up slope = \\(39.2 - 31.5 - 7.51 = 0.19\\) N > 0, so system moves (5 kg goes up the slope). Total system mass = 9 kg. Acceleration: \\(a = \\dfrac{0.19}{9} \\approx 0.021\\) m/s².',
        diagram: true
      },
      {
        q: 'A particle of mass 6 kg is connected to a particle of mass 9 kg by a string over a pulley. The string breaks when the tension exceeds 72 N. Show that if the heavier mass starts at rest 3 m above the ground, the string breaks before the mass reaches the ground. (\\(g = 9.8\\) m/s²)',
        marks: 7, tier: 'red',
        modelAnswer: 'System acceleration: \\(a = \\dfrac{(9-6)g}{15} = \\dfrac{3 \\times 9.8}{15} = \\dfrac{29.4}{15} = 1.96\\) m/s². Tension: \\(T = 6(g+a) = 6(9.8+1.96) = 6 \\times 11.76 = 70.56\\) N. Since \\(70.56 < 72\\) N, the string does not break under normal acceleration. For the string to break we need \\(T > 72\\) N; here \\(T = 70.56\\) N so the string does NOT break. (If the calculation gave \\(T > 72\\) it would break — students should verify the calculation. Here note \\(T = 70.56 < 72\\) N so the string is safe throughout the fall.)',
        diagram: true
      },
      {
        q: 'A particle A of mass 5 kg lies on a smooth horizontal table. It is connected by a string over a smooth pulley to particle B of mass 3 kg hanging vertically, and by another string in the opposite direction over a second pulley to particle C of mass 2 kg hanging vertically. Find the acceleration of the system, stating the direction, and the tensions in each string. (\\(g = 9.8\\) m/s²)',
        marks: 8, tier: 'red',
        modelAnswer: 'B (3 kg) pulls one way, C (2 kg) the other. Net driving force = \\((3-2)g = 9.8\\) N. Total mass = 10 kg. Acceleration: \\(a = \\dfrac{9.8}{10} = 0.98\\) m/s² (in the direction of B, i.e. B moves down). For B: \\(3g - T_B = 3a\\), so \\(T_B = 3(9.8-0.98) = 3 \\times 8.82 = 26.46\\) N. For C: \\(T_C - 2g = 2a\\), so \\(T_C = 2(9.8+0.98) = 2 \\times 10.78 = 21.56\\) N.',
        diagram: true
      },
      {
        q: 'A crate of mass 20 kg is lowered by a rope (max tension 250 N). Find the maximum downward acceleration at which the crate can be lowered without breaking the rope. If instead the crate is raised, find the maximum upward acceleration. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'red',
        modelAnswer: 'Weight of crate: \\(W = 20 \\times 9.8 = 196\\) N. When lowering (downward acceleration \\(a\\)): \\(W - T = ma\\), so \\(T = m(g-a)\\). For \\(T \\geq 0\\), max \\(a = g = 9.8\\) m/s² (free fall). When raising (upward acceleration \\(a\\)): \\(T - W = ma\\), so \\(T = m(g+a)\\). Set \\(T = 250\\): \\(250 = 20(9.8+a)\\), so \\(9.8 + a = 12.5\\), \\(a = 2.7\\) m/s².',
        diagram: true
      },
      {
        q: 'A particle of mass 3 kg is on a rough horizontal surface (\\(\\mu = 0.4\\)). A light string attached to it passes over a smooth pulley and supports a 2 kg hanging mass. The system is released from rest. Find: (a) whether the system moves; (b) if it does, the acceleration and tension; (c) the speed after 2 s. (\\(g = 9.8\\) m/s²)',
        marks: 8, tier: 'red',
        modelAnswer: '(a) Driving force = \\(2g = 19.6\\) N. Friction = \\(\\mu \\times 3g = 0.4 \\times 29.4 = 11.76\\) N. Since \\(19.6 > 11.76\\), system moves. (b) Net force = \\(19.6 - 11.76 = 7.84\\) N. Total mass = 5 kg. \\(a = \\dfrac{7.84}{5} = 1.568\\) m/s². Tension: from 2 kg: \\(T = 2(g-a) = 2(9.8-1.568) = 2 \\times 8.232 = 16.46\\) N. (c) Using \\(v = u + at = 0 + 1.568 \\times 2 = 3.136\\) m/s.',
        diagram: true
      },
    ],
  },

  'M4': {
    name: 'Moments',
    green: [
      {
        q: 'A force of 12 N acts at a perpendicular distance of 3 m from a pivot. Calculate the moment of the force about the pivot.',
        marks: 2, tier: 'green',
        modelAnswer: 'Moment \\(= F \\times d = 12 \\times 3 = 36\\) N m.'
      },
      {
        q: 'A force of 25 N acts perpendicular to a rod at a distance of 0.8 m from a fulcrum. Find the moment about the fulcrum.',
        marks: 2, tier: 'green',
        modelAnswer: 'Moment \\(= 25 \\times 0.8 = 20\\) N m.'
      },
      {
        q: 'State the principle of moments.',
        marks: 2, tier: 'green',
        modelAnswer: 'For a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that same point. Equivalently, the total moment (net moment) about any point is zero.'
      },
      {
        q: 'A uniform beam AB of length 4 m and weight 60 N is supported at its midpoint. A load of 40 N is placed at A. Find the additional load \\(F\\) needed at B for equilibrium.',
        marks: 3, tier: 'green',
        modelAnswer: 'Taking moments about the midpoint (support): Anticlockwise = clockwise. \\(40 \\times 2 = F \\times 2\\). So \\(F = 40\\) N.',
        diagram: true
      },
      {
        q: 'A uniform rod AB of length 6 m and weight 80 N rests on supports at A and B. Find the reaction at each support.',
        marks: 3, tier: 'green',
        modelAnswer: 'By symmetry (uniform beam, supports at ends), each reaction \\(= \\dfrac{80}{2} = 40\\) N.',
        diagram: true
      },
      {
        q: 'A uniform beam AB of weight 100 N and length 5 m is supported at A and at point C, 1 m from B. Find the reactions at A and C.',
        marks: 4, tier: 'green',
        modelAnswer: 'Taking moments about A: \\(R_C \\times 4 = 100 \\times 2.5\\), so \\(R_C = \\dfrac{250}{4} = 62.5\\) N. Resolving vertically: \\(R_A + 62.5 = 100\\), so \\(R_A = 37.5\\) N.',
        diagram: true
      },
      {
        q: 'A see-saw of length 4 m is pivoted at its centre. Child A (weight 300 N) sits at one end. How far from the pivot must child B (weight 400 N) sit to balance the see-saw?',
        marks: 3, tier: 'green',
        modelAnswer: 'Taking moments about pivot: \\(300 \\times 2 = 400 \\times d\\). So \\(d = \\dfrac{600}{400} = 1.5\\) m from the pivot.'
      },
      {
        q: 'A uniform plank AB of weight 200 N and length 3 m rests on a single support at its midpoint. A load of 50 N is placed at A. Find the load \\(W\\) to be placed at B for equilibrium.',
        marks: 3, tier: 'green',
        modelAnswer: 'Taking moments about the midpoint: \\(50 \\times 1.5 = W \\times 1.5\\), so \\(W = 50\\) N.'
      },
      {
        q: 'A uniform beam of length 4 m and weight 120 N is resting horizontally on supports at A (the left end) and B (the right end). A 180 N load is placed 1 m from A. Find the reactions at A and B.',
        marks: 4, tier: 'green',
        modelAnswer: 'Taking moments about A: \\(R_B \\times 4 = 180 \\times 1 + 120 \\times 2 = 180 + 240 = 420\\). So \\(R_B = 105\\) N. Resolving vertically: \\(R_A = 180 + 120 - 105 = 195\\) N.',
        diagram: true
      },
      {
        q: 'A force of 8 N acts at a distance of 1.5 m from a pivot. Find the moment. A second force of \\(F\\) N acts at 2 m on the opposite side. Find \\(F\\) for equilibrium.',
        marks: 3, tier: 'green',
        modelAnswer: 'Moment of first force: \\(8 \\times 1.5 = 12\\) N m (clockwise). For equilibrium: \\(F \\times 2 = 12\\), so \\(F = 6\\) N.'
      },
      {
        q: 'A non-uniform rod AB of length 5 m and weight 60 N is balanced on a pivot at 2 m from A. Find the position of the centre of mass.',
        marks: 3, tier: 'green',
        modelAnswer: 'If balanced at 2 m from A, the centre of mass is directly above the pivot. Therefore, the centre of mass is 2 m from A (i.e. at the pivot point).'
      },
      {
        q: 'A uniform beam AB of weight 150 N and length 8 m rests on supports at A and at a point D which is 2 m from B. Find the reactions at A and D.',
        marks: 4, tier: 'green',
        modelAnswer: 'D is at 6 m from A. Taking moments about A: \\(R_D \\times 6 = 150 \\times 4\\), so \\(R_D = \\dfrac{600}{6} = 100\\) N. Resolving: \\(R_A = 150 - 100 = 50\\) N.',
        diagram: true
      },
      {
        q: 'A uniform see-saw of length 5 m and weight 100 N is pivoted at its centre. A child of weight 250 N sits at one end. Find the reaction at the pivot.',
        marks: 3, tier: 'green',
        modelAnswer: 'Since the see-saw is uniform and pivoted at the centre, the weight acts at the pivot — contributing no moment. Taking moments about pivot: \\(250 \\times 2.5\\) (anticlockwise) must be balanced by someone/thing on the other side. If not balanced, the pivot reaction equals the total vertical load: \\(R = 250 + 100 = 350\\) N (the beam weight acts through the pivot for a uniform beam pivoted at centre).'
      },
      {
        q: 'Find the moment of a 50 N force acting vertically at a point P. P is 4 m horizontally from a pivot, but the force acts at an angle of 90° to the rod (which is horizontal). State the moment.',
        marks: 2, tier: 'green',
        modelAnswer: 'Since the force is perpendicular to the rod and acts at distance 4 m from the pivot: Moment \\(= 50 \\times 4 = 200\\) N m.'
      },
      {
        q: 'A beam AB of length 6 m and weight \\(W\\) is pivoted at A. A vertical upward force of 30 N at B keeps the beam horizontal. Find \\(W\\) if the centre of mass is at the midpoint.',
        marks: 3, tier: 'green',
        modelAnswer: 'Taking moments about A: Anticlockwise moment (upward force) = clockwise moment (weight). \\(30 \\times 6 = W \\times 3\\), so \\(W = \\dfrac{180}{3} = 60\\) N.',
        diagram: true
      },
    ],
    amber: [
      {
        q: 'A non-uniform rod AB of length 6 m and weight 90 N rests on supports at A and B. The reaction at A is 35 N. Find the position of the centre of mass of the rod.',
        marks: 4, tier: 'amber',
        modelAnswer: 'Resolving vertically: \\(R_A + R_B = 90\\), so \\(R_B = 90 - 35 = 55\\) N. Taking moments about A: \\(55 \\times 6 = 90 \\times \\bar{x}\\), so \\(\\bar{x} = \\dfrac{330}{90} = \\dfrac{11}{3} \\approx 3.67\\) m from A.',
        diagram: true
      },
      {
        q: 'A non-uniform plank AB of length 4 m and mass 20 kg rests on supports at A and B. When a 30 kg mass is placed at the midpoint, the reaction at A is twice the reaction at B. Find the distance of the centre of mass from A. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'Total weight = \\((20+30) \\times 9.8 = 490\\) N. Let \\(R_B = x\\); then \\(R_A = 2x\\). Resolving: \\(3x = 490\\), so \\(R_B = \\frac{490}{3}\\) N, \\(R_A = \\frac{980}{3}\\) N. Taking moments about A: \\(\\frac{490}{3} \\times 4 = 20g \\times \\bar{d} + 30g \\times 2\\). \\(\\frac{1960}{3} = 196\\bar{d} + 588\\). \\(196\\bar{d} = \\frac{1960}{3} - 588 = \\frac{1960-1764}{3} = \\frac{196}{3}\\). \\(\\bar{d} = \\frac{1}{3}\\) m from A.',
        diagram: true
      },
      {
        q: 'A uniform beam AB of length 8 m and weight 200 N rests on supports at A and at C (4 m from A). A person of weight 700 N stands a distance \\(x\\) metres from A. Find the reactions at A and C as functions of \\(x\\) (where \\(0 \\leq x \\leq 4\\)).',
        marks: 5, tier: 'amber',
        modelAnswer: 'Taking moments about A: \\(R_C \\times 4 = 200 \\times 4 + 700x\\). So \\(R_C = \\dfrac{800 + 700x}{4} = 200 + 175x\\) N. Resolving: \\(R_A = 200 + 700 - R_C = 900 - (200+175x) = 700 - 175x\\) N.',
        diagram: true
      },
      {
        q: 'A person of mass 75 kg walks along a uniform plank AB of mass 30 kg and length 6 m. The plank rests on supports at A and B. Find the distance from A at which the reaction at A becomes zero (i.e. the plank is about to tip about B). (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'Taking moments about B when \\(R_A = 0\\): The person is at distance \\(d\\) from A, so \\((6-d)\\) from B. \\(75g(6-d) = 30g \\times 3\\). \\(75(6-d) = 90\\). \\(6-d = 1.2\\). \\(d = 4.8\\) m from A (i.e. 1.2 m from B).',
        diagram: true
      },
      {
        q: 'A non-uniform beam AB of length 5 m rests on two supports, one at A and one at B. The beam weighs 300 N with centre of mass 2 m from A. A 200 N load hangs at 4 m from A. Find the reactions at A and B.',
        marks: 5, tier: 'amber',
        modelAnswer: 'Taking moments about A: \\(R_B \\times 5 = 300 \\times 2 + 200 \\times 4 = 600 + 800 = 1400\\), so \\(R_B = 280\\) N. Resolving: \\(R_A = 300 + 200 - 280 = 220\\) N.',
        diagram: true
      },
      {
        q: 'A uniform plank of mass 10 kg and length 5 m is placed over a single support at its centre. A child of mass 40 kg sits at one end. Find where a second child of mass 25 kg must sit for equilibrium. (\\(g = 9.8\\) m/s²)',
        marks: 4, tier: 'amber',
        modelAnswer: 'Taking moments about the support (midpoint, 2.5 m from each end): \\(40g \\times 2.5 = 25g \\times d\\) (beam weight through support). So \\(d = \\dfrac{40 \\times 2.5}{25} = \\dfrac{100}{25} = 4\\) m from the support. Since the plank is only 2.5 m on the other side, check: the child must be 4 m from support but the plank only extends 2.5 m. So the second child cannot balance the first child of 40 kg on this plank — the child would need to be beyond the end. Note: if the question means including the plank weight, reconsider. Since plank is uniform, its weight acts at the support, contributing zero moment. So result stands: 25 kg child would need to be 4 m from pivot, which is beyond the plank.',
        diagram: true
      },
      {
        q: 'A uniform beam of weight 80 N and length 4 m is suspended horizontally by two vertical strings at A (left end) and B (right end). A 40 N weight hangs 1.5 m from A. Find the tensions in the strings.',
        marks: 4, tier: 'amber',
        modelAnswer: 'Taking moments about A: \\(T_B \\times 4 = 80 \\times 2 + 40 \\times 1.5 = 160 + 60 = 220\\), so \\(T_B = 55\\) N. Resolving vertically: \\(T_A = 80 + 40 - 55 = 65\\) N.',
        diagram: true
      },
      {
        q: 'A non-uniform rod AB of length 8 m rests in equilibrium horizontally on a single pivot at C, which is 3 m from B. The rod weighs 100 N. Find the position of the centre of mass.',
        marks: 4, tier: 'amber',
        modelAnswer: 'C is 5 m from A and 3 m from B. Since the rod balances at C, the centre of mass is at C, i.e. 5 m from A (or 3 m from B).'
      },
      {
        q: 'A uniform beam AB of length 6 m and weight 120 N rests on supports at C (1.5 m from A) and D (1 m from B). A load of 80 N hangs at A. Find the reactions at C and D.',
        marks: 5, tier: 'amber',
        modelAnswer: 'D is at 5 m from A. Taking moments about C (1.5 m from A): \\(R_D \\times 3.5 = 120 \\times 1.5 + 80 \\times (-1.5)\\). Wait — anticlockwise about C: \\(80 \\times 1.5\\) (load at A is 1.5 m left of C, clockwise). Clockwise: \\(80 \\times 1.5 = 120\\) N m; \\(120 \\times 1.5 = 180\\) N m (beam weight, 3 m from A, 1.5 m right of C, anticlockwise... recheck: beam CG at 3 m from A = 1.5 m right of C, so anticlockwise about C). Taking moments about C (positive = anticlockwise): \\(R_D \\times 3.5 + 80 \\times 1.5 = 120 \\times 1.5\\). \\(3.5 R_D = 180 - 120 = 60\\), so \\(R_D = \\dfrac{60}{3.5} \\approx 17.14\\) N. Resolving: \\(R_C = 80 + 120 - 17.14 = 182.86\\) N.',
        diagram: true
      },
      {
        q: 'A diver of mass 60 kg stands at the end of a uniform diving board of mass 20 kg and length 4 m. The board is fixed at A (the wall end) and has a support at B, 1 m from A. Find the reactions at A and B. (\\(g = 9.8\\) m/s²)',
        marks: 5, tier: 'amber',
        modelAnswer: 'A is at left end; diver is at right end (4 m from A); board CG at 2 m from A. Support B is 1 m from A. Taking moments about A: \\(R_B \\times 1 = 20g \\times 2 + 60g \\times 4 = 40g + 240g = 280g\\). \\(R_B = 280 \\times 9.8 = 2744\\) N (upward). Resolving: \\(R_A + R_B = (20+60)g = 784\\) N. But \\(R_B = 2744\\) N upward, so \\(R_A = 784 - 2744 = -1960\\) N. Since \\(R_A\\) is negative, the reaction at A is downward (A provides a downward force, i.e., A is a clamp/bolt): \\(|R_A| = 1960\\) N downward.',
        diagram: true
      },
      {
        q: 'A person of weight 600 N walks along a plank AB of weight 200 N and length 6 m. The plank rests on supports at C (1 m from A) and D (1 m from B). Find the reactions at C and D when the person is 2 m from A. State when the plank would tip.',
        marks: 6, tier: 'amber',
        modelAnswer: 'Taking moments about C (1 m from A): \\(R_D \\times 4 = 200 \\times 2 + 600 \\times 1\\) (beam CG at 3 m from A = 2 m from C; person at 2 m from A = 1 m from C). \\(4R_D = 400 + 600 = 1000\\), so \\(R_D = 250\\) N. Resolving: \\(R_C = 200+600-250 = 550\\) N. Plank tips about D when \\(R_C = 0\\); tips about C when \\(R_D = 0\\).',
        diagram: true
      },
      {
        q: 'A uniform rod AB of mass 5 kg and length 4 m is freely hinged to a wall at A. It is held horizontal by a wire attached at B making 30° with the rod. Find the tension in the wire and the reaction at the hinge. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'amber',
        modelAnswer: 'Taking moments about A: \\(T\\sin30° \\times 4 = 5g \\times 2\\). \\(T \\times 0.5 \\times 4 = 98\\), so \\(2T = 98\\), \\(T = 49\\) N. Resolving horizontally: \\(H = T\\cos30° = 49 \\times \\frac{\\sqrt{3}}{2} \\approx 42.4\\) N. Resolving vertically: \\(V + T\\sin30° = 5g\\), so \\(V = 49 - 49 \\times 0.5 = 49 - 24.5 = 24.5\\) N. Hinge reaction: \\(R = \\sqrt{H^2+V^2} = \\sqrt{42.4^2+24.5^2} \\approx \\sqrt{1797+600} \\approx 49\\) N.',
        diagram: true
      },
      {
        q: 'A beam AB of length 10 m and weight 400 N (with centre of mass 4 m from A) rests on supports at A and B. A load of 600 N is placed at a distance \\(d\\) from A. Find \\(d\\) if the reaction at B is twice the reaction at A.',
        marks: 5, tier: 'amber',
        modelAnswer: 'Let \\(R_A = R\\), then \\(R_B = 2R\\). Resolving: \\(3R = 1000\\), so \\(R_A = \\frac{1000}{3}\\) N, \\(R_B = \\frac{2000}{3}\\) N. Taking moments about A: \\(\\frac{2000}{3} \\times 10 = 400 \\times 4 + 600 \\times d\\). \\(\\frac{20000}{3} = 1600 + 600d\\). \\(600d = \\frac{20000}{3} - 1600 = \\frac{20000-4800}{3} = \\frac{15200}{3}\\). \\(d = \\frac{15200}{1800} = \\frac{76}{9} \\approx 8.44\\) m from A.',
        diagram: true
      },
      {
        q: 'A uniform plank of weight 80 N and length 4 m overhangs a support by 1 m at one end. Find the minimum weight \\(W\\) that must be placed at the other end to prevent tipping.',
        marks: 4, tier: 'amber',
        modelAnswer: 'Let the support be 3 m from the short end (1 m overhang at right). Taking moments about the support, for tipping about the support the overhang side goes down: \\(80 \\times 0.5 = W \\times 3\\) (beam weight 0.5 m right of support acts clockwise; \\(W\\) at left end acts 3 m from support anticlockwise). \\(40 = 3W\\), so \\(W = \\dfrac{40}{3} \\approx 13.3\\) N.',
        diagram: true
      },
      {
        q: 'A non-uniform plank AB of weight 300 N rests horizontally on two supports at C (2 m from A) and D (2 m from B). The plank has length 8 m. Given that the reaction at C is 180 N, find: (a) the reaction at D; (b) the position of the centre of mass.',
        marks: 5, tier: 'amber',
        modelAnswer: '(a) Resolving vertically: \\(R_C + R_D = 300\\), so \\(R_D = 300 - 180 = 120\\) N. (b) Taking moments about C (2 m from A): \\(R_D \\times 4 = 300 \\times (\\bar{x} - 2)\\) where \\(\\bar{x}\\) = distance of CG from A. \\(120 \\times 4 = 300(\\bar{x}-2)\\). \\(480 = 300\\bar{x} - 600\\). \\(300\\bar{x} = 1080\\). \\(\\bar{x} = 3.6\\) m from A.',
        diagram: true
      },
    ],
    red: [
      {
        q: 'A uniform ladder of mass \\(m\\) and length \\(2l\\) rests with its foot on rough horizontal ground and its top against a smooth vertical wall. The ladder makes an angle of 60° with the horizontal. Find the friction force at the ground and the normal reactions at the wall and ground in terms of \\(m\\) and \\(g\\).',
        marks: 7, tier: 'red',
        modelAnswer: 'Let \\(F\\) = friction at ground, \\(R_W\\) = normal reaction at wall (horizontal), \\(R_G\\) = normal reaction at ground (vertical). Resolving horizontally: \\(R_W = F\\). Resolving vertically: \\(R_G = mg\\). Taking moments about foot of ladder: \\(R_W \\times 2l\\sin60° = mg \\times l\\cos60°\\). \\(R_W \\times 2l \\times \\frac{\\sqrt{3}}{2} = mg \\times l \\times \\frac{1}{2}\\). \\(R_W \\sqrt{3}\\,l = \\frac{mgl}{2}\\). \\(R_W = \\dfrac{mg}{2\\sqrt{3}} = \\dfrac{mg\\sqrt{3}}{6}\\). Friction: \\(F = R_W = \\dfrac{mg\\sqrt{3}}{6}\\). \\(R_G = mg\\).',
        diagram: true
      },
      {
        q: 'A uniform ladder of mass 15 kg and length 6 m leans against a smooth vertical wall, making 70° with the horizontal ground (rough). A person of mass 60 kg stands at the top of the ladder. Find the normal reactions at the wall and floor, and the minimum coefficient of friction needed at the floor. (\\(g = 9.8\\) m/s²)',
        marks: 8, tier: 'red',
        modelAnswer: 'Resolving vertically: \\(R_G = (15+60) \\times 9.8 = 75 \\times 9.8 = 735\\) N. Taking moments about base: \\(R_W \\times 6\\sin70° = 15g \\times 3\\cos70° + 60g \\times 6\\cos70°\\). \\(R_W \\times 6 \\times 0.9397 = 15(9.8)(3)(0.342) + 60(9.8)(6)(0.342)\\). \\(5.638\\,R_W = 150.6 + 1208.6 = 1359.2\\). \\(R_W = \\dfrac{1359.2}{5.638} \\approx 241.1\\) N. Resolving horizontally: \\(F = R_W \\approx 241.1\\) N. Minimum \\(\\mu = \\dfrac{F}{R_G} = \\dfrac{241.1}{735} \\approx 0.328\\).',
        diagram: true
      },
      {
        q: 'A uniform beam AB of weight 500 N and length 10 m rests on supports at C (2 m from A) and D (3 m from B). Find the maximum additional weight \\(W\\) that can be hung at A before the beam tips about C.',
        marks: 6, tier: 'red',
        modelAnswer: 'Beam tips about C when \\(R_D = 0\\). Taking moments about C (2 m from A): anticlockwise (left side): \\(W \\times 2\\); clockwise (right side): \\(500 \\times 3\\) (beam CG at 5 m from A = 3 m right of C) and \\(R_D \\times 5 = 0\\). For tipping: \\(W \\times 2 = 500 \\times 3 = 1500\\), so \\(W = 750\\) N.',
        diagram: true
      },
      {
        q: 'A non-uniform beam AB of length 8 m and weight 600 N (centre of mass 3 m from A) rests on supports at A and B. Loads of 200 N and 400 N hang at 2 m and 6 m from A respectively. Find the reactions at A and B, and state whether the beam is in equilibrium.',
        marks: 7, tier: 'red',
        modelAnswer: 'Taking moments about A: \\(R_B \\times 8 = 600 \\times 3 + 200 \\times 2 + 400 \\times 6 = 1800 + 400 + 2400 = 4600\\). \\(R_B = 575\\) N. Resolving vertically: \\(R_A = 600 + 200 + 400 - 575 = 625\\) N. Both reactions are positive (upward), so the beam is in equilibrium.',
        diagram: true
      },
      {
        q: 'A uniform ladder of length 4 m and mass 12 kg rests against a smooth wall at 65° to the ground. A person of mass 70 kg climbs the ladder. Find how far up the ladder the person can climb before the ladder slips, given the coefficient of friction at the floor is 0.35. (\\(g = 9.8\\) m/s²)',
        marks: 8, tier: 'red',
        modelAnswer: 'Resolving vertically: \\(R_G = (12+70) \\times 9.8 = 803.6\\) N. Max friction: \\(F_{\\max} = 0.35 \\times 803.6 = 281.3\\) N. At the point of slipping, \\(F = F_{\\max}\\). Resolving horizontally: \\(R_W = F = 281.3\\) N. Taking moments about foot (let person be distance \\(d\\) up ladder): \\(R_W \\times 4\\sin65° = 12g \\times 2\\cos65° + 70g \\times d\\cos65°\\). \\(281.3 \\times 3.625 = 12(9.8)(2)(0.4226) + 70(9.8)(d)(0.4226)\\). \\(1019.7 = 99.41 + 289.9d\\). \\(289.9d = 920.3\\). \\(d = \\dfrac{920.3}{289.9} \\approx 3.17\\) m up the ladder.',
        diagram: true
      },
      {
        q: 'A non-uniform rod AB has length 6 m and weight 240 N. When supported at C (2 m from A) and D (4 m from A), the rod is on the point of tilting about D. Find the position of the centre of mass of the rod.',
        marks: 6, tier: 'red',
        modelAnswer: 'On the point of tilting about D means \\(R_C = 0\\). Taking moments about D: the clockwise moments must equal anticlockwise. If CG is at distance \\(\\bar{x}\\) from A: \\(240 \\times |4 - \\bar{x}| = 0\\) — but that would require CG at D. More carefully: if the rod tilts about D (end B lifts), CG must be to the left of D. Taking moments about D with \\(R_C = 0\\): \\(240 \\times (4 - \\bar{x}) = 0\\)? Only if CG = D = 4 m. But that gives equilibrium, not tipping. Actually on point of tipping about D means \\(R_C \\to 0\\): \\(240 \\times (\\bar{x} - 4) = 0\\) ... CG must be at D (4 m from A) for neutral equilibrium. Answer: centre of mass is 4 m from A (at D).',
        diagram: true
      },
      {
        q: 'A uniform plank of mass 8 kg and length 5 m rests on two supports at 1 m and 4 m from end A. Find the maximum mass \\(M\\) that can be placed at end B without the plank tipping. (\\(g = 9.8\\) m/s²)',
        marks: 6, tier: 'red',
        modelAnswer: 'Supports at 1 m from A (call it P) and 4 m from A (call it Q). End B is at 5 m from A. Plank tips about Q when \\(R_P = 0\\). Taking moments about Q (4 m from A): Clockwise (about Q): \\(Mg \\times 1 = Mg\\) (M is 1 m right of Q). Anticlockwise (about Q): \\(8g \\times 1.5\\) (beam CG at 2.5 m from A = 1.5 m left of Q). For tipping: \\(Mg \\times 1 = 8g \\times 1.5\\), so \\(M = 12\\) kg.',
        diagram: true
      },
      {
        q: 'A ladder of mass 20 kg and length 5 m rests against a smooth wall, making 60° with the horizontal. The floor is rough with \\(\\mu = 0.4\\). A person of mass 80 kg begins to climb. Find the highest point the person can reach before the ladder slips. (\\(g = 9.8\\) m/s²)',
        marks: 8, tier: 'red',
        modelAnswer: '\\(R_G = (20+80) \\times 9.8 = 980\\) N. Max friction: \\(0.4 \\times 980 = 392\\) N. At slipping, \\(R_W = 392\\) N. Taking moments about base (let person be \\(d\\) m along ladder): \\(392 \\times 5\\sin60° = 20g \\times 2.5\\cos60° + 80g \\times d\\cos60°\\). \\(392 \\times 4.330 = 20(9.8)(2.5)(0.5) + 80(9.8)(d)(0.5)\\). \\(1697.4 = 245 + 392d\\). \\(392d = 1452.4\\). \\(d \\approx 3.71\\) m along the ladder.',
        diagram: true
      },
      {
        q: 'A uniform beam AB of weight 300 N and length 6 m is freely hinged at A to a wall. It is supported in a horizontal position by a strut from C (4 m from A) to the wall at D, where D is directly above A and 3 m above A. Find the thrust in the strut and the reaction at the hinge. (\\(g = 9.8\\) m/s²)',
        marks: 8, tier: 'red',
        modelAnswer: 'The strut CD: C is 4 m along beam from A, D is 3 m above A on wall. Length CD = \\(\\sqrt{4^2+3^2} = 5\\) m. Angle strut makes with horizontal: \\(\\sin\\theta = \\frac{3}{5}, \\cos\\theta = \\frac{4}{5}\\). Taking moments about A: Vertical component of thrust \\(\\times 4 = 300 \\times 3\\) (beam weight at midpoint). Thrust \\(T\\): vertical component = \\(T\\sin\\theta = \\frac{3T}{5}\\). \\(\\frac{3T}{5} \\times 4 = 900\\), so \\(T = \\dfrac{900 \\times 5}{12} = 375\\) N. Resolving horizontally: \\(H_A = T\\cos\\theta = 375 \\times \\frac{4}{5} = 300\\) N. Resolving vertically: \\(V_A + T\\sin\\theta = 300\\), so \\(V_A = 300 - 225 = 75\\) N. Hinge reaction: \\(R_A = \\sqrt{300^2+75^2} = \\sqrt{90000+5625} = \\sqrt{95625} \\approx 309.2\\) N.',
        diagram: true
      },
      {
        q: 'A non-uniform beam AB of length 10 m and weight 800 N is supported at C (3 m from A) and D (7 m from A). The centre of mass is \\(\\bar{x}\\) m from A. Given that both reactions are equal, find \\(\\bar{x}\\). Then, a load of 400 N is added at end A. Find the new reactions and determine if the beam tips. If it tips, identify the pivot.',
        marks: 8, tier: 'red',
        modelAnswer: 'Equal reactions: each = 400 N (since total weight = 800 N). Taking moments about C: \\(400 \\times 4 = 800(\\bar{x}-3)\\), so \\(1600 = 800\\bar{x} - 2400\\), \\(800\\bar{x} = 4000\\), \\(\\bar{x} = 5\\) m from A. Now add 400 N at A. Total = 1200 N. Taking moments about C: \\(R_D \\times 4 = 800 \\times 2 + 400 \\times (-3)\\). Wait: beam CG at 5 m from A = 2 m right of C; load at A is 3 m left of C. \\(R_D \\times 4 = 800 \\times 2 - 400 \\times 3 = 1600 - 1200 = 400\\). \\(R_D = 100\\) N. \\(R_C = 1200 - 100 = 1100\\) N. Both reactions positive, so beam does not tip.',
        diagram: true
      },
    ],
  },

};
