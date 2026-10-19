/*
 * Edexcel GCSE (9-1) Chemistry (1CH0) — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * Diagnostic always includes exactly 1 written question chosen from here at random.
 */

const CHEMISTRY_EDEXCEL_GCSE_WRITTEN = {

  '1': {
    green: [
      { q: 'State the relative mass and relative charge of a proton, a neutron and an electron.', marks: 2, tier: 'green',
        modelAnswer: `• Proton — relative mass 1, relative charge +1\n• Neutron — relative mass 1, relative charge 0\n• Electron — relative mass 1/1836 (negligible), relative charge −1\n(Award 2 for all correct; 1 for four or five correct values.)` },
      { q: 'Define the term isotope.', marks: 2, tier: 'green',
        modelAnswer: `Atoms of the same element (same number of protons / same atomic number) (1) with different numbers of neutrons / different mass numbers (1).` },
      { q: 'Explain why the overall charge of an atom is zero.', marks: 2, tier: 'green',
        modelAnswer: `An atom contains equal numbers of protons and electrons (1). Each proton has a charge of +1 and each electron −1, so the charges cancel (1).` },
      { q: 'State two properties of metals and explain one of them in terms of metallic bonding.', marks: 2, tier: 'green',
        modelAnswer: `Properties: good conductors of electricity/heat; malleable; high melting points; shiny (any two) (1).\nExplanation, e.g.: conduct electricity because delocalised electrons can move through the lattice of positive ions; OR malleable because layers of positive ions can slide over each other while the delocalised electrons keep the metallic bonding (1).` },
    ],
    amber: [
      { q: 'Describe how an ionic bond forms between sodium and chlorine. Include the electronic configurations of the ions formed.', marks: 4, tier: 'amber',
        modelAnswer: `• Sodium (2.8.1) loses its one outer electron (1) to form Na⁺ with configuration 2.8 (1).\n• Chlorine (2.8.7) gains one electron (1) to form Cl⁻ with configuration 2.8.8 (1).\n• The oppositely charged ions are held together by strong electrostatic attraction — the ionic bond.` },
      { q: 'Calculate the empirical formula of a compound containing 2.8 g of iron and 1.2 g of oxygen. (Ar: Fe = 56, O = 16)', marks: 4, tier: 'amber',
        modelAnswer: `Moles Fe = 2.8 / 56 = 0.050 (1)\nMoles O = 1.2 / 16 = 0.075 (1)\nRatio 0.050 : 0.075 = 1 : 1.5 (1) = 2 : 3\nEmpirical formula = Fe₂O₃ (1)` },
      { q: 'Compare the structure and bonding of diamond and graphite and use them to explain one difference in properties.', marks: 4, tier: 'amber',
        modelAnswer: `• Diamond: each carbon atom forms four covalent bonds in a rigid giant lattice (1).\n• Graphite: each carbon atom forms three covalent bonds in hexagonal layers with weak forces between layers (1); one electron per atom is delocalised (1).\n• Difference explained, e.g.: graphite conducts electricity because of its delocalised electrons whereas diamond has none; OR graphite is soft/slippery because layers slide, whereas diamond is very hard (1).` },
      { q: 'Calculate the mass of calcium oxide formed when 25 g of calcium carbonate is heated: CaCO₃ → CaO + CO₂. (Mr: CaCO₃ = 100, CaO = 56)', marks: 4, tier: 'amber',
        modelAnswer: `Moles CaCO₃ = 25 / 100 = 0.25 mol (1)\nMole ratio CaCO₃ : CaO = 1 : 1, so 0.25 mol CaO (1)\nMass = 0.25 × 56 (1) = 14 g (1)` },
    ],
    red: [
      { q: 'Describe how the model of the atom developed from Dalton to Bohr, explaining the evidence that caused each change.', marks: 6, tier: 'red',
        modelAnswer: `• Dalton: atoms were solid, indivisible spheres; each element made of its own kind of atom.\n• Thomson discovered the electron, so atoms must contain smaller particles; he proposed the plum pudding model — a ball of positive charge with electrons embedded in it.\n• Rutherford (Geiger–Marsden) fired alpha particles at thin gold foil. Most passed straight through, so the atom is mostly empty space; a few were deflected through large angles, so the positive charge and most of the mass are concentrated in a tiny nucleus. This replaced the plum pudding model with the nuclear model.\n• Bohr proposed that electrons orbit the nucleus in fixed shells (energy levels) at set distances, which explained observations such as atomic spectra and why atoms do not collapse.\n• Later, neutrons were discovered in the nucleus (Chadwick), explaining why mass numbers exceed atomic numbers.\n(Level-based: 5–6 marks for a logically sequenced account linking each change to its evidence.)` },
      { q: '3.0 g of ethane (C₂H₆) burns completely: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O. Calculate the mass of oxygen needed and the mass of water produced, and explain how your answers show conservation of mass. (Ar: C = 12, H = 1, O = 16)', marks: 6, tier: 'red',
        modelAnswer: `Mr(C₂H₆) = 30; moles = 3.0 / 30 = 0.10 mol (1)\nO₂: ratio 2 : 7, so 0.35 mol × 32 = 11.2 g (1)(1)\nH₂O: ratio 2 : 6, so 0.30 mol × 18 = 5.4 g (1)\nCO₂: ratio 2 : 4, so 0.20 mol × 44 = 8.8 g (1)\nTotal mass of reactants = 3.0 + 11.2 = 14.2 g; total products = 8.8 + 5.4 = 14.2 g, so no atoms are created or destroyed — mass is conserved (1).` },
    ],
  },

  '2': {
    green: [
      { q: 'Name the three states of matter and describe the arrangement of particles in each.', marks: 2, tier: 'green',
        modelAnswer: `• Solid — particles closely packed in a regular arrangement, vibrating about fixed positions.\n• Liquid — particles close together but randomly arranged, able to move past each other.\n• Gas — particles far apart, randomly arranged, moving quickly in all directions.\n(2 marks for all three; 1 for two.)` },
      { q: 'Explain how the melting point of a sample can be used to show whether it is pure.', marks: 2, tier: 'green',
        modelAnswer: `A pure substance melts at a single, sharp, fixed temperature (1). An impure substance melts over a range of temperatures (usually lower than the pure value), so comparing with data-book values shows purity (1).` },
      { q: 'Describe how to separate sand from a mixture of sand and water.', marks: 2, tier: 'green',
        modelAnswer: `Pour the mixture through filter paper in a funnel (1). The sand is left on the filter paper as the residue and the water passes through as the filtrate (1).` },
      { q: 'State the three main stages used to make fresh water potable and give the purpose of one of them.', marks: 2, tier: 'green',
        modelAnswer: `Sedimentation, filtration, chlorination (1).\nPurpose, e.g. sedimentation lets large insoluble particles settle; filtration removes small insoluble particles; chlorination kills microorganisms (1).` },
    ],
    amber: [
      { q: 'Describe how to carry out paper chromatography to find out how many dyes are in a sample of ink.', marks: 4, tier: 'amber',
        modelAnswer: `• Draw a start line in pencil about 1–2 cm from the bottom of the chromatography paper (1).\n• Put a small spot of ink on the line (1).\n• Stand the paper in a beaker of solvent with the solvent level below the line; cover with a lid (1).\n• Remove the paper before the solvent reaches the top, mark the solvent front and let it dry; count the spots — each spot is a different dye (1).` },
      { q: 'In a chromatography experiment, the solvent front travelled 7.5 cm. Dye X travelled 4.5 cm and dye Y travelled 6.0 cm. Calculate the Rf value of each dye and explain which is more soluble in the solvent.', marks: 4, tier: 'amber',
        modelAnswer: `Rf(X) = 4.5 / 7.5 = 0.60 (1)\nRf(Y) = 6.0 / 7.5 = 0.80 (1)\nY has the higher Rf value (1), so it spends more time in the mobile phase/solvent — it is more soluble in the solvent / less attracted to the paper (1).` },
      { q: 'Describe how to obtain pure water from sea water by simple distillation, explaining how each part of the apparatus works.', marks: 4, tier: 'amber',
        modelAnswer: `• Heat the sea water in a flask; water boils and turns to steam (vapour) (1).\n• The salt has a much higher boiling point, so it stays in the flask (1).\n• The steam passes into a condenser cooled by cold water flowing in the outer jacket (1).\n• The vapour condenses to liquid water, which is collected in a beaker as the distillate (1).` },
      { q: 'Explain, using the particle model, what happens when a liquid is heated until it boils.', marks: 4, tier: 'amber',
        modelAnswer: `• Energy is transferred to the particles, which gain kinetic energy and move faster (1).\n• The temperature of the liquid rises until it reaches the boiling point (1).\n• At the boiling point, the energy is used to overcome the forces of attraction between the particles (1), so the temperature stays constant while the particles escape and become widely spaced as a gas (1).` },
    ],
    red: [
      { q: 'A student is given a black ink that contains water and several dyes. Plan how they could (a) obtain a sample of the solvent and (b) find out whether the ink contains a red dye, R, which is available as a pure sample.', marks: 6, tier: 'red',
        modelAnswer: `(a) Simple distillation: heat the ink in a flask; the water evaporates, passes into a condenser and condenses; collect pure water as the distillate. The dyes remain in the flask. Check purity by measuring the boiling point (100 °C).\n(b) Paper chromatography: draw a pencil start line; spot the ink and pure dye R side by side on the line; stand in solvent with the level below the line; cover; remove before the solvent reaches the top and mark the solvent front.\nAnalysis: compare spots — if one ink spot is at the same height (same Rf) and colour as R, the ink probably contains R. Calculate Rf values to compare. To be more certain, repeat with a different solvent and see whether the spots still match.\n(Level-based: 5–6 marks for both methods described with correct detail and a justified conclusion.)` },
      { q: 'Evaluate the use of desalination compared with treating fresh water to supply drinking water.', marks: 6, tier: 'red',
        modelAnswer: `• Treating fresh water (sedimentation, filtration, chlorination) is relatively cheap and needs little energy, but depends on a supply of rainwater, rivers, lakes or groundwater.\n• Desalination (by distillation or reverse osmosis) can provide potable water from the sea where fresh water is scarce, e.g. in hot dry coastal countries.\n• However, desalination needs large amounts of energy (heating for distillation, high pressure for reverse osmosis), so it is expensive and, if fossil fuels are used, releases carbon dioxide.\n• Desalination also produces concentrated brine waste that can harm marine life.\n• Conclusion: where fresh water is available, treatment of fresh water is preferred; desalination is justified only where fresh water is scarce and energy is affordable.\n(Level-based: 5–6 marks for a balanced judgement supported by advantages and disadvantages of each.)` },
    ],
  },

  '3': {
    green: [
      { q: 'Complete the general word equations: (a) acid + metal → ? (b) acid + metal carbonate → ?', marks: 2, tier: 'green',
        modelAnswer: `(a) salt + hydrogen (1)\n(b) salt + water + carbon dioxide (1)` },
      { q: 'Describe the tests for hydrogen gas and carbon dioxide gas, giving the positive result for each.', marks: 2, tier: 'green',
        modelAnswer: `• Hydrogen: hold a lighted splint at the mouth of the tube — burns with a squeaky pop (1).\n• Carbon dioxide: bubble through limewater — limewater turns milky/cloudy (1).` },
      { q: 'State the colours of methyl orange and phenolphthalein in acidic and alkaline solutions.', marks: 2, tier: 'green',
        modelAnswer: `• Methyl orange: red in acid, yellow in alkali (1).\n• Phenolphthalein: colourless in acid, pink in alkali (1).` },
      { q: 'Explain why molten sodium chloride conducts electricity but solid sodium chloride does not.', marks: 2, tier: 'green',
        modelAnswer: `In the solid, the ions are held in fixed positions in a giant lattice and cannot move (1). When molten, the ions are free to move and carry charge (1).` },
    ],
    amber: [
      { q: 'Describe how to prepare pure, dry, hydrated copper sulfate crystals from copper oxide and dilute sulfuric acid.', marks: 4, tier: 'amber',
        modelAnswer: `• Warm the dilute sulfuric acid and add copper oxide a little at a time, stirring, until no more dissolves (excess) (1).\n• Filter to remove the excess copper oxide (1).\n• Heat the filtrate gently to evaporate some water until crystals start to form / to the point of crystallisation, then leave to cool so crystals form (1).\n• Filter off the crystals and pat dry between filter paper / leave in a warm place to dry (1).` },
      { q: 'Explain the difference between a strong acid and a concentrated acid, giving an example of a strong acid.', marks: 4, tier: 'amber',
        modelAnswer: `• Strong acid: fully ionised/dissociated in aqueous solution (1); example — hydrochloric, nitric or sulfuric acid (1).\n• Concentrated acid: a large amount of acid dissolved per unit volume of solution (1).\n• A weak acid (e.g. ethanoic acid) can be concentrated, and a strong acid can be dilute — the two terms describe different things (1).` },
      { q: 'Predict the products at each electrode when the following are electrolysed with inert electrodes: (a) dilute sulfuric acid (b) copper chloride solution. Write a half equation for one of the products.', marks: 4, tier: 'amber',
        modelAnswer: `(a) Hydrogen at the cathode; oxygen at the anode (1).\n(b) Copper at the cathode; chlorine at the anode (1).\nHalf equation, e.g.: 2H⁺ + 2e⁻ → H₂; 4OH⁻ → O₂ + 2H₂O + 4e⁻; Cu²⁺ + 2e⁻ → Cu; 2Cl⁻ → Cl₂ + 2e⁻ (2 — 1 for correct species, 1 for balanced electrons).` },
      { q: 'Describe how to prepare a pure, dry sample of the insoluble salt barium sulfate.', marks: 4, tier: 'amber',
        modelAnswer: `• Mix solutions of a soluble barium salt (e.g. barium chloride) and a soluble sulfate (e.g. sodium sulfate / sulfuric acid) (1).\n• A white precipitate of barium sulfate forms (1).\n• Filter to collect the precipitate (1).\n• Wash with distilled water to remove soluble impurities, then dry in a warm oven or between filter paper (1).` },
    ],
    red: [
      { q: 'A student investigates how the pH changes when calcium hydroxide is added to dilute hydrochloric acid. Describe a method and explain the shape of the graph of pH against mass of calcium hydroxide added.', marks: 6, tier: 'red',
        modelAnswer: `Method: measure a fixed volume (e.g. 50 cm³) of dilute HCl into a beaker; measure initial pH with a calibrated pH meter or universal indicator paper; add a small measured mass (e.g. 0.3 g) of calcium hydroxide, stir, and record the pH; repeat additions until no further change.\nGraph: pH starts low (about 1) because there are many H⁺ ions; it rises slowly at first as H⁺ ions are neutralised by OH⁻ (H⁺ + OH⁻ → H₂O); near the end point the pH rises sharply through 7; once the base is in excess, pH levels off at about 12 (limited because calcium hydroxide is only slightly soluble).\nControl variables: same concentration and volume of acid; temperature; stirring.\n(Level-based: 5–6 marks for a clear method with measurements and a full explanation of the curve.)` },
      { q: 'Describe and explain what is observed during the electrolysis of copper sulfate solution using (a) inert graphite electrodes and (b) copper electrodes. Include half equations.', marks: 6, tier: 'red',
        modelAnswer: `(a) Graphite electrodes: copper is deposited on the cathode (pink/brown coating): Cu²⁺ + 2e⁻ → Cu. Bubbles of oxygen form at the anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻. The blue colour of the solution fades because Cu²⁺ ions are removed.\n(b) Copper electrodes: copper is deposited on the cathode (gains mass): Cu²⁺ + 2e⁻ → Cu. The copper anode dissolves (loses mass): Cu → Cu²⁺ + 2e⁻. No gas is formed. The blue colour stays the same because Cu²⁺ ions are replaced at the same rate as they are removed. The mass lost by the anode equals the mass gained by the cathode — the principle used to purify copper.\n(Level-based: 5–6 marks for observations, half equations and explanations for both set-ups.)` },
    ],
  },

  '4': {
    green: [
      { q: 'Define oxidation and reduction in terms of oxygen and in terms of electrons.', marks: 2, tier: 'green',
        modelAnswer: `• Oxidation: gain of oxygen / loss of electrons (1).\n• Reduction: loss of oxygen / gain of electrons (1).` },
      { q: 'Explain why some metals, such as gold, are found uncombined in the Earth’s crust.', marks: 2, tier: 'green',
        modelAnswer: `They are very unreactive (1), so they do not react with oxygen, water or other substances to form compounds (1).` },
      { q: 'State the conditions used in the Haber process.', marks: 2, tier: 'green',
        modelAnswer: `Temperature about 450 °C; pressure about 200 atm (1); iron catalyst (1).` },
      { q: 'Give two advantages of recycling metals compared with extracting them from ores.', marks: 2, tier: 'green',
        modelAnswer: `Any two (1 each): saves limited ore reserves; uses less energy; reduces mining damage/quarrying; reduces waste sent to landfill; often cheaper; less carbon dioxide released.` },
    ],
    amber: [
      { q: 'Explain how the method used to extract a metal depends on its position in the reactivity series. Give one example of each method.', marks: 4, tier: 'amber',
        modelAnswer: `• Metals less reactive than carbon can be extracted by heating the oxide with carbon (reduction) (1) — e.g. iron, zinc, copper (1).\n• Metals more reactive than carbon must be extracted by electrolysis of the molten compound (1) — e.g. aluminium, sodium, potassium (1).` },
      { q: 'Describe what is meant by a dynamic equilibrium.', marks: 4, tier: 'amber',
        modelAnswer: `• Occurs in a reversible reaction in a closed system (1).\n• The forward and backward reactions both continue (1)\n• at the same rate (1),\n• so the concentrations of reactants and products remain constant (1).` },
      { q: 'Describe how phytoextraction is used to obtain copper.', marks: 4, tier: 'amber',
        modelAnswer: `• Plants are grown on land containing low-grade copper ore / contaminated soil (1).\n• The plants absorb copper compounds through their roots (1).\n• The plants are harvested and burned; the ash contains copper compounds (1).\n• Copper is then extracted from the ash, e.g. by electrolysis or displacement with scrap iron (1).` },
      { q: 'Magnesium is added to iron(II) sulfate solution. Write the ionic equation and explain which species is oxidised and which is reduced.', marks: 4, tier: 'amber',
        modelAnswer: `Mg + Fe²⁺ → Mg²⁺ + Fe (1)\nMagnesium is oxidised because it loses electrons (Mg → Mg²⁺ + 2e⁻) (1)(1).\nIron(II) ions are reduced because they gain electrons (Fe²⁺ + 2e⁻ → Fe) (1).` },
    ],
    red: [
      { q: 'The forward reaction in the Haber process (N₂ + 3H₂ ⇌ 2NH₃) is exothermic. Explain the choice of temperature, pressure and catalyst used in industry.', marks: 6, tier: 'red',
        modelAnswer: `• Temperature (450 °C): the forward reaction is exothermic, so a low temperature would shift equilibrium to the right and give a higher yield. But at low temperature the rate is too slow. 450 °C is a compromise between reasonable yield and fast rate.\n• Pressure (200 atm): there are 4 molecules of gas on the left and 2 on the right, so high pressure shifts equilibrium to the side with fewer gas molecules, increasing yield; high pressure also increases the rate. Higher pressures would be more expensive to produce and more dangerous (stronger equipment needed), so 200 atm is a compromise.\n• Iron catalyst: increases the rate by providing a lower activation energy pathway; it does not change the equilibrium position but means equilibrium is reached faster, allowing a lower temperature.\n• Unreacted gases are recycled, so the overall conversion is high even though the yield per pass is only about 15%.\n(Level-based: 5–6 marks for linking each condition to both yield and rate with cost/safety.)` },
      { q: 'Evaluate, using a life-cycle assessment approach, whether drinks cans should be made from aluminium or steel.', marks: 6, tier: 'red',
        modelAnswer: `• Raw materials: aluminium ore (bauxite) and iron ore are both finite and mined, causing habitat damage.\n• Manufacture: aluminium is extracted by electrolysis, which uses very large amounts of electricity; iron is extracted with carbon in a blast furnace, also energy-intensive and releasing CO₂ — but aluminium extraction generally has the larger energy cost per tonne.\n• Use: aluminium cans are lighter, so less fuel is used in transport; aluminium does not rust, whereas steel cans need a coating.\n• Disposal: both can be recycled; recycling aluminium saves about 95% of the energy of extraction, and steel can be separated magnetically.\n• Conclusion: if recycling rates are high, aluminium’s lower transport and corrosion costs can outweigh its high extraction energy; if not recycled, steel may have a lower overall impact. LCAs involve value judgements and estimated data, so conclusions can be biased.\n(Level-based: 5–6 marks for a balanced comparison across the stages and a justified conclusion.)` },
    ],
  },

  '5': {
    green: [
      { q: 'State two typical properties of transition metals that are not shown by Group 1 metals.', marks: 2, tier: 'green',
        modelAnswer: `Any two (1 each): high melting points; high densities; form coloured compounds; act as catalysts (as metals or compounds); form ions with different charges; hard/strong.` },
      { q: 'Explain why alloys are harder than pure metals.', marks: 2, tier: 'green',
        modelAnswer: `In a pure metal the layers of identical atoms can slide over each other easily (1). In an alloy, atoms of different sizes distort the layers, so they cannot slide as easily (1).` },
      { q: 'Calculate the volume of 0.40 mol of carbon dioxide at room temperature and pressure.', marks: 2, tier: 'green',
        modelAnswer: `Volume = moles × 24 dm³ (1) = 0.40 × 24 = 9.6 dm³ (1).` },
      { q: 'State two ways of preventing iron from rusting and explain how one of them works.', marks: 2, tier: 'green',
        modelAnswer: `Two methods (1): painting; oiling/greasing; coating with plastic; galvanising; sacrificial protection with a more reactive metal; tin plating; electroplating.\nExplanation (1): e.g. paint/oil/plastic forms a barrier keeping out oxygen and water; OR zinc/magnesium is more reactive than iron, so it is oxidised instead of iron.` },
    ],
    amber: [
      { q: 'Describe how to carry out an accurate acid–alkali titration to find the volume of hydrochloric acid needed to neutralise 25.0 cm³ of sodium hydroxide solution.', marks: 4, tier: 'amber',
        modelAnswer: `• Use a pipette (with pipette filler) to measure 25.0 cm³ of NaOH into a conical flask; add a few drops of indicator, e.g. phenolphthalein or methyl orange (1).\n• Fill a burette with the acid, read the starting volume at eye level from the bottom of the meniscus (1).\n• Add acid while swirling, then dropwise near the end point, until the indicator just changes colour permanently (1).\n• Record the final reading; repeat until concordant titres (within 0.10 cm³) are obtained and calculate the mean (1).` },
      { q: 'Calculate the percentage yield when 8.0 g of copper oxide (Mr = 80) reacts with excess sulfuric acid and 12.0 g of copper sulfate (Mr = 160) is obtained. CuO + H₂SO₄ → CuSO₄ + H₂O', marks: 4, tier: 'amber',
        modelAnswer: `Moles CuO = 8.0 / 80 = 0.10 mol (1)\nTheoretical mass CuSO₄ = 0.10 × 160 = 16.0 g (1)\nPercentage yield = 12.0 / 16.0 × 100 (1) = 75% (1)` },
      { q: 'Describe the reactions that take place in a hydrogen–oxygen fuel cell and give one advantage and one disadvantage of using them in vehicles.', marks: 4, tier: 'amber',
        modelAnswer: `• Hydrogen and oxygen react to produce water; the energy released is transferred as electrical energy: 2H₂ + O₂ → 2H₂O (1)(1).\n• Advantage: only product is water / no CO₂ at point of use / more efficient than combustion / quick to refuel (1).\n• Disadvantage: hydrogen is flammable and hard to store (needs high pressure); hydrogen is often made from fossil fuels or using electricity; few refuelling stations; expensive (1).` },
      { q: 'Explain why electroplating is used and describe how to electroplate a steel key with nickel.', marks: 4, tier: 'amber',
        modelAnswer: `• Purpose: to improve appearance and/or to prevent corrosion (1).\n• Make the key the cathode (1) and a piece of nickel the anode (1).\n• Use an electrolyte containing nickel ions (e.g. nickel sulfate solution); passing a current deposits nickel on the key: Ni²⁺ + 2e⁻ → Ni (1).` },
    ],
    red: [
      { q: 'In a titration, 25.0 cm³ of sodium hydroxide solution was neutralised by a mean titre of 22.50 cm³ of 0.100 mol dm⁻³ sulfuric acid. H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the concentration of the sodium hydroxide in mol dm⁻³ and in g dm⁻³ (Mr NaOH = 40), and explain how the result’s accuracy could be improved.', marks: 6, tier: 'red',
        modelAnswer: `Moles H₂SO₄ = 0.02250 × 0.100 = 0.002250 mol (1)\nMoles NaOH = 2 × 0.002250 = 0.004500 mol (1)\nConcentration = 0.004500 / 0.0250 = 0.180 mol dm⁻³ (1)\nIn g dm⁻³ = 0.180 × 40 = 7.20 g dm⁻³ (1)\nImproving accuracy (any two, 1 each): repeat to obtain concordant results and use only those in the mean; add acid dropwise near the end point; read the burette at eye level at the bottom of the meniscus; use a white tile to see the colour change; rinse burette with acid and pipette with alkali before use.` },
      { q: 'Two routes are proposed to make a product. Route A: percentage yield 90%, atom economy 45%, by-product has no use. Route B: percentage yield 60%, atom economy 100%, uses a renewable raw material. Evaluate which route a company should choose.', marks: 6, tier: 'red',
        modelAnswer: `• Route A gives more of the product per run (90% yield), so less raw material is wasted through incomplete reaction or losses.\n• However, its atom economy is only 45%: more than half the mass of reactants ends up as an unwanted by-product that must be disposed of, which costs money and may harm the environment.\n• Route B has 100% atom economy, so in principle there is no waste product, and it uses a renewable feedstock, which is more sustainable.\n• But its 60% yield means more raw material is needed per tonne of product, and unreacted material may need to be recycled; it may also be slower or need more energy.\n• Other factors: rate of reaction, energy costs, cost of raw materials, value of any by-products, and whether unreacted materials can be recycled.\n• Judgement: Route B is likely to be preferable for sustainability and less waste if unreacted materials can be recycled; Route A may be cheaper in the short term.\n(Level-based: 5–6 marks for a balanced evaluation that uses both yield and atom economy and reaches a justified conclusion.)` },
    ],
  },

  '6': {
    green: [
      { q: 'Describe the test for chlorine gas and give the positive result.', marks: 2, tier: 'green',
        modelAnswer: `Hold damp blue litmus paper in the gas (1); it turns red then is bleached white (1).` },
      { q: 'Write a balanced equation for the reaction of lithium with water.', marks: 2, tier: 'green',
        modelAnswer: `2Li + 2H₂O → 2LiOH + H₂ (correct formulae 1; balanced 1)` },
      { q: 'State the colour and physical state at room temperature of chlorine, bromine and iodine.', marks: 2, tier: 'green',
        modelAnswer: `• Chlorine — pale green / yellow-green gas\n• Bromine — red-brown liquid\n• Iodine — dark grey (black) solid\n(2 for all three correct; 1 for two.)` },
      { q: 'Explain why the noble gases are inert.', marks: 2, tier: 'green',
        modelAnswer: `They have full outer shells of electrons (1), so they do not easily lose, gain or share electrons (1).` },
    ],
    amber: [
      { q: 'Describe what you would observe when a small piece of sodium is added to a trough of water containing universal indicator, and explain the observations.', marks: 4, tier: 'amber',
        modelAnswer: `• Floats — less dense than water (1).\n• Melts into a ball — reaction is exothermic and sodium has a low melting point (1).\n• Fizzes/moves around — hydrogen gas is produced (1).\n• Indicator turns blue/purple — sodium hydroxide, an alkali, is formed; sodium gets smaller and disappears (1).` },
      { q: 'Explain why potassium is more reactive than sodium.', marks: 4, tier: 'amber',
        modelAnswer: `• Both lose their one outer electron when they react (1).\n• Potassium has more electron shells, so its outer electron is further from the nucleus (1)\n• and more shielded by inner electrons (1),\n• so the attraction between the nucleus and the outer electron is weaker and it is lost more easily (1).` },
      { q: 'Chlorine water is added to separate solutions of potassium bromide and potassium iodide. Describe what is seen, and write an ionic equation for one reaction.', marks: 4, tier: 'amber',
        modelAnswer: `• With KBr: the solution turns orange/yellow as bromine is formed (1).\n• With KI: the solution turns brown as iodine is formed (1).\n• Ionic equation (2): Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂ OR Cl₂ + 2I⁻ → 2Cl⁻ + I₂ (1 for species, 1 for balancing).` },
      { q: 'Explain how the uses of helium, neon and argon depend on their properties.', marks: 4, tier: 'amber',
        modelAnswer: `• Helium: low density and non-flammable/inert — used in balloons and airships (1).\n• Neon: inert and emits light when a current is passed through it — used in advertising signs (1).\n• Argon: inert — used in filament lamps to stop the hot filament reacting (oxidising/burning) (1), and as a shield gas in welding to prevent the hot metal reacting with oxygen (1).` },
    ],
    red: [
      { q: 'Explain the trends in reactivity in Group 1 and Group 7 in terms of electronic structure, and explain why the trends are in opposite directions.', marks: 6, tier: 'red',
        modelAnswer: `• Group 1 metals react by losing their single outer electron to form 1+ ions. Down the group, atoms have more shells, so the outer electron is further from the nucleus and more shielded by inner shells. The attraction to the nucleus is weaker, so the electron is lost more easily — reactivity increases down the group.\n• Group 7 elements react by gaining one electron to complete their outer shell, forming 1− ions. Down the group, the outer shell is further from the nucleus and more shielded, so there is a weaker attraction for the incoming electron. The electron is gained less easily — reactivity decreases down the group.\n• The trends are opposite because Group 1 reactions depend on losing an electron (easier when attraction is weaker) while Group 7 reactions depend on gaining an electron (harder when attraction is weaker).\n(Level-based: 5–6 marks for both trends explained using distance, shielding and attraction, and the contrast explained.)` },
      { q: 'A student is given three unlabelled solutions: potassium chloride, potassium bromide and potassium iodide, and the halogen water solutions of chlorine, bromine and iodine. Plan an experiment to identify each potassium halide using displacement reactions, and predict the results.', marks: 6, tier: 'red',
        modelAnswer: `Method: put a few cm³ of each potassium halide solution into separate test tubes (or spotting tile wells); add a few drops of each halogen solution in turn; observe any colour change; use fresh samples each time; use a fume cupboard as halogens are toxic.\nPredicted results:\n• Chlorine water: no change with KCl; turns orange with KBr (bromine formed); turns brown with KI (iodine formed).\n• Bromine water: no change with KCl; no reaction with KBr (stays orange); turns brown with KI.\n• Iodine solution: no change with any of the three.\nIdentification: the solution that reacts with neither chlorine nor bromine is KCl; the solution that reacts only with chlorine is KBr; the solution that reacts with both chlorine and bromine is KI.\nExplanation: a more reactive halogen displaces a less reactive halide from solution (redox: halogen is reduced, halide ions are oxidised). Adding a hydrocarbon solvent such as cyclohexane can make the halogen colours clearer.\n(Level-based: 5–6 marks for a safe, logical plan with correct predictions and conclusions.)` },
    ],
  },

  '7': {
    green: [
      { q: 'State four factors that affect the rate of a chemical reaction.', marks: 2, tier: 'green',
        modelAnswer: `Any four: temperature; concentration of solutions; pressure of gases; surface area of solids; presence of a catalyst.\n(2 for four; 1 for two or three.)` },
      { q: 'Define the terms exothermic and endothermic.', marks: 2, tier: 'green',
        modelAnswer: `• Exothermic: a reaction that transfers energy (heat) to the surroundings, so the temperature of the surroundings increases (1).\n• Endothermic: a reaction that takes in energy (heat) from the surroundings, so the temperature of the surroundings decreases (1).` },
      { q: 'Explain how a catalyst increases the rate of a reaction.', marks: 2, tier: 'green',
        modelAnswer: `It provides an alternative reaction pathway (1) with a lower activation energy, so more collisions are successful (1).` },
      { q: 'In terms of bond breaking and making, explain why a reaction is endothermic.', marks: 2, tier: 'green',
        modelAnswer: `Breaking bonds takes in energy and making bonds releases energy (1). A reaction is endothermic when more energy is needed to break bonds in the reactants than is released making bonds in the products (1).` },
    ],
    amber: [
      { q: 'Describe how to investigate the effect of acid concentration on the rate of reaction between marble chips and hydrochloric acid by measuring the volume of gas produced.', marks: 4, tier: 'amber',
        modelAnswer: `• Measure a fixed volume of acid of known concentration into a conical flask; add a fixed mass of marble chips of the same size (1).\n• Immediately connect a gas syringe (or upturned measuring cylinder over water) and start a stopwatch (1).\n• Record the volume of gas at regular time intervals, e.g. every 10 s (1).\n• Repeat with different acid concentrations, keeping temperature, chip size, mass and volume of acid constant; compare initial rates from graphs (1).` },
      { q: 'Use collision theory to explain why powdered calcium carbonate reacts faster with acid than lumps of the same mass.', marks: 4, tier: 'amber',
        modelAnswer: `• The powder has a larger surface area to volume ratio (1).\n• More particles of calcium carbonate are exposed to the acid (1),\n• so there are more frequent collisions between acid and carbonate particles (1),\n• leading to more successful collisions per second — faster rate (1).` },
      { q: 'Describe the features of a fully labelled reaction profile for an exothermic reaction.', marks: 4, tier: 'amber',
        modelAnswer: `• Energy on the vertical axis; progress of reaction on the horizontal axis (1).\n• Reactants shown at a higher energy level than products (1).\n• A hump between them; activation energy labelled as the difference from reactants to the top of the hump (1).\n• Overall energy change (ΔH) labelled as the difference between reactants and products, shown downwards/negative (1).` },
      { q: 'Describe how to investigate the temperature change when different masses of a solid dissolve in water.', marks: 4, tier: 'amber',
        modelAnswer: `• Measure a fixed volume of water (e.g. 25 cm³) into a polystyrene cup with a lid, standing in a beaker for support (1).\n• Record the initial temperature with a thermometer (1).\n• Add a measured mass of the solid, stir, and record the maximum (or minimum) temperature reached (1).\n• Calculate the temperature change; repeat with different masses using fresh water each time, keeping volume and starting temperature constant (1).` },
    ],
    red: [
      { q: 'Using bond energies, calculate the energy change for the reaction N₂ + 3H₂ → 2NH₃, and explain whether it is exothermic or endothermic. Bond energies (kJ/mol): N≡N 945, H–H 436, N–H 391.', marks: 6, tier: 'red',
        modelAnswer: `Bonds broken: 1 × N≡N + 3 × H–H = 945 + 1308 = 2253 kJ/mol (2)\nBonds made: 6 × N–H = 6 × 391 = 2346 kJ/mol (2)\nEnergy change = 2253 − 2346 = −93 kJ/mol (1)\nThe value is negative because more energy is released making the new N–H bonds than is needed to break the N≡N and H–H bonds, so the reaction is exothermic (1).` },
      { q: 'A student investigates the effect of temperature on the rate of reaction between sodium thiosulfate and hydrochloric acid. Describe a suitable method, explain the expected results using collision theory, and suggest how the reliability of the results could be improved.', marks: 6, tier: 'red',
        modelAnswer: `Method: measure fixed volumes of sodium thiosulfate solution and hydrochloric acid with measuring cylinders; warm the thiosulfate in a water bath to the chosen temperature; place the conical flask on a paper marked with a black cross; add the acid, swirl and start the timer; stop when the cross can no longer be seen through the solution; record the temperature of the mixture; repeat at several temperatures (e.g. 20–60 °C).\nResults: the time decreases as temperature increases, so rate (1/time) increases.\nExplanation: at higher temperature particles have more kinetic energy and move faster, so they collide more frequently and a greater proportion of collisions have energy equal to or greater than the activation energy, giving more successful collisions per second.\nReliability: repeat each temperature and calculate a mean; use the same observer and the same cross; use a light sensor/data logger instead of judging by eye; control concentration and volumes; carry out in a fume cupboard or well-ventilated room because SO₂ is produced.\n(Level-based: 5–6 marks for a detailed method, correct explanation and valid improvements.)` },
    ],
  },

  '8': {
    green: [
      { q: 'Name four fractions obtained from crude oil and give a use for two of them.', marks: 2, tier: 'green',
        modelAnswer: `Fractions (1): gases, petrol, kerosene, diesel oil, fuel oil, bitumen (any four).\nUses (1): gases — domestic heating/cooking; petrol — fuel for cars; kerosene — aircraft fuel; diesel oil — fuel for cars/lorries/trains; fuel oil — ships/power stations; bitumen — road surfaces/roofs (any two).` },
      { q: 'Write a balanced equation for the complete combustion of propane, C₃H₈.', marks: 2, tier: 'green',
        modelAnswer: `C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (correct products 1; balanced 1)` },
      { q: 'State the test for oxygen gas and the positive result.', marks: 2, tier: 'green',
        modelAnswer: `Insert a glowing splint into the gas (1); it relights (1).` },
      { q: 'Explain why carbon monoxide is toxic.', marks: 2, tier: 'green',
        modelAnswer: `It combines with haemoglobin in red blood cells (1), which reduces the amount of oxygen the blood can carry around the body (1).` },
    ],
    amber: [
      { q: 'Explain how crude oil is separated into fractions by fractional distillation.', marks: 4, tier: 'amber',
        modelAnswer: `• Crude oil is heated until most of it evaporates (1).\n• The vapour enters the fractionating column, which is hot at the bottom and cooler at the top (1).\n• Vapours rise and condense at different heights according to their boiling points (1).\n• Short-chain hydrocarbons with low boiling points condense near the top; long-chain ones with high boiling points condense near the bottom or remain as liquids (bitumen) (1).` },
      { q: 'Explain why oil refineries crack some fractions and write an equation for the cracking of decane, C₁₀H₂₂.', marks: 4, tier: 'amber',
        modelAnswer: `• Supply of long-chain fractions is greater than demand; demand for short-chain fractions (e.g. petrol) is greater than supply (1).\n• Cracking converts long-chain alkanes into shorter, more useful alkanes and alkenes; alkenes are used to make polymers (1).\n• Equation, e.g. C₁₀H₂₂ → C₈H₁₈ + C₂H₄ (any balanced equation producing an alkane and an alkene) (2).` },
      { q: 'Describe how the Earth’s early atmosphere is thought to have changed to form today’s atmosphere.', marks: 4, tier: 'amber',
        modelAnswer: `• Early atmosphere mainly carbon dioxide and water vapour from volcanoes, with little or no oxygen (1).\n• Water vapour condensed as the Earth cooled to form the oceans (1).\n• Carbon dioxide dissolved in the oceans and was locked up in sedimentary rocks/fossil fuels (1).\n• Photosynthesis by algae and plants used carbon dioxide and released oxygen, so oxygen levels increased (1).` },
      { q: 'Explain how sulfur dioxide and oxides of nitrogen are produced when fuels are burned and describe one environmental problem they cause.', marks: 4, tier: 'amber',
        modelAnswer: `• Sulfur dioxide forms when sulfur impurities in fossil fuels react with oxygen during combustion (1).\n• Oxides of nitrogen form when nitrogen and oxygen from the air react at the high temperatures in engines (1).\n• Both dissolve in rain water to form acid rain (1).\n• Acid rain damages buildings/statues (limestone), kills trees, and harms aquatic life in lakes (1).` },
    ],
    red: [
      { q: 'Evaluate the use of hydrogen compared with petrol as a fuel for cars.', marks: 6, tier: 'red',
        modelAnswer: `• Hydrogen: complete combustion produces only water, so no carbon dioxide, carbon monoxide, soot or sulfur dioxide is released at the point of use; it releases more energy per gram than petrol; it can be made from water (renewable in principle).\n• However: hydrogen is a gas, so it must be stored in large high-pressure tanks, which is costly and adds safety risks (flammable/explosive); there are few refuelling stations; most hydrogen is currently made from natural gas or by electrolysis using electricity that may come from fossil fuels, so CO₂ is still released overall.\n• Petrol: easy to store and transport as a liquid, with an existing refuelling network; but it is from finite crude oil and its combustion releases CO₂ (greenhouse gas), and possibly CO, particulates and oxides of nitrogen.\n• Conclusion: hydrogen is cleaner at the point of use and could be fully sustainable if made using renewable electricity, but storage, infrastructure and production methods currently limit its benefits.\n(Level-based: 5–6 marks for a balanced evaluation with a justified conclusion.)` },
      { q: 'Explain how human activities are increasing the amount of greenhouse gases in the atmosphere, how this leads to climate change, and why scientists cannot predict the effects with certainty.', marks: 6, tier: 'red',
        modelAnswer: `• Burning fossil fuels for transport, electricity and heating releases carbon dioxide; deforestation reduces photosynthesis so less CO₂ is removed; cattle farming, rice paddies and landfill release methane.\n• Greenhouse gases absorb infrared radiation emitted by the Earth’s surface and re-emit it in all directions, including back towards the Earth, warming the lower atmosphere (enhanced greenhouse effect).\n• Rising average temperatures lead to climate change: melting ice caps and rising sea levels, changes in rainfall and more extreme weather, changes in species distribution.\n• Evidence: correlation between rising CO₂ levels (e.g. measured at observatories and from ice cores) and rising global temperatures since the industrial revolution.\n• Uncertainty: the climate is a complex system with many interacting variables (e.g. solar activity, ocean currents, clouds); historical data is less accurate and from fewer locations; models are simplifications, so predictions vary.\n(Level-based: 5–6 marks for clear causes, mechanism, consequences and a reasoned discussion of uncertainty.)` },
    ],
  },

  '9': {
    green: [
      { q: 'Describe how to carry out a flame test on a metal compound.', marks: 2, tier: 'green',
        modelAnswer: `Clean a nichrome (or platinum) wire loop by dipping it in hydrochloric acid and holding it in a blue Bunsen flame (1). Dip the loop in the solid/solution and hold it in the blue flame; observe the colour (1).` },
      { q: 'State the flame colours for lithium, sodium, potassium and copper(II) ions.', marks: 2, tier: 'green',
        modelAnswer: `Lithium — red/crimson; sodium — yellow; potassium — lilac; copper(II) — blue-green.\n(2 for all four; 1 for two or three.)` },
      { q: 'Describe the test for an alkene and give the result.', marks: 2, tier: 'green',
        modelAnswer: `Add bromine water and shake (1); it turns from orange to colourless (decolourises) (1).` },
      { q: 'State the name and formula of the first two members of the carboxylic acid homologous series.', marks: 2, tier: 'green',
        modelAnswer: `Methanoic acid, HCOOH (1); ethanoic acid, CH₃COOH (1).` },
    ],
    amber: [
      { q: 'Describe how to test a solution for halide ions and state the results for chloride, bromide and iodide.', marks: 4, tier: 'amber',
        modelAnswer: `• Add dilute nitric acid, then a few drops of silver nitrate solution (1).\n• Chloride — white precipitate (1).\n• Bromide — cream precipitate (1).\n• Iodide — yellow precipitate (1).` },
      { q: 'Describe how sodium hydroxide solution can be used to identify Al³⁺, Ca²⁺ and Cu²⁺ ions in solution.', marks: 4, tier: 'amber',
        modelAnswer: `• Add a few drops of sodium hydroxide solution, then add excess (1).\n• Al³⁺ — white precipitate that dissolves in excess to give a colourless solution (1).\n• Ca²⁺ — white precipitate that does not dissolve in excess (1).\n• Cu²⁺ — blue precipitate (1).` },
      { q: 'Describe how ethanol is produced by fermentation and how a concentrated solution of ethanol is then obtained.', marks: 4, tier: 'amber',
        modelAnswer: `• Mix sugar (glucose) solution with yeast in water (1).\n• Keep at about 30–35 °C (warm, but not so hot that the enzymes denature) and in the absence of air (anaerobic) (1).\n• Glucose → ethanol + carbon dioxide: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (1).\n• The dilute ethanol solution is separated and concentrated by fractional distillation (1).` },
      { q: 'Compare addition and condensation polymerisation, giving an example of each.', marks: 4, tier: 'amber',
        modelAnswer: `• Addition: monomers contain a C=C double bond; they join together and the polymer is the only product (1). Example: ethene → poly(ethene) (1).\n• Condensation: monomers have two functional groups (e.g. a diol and a dicarboxylic acid); each time a link forms, a small molecule such as water is also produced (1). Example: polyester (or a protein from amino acids, or starch from sugars) (1).` },
    ],
    red: [
      { q: 'Describe a core practical to compare the energy released when ethanol, propanol, butanol and pentanol are burned. Explain how the results should be processed, and identify the main sources of error.', marks: 6, tier: 'red',
        modelAnswer: `Method: measure a fixed volume/mass of water (e.g. 100 cm³) into a copper calorimeter clamped above a spirit burner; record the initial temperature; weigh the spirit burner containing alcohol (with cap on); light the burner and heat the water, stirring, until the temperature rises by a set amount (e.g. 20 °C); extinguish, re-weigh the burner; repeat with each alcohol keeping the distance from flame to calorimeter and volume of water constant.\nProcessing: calculate mass of alcohol burned; compare temperature rise per gram (or energy per gram/mole) for each alcohol; plot against number of carbon atoms — the energy released per mole increases as the chain length increases.\nSources of error: energy lost to the surroundings (heating air/apparatus), so values are lower than data-book values; incomplete combustion (soot on the calorimeter) means less energy is released; evaporation of alcohol from the wick when uncapped; heat absorbed by the calorimeter itself.\nImprovements: use a draught shield and lid; use a copper (good conductor) calorimeter; keep the cap on when weighing; repeat and average.\n(Level-based: 5–6 marks for a detailed, controlled method with correct processing and evaluation.)` },
      { q: 'Evaluate the use of nanoparticles in products such as sun creams, and compare the properties of nanoparticulate materials with the same materials in bulk.', marks: 6, tier: 'red',
        modelAnswer: `• Nanoparticles are 1–100 nm in size and have a very large surface area to volume ratio, so a much larger proportion of their atoms are at the surface. This can give them different properties from the same material in bulk, e.g. greater reactivity, effectiveness as catalysts, or being transparent rather than white.\n• In sun creams, nanoparticles of titanium dioxide or zinc oxide give better protection from UV radiation and better skin coverage without leaving a white layer.\n• Risks: nanoparticles may be absorbed through the skin or inhaled and could damage cells; they may be washed into the environment and harm living organisms; long-term effects are not yet fully known because the technology is relatively new.\n• Judgement: the benefits (reduced skin cancer risk, better product) are significant, but more research and regulation are needed; consumers should be informed through labelling.\n(Level-based: 5–6 marks for correct explanation of surface area to volume ratio and a balanced evaluation of benefits and risks.)` },
    ],
  },

};
