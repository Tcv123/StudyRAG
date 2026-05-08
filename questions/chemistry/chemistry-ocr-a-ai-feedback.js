/*
 * OCR A A-level Chemistry (H432) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12, 16, 20, 25. Command words: Describe / Explain /
 * Compare / Discuss / Assess / Evaluate / To what extent.
 * Model answers are generated on demand by the AI marker — they are not
 * stored here.
 */

const CHEMISTRY_OCR_A_AI_FEEDBACK = {

  /* ────────── M1 Development of Practical Skills ────────── */
  'M1': [
    { q: 'Describe the practical procedure for preparing a standard solution from a soluble solid, and explain how to minimise the main sources of error.', marks: 9, command: 'Describe' },
    { q: 'Explain how the apparatus and procedure of a simple acid-base titration are designed to ensure accurate and reproducible results.', marks: 12, command: 'Explain' },
    { q: 'Compare the use of a burette and a graduated pipette in volumetric analysis, with reference to their precision and the role each plays in a titration.', marks: 9, command: 'Compare' },
    { q: 'Discuss the importance of recording uncertainties in experimental measurements and explain how they are combined to give the overall percentage uncertainty.', marks: 12, command: 'Discuss' },
    { q: 'Describe the correct technique for measuring the temperature change in a calorimetry experiment and explain the use of a cooling-curve correction.', marks: 9, command: 'Describe' },
    { q: 'Explain how to design a fair test that investigates the effect of concentration on the rate of a chemical reaction.', marks: 9, command: 'Explain' },
    { q: 'Assess the validity of conclusions drawn from a small set of experimental data, with reference to the importance of repeats and concordant results.', marks: 9, command: 'Assess' },
    { q: 'Evaluate the use of a colorimeter in following the rate of a reaction and discuss its advantages over titrimetric methods.', marks: 12, command: 'Evaluate' },
    { q: 'Describe how to carry out a redox titration of iron(II) ions with potassium manganate(VII), and explain the colour change that signals the end point.', marks: 9, command: 'Describe' },
    { q: 'Compare the techniques of recrystallisation and distillation as methods for purifying organic liquids and solids.', marks: 9, command: 'Compare' },
    { q: 'Discuss how thin-layer chromatography is used to monitor the progress of a reaction and explain the meaning of the Rf value.', marks: 9, command: 'Discuss' },
    { q: 'Explain how the use of a reflux condenser allows reactions to be carried out at high temperature without loss of volatile reagents.', marks: 6, command: 'Explain' },
    { q: 'Describe the appropriate safety precautions when handling concentrated acids, organic solvents and reactive metals in a school laboratory.', marks: 9, command: 'Describe' },
    { q: 'Evaluate the use of digital data-logging equipment in modern chemistry experiments compared with traditional manual measurement.', marks: 9, command: 'Evaluate' },
    { q: 'To what extent do practical investigations performed at A-level reflect the methods used by professional chemists in research and industry?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── M2 Foundations in Chemistry ────────── */
  'M2': [
    { q: 'Describe the principles of time-of-flight mass spectrometry and explain how the resulting spectrum is used to determine relative atomic mass.', marks: 9, command: 'Describe' },
    { q: 'Explain how successive ionisation energies provide evidence for the existence of electron shells and sub-shells.', marks: 12, command: 'Explain' },
    { q: 'Compare ionic, covalent and metallic bonding and explain how the type of bonding determines the physical properties of the resulting substance.', marks: 12, command: 'Compare' },
    { q: 'Discuss the shapes and bond angles of molecules and ions using electron-pair repulsion theory, with examples that include lone pairs.', marks: 12, command: 'Discuss' },
    { q: 'Explain how electronegativity gives rise to bond polarity and describe how the molecular shape determines whether the molecule overall has a permanent dipole.', marks: 9, command: 'Explain' },
    { q: 'Describe the three main types of intermolecular force and explain how they account for the trends in boiling point of the noble gases and the hydrogen halides.', marks: 12, command: 'Describe' },
    { q: 'Compare the structure and bonding in diamond, graphite and ice, and explain how each structure is related to its physical properties.', marks: 12, command: 'Compare' },
    { q: 'Explain the meaning of empirical and molecular formulae and describe how each can be deduced from experimental data.', marks: 9, command: 'Explain' },
    { q: 'Describe the procedure for carrying out a simple acid-base titration and explain how the results are used to calculate the concentration of an unknown solution.', marks: 9, command: 'Describe' },
    { q: 'Discuss how percentage yield, atom economy and percentage uncertainty together provide a measure of the success of a chemical synthesis.', marks: 12, command: 'Discuss' },
    { q: 'Assess the importance of the mole concept in stoichiometric calculations.', marks: 9, command: 'Assess' },
    { q: 'Evaluate the use of mass spectrometry in identifying both elemental composition and molecular structure of organic compounds.', marks: 12, command: 'Evaluate' },
    { q: 'Explain why the bond angle in NH3 is smaller than in CH4 and the bond angle in H2O is smaller still.', marks: 9, command: 'Explain' },
    { q: 'Compare the bonding and properties of giant ionic and giant covalent lattices.', marks: 9, command: 'Compare' },
    { q: 'To what extent does the type of intermolecular force present account for the boiling points of the period 2 hydrides CH4, NH3, H2O and HF?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── M3 Periodic Table and Energy ────────── */
  'M3': [
    { q: 'Discuss the trends in atomic radius, ionisation energy and electronegativity across Period 3 and explain them in terms of nuclear charge and shielding.', marks: 12, command: 'Discuss' },
    { q: 'Compare the reactivity of the Group 2 metals with water as the group is descended and explain the trend in terms of atomic structure.', marks: 9, command: 'Compare' },
    { q: 'Explain the trend in solubility of the Group 2 hydroxides and sulfates and describe a chemical test that distinguishes between them.', marks: 12, command: 'Explain' },
    { q: 'Describe the disproportionation reactions of chlorine with cold dilute and hot concentrated sodium hydroxide and explain the change in oxidation state.', marks: 9, command: 'Describe' },
    { q: 'Discuss the trends in boiling point, electronegativity and oxidising power down Group 7 and account for them in terms of atomic structure.', marks: 12, command: 'Discuss' },
    { q: 'Compare the reactions of solid sodium halides with concentrated sulfuric acid and discuss the trend in reducing power of the halide ions.', marks: 12, command: 'Compare' },
    { q: 'Explain how the standard enthalpy change of a reaction can be determined experimentally using calorimetry and discuss the main sources of error.', marks: 12, command: 'Explain' },
    { q: 'Describe how Hess\'s law allows enthalpy changes to be calculated indirectly and explain why it is consistent with the first law of thermodynamics.', marks: 9, command: 'Describe' },
    { q: 'Discuss how mean bond enthalpies are used to estimate the enthalpy change of a reaction and explain why this estimate may differ from the experimental value.', marks: 9, command: 'Discuss' },
    { q: 'Explain how collision theory and the Maxwell-Boltzmann distribution account for the effects of temperature, concentration and catalysts on the rate of reaction.', marks: 16, command: 'Explain' },
    { q: 'Describe how the equilibrium constant Kc is calculated and explain what its magnitude tells us about the position of equilibrium.', marks: 9, command: 'Describe' },
    { q: 'Discuss how Le Chatelier\'s principle is used to predict the effect of changes in temperature, pressure and concentration on a reversible reaction.', marks: 12, command: 'Discuss' },
    { q: 'Assess the conditions used in the Haber and Contact processes as a compromise between yield, rate and economic cost.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the use of chlorine in water treatment, including the benefits and risks involved.', marks: 9, command: 'Evaluate' },
    { q: 'To what extent does the equilibrium constant determine the yield of an industrial process given the practical constraints chemical engineers face?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── M4 Core Organic Chemistry ────────── */
  'M4': [
    { q: 'Describe the IUPAC system of nomenclature for organic compounds and explain the different forms of structural and stereoisomerism with examples.', marks: 12, command: 'Describe' },
    { q: 'Compare the mechanisms of free-radical substitution in alkanes and electrophilic addition to alkenes, with full mechanistic detail.', marks: 12, command: 'Compare' },
    { q: 'Explain electrophilic addition to alkenes and apply Markovnikov\'s rule to predict the major product when an unsymmetrical alkene reacts with hydrogen bromide.', marks: 9, command: 'Explain' },
    { q: 'Discuss the difference between SN1 and SN2 nucleophilic substitution mechanisms and the factors that determine which is preferred.', marks: 12, command: 'Discuss' },
    { q: 'Describe the production of ethanol industrially by fermentation of glucose and by hydration of ethene, and compare the two methods.', marks: 12, command: 'Describe' },
    { q: 'Explain how acidified potassium dichromate distinguishes primary, secondary and tertiary alcohols and describe the products of each oxidation.', marks: 9, command: 'Explain' },
    { q: 'Compare addition polymerisation of alkenes with condensation polymerisation, with reference to monomer types and the by-products formed.', marks: 9, command: 'Compare' },
    { q: 'Discuss the sustainability of biofuels such as bioethanol compared with conventional fossil fuels.', marks: 12, command: 'Discuss' },
    { q: 'Explain how mass spectrometry is used to identify organic molecules, with reference to the molecular ion peak and characteristic fragmentation patterns.', marks: 9, command: 'Explain' },
    { q: 'Describe how infrared spectroscopy is used to identify functional groups in an organic compound and discuss the importance of the fingerprint region.', marks: 9, command: 'Describe' },
    { q: 'Discuss the use of test-tube reactions to identify the alkene, halogenoalkane, alcohol and carbonyl functional groups.', marks: 12, command: 'Discuss' },
    { q: 'Assess the environmental impact of the petrochemical industry, with reference to fractional distillation, cracking and polymer disposal.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the historical use of chlorofluorocarbons as refrigerants and assess the success of international action in protecting the ozone layer.', marks: 12, command: 'Evaluate' },
    { q: 'Explain the meaning of E-Z isomerism in alkenes and describe how the Cahn-Ingold-Prelog priority rules are applied.', marks: 9, command: 'Explain' },
    { q: 'To what extent can spectroscopic techniques alone determine the full structure of an unknown organic compound?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── M5 Physical Chemistry & Transition Elements ────────── */
  'M5': [
    { q: 'Describe the construction of a Born-Haber cycle for sodium chloride and explain how it can be used to determine the lattice enthalpy.', marks: 12, command: 'Describe' },
    { q: 'Compare the experimental and theoretical lattice enthalpies of an ionic compound and explain what the differences reveal about the bonding.', marks: 9, command: 'Compare' },
    { q: 'Discuss how entropy and Gibbs free energy together determine whether a reaction is feasible at a given temperature.', marks: 12, command: 'Discuss' },
    { q: 'Explain how the rate equation for a reaction is determined experimentally using the initial rates method.', marks: 12, command: 'Explain' },
    { q: 'Compare the orders of reaction with respect to each reactant and explain what they reveal about the mechanism, including the rate-determining step.', marks: 9, command: 'Compare' },
    { q: 'Describe the construction of a simple electrochemical cell and explain how the standard electrode potential is measured against the standard hydrogen electrode.', marks: 12, command: 'Describe' },
    { q: 'Explain the definition of a transition metal and discuss the characteristic properties that result from a partially filled d sub-shell.', marks: 9, command: 'Explain' },
    { q: 'Discuss the origin of colour in transition metal complexes in terms of d-orbital splitting and electron transitions.', marks: 12, command: 'Discuss' },
    { q: 'Compare the ligand exchange reactions of the hexaaqua copper(II) ion with ammonia, ethane-1,2-diamine and chloride ions.', marks: 12, command: 'Compare' },
    { q: 'Describe the structure and action of cisplatin as an anti-cancer drug and discuss the ethical issues raised by its side effects.', marks: 9, command: 'Describe' },
    { q: 'Explain why transition metals are effective catalysts and illustrate your answer with both a heterogeneous and a homogeneous example.', marks: 12, command: 'Explain' },
    { q: 'Assess the use of standard electrode potentials in predicting the feasibility of redox reactions, with reference to disproportionation.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the use of hydrogen fuel cells compared with rechargeable lithium-ion batteries as alternatives to fossil fuels in transport.', marks: 12, command: 'Evaluate' },
    { q: 'Discuss the action of buffers in maintaining a stable pH and explain their importance in biological systems such as blood.', marks: 12, command: 'Discuss' },
    { q: 'To what extent is Gibbs free energy a reliable predictor of whether a reaction will actually take place at a given temperature?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── M6 Organic Chemistry & Analysis ────────── */
  'M6': [
    { q: 'Discuss the optical isomerism shown by carbon compounds containing a chiral centre and explain the importance of optical isomerism in pharmaceuticals.', marks: 12, command: 'Discuss' },
    { q: 'Compare the reactivity of aldehydes and ketones towards nucleophilic addition reactions, with specific examples.', marks: 9, command: 'Compare' },
    { q: 'Explain the mechanism of nucleophilic addition of hydrogen cyanide to a carbonyl compound and discuss its importance in synthesis.', marks: 12, command: 'Explain' },
    { q: 'Describe the formation of esters from carboxylic acids and alcohols and explain why concentrated sulfuric acid is used as a catalyst.', marks: 9, command: 'Describe' },
    { q: 'Discuss the saponification of triglycerides to produce soap and explain the difference between soaps and synthetic detergents.', marks: 12, command: 'Discuss' },
    { q: 'Explain the bonding in benzene using delocalisation theory and discuss the experimental evidence that supports this model over the Kekule structure.', marks: 12, command: 'Explain' },
    { q: 'Compare the mechanisms of electrophilic substitution for nitration and halogenation of benzene, including the role of the catalyst.', marks: 12, command: 'Compare' },
    { q: 'Describe the synthesis of an azo dye from phenylamine, including the diazotisation and coupling steps.', marks: 9, command: 'Describe' },
    { q: 'Discuss the basicity of aliphatic and aromatic amines and explain the trend in terms of inductive and mesomeric effects.', marks: 12, command: 'Discuss' },
    { q: 'Explain how amino acids combine to form the primary structure of proteins and how this primary structure influences higher levels of folding.', marks: 12, command: 'Explain' },
    { q: 'Describe the behaviour of amino acids as zwitterions and explain the meaning of the isoelectric point.', marks: 9, command: 'Describe' },
    { q: 'Compare the disposal options for addition and condensation polymers and assess their environmental impacts.', marks: 12, command: 'Compare' },
    { q: 'Evaluate the use of high-resolution NMR spectroscopy in identifying organic compounds, with reference to both proton and carbon-13 spectra.', marks: 12, command: 'Evaluate' },
    { q: 'Discuss how thin-layer chromatography and gas-liquid chromatography are used to separate and identify components of a mixture.', marks: 12, command: 'Discuss' },
    { q: 'To what extent does retrosynthesis allow chemists to plan the multi-step synthesis of a complex organic molecule?', marks: 12, command: 'To what extent' },
  ],

};
