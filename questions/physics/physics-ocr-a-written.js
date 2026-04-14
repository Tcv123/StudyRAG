/*
 * OCR A-Level Physics A (H556) — Written / Short-Answer Diagnostic Question Bank
 * 10 questions per topic: 4 green (2-3 marks) + 4 amber (3-4 marks) + 2 red (6-8 marks)
 * M1 has 10 questions following the same distribution.
 * tier: 'green' (state/define 2-3 marks), 'amber' (explain/describe 3-4 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const PHYSICS_OCR_A_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── M1 */
  'M1': {
    name: 'Practical Skills in Physics',
    green: [
      {
        q: 'State what is meant by a systematic error and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `• A systematic error is a consistent error in the same direction that affects all readings equally (1)\n• Example: a zero error on a balance / a ruler with a worn end / an uncalibrated thermometer (1)`
      },
      {
        q: 'State the difference between accuracy and precision.',
        marks: 2, tier: 'green',
        modelAnswer: `• Accuracy refers to how close a measured value is to the true value (1)\n• Precision refers to how close repeated measurements are to each other / the spread of results (1)`
      },
      {
        q: 'State what is meant by a control variable and explain why control variables are important.',
        marks: 2, tier: 'green',
        modelAnswer: `• A control variable is a quantity that is kept constant during an experiment (1)\n• They are important to ensure the test is fair — so that any change in the dependent variable can be attributed to the independent variable alone (1)`
      },
      {
        q: 'State what is meant by the resolution of a measuring instrument. Give an example.',
        marks: 3, tier: 'green',
        modelAnswer: `• Resolution is the smallest change in quantity that an instrument can detect / the smallest scale division (1)\n• Example: a ruler with mm divisions has a resolution of 1 mm (1)\n• A micrometer has a resolution of 0.01 mm (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how to determine the uncertainty in the gradient of a straight-line graph.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Draw the line of best fit through the data points (1)\n• Draw the steepest and shallowest lines that still pass through the error bars of the data points (1)\n• The uncertainty in the gradient is (gradient of steepest line − gradient of shallowest line) / 2 (1)`
      },
      {
        q: 'A student measures the period of a pendulum as T = 1.42 ± 0.03 s. They need to calculate T². Explain how to find the percentage uncertainty in T².',
        marks: 3, tier: 'amber',
        modelAnswer: `• The percentage uncertainty in T is (0.03 / 1.42) × 100 = 2.1% (1)\n• When a quantity is raised to a power, the percentage uncertainty is multiplied by that power (1)\n• Percentage uncertainty in T² = 2 × 2.1% = 4.2% (1)`
      },
      {
        q: 'Describe how you would plan an experiment to determine the resistivity of a wire. Include the equipment needed and the measurements to be taken.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Measure the diameter of the wire at several points along its length using a micrometer, then calculate the cross-sectional area A = π(d/2)² (1)\n• Set up a circuit with the wire connected to a power supply, ammeter (in series) and voltmeter (in parallel across the wire) (1)\n• Vary the length of wire in the circuit and measure V and I for each length to calculate R = V/I (1)\n• Plot R against L — the gradient equals ρ/A, so resistivity ρ = gradient × A (1)`
      },
      {
        q: 'Explain why plotting a graph of ln y against ln x can be useful for determining the relationship y = kxⁿ.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Taking natural logs: ln y = ln k + n ln x (1)\n• This is in the form Y = c + mX where Y = ln y, X = ln x (1)\n• Plotting ln y against ln x gives a straight line with gradient n (the power) (1)\n• The y-intercept equals ln k, from which k can be determined (1)`
      },
    ],
    red: [
      {
        q: 'A student measures g using a free-fall experiment. Their result is 9.65 ± 0.20 m s⁻². The accepted value is 9.81 m s⁻². Evaluate the accuracy and precision of this experiment and suggest improvements.',
        marks: 6, tier: 'red',
        modelAnswer: `• The accepted value 9.81 lies within the range 9.45–9.85, so the result is consistent with the accepted value within the stated uncertainty (1)\n• However, the result is 1.6% below the accepted value, suggesting a possible systematic error (1)\n• The uncertainty of ±0.20 (about 2%) indicates moderate precision — this could be improved (1)\n• Possible systematic error: reaction time in starting/stopping a timer — use electronic timing gates or light gates to eliminate this (1)\n• To improve precision: use a larger drop height to increase the time measured, reducing the percentage uncertainty in time (1)\n• Take multiple repeat readings and calculate a mean to reduce the effect of random errors (1)`
      },
      {
        q: 'Discuss the importance of uncertainty analysis in physics experiments. Explain how absolute and percentage uncertainties are combined for addition and multiplication, and why the final result should not be quoted to more significant figures than the least precise measurement.',
        marks: 8, tier: 'red',
        modelAnswer: `• Uncertainty analysis allows us to assess the reliability and validity of experimental results (1)\n• When adding or subtracting quantities, absolute uncertainties are added (1)\n• Example: if L₁ = 20.0 ± 0.1 cm and L₂ = 15.0 ± 0.1 cm, then L₁ − L₂ = 5.0 ± 0.2 cm (1)\n• When multiplying or dividing, percentage uncertainties are added (1)\n• Example: if speed = distance/time and %Δd = 2% and %Δt = 3%, then %Δv = 5% (1)\n• When raising to a power n, the percentage uncertainty is multiplied by n (1)\n• The final answer should not have more significant figures than the least precise measurement, as additional figures imply a false level of precision (1)\n• Comparing the total percentage uncertainty with the percentage difference from the accepted value determines whether the result is consistent with theory (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── M2 */
  'M2': {
    name: 'Foundations of Physics',
    green: [
      {
        q: 'State the five SI base quantities and their units.',
        marks: 3, tier: 'green',
        modelAnswer: `• Mass — kilogram (kg) (1)\n• Length — metre (m); Time — second (s) (1)\n• Electric current — ampere (A); Temperature — kelvin (K); Amount of substance — mole (mol); Luminous intensity — candela (cd) (any additional two for 1 mark) (1)`
      },
      {
        q: 'State the difference between a scalar and a vector quantity. Give two examples of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• A scalar has magnitude only; a vector has both magnitude and direction (1)\n• Scalars: speed, mass, energy, temperature (any two) (1)\n• Vectors: velocity, force, displacement, acceleration (any two) (1)`
      },
      {
        q: 'Define the term "derived unit" and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `• A derived unit is a unit that is made up of combinations of SI base units (1)\n• Example: the newton (N) = kg m s⁻² / the joule (J) = kg m² s⁻² / the pascal (Pa) = kg m⁻¹ s⁻² (1)`
      },
      {
        q: 'State what is meant by the homogeneity of a physical equation.',
        marks: 2, tier: 'green',
        modelAnswer: `• An equation is homogeneous if every term on both sides of the equation has the same units / dimensions (1)\n• If an equation is not homogeneous, it must be incorrect (but a homogeneous equation is not necessarily correct) (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how to check the homogeneity of the equation v² = u² + 2as, where v and u are velocities, a is acceleration and s is displacement.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Units of v² = (m s⁻¹)² = m² s⁻² (1)\n• Units of u² = m² s⁻² (same as v²) (1)\n• Units of 2as = (m s⁻²)(m) = m² s⁻² — all terms have the same units, so the equation is homogeneous (1)`
      },
      {
        q: 'Describe how to resolve a single force F acting at angle θ to the horizontal into horizontal and vertical components. Include a diagram description.',
        marks: 3, tier: 'amber',
        modelAnswer: `• The horizontal component is Fx = F cos θ (1)\n• The vertical component is Fy = F sin θ (1)\n• These components form a right-angled triangle with F as the hypotenuse, using trigonometry to decompose the vector (1)`,
        diagram: true
      },
      {
        q: 'Explain why checking the homogeneity of an equation cannot prove that the equation is correct.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Homogeneity checks only confirm that the units/dimensions are consistent on both sides (1)\n• Dimensionless constants (e.g. 2, π, ½) cannot be verified by dimensional analysis (1)\n• The equation could be missing or have incorrect dimensionless factors and still appear homogeneous (1)\n• Example: both E = mv² and E = ½mv² are homogeneous, but only the second is correct (1)`
      },
      {
        q: 'Describe the process of estimating a physical quantity, using the example of estimating the number of breaths a person takes in a lifetime.',
        marks: 4, tier: 'amber',
        modelAnswer: `• State reasonable assumptions: breathing rate ~15 breaths per minute, lifetime ~80 years (1)\n• Convert to consistent units: 80 years × 365 days × 24 hours × 60 minutes ≈ 4.2 × 10⁷ minutes (1)\n• Calculate: 15 × 4.2 × 10⁷ ≈ 6 × 10⁸ breaths (1)\n• State the order of magnitude: approximately 10⁹ breaths, and note that estimates should be rounded to 1 significant figure or given as an order of magnitude (1)`
      },
    ],
    red: [
      {
        q: 'A student claims that the equation for the period of a simple pendulum is T = 2π√(g/l). By checking dimensions, evaluate whether this equation could be correct. The correct equation is T = 2π√(l/g).',
        marks: 6, tier: 'red',
        modelAnswer: `• The left-hand side has units of time: [T] = s (1)\n• For the student\'s equation: units of g/l = (m s⁻²) / m = s⁻² (1)\n• Therefore √(g/l) has units of s⁻¹, giving the right-hand side units of s⁻¹ (since 2π is dimensionless) (1)\n• The units do not match (s ≠ s⁻¹), so the student\'s equation is not homogeneous and must be incorrect (1)\n• For the correct equation: units of l/g = m / (m s⁻²) = s² (1)\n• Therefore √(l/g) has units of s, making T = 2π√(l/g) homogeneous and potentially correct (1)`
      },
      {
        q: 'Discuss the limitations of dimensional analysis in physics. Include examples where it is useful and where it fails.',
        marks: 8, tier: 'red',
        modelAnswer: `• Dimensional analysis can verify the homogeneity of equations, confirming that units are consistent (1)\n• It can be used to derive possible forms of equations when the relevant variables are known (1)\n• Example of usefulness: deriving that the period of a pendulum depends on √(l/g) rather than √(g/l) (1)\n• Limitation 1: it cannot determine dimensionless constants — e.g. it cannot distinguish E = mv² from E = ½mv² (1)\n• Limitation 2: it cannot detect if a term is missing that has the same dimensions as other terms (1)\n• Limitation 3: it cannot verify relationships involving logarithmic, exponential, or trigonometric functions, as these require dimensionless arguments (1)\n• Limitation 4: if a quantity depends on more than a few variables, there may be multiple dimensionally consistent combinations (1)\n• Overall: dimensional analysis is a useful checking tool and can guide derivations, but it is not a substitute for theoretical derivation from physical laws (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── M3 */
  'M3': {
    name: 'Forces and Motion',
    green: [
      {
        q: 'State Newton\'s three laws of motion.',
        marks: 3, tier: 'green',
        modelAnswer: `• First law: An object remains at rest or moves with constant velocity unless acted on by a resultant force (1)\n• Second law: The resultant force on an object is equal to the rate of change of its momentum, F = Δp/Δt (or F = ma for constant mass) (1)\n• Third law: When body A exerts a force on body B, body B exerts an equal and opposite force on body A — the forces are the same type and act on different objects (1)`
      },
      {
        q: 'State the principle of conservation of momentum.',
        marks: 2, tier: 'green',
        modelAnswer: `• In a closed system where no external forces act (1)\n• the total momentum before an event equals the total momentum after the event (1)`
      },
      {
        q: 'Define impulse and state its unit.',
        marks: 2, tier: 'green',
        modelAnswer: `• Impulse is the product of force and the time for which the force acts: impulse = FΔt (1)\n• Impulse equals the change in momentum (Δp) and has units of N s (or equivalently kg m s⁻¹) (1)`
      },
      {
        q: 'State the SUVAT equations of motion for constant acceleration.',
        marks: 3, tier: 'green',
        modelAnswer: `• v = u + at (1)\n• s = ut + ½at² (1)\n• v² = u² + 2as; and s = ½(u + v)t (1)`
      },
    ],
    amber: [
      {
        q: 'Explain why a projectile follows a parabolic path when air resistance is negligible.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The horizontal component of velocity remains constant because there is no horizontal force (1)\n• The vertical component of velocity increases at a constant rate (g = 9.81 m s⁻²) due to gravity (1)\n• The horizontal and vertical motions are independent of each other (1)\n• The combination of constant horizontal velocity and uniformly accelerating vertical velocity produces a parabolic trajectory (1)`
      },
      {
        q: 'Describe how a velocity-time graph can be used to determine both the acceleration and the displacement of an object.',
        marks: 3, tier: 'amber',
        modelAnswer: `• The gradient of the velocity-time graph at any point gives the acceleration at that instant (1)\n• The area under the velocity-time graph between two times gives the displacement over that time interval (1)\n• For non-uniform acceleration, the instantaneous acceleration is found from the gradient of the tangent to the curve at that point (1)`
      },
      {
        q: 'Explain what is meant by terminal velocity and describe how the forces on a falling object change as it accelerates towards terminal velocity.',
        marks: 4, tier: 'amber',
        modelAnswer: `• When an object first begins to fall, the only force is weight (mg) downward and the drag force is zero/small, so it accelerates (1)\n• As the object speeds up, the drag force increases (drag depends on velocity) (1)\n• The resultant force (weight − drag) decreases, so acceleration decreases (1)\n• Eventually drag equals weight, the resultant force is zero, and the object moves at constant velocity — this is terminal velocity (1)`
      },
      {
        q: 'Describe the energy transfers that occur when a ball is dropped from a height and bounces, reaching a lower height each time.',
        marks: 4, tier: 'amber',
        modelAnswer: `• At the top, the ball has maximum gravitational potential energy (GPE) and zero kinetic energy (KE) (1)\n• As it falls, GPE is converted to KE (1)\n• On impact with the ground, some KE is transferred to thermal energy and sound — the collision is inelastic (1)\n• The ball rebounds with less KE, so it reaches a lower maximum height (less GPE) — energy is conserved overall but useful mechanical energy decreases each bounce (1)`
      },
    ],
    red: [
      {
        q: 'A car of mass 1200 kg travelling at 25 m s⁻¹ collides with a stationary car of mass 800 kg. After the collision they move together. Calculate the common velocity and determine whether the collision is elastic or inelastic. Justify your answer with calculations.',
        marks: 6, tier: 'red',
        modelAnswer: `• Using conservation of momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v (1)\n• (1200 × 25) + (800 × 0) = (1200 + 800)v → 30000 = 2000v → v = 15 m s⁻¹ (1)\n• KE before = ½ × 1200 × 25² = 375 000 J (1)\n• KE after = ½ × 2000 × 15² = 225 000 J (1)\n• KE after < KE before, so kinetic energy is not conserved — the collision is inelastic (1)\n• 150 000 J of kinetic energy has been transferred to other forms (heat, sound, deformation) (1)`
      },
      {
        q: 'Discuss the factors affecting the range of a projectile launched from ground level at angle θ to the horizontal with initial speed v. Consider both the theoretical case (no air resistance) and the practical case (with air resistance).',
        marks: 8, tier: 'red',
        modelAnswer: `• Without air resistance, the range R = v² sin 2θ / g, so range depends on initial speed and launch angle (1)\n• Maximum range occurs at θ = 45° (since sin 2θ is maximised at sin 90° = 1) (1)\n• Range increases with v² — doubling the launch speed quadruples the range (1)\n• Range is inversely proportional to g — projectiles travel further where gravity is weaker (1)\n• With air resistance, the horizontal velocity decreases during flight, reducing the range (1)\n• The drag force depends on velocity, cross-sectional area, and air density (1)\n• The optimal angle for maximum range becomes less than 45° because the projectile spends less time at high altitude where drag reduces horizontal speed (1)\n• The trajectory is no longer symmetrical — the descending path is steeper than the ascending path due to accumulated velocity loss (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── M4 */
  'M4': {
    name: 'Electrons, Waves and Photons',
    green: [
      {
        q: 'State Kirchhoff\'s first and second laws.',
        marks: 2, tier: 'green',
        modelAnswer: `• First law (junction rule): The sum of currents entering a junction equals the sum of currents leaving it — this is based on conservation of charge (1)\n• Second law (loop rule): The sum of the EMFs around any closed loop equals the sum of the potential differences — this is based on conservation of energy (1)`
      },
      {
        q: 'Define resistivity and state its unit.',
        marks: 2, tier: 'green',
        modelAnswer: `• Resistivity (ρ) is a property of the material that quantifies how strongly it opposes current flow; it is defined by ρ = RA/L where R is resistance, A is cross-sectional area, and L is length (1)\n• The unit is ohm-metre (Ω m) (1)`
      },
      {
        q: 'State the conditions required for the photoelectric effect to occur.',
        marks: 3, tier: 'green',
        modelAnswer: `• Electromagnetic radiation must be incident on a metal surface (1)\n• The frequency of the radiation must be above the threshold frequency f₀ of the metal (1)\n• The energy of each photon (E = hf) must be greater than or equal to the work function (φ) of the metal (1)`
      },
      {
        q: 'State the difference between a progressive wave and a stationary wave.',
        marks: 2, tier: 'green',
        modelAnswer: `• A progressive wave transfers energy from one place to another; all points have the same amplitude but different phases (1)\n• A stationary wave does not transfer energy; it has nodes (zero amplitude) and antinodes (maximum amplitude), and all points between consecutive nodes oscillate in phase (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how a potential divider circuit works and describe one application.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A potential divider consists of two resistors in series connected across a supply voltage (1)\n• The output voltage is taken across one of the resistors: V₂ = V × R₂/(R₁ + R₂) (1)\n• Changing either resistance changes the fraction of the supply voltage across each component (1)\n• Application: using a thermistor or LDR as one resistor creates a voltage output that varies with temperature or light intensity — used in sensor circuits (1)`
      },
      {
        q: 'Explain the concept of wave-particle duality, using the photoelectric effect and electron diffraction as evidence.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The photoelectric effect shows that light behaves as particles (photons): electrons are emitted only when photon energy hf ≥ φ, and increasing intensity increases the number of electrons, not their energy (1)\n• This cannot be explained by the wave model, which predicts that any frequency should cause emission if the intensity is high enough (1)\n• Electron diffraction shows that particles (electrons) can behave as waves: when electrons pass through a thin crystal or graphite, they produce a diffraction pattern, demonstrating wave-like behaviour (1)\n• The de Broglie wavelength λ = h/p links the wave and particle properties — all matter has an associated wavelength (1)`
      },
      {
        q: 'Describe the I-V characteristics of a filament lamp, a diode, and an ohmic conductor. Explain the shape of each graph.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Ohmic conductor: a straight line through the origin — current is directly proportional to PD, so resistance is constant (at constant temperature) (1)\n• Filament lamp: a curve through the origin that becomes less steep at higher V — as current increases, the filament heats up, increasing resistance (1)\n• Diode: virtually zero current in reverse bias; in forward bias, current increases rapidly once the threshold PD (~0.6 V for silicon) is exceeded (1)\n• The non-linear shapes of the lamp and diode show they are non-ohmic — their resistance depends on the PD/current/temperature (1)`,
        diagram: true
      },
      {
        q: 'Explain how a diffraction grating produces an interference pattern and derive the grating equation d sin θ = nλ.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Coherent light passes through many equally spaced slits in the grating (1)\n• Each slit acts as a source of secondary wavelets that interfere with each other (1)\n• Constructive interference (bright maxima) occurs when the path difference between adjacent slits is a whole number of wavelengths: path difference = d sin θ = nλ (1)\n• As there are many slits, the maxima are very sharp and bright, with wide dark regions between them — this makes gratings useful for precise wavelength measurement (1)`
      },
    ],
    red: [
      {
        q: 'The work function of sodium is 2.3 eV. Light of wavelength 400 nm is incident on a sodium surface. Calculate the maximum kinetic energy of the emitted photoelectrons and explain why increasing the intensity of this light does not increase the maximum kinetic energy.',
        marks: 6, tier: 'red',
        modelAnswer: `• Energy of a photon: E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (400 × 10⁻⁹) = 4.97 × 10⁻¹⁹ J = 3.1 eV (1)\n• Maximum KE = hf − φ = 3.1 − 2.3 = 0.8 eV = 1.28 × 10⁻¹⁹ J (1)\n• Each photon interacts with a single electron in a one-to-one interaction (1)\n• The maximum KE depends only on the energy of each individual photon (hf) minus the work function (1)\n• Increasing intensity increases the number of photons per second, not the energy per photon (1)\n• Therefore more electrons are emitted (higher photocurrent), but each electron still receives the same maximum energy — maximum KE is unchanged (1)`
      },
      {
        q: 'A battery of EMF 12 V and internal resistance 0.8 Ω is connected to an external resistance R. Discuss how the terminal PD, current, and power dissipated in R vary as R is changed from very small to very large values. Determine the condition for maximum power transfer to R.',
        marks: 8, tier: 'red',
        modelAnswer: `• The current is I = EMF / (R + r) = 12 / (R + 0.8) (1)\n• When R is very small: I is large (approaching EMF/r = 15 A), most voltage is dropped across internal resistance, terminal PD is small (1)\n• When R is very large: I is very small (approaching zero), terminal PD approaches EMF (12 V), but very little power is delivered to R (1)\n• Power in R: P = I²R = EMF² × R / (R + r)² (1)\n• At both extremes (R → 0 and R → ∞), power in R approaches zero (1)\n• Maximum power transfer occurs at an intermediate value of R (1)\n• Differentiating P with respect to R and setting dP/dR = 0 gives the condition R = r (1)\n• Therefore maximum power is delivered to R when R equals the internal resistance (0.8 Ω), giving P = EMF²/(4r) = 144/3.2 = 45 W (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── M5 */
  'M5': {
    name: 'Newtonian World and Astrophysics',
    green: [
      {
        q: 'State what is meant by internal energy of a substance.',
        marks: 2, tier: 'green',
        modelAnswer: `• Internal energy is the sum of the randomly distributed kinetic energies and potential energies of all the particles/molecules in a system (1)\n• Kinetic energy is related to temperature; potential energy is related to the intermolecular forces/bonds (1)`
      },
      {
        q: 'Define specific heat capacity and give its equation.',
        marks: 2, tier: 'green',
        modelAnswer: `• Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 K (or 1 °C) (1)\n• Equation: Q = mcΔθ where Q is energy, m is mass, c is specific heat capacity, and Δθ is temperature change (1)`
      },
      {
        q: 'State the conditions for simple harmonic motion.',
        marks: 2, tier: 'green',
        modelAnswer: `• The acceleration is directly proportional to the displacement from the equilibrium position (a ∝ x) (1)\n• The acceleration is always directed towards the equilibrium position (opposite direction to displacement): a = −ω²x (1)`
      },
      {
        q: 'State Newton\'s law of gravitation in words.',
        marks: 3, tier: 'green',
        modelAnswer: `• Every particle in the universe attracts every other particle (1)\n• With a force that is directly proportional to the product of their masses (1)\n• And inversely proportional to the square of the distance between their centres: F = GMm/r² (1)`
      },
    ],
    amber: [
      {
        q: 'Explain the difference between specific heat capacity and specific latent heat. Describe what happens to the internal energy during a change of state.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Specific heat capacity: energy per kg per kelvin to change temperature (Q = mcΔθ); the kinetic energy of particles increases (1)\n• Specific latent heat: energy per kg to change state at constant temperature (Q = mL) (1)\n• During a change of state, energy is used to break or form intermolecular bonds (1)\n• The potential energy component of internal energy changes, but kinetic energy (and hence temperature) remains constant (1)`
      },
      {
        q: 'Describe what happens to the energy of a system undergoing damped simple harmonic motion. Distinguish between light, heavy, and critical damping.',
        marks: 4, tier: 'amber',
        modelAnswer: `• In damped SHM, energy is dissipated to the surroundings (e.g. friction, air resistance), so the amplitude decreases over time (1)\n• Light damping: the amplitude decreases gradually over many oscillations; the system oscillates at approximately its natural frequency (1)\n• Heavy (over) damping: the system returns to equilibrium very slowly without oscillating — it takes a long time (1)\n• Critical damping: the system returns to equilibrium in the shortest possible time without oscillating — used in car suspension, door closers (1)`
      },
      {
        q: 'Explain why the gravitational potential is always negative and what this means physically.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Gravitational potential at a point is defined as the work done per unit mass in bringing a test mass from infinity to that point (1)\n• Since gravity is always attractive, the force does positive work on the mass as it moves from infinity to the point — energy is released (1)\n• By convention, the potential at infinity is zero, and since work must be done against gravity to move a mass from the point back to infinity, the potential at any real point is negative: V = −GM/r (1)`
      },
      {
        q: 'Describe how Wien\'s displacement law and the Stefan-Boltzmann law can be used together to determine the radius of a star.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Measure the star\'s spectrum to find the peak wavelength λₘₐₓ (1)\n• Use Wien\'s law: T = b/λₘₐₓ (where b = 2.9 × 10⁻³ m K) to determine the surface temperature (1)\n• Measure the star\'s luminosity L (from its apparent brightness and distance) (1)\n• Use the Stefan-Boltzmann law: L = 4πr²σT⁴, rearranging to find the radius r = √(L / 4πσT⁴) (1)`
      },
    ],
    red: [
      {
        q: 'Discuss how evidence from Hubble\'s law and the cosmic microwave background radiation supports the Big Bang theory of the origin of the universe.',
        marks: 6, tier: 'red',
        modelAnswer: `• Hubble\'s law states that the recessional velocity of a galaxy is proportional to its distance: v = H₀d (1)\n• This means all galaxies are moving away from us, and more distant galaxies move faster — the universe is expanding (1)\n• Extrapolating backward implies the universe was once concentrated at a single point — the Big Bang (1)\n• The cosmic microwave background (CMB) radiation is a nearly uniform background of microwave radiation (peak wavelength ~1 mm, temperature ~2.7 K) detected from all directions (1)\n• The CMB is interpreted as the remnant radiation from the hot, dense early universe, now cooled and redshifted by the expansion of space (1)\n• The CMB\'s near-uniformity with tiny fluctuations matches predictions of the Big Bang model, and no other model successfully explains both Hubble\'s law and the CMB together (1)`
      },
      {
        q: 'A satellite of mass m orbits a planet of mass M at radius r. Derive an expression for the orbital speed and period. Then discuss how Kepler\'s third law follows from Newton\'s law of gravitation.',
        marks: 8, tier: 'red',
        modelAnswer: `• The gravitational force provides the centripetal force: GMm/r² = mv²/r (1)\n• Simplifying: v² = GM/r, so orbital speed v = √(GM/r) (1)\n• The period T = 2πr/v = 2πr/√(GM/r) = 2π√(r³/GM) (1)\n• Squaring: T² = 4π²r³/GM (1)\n• This shows T² ∝ r³ for orbits around the same central mass M — this is Kepler\'s third law (1)\n• The constant of proportionality is 4π²/GM, which depends only on the central mass (1)\n• Newton\'s law of gravitation therefore provides a theoretical basis for Kepler\'s empirically observed law (1)\n• This derivation also allows us to determine the mass M of the central body if we know T and r of an orbiting satellite (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── M6 */
  'M6': {
    name: 'Particles and Medical Physics',
    green: [
      {
        q: 'State the equation for the energy stored in a capacitor. Give two alternative forms.',
        marks: 2, tier: 'green',
        modelAnswer: `• E = ½QV (1)\n• Also: E = ½CV² and E = ½Q²/C (obtained by substituting Q = CV) (1)`
      },
      {
        q: 'State Faraday\'s law and Lenz\'s law of electromagnetic induction.',
        marks: 3, tier: 'green',
        modelAnswer: `• Faraday\'s law: The magnitude of the induced EMF is equal to the rate of change of magnetic flux linkage (1)\n• EMF = −dΦ/dt (or EMF = −d(NΦ)/dt for a coil of N turns) (1)\n• Lenz\'s law: The direction of the induced EMF (and hence current) is such that it opposes the change in flux that produced it — this is the reason for the negative sign (1)`
      },
      {
        q: 'Define the decay constant λ and state its relationship with half-life.',
        marks: 2, tier: 'green',
        modelAnswer: `• The decay constant λ is the probability of a given nucleus decaying per unit time (1)\n• Relationship with half-life: λ = ln 2 / t½ (or equivalently t½ = ln 2 / λ) (1)`
      },
      {
        q: 'State the quark composition of a proton and a neutron.',
        marks: 2, tier: 'green',
        modelAnswer: `• Proton: up, up, down (uud) — charge = +2/3 + 2/3 − 1/3 = +1 (1)\n• Neutron: up, down, down (udd) — charge = +2/3 − 1/3 − 1/3 = 0 (1)`
      },
    ],
    amber: [
      {
        q: 'Explain the process of charging and discharging a capacitor through a resistor. Describe how the current and voltage change with time.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Charging: initially the current is maximum (I₀ = V/R) and the PD across the capacitor is zero (1)\n• As charge builds up on the plates, the PD across the capacitor increases and the current decreases exponentially: I = I₀e^(−t/RC) (1)\n• Discharging: the capacitor starts fully charged; the current starts at maximum and both current and voltage decrease exponentially (1)\n• The time constant τ = RC is the time for the charge/current/voltage to fall to 1/e (≈ 37%) of its initial value (1)`
      },
      {
        q: 'Explain the concept of binding energy per nucleon and how it accounts for the energy released in both fission and fusion.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Binding energy is the energy required to completely separate all the nucleons in a nucleus (1)\n• Binding energy per nucleon is the binding energy divided by the number of nucleons — it measures the stability of a nucleus (1)\n• In fission, a heavy nucleus (low BE per nucleon) splits into smaller nuclei with higher BE per nucleon — the increase in total binding energy is released as kinetic energy (1)\n• In fusion, light nuclei (low BE per nucleon) combine to form a heavier nucleus with higher BE per nucleon — again the increase in binding energy is released as energy (1)`
      },
      {
        q: 'Describe how X-rays are produced for medical imaging and explain how a CT scanner differs from a standard X-ray.',
        marks: 4, tier: 'amber',
        modelAnswer: `• X-rays are produced by accelerating electrons to high speeds using a high PD and firing them at a metal target (e.g. tungsten); the rapid deceleration produces bremsstrahlung radiation and characteristic X-rays (1)\n• In standard X-ray imaging, a beam passes through the body; denser tissues (bone) absorb more, creating a 2D shadow image on a detector (1)\n• A CT scanner takes multiple X-ray images from different angles around the body (1)\n• A computer combines these images to produce detailed cross-sectional (tomographic) images — allowing 3D reconstruction and better soft-tissue differentiation than standard X-rays (1)`
      },
      {
        q: 'Describe what happens during beta-minus decay at the quark level. State the conservation laws that apply.',
        marks: 4, tier: 'amber',
        modelAnswer: `• In beta-minus decay, a neutron transforms into a proton, emitting an electron and an electron antineutrino (1)\n• At the quark level, a down quark changes into an up quark: d → u + e⁻ + ν̄ₑ (1)\n• This is mediated by the weak nuclear force (specifically the W⁻ boson) (1)\n• Conservation laws obeyed: charge (0 → +1 −1 + 0), baryon number (1 → 1), lepton number (0 → 0 +1 −1), and energy-momentum (1)`
      },
    ],
    red: [
      {
        q: 'A 220 μF capacitor is charged to 9.0 V and then discharged through a 50 kΩ resistor. Calculate the time constant, the charge remaining after 22 s, and the energy dissipated in the resistor during this time.',
        marks: 6, tier: 'red',
        modelAnswer: `• Time constant τ = RC = 50 × 10³ × 220 × 10⁻⁶ = 11 s (1)\n• Initial charge Q₀ = CV = 220 × 10⁻⁶ × 9.0 = 1.98 × 10⁻³ C (1)\n• Charge after 22 s: Q = Q₀ e^(−t/RC) = 1.98 × 10⁻³ × e^(−22/11) = 1.98 × 10⁻³ × e⁻² = 2.68 × 10⁻⁴ C (1)\n• Initial energy = ½CV² = ½ × 220 × 10⁻⁶ × 81 = 8.91 × 10⁻³ J (1)\n• Energy remaining at 22 s = ½Q²/C = ½ × (2.68 × 10⁻⁴)² / (220 × 10⁻⁶) = 1.63 × 10⁻⁴ J (1)\n• Energy dissipated = 8.91 × 10⁻³ − 1.63 × 10⁻⁴ = 8.75 × 10⁻³ J ≈ 8.7 mJ (1)`
      },
      {
        q: 'Discuss the Standard Model of particle physics. Describe the classification of fundamental particles and explain the role of the four fundamental forces and their exchange particles.',
        marks: 8, tier: 'red',
        modelAnswer: `• The Standard Model classifies all known fundamental particles into two groups: quarks and leptons (both are fermions) and force-carrying bosons (1)\n• There are 6 quarks in 3 generations: up/down, charm/strange, top/bottom — each has a corresponding antiquark (1)\n• There are 6 leptons in 3 generations: electron/electron neutrino, muon/muon neutrino, tau/tau neutrino — each has a corresponding antilepton (1)\n• Quarks combine to form hadrons: baryons (3 quarks, e.g. proton uud) and mesons (quark-antiquark pair, e.g. pion) (1)\n• The strong nuclear force acts between quarks/hadrons, mediated by gluons — it holds the nucleus together (1)\n• The weak nuclear force is responsible for beta decay and acts on all fermions, mediated by W⁺, W⁻, and Z⁰ bosons (1)\n• The electromagnetic force acts between charged particles, mediated by virtual photons (1)\n• Gravity is the weakest force and acts between all particles with mass — the hypothetical exchange particle is the graviton (not yet detected, and not part of the Standard Model) (1)`
      },
    ],
  },

};
