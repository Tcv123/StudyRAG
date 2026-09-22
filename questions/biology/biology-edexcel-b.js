/*
 * Edexcel B A-Level Biology (Pearson 9BI0) — MCQ Question Bank
 * Topics 1–10 of the 9BI0 specification.
 * 50 questions per topic: 20 green (recall), 20 amber (application), 10 red (analysis/evaluate).
 * answer: 0-based index of correct option.
 */

const BIOLOGY_EDEXCEL_B_QUESTIONS = {
  "1": {
    "name": "Biological Molecules",
    "green": [
      {
        "q": "Which of these carbohydrates is a disaccharide?",
        "options": [
          "Galactose",
          "Fructose",
          "Maltose",
          "Amylopectin"
        ],
        "answer": 2
      },
      {
        "q": "How does the structure of β-glucose differ from that of α-glucose?",
        "options": [
          "It is a pentose sugar, whereas α-glucose is a hexose",
          "Its CH₂OH group is attached to carbon 2, not carbon 5",
          "It has one more carbon atom in its ring than α-glucose",
          "The H and OH groups on carbon 1 are the other way up"
        ],
        "answer": 3
      },
      {
        "q": "Which two monosaccharides are joined in a molecule of sucrose?",
        "options": [
          "Two glucose molecules",
          "Glucose and fructose",
          "Fructose and galactose",
          "Glucose and galactose"
        ],
        "answer": 1
      },
      {
        "q": "Which pentose sugar is found in RNA and in ATP?",
        "options": [
          "Galactose",
          "Fructose",
          "Deoxyribose",
          "Ribose"
        ],
        "answer": 3
      },
      {
        "q": "Which bonds are found in amylopectin but not in amylose?",
        "options": [
          "α-1,6 glycosidic bonds",
          "β-1,4 glycosidic bonds",
          "α-1,4 glycosidic bonds",
          "Ester bonds between chains"
        ],
        "answer": 0
      },
      {
        "q": "Which bond forms between glycerol and a fatty acid in a triglyceride?",
        "options": [
          "Glycosidic bond",
          "Peptide bond",
          "Ester bond",
          "Phosphodiester bond"
        ],
        "answer": 2
      },
      {
        "q": "What feature is found in the hydrocarbon chain of an unsaturated fatty acid?",
        "options": [
          "At least one C=C double bond",
          "A phosphate group at one end",
          "Only single bonds between carbons",
          "An amine group on every carbon"
        ],
        "answer": 0
      },
      {
        "q": "Which part of a phospholipid molecule is hydrophilic?",
        "options": [
          "The long hydrocarbon chains",
          "The two fatty acid tails",
          "The charged phosphate group",
          "The C=C bonds in the tails"
        ],
        "answer": 2
      },
      {
        "q": "Which chemical group is present in every amino acid?",
        "options": [
          "A phosphate group (–PO₄)",
          "An amine group (–NH₂)",
          "A sulfur-containing group",
          "A C=C double bond"
        ],
        "answer": 1
      },
      {
        "q": "Which bond forms between the R groups of two cysteine molecules in a polypeptide?",
        "options": [
          "Ionic bond",
          "Peptide bond",
          "Phosphodiester bond",
          "Disulfide bond"
        ],
        "answer": 3
      },
      {
        "q": "Which level of protein structure is held by hydrogen bonds between –NH and C=O groups of the backbone, forming an α-helix?",
        "options": [
          "Quaternary structure",
          "Secondary structure",
          "Tertiary structure",
          "Primary structure"
        ],
        "answer": 1
      },
      {
        "q": "Which of these bases is a purine?",
        "options": [
          "Uracil",
          "Thymine",
          "Cytosine",
          "Guanine"
        ],
        "answer": 3
      },
      {
        "q": "How many hydrogen bonds form between cytosine and guanine in a DNA base pair?",
        "options": [
          "3",
          "2",
          "4",
          "1"
        ],
        "answer": 0
      },
      {
        "q": "What is the role of DNA helicase in DNA replication?",
        "options": [
          "It joins the short sections of a new strand into one continuous strand",
          "It forms hydrogen bonds between free nucleotides and the template",
          "It breaks hydrogen bonds between bases, separating the strands",
          "It forms phosphodiester bonds between nucleotides of a new strand"
        ],
        "answer": 2
      },
      {
        "q": "Where does transcription take place in a eukaryotic cell?",
        "options": [
          "In the Golgi apparatus",
          "In the nucleus",
          "At a ribosome",
          "In a vesicle"
        ],
        "answer": 1
      },
      {
        "q": "Which of these mRNA codons is a stop codon?",
        "options": [
          "AAU",
          "UAA",
          "AUG",
          "UAC"
        ],
        "answer": 1
      },
      {
        "q": "Which ion does a plant need in order to make chlorophyll?",
        "options": [
          "Magnesium ions",
          "Calcium ions",
          "Phosphate ions",
          "Nitrate ions"
        ],
        "answer": 0
      },
      {
        "q": "What do plants use calcium ions to make?",
        "options": [
          "Calcium pectate for the middle lamella",
          "Nitrogen-containing bases for DNA",
          "The phosphate groups of ADP and ATP",
          "Cellulose microfibrils for the cell wall"
        ],
        "answer": 0
      },
      {
        "q": "How does an enzyme increase the rate of a reaction?",
        "options": [
          "It increases the overall energy released by the reaction",
          "It raises the activation energy of the reverse reaction",
          "It supplies extra kinetic energy to the substrate",
          "It provides a pathway with a lower activation energy"
        ],
        "answer": 3
      },
      {
        "q": "At what temperature does liquid water reach its maximum density?",
        "options": [
          "37 °C",
          "0 °C",
          "4 °C",
          "100 °C"
        ],
        "answer": 2
      }
    ],
    "amber": [
      {
        "q": "An amylose molecule contains 500 glucose units. How many water molecules were released when it was made?",
        "options": [
          "250",
          "500",
          "501",
          "499"
        ],
        "answer": 3
      },
      {
        "q": "A trisaccharide is made from three glucose molecules (Mr 180 each; water Mr 18). What is the Mr of the trisaccharide?",
        "options": [
          "522",
          "504",
          "540",
          "486"
        ],
        "answer": 1
      },
      {
        "q": "In a sample of double-stranded DNA, 22% of the bases are thymine. What percentage of the bases are guanine?",
        "options": [
          "56%",
          "22%",
          "28%",
          "44%"
        ],
        "answer": 2
      },
      {
        "q": "A triplet on the antisense (template) strand of DNA reads TAC. What is the mRNA codon transcribed from it?",
        "options": [
          "ATG",
          "TAC",
          "UAC",
          "AUG"
        ],
        "answer": 3
      },
      {
        "q": "An mRNA codon reads GCU. What is the anticodon on the tRNA that pairs with it?",
        "options": [
          "GCA",
          "CGT",
          "GCU",
          "CGA"
        ],
        "answer": 3
      },
      {
        "q": "A polypeptide has 200 amino acids. What is the minimum number of mRNA bases needed to code for it, including the stop codon?",
        "options": [
          "597",
          "603",
          "600",
          "200"
        ],
        "answer": 1
      },
      {
        "q": "Why is starch, rather than glucose, used as the carbohydrate store in potato cells?",
        "options": [
          "It is insoluble, so it does not lower the water potential of the cells",
          "It is soluble, so it can be carried quickly in the phloem to where it is needed",
          "It is made of β-glucose, so its chains form strong hydrogen-bonded microfibrils",
          "It contains ester bonds, which release more energy than glycosidic bonds"
        ],
        "answer": 0
      },
      {
        "q": "Many small seeds store triglycerides rather than starch. Which is the best explanation?",
        "options": [
          "Triglycerides release about twice as much energy per gram, so the store is lighter",
          "Triglycerides contain more oxygen, so they are respired faster than carbohydrate",
          "Triglycerides are soluble, so they are easily moved to the growing embryo cells",
          "Triglycerides are polymers of glycerol, so they can be hydrolysed at many chain ends"
        ],
        "answer": 0
      },
      {
        "q": "A plant is grown in soil lacking nitrate ions. Which molecules will it be least able to make?",
        "options": [
          "Starch, because amylopectin branches contain nitrogen",
          "Triglycerides, because fatty acids contain nitrogen",
          "Proteins, because every amino acid contains nitrogen",
          "Cellulose, because β-glucose contains nitrogen atoms"
        ],
        "answer": 2
      },
      {
        "q": "A plant grown without magnesium ions has yellow leaves and grows slowly. What is the best explanation?",
        "options": [
          "Less ATP is made, because magnesium is part of every phosphate group",
          "Less chlorophyll is made, so less light is absorbed for photosynthesis",
          "Fewer amino acids are made, because magnesium is part of the amine group",
          "Less calcium pectate is made, so the leaf cells separate from each other"
        ],
        "answer": 1
      },
      {
        "q": "A substitution changes an mRNA codon from GAA to GAG. Both codons code for glutamic acid. What is the effect on the polypeptide?",
        "options": [
          "None, because the genetic code is degenerate",
          "The polypeptide ends early at a new stop codon",
          "A frameshift changes every amino acid after it",
          "One amino acid is replaced by a different one"
        ],
        "answer": 0
      },
      {
        "q": "Three consecutive bases forming one complete codon are deleted from the middle of a gene. What is the most likely effect on the polypeptide?",
        "options": [
          "Every amino acid after the deletion is changed because of a frameshift",
          "The polypeptide is unchanged, because the genetic code is degenerate",
          "One amino acid is missing, but the rest of the sequence is unchanged",
          "Three amino acids are missing from the end of the polypeptide chain"
        ],
        "answer": 2
      },
      {
        "q": "An enzyme solution is boiled for 10 minutes and then cooled to 30 °C. What happens to its activity?",
        "options": [
          "It becomes higher than before, because boiling breaks the bonds in the substrate",
          "It stays very low, because the shape of the active site has changed permanently",
          "It returns to normal, because the enzyme only loses kinetic energy on cooling",
          "It returns to normal, because the peptide bonds reform as the solution cools"
        ],
        "answer": 1
      },
      {
        "q": "An enzyme kept at 5 °C shows little activity. It is then warmed to 35 °C. What happens and why?",
        "options": [
          "Activity falls further, because the enzyme was killed by the cold storage",
          "Activity stays low, because the low temperature denatured the active site",
          "Activity increases, because the enzyme was inactive but not denatured",
          "Activity stays low, because hydrogen bonds re-form in the wrong positions"
        ],
        "answer": 2
      },
      {
        "q": "Adding extra substrate overcomes the effect of inhibitor X but not inhibitor Y. What does this suggest?",
        "options": [
          "X is a non-competitive inhibitor and Y is a competitive inhibitor",
          "X is a competitive inhibitor and Y is a non-competitive inhibitor",
          "Both X and Y bind to an allosteric site away from the active site",
          "Both X and Y are competitive, but Y has a lower affinity for the enzyme"
        ],
        "answer": 1
      },
      {
        "q": "Pepsin, from the stomach, has very little activity at pH 7. What is the best explanation?",
        "options": [
          "The charges on R groups change, altering the shape of the active site",
          "The disulfide bonds of pepsin are broken by the rise in temperature",
          "The peptide bonds of pepsin are hydrolysed by the hydroxide ions present",
          "The substrate molecules gain too much kinetic energy to bind to pepsin"
        ],
        "answer": 0
      },
      {
        "q": "As substrate concentration increases, the rate of a reaction levels off. What limits the rate on the plateau?",
        "options": [
          "The number of product molecules",
          "The concentration of substrate",
          "The concentration of enzyme",
          "The activation energy of the reaction"
        ],
        "answer": 2
      },
      {
        "q": "A pond freezes over in winter, but the fish below survive. Which property of water best explains this?",
        "options": [
          "Water is incompressible, so the weight of the ice cannot press down on the water below it",
          "Water has a low specific heat capacity, so the water below warms up quickly",
          "Water has a high surface tension, so the ice layer cannot sink to the bottom",
          "Ice is less dense than liquid water, so it floats and insulates the water below"
        ],
        "answer": 3
      },
      {
        "q": "The temperature of a lake varies much less over a day than the temperature of the air above it. Which property of water explains this?",
        "options": [
          "Its high specific heat capacity",
          "Its high surface tension from cohesion",
          "Its role as a polar solvent",
          "Its incompressibility"
        ],
        "answer": 0
      },
      {
        "q": "A tangent drawn to a curve of oxygen volume against time at t = 0 passes through (0 s, 0 cm³) and (20 s, 12 cm³). What is the initial rate?",
        "options": [
          "0.06 cm³ s⁻¹",
          "12 cm³ s⁻¹",
          "1.67 cm³ s⁻¹",
          "0.60 cm³ s⁻¹"
        ],
        "answer": 3
      }
    ],
    "red": [
      {
        "q": "In sickle cell haemoglobin, glutamic acid at position 6 of the β-chain is replaced by valine. Why does this cause haemoglobin molecules to stick together at low oxygen levels?",
        "options": [
          "Valine removes a haem group, so the chains cannot fold into a globular shape",
          "Valine adds a frameshift, so every later amino acid in the β-chain is changed",
          "Valine's non-polar R group forms a hydrophobic patch on the outside of the molecule",
          "Valine forms extra disulfide bonds with cysteine R groups on neighbouring haemoglobin molecules"
        ],
        "answer": 2
      },
      {
        "q": "A student measures the mean rate of an enzyme reaction over 5 minutes at 30 °C and 60 °C. Why is the comparison at 60 °C least reliable?",
        "options": [
          "The enzyme denatures during the 5 minutes, so the mean rate underestimates the initial rate",
          "The volume of product is not affected by temperature, so no difference between the two temperatures can be seen",
          "The rate at 60 °C is always higher, so the mean rate will overestimate it",
          "Substrate molecules have less kinetic energy at 60 °C, so fewer collisions happen"
        ],
        "answer": 0
      },
      {
        "q": "In the pathway A → B → C → D, product D inhibits the enzyme converting A to B. The cell starts using D rapidly. What is the most likely result?",
        "options": [
          "D builds up, so the first enzyme is inhibited more strongly and the pathway stops",
          "Inhibition of the first enzyme falls, so more A is converted and D is replaced",
          "The first enzyme is denatured, so B and C accumulate while D is used up",
          "A is no longer converted to B, because D was acting as a competitive activator"
        ],
        "answer": 1
      },
      {
        "q": "An inhibitor lowers the maximum rate of a reaction, and adding more substrate does not restore it. Which conclusion is best supported?",
        "options": [
          "The inhibitor binds away from the active site and changes its shape",
          "The inhibitor has a shape similar to the substrate and blocks the active site",
          "The inhibitor binds the substrate, so fewer substrate molecules can reach the enzyme",
          "The inhibitor lowers the activation energy, so the product forms more slowly"
        ],
        "answer": 0
      },
      {
        "q": "Glycogen and cellulose are both polymers of glucose. Which explains why cellulose, but not glycogen, has a high tensile strength?",
        "options": [
          "Coiled α-glucose chains are held tightly in a helix by disulfide bonds between chains",
          "Straight β-glucose chains lie parallel and form many hydrogen bonds with each other",
          "Branched α-glucose chains form many α-1,6 bonds that cross-link neighbouring chains",
          "Straight β-glucose chains are joined to each other by ester bonds between the chains"
        ],
        "answer": 1
      },
      {
        "q": "Protein P has many disulfide bonds; protein Q has none but has many ionic bonds. Both are heated to 60 °C at pH 7. Which prediction is best supported?",
        "options": [
          "Both lose their primary structure, because heating hydrolyses peptide bonds",
          "Q is more likely to keep its shape, because ionic bonds are stronger than covalent bonds",
          "P is more likely to keep its shape, because covalent S–S bonds resist moderate heat",
          "Neither changes shape, because only changes in pH can break bonds in proteins"
        ],
        "answer": 2
      },
      {
        "q": "One strand of a DNA molecule contains 20% A, 30% T, 35% G and 15% C. What percentage of the bases in the complementary strand are adenine?",
        "options": [
          "15%",
          "20%",
          "25%",
          "30%"
        ],
        "answer": 3
      },
      {
        "q": "A student claims that mutations in non-coding DNA can never affect a phenotype. Which is the best evaluation?",
        "options": [
          "Wrong, because some non-coding DNA controls when genes are switched on",
          "Wrong, because all non-coding DNA is translated into short polypeptides",
          "Correct, because non-coding DNA is removed from cells before they divide",
          "Correct, because only mutations in exons change the base sequence of DNA"
        ],
        "answer": 0
      },
      {
        "q": "A mutation in a collagen gene replaces one glycine with an amino acid that has a large R group. Why does this weaken the tissue?",
        "options": [
          "The collagen becomes globular and soluble, so it dissolves out of the tissue",
          "A frameshift occurs, so all later amino acids in the chain are replaced",
          "The chain gains a haem group, so it binds oxygen instead of forming fibres",
          "The three chains can no longer pack closely, so the triple helix is less stable"
        ],
        "answer": 3
      },
      {
        "q": "The initial rate of a reaction was 0.25 cm³ s⁻¹ at 30 °C and 0.48 cm³ s⁻¹ at 40 °C. What is the percentage increase in rate?",
        "options": [
          "48%",
          "92%",
          "192%",
          "52%"
        ],
        "answer": 1
      }
    ]
  },
  "2": {
    "name": "Cells, Viruses and Reproduction of Living Things",
    "green": [
      {
        "q": "Which statement is part of cell theory?",
        "options": [
          "Cells can arise spontaneously from non-living material when conditions are suitable",
          "Cells are the basic unit of structure, function and organisation in all living organisms",
          "Every living organism contains membrane-bound organelles such as a nucleus and mitochondria",
          "Viruses are the smallest cells and are the basic unit of life in bacteria"
        ],
        "answer": 1
      },
      {
        "q": "What is a tissue?",
        "options": [
          "A group of similar cells working together to carry out a particular function",
          "A structure made of several different organs that carry out one major function together",
          "A group of organelles in one cell that carry out the same chemical reaction",
          "A single specialised cell that performs one function more efficiently than others"
        ],
        "answer": 0
      },
      {
        "q": "What type of ribosome is found in the cytoplasm of a prokaryotic cell?",
        "options": [
          "40S",
          "60S",
          "80S",
          "70S"
        ],
        "answer": 3
      },
      {
        "q": "What is the main structural component of a bacterial cell wall?",
        "options": [
          "Cellulose microfibrils",
          "Chitin",
          "Peptidoglycan",
          "Lignin"
        ],
        "answer": 2
      },
      {
        "q": "What is the nucleoid of a bacterial cell?",
        "options": [
          "A dense structure inside the nucleus that makes ribosomal RNA and assembles ribosome subunits",
          "A small circular DNA molecule that carries extra genes such as those for antibiotic resistance",
          "A small membrane-bound sac that contains the bacterial DNA wound around histone proteins",
          "The region of cytoplasm containing the single circular DNA molecule, with no membrane around it"
        ],
        "answer": 3
      },
      {
        "q": "After a Gram stain, what colour are Gram negative bacteria seen under the microscope?",
        "options": [
          "Deep purple or violet",
          "Blue-black",
          "Red or pink",
          "Green"
        ],
        "answer": 2
      },
      {
        "q": "What is the function of the nucleolus?",
        "options": [
          "Organises the spindle fibres during nuclear division in animal cells",
          "Stores the cell's genetic information as chromatin wound round histone proteins",
          "Modifies proteins by adding carbohydrate and packages them into vesicles",
          "Makes ribosomal RNA and assembles ribosome subunits"
        ],
        "answer": 3
      },
      {
        "q": "Which organelle makes lipids such as phospholipids and steroids?",
        "options": [
          "Lysosome",
          "Golgi apparatus and its vesicles",
          "Smooth endoplasmic reticulum",
          "Rough endoplasmic reticulum"
        ],
        "answer": 2
      },
      {
        "q": "What is the tonoplast?",
        "options": [
          "The stack of thylakoid membranes inside a chloroplast where light is absorbed",
          "The double membrane with pores that surrounds the nucleus in a eukaryotic cell",
          "The partially permeable membrane that surrounds the vacuole in a plant cell",
          "The layer of cellulose microfibrils that lies outside the plant cell membrane"
        ],
        "answer": 2
      },
      {
        "q": "Which structures are found in animal cells but not in the cells of flowering plants?",
        "options": [
          "Mitochondria",
          "Centrioles",
          "80S ribosomes",
          "Golgi apparatus"
        ],
        "answer": 1
      },
      {
        "q": "What is the approximate limit of resolution of a light microscope?",
        "options": [
          "20 nm",
          "200 nm",
          "2 nm",
          "2000 nm"
        ],
        "answer": 1
      },
      {
        "q": "Why are specimens usually stained before they are viewed with a light microscope?",
        "options": [
          "Staining increases the magnification that the objective lens can produce",
          "Staining keeps the cells alive so that their movements can be observed",
          "Staining shortens the wavelength of the light that passes through the specimen, improving resolution",
          "Most cell structures are colourless, so stains increase contrast and make them visible"
        ],
        "answer": 3
      },
      {
        "q": "What type of nucleic acid does tobacco mosaic virus contain?",
        "options": [
          "Double-stranded DNA",
          "Single-stranded DNA",
          "Single-stranded RNA",
          "Double-stranded RNA"
        ],
        "answer": 2
      },
      {
        "q": "Which enzyme does HIV use to make a DNA copy of its RNA genome?",
        "options": [
          "Reverse transcriptase",
          "Protease",
          "DNA polymerase",
          "DNA-dependent RNA polymerase"
        ],
        "answer": 0
      },
      {
        "q": "During which stage of the cell cycle is DNA replicated?",
        "options": [
          "G2 phase",
          "G1 phase",
          "Prophase",
          "S phase"
        ],
        "answer": 3
      },
      {
        "q": "In which stage of mitosis are sister chromatids pulled to opposite poles?",
        "options": [
          "Anaphase",
          "Metaphase",
          "Prophase",
          "Telophase"
        ],
        "answer": 0
      },
      {
        "q": "What is the karyotype of a person with Turner's syndrome?",
        "options": [
          "45 chromosomes with a single X chromosome",
          "47 chromosomes with two X chromosomes and one Y",
          "46 chromosomes with two X chromosomes",
          "47 chromosomes with three copies of chromosome 21"
        ],
        "answer": 0
      },
      {
        "q": "Where in the body does spermatogenesis take place?",
        "options": [
          "In the epididymis",
          "In the walls of the seminiferous tubules",
          "In the vas deferens",
          "In the prostate gland, which surrounds the urethra below the bladder"
        ],
        "answer": 1
      },
      {
        "q": "Which cell is released from the ovary at ovulation in humans?",
        "options": [
          "A primary oocyte that is paused in prophase I",
          "A secondary oocyte that is paused in metaphase II",
          "An oogonium that is still dividing by mitosis inside a follicle",
          "A mature ovum that has completed meiosis II"
        ],
        "answer": 1
      },
      {
        "q": "What is the ploidy of the endosperm nucleus formed at double fertilisation?",
        "options": [
          "Triploid (3n)",
          "Tetraploid (4n)",
          "Diploid (2n)",
          "Haploid (n)"
        ],
        "answer": 0
      }
    ],
    "amber": [
      {
        "q": "A mitochondrion is 30 mm long in a micrograph. Its actual length is 15 μm. What is the magnification?",
        "options": [
          "×200",
          "×20 000",
          "×450",
          "×2000"
        ],
        "answer": 3
      },
      {
        "q": "A cell measures 45 mm in a drawing made at a magnification of ×1500. What is its actual length?",
        "options": [
          "30 μm",
          "300 μm",
          "67.5 μm",
          "3 μm"
        ],
        "answer": 0
      },
      {
        "q": "An eyepiece graticule is calibrated with a stage micrometer whose divisions are 10 μm apart. 40 eyepiece divisions line up with 10 stage divisions. A cell spans 18 eyepiece divisions. How long is the cell?",
        "options": [
          "18 μm",
          "45 μm",
          "72 μm",
          "180 μm"
        ],
        "answer": 1
      },
      {
        "q": "In a root tip squash, 36 of the 240 cells counted are in a stage of mitosis. What is the mitotic index?",
        "options": [
          "0.18",
          "6.7",
          "0.015",
          "0.15"
        ],
        "answer": 3
      },
      {
        "q": "A cell has a very large amount of rough endoplasmic reticulum and many Golgi vesicles. What is the most likely function of this cell?",
        "options": [
          "Storing large amounts of starch as a food reserve for the plant",
          "Carrying out photosynthesis in the palisade layer of a leaf, using many chloroplasts",
          "Making large amounts of steroid hormone from cholesterol",
          "Making and secreting large amounts of protein, such as a digestive enzyme"
        ],
        "answer": 3
      },
      {
        "q": "Penicillin stops bacteria making the cross-links in peptidoglycan. Why is it generally more effective against Gram positive than Gram negative bacteria?",
        "options": [
          "Gram positive bacteria have 80S ribosomes, which penicillin binds to and inactivates",
          "Gram positive bacteria have no cell surface membrane, so penicillin passes straight into their cytoplasm easily",
          "In Gram negative bacteria an outer membrane keeps penicillin away from the thin peptidoglycan layer",
          "Gram negative bacteria have no peptidoglycan at all, so penicillin has nothing to act on"
        ],
        "answer": 2
      },
      {
        "q": "An organism has a diploid number of 8. How many different combinations of chromosomes can its gametes have from independent assortment alone?",
        "options": [
          "64",
          "256",
          "16",
          "4"
        ],
        "answer": 2
      },
      {
        "q": "A haploid gamete of an animal contains 3 pg of DNA. How much DNA does a body cell of the same animal contain in G2 of the cell cycle?",
        "options": [
          "12 pg",
          "1.5 pg",
          "6 pg",
          "24 pg"
        ],
        "answer": 0
      },
      {
        "q": "Non-disjunction of one pair of homologous chromosomes happens in meiosis I. What gametes result from that cell?",
        "options": [
          "Four normal haploid gametes, because the error is corrected in meiosis II",
          "Two gametes with an extra chromosome and two gametes missing that chromosome",
          "Two normal gametes, one with an extra chromosome and one missing a chromosome",
          "Four gametes that each contain one extra copy of that chromosome"
        ],
        "answer": 1
      },
      {
        "q": "A patient with influenza asks for antibiotics. Why would antibiotics not treat this infection?",
        "options": [
          "Antibiotics only work against pathogens that live outside the host's body cells",
          "Viruses have no cell wall, 70S ribosomes or metabolism of their own for antibiotics to act on",
          "Antibiotics are broken down by enzymes in the lungs before they can reach and kill the influenza virus there",
          "The influenza virus has a thicker cell wall than bacteria, which the drug cannot cross"
        ],
        "answer": 1
      },
      {
        "q": "A newly discovered virus has an RNA genome, an envelope and carries an enzyme that makes DNA from RNA. Which named virus is it most similar to?",
        "options": [
          "HIV",
          "Tobacco mosaic virus",
          "Ebola virus",
          "λ phage"
        ],
        "answer": 0
      },
      {
        "q": "A drug for HIV should harm host cells as little as possible. Which target is best?",
        "options": [
          "The host's RNA polymerase, because it transcribes the viral provirus",
          "Reverse transcriptase, because human cells do not use it to copy their own genes",
          "The CD4 receptor protein on host cells, because removing it would stop helper T cells working",
          "80S ribosomes, because the virus uses them to make its capsid proteins"
        ],
        "answer": 1
      },
      {
        "q": "A bacterium carrying a λ prophage divides several times. What happens to the phage genome?",
        "options": [
          "It directs the making of new phage particles, which burst every daughter cell",
          "It is destroyed by the bacterium's enzymes as each new cell wall forms",
          "It stays in only one of the two daughter cells each time, because a prophage cannot be copied",
          "It is copied along with the bacterial chromosome, so every daughter cell carries it"
        ],
        "answer": 3
      },
      {
        "q": "During the 2014 Ebola outbreak, contacts of each patient were monitored for 21 days. Why 21 days?",
        "options": [
          "21 days is the longest incubation period, so a contact without symptoms by then was not infected",
          "A vaccine given to contacts takes 21 days to produce protective immunity",
          "Ebola virus can only survive on contaminated surfaces and clothing for 21 days before it becomes inactive",
          "Antiviral drugs given to contacts take 21 days to clear the virus from the blood"
        ],
        "answer": 0
      },
      {
        "q": "If the cortical reaction failed in a mammalian secondary oocyte, what would be the most likely result?",
        "options": [
          "The sperm would be unable to digest a path through the zona pellucida",
          "The oocyte would be unable to complete meiosis II after sperm entry",
          "The sperm nucleus would not be able to fuse with the oocyte nucleus to form a zygote",
          "More than one sperm could enter the oocyte, which is called polyspermy"
        ],
        "answer": 3
      },
      {
        "q": "A flowering plant has a diploid number of 24. How many chromosomes are in each of its endosperm nuclei?",
        "options": [
          "48",
          "24",
          "36",
          "12"
        ],
        "answer": 2
      },
      {
        "q": "A student wants to see the three-dimensional surface pattern of the exine of a pollen grain at high resolution. Which instrument is most suitable?",
        "options": [
          "A scanning electron microscope",
          "A transmission electron microscope using thin sections",
          "A light microscope with an eyepiece graticule",
          "A light microscope with an oil immersion lens"
        ],
        "answer": 0
      },
      {
        "q": "A cell is 20 μm across and a virus is 100 nm across. How many times wider is the cell than the virus?",
        "options": [
          "2000",
          "200",
          "5",
          "20"
        ],
        "answer": 1
      },
      {
        "q": "Which comparison of mitosis and meiosis is correct?",
        "options": [
          "Both produce four daughter cells, but only meiosis gives haploid cells",
          "Homologous chromosomes pair up in mitosis but line up singly in meiosis I",
          "Chromosomes line up singly in metaphase of mitosis but in homologous pairs in metaphase I",
          "Mitosis involves crossing over between homologous chromosomes in prophase, but meiosis does not"
        ],
        "answer": 2
      },
      {
        "q": "In the pollen tube, the tip secretes hydrolytic enzymes. What is their role?",
        "options": [
          "They break down the polar nuclei to release food for the growing pollen tube",
          "They digest the egg cell membrane so that the male nucleus can enter the egg cell and fuse with its nucleus",
          "They digest the tissues of the style, and the products are used for growth of the tube",
          "They break down the exine so that the generative nucleus can leave the pollen grain"
        ],
        "answer": 2
      }
    ],
    "red": [
      {
        "q": "Pollen grains were grown in sucrose solutions of different concentrations. Mean tube length was greatest at a middle concentration and very low in the most concentrated solution. Which is the best explanation for the low value?",
        "options": [
          "Sucrose molecules blocked the pores in the exine, so no pollen tubes could emerge from most of the grains",
          "The pollen grains had too much respiratory substrate, so respiration stopped completely",
          "The high sucrose concentration denatured the enzymes secreted by the pollen tube tip",
          "The solution had a lower water potential than the pollen, so the pollen lost water by osmosis"
        ],
        "answer": 3
      },
      {
        "q": "A student found a mitotic index of 0.14 in the region 1 mm from a root tip and 0.01 in the region 5 mm from the tip. Which conclusion is best supported?",
        "options": [
          "Mitosis happens more quickly near the tip, so fewer cells are seen dividing there",
          "The meristem is close to the tip; further back most cells have stopped dividing",
          "Cells 5 mm from the tip divide more slowly because they have a longer G1 phase",
          "Cells 5 mm from the tip have been damaged by the hydrochloric acid used in the squash"
        ],
        "answer": 1
      },
      {
        "q": "In a root tip squash, many cells are seen in prophase but very few in anaphase. What is the most likely reason?",
        "options": [
          "Anaphase lasts a much shorter time than prophase, so fewer cells are in it at any moment",
          "Anaphase cells are destroyed by the stain before they can be counted",
          "Cells in anaphase have no visible chromosomes, so they are counted as interphase",
          "Most cells in a root tip skip anaphase and go straight from metaphase to telophase in a meristem"
        ],
        "answer": 0
      },
      {
        "q": "A healthy man carries a balanced reciprocal translocation between two non-homologous chromosomes. He and his partner have had several miscarriages. Which is the best explanation?",
        "options": [
          "The translocation creates new alleles in his sperm that are lethal to every embryo",
          "The translocation causes non-disjunction of the sex chromosomes in all of his gametes",
          "At meiosis the translocated chromosomes may be shared unevenly, so some gametes lack or gain sections",
          "Every one of his sperm cells is missing a whole chromosome, so no zygote formed from any of them can develop normally"
        ],
        "answer": 2
      },
      {
        "q": "A pink-staining bacterium is not killed by penicillin but is killed by a tetracycline. Which explanation fits the evidence best?",
        "options": [
          "It is Gram positive; penicillin is broken down by the purple dye bound to its wall",
          "It is Gram positive; tetracycline breaks down its thick peptidoglycan wall",
          "It is Gram negative; its outer membrane shields the peptidoglycan, but tetracycline acts on its 70S ribosomes",
          "It is Gram negative; it has no peptidoglycan at all, so tetracycline dissolves its outer membrane and the cell bursts"
        ],
        "answer": 2
      },
      {
        "q": "The risk of trisomy 21 rises with the mother's age much more than with the father's age. Which fact about gamete formation best helps to explain this?",
        "options": [
          "Secondary oocytes divide by mitosis after ovulation, which adds extra copies of chromosome 21 to the cell",
          "Primary oocytes are paused in meiosis I from before birth until ovulation, which may be decades later",
          "Sperm are produced by mitosis only, so they cannot be affected by non-disjunction",
          "Oocytes complete meiosis before birth, so older women have used up their normal oocytes"
        ],
        "answer": 1
      },
      {
        "q": "A scientist sees an unfamiliar structure in electron micrographs of cells prepared by one method, but not in cells prepared by a different method. What is the most valid conclusion?",
        "options": [
          "The structure may be an artefact produced by the preparation, so more evidence is needed",
          "The structure is below the resolution limit of the second method",
          "The first method must have used a higher magnification than the second",
          "The structure must be a new organelle that is only found in cells prepared by the first method"
        ],
        "answer": 0
      },
      {
        "q": "The DNA content of a cell was measured over time. It doubled once, then halved, then halved again without doubling in between. What does this show?",
        "options": [
          "The cell underwent meiosis, producing four haploid cells",
          "The cell underwent mitosis followed by cytokinesis",
          "The cell underwent non-disjunction in meiosis II",
          "The cell underwent two rounds of mitosis"
        ],
        "answer": 0
      },
      {
        "q": "Drugs for HIV can lower the virus in the blood to undetectable levels, but the virus returns if treatment stops. Which is the best explanation?",
        "options": [
          "The virus hides inside red blood cells, where no drugs can reach it",
          "The drugs kill all the helper T cells, so the virus has nowhere else to go",
          "The drugs make the virus mutate into a new form that cannot be detected by the usual blood tests",
          "Provirus DNA stays latent in host cells; drugs that block replication do not remove it"
        ],
        "answer": 3
      },
      {
        "q": "During the 2014 Ebola outbreak, an experimental drug was given to a few patients without a control group. Why is it hard to judge from these cases whether the drug worked?",
        "options": [
          "Patients who received the drug could not give true informed consent, so none of their results can be used",
          "Survival also depends on other factors such as supportive care, so there is nothing to compare with",
          "The virus mutated so rapidly that each patient was infected with a different disease",
          "Experimental drugs cannot be given to more than a few patients under any circumstances"
        ],
        "answer": 1
      }
    ]
  },
  "3": {
    "name": "Classification and Biodiversity",
    "green": [
      {
        "q": "Which taxonomic rank sits directly above kingdom?",
        "options": [
          "Domain",
          "Genus",
          "Class",
          "Phylum"
        ],
        "answer": 0
      },
      {
        "q": "Which list gives the taxonomic ranks in order from the largest group to the smallest?",
        "options": [
          "Domain, kingdom, class, phylum, order, family, species, genus",
          "Kingdom, domain, phylum, class, order, family, genus, species",
          "Domain, kingdom, phylum, order, class, genus, family, species",
          "Domain, kingdom, phylum, class, order, family, genus, species"
        ],
        "answer": 3
      },
      {
        "q": "Which of these is the correctly formatted binomial name of the English oak?",
        "options": [
          "Quercus robur",
          "robur Quercus",
          "Quercus Robur",
          "quercus Robur"
        ],
        "answer": 0
      },
      {
        "q": "In the binomial name Panthera leo, which rank does Panthera name?",
        "options": [
          "Order",
          "Species",
          "Family",
          "Genus"
        ],
        "answer": 3
      },
      {
        "q": "Horses and donkeys can mate. Why are they still classified as separate species?",
        "options": [
          "They are placed in two different kingdoms",
          "They never produce any offspring, even when they mate in captivity",
          "Their offspring, mules, are almost always sterile",
          "Their offspring always die before they are born"
        ],
        "answer": 2
      },
      {
        "q": "During gel electrophoresis, towards which electrode do DNA fragments move, and why?",
        "options": [
          "The anode, because their nitrogenous bases are positively charged",
          "The cathode, because their deoxyribose sugars are positively charged",
          "The cathode, because their phosphate groups are negatively charged",
          "The anode, because their phosphate groups are negatively charged"
        ],
        "answer": 3
      },
      {
        "q": "In a given running time, which DNA fragments travel furthest through an agarose gel?",
        "options": [
          "The longest fragments",
          "The shortest fragments",
          "The fragments richest in A–T base pairs",
          "The fragments loaded into the wells first"
        ],
        "answer": 1
      },
      {
        "q": "Which enzymes are used to cut DNA into fragments at specific base sequences before electrophoresis?",
        "options": [
          "Restriction enzymes",
          "DNA polymerases",
          "DNA ligases",
          "Reverse transcriptases"
        ],
        "answer": 0
      },
      {
        "q": "What is meant by bioinformatics?",
        "options": [
          "Using computer software and large databases to store and analyse biological data such as sequences",
          "Breeding organisms in the laboratory to test whether their hybrid offspring are fertile",
          "Using light microscopes to compare the cell structures of many different species side by side",
          "Measuring the mutation rate of living cells by exposing them to radioactive labels over many generations"
        ],
        "answer": 0
      },
      {
        "q": "Which three groups make up the three-domain model of classification?",
        "options": [
          "Archaea, Plantae and Animalia",
          "Bacteria, Archaea and Eukarya",
          "Prokaryotae, Protoctista and Eukarya",
          "Bacteria, Fungi and Eukarya"
        ],
        "answer": 1
      },
      {
        "q": "In the five-kingdom model, which kingdom contained all prokaryotic organisms?",
        "options": [
          "Plantae",
          "Fungi",
          "Prokaryotae",
          "Protoctista"
        ],
        "answer": 2
      },
      {
        "q": "Comparing the base sequences of which molecule led Carl Woese to propose the domain Archaea?",
        "options": [
          "Messenger RNA",
          "Ribosomal RNA",
          "Histone proteins",
          "Transfer RNA"
        ],
        "answer": 1
      },
      {
        "q": "What happens during the peer review of a scientific paper?",
        "options": [
          "The organisation that funded the work checks that all of the research money was spent as planned",
          "The authors repeat their own experiment to check that the results are repeatable",
          "Other experts in the field check its methods, data and conclusions before it is published",
          "Science journalists check the findings before they are released to the general public"
        ],
        "answer": 2
      },
      {
        "q": "What is meant by the niche of a species?",
        "options": [
          "The largest number of its individuals that its habitat can support over a long period of time",
          "Its role in its habitat, including what it feeds on and the conditions it tolerates",
          "The place where it lives, such as a pond, woodland or rocky shore",
          "All the populations of different species that live in the same area"
        ],
        "answer": 1
      },
      {
        "q": "The kangaroo rat produces very concentrated urine. What type of adaptation is this?",
        "options": [
          "Behavioural",
          "Physiological",
          "Mechanical",
          "Anatomical"
        ],
        "answer": 1
      },
      {
        "q": "Which situation describes allopatric speciation?",
        "options": [
          "A hybrid plant doubles its chromosome number and can no longer breed with its parents",
          "Two groups in the same meadow begin to flower at different times of year",
          "A population is split into two by a mountain range and the two groups diverge",
          "A mutation alters the courtship song of some birds within a single forest population"
        ],
        "answer": 2
      },
      {
        "q": "In the index of diversity D = N(N − 1) / Σn(n − 1), what does n represent?",
        "options": [
          "The total number of organisms of all species",
          "The number of quadrats placed in the habitat",
          "The number of organisms of one particular species",
          "The number of different species in the sample"
        ],
        "answer": 2
      },
      {
        "q": "How is biodiversity within a species assessed at the genetic level?",
        "options": [
          "By looking at the variety of alleles in the gene pool of a population",
          "By measuring how evenly individuals are spread between the species",
          "By counting the number of different species present in one habitat",
          "By counting the number of different habitats found within a region"
        ],
        "answer": 0
      },
      {
        "q": "Which of these is an example of ex-situ conservation?",
        "options": [
          "Declaring a woodland a Site of Special Scientific Interest",
          "Setting up a marine protected area around a reef",
          "Controlling grazing on a nature reserve",
          "Storing seeds of wild plants in a seed bank"
        ],
        "answer": 3
      },
      {
        "q": "Why are seeds dried and stored at around −20 °C in a seed bank?",
        "options": [
          "To kill the embryo so that the seed cannot use up its stored food",
          "To raise their respiration rate so the embryo builds up a larger food store",
          "To break their dormancy so that they germinate as soon as they are sown",
          "To slow their metabolism so that they stay viable for many years"
        ],
        "answer": 3
      }
    ],
    "amber": [
      {
        "q": "The lion (Panthera leo) and the tiger (Panthera tigris) belong to the same genus. Which ranks must they share?",
        "options": [
          "Every rank from domain down to genus",
          "The species rank but not the genus rank",
          "Only the domain and the kingdom ranks",
          "Every rank except the family rank"
        ],
        "answer": 0
      },
      {
        "q": "DNA from specimen X shares 5 of its 6 electrophoresis bands with species P and 1 of 6 with species Q. Which conclusion is best supported?",
        "options": [
          "X belongs to the same species as Q but not P",
          "X contains longer DNA fragments than P does",
          "X and Q diverged more recently than X and P",
          "X is more closely related to P than it is to Q"
        ],
        "answer": 3
      },
      {
        "q": "The same gene was sequenced in species P and four others. Base differences from P were: Q 12, R 3, S 27, T 8. Which species most likely shares the most recent common ancestor with P?",
        "options": [
          "Species T",
          "Species Q",
          "Species R",
          "Species S"
        ],
        "answer": 2
      },
      {
        "q": "A species of dandelion produces seed without fertilisation. Why is the biological species definition hard to apply to it?",
        "options": [
          "Asexually produced offspring contain no DNA that could be sequenced or compared",
          "Interbreeding to produce fertile offspring cannot be tested in organisms that do not mate",
          "Organisms that reproduce asexually show no variation in any of their features, so cannot be compared",
          "Organisms that reproduce asexually cannot be given a two-part binomial name"
        ],
        "answer": 1
      },
      {
        "q": "Two similar lizard populations live on islands 200 km apart. Why is it hard to decide whether they are one species?",
        "options": [
          "Populations on islands cannot be given binomial names until they are brought together",
          "Lizards reproduce asexually, so the species definition can never be applied to them",
          "Island populations always have identical DNA, so they cannot be told apart by sequencing",
          "They never meet, so it is unknown whether they would interbreed in natural conditions"
        ],
        "answer": 3
      },
      {
        "q": "Sharks and dolphins have similar streamlined body shapes but are not closely related. Why does this make classification by appearance unreliable?",
        "options": [
          "Sharks and dolphins can interbreed to produce offspring with intermediate shapes",
          "Organisms that live in water cannot be classified using the eight ranks",
          "Similar environments can select for similar structures in unrelated organisms",
          "Streamlined bodies are caused by the environment and are never inherited"
        ],
        "answer": 2
      },
      {
        "q": "A newly found prokaryote has branched ether-linked membrane lipids, no peptidoglycan and is not inhibited by streptomycin. In which domain should it be placed?",
        "options": [
          "Bacteria",
          "Eukarya",
          "Prokaryotae",
          "Archaea"
        ],
        "answer": 3
      },
      {
        "q": "Why does placing all prokaryotes in one kingdom misrepresent evolutionary relationships?",
        "options": [
          "Prokaryotes are too small to observe, so no evidence at all about their evolutionary relationships exists",
          "Molecular differences between the two prokaryote groups exceed those between plants and animals",
          "Prokaryotes evolved from eukaryotes, so they should be placed inside the Eukarya group",
          "All prokaryotes share identical rRNA sequences, so they cannot be separated into groups"
        ],
        "answer": 1
      },
      {
        "q": "Patients with HIV are given a combination of several antiviral drugs at the same time. Why?",
        "options": [
          "Each drug causes a different mutation in the virus, which stops it from reproducing at all",
          "It is much less likely that one virus carries mutations giving resistance to all the drugs",
          "The drugs stimulate the virus to build up immunity to itself, so it is destroyed faster",
          "A single drug only works against bacteria, so several are needed to affect a virus"
        ],
        "answer": 1
      },
      {
        "q": "Marram grass on sand dunes has rolled leaves with stomata sunk in pits. Which description of this adaptation is correct?",
        "options": [
          "A behavioural adaptation that reduces heat gain",
          "A physiological adaptation that increases photosynthesis",
          "An anatomical adaptation that increases gas exchange",
          "An anatomical adaptation that reduces water loss"
        ],
        "answer": 3
      },
      {
        "q": "Two warbler species live in the same trees but feed at different heights. What is the best explanation for how they coexist?",
        "options": [
          "They occupy different niches, so competition between them is reduced",
          "They interbreed freely, so the two species act as a single population that shares every resource",
          "They occupy the same niche, so they share all resources equally",
          "They live in different habitats, so they never compete"
        ],
        "answer": 0
      },
      {
        "q": "Common cord-grass (Spartina anglica) arose when a sterile hybrid doubled its chromosome number. Which type of speciation is this?",
        "options": [
          "Sympatric speciation through polyploidy",
          "Allopatric speciation through a geographical barrier",
          "Allopatric speciation through seasonal isolation",
          "Sympatric speciation through a behavioural change"
        ],
        "answer": 0
      },
      {
        "q": "Some apple maggot flies now lay eggs on apples instead of hawthorn and mate on the fruit where they developed. Which isolating mechanism is reducing gene flow?",
        "options": [
          "Mechanical isolation of the reproductive organs",
          "Hybrid sterility after fertilisation",
          "Geographical isolation by a physical barrier",
          "Ecological isolation within the same area"
        ],
        "answer": 3
      },
      {
        "q": "A sample contained three species with 10, 6 and 4 individuals. Using D = N(N − 1) / Σn(n − 1), what is the index of diversity?",
        "options": [
          "1.65",
          "3.33",
          "2.88",
          "0.35"
        ],
        "answer": 2
      },
      {
        "q": "Two meadows each contain 6 species, but meadow A has a higher index of diversity than meadow B. What is the most likely explanation?",
        "options": [
          "Individuals in meadow A are spread more evenly between the species",
          "Individuals in meadow B are spread more evenly between species",
          "Meadow A was sampled with fewer, larger quadrats, so rare species were over-counted",
          "Meadow A contains more species than meadow B does"
        ],
        "answer": 0
      },
      {
        "q": "A sample of 40 organisms all belong to one species. What is its index of diversity, D?",
        "options": [
          "Undefined",
          "40",
          "1",
          "0"
        ],
        "answer": 2
      },
      {
        "q": "Why should quadrat positions be chosen using random number coordinates on a grid?",
        "options": [
          "To place all the quadrats in the most diverse area",
          "To avoid bias from choosing areas that look interesting",
          "To reduce the number of quadrats that need to be placed",
          "To make sure that every species present is recorded"
        ],
        "answer": 1
      },
      {
        "q": "Bees pollinating crop plants is an example of which type of ecosystem service?",
        "options": [
          "Regulating",
          "Cultural",
          "Provisioning",
          "Supporting"
        ],
        "answer": 0
      },
      {
        "q": "Why do zoos keep studbooks and exchange animals between zoos in captive breeding programmes?",
        "options": [
          "To increase the number of alleles that mutate each generation",
          "To make sure every animal is bred with its closest relative",
          "To avoid inbreeding and keep as much genetic diversity as possible",
          "To stop captive animals from being reintroduced to the wild"
        ],
        "answer": 2
      },
      {
        "q": "Why can antibiotic resistance spread quickly even between different species of bacteria?",
        "options": [
          "Antibiotics cause the same resistance mutation in every species that is exposed",
          "Resistance genes are often carried on plasmids that can pass between bacteria",
          "Resistant bacteria produce antibodies that protect other species nearby",
          "Bacteria build up immunity to antibiotics and pass it on to their neighbours"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Which statement gives the best evaluation of peer review?",
        "options": [
          "It reduces the chance of flawed work being published but cannot prove the conclusions are true",
          "It replaces the need for other scientists to reproduce the investigation afterwards",
          "It is of little value because the reviewers chosen are always experts from outside the author's own field",
          "It guarantees that every published conclusion is correct because experts have checked it"
        ],
        "answer": 0
      },
      {
        "q": "Two DNA samples give bands in identical positions after electrophoresis. Why does this not prove the samples are from the same species?",
        "options": [
          "Band positions depend only on how much DNA was loaded in each well",
          "DNA from different species always gives the same banding pattern",
          "Electrophoresis separates fragments by base sequence, not by their length",
          "Fragments of the same length can still have different base sequences"
        ],
        "answer": 3
      },
      {
        "q": "Site X: 5 species with 20, 5, 3, 1 and 1 individuals. Site Y: 3 species with 8, 7 and 5 individuals. Which conclusion is supported by the index of diversity?",
        "options": [
          "Site X is more diverse (D = 3.22 against 2.14) because its individuals are more even",
          "Site Y is more diverse (D = 3.22 against 2.14) because its individuals are spread more evenly",
          "Site X is more diverse (D = 2.14 against 1.34) because it contains two more species than site Y does",
          "Site Y is more diverse (D = 4.58 against 2.14) because it contains fewer rare species"
        ],
        "answer": 1
      },
      {
        "q": "A biologist wants to separate several closely related beetle species using DNA. Which choice of gene is most suitable, and why?",
        "options": [
          "A mitochondrial gene that never mutates, so all the species share one sequence",
          "A mitochondrial gene that changes quickly, so recently diverged species differ",
          "A ribosomal RNA gene that changes slowly, so recently diverged species differ",
          "A ribosomal RNA gene that changes quickly, so distant domains can be compared"
        ],
        "answer": 1
      },
      {
        "q": "Some recent genome studies suggest eukaryotes arose from within the archaea. What would this most directly imply?",
        "options": [
          "Archaea should be moved into the kingdom Prokaryotae alongside all of the bacteria",
          "Molecular evidence is unreliable and classification should rely on appearance alone",
          "There may be only two primary domains, showing that classification models are provisional",
          "The five-kingdom model is correct after all and should replace the three-domain model"
        ],
        "answer": 2
      },
      {
        "q": "In a ring species, neighbouring populations interbreed but the two end populations cannot. What does this show about defining species?",
        "options": [
          "The two end populations must belong to the same species as all the others",
          "Interbreeding is never a useful test for deciding whether organisms are one species",
          "The populations in the middle of the ring must be sterile hybrids of the two ends",
          "Speciation is gradual, so there is no clear point where one species becomes two"
        ],
        "answer": 3
      },
      {
        "q": "Captive-bred animals released into a restored habitat died at a high rate. Which explanation is best supported?",
        "options": [
          "The animals had lost behaviours needed in the wild, such as finding food and avoiding predators",
          "Captive breeding had produced new mutations that made every released animal sterile",
          "The animals had too much genetic diversity to survive in a small natural population",
          "The restored habitat contained far too many different food plants for the released animals to choose between"
        ],
        "answer": 0
      },
      {
        "q": "Why does prescribing antibiotics for viral infections speed up the evolutionary race with pathogens?",
        "options": [
          "It gives no benefit against the virus but still selects for resistant bacteria in the body",
          "It kills the resistant bacteria first, leaving only the susceptible ones behind",
          "It causes the viruses to mutate so that they become resistant to all antibiotics, including ones not yet used",
          "It makes the patient's immune system resistant to antibiotics in the future"
        ],
        "answer": 0
      },
      {
        "q": "Cheetahs have very low genetic diversity. Which consequence is most likely?",
        "options": [
          "The population will adapt faster to change because fewer alleles compete",
          "Inbreeding will increase the number of different alleles in the gene pool",
          "A new disease could affect almost the whole population in the same way",
          "The species will split into several new species within a few generations"
        ],
        "answer": 2
      },
      {
        "q": "Seeds of many tropical trees die when dried and frozen. What does this imply about conserving these species?",
        "options": [
          "Zoos are the most suitable method because they can breed the trees in captivity",
          "Seed banks cannot protect them well, so in-situ protection or living collections are needed",
          "Seed banks remain the best method because new plants can always be regrown from the frozen embryos inside",
          "These species do not need conservation because their seeds would germinate anyway"
        ],
        "answer": 1
      }
    ]
  },
  "4": {
    "name": "Exchange and Transport",
    "green": [
      {
        "q": "As a cell increases in size, what happens to its surface area to volume ratio?",
        "options": [
          "It increases, because surface area increases faster than volume",
          "It decreases, because volume increases faster than surface area",
          "It stays the same, because surface area and volume increase in proportion",
          "It decreases, because the surface area becomes smaller as the cell grows"
        ],
        "answer": 1
      },
      {
        "q": "In the fluid mosaic model, what does the word 'mosaic' describe?",
        "options": [
          "Phospholipid molecules moving sideways within each layer of the bilayer",
          "Proteins of different shapes and sizes scattered through the bilayer",
          "Carbohydrate chains arranged in a regular pattern on the inner surface",
          "Cholesterol molecules packed tightly between the fatty acid tails"
        ],
        "answer": 1
      },
      {
        "q": "Which statement describes facilitated diffusion?",
        "options": [
          "Passive movement down a concentration gradient through channel or carrier proteins",
          "Movement of large molecules into the cell inside vesicles pinched off from the membrane",
          "Passive movement of small non-polar molecules directly through the phospholipid bilayer",
          "Movement against a concentration gradient through carrier proteins, using ATP"
        ],
        "answer": 0
      },
      {
        "q": "Which of these has the highest water potential?",
        "options": [
          "A dilute sucrose solution",
          "The cytoplasm of a flaccid plant cell",
          "A concentrated sucrose solution",
          "Pure water at atmospheric pressure"
        ],
        "answer": 3
      },
      {
        "q": "Which substance crosses the phospholipid bilayer most readily by simple diffusion?",
        "options": [
          "Oxygen",
          "Amino acids",
          "Sodium ions",
          "Glucose"
        ],
        "answer": 0
      },
      {
        "q": "By which process do beta cells release insulin from the cell?",
        "options": [
          "Phagocytosis",
          "Exocytosis",
          "Endocytosis",
          "Facilitated diffusion"
        ],
        "answer": 1
      },
      {
        "q": "What are the products of the hydrolysis of ATP?",
        "options": [
          "AMP and water, with energy released for the cell",
          "Adenine and ribose, with energy taken in from respiration",
          "ADP and inorganic phosphate, with energy taken in",
          "ADP and inorganic phosphate, with energy released"
        ],
        "answer": 3
      },
      {
        "q": "In an insect, across which structures does oxygen pass directly into respiring cells?",
        "options": [
          "The valves of the spiracles",
          "The walls of the tracheoles",
          "The walls of capillaries in the blood",
          "The chitin rings of the tracheae"
        ],
        "answer": 1
      },
      {
        "q": "In a bony fish, which structures provide most of the surface area for gas exchange?",
        "options": [
          "The gill lamellae",
          "The buccal cavity",
          "The gill arches",
          "The operculum"
        ],
        "answer": 0
      },
      {
        "q": "What is the function of lenticels?",
        "options": [
          "To control which mineral ions enter the xylem after water has crossed the root cortex",
          "To allow water vapour to leave the leaf mesophyll during transpiration through the lower epidermis",
          "To allow sucrose to pass from companion cells into the sieve tube elements at the source",
          "To allow gases to pass between the air and living tissues beneath the bark of a woody stem"
        ],
        "answer": 3
      },
      {
        "q": "Which blood vessel carries blood out of the right ventricle?",
        "options": [
          "Aorta",
          "Pulmonary vein",
          "Pulmonary artery",
          "Vena cava"
        ],
        "answer": 2
      },
      {
        "q": "Where is the sinoatrial node (SAN) found?",
        "options": [
          "In the wall of the left atrium",
          "In the septum between the ventricles",
          "In the wall of the right atrium",
          "At the apex of the left ventricle"
        ],
        "answer": 2
      },
      {
        "q": "What does the QRS complex on a normal ECG show?",
        "options": [
          "Depolarisation of the ventricles",
          "Repolarisation of the ventricles",
          "Depolarisation of the atria",
          "Closure of the semilunar valves"
        ],
        "answer": 0
      },
      {
        "q": "Which leucocyte has a multi-lobed nucleus and is the most numerous white cell in blood?",
        "options": [
          "Lymphocyte",
          "Eosinophil",
          "Monocyte",
          "Neutrophil"
        ],
        "answer": 3
      },
      {
        "q": "Which reaction does thrombin catalyse during blood clotting?",
        "options": [
          "Insoluble fibrin to soluble fibrinogen",
          "Release of thromboplastin from the platelets",
          "Soluble fibrinogen to insoluble fibrin",
          "Inactive prothrombin to active thrombin"
        ],
        "answer": 2
      },
      {
        "q": "What is the maximum number of oxygen molecules that one adult haemoglobin molecule can carry?",
        "options": [
          "One",
          "Two",
          "Four",
          "Eight"
        ],
        "answer": 2
      },
      {
        "q": "Which description fits myoglobin?",
        "options": [
          "One polypeptide chain with one haem group, found in muscle cells",
          "Two polypeptide chains with two haem groups, found in the blood plasma",
          "Four polypeptide chains with four haem groups, found in muscle cells",
          "One polypeptide chain with four haem groups, found in red blood cells"
        ],
        "answer": 0
      },
      {
        "q": "How does tissue fluid differ from blood plasma?",
        "options": [
          "It contains more plasma proteins than plasma does",
          "It contains no dissolved glucose or amino acids at all",
          "It contains almost no plasma proteins",
          "It contains red blood cells but no white blood cells"
        ],
        "answer": 2
      },
      {
        "q": "Which substance thickens and waterproofs the walls of xylem vessels?",
        "options": [
          "Pectin",
          "Suberin",
          "Chitin",
          "Lignin"
        ],
        "answer": 3
      },
      {
        "q": "By which route does water travel in the apoplastic pathway?",
        "options": [
          "Through the phloem sieve tubes, pushed along by a hydrostatic pressure gradient",
          "Through cell walls and the spaces between cells, without crossing membranes",
          "Through the vacuoles, crossing the tonoplast and cytoplasm of every cell",
          "Through the cytoplasm, passing from cell to cell through the plasmodesmata"
        ],
        "answer": 1
      }
    ],
    "amber": [
      {
        "q": "A cube-shaped block of agar has sides of 3 cm. What is its surface area to volume ratio?",
        "options": [
          "3 : 1",
          "6 : 1",
          "0.5 : 1",
          "2 : 1"
        ],
        "answer": 3
      },
      {
        "q": "Why does a large mammal need a mass transport system, when a single-celled organism does not?",
        "options": [
          "Its low surface area to volume ratio and long diffusion distances mean diffusion alone could not supply its inner cells",
          "Its outer body surface is smaller in absolute area than the cell surface of a single-celled organism such as Amoeba",
          "Its high surface area to volume ratio means too much oxygen enters across the body surface and has to be carried away",
          "Its cells respire only anaerobically, so blood is needed to carry lactate away from every tissue to the liver"
        ],
        "answer": 0
      },
      {
        "q": "A plant cell has an osmotic potential of −700 kPa and a turgor pressure of 300 kPa. It is placed in a solution with a water potential of −500 kPa. What happens?",
        "options": [
          "The cell loses water, because its water potential of −400 kPa is higher than that of the solution",
          "The cell gains water, because its water potential of −400 kPa is higher than that of the solution",
          "The cell gains water, because its water potential of −1000 kPa is lower than that of the solution",
          "There is no net movement, because the turgor pressure exactly balances the solution's water potential"
        ],
        "answer": 0
      },
      {
        "q": "The rate of glucose uptake by facilitated diffusion levels off at high external glucose concentrations. Why?",
        "options": [
          "The concentration gradient becomes steeper, so glucose diffuses back out of the cell",
          "All the carrier proteins are occupied, so the number of carriers limits the rate",
          "The cell runs out of ATP, so the carrier proteins can no longer change their shape",
          "Glucose starts to dissolve in the bilayer and blocks the entrance to the carriers"
        ],
        "answer": 1
      },
      {
        "q": "Sodium ions are very small, yet they cannot cross the phospholipid bilayer directly. Why?",
        "options": [
          "Their charge means they are repelled by the hydrophobic core of the bilayer",
          "They are too large to fit through the gaps between the phospholipid molecules",
          "They are lipid-soluble and become trapped among the fatty acid tails of the bilayer",
          "They bind permanently to the phosphate heads on the outer surface of the membrane"
        ],
        "answer": 0
      },
      {
        "q": "Cyanide stops aerobic respiration. Which process in a root would be reduced most directly?",
        "options": [
          "Diffusion of oxygen into cells through the phospholipid bilayer",
          "Facilitated diffusion of glucose through specific carrier proteins",
          "Osmosis of water into root hair cells down a water potential gradient",
          "Uptake of mineral ions against a concentration gradient"
        ],
        "answer": 3
      },
      {
        "q": "In the beetroot practical, the absorbance of the surrounding solution rises steeply at high temperatures. What is the best explanation?",
        "options": [
          "The pigment is pumped out of the vacuole faster by active transport as enzymes speed up",
          "The phospholipids become rigid, so the bilayer cracks and the red pigment leaks out",
          "The colorimeter becomes more sensitive at higher temperatures, so it gives higher readings",
          "Membrane proteins denature, leaving gaps through which the red pigment leaks out"
        ],
        "answer": 3
      },
      {
        "q": "Potato cylinders show no change in mass in a 0.30 mol dm⁻³ sucrose solution. What does this show?",
        "options": [
          "The tissue has the same water potential as a 0.30 mol dm⁻³ sucrose solution",
          "The potato cells are fully turgid when placed in a 0.30 mol dm⁻³ sucrose solution",
          "The vacuoles of the potato cells contain exactly 0.30 mol dm⁻³ of sucrose",
          "The potato cells are all plasmolysed when placed in a 0.30 mol dm⁻³ sucrose solution"
        ],
        "answer": 0
      },
      {
        "q": "Why does countercurrent flow increase the oxygen uptake of fish gills?",
        "options": [
          "Water flows in the same direction as the blood, so oxygen is carried along with the flow into the lamellae",
          "Blood flows very slowly through the lamellae, so oxygen is taken into it by active transport from the water",
          "Blood always meets water with a higher oxygen concentration, so a gradient exists along the whole lamella",
          "Blood and water reach equilibrium halfway along the lamella, so the blood leaves fully saturated with oxygen"
        ],
        "answer": 2
      },
      {
        "q": "During rapid flight, the fluid at the ends of an insect's tracheoles is drawn into the muscle cells. Why?",
        "options": [
          "Lactate lowers the water potential of the muscle cells, so water leaves the tracheoles by osmosis",
          "Carbon dioxide raises the water potential of the muscle cells, so water enters them by diffusion",
          "The spiracles close during flight, so the fluid evaporates out of the tracheoles into the muscles",
          "The muscle cells actively pump water out of the tracheoles, using ATP from aerobic respiration"
        ],
        "answer": 0
      },
      {
        "q": "What is the net movement of gases between a leaf and the air in bright light?",
        "options": [
          "CO₂ diffuses in and O₂ out, because respiration stops completely in the light",
          "O₂ diffuses in and CO₂ out, because only respiration takes place in the light",
          "No net gas exchange occurs, because photosynthesis and respiration always balance",
          "CO₂ diffuses in and O₂ out, because photosynthesis is faster than respiration"
        ],
        "answer": 3
      },
      {
        "q": "What is one advantage of the double circulation of a mammal over the single circulation of a bony fish?",
        "options": [
          "Oxygenated and deoxygenated blood mix in the heart, raising the oxygen content of blood to the body",
          "Blood is pumped again after the lungs, so it reaches the body tissues at a high pressure",
          "The pulmonary circulation runs at a higher pressure than the systemic, which speeds up gas exchange",
          "Blood passes through the gills and the body in one circuit, keeping its pressure high throughout"
        ],
        "answer": 1
      },
      {
        "q": "Which pressure change causes the semilunar valves to close?",
        "options": [
          "Pressure in the arteries falls below the pressure in the atria",
          "Ventricular pressure falls below the pressure in the arteries",
          "Ventricular pressure rises above the pressure in the atria",
          "Atrial pressure rises above the pressure in the ventricles"
        ],
        "answer": 1
      },
      {
        "q": "On an ECG the interval between two consecutive R peaks is 0.75 s. What is the heart rate?",
        "options": [
          "45 beats per minute",
          "80 beats per minute",
          "75 beats per minute",
          "133 beats per minute"
        ],
        "answer": 1
      },
      {
        "q": "Why is there a delay of about 0.1 s at the atrioventricular node?",
        "options": [
          "So that the ventricles fill completely with blood before the atria start to contract",
          "So that the semilunar valves have time to open before the ventricles begin contracting",
          "So that the atria finish emptying into the ventricles before the ventricles contract",
          "So that the SAN can recover before it sends out the next wave of electrical excitation"
        ],
        "answer": 2
      },
      {
        "q": "A white blood cell leaves the blood, enters a tissue and develops into a macrophage. Which cell is it?",
        "options": [
          "Lymphocyte",
          "Neutrophil",
          "Monocyte",
          "Eosinophil"
        ],
        "answer": 2
      },
      {
        "q": "Which event starts the development of atherosclerosis?",
        "options": [
          "Deposition of calcium salts in a hard plaque",
          "Damage to the endothelium lining the artery",
          "Build-up of foam cells beneath the endothelium",
          "Formation of a thrombus in the artery lumen"
        ],
        "answer": 1
      },
      {
        "q": "Haemoglobin is 97% saturated in the lungs and 22% saturated in an active muscle. What percentage of the oxygen loaded in the lungs is released in the muscle?",
        "options": [
          "75%",
          "23%",
          "77%",
          "88%"
        ],
        "answer": 2
      },
      {
        "q": "Why is the oxygen affinity of fetal haemoglobin important?",
        "options": [
          "Its lower affinity lets it unload oxygen more readily to the fetal tissues while still in the placenta",
          "Its affinity is the same as adult haemoglobin, but the fetus has more red cells to take up oxygen",
          "Its higher affinity lets it load oxygen at the low pO₂ in the placenta, where maternal haemoglobin unloads",
          "Its higher affinity lets it pull oxygen directly off maternal haemoglobin molecules that it touches"
        ],
        "answer": 2
      },
      {
        "q": "A person with a very low plasma protein concentration develops swollen tissues. Why?",
        "options": [
          "Hydrostatic pressure rises, so more fluid is forced out at the arterial end",
          "Oncotic pressure rises, so more fluid is drawn out of the capillaries",
          "Lymph vessels are blocked by the plasma proteins leaking into the tissues",
          "Oncotic pressure falls, so less tissue fluid is reabsorbed at the venous end"
        ],
        "answer": 3
      }
    ],
    "red": [
      {
        "q": "Which observation provides the strongest support for the cohesion-tension model?",
        "options": [
          "Removing a ring of bark from a stem causes sugars to accumulate above the ring",
          "Root pressure alone is large enough to push water to the tops of the tallest trees",
          "Sap flows out under pressure from the mouthparts of an aphid feeding on the stem",
          "The diameter of a tree trunk decreases during the day, when transpiration is fastest"
        ],
        "answer": 3
      },
      {
        "q": "Which observation is most difficult for the mass-flow hypothesis to explain?",
        "options": [
          "The concentration of sucrose in the phloem sap is higher near a source than near a sink",
          "Applying a metabolic inhibitor to the companion cells at a source stops translocation there",
          "Different solutes in the same sieve tube can move at different speeds and in opposite directions",
          "Sap exudes under pressure from a cut sieve tube or from the mouthparts of a feeding aphid"
        ],
        "answer": 2
      },
      {
        "q": "A potometer capillary has an internal radius of 0.5 mm. The bubble moves 30 mm in 5 minutes. What is the rate of water uptake?",
        "options": [
          "18.8 mm³ min⁻¹",
          "1.5 mm³ min⁻¹",
          "23.6 mm³ min⁻¹",
          "4.7 mm³ min⁻¹"
        ],
        "answer": 3
      },
      {
        "q": "A potometer shoot in front of a fan takes up water quickly. A clear plastic bag is then sealed over the shoot, with the fan still running. What is the most likely effect?",
        "options": [
          "The rate rises, because the bag traps heat and increases evaporation from the mesophyll walls",
          "The rate falls, because humid air builds up in the bag and reduces the water vapour gradient",
          "The rate falls, because the bag stops light reaching the leaves so every stoma closes at once",
          "The rate stays the same, because the fan still moves air across the outside of the plastic bag"
        ],
        "answer": 1
      },
      {
        "q": "At one moment in the cardiac cycle, left ventricular pressure is 10 kPa and rising, aortic pressure is 12 kPa and left atrial pressure is 1 kPa. Which valves are open?",
        "options": [
          "Neither the bicuspid valve nor the aortic semilunar valve",
          "The aortic semilunar valve only, so blood is entering the aorta",
          "The bicuspid valve only, so blood is still entering the ventricle",
          "Both the bicuspid valve and the aortic semilunar valve together"
        ],
        "answer": 0
      },
      {
        "q": "At a pO₂ of 4 kPa, haemoglobin in blood leaving an exercising muscle is less saturated than blood leaving a resting muscle at the same pO₂. What explains this?",
        "options": [
          "Exercising muscle has a higher pO₂, so haemoglobin releases oxygen to reach equilibrium",
          "More CO₂ forms more H⁺, which changes haemoglobin's shape and lowers its oxygen affinity",
          "Myoglobin binds all the oxygen in the capillaries, so haemoglobin cannot load any oxygen",
          "Less CO₂ in exercising muscle raises the pH, which increases haemoglobin's oxygen affinity"
        ],
        "answer": 1
      },
      {
        "q": "Diving mammals have a very high concentration of myoglobin in their muscles. What is the best explanation?",
        "options": [
          "Its high affinity stores oxygen that is released only when muscle pO₂ becomes very low during a dive",
          "Its low affinity lets it unload oxygen quickly to the working muscles in the first few minutes of each long dive",
          "It shows a strong Bohr effect, so it releases all its oxygen as soon as CO₂ builds up in the blood",
          "It binds four oxygen molecules, so it carries more oxygen in the blood than haemoglobin can carry"
        ],
        "answer": 0
      },
      {
        "q": "Parasitic worms block the lymph vessels draining a person's leg. Predict the effect on the leg.",
        "options": [
          "No tissue fluid forms, because hydrostatic pressure in the capillaries of the leg falls to zero",
          "Tissues shrink, because plasma proteins leave the capillaries and draw water into the blood",
          "Tissue fluid accumulates, because the fluid that is not reabsorbed cannot drain away",
          "Tissue fluid decreases, because more fluid is reabsorbed into capillaries at the venous end"
        ],
        "answer": 2
      },
      {
        "q": "Why does atherosclerosis tend to get worse once it has started?",
        "options": [
          "The narrowed lumen raises blood pressure, which damages the endothelium further",
          "The artery wall becomes more elastic, so it stretches and traps more LDL",
          "Macrophages in the plaque break down cholesterol and release it into the lumen",
          "Each plaque releases thromboplastin, which gradually digests the artery wall"
        ],
        "answer": 0
      },
      {
        "q": "Sodium citrate is added to donated blood. It removes calcium ions. Why does this stop the blood clotting?",
        "options": [
          "Platelets release extra thromboplastin, which breaks down fibrin",
          "Prothrombin cannot be converted to thrombin, so no fibrin forms",
          "Fibrinogen changes to fibrin too quickly and is all used up",
          "Thrombin converts the fibrin mesh back into soluble fibrinogen"
        ],
        "answer": 1
      }
    ]
  },
  "5": {
    "name": "Energy for Biological Processes",
    "green": [
      {
        "q": "Where in a eukaryotic cell does glycolysis take place?",
        "options": [
          "Mitochondrial matrix",
          "Inner mitochondrial membrane",
          "Intermembrane space",
          "Cytoplasm"
        ],
        "answer": 3
      },
      {
        "q": "Where do the link reaction and the Krebs cycle take place?",
        "options": [
          "Intermembrane space",
          "Mitochondrial matrix",
          "Cytoplasm",
          "Outer mitochondrial membrane"
        ],
        "answer": 1
      },
      {
        "q": "Where is the electron transport chain of aerobic respiration found?",
        "options": [
          "Outer mitochondrial membrane",
          "Inner mitochondrial membrane",
          "Cytoplasm of the cell",
          "Mitochondrial matrix"
        ],
        "answer": 1
      },
      {
        "q": "What is the terminal electron acceptor in the electron transport chain of aerobic respiration?",
        "options": [
          "NAD",
          "Pyruvate",
          "Oxygen",
          "Coenzyme A"
        ],
        "answer": 2
      },
      {
        "q": "What is the net yield of ATP from glycolysis of one glucose molecule?",
        "options": [
          "6 ATP",
          "1 ATP",
          "2 ATP",
          "4 ATP"
        ],
        "answer": 2
      },
      {
        "q": "What happens to a hexose sugar at the very start of glycolysis?",
        "options": [
          "It is joined to coenzyme A",
          "It is phosphorylated using ATP",
          "It is decarboxylated to release CO₂",
          "It is oxidised by NAD"
        ],
        "answer": 1
      },
      {
        "q": "Which three-carbon compound is formed in glycolysis when triose phosphate is oxidised?",
        "options": [
          "Ribulose bisphosphate (RuBP)",
          "Glyceraldehyde phosphate (GALP)",
          "Acetyl coenzyme A",
          "Glycerate 3-phosphate (GP)"
        ],
        "answer": 3
      },
      {
        "q": "Apart from ATP and pyruvate, which product of glycolysis carries hydrogen to the mitochondria?",
        "options": [
          "Reduced NAD",
          "Reduced NADP",
          "Acetyl coenzyme A",
          "Reduced FAD"
        ],
        "answer": 0
      },
      {
        "q": "What happens to pyruvate in the link reaction?",
        "options": [
          "It is phosphorylated by ATP and split into two parts",
          "It is reduced by reduced NAD to form lactate",
          "It is decarboxylated and oxidised to an acetyl group",
          "It joins a 4C compound to form a 6C compound"
        ],
        "answer": 2
      },
      {
        "q": "How many molecules of carbon dioxide are released in one turn of the Krebs cycle?",
        "options": [
          "1",
          "6",
          "3",
          "2"
        ],
        "answer": 3
      },
      {
        "q": "What is formed when oxygen accepts electrons and protons at the end of the electron transport chain?",
        "options": [
          "Water",
          "Reduced NAD",
          "Carbon dioxide",
          "Pyruvate"
        ],
        "answer": 0
      },
      {
        "q": "Through which enzyme do protons flow back into the mitochondrial matrix during chemiosmosis?",
        "options": [
          "RUBISCO",
          "ATP synthase",
          "NADP reductase",
          "Lactate dehydrogenase"
        ],
        "answer": 1
      },
      {
        "q": "What is produced by anaerobic respiration in mammalian muscle cells?",
        "options": [
          "Lactate",
          "Ethanal",
          "Ethanol and carbon dioxide",
          "Glycerate 3-phosphate"
        ],
        "answer": 0
      },
      {
        "q": "What are the products of anaerobic respiration in plant cells?",
        "options": [
          "Lactate only",
          "Lactate and carbon dioxide",
          "Ethanol and carbon dioxide",
          "Ethanol and water"
        ],
        "answer": 2
      },
      {
        "q": "What does an action spectrum show?",
        "options": [
          "The rate of photosynthesis at each wavelength of light",
          "The light absorbed by one pigment at each wavelength",
          "The rate of photosynthesis at each light intensity",
          "The distance moved by each pigment on a chromatogram"
        ],
        "answer": 0
      },
      {
        "q": "Which pigment is found at the reaction centre of a photosystem?",
        "options": [
          "Chlorophyll b",
          "Chlorophyll a",
          "Xanthophyll",
          "Carotene"
        ],
        "answer": 1
      },
      {
        "q": "In which part of the chloroplast does the light-independent stage take place?",
        "options": [
          "Stroma",
          "Thylakoid membrane",
          "Envelope",
          "Thylakoid lumen"
        ],
        "answer": 0
      },
      {
        "q": "Which enzyme catalyses the fixation of carbon dioxide in the Calvin cycle?",
        "options": [
          "Lactate dehydrogenase",
          "NADP reductase",
          "ATP synthase",
          "RUBISCO"
        ],
        "answer": 3
      },
      {
        "q": "What are the products of non-cyclic photophosphorylation?",
        "options": [
          "GALP, ATP and oxygen",
          "ATP only, with no oxygen",
          "ATP, reduced NADP and oxygen",
          "ATP, reduced NADP and CO₂"
        ],
        "answer": 2
      },
      {
        "q": "What is a granum in a chloroplast?",
        "options": [
          "A membrane joining two stacks",
          "A starch grain in the stroma",
          "The chloroplast's double membrane",
          "A stack of thylakoids"
        ],
        "answer": 3
      }
    ],
    "amber": [
      {
        "q": "A poison stops the electron transport chain. Why does the Krebs cycle stop soon afterwards?",
        "options": [
          "Reduced NAD is not reoxidised, so no NAD is free to accept hydrogen",
          "The Krebs cycle uses oxygen directly in each of its decarboxylation steps",
          "ATP synthase supplies the acetyl groups that enter the Krebs cycle each turn",
          "Glycolysis cannot make pyruvate unless the chain is supplying it with ATP"
        ],
        "answer": 0
      },
      {
        "q": "How many molecules of CO₂ are released from one glucose molecule by the link reactions and Krebs cycle together?",
        "options": [
          "3",
          "6",
          "2",
          "4"
        ],
        "answer": 1
      },
      {
        "q": "Which feature would you expect in the mitochondria of a tissue with a very high demand for ATP?",
        "options": [
          "Densely packed cristae, giving a large inner membrane area",
          "Fewer ATP synthase molecules to reduce leakage of protons",
          "A much larger intermembrane space to hold more protons",
          "A thicker outer membrane that keeps pyruvate out of the matrix"
        ],
        "answer": 0
      },
      {
        "q": "A chemical makes the inner mitochondrial membrane freely permeable to protons. What is the most likely effect?",
        "options": [
          "Less ATP is made because the proton gradient cannot be maintained",
          "Oxygen can no longer act as the terminal acceptor of electrons",
          "Glycolysis stops because pyruvate can no longer enter the matrix",
          "More ATP is made because protons reach ATP synthase more easily"
        ],
        "answer": 0
      },
      {
        "q": "What is the main function of converting pyruvate to lactate in a muscle cell short of oxygen?",
        "options": [
          "To provide a new terminal electron acceptor for the electron transport chain",
          "To release CO₂ so that the pH inside the muscle stays constant",
          "To make extra ATP from pyruvate by substrate-level phosphorylation",
          "To regenerate NAD so that glycolysis can continue"
        ],
        "answer": 3
      },
      {
        "q": "Aerobic respiration yields 32 ATP per glucose. What percentage of this does anaerobic respiration yield?",
        "options": [
          "16%",
          "12.5%",
          "3.1%",
          "6.25%"
        ],
        "answer": 3
      },
      {
        "q": "In a respirometer, the liquid moves 30 mm in 5 minutes along a capillary of internal radius 0.5 mm. What is the rate of oxygen uptake?",
        "options": [
          "18.8 mm³ min⁻¹",
          "23.6 mm³ min⁻¹",
          "4.7 mm³ min⁻¹",
          "9.4 mm³ min⁻¹"
        ],
        "answer": 2
      },
      {
        "q": "Why is soda lime placed in the tubes of a respirometer?",
        "options": [
          "It absorbs the heat from respiration, keeping temperature constant",
          "It absorbs water vapour, so the seeds cannot keep germinating",
          "It releases O₂, so the organisms can keep respiring aerobically",
          "It absorbs CO₂, so the volume change shows the O₂ taken up"
        ],
        "answer": 3
      },
      {
        "q": "On a chromatogram the solvent front moved 8.0 cm and a pigment spot moved 3.6 cm. What is the Rf value of the pigment?",
        "options": [
          "0.45",
          "0.55",
          "4.4",
          "2.22"
        ],
        "answer": 0
      },
      {
        "q": "A chromatogram of leaf pigments shows an orange spot very close to the solvent front. Which pigment is it most likely to be?",
        "options": [
          "Chlorophyll a",
          "Chlorophyll b",
          "Xanthophyll",
          "Carotene"
        ],
        "answer": 3
      },
      {
        "q": "Pondweed photosynthesises most slowly under a green filter. Which explanation is correct?",
        "options": [
          "Green light carries too little energy to be absorbed by any leaf pigment",
          "Green filters let through the most light, which damages the photosystems",
          "Chlorophylls absorb little green light, so fewer electrons are excited",
          "Green light denatures RUBISCO and so slows the light-independent stage"
        ],
        "answer": 2
      },
      {
        "q": "The light is switched off while a plant is photosynthesising. How do the amounts of GP and RuBP change?",
        "options": [
          "GP and RuBP both rise",
          "GP falls and RuBP rises",
          "GP rises and RuBP falls",
          "GP and RuBP both fall"
        ],
        "answer": 2
      },
      {
        "q": "The CO₂ concentration around an illuminated plant is lowered. How do the amounts of GP and RuBP change?",
        "options": [
          "GP rises and RuBP falls",
          "GP and RuBP both fall",
          "GP and RuBP both rise",
          "GP falls and RuBP rises"
        ],
        "answer": 3
      },
      {
        "q": "A plant is given ¹⁴CO₂ for a few seconds. In which compound will the ¹⁴C first appear?",
        "options": [
          "Glyceraldehyde phosphate (GALP)",
          "Glycerate 3-phosphate (GP)",
          "Glucose",
          "Ribulose bisphosphate (RuBP)"
        ],
        "answer": 1
      },
      {
        "q": "Three turns of the Calvin cycle fix three CO₂ molecules. How many GALP molecules are left over as the net gain?",
        "options": [
          "3",
          "6",
          "1",
          "5"
        ],
        "answer": 2
      },
      {
        "q": "A plant is given water labelled with the ¹⁸O isotope. Where will the label first be detected?",
        "options": [
          "In the GP formed by fixation",
          "In the oxygen gas released",
          "In the glucose made from GALP",
          "In the CO₂ taken in"
        ],
        "answer": 1
      },
      {
        "q": "A chloroplast carries out only cyclic photophosphorylation. What will it produce?",
        "options": [
          "Oxygen and reduced NADP, but no ATP",
          "ATP, but no reduced NADP or oxygen",
          "ATP and reduced NADP, but no oxygen",
          "ATP and oxygen, but no reduced NADP"
        ],
        "answer": 1
      },
      {
        "q": "Rate of photosynthesis is plotted against light intensity at two CO₂ concentrations. Why do the curves share the same initial slope?",
        "options": [
          "At low light intensity, light is the limiting factor for both",
          "At low light intensity, CO₂ is the limiting factor for both",
          "At low light intensity, neither plant is able to photosynthesise",
          "At low light intensity, temperature is the limiting factor for both"
        ],
        "answer": 0
      },
      {
        "q": "A lamp used as a point source is moved from 10 cm to 20 cm away from a plant. How does the light intensity at the plant change?",
        "options": [
          "It stays the same",
          "It falls to one eighth",
          "It falls to one quarter",
          "It falls to one half"
        ],
        "answer": 2
      },
      {
        "q": "A tangent to a curve of rate against light intensity passes through (2, 5) and (10, 21). What is its gradient?",
        "options": [
          "16",
          "2.0",
          "2.6",
          "0.5"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "Cyanide blocks the final carrier of the electron transport chain. What would you predict in a muscle cell exposed to cyanide?",
        "options": [
          "The Krebs cycle speeds up to replace the ATP that is lost",
          "Glycolysis stops and pyruvate builds up in the matrix",
          "Oxygen uptake rises and the lactate concentration falls",
          "Oxygen uptake stops and the lactate concentration rises"
        ],
        "answer": 3
      },
      {
        "q": "A student writes that 'the link reaction needs oxygen'. Which is the best evaluation of this statement?",
        "options": [
          "Right: oxygen combines with the acetyl group so that the CO₂ can be released",
          "Wrong as written: it uses no O₂, but stops without it as NAD is not regenerated",
          "Right: oxygen accepts the hydrogen removed from pyruvate during the link reaction",
          "Wrong: it runs at the same rate without O₂ because it uses only coenzyme A"
        ],
        "answer": 1
      },
      {
        "q": "The action spectrum of a plant closely matches the combined absorption spectrum of its pigments. Which conclusion is best supported?",
        "options": [
          "Green light cannot be used in photosynthesis at any light intensity",
          "Chlorophyll a is the only pigment that passes energy to reaction centres",
          "Light absorbed by the pigments supplies the energy for photosynthesis",
          "The rate of photosynthesis is limited by CO₂ at every wavelength tested"
        ],
        "answer": 2
      },
      {
        "q": "Leaves growing in shade often have more chlorophyll b relative to chlorophyll a than leaves in full sun. Which is the most likely advantage?",
        "options": [
          "It widens the range of wavelengths absorbed from light filtered by other leaves",
          "Chlorophyll b absorbs only far-red light, which is the only light found in the shade",
          "Chlorophyll b reflects the green light, protecting shaded leaves from overheating",
          "Chlorophyll b replaces chlorophyll a at reaction centres, so electrons excite easily"
        ],
        "answer": 0
      },
      {
        "q": "A student uses coloured filters to study the effect of wavelength on the rate of photosynthesis. What is the main weakness of this method?",
        "options": [
          "The filters change the CO₂ concentration of the water near the plant",
          "Each filter lets through a single exact wavelength, so too few are tested",
          "The filters differ in the intensity of light they let through",
          "The filters stop oxygen bubbles from forming on the surface of the plant"
        ],
        "answer": 2
      },
      {
        "q": "In 10 minutes, the liquid in a respirometer with seeds moves 18 mm towards the seeds; in the control tube with glass beads it moves 2 mm the same way. What distance is due to respiration?",
        "options": [
          "20 mm",
          "18 mm",
          "9 mm",
          "16 mm"
        ],
        "answer": 3
      },
      {
        "q": "Raising CO₂ from 0.04% to 0.1% raises the plateau of a light-intensity curve, but raising temperature from 20 °C to 25 °C at 0.04% CO₂ has no effect. What does this show about the plateau at 0.04% CO₂?",
        "options": [
          "CO₂ concentration, not temperature, limits the rate there",
          "Temperature, not CO₂ concentration, limits the rate there",
          "RUBISCO is being denatured once temperature reaches 25 °C",
          "Light intensity is still the limiting factor on the plateau"
        ],
        "answer": 0
      },
      {
        "q": "Why can lactate be converted back to pyruvate in the liver, whereas ethanol made in plant cells cannot be turned back into pyruvate?",
        "options": [
          "Making ethanol removes a carbon atom as CO₂, so the step cannot be reversed",
          "Making lactate uses ATP, which stores the energy later needed to reverse it",
          "Ethanol contains more carbon atoms than pyruvate, so it cannot be broken down",
          "Ethanol is made inside the mitochondria, where the enzymes cannot act in reverse"
        ],
        "answer": 0
      },
      {
        "q": "A plant is supplied with ¹⁵N-labelled nitrate and ¹⁴CO₂. Which of these molecules would contain both labels?",
        "options": [
          "Starch",
          "Amino acids",
          "Glucose",
          "Triglycerides"
        ],
        "answer": 1
      },
      {
        "q": "Why is cyclic photophosphorylation useful to a chloroplast that is also carrying out the Calvin cycle?",
        "options": [
          "It releases the oxygen that RUBISCO needs in order to fix carbon dioxide",
          "The Calvin cycle uses more ATP than reduced NADP, so extra ATP is needed",
          "It regenerates RuBP directly, so the Calvin cycle then needs no ATP",
          "It makes the reduced NADP used to regenerate RuBP in the Calvin cycle"
        ],
        "answer": 1
      }
    ]
  },
  "6": {
    "name": "Microbiology and Pathogens",
    "green": [
      {
        "q": "Why is aseptic work with bacteria done close to a lit Bunsen burner?",
        "options": [
          "Rising hot air carries airborne microorganisms away from open cultures",
          "The heat keeps the agar molten so that plates can be poured later",
          "The flame sterilises all of the air above the whole bench surface",
          "The heat raises the culture to the optimum temperature for growth"
        ],
        "answer": 0
      },
      {
        "q": "Which conditions are typically used in an autoclave to sterilise media and equipment?",
        "options": [
          "Ultraviolet light at room temperature for about 5 minutes",
          "Dry air at 37 °C for about 24 hours in an incubator",
          "Boiling water at 100 °C for about 2 minutes at normal pressure",
          "Steam under pressure at 121 °C for about 15 minutes"
        ],
        "answer": 3
      },
      {
        "q": "Why are bacterial cultures in a school laboratory incubated at no more than about 25 °C?",
        "options": [
          "Bacteria are unable to carry out binary fission above 25 °C",
          "All bacterial enzymes denature above 25 °C, so the culture would die",
          "Agar melts above 25 °C, so colonies would run together on the plate",
          "It reduces the risk of growing pathogens adapted to body temperature"
        ],
        "answer": 3
      },
      {
        "q": "What is agar, as used in culture media?",
        "options": [
          "A disinfectant added to stop contaminating fungi from growing",
          "A protein from animal tissue that supplies bacteria with amino acids",
          "A seaweed polysaccharide that sets nutrient broth into a gel",
          "A sugar that bacteria use as their main respiratory substrate"
        ],
        "answer": 2
      },
      {
        "q": "What is a selective medium?",
        "options": [
          "A liquid medium that is used only for measuring the turbidity of cells",
          "A medium that supports the growth of every type of microorganism",
          "A medium that lets some microorganisms grow while stopping others",
          "A medium that has been sterilised by filtration rather than heating"
        ],
        "answer": 2
      },
      {
        "q": "Which method of measuring bacterial growth counts only living cells?",
        "options": [
          "Haemocytometer counting",
          "Dilution plating",
          "Dry mass measurement",
          "Turbidity measurement"
        ],
        "answer": 1
      },
      {
        "q": "In which phase of a bacterial growth curve does the number of cells double at a constant rate?",
        "options": [
          "Stationary phase",
          "Death phase",
          "Lag phase",
          "Log phase"
        ],
        "answer": 3
      },
      {
        "q": "What is happening to most cells during the lag phase of a batch culture?",
        "options": [
          "They are synthesising the enzymes needed to use the nutrients present",
          "They are dividing at the same rate as other cells are dying",
          "They are dying faster than new cells are being produced by division",
          "They are dividing at the fastest rate that the conditions allow"
        ],
        "answer": 0
      },
      {
        "q": "What is the purpose of streak plating a mixed culture?",
        "options": [
          "To sterilise the agar surface before the plate is inoculated",
          "To produce separate colonies, each grown from a single cell",
          "To count the total number of live and dead cells in a sample",
          "To measure how cloudy the culture has become over a set time"
        ],
        "answer": 1
      },
      {
        "q": "Which bacterium is the specification example of a pathogen that causes disease mainly through exotoxins?",
        "options": [
          "Puccinia graminis",
          "Salmonella",
          "Staphylococcus",
          "Mycobacterium tuberculosis"
        ],
        "answer": 2
      },
      {
        "q": "What type of molecule forms the endotoxins of Salmonella?",
        "options": [
          "Lipopolysaccharide",
          "Peptidoglycan",
          "Protein",
          "Phospholipid"
        ],
        "answer": 0
      },
      {
        "q": "Which statement correctly describes penicillin?",
        "options": [
          "Bactericidal; it stops cross-links forming in the peptidoglycan wall",
          "Bacteriostatic; it stops cross-links forming in the peptidoglycan wall",
          "Bactericidal; it binds the 30S subunit and stops protein synthesis",
          "Bacteriostatic; it binds the 30S subunit and stops protein synthesis"
        ],
        "answer": 0
      },
      {
        "q": "To which structure does tetracycline bind?",
        "options": [
          "The 60S subunit of human 80S ribosomes",
          "The 30S subunit of bacterial 70S ribosomes",
          "DNA polymerase in the bacterial nucleoid",
          "Transpeptidase enzymes that build the cell wall"
        ],
        "answer": 1
      },
      {
        "q": "How can an antibiotic resistance gene pass from one species of bacterium to another?",
        "options": [
          "By crossing over between chromosomes during meiosis",
          "By the antibiotic causing the same mutation in the second species",
          "On a plasmid transferred through a pilus by conjugation",
          "By binary fission of the resistant cell into two daughter cells"
        ],
        "answer": 2
      },
      {
        "q": "What is the vector of malaria?",
        "options": [
          "The tsetse fly",
          "The male Anopheles mosquito",
          "Plasmodium falciparum",
          "The female Anopheles mosquito"
        ],
        "answer": 3
      },
      {
        "q": "How does the stem rust fungus, Puccinia graminis, get into a wheat plant?",
        "options": [
          "Spores dissolved in rainwater are carried up in the xylem",
          "Spores in the soil are absorbed through the root hair cells",
          "A hypha from a germinating spore grows in through a stoma",
          "Spores are injected into the phloem by feeding aphids"
        ],
        "answer": 2
      },
      {
        "q": "Which influenza glycoprotein binds to receptors on the epithelial cells of the airways?",
        "options": [
          "Reverse transcriptase",
          "Haemagglutinin",
          "Lipopolysaccharide",
          "Neuraminidase"
        ],
        "answer": 1
      },
      {
        "q": "Which cells secrete antibodies?",
        "options": [
          "Macrophages",
          "Plasma cells",
          "T killer cells",
          "T helper cells"
        ],
        "answer": 1
      },
      {
        "q": "Which white blood cell is usually first to arrive at a site of infection and, after dying, forms part of pus?",
        "options": [
          "Macrophage",
          "B lymphocyte",
          "T helper cell",
          "Neutrophil"
        ],
        "answer": 3
      },
      {
        "q": "What type of immunity does a fetus gain when antibodies cross the placenta?",
        "options": [
          "Natural passive",
          "Artificial active",
          "Natural active",
          "Artificial passive"
        ],
        "answer": 0
      }
    ],
    "amber": [
      {
        "q": "A 0.1 cm³ sample of the 10⁻⁴ dilution of a culture grows 62 colonies. How many living cells were there per cm³ of the original culture?",
        "options": [
          "6.2 × 10⁶",
          "6.2 × 10⁷",
          "6.2 × 10³",
          "6.2 × 10⁵"
        ],
        "answer": 0
      },
      {
        "q": "Plates spread with 0.1 cm³ of four dilutions give: 10⁻³, too many to count; 10⁻⁴, 480 colonies; 10⁻⁵, 52 colonies; 10⁻⁶, 4 colonies. Which plate should be used to calculate the viable count?",
        "options": [
          "10⁻⁴",
          "10⁻⁶",
          "10⁻⁵",
          "10⁻³"
        ],
        "answer": 2
      },
      {
        "q": "300 bacterial cells are placed in fresh broth and go through 5 generations in the log phase. How many cells are there now?",
        "options": [
          "3 000",
          "1 500",
          "9 600",
          "96 000"
        ],
        "answer": 2
      },
      {
        "q": "In the log phase a culture rises from 4.0 × 10² to 2.56 × 10⁴ cells cm⁻³ in 4 hours. What is the mean growth rate constant, k?",
        "options": [
          "0.45 h⁻¹",
          "6.0 h⁻¹",
          "0.67 h⁻¹",
          "1.5 h⁻¹"
        ],
        "answer": 3
      },
      {
        "q": "A student plots bacterial cell number on a linear (not logarithmic) y-axis. How will the log phase appear?",
        "options": [
          "As a curve that becomes less steep with time",
          "As a curve that becomes steeper with time",
          "As a horizontal line at the highest cell number",
          "As a straight line with a constant gradient"
        ],
        "answer": 1
      },
      {
        "q": "During the death phase, absorbance readings of a culture stay almost constant while the viable count falls. What is the best explanation?",
        "options": [
          "Dead cells absorb much more light than living cells do",
          "The colorimeter was zeroed using a sample of the culture",
          "Living cells divide faster in the cuvette than on agar",
          "Turbidity measures dead cells as well as living ones"
        ],
        "answer": 3
      },
      {
        "q": "Why is the lid of an agar plate held on with two short strips of tape rather than sealed all the way round?",
        "options": [
          "Full sealing would trap water vapour, which would kill the colonies on the agar",
          "Full sealing would stop carbon dioxide reaching the bacteria for photosynthesis",
          "Full sealing would prevent the plate from being opened to count the colonies",
          "Full sealing could create anaerobic conditions that favour dangerous anaerobes"
        ],
        "answer": 3
      },
      {
        "q": "Why does a stem rust infection reduce the grain yield of wheat?",
        "options": [
          "Spores are formed inside the grain and use up the stored starch there",
          "Hyphae grow down into the roots and block the uptake of mineral ions",
          "Fungal toxins block the stomata so that no carbon dioxide can enter the leaf",
          "Haustoria absorb sugars that would otherwise be transported to the grain"
        ],
        "answer": 3
      },
      {
        "q": "A patient given an antibiotic for a Salmonella infection briefly feels worse before recovering. What is the most likely reason?",
        "options": [
          "Dying bacteria release more lipopolysaccharide, which triggers inflammation",
          "Bacteria that survive divide faster once their competitors have been killed",
          "The antibiotic kills the patient's neutrophils before it kills the bacteria",
          "The antibiotic stimulates the living bacteria to secrete more protein toxin"
        ],
        "answer": 0
      },
      {
        "q": "Why can Mycobacterium tuberculosis survive after being engulfed by alveolar macrophages?",
        "options": [
          "It is a virus, so it has no structures that enzymes can digest",
          "Its thick, waxy cell wall resists digestion by lysosomal enzymes",
          "It has no cell wall, so the lysosome enzymes have nothing to act on",
          "It secretes a protein exotoxin that bursts the macrophage at once"
        ],
        "answer": 1
      },
      {
        "q": "Why does penicillin have little effect on bacteria that are not growing?",
        "options": [
          "It only blocks cross-linking in new cell wall being made",
          "It is broken down by bacteria that have stopped dividing",
          "It only binds to ribosomes that are actively making protein",
          "It can only enter bacteria through pores made during division"
        ],
        "answer": 0
      },
      {
        "q": "Why is an effective immune system particularly important when an infection is treated with tetracycline?",
        "options": [
          "Tetracycline kills bacteria, which releases toxins the body must remove",
          "Tetracycline also stops human cells making the proteins of antibodies",
          "Tetracycline stops growth, so phagocytes must destroy the bacteria",
          "Tetracycline works only after antibodies have bound to the bacteria"
        ],
        "answer": 2
      },
      {
        "q": "Why can penicillin kill bacteria without damaging human cells?",
        "options": [
          "Human cells are too large for penicillin to enter",
          "Human cells have no peptidoglycan cell wall",
          "Human cells break penicillin down with penicillinase",
          "Human cells have 80S rather than 70S ribosomes"
        ],
        "answer": 1
      },
      {
        "q": "How does identifying the bacterium before prescribing a narrow-spectrum antibiotic help to slow the spread of resistance?",
        "options": [
          "It allows the immune system to make antibodies to the antibiotic",
          "It reduces selection pressure on the other bacteria in the body",
          "It allows a larger dose, which prevents plasmids being transferred",
          "It stops mutations for resistance arising in the target bacterium"
        ],
        "answer": 1
      },
      {
        "q": "The proportion of a hospital's Staphylococcus aureus that is resistant to an antibiotic rises after the drug is widely used. Which explanation is correct?",
        "options": [
          "The bacteria adapted to the antibiotic by building up immunity during treatment",
          "The antibiotic caused mutations that made some of the bacteria resistant to it",
          "A mutation present before treatment let some cells survive, reproduce and pass it on",
          "The bacteria made antibodies against the antibiotic and passed them to offspring"
        ],
        "answer": 2
      },
      {
        "q": "Why is a new influenza vaccine produced each year?",
        "options": [
          "Mutations change the surface antigens, so memory cells no longer match",
          "The vaccine causes the virus to evolve resistance to antibodies",
          "The antibodies made after vaccination are broken down within a year",
          "Memory cells made after vaccination survive for only a few weeks"
        ],
        "answer": 0
      },
      {
        "q": "Which part of the immune response destroys body cells that are infected with influenza virus?",
        "options": [
          "Neutrophils that release pus onto them",
          "Plasma cells that secrete antibodies",
          "T helper cells that release cytokines",
          "T killer cells that release perforins"
        ],
        "answer": 3
      },
      {
        "q": "Why is the secondary immune response faster than the primary response?",
        "options": [
          "Many memory cells specific to the antigen are already present",
          "Antibodies made in the primary response remain in the plasma",
          "The pathogen multiplies more slowly the second time it enters",
          "Macrophages remember the antigen and destroy the pathogen alone"
        ],
        "answer": 0
      },
      {
        "q": "In a fully susceptible population, each case of a disease infects 5 others on average. Approximately what proportion must be immune for herd immunity?",
        "options": [
          "50%",
          "80%",
          "20%",
          "95%"
        ],
        "answer": 1
      },
      {
        "q": "A person injected with antibodies after a tetanus-prone wound is protected for only a few weeks. Why?",
        "options": [
          "The antibodies stimulate a primary response that uses them all up",
          "Memory cells are made but die within a few weeks of the injection",
          "No memory cells are made, and the antibodies are broken down",
          "The antibodies are destroyed by the tetanus toxin they neutralise"
        ],
        "answer": 2
      }
    ],
    "red": [
      {
        "q": "During the stationary phase, the viable count of a culture stays constant for 6 hours. Which conclusion is most valid?",
        "options": [
          "Cells are still dividing, but at the same rate as other cells are dying",
          "The cells have entered a lag phase and are making new enzymes again",
          "The medium has been contaminated with a second, slower-growing species",
          "All the cells have stopped dividing because every nutrient is used up"
        ],
        "answer": 0
      },
      {
        "q": "Culture P has a mean growth rate constant of 2.0 h⁻¹. Culture Q has a mean generation time of 40 minutes. Which conclusion is correct?",
        "options": [
          "Q grows faster, because a longer generation time means more divisions",
          "Q grows faster, because its growth rate constant is 2.5 h⁻¹",
          "P grows faster, because its generation time is 30 minutes",
          "They cannot be compared, because k and generation time are unrelated"
        ],
        "answer": 2
      },
      {
        "q": "A haemocytometer gives 8 × 10⁷ cells cm⁻³ for a culture, but dilution plating of the same culture gives 2 × 10⁷ cells cm⁻³. Which explanation fits both results?",
        "options": [
          "Dilution plating counts dead cells as well, but the chamber misses small cells",
          "Colonies merged on the plates, so every plate held more than 300 colonies",
          "The chamber counts dead cells too, and clumps of cells give single colonies",
          "The chamber count includes spores, which are then killed by dilution plating"
        ],
        "answer": 2
      },
      {
        "q": "A hospital stops using antibiotic X, but resistance to X remains common. The resistance gene is on a plasmid that also carries resistance to antibiotic Y, which is still used. What is the best explanation?",
        "options": [
          "Resistance to X can only be lost if the bacteria are exposed to X again",
          "Using Y still selects for the plasmid, so resistance to X is kept as well",
          "Using Y causes new mutations in the gene for resistance to X on the plasmid",
          "Plasmids are never lost from bacteria, so resistance to X can never fall"
        ],
        "answer": 1
      },
      {
        "q": "Which evidence would give the strongest support for the claim that insecticide-treated bed nets reduce malaria?",
        "options": [
          "Peer-reviewed randomised trials comparing villages with and without nets, repeated in several regions",
          "A survey showing that most families who own bed nets believe that the nets protect their children",
          "A report from one village that malaria cases fell in the year after nets were handed out to families",
          "Laboratory tests by the net manufacturer showing the insecticide kills mosquitoes that land on nets"
        ],
        "answer": 0
      },
      {
        "q": "Why has a vaccine against Plasmodium been much harder to develop than one against measles?",
        "options": [
          "The parasite destroys T helper cells, so vaccinated people cannot make any memory cells",
          "The parasite changes its antigens and spends much time inside liver and red blood cells",
          "The parasite has no antigens on its surface, so no antibodies can be made against it at all",
          "The parasite is carried by a vector, and vaccines cannot work against vector-borne diseases"
        ],
        "answer": 1
      },
      {
        "q": "Measles has an R₀ of about 15. Vaccine uptake in a region falls from 95% to 80%. What is the most valid conclusion?",
        "options": [
          "Uptake is still above the 50% needed, because only half of cases pass it on",
          "Uptake only matters for vaccinated people, as herd immunity protects no one else",
          "Uptake is still above the threshold of about 7%, so the disease stays controlled",
          "Uptake is now below the threshold of about 93%, so outbreaks become likely"
        ],
        "answer": 3
      },
      {
        "q": "Years after recovering from influenza, a person is infected by a new strain produced by antigenic shift. What antibody response is expected?",
        "options": [
          "No response, because memory cells block the virus",
          "A slow, low response like a primary response",
          "An immediate response from antibodies still in the blood",
          "A rapid, high response like a secondary response"
        ],
        "answer": 1
      },
      {
        "q": "A drug stops T helper cells releasing cytokines. What is the most likely effect on the immune response to a viral infection?",
        "options": [
          "No change, because T helper cells do not kill infected cells directly",
          "Reduced antibody production, but no change in T killer cell activity",
          "Reduced T killer cell activity, but no change in antibody production",
          "Reduced antibody production and reduced activation of T killer cells"
        ],
        "answer": 3
      },
      {
        "q": "A medium contains 7.5% salt and a sugar that Staphylococcus aureus can use, causing a colour change around its colonies. Why is this useful for detecting S. aureus?",
        "options": [
          "Salt stops most bacteria but staphylococci tolerate it, and the colour picks out S. aureus",
          "Salt makes the medium sterile, so only colonies of S. aureus can form on the plate at all",
          "Salt kills S. aureus but not the other staphylococci, so colourless colonies are S. aureus",
          "The sugar makes every bacterium change colour, and the salt makes S. aureus grow faster"
        ],
        "answer": 0
      }
    ]
  },
  "7": {
    "name": "Modern Genetics",
    "green": [
      {
        "q": "Which statement best describes the genome of an organism?",
        "options": [
          "The full set of proteins that can be made from the DNA in one of its cells",
          "Only the sections of its DNA that code for polypeptides, excluding the introns",
          "All of the DNA in its cells, including both coding and non-coding sequences",
          "All of the genes that are being transcribed in one of its cells at a given time"
        ],
        "answer": 2
      },
      {
        "q": "Which enzyme builds the new DNA strands during PCR?",
        "options": [
          "Taq polymerase, a DNA polymerase that is stable at high temperature",
          "DNA helicase, which separates the two strands and then extends them",
          "RNA polymerase, which joins nucleotides along the template strand",
          "Reverse transcriptase, which copies each single strand of the template"
        ],
        "answer": 0
      },
      {
        "q": "At about what temperature are the two DNA strands separated during a PCR cycle?",
        "options": [
          "37 °C",
          "72 °C",
          "55 °C",
          "95 °C"
        ],
        "answer": 3
      },
      {
        "q": "What is the role of the primers in PCR?",
        "options": [
          "They break the hydrogen bonds between the two strands of the template DNA molecule",
          "They bind at either end of the target region and give the polymerase a starting point",
          "They supply the free nucleotides that are joined together to form the new strands",
          "They join the new nucleotides together by forming phosphodiester bonds between them"
        ],
        "answer": 1
      },
      {
        "q": "Which regions of DNA are compared in a standard DNA profile?",
        "options": [
          "Promoters of all genes",
          "Short tandem repeats",
          "Exons of enzyme genes",
          "Genes for ribosomal RNA"
        ],
        "answer": 1
      },
      {
        "q": "In gel electrophoresis, why do DNA fragments move towards the anode?",
        "options": [
          "The buffer carries them towards the positive electrode",
          "Their deoxyribose sugars are attracted to the positive electrode",
          "Their nitrogenous bases give them a positive charge",
          "Their phosphate groups give them a negative charge"
        ],
        "answer": 3
      },
      {
        "q": "What are transcription factors?",
        "options": [
          "Proteins that bind to ribosomes and control the start of polypeptide synthesis",
          "Enzymes that add methyl groups to specific cytosine bases in the promoter",
          "Proteins that bind to specific DNA sequences and control transcription",
          "RNA molecules that bind to specific mRNA sequences and control translation"
        ],
        "answer": 2
      },
      {
        "q": "Where does RNA splicing take place in a eukaryotic cell?",
        "options": [
          "At the ribosome, while the mRNA is being translated",
          "In the nucleus, before the mRNA leaves",
          "In the cytoplasm, after the mRNA has left the nucleus",
          "In the Golgi apparatus, after the polypeptide is made"
        ],
        "answer": 1
      },
      {
        "q": "Which sections of pre-mRNA are removed during splicing?",
        "options": [
          "Exons",
          "Introns",
          "Promoters",
          "Codons"
        ],
        "answer": 1
      },
      {
        "q": "To which base are methyl groups usually added when DNA is methylated?",
        "options": [
          "Adenine",
          "Thymine",
          "Cytosine",
          "Guanine"
        ],
        "answer": 2
      },
      {
        "q": "What is the usual effect of adding acetyl groups to histones?",
        "options": [
          "The chromatin loosens and transcription of the genes increases",
          "The base sequence of the DNA wound around the histones is changed",
          "The DNA wound around the histones is cut into small fragments",
          "The chromatin condenses and transcription of the genes decreases"
        ],
        "answer": 0
      },
      {
        "q": "Which of these is an epigenetic modification?",
        "options": [
          "Substituting one base for another in an exon of a gene",
          "Duplicating a whole section of one chromosome during meiosis",
          "Adding methyl groups to cytosines in a gene's promoter",
          "Deleting three bases from the coding sequence of a gene"
        ],
        "answer": 2
      },
      {
        "q": "Which cells are totipotent?",
        "options": [
          "The zygote and the cells from its first few divisions",
          "Stem cells collected from umbilical cord blood at birth",
          "Cells of the inner cell mass of a 5-day blastocyst",
          "Stem cells found in the bone marrow of an adult"
        ],
        "answer": 0
      },
      {
        "q": "Which of these is an example of a multipotent stem cell?",
        "options": [
          "An iPS cell made by reprogramming a fibroblast taken from the skin",
          "A bone marrow cell that gives rise to the different types of blood cell",
          "A cell from the inner cell mass that can form any tissue of the body",
          "A zygote that can give rise to a whole embryo and its placenta"
        ],
        "answer": 1
      },
      {
        "q": "Which genes were introduced into fibroblasts to make the first iPS cells?",
        "options": [
          "Oct4, Sox2, Klf4 and c-Myc",
          "Oct4, Xist, FAD2 and p53",
          "EPSPS, FAD2, Sox2 and Klf4",
          "Nanog, Xist, p53 and CFTR"
        ],
        "answer": 0
      },
      {
        "q": "Which bonds does a restriction endonuclease hydrolyse?",
        "options": [
          "Glycosidic bonds between each base and its deoxyribose sugar",
          "Peptide bonds between the amino acids of the histone proteins",
          "Hydrogen bonds between the complementary bases of the DNA",
          "Phosphodiester bonds in the sugar–phosphate backbone of DNA"
        ],
        "answer": 3
      },
      {
        "q": "What is the role of DNA ligase when recombinant DNA is made?",
        "options": [
          "It copies mRNA to produce a DNA version of the gene with no introns",
          "It cuts the plasmid open at one specific recognition sequence",
          "It forms the hydrogen bonds that hold the two sticky ends together",
          "It forms phosphodiester bonds that seal the sugar–phosphate backbones"
        ],
        "answer": 3
      },
      {
        "q": "What is a gene gun used for?",
        "options": [
          "Separating DNA fragments by size using an electric field",
          "Injecting modified viruses carrying a gene into bacteria",
          "Giving bacteria a heat shock so that they take up plasmids",
          "Firing tiny DNA-coated metal particles into plant cells"
        ],
        "answer": 3
      },
      {
        "q": "What is a knockout mouse?",
        "options": [
          "A mouse in which one specific gene has been made non-functional",
          "A mouse that carries an extra working copy of a human gene",
          "A mouse in which every gene has been silenced by methylation",
          "A mouse cloned from the nucleus of a body cell of an adult"
        ],
        "answer": 0
      },
      {
        "q": "What is a transgenic organism?",
        "options": [
          "An organism in which one of its own genes has been silenced",
          "An organism produced by crossing two different varieties",
          "An organism that contains a gene from another species",
          "An organism grown in tissue culture from a single plant cell"
        ],
        "answer": 2
      }
    ],
    "amber": [
      {
        "q": "A sample contains 8 copies of a target sequence. If the number of copies doubles every cycle, how many copies are there after 20 cycles of PCR?",
        "options": [
          "8.39 × 10⁶",
          "1.60 × 10²",
          "1.05 × 10⁶",
          "1.68 × 10⁷"
        ],
        "answer": 0
      },
      {
        "q": "Starting from one DNA molecule and assuming perfect doubling, what is the smallest number of PCR cycles that gives at least 1 × 10⁶ copies?",
        "options": [
          "6 cycles",
          "20 cycles",
          "19 cycles",
          "10 cycles"
        ],
        "answer": 1
      },
      {
        "q": "At one STR locus a child has bands of 12 and 15 repeats and the mother has bands of 12 and 14 repeats. Which man could be the biological father?",
        "options": [
          "A man with bands of 13 and 14 repeats",
          "A man with bands of 15 and 17 repeats",
          "A man with bands of 11 and 16 repeats",
          "A man with bands of 12 and 14 repeats"
        ],
        "answer": 1
      },
      {
        "q": "STR fragments of 120, 150, 210 and 300 base pairs are separated on the same gel. Which fragment travels furthest from the well?",
        "options": [
          "The 210 base pair fragment",
          "The 300 base pair fragment",
          "The 150 base pair fragment",
          "The 120 base pair fragment"
        ],
        "answer": 3
      },
      {
        "q": "The coding strand of part of a gene reads 5′-ATG TTT GGC-3′. What is the base sequence of the mRNA transcribed from it?",
        "options": [
          "AUG TTT GGC",
          "UAC AAA CCG",
          "AUG UUU GGC",
          "TAC AAA CCG"
        ],
        "answer": 2
      },
      {
        "q": "A single base is deleted near the start of the coding sequence of a gene. What is the most likely effect on the protein?",
        "options": [
          "Only one amino acid is changed, so the protein usually keeps most of its function",
          "There is no change, because the genetic code is degenerate for most amino acids",
          "One amino acid is lost, but every codon after the deletion is still read normally",
          "Every codon after the deletion is changed, so the protein is usually non-functional"
        ],
        "answer": 3
      },
      {
        "q": "Oestrogen increases the transcription of certain genes in its target cells. Which statement describes how?",
        "options": [
          "It diffuses into the cell and binds a receptor, and the complex binds DNA as a transcription factor",
          "It binds a receptor on the cell surface, which then cuts the introns out of the target mRNA",
          "It enters the nucleus and adds acetyl groups directly to the histones around the target genes",
          "It binds to the target mRNA in the cytoplasm and stops enzymes in the cytoplasm breaking it down"
        ],
        "answer": 0
      },
      {
        "q": "A mutation stops a repressor protein from binding to the DNA near its target gene. What is the most likely effect?",
        "options": [
          "The gene stops being expressed, because its base sequence has now been changed",
          "Transcription of the gene decreases, because RNA polymerase can no longer bind",
          "Transcription of the gene increases, because RNA polymerase is no longer blocked",
          "Translation of the mRNA stops, because ribosomes can no longer attach to it"
        ],
        "answer": 2
      },
      {
        "q": "A gene has five exons. Muscle cells make mRNA containing exons 1, 2, 3 and 5, while nerve cells make mRNA containing exons 1, 2, 4 and 5. What explains this?",
        "options": [
          "The gene has a different base sequence in the two types of cell",
          "Different introns are methylated in the mRNA of the two cell types",
          "The same mature mRNA is translated from two different start codons",
          "The same pre-mRNA is spliced in different ways in the two cell types"
        ],
        "answer": 3
      },
      {
        "q": "Why is cDNA, rather than a section of human chromosomal DNA, used when bacteria are modified to make human insulin?",
        "options": [
          "Bacteria cannot remove introns, and cDNA copied from mRNA has none",
          "cDNA is shorter because it lacks the codons for several amino acids",
          "Chromosomal DNA cannot be cut by any of the restriction enzymes",
          "cDNA contains the introns that bacteria need to regulate the gene"
        ],
        "answer": 0
      },
      {
        "q": "In some tumours, the promoter of a tumour suppressor gene is heavily methylated. What is the most likely effect?",
        "options": [
          "The gene's introns are kept, so a longer protein is made",
          "The gene is silenced, so less of its protein is made",
          "The gene is mutated, so an altered protein is made",
          "The gene is transcribed faster, so more protein is made"
        ],
        "answer": 1
      },
      {
        "q": "A drug inhibits the enzymes that remove acetyl groups from histones. What is its most likely effect on the genes in treated cells?",
        "options": [
          "Histones bind more tightly to DNA, so the chromosomes cannot be replicated",
          "Cytosines lose methyl groups, so the base sequence of the DNA is changed",
          "Histones lose acetyl groups, so chromatin condenses and transcription decreases",
          "Histones stay acetylated, so chromatin stays open and transcription increases"
        ],
        "answer": 3
      },
      {
        "q": "In each cell of a female mammal, Xist RNA coats one of the two X chromosomes. Which statement about Xist is correct?",
        "options": [
          "It is a non-coding RNA that increases the transcription of genes on that chromosome",
          "It is an mRNA that is translated into a protein that deletes genes from that chromosome",
          "It is a non-coding RNA that causes the chromosome it coats to condense and be silenced",
          "It is a transfer RNA that carries methyl groups to the histones of that chromosome"
        ],
        "answer": 2
      },
      {
        "q": "A liver cell divides by mitosis, and both daughter cells are also liver cells. What best explains this?",
        "options": [
          "The pattern of DNA methylation is copied onto the new DNA in the daughter cells",
          "Liver transcription factors change the base sequence of the DNA in both cells",
          "Each daughter cell receives only the chromosomes that carry the liver cell genes",
          "Genes that are not needed in liver cells are removed from the DNA before mitosis"
        ],
        "answer": 0
      },
      {
        "q": "Cells of the inner cell mass can form any cell of the body but can no longer form placenta. Which change best explains this?",
        "options": [
          "All methylation marks inherited from the gametes have been removed",
          "Genes needed for placental tissue have been deleted from these cells",
          "Genes needed for placental tissue have been silenced by epigenetic marks",
          "Pluripotency genes such as Oct4 have been silenced by methylation"
        ],
        "answer": 2
      },
      {
        "q": "Why are iPS cells made from a patient's own fibroblasts less likely to be rejected than embryonic stem cells from a donated embryo?",
        "options": [
          "They are made without introducing any genes, so their DNA is completely unchanged",
          "They carry the patient's own antigens, so they are not recognised as foreign",
          "They have no proteins on their surface, so immune cells are unable to bind to them",
          "They are totipotent, so they form placental tissue that shields them from attack"
        ],
        "answer": 1
      },
      {
        "q": "A plasmid carries genes for resistance to ampicillin and tetracycline. The new gene is inserted into the tetracycline resistance gene. Which colonies contain recombinant plasmids?",
        "options": [
          "Colonies that grow on neither ampicillin nor tetracycline",
          "Colonies that grow on both ampicillin and tetracycline",
          "Colonies that grow on tetracycline but not on ampicillin",
          "Colonies that grow on ampicillin but not on tetracycline"
        ],
        "answer": 3
      },
      {
        "q": "Why are the plasmid and the donor DNA cut with the same restriction enzyme?",
        "options": [
          "So that the marker genes on the plasmid cannot be cut by the enzyme",
          "So that both pieces of DNA are cut into fragments of exactly equal length",
          "So that the sticky ends on both are complementary and can base pair",
          "So that DNA ligase can form hydrogen bonds between the two sticky ends"
        ],
        "answer": 2
      },
      {
        "q": "EcoRI cuts the sequence 5′-G↓AATTC-3′ on both strands. What single-stranded overhang is left on each fragment?",
        "options": [
          "5′-AATT-3′",
          "5′-GAATTC-3′",
          "5′-ATTC-3′",
          "5′-GAAT-3′"
        ],
        "answer": 0
      },
      {
        "q": "High-oleic soya has had its FAD2 gene silenced. Why is its oil more stable when used for frying?",
        "options": [
          "It is fully hydrogenated in the bean, so it contains only saturated fat",
          "It contains more monounsaturated and fewer polyunsaturated fatty acids",
          "It contains more polyunsaturated and fewer monounsaturated fatty acids",
          "It contains more trans fatty acids, which cannot react with any oxygen"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "A suspect's DNA profile matches the profile from a crime-scene sample at every locus tested. Which conclusion is best supported?",
        "options": [
          "Every close relative of the suspect can now be ruled out as the source of the DNA sample",
          "The suspect was at the scene at the time of the crime, because the DNA is still present",
          "DNA from the suspect, or from an identical twin, was very probably present at the scene",
          "The suspect must have committed the crime, because no two DNA profiles are ever the same"
        ],
        "answer": 2
      },
      {
        "q": "In a PCR run the number of copies doubles each cycle at first, but levels off after about 30 cycles. Which is the most likely explanation?",
        "options": [
          "The Taq polymerase is being denatured at about 72 °C",
          "The DNA strands no longer separate at about 95 °C",
          "The primers cannot bind to the template at about 55 °C",
          "The primers and free nucleotides are being used up"
        ],
        "answer": 3
      },
      {
        "q": "Mice homozygous for a knockout of gene X all die as embryos. What does this show, and what is its main limitation?",
        "options": [
          "Gene X is not needed in early development, so its role in adults can be studied in these mice",
          "Gene X is needed in early development, but its role in adults cannot be studied in these mice",
          "Gene X is needed only in the placenta, so it cannot have any other role in these mice as adults",
          "Gene X causes a disease in adults, so knocking it out protects these mice from that disease"
        ],
        "answer": 1
      },
      {
        "q": "In replica plating, why must the recombinant colonies be collected from the ampicillin master plate rather than from the tetracycline replica plate?",
        "options": [
          "Tetracycline removes the inserted gene from the plasmid in these bacteria",
          "The replica plate carries only bacteria that did not take up any plasmid",
          "Tetracycline kills them, so none of their cells grow on the replica plate",
          "The velvet pad transfers only non-recombinant bacteria to the replica plate"
        ],
        "answer": 2
      },
      {
        "q": "The promoter of gene Y is heavily methylated in muscle cells but has little methylation in liver cells. Which prediction is best supported?",
        "options": [
          "Gene Y mRNA will be more abundant in muscle cells than in liver cells",
          "Gene Y will have a different base sequence in the two types of cell",
          "Gene Y protein will be present in equal amounts in both types of cell",
          "Gene Y mRNA will be more abundant in liver cells than in muscle cells"
        ],
        "answer": 3
      },
      {
        "q": "Which is the strongest scientific reason why iPS cell treatments are not yet in routine use?",
        "options": [
          "Reprogramming is inefficient and may leave cells that form tumours",
          "They can only be made from mouse cells, not from human cells",
          "They must be made from embryos, so the supply is limited by IVF",
          "They are multipotent, so they only form cells of the original tissue"
        ],
        "answer": 0
      },
      {
        "q": "Glyphosate-tolerant soya carries a bacterial gene for a form of EPSPS that glyphosate does not inhibit. Which is the most valid concern about growing it widely?",
        "options": [
          "The EPSPS gene converts oleic acid into linoleic acid in the soya oil",
          "Repeated use of one herbicide selects for weeds that are resistant to it",
          "Glyphosate is converted into a transcription factor stored in the beans",
          "The crop's own EPSPS is inhibited, so the soya dies whenever it is sprayed"
        ],
        "answer": 1
      },
      {
        "q": "Scientists know the amino acid sequence of a protein. Why can they not work out one unique base sequence for the gene that codes for it?",
        "options": [
          "The code overlaps, so each base is read in three codons",
          "Most amino acids are coded for by more than one codon",
          "Each amino acid is coded for by only two bases, not three",
          "Each codon codes for more than one different amino acid"
        ],
        "answer": 1
      },
      {
        "q": "At three STR loci a child has alleles (9, 12), (15, 17) and (6, 8). The mother has (9, 10), (15, 16) and (6, 7). Man P has (11, 12), (16, 17) and (8, 9). Man Q has (12, 14), (17, 18) and (5, 7). Which conclusion is correct?",
        "options": [
          "P cannot be excluded, but Q is excluded at the third locus",
          "Neither man can be excluded, as each shares bands with the child",
          "Both men are excluded, because neither matches the mother",
          "Q cannot be excluded, but P is excluded at the second locus"
        ],
        "answer": 0
      },
      {
        "q": "Identical twins have the same genome, but the patterns of gene expression in their cells become more different as they age. Which is the best explanation?",
        "options": [
          "Differences in their environments alter the methylation and histone marks in each twin",
          "Mutations build up in their short tandem repeats and change the proteins each one makes",
          "Alternative splicing gradually changes the base sequences of the genes in each twin",
          "Each twin loses different genes from their cells as the cells become more specialised"
        ],
        "answer": 0
      }
    ]
  },
  "8": {
    "name": "Origins of Genetic Variation",
    "green": [
      {
        "q": "Which process is the only source of new alleles in a population?",
        "options": [
          "Mutation, which changes the base sequence of a gene",
          "Independent assortment of homologous chromosomes at metaphase I",
          "Crossing over, which swaps sections between chromatids of a bivalent",
          "Random fertilisation between gametes produced by two parents"
        ],
        "answer": 0
      },
      {
        "q": "Between which structures does crossing over take place?",
        "options": [
          "Non-sister chromatids of a pair of homologous chromosomes",
          "Chromatids of non-homologous chromosomes lying together at metaphase II",
          "Sister chromatids held together at the centromere of one chromosome",
          "Two chromosomes that belong to different homologous pairs"
        ],
        "answer": 0
      },
      {
        "q": "During which stage of meiosis does the random orientation of bivalents produce independent assortment?",
        "options": [
          "Prophase I",
          "Anaphase II",
          "Telophase II",
          "Metaphase I"
        ],
        "answer": 3
      },
      {
        "q": "What is a chiasma?",
        "options": [
          "A point where non-sister chromatids have broken and rejoined",
          "The region where two sister chromatids are held together",
          "The fixed position of a particular gene on a chromosome",
          "A spindle fibre attached to the centromere of a chromosome"
        ],
        "answer": 0
      },
      {
        "q": "What is a heterozygote?",
        "options": [
          "An individual with two identical alleles at a locus",
          "An individual with two different alleles at a locus",
          "An individual with only one copy of a gene, as in a male for X-linked genes",
          "An individual carrying three or more alleles of the same gene"
        ],
        "answer": 1
      },
      {
        "q": "In the Hardy–Weinberg equation p² + 2pq + q² = 1, what does 2pq represent?",
        "options": [
          "The frequency of heterozygous individuals",
          "The frequency of homozygous dominant individuals",
          "The combined frequency of both alleles in the population",
          "The frequency of the recessive allele in the gene pool"
        ],
        "answer": 0
      },
      {
        "q": "Which statement describes codominance?",
        "options": [
          "The two alleles in a heterozygote blend and are permanently changed",
          "Neither allele in a heterozygote is expressed in the phenotype",
          "Both alleles in a heterozygote are expressed in the phenotype",
          "Only the dominant allele in a heterozygote affects the phenotype"
        ],
        "answer": 2
      },
      {
        "q": "What is meant by multiple alleles?",
        "options": [
          "A single individual that carries three or more alleles of one gene",
          "A gene that has three or more alleles in a population",
          "Two alleles of the same gene carried on the same chromatid",
          "Several different genes that all control the same characteristic"
        ],
        "answer": 1
      },
      {
        "q": "What is the genotype of a person with blood group O?",
        "options": [
          "IᴬIᴮ",
          "IᴼIᴼ",
          "IᴮIᴼ",
          "IᴬIᴼ"
        ],
        "answer": 1
      },
      {
        "q": "What is a test cross?",
        "options": [
          "Crossing an individual of dominant phenotype with a homozygous recessive",
          "Crossing an individual with a homozygous dominant to check its genotype",
          "Crossing two individuals that are both heterozygous for the same gene",
          "Crossing an individual with one of its own offspring to find its phenotype"
        ],
        "answer": 0
      },
      {
        "q": "What phenotypic ratio is expected when two individuals heterozygous for two unlinked, non-interacting genes are crossed?",
        "options": [
          "3 : 1",
          "1 : 1 : 1 : 1",
          "9 : 3 : 3 : 1",
          "1 : 2 : 1"
        ],
        "answer": 2
      },
      {
        "q": "What is meant by autosomal linkage?",
        "options": [
          "Two alleles of the same gene always pass into the same gamete together",
          "Two genes have their loci on the same autosome",
          "Two genes are on different autosomes, so they assort independently",
          "A gene has its locus on the X chromosome with no matching locus on the Y"
        ],
        "answer": 1
      },
      {
        "q": "Which describes the allele that causes haemophilia A?",
        "options": [
          "Dominant and carried on the X chromosome",
          "Recessive and carried on the Y chromosome",
          "Recessive and carried on an autosome",
          "Recessive and carried on the X chromosome"
        ],
        "answer": 3
      },
      {
        "q": "Why is a human male described as hemizygous for X-linked genes?",
        "options": [
          "He has one dominant and one recessive allele of every X-linked gene",
          "He carries a matching copy of each X-linked gene on his Y chromosome",
          "He has only one copy of each gene on the X chromosome",
          "He has two identical copies of each gene on the X chromosome"
        ],
        "answer": 2
      },
      {
        "q": "A chi squared test compares observed and expected numbers in four phenotype categories. How many degrees of freedom are there?",
        "options": [
          "1",
          "4",
          "3",
          "2"
        ],
        "answer": 2
      },
      {
        "q": "What is the null hypothesis in a chi squared test on the results of a genetic cross?",
        "options": [
          "The two genes being studied are linked on the same chromosome",
          "There is a significant difference between the observed and expected numbers",
          "The observed numbers will exactly match the numbers in the expected ratio",
          "There is no significant difference between observed and expected numbers"
        ],
        "answer": 3
      },
      {
        "q": "What is a gene pool?",
        "options": [
          "All the alleles of one gene that are carried by one individual",
          "All the alleles of all the genes in a population of one species",
          "All the species that live together in one habitat at the same time",
          "All the genes carried in the cells of one individual of a species"
        ],
        "answer": 1
      },
      {
        "q": "Which phenotypes are favoured by stabilising selection?",
        "options": [
          "Those at one extreme of the distribution only",
          "All phenotypes equally, whatever their value",
          "Those at both extremes of the distribution",
          "Those close to the mean of the distribution"
        ],
        "answer": 3
      },
      {
        "q": "What is genetic drift?",
        "options": [
          "A change in allele frequencies caused by individuals migrating in",
          "The formation of new alleles by random copying errors during replication",
          "A change in allele frequencies caused by chance rather than selection",
          "The increase of alleles that give an advantage in a new environment"
        ],
        "answer": 2
      },
      {
        "q": "What is the founder effect?",
        "options": [
          "The spread of an advantageous allele from one founder to all its descendants",
          "The gain of many new alleles when a population colonises a new habitat",
          "A sharp fall in the size of an existing population after a disaster",
          "Altered allele frequencies in a new population started by a few individuals"
        ],
        "answer": 3
      }
    ],
    "amber": [
      {
        "q": "An organism has a diploid number of 8. How many different combinations of chromosomes can its gametes have from independent assortment alone?",
        "options": [
          "4",
          "8",
          "16",
          "256"
        ],
        "answer": 2
      },
      {
        "q": "A man with genotype IᴬIᴼ and a woman with genotype IᴮIᴼ have a child. What is the probability that the child has blood group AB?",
        "options": [
          "0.25",
          "0.5",
          "0.75",
          "0"
        ],
        "answer": 0
      },
      {
        "q": "In pea plants, tall (T) is dominant to dwarf (t). A tall plant crossed with a dwarf plant gives 48 tall and 52 dwarf offspring. What is the most likely genotype of the tall parent?",
        "options": [
          "Tt",
          "TT and Tt are equally likely",
          "tt",
          "TT"
        ],
        "answer": 0
      },
      {
        "q": "Two pea plants that are both Tt produce two offspring. What is the probability that both offspring are dwarf (tt)?",
        "options": [
          "1/8",
          "1/2",
          "1/16",
          "1/4"
        ],
        "answer": 2
      },
      {
        "q": "A plant heterozygous for two unlinked genes (RrYy) is crossed with a plant that is rryy. What ratio of phenotypes is expected?",
        "options": [
          "9 : 3 : 3 : 1",
          "1 : 2 : 1",
          "3 : 1",
          "1 : 1 : 1 : 1"
        ],
        "answer": 3
      },
      {
        "q": "Round seed (R) is dominant to wrinkled (r) and yellow (Y) is dominant to green (y); the genes are unlinked. Two RrYy plants are crossed. What fraction of the offspring are expected to be round and green?",
        "options": [
          "3/16",
          "1/4",
          "9/16",
          "1/16"
        ],
        "answer": 0
      },
      {
        "q": "Two unaffected parents have a daughter who is affected by a genetic condition. What does this show about the allele causing it?",
        "options": [
          "It is recessive and X-linked, and only the mother carries the allele",
          "It is dominant, and at least one parent must be heterozygous for it",
          "It is recessive and X-linked, and the father is a heterozygous carrier",
          "It is recessive and autosomal, and both parents are heterozygous"
        ],
        "answer": 3
      },
      {
        "q": "A woman who is a carrier of haemophilia (XᴴXʰ) has children with an unaffected man (XᴴY). What is the probability that a son of this couple has haemophilia?",
        "options": [
          "1",
          "0",
          "0.5",
          "0.25"
        ],
        "answer": 2
      },
      {
        "q": "A man with haemophilia (XʰY) and a woman homozygous for the normal allele (XᴴXᴴ) have children. Which prediction is correct?",
        "options": [
          "All sons will be carriers and the daughters will not be carriers",
          "All daughters will be carriers and no sons will be affected",
          "Half of the sons will be affected and the daughters will not be carriers",
          "Half of the daughters will be carriers and half of the sons affected"
        ],
        "answer": 1
      },
      {
        "q": "In a test cross involving two linked genes, why are recombinant offspring always fewer than parental offspring?",
        "options": [
          "Crossing over mostly happens between sister chromatids, not non-sisters",
          "Recombinant gametes are less likely to take part in fertilisation",
          "A chiasma forms between the two loci in only some meioses",
          "Recombinant offspring are less likely to survive long enough to be counted"
        ],
        "answer": 2
      },
      {
        "q": "A test cross of a double heterozygote gives 430 grey long, 420 black vestigial, 76 grey vestigial and 74 black long flies. The first two are the parental classes. What is the recombination frequency?",
        "options": [
          "7.5%",
          "15%",
          "85%",
          "50%"
        ],
        "answer": 1
      },
      {
        "q": "A chi squared test on a monohybrid cross with two phenotype classes gives χ² = 2.10. The critical value at p = 0.05 is 3.84. What should be concluded?",
        "options": [
          "The difference is not significant, which proves the expected ratio is correct",
          "The difference is significant, so the results do not fit the expected ratio",
          "The value is below the critical value, so the genes must be linked together",
          "The difference is not significant, so the results fit the expected ratio"
        ],
        "answer": 3
      },
      {
        "q": "A dihybrid cross gives 480 offspring and a 9 : 3 : 3 : 1 ratio is expected. How many offspring are expected to show both recessive phenotypes?",
        "options": [
          "270",
          "90",
          "120",
          "30"
        ],
        "answer": 3
      },
      {
        "q": "In a population in Hardy–Weinberg equilibrium, 9% of individuals show a recessive phenotype. What is the frequency of the dominant allele?",
        "options": [
          "0.49",
          "0.91",
          "0.70",
          "0.30"
        ],
        "answer": 2
      },
      {
        "q": "A recessive condition affects 1 in 10 000 people in a population in Hardy–Weinberg equilibrium. What proportion of the population are carriers?",
        "options": [
          "0.9801",
          "0.0198",
          "0.0100",
          "0.0099"
        ],
        "answer": 1
      },
      {
        "q": "A population of birds in a stable environment undergoes stabilising selection for body mass over many generations. What is the expected effect on the distribution?",
        "options": [
          "The mean stays about the same and the standard deviation decreases",
          "The mean moves to a higher value and the standard deviation is unchanged",
          "The distribution splits into two peaks and the range becomes larger",
          "The mean stays about the same and the standard deviation increases"
        ],
        "answer": 0
      },
      {
        "q": "An environment offers only very hard and very soft seeds, and birds with intermediate beaks feed poorly on both. Which type of selection is likely, and with what effect?",
        "options": [
          "Disruptive selection, reducing the spread of beak sizes about the mean",
          "Disruptive selection, giving a bimodal distribution of beak size",
          "Stabilising selection, giving two separate peaks in the distribution of beak size",
          "Stabilising selection, narrowing the distribution of beak size about the mean"
        ],
        "answer": 1
      },
      {
        "q": "Hunting reduces a seal population to a few dozen animals, which later recover to many thousands. Why does the recovered population have low genetic diversity?",
        "options": [
          "The survivors carried only a chance sample of the original alleles",
          "Rapid growth in numbers caused many alleles to be lost through mutation",
          "Hunters deliberately selected against seals that carried rare alleles",
          "A large population cannot hold as many different alleles as a small one"
        ],
        "answer": 0
      },
      {
        "q": "Five birds from a large mainland population colonise an isolated island. An allele that is rare on the mainland becomes common on the island. What is the best explanation?",
        "options": [
          "Gene flow from the mainland keeps adding copies of the allele to the island",
          "The island environment caused the allele to arise by mutation in many birds",
          "The allele must give a strong selective advantage on the island",
          "By chance, the allele was common among the founding birds"
        ],
        "answer": 3
      },
      {
        "q": "Why does genetic drift have a greater effect in a small population than in a large one?",
        "options": [
          "Mutations occur at a much higher rate in small populations of animals",
          "The alleles passed on are a smaller random sample of the gene pool",
          "Selection pressures are always stronger on the members of small populations",
          "Small populations always contain more alleles of each gene than large ones"
        ],
        "answer": 1
      }
    ],
    "red": [
      {
        "q": "A monohybrid cross is expected to give a 3 : 1 ratio. Of 400 offspring, 290 show the dominant and 110 the recessive phenotype. The critical value at p = 0.05 for 1 degree of freedom is 3.84. Which conclusion is correct?",
        "options": [
          "χ² ≈ 13.3, so the difference is significant and a 3 : 1 ratio is rejected",
          "χ² ≈ 1.33, so the difference is significant and a 3 : 1 ratio is rejected",
          "χ² ≈ 1.33, so the difference is not significant and a 3 : 1 ratio is supported",
          "χ² ≈ 0.33, so the difference is not significant but more categories are needed"
        ],
        "answer": 2
      },
      {
        "q": "Which observation in a pedigree rules out X-linked recessive inheritance of a condition?",
        "options": [
          "An affected son has an affected mother",
          "An unaffected daughter has an affected father",
          "An affected daughter has an unaffected father",
          "An affected son has two unaffected parents"
        ],
        "answer": 2
      },
      {
        "q": "A test cross of GL/gl female Drosophila with gl/gl males gives 965 grey long, 944 black vestigial, 206 grey vestigial and 185 black long flies. χ² against a 1 : 1 : 1 : 1 ratio is about 1003 (critical value 7.82). Which is the best evaluation?",
        "options": [
          "The genes assort independently, because all four phenotypes are present",
          "The difference is not significant, so the 1 : 1 : 1 : 1 ratio is supported",
          "The genes are completely linked, because the recombinants are the smaller classes",
          "The genes are very likely linked, and crossing over gave the two small classes"
        ],
        "answer": 3
      },
      {
        "q": "Genotype counts at one locus in samples of 1000: year 1, AA 360, Aa 480, aa 160; year 15, AA 250, Aa 500, aa 250. What do the data show?",
        "options": [
          "The frequency of a rose from 0.4 to 0.5, so the gene pool changed over time",
          "The frequency of a rose from 0.16 to 0.25, so the gene pool changed over time",
          "Each sample fits p², 2pq and q², so no evolution happened between the samples",
          "The frequency of a stayed at 0.4, so the population was in equilibrium over time"
        ],
        "answer": 0
      },
      {
        "q": "For a gene with a dominant and a recessive allele, why can the frequency of the dominant allele not be found by dividing the number of individuals with the dominant phenotype by the population size?",
        "options": [
          "The dominant allele is always rarer than the recessive allele in a population",
          "Dominant-phenotype individuals may be AA or Aa, carrying two or one copies",
          "Dominant-phenotype individuals are always AA, so each carries two copies",
          "The dominant phenotype depends on the environment, so it cannot be counted"
        ],
        "answer": 1
      },
      {
        "q": "A population of plants undergoes disruptive selection for flowering time. Which further change would most likely lead to speciation?",
        "options": [
          "A mutation produces a new allele that gives an intermediate flowering time",
          "Early and late flowerers pollinate mainly within their own group",
          "The population becomes much larger, so genetic drift has less effect on it",
          "Intermediate plants increase in number, so gene flow between extremes rises"
        ],
        "answer": 1
      },
      {
        "q": "In a small population, an allele that gives a slight survival advantage is lost within a few generations. What is the best explanation?",
        "options": [
          "Stabilising selection removes every new allele that appears in a small population",
          "Genetic drift outweighed selection, so the allele was lost by chance",
          "The allele mutated back to its original form in every individual carrying it",
          "Selection acted against the allele because advantageous alleles are recessive"
        ],
        "answer": 1
      },
      {
        "q": "A woman's father had haemophilia and her mother is homozygous for the normal allele. She has a child with an unaffected man. What is the probability that the child is a son with haemophilia?",
        "options": [
          "0.5",
          "0",
          "0.125",
          "0.25"
        ],
        "answer": 3
      },
      {
        "q": "Two linked genes have a recombination frequency of 17%. In a test cross of GL/gl × gl/gl, what percentage of offspring is expected to be grey-bodied with vestigial wings?",
        "options": [
          "8.5%",
          "25%",
          "41.5%",
          "17%"
        ],
        "answer": 0
      },
      {
        "q": "A characteristic is measured before and after a period of selection. Before: mean 20 mm, standard deviation 3.1 mm. After: mean 20 mm, standard deviation 1.9 mm. Which conclusion is best supported?",
        "options": [
          "Stabilising selection has reduced variation about an unchanged mean",
          "Genetic drift has shifted the mean towards a smaller value over time",
          "Disruptive selection has increased variation about an unchanged mean",
          "Selection has had no effect, because the mean value has not changed"
        ],
        "answer": 0
      }
    ]
  },
  "9": {
    "name": "Control Systems",
    "green": [
      {
        "q": "Which statement best describes homeostasis?",
        "options": [
          "Keeping internal conditions in a dynamic equilibrium, varying slightly around a set point",
          "Altering internal conditions so that they always match the conditions outside the body",
          "Holding each internal variable at one exact fixed value so that it can never change at all",
          "Responding to changes outside the body only by moving the whole organism away from them"
        ],
        "answer": 0
      },
      {
        "q": "Which of these is an example of positive feedback?",
        "options": [
          "Less ADH being released from the posterior pituitary after a large volume of water is drunk",
          "Oxytocin release making uterine contractions stronger during childbirth",
          "Impulses in the vagus nerve slowing the heart when blood pressure rises",
          "Skin arterioles dilating when the core body temperature starts to rise"
        ],
        "answer": 1
      },
      {
        "q": "Which of these is normally absent from the glomerular filtrate of a healthy person?",
        "options": [
          "Urea",
          "Glucose",
          "Sodium and chloride ions",
          "Plasma proteins"
        ],
        "answer": 3
      },
      {
        "q": "When adrenaline binds to its receptor on a liver cell, which molecule acts as the second messenger?",
        "options": [
          "Cyclic AMP",
          "Protein kinase A",
          "Glycogen",
          "Adenylyl cyclase"
        ],
        "answer": 0
      },
      {
        "q": "Which plant growth substance, made in the apical bud, suppresses the growth of lateral buds?",
        "options": [
          "Gibberellin",
          "Phytochrome",
          "Auxin",
          "Cytokinin"
        ],
        "answer": 2
      },
      {
        "q": "Which form of phytochrome absorbs far-red light, and what is its absorption peak?",
        "options": [
          "Pr, with its absorption peak at about 730 nm",
          "Pr, with a peak at about 660 nm",
          "Pfr, with a peak at about 660 nm",
          "Pfr, with a peak at about 730 nm"
        ],
        "answer": 3
      },
      {
        "q": "Which region of the brain controls balance and the coordination of movement?",
        "options": [
          "Hypothalamus",
          "Medulla oblongata",
          "Cerebellum",
          "Cerebrum"
        ],
        "answer": 2
      },
      {
        "q": "What does the white matter of the spinal cord consist of?",
        "options": [
          "Myelinated axons running in tracts up and down the cord",
          "Synapses between sensory, relay and motor neurones",
          "Cerebrospinal fluid that fills the central canal",
          "Cell bodies of motor neurones and relay neurones, with their dendrites"
        ],
        "answer": 0
      },
      {
        "q": "In which region of the kidney are the glomeruli and Bowman's capsules found?",
        "options": [
          "Ureter",
          "Medulla",
          "Pelvis",
          "Cortex"
        ],
        "answer": 3
      },
      {
        "q": "What does one cycle of the sodium–potassium pump in an axon membrane move?",
        "options": [
          "3 K⁺ ions out and 2 Na⁺ ions in",
          "2 Na⁺ ions out and 3 K⁺ ions in, using one ATP",
          "3 Na⁺ ions out and 2 K⁺ ions in",
          "3 Na⁺ ions in and 2 K⁺ ions out"
        ],
        "answer": 2
      },
      {
        "q": "What are the short uncovered gaps between Schwann cells along a myelinated axon called?",
        "options": [
          "Synaptic clefts",
          "Motor end plates",
          "Nodes of Ranvier",
          "Dorsal root ganglia"
        ],
        "answer": 2
      },
      {
        "q": "Entry of which ion into the synaptic knob causes vesicles to release their transmitter?",
        "options": [
          "Cl⁻",
          "Ca²⁺",
          "Na⁺",
          "K⁺"
        ],
        "answer": 1
      },
      {
        "q": "Which enzyme in the synaptic cleft hydrolyses acetylcholine?",
        "options": [
          "Adenylyl cyclase",
          "Acetylcholinesterase",
          "Amylase",
          "Protein kinase A"
        ],
        "answer": 1
      },
      {
        "q": "How does lidocaine act as a local anaesthetic?",
        "options": [
          "It inhibits the enzyme that breaks down ACh in the synaptic cleft",
          "It binds tightly to acetylcholine receptors so ACh cannot bind",
          "It binds to acetylcholine receptors and opens their channels",
          "It blocks voltage-gated Na⁺ channels in neurone membranes"
        ],
        "answer": 3
      },
      {
        "q": "What is the light-sensitive pigment in rod cells?",
        "options": [
          "Iodopsin",
          "Rhodopsin",
          "Haemoglobin",
          "Phytochrome"
        ],
        "answer": 1
      },
      {
        "q": "Which describes the fovea of the human retina?",
        "options": [
          "Rods and cones are present in roughly equal numbers",
          "There are no photoreceptors, as the optic nerve leaves here",
          "Cones are densely packed and there are no rods",
          "Rods are densely packed and there are no cones"
        ],
        "answer": 2
      },
      {
        "q": "Which transmitter is released at the sinoatrial node by the vagus nerve?",
        "options": [
          "Glutamate",
          "Acetylcholine",
          "Adrenaline",
          "Noradrenaline"
        ],
        "answer": 1
      },
      {
        "q": "Where are the baroreceptors that detect changes in blood pressure?",
        "options": [
          "In the walls of the aortic arch and the carotid sinuses",
          "In the hypothalamus, alongside the osmoreceptors",
          "In the wall of the right atrium, next to the sinoatrial node",
          "In the cardiac centre of the medulla oblongata"
        ],
        "answer": 0
      },
      {
        "q": "Where are the osmoreceptors that monitor the concentration of the blood plasma?",
        "options": [
          "Posterior pituitary gland",
          "Medulla oblongata",
          "Collecting ducts of the kidney",
          "Hypothalamus"
        ],
        "answer": 3
      },
      {
        "q": "Which statement describes an ectotherm?",
        "options": [
          "It relies mainly on heat from its surroundings to warm its body",
          "It keeps warm mainly by shivering and by raising its hairs",
          "It keeps a constant body temperature whatever the temperature of its surroundings",
          "It releases most of its body heat from its own respiration"
        ],
        "answer": 0
      }
    ],
    "amber": [
      {
        "q": "A person drinks a large volume of water quickly. Which sequence of events follows?",
        "options": [
          "Osmoreceptors more stimulated; more ADH released; collecting ducts more permeable; small volume of concentrated urine",
          "Osmoreceptors less stimulated; less ADH released; collecting ducts less permeable; large volume of dilute urine",
          "Osmoreceptors less stimulated; more ADH released; collecting ducts less permeable; large volume of dilute urine",
          "Osmoreceptors less stimulated; less ADH released; collecting ducts more permeable; small volume of dilute urine"
        ],
        "answer": 1
      },
      {
        "q": "Why does adrenaline need a receptor in the plasma membrane of its target cells?",
        "options": [
          "It must bind to DNA in the nucleus, and the receptor carries it through the membrane",
          "It is a steroid made from cholesterol, so it is far too large to diffuse through the membrane",
          "It is polar and water-soluble, so it cannot cross the hydrophobic core of the bilayer",
          "It is broken down by enzymes in the tissue fluid as soon as it enters the cytoplasm"
        ],
        "answer": 2
      },
      {
        "q": "A response to oestrogen takes hours to appear, whereas a response to adrenaline takes seconds. Which explains this?",
        "options": [
          "Oestrogen has to be converted into cyclic AMP inside the cell before it has any effect",
          "Oestrogen is carried slowly in the blood because it must first bind to the surface of red blood cells",
          "Oestrogen changes gene transcription, so new proteins must be made before the cell responds",
          "Oestrogen receptors are found only on cells that are a long way from the ovaries"
        ],
        "answer": 2
      },
      {
        "q": "The apical bud of a shoot is cut off and auxin paste is put on the cut stump. What happens to the lateral buds?",
        "options": [
          "They grow, because auxin in the paste stimulates cell division in the buds",
          "They stay dormant, because auxin from the paste still suppresses them",
          "They grow, because the main source of cytokinin in the shoot has been removed with the apex",
          "They stay dormant, because the paste stops cytokinin moving up in the phloem"
        ],
        "answer": 1
      },
      {
        "q": "A short-day plant is kept on long nights, but each night is interrupted by a brief flash of red light. What is the outcome?",
        "options": [
          "It does not flower, because the flash converts Pfr to Pr, which inhibits flowering",
          "It flowers, because the total number of hours of darkness is almost unchanged",
          "It does not flower, because the flash converts Pr to Pfr, which inhibits flowering",
          "It flowers, because the red flash converts Pfr back to Pr, and Pr is the form that promotes flowering"
        ],
        "answer": 2
      },
      {
        "q": "On a hot day, which change in the skin increases the rate of heat loss?",
        "options": [
          "Arterioles supplying surface capillaries dilate, so more blood flows near the surface",
          "Arterioles supplying surface capillaries constrict, so that the warm blood is held near the surface",
          "Capillaries move closer to the surface of the skin so that they radiate more heat",
          "Hair erector muscles contract, so the hairs stand up and release the trapped air"
        ],
        "answer": 0
      },
      {
        "q": "In Core Practical 14, why are the embryos removed from the cereal grains before the half-grains are placed on starch agar?",
        "options": [
          "So that the grains cannot respire and use up the starch contained in the agar",
          "So that the only gibberellin acting on the aleurone layer is the gibberellin supplied",
          "Because the embryo would absorb the iodine solution and so hide any clear zone that formed",
          "So that the grains cannot take up any water from the agar by osmosis"
        ],
        "answer": 1
      },
      {
        "q": "In a starch agar assay, clear zone A has a diameter of 10 mm and clear zone B has a diameter of 5 mm. How many times larger is the area of A than the area of B?",
        "options": [
          "4 times",
          "2 times",
          "8 times",
          "10 times"
        ],
        "answer": 0
      },
      {
        "q": "Two recording electrodes on an axon are 45 mm apart. An action potential takes 1.5 ms to travel between them. What is the conduction speed?",
        "options": [
          "30 m s⁻¹",
          "0.03 m s⁻¹",
          "300 m s⁻¹",
          "3 m s⁻¹"
        ],
        "answer": 0
      },
      {
        "q": "Why does an action potential travel faster along a myelinated axon than along a non-myelinated axon of the same diameter?",
        "options": [
          "The myelin itself conducts the impulse along the axon much faster than the membrane can",
          "Depolarisation happens only at the nodes, so local currents pass from node to node",
          "Myelin contains more voltage-gated Na⁺ channels than the bare axon membrane",
          "Myelin removes the refractory period, so action potentials follow more closely"
        ],
        "answer": 1
      },
      {
        "q": "A sensory neurone is given a stronger stimulus than before. How do its action potentials change?",
        "options": [
          "They are larger and have a longer refractory period",
          "They are larger but are produced at the same frequency",
          "They are the same size but are produced more frequently",
          "They are the same size but travel faster along the axon"
        ],
        "answer": 2
      },
      {
        "q": "A drug opens Cl⁻ channels in a postsynaptic membrane. What is its likely effect?",
        "options": [
          "It stops Ca²⁺ entering the synaptic knob, so no transmitter is released",
          "It depolarises the postsynaptic membrane to well above +40 mV",
          "It produces EPSPs, so the neurone is more likely to reach threshold",
          "It produces IPSPs, so the neurone is less likely to reach threshold"
        ],
        "answer": 3
      },
      {
        "q": "One presynaptic neurone fires several impulses in quick succession, and an action potential is then produced in the postsynaptic neurone. What is this an example of?",
        "options": [
          "Temporal summation",
          "Spatial summation",
          "Saltatory conduction",
          "Retinal convergence"
        ],
        "answer": 0
      },
      {
        "q": "Why does nicotine keep postsynaptic neurones stimulated for longer than acetylcholine does?",
        "options": [
          "It blocks ACh receptors, so acetylcholine builds up in the synaptic cleft and is not removed",
          "It binds to and opens ACh receptors but is not broken down by acetylcholinesterase",
          "It is taken back into the synaptic knob and then released over and over again",
          "It blocks voltage-gated Na⁺ channels, so the membrane cannot repolarise"
        ],
        "answer": 1
      },
      {
        "q": "What is the effect of cobra venom toxin at a neuromuscular junction?",
        "options": [
          "ACh is released continuously, so the muscle contracts more strongly than normal",
          "Na⁺ channels in the motor axon are blocked, so no impulses reach the neuromuscular junction at all",
          "ACh cannot be broken down, so the muscle stays contracted in a continuous spasm",
          "ACh cannot bind, so the muscle membrane is not depolarised and the muscle is paralysed"
        ],
        "answer": 3
      },
      {
        "q": "Why do rods give greater sensitivity in dim light than cones do?",
        "options": [
          "Each rod has its own bipolar neurone, so every signal reaches the brain separately",
          "Rods contain three different pigments, so together they absorb a much wider range of wavelengths",
          "Rods depolarise in light whereas cones hyperpolarise, so rods release more transmitter",
          "Several rods share one bipolar neurone, so their small effects summate to reach threshold"
        ],
        "answer": 3
      },
      {
        "q": "What happens in a rod cell when light is absorbed?",
        "options": [
          "Na⁺ channels close, the rod hyperpolarises and it releases less glutamate",
          "Na⁺ channels close, the rod depolarises and it releases more glutamate",
          "Na⁺ channels open, the rod depolarises and it releases more glutamate",
          "Na⁺ channels open, the rod hyperpolarises and it releases less glutamate"
        ],
        "answer": 0
      },
      {
        "q": "One cardiac cycle lasts 0.8 s. What is the heart rate?",
        "options": [
          "48 beats min⁻¹",
          "80 beats min⁻¹",
          "75 beats min⁻¹",
          "125 beats min⁻¹"
        ],
        "answer": 2
      },
      {
        "q": "During exercise the CO₂ concentration of the blood rises. Which pathway increases heart rate?",
        "options": [
          "Baroreceptors → cardiac centre in hypothalamus → vagus nerve → acetylcholine at SAN",
          "Chemoreceptors → cardiac centre in cerebellum → sympathetic nerve → adrenaline at SAN",
          "Chemoreceptors → cardiac centre in medulla → vagus nerve → acetylcholine at SAN",
          "Chemoreceptors → cardiac centre in medulla → sympathetic nerve → noradrenaline at SAN"
        ],
        "answer": 3
      },
      {
        "q": "Where is urea made, and from what?",
        "options": [
          "In the liver, from glucose released by the breakdown of stored glycogen",
          "In the kidney, from ammonia released by the deamination of excess amino acids",
          "In the kidney, from plasma proteins filtered out of the blood in the glomerulus",
          "In the liver, from ammonia released by the deamination of excess amino acids"
        ],
        "answer": 3
      }
    ],
    "red": [
      {
        "q": "Kangaroo rats have a much thicker medulla, relative to kidney size, than humans. Which explains why they can produce more concentrated urine?",
        "options": [
          "Longer loops build a steeper solute gradient, so more water leaves the collecting ducts by osmosis",
          "Longer loops have a descending limb that actively pumps water out into the medulla tissue",
          "Longer loops reabsorb more urea back into the blood, so the urine holds more salt and far less water",
          "A thicker medulla holds more glomeruli, so more water is both filtered and then reabsorbed"
        ],
        "answer": 0
      },
      {
        "q": "A person forms 125 cm³ of glomerular filtrate and 1.0 cm³ of urine per minute. What percentage of the filtered volume is reabsorbed?",
        "options": [
          "99.2%",
          "0.8%",
          "98.8%",
          "92.0%"
        ],
        "answer": 0
      },
      {
        "q": "Urea has the same concentration in the blood plasma and the glomerular filtrate, but is far more concentrated in urine. What is the best explanation?",
        "options": [
          "Urea is made from amino acids by the cells lining the proximal tubule as the filtrate flows past them",
          "Urea is too large to be filtered, so it enters the tubule only at the collecting duct",
          "Most of the water is reabsorbed but little urea is, so the urea ends up in a smaller volume",
          "The ascending limb pumps urea into the filtrate in exchange for Na⁺ and Cl⁻ ions"
        ],
        "answer": 2
      },
      {
        "q": "The filtrate of a person with very high blood glucose contains more glucose than the proximal tubule co-transporters can carry. What is the most likely result?",
        "options": [
          "Less water is filtered at the glomerulus, because glucose raises the water potential of blood",
          "Glucose stays in the filtrate, lowering its water potential, so less water is reabsorbed",
          "The extra glucose is taken back in the loop of Henle instead, so none reaches the urine",
          "All the glucose is still reabsorbed, because it simply follows water out by osmosis"
        ],
        "answer": 1
      },
      {
        "q": "In one plant, lateral buds stay dormant when intact, grow when the apex is removed, stay dormant when the apex is replaced by auxin paste, and grow when cytokinin is applied to them with the apex intact. Which conclusion do these results best support?",
        "options": [
          "Cytokinin is made in the apex, and it is cytokinin rather than auxin that keeps the lateral buds dormant",
          "Auxin stimulates the lateral buds, but it needs cytokinin before it can have any effect",
          "Removing the apex stops cytokinin from the roots reaching the lateral buds in the xylem",
          "Auxin from the apex inhibits the lateral buds, and cytokinin can overcome that inhibition"
        ],
        "answer": 3
      },
      {
        "q": "A toxin holds voltage-gated Na⁺ channels permanently open. What is its most likely effect on an axon?",
        "options": [
          "Each action potential becomes larger, because more Na⁺ enters every time",
          "The membrane stays depolarised, so no further action potentials can be produced",
          "The resting potential becomes more negative, so threshold can never be reached",
          "Impulses travel faster, because threshold is reached earlier in each region"
        ],
        "answer": 1
      },
      {
        "q": "A drug inhibits acetylcholinesterase. What is its most likely effect at a cholinergic synapse?",
        "options": [
          "ACh stays in the cleft and keeps binding, so the postsynaptic membrane stays depolarised",
          "ACh is taken back up more quickly, so fewer postsynaptic potentials are produced",
          "ACh receptors are blocked, so ligand-gated Na⁺ channels in the membrane cannot open",
          "ACh cannot be released from the vesicles in the synaptic knob, so the postsynaptic membrane stays at rest"
        ],
        "answer": 0
      },
      {
        "q": "After a heart transplant, the nerves to the new heart are cut. The heart rate still rises during exercise, but more slowly than before. Which is the best explanation?",
        "options": [
          "The vagus nerve regrows within hours and now releases noradrenaline at the SAN",
          "Adrenaline from the adrenal medulla reaches the SAN in the blood, which is slower than nerves",
          "Baroreceptors in the new heart send impulses straight to the SAN without the medulla",
          "The cerebellum takes over control of the SAN, sending impulses down the spinal cord to the new heart"
        ],
        "answer": 1
      },
      {
        "q": "A mouse and a lizard of the same mass are kept at 10 °C. The mouse eats far more food per day. Which explains this?",
        "options": [
          "The mouse must replace water lost by sweating, and that water comes from its food",
          "The lizard absorbs its food more efficiently because its enzymes work best at 10 °C",
          "The lizard releases more heat from respiration, so it needs to store less food as fat",
          "The mouse uses much of its food energy to release heat by metabolism and keep warm"
        ],
        "answer": 3
      },
      {
        "q": "Why does control of heart rate by two antagonistic nerves give better control than a single nerve could?",
        "options": [
          "Both nerves release noradrenaline at the SAN, so their effects add together",
          "Each nerve is able to start the heartbeat by itself if the sinoatrial node stops working properly",
          "The rate can be actively raised or lowered, giving rapid, finely graded control both ways",
          "One nerve controls the rate of the atria and the other controls the ventricles"
        ],
        "answer": 2
      }
    ]
  },
  "10": {
    "name": "Ecosystems",
    "green": [
      {
        "q": "What is meant by the term ecosystem?",
        "options": [
          "The community of an area together with its abiotic conditions and all the interactions between them",
          "All the populations of every species that live and interact with one another in the same area",
          "All the individuals of one species that live in the same area at the same time and can interbreed",
          "The place where an organism lives, described by both its physical and its biological conditions"
        ],
        "answer": 0
      },
      {
        "q": "What is meant by a trophic level?",
        "options": [
          "The total dry mass of all the organisms that feed at one position in a food web",
          "The feeding position of an organism, counted in energy-transfer steps from the producers",
          "The rate at which the producers in one area fix energy by photosynthesis each year",
          "The number of different species that feed on one particular producer in a habitat"
        ],
        "answer": 1
      },
      {
        "q": "Which type of ecological pyramid can never be inverted?",
        "options": [
          "A pyramid of fresh biomass",
          "A pyramid of numbers",
          "A pyramid of dry biomass",
          "A pyramid of energy"
        ],
        "answer": 3
      },
      {
        "q": "Which sampling device gives the most objective measure of plant cover in low, dense grassland?",
        "options": [
          "A point quadrat",
          "A line transect",
          "A 1 m × 1 m frame quadrat",
          "A gridded quadrat estimated by eye"
        ],
        "answer": 0
      },
      {
        "q": "What do the letters of the ACFOR scale stand for?",
        "options": [
          "Abundant, Clumped, Frequent, Occasional, Random",
          "Abundant, Common, Frequent, Occasional, Rare",
          "Abundant, Common, Few, Overlapping, Rare",
          "Absent, Common, Few, Occasional, Rare"
        ],
        "answer": 1
      },
      {
        "q": "Which technique records the abundance of species as well as their position along an environmental gradient?",
        "options": [
          "Random quadrat placement",
          "A belt transect",
          "A pitfall trap",
          "A line transect"
        ],
        "answer": 1
      },
      {
        "q": "Which statement defines gross primary productivity (GPP)?",
        "options": [
          "The total energy in the sunlight that falls on each square metre of the ecosystem every year",
          "The rate at which energy is stored in new producer biomass after respiration is subtracted",
          "The rate at which producers convert light energy into chemical energy by photosynthesis",
          "The rate at which energy is transferred from the producers to all of the primary consumers"
        ],
        "answer": 2
      },
      {
        "q": "Which equation links net primary productivity (NPP), gross primary productivity (GPP) and producer respiration (R)?",
        "options": [
          "NPP = GPP − R",
          "NPP = GPP + R",
          "NPP = R − GPP",
          "NPP = GPP × R"
        ],
        "answer": 0
      },
      {
        "q": "Which process is carried out by Nitrosomonas?",
        "options": [
          "Conversion of nitrate ions to nitrogen gas",
          "Oxidation of nitrite ions to nitrate ions",
          "Reduction of nitrogen gas to ammonium ions",
          "Oxidation of ammonium ions to nitrite ions"
        ],
        "answer": 3
      },
      {
        "q": "Which bacterium fixes nitrogen in the root nodules of legumes such as clover?",
        "options": [
          "Pseudomonas",
          "Rhizobium",
          "Nitrobacter",
          "Nitrosomonas"
        ],
        "answer": 1
      },
      {
        "q": "What is meant by succession?",
        "options": [
          "The one-way movement of energy from each trophic level to the level above it",
          "The maximum population size of a species that an environment can support long term",
          "The directional change in the species composition of a community over time",
          "The arrival and establishment of a species in an area where it was not found before"
        ],
        "answer": 2
      },
      {
        "q": "Which organisms are typical pioneer species on newly exposed bare rock?",
        "options": [
          "Birch trees",
          "Lichens",
          "Oak trees",
          "Shrubs such as hawthorn"
        ],
        "answer": 1
      },
      {
        "q": "What is a plagioclimax?",
        "options": [
          "A community that develops on the soil left behind after a fire or after trees are felled",
          "The first community to colonise bare rock, made up mainly of lichens and small mosses",
          "A climax community whose make-up is set mainly by the temperature and rainfall of a region",
          "A stable community kept by human activity, such as grazing, before the natural climax"
        ],
        "answer": 3
      },
      {
        "q": "What is meant by the carrying capacity of an environment?",
        "options": [
          "The maximum population size of a species that the environment can support",
          "The population size at which births first exceed deaths after colonisation",
          "The total number of different species that can live together in the habitat",
          "The fastest rate at which a population can grow when resources are unlimited"
        ],
        "answer": 0
      },
      {
        "q": "Which of these is a density-independent factor affecting population size?",
        "options": [
          "The spread of a viral disease",
          "Predation by a hawk",
          "A severe frost",
          "Intraspecific competition for food"
        ],
        "answer": 2
      },
      {
        "q": "What does the CITES treaty control?",
        "options": [
          "The destruction of natural habitats inside national parks",
          "Emissions of greenhouse gases from power stations and industry",
          "The size of fish catches in international waters each year",
          "International trade in wild animals, plants and their products"
        ],
        "answer": 3
      },
      {
        "q": "What is the control on trade for a species listed in Appendix I of CITES?",
        "options": [
          "Trade needs certificates from the listing country",
          "Trade is unrestricted but has to be recorded",
          "International commercial trade is banned",
          "Trade is allowed with an export permit alone"
        ],
        "answer": 2
      },
      {
        "q": "What is peer review?",
        "options": [
          "Checking of a paper by independent experts in the same field before it is published",
          "Repeating an experiment exactly to check that its results can be reproduced by others",
          "Presenting new findings to other scientists at a meeting for them to question and discuss",
          "Combining many published studies into one consensus report for governments to consider"
        ],
        "answer": 0
      },
      {
        "q": "Which statistical test is used to look for a correlation between two variables measured on the same samples?",
        "options": [
          "Student's t-test",
          "A comparison of the ranges",
          "Spearman's rank correlation",
          "The chi-squared test"
        ],
        "answer": 2
      },
      {
        "q": "How do saprobionts obtain nutrients from dead organic matter?",
        "options": [
          "They fix its nitrogen into ammonium ions using nitrogenase",
          "They engulf it by phagocytosis and digest it inside vacuoles",
          "They break it into smaller pieces without digesting any of it",
          "They secrete enzymes onto it and absorb the soluble products"
        ],
        "answer": 3
      }
    ],
    "amber": [
      {
        "q": "A fox eats both blackberries and rabbits. Which trophic levels does the fox occupy?",
        "options": [
          "Producer and primary consumer at once",
          "Secondary consumer and tertiary consumer",
          "Primary consumer and secondary consumer",
          "Primary consumer only, as it eats plants"
        ],
        "answer": 2
      },
      {
        "q": "A single oak tree supports thousands of caterpillars, which are eaten by tens of birds. Which statement about the pyramids for this food chain is correct?",
        "options": [
          "The pyramid of dry biomass is inverted because the caterpillars outweigh the oak",
          "The pyramid of numbers is distorted because it ignores the size of the oak",
          "The pyramid of numbers is upright because producers always outnumber consumers",
          "The pyramid of energy is inverted because the oak stores energy in wood"
        ],
        "answer": 1
      },
      {
        "q": "Why is dry mass, rather than fresh mass, used to construct pyramids of biomass?",
        "options": [
          "Fresh mass cannot be measured accurately enough using a top-pan balance",
          "Drying the samples means that no organisms need to be killed at all",
          "Drying the samples measures the energy content of the tissues directly",
          "Water content varies between organisms and would distort the comparison"
        ],
        "answer": 3
      },
      {
        "q": "A student wants to estimate the population size of ground beetles in a wood. Which method is most suitable?",
        "options": [
          "Pitfall traps with mark-release-recapture",
          "Percentage cover recorded in gridded quadrats",
          "Point quadrats placed at random coordinates",
          "A line transect recording beetles on the tape"
        ],
        "answer": 0
      },
      {
        "q": "Which method is most suitable for measuring the abundance of a grass in a lawn, where individual plants cannot be told apart?",
        "options": [
          "Percentage cover using a gridded or point quadrat",
          "Frequency of the grass along one line transect",
          "Mark-release-recapture of the grass plants",
          "Individual counts of plants in each frame quadrat"
        ],
        "answer": 0
      },
      {
        "q": "A student wants to show how the plant species change from the edge of a pond on to dry land. Which sampling approach is most appropriate?",
        "options": [
          "Quadrats placed at random coordinates on a grid",
          "Pitfall traps set at the pond edge and on dry land",
          "A single large quadrat placed at the pond margin",
          "Quadrats placed at regular intervals along a tape"
        ],
        "answer": 3
      },
      {
        "q": "60 woodlice are marked and released. Later, 45 are caught, of which 9 are marked. What is the estimated population size?",
        "options": [
          "2700",
          "12",
          "540",
          "300"
        ],
        "answer": 3
      },
      {
        "q": "A mean of 4.5 daisies was found per 0.5 m × 0.5 m quadrat. The lawn has an area of 200 m². What is the estimated number of daisies on the lawn?",
        "options": [
          "3600",
          "1800",
          "225",
          "900"
        ],
        "answer": 0
      },
      {
        "q": "Using D = N(N − 1) ÷ Σn(n − 1), what is the index of diversity for a sample with four species of 10 individuals each?",
        "options": [
          "4.33",
          "1.17",
          "4.00",
          "0.23"
        ],
        "answer": 0
      },
      {
        "q": "A student measured the lengths of 15 leaves from a plant in shade and 15 from the same species in full sun. Which test should be used to compare the two samples?",
        "options": [
          "An index of diversity",
          "Spearman's rank correlation coefficient",
          "The chi-squared test",
          "Student's t-test"
        ],
        "answer": 3
      },
      {
        "q": "In a grassland, GPP is 45 000 kJ m⁻² yr⁻¹ and producer respiration releases 27 000 kJ m⁻² yr⁻¹. Primary consumers gain 1620 kJ m⁻² yr⁻¹ as new biomass. What is the efficiency of transfer from NPP to primary consumers?",
        "options": [
          "10.0%",
          "3.6%",
          "9.0%",
          "6.0%"
        ],
        "answer": 2
      },
      {
        "q": "Why do herbivores usually lose a larger proportion of their food energy in faeces than carnivores do?",
        "options": [
          "Herbivores excrete more urea in faeces because plants are rich in protein",
          "Cellulose and lignin in plants are hard to digest, so more is egested",
          "Herbivores respire more slowly, so more energy remains in their faeces",
          "Plant cells have no energy stored in them until they have been digested"
        ],
        "answer": 1
      },
      {
        "q": "Why is the efficiency of energy transfer to mammals usually lower than to fish?",
        "options": [
          "Fish gain energy directly from the heat of the water that surrounds them",
          "Mammals egest all of their food, while fish absorb almost all of theirs",
          "Fish digest their food less completely, so they absorb more energy from it",
          "Mammals release more energy in respiration to keep warm, lost as heat"
        ],
        "answer": 3
      },
      {
        "q": "A field becomes waterlogged for several weeks. What is the most likely effect on the nitrogen available to crops?",
        "options": [
          "It rises, as nitrifying bacteria work fastest without any oxygen",
          "It falls, as denitrifying bacteria convert nitrate to nitrogen gas",
          "It rises, as waterlogged soil speeds up nitrogen fixation by Rhizobium",
          "It is unchanged, as decomposers are not affected by oxygen supply"
        ],
        "answer": 1
      },
      {
        "q": "Why is secondary succession usually faster than primary succession?",
        "options": [
          "Pioneer species grow faster on bare rock than on soil",
          "The climax community is always smaller and simpler",
          "Soil, seeds, roots and spores are already present",
          "There is no competition between species at the start"
        ],
        "answer": 2
      },
      {
        "q": "Sheep grazing is stopped on an area of chalk downland. What is most likely to happen over the following decades?",
        "options": [
          "Shrubs and then trees establish as succession resumes",
          "The soil erodes back to bare rock and lichens return",
          "The grassland stays the same as it is already a climax",
          "Grass diversity rises as the grassland becomes the climax"
        ],
        "answer": 0
      },
      {
        "q": "Two species of Paramecium grow well alone, but when grown together one species dies out. What best explains this?",
        "options": [
          "Intraspecific competition within the surviving species",
          "Interspecific competition for the same resources",
          "A density-independent change in abiotic conditions",
          "Predation of one species by the other species"
        ],
        "answer": 1
      },
      {
        "q": "In many predator–prey cycles, the peak in predator numbers comes after the peak in prey numbers. Why?",
        "options": [
          "Predators always reproduce more slowly than the plants that prey eat",
          "Prey numbers fall first because they run out of space in the habitat",
          "Predators breed more only once plentiful prey have raised their survival",
          "Predator numbers depend only on abiotic factors such as temperature"
        ],
        "answer": 2
      },
      {
        "q": "How does increasing the minimum mesh size of fishing nets help to conserve a fish stock?",
        "options": [
          "Adult breeding fish escape, so fewer young fish are caught",
          "Young fish escape, survive to breed and replenish the stock",
          "Fewer boats can fish, so the total fishing effort is lower",
          "Fish are caught only outside the breeding season each year"
        ],
        "answer": 1
      },
      {
        "q": "Ice cores show a pre-industrial carbon dioxide concentration of about 280 ppm. What is the percentage increase to a present-day value of 420 ppm?",
        "options": [
          "67%",
          "140%",
          "50%",
          "33%"
        ],
        "answer": 2
      }
    ],
    "red": [
      {
        "q": "Along a transect, a student found rs = 0.82 between light intensity and the percentage cover of a plant (n = 10; critical value at p = 0.05 is 0.648). Which conclusion is valid?",
        "options": [
          "Accept the null hypothesis: rs is higher than the critical value given",
          "Reject the null hypothesis: there is a significant positive correlation",
          "Accept the null hypothesis: the correlation is weaker than a value of 1",
          "Reject the null hypothesis: light intensity is shown to cause the cover"
        ],
        "answer": 1
      },
      {
        "q": "A t-test comparing two samples of 10 gives t = 1.85. The critical value for 18 degrees of freedom at p = 0.05 is 2.10. What should be concluded?",
        "options": [
          "Accept the null hypothesis: the difference is not significant",
          "Reject the null hypothesis: the difference in means is significant",
          "The means differ significantly because t is a positive value",
          "The test is invalid because degrees of freedom should be 20"
        ],
        "answer": 0
      },
      {
        "q": "In a mark-release-recapture study, the paint used made marked woodlice easier for birds to see. What effect would this have on the population estimate?",
        "options": [
          "An underestimate, as more unmarked woodlice are captured",
          "An underestimate, as fewer marked woodlice are recaptured",
          "No effect, as the ratio of marked to unmarked stays fixed",
          "An overestimate, as fewer marked woodlice are recaptured"
        ],
        "answer": 3
      },
      {
        "q": "A student plots the running mean number of species per quadrat against the number of quadrats sampled. The line levels off after 12 quadrats. What does this suggest?",
        "options": [
          "Quadrat size should be increased beyond 12",
          "About 12 quadrats is a sensible minimum sample size",
          "The site contains exactly 12 species in total",
          "Sampling more than 12 quadrats would give a biased result"
        ],
        "answer": 1
      },
      {
        "q": "At certain times, a pyramid of biomass for the open ocean is inverted, with less phytoplankton mass than zooplankton mass. What is the best explanation?",
        "options": [
          "Zooplankton also photosynthesise, so they do not depend on phytoplankton for food",
          "Phytoplankton reproduce so fast that a small standing crop feeds more zooplankton",
          "The phytoplankton contain more water, so their dry mass is overestimated by drying",
          "Energy is gained between the trophic levels, so the zooplankton level grows larger"
        ],
        "answer": 1
      },
      {
        "q": "Ice-core data show that carbon dioxide concentration and temperature have varied together over hundreds of thousands of years. Which statement best evaluates this evidence?",
        "options": [
          "It shows that temperature has had no effect on CO₂ levels",
          "It proves that changes in carbon dioxide cause temperature to change",
          "It supports a causal link only alongside a plausible mechanism",
          "It is not valid because ice cores cannot store any gases"
        ],
        "answer": 2
      },
      {
        "q": "A claim about climate change appears in a peer-reviewed journal, and a conflicting claim appears only on a campaign website. Why is the journal claim considered more valid?",
        "options": [
          "Independent experts checked its methods, analysis and conclusions",
          "Journal papers are written only by government-funded scientists",
          "Journals only publish results that agree with earlier research",
          "Peer reviewers repeated the whole study and proved it is correct"
        ],
        "answer": 0
      },
      {
        "q": "African elephants were moved to CITES Appendix I in 1989. Which is the most important limitation of relying on this listing to protect elephants?",
        "options": [
          "It allows unlimited commercial ivory trade provided permits are issued",
          "It applies only to countries that have no wild elephant populations",
          "It controls only international trade, not habitat loss or local hunting",
          "It bans all scientific research on elephants, so their numbers are not known"
        ],
        "answer": 2
      },
      {
        "q": "A desert and a tropical rainforest receive similar light intensity at midday, but the desert has a far lower NPP. Which explanation is best?",
        "options": [
          "Desert plants respire more than they photosynthesise, so NPP is zero",
          "Desert soils lack decomposers, so plants cannot fix carbon dioxide",
          "Deserts receive more green light, which chlorophyll cannot absorb",
          "Water is limiting, so stomata close and photosynthesis is restricted"
        ],
        "answer": 3
      },
      {
        "q": "Site A has four species with 37, 1, 1 and 1 individuals; site B has four species with 10 individuals each. Using D = N(N − 1) ÷ Σn(n − 1), which conclusion is correct?",
        "options": [
          "B is more diverse (D = 4.33 vs 1.17) as individuals are spread more evenly",
          "A is more diverse (D = 1.17 vs 4.33) as one species dominates the community",
          "The sites are equally diverse, as both have four species and 40 individuals",
          "B is more diverse (D = 4.33 vs 1.17) as B contains more species than site A"
        ],
        "answer": 0
      }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = BIOLOGY_EDEXCEL_B_QUESTIONS;
