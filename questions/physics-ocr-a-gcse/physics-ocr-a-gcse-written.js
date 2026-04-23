/*
 * OCR A GCSE Physics (J249) — Written / Short-Answer Diagnostic Bank
 * 10 per topic: 4 green + 4 amber + 2 red — for the single written
 * question randomly slotted into each per-topic diagnostic.
 * Student self-marks: Full / Partial / Missed against the model answer.
 */

const PHYSICS_OCR_A_GCSE_WRITTEN = {

  'P1': {
    green: [
      { q: 'State what is meant by density.', marks: 2, tier: 'green',
        modelAnswer: `Density is the mass per unit volume of a substance (1). Units: kg/m³ (or g/cm³) (1).` },
      { q: 'State the SI unit of pressure and give the formula relating pressure, force and area.', marks: 2, tier: 'green',
        modelAnswer: `The SI unit of pressure is the pascal (Pa) (1). Pressure p = force F / area A (1).` },
      { q: 'State the three states of matter and, for each, describe the particle arrangement.', marks: 3, tier: 'green',
        modelAnswer: `Solid: particles in a regular pattern, closely packed, vibrating about fixed positions (1).\nLiquid: particles random but close together, moving past each other (1).\nGas: particles far apart, moving randomly at high speed (1).` },
      { q: 'State what happens to temperature during a change of state and explain why.', marks: 2, tier: 'green',
        modelAnswer: `Temperature stays constant during a change of state (1). All the energy supplied is used to break the intermolecular bonds rather than to increase the kinetic energy of particles (1).` },
    ],
    amber: [
      { q: 'Describe how you would measure the density of an irregular solid using a displacement method.', marks: 4, tier: 'amber',
        modelAnswer: `• Measure the mass of the object on a balance (m) (1).\n• Fill a eureka can with water to the level of the spout and place a measuring cylinder under the spout (1).\n• Lower the object into the can; collect the displaced water. Volume displaced = volume of object (V) (1).\n• Calculate density using ρ = m / V (1).` },
      { q: 'Explain, in terms of particles, why the pressure of a gas increases when its temperature increases at constant volume.', marks: 4, tier: 'amber',
        modelAnswer: `• The gas particles gain kinetic energy and move faster (1).\n• They collide with the walls more frequently (1).\n• Each collision transfers a greater change in momentum — a bigger force (1).\n• Pressure = force / area, so greater force per unit area → higher pressure (1).` },
      { q: 'A gas of volume 3.0 m³ at 200 kPa is compressed at constant temperature to 0.5 m³. Calculate the new pressure.', marks: 3, tier: 'amber',
        modelAnswer: `p₁V₁ = p₂V₂ (1).\np₂ = p₁V₁/V₂ = 200 × 3.0 / 0.5 (1) = 1 200 kPa (1.2 MPa) (1).` },
      { q: 'Describe how to measure the specific heat capacity of a solid metal block using an immersion heater.', marks: 5, tier: 'amber',
        modelAnswer: `• Weigh the block to find its mass m (1).\n• Insulate the block; insert heater and thermometer (oil in thermometer hole for contact) (1).\n• Switch on heater and record V, I. Measure initial temperature and start stopwatch (1).\n• Record temperature at regular intervals for ~10 minutes; note total time and final temperature, calculate Δθ (1).\n• Use c = V × I × t / (m × Δθ) (1).` },
    ],
    red: [
      { q: 'A 0.3 kg of ice at −5 °C is heated until it becomes water at 40 °C. Explain each stage and calculate the total energy required. (c_ice = 2 100 J/kg °C, L_fusion = 334 000 J/kg, c_water = 4 200 J/kg °C)', marks: 6, tier: 'red',
        modelAnswer: `Stage 1: warm ice from −5 °C to 0 °C. E₁ = m c_ice Δθ = 0.3 × 2 100 × 5 = 3 150 J (1).\nStage 2: melt ice at 0 °C. E₂ = m L = 0.3 × 334 000 = 100 200 J (1).\nStage 3: warm water from 0 °C to 40 °C. E₃ = m c_water Δθ = 0.3 × 4 200 × 40 = 50 400 J (1).\nTotal = E₁ + E₂ + E₃ = 3 150 + 100 200 + 50 400 = 153 750 J ≈ 154 kJ (1).\nTemperature rises during stages 1 and 3 but stays constant during stage 2 because energy goes to breaking bonds (1).\nMost energy is used at the change of state — latent heat dominates (1).` },
      { q: 'Water is 4.0 m deep behind a dam (ρ = 1 000 kg/m³, g = 9.8). Calculate the pressure at the bottom due to the water and explain why dam walls are built thicker at the base.', marks: 5, tier: 'red',
        modelAnswer: `p = h ρ g = 4.0 × 1 000 × 9.8 (1) = 39 200 Pa ≈ 39.2 kPa (1).\nPressure in a liquid increases with depth because there is more liquid above (1).\nThe wall at the base must withstand a larger force per unit area (1).\nSo the wall is made thicker at the base to provide greater strength (1).` },
    ],
  },

  'P2': {
    green: [
      { q: 'State the difference between scalars and vectors, giving one example of each.', marks: 3, tier: 'green',
        modelAnswer: `Scalars have only magnitude; vectors have both magnitude and direction (2).\nExample scalar: mass/speed/energy (½). Example vector: velocity/force/displacement (½). (Total 3)` },
      { q: 'State Newton\'s Second Law and give its equation with units.', marks: 2, tier: 'green',
        modelAnswer: `Resultant force on an object = mass × acceleration; the acceleration is in the direction of the net force (1).\nF (N) = m (kg) × a (m/s²) (1).` },
      { q: 'Define momentum and give its equation and unit.', marks: 2, tier: 'green',
        modelAnswer: `Momentum is the product of mass and velocity; it is a vector (1).\np = m × v ; units kg m/s (1).` },
      { q: 'State the equation for the moment of a force and define each quantity.', marks: 2, tier: 'green',
        modelAnswer: `Moment M = F × d (1).\nF is the force, d is the perpendicular distance from the pivot to the line of action of the force (1). Unit: N m.` },
    ],
    amber: [
      { q: 'A 70 kg cyclist accelerates from rest to 8 m/s in 5 s. Calculate acceleration and net force.', marks: 3, tier: 'amber',
        modelAnswer: `a = (v − u) / t = (8 − 0) / 5 = 1.6 m/s² (1).\nF = m a = 70 × 1.6 (1) = 112 N (1).` },
      { q: 'Describe factors that affect the thinking distance and factors that affect the braking distance of a car.', marks: 4, tier: 'amber',
        modelAnswer: `Thinking distance: driver reaction time (alcohol, drugs, tiredness, distractions such as phone) (1) and speed of the car — higher speed means more distance covered in the same reaction time (1).\nBraking distance: speed (it increases with v²), road conditions (wet/icy reduce friction), tyre and brake condition (worn parts are less effective), mass of the vehicle — heavier needs more force (any 2 for 2 marks).` },
      { q: 'Explain how a seatbelt and airbag reduce the force on a driver in a collision.', marks: 4, tier: 'amber',
        modelAnswer: `• The driver\'s change in momentum is fixed (m × v) (1).\n• Seatbelts stretch slightly and airbags inflate then deflate; this increases the time over which the driver is brought to rest (1).\n• Since F = change in momentum / time, a longer time → a smaller force (1).\n• The smaller force on the driver reduces injury (1).` },
      { q: 'A lever has a pivot at one end. A 50 N force is applied at the other end, 2.0 m from the pivot. A load is lifted 0.5 m from the pivot. Calculate the weight of the load that can just be lifted.', marks: 3, tier: 'amber',
        modelAnswer: `For balance: load × 0.5 = 50 × 2.0 (1)\nLoad = 100 / 0.5 (1) = 200 N (1).` },
    ],
    red: [
      { q: 'A 0.5 kg ball hits a wall at 8 m/s and rebounds at 5 m/s in the opposite direction. It is in contact with the wall for 0.04 s. Calculate (i) the change in momentum and (ii) the average force on the ball by the wall. Explain the direction of the force.', marks: 6, tier: 'red',
        modelAnswer: `Take initial direction as positive.\nInitial p = 0.5 × 8 = +4 kg m/s (1).\nFinal p = 0.5 × (−5) = −2.5 kg m/s (1).\nΔp = −2.5 − 4 = −6.5 kg m/s (magnitude 6.5 kg m/s) (1).\nF = Δp / t = 6.5 / 0.04 = 162.5 N (1).\nDirection: opposite to the ball\'s original motion (1); the force on the ball is outwards from the wall. By Newton\'s 3rd law, the ball exerts an equal and opposite force on the wall (1).` },
      { q: 'Two carts on a frictionless track: a 4 kg cart at 3 m/s east collides with a 2 kg cart at 1 m/s east. After collision they stick together. Calculate their common final velocity. Explain which physical law you used.', marks: 6, tier: 'red',
        modelAnswer: `Momentum before = 4 × 3 + 2 × 1 = 14 kg m/s (east) (2).\nTotal mass after = 4 + 2 = 6 kg (1).\nMomentum after = (4 + 2) × v (1).\nv = 14 / 6 = 2.33 m/s east (1).\nUsed conservation of momentum — in a closed system with no external force, total momentum is conserved (1).` },
    ],
  },

  'P3': {
    green: [
      { q: 'State the equation V = IR and name each quantity with units.', marks: 2, tier: 'green',
        modelAnswer: `V = I × R : V is potential difference (volts, V); I is current (amperes, A); R is resistance (ohms, Ω) (2 marks if both equation and all three quantities correct).` },
      { q: 'Name the three wires in a UK three-pin plug and state their colours.', marks: 3, tier: 'green',
        modelAnswer: `Live — brown (1). Neutral — blue (1). Earth — green and yellow stripes (1).` },
      { q: 'State the equation for electrical power and one alternative form.', marks: 2, tier: 'green',
        modelAnswer: `P = V × I (1). Alternatively P = I² × R or P = V²/R (1).` },
      { q: 'Explain what is meant by "alternating" current.', marks: 2, tier: 'green',
        modelAnswer: `Alternating current flows first in one direction then in the opposite direction repeatedly (1). In the UK mains this reversal happens 50 times per second (50 Hz) (1).` },
    ],
    amber: [
      { q: 'Describe the I-V characteristic of a filament lamp and explain its shape.', marks: 4, tier: 'amber',
        modelAnswer: `• The graph is an S-shape/curve passing through the origin; straight near origin, curving away at higher pd (1).\n• At low pd, current is proportional to pd (small heating) (1).\n• At higher pd, more current heats the filament, its resistance increases (1).\n• So less additional current flows per extra volt — graph curves / slope decreases (1).` },
      { q: 'A kettle is rated 2 300 W at 230 V. Calculate current; choose an appropriate fuse.', marks: 3, tier: 'amber',
        modelAnswer: `I = P / V = 2 300 / 230 (1) = 10 A (1). Use the next fuse value above 10 A — standard is a 13 A fuse (1).` },
      { q: 'Compare series and parallel circuits in terms of current, voltage and what happens if one component breaks.', marks: 5, tier: 'amber',
        modelAnswer: `Series: current the same everywhere (1); pd is shared across components (1); if one breaks the whole circuit breaks (1).\nParallel: pd is the same across each branch (1); current is shared between branches; if one branch breaks, others still work (1).` },
      { q: 'Explain why the Earth wire and a fuse together protect the user from electric shock.', marks: 4, tier: 'amber',
        modelAnswer: `• If a fault connects the live wire to the metal casing, the metal becomes live and could shock a user (1).\n• The earth wire provides a low-resistance path to ground (1).\n• A large current flows through the live-earth loop, which melts the fuse (1).\n• This breaks the live connection, disconnecting the appliance and making it safe (1).` },
    ],
    red: [
      { q: 'Explain why electricity is transmitted at very high voltage, using equations where appropriate.', marks: 6, tier: 'red',
        modelAnswer: `• Power delivered P = V × I — at higher V, the same P requires smaller I (2).\n• Power lost as heat in cables = I²R (1).\n• Smaller I → much smaller I²R loss, so less energy wasted as heat (1).\n• Transformers step voltage up at the power station (e.g. 25 kV → 400 kV) and step it back down near homes to a safe value (230 V) (1).\n• Transformers must work with AC because they require a changing magnetic field to induce an emf in the secondary coil (1).` },
      { q: 'A 10 Ω resistor and a 15 Ω resistor are connected in parallel across a 6 V battery. Calculate (i) total resistance, (ii) current drawn from the battery, (iii) current in each resistor.', marks: 6, tier: 'red',
        modelAnswer: `(i) 1/R = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 → R = 6 Ω (2).\n(ii) I_total = V / R = 6 / 6 = 1 A (1).\n(iii) Same 6 V across each branch. I₁ = 6/10 = 0.6 A (1); I₂ = 6/15 = 0.4 A (1).\nCheck: 0.6 + 0.4 = 1 A ✓ (1).` },
    ],
  },

  'P4': {
    green: [
      { q: 'State the difference between transverse and longitudinal waves, giving one example of each.', marks: 3, tier: 'green',
        modelAnswer: `Transverse: oscillations are perpendicular to the direction of energy transfer (e.g. light, water ripples) (1.5).\nLongitudinal: oscillations are parallel to direction of energy transfer — compressions and rarefactions (e.g. sound) (1.5).` },
      { q: 'Write the wave equation with units for each term.', marks: 2, tier: 'green',
        modelAnswer: `v = f × λ (1). v (m/s) = f (Hz) × λ (m) (1).` },
      { q: 'List the EM spectrum in order from longest to shortest wavelength.', marks: 2, tier: 'green',
        modelAnswer: `Radio, microwave, infrared, visible, ultraviolet, X-rays, gamma (2 marks for full correct sequence; 1 for mostly correct).` },
      { q: 'Name the three main types of radioactive emission and the particle nature of each.', marks: 3, tier: 'green',
        modelAnswer: `Alpha (α) — a helium nucleus (2 protons + 2 neutrons) (1).\nBeta (β⁻) — a high-speed electron from the nucleus (1).\nGamma (γ) — a high-energy electromagnetic wave (photon) (1).` },
    ],
    amber: [
      { q: 'A radio station broadcasts at 100 MHz. Calculate the wavelength (speed of EM wave = 3 × 10⁸ m/s).', marks: 2, tier: 'amber',
        modelAnswer: `λ = v / f = 3 × 10⁸ / (100 × 10⁶) (1) = 3 m (1).` },
      { q: 'Describe how an ultrasound scan can determine the depth of a tissue boundary.', marks: 4, tier: 'amber',
        modelAnswer: `• The probe emits a short pulse of ultrasound into the body (1).\n• At each boundary between tissues of different density, some waves are reflected back (1).\n• The time between emission and detection (t) is recorded; the ultrasound speed v in tissue is known (1).\n• Depth = v × t / 2 (halved because the pulse travels there and back) (1).` },
      { q: 'Explain why ultraviolet and X-rays are dangerous to the human body but radio waves are not.', marks: 3, tier: 'amber',
        modelAnswer: `• UV and X-rays have very high frequency and therefore carry high energy per photon (1).\n• They are ionising — can knock electrons out of atoms, damaging DNA and causing mutations/cancer (1).\n• Radio waves have very low energy per photon, so they are non-ionising and do not damage DNA (1).` },
      { q: 'Complete the nuclear equation for the alpha decay of uranium-238: ²³⁸₉₂U → ? + ⁴₂He.', marks: 3, tier: 'amber',
        modelAnswer: `Mass number reduces by 4, atomic number by 2 (1). Daughter: ²³⁴₉₀Th (thorium-234) (1). Full equation ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (1).` },
    ],
    red: [
      { q: 'A radioactive sample has half-life 20 minutes and initial activity 800 Bq. (i) Calculate the activity after 1 hour. (ii) How long until the activity drops below 50 Bq? Explain why we can only give an average half-life, not a precise decay time.', marks: 6, tier: 'red',
        modelAnswer: `(i) 1 hour = 60 min = 3 half-lives; activity halves each time: 800 → 400 → 200 → 100 Bq (2).\n(ii) 50 Bq is 1/16 of 800 Bq = 2⁴; so it takes 4 half-lives = 80 minutes (2).\nRadioactive decay is random — any specific atom decays unpredictably (1). Large numbers of atoms average out to a reliable half-life, but we cannot predict when any one atom will decay (1).` },
      { q: 'Compare the dangers and usefulness of alpha, beta and gamma radiation both INSIDE and OUTSIDE the body.', marks: 6, tier: 'red',
        modelAnswer: `Outside the body:\n• α stopped by skin/paper — relatively safe externally (1).\n• β penetrates skin a few mm — more dangerous than α externally (1).\n• γ penetrates deeply — most dangerous externally; shielded by thick lead/concrete (1).\nInside the body (ingested or inhaled):\n• α is MOST dangerous — it ionises heavily within a very small distance, damaging cells around it (1).\n• β is less dangerous than α inside — less ionising (1).\n• γ passes through the body largely without stopping, so does less damage internally than α (1).\nUses benefit from these differences: α in smoke alarms (short range), β for thickness monitoring, γ for medical tracers & sterilisation.` },
    ],
  },

  'P5': {
    green: [
      { q: 'State the law of conservation of energy.', marks: 1, tier: 'green',
        modelAnswer: `Energy cannot be created or destroyed, only transferred from one store to another (1).` },
      { q: 'State the equation for kinetic energy and name each quantity with units.', marks: 2, tier: 'green',
        modelAnswer: `E_k = ½ × m × v² (1). E_k in joules (J), m in kilograms (kg), v in m/s (1).` },
      { q: 'Define the efficiency of a device.', marks: 2, tier: 'green',
        modelAnswer: `Efficiency = (useful energy output / total energy input) × 100% (1). It measures how well a device transfers energy to useful rather than wasted stores (1).` },
      { q: 'State two renewable energy resources and two non-renewable energy resources.', marks: 4, tier: 'green',
        modelAnswer: `Renewable (any 2): solar, wind, hydro, tidal, wave, geothermal, biofuel (2).\nNon-renewable (any 2): coal, oil, natural gas, nuclear (uranium) (2).` },
    ],
    amber: [
      { q: 'A 1 200 kg car travels at 15 m/s. Calculate its kinetic energy. If it doubles speed, by what factor does KE change?', marks: 3, tier: 'amber',
        modelAnswer: `E_k = ½ × 1 200 × 15² = 600 × 225 (1) = 135 000 J = 135 kJ (1).\nDoubling v quadruples KE (× 4) because E_k ∝ v² (1).` },
      { q: 'Explain why a pendulum eventually stops swinging, in terms of energy transfers.', marks: 4, tier: 'amber',
        modelAnswer: `• At the end of each swing, the bob has maximum GPE and zero KE; at the bottom GPE → KE (1).\n• Friction at the pivot and air resistance do negative work on the bob (1).\n• Some mechanical energy is transferred to thermal energy in the surroundings each swing (1).\n• The total mechanical energy decreases each cycle until the bob is at rest at the lowest point (1).` },
      { q: 'A 3 000 W immersion heater runs for 3 minutes and heats 1.5 kg of water. If 80% of the energy is useful, calculate the temperature rise of the water (c = 4 200 J/kg °C).', marks: 5, tier: 'amber',
        modelAnswer: `Energy in = P × t = 3 000 × 180 = 540 000 J (1).\nUseful energy = 80% × 540 000 = 432 000 J (1).\nΔθ = E / (m c) = 432 000 / (1.5 × 4 200) (1)\n = 432 000 / 6 300 (1) ≈ 68.6 °C (1).` },
      { q: 'Compare the advantages and disadvantages of solar and nuclear power for generating electricity.', marks: 5, tier: 'amber',
        modelAnswer: `Solar: renewable, no CO₂ when running, no fuel cost (1); only works in daylight / depends on weather, large land area, high initial cost (1).\nNuclear: very high energy density, reliable base-load, low direct CO₂ (1); produces long-lived radioactive waste, accident risk, high capital cost (1).\nCompare: both low-CO₂; nuclear provides 24/7 output, solar does not — but solar lacks radioactive waste. (1 extra evaluative point).` },
    ],
    red: [
      { q: 'A 2 kg block is pulled up a frictionless slope gaining 8 m of height in 4 s. (a) Calculate the GPE gained. (b) Calculate the average power of the pulling force. (c) Explain how the answers would change with a real rough slope.', marks: 6, tier: 'red',
        modelAnswer: `(a) GPE = m g h = 2 × 9.8 × 8 (1) = 156.8 J ≈ 157 J (1).\n(b) P = E / t = 156.8 / 4 (1) = 39.2 W (1).\n(c) With friction, more work must be done, so more energy is required for the same rise (1). Extra energy becomes thermal energy in the slope and block — the useful GPE-gained stays the same but efficiency falls (1).` },
      { q: 'A country considers building more offshore wind turbines or more gas-fired power stations. Discuss the physics and environmental arguments for each, concluding with a recommendation.', marks: 6, tier: 'red',
        modelAnswer: `Wind: renewable, no CO₂ at generation, free fuel (wind) (1). Intermittent — needs grid-scale storage or gas back-up; high capital cost; offshore is challenging to install and maintain (1).\nGas: reliable dispatchable supply; moderate CO₂ per unit (less than coal); existing infrastructure available (1). Still emits CO₂ and methane; gas prices are volatile; finite reserves (1).\nConclusion: for long-term climate targets, wind is preferable, with gas retained as short-term backup (1 for clear conclusion). The mix should favour renewables to meet net-zero, using storage and flexible gas to manage intermittency (1).` },
    ],
  },

  'P6': {
    green: [
      { q: 'State what is meant by electromagnetic induction.', marks: 2, tier: 'green',
        modelAnswer: `Electromagnetic induction is the production of a potential difference (emf) in a conductor when there is a change in magnetic flux through the conductor (1). If the conductor is part of a complete circuit, a current flows (1).` },
      { q: 'State the voltage ratio equation for an ideal transformer.', marks: 2, tier: 'green',
        modelAnswer: `V_p / V_s = N_p / N_s (1) — where V_p, V_s are primary and secondary pds and N_p, N_s are the numbers of turns (1).` },
      { q: 'List the eight planets in order of distance from the Sun.', marks: 2, tier: 'green',
        modelAnswer: `Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune (2 marks for full sequence; 1 for mostly correct).` },
      { q: 'State what is meant by red-shift.', marks: 2, tier: 'green',
        modelAnswer: `Red-shift is the observation that light from distant galaxies has its wavelengths stretched (shifted toward the red end of the spectrum) (1), because the galaxies are moving away from us (1).` },
    ],
    amber: [
      { q: 'Describe the life cycle of a star with a mass similar to the Sun, from a nebula to the final stage.', marks: 5, tier: 'amber',
        modelAnswer: `• A nebula (cloud of dust and gas) contracts under gravity (1).\n• As density and temperature rise it becomes a protostar (1).\n• When the core is hot enough, hydrogen fusion begins → main-sequence star (1).\n• When the hydrogen runs out, the core contracts and outer layers expand → red giant (1).\n• Outer layers drift off (planetary nebula), leaving a white dwarf that slowly cools (1).` },
      { q: 'A transformer has 1 000 turns on the primary and 50 turns on the secondary. The primary is connected to 230 V ac. Calculate the secondary voltage and state whether it is a step-up or step-down transformer.', marks: 3, tier: 'amber',
        modelAnswer: `V_s = V_p × N_s / N_p = 230 × 50 / 1 000 (1) = 11.5 V (1). It is a step-down transformer (fewer turns on the secondary) (1).` },
      { q: 'Explain how a satellite maintains a stable circular orbit around the Earth.', marks: 4, tier: 'amber',
        modelAnswer: `• The Earth\'s gravitational force pulls the satellite toward the centre (1).\n• The satellite moves at a high speed tangential to its orbit (1).\n• The gravitational force provides the required centripetal force for circular motion (1).\n• For a given orbital radius, there is only one speed at which this balance is maintained (1).` },
      { q: 'Explain why the CMB and red-shift together provide strong evidence for the Big Bang.', marks: 4, tier: 'amber',
        modelAnswer: `• Red-shift of distant galaxies shows that space is expanding — more distant galaxies recede faster (1).\n• Rewinding the expansion in time implies the universe was once very small, hot and dense (1).\n• The CMB is the "afterglow" — the light from the hot early universe that has cooled and red-shifted into the microwave range by 13.8 Gyr of expansion (1).\n• The CMB is detected uniformly from all directions with the right spectrum — matches predictions of a Big Bang universe (1).` },
    ],
    red: [
      { q: 'An ideal transformer has 2 000 turns on its primary, 200 turns on its secondary, operates at 240 V ac with 2 A in the primary. Calculate (i) secondary voltage, (ii) secondary current, and explain why the transformer does not increase total power.', marks: 6, tier: 'red',
        modelAnswer: `(i) V_s = V_p × N_s/N_p = 240 × 200/2 000 = 24 V (1).\n(ii) For an ideal transformer V_p I_p = V_s I_s → I_s = V_p I_p / V_s = 240 × 2 / 24 = 20 A (1).\nThe transformer cannot create energy (conservation of energy) (1); it only trades voltage for current in the opposite sense (1). Energy in per second = 240 × 2 = 480 W; energy out = 24 × 20 = 480 W — same in both (2).` },
      { q: 'Red-shift data shows that the universe is expanding and that the expansion is accelerating. Discuss what this tells us about the universe and the physics that this reveals as still-unsolved problems.', marks: 6, tier: 'red',
        modelAnswer: `• Expansion evidence: spectra of distant galaxies show absorption lines shifted to longer wavelengths — they are moving away (1). More distant → larger red-shift (Hubble\'s law) (1).\n• Implication: universe was once much smaller and denser — the Big Bang about 13.8 × 10⁹ y ago (1).\n• Accelerating expansion: since 1998, observations of distant supernovae show expansion is speeding up, not slowing as gravity alone would predict (1).\n• Unsolved: "dark energy" (~68%) is the name given to whatever drives the acceleration — its nature is unknown (1).\n• Also: galaxy rotation implies "dark matter" (~27%) — mass beyond what we see. Ordinary matter is only ~5% (1). These are among the biggest open questions in physics.` },
    ],
  },

};

if (typeof module !== 'undefined' && module.exports) module.exports = PHYSICS_OCR_A_GCSE_WRITTEN;
