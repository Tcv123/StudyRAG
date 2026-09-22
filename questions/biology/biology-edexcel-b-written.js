/*
 * Edexcel B A-Level Biology (Pearson 9BI0) — Written / Short-Answer Question Bank
 * Topics 1–10 of the 9BI0 specification.
 * 10 questions per topic: 4 green + 4 amber + 2 red.
 * Student self-marks against model answer: Full / Partial / Missed
 */

const BIOLOGY_EDEXCEL_B_WRITTEN = {
  "1": {
    "name": "Biological Molecules",
    "green": [
      {
        "q": "State the difference between a monosaccharide, a disaccharide and a polysaccharide, giving one example of each.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• A monosaccharide is a single sugar unit, e.g. glucose, fructose or galactose.\n• A disaccharide is two monosaccharides joined by one glycosidic bond, e.g. maltose, sucrose or lactose.\n• A polysaccharide is many monosaccharides joined by glycosidic bonds, e.g. starch, glycogen or cellulose."
      },
      {
        "q": "State two differences between saturated and unsaturated fatty acids.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Saturated fatty acids have no C=C double bonds in the hydrocarbon chain; unsaturated fatty acids have one or more.\n• Saturated chains are straight and pack closely, so they have higher melting points (usually solid at room temperature); unsaturated chains have kinks, so they are usually liquid."
      },
      {
        "q": "State what is meant by the term gene.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• A sequence of bases on a DNA molecule.\n• That codes for the sequence of amino acids in a polypeptide chain."
      },
      {
        "q": "Name the three components of a DNA nucleotide.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• A phosphate group.\n• The pentose sugar deoxyribose.\n• A nitrogen-containing base: adenine, thymine, cytosine or guanine."
      }
    ],
    "amber": [
      {
        "q": "Explain how the structure of cellulose is related to its function in plant cell walls.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Cellulose is made of β-glucose joined by β-1,4 glycosidic bonds; alternate glucose units are inverted, so the chains are straight and unbranched.\n• Straight chains lie parallel to each other, and –OH groups form many hydrogen bonds between neighbouring chains.\n• Chains group into microfibrils, and microfibrils into fibres.\n• The large number of hydrogen bonds gives high tensile strength, so the wall supports the cell and stops it bursting when turgid."
      },
      {
        "q": "Explain how the induced fit hypothesis accounts for the specificity of enzymes and the lowering of activation energy.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Only a substrate with a shape complementary to the active site can bind, forming an enzyme-substrate complex, so each enzyme is specific.\n• When the substrate binds, the active site changes shape slightly and moulds more closely around it.\n• This puts strain on bonds in the substrate, or holds two substrates close together in the right orientation, lowering the activation energy.\n• The products are released and the active site returns to its original shape, ready to be used again."
      },
      {
        "q": "Explain the roles of the sense strand, the antisense strand and RNA polymerase in transcription.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• At the gene, the hydrogen bonds between the two DNA strands break and the helix unwinds locally.\n• The antisense strand is the template: free RNA nucleotides pair with its exposed bases by complementary base pairing, with U pairing with A.\n• RNA polymerase moves along the template and joins the RNA nucleotides with phosphodiester bonds.\n• The sense strand is not copied; it has the same base sequence as the mRNA, except that it contains T where the mRNA contains U.\n• The completed mRNA detaches and leaves the nucleus through a nuclear pore to a ribosome."
      },
      {
        "q": "Explain why the maximum density of water at 4 °C is important to organisms living in lakes.",
        "marks": 3,
        "tier": "amber",
        "modelAnswer": "• Below 4 °C, hydrogen bonds hold water molecules in an open lattice, so ice is less dense than liquid water and floats.\n• The ice layer insulates the water below, and the densest water (at 4 °C) sinks to the bottom.\n• So the water beneath the ice stays liquid and aquatic organisms can survive the winter."
      }
    ],
    "red": [
      {
        "q": "A student investigated the effect of temperature on amylase. At each temperature, starch and amylase were mixed and a drop was tested with iodine every minute until it no longer turned blue-black. The student used 1/time as the rate. Evaluate this method and suggest improvements.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Strength: the end point (iodine no longer turning blue-black) shows when the starch has been broken down, and 1/time gives a rate in s⁻¹ that can be compared between temperatures.\n• Limitation: testing only every minute gives low resolution, so the end point could be up to a minute out; test at shorter intervals, e.g. every 10–30 seconds.\n• Limitation: the colour change is judged by eye and is subjective; use a colour standard, or measure absorbance with a colorimeter.\n• Limitation: 1/time is an average rate over the whole reaction, not the initial rate; at high temperatures the enzyme may denature during the reaction, so the rate would be underestimated.\n• Control variables must be stated: the same volume and concentration of starch and amylase, a buffer to fix pH, and solutions equilibrated in a water bath before mixing.\n• Repeat each temperature at least three times, calculate means, and use a range of at least five temperatures, with smaller intervals near the optimum."
      },
      {
        "q": "Explain how a single base substitution in the gene for the β-globin chain causes sickle cell anaemia, and explain why some other base substitutions have no effect on a protein.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• In the sense strand, the triplet GAG is changed to GTG, so the mRNA codon changes from GAG to GUG.\n• During translation, the sixth amino acid of the β-chain becomes valine instead of glutamic acid.\n• Glutamic acid has a charged, hydrophilic R group; valine has a non-polar, hydrophobic R group, so a hydrophobic patch forms on the outside of the haemoglobin molecule.\n• When oxygen levels are low, haemoglobin molecules stick together into long insoluble fibres.\n• Red blood cells become rigid and sickle-shaped; they carry less oxygen, block capillaries and are destroyed quickly, causing anaemia.\n• Other substitutions may have no effect because the code is degenerate: the new codon may code for the same amino acid (a silent mutation).\n• A substitution in non-coding DNA, such as an intron, will not change the amino acid sequence.\n• A substitution that swaps an amino acid for one with a similar R group may not change the tertiary structure, so the protein still functions."
      }
    ]
  },
  "2": {
    "name": "Cells, Viruses and Reproduction of Living Things",
    "green": [
      {
        "q": "State three differences between prokaryotic and eukaryotic cells.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Prokaryotic cells have no nucleus (DNA is in a nucleoid); eukaryotic cells have DNA in a nucleus with a nuclear envelope.\n• Prokaryotic cells have 70S ribosomes; eukaryotic cells have 80S ribosomes in the cytoplasm.\n• Prokaryotic cells have no membrane-bound organelles; eukaryotic cells have organelles such as mitochondria, ER and Golgi apparatus.\n(Also accept: prokaryotic DNA is circular and not wound round histones, with plasmids; eukaryotic DNA is linear with histones; prokaryotic walls are peptidoglycan.)"
      },
      {
        "q": "Distinguish between magnification and resolution.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Magnification is how many times larger the image is than the real object (image size ÷ actual size).\n• Resolution is the smallest distance between two points at which they can still be seen as separate; it determines how much detail can be seen."
      },
      {
        "q": "State the type of nucleic acid in λ phage, tobacco mosaic virus and HIV.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• λ phage: double-stranded DNA.\n• Tobacco mosaic virus: single-stranded RNA.\n• HIV: single-stranded RNA; it is a retrovirus that uses reverse transcriptase to make DNA."
      },
      {
        "q": "During double fertilisation, state the ploidy of the zygote and of the endosperm nucleus, and name the nuclei that fuse to form the endosperm nucleus.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Zygote: diploid (2n).\n• Endosperm nucleus: triploid (3n).\n• It forms when one male nucleus fuses with the two polar nuclei."
      }
    ],
    "amber": [
      {
        "q": "Explain why Gram negative bacteria are generally less sensitive to penicillin than Gram positive bacteria.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Penicillin inhibits the enzymes that form the peptide cross-links in peptidoglycan.\n• In a growing cell the wall becomes weak, so water enters by osmosis and the cell bursts.\n• Gram positive bacteria have a thick layer of peptidoglycan exposed on the surface, which penicillin reaches easily.\n• Gram negative bacteria have a thin peptidoglycan layer covered by an outer membrane containing lipopolysaccharide, which acts as a barrier to penicillin."
      },
      {
        "q": "Describe how meiosis produces genetically different gametes.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• Meiosis has two divisions after one round of DNA replication, producing four haploid cells from one diploid cell.\n• In prophase I homologous chromosomes pair to form bivalents; non-sister chromatids cross over at chiasmata and exchange equivalent sections, producing new combinations of alleles.\n• In metaphase I homologous pairs line up on the equator in random orientation, so maternal and paternal chromosomes are assorted independently (2²³ ≈ 8.4 million combinations in humans).\n• In meiosis II, sister chromatids that differ because of crossing over are also assorted independently.\n• So each gamete carries a different combination of alleles; random fertilisation adds further variation."
      },
      {
        "q": "Explain how non-disjunction can lead to a person with Turner's syndrome.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Non-disjunction is the failure of homologous chromosomes (anaphase I) or sister chromatids (anaphase II) to separate in meiosis.\n• If the sex chromosomes fail to separate, a gamete can be produced with no sex chromosome (n − 1).\n• When this gamete is fertilised by a gamete carrying an X chromosome, the zygote has a single X (45,X).\n• This is monosomy; the person is female, usually short, with ovaries that do not develop normally, so usually infertile."
      },
      {
        "q": "Explain how the acrosome reaction and the cortical reaction together make sure that only one sperm fertilises a secondary oocyte.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• When the sperm head binds to the zona pellucida, the acrosome releases protease enzymes by exocytosis.\n• These digest a path through the zona pellucida, so the sperm can reach and fuse with the oocyte membrane.\n• Fusion triggers the cortical granules to release their contents by exocytosis into the space beneath the zona pellucida.\n• The zona pellucida hardens and its sperm receptors are destroyed, so no more sperm can bind or pass through, preventing polyspermy."
      }
    ],
    "red": [
      {
        "q": "Evaluate the ethical implications of using untested drugs during the 2014 Ebola outbreak in West Africa.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• For: Ebola had a very high death rate and there was no licensed drug or vaccine, so the possible benefit of an experimental drug could outweigh the unknown risks.\n• For: patients have the right to decide for themselves (autonomy) if they give informed consent, and data collected during the outbreak may be the only chance to find out whether a drug works.\n• Against: side effects were unknown, so a drug could harm or even kill a patient; without a controlled trial it is hard to tell whether patients survived because of the drug or because of supportive care.\n• Against: truly informed consent is difficult with very ill, frightened patients or where there are language barriers; using a placebo group when many patients die is itself ethically difficult.\n• Against: supplies were very limited, raising questions of fairness over who received them, and they could divert resources from proven measures such as isolation.\n• Judgement: use can be justified if strict conditions are met, such as informed consent, openness about what is known and collection of data, but it should not replace prevention of spread."
      },
      {
        "q": "A student made squashes of an onion root tip and counted cells in three regions.\n0–1 mm from tip: 42 of 300 cells in mitosis\n1–2 mm from tip: 18 of 300 cells in mitosis\n4–5 mm from tip: 3 of 300 cells in mitosis\nCalculate the mitotic index for each region, explain the pattern and suggest how the reliability of the results could be improved.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• Mitotic index = cells in mitosis ÷ total cells counted.\n• 0–1 mm: 42 ÷ 300 = 0.14; 1–2 mm: 18 ÷ 300 = 0.06; 4–5 mm: 3 ÷ 300 = 0.01.\n• The mitotic index is highest nearest the tip and falls with distance from the tip.\n• The meristem is near the tip, where cells are actively dividing by mitosis for growth of the root.\n• Further back, most cells have stopped dividing and are elongating and differentiating, so few are in mitosis.\n• Reliability: count cells in several fields of view and in squashes from several root tips, then calculate a mean.\n• Use roots of the same type and age, grown in the same conditions, and cut each region the same length.\n• Use clear criteria for deciding whether a cell is in mitosis (visible condensed chromosomes) and avoid counting the same cell twice."
      }
    ]
  },
  "3": {
    "name": "Classification and Biodiversity",
    "green": [
      {
        "q": "State the eight taxonomic ranks in order, starting with the largest.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Domain, kingdom, phylum, class.\n• Order, family, genus, species."
      },
      {
        "q": "State two reasons why the definition of a species as organisms that interbreed to produce fertile offspring cannot always be applied.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Many organisms, such as bacteria, reproduce asexually, so interbreeding cannot be tested.\n• Extinct organisms are known only from fossils, so their ability to interbreed cannot be observed."
      },
      {
        "q": "State what is meant by in-situ and ex-situ conservation, giving one example of each.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• In-situ conservation protects a species in its natural habitat, for example in a national park or marine protected area.\n• Ex-situ conservation protects a species away from its natural habitat, for example in a zoo or seed bank."
      },
      {
        "q": "Give the three types of adaptation that suit an organism to its niche, with one example of each.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Anatomical: a structural feature, such as the rolled leaves and sunken stomata of marram grass.\n• Physiological: a process inside the body, such as the very concentrated urine of the kangaroo rat.\n• Behavioural: the way an organism acts, such as desert animals being nocturnal or sheltering in burrows by day."
      }
    ],
    "amber": [
      {
        "q": "Explain how natural selection can lead to the formation of a new species.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• A population becomes reproductively isolated into two groups, either by a geographical barrier (allopatric) or within the same area, for example by polyploidy or a change in breeding time (sympatric), so gene flow stops.\n• Different mutations arise in each group.\n• The groups face different selection pressures, so individuals with different advantageous alleles survive and reproduce in each group.\n• Allele frequencies change independently in each group over many generations; genetic drift adds to this in small populations.\n• Eventually the two groups can no longer interbreed to produce fertile offspring, so they are separate species."
      },
      {
        "q": "Explain how molecular and biochemical evidence supports placing archaea in a separate domain from bacteria.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Ribosomal RNA base sequences of archaea differ from those of bacteria about as much as either differs from eukaryotes.\n• Archaeal membrane lipids have branched chains joined to glycerol by ether bonds, whereas bacterial lipids are unbranched and ester-linked.\n• Archaea lack peptidoglycan in their cell walls and are not inhibited by antibiotics such as streptomycin.\n• Like eukaryotes, many archaea have histones and a more complex RNA polymerase, suggesting archaea and eukaryotes share a more recent common ancestor than either does with bacteria."
      },
      {
        "q": "Two woodland sites were sampled randomly. Site 1 contained species with 14, 9, 4, 2 and 1 individuals. Site 2 contained species with 9, 8, 8 and 5 individuals. Use D = N(N − 1) / Σn(n − 1) to compare the diversity of the two sites.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Both sites: N = 30, so N(N − 1) = 870.\n• Site 1: Σn(n − 1) = 182 + 72 + 12 + 2 + 0 = 268, so D = 870 ÷ 268 = 3.25.\n• Site 2: Σn(n − 1) = 72 + 56 + 56 + 20 = 204, so D = 870 ÷ 204 = 4.26.\n• Site 2 is more diverse even though it has fewer species, because its individuals are spread more evenly between the species; site 1 is dominated by one species."
      },
      {
        "q": "Explain why the development of new antibiotics is described as an evolutionary race with bacteria.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Each antibiotic acts as a selection pressure on a bacterial population.\n• Bacteria reproduce rapidly in huge numbers, so random mutations giving resistance are likely to be present already.\n• Resistant bacteria survive and reproduce while susceptible ones are killed, and resistance genes can also spread between bacteria on plasmids, so the frequency of resistance increases and the antibiotic becomes less effective (for example MRSA).\n• New antibiotics must therefore keep being developed, and each new one in turn selects for resistance to itself."
      }
    ],
    "red": [
      {
        "q": "Evaluate the evidence for replacing the five-kingdom model with the three-domain model, including the role of the scientific community in validating it.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• In the five-kingdom model all prokaryotes were placed in the kingdom Prokaryotae, based mainly on cell structure, since archaea look like bacteria under the microscope.\n• Woese's comparison of ribosomal RNA sequences showed that archaea differ from bacteria about as much as either differs from eukaryotes.\n• Further evidence points the same way: archaea have ether-linked, branched membrane lipids, no peptidoglycan, histones, eukaryote-like RNA polymerase and are unaffected by streptomycin.\n• This suggests three fundamentally different lineages, with archaea and eukaryotes sharing a more recent common ancestor, so one prokaryote kingdom misrepresents relationships.\n• The evidence was published in peer-reviewed journals, debated at conferences and tested by other groups sequencing more genes, so the model became accepted only once independent evidence built up.\n• Overall, the molecular and biochemical evidence strongly supports the three-domain model over the five-kingdom model, although it remains provisional: some genome studies suggest eukaryotes arose from within the archaea, which would mean only two primary domains."
      },
      {
        "q": "Evaluate the use of zoos, seed banks and protected habitats in maintaining biodiversity.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• Zoos run captive breeding programmes that increase the numbers of endangered animals, using studbooks and exchanges to avoid inbreeding.\n• Zoos have reintroduced species to the wild, such as the Arabian oryx, and support education and research.\n• However, captive populations are small with limited genetic diversity, animals may lose skills needed in the wild, and reintroduction fails if the habitat or threat has not been dealt with.\n• Seed banks, such as the Millennium Seed Bank, store seeds dried and at about −20 °C, holding much genetic diversity cheaply in a small space.\n• However, seeds of many tropical trees cannot survive drying and freezing, samples may not represent the whole gene pool, stored seeds do not evolve and viability must be checked regularly.\n• Protected habitats keep species in their natural environment with natural behaviour and interactions, protect whole ecosystems and allow populations to keep evolving.\n• However, reserves are hard to protect from poaching and logging, may be small and fragmented, can conflict with the needs of local people and may become unsuitable through climate change.\n• Overall, the methods are most effective together: ex-situ methods act as a safety net and source of individuals, while in-situ protection ensures there is a habitat to return to."
      }
    ]
  },
  "4": {
    "name": "Exchange and Transport",
    "green": [
      {
        "q": "State three ways in which the alveoli are adapted for efficient gas exchange.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Very large total surface area from hundreds of millions of alveoli.\n• Alveolar and capillary walls are each one flattened cell thick, giving a very short diffusion distance.\n• A dense capillary network, with blood flow and ventilation maintaining steep concentration gradients."
      },
      {
        "q": "State two differences between the apoplastic and symplastic pathways for water movement in a root.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Apoplastic: water moves through cell walls and spaces between cells; symplastic: water moves through the cytoplasm, from cell to cell through plasmodesmata.\n• Apoplastic water does not cross any membrane (and is blocked by the Casparian strip); symplastic water crosses a cell surface membrane by osmosis to enter the first cell."
      },
      {
        "q": "State the function of each of these structures in the heart: atrioventricular valves, semilunar valves, septum.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Atrioventricular valves (tricuspid and bicuspid): prevent backflow of blood from the ventricles into the atria during ventricular systole.\n• Semilunar valves: prevent backflow from the aorta and pulmonary artery into the ventricles during diastole.\n• Septum: separates the left and right sides of the heart, keeping oxygenated and deoxygenated blood apart."
      },
      {
        "q": "State what is meant by water potential, and give the water potential of pure water.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Water potential (ψ) is a measure of the tendency of water to move out of a solution, measured in kPa; water moves from a higher to a lower water potential.\n• Pure water at atmospheric pressure has the highest water potential, 0 kPa."
      }
    ],
    "amber": [
      {
        "q": "Explain why larger multicellular organisms need specialised gas exchange surfaces and a mass transport system.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• As organisms get larger, volume increases faster than surface area, so the surface area to volume ratio falls.\n• The body surface is too small to exchange enough gas for the volume of respiring tissue, especially where metabolic rate is high.\n• Diffusion distances to the inner cells become too great for diffusion to be fast enough.\n• Specialised surfaces give a large area and short diffusion distance, and a mass transport system carries substances by bulk flow between them and the tissues, keeping gradients steep."
      },
      {
        "q": "Describe how the conducting system of the heart coordinates the cardiac cycle.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• The SAN in the wall of the right atrium spontaneously sends out a wave of electrical excitation (the heart is myogenic).\n• The wave spreads across both atria, causing atrial systole.\n• Non-conducting tissue stops it passing directly to the ventricles; the AVN delays it by about 0.1 s so the atria empty first.\n• The excitation passes down the bundle of His in the septum to the apex.\n• Purkinje fibres carry it up the ventricle walls, so the ventricles contract from the apex upwards and push blood into the arteries."
      },
      {
        "q": "In the beetroot practical, discs are kept at different temperatures and the absorbance of the surrounding water is measured. Explain the pattern of results expected between 20 °C and 80 °C.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Absorbance stays fairly low at moderate temperatures, because the membranes remain largely intact and little red pigment leaves the vacuoles.\n• As temperature rises the phospholipids gain kinetic energy, so the bilayer becomes more fluid and leakier.\n• At high temperatures the membrane proteins denature, leaving gaps in the membranes.\n• So much more pigment leaks out into the water, and absorbance rises steeply."
      },
      {
        "q": "Explain how the cohesion-tension model accounts for the transport of water from roots to leaves.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• Water evaporates from the moist walls of mesophyll cells into the air spaces and diffuses out through open stomata (transpiration).\n• Leaf cells replace this water from the xylem, creating tension (negative pressure) at the top of the xylem.\n• Hydrogen bonds hold water molecules together (cohesion), so the xylem contains a continuous column of water.\n• Water also adheres to the lignified xylem walls, and lignin stops the vessels collapsing under tension.\n• The whole column is pulled upwards (transpiration pull), drawing water into the xylem in the roots."
      }
    ],
    "red": [
      {
        "q": "Explain how oxygen passes from mother to fetus across the placenta, and why fetal haemoglobin is replaced by adult haemoglobin after birth.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Maternal and fetal blood do not mix; oxygen diffuses between them across the placenta.\n• Maternal blood has already given up some oxygen, so the pO₂ in the placenta is low.\n• At this low pO₂ maternal haemoglobin dissociates and unloads oxygen.\n• Fetal haemoglobin (two γ chains instead of two β chains) has a higher affinity at the same pO₂, so its curve lies to the left and it loads oxygen.\n• The fetus passes CO₂ to the maternal blood, which shifts the mother's curve further right (Bohr effect) and increases unloading.\n• After birth the baby breathes air, and a lower-affinity haemoglobin is better because it unloads oxygen more readily in the tissues, so fetal haemoglobin is replaced."
      },
      {
        "q": "Compare how insects, bony fish and mammals achieve a large surface area, a short diffusion distance and a steep concentration gradient at their gas exchange surfaces.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• Insects: very many branching tracheoles give a large surface area.\n• Insects: tracheoles reach each respiring cell, so the diffusion distance is short and no blood is needed for oxygen transport.\n• Insects: the gradient is kept by cells using oxygen and, in larger insects, by pumping movements of the abdomen.\n• Fish: many gill filaments covered in lamellae give a large surface area, and the thin lamella epithelium gives a short diffusion distance.\n• Fish: water is pumped over the gills in one direction, and countercurrent flow keeps a gradient along the whole lamella.\n• Mammals: hundreds of millions of alveoli give a very large surface area.\n• Mammals: alveolar and capillary walls are each one cell thick, giving a diffusion distance of less than 1 µm.\n• Mammals: ventilation and blood flow maintain the gradient; unlike insects, both fish and mammals rely on blood to carry oxygen from the exchange surface."
      }
    ]
  },
  "5": {
    "name": "Energy for Biological Processes",
    "green": [
      {
        "q": "State the location of glycolysis, of the link reaction and Krebs cycle, and of oxidative phosphorylation.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Glycolysis takes place in the cytoplasm.\n• The link reaction and Krebs cycle take place in the mitochondrial matrix.\n• Oxidative phosphorylation takes place on the inner mitochondrial membrane (cristae)."
      },
      {
        "q": "State the three products of non-cyclic photophosphorylation.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• ATP, made by chemiosmosis through ATP synthase.\n• Reduced NADP, made when electrons from photosystem I reduce NADP.\n• Oxygen, released by photolysis of water."
      },
      {
        "q": "State how an Rf value is calculated and why it has no units.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Rf = distance moved by the pigment spot ÷ distance moved by the solvent front.\n• It is a ratio of two distances in the same units, so the units cancel."
      },
      {
        "q": "Give two reasons why ATP is suited to being the immediate source of energy for cells.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Its hydrolysis releases energy in small, manageable amounts, in a single quick reaction catalysed by one enzyme.\n• It is small and soluble, so it moves easily to where energy is needed (it can also phosphorylate other molecules, making them more reactive)."
      }
    ],
    "amber": [
      {
        "q": "Explain how anaerobic respiration allows muscles to keep contracting when oxygen is limited, and why this can last only a short time.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Pyruvate accepts hydrogen from reduced NAD and is converted to lactate, regenerating NAD.\n• Glycolysis can therefore continue, making a net two ATP per glucose for contraction.\n• The ATP yield is small, so maximum effort cannot be supported for long.\n• Lactate and hydrogen ions build up and lower the pH, affecting enzymes and causing fatigue."
      },
      {
        "q": "Explain how ATP is synthesised by chemiosmosis in a mitochondrion.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• Electrons from reduced NAD and reduced FAD pass along carriers in the inner mitochondrial membrane.\n• Energy released by the electrons is used to pump protons from the matrix into the intermembrane space.\n• The membrane is impermeable to protons, so a proton gradient builds up.\n• Protons diffuse back into the matrix through ATP synthase.\n• The flow of protons drives ATP synthase to join ADP and Pi to make ATP."
      },
      {
        "q": "The CO₂ concentration supplied to an illuminated alga is suddenly reduced. Explain the changes in the amounts of GP and RuBP.",
        "marks": 3,
        "tier": "amber",
        "modelAnswer": "• Less CO₂ is available to combine with RuBP, so less RuBP is used in fixation by RUBISCO.\n• Less GP is made, while existing GP is still reduced to GALP, so GP falls.\n• RuBP is still regenerated from GALP using ATP, so RuBP rises."
      },
      {
        "q": "Explain why having a variety of photosynthetic pigments is an advantage to a plant.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Each pigment has a different absorption spectrum, so together they absorb a wider range of wavelengths.\n• Accessory pigments pass absorbed energy to chlorophyll a at the reaction centre.\n• More of the available light is used, increasing the rate of photosynthesis, especially in low or filtered light such as shade.\n• Carotenoids also help protect chlorophyll from damage by excess light."
      }
    ],
    "red": [
      {
        "q": "A student placed coloured filters over a lamp and counted oxygen bubbles from pondweed in one minute under each colour. Evaluate this method for investigating the effect of wavelength on the rate of photosynthesis.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Strength: filters give a simple way to change the wavelengths reaching the plant, and the rate under blue and red should exceed green, matching the absorption peaks of chlorophyll.\n• Weakness: filters also change the intensity of light transmitted, so intensity should be measured with a light meter and matched.\n• Weakness: each filter passes a band of wavelengths, not a single wavelength, so results show only broad colours.\n• Weakness: bubbles vary in size, so counting is less precise than collecting gas and measuring its volume.\n• Weakness: one minute per colour is short and there are no repeats; the plant should acclimatise and readings be repeated to calculate a mean.\n• Temperature and CO₂ (sodium hydrogencarbonate concentration) must be kept constant; with these improvements the method would give valid comparisons."
      },
      {
        "q": "Explain how the light-dependent and light-independent stages of photosynthesis are linked, and predict what would happen to the rate of carbon fixation if light intensity fell sharply.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• The light-dependent stage on the thylakoid membranes produces ATP and reduced NADP.\n• These are released into the stroma, where the light-independent stage (Calvin cycle) takes place.\n• Reduced NADP supplies hydrogen and ATP supplies energy to reduce GP to GALP.\n• ATP is also used to regenerate RuBP from GALP.\n• The Calvin cycle returns ADP, Pi and NADP to the thylakoids for reuse, so the two stages depend on each other.\n• If light intensity falls, fewer electrons are excited and less ATP and reduced NADP are made.\n• GP accumulates because it cannot be reduced, and RuBP is not regenerated, so RuBP falls.\n• With less RuBP available, the rate of carbon fixation by RUBISCO falls, because light is now the limiting factor."
      }
    ]
  },
  "6": {
    "name": "Microbiology and Pathogens",
    "green": [
      {
        "q": "State the difference between a bactericidal and a bacteriostatic antibiotic, naming one example of each.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• A bactericidal antibiotic kills bacteria, for example penicillin.\n• A bacteriostatic antibiotic stops bacteria growing and dividing without killing them, for example tetracycline.\n• With a bacteriostatic drug, the immune system (phagocytes) must destroy the bacteria."
      },
      {
        "q": "State three conditions that must be provided when culturing bacteria.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Nutrients and water: a carbon and energy source such as glucose, a nitrogen source such as peptones, and mineral ions.\n• A suitable temperature and pH, because both affect enzyme activity.\n• Oxygen for aerobes (for example by shaking a liquid culture), or its absence for obligate anaerobes."
      },
      {
        "q": "State what is meant by active immunity and by passive immunity.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Active immunity: the person's own immune system responds to an antigen, producing antibodies and memory cells, so it is long-lasting.\n• Passive immunity: ready-made antibodies from another individual are received; it is immediate but short-lived because no memory cells are made."
      },
      {
        "q": "Name the organism that causes stem rust of wheat and state how it is transmitted.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Puccinia graminis, a fungus.\n• Its spores are carried long distances by wind (also by rain splash and on clothing or machinery)."
      }
    ],
    "amber": [
      {
        "q": "Explain why a haemocytometer count of a bacterial culture is often higher than a viable count of the same culture.",
        "marks": 3,
        "tier": "amber",
        "modelAnswer": "• A haemocytometer gives a total count: it counts dead cells as well as living ones.\n• Dilution plating counts only viable cells, because only living cells grow into colonies.\n• Clumps of cells in dilution plating give a single colony, which also lowers the viable count."
      },
      {
        "q": "Explain the role of the scientific community in validating a new method of controlling malaria.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Scientists test the method in large, controlled, ideally randomised trials, for example comparing villages with and without bed nets.\n• Results are published only after peer review by independent experts, and are discussed at conferences.\n• Studies are repeated in other regions to check the results are reproducible, because mosquitoes behave differently in different places.\n• Evidence is combined in systematic reviews used by bodies such as the WHO, and the method is monitored after introduction for resistance and side effects."
      },
      {
        "q": "Explain how antibiotic resistance genes can spread between species of bacteria, and why this makes resistance harder to control.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Resistance genes are often carried on plasmids.\n• Plasmids pass between bacteria, even of different species, by conjugation through a pilus (horizontal gene transfer).\n• One plasmid can carry resistance to several antibiotics, so using any one of those antibiotics selects for all of the resistances.\n• Resistance can therefore appear in a pathogen that has never been exposed to the drug, and bacteria reproduce rapidly, so resistant strains spread quickly."
      },
      {
        "q": "Explain why people can catch influenza repeatedly and why a new vaccine is needed each year.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• The influenza surface antigens, haemagglutinin and neuraminidase, change frequently.\n• Antigenic drift: mutations gradually alter the shape of these antigens.\n• Occasionally antigenic shift occurs, when strains swap genes to give a new combination of antigens, which can cause a pandemic.\n• Memory cells and antibodies from an earlier infection or vaccination are specific to the old antigens and no longer bind the new ones, so a slow primary response occurs and the person becomes ill.\n• A vaccine must therefore be made each year containing antigens of the strains expected to circulate."
      }
    ],
    "red": [
      {
        "q": "Evaluate the use of turbidity measurement, compared with dilution plating, for following the growth of bacteria in Core Practical 12.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Turbidity is fast: a colorimeter reading takes a minute, so samples can be taken at short intervals and many points plotted.\n• The colorimeter is zeroed with sterile broth, and readings are converted to cell numbers using a calibration curve.\n• However, turbidity is a total count: it cannot distinguish live from dead cells, so it overestimates the population, especially in the death phase.\n• Dilution plating gives a viable count, which is what growth rate should be based on.\n• But plating is slow (results after 24–48 hours), needs many plates and more handling (greater contamination risk), and clumped cells give single colonies, so it can underestimate.\n• Conclusion: turbidity is better for following the log phase and calculating k quickly; dilution plating is better when the number of living cells matters, and the two can be used together."
      },
      {
        "q": "Discuss whether vaccination against measles should be made compulsory.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• Measles is extremely infectious (R₀ about 12–18), so about 92–94% of people must be immune for herd immunity; coverage of about 95% is the target.\n• Compulsion could raise coverage above this threshold, so chains of transmission die out.\n• This protects people who cannot be vaccinated, such as babies too young for the vaccine and the immunocompromised, who did not choose to be unprotected.\n• When uptake has fallen (for example MMR uptake in England fell to about 80% after the retracted 1998 paper), measles cases have risen, with costs to health services.\n• Against compulsion: it overrides individual choice and parents' right to decide for their children.\n• The vaccine carries a small risk of rare side effects, which some argue people should be free to refuse.\n• Compulsion may increase distrust and resistance; clear communication of evidence (large studies found no MMR–autism link) may raise uptake without coercion.\n• Judgement: the benefit to vulnerable people through herd immunity is strong, but many countries prefer high voluntary uptake supported by education, with compulsion as a last resort."
      }
    ]
  },
  "7": {
    "name": "Modern Genetics",
    "green": [
      {
        "q": "State what is meant by the genome, and explain why it is not the same as the set of genes.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• The genome is all of the DNA / genetic material in a cell or organism.\n• Most of it does not code for proteins (only about 1–2% in humans); it also includes introns, regulatory sequences such as promoters, genes for non-coding RNA and repeated sequences."
      },
      {
        "q": "State three substances, other than the template DNA, that are added to a PCR reaction, and give the role of each.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Primers: short single-stranded DNA sequences that bind to either end of the target region and give the polymerase a starting point.\n• Taq polymerase: a heat-stable DNA polymerase that joins nucleotides to form the new strands.\n• Free DNA nucleotides (with A, T, C and G): the building blocks of the new strands.\n• (Also accept a buffer containing magnesium ions, which the polymerase needs.)"
      },
      {
        "q": "State what is meant by a restriction endonuclease and by a sticky end.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• A restriction endonuclease is an enzyme that cuts DNA at a specific base sequence (recognition site) by hydrolysing phosphodiester bonds.\n• A sticky end is a short single-stranded overhang left by a staggered cut, which can base pair with a complementary sticky end cut by the same enzyme."
      },
      {
        "q": "State what is meant by epigenetic modification and give two examples.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• A heritable change in gene expression that does not change the base sequence of the DNA.\n• DNA methylation: methyl groups added to cytosine bases, usually silencing the gene.\n• Histone modification, e.g. acetylation, which loosens chromatin and increases transcription (also accept non-coding RNA such as miRNA or Xist)."
      }
    ],
    "amber": [
      {
        "q": "Explain how DNA profiling is used in forensic science, including the role of short tandem repeats (STRs).",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• DNA is extracted from a sample left at the scene, such as blood, saliva or a hair root.\n• STRs are non-coding regions where a short sequence is repeated; the number of repeats at each locus varies greatly between people.\n• The STR regions are amplified by PCR using primers either side of each repeat, then separated by size using gel or capillary electrophoresis to give a profile.\n• The profile is compared with those of suspects or a database: a mismatch excludes a suspect, and a match at many loci has a very small probability of occurring by chance."
      },
      {
        "q": "Explain how alternative splicing allows a single gene to code for more than one protein.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• The whole gene, including introns and exons, is transcribed to form pre-mRNA.\n• In the nucleus, a spliceosome removes the introns and joins the exons together.\n• In alternative splicing, different combinations of exons are kept in the mature mRNA, for example in different tissues.\n• The different mRNAs are translated into polypeptides with different amino acid sequences, so one gene gives several proteins."
      },
      {
        "q": "Compare totipotent, pluripotent and multipotent stem cells, giving an example of where each type is found.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• All three are undifferentiated cells that can divide by mitosis to renew themselves and give rise to specialised cells.\n• Totipotent cells can form any cell type, including the placenta, and one cell can form a whole organism; e.g. the zygote and cells of the first few divisions.\n• Pluripotent cells can form any cell of the body but not the placenta; e.g. cells of the inner cell mass of the blastocyst (embryonic stem cells), and iPS cells.\n• Multipotent cells can form only a limited range of related cell types; e.g. bone marrow stem cells forming blood cells.\n• Potency decreases from totipotent to pluripotent to multipotent as more genes are silenced epigenetically."
      },
      {
        "q": "Explain why knockout mice are a valuable animal model for investigating gene function, and give two limitations of using them.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• A specific gene is made non-functional, so differences in phenotype from wild-type mice show what the gene normally does.\n• Mice are mammals and most human genes have a similar version in mice, so results are relevant to human genes and diseases, e.g. cystic fibrosis or p53 and cancer.\n• They breed quickly with large litters, and inbred strains are almost genetically identical, so differences can be attributed to the knocked-out gene.\n• Limitation: results in mice may not apply to humans, and other genes may compensate for the missing one.\n• Limitation: knocking out a gene needed for early development kills the embryo, and some knockout mice suffer, raising welfare concerns."
      }
    ],
    "red": [
      {
        "q": "Evaluate the use of embryonic stem cells and induced pluripotent stem cells in medicine.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• Embryonic stem cells are pluripotent and can be grown in culture, so they could replace cells lost in conditions such as type 1 diabetes, Parkinson's disease or macular degeneration, and can be used for research and drug testing.\n• Obtaining them destroys the embryo, which some people consider unacceptable because they give the embryo the status of a person; others argue a very early embryo has no nervous system and spare IVF embryos would be discarded anyway.\n• Embryonic stem cells come from another individual, so transplanted cells may be rejected unless immunosuppressants are used.\n• iPS cells are made by introducing genes for transcription factors (Oct4, Sox2, Klf4, c-Myc) into adult cells such as fibroblasts, so no embryo is destroyed and the donor can consent.\n• iPS cells can be made from the patient's own cells, so they are genetically identical and far less likely to be rejected.\n• However, reprogramming is inefficient, c-Myc is an oncogene and retroviral vectors insert at random, so there is a tumour risk; some epigenetic memory of the original cell type may remain.\n• Both cell types carry a risk that undifferentiated cells left in a transplant form tumours, and many treatments are still at the trial stage.\n• Conclusion: iPS cells are less problematic ethically and immunologically, but not risk-free; embryonic stem cells remain useful for research, under licence (HFEA, 14-day limit)."
      },
      {
        "q": "Discuss the reasons for public debate about the widespread use of genetically modified crops, using soya as an example.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Herbicide-tolerant soya carries a bacterial EPSPS gene not inhibited by glyphosate, so weeds can be sprayed without harming the crop, reducing competition and increasing yield.\n• High-oleic soya has FAD2 silenced, giving oil with more monounsaturated fat that oxidises less and needs no hydrogenation, so it contains little trans fat.\n• Heavy use of one herbicide selects for resistant weeds, and pests may evolve resistance to insect-resistant crops.\n• Transgenes might spread to wild relatives or non-GM crops by cross-pollination, with uncertain ecological effects.\n• Patented seed must often be bought each year, concentrating power in a few companies and disadvantaging poorer farmers; monocultures reduce genetic diversity.\n• Some people raise safety or ethical objections, although major scientific reviews have found approved GM foods as safe as conventional foods; the debate mixes evidence-based risks with economic and ethical views."
      }
    ]
  },
  "8": {
    "name": "Origins of Genetic Variation",
    "green": [
      {
        "q": "State two processes in meiosis that produce new combinations of alleles in gametes.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Crossing over in prophase I, where non-sister chromatids of homologous chromosomes exchange sections at chiasmata.\n• Independent assortment, where the random orientation of bivalents at metaphase I gives each gamete a random mix of maternal and paternal chromosomes."
      },
      {
        "q": "State what is meant by the terms dominant, recessive and codominance.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Dominant: an allele whose effect is seen in the phenotype of a heterozygote.\n• Recessive: an allele whose effect is seen only when no dominant allele is present, i.e. in a homozygote.\n• Codominance: both alleles in a heterozygote are expressed in the phenotype, e.g. IᴬIᴮ gives blood group AB."
      },
      {
        "q": "State the two Hardy–Weinberg equations and what p² and q² represent.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• p + q = 1, where p and q are the frequencies of the dominant and recessive alleles.\n• p² + 2pq + q² = 1.\n• p² is the frequency of the homozygous dominant genotype and q² the frequency of the homozygous recessive genotype (2pq is the heterozygotes)."
      },
      {
        "q": "State what is meant by genetic drift and name two events that make its effects larger.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Genetic drift is a change in allele frequencies from one generation to the next that happens by chance, not because an allele gives an advantage.\n• Its effects are larger after a population bottleneck and in a new population formed by the founder effect (both leave a small population)."
      }
    ],
    "amber": [
      {
        "q": "Explain how the chi squared test is used to decide whether the results of a genetic cross fit an expected ratio.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• A null hypothesis is stated: there is no significant difference between the observed and expected numbers.\n• Expected numbers are calculated from the total and the predicted ratio (e.g. 9 : 3 : 3 : 1), and χ² = Σ(O − E)² ÷ E is calculated from raw counts.\n• The degrees of freedom are the number of categories minus 1, and χ² is compared with the critical value at p = 0.05.\n• If χ² is less than the critical value the null hypothesis is accepted and the difference is due to chance; if it is equal to or greater, the difference is significant and another factor, such as linkage, may be acting."
      },
      {
        "q": "A fruit fly heterozygous for two linked genes is test crossed. Explain why the offspring fall into two large classes and two small classes.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• The linked alleles are on the same chromosome, so they tend to pass into gametes together rather than assorting independently.\n• Most gametes carry one of the two unchanged parental chromosomes, giving two large classes of parental offspring in roughly equal numbers.\n• In some meioses a chiasma forms between the two loci, and non-sister chromatids exchange sections, producing recombinant chromatids.\n• Because this crossover happens in only a minority of meioses, the two recombinant classes are small (and roughly equal, as each crossover produces one of each)."
      },
      {
        "q": "A woman whose father had haemophilia has children with an unaffected man. Her mother is homozygous for the normal allele. Explain the probabilities that a child of the couple is an affected son, and that a son of the couple is affected.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• The woman inherited her father's X chromosome, which carries Xʰ, and an Xᴴ from her mother, so she is a carrier, XᴴXʰ.\n• The man is XᴴY; his gametes are Xᴴ and Y, and hers are Xᴴ and Xʰ.\n• Offspring are XᴴXᴴ, XᴴXʰ, XᴴY and XʰY in equal proportions.\n• The probability that any child is an affected son (XʰY) is 1/4.\n• Among sons only (XᴴY or XʰY), the probability of being affected is 1/2, because every son gets the Y from his father and either X from his mother."
      },
      {
        "q": "Explain how a population bottleneck can leave a species with low genetic diversity, even after its numbers have recovered.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• An event such as hunting, disease or a natural disaster kills most of the population, regardless of the alleles individuals carry.\n• The few survivors carry only a chance sample of the original gene pool, so some alleles are lost and others change in frequency.\n• The recovered population is descended from these few survivors, so it inherits their reduced set of alleles.\n• New alleles arise only slowly by mutation, so diversity stays low for many generations, as seen in the northern elephant seal."
      }
    ],
    "red": [
      {
        "q": "Discuss how selection and chance can each change the allele frequencies in a gene pool.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "Award 1 mark per valid point, up to 8:\n\n• Selection is non-random: a selection pressure such as predation or competition means individuals with some phenotypes survive and reproduce more, so their alleles rise in frequency.\n• Stabilising selection favours the mean phenotype and removes alleles for extremes, keeping the mean constant and reducing variation, which maintains continuity in a stable environment.\n• Disruptive selection favours both extremes, producing a bimodal distribution; if the groups become reproductively isolated, their gene pools diverge and speciation may follow.\n• Genetic drift is random: the alleles passed on are a chance sample of the gene pool, so frequencies change without regard to advantage.\n• Drift is strongest in small populations, where it can cause alleles to be lost or fixed and can outweigh weak selection.\n• A population bottleneck leaves a few survivors with a chance sample of alleles, so diversity stays low even after numbers recover.\n• The founder effect gives a new population allele frequencies that differ from the source, e.g. a rare recessive allele becoming common in a small, isolated community.\n• Selection tends to make a population better suited to its environment, whereas drift does not; drift reduces genetic diversity, especially in small populations, and the Hardy–Weinberg equation can be used to detect either kind of change."
      },
      {
        "q": "Evaluate the use of the Hardy–Weinberg equation for monitoring allele frequencies in real populations.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "Award 1 mark per valid point, up to 6:\n\n• The equation gives a baseline: in a population meeting the conditions, allele and genotype frequencies should stay constant.\n• Its conditions are a very large population, random mating, no selection, no mutation and no migration.\n• Real populations rarely meet all of these, so deviations are expected; this is useful, because a change in allele frequency shows the population is evolving.\n• It lets carrier frequencies be estimated from the frequency of affected homozygotes, e.g. cystic fibrosis at about 1 in 2500 gives about 1 in 25 carriers.\n• A limitation is that when the conditions are not met, estimates made from q² alone (such as carrier frequency) may be inaccurate, and the equation does not say which condition is failing.\n• Samples must be large and representative, and where genotypes can be counted directly (codominant alleles or DNA tests) the estimates are more reliable."
      }
    ]
  },
  "9": {
    "name": "Control Systems",
    "green": [
      {
        "q": "Describe the gross structure of a mammalian kidney as seen in a longitudinal section.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• A tough outer capsule surrounds an outer cortex, which contains the glomeruli, Bowman's capsules and convoluted tubules.\n• Inside is the medulla, arranged in cone-shaped renal pyramids, which contains the loops of Henle and collecting ducts.\n• The collecting ducts drain into the pelvis, where urine collects before leaving in the ureter; blood enters in the renal artery and leaves in the renal vein."
      },
      {
        "q": "State what is meant by an endotherm and an ectotherm.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Endotherm: an animal that produces most of its body heat through its own metabolism (respiration), e.g. a mammal or bird.\n• Ectotherm: an animal that relies mainly on heat absorbed from its external environment, e.g. a reptile."
      },
      {
        "q": "State three differences between rod cells and cone cells.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Rods contain rhodopsin; cones contain one of three types of iodopsin, so only cones give colour vision.\n• Several rods synapse with one bipolar neurone (convergence), whereas at the fovea each cone has its own bipolar neurone.\n• Rods are found mainly towards the edges of the retina and are absent from the fovea, whereas cones are concentrated at the fovea; rods are far more numerous."
      },
      {
        "q": "State the role of calcium ions and of acetylcholinesterase at a cholinergic synapse.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• Calcium ions: diffuse into the synaptic knob when it is depolarised and cause vesicles to fuse with the presynaptic membrane, releasing acetylcholine.\n• Acetylcholinesterase: hydrolyses acetylcholine in the cleft into choline and ethanoic acid, so the postsynaptic membrane is not continuously stimulated."
      }
    ],
    "amber": [
      {
        "q": "Explain how the bite of a cobra can cause death by stopping breathing.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Cobra venom contains toxins that bind tightly to acetylcholine receptors on the postsynaptic membrane at neuromuscular junctions.\n• Acetylcholine released from the motor neurone cannot bind to these receptors.\n• The Na⁺ channels in the muscle membrane do not open, so the muscle is not depolarised and cannot contract.\n• If the diaphragm and intercostal muscles are paralysed, ventilation stops and the person dies from lack of oxygen."
      },
      {
        "q": "Explain how the concentration of the blood plasma is brought back to normal after a person eats a salty meal.",
        "marks": 5,
        "tier": "amber",
        "modelAnswer": "• The salt lowers the water potential of the blood; osmoreceptors in the hypothalamus lose water by osmosis and shrink.\n• Neurosecretory cells are stimulated and more ADH is released from the posterior pituitary gland into the blood.\n• ADH binds to receptors on collecting duct cells; vesicles containing aquaporins fuse with the membrane facing the lumen.\n• The collecting duct walls become more permeable to water, so more water is reabsorbed by osmosis into the concentrated medulla and back into the blood, giving a small volume of concentrated urine.\n• As the water potential of the blood returns to normal, the osmoreceptors are stimulated less and ADH secretion falls (negative feedback)."
      },
      {
        "q": "Explain how a rise in blood pressure leads to a decrease in heart rate.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Baroreceptors in the walls of the aortic arch and carotid sinuses are stretched more and send more impulses along sensory neurones.\n• These impulses reach the cardiac centre in the medulla oblongata.\n• The cardiac centre sends more impulses along the parasympathetic (vagus) nerve to the sinoatrial node.\n• Acetylcholine is released at the SAN, slowing its rate of depolarisation, so heart rate falls and blood pressure is lowered."
      },
      {
        "q": "A long-day plant is kept on a long-night cycle and does not flower. When each night is interrupted by a brief flash of red light, it flowers. If the red flash is followed immediately by far-red light, it does not flower. Explain these results.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• In the long nights, Pfr is slowly converted back to Pr and falls to a low level; long-day plants need a high level of Pfr to flower, so they do not flower.\n• The red flash converts Pr to Pfr, raising Pfr so the night acts like a short night and flowering is promoted.\n• Far-red light converts Pfr back to Pr straight away, so Pfr stays low and the effect of the red flash is cancelled.\n• The reversibility by red and far-red light shows that phytochrome is the pigment detecting the length of the dark period."
      }
    ],
    "red": [
      {
        "q": "Explain how the kidney of the kangaroo rat is adapted for life in a dry environment. In your answer, refer to the counter-current multiplier.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Kangaroo rats rarely drink, obtaining water from dry seeds and from metabolic water released in respiration, so they must lose very little water in urine.\n• Their medulla is very thick relative to the size of the kidney, and the loops of Henle are very long.\n• Cells of the long ascending limbs actively pump out large amounts of Na⁺ and Cl⁻ into the medulla; the ascending limb is impermeable to water.\n• Water leaves the descending limb by osmosis, and because the two limbs carry fluid in opposite directions, the effect is multiplied, building an exceptionally steep solute gradient with a very low water potential deep in the medulla.\n• High levels of ADH keep the collecting ducts very permeable to water, so as they pass through this medulla a great deal of water leaves by osmosis and is returned to the blood.\n• The result is a very small volume of urine, several times more concentrated than the most concentrated human urine."
      },
      {
        "q": "Explain how summation of postsynaptic potentials at a synapse determines whether an action potential is produced, and suggest how a drug that mimics acetylcholine but is not broken down would affect this process.",
        "marks": 8,
        "tier": "red",
        "modelAnswer": "• At an excitatory synapse, the transmitter binds to receptors that open Na⁺ channels; Na⁺ enters and produces a small depolarisation, an EPSP.\n• A single EPSP is usually too small to reach the threshold of about −55 mV.\n• In spatial summation, several presynaptic neurones release transmitter onto the same postsynaptic neurone at about the same time, and their EPSPs add together.\n• In temporal summation, one presynaptic neurone fires repeatedly in quick succession, so each new EPSP adds to the last before it dies away.\n• At inhibitory synapses, the transmitter opens channels that let Cl⁻ in or K⁺ out, producing a hyperpolarisation (IPSP) that moves the membrane further from threshold.\n• The postsynaptic neurone integrates all the EPSPs and IPSPs; an action potential is produced only if the overall depolarisation reaches threshold.\n• A drug that mimics acetylcholine would bind to and open ACh receptors, producing EPSPs even without presynaptic impulses, making threshold easier to reach.\n• Because it is not hydrolysed by acetylcholinesterase, the receptors stay open for longer, so EPSPs persist and summate more, and the postsynaptic neurone may fire repeatedly (as happens with nicotine)."
      }
    ]
  },
  "10": {
    "name": "Ecosystems",
    "green": [
      {
        "q": "State what is meant by net primary productivity (NPP) and explain its importance to consumers.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• NPP is the rate at which energy is stored in new producer biomass after the energy released in the producers' own respiration is subtracted (NPP = GPP − R).\n• It is the energy available to primary consumers and decomposers."
      },
      {
        "q": "State two limitations of using the ACFOR scale to record abundance.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• It is semi-quantitative / subjective, so different people may give the same species different categories.\n• The results are hard to compare between studies or to analyse statistically."
      },
      {
        "q": "Name the type of climax community maintained by sheep grazing on chalk downland and explain how grazing maintains it.",
        "marks": 2,
        "tier": "green",
        "modelAnswer": "• A plagioclimax (deflected climax).\n• The sheep eat tree and shrub seedlings, so succession is stopped before woodland develops."
      },
      {
        "q": "State three conditions that must be met for a mark-release-recapture estimate to be valid.",
        "marks": 3,
        "tier": "green",
        "modelAnswer": "• Marking does not harm the animals or make them more visible to predators.\n• Marked animals mix fully with the rest of the population before the second sample.\n• There is no significant birth, death, immigration or emigration between the two samples."
      }
    ],
    "amber": [
      {
        "q": "Explain how energy is transferred from producers to primary consumers, using the terms gross primary productivity and net primary productivity.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Producers convert light energy into chemical energy in organic molecules by photosynthesis; the rate of this is the GPP.\n• Some of this energy is released in the producers' respiration and lost as heat; what remains in new biomass is the NPP (NPP = GPP − R).\n• Primary consumers take in part of the NPP when they eat producers, but some is not eaten, and some eaten material is egested in faeces.\n• Of the energy absorbed, much is released in respiration and lost as heat, and some is lost in urine, so only a small percentage becomes new consumer biomass."
      },
      {
        "q": "A student wants to investigate how the abundance of limpets changes from the low-tide mark to the top of a rocky shore. Explain which sampling techniques the student should use.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• Use a belt transect (quadrats at regular intervals along a tape) from low to high shore, because there is an environmental gradient.\n• Systematic sampling allows changes in abundance to be linked to distance up the shore / exposure time.\n• Limpets are sessile / slow moving and easy to tell apart, so individual counts in each quadrat are suitable.\n• Repeat the transect at several places along the shore to obtain a representative sample, and show the results as a kite diagram."
      },
      {
        "q": "A small number of rabbits are introduced on to an island with no rabbits. Explain the changes in the size of the rabbit population over the following years.",
        "marks": 4,
        "tier": "amber",
        "modelAnswer": "• At first the population grows slowly, since there are only a few breeding individuals.\n• Growth then becomes rapid / exponential, as food and space are plentiful and are not limiting.\n• As the population grows, intraspecific competition for food and space increases, and disease spreads more easily in the dense population.\n• The birth rate falls and death rate rises, so the population levels off and fluctuates around the carrying capacity."
      },
      {
        "q": "Explain why a finding about climate change published in a peer-reviewed journal is considered more valid than one reported only in a newspaper.",
        "marks": 3,
        "tier": "amber",
        "modelAnswer": "• Before publication, independent experts in the same field checked that the methods were valid and the data supported the conclusions.\n• The journal publishes full methods and data, so other scientists can repeat the work and test whether it is reproducible.\n• A newspaper report has not been through this checking and may be simplified, selective or biased."
      }
    ],
    "red": [
      {
        "q": "Evaluate the measures used to conserve fish stocks.",
        "marks": 6,
        "tier": "red",
        "modelAnswer": "• Quotas limit the mass of each species caught to what the stock can replace by reproduction, based on scientific estimates of stock size; however, they may be set too high to protect jobs, and over-quota fish have in the past been discarded dead.\n• Larger minimum mesh sizes and minimum landing sizes allow immature fish to escape and survive to breed, so the stock can recover.\n• Closed seasons and marine protected areas protect breeding and nursery grounds; fish may then spread into surrounding waters.\n• Limiting fishing effort (boats, days at sea, gear) reduces catches but directly reduces fishing income.\n• Fish farming reduces pressure on wild stocks but can cause pollution, spread disease to wild fish and use wild-caught fish as feed.\n• Overall, measures work only with international agreement and enforcement, which is costly, because fish cross national boundaries; a balance with the needs of fishing communities is required."
      },
      {
        "q": "A student measured soil moisture and the percentage cover of a plant in 8 quadrats along a transect. Spearman's rank correlation coefficient was −0.79. The critical value for n = 8 at p = 0.05 is 0.738. The student concluded that high soil moisture prevents the plant from growing. Evaluate this conclusion.",
        "marks": 7,
        "tier": "red",
        "modelAnswer": "• The size of rs (0.79) is greater than the critical value (0.738), so the null hypothesis of no correlation is rejected.\n• There is a significant negative correlation: cover decreases as soil moisture increases, with less than a 5% probability that this is due to chance.\n• However, correlation does not show causation; the student has no evidence of a mechanism.\n• Other abiotic factors, such as light intensity, soil pH or mineral ions, may change along the same transect and could be responsible.\n• Biotic factors, such as competition from species that grow better in wet soil, may also explain the pattern.\n• Only 8 quadrats along one transect were used, and the value is only just above the critical value, so the sample may not be representative; more transects would improve reliability.\n• A single moisture reading per quadrat may not reflect conditions over time; the conclusion is only partly supported, and a controlled experiment would be needed to test cause."
      }
    ]
  }
};
