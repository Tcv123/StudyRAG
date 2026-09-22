/*
 * Edexcel A (Salters-Nuffield, 9BN0) A-Level Biology — MCQ Question Bank
 * 50 questions per topic: 20 green (recall/basic), 20 amber (application), 10 red (analysis/evaluate)
 * answer: 0-based index of correct option.
 */

const BIOLOGY_EDEXCEL_A_QUESTIONS = {
  "S1": {
    "name": "Lifestyle, Health and Risk",
    "green": [
      {
        "q": "What is the name of the blood vessel that carries oxygenated blood away from the heart to the body?",
        "options": [
          "Pulmonary artery",
          "Vena cava",
          "Pulmonary vein",
          "Aorta"
        ],
        "answer": 3
      },
      {
        "q": "Which type of blood vessel has valves to prevent backflow?",
        "options": [
          "Veins",
          "Arterioles",
          "Capillaries",
          "Arteries"
        ],
        "answer": 0
      },
      {
        "q": "What is atherosclerosis?",
        "options": [
          "A viral infection",
          "A type of cancer",
          "Build-up of fatty deposits in artery walls",
          "Low blood pressure"
        ],
        "answer": 2
      },
      {
        "q": "Which molecule is the main component of an atheroma?",
        "options": [
          "Cholesterol",
          "Haemoglobin",
          "Glucose",
          "Glycogen"
        ],
        "answer": 0
      },
      {
        "q": "What is a thrombus?",
        "options": [
          "A type of white blood cell that engulfs bacteria",
          "A red blood cell",
          "A blood clot formed in a vessel",
          "A platelet"
        ],
        "answer": 2
      },
      {
        "q": "What does BMI stand for?",
        "options": [
          "Body Measurement Index",
          "Body Mass Index",
          "Basal Metabolic Indicator",
          "Blood Mass Index"
        ],
        "answer": 1
      },
      {
        "q": "Which chamber of the heart pumps blood to the lungs?",
        "options": [
          "Left atrium",
          "Right ventricle",
          "Left ventricle (via aorta)",
          "Right atrium"
        ],
        "answer": 1
      },
      {
        "q": "Why is water a good solvent for ions such as Na⁺ and Cl⁻ in blood plasma?",
        "options": [
          "Water molecules are non-polar, so they surround ions with a hydrophobic layer",
          "Water has a high specific heat capacity, so ions dissolve as the blood warms",
          "Water molecules are dipoles, so their charged ends are attracted to the ions",
          "Water molecules form covalent bonds with ions, holding them in the plasma"
        ],
        "answer": 2
      },
      {
        "q": "Which type of fat is associated with increased cardiovascular disease risk?",
        "options": [
          "Monounsaturated fat",
          "Saturated fat",
          "Polyunsaturated fat",
          "Omega-3 fatty acids"
        ],
        "answer": 1
      },
      {
        "q": "What is the double circulatory system?",
        "options": [
          "Two hearts pump blood",
          "Blood passes through the heart once per circuit",
          "Blood passes through the heart twice per complete circuit",
          "Blood flows in two directions"
        ],
        "answer": 2
      },
      {
        "q": "What is blood pressure measured in?",
        "options": [
          "Watts",
          "Pascals",
          "Joules",
          "mmHg"
        ],
        "answer": 3
      },
      {
        "q": "Which risk factor for CVD cannot be controlled?",
        "options": [
          "Genetic predisposition",
          "Exercise level and body mass",
          "Smoking",
          "Diet"
        ],
        "answer": 0
      },
      {
        "q": "What is the cardiac cycle?",
        "options": [
          "The clotting process",
          "The formation of blood cells",
          "The journey of blood around the body",
          "One complete heartbeat sequence of contraction and relaxation"
        ],
        "answer": 3
      },
      {
        "q": "What is diastole?",
        "options": [
          "Relaxation and filling of heart chambers",
          "Valve opening",
          "Contraction of heart chambers",
          "Blood clotting"
        ],
        "answer": 0
      },
      {
        "q": "What is systole?",
        "options": [
          "Relaxation of heart chambers",
          "Valve closure only",
          "Electrical conduction through the AVN",
          "Contraction of heart chambers"
        ],
        "answer": 3
      },
      {
        "q": "Which lipoprotein is considered \"bad\" cholesterol?",
        "options": [
          "Albumin",
          "HDL",
          "LDL (and VLDL)",
          "Both HDL and LDL equally"
        ],
        "answer": 2
      },
      {
        "q": "Which type of bond joins two monosaccharides together to form a disaccharide?",
        "options": [
          "Glycosidic bond",
          "Ester bond",
          "Peptide bond",
          "Hydrogen bond"
        ],
        "answer": 0
      },
      {
        "q": "Which polysaccharide is the main energy store in animal cells?",
        "options": [
          "Amylose",
          "Glycogen",
          "Lactose",
          "Maltose"
        ],
        "answer": 1
      },
      {
        "q": "Which molecules join in condensation reactions to form a triglyceride?",
        "options": [
          "Three monosaccharides joined by glycosidic bonds",
          "One glycerol molecule and three fatty acids",
          "Three glycerol molecules and one fatty acid",
          "Glycerol, a phosphate group and two fatty acids"
        ],
        "answer": 1
      },
      {
        "q": "During blood clotting, which enzyme converts soluble fibrinogen into insoluble fibrin?",
        "options": [
          "Amylase",
          "Prothrombin",
          "Thromboplastin",
          "Thrombin"
        ],
        "answer": 3
      }
    ],
    "amber": [
      {
        "q": "How does smoking increase the risk of cardiovascular disease?",
        "options": [
          "Carbon monoxide reduces oxygen carrying capacity and nicotine raises blood pressure",
          "It thins the blood",
          "It reduces heart rate",
          "It increases HDL cholesterol"
        ],
        "answer": 0
      },
      {
        "q": "What is the relationship between high blood pressure and atherosclerosis?",
        "options": [
          "High BP damages artery endothelium, promoting plaque formation",
          "High blood pressure dissolves existing plaques, so the two are negatively correlated",
          "They are unrelated",
          "Atherosclerosis causes low BP"
        ],
        "answer": 0
      },
      {
        "q": "Why do arteries have thick muscular walls?",
        "options": [
          "To produce hormones",
          "To store blood",
          "To absorb nutrients from the blood and store them for the muscles during exercise",
          "To withstand high pressure from ventricular contractions"
        ],
        "answer": 3
      },
      {
        "q": "How does a coronary thrombosis lead to a myocardial infarction?",
        "options": [
          "It strengthens the heart muscle by making it work harder to push blood past the clot",
          "A clot blocks coronary arteries, starving heart muscle of oxygen",
          "It increases blood flow",
          "It reduces cholesterol"
        ],
        "answer": 1
      },
      {
        "q": "What is the difference between a correlation and a causal relationship in epidemiological studies?",
        "options": [
          "They are the same thing",
          "Causation cannot be proven",
          "Correlation shows association; causation proves one factor directly causes another",
          "Correlation is always stronger"
        ],
        "answer": 2
      },
      {
        "q": "How do statins reduce the risk of CVD?",
        "options": [
          "They inhibit liver cholesterol production, lowering blood LDL levels",
          "They increase heart rate",
          "They widen arteries permanently",
          "They dissolve existing blood clots in the coronary arteries and prevent new ones forming"
        ],
        "answer": 0
      },
      {
        "q": "Why does the left ventricle have a thicker wall than the right?",
        "options": [
          "It beats faster",
          "It receives more blood",
          "It must generate higher pressure to pump blood around the entire body",
          "It contains more valves, which need thicker muscle around them to open and close them"
        ],
        "answer": 2
      },
      {
        "q": "How does HDL cholesterol reduce CVD risk?",
        "options": [
          "It promotes clotting",
          "It blocks arteries",
          "It increases blood pressure by carrying cholesterol from the liver into the artery walls",
          "It transports cholesterol from arteries back to the liver for breakdown"
        ],
        "answer": 3
      },
      {
        "q": "What happens during atrial systole?",
        "options": [
          "The ventricles contract, forcing blood into the arteries through the open semilunar valves",
          "Atria contract forcing blood into the ventricles through the AV valves",
          "All chambers relax",
          "Semilunar valves open"
        ],
        "answer": 1
      },
      {
        "q": "Why are capillary walls only one cell thick?",
        "options": [
          "To allow rapid diffusion of substances between blood and tissues",
          "To prevent clotting",
          "To withstand the high pressure of blood arriving directly from the ventricles each beat",
          "To store blood"
        ],
        "answer": 0
      },
      {
        "q": "How does regular exercise reduce CVD risk?",
        "options": [
          "It increases blood viscosity and heart rate at rest, which forces the heart to grow stronger",
          "It strengthens the heart, lowers resting BP, and increases HDL",
          "It raises LDL cholesterol",
          "It narrows arteries"
        ],
        "answer": 1
      },
      {
        "q": "What is the role of platelets in the formation of a thrombus?",
        "options": [
          "They digest fat",
          "They produce antibodies that bind to fibrin and dissolve any clot that forms in a vessel",
          "They clump together at damaged endothelium and release clotting factors",
          "They carry oxygen"
        ],
        "answer": 2
      },
      {
        "q": "How does obesity increase CVD risk?",
        "options": [
          "It reduces blood volume",
          "It lowers blood pressure",
          "It is linked to higher LDL, raised BP, and type 2 diabetes",
          "It strengthens the artery walls, which raises blood pressure and damages the heart"
        ],
        "answer": 2
      },
      {
        "q": "What is the difference between absolute and relative risk?",
        "options": [
          "Absolute risk is always higher",
          "Relative risk is more accurate",
          "They are identical",
          "Absolute risk is actual probability; relative risk compares risk between two groups"
        ],
        "answer": 3
      },
      {
        "q": "How do anticoagulants like warfarin help prevent CVD?",
        "options": [
          "They reduce blood pressure by widening arteries, so plaques shrink and disappear",
          "They lower cholesterol",
          "They reduce blood clotting, preventing thrombus formation",
          "They dissolve plaques"
        ],
        "answer": 2
      },
      {
        "q": "What is the role of the atrioventricular valves?",
        "options": [
          "Prevent backflow from ventricles to atria during ventricular systole",
          "Filter blood",
          "Oxygenate blood",
          "Pump blood forward"
        ],
        "answer": 0
      },
      {
        "q": "How does the structure of an artery relate to its function?",
        "options": [
          "Thin walls allow diffusion",
          "Valves prevent backflow",
          "Large lumen stores blood",
          "Thick elastic and muscular walls maintain blood pressure and withstand surges"
        ],
        "answer": 3
      },
      {
        "q": "During ventricular systole, what causes the atrioventricular valves to close?",
        "options": [
          "Pressure in the aorta rises above the pressure in the ventricles",
          "Pressure in the ventricles rises above the pressure in the atria",
          "Pressure in the atria rises above the pressure in the ventricles",
          "The walls of the atria contract and pull the valve flaps shut"
        ],
        "answer": 1
      },
      {
        "q": "Why might epidemiological data show a correlation between alcohol and CVD but not prove causation?",
        "options": [
          "Because correlation is stronger than causation, so any correlation proves alcohol protects the heart",
          "Alcohol has no effect on CVD",
          "Because all studies prove causation",
          "Confounding variables (diet, exercise, genetics) may influence results"
        ],
        "answer": 3
      },
      {
        "q": "Why is the highly branched structure of glycogen well suited to its role as an energy store?",
        "options": [
          "The branches make glycogen osmotically active, so it draws water into cells",
          "The many free ends can be hydrolysed at the same time, releasing glucose quickly",
          "The branches make glycogen soluble, so it can travel in the blood to other cells",
          "The branches form cross-links that give liver cells extra mechanical strength"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Evaluate the evidence linking saturated fat intake to cardiovascular disease.",
        "options": [
          "Epidemiological studies show a correlation, but controlled trials give mixed results and confounding factors make causation hard to prove",
          "All evidence is conclusive and undisputed",
          "There is no evidence at all",
          "Only animal studies support the link, and because rats and humans digest fat identically, no human data are needed to prove that saturated fat causes CVD"
        ],
        "answer": 0
      },
      {
        "q": "A study shows smokers have 3x the relative risk of CVD compared to non-smokers. If 5% of non-smokers develop CVD, what is the absolute risk for smokers?",
        "options": [
          "5%",
          "10%",
          "15%",
          "20%"
        ],
        "answer": 2
      },
      {
        "q": "Why is it difficult to design studies that definitively prove diet causes CVD in humans?",
        "options": [
          "Because CVD is not a real disease",
          "Because technology is lacking",
          "Ethical constraints prevent long-term controlled diet trials, and CVD develops over decades with many confounding lifestyle factors",
          "Because all diets are identical"
        ],
        "answer": 2
      },
      {
        "q": "Evaluate the use of statins as a preventive measure for CVD in the general population.",
        "options": [
          "Statins only work in young people",
          "Statins lower LDL and reduce CVD events, but side effects, cost and treating many low-risk people to prevent one event limit their value",
          "Statins cure CVD completely",
          "Statins have no side effects and cure CVD completely, so they should be given to everyone from childhood onwards, whatever their LDL level or risk"
        ],
        "answer": 1
      },
      {
        "q": "How might genetic factors explain why some individuals with high-fat diets do not develop CVD?",
        "options": [
          "Polymorphisms in genes for LDL receptors or lipid metabolism let some people clear cholesterol efficiently despite a high-fat diet",
          "Genetics play no role",
          "All people respond identically to dietary fat, so anyone eating a high-fat diet who stays healthy must be exercising enough to burn off all the extra fat",
          "Only exercise matters"
        ],
        "answer": 0
      },
      {
        "q": "Discuss why the incidence of CVD differs between countries, considering both lifestyle and genetic factors.",
        "options": [
          "It is the same everywhere",
          "Only diet matters",
          "Only genetics matters, because lifestyle is the same in every country and the populations with the highest CVD rates all carry a single dominant CVD allele",
          "Diets, smoking rates, exercise and healthcare differ between countries, and allele frequencies affecting lipid metabolism also vary between populations"
        ],
        "answer": 3
      },
      {
        "q": "A patient has a blood pressure of 160/100 mmHg. Explain why both values are clinically significant.",
        "options": [
          "These values are normal",
          "Raised systolic pressure strains artery walls during contraction; raised diastolic shows high resting pressure, so both increase atheroma risk",
          "Only the diastolic value matters, because systolic pressure is produced by the atria and has no effect on the artery walls between heartbeats at rest",
          "Only systolic matters"
        ],
        "answer": 1
      },
      {
        "q": "Evaluate the limitations of using BMI as a measure of health risk for CVD.",
        "options": [
          "BMI is a perfect measure",
          "BMI does not distinguish muscle from fat or show where fat is stored, so it misclassifies athletes and misses central obesity",
          "BMI measures cholesterol directly",
          "BMI accounts for all factors"
        ],
        "answer": 1
      },
      {
        "q": "Explain how the formation of an atheroma can lead to both a heart attack and a stroke.",
        "options": [
          "An atheroma can rupture and trigger a clot: in coronary arteries this blocks blood to heart muscle (MI); in brain arteries it causes a stroke",
          "Atheromas only affect the brain, where they block the veins draining the cerebrum; heart attacks are caused by weakened valves, not by blocked arteries",
          "Atheromas are harmless",
          "They only cause strokes"
        ],
        "answer": 0
      },
      {
        "q": "Critically assess the claim that \"reducing dietary cholesterol directly reduces blood cholesterol levels in all individuals.\"",
        "options": [
          "The claim only applies to children",
          "Dietary cholesterol has no effect",
          "The claim is always true, because blood cholesterol comes only from food, so halving dietary cholesterol halves the blood level in every person within a week",
          "The claim is oversimplified: the liver makes most blood cholesterol and adjusts production, and responses to dietary cholesterol vary between individuals"
        ],
        "answer": 3
      }
    ]
  },
  "S2": {
    "name": "Genes and Health",
    "green": [
      {
        "q": "What is a gene?",
        "options": [
          "An amino acid",
          "A type of cell",
          "A section of DNA that codes for a protein",
          "A chromosome"
        ],
        "answer": 2
      },
      {
        "q": "How many bases code for one amino acid?",
        "options": [
          "1",
          "4",
          "3",
          "2"
        ],
        "answer": 2
      },
      {
        "q": "What is the name of the bond between complementary bases in DNA?",
        "options": [
          "Hydrogen bond",
          "Peptide bond",
          "Covalent bond",
          "Ionic bond"
        ],
        "answer": 0
      },
      {
        "q": "What is a dominant allele?",
        "options": [
          "A mutated allele",
          "An allele that is only expressed when homozygous, and hidden in the heterozygote by any other allele",
          "An allele that is expressed in both homozygous and heterozygous states",
          "An allele on the Y chromosome"
        ],
        "answer": 2
      },
      {
        "q": "What is the structure of a phospholipid?",
        "options": [
          "Two fatty acid tails and a phosphate head",
          "Three fatty acid tails attached to a glycerol molecule",
          "A chain of nucleotides",
          "One amino acid chain"
        ],
        "answer": 0
      },
      {
        "q": "What is cystic fibrosis?",
        "options": [
          "A recessive genetic condition affecting the CFTR protein",
          "A bacterial infection",
          "A genetic condition caused by a dominant allele on the X chromosome",
          "A vitamin deficiency disease"
        ],
        "answer": 0
      },
      {
        "q": "What type of molecule is the CFTR protein?",
        "options": [
          "A hormone",
          "An enzyme",
          "A lipid",
          "A channel/transport protein in cell membranes"
        ],
        "answer": 3
      },
      {
        "q": "What is transcription?",
        "options": [
          "Translation of mRNA into protein at ribosomes",
          "Cell division",
          "DNA replication",
          "Copying DNA to mRNA in the nucleus"
        ],
        "answer": 3
      },
      {
        "q": "What is translation?",
        "options": [
          "Protein folding",
          "mRNA leaving the nucleus",
          "DNA copying",
          "Assembly of amino acids into a polypeptide at a ribosome"
        ],
        "answer": 3
      },
      {
        "q": "What is the role of tRNA?",
        "options": [
          "Carries genetic code from nucleus",
          "Carries specific amino acids to the ribosome during translation",
          "Makes up ribosomes",
          "Stores genetic information"
        ],
        "answer": 1
      },
      {
        "q": "What is a codon?",
        "options": [
          "A type of protein",
          "A chromosome region",
          "A single nucleotide",
          "A sequence of three bases on mRNA coding for an amino acid"
        ],
        "answer": 3
      },
      {
        "q": "What does heterozygous mean?",
        "options": [
          "No alleles present",
          "Two identical alleles",
          "Two different alleles for a gene",
          "Three alleles for a gene, one from each generation"
        ],
        "answer": 2
      },
      {
        "q": "What is a genotype?",
        "options": [
          "A type of protein",
          "The genetic makeup/alleles of an organism",
          "The environment of an organism",
          "The physical appearance of an organism and its behaviour"
        ],
        "answer": 1
      },
      {
        "q": "What is a phenotype?",
        "options": [
          "A type of mutation",
          "The observable characteristics of an organism",
          "A DNA sequence",
          "The alleles an organism has for each gene, written as letters"
        ],
        "answer": 1
      },
      {
        "q": "What type of transport moves substances across membranes against a concentration gradient?",
        "options": [
          "Facilitated diffusion",
          "Diffusion",
          "Osmosis",
          "Active transport"
        ],
        "answer": 3
      },
      {
        "q": "What is the fluid mosaic model?",
        "options": [
          "A description of the cell wall",
          "A description of cell membrane structure with phospholipids and proteins",
          "A model of DNA",
          "A type of diffusion"
        ],
        "answer": 1
      },
      {
        "q": "What is a mutation?",
        "options": [
          "Protein synthesis",
          "A change in the base sequence of DNA",
          "Normal cell division without any change to the chromosomes",
          "Meiosis"
        ],
        "answer": 1
      },
      {
        "q": "What is the genetic code described as?",
        "options": [
          "Random and variable",
          "Overlapping and ambiguous",
          "Non-overlapping, degenerate, and universal",
          "Species-specific and overlapping, with each base read in three codons"
        ],
        "answer": 2
      },
      {
        "q": "What bonds hold amino acids together in a polypeptide?",
        "options": [
          "Peptide bonds",
          "Ionic bonds",
          "Glycosidic bonds",
          "Hydrogen bonds"
        ],
        "answer": 0
      },
      {
        "q": "Where does transcription occur in eukaryotic cells?",
        "options": [
          "Nucleus",
          "Ribosome",
          "Cytoplasm",
          "Cell membrane"
        ],
        "answer": 0
      }
    ],
    "amber": [
      {
        "q": "How does the delta-F508 mutation cause cystic fibrosis?",
        "options": [
          "It adds extra amino acids",
          "It creates a premature stop codon near the start of the gene, so no CFTR protein is made at all and the channel is missing entirely",
          "Deletion of phenylalanine at position 508 causes CFTR protein misfolding, preventing it reaching the cell membrane",
          "It duplicates the gene"
        ],
        "answer": 2
      },
      {
        "q": "Explain how the structure of a phospholipid bilayer relates to membrane permeability.",
        "options": [
          "Hydrophobic core prevents passage of polar/charged molecules while allowing small non-polar molecules through",
          "It only allows water",
          "It is fully permeable to all molecules, since the phosphate heads allow ions and large polar molecules to pass freely",
          "It blocks all molecules"
        ],
        "answer": 0
      },
      {
        "q": "How does facilitated diffusion differ from simple diffusion?",
        "options": [
          "It requires ATP",
          "It moves substances against the concentration gradient using ATP from respiration in the mitochondria",
          "It only occurs in plants",
          "It uses channel or carrier proteins but moves down the concentration gradient without energy"
        ],
        "answer": 3
      },
      {
        "q": "What is the role of the CFTR protein in healthy epithelial cells?",
        "options": [
          "It acts as a chloride ion channel, allowing Cl- secretion which draws water out by osmosis, keeping mucus thin",
          "It breaks down proteins",
          "It transports oxygen",
          "It produces mucus in the epithelial cells and secretes it into the airways, where it traps bacteria and keeps the lungs free of dust"
        ],
        "answer": 0
      },
      {
        "q": "How can a genetic cross predict the probability of offspring having cystic fibrosis?",
        "options": [
          "Only if one parent is affected; two carriers always have offspring without CF in every pregnancy",
          "It always gives 50%",
          "If both parents are carriers (Ff x Ff), the cross shows 1 in 4 (25%) chance of ff offspring",
          "It cannot predict anything"
        ],
        "answer": 2
      },
      {
        "q": "Explain why the genetic code is described as degenerate.",
        "options": [
          "It changes over time",
          "Multiple different codons can code for the same amino acid",
          "Each codon codes for several different amino acids, depending on the cell type",
          "It contains errors"
        ],
        "answer": 1
      },
      {
        "q": "How does the primary structure of a protein determine its tertiary structure?",
        "options": [
          "It does not",
          "Only temperature determines shape",
          "The amino acid sequence determines folding patterns through interactions (H-bonds, disulfide bridges, ionic bonds, hydrophobic interactions) between R groups",
          "Primary structure is random"
        ],
        "answer": 2
      },
      {
        "q": "What is the effect of a substitution mutation on protein function?",
        "options": [
          "It always destroys the protein, because a change to one base alters every amino acid after it in the chain and stops translation",
          "It doubles the protein",
          "It always has no effect",
          "It may change one amino acid which could alter protein shape and function, or be silent due to code degeneracy"
        ],
        "answer": 3
      },
      {
        "q": "Chloride ions secreted by CFTR onto the airway surface attract water molecules. Why does this cause a net movement of water out of the epithelial cells?",
        "options": [
          "Water moves out by active transport, using ATP released as chloride ions leave the cell",
          "There are now fewer free water molecules outside the cell, so water moves out by osmosis",
          "Water molecules bound to the chloride ions are pumped out through the CFTR channel",
          "The chloride ions make the phospholipid bilayer fully permeable, so water leaks out"
        ],
        "answer": 1
      },
      {
        "q": "Why is genetic screening for CF carriers ethically controversial?",
        "options": [
          "It has no controversy",
          "Only cost is an issue",
          "Issues include insurance discrimination, reproductive pressure, psychological impact, and questions about who should have access to results",
          "It is always beneficial"
        ],
        "answer": 2
      },
      {
        "q": "How does the structure of DNA allow it to store vast amounts of genetic information?",
        "options": [
          "Its small size",
          "It is single-stranded",
          "It uses 20 bases",
          "The sequence of bases along the sugar-phosphate backbone provides a 4-letter code; with thousands of base pairs per gene, enormous variation is possible"
        ],
        "answer": 3
      },
      {
        "q": "Explain why a deletion mutation is likely to be more harmful than a substitution.",
        "options": [
          "It is always less harmful",
          "Deletions are silent",
          "Substitutions are always worse",
          "A deletion shifts the reading frame (frameshift), changing every subsequent codon and amino acid, usually producing a non-functional protein"
        ],
        "answer": 3
      },
      {
        "q": "How does cystic fibrosis impair the functioning of the digestive system?",
        "options": [
          "Thick mucus blocks the pancreatic duct, so fewer enzymes reach the small intestine",
          "Faulty CFTR is the enzyme that normally hydrolyses fats in the small intestine",
          "Extra chloride secretion makes the gut too acidic for digestive enzymes to work",
          "Thin, watery mucus washes digestive enzymes out of the small intestine too quickly"
        ],
        "answer": 0
      },
      {
        "q": "A section of the DNA template (antisense) strand has the base sequence TAC GGA. What is the sequence of the mRNA transcribed from it?",
        "options": [
          "AUG CCU",
          "AUC CCU",
          "ATG CCT",
          "UAC GGA"
        ],
        "answer": 0
      },
      {
        "q": "How does osmosis relate to the symptoms of cystic fibrosis?",
        "options": [
          "It does not",
          "Osmosis only affects plants",
          "Osmosis makes the mucus thinner, because the faulty CFTR pumps extra chloride into the cells and water follows it inwards",
          "Without Cl- secretion via CFTR, water is not drawn out by osmosis, so mucus remains thick and sticky"
        ],
        "answer": 3
      },
      {
        "q": "What is the significance of hydrogen bonds in DNA structure?",
        "options": [
          "They make DNA rigid",
          "They hold complementary bases together but are weak enough individually to allow separation during replication and transcription",
          "They bond nucleotides to sugars",
          "They connect chromosomes"
        ],
        "answer": 1
      },
      {
        "q": "How do carrier proteins differ from channel proteins?",
        "options": [
          "They are identical",
          "Carrier proteins use no energy and form permanent pores, while channel proteins change shape and actively pump specific molecules using ATP",
          "Carrier proteins change shape to move specific molecules; channel proteins form pores for ions to pass through",
          "Channels actively pump"
        ],
        "answer": 2
      },
      {
        "q": "What is one advantage of chorionic villus sampling (CVS) over amniocentesis for prenatal testing?",
        "options": [
          "It is only carried out after 20 weeks, when the fetus is larger",
          "It can be done earlier in pregnancy, at about 10–13 weeks",
          "It collects fetal cells from the amniotic fluid",
          "It carries no risk of miscarriage at all"
        ],
        "answer": 1
      },
      {
        "q": "What is a test cross and when would it be used?",
        "options": [
          "Crossing a dominant phenotype individual with a homozygous recessive to determine if the dominant is homozygous or heterozygous",
          "It tests for mutations",
          "Crossing two heterozygotes",
          "Crossing two homozygous recessive individuals, to find out whether the recessive allele is carried on a sex chromosome or on one of the autosomes"
        ],
        "answer": 0
      },
      {
        "q": "A mutation changes one amino acid a long way from the active site of an enzyme, yet the enzyme no longer works. What is the most likely explanation?",
        "options": [
          "The enzyme now has a different sequence of bases, so it cannot be translated at all",
          "It alters the bonds holding the tertiary structure, so the active site changes shape",
          "The new amino acid raises the activation energy by binding to the substrate directly",
          "Amino acids outside the active site are removed from the enzyme before it is used"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Meselson and Stahl grew E. coli on ¹⁵N and then transferred them to ¹⁴N. What would be seen after two generations, and what does it support?",
        "options": [
          "A single intermediate band only, supporting dispersive replication",
          "Equal intermediate and light bands, supporting semi-conservative replication",
          "A single light band, showing that all the ¹⁵N DNA has been broken down",
          "A heavy band and a light band in equal amounts, supporting conservative replication"
        ],
        "answer": 1
      },
      {
        "q": "A couple are both carriers of the CF allele. They already have one affected child. What is the probability their next child will be unaffected?",
        "options": [
          "50%",
          "100%",
          "25%",
          "75%"
        ],
        "answer": 3
      },
      {
        "q": "Two unaffected parents have a child with cystic fibrosis. What is the probability that their unaffected daughter is a carrier?",
        "options": [
          "2/3",
          "1/4",
          "1/2",
          "3/4"
        ],
        "answer": 0
      },
      {
        "q": "Evaluate the ethical issues surrounding pre-implantation genetic diagnosis (PGD) for CF.",
        "options": [
          "There are no ethical issues",
          "Issues include destroying unused embryos, selecting embryos by genotype and possible ‘designer babies’, weighed against preventing severe disease",
          "PGD is illegal everywhere",
          "It is universally accepted, because no embryos are created or discarded during PGD and no religious or ethical group has raised any objection to the procedure"
        ],
        "answer": 1
      },
      {
        "q": "Explain how a single base substitution in DNA can have no effect, a mild effect, or a severe effect on the organism.",
        "options": [
          "No effect if the codon still codes for the same amino acid; mild if a similar amino acid is substituted; severe if the active site or a stop codon changes",
          "All substitutions are lethal",
          "All substitutions are silent",
          "Only position matters"
        ],
        "answer": 0
      },
      {
        "q": "The thickness of a gas exchange surface doubles and its surface area halves, while the concentration difference is unchanged. According to Fick's law, what happens to the rate of diffusion?",
        "options": [
          "It halves",
          "It falls to an eighth",
          "It falls to a quarter",
          "It stays the same"
        ],
        "answer": 2
      },
      {
        "q": "Every third amino acid in each collagen polypeptide chain is glycine, which has the smallest R group. Why is this important for collagen's function?",
        "options": [
          "Glycine is highly hydrophilic, which makes collagen soluble in the blood plasma",
          "Its small R group lets the three chains coil tightly into a strong triple helix",
          "Glycine binds oxygen, so collagen can carry oxygen to tissues such as tendons",
          "Glycine forms disulfide bridges that join separate collagen fibres end to end"
        ],
        "answer": 1
      },
      {
        "q": "Discuss the evidence for and against population-wide carrier screening for CF.",
        "options": [
          "Screening is always harmful",
          "There is no debate",
          "For: informed reproductive choices and fewer affected births; against: cost, anxiety, false results and ethical concerns about selection",
          "Screening eliminates CF completely within one generation, because carriers identified by screening are legally prevented from having children with each other"
        ],
        "answer": 2
      },
      {
        "q": "Most men with cystic fibrosis are infertile even though their testes produce sperm. Which explanation fits best?",
        "options": [
          "Thick mucus in the urethra contains enzymes that digest the sperm before release",
          "CFTR is needed for meiosis, so the sperm produced contain no chromosomes at all",
          "The CF allele is carried on the Y chromosome, so it prevents sperm from forming",
          "The vas deferens is blocked by mucus or absent, so sperm cannot leave the testes"
        ],
        "answer": 3
      },
      {
        "q": "In a catalase experiment, a tangent is drawn to the curve of oxygen volume against time at t = 0. It passes through (0 s, 0 cm³) and (20 s, 8 cm³). What is the initial rate of reaction?",
        "options": [
          "0.4 cm³ s⁻¹",
          "2.5 cm³ s⁻¹",
          "160 cm³ s⁻¹",
          "8.0 cm³ s⁻¹"
        ],
        "answer": 0
      }
    ]
  },
  "S3": {
    "name": "Voice of the Genome",
    "green": [
      {
        "q": "What is a stem cell?",
        "options": [
          "A dead cell",
          "A gamete",
          "An undifferentiated cell capable of dividing and differentiating into specialised cell types",
          "A fully differentiated cell"
        ],
        "answer": 2
      },
      {
        "q": "What is mitosis?",
        "options": [
          "Cell division producing four haploid gametes for sexual reproduction",
          "Fertilisation",
          "Cell death",
          "Cell division producing two genetically identical daughter cells"
        ],
        "answer": 3
      },
      {
        "q": "What is meiosis?",
        "options": [
          "Division producing two genetically identical diploid body cells",
          "Division producing four genetically different haploid cells",
          "Protein synthesis",
          "DNA replication"
        ],
        "answer": 1
      },
      {
        "q": "What is a zygote?",
        "options": [
          "A sperm cell",
          "A stem cell",
          "A fertilised egg formed by fusion of gametes",
          "An unfertilised egg released from the ovary each month"
        ],
        "answer": 2
      },
      {
        "q": "What is differentiation?",
        "options": [
          "Mutation",
          "Cell division",
          "Cell death",
          "The process by which a cell becomes specialised for a particular function"
        ],
        "answer": 3
      },
      {
        "q": "How many chromosomes are in a human diploid cell?",
        "options": [
          "46",
          "92",
          "23",
          "12"
        ],
        "answer": 0
      },
      {
        "q": "What is a totipotent cell?",
        "options": [
          "A cancer cell",
          "A cell that can only become one type of specialised cell, such as a muscle fibre or neurone in the adult",
          "A cell that can differentiate into any cell type including extraembryonic tissue",
          "A dead cell"
        ],
        "answer": 2
      },
      {
        "q": "What is a pluripotent cell?",
        "options": [
          "A cell that can become any body cell type but not extraembryonic tissue",
          "A cell that is fully specialised and can no longer divide or change into any other type",
          "A gamete",
          "A prokaryotic cell"
        ],
        "answer": 0
      },
      {
        "q": "What are homologous chromosomes?",
        "options": [
          "Sex chromosomes only",
          "Pairs of chromosomes with the same genes at the same loci but potentially different alleles",
          "Bacterial chromosomes",
          "Identical chromosomes"
        ],
        "answer": 1
      },
      {
        "q": "What is the cell cycle?",
        "options": [
          "Protein synthesis",
          "The sequence of events from one cell division to the next, including interphase and mitosis",
          "Meiosis only",
          "Only mitosis"
        ],
        "answer": 1
      },
      {
        "q": "During which phase of the cell cycle does DNA replication occur?",
        "options": [
          "M phase",
          "S phase",
          "G2 phase",
          "G1 phase"
        ],
        "answer": 1
      },
      {
        "q": "What is a phenotype?",
        "options": [
          "The observable characteristics resulting from genotype and environment",
          "A DNA sequence",
          "The alleles an organism possesses, inherited from both of its parents at fertilisation",
          "A type of cell"
        ],
        "answer": 0
      },
      {
        "q": "Which organelle is the site of protein synthesis, found free in the cytoplasm and attached to the rough endoplasmic reticulum?",
        "options": [
          "Lysosome",
          "Ribosome",
          "Centriole",
          "Golgi apparatus"
        ],
        "answer": 1
      },
      {
        "q": "Which structure is found in a prokaryotic cell but not in a eukaryotic animal cell?",
        "options": [
          "Mitochondrion",
          "Nucleolus",
          "Golgi apparatus",
          "Plasmid"
        ],
        "answer": 3
      },
      {
        "q": "What is meant by a locus?",
        "options": [
          "The position of a gene on a chromosome",
          "A different version of the same gene",
          "The point where two sister chromatids join",
          "A pair of matching homologous chromosomes"
        ],
        "answer": 0
      },
      {
        "q": "What is the function of the acrosome in sperm?",
        "options": [
          "Energy production",
          "Stores DNA",
          "Contains enzymes to digest the zona pellucida of the egg",
          "Provides movement by beating like a flagellum to drive the sperm forwards"
        ],
        "answer": 2
      },
      {
        "q": "What triggers the cortical reaction after fertilisation?",
        "options": [
          "Light exposure",
          "Hormone release",
          "Temperature change",
          "Calcium ion release causes cortical granules to release enzymes, hardening the zona pellucida to prevent polyspermy"
        ],
        "answer": 3
      },
      {
        "q": "What is the zona pellucida?",
        "options": [
          "A glycoprotein layer surrounding the egg cell membrane",
          "The membrane that surrounds the nucleus of the egg",
          "An enzyme-filled vesicle at the tip of the sperm head",
          "The layer of follicle cells on the outside of the egg"
        ],
        "answer": 0
      },
      {
        "q": "What is a blastocyst?",
        "options": [
          "A type of tissue",
          "A mature egg",
          "A type of blood cell that develops in the bone marrow and carries oxygen around the developing embryo",
          "An early embryonic structure with an inner cell mass and outer trophoblast"
        ],
        "answer": 3
      },
      {
        "q": "What does haploid mean?",
        "options": [
          "Having two sets of chromosomes",
          "Having no chromosomes",
          "Having one set of chromosomes",
          "Having three sets"
        ],
        "answer": 2
      }
    ],
    "amber": [
      {
        "q": "How does gene expression differ between a muscle cell and a nerve cell despite having identical DNA?",
        "options": [
          "There is no difference",
          "They have different DNA",
          "They have different numbers of chromosomes, because muscle cells lose some chromosomes as they differentiate into long fibres",
          "Different genes are switched on/off through transcription factors and epigenetic modifications, producing different proteins"
        ],
        "answer": 3
      },
      {
        "q": "Explain how crossing over during meiosis contributes to genetic variation.",
        "options": [
          "It only occurs in mitosis",
          "Homologous chromosomes exchange segments during prophase I, creating new allele combinations on each chromatid",
          "It does not",
          "It reduces variation, because homologous chromosomes swap identical segments so each chromatid ends up with the same alleles"
        ],
        "answer": 1
      },
      {
        "q": "How does independent assortment of chromosomes during meiosis produce genetic variation?",
        "options": [
          "It only affects sex chromosomes",
          "It produces identical gametes, because homologous pairs always line up with the maternal chromosomes on the same side of the metaphase plate every time",
          "Homologous pairs line up randomly at metaphase I, so each gamete receives a different combination of maternal and paternal chromosomes",
          "It does not"
        ],
        "answer": 2
      },
      {
        "q": "What is the role of transcription factors in cell differentiation?",
        "options": [
          "They destroy mRNA",
          "They form the cytoskeleton of the cell, giving each type of cell its distinctive shape, which then determines the proteins it makes",
          "They bind to promoter regions to activate or repress specific genes, determining which proteins a cell produces",
          "They replicate DNA"
        ],
        "answer": 2
      },
      {
        "q": "Explain how the structure of a sperm cell is adapted for its function.",
        "options": [
          "It has a cell wall",
          "Streamlined head with haploid nucleus, acrosome with digestive enzymes, many mitochondria in midpiece for ATP, and flagellum for motility",
          "It is identical to an egg, with a large cytoplasm full of food stores, few mitochondria and no flagellum, so it is carried passively to the egg by the female reproductive tract",
          "It has no adaptations"
        ],
        "answer": 1
      },
      {
        "q": "How does epigenetic modification (methylation) affect gene expression?",
        "options": [
          "Methyl groups added to DNA/histones can silence genes by preventing transcription factor binding, without altering the base sequence",
          "It changes the DNA base sequence by adding methyl groups to adenine, so the gene codes for a different protein that is passed on to daughter cells",
          "It only affects gametes",
          "It always activates genes"
        ],
        "answer": 0
      },
      {
        "q": "What is the significance of the cortical reaction in fertilisation?",
        "options": [
          "It provides nutrients",
          "It triggers the first cell division of the zygote and releases enzymes that let more sperm enter the egg",
          "It determines sex",
          "It prevents polyspermy by hardening the zona pellucida so no additional sperm can enter"
        ],
        "answer": 3
      },
      {
        "q": "How do environmental factors interact with genotype to determine phenotype?",
        "options": [
          "Factors like nutrition, temperature, and light can influence gene expression and protein function, modifying the phenotypic outcome of a given genotype",
          "Only the environment determines phenotype, because the genotype is the same in every individual of a species, so differences in nutrition, temperature and light produce all of the variation seen",
          "Genotype has no effect",
          "Environment has no effect"
        ],
        "answer": 0
      },
      {
        "q": "Explain the difference between totipotent, pluripotent, and multipotent stem cells.",
        "options": [
          "Totipotent can form any cell type plus placenta; pluripotent can form any body cell; multipotent can only form cells within a specific tissue lineage",
          "Multipotent is the most versatile",
          "Totipotent only forms blood cells",
          "They are all the same"
        ],
        "answer": 0
      },
      {
        "q": "How does the cell cycle ensure genetic consistency during mitosis?",
        "options": [
          "Only meiosis is controlled",
          "Cells divide randomly",
          "It does not",
          "DNA replication in S phase produces identical copies; checkpoints verify accuracy; mitosis separates sister chromatids equally to daughter cells"
        ],
        "answer": 3
      },
      {
        "q": "A secretory cell makes an extracellular enzyme. Which sequence shows the route the enzyme takes out of the cell?",
        "options": [
          "Ribosome on rER, smooth ER, nucleus, Golgi apparatus, vesicle, cell surface membrane",
          "Ribosome on rER, rER lumen, vesicle, Golgi apparatus, vesicle, cell surface membrane",
          "Golgi apparatus, rER lumen, ribosome on rER, vesicle, lysosome, cell surface membrane",
          "Free ribosome, cytoplasm, lysosome, Golgi apparatus, vesicle, cell surface membrane"
        ],
        "answer": 1
      },
      {
        "q": "What happens to a protein in the Golgi apparatus before it is secreted from the cell?",
        "options": [
          "It is transcribed again and its mRNA is moved into the nucleolus",
          "It is translated from mRNA into a polypeptide chain on its ribosomes",
          "It is modified, e.g. by adding carbohydrate, and packed into vesicles",
          "It is broken down by hydrolytic enzymes into its separate amino acids"
        ],
        "answer": 2
      },
      {
        "q": "Lactose is added to a culture of E. coli that was growing without lactose. Why do the bacteria start producing beta-galactosidase?",
        "options": [
          "Lactose binds to the repressor, changing its shape so it no longer binds to the operator",
          "Lactose binds to the operator, so RNA polymerase can then bind to the promoter",
          "Lactose binds to RNA polymerase and activates it to transcribe the repressor gene",
          "The repressor protein hydrolyses lactose, releasing glucose that switches the gene on"
        ],
        "answer": 0
      },
      {
        "q": "Two genes are close together on the same chromosome. Why are their alleles usually inherited together?",
        "options": [
          "They assort independently into different gametes in meiosis",
          "They are at the same locus, so they code for one protein",
          "They are linked, so crossing over rarely separates them",
          "They are sex-linked, so they are only passed on to sons"
        ],
        "answer": 2
      },
      {
        "q": "A man with haemophilia (an X-linked recessive condition) has children with a woman who is homozygous for the normal allele. What proportion of their daughters will be carriers?",
        "options": [
          "50%",
          "100%",
          "0%",
          "25%"
        ],
        "answer": 1
      },
      {
        "q": "Human height shows continuous variation. Which explanation best accounts for this?",
        "options": [
          "It is controlled by one gene with multiple alleles and is not affected by diet",
          "It is determined only by the environment, such as the diet eaten during childhood",
          "It is controlled by a single gene with two alleles, one of which is dominant",
          "It is controlled by many genes at different loci and is affected by the environment"
        ],
        "answer": 3
      },
      {
        "q": "How can an epigenetic change in one stem cell be present in all the cells produced from it?",
        "options": [
          "The methylation pattern is copied onto the new DNA strand when the DNA replicates",
          "The histones are destroyed in mitosis, so the gene is permanently switched on",
          "The base sequence is changed, and this mutation is copied when the DNA replicates",
          "The methyl groups are removed in mitosis and re-added at random in each new cell"
        ],
        "answer": 0
      },
      {
        "q": "How is X-inactivation an example of epigenetic control?",
        "options": [
          "It is not epigenetic",
          "Only males have X-inactivation",
          "Both X chromosomes are active",
          "One X chromosome is silenced by methylation and histone modification in each cell of XX females, forming a Barr body, without changing DNA sequence"
        ],
        "answer": 3
      },
      {
        "q": "Which list is in order of increasing level of organisation?",
        "options": [
          "Epithelium, epithelial cell, digestive system, stomach",
          "Epithelial cell, stomach, epithelium, digestive system",
          "Epithelial cell, epithelium, stomach, digestive system",
          "Stomach, epithelium, epithelial cell, digestive system"
        ],
        "answer": 2
      },
      {
        "q": "What happens during the acrosome reaction?",
        "options": [
          "Cortical granules release their contents, making the zona pellucida harder",
          "The acrosome releases digestive enzymes that break down the zona pellucida",
          "The egg completes its second meiotic division and the two nuclei fuse",
          "The sperm cell membrane fuses with the egg membrane and the sperm nucleus enters"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Evaluate the ethical arguments for and against using human embryonic stem cells in medical research.",
        "options": [
          "It is universally accepted",
          "It is banned worldwide, because embryonic stem cells cannot divide in culture or differentiate, so there are no medical benefits to set against any concerns",
          "For: potential to treat many diseases, using spare IVF embryos; against: destroys potential human life, and alternatives such as iPSCs exist",
          "There are no ethical issues"
        ],
        "answer": 2
      },
      {
        "q": "Discuss how our understanding of epigenetics challenges the traditional view that DNA sequence alone determines phenotype.",
        "options": [
          "Epigenetics only affects plants",
          "Methylation and histone acetylation change gene expression without altering the DNA sequence, so identical genotypes can give different phenotypes",
          "DNA sequence is irrelevant",
          "Epigenetics supports the traditional view, because every epigenetic mark is a change in the base sequence, so phenotype still depends on DNA sequence alone"
        ],
        "answer": 1
      },
      {
        "q": "In a root tip squash, 32 of 400 cells close to the tip were in mitosis, compared with 6 of 400 cells 5 mm from the tip. Which conclusion is best supported?",
        "options": [
          "The mitotic index is 0.08 near the tip and 0.015 at 5 mm, so most cell division occurs close to the tip",
          "The mitotic index is 0.08 near the tip, so 8% of the cells there are in interphase at any one time",
          "The mitotic index is 12.5 near the tip, so those cells divide about 12 times faster than cells further back",
          "The mitotic index is the same in both regions, because every cell in a root divides at the same rate"
        ],
        "answer": 0
      },
      {
        "q": "A researcher proposes using induced pluripotent stem cells (iPSCs) instead of embryonic stem cells. Evaluate this approach.",
        "options": [
          "iPSCs are identical to embryonic stem cells in every way, so they carry no risk of tumours, need no reprogramming and are already used routinely in hospitals",
          "iPSCs avoid embryo destruction and rejection, being patient-specific, but reprogramming is inefficient and may cause tumours",
          "iPSCs cannot differentiate",
          "ESCs are always superior"
        ],
        "answer": 1
      },
      {
        "q": "A woman with normal colour vision, whose father was red-green colour blind (X-linked recessive), has children with a man with normal colour vision. What is the probability that a son of theirs is colour blind?",
        "options": [
          "0, because the father has normal vision and passes his X chromosome to his sons",
          "1.0, because the mother carries the allele and sons have only one X chromosome",
          "0.5, because each son receives one of his mother's two X chromosomes at random",
          "0.25, because one in four of all their children are expected to be colour blind"
        ],
        "answer": 2
      },
      {
        "q": "Evaluate the potential of therapeutic cloning compared to other stem cell sources for treating degenerative diseases.",
        "options": [
          "Therapeutic cloning has no advantages",
          "It is identical to reproductive cloning",
          "It has been abandoned",
          "It produces patient-matched ESCs that avoid rejection, but it is inefficient, costly and ethically contested as it creates embryos"
        ],
        "answer": 3
      },
      {
        "q": "Discuss how the interaction between genetic and environmental factors during critical periods of development can have lifelong effects on phenotype.",
        "options": [
          "Critical periods do not exist",
          "Only adult experiences matter",
          "Only genes matter, since the phenotype is fixed at fertilisation, and the environment during development has no effect on gene expression or on adult health",
          "During critical periods developing systems are especially sensitive, so poor nutrition or stress can alter gene expression with lifelong effects"
        ],
        "answer": 3
      },
      {
        "q": "E. coli growing without lactose is moved to a medium containing only lactose. Beta-galactosidase activity rises only after a delay of several minutes. Which explanation fits?",
        "options": [
          "Lactose must bind the repressor so the genes can be transcribed, and the enzyme must then be translated",
          "The enzyme was already present but inactive, and lactose must bind to it as a cofactor to activate it",
          "Lactose must first be hydrolysed outside the cell by the repressor before the gene can be switched on",
          "The bacteria must first mutate their lac genes so that they can make an enzyme able to use lactose"
        ],
        "answer": 0
      },
      {
        "q": "Critically assess the claim that \"nature is more important than nurture\" in determining human characteristics.",
        "options": [
          "The dichotomy is false: genes and environment interact continuously, e.g. through epigenetics, so most traits depend on both",
          "Nurture is always more important",
          "Nature is always more important",
          "They never interact"
        ],
        "answer": 0
      },
      {
        "q": "A study shows identical twins raised apart have different rates of a disease. Discuss what this reveals about gene-environment interactions.",
        "options": [
          "It proves genes are irrelevant",
          "Different environments have altered gene expression epigenetically, so the same genotype can give different disease risks",
          "Identical twins always have identical health, so the study must contain errors; different disease rates cannot arise from the same genotype in any environment",
          "It proves environment is irrelevant"
        ],
        "answer": 1
      }
    ]
  },
  "S4": {
    "name": "Biodiversity and Natural Resources",
    "green": [
      {
        "q": "What is biodiversity?",
        "options": [
          "The size of a population",
          "The variety of living organisms in an area, including species diversity, genetic diversity, and ecosystem diversity",
          "The number of habitats",
          "The number of animals in a zoo"
        ],
        "answer": 1
      },
      {
        "q": "What is a species?",
        "options": [
          "A type of ecosystem",
          "A family of plants",
          "Any group of organisms that live in the same habitat and share a food source",
          "A group of organisms that can interbreed to produce fertile offspring"
        ],
        "answer": 3
      },
      {
        "q": "What is the binomial system of naming organisms?",
        "options": [
          "Using common names",
          "A two-part Latin name: genus and species",
          "Numbering organisms",
          "Using DNA codes and numbers for each organism"
        ],
        "answer": 1
      },
      {
        "q": "What is taxonomy?",
        "options": [
          "The classification of organisms into groups based on shared characteristics",
          "The study of taxes",
          "Ecology",
          "DNA sequencing"
        ],
        "answer": 0
      },
      {
        "q": "What is the correct order of taxonomic hierarchy from largest to smallest?",
        "options": [
          "Kingdom, Domain, Phylum, Class, Family, Order, Genus, Species",
          "Genus, Species, Family, Class, Order, Phylum, Kingdom, Domain",
          "Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species",
          "Species, Genus, Family, Order, Class, Phylum, Kingdom, Domain"
        ],
        "answer": 2
      },
      {
        "q": "Which structure in a plant cell links the cytoplasm of one cell with the cytoplasm of the next cell?",
        "options": [
          "Plasmodesma",
          "Amyloplast",
          "Middle lamella",
          "Tonoplast"
        ],
        "answer": 0
      },
      {
        "q": "What is sustainability?",
        "options": [
          "Stopping all human activity",
          "Meeting current needs without compromising the ability of future generations to meet theirs",
          "Only using renewable energy",
          "Using resources as quickly as possible to maximise economic growth before they run out elsewhere"
        ],
        "answer": 1
      },
      {
        "q": "What is a habitat?",
        "options": [
          "A type of adaptation",
          "The role of an organism in its ecosystem",
          "The place where an organism lives",
          "A food source"
        ],
        "answer": 2
      },
      {
        "q": "What is cellulose?",
        "options": [
          "An animal protein that forms tendons and ligaments and strengthens the skin tissue",
          "A type of lipid",
          "A mineral",
          "A structural polysaccharide made of beta-glucose in plant cell walls"
        ],
        "answer": 3
      },
      {
        "q": "What is starch?",
        "options": [
          "An animal storage molecule",
          "A nucleic acid",
          "A storage polysaccharide made of alpha-glucose in plants",
          "A protein used for transport of glucose in the blood of animals"
        ],
        "answer": 2
      },
      {
        "q": "What is the function of xylem tissue?",
        "options": [
          "Transport of amino acids and sugars downward from the leaves to the roots",
          "Transport of water and mineral ions upward; structural support",
          "Transport of sugars",
          "Photosynthesis"
        ],
        "answer": 1
      },
      {
        "q": "What is the function of phloem tissue?",
        "options": [
          "Transport of dissolved sugars (translocation) from source to sink",
          "Structural support only",
          "Transport of water and minerals upward from the roots to the leaves",
          "Water transport"
        ],
        "answer": 0
      },
      {
        "q": "What is meant by endemic species?",
        "options": [
          "Invasive species",
          "Extinct species",
          "Species found everywhere across the world in a wide range of habitats",
          "Species found naturally only in one particular geographic area"
        ],
        "answer": 3
      },
      {
        "q": "What is a niche?",
        "options": [
          "The role an organism plays in its ecosystem including all interactions and resource use",
          "A type of species",
          "A food web",
          "A habitat"
        ],
        "answer": 0
      },
      {
        "q": "Which kingdom do fungi belong to?",
        "options": [
          "Protoctista",
          "Plantae",
          "Animalia",
          "Fungi"
        ],
        "answer": 3
      },
      {
        "q": "What is ex situ conservation?",
        "options": [
          "Conservation outside natural habitats, such as in zoos, seed banks, or botanical gardens",
          "Conservation in natural habitats",
          "Habitat destruction",
          "Hunting management"
        ],
        "answer": 0
      },
      {
        "q": "What is in situ conservation?",
        "options": [
          "Conservation in laboratories and zoos, away from the threats of the natural habitat",
          "Museum preservation",
          "Captive breeding only",
          "Conservation in the natural habitat, such as nature reserves and national parks"
        ],
        "answer": 3
      },
      {
        "q": "What is a phylogenetic tree?",
        "options": [
          "A type of plant",
          "A branching diagram showing evolutionary relationships between organisms",
          "A classification key used to identify organisms from their physical features in the field",
          "A food web"
        ],
        "answer": 1
      },
      {
        "q": "In the index of diversity used in 9BN0, D = N(N − 1) / Σn(n − 1), what does N represent?",
        "options": [
          "The number of different species in the habitat",
          "The number of samples taken in the habitat",
          "The total number of organisms of all species",
          "The number of organisms of each separate species"
        ],
        "answer": 2
      },
      {
        "q": "What is deforestation?",
        "options": [
          "Planting trees",
          "A type of conservation in which woodland is replanted",
          "The large-scale removal of forest or woodland",
          "Natural forest growth"
        ],
        "answer": 2
      }
    ],
    "amber": [
      {
        "q": "How does natural selection lead to adaptation?",
        "options": [
          "All organisms adapt equally",
          "Only the strongest individuals survive in each generation, and they change their own characteristics during life so that their offspring inherit the improved traits",
          "Organisms choose to change",
          "Individuals with advantageous traits survive and reproduce more, passing alleles to offspring; over generations the population becomes better adapted"
        ],
        "answer": 3
      },
      {
        "q": "Explain how the structure of cellulose relates to its function in plant cell walls.",
        "options": [
          "It stores energy",
          "Beta-glucose monomers form straight chains with hydrogen bonds between them, creating strong microfibrils that resist tensile forces",
          "It is water-soluble and made of alpha-glucose in branched chains, so it dissolves into the cell wall and can be broken down to release energy when needed",
          "It is easily digested"
        ],
        "answer": 1
      },
      {
        "q": "How does the structure of xylem vessels relate to their function?",
        "options": [
          "Dead, hollow, continuous tubes with lignified walls provide strength and uninterrupted water flow with no end walls to impede movement",
          "They are living cells",
          "They contain chloroplasts",
          "They have thin, flexible walls made of living cells with cytoplasm and end walls, which pump water upwards using ATP from their own mitochondria"
        ],
        "answer": 0
      },
      {
        "q": "How do hydrogen bonds between cellulose molecules contribute to cell wall strength?",
        "options": [
          "They have no structural role",
          "Many hydrogen bonds between parallel cellulose chains form strong microfibrils; bundles of microfibrils create a tough, rigid structure",
          "They dissolve easily",
          "They make walls flexible and elastic, because hydrogen bonds break and reform constantly so that the cellulose chains slide past each other freely"
        ],
        "answer": 1
      },
      {
        "q": "Why can bioplastics made from starch contribute to sustainability more than oil-based plastics?",
        "options": [
          "They are made from fossil carbon, so they last longer before they are discarded",
          "They cannot be broken down by microorganisms, so they do not pollute landfill",
          "They need more oil to manufacture, so less oil is burned as fuel instead",
          "They come from a renewable crop and can be broken down by microorganisms"
        ],
        "answer": 3
      },
      {
        "q": "Using D = N(N − 1) / Σn(n − 1), a student finds D = 1.8 for habitat X and D = 4.6 for habitat Y. Which conclusion is correct?",
        "options": [
          "Y is more diverse: a higher D means more species or a more even spread",
          "They cannot be compared, because D only counts the number of species",
          "X is more diverse, because a value of D closer to 1 shows greater diversity",
          "Y contains about 4.6 species in every quadrat that the student sampled"
        ],
        "answer": 0
      },
      {
        "q": "Explain the role of natural selection in speciation.",
        "options": [
          "Only mutation causes speciation",
          "Geographic or reproductive isolation leads to different selection pressures; natural selection acts differently on separated populations, accumulating genetic differences until reproductive isolation is complete",
          "It prevents speciation",
          "Speciation is random"
        ],
        "answer": 1
      },
      {
        "q": "How do zoos contribute to conservation through captive breeding programmes?",
        "options": [
          "They replace natural habitats entirely, so animals bred in zoos are never released, and captive populations are kept small and closely related to make breeding easier to manage",
          "They only keep common species",
          "They maintain genetically diverse breeding populations of endangered species, with potential for reintroduction; they also fund research and educate the public",
          "They only entertain visitors"
        ],
        "answer": 2
      },
      {
        "q": "How does drug development from plants illustrate the value of biodiversity?",
        "options": [
          "Only synthetic drugs work",
          "Many medicines (aspirin, taxol, quinine) derive from plant compounds; loss of species means potential loss of undiscovered drugs; this provides an economic argument for conservation",
          "All plants are medicinal",
          "Plants have no medicinal use"
        ],
        "answer": 1
      },
      {
        "q": "Explain why maintaining genetic diversity within a species is important for its survival.",
        "options": [
          "Greater genetic diversity increases the chance some individuals can survive environmental changes, diseases, or new selection pressures, preventing population collapse",
          "Genetic diversity is unimportant",
          "All individuals of a species should be genetically identical, because variation reduces fitness, so populations with low diversity survive new diseases and environmental changes better",
          "Only dominant alleles matter"
        ],
        "answer": 0
      },
      {
        "q": "How does phylogenetic classification differ from traditional morphological classification?",
        "options": [
          "Morphological classification is always more accurate, because physical features never evolve independently in unrelated groups, while DNA evidence cannot show relatedness between organisms",
          "Phylogenetic uses DNA/molecular evidence to group by evolutionary relatedness; morphological groups by physical similarities which may be convergent rather than homologous",
          "Phylogenetic ignores DNA",
          "They are identical"
        ],
        "answer": 1
      },
      {
        "q": "Explain how seed banks contribute to conservation of plant biodiversity.",
        "options": [
          "They are only for agriculture, storing seeds of a few crop varieties at room temperature for one season, so they preserve no wild genetic diversity and cannot help restore natural populations",
          "They replace natural habitats",
          "They store seeds from many species at low temperatures; this preserves genetic diversity, provides insurance against extinction, and allows future restoration of populations",
          "They grow crops only"
        ],
        "answer": 2
      },
      {
        "q": "How does overexploitation of fish stocks threaten marine biodiversity?",
        "options": [
          "It has no effect",
          "It only affects one species",
          "Fish populations always recover quickly because they produce millions of eggs, so removing fish has no lasting effect on food webs or genetic diversity at all",
          "Removing fish faster than they can reproduce disrupts food webs, reduces genetic diversity, may cause population collapse, and affects dependent species"
        ],
        "answer": 3
      },
      {
        "q": "In a population, 16% of individuals show a recessive phenotype. Assuming Hardy–Weinberg equilibrium, what is the frequency of heterozygotes?",
        "options": [
          "0.36",
          "0.24",
          "0.84",
          "0.48"
        ],
        "answer": 3
      },
      {
        "q": "How does climate change threaten biodiversity?",
        "options": [
          "Only polar species are affected",
          "It has no effect",
          "Changing temperatures and weather patterns alter habitats faster than many species can adapt or migrate, causing range shifts, phenological mismatches, and increased extinction risk",
          "It increases biodiversity"
        ],
        "answer": 2
      },
      {
        "q": "Explain the difference between amylose and amylopectin in starch structure and function.",
        "options": [
          "Amylose is unbranched (alpha-1,4 links) forming compact helices for long-term storage; amylopectin is branched (alpha-1,6 links) allowing rapid hydrolysis for quick energy release",
          "They are identical",
          "Amylopectin is structural",
          "Amylose is branched"
        ],
        "answer": 0
      },
      {
        "q": "In a sample of 150 cheetahs, 12 are heterozygous at a particular gene locus. What is the heterozygosity index (H) for this locus?",
        "options": [
          "0.12",
          "12.5",
          "0.08",
          "0.92"
        ],
        "answer": 2
      },
      {
        "q": "Explain how habitat fragmentation reduces biodiversity.",
        "options": [
          "It has no effect",
          "It increases biodiversity, because each isolated patch develops its own species, gene flow between populations rises across the roads and fields, and edge effects create stable new habitats",
          "Smaller isolated patches support fewer species, reduce gene flow between populations, increase edge effects, and make populations more vulnerable to stochastic events",
          "It only affects birds"
        ],
        "answer": 2
      },
      {
        "q": "How does the three-domain classification system differ from the five-kingdom system?",
        "options": [
          "Five-kingdom has more domains",
          "Three-domain ignores evolution",
          "They are identical",
          "Three-domain (Bacteria, Archaea, Eukarya) is based on molecular phylogenetics and rRNA analysis, recognising Archaea as distinct from Bacteria; five-kingdom grouped all prokaryotes together"
        ],
        "answer": 3
      },
      {
        "q": "A seedling grown in a culture solution lacking magnesium ions develops yellow leaves. What is the explanation?",
        "options": [
          "Magnesium is needed to make chlorophyll, so less chlorophyll is formed",
          "Magnesium is needed to make cellulose, so the leaves cannot stay rigid",
          "Magnesium is needed to make proteins, so no new cells can be produced",
          "Magnesium is needed for calcium pectate, so the cell walls break down"
        ],
        "answer": 0
      }
    ],
    "red": [
      {
        "q": "Evaluate the arguments for and against in situ versus ex situ conservation strategies.",
        "options": [
          "Neither approach works",
          "In situ is always better",
          "Ex situ is always better, because zoos and seed banks keep every species safe and reintroduced animals always survive and breed normally once they are released",
          "In situ keeps natural behaviours and ecosystem links but may fail against threats; ex situ protects and breeds species but they may not survive release"
        ],
        "answer": 3
      },
      {
        "q": "A new drug is tested in a double-blind, placebo-controlled trial. Which statement best explains why this design is used?",
        "options": [
          "Neither patients nor doctors know who has the drug, so expectations cannot bias results; comparing with the placebo group shows the drug's own effect",
          "Patients know they are receiving the drug, so they report its effects honestly, while the doctors are blinded so that they can adjust the dose safely",
          "Healthy volunteers receive the placebo first to test its safety, and patients then receive the drug to find out whether it works against the disease",
          "Twice as many patients receive the drug as receive the placebo, so that any rare side effects are detected in the first phase of the drug trial"
        ],
        "answer": 0
      },
      {
        "q": "Critically assess the use of the index of diversity (D) as the only measure of the conservation value of a habitat.",
        "options": [
          "It uses species richness and the numbers of each species, but ignores endemism, rarity and genetic diversity",
          "It has no limitations, because a habitat with a higher D is always more valuable for conservation",
          "It is a complete measure, because it includes every aspect of biodiversity, including genetic diversity",
          "It is not useful at all, because it counts only the number of species present and ignores their abundance"
        ],
        "answer": 0
      },
      {
        "q": "After insecticide spraying began, the frequency of a resistance allele in a mosquito population rose from 0.1 to 0.4 over 20 generations. Which conclusion is best supported?",
        "options": [
          "The heterozygote frequency must have stayed constant at 0.18, showing that no evolution has taken place",
          "The population is not in Hardy–Weinberg equilibrium: the allele frequency is changing, consistent with selection",
          "The spraying caused the allele to arise by mutation in each generation, so the rise shows the mutation rate",
          "The population is in Hardy–Weinberg equilibrium, because the allele is recessive, so its frequency cannot change"
        ],
        "answer": 1
      },
      {
        "q": "Two populations of a fish species are separated in different lakes. After many generations, fish from the two lakes no longer produce fertile offspring when brought together. Which explanation is best?",
        "options": [
          "Isolation prevented gene flow, so mutation and different selection pressures built up different genetic information",
          "Isolation made all the fish in both lakes genetically identical, so they no longer recognised each other as mates",
          "The populations are still one species, because they share a common ancestor and live in the same kind of habitat",
          "Fish in each lake changed during their lifetimes to suit their lake and passed these acquired changes to their offspring"
        ],
        "answer": 0
      },
      {
        "q": "Molecular data suggested that Archaea differ from Bacteria as much as from eukaryotes. Why was the three-domain system adopted only after this work had been scrutinised?",
        "options": [
          "It was adopted as soon as it was proposed, because new classifications do not need checking by other scientists",
          "It replaced the old system only after scientists agreed to stop using DNA and rRNA evidence in classification",
          "Other scientists evaluated the data through peer review and repeated the analyses, and the findings were confirmed",
          "It was adopted because Archaea look very different from Bacteria under the light microscope, which proved the grouping"
        ],
        "answer": 2
      },
      {
        "q": "A government must choose between protecting a biodiversity hotspot and allowing mining that would provide jobs. Discuss the biological and socioeconomic factors involved.",
        "options": [
          "Always choose mining, because endemic species can be moved to any other habitat and ecosystem services are replaced by the income that the mine produces",
          "Biological: irreplaceable endemic species and ecosystem services; socioeconomic: jobs, income and local community needs must be balanced",
          "Always choose conservation",
          "The decision is simple"
        ],
        "answer": 1
      },
      {
        "q": "A zoo runs a captive breeding programme for a species with only 40 individuals in captivity. Which is the most serious limitation for a later reintroduction programme?",
        "options": [
          "Captive animals have more genetic diversity than wild ones, so they will outcompete the wild population",
          "Reintroduction is never needed, because a species is safe for good once it is being kept in a zoo",
          "A small population loses genetic diversity through inbreeding, and animals may lack behaviours for the wild",
          "Using studbooks to choose breeding pairs increases the amount of inbreeding in each generation of animals"
        ],
        "answer": 2
      },
      {
        "q": "In an investigation of antimicrobial properties, a disc soaked in garlic extract produced a clear zone 12 mm in diameter and a disc soaked in mint extract produced a zone 6 mm in diameter. Which conclusion is valid?",
        "options": [
          "Garlic is twice as effective, because its zone diameter is twice as large as mint's",
          "Mint is more effective, because a smaller clear zone means fewer bacteria grew there",
          "Both are equally effective, because both discs produced a clear zone of inhibition",
          "Garlic inhibited growth over about four times the area, so it is more effective here"
        ],
        "answer": 3
      },
      {
        "q": "Discuss how evolutionary biology informs conservation management decisions, with reference to minimum viable populations and genetic diversity.",
        "options": [
          "Only large populations need management",
          "Evolutionary principles help set minimum viable populations and manage breeding to keep genetic diversity and avoid inbreeding",
          "Evolution is irrelevant to conservation",
          "Genetic diversity is unimportant, since a population of two individuals can always recover fully, so managers need only count animals, not monitor their genetics"
        ],
        "answer": 1
      }
    ]
  },
  "S5": {
    "name": "On the Wild Side",
    "green": [
      {
        "q": "What is the word equation for photosynthesis?",
        "options": [
          "Oxygen + Glucose → Water + Carbon dioxide",
          "Carbon dioxide + Water → Glucose + Oxygen",
          "Glucose → Carbon dioxide + Water + Energy",
          "Glucose + Oxygen → Carbon dioxide + Water"
        ],
        "answer": 1
      },
      {
        "q": "Where do the light-dependent reactions of photosynthesis occur?",
        "options": [
          "Thylakoid membranes",
          "Cytoplasm",
          "Cell membrane of mesophyll cells",
          "Stroma"
        ],
        "answer": 0
      },
      {
        "q": "Where does the Calvin cycle take place?",
        "options": [
          "Cytoplasm",
          "Mitochondria",
          "Stroma of the chloroplast",
          "Thylakoid membranes of the grana"
        ],
        "answer": 2
      },
      {
        "q": "What is the role of chlorophyll?",
        "options": [
          "To release CO2",
          "To transport water and minerals from the roots to the leaves",
          "To store glucose",
          "To absorb light energy for photosynthesis"
        ],
        "answer": 3
      },
      {
        "q": "What is an ecosystem?",
        "options": [
          "A food chain",
          "All living organisms and non-living components in an area interacting together",
          "A habitat only",
          "A single species"
        ],
        "answer": 1
      },
      {
        "q": "What is a producer?",
        "options": [
          "A predator",
          "An organism that eats other organisms and obtains its organic molecules from their tissues",
          "A decomposer",
          "An organism that makes its own organic molecules using light energy (photoautotroph)"
        ],
        "answer": 3
      },
      {
        "q": "What is a trophic level?",
        "options": [
          "A measure of the temperature at which an organism can live and reproduce in an ecosystem",
          "A type of nutrient",
          "A type of habitat",
          "The position of an organism in a food chain representing a feeding level"
        ],
        "answer": 3
      },
      {
        "q": "What is net primary productivity (NPP)?",
        "options": [
          "Gross primary productivity minus respiratory losses — energy available to consumers",
          "Energy from decomposition",
          "Total energy fixed by plants",
          "Energy lost as heat"
        ],
        "answer": 0
      },
      {
        "q": "What is gross primary productivity (GPP)?",
        "options": [
          "Energy lost in respiration",
          "Total rate of energy fixation by photosynthesis in producers",
          "The energy available to herbivores after the plants have respired and grown",
          "Net energy stored"
        ],
        "answer": 1
      },
      {
        "q": "What gas is increasing in the atmosphere due to human activity and contributes to climate change?",
        "options": [
          "Argon",
          "Nitrogen",
          "Oxygen (from photosynthesis)",
          "Carbon dioxide"
        ],
        "answer": 3
      },
      {
        "q": "What is the greenhouse effect?",
        "options": [
          "Plants growing in greenhouses",
          "Greenhouse gases in the atmosphere absorbing and re-radiating infrared radiation, warming the Earth",
          "Ozone depletion",
          "Acid rain"
        ],
        "answer": 1
      },
      {
        "q": "What is succession?",
        "options": [
          "Migration",
          "A food chain",
          "Extinction of species",
          "The directional change in community composition over time in a given area"
        ],
        "answer": 3
      },
      {
        "q": "What is a climax community?",
        "options": [
          "The first community to colonise an area of bare rock or sand during primary succession",
          "A temporary community",
          "The final, stable community in ecological succession in balance with the environment",
          "An extinct community"
        ],
        "answer": 2
      },
      {
        "q": "What is a pioneer species?",
        "options": [
          "The dominant species found in a climax community in balance with its climate",
          "An endangered species",
          "The first species to colonise a bare or disturbed habitat",
          "A predator"
        ],
        "answer": 2
      },
      {
        "q": "What does ATP stand for?",
        "options": [
          "Amino tri-protein",
          "Adenosine tri-peptide",
          "Adenosine triphosphate",
          "Adenosine tetraphosphate"
        ],
        "answer": 2
      },
      {
        "q": "What is the light-independent reaction also called?",
        "options": [
          "The Calvin cycle",
          "Chemiosmosis",
          "Krebs cycle",
          "Photolysis (splitting water)"
        ],
        "answer": 0
      },
      {
        "q": "What is photolysis?",
        "options": [
          "Splitting glucose",
          "Producing ATP",
          "Splitting water molecules using light energy to produce H+ ions, electrons, and oxygen",
          "Breaking down CO2"
        ],
        "answer": 2
      },
      {
        "q": "What molecule is the initial CO2 acceptor in the Calvin cycle?",
        "options": [
          "Glucose",
          "RuBP (ribulose bisphosphate)",
          "Triose phosphate (TP or G3P molecule)",
          "NADPH"
        ],
        "answer": 1
      },
      {
        "q": "What is a food web?",
        "options": [
          "Interconnected food chains showing feeding relationships in an ecosystem",
          "A single food chain",
          "A pyramid of biomass",
          "A type of nutrient cycle showing how carbon and nitrogen move between organisms and the air"
        ],
        "answer": 0
      },
      {
        "q": "What are decomposers?",
        "options": [
          "Organisms that break down dead organic matter, recycling nutrients",
          "Herbivores",
          "Top predators",
          "Producers"
        ],
        "answer": 0
      }
    ],
    "amber": [
      {
        "q": "How does the light-dependent reaction produce ATP?",
        "options": [
          "Excited electrons from chlorophyll pass along an electron transport chain, pumping H+ across thylakoid membrane; H+ flows back through ATP synthase (chemiosmosis) generating ATP",
          "By the Calvin cycle",
          "By breaking down glucose in the thylakoids, releasing electrons that pass to chlorophyll and are used to phosphorylate ADP directly, with no proton gradient or ATP synthase involved at all",
          "By splitting CO2"
        ],
        "answer": 0
      },
      {
        "q": "Explain the role of reduced NADP in the Calvin cycle.",
        "options": [
          "It splits water in the stroma to release the oxygen that diffuses out of the leaf",
          "It supplies hydrogen so that GP is reduced to GALP, using energy from ATP",
          "It combines with RuBP to form an unstable 6C compound that splits into two GP",
          "It accepts CO2 from the leaf air spaces and carries it to RuBisCO in the stroma"
        ],
        "answer": 1
      },
      {
        "q": "How does energy transfer between trophic levels explain why food chains are typically short?",
        "options": [
          "Food chains are always long",
          "All energy transfers perfectly",
          "Only about 10% of energy transfers between levels (rest lost as heat in respiration, excretion, and uneaten parts), so insufficient energy remains to support more than 4-5 levels",
          "Energy increases at each trophic level, because predators eat many prey, so food chains are short only because top predators are rare and have difficulty finding mates in their habitat"
        ],
        "answer": 2
      },
      {
        "q": "How does deforestation contribute to climate change?",
        "options": [
          "It reduces CO2 levels, because fewer trees respire at night, and the cleared soil absorbs carbon from the air, so deforestation actually slows climate change in tropical and temperate regions",
          "Removing trees reduces CO2 absorption by photosynthesis; burning/decay of wood releases stored carbon; soil disturbance releases carbon; reduced transpiration alters local climate",
          "It has no effect",
          "It increases photosynthesis"
        ],
        "answer": 1
      },
      {
        "q": "Explain how the carbon cycle links photosynthesis and respiration.",
        "options": [
          "They are unrelated",
          "Only photosynthesis moves carbon",
          "Only respiration involves carbon: it releases CO2 from organic molecules, while photosynthesis uses oxygen and nitrogen to make glucose, so the two processes are unrelated and carbon does not cycle between them at all",
          "Photosynthesis fixes atmospheric CO2 into organic molecules; respiration releases CO2 back to the atmosphere by oxidising organic molecules; together they cycle carbon between biotic and abiotic components"
        ],
        "answer": 3
      },
      {
        "q": "In the Hill reaction, isolated chloroplasts are illuminated in a buffer containing DCPIP, which changes from blue to colourless. What does this colour change show?",
        "options": [
          "The Calvin cycle is fixing CO2, and the GALP it makes reacts with DCPIP and bleaches it",
          "Oxygen released by photolysis oxidises the DCPIP, which turns it colourless",
          "Light is breaking down the chlorophyll, releasing pigments that decolourise the DCPIP",
          "Electrons from the light-dependent reactions reduce DCPIP, as they normally reduce NADP"
        ],
        "answer": 3
      },
      {
        "q": "Explain how succession leads to increased biodiversity.",
        "options": [
          "Only animals increase",
          "Succession reduces biodiversity",
          "Pioneer species modify abiotic conditions (soil formation, nutrient accumulation), enabling new species to establish; increasing habitat complexity creates more niches; species interactions become more complex until climax community reached",
          "Biodiversity stays constant during succession"
        ],
        "answer": 2
      },
      {
        "q": "How is energy lost between trophic levels?",
        "options": [
          "Energy is only lost by producers",
          "It is not lost",
          "Energy is lost through respiration (heat), excretion (urine/faeces), and parts not consumed (bones, roots); only energy assimilated into biomass is available to the next level",
          "All energy passes to the next level, because every part of an organism is eaten and digested, and respiration releases no heat, so the energy at each level stays the same in the food chain"
        ],
        "answer": 2
      },
      {
        "q": "Explain how the greenhouse effect maintains life on Earth but enhanced greenhouse effect causes problems.",
        "options": [
          "The greenhouse effect is always harmful",
          "Natural greenhouse effect keeps Earth ~33°C warmer than without atmosphere, enabling liquid water and life; enhanced effect from increased CO2/CH4 raises temperatures further, causing ice melt, sea level rise, and habitat disruption",
          "Enhanced effect is beneficial",
          "There is no natural greenhouse effect"
        ],
        "answer": 1
      },
      {
        "q": "Which statement correctly describes how ATP supplies energy for biological processes?",
        "options": [
          "Energy is released when the bond between adenine and ribose breaks, forming AMP and two phosphates",
          "Hydrolysis of ATP to ADP and Pi gives an immediate energy supply; phosphorylating ADP needs energy",
          "Phosphorylation of ADP releases energy, and hydrolysis of ATP needs energy from respiration",
          "ATP is a long-term energy store, built up in large amounts and used only when glucose runs out"
        ],
        "answer": 1
      },
      {
        "q": "What is the role of RuBisCO in the Calvin cycle?",
        "options": [
          "It catalyses the fixation of CO2 onto RuBP (5C) to form two molecules of GP (3C) — the first step of carbon fixation",
          "It produces ATP in the stroma by phosphorylating ADP, using energy released when CO2 is split into carbon and oxygen atoms",
          "It reduces NADP+",
          "It splits water"
        ],
        "answer": 0
      },
      {
        "q": "How do pyramids of energy differ from pyramids of biomass or numbers?",
        "options": [
          "They are all identical",
          "Pyramids of numbers are always pyramid-shaped because producers are always more numerous, while pyramids of energy can be inverted when one large tree feeds many insects in a woodland",
          "Pyramids of energy always have a classic pyramid shape (energy decreases at each level) and account for rate of production over time, unlike biomass/numbers which can be inverted",
          "Energy pyramids can be inverted"
        ],
        "answer": 2
      },
      {
        "q": "Explain how burning fossil fuels disrupts the carbon cycle.",
        "options": [
          "It releases carbon that was locked in geological stores over millions of years rapidly back into the atmosphere as CO2, faster than natural sinks can absorb it, causing atmospheric CO2 to increase",
          "It only affects oxygen levels",
          "It has no effect",
          "It reduces atmospheric carbon, because the CO2 released is absorbed immediately by oceans and plants, and burning fuels converts carbon into oxygen, so the carbon cycle becomes faster and better balanced over time"
        ],
        "answer": 0
      },
      {
        "q": "How does temperature affect enzyme-controlled reactions in photosynthesis?",
        "options": [
          "Higher temperature always increases the rate, because molecules move faster and collide more often, and RuBisCO and other enzymes are never denatured at the temperatures found in the natural environment",
          "Temperature has no effect",
          "Only cold temperatures affect enzymes",
          "Increasing temperature increases kinetic energy and reaction rate up to an optimum; beyond this, enzymes (especially RuBisCO) denature as hydrogen bonds in tertiary structure break, reducing rate"
        ],
        "answer": 3
      },
      {
        "q": "What is the evidence that rising CO2 levels correlate with global temperature increase?",
        "options": [
          "There is no evidence",
          "CO2 and temperature are unrelated",
          "Only recent data exists",
          "Ice core data shows CO2 and temperature have co-varied for hundreds of thousands of years; recent rapid CO2 rise from fossil fuels correlates with unprecedented warming; multiple independent datasets confirm this trend"
        ],
        "answer": 3
      },
      {
        "q": "Explain the role of chemiosmosis in ATP production during the light-dependent reactions.",
        "options": [
          "Electron transport pumps H+ into thylakoid space creating a proton gradient; H+ flows back through ATP synthase down the electrochemical gradient, driving ATP synthesis (chemiosmosis)",
          "Chemiosmosis is not involved",
          "It only produces NADPH",
          "Chemiosmosis occurs in the stroma, where ATP synthase splits ATP into ADP and phosphate, and the energy released is used to pump H+ ions out of the thylakoid space and into the cytoplasm"
        ],
        "answer": 0
      },
      {
        "q": "Two barnacle species live on the same rocky shore: one only in the upper zone, the other only in the lower zone. Which explanation uses the concept of niche?",
        "options": [
          "Distribution is random, because larvae settle wherever the tide carries them and neither abiotic nor biotic factors affect whether they survive there",
          "Both species share exactly the same niche, so they can live together in equal numbers anywhere on the shore where their larvae happen to settle",
          "Each species has its own niche; where needs overlap, competition excludes one, so each is most abundant where its tolerances suit the conditions",
          "The upper species is a pioneer and the lower species forms the climax community, so the zonation is simply one stage of an ongoing succession"
        ],
        "answer": 2
      },
      {
        "q": "Explain how the distribution of organisms is affected by abiotic factors.",
        "options": [
          "Temperature, light, water availability, soil pH, and mineral ions determine where organisms can survive and reproduce; each species has tolerance ranges and optimal conditions; changes in these factors shift distributions",
          "All organisms live everywhere",
          "Abiotic factors are irrelevant",
          "Only biotic factors matter"
        ],
        "answer": 0
      },
      {
        "q": "How is the structure of a chloroplast related to its role in photosynthesis?",
        "options": [
          "The grana hold RuBisCO and the Calvin cycle enzymes, while the stroma contains the photosystems and the electron transport chain",
          "Starch grains in the thylakoid space store the ATP made in the light-dependent reactions until the Calvin cycle needs it",
          "The double outer membrane holds the chlorophyll, so light is trapped at the surface before reaching the stroma, where photolysis happens",
          "Stacked thylakoids give a large membrane area for pigments, electron carriers and ATP synthase; the stroma has Calvin cycle enzymes"
        ],
        "answer": 3
      },
      {
        "q": "Explain how carbon is stored in different global pools (reservoirs).",
        "options": [
          "Carbon exists only in the atmosphere",
          "Carbon is stored in atmosphere (CO2), oceans (dissolved CO2/carbonates), lithosphere (fossil fuels, limestone), and biosphere (living organisms and dead organic matter); transfer between pools occurs at different rates",
          "Only living things store carbon",
          "Carbon cannot be stored"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Evaluate the evidence for anthropogenic (human-caused) climate change.",
        "options": [
          "Only one study supports it, and ice cores show that temperature has never changed with CO2, so recent warming is fully explained by the Sun’s output rising each year",
          "All climate change is natural",
          "Multiple lines converge: ice cores link CO2 and temperature, CO2 isotopes show a fossil origin, and warming matches models that include human emissions",
          "There is no evidence"
        ],
        "answer": 2
      },
      {
        "q": "Discuss the potential consequences of a 2°C rise in global mean temperature on ecosystems and biodiversity.",
        "options": [
          "No effects would occur",
          "Only beneficial effects",
          "Effects include habitat loss for polar and alpine species, coral bleaching, range shifts, mismatched timing of breeding and food, and extinctions",
          "Only marine ecosystems are affected, because land plants and animals can tolerate any temperature change and will simply breed earlier each year to keep pace"
        ],
        "answer": 2
      },
      {
        "q": "Analyse why simply planting trees is not sufficient to solve climate change.",
        "options": [
          "Trees take decades to mature and store significant carbon, land is limited, forests can burn, and emissions must also fall for any lasting effect",
          "Planting trees has no benefit",
          "Only one tree species matters",
          "Planting trees completely solves climate change"
        ],
        "answer": 0
      },
      {
        "q": "Evaluate the strengths and limitations of using ice core data to study past climate.",
        "options": [
          "Ice cores are unreliable",
          "Ice cores are perfect records",
          "They only cover the last 100 years, since ice melts every summer, so no ancient air is preserved and they cannot show past CO2 levels or temperatures at all",
          "Strengths: long records (800 000+ years) of trapped gases and temperature proxies; limitations: few sites, dating errors and gas diffusion"
        ],
        "answer": 3
      },
      {
        "q": "Discuss why some scientists remain cautious about attributing specific weather events to climate change.",
        "options": [
          "Scientists never discuss this",
          "Weather varies naturally with many factors, while climate describes long-term averages, so single events are hard to attribute with certainty",
          "Attribution is simple",
          "All weather events are caused by climate change, so every storm or heatwave can be attributed directly to rising CO2 with complete certainty by any scientist"
        ],
        "answer": 1
      },
      {
        "q": "Analyse the efficiency of energy transfer in agricultural food chains compared to natural ecosystems, and discuss implications.",
        "options": [
          "Efficiency is identical",
          "Agriculture increases transfer to humans by reducing consumer energy losses (e.g. housing animals), but relies on fertiliser and fossil fuel inputs",
          "Agriculture is always more efficient",
          "Natural systems waste no energy"
        ],
        "answer": 1
      },
      {
        "q": "Evaluate the argument that protecting tropical rainforests is the most important action for combating climate change.",
        "options": [
          "For: they are huge carbon stores with high NPP and biodiversity; against: cutting fossil fuel emissions matters more, and other ecosystems also store carbon",
          "Rainforests are irrelevant to climate",
          "Rainforests store no carbon, because all the carbon they fix is released again by respiration at night, so protecting them has no effect on atmospheric CO2 at all",
          "Only boreal forests matter"
        ],
        "answer": 0
      },
      {
        "q": "The initial rate of an enzyme-catalysed reaction is 0.8 au s⁻¹ at 20 °C and 1.8 au s⁻¹ at 30 °C. Which option gives the correct Q10 and interpretation?",
        "options": [
          "Q10 = 22.5 (1.8 ÷ 0.8 × 10): the rate rises about twentyfold per degree, because each 1 °C rise doubles collisions",
          "Q10 = 1.0 (1.8 − 0.8): the rate rises by the same amount for every 10 °C, so temperature has a linear effect on rate",
          "Q10 = 0.44 (0.8 ÷ 1.8): the rate falls as temperature rises, showing the enzyme is already denaturing at 30 °C",
          "Q10 = 2.25 (1.8 ÷ 0.8): the rate more than doubles for a 10 °C rise, due to more successful collisions"
        ],
        "answer": 3
      },
      {
        "q": "Discuss the biological, economic, and political challenges of implementing effective global strategies to reduce greenhouse gas emissions.",
        "options": [
          "Biological: carbon cycle inertia and slow ocean responses; economic: costs of change and fossil fuel dependence; political: agreeing and enforcing global action",
          "All challenges are political",
          "Technology solves everything, because carbon capture already removes all emissions at no cost, so there are no biological, economic or political challenges left to overcome",
          "There are no challenges"
        ],
        "answer": 0
      },
      {
        "q": "Critically evaluate the concept of carbon neutrality and whether it is achievable for modern societies.",
        "options": [
          "Carbon neutrality is easily achieved",
          "True neutrality needs zero net emissions, which is hard for aviation and industry and relies on offsets that may be unreliable",
          "It is impossible and pointless",
          "All countries are already carbon neutral"
        ],
        "answer": 1
      }
    ]
  },
  "S6": {
    "name": "Immunity, Infection and Forensics",
    "green": [
      {
        "q": "What is an antigen?",
        "options": [
          "An antibody",
          "A vaccine",
          "A molecule (usually protein) on a cell surface that triggers an immune response",
          "A type of white blood cell that engulfs and destroys pathogens in the tissues and blood"
        ],
        "answer": 2
      },
      {
        "q": "What is an antibody?",
        "options": [
          "A Y-shaped glycoprotein produced by B cells that binds specifically to an antigen",
          "A toxin",
          "A type of antigen found on the surface of pathogens that triggers the immune response in the body",
          "A type of pathogen"
        ],
        "answer": 0
      },
      {
        "q": "What type of white blood cell produces antibodies?",
        "options": [
          "B lymphocytes (plasma cells)",
          "Phagocytes",
          "T lymphocytes (killer T cells)",
          "Neutrophils"
        ],
        "answer": 0
      },
      {
        "q": "What is phagocytosis?",
        "options": [
          "Antibody production",
          "Cell signalling between lymphocytes using cytokines in the lymph nodes",
          "Cell division",
          "The engulfing and digestion of pathogens by white blood cells"
        ],
        "answer": 3
      },
      {
        "q": "What is a pathogen?",
        "options": [
          "A beneficial organism that lives in the gut",
          "A type of cell",
          "A microorganism that causes disease",
          "An enzyme"
        ],
        "answer": 2
      },
      {
        "q": "What is the difference between specific and non-specific immunity?",
        "options": [
          "Non-specific is general defence against all pathogens; specific targets particular pathogens using lymphocytes and antibodies",
          "Non-specific uses antibodies",
          "They are the same",
          "Specific is faster"
        ],
        "answer": 0
      },
      {
        "q": "What is a vaccine?",
        "options": [
          "A type of antibiotic injected into the blood that kills bacteria directly and gives lifelong protection from all infections",
          "A preparation containing weakened/dead pathogens or antigens to stimulate immune memory without causing disease",
          "A painkiller",
          "A type of antibody"
        ],
        "answer": 1
      },
      {
        "q": "What is passive immunity?",
        "options": [
          "Memory cell production",
          "Immunity gained by vaccination",
          "Natural infection",
          "Immunity gained by receiving antibodies from another source (e.g., mother to baby), providing immediate but temporary protection"
        ],
        "answer": 3
      },
      {
        "q": "What is active immunity?",
        "options": [
          "Blood transfusion",
          "Immunity produced by the individual's own immune system in response to antigen exposure, providing long-term protection via memory cells",
          "Taking antibiotics",
          "Receiving antibodies"
        ],
        "answer": 1
      },
      {
        "q": "What is the function of memory cells?",
        "options": [
          "Produce an immediate response by releasing antibodies into the blood during the first infection, then die within a few days of it clearing",
          "Remain in the body long-term and enable a faster, stronger secondary immune response upon re-exposure to the same antigen",
          "Kill pathogens directly",
          "Produce mucus"
        ],
        "answer": 1
      },
      {
        "q": "What is an antibiotic?",
        "options": [
          "A substance that kills viruses inside infected cells and in the blood",
          "A vaccine component",
          "An antigen",
          "A substance that kills or inhibits the growth of bacteria"
        ],
        "answer": 3
      },
      {
        "q": "Why are antibiotics ineffective against viruses?",
        "options": [
          "Viruses lack the cellular structures (cell walls, ribosomes) that antibiotics target; they replicate inside host cells",
          "Viruses are too small",
          "Antibiotics are only for fungi",
          "They are too strong for the immune system to control, so antibiotics must be combined with vaccines to work against any virus"
        ],
        "answer": 0
      },
      {
        "q": "What is antibiotic resistance?",
        "options": [
          "Viruses fighting antibiotics",
          "Humans becoming resistant to antibiotics after taking them too often, so the drugs no longer work",
          "When bacteria evolve mechanisms to survive exposure to antibiotics that previously killed them",
          "A type of immunity"
        ],
        "answer": 2
      },
      {
        "q": "What is the role of T helper cells?",
        "options": [
          "Release cytokines that activate other immune cells including B cells and cytotoxic T cells",
          "Engulf pathogens",
          "Produce antibodies",
          "Kill infected cells directly by releasing perforin, and engulf bacteria by phagocytosis in the tissues"
        ],
        "answer": 0
      },
      {
        "q": "What is the primary immune response?",
        "options": [
          "A fast response",
          "A response to a second infection",
          "An allergic reaction",
          "The slow initial response when the immune system first encounters a specific antigen, taking days to produce sufficient antibodies"
        ],
        "answer": 3
      },
      {
        "q": "What is decomposition?",
        "options": [
          "Growth of organisms as they take in nutrients and increase their biomass over time",
          "Fossilisation",
          "Photosynthesis",
          "The breakdown of dead organic matter by microorganisms, recycling nutrients"
        ],
        "answer": 3
      },
      {
        "q": "When estimating time of death, what is meant by the \"stage of succession\" of a body?",
        "options": [
          "The rate at which the body cools towards the temperature of its surroundings",
          "The predictable sequence of different organisms, such as insects, that colonise the body",
          "The order in which muscles stiffen and then relax as ATP runs out and proteins break down",
          "The number of STR repeats that can still be read as the DNA in the body degrades"
        ],
        "answer": 1
      },
      {
        "q": "What is meant by \"time of death\" estimation in forensic science?",
        "options": [
          "Asking witnesses only",
          "The exact time recorded by a clock",
          "Using biological and physical evidence (body temperature, rigor mortis, insect colonisation, decomposition stage) to estimate when death occurred",
          "Using DNA only"
        ],
        "answer": 2
      },
      {
        "q": "What is DNA profiling?",
        "options": [
          "Measuring DNA amount",
          "Analysing specific variable regions (STRs) of DNA to produce a unique pattern for identification",
          "Counting chromosomes",
          "Sequencing entire genomes so that every base of a person’s DNA can be compared with a crime scene sample"
        ],
        "answer": 1
      },
      {
        "q": "What is the role of cytotoxic T cells?",
        "options": [
          "Produce antibodies",
          "Engulf bacteria",
          "Directly kill infected body cells by releasing perforin and granzymes",
          "Produce memory cells that release antibodies into the blood and lymph fluid"
        ],
        "answer": 2
      }
    ],
    "amber": [
      {
        "q": "Explain how vaccination produces long-term immunity.",
        "options": [
          "Vaccines contain antibiotics",
          "Vaccines kill all pathogens in the body immediately by releasing antibiotics into the blood, so no immune response or memory cells are needed and protection lasts only while the vaccine remains",
          "It does not produce long-term immunity",
          "Antigens in the vaccine trigger primary immune response; B and T memory cells are produced and persist; upon re-exposure, secondary response is faster and stronger, preventing disease"
        ],
        "answer": 3
      },
      {
        "q": "How does natural selection lead to antibiotic resistance in bacteria?",
        "options": [
          "All bacteria are naturally resistant",
          "Bacteria choose to become resistant",
          "Antibiotics cause mutations in bacterial DNA, directing each bacterium to change the specific gene the drug targets, so every bacterium in the population becomes resistant at the same time",
          "Random mutations produce resistance; when antibiotics are used, resistant bacteria survive and reproduce (selection pressure); resistant alleles increase in frequency in the population"
        ],
        "answer": 3
      },
      {
        "q": "Explain the process of clonal selection and expansion in the immune response.",
        "options": [
          "B cells are selected randomly",
          "All B cells respond to all antigens at once, each producing a mixture of antibodies, so the most common antibody in the blood happens to fit the pathogen, and no cloning, plasma cells or memory cells are involved in the response",
          "A specific antigen binds to the one B cell with the complementary receptor; this B cell divides rapidly (clonal expansion) producing many identical plasma cells that secrete the specific antibody, plus memory cells",
          "Only T cells undergo clonal selection"
        ],
        "answer": 2
      },
      {
        "q": "How does the structure of an antibody relate to its function?",
        "options": [
          "Y-shape with two identical antigen-binding sites (variable regions) for specific antigen attachment; constant region determines class and effector function; hinge region allows flexibility; disulfide bonds maintain structure",
          "All antibodies are identical",
          "Structure is unrelated to function",
          "Antibodies are circular proteins with a single binding site that attaches to any antigen, so they have no variable regions, constant regions or hinge; their shape is held by hydrogen bonds alone and does not affect how they recognise pathogens"
        ],
        "answer": 0
      },
      {
        "q": "Explain how forensic entomology can help determine time of death.",
        "options": [
          "Insects are irrelevant",
          "Different insect species colonise remains in a predictable succession; identifying species present and their developmental stage (egg, larva, pupa) indicates time since colonisation; environmental conditions (temperature) are factored into calculations",
          "Insects arrive randomly",
          "Only flies are used"
        ],
        "answer": 1
      },
      {
        "q": "How does HIV cause immunodeficiency?",
        "options": [
          "It blocks phagocytosis only, so bacteria are no longer engulfed, while T helper cells, B cells and antibodies continue to work normally throughout the infection",
          "It kills red blood cells",
          "HIV infects and destroys T helper cells (CD4+), progressively weakening the immune system until it cannot fight opportunistic infections (AIDS)",
          "It destroys antibodies"
        ],
        "answer": 2
      },
      {
        "q": "Explain the difference between the primary and secondary immune responses.",
        "options": [
          "Primary: fast (a few hours), high antibody levels, memory cells activated; secondary: slow (1–2 weeks to peak), lower antibody levels, naive lymphocytes activated",
          "Primary: slow (1–2 weeks to peak), lower antibody levels, naive lymphocytes activated; secondary: faster (a few days), much higher antibody levels, memory cells activated",
          "The primary response produces more antibodies and acts faster because naive lymphocytes are more active, while the secondary response is slower and weaker since memory cells have already been used up",
          "Both take 1–2 weeks to peak and give the same antibody levels; the secondary response differs only because T killer cells replace B cells in making antibodies"
        ],
        "answer": 1
      },
      {
        "q": "How does PCR (polymerase chain reaction) enable DNA profiling from small samples?",
        "options": [
          "PCR amplifies tiny amounts of DNA exponentially through repeated cycles of denaturation, annealing of primers, and elongation by DNA polymerase, producing millions of copies for analysis",
          "PCR sequences the DNA base by base, reading the whole genome of the sample in a single step at one temperature, so only one copy of the DNA is needed and no amplification or primers are involved at all",
          "PCR is not used in forensics",
          "PCR only works with large samples"
        ],
        "answer": 0
      },
      {
        "q": "Explain how gel electrophoresis separates DNA fragments in genetic profiling.",
        "options": [
          "It separates by colour",
          "DNA fragments (negatively charged) are placed in a gel and electric current applied; shorter fragments move faster/further toward the positive electrode; fragments separate by size, creating a banding pattern unique to an individual",
          "It does not separate DNA",
          "Only proteins are separated this way"
        ],
        "answer": 1
      },
      {
        "q": "How do physical barriers (skin, mucous membranes) provide non-specific defence?",
        "options": [
          "They are not defensive",
          "They only work against viruses",
          "Skin provides a physical barrier; mucous membranes trap pathogens; stomach acid kills ingested microbes; cilia sweep mucus away; lysozyme in tears/saliva destroys bacterial walls — all without antigen-specific recognition",
          "They produce antibodies that are secreted onto the skin and into mucus, where they bind to specific antigens on each pathogen, so these barriers provide a specific defence that depends on memory cells made during an earlier infection"
        ],
        "answer": 2
      },
      {
        "q": "What is the difference between bacteriostatic and bactericidal antibiotics?",
        "options": [
          "Bacteriostatic antibiotics stop bacteria growing and dividing, so the immune system must clear them; bactericidal ones kill them",
          "Bacteriostatic antibiotics kill bacteria by bursting their cell walls, whereas bactericidal antibiotics only stop them from dividing",
          "Bacteriostatic antibiotics act against viruses and bactericidal ones act against bacteria, so each treats a different type of infection",
          "Both kill bacteria outright, but bacteriostatic antibiotics act more slowly because they are always given in much lower doses"
        ],
        "answer": 0
      },
      {
        "q": "How does antigenic variation (e.g., in influenza) make vaccination challenging?",
        "options": [
          "It does not affect vaccines",
          "Only one strain exists",
          "Vaccines work against all variants of a virus, because memory cells recognise the whole pathogen rather than its surface antigens, so mutations in antigen genes never make an existing vaccine less effective at all",
          "Mutations in surface antigen genes change the virus's antigenic profile; memory cells from previous infection/vaccination no longer recognise new variants; new vaccines must be developed regularly"
        ],
        "answer": 3
      },
      {
        "q": "Explain how body temperature change after death can be used to estimate time of death.",
        "options": [
          "Body temperature rises after death",
          "Body cools toward ambient temperature at a roughly predictable rate (Newton's law of cooling); measuring core temperature and using cooling curves adjusted for environmental conditions allows back-calculation of time of death",
          "Body temperature is irrelevant",
          "The rate is always exactly 1°C per hour whatever the conditions, so the time of death is found by subtracting the body temperature from 37 °C, and air temperature, clothing and body size have no effect on the estimate made from the reading"
        ],
        "answer": 1
      },
      {
        "q": "How does the inflammatory response help fight infection?",
        "options": [
          "It only causes pain",
          "It does not help",
          "Inflammation is always harmful: histamine narrows the capillaries and reduces blood flow, keeping phagocytes away from the site, and the heat produced helps the pathogens grow faster, so it should be blocked with drugs in every infection",
          "Damaged cells release histamine causing vasodilation and increased capillary permeability; more blood brings phagocytes and clotting factors to the site; swelling isolates the area; heat inhibits pathogen growth"
        ],
        "answer": 3
      },
      {
        "q": "What is herd immunity and how does vaccination achieve it?",
        "options": [
          "Individual immunity only",
          "When a high percentage of a population is immune (through vaccination), unvaccinated individuals are protected because the pathogen cannot find enough susceptible hosts to spread effectively",
          "It requires 100% vaccination, because any unvaccinated person will always catch the disease, so herd immunity protects only those who have been vaccinated themselves and never shields the rest of the population",
          "It only works for one disease"
        ],
        "answer": 1
      },
      {
        "q": "How does rigor mortis help estimate time of death?",
        "options": [
          "It happens immediately",
          "Rigor mortis is irrelevant",
          "After death, ATP depletion causes actin-myosin cross-bridges to lock, stiffening muscles; rigor starts 2-4 hours after death, peaks around 12 hours, and resolves by 36-48 hours as proteins decompose; timing varies with temperature",
          "It is permanent"
        ],
        "answer": 2
      },
      {
        "q": "How can one gene give rise to more than one protein?",
        "options": [
          "Introns are removed and exons joined in different combinations, so different mature mRNAs code for different polypeptides",
          "Each codon can be read by several different tRNAs, so ribosomes insert different amino acids each time one mRNA is translated",
          "Exons are removed from the pre-mRNA and the introns are joined in different orders, each order coding for a different protein",
          "The gene is transcribed from both DNA strands at once, and each strand's mRNA is translated into its own separate protein"
        ],
        "answer": 0
      },
      {
        "q": "How do short tandem repeats (STRs) provide individual-specific DNA profiles?",
        "options": [
          "STRs are repetitive DNA sequences that vary in the number of repeats between individuals; analysing multiple STR loci gives a profile that is statistically unique (except identical twins); the probability of two unrelated people matching decreases with more loci",
          "Everyone has identical STRs",
          "Only one STR locus is needed",
          "STRs are genes"
        ],
        "answer": 0
      },
      {
        "q": "How does interferon help to limit a viral infection?",
        "options": [
          "It is released by mast cells and causes vasodilation, so that more phagocytes reach the site of the viral infection",
          "It is an antibody made by plasma cells that binds to viral antigens and makes the virus particles clump together",
          "Infected cells release it, and it stops viral replication in nearby cells, e.g. by blocking viral protein synthesis",
          "It is an enzyme in tears and saliva that digests the protein coat of viruses before they are able to enter body cells"
        ],
        "answer": 2
      },
      {
        "q": "How can microbial decomposition rate be affected by environmental conditions?",
        "options": [
          "Environment has no effect",
          "Only temperature matters",
          "Decomposition rate is always constant",
          "Temperature, moisture, oxygen availability, and pH all affect microbial enzyme activity and growth rate; warm, moist, aerobic, neutral pH conditions increase decomposition rate; cold, dry, anaerobic, or extreme pH conditions slow it"
        ],
        "answer": 3
      }
    ],
    "red": [
      {
        "q": "Evaluate the arguments for and against compulsory vaccination programmes.",
        "options": [
          "For: herd immunity protects the vulnerable and makes eradication possible; against: loss of personal choice, rare side effects and reduced public trust",
          "There are no arguments against, since vaccines never have side effects and compulsion always increases trust, so every country has already made all vaccines compulsory",
          "Compulsory vaccination is always wrong",
          "Vaccination should never be questioned"
        ],
        "answer": 0
      },
      {
        "q": "Discuss the evolutionary arms race between pathogens and host immune systems, using specific examples.",
        "options": [
          "Hosts always win the arms race, because once an antibody has been made against a pathogen, that pathogen can never change its antigens or evade the immune system again",
          "Pathogens never evolve",
          "No such arms race exists",
          "Hosts evolve defences such as antibody and MHC diversity; pathogens evolve antigenic variation and immune evasion, e.g. influenza and HIV"
        ],
        "answer": 3
      },
      {
        "q": "Critically evaluate the reliability of DNA profiling evidence in criminal investigations.",
        "options": [
          "DNA evidence is useless",
          "Strengths: very high discrimination power; limitations: contamination, degraded or mixed samples, and statistics that can be misinterpreted in court",
          "It always identifies the criminal",
          "DNA evidence is always 100% reliable, since samples cannot be contaminated or degraded, so a match proves that the suspect committed the crime in every case"
        ],
        "answer": 1
      },
      {
        "q": "Analyse the biological factors that make developing an effective HIV vaccine particularly challenging.",
        "options": [
          "HIV’s high mutation rate gives enormous antigenic diversity; it infects T helper cells, hides in latent reservoirs and shields its key antigens",
          "Only one factor makes it difficult",
          "Vaccines cannot be made for any virus",
          "An HIV vaccine is easy to make"
        ],
        "answer": 0
      },
      {
        "q": "Evaluate the ethical implications of using forensic DNA databases that store profiles of convicted individuals.",
        "options": [
          "Databases should be deleted",
          "There are no ethical issues",
          "For: helps solve crimes, deters offenders and identifies serial offenders; against: privacy, misuse of data and disproportionate representation of some groups",
          "Databases should store everyone’s profile without consent, since DNA reveals nothing about health or family and the data can never be misused, so there are no ethical concerns"
        ],
        "answer": 2
      },
      {
        "q": "Discuss how the overuse of antibiotics in agriculture and medicine has contributed to the emergence of superbugs, and evaluate potential solutions.",
        "options": [
          "Resistance only occurs in hospitals",
          "Antibiotic resistance is not a real problem",
          "Overuse gives selection pressure for resistant bacteria, spread by gene transfer; solutions include stewardship, less farm use, new drugs and better hygiene",
          "One new antibiotic will solve everything"
        ],
        "answer": 2
      },
      {
        "q": "A forensic scientist estimates time of death using multiple methods that give slightly different answers. Discuss why multiple methods are used and how discrepancies might arise.",
        "options": [
          "Discrepancies mean all methods are wrong",
          "Multiple methods (temperature, rigor, lividity, entomology) cross-check each other; they differ because each is affected by conditions such as temperature",
          "All methods always agree exactly, because body cooling, rigor mortis and insect development proceed at fixed rates whatever the temperature or conditions at the scene",
          "Only one method should be used"
        ],
        "answer": 1
      },
      {
        "q": "A hospital has rising numbers of MRSA and C. difficile infections. Which set of measures best reflects codes of practice on antibiotic prescription and infection control?",
        "options": [
          "Give broad-spectrum antibiotics to every patient on admission as a precaution, so that any bacteria present are killed before they spread",
          "Rely on alcohol hand gel alone, since it kills all bacteria including C. difficile spores, so antibiotic prescribing does not need to change",
          "Prescribe antibiotics for viral infections to prevent secondary infections, and stop every course early to reduce selection pressure",
          "Prescribe antibiotics only for confirmed bacterial infections, prefer narrow-spectrum drugs, enforce hand washing, isolate infected patients"
        ],
        "answer": 3
      },
      {
        "q": "Analyse how Mycobacterium tuberculosis is able to persist in the body despite the immune response.",
        "options": [
          "It survives in macrophages by stopping lysosomes fusing with its phagosome; its waxy wall resists digestion; it lies dormant in tubercles",
          "It releases interferon, which stops macrophages engulfing it and prevents any inflammation or antibody production at the site of infection",
          "It changes its surface antigens every few days by antigenic shift, so memory cells made against earlier forms no longer recognise it",
          "It infects and destroys T helper cells by inserting its DNA into their genome, using its own reverse transcriptase enzyme"
        ],
        "answer": 0
      },
      {
        "q": "A patient with HIV has a falling T helper cell count and develops TB and pneumonia. Which analysis best explains this?",
        "options": [
          "HIV causes these infections itself, because the virus spreads into lung cells and has the same structure as the TB bacterium",
          "HIV destroys T helper cells, so fewer B cells and T killer cells are activated and opportunistic infections take hold",
          "Antibodies against HIV cross-react with lung tissue, causing an attack on the lungs that is mistaken for an infection",
          "HIV destroys B cells directly, so no antibodies are made, while T killer cells and phagocytes keep working normally"
        ],
        "answer": 1
      }
    ]
  },
  "S7": {
    "name": "Run for Your Life",
    "green": [
      {
        "q": "What is aerobic respiration?",
        "options": [
          "Photosynthesis",
          "Respiration without oxygen, producing lactic acid in muscles and ethanol in yeast",
          "Fermentation",
          "The release of energy from glucose using oxygen, producing CO2 and water"
        ],
        "answer": 3
      },
      {
        "q": "Where does glycolysis take place?",
        "options": [
          "Mitochondria",
          "Cytoplasm",
          "Chloroplast",
          "Nucleus"
        ],
        "answer": 1
      },
      {
        "q": "Where does the Krebs cycle occur?",
        "options": [
          "Matrix of the mitochondria",
          "Cytoplasm of the cell (glycolysis site)",
          "Thylakoid membrane",
          "Nucleus"
        ],
        "answer": 0
      },
      {
        "q": "Where does oxidative phosphorylation take place?",
        "options": [
          "Cell membrane and cytoplasm of the muscle cell",
          "Inner mitochondrial membrane (cristae)",
          "Cytoplasm",
          "Nucleus"
        ],
        "answer": 1
      },
      {
        "q": "What is the net ATP yield from glycolysis?",
        "options": [
          "0 ATP",
          "2 ATP",
          "38 ATP",
          "4 ATP"
        ],
        "answer": 1
      },
      {
        "q": "What is the role of NAD in respiration?",
        "options": [
          "It produces oxygen",
          "It is an enzyme that breaks glucose down into pyruvate in the cytoplasm of every cell",
          "It is a hydrogen carrier/coenzyme that accepts hydrogen atoms to become reduced NAD",
          "It is a structural protein"
        ],
        "answer": 2
      },
      {
        "q": "What is anaerobic respiration in animals?",
        "options": [
          "Incomplete oxidation of glucose without oxygen, producing lactate",
          "Photosynthesis in the dark",
          "Respiration with oxygen",
          "Complete breakdown of glucose to carbon dioxide and water using oxygen"
        ],
        "answer": 0
      },
      {
        "q": "What is the structure that increases the surface area for oxidative phosphorylation in mitochondria?",
        "options": [
          "Ribosomes",
          "Outer membrane (smooth, unfolded)",
          "Matrix",
          "Cristae (inner membrane folds)"
        ],
        "answer": 3
      },
      {
        "q": "What is a muscle fibre?",
        "options": [
          "A multinucleated cell formed from fused myoblasts, containing myofibrils",
          "A type of nerve",
          "A single cell",
          "A tendon"
        ],
        "answer": 0
      },
      {
        "q": "What are the two main protein filaments in muscle?",
        "options": [
          "Actin and myosin",
          "Collagen and elastin",
          "Tubulin and actin",
          "Keratin and fibrin"
        ],
        "answer": 0
      },
      {
        "q": "What is the sliding filament theory?",
        "options": [
          "Myosin dissolves during contraction",
          "Filaments rotate",
          "Actin filaments slide over myosin filaments (pulled by cross-bridges), shortening the sarcomere without the filaments themselves shortening",
          "Filaments grow longer during contraction"
        ],
        "answer": 2
      },
      {
        "q": "What ion triggers muscle contraction?",
        "options": [
          "Sodium",
          "Magnesium",
          "Potassium",
          "Calcium"
        ],
        "answer": 3
      },
      {
        "q": "What is a sarcomere?",
        "options": [
          "A nerve ending",
          "The functional contractile unit of a muscle fibre, from one Z-line to the next",
          "A tendon",
          "A type of cell"
        ],
        "answer": 1
      },
      {
        "q": "What is the role of ATP in muscle contraction?",
        "options": [
          "It has no role",
          "ATP provides energy for myosin heads to detach from actin and re-cock, and for calcium pump to return Ca2+ to sarcoplasmic reticulum",
          "ATP builds muscle",
          "ATP relaxes muscles only"
        ],
        "answer": 1
      },
      {
        "q": "What is the sarcoplasmic reticulum?",
        "options": [
          "A type of mitochondrion that releases ATP to power contraction of the muscle fibre",
          "A blood vessel",
          "A specialised smooth ER in muscle cells that stores and releases calcium ions",
          "A nerve network"
        ],
        "answer": 2
      },
      {
        "q": "What is oxygen debt (EPOC)?",
        "options": [
          "A disease",
          "Breathing during exercise",
          "Not needing oxygen",
          "The additional oxygen consumed after exercise to metabolise accumulated lactate and replenish ATP/creatine phosphate stores"
        ],
        "answer": 3
      },
      {
        "q": "What is the role of creatine phosphate in muscle?",
        "options": [
          "It carries oxygen",
          "It removes lactate",
          "It provides a rapid source of phosphate to regenerate ATP from ADP during the first few seconds of intense exercise",
          "It builds protein"
        ],
        "answer": 2
      },
      {
        "q": "What type of muscle fibre is best for endurance activities?",
        "options": [
          "Fast-twitch type IIa",
          "Cardiac muscle",
          "Slow-twitch type I",
          "Fast-twitch type IIb"
        ],
        "answer": 2
      },
      {
        "q": "What does the electron transport chain produce?",
        "options": [
          "The majority of ATP (via chemiosmosis) and water as a byproduct",
          "NADH",
          "Glucose",
          "Carbon dioxide and glucose from the breakdown of pyruvate in the matrix"
        ],
        "answer": 0
      },
      {
        "q": "What molecule links glycolysis to the Krebs cycle?",
        "options": [
          "Lactate (formed from pyruvate during anaerobic respiration)",
          "FAD",
          "Glucose",
          "Acetyl CoA (formed from pyruvate via the link reaction)"
        ],
        "answer": 3
      }
    ],
    "amber": [
      {
        "q": "Explain how the structure of a mitochondrion is adapted for aerobic respiration.",
        "options": [
          "Structure is irrelevant",
          "It has no adaptations",
          "Only the outer membrane matters: it is folded into cristae holding the Krebs cycle enzymes, while the matrix contains the ETC and ATP synthase, and mitochondria have no DNA of their own, so all their proteins are made from nuclear genes",
          "Double membrane (inner folded into cristae for large SA for electron transport chain/ATP synthase); matrix contains Krebs cycle enzymes; small size for proximity to reactions; own DNA for producing some respiratory proteins"
        ],
        "answer": 3
      },
      {
        "q": "Describe the process of the link reaction.",
        "options": [
          "It produces glucose",
          "Pyruvate enters mitochondrial matrix; decarboxylated (CO2 removed) and dehydrogenated (H to NAD+); 2C acetyl group combines with coenzyme A forming acetyl CoA",
          "It is part of glycolysis",
          "It occurs in the cytoplasm as the last stage of glycolysis, where glucose is split into two molecules of acetyl CoA, releasing ATP and oxygen but no carbon dioxide"
        ],
        "answer": 1
      },
      {
        "q": "Explain how the sliding filament mechanism causes muscle contraction.",
        "options": [
          "Filaments grow",
          "Only myosin moves",
          "Actin dissolves",
          "Ca2+ binds troponin → tropomyosin moves exposing binding sites → myosin heads bind actin (cross-bridge) → power stroke pulls actin toward centre → ATP binds myosin causing detachment → myosin head re-cocks → cycle repeats"
        ],
        "answer": 3
      },
      {
        "q": "How does lactate accumulation during anaerobic respiration affect muscle function?",
        "options": [
          "It has no effect",
          "Lactate improves performance, because it raises the pH of the muscle, activating enzymes and increasing Ca2+ binding, so muscles contract more strongly the more lactate they produce, and it is never removed or broken down afterwards",
          "Lactate lowers pH, inhibiting enzyme activity and interfering with Ca2+ binding; this reduces contraction efficiency and causes fatigue; lactate is later oxidised in the liver (Cori cycle) or used as respiratory substrate",
          "Lactate only affects the brain"
        ],
        "answer": 2
      },
      {
        "q": "Explain the role of the electron transport chain in producing ATP.",
        "options": [
          "It produces NADH",
          "It directly produces ATP without any chemiosmosis: electrons from glucose are passed to ADP in the cytoplasm, and oxygen is not needed because the carriers in the outer membrane release energy by breaking down water into hydrogen and oxygen gas in the matrix",
          "Reduced NAD/FAD donate electrons to carrier proteins in the inner membrane; energy released pumps H+ into intermembrane space; H+ flows back through ATP synthase (chemiosmosis), driving ATP synthesis; O2 is final electron acceptor forming water",
          "It occurs in the cytoplasm"
        ],
        "answer": 2
      },
      {
        "q": "Compare slow-twitch and fast-twitch muscle fibres in terms of structure and function.",
        "options": [
          "They are identical",
          "Slow-twitch: more mitochondria, more myoglobin, rich blood supply, fatigue-resistant, aerobic; Fast-twitch: fewer mitochondria, less myoglobin, larger glycogen stores, generate force rapidly, fatigue quickly, anaerobic",
          "Fast-twitch fibres have more mitochondria and myoglobin, a rich blood supply and resist fatigue, while slow-twitch fibres have large glycogen stores, contract rapidly and tire quickly, so they are used mainly by sprinters in races",
          "Slow-twitch are for sprinting"
        ],
        "answer": 1
      },
      {
        "q": "Explain how the neuromuscular junction triggers muscle contraction.",
        "options": [
          "Action potential arrives at motor neurone terminal → Ca2+ influx → acetylcholine released into synaptic cleft → ACh binds receptors on muscle membrane → depolarisation spreads along T-tubules → Ca2+ released from SR → contraction initiates",
          "Nerve impulses pass directly into the muscle as an electric current across the gap, with no neurotransmitter or calcium involved; the impulse travels along the outside of the fibre and causes the myosin heads to contract immediately without any T-tubules",
          "Only hormones trigger contraction",
          "Muscles contract without nerves"
        ],
        "answer": 0
      },
      {
        "q": "How does temperature regulation relate to metabolic rate during exercise?",
        "options": [
          "Exercise increases metabolic rate producing excess heat; vasodilation directs blood to skin for radiation; sweating allows evaporative cooling; if temperature rises too high, enzymes denature and performance decreases",
          "Temperature is unregulated during exercise",
          "Only shivering regulates temperature",
          "Body temperature never changes during exercise, because muscles release no heat, so vasodilation and sweating are not needed and enzymes work at the same rate however long and hard the exercise continues in any athlete"
        ],
        "answer": 0
      },
      {
        "q": "Explain why the link reaction and Krebs cycle take place in the mitochondria, while glycolysis takes place in the cytoplasm.",
        "options": [
          "Glucose can cross the mitochondrial membranes but pyruvate cannot, so pyruvate must be broken down in the cytoplasm while glucose is broken down in the matrix",
          "The Krebs cycle takes place on the outer mitochondrial membrane, because this membrane is folded into cristae that hold the Krebs cycle enzymes and ATP synthase",
          "Their enzymes are in the matrix, next to the inner membrane where the reduced NAD and FAD they produce are reoxidised; glycolysis enzymes are in the cytoplasm",
          "Glycolysis needs oxygen, so it happens in the cytoplasm where oxygen first arrives; the Krebs cycle is anaerobic, so it is kept inside the mitochondria"
        ],
        "answer": 2
      },
      {
        "q": "How does cardiac muscle differ from skeletal muscle?",
        "options": [
          "Skeletal muscle is myogenic and involuntary, with intercalated discs and no fatigue, while cardiac muscle is neurogenic and voluntary, with many nuclei per fibre, so the heart can only beat when it receives impulses from the brain",
          "Cardiac: myogenic (self-stimulating), intercalated discs for rapid impulse spread, abundant mitochondria, does not fatigue, involuntary; Skeletal: neurogenic, voluntary, can fatigue, multinucleate, no intercalated discs",
          "Cardiac muscle is voluntary",
          "They are identical"
        ],
        "answer": 1
      },
      {
        "q": "Explain how the Krebs cycle generates reduced coenzymes and ATP.",
        "options": [
          "Acetyl CoA (2C) joins oxaloacetate (4C) forming citrate (6C); through a series of decarboxylations and dehydrogenations, CO2 is released, NAD+ and FAD are reduced (carrying H to ETC), and 1 ATP is produced by substrate-level phosphorylation per turn",
          "It directly produces most ATP",
          "It produces glucose",
          "It only occurs anaerobically"
        ],
        "answer": 0
      },
      {
        "q": "Explain how the electrical activity of the heart makes the ventricles contract after the atria.",
        "options": [
          "The AVN starts each beat and sends impulses up the Purkyne fibres to the atria, so the atria contract last, squeezing blood upwards from the ventricle base",
          "Impulses pass straight from the atria to the ventricles across the whole of the non-conducting tissue, so both chambers contract at once",
          "The SAN wave spreads over the atria; the AVN delays it so the atria empty first, then it passes down the bundle of His and up Purkyne fibres from the apex",
          "The bundle of His holds the impulse in the atria until the ventricles have filled, then the SAN sends impulses down both sides of the septum at once"
        ],
        "answer": 2
      },
      {
        "q": "Which statement correctly describes what happens when the arm is bent at the elbow?",
        "options": [
          "The biceps pushes the forearm up as it lengthens, while tendons hold the humerus and ulna together at the elbow and stop it dislocating",
          "The biceps (a flexor) contracts and the triceps (an extensor) relaxes; tendons pass the pull to the bone and ligaments hold the joint together",
          "The triceps (a flexor) contracts and the biceps (an extensor) relaxes; ligaments attach the muscles to the bones and tendons join bone to bone",
          "The biceps and triceps both contract at the same time, and ligaments transmit the pull of each muscle to the bones so that the joint bends"
        ],
        "answer": 1
      },
      {
        "q": "During exercise, a student's tidal volume rises from 0.5 dm³ to 2.0 dm³ and their breathing rate rises from 12 to 30 breaths min⁻¹. By what factor does their minute ventilation increase?",
        "options": [
          "2.5",
          "16",
          "4",
          "10"
        ],
        "answer": 3
      },
      {
        "q": "Explain the role of myoglobin in muscle tissue.",
        "options": [
          "It produces ATP",
          "Myoglobin is an oxygen-storing protein in muscle with higher affinity for O2 than haemoglobin; it acts as an oxygen reserve, releasing O2 when muscle O2 tension drops during intense exercise",
          "It contracts the muscle fibres by sliding along actin, using ATP made in the cytoplasm, and it has a lower affinity for oxygen than haemoglobin, so it releases O2 into the blood during exercise",
          "It carries CO2"
        ],
        "answer": 1
      },
      {
        "q": "Which of these is an example of positive feedback?",
        "options": [
          "Na⁺ entering an axon depolarises it, which opens more Na⁺ channels",
          "Heart rate falling back to resting level as blood CO₂ falls after exercise",
          "Sweating and vasodilation of skin arterioles when the core temperature rises",
          "Breathing rate rising when the blood CO₂ concentration increases"
        ],
        "answer": 0
      },
      {
        "q": "Explain how decarboxylation and dehydrogenation are important in the Krebs cycle.",
        "options": [
          "They produce glucose",
          "They are not important",
          "Decarboxylation removes carbon as CO2 (waste product); dehydrogenation removes hydrogen atoms which reduce NAD+/FAD; these reduced coenzymes carry energy to the ETC where most ATP is made; both are essential for continued cycle operation",
          "They only occur in glycolysis"
        ],
        "answer": 2
      },
      {
        "q": "How does the sympathetic nervous system prepare muscles for exercise?",
        "options": [
          "It slows the heart and constricts the bronchioles to save energy, moves blood from the muscles to the gut, stores glucose as glycogen and inhibits adrenaline release, so the body rests before exercise begins",
          "It relaxes muscles",
          "It promotes digestion",
          "It increases heart rate and stroke volume (more O2 to muscles), dilates bronchioles (more gas exchange), redirects blood flow from gut to muscles, stimulates glycogenolysis, and triggers adrenaline release"
        ],
        "answer": 3
      },
      {
        "q": "Explain the Cori cycle and its significance during exercise.",
        "options": [
          "Lactate produced anaerobically in muscles is transported in blood to the liver, where it is converted back to glucose (gluconeogenesis) which can return to muscles; this allows continued anaerobic activity while managing lactate levels",
          "It is the same as Krebs cycle",
          "It produces lactate",
          "It occurs in muscles only"
        ],
        "answer": 0
      },
      {
        "q": "How does substrate-level phosphorylation differ from oxidative phosphorylation?",
        "options": [
          "Oxidative does not need oxygen",
          "Substrate-level produces more ATP",
          "They are identical",
          "Substrate-level: phosphate transferred directly from a substrate to ADP (occurs in glycolysis and Krebs cycle, no O2 needed); Oxidative: ATP produced via chemiosmosis using energy from ETC (requires O2 as final electron acceptor), produces much more ATP"
        ],
        "answer": 3
      }
    ],
    "red": [
      {
        "q": "Evaluate the use of VO2 max as a measure of athletic fitness, discussing its limitations.",
        "options": [
          "VO2 max is a perfect fitness measure with no limitations, because two athletes with the same value always record identical times in every race, whatever the distance",
          "Only sprinters need VO2 max",
          "It has no limitations",
          "Strengths: objective and linked to endurance performance; limitations: ignores efficiency, lactate threshold and motivation, and needs costly equipment"
        ],
        "answer": 3
      },
      {
        "q": "Discuss how understanding the biochemistry of muscle fatigue has informed strategies for athletic performance enhancement.",
        "options": [
          "Biochemistry is irrelevant to sport",
          "Knowing that fatigue involves H+ accumulation and fuel depletion, not just lactate, has led to buffering, carbohydrate loading and interval training",
          "Fatigue is poorly understood",
          "Only lactate causes fatigue, so the one useful strategy is to drink water during events to wash lactate out of the muscles, since pH and fuel stores play no role"
        ],
        "answer": 1
      },
      {
        "q": "A sprinter and marathon runner have similar body compositions but very different muscle fibre profiles. Analyse how their fibre type distribution relates to their performance.",
        "options": [
          "Sprinters have mostly fast-twitch fibres for rapid, anaerobic power; marathon runners have mostly slow-twitch fibres with many mitochondria for endurance",
          "Fibre type is irrelevant",
          "All athletes have identical fibre types, so the difference in their performance comes entirely from the size of their lungs and how much water they drink during a race",
          "Only training matters"
        ],
        "answer": 0
      },
      {
        "q": "Evaluate the ethical and health implications of using performance-enhancing substances such as EPO or anabolic steroids.",
        "options": [
          "All enhancement is acceptable",
          "Enhancement has no health risks, because EPO and steroids are natural hormones that the body always removes safely, so they are allowed in all major sports competitions",
          "EPO raises red cell count and O2 delivery but thickens the blood, risking clots; steroids risk heart and liver damage; both are unfair and banned",
          "There are no ethical issues"
        ],
        "answer": 2
      },
      {
        "q": "Explain why the theoretical maximum ATP yield from one glucose molecule (36-38 ATP) is rarely achieved in practice.",
        "options": [
          "The number is always exactly 38",
          "Actual yield is lower because the proton gradient also drives transport and some H+ leaks across the inner membrane, so about 30–32 ATP are made",
          "Only 2 ATP are ever made",
          "The maximum is always achieved"
        ],
        "answer": 1
      },
      {
        "q": "Analyse the physiological responses to prolonged exercise and explain how the body maintains ATP supply as different substrates are depleted.",
        "options": [
          "Only glucose is ever used: the body burns blood glucose at a fixed rate throughout exercise and never uses creatine phosphate, glycogen or fat, even in long events",
          "Creatine phosphate supplies the first ~10 s, then anaerobic glycolysis, then aerobic use of glycogen, and increasingly fats as glycogen runs low",
          "ATP supply never changes",
          "Only one substrate is used"
        ],
        "answer": 1
      },
      {
        "q": "Discuss how the integration of the cardiovascular, respiratory, and muscular systems enables sustained physical activity.",
        "options": [
          "Cardiac output rises to deliver O2 and remove CO2, ventilation increases gas exchange, and muscles use the O2 for aerobic respiration to supply ATP",
          "Only muscles are involved",
          "The heart is not important in exercise, because muscles take oxygen directly from the air through the skin, so the lungs and blood vessels work independently of them",
          "These systems work independently"
        ],
        "answer": 0
      },
      {
        "q": "A survey finds that people who take the least exercise have the highest rates of type 2 diabetes. Evaluate what can be concluded from this.",
        "options": [
          "Diabetes must cause people to exercise less, so the survey shows only the reverse link, which proves that exercise has no effect on the risk of developing diabetes",
          "Lack of exercise has been proven to cause type 2 diabetes, because the link was found in a large survey, and large surveys cannot be affected by any other factors such as diet",
          "Nothing at all can be concluded, because survey data on exercise and disease can never show any kind of relationship between the two variables, however large the sample",
          "There is a correlation but not proof of cause: diet or obesity could explain it unless controlled, and a mechanism or an intervention trial is needed"
        ],
        "answer": 3
      },
      {
        "q": "A patient with a mitochondrial disease has reduced ATP production. Analyse the effects this would have on muscle function and whole-body physiology.",
        "options": [
          "Less oxidative phosphorylation means less ATP per glucose, so muscles tire quickly and rely on anaerobic respiration, causing lactate build-up",
          "Only muscles are affected",
          "It would have no effect",
          "The body would function normally"
        ],
        "answer": 0
      },
      {
        "q": "Anabolic steroids such as testosterone increase muscle mass. Analyse how they bring about this effect at the level of the gene.",
        "options": [
          "The steroid enters the nucleus and changes the base sequence of the genes for muscle proteins, so that the mutated genes are transcribed more often in each cell",
          "The steroid acts as an enzyme in the cytoplasm, breaking down the mRNA for muscle proteins more slowly, so that no new transcription is needed in the fibre",
          "The lipid-soluble steroid crosses the membrane and binds a receptor; the complex acts as a transcription factor, binding DNA and switching on genes for muscle proteins",
          "The steroid binds to a receptor on the cell surface, which activates an enzyme inside the cell that joins amino acids directly into muscle proteins without transcription"
        ],
        "answer": 2
      }
    ]
  },
  "S8": {
    "name": "Grey Matter",
    "green": [
      {
        "q": "What is a neurone?",
        "options": [
          "A nerve cell that transmits electrical impulses",
          "A blood cell",
          "A muscle cell",
          "A type of hormone released into the blood to carry messages"
        ],
        "answer": 0
      },
      {
        "q": "What is a synapse?",
        "options": [
          "The junction between two neurones where signal transmission occurs via neurotransmitters",
          "A nerve cell body",
          "A type of muscle",
          "A reflex arc"
        ],
        "answer": 0
      },
      {
        "q": "What is the resting potential of a neurone?",
        "options": [
          "-70mV",
          "+40mV",
          "-90mV",
          "0mV"
        ],
        "answer": 0
      },
      {
        "q": "What is a reflex arc?",
        "options": [
          "A voluntary response",
          "A brain structure",
          "The nerve pathway involved in a rapid, involuntary response: receptor → sensory → relay → motor → effector",
          "A type of synapse"
        ],
        "answer": 2
      },
      {
        "q": "What is myelin?",
        "options": [
          "A type of receptor",
          "A fatty sheath around nerve fibres that insulates and speeds up impulse transmission",
          "A neurotransmitter released at the nodes of Ranvier that slows impulses so that they can be processed",
          "A hormone"
        ],
        "answer": 1
      },
      {
        "q": "What is the cerebrum responsible for?",
        "options": [
          "Heart rate control, breathing and blood pressure, all of which are involuntary functions kept constant",
          "Balance",
          "Breathing",
          "Higher brain functions: thought, memory, language, consciousness, voluntary movement"
        ],
        "answer": 3
      },
      {
        "q": "What is the cerebellum responsible for?",
        "options": [
          "Emotion",
          "Memory storage and the recall of past events each day",
          "Vision",
          "Coordination of movement, balance, and posture"
        ],
        "answer": 3
      },
      {
        "q": "What is the medulla oblongata responsible for?",
        "options": [
          "Sight",
          "Voluntary movement of the skeletal muscles and the coordination of posture and balance",
          "Memory",
          "Controlling involuntary functions: heart rate, breathing rate, blood pressure"
        ],
        "answer": 3
      },
      {
        "q": "What is a neurotransmitter?",
        "options": [
          "A type of hormone",
          "An electrical signal that jumps directly across the synaptic gap from one neurone to the next",
          "A chemical messenger released at synapses that transmits signals between neurones",
          "A receptor protein"
        ],
        "answer": 2
      },
      {
        "q": "What is the visual cortex?",
        "options": [
          "The optic nerve",
          "The lens of the eye, which focuses light onto the retina and changes shape for near and far objects",
          "The area of the cerebral cortex (occipital lobe) that processes visual information",
          "The retina"
        ],
        "answer": 2
      },
      {
        "q": "What is the role of rod cells in the retina?",
        "options": [
          "Focusing light",
          "Producing tears",
          "Colour vision in bright light, with three types sensitive to red, green and blue wavelengths",
          "Sensitive to low light levels, providing black and white/peripheral vision"
        ],
        "answer": 3
      },
      {
        "q": "What happens to rhodopsin when light strikes a rod cell?",
        "options": [
          "It opens Ca²⁺ channels in the rod cell membrane",
          "It releases acetylcholine onto the bipolar cell",
          "It combines with opsin to make more retinal",
          "It breaks down into retinal and opsin (bleaching)"
        ],
        "answer": 3
      },
      {
        "q": "What does depolarisation mean?",
        "options": [
          "The membrane becomes less negative (more positive) due to influx of Na+ ions",
          "The cell dies",
          "The membrane becomes more negative inside as potassium ions flow in through channels",
          "Potassium leaves the cell"
        ],
        "answer": 0
      },
      {
        "q": "What is an action potential?",
        "options": [
          "A type of synapse",
          "A reflex",
          "A rapid reversal of membrane potential (depolarisation then repolarisation) that travels along an axon as a nerve impulse",
          "The resting state"
        ],
        "answer": 2
      },
      {
        "q": "What is the all-or-nothing principle?",
        "options": [
          "A neurone either fires a full action potential if threshold is reached, or does not fire at all; there is no partial response",
          "Impulses vary in size",
          "It only applies to sensory neurones",
          "Some impulses are larger"
        ],
        "answer": 0
      },
      {
        "q": "What is the function of the hypothalamus?",
        "options": [
          "Vision",
          "Controls homeostatic mechanisms including body temperature, hunger, thirst, and links nervous and endocrine systems",
          "Hearing",
          "Voluntary movement"
        ],
        "answer": 1
      },
      {
        "q": "Which brain imaging technique uses X-rays to produce images of the brain?",
        "options": [
          "PET",
          "CT",
          "fMRI",
          "MRI"
        ],
        "answer": 1
      },
      {
        "q": "What is habituation?",
        "options": [
          "A reflex",
          "Learning a new skill through repeated practice until it becomes automatic and needs no conscious attention",
          "A reduction in response to a repeated, harmless stimulus — the simplest form of learning",
          "Memory formation"
        ],
        "answer": 2
      },
      {
        "q": "Which plant growth substance causes cells on the shaded side of a shoot to elongate, so the shoot bends towards light?",
        "options": [
          "Abscisic acid",
          "IAA (auxin)",
          "Gibberellin",
          "Phytochrome"
        ],
        "answer": 1
      },
      {
        "q": "What is the function of sensory neurones?",
        "options": [
          "Connect neurones in the brain",
          "Carry impulses from receptors to the CNS",
          "Produce neurotransmitters",
          "Carry impulses from the CNS to the effectors such as muscles"
        ],
        "answer": 1
      }
    ],
    "amber": [
      {
        "q": "Explain how saltatory conduction speeds up nerve impulse transmission.",
        "options": [
          "Myelin slows impulses",
          "It does not speed transmission",
          "Saltatory conduction uses different ions from normal conduction: calcium ions flow along the whole length of the myelin sheath instead of sodium, and because myelin slows these ions, impulses in myelinated fibres travel more slowly than in unmyelinated ones",
          "In myelinated neurones, ion exchange only occurs at nodes of Ranvier (gaps in myelin); the impulse jumps from node to node, greatly increasing conduction speed compared to continuous conduction in unmyelinated fibres"
        ],
        "answer": 3
      },
      {
        "q": "Describe how a nerve impulse is transmitted across a cholinergic synapse.",
        "options": [
          "Action potential arrives → Ca2+ enters presynaptic terminal → vesicles fuse with membrane releasing ACh → ACh diffuses across cleft → binds to receptors on postsynaptic membrane → Na+ channels open → depolarisation → ACh broken down by acetylcholinesterase",
          "Neurotransmitters are reused without breakdown: the impulse jumps across the cleft as an electric current, acetylcholine is released afterwards to open K+ channels, and it stays bound to the receptors permanently, so no enzyme is needed and the next impulse passes more easily",
          "Electricity flows across the gap",
          "Impulses jump directly across"
        ],
        "answer": 0
      },
      {
        "q": "How does the brain exhibit plasticity?",
        "options": [
          "The brain is fixed from birth: no new synaptic connections form during learning, pathways cannot be strengthened or weakened by experience, and after injury the lost functions can never be taken over by other areas, because each brain region has a single function that cannot change",
          "Only children show plasticity",
          "Neural pathways can be strengthened or weakened based on experience; new synaptic connections form during learning; after injury, other brain areas can take over lost functions; this structural and functional reorganisation is called neural plasticity",
          "It cannot change"
        ],
        "answer": 2
      },
      {
        "q": "Explain the role of the sodium-potassium pump in maintaining resting potential.",
        "options": [
          "The pump actively transports 3 Na+ out and 2 K+ in per ATP molecule, creating an electrochemical gradient; combined with K+ leak channels, this maintains the interior at -70mV (negative relative to outside)",
          "It only works during action potentials, pumping 3 K+ out and 2 Na+ in without using ATP, which makes the inside of the neurone positive at +40 mV, so it has no role in keeping the resting potential at −70 mV between impulses",
          "It has no role",
          "It makes the inside positive"
        ],
        "answer": 0
      },
      {
        "q": "How do drugs that affect synaptic transmission work? Give examples.",
        "options": [
          "All drugs are agonists",
          "Drugs cannot affect synapses",
          "Only illegal drugs affect synapses",
          "Agonists mimic/enhance neurotransmitter effects (e.g., nicotine mimics ACh); antagonists block receptors (e.g., curare blocks ACh receptors); others inhibit reuptake (e.g., SSRIs block serotonin reuptake) or inhibit breakdown enzymes (e.g., nerve agents inhibit acetylcholinesterase)"
        ],
        "answer": 3
      },
      {
        "q": "Explain how the structure of a myelinated motor neurone relates to its function.",
        "options": [
          "Long axon for rapid transmission over distance; myelin sheath with nodes of Ranvier for saltatory conduction; many mitochondria at terminal for ATP (vesicle release); branched endings for multiple synaptic connections; cell body in spinal cord with dendrites for receiving inputs",
          "Structure is irrelevant",
          "Motor neurones have no myelin",
          "All neurones are identical"
        ],
        "answer": 0
      },
      {
        "q": "Explain how light falling on a rod cell leads to an action potential in an optic neurone.",
        "options": [
          "Light opens Na⁺ channels in the rod, which depolarises and releases more acetylcholine onto the optic neurone, so that an action potential starts in the optic nerve",
          "Rhodopsin splits into retinal and opsin; cation channels close, the rod hyperpolarises, stops releasing inhibitory transmitter, and the bipolar cell depolarises",
          "Light makes the rod release K⁺ ions directly into the optic neurone, which depolarises it without any neurotransmitter being released at the synapse",
          "Rhodopsin is made from retinal and opsin in the light, and it then travels along the optic nerve to the brain, where it acts as the nerve impulse itself"
        ],
        "answer": 1
      },
      {
        "q": "Explain the concept of critical periods in brain development.",
        "options": [
          "Critical periods are time windows during which specific neural circuits require environmental stimulation to develop normally; without appropriate input during this period (e.g., visual input for visual cortex development), the circuits may never function properly; relates to synaptic pruning and plasticity",
          "The brain develops the same regardless of experience",
          "Critical periods do not exist",
          "Critical periods only occur in adults"
        ],
        "answer": 0
      },
      {
        "q": "Explain how phytochrome enables a plant to respond to light.",
        "options": [
          "Phytochrome absorbs green light and uses the energy to make ATP, which is then used to power germination and flowering when the days lengthen",
          "Red light converts Pr to active Pfr, which alters transcription of genes, e.g. for germination; far-red light or darkness converts it back to Pr",
          "Phytochrome is a hormone that is carried down to the roots, where it makes them grow away from the light, so it controls the direction of root growth",
          "Far-red light converts Pr to Pfr, which moves to the shaded side of the shoot and makes the cells there elongate, so the shoot bends towards the light"
        ],
        "answer": 1
      },
      {
        "q": "Explain how CT and fMRI scans provide different information about brain structure and function.",
        "options": [
          "fMRI shows structure only, using X-rays to find tumours and bleeding, while CT detects changes in blood flow to show which areas are active during tasks, so CT is the functional scan and fMRI the structural one, and both require surgery to the skull",
          "CT shows function",
          "CT uses X-rays to show brain structure (tumours, bleeding, bone); fMRI detects blood flow changes indicating active brain areas during tasks (functional mapping); CT is structural, fMRI is functional; both are non-invasive",
          "They provide identical information"
        ],
        "answer": 2
      },
      {
        "q": "How does summation at synapses allow integration of signals?",
        "options": [
          "Only one impulse is needed",
          "All synapses always fire",
          "Temporal summation: rapid successive impulses from one neurone accumulate enough neurotransmitter to reach threshold; Spatial summation: multiple presynaptic neurones release neurotransmitter simultaneously; both or either can trigger postsynaptic action potential; allows decision-making at neural level",
          "Summation does not occur"
        ],
        "answer": 2
      },
      {
        "q": "Explain the difference between the sympathetic and parasympathetic nervous systems.",
        "options": [
          "Both systems increase heart rate and dilate the pupils: the sympathetic system acts only during exercise and the parasympathetic only during sleep, so they work together rather than antagonistically, and neither has any effect on digestion, adrenaline release or maintaining homeostasis in the body",
          "Sympathetic: \"fight or flight\" — increases heart rate, dilates pupils, inhibits digestion, releases adrenaline; Parasympathetic: \"rest and digest\" — decreases heart rate, constricts pupils, stimulates digestion; they are antagonistic, maintaining homeostasis",
          "Only one system exists",
          "They are identical"
        ],
        "answer": 1
      },
      {
        "q": "How does the retina convert light energy into nerve impulses?",
        "options": [
          "Light causes rhodopsin (in rods) or cone pigments to change shape (bleaching), triggering a cascade that hyperpolarises photoreceptors; this modulates neurotransmitter release to bipolar cells and then ganglion cells, whose axons form the optic nerve carrying impulses to the brain",
          "Only the lens creates impulses",
          "Light directly creates electricity",
          "The retina does not produce impulses"
        ],
        "answer": 0
      },
      {
        "q": "Explain how MDMA (ecstasy) affects synaptic transmission.",
        "options": [
          "It is converted to dopamine in the brain, so it is prescribed to replace the dopamine that is lost in the synapses of people with Parkinson's disease",
          "It blocks serotonin receptors on the postsynaptic membrane, so serotonin cannot bind to them and the postsynaptic neurone is stimulated less, lowering mood",
          "It increases the activity of acetylcholinesterase, so acetylcholine is removed from the synaptic cleft faster than normal and transmission is weakened",
          "It inhibits the transporters that take serotonin back into the presynaptic neurone, so serotonin stays in the cleft and keeps stimulating receptors"
        ],
        "answer": 3
      },
      {
        "q": "How does habituation demonstrate a simple form of learning at the synaptic level?",
        "options": [
          "Habituation increases the response to a repeated harmless stimulus: more calcium channels open with each stimulus, so more vesicles fuse and more neurotransmitter is released, and the postsynaptic response grows stronger each time, which involves forming entirely new synapses rather than changing existing ones",
          "It involves new synapse formation",
          "With repeated harmless stimuli, less neurotransmitter is released at the sensory synapse (fewer Ca2+ channels open, fewer vesicles fuse); the post-synaptic response decreases; this involves changes in presynaptic calcium channel sensitivity — a simple molecular memory",
          "Habituation is not learning"
        ],
        "answer": 2
      },
      {
        "q": "Explain how the pupil reflex demonstrates a reflex arc.",
        "options": [
          "It is not a reflex",
          "It involves the cerebrum and is voluntary: light is detected by the lens, the decision is made in the visual cortex, and impulses travel down the spinal cord to the radial muscles of the iris, which contract slowly to widen the pupil so more light enters the eye",
          "It is voluntary",
          "Light stimulus → retinal photoreceptors (receptor) → optic nerve (sensory) → midbrain (relay/integration) → oculomotor nerve (motor) → circular muscles of iris (effector) → pupil constricts; involuntary, rapid, protective response"
        ],
        "answer": 3
      },
      {
        "q": "Why is Parkinson's disease treated with L-Dopa rather than dopamine itself?",
        "options": [
          "L-Dopa regrows the dopamine-producing neurones that have died, while dopamine only replaces the lost chemical",
          "L-Dopa blocks the reuptake of dopamine, but dopamine given as a drug is broken down in the synaptic cleft",
          "L-Dopa can cross the blood–brain barrier and is converted to dopamine in the brain, but dopamine cannot cross",
          "Dopamine would cure the disease but is too expensive, while L-Dopa is a cheaper form of the same molecule"
        ],
        "answer": 2
      },
      {
        "q": "Explain how Parkinson's disease relates to neurotransmitter function.",
        "options": [
          "Only serotonin is affected",
          "Parkinson's involves death of dopamine-producing neurones in the substantia nigra; reduced dopamine in the basal ganglia impairs movement initiation and coordination; treatment includes L-DOPA (dopamine precursor) but does not halt neurodegeneration",
          "It involves excess dopamine produced by overactive neurones in the cerebellum, which causes uncontrolled movement, so treatment with L-DOPA, which blocks dopamine release, cures the disease by halting the loss of neurones and restoring normal coordination permanently",
          "It is unrelated to neurotransmitters"
        ],
        "answer": 1
      },
      {
        "q": "How does the refractory period ensure unidirectional impulse transmission?",
        "options": [
          "The refractory period speeds up impulses by letting the same section of membrane fire again immediately, so impulses travel in both directions at once and meet in the middle of the axon, where the Na+ channels are inactivated and the signal is doubled",
          "The refractory period has no role",
          "Impulses can travel both ways",
          "After depolarisation, Na+ channels are inactivated (absolute refractory period) so that section cannot be re-stimulated; this ensures the impulse can only travel forward to resting membrane, preventing backward propagation"
        ],
        "answer": 3
      },
      {
        "q": "Explain how photoreceptors adapt to changes in light intensity.",
        "options": [
          "Adaptation is instant",
          "In bright light, photopigments are bleached faster than regenerated; sensitivity decreases (light adaptation); in darkness, photopigments regenerate, rhodopsin accumulates increasing sensitivity (dark adaptation takes ~30 minutes); this allows vision across a wide range of light intensities",
          "They do not adapt",
          "Only cone cells adapt"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Evaluate the ethical issues surrounding the use of animals in research to study brain function and neurological diseases.",
        "options": [
          "There are no ethical issues",
          "For: essential for studying disease and testing treatments safely; against: animal suffering, and results may not apply to the human brain",
          "Animals are identical to humans, so every result applies directly to the human brain, and because animals feel no pain there are no ethical issues in using them for research",
          "Animal research is always wrong"
        ],
        "answer": 1
      },
      {
        "q": "Evaluate the use of twin studies to investigate the contributions of nature and nurture to brain development.",
        "options": [
          "Identical twins share all alleles, so their differences are environmental; comparing identical with non-identical twins estimates the genetic part, but shared environments limit this",
          "Twin studies show brain development is due only to the environment, because twins raised together are always more alike than twins raised apart, in every single trait that is measured",
          "Twin studies cannot tell us anything, because non-identical twins share no alleles at all, so there is no genetic similarity to compare with identical twins in any trait being studied",
          "Twin studies prove that all brain characteristics are genetic, because identical twins always have identical abilities and personalities, whether or not they are raised in the same family"
        ],
        "answer": 0
      },
      {
        "q": "Evaluate the use of genome sequencing in developing personalised medicine.",
        "options": [
          "It has no benefits, because a person's genome cannot affect how they respond to any drug, and sequencing is far too slow ever to be done for individual patients in a clinic",
          "It is entirely beneficial, because genetic data is always kept private, costs nothing to collect, and tells each patient exactly which diseases they will go on to develop in later life",
          "It raises ethical issues only, because the drugs it produces work equally well in everyone, so matching drugs to the patient's genome makes no difference to side effects or doses",
          "Drugs and doses can be matched to a patient's alleles, reducing side effects; but it is costly, genetic data raises privacy concerns and people may learn of risks with no cure"
        ],
        "answer": 3
      },
      {
        "q": "Evaluate the evidence that nature and nurture both contribute to brain development, with reference to specific examples.",
        "options": [
          "The debate is resolved",
          "Only environment matters",
          "Nature: genes set the basic brain architecture; nurture: experience shapes synapses, e.g. critical periods for vision and language development",
          "Only genes matter, because every synapse is fixed before birth, so early experience and critical periods have no effect on how the brain develops or functions"
        ],
        "answer": 2
      },
      {
        "q": "A new drug blocks acetylcholinesterase. Predict and explain its effects on synaptic transmission and the whole organism.",
        "options": [
          "ACh would not be broken down, causing persistent stimulation of postsynaptic cells, leading to muscle spasms, then paralysis and breathing failure",
          "It would only affect one synapse",
          "It would speed up transmission normally",
          "It would have no effect"
        ],
        "answer": 0
      },
      {
        "q": "Discuss the limitations of current brain scanning technologies in understanding consciousness and mental health disorders.",
        "options": [
          "Scanning directly reads thoughts and consciousness, so every mental health disorder can be diagnosed from a single brain scan without any clinical interview or testing",
          "fMRI measures blood flow, an indirect proxy for neural activity with limited time resolution, and cannot show thoughts or diagnose most disorders alone",
          "Brain scanning is perfect",
          "All mental health is visible on scans"
        ],
        "answer": 1
      },
      {
        "q": "Analyse the potential benefits and risks of using knowledge of synaptic plasticity to develop cognitive enhancement drugs for healthy individuals.",
        "options": [
          "Enhancement drugs are completely risk-free, since strengthening synapses can never cause side effects or dependence, so healthy people should take them every day",
          "Benefits: better memory, learning and attention; risks: side effects, unknown long-term effects, unfair advantage and pressure on others to use them",
          "There are no risks or benefits",
          "They could never work"
        ],
        "answer": 1
      },
      {
        "q": "Evaluate the growing of genetically modified herbicide-resistant crops.",
        "options": [
          "They have no risks, because inserted genes can never pass to other plants, and they give higher yields in every environment and every season, whatever the level of weed pressure",
          "They have no benefits, because herbicide-resistant crops need more herbicide than normal crops and always give lower yields, so farmers gain nothing at all from growing them",
          "The only risk is that the crops become poisonous to eat, because the herbicide-resistance gene makes the plant produce the herbicide itself in its fruit, leaves and seeds",
          "Weeds can be sprayed without harming the crop, raising yield; but the gene may spread to wild relatives, making resistant weeds, and heavy spraying can reduce biodiversity"
        ],
        "answer": 3
      },
      {
        "q": "Hubel and Wiesel stitched one eye of newborn kittens shut for several months. Analyse what their results showed.",
        "options": [
          "Both eyes became blind, showing that light entering one eye damages the rods in the other eye during development, so both retinas degenerate over the months",
          "The closed eye's rods had all died, showing that the blindness was caused by damage to the retina itself, not by any change in the connections in the visual cortex",
          "The eye was effectively blind when opened: axons from the open eye had taken over cortical neurones, showing stimulation is needed during a critical period",
          "When opened, the eye could see normally, showing that the visual cortex is fully wired before birth and so does not need any stimulation after birth to develop"
        ],
        "answer": 2
      },
      {
        "q": "Evaluate the use of PET scans compared with fMRI for investigating brain function.",
        "options": [
          "PET uses a radioactive tracer and can map chemicals such as dopamine uptake; fMRI avoids radiation and has better resolution, but only tracks oxygenated blood flow",
          "PET and fMRI both use X-rays to show the structure of the skull and brain, so neither of them can show which parts of the brain are active during a particular task",
          "fMRI measures the electrical activity of single neurones directly, so PET is no longer needed for any purpose in investigating brain function or diagnosing disease",
          "PET is better in every way, because it uses no radiation at all and shows brain structure in far more detail than fMRI, which has to rely on repeated X-ray exposure"
        ],
        "answer": 0
      }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = BIOLOGY_EDEXCEL_A_QUESTIONS;
