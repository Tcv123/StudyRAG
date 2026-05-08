/*
 * Edexcel A-level Chemistry (9CH0) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12, 16, 20, 25. Command words: Describe / Explain /
 * Compare / Discuss / Assess / Evaluate / To what extent.
 * Model answers are generated on demand by the AI marker — they are not
 * stored here.
 */

const CHEMISTRY_EDEXCEL_AI_FEEDBACK = {

  /* ────────── T1 Atomic Structure, Bonding and Energetics ────────── */
  'T1': [
    { q: 'Describe the principal features of the modern model of the atom and explain how mass spectrometry provides direct evidence for the existence of isotopes.', marks: 9, command: 'Describe' },
    { q: 'Explain how the patterns of first ionisation energies across Period 2 and Period 3 provide evidence for the structure of atomic energy levels and sub-shells.', marks: 12, command: 'Explain' },
    { q: 'Compare ionic, covalent and metallic bonding, and explain how the type of bonding determines the physical properties of the resulting substance.', marks: 12, command: 'Compare' },
    { q: 'Discuss how the electron-pair repulsion theory accounts for the shapes and bond angles of molecules and ions, including those with lone pairs of electrons.', marks: 12, command: 'Discuss' },
    { q: 'Explain how electronegativity gives rise to bond polarity and discuss how molecular shape determines whether the molecule overall has a permanent dipole.', marks: 9, command: 'Explain' },
    { q: 'Describe the three main types of intermolecular force and explain how they account for the trends in boiling points of the halogens and the hydrogen halides.', marks: 12, command: 'Describe' },
    { q: 'Compare the structure and bonding in diamond, graphite and graphene, and explain how each structure is related to its physical properties and uses.', marks: 12, command: 'Compare' },
    { q: 'Explain how the standard enthalpy change of combustion of a fuel can be determined experimentally and discuss the main sources of error in the measurement.', marks: 12, command: 'Explain' },
    { q: 'Describe how Hess\'s law allows enthalpy changes to be calculated indirectly and explain why it is consistent with the first law of thermodynamics.', marks: 9, command: 'Describe' },
    { q: 'Discuss how mean bond enthalpies can be used to estimate the enthalpy change of a reaction and explain why this estimate may differ from the experimental value.', marks: 9, command: 'Discuss' },
    { q: 'Assess the importance of the mole concept in stoichiometric calculations, including the determination of empirical and molecular formulae.', marks: 9, command: 'Assess' },
    { q: 'Evaluate the relative importance of percentage yield and atom economy as measures of the efficiency of a chemical synthesis.', marks: 12, command: 'Evaluate' },
    { q: 'Explain how successive ionisation energies can be used to deduce the group of an element in the periodic table.', marks: 9, command: 'Explain' },
    { q: 'Compare the bonding in giant ionic and giant covalent lattices and explain why their properties differ even though both involve very strong forces.', marks: 9, command: 'Compare' },
    { q: 'To what extent does the type of intermolecular force present account for the boiling points of the period 2 hydrides CH4, NH3, H2O and HF?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── T2 Kinetics, Equilibrium and Redox ────────── */
  'T2': [
    { q: 'Explain how the Maxwell-Boltzmann distribution of molecular energies accounts for the effect of temperature and catalyst on the rate of a chemical reaction.', marks: 12, command: 'Explain' },
    { q: 'Describe how the rate of a reaction can be measured experimentally and explain how the order with respect to a reactant can be determined from the data.', marks: 12, command: 'Describe' },
    { q: 'Compare the action of homogeneous and heterogeneous catalysts and discuss the industrial importance of each.', marks: 12, command: 'Compare' },
    { q: 'Discuss how Le Chatelier\'s principle is used to predict how changes in temperature, pressure and concentration affect the position of a dynamic equilibrium.', marks: 12, command: 'Discuss' },
    { q: 'Explain why a catalyst increases the rate of a reaction without altering the position of equilibrium, with reference to a Maxwell-Boltzmann distribution.', marks: 9, command: 'Explain' },
    { q: 'Describe how the equilibrium constant Kc is calculated from experimental data and explain what its magnitude tells us about the extent of reaction.', marks: 9, command: 'Describe' },
    { q: 'Discuss the conditions used in the Haber process for the synthesis of ammonia and explain how they represent a compromise between yield and rate.', marks: 12, command: 'Discuss' },
    { q: 'Compare the conditions used in the Haber process and the Contact process, and explain why the conditions are not those that would give the maximum equilibrium yield.', marks: 12, command: 'Compare' },
    { q: 'Explain the rules for assigning oxidation numbers and use them to identify oxidation, reduction and disproportionation in a series of reactions.', marks: 9, command: 'Explain' },
    { q: 'Describe how a redox titration of iron(II) ions with potassium manganate(VII) is carried out and explain the colour change that signals the end point.', marks: 9, command: 'Describe' },
    { q: 'Assess the use of catalysts in industrial chemistry, including the environmental and economic considerations involved.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the importance of dynamic equilibrium in industrial processes, illustrating your answer with at least two examples.', marks: 12, command: 'Evaluate' },
    { q: 'Discuss how the Arrhenius equation links temperature, activation energy and rate constant, and explain how a graph of ln k against 1/T can be used.', marks: 12, command: 'Discuss' },
    { q: 'Explain how the rate-determining step is identified from a rate equation and discuss what this reveals about the mechanism of a reaction.', marks: 9, command: 'Explain' },
    { q: 'To what extent does the rate equation provide direct evidence for the mechanism of a reaction?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── T3 Inorganic Chemistry ────────── */
  'T3': [
    { q: 'Discuss the trends in atomic radius, ionisation energy and electronegativity across Period 3 and explain them in terms of nuclear charge and shielding.', marks: 12, command: 'Discuss' },
    { q: 'Describe and explain the reactions of the Period 3 elements sodium, magnesium, aluminium and silicon with water and oxygen.', marks: 12, command: 'Describe' },
    { q: 'Compare the acid-base behaviour of the Period 3 oxides Na2O, MgO, Al2O3, SiO2, P4O10 and SO3, with reference to their bonding and structure.', marks: 12, command: 'Compare' },
    { q: 'Explain the trend in the reactivity of the Group 2 metals with water as the group is descended and discuss the underlying reasons.', marks: 9, command: 'Explain' },
    { q: 'Describe a chemical test that distinguishes between the Group 2 sulfates and the Group 2 hydroxides in solution, and explain the observations.', marks: 9, command: 'Describe' },
    { q: 'Discuss the trends in boiling point, electronegativity and oxidising power down Group 7 and explain them in terms of atomic structure.', marks: 12, command: 'Discuss' },
    { q: 'Explain the disproportionation reaction of chlorine with cold dilute and hot concentrated sodium hydroxide and discuss the change in oxidation state.', marks: 9, command: 'Explain' },
    { q: 'Compare the reactions of solid sodium halides with concentrated sulfuric acid and explain how the trend in reducing power of the halide ions is illustrated.', marks: 12, command: 'Compare' },
    { q: 'Describe the use of silver nitrate followed by ammonia to test for the halide ions and explain the observations made.', marks: 9, command: 'Describe' },
    { q: 'Discuss the use of chlorine in water treatment and assess the balance between the benefits and risks.', marks: 9, command: 'Discuss' },
    { q: 'Assess the trend in thermal stability of the Group 2 carbonates and nitrates in terms of polarising power.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the uses of chlorine, bromine and iodine in industry and medicine, including any environmental considerations.', marks: 12, command: 'Evaluate' },
    { q: 'Explain why aluminium oxide is amphoteric and describe its reactions with both acids and bases.', marks: 9, command: 'Explain' },
    { q: 'Compare the chemistry of the elements in Groups 1 and 2 with reference to reactivity, reactions with water and the ions they form.', marks: 9, command: 'Compare' },
    { q: 'To what extent are the properties of the elements in a group of the periodic table similar, and how do they change as the group is descended?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── T4 Organic Chemistry I ────────── */
  'T4': [
    { q: 'Describe the IUPAC system of nomenclature for organic compounds and explain the different forms of structural and stereoisomerism with examples.', marks: 12, command: 'Describe' },
    { q: 'Compare the mechanisms of free-radical substitution in alkanes and electrophilic addition to alkenes, with full mechanistic detail.', marks: 12, command: 'Compare' },
    { q: 'Explain electrophilic addition to alkenes and apply Markovnikov\'s rule to predict the major product when an unsymmetrical alkene reacts with hydrogen bromide.', marks: 9, command: 'Explain' },
    { q: 'Discuss the difference between SN1 and SN2 nucleophilic substitution mechanisms and the factors that determine which is preferred.', marks: 12, command: 'Discuss' },
    { q: 'Compare the conditions and products of the nucleophilic substitution and elimination reactions of haloalkanes.', marks: 9, command: 'Compare' },
    { q: 'Describe the production of ethanol by fermentation of glucose and by hydration of ethene, and compare the two methods.', marks: 12, command: 'Describe' },
    { q: 'Explain how the products of the oxidation of an alcohol with acidified potassium dichromate depend on whether the alcohol is primary, secondary or tertiary.', marks: 9, command: 'Explain' },
    { q: 'Discuss the sustainability of biofuels such as bioethanol compared with conventional fossil fuels, with reference to carbon neutrality.', marks: 12, command: 'Discuss' },
    { q: 'Describe how mass spectrometry and infrared spectroscopy can be used together to identify a small organic molecule.', marks: 9, command: 'Describe' },
    { q: 'Compare addition polymerisation of alkenes with condensation polymerisation, with reference to monomer types and the by-products formed.', marks: 9, command: 'Compare' },
    { q: 'Assess the environmental impact of the petrochemical industry, with reference to fractional distillation, cracking and the disposal of polymers.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the use of test-tube reactions to identify the alkene, halogenoalkane, alcohol and carbonyl functional groups.', marks: 12, command: 'Evaluate' },
    { q: 'Explain the meaning of E-Z isomerism in alkenes and describe how the rules of priority are used to assign the labels.', marks: 9, command: 'Explain' },
    { q: 'Discuss the use of catalytic and steam cracking in the petrochemical industry and the importance of the products formed.', marks: 9, command: 'Discuss' },
    { q: 'To what extent can spectroscopic techniques alone determine the structure of an unknown organic compound?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── T5 Thermodynamics, Acids & Bases ────────── */
  'T5': [
    { q: 'Describe the construction of a Born-Haber cycle for sodium chloride and explain how it can be used to calculate the lattice enthalpy.', marks: 12, command: 'Describe' },
    { q: 'Compare the experimental and theoretical lattice enthalpies of sodium chloride and silver chloride and explain what the differences reveal about the bonding.', marks: 9, command: 'Compare' },
    { q: 'Discuss how entropy and Gibbs free energy together determine whether a reaction is feasible at a given temperature.', marks: 12, command: 'Discuss' },
    { q: 'Explain the meaning of standard entropy change and discuss the factors that lead to an increase or decrease in entropy in a chemical change.', marks: 9, command: 'Explain' },
    { q: 'Describe how a graph of Gibbs free energy against temperature can be used to predict the temperature above which a reaction becomes feasible.', marks: 9, command: 'Describe' },
    { q: 'Compare the strengths of acids using values of Ka and pKa, and explain the meaning of the term weak acid.', marks: 9, command: 'Compare' },
    { q: 'Explain how pH calculations differ for strong acids, weak acids, strong bases and buffer solutions.', marks: 12, command: 'Explain' },
    { q: 'Discuss the action of a buffer solution in maintaining a stable pH and explain its biological importance.', marks: 12, command: 'Discuss' },
    { q: 'Describe the shape of a pH titration curve for a weak acid with a strong base and explain the choice of indicator.', marks: 9, command: 'Describe' },
    { q: 'Assess the role of enthalpy and entropy in determining the feasibility of dissolving an ionic solid in water.', marks: 12, command: 'Assess' },
    { q: 'Evaluate the use of standard electrode potentials in predicting the feasibility of redox reactions, with reference to disproportionation.', marks: 12, command: 'Evaluate' },
    { q: 'Explain why the equilibrium constant Kc changes with temperature for an exothermic and an endothermic reaction.', marks: 9, command: 'Explain' },
    { q: 'Compare the use of universal indicator and a pH meter in following the course of a titration, and discuss the relative advantages of each.', marks: 9, command: 'Compare' },
    { q: 'Discuss how the position of equilibrium for an exothermic reversible reaction responds to changes in temperature, pressure and concentration.', marks: 12, command: 'Discuss' },
    { q: 'To what extent does Gibbs free energy reliably predict whether a chemical reaction will actually occur in the laboratory?', marks: 12, command: 'To what extent' },
  ],

  /* ────────── T6 Advanced Organic & Analysis ────────── */
  'T6': [
    { q: 'Discuss the optical isomerism shown by carbon compounds containing a chiral centre and explain why optical isomers have identical physical properties.', marks: 9, command: 'Discuss' },
    { q: 'Compare the reactivity of aldehydes and ketones towards nucleophilic addition reactions, with specific examples.', marks: 9, command: 'Compare' },
    { q: 'Explain the mechanism of nucleophilic addition of hydrogen cyanide to a carbonyl compound and discuss the importance of this reaction in synthesis.', marks: 12, command: 'Explain' },
    { q: 'Describe the formation of esters from carboxylic acids and alcohols and explain the role of concentrated sulfuric acid as a catalyst.', marks: 9, command: 'Describe' },
    { q: 'Discuss the saponification of triglycerides to produce soap and explain the difference between soaps and synthetic detergents.', marks: 12, command: 'Discuss' },
    { q: 'Explain the bonding in benzene using delocalisation theory and discuss the experimental evidence that supports this model over the Kekule structure.', marks: 12, command: 'Explain' },
    { q: 'Compare the mechanisms of electrophilic substitution for nitration and halogenation of benzene, including the role of the catalyst.', marks: 12, command: 'Compare' },
    { q: 'Describe the synthesis of an azo dye from phenylamine, including the diazotisation and coupling steps.', marks: 9, command: 'Describe' },
    { q: 'Discuss the basicity of aliphatic and aromatic amines and explain the trend in terms of inductive and mesomeric effects.', marks: 12, command: 'Discuss' },
    { q: 'Explain how amino acids combine to form the primary structure of proteins and how this primary structure influences higher levels of folding.', marks: 12, command: 'Explain' },
    { q: 'Describe the behaviour of amino acids as zwitterions and explain the meaning of the isoelectric point.', marks: 9, command: 'Describe' },
    { q: 'Compare the disposal options for addition and condensation polymers and assess their respective environmental impacts.', marks: 12, command: 'Compare' },
    { q: 'Evaluate the use of high-resolution NMR spectroscopy in identifying organic compounds, with reference to both proton and carbon-13 spectra.', marks: 12, command: 'Evaluate' },
    { q: 'Discuss how thin-layer chromatography and high-performance liquid chromatography are used to separate and identify components of a mixture.', marks: 12, command: 'Discuss' },
    { q: 'To what extent does retrosynthesis allow chemists to plan the multi-step synthesis of a complex organic molecule?', marks: 12, command: 'To what extent' },
  ],

};
