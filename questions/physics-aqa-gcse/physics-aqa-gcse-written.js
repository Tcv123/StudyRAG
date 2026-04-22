/*
 * AQA GCSE Physics (8463) — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 1-3 marks), 'amber' (describe/explain/calculate 3-5 marks), 'red' (evaluate/discuss/multi-step 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 * Uses g = 9.8 N/kg, c = 3×10⁸ m/s
 */

const PHYSICS_AQA_GCSE_WRITTEN = {

  '4.1': {
    green: [
      {
        q: 'State four energy stores.',
        marks: 2, tier: 'green',
        modelAnswer: `• Kinetic (a moving object)\n• Gravitational potential (raised object)\n• Elastic potential (stretched/compressed spring)\n• Thermal (hot object)\n• Chemical (fuel, food, battery)\n• Nuclear / magnetic / electrostatic (any four)`
      },
      {
        q: 'State the equation linking kinetic energy, mass and speed, giving the units of each quantity.',
        marks: 2, tier: 'green',
        modelAnswer: `E_k = ½ m v²\n• E_k = kinetic energy in joules (J)\n• m = mass in kilograms (kg)\n• v = speed in metres per second (m/s)`
      },
      {
        q: 'State the principle of conservation of energy.',
        marks: 2, tier: 'green',
        modelAnswer: `Energy can be stored, transferred usefully or dissipated (wasted), but it cannot be created or destroyed. The total energy of a closed system stays the same.`
      },
      {
        q: 'Identify two renewable and two non-renewable energy resources.',
        marks: 2, tier: 'green',
        modelAnswer: `• Renewable (any two): wind, solar, hydroelectric, tidal, wave, geothermal, biofuel.\n• Non-renewable (any two): coal, oil, natural gas, nuclear fuel (uranium).`
      },
    ],
    amber: [
      {
        q: 'A car of mass 1200 kg accelerates from rest to 15 m/s. Calculate the increase in kinetic energy. Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `E_k = ½ m v²\nE_k = ½ × 1200 × 15²\nE_k = ½ × 1200 × 225\nE_k = 135,000 J = 135 kJ`
      },
      {
        q: 'A 0.5 kg ball is raised to a height of 2.0 m. Calculate the gravitational potential energy gained (g = 9.8 N/kg). Then state the kinetic energy at the moment just before it hits the ground, assuming no air resistance.',
        marks: 4, tier: 'amber',
        modelAnswer: `E_p = m g h\nE_p = 0.5 × 9.8 × 2.0 = 9.8 J\nBy conservation of energy, with no air resistance, all GPE transfers to KE as the ball falls.\nTherefore E_k at impact = 9.8 J.`
      },
      {
        q: 'Explain, using the specific heat capacity equation, why water is used in central heating systems rather than another liquid with a lower specific heat capacity.',
        marks: 4, tier: 'amber',
        modelAnswer: `ΔE = m c Δθ, so the thermal energy stored in a material depends on its specific heat capacity c.\n• Water has a very high specific heat capacity (≈ 4200 J/kg°C).\n• This means a given mass of water can store a large amount of thermal energy for a relatively small rise in temperature.\n• The hot water can then be pumped around the house, transferring this energy to radiators and cooling only slightly, so it heats rooms efficiently.\n• A liquid with a lower c would cool more quickly and transfer less energy per kg, making the system less effective.`
      },
      {
        q: 'A kettle transfers 90,000 J of energy. 72,000 J is transferred usefully to heat the water. Calculate the efficiency of the kettle as a decimal and as a percentage.',
        marks: 3, tier: 'amber',
        modelAnswer: `Efficiency = useful energy transferred ÷ total energy supplied\nEfficiency = 72,000 ÷ 90,000 = 0.80\n= 80%`
      },
    ],
    red: [
      {
        q: 'Compare the use of fossil fuels and renewable resources (wind and solar) for electricity generation. In your answer, evaluate reliability, environmental impact and cost.',
        marks: 6, tier: 'red',
        modelAnswer: `Fossil fuels (coal, oil, gas):\n• Reliability: very reliable — can be burned on demand to meet peak demand at any time.\n• Environmental: release CO₂ causing the enhanced greenhouse effect and climate change; also release SO₂ (acid rain) and particulates (air pollution); finite resource — will run out.\n• Cost: fuel and extraction costs are ongoing and prices are volatile; power station build cost moderate.\n\nWind and solar:\n• Reliability: unreliable/intermittent — wind does not always blow, sun does not always shine; need storage or backup generation.\n• Environmental: no CO₂ released during operation, so do not contribute to climate change; visual impact (wind turbines), land use for solar farms; manufacture has some emissions.\n• Cost: high initial set-up cost but very low running cost (no fuel); costs falling rapidly.\n\nEvaluation: fossil fuels currently provide reliable baseload power but are unsustainable and damaging. Renewables are environmentally much better and cheap to run but need energy storage or a diverse mix (plus nuclear/hydro) to cover intermittency. Long-term transition to renewables is essential to reduce climate change, even though reliability remains a challenge.`
      },
      {
        q: 'A 2500 W electric heater is used for 30 minutes to warm 5.0 kg of water. The water rises in temperature from 20 °C to 80 °C. Specific heat capacity of water = 4200 J/kg°C. (a) Calculate the total energy supplied by the heater. (b) Calculate the useful energy transferred to the water. (c) Calculate the efficiency as a percentage and suggest one reason it is not 100%.',
        marks: 8, tier: 'red',
        modelAnswer: `(a) Energy supplied by heater:\nE = P × t\nt = 30 × 60 = 1800 s\nE = 2500 × 1800 = 4,500,000 J = 4.5 MJ\n\n(b) Useful energy (heating the water):\nΔE = m c Δθ\nΔθ = 80 − 20 = 60 °C\nΔE = 5.0 × 4200 × 60 = 1,260,000 J = 1.26 MJ\n\n(c) Efficiency:\nEfficiency = useful ÷ total = 1,260,000 ÷ 4,500,000 = 0.28 = 28%\n\nReasons efficiency is not 100% (any one):\n• Thermal energy is dissipated to the surroundings (the container, air and bench heat up).\n• Some energy is lost through evaporation of water.\n• The heating element itself has to warm up, storing some energy as thermal energy in the metal.`
      },
    ],
  },

  '4.2': {
    green: [
      {
        q: 'State the equation linking charge, current and time, and give the units of each.',
        marks: 2, tier: 'green',
        modelAnswer: `Q = I t\n• Q = charge in coulombs (C)\n• I = current in amperes (A)\n• t = time in seconds (s)`
      },
      {
        q: 'State the frequency and voltage of the UK mains electricity supply and whether it is a.c. or d.c.',
        marks: 2, tier: 'green',
        modelAnswer: `• Frequency = 50 Hz\n• Voltage (potential difference) ≈ 230 V\n• Supply is alternating current (a.c.)`
      },
      {
        q: 'State the colour and function of each of the three wires in a UK three-pin plug.',
        marks: 3, tier: 'green',
        modelAnswer: `• Live wire — brown — carries the alternating p.d. from the supply (around 230 V).\n• Neutral wire — blue — completes the circuit; at or close to 0 V.\n• Earth wire — green and yellow stripes — safety wire at 0 V; carries current safely to ground if a fault occurs.`
      },
      {
        q: 'State what is meant by a series circuit and a parallel circuit.',
        marks: 2, tier: 'green',
        modelAnswer: `• Series circuit: components are connected one after the other in a single loop, so the same current flows through each component.\n• Parallel circuit: components are connected on separate branches, so the potential difference across each branch is the same and the current splits between branches.`
      },
    ],
    amber: [
      {
        q: 'A current of 0.25 A flows through a resistor for 2 minutes. Calculate the charge that flows. Then calculate the energy transferred if the p.d. across the resistor is 12 V.',
        marks: 4, tier: 'amber',
        modelAnswer: `Charge:\nQ = I t\nt = 2 × 60 = 120 s\nQ = 0.25 × 120 = 30 C\n\nEnergy:\nE = Q V\nE = 30 × 12 = 360 J`
      },
      {
        q: 'Describe the shape of the I–V graph for (i) a fixed resistor at constant temperature and (ii) a filament lamp, and explain the shape of the filament lamp graph.',
        marks: 4, tier: 'amber',
        modelAnswer: `(i) Fixed resistor: a straight line through the origin — current is directly proportional to p.d. (ohmic conductor, constant resistance).\n(ii) Filament lamp: an S-shaped curve passing through the origin; gradient becomes shallower as p.d. increases in either direction.\nExplanation: as the current increases, the filament gets hotter. The metal ions vibrate more, so electrons collide with them more often. This increases resistance, so current rises less rapidly for each increase in p.d.`
      },
      {
        q: 'A 2.3 kW kettle is connected to the 230 V mains supply. Calculate (a) the current through the kettle and (b) the resistance of the heating element.',
        marks: 4, tier: 'amber',
        modelAnswer: `(a) Current:\nP = V I  →  I = P / V\nI = 2300 / 230 = 10 A\n\n(b) Resistance:\nV = I R  →  R = V / I\nR = 230 / 10 = 23 Ω`
      },
      {
        q: 'Explain how a step-up transformer is used in the National Grid and why transformers are essential for efficient power transmission.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A step-up transformer at the power station increases the potential difference (e.g. from 25 kV to 400 kV) before transmission.\n• For a given power (P = VI), a higher V means a lower current I in the transmission lines.\n• Power lost as heat in the cables is P_loss = I² R, so reducing I greatly reduces energy dissipated as heat in the wires.\n• At the consumer end, step-down transformers reduce the p.d. back to a safe level (230 V) for use in homes.\nTherefore transformers allow electricity to be transmitted long distances efficiently with minimal energy loss.`
      },
    ],
    red: [
      {
        q: 'Two 6 Ω resistors are connected in (a) series and (b) parallel to a 12 V battery with negligible internal resistance. For each arrangement calculate: the total resistance, the total current from the battery, the current through each resistor, and the total power dissipated. Comment on which arrangement dissipates more power.',
        marks: 8, tier: 'red',
        modelAnswer: `(a) Series:\n• Total resistance R = 6 + 6 = 12 Ω\n• Total current I = V / R = 12 / 12 = 1.0 A\n• Same current through each resistor: 1.0 A\n• Total power P = V I = 12 × 1.0 = 12 W\n\n(b) Parallel:\n• Total resistance: 1/R = 1/6 + 1/6 = 2/6, so R = 3 Ω\n• Total current from battery I = V / R = 12 / 3 = 4.0 A\n• Each branch has the full 12 V; current in each = 12 / 6 = 2.0 A\n• Total power P = V I = 12 × 4.0 = 48 W\n\nComment: the parallel arrangement dissipates 48 W — four times the series arrangement's 12 W. This is because parallel gives a lower total resistance, so a larger current flows for the same p.d., and power = V × I. In homes, appliances are connected in parallel so each gets the full 230 V and can be switched independently.`
      },
      {
        q: 'Evaluate the statement: "Double-insulated appliances do not need an earth wire, so the earth wire is unnecessary for safety." Discuss the role of the earth wire and fuse in protecting users of normal metal-cased appliances.',
        marks: 6, tier: 'red',
        modelAnswer: `The statement is only partly correct. The earth wire is essential for safety on metal-cased appliances, but is indeed not needed for double-insulated appliances.\n\nMetal-cased (earthed) appliances:\n• If the live wire becomes loose and touches the metal case, the case would be at 230 V. A user touching it would receive a severe/fatal shock.\n• The earth wire provides a very low-resistance path from the case to ground. A large current surges through the earth and live wires.\n• This large current melts the fuse (or trips the circuit breaker / RCD) in the live wire, cutting off the supply before the user can be harmed.\n• So the earth wire + fuse work together as the safety system.\n\nDouble-insulated appliances (e.g. plastic-cased hairdryer):\n• The plastic outer case cannot conduct, so there is no path for current to reach the user even if a fault occurs inside.\n• These have only live and neutral wires (no earth needed) and are marked with a square-in-square symbol.\n\nEvaluation: the earth wire is unnecessary only for double-insulated appliances. For all appliances with conducting (metal) cases, the earth wire is a critical safety feature, and the fuse/RCD is needed in all cases to cut off faulty currents. Therefore the statement is an over-generalisation and dangerously misleading.`
      },
    ],
  },

  '4.3': {
    green: [
      {
        q: 'State the equation linking density, mass and volume, and give the units of each.',
        marks: 2, tier: 'green',
        modelAnswer: `ρ = m / V\n• ρ = density in kg/m³\n• m = mass in kg\n• V = volume in m³`
      },
      {
        q: 'State what is meant by the internal energy of a system.',
        marks: 2, tier: 'green',
        modelAnswer: `The internal energy of a system is the total kinetic energy and potential energy of all the particles (atoms and molecules) that make up the system.`
      },
      {
        q: 'State what is meant by specific latent heat of fusion.',
        marks: 2, tier: 'green',
        modelAnswer: `The specific latent heat of fusion is the amount of energy required to change the state of 1 kg of a substance from solid to liquid (or liquid to solid) with no change in temperature. Unit: J/kg.`
      },
      {
        q: 'Identify the arrangement and movement of particles in a solid, a liquid and a gas.',
        marks: 3, tier: 'green',
        modelAnswer: `• Solid: particles are packed closely in a regular arrangement; they vibrate about fixed positions.\n• Liquid: particles are close together but randomly arranged; they can move past each other.\n• Gas: particles are far apart and randomly arranged; they move quickly in all directions.`
      },
    ],
    amber: [
      {
        q: 'A block of metal has a mass of 2.7 kg and a volume of 1.0 × 10⁻³ m³. Calculate its density and identify the likely metal from the list: aluminium (2700 kg/m³), iron (7900 kg/m³), lead (11,300 kg/m³).',
        marks: 3, tier: 'amber',
        modelAnswer: `ρ = m / V\nρ = 2.7 / (1.0 × 10⁻³)\nρ = 2700 kg/m³\nThe metal is aluminium.`
      },
      {
        q: 'Describe how the arrangement and motion of particles change when a solid is heated and turns into a liquid and then into a gas. Refer to internal energy in your answer.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As the solid is heated, particles gain kinetic energy and vibrate more — internal energy increases and temperature rises.\n• At the melting point, the energy supplied is used to break the bonds between particles, not raise temperature. Particles move out of their fixed positions, allowing them to flow — it becomes a liquid. Potential energy of particles increases.\n• Further heating increases kinetic energy of the liquid particles — temperature rises.\n• At the boiling point, energy supplied breaks the remaining bonds. Particles separate completely and move freely and quickly — it becomes a gas. Potential energy increases again.\n• In each change of state, internal energy increases even though temperature stays constant during the change.`
      },
      {
        q: 'Calculate the energy required to melt 0.5 kg of ice at 0 °C. Specific latent heat of fusion of ice = 334,000 J/kg.',
        marks: 2, tier: 'amber',
        modelAnswer: `E = m L\nE = 0.5 × 334,000\nE = 167,000 J = 167 kJ`
      },
      {
        q: 'Explain, in terms of particles, why the pressure of a gas in a sealed container increases when the gas is heated at constant volume.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Pressure is caused by gas particles colliding with the walls of the container and exerting forces on them.\n• Heating the gas transfers energy to the particles, increasing their kinetic energy.\n• The particles therefore move faster on average.\n• They hit the walls more frequently and with greater force per collision.\n• With the volume fixed, this increased force per unit area on the walls means the pressure increases.`
      },
    ],
    red: [
      {
        q: 'A 2.0 kW kettle contains 0.80 kg of water at 20 °C. Specific heat capacity of water = 4200 J/kg°C, specific latent heat of vaporisation of water = 2,260,000 J/kg. (a) Calculate the time taken to heat the water to 100 °C, assuming no losses. (b) Calculate the additional time to boil 0.20 kg of the water into steam. (c) Explain why the actual time would be longer than your answer.',
        marks: 8, tier: 'red',
        modelAnswer: `(a) Energy to heat water to 100 °C:\nΔE = m c Δθ\nΔθ = 100 − 20 = 80 °C\nΔE = 0.80 × 4200 × 80 = 268,800 J\nTime = Energy / Power = 268,800 / 2000 = 134.4 s ≈ 134 s (≈ 2 min 14 s)\n\n(b) Energy to boil 0.20 kg of water:\nE = m L = 0.20 × 2,260,000 = 452,000 J\nTime = 452,000 / 2000 = 226 s (≈ 3 min 46 s)\n\n(c) The actual time is longer because:\n• Thermal energy is continuously transferred to the surroundings (the kettle body, the air, the work surface) as the water heats up — not all the electrical energy warms the water.\n• The kettle itself must heat up, absorbing some energy.\n• The kettle is not 100% efficient, so the power delivered to the water is less than 2.0 kW.`
      },
      {
        q: 'A student heats a beaker of wax steadily and records a heating curve (temperature against time). The curve shows the temperature rising, then staying constant, then rising again. Explain the shape of this graph in terms of energy transfer and particle behaviour, and state what the flat section represents.',
        marks: 6, tier: 'red',
        modelAnswer: `• First rising section (solid wax): energy from the heater is transferred to the wax and increases the kinetic energy of the particles. They vibrate more strongly about fixed positions, so the temperature rises.\n• Flat (horizontal) section: the wax is melting. Energy continues to be supplied at the same rate, but is used to break the bonds between particles rather than increase their kinetic energy. Potential energy of particles increases; kinetic energy stays the same. Because temperature is a measure of average KE, the temperature stays constant even though internal energy is increasing.\n• The flat section represents the melting point of the wax. The amount of energy per kg needed for this change is the specific latent heat of fusion (E = m L).\n• Second rising section (liquid wax): once all wax is melted, further energy again increases the kinetic energy of the particles, so the temperature rises again.\n\nSummary: temperature rises when KE increases; stays constant during a change of state when energy is going into PE to break bonds.`
      },
    ],
  },

  '4.4': {
    green: [
      {
        q: 'State the approximate radius of an atom and the radius of the nucleus.',
        marks: 2, tier: 'green',
        modelAnswer: `• Radius of an atom ≈ 1 × 10⁻¹⁰ m\n• Radius of a nucleus ≈ 1 × 10⁻¹⁴ m (around 10,000 times smaller than the atom).`
      },
      {
        q: 'State what is meant by an isotope.',
        marks: 2, tier: 'green',
        modelAnswer: `Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons. They have the same atomic number but different mass numbers.`
      },
      {
        q: 'State the nature of alpha, beta and gamma radiation.',
        marks: 3, tier: 'green',
        modelAnswer: `• Alpha (α): a helium nucleus — 2 protons + 2 neutrons.\n• Beta (β): a high-speed electron emitted from the nucleus when a neutron changes into a proton.\n• Gamma (γ): high-frequency electromagnetic wave / photon emitted from the nucleus.`
      },
      {
        q: 'State what is meant by the half-life of a radioactive isotope.',
        marks: 2, tier: 'green',
        modelAnswer: `The half-life is the average time taken for the number of radioactive nuclei in a sample to halve, or equivalently the time for the activity (count rate) from the sample to fall to half its initial value.`
      },
    ],
    amber: [
      {
        q: 'Describe how the nuclear model of the atom developed from the plum pudding model. Refer to the evidence from Rutherford\'s alpha scattering experiment.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The plum pudding model (Thomson) described the atom as a ball of positive charge with electrons embedded in it.\n• In Rutherford's alpha scattering experiment, alpha particles were fired at thin gold foil. Most passed straight through, some were deflected, and a very few bounced back.\n• Straight-through path: most of the atom is empty space.\n• Small deflections: something positively charged inside must be repelling the positive alphas.\n• Bouncing back: there must be a very small, dense, concentrated region of positive charge — the nucleus.\n• This led to the nuclear model: a tiny dense positive nucleus at the centre with electrons orbiting. Bohr later refined this by placing electrons in fixed energy shells.`
      },
      {
        q: 'A radioactive isotope has a half-life of 6 hours. A sample has an initial activity of 800 Bq. Calculate the activity after 24 hours and state the net decline in activity as a ratio.',
        marks: 4, tier: 'amber',
        modelAnswer: `24 hours = 24 / 6 = 4 half-lives.\nActivity halves each half-life:\n• After 1 half-life: 400 Bq\n• After 2 half-lives: 200 Bq\n• After 3 half-lives: 100 Bq\n• After 4 half-lives: 50 Bq\nNet decline ratio: 800 / 50 = 16, so activity has dropped by a factor of 16 (to 1/16 of the original).`
      },
      {
        q: 'Explain the difference between contamination and irradiation. Give one example of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Contamination: when unwanted radioactive atoms get onto or into other objects (including skin, food or water). The material remains radioactive and continues to emit radiation until the atoms decay or are removed.\nExample: radioactive dust from a nuclear accident settling on clothing.\n• Irradiation: when an object or person is exposed to radiation from an external source. The object/person does NOT become radioactive; irradiation stops as soon as the source is removed or shielded.\nExample: having a medical X-ray or sterilising food by passing it near a gamma source.`
      },
      {
        q: 'Describe the process of nuclear fission in a uranium-235 reactor. Include how a chain reaction is sustained.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A slow-moving neutron is absorbed by a uranium-235 nucleus, making it unstable.\n• The unstable nucleus splits (fissions) into two smaller daughter nuclei of roughly equal mass.\n• The fission also releases 2 or 3 fast neutrons and a large amount of energy (as kinetic energy of products and gamma radiation).\n• If at least one of these neutrons is slowed (by a moderator) and absorbed by another U-235 nucleus, another fission occurs — this is the start of a chain reaction.\n• In a reactor, control rods (e.g. boron) absorb excess neutrons so that on average one neutron from each fission goes on to cause the next — keeping the reaction steady and controlled.`
      },
    ],
    red: [
      {
        q: 'Compare nuclear fission and nuclear fusion as methods of generating energy. In your answer include the processes, the fuels used, the products, and the advantages and disadvantages of each for electricity generation.',
        marks: 8, tier: 'red',
        modelAnswer: `Nuclear fission:\n• Process: a heavy nucleus (e.g. U-235) absorbs a neutron and splits into two smaller daughter nuclei, releasing 2–3 neutrons and energy.\n• Fuel: uranium-235 or plutonium-239 — finite, must be mined and enriched.\n• Products: radioactive daughter nuclei (highly dangerous, long-lived waste), neutrons, energy.\n• Advantages: very high energy output per kg of fuel; no CO₂ emissions during operation; reliable baseload power.\n• Disadvantages: produces long-lived radioactive waste requiring safe storage for thousands of years; risk of accidents (e.g. meltdown — Chernobyl, Fukushima); high build cost; potential for weapons proliferation.\n\nNuclear fusion:\n• Process: two light nuclei (e.g. deuterium + tritium, isotopes of hydrogen) are forced together at extreme temperature and pressure to form a heavier nucleus (helium) plus a neutron, releasing energy.\n• Fuel: isotopes of hydrogen — deuterium from seawater (practically unlimited); tritium bred in reactor.\n• Products: helium (non-radioactive), neutrons, huge amounts of energy.\n• Advantages: virtually unlimited fuel; much more energy per kg than fission; little long-lived radioactive waste; no CO₂; no chain-reaction runaway risk.\n• Disadvantages: extremely difficult to achieve — needs temperatures ~100 million °C and plasma confinement; currently experimental (e.g. ITER), no net-energy commercial reactor yet.\n\nConclusion: fission is used commercially today and provides steady low-carbon electricity, but has a waste/accident problem. Fusion would be the ideal long-term solution — cleaner, safer, abundant fuel — but the technology is not yet viable.`
      },
      {
        q: 'A radioactive source is being chosen for use as a medical tracer inside a patient\'s body. Evaluate whether an alpha, beta or gamma emitter with a half-life of (a) 6 hours or (b) 6000 years would be most suitable.',
        marks: 6, tier: 'red',
        modelAnswer: `Type of radiation:\n• Alpha: very strongly ionising but stopped by a few cm of air/skin. Would not pass out of the body to be detected — unsuitable for a tracer. Also highly damaging to cells inside the body.\n• Beta: moderately ionising, penetrates a few mm–cm of tissue. Some would escape the body but much would be absorbed, causing unnecessary damage.\n• Gamma: weakly ionising, highly penetrating — easily passes through the body and is detected outside. Causes least damage to cells inside. Most suitable.\n\nHalf-life:\n• 6 hours: long enough to be injected, circulate, and be imaged, but short enough that activity falls rapidly and the patient does not remain radioactive for long. Suitable.\n• 6000 years: the source would remain active inside the patient for life, continually irradiating them and increasing cancer risk. Unsuitable.\n\nEvaluation: the best choice is a gamma emitter with a short half-life of a few hours — e.g. technetium-99m is used in real medicine. This combines detectability outside the body with minimal long-term damage. The 6000-year half-life isotope is not suitable regardless of radiation type.`
      },
    ],
  },

  '4.5': {
    green: [
      {
        q: 'State the difference between a scalar and a vector quantity, giving one example of each.',
        marks: 2, tier: 'green',
        modelAnswer: `• Scalar: a quantity that has magnitude (size) only. Example: mass, speed, distance, energy, temperature.\n• Vector: a quantity that has both magnitude and direction. Example: force, velocity, displacement, acceleration, momentum.`
      },
      {
        q: 'State Newton\'s First Law of motion.',
        marks: 2, tier: 'green',
        modelAnswer: `An object will remain at rest, or continue to move at a constant velocity in a straight line, unless acted on by a resultant (unbalanced) force.`
      },
      {
        q: 'State Hooke\'s Law and give the equation linking force, spring constant and extension, with units.',
        marks: 3, tier: 'green',
        modelAnswer: `Hooke's Law: the extension of an elastic object (e.g. a spring) is directly proportional to the force applied, provided the limit of proportionality is not exceeded.\nEquation: F = k e\n• F = force in newtons (N)\n• k = spring constant in newtons per metre (N/m)\n• e = extension in metres (m)`
      },
      {
        q: 'State the equation for the moment of a force and give the units.',
        marks: 2, tier: 'green',
        modelAnswer: `Moment = Force × perpendicular distance from the pivot\nM = F d\n• M in newton metres (Nm)\n• F in newtons (N)\n• d in metres (m)`
      },
    ],
    amber: [
      {
        q: 'A car of mass 1200 kg is accelerating at 2.5 m/s². Calculate the resultant force on the car. If the driving force is 4500 N, calculate the total resistive force.',
        marks: 4, tier: 'amber',
        modelAnswer: `Resultant force:\nF = m a\nF = 1200 × 2.5 = 3000 N\n\nResistive force:\nResultant = Driving − Resistive\n3000 = 4500 − Resistive\nResistive = 4500 − 3000 = 1500 N`
      },
      {
        q: 'A car is travelling at 20 m/s when the driver applies the brakes. The car decelerates at 5.0 m/s² and comes to rest. (a) Calculate the braking distance. (b) State two factors that could increase the braking distance.',
        marks: 4, tier: 'amber',
        modelAnswer: `(a) Using v² − u² = 2 a s (with a negative for deceleration):\n0² − 20² = 2 × (−5.0) × s\n−400 = −10 s\ns = 40 m\nBraking distance = 40 m.\n\n(b) Any two:\n• Worn brakes or brake pads (less friction).\n• Wet or icy road (reduced friction between tyres and road).\n• Worn tyres (less grip).\n• Greater mass of vehicle (loaded car).\n• Higher initial speed.`
      },
      {
        q: 'Explain Newton\'s Third Law of motion and give one everyday example.',
        marks: 3, tier: 'amber',
        modelAnswer: `Newton's Third Law: whenever two objects interact, the forces they exert on each other are equal in size and opposite in direction.\nThe two forces act on different objects and are of the same type.\nExample (any one):\n• When you walk, your foot pushes back on the ground; the ground pushes you forwards with an equal force.\n• A swimmer pushes water backwards; the water pushes the swimmer forwards.\n• A rocket's engines push exhaust gases down; the gases push the rocket up.`
      },
      {
        q: 'A spanner of length 0.25 m is used to tighten a nut. The force applied at the end of the spanner is 80 N, at right angles to the spanner. Calculate the moment. Explain how using a longer spanner would affect the moment for the same applied force.',
        marks: 4, tier: 'amber',
        modelAnswer: `Moment:\nM = F × d\nM = 80 × 0.25 = 20 Nm\n\nExplanation:\nMoment is directly proportional to the perpendicular distance from the pivot. Using a longer spanner increases d, so for the same force the moment is larger. This makes it easier to turn the nut (less force needed for the same turning effect).`
      },
    ],
    red: [
      {
        q: 'A car of mass 1000 kg is travelling at 15 m/s. The driver\'s reaction time is 0.7 s and the car then decelerates uniformly at 5.0 m/s² until it stops. (a) Calculate the thinking distance. (b) Calculate the braking distance. (c) State the overall stopping distance. (d) Calculate the braking force needed. (e) State two factors that would increase the thinking distance and two that would increase the braking distance.',
        marks: 8, tier: 'red',
        modelAnswer: `(a) Thinking distance:\nd = v × t_reaction = 15 × 0.7 = 10.5 m\n\n(b) Braking distance (using v² − u² = 2 a s):\n0 − 15² = 2 × (−5.0) × s\n−225 = −10 s\ns = 22.5 m\n\n(c) Overall stopping distance = 10.5 + 22.5 = 33 m\n\n(d) Braking force:\nF = m a = 1000 × 5.0 = 5000 N (opposing motion)\n\n(e) Factors increasing thinking distance (any two):\n• Tiredness / fatigue\n• Alcohol or drugs\n• Distractions (phone, passengers)\n• Higher speed (same reaction time × greater v = greater distance)\n\nFactors increasing braking distance (any two):\n• Wet or icy road (less friction)\n• Worn tyres or worn brakes\n• Greater mass (heavier vehicle — loaded car)\n• Higher initial speed (increases as v²)`
      },
      {
        q: 'Evaluate how car safety features (seat belts, crumple zones and airbags) reduce injury in a collision. Refer to momentum and the equation F = Δp / Δt in your answer.',
        marks: 6, tier: 'red',
        modelAnswer: `In a collision, a passenger has momentum p = m v. When the car stops, the passenger's momentum must change to zero (Δp is fixed by the mass and speed).\nThe force on the passenger is given by F = change in momentum / time taken for change = Δp / Δt.\nTherefore, for a fixed Δp, increasing the time Δt over which the passenger decelerates reduces the force F — reducing injury.\n\n• Seat belts: stretch slightly during impact, extending the time over which the passenger stops, reducing F. They also spread the force over a wider area (chest and hips) rather than concentrating it.\n• Crumple zones: the front and rear of the car are designed to crumple and absorb energy on impact. This extends the collision time Δt, reducing the force on the passengers. They also absorb kinetic energy, reducing the impact transferred.\n• Airbags: inflate rapidly on impact and provide a soft cushion between the passenger and the hard surfaces (dashboard, steering wheel). The airbag compresses, increasing Δt, reducing force. It also spreads the force over a larger area of the body.\n\nEvaluation: all three work on the same principle — increasing Δt and/or spreading force over a larger area reduces the deceleration/pressure experienced. Together they greatly reduce death and serious injury in collisions, though they cannot eliminate risk, especially at very high speeds.`
      },
    ],
  },

  '4.6': {
    green: [
      {
        q: 'State the difference between a transverse and a longitudinal wave, giving one example of each.',
        marks: 2, tier: 'green',
        modelAnswer: `• Transverse wave: oscillations are perpendicular (at right angles) to the direction of energy transfer. Example: water waves, light / all EM waves.\n• Longitudinal wave: oscillations are parallel to the direction of energy transfer (alternating compressions and rarefactions). Example: sound waves, seismic P-waves.`
      },
      {
        q: 'State the wave equation linking speed, frequency and wavelength, giving the units of each.',
        marks: 2, tier: 'green',
        modelAnswer: `v = f λ\n• v = wave speed in metres per second (m/s)\n• f = frequency in hertz (Hz)\n• λ = wavelength in metres (m)`
      },
      {
        q: 'List the seven parts of the electromagnetic spectrum in order of increasing frequency.',
        marks: 3, tier: 'green',
        modelAnswer: `In order of increasing frequency (and decreasing wavelength):\n• Radio waves\n• Microwaves\n• Infrared\n• Visible light\n• Ultraviolet\n• X-rays\n• Gamma rays`
      },
      {
        q: 'State the speed of electromagnetic waves in a vacuum.',
        marks: 1, tier: 'green',
        modelAnswer: `3 × 10⁸ m/s (300,000,000 m/s).`
      },
    ],
    amber: [
      {
        q: 'A sound wave has a frequency of 440 Hz. The speed of sound in air is 340 m/s. Calculate the wavelength.',
        marks: 3, tier: 'amber',
        modelAnswer: `v = f λ  →  λ = v / f\nλ = 340 / 440\nλ = 0.77 m (to 2 s.f.)`
      },
      {
        q: 'Describe how a convex (converging) lens forms a real image of a distant object, and state two differences between a real and a virtual image.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Parallel rays of light from a distant object reach the lens and are refracted (bent) towards each other.\n• The rays meet (converge) at the principal focus, forming a real image on the opposite side of the lens.\n• The image is inverted and smaller than the object (for a very distant object, formed at the focal length).\n\nDifferences between real and virtual images:\n• A real image can be projected onto a screen; a virtual image cannot.\n• Light rays actually meet at a real image; at a virtual image the rays only appear to come from the image point (they do not meet there).\n• (Additional) real images from a convex lens are inverted; virtual images are upright.`
      },
      {
        q: 'Explain how different parts of the electromagnetic spectrum are used in communications. Give two examples.',
        marks: 4, tier: 'amber',
        modelAnswer: `EM waves can transfer information over long distances without a material medium, at the speed of light.\nExamples (any two):\n• Radio waves: long wavelengths diffract around hills and can reflect off the ionosphere — used for TV and radio broadcasts.\n• Microwaves: pass through the atmosphere — used for satellite communications and mobile phones.\n• Infrared: short-range line-of-sight — used in TV remote controls and optical fibres (short-wave IR).\n• Visible light: used in fibre-optic communications (high data rate; total internal reflection keeps the light in the fibre).`
      },
      {
        q: 'Explain the dangers of ultraviolet, X-rays and gamma rays to the human body, and how exposure is limited.',
        marks: 4, tier: 'amber',
        modelAnswer: `• UV, X-rays and gamma rays are ionising. They have enough energy to knock electrons out of atoms, producing charged particles that can damage DNA and other molecules in cells.\n• This can cause cell mutations that may lead to cancer.\n• UV specifically causes premature skin ageing and skin cancer, and can damage eyes.\n• X-rays and gamma rays penetrate deeper into the body and can damage internal organs.\n\nLimiting exposure:\n• Wear sunscreen and cover skin to reduce UV exposure.\n• Medical staff use lead aprons/screens and leave the room during X-ray/CT scans.\n• Radiation doses are measured in sieverts (Sv) and kept as low as reasonably achievable (ALARA).`
      },
    ],
    red: [
      {
        q: 'Describe the process of refraction when a ray of light passes from air into glass and back out into air on the other side. Include a description of what happens to speed, wavelength, frequency, and direction, and explain why this happens.',
        marks: 6, tier: 'red',
        modelAnswer: `Entering the glass (air → glass):\n• Light travels slower in glass than in air because glass is optically denser.\n• The wavelength decreases proportionally (v = f λ; f is unchanged).\n• The frequency stays the same — frequency is set by the source.\n• The ray bends towards the normal at the boundary, because the side of the wavefront entering the glass first slows down before the other side, turning the wave.\n\nInside the glass: the light travels in a straight line at constant reduced speed.\n\nLeaving the glass (glass → air):\n• The light speeds up again.\n• Wavelength increases back to its original value.\n• Frequency remains unchanged.\n• The ray bends away from the normal at this boundary, for the same reason (the side leaving the glass first speeds up).\n\nOverall: if the two surfaces are parallel (e.g. a flat block), the emerging ray is parallel to the incident ray, but laterally displaced. The wave's speed and wavelength change at each boundary; frequency and colour (for light) do not change.`
      },
      {
        q: 'Describe black-body radiation and explain how the Earth\'s temperature is determined by the balance between incoming radiation from the Sun and radiation emitted by the Earth. Discuss how changes to this balance can affect global temperature.',
        marks: 8, tier: 'red',
        modelAnswer: `Black-body radiation:\n• A perfect black body absorbs all incident radiation and is also a perfect emitter.\n• All bodies emit a range of EM wavelengths; the hotter the body, the shorter the peak wavelength and the greater the total intensity emitted.\n• The Sun is very hot (~5800 K), so it emits mainly visible light and some UV and IR.\n• The Earth is much cooler (~288 K) so it emits mainly long-wave infrared.\n\nBalance of radiation:\n• Radiation from the Sun is absorbed by the Earth's surface and atmosphere, warming the Earth.\n• The warm Earth re-emits infrared radiation back out to space.\n• When the power absorbed equals the power emitted, the Earth's temperature stays constant (thermal equilibrium).\n\nChanges to the balance:\n• If the atmosphere contains more greenhouse gases (CO₂, CH₄, H₂O vapour), more of the outgoing IR is absorbed and re-emitted back downwards. Less energy escapes to space, so the Earth must warm up until the balance is restored at a higher temperature — the enhanced greenhouse effect.\n• A change in the Sun's output, or changes to Earth's reflectivity (albedo — e.g. ice cover, cloud cover), also shift the balance.\n• Increased reflectivity (more ice/clouds) cools the Earth; decreased reflectivity (less ice, more dark ocean/land) warms it — a feedback effect.\n\nConclusion: the Earth's average temperature is determined by the balance between absorbed solar radiation and emitted IR radiation. Human activity, by increasing greenhouse gas concentrations, is pushing the balance towards higher temperatures — this is the cause of global warming and climate change.`
      },
    ],
  },

  '4.7': {
    green: [
      {
        q: 'State what is meant by a magnetic field and name one device that produces a magnetic field when a current flows.',
        marks: 2, tier: 'green',
        modelAnswer: `A magnetic field is a region around a magnet or a current-carrying conductor where another magnet or magnetic material experiences a force.\nExample of a current-producing magnetic field: a solenoid (coil of wire) or a wire carrying current, or an electromagnet.`
      },
      {
        q: 'State the equation linking force on a current-carrying wire in a magnetic field to magnetic flux density, current and length, giving units.',
        marks: 2, tier: 'green',
        modelAnswer: `F = B I L\n• F = force in newtons (N)\n• B = magnetic flux density in tesla (T)\n• I = current in amperes (A)\n• L = length of wire in the field in metres (m)`
      },
      {
        q: 'State Fleming\'s left-hand rule and what each finger represents.',
        marks: 3, tier: 'green',
        modelAnswer: `Hold the thumb, first finger and second finger of the left hand at right angles to each other:\n• First finger — direction of the magnetic Field (N to S).\n• seCond finger — direction of conventional Current (+ to −).\n• Thumb — direction of the Thrust (force / motion) on the wire.`
      },
      {
        q: 'State the transformer equation linking primary and secondary voltages and turns.',
        marks: 2, tier: 'green',
        modelAnswer: `V_p / V_s = N_p / N_s\n• V_p = primary (input) p.d.\n• V_s = secondary (output) p.d.\n• N_p = number of turns on primary coil\n• N_s = number of turns on secondary coil`
      },
    ],
    amber: [
      {
        q: 'Describe the magnetic field pattern around a current-carrying solenoid, and state two ways to make the field stronger.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A solenoid is a long coil of wire. When current flows it produces a magnetic field similar to a bar magnet.\n• Inside the solenoid the field lines are straight, parallel and close together — the field is strong and uniform.\n• Outside, the field lines loop from one end (north pole) round to the other (south pole), like a bar magnet.\n\nTo make the field stronger (any two):\n• Increase the current through the wire.\n• Increase the number of turns per metre.\n• Insert a soft iron core inside the solenoid (makes it an electromagnet — much stronger).`
      },
      {
        q: 'A wire of length 0.30 m carrying a current of 4.0 A is placed at right angles to a magnetic field of flux density 0.25 T. Calculate the force on the wire. State the direction of the force given the current flows left-to-right and the field points into the page.',
        marks: 4, tier: 'amber',
        modelAnswer: `Force:\nF = B I L\nF = 0.25 × 4.0 × 0.30\nF = 0.30 N\n\nDirection (using Fleming's left-hand rule):\n• First finger: into the page (field)\n• Second finger: left to right (current)\n• Thumb: downwards (force)\nSo the force on the wire is directed downwards (vertically down the page).`
      },
      {
        q: 'Explain how a simple d.c. motor works.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A coil of wire is placed between the poles of a permanent magnet and connected to a d.c. supply via a split-ring commutator.\n• When current flows in the coil, each side of the coil experiences a force due to the motor effect (F = BIL).\n• The forces on the two sides are in opposite directions (Fleming's left-hand rule — current flows in opposite directions on each side), producing a turning moment (couple) that rotates the coil.\n• As the coil reaches the vertical, the split-ring commutator reverses the direction of the current in the coil.\n• This reverses the forces, so the coil continues to rotate in the same direction.\n• The coil therefore spins continuously.\nForces can be made larger by increasing current, using a stronger magnet, or using more turns on the coil.`
      },
      {
        q: 'A transformer has 500 turns on the primary coil and 2500 turns on the secondary coil. The primary is connected to a 240 V a.c. supply and delivers 1.5 A. Assuming 100% efficiency, calculate (a) the secondary voltage and (b) the secondary current.',
        marks: 4, tier: 'amber',
        modelAnswer: `(a) Secondary voltage:\nV_p / V_s = N_p / N_s\n240 / V_s = 500 / 2500\nV_s = 240 × 2500 / 500 = 1200 V\n\n(b) Secondary current (100% efficiency, so V_p I_p = V_s I_s):\n240 × 1.5 = 1200 × I_s\n360 = 1200 × I_s\nI_s = 0.30 A`
      },
    ],
    red: [
      {
        q: 'Describe how a transformer works and explain why a.c. must be used. Discuss the role of step-up and step-down transformers in the National Grid.',
        marks: 8, tier: 'red',
        modelAnswer: `How a transformer works:\n• A transformer consists of two coils of insulated wire (primary and secondary) wound on a common soft iron core.\n• An alternating p.d. across the primary coil causes an alternating current in the primary.\n• This produces a continually changing magnetic field in the iron core.\n• The iron core links the changing magnetic field to the secondary coil.\n• The changing field induces an alternating p.d. across the secondary coil (electromagnetic induction).\n• The ratio of voltages equals the ratio of turns: V_p/V_s = N_p/N_s.\n• For an ideal (100% efficient) transformer: V_p I_p = V_s I_s, so increasing voltage decreases current.\n\nWhy a.c. is required:\n• Transformers rely on a continually changing magnetic field to induce a p.d.\n• Direct current (d.c.) produces a steady field — no change, no induction, no output p.d.\n• Only alternating current produces the changing field needed.\n\nRole in the National Grid:\n• Step-up transformers (more secondary turns) at the power station increase p.d. to 400 kV (or 275/132 kV) before transmission. This reduces current (P = VI) and so reduces energy lost as heat in cables (P_loss = I²R).\n• Step-down transformers near towns/houses reduce the p.d. in stages down to a safe 230 V for domestic use.\n• This combination allows electricity to be distributed efficiently over long distances while remaining safe at the point of use.\n\nConclusion: transformers enable the National Grid's efficiency; without them, either huge energy would be lost in cables or users would need dangerously high voltages.`
      },
      {
        q: 'Compare how a d.c. motor and an a.c. generator (alternator) use the interaction between magnets and current-carrying coils. In your answer explain the key similarities and differences in construction and operation.',
        marks: 6, tier: 'red',
        modelAnswer: `Similarities:\n• Both use a coil of wire between the poles of a magnet.\n• Both rely on the interaction between a magnetic field and a coil — the motor effect (for motors) or electromagnetic induction (for generators).\n• Both use brushes to make electrical contact with the rotating coil.\n\nDifferences:\n• Motor vs Generator — energy transfer:\n  - Motor: electrical energy in → kinetic (rotational) energy out. Current flowing in the coil in a magnetic field experiences a force (F = BIL) that causes the coil to rotate.\n  - Alternator: kinetic energy in (from turbine/engine rotating the coil) → electrical energy out. The rotating coil cuts magnetic field lines, inducing an alternating p.d. across the coil (electromagnetic induction).\n• Slip rings vs split-ring commutator:\n  - D.C. motor uses a split-ring commutator — reverses the direction of current in the coil every half-turn so rotation continues in one direction from a d.c. supply.\n  - A.C. generator uses two slip rings — each end of the coil always connects to the same brush, so the induced p.d. alternates naturally as the coil rotates (a.c. output).\n• Output/input:\n  - Motor: d.c. input current → constant rotation.\n  - Alternator: rotation → alternating (a.c.) p.d. output, frequency = rotation rate.\n\nEvaluation: the motor and the generator are essentially the same machine working in opposite directions — the motor converts electrical to mechanical; the generator converts mechanical to electrical. The difference between split-ring and slip-ring connections determines whether the current is d.c. (kept in one direction) or a.c. (alternates naturally).`
      },
    ],
  },

  '4.8': {
    green: [
      {
        q: 'State the order of the eight planets in our Solar System from the Sun outwards.',
        marks: 2, tier: 'green',
        modelAnswer: `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.`
      },
      {
        q: 'State what is meant by red-shift and what it tells us about distant galaxies.',
        marks: 2, tier: 'green',
        modelAnswer: `Red-shift is the observed increase in wavelength (shift towards the red end of the spectrum) of light from a source moving away from us.\nThe light from distant galaxies is red-shifted, showing that they are moving away from us. More distant galaxies show greater red-shift — they are moving away faster.`
      },
      {
        q: 'State the main nuclear reaction that provides the energy of a main sequence star like the Sun.',
        marks: 2, tier: 'green',
        modelAnswer: `Nuclear fusion: hydrogen nuclei (protons) fuse together to form helium nuclei. The process releases large amounts of energy as a small amount of mass is converted to energy.`
      },
      {
        q: 'State what keeps a planet in orbit around the Sun, and describe the shape of the orbit.',
        marks: 2, tier: 'green',
        modelAnswer: `The force of gravity (gravitational attraction between the Sun and the planet) keeps the planet in orbit.\nThe orbit is approximately a circle (strictly a slight ellipse) with the Sun at the centre. The force of gravity acts perpendicular to the direction of motion, constantly changing the planet's direction but not its speed — this gives circular motion.`
      },
    ],
    amber: [
      {
        q: 'Describe the life cycle of a star the same mass as our Sun from its formation to its final stage.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Nebula: a cloud of dust and gas (mainly hydrogen) is pulled together by gravity.\n• Protostar: as matter collapses, the temperature and pressure rise until fusion begins.\n• Main sequence star: hydrogen fuses to helium in the core. The outward pressure from fusion balances the inward pull of gravity, and the star is stable (for billions of years).\n• Red giant: when the core hydrogen runs out, the core contracts and heats up. Outer layers expand and cool, becoming red. Helium then fuses into heavier elements up to carbon/oxygen.\n• White dwarf: outer layers are ejected as a planetary nebula. The hot dense core left behind is a white dwarf, which slowly cools over time (eventually to a cold 'black dwarf').`
      },
      {
        q: 'Describe the life cycle of a star that is much more massive than the Sun, from the main sequence stage onwards, and explain the origin of elements heavier than iron.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Main sequence: massive star fuses hydrogen to helium, but much faster and hotter than the Sun.\n• Red super giant: when hydrogen runs out, the core contracts and heats further, and the star expands. Successive fusion reactions produce heavier elements up to iron in the core.\n• Supernova: fusion cannot go beyond iron (iron fusion absorbs rather than releases energy). The core suddenly collapses and the outer layers are blasted off in a massive explosion — a supernova.\n• During the supernova explosion the extreme temperatures and pressures fuse elements together to form elements heavier than iron (gold, uranium, etc.). These are scattered across space by the blast.\n• Remnant: the core left behind forms either a neutron star (very dense) or, if the star is massive enough, a black hole.`
      },
      {
        q: 'Explain how red-shift provides evidence for the Big Bang theory.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Light from distant galaxies is observed to be shifted towards the red (longer wavelength) end of the spectrum — this is red-shift.\n• Red-shift shows that galaxies are moving away from us.\n• The more distant the galaxy, the greater the red-shift — so more distant galaxies are moving away faster (Hubble's Law).\n• This shows that the entire universe is expanding — space itself is stretching between galaxies.\n• If the universe is expanding now, then in the past it must have been smaller and hotter. Extrapolating backwards, all matter was once concentrated at a single point, which expanded outwards — the Big Bang, around 13.8 billion years ago.\n• This is the strongest piece of observational evidence supporting the Big Bang theory (alongside the cosmic microwave background radiation).`
      },
      {
        q: 'Explain why an artificial satellite must travel faster when it is placed in a lower orbit around the Earth.',
        marks: 3, tier: 'amber',
        modelAnswer: `• For a circular orbit, the force of gravity provides the centripetal force that keeps the satellite on its circular path.\n• At a lower orbit, the gravitational force on the satellite from the Earth is stronger (gravity is stronger closer to Earth).\n• To stay in a stable circular orbit, the satellite must travel faster so that the centripetal force required matches this stronger gravitational pull.\n• If it moved too slowly, the gravitational force would exceed the required centripetal force and it would spiral inwards and fall.`
      },
    ],
    red: [
      {
        q: 'Discuss the evidence for the Big Bang theory. In your answer, refer to red-shift, cosmic microwave background radiation (CMB) and the limitations of our current understanding (dark matter and dark energy).',
        marks: 6, tier: 'red',
        modelAnswer: `Red-shift evidence:\n• Light from distant galaxies is red-shifted, showing they are moving away from us.\n• More distant galaxies are red-shifted more — they are moving faster. This shows the universe is expanding uniformly. Running the expansion backwards implies an origin point — the Big Bang.\n\nCosmic microwave background (CMB):\n• The Big Bang predicts that the early universe was extremely hot and dense. As the universe expanded, it cooled. The radiation from that era has been stretched with the expansion to very long (microwave) wavelengths.\n• The CMB is observed coming uniformly from all directions, at a temperature of around 2.7 K — matching the prediction very closely.\n• This is strong independent evidence for the Big Bang; no other theory naturally predicts this.\n\nLimitations / unknowns:\n• Galaxies rotate faster than can be explained by the visible mass alone — scientists propose dark matter to account for the extra gravitational pull. Dark matter has not been directly observed.\n• Observations of distant supernovae show the expansion of the universe is accelerating, not slowing down. Scientists propose dark energy as the cause, but its nature is unknown.\n• Around 95% of the mass-energy of the universe is thought to be dark matter and dark energy — so most of the universe is not fully understood.\n\nEvaluation: the combined evidence from red-shift and the CMB strongly supports the Big Bang. However, dark matter and dark energy show that the theory is incomplete, and further research may revise or extend our understanding.`
      },
      {
        q: 'Compare the life cycles of a low-mass star (like the Sun) and a high-mass star. In your answer include: timescale, stages, fusion products, final remnant, and the role each type plays in producing the elements that make up planets like Earth.',
        marks: 8, tier: 'red',
        modelAnswer: `Low-mass star (e.g. the Sun):\n• Stages: nebula → protostar → main sequence → red giant → planetary nebula + white dwarf → (black dwarf eventually).\n• Timescale: main sequence lasts around 10 billion years (long life).\n• Fusion products: hydrogen → helium (main sequence), then helium → carbon and oxygen in red giant stage. Fusion stops at carbon/oxygen — not hot enough to go further.\n• Final remnant: white dwarf — hot, dense Earth-sized remnant that gradually cools over billions of years.\n• Contribution to elements: relatively small — contributes some carbon, oxygen, and lighter elements to space through the planetary nebula stage.\n\nHigh-mass star:\n• Stages: nebula → protostar → main sequence (blue/white) → red super giant → supernova → neutron star or black hole.\n• Timescale: much shorter — main sequence life only a few million years (burns fuel much faster).\n• Fusion products: fuses elements successively heavier, all the way up to iron in the core. Cannot fuse beyond iron as this absorbs energy rather than releasing it.\n• Supernova explosion: the extreme energy released during the supernova fuses elements beyond iron (gold, uranium, lead, etc.) and scatters all the star's elements into space.\n• Final remnant: a neutron star (extremely dense) for medium-large stars, or a black hole for the most massive stars.\n• Contribution to elements: enormous — supernovae are the source of most heavy elements in the universe, including those in Earth and in our bodies.\n\nConclusion / link to Earth:\n• Low-mass stars recycle light elements relatively gently; high-mass stars produce and distribute the majority of heavier elements.\n• The rocks, metals and atoms making up Earth and its life (iron in our blood, gold in the ground, calcium in our bones) were formed by earlier generations of massive stars and supernovae.\n• In this sense, 'we are made of star dust' is literally true.`
      },
    ],
  },

};
