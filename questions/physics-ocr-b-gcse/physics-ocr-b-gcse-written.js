/*
 * OCR GCSE Physics B (J259) 21st Century Science — Diagnostic WRITTEN questions.
 * Each topic has green/amber/red written questions with model answers.
 * The diagnostic engine randomly picks ONE written to replace an MCQ of the chosen tier.
 */

const PHYSICS_OCR_B_GCSE_WRITTEN = {

  'P1': {
    green: [
      { q: 'State what is meant by the amplitude of a wave.', marks: 1,
        modelAnswer: 'The maximum displacement of a particle (or point on the wave) from its rest/equilibrium position.' },
      { q: 'List the seven main regions of the electromagnetic spectrum in order of INCREASING frequency.', marks: 2,
        modelAnswer: 'Radio, microwave, infrared, visible light, ultraviolet, X-ray, gamma.' },
      { q: 'State one use and one hazard of ultraviolet radiation.', marks: 2,
        modelAnswer: 'Use: security marking / disinfecting water / tanning / fluorescent lamps. Hazard: skin cancer / premature skin ageing / eye damage.' },
    ],
    amber: [
      { q: 'A wave has frequency 200 Hz and wavelength 1.7 m. Calculate the wave speed and give its unit.', marks: 3,
        modelAnswer: 'v = f × λ = 200 × 1.7 = 340 m/s. Unit: metres per second (m/s). [equation 1; substitution 1; answer with unit 1]' },
      { q: 'Describe, with reference to the wavelengths involved, why microwaves rather than radio waves are used to communicate with satellites.', marks: 3,
        modelAnswer: 'Microwaves have shorter wavelengths than radio waves. Shorter wavelengths diffract less and pass through the atmosphere/ionosphere without being reflected. This lets them travel in straight lines to a satellite without bending around obstacles, making reliable line-of-sight communication possible.' },
      { q: 'Explain why a ray of light slows down and bends towards the normal as it enters glass from air.', marks: 3,
        modelAnswer: 'Light travels more slowly in glass than in air because glass is optically denser. As the wavefront enters glass, the part inside the glass slows while the part still in air continues at the faster speed — this bends the ray towards the normal. The frequency is unchanged so the wavelength must decrease.' },
    ],
    red: [
      { q: 'Compare the suitability of X-rays and gamma rays for (i) diagnostic bone imaging and (ii) treating a deep tumour. In your answer, refer to penetration, ionising power, and dose. [6]', marks: 6,
        modelAnswer: 'For bone imaging, X-rays are used because they penetrate soft tissue but are absorbed by the denser calcium in bone — giving a shadow image on film/detector. Gamma rays penetrate too far and would give a much poorer image at much higher dose, so are not normally used diagnostically. X-rays can be tightly focused in short exposures to keep dose low (~0.02 mSv for a chest X-ray).\n\nFor treating a deep tumour, gamma rays are preferred. They are very penetrating so can reach the tumour without being fully absorbed in overlying tissue, and they are ionising enough to kill cancer cells by damaging their DNA. Multiple beams are directed from different angles so the doses only add at the tumour, sparing healthy tissue.\n\nBoth are ionising and carry a risk of causing cancer themselves, so the ALARA principle applies — the dose is kept As Low As Reasonably Achievable for the diagnostic/therapeutic purpose.' },
    ],
  },

  'P2': {
    green: [
      { q: 'State the principle of conservation of energy.', marks: 1,
        modelAnswer: 'Energy cannot be created or destroyed. It is only transferred between stores.' },
      { q: 'Name three renewable energy resources.', marks: 2,
        modelAnswer: 'Any three of: wind, solar, hydroelectric, tidal, wave, geothermal, biofuel/biomass.' },
    ],
    amber: [
      { q: 'A kettle transfers 180 000 J of energy in 120 s. Calculate its power and give the unit.', marks: 3,
        modelAnswer: 'P = E / t = 180 000 / 120 = 1500 W (1.5 kW). [equation 1; calc 1; unit 1]' },
      { q: 'Explain two different ways a house can be made more energy-efficient and why they work.', marks: 4,
        modelAnswer: 'Loft insulation uses fibreglass to trap air (a very poor conductor) in the roof space, reducing heat loss by conduction through the ceiling. Double glazing traps a thin gas/vacuum layer between two panes — because the gas conducts heat very poorly, far less thermal energy escapes through the window. (Other valid: cavity wall insulation, draught excluders, thicker walls, heavier curtains — one reason per method.)' },
    ],
    red: [
      { q: 'Evaluate the use of natural gas and wind power for electricity generation in the UK. In your answer, compare reliability, CO₂ emissions and impact on the landscape. [6]', marks: 6,
        modelAnswer: 'Natural gas is reliable — plants can run whenever fuel is available and can ramp up output quickly to match demand. However, burning gas emits ~490 g CO₂ per kWh, contributing to climate change. Gas-fired power stations have a fairly small land footprint but transport of gas via pipelines can affect ecosystems, and extraction (including fracking) can damage local groundwater and landscapes.\n\nWind power emits almost no CO₂ during operation (~11 g/kWh over lifecycle) and uses no fuel. However, it is intermittent — output varies with wind speed, so standby sources (gas, nuclear, storage) are needed for calm periods. Turbines have a visual impact on landscapes, can produce some noise, and there is a small bird-strike risk.\n\nOn balance, wind is better for CO₂ reduction but worse for reliability on its own; a mix of gas (for baseload/peaking) with a growing share of wind helps the UK decarbonise while keeping supply reliable.' },
    ],
  },

  'P3': {
    green: [
      { q: 'State the equation that links charge, current and time.', marks: 1,
        modelAnswer: 'Q = I × t (charge = current × time).' },
      { q: 'Describe how an ammeter and a voltmeter should be connected in a circuit.', marks: 2,
        modelAnswer: 'Ammeter in series with the component (to measure the current through it). Voltmeter in parallel across the component (to measure the p.d. across it).' },
    ],
    amber: [
      { q: 'A 230 V hairdryer has a power of 1150 W. Calculate the current and state a suitable fuse rating (3 A or 13 A).', marks: 3,
        modelAnswer: 'I = P / V = 1150 / 230 = 5 A. A 13 A fuse is suitable (the next standard fuse above 5 A; a 3 A fuse would blow).' },
      { q: 'Describe, with reasons, what each wire in a three-pin UK plug does.', marks: 4,
        modelAnswer: 'Live (brown): carries the 230 V alternating mains. Neutral (blue): completes the circuit, near 0 V. Earth (green/yellow): safety wire connected to any metal casing — if the live accidentally touches the casing, a large current flows to earth, blowing the fuse before anyone can be shocked.' },
    ],
    red: [
      { q: 'Two lamps labelled "230 V, 60 W" and "230 V, 100 W" are used. Compare their currents and resistances, and explain why they are connected in parallel (not series) in a home. [6]', marks: 6,
        modelAnswer: 'For the 60 W lamp: I = P/V = 60/230 ≈ 0.26 A. R = V²/P = 230²/60 ≈ 882 Ω.\nFor the 100 W lamp: I = 100/230 ≈ 0.43 A. R = 230²/100 ≈ 529 Ω.\nThe brighter lamp draws a larger current and has a lower resistance.\n\nIn a home they are wired in parallel because (1) each lamp gets the full 230 V mains p.d., so it runs at its rated brightness, (2) the current in each branch can be controlled independently by its own switch, and (3) if one lamp fails the other still works — a series arrangement would fail at the first broken lamp and split the p.d. between the two lamps so neither would run at rated power.' },
    ],
  },

  'P4': {
    green: [
      { q: 'State Newton\'s First Law of Motion.', marks: 1,
        modelAnswer: 'An object stays at rest, or continues to move in a straight line at constant velocity, unless acted on by a resultant (net) force.' },
      { q: 'Define momentum and state its unit.', marks: 2,
        modelAnswer: 'Momentum = mass × velocity (p = mv). It is a vector. Unit: kg·m/s.' },
    ],
    amber: [
      { q: 'A 1500 kg car accelerates from 10 m/s to 30 m/s in 5 s. Calculate (a) its acceleration, and (b) the resultant force on the car.', marks: 4,
        modelAnswer: '(a) a = (v − u)/t = (30 − 10)/5 = 4 m/s² (equation 1; calc 1).\n(b) F = m × a = 1500 × 4 = 6000 N (equation 1; calc 1).' },
      { q: 'Explain how a crumple zone reduces injury to a driver in a car crash. Use ideas about momentum and force.', marks: 3,
        modelAnswer: 'In a crash the driver\'s momentum must change to zero. Force = rate of change of momentum (F = Δp/t). The crumple zone deforms on impact, so the stopping time t is increased. A larger t means a smaller force acts on the driver for the same change in momentum, reducing injury.' },
    ],
    red: [
      { q: 'A student investigates stopping distance. They claim that "doubling the speed only doubles the stopping distance." Use physics to evaluate this claim and describe how the thinking and braking distances each change with speed. [6]', marks: 6,
        modelAnswer: 'Thinking distance = reaction time × speed. If reaction time is constant, thinking distance is proportional to speed — doubling the speed doubles the thinking distance.\n\nBraking distance comes from dissipating the car\'s kinetic energy (½mv²) through friction at the brakes: F × d = ½mv². So d ∝ v² for a given friction force — doubling the speed quadruples the braking distance.\n\nStopping distance = thinking + braking. At low speeds the thinking term dominates (≈ linear), but at higher speeds the v² braking term grows much faster. So the student\'s claim is wrong above about 20 mph: doubling the speed more than doubles the stopping distance. This is why speed limits in urban areas are set at 20–30 mph to keep stopping distances manageable.' },
    ],
  },

  'P5': {
    green: [
      { q: 'Name the three main types of nuclear radiation and state what each is.', marks: 3,
        modelAnswer: 'Alpha (α): a helium nucleus — 2 protons + 2 neutrons.\nBeta-minus (β⁻): a fast-moving electron from the nucleus.\nGamma (γ): a high-frequency/energy electromagnetic wave/photon.' },
      { q: 'Define half-life.', marks: 1,
        modelAnswer: 'The time taken for the number of unstable nuclei in a sample (or equivalently the activity) to fall to half its original value.' },
    ],
    amber: [
      { q: 'A sample has an initial activity of 4800 Bq and a half-life of 6 hours. Calculate the activity after 24 hours.', marks: 3,
        modelAnswer: 'Number of half-lives = 24 / 6 = 4. Activity = 4800 × (½)⁴ = 4800 / 16 = 300 Bq.' },
      { q: 'Write the nuclear equation for the alpha decay of uranium-238 (²³⁸₉₂U).', marks: 2,
        modelAnswer: '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. (Thorium-234 is the daughter nucleus. Mass number falls by 4 and proton number falls by 2.)' },
    ],
    red: [
      { q: 'Describe Rutherford\'s gold-foil scattering experiment and explain how the results led scientists to replace the plum pudding model with the nuclear model of the atom. [6]', marks: 6,
        modelAnswer: 'Experiment: a narrow beam of alpha particles was fired at a very thin sheet of gold foil, and a movable detector around the foil recorded where they ended up.\n\nObservations:\n• Most alpha particles passed straight through the foil with little/no deflection.\n• A small fraction were deflected through large angles.\n• Very occasionally (≈ 1 in 8000) an alpha bounced back almost the way it came.\n\nConclusions:\n• Most of the atom must be empty space — explaining why most alphas went straight through.\n• There must be a small, dense, positively charged region inside the atom — the nucleus — which repelled the positively charged alphas strongly enough to deflect some and bounce a few straight back.\n• Nearly all the mass of the atom must be concentrated in this tiny nucleus.\n\nThe plum pudding model (positive pudding with electrons dotted through it) could not explain the large backward deflections — a diffuse positive charge could never repel a fast alpha strongly enough. So it was replaced by the nuclear model: a small, dense, positive nucleus orbited by electrons in a mostly empty atom.' },
    ],
  },

  'P6': {
    green: [
      { q: 'State what happens to the particles of a solid when it is heated from room temperature up to (but not at) its melting point.', marks: 2,
        modelAnswer: 'The particles gain kinetic energy and vibrate more vigorously about their fixed positions; their temperature rises.' },
      { q: 'State the equation that defines density.', marks: 1,
        modelAnswer: 'density = mass / volume (ρ = m / V).' },
    ],
    amber: [
      { q: 'A regular metal block measures 2.0 cm × 3.0 cm × 5.0 cm and has a mass of 81 g. Calculate its density in g/cm³ and suggest the metal.', marks: 3,
        modelAnswer: 'Volume = 2.0 × 3.0 × 5.0 = 30 cm³. Density = 81 / 30 = 2.7 g/cm³. This is close to aluminium (2.7 g/cm³).' },
      { q: 'Explain why, during boiling, the temperature of water stays at 100 °C even though energy is still being supplied.', marks: 3,
        modelAnswer: 'At the boiling point the energy supplied is used to break the intermolecular forces between water molecules (increasing their potential energy), not to increase their kinetic energy. Because temperature depends on the average kinetic energy, the temperature stays constant until all the water has changed to steam.' },
    ],
    red: [
      { q: 'Using the particle model, explain how each of the following changes affects the pressure of a fixed mass of gas in a sealed container: (i) heating the gas at constant volume, (ii) compressing it at constant temperature. [6]', marks: 6,
        modelAnswer: '(i) Heating at constant volume:\n• Pressure is caused by particles colliding with the container walls and changing momentum.\n• Heating gives the particles more kinetic energy, so they move faster.\n• Faster particles collide with the walls more frequently, and with greater force/change of momentum per collision.\n• So the average force per unit area (pressure) increases. Pressure ∝ absolute temperature (in Kelvin) at constant V.\n\n(ii) Compressing at constant temperature:\n• The particles still move at the same average speed (temperature unchanged), so each collision has the same force/momentum change.\n• But the volume is smaller, so each particle covers less distance between collisions with the walls.\n• Collisions are therefore more frequent, giving more force per unit time on the walls.\n• Hence pressure rises. For an ideal gas, p × V = constant at constant T (Boyle\'s Law).' },
    ],
  },

};

if (typeof window !== 'undefined') window.PHYSICS_OCR_B_GCSE_WRITTEN = PHYSICS_OCR_B_GCSE_WRITTEN;
