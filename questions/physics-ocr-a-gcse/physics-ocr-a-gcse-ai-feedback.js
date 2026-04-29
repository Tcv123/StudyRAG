/*
 * OCR A GCSE Physics (J249 / Gateway) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate. Each question carries a top-band model answer
 * the AI can use as a grading anchor.
 */

const PHYSICS_OCR_A_GCSE_AI_FEEDBACK = {

  /* ─────────────────────── P1 Matter ─────────────────────── */
  'P1': [
    {
      q: 'Compare the arrangement, movement and energy of particles in solids, liquids and gases.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a solid, particles are arranged in a regular fixed lattice, are very close together and only vibrate about fixed positions; they have the lowest kinetic energy of the three states. In a liquid, particles are still close together but no longer in a fixed lattice; they can move past each other randomly, giving the liquid its ability to flow and take the shape of its container. In a gas, particles are far apart with no fixed arrangement, move rapidly and randomly in all directions, and have the highest kinetic energy. The forces of attraction between particles are strong in solids, weaker in liquids and almost negligible in gases, which explains why solids have a fixed shape and volume, liquids have a fixed volume but variable shape, and gases fill any container completely.'
    },
    {
      q: 'Explain, in terms of particles, what happens to the internal energy of a substance during a change of state, and why temperature stays constant.',
      marks: 9, command: 'Explain',
      modelAnswer: 'During a change of state, energy is supplied to or removed from the substance, but the temperature stays constant because the energy is not being used to change the average kinetic energy of the particles. Instead it is being used to overcome (during melting or boiling) or form (during freezing or condensing) the bonds and forces of attraction between particles. For example, when ice melts, the supplied energy increases the potential energy store of the particles by breaking the rigid lattice arrangement, allowing them to move past each other as a liquid; the kinetic energy, and so the temperature, remains unchanged until all the ice has melted. Total internal energy still increases (during melting/boiling) or decreases (during freezing/condensing), even though temperature is unchanged.'
    },
    {
      q: 'Describe what is meant by Brownian motion and explain how it provides evidence for the particle model of matter.',
      marks: 6, command: 'Describe',
      modelAnswer: 'Brownian motion is the random, jittery movement of small visible particles, such as smoke specks suspended in air, when observed through a microscope. The particles move in unpredictable directions and continually change speed and direction. This motion is caused by the much smaller, invisible air particles colliding with the visible particles from random angles, transferring momentum to them. Because Brownian motion can only be explained by collisions with even smaller fast-moving particles, it provides direct evidence that matter is made of tiny particles in continuous motion, consistent with the particle (kinetic) model.'
    },
    {
      q: 'Explain how gas pressure arises from the motion of particles, and discuss what happens to the pressure when the gas is heated at constant volume.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Gas pressure arises because the rapidly moving gas particles continually collide with the walls of their container. Each collision exerts a small force as the particle changes direction, and the total force per unit area, averaged over time, is the pressure. When the gas is heated at constant volume, the average kinetic energy of each particle increases, so on average particles move faster. They strike the walls more frequently and with greater momentum, so each collision exerts a larger force and there are more collisions per second. The total force on the walls therefore increases, and since the area is unchanged, the pressure rises with temperature.'
    },
    {
      q: 'Describe the structure of an atom and explain the relative sizes, charges and masses of its constituent particles.',
      marks: 9, command: 'Describe',
      modelAnswer: 'An atom consists of a small, dense, positively charged nucleus made of protons and neutrons, surrounded by negatively charged electrons in shells around the nucleus. The radius of an atom is approximately 10⁻¹⁰ m, while the radius of the nucleus is around 10⁻¹⁵ m, so the nucleus is about 10 000 times smaller than the atom and almost all of the atom is empty space. Protons have a charge of +1 and a relative mass of 1; neutrons have no charge and a relative mass of 1; electrons have a charge of −1 and a relative mass of approximately 1/1836, which is negligible. Almost all the mass of the atom is concentrated in the nucleus, while almost all the volume is occupied by the electron cloud.'
    },
    {
      q: 'Discuss how the alpha-scattering experiment led to the development of the nuclear model from the plum-pudding model.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'In the plum-pudding model, the atom was thought to be a positive sphere with negative electrons embedded in it, like fruit in a pudding. In the alpha-scattering experiment, Rutherford fired alpha particles at a thin gold foil and observed where they ended up. Most alpha particles passed straight through with little or no deflection, showing that atoms are mostly empty space. A small number were deflected through large angles, and a very small fraction bounced back almost in the direction they came from, which could not be explained by a uniform diffuse positive charge. Rutherford concluded that the positive charge of an atom must be concentrated in a tiny, dense region — the nucleus — that contains almost all the mass of the atom. Electrons must orbit the nucleus at relatively large distances, leaving most of the atom as empty space. This evidence forced scientists to replace the plum-pudding model with the nuclear model, which provided a much better explanation of experimental observations.'
    },
    {
      q: 'Explain the difference between density and mass, and discuss why density is a useful property for identifying materials.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Mass is a measure of the amount of matter in an object, while density is the mass per unit volume — that is, how tightly packed that mass is. Two objects can have very different masses but the same density (for example, a small and a large block of the same metal), or very different densities but the same mass (for example, a kilogram of feathers and a kilogram of steel). Because density is an intrinsic property of a material — independent of the size or shape of the sample — it can be used to identify or test materials. For instance, gold has a density of about 19.3 g/cm³; if a sample claimed to be gold has a different density, it must contain other metals or be hollow. Density also explains why objects float or sink: an object less dense than the surrounding fluid will float, while one denser will sink.'
    },
    {
      q: 'Evaluate the use of materials with high specific heat capacity, such as water, in domestic central heating systems.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'A material with a high specific heat capacity stores a large amount of thermal energy for a relatively small rise in temperature, and releases it slowly as it cools. Water has one of the highest specific heat capacities of any common substance, making it well suited to carrying thermal energy from a boiler around a house through radiators. As the hot water flows through radiators, it transfers a large amount of energy to the room while only cooling slightly, providing steady, even heating. Water is also cheap, non-toxic and easy to pump. There are some drawbacks: water can corrode metal pipes, may freeze in cold weather and can leak, and a large volume must be heated initially before the system warms up. However, on balance, the high heat capacity, low cost and safety make water an effective choice; alternative fluids would be more expensive or hazardous, so water remains the standard heat-transfer fluid in central heating despite these limitations.'
    },
  ],

  /* ─────────────────────── P2 Forces ─────────────────────── */
  'P2': [
    {
      q: 'Describe Newton\'s three laws of motion and explain how each applies to the motion of a car accelerating from rest.',
      marks: 12, command: 'Describe',
      modelAnswer: 'Newton\'s first law states that an object continues at rest or at constant velocity unless acted on by a resultant force. A stationary car remains stationary because driving force and friction balance to zero; once moving at constant velocity, the engine\'s driving force balances friction and air resistance. Newton\'s second law states that the resultant force equals mass × acceleration (F = ma). When the driver presses the accelerator, the driving force exceeds friction; this gives a resultant forward force, and the car accelerates. A heavier car needs a larger force to give the same acceleration. Newton\'s third law states that for every action force there is an equal and opposite reaction force on a different body. As the car accelerates, the wheels push backwards on the road, and the road exerts an equal forward force on the wheels, which propels the car forward.'
    },
    {
      q: 'Compare scalar and vector quantities, using examples from forces and motion to show the difference.',
      marks: 6, command: 'Compare',
      modelAnswer: 'A scalar quantity has only magnitude (size), while a vector quantity has both magnitude and direction. Examples of scalars include mass, time, energy, temperature, distance and speed. Examples of vectors include force, weight, displacement, velocity, acceleration and momentum. For example, two cars travelling at 30 m/s have the same speed (a scalar), but if one moves north and the other south, they have different velocities; a 50 N force pushing left has a different effect from a 50 N force pushing right, because force is a vector.'
    },
    {
      q: 'Explain the factors that affect the stopping distance of a car and how each factor influences thinking distance and braking distance.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The total stopping distance of a car is the sum of the thinking distance (distance travelled during the driver\'s reaction time) and the braking distance (distance travelled while the brakes decelerate the car to rest). Thinking distance is increased by anything that lengthens reaction time, such as tiredness, alcohol, drugs or distractions like using a phone, and is also longer at higher speeds because the car covers more ground in any given reaction time. Braking distance depends on the speed of the car and the braking force available; greater speed gives the car much more kinetic energy, which the brakes must remove, so braking distance increases roughly with the square of the speed. Wet, icy or oily roads reduce friction between tyres and road, increasing braking distance, and worn tyres or worn brakes reduce braking force and have the same effect.'
    },
    {
      q: 'Discuss how vehicle safety features such as crumple zones, airbags and seatbelts reduce the force on a passenger in a crash.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In a crash, the passenger\'s momentum must be reduced to zero, and the average force on them equals the change in momentum divided by the time over which it occurs. Crumple zones at the front and rear of a car deform progressively, increasing the time taken for the car to stop and reducing the force on occupants. Seatbelts stretch slightly during a sudden stop, again increasing the time over which the passenger decelerates and preventing them from being thrown into the windscreen. Airbags inflate rapidly between the passenger and the dashboard or steering wheel, providing a soft cushion that further extends the time of impact and spreads the force over a larger area of the body. Together, these features reduce the peak force on occupants and lower the risk of serious injury, although they cannot eliminate it entirely.'
    },
    {
      q: 'Explain the difference between elastic and inelastic deformation, and describe how Hooke\'s law applies to a spring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a force is applied to an object, it may stretch or compress. Elastic deformation occurs when the object returns to its original shape and size once the force is removed; inelastic deformation occurs when it does not return fully and remains permanently changed. Springs and rubber bands deform elastically up to a certain limit; beyond their elastic limit they deform inelastically. Hooke\'s law states that the extension of a spring is directly proportional to the force applied, provided the elastic limit is not exceeded: force = spring constant × extension. On a force–extension graph this gives a straight line through the origin in the elastic region, with the gradient equal to the spring constant. Beyond the elastic limit, the line curves and the spring no longer obeys Hooke\'s law.'
    },
    {
      q: 'Evaluate how the design of a parachute helps a skydiver to land safely, in terms of the forces acting and terminal velocity.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'When a skydiver first jumps, weight is the only significant force, and they accelerate downwards. As speed increases, air resistance grows until air resistance equals weight; the resultant force is zero and the skydiver falls at a constant terminal velocity, typically 50–60 m/s. Opening the parachute dramatically increases the surface area exposed to the air, greatly increasing air resistance at any given speed. Air resistance now exceeds weight, so the skydiver decelerates rapidly. As speed falls, air resistance decreases until once again it balances weight, giving a new, much lower terminal velocity (around 5 m/s) that allows a safe landing. The parachute is designed to be large enough to give a low terminal velocity but not so large that it tears or makes the skydiver hard to control; vents in the canopy stabilise it in flight. Overall, the parachute exploits the dependence of air resistance on surface area to convert what would otherwise be a fatal landing into a survivable one.'
    },
    {
      q: 'Describe what is meant by the moment of a force and discuss how the principle of moments applies to a balanced see-saw or lever.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The moment of a force is its turning effect about a pivot, calculated as force multiplied by the perpendicular distance from the line of action of the force to the pivot, in newton-metres. A larger force or a longer distance from the pivot produces a larger turning effect. The principle of moments states that for an object in equilibrium, the sum of the clockwise moments about any pivot equals the sum of the anticlockwise moments. On a balanced see-saw, a heavier child sitting closer to the pivot can balance a lighter child sitting further away, because each child\'s moment (weight × distance) is equal and opposite. The same principle is used in levers such as crowbars and spanners: a relatively small effort applied at a long distance from the pivot produces a large moment that can overcome a heavy load close to the pivot, allowing heavy objects to be moved or tight nuts to be turned with less effort.'
    },
    {
      q: 'Discuss the difference between mass and weight, and explain how each varies on the Moon compared with on Earth.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Mass is a scalar measure of the amount of matter in an object, measured in kilograms; it does not change when the object moves around the universe. Weight is a vector force caused by gravity acting on the mass, measured in newtons, given by W = m × g, where g is the gravitational field strength. On Earth, g is approximately 9.8 N/kg; on the Moon it is about 1.6 N/kg, around one-sixth of Earth\'s value. An astronaut who has a mass of 60 kg on Earth still has a mass of 60 kg on the Moon, but their weight on Earth is about 588 N, while on the Moon it is only about 96 N. This is why astronauts can leap higher and lift more on the Moon, even though their bodies have not changed; gravity, not their physical structure, is what differs.'
    },
  ],

  /* ─────────────────────── P3 Electricity and Magnetism ─────────────────────── */
  'P3': [
    {
      q: 'Compare the behaviour of components connected in series with those connected in parallel.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a series circuit the same current flows through every component because there is only one path for the charge, and the supply potential difference is shared between components in proportion to their resistance. In a parallel circuit each branch has its own loop, so the potential difference across each branch equals the supply, but the current splits between branches according to each branch resistance. Adding more components in series increases total resistance, while adding more in parallel decreases total resistance because there are more paths for current. Household circuits are wired in parallel so that each appliance has the full mains voltage and can be switched on independently; series wiring is used for components such as a fuse that must always carry the full circuit current.'
    },
    {
      q: 'Explain why mains electricity in UK homes is supplied as alternating current, and describe the function of the live, neutral and earth wires.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Mains electricity is supplied as alternating current at 230 V and 50 Hz because a.c. can be transformed up or down using transformers, which is essential for efficient transmission at high voltage and low current through the National Grid. The live wire carries the alternating potential difference and is dangerous because it is at a high potential relative to earth even when the appliance is switched off. The neutral wire completes the circuit and is at, or close to, earth potential. The earth wire is a safety wire connected to the metal casing of an appliance: if a fault causes the live wire to touch the casing, a large current flows through the earth wire to ground, blowing the fuse or tripping the breaker before anyone can be electrocuted.'
    },
    {
      q: 'Describe the magnetic field around a bar magnet and compare permanent magnets with induced magnets.',
      marks: 6, command: 'Describe',
      modelAnswer: 'Around a bar magnet, magnetic field lines emerge from the north pole, curve around outside the magnet to the south pole, and run from south to north inside the magnet, forming closed loops. The field is strongest near the poles, where the lines are closest together, and weaker further from the magnet. A permanent magnet produces its own magnetic field continuously and does not need an external field to be magnetic. An induced magnet is a piece of magnetic material such as iron that becomes a magnet only when placed in another magnetic field; it loses most or all of its magnetism when removed.'
    },
    {
      q: 'Explain the motor effect and discuss the factors that affect the size and direction of the force on a current-carrying wire in a magnetic field.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a current-carrying wire is placed in a magnetic field, the moving charges in the wire interact with the field and a force is exerted on the wire. The size of the force is given by F = BIl, where B is the magnetic flux density, I the current and l the length of wire in the field, and is largest when current and field are perpendicular. Increasing any of B, I or l increases the force. The direction of the force is given by Fleming\'s left-hand rule: pointing the first finger along the field, the second along the current, the thumb gives the direction of the force, which is always perpendicular to both. Reversing the current or the field reverses the force; reversing both leaves the force unchanged.'
    },
    {
      q: 'Describe the generator effect and explain how it is used in an alternator to produce alternating current.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The generator effect is the induction of a potential difference (and current, if the circuit is complete) in a conductor when there is a change in magnetic field through it — for example, when a coil rotates in a magnetic field. The size of the induced p.d. depends on the rate of change of magnetic flux: faster motion, stronger fields, more turns of wire and a larger coil area all increase the induced p.d. In an alternator, a coil rotates steadily inside the field of a magnet. As the coil turns, the flux through it varies sinusoidally, and the induced p.d. reverses every half-turn. Slip rings keep the connections to the external circuit continuous so that an alternating output appears across the load, with frequency equal to the rotation frequency of the coil.'
    },
    {
      q: 'Explain how a transformer works and discuss why transformers are essential for the efficient transmission of electricity through the National Grid.',
      marks: 12, command: 'Explain',
      modelAnswer: 'A transformer consists of two coils — primary and secondary — wound on the same iron core. An alternating current in the primary coil produces an alternating magnetic field in the iron core, which in turn induces an alternating potential difference in the secondary coil. The ratio of secondary to primary p.d. equals the ratio of the number of turns on the secondary coil to the number on the primary coil; a step-up transformer has more turns on the secondary and increases voltage, while a step-down transformer reduces it. For an ideal transformer, power in equals power out, so increasing the voltage decreases the current by the same factor. In the National Grid, electricity is generated at moderate voltage, then stepped up to 275 kV or 400 kV for transmission. At high voltage, the current is small, so heat losses in the cables (proportional to I²R) are much reduced. Step-down transformers near towns and homes reduce the voltage back to safe values for use, completing the chain of efficient long-distance transmission.'
    },
    {
      q: 'Discuss the uses of electromagnets in everyday devices and assess one advantage they have over permanent magnets.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Electromagnets are used in many everyday and industrial devices. In scrap-yards, large electromagnets attached to cranes lift heavy steel objects and release them by switching off the current. In doorbells, motors, electric bells and relays, electromagnets convert electrical signals into movement. In maglev trains, powerful electromagnets levitate the train above the track and propel it forward, eliminating friction with the rails. In MRI scanners, very strong superconducting electromagnets produce the magnetic fields used to image the body. The key advantage over permanent magnets is that an electromagnet can be switched on and off, and its strength controlled by the current; this is essential in scrap-yards where loads must be picked up and dropped on demand, in relays that switch repeatedly, and in MRI scanners where the field can be reduced when not in use.'
    },
    {
      q: 'Evaluate the role of energy-efficient appliances in the home, considering both economic and environmental factors.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Energy-efficient appliances such as A-rated washing machines, fridges and LED lighting transfer a much larger fraction of their input electrical energy to useful output, with less wasted as heat. Economically, this means lower running costs over the lifetime of the appliance, often saving the consumer significantly more than the higher purchase price within a few years. Environmentally, reduced electricity use means less demand on the National Grid and therefore lower CO₂ emissions from fossil-fuel power stations, helping mitigate climate change. There are some drawbacks: efficient appliances often have a higher upfront cost, manufacturing them still uses energy and raw materials, and the environmental gains depend on how electricity is generated locally. However, the long-term financial savings, reduced carbon footprint and decreased pressure on energy infrastructure mean that using energy-efficient appliances is an effective strategy for both individual households and society as a whole.'
    },
  ],

  /* ─────────────────────── P4 Waves and Radioactivity ─────────────────────── */
  'P4': [
    {
      q: 'Compare transverse and longitudinal waves, using examples and explaining how their oscillations relate to the direction of energy transfer.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a transverse wave, the oscillations of the medium are perpendicular to the direction in which the wave transfers energy. Examples include water waves, electromagnetic waves and S-waves in earthquakes. In a longitudinal wave, the oscillations are parallel to the direction of energy transfer, producing alternating regions of compression and rarefaction. Examples include sound waves in air and P-waves from earthquakes. Both types transfer energy without transferring matter, and both have wavelength, frequency, amplitude and speed defined in the same way. However, only transverse waves can be polarised, because polarisation requires an oscillation in a defined plane perpendicular to the direction of travel.'
    },
    {
      q: 'Describe the electromagnetic spectrum in order of increasing frequency, and explain why all electromagnetic waves travel at the same speed in a vacuum.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The electromagnetic spectrum, in order of increasing frequency (and decreasing wavelength), is: radio waves, microwaves, infrared, visible light (red to violet), ultraviolet, X-rays and gamma rays. All electromagnetic waves are transverse, consist of oscillating electric and magnetic fields perpendicular to each other, and can travel through a vacuum. They all travel at the same speed in a vacuum (3 × 10⁸ m/s) because the underlying laws of electromagnetism set a single fixed speed for these self-propagating fields, regardless of frequency or wavelength. In materials such as glass or water they travel more slowly, and the speed depends on the material and the frequency, which causes refraction.'
    },
    {
      q: 'Discuss the medical and communication uses of microwaves, ultraviolet radiation and X-rays, and assess the dangers each can pose.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Microwaves are used for cooking and for communications including mobile phones, satellite links and Wi-Fi. In a microwave oven, water molecules in the food absorb the radiation and gain kinetic energy, heating the food. Dangers from communication-strength microwaves are small, but high-power microwaves can heat body tissues, which is why ovens are shielded. Ultraviolet (UV) radiation is used in fluorescent lamps, security marking and disinfecting water and surfaces. UV is more energetic than visible light and can cause sunburn, skin cancer and eye damage; protection includes sunscreen and UV-filtering glasses. X-rays are used to produce medical images of bones, to treat cancer, and to inspect luggage at airports. They are ionising and can damage DNA, increasing the long-term risk of cancer; doses are kept as low as possible and staff stand behind lead shielding. Across all three, the benefits in healthcare, industry and communication are large, but they must be balanced against careful management of risks through dose limits, shielding and regulation.'
    },
    {
      q: 'Compare the properties of alpha, beta and gamma radiation in terms of their nature, ionising power, penetrating ability and range in air.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Alpha radiation consists of helium nuclei (two protons and two neutrons) and is highly ionising but very weakly penetrating: it is stopped by a few centimetres of air or a sheet of paper. Beta radiation is a fast-moving electron emitted from the nucleus when a neutron decays into a proton; it is moderately ionising, more penetrating than alpha, and is stopped by a few millimetres of aluminium and travels around a metre in air. Gamma radiation is high-frequency electromagnetic radiation, the least ionising of the three but the most penetrating, with significant intensity passing through several centimetres of lead and travelling many metres in air. The differences arise from the differences in mass, charge and energy: heavier, more highly charged alpha particles interact strongly with matter and quickly lose energy, while uncharged photons of gamma radiation pass through easily but ionise less.'
    },
    {
      q: 'Explain what is meant by the half-life of a radioactive isotope and why it is important when assessing the safety of radioactive waste.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The half-life of a radioactive isotope is the average time taken for half of the unstable nuclei in a sample to decay, or equivalently for the activity to fall to half its original value. Different isotopes have very different half-lives, ranging from fractions of a second to billions of years. When assessing the safety of radioactive waste, half-life matters because waste with a long half-life remains dangerous for a very long time and must be stored securely for thousands or even millions of years to allow its activity to fall to safe levels. Waste with a short half-life decays quickly and is hazardous only for a short period, but may be initially highly radioactive. Both factors, with the type of radiation and quantity of waste, determine how the waste must be stored, shielded and monitored.'
    },
    {
      q: 'Discuss the medical uses of radioactivity, considering both the benefits and risks to patients and staff.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Radioactivity has several important medical uses. Gamma rays from sources such as cobalt-60 are used in radiotherapy to kill cancer cells, with multiple beams targeted to overlap at the tumour so surrounding healthy tissue receives a smaller dose. Radioactive tracers, often beta or gamma emitters with short half-lives, are introduced into the body and tracked using detectors to image organ function or detect blockages. Gamma sources are also used to sterilise medical equipment by killing bacteria. The benefits include diagnosis of conditions that would otherwise require invasive surgery, effective treatment of cancers that would be hard to remove, and reliable sterilisation. However, ionising radiation can damage healthy DNA, increasing the long-term risk of cancer for patients and staff. Risks are managed by using the lowest effective dose, choosing isotopes with short half-lives so the activity falls quickly, shielding staff with lead, and limiting exposure time. On balance, the medical benefits typically outweigh the risks when proper procedures are followed.'
    },
    {
      q: 'Describe how ultrasound is used in medical imaging and explain the advantages of ultrasound over X-rays for some uses.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Ultrasound is sound at frequencies above 20 000 Hz, beyond the range of human hearing. In medical imaging, a transducer placed on the patient\'s skin sends short pulses of ultrasound into the body and detects the reflected echoes from boundaries between different tissues. The time delay and amplitude of each echo are used by a computer to construct an image of the internal structures, such as a foetus during pregnancy or organs such as the heart. Ultrasound has key advantages over X-rays for some uses: it is non-ionising, so it does not damage cells or DNA, making it safe for repeated use and for imaging unborn babies. It is also good at distinguishing between different soft tissues, which X-rays show poorly because soft tissues all absorb X-rays similarly. X-rays are still better for imaging hard structures such as bones, but for many soft-tissue scans ultrasound is safer and clearer.'
    },
    {
      q: 'Discuss the difference between contamination and irradiation, and explain why contamination is generally more dangerous.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Irradiation is exposure to radiation from an external radioactive source — for example, standing near an unshielded gamma source. The object or person does not become radioactive itself, and the danger ends when the source is removed or shielded. Contamination is when radioactive material gets onto the skin or clothing, or is taken into the body by inhaling, swallowing or through a wound. Once inside, the material continues to emit radiation, and even weakly penetrating alpha or beta sources can cause intense local ionisation of cells and DNA, which can lead to cancer. Removal is difficult and may require medical treatment, and exposure continues until the material is removed or has decayed. Both pose risks, but contamination is generally more dangerous because exposure is prolonged and internal, whereas irradiation can be ended by moving away.'
    },
  ],

  /* ─────────────────────── P5 Energy ─────────────────────── */
  'P5': [
    {
      q: 'Explain how the principle of conservation of energy applies to a swinging pendulum, including how energy is dissipated.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A swinging pendulum continuously transfers energy between gravitational potential and kinetic stores: at the highest point all the energy is gravitational potential, and at the lowest point it has all been transferred to the kinetic store. The principle of conservation of energy states that energy cannot be created or destroyed, only transferred between stores, so the total energy remains constant. In a real pendulum, work is done against air resistance and friction at the pivot, transferring energy to the thermal store of the surroundings. This dissipated energy spreads out and cannot easily be recovered, so each swing has slightly less mechanical energy than the last and the amplitude gradually decreases until the pendulum stops.'
    },
    {
      q: 'Explain what is meant by the efficiency of an energy transfer device and why no real device can be 100% efficient.',
      marks: 6, command: 'Explain',
      modelAnswer: 'The efficiency of a device is the fraction (or percentage) of the input energy that is transferred to the useful output store, calculated as useful energy out divided by total energy in. In every real device, some of the input energy is dissipated to less useful stores — typically thermal energy of the surroundings due to friction, electrical resistance or air resistance — and some is transferred as sound. Because this dissipated energy is no longer available for the intended purpose, the useful output is always smaller than the input, so the efficiency is always less than 100%, even though total energy is conserved.'
    },
    {
      q: 'Discuss how thermal insulation in the walls and loft of a house reduces unwanted energy transfers and saves money.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Insulating materials such as fibreglass and foam have a low thermal conductivity, which reduces the rate at which thermal energy is transferred by conduction through the walls and roof. Cavity-wall insulation traps still air between the inner and outer leaves of the wall, and air is itself a poor conductor, further reducing conduction; loft insulation also reduces convection currents in the roof space. As less thermal energy escapes from the building, less electrical or gas energy is needed to heat it back to the same temperature, so household energy bills fall. Although there is an initial installation cost, the payback time is usually only a few years, after which the homeowner makes long-term savings while also reducing the carbon emissions associated with heating.'
    },
    {
      q: 'Describe what is meant by work done, and explain the relationship between work, energy and power.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Work is done whenever a force moves its point of application along the line of action of the force; it is calculated as work = force × distance moved in the direction of the force, in joules. Doing work transfers energy from one store to another: lifting a book transfers energy from the chemical store of the lifter\'s muscles to the gravitational potential store of the book. Energy is the capacity to do work, also measured in joules, while power is the rate at which work is done or energy is transferred, in watts (W = J/s). For a constant force, power = work done ÷ time taken, so a more powerful machine does the same work in less time. The conservation of energy ensures that the work input to a system equals the useful work output plus the energy dissipated to the surroundings.'
    },
    {
      q: 'Compare the environmental and economic advantages of using renewable energy resources with those of fossil fuels for generating electricity.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Renewables such as wind, solar, hydroelectric and tidal release no carbon dioxide during generation, whereas fossil fuels release CO₂ and other pollutants that drive climate change and acid rain. Renewables are essentially unlimited, while fossil fuels are finite and unevenly distributed, leading to economic and political pressures. Renewables typically have higher start-up costs but very low running costs once built; fossil-fuel stations are cheaper to build but have ongoing fuel costs. Wind and solar are intermittent and require backup or storage, whereas fossil-fuel stations provide reliable base-load power. On balance, renewables offer better long-term environmental and economic outcomes, but a transitional energy mix is currently necessary.'
    },
    {
      q: 'Evaluate the use of nuclear power as an energy resource for generating electricity in the UK.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Nuclear power has a very high energy density and produces almost no CO₂ during generation, making it valuable for reducing greenhouse-gas emissions. Output is reliable and not dependent on weather, unlike wind or solar, and a single station can supply a large fraction of national demand. However, nuclear stations have very high construction and decommissioning costs and produce highly radioactive waste that must be stored safely for thousands of years. There is a small but serious risk of major accidents (e.g. Chernobyl, Fukushima) with long-term environmental and health consequences, and uranium itself is a finite resource. Public concern about safety and waste also makes new sites politically difficult. Overall, nuclear provides a low-carbon, reliable energy source that complements renewables well, but its high cost and waste-management challenges mean it should form part of a diverse energy mix rather than a sole solution.'
    },
    {
      q: 'Discuss how energy is transferred in a falling object, both with and without air resistance.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'When an object is dropped, it has gravitational potential energy that is transferred to its kinetic energy as it falls. Without air resistance, the object accelerates uniformly under gravity and at any point, the loss in gravitational potential energy equals the gain in kinetic energy, conserving total mechanical energy. In the presence of air resistance, some of the gravitational potential energy is also transferred to the thermal store of the air and the object as work is done against drag. The kinetic energy still increases, but more slowly, and once air resistance equals the weight, the resultant force is zero and the object falls at a constant terminal velocity. From that point on, all the gravitational potential energy lost is transferred to the thermal store rather than the kinetic store, so kinetic energy stays constant.'
    },
    {
      q: 'Assess the importance of reducing wasted energy in everyday devices, using examples to support your answer.',
      marks: 12, command: 'Assess',
      modelAnswer: 'Reducing wasted energy increases the efficiency of devices, lowering the energy demand for the same useful output. For example, modern LED bulbs convert around 85% of input electrical energy to light, while old filament bulbs converted only about 10%, with the rest wasted as heat; switching reduces electricity consumption dramatically. Better aerodynamics and lower-friction bearings in cars increase the fraction of fuel energy delivered to the wheels, reducing fuel use and CO₂ emissions per mile. At a national scale, more efficient devices reduce demand on the grid, allowing the same power stations to supply more homes. There are also environmental benefits: less fossil fuel burned means lower greenhouse-gas emissions, and household savings come from lower bills. The main limit is cost — efficient devices may be more expensive to buy — but in most cases the long-term savings outweigh the initial investment, so reducing wasted energy is highly important both economically and environmentally.'
    },
  ],

  /* ─────────────────────── P6 Global Challenges ─────────────────────── */
  'P6': [
    {
      q: 'Explain how the National Grid distributes electricity, and discuss why high voltages are used for long-distance transmission.',
      marks: 12, command: 'Explain',
      modelAnswer: 'The National Grid is the network of cables and transformers that carries electricity from power stations to consumers. Step-up transformers near the power station increase the voltage to typically 275 kV or 400 kV before the electricity is sent through transmission lines; step-down transformers near towns and homes reduce the voltage back to safe values. Transmitting at high voltage allows the same power to be delivered with a much smaller current, since power = voltage × current. A smaller current means much smaller energy losses to heat in the cables, because the heat dissipated is proportional to the square of the current (P = I²R). This makes long-distance transmission far more efficient and cheaper. The grid also pools electricity from many different sources and routes it where demand is highest, increasing reliability. Without high-voltage transmission, the energy losses over typical UK distances would be unacceptably high.'
    },
    {
      q: 'Describe the life cycle of a star similar in mass to the Sun, from formation to its final remnant.',
      marks: 12, command: 'Describe',
      modelAnswer: 'A star like the Sun forms when gravitational attraction pulls together a cloud of dust and gas (a nebula). As the cloud contracts, the temperature and pressure at the centre rise until hydrogen nuclei begin to fuse into helium, releasing huge amounts of energy. Outward radiation pressure from fusion balances inward gravity, and the star spends most of its life in this stable state, called the main sequence. When the hydrogen in the core runs out, the core contracts and the outer layers expand and cool, forming a red giant. In the giant phase, helium fuses to form heavier elements up to carbon and oxygen. Eventually the outer layers are blown off as a planetary nebula, leaving behind a hot, dense core called a white dwarf. The white dwarf cools and fades over billions of years to become a cold, dark black dwarf in the very distant future.'
    },
    {
      q: 'Explain what red shift is and how it provides evidence for the expansion of the universe and the Big Bang theory.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When light from a distant galaxy is analysed, the dark spectral lines from elements such as hydrogen are observed at longer wavelengths than they appear on Earth. This shift towards the red end of the spectrum is called red shift and indicates that the source is moving away from us. Light from more distant galaxies shows greater red shift, meaning they are moving away faster than nearer galaxies. This pattern is what would be expected if space itself were expanding uniformly in every direction, carrying galaxies apart. Tracing this expansion backwards leads to the idea that all matter and energy were once concentrated in a tiny, dense state — the Big Bang. Together with the cosmic microwave background, red shift is one of the strongest pieces of evidence supporting the Big Bang theory.'
    },
    {
      q: 'Discuss the evidence for the Big Bang theory and assess how convincing this evidence is as a model for the origin of the universe.',
      marks: 12, command: 'Assess',
      modelAnswer: 'The Big Bang theory states that the universe began about 13.8 billion years ago from an extremely hot, dense state and has been expanding and cooling ever since. The first major piece of evidence is the red shift of distant galaxies: the further a galaxy is, the faster it appears to be moving away, consistent with a universe expanding uniformly from a common origin. The second is the cosmic microwave background radiation (CMB), a faint microwave signal coming from every direction in the sky. Predicted by the Big Bang theory and discovered in the 1960s, the CMB is the cooled-down remnant of high-energy radiation from a few hundred thousand years after the Big Bang, when the universe became transparent. The third piece of evidence is the relative abundances of light elements (hydrogen, helium and small amounts of lithium), which match the Big Bang predictions for nuclear reactions in the early universe. Together these independent pieces of evidence make the Big Bang the most strongly supported theory of the origin of the universe.'
    },
    {
      q: 'Compare the way orbiting satellites and the planets of the solar system are kept in their orbits, and explain why a satellite does not fall to Earth.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both satellites in orbit around the Earth and planets in orbit around the Sun are kept in their nearly circular paths by a gravitational force directed towards the centre of the larger body. For a satellite, the force is the Earth\'s gravity; for a planet, it is the Sun\'s gravity. In each case, the gravitational force acts as a centripetal force, continually changing the direction of the orbiting object\'s velocity without changing its speed, so the object follows a curved path. A satellite does not fall to Earth because it is moving sideways at exactly the right speed: as it falls towards Earth, the surface of the Earth curves away beneath it at the same rate, so the satellite continually misses the ground and circles the planet. At higher altitudes, gravity is weaker and the orbital speed required is lower.'
    },
    {
      q: 'Discuss the impact of human activity on the global climate, with reference to the enhanced greenhouse effect.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The Earth\'s atmosphere allows visible light from the Sun to pass through, where it is absorbed and re-emitted by the surface as longer-wavelength infrared radiation. Greenhouse gases such as carbon dioxide, methane and water vapour absorb this infrared and re-radiate some of it back to the surface, keeping the average global temperature warmer than it would otherwise be. This natural greenhouse effect is essential for life. Human activity — burning fossil fuels for electricity, transport and industry, and deforestation — has increased the concentration of greenhouse gases, especially CO₂, in the atmosphere. This enhanced greenhouse effect traps more infrared radiation, raising global average temperatures, which leads to melting ice caps, rising sea levels, more extreme weather and changes to ecosystems. Reducing emissions through energy efficiency, renewable energy and changes in land use is important to limit further warming and its consequences.'
    },
    {
      q: 'Evaluate the use of artificial satellites for communication and observation, considering both benefits and drawbacks.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Artificial satellites have many uses. Geostationary satellites in orbit above the equator with a 24-hour period are used for television, telephone and weather forecasting because they remain above the same point on Earth and can be tracked by a fixed dish. Lower-orbit satellites are used for GPS navigation, mobile communications, Earth observation, weather monitoring and scientific research, including imaging the Earth\'s surface to track climate change and natural disasters. The benefits include rapid global communications, accurate weather forecasting that saves lives during storms, navigation systems used by hundreds of millions of people, and detailed monitoring of environmental change. There are drawbacks: satellites are expensive to launch and maintain, and the build-up of space debris in orbit risks damaging operational satellites. Concerns also exist about privacy and military use of imaging satellites. On balance, the benefits to communication, navigation, weather forecasting and Earth science clearly outweigh the costs and risks, but careful international management of space traffic is increasingly important.'
    },
    {
      q: 'Discuss how energy resources are used in transport and assess the role of electric vehicles in reducing the carbon footprint of road travel.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Most road transport currently uses internal combustion engines, which burn petrol or diesel and convert chemical energy into kinetic energy with relatively low efficiency, releasing CO₂ and other pollutants in the process. Electric vehicles store energy in batteries and use electric motors, which are typically much more efficient at converting input energy into motion and produce no exhaust emissions during driving. However, the carbon footprint of an electric vehicle depends on how the electricity used to charge it is generated: if it comes mainly from fossil fuels, much of the benefit is lost, while electricity from renewables makes the saving large. Electric vehicles also reduce local air pollution in cities, which has clear health benefits. Drawbacks include the limited driving range and long charging times of current batteries, the environmental cost of mining lithium and other metals for batteries, and the capital cost of charging infrastructure. As the grid decarbonises and battery technology improves, electric vehicles offer a strong route to lower-carbon road travel, especially for urban use.'
    },
  ],

};

if (typeof module !== 'undefined' && module.exports) module.exports = PHYSICS_OCR_A_GCSE_AI_FEEDBACK;
