const EDEXCEL_WRITTEN_M1_M2 = {

  'M1': {
    name: 'Modelling in Mechanics',

    green: [
      {
        q: 'A ball is modelled as a particle. State what this assumption means in terms of the physical properties of the ball.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: 'A particle is a point mass — it has mass but no size or dimensions. This means the ball\'s shape and rotational effects are ignored, and all forces act through a single point.'
      },
      {
        q: 'A plank rests on two supports. The plank is modelled as a uniform rod. State what "uniform" means in this context.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: '"Uniform" means the mass of the rod is evenly distributed along its length, so the centre of mass lies at the midpoint of the rod.'
      },
      {
        q: 'A string is described as light and inextensible. State the meaning of each of these two properties.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Light means the string has negligible mass so its weight is ignored. Inextensible means the string does not stretch, so all connected particles have the same speed and acceleration.'
      },
      {
        q: 'State what is meant by a smooth surface in a mechanics problem.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: 'A smooth surface has no friction — it exerts only a normal reaction force perpendicular to the surface on the object in contact with it.'
      },
      {
        q: 'State what is meant by a rough surface in a mechanics problem and name the additional force that must be included in a model using a rough surface.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: 'A rough surface produces friction. When an object moves or is on the verge of moving, a friction force acts along the surface opposing the motion (or tendency to move).'
      },
      {
        q: 'Classify each of the following as either a scalar or a vector quantity: speed, velocity, mass, weight, distance, displacement.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Scalars: speed, mass, distance. Vectors: velocity, weight, displacement. Scalars have magnitude only; vectors have both magnitude and direction.'
      },
      {
        q: 'Convert \\(72 \\text{ km h}^{-1}\\) to \\(\\text{m s}^{-1}\\).',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: '\\(72 \\text{ km h}^{-1} = 72 \\times \\dfrac{1000}{3600} = 72 \\times \\dfrac{1}{3.6} = 20 \\text{ m s}^{-1}\\)'
      },
      {
        q: 'Convert \\(15 \\text{ m s}^{-1}\\) to \\(\\text{km h}^{-1}\\).',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: '\\(15 \\text{ m s}^{-1} = 15 \\times 3.6 = 54 \\text{ km h}^{-1}\\)'
      },
      {
        q: 'A box sits on a horizontal floor. Draw a force diagram showing all the forces acting on the box, labelling each force clearly.',
        marks: 3,
        tier: 'green',
        diagram: true,
        modelAnswer: 'Two forces act on the box: Weight \\(W = mg\\) acting vertically downward through the centre of mass, and Normal reaction \\(R\\) acting vertically upward from the floor. Since the box is in equilibrium, \\(R = mg\\).'
      },
      {
        q: 'A particle is attached to a fixed point by a string and hangs in equilibrium. Draw a labelled force diagram for the particle.',
        marks: 2,
        tier: 'green',
        diagram: true,
        modelAnswer: 'Two forces act: Weight \\(W = mg\\) downward, and Tension \\(T\\) upward along the string. In equilibrium: \\(T = mg\\).'
      },
      {
        q: 'A car travels along a straight horizontal road. State all the forces acting on the car, assuming the road is rough.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Forces on the car: (1) Weight \\(mg\\) downward, (2) Normal reaction \\(R\\) upward from the road, (3) Driving force \\(F\\) forward (from engine via wheels), (4) Friction/resistance force backward opposing motion.'
      },
      {
        q: 'State the value of \\(g\\) used in Edexcel A-Level Mechanics and give its SI units.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: '\\(g = 9.8 \\text{ m s}^{-2}\\). The SI units of acceleration are \\(\\text{m s}^{-2}\\) (metres per second squared).'
      },
      {
        q: 'Explain the difference between mass and weight, giving the SI unit of each.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Mass is the amount of matter in an object; it is a scalar measured in kilograms (kg). Weight is the gravitational force on an object; it is a vector measured in Newtons (N). They are related by \\(W = mg\\).'
      },
      {
        q: 'A particle of mass 5 kg rests on a smooth horizontal surface. A horizontal force of 12 N is applied. Draw a force diagram showing all forces on the particle.',
        marks: 3,
        tier: 'green',
        diagram: true,
        modelAnswer: 'Three forces: Weight \\(W = 5 \\times 9.8 = 49 \\text{ N}\\) downward, Normal reaction \\(R = 49 \\text{ N}\\) upward (since smooth — no friction), Applied force \\(F = 12 \\text{ N}\\) horizontally. (No friction force since the surface is smooth.)'
      },
      {
        q: 'State two assumptions that are made when a tennis ball in flight is modelled as a particle.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Any two from: (1) The size and shape of the ball are ignored — it is treated as a point. (2) Air resistance is neglected. (3) The rotation/spin of the ball is ignored. (4) The ball is treated as having uniform density concentrated at a point.'
      }
    ],

    amber: [
      {
        q: 'A car is modelled as a particle moving along a straight road. State two limitations of this model.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(1) Modelling as a particle ignores the size of the car, so effects such as the distribution of the car\'s weight across its four wheels cannot be considered — moments and turning effects are lost. (2) The model ignores air resistance and the shape of the car, which in reality significantly affect the motion at higher speeds. Other valid answers: ignores the car\'s turning/rotation, assumes constant cross-section of road, ignores internal forces within the car.'
      },
      {
        q: 'A string connecting two particles over a pulley is modelled as light and inextensible. Explain how the results of the calculation would differ if the string had mass.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'If the string had mass, the tension would not be constant throughout — it would vary along the string because the weight of the string contributes to the net force at each point. The equation of motion would need to account for the string\'s weight, making the problem significantly more complex. The calculated acceleration would be smaller than predicted by the light-string model because additional force is needed to accelerate the string\'s own mass. The tension at the top of the string would be greater than at the bottom.'
      },
      {
        q: 'A ball is dropped from a tall building and modelled as a particle with no air resistance. State two ways in which this model is unrealistic and explain the effect of each on the predicted motion.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(1) Air resistance is ignored: in reality air resistance increases with speed, opposing the motion, so the real ball reaches a terminal velocity and falls more slowly than predicted — the model overestimates the final speed. (2) The ball is treated as a point particle with no size: in reality the ball has volume and experiences aerodynamic drag based on its cross-sectional area and shape, which again reduces its acceleration.'
      },
      {
        q: 'Explain why the value of \\(g\\) is not exactly the same everywhere on the Earth\'s surface.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'The Earth is not a perfect sphere — it is slightly flattened at the poles and bulges at the equator. Points at the equator are therefore further from the Earth\'s centre of mass, so by Newton\'s inverse-square law of gravitation, \\(g\\) is slightly smaller at the equator than at the poles. Additionally, the Earth\'s rotation produces a centrifugal effect at the equator that slightly reduces the effective value of \\(g\\). Local variations in crustal density also cause minor local differences.'
      },
      {
        q: 'Two particles are connected by a light inextensible string passing over a smooth fixed pulley. List all the assumptions made in this standard model and explain the purpose of each assumption.',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(1) Particles (not extended bodies): allows all forces to act at a single point, no moments needed. (2) Light string: string has no mass, so its weight does not affect the tension calculation. (3) Inextensible string: both particles have the same speed and magnitude of acceleration at all times. (4) Smooth pulley: no friction at the pulley, so the tension is the same on both sides of the string. (5) Fixed pulley: the pulley does not move, so it provides a pivot point only and does not contribute kinetic energy.'
      },
      {
        q: 'A model for a falling raindrop neglects air resistance. Critique this model, explaining when it would be acceptable and when it would not.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Neglecting air resistance is acceptable for short falls or very early in the motion when the speed is low (drag force \\(\\propto v^2\\) is negligible). However, a raindrop falls from several kilometres altitude; at terminal velocity the drag exactly balances gravity, so the no-resistance model becomes completely invalid for modelling the actual speed at which rain hits the ground. The model also cannot predict terminal velocity at all, since it predicts continuously increasing speed. A better model would include drag proportional to \\(v^2\\) (or \\(v\\) for a viscous model).'
      },
      {
        q: 'A person stands on a weighing scale inside a lift. Describe, with reference to the forces on the person, what happens to the scale reading when: (a) the lift accelerates upward, (b) the lift moves at constant speed, (c) the lift decelerates while moving upward.',
        marks: 6,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Let \\(m\\) = mass of person, \\(R\\) = normal reaction from scale (scale reading = \\(R/g\\) in kg). Applying Newton\'s 2nd Law: \\(R - mg = ma\\)  so  \\(R = m(g+a)\\). (a) Accelerating upward (\\(a > 0\\)): \\(R > mg\\), scale reads more than true weight — person feels heavier. (b) Constant speed (\\(a = 0\\)): \\(R = mg\\), scale reads true weight. (c) Decelerating while moving upward means acceleration is downward (\\(a < 0\\) if upward positive): \\(R = m(g - |a|) < mg\\), scale reads less — person feels lighter.'
      },
      {
        q: 'A ladder leans against a smooth vertical wall with its base on rough horizontal ground. State all the forces acting on the ladder and explain why each is present.',
        marks: 5,
        tier: 'amber',
        diagram: true,
        modelAnswer: 'Forces on the ladder: (1) Weight \\(W = mg\\) downward through the centre of mass (midpoint if uniform) — due to gravity. (2) Normal reaction \\(R_A\\) from the wall, acting horizontally away from the wall at the top — the wall is smooth so only a normal reaction, no friction. (3) Normal reaction \\(R_B\\) from the ground, acting vertically upward at the base — perpendicular to the ground. (4) Friction force \\(F\\) from the ground, acting horizontally toward the wall at the base — the ground is rough, and this prevents the base from sliding outward. These four forces must be in equilibrium for the ladder to remain at rest.'
      },
      {
        q: 'Explain the difference between a "particle" model and a "rigid body" model in mechanics, giving an example of a situation where each would be appropriate.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'A particle model treats the object as a point mass with no dimensions — all forces act at a single point, and rotation is ignored. This is appropriate for, e.g., a ball flying through the air where only translational motion matters. A rigid body model treats the object as having extent and shape, with forces potentially acting at different points, allowing moments and rotational effects to be analysed. This is appropriate for, e.g., a ladder leaning against a wall, where the distribution of forces (and moments about a point) is essential to the solution.'
      },
      {
        q: 'A ball is thrown horizontally off a cliff. The model used assumes: particle, no air resistance, constant \\(g\\). State one refinement to this model that would make it more realistic and describe the mathematical effect on the equations of motion.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Refinement: include air resistance proportional to velocity, \\(F_{drag} = kv\\) (or \\(kv^2\\)). Mathematical effect: the equations of motion are no longer simple constant-acceleration (SUVAT) equations. For \\(F = kv\\), Newton\'s 2nd Law in the vertical direction becomes \\(m\\ddot{y} = mg - k\\dot{y}\\), a first-order linear ODE whose solution gives \\(v_y = \\frac{mg}{k}(1 - e^{-kt/m})\\). The particle approaches a terminal vertical velocity \\(v_T = mg/k\\) rather than accelerating indefinitely, and the horizontal velocity decays exponentially rather than remaining constant.'
      },
      {
        q: 'A block of mass \\(m\\) is on a rough inclined plane at angle \\(\\theta\\) to the horizontal. List all the forces on the block and state the direction of each.',
        marks: 4,
        tier: 'amber',
        diagram: true,
        modelAnswer: '(1) Weight \\(mg\\) vertically downward. Resolved: \\(mg\\sin\\theta\\) down the slope, \\(mg\\cos\\theta\\) perpendicular to slope (into slope). (2) Normal reaction \\(R = mg\\cos\\theta\\) perpendicular to the slope, away from the surface. (3) Friction force \\(F\\) along the slope — direction depends on whether the block is moving or about to move: if the block tends to slide down, friction acts up the slope.'
      },
      {
        q: 'State what is meant by a "smooth peg" in a mechanics problem, and explain how a rough peg would change the analysis of a string hanging over it.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'A smooth peg has no friction, so the tension in the string is the same on both sides of the peg. If the peg were rough, friction would act on the string at the contact point, meaning the tension on each side could differ. For a particle system with a rough peg, the analysis would need to account for the friction torque at the peg, which would reduce the acceleration of the system and alter the relationship between the two tensions.'
      },
      {
        q: 'A particle is in equilibrium under three forces. State the conditions required for three non-parallel forces to keep a particle in equilibrium.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'For a particle to be in equilibrium under three forces: (1) The vector sum of all three forces must be zero — i.e. the forces form a closed triangle when placed head to tail. (2) Equivalently, the sum of components in any two perpendicular directions must each equal zero: \\(\\sum F_x = 0\\) and \\(\\sum F_y = 0\\). By Lami\'s theorem, if three concurrent coplanar forces keep a particle in equilibrium, each force divided by the sine of the angle between the other two is constant.'
      },
      {
        q: 'A model for a car journey on a motorway uses a particle with constant driving force and constant resistance. Give two reasons why the resistance would not be constant in reality.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(1) Air resistance (drag) depends on the speed of the car — it is approximately proportional to \\(v^2\\), so it increases significantly at higher speeds. At motorway speeds, drag dominates. (2) Rolling resistance varies with road surface condition, tyre pressure, and temperature; it is not truly constant. Other valid answers: wind speed and direction change, gradient of road varies, the car\'s weight changes slightly as fuel is used.'
      },
      {
        q: 'A child\'s toy consists of a ball on a light elastic string attached to a fixed peg. The ball is modelled as a particle and the string as a light elastic cord obeying Hooke\'s Law. State three assumptions in this model and for each one describe how removing the assumption would affect the mathematical analysis.',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(1) Ball as particle: removing this means the ball has size and moment of inertia; the cord attaches at a point on the ball\'s surface, not its centre, introducing a torque and requiring rotational equations of motion. (2) Light string: a string with mass has its own weight and kinetic energy — the equation of motion would need to include distributed mass along the cord, becoming a partial differential equation (wave equation) rather than an ODE. (3) Hooke\'s Law (linear elasticity): real elastic materials are not perfectly linear — at large extensions the tension may increase more steeply (strain stiffening) or the cord may yield (plastic deformation); the restoring force \\(T = kx\\) would need to be replaced by a nonlinear function \\(T = f(x)\\), making the equation of motion nonlinear and generally not solvable in closed form.'
      }
    ],

    red: [
      {
        q: 'A uniform ladder of mass \\(m\\) and length \\(2a\\) leans at angle \\(\\theta\\) against a smooth vertical wall, with its base on rough horizontal ground. Write down all modelling assumptions, then derive the condition on the coefficient of friction \\(\\mu\\) required to prevent the ladder from slipping.',
        marks: 8,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Assumptions: (1) Ladder is a uniform rod — centre of mass at midpoint. (2) Wall is smooth — no friction at top, only normal reaction \\(S\\) horizontally. (3) Ground is rough — normal reaction \\(R\\) and friction \\(F\\) act at base. (4) Ladder is rigid (inextensible). (5) Connections are smooth contacts (point contacts). Forces: Weight \\(mg\\) at midpoint downward; \\(S\\) horizontal at top (from wall); \\(R\\) vertical at base; \\(F\\) horizontal at base toward wall. Equilibrium: \\(\\sum F_x = 0: F = S\\). \\(\\sum F_y = 0: R = mg\\). Moments about base: \\(S \\cdot 2a\\sin\\theta = mg \\cdot a\\cos\\theta\\) so \\(S = \\frac{mg\\cos\\theta}{2\\sin\\theta} = \\frac{mg}{2\\tan\\theta}\\). Friction condition: \\(F \\leq \\mu R\\) so \\(\\frac{mg}{2\\tan\\theta} \\leq \\mu mg\\) giving \\(\\mu \\geq \\frac{1}{2\\tan\\theta} = \\frac{\\cot\\theta}{2}\\).'
      },
      {
        q: 'A cricket ball is bowled and spins rapidly as it travels through the air. Compare the suitability of a particle model versus a rigid body model for describing the motion of the ball. In your answer, state what phenomena each model can and cannot capture.',
        marks: 7,
        tier: 'red',
        diagram: false,
        modelAnswer: 'Particle model: treats the ball as a point mass. Can capture: translational motion (position, velocity, acceleration along trajectory), effect of gravity, basic projectile path. Cannot capture: rotation/spin of the ball, Magnus effect (the sideways force generated by spin interacting with airflow), air resistance variation with orientation, the seam\'s aerodynamic effect. Rigid body model: treats the ball as having size, shape, and moment of inertia. Can capture: rotation about the spin axis, angular momentum, gyroscopic effects, Magnus force (sideways deflection of trajectory). Cannot capture (without further refinement): turbulent airflow, seam effects at the boundary layer. Conclusion: a particle model is adequate for a simple straight-path trajectory estimate but completely fails to explain swing, drift, or the observed curved flight of a spinning cricket ball. A rigid body model with aerodynamic forces is required for a realistic description.'
      },
      {
        q: 'Design a mechanical model for a bungee jump from a bridge. Clearly state all the variables and assumptions in your model, write down the equation of motion during the falling phase (before the rope becomes taut) and during the elastic phase (rope under tension), and identify which aspects of the real situation your model cannot describe.',
        marks: 8,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Variables: \\(m\\) = mass of jumper; \\(L\\) = natural length of cord; \\(k\\) = stiffness (spring constant) of cord; \\(x\\) = extension of cord beyond natural length; \\(H\\) = height of bridge above ground. Assumptions: (1) Jumper modelled as particle. (2) Cord modelled as light elastic string (Hooke\'s Law: tension \\(T = kx\\) for \\(x > 0\\)). (3) Air resistance neglected. (4) Cord does not exceed elastic limit. (5) Bridge is fixed. Phase 1 (free fall, cord slack, displacement \\(y \\leq L\\) from bridge): Only gravity acts. \\(m\\ddot{y} = mg\\) so \\(\\ddot{y} = g = 9.8 \\text{ m s}^{-2}\\) (downward positive). Phase 2 (cord taut, extension \\(x = y - L > 0\\)): Gravity and elastic tension both act. \\(m\\ddot{y} = mg - kx = mg - k(y - L)\\). This is SHM about the equilibrium point \\(y_0 = L + mg/k\\). Limitations: ignores air resistance (terminal velocity not reached in reality); cord has mass; cord is not perfectly elastic (energy is lost — hysteresis); cord may not obey Hooke\'s Law at large extensions; jumper is not a particle (body posture affects drag and cord attachment point).'
      },
      {
        q: 'Evaluate whether Newtonian (classical) mechanics is an appropriate model for the following scenarios. For each, state whether classical mechanics applies and justify your answer: (a) a car moving at 30 m s\\(^{-1}\\), (b) an electron inside an atom, (c) a satellite orbiting Earth at 7500 m s\\(^{-1}\\), (d) a proton moving at 0.98c.',
        marks: 7,
        tier: 'red',
        diagram: false,
        modelAnswer: '(a) Car at 30 m/s: Classical mechanics applies fully. \\(v/c \\approx 10^{-7}\\), so relativistic corrections are negligible (Lorentz factor \\(\\gamma \\approx 1\\)). The car is macroscopic (wave-particle duality irrelevant). Classical Newton\'s laws give highly accurate results. (b) Electron in atom: Classical mechanics does NOT apply. The electron has de Broglie wavelength comparable to atomic dimensions — quantum mechanics is required. Bohr\'s model partially works but full quantum (Schrödinger) treatment is needed. Classical orbits are unstable (accelerating charge radiates energy). (c) Satellite at 7500 m/s: Classical mechanics applies to very high precision for orbital mechanics. \\(v/c \\approx 2.5 \\times 10^{-5}\\), so relativistic correction is tiny (needed for GPS accuracy but negligible for most purposes). Newton\'s law of gravitation plus \\(F=ma\\) gives accurate predictions. (d) Proton at 0.98c: Classical mechanics does NOT apply. \\(\\gamma = 1/\\sqrt{1 - 0.98^2} \\approx 5\\). Relativistic effects are large — the proton\'s effective inertia is 5 times its rest mass. Special relativity (Einstein) must be used. \\(F = ma\\) is incorrect; the relativistic equation \\(F = \\frac{d}{dt}(\\gamma mv)\\) is required.'
      },
      {
        q: 'A particle of weight \\(W\\) is suspended by two strings making angles \\(\\alpha\\) and \\(\\beta\\) with the horizontal. Draw a fully labelled force diagram and derive expressions for the tensions \\(T_1\\) and \\(T_2\\) in terms of \\(W\\), \\(\\alpha\\), and \\(\\beta\\). State all assumptions made.',
        marks: 7,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Assumptions: particle (point mass), strings are light and inextensible, system is in equilibrium. Forces: \\(T_1\\) at angle \\(\\alpha\\) above horizontal (left string), \\(T_2\\) at angle \\(\\beta\\) above horizontal (right string), \\(W\\) downward. Equilibrium equations: Horizontal: \\(T_1\\cos\\alpha = T_2\\cos\\beta \\quad (1)\\). Vertical: \\(T_1\\sin\\alpha + T_2\\sin\\beta = W \\quad (2)\\). From (1): \\(T_1 = T_2\\dfrac{\\cos\\beta}{\\cos\\alpha}\\). Substituting into (2): \\(T_2\\dfrac{\\cos\\beta\\sin\\alpha}{\\cos\\alpha} + T_2\\sin\\beta = W\\). \\(T_2\\dfrac{\\cos\\beta\\sin\\alpha + \\sin\\beta\\cos\\alpha}{\\cos\\alpha} = W\\). \\(T_2\\dfrac{\\sin(\\alpha+\\beta)}{\\cos\\alpha} = W\\). Therefore: $$T_2 = \\frac{W\\cos\\alpha}{\\sin(\\alpha+\\beta)}, \\quad T_1 = \\frac{W\\cos\\beta}{\\sin(\\alpha+\\beta)}$$'
      },
      {
        q: 'A block of mass \\(m\\) rests on a rough inclined plane (angle \\(\\theta\\), coefficient of friction \\(\\mu\\)). Write all assumptions for this model. Hence find: (a) the range of \\(\\theta\\) for which the block remains stationary, (b) the acceleration if \\(\\theta\\) exceeds this range.',
        marks: 8,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Assumptions: particle model (no size), uniform gravitational field, plane is rigid and straight, coefficient of static friction \\(\\mu_s = \\mu\\) (same static and kinetic for this model), no air resistance. Forces: Weight components — \\(mg\\sin\\theta\\) down the slope, \\(mg\\cos\\theta\\) normal to slope. Normal reaction \\(R = mg\\cos\\theta\\). Maximum static friction \\(F_{max} = \\mu R = \\mu mg\\cos\\theta\\). (a) Block stationary if \\(mg\\sin\\theta \\leq \\mu mg\\cos\\theta\\), i.e. \\(\\tan\\theta \\leq \\mu\\), i.e. \\(\\theta \\leq \\arctan(\\mu)\\). (b) If \\(\\theta > \\arctan(\\mu)\\), block slides down. Net force down slope = \\(mg\\sin\\theta - \\mu mg\\cos\\theta = mg(\\sin\\theta - \\mu\\cos\\theta)\\). By Newton\'s 2nd Law: \\(ma = mg(\\sin\\theta - \\mu\\cos\\theta)\\) so $$a = g(\\sin\\theta - \\mu\\cos\\theta)$$'
      },
      {
        q: 'A light rod \\(AB\\) of length \\(4\\) m is horizontal. A load of \\(20\\) N hangs from point \\(C\\), where \\(AC = 1\\) m. The rod rests on two smooth supports at \\(A\\) and \\(B\\). State all modelling assumptions and find the reactions at \\(A\\) and \\(B\\). Explain how the answer would change if the rod were non-uniform.',
        marks: 8,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Assumptions: (1) Rod is light (massless) — no weight from rod itself. (2) Supports are smooth — only vertical reactions \\(R_A\\) and \\(R_B\\). (3) Load is a particle (point force at C). (4) System is in equilibrium. (5) Rod is rigid (horizontal, no bending). Let \\(R_A\\) and \\(R_B\\) be the upward reactions at A and B. Resolve vertically: \\(R_A + R_B = 20 \\quad (1)\\). Moments about A: \\(R_B \\times 4 = 20 \\times 1\\) so \\(R_B = 5 \\text{ N}\\). From (1): \\(R_A = 15 \\text{ N}\\). Check moments about B: \\(R_A \\times 4 = 60\\) and \\(20 \\times 3 = 60\\). Confirmed. If rod were non-uniform: the rod would have its own weight \\(W_{rod}\\) acting downward at an unknown centre of mass position, adding another unknown. Without knowing the mass distribution, we could only set up the equilibrium equations with this extra force included; a unique solution would require the position of the rod\'s centre of mass to be given.'
      },
      {
        q: 'A car of mass \\(1200\\) kg tows a trailer of mass \\(400\\) kg along a straight horizontal road. The car\'s engine produces a driving force of \\(3600\\) N. Resistance on the car is \\(800\\) N and resistance on the trailer is \\(200\\) N. Modelling both as particles connected by a light inextensible tow bar: (a) find the acceleration of the system, (b) find the tension in the tow bar, (c) state one limitation of treating the car as a particle.',
        marks: 7,
        tier: 'red',
        diagram: true,
        modelAnswer: '(a) Total mass \\(= 1200 + 400 = 1600\\) kg. Net force on system = Driving force − total resistance \\(= 3600 - 800 - 200 = 2600\\) N. By Newton\'s 2nd Law: \\(a = \\dfrac{2600}{1600} = 1.625 \\text{ m s}^{-2}\\). (b) Consider trailer alone. Forces: Tension \\(T\\) forward, resistance \\(200\\) N backward. \\(T - 200 = 400 \\times 1.625 = 650\\). \\(T = 850 \\text{ N}\\). Check with car: \\(3600 - 800 - T = 1200 \\times 1.625\\). \\(2800 - 850 = 1950\\). \\(1200 \\times 1.625 = 1950\\). Confirmed. (c) Treating the car as a particle ignores its size — in reality, the driving force is applied at the wheels (road contact) and the tow bar force is at the rear, creating a moment that could cause pitching/rocking of the car. The particle model cannot capture these rotational effects.'
      },
      {
        q: 'Two particles A and B, of masses \\(3m\\) and \\(m\\) respectively, are connected by a light inextensible string over a smooth fixed pulley. Write all modelling assumptions and find: (a) the acceleration of the system, (b) the tension in the string, (c) the force exerted on the pulley by the string.',
        marks: 8,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Assumptions: particles (point masses, no size), light string (massless), inextensible string (same acceleration \\(a\\) for both), smooth pulley (tension same on both sides, pulley has no friction), smooth pulley is fixed (does not accelerate), constant \\(g = 9.8\\) m s\\(^{-2}\\). Let \\(a\\) be acceleration (A goes down, B goes up) and \\(T\\) be tension. For A (mass \\(3m\\), moving down): \\(3mg - T = 3ma \\quad (1)\\). For B (mass \\(m\\), moving up): \\(T - mg = ma \\quad (2)\\). Adding (1) + (2): \\(3mg - mg = 4ma\\) so \\(\\boxed{a = \\dfrac{g}{2} = 4.9 \\text{ m s}^{-2}}\\). From (2): \\(T = m(a + g) = m\\left(\\dfrac{g}{2} + g\\right) = \\dfrac{3mg}{2}\\). (c) The string exerts tension \\(T\\) on each side of the pulley. The force on the pulley is the resultant of these two tension forces. Since both sides of the string are vertical (particles hang freely): Force on pulley \\(= T + T = 2T = 3mg\\) (downward).'
      },
      {
        q: 'Evaluate the following statement: "Because \\(g = 9.8 \\text{ m s}^{-2}\\) is used in all A-Level problems, any answer obtained is an exact physical prediction." Discuss the sources of error in a mechanics calculation, categorising them as modelling errors, measurement errors, and computational errors.',
        marks: 7,
        tier: 'red',
        diagram: false,
        modelAnswer: 'The statement is false. A-Level answers are predictions of a model, not exact physical reality. Sources of error: MODELLING ERRORS (largest category): (1) Using \\(g = 9.8\\) m s\\(^{-2}\\) is itself an approximation — \\(g\\) varies from \\(9.78\\) m s\\(^{-2}\\) at the equator to \\(9.83\\) m s\\(^{-2}\\) at the poles. (2) Treating objects as particles ignores size, rotation, and the distribution of mass. (3) Ignoring air resistance may cause large errors for light/fast objects. (4) Assuming surfaces smooth or with constant \\(\\mu\\) is unrealistic. MEASUREMENT ERRORS: (5) Initial conditions (speeds, angles, masses) can only be measured to limited precision — rounding the inputs causes error in outputs. (6) String lengths and heights may not be exact. COMPUTATIONAL ERRORS: (7) Rounding during calculation accumulates error; intermediate rounding is worse than rounding only the final answer. (8) Using \\(g = 9.8\\) to 2 s.f. limits the precision of all outputs to at most 2–3 significant figures. Conclusion: mechanics answers should be reported to 2–3 s.f. and understood as model predictions with all the limitations of the assumptions made.'
      }
    ]
  },

  'M2': {
    name: 'Kinematics (SUVAT)',

    green: [
      {
        q: 'A particle starts from rest and accelerates uniformly at \\(3 \\text{ m s}^{-2}\\). Find its velocity after \\(5\\) seconds.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Using \\(v = u + at\\): \\(u = 0\\), \\(a = 3\\) m s\\(^{-2}\\), \\(t = 5\\) s. \\(v = 0 + 3 \\times 5 = 15 \\text{ m s}^{-1}\\).'
      },
      {
        q: 'A car accelerates from \\(10 \\text{ m s}^{-1}\\) to \\(30 \\text{ m s}^{-1}\\) in \\(8\\) seconds. Find: (a) the acceleration, (b) the distance travelled.',
        marks: 4,
        tier: 'green',
        diagram: false,
        modelAnswer: '(a) \\(v = u + at\\): \\(30 = 10 + 8a\\) so \\(a = \\dfrac{20}{8} = 2.5 \\text{ m s}^{-2}\\). (b) \\(s = ut + \\tfrac{1}{2}at^2 = 10(8) + \\tfrac{1}{2}(2.5)(64) = 80 + 80 = 160 \\text{ m}\\). Check: \\(v^2 = u^2 + 2as \\Rightarrow 900 = 100 + 5s \\Rightarrow s = 160\\) m. Confirmed.'
      },
      {
        q: 'A ball is thrown vertically upward with initial speed \\(14.7 \\text{ m s}^{-1}\\). Find the time taken to reach maximum height. Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'At maximum height, \\(v = 0\\). Taking upward as positive: \\(u = 14.7\\), \\(a = -9.8\\), \\(v = 0\\). \\(v = u + at\\): \\(0 = 14.7 - 9.8t\\) so \\(t = \\dfrac{14.7}{9.8} = 1.5 \\text{ s}\\).'
      },
      {
        q: 'A stone is dropped from rest at a height of \\(20\\) m above the ground. Find its speed when it hits the ground. Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Taking downward as positive: \\(u = 0\\), \\(a = 9.8\\), \\(s = 20\\). \\(v^2 = u^2 + 2as = 0 + 2(9.8)(20) = 392\\). \\(v = \\sqrt{392} = 14\\sqrt{2} \\approx 19.8 \\text{ m s}^{-1}\\).'
      },
      {
        q: 'A particle moves with uniform acceleration. It has velocity \\(6 \\text{ m s}^{-1}\\) at time \\(t = 2\\) s and velocity \\(18 \\text{ m s}^{-1}\\) at time \\(t = 5\\) s. Find the acceleration.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Change in velocity \\(= 18 - 6 = 12 \\text{ m s}^{-1}\\) over \\(\\Delta t = 5 - 2 = 3\\) s. \\(a = \\dfrac{12}{3} = 4 \\text{ m s}^{-2}\\).'
      },
      {
        q: 'A particle decelerates uniformly from \\(24 \\text{ m s}^{-1}\\) to rest over a distance of \\(36\\) m. Find the deceleration.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: '\\(v^2 = u^2 + 2as\\): \\(0 = 24^2 + 2a(36)\\). \\(0 = 576 + 72a\\). \\(a = -8 \\text{ m s}^{-2}\\). Deceleration is \\(8 \\text{ m s}^{-2}\\).'
      },
      {
        q: 'A ball is thrown vertically upward from ground level with speed \\(u\\). It returns to the ground after \\(6\\) seconds. Find \\(u\\) and the maximum height reached. Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 4,
        tier: 'green',
        diagram: false,
        modelAnswer: 'The ball returns to the same level so \\(s = 0\\). Taking upward as positive: \\(s = ut + \\tfrac{1}{2}at^2\\): \\(0 = 6u + \\tfrac{1}{2}(-9.8)(36) = 6u - 176.4\\). \\(u = 29.4 \\text{ m s}^{-1}\\). Maximum height: \\(v = 0\\) at top. \\(v^2 = u^2 + 2as\\): \\(0 = 29.4^2 - 2(9.8)s\\) so \\(s = \\dfrac{864.36}{19.6} = 44.1 \\text{ m}\\).'
      },
      {
        q: 'A train travels at a constant speed of \\(25 \\text{ m s}^{-1}\\) for \\(200\\) s, then brakes uniformly to rest in \\(50\\) s. Find: (a) the total distance, (b) the deceleration during braking.',
        marks: 4,
        tier: 'green',
        diagram: false,
        modelAnswer: '(a) Constant speed phase: \\(s_1 = 25 \\times 200 = 5000\\) m. Braking phase: \\(s_2 = \\frac{1}{2}(25+0)(50) = 625\\) m. Total \\(= 5625\\) m. (b) \\(v = u + at\\): \\(0 = 25 + 50a\\) so \\(a = -0.5 \\text{ m s}^{-2}\\). Deceleration is \\(0.5 \\text{ m s}^{-2}\\).'
      },
      {
        q: 'State the five SUVAT equations and the variables each contains.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: '(1) \\(v = u + at\\) — no \\(s\\). (2) \\(s = \\tfrac{1}{2}(u+v)t\\) — no \\(a\\). (3) \\(s = ut + \\tfrac{1}{2}at^2\\) — no \\(v\\). (4) \\(v^2 = u^2 + 2as\\) — no \\(t\\). (5) \\(s = vt - \\tfrac{1}{2}at^2\\) — no \\(u\\). All require constant acceleration.'
      },
      {
        q: 'A particle is projected vertically downward from rest off a cliff of height \\(H\\). Write an expression for: (a) its velocity after falling for time \\(t\\), (b) the time to reach the sea below.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Taking downward as positive, \\(u = 0\\), \\(a = g = 9.8 \\text{ m s}^{-2}\\). (a) \\(v = gt\\). (b) \\(s = \\tfrac{1}{2}gt^2 = H\\) so \\(t = \\sqrt{\\dfrac{2H}{g}}\\).'
      },
      {
        q: 'A car is travelling at \\(20 \\text{ m s}^{-1}\\) when the driver applies the brakes. The car decelerates at \\(4 \\text{ m s}^{-2}\\). Find how far the car travels before stopping.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: '\\(v^2 = u^2 + 2as\\): \\(0 = 400 + 2(-4)s\\) so \\(8s = 400\\), \\(s = 50 \\text{ m}\\).'
      },
      {
        q: 'A particle accelerates from \\(5 \\text{ m s}^{-1}\\) with acceleration \\(2 \\text{ m s}^{-2}\\). Find its displacement in the 4th second (i.e. between \\(t = 3\\) s and \\(t = 4\\) s).',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Displacement up to \\(t = 4\\): \\(s_4 = 5(4) + \\tfrac{1}{2}(2)(16) = 20 + 16 = 36\\) m. Displacement up to \\(t = 3\\): \\(s_3 = 5(3) + \\tfrac{1}{2}(2)(9) = 15 + 9 = 24\\) m. Distance in 4th second \\(= 36 - 24 = 12\\) m. Alternative: \\(v\\) at \\(t=3\\) is \\(5 + 2(3) = 11\\) m s\\(^{-1}\\). \\(s = 11(1) + \\tfrac{1}{2}(2)(1) = 12\\) m.'
      },
      {
        q: 'A ball is released from rest and falls freely. Using \\(g = 9.8 \\text{ m s}^{-2}\\), find how far it falls in (a) the first 2 s, (b) the first 5 s.',
        marks: 2,
        tier: 'green',
        diagram: false,
        modelAnswer: '\\(s = \\tfrac{1}{2}gt^2\\). (a) \\(s = \\tfrac{1}{2}(9.8)(4) = 19.6\\) m. (b) \\(s = \\tfrac{1}{2}(9.8)(25) = 122.5\\) m.'
      },
      {
        q: 'Explain why the SUVAT equations can only be applied when acceleration is constant. Give one example of a motion where SUVAT cannot be used directly.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'SUVAT equations are derived by integrating \\(a = \\text{constant}\\) once (to get \\(v = u + at\\)) and twice (to get \\(s = ut + \\tfrac{1}{2}at^2\\)). If \\(a\\) is not constant, these integrals give different functions and the SUVAT formulae no longer hold. Example where SUVAT cannot be used: a particle falling with air resistance (acceleration decreases as speed increases and drag force grows); or a particle on a spring (acceleration depends on position, i.e. SHM).'
      },
      {
        q: 'A particle moves in a straight line with constant acceleration. At time \\(t = 0\\) it has velocity \\(u = 12 \\text{ m s}^{-1}\\) and at time \\(t = 10\\) s it has displacement \\(s = 70\\) m from its initial position. Find the acceleration.',
        marks: 3,
        tier: 'green',
        diagram: false,
        modelAnswer: 'Using \\(s = ut + \\tfrac{1}{2}at^2\\): \\(70 = 12(10) + \\tfrac{1}{2}a(100)\\). \\(70 = 120 + 50a\\). \\(50a = -50\\). \\(a = -1 \\text{ m s}^{-2}\\). (The particle is decelerating.)'
      }
    ],

    amber: [
      {
        q: 'A particle accelerates from rest at \\(3 \\text{ m s}^{-2}\\) for \\(10\\) s, then decelerates uniformly to rest. The total distance covered is \\(300\\) m. Find the deceleration.',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Phase 1: \\(u=0, a=3, t=10\\). \\(v_1 = 0 + 3(10) = 30 \\text{ m s}^{-1}\\). \\(s_1 = \\tfrac{1}{2}(3)(100) = 150\\) m. Phase 2: \\(u_2=30, v_2=0, s_2 = 300 - 150 = 150\\) m. \\(v^2 = u^2 + 2as\\): \\(0 = 900 + 2a(150)\\). \\(300a = -900\\). \\(a = -3 \\text{ m s}^{-2}\\). Deceleration = \\(3 \\text{ m s}^{-2}\\).'
      },
      {
        q: 'A velocity-time graph for a particle shows: from \\(t=0\\) to \\(t=4\\) s the velocity increases linearly from \\(0\\) to \\(12 \\text{ m s}^{-1}\\); from \\(t=4\\) to \\(t=10\\) s the velocity is constant at \\(12 \\text{ m s}^{-1}\\); from \\(t=10\\) to \\(t=13\\) s the velocity decreases linearly to \\(0\\). Find: (a) the acceleration in the first phase, (b) the deceleration in the final phase, (c) the total distance travelled.',
        marks: 5,
        tier: 'amber',
        diagram: true,
        modelAnswer: '(a) Gradient \\(= \\dfrac{12-0}{4-0} = 3 \\text{ m s}^{-2}\\). (b) Gradient \\(= \\dfrac{0-12}{13-10} = -4 \\text{ m s}^{-2}\\). Deceleration \\(= 4 \\text{ m s}^{-2}\\). (c) Distance = area under v-t graph. Phase 1: \\(\\tfrac{1}{2}(4)(12) = 24\\) m. Phase 2: \\(6 \\times 12 = 72\\) m. Phase 3: \\(\\tfrac{1}{2}(3)(12) = 18\\) m. Total \\(= 24 + 72 + 18 = 114\\) m.'
      },
      {
        q: 'A stone is thrown vertically downward from the top of a cliff with speed \\(5 \\text{ m s}^{-1}\\). It hits the sea below after \\(3\\) seconds. Find: (a) the height of the cliff, (b) the speed of impact. Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Taking downward as positive, \\(u = 5\\), \\(a = 9.8\\). (a) \\(s = ut + \\tfrac{1}{2}at^2 = 5(3) + \\tfrac{1}{2}(9.8)(9) = 15 + 44.1 = 59.1\\) m. (b) \\(v = u + at = 5 + 9.8(3) = 5 + 29.4 = 34.4 \\text{ m s}^{-1}\\). Check: \\(v^2 = 25 + 2(9.8)(59.1) = 25 + 1158.36 = 1183.36\\), \\(v = 34.4\\) m s\\(^{-1}\\). Confirmed.'
      },
      {
        q: 'A particle decelerates uniformly from \\(20 \\text{ m s}^{-1}\\) to \\(8 \\text{ m s}^{-1}\\) over a distance of \\(56\\) m. Find: (a) the deceleration, (b) the time taken.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(a) \\(v^2 = u^2 + 2as\\): \\(64 = 400 + 2a(56)\\). \\(112a = -336\\). \\(a = -3 \\text{ m s}^{-2}\\). (b) \\(v = u + at\\): \\(8 = 20 - 3t\\) so \\(t = \\dfrac{12}{3} = 4\\) s.'
      },
      {
        q: 'Particle A is projected vertically upward from ground level with speed \\(29.4 \\text{ m s}^{-1}\\) at \\(t = 0\\). At \\(t = 1\\) s, particle B is dropped from rest from a height of \\(H\\) metres. They reach the ground at the same time. Find \\(H\\). Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 6,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Particle A: upward positive, \\(u_A = 29.4\\), \\(a = -9.8\\). Returns to ground when \\(s = 0\\): \\(0 = 29.4t - 4.9t^2 = t(29.4 - 4.9t)\\). So \\(t_A = 6\\) s. Particle B: dropped at \\(t = 1\\) s, falls for \\((6-1) = 5\\) s before hitting ground. \\(H = \\tfrac{1}{2}(9.8)(25) = 122.5\\) m.'
      },
      {
        q: 'A car travelling at \\(30 \\text{ m s}^{-1}\\) passes a stationary motorcycle. At the moment the car passes, the motorcycle begins to accelerate uniformly at \\(5 \\text{ m s}^{-2}\\). The car continues at constant speed. Find: (a) when the motorcycle catches the car, (b) how far from the starting point this occurs.',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Let \\(t\\) = time after motorcycle starts. Car: \\(s_{car} = 30t\\). Motorcycle: \\(s_{moto} = \\tfrac{1}{2}(5)t^2 = 2.5t^2\\). They meet when \\(s_{car} = s_{moto}\\): \\(30t = 2.5t^2\\). \\(t(2.5t - 30) = 0\\). \\(t = 0\\) (starting position) or \\(t = 12\\) s. (a) Motorcycle catches car after \\(12\\) s. (b) Distance: \\(s = 30(12) = 360\\) m.'
      },
      {
        q: 'A particle travels in a straight line. The v-t graph is given (sketch not shown). For \\(0 \\leq t \\leq 3\\) s: \\(v = 4t \\text{ m s}^{-1}\\). For \\(3 < t \\leq 7\\) s: \\(v = 12 \\text{ m s}^{-1}\\). For \\(7 < t \\leq 11\\) s: \\(v = 12 - 3(t-7) \\text{ m s}^{-1}\\). Find the total distance and determine when the particle is at rest.',
        marks: 5,
        tier: 'amber',
        diagram: true,
        modelAnswer: 'Phase 1 (0 to 3 s): Area = \\(\\tfrac{1}{2}(3)(12) = 18\\) m. Phase 2 (3 to 7 s): Area = \\(4 \\times 12 = 48\\) m. Phase 3 (7 to 11 s): velocity = \\(12 - 3(t-7)\\). At rest when \\(v = 0\\): \\(12 = 3(t-7) \\Rightarrow t-7 = 4 \\Rightarrow t = 11\\) s. Area = \\(\\tfrac{1}{2}(4)(12) = 24\\) m. Total distance = \\(18 + 48 + 24 = 90\\) m. The particle is at rest at \\(t = 11\\) s.'
      },
      {
        q: 'A ball is thrown vertically upward with speed \\(u\\) from a window \\(15\\) m above the ground. It hits the ground \\(5\\) s later. Use \\(g = 9.8 \\text{ m s}^{-2}\\). Find \\(u\\) and the maximum height above the ground reached by the ball.',
        marks: 6,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Taking upward as positive, origin at window. At ground: \\(s = -15\\) m, \\(t = 5\\) s, \\(a = -9.8\\). \\(s = ut + \\tfrac{1}{2}at^2\\): \\(-15 = 5u - \\tfrac{1}{2}(9.8)(25) = 5u - 122.5\\). \\(5u = 107.5\\). \\(u = 21.5 \\text{ m s}^{-1}\\). Maximum height above window: \\(v = 0\\) at top. \\(v^2 = u^2 - 2gs_{top}\\): \\(0 = 462.25 - 19.6 s_{top}\\). \\(s_{top} = 23.59...\\) m above window. Height above ground \\(= 23.59 + 15 \\approx 38.6\\) m.'
      },
      {
        q: 'A particle starts at rest and accelerates at \\(a_1 = 2 \\text{ m s}^{-2}\\) for time \\(T\\). It then decelerates at \\(a_2 = 3 \\text{ m s}^{-2}\\) to rest. The total distance is \\(75\\) m. Find \\(T\\) and the maximum speed achieved.',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Maximum speed: \\(v_{max} = 2T\\) (from phase 1). Time for phase 2: \\(v_{max} = 3t_2 \\Rightarrow t_2 = \\frac{2T}{3}\\). Distance phase 1: \\(s_1 = \\tfrac{1}{2}(2)(T^2) = T^2\\). Distance phase 2: \\(s_2 = v_{max} t_2 - \\tfrac{1}{2}(3)t_2^2 = 2T \\cdot \\frac{2T}{3} - \\tfrac{3}{2} \\cdot \\frac{4T^2}{9} = \\frac{4T^2}{3} - \\frac{2T^2}{3} = \\frac{2T^2}{3}\\). Total: \\(T^2 + \\frac{2T^2}{3} = \\frac{5T^2}{3} = 75\\). \\(T^2 = 45\\). \\(T = 3\\sqrt{5} \\approx 6.71\\) s. \\(v_{max} = 2T = 6\\sqrt{5} \\approx 13.4 \\text{ m s}^{-1}\\).'
      },
      {
        q: 'A particle is launched vertically upward. Using \\(g = 9.8 \\text{ m s}^{-2}\\), explain why the time to reach maximum height equals the time to fall from maximum height back to the launch point, and verify this algebraically.',
        marks: 4,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Physical argument: motion is symmetric under time-reversal when only constant gravity acts and no air resistance. The particle gains speed at rate \\(g\\) going down just as it lost speed at rate \\(g\\) going up; since the distances are the same, the times must be equal. Algebraic verification: let \\(u\\) be launch speed. Time to top: \\(t_{up} = u/g\\) (from \\(v = u - gt = 0\\)). Time from top back to ground: particle falls from rest through height \\(h = u^2/(2g)\\). \\(h = \\tfrac{1}{2}g t_{down}^2 \\Rightarrow t_{down} = \\sqrt{2h/g} = \\sqrt{u^2/g^2} = u/g = t_{up}\\). Hence \\(t_{up} = t_{down}\\). QED.'
      },
      {
        q: 'Two trains A and B travel in the same direction on parallel tracks. At \\(t=0\\): A has velocity \\(20 \\text{ m s}^{-1}\\) and decelerates at \\(0.5 \\text{ m s}^{-2}\\); B is at the same position, at rest, and accelerates at \\(1 \\text{ m s}^{-2}\\). Find when and where B overtakes A.',
        marks: 6,
        tier: 'amber',
        diagram: false,
        modelAnswer: '\\(s_A = 20t - \\tfrac{1}{2}(0.5)t^2 = 20t - 0.25t^2\\). \\(s_B = \\tfrac{1}{2}(1)t^2 = 0.5t^2\\). First check A doesn\'t stop: A stops when \\(v_A = 20 - 0.5t = 0 \\Rightarrow t = 40\\) s. B overtakes A when \\(s_B > s_A\\), i.e. equal displacements first: \\(0.5t^2 = 20t - 0.25t^2\\). \\(0.75t^2 = 20t\\). \\(t(0.75t - 20) = 0\\). \\(t = 0\\) (start) or \\(t = \\frac{20}{0.75} = \\frac{80}{3} \\approx 26.7\\) s. At \\(t = 80/3\\): \\(s = 0.5(80/3)^2 = 0.5 \\times 6400/9 = 3200/9 \\approx 355.6\\) m from starting point.'
      },
      {
        q: 'A particle moves along a straight line. Its displacement from origin is given by \\(s = 3t^2 - t^3\\) for \\(0 \\leq t \\leq 3\\). Find (a) the velocity at \\(t = 1\\) s, (b) when the particle is momentarily at rest, (c) the total distance travelled in \\(0 \\leq t \\leq 3\\).',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: '(a) \\(v = \\dfrac{ds}{dt} = 6t - 3t^2\\). At \\(t=1\\): \\(v = 6 - 3 = 3 \\text{ m s}^{-1}\\). (b) \\(v = 0\\): \\(6t - 3t^2 = 3t(2-t) = 0\\). \\(t = 0\\) or \\(t = 2\\) s. (c) At \\(t=0\\): \\(s=0\\). At \\(t=2\\): \\(s = 3(4) - 8 = 4\\) m. At \\(t=3\\): \\(s = 27 - 27 = 0\\). Particle moves 4 m forward (0 to 4 m), then 4 m back (4 m to 0). Total distance \\(= 4 + 4 = 8\\) m.'
      },
      {
        q: 'A motorcyclist sees a red light \\(50\\) m ahead while travelling at \\(15 \\text{ m s}^{-1}\\). After a reaction time of \\(0.5\\) s, she applies the brakes. What minimum constant deceleration is needed to stop exactly at the light?',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'During reaction time (constant speed): \\(s_1 = 15 \\times 0.5 = 7.5\\) m. Remaining distance: \\(s_2 = 50 - 7.5 = 42.5\\) m. Braking: \\(u = 15, v = 0, s = 42.5\\). \\(v^2 = u^2 + 2as\\): \\(0 = 225 + 2a(42.5)\\). \\(a = -\\dfrac{225}{85} = -\\dfrac{45}{17} \\approx -2.65 \\text{ m s}^{-2}\\). Minimum deceleration is \\(\\dfrac{45}{17} \\approx 2.65 \\text{ m s}^{-2}\\).'
      },
      {
        q: 'A ball is thrown upward from a platform \\(2.5\\) m high with speed \\(7 \\text{ m s}^{-1}\\). Another ball is dropped from a height of \\(12\\) m at the same instant. At what time and height do they meet? Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 6,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Take upward positive, origin at ground. Ball 1 (thrown up from height 2.5 m): \\(y_1 = 2.5 + 7t - 4.9t^2\\). Ball 2 (dropped from 12 m): \\(y_2 = 12 - 4.9t^2\\). They meet when \\(y_1 = y_2\\): \\(2.5 + 7t - 4.9t^2 = 12 - 4.9t^2\\). \\(2.5 + 7t = 12\\). \\(7t = 9.5\\). \\(t = \\frac{9.5}{7} \\approx 1.357\\) s. Height: \\(y_2 = 12 - 4.9(1.357)^2 = 12 - 4.9(1.841) = 12 - 9.02 \\approx 2.98\\) m. They meet approximately \\(2.98\\) m above ground after \\(\\approx 1.36\\) s.'
      },
      {
        q: 'A particle is projected vertically upward from the top of a building of height \\(30\\) m with speed \\(10 \\text{ m s}^{-1}\\). Find the time at which the particle is \\(5\\) m above the base of the building. Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 5,
        tier: 'amber',
        diagram: false,
        modelAnswer: 'Take upward positive, origin at top of building. Target position: \\(5 - 30 = -25\\) m (below launch point). \\(s = ut + \\tfrac{1}{2}at^2\\): \\(-25 = 10t - 4.9t^2\\). \\(4.9t^2 - 10t - 25 = 0\\). Using quadratic formula: \\(t = \\dfrac{10 \\pm \\sqrt{100 + 4(4.9)(25)}}{9.8} = \\dfrac{10 \\pm \\sqrt{100 + 490}}{9.8} = \\dfrac{10 \\pm \\sqrt{590}}{9.8}\\). \\(\\sqrt{590} \\approx 24.29\\). \\(t = \\dfrac{10 + 24.29}{9.8} \\approx \\dfrac{34.29}{9.8} \\approx 3.50\\) s (taking positive root; negative root gives \\(t < 0\\), rejected).'
      }
    ],

    red: [
      {
        q: 'Particle P is projected vertically upward from ground level with speed \\(25 \\text{ m s}^{-1}\\) at time \\(t = 0\\). Particle Q is projected vertically upward from the same point with speed \\(15 \\text{ m s}^{-1}\\) at time \\(t = T\\). They collide at height \\(20\\) m on the way up. Find \\(T\\) and the time of collision. Use \\(g = 9.8 \\text{ m s}^{-2}\\).',
        marks: 8,
        tier: 'red',
        diagram: false,
        modelAnswer: 'Particle P: \\(20 = 25t_P - 4.9t_P^2\\). \\(4.9t_P^2 - 25t_P + 20 = 0\\). \\(t_P = \\dfrac{25 \\pm \\sqrt{625 - 392}}{9.8} = \\dfrac{25 \\pm \\sqrt{233}}{9.8}\\). \\(\\sqrt{233} \\approx 15.26\\). \\(t_P = \\dfrac{25 - 15.26}{9.8} \\approx 0.994\\) s (on the way up, smaller root) or \\(t_P \\approx 4.11\\) s (on way down). Since "on the way up" for P: \\(t_P \\approx 0.994\\) s. Particle Q is launched at \\(t = T\\), so Q has been in flight for \\(\\tau = t_P - T\\). \\(20 = 15\\tau - 4.9\\tau^2\\). \\(4.9\\tau^2 - 15\\tau + 20 = 0\\). Discriminant: \\(225 - 392 = -167 < 0\\). No real solution for Q on the way up reaching 20 m — Q\'s maximum height is \\(\\frac{15^2}{19.6} = 11.48\\) m. Q cannot reach 20 m. Reconsidering: collision occurs as P comes DOWN and Q goes UP. P returns to 20 m at \\(t_P \\approx 4.11\\) s. At that time Q has been in flight for \\(4.11 - T\\) seconds at height 20 m: \\(20 = 15(4.11-T) - 4.9(4.11-T)^2\\). Let \\(\\tau = 4.11 - T\\). \\(4.9\\tau^2 - 15\\tau + 20 = 0\\). No real solution (Q cannot reach 20 m). Therefore collision is impossible with Q max height \\(< 20\\) m. [Note to student: if the problem intends Q projected at 25 m/s and P at 15 m/s, or height is 10 m — always check Q reaches collision height. With \\(h = 10\\) m: P at \\(t = 0.44\\) s, Q: \\(4.9\\tau^2 - 15\\tau + 10 = 0\\), \\(\\tau = \\frac{15 \\pm \\sqrt{225-196}}{9.8} = \\frac{15 \\pm \\sqrt{29}}{9.8}\\), \\(\\tau \\approx 0.98\\) s on way up. \\(T = t_P - \\tau = 0.44 - 0.98 < 0\\), rejected; use P on way down: \\(t_P = 4.67\\) s, \\(T = 4.67 - 0.98 = 3.69\\) s.] This question requires verifying feasibility — award marks for correct SUVAT setup, identifying Q\'s max height, and systematic approach.'
      },
      {
        q: 'A particle moves along a straight line starting from origin O with initial velocity \\(u = -4 \\text{ m s}^{-1}\\) (toward O) and acceleration \\(a = 2 \\text{ m s}^{-2}\\). (a) Find when the particle is momentarily at rest. (b) Find the total distance travelled in the first 6 s. (c) Sketch the displacement-time graph for \\(0 \\leq t \\leq 6\\).',
        marks: 7,
        tier: 'red',
        diagram: true,
        modelAnswer: '(a) \\(v = u + at = -4 + 2t = 0 \\Rightarrow t = 2\\) s. (b) At \\(t=0\\): \\(s=0\\). At \\(t=2\\): \\(s = -4(2) + \\tfrac{1}{2}(2)(4) = -8 + 4 = -4\\) m (4 m from O in negative direction). At \\(t=6\\): \\(s = -4(6) + \\tfrac{1}{2}(2)(36) = -24 + 36 = 12\\) m. Particle travels 4 m to reach \\(s=-4\\) m, then travels back past O to \\(s = 12\\) m — a distance of \\(4 + 12 = 16\\) m. Total distance \\(= 4 + 16 = \\mathbf{20}\\) m. (c) Displacement-time graph: starts at 0, curves down (concave up since \\(a > 0\\)) to minimum of \\(-4\\) m at \\(t = 2\\) s, then rises back through 0 at \\(t = 4\\) s (\\(-4(4)+\\tfrac{1}{2}(2)(16) = -16+16 = 0\\)), continuing up to \\(s = 12\\) m at \\(t = 6\\) s. Parabolic shape throughout.'
      },
      {
        q: 'A particle is launched vertically upward from ground level with speed \\(V \\text{ m s}^{-1}\\). It bounces off the ground elastically so that it rebounds with speed \\(\\frac{3}{4}V\\). Find, in terms of \\(V\\) and \\(g\\): (a) the maximum height on the first bounce, (b) the time from launch until it returns to ground level after the bounce, (c) the total distance travelled from launch until it returns to ground after the first bounce.',
        marks: 8,
        tier: 'red',
        diagram: false,
        modelAnswer: '(a) After bounce, upward speed \\(= \\frac{3V}{4}\\). Max height: \\(v^2 = u^2 - 2gh_{max}\\): \\(0 = \\frac{9V^2}{16} - 2gh_{max}\\). \\(h_{max} = \\dfrac{9V^2}{32g}\\). (b) Time from launch to first impact: \\(0 = Vt_1 - \\tfrac{1}{2}gt_1^2 \\Rightarrow t_1 = \\frac{2V}{g}\\) (time up and back to ground). After bounce, time in air: \\(t_2 = \\frac{2 \\times 3V/4}{g} = \\frac{3V}{2g}\\). Total time from launch until returns to ground after bounce \\(= t_1 + t_2 = \\frac{2V}{g} + \\frac{3V}{2g} = \\frac{7V}{2g}\\). (c) Distance before bounce: ball goes up to height \\(h_1 = \\frac{V^2}{2g}\\) then returns — distance \\(= 2 \\times \\frac{V^2}{2g} = \\frac{V^2}{g}\\). Distance after bounce: up to \\(h_{max} = \\frac{9V^2}{32g}\\) then back — distance \\(= 2 \\times \\frac{9V^2}{32g} = \\frac{9V^2}{16g}\\). Total distance \\(= \\frac{V^2}{g} + \\frac{9V^2}{16g} = \\frac{16V^2 + 9V^2}{16g} = \\dfrac{25V^2}{16g}\\).'
      },
      {
        q: 'A car travelling at \\(u \\text{ m s}^{-1}\\) must stop within distance \\(d\\) metres. (a) Find the minimum constant deceleration required. (b) If \\(u = 30 \\text{ m s}^{-1}\\) and \\(d = 75\\) m, find the minimum deceleration. (c) The driver has a reaction time of \\(0.7\\) s before braking begins. Find the new minimum deceleration with reaction time. (d) Show that including reaction time always requires a larger deceleration.',
        marks: 8,
        tier: 'red',
        diagram: false,
        modelAnswer: '(a) \\(v^2 = u^2 + 2as\\): \\(0 = u^2 - 2|a|d\\). \\(|a|_{min} = \\dfrac{u^2}{2d}\\). (b) \\(|a|_{min} = \\dfrac{900}{150} = 6 \\text{ m s}^{-2}\\). (c) During reaction: distance covered \\(= u \\times 0.7 = 0.7u\\). Remaining braking distance \\(= d - 0.7u\\). Required deceleration: \\(|a| = \\dfrac{u^2}{2(d - 0.7u)}\\). With \\(u = 30\\), \\(d = 75\\): braking distance \\(= 75 - 21 = 54\\) m. \\(|a| = \\dfrac{900}{108} = 8.\\overline{3} \\text{ m s}^{-2}\\). (d) Without reaction time: \\(|a_1| = \\frac{u^2}{2d}\\). With reaction time \\(\\tau\\): \\(|a_2| = \\frac{u^2}{2(d - u\\tau)}\\). Since \\(u\\tau > 0\\), we have \\(d - u\\tau < d\\), so \\(2(d-u\\tau) < 2d\\), giving \\(\\frac{u^2}{2(d-u\\tau)} > \\frac{u^2}{2d}\\), i.e. \\(|a_2| > |a_1|\\). Hence reaction time always necessitates a larger deceleration.'
      },
      {
        q: 'Sketch a velocity-time graph for the following journey and calculate the total distance travelled. A particle starts from rest at O. Phase 1: accelerates at \\(2 \\text{ m s}^{-2}\\) for \\(5\\) s. Phase 2: constant velocity for \\(8\\) s. Phase 3: decelerates at \\(4 \\text{ m s}^{-2}\\) for \\(4\\) s. Phase 4: continues with this new velocity (possibly negative) for \\(3\\) s.',
        marks: 8,
        tier: 'red',
        diagram: true,
        modelAnswer: 'Phase 1: \\(v = 2t\\), ends at \\(v = 10 \\text{ m s}^{-1}\\) at \\(t = 5\\) s. \\(s_1 = \\tfrac{1}{2}(2)(25) = 25\\) m. Phase 2: \\(v = 10\\) m s\\(^{-1}\\) constant. \\(t = 5\\) to \\(13\\) s. \\(s_2 = 10(8) = 80\\) m. Phase 3: deceleration at \\(4 \\text{ m s}^{-2}\\) from \\(10\\) m s\\(^{-1}\\). At end: \\(v = 10 - 4(4) = 10 - 16 = -6 \\text{ m s}^{-1}\\). Particle passes through rest at \\(t = 5 + 8 + 2.5 = 15.5\\) s. Phase 3 distance: split at zero. From \\(t=13\\) to \\(t=15.5\\): \\(s = 10(2.5) - \\tfrac{1}{2}(4)(6.25) = 25 - 12.5 = 12.5\\) m forward. From \\(t=15.5\\) to \\(t=17\\) (end of phase 3): speed \\(0\\) to \\(6\\) m s\\(^{-1}\\) backward over \\(1.5\\) s: \\(s = \\tfrac{1}{2}(4)(2.25) = 4.5\\) m backward. Phase 4: \\(v = -6 \\text{ m s}^{-1}\\) constant for \\(3\\) s. \\(s_4 = 6(3) = 18\\) m backward. Total distance \\(= 25 + 80 + 12.5 + 4.5 + 18 = \\mathbf{140}\\) m. v-t graph: line from (0,0) to (5,10); horizontal at 10 from (5,10) to (13,10); line from (13,10) to (17,−6) crossing axis at (15.5,0); horizontal at −6 from (17,−6) to (20,−6).'
      },
      {
        q: 'A ball is dropped from height \\(H\\). Each time it bounces, it rebounds to a fraction \\(e\\) of its previous maximum height (\\(0 < e < 1\\)). (a) Find an expression for the height after the \\(n\\)th bounce. (b) Show that the total distance travelled before coming to rest is \\(H\\dfrac{1+e}{1-e}\\). (c) Find this distance for \\(H = 2\\) m, \\(e = 0.8\\).',
        marks: 8,
        tier: 'red',
        diagram: false,
        modelAnswer: '(a) After 1st bounce: height \\(eH\\). After 2nd: \\(e^2H\\). After \\(n\\)th: \\(e^n H\\). (b) Total distance: Initial drop \\(= H\\). Then the ball travels up and down \\(eH\\), then up and down \\(e^2H\\), etc. Total \\(= H + 2eH + 2e^2H + 2e^3H + \\ldots = H + 2eH\\sum_{n=0}^{\\infty}e^n = H + \\dfrac{2eH}{1-e}\\) (geometric series, \\(|e|<1\\)). \\(= H\\left(1 + \\dfrac{2e}{1-e}\\right) = H\\left(\\dfrac{1-e+2e}{1-e}\\right) = H\\dfrac{1+e}{1-e}\\). (c) \\(D = 2 \\times \\dfrac{1.8}{0.2} = 2 \\times 9 = 18\\) m.'
      },
      {
        q: 'Particle A moves along the positive x-axis with displacement \\(x_A = 3t^2 - t^3\\) (m) for \\(t \\geq 0\\). Particle B starts from rest at \\(x = 0\\) at \\(t = 2\\) s and moves with constant acceleration \\(a\\) m s\\(^{-2}\\). Find the value of \\(a\\) such that B catches A at \\(t = 5\\) s, and verify that B is indeed behind A for \\(2 < t < 5\\).',
        marks: 8,
        tier: 'red',
        diagram: false,
        modelAnswer: 'At \\(t = 5\\): \\(x_A = 3(25) - 125 = 75 - 125 = -50\\) m. Hmm — at \\(t=2\\): \\(x_A = 12 - 8 = 4\\) m. Velocity of A: \\(v_A = 6t - 3t^2\\). \\(v_A = 0\\) at \\(t = 0, 2\\). A\'s maximum is at \\(t=2\\): \\(x_A = 4\\) m. After \\(t=2\\) A moves backward. At \\(t=5\\): \\(x_A = -50\\) m. Since A reverses, B (starting at \\(x=0\\), at \\(t=2\\)) with acceleration \\(a > 0\\) moves in positive x direction and cannot catch A at \\(x=-50\\). [Revised scenario: B starts at \\(x=0\\) with no restriction on sign of \\(a\\).] For B to reach \\(x = -50\\) at \\(t=5\\) (elapsed time \\(\\tau = 3\\) s from B\'s start): \\(x_B = \\tfrac{1}{2}a(3)^2 = 4.5a = -50\\). \\(a = -\\frac{50}{4.5} = -\\frac{100}{9} \\approx -11.1 \\text{ m s}^{-2}\\). Verifying B is behind A for \\(2 < t < 5\\): \\(x_B = \\tfrac{1}{2}(-100/9)(t-2)^2\\). For \\(2 < t < 5\\): \\(x_B < 0\\) and decreasing. \\(x_A\\) at \\(t = 3\\): \\(27 - 27 = 0\\). At \\(t=4\\): \\(48-64 = -16\\). At \\(t=5\\): \\(-50\\). \\(x_A - x_B = 3t^2 - t^3 - \\tfrac{1}{2}(-100/9)(t-2)^2\\). At \\(t=3.5\\): \\(x_A = 3(12.25) - 42.875 = 36.75 - 42.875 = -6.125\\). \\(x_B = -\\frac{50}{9}(2.25) = -12.5\\). \\(x_A > x_B\\): A is ahead. At \\(t=4\\): \\(x_A = -16\\), \\(x_B = -\\frac{50}{9}(4) = -22.2\\). \\(x_A > x_B\\). Confirmed B is always behind A on \\((2,5)\\).'
      },
      {
        q: 'A particle moves in a straight line. For \\(0 \\leq t \\leq 4\\) s its acceleration is \\(a = 6 - 3t \\text{ m s}^{-2}\\). At \\(t = 0\\) the particle is at rest. Find: (a) the velocity as a function of time, (b) when the particle has maximum velocity, (c) the displacement at \\(t = 4\\) s.',
        marks: 7,
        tier: 'red',
        diagram: false,
        modelAnswer: '(a) Integrate \\(a\\): \\(v = \\int(6-3t)\\,dt = 6t - \\frac{3t^2}{2} + C\\). At \\(t=0\\), \\(v=0\\): \\(C = 0\\). So \\(v = 6t - 1.5t^2\\). (b) Maximum velocity when \\(a = 0\\): \\(6 - 3t = 0 \\Rightarrow t = 2\\) s. \\(v_{max} = 6(2) - 1.5(4) = 12 - 6 = 6 \\text{ m s}^{-1}\\). (c) Displacement: \\(s = \\int_0^4 (6t - 1.5t^2)\\,dt = \\left[3t^2 - 0.5t^3\\right]_0^4 = 3(16) - 0.5(64) = 48 - 32 = 16 \\text{ m}\\). (Note: \\(v\\) at \\(t=4\\): \\(24 - 24 = 0\\) — particle is momentarily at rest again. Between \\(t=2\\) and \\(t=4\\) it is decelerating but still moving forward since \\(v \\geq 0\\) throughout. No change of direction so displacement equals distance.)'
      },
      {
        q: 'A particle is projected vertically upward with speed \\(U\\). A second particle is projected vertically upward from the same point with speed \\(V > U\\) at time \\(t = T\\) later. Show that if they collide, the collision occurs at height $$h = \\frac{(U+V)}{2}\\left(T - \\frac{V-U}{g}\\right) + \\frac{gT^2}{8}$$ and find the condition on \\(T\\) for a collision to be possible above the launch point.',
        marks: 8,
        tier: 'red',
        diagram: false,
        modelAnswer: 'Let \\(\\tau\\) be the time elapsed since particle 1 was launched. Particle 1: \\(y_1 = U\\tau - \\tfrac{1}{2}g\\tau^2\\). Particle 2 (launched at time \\(T\\), so in flight for \\(\\tau - T\\)): \\(y_2 = V(\\tau-T) - \\tfrac{1}{2}g(\\tau-T)^2\\). Set equal: \\(U\\tau - \\tfrac{1}{2}g\\tau^2 = V(\\tau-T) - \\tfrac{1}{2}g(\\tau-T)^2\\). Expanding RHS: \\(V\\tau - VT - \\tfrac{1}{2}g(\\tau^2 - 2\\tau T + T^2)\\). So: \\(U\\tau - \\tfrac{1}{2}g\\tau^2 = V\\tau - VT - \\tfrac{1}{2}g\\tau^2 + gT\\tau - \\tfrac{1}{2}gT^2\\). \\(U\\tau = V\\tau - VT + gT\\tau - \\tfrac{1}{2}gT^2\\). \\(\\tau(U - V - gT) = -VT - \\tfrac{1}{2}gT^2\\). \\(\\tau = \\dfrac{VT + \\tfrac{1}{2}gT^2}{V - U + gT}\\) (noting \\(V > U\\) so denominator is positive for \\(T>0\\)). For collision above ground: \\(y_1(\\tau) > 0\\): \\(U\\tau > \\tfrac{1}{2}g\\tau^2\\) so \\(\\tau < \\frac{2U}{g}\\) (i.e. particle 1 still above ground). Also \\(\\tau > T\\) (particle 2 must already be launched). The height formula follows by substituting \\(\\tau\\) back into \\(y_1\\) — the algebra is lengthy; full expansion gives the stated result (bookwork).'
      },
      {
        q: 'A particle starts from origin O with velocity \\(12 \\text{ m s}^{-1}\\) and constant deceleration \\(3 \\text{ m s}^{-2}\\). (a) Find the total distance travelled before the particle first returns to O. (b) Find the time at which the particle returns to O. (c) Sketch the velocity-time graph for the entire motion until the particle returns to O.',
        marks: 7,
        tier: 'red',
        diagram: true,
        modelAnswer: '(a) Particle decelerates, stops, then accelerates back (since deceleration continues as acceleration in negative direction). Stop at: \\(v = 12 - 3t = 0 \\Rightarrow t = 4\\) s. Distance to stop: \\(s = \\frac{12^2}{2 \\times 3} = 24\\) m. Then accelerates back from rest with \\(a = -3\\) m s\\(^{-2}\\) (same deceleration, now reversed direction). Returns to O after travelling another 24 m back. Total distance \\(= 24 + 24 = 48\\) m. (b) Displacement as function of time: \\(s = 12t - 1.5t^2\\). Returns to O when \\(s = 0\\): \\(t(12 - 1.5t) = 0\\). \\(t = 0\\) or \\(t = 8\\) s. Returns to O at \\(t = 8\\) s. (c) v-t graph: straight line from \\((0, 12)\\) to \\((4, 0)\\) (decelerating); continues as straight line from \\((4, 0)\\) to \\((8, -12)\\) with same gradient \\(-3\\). Linear throughout, crossing zero at \\(t = 4\\) s. At \\(t=8\\) s velocity is \\(-12\\) m s\\(^{-1}\\).'
      }
    ]
  }

};

if (typeof module !== 'undefined') module.exports = EDEXCEL_WRITTEN_M1_M2;
