/*
 * OCR B (Salters) A-level Chemistry (H433)
 * Topics are the ten H433 storylines, in the order OCR teaches them:
 * EL Elements of life, DF Developing fuels, ES Elements from the sea,
 * OZ The ozone story, WM What's in a medicine?, CI The chemical industry,
 * PL Polymers and life, O Oceans, DM Developing metals, CD Colour by design.
 * Do not reintroduce the old S1-S6 "module" names: H433 has no such modules.
 * AI feedback bank: worded essay-style questions marked by the AI examiner.
 */

const CHEMISTRY_OCR_B_AI_FEEDBACK = {

  // EL — Elements of Life
  "EL": [
    { "q": "Describe what the mass spectrum of an element shows and explain how the spectrum is used to determine relative atomic mass.", "marks": 9, "command": "Describe" },
    { "q": "Explain how successive ionisation energies provide evidence for the existence of electron shells and sub-shells.", "marks": 12, "command": "Explain" },
    { "q": "Compare ionic, covalent and metallic bonding and explain how the type of bonding determines the physical properties of the resulting substance.", "marks": 12, "command": "Compare" },
    { "q": "Discuss the shapes and bond angles of molecules and ions using electron-pair repulsion theory, with examples that include lone pairs.", "marks": 12, "command": "Discuss" },
    { "q": "Compare the structure and bonding in diamond, graphite and ice, and explain how each structure is related to its physical properties.", "marks": 12, "command": "Compare" },
    { "q": "Explain the meaning of empirical and molecular formulae and describe how each can be deduced from experimental data.", "marks": 9, "command": "Explain" },
    { "q": "Describe the procedure for carrying out a simple acid-base titration and explain how the results are used to calculate the concentration of an unknown.", "marks": 9, "command": "Describe" },
    { "q": "Assess the importance of the mole concept in stoichiometric calculations.", "marks": 9, "command": "Assess" },
    { "q": "Explain why the bond angle in NH3 is smaller than in CH4, and the bond angle in H2O is smaller still.", "marks": 9, "command": "Explain" },
    { "q": "Compare the bonding and properties of giant ionic and giant covalent lattices.", "marks": 9, "command": "Compare" },
    { "q": "Explain how the chemical elements are built up by nuclear fusion inside stars, and why fusion cannot produce elements heavier than iron.", "marks": 12, "command": "Explain" },
    { "q": "Describe the trends in the reactions of the Group 2 elements and their compounds, and explain them in terms of ionisation enthalpy and charge density.", "marks": 12, "command": "Describe" },
    { "q": "Explain how emission and absorption line spectra arise, and describe the similarities and differences between them.", "marks": 12, "command": "Explain" },
    { "q": "Describe a sequence of tests that would identify the cation and the anion in an unknown salt, and explain why the order of the tests matters.", "marks": 12, "command": "Describe" },
  ],

  // DF — Developing Fuels
  "DF": [
    { "q": "Describe how the standard enthalpy change of combustion of a fuel can be determined experimentally and discuss the main sources of error in the measurement.", "marks": 12, "command": "Describe" },
    { "q": "Explain how Hess's law allows enthalpy changes to be calculated indirectly and discuss why it is consistent with the first law of thermodynamics.", "marks": 9, "command": "Explain" },
    { "q": "Compare the use of mean bond enthalpy data and standard enthalpies of formation in calculating the enthalpy change of a reaction.", "marks": 9, "command": "Compare" },
    { "q": "Compare homogeneous and heterogeneous catalysts in industry and discuss the advantages and disadvantages of each.", "marks": 12, "command": "Compare" },
    { "q": "Evaluate the use of the catalytic converter in vehicle exhaust systems with reference to the chemistry involved.", "marks": 12, "command": "Evaluate" },
    { "q": "Describe the IUPAC system of nomenclature for organic compounds and explain the different types of structural and stereoisomerism with examples.", "marks": 12, "command": "Describe" },
    { "q": "Compare the mechanisms of free-radical substitution in alkanes and electrophilic addition to alkenes, with full mechanistic detail.", "marks": 12, "command": "Compare" },
    { "q": "Explain electrophilic addition to alkenes and apply Markovnikov's rule to predict the major product when an unsymmetrical alkene reacts with hydrogen bromide.", "marks": 9, "command": "Explain" },
    { "q": "Describe the production of ethanol industrially by fermentation of glucose and by hydration of ethene, and compare the two methods.", "marks": 12, "command": "Describe" },
    { "q": "Discuss the sustainability of biofuels such as bioethanol compared with conventional fossil fuels.", "marks": 12, "command": "Discuss" },
    { "q": "Assess the environmental impact of the petrochemical industry, with reference to fractional distillation, cracking and the disposal of polymers.", "marks": 12, "command": "Assess" },
    { "q": "Explain the meaning of E-Z isomerism in alkenes and describe how the priority rules are applied to assign the labels.", "marks": 9, "command": "Explain" },
    { "q": "Discuss the use of catalytic and steam cracking in the petrochemical industry and the importance of the products formed.", "marks": 9, "command": "Discuss" },
  ],

  // ES — Elements from the Sea
  "ES": [
    { "q": "Discuss how percentage yield, atom economy and percentage uncertainty together provide a measure of the success of a chemical synthesis.", "marks": 12, "command": "Discuss" },
    { "q": "Explain the meaning of dynamic equilibrium and describe the conditions under which Kc remains constant.", "marks": 9, "command": "Explain" },
    { "q": "Describe how the equilibrium constant Kc is calculated from experimental data and explain what its value tells us about the position of equilibrium.", "marks": 9, "command": "Describe" },
    { "q": "Explain the rules for assigning oxidation numbers and use them to identify oxidation, reduction and disproportionation in a series of reactions.", "marks": 9, "command": "Explain" },
    { "q": "Explain the trends in the physical properties and the oxidising power of the halogens on going down Group 17.", "marks": 9, "command": "Explain" },
    { "q": "Describe the reactions of concentrated sulfuric acid with the solid sodium halides and explain what they show about the reducing power of the halide ions.", "marks": 12, "command": "Describe" },
    { "q": "Describe the electrolysis of molten and of aqueous electrolytes, and explain what determines the product formed at each electrode.", "marks": 12, "command": "Describe" },
    { "q": "Evaluate the risks and the benefits of the large-scale manufacture and use of chlorine.", "marks": 9, "command": "Evaluate" },
    { "q": "Explain how the equilibrium constant Kc is written and calculated, and how it is used to account for the effect of changing a concentration on the position of equilibrium.", "marks": 12, "command": "Explain" },
    { "q": "Assess the usefulness of atom economy as a measure of how good an industrial process is.", "marks": 12, "command": "Assess" },
  ],

  // OZ — The Ozone Story
  "OZ": [
    { "q": "Explain how electronegativity gives rise to bond polarity and discuss how the molecular shape determines whether the molecule overall has a permanent dipole.", "marks": 9, "command": "Explain" },
    { "q": "Describe the three main types of intermolecular force and explain how they account for the boiling-point trends of the noble gases and the hydrogen halides.", "marks": 12, "command": "Describe" },
    { "q": "To what extent does the type of intermolecular force present account for the boiling points of the period 2 hydrides CH4, NH3, H2O and HF?", "marks": 12, "command": "To what extent" },
    { "q": "Discuss how collision theory and the Maxwell-Boltzmann distribution account for the effects of temperature, concentration and catalysts on the rate of reaction.", "marks": 16, "command": "Discuss" },
    { "q": "Describe how a colorimeter and a clock-style reaction can be used to follow the rate of a chemical reaction.", "marks": 9, "command": "Describe" },
    { "q": "Explain why a catalyst increases the rate of reaction without altering the position of equilibrium, with reference to the Maxwell-Boltzmann distribution.", "marks": 9, "command": "Explain" },
    { "q": "Describe the construction and use of an enthalpy diagram showing the activation energy with and without a catalyst.", "marks": 6, "command": "Describe" },
    { "q": "Compare the activation energies of catalysed and uncatalysed reactions and discuss the implications for industrial chemistry.", "marks": 9, "command": "Compare" },
    { "q": "Discuss the difference between SN1 and SN2 nucleophilic substitution mechanisms and the factors that determine which is preferred.", "marks": 12, "command": "Discuss" },
    { "q": "Compare the conditions and products of the nucleophilic substitution and elimination reactions of haloalkanes.", "marks": 9, "command": "Compare" },
    { "q": "Evaluate the historical use of chlorofluorocarbons and assess the success of international action in protecting the ozone layer.", "marks": 12, "command": "Evaluate" },
    { "q": "Explain how ozone is formed and destroyed in the stratosphere and how the ozone layer acts as a sunscreen for living things.", "marks": 12, "command": "Explain" },
    { "q": "Describe the mechanism of a radical chain reaction, using the reaction of methane with chlorine as your example.", "marks": 9, "command": "Describe" },
    { "q": "Assess the case for replacing CFCs with HCFCs, HFCs and hydrocarbons, considering both ozone depletion and climate change.", "marks": 12, "command": "Assess" },
  ],

  // WM — What's in a Medicine?
  "WM": [
    { "q": "Evaluate the use of mass spectrometry in identifying both elemental composition and molecular structure of organic compounds.", "marks": 12, "command": "Evaluate" },
    { "q": "Explain how the products of oxidation of an alcohol with acidified potassium dichromate depend on whether the alcohol is primary, secondary or tertiary.", "marks": 9, "command": "Explain" },
    { "q": "Describe how mass spectrometry and infrared spectroscopy can be used together to identify a small organic molecule.", "marks": 9, "command": "Describe" },
    { "q": "To what extent can spectroscopic techniques alone determine the full structure of an unknown organic compound?", "marks": 12, "command": "To what extent" },
    { "q": "Describe the formation of esters from carboxylic acids and alcohols and explain the role of concentrated sulfuric acid as a catalyst.", "marks": 9, "command": "Describe" },
    { "q": "Discuss the hydrolysis of esters under acidic and alkaline conditions and explain why alkaline hydrolysis goes to completion.", "marks": 12, "command": "Discuss" },
    { "q": "To what extent does retrosynthesis allow chemists to plan the multi-step synthesis of a complex organic molecule?", "marks": 12, "command": "To what extent" },
    { "q": "Explain the principles of green chemistry and discuss how they are applied in the industrial synthesis of aspirin.", "marks": 12, "command": "Explain" },
    { "q": "Compare atom economy and percentage yield as measures of the efficiency of a chemical process.", "marks": 9, "command": "Compare" },
    { "q": "Compare the reactions of alcohols, phenols and carboxylic acids with sodium hydroxide, sodium carbonate and neutral iron(III) chloride, and explain the differences.", "marks": 12, "command": "Compare" },
    { "q": "Explain why phenols are acidic and why they react with acid anhydrides but not with carboxylic acids, using the synthesis of aspirin as an illustration.", "marks": 12, "command": "Explain" },
  ],

  // CI — The Chemical Industry
  "CI": [
    { "q": "Explain how the rate equation of a reaction is determined experimentally using the initial rates method and what the orders reveal about the mechanism.", "marks": 12, "command": "Explain" },
    { "q": "Discuss the Arrhenius equation and explain how a graph of ln k against 1/T is used to find the activation energy of a reaction.", "marks": 12, "command": "Discuss" },
    { "q": "Assess the environmental and economic importance of catalysts in modern industrial chemistry.", "marks": 12, "command": "Assess" },
    { "q": "Discuss how the rate-determining step is identified from a rate equation and what this reveals about the mechanism.", "marks": 9, "command": "Discuss" },
    { "q": "To what extent does the rate equation provide direct evidence for the mechanism of a reaction?", "marks": 12, "command": "To what extent" },
    { "q": "Discuss how Le Chatelier's principle is used to predict the effect of changes in temperature, pressure and concentration on a reversible reaction.", "marks": 12, "command": "Discuss" },
    { "q": "Compare the conditions used in the Haber and Contact processes and explain why the conditions are not those that would maximise equilibrium yield.", "marks": 12, "command": "Compare" },
    { "q": "Discuss why temperature is the only factor that changes the value of an equilibrium constant Kc or Kp.", "marks": 9, "command": "Discuss" },
    { "q": "Explain how the equilibrium constant Kc changes with temperature for an exothermic and an endothermic reaction.", "marks": 9, "command": "Explain" },
    { "q": "Discuss how the position of equilibrium for an exothermic reversible reaction responds to changes in temperature, pressure and concentration.", "marks": 12, "command": "Discuss" },
    { "q": "To what extent does the equilibrium constant determine the yield of an industrial process given the practical constraints chemical engineers face?", "marks": 12, "command": "To what extent" },
    { "q": "Explain the aspects of nitrogen chemistry required for the manufacture of fertilisers, including the bonding in nitrogen, ammonia and the ammonium ion.", "marks": 12, "command": "Explain" },
    { "q": "Describe the three stages of the Ostwald process and explain how the conditions used in each stage are justified in terms of rate and equilibrium.", "marks": 12, "command": "Describe" },
    { "q": "Evaluate the costs, benefits and risks associated with the industrial manufacture of sulfuric acid.", "marks": 12, "command": "Evaluate" },
    { "q": "Explain how orders of reaction, half-lives and rate constants are obtained from experimental data, and how the units of the rate constant follow from the overall order.", "marks": 12, "command": "Explain" },
  ],

  // PL — Polymers and Life
  "PL": [
    { "q": "Compare addition polymerisation of alkenes with condensation polymerisation, with reference to monomer types and the by-products formed.", "marks": 9, "command": "Compare" },
    { "q": "Discuss optical isomerism shown by carbon compounds containing a chiral centre and explain why optical isomers have identical physical properties except for their effect on plane-polarised light.", "marks": 9, "command": "Discuss" },
    { "q": "Discuss the basicity of aliphatic and aromatic amines and explain the difference in terms of the availability of the lone pair on nitrogen.", "marks": 12, "command": "Discuss" },
    { "q": "Explain how amino acids combine to form the primary structure of proteins and how this primary structure determines higher-order folding.", "marks": 12, "command": "Explain" },
    { "q": "Describe the behaviour of amino acids as zwitterions and explain the meaning of the isoelectric point.", "marks": 9, "command": "Describe" },
    { "q": "Compare the disposal options for addition and condensation polymers and assess their respective environmental impacts.", "marks": 12, "command": "Compare" },
    { "q": "Evaluate the use of high-resolution NMR spectroscopy in identifying organic compounds, with reference to both proton and carbon-13 spectra.", "marks": 12, "command": "Evaluate" },
    { "q": "Describe the structure of DNA and explain the significance of hydrogen bonding in the pairing of the bases.", "marks": 12, "command": "Describe" },
    { "q": "Explain how the sequence of bases in DNA determines the primary structure of a protein.", "marks": 9, "command": "Explain" },
    { "q": "Discuss the characteristics of enzyme catalysis and explain each of them in terms of a three-dimensional active site.", "marks": 12, "command": "Discuss" },
    { "q": "Explain what is meant by molecular recognition and describe how it accounts for the action of a pharmacologically active molecule.", "marks": 12, "command": "Explain" },
    { "q": "Explain what is meant by optical isomerism and describe how the enantiomers of a chiral molecule are identified and represented.", "marks": 9, "command": "Explain" },
    { "q": "Discuss the importance of optical isomerism in the action and manufacture of medicines.", "marks": 12, "command": "Discuss" },
    { "q": "Explain how a high-resolution mass spectrum is used to deduce the molecular formula of a compound, and why a low-resolution spectrum cannot do the same.", "marks": 9, "command": "Explain" },
    { "q": "Discuss how mass spectrometry, infrared spectroscopy and NMR are combined to determine the structure of an organic molecule, and explain what each technique can and cannot establish on its own.", "marks": 12, "command": "Discuss" },
    { "q": "Describe the secondary and tertiary structure of a protein and explain the role of intermolecular bonds in determining each, and hence the solubility of the protein and its response to heat and pH.", "marks": 12, "command": "Describe" },
    { "q": "Explain how the systematic names nylon-6,6, nylon-6,10 and nylon-6 relate to the monomers used, the repeat unit of each polymer and the properties that follow from the spacing of the amide links.", "marks": 9, "command": "Explain" },
  ],

  // O — Oceans
  "O": [
    { "q": "Explain how pH is calculated for a strong acid and for a weak acid using Ka, and discuss the assumptions made.", "marks": 12, "command": "Explain" },
    { "q": "Compare the strengths of acids using values of Ka and pKa and explain the meaning of the term weak acid.", "marks": 9, "command": "Compare" },
    { "q": "Describe the action of a buffer solution in maintaining a stable pH and discuss its importance in biological systems such as blood.", "marks": 12, "command": "Describe" },
    { "q": "Discuss the shape of a pH titration curve for a weak acid with a strong base and explain the choice of indicator.", "marks": 12, "command": "Discuss" },
    { "q": "Assess the role of buffer solutions in biological systems and in everyday products such as shampoos and food preservatives.", "marks": 9, "command": "Assess" },
    { "q": "Evaluate the use of universal indicator and a pH meter in following the course of a titration.", "marks": 9, "command": "Evaluate" },
    { "q": "Compare buffer action with the response of a pure weak acid to small additions of acid or base.", "marks": 9, "command": "Compare" },
  ],

  // DM — Developing Metals
  "DM": [
    { "q": "Describe the construction of a simple electrochemical cell and explain how the standard electrode potential is measured against the standard hydrogen electrode.", "marks": 12, "command": "Describe" },
    { "q": "Compare the standard electrode potentials of selected metals and discuss how the electrochemical series is used to predict redox feasibility.", "marks": 12, "command": "Compare" },
    { "q": "Discuss the use of standard electrode potentials in predicting the feasibility of redox reactions, with reference to disproportionation.", "marks": 12, "command": "Discuss" },
    { "q": "Explain the definition of a transition metal and discuss the characteristic properties that result from a partially filled d sub-shell.", "marks": 9, "command": "Explain" },
    { "q": "Describe the origin of colour in transition metal complexes in terms of d-orbital splitting and electron transitions.", "marks": 9, "command": "Describe" },
    { "q": "Compare the ligand exchange reactions of the hexaaqua copper(II) ion with ammonia, ethane-1,2-diamine and chloride ions.", "marks": 12, "command": "Compare" },
    { "q": "Discuss why transition metals are effective catalysts and illustrate your answer with both a heterogeneous and a homogeneous example.", "marks": 12, "command": "Discuss" },
    { "q": "Explain the procedure for titrating iron(II) ions with acidified potassium manganate(VII) and describe the colour change at the end point.", "marks": 9, "command": "Explain" },
    { "q": "Describe the structure and action of cisplatin as an anti-cancer drug and discuss the ethical issues raised by its side effects.", "marks": 9, "command": "Describe" },
    { "q": "Assess the importance of redox chemistry in the behaviour of transition metals, with reference to vanadium and manganese.", "marks": 12, "command": "Assess" },
    { "q": "Evaluate the use of hydrogen fuel cells compared with rechargeable lithium-ion batteries as alternatives to fossil fuels in transport.", "marks": 12, "command": "Evaluate" },
    { "q": "Discuss the colour changes observed in redox reactions of transition metal ions, with reference to vanadium and chromium chemistry.", "marks": 12, "command": "Discuss" },
    { "q": "Compare the reactions of aqueous transition metal ions with sodium hydroxide and ammonia solutions, including the observations made.", "marks": 12, "command": "Compare" },
    { "q": "To what extent are transition metal complexes useful in medicine and industry, and how do their structural features make this possible?", "marks": 12, "command": "To what extent" },
  ],

  // CD — Colour by Design
  "CD": [
    { "q": "Compare the reactivity of aldehydes and ketones towards nucleophilic addition reactions, with specific examples.", "marks": 9, "command": "Compare" },
    { "q": "Explain the mechanism of nucleophilic addition of hydrogen cyanide to a carbonyl compound and discuss the importance of this reaction in synthesis.", "marks": 12, "command": "Explain" },
    { "q": "Explain the bonding in benzene using delocalisation theory and discuss the experimental evidence that supports this model over the Kekule structure.", "marks": 12, "command": "Explain" },
    { "q": "Compare the mechanisms of electrophilic substitution for nitration and halogenation of benzene, including the role of the catalyst.", "marks": 12, "command": "Compare" },
    { "q": "Describe the synthesis of an azo dye from phenylamine, including the diazotisation and coupling steps.", "marks": 9, "command": "Describe" },
    { "q": "Discuss how thin-layer chromatography and gas-liquid chromatography are used to separate and identify components of a mixture.", "marks": 12, "command": "Discuss" },
    { "q": "Explain the origins of colour in organic molecules and discuss how the extent of delocalisation determines the colour that is observed.", "marks": 12, "command": "Explain" },
    { "q": "Discuss how a dye molecule is designed, explaining the roles of the chromophore, of the groups that modify it, of solubilising groups and of fibre-bonding groups.", "marks": 12, "command": "Discuss" },
    { "q": "Compare the ways in which different classes of dye attach themselves to fibres, and relate these to the fastness of the dye.", "marks": 9, "command": "Compare" },
    { "q": "Explain the structural differences between fats and oils and describe the reactions that they undergo.", "marks": 9, "command": "Explain" },
    { "q": "Compare the electrophilic substitution reactions of benzene, including halogenation, nitration, sulfonation and the two Friedel-Crafts reactions.", "marks": 12, "command": "Compare" },
  ],
};
