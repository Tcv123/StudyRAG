/*
 * OCR B GCSE Biology (J257) Twenty First Century — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate.
 */

const BIOLOGY_OCR_B_GCSE_AI_FEEDBACK = {

  /* ─────────────────── B1.1 What is the genome and what does it do? ─────────────────── */
  'B1.1': [
    {
      q: 'Describe how DNA codes for proteins, and explain the consequences of mutations.',
      marks: 9, command: 'Describe',
      modelAnswer: 'DNA is a polymer of nucleotides, each containing a deoxyribose sugar, a phosphate group and one of four bases (A, T, C, G). It forms a double helix held by hydrogen bonds between complementary bases (A–T, C–G). Genes are sections of DNA that code for proteins. The order of bases in a gene determines the order of amino acids in the protein. Bases are read in groups of three (codons); each triplet codes for one amino acid. Protein synthesis happens in two stages: transcription copies the gene into a single-stranded mRNA molecule in the nucleus; translation occurs at ribosomes, where tRNAs bring amino acids matching each codon to build a polypeptide. The polypeptide folds into the protein\'s functional shape. A mutation is a change in the base sequence of DNA. It can be silent (no effect on the amino acid because the genetic code is degenerate), or it may change one amino acid (missense) or insert a premature stop codon (nonsense). A change in amino acid can alter the protein\'s shape and function — the active site of an enzyme may no longer fit its substrate, or a structural protein may not work properly. Mutations cause genetic diseases (cystic fibrosis, sickle cell) and contribute to cancer.'
    },
  ],

  /* ─────────────────── B1.2 How is genetic information inherited? ─────────────────── */
  'B1.2': [
    {
      q: 'Explain how characteristics are inherited and use a genetic cross to predict offspring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Each gene exists as different versions called alleles, one inherited from each parent. Alleles can be dominant (expressed when present) or recessive (only expressed when both alleles are recessive). Genotype is the combination of alleles; phenotype is the physical trait. Homozygous means both alleles are the same; heterozygous means they differ. Gametes carry one allele per gene; at fertilisation, two alleles combine. Example: cystic fibrosis is caused by recessive allele f. Both parents are healthy carriers (Ff). Punnett square: F+F = FF; F+f = Ff; f+F = Ff; f+f = ff. Expected ratio: 1 FF : 2 Ff : 1 ff — 25% affected, 50% carrier, 25% unaffected and not a carrier. Sex inheritance: females XX, males XY; sperm carry X or Y in equal numbers, giving roughly equal proportions of male and female offspring. Sex-linked inheritance (e.g. red-green colour blindness) follows the X chromosome; recessive alleles affect men more often as they have only one X. Genetic crosses help predict inheritance, useful in breeding programmes and genetic counselling.'
    },
  ],

  /* ─────────────────── B1.3 How can and should gene technology be used? ─────────────────── */
  'B1.3': [
    {
      q: 'Discuss the use of genetic engineering and assess the ethical issues raised.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Genetic engineering involves changing an organism\'s DNA, often by inserting a gene from another species. The desired gene is cut out using restriction enzymes, joined to a vector (e.g. a plasmid), and introduced into a host. Examples: bacteria engineered to produce human insulin, Bt cotton (gene from Bacillus thuringiensis kills caterpillars), Golden Rice (β-carotene), and herbicide-tolerant crops. Gene therapy aims to replace faulty genes in patient cells. Benefits: rapid production of medicines, improved crop yields, reduced pesticide use in some cases, treatment of previously incurable diseases. Ethical issues: long-term safety of GM foods (most evidence suggests approved GM foods are safe), unintended ecological effects (transgenes spreading to wild relatives), economic dependence of farmers on patented seeds, animal welfare in transgenic animals, costs leading to inequality of access, "playing God" objections. Germline editing of humans is especially controversial and currently banned in most countries. Strong regulation, transparent testing and public engagement are essential. Used responsibly, genetic engineering is one of biology\'s most powerful tools.'
    },
  ],

  /* ─────────────────── B2.1 What are the causes of disease? ─────────────────── */
  'B2.1': [
    {
      q: 'Compare bacterial and viral infections and explain how each can be treated.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Bacteria are single-celled organisms that may cause disease by invading tissues or producing toxins (salmonella, tuberculosis). They have their own metabolism and reproduce by binary fission. Viruses are not cells: they consist of a protein coat surrounding genetic material, and cannot reproduce alone — they enter host cells and use cellular machinery to make copies, often killing the cell (influenza, measles, COVID-19). Both can be spread by contact, droplets, food/water or vectors. Treatments differ. Antibiotics kill bacteria or stop them growing by targeting features unique to bacterial cells (cell wall, ribosomes); they have no effect on viruses, which lack these features. Different antibiotics target different bacteria. Overuse of antibiotics has led to antibiotic resistance, a major public health threat. Antiviral drugs target viral-specific enzymes and exist for some viruses (HIV, flu). Vaccines provide long-term protection against many viruses (measles, mumps, polio, COVID) and some bacteria. Hygiene, vaccination, surveillance and prudent antibiotic use are central to controlling both kinds of infection.'
    },
  ],

  /* ─────────────────── B2.2 How do organisms protect themselves against pathogens? ─────────────────── */
  'B2.2': [
    {
      q: 'Describe the body\'s defences against pathogens.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The body has non-specific and specific defences. Non-specific defences are the first line: skin acts as a physical barrier; mucus and cilia in the airways trap and remove pathogens; tears, saliva and stomach acid kill microbes; commensal microbes compete with pathogens. White blood cells respond if pathogens get past these. Phagocytes engulf and digest pathogens (phagocytosis), killing them with enzymes. Lymphocytes give specific responses: B lymphocytes recognise antigens on the pathogen and produce antibodies that bind those antigens, agglutinating pathogens for phagocytosis and neutralising toxins; T lymphocytes attack infected cells. Memory cells remain after infection so the next exposure to the same antigen produces a much faster, larger response — this is the basis of immunity. Plants also have defences: physical barriers (waxy cuticle, bark), chemical defences (antibacterial compounds, anti-herbivore toxins), and structural responses to wounding (sealing off damaged tissue). Insects have hard exoskeletons and antimicrobial peptides. Defences are layered, providing both immediate and long-term protection across species.'
    },
  ],

  /* ─────────────────── B2.3 How can we prevent the spread of infections? ─────────────────── */
  'B2.3': [
    {
      q: 'Explain how vaccinations protect both individuals and populations from disease.',
      marks: 9, command: 'Explain',
      modelAnswer: 'A vaccine contains a weakened, dead or modified form of a pathogen, or its antigens. When introduced into the body, the immune system mounts a primary response: B lymphocytes recognise the antigens, divide and produce antibodies, while memory cells form. Because the pathogen is harmless, the person does not develop the disease. If the live pathogen is encountered later, the secondary response is much faster and larger — antibodies are made before symptoms appear, and the person is immune. This protects the individual. At the population level, when enough people are vaccinated, the pathogen cannot spread because it cannot find new hosts; this is herd immunity, which protects unvaccinated people (e.g. babies, the immunosuppressed). The threshold for herd immunity depends on how infectious the disease is — measles needs about 95% vaccine coverage. Vaccination has eradicated smallpox, almost eliminated polio and dramatically reduced many other diseases. Hygiene, sanitation, isolation of infected individuals and contact tracing also reduce spread. Vaccination is one of the most cost-effective medical interventions ever developed.'
    },
  ],

  /* ─────────────────── B2.4 How can we identify the cause of an infection? ─────────────────── */
  'B2.4': [
    {
      q: 'Discuss methods used to identify the cause of an infection, and assess their reliability.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'When a patient has symptoms of infection, doctors investigate to identify the cause. Microscopy on samples (blood, sputum, faeces, swabs) can show some pathogens directly (parasites, fungi). Culturing on agar plates allows bacteria to grow into visible colonies that can be identified by appearance, biochemical tests and Gram staining; this takes hours to days. PCR amplifies pathogen DNA from samples, allowing fast and sensitive identification of bacteria, viruses and parasites — even at very low concentrations. Antibody tests detect a patient\'s immune response to specific pathogens (e.g. ELISA for HIV). Antigen tests detect pathogen proteins directly (e.g. lateral flow tests for COVID-19). Reliability varies. Microscopy depends on the skill of the operator and may miss low-level infections. Culturing is reliable but slow; some pathogens won\'t grow on standard media. PCR is fast and sensitive but can produce false positives if contaminated, and may detect dead pathogens; antibody tests can give false negatives early in infection (before antibodies develop) and false positives from cross-reactivity. Combined methods give the most reliable diagnosis. Rapid identification is important to start the right treatment, prevent spread and track outbreaks.'
    },
  ],

  /* ─────────────────── B2.5 How can lifestyle, genes, and the environment affect health? ─────────────────── */
  'B2.5': [
    {
      q: 'Discuss how lifestyle factors affect the risk of disease and assess what can be done to reduce risk.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Many diseases are caused or made more likely by lifestyle. Smoking damages lung tissue (chronic bronchitis, emphysema, lung cancer) and arteries (raising risk of cardiovascular disease and stroke). Poor diet (high in saturated fat, salt and refined sugar; low in fibre, fruit and vegetables) raises risk of cardiovascular disease, type 2 diabetes, some cancers and obesity. Physical inactivity contributes to obesity, cardiovascular disease and diabetes. Excessive alcohol damages liver, brain and other organs. Recreational drugs carry direct and broader social risks. UV exposure raises skin cancer risk. Chronic stress contributes to mental and physical illness. Genetic factors (e.g. inherited risk for heart disease, cancer) add baseline risk that cannot be changed but is modifiable through lifestyle. Reducing risk: stop smoking; balanced diet; regular exercise (≥150 min/week); maintain healthy weight; limit alcohol; avoid recreational drugs; protect skin from sun; manage stress; have routine medical checks. Government measures (smoking bans, sugar taxes, salt reduction) help at the population level. Most chronic disease is preventable, but reducing risk requires individual change supported by social and political action; access to healthy food, safe places to exercise and good healthcare must be available to all.'
    },
  ],

  /* ─────────────────── B2.6 How are non-communicable diseases treated? ─────────────────── */
  'B2.6': [
    {
      q: 'Discuss treatments available for non-communicable diseases such as cardiovascular disease and cancer.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Non-communicable diseases (NCDs) are not spread between people but develop over time, often linked to lifestyle and genetics. Cardiovascular disease (CVD) covers heart attacks, strokes and heart failure. Lifestyle changes (stopping smoking, healthy diet, exercise, weight loss) are the foundation of treatment and prevention. Medications include statins (lower cholesterol), antihypertensives (lower blood pressure), antiplatelet drugs (aspirin to reduce clotting), and beta-blockers. Surgical interventions include angioplasty and stents to open narrowed arteries, and coronary artery bypass surgery. For severe heart failure, transplant or mechanical assist devices may be needed. Cancer is uncontrolled cell division. Treatments include surgery to remove tumours, radiotherapy (using ionising radiation to kill cancer cells), chemotherapy (drugs that kill rapidly dividing cells, with side-effects on other dividing tissues), targeted therapies (drugs aimed at specific mutations, such as trastuzumab for HER2-positive breast cancer), immunotherapies (boosting the immune system to attack cancer cells, e.g. checkpoint inhibitors), and increasingly precision medicine that matches treatment to the genetic profile of the tumour. Diabetes is treated with insulin (type 1) or diet, exercise and drugs (type 2). Each NCD requires individualised treatment, often combining lifestyle change with medical intervention. Prevention through public health remains crucial, since many NCDs are largely preventable.'
    },
  ],

  /* ─────────────────── B3.1 What happens during photosynthesis? ─────────────────── */
  'B3.1': [
    {
      q: 'Describe the process of photosynthesis and explain how it is affected by limiting factors.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Photosynthesis is the process by which plants make glucose from CO₂ and water using light energy absorbed by chlorophyll. Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll). Symbol: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. It takes place in the chloroplasts of leaf cells. Glucose is used in respiration, converted to starch for storage, used to make cellulose for cell walls, or combined with absorbed nitrate ions to form amino acids. The rate is affected by limiting factors. Light intensity: rate rises with light up to a saturation point. CO₂ concentration: rate rises with CO₂ until another factor becomes limiting. Temperature: rate rises with temperature up to about 40 °C; beyond this, enzymes denature and rate falls sharply. The factor in shortest supply limits the overall rate. Greenhouse growers maximise yield by raising whichever factor is limiting (supplemental lighting, CO₂ enrichment, heating). Almost all life on Earth depends on photosynthesis to provide glucose, oxygen and biomass.'
    },
  ],

  /* ─────────────────── B3.2 How do producers get the substances they need? ─────────────────── */
  'B3.2': [
    {
      q: 'Explain how plants obtain water and mineral ions, and how these are transported around the plant.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Plants absorb water and minerals from soil through roots, mainly via root hair cells. These cells have a high surface area thanks to root hair extensions, increasing absorption efficiency. Water enters by osmosis: the soil solution has higher water potential than the cytoplasm, so water moves down the gradient into the cell. Mineral ions (nitrate, potassium, phosphate, magnesium) enter mainly by active transport because soil concentrations are usually lower than inside cells; this requires energy from respiration. Once in the root, water and minerals move across the cortex via the symplast (cell cytoplasm) or apoplast (cell walls) until they reach the xylem. Xylem vessels are long, hollow, dead, lignified tubes. Water moves up xylem from root to leaf driven mainly by transpiration: water evaporates from mesophyll cells and diffuses out through stomata, lowering water potential and drawing water up. The water column is held together by cohesion (hydrogen bonds between water molecules) and adhesion to vessel walls. This delivers water and minerals to all parts of the plant, supports cells through turgor and helps cool leaves. Minerals like nitrate are essential for amino acid synthesis (proteins), magnesium for chlorophyll, and phosphate for DNA and ATP. Fertilisers are used to replace nutrients lost when crops are harvested.'
    },
  ],

  /* ─────────────────── B3.3 How are organisms in an ecosystem interdependent? ─────────────────── */
  'B3.3': [
    {
      q: 'Discuss how organisms in an ecosystem depend on each other, with examples.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'Organisms in an ecosystem are interconnected through food webs and other relationships. Producers (plants, algae) capture energy by photosynthesis and form the base of food chains; without them, no other life would have energy. Herbivores eat producers; carnivores eat herbivores or other carnivores; decomposers break down dead matter, returning nutrients to the soil. Removing one species can have far-reaching effects: removing a top predator can cause prey populations to explode and over-exploit producers (a trophic cascade). Pollinators (bees, butterflies, flies) depend on flowers for food and flowers depend on them for pollination — this mutualism is essential for many crops. Mycorrhizal fungi associate with plant roots, exchanging nutrients for sugars. Many animals depend on specific habitats provided by plants (e.g. certain insects only feed on one host plant). Parasites and pathogens depend on host species but in turn shape host evolution. Decomposer activity recycles carbon, nitrogen and other elements, supporting all life. Climate change, habitat loss and species extinction therefore have ripple effects throughout ecosystems. Conservation focuses on protecting communities of interdependent species, not just individuals — recognising that biodiversity is the basis of resilient, productive ecosystems.'
    },
  ],

  /* ─────────────────── B3.4 How are populations affected by conditions in an ecosystem? ─────────────────── */
  'B3.4': [
    {
      q: 'Explain how environmental and biotic factors affect population sizes in an ecosystem.',
      marks: 6, command: 'Explain',
      modelAnswer: 'Population sizes are affected by abiotic (environmental) and biotic (living) factors. Abiotic factors include temperature, light, water availability, soil pH, nutrients and oxygen levels. Each species has a tolerance range; if conditions move outside this, the population cannot survive. Climate change is shifting temperature and rainfall patterns, altering populations worldwide. Biotic factors include availability of food, competition (for food, water, mates, space), predation, disease and parasitism. Two species cannot occupy the same niche indefinitely; one will outcompete the other unless they specialise into different niches. Predator-prey populations often oscillate: more prey allows more predators, which then reduce prey, which then reduces predators. Disease can reduce populations rapidly (e.g. myxomatosis in rabbits). Human activities — habitat destruction, pollution, climate change, hunting, introduction of invasive species — have major effects on populations, often reducing native species while favouring generalists and invaders. Conservation managers monitor populations and address limiting factors (habitat restoration, controlling invasives, regulating hunting) to support recovery. Understanding population dynamics is central to ecology, fisheries, agriculture and public health.'
    },
  ],

  /* ─────────────────── B4.1 What happens during cellular respiration? ─────────────────── */
  'B4.1': [
    {
      q: 'Compare aerobic and anaerobic respiration, and assess the importance of each.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both aerobic and anaerobic respiration release energy from glucose for ATP synthesis. Aerobic respiration uses oxygen and gives a high yield (~30 ATP per glucose). Word equation: glucose + oxygen → carbon dioxide + water (+ ATP). It takes place mainly in the mitochondria. Anaerobic respiration occurs without oxygen. In animal muscle: glucose → lactic acid (+ a small amount of ATP); the lactic acid causes muscle fatigue and must be broken down later (oxygen debt). In yeast and plants: glucose → ethanol + CO₂ (used in brewing and baking). Anaerobic respiration releases far less energy per glucose (~5%) because glucose is not fully oxidised — most chemical energy is locked in lactic acid or ethanol. During hard exercise, muscles cannot get enough oxygen and switch to anaerobic respiration, building up lactic acid that contributes to fatigue. After exercise, oxygen is needed to repay the debt, breaking down lactic acid in the liver. Aerobic respiration is preferable when oxygen is available because it produces much more ATP per glucose, completes the breakdown to inert products (CO₂ and water), and avoids fatiguing lactic acid. Anaerobic respiration is essential for short, intense bursts when O₂ supply is limited.'
    },
  ],

  /* ─────────────────── B4.2 How do we know about mitochondria and other cell structures? ─────────────────── */
  'B4.2': [
    {
      q: 'Compare light and electron microscopes and discuss how they have advanced our understanding of cells.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Light microscopes use visible light focused by glass lenses; magnification up to ×1500 and resolution about 200 nm allow whole cells, nuclei and chloroplasts to be seen. They can examine living cells, are cheap and use coloured stains. Electron microscopes use a beam of electrons focused by electromagnets; resolution down to 0.2 nm and magnification up to ×2 000 000 reveal ribosomes, viruses and mitochondrial cristae. TEM passes electrons through ultrathin sections to give 2D images of internal structure; SEM bounces electrons off the surface for 3D images. Specimens must be in vacuum, so cannot be alive. Both have contributed enormously to biology. Light microscopy revealed the existence of cells, the structure of chromosomes, and processes such as cell division and meiosis. Electron microscopy revealed the existence of cell organelles and membranes, the internal structure of mitochondria and chloroplasts, the architecture of viruses, and how proteins are organised. Modern fluorescence and confocal microscopy combine light microscopy with specific labels to track molecules in living cells. Cryo-electron microscopy now reveals individual proteins at near-atomic resolution. Together, these techniques transformed biology by making the cellular and molecular world visible — without them, modern cell biology would not exist.'
    },
  ],

  /* ─────────────────── B4.3 How do organisms grow and develop? ─────────────────── */
  'B4.3': [
    {
      q: 'Explain how mitosis and stem cells contribute to growth and development.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Mitosis is cell division producing two genetically identical daughter cells from one parent cell. After interphase (DNA replication), the chromosomes condense, line up at the equator, sister chromatids are pulled to opposite poles, and two new nuclei form. Cytokinesis divides the cytoplasm. In growth, mitosis increases the number of cells from a single zygote, building tissues and organs as the embryo develops. In adulthood, mitosis replaces damaged or worn-out cells (skin, gut lining, blood cells) maintaining tissue function. Stem cells are undifferentiated cells that can divide (self-renewal) and develop into specialised cell types. Embryonic stem cells from early embryos can become any cell type (pluripotent); adult stem cells in tissues like bone marrow, skin and gut are more restricted (multipotent). During development, stem cells differentiate following signals — different genes are switched on or off in different cells, determining their fate. In adult life, stem cells maintain tissues by replacing lost cells. Medical applications of stem cells include bone marrow transplant for leukaemia, growing replacement tissues, treating Parkinson\'s by replacing dopaminergic neurones, and treating spinal cord injury. Together, mitosis and stem cells underpin the development and maintenance of multicellular life.'
    },
  ],

  /* ─────────────────── B5.1 How do substances get into, out of, and around our bodies? ─────────────────── */
  'B5.1': [
    {
      q: 'Describe how the structure of the lungs is adapted for efficient gas exchange.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The lungs are adapted for efficient gas exchange in several ways. Air enters via the nose and mouth, passes down the trachea (held open by C-shaped cartilage rings), divides into bronchi and bronchioles, and ends in millions of alveoli — tiny air sacs. The alveoli give a huge total surface area (~70 m²) for diffusion. Each alveolus has a wall only one cell thick (squamous epithelium) and is surrounded by capillaries with walls also one cell thick — together giving a very short diffusion distance for gases. The lungs are richly supplied with capillaries, so blood is constantly arriving (deoxygenated) and leaving (oxygenated), maintaining a steep concentration gradient. Ventilation by the diaphragm and intercostal muscles continually replaces alveolar air with fresh air. The alveolar surface is moist, allowing gases to dissolve. Goblet cells produce mucus that traps dust and microbes; cilia sweep mucus up to the throat. Together, large surface area, short diffusion distance, steep gradient maintained by ventilation and circulation, and protective mechanisms make the lungs a highly efficient gas exchange organ. Disease (emphysema, asthma) impairs these features and causes breathlessness.'
    },
  ],

  /* ─────────────────── B5.2 How does the nervous system help us respond to changes? ─────────────────── */
  'B5.2': [
    {
      q: 'Describe how the nervous system enables the body to respond rapidly to a stimulus, using a reflex action as an example.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The nervous system consists of the central nervous system (brain and spinal cord) and the peripheral nervous system (nerves connecting CNS to the rest of the body). It transmits electrical impulses along neurones rapidly. Sensory receptors detect a stimulus — for example, heat receptors in the skin detecting a hot surface. The receptor sends an impulse along a sensory neurone to the CNS. In a reflex action (such as pulling the hand away from a hot object), the impulse passes through a relay neurone in the spinal cord directly to a motor neurone, which carries the impulse to an effector — a muscle that contracts to pull the hand away. This pathway, called a reflex arc, takes a fraction of a second and does not need the brain — making it essential for protecting the body from harm. The brain is informed afterwards, allowing the conscious experience of pain. Synapses between neurones use neurotransmitters that diffuse across a tiny gap to trigger an impulse in the next neurone, slowing transmission slightly but allowing summation and inhibition of signals. Myelination of axons speeds up impulse transmission. Together, these features allow the nervous system to coordinate rapid, precise responses essential for survival.'
    },
  ],

  /* ─────────────────── B5.3 How do hormones control responses in the human body? ─────────────────── */
  'B5.3': [
    {
      q: 'Discuss the role of hormones in the menstrual cycle and assess how they are exploited in contraception.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The menstrual cycle is controlled by four hormones. FSH (follicle-stimulating hormone) from the pituitary stimulates a follicle in the ovary to develop, containing an egg, and stimulates oestrogen secretion. Oestrogen builds the lining of the uterus and inhibits FSH. Rising oestrogen triggers a surge of LH (luteinising hormone), which causes ovulation. After ovulation, the empty follicle (corpus luteum) produces progesterone, which maintains the uterine lining and inhibits FSH and LH. If pregnancy does not occur, progesterone falls, the lining is shed (menstruation), and the cycle restarts. Contraception exploits these hormones. The combined pill contains oestrogen and progesterone, keeping their levels artificially high so FSH and LH are inhibited; eggs do not mature and ovulation does not occur. The progesterone-only pill thickens cervical mucus to prevent sperm reaching the egg. Implants and injections release progesterone over months or years. Other methods (condoms, diaphragms) physically block sperm; IUDs prevent implantation. Hormonal methods are highly effective when used correctly but can have side-effects (mood, weight, raised clot risk). They give women effective control over fertility, although accessibility varies. The same hormones can be used to treat infertility (FSH and LH stimulating ovulation) — showing how knowledge of the menstrual cycle gives powerful control over fertility for many uses.'
    },
  ],

  /* ─────────────────── B5.4 Why do we need to maintain a constant internal environment? ─────────────────── */
  'B5.4': [
    {
      q: 'Explain how the body maintains a constant blood glucose concentration and assess what happens when this control fails.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Blood glucose concentration is controlled by negative feedback involving the pancreas. After eating, blood glucose rises; beta cells in the pancreas detect this and secrete insulin. Insulin binds receptors on liver and muscle cells, triggering them to take up glucose and store it as glycogen. Blood glucose falls back to normal. When blood glucose falls (fasting, exercise), alpha cells secrete glucagon, which causes the liver to break glycogen into glucose and release it into the blood. Together, insulin and glucagon act antagonistically to keep blood glucose stable. Failure leads to diabetes. Type 1: pancreas does not produce enough insulin (often after immune destruction of beta cells); blood glucose rises uncontrollably; symptoms include thirst, frequent urination, weight loss; treatment requires insulin injections matched to carbohydrate intake. Type 2: target cells become resistant to insulin, often linked to obesity and inactivity; the pancreas at first produces more insulin but eventually cannot keep up; treatment is initially diet and exercise, then drugs and sometimes insulin. Untreated diabetes can damage blood vessels, eyes, kidneys and nerves, demonstrating why glucose homeostasis is essential. The rapid rise of type 2 diabetes globally reflects changes in diet and lifestyle and is a major public health priority.'
    },
  ],

  /* ─────────────────── B6.1 How was the theory of evolution developed? ─────────────────── */
  'B6.1': [
    {
      q: 'Discuss how the theory of evolution by natural selection was developed and assess the evidence supporting it.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The theory of evolution was developed in the 19th century, most famously by Charles Darwin and Alfred Russel Wallace, who independently proposed natural selection as the mechanism. Darwin\'s observations on the Beagle voyage — especially the finches and tortoises of the Galápagos Islands — showed how related species varied between islands, suggesting they had descended from a common ancestor and adapted to local conditions. Combined with Malthus\'s ideas about population pressure, this led Darwin to propose that variation, inheritance, and differential survival cause evolution. He published On the Origin of Species in 1859. Evidence supporting evolution: the fossil record provides a chronological sequence of organisms, with simpler forms in older rocks and more complex forms later, with transitional fossils linking major groups (Tiktaalik between fish and amphibians, Archaeopteryx between dinosaurs and birds). Comparative anatomy reveals homologous structures (e.g. the same bones in human arms, whale flippers and bat wings) suggesting common ancestry. Embryological similarities (gill-like slits in early embryos of all vertebrates) point to common origins. DNA evidence confirms close relationships and shows that all life uses the same genetic code. Direct observation of evolution includes peppered moths, Darwin\'s finches in drought conditions, antibiotic resistance, pesticide resistance and viral evolution. Limitations: the fossil record is incomplete; some creationist objections persist despite the weight of evidence. Modern evolutionary theory adds genetics (Mendel\'s work was unknown to Darwin), molecular biology and population genetics, but the core ideas remain — making evolution one of the best-supported theories in science.'
    },
  ],

  /* ─────────────────── B6.2 How does evolution take place? ─────────────────── */
  'B6.2': [
    {
      q: 'Explain how natural selection causes evolution and discuss how new species can form.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Natural selection requires variation among individuals (mostly genetic), heritability of variation, and differential survival or reproduction depending on the variation. Over generations, individuals whose phenotypes confer an advantage in a given environment leave more offspring, so advantageous alleles increase in frequency. Examples: peppered moths darkening in industrial Britain; antibiotic resistance in bacteria; pesticide resistance in insects; rapid evolution of viruses such as flu and COVID-19. Speciation is the formation of new species. Allopatric speciation: populations are physically separated (mountains, sea, ice), gene flow stops, and they diverge through mutation, drift and selection in different environments until they can no longer interbreed. Galápagos finches are a classic example. Sympatric speciation: populations diverge without physical separation, often through ecological or genetic differences. Polyploidy in plants — chromosome doubling producing instant new species — is common; many crops (wheat, cotton) arose this way. Apple maggot flies in North America illustrate early host-race formation. Both routes rely on the build-up of reproductive isolation between gene pools. Time scales vary: bacteria can evolve resistance in days, while complex animals usually need many generations. Evolution is therefore the result of natural selection (and other forces such as drift) acting on heritable variation produced by mutation and sexual reproduction.'
    },
  ],

  /* ─────────────────── B6.3 How is biodiversity affected by human activity? ─────────────────── */
  'B6.3': [
    {
      q: 'Discuss how human activities affect biodiversity and assess strategies to protect it.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Biodiversity is the variety of all the species in an area or on Earth. Human activities reduce biodiversity. Habitat destruction (deforestation, urbanisation, draining wetlands) removes the spaces species need. Climate change driven by burning fossil fuels alters temperature and rainfall, shifting habitats and threatening species that cannot adapt. Pollution (eutrophication, plastic, acid rain, pesticides) damages ecosystems. Overexploitation through hunting, fishing and the wildlife trade depletes populations. Introduction of non-native (invasive) species can outcompete or predate locals. Effects of declining biodiversity: collapse of food webs, loss of pollinators (threatening crops), reduced ecosystem services (water purification, flood control, carbon storage), loss of potential medicines. Strategies: protect habitats through national parks and reserves; restore degraded land (reforestation, wetland restoration); manage fisheries, hunting and trade sustainably (CITES, MSC); reduce greenhouse gas emissions and pollution; control invasive species; conserve species ex situ in zoos, captive breeding and seed banks; educate the public; international cooperation through agreements like the Convention on Biological Diversity. Local schemes (community gardens, hedgerow planting) and global agreements both help. Despite efforts, biodiversity continues to decline at unprecedented rates, suggesting more ambitious action is needed across agriculture, energy and consumption patterns. Recognising biodiversity as essential for human as well as ecological wellbeing is central to long-term solutions.'
    },
  ],

};
