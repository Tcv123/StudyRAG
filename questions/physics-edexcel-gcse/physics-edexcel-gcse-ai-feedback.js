/*
 * Edexcel GCSE (9-1) Physics (1PH0) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate. Each question carries a top-band model answer
 * the AI can use as a grading anchor.
 */

const PHYSICS_EDEXCEL_GCSE_AI_FEEDBACK = {

  /* ─────────────────────── 1 Key Concepts of Physics ─────────────────────── */
  '1': [
    {
      q: 'Compare scalar and vector quantities, using examples from physics to show the difference.',
      marks: 6, command: 'Compare',
      modelAnswer: 'A scalar quantity has only magnitude (size), while a vector quantity has both magnitude and direction. Examples of scalar quantities include mass, time, energy, temperature, distance and speed. Examples of vector quantities include force, weight, displacement, velocity, acceleration and momentum. For instance, two cars travelling at 30 m/s have the same speed (a scalar), but different velocities if they are travelling in different directions; a 50 N force pushing left has a different effect from a 50 N force pushing right, because force is a vector.'
    },
    {
      q: 'Describe the SI base units used in physics and explain why scientists worldwide agree to use the same system of units.',
      marks: 6, command: 'Describe',
      modelAnswer: 'The SI base units include the kilogram (kg) for mass, the metre (m) for length, the second (s) for time, the ampere (A) for electric current, the kelvin (K) for temperature, and the mole (mol) for amount of substance. All other physical quantities are measured in derived units built from these, for example the newton (kg m/s²) or the joule (kg m²/s²). Scientists worldwide use this single system because results from different laboratories must be directly comparable; if everyone used different units, communicating measurements, repeating experiments and combining data would be very difficult and lead to errors. SI units allow research to be shared and built upon globally.'
    },
    {
      q: 'Explain how the precision and accuracy of an experiment are different, and discuss how to improve each.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Accuracy describes how close a measurement is to the true value, while precision describes how closely repeated measurements agree with each other. A set of measurements can be precise (all very similar) but inaccurate (clustered far from the true value) if there is a systematic error, such as a zero error on a balance. To improve accuracy, systematic errors must be reduced — for example by checking and zeroing instruments, calibrating against a known standard, and choosing a measurement method that avoids parallax or other consistent biases. To improve precision, random errors must be reduced — for example by using instruments with finer scales, repeating measurements many times and taking a mean, controlling environmental conditions, and using a fiducial marker for a moving object so the same point is always timed. A high-quality experiment minimises both types of error so the final value is both close to the true value and reproducible.'
    },
    {
      q: 'Discuss the importance of significant figures and uncertainty when reporting the result of a physics experiment.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Significant figures show the precision with which a measurement was made: writing a result as 12.4 cm rather than 12.40 cm or 12 cm tells a reader the smallest division of the measuring instrument was around 0.1 cm. Reporting too many significant figures gives a false impression of precision, while too few hides useful information. Uncertainty makes the precision explicit — for example, 12.4 ± 0.1 cm means the true value is most likely between 12.3 and 12.5 cm. Reporting both significant figures and uncertainty allows other scientists to judge the reliability of a result, decide whether two values agree within experimental error, and combine measurements correctly when calculating quantities such as efficiency or rate. Without these conventions, scientific results would be ambiguous and difficult to evaluate.'
    },
  ],

  /* ─────────────────────── 2 Motion and Forces ─────────────────────── */
  '2': [
    {
      q: 'Describe Newton\'s three laws of motion and explain how each one applies to a passenger sitting in a car that brakes suddenly.',
      marks: 12, command: 'Describe',
      modelAnswer: 'Newton\'s first law states that an object continues at rest or at constant velocity unless acted on by a resultant force. When a car brakes, a friction force from the road slows the car, but the passenger experiences no large backward force directly; their body therefore tends to continue moving forwards, which is why a seatbelt is needed to provide the necessary force to slow the passenger with the car. Newton\'s second law states that the resultant force equals mass × acceleration (F = ma); a more massive passenger requires a larger seatbelt force to produce the same deceleration as a lighter one. Newton\'s third law states that for every action force there is an equal and opposite reaction force on a different body. As the seatbelt pulls the passenger backwards, the passenger\'s body pushes forwards on the seatbelt with an equal and opposite force, transferring some of the passenger\'s momentum into the structure of the car.'
    },
    {
      q: 'Explain the difference between distance and displacement, and between speed and velocity, using an example of an athlete running around a circular track.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Distance is a scalar measuring the total length of path travelled, while displacement is a vector measuring the straight-line distance from start to end and its direction. An athlete who runs once around a 400 m circular track has a distance of 400 m, but their displacement is zero because they end at the same place they started. Speed is a scalar (distance per unit time), while velocity is a vector (displacement per unit time). The athlete\'s average speed is 400 m divided by the time taken — for example, 8 m/s for 50 s — but their average velocity is zero because their displacement is zero. At any instant during the run, the athlete has an instantaneous velocity equal in magnitude to their speed at that moment, but the direction continually changes around the track, even when the speed is constant.'
    },
    {
      q: 'Compare the factors affecting thinking distance and braking distance, and discuss how they contribute to the overall stopping distance of a car.',
      marks: 12, command: 'Compare',
      modelAnswer: 'Thinking distance is the distance travelled during the driver\'s reaction time before the brakes are applied; braking distance is the distance travelled while the brakes decelerate the car to rest; their sum is the total stopping distance. Both distances increase with the speed of the vehicle: at higher speed, the car covers more ground in any given reaction time, and the kinetic energy that the brakes must remove is much larger (it grows with the square of the speed), so braking distance increases sharply. Thinking distance is increased by anything that lengthens reaction time, such as tiredness, alcohol, drugs and distractions like using a phone, but it is not affected by the road condition. Braking distance is affected by the condition of the road and tyres: wet, icy or oily surfaces and worn tyres reduce friction and lengthen braking distance, while worn brake pads reduce braking force and have the same effect. The total stopping distance is therefore strongly dependent on speed and condition of both driver and vehicle, which is why speed limits, tyre regulations and laws against drink-driving exist.'
    },
    {
      q: 'Discuss how the design of safety features such as seatbelts, airbags and crumple zones reduces injuries in a road traffic collision.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In a collision, the passenger\'s momentum must be reduced to zero, and the average force on them equals the change of momentum divided by the time over which it occurs. Increasing the time of the collision reduces the force experienced. Crumple zones at the front and rear of a car deform progressively, increasing the time taken for the car to stop and so reducing the force on the occupants. Seatbelts stretch slightly during a sudden stop, again increasing the time over which the passenger decelerates and preventing them being thrown into the windscreen. Airbags inflate rapidly between the passenger and the dashboard or steering wheel, providing a soft cushion that further extends the time of impact and spreads the force over a larger area of the body. Together, these features reduce the peak force on the occupants and lower the risk of serious injury, although they cannot eliminate it entirely.'
    },
  ],

  /* ─────────────────────── 3 Conservation of Energy ─────────────────────── */
  '3': [
    {
      q: 'Explain how the principle of conservation of energy applies to a roller-coaster car as it moves around a track with hills and dips.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The principle of conservation of energy states that energy cannot be created or destroyed, only transferred between stores. As the roller-coaster car climbs a hill, work is done against gravity and energy is transferred from its kinetic store to its gravitational potential store, so it slows down. As the car descends, gravitational potential energy is transferred back to the kinetic store and the car speeds up. At any point, the sum of kinetic, gravitational potential and the energy already dissipated to the surroundings equals the original energy at the start of the ride. In practice, friction at the wheels and air resistance transfer some energy to the thermal store of the surroundings each time the car moves, so the maximum height the car can reach decreases as the ride continues, until the car eventually comes to rest unless given more energy by a chain or motor.'
    },
    {
      q: 'Compare the environmental and economic advantages of using renewable energy resources with those of fossil fuels for generating electricity.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Renewable resources such as wind, solar, hydroelectric and tidal release no carbon dioxide during generation, whereas fossil fuels (coal, oil and gas) release CO₂ and other pollutants that drive climate change and acid rain. Renewables are essentially unlimited, while fossil fuels are finite and reserves are unevenly distributed, leading to economic and political pressures. Renewables typically have higher start-up costs, but very low running costs once built; fossil-fuel stations are cheaper to build but have ongoing fuel costs. Renewables like wind and solar are intermittent and require backup or storage, whereas fossil-fuel stations provide reliable base-load power. On balance, renewables offer better long-term environmental and economic outcomes, but a transitional energy mix is currently necessary while storage and grid technologies catch up.'
    },
    {
      q: 'Evaluate the use of nuclear power as a major part of the UK\'s electricity supply.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Nuclear power has a very high energy density and produces almost no CO₂ during generation, making it valuable for reducing greenhouse-gas emissions. Output is reliable and not dependent on weather, unlike wind or solar, and a single station can supply a large fraction of national demand, helping with base-load power. However, nuclear stations have very high construction and decommissioning costs and produce highly radioactive waste that must be stored safely for thousands of years. There is a small but serious risk of major accidents (e.g. Chernobyl, Fukushima) with long-term environmental and health consequences, and uranium itself is a finite resource. Public concern about safety and waste also makes new sites politically difficult. Overall, nuclear power offers a low-carbon, reliable energy source that complements renewables well, but its high cost and waste-management challenges mean it should form part of a diverse energy mix rather than a sole solution.'
    },
  ],

  /* ─────────────────────── 4 Waves ─────────────────────── */
  '4': [
    {
      q: 'Compare transverse and longitudinal waves, using examples to show how their oscillations relate to the direction of energy transfer.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a transverse wave, the oscillations of the medium are perpendicular to the direction in which the wave transfers energy. Examples include water waves, electromagnetic waves and S-waves in earthquakes. In a longitudinal wave, the oscillations of the medium are parallel to the direction in which energy is transferred, producing alternating regions of compression and rarefaction. Examples include sound waves in air and P-waves from earthquakes. Both types transfer energy without transferring matter, and both have wavelength, frequency, amplitude and speed defined in the same way. However, only transverse waves can be polarised, because polarisation requires an oscillation in a defined plane perpendicular to the direction of travel.'
    },
    {
      q: 'Describe how waves can be reflected, refracted, transmitted and absorbed at boundaries between different materials.',
      marks: 9, command: 'Describe',
      modelAnswer: 'When a wave reaches a boundary between two materials, four things can happen. Reflection occurs when the wave bounces off the boundary back into the original medium; the angle of incidence equals the angle of reflection. Refraction occurs when the wave passes into the second material and changes speed, which usually causes a change in direction at the boundary unless it strikes perpendicularly; the wave bends towards the normal if it slows down and away from the normal if it speeds up. Transmission is the simple passing of the wave into the second material, often combined with refraction. Absorption occurs when the wave\'s energy is transferred to the material, increasing its thermal store; the wave\'s amplitude and energy decrease. In practice, all four processes can happen at the same boundary, with the proportions depending on the wave\'s wavelength and the materials.'
    },
    {
      q: 'Explain how an oscilloscope or a microphone can be used to investigate the frequency and amplitude of a sound wave.',
      marks: 6, command: 'Explain',
      modelAnswer: 'A microphone converts the pressure variations of a sound wave into a varying electrical signal of the same frequency. When this signal is fed into an oscilloscope, the screen displays a graph of voltage against time, which mirrors the original pressure variations. The amplitude of the wave on the screen represents the loudness of the sound: louder sounds give a larger amplitude. The horizontal distance between adjacent peaks gives the period of the wave, and the frequency can be calculated as the reciprocal of the period. By adjusting the time-base, frequencies of different sounds can be compared.'
    },
    {
      q: 'Discuss how echo-sounding using ultrasound is used to determine distances under water and in medical imaging.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Echo-sounding works by sending a short pulse of ultrasound into the medium and timing how long the reflected echo takes to return. Knowing the speed of the wave in the medium, the distance to the reflecting surface is half the speed multiplied by the time. In maritime applications, ships and submarines emit ultrasound from their hulls; reflections from the seabed give the depth, and reflections from underwater objects help locate fish, wrecks or submarines. In medicine, ultrasound is used for imaging foetuses, hearts and other internal structures: a transducer placed on the patient\'s skin sends pulses into the body and detects echoes from boundaries between tissues, and a computer builds an image from the timing and strength of the echoes. The advantages over X-rays for many medical uses are that ultrasound is non-ionising and so safe for repeated use and during pregnancy, and it distinguishes well between soft tissues that X-rays show poorly. Limitations include difficulty imaging behind bone or air pockets, which strongly reflect ultrasound.'
    },
  ],

  /* ─────────────────────── 5 Light and the Electromagnetic Spectrum ─────────────────────── */
  '5': [
    {
      q: 'Describe the electromagnetic spectrum in order of increasing frequency, and explain why all electromagnetic waves travel at the same speed in a vacuum.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The electromagnetic spectrum, in order of increasing frequency (and decreasing wavelength), is: radio waves, microwaves, infrared, visible light (red to violet), ultraviolet, X-rays and gamma rays. All electromagnetic waves are transverse, consist of oscillating electric and magnetic fields perpendicular to one another, and can travel through a vacuum. They all travel at the same speed in a vacuum (3 × 10⁸ m/s) because the underlying laws of electromagnetism set a single fixed speed for these self-propagating fields, regardless of frequency or wavelength. In materials such as glass or water they travel more slowly, and the speed depends on the material and on frequency, which causes refraction.'
    },
    {
      q: 'Discuss the medical and communication uses of microwaves, ultraviolet radiation and X-rays, and assess the dangers each can pose.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Microwaves are used for cooking and for communications including mobile phones, satellite links and Wi-Fi; in microwave ovens, water molecules in the food absorb the radiation and gain kinetic energy, heating the food. The dangers from communication-strength microwaves are small, but high-power microwaves can heat body tissues, which is why ovens are shielded. Ultraviolet (UV) is used in fluorescent lamps, in security marking and in disinfecting water and surfaces. UV is more energetic than visible light and can cause sunburn, skin cancer and eye damage; protection includes sunscreen and UV-filtering glasses. X-rays are used to produce medical images of bones, to treat cancer, and to inspect luggage. They are ionising and can damage DNA, increasing the long-term risk of cancer; doses are kept as low as possible and staff stand behind lead shielding. Across all three, the benefits in healthcare, industry and communication are large, but they must be balanced against careful management of the health risks through dose limits, shielding and regulation.'
    },
    {
      q: 'Explain how a converging lens forms a real, inverted image of an object placed beyond the focal length, with reference to the rays of light involved.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A converging lens is thicker in the middle than at the edges and refracts parallel rays so that they converge to the principal focus on the far side. To find the image of an object beyond the focal length, two construction rays from a point on the object are drawn: a ray parallel to the principal axis that is refracted to pass through the focal point on the other side of the lens, and a ray through the centre of the lens that passes straight through undeviated. The rays cross on the opposite side of the lens, locating a real image (one that rays actually meet at and that can be projected onto a screen). The image is inverted relative to the object, and may be smaller, the same size or larger depending on the object distance. Cameras and projectors rely on this property to capture or project images.'
    },
  ],

  /* ─────────────────────── 6 Radioactivity ─────────────────────── */
  '6': [
    {
      q: 'Compare the properties of alpha, beta and gamma radiation in terms of their nature, ionising power, penetrating ability and range in air.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Alpha radiation consists of helium nuclei (two protons and two neutrons), is highly ionising, but very weakly penetrating: it is stopped by a few centimetres of air or a sheet of paper. Beta radiation is a fast-moving electron emitted from the nucleus when a neutron decays into a proton; it is moderately ionising, more penetrating than alpha, and is stopped by a few millimetres of aluminium and travels around a metre in air. Gamma radiation is high-frequency electromagnetic radiation, the least ionising of the three but the most penetrating, with significant intensity passing through several centimetres of lead and travelling many metres in air. The differences arise from the differences in mass, charge and energy: heavier, more highly charged alpha particles interact strongly with matter and quickly lose energy, while uncharged photons of gamma radiation pass through easily but ionise less.'
    },
    {
      q: 'Explain what is meant by the half-life of a radioactive isotope and why this affects how the isotope can be used in medicine and industry.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The half-life is the average time taken for half of the unstable nuclei in a sample to decay, or equivalently for the activity to fall to half its original value. Different isotopes have very different half-lives, ranging from fractions of a second to billions of years. Isotopes with short half-lives quickly become much less active and are useful as medical tracers, where the patient should be exposed to ionising radiation for as little time as possible while still allowing detection. Isotopes with longer half-lives are useful for industrial measurements, such as monitoring thickness of paper or steel, where a steady, predictable activity is needed over months or years. In radioactive waste management, long half-lives mean the waste must be stored safely for thousands of years, while short-lived waste decays to safe levels much sooner.'
    },
    {
      q: 'Discuss the difference between contamination and irradiation, and explain why contamination is generally more dangerous.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Irradiation is exposure to radiation from an external radioactive source — for example, standing near an unshielded gamma source. The object or person does not become radioactive itself, and the danger ends when the source is removed or shielded. Contamination is when radioactive material gets onto the skin or clothing, or is taken into the body by inhaling, swallowing or through a wound. Once inside, the material continues to emit radiation, and even weakly penetrating alpha or beta sources can cause intense local ionisation of cells and DNA, which can lead to cancer. Removal is difficult and may require medical treatment, and exposure continues until the material is removed or has decayed. Both pose risks, but contamination is generally more dangerous because exposure is prolonged and internal, whereas irradiation can be ended by moving away.'
    },
  ],

  /* ─────────────────────── 7 Astronomy ─────────────────────── */
  '7': [
    {
      q: 'Describe the life cycle of a star similar in mass to the Sun, from formation to its final remnant.',
      marks: 12, command: 'Describe',
      modelAnswer: 'A star like the Sun forms when gravitational attraction pulls together a cloud of dust and gas (a nebula). As the cloud contracts, the temperature and pressure at the centre rise until hydrogen nuclei begin to fuse into helium, releasing huge amounts of energy. Outward radiation pressure from fusion balances inward gravity, and the star spends most of its life in this stable state, called the main sequence. When the hydrogen in the core runs out, the core contracts and the outer layers expand and cool, forming a red giant. In the giant phase, helium fuses to form heavier elements up to carbon and oxygen. Eventually the outer layers are blown off as a planetary nebula, leaving behind a hot, dense core called a white dwarf. The white dwarf cools and fades over billions of years to become a cold, dark black dwarf in the very distant future.'
    },
    {
      q: 'Explain what red shift is and how it provides evidence for the expansion of the universe and the Big Bang theory.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When light from a distant galaxy is analysed, the dark spectral lines from elements such as hydrogen are observed at longer wavelengths than they appear on Earth. This shift toward the red end of the spectrum is called red shift and indicates that the source is moving away from us. Light from more distant galaxies shows greater red shift, meaning they are moving away faster. This pattern is what would be expected if space itself were expanding uniformly, carrying galaxies apart. Tracing this expansion backwards leads to the idea that all matter and energy were once concentrated in a tiny, dense state — the Big Bang. Together with the cosmic microwave background radiation, red shift is one of the strongest pieces of evidence supporting the Big Bang theory of the universe\'s origin.'
    },
    {
      q: 'Discuss how the orbit of a satellite or a planet is maintained by gravity, and explain why a satellite does not fall to Earth.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Both satellites in orbit around the Earth and planets in orbit around the Sun are kept in their nearly circular paths by a gravitational force directed towards the centre of the larger body. This gravitational pull provides a centripetal force, which continually changes the direction of the orbiting object\'s velocity without changing its speed, so the object follows a curved path. A satellite does not fall to Earth because it moves sideways at exactly the right speed: as it falls towards the Earth, the surface of the Earth curves away beneath it at the same rate, so the satellite continually misses the ground and circles the planet. At higher altitudes the gravitational pull is weaker and the orbital speed required is lower, which is why low-orbit satellites move much faster than the Moon, and geostationary satellites in much higher orbits keep pace with the Earth\'s daily rotation.'
    },
  ],

  /* ─────────────────────── 8 Energy — Forces Doing Work ─────────────────────── */
  '8': [
    {
      q: 'Describe what is meant by work done, and explain the relationship between work, energy and power.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Work is done whenever a force moves its point of application along the line of action of the force; it is calculated as work = force × distance moved in the direction of the force, in joules. Doing work transfers energy from one store to another: for example, lifting a book transfers energy from the chemical store of the lifter\'s muscles to the gravitational potential store of the book. Energy is the capacity to do work, also measured in joules, while power is the rate at which work is done or energy is transferred, in watts (W = J/s). For a constant force, power = work done ÷ time taken, so a more powerful machine does the same work in less time, or more work in the same time. The conservation of energy ensures that the work input to a system equals the useful work output plus the energy dissipated to the surroundings.'
    },
    {
      q: 'Explain what is meant by the efficiency of an energy transfer device and why no real device can be 100% efficient.',
      marks: 6, command: 'Explain',
      modelAnswer: 'The efficiency of a device is the fraction (or percentage) of the input energy that is transferred to the useful output store, calculated as useful energy out divided by total energy in. In every real device, some of the input energy is dissipated to less useful stores — typically thermal energy of the surroundings, due to friction, electrical resistance or air resistance — and some is transferred as sound. Because this dissipated energy is no longer available for the intended purpose, the useful output is always smaller than the input, so efficiency is always less than 100%, even though total energy is conserved.'
    },
    {
      q: 'Discuss how energy is transferred in a falling object, both in the absence of and in the presence of air resistance.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'When an object is dropped, it has gravitational potential energy that is transferred to its kinetic energy as it falls. Without air resistance, the object accelerates uniformly under gravity and at any point, the loss in gravitational potential energy equals the gain in kinetic energy, conserving total mechanical energy. In the presence of air resistance, some of the gravitational potential energy is also transferred to the thermal store of the air and the object as work is done against drag. The kinetic energy still increases, but more slowly, and once air resistance equals the weight, the resultant force is zero and the object falls at a constant terminal velocity. From that point on, all the gravitational potential energy lost is transferred to the thermal store rather than the kinetic store, so the kinetic energy stays constant.'
    },
  ],

  /* ─────────────────────── 9 Forces and Their Effects ─────────────────────── */
  '9': [
    {
      q: 'Explain what is meant by the centre of mass of an object and how stability depends on the position of the centre of mass.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The centre of mass of an object is the single point at which the entire weight of the object can be considered to act. For an object suspended freely from a pivot, the centre of mass lies directly below the pivot when the object is in equilibrium. An object is stable if a small tilt produces a torque that tends to return it to its original position, and unstable if the torque carries it further over. Stability is increased by a low centre of mass and a wide base of support: the object can tilt further before its centre of mass passes outside the base, beyond which gravity provides a turning effect that topples it. This is why racing cars and lorries are designed with a low and wide structure to remain stable when cornering, while tall, narrow objects topple easily.'
    },
    {
      q: 'Describe Newton\'s third law and discuss how it applies to a swimmer pushing off from the wall of a pool.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Newton\'s third law states that when one body exerts a force on a second body, the second body exerts an equal and opposite force on the first. The two forces always act on different bodies and are of the same type. When a swimmer pushes off the wall of a pool, their feet exert a backward force on the wall through the muscles of their legs. By Newton\'s third law, the wall exerts an equal and opposite forward force on the swimmer. Because the wall is fixed to the much more massive Earth, it does not noticeably move, but the smaller-mass swimmer accelerates forwards into the pool. The same idea underlies how rockets push against gas they expel, how walking uses friction with the ground, and how jet engines propel aircraft.'
    },
    {
      q: 'Discuss the differences between mass and weight, and explain how each varies on the Moon compared with on Earth.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Mass is a scalar measure of the amount of matter in an object, measured in kilograms; it does not change when the object moves around the universe. Weight is a vector force caused by gravity acting on the mass, measured in newtons, and given by W = m × g, where g is the gravitational field strength. On Earth, g is approximately 9.8 N/kg, while on the Moon it is about 1.6 N/kg, around one-sixth of Earth\'s value. An astronaut who has a mass of 60 kg on Earth still has a mass of 60 kg on the Moon — the astronaut is made of the same matter — but their weight on Earth is about 588 N, while on the Moon it is only about 96 N. This is why astronauts can leap higher and lift more on the Moon, even though their bodies have not changed.'
    },
  ],

  /* ─────────────────────── 10 Electricity and Circuits ─────────────────────── */
  '10': [
    {
      q: 'Compare the behaviour of components connected in series with those connected in parallel.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a series circuit the same current flows through every component because there is only one path for the charge, and the supply potential difference is shared between components in proportion to their resistance. In a parallel circuit each branch has its own loop, so the potential difference across each branch equals the supply, but the current splits between branches according to each branch resistance. Adding components in series increases total resistance, while adding them in parallel decreases total resistance because there are more paths for current. Household circuits are wired in parallel so that each appliance has the full mains voltage and can be switched on independently; series wiring is used for components like a fuse that must always carry the full circuit current.'
    },
    {
      q: 'Explain why mains electricity is supplied as alternating current, and describe the function of the live, neutral and earth wires in a three-pin plug.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Mains electricity is supplied as alternating current at 230 V and 50 Hz because a.c. can be transformed up or down using transformers, which is essential for efficient transmission at high voltage and low current. The live wire carries the alternating potential difference and is the dangerous wire because it is at a high potential relative to earth even when the appliance is switched off. The neutral wire completes the circuit and is at, or close to, earth potential. The earth wire is a safety wire connected to the metal casing of an appliance: if a fault causes the live wire to touch the casing, a large current flows through the earth wire to ground, blowing the fuse or tripping the breaker before anyone can be electrocuted.'
    },
    {
      q: 'Discuss how a fuse and a residual current circuit breaker (RCCB) protect users of electrical appliances.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'A fuse is a thin wire in series with the live wire, designed to melt and break the circuit if the current exceeds a set value, isolating the appliance from the supply during a short circuit or overload. Together with an earth wire, a fuse protects users when a fault makes the casing live: a large fault current flows to earth and quickly blows the fuse. However, a fuse only operates after a short delay and only at fairly large currents. A residual current circuit breaker compares the currents in the live and neutral wires; in normal operation they are equal. If a person touches a live wire and current flows through them to earth, the live and neutral currents differ by even a small amount, and the RCCB opens within a few milliseconds. RCCBs therefore react faster and at much smaller fault currents than fuses, and protect against electric shock as well as overload, making them an essential safety device alongside fuses in modern installations.'
    },
    {
      q: 'Evaluate the role of the National Grid in distributing electricity, with reference to why high voltages are used for transmission.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'The National Grid is the network of cables and transformers that carries electricity from power stations to consumers. Step-up transformers near the power station increase the voltage to typically 275 kV or 400 kV before the electricity is sent through transmission lines; step-down transformers near towns and homes reduce the voltage back to safe values. Transmitting at high voltage allows the same power to be delivered with a much smaller current, since power = voltage × current. A smaller current means much smaller energy losses to heat in the cables, because the heat dissipated is proportional to the square of the current (P = I²R). This makes long-distance transmission far more efficient and cheaper. The grid also pools electricity from many sources and routes it where demand is highest, increasing reliability. Drawbacks include high construction costs, the visual impact of pylons, and vulnerability of long cables to damage. On balance, the efficiency, flexibility and reliability of high-voltage grid transmission far outweigh the drawbacks, and no practical large-scale alternative exists today.'
    },
  ],

  /* ─────────────────────── 11 Static Electricity ─────────────────────── */
  '11': [
    {
      q: 'Explain how static electricity is produced when two insulating materials are rubbed together.',
      marks: 6, command: 'Explain',
      modelAnswer: 'When two insulating materials are rubbed together, friction transfers electrons from one material to the other. The material that gains electrons becomes negatively charged because it has more electrons than protons; the material that loses electrons becomes positively charged because it now has fewer electrons than protons. The materials are insulators, so the charges cannot flow back easily, and they remain separated. This is why a balloon rubbed on a jumper picks up a static charge that lets it stick to a wall, attracting opposite charges in the wall by induction.'
    },
    {
      q: 'Discuss the dangers and uses of static electricity, including how it can both cause harm and be put to practical use.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Static electricity can be dangerous because the build-up of charge on people or objects can cause a sudden discharge, often as a spark, that can ignite flammable vapours or damage sensitive electronic components. Refuelling vehicles, especially aircraft and tankers, must therefore be earthed to prevent sparks near fuel vapours, and electronics technicians wear earthing wrist straps. However, static electricity also has many useful applications. In photocopiers and laser printers, a charged drum attracts oppositely charged toner particles, allowing precise images to be transferred to paper. In electrostatic precipitators, dust particles are charged and attracted to oppositely charged plates, removing pollution from chimney exhausts in power stations. Inkjet printers and paint sprayers also rely on electrostatic forces to control the flow and direction of charged droplets. The same physics — attraction of opposite charges, repulsion of like charges — underlies both the hazards and the benefits.'
    },
    {
      q: 'Describe the electric field around an isolated point charge and explain how the field can be represented using field lines.',
      marks: 9, command: 'Describe',
      modelAnswer: 'An electric field is a region around a charged object in which other charged objects experience a force. Around an isolated positive point charge, the field acts radially outwards in all directions; around a negative point charge, it acts radially inwards. The field can be represented by field lines, which point in the direction of the force on a small positive test charge placed at that point, and which start on positive charges and end on negative charges. The closer the field lines, the stronger the field; lines never cross. The strength of the field decreases with distance from the charge, so the lines spread out as you move further away. Between two parallel oppositely charged plates, the field lines are parallel and evenly spaced, indicating a uniform field; near a point charge, the field has spherical symmetry.'
    },
  ],

  /* ─────────────────────── 12 Magnetism and the Motor Effect ─────────────────────── */
  '12': [
    {
      q: 'Compare permanent magnets and induced magnets, and describe the magnetic field around a bar magnet.',
      marks: 6, command: 'Compare',
      modelAnswer: 'A permanent magnet produces its own magnetic field continuously and does not need an external field to be magnetic. An induced magnet is a piece of magnetic material such as iron that becomes a magnet only when placed in another magnetic field; it loses most or all of its magnetism when removed. Around a bar magnet, the magnetic field lines emerge from the north pole, curve around outside the magnet to the south pole, and run from south to north inside the magnet, forming closed loops. The field is strongest near the poles, where the lines are closest together, and weaker further from the magnet, where the lines spread out.'
    },
    {
      q: 'Explain the motor effect and discuss the factors that affect the size and direction of the force on a current-carrying wire in a magnetic field.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a current-carrying wire is placed in a magnetic field, the moving charges in the wire interact with the field and a force is exerted on the wire. The size of the force is given by F = BIl, where B is the magnetic flux density, I is the current and l is the length of wire in the field, and is largest when current and field are perpendicular. Increasing any of B, I or l increases the force. The direction of the force is given by Fleming\'s left-hand rule: pointing the first finger along the field, the second along the current, the thumb gives the direction of the force, which is always perpendicular to both. Reversing the current or the field reverses the force; reversing both leaves the force unchanged.'
    },
    {
      q: 'Discuss how the motor effect is used in a simple d.c. motor and a loudspeaker.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In a simple d.c. motor, a rectangular coil is placed between the poles of a permanent magnet and connected to a d.c. supply through a split-ring commutator. Current in the two long sides of the coil experiences forces in opposite directions due to the motor effect, and these forces produce a turning moment that rotates the coil. As the coil passes through the vertical, the commutator reverses the connections to the external circuit so that the current continues to flow in the same direction relative to the field, keeping the rotation going in one direction. In a loudspeaker, a coil attached to a paper cone sits in the field of a permanent magnet and carries an alternating audio current. The motor effect produces a force that pushes the coil and cone backwards and forwards in time with the signal, creating sound waves of the same frequency in the air. Both devices rely on the same fundamental interaction between current, field and force, but use it to produce continuous rotation in one case and oscillating motion in the other.'
    },
  ],

  /* ─────────────────────── 13 Electromagnetic Induction ─────────────────────── */
  '13': [
    {
      q: 'Describe the generator effect and explain how an a.c. generator (alternator) produces an alternating output.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The generator effect is the induction of a potential difference (and a current, if the circuit is complete) in a conductor when there is a change in the magnetic field through it — for example, when a coil is rotated in a magnetic field. The size of the induced p.d. depends on the rate of change of magnetic flux: faster motion, stronger fields, more turns of wire and a larger coil area all increase the induced p.d. In an alternator, a coil is rotated steadily inside the field of a magnet. As the coil turns, the flux through it varies sinusoidally, and the induced p.d. reverses every half-turn. Slip rings keep the connections to the external circuit continuous so that an alternating output appears across the load, with frequency equal to the rotation frequency of the coil.'
    },
    {
      q: 'Explain how a transformer works and why transformers are essential for the efficient transmission of electricity through the National Grid.',
      marks: 12, command: 'Explain',
      modelAnswer: 'A transformer consists of two coils — primary and secondary — wound on the same iron core. An alternating current in the primary coil produces an alternating magnetic field in the iron core, which in turn induces an alternating potential difference in the secondary coil. The ratio of secondary to primary p.d. equals the ratio of the number of turns on the secondary coil to the number on the primary coil; a step-up transformer has more turns on the secondary and increases voltage, while a step-down transformer reduces it. For an ideal transformer, power in equals power out, so increasing the voltage decreases the current by the same factor. In the National Grid, electricity is generated at moderate voltage, then stepped up to 275 kV or 400 kV for transmission. At high voltage, the current is small, so heat losses in the cables (proportional to I²R) are much reduced. Step-down transformers near towns and homes reduce the voltage back to safe values for use, completing the chain of efficient long-distance transmission.'
    },
    {
      q: 'Discuss how Lenz\'s law (the direction of an induced current) relates to the conservation of energy in electromagnetic induction.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'When a magnet is moved towards a coil, an induced current flows in the coil in such a direction that its own magnetic field opposes the motion of the magnet — that is, it acts to repel the approaching north pole. If the magnet is pulled away, the induced current reverses and the field of the coil now attracts the magnet. This always holds: the induced current opposes the change that produced it. The reason is conservation of energy. If the induced current acted in the opposite sense, it would attract the approaching magnet and accelerate it, increasing both kinetic and electrical energy from nothing, which is impossible. By opposing the change, the induced current ensures that work has to be done against the induced field as the magnet is moved, and that work is exactly the electrical energy that appears in the coil. So Lenz\'s law is essentially the principle of conservation of energy applied to electromagnetic induction.'
    },
  ],

  /* ─────────────────────── 14 Particle Model ─────────────────────── */
  '14': [
    {
      q: 'Compare the arrangement, movement and energy of particles in solids, liquids and gases.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a solid, particles are arranged in a regular fixed lattice, are very close together and only vibrate about fixed positions; they have the lowest kinetic energy of the three states. In a liquid, particles are still close together but no longer in a fixed lattice; they can move past each other randomly, giving the liquid its ability to flow and take the shape of its container, and have higher kinetic energy than in a solid. In a gas, particles are far apart with no fixed arrangement, move rapidly and randomly in all directions, and have the highest kinetic energy. The forces of attraction between particles are strong in solids, weaker in liquids and almost negligible in gases, which explains why solids have a fixed shape and volume, liquids have a fixed volume but variable shape, and gases fill any container completely.'
    },
    {
      q: 'Explain, in terms of particles, what happens to the internal energy of a substance during a change of state, and why temperature stays constant.',
      marks: 9, command: 'Explain',
      modelAnswer: 'During a change of state, energy is supplied to or removed from the substance, but the temperature stays constant because the energy is not being used to change the average kinetic energy of the particles. Instead, it is being used to overcome (during melting or boiling) or form (during freezing or condensing) the bonds and forces of attraction between particles. For example, when ice melts, the supplied energy increases the potential energy store of the particles by breaking the rigid lattice arrangement, allowing them to move past each other as a liquid; the kinetic energy, and so the temperature, remains the same until all the ice has melted. Total internal energy still increases (during melting/boiling) or decreases (during freezing/condensation), even though the temperature does not change.'
    },
    {
      q: 'Describe what is meant by Brownian motion and discuss how it provides evidence for the particle model of matter.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Brownian motion is the random, jittery motion of small visible particles, such as smoke specks suspended in air, when observed through a microscope. The particles move in unpredictable directions and continually change their speed. This motion is caused by the much smaller, invisible air particles colliding with the visible particles from random angles, transferring momentum to them; because the bombardment from each side is uneven moment to moment, the visible particle is jostled this way and that. Brownian motion can only be explained by collisions with even smaller, fast-moving particles in continuous motion, providing strong evidence that matter is made of tiny particles, that those particles move randomly, and that the particles in a gas have substantial kinetic energy at room temperature.'
    },
  ],

  /* ─────────────────────── 15 Forces and Matter ─────────────────────── */
  '15': [
    {
      q: 'Explain the difference between elastic and inelastic deformation, and describe how Hooke\'s law applies to a spring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a force is applied to an object, it may stretch or compress. Elastic deformation occurs when the object returns to its original shape and size once the force is removed; inelastic deformation occurs when it does not return fully and remains permanently changed. Springs and rubber bands deform elastically up to a certain limit; beyond their elastic limit they deform inelastically. Hooke\'s law states that the extension of a spring is directly proportional to the force applied, provided the elastic limit is not exceeded: force = spring constant × extension. On a force–extension graph this gives a straight line through the origin in the elastic region, with the gradient equal to the spring constant. Beyond the elastic limit, the line curves and the spring no longer obeys Hooke\'s law.'
    },
    {
      q: 'Describe how pressure in a fluid depends on depth and density, and discuss why the pressure at a given depth is the same in all directions.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Pressure in a fluid increases with depth because the weight of the fluid above any point exerts a force on a horizontal area at that point. The pressure is given by P = ρgh, where ρ is the density of the fluid, g is the gravitational field strength, and h is the depth below the surface; doubling the depth doubles the pressure, and a denser fluid produces more pressure at the same depth. At a given depth, the pressure is the same in all directions because the fluid molecules are in continuous motion and collide equally with surfaces facing in any direction. This is why a swimmer\'s ears feel pressure equally from above, below and to the sides at the same depth, and why a hole drilled in any direction in the wall of a container at a given depth will produce a jet of water at the same speed.'
    },
    {
      q: 'Discuss how the upthrust on a submerged object explains why some objects float and others sink.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'When an object is submerged in a fluid, the pressure of the fluid is greater on the bottom of the object than on the top, because pressure increases with depth. The difference in pressure produces an upward force called upthrust. The upthrust is equal to the weight of fluid displaced by the object (Archimedes\' principle). If the upthrust is equal to or greater than the weight of the object, the object floats; if upthrust is less than weight, the object sinks. Floating depends on average density: an object less dense than the fluid will float because it does not need to be fully submerged to displace its own weight of fluid. A solid block of iron sinks in water because it is denser than water, but a steel ship floats because its hollow shape displaces a much larger volume of water and so a much greater upthrust than a solid block of the same mass would produce.'
    },
    {
      q: 'Evaluate the use of stretching and compressing materials in engineering, using examples to show how Hooke\'s law and the elastic limit guide design.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Many engineering applications rely on materials that can be reliably stretched or compressed within their elastic region. Springs in vehicle suspensions use Hooke\'s law to provide a force that increases with displacement, smoothing out bumps in the road; the spring constant is chosen to match the vehicle mass. Mechanical force meters and weighing scales use the linear relationship between force and extension to measure unknown forces from a measured stretch. Rubber bands, bungee cords and bow strings store and release elastic potential energy, allowing energy to be transferred quickly. In each case, designers must ensure that the working range of forces stays well below the elastic limit of the material; if the limit is exceeded, the component deforms permanently and may fail. For high-stress structures such as bridges and aircraft, materials are selected for high stiffness and high yield stress so that everyday forces remain comfortably within the elastic region. The benefits — reliable, predictable behaviour, energy storage and accurate measurement — make elastic materials indispensable, but designers must always include a safety factor to allow for unexpected loads, fatigue and ageing of the material.'
    },
  ],

};

if (typeof module !== 'undefined' && module.exports) module.exports = PHYSICS_EDEXCEL_GCSE_AI_FEEDBACK;
