/*
 * OCR GCSE Chemistry B (J258) Twenty First Century Science — Diagnostic WRITTEN questions.
 * Each topic has green/amber/red written questions with model answers.
 * The diagnostic engine randomly picks ONE written to replace an MCQ of the chosen tier.
 */

const CHEMISTRY_OCR_B_GCSE_WRITTEN = {

  'C1': {
    green: [
      { q: 'Describe the arrangement and movement of the particles in a liquid.', marks: 2,
        modelAnswer: 'The particles are close together but arranged randomly (no regular pattern). They move around and slide past one another.' },
      { q: 'Describe the tests for oxygen and for hydrogen, giving the result of each.', marks: 2,
        modelAnswer: 'Oxygen relights a glowing splint. Hydrogen burns with a squeaky pop when a lighted splint is held at the mouth of the tube.' },
      { q: 'Name two pollutants made when fossil fuels are burned and state the source of each.', marks: 2,
        modelAnswer: 'Any two of: carbon monoxide / particulates (soot) from incomplete combustion; sulfur dioxide from sulfur impurities in the fuel burning; nitrogen oxides from nitrogen and oxygen in the air reacting at the high temperature in engines.' },
      { q: 'State what is meant by an exothermic reaction and give one example.', marks: 2,
        modelAnswer: 'A reaction that transfers energy to the surroundings, so the temperature of the surroundings rises. Example: combustion of a fuel / neutralisation / respiration.' },
    ],
    amber: [
      { q: 'Describe how it is thought an oxygen-rich atmosphere developed from the Earth’s early atmosphere.', marks: 3,
        modelAnswer: 'The early atmosphere was mainly carbon dioxide (with water vapour) from volcanoes, with little or no oxygen. Water vapour condensed to form the oceans, and some CO₂ dissolved in them. Photosynthesising organisms (algae/plants) evolved, taking in CO₂ and releasing oxygen; carbon was also locked up in sedimentary rocks and fossil fuels, so CO₂ fell and O₂ rose.' },
      { q: 'Draw and label (describe) a reaction profile for an endothermic reaction.', marks: 3,
        modelAnswer: 'Energy on the vertical axis, progress of reaction on the horizontal. Products drawn at a HIGHER energy level than the reactants. A curve (hump) rising from reactants to a peak and down to products; activation energy labelled as the difference from the reactants to the peak; overall energy change shown as an upward arrow from reactants to products.' },
      { q: 'Explain how the greenhouse effect keeps the Earth warmer than it would otherwise be.', marks: 3,
        modelAnswer: 'Radiation from the Sun passes through the atmosphere and is absorbed by the Earth’s surface, warming it. The warm Earth emits infrared radiation. Greenhouse gases such as carbon dioxide and methane absorb this infrared and re-emit it in all directions, including back towards the Earth, so less energy escapes to space.' },
      { q: 'Describe how ground water from a reservoir is treated to make it potable.', marks: 3,
        modelAnswer: 'Filtration (e.g. through sand/gravel beds) removes insoluble solids. Sedimentation/aeration and bacteria may be used to remove or break down organic matter. Chlorination kills microorganisms so the water is safe to drink.' },
    ],
    red: [
      { q: '(HT) Hydrogen burns in oxygen: 2H₂ + O₂ → 2H₂O. Bond energies (kJ/mol): H–H 436, O=O 498, O–H 464. Calculate the energy change for the reaction and explain whether it is exothermic or endothermic. [6]', marks: 6,
        modelAnswer: 'Bonds broken: 2 × H–H = 2 × 436 = 872; 1 × O=O = 498; total energy in = 1370 kJ/mol. Bonds made: 2 H₂O contain 4 O–H bonds = 4 × 464 = 1856 kJ/mol released. Energy change = energy in − energy out = 1370 − 1856 = −486 kJ/mol. The value is negative because more energy is released making the new O–H bonds than is taken in breaking the H–H and O=O bonds, so the reaction is exothermic and the surroundings warm up.' },
      { q: 'Evaluate the evidence that human activity is causing climate change, and describe how the effects might be reduced. Refer to correlation, uncertainty and the scale of the problem. [6]', marks: 6,
        modelAnswer: 'Evidence: atmospheric CO₂ has risen from about 280 ppm to over 400 ppm since the Industrial Revolution, matching the rise in fossil fuel use; global average temperatures have risen over the same period. Greenhouse gases are known to absorb infrared radiation, so there is a mechanism linking CO₂ to warming. However, a correlation alone does not prove cause; older temperature records are less precise and the climate varies naturally, so there is uncertainty. As more data is collected uncertainty falls, and models that reproduce past data give more confidence in predictions, so most scientists accept the link. Mitigation: use less fossil fuel (renewables, efficiency), carbon capture and storage, reforestation, and public regulation of emission targets. These are hard because of the huge scale of emissions, the cost, and the possibility of unforeseen environmental impacts, and different countries may make different decisions for economic or social reasons.' },
    ],
  },

  'C2': {
    green: [
      { q: 'Give the relative charge and relative mass of a proton, a neutron and an electron.', marks: 2,
        modelAnswer: 'Proton: charge +1, mass 1. Neutron: charge 0, mass 1. Electron: charge −1, mass very small (about 1/2000). [all charges 1; all masses 1]' },
      { q: 'State two properties of the Group 0 elements.', marks: 2,
        modelAnswer: 'Any two of: gases at room temperature; very low melting and boiling points; unreactive (inert); exist as single atoms (monatomic); colourless.' },
      { q: 'Describe what is seen when a small piece of sodium is added to water.', marks: 2,
        modelAnswer: 'Any two of: it floats; it fizzes/bubbles (hydrogen given off); it melts into a ball; it moves around on the surface; it gets smaller and disappears. (Solution formed is alkaline.)' },
      { q: 'State two general properties of transition metals that are not shown by Group 1 metals.', marks: 2,
        modelAnswer: 'Any two of: high melting points; high densities; form coloured compounds/ions; form ions with different charges; useful as catalysts; less reactive (react slowly or not at all with water).' },
    ],
    amber: [
      { q: 'Describe how Mendeleev arranged the elements and explain why he left gaps in his table.', marks: 3,
        modelAnswer: 'He arranged the elements in order of relative atomic mass, but grouped elements with similar properties together, swapping the order of some (e.g. tellurium and iodine) where properties required it. He left gaps where no known element fitted the pattern, predicting that elements would be discovered to fill them, and predicted their properties.' },
      { q: 'Explain, in terms of electrons, how sodium and chlorine form sodium chloride.', marks: 3,
        modelAnswer: 'Sodium (2.8.1) loses its one outer electron to form Na⁺ (2.8). Chlorine (2.8.7) gains that electron to form Cl⁻ (2.8.8). Both ions have full outer shells, and the oppositely charged ions are held together by strong electrostatic attraction (ionic bonding) in a giant lattice.' },
      { q: 'Bromine water is added to potassium iodide solution. Describe what you would see, write a word equation and explain the result.', marks: 3,
        modelAnswer: 'The colourless solution turns brown (iodine forms). Bromine + potassium iodide → potassium bromide + iodine. Bromine is more reactive than iodine (higher in Group 7), so it displaces iodine from its compound.' },
      { q: 'Explain why sodium chloride conducts electricity when molten but not when solid.', marks: 3,
        modelAnswer: 'Sodium chloride is made of ions. In the solid the ions are held in fixed positions in the lattice and cannot move. When molten, the ions are free to move and can carry charge, so it conducts.' },
    ],
    red: [
      { q: 'Describe how and why the model of the atom changed from Dalton’s model to Bohr’s model. [6]', marks: 6,
        modelAnswer: 'Dalton: atoms are tiny solid spheres that cannot be divided; atoms of each element are identical. Thomson discovered the electron, so the atom must contain smaller particles; his ‘plum pudding’ model was a ball of positive charge with electrons embedded in it. Rutherford (Geiger and Marsden) fired alpha particles at gold foil: most passed straight through (atom mostly empty space) but a few were deflected or bounced back, which could only be explained by a tiny, dense, positively charged nucleus containing most of the mass, so the nuclear model replaced the plum pudding. Bohr suggested electrons orbit the nucleus in fixed shells (energy levels), which explained further observations (e.g. emission spectra). Each model was changed when new evidence could not be explained by the old one; scientists made predictions, tested them and built on each other’s work.' },
      { q: 'Explain the trends in reactivity down Group 1 and down Group 7 in terms of electron arrangement. [6]', marks: 6,
        modelAnswer: 'Group 1 atoms have one outer electron and react by losing it to form 1+ ions. Down the group the atoms get larger, with more shells, so the outer electron is further from the nucleus and more shielded by inner electrons. The attraction to the nucleus is weaker, so the electron is lost more easily and reactivity INCREASES down the group. Group 7 atoms have seven outer electrons and react by gaining one electron to form 1− ions. Down the group the outer shell is further from the nucleus and more shielded, so an incoming electron is attracted less strongly. The electron is gained less easily, so reactivity DECREASES down the group (e.g. chlorine displaces bromine and iodine, but iodine displaces neither).' },
    ],
  },

  'C3': {
    green: [
      { q: 'Describe the structure and bonding in a metal.', marks: 2,
        modelAnswer: 'A giant structure of positive metal ions arranged in a regular pattern, held together by strong electrostatic attraction to a ‘sea’ of delocalised electrons.' },
      { q: 'State what is formed at the cathode and at the anode when molten zinc chloride is electrolysed.', marks: 2,
        modelAnswer: 'Cathode (negative electrode): zinc. Anode (positive electrode): chlorine.' },
      { q: 'State what is meant by a homologous series and give the general formula of the alkanes.', marks: 2,
        modelAnswer: 'A family of compounds with the same general formula and similar chemical properties, in which each member differs from the next by CH₂ (and shows a trend in physical properties). Alkanes: CₙH₂ₙ₊₂.' },
      { q: 'Explain why crude oil is described as a finite resource.', marks: 2,
        modelAnswer: 'It takes millions of years to form, so it is being used up much faster than it is made and will run out.' },
    ],
    amber: [
      { q: 'Explain why iron can be extracted from iron oxide by heating with carbon but aluminium cannot.', marks: 3,
        modelAnswer: 'Carbon is more reactive than iron, so it can remove oxygen from iron oxide (reducing it). Aluminium is more reactive than carbon, so carbon cannot reduce aluminium oxide; aluminium has to be extracted by electrolysis instead.' },
      { q: 'Describe how crude oil is separated by fractional distillation.', marks: 3,
        modelAnswer: 'Crude oil is heated until it evaporates and the vapour enters a column that is hot at the bottom and cooler at the top. Vapours rise and condense at the level where the temperature falls below their boiling point. Small molecules with low boiling points are collected near the top; large molecules with high boiling points are collected near the bottom.' },
      { q: 'Explain why methane has a low boiling point even though it contains strong covalent bonds.', marks: 3,
        modelAnswer: 'Methane is a simple molecular substance. The covalent bonds are inside each molecule and are not broken when it boils. Only the weak intermolecular forces between molecules need to be overcome, which needs little energy, so the boiling point is low.' },
      { q: 'Describe cracking and explain why it is useful.', marks: 3,
        modelAnswer: 'Long-chain alkanes are heated (with a catalyst) and broken down into shorter alkanes and alkenes. Shorter alkanes such as petrol are in greater demand than the supply from fractional distillation, and the alkenes are used to make polymers and other chemicals, so less crude oil needs to be extracted.' },
    ],
    red: [
      { q: 'Describe and explain what happens when concentrated sodium chloride solution is electrolysed with inert electrodes. Include the ions present, the products and why they form. [6]', marks: 6,
        modelAnswer: 'Ions present: Na⁺ and Cl⁻ from sodium chloride, and H⁺ and OH⁻ from water. At the cathode (negative), Na⁺ and H⁺ are attracted; sodium is more reactive than hydrogen, so H⁺ ions gain electrons and hydrogen gas forms (sodium is not discharged). At the anode (positive), Cl⁻ and OH⁻ are attracted; because the chloride ions are concentrated, they lose electrons and chlorine gas forms (test: bleaches damp blue litmus). Na⁺ and OH⁻ ions are left in solution, forming sodium hydroxide. (HT) Cathode: 2H⁺ + 2e⁻ → H₂ (reduction); anode: 2Cl⁻ → Cl₂ + 2e⁻ (oxidation). If the solution were dilute, oxygen would form at the anode instead.' },
      { q: 'Describe the extraction of aluminium by electrolysis and explain why the process is expensive. [6]', marks: 6,
        modelAnswer: 'Aluminium is more reactive than carbon, so it cannot be extracted by reduction with carbon; electrolysis is used. Aluminium oxide is heated to a very high temperature until molten (often dissolved in molten cryolite to lower the temperature) so that the ions are free to move. At the cathode, Al³⁺ ions gain electrons to form aluminium metal: Al³⁺ + 3e⁻ → Al. At the anode, oxide ions lose electrons to form oxygen: 2O²⁻ → O₂ + 4e⁻. The oxygen reacts with the hot carbon anodes to form carbon dioxide, so the anodes burn away and must be replaced. The process is expensive because of the large amount of energy needed to keep the electrolyte molten and the large electric current needed, plus the cost of replacing the anodes.' },
    ],
  },

  'C4': {
    green: [
      { q: 'State what is meant by a composite material and give one example.', marks: 2,
        modelAnswer: 'A material made from two or more different materials combined so that their properties are combined. Example: reinforced concrete / fibreglass / carbon-fibre-reinforced polymer.' },
      { q: 'Name two allotropes of carbon.', marks: 2,
        modelAnswer: 'Any two of: diamond, graphite, graphene, fullerenes (e.g. buckminsterfullerene, nanotubes).' },
      { q: 'State the size range of nanoparticles and one reason why they make good catalysts.', marks: 2,
        modelAnswer: 'Between 1 and 100 nm. They have a very high surface area to volume ratio, so more atoms are exposed for reactions.' },
      { q: 'State the conditions needed for iron to rust and one way of preventing it.', marks: 2,
        modelAnswer: 'Water and oxygen (air) are both needed. Prevention: painting / oiling / greasing / plastic coating (barrier), or galvanising / sacrificial protection with zinc.' },
    ],
    amber: [
      { q: 'Explain how the structure of graphite makes it soft and able to conduct electricity.', marks: 3,
        modelAnswer: 'Each carbon atom is covalently bonded to three others in hexagonal layers. The layers are held together only by weak forces, so they slide over each other easily, making graphite soft. Each carbon has one delocalised electron that is free to move along the layers, so graphite conducts electricity.' },
      { q: 'Draw (describe) the repeating unit of poly(propene), made from propene CH₂=CHCH₃, and state the type of polymerisation.', marks: 3,
        modelAnswer: 'Repeating unit: –[CH₂–CH(CH₃)]– in brackets with n, the C=C double bond replaced by a single bond and bonds extending out of both sides of the bracket. Addition polymerisation: the double bonds open and monomers join with no other product.' },
      { q: 'A cube has sides of 1 cm and another of 2 cm. Calculate the surface area to volume ratio of each and state what this shows about smaller particles.', marks: 3,
        modelAnswer: '1 cm cube: SA = 6 cm², V = 1 cm³, ratio 6 : 1. 2 cm cube: SA = 24 cm², V = 8 cm³, ratio 3 : 1. Smaller particles have a larger surface area to volume ratio.' },
      { q: 'Describe the main stages considered in a life cycle assessment of a product.', marks: 3,
        modelAnswer: 'Extracting and processing the raw materials; manufacturing (and packaging) the product; using the product (and transport at each stage); disposal at the end of its life (landfill, incineration, recycling). At each stage the use of energy, water and resources and the environmental impact (pollution, waste) are considered.' },
    ],
    red: [
      { q: 'Compare the structure and bonding of diamond, poly(ethene) and copper, and use them to explain differences in melting point, hardness and electrical conductivity. [6]', marks: 6,
        modelAnswer: 'Diamond: giant covalent structure; each carbon atom bonded to four others by strong covalent bonds in a rigid 3-D network. Very high melting point and very hard because many strong bonds must be broken; no delocalised electrons or ions, so it does not conduct. Poly(ethene): long chain molecules with strong covalent bonds within chains but only weak intermolecular forces between chains; low melting/softening point and soft/flexible because only the weak forces between chains are overcome; no free charges, so does not conduct. Copper: giant metallic lattice of positive ions in a sea of delocalised electrons with strong electrostatic attraction; high melting point; malleable (not hard like diamond) because layers of ions slide while still bonded; conducts because delocalised electrons move. The atoms themselves do not have these properties — they arise from the bonding and arrangement.' },
      { q: 'Evaluate the benefits and risks of using nanoparticles in consumer products such as sun creams and sports equipment. [6]', marks: 6,
        modelAnswer: 'Benefits: nanoparticles (e.g. titanium dioxide, zinc oxide) in sun cream absorb/block UV and are transparent, giving better protection without a white film; carbon nanotubes make sports equipment stronger and lighter; the very high surface area to volume ratio makes them effective in small amounts and good catalysts. Risks: because they are so small they may pass through skin or be breathed in and enter cells or the bloodstream; their large surface area may make them more reactive and toxic; they may damage the environment when washed away. There is more data on their uses than on their health effects because they are new and long-term effects take years to appear, so the risks are uncertain. Judgement: benefits may outweigh risks for some uses, but more research and regulation are needed, and decisions depend on how exposed people are.' },
    ],
  },

  'C5': {
    green: [
      { q: 'State what is meant by a pure substance in chemistry and how melting point can show purity.', marks: 2,
        modelAnswer: 'A single element or compound not mixed with any other substance. A pure substance melts at a sharp, fixed temperature matching data-book values; an impure one melts over a range, usually lower.' },
      { q: 'Give the flame test colours for lithium and potassium ions.', marks: 2,
        modelAnswer: 'Lithium: crimson (red). Potassium: lilac.' },
      { q: 'Calculate the relative formula mass of magnesium hydroxide, Mg(OH)₂. (Mg = 24, O = 16, H = 1)', marks: 2,
        modelAnswer: '24 + 2 × (16 + 1) = 24 + 34 = 58.' },
      { q: 'Name the salt formed when nitric acid reacts with sodium hydroxide, and the other product.', marks: 2,
        modelAnswer: 'Sodium nitrate and water.' },
    ],
    amber: [
      { q: 'Describe how paper chromatography is used to identify the dyes in an ink, including how an Rf value is calculated.', marks: 3,
        modelAnswer: 'Spot the ink (and reference dyes) on a pencil start line on chromatography paper and stand it in solvent below the line, with a lid. Let the solvent move up the paper, then mark the solvent front. Rf = distance moved by spot ÷ distance moved by solvent; identify dyes by matching Rf values/positions with the references.' },
      { q: 'Describe how to test a solution for chloride ions and for sulfate ions, giving the results.', marks: 3,
        modelAnswer: 'Chloride: add dilute nitric acid then silver nitrate solution — white precipitate. Sulfate: add dilute hydrochloric acid then barium chloride solution — white precipitate. (Acid added first to remove carbonate ions.)' },
      { q: '(HT) Calculate the mass of magnesium oxide formed when 6.0 g of magnesium burns completely. 2Mg + O₂ → 2MgO (Mg = 24, MgO = 40)', marks: 3,
        modelAnswer: 'Moles Mg = 6.0 ÷ 24 = 0.25 mol. Ratio Mg : MgO = 2 : 2, so 0.25 mol MgO. Mass = 0.25 × 40 = 10 g.' },
      { q: 'Explain why the mass of a flask decreases when marble chips react with hydrochloric acid in an open flask, even though mass is conserved.', marks: 3,
        modelAnswer: 'The reaction produces carbon dioxide gas. Because the flask is open (non-enclosed), the gas escapes into the air, so the mass of the flask falls. The atoms are not destroyed — the total mass of all products, including the escaped gas, equals the mass of the reactants.' },
    ],
    red: [
      { q: 'Describe how to carry out a titration to find accurately the volume of hydrochloric acid needed to neutralise 25.0 cm³ of sodium hydroxide solution, and how to process the results. [6]', marks: 6,
        modelAnswer: 'Use a pipette (with filler) to transfer exactly 25.0 cm³ of sodium hydroxide into a conical flask; add a few drops of indicator (e.g. phenolphthalein or methyl orange). Fill a burette with the acid (rinsed with acid first), remove the air bubble from the tip and read the initial volume at eye level from the bottom of the meniscus. Add acid while swirling the flask, on a white tile so the colour change is easy to see; add dropwise near the end point until the indicator just changes colour permanently. Record the final reading and the titre. Do a rough titration first, then repeat accurately until at least two titres are concordant (within 0.10 cm³). Discard the rough and any anomalous results and calculate the mean of the concordant titres. This gives precise, repeatable and accurate results.' },
      { q: '(HT) 25.0 cm³ of sodium hydroxide solution is neutralised by 22.50 cm³ of 0.100 mol/dm³ hydrochloric acid. NaOH + HCl → NaCl + H₂O. Calculate the concentration of the sodium hydroxide in mol/dm³ and in g/dm³. (NaOH = 40) [6]', marks: 6,
        modelAnswer: 'Moles HCl = 0.100 × (22.50 ÷ 1000) = 0.00225 mol. Ratio 1 : 1, so moles NaOH = 0.00225 mol. Volume NaOH = 25.0 ÷ 1000 = 0.0250 dm³. Concentration = 0.00225 ÷ 0.0250 = 0.0900 mol/dm³. In g/dm³: 0.0900 × 40 = 3.60 g/dm³. [moles acid 1; ratio 1; volume conversion 1; mol/dm³ 1; method for g/dm³ 1; answer 1]' },
    ],
  },

  'C6': {
    green: [
      { q: 'Name the salt formed when zinc reacts with sulfuric acid, and the gas given off.', marks: 2,
        modelAnswer: 'Zinc sulfate; hydrogen.' },
      { q: 'State two ways of increasing the rate of a reaction between a solid and a solution.', marks: 2,
        modelAnswer: 'Any two of: increase temperature; increase concentration of the solution; use smaller pieces/powder (greater surface area); add a catalyst.' },
      { q: 'State what is meant by a catalyst.', marks: 2,
        modelAnswer: 'A substance that increases the rate of a reaction without being used up (it is unchanged chemically at the end).' },
      { q: 'Explain why farmers add fertilisers to their fields.', marks: 2,
        modelAnswer: 'Crops take nitrogen, phosphorus and potassium from the soil as they grow, and these are removed when the crops are harvested. Fertilisers replace these elements so that crops grow well and yields are high.' },
    ],
    amber: [
      { q: 'Explain, using collision theory, why increasing the temperature increases the rate of reaction.', marks: 3,
        modelAnswer: 'Particles gain kinetic energy and move faster, so they collide more frequently. More importantly, a greater proportion of collisions have energy equal to or greater than the activation energy, so more collisions are successful per second.' },
      { q: '(HT) Explain the difference between a strong acid and a concentrated acid, using hydrochloric acid and ethanoic acid as examples.', marks: 3,
        modelAnswer: 'Strength is the degree of ionisation: hydrochloric acid is strong because it is fully ionised in water; ethanoic acid is weak because it is only partly ionised. Concentration is the amount of acid per unit volume (mol/dm³): either acid can be dilute or concentrated.' },
      { q: 'Describe how to follow the rate of reaction between magnesium and hydrochloric acid.', marks: 3,
        modelAnswer: 'Connect the flask to a gas syringe (or collect gas over water in an upturned measuring cylinder). Start the timer as the magnesium is added and record the gas volume at regular intervals (e.g. every 10 s). Plot volume against time; the gradient gives the rate. (Alternatively measure mass loss on a balance.)' },
      { q: 'Calculate the atom economy for making hydrogen by the reaction CH₄ + H₂O → CO + 3H₂. (CH₄ = 16, H₂O = 18, H₂ = 2)', marks: 3,
        modelAnswer: 'Mass of desired product = 3 × 2 = 6. Total mass of reactants = 16 + 18 = 34. Atom economy = 6 ÷ 34 × 100 = 17.6%.' },
    ],
    red: [
      { q: '(HT) N₂(g) + 3H₂(g) ⇌ 2NH₃(g); the forward reaction is exothermic. Explain how the conditions used in the Haber process are chosen. Refer to temperature, pressure, catalyst and recycling. [6]', marks: 6,
        modelAnswer: 'Temperature: the forward reaction is exothermic, so a low temperature would give a higher equilibrium yield, but the rate would be too slow. A compromise of about 450 °C gives a reasonable yield at a fast enough rate. Pressure: there are 4 molecules of gas on the left and 2 on the right, so a high pressure shifts equilibrium to the right and increases yield and rate. Very high pressures are expensive (strong equipment, energy for compression) and dangerous, so about 200 atmospheres is used. Catalyst: iron increases the rate so equilibrium is reached faster, but does not change the yield. Recycling: the mixture is cooled so ammonia liquefies and is removed; unreacted nitrogen and hydrogen are recycled so they are not wasted, giving a high overall conversion even though the equilibrium yield per pass is only about 15%.' },
      { q: 'Compare making ammonium sulfate in the laboratory with making it on an industrial scale, and evaluate the use of synthetic fertilisers. [6]', marks: 6,
        modelAnswer: 'Laboratory: ammonia solution is titrated with dilute sulfuric acid (indicator to find the end point), then the solution is evaporated and crystallised; it is a small-scale batch process using bought chemicals. Industry: ammonia is made by the Haber process (N₂ from air, H₂ from natural gas) and reacted with sulfuric acid made on site from raw materials; reactions are continuous on a huge scale in several integrated stages, and ammonium sulfate may also be made as a by-product of other processes; process flow charts summarise the stages. Evaluation: synthetic fertilisers are needed to feed the world’s growing population because natural fertilisers are not available in large enough amounts and vary in composition. But making them uses lots of energy and non-renewable natural gas, and overuse leads to run-off into rivers, causing eutrophication (excess plant/algae growth, then death of aquatic organisms). Use should be managed carefully.' },
    ],
  },

};

if (typeof window !== 'undefined') window.CHEMISTRY_OCR_B_GCSE_WRITTEN = CHEMISTRY_OCR_B_GCSE_WRITTEN;
