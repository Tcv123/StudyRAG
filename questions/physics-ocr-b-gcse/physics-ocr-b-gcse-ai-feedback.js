/*
 * OCR B GCSE Physics (J259 / Twenty First Century) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate. Each question carries a top-band model answer
 * the AI can use as a grading anchor.
 */

const PHYSICS_OCR_B_GCSE_AI_FEEDBACK = {

  /* ─────────────────────── P1 Radiation and Waves ─────────────────────── */
  'P1': [
    {
      q: 'Compare transverse and longitudinal waves, using examples to show how their oscillations relate to the direction of energy transfer.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a transverse wave, the oscillations of the medium are perpendicular to the direction in which the wave transfers energy. Examples include water waves, electromagnetic waves and S-waves in earthquakes. In a longitudinal wave, the oscillations are parallel to the direction of energy transfer, producing alternating regions of compression and rarefaction. Examples include sound waves in air and P-waves from earthquakes. Both types transfer energy without transferring matter, and both have wavelength, frequency, amplitude and speed defined in the same way. However, only transverse waves can be polarised, because polarisation requires an oscillation in a defined plane perpendicular to the direction of travel.'
    },
    {
      q: 'Describe the electromagnetic spectrum in order of increasing frequency, and explain why all electromagnetic waves travel at the same speed in a vacuum.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The electromagnetic spectrum, in order of increasing frequency (and decreasing wavelength), is: radio waves, microwaves, infrared, visible light (red to violet), ultraviolet, X-rays and gamma rays. All electromagnetic waves are transverse, consist of oscillating electric and magnetic fields perpendicular to one another, and can travel through a vacuum. They all travel at the same speed in a vacuum (3 × 10⁸ m/s) because the underlying laws of electromagnetism set a single fixed speed for these self-propagating fields, regardless of frequency or wavelength. In materials such as glass or water they travel more slowly, and the speed depends on the material and on frequency, which causes refraction.'
    },
    {
      q: 'Explain how waves can be reflected, refracted and absorbed when they reach a boundary between two materials.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a wave reaches the boundary between two materials, three things can happen. Reflection occurs when the wave bounces off the boundary back into the original medium; the angle of incidence equals the angle of reflection. Refraction occurs when the wave passes into the second material and changes speed, which usually causes a change in direction at the boundary unless it strikes perpendicularly; the wave bends towards the normal if it slows down and away from the normal if it speeds up. Absorption occurs when the wave\'s energy is transferred to the material, increasing its thermal store; the wave\'s amplitude decreases and the energy carried is reduced. In practice, all three processes can happen at the same boundary, with the proportions depending on the wave\'s wavelength and the materials involved.'
    },
    {
      q: 'Discuss the medical and communication uses of microwaves, ultraviolet radiation and X-rays, and assess the dangers each can pose.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Microwaves are used for cooking and for communications including mobile phones, satellite links and Wi-Fi; in microwave ovens, water molecules in the food absorb the radiation and gain kinetic energy. Dangers from communication-strength microwaves are small, but high-power microwaves can heat body tissues. Ultraviolet (UV) radiation is used in fluorescent lamps, security marking and disinfecting water and surfaces; UV is more energetic than visible light and can cause sunburn, skin cancer and eye damage. X-rays are used to produce medical images of bones, to treat cancer and to inspect luggage. They are ionising and can damage DNA, increasing the long-term risk of cancer; doses are kept as low as possible and staff stand behind lead shielding. Across all three, the benefits in healthcare, industry and communication are large, but they must be balanced against careful management of the health risks through dose limits, shielding and regulation.'
    },
    {
      q: 'Describe how absorbed dose and equivalent dose are used to assess the risk of harm from ionising radiation.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Absorbed dose is the amount of energy absorbed per unit mass of tissue, measured in grays (Gy). However, different types of radiation cause different amounts of biological damage for the same absorbed energy: alpha radiation, for instance, ionises tissue much more densely than gamma radiation. To account for this, equivalent dose is calculated by multiplying absorbed dose by a weighting factor that reflects the type of radiation\'s ability to cause damage; equivalent dose is measured in sieverts (Sv). Equivalent dose gives a much better measure of biological risk and is used to set safe exposure limits for radiation workers and to assess medical procedures. Background radiation contributes a few millisieverts per year, while specific tasks such as a chest X-ray or a flight at high altitude can be expressed as equivalent doses for comparison.'
    },
    {
      q: 'Explain how a converging lens forms a real image of an object beyond the focal length, with reference to the rays of light involved.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A converging lens is thicker in the middle than at the edges and refracts parallel rays so that they converge to the principal focus on the far side. To find the image of an object beyond the focal length, two construction rays from a point on the object are drawn: a ray parallel to the principal axis that is refracted to pass through the focal point on the other side of the lens, and a ray through the centre of the lens that passes straight through undeviated. The rays cross on the opposite side of the lens, locating a real image (one that rays actually meet at and that can be projected onto a screen). The image is inverted relative to the object, and may be smaller, the same size or larger depending on the object distance.'
    },
    {
      q: 'Discuss how a microphone and an oscilloscope can be used together to investigate the frequency and amplitude of a sound wave.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'A microphone converts the pressure variations of a sound wave into a varying electrical signal of the same frequency. When this signal is fed into an oscilloscope, the screen displays a graph of voltage against time, mirroring the pressure variations of the original wave. The amplitude of the wave on the screen represents the loudness of the sound: louder sounds give larger amplitudes. The horizontal distance between adjacent peaks gives the period of the wave, and the frequency can be calculated as the reciprocal of the period. By adjusting the time-base, frequencies of different sounds can be compared, allowing properties such as the pitch of musical notes to be measured.'
    },
    {
      q: 'Compare seismic P-waves and S-waves, and explain how their behaviour gives evidence about the structure of the Earth.',
      marks: 9, command: 'Compare',
      modelAnswer: 'P-waves are longitudinal seismic waves that can travel through both solids and liquids; they are faster than S-waves, with speeds of around 5–8 km/s in the crust. S-waves are transverse and can only travel through solids, because liquids cannot support shear motion; they are slower, at around 3–4 km/s. After an earthquake, seismometers around the world record both types. Beyond a certain angle from the epicentre, S-waves are not detected, creating an "S-wave shadow zone" on the opposite side of the planet; this is evidence that the outer core of the Earth is liquid. P-waves are detected almost everywhere, but their speeds and directions change at boundaries inside the Earth, indicating layers such as the crust, mantle, outer core and inner core. The combined behaviour of both waves therefore gives strong evidence for a layered Earth with a solid mantle, a liquid outer core and a solid inner core.'
    },
  ],

  /* ─────────────────────── P2 Sustainable Energy ─────────────────────── */
  'P2': [
    {
      q: 'Compare the environmental and economic advantages of using renewable energy resources with those of fossil fuels for generating electricity.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Renewables such as wind, solar, hydroelectric and tidal release no carbon dioxide during generation, whereas fossil fuels release CO₂ and other pollutants that drive climate change and acid rain. Renewables are essentially unlimited, while fossil fuels are finite and unevenly distributed, leading to economic and political pressures. Renewables typically have higher start-up costs but very low running costs once built; fossil-fuel stations are cheaper to build but have ongoing fuel costs. Wind and solar are intermittent and require backup or storage, whereas fossil-fuel stations provide reliable base-load power. On balance, renewables offer better long-term environmental and economic outcomes, but a transitional energy mix is currently necessary while storage and grid technologies catch up.'
    },
    {
      q: 'Evaluate the use of nuclear power as a major part of the UK\'s electricity supply.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Nuclear power has a very high energy density and produces almost no CO₂ during generation, making it valuable for reducing greenhouse-gas emissions. Output is reliable and not weather-dependent, and a single station can supply a large fraction of national demand, suiting it to base-load generation. However, nuclear stations have very high construction and decommissioning costs and produce highly radioactive waste that must be stored safely for thousands of years. There is a small but serious risk of major accidents (e.g. Chernobyl, Fukushima) with long-term environmental and health consequences, and uranium itself is a finite resource. Public concern about safety and waste also makes new sites politically difficult. Overall, nuclear provides a low-carbon, reliable energy source that complements renewables well, but its high cost and waste-management challenges mean it should form part of a diverse energy mix rather than a sole solution.'
    },
    {
      q: 'Discuss how thermal insulation in the walls and loft of a house reduces unwanted energy transfers and saves money.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Insulating materials such as fibreglass and foam have a low thermal conductivity, which reduces the rate at which thermal energy is transferred by conduction through the walls and roof. Cavity-wall insulation traps still air between the inner and outer leaves of the wall, and air is itself a poor conductor, further reducing conduction; loft insulation also reduces convection currents in the roof space. As less thermal energy escapes from the building, less electrical or gas energy is needed to heat it back to the same temperature, so household energy bills fall. Although there is an initial installation cost, the payback time is usually only a few years, after which the homeowner makes long-term savings while reducing the carbon emissions associated with heating.'
    },
    {
      q: 'Explain what is meant by the efficiency of an energy transfer device and why no real device can be 100% efficient.',
      marks: 6, command: 'Explain',
      modelAnswer: 'The efficiency of a device is the fraction (or percentage) of the input energy that is transferred to the useful output store, calculated as useful energy out divided by total energy in. In every real device, some of the input energy is dissipated to less useful stores — typically thermal energy of the surroundings due to friction, electrical resistance or air resistance — and some is transferred as sound. Because this dissipated energy is no longer available for the intended purpose, the useful output is always smaller than the input, so efficiency is always less than 100%, even though total energy is conserved.'
    },
    {
      q: 'Describe how the National Grid distributes electricity, and discuss why high voltages are used for long-distance transmission.',
      marks: 12, command: 'Describe',
      modelAnswer: 'The National Grid is the network of cables and transformers that carries electricity from power stations to consumers. Step-up transformers near the power station increase the voltage to typically 275 kV or 400 kV before the electricity is sent through transmission lines; step-down transformers near towns and homes reduce the voltage back to safe values. Transmitting at high voltage allows the same power to be delivered with a much smaller current, since power = voltage × current. A smaller current means much smaller energy losses to heat in the cables, because the heat dissipated is proportional to the square of the current (P = I²R). This makes long-distance transmission far more efficient and cheaper. The grid also pools electricity from many sources and routes it where demand is highest, increasing reliability. Without high-voltage transmission, the energy losses over typical UK distances would be unacceptably high.'
    },
    {
      q: 'Assess the importance of reducing wasted energy in everyday devices, using examples to support your answer.',
      marks: 12, command: 'Assess',
      modelAnswer: 'Reducing wasted energy increases the efficiency of devices, lowering energy demand for the same useful output. For example, modern LED bulbs convert around 85% of input electrical energy to light, while old filament bulbs converted only about 10%, with the rest wasted as heat; switching reduces electricity consumption dramatically. Better aerodynamics and lower-friction bearings in cars increase the fraction of fuel energy delivered to the wheels, reducing fuel use and CO₂ emissions per mile. At a national scale, more efficient devices reduce demand on the grid, allowing the same power stations to supply more homes. There are environmental benefits: less fossil fuel burned means lower greenhouse-gas emissions, and household savings come from lower bills. The main limit is cost — efficient devices may be more expensive to buy — but in most cases the long-term savings outweigh the initial investment, so reducing wasted energy is highly important both economically and environmentally.'
    },
    {
      q: 'Discuss the impact of human activity on the global climate, with reference to the enhanced greenhouse effect.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The Earth\'s atmosphere allows visible light from the Sun to pass through, where it is absorbed by the surface and re-emitted as longer-wavelength infrared radiation. Greenhouse gases such as carbon dioxide, methane and water vapour absorb this infrared and re-radiate some of it back to the surface, keeping the average global temperature warmer than it would otherwise be. This natural greenhouse effect is essential for life. Human activity — burning fossil fuels for electricity, transport and industry, and deforestation — has increased the concentration of greenhouse gases, especially CO₂, in the atmosphere. This enhanced greenhouse effect traps more infrared radiation, raising global average temperatures, which leads to melting ice caps, rising sea levels, more extreme weather and changes to ecosystems. Reducing emissions through energy efficiency, renewable energy and changes in land use is essential to limit further warming.'
    },
    {
      q: 'Evaluate the use of energy-efficient appliances in the home, considering both economic and environmental factors.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Energy-efficient appliances such as A-rated washing machines, fridges and LED lighting transfer a much larger fraction of their input electrical energy to useful output, with less wasted as heat. Economically, this means lower running costs over the lifetime of the appliance, often saving the consumer significantly more than the higher purchase price within a few years. Environmentally, reduced electricity use means less demand on the National Grid and lower CO₂ emissions from fossil-fuel power stations. Drawbacks include higher upfront costs, the energy and materials used in manufacture, and dependence on how the local electricity is generated. However, the long-term financial savings, reduced carbon footprint and decreased pressure on energy infrastructure mean that using energy-efficient appliances is an effective and worthwhile strategy for both individual households and society.'
    },
    {
      q: 'Discuss how energy resources are used in transport and assess the role of electric vehicles in reducing the carbon footprint of road travel.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Most road transport currently uses internal combustion engines, which burn petrol or diesel and convert chemical energy into kinetic energy with relatively low efficiency, releasing CO₂ and other pollutants. Electric vehicles store energy in batteries and use electric motors, which are typically much more efficient at converting input energy into motion and produce no exhaust emissions during driving. The carbon footprint of an electric vehicle, however, depends on how the electricity used to charge it is generated: if it comes mainly from fossil fuels, much of the benefit is lost, while electricity from renewables makes the saving large. Electric vehicles also reduce local air pollution in cities. Drawbacks include limited driving range, long charging times, the environmental cost of mining lithium and other metals for batteries, and the cost of charging infrastructure. As the grid decarbonises and battery technology improves, electric vehicles offer a strong route to lower-carbon road travel, especially for urban use.'
    },
  ],

  /* ─────────────────────── P3 Electric Circuits ─────────────────────── */
  'P3': [
    {
      q: 'Compare the behaviour of components connected in series with those connected in parallel.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a series circuit the same current flows through every component because there is only one path for the charge, and the supply potential difference is shared between components in proportion to their resistance. In a parallel circuit each branch has its own loop, so the potential difference across each branch equals the supply, but the current splits between branches according to each branch resistance. Adding components in series increases total resistance, while adding them in parallel decreases total resistance because there are more paths for current. Household circuits are wired in parallel so that each appliance has the full mains voltage and can be switched on independently; series wiring is used for components such as a fuse that must always carry the full circuit current.'
    },
    {
      q: 'Explain why mains electricity in UK homes is supplied as alternating current, and describe the function of the live, neutral and earth wires.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Mains electricity is supplied as alternating current at 230 V and 50 Hz because a.c. can be transformed up or down using transformers, which is essential for efficient transmission at high voltage and low current through the National Grid. The live wire carries the alternating potential difference and is dangerous because it is at a high potential relative to earth even when the appliance is switched off. The neutral wire completes the circuit and is at, or close to, earth potential. The earth wire is a safety wire connected to the metal casing of an appliance: if a fault causes the live wire to touch the casing, a large current flows through the earth wire to ground, blowing the fuse or tripping the breaker before anyone can be electrocuted.'
    },
    {
      q: 'Describe how the resistance of a thermistor and an LDR change with conditions, and explain one practical use of each.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The resistance of a thermistor decreases as its temperature increases, because more charge carriers become available to conduct in the semiconductor material. The resistance of an LDR decreases as the intensity of light falling on it increases, for the same reason — more charge carriers are released by the absorbed light. A thermistor is used in a temperature-sensing circuit, for example a thermostat in an oven or fridge, where the change in resistance is used to switch the heating or cooling on and off and maintain a set temperature. An LDR is used in automatic lighting circuits, such as street lamps that switch on at dusk: as natural light fades, the LDR resistance rises, which causes a control circuit to switch the lamp on.'
    },
    {
      q: 'Discuss how a fuse and an earth wire together protect the user of a metal-cased electrical appliance.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'The earth wire is connected to the metal casing of the appliance and provides a low-resistance path to earth. If a fault causes the live wire to touch the casing, a very large current flows through the earth wire rather than through anyone touching the appliance, because earth is a much lower-resistance route than a person. This large current quickly melts the fuse, breaking the circuit and isolating the appliance from the live supply, so the casing is no longer at a dangerous potential and the user is protected from electrocution.'
    },
    {
      q: 'Explain how static electricity is produced when two insulating materials are rubbed together, and describe one example of static electricity in everyday life.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When two insulating materials are rubbed together, friction transfers electrons from one material to the other. The material that gains electrons becomes negatively charged, and the material that loses electrons becomes positively charged. Because the materials are insulators, the charges cannot flow back easily and they remain separated. A common everyday example is rubbing a balloon on a jumper: the balloon gains electrons and becomes negative, then sticks to a wall by attracting opposite charges in the wall by induction. Static electricity also explains why hair stands on end after taking off a jumper, and why touching a metal door handle after walking on a carpet can produce a small shock as the built-up charge discharges through the body.'
    },
    {
      q: 'Discuss the dangers and uses of static electricity, including how it can both cause harm and be put to practical use.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Static electricity can be dangerous because the build-up of charge on people or objects can cause a sudden discharge, often as a spark, that can ignite flammable vapours or damage sensitive electronic components. Refuelling vehicles, especially aircraft and tankers, must therefore be earthed to prevent sparks near fuel vapours, and electronics technicians wear earthing wrist straps. However, static electricity also has many useful applications. In photocopiers and laser printers, a charged drum attracts oppositely charged toner particles, allowing precise images to be transferred to paper. In electrostatic precipitators, dust particles are charged and attracted to oppositely charged plates, removing pollution from chimney exhausts in power stations. Inkjet printers and paint sprayers also rely on electrostatic forces to control the flow and direction of charged droplets. The same physics underlies both the hazards and the benefits.'
    },
    {
      q: 'Explain the motor effect, describe how it is used in a loudspeaker, and discuss how a transformer uses electromagnetic induction.',
      marks: 12, command: 'Explain',
      modelAnswer: 'The motor effect is the force exerted on a current-carrying wire placed in a magnetic field. The size of the force is given by F = BIl and is largest when current and field are perpendicular; the direction is given by Fleming\'s left-hand rule. In a loudspeaker, a coil attached to a paper cone sits in the field of a permanent magnet and carries an alternating audio current. The motor effect produces a force that pushes the coil and cone backwards and forwards in time with the signal, creating sound waves of the same frequency. A transformer uses a different but related effect: an alternating current in a primary coil produces a changing magnetic field in a shared iron core, which induces an alternating potential difference in a secondary coil. The ratio of secondary p.d. to primary p.d. equals the ratio of secondary turns to primary turns, allowing the voltage to be stepped up or down. Transformers are essential for the efficient transmission of electricity at high voltage through the National Grid.'
    },
    {
      q: 'Evaluate the role of energy-efficient electrical appliances in the home, considering economic, environmental and practical factors.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'Energy-efficient appliances such as A-rated washing machines, fridges and LED lighting transfer more of their input electrical energy to useful output, with less wasted as heat. Economically, this lowers running costs over the lifetime of the appliance, often saving more than the higher purchase price within a few years. Environmentally, reduced electricity use means less demand on the National Grid and lower CO₂ emissions from fossil-fuel power stations. Practically, modern efficient appliances often have additional features such as more accurate temperature control or longer lifespan that benefit the user. There are some drawbacks: efficient appliances often cost more upfront, manufacturing them still uses energy and materials, and the environmental gains depend on how the local electricity is generated. However, the long-term financial savings, reduced carbon footprint and decreased pressure on energy infrastructure mean energy-efficient appliances are highly worthwhile for individual households and society.'
    },
  ],

  /* ─────────────────────── P4 Explaining Motion ─────────────────────── */
  'P4': [
    {
      q: 'Describe Newton\'s three laws of motion and explain how each applies to the motion of a car.',
      marks: 12, command: 'Describe',
      modelAnswer: 'Newton\'s first law states that an object continues at rest or at constant velocity unless acted on by a resultant force. A car parked on level ground stays still because there is no resultant force; once moving at constant velocity along a straight road, the driving force balances friction and air resistance, so the resultant force is zero. Newton\'s second law states that the resultant force on an object equals its mass multiplied by its acceleration (F = ma). When the driver presses the accelerator, the driving force exceeds friction; this gives a resultant forward force and the car accelerates. A more massive car requires a larger force for the same acceleration. Newton\'s third law states that for every action force there is an equal and opposite reaction force on a different object. As the car accelerates, the wheels push backwards on the road, and the road exerts an equal forward force on the wheels, propelling the car forward.'
    },
    {
      q: 'Compare scalar and vector quantities, using examples from forces and motion.',
      marks: 6, command: 'Compare',
      modelAnswer: 'A scalar quantity has only magnitude (size), while a vector quantity has both magnitude and direction. Examples of scalars include mass, time, energy, temperature, distance and speed. Examples of vectors include force, weight, velocity, acceleration, displacement and momentum. For example, two cars travelling at 30 m/s have the same speed (a scalar), but if one moves north and the other south, they have different velocities; a 50 N force pushing left has a different effect from a 50 N force pushing right, because force is a vector.'
    },
    {
      q: 'Explain the factors that affect the stopping distance of a car and how each factor influences thinking distance and braking distance.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The total stopping distance is the sum of thinking distance (distance travelled during the driver\'s reaction time) and braking distance (distance travelled while the brakes decelerate the car to rest). Thinking distance is increased by anything that lengthens reaction time, such as tiredness, alcohol, drugs or distractions like using a phone, and is also longer at higher speeds because the car covers more ground in the same reaction time. Braking distance depends on speed and the braking force available; greater speed gives the car much more kinetic energy, which the brakes must remove, so braking distance increases roughly with the square of the speed. Wet, icy or oily roads reduce friction between tyres and road, increasing braking distance, and worn tyres or worn brakes reduce braking force and have the same effect.'
    },
    {
      q: 'Discuss how vehicle safety features such as crumple zones, airbags and seatbelts reduce the force on a passenger in a crash.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'In a crash, a passenger\'s momentum must be reduced to zero, and the average force on them equals the change in momentum divided by the time over which it occurs. Crumple zones at the front and rear of a car deform progressively, increasing the time taken for the car to stop and reducing the force on occupants. Seatbelts stretch slightly during a sudden stop, again increasing the time over which the passenger decelerates and preventing them from being thrown into the windscreen. Airbags inflate rapidly between the passenger and the dashboard or steering wheel, providing a soft cushion that further extends the time of impact and spreads the force over a larger area of the body. Together, these features reduce the peak force on occupants and lower the risk of serious injury.'
    },
    {
      q: 'Explain the difference between elastic and inelastic deformation, and describe how Hooke\'s law applies to a spring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'When a force is applied to an object, it may stretch or compress. Elastic deformation occurs when the object returns to its original shape and size once the force is removed; inelastic deformation occurs when it does not return fully and remains permanently changed. Springs and rubber bands deform elastically up to a certain limit; beyond their elastic limit they deform inelastically. Hooke\'s law states that the extension of a spring is directly proportional to the force applied, provided the elastic limit is not exceeded: force = spring constant × extension. On a force–extension graph this gives a straight line through the origin in the elastic region, with the gradient equal to the spring constant. Beyond the elastic limit, the line curves and the spring no longer obeys Hooke\'s law.'
    },
    {
      q: 'Evaluate how the design of a parachute helps a skydiver to land safely, in terms of the forces acting and terminal velocity.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'When a skydiver first jumps, weight is the only significant force, and they accelerate downwards. As speed increases, air resistance grows until air resistance equals weight; the resultant force is zero and the skydiver falls at a constant terminal velocity, typically 50–60 m/s. Opening the parachute dramatically increases the surface area exposed to the air, greatly increasing air resistance at any given speed. Air resistance now exceeds weight, so the skydiver decelerates rapidly. As speed falls, air resistance decreases until once again it balances weight, giving a new, much lower terminal velocity (around 5 m/s) that allows a safe landing. The parachute is designed to be large enough to give a low terminal velocity but not so large that it tears or makes the skydiver hard to control. Overall, the parachute exploits the dependence of air resistance on surface area to convert what would otherwise be a fatal landing into a survivable one.'
    },
    {
      q: 'Discuss how the principle of conservation of momentum applies to two ice skaters who push off from each other on a smooth surface.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The principle of conservation of momentum states that, in the absence of external forces, the total momentum of a closed system is constant. Two ice skaters who initially stand still on a frictionless ice surface have a combined momentum of zero. When they push off from each other, they exert equal and opposite forces on each other (Newton\'s third law). For the system to keep zero total momentum, they must move apart in opposite directions with equal but opposite momenta. This means that if one skater is twice as massive as the other, the smaller skater moves twice as fast as the larger one. Friction is small on ice, so the skaters slide off with approximately constant velocities. The same principle explains why a gun recoils when fired and why a rocket can accelerate by expelling exhaust gases.'
    },
    {
      q: 'Describe what is meant by work done, and explain the relationship between work, energy and power.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Work is done whenever a force moves its point of application along the line of action of the force; it is calculated as work = force × distance moved in the direction of the force, in joules. Doing work transfers energy from one store to another: lifting a book transfers energy from the chemical store of the lifter\'s muscles to the gravitational potential store of the book. Energy is the capacity to do work, also measured in joules, and power is the rate at which work is done or energy is transferred, in watts (W = J/s). For a constant force, power = work done ÷ time taken, so a more powerful machine does the same work in less time. The conservation of energy ensures that the work input to a system equals the useful work output plus the energy dissipated to the surroundings.'
    },
    {
      q: 'Discuss the difference between mass and weight, and explain how each varies on the Moon compared with on Earth.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'Mass is a scalar measure of the amount of matter in an object, measured in kilograms; it does not change when the object moves around the universe. Weight is a vector force caused by gravity acting on the mass, measured in newtons, given by W = m × g, where g is the gravitational field strength. On Earth, g is approximately 9.8 N/kg; on the Moon it is about 1.6 N/kg. An astronaut who has a mass of 60 kg on Earth still has a mass of 60 kg on the Moon, but their weight on Earth is about 588 N, while on the Moon it is only about 96 N.'
    },
  ],

  /* ─────────────────────── P5 Radioactive Materials ─────────────────────── */
  'P5': [
    {
      q: 'Compare the properties of alpha, beta and gamma radiation in terms of their nature, ionising power, penetrating ability and range in air.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Alpha radiation consists of helium nuclei (two protons and two neutrons) and is highly ionising but very weakly penetrating: it is stopped by a few centimetres of air or a sheet of paper. Beta radiation is a fast-moving electron emitted from the nucleus when a neutron decays into a proton; it is moderately ionising, more penetrating than alpha, and is stopped by a few millimetres of aluminium and travels around a metre in air. Gamma radiation is high-frequency electromagnetic radiation, the least ionising of the three but the most penetrating, with significant intensity passing through several centimetres of lead and travelling many metres in air. The differences arise from differences in mass, charge and energy: heavier, more highly charged alpha particles interact strongly with matter and quickly lose energy, while uncharged photons of gamma radiation pass through easily but ionise less.'
    },
    {
      q: 'Describe how the alpha-scattering experiment led scientists to replace the plum-pudding model with the nuclear model of the atom.',
      marks: 12, command: 'Describe',
      modelAnswer: 'In the plum-pudding model, the atom was thought to be a positive sphere with negative electrons embedded in it. In the alpha-scattering experiment, Rutherford fired alpha particles at a thin gold foil and detected where they ended up. Most alpha particles passed straight through the foil with little or no deflection, showing that atoms are mostly empty space. A small number were deflected through large angles, and a very small fraction bounced back almost in the direction they came from, which could not be explained by a uniform diffuse positive charge. Rutherford concluded that the positive charge of an atom must be concentrated in a tiny, dense region — the nucleus — that contained almost all the mass of the atom. The electrons must orbit this nucleus at relatively large distances, leaving most of the atom as empty space. This evidence forced scientists to replace the plum-pudding model with the nuclear model.'
    },
    {
      q: 'Explain what is meant by the half-life of a radioactive isotope and why this affects how the isotope can be used in medicine and industry.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The half-life is the average time taken for half of the unstable nuclei in a sample to decay, or equivalently for the activity to fall to half its original value. Different isotopes have very different half-lives, ranging from fractions of a second to billions of years. Isotopes with short half-lives quickly become much less active and are useful as medical tracers, where the patient should be exposed to ionising radiation for as little time as possible while still allowing detection. Isotopes with longer half-lives are useful for industrial measurements, such as monitoring the thickness of paper or steel, where a steady, predictable activity is needed over months or years. In radioactive waste management, long half-lives mean the waste must be stored safely for thousands of years, while short-lived waste decays to safe levels much sooner.'
    },
    {
      q: 'Discuss the medical uses of radioactivity, considering both the benefits and the risks to patients and staff.',
      marks: 12, command: 'Discuss',
      modelAnswer: 'Radioactivity has several important medical uses. Gamma rays from sources such as cobalt-60 are used in radiotherapy to kill cancer cells, with multiple beams targeted to overlap at the tumour so that surrounding healthy tissue receives a smaller dose. Radioactive tracers, often beta or gamma emitters with short half-lives, are introduced into the body and tracked using detectors to image organ function or detect blockages. Gamma sources are also used to sterilise medical equipment by killing bacteria. The benefits include diagnosis without invasive surgery, effective treatment of cancers that would be difficult to remove, and reliable sterilisation. However, ionising radiation can damage healthy DNA, increasing the long-term risk of cancer for patients and staff. Risks are managed by using the lowest effective dose, choosing isotopes with short half-lives, shielding staff with lead, and limiting exposure time. On balance, the medical benefits typically outweigh the risks when proper procedures are followed.'
    },
    {
      q: 'Explain how nuclear fission releases energy and discuss how a chain reaction is controlled in a nuclear reactor.',
      marks: 12, command: 'Explain',
      modelAnswer: 'Nuclear fission occurs when a large unstable nucleus, such as uranium-235, absorbs a neutron and splits into two smaller daughter nuclei, releasing two or three more neutrons and a large amount of energy. The energy comes from a small amount of mass being converted to energy according to the binding-energy difference between parent and daughter nuclei. The neutrons released can go on to cause further fissions, producing a chain reaction. In a reactor, control rods made of materials such as boron or cadmium are inserted between the fuel rods to absorb excess neutrons; pushing the rods further in slows the reaction, while withdrawing them speeds it up. A moderator (usually water or graphite) slows neutrons to the speeds at which uranium-235 absorbs them most effectively, sustaining the reaction at a steady rate. A coolant carries thermal energy away from the core to a heat exchanger, where it produces steam to drive turbines.'
    },
    {
      q: 'Compare the processes of nuclear fission and nuclear fusion, including how each releases energy and the challenges of using fusion as a power source.',
      marks: 12, command: 'Compare',
      modelAnswer: 'In nuclear fission, a large unstable nucleus splits into two smaller nuclei, releasing energy, neutrons and gamma radiation. In nuclear fusion, two small light nuclei (typically isotopes of hydrogen) join together to form a heavier nucleus, releasing even more energy per kilogram of fuel. Both processes release energy because the resulting nuclei have a higher binding energy per nucleon, meaning a small amount of mass is converted into energy. Fission is currently used in commercial nuclear power stations and produces highly radioactive waste, but is reliable. Fusion releases more energy and uses fuel that is abundant (deuterium from sea water) and produces almost no long-lived radioactive waste, making it potentially much cleaner. However, fusion requires extremely high temperatures and pressures to overcome the electrostatic repulsion between nuclei, which is very difficult to achieve and sustain. No commercial fusion power station currently exists, although experimental reactors such as ITER are making progress.'
    },
    {
      q: 'Discuss the difference between contamination and irradiation, and explain why contamination is generally more dangerous.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Irradiation is exposure to radiation from an external radioactive source — for example, standing near an unshielded gamma source. The object or person does not become radioactive itself, and the danger ends when the source is removed or shielded. Contamination is when radioactive material gets onto the skin or clothing, or is taken into the body by inhaling, swallowing or through a wound. Once inside, the material continues to emit radiation, and even weakly penetrating alpha or beta sources can cause intense local ionisation of cells and DNA, which can lead to cancer. Removal is difficult and may require medical treatment, and exposure continues until the material is removed or has decayed. Both pose risks, but contamination is generally more dangerous because exposure is prolonged and internal, whereas irradiation can be ended by moving away.'
    },
    {
      q: 'Describe the life cycle of a star similar in mass to the Sun, from formation to its final remnant.',
      marks: 12, command: 'Describe',
      modelAnswer: 'A star like the Sun forms when gravitational attraction pulls together a cloud of dust and gas (a nebula). As the cloud contracts, the temperature and pressure at the centre rise until hydrogen nuclei begin to fuse into helium, releasing huge amounts of energy. Outward radiation pressure from fusion balances inward gravity, and the star spends most of its life in this stable state, called the main sequence. When the hydrogen in the core runs out, the core contracts and the outer layers expand and cool, forming a red giant. In the giant phase, helium fuses to form heavier elements up to carbon and oxygen. Eventually the outer layers are blown off as a planetary nebula, leaving behind a hot, dense core called a white dwarf. The white dwarf cools and fades over billions of years to become a cold, dark black dwarf in the very distant future.'
    },
  ],

  /* ─────────────────────── P6 Matter — Models and Explanations ─────────────────────── */
  'P6': [
    {
      q: 'Compare the arrangement, movement and energy of particles in solids, liquids and gases.',
      marks: 9, command: 'Compare',
      modelAnswer: 'In a solid, particles are arranged in a regular fixed lattice, are very close together and only vibrate about fixed positions; they have the lowest kinetic energy of the three states. In a liquid, particles are still close together but no longer in a fixed lattice; they can move past each other randomly, giving the liquid its ability to flow and take the shape of its container. In a gas, particles are far apart with no fixed arrangement, move rapidly and randomly in all directions, and have the highest kinetic energy. The forces of attraction between particles are strong in solids, weaker in liquids and almost negligible in gases, which explains why solids have a fixed shape and volume, liquids have a fixed volume but variable shape, and gases fill any container completely.'
    },
    {
      q: 'Explain, in terms of particles, what happens to the internal energy of a substance during a change of state, and why temperature stays constant.',
      marks: 9, command: 'Explain',
      modelAnswer: 'During a change of state, energy is supplied to or removed from the substance, but the temperature stays constant because the energy is not being used to change the average kinetic energy of the particles. Instead it is being used to overcome (during melting or boiling) or form (during freezing or condensing) the bonds and forces of attraction between particles. For example, when ice melts, the energy supplied increases the potential energy store of the particles by breaking the rigid lattice arrangement, allowing them to move past each other as a liquid; the kinetic energy, and so the temperature, remains the same until all the ice has melted. Total internal energy still increases or decreases, even though the temperature does not change.'
    },
    {
      q: 'Describe what is meant by Brownian motion and explain how it provides evidence for the particle model of matter.',
      marks: 6, command: 'Describe',
      modelAnswer: 'Brownian motion is the random, jittery movement of small visible particles, such as smoke specks suspended in air, when observed through a microscope. The particles move in unpredictable directions and continually change speed and direction. This motion is caused by the much smaller, invisible air particles colliding with the visible particles from random angles, transferring momentum to them. Because Brownian motion can only be explained by collisions with even smaller fast-moving particles, it provides direct evidence that matter is made of tiny particles in continuous motion, consistent with the particle (kinetic) model.'
    },
    {
      q: 'Explain how the pressure of a gas in a sealed container arises and how it changes when the gas is heated at constant volume.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Gas pressure arises because the rapidly moving gas particles continually collide with the walls of the container. Each collision exerts a small force on the wall as the particle changes direction, and the total force per unit area, averaged over time, is the pressure. When the gas is heated at constant volume, the kinetic energy of each particle increases, so on average particles move faster. They strike the walls more frequently and with greater momentum, so each collision exerts a larger force and there are more collisions per second. The total force on the walls therefore increases, and since the area of the walls is unchanged, the pressure rises with temperature.'
    },
    {
      q: 'Discuss the meaning of specific latent heat and how it differs between melting and boiling for a substance such as water.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Specific latent heat is the energy required to change the state of one kilogram of a substance without any change in temperature. Specific latent heat of fusion refers to melting (or freezing), and specific latent heat of vaporisation refers to boiling (or condensing). For water, the specific latent heat of vaporisation (about 2.26 MJ/kg) is much greater than the specific latent heat of fusion (about 334 kJ/kg). This is because boiling requires breaking essentially all the intermolecular forces between water molecules so they can move freely as a gas, whereas melting only requires breaking the rigid lattice arrangement of solid ice. The energy supplied during a change of state increases the potential energy store of the particles rather than their kinetic energy, which is why temperature stays constant during the change.'
    },
    {
      q: 'Describe the structure of an atom and discuss how the relative sizes, masses and charges of its constituent particles compare.',
      marks: 9, command: 'Describe',
      modelAnswer: 'An atom consists of a small, dense, positively charged nucleus made of protons and neutrons, surrounded by negatively charged electrons in shells around the nucleus. The radius of an atom is approximately 10⁻¹⁰ m, while the radius of the nucleus is around 10⁻¹⁵ m, so the nucleus is about 10 000 times smaller than the atom and almost all of the atom is empty space. Protons have a charge of +1 and a relative mass of 1; neutrons have no charge and a relative mass of 1; electrons have a charge of −1 and a relative mass of approximately 1/1836, which is negligible. Almost all of the mass of the atom is in the nucleus, while almost all of the volume is occupied by the electron cloud. In a neutral atom the number of protons equals the number of electrons.'
    },
    {
      q: 'Discuss how the development of scientific models such as the atomic model shows how scientific ideas can change over time.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Scientific models develop and change as new evidence becomes available. Early Greek philosophers proposed the idea of indivisible "atomos", but with no experimental basis. In the early 1800s, Dalton proposed atoms as solid, indivisible spheres of definite mass for each element. After the discovery of the electron, Thomson proposed the plum-pudding model, with electrons embedded in a positive cloud. Rutherford\'s alpha-scattering experiment in 1909 produced evidence that this model was wrong, showing instead that atoms have a tiny, dense, positively charged nucleus surrounded by orbiting electrons. Bohr later refined this by showing that electrons occupy specific energy levels, supported by spectroscopic evidence. Quantum mechanics gives a more sophisticated picture in which electrons exist in probability clouds. The history of the atomic model illustrates how scientific ideas are tentative: theories are accepted because they explain the available evidence, and replaced or refined when new experiments provide observations that they cannot explain.'
    },
    {
      q: 'Evaluate the use of materials with high specific heat capacity, such as water, in domestic central heating systems.',
      marks: 12, command: 'Evaluate',
      modelAnswer: 'A material with a high specific heat capacity stores a large amount of thermal energy for a relatively small rise in temperature, and releases it slowly as it cools. Water has one of the highest specific heat capacities of any common substance (about 4200 J/kg°C), making it well suited to carrying thermal energy from a boiler around a house through radiators. As the hot water flows through radiators, it transfers a large amount of energy to the room while only cooling slightly, providing steady, even heating. Water is also cheap, non-toxic and easy to pump. There are some drawbacks: water can corrode metal pipes, may freeze in cold weather and can leak, and a large volume must be heated initially before the system warms up, which uses significant energy. However, on balance, the high heat capacity, low cost and safety make water an effective choice; alternative fluids would be more expensive or hazardous, so water remains the standard heat-transfer fluid in central heating despite these limitations.'
    },
  ],

};

if (typeof module !== 'undefined' && module.exports) module.exports = PHYSICS_OCR_B_GCSE_AI_FEEDBACK;
