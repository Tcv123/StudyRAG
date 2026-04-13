/*
 * AQA A-Level Physics (7408) — Written / Short-Answer Diagnostic Question Bank
 * 10 questions per topic: 4 green (2-3 marks) + 4 amber (3-4 marks) + 2 red (6-8 marks)
 * tier: 'green' (state/define 2-3 marks), 'amber' (explain/describe 3-4 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const PHYSICS_AQA_WRITTEN = {

  /* ─────────────────────────────────────────────────────────── 3.1 */
  '3.1': {
    name: 'Measurements and Their Errors',
    green: [
      {
        q: 'State the seven SI base quantities and their units.',
        marks: 3, tier: 'green',
        modelAnswer: `• Mass — kilogram (kg) (1)\n• Length — metre (m) (1)\n• Time — second (s) (1)\n• Temperature — kelvin (K)\n• Electric current — ampere (A)\n• Amount of substance — mole (mol)\n• Luminous intensity — candela (cd)\n(Any 3 pairs for 3 marks)`
      },
      {
        q: 'Define the terms "systematic error" and "random error".',
        marks: 2, tier: 'green',
        modelAnswer: `• Systematic error — a consistent error in the same direction every time a measurement is taken, e.g. a zero error on a balance (1)\n• Random error — unpredictable variation between measurements caused by uncontrollable factors, e.g. fluctuations in readings due to air currents (1)`
      },
      {
        q: 'State the difference between accuracy and precision.',
        marks: 2, tier: 'green',
        modelAnswer: `• Accuracy — how close a measurement is to the true value (1)\n• Precision — how close repeated measurements are to each other / the spread of the data (1)`
      },
      {
        q: 'State what is meant by the absolute uncertainty and the percentage uncertainty of a measurement.',
        marks: 2, tier: 'green',
        modelAnswer: `• Absolute uncertainty — the margin of error in a measurement, expressed in the same units as the measurement, e.g. ±0.5 mm (1)\n• Percentage uncertainty — the absolute uncertainty expressed as a percentage of the measured value: (absolute uncertainty / measured value) × 100% (1)`
      },
    ],
    amber: [
      {
        q: 'A student measures the diameter of a wire as 0.52 ± 0.01 mm. The wire has length 1.200 ± 0.001 m and resistance 4.6 ± 0.1 Ω. Calculate the resistivity and its percentage uncertainty.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Cross-sectional area A = π(d/2)² = π(0.52 × 10⁻³ / 2)² = 2.124 × 10⁻⁷ m² (1)\n• Resistivity ρ = RA/L = 4.6 × 2.124 × 10⁻⁷ / 1.200 = 8.14 × 10⁻⁷ Ω m (1)\n• Percentage uncertainty in d = 0.01/0.52 × 100 = 1.92%; since A ∝ d², uncertainty in A = 2 × 1.92 = 3.85% (1)\n• % uncertainty in L = 0.001/1.200 × 100 = 0.083%; % uncertainty in R = 0.1/4.6 × 100 = 2.17%; total % uncertainty in ρ = 3.85 + 0.083 + 2.17 ≈ 6.1% (1)`
      },
      {
        q: 'Describe how you would use a graph of T² against L to determine g from a simple pendulum experiment. Explain how uncertainties can be represented on the graph.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Measure the period T for several different lengths L by timing multiple oscillations and dividing (1)\n• Plot T² on the y-axis against L on the x-axis; since T² = 4π²L/g, the gradient = 4π²/g, so g = 4π²/gradient (1)\n• Add error bars to each data point using the calculated uncertainties in T² and L (1)\n• Draw a best-fit line and worst acceptable lines through the error bars; the uncertainty in the gradient is found from the difference between the best and worst gradients (1)`
      },
      {
        q: 'Explain why taking more repeat measurements and averaging reduces the effect of random errors but not systematic errors.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Random errors cause readings to scatter above and below the true value unpredictably (1)\n• Averaging many readings means the positive and negative deviations tend to cancel out, giving a value closer to the true value (1)\n• Systematic errors shift all readings in the same direction by the same amount, so averaging has no effect — the bias remains in every reading (1)`
      },
      {
        q: 'Describe how to determine the Young\'s modulus of a wire experimentally, including how to minimise uncertainties.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Measure the original length L with a metre rule, the diameter d with a micrometer (taking readings at several points and averaging to reduce random error) (1)\n• Apply known masses to extend the wire and measure the extension ΔL using a marker and ruler or a travelling microscope for greater precision (1)\n• Calculate stress = F/A where A = πd²/4, and strain = ΔL/L; Young\'s modulus = stress/strain (1)\n• Use a long, thin wire to give a measurable extension; plot stress against strain and take the gradient to reduce uncertainty from individual data points (1)`
      },
    ],
    red: [
      {
        q: 'A student measures the acceleration due to gravity using a free-fall method with an electromagnet and two light gates. Discuss the sources of uncertainty in this experiment and evaluate which is likely to be the most significant.',
        marks: 6, tier: 'red',
        modelAnswer: `• Timing uncertainty: the light gates measure time electronically to high precision, but there is a systematic delay between releasing the electromagnet and the ball beginning to fall (residual magnetism) (1)\n• Distance measurement: the distance between light gates is measured with a ruler; uncertainty ±1 mm, giving a percentage uncertainty that decreases with larger distances (1)\n• Air resistance: affects the ball during fall, causing the measured g to be slightly less than 9.81 m/s²; this is a systematic error (1)\n• Alignment: if the light gates are not perfectly vertical, the measured distance is greater than the actual fall distance, underestimating g (1)\n• The most significant source is likely the distance measurement for short distances, or the electromagnet delay for short fall times (1)\n• Using a longer fall distance reduces the percentage uncertainty in distance and makes air resistance effects relatively smaller (1)`
      },
      {
        q: 'Evaluate the importance of significant figures and estimation skills in physics. Use examples to support your answer.',
        marks: 6, tier: 'red',
        modelAnswer: `• Significant figures indicate the precision of a measurement — reporting more figures than the instrument can resolve implies false precision (1)\n• The final answer should be given to the same number of significant figures as the least precise input value (1)\n• Example: if a length is measured as 5.0 cm (2 s.f.) and a time as 1.234 s (4 s.f.), the calculated speed should be given to 2 s.f. (1)\n• Estimation (order of magnitude) is important for checking whether calculated answers are physically reasonable (1)\n• Example: if a student calculates the speed of a car as 3000 m/s, an order-of-magnitude check (cars travel ~10¹ m/s) reveals the answer is wrong (1)\n• Estimation also helps in planning experiments — e.g. estimating the expected extension of a wire helps select an appropriate measuring instrument with sufficient resolution (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.2 */
  '3.2': {
    name: 'Particles and Radiation',
    green: [
      {
        q: 'State the quark compositions of a proton and a neutron, and the charges of the up and down quarks.',
        marks: 3, tier: 'green',
        modelAnswer: `• Proton: uud (up, up, down) (1)\n• Neutron: udd (up, down, down) (1)\n• Up quark charge = +2/3 e; down quark charge = −1/3 e (1)`
      },
      {
        q: 'State what is meant by an antiparticle and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `• An antiparticle has the same mass as its corresponding particle but opposite charge (and opposite quantum numbers such as baryon number and lepton number) (1)\n• Example: the positron (e⁺) is the antiparticle of the electron (e⁻) — same mass (9.11 × 10⁻³¹ kg) but charge +e instead of −e (1)`
      },
      {
        q: 'State three conservation laws that apply to all particle interactions.',
        marks: 3, tier: 'green',
        modelAnswer: `• Conservation of charge — total charge before = total charge after (1)\n• Conservation of baryon number — total baryon number is conserved (1)\n• Conservation of lepton number — total lepton number is conserved (1)`
      },
      {
        q: 'Define the work function of a metal in the context of the photoelectric effect.',
        marks: 2, tier: 'green',
        modelAnswer: `• The work function (φ) is the minimum energy required to release an electron from the surface of a metal (1)\n• It is the minimum photon energy needed for photoelectric emission to occur, and is related to the threshold frequency by φ = hf₀ (1)`
      },
    ],
    amber: [
      {
        q: 'Explain why the photoelectric effect cannot be explained by the wave model of light.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The wave model predicts that any frequency of light should cause emission if the intensity is high enough, because energy would build up over time (1)\n• In practice, no electrons are emitted below the threshold frequency regardless of intensity — this can only be explained if light energy arrives in discrete packets (photons) of energy E = hf (1)\n• The wave model predicts a time delay before emission as energy accumulates; experimentally, emission is instantaneous (1)\n• Increasing intensity (more photons per second) increases the number of photoelectrons but not their maximum kinetic energy — consistent with each photon interacting with one electron (1)`
      },
      {
        q: 'Describe what happens during pair production and annihilation. State the minimum photon energy for electron-positron pair production.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Pair production: a photon with sufficient energy interacts with a nucleus and creates a particle-antiparticle pair (e.g. electron and positron); the nucleus is needed to conserve momentum (1)\n• Minimum photon energy = 2 × rest energy of electron = 2 × 0.511 MeV = 1.022 MeV (1)\n• Annihilation: when a particle meets its antiparticle, they destroy each other and their mass is converted into energy in the form of photons (usually two gamma photons) (1)\n• Two photons are produced travelling in opposite directions to conserve momentum (1)`
      },
      {
        q: 'Explain what is meant by wave-particle duality. Describe one piece of evidence for the wave nature and one for the particle nature of electromagnetic radiation.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Wave-particle duality means that electromagnetic radiation (and matter) exhibits both wave-like and particle-like behaviour depending on the experiment (1)\n• Wave evidence: Young\'s double-slit experiment — light passing through two slits produces an interference pattern of bright and dark fringes, which can only be explained by superposition of waves (1)\n• Particle evidence: the photoelectric effect — light below a threshold frequency cannot eject electrons regardless of intensity, explained by light consisting of photons each with energy E = hf (1)`
      },
      {
        q: 'Explain beta-minus decay in terms of quarks. State the exchange particle involved.',
        marks: 3, tier: 'amber',
        modelAnswer: `• In beta-minus decay, a neutron decays into a proton, emitting an electron and an electron antineutrino: n → p + e⁻ + ν̄ₑ (1)\n• At the quark level, a down quark changes to an up quark: d → u + e⁻ + ν̄ₑ (1)\n• The exchange particle is the W⁻ boson, which mediates the weak interaction (1)`
      },
    ],
    red: [
      {
        q: 'An atom has energy levels at −13.6 eV (ground state), −3.4 eV, −1.5 eV, and −0.85 eV. Discuss the possible photon emissions when an electron de-excites from the −0.85 eV level to the ground state. Calculate the wavelength of the highest-energy photon emitted.',
        marks: 8, tier: 'red',
        modelAnswer: `• From the −0.85 eV level, the electron can transition directly to any lower level, giving multiple possible photon energies (1)\n• Possible transitions: −0.85 → −1.5 eV (0.65 eV), −0.85 → −3.4 eV (2.55 eV), −0.85 → −13.6 eV (12.75 eV) (1)\n• Also: −1.5 → −3.4 eV (1.9 eV), −1.5 → −13.6 eV (12.1 eV), −3.4 → −13.6 eV (10.2 eV) (1)\n• Total of 6 possible photon energies (from 4 levels: C(4,2) = 6 transitions) (1)\n• Highest energy photon: 12.75 eV = 12.75 × 1.6 × 10⁻¹⁹ = 2.04 × 10⁻¹⁸ J (1)\n• Using E = hc/λ: λ = hc/E = (6.63 × 10⁻³⁴ × 3.0 × 10⁸) / 2.04 × 10⁻¹⁸ (1)\n• λ = 9.75 × 10⁻⁸ m ≈ 97.5 nm (ultraviolet) (1)\n• This demonstrates that atomic energy levels are discrete (quantised) — the line spectrum is evidence for this (1)`
      },
      {
        q: 'Evaluate the Standard Model of particle physics. Discuss its successes and limitations, including the classification of particles and the fundamental interactions it describes.',
        marks: 8, tier: 'red',
        modelAnswer: `• The Standard Model classifies all known matter particles into quarks (6 flavours: up, down, charm, strange, top, bottom) and leptons (electron, muon, tau, and their neutrinos) (1)\n• It describes three of the four fundamental interactions: strong (exchange particle: gluon), electromagnetic (virtual photon), and weak (W⁺, W⁻, Z⁰ bosons) (1)\n• The Higgs boson, discovered in 2012, explains how particles acquire mass through the Higgs field (1)\n• Successes: accurately predicts particle interactions, correctly predicted the existence of the W and Z bosons and the top quark before their discovery (1)\n• Hadrons are classified as baryons (3 quarks, e.g. proton, neutron) and mesons (quark-antiquark pair, e.g. pion, kaon) (1)\n• Conservation laws (charge, baryon number, lepton number, strangeness in strong/EM interactions) are consistently upheld (1)\n• Limitation: does not include gravity — there is no experimentally confirmed graviton (1)\n• Other limitations: does not explain dark matter, dark energy, matter-antimatter asymmetry, or neutrino mass (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.3 */
  '3.3': {
    name: 'Waves',
    green: [
      {
        q: 'State the difference between a progressive wave and a stationary wave.',
        marks: 2, tier: 'green',
        modelAnswer: `• A progressive wave transfers energy from one place to another; a stationary wave does not transfer energy — energy is stored between nodes (1)\n• In a progressive wave all points have the same amplitude; in a stationary wave the amplitude varies from zero (at nodes) to maximum (at antinodes) (1)`
      },
      {
        q: 'State the conditions required for total internal reflection.',
        marks: 2, tier: 'green',
        modelAnswer: `• Light must be travelling from a denser medium (higher refractive index) to a less dense medium (lower refractive index) (1)\n• The angle of incidence must be greater than the critical angle for the boundary (1)`
      },
      {
        q: 'State the principle of superposition.',
        marks: 2, tier: 'green',
        modelAnswer: `• When two or more waves meet at a point, the resultant displacement is the vector sum of the individual displacements (1)\n• This can lead to constructive interference (displacements add) or destructive interference (displacements cancel) (1)`
      },
      {
        q: 'Define the terms "coherent" and "monochromatic".',
        marks: 2, tier: 'green',
        modelAnswer: `• Coherent — waves that have a constant phase difference and the same frequency (1)\n• Monochromatic — light of a single wavelength / frequency (1)`
      },
    ],
    amber: [
      {
        q: 'Describe Young\'s double-slit experiment and explain how it demonstrates the wave nature of light.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Monochromatic, coherent light passes through two narrow, closely spaced slits (1)\n• The light from each slit diffracts and the two diffracted beams overlap and superpose on a screen (1)\n• Where the path difference is a whole number of wavelengths (nλ), constructive interference produces bright fringes; where it is (n+½)λ, destructive interference produces dark fringes (1)\n• The regular pattern of bright and dark fringes can only be explained by wave superposition — particles would not produce this pattern (1)`
      },
      {
        q: 'Explain how a diffraction grating produces a spectrum of white light. State the equation used.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A diffraction grating has many equally spaced slits; light diffracts through each slit and the diffracted beams superpose (1)\n• Constructive interference occurs when d sin θ = nλ, where d is the slit spacing, θ is the angle of diffraction, and n is the order (1)\n• Different wavelengths constructively interfere at different angles — red light (longer λ) diffracts at a larger angle than violet light (shorter λ) (1)\n• This spreads white light into a spectrum at each order; the many slits produce sharp, well-defined maxima (1)`
      },
      {
        q: 'Describe how stationary waves are formed on a stretched string. Explain the relationship between harmonics and wavelength.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A stationary wave is formed when two progressive waves of the same frequency and amplitude travel in opposite directions along the string and superpose (1)\n• At certain frequencies (resonant/harmonic frequencies), a stable pattern of nodes (zero displacement) and antinodes (maximum displacement) is established (1)\n• First harmonic (fundamental): string length L = λ/2, so λ = 2L; second harmonic: L = λ, so λ = L; third harmonic: L = 3λ/2, so λ = 2L/3 (1)\n• The nth harmonic has n antinodes and (n+1) nodes (including the fixed ends) (1)`
      },
      {
        q: 'Explain how refraction occurs when light passes from air into glass. Use Snell\'s law in your answer.',
        marks: 3, tier: 'amber',
        modelAnswer: `• When light enters glass from air, it slows down because glass has a higher refractive index than air (1)\n• The wavefronts change direction because one side of the wavefront slows down before the other, causing the ray to bend towards the normal (1)\n• Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂; since n_glass > n_air, sin θ₂ < sin θ₁, so the refracted angle is smaller than the incident angle (1)`
      },
    ],
    red: [
      {
        q: 'A student uses a diffraction grating with 600 lines per mm to measure the wavelength of a laser. The second-order maximum is observed at 43.2°. Calculate the wavelength and discuss the advantages of using a diffraction grating over a double slit for this measurement.',
        marks: 6, tier: 'red',
        modelAnswer: `• Slit spacing d = 1/(600 × 10³) = 1.667 × 10⁻⁶ m (1)\n• Using d sin θ = nλ: λ = d sin θ / n = 1.667 × 10⁻⁶ × sin 43.2° / 2 (1)\n• λ = 1.667 × 10⁻⁶ × 0.6845 / 2 = 5.71 × 10⁻⁷ m ≈ 571 nm (1)\n• Advantage 1: a diffraction grating produces much sharper, brighter maxima than a double slit because many slits contribute to constructive interference — the angular positions of maxima can be measured more precisely (1)\n• Advantage 2: higher orders are visible and well-separated, allowing multiple measurements and reducing uncertainty (1)\n• Advantage 3: the fringe positions can be measured at large angles with a protractor/spectrometer, giving better precision than measuring small fringe spacings on a screen (1)`
      },
      {
        q: 'Evaluate the evidence for wave-particle duality, discussing both electromagnetic radiation and matter. Include specific experiments in your answer.',
        marks: 8, tier: 'red',
        modelAnswer: `• Electromagnetic radiation — wave evidence: Young\'s double-slit experiment shows interference fringes; diffraction gratings produce spectra; both require superposition of waves (1)\n• EM radiation — particle evidence: the photoelectric effect shows light below threshold frequency cannot eject electrons regardless of intensity; each photon has discrete energy E = hf (1)\n• Matter — particle evidence: electrons produce discrete tracks in cloud chambers and can be counted individually (1)\n• Matter — wave evidence: electron diffraction — electrons passed through a thin graphite crystal produce a diffraction pattern similar to X-ray diffraction, demonstrating wave-like behaviour (1)\n• De Broglie proposed that all matter has a wavelength: λ = h/p = h/(mv); this has been confirmed experimentally (1)\n• The wavelength is significant only for very small particles — for macroscopic objects, λ is negligibly small (1)\n• The double-slit experiment has been performed with single electrons; each electron arrives as a point (particle-like), but over time the pattern of arrivals forms an interference pattern (wave-like) (1)\n• Conclusion: wave-particle duality is fundamental — neither a pure wave nor pure particle model alone can explain all observations of light or matter (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.4 */
  '3.4': {
    name: 'Mechanics and Materials',
    green: [
      {
        q: 'State the difference between a scalar and a vector quantity. Give two examples of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• A scalar has magnitude only; a vector has both magnitude and direction (1)\n• Scalars: speed, mass, temperature, energy (any two) (1)\n• Vectors: velocity, force, acceleration, displacement (any two) (1)`
      },
      {
        q: 'State Newton\'s three laws of motion.',
        marks: 3, tier: 'green',
        modelAnswer: `• First law: An object remains at rest or moves with constant velocity unless acted upon by a resultant external force (1)\n• Second law: The resultant force on an object is equal to the rate of change of its momentum: F = Δp/Δt (or F = ma for constant mass) (1)\n• Third law: When body A exerts a force on body B, body B exerts an equal and opposite force on body A — the forces act on different objects and are of the same type (1)`
      },
      {
        q: 'Define the moment of a force and state the principle of moments.',
        marks: 2, tier: 'green',
        modelAnswer: `• Moment = force × perpendicular distance from the line of action of the force to the pivot (1)\n• Principle of moments: for a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that same point (1)`
      },
      {
        q: 'State Hooke\'s law and define the spring constant.',
        marks: 2, tier: 'green',
        modelAnswer: `• Hooke\'s law: the force applied to a spring is directly proportional to its extension, provided the limit of proportionality is not exceeded: F = kx (1)\n• The spring constant k is the force per unit extension (in N/m); it represents the stiffness of the spring (1)`
      },
    ],
    amber: [
      {
        q: 'Explain the difference between elastic and inelastic collisions in terms of conservation laws. Give one example of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `• In both types, momentum is conserved (total momentum before = total momentum after) and total energy is conserved (1)\n• In an elastic collision, kinetic energy is also conserved — no energy is converted to other forms (1)\n• In an inelastic collision, kinetic energy is not conserved — some is converted to heat, sound, or deformation (1)\n• Elastic example: collision between two snooker balls (approximately); Inelastic example: a car crash where the vehicles crumple together (1)`
      },
      {
        q: 'Describe how to determine the Young\'s modulus of a material from a stress-strain graph. Explain the significance of the elastic limit and the yield point.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Young\'s modulus = stress / strain = gradient of the linear (proportional) region of the stress-strain graph (1)\n• The elastic limit is the maximum stress (or strain) beyond which the material will not return to its original length when the force is removed — permanent (plastic) deformation occurs beyond this point (1)\n• The yield point is the stress at which the material begins to deform plastically with little or no increase in applied stress (a noticeable change in gradient) (1)\n• Before the elastic limit, the material obeys Hooke\'s law (approximately) and strain energy can be recovered; beyond it, energy is dissipated in permanent deformation (1)`
      },
      {
        q: 'A ball is thrown horizontally at 12 m/s from a cliff 45 m high. Calculate the time of flight, the horizontal distance travelled, and the speed at which it hits the ground. (g = 9.81 m/s²)',
        marks: 4, tier: 'amber',
        modelAnswer: `• Vertically: s = ½gt² → 45 = ½ × 9.81 × t² → t = √(90/9.81) = 3.03 s (1)\n• Horizontal distance = horizontal speed × time = 12 × 3.03 = 36.4 m (1)\n• Vertical speed at impact: v = gt = 9.81 × 3.03 = 29.7 m/s (1)\n• Resultant speed = √(12² + 29.7²) = √(144 + 882) = √1026 = 32.0 m/s (1)`
      },
      {
        q: 'Explain what is meant by the conservation of energy and describe an example where gravitational potential energy is converted to kinetic energy.',
        marks: 3, tier: 'amber',
        modelAnswer: `• The principle of conservation of energy states that energy cannot be created or destroyed, only transferred between forms; the total energy of a closed system remains constant (1)\n• Example: a ball dropped from a height h — gravitational potential energy (mgh) is converted to kinetic energy (½mv²) as it falls (1)\n• At the lowest point, if air resistance is negligible, mgh = ½mv², so v = √(2gh); in practice some energy is dissipated as heat due to air resistance (1)`
      },
    ],
    red: [
      {
        q: 'Compare the stress-strain behaviours of a ductile metal (e.g. copper), a brittle material (e.g. glass), and a polymer (e.g. rubber). Discuss their properties and typical applications.',
        marks: 8, tier: 'red',
        modelAnswer: `• Ductile metal (copper): linear elastic region obeying Hooke\'s law, then yields and undergoes significant plastic deformation before fracture; large area under the curve indicates high toughness (1)\n• Copper has a clear yield point and necking before breaking; it can be drawn into wires — useful for electrical cables (1)\n• Brittle material (glass): linear elastic region with a steep gradient (high Young\'s modulus), then fractures suddenly with little or no plastic deformation (1)\n• Glass stores elastic strain energy and releases it suddenly on fracture; useful where rigidity is needed but poor for absorbing impacts (1)\n• Polymer (rubber): shows a non-linear stress-strain curve with very large extensions at relatively low stress; does not obey Hooke\'s law (1)\n• On unloading, rubber follows a different path (hysteresis) — the area between loading and unloading curves represents energy dissipated as heat (1)\n• Rubber returns to its original shape (elastic) but the hysteresis makes it useful for absorbing vibrations (e.g. car tyres, shock absorbers) (1)\n• Overall comparison: ductile materials are best for structural applications requiring deformation before failure; brittle materials for rigid supports; polymers for flexible, energy-absorbing roles (1)`
      },
      {
        q: 'A car of mass 1200 kg travelling at 25 m/s collides with a stationary car of mass 800 kg. They lock together and slide forward. Calculate the velocity after the collision, the kinetic energy lost, and discuss where the lost energy goes.',
        marks: 6, tier: 'red',
        modelAnswer: `• Conservation of momentum: 1200 × 25 + 800 × 0 = (1200 + 800) × v (1)\n• v = 30000 / 2000 = 15 m/s (1)\n• KE before = ½ × 1200 × 25² = 375,000 J (1)\n• KE after = ½ × 2000 × 15² = 225,000 J (1)\n• KE lost = 375,000 − 225,000 = 150,000 J (150 kJ) (1)\n• The lost kinetic energy is converted to: heat (deformation of metal), sound, and permanent deformation of the car bodies (crumple zones absorb energy to protect occupants) (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.5 */
  '3.5': {
    name: 'Electricity',
    green: [
      {
        q: 'State Kirchhoff\'s first and second laws.',
        marks: 2, tier: 'green',
        modelAnswer: `• First law (junction rule): the total current entering a junction equals the total current leaving it — this is based on conservation of charge (1)\n• Second law (loop rule): the sum of the EMFs around any closed loop in a circuit equals the sum of the potential differences — this is based on conservation of energy (1)`
      },
      {
        q: 'Define EMF and potential difference.',
        marks: 2, tier: 'green',
        modelAnswer: `• EMF (electromotive force) is the energy transferred per unit charge by the power supply to the charge carriers: ε = W/Q (1)\n• Potential difference is the energy transferred per unit charge by a component from the charge carriers: V = W/Q (1)`
      },
      {
        q: 'State the equation for resistivity and define each term.',
        marks: 2, tier: 'green',
        modelAnswer: `• ρ = RA/L where ρ is resistivity (Ω m), R is resistance (Ω), A is cross-sectional area (m²), and L is length (m) (1)\n• Resistivity is a material property — it does not depend on the dimensions of the conductor (1)`
      },
      {
        q: 'State two differences between a series and a parallel circuit.',
        marks: 2, tier: 'green',
        modelAnswer: `• Series: the current is the same through all components; in parallel: the PD is the same across all branches (1)\n• Series: total resistance = sum of individual resistances (R = R₁ + R₂); parallel: 1/R_total = 1/R₁ + 1/R₂ (total resistance is less than the smallest) (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how to determine the EMF and internal resistance of a cell experimentally.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Connect the cell to a variable resistor, an ammeter in series, and a voltmeter across the cell terminals (1)\n• Vary the resistance and record pairs of terminal PD (V) and current (I) for several values (1)\n• Plot V against I; using ε = V + Ir, this rearranges to V = ε − Ir (1)\n• The y-intercept gives the EMF (ε) and the gradient gives −r (negative of internal resistance) (1)`
      },
      {
        q: 'Explain how a potential divider circuit using a thermistor can be used to monitor temperature changes.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A thermistor and a fixed resistor are connected in series across a fixed voltage supply (1)\n• The output voltage is taken across the fixed resistor: V_out = V_in × R_fixed / (R_fixed + R_thermistor) (1)\n• As temperature increases, the NTC thermistor resistance decreases, so V_out across the fixed resistor increases (1)\n• This changing voltage can be measured with a voltmeter or fed to a data logger/comparator to trigger a warning when a threshold temperature is reached (1)`
      },
      {
        q: 'Describe and explain the I-V characteristics of a filament lamp, a resistor, and a diode.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Ohmic resistor: a straight line through the origin; current is directly proportional to PD (Ohm\'s law), and resistance is constant (1)\n• Filament lamp: a curve through the origin — as current increases, the filament heats up, lattice ions vibrate more, impeding electron flow, so resistance increases and the gradient decreases (1)\n• Diode: negligible current flows in reverse bias; in forward bias, current increases rapidly once the threshold voltage (~0.6 V for silicon) is exceeded (1)\n• The diode graph is asymmetric because it only allows significant current flow in one direction (1)`
      },
      {
        q: 'Calculate the total resistance of a circuit where a 6 Ω resistor is in series with a parallel combination of a 4 Ω and a 12 Ω resistor.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Parallel combination: 1/R_p = 1/4 + 1/12 = 3/12 + 1/12 = 4/12, so R_p = 3 Ω (1)\n• Total resistance = series resistor + parallel combination = 6 + 3 = 9 Ω (1)\n• If connected to a 9 V supply: current = V/R = 9/9 = 1 A; PD across the 6 Ω = 6 V; PD across the parallel combination = 3 V (1)`
      },
    ],
    red: [
      {
        q: 'A battery of EMF 12 V and internal resistance 0.5 Ω is connected to two resistors: a 5.5 Ω resistor in series with a parallel combination of a 6 Ω and a 3 Ω resistor. Calculate the current from the battery, the terminal PD, the power dissipated in each external resistor, and discuss the efficiency of the circuit.',
        marks: 8, tier: 'red',
        modelAnswer: `• Parallel combination: 1/R_p = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so R_p = 2 Ω (1)\n• Total external resistance: R_ext = 5.5 + 2 = 7.5 Ω (1)\n• Total circuit resistance: R_total = 7.5 + 0.5 = 8 Ω; current I = ε/R_total = 12/8 = 1.5 A (1)\n• Terminal PD: V = ε − Ir = 12 − 1.5 × 0.5 = 11.25 V (1)\n• Power in 5.5 Ω: P = I²R = 1.5² × 5.5 = 12.375 W (1)\n• PD across parallel combination = IR_p = 1.5 × 2 = 3 V; current in 6 Ω = 3/6 = 0.5 A, power = 0.5² × 6 = 1.5 W; current in 3 Ω = 3/3 = 1 A, power = 1² × 3 = 3 W (1)\n• Power wasted internally: P_int = I²r = 1.5² × 0.5 = 1.125 W; total power = εI = 18 W (1)\n• Efficiency = useful power / total power = (18 − 1.125)/18 = 93.75%; the internal resistance wastes a small fraction as heat — efficiency would decrease if external resistance were reduced (1)`
      },
      {
        q: 'Evaluate the use of superconductors in power transmission. Discuss the physics behind superconductivity and the practical challenges that limit widespread use.',
        marks: 6, tier: 'red',
        modelAnswer: `• A superconductor has zero resistivity below its critical temperature, meaning no energy is dissipated as heat (I²R = 0) when current flows (1)\n• For power transmission, this would eliminate the significant energy losses in conventional cables (typically copper or aluminium), which can be several percent of generated power (1)\n• The physics: below the critical temperature, electrons form Cooper pairs that move through the lattice without scattering, resulting in zero resistance (1)\n• Practical challenge 1: most known superconductors require cooling to extremely low temperatures (e.g. below 20 K for conventional superconductors), requiring expensive liquid helium cooling systems (1)\n• Practical challenge 2: high-temperature superconductors (HTS) work at higher temperatures (~77 K, liquid nitrogen), but they are ceramic, brittle, and difficult to manufacture into long flexible cables (1)\n• Overall evaluation: the energy savings could be enormous for long-distance transmission, but the infrastructure cost of cooling and the material challenges currently outweigh the benefits except in niche applications (e.g. MRI magnets, particle accelerators) (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.6 */
  '3.6': {
    name: 'Further Mechanics and Thermal Physics',
    green: [
      {
        q: 'State the conditions for simple harmonic motion (SHM).',
        marks: 2, tier: 'green',
        modelAnswer: `• The acceleration is directly proportional to the displacement from the equilibrium position (1)\n• The acceleration is always directed towards the equilibrium position (i.e. a = −ω²x) (1)`
      },
      {
        q: 'Define specific heat capacity and specific latent heat.',
        marks: 2, tier: 'green',
        modelAnswer: `• Specific heat capacity (c) is the energy required to raise the temperature of 1 kg of a substance by 1 K (or 1°C): Q = mcΔT (1)\n• Specific latent heat (L) is the energy required to change the state of 1 kg of a substance at constant temperature: Q = mL (1)`
      },
      {
        q: 'State what is meant by centripetal force and centripetal acceleration.',
        marks: 2, tier: 'green',
        modelAnswer: `• Centripetal force is the resultant force acting on an object moving in a circle, directed towards the centre of the circle: F = mv²/r = mω²r (1)\n• Centripetal acceleration is the acceleration towards the centre of the circle: a = v²/r = ω²r (1)`
      },
      {
        q: 'State the ideal gas equation and define each term.',
        marks: 3, tier: 'green',
        modelAnswer: `• pV = nRT where p = pressure (Pa), V = volume (m³), n = number of moles, R = molar gas constant (8.31 J mol⁻¹ K⁻¹), T = absolute temperature (K) (1)\n• Alternatively: pV = NkT where N = number of molecules and k = Boltzmann constant (1.38 × 10⁻²³ J K⁻¹) (1)\n• Temperature must be in kelvin; convert from Celsius by adding 273 (1)`
      },
    ],
    amber: [
      {
        q: 'Describe the energy transfers during one complete oscillation of a mass-spring system undergoing SHM.',
        marks: 4, tier: 'amber',
        modelAnswer: `• At maximum displacement (amplitude A), the mass is momentarily at rest: all energy is elastic potential energy (½kA²), kinetic energy is zero (1)\n• As the mass moves towards equilibrium, elastic PE is converted to kinetic energy (1)\n• At the equilibrium position, all energy is kinetic energy (½mv²_max) and elastic PE is zero (1)\n• The total energy E = ½kA² remains constant (for undamped SHM); at any point, E = ½kx² + ½mv² (1)`
      },
      {
        q: 'Explain the difference between free oscillations, forced oscillations, and resonance.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Free oscillation: the system oscillates at its natural frequency f₀ with no external driving force and no energy input after the initial displacement (1)\n• Forced oscillation: an external periodic driving force is applied to the system; the system oscillates at the driving frequency, not necessarily its natural frequency (1)\n• Resonance occurs when the driving frequency equals the natural frequency — the amplitude increases dramatically because energy is transferred most efficiently to the system (1)\n• Damping reduces the amplitude at resonance and broadens the resonance peak; with heavy damping, the resonance peak becomes lower and wider (1)`
      },
      {
        q: 'Explain, using kinetic theory, why the pressure of an ideal gas increases when the temperature is raised at constant volume.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Increasing temperature increases the mean kinetic energy of the gas molecules (½m<c²> = 3/2 kT) (1)\n• The molecules move faster on average, so they hit the container walls more frequently (1)\n• Each collision also involves a greater change in momentum (greater impulse) because the molecules are moving faster (1)\n• Pressure = force per unit area; since there are more collisions with greater force, the total force on the walls increases, so pressure increases at constant volume (1)`
      },
      {
        q: 'Describe how damping affects the resonance curve of an oscillating system.',
        marks: 3, tier: 'amber',
        modelAnswer: `• With no damping (theoretically), the amplitude at resonance would be infinite; in practice, light damping gives a sharp, tall resonance peak at f = f₀ (1)\n• As damping increases, the resonance peak becomes lower (smaller maximum amplitude) and broader (resonance occurs over a wider range of frequencies) (1)\n• Heavy damping may also shift the peak slightly to a frequency below f₀; with very heavy damping, no resonance peak is visible at all (1)`
      },
    ],
    red: [
      {
        q: 'A gas is contained in a cylinder with a movable piston. The gas is initially at 300 K, 100 kPa, and occupies 0.05 m³. It is heated at constant pressure to 600 K, then compressed isothermally to its original volume. Calculate the final pressure and discuss whether the gas has returned to its original state.',
        marks: 6, tier: 'red',
        modelAnswer: `• Stage 1 — constant pressure heating: V₁/T₁ = V₂/T₂ → 0.05/300 = V₂/600 → V₂ = 0.10 m³; pressure remains 100 kPa (1)\n• Stage 2 — isothermal compression back to V = 0.05 m³: p₂V₂ = p₃V₃ → 100 × 0.10 = p₃ × 0.05 → p₃ = 200 kPa (1)\n• The final state: T = 600 K, p = 200 kPa, V = 0.05 m³ — this is different from the initial state (300 K, 100 kPa, 0.05 m³) (1)\n• The gas has NOT returned to its original state — although the volume is the same, the temperature and pressure are both doubled (1)\n• This is consistent with the ideal gas law: pV = nRT → since V is unchanged, p ∝ T (1)\n• The internal energy has increased because it depends on temperature for an ideal gas (U = 3/2 nRT) (1)`
      },
      {
        q: 'Evaluate the assumptions of the kinetic theory of ideal gases and discuss the conditions under which real gases deviate significantly from ideal behaviour.',
        marks: 8, tier: 'red',
        modelAnswer: `• Assumption 1: molecules are point particles with negligible volume compared to the container — valid at low pressure when molecules are far apart (1)\n• Assumption 2: no intermolecular forces except during collisions — valid when molecules are far apart (low pressure, high temperature) (1)\n• Assumption 3: collisions are perfectly elastic — a reasonable approximation for monatomic gases (1)\n• Assumption 4: molecules are in constant random motion — consistent with Brownian motion observations (1)\n• Assumption 5: the time of a collision is negligible compared to the time between collisions (1)\n• Real gases deviate at high pressures: molecules are close together so their volume becomes significant and intermolecular forces reduce the effective pressure (measured pressure is less than predicted) (1)\n• Real gases deviate at low temperatures: molecules move slowly so attractive intermolecular forces have a greater effect, causing the gas to liquefy (1)\n• The van der Waals equation corrects for these deviations; ideal gas behaviour is a good approximation at high temperature and low pressure (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.7 */
  '3.7': {
    name: 'Fields and Their Consequences',
    green: [
      {
        q: 'Define gravitational field strength and state its units.',
        marks: 2, tier: 'green',
        modelAnswer: `• Gravitational field strength (g) is the force per unit mass experienced by a small test mass placed at that point in the field (1)\n• Units: N kg⁻¹ (or equivalently m s⁻²) (1)`
      },
      {
        q: 'State Faraday\'s law and Lenz\'s law of electromagnetic induction.',
        marks: 2, tier: 'green',
        modelAnswer: `• Faraday\'s law: the magnitude of the induced EMF is equal to the rate of change of magnetic flux linkage through the circuit: ε = −dNΦ/dt (1)\n• Lenz\'s law: the induced EMF (and hence current) acts in a direction to oppose the change in flux that produced it — the negative sign in Faraday\'s law represents this (1)`
      },
      {
        q: 'State the equation for the capacitance of a capacitor and the energy it stores.',
        marks: 2, tier: 'green',
        modelAnswer: `• Capacitance: C = Q/V where Q is charge (C) and V is potential difference (V); unit is farad (F) (1)\n• Energy stored: E = ½QV = ½CV² = ½Q²/C (1)`
      },
      {
        q: 'State Coulomb\'s law for the force between two point charges.',
        marks: 2, tier: 'green',
        modelAnswer: `• F = kQ₁Q₂/r² where k = 1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻² (1)\n• The force is attractive for unlike charges and repulsive for like charges; it acts along the line joining the charges (1)`
      },
    ],
    amber: [
      {
        q: 'Explain why gravitational potential is always negative while electric potential can be positive or negative.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Gravitational potential at a point is defined as the work done per unit mass in bringing a test mass from infinity to that point (1)\n• Gravity is always attractive, so work is done by the field (not against it) as the mass moves from infinity; this means energy is released and potential is negative (V = −GM/r) (1)\n• Electric potential can be positive (near a positive charge, work must be done against repulsion to bring a positive test charge from infinity) or negative (near a negative charge, the field does work on the positive test charge) (1)\n• At infinity, both gravitational and electric potentials are defined as zero (1)`
      },
      {
        q: 'Describe the charge and discharge of a capacitor through a resistor, including the relevant equations.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Charging: when connected to a supply, charge flows onto the plates; Q increases towards Q₀ exponentially: Q = Q₀(1 − e^(−t/RC)); current starts at maximum and decreases: I = I₀e^(−t/RC) (1)\n• Discharging: when disconnected from the supply and connected through a resistor, charge flows off the plates; Q = Q₀e^(−t/RC); current decreases exponentially (1)\n• The time constant τ = RC determines the rate: after one time constant, the charge has fallen to 37% (1/e) of its initial value during discharge (1)\n• After 5τ, the capacitor is considered fully charged or fully discharged (charge has reached ~99% of final value or fallen to ~1%) (1)`
      },
      {
        q: 'Explain how a charged particle moving in a magnetic field follows a circular path. Derive the expression for the radius of the circular path.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A charged particle moving perpendicular to a uniform magnetic field experiences a force F = BQv, perpendicular to both v and B (1)\n• This force is always perpendicular to the velocity, so it does no work — it changes the direction of motion but not the speed, causing circular motion (1)\n• The magnetic force provides the centripetal force: BQv = mv²/r (1)\n• Rearranging: r = mv/(BQ) — the radius is proportional to momentum and inversely proportional to the magnetic field strength and charge (1)`
      },
      {
        q: 'Explain the conditions for a geostationary orbit and calculate the orbital radius. (M_Earth = 5.97 × 10²⁴ kg, G = 6.67 × 10⁻¹¹ N m² kg⁻²)',
        marks: 4, tier: 'amber',
        modelAnswer: `• Geostationary orbit: period T = 24 hours = 86400 s, orbits above the equator, and moves west to east (same direction as Earth\'s rotation) (1)\n• The satellite appears stationary relative to the ground — used for communications satellites (1)\n• Equating gravitational force to centripetal force: GMm/r² = mω²r, so r³ = GM/ω² where ω = 2π/T (1)\n• r³ = (6.67 × 10⁻¹¹ × 5.97 × 10²⁴) / (2π/86400)² = 3.98 × 10¹⁴ / 5.30 × 10⁻⁹ = 7.53 × 10²² → r = 4.23 × 10⁷ m ≈ 42,300 km from Earth\'s centre (1)`
      },
    ],
    red: [
      {
        q: 'Compare gravitational and electric fields, discussing their similarities and differences. Include the relevant equations and field patterns for point masses/charges.',
        marks: 8, tier: 'red',
        modelAnswer: `• Both are inverse-square law fields: gravitational force F = GMm/r², electric force F = kQq/r² (1)\n• Both have field strength that decreases with 1/r² from a point source: g = GM/r², E = kQ/r² (1)\n• Both have potential that varies with 1/r: V_grav = −GM/r, V_elec = kQ/r (1)\n• Key difference: gravity is always attractive (between all masses); electric forces can be attractive or repulsive (between charges) (1)\n• Gravitational potential is always negative; electric potential can be positive or negative depending on the sign of the source charge (1)\n• Field lines: gravitational field lines always point towards the mass (attractive only); electric field lines point away from positive charges and towards negative charges (1)\n• Gravitational fields cannot be shielded; electric fields can be shielded by conductors (Faraday cage) (1)\n• Both obey the principle of superposition — the total field at any point is the vector sum of individual fields (1)`
      },
      {
        q: 'A 500 μF capacitor is charged to 20 V and then discharged through a 10 kΩ resistor. Calculate the time constant, the initial current, the charge remaining after 10 s, and evaluate the energy dissipated in the resistor after 10 s.',
        marks: 6, tier: 'red',
        modelAnswer: `• Time constant τ = RC = 10 × 10³ × 500 × 10⁻⁶ = 5 s (1)\n• Initial current I₀ = V₀/R = 20/(10 × 10³) = 2 × 10⁻³ A = 2 mA (1)\n• Charge remaining after 10 s: Q = Q₀e^(−t/RC) = CV₀ × e^(−10/5) = 500 × 10⁻⁶ × 20 × e⁻² = 0.01 × 0.1353 = 1.353 × 10⁻³ C (1)\n• Voltage after 10 s: V = V₀e^(−t/RC) = 20 × e⁻² = 2.71 V (1)\n• Initial energy stored = ½CV₀² = ½ × 500 × 10⁻⁶ × 20² = 0.1 J (1)\n• Energy remaining after 10 s = ½CV² = ½ × 500 × 10⁻⁶ × 2.71² = 1.83 × 10⁻³ J; energy dissipated = 0.1 − 0.00183 = 0.098 J — almost all the stored energy has been dissipated as heat in the resistor after 2 time constants (1)`
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────── 3.8 */
  '3.8': {
    name: 'Nuclear Physics',
    green: [
      {
        q: 'State the properties of alpha (α), beta-minus (β⁻), and gamma (γ) radiation in terms of charge, mass, ionising power, and penetrating power.',
        marks: 3, tier: 'green',
        modelAnswer: `• Alpha: charge +2e, mass 4u (helium nucleus), highest ionising power, stopped by a few cm of air or a sheet of paper (1)\n• Beta-minus: charge −1e, mass ~0u (electron from nucleus), moderate ionising power, stopped by a few mm of aluminium (1)\n• Gamma: no charge, no mass (electromagnetic radiation), lowest ionising power, reduced (never fully stopped) by several cm of lead or thick concrete (1)`
      },
      {
        q: 'Define half-life and the decay constant.',
        marks: 2, tier: 'green',
        modelAnswer: `• Half-life (t½) is the time taken for the number of undecayed nuclei (or the activity) of a radioactive sample to halve (1)\n• The decay constant (λ) is the probability of an individual nucleus decaying per unit time; related by λ = ln2/t½ (1)`
      },
      {
        q: 'State the equation for mass-energy equivalence and explain what it means.',
        marks: 2, tier: 'green',
        modelAnswer: `• E = mc² where E is energy (J), m is mass (kg), and c is the speed of light (3.0 × 10⁸ m/s) (1)\n• This means mass and energy are interchangeable — when mass is lost in a nuclear reaction, it is converted to an equivalent amount of energy (and vice versa) (1)`
      },
      {
        q: 'Define binding energy and binding energy per nucleon.',
        marks: 2, tier: 'green',
        modelAnswer: `• Binding energy is the minimum energy required to completely separate a nucleus into its individual protons and neutrons (1)\n• Binding energy per nucleon = total binding energy / mass number (A); nuclei with higher binding energy per nucleon are more stable (1)`
      },
    ],
    amber: [
      {
        q: 'Explain, using the binding energy per nucleon curve, why nuclear fusion of light nuclei releases energy.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The binding energy per nucleon curve rises steeply for light nuclei and peaks at iron-56 (1)\n• When two light nuclei fuse, the product nucleus has a higher binding energy per nucleon than the reactants (1)\n• The increase in binding energy per nucleon means the product is more stable — mass has been converted to energy according to E = mc² (1)\n• The mass of the product nucleus is less than the total mass of the reactants; this mass defect is released as kinetic energy of the products and radiation (1)`
      },
      {
        q: 'Describe the process of radioactive decay and explain why it is described as random and spontaneous.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Radioactive decay is the emission of radiation from an unstable nucleus as it transitions to a more stable state (1)\n• It is random because it is impossible to predict which particular nucleus will decay next or exactly when; only probabilities can be determined (1)\n• It is spontaneous because the decay is not affected by external conditions such as temperature, pressure, or chemical bonding — it depends only on the internal structure of the nucleus (1)`
      },
      {
        q: 'A radioactive isotope has a half-life of 2 hours. Initially there are 6.4 × 10²⁰ atoms. Calculate the activity after 6 hours.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Decay constant: λ = ln2/t½ = 0.693/(2 × 3600) = 9.63 × 10⁻⁵ s⁻¹ (1)\n• After 6 hours = 3 half-lives: N = N₀ × (½)³ = 6.4 × 10²⁰ / 8 = 8.0 × 10¹⁹ atoms (1)\n• Activity A = λN = 9.63 × 10⁻⁵ × 8.0 × 10¹⁹ = 7.7 × 10¹⁵ Bq (1)\n• Alternatively: initial activity A₀ = λN₀ = 9.63 × 10⁻⁵ × 6.4 × 10²⁰ = 6.16 × 10¹⁶ Bq; after 3 half-lives: A = A₀/8 = 7.7 × 10¹⁵ Bq (1)`
      },
      {
        q: 'Explain the role of the moderator, control rods, and coolant in a nuclear fission reactor.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Moderator (e.g. water or graphite): slows down fast neutrons to thermal speeds so they are more likely to be absorbed by fuel nuclei and cause further fission (1)\n• Control rods (e.g. boron or cadmium): absorb excess neutrons to control the rate of the chain reaction; inserting them further reduces the reaction rate (1)\n• Coolant (e.g. water, CO₂, or liquid sodium): absorbs thermal energy from the reactor core and transfers it to a heat exchanger to produce steam for electricity generation (1)\n• Together these systems maintain a controlled, steady chain reaction where on average one neutron per fission causes another fission (criticality) (1)`
      },
    ],
    red: [
      {
        q: 'Discuss the use of nuclear power as an energy source, evaluating its advantages and disadvantages compared to fossil fuels. Include references to binding energy and mass-energy equivalence.',
        marks: 8, tier: 'red',
        modelAnswer: `• Nuclear fission releases energy because the products have higher binding energy per nucleon than the reactants — the mass defect is converted to energy via E = mc² (1)\n• A small amount of nuclear fuel produces vastly more energy than the same mass of fossil fuel because c² is very large (1)\n• Advantage: nuclear power produces no CO₂ during operation, so it does not directly contribute to climate change (unlike fossil fuels) (1)\n• Advantage: uranium and plutonium fuel are energy-dense, so less fuel is needed and supply can last decades (1)\n• Disadvantage: nuclear waste is highly radioactive with long half-lives (thousands of years for some isotopes), requiring secure long-term storage (1)\n• Disadvantage: the risk of catastrophic accidents (e.g. Chernobyl, Fukushima) can release radioactive material into the environment (1)\n• Disadvantage: high construction and decommissioning costs; building new plants takes many years (1)\n• Overall evaluation: nuclear power is a low-carbon energy source that can provide reliable baseload electricity, but the challenges of waste disposal, safety, and cost mean it must be combined with other energy sources in a balanced energy strategy (1)`
      },
      {
        q: 'The nuclear radius can be determined by electron diffraction. Explain the physics behind this method and how the data is analysed. Calculate the nuclear radius of an element with A = 64.',
        marks: 6, tier: 'red',
        modelAnswer: `• High-energy electrons are fired at a thin target; the electrons have a de Broglie wavelength comparable to nuclear dimensions (λ = h/p, so high momentum/energy gives small λ) (1)\n• The electrons are diffracted by the nucleus and produce a diffraction pattern with a central maximum and surrounding minima (1)\n• The first minimum occurs at sin θ ≈ 1.22λ/(2R), where R is the nuclear radius — by measuring the angle of the first minimum and knowing the electron wavelength, R can be calculated (1)\n• Results show that nuclear radius follows R = r₀A^(1/3) where r₀ ≈ 1.2 × 10⁻¹⁵ m (1)\n• For A = 64: R = 1.2 × 10⁻¹⁵ × 64^(1/3) = 1.2 × 10⁻¹⁵ × 4.0 = 4.8 × 10⁻¹⁵ m (1)\n• Since volume ∝ R³ ∝ A and mass ∝ A, nuclear density is approximately constant for all nuclei (~10¹⁷ kg m⁻³) (1)`
      },
    ],
  },

};
