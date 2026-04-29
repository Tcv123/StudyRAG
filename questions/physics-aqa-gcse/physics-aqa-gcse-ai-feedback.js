/*
 * AQA GCSE Physics (8463) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate. Each question carries a top-band model answer
 * the AI can use as a grading anchor.
 */

const PHYSICS_AQA_GCSE_AI_FEEDBACK = {

  /* ─────────────────────── 4.1 Energy ─────────────────────── */
  '4.1': [
    {
      q: 'Explain how the principle of conservation of energy applies to a swinging pendulum, including how energy is dissipated.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A swinging pendulum continuously transfers energy between gravitational potential and kinetic stores: at the highest point all the energy is gravitational potential, and at the lowest point it has all been transferred to the kinetic store. The principle of conservation of energy states that energy cannot be created or destroyed, only transferred between stores, so the total energy remains constant. In a real pendulum, work is done against air resistance and friction at the pivot, which transfers energy to the thermal store of the surroundings. This dissipated energy spreads out and cannot easily be recovered, so each swing has slightly less mechanical energy than the last and the amplitude gradually decreases until the pendulum stops.'
    },
    {
      q: 'Compare the environmental and economic advantages of using renewable energy resources with those of fossil fuels for generating electricity.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Renewable resources such as wind, solar, hydroelectric and tidal release no carbon dioxide during generation, whereas fossil fuels (coal, oil, gas) release CO₂ and other pollutants that drive climate change and acid rain. Renewables are essentially unlimited, while fossil fuels are finite and reserves are unevenly distributed, leading to economic and political pressures. However, renewables generally have higher start-up costs, while fossil-fuel stations are cheaper to build but have higher long-term running costs because fuel must continually be purchased. Wind and solar are intermittent and require backup or storage, whereas fossil-fuel stations provide reliable base-load power. Overall, renewables offer better long-term environmental and economic outcomes, but a transitional energy mix is currently necessary.'
    },
    {
      q: 'Evaluate the use of nuclear power as an energy resource for generating electricity in the UK.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Nuclear power has a very high energy density — a small mass of uranium releases far more energy than the same mass of fossil fuel — and produces almost no CO₂ during generation, making it valuable for reducing greenhouse-gas emissions. Output is reliable and not dependent on weather, unlike wind or solar, and a single station can supply a large fraction of national demand. However, nuclear stations are extremely expensive to build and to decommission safely once their working life ends. They produce radioactive waste that remains dangerous for thousands of years and must be stored in secure repositories. There is also a small but serious risk of major accidents (e.g. Chernobyl, Fukushima) with long-term environmental and health consequences, and uranium itself is a finite resource. Overall, nuclear provides a low-carbon, reliable energy source that is well suited to base-load generation, but the high cost and waste-management challenges mean its role depends on political and societal priorities; for the UK, it is best used alongside renewables rather than as a sole solution.'
    },
    {
      q: 'Discuss how thermal insulation in the walls and loft of a house reduces unwanted energy transfers and saves money.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Insulating materials such as fibreglass and foam have a low thermal conductivity, which reduces the rate at which thermal energy is transferred by conduction through the walls and roof. Cavity-wall insulation traps still air between the inner and outer leaves of the wall, and air is itself a poor conductor, further reducing conduction; loft insulation also reduces convection currents in the roof space. As less thermal energy escapes from the building, less electrical or gas energy is needed to heat it back to the same temperature, so household energy bills fall. Although there is an initial installation cost, the payback time is usually only a few years, after which the homeowner makes long-term savings, while also reducing the carbon emissions associated with heating.'
    },
    {
      q: 'Explain what is meant by the efficiency of an energy transfer device and why no real device can be 100% efficient.',
      marks: 6, command: 'Explain',
      modelAnswer: 'The efficiency of a device is the fraction (or percentage) of the input energy that is transferred to the useful output store, calculated as useful energy out divided by total energy in. In every real device, some of the input energy is dissipated to less useful stores — typically thermal energy of the surroundings due to friction, electrical resistance or air resistance — and some is transferred as sound. Because this dissipated energy is no longer available for the intended purpose, the useful output is always smaller than the input, so the efficiency is always less than 100%, even though the total energy is conserved.'
    },
    {
      q: 'Assess the importance of reducing wasted energy in everyday devices, using examples to support your answer.',
      marks: 12, command: 'Assess',
      modelAnswer: 'Reducing wasted energy increases the efficiency of devices, which lowers the energy demand for the same useful output. For example, modern LED bulbs convert around 85% of input electrical energy to light, while old filament bulbs converted only about 10%, with the remaining 90% wasted as heat; switching reduces electricity consumption dramatically. Better aerodynamics and lower-friction bearings in cars increase the fraction of fuel energy delivered to the wheels, reducing fuel use and CO₂ emissions per mile. At a national scale, more efficient devices reduce demand on the grid, allowing the same power stations to supply more homes and reducing the need to build new generation capacity. There are also environmental benefits: less fossil fuel burned means lower greenhouse-gas emissions, and household savings come from lower bills. The main limit is cost — efficient devices may be more expensive to buy — but in most cases the long-term savings outweigh the initial investment, so reducing wasted energy is highly important both economically and environmentally.'
    },
  ],

  /* ─────────────────────── 4.2 Electricity ─────────────────────── */
  '4.2': [
    {
      q: 'Compare the behaviour of components connected in series with those connected in parallel.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a series circuit the same current flows through every component, because there is only one path for the charge, and the total potential difference of the supply is shared between the components in proportion to their resistance. In a parallel circuit each branch has its own loop, so the potential difference across each branch is the same as the supply, but the current splits between the branches according to each branch resistance. Adding more components in series increases the total resistance, while adding more in parallel decreases the total resistance because there are more paths for the current. In practice, household circuits are wired in parallel so that each appliance has the full mains voltage and can be switched on independently, whereas series wiring is used in components like a fuse that must always carry the full circuit current.'
    },
    {
      q: 'Explain why mains electricity in UK homes is supplied as alternating current, and describe the function of the live, neutral and earth wires.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Mains electricity is supplied as alternating current (a.c.) at 230 V and 50 Hz because a.c. can be easily transformed up or down using transformers, which is essential for efficient transmission at high voltage and low current through the National Grid. The live wire carries the alternating potential difference and is the wire that delivers energy to the appliance; it is dangerous because it can be at a high potential relative to earth even when the appliance is switched off. The neutral wire completes the circuit and is at, or close to, earth potential. The earth wire is a safety wire connected to the metal casing of an appliance: if a fault causes the live wire to touch the casing, a large current flows safely to earth, blowing the fuse or tripping the breaker before anyone can be electrocuted.'
    },
    {
      q: 'Discuss the role of the National Grid in distributing electricity, including why high voltages are used for transmission.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'The National Grid is the network of cables and transformers that carries electricity from power stations to consumers. Step-up transformers near the power station increase the voltage to typically 275 kV or 400 kV before the electricity is sent through transmission lines; step-down transformers near towns and homes reduce the voltage back to safe values (e.g. 230 V for domestic use). Transmitting at high voltage allows the same power to be delivered with a much smaller current, since power = voltage × current. A smaller current means much smaller energy losses to heat in the cables, because the heat dissipated is proportional to the square of the current (P = I²R). This makes long-distance transmission far more efficient and cheaper. The grid also allows electricity from many different sources — fossil-fuel, nuclear and renewable — to be pooled and routed to wherever demand is highest, increasing reliability. Drawbacks include high construction costs and the visual impact of pylons, but the efficiency, flexibility and reliability gains make the National Grid essential to a modern electricity supply.'
    },
    {
      q: 'Describe how the resistance of a thermistor and a light-dependent resistor (LDR) change with conditions, and explain one practical use of each.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The resistance of a thermistor decreases as its temperature increases, because more charge carriers become available to conduct in the semiconductor material. The resistance of an LDR decreases as the intensity of light falling on it increases, for the same reason — more charge carriers are released by the absorbed light. A thermistor is used in a temperature-sensing circuit, for example a thermostat in an oven or fridge, where the change in resistance is used to switch the heating or cooling on and off and maintain a set temperature. An LDR is used in automatic lighting circuits, such as street lamps that switch on at dusk: as natural light fades, the LDR resistance rises, which causes a control circuit to switch the lamp on.'
    },
    {
      q: 'Explain why a fuse and an earth wire together protect the user of a metal-cased electrical appliance.',
      marks: 6, command: 'Explain',
      modelAnswer: 'The earth wire is connected to the metal casing of the appliance and provides a low-resistance path to earth. If a fault causes the live wire to touch the casing, a very large current flows through the earth wire rather than through anyone touching the appliance, because earth is a much lower-resistance route than a person. This large current quickly melts the fuse, breaking the circuit and isolating the appliance from the live supply, so the casing is no longer at a dangerous potential and the user is protected from electrocution.'
    },
    {
      q: 'Evaluate the use of energy-efficient appliances in the home, considering both economic and environmental factors.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Energy-efficient appliances such as A-rated washing machines, fridges and LED lighting transfer a much larger fraction of their input electrical energy to the useful output, with less wasted as heat. Economically, this means lower running costs over the lifetime of the appliance, often saving the consumer significantly more than the higher purchase price within a few years. Environmentally, reduced electricity use means less demand on the National Grid and therefore lower CO₂ emissions from fossil-fuel power stations, helping mitigate climate change. There are some drawbacks: efficient appliances often have a higher upfront cost, manufacturing them still uses energy and raw materials, and the environmental gains depend on how electricity is generated locally. However, the long-term financial savings, reduced carbon footprint and pressure on energy infrastructure mean that using energy-efficient appliances is an effective and worthwhile strategy for both individual households and society as a whole.'
    },
  ],

  /* ─────────────────────── 4.3 Particle Model of Matter ─────────────────────── */
  '4.3': [
    {
      q: 'Compare the arrangement, movement and energy of particles in solids, liquids and gases.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a solid, particles are arranged in a regular fixed pattern, are very close together and only vibrate about fixed positions; they have the lowest kinetic energy of the three states. In a liquid, particles are still close together but no longer in a fixed lattice — they can move past each other randomly, giving the liquid its ability to flow and take the shape of its container; their kinetic energy is higher than in a solid. In a gas, particles are far apart with no fixed arrangement, move rapidly and randomly in all directions, and have the highest kinetic energy. The forces of attraction between particles are strong in solids, weaker in liquids and almost negligible in gases, which explains why solids have fixed shape and volume, liquids have fixed volume but variable shape, and gases fill any container completely.'
    },
    {
      q: 'Explain, in terms of particles, what happens to the internal energy of a substance during a change of state, and why temperature stays constant.',
      marks: 9, command: 'Explain',
      modelAnswer: 'During a change of state, energy is supplied to (or removed from) the substance, but the temperature stays constant because the energy is not being used to change the average kinetic energy of the particles. Instead, it is being used to overcome (or form) the bonds and forces of attraction between particles. For example, when ice melts, the energy supplied increases the potential energy store of the particles by breaking the rigid lattice arrangement, allowing them to move past each other as a liquid; the kinetic energy, and so the temperature, remains the same until all the ice has melted. The same principle applies during boiling and condensation. The total internal energy still increases (during melting/boiling) or decreases (during freezing/condensation), even though the temperature is unchanged.'
    },
    {
      q: 'Describe what is meant by Brownian motion and explain how it provides evidence for the particle model of matter.',
      marks: 6, command: 'Describe',
      modelAnswer: 'Brownian motion is the random, jittery movement of small visible particles — such as smoke specks suspended in air — when observed through a microscope. The particles move in unpredictable directions and change speed and direction continuously. This motion is caused by the much smaller, invisible air particles colliding with the visible particles from random angles, transferring momentum to them. Because Brownian motion can only be explained by collisions with even smaller fast-moving particles, it provides direct evidence that matter is made of tiny particles in continuous motion, consistent with the particle (kinetic) model.'
    },
    {
      q: 'Discuss the meaning of specific latent heat and how it differs between melting and boiling for a substance such as water.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Specific latent heat is the energy required to change the state of one kilogram of a substance without any change in temperature. Specific latent heat of fusion refers to melting (or freezing), and specific latent heat of vaporisation refers to boiling (or condensing). For water, the specific latent heat of vaporisation (about 2.26 MJ/kg) is much greater than the specific latent heat of fusion (about 334 kJ/kg). This is because boiling requires breaking essentially all the intermolecular forces between water molecules so they can move freely as a gas, whereas melting only requires breaking the rigid lattice arrangement of solid ice while many forces between water molecules remain. The energy supplied during a change of state increases the potential energy store of the particles rather than their kinetic energy, which is why temperature stays constant during the change.'
    },
    {
      q: 'Explain how the pressure of a gas in a sealed container arises and how it changes when the gas is heated at constant volume.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Gas pressure arises because the rapidly moving gas particles continually collide with the walls of the container. Each collision exerts a small force on the wall as the particle changes direction, and the total force per unit area from all the collisions averaged over time is the pressure. When the gas is heated at constant volume, the kinetic energy of each particle increases, so on average the particles move faster. They strike the walls more frequently and with greater momentum, so each collision exerts a larger force and there are more collisions per second. The total force on the walls therefore increases, and since the area of the walls is unchanged, the pressure rises with temperature.'
    },
    {
      q: 'Evaluate the use of materials with high specific heat capacity, such as water, in domestic central heating systems.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'A material with a high specific heat capacity can store a large amount of thermal energy for a relatively small rise in temperature, and release it slowly as it cools. Water has one of the highest specific heat capacities of any common substance (about 4200 J/kg°C), making it well suited to carrying thermal energy from a boiler around a house through radiators. As the hot water flows through the radiators, it transfers a large amount of energy to the room while only cooling slightly, which gives a steady, even heat output. Water is also cheap, non-toxic and easy to pump. There are some drawbacks: water can corrode metal pipes, freeze in cold weather and leak, and a large volume must be heated initially before the system warms up, which uses significant energy. However, on balance, the high heat capacity, low cost and safety make water an effective choice; alternative fluids would be more expensive or hazardous, so water remains the standard heat-transfer fluid in central heating despite its limitations.'
    },
  ],

  /* ─────────────────────── 4.4 Atomic Structure ─────────────────────── */
  '4.4': [
    {
      q: 'Describe how the alpha-scattering experiment led scientists to replace the plum-pudding model with the nuclear model of the atom.',
      marks: 12, command: 'Describe',
      modelAnswer: 'In the plum-pudding model, the atom was thought to be a positive sphere with negative electrons embedded in it, like fruit in a pudding. In the alpha-scattering experiment, Rutherford fired alpha particles at a thin gold foil and detected where they ended up. Most alpha particles passed straight through the foil with little or no deflection, showing that atoms are mostly empty space. A small number were deflected through large angles, and a very small fraction bounced back almost in the direction they came from, which could not be explained by a uniform diffuse positive charge. Rutherford concluded that the positive charge of an atom must be concentrated in a tiny, dense region — the nucleus — that contained almost all the mass of the atom. The electrons must orbit this nucleus at relatively large distances, leaving most of the atom as empty space. This evidence forced scientists to replace the plum-pudding model with the nuclear model, in which a small, dense, positively charged nucleus is surrounded by orbiting electrons.'
    },
    {
      q: 'Compare the properties of alpha, beta and gamma radiation in terms of their nature, ionising power, penetrating ability and range in air.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Alpha radiation consists of helium nuclei (two protons and two neutrons) and is highly ionising, but it is very weakly penetrating: it is stopped by a few centimetres of air or a sheet of paper. Beta radiation is a fast-moving electron emitted from the nucleus when a neutron decays into a proton; it is moderately ionising, more penetrating than alpha, and is stopped by a few millimetres of aluminium and travels around a metre in air. Gamma radiation is high-frequency electromagnetic radiation; it is the least ionising of the three but the most penetrating, with significant intensity passing through several centimetres of lead and travelling many metres in air. The differences in ionising and penetrating power arise from their differences in mass, charge and energy: heavier, more highly charged alpha particles interact strongly with matter and quickly lose energy, while uncharged photons of gamma radiation pass through easily but ionise less.'
    },
    {
      q: 'Explain what is meant by the half-life of a radioactive isotope and why it is important when assessing the safety of radioactive waste.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The half-life of a radioactive isotope is the average time taken for half of the unstable nuclei in a sample to decay, or equivalently the time taken for the activity of the sample to fall to half its original value. Different isotopes have very different half-lives, ranging from fractions of a second to billions of years. When assessing the safety of radioactive waste, half-life matters because waste with a long half-life remains dangerous for a very long time and must be stored securely for thousands or even millions of years to allow its activity to fall to safe levels. Waste with a short half-life decays quickly and is hazardous only for a short period, but may be initially highly radioactive. Both factors, together with the type of radiation and quantity of waste, determine how the waste must be stored, shielded and monitored.'
    },
    {
      q: 'Discuss the medical uses of radioactivity, considering both the benefits and the risks to patients and staff.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Radioactivity has several important medical uses. Gamma rays from sources such as cobalt-60 are used in radiotherapy to kill cancer cells, with multiple beams targeted to overlap at the tumour so that surrounding healthy tissue receives a smaller dose. Radioactive tracers, often beta or gamma emitters with short half-lives, are introduced into the body and tracked using detectors to image organ function or detect blockages. Gamma sources are also used to sterilise medical equipment by killing bacteria. The benefits include diagnosis of conditions that would otherwise require invasive surgery, effective treatment of cancers that would be difficult to remove, and reliable sterilisation. However, ionising radiation can damage healthy DNA, increasing the long-term risk of cancer for patients and staff. Risks are managed by using the lowest effective dose, choosing isotopes with short half-lives so the activity falls quickly, shielding staff with lead, and limiting their exposure time. On balance, the medical benefits typically outweigh the risks when proper procedures are followed, but use must always be carefully justified and monitored.'
    },
    {
      q: 'Explain how nuclear fission releases energy and how a chain reaction is controlled inside a nuclear reactor.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Nuclear fission occurs when a large unstable nucleus, such as uranium-235, absorbs a neutron and splits into two smaller daughter nuclei, releasing two or three more neutrons and a large amount of energy. The energy comes from a small amount of mass being converted to energy according to the binding-energy difference between the parent and daughter nuclei. The neutrons released can go on to cause further fissions, producing a chain reaction. In a nuclear reactor, the chain reaction is controlled to provide a steady output of energy. Control rods made of materials such as boron or cadmium are inserted between the fuel rods to absorb excess neutrons; pushing the rods further in slows the reaction, while withdrawing them speeds it up. A moderator (usually water or graphite) slows the neutrons to the speeds at which uranium-235 absorbs them most effectively, sustaining the reaction at a steady, controlled rate.'
    },
    {
      q: 'Compare the processes of nuclear fission and nuclear fusion, including how each releases energy and the challenges of using fusion as a power source.',
      marks: 12, command: 'Compare',
      modelAnswer: 'In nuclear fission, a large unstable nucleus splits into two smaller nuclei, releasing energy, neutrons and gamma radiation. In nuclear fusion, two small light nuclei (typically isotopes of hydrogen) join together to form a heavier nucleus, releasing even more energy per kilogram of fuel. Both processes release energy because the resulting nuclei have a higher binding energy per nucleon, meaning a small amount of mass is converted into energy. Fission is currently used in commercial nuclear power stations and produces highly radioactive waste, but it is reliable and proven. Fusion releases more energy and uses fuel that is abundant (deuterium from sea water) and produces almost no long-lived radioactive waste, making it potentially much cleaner. However, fusion requires extremely high temperatures (millions of degrees) and pressures to overcome the electrostatic repulsion between nuclei, which is very difficult to achieve and sustain. No commercial fusion power station currently exists, although experimental reactors such as ITER are making progress; the main engineering challenge is confining the plasma at high enough temperatures for long enough to release more energy than is put in.'
    },
    {
      q: 'Discuss the dangers of contamination and irradiation, and explain the difference between them.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Irradiation occurs when an object or person is exposed to radiation from an external radioactive source — for example, standing near an unshielded gamma source. The object does not become radioactive itself, and the danger ends when the source is removed or shielded. Contamination occurs when radioactive material gets onto the skin, clothing or inside the body, for example by inhaling radioactive dust or swallowing contaminated water. The hazard from contamination continues until the radioactive material is removed or has decayed, and is particularly serious because alpha and beta sources, which are weakly penetrating from outside, can ionise tissue intensely once inside the body. Both can damage cells and increase cancer risk, but contamination is generally more dangerous because exposure is prolonged and internal. Risks are managed using shielding, protective clothing, ventilation, careful handling procedures, and the use of isotopes with short half-lives where possible.'
    },
  ],

  /* ─────────────────────── 4.5 Forces ─────────────────────── */
  '4.5': [
    {
      q: 'Describe Newton\'s three laws of motion and explain how each one applies to the motion of a car.',
      marks: 12, command: 'Describe',
      modelAnswer: 'Newton\'s first law states that an object continues at rest or at constant velocity unless acted on by a resultant force. A car parked on level ground stays still because there is no resultant force acting on it; once moving at constant velocity along a straight road, the driving force from the engine balances friction and air resistance, so the resultant force is zero and the speed is constant. Newton\'s second law states that the resultant force on an object is equal to its mass multiplied by its acceleration (F = ma). When the driver presses the accelerator, the driving force exceeds friction; this gives a resultant forward force, and the car accelerates. A more massive car requires a larger force to achieve the same acceleration. Newton\'s third law states that for every action force there is an equal and opposite reaction force on a different object. As the car accelerates, the wheels push backwards on the road, and the road exerts an equal forward force on the wheels — this is what propels the car forward. Together these laws describe the relationships between force, mass and motion that govern how the car starts, continues and stops.'
    },
    {
      q: 'Compare the meanings of scalar and vector quantities, using examples from forces and motion.',
      marks: 6, command: 'Compare',
      modelAnswer: 'A scalar quantity has only magnitude (size), while a vector quantity has both magnitude and direction. Examples of scalars include mass, time, temperature, energy, distance and speed. Examples of vectors include force, weight, velocity, acceleration, displacement and momentum. For example, two cars travelling at 30 m/s have the same speed (a scalar), but if one is moving north and one south they have different velocities (vectors) because their directions differ. Force is a vector because pushing an object north has a different effect from pushing it east, even with the same magnitude.'
    },
    {
      q: 'Explain the factors that affect the stopping distance of a car and how each factor influences thinking distance and braking distance.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The total stopping distance of a car is the sum of the thinking distance (distance travelled during the driver\'s reaction time) and the braking distance (distance travelled while the brakes decelerate the car to rest). Thinking distance is increased by anything that lengthens reaction time, such as tiredness, alcohol, drugs or distractions like using a phone, and is also longer at higher speeds because the car covers more ground in the same reaction time. Braking distance depends on the speed of the car and the braking force available; greater speed gives the car much more kinetic energy, which must be removed by work done by the brakes, so braking distance increases roughly with the square of the speed. Wet, icy or oily roads reduce friction between tyres and road, increasing braking distance, and worn tyres or worn brakes reduce braking force and have the same effect.'
    },
    {
      q: 'Discuss how vehicle safety features such as crumple zones, airbags and seatbelts reduce the force on a passenger in a crash.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In a crash, a passenger\'s momentum must be reduced to zero. The force needed equals the rate of change of momentum, so increasing the time over which the change occurs reduces the force. Crumple zones at the front and rear of a car deform on impact, increasing the time taken for the car to come to rest and so reducing the force on the occupants. Seatbelts are designed to stretch slightly during a sudden stop, which similarly increases the time over which the passenger decelerates and prevents them from being thrown forward into the windscreen or steering wheel. Airbags inflate rapidly between the passenger and the dashboard, providing a softer surface that further extends the time of the collision and spreads the force over a larger area of the body, reducing pressure on any one point. Together, these features cut the peak force experienced and dramatically reduce the risk of serious injury, although they cannot eliminate it.'
    },
    {
      q: 'Explain the difference between elastic and inelastic deformation, and describe how Hooke\'s law applies to a spring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a force is applied to an object, it may stretch or compress. Elastic deformation occurs when the object returns to its original shape and size after the force is removed; inelastic deformation occurs when it does not return fully and remains permanently changed. Springs and rubber bands deform elastically up to a certain limit; if stretched too far, they reach their elastic limit and deform inelastically. Hooke\'s law states that the extension of a spring is directly proportional to the force applied, provided the elastic limit is not exceeded. Mathematically, force = spring constant × extension. On a force–extension graph this gives a straight line through the origin in the elastic region, with the gradient equal to the spring constant. Beyond the elastic limit the line curves and the spring no longer obeys Hooke\'s law.'
    },
    {
      q: 'Evaluate how the design of a parachute helps a skydiver to land safely, in terms of the forces acting and terminal velocity.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'When a skydiver first jumps, weight is the only significant force, so they accelerate downwards. As speed increases, air resistance increases until air resistance equals weight; the resultant force is zero and the skydiver falls at a constant terminal velocity, typically around 50–60 m/s. Opening the parachute dramatically increases the surface area exposed to the air, which greatly increases the air resistance at any given speed. Air resistance is now much larger than weight, so the skydiver decelerates rapidly. As speed falls, air resistance decreases until once again it balances weight, giving a new, much lower terminal velocity (around 5 m/s) that allows a safe landing. The parachute is designed to be large enough to give a low terminal velocity but not so large that it tears or makes the skydiver hard to control; it usually has vents to keep it stable in flight. Overall, the parachute works by exploiting the dependence of air resistance on surface area to convert what would otherwise be a fatal landing into a survivable one.'
    },
    {
      q: 'Describe what is meant by the moment of a force and discuss how the principle of moments applies to a balanced see-saw or lever.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The moment of a force is its turning effect about a pivot, calculated as force multiplied by the perpendicular distance from the line of action of the force to the pivot, in newton-metres (N m). A larger force or a longer distance from the pivot produces a larger turning effect. The principle of moments states that for an object in equilibrium, the sum of the clockwise moments about any pivot is equal to the sum of the anticlockwise moments. On a balanced see-saw, a heavier child sitting closer to the pivot can balance a lighter child sitting further away, because each child\'s moment (weight × distance from the pivot) is equal in size but opposite in direction. The same principle is used in levers such as crowbars and spanners: a relatively small effort applied at a long distance from the pivot produces a large moment that can overcome a heavy load close to the pivot, allowing heavy objects to be moved or tight nuts to be turned with less effort.'
    },
  ],

  /* ─────────────────────── 4.6 Waves ─────────────────────── */
  '4.6': [
    {
      q: 'Compare transverse and longitudinal waves, giving a clear example of each and explaining how their oscillations relate to the direction of energy transfer.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a transverse wave, the oscillations of the medium are perpendicular to the direction in which the wave transfers energy. Examples include water waves, electromagnetic waves and S-waves in earthquakes. In a longitudinal wave, the oscillations of the medium are parallel to the direction in which energy is transferred, producing alternating regions of compression and rarefaction. Sound waves in air and P-waves from earthquakes are examples. Both types transfer energy without transferring matter — particles oscillate about a fixed point and return to that point. They both have wavelength, frequency, amplitude and speed defined in the same way, but only transverse waves can be polarised, because polarisation only makes sense when the oscillation has a defined plane perpendicular to the direction of travel.'
    },
    {
      q: 'Explain how waves can be reflected, refracted and absorbed when they reach a boundary between two materials.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a wave reaches the boundary between two materials, three things can happen. Reflection occurs when the wave bounces off the boundary and stays in the original medium; the angle of incidence equals the angle of reflection, and a smooth, hard surface gives the strongest reflection. Refraction occurs when the wave passes into the second material and changes speed, which usually causes a change in direction at the boundary unless it strikes the boundary perpendicularly. The wave bends towards the normal if it slows down (e.g. light entering glass) and away from the normal if it speeds up. Absorption occurs when energy is transferred from the wave to the material, increasing the thermal store of the material; the wave\'s amplitude decreases and the energy carried is reduced. In practice, all three processes can happen at the same boundary, with the proportions depending on the wave\'s wavelength and the materials involved.'
    },
    {
      q: 'Describe the electromagnetic spectrum in order of increasing frequency, and explain why all electromagnetic waves travel at the same speed in a vacuum.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The electromagnetic spectrum, in order of increasing frequency (and decreasing wavelength), is: radio waves, microwaves, infrared, visible light (red to violet), ultraviolet, X-rays and gamma rays. All electromagnetic waves are transverse, consist of oscillating electric and magnetic fields perpendicular to one another, and can travel through a vacuum. They all travel at the same speed in a vacuum — approximately 3 × 10⁸ m/s, the speed of light — because the relationship between the changing electric and magnetic fields, governed by the laws of electromagnetism, sets a single fixed speed for these self-propagating fields in a vacuum, regardless of frequency or wavelength. In materials such as glass or water they travel more slowly, and the speed depends on the material and the wave\'s frequency.'
    },
    {
      q: 'Discuss the uses and possible dangers of microwaves, ultraviolet radiation and X-rays.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Microwaves are used for cooking and for communication, including mobile phones, satellite transmissions and Wi-Fi. In a microwave oven, the waves are absorbed by water molecules in food, causing them to gain kinetic energy and heat the food. Possible dangers are limited but include internal heating of body tissues if a person is exposed to high-power microwaves, which is why microwave ovens have shielded doors. Ultraviolet (UV) radiation is used in fluorescent lamps, in security marking and in disinfecting drinking water and surfaces. UV is more energetic than visible light and can cause sunburn, premature skin ageing and skin cancer, and can damage the eyes; protection includes sunscreen and UV-filtering glasses. X-rays are used to produce medical images of bones and to treat cancer in radiotherapy, and to inspect luggage at airports. They are ionising and can damage DNA, increasing the long-term risk of cancer, so doses are kept as low as possible, exposure times are short, and staff stand behind lead shielding. Across all three, the benefits in communication, healthcare and industry are significant, but they must be balanced against careful management of the health risks.'
    },
    {
      q: 'Explain how a converging lens forms a real image of a distant object, with reference to the rays of light involved.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A converging lens is thicker in the middle than at the edges. Parallel rays of light from a distant object enter the lens and are refracted at each surface, bending towards the principal axis. They all converge at the principal focus, on the opposite side of the lens, at a distance equal to the focal length. To locate the image of a more general object, two rays from a point on the object can be drawn: one parallel to the axis, which passes through the focal point after the lens, and one through the centre of the lens, which is undeviated. The point where these two rays cross gives the image position. For an object beyond the focal length, the resulting image is real (rays actually meet there), inverted, and may be smaller, the same size, or larger than the object depending on the object distance. Such a real image can be projected onto a screen, as happens in cameras and projectors.'
    },
    {
      q: 'Describe how ultrasound is used in medical imaging and discuss the advantages of ultrasound over X-rays for some uses.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Ultrasound is sound at frequencies above 20 000 Hz, beyond the range of human hearing. In medical imaging, a transducer placed on the patient\'s skin sends short pulses of ultrasound into the body and detects the reflected echoes from boundaries between different tissues. The time delay and amplitude of each echo are used by a computer to construct an image of the internal structures, such as a foetus during pregnancy or organs such as the heart. Ultrasound has key advantages over X-rays for some uses: it is non-ionising, so it does not damage cells or DNA, making it safe for repeated use and for imaging unborn babies. It is also good at distinguishing between different soft tissues, which X-rays show poorly because soft tissues all absorb X-rays similarly. X-rays are still better for imaging hard structures such as bones, but for many soft-tissue scans ultrasound is safer and provides clearer information.'
    },
    {
      q: 'Compare seismic P-waves and S-waves, and explain how their behaviour gives evidence about the structure of the Earth.',
      marks: 9, command: 'Compare',
      modelAnswer: 'P-waves are longitudinal seismic waves that can travel through both solids and liquids; they are faster than S-waves, with speeds of around 5–8 km/s in the crust. S-waves are transverse seismic waves that can only travel through solids, because liquids cannot support shear motion; they are slower, at around 3–4 km/s. After an earthquake, seismometers around the world record both types. Beyond a certain angle from the epicentre, S-waves are not detected, creating an "S-wave shadow zone" on the opposite side of the planet; this is evidence that the outer core of the Earth is liquid, because S-waves cannot pass through it. P-waves are detected almost everywhere, but their speeds and directions change at boundaries inside the Earth, indicating layers such as the crust, mantle, outer core and inner core. The combined behaviour of both waves therefore gives strong evidence for a layered Earth with a solid mantle, a liquid outer core and a solid inner core.'
    },
  ],

  /* ─────────────────────── 4.7 Magnetism and Electromagnetism ─────────────────────── */
  '4.7': [
    {
      q: 'Compare permanent magnets and induced magnets, and describe the magnetic field around a bar magnet.',
      marks: 6, command: 'Compare',
      modelAnswer: 'A permanent magnet produces its own magnetic field continuously and does not need an external field to be magnetic. An induced magnet is a piece of magnetic material (such as iron) that becomes a magnet only when placed in another magnetic field; it loses most or all of its magnetism when removed from that field. Around a bar magnet, the magnetic field lines emerge from the north pole, curve around outside the magnet to the south pole, and run from south to north inside the magnet, forming closed loops. The field is strongest near the poles, where the lines are closest together, and weaker further from the magnet, where the lines spread out.'
    },
    {
      q: 'Explain the motor effect, including the factors that affect the size of the force on a current-carrying wire in a magnetic field.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a current-carrying wire is placed in a magnetic field, the moving charges in the wire interact with the field and a force is exerted on the wire. This is called the motor effect. The size of the force is given by F = BIl, where B is the magnetic flux density, I is the current and l is the length of the wire in the field. The force is therefore largest when the current and the field are perpendicular to each other; if they are parallel, no force acts. Increasing the current, the magnetic flux density, or the length of wire in the field increases the force. The direction of the force is given by Fleming\'s left-hand rule: pointing the first finger along the field, the second along the current, the thumb gives the direction of the force, which is always perpendicular to both. This effect is the basis of electric motors and loudspeakers.'
    },
    {
      q: 'Describe the generator effect and explain how it is used in the alternator and dynamo.',
      marks: 12, command: 'Describe',
      modelAnswer: 'The generator effect is the induction of a potential difference (and a current, if the circuit is complete) in a conductor when there is a change of magnetic field through it — for example, when a wire moves through a field or when the field around a coil changes. The size of the induced p.d. depends on the rate of change of magnetic flux: faster motion, stronger fields, more turns of wire and a larger area of coil all increase the induced p.d. The induced current\'s direction is such that its own magnetic field opposes the change that produced it. An alternator generates alternating current by rotating a coil in a magnetic field; as the coil turns, the flux through it varies sinusoidally and the induced p.d. reverses every half-turn. Slip rings keep the connections continuous so that an alternating output appears across the external circuit. A dynamo generates direct current using a similar arrangement but with a split-ring commutator instead of slip rings; the commutator reverses the connection to the external circuit each half-turn so that the output current always flows in the same direction, although it pulses in size.'
    },
    {
      q: 'Explain how a transformer works and why transformers are essential for the efficient transmission of electricity through the National Grid.',
      marks: 12, command: 'Explain',
      modelAnswer: 'A transformer consists of two coils — primary and secondary — wound on the same iron core. An alternating current in the primary coil produces an alternating magnetic field in the iron core. This changing field induces an alternating potential difference in the secondary coil. The ratio of secondary to primary potential difference equals the ratio of the number of turns on the secondary coil to the number on the primary coil; a step-up transformer has more turns on the secondary and increases voltage, while a step-down transformer has fewer turns on the secondary and decreases voltage. For an ideal transformer, power in equals power out, so increasing the voltage decreases the current by the same factor. In the National Grid, electricity is generated at moderate voltage, then stepped up to very high voltage (typically 275 kV or 400 kV) for transmission. At high voltage the current is small, so the energy lost as heat in the cables (proportional to I²R) is greatly reduced. Step-down transformers near towns reduce the voltage back to safe values for homes and businesses. Without transformers, only direct power-station-to-consumer supply at low voltage would be practical, and most of the energy would be wasted as heat in the cables.'
    },
    {
      q: 'Discuss the uses of electromagnets in everyday devices and industry, and assess one advantage they have over permanent magnets.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Electromagnets are used in many everyday and industrial devices. In scrap-yards, large electromagnets attached to cranes lift heavy steel objects and release them by switching off the current. In doorbells, electric motors, electric bells and relays, electromagnets convert electrical signals into movement. In maglev trains, powerful electromagnets levitate the train above the track and propel it forward, eliminating friction with the rails. In MRI scanners, very strong superconducting electromagnets produce the magnetic fields needed to image the body. The key advantage over permanent magnets is that an electromagnet can be switched on and off, and its strength can be controlled by changing the current; this is essential in scrap-yards where loads must be picked up and dropped on demand, in relays that need to switch repeatedly, and in MRI scanners where the field must be turned off when not in use. Permanent magnets cannot be switched off, so they are unsuitable for any application that requires a controllable or temporary field.'
    },
    {
      q: 'Explain how the loudspeaker uses the motor effect to produce sound from an electrical signal.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A loudspeaker contains a coil of wire attached to a paper or plastic cone, with the coil placed in the field of a permanent magnet. When the alternating audio signal current passes through the coil, the motor effect produces a force on the coil — by Fleming\'s left-hand rule — pushing it backwards or forwards depending on the direction of the current. As the current alternates, the force reverses, so the coil oscillates back and forth at the frequency of the signal. The coil drags the cone with it, and the cone vibrates against the surrounding air, producing pressure waves that travel out as sound waves of the same frequency and amplitude as the original signal. Larger currents produce larger forces and so larger amplitudes, giving louder sounds; higher signal frequencies produce higher-pitched sounds. The loudspeaker thus directly converts an electrical signal into sound waves carrying the same information.'
    },
  ],

  /* ─────────────────────── 4.8 Space Physics ─────────────────────── */
  '4.8': [
    {
      q: 'Describe the life cycle of a star similar in mass to the Sun, from formation to its final remnant.',
      marks: 12, command: 'Describe',
      modelAnswer: 'A star similar in mass to the Sun forms when a cloud of dust and gas — a nebula — is pulled together by gravity. As the cloud contracts, particles speed up and the temperature and pressure at the centre rise. Once the core temperature is high enough, hydrogen nuclei begin to fuse into helium in nuclear fusion, releasing huge amounts of energy. Outward radiation pressure from fusion balances the inward gravitational force, and the star spends most of its life in this stable state, called the main sequence. When the hydrogen in the core runs out, fusion in the core stops, the core contracts and the outer layers expand and cool, turning the star into a red giant. In the giant phase, helium fuses to form heavier elements up to carbon and oxygen. Eventually the outer layers are blown off as a planetary nebula, and the dense core left behind becomes a white dwarf, which slowly cools and fades over billions of years to become a cold, dark black dwarf in the very distant future.'
    },
    {
      q: 'Explain what is meant by red shift and how it provides evidence for the expansion of the universe.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When light from a distant galaxy is analysed, the dark spectral lines from elements such as hydrogen are observed at longer wavelengths than they appear in laboratory measurements on Earth. This shift toward the red end of the spectrum is called red shift and indicates that the source is moving away from us. Light from more distant galaxies shows greater red shift, meaning they are moving away faster than nearer galaxies. This pattern is what would be expected if space itself were expanding uniformly in every direction, carrying galaxies apart. The proportional relationship between distance and recession speed (Hubble\'s law) provides strong evidence that the universe is expanding, and tracing this expansion backwards leads to the idea that all matter and energy were once concentrated in a tiny, dense state — the Big Bang.'
    },
    {
      q: 'Discuss the evidence for the Big Bang theory and assess how convincing this evidence is as a model for the origin of the universe.',
      marks: 12, command: 'Assess',
      modelAnswer: 'The Big Bang theory states that the universe began about 13.8 billion years ago from an extremely hot, dense state and has been expanding and cooling ever since. The first major piece of evidence is the red shift of distant galaxies: the further a galaxy is, the faster it appears to be moving away, which is consistent with a universe expanding uniformly from a common origin. The second is the cosmic microwave background radiation (CMB), a faint microwave signal coming from every direction in the sky. Predicted by the Big Bang theory and discovered in the 1960s, the CMB is the cooled-down remnant of high-energy radiation from a few hundred thousand years after the Big Bang, when the universe became transparent. The third piece of evidence is the relative abundances of light elements (hydrogen, helium and small amounts of lithium), which match what the Big Bang theory predicts for nuclear reactions in the early universe. Together these independent pieces of evidence make the Big Bang the most strongly supported theory of the origin of the universe. Some questions remain — for example, the nature of dark matter and dark energy, and what (if anything) caused the Big Bang — but no rival theory accounts for all the observations as successfully, so the Big Bang model is currently very convincing.'
    },
    {
      q: 'Compare the way orbiting satellites and the planets of the solar system are kept in their orbits, and explain why a satellite does not fall to Earth.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both satellites in orbit around the Earth and planets in orbit around the Sun are kept in their nearly circular paths by a gravitational force directed towards the centre of the larger body. For a satellite, the force is the Earth\'s gravity; for a planet, it is the Sun\'s gravity. In each case, the gravitational force acts as a centripetal force, continually changing the direction of the orbiting object\'s velocity without changing its speed, so the object follows a curved path. A satellite does not fall to Earth because it is moving sideways (tangentially) at exactly the right speed: as it falls towards Earth, the surface of the Earth curves away beneath it at the same rate, so the satellite continually misses the ground and circles the planet instead. If a satellite\'s orbit is at a higher altitude, the gravitational pull is weaker and the required orbital speed is lower; this is why low-orbit satellites move much faster than the Moon.'
    },
    {
      q: 'Evaluate the use of artificial satellites for communication and observation, considering both benefits and drawbacks.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Artificial satellites have many uses. Geostationary satellites, in orbit above the equator with a 24-hour period, are used for television, telephone and weather forecasting because they remain above the same point on Earth and can be tracked by a fixed dish. Lower orbit satellites are used for GPS navigation, mobile communications, Earth observation, weather monitoring and scientific research, including imaging the Earth\'s surface to track climate change and natural disasters. The benefits include rapid global communications, accurate weather forecasting that saves lives during storms, navigation systems used by hundreds of millions of people, and detailed monitoring of environmental change. There are drawbacks: satellites are expensive to launch and maintain, and the build-up of space debris in orbit risks damaging operational satellites. Concerns also exist about privacy and military use of imaging satellites. On balance, the benefits to communication, navigation, weather forecasting and Earth science clearly outweigh the costs and risks, but careful international management of space traffic and frequencies is increasingly important to keep the system safe and useful.'
    },
  ],

};

if (typeof module !== 'undefined' && module.exports) module.exports = PHYSICS_AQA_GCSE_AI_FEEDBACK;
