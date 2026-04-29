/*
 * Edexcel A-level Physics (9PH0) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12, 16, 20, 25. Command words: Describe / Explain /
 * Compare / Discuss / Assess / Evaluate / To what extent. Each question carries
 * a top-band model answer the AI can use as a grading anchor.
 */

const PHYSICS_EDEXCEL_AI_FEEDBACK = {

  /* ─────────────────────── T1 Working as a Physicist ─────────────────────── */
  'T1': [
    {
      q: 'Discuss the importance of significant figures, uncertainty and percentage uncertainty when reporting experimental results.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Significant figures show the precision with which a measurement was made: writing 12.4 cm rather than 12.40 cm or 12 cm tells the reader the smallest meaningful division of the instrument. Uncertainty makes precision explicit (e.g. 12.4 ± 0.1 cm), and percentage uncertainty (uncertainty ÷ value × 100%) allows uncertainties in different quantities to be compared and combined when calculating derived quantities. For products and quotients, percentage uncertainties of the inputs are added; for sums and differences, the absolute uncertainties are added. Reporting all three lets other scientists judge whether two values agree within experimental error and whether claimed effects are real or within the noise. Without these conventions, results would be ambiguous and difficult to evaluate.'
    },
    {
      q: 'Explain the difference between random and systematic errors, and discuss how each can be reduced in a typical experiment.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Random errors are unpredictable variations in repeated measurements caused by uncontrollable changes in conditions or the experimenter. They scatter readings around the true value and can be reduced by repeating measurements many times and averaging, by using instruments with finer resolution and by controlling environmental conditions. Systematic errors are consistent biases that shift every reading in the same direction, often caused by faulty calibration, zero error or a flawed method. Averaging does not reduce them; instead, they must be removed by checking and zeroing instruments, calibrating against a known standard, or modifying the method to eliminate the bias. A high-quality experiment minimises both so that the final result is precise and accurate.'
    },
    {
      q: 'Describe how to use a digital multimeter and an oscilloscope effectively in an electrical experiment, including the precautions needed to obtain reliable readings.',
      marks: 9, command: 'Describe',
      modelAnswer: 'A digital multimeter is connected in series for current measurements (with a low-value internal shunt) and in parallel for voltage measurements (with a very high internal resistance). The correct range must be selected first to give the highest possible resolution without overload, and the meter zeroed if appropriate. An oscilloscope displays voltage against time on its screen; the time-base controls the horizontal scale and the y-gain controls the vertical scale. The probe is connected to the live signal and the earth lead to the circuit ground. Reliable readings require choosing ranges that show the full waveform, taking measurements between gridlines using the smallest divisions, repeating where possible, and accounting for instrument loading on the circuit when high precision is needed. Both instruments must be calibrated periodically and operated within their voltage ratings.'
    },
    {
      q: 'Evaluate the role of estimation and order-of-magnitude reasoning in physics, including how it helps to check results and design experiments.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Estimation is the process of arriving at an approximate value, typically to within an order of magnitude (a factor of 10), using physical reasoning rather than detailed calculation. It allows scientists to check whether a careful answer is reasonable: if a calculation gives a value that differs from a sensible estimate by many orders of magnitude, an error is likely. Estimation also helps in experimental design — choosing the right resolution stopwatch, picking the correct meter scale, or judging whether an effect is large enough to be measurable. Famous examples include Fermi\'s estimates of the energy of an atomic explosion using paper falling, and back-of-envelope calculations of stars in a galaxy. Drawbacks include the risk of being misled if assumptions are wrong, but used carefully, estimation is a powerful tool that improves both calculation reliability and experimental design.'
    },
  ],

  /* ─────────────────────── T2 Mechanics ─────────────────────── */
  'T2': [
    {
      q: 'Describe Newton\'s laws of motion and explain how each applies to a passenger in a car decelerating sharply.',
      marks: 12, command: 'Describe',
      modelAnswer: 'Newton\'s first law states that an object continues at rest or at constant velocity unless acted on by a resultant force. When a car brakes, friction with the road decelerates the car, but the passenger experiences no large backward force directly; their body therefore tends to continue moving forwards at the original velocity, which is why a seatbelt is needed. Newton\'s second law states F = dp/dt, the resultant force is the rate of change of momentum (which reduces to F = ma for constant mass). The seatbelt force decelerates the passenger; a more massive passenger needs a larger force for the same deceleration. Newton\'s third law states that if A exerts a force on B, B exerts an equal and opposite force on A. The seatbelt pulls the passenger backwards while the passenger pushes forwards on the seatbelt with an equal and opposite force.'
    },
    {
      q: 'Explain the principle of conservation of momentum and discuss how it applies to a collision between two objects on a straight track.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The principle of conservation of momentum states that, in the absence of external forces, the total momentum of a system is constant. In a collision the only forces during impact are the action–reaction forces between the two bodies, which are internal to the system; the total momentum just before equals the total momentum just after. In an elastic collision both momentum and kinetic energy are conserved, while in an inelastic collision momentum is conserved but some kinetic energy is converted to other stores such as sound, heat or deformation. Applying the principle gives the velocity of one object after the collision once the other is known, and underlies analysis of car crashes, particle physics interactions and rocket propulsion.'
    },
    {
      q: 'Discuss how energy is conserved during the motion of a projectile, with reference to the relationships between kinetic, gravitational potential and total mechanical energy.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'For a projectile in free flight without air resistance, gravity is the only force, and as the projectile rises, work is done against gravity, transferring energy from the kinetic store to the gravitational potential store. At the highest point the vertical velocity is zero, but the horizontal component is unchanged, so kinetic energy is at its minimum but not zero. As it falls, gravitational potential energy returns to the kinetic store. At any height h, ½mv² + mgh = constant, expressing conservation of mechanical energy. Air resistance dissipates some energy to the thermal store of the air; both maximum height and range are reduced compared with the air-free case. Energy conservation, including dissipation, gives a complete description of projectile motion.'
    },
    {
      q: 'Evaluate the role of crumple zones, seatbelts and airbags in cars, with reference to impulse and momentum.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'In a collision, the change in momentum of the passenger is fixed by their pre-impact velocity. The impulse equals the change of momentum: F × t = Δp. Increasing the time t over which the change occurs reduces the average force F. Crumple zones at the front and rear deform progressively, increasing collision time. Seatbelts stretch slightly during the impact, lengthening the deceleration time and preventing passengers being thrown forward. Airbags inflate rapidly to provide a soft cushion that further extends impact time and spreads the force over a larger area, reducing pressure. These features cannot eliminate injury entirely — the kinetic energy must still go somewhere — but together they typically reduce peak forces by a factor of several, dramatically lowering fatality and severe-injury rates. Drawbacks include cost and the risk of malfunction in older systems. Overall, the impulse-based design philosophy is a major reason that modern cars are far safer than older ones.'
    },
  ],

  /* ─────────────────────── T3 Electric Circuits ─────────────────────── */
  'T3': [
    {
      q: 'Compare the relationship between current and potential difference for an ohmic conductor, a filament lamp and a semiconductor diode.',
      marks: 9, command: 'Compare',
      modelAnswer: 'For an ohmic conductor at constant temperature, current is directly proportional to potential difference, giving a straight-line graph through the origin with constant gradient 1/R; resistance is constant. For a filament lamp, increasing the current heats the filament, raising its resistance with temperature; the I–V graph is a curve that flattens at higher currents and is symmetric about the origin. For a semiconductor diode, current is essentially zero in reverse bias and remains negligible in forward bias until the threshold (~0.6 V for silicon), after which current rises rapidly with very small further increases in voltage; the I–V graph is highly asymmetric. These differences arise from different microscopic mechanisms: fixed charge carrier mobility in metals, increased lattice vibrations in a hot filament, and a one-way energy barrier across a p–n junction in the diode.'
    },
    {
      q: 'Explain how Kirchhoff\'s first and second laws follow from the conservation of charge and energy, and describe their use in analysing complex circuits.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Kirchhoff\'s first law states that the sum of currents entering a junction equals the sum leaving it. This follows from conservation of charge: charge does not accumulate at a point in steady state. Kirchhoff\'s second law states that around any closed loop, the sum of EMFs equals the sum of potential differences. This follows from conservation of energy: every coulomb of charge traversing a loop returns to its starting point with no net energy change, so energy gained from EMFs must equal energy dissipated in resistors. Applied together, these laws allow even complex networks to be solved as simultaneous equations: each junction gives one current equation, each independent loop gives one voltage equation, and the solution gives all branch currents and node voltages.'
    },
    {
      q: 'Discuss the conditions for, and consequences of, maximum power transfer from a real source of EMF (with internal resistance) to an external load.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'A real source of EMF can be modelled as an ideal cell ε in series with internal resistance r. With external resistance R, current I = ε / (R + r) and power in the load P = I²R = ε²R / (R + r)². Differentiating with respect to R and setting dP/dR = 0 gives R = r as the condition for maximum power transfer. At this matched condition, half the total power is dissipated in the load and half in the source, so the efficiency is only 50%. Maximum power transfer matters where delivering as much power as possible to a small load is the goal, e.g. matching speakers to amplifiers. Where efficiency matters more — power supplies, the National Grid — R should be much larger than r so most energy goes to the load. The choice between maximum power and maximum efficiency depends on the design goal.'
    },
    {
      q: 'Evaluate the use of capacitors in electrical circuits, including their role in time-varying applications such as filtering, smoothing and timing.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Capacitors store charge between conductors separated by an insulator: Q = CV, with energy E = ½CV². They have many uses. After a rectifier, large capacitors smooth d.c. by charging on each cycle and supplying current in between. With resistors or inductors, they form low-, high- or band-pass filters, essential in audio, radio and signal processing. In RC timing circuits (such as the 555 timer), the time constant τ = RC defines repeatable pulses. Capacitors also store and release energy quickly in flashes, defibrillators and motor starting. Limitations include leakage, frequency-dependent impedance, and finite working voltage; electrolytic capacitors must be polarised correctly. On balance, the versatility, low cost and predictable behaviour make capacitors indispensable across analogue and digital electronics.'
    },
  ],

  /* ─────────────────────── T4 Materials ─────────────────────── */
  'T4': [
    {
      q: 'Compare the behaviour of a ductile metal, a polymer and a brittle ceramic under tension by referring to their stress–strain graphs.',
      marks: 9, command: 'Compare',
      modelAnswer: 'A ductile metal such as copper shows an initial linear (elastic) region where Hooke\'s law holds, followed by a yield point beyond which the material deforms plastically before eventually fracturing; large plastic strain is possible. A polymer such as rubber has a non-linear stress–strain curve with substantial elastic strain (often hundreds of percent) due to chains uncoiling, and shows hysteresis on unloading because energy is dissipated as heat. A brittle ceramic such as glass has a steep linear stress–strain region and fractures suddenly at the end of the elastic region with little or no plastic deformation; the fracture stress is generally lower than for ductile metals. The areas under the curves represent strain energy per unit volume; metals can absorb much energy before failure, polymers can absorb large strains at low stresses, and ceramics fail catastrophically with little energy absorption.'
    },
    {
      q: 'Explain what is meant by the Young modulus of a material and discuss why a high Young modulus does not always mean a strong material.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The Young modulus is the ratio of tensile stress to tensile strain in the elastic region: E = stress / strain. It measures how stiff a material is — how much it resists elastic deformation under load. A high Young modulus means small strains for a given stress; steel is much stiffer than rubber. Stiffness is not the same as strength. Strength is described by the yield stress (where plastic deformation begins) and the ultimate tensile stress (where the material fractures). A material can be very stiff but break at a relatively low stress if it is brittle, like glass; another may have a lower Young modulus but tolerate large stresses through plastic deformation, like mild steel. Designers therefore consider both properties separately and choose materials according to whether stiffness, strength or ductility is most important.'
    },
    {
      q: 'Describe how the elastic and plastic regions of a metal arise from the underlying behaviour of its atomic structure.',
      marks: 9, command: 'Describe',
      modelAnswer: 'In the elastic region, applied stress causes the atoms in the metal lattice to be displaced very slightly from their equilibrium positions; the inter-atomic bonds behave like stiff springs, and when the stress is removed the atoms return to their original positions and any deformation disappears. Beyond the yield point, the stresses become large enough to allow planes of atoms to slip past one another along defects in the lattice called dislocations. As dislocations move, layers of atoms shift permanently, and the material undergoes plastic deformation that is retained when the stress is removed. The number, mobility and entanglement of dislocations determine how easily a metal yields and how it work-hardens. Heat treatment, alloying and cold working all change the dislocation structure and so the macroscopic strength and ductility of the metal.'
    },
    {
      q: 'Evaluate the use of strong, low-density composite materials such as carbon-fibre-reinforced plastic in modern engineering, considering both benefits and drawbacks.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Composites such as carbon-fibre-reinforced plastic (CFRP) combine strong, stiff carbon fibres with a polymer matrix that holds them together and transfers loads. The result is a material with very high specific strength and specific stiffness — much greater per unit mass than steel — making it ideal where weight is critical, such as aircraft fuselages, racing-car chassis and high-end sports equipment. Composites are also corrosion-resistant and can be moulded into complex shapes that would require many parts in metal. There are drawbacks: composites are expensive, both in raw materials and in labour-intensive manufacturing; they can fail catastrophically with little warning if loaded beyond design limits; repair after damage is more complex than for metals; and recycling is difficult, with most composite waste currently going to landfill. Despite these issues, composites have transformed sectors such as aerospace and high-performance vehicles by enabling significant weight savings, fuel-efficiency gains and design freedom; ongoing research into thermoplastic matrices and recyclable composites continues to extend their advantages.'
    },
  ],

  /* ─────────────────────── T5 Waves & Particle Nature of Light ─────────────────────── */
  'T5': [
    {
      q: 'Explain how the photoelectric effect provides evidence for the photon model of light and discuss why the wave model fails to explain it.',
      marks: 12, command: 'Explain',
      modelAnswer: 'In the photoelectric effect, electrons are emitted from a metal surface only when light above a certain threshold frequency strikes the metal. The wave model predicted that any sufficiently intense light would eventually emit electrons and that there would be a delay while the wave energy built up. Experimentally, neither happens: light below the threshold frequency emits no electrons however intense, and emission is essentially instantaneous when above-threshold light arrives. Einstein explained this by treating light as photons of energy E = hf. Each photon transfers all its energy to one electron in a one-to-one interaction; if hf < φ no electron is freed, but if hf > φ electrons emerge with maximum kinetic energy hf − φ. Increasing intensity at a fixed frequency increases the rate of emission but not the kinetic energy of individual electrons, exactly as observed. The photoelectric effect strongly supports the photon model of light.'
    },
    {
      q: 'Discuss how Young\'s double-slit experiment supports the wave nature of light, and explain why coherence of the source is essential.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In Young\'s experiment, monochromatic, coherent light passes through a single slit and then through two narrow, closely spaced slits, producing an interference pattern of bright and dark fringes on a screen. Bright fringes occur where the path difference is a whole number of wavelengths (constructive interference), dark fringes where it is an odd number of half wavelengths (destructive interference); fringe spacing is w = λD/s. Such patterns can only be produced by waves combining; particles travelling in straight lines could not produce alternating fringes. Coherence — same frequency and constant phase difference — is essential because if the phase relationship between the slit sources varies randomly, the fringe positions move randomly and the pattern averages out within the time taken to observe it. This is why a laser, which is highly coherent, produces fringes much more easily than an incandescent lamp.'
    },
    {
      q: 'Describe how a diffraction grating produces sharp interference maxima and discuss its advantages over a double-slit arrangement for measuring wavelengths.',
      marks: 9, command: 'Describe',
      modelAnswer: 'A diffraction grating consists of many evenly spaced narrow slits. Monochromatic light incident on the grating produces interference between waves from all the slits. Maxima occur at angles θ satisfying d sin θ = nλ. With thousands of slits contributing, constructive interference is sharply defined: a tiny change in θ from the maximum produces destructive interference between waves from different slits, so the bright fringes are very narrow and the dark regions very dark. A double-slit arrangement has only two contributors, so its maxima are broader and lower contrast. Sharp, separated maxima from a grating allow precise measurements of wavelength, making gratings ideal for spectroscopy. The angular separation of the orders also increases with shorter slit spacing, giving high spectral resolution; and with many orders, multiple measurements can be averaged to reduce uncertainty.'
    },
    {
      q: 'Evaluate the use of optical fibres in modern communications, considering both the physical principles and the practical advantages and limitations.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Optical fibres carry information as pulses of light, exploiting total internal reflection at the boundary between a high-index core and a lower-index cladding. Light travels long distances inside the core because all the light is reflected at each cladding boundary, with very low losses. Modern step-index and graded-index fibres carry signals at very high data rates over many kilometres. Advantages over copper cables: far higher bandwidth, much lower attenuation, lighter and thinner cables, immunity to electromagnetic interference, and improved security as tapping is difficult. Limitations: sensitivity to bending, the need for precise alignment when joining fibres, dispersion limiting how short pulses can be at very high data rates, and the higher cost of optoelectronic interfaces at each end. On balance, optical fibres are now the dominant medium for long-distance and high-bandwidth communication, with continuing development of low-loss, multi-core fibres extending their advantages further.'
    },
  ],

  /* ─────────────────────── T6 Further Mechanics ─────────────────────── */
  'T6': [
    {
      q: 'Explain why an object moving in a circle at constant speed is accelerating, and describe how the centripetal force is supplied in two practical examples.',
      marks: 9, command: 'Explain',
      modelAnswer: 'An object moving in a circle at constant speed has a velocity that continually changes direction, even though its magnitude is constant. Velocity is a vector, so changing direction is a change in velocity, which means the object has acceleration directed towards the centre of the circle (centripetal acceleration of magnitude v²/r). By Newton\'s second law, an unbalanced force must produce this acceleration: the centripetal force, also directed to the centre. In a car turning a corner, the centripetal force is supplied by friction between the tyres and the road; if the road is slippery, friction may be insufficient and the car skids outwards. For a satellite in orbit, the centripetal force is supplied by gravity from the Earth — there is no contact force, but the gravitational pull continuously bends the satellite\'s velocity into a circular path.'
    },
    {
      q: 'Discuss conservation of momentum in elastic and inelastic collisions, with reference to two everyday examples.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In any isolated collision, the total momentum is conserved by Newton\'s third law: the impact forces are internal to the system. In an elastic collision, total kinetic energy is also conserved — collisions between hard balls in a Newton\'s cradle are nearly elastic, and the front ball moves forward while the rear ball stops, with momentum and kinetic energy exchanged in equal pairs. In an inelastic collision, momentum is conserved but some kinetic energy is converted to other stores such as sound, heat or deformation. Two cars colliding and crumpling together is highly inelastic: they may stick together and move with a common velocity, satisfying momentum conservation, but a large fraction of the kinetic energy is converted into work done deforming the metal. The principle of conservation of momentum allows the final velocities to be predicted, while kinetic-energy considerations determine how much remains and how much is dissipated.'
    },
    {
      q: 'Describe how a centripetal accelerometer or a banked track allows large lateral accelerations without depending only on friction.',
      marks: 9, command: 'Describe',
      modelAnswer: 'On a flat road, a vehicle turning a corner relies on friction between the tyres and the road to provide the centripetal force; this limits the speed at which the corner can be taken safely. On a banked track, the road is tilted inwards toward the centre of the curve; the normal contact force from the road has a horizontal component directed toward the centre, contributing to the centripetal force without relying on friction. At the design speed for a given bank angle, the horizontal component of the normal force exactly equals the required centripetal force and friction is not needed to keep the vehicle in the curve. Above or below the design speed, friction supplies the difference. Bobsleigh and velodrome tracks use very steep banking; race tracks and motorways use modest banking to allow higher cornering speeds safely. Centripetal accelerometers in instruments use a similar idea, with a small mass deflected by a known force to give a direct measure of acceleration.'
    },
    {
      q: 'Evaluate the use of resonance in engineering, including beneficial applications and the risks when it is not controlled.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Resonance is harnessed in many engineering applications. Musical instruments rely on resonant pipes, strings and bodies to produce loud, well-defined notes. Radio receivers use LC resonant circuits to select a single broadcast frequency. MRI scanners exploit nuclear magnetic resonance to image soft tissue. Microwave ovens operate at frequencies that resonate with water molecules in food. Conversely, uncontrolled resonance can destroy structures: the Tacoma Narrows Bridge collapsed in 1940 when wind-driven oscillations matched a torsional mode and inadequate damping let amplitudes grow until the structure failed. Modern bridges incorporate dampers and irregular vortex-shedding designs to prevent this. Helicopter rotors, building structures in earthquakes and machinery in factories all need to be designed so that natural frequencies avoid driving frequencies. Engineers therefore both harness and avoid resonance: when harnessed, light damping and accurate tuning are desirable; when avoided, heavy damping, frequency offset and active control are used. The key skill is to identify whether resonance should be enhanced or suppressed for a given system.'
    },
  ],

  /* ─────────────────────── T7 Electric & Magnetic Fields ─────────────────────── */
  'T7': [
    {
      q: 'Compare the form of Coulomb\'s law and Newton\'s law of gravitation, and discuss the differences between electric and gravitational forces.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Coulomb\'s law, F = Qq/(4πε₀r²), and Newton\'s law of gravitation, F = Gm₁m₂/r², share the same inverse-square form: both forces fall off as 1/r² with distance and act along the line joining the two sources. However, the differences are important. Electric forces can be either attractive (between unlike charges) or repulsive (between like charges); gravity is always attractive. Electric forces are vastly stronger than gravitational forces between fundamental particles — the electric force between two protons is about 10³⁶ times the gravitational force — so electricity dominates atomic-scale phenomena. On astronomical scales, where bulk matter is electrically neutral, gravity dominates. Both are conservative forces with associated potential energies that depend only on position, and both can be described by fields with field strengths equal to the force per unit "charge" (mass for gravity, electric charge for the electric field).'
    },
    {
      q: 'Explain how the concept of magnetic flux linkage and Faraday\'s law together explain the operation of a transformer.',
      marks: 12, command: 'Explain',
      modelAnswer: 'For a single loop of area A in a magnetic field of flux density B perpendicular to the plane of the loop, the magnetic flux Φ = BA. For N turns of wire, the flux linkage is NΦ. Faraday\'s law states that the induced EMF equals the negative rate of change of flux linkage: ε = −d(NΦ)/dt. In a transformer, two coils are wound on the same iron core. An alternating current in the primary coil produces an alternating flux Φ in the core, linking both coils equally because of the iron path. The induced EMF in the secondary is ε_s = −N_s dΦ/dt, while the back-EMF in the primary is ε_p = −N_p dΦ/dt. Dividing these gives V_s/V_p = N_s/N_p. For an ideal transformer, power is conserved, so the current ratio is the inverse of the voltage ratio. Step-up transformers (more secondary turns) increase voltage and decrease current; step-down does the opposite. The whole device works only with alternating current because direct current produces no change in flux after switch-on, so no EMF is induced in the secondary except briefly during transients.'
    },
    {
      q: 'Describe the application of the Hall effect in measuring magnetic fields and identifying types of charge carriers.',
      marks: 9, command: 'Describe',
      modelAnswer: 'When a current flows through a thin slab of conductor or semiconductor placed in a magnetic field perpendicular to the current, a transverse voltage develops across the slab — the Hall voltage. The magnetic force on the moving charges (qv × B) deflects them to one side, until an electric field across the slab balances the magnetic force. The Hall voltage is V_H = BI / (nqt), where t is the thickness and n the carrier density. A Hall probe is a calibrated device that uses this effect to measure unknown magnetic fields, with linear, fast and high-resolution response, and is widely used in industry and research. The sign of the Hall voltage indicates the sign of the charge carriers: in a metal, electrons; in a p-type semiconductor, positive holes — supporting band theory. Hall sensors are also used for non-contact current measurement, position sensing and brushless motor commutation.'
    },
    {
      q: 'Evaluate the use of capacitors and inductors as energy-storage components in modern circuits, comparing their time-dependent behaviour.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Capacitors store energy in the electric field between their plates: E = ½CV² = ½Q²/C. When charged through a resistor, voltage rises exponentially as V = V₀(1 − e^(−t/RC)); discharge follows V = V₀ e^(−t/RC). Inductors store energy in their magnetic fields: E = ½LI². Current through an inductor in series with a resistor rises as I = (V/R)(1 − e^(−tR/L)) and decays as I = I₀ e^(−tR/L). Both elements introduce delays and are used for timing, filtering and energy storage. Capacitors are typically smaller, cheaper and more efficient at storing modest amounts of energy at high voltage and low current — ideal for camera flashes and brief power-supply backup; supercapacitors bridge the gap with batteries. Inductors store more energy per unit cost at high currents and are essential in switching power supplies and motor drives. Drawbacks: capacitors leak charge over time and have finite energy density; inductors generate large back-EMFs when current is interrupted, requiring protection. Many systems combine the two — for example, in LC resonant circuits — to exploit both forms of storage. The choice depends on whether short bursts of high voltage (capacitors) or sustained high currents (inductors) are needed.'
    },
  ],

  /* ─────────────────────── T8 Nuclear & Particle Physics ─────────────────────── */
  'T8': [
    {
      q: 'Describe the standard model of particle physics, including the classification of fundamental particles and how the four fundamental forces are mediated.',
      marks: 16, command: 'Describe',
      modelAnswer: 'The standard model classifies all known fundamental particles as either fermions (matter particles) or bosons (force carriers). Fermions divide into quarks and leptons. Quarks come in six flavours (up, down, charm, strange, top, bottom) and combine to form hadrons such as protons (uud) and neutrons (udd). Leptons include the electron, muon, tau and their associated neutrinos. Each fermion has a corresponding antiparticle with opposite charge. The electromagnetic force is mediated by the photon, the weak force by the W⁺, W⁻ and Z bosons, the strong force (binding quarks in hadrons) by gluons, and the residual strong force between hadrons by mesons such as pions. Gravity, on the macroscopic scale, is described by general relativity rather than the standard model. The Higgs boson, discovered in 2012, completes the standard model by giving fundamental particles their masses through interaction with the Higgs field. The standard model is extremely successful but does not include gravity or explain dark matter and dark energy, so it is incomplete.'
    },
    {
      q: 'Compare alpha and beta-minus decay in terms of changes inside the nucleus and the particles emitted, and explain why beta-minus decay implies the existence of the neutrino.',
      marks: 12, command: 'Compare',
      modelAnswer: 'In alpha decay, an unstable nucleus emits a helium-4 nucleus (two protons, two neutrons); the parent loses 4 mass units and 2 protons, the daughter is two places lower in atomic number, and the alpha particle has a discrete kinetic energy. In beta-minus decay, a neutron transforms into a proton, an electron and an antineutrino: n → p + e⁻ + ν̄. Atomic number rises by 1, mass number is unchanged, and the beta particle has a continuous range of kinetic energies. Early experiments showed beta particles emerging with a spectrum of energies, even though energy conservation required a fixed value if only the nucleus and electron were involved. Pauli proposed an additional, almost massless, neutral particle — the antineutrino — to carry away the missing energy and momentum, restoring conservation. Direct detection of the neutrino confirmed the prediction, providing strong evidence for the standard model and the weak interaction.'
    },
    {
      q: 'Explain what is meant by the binding energy of a nucleus and discuss how the variation of binding energy per nucleon with mass number determines whether fission or fusion releases energy.',
      marks: 12, command: 'Explain',
      modelAnswer: 'The binding energy of a nucleus is the energy needed to disassemble it into its individual nucleons, equal to the mass defect (the difference between the nuclear mass and the sum of nucleon masses) multiplied by c². Dividing binding energy by mass number gives binding energy per nucleon, a measure of how tightly each nucleon is held. The graph of binding energy per nucleon against A rises steeply for very light nuclei, peaks near iron-56 at ~8.8 MeV per nucleon, then falls slowly for heavier nuclei. Reactions that move toward this peak release energy. Fusion of light nuclei climbs up the steep left side and releases a lot of energy per nucleon. Fission of heavy nuclei drops down the right side and also releases energy, though less per nucleon than fusion. Iron-56 is the most stable nucleus and cannot release energy by either process. This curve is the underlying explanation for why both fission and fusion are possible energy sources, and why iron and nickel mark the natural endpoint of stellar nucleosynthesis.'
    },
    {
      q: 'Evaluate the use of particle accelerators in research, including their benefits and limitations.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Particle accelerators such as the LHC use electric and magnetic fields to accelerate charged particles to near light-speed, then collide them and detect the products. They are essential for high-energy particle physics: they discovered the W and Z bosons, the top quark and the Higgs boson, and probe matter on scales smaller than 10⁻¹⁸ m. They also have important applications in medicine (proton therapy for cancer, isotope production) and materials science (synchrotron X-ray sources). Limitations include very high cost and energy consumption, the need for advanced superconducting magnets at cryogenic temperatures, large international collaboration that can be politically complex, and physical limits — building larger machines to reach higher energies eventually requires impractical scales. Smaller accelerators using novel techniques such as plasma wakefields are being developed. Despite their cost and complexity, accelerators have transformed our understanding of fundamental physics and provided practical benefits, justifying continued investment.'
    },
  ],

  /* ─────────────────────── T9 Thermodynamics ─────────────────────── */
  'T9': [
    {
      q: 'Explain the kinetic theory of gases and discuss how its assumptions relate to the ideal gas equation pV = nRT.',
      marks: 12, command: 'Explain',
      modelAnswer: 'Kinetic theory models a gas as many identical small particles in random motion, with key assumptions: particles are very small compared to the spaces between them; collisions are perfectly elastic; intermolecular forces are negligible except during collisions; particles obey Newtonian mechanics; collision durations are negligible compared with intervals between them. From these assumptions, the average pressure on the walls can be derived, leading to pV = ⅓Nm⟨c²⟩. Comparing with pV = nRT gives ½m⟨c²⟩ ∝ T, so absolute temperature is a measure of the mean translational kinetic energy. The ideal gas law is therefore not a separate empirical fact but a direct consequence of the kinetic model. Real gases deviate at high pressure or low temperature when intermolecular forces and finite molecular sizes become important; corrections such as the van der Waals equation address this.'
    },
    {
      q: 'Compare the energy changes in heating, melting and boiling a substance, with reference to specific heat capacity and specific latent heat.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Heating without a change of state increases the kinetic energy of particles, raising the temperature; the energy required is Q = mcΔθ, where c is the specific heat capacity. At the melting or boiling point, further energy is supplied at constant temperature to overcome intermolecular forces and change state; the energy is Q = mL, with L the specific latent heat (of fusion for melting, of vaporisation for boiling). Boiling typically requires more energy per kilogram than melting, because nearly all intermolecular forces are overcome to form a gas, while only the rigid lattice arrangement is broken in melting. During heating only the kinetic energy store changes; during melting/boiling only the potential energy store changes; total internal energy increases in both cases. The complete heating curve shows alternating sloped (heating) and flat (state change) regions, and integrating gives the total energy required to take a substance between specified temperature/state combinations.'
    },
    {
      q: 'Discuss the first law of thermodynamics and apply it qualitatively to the heating, expansion and compression of a fixed mass of gas.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The first law of thermodynamics states that the change in internal energy ΔU of a system equals the heat Q supplied to the system minus the work W done by the system on its surroundings: ΔU = Q − W. When a gas is heated at constant volume, W = 0, so all the heat goes into increasing internal energy and temperature. When a gas expands against a piston, the gas does positive work on the surroundings; if Q is supplied at the same rate, the internal energy and temperature stay constant (isothermal). Adiabatic compression supplies no heat (Q = 0), and the work done on the gas raises its internal energy and temperature; this is why a bicycle pump warms during fast pumping. The first law is essentially conservation of energy applied to thermal systems and underpins the analysis of engines, refrigerators and many natural processes.'
    },
    {
      q: 'Evaluate the use of materials with high specific heat capacity in domestic central heating systems, considering practical, economic and safety factors.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'A material with a high specific heat capacity stores a large amount of thermal energy for a relatively small rise in temperature. Water has one of the highest specific heat capacities of any common substance, making it well suited to carrying thermal energy from a boiler around a house through radiators. As hot water flows through radiators, it transfers a lot of energy while only cooling slightly, providing steady, even heating. Water is cheap, non-toxic and easy to pump, contributing to the low cost and good safety of central heating systems. Drawbacks include: water can corrode metal pipes, may freeze in cold weather and can leak, and a large volume must be heated initially before the system warms up, increasing energy use at startup. Inhibitors and antifreeze in modern systems mitigate these issues, although they add complexity. On balance, the high heat capacity, low cost and safety make water an effective choice; alternative fluids would be more expensive or hazardous, so water remains the standard heat-transfer fluid in central heating despite these limitations.'
    },
  ],

  /* ─────────────────────── T10 Space ─────────────────────── */
  'T10': [
    {
      q: 'Describe the life cycle of a star similar in mass to the Sun, from formation to its final remnant.',
      marks: 12, command: 'Describe',
      modelAnswer: 'A star like the Sun forms when gravitational attraction pulls together a cloud of dust and gas (a nebula). As the cloud contracts, the temperature and pressure at the centre rise until hydrogen nuclei begin to fuse into helium, releasing energy. Outward radiation pressure balances inward gravity, and the star spends most of its life in this stable state, called the main sequence. When core hydrogen runs out, the core contracts and outer layers expand and cool, forming a red giant, with helium fusing to heavier elements up to carbon and oxygen. Eventually the outer layers are blown off as a planetary nebula, leaving a hot, dense core called a white dwarf. The white dwarf cools and fades over billions of years to become a cold, dark black dwarf in the very distant future. More massive stars follow a different path, leading to supernovae and either neutron stars or black holes.'
    },
    {
      q: 'Explain what is meant by red shift and discuss how it provides evidence for the expansion of the universe and the Big Bang theory.',
      marks: 12, command: 'Explain',
      modelAnswer: 'When light from a distant galaxy is analysed, its dark spectral lines (from elements such as hydrogen) are observed at longer wavelengths than they appear in the laboratory. This shift towards the red end of the spectrum is red shift, indicating that the source is moving away from us. Light from more distant galaxies shows greater red shift, with recession speed proportional to distance — Hubble\'s law. Such a pattern is what would be expected if space itself were expanding uniformly in every direction, carrying galaxies apart. Tracing this expansion backwards leads to the idea that all matter and energy were once concentrated in a hot, dense state — the Big Bang. The cosmic microwave background, predicted by this model and observed across the sky, and the relative abundances of light elements provide further independent support. Together, red shift, the CMB and primordial nucleosynthesis form the strongest evidence for the Big Bang theory of the universe\'s origin.'
    },
    {
      q: 'Discuss the orbits of satellites and planets, and explain why a satellite at higher altitude orbits more slowly.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Both satellites in orbit around the Earth and planets in orbit around the Sun are kept in their nearly circular paths by a gravitational force directed towards the centre of the larger body. Setting GMm/r² equal to mv²/r gives v = √(GM/r), the orbital speed; T = 2πr/v gives Kepler\'s third law T² = (4π²/GM) r³. So lower-orbit satellites move faster and have shorter periods, while higher orbits are slower with longer periods. A satellite does not fall to Earth because it moves sideways at the right speed: as it falls toward the Earth, the surface curves away beneath it at the same rate. Geostationary satellites at radius about 42 000 km have 24-hour periods, matching Earth\'s rotation. These relationships govern artificial satellites, the Moon and the planets, and have been verified by precise tracking of spacecraft.'
    },
    {
      q: 'Evaluate the use of artificial satellites for communication, observation and navigation, considering both benefits and drawbacks.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Artificial satellites have many uses. Geostationary satellites are used for television, telephone and weather forecasting because they remain above the same point on Earth and can be tracked by a fixed dish. Lower-orbit satellites support GPS navigation, mobile communications, Earth observation, weather monitoring and scientific research, including imaging the Earth\'s surface to track climate change and natural disasters. The benefits include rapid global communications, accurate weather forecasting that saves lives during storms, navigation systems used by hundreds of millions of people daily, and detailed monitoring of environmental change. There are drawbacks: satellites are expensive to launch and maintain, and the build-up of space debris in orbit risks damaging operational satellites. Concerns also exist about privacy and military use of imaging satellites. On balance, the benefits to communication, navigation, weather forecasting and Earth science clearly outweigh the costs and risks, but international management of space traffic and frequencies is increasingly important as more countries and companies launch their own constellations.'
    },
  ],

  /* ─────────────────────── T11 Nuclear Radiation ─────────────────────── */
  'T11': [
    {
      q: 'Compare the properties of alpha, beta and gamma radiation in terms of nature, ionising power, penetrating ability and range in air.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Alpha radiation consists of helium nuclei (two protons, two neutrons), is highly ionising and very weakly penetrating: stopped by a few cm of air or a sheet of paper. Beta radiation is a fast-moving electron emitted from the nucleus when a neutron decays into a proton; it is moderately ionising, more penetrating than alpha, stopped by a few mm of aluminium and travelling around a metre in air. Gamma radiation is high-frequency electromagnetic radiation, the least ionising but most penetrating, with significant intensity passing through several cm of lead and travelling many metres in air. The differences arise from differences in mass, charge and energy: heavier, more highly charged alpha particles interact strongly with matter and quickly lose energy, while uncharged photons pass through easily but ionise less efficiently.'
    },
    {
      q: 'Discuss the medical uses of radioactive isotopes, considering both the benefits and the risks to patients and staff.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Radioactive isotopes are widely used in medicine. Diagnostic tracers, such as technetium-99m with its 6-hour half-life, are introduced into the body and tracked using gamma cameras to image organ function or detect blockages. Radiotherapy uses gamma sources, proton beams or beta-emitting implants to kill cancer cells; multiple beams are crossed at the tumour to deliver a high dose while sparing surrounding healthy tissue. Gamma irradiation is also used to sterilise medical equipment by killing bacteria. The benefits include non-invasive diagnosis, effective treatment of otherwise inoperable cancers and reliable sterilisation. However, ionising radiation can damage healthy DNA, increasing the long-term risk of cancer. Risks are managed by using the lowest effective dose, choosing isotopes with short half-lives, shielding staff with lead, restricting exposure time, and continually monitoring doses. International standards govern source supply and disposal. On balance, the medical benefits typically outweigh the risks when proper procedures are followed.'
    },
    {
      q: 'Explain what is meant by the half-life of a radioactive isotope and why it matters for the management of radioactive waste.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The half-life of a radioactive isotope is the average time taken for half of the unstable nuclei in a sample to decay, or equivalently for the activity to fall to half its original value. Half-lives vary from fractions of a second to billions of years. Waste with a long half-life remains dangerous for a very long time and must be stored securely for thousands or even millions of years to allow its activity to fall to safe levels. Waste with a short half-life decays quickly and is hazardous for only a short period, but may be initially highly radioactive. Both factors, together with the type of radiation and quantity of waste, determine how the waste must be stored, shielded and monitored. High-level waste is often vitrified to immobilise the radionuclides and stored in deep, geologically stable repositories.'
    },
  ],

  /* ─────────────────────── T12 Gravitational Fields ─────────────────────── */
  'T12': [
    {
      q: 'Describe Newton\'s law of gravitation and explain how it leads to the inverse-square dependence of gravitational field strength on distance from a point mass.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Newton\'s law of gravitation states that two point masses m₁ and m₂ separated by a distance r attract each other with a force F = Gm₁m₂/r², where G is the gravitational constant. Defining the gravitational field strength g of mass M at distance r as the force per unit test mass, g = GM/r². So the field strength of a point mass falls off as the inverse square of the distance from the mass. Field lines emerge radially inwards toward the mass, becoming further apart at greater distances, consistent with the weakening field. The same form holds outside any spherically symmetric body, by Newton\'s shell theorem; this is why the Earth can be treated as a point mass for objects in space, and why the surface gravitational field strength of the Earth is approximately constant in everyday situations.'
    },
    {
      q: 'Discuss why a satellite in low Earth orbit appears weightless, even though gravity is still acting on it.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Gravity is still very nearly as strong in low Earth orbit as it is on the surface of the Earth — at 400 km altitude it is reduced by only about 12%. The "weightlessness" experienced inside an orbiting satellite is not because gravity has vanished, but because the satellite and everything inside it are in continuous free fall around the Earth. Both the satellite and an object inside it have the same gravitational acceleration, so there is no relative force between them: a scale would record zero, and an unsupported object floats. This is the same effect that makes a person feel "weightless" briefly during the falling phase of a rollercoaster. Apparent weight is the contact force between an object and its support; in orbit, the support and object accelerate together, so the contact force vanishes. This is why astronaut training includes flying in parabolic-flight aircraft that simulate free fall for short periods.'
    },
    {
      q: 'Evaluate the use of geostationary versus low-Earth-orbit satellites for different communication and observation tasks.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'A geostationary satellite orbits at radius ~42 000 km in the equatorial plane with a period of 24 hours, so it remains above the same point on Earth and can be tracked by a fixed dish. This makes it ideal for television broadcasting, fixed-link communications and continuous weather observation of the same region. Disadvantages include the long propagation delay (~250 ms each way) caused by the high altitude, weak signals at ground level, and limited coverage at high latitudes. A low-Earth-orbit (LEO) satellite at altitudes of a few hundred km moves quickly across the sky with a short period (~90 minutes) and is closer to the ground, giving short delays, strong signals and high-resolution imaging. LEO is therefore preferred for real-time mobile communications (constellations such as Starlink), GPS navigation, scientific imaging and Earth observation. Disadvantages: any single LEO satellite is only over a given location for minutes at a time, requiring a constellation of many satellites to provide continuous coverage; LEO orbits are also more affected by atmospheric drag, requiring station-keeping. The choice between the two depends on the trade-off between coverage area, latency, signal strength and cost; many modern systems combine both for complementary capabilities.'
    },
  ],

  /* ─────────────────────── T13 Oscillations ─────────────────────── */
  'T13': [
    {
      q: 'Explain what is meant by simple harmonic motion (SHM) and describe two examples of physical systems that undergo SHM.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Simple harmonic motion occurs when an object\'s acceleration is directly proportional to its displacement from a fixed equilibrium point and is always directed back towards that point: a = −ω²x. Solutions are sinusoidal in time, with constant amplitude in the absence of damping and a period independent of amplitude. A mass on a spring obeys SHM with restoring force F = −kx, giving ω = √(k/m). A simple pendulum of length L undergoes approximate SHM for small angular displacements with ω = √(g/L), so the period depends on length but not on the mass of the bob. Both systems exchange energy continuously between kinetic and potential stores, with total mechanical energy constant if there is no damping. SHM models many real systems where small displacements from equilibrium are common, from molecular vibrations to pendulum clocks.'
    },
    {
      q: 'Compare the conditions under which damped, free and forced oscillations occur, and discuss resonance with a real-world example.',
      marks: 12, command: 'Compare',
      modelAnswer: 'A free oscillation occurs at a system\'s natural frequency once it has been displaced and released; energy slowly decreases if any damping is present. A damped oscillation has additional dissipative forces (such as air resistance or friction); light damping reduces amplitude slowly, heavy damping quickly, and critical damping returns the system to equilibrium in the shortest time without oscillation. Forced oscillations occur when an external periodic driving force is applied at a chosen driving frequency. When the driving frequency approaches the natural frequency, the amplitude grows large — resonance. The maximum amplitude depends on the damping: lightly damped systems have very high, sharp resonance peaks; heavily damped systems have low, broad peaks. The Tacoma Narrows Bridge collapse in 1940, when wind-driven oscillations matched a torsional mode and inadequate damping let amplitudes grow until the structure failed, is a famous example. Resonance is also harnessed usefully in MRI scanners, musical instruments and radio tuners.'
    },
    {
      q: 'Discuss the energy changes during one complete cycle of a frictionless mass-spring oscillator.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In a frictionless mass-spring oscillator, total mechanical energy is conserved and is exchanged continuously between kinetic energy (KE) of the mass and elastic potential energy (PE) of the spring. At maximum displacement (amplitude), the mass is momentarily at rest: KE is zero and all energy is stored as elastic PE in the spring (½kx²). As the mass moves back toward equilibrium, the spring does positive work on it, transferring PE into KE; at the equilibrium position the spring is at natural length, PE is zero, and KE is maximum (½mv₀²). Beyond equilibrium, the moving mass compresses the spring on the other side, doing work against the spring and transferring KE back to PE, until the mass momentarily stops at the opposite extreme. The cycle then reverses. Plotting KE and PE against displacement gives parabolic curves whose sum is constant, illustrating energy conservation. With damping, total energy slowly decreases as work is done against dissipative forces.'
    },
    {
      q: 'Evaluate the use of damping in engineering, including how it is achieved and why the right amount of damping matters.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Damping reduces the amplitude of oscillations by transferring mechanical energy to other stores, usually thermal. It is achieved through several mechanisms: viscous damping (using a fluid in a dashpot or shock absorber), friction (dry friction in brake discs or specially designed dampers), eddy-current damping (a moving conductor in a magnetic field) and material damping (rubber and polymer mounts that absorb vibrations). The right amount of damping is essential. Light damping in instruments such as moving-coil meters allows clear oscillation but is undesirable in vehicles and buildings, where it allows resonance to build up dangerous amplitudes. Heavy damping suppresses oscillation but slows response, which is unwelcome in seismographs or musical instruments. Critical damping returns the system to equilibrium in the shortest time without overshoot, ideal for car suspensions, where it gives a comfortable, stable ride. In tall buildings exposed to wind or earthquakes, tuned mass dampers (large weights with their own damping) absorb energy from sway. Trade-offs include cost, complexity, weight, and reduced responsiveness, but the safety and comfort benefits make appropriate damping essential in modern design.'
    },
  ],

};

if (typeof module !== 'undefined' && module.exports) module.exports = PHYSICS_EDEXCEL_AI_FEEDBACK;
