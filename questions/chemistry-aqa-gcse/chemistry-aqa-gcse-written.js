/*
 * AQA GCSE Chemistry (8462) — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 1-3 marks), 'amber' (describe/explain/calculate 3-5 marks), 'red' (evaluate/discuss/multi-step 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 * Uses Avogadro constant = 6.02 × 10²³ per mole, molar gas volume = 24 dm³ at room temperature and pressure
 */

const CHEMISTRY_AQA_GCSE_WRITTEN = {

  '4.1': {
    green: [
      {
        q: 'State the relative charge and relative mass of a proton, a neutron and an electron.',
        marks: 3, tier: 'green',
        modelAnswer: `• Proton: relative charge +1, relative mass 1\n• Neutron: relative charge 0, relative mass 1\n• Electron: relative charge −1, relative mass very small (≈ 1/1840, accept "negligible" or "0.0005")`
      },
      {
        q: 'State what is meant by an isotope.',
        marks: 2, tier: 'green',
        modelAnswer: `Isotopes are atoms of the same element that have the same number of protons but a different number of neutrons. They have the same atomic number but different mass numbers.`
      },
      {
        q: 'Give the electronic structure of a sodium atom (atomic number 11) and state which group of the periodic table sodium is in.',
        marks: 2, tier: 'green',
        modelAnswer: `• Electronic structure: 2,8,1\n• Sodium is in Group 1 (the alkali metals) because it has one electron in its outer shell.`
      },
      {
        q: 'State two differences between the properties of transition metals and Group 1 metals.',
        marks: 2, tier: 'green',
        modelAnswer: `Any two — compared with Group 1 metals, transition metals:\n• have higher melting points (except mercury)\n• have higher densities\n• are stronger and harder\n• are much less reactive (e.g. do not react vigorously with water or oxygen)\n• form ions with different charges\n• form coloured compounds\n• are useful as catalysts`
      },
    ],
    amber: [
      {
        q: 'Chlorine has two isotopes: chlorine-35 (75% abundance) and chlorine-37 (25% abundance). Calculate the relative atomic mass of chlorine. Show your working.',
        marks: 3, tier: 'amber',
        modelAnswer: `Aᵣ = (mass × abundance + mass × abundance) ÷ 100\nAᵣ = (35 × 75 + 37 × 25) ÷ 100\nAᵣ = (2625 + 925) ÷ 100\nAᵣ = 3550 ÷ 100 = 35.5`
      },
      {
        q: 'Describe how Mendeleev arranged the elements in his periodic table and explain why his table was eventually accepted by other scientists.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Mendeleev arranged the elements in order of atomic weight, but switched the order of some elements (e.g. tellurium and iodine) so that elements with similar properties lined up in the same group.\n• He left gaps for elements that he predicted had not yet been discovered.\n• He predicted the properties of these undiscovered elements from the properties of elements in the same group.\n• When elements such as gallium and germanium were later discovered and their properties closely matched his predictions, the table was accepted. (Later, the discovery of isotopes explained why order by atomic weight was not always correct.)`
      },
      {
        q: 'Explain why the reactivity of the Group 1 metals increases going down the group.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Group 1 metals react by losing their single outer-shell electron to form a 1+ ion.\n• Going down the group, the atoms get larger because they have more electron shells.\n• The outer electron is further from the nucleus and is shielded by more inner shells.\n• So there is a weaker attraction between the nucleus and the outer electron, and it is lost more easily — therefore reactivity increases.`
      },
      {
        q: 'Chlorine water is added to a solution of potassium bromide. Describe what you would observe, write a balanced equation for the reaction and explain why it happens.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Observation: the colourless solution turns orange (bromine is formed).\n• Equation: Cl₂ + 2KBr → 2KCl + Br₂\n• Explanation: this is a displacement reaction. Chlorine is more reactive than bromine because it is higher in Group 7; its atoms are smaller, so the outer shell is closer to the nucleus and it gains an electron more easily. Chlorine therefore displaces bromine from its salt solution.`
      },
    ],
    red: [
      {
        q: 'Describe how the model of the atom has changed over time. In your answer, refer to the plum pudding model, the alpha particle scattering experiment, and the contributions of Bohr and Chadwick.',
        marks: 6, tier: 'red',
        modelAnswer: `Early ideas:\n• Before the discovery of the electron, atoms were thought to be tiny spheres that could not be divided.\n\nPlum pudding model:\n• The discovery of the electron (Thomson) led to the plum pudding model: the atom is a ball of positive charge with negative electrons embedded in it.\n\nAlpha particle scattering experiment (Rutherford, Geiger and Marsden):\n• Alpha particles were fired at thin gold foil. Most passed straight through, showing the atom is mostly empty space.\n• Some were deflected and a very few bounced back, showing the mass and positive charge are concentrated in a tiny central nucleus.\n• This led to the nuclear model, which replaced the plum pudding model.\n\nBohr:\n• Bohr adapted the nuclear model by suggesting that electrons orbit the nucleus at specific distances (energy levels / shells). His theoretical calculations agreed with experimental observations.\n\nLater developments:\n• Further experiments showed the positive charge of the nucleus could be subdivided into smaller particles — protons.\n• About 20 years after the nucleus was accepted, Chadwick provided evidence for the existence of neutrons in the nucleus.\n\nConclusion: the model changed as new experimental evidence became available — a good example of how scientific models develop.`
      },
      {
        q: 'A student adds small pieces of lithium, sodium and potassium separately to water. Compare what the student would observe for each metal, write a balanced symbol equation for the reaction of sodium with water, and explain the trend in reactivity in terms of electronic structure.',
        marks: 8, tier: 'red',
        modelAnswer: `Observations:\n• Lithium: floats, fizzes steadily, moves slowly around the surface, gradually gets smaller.\n• Sodium: floats, fizzes rapidly, melts into a silvery ball and moves quickly around the surface.\n• Potassium: floats, fizzes very rapidly, melts, and the hydrogen ignites with a lilac flame; may spit or explode.\n• In each case, the solution formed is alkaline (universal indicator turns purple/blue).\n\nEquation:\n2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g)\n\nExplanation of trend:\n• All three have one electron in their outer shell (Li 2,1; Na 2,8,1; K 2,8,8,1), so they react in a similar way by losing this electron to form a 1+ ion.\n• Going down the group, each atom has an extra electron shell, so the atomic radius increases.\n• The outer electron is further from the nucleus and more shielded by inner shells.\n• The electrostatic attraction between the nucleus and the outer electron is weaker, so less energy is needed to remove it.\n• The electron is lost more easily, so reactivity increases: Li < Na < K.`
      },
    ],
  },

  '4.2': {
    green: [
      {
        q: 'State the three main types of strong chemical bond and the types of element involved in each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Ionic bonding — between a metal and a non-metal (oppositely charged ions).\n• Covalent bonding — between non-metals (shared pairs of electrons).\n• Metallic bonding — in metals and alloys (positive ions and delocalised electrons).`
      },
      {
        q: 'State what is meant by a covalent bond.',
        marks: 1, tier: 'green',
        modelAnswer: `A covalent bond is a shared pair of electrons between two atoms (usually non-metal atoms).`
      },
      {
        q: 'Give two properties of graphene and one possible use.',
        marks: 3, tier: 'green',
        modelAnswer: `Properties (any two):\n• It is a single layer of graphite — one atom thick.\n• Very strong.\n• Conducts electricity (has delocalised electrons).\n• Very light / low density.\n• Transparent.\nUse (any one): electronics, composites, touchscreens, strengthening materials.`
      },
      {
        q: 'State the approximate size range of nanoparticles and give one use of nanoparticles.',
        marks: 2, tier: 'green',
        modelAnswer: `• Nanoparticles are 1–100 nm across (1 nm = 1 × 10⁻⁹ m); they contain only a few hundred atoms.\n• Uses (any one): sun creams, catalysts, deodorants, medicine/drug delivery, electronics, cosmetics, fabrics (e.g. silver nanoparticles as antibacterial agents).`
      },
    ],
    amber: [
      {
        q: 'Describe how sodium and chlorine atoms form ionic bonds in sodium chloride. Include the electronic structures of the ions formed.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A sodium atom (2,8,1) transfers its outer electron to a chlorine atom (2,8,7).\n• Sodium becomes a sodium ion, Na⁺, with electronic structure [2,8]⁺.\n• Chlorine becomes a chloride ion, Cl⁻, with electronic structure [2,8,8]⁻.\n• Both ions have the stable electronic structure of a noble gas.\n• The oppositely charged ions are held together by strong electrostatic forces of attraction acting in all directions — this is the ionic bond.`
      },
      {
        q: 'Explain why sodium chloride has a high melting point and why it conducts electricity when molten but not when solid.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Sodium chloride has a giant ionic lattice.\n• There are strong electrostatic forces of attraction between the oppositely charged ions in all directions; a lot of energy is needed to overcome them, so the melting point is high.\n• When solid, the ions are held in fixed positions and cannot move, so it cannot conduct.\n• When molten (or dissolved), the ions are free to move and carry charge, so it conducts electricity.`
      },
      {
        q: 'Explain why methane (CH₄) is a gas at room temperature even though the bonds between its atoms are strong.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Methane is a simple molecular substance.\n• The covalent bonds within each molecule are strong, but these are not broken when it boils.\n• The intermolecular forces between methane molecules are weak.\n• Only a small amount of energy is needed to overcome these weak forces, so methane has a very low boiling point and is a gas at room temperature.`
      },
      {
        q: 'Explain why graphite conducts electricity and is soft, while diamond does not conduct electricity and is very hard.',
        marks: 5, tier: 'amber',
        modelAnswer: `Diamond:\n• Each carbon atom forms four strong covalent bonds in a rigid giant covalent structure, so it is very hard.\n• All outer electrons are used in bonding, so there are no delocalised electrons and it does not conduct electricity.\n\nGraphite:\n• Each carbon atom forms three covalent bonds, making layers of hexagonal rings.\n• There are no covalent bonds between the layers, only weak intermolecular forces, so the layers can slide over each other — graphite is soft and slippery.\n• Each carbon has one delocalised electron that can move through the structure and carry charge, so graphite conducts electricity.`
      },
    ],
    red: [
      {
        q: 'Compare the structure and bonding of sodium chloride, diamond, carbon dioxide and copper. Use your answer to explain the differences in their melting points and electrical conductivity.',
        marks: 8, tier: 'red',
        modelAnswer: `Sodium chloride (giant ionic lattice):\n• Na⁺ and Cl⁻ ions held by strong electrostatic attraction in all directions.\n• High melting point (lots of energy to overcome ionic bonds).\n• Conducts only when molten or dissolved (ions free to move); not as a solid.\n\nDiamond (giant covalent structure):\n• Each C atom covalently bonded to four others.\n• Very high melting point — many strong covalent bonds must be broken.\n• Does not conduct — no delocalised electrons or ions.\n\nCarbon dioxide (simple molecular):\n• Small molecules with strong covalent double bonds (C=O) within each molecule.\n• Weak intermolecular forces between molecules — low melting/boiling point; gas at room temperature.\n• Does not conduct — molecules have no overall charge and there are no free electrons.\n\nCopper (giant metallic structure):\n• Regular lattice of positive ions in a sea of delocalised electrons; strong metallic bonding (electrostatic attraction between ions and electrons).\n• High melting point — strong metallic bonds.\n• Conducts electricity as a solid and liquid — delocalised electrons move through the structure.\n\nSummary: melting point depends on the strength of the forces that must be overcome — strong bonds (ionic, covalent network, metallic) give high melting points; weak intermolecular forces give low ones. Conductivity requires charged particles that are free to move.`
      },
      {
        q: 'Evaluate the use of nanoparticles in products such as sun creams. In your answer explain why nanoparticles have different properties from the same material in bulk.',
        marks: 6, tier: 'red',
        modelAnswer: `Why nanoparticles behave differently:\n• Nanoparticles (1–100 nm) have a very high surface area to volume ratio. As the side of a cube decreases by a factor of 10, the surface area to volume ratio increases by a factor of 10.\n• A larger proportion of their atoms are at the surface, so smaller quantities are needed to be effective and they may have different properties (e.g. more reactive, better catalysts) compared with bulk material.\n\nBenefits in sun creams:\n• Nanoparticles (e.g. titanium dioxide, zinc oxide) give better protection from harmful UV rays.\n• They give better skin coverage and do not leave white marks on the skin.\n\nRisks and concerns:\n• Their small size means they may be absorbed through the skin or inhaled and enter cells, and the long-term health effects are not yet fully known.\n• They may cause damage to the environment when washed off (e.g. into water).\n• Products may not always be clearly labelled.\n\nEvaluation: nanoparticles provide clear benefits in sun creams, but because their effects on health and the environment are not fully understood, more research and regulation are needed. Their use is reasonable, but should be carefully monitored.`
      },
    ],
  },

  '4.3': {
    green: [
      {
        q: 'State the law of conservation of mass.',
        marks: 1, tier: 'green',
        modelAnswer: `No atoms are lost or made during a chemical reaction, so the total mass of the products equals the total mass of the reactants.`
      },
      {
        q: 'Calculate the relative formula mass (Mᵣ) of calcium carbonate, CaCO₃. (Aᵣ: Ca = 40, C = 12, O = 16)',
        marks: 2, tier: 'green',
        modelAnswer: `Mᵣ = 40 + 12 + (3 × 16)\nMᵣ = 40 + 12 + 48 = 100`
      },
      {
        q: 'State the value of the Avogadro constant and what it represents.',
        marks: 2, tier: 'green',
        modelAnswer: `• 6.02 × 10²³ per mole.\n• It is the number of atoms, molecules or ions in one mole of a substance.`
      },
      {
        q: 'State the volume occupied by one mole of any gas at room temperature and pressure.',
        marks: 1, tier: 'green',
        modelAnswer: `24 dm³ (24 000 cm³) at room temperature and pressure (20 °C and 1 atmosphere).`
      },
    ],
    amber: [
      {
        q: 'Calculate the mass of calcium oxide produced when 50 g of calcium carbonate is heated. CaCO₃ → CaO + CO₂ (Aᵣ: Ca = 40, C = 12, O = 16)',
        marks: 3, tier: 'amber',
        modelAnswer: `Mᵣ CaCO₃ = 100; Mᵣ CaO = 56\nMoles CaCO₃ = 50 ÷ 100 = 0.50 mol\nRatio 1 : 1, so moles CaO = 0.50 mol\nMass CaO = 0.50 × 56 = 28 g`
      },
      {
        q: 'When a metal carbonate is heated in an open container, the mass decreases. When magnesium is heated in air, the mass increases. Explain both observations using the law of conservation of mass.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Mass is always conserved in a reaction, but the apparent mass changes if a gas enters or leaves an open system.\n• Heating a metal carbonate produces carbon dioxide gas (e.g. CaCO₃ → CaO + CO₂), which escapes into the air, so the mass of solid left decreases.\n• Heating magnesium: magnesium reacts with oxygen from the air (2Mg + O₂ → 2MgO). The mass of the oxygen atoms is added to the solid, so the mass increases.\n• If all reactants and products were in a closed system, the total mass would not change.`
      },
      {
        q: 'In a reaction, the theoretical yield of a product is 12.0 g but only 9.0 g is obtained. Calculate the percentage yield and give two reasons why the yield is less than 100%.',
        marks: 4, tier: 'amber',
        modelAnswer: `Percentage yield = (mass of product actually made ÷ maximum theoretical mass) × 100\n= (9.0 ÷ 12.0) × 100 = 75%\n\nReasons (any two):\n• The reaction may be reversible, so it does not go to completion.\n• Some product may be lost when it is separated from the reaction mixture (e.g. filtering, transferring).\n• Some of the reactants may react in different (unexpected) side reactions.`
      },
      {
        q: 'Calculate the concentration, in mol/dm³, of a solution made by dissolving 4.0 g of sodium hydroxide (NaOH) in water to make 250 cm³ of solution. (Aᵣ: Na = 23, O = 16, H = 1)',
        marks: 3, tier: 'amber',
        modelAnswer: `Mᵣ NaOH = 23 + 16 + 1 = 40\nMoles = 4.0 ÷ 40 = 0.10 mol\nVolume = 250 ÷ 1000 = 0.250 dm³\nConcentration = 0.10 ÷ 0.250 = 0.40 mol/dm³\n(Also = 4.0 ÷ 0.250 = 16 g/dm³)`
      },
    ],
    red: [
      {
        q: 'Iron is made from iron(III) oxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂. (Aᵣ: Fe = 56, O = 16, C = 12) (a) Calculate the maximum mass of iron that can be made from 320 kg of iron(III) oxide. (b) Calculate the atom economy for making iron by this reaction. (c) Explain why a high atom economy is important for sustainable development.',
        marks: 8, tier: 'red',
        modelAnswer: `(a) Mᵣ Fe₂O₃ = (2 × 56) + (3 × 16) = 160\nMoles Fe₂O₃ = 320 000 g ÷ 160 = 2000 mol\nRatio Fe₂O₃ : Fe = 1 : 2, so moles Fe = 4000 mol\nMass Fe = 4000 × 56 = 224 000 g = 224 kg\n\n(b) Atom economy = (total Mᵣ of desired product ÷ total Mᵣ of all reactants) × 100\nMᵣ of reactants: Fe₂O₃ = 160; 3CO = 3 × 28 = 84; total = 244\nMᵣ of desired product: 2Fe = 112\nAtom economy = (112 ÷ 244) × 100 = 45.9%\n\n(c) Importance of high atom economy:\n• A high atom economy means a greater proportion of the reactant atoms end up in the useful product, so fewer raw materials are wasted.\n• Less waste product is made that has to be disposed of (or has to be dealt with as pollution, e.g. CO₂ here).\n• Uses natural resources more efficiently, conserving finite resources.\n• Usually more economical, reducing costs for industry.\n• When choosing a reaction pathway, chemists also consider yield, rate, equilibrium position and the usefulness of by-products.`
      },
      {
        q: 'A student titrates 25.0 cm³ of sodium hydroxide solution with 0.100 mol/dm³ hydrochloric acid. The mean titre is 20.0 cm³. NaOH + HCl → NaCl + H₂O. (a) Describe how the student should carry out the titration to obtain accurate results. (b) Calculate the concentration of the sodium hydroxide solution in mol/dm³ and in g/dm³. (Mᵣ NaOH = 40)',
        marks: 8, tier: 'red',
        modelAnswer: `(a) Method:\n• Use a pipette (and pipette filler) to measure exactly 25.0 cm³ of NaOH into a conical flask.\n• Add a few drops of a suitable indicator (e.g. phenolphthalein or methyl orange).\n• Fill a burette with the hydrochloric acid and record the starting volume (read at eye level, bottom of meniscus).\n• Add acid from the burette while swirling the flask; add drop by drop near the end point until the indicator just changes colour (e.g. phenolphthalein pink → colourless).\n• Record the final volume and calculate the titre.\n• Do a rough titration first, then repeat until concordant results (within 0.10 cm³) are obtained, and calculate the mean titre.\n• Placing the flask on a white tile helps to see the colour change.\n\n(b) Calculation:\nMoles HCl = 0.100 × (20.0 ÷ 1000) = 0.00200 mol\nRatio 1 : 1, so moles NaOH = 0.00200 mol\nConcentration NaOH = 0.00200 ÷ (25.0 ÷ 1000) = 0.0800 mol/dm³\nIn g/dm³: 0.0800 × 40 = 3.2 g/dm³`
      },
    ],
  },

  '4.4': {
    green: [
      {
        q: 'State the products formed when a metal reacts with dilute hydrochloric acid.',
        marks: 1, tier: 'green',
        modelAnswer: `A salt (a metal chloride) and hydrogen gas. (metal + hydrochloric acid → metal chloride + hydrogen)`
      },
      {
        q: 'Define oxidation and reduction in terms of electrons.',
        marks: 2, tier: 'green',
        modelAnswer: `• Oxidation is the loss of electrons.\n• Reduction is the gain of electrons.\n(OIL RIG: Oxidation Is Loss, Reduction Is Gain)`
      },
      {
        q: 'State the pH range of acidic, neutral and alkaline solutions and name the ions that make solutions acidic and alkaline.',
        marks: 3, tier: 'green',
        modelAnswer: `• Acidic: pH less than 7 — contains hydrogen ions, H⁺(aq).\n• Neutral: pH 7.\n• Alkaline: pH greater than 7 — contains hydroxide ions, OH⁻(aq).`
      },
      {
        q: 'State the difference between a strong acid and a weak acid, giving one example of each.',
        marks: 2, tier: 'green',
        modelAnswer: `• A strong acid is completely ionised in aqueous solution. Examples: hydrochloric, nitric, sulfuric acid.\n• A weak acid is only partially ionised in aqueous solution. Examples: ethanoic, citric, carbonic acid.`
      },
    ],
    amber: [
      {
        q: 'Describe how to prepare a pure, dry sample of copper sulfate crystals from copper oxide and dilute sulfuric acid.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Warm dilute sulfuric acid in a beaker (using a water bath or gentle heat).\n• Add copper oxide a little at a time, stirring, until no more dissolves (excess) — this makes sure all the acid has reacted.\n• Filter the mixture to remove the excess copper oxide.\n• Heat the filtrate in an evaporating basin to evaporate some of the water until crystals start to form (or until the solution is saturated).\n• Leave the solution to cool and crystallise; then filter off the crystals and dry them between filter paper (or in a warm oven).\nEquation: CuO + H₂SO₄ → CuSO₄ + H₂O`
      },
      {
        q: 'Write the ionic equation for the reaction between magnesium and copper sulfate solution. Identify which species is oxidised and which is reduced, giving a reason for each.',
        marks: 4, tier: 'amber',
        modelAnswer: `Ionic equation: Mg(s) + Cu²⁺(aq) → Mg²⁺(aq) + Cu(s)\n(Sulfate ions are spectator ions and are not included.)\n• Magnesium is oxidised — each Mg atom loses two electrons: Mg → Mg²⁺ + 2e⁻\n• Copper ions are reduced — each Cu²⁺ ion gains two electrons: Cu²⁺ + 2e⁻ → Cu\n• This is a displacement reaction because magnesium is more reactive than copper.`
      },
      {
        q: 'Explain why aluminium is extracted by electrolysis rather than by reduction with carbon, and why the aluminium oxide is dissolved in molten cryolite.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide — electrolysis must be used.\n• Aluminium oxide has a very high melting point (over 2000 °C).\n• Dissolving it in molten cryolite lowers the operating temperature (to about 950 °C).\n• This reduces the energy needed and therefore the cost, and the ions are still free to move so it conducts.`
      },
      {
        q: 'Predict the products at each electrode during the electrolysis of copper chloride solution and of sodium sulfate solution using inert electrodes. Explain your answers.',
        marks: 4, tier: 'amber',
        modelAnswer: `Copper chloride solution:\n• Cathode: copper — copper is less reactive than hydrogen, so Cu²⁺ ions are discharged.\n• Anode: chlorine — halide ions are present, so chlorine is produced.\n\nSodium sulfate solution:\n• Cathode: hydrogen — sodium is more reactive than hydrogen, so H⁺ ions (from water) are discharged instead.\n• Anode: oxygen — no halide ions are present (sulfate is not discharged), so OH⁻ ions are discharged to form oxygen.`
      },
    ],
    red: [
      {
        q: 'Describe the extraction of aluminium from aluminium oxide by electrolysis. Include the half equations at each electrode (Higher) and explain why the positive electrodes must be replaced regularly.',
        marks: 6, tier: 'red',
        modelAnswer: `• Aluminium oxide (Al₂O₃) is dissolved in molten cryolite to lower the melting point, saving energy. The ions (Al³⁺ and O²⁻) are free to move.\n• Both electrodes are made of graphite (carbon).\n• At the negative electrode (cathode), aluminium ions gain electrons and are reduced to aluminium:\nAl³⁺ + 3e⁻ → Al\n• Molten aluminium collects at the bottom of the cell and is tapped off.\n• At the positive electrode (anode), oxide ions lose electrons and are oxidised to oxygen:\n2O²⁻ → O₂ + 4e⁻\n• The positive electrodes are made of carbon. At the high operating temperature, the oxygen reacts with the carbon to form carbon dioxide (C + O₂ → CO₂).\n• The anodes therefore gradually burn away and must be replaced regularly.\n• The process is expensive because of the large amounts of electrical energy needed to melt the mixture and produce the current.`
      },
      {
        q: 'Evaluate the statement: "A strong acid is the same as a concentrated acid." In your answer explain what is meant by strong and weak acids and by dilute and concentrated solutions, and describe how pH changes with hydrogen ion concentration (Higher).',
        marks: 6, tier: 'red',
        modelAnswer: `The statement is incorrect — "strong" and "concentrated" describe different things.\n\nStrength:\n• A strong acid (e.g. hydrochloric acid) is completely ionised in aqueous solution: HCl → H⁺ + Cl⁻.\n• A weak acid (e.g. ethanoic acid) is only partially ionised: CH₃COOH ⇌ CH₃COO⁻ + H⁺.\n• For a given concentration, a strong acid has a lower pH than a weak acid.\n\nConcentration:\n• Concentration is the amount of acid (in mol or g) dissolved per dm³ of solution.\n• A dilute acid has a small amount of acid per dm³; a concentrated acid has a large amount.\n• It is possible to have a dilute solution of a strong acid, or a concentrated solution of a weak acid.\n\npH scale:\n• pH is a measure of hydrogen ion concentration — the lower the pH, the higher the H⁺ concentration.\n• As the pH decreases by one unit, the hydrogen ion concentration increases by a factor of 10.\n\nEvaluation: strength refers to the degree of ionisation, while concentration refers to the amount of acid in a given volume. A strong acid can be dilute, so the statement confuses two independent properties.`
      },
    ],
  },

  '4.5': {
    green: [
      {
        q: 'State what is meant by an exothermic reaction and give one everyday example.',
        marks: 2, tier: 'green',
        modelAnswer: `• An exothermic reaction transfers energy to the surroundings, so the temperature of the surroundings increases.\n• Examples (any one): combustion, many oxidation reactions, neutralisation, self-heating cans, hand warmers.`
      },
      {
        q: 'State what is meant by an endothermic reaction and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `• An endothermic reaction takes in energy from the surroundings, so the temperature of the surroundings decreases.\n• Examples (any one): thermal decomposition, reaction of citric acid with sodium hydrogencarbonate, sports injury cold packs.`
      },
      {
        q: 'State what is meant by the activation energy of a reaction.',
        marks: 1, tier: 'green',
        modelAnswer: `The activation energy is the minimum amount of energy that particles must have to react when they collide.`
      },
      {
        q: 'Name the reactants and the only product of a hydrogen fuel cell.',
        marks: 2, tier: 'green',
        modelAnswer: `• Reactants: hydrogen and oxygen.\n• Product: water only. (Overall: 2H₂ + O₂ → 2H₂O)`
      },
    ],
    amber: [
      {
        q: 'Describe how a reaction profile for an exothermic reaction differs from one for an endothermic reaction.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Both profiles show the energy of the reactants, the products and a "hump" representing the activation energy.\n• Exothermic: the products are at a lower energy level than the reactants; the overall energy change is negative — energy is released to the surroundings.\n• Endothermic: the products are at a higher energy level than the reactants; the overall energy change is positive — energy is taken in from the surroundings.\n• Activation energy is shown as the difference between the reactants and the highest point of the curve.`
      },
      {
        q: 'Explain, in terms of bond breaking and bond making, why some reactions are exothermic and others are endothermic.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Energy must be supplied to break bonds in the reactants — bond breaking is endothermic.\n• Energy is released when new bonds form in the products — bond making is exothermic.\n• If the energy released by forming new bonds is greater than the energy needed to break the existing bonds, the reaction is exothermic.\n• If the energy needed to break bonds is greater than the energy released by making bonds, the reaction is endothermic.`
      },
      {
        q: 'Describe a practical to investigate how the temperature change of a neutralisation reaction varies with the volume of sodium hydroxide added to hydrochloric acid.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Measure 30 cm³ of dilute hydrochloric acid into a polystyrene cup (placed in a beaker for stability) using a measuring cylinder.\n• Measure and record the starting temperature of the acid with a thermometer.\n• Add 5 cm³ of sodium hydroxide solution, stir, and record the highest temperature reached.\n• Repeat, adding 5 cm³ portions at a time, recording the maximum temperature after each addition, until about 40 cm³ has been added.\n• Repeat the whole experiment and calculate mean temperatures.\n• Plot temperature against volume of alkali; the maximum temperature occurs at the point of complete neutralisation.\n• Use a lid on the cup to reduce energy transfer to the surroundings; keep the concentrations and starting volume of acid the same (control variables).`
      },
      {
        q: 'Describe how a simple chemical cell produces a potential difference and state two factors that affect the voltage produced.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A simple cell is made by placing two different metals (electrodes) in contact with an electrolyte.\n• A chemical reaction between the metals and the electrolyte produces a potential difference, and electrons flow through an external circuit from the more reactive metal to the less reactive metal.\n• Factors affecting voltage (any two):\n  - The type of electrode metals (a bigger difference in reactivity gives a bigger voltage).\n  - The electrolyte used (and its concentration).\n• In non-rechargeable batteries (e.g. alkaline), the reaction stops when one reactant is used up.`
      },
    ],
    red: [
      {
        q: 'Hydrogen reacts with chlorine: H–H + Cl–Cl → 2H–Cl. Bond energies (kJ/mol): H–H = 436, Cl–Cl = 243, H–Cl = 432. (a) Calculate the overall energy change for the reaction. (b) State and explain whether the reaction is exothermic or endothermic. (c) Sketch and describe the reaction profile, labelling the activation energy and the overall energy change.',
        marks: 6, tier: 'red',
        modelAnswer: `(a) Energy needed to break bonds:\nH–H + Cl–Cl = 436 + 243 = 679 kJ/mol\nEnergy released making bonds:\n2 × H–Cl = 2 × 432 = 864 kJ/mol\nOverall energy change = energy in − energy out = 679 − 864 = −185 kJ/mol\n\n(b) The reaction is exothermic because more energy is released when the new H–Cl bonds are made than is used to break the H–H and Cl–Cl bonds. The energy change is negative.\n\n(c) Reaction profile:\n• Vertical axis: energy; horizontal axis: progress of reaction.\n• Reactants (H₂ + Cl₂) drawn at a higher level than products (2HCl).\n• Curve rises from the reactants to a peak, then falls to the products.\n• Activation energy: arrow from the reactants level up to the peak.\n• Overall energy change (−185 kJ/mol): downward arrow from reactants level to products level.`
      },
      {
        q: 'Evaluate the use of hydrogen fuel cells compared with rechargeable lithium-ion batteries for powering electric vehicles. Include the half equations for the reactions in a hydrogen fuel cell (Higher).',
        marks: 8, tier: 'red',
        modelAnswer: `How a hydrogen fuel cell works:\n• Hydrogen is oxidised electrochemically to produce a potential difference; the only product is water.\n• At the negative electrode: 2H₂ → 4H⁺ + 4e⁻ (hydrogen is oxidised).\n• At the positive electrode: O₂ + 4H⁺ + 4e⁻ → 2H₂O (oxygen is reduced).\n• Overall: 2H₂ + O₂ → 2H₂O\n\nAdvantages of hydrogen fuel cells:\n• Only waste product is water — no CO₂ or pollutants at the point of use.\n• Do not need to be electrically recharged; refuelling is quick.\n• Do not run down or lose capacity like batteries, and have fewer parts to dispose of.\n• Can provide a continuous supply as long as fuel is provided.\n\nDisadvantages of hydrogen fuel cells:\n• Hydrogen is a gas — difficult and expensive to store; needs high pressure tanks and is flammable/explosive.\n• Hydrogen is often produced from fossil fuels (e.g. from methane) or by electrolysis using electricity that may come from fossil fuels.\n• Few hydrogen refuelling stations; fuel cells are expensive.\n\nRechargeable batteries:\n• Advantages: well-developed technology and widespread charging network; cheaper to produce; easy to store electrical energy.\n• Disadvantages: limited number of recharge cycles; take a long time to recharge; contain toxic metal compounds that are difficult to dispose of; electricity for recharging may come from fossil fuels.\n\nEvaluation: fuel cells are potentially cleaner and more convenient to refuel, but storage and production of hydrogen are major problems. Batteries are currently more practical. The environmental benefit of either depends heavily on how the hydrogen or the electricity is produced.`
      },
    ],
  },

  '4.6': {
    green: [
      {
        q: 'State the equation used to calculate the mean rate of a reaction.',
        marks: 1, tier: 'green',
        modelAnswer: `Mean rate of reaction = quantity of reactant used ÷ time taken\nor\nMean rate of reaction = quantity of product formed ÷ time taken\n(Units e.g. g/s or cm³/s; Higher: mol/s)`
      },
      {
        q: 'State four factors that affect the rate of a chemical reaction.',
        marks: 2, tier: 'green',
        modelAnswer: `Any four:\n• Concentration of reactants in solution\n• Pressure of reacting gases\n• Surface area of solid reactants\n• Temperature\n• Presence of a catalyst`
      },
      {
        q: 'State what is meant by a catalyst.',
        marks: 2, tier: 'green',
        modelAnswer: `A catalyst is a substance that changes (increases) the rate of a chemical reaction but is not used up in the reaction. It provides a different reaction pathway with a lower activation energy. (Enzymes act as catalysts in biological systems.)`
      },
      {
        q: 'State what is meant by dynamic equilibrium.',
        marks: 2, tier: 'green',
        modelAnswer: `Dynamic equilibrium occurs in a reversible reaction in a closed system when the forward and reverse reactions occur at exactly the same rate, so the concentrations of reactants and products remain constant.`
      },
    ],
    amber: [
      {
        q: 'Explain, using collision theory, why increasing the temperature increases the rate of a reaction.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Reactions happen when particles collide with sufficient energy (at least the activation energy).\n• At a higher temperature, particles have more kinetic energy and move faster.\n• So they collide more frequently.\n• Also, a greater proportion of collisions have energy equal to or greater than the activation energy, so more collisions are successful.\n• The frequency of successful collisions increases, so the rate increases.`
      },
      {
        q: 'Describe how to investigate the effect of concentration on the rate of reaction between sodium thiosulfate and hydrochloric acid using a method involving a change in colour or turbidity.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Draw a black cross on a piece of paper and place a conical flask on top of it.\n• Measure a known volume (e.g. 10 cm³) of sodium thiosulfate solution of a known concentration into the flask, and make up to a fixed total volume with water.\n• Add a fixed volume (e.g. 10 cm³) of hydrochloric acid, swirl and start a stopwatch.\n• Look down through the solution and stop the clock when the cross can no longer be seen (a yellow sulfur precipitate makes the mixture cloudy).\n• Repeat with different concentrations of sodium thiosulfate (by changing the ratio of thiosulfate to water), keeping the total volume, acid concentration and temperature the same.\n• Repeat each concentration and calculate a mean; rate is proportional to 1/time.`
      },
      {
        q: 'Explain how increasing the surface area of a solid reactant affects the rate of reaction.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Breaking a solid into smaller pieces (or using a powder) increases its surface area to volume ratio.\n• More particles of the solid are exposed and available to collide with the other reactant.\n• This increases the frequency of collisions, so the rate of reaction increases.`
      },
      {
        q: 'Ammonium chloride decomposes reversibly: NH₄Cl ⇌ NH₃ + HCl. The forward reaction is endothermic. State what happens to the energy in each direction and how the position of equilibrium shifts if the temperature is increased.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The forward reaction (decomposition) is endothermic — it takes in energy from the surroundings.\n• The reverse reaction is exothermic — the same amount of energy is transferred to the surroundings.\n• If the temperature is increased, the equilibrium shifts in the direction of the endothermic reaction (to oppose the change).\n• So the position of equilibrium moves to the right — the relative amount of NH₃ and HCl increases.`
      },
    ],
    red: [
      {
        q: 'The Haber process is a reversible reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). The forward reaction is exothermic. Use Le Chatelier\'s principle to explain the effect of temperature and pressure on the yield of ammonia, and explain why the conditions used in industry (450 °C, 200 atm, iron catalyst) are a compromise.',
        marks: 8, tier: 'red',
        modelAnswer: `Le Chatelier's principle: if a system at equilibrium is subjected to a change in conditions, the position of equilibrium shifts to counteract the change.\n\nTemperature:\n• The forward reaction is exothermic. Lowering the temperature shifts the equilibrium to the right (exothermic direction), increasing the yield of ammonia.\n• However, a low temperature makes the rate of reaction very slow.\n• 450 °C is a compromise between a reasonable yield and a fast enough rate.\n\nPressure:\n• There are 4 molecules of gas on the left (1 N₂ + 3 H₂) and 2 on the right (2 NH₃).\n• Increasing pressure shifts equilibrium to the side with fewer molecules of gas — to the right — increasing the yield of ammonia. Higher pressure also increases the rate.\n• However, very high pressures are expensive to produce (energy costs) and need strong, expensive equipment, and are more dangerous.\n• 200 atm is a compromise between yield, rate, cost and safety.\n\nCatalyst:\n• Iron increases the rate at which equilibrium is reached, but does not change the position of equilibrium or the yield.\n• It allows a reasonable rate at a lower temperature.\n\nAlso: unreacted nitrogen and hydrogen are recycled, so overall very little is wasted even though each pass gives a yield of only around 15–30%.`
      },
      {
        q: 'Magnesium ribbon reacts with excess hydrochloric acid. A student collects the hydrogen in a gas syringe: 0 s 0 cm³; 20 s 30 cm³; 40 s 50 cm³; 60 s 60 cm³; 80 s 64 cm³; 100 s 64 cm³. (a) Calculate the mean rate over the first 40 s. (b) Describe how the rate changes during the reaction and explain why using collision theory. (c) Describe how the student could find the rate at exactly 30 s (Higher).',
        marks: 6, tier: 'red',
        modelAnswer: `(a) Mean rate = volume of gas ÷ time = 50 ÷ 40 = 1.25 cm³/s\n\n(b) Change in rate:\n• The rate is fastest at the start (the steepest part of the graph).\n• The rate decreases as the reaction proceeds (the gradient becomes less steep).\n• The reaction stops at around 80 s (no more gas is produced; the line is horizontal at 64 cm³).\nExplanation:\n• At the start, the concentration of acid and surface area of magnesium are highest, so there are the most frequent collisions.\n• As magnesium is used up, there are fewer particles to collide, so the frequency of successful collisions decreases.\n• The reaction stops when all the magnesium (the limiting reactant) has reacted.\n\n(c) Rate at 30 s:\n• Plot a graph of volume (y-axis) against time (x-axis) and draw a smooth curve of best fit.\n• Draw a tangent to the curve at t = 30 s.\n• Calculate the gradient of the tangent = change in y ÷ change in x. This gives the rate at 30 s in cm³/s.`
      },
    ],
  },

  '4.7': {
    green: [
      {
        q: 'State what is meant by a hydrocarbon and give the general formula of the alkanes.',
        marks: 2, tier: 'green',
        modelAnswer: `• A hydrocarbon is a compound made of hydrogen and carbon atoms only.\n• General formula of alkanes: CₙH₂ₙ₊₂`
      },
      {
        q: 'Name the first four alkanes and give their molecular formulae.',
        marks: 2, tier: 'green',
        modelAnswer: `• Methane — CH₄\n• Ethane — C₂H₆\n• Propane — C₃H₈\n• Butane — C₄H₁₀`
      },
      {
        q: 'Describe the test for an alkene and give the result.',
        marks: 2, tier: 'green',
        modelAnswer: `• Add bromine water to the substance and shake.\n• Alkene: bromine water changes from orange to colourless.\n• (Alkane: bromine water stays orange.)`
      },
      {
        q: 'State the functional group of the alcohols and of the carboxylic acids.',
        marks: 2, tier: 'green',
        modelAnswer: `• Alcohols: the –OH (hydroxyl) functional group.\n• Carboxylic acids: the –COOH (carboxyl) functional group.`
      },
    ],
    amber: [
      {
        q: 'Describe how crude oil is separated into fractions by fractional distillation.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Crude oil is heated until it evaporates (vaporises) and is fed into the bottom of a fractionating column.\n• The column has a temperature gradient — hot at the bottom and cooler at the top.\n• The vapours rise up the column and condense at different heights when they reach a temperature below their boiling point.\n• Hydrocarbons with long chains have high boiling points and condense near the bottom; short-chain hydrocarbons have low boiling points and rise higher or leave at the top as gases.\n• Each fraction contains molecules with a similar number of carbon atoms and is collected at a different level.`
      },
      {
        q: 'Explain why cracking is carried out and describe two methods of cracking.',
        marks: 4, tier: 'amber',
        modelAnswer: `Why:\n• There is a greater demand for short-chain hydrocarbons (e.g. petrol) than the supply from fractional distillation, and too much of the long-chain fractions.\n• Cracking breaks long-chain hydrocarbons into shorter, more useful alkanes and alkenes; alkenes are used to make polymers and as starting materials for other chemicals.\n\nMethods:\n• Catalytic cracking: vaporise the hydrocarbons and pass them over a hot catalyst (e.g. aluminium oxide / zeolite).\n• Steam cracking: mix the hydrocarbon vapour with steam and heat to a very high temperature.\nExample: C₁₀H₂₂ → C₈H₁₈ + C₂H₄`
      },
      {
        q: 'Describe the reaction between ethanoic acid and ethanol. Name the product and the type of compound formed, and state the conditions needed.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Ethanoic acid reacts with ethanol to produce ethyl ethanoate and water.\n• CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O\n• Ethyl ethanoate is an ester; esters are volatile, have distinctive fruity smells, and are used in flavourings and perfumes.\n• Conditions: an acid catalyst (concentrated sulfuric acid) and warming.`
      },
      {
        q: 'Compare addition polymerisation and condensation polymerisation.',
        marks: 4, tier: 'amber',
        modelAnswer: `Addition polymerisation:\n• Monomers contain a C=C double bond (alkenes, e.g. ethene → poly(ethene)).\n• Many monomers join together; the double bond opens up.\n• Only one product is formed — the polymer; the repeating unit has the same atoms as the monomer.\n\nCondensation polymerisation:\n• Monomers have two functional groups (e.g. a diol and a dicarboxylic acid).\n• Monomers join together and a small molecule (e.g. water) is lost each time a link is formed.\n• Two products are formed — the polymer and the small molecule (e.g. polyesters).`
      },
    ],
    red: [
      {
        q: 'Describe how the properties of the hydrocarbons in crude oil change as the chain length increases, and explain how these properties influence their use as fuels. Include a balanced equation for the complete combustion of propane.',
        marks: 6, tier: 'red',
        modelAnswer: `Trends with increasing molecular size (chain length):\n• Boiling point increases — larger molecules have stronger intermolecular forces, so more energy is needed to separate them.\n• Viscosity increases — longer molecules flow less easily.\n• Flammability decreases — longer-chain hydrocarbons are harder to ignite.\n\nEffect on use as fuels:\n• Short-chain hydrocarbons (e.g. petrol, LPG) are volatile, runny and very flammable — they ignite easily and burn cleanly, making them very useful fuels and in high demand.\n• Long-chain hydrocarbons (e.g. fuel oil, bitumen) are viscous, have high boiling points and are hard to ignite, so are less useful as fuels — they are often cracked into shorter chains.\n• Medium fractions such as diesel and kerosene are used for vehicles and aircraft.\n\nComplete combustion of propane:\nC₃H₈ + 5O₂ → 3CO₂ + 4H₂O\nComplete combustion of hydrocarbons oxidises the carbon and hydrogen to carbon dioxide and water, releasing energy.`
      },
      {
        q: 'Compare the production of ethanol by fermentation and by the hydration of ethene. Include equations and evaluate each method in terms of rate, purity, resources and sustainability.',
        marks: 8, tier: 'red',
        modelAnswer: `Fermentation:\n• Sugar solution (glucose) is fermented using yeast at 30–35 °C, in anaerobic conditions.\n• C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂\n• Raw material: sugar from plants (e.g. sugar cane) — a renewable resource.\n• Slow batch process; produces dilute (impure) aqueous ethanol that must be purified by fractional distillation.\n• Low temperature, so low energy costs; cheap simple equipment.\n• The CO₂ released was absorbed by the plants during photosynthesis, so the process is close to carbon neutral (though farming, transport and distillation release some CO₂).\n• Uses land that could be used to grow food.\n\nHydration of ethene:\n• Ethene and steam are passed over a phosphoric acid catalyst at around 300 °C and 60–70 atm.\n• C₂H₄ + H₂O ⇌ C₂H₅OH\n• Raw material: ethene, obtained by cracking crude oil — a finite, non-renewable resource.\n• Fast, continuous process; produces pure ethanol; 100% atom economy.\n• High temperature and pressure — high energy costs and expensive equipment.\n\nEvaluation:\n• Hydration is faster and gives purer product, making it attractive where crude oil is cheap and plentiful.\n• Fermentation is more sustainable as it uses renewable raw materials, and is preferred in countries with lots of land and suitable climates for growing sugar cane.\n• As crude oil runs out, fermentation is likely to become more important, but its slow rate and need for distillation are disadvantages.`
      },
    ],
  },

  '4.8': {
    green: [
      {
        q: 'State what is meant by a pure substance in chemistry.',
        marks: 1, tier: 'green',
        modelAnswer: `A pure substance is a single element or compound, not mixed with any other substance. Pure substances melt and boil at specific (fixed) temperatures.`
      },
      {
        q: 'State what is meant by a formulation and give two examples.',
        marks: 2, tier: 'green',
        modelAnswer: `• A formulation is a mixture that has been designed as a useful product. The components are mixed in measured quantities to ensure the product has the required properties.\n• Examples (any two): fuels, cleaning agents, paints, medicines, alloys, fertilisers, foods.`
      },
      {
        q: 'Describe the tests for hydrogen, oxygen and carbon dioxide, and give the positive result for each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Hydrogen: hold a burning splint at the mouth of the test tube — burns with a squeaky pop.\n• Oxygen: insert a glowing splint into the test tube — the splint relights.\n• Carbon dioxide: bubble the gas through limewater (calcium hydroxide solution) — limewater turns milky (cloudy).`
      },
      {
        q: 'State the flame test colours for lithium, sodium, potassium, calcium and copper ions.',
        marks: 3, tier: 'green',
        modelAnswer: `• Lithium (Li⁺): crimson\n• Sodium (Na⁺): yellow\n• Potassium (K⁺): lilac\n• Calcium (Ca²⁺): orange-red\n• Copper (Cu²⁺): green`
      },
    ],
    amber: [
      {
        q: 'In a chromatography experiment, a spot moves 3.6 cm and the solvent front moves 8.0 cm from the start line. Calculate the Rf value and explain why different substances have different Rf values.',
        marks: 4, tier: 'amber',
        modelAnswer: `Rf = distance moved by substance ÷ distance moved by solvent\nRf = 3.6 ÷ 8.0 = 0.45\n\nExplanation:\n• Chromatography involves a stationary phase (the paper) and a mobile phase (the solvent).\n• Separation depends on the distribution of each substance between the phases.\n• Substances that are more attracted to the solvent (more soluble) and less attracted to the paper spend more time in the mobile phase and move further, giving a higher Rf value.`
      },
      {
        q: 'Describe how to use sodium hydroxide solution to identify Al³⁺, Ca²⁺, Mg²⁺, Cu²⁺, Fe²⁺ and Fe³⁺ ions in solution.',
        marks: 5, tier: 'amber',
        modelAnswer: `Add a few drops of sodium hydroxide solution to the test solution and observe the colour of the precipitate:\n• Al³⁺: white precipitate that dissolves in excess sodium hydroxide.\n• Ca²⁺: white precipitate (does not dissolve in excess).\n• Mg²⁺: white precipitate (does not dissolve in excess).\n• Cu²⁺: blue precipitate.\n• Fe²⁺: green precipitate.\n• Fe³⁺: brown precipitate.\n(Ca²⁺ and Mg²⁺ can be distinguished using a flame test — calcium gives orange-red, magnesium gives no colour.)`
      },
      {
        q: 'Describe the tests for carbonate, sulfate and halide ions in a solution.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Carbonate (CO₃²⁻): add dilute acid — effervescence; bubble the gas through limewater, which turns milky (CO₂ produced).\n• Sulfate (SO₄²⁻): add dilute hydrochloric acid, then barium chloride solution — a white precipitate (barium sulfate) forms.\n• Halides: add dilute nitric acid, then silver nitrate solution:\n  - Chloride: white precipitate\n  - Bromide: cream precipitate\n  - Iodide: yellow precipitate`
      },
      {
        q: 'Explain why a flame test may not be reliable for identifying metal ions in a mixture, and describe one advantage of instrumental methods such as flame emission spectroscopy.',
        marks: 4, tier: 'amber',
        modelAnswer: `• If a sample contains a mixture of metal ions, the flame colours of some ions may be masked by others (e.g. the strong yellow of sodium can hide other colours).\n• Flame emission spectroscopy: the sample is put into a flame and the light emitted passes through a spectroscope, producing a line spectrum that can be analysed to identify the metal ions and measure their concentrations.\n• Advantages of instrumental methods (any one): accurate, sensitive (can detect very small amounts), rapid; can identify ions in mixtures and measure concentration.`
      },
    ],
    red: [
      {
        q: 'Describe how a student could use paper chromatography to identify the colours in an unknown ink and show whether the ink is pure or a mixture. Explain how the results would be interpreted.',
        marks: 6, tier: 'red',
        modelAnswer: `Method:\n• Draw a start line in pencil (not ink — pencil does not dissolve) about 1–2 cm from the bottom of the chromatography paper.\n• Place a small spot of the unknown ink and spots of known reference inks/dyes on the line.\n• Place the paper in a beaker containing a small amount of solvent (e.g. water), making sure the solvent level is below the start line (so the spots do not dissolve into the solvent).\n• Put a lid on the beaker to reduce evaporation, and leave until the solvent has moved most of the way up the paper.\n• Remove the paper, mark the solvent front in pencil, and allow to dry.\n\nInterpretation:\n• A pure substance produces a single spot in all solvents.\n• A mixture separates into two or more spots.\n• Compare the positions of the spots with the reference substances — spots at the same height (same Rf value, in the same solvent) are likely to be the same substance.\n• Calculate Rf = distance moved by spot ÷ distance moved by solvent for each spot.\n• A spot that remains on the start line is insoluble in that solvent; a different solvent could be tried.`
      },
      {
        q: 'A student is given an unknown white solid. Plan a series of chemical tests to show that it is calcium bromide, describing what the student would observe at each stage.',
        marks: 6, tier: 'red',
        modelAnswer: `Testing for the metal ion (Ca²⁺):\n• Flame test: clean a nichrome wire loop (dip in hydrochloric acid and heat until no colour), dip in the solid and hold in a blue Bunsen flame. Observation: orange-red flame, indicating calcium ions.\n• Confirmatory test: dissolve some solid in distilled water and add a few drops of sodium hydroxide solution. Observation: a white precipitate that does not dissolve in excess (rules out Al³⁺). Together with the orange-red flame this confirms Ca²⁺ rather than Mg²⁺.\n\nTesting for the negative ion (Br⁻):\n• Dissolve some solid in water. Add dilute nitric acid (to remove carbonate ions that would otherwise also give a precipitate), then silver nitrate solution.\n• Observation: a cream precipitate (silver bromide), indicating bromide ions.\n\nRuling out other ions (optional for completeness):\n• Adding dilute acid gives no fizzing — no carbonate present.\n• Adding hydrochloric acid and barium chloride gives no white precipitate — no sulfate present.\n\nConclusion: orange-red flame + white precipitate with NaOH (insoluble in excess) + cream precipitate with acidified silver nitrate identifies the solid as calcium bromide, CaBr₂.`
      },
    ],
  },

  '4.9': {
    green: [
      {
        q: 'State the approximate proportions of the main gases in the Earth\'s atmosphere today.',
        marks: 2, tier: 'green',
        modelAnswer: `• About four-fifths (≈ 80%) nitrogen.\n• About one-fifth (≈ 20%) oxygen.\n• Small proportions of other gases, including carbon dioxide, water vapour and noble gases (e.g. argon).`
      },
      {
        q: 'Name three greenhouse gases.',
        marks: 2, tier: 'green',
        modelAnswer: `Any three: carbon dioxide (CO₂), methane (CH₄), water vapour (H₂O).`
      },
      {
        q: 'Write the word and balanced symbol equations for photosynthesis.',
        marks: 2, tier: 'green',
        modelAnswer: `• carbon dioxide + water → glucose + oxygen\n• 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂`
      },
      {
        q: 'Name two pollutants produced when fossil fuels are burned and state one effect of each.',
        marks: 2, tier: 'green',
        modelAnswer: `Any two:\n• Carbon monoxide — toxic; binds to haemoglobin and reduces the blood's ability to carry oxygen (colourless and odourless so not easily detected).\n• Sulfur dioxide — causes acid rain and respiratory problems.\n• Oxides of nitrogen — cause acid rain and respiratory problems.\n• Particulates (soot, unburnt hydrocarbons) — cause global dimming and health problems (lung damage).`
      },
    ],
    amber: [
      {
        q: 'Describe how the Earth\'s early atmosphere is thought to have formed and what it was composed of.',
        marks: 4, tier: 'amber',
        modelAnswer: `• During the first billion years of the Earth's existence there was intense volcanic activity.\n• Volcanoes released gases that formed the early atmosphere, and water vapour that condensed to form the oceans.\n• The early atmosphere was probably mainly carbon dioxide, with little or no oxygen — like the atmospheres of Mars and Venus today.\n• Volcanoes also produced nitrogen, which gradually built up, and may have produced small proportions of methane and ammonia.`
      },
      {
        q: 'Explain how the amount of carbon dioxide in the atmosphere decreased over billions of years.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As water vapour condensed to form the oceans, carbon dioxide dissolved in the water.\n• Carbonates were precipitated, producing sediments.\n• Algae and plants absorbed carbon dioxide for photosynthesis, also producing oxygen.\n• Carbon was locked up in sedimentary rocks such as limestone (from shells and skeletons of marine organisms) and in fossil fuels (coal from plant deposits; crude oil and natural gas from plankton buried in mud).`
      },
      {
        q: 'Explain how greenhouse gases in the atmosphere keep the Earth warm.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Electromagnetic radiation at most wavelengths from the Sun passes through the atmosphere.\n• The Earth absorbs some of this radiation and warms up, then radiates thermal energy as longer-wavelength infrared radiation.\n• Greenhouse gases (CO₂, CH₄, water vapour) absorb some of this outgoing infrared radiation and re-emit it in all directions, including back towards the Earth.\n• This reduces the amount of energy lost to space, so the temperature of the atmosphere and surface is higher than it would otherwise be.`
      },
      {
        q: 'State what is meant by a carbon footprint and describe two ways it can be reduced.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Carbon footprint: the total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service or event.\n\nWays to reduce it (any two):\n• Increased use of alternative energy supplies (renewables, nuclear).\n• Energy conservation (e.g. better insulation, efficient appliances).\n• Carbon capture and storage.\n• Carbon taxes and licences to discourage emissions.\n• Carbon offsetting, including tree planting.\n• Using carbon-neutral fuels.`
      },
    ],
    red: [
      {
        q: 'Evaluate the evidence that human activities are causing climate change. In your answer, describe the human activities involved, the potential effects of climate change, and the uncertainties in the evidence.',
        marks: 8, tier: 'red',
        modelAnswer: `Human activities increasing greenhouse gases:\n• Burning fossil fuels (power stations, transport) releases carbon dioxide.\n• Deforestation reduces photosynthesis, so less CO₂ is removed, and burning trees releases CO₂.\n• Animal farming (cattle) and decomposition of rubbish in landfill release methane.\n\nEvidence:\n• Measurements show the concentration of CO₂ in the atmosphere has increased significantly since the industrial revolution, matching the increase in fossil fuel use.\n• Global average temperatures have risen over the same period.\n• Based on peer-reviewed evidence, many scientists believe that human activities will cause the temperature of the Earth's atmosphere to increase at the surface and that this will result in global climate change.\n\nPotential effects:\n• Rising sea levels (melting ice, thermal expansion) causing flooding and coastal erosion.\n• More frequent and severe storms; changes in the amount, timing and distribution of rainfall.\n• Temperature and water stress for humans and wildlife.\n• Changes in food-producing capacity and in the distribution of wildlife species.\n\nUncertainties:\n• It is difficult to model such complex systems as global climate change, so simplified models are used.\n• Historical data are less accurate and less widespread than current measurements.\n• This leads to simplified explanations and speculation in the media that may not be based on valid evidence.\n\nEvaluation: although there are uncertainties in the models and historical data, the strong correlation between rising CO₂ from human activity and rising temperatures, supported by peer-reviewed research, provides convincing evidence that humans are contributing to climate change.`
      },
      {
        q: 'Explain how oxygen built up in the Earth\'s atmosphere, and why the proportion of carbon dioxide fell from a large percentage to the small amount present today.',
        marks: 6, tier: 'red',
        modelAnswer: `Build-up of oxygen:\n• Algae first produced oxygen by photosynthesis about 2.7 billion years ago.\n• Over the next billion years, plants evolved and the percentage of oxygen gradually increased to a level that enabled animals to evolve.\n• 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\nDecrease in carbon dioxide:\n• Photosynthesis by algae and plants removed carbon dioxide from the atmosphere.\n• Carbon dioxide dissolved in the oceans as they formed; carbonates were precipitated, producing sediments.\n• Formation of sedimentary rocks: limestone formed from the shells and skeletons of marine organisms (calcium carbonate).\n• Formation of fossil fuels: coal from thick deposits of plant material; crude oil and natural gas from plankton deposited in muds on the sea floor.\n• These processes locked carbon away in rocks and fossil fuels for millions of years.\n\nResult: the atmosphere changed from mostly CO₂ with little oxygen to today's composition of about 80% nitrogen, 20% oxygen and only a very small proportion (about 0.04%) of carbon dioxide.`
      },
    ],
  },

  '4.10': {
    green: [
      {
        q: 'State what is meant by potable water.',
        marks: 1, tier: 'green',
        modelAnswer: `Potable water is water that is safe to drink. It is not pure — it contains low levels of dissolved salts and microbes.`
      },
      {
        q: 'State two conditions needed for iron to rust.',
        marks: 2, tier: 'green',
        modelAnswer: `• Water\n• Oxygen (air)\n(Both are needed for rusting to occur.)`
      },
      {
        q: 'Name the elements supplied by NPK fertilisers.',
        marks: 2, tier: 'green',
        modelAnswer: `• Nitrogen (N)\n• Phosphorus (P)\n• Potassium (K)`
      },
      {
        q: 'Give the composition and one use of each of the alloys bronze and brass.',
        marks: 3, tier: 'green',
        modelAnswer: `• Bronze: copper and tin. Uses: statues, medals, decorative objects, ship propellers.\n• Brass: copper and zinc. Uses: water taps, door fittings, musical instruments.`
      },
    ],
    amber: [
      {
        q: 'Describe how fresh water from a reservoir is treated to make it potable in the UK.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Choose an appropriate source of fresh water (e.g. a reservoir, river or groundwater).\n• Pass the water through filter beds to remove solids.\n• Sterilise the water to kill microbes. Sterilising agents include chlorine, ozone or ultraviolet light.`
      },
      {
        q: 'Describe the main stages in the treatment of sewage (waste water).',
        marks: 5, tier: 'amber',
        modelAnswer: `• Screening and grit removal — remove large materials and grit.\n• Sedimentation — produces sewage sludge (solid that settles) and effluent (liquid).\n• The sewage sludge is broken down by anaerobic digestion (producing biogas and fertiliser).\n• The effluent is treated by aerobic biological treatment (bacteria break down organic matter using oxygen).\n• The treated water can then be safely released into rivers or the sea.`
      },
      {
        q: 'Describe the phytomining and bioleaching methods used to extract copper from low-grade ores.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Phytomining: plants are grown on soil containing copper compounds; the plants absorb metal compounds. The plants are harvested and burned to produce ash that contains metal compounds.\n• Bioleaching: bacteria are used to produce leachate solutions that contain metal compounds.\n• Copper can then be obtained from the solutions by displacement using scrap iron, or by electrolysis.\n• These methods avoid traditional mining (digging, moving and disposing of large amounts of rock).`
      },
      {
        q: 'Explain how galvanising and sacrificial protection prevent iron from corroding.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Galvanising coats iron with a layer of zinc. The zinc acts as a barrier, preventing water and oxygen from reaching the iron.\n• If the zinc coating is scratched, the zinc still protects the iron by sacrificial protection.\n• Sacrificial protection: a more reactive metal (e.g. zinc or magnesium) is attached to the iron. The more reactive metal is oxidised (loses electrons) in preference to the iron, so the iron does not corrode.\n• Blocks of zinc or magnesium are used to protect ship hulls and pipelines.`
      },
    ],
    red: [
      {
        q: 'A company is choosing between a glass bottle and a plastic (PET) bottle for a soft drink. Using life cycle assessment (LCA), evaluate the environmental impact of each choice.',
        marks: 6, tier: 'red',
        modelAnswer: `LCAs assess the environmental impact at each stage of a product's life: extracting and processing raw materials; manufacturing and packaging; use and operation; disposal at the end of its useful life (including transport at each stage).\n\nGlass bottle:\n• Raw materials: sand, limestone and sodium carbonate — plentiful, but quarrying damages the landscape.\n• Manufacture: needs very high temperatures — large energy use, CO₂ emissions.\n• Use: heavy, so more fuel is needed for transport; can be washed and reused many times.\n• Disposal: can be recycled easily by melting and reshaping; not biodegradable but is inert in landfill.\n\nPlastic (PET) bottle:\n• Raw materials: crude oil — a finite, non-renewable resource.\n• Manufacture: uses less energy than glass (lower processing temperatures), but involves cracking and polymerisation.\n• Use: light, so less fuel is needed for transport; usually single use.\n• Disposal: can be recycled, but often ends up in landfill or the oceans; not biodegradable, persists for hundreds of years; incineration releases CO₂.\n\nLimitations of LCA: some values (e.g. pollutant effects) are difficult to quantify and require value judgements, so LCAs can be biased or used selectively (e.g. in advertising).\n\nEvaluation: plastic has lower energy costs in manufacture and transport, but uses a finite resource and causes serious pollution if not recycled. Glass uses more energy but can be reused and recycled many times. The best choice depends on whether the glass bottles are reused and on recycling rates.`
      },
      {
        q: 'Describe how ammonium sulfate fertiliser is produced in the laboratory and industrially, and compare the two methods. Explain why fertilisers are important to farmers.',
        marks: 8, tier: 'red',
        modelAnswer: `Importance of fertilisers:\n• Plants need nitrogen, phosphorus and potassium for healthy growth. NPK fertilisers replace these elements in soil, improving agricultural productivity and increasing crop yields.\n\nLaboratory method:\n• Neutralise ammonia solution with dilute sulfuric acid: 2NH₃ + H₂SO₄ → (NH₄)₂SO₄\n• Carry out a titration to find the exact volumes needed (using an indicator), then repeat without the indicator.\n• Evaporate some of the water and leave the solution to crystallise; filter and dry the crystals.\n• Small scale batch process, uses glassware, simple equipment.\n\nIndustrial method:\n• Ammonia is manufactured by the Haber process (N₂ from the air, H₂ from natural gas).\n• Sulfuric acid is made by the Contact process (from sulfur, air and water).\n• The two are reacted in large reaction vessels and the product is dried.\n• Large scale continuous process; several stages; uses raw materials such as natural gas, air, sulfur and water; requires high energy input and expensive plant, but produces very large quantities.\n\nComparison:\n• Lab: small scale, batch, starts with ready-made ammonia solution and sulfuric acid, simple, slow.\n• Industry: large scale, continuous, makes ammonia and sulfuric acid from raw materials in several stages, efficient for high output, requires large initial investment and careful control of conditions (e.g. 450 °C, 200 atm for Haber).\n\nConclusion: both produce the same salt by neutralisation, but industrial production is designed for efficiency and very high output, while the lab method is suitable only for small quantities.`
      },
    ],
  },

};
