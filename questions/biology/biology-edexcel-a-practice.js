/*
 * Edexcel A (Salters-Nuffield, 9BN0) A-Level Biology — Exam Practice Question Bank
 * 40 written/exam-style questions per topic (S1–S8), 320 questions total.
 * Mix of 1–8 mark questions using Edexcel command words.
 */

const BIOLOGY_EDEXCEL_A_PRACTICE = {
  "S1": {
    "name": "Lifestyle, Health and Risk",
    "questions": [
      {
        "q": "State the function of the aorta.",
        "marks": 1,
        "markScheme": "• Carries oxygenated blood from the left ventricle to the body / systemic circulation (1)"
      },
      {
        "q": "State what is meant by atherosclerosis.",
        "marks": 2,
        "markScheme": "• The build-up of fatty deposits / atheromas in the walls of arteries (1)\n• Leading to narrowing of the lumen / reduced blood flow (1)"
      },
      {
        "q": "Describe the structure of an artery.",
        "marks": 3,
        "markScheme": "• Thick muscular wall with elastic tissue (1)\n• Narrow lumen relative to wall thickness (1)\n• No valves (except at the base of the aorta and pulmonary artery) / endothelium lining is smooth (1)"
      },
      {
        "q": "Describe the sequence of events in the formation of a blood clot.",
        "marks": 4,
        "markScheme": "• Damage to the blood vessel wall / exposed collagen causes platelets to stick to the site and to each other (1)\n• Platelets and damaged tissue release thromboplastin (1)\n• Thromboplastin (with calcium ions) triggers the conversion of the inactive plasma protein prothrombin into the enzyme thrombin (1)\n• Thrombin catalyses the conversion of soluble fibrinogen into insoluble fibrin, forming a mesh of fibres that traps platelets and red blood cells to form a clot (1)"
      },
      {
        "q": "Explain why a blockage in a coronary artery can lead to a myocardial infarction.",
        "marks": 3,
        "markScheme": "• Coronary arteries supply the heart muscle with oxygenated blood (1)\n• Blockage reduces / prevents blood flow to an area of heart muscle (1)\n• Cardiac muscle cells are deprived of oxygen for aerobic respiration and die / necrosis (1)"
      },
      {
        "q": "Compare the structure of arteries and veins.",
        "marks": 4,
        "markScheme": "• Arteries have thicker muscular/elastic walls than veins (1)\n• Arteries have a narrower lumen relative to their diameter than veins (1)\n• Veins have valves to prevent backflow; arteries generally do not (1)\n• Both have an endothelial lining but arteries need to withstand higher pressure (1)"
      },
      {
        "q": "Describe how the structure of a capillary is related to its function.",
        "marks": 3,
        "markScheme": "• Wall is one cell thick / a single layer of endothelium, giving a short diffusion distance for rapid exchange (1)\n• Narrow lumen means red blood cells pass in single file, close to / pressed against the wall, which shortens the diffusion distance (and slows flow, allowing more time for exchange) (1)\n• Small gaps between endothelial cells make the wall permeable, allowing exchange of substances with the surrounding tissues (1)"
      },
      {
        "q": "Explain the difference between correlation and causation, using an example related to cardiovascular disease.",
        "marks": 3,
        "markScheme": "• Correlation means two variables change together / there is a statistical relationship (1)\n• Causation means one variable directly causes a change in the other (1)\n• Example: high saturated fat intake correlates with increased CVD risk, but other confounding factors (exercise, genetics) mean the relationship may not be directly causal without controlled experiments (1)"
      },
      {
        "q": "Describe how water molecules form hydrogen bonds.",
        "marks": 2,
        "markScheme": "• Water is a polar molecule with a slightly positive hydrogen end and slightly negative oxygen end (1)\n• Hydrogen bonds form between the slightly positive H of one molecule and the slightly negative O of another (1)"
      },
      {
        "q": "Explain how the properties of water make it important as a transport medium in blood.",
        "marks": 4,
        "markScheme": "• Water is a dipole / polar molecule: the oxygen is slightly negative (δ−) and the hydrogens slightly positive (δ+) (1)\n• Ions (e.g. Na⁺, Cl⁻) are attracted to the oppositely charged ends of water molecules and become surrounded by them, so they dissolve (1)\n• Polar molecules such as glucose and amino acids form hydrogen bonds with water and dissolve, so they can be carried in solution in the plasma (1)\n• Water is liquid at body temperature, so dissolved substances are carried as the blood flows / non-polar substances such as lipids are insoluble and must be carried in other forms (e.g. lipoproteins) (1)"
      },
      {
        "q": "State what is meant by the term risk factor in relation to disease.",
        "marks": 1,
        "markScheme": "• A factor / variable that increases the probability / likelihood of developing a disease (1)"
      },
      {
        "q": "Explain why smoking increases the risk of cardiovascular disease.",
        "marks": 4,
        "markScheme": "• Carbon monoxide in smoke binds to haemoglobin, reducing oxygen-carrying capacity (1)\n• Nicotine increases heart rate and blood pressure, increasing strain on the heart (1)\n• Chemicals in smoke damage the endothelium of artery walls, triggering atherosclerosis (1)\n• Smoking increases platelet stickiness, making blood clots more likely (1)"
      },
      {
        "q": "Describe the role of HDLs and LDLs in relation to cholesterol and cardiovascular disease.",
        "marks": 4,
        "markScheme": "• LDLs transport cholesterol from the liver to the tissues / cells (1)\n• Excess LDLs deposit cholesterol in artery walls, contributing to atheroma formation (1)\n• HDLs transport cholesterol from the tissues back to the liver for breakdown / excretion (1)\n• High HDL:LDL ratio is associated with reduced risk of CVD (1)"
      },
      {
        "q": "Evaluate the evidence linking diet to cardiovascular disease.",
        "marks": 6,
        "markScheme": "• Saturated fat intake raises blood LDL cholesterol levels which promotes atherosclerosis (1)\n• High salt intake increases blood pressure / hypertension which damages artery walls (1)\n• Epidemiological studies show strong correlations between diet and CVD incidence (1)\n• However, confounding variables (exercise, smoking, genetics, stress) make it difficult to establish direct causation (1)\n• Intervention studies (e.g. changing diet) support a causal link in some cases (1)\n• Evaluation: evidence is strong overall but individual risk depends on multiple interacting factors, not diet alone (1)"
      },
      {
        "q": "A student has a daily energy intake of 10 500 kJ and a daily energy expenditure of 11 700 kJ. Calculate the daily energy deficit as a percentage of energy intake, and state the likely effect on body mass if this continued.",
        "marks": 2,
        "markScheme": "• (11 700 − 10 500) / 10 500 × 100 = 11.4% (1)\n• Body mass would decrease / weight loss, as energy stores (e.g. fat) are used to meet the deficit (1)"
      },
      {
        "q": "Describe the events of the cardiac cycle during ventricular systole.",
        "marks": 3,
        "markScheme": "• Ventricles contract, increasing pressure inside the ventricles (1)\n• Atrioventricular valves close (producing the first heart sound) preventing backflow to the atria (1)\n• Semilunar valves open as ventricular pressure exceeds pressure in the aorta/pulmonary artery, and blood is forced out (1)"
      },
      {
        "q": "Describe how a heart dissection can be used to relate the structure of the heart to its function.",
        "marks": 3,
        "markScheme": "• Cut through / measure the thickness of the left and right ventricle walls (e.g. with a ruler) and compare them (1)\n• Relate the thicker left ventricle wall to the higher pressure needed to pump blood around the whole body, compared with the right ventricle pumping to the lungs (1)\n• Locate the atrioventricular and semilunar valves (and tendinous cords) / pour water into the vessels or chambers to show the valves close and prevent backflow (1)"
      },
      {
        "q": "Suggest why the left ventricle has a thicker wall than the right ventricle.",
        "marks": 2,
        "markScheme": "• The left ventricle pumps blood to the whole body / systemic circulation, which is at a greater distance (1)\n• A thicker muscular wall generates higher pressure to push blood through the systemic circuit (1)"
      },
      {
        "q": "State what is meant by the term thrombosis.",
        "marks": 1,
        "markScheme": "• The formation of a blood clot (thrombus) within a blood vessel, obstructing blood flow (1)"
      },
      {
        "q": "Explain how high blood pressure increases the risk of cardiovascular disease.",
        "marks": 3,
        "markScheme": "• High blood pressure damages the endothelial lining of arteries (1)\n• Damage triggers an inflammatory response and deposition of cholesterol / atheroma formation (1)\n• This narrows arteries and can lead to thrombus formation / increased risk of heart attack or stroke (1)"
      },
      {
        "q": "Describe the role of platelets in the blood clotting process.",
        "marks": 3,
        "markScheme": "• Platelets are cell fragments that circulate in the blood (1)\n• When a vessel is damaged, platelets adhere to exposed collagen and aggregate to form a platelet plug (1)\n• Platelets release clotting factors that initiate the clotting cascade / conversion of fibrinogen to fibrin (1)"
      },
      {
        "q": "Explain why glucose can be transported dissolved in blood plasma, but triglycerides and cholesterol are transported as lipoproteins.",
        "marks": 3,
        "markScheme": "• Glucose is polar / has OH groups that form hydrogen bonds with water (dipoles), so it dissolves in plasma (1)\n• Triglycerides and cholesterol are non-polar / hydrophobic, so they are insoluble in water (1)\n• They are combined with proteins (and phospholipids) to form lipoproteins (HDLs and LDLs), which can be carried in the plasma (1)"
      },
      {
        "q": "Outline how a cohort study can be used to investigate risk factors for cardiovascular disease.",
        "marks": 3,
        "markScheme": "• A large group of people is followed over a long period of time (1)\n• Data is collected on lifestyle factors (diet, smoking, exercise) and health outcomes (CVD incidence) (1)\n• Statistical analysis is used to identify associations between risk factors and disease (1)"
      },
      {
        "q": "Describe the structure of the heart, including the names of the four chambers and associated blood vessels.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Right atrium receives deoxygenated blood from the vena cava; right ventricle pumps it to the lungs via the pulmonary artery (1)\n• Left atrium receives oxygenated blood from the pulmonary veins; left ventricle pumps it to the body via the aorta (1)\n• Atrioventricular valves (tricuspid on right, bicuspid/mitral on left) separate atria and ventricles (1)\n• Septum separates the left and right sides of the heart, preventing mixing of oxygenated and deoxygenated blood (1)"
      },
      {
        "q": "Draw and label a diagram of a cross-section through an artery, showing the key tissue layers.",
        "marks": 3,
        "diagram": true,
        "markScheme": "• Inner endothelium / tunica intima drawn and labelled (1)\n• Thick middle layer of smooth muscle and elastic fibres / tunica media drawn and labelled (1)\n• Outer layer of connective tissue / tunica adventitia drawn and labelled, with small lumen relative to wall thickness (1)"
      },
      {
        "q": "Explain the importance of the double circulatory system in mammals.",
        "marks": 3,
        "markScheme": "• Blood passes through the heart twice in one complete circuit (pulmonary and systemic) (1)\n• This maintains high pressure in the systemic circulation for efficient delivery of oxygen/nutrients to tissues (1)\n• Pressure is lower in the pulmonary circuit, preventing damage to the delicate gas exchange surfaces in the lungs (1)"
      },
      {
        "q": "Explain why doctors measure both systolic and diastolic blood pressure.",
        "marks": 2,
        "markScheme": "• Systolic pressure measures the pressure during ventricular contraction, indicating the force of heart output (1)\n• Diastolic pressure measures the pressure during relaxation, indicating the resistance of blood vessels / baseline arterial pressure; both are needed for a full picture of cardiovascular health (1)"
      },
      {
        "q": "Suggest why the incidence of CVD varies between different countries.",
        "marks": 3,
        "markScheme": "• Differences in diet — e.g. Mediterranean diets are associated with lower CVD rates (1)\n• Differences in prevalence of risk factors such as smoking, obesity, and physical inactivity (1)\n• Genetic differences between populations / differences in healthcare access and screening programmes (1)"
      },
      {
        "q": "Describe how to determine the vitamin C content of a fruit juice using DCPIP.",
        "marks": 4,
        "markScheme": "• Put a fixed volume of DCPIP solution (e.g. 1 cm³) into a test tube (1)\n• Add a vitamin C solution of known concentration drop by drop (from a burette / graduated pipette), shaking, until the blue colour just disappears; record the volume needed (1)\n• Repeat with the fruit juice, using the same volume and concentration of DCPIP and the same end point (1)\n• Calculate the vitamin C content of the juice by comparing the volumes needed (vitamin C in juice = concentration of standard × volume of standard ÷ volume of juice); repeat and calculate a mean (1)"
      },
      {
        "q": "Explain the difference between an embolism and a thrombus.",
        "marks": 2,
        "markScheme": "• A thrombus is a blood clot that forms at a specific site within a blood vessel (1)\n• An embolism occurs when part of a thrombus breaks away and travels through the bloodstream to block a vessel elsewhere (1)"
      },
      {
        "q": "Evaluate the use of statins in reducing the risk of cardiovascular disease.",
        "marks": 5,
        "markScheme": "• Statins reduce blood cholesterol by inhibiting the enzyme involved in cholesterol synthesis in the liver (1)\n• Clinical trials show statins significantly reduce the risk of heart attack and stroke (1)\n• They are widely prescribed and relatively inexpensive (1)\n• However, they can have side effects including muscle pain, liver damage, and digestive problems (1)\n• Evaluation: benefits generally outweigh risks for high-risk individuals, but lifestyle changes should also be encouraged alongside medication (1)"
      },
      {
        "q": "State two differences between saturated and unsaturated fatty acids.",
        "marks": 2,
        "markScheme": "• Saturated fatty acids have no C=C double bonds in the hydrocarbon chain; unsaturated fatty acids have one or more C=C double bonds (1)\n• Saturated chains are straight and pack closely, so saturated fats are usually solid at room temperature; C=C bonds put kinks in unsaturated chains, so they are usually liquid (oils) (1)"
      },
      {
        "q": "Describe how pressure changes in the heart during one cardiac cycle.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• During atrial systole, atrial pressure rises above ventricular pressure, forcing blood through AV valves (1)\n• During ventricular systole, ventricular pressure rises rapidly above atrial pressure, closing AV valves, and exceeds arterial pressure, opening semilunar valves (1)\n• During diastole, ventricular pressure falls below arterial pressure, closing semilunar valves (1)\n• Ventricular pressure falls below atrial pressure, AV valves open and passive filling occurs (1)"
      },
      {
        "q": "Calculate BMI for a person who is 1.75 m tall and weighs 82 kg. State whether this is classified as overweight.",
        "marks": 2,
        "markScheme": "• BMI = 82 / (1.75)² = 82 / 3.0625 = 26.8 (1)\n• This is classified as overweight (BMI 25–29.9) (1)"
      },
      {
        "q": "Explain why unsaturated fats are generally considered healthier than saturated fats.",
        "marks": 3,
        "markScheme": "• Unsaturated fats contain one or more C=C double bonds, giving them kinks that prevent close packing / they are liquid at room temperature (1)\n• Saturated fats increase blood LDL cholesterol levels, promoting atherosclerosis (1)\n• Unsaturated fats can increase HDL cholesterol / do not raise LDL levels, reducing CVD risk (1)"
      },
      {
        "q": "Outline how to investigate the effect of caffeine concentration on the heart rate of Daphnia.",
        "marks": 3,
        "markScheme": "• Place a Daphnia in a small volume of pond water / on a cavity slide, leave it to acclimatise, then count heartbeats under a microscope for a set time (e.g. 20 s) to find the resting rate (1)\n• Replace the water with a range of caffeine concentrations, leaving each for the same time before counting heartbeats again (1)\n• Control variables: temperature, volume of solution, size of Daphnia / use a fresh Daphnia each time; include a control with no caffeine; repeat and calculate means (1)"
      },
      {
        "q": "Suggest why epidemiological studies on diet and CVD often produce conflicting results.",
        "marks": 3,
        "markScheme": "• Different study designs and sample sizes may produce different levels of statistical significance (1)\n• Self-reported dietary data is unreliable / recall bias (1)\n• Confounding variables (genetics, lifestyle, socioeconomic status) are difficult to control between studies (1)"
      },
      {
        "q": "Draw a diagram to show how two α-glucose molecules join to form maltose.",
        "marks": 3,
        "markScheme": "• Two α-glucose molecules drawn with the OH groups on carbon 1 and carbon 4 lined up (1)\n• A water molecule removed / labelled as a condensation reaction (1)\n• Maltose drawn with a 1,4-glycosidic bond (C–O–C link) labelled (1)",
        "diagram": true
      },
      {
        "q": "Suggest two reasons why some people think it is more acceptable to use Daphnia than vertebrates in heart-rate investigations.",
        "marks": 2,
        "markScheme": "• Daphnia have a much simpler nervous system, so they are thought to be less aware of / feel less pain or distress (1)\n• They are abundant, reproduce quickly and can be returned to their habitat unharmed after the experiment (1)"
      },
      {
        "q": "Explain why someone with a family history of CVD may be advised to have regular health checks even if they have a healthy lifestyle.",
        "marks": 2,
        "markScheme": "• Genetic factors can predispose individuals to high blood cholesterol, high blood pressure, or atherosclerosis regardless of lifestyle (1)\n• Regular monitoring allows early detection and treatment (e.g. statins, blood pressure medication) to reduce risk (1)"
      }
    ]
  },
  "S2": {
    "name": "Genes and Health",
    "questions": [
      {
        "q": "State the components of a nucleotide.",
        "marks": 2,
        "markScheme": "• A pentose sugar (deoxyribose in DNA / ribose in RNA) (1)\n• A phosphate group and a nitrogenous base (A, T, C, G in DNA; A, U, C, G in RNA) (1)"
      },
      {
        "q": "Describe the structure of DNA.",
        "marks": 4,
        "markScheme": "• Two polynucleotide strands wound into a double helix (1)\n• Strands are antiparallel (run in opposite directions, 5′ to 3′ and 3′ to 5′) (1)\n• Complementary base pairing: adenine pairs with thymine (two hydrogen bonds), cytosine pairs with guanine (three hydrogen bonds) (1)\n• Sugar-phosphate backbone on the outside with bases on the inside (1)"
      },
      {
        "q": "Describe the fluid mosaic model of cell membrane structure.",
        "marks": 4,
        "markScheme": "• Phospholipid bilayer forms the basic structure with hydrophilic heads facing outward and hydrophobic tails facing inward (1)\n• Integral/transmembrane proteins span the bilayer; peripheral proteins are on the surface (1)\n• Glycoproteins and glycolipids are present on the outer surface for cell signalling / recognition (1)\n• The membrane is described as fluid because phospholipids and proteins can move laterally (1)"
      },
      {
        "q": "Explain how the structure of the gas exchange system is adapted for efficient gas exchange.",
        "marks": 4,
        "markScheme": "• Large surface area provided by millions of alveoli (1)\n• Thin walls (one cell thick) of alveoli and capillaries provide a short diffusion distance (1)\n• Rich blood supply maintains a steep concentration gradient for O₂ and CO₂ (1)\n• Ventilation maintains the concentration gradient by bringing in fresh air and removing stale air (1)"
      },
      {
        "q": "Describe the process of transcription.",
        "marks": 4,
        "markScheme": "• RNA polymerase binds to the promoter region on the template/antisense strand of DNA (1)\n• The DNA double helix unwinds and hydrogen bonds between bases break (1)\n• Free RNA nucleotides align with complementary bases on the template strand (A with U, T with A, C with G, G with C) (1)\n• RNA polymerase joins the nucleotides together to form a pre-mRNA strand, which is then processed into mature mRNA (1)"
      },
      {
        "q": "Describe the process of translation.",
        "marks": 5,
        "markScheme": "• mRNA binds to a ribosome at the start codon (AUG) (1)\n• tRNA molecules with complementary anticodons bring specific amino acids to the ribosome (1)\n• The ribosome moves along the mRNA, reading codons in sequence (1)\n• Peptide bonds form between adjacent amino acids, building a polypeptide chain (1)\n• Translation continues until a stop codon is reached and the polypeptide is released (1)"
      },
      {
        "q": "Explain the role of the CFTR protein in healthy individuals.",
        "marks": 3,
        "markScheme": "• CFTR is a chloride ion channel protein located in epithelial cell membranes (1)\n• It allows chloride ions to move out of cells into the mucus / lumen (1)\n• Water follows by osmosis, keeping the mucus thin and fluid (1)"
      },
      {
        "q": "Explain how a mutation in the CFTR gene causes the symptoms of cystic fibrosis.",
        "marks": 4,
        "markScheme": "• A deletion of three bases (most commonly ΔF508) results in a misfolded CFTR protein that is not inserted into the cell membrane (1)\n• Chloride ions cannot be transported out of epithelial cells (1)\n• Water is not drawn out by osmosis, resulting in thick, sticky mucus (1)\n• This mucus blocks airways, pancreatic ducts, and reproductive tracts, causing breathing difficulties, digestive problems, and infertility (1)"
      },
      {
        "q": "State the meaning of the term genotype.",
        "marks": 1,
        "markScheme": "• The genetic makeup / combination of alleles an organism has for a particular gene (1)"
      },
      {
        "q": "State the meaning of the term phenotype.",
        "marks": 1,
        "markScheme": "• The observable characteristics of an organism, resulting from the interaction of genotype and environment (1)"
      },
      {
        "q": "A cross is carried out between two parents who are both carriers of cystic fibrosis (Cc × Cc). Draw a genetic diagram and state the probability of a child having cystic fibrosis.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Correct parental genotypes identified: Cc × Cc (1)\n• Correct gametes shown: C and c from each parent (1)\n• Correct Punnett square: CC, Cc, Cc, cc (1)\n• Probability of affected child (cc) = 1 in 4 / 25% (1)"
      },
      {
        "q": "Explain how an error during DNA replication can give rise to a mutation.",
        "marks": 2,
        "markScheme": "• During replication, a wrong nucleotide may be inserted opposite the template (incorrect base pairing), or a nucleotide may be added or missed out (1)\n• The altered base sequence is copied in later rounds of replication, so a permanent change in the base sequence / codons (a gene mutation) is passed to daughter cells (1)"
      },
      {
        "q": "Explain why a substitution mutation may not always change the amino acid sequence of a protein.",
        "marks": 2,
        "markScheme": "• The genetic code is degenerate / redundant, meaning multiple codons can code for the same amino acid (1)\n• A substitution in the third base of a codon (wobble position) may still code for the same amino acid / silent mutation (1)"
      },
      {
        "q": "Explain why a deletion mutation is usually more harmful than a substitution mutation.",
        "marks": 3,
        "markScheme": "• A deletion causes a frameshift, changing every codon downstream of the mutation (1)\n• This alters all subsequent amino acids in the polypeptide (1)\n• A substitution only affects one codon / one amino acid (unless it creates a stop codon), so the rest of the protein is unchanged (1)"
      },
      {
        "q": "Describe the role of carrier proteins in facilitated diffusion.",
        "marks": 3,
        "markScheme": "• Carrier proteins are specific to particular molecules (1)\n• The molecule binds to the carrier protein, causing it to change shape (1)\n• The molecule is released on the other side of the membrane, moving down its concentration gradient without energy input (1)"
      },
      {
        "q": "Describe the structure and function of channel proteins in cell membranes.",
        "marks": 2,
        "markScheme": "• Channel proteins form water-filled pores through the membrane (1)\n• They allow specific polar molecules or ions to pass through by facilitated diffusion down their concentration gradient (1)"
      },
      {
        "q": "Explain how the structure of a tRNA molecule is related to its function in translation.",
        "marks": 3,
        "markScheme": "• Cloverleaf shape with an anticodon loop that is complementary to a specific mRNA codon (1)\n• An amino acid attachment site (3′ end / CCA sequence) carries the specific amino acid (1)\n• The specific shape ensures the correct amino acid is brought to the ribosome for each codon / specificity of the genetic code (1)"
      },
      {
        "q": "Evaluate the arguments for and against genetic screening for cystic fibrosis.",
        "marks": 6,
        "markScheme": "• For: allows carriers to make informed decisions about having children (1)\n• For: early diagnosis enables early treatment, improving quality of life (1)\n• For: can reduce incidence of the condition in the population over time (1)\n• Against: may cause anxiety or psychological stress for individuals found to be carriers (1)\n• Against: raises ethical concerns about potential discrimination (insurance, employment) (1)\n• Against: risk of false positives/negatives; testing may lead to difficult decisions about pregnancy termination (1)"
      },
      {
        "q": "Describe the differences between DNA and RNA.",
        "marks": 3,
        "markScheme": "• DNA contains deoxyribose sugar; RNA contains ribose sugar (1)\n• DNA is double-stranded; RNA is single-stranded (1)\n• DNA contains thymine; RNA contains uracil instead (1)"
      },
      {
        "q": "Explain how the mutation in people with cystic fibrosis impairs the functioning of the gaseous exchange system.",
        "marks": 4,
        "markScheme": "• Faulty CFTR means less chloride secretion, so less water leaves the epithelial cells by osmosis and the mucus is thick and sticky (1)\n• Cilia cannot move the thick mucus, so it builds up and blocks bronchioles; fewer alveoli are ventilated, reducing the surface area for gas exchange (1)\n• The concentration gradient of oxygen is reduced / less oxygen diffuses into the blood, causing breathlessness (1)\n• Bacteria trapped in the mucus are not removed, causing frequent lung infections that damage / scar lung tissue and increase the diffusion distance (1)"
      },
      {
        "q": "State what is meant by the term codon.",
        "marks": 1,
        "markScheme": "• A sequence of three bases / triplet on mRNA that codes for a specific amino acid (or stop signal) (1)"
      },
      {
        "q": "Explain why the genetic code is described as non-overlapping and degenerate.",
        "marks": 2,
        "markScheme": "• Non-overlapping: each base is part of only one codon / the triplets are read one after another without sharing bases (1)\n• Degenerate: most amino acids are coded for by more than one codon / there are 64 codons for 20 amino acids (1)"
      },
      {
        "q": "Describe how Fick’s law applies to gas exchange in the lungs.",
        "marks": 3,
        "markScheme": "• Rate of diffusion is proportional to surface area × concentration difference / thickness of membrane (1)\n• The alveoli provide a large surface area and thin walls to maximise the rate (1)\n• Ventilation and blood flow maintain a steep concentration gradient for O₂ and CO₂ (1)"
      },
      {
        "q": "The surface area of a model gas exchange surface decreases from 60 to 45 units and its thickness increases from 0.5 µm to 0.6 µm. The concentration difference is unchanged. Use Fick's law to calculate the percentage change in the rate of diffusion.",
        "marks": 3,
        "markScheme": "• Fick's law: rate of diffusion ∝ (surface area × concentration difference) / thickness (1)\n• Relative rate before = 60 / 0.5 = 120; after = 45 / 0.6 = 75 (1)\n• Percentage change = (75 − 120) / 120 × 100 = −37.5% / a 37.5% decrease (1)"
      },
      {
        "q": "Explain the effect of temperature on membrane permeability.",
        "marks": 4,
        "markScheme": "• At low temperatures, phospholipids are closely packed and membrane is less fluid / less permeable (1)\n• As temperature increases, kinetic energy increases, phospholipids move more, membrane becomes more fluid and permeable (1)\n• Above approximately 40°C, proteins begin to denature, disrupting channel and carrier protein function (1)\n• The phospholipid bilayer becomes very permeable / loses its integrity, and cell contents leak out (1)"
      },
      {
        "q": "Draw a labelled diagram of the basic structure of an amino acid.",
        "marks": 2,
        "diagram": true,
        "markScheme": "• Central carbon atom with an amino group (–NH₂) and a carboxyl group (–COOH) correctly drawn (1)\n• R group / variable side chain and hydrogen atom attached to the central carbon shown (1)"
      },
      {
        "q": "Explain how a polypeptide chain folds to form a functional protein.",
        "marks": 4,
        "markScheme": "• Primary structure: the specific sequence of amino acids in the polypeptide chain (1)\n• Secondary structure: the chain folds into alpha-helices and beta-pleated sheets held by hydrogen bonds (1)\n• Tertiary structure: further folding into a 3D shape held by hydrogen bonds, ionic bonds, disulfide bridges, and hydrophobic interactions (1)\n• Quaternary structure (if applicable): two or more polypeptide chains associate to form the functional protein (1)"
      },
      {
        "q": "Explain the role of enzymes in digestion of food in the small intestine.",
        "marks": 3,
        "markScheme": "• Enzymes are biological catalysts that lower the activation energy of reactions (1)\n• Specific enzymes (e.g. lipase, protease, amylase) hydrolyse large insoluble food molecules into smaller soluble molecules (1)\n• These smaller molecules (e.g. amino acids, fatty acids, glucose) can be absorbed across the intestinal wall into the blood (1)"
      },
      {
        "q": "A couple are both carriers for cystic fibrosis. They already have one unaffected child. Calculate the probability that their next child will have cystic fibrosis.",
        "marks": 2,
        "markScheme": "• Each pregnancy is an independent event (1)\n• Probability = 1/4 / 25% (the previous child does not affect the probability for the next) (1)"
      },
      {
        "q": "Compare amniocentesis and chorionic villus sampling (CVS) as methods of prenatal testing for cystic fibrosis.",
        "marks": 4,
        "markScheme": "• Both obtain fetal cells / fetal DNA that can be tested for the CF alleles (1)\n• Amniocentesis: a needle is passed through the abdominal wall to remove a sample of amniotic fluid containing fetal cells, usually at about 15–20 weeks (1)\n• CVS: a small sample of the chorionic villi (part of the placenta) is removed through the cervix or abdominal wall, at about 10–13 weeks, so results are available earlier (1)\n• Both carry a small risk of miscarriage (about 0.5–1%) (1)"
      },
      {
        "q": "A prenatal test shows that a fetus has cystic fibrosis. Describe how three different ethical viewpoints could be applied to the parents' decision about whether to continue the pregnancy.",
        "marks": 3,
        "markScheme": "• Utilitarian: weigh up the overall balance of benefit and harm, e.g. the quality of life of the child and the effect on the family and society (1)\n• Rights / duty-based (deontological): the fetus may be considered to have a right to life, so termination is wrong whatever the consequences (1)\n• Autonomy / informed choice: the parents have the right to make their own informed decision, supported by genetic counselling without pressure (1)"
      },
      {
        "q": "Draw and label a diagram showing the structure of a section of DNA, including at least two nucleotides on each strand.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Two antiparallel strands shown with sugar-phosphate backbone on outside (1)\n• Correct complementary base pairs (A–T and C–G) shown between the strands (1)\n• Hydrogen bonds between bases indicated (two between A–T, three between C–G) (1)\n• Deoxyribose sugar, phosphate group, and bases correctly labelled on at least one nucleotide (1)"
      },
      {
        "q": "Explain why membrane-bound receptors are important for cell signalling.",
        "marks": 3,
        "markScheme": "• Receptor proteins on the cell surface have a specific complementary shape to signalling molecules / ligands (1)\n• When a signalling molecule binds, it causes a conformational change in the receptor (1)\n• This triggers a response inside the cell (e.g. opening of ion channels, activation of enzymes, gene expression changes) (1)"
      },
      {
        "q": "State the roles of the start codon and the stop codon in translation.",
        "marks": 2,
        "markScheme": "• Start codon (AUG): the point at which translation begins / codes for the first amino acid (methionine) (1)\n• Stop codon: does not code for an amino acid, so translation ends and the polypeptide is released from the ribosome (1)"
      },
      {
        "q": "Describe the process of exocytosis.",
        "marks": 3,
        "markScheme": "• Substances to be secreted (e.g. mucus glycoproteins or enzymes) are packaged into vesicles, e.g. by the Golgi apparatus (1)\n• The vesicles move to the cell surface membrane and their membrane fuses with it (1)\n• The contents are released outside the cell; the process requires energy from ATP (1)"
      },
      {
        "q": "Explain the ethical issues surrounding preimplantation genetic diagnosis (PGD).",
        "marks": 4,
        "markScheme": "• PGD involves testing embryos created by IVF for genetic conditions before implantation (1)\n• Allows selection of unaffected embryos, reducing the chance of a child inheriting a genetic condition (1)\n• Ethical concerns: destruction of embryos carrying the condition raises questions about the moral status of embryos (1)\n• Could lead to \"designer babies\" / selection for non-medical traits; raises issues of equality and access (1)"
      },
      {
        "q": "Explain the role of ATP in active transport.",
        "marks": 3,
        "markScheme": "• The substance / ion binds to a specific carrier protein in the membrane (1)\n• ATP is hydrolysed to ADP and phosphate, releasing energy / the phosphate attaches to the carrier protein (1)\n• This causes the carrier protein to change shape, moving the substance across the membrane against its concentration gradient; ATP is the immediate source of energy (1)"
      },
      {
        "q": "Outline the role of mRNA, tRNA and ribosomes in protein synthesis.",
        "marks": 3,
        "markScheme": "• mRNA carries the genetic code from the DNA in the nucleus to the ribosome in the cytoplasm (1)\n• Ribosomes read the mRNA codons and provide the site where amino acids are assembled into polypeptides (1)\n• tRNA molecules carry specific amino acids to the ribosome, matching their anticodon to the mRNA codon (1)"
      },
      {
        "q": "Describe how to investigate the effect of substrate concentration on enzyme activity using catalase and hydrogen peroxide.",
        "marks": 4,
        "markScheme": "• Prepare a range of hydrogen peroxide concentrations (e.g. using serial dilution) (1)\n• Add a fixed amount of catalase (e.g. potato extract) to each concentration and collect the oxygen gas produced using a gas syringe or inverted measuring cylinder (1)\n• Measure the volume of gas produced at fixed time intervals (1)\n• Control variables: temperature, pH, volume of enzyme, and total volume of reaction mixture (1)"
      },
      {
        "q": "Explain how the structure of the phospholipid bilayer acts as a barrier to most water-soluble substances.",
        "marks": 2,
        "markScheme": "• The hydrophobic fatty acid tails of the phospholipids form the interior of the bilayer (1)\n• Polar / charged / water-soluble molecules cannot pass through the hydrophobic core, so require transport proteins (1)"
      }
    ]
  },
  "S3": {
    "name": "Voice of the Genome",
    "questions": [
      {
        "q": "State what is meant by the cell cycle.",
        "marks": 1,
        "markScheme": "• The sequence of events that takes place in a cell, resulting in cell division and the production of two daughter cells (1)"
      },
      {
        "q": "Describe the stages of the cell cycle.",
        "marks": 3,
        "markScheme": "• Interphase: the cell grows, replicates its DNA, and prepares for division (G1, S, G2 phases) (1)\n• Mitosis: the nucleus divides into two genetically identical nuclei (prophase, metaphase, anaphase, telophase) (1)\n• Cytokinesis: the cytoplasm divides, producing two separate daughter cells (1)"
      },
      {
        "q": "Describe the events that occur during the S phase of interphase.",
        "marks": 2,
        "markScheme": "• DNA replication occurs / each chromosome is copied to form two identical sister chromatids (1)\n• Sister chromatids are joined at the centromere (1)"
      },
      {
        "q": "Describe the events of mitosis in the correct order.",
        "marks": 4,
        "markScheme": "• Prophase: chromosomes condense and become visible, nuclear envelope breaks down, spindle fibres form from centrioles (1)\n• Metaphase: chromosomes line up at the cell equator / metaphase plate, attached to spindle fibres at their centromeres (1)\n• Anaphase: centromeres divide and sister chromatids are pulled to opposite poles by shortening spindle fibres (1)\n• Telophase: chromatids reach the poles, nuclear envelopes reform around each set, chromosomes decondense (1)"
      },
      {
        "q": "Explain the importance of mitosis.",
        "marks": 3,
        "markScheme": "• Produces two genetically identical daughter cells for growth and repair of tissues (1)\n• Maintains the diploid chromosome number (1)\n• Ensures genetic consistency / all body cells have the same genome (1)"
      },
      {
        "q": "Compare mitosis and meiosis.",
        "marks": 6,
        "markScheme": "• Mitosis produces 2 daughter cells; meiosis produces 4 (1)\n• Mitosis produces diploid cells; meiosis produces haploid cells (1)\n• Mitosis produces genetically identical cells; meiosis produces genetically different cells (1)\n• Mitosis involves one division; meiosis involves two divisions (meiosis I and II) (1)\n• Crossing over occurs in meiosis (prophase I) but not in mitosis (1)\n• Independent assortment of homologous pairs occurs in meiosis I but not in mitosis (1)"
      },
      {
        "q": "Explain how meiosis produces genetic variation.",
        "marks": 4,
        "markScheme": "• Crossing over in prophase I: homologous chromosomes exchange genetic material at chiasmata, producing recombinant chromatids (1)\n• Independent assortment in metaphase I: homologous pairs line up randomly at the equator, so different combinations of maternal and paternal chromosomes are distributed to daughter cells (1)\n• Random fertilisation: any sperm can fuse with any egg, combining two unique sets of chromosomes (1)\n• These processes together produce offspring with unique combinations of alleles (1)"
      },
      {
        "q": "State what is meant by the term stem cell.",
        "marks": 2,
        "markScheme": "• An undifferentiated cell (1)\n• That can divide to produce more stem cells (self-renew) and differentiate into specialised cell types (1)"
      },
      {
        "q": "Explain the difference between totipotent, pluripotent and multipotent stem cells.",
        "marks": 3,
        "markScheme": "• Totipotent cells can differentiate into any cell type, including extra-embryonic tissues (e.g. placenta); found in early embryo up to 8-cell stage (1)\n• Pluripotent cells can differentiate into any cell type of the body but not extra-embryonic tissues; found in the inner cell mass of the blastocyst (1)\n• Multipotent cells can only differentiate into a limited range of cell types within a particular tissue; found in adults, e.g. haematopoietic stem cells (1)"
      },
      {
        "q": "Explain how cells become specialised through differentiation.",
        "marks": 3,
        "markScheme": "• All body cells contain the same genome / same DNA (1)\n• During differentiation, specific genes are switched on / expressed while others are switched off (1)\n• This produces specific proteins that give the cell its specialised structure and function (1)"
      },
      {
        "q": "Describe the role of transcription factors in gene expression.",
        "marks": 3,
        "markScheme": "• Transcription factors are proteins that bind to specific DNA sequences near the promoter region of a gene (1)\n• They can activate transcription by helping RNA polymerase bind to the promoter (activators) (1)\n• Or they can repress transcription by blocking RNA polymerase binding (repressors) (1)"
      },
      {
        "q": "Explain what is meant by epigenetics.",
        "marks": 3,
        "markScheme": "• Epigenetics refers to heritable changes in gene expression that do not involve changes to the DNA base sequence (1)\n• These changes are caused by modifications such as DNA methylation (adding methyl groups to DNA) or histone modification (1)\n• These modifications can switch genes on or off and can be influenced by environmental factors (1)"
      },
      {
        "q": "Explain how DNA methylation can silence a gene.",
        "marks": 3,
        "markScheme": "• Methyl groups are added to cytosine bases in the DNA, often at CpG islands near promoter regions (1)\n• Methylation prevents transcription factors / RNA polymerase from binding to the promoter (1)\n• The gene is not transcribed and the protein it codes for is not produced (1)"
      },
      {
        "q": "Explain how histone modification affects gene expression.",
        "marks": 3,
        "markScheme": "• DNA is wrapped around histone proteins to form chromatin (1)\n• Acetylation of histones loosens the DNA-histone association, making DNA more accessible to transcription factors / increasing transcription (1)\n• Deacetylation / methylation of histones tightens the DNA-histone association, making DNA less accessible / decreasing transcription (1)"
      },
      {
        "q": "Describe the process of fertilisation in mammals.",
        "marks": 4,
        "markScheme": "• Acrosome reaction: when the sperm reaches the zona pellucida, the acrosome releases digestive enzymes (1)\n• The enzymes digest the zona pellucida, and the sperm cell membrane fuses with the egg cell membrane (1)\n• Cortical reaction: cortical granules release their contents, so the zona pellucida thickens / hardens, preventing further sperm entering / polyspermy (1)\n• The sperm nucleus enters the egg and fuses with the egg nucleus, forming a diploid zygote (1)"
      },
      {
        "q": "Explain how a mammalian egg cell is specialised for its function.",
        "marks": 3,
        "markScheme": "• Large cytoplasm containing food stores / nutrients for the early embryo (1)\n• Zona pellucida: glycoprotein layer that sperm must penetrate, which hardens after fertilisation to prevent polyspermy (1)\n• Cortical granules beneath the cell membrane release their contents in the cortical reaction / haploid nucleus so the diploid number is restored at fertilisation (1)"
      },
      {
        "q": "Draw and label a diagram showing the stages of mitosis in an animal cell.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Prophase: condensed chromosomes visible, spindle forming, no nuclear envelope (1)\n• Metaphase: chromosomes aligned at the equator, attached to spindle fibres at centromeres (1)\n• Anaphase: sister chromatids separating and moving to opposite poles (1)\n• Telophase: two groups of chromosomes at poles, nuclear envelopes reforming, cell beginning to divide (1)"
      },
      {
        "q": "Suggest how environmental factors can influence phenotype through epigenetic mechanisms.",
        "marks": 3,
        "markScheme": "• Diet, stress, toxins, or temperature can cause epigenetic changes such as DNA methylation or histone modification (1)\n• These changes alter gene expression without changing the DNA sequence (1)\n• Example: identical twins may develop different phenotypes due to different environmental exposures causing different epigenetic patterns (1)"
      },
      {
        "q": "Evaluate the use of embryonic stem cells in medical research and treatment.",
        "marks": 6,
        "markScheme": "• Advantage: pluripotent, so can differentiate into almost any cell type for treating diseases such as Parkinson’s, diabetes, spinal cord injuries (1)\n• Advantage: could provide a source of replacement cells/tissues, reducing the need for organ transplants (1)\n• Advantage: can be used to study developmental biology and test drug efficacy (1)\n• Disadvantage: destruction of embryos raises ethical concerns about the moral status of the embryo (1)\n• Disadvantage: risk of immune rejection if donor cells are not matched to the patient (1)\n• Disadvantage: risk of uncontrolled cell division / tumour formation if differentiation is not properly controlled (1)"
      },
      {
        "q": "Explain the debate surrounding nature vs nurture in determining phenotype.",
        "marks": 4,
        "markScheme": "• Nature: genes inherited from parents determine many characteristics (e.g. eye colour, blood group) (1)\n• Nurture: environmental factors (diet, lifestyle, experience) also influence phenotype (1)\n• Many characteristics are influenced by both (e.g. height has a genetic component but is also affected by nutrition) (1)\n• Epigenetic mechanisms provide a link between nature and nurture, showing how environment can alter gene expression without changing DNA (1)"
      },
      {
        "q": "Explain why cells in G0 phase do not divide.",
        "marks": 2,
        "markScheme": "• G0 is a quiescent / resting phase where the cell has exited the cell cycle (1)\n• The cell carries out its normal functions but does not replicate its DNA or prepare for division; some cells (e.g. neurones) remain in G0 permanently (1)"
      },
      {
        "q": "Describe the role of the rough endoplasmic reticulum and the Golgi apparatus in the production and secretion of an extracellular enzyme.",
        "marks": 3,
        "markScheme": "• Ribosomes on the rER synthesise the protein, which enters the rER lumen, where it is folded and transported (1)\n• Vesicles bud off the rER and fuse with the Golgi apparatus, where the protein is modified, e.g. carbohydrate added (1)\n• The Golgi packages the enzyme into vesicles that move to and fuse with the cell surface membrane, releasing it by exocytosis (1)"
      },
      {
        "q": "State the function of two of the following structures in a prokaryotic cell: capsule, pili, flagellum, plasmid.",
        "marks": 2,
        "markScheme": "• Any two from:\n• Capsule: protects the cell / helps prevent drying out / helps it avoid being engulfed by phagocytes (1)\n• Pili: attach the cell to surfaces or other cells / used to transfer DNA between cells (1)\n• Flagellum: rotates to move the cell (1)\n• Plasmid: small circular DNA carrying extra genes, e.g. for antibiotic resistance (1)"
      },
      {
        "q": "Explain what is meant by linked genes, and explain why linked genes are not always inherited together.",
        "marks": 3,
        "markScheme": "• Linked genes are located on the same chromosome (1)\n• So they tend to be inherited together / do not assort independently in meiosis (1)\n• Crossing over between chromatids in meiosis can separate the alleles, producing recombinant gametes; the further apart the loci, the more likely this is (1)"
      },
      {
        "q": "Describe how to use a light microscope to observe the stages of mitosis in a root tip squash.",
        "marks": 4,
        "markScheme": "• Cut 1–2 cm of root tip and place in warm hydrochloric acid to separate cells / break down middle lamellae (1)\n• Place on a microscope slide, add a stain (e.g. acetic orcein / toluidine blue) to make chromosomes visible (1)\n• Squash the root tip gently with a coverslip to spread cells into a single layer (1)\n• Observe under the microscope and identify cells at different stages of mitosis (1)"
      },
      {
        "q": "Calculate the mitotic index if 24 out of 120 cells observed are undergoing mitosis.",
        "marks": 2,
        "markScheme": "• Mitotic index = number of cells in mitosis / total number of cells (1)\n• = 24 / 120 = 0.20 / 20% (1)"
      },
      {
        "q": "Explain why meiosis is necessary for sexual reproduction.",
        "marks": 3,
        "markScheme": "• Meiosis produces haploid gametes (n) from diploid cells (2n) (1)\n• When two haploid gametes fuse at fertilisation, the diploid number is restored in the zygote (1)\n• Without meiosis, chromosome number would double with each generation (1)"
      },
      {
        "q": "Describe the process of differentiation in a zygote developing into a multicellular organism.",
        "marks": 3,
        "markScheme": "• The zygote divides by mitosis, initially producing identical cells (1)\n• As development proceeds, cells begin to express different genes in response to signalling molecules / positional information (1)\n• This leads to different cell types with specialised structures and functions (e.g. neurones, muscle cells, epithelial cells) (1)"
      },
      {
        "q": "Draw a labelled diagram showing crossing over during meiosis I.",
        "marks": 3,
        "diagram": true,
        "markScheme": "• Homologous pair of chromosomes shown synapsed / as a bivalent (1)\n• Chiasma / point of crossover shown where non-sister chromatids exchange segments (1)\n• Resulting recombinant chromatids correctly shown with exchanged sections (1)"
      },
      {
        "q": "Explain why adult stem cells are more limited in their use than embryonic stem cells.",
        "marks": 2,
        "markScheme": "• Adult stem cells are multipotent, meaning they can only differentiate into a limited range of cell types within their tissue of origin (1)\n• Embryonic stem cells are pluripotent, so can become almost any cell type, making them more versatile for medical applications (1)"
      },
      {
        "q": "Haemophilia is caused by a recessive allele on the X chromosome. Explain why haemophilia is more common in males than in females.",
        "marks": 3,
        "markScheme": "• The gene is sex-linked / carried on the X chromosome, with no corresponding locus on the Y chromosome (1)\n• Males (XY) have only one X chromosome, so a single recessive allele is expressed / there is no second allele to mask it (1)\n• Females (XX) must inherit two recessive alleles to have the condition, which is less likely; heterozygous females are carriers (1)"
      },
      {
        "q": "Explain what is meant by the term genome.",
        "marks": 1,
        "markScheme": "• The entire set of DNA / genetic information in an organism, including all genes and non-coding sequences (1)"
      },
      {
        "q": "State why all cells in an organism contain the same genes but have different structures and functions.",
        "marks": 2,
        "markScheme": "• All cells arise from the same zygote by mitosis, so they have identical DNA (1)\n• Different genes are expressed in different cell types due to differential gene expression / regulation (1)"
      },
      {
        "q": "Explain how induced pluripotent stem cells (iPS cells) are produced and why they are significant.",
        "marks": 4,
        "markScheme": "• Adult differentiated cells (e.g. skin cells) are reprogrammed by introducing specific transcription factors / genes (1)\n• These factors reset the gene expression pattern, returning the cell to a pluripotent state (1)\n• iPS cells can differentiate into many cell types, similar to embryonic stem cells (1)\n• They are significant because they avoid the ethical issues of using embryos and can be patient-specific, reducing immune rejection (1)"
      },
      {
        "q": "Describe how the lac operon is regulated in bacteria.",
        "marks": 4,
        "markScheme": "• In the absence of lactose, a repressor protein binds to the operator region, blocking RNA polymerase from transcribing the structural genes (1)\n• When lactose is present, it binds to the repressor and changes its shape so it can no longer bind the operator (1)\n• RNA polymerase can now transcribe the structural genes for lactose metabolism (1)\n• This is an example of gene regulation in prokaryotes by induction (1)"
      },
      {
        "q": "Explain what is meant by continuous variation and how polygenic inheritance can give rise to it.",
        "marks": 2,
        "markScheme": "• Continuous variation: a range of phenotypes between two extremes with no distinct categories, e.g. height / mass (1)\n• Many genes at different loci each contribute to the phenotype, and the environment also has an effect, giving many intermediate phenotypes (1)"
      },
      {
        "q": "Describe how X-inactivation demonstrates epigenetic gene regulation.",
        "marks": 3,
        "markScheme": "• In female mammals, one X chromosome in each cell is randomly inactivated early in development (1)\n• The inactivated X is heavily methylated and condensed into a Barr body, preventing gene expression (1)\n• This is an epigenetic mechanism because the DNA sequence is unchanged but gene expression is altered; the pattern is maintained through cell divisions (1)"
      },
      {
        "q": "In a root tip squash, a student counted 18 cells in mitosis out of 150 cells in one field of view. Calculate the mitotic index and suggest one reason why this result may not be representative of the root tip.",
        "marks": 3,
        "markScheme": "• Mitotic index = number of cells in mitosis / total number of cells = 18 / 150 (1)\n• = 0.12 (1)\n• Only one field of view / one region / one root tip was counted, so count several fields of view and several root tips and calculate a mean (1)"
      },
      {
        "q": "Explain why organisms produced by cloning are genetically identical but may still show phenotypic variation.",
        "marks": 2,
        "markScheme": "• Clones have identical DNA / genotype (1)\n• Environmental factors and epigenetic differences (e.g. different methylation patterns) can cause differences in gene expression and therefore phenotype (1)"
      },
      {
        "q": "Using named examples from plants, explain how cells are organised into tissues, tissues into organs and organs into systems.",
        "marks": 3,
        "markScheme": "• A tissue is a group of similar cells working together to perform a function, e.g. xylem / palisade mesophyll (1)\n• An organ is made of several tissues working together, e.g. a leaf / stem / root (1)\n• An organ system is a group of organs working together, e.g. the shoot system / root system (1)"
      }
    ]
  },
  "S4": {
    "name": "Biodiversity and Natural Resources",
    "questions": [
      {
        "q": "State what is meant by the term biodiversity.",
        "marks": 1,
        "markScheme": "• The variety of living organisms in an area, including diversity within species, between species, and of ecosystems (1)"
      },
      {
        "q": "State the formula used to calculate the index of diversity (D) of a habitat.",
        "marks": 1,
        "markScheme": "• D = N(N − 1) / Σn(n − 1), where N = total number of organisms of all species and n = number of organisms of each species (1)"
      },
      {
        "q": "Calculate the index of diversity (D) for a habitat with 30 daisies, 20 buttercups and 50 grasses (N = 100), using D = N(N − 1) / Σn(n − 1).",
        "marks": 3,
        "markScheme": "• n(n − 1): daisies = 30 × 29 = 870; buttercups = 20 × 19 = 380; grasses = 50 × 49 = 2450 (1)\n• Σn(n − 1) = 870 + 380 + 2450 = 3700 and N(N − 1) = 100 × 99 = 9900 (1)\n• D = 9900 / 3700 = 2.68 (1)"
      },
      {
        "q": "Explain what a high value of the index of diversity (D) indicates about a habitat.",
        "marks": 2,
        "markScheme": "• A high value of D indicates high biodiversity (1)\n• Many species are present and the individuals are spread fairly evenly among them / no single species dominates; the lowest possible value, 1, means only one species is present (1)"
      },
      {
        "q": "Describe how to use a quadrat to estimate the abundance of plant species in a field.",
        "marks": 4,
        "markScheme": "• Place quadrats randomly in the area (e.g. using random number coordinates) (1)\n• Count the number of individuals of each species within each quadrat, or estimate percentage cover (1)\n• Repeat with multiple quadrats (at least 10) to obtain a representative sample (1)\n• Calculate mean number per quadrat and scale up: mean count × (total area / quadrat area) to estimate total abundance (1)"
      },
      {
        "q": "Explain the difference between species richness and species evenness.",
        "marks": 2,
        "markScheme": "• Species richness is the number of different species present in an area (1)\n• Species evenness is the relative abundance of each species / how evenly individuals are distributed among the different species (1)"
      },
      {
        "q": "Describe the hierarchical classification system used in taxonomy.",
        "marks": 3,
        "markScheme": "• Organisms are grouped into increasingly specific categories: Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species (1)\n• Organisms within the same group share more characteristics than those in different groups (1)\n• The binomial naming system gives each species a unique two-part name (genus + species) (1)"
      },
      {
        "q": "Explain why classification systems are updated as new evidence becomes available.",
        "marks": 3,
        "markScheme": "• Advances in molecular biology / DNA sequencing reveal evolutionary relationships not apparent from morphology alone (1)\n• Species previously grouped together by appearance may be reclassified if their DNA sequences show they are not closely related (1)\n• New species are discovered, and existing classifications need to accommodate them (1)"
      },
      {
        "q": "Describe the structure of a typical plant cell.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Cellulose cell wall outside the cell membrane providing structural support (1)\n• Large permanent vacuole containing cell sap (water, sugars, pigments) maintaining turgor (1)\n• Chloroplasts containing chlorophyll for photosynthesis (1)\n• Nucleus, mitochondria, ribosomes, endoplasmic reticulum, and cell membrane also present (1)"
      },
      {
        "q": "Describe the structure of cellulose and explain how it is suited to its function.",
        "marks": 4,
        "markScheme": "• Cellulose is a polysaccharide made of beta-glucose monomers linked by 1,4-glycosidic bonds (1)\n• Every other glucose molecule is inverted / rotated 180°, forming straight unbranched chains (1)\n• Chains are held together by hydrogen bonds between adjacent chains, forming microfibrils (1)\n• Microfibrils provide high tensile strength, making cellulose ideal for cell walls (1)"
      },
      {
        "q": "Compare the structures of starch and cellulose.",
        "marks": 4,
        "markScheme": "• Starch is made of alpha-glucose; cellulose is made of beta-glucose (1)\n• Starch (amylose) forms helical chains; cellulose forms straight chains (1)\n• Starch is a storage polysaccharide; cellulose is a structural polysaccharide (1)\n• Cellulose has hydrogen bonds between parallel chains forming microfibrils; starch does not form microfibrils (1)"
      },
      {
        "q": "Explain why starch is a good storage molecule.",
        "marks": 3,
        "markScheme": "• Insoluble, so does not affect water potential / osmosis in cells (1)\n• Compact / coiled structure allows large amounts to be stored in a small space (1)\n• Easily hydrolysed to release alpha-glucose for respiration when needed (1)"
      },
      {
        "q": "Describe how plant fibres are used by humans.",
        "marks": 3,
        "markScheme": "• Paper is made from wood pulp (cellulose fibres from trees) (1)\n• Rope and textiles can be made from plant fibres such as hemp, flax, or cotton (1)\n• Building materials (e.g. straw bales, bamboo) use plant fibres for structural support (1)"
      },
      {
        "q": "Explain the importance of maintaining biodiversity.",
        "marks": 4,
        "markScheme": "• Biodiversity provides ecosystem services such as pollination, water purification, and nutrient cycling (1)\n• Greater biodiversity increases ecosystem stability / resilience to change (1)\n• Potential sources of new medicines, food crops, and industrial materials may be lost if species go extinct (1)\n• Ethical / aesthetic reasons: many people believe all species have a right to exist / biodiversity has intrinsic value (1)"
      },
      {
        "q": "Describe how deforestation reduces biodiversity.",
        "marks": 3,
        "markScheme": "• Habitat destruction removes the living space and food sources for many species (1)\n• Specialist species that depend on the forest habitat may become extinct (1)\n• Fragmentation of remaining habitat isolates populations, reducing gene flow and genetic diversity (1)"
      },
      {
        "q": "Explain what is meant by sustainability and why it is important for natural resources.",
        "marks": 3,
        "markScheme": "• Sustainability means using resources at a rate that does not deplete them / meets the needs of the present without compromising future generations (1)\n• Natural resources such as timber, fish stocks, and freshwater are finite and can be exhausted if overexploited (1)\n• Sustainable management ensures long-term availability of resources and maintains ecosystem function (1)"
      },
      {
        "q": "Explain how using plant-based products instead of oil-based plastics may contribute to sustainability.",
        "marks": 3,
        "markScheme": "• Plants are a renewable resource that can be regrown, whereas oil is finite / non-renewable (1)\n• Plant-based products, e.g. starch bioplastics, are biodegradable, so less plastic waste accumulates in landfill or the environment (1)\n• Plants absorb carbon dioxide as they grow, so less fossil fuel is used and less net carbon dioxide is added to the atmosphere (1)"
      },
      {
        "q": "Explain the role of zoos and seed banks in conservation.",
        "marks": 4,
        "markScheme": "• Zoos maintain captive breeding programmes for endangered species, maintaining genetic diversity (1)\n• Zoos also carry out education and research that supports conservation efforts (1)\n• Seed banks store seeds of plant species under controlled conditions (low temperature, low humidity) to preserve genetic material (1)\n• Both provide insurance against extinction in the wild and can be used for reintroduction or habitat restoration programmes (1)"
      },
      {
        "q": "Describe how the tensile strength of plant fibres can be determined.",
        "marks": 3,
        "markScheme": "• Extract fibres from the plant stem (e.g. by retting / soaking and peeling) and cut them to the same length (1)\n• Clamp one end of a fibre and hang masses from the other end, adding masses one at a time until the fibre breaks; record the mass at breaking (1)\n• Repeat with several fibres and calculate a mean; control variables such as fibre length, the plant species and the age of the plant (1)"
      },
      {
        "q": "Explain the difference between in situ and ex situ conservation.",
        "marks": 2,
        "markScheme": "• In situ conservation protects species in their natural habitat (e.g. nature reserves, marine protected areas) (1)\n• Ex situ conservation protects species outside their natural habitat (e.g. zoos, botanic gardens, seed banks) (1)"
      },
      {
        "q": "Describe how drug testing has developed from William Withering's digitalis soup to contemporary protocols.",
        "marks": 5,
        "markScheme": "• Withering identified foxglove (digitalis) as the active ingredient in a herbal remedy used to treat dropsy (1)\n• He tested different doses on patients by trial and error, with no control group and no standardised procedure (1)\n• Phase 1: the drug is tested on a small number of healthy volunteers for safety, side effects and dosage (1)\n• Phase 2: the drug is tested on a small group of patients to check that it works and to find the best dose (1)\n• Phase 3: large numbers of patients in a randomised double-blind trial, compared with a placebo or an existing treatment (1)"
      },
      {
        "q": "Describe the structure of starch, including amylose and amylopectin.",
        "marks": 3,
        "markScheme": "• Starch is a mixture of amylose and amylopectin, both made from alpha-glucose (1)\n• Amylose is an unbranched helix with 1,4-glycosidic bonds (1)\n• Amylopectin is branched with 1,4-glycosidic bonds and 1,6-glycosidic bonds at branch points (1)"
      },
      {
        "q": "State two conditions required for the growth of bacteria.",
        "marks": 2,
        "markScheme": "• Any two from:\n• A source of nutrients, e.g. a carbon source such as glucose and a nitrogen source (1)\n• A suitable temperature / around the optimum temperature for their enzymes (1)\n• A suitable pH (1)\n• Oxygen for aerobic bacteria / absence of oxygen for obligate anaerobes (1)\n• Water / moisture (1)"
      },
      {
        "q": "Draw a labelled diagram showing the structure of a cellulose microfibril.",
        "marks": 3,
        "diagram": true,
        "markScheme": "• Individual beta-glucose chains shown as straight, parallel strands (1)\n• Hydrogen bonds between adjacent chains shown / indicated (1)\n• Multiple chains grouped together to form a microfibril, labelled correctly (1)"
      },
      {
        "q": "Describe how to investigate the antimicrobial properties of a plant extract, including the aseptic techniques used.",
        "marks": 4,
        "markScheme": "• Crush the plant material (e.g. garlic) with ethanol to extract the antimicrobial substances, then filter (1)\n• Aseptic technique: disinfect the bench, work near a Bunsen flame, sterilise the spreader / loop, and lift the Petri dish lid only slightly (1)\n• Soak sterile paper discs in the extract, with a control disc soaked in ethanol only; let the ethanol evaporate and place the discs on agar spread with bacteria (1)\n• Tape the lid (not fully sealed), incubate at 25 °C, then measure the diameter of the clear zone of inhibition around each disc (1)"
      },
      {
        "q": "Describe how a chi-squared test can be used to test whether observed species distributions differ from expected.",
        "marks": 3,
        "markScheme": "• Calculate expected frequencies based on the null hypothesis (e.g. even distribution) (1)\n• Use the formula χ² = Σ (O – E)² / E for each category (1)\n• Compare the calculated χ² value with the critical value at p = 0.05 and the appropriate degrees of freedom; if χ² exceeds the critical value, reject the null hypothesis (1)"
      },
      {
        "q": "Explain why genetic diversity within a species is important for its survival.",
        "marks": 3,
        "markScheme": "• Genetic diversity provides a range of alleles within the population (1)\n• If environmental conditions change, some individuals may have alleles that confer a survival advantage (1)\n• This allows the population to adapt through natural selection, reducing the risk of extinction (1)"
      },
      {
        "q": "Describe how habitat destruction and climate change threaten biodiversity.",
        "marks": 4,
        "markScheme": "• Habitat destruction removes the environment species depend on for food, shelter and reproduction (1)\n• Climate change alters temperature and rainfall patterns, affecting species distribution and food availability (1)\n• Species unable to migrate or adapt quickly enough may decline or go extinct (1)\n• Both factors can interact: climate change may make fragmented habitats even less suitable for resident species (1)"
      },
      {
        "q": "Evaluate the use of seed banks in the conservation of endangered plant species.",
        "marks": 3,
        "markScheme": "• Advantage: large numbers of seeds can be stored in a small space at low temperature and humidity, conserving genetic diversity (1)\n• Advantage: stored seeds can be used for scientific research and to reintroduce species / restore habitats (1)\n• Disadvantage: seeds must be germinated regularly to test viability and grown to collect fresh seed; some seeds cannot be dried or frozen, and stored seeds do not adapt to changes in the environment (1)"
      },
      {
        "q": "Explain why endemic species on islands are particularly vulnerable to extinction.",
        "marks": 3,
        "markScheme": "• Island species often have small population sizes and limited geographical range (1)\n• They may have evolved in the absence of predators and therefore lack defences against introduced species (1)\n• Habitat destruction on a small island can eliminate a large proportion of the species’ total habitat (1)"
      },
      {
        "q": "Describe how to investigate the effect of magnesium ion deficiency on the growth of plants.",
        "marks": 4,
        "markScheme": "• Grow seedlings in a complete culture solution and in a solution lacking only magnesium ions (1)\n• Control variables: the same species and age of seedling, light intensity, temperature and volume of solution (1)\n• Cover the containers to exclude light and prevent algal growth, and aerate / top up the solutions (1)\n• Over several weeks record growth (e.g. height, number of leaves, dry mass) and leaf colour, and compare with the complete-solution control (1)"
      },
      {
        "q": "Explain why plants need nitrate ions and calcium ions.",
        "marks": 3,
        "markScheme": "• Nitrate ions provide nitrogen to make amino acids / proteins (1)\n• Nitrate ions are also needed to make nucleic acids / DNA / chlorophyll (1)\n• Calcium ions form calcium pectate in the middle lamella, holding adjacent plant cells together (1)"
      },
      {
        "q": "Compare the ultrastructure of plant cells with that of animal cells.",
        "marks": 4,
        "markScheme": "• Both have a nucleus, mitochondria, ribosomes, endoplasmic reticulum and Golgi apparatus (1)\n• Plant cells have a cellulose cell wall, with a middle lamella, plasmodesmata and pits; animal cells have no cell wall (1)\n• Plant cells have chloroplasts and amyloplasts; animal cells do not (1)\n• Plant cells have a large permanent vacuole surrounded by a tonoplast; animal cells have centrioles, which most plant cells lack (1)"
      },
      {
        "q": "Explain why scientists use the three-domain system of classification.",
        "marks": 2,
        "markScheme": "• Molecular evidence (ribosomal RNA sequences) shows that organisms fall into three distinct evolutionary groups: Bacteria, Archaea, and Eukarya (1)\n• The previous five-kingdom system grouped Archaea with Bacteria, but molecular data shows they are more different from each other than previously thought (1)"
      },
      {
        "q": "In a population of 250 bighorn sheep, 45 were heterozygous at a particular gene locus. Calculate the heterozygosity index (H).",
        "marks": 2,
        "markScheme": "• H = number of heterozygotes / number of individuals in the population = 45 / 250 (1)\n• H = 0.18 (1)"
      },
      {
        "q": "Draw and label a plan diagram of a transverse section of a dicotyledonous stem to show the positions of the xylem vessels, phloem and sclerenchyma fibres.",
        "marks": 4,
        "markScheme": "• Vascular bundles shown arranged in a ring near the outside of the stem (1)\n• Xylem shown on the inner side of each vascular bundle (1)\n• Phloem shown on the outer side of the xylem in each bundle (1)\n• Sclerenchyma fibres shown as a cap on the outside of the phloem; epidermis, cortex and pith labelled, with no individual cells drawn (1)",
        "diagram": true
      },
      {
        "q": "Describe the role of cellulose in plant cell walls.",
        "marks": 2,
        "markScheme": "• Cellulose microfibrils provide tensile strength to the cell wall, preventing the cell from bursting when turgid (1)\n• The cell wall maintains cell shape and provides structural support for the whole plant (1)"
      },
      {
        "q": "Explain how natural selection can lead to changes in the frequency of alleles in a population.",
        "marks": 4,
        "markScheme": "• Variation exists within a population due to genetic differences / different alleles (1)\n• Individuals with alleles that confer a selective advantage in the current environment are more likely to survive and reproduce (1)\n• These advantageous alleles are passed on to the next generation at a higher frequency (1)\n• Over many generations, the frequency of the advantageous allele increases in the population (1)"
      },
      {
        "q": "Suggest why maintaining genetic diversity in crop plants is important for food security.",
        "marks": 3,
        "markScheme": "• Genetic diversity provides a range of alleles that may confer resistance to new diseases or pests (1)\n• It allows crops to be bred for adaptation to changing environmental conditions (e.g. drought, higher temperatures) (1)\n• Over-reliance on genetically uniform crop varieties increases vulnerability to widespread crop failure (1)"
      },
      {
        "q": "Explain how the arrangement of cellulose microfibrils and secondary thickening give sclerenchyma fibres properties that are exploited by humans.",
        "marks": 3,
        "markScheme": "• Cellulose microfibrils are laid down in layers, with the microfibrils in each layer at an angle to those in the next, forming a mesh (1)\n• This gives the walls high tensile strength / resistance to stretching and breaking (1)\n• Secondary thickening adds extra cellulose layers impregnated with lignin, making the fibres rigid and strong, so they are used for ropes, fabrics and composite materials (1)"
      }
    ]
  },
  "S5": {
    "name": "On the Wild Side",
    "questions": [
      {
        "q": "State the word equation for photosynthesis.",
        "marks": 1,
        "markScheme": "• Carbon dioxide + water → glucose + oxygen (in the presence of light energy) (1)"
      },
      {
        "q": "State where the light-dependent reactions of photosynthesis take place.",
        "marks": 1,
        "markScheme": "• On the thylakoid membranes (of the grana) in the chloroplast (1)"
      },
      {
        "q": "State where the light-independent reactions (Calvin cycle) take place.",
        "marks": 1,
        "markScheme": "• In the stroma of the chloroplast (1)"
      },
      {
        "q": "Describe the light-dependent reactions of photosynthesis.",
        "marks": 5,
        "markScheme": "• Light energy is absorbed by chlorophyll and other photosynthetic pigments (1)\n• Electrons in chlorophyll are excited to a higher energy level and pass along the electron transport chain (1)\n• The energy released is used to pump H⁺ ions across the thylakoid membrane, creating a proton gradient (1)\n• H⁺ ions flow back through ATP synthase, driving the synthesis of ATP by chemiosmosis (1)\n• Water is photolysed (split) to provide replacement electrons, H⁺ ions, and O₂ as a by-product; NADP is reduced to NADPH (1)"
      },
      {
        "q": "Describe the Calvin cycle.",
        "marks": 5,
        "markScheme": "• CO₂ is fixed by combining with ribulose bisphosphate (RuBP, 5C) catalysed by RuBisCO (1)\n• This produces an unstable 6C compound that immediately splits into two molecules of glycerate-3-phosphate (GP, 3C) (1)\n• GP is reduced to glyceraldehyde-3-phosphate (GALP / G3P, 3C) using ATP and NADPH from the light-dependent reactions (1)\n• Some GALP is used to regenerate RuBP using ATP (1)\n• Some GALP is used to synthesise glucose and other organic molecules (1)"
      },
      {
        "q": "Explain the role of RuBisCO in the Calvin cycle.",
        "marks": 2,
        "markScheme": "• RuBisCO is the enzyme that catalyses the fixation of CO₂ by combining it with RuBP (1)\n• This is the first step / carbon fixation step of the Calvin cycle, producing two molecules of GP (1)"
      },
      {
        "q": "Explain how energy is transferred through an ecosystem.",
        "marks": 4,
        "markScheme": "• Producers (plants/autotrophs) convert light energy into chemical energy via photosynthesis (1)\n• Primary consumers obtain energy by eating producers; secondary consumers eat primary consumers, and so on (1)\n• Energy is transferred from one trophic level to the next through feeding (1)\n• Energy is lost at each trophic level through respiration (heat), excretion, and in uneaten parts, so less is available at higher trophic levels (1)"
      },
      {
        "q": "Explain why energy transfer between trophic levels is inefficient.",
        "marks": 3,
        "markScheme": "• Not all biomass is consumed / some parts (roots, bones) are not eaten (1)\n• Not all consumed biomass is assimilated / some is lost in faeces (1)\n• A significant proportion of assimilated energy is lost as heat through respiration (1)"
      },
      {
        "q": "State the equation for net primary productivity (NPP).",
        "marks": 1,
        "markScheme": "• NPP = GPP – R, where GPP is gross primary productivity and R is respiratory losses by the plant (1)"
      },
      {
        "q": "Calculate the net primary productivity if GPP is 20,000 kJ/m²/year and plant respiration uses 12,000 kJ/m²/year.",
        "marks": 2,
        "markScheme": "• NPP = GPP – R = 20,000 – 12,000 (1)\n• = 8,000 kJ/m²/year (1)"
      },
      {
        "q": "Describe the stages of ecological succession.",
        "marks": 4,
        "markScheme": "• Pioneer species (e.g. lichens, mosses) colonise bare/inhospitable substrate first (1)\n• They modify the environment (e.g. weathering rock, adding organic matter) making it more suitable for other species (1)\n• Each seral stage / community is replaced by the next as conditions change, increasing biodiversity and soil depth (1)\n• Eventually a climax community is established, which is stable and self-sustaining (1)"
      },
      {
        "q": "Explain the difference between primary and secondary succession.",
        "marks": 2,
        "markScheme": "• Primary succession occurs on previously uncolonised substrate with no soil (e.g. bare rock, lava, sand dunes) (1)\n• Secondary succession occurs on substrate where a community previously existed but was disturbed (e.g. after fire or clearing); soil and seed bank are already present (1)"
      },
      {
        "q": "Describe the carbon cycle, including the roles of photosynthesis, respiration, and decomposition.",
        "marks": 5,
        "diagram": true,
        "markScheme": "• Photosynthesis removes CO₂ from the atmosphere and incorporates carbon into organic molecules in plants (1)\n• Respiration by all organisms releases CO₂ back into the atmosphere (1)\n• Feeding transfers carbon through food chains from producers to consumers (1)\n• Decomposition by microorganisms breaks down dead organic matter, releasing CO₂ through respiration (1)\n• Combustion of fossil fuels releases stored carbon as CO₂ into the atmosphere (1)"
      },
      {
        "q": "Explain how the burning of fossil fuels contributes to the enhanced greenhouse effect.",
        "marks": 3,
        "markScheme": "• Burning fossil fuels releases CO₂ that was locked away in geological stores (1)\n• Increased atmospheric CO₂ absorbs more infrared radiation re-emitted from the Earth’s surface (1)\n• This traps more heat in the atmosphere, raising global temperatures / enhanced greenhouse effect (1)"
      },
      {
        "q": "Evaluate the evidence for human-caused climate change.",
        "marks": 6,
        "markScheme": "• Ice core data shows a strong correlation between CO₂ levels and global temperature over hundreds of thousands of years (1)\n• Since the Industrial Revolution, atmospheric CO₂ has risen sharply, correlating with increased fossil fuel use (1)\n• Global average temperatures have risen significantly over the last century, consistent with greenhouse gas increases (1)\n• However, natural climate variation (solar activity, volcanic eruptions) also affects temperature (1)\n• The scientific consensus (IPCC) is that human activities are the dominant cause of observed warming since the mid-20th century (1)\n• Some uncertainty remains in climate models, but the weight of evidence strongly supports anthropogenic climate change (1)"
      },
      {
        "q": "Describe the role of the scientific community in validating new evidence that supports the theory of evolution.",
        "marks": 3,
        "markScheme": "• Scientists publish their findings (e.g. genomic or proteomic data) in scientific journals (1)\n• Before publication the work is peer reviewed: other experts in the field check the methods, data and conclusions for validity (1)\n• Findings are presented and discussed at scientific conferences, and other scientists repeat the work to check that the results are reproducible before they are accepted (1)"
      },
      {
        "q": "Explain how sympatric speciation can occur.",
        "marks": 3,
        "markScheme": "• Populations living in the same area become reproductively isolated without a geographical barrier (1)\n• e.g. by ecological isolation (occupying different niches), behavioural isolation or temporal isolation (breeding at different times) (1)\n• Gene flow between the populations is reduced, so different mutations and selection pressures change allele frequencies until they can no longer interbreed to produce fertile offspring (1)"
      },
      {
        "q": "Explain how molecular evidence (DNA and protein comparisons) supports the theory of evolution.",
        "marks": 3,
        "markScheme": "• Closely related species have more similar DNA base sequences / amino acid sequences than distantly related species (1)\n• The degree of difference in sequences is proportional to the time since species diverged from a common ancestor (molecular clock) (1)\n• Universal features such as DNA and the genetic code support common ancestry of all life (1)"
      },
      {
        "q": "Explain the biological consequences of climate change for organisms.",
        "marks": 4,
        "markScheme": "• Changes in distribution: species may shift their range towards the poles or to higher altitudes (1)\n• Changes in phenology: timing of seasonal events (migration, flowering, breeding) may shift (1)\n• Some species may be unable to adapt and face increased risk of extinction (1)\n• Changes in species interactions: mismatches between predators and prey, or pollinators and plants (1)"
      },
      {
        "q": "Calculate the percentage efficiency of energy transfer from primary producers to primary consumers if NPP is 8000 kJ/m²/year and energy in primary consumers is 800 kJ/m²/year.",
        "marks": 2,
        "markScheme": "• Efficiency = (energy available at next trophic level / energy available at previous trophic level) × 100 (1)\n• = (800 / 8000) × 100 = 10% (1)"
      },
      {
        "q": "Describe how the Hill reaction can be used to investigate photosynthesis using isolated chloroplasts.",
        "marks": 4,
        "markScheme": "• Leaves are blended in ice-cold, isotonic buffer, then filtered and centrifuged to obtain a chloroplast suspension (cold slows enzyme activity; isotonic prevents osmotic damage) (1)\n• The chloroplast suspension is mixed with blue DCPIP (1)\n• When illuminated, electrons from the light-dependent reactions reduce the DCPIP, which turns colourless (1)\n• The rate is measured as time to decolourise / change in absorbance with a colorimeter; controls (tube kept in the dark, tube without chloroplasts) show no colour change (1)"
      },
      {
        "q": "Explain why a food chain usually has no more than four or five trophic levels.",
        "marks": 2,
        "markScheme": "• Energy is lost at each trophic level (mainly through respiration as heat) (1)\n• By the fourth or fifth level, there is insufficient energy remaining to support another population / trophic level (1)"
      },
      {
        "q": "Describe how to measure net primary productivity in a terrestrial ecosystem.",
        "marks": 3,
        "markScheme": "• Harvest and dry plant biomass from a known area at the start and end of a time period (1)\n• The increase in dry biomass per unit area per unit time gives an estimate of NPP (1)\n• Alternatively, measure GPP (e.g. using CO₂ uptake) and subtract plant respiration (measured in the dark) (1)"
      },
      {
        "q": "Draw and label a diagram of the Calvin cycle, showing the key molecules involved.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• CO₂ entering and combining with RuBP (5C) shown, catalysed by RuBisCO (1)\n• Formation of GP (3C) shown (1)\n• Reduction of GP to GALP (3C) using ATP and NADPH indicated (1)\n• Regeneration of RuBP from GALP using ATP shown, with some GALP leaving the cycle for glucose synthesis (1)"
      },
      {
        "q": "Explain the role of decomposers in nutrient cycling.",
        "marks": 3,
        "markScheme": "• Decomposers (bacteria and fungi) break down dead organic matter and waste products (1)\n• They secrete extracellular enzymes that digest complex organic molecules into simpler inorganic molecules (1)\n• This releases mineral ions (e.g. nitrates, phosphates) back into the soil, making them available for uptake by plant roots (1)"
      },
      {
        "q": "Explain the greenhouse effect and distinguish it from the enhanced greenhouse effect.",
        "marks": 4,
        "markScheme": "• The natural greenhouse effect: greenhouse gases (CO₂, methane, water vapour) absorb infrared radiation re-emitted from the Earth and re-radiate it back, warming the atmosphere (1)\n• This is a natural process essential for maintaining Earth’s temperature suitable for life (1)\n• The enhanced greenhouse effect: human activities have increased concentrations of greenhouse gases (1)\n• This traps more infrared radiation, causing global temperatures to rise above natural levels (1)"
      },
      {
        "q": "Describe how deforestation affects the carbon cycle.",
        "marks": 3,
        "markScheme": "• Trees are a carbon sink; removing them reduces the amount of CO₂ absorbed from the atmosphere by photosynthesis (1)\n• Burning or decomposition of felled trees releases stored carbon as CO₂ (1)\n• Soil carbon may also be released as decomposition increases when vegetation cover is removed (1)"
      },
      {
        "q": "Explain how the structure of a chloroplast is related to its role in photosynthesis.",
        "marks": 3,
        "markScheme": "• Thylakoid membranes stacked into grana give a large surface area for photosynthetic pigments, electron carriers and ATP synthase (1)\n• The thylakoid space is enclosed, so H⁺ ions can accumulate to form a proton gradient that drives ATP synthesis by chemiosmosis (1)\n• The stroma contains the enzymes of the Calvin cycle (e.g. RuBisCO), next to the thylakoids that supply ATP and reduced NADP (1)"
      },
      {
        "q": "Explain the role of NADP in photosynthesis.",
        "marks": 2,
        "markScheme": "• In the light-dependent reactions, NADP is reduced to NADPH by accepting electrons and H⁺ ions (1)\n• NADPH carries the reducing power to the Calvin cycle, where it is used to reduce GP to GALP (1)"
      },
      {
        "q": "The initial rate of an enzyme-catalysed reaction was 15 au min⁻¹ at 25 °C and 33 au min⁻¹ at 35 °C. Calculate the temperature coefficient (Q10) for this reaction.",
        "marks": 2,
        "markScheme": "• Q10 = rate at (T + 10) °C ÷ rate at T °C (1)\n• = 33 ÷ 15 = 2.2 (1)"
      },
      {
        "q": "Explain how an increase in temperature could affect the development of an organism such as brine shrimp.",
        "marks": 3,
        "markScheme": "• As temperature rises, enzyme and substrate molecules gain kinetic energy, so there are more frequent successful collisions / enzyme-substrate complexes (1)\n• Metabolic reactions are faster, so development / hatch rate increases (1)\n• Above the optimum, bonds (e.g. hydrogen bonds) in the enzyme's tertiary structure break, the active site changes shape and the enzyme denatures, so development slows or stops (1)"
      },
      {
        "q": "Describe how data loggers and sensors can be used to measure abiotic factors in an ecosystem.",
        "marks": 3,
        "markScheme": "• Data loggers connected to sensors can continuously record abiotic factors such as temperature, light intensity, humidity, and soil moisture (1)\n• They record measurements at set time intervals over extended periods (1)\n• Data can be downloaded to a computer for analysis, providing accurate and objective measurements with minimal human error (1)"
      },
      {
        "q": "Draw a labelled diagram showing the flow of energy through a simple food chain, including energy losses.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Producers shown receiving light energy and converting to chemical energy via photosynthesis (1)\n• Energy transfer arrows from producers to primary consumers to secondary consumers (1)\n• Energy losses at each trophic level labelled: respiration (heat), faeces, uneaten biomass (1)\n• Decomposers shown receiving energy from dead organisms and waste at all trophic levels (1)"
      },
      {
        "q": "Explain how natural selection leads to adaptation of populations to their environment.",
        "marks": 4,
        "markScheme": "• Genetic variation exists in a population due to mutations and sexual reproduction (1)\n• Environmental pressures (predation, disease, competition) create a selection pressure (1)\n• Organisms with advantageous phenotypes are more likely to survive, reproduce, and pass on their alleles (1)\n• Over generations, the frequency of advantageous alleles increases, and the population becomes better adapted to its environment (1)"
      },
      {
        "q": "Suggest how rising global temperatures could affect food webs in the Arctic.",
        "marks": 3,
        "markScheme": "• Melting sea ice reduces habitat for species such as polar bears and seals (1)\n• Changes in plankton populations at the base of food webs affect all higher trophic levels (1)\n• Altered migration patterns and species distribution could lead to new competitive and predator-prey interactions (1)"
      },
      {
        "q": "Explain the concept of carbon neutrality and why burning biomass is sometimes considered carbon neutral.",
        "marks": 3,
        "markScheme": "• Carbon neutrality means no net increase in atmospheric CO₂ (1)\n• Burning biomass releases CO₂, but the same amount was absorbed by the plant during photosynthesis during its lifetime (1)\n• However, this only holds if the biomass is replaced at the same rate it is burned; in practice, emissions from processing and transport mean it may not be truly carbon neutral (1)"
      },
      {
        "q": "Explain how speciation occurs through geographical isolation.",
        "marks": 4,
        "markScheme": "• A population is divided by a geographical barrier (e.g. mountain range, river, island formation) (1)\n• The separated populations experience different selection pressures / environmental conditions (1)\n• Different mutations arise and are selected for in each population, leading to genetic divergence (1)\n• Over time, the populations become so genetically different that they can no longer interbreed to produce fertile offspring / they are now separate species (allopatric speciation) (1)"
      },
      {
        "q": "Describe how peat bogs act as carbon stores and why their destruction is a concern.",
        "marks": 3,
        "markScheme": "• Peat bogs form in waterlogged, acidic conditions where decomposition is very slow (1)\n• Dead plant material accumulates over thousands of years, locking carbon in the peat (1)\n• Draining or burning peat bogs releases this stored carbon as CO₂, contributing to atmospheric greenhouse gas levels (1)"
      },
      {
        "q": "Explain the difference between photosystem I and photosystem II.",
        "marks": 3,
        "markScheme": "• Photosystem II (PSII) absorbs light at 680 nm and is involved in the photolysis of water, releasing electrons, H⁺ ions, and O₂ (1)\n• Photosystem I (PSI) absorbs light at 700 nm and passes excited electrons to NADP⁺ reductase to reduce NADP⁺ to NADPH (1)\n• Electrons flow from PSII through the electron transport chain to PSI in non-cyclic photophosphorylation (1)"
      },
      {
        "q": "Explain what is meant by the term biomass and how it is measured.",
        "marks": 2,
        "markScheme": "• Biomass is the total mass of living material / organic matter in an organism or at a trophic level (1)\n• It is measured as dry mass (by drying to constant weight) per unit area, which removes variable water content (1)"
      }
    ]
  },
  "S6": {
    "name": "Immunity, Infection and Forensics",
    "questions": [
      {
        "q": "State what is meant by the term pathogen.",
        "marks": 1,
        "markScheme": "• A microorganism that causes disease (1)"
      },
      {
        "q": "Compare the structure of bacteria and viruses.",
        "marks": 3,
        "markScheme": "• Bacteria are cells with a cell membrane and cytoplasm; viruses are acellular / non-cellular (1)\n• Bacteria have 70S ribosomes and a peptidoglycan cell wall (may have capsule, flagella, plasmids); viruses have no ribosomes and a protein coat / capsid, sometimes with a lipid envelope (1)\n• Both contain nucleic acid: bacteria have DNA (circular chromosome), whereas viruses have either DNA or RNA (1)"
      },
      {
        "q": "Describe how bacteria cause disease.",
        "marks": 3,
        "markScheme": "• Bacteria reproduce rapidly inside the body by binary fission (1)\n• They produce toxins that damage cells and tissues (1)\n• Some bacteria directly invade and destroy host cells / interfere with normal cell function (1)"
      },
      {
        "q": "Describe how viruses cause disease.",
        "marks": 3,
        "markScheme": "• Viruses invade host cells and use the host’s cellular machinery to replicate (1)\n• New virus particles are assembled inside the host cell (1)\n• The host cell may burst (lysis), releasing new viruses that infect other cells, causing cell damage and disease symptoms (1)"
      },
      {
        "q": "Describe the body’s non-specific / innate immune defences.",
        "marks": 4,
        "markScheme": "• Skin acts as a physical barrier preventing entry of pathogens (1)\n• Mucous membranes in the respiratory and digestive tracts trap pathogens (1)\n• Stomach acid (low pH) kills many ingested pathogens (1)\n• Phagocytes (neutrophils, macrophages) engulf and destroy pathogens by phagocytosis (1)"
      },
      {
        "q": "Describe the process of phagocytosis.",
        "marks": 4,
        "markScheme": "• Phagocyte is attracted to the pathogen by chemicals released at the site of infection (chemotaxis) (1)\n• The phagocyte engulfs the pathogen by surrounding it with its cell membrane, forming a phagosome (1)\n• Lysosomes fuse with the phagosome, releasing hydrolytic enzymes that digest the pathogen (1)\n• Antigens from the digested pathogen are presented on the phagocyte’s surface (antigen presentation) (1)"
      },
      {
        "q": "Explain the role of T lymphocytes in the adaptive immune response.",
        "marks": 4,
        "markScheme": "• T helper cells recognise antigens presented by phagocytes / antigen-presenting cells (1)\n• They release cytokines that activate B cells and other T cells (1)\n• T killer / cytotoxic cells recognise and destroy infected body cells by releasing perforin to create pores in the cell membrane (1)\n• T memory cells remain in the body and provide a faster response upon re-infection (1)"
      },
      {
        "q": "Explain the role of B lymphocytes in the adaptive immune response.",
        "marks": 4,
        "markScheme": "• B cells have antibodies on their surface that are specific to a particular antigen (1)\n• When activated (by binding to antigen and stimulation by T helper cells), B cells divide by mitosis / clonal expansion (1)\n• They differentiate into plasma cells that secrete large quantities of specific antibodies (1)\n• Memory B cells remain in the body and enable a faster, stronger secondary response upon re-exposure (1)"
      },
      {
        "q": "Draw and label a diagram of an antibody molecule.",
        "marks": 3,
        "diagram": true,
        "markScheme": "• Y-shaped molecule with four polypeptide chains (two heavy, two light) shown (1)\n• Variable region at the tips of the Y labelled, showing the antigen-binding sites (1)\n• Constant region forming the stem of the Y labelled; disulfide bonds between chains indicated (1)"
      },
      {
        "q": "Explain how antibodies help to destroy pathogens.",
        "marks": 4,
        "markScheme": "• Antibodies bind to specific antigens on the surface of pathogens (1)\n• Agglutination: antibodies cause pathogens to clump together, making it easier for phagocytes to engulf them (1)\n• Neutralisation: antibodies block pathogen binding sites, preventing attachment to host cells (1)\n• Opsonisation: antibodies coat pathogens, enhancing recognition and phagocytosis (1)"
      },
      {
        "q": "Explain the difference between the primary and secondary immune response.",
        "marks": 4,
        "markScheme": "• The primary response occurs on first exposure to an antigen; it is slow because specific B and T cells must be selected and clonally expanded (1)\n• A small amount of antibody is produced after a lag period (1)\n• The secondary response occurs on re-exposure to the same antigen; it is faster and produces more antibodies (1)\n• Memory cells produced during the primary response enable the rapid secondary response (1)"
      },
      {
        "q": "Explain how vaccination provides immunity to a disease.",
        "marks": 4,
        "markScheme": "• A vaccine contains a weakened / inactivated / part of a pathogen (antigen) that does not cause disease (1)\n• The antigens stimulate the immune system to produce specific B and T cells (1)\n• Memory cells are produced that remain in the body long-term (1)\n• Upon subsequent exposure to the actual pathogen, a rapid secondary immune response occurs, destroying the pathogen before symptoms develop (1)"
      },
      {
        "q": "Explain the concept of herd immunity.",
        "marks": 3,
        "markScheme": "• Herd immunity occurs when a large proportion of a population is immune to a disease (through vaccination or prior infection) (1)\n• This reduces the likelihood of the pathogen spreading because there are fewer susceptible individuals (1)\n• It protects those who cannot be vaccinated (e.g. immunocompromised individuals, infants) (1)"
      },
      {
        "q": "Explain how antibiotic resistance develops in bacteria.",
        "marks": 4,
        "markScheme": "• Random mutations in bacterial DNA may give some bacteria resistance to an antibiotic (1)\n• When an antibiotic is used, susceptible bacteria are killed but resistant bacteria survive (1)\n• Resistant bacteria reproduce rapidly, passing on the resistance gene / allele to offspring (1)\n• Horizontal gene transfer (e.g. via plasmids / conjugation) can spread resistance between different bacterial species (1)"
      },
      {
        "q": "Evaluate the use of antibiotics in medicine and agriculture.",
        "marks": 5,
        "markScheme": "• Antibiotics have saved millions of lives by treating bacterial infections (1)\n• Overuse and misuse in medicine (e.g. prescribing for viral infections) has accelerated resistance (1)\n• Use in agriculture (e.g. in animal feed) has also contributed to resistance development (1)\n• MRSA and other resistant strains are increasingly difficult to treat (1)\n• Evaluation: antibiotics remain essential but must be used more responsibly; new antibiotics need to be developed and alternatives explored (1)"
      },
      {
        "q": "Describe how DNA profiling (genetic fingerprinting) is carried out.",
        "marks": 5,
        "markScheme": "• DNA is extracted from a sample (blood, saliva, tissue) (1)\n• Specific regions (short tandem repeats / STRs) are amplified using PCR (1)\n• The amplified fragments are separated by gel electrophoresis or capillary electrophoresis (1)\n• The pattern of bands / peaks represents the individual’s DNA profile (1)\n• Profiles are compared between samples to determine a match (1)"
      },
      {
        "q": "Explain why DNA profiling is useful in forensic science.",
        "marks": 3,
        "markScheme": "• Every individual (except identical twins) has a unique DNA profile based on STR lengths (1)\n• DNA from crime scene evidence can be compared with suspect profiles to establish identity (1)\n• DNA profiling can also be used to establish paternity, identify victims, and solve cold cases (1)"
      },
      {
        "q": "Describe how forensic scientists estimate time of death using body temperature.",
        "marks": 3,
        "markScheme": "• Body temperature decreases after death at a roughly predictable rate (1)\n• Normal body temperature is approximately 37°C; rate of cooling depends on environmental temperature, body size, and clothing (1)\n• By measuring the current body temperature and knowing the ambient temperature, the time since death can be estimated using cooling curves / Henssge nomogram (1)"
      },
      {
        "q": "Describe how decomposition and insect succession can be used to estimate time of death.",
        "marks": 4,
        "markScheme": "• After death, the body undergoes stages of decomposition: fresh, bloat, active decay, advanced decay, dry/skeletal (1)\n• Different species of insects (especially blowflies) colonise the body at predictable stages (1)\n• Identification of insect species and their developmental stage (egg, larva, pupa, adult) gives information about time since death (1)\n• Environmental factors (temperature, humidity) affect the rate of decomposition and insect development and must be considered (1)"
      },
      {
        "q": "Explain how the degree of rigor mortis can help estimate time of death.",
        "marks": 3,
        "markScheme": "• After death, respiration stops and ATP runs out, so actin-myosin cross-bridges cannot be broken and the muscles stiffen (1)\n• Rigor mortis begins about 2–4 hours after death (small muscles such as those of the face first) and is fully developed at about 12 hours (1)\n• It fades after about 36–48 hours as the muscle proteins break down; the timings vary with temperature, so the degree of rigor gives an estimate of time since death (1)"
      },
      {
        "q": "Explain the role of antigen-presenting cells in the immune response.",
        "marks": 2,
        "markScheme": "• After phagocytosis, antigen-presenting cells (e.g. macrophages, dendritic cells) display pathogen antigens on their surface using MHC proteins (1)\n• This is necessary for activation of T helper cells, which then coordinate the adaptive immune response (1)"
      },
      {
        "q": "Describe how Mycobacterium tuberculosis infects human cells and causes the symptoms of TB.",
        "marks": 4,
        "markScheme": "• Bacteria in inhaled droplets reach the lungs and are engulfed by macrophages (1)\n• They survive inside the macrophages: the thick, waxy cell wall resists digestion and they stop lysosomes fusing with the phagosome (1)\n• An inflammatory response walls off infected macrophages in tubercles, where the bacteria can stay dormant for years (1)\n• If the immune system is weakened, active TB develops: bacteria multiply and destroy lung tissue, causing a persistent cough (sometimes with blood), fever, night sweats and weight loss (1)"
      },
      {
        "q": "State the difference between bacteriostatic and bactericidal antibiotics.",
        "marks": 2,
        "markScheme": "• Bacteriostatic antibiotics inhibit the growth and division of bacteria (e.g. by blocking protein synthesis), so the immune system can then destroy them (1)\n• Bactericidal antibiotics kill bacteria (e.g. by weakening the cell wall so the cells burst) (1)"
      },
      {
        "q": "Explain why it is difficult to develop vaccines against some viruses such as influenza.",
        "marks": 3,
        "markScheme": "• Influenza virus has a high mutation rate, leading to frequent changes in surface antigens (antigenic drift and shift) (1)\n• Memory cells from previous infection or vaccination may not recognise the new strain (1)\n• New vaccines must be developed each year to match the currently circulating strains (1)"
      },
      {
        "q": "Explain the difference between active and passive immunity.",
        "marks": 4,
        "markScheme": "• Active immunity: the body produces its own antibodies in response to exposure to antigens (1)\n• It provides long-term protection because memory cells are produced (1)\n• Passive immunity: antibodies are received from an external source (e.g. mother to baby via breast milk, or injection of antibodies) (1)\n• It provides immediate but short-term protection because no memory cells are produced and the antibodies are eventually broken down (1)"
      },
      {
        "q": "Describe how the polymerase chain reaction (PCR) is used to amplify DNA.",
        "marks": 4,
        "markScheme": "• DNA is heated to approximately 95°C to denature / separate the two strands (1)\n• Temperature is lowered to approximately 55–60°C for primers to anneal to complementary sequences on each strand (1)\n• Temperature is raised to approximately 72°C for Taq polymerase to extend the primers by adding complementary nucleotides (1)\n• The cycle is repeated 25–30 times, doubling the DNA with each cycle to produce millions of copies (1)"
      },
      {
        "q": "Explain why Taq polymerase is used in PCR rather than a standard DNA polymerase.",
        "marks": 2,
        "markScheme": "• Taq polymerase is a thermostable enzyme isolated from Thermus aquaticus, a thermophilic bacterium (1)\n• It is not denatured at the high temperatures (95°C) required for DNA denaturation in PCR, so it remains functional throughout all cycles (1)"
      },
      {
        "q": "Describe how to investigate the effect of different antibiotics on bacteria.",
        "marks": 4,
        "markScheme": "• Using aseptic technique, spread a bacterial culture evenly over an agar plate (1)\n• Place paper discs soaked in the different antibiotics (same concentration and disc size) on the agar, with a control disc soaked in sterile water (1)\n• Tape the lid on without fully sealing it and incubate at about 25 °C (not 37 °C, to reduce the risk of growing human pathogens) (1)\n• Measure the diameter of the clear zone of inhibition around each disc and calculate its area (πr²); the larger the area, the more effective the antibiotic (1)"
      },
      {
        "q": "Explain why forensic evidence from multiple sources is more reliable than a single piece of evidence.",
        "marks": 2,
        "markScheme": "• Multiple independent sources of evidence (DNA, entomology, body temperature, witnesses) corroborate each other (1)\n• This reduces the chance of error from a single method and provides a more reliable estimate of events (1)"
      },
      {
        "q": "Explain how micro-organisms involved in decomposition contribute to the recycling of carbon.",
        "marks": 3,
        "markScheme": "• Decomposers (bacteria and fungi) secrete enzymes that digest dead organic matter (1)\n• They absorb the products of digestion and use them in respiration (1)\n• This releases CO₂ into the atmosphere, which plants can take up again for photosynthesis (1)"
      },
      {
        "q": "Explain how one gene can give rise to more than one protein.",
        "marks": 3,
        "markScheme": "• The primary transcript (pre-mRNA) contains introns and exons (1)\n• Introns are removed by splicing, and exons can be joined in different combinations / some exons are also removed (alternative splicing) (1)\n• Each different mature mRNA is translated into a different polypeptide / protein (1)"
      },
      {
        "q": "Explain the role of cytokines in the immune response.",
        "marks": 3,
        "markScheme": "• Cytokines are signalling molecules / proteins released by immune cells (1)\n• They coordinate the immune response by stimulating cell division, differentiation, and activation of other immune cells (1)\n• Examples: interleukins (communication between leukocytes), interferons (antiviral defence), TNF (inflammation and apoptosis of infected cells) (1)"
      },
      {
        "q": "Describe how forensic entomologists use blowfly larvae to estimate time of death.",
        "marks": 3,
        "diagram": true,
        "markScheme": "• Blowflies are among the first insects to colonise a body after death, laying eggs within hours (1)\n• The developmental stage of larvae (instar stage) and their size indicate how long they have been feeding (1)\n• Using known development rates at specific temperatures, the minimum time since colonisation (and thus approximate time of death) can be estimated (1)"
      },
      {
        "q": "Evaluate the use of vaccination programmes.",
        "marks": 5,
        "markScheme": "• Vaccines have eradicated smallpox and nearly eradicated polio, demonstrating their effectiveness (1)\n• They protect vulnerable individuals through herd immunity (1)\n• They are cost-effective compared to treating disease (1)\n• Concerns include rare side effects and allergic reactions (1)\n• Evaluation: the benefits of vaccination greatly outweigh the risks for the vast majority of the population; misinformation about vaccines can reduce uptake and threaten herd immunity (1)"
      },
      {
        "q": "Explain how the structure of HIV makes it difficult to develop a vaccine.",
        "marks": 3,
        "markScheme": "• HIV has a high mutation rate due to the error-prone reverse transcriptase enzyme (1)\n• Surface antigens (e.g. gp120) change rapidly, making it difficult for antibodies to recognise the virus (1)\n• HIV also hides within host T helper cells, evading the immune system and making it difficult to target (1)"
      },
      {
        "q": "Describe how tuberculosis (TB) is transmitted and why it is difficult to control globally.",
        "marks": 4,
        "markScheme": "• TB is caused by Mycobacterium tuberculosis and is spread by airborne droplets from coughing / sneezing (1)\n• Overcrowded and poorly ventilated conditions increase transmission (1)\n• The BCG vaccine provides limited protection, and some TB strains are multi-drug resistant (MDR-TB) (1)\n• Poverty, lack of access to healthcare, and co-infection with HIV make TB difficult to control in many countries (1)"
      },
      {
        "q": "Explain why the overuse of antibiotics is a concern for public health.",
        "marks": 3,
        "markScheme": "• Overuse increases selection pressure, accelerating the evolution of antibiotic-resistant bacteria (1)\n• Resistant infections (e.g. MRSA, C. difficile) are harder and more expensive to treat, leading to increased morbidity and mortality (1)\n• Without new antibiotics, previously treatable infections could become life-threatening / return to pre-antibiotic era (1)"
      },
      {
        "q": "Outline the process of gel electrophoresis for separating DNA fragments.",
        "marks": 3,
        "markScheme": "• DNA fragments are loaded into wells in an agarose gel and an electric current is applied (1)\n• Negatively charged DNA migrates towards the positive electrode (1)\n• Smaller fragments travel further / faster through the gel, separating fragments by size (1)"
      },
      {
        "q": "Explain the role of skin flora and gut flora in protecting the body from infection.",
        "marks": 3,
        "markScheme": "• Harmless (commensal) bacteria live on the skin and in the gut (1)\n• They compete with pathogens for nutrients and space / attachment sites, so pathogens cannot establish (1)\n• Some secrete substances (e.g. lactic acid) that lower the pH or otherwise inhibit the growth of pathogens (1)"
      },
      {
        "q": "Explain how codes of practice in hospitals help to prevent and control hospital-acquired infections.",
        "marks": 4,
        "markScheme": "• Antibiotics are prescribed only when needed (not for viral or minor infections), using narrow-spectrum drugs where possible at the correct dose (1)\n• This reduces the selection pressure for antibiotic-resistant bacteria such as MRSA and C. difficile (1)\n• Hand washing with soap and water (needed for C. difficile spores) or alcohol gel between patients, and staff dress codes such as bare below the elbows, reduce transfer of bacteria (1)\n• Infected patients are isolated, patients are screened on admission, and wards and equipment are thoroughly cleaned and disinfected (1)"
      }
    ]
  },
  "S7": {
    "name": "Run for Your Life",
    "questions": [
      {
        "q": "State the role of ATP in living cells.",
        "marks": 1,
        "markScheme": "• ATP is the immediate / universal energy currency of cells, providing energy for cellular processes (1)"
      },
      {
        "q": "State what is meant by the term aerobic respiration.",
        "marks": 1,
        "markScheme": "• The release of energy from organic molecules (usually glucose) in the presence of oxygen, producing CO₂ and water (1)"
      },
      {
        "q": "State the balanced equation for aerobic respiration.",
        "marks": 1,
        "markScheme": "• C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (+ ATP/energy) (1)"
      },
      {
        "q": "Describe the role of glycolysis in aerobic and anaerobic respiration.",
        "marks": 4,
        "markScheme": "• Glycolysis takes place in the cytoplasm and does not need oxygen (1)\n• The hexose (glucose) is phosphorylated using ATP, then split into two 3-carbon molecules (1)\n• These are oxidised to pyruvate, giving a net gain of 2 ATP and 2 reduced NAD per glucose (1)\n• In aerobic respiration the pyruvate enters the mitochondria for the link reaction; in anaerobic respiration it is converted to lactate, which reoxidises the NAD so glycolysis can continue (1)"
      },
      {
        "q": "Describe the link reaction.",
        "marks": 3,
        "markScheme": "• Pyruvate (3C) is transported into the mitochondrial matrix (1)\n• Pyruvate is decarboxylated (CO₂ removed) and dehydrogenated (hydrogen removed, reducing NAD to NADH) (1)\n• The resulting 2C acetyl group combines with coenzyme A to form acetyl CoA (1)"
      },
      {
        "q": "Describe the role of the Krebs cycle in the complete oxidation of glucose.",
        "marks": 5,
        "markScheme": "• Takes place in the mitochondrial matrix, where its enzymes are found (1)\n• The 2-carbon acetyl group from acetyl CoA combines with a 4-carbon compound to form a 6-carbon compound (1)\n• Decarboxylation releases CO₂ (2 per turn), so the carbon of glucose is fully oxidised to CO₂ (1)\n• Dehydrogenation reduces NAD and FAD (3 reduced NAD and 1 reduced FAD per turn), which carry hydrogen to the electron transport chain (1)\n• 1 ATP is made per turn by substrate-level phosphorylation, the 4-carbon compound is regenerated, and the cycle turns twice per glucose (1)"
      },
      {
        "q": "Describe the electron transport chain and oxidative phosphorylation.",
        "marks": 5,
        "markScheme": "• NADH and FADH₂ donate electrons to electron carriers on the inner mitochondrial membrane (1)\n• Electrons pass along a series of carriers, releasing energy at each step (1)\n• This energy is used to pump H⁺ ions from the matrix into the intermembrane space, creating a proton gradient (1)\n• H⁺ ions flow back through ATP synthase by chemiosmosis, driving the synthesis of ATP (1)\n• Oxygen is the final electron acceptor, combining with electrons and H⁺ to form water (1)"
      },
      {
        "q": "Explain why oxygen is described as the final electron acceptor in aerobic respiration.",
        "marks": 2,
        "markScheme": "• At the end of the electron transport chain, oxygen accepts electrons and combines with H⁺ ions to form water (1)\n• Without oxygen, electrons cannot be removed from the chain, it stops functioning, and ATP production by oxidative phosphorylation ceases (1)"
      },
      {
        "q": "Describe anaerobic respiration in humans.",
        "marks": 3,
        "markScheme": "• In the absence of sufficient oxygen, pyruvate from glycolysis is converted to lactate (1)\n• This is catalysed by lactate dehydrogenase and involves the oxidation of NADH back to NAD (1)\n• This allows glycolysis to continue producing a small amount of ATP (net 2 per glucose) (1)"
      },
      {
        "q": "Explain why anaerobic respiration in muscle produces much less ATP per glucose than aerobic respiration.",
        "marks": 2,
        "markScheme": "• Only glycolysis takes place, giving a net 2 ATP per glucose; there is no link reaction, Krebs cycle or oxidative phosphorylation because there is no oxygen to act as the final electron acceptor (1)\n• The glucose is only partly broken down: much of its energy stays in the lactate, which is not oxidised to CO₂ and water (1)"
      },
      {
        "q": "Describe the sliding filament model of muscle contraction.",
        "marks": 6,
        "markScheme": "• A nerve impulse triggers the release of calcium ions from the sarcoplasmic reticulum (1)\n• Ca²⁺ binds to troponin, causing tropomyosin to move and expose myosin-binding sites on actin (1)\n• Myosin heads bind to actin, forming cross-bridges (1)\n• The myosin head pivots / undergoes a power stroke, pulling the actin filament towards the centre of the sarcomere (using energy from ATP hydrolysis) (1)\n• ATP binds to the myosin head, causing it to detach from actin (1)\n• The myosin head is re-cocked using energy from ATP hydrolysis, ready to bind again; this cycle repeats, shortening the sarcomere (1)"
      },
      {
        "q": "Explain the role of ATP in muscle contraction.",
        "marks": 3,
        "markScheme": "• ATP provides energy for the power stroke / movement of the myosin head along actin (1)\n• ATP is needed to detach the myosin head from the actin binding site (1)\n• ATP powers the calcium ion pump that returns Ca²⁺ to the sarcoplasmic reticulum for muscle relaxation (1)"
      },
      {
        "q": "Explain why muscles require a rich blood supply.",
        "marks": 3,
        "markScheme": "• To deliver oxygen for aerobic respiration to produce ATP for muscle contraction (1)\n• To deliver glucose and other respiratory substrates (1)\n• To remove waste products such as CO₂ and lactate to prevent build-up / fatigue (1)"
      },
      {
        "q": "Draw and label a diagram of a sarcomere, identifying the A band, I band, H zone and Z lines.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Z lines at each end of the sarcomere correctly shown and labelled (1)\n• A band (dark band) in the centre where thick (myosin) filaments are present, labelled (1)\n• I band (light band) either side of the Z line where only thin (actin) filaments are present, labelled (1)\n• H zone in the centre of the A band where only thick filaments are present, labelled (1)"
      },
      {
        "q": "Explain what happens to the I band and H zone during muscle contraction.",
        "marks": 2,
        "markScheme": "• The I band gets shorter / narrower because actin filaments slide over myosin towards the centre (1)\n• The H zone gets shorter / narrower because actin filaments overlap more with myosin; the A band stays the same width (1)"
      },
      {
        "q": "Describe the role of creatine phosphate in muscle cells.",
        "marks": 2,
        "markScheme": "• Creatine phosphate acts as a rapid reserve of phosphate groups for ATP regeneration (1)\n• It transfers a phosphate group to ADP to regenerate ATP very quickly during the first few seconds of intense exercise (1)"
      },
      {
        "q": "Explain the concept of oxygen debt (excess post-exercise oxygen consumption).",
        "marks": 3,
        "markScheme": "• During intense exercise, anaerobic respiration produces lactate (1)\n• After exercise, extra oxygen is consumed to oxidise lactate back to pyruvate in the liver (or convert it to glycogen) (1)\n• Additional oxygen is needed to replenish creatine phosphate stores, myoglobin oxygen stores, and restore resting metabolic conditions (1)"
      },
      {
        "q": "Explain why heart rate increases during exercise.",
        "marks": 3,
        "markScheme": "• Increased muscle activity increases demand for oxygen and glucose for aerobic respiration (1)\n• Chemoreceptors detect increased CO₂ / decreased pH in the blood and send signals to the cardiovascular centre in the medulla (1)\n• The medulla sends impulses via the sympathetic nervous system to the SAN, increasing heart rate to deliver more oxygenated blood to muscles (1)"
      },
      {
        "q": "Calculate the cardiac output if heart rate increases to 150 bpm and stroke volume is 80 cm³ during exercise.",
        "marks": 2,
        "markScheme": "• Cardiac output = heart rate × stroke volume = 150 × 80 (1)\n• = 12,000 cm³/min / 12 dm³/min (1)"
      },
      {
        "q": "Explain how thermoregulation maintains a constant body temperature during exercise.",
        "marks": 4,
        "markScheme": "• Thermoreceptors detect the rise in blood temperature and send signals to the hypothalamus (1)\n• Vasodilation of arterioles near the skin surface increases blood flow to the skin, increasing heat loss by radiation (1)\n• Sweat glands produce more sweat; evaporation of sweat from the skin surface removes heat (1)\n• These are negative feedback mechanisms that bring body temperature back to the set point (1)"
      },
      {
        "q": "Explain the role of myoglobin in muscle tissue.",
        "marks": 2,
        "markScheme": "• Myoglobin is a protein in muscle cells that has a higher affinity for oxygen than haemoglobin (1)\n• It acts as an oxygen store, releasing oxygen to mitochondria during intense exercise when blood oxygen supply is insufficient (1)"
      },
      {
        "q": "Describe the structure of a mitochondrion and explain how its features are adapted for aerobic respiration.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Double membrane: outer membrane is smooth, inner membrane is folded into cristae (1)\n• Cristae increase the surface area for the electron transport chain and ATP synthase (oxidative phosphorylation) (1)\n• Matrix contains enzymes for the Krebs cycle and the link reaction (1)\n• The intermembrane space is narrow, allowing a steep proton gradient to be established quickly for chemiosmosis (1)"
      },
      {
        "q": "Compare the ATP yield from aerobic and anaerobic respiration.",
        "marks": 3,
        "markScheme": "• Aerobic respiration produces approximately 30–32 ATP per glucose molecule (theoretical maximum of 38) (1)\n• Anaerobic respiration produces only 2 ATP per glucose (from glycolysis) (1)\n• Aerobic respiration is far more efficient because the Krebs cycle and oxidative phosphorylation generate most of the ATP, which requires oxygen (1)"
      },
      {
        "q": "Explain what is meant by the VO₂ max and why it is an indicator of fitness.",
        "marks": 2,
        "markScheme": "• VO₂ max is the maximum rate of oxygen consumption during intense exercise (1)\n• A higher VO₂ max indicates greater aerobic fitness / the body can deliver and use more oxygen for ATP production during exercise (1)"
      },
      {
        "q": "Describe how fast-twitch and slow-twitch muscle fibres differ in structure and function.",
        "marks": 4,
        "markScheme": "• Slow-twitch (Type I): contract slowly, are fatigue-resistant, and are suited to endurance activities (1)\n• They have many mitochondria, rich blood supply, and high myoglobin content for sustained aerobic respiration (1)\n• Fast-twitch (Type II): contract rapidly and powerfully but fatigue quickly (1)\n• They have fewer mitochondria but large glycogen stores and high anaerobic capacity for short bursts of intense activity (1)"
      },
      {
        "q": "Explain how negative feedback is involved in homeostasis.",
        "marks": 3,
        "markScheme": "• A receptor detects a change / deviation from the set point (1)\n• A control centre / coordinator processes the information and sends signals to effectors (1)\n• Effectors bring about a response that opposes / reverses the change, returning the variable to the set point (1)"
      },
      {
        "q": "Explain the difference between negative feedback and positive feedback, giving one example of each.",
        "marks": 4,
        "markScheme": "• Negative feedback: a change from the norm triggers a response that reverses the change, returning the system to the norm / keeping it within narrow limits (1)\n• Example: a rise in core temperature detected by the hypothalamus leads to vasodilation and sweating, lowering the temperature (1)\n• Positive feedback: a change triggers a response that increases the change further, moving the system away from the norm (1)\n• Example: depolarisation of an axon opens more Na⁺ channels, so more Na⁺ enters and depolarisation increases / oxytocin release during labour (1)"
      },
      {
        "q": "Explain why ATP is described as a universal energy currency.",
        "marks": 3,
        "markScheme": "• ATP is used by all living cells as an immediate source of energy (1)\n• It releases a small, manageable amount of energy when hydrolysed to ADP + Pi, suitable for individual reactions (1)\n• It can be rapidly regenerated from ADP and Pi, allowing continuous energy supply / it couples exergonic and endergonic reactions (1)"
      },
      {
        "q": "Explain how an electrocardiogram (ECG) can be used to aid the diagnosis of heart conditions.",
        "marks": 3,
        "markScheme": "• An ECG records the electrical activity of the heart through electrodes on the skin (1)\n• A normal trace shows a P wave (atrial excitation), a QRS complex (ventricular excitation) and a T wave (ventricular repolarisation) (1)\n• Changes from the normal trace show a problem, e.g. an irregular or absent P wave in atrial fibrillation, a raised ST section in a heart attack (myocardial infarction), or an abnormal rate (tachycardia or bradycardia) (1)"
      },
      {
        "q": "An athlete's cardiac output is 22.5 dm³ min⁻¹ at a heart rate of 180 beats min⁻¹. Calculate the stroke volume in cm³.",
        "marks": 2,
        "markScheme": "• Stroke volume = cardiac output ÷ heart rate = 22.5 ÷ 180 = 0.125 dm³ (1)\n• = 125 cm³ (1)"
      },
      {
        "q": "Explain the role of the sarcoplasmic reticulum in muscle contraction.",
        "marks": 2,
        "markScheme": "• The sarcoplasmic reticulum stores calcium ions at rest (1)\n• When stimulated by an action potential, it releases Ca²⁺ into the sarcoplasm, triggering the sliding filament mechanism (1)"
      },
      {
        "q": "Explain why training improves cardiovascular fitness.",
        "marks": 4,
        "markScheme": "• Regular exercise increases stroke volume by strengthening the cardiac muscle / cardiac hypertrophy (1)\n• Resting heart rate decreases because each beat pumps more blood (1)\n• The number of capillaries supplying muscles increases, improving oxygen delivery (1)\n• VO₂ max increases due to improved oxygen delivery and utilisation / more mitochondria in muscle cells (1)"
      },
      {
        "q": "Describe how a spirometer can be used to measure oxygen consumption and calculate the rate of respiration.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• The subject breathes in and out of a sealed chamber containing oxygen, connected to a recorder / data logger (1)\n• A CO₂ absorber (e.g. soda lime) removes exhaled CO₂ so only O₂ consumption is measured (1)\n• The volume of gas in the chamber decreases over time as oxygen is used up (1)\n• The rate of oxygen consumption is calculated from the gradient of the trace (volume decrease / time) (1)"
      },
      {
        "q": "Describe how lactate is removed from the body after exercise.",
        "marks": 3,
        "markScheme": "• Lactate is transported in the blood to the liver (1)\n• In the liver, lactate is converted back to pyruvate by lactate dehydrogenase (1)\n• Pyruvate can then be oxidised in aerobic respiration, or converted to glycogen for storage (Cori cycle) (1)"
      },
      {
        "q": "Explain why sustained vigorous exercise can cause muscle fatigue.",
        "marks": 3,
        "markScheme": "• During intense exercise, oxygen supply may be insufficient, leading to anaerobic respiration and lactate accumulation (1)\n• Lactate lowers pH in muscle cells, which inhibits enzyme activity and reduces the efficiency of muscle contraction (1)\n• Depletion of glycogen / creatine phosphate stores also reduces the ability to regenerate ATP rapidly (1)"
      },
      {
        "q": "Describe the role of the neuromuscular junction in stimulating muscle contraction.",
        "marks": 4,
        "markScheme": "• A nerve impulse / action potential arrives at the motor neurone terminal (1)\n• Calcium ions enter the terminal, causing synaptic vesicles to release acetylcholine (ACh) into the synaptic cleft (1)\n• ACh binds to receptors on the muscle fibre membrane (sarcolemma), depolarising it and generating an action potential (1)\n• The action potential spreads along the sarcolemma and into T-tubules, stimulating the sarcoplasmic reticulum to release Ca²⁺ (1)"
      },
      {
        "q": "Explain the significance of the inner mitochondrial membrane being folded into cristae.",
        "marks": 2,
        "markScheme": "• Cristae increase the surface area of the inner membrane (1)\n• This provides more space for electron transport chain complexes and ATP synthase, increasing the rate of oxidative phosphorylation / ATP production (1)"
      },
      {
        "q": "Explain why endurance athletes typically have a higher proportion of slow-twitch muscle fibres.",
        "marks": 2,
        "markScheme": "• Slow-twitch fibres are more resistant to fatigue and can sustain prolonged aerobic activity (1)\n• They have more mitochondria, myoglobin, and blood supply, enabling efficient aerobic ATP production for long-duration exercise (1)"
      },
      {
        "q": "Explain what happens to pyruvate when oxygen is present compared to when oxygen is absent in muscle cells.",
        "marks": 3,
        "markScheme": "• When oxygen is present: pyruvate enters the mitochondrial matrix and undergoes the link reaction to form acetyl CoA, which enters the Krebs cycle (1)\n• When oxygen is absent: pyruvate is reduced to lactate in the cytoplasm, using reduced NAD (1)\n• This regenerates NAD so glycolysis can continue producing a small amount of ATP; the lactate is later taken to the liver and converted back to pyruvate (1)"
      },
      {
        "q": "Explain how the structure of the alveoli is adapted for efficient gas exchange during exercise.",
        "marks": 3,
        "markScheme": "• Increased ventilation rate during exercise maintains a steep concentration gradient for O₂ and CO₂ across the alveolar walls (1)\n• The thin walls (one cell thick) and large surface area of alveoli allow rapid diffusion (1)\n• Increased cardiac output during exercise maintains blood flow past alveoli, ensuring continuous removal of O₂ and delivery of CO₂ (1)"
      }
    ]
  },
  "S8": {
    "name": "Grey Matter",
    "questions": [
      {
        "q": "State the function of the nervous system.",
        "marks": 1,
        "markScheme": "• To detect stimuli, coordinate responses, and enable communication between different parts of the body via electrical impulses (1)"
      },
      {
        "q": "Describe the structure of a motor neurone.",
        "marks": 3,
        "diagram": true,
        "markScheme": "• Cell body with a nucleus, dendrites receiving impulses from other neurones, and a long axon transmitting impulses to effectors (1)\n• Axon is surrounded by a myelin sheath (Schwann cells) with gaps called nodes of Ranvier (1)\n• Axon terminals / synaptic knobs at the end of the axon release neurotransmitters (1)"
      },
      {
        "q": "Explain how a resting potential is maintained across a neurone membrane.",
        "marks": 3,
        "markScheme": "• The sodium-potassium pump actively transports 3 Na⁺ out and 2 K⁺ into the cell, using ATP (1)\n• K⁺ leak channels allow more K⁺ to diffuse out than Na⁺ diffuses in (1)\n• This creates a charge difference of approximately −70 mV across the membrane (inside negative relative to outside) (1)"
      },
      {
        "q": "Describe the events of an action potential.",
        "marks": 5,
        "markScheme": "• A stimulus causes sodium ion channels to open; Na⁺ rushes into the cell (depolarisation) (1)\n• The membrane potential rises from −70 mV towards +40 mV (1)\n• At the peak, sodium channels close and potassium channels open; K⁺ rushes out (repolarisation) (1)\n• Hyperpolarisation occurs as the membrane potential temporarily overshoots the resting potential (1)\n• The sodium-potassium pump restores the resting potential; there is a brief refractory period during which another action potential cannot be generated (1)"
      },
      {
        "q": "Explain the role of the myelin sheath in nerve impulse transmission.",
        "marks": 3,
        "markScheme": "• The myelin sheath is an insulating layer of fatty material that surrounds the axon (1)\n• Ions can only cross the membrane at the nodes of Ranvier (gaps in the myelin) (1)\n• The action potential jumps from node to node (saltatory conduction), which greatly increases the speed of transmission (1)"
      },
      {
        "q": "Explain what is meant by the all-or-nothing principle of action potentials.",
        "marks": 2,
        "markScheme": "• An action potential is only generated if the stimulus reaches the threshold level of depolarisation (1)\n• If the threshold is reached, the action potential is always the same size; a stronger stimulus does not produce a larger action potential (1)"
      },
      {
        "q": "Explain how a stronger stimulus is detected by the nervous system if action potentials are all-or-nothing.",
        "marks": 2,
        "markScheme": "• A stronger stimulus causes a higher frequency of action potentials / more action potentials per unit time (1)\n• A stronger stimulus may also recruit more neurones to fire simultaneously (1)"
      },
      {
        "q": "Describe the events at a cholinergic synapse.",
        "marks": 5,
        "markScheme": "• An action potential arrives at the presynaptic terminal and causes calcium ion channels to open (1)\n• Ca²⁺ influx causes synaptic vesicles to fuse with the presynaptic membrane, releasing acetylcholine (ACh) into the synaptic cleft by exocytosis (1)\n• ACh diffuses across the cleft and binds to specific receptors on the postsynaptic membrane (1)\n• This causes sodium ion channels to open, depolarising the postsynaptic membrane and potentially generating a new action potential (1)\n• ACh is rapidly broken down by acetylcholinesterase; choline is reabsorbed into the presynaptic neurone for recycling (1)"
      },
      {
        "q": "Explain the role of calcium ions in synaptic transmission.",
        "marks": 2,
        "markScheme": "• When an action potential reaches the presynaptic terminal, voltage-gated calcium channels open (1)\n• Ca²⁺ enters the terminal and triggers fusion of synaptic vesicles with the presynaptic membrane, causing neurotransmitter release (1)"
      },
      {
        "q": "Explain why synaptic transmission is unidirectional.",
        "marks": 2,
        "markScheme": "• Neurotransmitter vesicles are only present in the presynaptic terminal (1)\n• Receptors for the neurotransmitter are only on the postsynaptic membrane, so the signal can only travel in one direction (1)"
      },
      {
        "q": "Describe the structure of the human brain, including the cerebrum, cerebellum, and medulla oblongata.",
        "marks": 4,
        "markScheme": "• The cerebrum is the largest part of the brain, divided into two hemispheres; responsible for conscious thought, reasoning, memory, language, and voluntary movement (1)\n• The cerebral cortex is the outer layer of grey matter (cell bodies) with white matter (myelinated axons) beneath (1)\n• The cerebellum is at the back/base of the brain; it coordinates balance, posture, and fine motor movements (1)\n• The medulla oblongata is at the base of the brain connecting to the spinal cord; it controls involuntary functions such as heart rate, breathing rate, and blood pressure (1)"
      },
      {
        "q": "Describe, with the help of a labelled diagram, how IAA brings about the bending of a shoot towards light from one side.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• IAA is produced in the shoot tip and moves down the shoot (1)\n• Light from one side causes IAA to move to the shaded side, so its concentration is higher there (1)\n• IAA stimulates cell elongation, e.g. by causing H⁺ to be pumped into the cell walls, loosening them, and by affecting transcription of genes (1)\n• Cells on the shaded side elongate more than those on the lit side, so the shoot bends towards the light (positive phototropism) (1)"
      },
      {
        "q": "Explain how light falling on a rod cell leads to an action potential in an optic neurone.",
        "marks": 4,
        "markScheme": "• In the dark, cation channels in the rod are open, so Na⁺ enters and the rod is depolarised; it releases an inhibitory neurotransmitter (glutamate) onto the bipolar neurone (1)\n• Light breaks rhodopsin down into retinal and opsin (bleaching) (1)\n• Opsin causes the cation channels to close, so Na⁺ stops entering and the rod cell hyperpolarises (1)\n• The rod stops releasing neurotransmitter, so the bipolar neurone depolarises and releases transmitter to the optic neurone, which produces an action potential (1)"
      },
      {
        "q": "Explain how phytochrome allows a plant to respond to light.",
        "marks": 3,
        "markScheme": "• Phytochrome exists in two forms: Pr absorbs red light and is converted to Pfr; Pfr absorbs far-red light and is converted back to Pr (Pfr also slowly reverts to Pr in the dark) (1)\n• Pfr is the active form; it affects transcription, e.g. by interacting with transcription factors that switch genes on or off (1)\n• This brings about responses such as germination of some seeds, inhibition of stem elongation and control of flowering in response to day length (1)"
      },
      {
        "q": "Explain how positron emission tomography (PET) scans are used in investigating brain function.",
        "marks": 2,
        "markScheme": "• A radioactive tracer (e.g. labelled glucose) is injected and is taken up most by the most active areas of the brain, where it is detected by the scanner (1)\n• This shows which areas are active during a task, or the level of activity or uptake in a region, e.g. reduced dopamine activity in Parkinson's disease (1)"
      },
      {
        "q": "Explain the role of the hypothalamus in coordinating responses.",
        "marks": 3,
        "markScheme": "• The hypothalamus is the control centre for many homeostatic mechanisms (1)\n• It regulates body temperature by detecting blood temperature and coordinating vasodilation/vasoconstriction and sweating (1)\n• It also controls the pituitary gland, linking the nervous and endocrine systems / regulates water balance, hunger, and sleep (1)"
      },
      {
        "q": "Describe the concept of habituation as a type of learning.",
        "marks": 3,
        "markScheme": "• Habituation is a form of learning where an organism gradually stops responding to a repeated, harmless stimulus (1)\n• It occurs because fewer neurotransmitter vesicles are released at the synapse with repeated stimulation (1)\n• This is an adaptive behaviour that allows organisms to ignore insignificant stimuli and focus on important ones (1)"
      },
      {
        "q": "Explain how studies of newborn babies provide evidence about the contributions of nature and nurture to brain development.",
        "marks": 3,
        "markScheme": "• Newborns have had little experience of the environment, so abilities present at birth are likely to be innate / due to nature (1)\n• E.g. newborns prefer to look at face-like patterns, respond to sounds and show reflexes such as grasping; abilities that develop later may depend on experience (1)\n• Limitation: babies cannot tell us what they perceive, so responses must be inferred from behaviour (e.g. how long they look or how hard they suck), and they have had some experience in the womb (1)"
      },
      {
        "q": "Describe how drugs can affect synaptic transmission, using one example.",
        "marks": 3,
        "markScheme": "• Some drugs mimic neurotransmitters and bind to postsynaptic receptors, stimulating the postsynaptic neurone (agonists); e.g. nicotine mimics acetylcholine (1)\n• Some drugs block receptors, preventing the neurotransmitter from binding (antagonists); e.g. curare blocks ACh receptors (1)\n• Some drugs inhibit the breakdown or reuptake of neurotransmitters, prolonging their effect; e.g. SSRIs block serotonin reuptake (1)"
      },
      {
        "q": "Explain the neurological basis of Parkinson’s disease.",
        "marks": 3,
        "markScheme": "• Parkinson’s disease is caused by the death / degeneration of dopamine-producing neurones in the substantia nigra of the brain (1)\n• Reduced dopamine levels impair communication in the basal ganglia, which controls movement (1)\n• Symptoms include tremor, rigidity, slow movement (bradykinesia), and balance problems (1)"
      },
      {
        "q": "Describe how L-DOPA is used to treat Parkinson’s disease and explain its limitations.",
        "marks": 3,
        "markScheme": "• L-DOPA is a precursor to dopamine that can cross the blood-brain barrier (dopamine itself cannot) (1)\n• In the brain, L-DOPA is converted to dopamine, partially restoring dopamine levels and reducing symptoms (1)\n• Limitations: effectiveness decreases over time, side effects include nausea and involuntary movements, and it does not stop the underlying neurodegeneration (1)"
      },
      {
        "q": "Describe how a human protein used as a drug, such as insulin, can be produced using genetically modified bacteria.",
        "marks": 3,
        "markScheme": "• The human gene is obtained, e.g. cut out with restriction enzymes or made from mRNA using reverse transcriptase (1)\n• The gene is inserted into a plasmid (vector) using DNA ligase, and the recombinant plasmid is taken up by bacteria (1)\n• Transformed bacteria are identified (e.g. using a marker gene), grown in large numbers in a fermenter, and the protein is extracted and purified (1)"
      },
      {
        "q": "Explain how brain imaging techniques (e.g. MRI, fMRI, CT) are used in studying brain function.",
        "marks": 4,
        "markScheme": "• CT scans use X-rays to produce cross-sectional images of brain structure, useful for detecting tumours and bleeding (1)\n• MRI uses magnetic fields and radio waves to produce detailed structural images of the brain without radiation (1)\n• fMRI detects changes in blood flow / oxygenation to show which brain areas are active during specific tasks (1)\n• These techniques allow scientists to map brain function, diagnose disorders, and study the effects of damage or disease non-invasively (1)"
      },
      {
        "q": "Explain the concept of critical periods in brain development.",
        "marks": 2,
        "markScheme": "• Critical periods are specific time windows during development when the brain is particularly sensitive to certain stimuli / experiences (1)\n• If appropriate stimulation does not occur during the critical period (e.g. for language acquisition or vision), normal development may be permanently impaired (1)"
      },
      {
        "q": "Describe the role of the pupil reflex in protecting the eye.",
        "marks": 3,
        "markScheme": "• In bright light, the circular muscles of the iris contract and the radial muscles relax, constricting the pupil (1)\n• In dim light, the radial muscles contract and the circular muscles relax, dilating the pupil (1)\n• This is a reflex that protects the retina from damage by excessive light and maximises light entry in dim conditions (1)"
      },
      {
        "q": "Explain the difference between the central nervous system and the peripheral nervous system.",
        "marks": 2,
        "markScheme": "• The central nervous system (CNS) consists of the brain and spinal cord; it processes information and coordinates responses (1)\n• The peripheral nervous system (PNS) consists of sensory and motor neurones connecting the CNS to receptors and effectors throughout the body (1)"
      },
      {
        "q": "Explain the role of the refractory period in nerve impulse transmission.",
        "marks": 2,
        "markScheme": "• During the refractory period, sodium channels are inactivated and the membrane cannot be depolarised again immediately (1)\n• This ensures action potentials are discrete events, travel in one direction, and limits the maximum frequency of impulses (1)"
      },
      {
        "q": "Compare nervous and hormonal coordination in animals.",
        "marks": 3,
        "markScheme": "• Nervous: electrical impulses along neurones, with chemical transmission at synapses; hormonal: chemical hormones carried in the blood (1)\n• Nervous responses are rapid and short-lived; hormonal responses are slower and often longer-lasting (1)\n• Nervous responses are localised to specific effectors; hormones can affect many target cells with the right receptors around the body (1)"
      },
      {
        "q": "Explain the ethical issues surrounding the use of animals in brain research.",
        "marks": 4,
        "markScheme": "• Animal studies have provided valuable insights into brain function, drug development, and treatment of neurological diseases (1)\n• However, animals may experience pain, distress, and suffering during experiments (1)\n• There are questions about whether results from animal models can be reliably extrapolated to humans (1)\n• Ethical frameworks (e.g. the 3Rs: Replace, Reduce, Refine) aim to minimise animal use and suffering while still advancing scientific knowledge (1)"
      },
      {
        "q": "Describe how summation at a synapse can determine whether a postsynaptic action potential is generated.",
        "marks": 3,
        "markScheme": "• Temporal summation: multiple impulses from a single presynaptic neurone in quick succession build up neurotransmitter to reach the threshold (1)\n• Spatial summation: impulses from several presynaptic neurones converge on one postsynaptic neurone, combining their effects (1)\n• If the total depolarisation of the postsynaptic membrane reaches the threshold, an action potential is generated; if not, the signal is not transmitted (1)"
      },
      {
        "q": "Explain how MDMA (ecstasy) affects synaptic transmission.",
        "marks": 3,
        "markScheme": "• MDMA binds to the serotonin transporter proteins in the presynaptic membrane, inhibiting reuptake of serotonin (and triggering its release) (1)\n• Serotonin therefore stays in the synaptic cleft at a higher concentration (1)\n• It keeps binding to postsynaptic receptors, so the postsynaptic neurones are stimulated for longer, raising mood (1)"
      },
      {
        "q": "Draw a labelled diagram of a synapse showing the key structures involved in transmission.",
        "marks": 4,
        "diagram": true,
        "markScheme": "• Presynaptic terminal with synaptic vesicles containing neurotransmitter drawn and labelled (1)\n• Synaptic cleft between the two neurones shown (1)\n• Postsynaptic membrane with receptor proteins shown and labelled (1)\n• Mitochondria in the presynaptic terminal and calcium ion channels labelled (1)"
      },
      {
        "q": "Evaluate the use of drugs to treat depression by altering neurotransmitter levels.",
        "marks": 4,
        "markScheme": "• SSRIs block reuptake of serotonin, increasing its availability in the synaptic cleft and improving mood (1)\n• They are effective for many patients and have fewer side effects than older antidepressants (1)\n• However, they do not work for all patients, take weeks to show effects, and can have side effects such as nausea and anxiety (1)\n• The relationship between serotonin levels and depression is complex; drugs address symptoms but not underlying causes (1)"
      },
      {
        "q": "Explain why damage to specific areas of the brain can lead to loss of particular functions.",
        "marks": 2,
        "markScheme": "• Different brain regions are specialised for different functions (localisation of function) — e.g. Broca’s area for speech production, visual cortex for vision (1)\n• Damage to a specific area disrupts the neural circuits responsible for that function, leading to specific deficits (e.g. damage to Broca’s area causes speech difficulties) (1)"
      },
      {
        "q": "Describe how the fight-or-flight response is coordinated by the nervous and endocrine systems.",
        "marks": 4,
        "markScheme": "• A perceived threat activates the hypothalamus, which stimulates the sympathetic nervous system (1)\n• The adrenal medulla releases adrenaline into the bloodstream (1)\n• Adrenaline increases heart rate, breathing rate, and blood glucose levels, preparing the body for action (1)\n• Blood is diverted from the digestive system to skeletal muscles; pupils dilate to improve vision (1)"
      },
      {
        "q": "Explain how neuroplasticity allows the brain to recover from injury.",
        "marks": 3,
        "markScheme": "• Neuroplasticity is the brain’s ability to form new neural connections and reorganise existing pathways (1)\n• After injury, undamaged areas of the brain may take over functions previously performed by the damaged area (1)\n• Rehabilitation exercises promote the formation of new synaptic connections, aiding functional recovery (1)"
      },
      {
        "q": "Describe the difference between sensory, relay and motor neurones.",
        "marks": 3,
        "markScheme": "• Sensory neurones carry impulses from receptors to the CNS; they have a long dendron and short axon (1)\n• Relay neurones (interneurones) are found within the CNS and connect sensory and motor neurones (1)\n• Motor neurones carry impulses from the CNS to effectors (muscles/glands); they have a long axon and short dendrites (1)"
      },
      {
        "q": "Explain how a reflex arc enables a rapid, involuntary response to a stimulus.",
        "marks": 4,
        "markScheme": "• A receptor detects a stimulus and generates a nerve impulse in a sensory neurone (1)\n• The impulse passes through a relay neurone in the spinal cord (1)\n• The relay neurone transmits the impulse to a motor neurone, which carries it to an effector (muscle/gland) (1)\n• The response is rapid and involuntary because it does not require processing by the brain / the pathway is short with few synapses (1)"
      },
      {
        "q": "Explain how the visual cortex processes information from the eyes to create an image.",
        "marks": 3,
        "markScheme": "• Nerve impulses from photoreceptors in the retina travel via the optic nerve to the visual cortex in the occipital lobe (1)\n• The visual cortex contains neurones that respond to specific features such as edges, shapes, colours, and movement (1)\n• Information from both eyes is integrated to form a complete visual image, including depth perception from binocular vision (1)"
      },
      {
        "q": "Describe the evidence that different parts of the cerebral cortex have different functions.",
        "marks": 3,
        "markScheme": "• Studies of patients with brain damage show that damage to specific areas causes specific functional loss (e.g. Broca’s area damage impairs speech production) (1)\n• Electrical stimulation of different cortical areas during surgery produces specific responses (movement, sensations) (1)\n• Brain imaging (fMRI) shows that different regions are activated during different tasks (language, motor, visual) (1)"
      }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = { BIOLOGY_EDEXCEL_A_PRACTICE };
