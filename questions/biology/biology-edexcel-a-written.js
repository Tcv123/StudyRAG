/*
 * Edexcel A A-Level Biology — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const BIOLOGY_EDEXCEL_A_WRITTEN = {

  'T1': {
    green: [
      {
        q: 'State the four levels of protein structure.',
        marks: 4, tier: 'green',
        modelAnswer: `• Primary — the sequence of amino acids in the polypeptide chain, determined by the gene.\n• Secondary — local folding into alpha-helices or beta-pleated sheets, held by hydrogen bonds between C=O and N-H groups.\n• Tertiary — the overall 3D shape of a single polypeptide, maintained by hydrogen bonds, ionic bonds, disulfide bridges, and hydrophobic interactions.\n• Quaternary — the arrangement of two or more polypeptide subunits (and any prosthetic groups) into a functional protein.`
      },
      {
        q: 'State what is meant by a condensation reaction and a hydrolysis reaction.',
        marks: 2, tier: 'green',
        modelAnswer: `• Condensation: a reaction in which two molecules are joined together with the removal of a water molecule (e.g., two amino acids forming a peptide bond).\n• Hydrolysis: a reaction in which a bond is broken by the addition of a water molecule, splitting a molecule into two smaller molecules.`
      },
      {
        q: 'Identify the components of a triglyceride and describe how they are bonded.',
        marks: 3, tier: 'green',
        modelAnswer: `• A triglyceride is made from one glycerol molecule and three fatty acid molecules.\n• Each fatty acid is joined to the glycerol by a condensation reaction, forming an ester bond.\n• Three water molecules are released in total.`
      },
      {
        q: 'State two risk factors for cardiovascular disease and explain how each increases risk.',
        marks: 2, tier: 'green',
        modelAnswer: `• High blood pressure — damages artery endothelium, promoting atheroma formation and increasing the risk of aneurysm or thrombosis.\n• High LDL cholesterol — deposits cholesterol in artery walls forming atheromas, narrowing the lumen and increasing risk of blood clots.\n(Also accept: smoking, obesity, lack of exercise, high-salt diet, genetic predisposition.)`
      },
    ],
    amber: [
      {
        q: 'Describe how enzymes catalyse reactions according to the induced fit model.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The substrate approaches the active site of the enzyme, which has a complementary but not exact shape.\n• As the substrate binds, the active site changes shape (moulds around the substrate), forming an enzyme-substrate complex.\n• This puts strain on bonds in the substrate, lowering the activation energy required for the reaction.\n• Products are released and the active site returns to its original shape, ready to accept another substrate molecule.`
      },
      {
        q: 'Explain how the fluid mosaic model describes cell membrane structure.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The membrane consists of a phospholipid bilayer with hydrophilic heads facing outward and hydrophobic tails facing inward.\n• It is described as "fluid" because the phospholipids and proteins can move laterally within the layer.\n• It is a "mosaic" because of the variety of proteins (channel, carrier, receptor, enzymatic) scattered throughout.\n• Cholesterol is interspersed between phospholipids, regulating fluidity and stability.\n• Glycoproteins and glycolipids on the external surface function in cell recognition and signalling.`
      },
      {
        q: 'Explain the Bohr effect and its significance during exercise.',
        marks: 4, tier: 'amber',
        modelAnswer: `• During exercise, respiring tissues produce more CO2, which dissolves in plasma forming carbonic acid, lowering pH (increased H+ concentration).\n• The lower pH/higher CO2 causes a conformational change in haemoglobin, reducing its affinity for oxygen.\n• The oxygen dissociation curve shifts to the right.\n• This means haemoglobin releases more oxygen to actively respiring tissues where it is most needed, increasing the efficiency of oxygen delivery during exercise.`
      },
      {
        q: 'Describe how water moves across a partially permeable membrane by osmosis.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Osmosis is the net movement of water molecules from a region of higher water potential (more dilute) to a region of lower water potential (more concentrated) across a partially permeable membrane.\n• Water molecules move freely through the membrane in both directions, but there is a net movement down the water potential gradient.\n• The membrane allows water to pass but restricts larger solute molecules.\n• This is a passive process requiring no ATP; it continues until water potential is equalised on both sides (or until opposed by pressure, e.g., in plant cells where the cell wall provides turgor).`
      },
    ],
    red: [
      {
        q: 'Evaluate the evidence linking diet to cardiovascular disease. Discuss the strengths and limitations of epidemiological studies.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Epidemiological studies show correlations between high saturated fat/cholesterol diets and increased CVD incidence.\n• Large sample sizes and long-term follow-up (e.g., Framingham Heart Study) increase reliability.\n• Correlation does not prove causation — confounding variables (exercise, genetics, stress, smoking) may contribute.\n• Intervention studies (changing diet and measuring outcomes) provide stronger evidence of causation.\n• Different populations may have different genetic predispositions, making results non-universal.\n• Controlled experiments on humans are ethically limited; animal studies may not translate directly.\n• Meta-analyses combining multiple studies provide stronger overall evidence.\n• Some studies show conflicting results (e.g., debates over saturated vs. trans fats).\n• Mechanisms are supported by biological evidence (LDL receptor pathway, atheroma formation).\n• Overall, the body of evidence strongly supports a link, but individual studies have limitations.`
      },
      {
        q: 'Discuss the factors that affect enzyme activity and explain how they interact to determine the rate of reaction in a living cell.',
        marks: 6, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 6:\n\n• Temperature increases kinetic energy and collision rate up to an optimum; above this, hydrogen bonds break, active site shape changes (denaturation), and rate drops.\n• pH affects ionisation of amino acid R-groups and hydrogen bonding; deviation from optimum alters active site shape.\n• Substrate concentration: higher concentration increases rate until enzymes saturate (all active sites occupied = Vmax).\n• Enzyme concentration: more enzyme increases rate if substrate is in excess.\n• Competitive inhibitors compete for the active site, reducing effective enzyme-substrate complex formation (overcome by increasing substrate).\n• Non-competitive inhibitors bind allosterically, changing active site shape, reducing Vmax regardless of substrate concentration.\n• In cells, multiple factors act simultaneously; rate is limited by whichever factor is in shortest supply (limiting factor concept).\n• Cells regulate enzyme activity through compartmentalisation, gene expression, and feedback inhibition.`
      },
    ],
  },

  'T2': {
    green: [
      {
        q: 'State three differences between prokaryotic and eukaryotic cells.',
        marks: 3, tier: 'green',
        modelAnswer: `• Prokaryotic cells have no membrane-bound nucleus; eukaryotic cells have a true nucleus with a nuclear envelope.\n• Prokaryotic cells have smaller ribosomes (70S); eukaryotic cells have larger ribosomes (80S).\n• Prokaryotic cells have no membrane-bound organelles (no mitochondria, ER, Golgi); eukaryotic cells have these organelles.\n(Also accept: prokaryotic DNA is circular and naked; eukaryotic DNA is linear and associated with histones.)`
      },
      {
        q: 'State the stages of mitosis in order and describe one key event at each stage.',
        marks: 4, tier: 'green',
        modelAnswer: `• Prophase — chromosomes condense and become visible; nuclear envelope breaks down; spindle fibres form.\n• Metaphase — chromosomes line up at the cell equator (metaphase plate); spindle fibres attach to centromeres.\n• Anaphase — sister chromatids are pulled apart to opposite poles by shortening spindle fibres.\n• Telophase — chromatids reach poles; nuclear envelope reforms around each set; chromosomes decondense; cytokinesis begins.`
      },
      {
        q: 'State the formula for calculating the magnification of a microscope image.',
        marks: 2, tier: 'green',
        modelAnswer: `• Magnification = Image size / Actual size.\n• This can be rearranged: Actual size = Image size / Magnification; Image size = Actual size x Magnification.\n(Units must be consistent, typically micrometres.)`
      },
      {
        q: 'Identify two features visible in an animal cell under an electron microscope that would not be visible under a light microscope.',
        marks: 2, tier: 'green',
        modelAnswer: `• Ribosomes (approximately 20nm, below the ~200nm resolution limit of light microscopes).\n• Endoplasmic reticulum (smooth and rough ER membranes are below light microscope resolution).\n(Also accept: Golgi apparatus cisternae detail, individual cristae in mitochondria, lysosomes, nuclear pores.)`
      },
    ],
    amber: [
      {
        q: 'Explain how the cell cycle is regulated and what happens when regulation fails.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The cell cycle has checkpoints (G1, G2, and M checkpoints) where the cell is assessed before proceeding.\n• Cyclins and cyclin-dependent kinases (CDKs) control progression through the cycle; cyclins must reach threshold levels.\n• Tumour suppressor genes (e.g., p53) can halt the cycle if DNA damage is detected, allowing repair or triggering apoptosis.\n• Proto-oncogenes promote cell division; mutations can convert them to oncogenes that stimulate uncontrolled division.\n• If regulation fails (mutations in tumour suppressors or oncogenes), cells may divide uncontrollably, forming a tumour (cancer).`
      },
      {
        q: 'Describe how meiosis produces genetically diverse gametes.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Meiosis consists of two divisions (meiosis I and II) producing four haploid cells from one diploid cell.\n• Crossing over in prophase I: homologous chromosomes pair (bivalents) and non-sister chromatids exchange segments at chiasmata, creating new allele combinations.\n• Independent assortment in metaphase I: homologous pairs align randomly at the equator; each gamete receives a random combination of maternal and paternal chromosomes (2^23 combinations in humans).\n• These processes, combined with random fertilisation, generate enormous genetic diversity in offspring.\n• Mutations during DNA replication add further variation.`
      },
      {
        q: 'Explain the evidence supporting the endosymbiotic theory for the origin of mitochondria and chloroplasts.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Both mitochondria and chloroplasts have their own circular DNA, similar to bacterial chromosomes.\n• Both have 70S ribosomes (same size as bacteria, not the 80S found in eukaryotic cytoplasm).\n• Both have a double membrane — the inner membrane may represent the original prokaryotic membrane, the outer from the host's engulfing vesicle.\n• Both divide by binary fission independently of the host cell.\n• They are approximately the same size as bacteria.\n• Their DNA sequences are more similar to bacterial DNA than to the host nuclear DNA.`
      },
      {
        q: 'Describe how biodiversity can be measured using Simpson\'s Diversity Index and interpret a result.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Simpson's Diversity Index (D) = 1 - (Sum of (n/N)^2), where n = number of individuals of each species and N = total number of individuals.\n• It takes into account both species richness (number of different species) and species evenness (how equally individuals are distributed).\n• Values range from 0 to 1; a value close to 1 indicates high diversity (many species with even distribution).\n• A value close to 0 indicates low diversity (dominated by one or few species).\n• It is more informative than species richness alone because it accounts for relative abundance.`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of stem cells in medical research and treatment. Discuss the biological potential and the ethical concerns.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Embryonic stem cells (ESCs) are pluripotent — can differentiate into almost any cell type, offering potential for treating Parkinson's, diabetes, heart disease, spinal injuries.\n• Adult stem cells are multipotent (limited differentiation); fewer ethical issues but less versatile.\n• Induced pluripotent stem cells (iPSCs) reprogrammed from adult cells avoid embryo destruction; however, may have epigenetic abnormalities.\n• Ethical concerns: ESC research requires destruction of embryos; debate on when life/personhood begins.\n• Some argue the embryo has full moral status from fertilisation; others argue the blastocyst has no sentience.\n• Risk of immune rejection with ESCs (iPSCs from patient avoids this).\n• Risk of tumour formation (teratomas) if differentiation is incomplete.\n• Regulatory frameworks vary by country; research is tightly controlled.\n• Potential for drug testing and disease modelling reduces animal experiments.\n• Balance between scientific progress/patient benefit and ethical responsibility.`
      },
      {
        q: 'Discuss the factors threatening global biodiversity and evaluate the effectiveness of conservation strategies.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Habitat destruction (deforestation, urbanisation) is the leading cause of species loss; reduces available niches.\n• Climate change alters habitats faster than many species can adapt; coral bleaching, polar ice loss.\n• Pollution (pesticides, plastics, eutrophication) directly harms organisms and ecosystems.\n• Overexploitation (overfishing, poaching) reduces populations below sustainable levels.\n• Invasive species outcompete natives, disrupting food webs.\n• Conservation strategies include: protected areas/national parks, seed banks, captive breeding, legislation (CITES), habitat restoration, and reintroduction programmes.\n• Effectiveness varies: protected areas work if enforced; captive breeding has limited genetic diversity; seed banks preserve genetic material but not ecosystems.\n• International cooperation is essential but difficult to enforce; local community involvement improves outcomes.\n• Sustainable development attempts to balance human needs with conservation.\n• No single strategy is sufficient; integrated approaches combining multiple methods are most effective.`
      },
    ],
  },

  'T3': {
    green: [
      {
        q: 'State three adaptations of the alveoli for efficient gas exchange.',
        marks: 3, tier: 'green',
        modelAnswer: `• Very large total surface area (approximately 70m² in humans) for maximum diffusion.\n• Walls are one cell thick (thin squamous epithelium), providing a very short diffusion distance.\n• Rich blood supply (dense capillary network) maintains a steep concentration gradient for O₂ and CO₂.\n(Also accept: moist surface for dissolving gases; ventilation maintains concentration gradient.)`
      },
      {
        q: 'State the differences between arteries, veins, and capillaries.',
        marks: 3, tier: 'green',
        modelAnswer: `• Arteries: thick muscular/elastic walls, small lumen, carry blood at high pressure away from the heart, no valves (except aortic/pulmonary).\n• Veins: thinner walls with less muscle/elastic tissue, larger lumen, carry blood at low pressure towards the heart, have valves to prevent backflow.\n• Capillaries: one-cell-thick walls, very narrow lumen, allow exchange of substances between blood and tissues.`
      },
      {
        q: 'State what is meant by the transpiration stream and name the tissue that transports it.',
        marks: 2, tier: 'green',
        modelAnswer: `• The transpiration stream is the continuous flow of water from the roots, up through the stem, to the leaves where it is lost by evaporation through stomata.\n• It is transported through xylem vessels.`
      },
      {
        q: 'State the function of the following structures in the heart: atrioventricular valves, semilunar valves, septum.',
        marks: 3, tier: 'green',
        modelAnswer: `• Atrioventricular (AV) valves (tricuspid and bicuspid/mitral): prevent backflow of blood from ventricles into atria during ventricular systole.\n• Semilunar valves (aortic and pulmonary): prevent backflow of blood from the aorta/pulmonary artery back into the ventricles during diastole.\n• Septum: muscular wall separating left and right sides of the heart, preventing mixing of oxygenated and deoxygenated blood.`
      },
    ],
    amber: [
      {
        q: 'Explain how Fick\'s Law relates to gas exchange surfaces in organisms.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Fick's Law: Rate of diffusion ∝ (surface area × concentration difference) / thickness of membrane.\n• Organisms maximise surface area (e.g., alveoli, gill filaments, villi) to increase exchange rate.\n• They maintain a steep concentration gradient (e.g., by ventilation and blood flow — maintaining supply and removal of substances).\n• They minimise diffusion distance (e.g., one-cell-thick walls of alveoli and capillaries).\n• This law explains why all efficient exchange surfaces share these three adaptations.`
      },
      {
        q: 'Describe how the cardiac cycle is coordinated by the conducting system of the heart.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The sinoatrial node (SAN) in the right atrium acts as the pacemaker, generating electrical impulses that spread across both atria causing atrial systole.\n• The impulse reaches the atrioventricular node (AVN) which delays the signal (~0.1s), allowing the atria to fully empty before the ventricles contract.\n• The impulse then travels down the bundle of His in the interventricular septum.\n• It branches into Purkinje fibres that spread through the ventricular walls from the apex upward.\n• This causes ventricular systole from the bottom up, efficiently pushing blood upward into the arteries.\n• After systole, diastole occurs as all chambers relax and fill with blood.`
      },
      {
        q: 'Explain the cohesion-tension theory of water transport in the xylem.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Transpiration from leaf stomata creates a negative pressure (tension) at the top of the xylem.\n• Water molecules are cohesive (attracted to each other by hydrogen bonds), forming a continuous column in the xylem.\n• Tension pulls the water column upward as water evaporates from the leaf.\n• Adhesion (attraction between water molecules and xylem walls) helps prevent the column from breaking and supports it against gravity.\n• Root pressure from osmotic uptake of water in the roots provides a small additional push from below.\n• The xylem vessels are dead, hollow, lignified tubes with no end walls, reducing resistance to flow.`
      },
      {
        q: 'Explain how the counter-current system in fish gills maximises oxygen uptake.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Water flows over the gill lamellae in one direction while blood flows in the opposite direction (counter-current).\n• This maintains a concentration gradient for oxygen along the entire length of the lamella.\n• At every point, the blood has a lower oxygen concentration than the adjacent water, so diffusion continues across the whole surface.\n• If blood and water flowed in the same direction (parallel), equilibrium would be reached quickly and only about 50% oxygen transfer would occur; counter-current achieves up to 80% extraction.`
      },
    ],
    red: [
      {
        q: 'Evaluate the adaptations of different organisms for gas exchange in relation to their size, activity level, and environment.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Single-celled organisms: sufficient surface area to volume ratio for diffusion across entire body surface; no specialised system needed.\n• Insects: tracheae deliver O₂ directly to cells; spiracles control water loss; limited by diffusion distance, constraining body size; suitable for small terrestrial organisms.\n• Fish: gills with large surface area, thin lamellae, counter-current flow; highly efficient in water where O₂ is less available; cannot function in air (lamellae collapse).\n• Mammals: lungs with enormous alveolar surface area; ventilation and circulatory system maintain gradients; efficient for high metabolic rate; requires energy for ventilation.\n• Activity level determines O₂ demand: active animals (birds, mammals) have more efficient systems than sedentary ones.\n• Environment: aquatic organisms face lower O₂ availability; terrestrial organisms must minimise water loss while exchanging gases.\n• Trade-offs exist: maximising gas exchange surface increases water loss risk (xerophytes vs mesophytes).\n• Each system represents an evolutionary compromise between efficiency, environmental constraints, and energy costs.`
      },
      {
        q: 'Discuss how the structure and function of the mammalian circulatory system is adapted to meet the demands of a high metabolic rate.',
        marks: 6, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 6:\n\n• Double circulatory system maintains high pressure in the systemic circuit (blood passes through heart twice per circuit); essential for rapid delivery to distant tissues.\n• Four-chambered heart completely separates oxygenated and deoxygenated blood, maximising oxygen delivery.\n• Left ventricle has thick muscular walls to generate high pressure for systemic circulation.\n• Elastic arteries stretch and recoil to smooth pulsatile flow, maintaining continuous blood delivery.\n• Extensive capillary networks ensure all cells are close to a blood supply; thin walls enable rapid exchange.\n• Haemoglobin in red blood cells increases oxygen-carrying capacity far beyond what plasma alone could achieve; cooperative binding and the Bohr effect optimise loading and unloading.\n• Cardiac output can increase dramatically during exercise (increased heart rate via SAN, increased stroke volume via Frank-Starling mechanism).\n• Valves throughout prevent backflow, ensuring unidirectional flow.`
      },
    ],
  },

  'T4': {
    green: [
      {
        q: 'State the location of the light-dependent and light-independent reactions of photosynthesis.',
        marks: 2, tier: 'green',
        modelAnswer: `• Light-dependent reactions occur on the thylakoid membranes (grana) of the chloroplast.\n• Light-independent reactions (Calvin cycle) occur in the stroma of the chloroplast.`
      },
      {
        q: 'State the products of the light-dependent reactions of photosynthesis.',
        marks: 3, tier: 'green',
        modelAnswer: `• ATP (from photophosphorylation — ADP + Pi using energy from the electron transport chain).\n• Reduced NADP (NADPH — from the reduction of NADP using electrons and H+ from photolysis of water).\n• Oxygen (O₂ — a by-product of the photolysis of water: 2H₂O → 4H⁺ + 4e⁻ + O₂).`
      },
      {
        q: 'State the four stages of aerobic respiration in order and where each occurs.',
        marks: 4, tier: 'green',
        modelAnswer: `• Glycolysis — occurs in the cytoplasm; glucose (6C) is split into two molecules of pyruvate (3C).\n• Link reaction — occurs in the mitochondrial matrix; pyruvate is converted to acetyl CoA (2C) + CO₂.\n• Krebs cycle — occurs in the mitochondrial matrix; acetyl CoA is oxidised, producing CO₂, reduced NAD, reduced FAD, and ATP.\n• Oxidative phosphorylation — occurs on the inner mitochondrial membrane (cristae); electrons from reduced NAD/FAD pass along the ETC, driving ATP synthesis via chemiosmosis.`
      },
      {
        q: 'State what is meant by a limiting factor in photosynthesis and give two examples.',
        marks: 2, tier: 'green',
        modelAnswer: `• A limiting factor is the factor present at the lowest level that restricts the rate of photosynthesis; increasing it will increase the rate until another factor becomes limiting.\n• Examples: light intensity (drives light-dependent reactions), CO₂ concentration (substrate for carbon fixation in Calvin cycle), temperature (affects enzyme activity).\n(Any 2 examples for 1 mark each.)`
      },
    ],
    amber: [
      {
        q: 'Describe the process of oxidative phosphorylation and explain its role in ATP production.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Reduced NAD and reduced FAD donate electrons to the electron transport chain (ETC) on the inner mitochondrial membrane.\n• Electrons pass along a series of carrier proteins (complexes I-IV), releasing energy at each transfer.\n• This energy is used to pump H⁺ ions from the matrix into the intermembrane space, creating a proton gradient (electrochemical gradient).\n• H⁺ ions flow back into the matrix through ATP synthase (chemiosmosis), driving the synthesis of ATP from ADP + Pi.\n• Oxygen is the final electron acceptor, combining with H⁺ and electrons to form water; without oxygen, the ETC stops.`
      },
      {
        q: 'Explain how the Calvin cycle converts CO₂ into organic molecules.',
        marks: 5, tier: 'amber',
        modelAnswer: `• CO₂ is fixed by combining with the 5C acceptor molecule RuBP, catalysed by the enzyme RuBisCO.\n• This forms an unstable 6C compound that immediately splits into two molecules of 3C glycerate-3-phosphate (GP).\n• GP is reduced to 3C triose phosphate (TP/G3P) using ATP and reduced NADP from the light-dependent reactions.\n• Some TP is used to regenerate RuBP (requires ATP), allowing the cycle to continue.\n• Some TP is used to synthesise glucose, amino acids, fatty acids, and other organic molecules.\n• For every 3 CO₂ fixed, 1 net TP is produced; 6 turns of the cycle produce one glucose molecule.`
      },
      {
        q: 'Explain the nitrogen cycle, including the roles of nitrogen-fixing, nitrifying, and denitrifying bacteria.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Nitrogen-fixing bacteria (e.g., Rhizobium in root nodules, free-living Azotobacter) convert atmospheric N₂ into ammonia (NH₃/NH₄⁺), making nitrogen available to biological systems.\n• Decomposers break down dead organisms and waste, releasing ammonia (ammonification).\n• Nitrifying bacteria (e.g., Nitrosomonas) convert ammonia to nitrites (NO₂⁻); Nitrobacter converts nitrites to nitrates (NO₃⁻) — this is nitrification (aerobic process).\n• Plants absorb nitrates via active transport and use them to make amino acids and nucleotides.\n• Denitrifying bacteria (e.g., Pseudomonas) convert nitrates back to N₂ gas under anaerobic conditions, returning nitrogen to the atmosphere (denitrification).`
      },
      {
        q: 'Describe how energy flows through an ecosystem and explain why food chains rarely have more than five trophic levels.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Energy enters ecosystems as light, captured by producers via photosynthesis and converted to chemical energy in organic molecules.\n• Energy is transferred along food chains: producers → primary consumers → secondary consumers → tertiary consumers.\n• At each trophic level, approximately 90% of energy is lost: through respiration (heat), in excretory products (urine, faeces), and as parts not consumed (bones, roots).\n• Only about 10% of energy is available to the next trophic level (10% rule).\n• After 4-5 levels, insufficient energy remains to sustain another viable population, limiting food chain length.`
      },
    ],
    red: [
      {
        q: 'Evaluate the impact of human activities on the carbon cycle and discuss potential solutions to climate change.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Burning fossil fuels releases CO₂ stored over millions of years, increasing atmospheric concentration.\n• Deforestation reduces photosynthetic CO₂ absorption and releases carbon from trees (burning/decomposition).\n• Agriculture (livestock methane, rice paddies, fertiliser N₂O) adds greenhouse gases.\n• Enhanced greenhouse effect traps more infrared radiation, increasing global temperature.\n• Positive feedback: warming releases methane from permafrost; reduced ice cover decreases albedo; increased decomposition releases more CO₂.\n• Solutions: renewable energy (solar, wind, nuclear) to replace fossil fuels; reforestation and afforestation to increase carbon sinks.\n• Carbon capture and storage (CCS) technology; improving energy efficiency; reducing meat consumption.\n• International agreements (Paris Accord) set emission targets but enforcement is difficult.\n• Individual actions (reduce, reuse, recycle) contribute but systemic change is essential.\n• Balance economic development needs with environmental protection; developing nations face particular challenges.`
      },
      {
        q: 'Compare and contrast photosynthesis and respiration in terms of their biochemistry, energy transformations, and evolutionary significance.',
        marks: 6, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 6:\n\n• Both use electron transport chains and chemiosmosis for ATP production (via H⁺ gradients through ATP synthase).\n• Photosynthesis converts light energy to chemical energy (endergonic overall); respiration releases chemical energy as ATP (exergonic overall).\n• Photosynthesis fixes CO₂ into organic molecules; respiration oxidises organic molecules releasing CO₂.\n• Photosynthesis occurs in chloroplasts (thylakoids and stroma); respiration in cytoplasm and mitochondria (matrix and cristae).\n• Both involve redox reactions: photosynthesis reduces CO₂ using H from water; respiration oxidises glucose transferring H to oxygen.\n• Evolutionarily, photosynthesis (cyanobacteria) oxygenated the atmosphere, enabling aerobic respiration to evolve; both are linked by endosymbiosis.\n• They are interdependent in ecosystems: photosynthesis provides O₂ and glucose; respiration provides CO₂ and water for photosynthesis.\n• The efficiency of energy conversion in both is remarkably similar (chemiosmotic mechanism conserved across 3 billion years of evolution).`
      },
    ],
  },

  'T5': {
    green: [
      {
        q: 'State the difference between a gene, an allele, and a genome.',
        marks: 3, tier: 'green',
        modelAnswer: `• A gene is a section of DNA that codes for a particular polypeptide or functional RNA molecule.\n• An allele is a specific version (variant) of a gene; different alleles have different base sequences and may produce different forms of the protein.\n• A genome is the complete set of genetic material (all DNA, including coding and non-coding regions) in an organism.`
      },
      {
        q: 'State what happens during independent assortment and when it occurs.',
        marks: 2, tier: 'green',
        modelAnswer: `• Independent assortment occurs during metaphase I of meiosis.\n• Homologous pairs of chromosomes line up randomly at the cell equator; the orientation of each pair is independent of other pairs, so each gamete receives a random combination of maternal and paternal chromosomes.`
      },
      {
        q: 'State the Hardy-Weinberg equations and what each symbol represents.',
        marks: 3, tier: 'green',
        modelAnswer: `• p + q = 1 (allele frequencies: p = frequency of dominant allele, q = frequency of recessive allele).\n• p² + 2pq + q² = 1 (genotype frequencies: p² = homozygous dominant, 2pq = heterozygous, q² = homozygous recessive).\n• These equations allow calculation of allele and genotype frequencies in a population in Hardy-Weinberg equilibrium (no selection, mutation, migration, drift, or non-random mating).`
      },
      {
        q: 'State what is meant by codominance and give one example.',
        marks: 2, tier: 'green',
        modelAnswer: `• Codominance occurs when both alleles in a heterozygote are fully expressed simultaneously (neither is dominant over the other); the phenotype shows features of both alleles.\n• Example: In the ABO blood group system, alleles Iᴬ and Iᴮ are codominant — a person with genotype IᴬIᴮ has blood group AB, expressing both A and B antigens on red blood cells.\n(Also accept: snapdragon flower colour — red and white alleles produce pink in heterozygote.)`
      },
    ],
    amber: [
      {
        q: 'Explain how natural selection can lead to speciation.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A population becomes geographically isolated (allopatric) or reproductively isolated (sympatric) into two groups.\n• Different environments exert different selection pressures on each group.\n• Individuals with phenotypes suited to their environment survive and reproduce more (natural selection).\n• Advantageous alleles increase in frequency within each population over many generations.\n• Genetic drift also causes allele frequency changes, especially in small populations.\n• Over time, the two populations become so genetically different that they can no longer interbreed to produce fertile offspring — they are now separate species.`
      },
      {
        q: 'Explain how the chi-squared test is used to determine whether observed genetic ratios differ significantly from expected ratios.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The null hypothesis states there is no significant difference between observed and expected results.\n• Calculate expected values based on the predicted Mendelian ratio (e.g., 3:1, 9:3:3:1).\n• Chi-squared (χ²) = Σ (observed - expected)² / expected for each category.\n• Determine degrees of freedom (number of categories - 1) and compare calculated χ² to the critical value at p = 0.05.\n• If χ² < critical value: accept null hypothesis (no significant difference, results fit expected ratio).\n• If χ² > critical value: reject null hypothesis (significant difference exists, suggesting another factor such as linkage or epistasis).`
      },
      {
        q: 'Describe the process of DNA replication and explain why it is described as semi-conservative.',
        marks: 5, tier: 'amber',
        modelAnswer: `• DNA helicase unwinds the double helix and breaks hydrogen bonds between complementary bases, separating the two strands.\n• Each strand acts as a template; free nucleotides align by complementary base pairing (A-T, C-G).\n• DNA polymerase catalyses the formation of phosphodiester bonds between nucleotides, synthesising new strands in the 5' to 3' direction.\n• Leading strand synthesised continuously; lagging strand synthesised in Okazaki fragments joined by DNA ligase.\n• "Semi-conservative" because each new DNA molecule contains one original (conserved) strand and one newly synthesised strand — demonstrated by Meselson and Stahl's experiment with ¹⁵N.`
      },
      {
        q: 'Explain how epistasis affects phenotypic ratios in a dihybrid cross.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Epistasis occurs when one gene masks or modifies the expression of another gene at a different locus.\n• The epistatic gene controls whether the other gene (hypostatic gene) can be expressed.\n• This alters the expected 9:3:3:1 dihybrid ratio to modified ratios depending on the type of epistasis.\n• Examples: recessive epistasis gives 9:3:4 (homozygous recessive at epistatic locus masks other gene); dominant epistasis gives 12:3:1; complementary gives 9:7 (both dominant alleles needed for phenotype).\n• Understanding epistasis is important because most phenotypes are influenced by multiple interacting genes.`
      },
    ],
    red: [
      {
        q: 'Discuss the relative importance of natural selection, genetic drift, and gene flow in shaping the evolution of populations.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Natural selection is the primary mechanism for adaptive evolution; it favours alleles that increase fitness in a given environment.\n• Genetic drift causes random changes in allele frequency; its effect is strongest in small populations (founder effect, bottleneck).\n• Gene flow (migration) introduces new alleles into a population, increasing genetic diversity and can counteract local adaptation.\n• In large populations, selection dominates; drift has minimal effect because random fluctuations average out.\n• In small populations, drift can override selection; neutral or even slightly harmful alleles may become fixed by chance.\n• Gene flow can prevent speciation by homogenising populations; restricted gene flow allows divergence.\n• Neutral theory (Kimura): most molecular evolution is driven by drift of neutral mutations, not selection.\n• Selection explains adaptation to specific environments; drift explains much of molecular-level variation.\n• All three forces interact: the balance depends on population size, strength of selection, and degree of isolation.\n• Modern synthesis integrates all three mechanisms into a comprehensive evolutionary framework.`
      },
      {
        q: 'Evaluate the use of the Hardy-Weinberg principle in real populations. Discuss its assumptions and limitations.',
        marks: 6, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 6:\n\n• The Hardy-Weinberg principle provides a null model: if no evolution is occurring, allele frequencies remain constant.\n• Assumptions: no selection, no mutation, no migration, random mating, infinite (very large) population.\n• Real populations rarely meet all assumptions simultaneously.\n• Deviation from expected frequencies indicates evolution is occurring and helps identify which force is acting.\n• Useful for estimating carrier frequencies for genetic diseases (e.g., cystic fibrosis 2pq calculation) even though the model is imperfect.\n• Limitations: assumes diallelic locus; real genes may have multiple alleles; assortative mating (non-random) is common.\n• Population subdivision, genetic drift in small populations, and selection all cause departures.\n• Despite limitations, it remains a fundamental tool in population genetics for detecting and measuring evolutionary change.`
      },
    ],
  },

  'T6': {
    green: [
      {
        q: 'State the difference between the primary and secondary immune response.',
        marks: 3, tier: 'green',
        modelAnswer: `• Primary response: occurs on first exposure to an antigen; slower (takes days to weeks); lower antibody concentration; B cells must be activated and undergo clonal expansion.\n• Secondary response: occurs on re-exposure to the same antigen; much faster (hours to days); higher antibody concentration; memory cells are rapidly activated and proliferate.\n• The secondary response prevents symptoms from developing — this is the basis of immunological memory and vaccination.`
      },
      {
        q: 'State three physical or chemical barriers that form part of the non-specific immune system.',
        marks: 3, tier: 'green',
        modelAnswer: `• Skin — continuous physical barrier of keratinised epithelium preventing pathogen entry.\n• Mucous membranes — mucus traps pathogens in the respiratory tract; cilia sweep mucus to the throat.\n• Stomach acid (HCl) — low pH destroys many ingested pathogens.\n(Also accept: lysozyme in tears/saliva; sebum on skin; commensal bacteria outcompeting pathogens; inflammatory response.)`
      },
      {
        q: 'State how PCR amplifies a DNA sample and name three requirements.',
        marks: 3, tier: 'green',
        modelAnswer: `• PCR (Polymerase Chain Reaction) uses repeated cycles of heating and cooling to exponentially amplify a specific DNA sequence.\n• Requirements: (1) DNA template (sample to be amplified), (2) Primers (short complementary sequences that flank the target), (3) Taq DNA polymerase (heat-stable enzyme that synthesises new DNA strands), (4) free nucleotides (dNTPs), (5) buffer solution.\n(Any 3 requirements for full marks.)`
      },
      {
        q: 'State what is meant by active immunity and give one example of natural and artificial active immunity.',
        marks: 2, tier: 'green',
        modelAnswer: `• Active immunity is when the body produces its own antibodies and memory cells in response to an antigen — provides long-lasting protection.\n• Natural active: immunity gained after being infected by a pathogen (e.g., having chickenpox).\n• Artificial active: immunity gained after receiving a vaccine containing antigens (e.g., MMR vaccine).`
      },
    ],
    amber: [
      {
        q: 'Describe the process of clonal selection and expansion in the humoral immune response.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Each B lymphocyte has unique surface antibodies (receptors) that are complementary to one specific antigen.\n• When a pathogen enters, its antigen binds to the complementary B cell receptor (clonal selection — only the matching B cell is activated).\n• T helper cells are needed to fully activate the selected B cell (via cytokines).\n• The activated B cell divides rapidly by mitosis (clonal expansion), producing many identical clones.\n• Most clones differentiate into plasma cells that secrete large quantities of specific antibodies.\n• Some clones become memory cells that persist long-term, enabling a rapid secondary response on re-exposure.`
      },
      {
        q: 'Explain how monoclonal antibodies are produced and describe two applications.',
        marks: 5, tier: 'amber',
        modelAnswer: `• An animal (usually mouse) is injected with the target antigen; B cells producing the desired antibody are collected from the spleen.\n• These B cells are fused with myeloma (tumour) cells to create hybridoma cells that are immortal and produce antibodies indefinitely.\n• Hybridomas are screened to select those producing the correct antibody; these are cultured to produce large quantities of identical (monoclonal) antibodies.\n• Application 1: Pregnancy tests — monoclonal antibodies specific to hCG hormone detect pregnancy in urine samples.\n• Application 2: Cancer treatment — antibodies targeted to cancer cell antigens deliver drugs/radioactive isotopes directly to tumour cells, reducing damage to healthy tissue (targeted therapy).`
      },
      {
        q: 'Explain how DNA profiling is used in forensic science, including the role of STRs.',
        marks: 4, tier: 'amber',
        modelAnswer: `• DNA is extracted from a sample (blood, hair, saliva) at a crime scene.\n• Specific regions containing Short Tandem Repeats (STRs) — short sequences repeated variable numbers of times — are amplified by PCR.\n• STRs are highly polymorphic (vary in repeat number between individuals), making them ideal for identification.\n• Amplified fragments are separated by gel electrophoresis or capillary electrophoresis, producing a profile (pattern of bands or peaks).\n• The profile is compared to suspect/victim/database profiles; a match at multiple STR loci gives extremely high probability of identity (1 in billions).`
      },
      {
        q: 'Describe how HIV evades the immune system and leads to AIDS.',
        marks: 4, tier: 'amber',
        modelAnswer: `• HIV (retrovirus) specifically infects and destroys CD4+ T helper cells, which are essential for coordinating the adaptive immune response.\n• As T helper cell count declines, the ability to activate B cells and cytotoxic T cells is progressively lost.\n• HIV mutates rapidly (high error rate of reverse transcriptase), producing antigenic variation that existing antibodies/memory cells cannot recognise.\n• HIV can remain latent (integrated as provirus in host DNA) for years, hiding from the immune system.\n• Eventually, T helper cell count falls below critical levels; the immune system becomes unable to fight opportunistic infections — this stage is AIDS.`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of vaccination programmes globally. Discuss the benefits, risks, and ethical considerations.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Benefits: vaccination has eradicated smallpox and nearly eliminated polio; prevents millions of deaths annually.\n• Herd immunity protects those who cannot be vaccinated (immunocompromised, infants).\n• Cost-effective: prevention is cheaper than treating disease; reduces healthcare burden.\n• Risks: rare adverse effects (allergic reactions, Guillain-Barré syndrome); risk-benefit ratio overwhelmingly favours vaccination at population level.\n• Ethical considerations: individual autonomy vs. public health responsibility; should vaccination be mandatory?\n• Informed consent is important; however, anti-vaccine misinformation undermines public health.\n• Global equity: developing nations may lack access to vaccines; initiatives like COVAX aim to address this.\n• Antigenic variation (e.g., influenza, HIV) limits vaccine efficacy and requires ongoing development.\n• Speed of development vs. safety testing (e.g., COVID-19 vaccines); transparency in data builds trust.\n• Religious/cultural objections must be balanced against public health needs.`
      },
      {
        q: 'Discuss the reliability of forensic evidence in criminal investigations, including DNA profiling, entomology, and time of death estimation.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• DNA profiling is highly discriminating (multiple STR loci give very low random match probability) but not infallible.\n• Contamination, degradation, secondary transfer, and mixed profiles can reduce reliability.\n• Laboratory errors and analyst bias can affect interpretation of partial profiles.\n• Forensic entomology: insect succession and developmental stages provide estimates of post-mortem interval; accuracy depends on temperature records and species identification.\n• Limitations: insect access may be restricted (clothing, burial, indoor); environmental variables introduce uncertainty.\n• Time of death estimation uses multiple methods (body temperature, rigor mortis, livor mortis, vitreous potassium) but all have significant error margins.\n• Combining multiple lines of evidence increases reliability.\n• DNA evidence does not prove guilt alone — it proves presence, not action; context is essential.\n• Statistical presentation of DNA evidence must be clear to juries to avoid misinterpretation (prosecutor's fallacy).\n• Science provides probabilistic evidence; legal standards require "beyond reasonable doubt" — these must be clearly distinguished.`
      },
    ],
  },

  'T7': {
    green: [
      {
        q: 'State what is meant by negative feedback and give one example in the human body.',
        marks: 2, tier: 'green',
        modelAnswer: `• Negative feedback is a homeostatic mechanism in which a deviation from the set point triggers a response that reverses the change, returning the condition to normal.\n• Example: When blood glucose rises above the set point, the pancreas detects this and beta cells secrete insulin, which stimulates glucose uptake and glycogenesis, lowering blood glucose back to normal.\n(Also accept: thermoregulation, osmoregulation examples.)`
      },
      {
        q: 'State the roles of insulin and glucagon in blood glucose regulation.',
        marks: 3, tier: 'green',
        modelAnswer: `• Insulin (from beta cells): lowers blood glucose by stimulating cells to absorb glucose (via GLUT4 transporters), promoting glycogenesis (glucose → glycogen) in liver and muscle, and increasing cellular respiration.\n• Glucagon (from alpha cells): raises blood glucose by stimulating glycogenolysis (glycogen → glucose) in the liver, gluconeogenesis (making glucose from amino acids/glycerol), and releasing glucose into the blood.\n• Together they maintain blood glucose within a narrow range (~4-6 mmol/L) via negative feedback.`
      },
      {
        q: 'State the three types of neurone and their functions.',
        marks: 3, tier: 'green',
        modelAnswer: `• Sensory neurone: carries electrical impulses from receptors (e.g., in skin, eyes) to the central nervous system (brain and spinal cord).\n• Relay (interneurone): connects sensory and motor neurones within the CNS; involved in processing and coordinating responses.\n• Motor neurone: carries impulses from the CNS to effectors (muscles or glands), triggering a response.`
      },
      {
        q: 'State what is meant by the resting potential of a neurone.',
        marks: 2, tier: 'green',
        modelAnswer: `• The resting potential is the potential difference across the neurone membrane when it is not transmitting an impulse, typically -70mV (inside negative relative to outside).\n• It is maintained by the sodium-potassium pump (3Na⁺ out, 2K⁺ in) and the selective permeability of the membrane to K⁺ ions (K⁺ leak channels).`
      },
    ],
    amber: [
      {
        q: 'Describe how an action potential is generated and propagated along a myelinated neurone.',
        marks: 5, tier: 'amber',
        modelAnswer: `• At rest, the membrane is polarised at -70mV (resting potential).\n• A stimulus causes depolarisation; if threshold (-55mV) is reached, voltage-gated Na⁺ channels open rapidly; Na⁺ rushes in by diffusion; membrane depolarises to +40mV (action potential).\n• Na⁺ channels close (inactivation); voltage-gated K⁺ channels open; K⁺ flows out; membrane repolarises (briefly hyperpolarises).\n• The refractory period prevents backward transmission and ensures impulses travel in one direction.\n• In myelinated neurones, ion exchange only occurs at nodes of Ranvier (gaps in myelin); the impulse jumps between nodes (saltatory conduction), greatly increasing speed compared to unmyelinated neurones.`
      },
      {
        q: 'Explain how the kidney produces concentrated urine using the loop of Henle and ADH.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The loop of Henle creates an osmotic gradient in the kidney medulla using a countercurrent multiplier.\n• Descending limb: permeable to water but not ions; water leaves by osmosis into the hyperosmotic medulla, concentrating the filtrate.\n• Ascending limb: impermeable to water; actively pumps Na⁺/Cl⁻ out into the medulla, diluting the filtrate and increasing medullary concentration.\n• This creates a gradient of increasing concentration from cortex to inner medulla.\n• When ADH is released (from posterior pituitary, triggered by low water potential detected by hypothalamic osmoreceptors), it makes the collecting duct walls more permeable to water by inserting aquaporins.\n• Water is reabsorbed from the collecting duct into the concentrated medulla by osmosis, producing small volumes of concentrated urine.`
      },
      {
        q: 'Describe how synaptic transmission occurs at a cholinergic synapse.',
        marks: 5, tier: 'amber',
        modelAnswer: `• An action potential arrives at the presynaptic terminal (synaptic knob).\n• Voltage-gated Ca²⁺ channels open; Ca²⁺ ions flood into the terminal.\n• Ca²⁺ causes synaptic vesicles containing acetylcholine (ACh) to move to and fuse with the presynaptic membrane (exocytosis).\n• ACh is released into the synaptic cleft and diffuses across to the postsynaptic membrane.\n• ACh binds to specific cholinergic receptors on the postsynaptic membrane, opening Na⁺ channels and causing depolarisation (excitatory postsynaptic potential).\n• If threshold is reached, a new action potential is generated in the postsynaptic neurone.\n• ACh is rapidly broken down by acetylcholinesterase in the cleft; products (choline and acetate) are recycled back into the presynaptic terminal.`
      },
      {
        q: 'Explain how the body responds to a decrease in core body temperature.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Thermoreceptors in the hypothalamus (and peripheral receptors in skin) detect the fall in blood/air temperature.\n• The hypothalamus activates the sympathetic nervous system and endocrine responses.\n• Vasoconstriction: arterioles supplying skin capillaries narrow, reducing blood flow to the surface and minimising heat loss by radiation.\n• Shivering: involuntary skeletal muscle contractions generate heat from increased respiration.\n• Piloerection: erector pili muscles contract, raising hairs to trap an insulating layer of air (less effective in humans).\n• Increased metabolic rate: thyroid hormone and adrenaline increase cellular respiration, generating more heat.\n• Behavioural responses: adding clothing, seeking shelter, curling up to reduce surface area.`
      },
    ],
    red: [
      {
        q: 'Discuss how disruption of homeostatic mechanisms can lead to disease, using diabetes mellitus as a case study.',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Homeostasis maintains internal conditions within narrow limits for optimal cell function; disruption can be harmful or fatal.\n• Type 1 diabetes: autoimmune destruction of pancreatic beta cells; no insulin produced; blood glucose unregulated, rises dangerously after meals.\n• Without insulin: cells cannot take up glucose effectively; blood glucose remains high (hyperglycaemia); glucose appears in urine (osmotic diuresis).\n• Cells switch to fat metabolism; ketone bodies accumulate causing ketoacidosis — potentially fatal.\n• Long-term hyperglycaemia damages blood vessels (retinopathy, nephropathy, neuropathy, cardiovascular disease).\n• Type 2 diabetes: cells become resistant to insulin (receptor dysfunction) or insufficient insulin produced; associated with obesity, inactivity, genetics.\n• Treatment differs: Type 1 requires insulin injections and monitoring; Type 2 managed initially with diet, exercise, and medication (metformin).\n• Demonstrates that failure of one component (beta cells/insulin signalling) has cascading effects on multiple body systems.\n• Blood glucose regulation illustrates negative feedback; its failure shows the importance of homeostasis for survival.\n• Increasing global prevalence of Type 2 linked to lifestyle changes; represents a major public health challenge.`
      },
      {
        q: 'Evaluate the roles of the nervous and endocrine systems in maintaining homeostasis. Discuss their coordination and the advantages of having both systems.',
        marks: 6, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 6:\n\n• Nervous system: fast (milliseconds), short-lived, precise targeting via specific nerve pathways; ideal for rapid responses (reflexes, muscle contraction).\n• Endocrine system: slower (seconds to hours), longer-lasting, widespread effect via blood; ideal for sustained physiological changes (growth, metabolism, reproduction).\n• Both systems are coordinated by the hypothalamus, which links them (neuroendocrine integration).\n• Some responses require both: e.g., stress response uses both sympathetic nervous system (immediate fight-or-flight) and adrenal hormones (sustained alertness).\n• Blood glucose regulation: nervous system detects and rapidly signals; endocrine system (insulin/glucagon) provides sustained control.\n• Having both systems allows organisms to respond to both immediate threats and long-term environmental changes.\n• Redundancy and integration provide robustness — failure of one pathway may be partially compensated by the other.\n• Evolution has produced this dual system because organisms face challenges at vastly different timescales; neither system alone would be sufficient.`
      },
    ],
  },

  'T8': {
    green: [
      {
        q: 'State the difference between transcription and translation.',
        marks: 2, tier: 'green',
        modelAnswer: `• Transcription: the process of copying the DNA base sequence of a gene into a complementary mRNA molecule; occurs in the nucleus; catalysed by RNA polymerase.\n• Translation: the process of assembling a polypeptide (protein) at a ribosome using the mRNA codons as a template; tRNA brings amino acids; occurs at ribosomes in the cytoplasm/rough ER.`
      },
      {
        q: 'State what is meant by a restriction enzyme and sticky ends.',
        marks: 2, tier: 'green',
        modelAnswer: `• A restriction enzyme (restriction endonuclease) is an enzyme that cuts DNA at a specific palindromic recognition sequence.\n• Sticky ends are short, single-stranded overhangs left after cutting; they have complementary base sequences that can hydrogen-bond with matching sticky ends from another piece of DNA cut with the same enzyme, facilitating joining by DNA ligase.`
      },
      {
        q: 'State the role of the following in genetic engineering: vector, DNA ligase, host cell.',
        marks: 3, tier: 'green',
        modelAnswer: `• Vector: a carrier molecule (e.g., plasmid, virus, liposome) used to transfer the gene of interest into the host cell.\n• DNA ligase: an enzyme that joins DNA fragments by forming phosphodiester bonds between the sugar-phosphate backbone, sealing the gene into the vector.\n• Host cell: the cell (often a bacterium like E. coli) that receives the recombinant DNA and expresses the foreign gene, producing the desired protein.`
      },
      {
        q: 'State what is meant by epigenetics and give two examples of epigenetic modifications.',
        marks: 3, tier: 'green',
        modelAnswer: `• Epigenetics refers to heritable changes in gene expression that do not involve changes to the underlying DNA base sequence.\n• Example 1: DNA methylation — addition of methyl groups to cytosine bases (often in CpG islands in promoter regions), which typically silences gene expression by preventing transcription factor binding.\n• Example 2: Histone modification — acetylation of histone tails loosens chromatin structure, making DNA more accessible for transcription (activation); deacetylation has the opposite effect (silencing).`
      },
    ],
    amber: [
      {
        q: 'Describe the steps involved in producing a transgenic organism using genetic engineering.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The desired gene is identified and isolated — either cut from source DNA using restriction enzymes or synthesised from mRNA using reverse transcriptase to make cDNA.\n• The gene is inserted into a vector (e.g., plasmid): the vector is cut with the same restriction enzyme to create compatible sticky ends; the gene is ligated in using DNA ligase.\n• A promoter sequence is included to ensure the gene is expressed in the host organism.\n• The recombinant vector is introduced into the host cell (transformation) — by heat shock, electroporation, or using Agrobacterium in plants.\n• Successfully transformed cells are identified using selectable markers (e.g., antibiotic resistance or fluorescent markers).\n• Transformed cells are cultured/grown into whole organisms that express the transgene.`
      },
      {
        q: 'Explain how the lac operon demonstrates gene regulation in prokaryotes.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The lac operon contains structural genes (lacZ, lacY, lacA) for lactose metabolism, plus regulatory elements (promoter, operator) and a separate regulatory gene (lacI).\n• The regulatory gene constitutively produces a repressor protein.\n• In the absence of lactose: the repressor binds to the operator, physically blocking RNA polymerase from transcribing the structural genes — genes are switched off.\n• When lactose is present: lactose (converted to allolactose) acts as an inducer, binding to the repressor and changing its shape so it can no longer bind the operator.\n• RNA polymerase can now bind to the promoter and transcribe the structural genes, producing enzymes for lactose metabolism.\n• This is an example of inducible gene expression — genes are only expressed when needed, conserving energy and resources.`
      },
      {
        q: 'Explain how CRISPR-Cas9 technology can be used to edit genes and describe its advantages over earlier methods.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A guide RNA (gRNA) is designed with a sequence complementary to the target DNA location.\n• The gRNA directs the Cas9 protein (a nuclease) to the specific genomic location; Cas9 makes a precise double-strand break in the DNA.\n• The cell's natural repair mechanisms (NHEJ or HDR) repair the break; NHEJ can disrupt a gene (knockout); HDR can insert a new sequence if a template is provided.\n• Advantages over older methods (zinc finger nucleases, TALENs): simpler to design (just change gRNA sequence), cheaper, faster, more precise, can target multiple genes simultaneously, works in virtually all organism types.`
      },
      {
        q: 'Explain how alternative splicing increases the diversity of proteins produced from a single gene.',
        marks: 4, tier: 'amber',
        modelAnswer: `• After transcription, pre-mRNA contains both exons (coding) and introns (non-coding).\n• During RNA processing, introns are removed and exons are joined together by spliceosomes.\n• Alternative splicing means different combinations of exons can be included or excluded from the mature mRNA in different cell types or conditions.\n• This means one gene can produce multiple different mRNA variants, each translated into a different protein isoform.\n• This dramatically increases proteome diversity beyond the number of genes (e.g., the human genome has ~20,000 genes but produces >100,000 different proteins).\n• Regulation of alternative splicing allows tissue-specific and developmentally-regulated protein production.`
      },
    ],
    red: [
      {
        q: 'Evaluate the ethical, social, and scientific arguments for and against genetic modification of organisms (GMOs).',
        marks: 8, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 8:\n\n• Scientific benefits: increased crop yields, pest/disease resistance, drought tolerance, enhanced nutrition (Golden Rice — vitamin A), reduced pesticide use.\n• Medical applications: GM bacteria produce human insulin, growth hormone; potential for gene therapy in humans.\n• Environmental concerns: gene flow to wild relatives (superweeds); effects on non-target organisms; reduced biodiversity from monocultures.\n• Economic issues: corporate control of patented seeds; farmer dependence on biotech companies; developing world access.\n• Safety: extensive testing shows approved GM foods are safe for consumption; however, long-term ecological effects are harder to assess.\n• Ethical: concerns about "playing God" or crossing species boundaries; religious objections; animal welfare in GM animal research.\n• Social: labelling and consumer choice; public mistrust of corporations and regulators; right to know vs. unnecessary alarm.\n• Regulatory frameworks vary globally; evidence-based regulation is essential but politically influenced.\n• The precautionary principle vs. potential to address food security and climate challenges.\n• Each application must be assessed on its own merits — blanket approval or rejection is not scientifically justified.`
      },
      {
        q: 'Discuss how our understanding of gene expression and epigenetics has changed our view of genetics and has implications for medicine.',
        marks: 6, tier: 'red',
        modelAnswer: `Award 1 mark per valid point, up to 6:\n\n• Traditional view: "one gene, one protein" — now replaced by understanding of alternative splicing, post-translational modification, and epigenetic regulation.\n• Epigenetics shows that gene expression can be modified by environment without changing DNA sequence — nature and nurture are intertwined.\n• Epigenetic changes can be inherited (transgenerational epigenetic inheritance), challenging purely Mendelian views.\n• Medical implications: epigenetic drugs (e.g., HDAC inhibitors, demethylating agents) can reactivate silenced tumour suppressors in cancer treatment.\n• Pharmacogenomics: understanding individual gene expression patterns allows personalised medicine — right drug, right dose, right patient.\n• Developmental biology: differential gene expression explains how one genome produces >200 cell types; errors cause disease.\n• Environmental factors (diet, stress, toxins) can cause epigenetic changes — explains diseases with environmental triggers.\n• Potential for epigenetic biomarkers in early disease diagnosis.`
      },
    ],
  },

};
