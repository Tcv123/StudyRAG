/*
 * Edexcel B (Salters-Nuffield) A-Level Biology — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 3-4 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const BIOLOGY_EDEXCEL_B_WRITTEN = {

  'S1': {
    name: 'Lifestyle, Health and Risk',
    green: [
      {
        q: 'State what is meant by the term "cardiovascular disease".',
        marks: 2, tier: 'green',
        modelAnswer: `• A disease of the heart or blood vessels / circulatory system.\n• Examples include coronary heart disease (CHD) and stroke.`
      },
      {
        q: 'State two risk factors for coronary heart disease that are related to lifestyle.',
        marks: 2, tier: 'green',
        modelAnswer: `• Smoking — damages endothelium of arteries and increases blood pressure.\n• High-fat diet / obesity — increases blood cholesterol leading to atherosclerosis.`
      },
      {
        q: 'State the difference between a correlation and a causal relationship.',
        marks: 2, tier: 'green',
        modelAnswer: `• Correlation: two variables change together but one does not necessarily cause the other.\n• Causal relationship: a change in one variable directly produces a change in the other (supported by a biological mechanism).`
      },
      {
        q: 'State two functions of blood plasma in transport.',
        marks: 2, tier: 'green',
        modelAnswer: `• Transports dissolved substances such as glucose, amino acids, hormones, urea, and CO₂ (as hydrogencarbonate ions).\n• Distributes heat around the body to help maintain core temperature.`
      },
    ],
    amber: [
      {
        q: 'Explain how atherosclerosis can lead to a myocardial infarction (heart attack).',
        marks: 4, tier: 'amber',
        modelAnswer: `• Damage to the endothelium triggers an inflammatory response and accumulation of white blood cells, cholesterol, and lipids forming an atheroma.\n• The atheroma narrows the lumen of the coronary artery, reducing blood flow.\n• A fibrous cap may rupture, exposing collagen and triggering platelet aggregation / thrombus formation.\n• The thrombus blocks the coronary artery, cutting off oxygen supply to cardiac muscle, causing tissue death (infarction).`
      },
      {
        q: 'Explain why HDL cholesterol is considered "good" while LDL cholesterol is considered "bad".',
        marks: 3, tier: 'amber',
        modelAnswer: `• LDL transports cholesterol from the liver to the tissues; excess LDL deposits cholesterol in artery walls, contributing to atheroma formation.\n• HDL transports cholesterol from the tissues back to the liver for recycling or excretion.\n• A high HDL:LDL ratio is therefore associated with lower risk of cardiovascular disease.`
      },
      {
        q: 'Describe the structure of an artery and explain how this relates to its function.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Thick muscular wall (smooth muscle and elastic tissue) to withstand and maintain high blood pressure from ventricular contraction.\n• Elastic tissue stretches during systole and recoils during diastole, smoothing blood flow.\n• Narrow lumen relative to wall thickness maintains high pressure.\n• Endothelium is smooth to reduce friction and turbulence in blood flow.`
      },
      {
        q: 'Explain how the structure of water makes it a good transport medium in the blood.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Water is polar, so it dissolves many ionic and polar substances (glucose, amino acids, salts) for transport in plasma.\n• Hydrogen bonds give water a high specific heat capacity, allowing it to buffer temperature changes as blood circulates.\n• Water has relatively high cohesion, helping maintain blood pressure in vessels.`
      },
    ],
    red: [
      {
        q: 'Evaluate the evidence linking diet to cardiovascular disease, considering the limitations of epidemiological studies.',
        marks: 6, tier: 'red',
        modelAnswer: `• Large cohort studies (e.g., Framingham) show a correlation between high saturated fat intake, elevated blood cholesterol, and increased CVD incidence.\n• However, correlations do not prove causation — confounding variables (exercise, genetics, stress) may also contribute.\n• Different populations show variation (e.g., the "French paradox" — relatively low CVD despite high fat intake), suggesting other dietary/lifestyle factors are involved.\n• Intervention studies (reducing fat intake) show reduced CVD risk, supporting a causal link.\n• Self-reported dietary data is unreliable; people underreport unhealthy food intake.\n• Overall, the weight of evidence supports a causal link between high saturated fat/cholesterol and CVD, but individual risk depends on multiple interacting factors.`
      },
      {
        q: 'Discuss the benefits and risks of using statins to reduce blood cholesterol levels in the population.',
        marks: 6, tier: 'red',
        modelAnswer: `• Benefits: statins inhibit HMG-CoA reductase in the liver, reducing cholesterol synthesis; lower LDL cholesterol reduces atheroma formation and CVD risk.\n• Large clinical trials show significant reduction in heart attacks and strokes in high-risk patients.\n• Could be offered to wider population as a preventative measure.\n• Risks: side effects include muscle pain (myopathy), liver damage, and increased risk of type 2 diabetes in some patients.\n• Over-reliance on statins may discourage lifestyle changes (diet, exercise) which address underlying causes.\n• Cost to the NHS of prescribing to large numbers; ethical debate about medicating people who are not yet ill.`
      },
    ],
  },

  'S2': {
    name: 'Genes and Health',
    green: [
      {
        q: 'State the basic structure of an amino acid and name the bond that joins amino acids together.',
        marks: 2, tier: 'green',
        modelAnswer: `• An amino acid has a central carbon atom bonded to an amino group (-NH₂), a carboxyl group (-COOH), a hydrogen atom, and a variable R group.\n• Amino acids are joined by peptide bonds (formed by condensation reactions).`
      },
      {
        q: 'State what is meant by the term "gene mutation".',
        marks: 2, tier: 'green',
        modelAnswer: `• A change in the nucleotide/base sequence of DNA.\n• This may alter the amino acid sequence of the polypeptide produced, potentially changing protein structure and function.`
      },
      {
        q: 'State two features of the genetic code.',
        marks: 2, tier: 'green',
        modelAnswer: `• The code is a triplet code — each codon (sequence of three bases) codes for one amino acid.\n• The code is degenerate — most amino acids are coded for by more than one codon.`
      },
      {
        q: 'State what is meant by "monogenic" inheritance.',
        marks: 2, tier: 'green',
        modelAnswer: `• A characteristic controlled by a single gene (one gene locus).\n• Examples include cystic fibrosis and sickle cell anaemia.`
      },
    ],
    amber: [
      {
        q: 'Explain how the mutation in the CFTR gene leads to the symptoms of cystic fibrosis.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The most common CF mutation (ΔF508) is a deletion of three bases, removing phenylalanine from the CFTR protein.\n• The misfolded protein is degraded and does not reach the cell membrane / the chloride ion channel does not function.\n• Cl⁻ ions cannot be secreted out of epithelial cells, so water does not follow by osmosis.\n• Mucus on epithelial surfaces becomes thick and sticky, blocking airways, pancreatic ducts, and reproductive tracts.`
      },
      {
        q: 'Describe the process of transcription.',
        marks: 4, tier: 'amber',
        modelAnswer: `• RNA polymerase binds to the promoter region and unwinds/unzips the DNA double helix (hydrogen bonds between bases broken).\n• The template (antisense) strand is read 3′ → 5′.\n• Free RNA nucleotides align by complementary base pairing (A-U, T-A, C-G, G-C).\n• RNA polymerase joins nucleotides by phosphodiester bonds, forming a pre-mRNA strand which is processed (splicing) to form mature mRNA.`
      },
      {
        q: 'Explain how the structure of a phospholipid bilayer acts as a barrier to ions.',
        marks: 3, tier: 'amber',
        modelAnswer: `• The interior of the bilayer is made up of hydrophobic fatty acid tails.\n• Ions are charged and hydrophilic, so they cannot pass through the hydrophobic core.\n• Ions can only cross the membrane via specific channel or carrier proteins (e.g., CFTR for Cl⁻).`
      },
      {
        q: 'Explain how gel electrophoresis separates DNA fragments.',
        marks: 4, tier: 'amber',
        modelAnswer: `• DNA fragments are loaded into wells in an agarose gel and an electric field is applied.\n• DNA is negatively charged (phosphate groups), so fragments move towards the positive electrode (anode).\n• Smaller fragments move faster/further through the gel matrix because they experience less resistance.\n• Fragments separate by size, producing a pattern of bands that can be visualised with a stain or UV fluorescence.`
      },
    ],
    red: [
      {
        q: 'Discuss the social and ethical implications of genetic screening for cystic fibrosis carriers in the population.',
        marks: 7, tier: 'red',
        modelAnswer: `• Benefits: carriers can make informed reproductive choices; genetic counselling can prepare families for potential outcomes; early diagnosis enables early treatment.\n• Screening programmes can reduce the incidence of CF in the population over time.\n• Ethical concerns: potential psychological harm from knowing carrier status; pressure on carriers not to have children; reproductive autonomy may be compromised.\n• Insurance discrimination — carriers may face higher premiums or be denied cover.\n• Risk of stigmatisation of carriers or affected individuals.\n• False positives/negatives can cause unnecessary anxiety or false reassurance.\n• Informed consent is essential — individuals must understand the test and its implications before agreeing.`
      },
      {
        q: 'Evaluate the potential of gene therapy for treating cystic fibrosis.',
        marks: 6, tier: 'red',
        modelAnswer: `• Gene therapy aims to insert a functional copy of the CFTR gene into lung epithelial cells.\n• Vectors used include adenoviruses and liposomes — each has advantages and limitations.\n• Liposomes are safer (no immune response) but less efficient at delivering DNA into cells.\n• Viral vectors are more efficient but may trigger immune responses or insert DNA in harmful locations (insertional mutagenesis).\n• Lung epithelial cells are continually replaced, so treatment must be repeated — not a permanent cure.\n• Clinical trials have shown limited and short-lived improvements in lung function so far.\n• Somatic gene therapy is ethically acceptable (only affects the individual), but germline therapy raises ethical issues about altering future generations.`
      },
    ],
  },

  'S3': {
    name: 'Voice of the Genome',
    green: [
      {
        q: 'State what is meant by the term "stem cell".',
        marks: 2, tier: 'green',
        modelAnswer: `• An undifferentiated cell that can divide by mitosis to produce more stem cells (self-renewal).\n• It has the ability to differentiate into specialised cell types.`
      },
      {
        q: 'State two differences between mitosis and meiosis in terms of the daughter cells produced.',
        marks: 2, tier: 'green',
        modelAnswer: `• Mitosis produces two genetically identical (diploid) daughter cells; meiosis produces four genetically different (haploid) daughter cells.\n• Mitosis involves one division; meiosis involves two divisions.`
      },
      {
        q: 'State what is meant by cell differentiation.',
        marks: 2, tier: 'green',
        modelAnswer: `• The process by which a cell becomes specialised for a particular function.\n• Involves the expression of specific genes and the switching off of others, leading to structural and functional changes.`
      },
      {
        q: 'State the meaning of the terms "totipotent" and "pluripotent".',
        marks: 3, tier: 'green',
        modelAnswer: `• Totipotent: a cell that can differentiate into any cell type in the organism, including extraembryonic tissues (e.g., placenta) — e.g., zygote and early embryonic cells.\n• Pluripotent: a cell that can differentiate into almost any cell type in the body but not extraembryonic tissues — e.g., embryonic stem cells from the inner cell mass.`
      },
    ],
    amber: [
      {
        q: 'Describe the stages of mitosis.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Prophase: chromosomes condense and become visible; nuclear envelope breaks down; centrioles move to poles and spindle fibres form.\n• Metaphase: chromosomes line up at the cell equator (metaphase plate); spindle fibres attach to centromeres.\n• Anaphase: centromeres divide; sister chromatids are pulled to opposite poles by shortening spindle fibres.\n• Telophase: chromatids reach the poles and decondense; nuclear envelopes reform around each set; cytokinesis divides the cytoplasm.`
      },
      {
        q: 'Explain how cells become specialised through differential gene expression.',
        marks: 4, tier: 'amber',
        modelAnswer: `• All cells in an organism contain the same DNA/genes (same genome).\n• During differentiation, specific transcription factors activate certain genes and repress others.\n• Only the genes relevant to that cell's function are transcribed into mRNA and translated into proteins.\n• This results in cells with different structures and functions (e.g., a neurone expresses genes for neurotransmitter receptors, while a red blood cell expresses haemoglobin genes).`
      },
      {
        q: 'Describe how meiosis produces genetic variation.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Independent assortment: homologous pairs line up randomly at the metaphase plate in meiosis I, producing 2ⁿ possible combinations of maternal and paternal chromosomes.\n• Crossing over: during prophase I, homologous chromosomes form bivalents and exchange segments of chromatids at chiasmata, producing new allele combinations.\n• Random fertilisation adds further variation as any sperm can fuse with any egg.\n• These mechanisms ensure each gamete (and resulting offspring) is genetically unique.`
      },
      {
        q: 'Explain what is meant by epigenetics and give one example of an epigenetic mechanism.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Epigenetics refers to heritable changes in gene expression that do not involve changes to the DNA base sequence.\n• Example: DNA methylation — addition of methyl groups to cytosine bases in CpG islands in promoter regions suppresses transcription of that gene.\n• These modifications can be influenced by environmental factors and may be passed to daughter cells during mitosis.`
      },
    ],
    red: [
      {
        q: 'Discuss the ethical issues surrounding the use of embryonic stem cells in medical research and treatment.',
        marks: 6, tier: 'red',
        modelAnswer: `• Embryonic stem cells are pluripotent — they can differentiate into almost any cell type, offering potential treatments for conditions like Parkinson's, diabetes, and spinal cord injuries.\n• Obtaining these cells requires destruction of early embryos (blastocysts), which some consider morally equivalent to taking a human life.\n• Religious and philosophical viewpoints differ on when life/personhood begins — at fertilisation, at implantation, or later.\n• Surplus IVF embryos would otherwise be discarded — using them for research could be considered ethical utilisation.\n• Alternative sources (induced pluripotent stem cells — iPSCs) avoid embryo destruction but have different risks (e.g., tumour formation).\n• Strict regulation and ethical oversight are essential; benefits to patients with incurable diseases must be weighed against moral concerns.`
      },
      {
        q: 'Evaluate the evidence that environmental factors can influence phenotype through epigenetic mechanisms.',
        marks: 8, tier: 'red',
        modelAnswer: `• Twin studies: monozygotic twins diverge in phenotype with age despite identical genomes — differences in DNA methylation patterns accumulate due to different environmental exposures.\n• The Dutch Hunger Winter study: children born to mothers who experienced famine showed increased rates of obesity and cardiovascular disease decades later, linked to altered methylation of genes involved in growth and metabolism.\n• Agouti mouse experiments: diet (methyl donors like folic acid) in pregnant mice altered coat colour and obesity in offspring via methylation of the agouti gene — demonstrating direct environmental effect on epigenome.\n• Smoking is associated with hypomethylation of certain oncogenes, increasing cancer risk.\n• Limitations: correlation vs causation is difficult to establish in human studies; epigenetic changes may be reversible, complicating interpretation.\n• It is difficult to separate genetic, epigenetic, and environmental contributions to complex phenotypes.\n• Transgenerational epigenetic inheritance is demonstrated in some organisms but remains debated in humans.\n• Overall, strong evidence supports environmental influence on epigenome, but mechanisms in humans are still being elucidated.`
      },
    ],
  },

  'S4': {
    name: 'Biodiversity and Natural Resources',
    green: [
      {
        q: 'State what is meant by the term "biodiversity".',
        marks: 2, tier: 'green',
        modelAnswer: `• The variety of living organisms in an area / the range of different species, genetic diversity within species, and ecosystem diversity.\n• Can be measured at genetic, species, and ecosystem levels.`
      },
      {
        q: 'State Simpson\'s Diversity Index formula and what a value close to 1 indicates.',
        marks: 2, tier: 'green',
        modelAnswer: `• D = 1 − Σ(n/N)² where n = number of individuals of each species, N = total number of all individuals.\n• A value close to 1 indicates high biodiversity (many species, evenly distributed).`
      },
      {
        q: 'State two ways in which plants can be used sustainably as a resource.',
        marks: 2, tier: 'green',
        modelAnswer: `• Coppicing / rotational harvesting of woodland — trees are cut and allowed to regrow, providing a renewable timber supply without destroying the woodland.\n• Sustainable harvesting of plant-based medicines or fibres (e.g., hemp, willow bark for aspirin precursors) at rates that allow regeneration.`
      },
      {
        q: 'State the hierarchy of taxonomic classification from domain to species.',
        marks: 3, tier: 'green',
        modelAnswer: `• Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species.\n• Organisms are classified into groups based on shared features (morphological, anatomical, biochemical, and molecular).\n• The binomial naming system uses Genus and species (e.g., Homo sapiens).`
      },
    ],
    amber: [
      {
        q: 'Explain how natural selection can lead to the evolution of antibiotic resistance in bacteria.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Random mutations arise in bacterial DNA that confer resistance to an antibiotic (e.g., producing an enzyme that breaks down the antibiotic).\n• When the antibiotic is applied, susceptible bacteria are killed but resistant individuals survive (selection pressure).\n• Resistant bacteria reproduce rapidly with reduced competition, passing the resistance allele to offspring (vertical transmission).\n• Resistance genes can also be transferred between bacteria via plasmids (horizontal gene transfer / conjugation), spreading resistance rapidly through populations.`
      },
      {
        q: 'Describe how a transect and quadrat can be used to investigate the distribution of plant species across a habitat.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A line or belt transect is laid across the habitat (e.g., from shore to inland) to sample along an environmental gradient.\n• Quadrats are placed at regular intervals along the transect (systematic sampling).\n• In each quadrat, species are identified and their percentage cover or frequency is recorded.\n• Data is plotted against distance along the transect to show changes in distribution/abundance related to abiotic factors (e.g., light, soil moisture).`
      },
      {
        q: 'Explain the importance of maintaining biodiversity for sustainability.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Ecosystem stability: diverse ecosystems are more resilient to environmental change because if one species declines, others can fulfil similar ecological roles.\n• Genetic resources: biodiversity provides a gene pool for crop breeding, medicine, and future biotechnology.\n• Ecosystem services: diverse ecosystems provide pollination, water purification, nutrient cycling, and climate regulation that human populations depend on.`
      },
      {
        q: 'Describe the differences between natural and artificial classification systems.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Natural (phylogenetic) classification groups organisms by evolutionary relationships / shared ancestry, reflecting true biological kinship.\n• Artificial classification groups organisms by observable features for convenience (e.g., colour, habitat) but may not reflect evolutionary history.\n• Modern natural classification uses molecular evidence (DNA/protein sequences) as well as morphology to determine phylogeny.`
      },
    ],
    red: [
      {
        q: 'Discuss the arguments for and against the use of plant fibres and starch as alternatives to fossil fuel-based materials.',
        marks: 6, tier: 'red',
        modelAnswer: `• Arguments for: plant-based materials are renewable and can be grown sustainably; they are biodegradable, reducing plastic pollution; growing plants absorbs CO₂, potentially reducing net carbon emissions.\n• Bioplastics from starch can replace petroleum-based plastics for packaging.\n• Plant fibres (hemp, flax) can replace synthetic fibres in textiles and composites.\n• Arguments against: large-scale cultivation requires land, water, and fertiliser — may compete with food production.\n• Monoculture plantations reduce biodiversity; deforestation for biofuel crops increases CO₂ emissions.\n• Processing plant materials still requires energy and chemicals.\n• Current bioplastics often require industrial composting conditions to decompose; they do not break down readily in the environment.\n• Overall: plant-based alternatives are promising but must be assessed using full life-cycle analysis to ensure genuine sustainability benefits.`
      },
      {
        q: 'Evaluate the impact of human activities on global biodiversity and discuss strategies for conservation.',
        marks: 8, tier: 'red',
        modelAnswer: `• Habitat destruction (deforestation, urbanisation, agriculture) is the primary cause of species loss — removes niches and fragments populations.\n• Pollution (pesticides, fertiliser run-off, plastics) degrades habitats and directly harms organisms.\n• Climate change alters habitats faster than many species can adapt or migrate.\n• Overexploitation (overfishing, poaching) reduces populations below sustainable levels.\n• Invasive species outcompete native species, reducing diversity.\n• Conservation strategies: protected areas (national parks, marine reserves) prevent habitat loss; legislation (CITES) restricts trade in endangered species.\n• Seed banks and captive breeding programmes preserve genetic diversity for potential reintroduction.\n• Sustainable management (quotas, FSC-certified forestry) balances human use with conservation.\n• Limitations: enforcement is difficult; conservation conflicts with economic development in many regions; climate change undermines static protected areas.\n• International cooperation and addressing root causes (consumption, inequality) are essential for long-term success.`
      },
    ],
  },

  'S5': {
    name: 'On the Wild Side',
    green: [
      {
        q: 'State the word equation and balanced symbol equation for photosynthesis.',
        marks: 2, tier: 'green',
        modelAnswer: `• Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light energy).\n• Symbol equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂`
      },
      {
        q: 'State where in the chloroplast the light-dependent reactions and light-independent reactions occur.',
        marks: 2, tier: 'green',
        modelAnswer: `• Light-dependent reactions occur on the thylakoid membranes (grana).\n• Light-independent reactions (Calvin cycle) occur in the stroma.`
      },
      {
        q: 'State what is meant by the terms "gross primary productivity" (GPP) and "net primary productivity" (NPP).',
        marks: 3, tier: 'green',
        modelAnswer: `• GPP: the total rate of energy fixed by producers through photosynthesis in a given area per unit time.\n• NPP: the rate of energy storage available for consumers, i.e., GPP minus the energy lost by the producers through respiration (NPP = GPP − R).\n• NPP represents the energy available to the next trophic level.`
      },
      {
        q: 'State two greenhouse gases and their sources.',
        marks: 2, tier: 'green',
        modelAnswer: `• Carbon dioxide (CO₂) — released by combustion of fossil fuels and deforestation.\n• Methane (CH₄) — released by livestock (enteric fermentation), rice paddies, and landfill decomposition.`
      },
    ],
    amber: [
      {
        q: 'Describe the light-dependent reactions of photosynthesis.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Light energy is absorbed by chlorophyll and accessory pigments in photosystems I and II on thylakoid membranes.\n• Light energy excites electrons in PSII, which pass along an electron transport chain (ETC), releasing energy used to pump H⁺ ions into the thylakoid space (chemiosmosis) — ATP is produced via ATP synthase.\n• Water is photolysed (split) to replace electrons in PSII: H₂O → 2H⁺ + 2e⁻ + ½O₂.\n• At PSI, electrons are re-energised and used to reduce NADP⁺ to NADPH (using H⁺ from photolysis).`
      },
      {
        q: 'Explain how energy is transferred through an ecosystem and why transfer between trophic levels is inefficient.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Producers fix light energy into chemical energy (organic molecules) through photosynthesis.\n• Energy passes to consumers when they eat organisms from lower trophic levels.\n• Only ~10% of energy is transferred between trophic levels because energy is lost at each level through: respiration (heat), excretion (urine/urea), egestion (faeces), and parts not eaten.\n• This limits food chains to typically 4-5 trophic levels as insufficient energy remains to support further levels.`
      },
      {
        q: 'Explain how rising atmospheric CO₂ concentration contributes to global warming via the enhanced greenhouse effect.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Short-wave radiation from the Sun passes through the atmosphere and is absorbed by the Earth's surface.\n• The Earth re-radiates longer-wave infrared radiation back towards space.\n• Greenhouse gases (CO₂, CH₄) absorb and re-emit this infrared radiation in all directions, including back towards Earth.\n• Increased concentrations of these gases (from burning fossil fuels, deforestation) trap more infrared radiation, raising global temperatures beyond the natural greenhouse effect.`
      },
      {
        q: 'Describe succession from pioneer community to climax community.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Pioneer species (e.g., lichens, mosses) colonise bare substrate — they are adapted to harsh conditions (drought, low nutrients).\n• Pioneer species modify the environment (e.g., weathering rock, adding organic matter) making it suitable for new species.\n• Each seral stage changes abiotic conditions, allowing new species to out-compete existing ones.\n• Over time, biodiversity and biomass increase, soil deepens, and a climax community is reached — a stable community in equilibrium with the prevailing climate.`
      },
    ],
    red: [
      {
        q: 'Evaluate the evidence for anthropogenic climate change and discuss its potential impact on ecosystems.',
        marks: 8, tier: 'red',
        modelAnswer: `• Evidence: ice core data shows CO₂ concentration correlates with temperature over 800,000 years; current CO₂ levels (~420 ppm) are unprecedented in this record.\n• Global mean temperature has risen ~1.1°C since pre-industrial times, consistent with increased greenhouse gas emissions.\n• Ocean acidification (dissolved CO₂ forming carbonic acid) affects calcifying organisms (corals, molluscs).\n• Impacts on ecosystems: distribution shifts — species move poleward/to higher altitudes; phenological mismatches (e.g., insects emerging before host plants flower).\n• Coral bleaching due to thermal stress; Arctic habitat loss affecting polar bears, seals.\n• Increased frequency of extreme weather events disrupts ecosystems.\n• Some species cannot migrate or adapt fast enough, leading to extinction.\n• Counter-arguments: natural climate cycles exist, but the rate and magnitude of current change far exceeds natural variation.\n• Scientific consensus (IPCC) is that it is "unequivocal" that human activities are the dominant cause.`
      },
      {
        q: 'Discuss the role of the carbon cycle in maintaining atmospheric CO₂ levels and how human activity has disrupted this balance.',
        marks: 6, tier: 'red',
        modelAnswer: `• Natural carbon cycle: CO₂ is removed from atmosphere by photosynthesis and dissolved in oceans; it is returned by respiration, decomposition, and volcanic activity — these fluxes were roughly balanced.\n• Carbon sinks: forests, peat bogs, oceans, and sedimentary rocks store carbon long-term.\n• Human disruption: burning fossil fuels releases carbon stored over millions of years, adding ~9 Gt C/year to the atmosphere.\n• Deforestation reduces photosynthetic removal of CO₂ and releases stored carbon when trees are burned/decomposed.\n• Land use change (draining peatlands) releases stored organic carbon.\n• Oceans absorb ~30% of anthropogenic CO₂ but capacity is limited and warming reduces solubility.\n• The rate of release now exceeds the rate of natural sequestration, causing net accumulation of CO₂ in the atmosphere.`
      },
    ],
  },

  'S6': {
    name: 'Immunity, Infection and Forensics',
    green: [
      {
        q: 'State two differences between a bacterial cell and a virus.',
        marks: 2, tier: 'green',
        modelAnswer: `• Bacteria are cells (have a cell membrane, cytoplasm, ribosomes, and can reproduce independently by binary fission); viruses are non-cellular / acellular (no cytoplasm, no ribosomes, cannot reproduce independently).\n• Viruses consist of nucleic acid (DNA or RNA) surrounded by a protein coat (capsid); bacteria have a cell wall (peptidoglycan), DNA, and all components needed for metabolism.`
      },
      {
        q: 'State what is meant by an "antigen".',
        marks: 2, tier: 'green',
        modelAnswer: `• A molecule (usually a protein or glycoprotein) on the surface of a cell or pathogen.\n• It is recognised as foreign (non-self) by the immune system and triggers an immune response.`
      },
      {
        q: 'State two non-specific (innate) defence mechanisms of the body.',
        marks: 2, tier: 'green',
        modelAnswer: `• Skin — acts as a physical barrier preventing entry of pathogens.\n• Phagocytes (e.g., neutrophils, macrophages) — engulf and digest pathogens by phagocytosis (non-specific).`
      },
      {
        q: 'State what is meant by "time of death" and name one forensic method for estimating it.',
        marks: 2, tier: 'green',
        modelAnswer: `• Time of death: the point at which irreversible cessation of all biological functions occurs.\n• Forensic method: measuring body temperature (algor mortis) — the body cools at a predictable rate after death, allowing estimation of time since death.`
      },
    ],
    amber: [
      {
        q: 'Describe the roles of B lymphocytes and T lymphocytes in the specific immune response.',
        marks: 4, tier: 'amber',
        modelAnswer: `• B lymphocytes: when activated by specific antigens (and T helper cells), they divide and differentiate into plasma cells that secrete large quantities of specific antibodies.\n• Some B cells become memory cells for long-term immunity.\n• T helper cells: release cytokines that activate B cells and cytotoxic T cells.\n• T killer (cytotoxic) cells: recognise and destroy body cells that are infected (displaying foreign antigens on MHC) by releasing perforin/granzymes, causing apoptosis.`
      },
      {
        q: 'Explain how vaccination provides long-term immunity against a specific disease.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A vaccine contains a weakened/inactivated pathogen or antigen that cannot cause disease.\n• The antigens stimulate an immune response — B and T lymphocytes are activated.\n• Clonal expansion produces effector cells (plasma cells producing antibodies) and, crucially, memory cells.\n• On subsequent exposure to the real pathogen, memory cells mount a rapid, stronger secondary immune response — producing antibodies faster and in greater quantity, preventing symptoms.`
      },
      {
        q: 'Describe how forensic entomology (insect succession on a corpse) can be used to estimate time of death.',
        marks: 3, tier: 'amber',
        modelAnswer: `• Different insect species colonise a corpse in a predictable succession depending on the stage of decomposition.\n• Blowflies (Calliphoridae) are typically the first to arrive and lay eggs; the developmental stage of their larvae (instar) can be related to time elapsed since death.\n• The presence/absence of later colonising species (beetles, moths) indicates further progression, helping narrow the post-mortem interval.\n(Temperature, location, and season affect insect activity and must be considered.)`
      },
      {
        q: 'Explain the difference between active and passive immunity.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Active immunity: the individual's own immune system produces antibodies and memory cells in response to antigen exposure (natural: infection; artificial: vaccination).\n• It is long-lasting because memory cells persist.\n• Passive immunity: antibodies are received from an external source (natural: mother to baby via placenta/breast milk; artificial: injection of antibodies/antiserum).\n• It is short-lived because no memory cells are produced — protection lasts only as long as the antibodies survive.`
      },
    ],
    red: [
      {
        q: 'Discuss the challenges of developing vaccines against rapidly evolving pathogens such as influenza and HIV.',
        marks: 6, tier: 'red',
        modelAnswer: `• Influenza: high mutation rate in surface antigens (haemagglutinin, neuraminidase) causes antigenic drift; reassortment between strains causes antigenic shift — both mean the immune system may not recognise new strains.\n• Annual vaccine reformulation is needed based on predicted dominant strains; predictions are sometimes incorrect.\n• HIV: extremely high mutation rate (error-prone reverse transcriptase) generates enormous genetic diversity within a single patient.\n• HIV integrates into host DNA (provirus), hiding from the immune system; it also attacks T helper cells, crippling the immune response.\n• Surface glycoprotein gp120 is heavily glycosylated, masking epitopes from antibodies.\n• No effective vaccine exists despite decades of research — challenges include identifying conserved epitopes and inducing broadly neutralising antibodies.\n• These examples illustrate that traditional vaccination approaches may be insufficient for highly mutable pathogens.`
      },
      {
        q: 'Evaluate the reliability of different forensic techniques for estimating time of death.',
        marks: 6, tier: 'red',
        modelAnswer: `• Body temperature (algor mortis): assumes linear cooling, but rate is affected by body size, clothing, ambient temperature, fever at death — accuracy decreases after 24 hours.\n• Rigor mortis: onset (~2-4 h), full development (~12 h), and resolution (~36 h) are affected by temperature, exercise before death, and muscle mass — provides only a broad estimate.\n• Entomology: can be very accurate for days to weeks post-mortem but requires knowledge of local insect fauna, temperature history, and access to the body.\n• Decomposition stages: useful for longer post-mortem intervals but highly variable depending on environment (temperature, moisture, scavengers).\n• Degree of digestion of stomach contents: unreliable due to variability in gastric emptying rates between individuals.\n• Most reliable results come from combining multiple methods to cross-check and narrow the estimated time of death.\n• All methods provide an estimated range rather than a precise time.`
      },
    ],
  },

  'S7': {
    name: 'Run for Your Life',
    green: [
      {
        q: 'State the word equation for aerobic respiration.',
        marks: 2, tier: 'green',
        modelAnswer: `• Glucose + Oxygen → Carbon dioxide + Water (+ ATP/energy released).\n• Symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O`
      },
      {
        q: 'State where in the cell glycolysis and the Krebs cycle take place.',
        marks: 2, tier: 'green',
        modelAnswer: `• Glycolysis takes place in the cytoplasm.\n• The Krebs cycle takes place in the matrix of the mitochondria.`
      },
      {
        q: 'State what is meant by "anaerobic respiration" and name the product formed in animal muscle.',
        marks: 2, tier: 'green',
        modelAnswer: `• Anaerobic respiration is the release of energy from glucose without the use of oxygen.\n• In animal muscle, the product is lactate (lactic acid).`
      },
      {
        q: 'State two structural features of a muscle fibre (myofibril) visible under an electron microscope.',
        marks: 2, tier: 'green',
        modelAnswer: `• Sarcomeres with alternating light bands (I-bands: thin actin filaments only) and dark bands (A-bands: thick myosin filaments overlapping with actin).\n• Z-lines (boundaries of sarcomeres) and M-lines (centre of sarcomere/H-zone).`
      },
    ],
    amber: [
      {
        q: 'Describe the sliding filament theory of muscle contraction.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A nerve impulse triggers release of Ca²⁺ from the sarcoplasmic reticulum into the sarcoplasm.\n• Ca²⁺ binds to troponin, causing tropomyosin to shift and expose myosin-binding sites on actin.\n• Myosin heads bind to actin forming cross-bridges; ATP hydrolysis causes the power stroke (myosin heads tilt, pulling actin towards the centre of the sarcomere).\n• ATP binds to myosin heads causing detachment; the cycle repeats, shortening the sarcomere (I-bands and H-zone shorten, A-band stays the same).`
      },
      {
        q: 'Explain the role of the electron transport chain and oxidative phosphorylation in ATP production.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Reduced coenzymes (NADH and FADH₂) from glycolysis and the Krebs cycle donate electrons to carriers on the inner mitochondrial membrane.\n• Electrons pass along a series of carriers (redox reactions), releasing energy at each step.\n• This energy is used to pump H⁺ ions from the matrix into the intermembrane space, creating a proton gradient (chemiosmotic gradient).\n• H⁺ ions flow back through ATP synthase (down the gradient), driving the synthesis of ATP from ADP + Pi — this is oxidative phosphorylation. Oxygen is the final electron acceptor, forming water.`
      },
      {
        q: 'Explain how the body regulates heart rate during exercise.',
        marks: 4, tier: 'amber',
        modelAnswer: `• During exercise, increased CO₂ / decreased blood pH is detected by chemoreceptors in the carotid body and aortic body.\n• Impulses are sent to the cardiovascular centre (medulla oblongata).\n• The medulla increases sympathetic nerve impulses via the accelerator nerve to the SAN, increasing heart rate.\n• Adrenaline released from the adrenal glands also binds to receptors on the SAN, further increasing heart rate and force of contraction.\n(After exercise, parasympathetic impulses via the vagus nerve slow the heart rate back to resting levels.)`
      },
      {
        q: 'Describe the role of the Krebs cycle in aerobic respiration.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Acetyl CoA (2C) combines with oxaloacetate (4C) to form citrate (6C).\n• Citrate is progressively decarboxylated and dehydrogenated in a series of reactions, regenerating oxaloacetate.\n• Per turn: 1 ATP is produced (substrate-level phosphorylation), 3 NADH and 1 FADH₂ are produced (carry H to the ETC), and 2 CO₂ are released.\n• The cycle turns twice per glucose molecule (two acetyl CoA from link reaction).`
      },
    ],
    red: [
      {
        q: 'Discuss how different types of muscle fibre are adapted for different athletic activities.',
        marks: 6, tier: 'red',
        modelAnswer: `• Slow-twitch (Type I) fibres: rich in mitochondria and myoglobin; dense capillary network; rely on aerobic respiration; fatigue-resistant; suited to endurance activities (marathon running, cycling).\n• Fast-twitch (Type IIa) fibres: moderately rich in mitochondria; can use aerobic and anaerobic pathways; moderate fatigue resistance; suited to middle-distance events.\n• Fast-twitch (Type IIx) fibres: fewer mitochondria, less myoglobin (pale); large glycogen stores; rely mainly on anaerobic glycolysis; produce high force but fatigue rapidly; suited to sprinting and power events.\n• Genetic factors largely determine fibre-type proportion, but training can modify characteristics (e.g., endurance training increases mitochondrial density in Type IIa fibres).\n• Performance depends on recruitment patterns: low-intensity exercise recruits slow-twitch first; high-intensity recruits fast-twitch.\n• Elite athletes show extreme fibre-type distributions matching their sport.`
      },
      {
        q: 'Evaluate the use of respiratory substrates other than glucose (lipids and proteins) during prolonged exercise.',
        marks: 6, tier: 'red',
        modelAnswer: `• During prolonged exercise, glycogen stores are depleted and the body increasingly uses lipids (fatty acids) as respiratory substrates.\n• Fatty acids yield more ATP per molecule than glucose (higher H:C ratio), making them energy-dense; however, they require more oxygen per unit of ATP produced and cannot be metabolised anaerobically.\n• Fatty acid oxidation (β-oxidation) produces acetyl CoA which enters the Krebs cycle, but the rate of ATP production is slower than from glucose.\n• Proteins are used as a last resort (during starvation or extremely prolonged exercise) — amino acids are deaminated and carbon skeletons enter the Krebs cycle at various points.\n• Using protein is undesirable as it means muscle protein is being broken down (catabolism).\n• The respiratory quotient (RQ) indicates which substrate is being used: RQ = 1.0 for carbohydrates, 0.7 for fats, 0.8 for protein.\n• Training adaptation: endurance-trained athletes more efficiently mobilise and oxidise fatty acids, sparing glycogen and delaying fatigue.`
      },
    ],
  },

  'S8': {
    name: 'Grey Matter',
    green: [
      {
        q: 'State what is meant by a "reflex arc" and list its components in order.',
        marks: 3, tier: 'green',
        modelAnswer: `• A reflex arc is the neural pathway that controls a rapid, involuntary response (reflex) to a stimulus.\n• Components in order: receptor → sensory neurone → relay neurone (in CNS/spinal cord) → motor neurone → effector (muscle or gland).\n• Reflexes are fast because they do not require processing by the brain.`
      },
      {
        q: 'State the function of the myelin sheath.',
        marks: 2, tier: 'green',
        modelAnswer: `• The myelin sheath is an insulating layer of fatty material (Schwann cells in PNS) surrounding the axon.\n• It speeds up nerve impulse transmission by allowing saltatory conduction — the impulse jumps between gaps in the myelin (nodes of Ranvier).`
      },
      {
        q: 'State what is meant by the "resting potential" of a neurone.',
        marks: 2, tier: 'green',
        modelAnswer: `• The resting potential is the electrical potential difference across the membrane of a neurone when it is not transmitting an impulse (typically -70 mV).\n• It is maintained by the Na⁺/K⁺ ATPase pump (3 Na⁺ out, 2 K⁺ in) and selective permeability of the membrane to K⁺.`
      },
      {
        q: 'State two functions of the cerebrum.',
        marks: 2, tier: 'green',
        modelAnswer: `• Higher cognitive functions: conscious thought, reasoning, decision-making, and memory.\n• Voluntary motor control: initiating and coordinating voluntary muscle movements.`
      },
    ],
    amber: [
      {
        q: 'Describe how an action potential is generated and propagated along a myelinated neurone.',
        marks: 4, tier: 'amber',
        modelAnswer: `• At rest, the membrane is polarised (-70 mV). A stimulus causes Na⁺ voltage-gated channels to open at a node of Ranvier — Na⁺ rushes in, depolarising the membrane (to +40 mV).\n• The depolarisation at one node generates local circuits that depolarise the next node of Ranvier (saltatory conduction).\n• After depolarisation, Na⁺ channels close and K⁺ channels open — K⁺ moves out, repolarising the membrane.\n• A refractory period follows (Na⁺ channels cannot reopen), ensuring the impulse only travels in one direction.`
      },
      {
        q: 'Describe synaptic transmission at a cholinergic synapse.',
        marks: 4, tier: 'amber',
        modelAnswer: `• An action potential arrives at the presynaptic knob, causing Ca²⁺ voltage-gated channels to open; Ca²⁺ flows in.\n• Ca²⁺ causes synaptic vesicles containing acetylcholine (ACh) to fuse with the presynaptic membrane and release ACh into the synaptic cleft (exocytosis).\n• ACh diffuses across the cleft and binds to specific receptors on the postsynaptic membrane, opening Na⁺ channels.\n• Na⁺ influx generates an excitatory postsynaptic potential (EPSP); if threshold is reached, an action potential is triggered. ACh is broken down by acetylcholinesterase, and products are reabsorbed.`
      },
      {
        q: 'Explain how the structure of the eye detects light, distinguishing between rod and cone cells.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Rod cells: contain rhodopsin; very sensitive to low light intensity; provide black-and-white vision; many rods converge onto one bipolar cell (summation) giving high sensitivity but low acuity.\n• Cone cells: contain iodopsins (three types: red, green, blue); require higher light intensity; provide colour vision; each cone has its own bipolar cell, giving high visual acuity.\n• When light hits photoreceptors, the pigment isomerises (bleaches), triggering hyperpolarisation of the cell, which alters neurotransmitter release and generates nerve impulses in the optic nerve.\n• Cones are concentrated in the fovea; rods are more abundant in the peripheral retina.`
      },
      {
        q: 'Explain how the brain can be studied using fMRI and what this technique measures.',
        marks: 3, tier: 'amber',
        modelAnswer: `• fMRI (functional magnetic resonance imaging) detects changes in blood oxygenation levels in different brain regions.\n• Active brain regions consume more oxygen, increasing local blood flow — fMRI detects the difference in magnetic properties between oxyhaemoglobin and deoxyhaemoglobin (BOLD signal).\n• This allows mapping of which brain areas are active during specific tasks (e.g., language, vision, movement) without invasive procedures.`
      },
    ],
    red: [
      {
        q: 'Discuss the evidence for brain plasticity (neuroplasticity) and its implications for learning and recovery from injury.',
        marks: 6, tier: 'red',
        modelAnswer: `• Neuroplasticity: the brain's ability to reorganise neural pathways and form new synaptic connections throughout life.\n• Evidence from stroke recovery: patients can regain lost functions as undamaged brain regions take over functions of damaged areas through rehabilitation.\n• London taxi driver study: enlarged posterior hippocampus correlated with spatial navigation experience, demonstrating structural plasticity.\n• Critical periods in development: sensory deprivation during critical periods (e.g., vision in kittens) leads to permanent deficits, showing plasticity has temporal limits.\n• Long-term potentiation (LTP): repeated stimulation of synapses strengthens connections — proposed cellular basis for learning and memory.\n• Implications: targeted rehabilitation can exploit plasticity after brain injury; enriched environments promote neural growth; however, maladaptive plasticity can also occur (e.g., phantom limb pain).\n• Age reduces (but does not eliminate) plasticity — adults can still learn and form new connections, but recovery from injury is typically slower.`
      },
      {
        q: 'Evaluate the use of drugs that affect synaptic transmission in treating neurological and mental health conditions.',
        marks: 8, tier: 'red',
        modelAnswer: `• Many neurological/psychiatric conditions involve imbalances in neurotransmitter activity at synapses.\n• SSRIs (selective serotonin reuptake inhibitors): block reuptake of serotonin from the synaptic cleft, increasing serotonin availability; used to treat depression and anxiety. Evidence: effective for many patients but not all; side effects include nausea, sexual dysfunction; mechanism may be more complex than simple serotonin deficiency.\n• L-DOPA: precursor to dopamine; crosses blood-brain barrier and is converted to dopamine; used to treat Parkinson's disease (dopamine deficiency in basal ganglia). Effective initially but long-term use causes side effects (dyskinesias) and effectiveness decreases.\n• Benzodiazepines: enhance GABA (inhibitory neurotransmitter) binding to receptors, increasing Cl⁻ influx and inhibiting neural activity; used for anxiety. Risk of dependency and tolerance.\n• Ethical issues: over-prescription concerns; use of drugs vs addressing underlying psychological/social causes; side effects vs quality of life.\n• Personalised medicine: genetic variation in drug metabolism (pharmacogenomics) affects individual responses.\n• Limitations: our understanding of brain chemistry is incomplete; many drugs have broad effects rather than targeting specific circuits; placebo effects complicate assessment of efficacy.`
      },
    ],
  },

};
