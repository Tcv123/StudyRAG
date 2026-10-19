/*
 * OCR A GCSE Chemistry (J248) — Written / Short-Answer Diagnostic Bank
 * 10 per topic: 4 green + 4 amber + 2 red — for the single written
 * question randomly slotted into each per-topic diagnostic.
 * Student self-marks: Full / Partial / Missed against the model answer.
 */

const CHEMISTRY_OCR_A_GCSE_WRITTEN = {

  'C1': {
    green: [
      { q: 'Describe the arrangement and movement of the particles in a solid and in a gas.', marks: 2, tier: 'green',
        modelAnswer: `Solid: particles closely packed in a regular arrangement, vibrating about fixed positions (1).\nGas: particles far apart, randomly arranged, moving quickly in all directions (1).` },
      { q: 'State two differences between a physical change and a chemical change.', marks: 2, tier: 'green',
        modelAnswer: `In a chemical change a new substance is formed; in a physical change no new substance is formed (1).\nPhysical changes (e.g. changes of state, dissolving) are usually easily reversed; chemical changes are usually hard to reverse (1).` },
      { q: 'State the relative charge and the approximate relative mass of a proton, a neutron and an electron.', marks: 2, tier: 'green',
        modelAnswer: `Proton: charge +1, mass 1; neutron: charge 0, mass 1 (1).\nElectron: charge −1, mass very small (about 1/2000) (1).` },
      { q: 'Describe the structure of an atom.', marks: 2, tier: 'green',
        modelAnswer: `A small, positively charged nucleus containing protons and neutrons, which holds almost all of the mass (1).\nSurrounded by negatively charged electrons in shells; the nucleus is tiny compared with the atom (radius of atom about 10⁻¹⁰ m) (1).` },
    ],
    amber: [
      { q: 'Explain, using the particle model, what happens when a solid is heated until it melts, and why the temperature stays constant while it melts.', marks: 4, tier: 'amber',
        modelAnswer: `• As the solid is heated, the particles gain energy and vibrate more (1).\n• At the melting point the particles have enough energy to overcome some of the forces between them (1).\n• The particles can then move past each other, so the solid becomes a liquid (1).\n• During melting, the energy supplied is used to overcome the forces between particles rather than to raise the temperature, so the temperature stays constant (1).` },
      { q: 'Describe Geiger and Marsden’s alpha-scattering experiment and explain how the results led to the nuclear model of the atom.', marks: 4, tier: 'amber',
        modelAnswer: `• Alpha particles (positive) were fired at a very thin sheet of gold foil (1).\n• Most passed straight through, so most of the atom is empty space (1).\n• A few were deflected, and a very small number bounced back (1).\n• So the positive charge and most of the mass must be concentrated in a tiny nucleus — this replaced the plum pudding model (1).` },
      { q: 'An ion of aluminium is written ²⁷Al³⁺ (atomic number 13). Calculate the number of protons, neutrons and electrons in the ion, showing your reasoning.', marks: 4, tier: 'amber',
        modelAnswer: `• Protons = atomic number = 13 (1).\n• Neutrons = mass number − atomic number = 27 − 13 = 14 (1).\n• A neutral atom has 13 electrons (1).\n• The 3+ charge means three electrons have been lost, so the ion has 10 electrons (1).` },
      { q: 'Explain what isotopes are, using chlorine-35 and chlorine-37 (atomic number 17) as an example.', marks: 4, tier: 'amber',
        modelAnswer: `• Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons (1).\n• Both have 17 protons (and 17 electrons) (1).\n• Chlorine-35 has 18 neutrons and chlorine-37 has 20 neutrons (1).\n• They have the same electron arrangement, so they have the same chemical reactions (1).` },
    ],
    red: [
      { q: 'Describe how the model of the atom has changed over time, from Dalton to Bohr, and explain why each change was made.', marks: 6, tier: 'red',
        modelAnswer: `• Dalton: atoms were tiny solid spheres that could not be divided (1).\n• Thomson discovered the electron, so atoms must contain smaller particles — the plum pudding model: a ball of positive charge with electrons embedded in it (1).\n• Geiger and Marsden fired alpha particles at gold foil; most passed straight through but a few bounced back (1).\n• Rutherford explained this with the nuclear model: a tiny, dense, positive nucleus with mostly empty space around it (1).\n• Bohr suggested that electrons orbit the nucleus in fixed shells (energy levels), which matched experimental observations (1).\n• Each model was changed because new experimental evidence could not be explained by the old model (1).` },
      { q: 'Explain the limitations of the particle model when particles are represented as small, solid, inelastic spheres. Use changes of state as examples.', marks: 6, tier: 'red',
        modelAnswer: `• The model does not show the forces of attraction between particles (1).\n• So it cannot explain why different substances melt and boil at different temperatures — that depends on the strength of these forces (1).\n• It does not show the true size of particles or the space between them; in diagrams gas particles are drawn far too close together (1).\n• Real particles are not solid spheres — they are atoms, ions or molecules made of smaller particles, and molecules have different shapes (1).\n• It does not show the energy of the particles, so it cannot explain why temperature stays constant during a change of state (1).\n• Particles are not perfectly hard or inelastic; the model is a simplification that is useful for describing arrangement and movement only (1).` },
    ],
  },

  'C2': {
    green: [
      { q: 'Explain the difference between the scientific and the everyday meaning of the word ‘pure’.', marks: 2, tier: 'green',
        modelAnswer: `Scientifically, a pure substance is a single element or compound, not mixed with any other substance (1).\nIn everyday use, ‘pure’ means natural or with nothing added, e.g. ‘pure orange juice’, which is actually a mixture (1).` },
      { q: 'State what is meant by the mobile phase and the stationary phase in paper chromatography.', marks: 2, tier: 'green',
        modelAnswer: `Mobile phase: the solvent, which moves through the paper carrying the substances (1).\nStationary phase: the paper, which does not move (1).` },
      { q: 'Describe the difference between ionic bonding and covalent bonding.', marks: 2, tier: 'green',
        modelAnswer: `Ionic bonding: electrons are transferred from a metal to a non-metal, forming oppositely charged ions held by electrostatic attraction (1).\nCovalent bonding: a pair of electrons is shared between two non-metal atoms (1).` },
      { q: 'Explain why graphite conducts electricity but diamond does not.', marks: 2, tier: 'green',
        modelAnswer: `In graphite each carbon atom forms three covalent bonds, leaving one delocalised electron per atom that can move and carry charge (1).\nIn diamond each carbon atom forms four covalent bonds, so there are no free electrons (1).` },
    ],
    amber: [
      { q: 'Describe how to separate a mixture of salt and sand to obtain dry salt crystals.', marks: 4, tier: 'amber',
        modelAnswer: `• Add water to the mixture and stir to dissolve the salt (1).\n• Filter: the sand stays in the filter paper and the salt solution passes through as the filtrate (1).\n• Heat the filtrate to evaporate some of the water, then leave it to cool so crystals form (1).\n• Filter off the crystals and dry them, e.g. between filter papers or in a warm oven (1).` },
      { q: 'A dye spot moves 4.2 cm and the solvent front moves 8.4 cm. Calculate the Rf value and explain how Rf values can be used to identify the dye.', marks: 4, tier: 'amber',
        modelAnswer: `• Rf = distance moved by spot ÷ distance moved by solvent (1).\n• Rf = 4.2 ÷ 8.4 = 0.50 (1).\n• Compare with Rf values of known substances run with the same solvent and paper (1).\n• A match in Rf value (in more than one solvent) suggests the dye is the same substance (1).` },
      { q: 'Draw a dot and cross diagram for sodium chloride, and describe what happens to the electrons when it forms.', marks: 4, tier: 'amber',
        modelAnswer: `• Sodium (2.8.1) loses its one outer electron (1).\n• Chlorine (2.8.7) gains this electron (1).\n• This forms Na⁺ (2.8) and Cl⁻ (2.8.8), both with full outer shells, shown in square brackets with their charges (1).\n• The oppositely charged ions are held together by strong electrostatic forces (ionic bonds) (1).` },
      { q: 'Explain why sodium chloride has a high melting point but methane has a low melting point.', marks: 4, tier: 'amber',
        modelAnswer: `• Sodium chloride has a giant ionic lattice (1).\n• Melting it means overcoming many strong electrostatic forces between oppositely charged ions, which needs a lot of energy (1).\n• Methane is made of small simple molecules (1).\n• Only the weak intermolecular forces between molecules are overcome on melting (the covalent bonds do not break), so little energy is needed (1).` },
    ],
    red: [
      { q: 'Compare the structures and properties of diamond, graphite and graphene, and relate each to a use.', marks: 6, tier: 'red',
        modelAnswer: `• Diamond: each carbon atom covalently bonded to four others in a giant 3D lattice (1).\n• So it is very hard with a very high melting point and does not conduct — used in cutting tools (1).\n• Graphite: each carbon bonded to three others in layers, with weak forces between layers (1).\n• The layers slide (soft, slippery) and delocalised electrons let it conduct — used in electrodes and as a lubricant (1).\n• Graphene: a single layer of graphite, one atom thick (1).\n• Very strong, light and conducts electricity — used in electronics and composites (1).` },
      { q: 'Describe the properties of nanoparticles and explain how their surface area to volume ratio relates to their uses and possible risks.', marks: 6, tier: 'red',
        modelAnswer: `• Nanoparticles are 1–100 nm across, only a few hundred atoms (1).\n• As particle size decreases, the surface area to volume ratio increases; e.g. a 10 nm cube has SA:V of 0.6 per nm, ten times that of a 100 nm cube (1).\n• A larger proportion of atoms are on the surface, so they can be more reactive or better catalysts (1).\n• Uses: silver nanoparticles as antibacterials in dressings; titanium dioxide nanoparticles in sun creams; catalysts (1).\n• Risks: they may be breathed in or absorbed through the skin and enter cells (1).\n• Their long-term effects on health and the environment are not yet fully known, so more research is needed (1).` },
    ],
  },

  'C3': {
    green: [
      { q: 'State the law of conservation of mass.', marks: 2, tier: 'green',
        modelAnswer: `No atoms are created or destroyed in a chemical reaction (1).\nSo the total mass of the products equals the total mass of the reactants (1).` },
      { q: 'Explain the difference between an exothermic and an endothermic reaction, in terms of the temperature of the surroundings.', marks: 2, tier: 'green',
        modelAnswer: `Exothermic: energy is transferred to the surroundings, so the temperature of the surroundings increases (1).\nEndothermic: energy is taken in from the surroundings, so the temperature of the surroundings decreases (1).` },
      { q: 'Write the word equation for the reaction of magnesium with hydrochloric acid, and name the gas formed.', marks: 2, tier: 'green',
        modelAnswer: `magnesium + hydrochloric acid → magnesium chloride + hydrogen (1).\nThe gas is hydrogen (1).` },
      { q: 'State what is formed at the cathode and at the anode when molten lead bromide is electrolysed.', marks: 2, tier: 'green',
        modelAnswer: `Cathode (negative electrode): lead (1).\nAnode (positive electrode): bromine (1).` },
    ],
    amber: [
      { q: 'Draw and label a reaction profile for an exothermic reaction.', marks: 4, tier: 'amber',
        modelAnswer: `• Axes: energy (y) against progress of reaction (x), with reactants and products labelled (1).\n• Products drawn lower in energy than reactants (1).\n• A curve rising to a peak between them; activation energy labelled from the reactants to the peak (1).\n• Overall energy change labelled as the drop from reactants to products (1).` },
      { q: 'Describe how to make a pure, dry sample of copper sulfate from copper oxide and dilute sulfuric acid.', marks: 4, tier: 'amber',
        modelAnswer: `• Warm the sulfuric acid and add copper oxide a little at a time, stirring, until no more dissolves (excess) (1).\n• Filter off the excess copper oxide (1).\n• Heat the filtrate to evaporate some water, then leave to cool and crystallise (1).\n• Filter off the crystals and dry them between filter papers (1).` },
      { q: 'Explain the difference between a strong acid and a weak acid, and between a concentrated acid and a dilute acid.', marks: 4, tier: 'amber',
        modelAnswer: `• A strong acid is fully ionised in water, e.g. hydrochloric acid (1).\n• A weak acid is only partially ionised in water, e.g. ethanoic acid (1).\n• Concentration is the amount of acid per unit volume of solution (1).\n• A concentrated acid has a lot of acid per dm³; a dilute acid has a small amount — so strength and concentration are different ideas (1).` },
      { q: 'Aqueous sodium chloride is electrolysed with inert electrodes. Name the products at each electrode and explain why sodium is not formed.', marks: 4, tier: 'amber',
        modelAnswer: `• Cathode: hydrogen gas (1).\n• Anode: chlorine gas (1).\n• The solution contains H⁺ ions from water as well as Na⁺ ions (1).\n• Sodium is more reactive than hydrogen, so hydrogen ions are discharged instead of sodium ions (1).` },
    ],
    red: [
      { q: 'Calculate the energy change for H₂ + Cl₂ → 2HCl (bond energies: H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol). State whether the reaction is exothermic or endothermic and explain why in terms of bonds.', marks: 6, tier: 'red',
        modelAnswer: `• Energy to break bonds = 436 + 242 = 678 kJ/mol (1).\n• Energy released making bonds = 2 × 431 = 862 kJ/mol (1).\n• Energy change = 678 − 862 (1) = −184 kJ/mol (1).\n• The reaction is exothermic (1).\n• More energy is released when the new H–Cl bonds form than is taken in to break the H–H and Cl–Cl bonds (1).` },
      { q: '6.0 g of magnesium reacts with excess oxygen: 2Mg + O₂ → 2MgO. Calculate the mass of magnesium oxide formed and the number of magnesium atoms that reacted. (Mg = 24, O = 16; Avogadro constant = 6.02 × 10²³ per mol)', marks: 6, tier: 'red',
        modelAnswer: `• Moles of Mg = mass ÷ Ar = 6.0 ÷ 24 = 0.25 mol (1).\n• Mole ratio Mg : MgO = 2 : 2 = 1 : 1, so 0.25 mol MgO (1).\n• Mr of MgO = 24 + 16 = 40 (1).\n• Mass of MgO = 0.25 × 40 = 10 g (1).\n• Number of Mg atoms = 0.25 × 6.02 × 10²³ (1).\n• = 1.505 × 10²³ ≈ 1.5 × 10²³ atoms (1).` },
    ],
  },

  'C4': {
    green: [
      { q: 'State two observations when a small piece of sodium is added to water.', marks: 2, tier: 'green',
        modelAnswer: `Any two from: it floats; it fizzes / bubbles of gas; it moves around on the surface; it melts into a ball; it gets smaller and disappears (1 each).` },
      { q: 'Describe the test for chlorine gas and give the positive result.', marks: 2, tier: 'green',
        modelAnswer: `Hold damp blue litmus paper in the gas (1).\nIt turns red and is then bleached white (1).` },
      { q: 'State the flame test colours for lithium ions and potassium ions.', marks: 2, tier: 'green',
        modelAnswer: `Lithium: crimson (red) (1).\nPotassium: lilac (1).` },
      { q: 'State two typical properties of transition metals that are different from Group 1 metals.', marks: 2, tier: 'green',
        modelAnswer: `Any two from: higher melting points; higher densities; less reactive; form coloured compounds; form ions with different charges; used as catalysts (1 each).` },
    ],
    amber: [
      { q: 'Explain why the Group 1 metals get more reactive going down the group.', marks: 4, tier: 'amber',
        modelAnswer: `• Group 1 metals react by losing their single outer electron to form 1+ ions (1).\n• Going down the group the atoms get larger, with more electron shells (1).\n• The outer electron is further from the nucleus, so it is less strongly attracted (more shielding) (1).\n• So the outer electron is lost more easily and the metal is more reactive (1).` },
      { q: 'Chlorine water is added to potassium iodide solution. Describe what you would see and explain why the reaction happens. Include a word equation.', marks: 4, tier: 'amber',
        modelAnswer: `• The solution turns from colourless to brown (1).\n• Chlorine is more reactive than iodine (1).\n• So chlorine displaces iodine from the iodide (1).\n• chlorine + potassium iodide → potassium chloride + iodine (1).` },
      { q: 'Describe how to test a solution for chloride, bromide and iodide ions, giving the result for each.', marks: 4, tier: 'amber',
        modelAnswer: `• Add dilute nitric acid, then a few drops of silver nitrate solution (1).\n• Chloride: white precipitate (1).\n• Bromide: cream precipitate (1).\n• Iodide: yellow precipitate (1).` },
      { q: 'Describe how to carry out a flame test on a solid sample.', marks: 4, tier: 'amber',
        modelAnswer: `• Clean a nichrome wire loop by dipping it in concentrated hydrochloric acid and holding it in a blue Bunsen flame until it gives no colour (1).\n• Dip the loop in acid and then into the solid sample (1).\n• Hold the loop in the edge of a blue (roaring) Bunsen flame (1).\n• Observe the colour of the flame and compare with known colours, e.g. sodium yellow (1).` },
    ],
    red: [
      { q: 'A student has four metals, W, X, Y and Z, and solutions of their sulfates. Describe how they could use displacement reactions to place the metals in order of reactivity, and explain how the results show the order.', marks: 6, tier: 'red',
        modelAnswer: `• Add a small piece of each metal to a solution of each of the other metals’ sulfates (e.g. in a spotting tile) (1).\n• Keep volumes and concentrations of the solutions and sizes of the metal pieces the same (1).\n• Look for signs of reaction: a coating of a new metal forming, a colour change of the solution, or a temperature rise (1).\n• A metal displaces another metal only if it is more reactive (1).\n• The most reactive metal displaces all the others; the least reactive displaces none (1).\n• Count the number of displacements for each metal and rank them; more reactive metals lose electrons to form positive ions more easily (1).` },
      { q: 'A white solid is thought to be either calcium carbonate or zinc sulfate. Describe tests (including results) that would identify both the cation and the anion of the solid.', marks: 6, tier: 'red',
        modelAnswer: `• Flame test: calcium gives an orange-red flame; zinc gives no characteristic colour (1).\n• Dissolve/suspend in water and add sodium hydroxide solution: both give a white precipitate (1).\n• Add excess sodium hydroxide: the zinc hydroxide precipitate dissolves; the calcium hydroxide precipitate does not (1).\n• Carbonate test: add dilute acid — fizzing; bubble the gas through limewater, which turns milky (1).\n• Sulfate test: dissolve in water, add dilute hydrochloric acid then barium chloride solution — white precipitate (1).\n• So calcium carbonate gives orange-red flame and CO₂; zinc sulfate dissolves in excess NaOH and gives a white precipitate with barium chloride (1).` },
    ],
  },

  'C5': {
    green: [
      { q: 'State two ways of increasing the rate of reaction between magnesium ribbon and hydrochloric acid.', marks: 2, tier: 'green',
        modelAnswer: `Any two from: increase the temperature; increase the concentration of the acid; use magnesium powder instead of ribbon (larger surface area); add a catalyst (1 each).` },
      { q: 'State what is meant by a catalyst and name the biological catalysts found in living things.', marks: 2, tier: 'green',
        modelAnswer: `A catalyst speeds up a reaction without being used up (chemically unchanged at the end) (1).\nEnzymes (1).` },
      { q: 'State the meaning of dynamic equilibrium.', marks: 2, tier: 'green',
        modelAnswer: `In a closed system, the forward and reverse reactions are happening at the same rate (1).\nSo the amounts (concentrations) of reactants and products stay constant (1).` },
      { q: 'A reaction should produce 12.0 g of product, but only 9.0 g is collected. Calculate the percentage yield.', marks: 2, tier: 'green',
        modelAnswer: `Percentage yield = (actual ÷ theoretical) × 100 = (9.0 ÷ 12.0) × 100 (1).\n= 75% (1).` },
    ],
    amber: [
      { q: 'Describe how to carry out an acid–alkali titration to find the volume of acid needed to neutralise 25.0 cm³ of sodium hydroxide solution.', marks: 4, tier: 'amber',
        modelAnswer: `• Use a pipette to put 25.0 cm³ of sodium hydroxide into a conical flask and add a few drops of indicator (e.g. phenolphthalein) (1).\n• Fill a burette with acid and record the starting volume (1).\n• Add acid while swirling, then drop by drop near the end point, until the indicator just changes colour; record the final volume (1).\n• Repeat until concordant titres (within 0.10 cm³) are obtained and calculate the mean (1).` },
      { q: 'Explain, in terms of particles, why increasing the temperature increases the rate of a reaction.', marks: 4, tier: 'amber',
        modelAnswer: `• Particles gain kinetic energy and move faster (1).\n• So they collide more frequently (1).\n• A greater proportion of collisions have energy equal to or greater than the activation energy (1).\n• So there are more successful collisions per second (1).` },
      { q: 'Describe how to investigate the effect of acid concentration on the rate of reaction between marble chips and hydrochloric acid by measuring the volume of gas.', marks: 4, tier: 'amber',
        modelAnswer: `• Add a fixed mass of marble chips (same size) to a fixed volume of acid in a conical flask, connected to a gas syringe (1).\n• Start a timer and record the volume of gas at regular intervals (e.g. every 10 s) (1).\n• Repeat with different concentrations of acid, keeping temperature, volume and chip size the same (1).\n• Plot volume against time; compare the initial gradients — a steeper gradient means a faster rate (1).` },
      { q: 'Calculate the atom economy for making hydrogen by the reaction Zn + 2HCl → ZnCl₂ + H₂. (Zn = 65, H = 1, Cl = 35.5)', marks: 4, tier: 'amber',
        modelAnswer: `• Mr of H₂ = 2 (1).\n• Mr of ZnCl₂ = 65 + 71 = 136, so total mass of products = 136 + 2 = 138 (1).\n• Atom economy = (2 ÷ 138) × 100 (1).\n• = 1.4% (1).` },
    ],
    red: [
      { q: '25.0 cm³ of sodium hydroxide is neutralised by 18.0 cm³ of 0.150 mol/dm³ sulfuric acid. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the concentration of the sodium hydroxide in mol/dm³ and in g/dm³. (Mr NaOH = 40)', marks: 6, tier: 'red',
        modelAnswer: `• Moles H₂SO₄ = 0.0180 dm³ × 0.150 = 0.00270 mol (1).\n• Ratio H₂SO₄ : NaOH = 1 : 2 (1).\n• Moles NaOH = 2 × 0.00270 = 0.00540 mol (1).\n• Concentration = 0.00540 ÷ 0.0250 dm³ (1) = 0.216 mol/dm³ (1).\n• In g/dm³: 0.216 × 40 = 8.64 g/dm³ (1).` },
      { q: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g); the forward reaction is exothermic. Explain how increasing pressure and increasing temperature each affect the equilibrium yield of ammonia and the rate, and suggest suitable conditions.', marks: 6, tier: 'red',
        modelAnswer: `• Increasing pressure shifts the equilibrium to the side with fewer gas molecules — 2 on the right versus 4 on the left — so the yield of ammonia increases (1).\n• Higher pressure also increases the rate, as gas particles are closer together and collide more often (1).\n• Increasing temperature shifts the equilibrium in the endothermic direction (to the left), so the yield decreases (1).\n• But higher temperature increases the rate of reaction (1).\n• A compromise temperature (about 450 °C) gives an acceptable yield at a reasonable rate; an iron catalyst increases the rate without changing the position (1).\n• A high pressure (about 200 atm) is used, but not higher, because of the cost and safety of very high-pressure equipment (1).` },
    ],
  },

  'C6': {
    green: [
      { q: 'State why some metals are extracted by heating with carbon but others are extracted by electrolysis.', marks: 2, tier: 'green',
        modelAnswer: `Metals less reactive than carbon (e.g. iron, copper) can be extracted by reduction with carbon (1).\nMetals more reactive than carbon (e.g. aluminium) must be extracted by electrolysis (1).` },
      { q: 'Name the homologous series to which ethene belongs and give its functional group.', marks: 2, tier: 'green',
        modelAnswer: `Alkenes (1).\nC=C, a carbon–carbon double bond (1).` },
      { q: 'Give two reasons why crude oil is important to modern life.', marks: 2, tier: 'green',
        modelAnswer: `Any two from: it is the main source of fuels (petrol, diesel, kerosene); it is a feedstock for the petrochemical industry, e.g. making polymers, solvents, lubricants, detergents (1 each).` },
      { q: 'Name two greenhouse gases and state one effect of increasing their levels in the atmosphere.', marks: 2, tier: 'green',
        modelAnswer: `Any two from carbon dioxide, methane, water vapour (1).\nAny one effect: global temperature rise / climate change, sea level rise, more extreme weather, changes to habitats or food production (1).` },
    ],
    amber: [
      { q: 'Explain how iron is protected from rusting by galvanising, and why it is still protected when the zinc coating is scratched.', marks: 4, tier: 'amber',
        modelAnswer: `• Rusting needs both oxygen and water (1).\n• Galvanising coats iron with zinc, which acts as a barrier to oxygen and water (1).\n• Zinc is more reactive than iron (1).\n• If scratched, the zinc corrodes (is oxidised) instead of the iron — sacrificial protection (1).` },
      { q: 'Describe how crude oil is separated into fractions by fractional distillation.', marks: 4, tier: 'amber',
        modelAnswer: `• Crude oil is heated until most of it evaporates and the vapour enters the fractionating column (1).\n• The column is hot at the bottom and cooler at the top (temperature gradient) (1).\n• Hydrocarbons condense at different heights depending on their boiling points (1).\n• Larger molecules have stronger intermolecular forces and higher boiling points, so they condense lower down; small molecules rise to the top (1).` },
      { q: 'Explain why long-chain alkanes are cracked and state the conditions used.', marks: 4, tier: 'amber',
        modelAnswer: `• There is more demand for short-chain hydrocarbons such as petrol than crude oil supplies; long chains are in excess (1).\n• Cracking produces smaller alkanes useful as fuels (1).\n• It also produces alkenes, used to make polymers (1).\n• Conditions: high temperature with a catalyst (e.g. zeolite/silica or alumina) (1).` },
      { q: 'Describe how the Earth’s atmosphere is thought to have changed from its early composition to today’s.', marks: 4, tier: 'amber',
        modelAnswer: `• Early atmosphere was mainly carbon dioxide (with water vapour) from volcanoes, with little or no oxygen (1).\n• Water vapour condensed to form the oceans, and carbon dioxide dissolved in them (1).\n• Algae and plants photosynthesised, absorbing carbon dioxide and releasing oxygen (1).\n• Carbon was locked up in sedimentary rocks and fossil fuels; today the atmosphere is about 78% nitrogen and 21% oxygen (1).` },
    ],
    red: [
      { q: 'Evaluate the use of a life-cycle assessment to compare a glass bottle with a plastic (PET) bottle for drinks.', marks: 6, tier: 'red',
        modelAnswer: `• An LCA considers all stages: raw materials, manufacture, use, transport and disposal (1).\n• Glass: made from sand (plentiful), but needs very high temperatures, so manufacture uses a lot of energy (1).\n• Glass is heavy, so transport uses more fuel; but it can be reused many times and recycled (1).\n• PET: made from crude oil (finite); lighter, so less fuel for transport (1).\n• PET is less often reused; if not recycled it goes to landfill and does not biodegrade, or releases CO₂ if burned (1).\n• Limitation: some values (e.g. pollution effects) are hard to quantify and LCAs can be selective or biased, so the conclusion depends on how many times the glass bottle is reused (1).` },
      { q: 'Describe the potential effects of increased carbon dioxide and methane levels on the Earth’s climate, and evaluate ways of mitigating these effects.', marks: 6, tier: 'red',
        modelAnswer: `• CO₂ and methane absorb infrared radiation from the Earth and re-emit it, enhancing the greenhouse effect (1).\n• Effects: rising average global temperatures, melting ice and rising sea levels (1).\n• Also more extreme weather, changes in rainfall, and effects on habitats and food production (1).\n• Mitigation: use renewable energy instead of fossil fuels — but intermittent supply and high initial cost (1).\n• Carbon capture and storage — but it is still being developed and storage sites are limited (1).\n• Reducing methane from farming and landfill, planting trees — but large international agreement is needed, and changes take a long time to have an effect (1).` },
    ],
  },

};

if (typeof module !== 'undefined' && module.exports) module.exports = CHEMISTRY_OCR_A_GCSE_WRITTEN;
