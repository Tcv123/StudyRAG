/*
 * OCR A GCSE Biology (J247) Gateway — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate.
 */

const BIOLOGY_OCR_A_GCSE_AI_FEEDBACK = {

  /* ─────────────────── B1.1 Cell Structures ─────────────────── */
  'B1.1': [
    {
      q: 'Compare the structures of an animal, a plant and a bacterial cell.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Animal and plant cells are eukaryotic with a true membrane-bound nucleus and other organelles. Both have a plasma membrane, cytoplasm, nucleus, mitochondria and 80S ribosomes. Plant cells additionally have a cellulose cell wall (giving shape and resisting turgor pressure), chloroplasts containing chlorophyll for photosynthesis, and a permanent vacuole filled with cell sap. Animal cells lack these. Bacterial cells are prokaryotic, much smaller (1–5 μm versus 10–100 μm) and simpler. They have a peptidoglycan cell wall, sometimes a slime capsule, and may have flagella for movement and pili for attachment. Their genetic material is a single circular DNA loop in the cytoplasm, plus small extra DNA loops (plasmids). Bacterial ribosomes are smaller (70S). Bacteria have no membrane-bound organelles. The differences reflect different evolutionary origins, but all share fundamental features: DNA, ribosomes and a plasma membrane that supports life.'
    },
    {
      q: 'Compare light microscopes and electron microscopes, including their advantages and limitations.',
      marks: 6, command: 'Compare',
      modelAnswer: 'Light microscopes use visible light focused by glass lenses; magnification up to ×1500 and resolution about 200 nm allow whole cells, nuclei and chloroplasts to be seen. They can examine living cells, are cheap and use coloured stains. Electron microscopes use a beam of electrons focused by electromagnets; resolution down to 0.2 nm and magnification up to ×2 000 000 reveal ribosomes, viruses and other ultrastructure. TEM passes electrons through ultrathin sections to give 2D images of internal structure; SEM bounces electrons off the surface for 3D images. Specimens must be in vacuum, so cannot be alive; preparation can introduce artefacts. Comparison: light microscopes let researchers see living, dynamic processes but cannot resolve fine detail; electron microscopes give vastly more detail but only of dead, prepared specimens. Each is suited to different questions.'
    },
  ],

  /* ─────────────────── B1.2 What Happens in Cells ─────────────────── */
  'B1.2': [
    {
      q: 'Describe how DNA codes for proteins, and explain the consequences of mutations.',
      marks: 9, command: 'Describe',
      modelAnswer: 'DNA is a polymer of nucleotides, each containing a deoxyribose sugar, a phosphate group and one of four bases (A, T, C, G). It forms a double helix held by hydrogen bonds between complementary bases (A–T, C–G). Genes are sections of DNA that code for proteins. The order of bases in a gene determines the order of amino acids in the protein. Bases are read in groups of three (codons); each triplet codes for one amino acid. Protein synthesis happens in two stages: transcription copies the gene into a single-stranded mRNA molecule in the nucleus; translation occurs at ribosomes, where tRNAs bring amino acids matching each codon to build a polypeptide. The polypeptide folds into the protein\'s functional shape. A mutation is a change in the base sequence of DNA. It can be silent (no effect on the amino acid because the genetic code is degenerate), or it may change one amino acid (missense) or insert a premature stop codon (nonsense). A change in amino acid can alter the protein\'s shape and function — the active site of an enzyme may no longer fit its substrate. Mutations cause genetic diseases (cystic fibrosis, sickle cell) and contribute to cancer when they affect genes controlling cell division.'
    },
    {
      q: 'Explain how enzymes work and how their activity is affected by temperature and pH.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Enzymes are biological catalysts — proteins that speed up chemical reactions in cells without being used up. Each has an active site whose shape is complementary to a specific substrate. When the substrate enters, an enzyme-substrate complex forms; the enzyme catalyses the reaction by lowering the activation energy, then releases the products. Enzymes are highly specific. Temperature: rate rises with temperature because molecules collide more often and with more energy, up to an optimum (around 37 °C in human enzymes). Above this, the enzyme begins to denature — bonds holding the active site break, the active site changes shape, and the substrate no longer fits, so rate falls sharply. pH: each enzyme has an optimum pH at which the active site has the correct charge distribution. Pepsin in the stomach works best at pH 2; salivary amylase at pH 7; trypsin in the small intestine at pH 8. Beyond the optimum, the enzyme denatures. Industrial uses (biological detergents, cheese-making) and medical applications (drug action, disease testing) all depend on understanding these effects.'
    },
  ],

  /* ─────────────────── B1.3 Respiration ─────────────────── */
  'B1.3': [
    {
      q: 'Compare aerobic and anaerobic respiration in animals and assess the importance of each.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both release energy from glucose for ATP synthesis. Aerobic respiration uses oxygen and gives a high yield (~30 ATP per glucose). Word equation: glucose + oxygen → carbon dioxide + water. It takes place mainly in the mitochondria. Anaerobic respiration occurs without oxygen. In animal muscle: glucose → lactic acid (+ small amount of ATP); the lactic acid causes muscle fatigue and must be broken down later in the liver (oxygen debt). Anaerobic respiration releases far less energy per glucose (~5%) because glucose is only partly broken down — most chemical energy is locked in lactic acid. During vigorous exercise, muscles cannot get enough oxygen and switch to anaerobic respiration; this allows continued work briefly but causes fatigue. After exercise, oxygen debt is repaid: extra oxygen is needed to clear lactic acid, which is why breathing rate stays high. Aerobic respiration is preferable when oxygen is available because it produces more ATP, completes the breakdown of glucose to inert products (CO₂ and water), and avoids fatiguing lactic acid. Anaerobic respiration is essential for short, intense bursts when O₂ supply is limited.'
    },
    {
      q: 'Discuss the effect of exercise on the body, and explain how the body recovers afterwards.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'During exercise, muscles need more energy. Respiration rate rises, requiring more oxygen and producing more CO₂. Heart rate rises (from ~70 to 150–200 bpm) to pump more blood to muscles; stroke volume also rises, increasing cardiac output. Breathing rate and depth increase to supply more O₂ and remove more CO₂. Vessels in muscles dilate, while those in non-essential tissues constrict, redistributing blood. Body temperature rises; sweating begins to dissipate heat. If exercise is intense, muscles switch to anaerobic respiration, building lactic acid and contributing to fatigue. After exercise, breathing and heart rate stay elevated until oxygen debt is repaid — extra O₂ is needed to break down lactic acid in the liver. Long-term training adapts the body: stronger heart muscle, lower resting heart rate, larger lung capacity, more capillaries in muscle, more mitochondria and increased muscle strength. These changes allow trained individuals to sustain higher work rates with less fatigue and to recover faster.'
    },
  ],

  /* ─────────────────── B1.4 Photosynthesis ─────────────────── */
  'B1.4': [
    {
      q: 'Describe the process of photosynthesis and explain how it is affected by limiting factors.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Photosynthesis is the process by which plants make glucose from CO₂ and water using light energy absorbed by chlorophyll. Word equation: carbon dioxide + water → glucose + oxygen. Symbol: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. It takes place in chloroplasts of leaf cells. Glucose is used in respiration, converted to starch for storage, used to make cellulose for cell walls, or combined with nitrate ions to form amino acids. Rate is affected by limiting factors. Light intensity: rate rises with light up to a saturation point. CO₂ concentration: rate rises with CO₂ until another factor becomes limiting. Temperature: rate rises with temperature up to ~40 °C; beyond this, enzymes denature and rate falls sharply. The factor in shortest supply limits the overall rate. Greenhouse growers maximise yield by raising whichever factor is limiting (supplemental lighting, CO₂ enrichment, heating), which also enables out-of-season production. Almost all life on Earth depends on photosynthesis to provide glucose, oxygen and biomass.'
    },
  ],

  /* ─────────────────── B2.1 Supplying the Cell ─────────────────── */
  'B2.1': [
    {
      q: 'Explain how substances move into and out of cells by diffusion, osmosis and active transport.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Diffusion is the net movement of particles from a region of higher concentration to lower concentration, down a concentration gradient. It is passive — no energy needed. Examples: O₂ entering and CO₂ leaving cells. Osmosis is the net movement of water molecules from a region of higher water potential (more dilute) to lower water potential (more concentrated) across a partially permeable membrane. It is also passive. Plant cells in water gain water and become turgid; in concentrated solution they lose water and become flaccid or plasmolysed. Animal cells in water swell and may burst (lysis) because they have no cell wall. Active transport moves substances against their concentration gradient, from low to high. It uses energy from respiration (ATP) and specific carrier proteins. Examples: uptake of mineral ions by root hair cells from dilute soil solution, absorption of glucose from gut into blood when blood concentration is higher. The three processes work together: passive processes are sustainable but limited to favourable gradients, while active transport enables cells to accumulate solutes and maintain stable internal conditions.'
    },
  ],

  /* ─────────────────── B2.2 The Challenges of Size ─────────────────── */
  'B2.2': [
    {
      q: 'Explain why surface area to volume ratio limits the size of organisms, and describe how large organisms have overcome this constraint.',
      marks: 9, command: 'Explain',
      modelAnswer: 'As an organism grows, its volume increases as the cube of its linear dimension while surface area only as the square. The surface area to volume (SA:V) ratio falls. Single-celled and small organisms have high SA:V and rely on simple diffusion across the body surface for gas exchange and nutrient uptake; metabolic demand is met because diffusion distances are short. As size increases, diffusion alone cannot meet demand: oxygen would never reach interior cells in time. Large organisms have therefore evolved specialised exchange surfaces and mass transport systems. Mammalian lungs contain millions of alveoli giving an enormous total surface area; alveoli have thin walls, are moist and surrounded by capillaries, maintaining a steep diffusion gradient through ventilation and circulation. Fish gills use countercurrent flow with blood opposite to water, extracting up to 80% of dissolved O₂. Mass transport is also essential: in mammals, the heart pumps oxygenated blood through arteries to capillaries near every cell; in flowering plants, xylem carries water from roots to leaves. Without these adaptations, large multicellular life would be impossible.'
    },
    {
      q: 'Describe the structure and function of the human circulatory system.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The human circulatory system is a double system, where blood passes through the heart twice for every complete circuit. The right side receives deoxygenated blood from the body and pumps it to the lungs (pulmonary circuit) at low pressure. The left side receives oxygenated blood from the lungs and pumps it to the rest of the body (systemic circuit) at high pressure. Arteries carry blood at high pressure away from the heart; they have thick muscular walls and a small lumen. Smaller arteries (arterioles) divide into capillaries — exchange vessels with walls only one cell thick, allowing diffusion of gases, nutrients and wastes between blood and tissue cells. Capillaries join into venules and then veins, which return blood at low pressure with thinner walls and valves to prevent backflow. The heart is myogenic, with the SA node setting the pace. Coronary arteries supply the heart muscle itself; blockage causes a heart attack. Blood (red cells, white cells, platelets, plasma) carries oxygen, nutrients, hormones, wastes and immune cells throughout the body. The combined system delivers vital substances to every cell and removes wastes, supporting all tissues.'
    },
  ],

  /* ─────────────────── B3.1 Coordination — Nervous System ─────────────────── */
  'B3.1': [
    {
      q: 'Describe how the nervous system enables the body to respond rapidly to a stimulus, using a reflex arc as an example.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The nervous system consists of the central nervous system (brain and spinal cord) and the peripheral nervous system (nerves connecting CNS to the rest of the body). It transmits electrical impulses along neurones rapidly. Sensory receptors detect stimuli (heat receptors detecting a hot surface, photoreceptors in the retina detecting light) and send impulses along sensory neurones to the CNS. In a reflex action, such as touching a hot object, the impulse passes through a relay neurone in the spinal cord directly to a motor neurone, which carries the impulse to an effector — a muscle that contracts to pull the hand away. This pathway, the reflex arc, takes a fraction of a second and does not need the brain — minimising damage. The brain is informed afterwards, allowing conscious awareness. Synapses between neurones use neurotransmitters that diffuse across a tiny gap to trigger an impulse in the next neurone; this allows summation and integration of signals. Myelination of axons speeds up impulse transmission. Together, these features allow the nervous system to coordinate rapid, precise responses essential for survival.'
    },
  ],

  /* ─────────────────── B3.2 Coordination — Endocrine System ─────────────────── */
  'B3.2': [
    {
      q: 'Compare the nervous and endocrine systems in coordinating responses, with examples.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both coordinate body responses but differ in mechanism. The nervous system uses electrical impulses along neurones, with chemicals released only at synapses; signals are very fast (milliseconds), short-lived, and target specific muscles or glands — good for rapid, precise responses (reflexes, voluntary action). The endocrine system uses chemical hormones secreted by glands directly into the blood; only cells with the right receptor respond. Hormonal signals are slower (seconds to hours), longer-lasting, and may affect many tissues at once — good for longer-term changes (blood glucose regulation by insulin/glucagon, water balance by ADH, the menstrual cycle by FSH/LH/oestrogen/progesterone, growth by growth hormone, the stress response by adrenaline). The two systems work together: the hypothalamus links them, controlling the pituitary and so most other endocrine glands; adrenaline (endocrine) reinforces sympathetic nervous responses. Both ultimately use chemical messengers but differ in delivery: down a wire or via the blood. Together they give the body rapid precise control and slower sustained regulation, essential for both immediate reactions and homeostasis.'
    },
  ],

  /* ─────────────────── B3.3 Maintaining Internal Environments ─────────────────── */
  'B3.3': [
    {
      q: 'Explain how the body controls blood glucose concentration and assess what happens when this control fails.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Blood glucose is controlled by negative feedback involving the pancreas. After eating, blood glucose rises; beta cells in the pancreas detect this and secrete insulin, which binds receptors on liver and muscle cells, triggering them to take up glucose and store it as glycogen. Blood glucose falls back to normal. When blood glucose falls (fasting, exercise), alpha cells secrete glucagon, which causes the liver to break glycogen into glucose and release it into the blood. The hormones are antagonistic and self-correcting. Failure causes diabetes. Type 1: pancreas does not produce enough insulin (often after immune destruction of beta cells); blood glucose rises uncontrollably; symptoms include thirst, frequent urination, weight loss, tiredness; treated with insulin injections matched to carbohydrate intake. Type 2: target cells become resistant to insulin, often linked to obesity and inactivity; the pancreas at first produces more insulin but eventually cannot keep up; treated with diet, exercise, drugs and sometimes insulin. Untreated diabetes damages blood vessels, eyes, kidneys and nerves, demonstrating why glucose homeostasis is essential. The rapid rise of type 2 diabetes globally reflects changes in diet and lifestyle and is a major public health priority.'
    },
    {
      q: 'Describe how the kidney regulates the water content of the body, including the role of ADH.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The kidneys regulate water content by adjusting urine production. Each kidney contains thousands of nephrons. Blood enters the glomerulus under high pressure; small molecules including water, salts, glucose, urea and amino acids are filtered into the Bowman\'s capsule, but cells and large proteins stay in the blood. The filtrate flows along the tubule. In the proximal convoluted tubule, all glucose, useful salts and most water are reabsorbed back into the blood. The loop of Henle creates a salt gradient in the medulla. The collecting duct passes through this gradient; water can move out into the blood by osmosis, but only if its walls are permeable. ADH (antidiuretic hormone) controls this. When water content is low (dehydration), the hypothalamus signals the pituitary to release ADH; ADH makes the collecting ducts more permeable, more water is reabsorbed, and a small volume of concentrated urine is produced. When water content is high, ADH falls, less water is reabsorbed, and a large volume of dilute urine is produced. The kidney also excretes urea (the main nitrogenous waste from amino acid breakdown), regulates ions and blood pressure, and produces hormones controlling red blood cell production. It is therefore vital for homeostasis.'
    },
  ],

  /* ─────────────────── B4.1 Ecosystems ─────────────────── */
  'B4.1': [
    {
      q: 'Discuss how human activities affect biodiversity and assess what can be done to maintain it.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Biodiversity is the variety of all the species in an area or on Earth. Human activities reduce biodiversity. Habitat destruction (deforestation, urbanisation, draining wetlands) removes the spaces species need. Climate change driven by burning fossil fuels alters temperature and rainfall, shifting habitats and threatening species that cannot adapt. Pollution (eutrophication, plastic, acid rain) damages ecosystems. Overexploitation through hunting, fishing and the wildlife trade depletes populations. Introduction of non-native (invasive) species can outcompete or predate locals. The effects of declining biodiversity include collapse of food webs, loss of pollinators (threatening crop production), and reduced ecosystem services. Maintenance: protect habitats through national parks and nature reserves; restore degraded land (reforestation, wetland restoration); manage fisheries, hunting and trade sustainably; reduce greenhouse gas emissions and pollution; control invasive species; conserve species ex situ in zoos, captive breeding programmes and seed banks; educate the public; support international cooperation through agreements like CITES. Local schemes (community gardens, hedgerow planting) and global agreements (Convention on Biological Diversity) both help. Despite efforts, biodiversity continues to decline at unprecedented rates, suggesting more ambitious action is needed across agriculture, energy and consumption patterns.'
    },
    {
      q: 'Describe the carbon cycle and explain how human activities have changed it.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The carbon cycle is the continuous movement of carbon between atmosphere, living organisms, oceans and rocks. In the atmosphere, carbon exists mainly as CO₂. Photosynthesis by plants and algae removes CO₂ and converts it into glucose, which becomes part of plant biomass. When animals eat plants, the carbon transfers along the food chain. Respiration by all living things returns CO₂ to the atmosphere. Decomposition of dead organisms by bacteria and fungi releases CO₂. Combustion of biomass and fossil fuels (coal, oil, gas — ancient organic material) releases CO₂ rapidly. Oceans absorb CO₂. Without disturbance, the cycle is roughly balanced. Human activities have changed the cycle: burning fossil fuels releases CO₂ much faster than it can be absorbed; deforestation removes plants that would otherwise take up CO₂. Atmospheric CO₂ has risen from ~280 ppm before the Industrial Revolution to over 420 ppm today. Increased CO₂ traps more heat (greenhouse effect), driving global warming and climate change. Oceans absorb CO₂, becoming more acidic and threatening marine life. Reducing fossil fuel use, protecting forests and developing carbon capture are needed to bring the cycle back into balance.'
    },
  ],

  /* ─────────────────── B5.1 Inheritance ─────────────────── */
  'B5.1': [
    {
      q: 'Explain how characteristics are inherited, using a genetic cross to predict offspring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Each gene exists in different versions called alleles, one inherited from each parent. Alleles can be dominant (expressed when present) or recessive (only expressed when both alleles are recessive). Genotype is the combination of alleles; phenotype is the physical trait. In sexual reproduction, gametes carry one allele per gene; at fertilisation, two alleles combine. Example: cystic fibrosis is caused by a recessive allele f. Both parents are carriers (Ff). Their gametes can carry F or f. Punnett square: F+F = FF; F+f = Ff; f+F = Ff; f+f = ff. Expected ratio: 1 FF : 2 Ff : 1 ff — 25% affected, 50% carrier, 25% unaffected and not a carrier. Sex inheritance: females XX, males XY; sperm carry X or Y in equal numbers, giving roughly equal proportions of male and female offspring. Sex-linked inheritance (e.g. red-green colour blindness) follows the X chromosome; recessive alleles affect men more often as they have only one X. Genetic crosses are used in plant breeding, animal breeding and genetic counselling.'
    },
  ],

  /* ─────────────────── B5.2 Natural Selection & Evolution ─────────────────── */
  'B5.2': [
    {
      q: 'Explain how natural selection causes evolution, using an example.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Natural selection requires variation among individuals, heritability of variation, and selection pressure (the environment favours some variations). Over generations, advantageous alleles increase in frequency — the population becomes adapted. The peppered moth in 19th-century Britain illustrates this: most moths were light-coloured and well camouflaged on lichen-covered tree bark; industrial pollution killed lichen and blackened bark, so light moths became visible to predators while a rare dark variety became better camouflaged. More dark moths survived and reproduced, passing the dark allele on; within decades, dark forms dominated industrial areas, while light forms still dominated unpolluted areas. When clean-air laws reduced pollution, light moths regained their advantage. Other examples: antibiotic resistance in bacteria, pesticide resistance in insects, beak shape changes in Galápagos finches, rapid evolution of flu and COVID-19 viruses. Evidence for natural selection comes from the fossil record, comparative anatomy, embryology and DNA. Natural selection underlies the diversity of life and is the foundation of modern biology.'
    },
    {
      q: 'Discuss the use of selective breeding and genetic engineering, and assess any concerns.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Selective breeding chooses organisms with desirable characteristics and breeds them together over many generations. Examples: high-yielding wheat, dairy cows giving more milk, dogs bred for specific roles. It uses existing genetic variation, is well established and powerful. Genetic engineering directly modifies DNA, often by inserting a gene from another species. Examples: bacteria engineered to produce human insulin, Bt cotton (bacterial gene producing toxin against caterpillars), Golden Rice (β-carotene), herbicide-tolerant crops. Both can produce safer, higher-yielding food. Selective breeding concerns: reduced genetic diversity, vulnerability to disease, inbreeding depression (e.g. health problems in pedigree dogs), animal welfare issues with exaggerated traits. Genetic engineering concerns: long-term safety (most evidence suggests approved GM foods are safe), ecological impact (gene flow to wild relatives), economic dependence on patented seeds, animal welfare in transgenic animals, "playing God" objections. Germline editing of humans is especially controversial and currently banned. Both approaches require regulation, transparent testing and public engagement. Used responsibly, they form a powerful toolkit for sustainable agriculture and medicine.'
    },
  ],

  /* ─────────────────── B6.1 Monitoring & Maintaining the Environment ─────────────────── */
  'B6.1': [
    {
      q: 'Explain how scientists measure biodiversity and assess methods of conservation.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Biodiversity is the variety of life at species, genetic and ecosystem levels. Measurement methods include species richness (number of species in an area), Simpson\'s index (incorporating relative abundance), and DNA-based methods. Sampling techniques: quadrats and transects for plants; mark-release-recapture for animals; environmental DNA from soil or water. Each has limitations: counts miss cryptic species; sampling depends on the technique and intensity. Conservation methods can be in situ (within natural habitats) or ex situ (outside). In situ: national parks, marine reserves, habitat restoration, legal protection (CITES). Strengths: species remain in their natural ecosystem with intact genetic diversity. Weaknesses: hard to enforce, may not stop habitat degradation, "paper parks" without real protection. Ex situ: zoos, captive breeding, seed banks (Kew, Svalbard), botanic gardens. Strengths: rescue species at imminent extinction risk, public education, research. Weaknesses: small populations risk inbreeding, costly per species, reintroduction often fails if original threats remain. Sustainable use ties human livelihoods to conservation through certified products (FSC timber, MSC fisheries) and ecotourism. Best practice combines approaches and addresses underlying drivers (climate, agriculture). Despite efforts, biodiversity continues to decline rapidly; reversing this requires global cooperation across many sectors.'
    },
  ],

  /* ─────────────────── B6.2 Feeding the Human Race ─────────────────── */
  'B6.2': [
    {
      q: 'Discuss how modern farming methods aim to maximise food production, and assess their environmental impact.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Modern farming uses many methods. High-yielding varieties developed by selective breeding or genetic engineering produce more food per area. Fertilisers replace nutrients removed by harvesting. Pesticides and herbicides reduce losses to pests and weeds. Irrigation provides water in dry areas. Glasshouses and polytunnels allow year-round cropping; CO₂ enrichment, supplemental lighting and heating boost yields. Mechanisation reduces labour and allows large-scale farming. Intensive livestock farming raises animals in controlled conditions, often indoors, with concentrated feeds and antibiotics. Genetic engineering produces pest-resistant or herbicide-tolerant crops. Environmental impact: large-scale agriculture is the leading cause of biodiversity loss through habitat destruction; fertilisers cause eutrophication; pesticides harm non-target species and bioaccumulate; intensive livestock contributes major greenhouse gas emissions; soil erosion and salinisation degrade land; antibiotic resistance is accelerated by livestock use. Sustainable approaches — integrated pest management, crop rotation, conservation tillage, precision agriculture, plant-based diets, and reducing food waste — aim to maintain yields with less environmental damage. Feeding 10 billion people sustainably will require both technological and dietary change.'
    },
  ],

  /* ─────────────────── B6.3 Monitoring & Maintaining Health ─────────────────── */
  'B6.3': [
    {
      q: 'Describe how the body defends itself against pathogens, and explain how vaccination produces long-term immunity.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The body has non-specific and specific defences. Non-specific defences are the first line: skin acts as a physical barrier; mucus and cilia trap and remove pathogens; tears, saliva and stomach acid kill microbes; commensal microbes compete with pathogens. White blood cells respond if pathogens get past these. Phagocytes engulf and digest pathogens (phagocytosis). Lymphocytes provide specific responses: B lymphocytes recognise antigens and produce antibodies that bind them, agglutinating pathogens for phagocytosis and neutralising toxins; T lymphocytes attack infected cells. Memory cells remain after infection so the next exposure to the same antigen produces a much faster, larger response — this is the basis of immunity. Vaccination introduces a weakened, dead or modified pathogen (or its antigens) to trigger this memory response without disease. On exposure to the live pathogen, the secondary response is rapid and clears the infection before symptoms develop. When enough of a population is vaccinated, herd immunity prevents the pathogen spreading, protecting unvaccinated individuals. Vaccination has eradicated smallpox and dramatically reduced measles, polio, tetanus and many others. It is one of the most cost-effective medical interventions ever developed.'
    },
    {
      q: 'Compare bacterial and viral infections and discuss the issue of antibiotic resistance.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Bacteria are single-celled organisms that may cause disease by invading tissues or producing toxins. They have their own metabolism and reproduce by binary fission. Viruses are not cells: they consist of a protein coat surrounding genetic material, and cannot reproduce alone — they hijack host cells to make copies. Treatments differ. Antibiotics kill bacteria or stop them growing by targeting features unique to bacterial cells (cell wall, 70S ribosomes); they have no effect on viruses, which lack these features. Antiviral drugs target viral-specific enzymes and exist for fewer viruses; vaccines provide long-term protection. Antibiotic resistance is a major and growing public health problem. Bacteria reproduce rapidly with much genetic variation through mutation and plasmid transfer. When antibiotics are used, resistant individuals survive and reproduce, while susceptible ones are killed; resistance spreads rapidly. Misuse — incomplete courses, prescription for viral infections, agricultural use as growth promoters — accelerates resistance. Multi-drug resistant strains (MRSA, XDR-TB) cause prolonged illness and more deaths. Mitigation: prudent prescribing, completion of courses, hospital infection control, surveillance, restricting agricultural use, developing new antibiotics, and using vaccines and other tools to reduce dependence. Antibiotic resistance is a global health crisis requiring coordinated action across medicine, agriculture and policy.'
    },
  ],

};
