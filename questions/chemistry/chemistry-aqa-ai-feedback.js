/*
 * AQA A-level Chemistry (7405) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12, 16, 20, 25. Command words: Describe / Explain /
 * Compare / Discuss / Assess / Evaluate / To what extent.
 * Model answers are generated on demand by the AI marker — they are not
 * stored here.
 */

const CHEMISTRY_AQA_AI_FEEDBACK = {

  /* ─────────────────────── P1 Physical Chemistry I ─────────────────────── */
  'P1': [
    { q: 'Describe the principles of time-of-flight mass spectrometry and explain how the resulting spectrum can be used to determine the relative atomic mass of an element with several isotopes.', marks: 9, command: 'Describe' },
    { q: 'Explain how successive ionisation energies provide evidence for the existence of electron shells and sub-shells, and discuss the trends seen across Period 3.', marks: 12, command: 'Explain' },
    { q: 'Compare the structure and physical properties of giant ionic, simple molecular, giant covalent and metallic lattices, using specific examples.', marks: 12, command: 'Compare' },
    { q: 'Explain the shapes of the molecules NH3, BF3, SF6 and PCl5 using electron-pair repulsion theory and account for any differences in bond angles.', marks: 9, command: 'Explain' },
    { q: 'Discuss how electronegativity differences in covalent bonds give rise to bond polarity, and explain how this leads to the various types of intermolecular force.', marks: 12, command: 'Discuss' },
    { q: 'Describe how the enthalpy change of a neutralisation reaction can be determined experimentally using calorimetry and explain how Hess\'s law allows enthalpy changes to be calculated indirectly.', marks: 12, command: 'Describe' },
    { q: 'Explain how collision theory, the Maxwell-Boltzmann distribution and activation energy account for the effects of temperature, concentration and catalysts on the rate of reaction.', marks: 16, command: 'Explain' },
    { q: 'Discuss how Le Chatelier\'s principle is used to predict how changes in temperature, pressure and concentration affect the position of equilibrium, with reference to the industrial production of ammonia and sulfuric acid.', marks: 16, command: 'Discuss' },
    { q: 'Explain how oxidation numbers are assigned and used to identify oxidation, reduction and disproportionation reactions, with examples drawn from the chemistry of chlorine.', marks: 9, command: 'Explain' },
    { q: 'Compare the bonding in and properties of methane, ammonia, water and hydrogen fluoride, and explain why their boiling points do not increase smoothly with relative molecular mass.', marks: 9, command: 'Compare' },
    { q: 'Describe how a back titration can be used to determine the percentage of calcium carbonate in eggshell, and evaluate the accuracy of the method.', marks: 12, command: 'Describe' },
    { q: 'Assess the importance of the mole concept in stoichiometric calculations, including the determination of empirical and molecular formulae.', marks: 9, command: 'Assess' },
    { q: 'Explain how the equilibrium constant Kc is calculated and discuss what its value tells us about the position of equilibrium.', marks: 9, command: 'Explain' },
    { q: 'Evaluate the use of percentage yield, atom economy and percentage uncertainty as measures of the success of a chemical synthesis.', marks: 12, command: 'Evaluate' },
    { q: 'To what extent does dynamic equilibrium predict the yield of an industrial process, given the practical constraints chemical engineers face?', marks: 12, command: 'To what extent' },
  ],

  /* ─────────────────────── P2 Physical Chemistry II ─────────────────────── */
  'P2': [
    { q: 'Describe the construction of a Born-Haber cycle for sodium chloride and explain how it can be used to determine the lattice enthalpy.', marks: 12, command: 'Describe' },
    { q: 'Compare the experimental and theoretical lattice enthalpies of sodium chloride and silver chloride, and explain what the differences reveal about the bonding in each.', marks: 9, command: 'Compare' },
    { q: 'Discuss how entropy and Gibbs free energy together determine whether a reaction is feasible at a given temperature.', marks: 12, command: 'Discuss' },
    { q: 'Explain how the rate equation for a reaction is determined experimentally using the initial rates method, and describe what the orders of reaction reveal about the rate-determining step.', marks: 12, command: 'Explain' },
    { q: 'Compare the orders of reaction with respect to each reactant and explain how they relate to the mechanism, including the rate-determining step.', marks: 9, command: 'Compare' },
    { q: 'Explain how the equilibrium constants Kc and Kp differ in their formulation, and discuss why temperature is the only factor that changes their value.', marks: 12, command: 'Explain' },
    { q: 'Describe the construction of a simple electrochemical cell using copper and zinc electrodes, and explain how the standard electrode potential is measured against the standard hydrogen electrode.', marks: 12, command: 'Describe' },
    { q: 'Evaluate the use of hydrogen fuel cells compared with rechargeable lithium-ion batteries as alternatives to fossil fuels in transport.', marks: 12, command: 'Evaluate' },
    { q: 'Discuss the action of buffers in maintaining a stable pH and explain their importance in biological systems such as blood.', marks: 12, command: 'Discuss' },
    { q: 'Explain the shape of a pH titration curve for a strong acid with a weak base and discuss how the choice of indicator depends on the curve.', marks: 12, command: 'Explain' },
    { q: 'Assess how changes in temperature affect the equilibrium constant of an exothermic reaction compared with an endothermic reaction.', marks: 9, command: 'Assess' },
    { q: 'To what extent is Gibbs free energy a reliable predictor of whether a reaction will actually occur at a given temperature?', marks: 12, command: 'To what extent' },
    { q: 'Discuss the Arrhenius equation and explain how a graph of ln k against 1/T can be used to determine the activation energy of a reaction.', marks: 12, command: 'Discuss' },
    { q: 'Explain how the difference between a strong and weak acid is reflected in the values of Ka and pKa, and describe how pH calculations differ between the two.', marks: 12, command: 'Explain' },
    { q: 'Compare standard electrode potentials as a tool for predicting the feasibility of redox reactions with the actual outcome observed in the laboratory.', marks: 12, command: 'Compare' },
  ],

  /* ─────────────────────── I1 Inorganic Chemistry I ─────────────────────── */
  'I1': [
    { q: 'Discuss how the trends in atomic radius, ionisation energy and electronegativity across Period 3 are explained by changes in nuclear charge and shielding.', marks: 12, command: 'Discuss' },
    { q: 'Compare the reactivity of the Group 2 metals with water and explain the trend down the group in terms of atomic structure.', marks: 9, command: 'Compare' },
    { q: 'Explain the trend in solubility of the Group 2 hydroxides and sulfates and describe a chemical test that distinguishes between them.', marks: 12, command: 'Explain' },
    { q: 'Describe the test for sulfate ions using barium chloride and explain why dilute hydrochloric acid is added before the test.', marks: 6, command: 'Describe' },
    { q: 'Compare the reactivity of Group 1 and Group 2 metals with water and oxygen, and explain the differences in terms of ionisation energies.', marks: 9, command: 'Compare' },
    { q: 'Explain the trends in boiling point, electronegativity and oxidising power down Group 7 and account for them in terms of atomic structure.', marks: 12, command: 'Explain' },
    { q: 'Describe the disproportionation reactions of chlorine with cold dilute and hot concentrated sodium hydroxide, and explain the change in oxidation state.', marks: 9, command: 'Describe' },
    { q: 'Discuss the use of chlorine in water treatment, including the benefits and risks of its use.', marks: 9, command: 'Discuss' },
    { q: 'Explain how silver nitrate and ammonia solutions are used to test for the halide ions and describe the observations made.', marks: 9, command: 'Explain' },
    { q: 'Assess the trend in the reducing power of the halide ions and the reactions of solid sodium halides with concentrated sulfuric acid.', marks: 12, command: 'Assess' },
    { q: 'Discuss the trend in the oxidising power of the halogens, illustrating your answer with displacement reactions in aqueous solution.', marks: 9, command: 'Discuss' },
    { q: 'Evaluate the uses of chlorine, bromine and iodine in industry and medicine, and assess the risks associated with their use.', marks: 12, command: 'Evaluate' },
    { q: 'Compare the thermal stabilities of the Group 2 carbonates and nitrates and explain the trend down the group in terms of polarising power.', marks: 9, command: 'Compare' },
    { q: 'Explain the redox chemistry observed when Group 2 metals react with water, and discuss the trend in vigour down the group.', marks: 9, command: 'Explain' },
    { q: 'To what extent do the elements of Group 7 exhibit similar chemical properties, and how do these properties change down the group?', marks: 12, command: 'To what extent' },
  ],

  /* ─────────────────────── I2 Inorganic Chemistry II ─────────────────────── */
  'I2': [
    { q: 'Describe and explain the reactions of the Period 3 elements sodium, magnesium and aluminium with water and oxygen.', marks: 9, command: 'Describe' },
    { q: 'Discuss the reactions of the Period 3 oxides with water, and explain the trend in pH of the resulting solutions.', marks: 12, command: 'Discuss' },
    { q: 'Compare the acid-base behaviour of the Period 3 oxides Na2O, MgO, Al2O3, SiO2, P4O10 and SO3, with reference to their bonding.', marks: 12, command: 'Compare' },
    { q: 'Explain the definition of a transition metal and discuss the characteristic properties that result from the partially filled d sub-shell.', marks: 9, command: 'Explain' },
    { q: 'Discuss the origin of colour in transition metal complexes in terms of d-orbital splitting and electron transitions.', marks: 12, command: 'Discuss' },
    { q: 'Describe the structure and action of cisplatin as an anti-cancer drug, and discuss the ethical issues raised by its side effects.', marks: 9, command: 'Describe' },
    { q: 'Compare the ligand exchange reactions of the hexaaqua copper(II) ion with ammonia, ethane-1,2-diamine and chloride ions.', marks: 12, command: 'Compare' },
    { q: 'Explain why transition metals are effective catalysts and illustrate your answer with both a heterogeneous and a homogeneous example.', marks: 12, command: 'Explain' },
    { q: 'Discuss the reactions of aqueous transition metal ions with sodium hydroxide and ammonia solutions, including the observations made.', marks: 12, command: 'Discuss' },
    { q: 'Assess the importance of redox chemistry in the behaviour of transition metals, with reference to vanadium and manganese.', marks: 12, command: 'Assess' },
    { q: 'Explain the difference between heterogeneous and homogeneous catalysis, with at least two examples of each from industrial chemistry.', marks: 12, command: 'Explain' },
    { q: 'Describe the procedure and calculation involved in titrating Fe(II) ions in solution against acidified potassium manganate(VII).', marks: 9, command: 'Describe' },
    { q: 'Discuss the colour changes observed in redox reactions of transition metal ions, with reference to vanadium and chromium chemistry.', marks: 12, command: 'Discuss' },
    { q: 'Evaluate the environmental impact of using transition metal catalysts in industry and the steps taken to recover and recycle them.', marks: 9, command: 'Evaluate' },
    { q: 'To what extent are transition metal complexes useful in medicine, and how do their properties contribute to their effectiveness?', marks: 12, command: 'To what extent' },
  ],

  /* ─────────────────────── O1 Organic Chemistry I ─────────────────────── */
  'O1': [
    { q: 'Describe the IUPAC system of nomenclature for organic compounds and explain the different types of structural isomerism with examples.', marks: 9, command: 'Describe' },
    { q: 'Compare the mechanisms of free-radical substitution in alkanes and electrophilic addition in alkenes, with full mechanistic detail.', marks: 12, command: 'Compare' },
    { q: 'Explain electrophilic addition to alkenes and apply Markovnikov\'s rule to predict the major product when an unsymmetrical alkene reacts with hydrogen bromide.', marks: 9, command: 'Explain' },
    { q: 'Discuss the difference between SN1 and SN2 nucleophilic substitution mechanisms, including the factors that favour each pathway.', marks: 12, command: 'Discuss' },
    { q: 'Compare the conditions and products of nucleophilic substitution and elimination reactions of haloalkanes.', marks: 9, command: 'Compare' },
    { q: 'Describe the industrial production of ethanol by fermentation of glucose and by hydration of ethene, and compare the two processes.', marks: 12, command: 'Describe' },
    { q: 'Explain how primary, secondary and tertiary alcohols can be distinguished using acidified potassium dichromate, and describe the products formed in each case.', marks: 9, command: 'Explain' },
    { q: 'Discuss the sustainability of biofuels such as bioethanol compared with conventional fossil fuels, with reference to carbon neutrality.', marks: 12, command: 'Discuss' },
    { q: 'Assess the environmental impact of fractional distillation and cracking in the petrochemical industry.', marks: 12, command: 'Assess' },
    { q: 'Explain how mass spectrometry is used to identify organic molecules, with reference to the molecular ion peak and characteristic fragmentation patterns.', marks: 9, command: 'Explain' },
    { q: 'Describe how infrared spectroscopy is used to identify functional groups in an organic compound and discuss the importance of the fingerprint region.', marks: 9, command: 'Describe' },
    { q: 'Discuss the use of test-tube reactions to identify the functional groups alkene, halogenoalkane, alcohol and aldehyde.', marks: 12, command: 'Discuss' },
    { q: 'Compare addition polymerisation of alkenes with condensation polymerisation, with reference to monomer types and the by-products formed.', marks: 9, command: 'Compare' },
    { q: 'Evaluate the historical use of chlorofluorocarbons as refrigerants and assess the success of international action in protecting the ozone layer.', marks: 12, command: 'Evaluate' },
    { q: 'To what extent can spectroscopic techniques alone identify an organic compound, and what role does chemical analysis still play?', marks: 12, command: 'To what extent' },
  ],

  /* ─────────────────────── O2 Organic Chemistry II ─────────────────────── */
  'O2': [
    { q: 'Discuss optical isomerism in carbon compounds and explain why optical isomers have identical physical properties but rotate plane-polarised light in opposite directions.', marks: 9, command: 'Discuss' },
    { q: 'Compare the reactivity of aldehydes and ketones towards nucleophilic addition reactions, with reference to specific examples.', marks: 9, command: 'Compare' },
    { q: 'Explain the mechanism of nucleophilic addition of hydrogen cyanide to carbonyl compounds and discuss the importance of this reaction in synthesis.', marks: 12, command: 'Explain' },
    { q: 'Describe the formation of esters from carboxylic acids and alcohols and explain why concentrated sulfuric acid is used as a catalyst.', marks: 9, command: 'Describe' },
    { q: 'Discuss the saponification of triglycerides to produce soap and explain the difference between soaps and synthetic detergents.', marks: 12, command: 'Discuss' },
    { q: 'Explain the bonding in benzene using delocalisation theory and discuss the evidence that supports this model over the Kekule structure.', marks: 12, command: 'Explain' },
    { q: 'Compare the mechanisms of electrophilic substitution for the nitration and the halogenation of benzene, including the role of the catalyst.', marks: 12, command: 'Compare' },
    { q: 'Describe the synthesis of an azo dye from phenylamine, including the diazotisation and coupling steps.', marks: 9, command: 'Describe' },
    { q: 'Discuss the basicity of aliphatic and aromatic amines, and explain the trend in terms of inductive and mesomeric effects.', marks: 12, command: 'Discuss' },
    { q: 'Explain how amino acids combine to form the primary structure of proteins and how this primary structure determines higher-order folding.', marks: 12, command: 'Explain' },
    { q: 'Discuss the behaviour of amino acids as zwitterions and explain the meaning of the isoelectric point.', marks: 9, command: 'Discuss' },
    { q: 'Compare the disposal options for addition and condensation polymers and assess their respective environmental impacts.', marks: 12, command: 'Compare' },
    { q: 'Evaluate the use of high-resolution NMR spectroscopy in identifying organic compounds, with reference to both proton and carbon-13 spectra.', marks: 12, command: 'Evaluate' },
    { q: 'Describe how thin-layer chromatography and high-performance liquid chromatography are used to separate and identify components of a mixture.', marks: 9, command: 'Describe' },
    { q: 'To what extent does retrosynthesis allow chemists to plan multi-step syntheses of complex organic molecules?', marks: 12, command: 'To what extent' },
  ],

};
