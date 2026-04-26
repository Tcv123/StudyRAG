/*
 * OCR A GCSE Biology (J247) Gateway — Diagnostic WRITTEN Question Bank
 * Written/extended-response questions used by the diagnostic page.
 * The diagnostic engine guarantees at least one written question per attempt.
 * Each tier (green/amber/red) provides a small pool of written prompts with model answers.
 */

const BIOLOGY_OCR_A_GCSE_WRITTEN = {

  'B1.1': {
    name: 'Cell Structures',
    green: [
      { q: 'State three structures found in a plant cell that are not found in an animal cell.', marks: 3, modelAnswer: 'Cell wall (cellulose) (1); chloroplasts (containing chlorophyll) (1); permanent (large) vacuole containing cell sap (1).' },
      { q: 'Define the term magnification and write the formula for calculating it.', marks: 2, modelAnswer: 'Magnification is how many times larger an image is compared with the real (actual) size of the object (1). Magnification = image size ÷ real (actual) size (1).' },
    ],
    amber: [
      { q: 'A cell measures 30 mm in an image taken at ×600 magnification. Calculate the actual size of the cell in micrometres (μm). Show your working.', marks: 3, modelAnswer: 'Real size = image size ÷ magnification (1). 30 mm ÷ 600 = 0.05 mm (1). 0.05 mm × 1000 = 50 μm (1).' },
      { q: 'Describe two adaptations of a sperm cell and explain how each helps it carry out its function.', marks: 4, modelAnswer: 'Tail/flagellum allows the sperm to swim towards the egg (1). Many mitochondria release the energy/ATP needed for the tail to beat (1). Acrosome contains digestive enzymes that break through the outer layer of the egg (1). Haploid nucleus contains only 23 chromosomes so that fertilisation restores the diploid number (1).' },
    ],
    red: [
      { q: 'Compare the structure of a typical eukaryotic cell with that of a prokaryotic cell. Explain how the differences relate to their level of organisation.', marks: 6, modelAnswer: '• Eukaryotic cells contain a true (membrane-bound) nucleus; prokaryotic cells do not — DNA is a single loop in the cytoplasm with extra small loops (plasmids) (1).\n• Eukaryotic cells contain membrane-bound organelles (mitochondria, chloroplasts, ER); prokaryotic cells do not — reactions take place in the cytoplasm (1).\n• Eukaryotic cells are much larger (10–100 μm) than prokaryotic cells (0.1–5 μm) (1).\n• Both cells contain ribosomes, cytoplasm and a cell membrane — these basic features are common to all life (1).\n• Plant/eukaryotic cell wall is cellulose; prokaryotic wall is peptidoglycan (1).\n• The compartmentalisation of eukaryotes allows specialisation and multicellular organisation; prokaryotes are unicellular and rely on rapid division (1).' },
    ],
  },
  'B1.2': {
    name: 'What Happens in Cells',
    green: [
      { q: 'State the four bases found in DNA and the rules for complementary base pairing.', marks: 3, modelAnswer: 'Adenine (A), Thymine (T), Cytosine (C), Guanine (G) (1). A pairs with T (1). G pairs with C (1).' },
      { q: 'Define the term enzyme.', marks: 2, modelAnswer: 'A biological catalyst (1) — a protein that speeds up chemical reactions inside living organisms without being used up itself (1).' },
    ],
    amber: [
      { q: 'Describe the lock-and-key model of enzyme action.', marks: 3, modelAnswer: 'The substrate has a complementary shape to the active site of the enzyme (1). The substrate binds to the active site forming an enzyme-substrate complex (1). The reaction occurs and the products are released; the enzyme is unchanged and can bind to another substrate (1).' },
      { q: 'Explain the effect of temperature on the rate of an enzyme-controlled reaction. Refer to changes both below and above the optimum.', marks: 4, modelAnswer: 'Below the optimum, increasing temperature gives molecules more kinetic energy (1) so they collide more often with greater energy, increasing the rate (1). At the optimum (~37 °C in humans) rate is highest (1). Above the optimum the enzyme denatures — bonds in the active site break and its shape changes — so the substrate can no longer bind, and rate falls sharply (1).' },
    ],
    red: [
      { q: 'A scientist investigates the effect of pH on amylase using buffer solutions and the iodine test. Describe how she could obtain valid results, including how to calculate the rate of reaction. (6 marks)', marks: 6, modelAnswer: '• Use buffer solutions to maintain different pHs (e.g. pH 3, 5, 7, 9, 11) (1).\n• Mix equal volumes of starch, amylase and buffer at a constant temperature (e.g. 37 °C in a water bath) (1).\n• Every 30 s, take a drop of mixture and add to iodine on a spotting tile (1).\n• Time how long until iodine no longer turns blue-black (no starch left) (1).\n• Repeat 3 times at each pH and calculate a mean (improves precision) (1).\n• Rate = 1 ÷ time taken — plot against pH; the highest rate identifies the optimum pH (~7 for amylase) (1).' },
    ],
  },
  'B1.3': {
    name: 'Respiration',
    green: [
      { q: 'Write the word equation for aerobic respiration and state where it takes place in the cell.', marks: 3, modelAnswer: 'Glucose + oxygen → carbon dioxide + water (+ energy) (1 for reactants, 1 for products). Takes place in the mitochondria (1).' },
      { q: 'State two products of anaerobic respiration in yeast and one industrial use of this process.', marks: 3, modelAnswer: 'Ethanol (1) and carbon dioxide (1). Used in brewing (beer/wine) for the alcohol, or in bread-making for the CO₂ to make dough rise (1).' },
    ],
    amber: [
      { q: 'Explain why an athlete continues to breathe heavily for several minutes after a sprint.', marks: 4, modelAnswer: 'During the sprint, oxygen demand exceeds supply (1) so muscle cells respire anaerobically, producing lactic acid (1). After exercise, extra oxygen is needed to break down the lactic acid (the "oxygen debt") (1). Heart rate and breathing rate stay high to deliver this oxygen until the lactic acid is fully broken down to CO₂ and water (1).' },
      { q: 'A sealed jar contains germinating peas, soda lime (which absorbs CO₂) and an indicator liquid in a side tube. After 5 minutes, the liquid moves towards the peas. Explain.', marks: 3, modelAnswer: 'Germinating peas respire aerobically, using up oxygen (1). The CO₂ they release is absorbed by the soda lime (1). The pressure inside the jar therefore falls and atmospheric pressure pushes the indicator liquid towards the peas (1).' },
    ],
    red: [
      { q: 'Compare aerobic and anaerobic respiration in terms of reactants, products, location and energy yield. Explain why aerobic respiration releases more energy. (6 marks)', marks: 6, modelAnswer: '• Aerobic uses oxygen; anaerobic does not (1).\n• Aerobic products: CO₂ + H₂O; anaerobic in animals: lactic acid; in yeast: ethanol + CO₂ (1).\n• Aerobic occurs in mitochondria; anaerobic in the cytoplasm (1).\n• Aerobic releases ~30 ATP per glucose; anaerobic only ~2 ATP (1).\n• Aerobic fully oxidises glucose to CO₂ and water — extracts the maximum chemical energy (1).\n• Anaerobic only partially breaks down glucose, so most of its chemical energy is left in the lactic acid or ethanol products (1).' },
    ],
  },
  'B1.4': {
    name: 'Photosynthesis',
    green: [
      { q: 'Write the word equation for photosynthesis and state where it takes place in the cell.', marks: 3, modelAnswer: 'Carbon dioxide + water → glucose + oxygen (1) (light energy and chlorophyll above the arrow) (1). Takes place in the chloroplasts (1).' },
      { q: 'List three uses of glucose by a plant.', marks: 3, modelAnswer: 'Respiration to release energy (1). Stored as starch / converted to cellulose for cell walls (1). Combined with nitrate ions to make amino acids and proteins for growth (1). (Also accept storage as oils/lipids in seeds.)' },
    ],
    amber: [
      { q: 'A student moves a lamp from 10 cm to 30 cm away from pondweed. Use the inverse square law to calculate by what factor the light intensity changes, and predict the effect on rate of photosynthesis (assume light is the limiting factor).', marks: 4, modelAnswer: 'Distance ratio = 30 ÷ 10 = 3 (1). Light intensity ∝ 1/distance² (1). New light intensity = 1/3² = 1/9 of original (1). If light is the limiting factor, the rate of photosynthesis would also fall to about 1/9 of the original rate (1).' },
      { q: 'Explain how the structure of a typical plant leaf is adapted for photosynthesis.', marks: 4, modelAnswer: 'Broad and flat — large surface area to absorb light (1). Thin — short diffusion distance for CO₂ to reach chloroplasts (1). Palisade mesophyll cells packed with chloroplasts at the top of the leaf where light intensity is greatest (1). Stomata in the lower epidermis allow CO₂ in and O₂ out; air spaces in spongy mesophyll allow gas movement (1). (Also accept: waxy cuticle reduces water loss; veins carry water in and glucose out.)' },
    ],
    red: [
      { q: 'A commercial greenhouse owner wants to maximise yield from tomato plants. Discuss how she could control three limiting factors and evaluate the practical and economic considerations of each. (6 marks)', marks: 6, modelAnswer: '• Light: install artificial lighting to extend the day length and provide higher light intensity in winter — increases photosynthesis but uses electricity (cost) (1).\n• Temperature: heaters maintain optimum (~25 °C) for the enzymes — increases rate but uses fuel and risks denaturing enzymes if too hot (1).\n• CO₂: pump in CO₂ (e.g. from burners or cylinders) — directly raises rate when CO₂ is limiting; cost of equipment (1).\n• Combine: optimum is to push each factor only as far as economically worthwhile — diminishing returns mean extra inputs eventually fail to repay their cost (1).\n• Other: water and nitrate fertilisers must be sufficient or these become the new limiting factor (1).\n• Evaluation: total yield rises but profit margins must be calculated against energy/CO₂ costs and crop value (1).' },
    ],
  },
  'B2.1': {
    name: 'Supplying the Cell',
    green: [
      { q: 'Define osmosis and give one example in a living organism.', marks: 3, modelAnswer: 'Net movement of water (1) across a partially permeable membrane (1) from a region of higher water potential to lower water potential. Example: water entering root hair cells from the soil; or water entering red blood cells in pure water (1).' },
      { q: 'State two differences between diffusion and active transport.', marks: 2, modelAnswer: 'Diffusion is movement down a concentration gradient (high → low); active transport is against the gradient (low → high) (1). Diffusion is passive; active transport requires energy (ATP) from respiration and uses carrier proteins (1).' },
    ],
    amber: [
      { q: 'A potato cylinder placed in pure water gains mass; one in 1.0 mol/dm³ sucrose loses mass. Explain both observations using the term "water potential".', marks: 4, modelAnswer: 'Pure water has a higher water potential than the potato cell sap (1) so water moves into the cells by osmosis — cells become turgid and the cylinder gains mass (1). 1.0 mol/dm³ sucrose has a lower water potential than the cell sap (1) so water leaves the cells by osmosis — cells become plasmolysed and the cylinder loses mass (1).' },
      { q: 'Describe the cell cycle including the events that occur during mitosis. (5 marks)', marks: 5, modelAnswer: 'Interphase: cell grows, organelles are copied, DNA replicates so each chromosome now has two sister chromatids (1). Prophase: chromosomes condense and become visible (1). Metaphase: chromosomes line up at the equator (1). Anaphase: sister chromatids are pulled to opposite poles by spindle fibres (1). Telophase + cytokinesis: two new nuclei form and the cytoplasm divides, producing two genetically identical diploid daughter cells (1).' },
    ],
    red: [
      { q: 'Discuss the use of stem cells in medicine, including potential benefits and ethical / scientific concerns. (6 marks)', marks: 6, modelAnswer: '• Embryonic stem cells are pluripotent — they can become any cell type, so they can potentially treat a huge range of conditions (e.g. diabetes, paralysis, blindness, leukaemia) (1).\n• Adult stem cells (e.g. from bone marrow) are limited in the cell types they can produce but raise fewer ethical concerns and are routinely used in bone marrow transplants (1).\n• Therapeutic cloning could allow creation of cells genetically identical to the patient — no risk of rejection (1).\n• Ethical concerns: embryonic stem cells require destruction of human embryos — many people view this as the destruction of life (1).\n• Scientific concerns: risk of immune rejection, viral contamination, and uncontrolled division leading to tumour formation (1).\n• Conclusion: balance is required — stem cell therapy offers life-changing potential but its development is constrained by both ethical debate and the need for rigorous safety testing (1).' },
    ],
  },
  'B2.2': {
    name: 'The Challenges of Size',
    green: [
      { q: 'Name the four chambers of the heart and the four blood vessels connected to it.', marks: 4, modelAnswer: 'Chambers: right atrium, right ventricle, left atrium, left ventricle (1 mark for any 2). Vessels: vena cava (deoxy in to right atrium), pulmonary artery (deoxy out to lungs), pulmonary vein (oxy in to left atrium), aorta (oxy out to body) (3 marks for all 4 vessels in correct context).' },
      { q: 'List four factors that affect the rate of transpiration.', marks: 4, modelAnswer: 'Temperature (1). Light intensity (1). Wind speed / air movement (1). Humidity (1).' },
    ],
    amber: [
      { q: 'Explain how the alveoli are adapted for efficient gas exchange.', marks: 4, modelAnswer: 'There are very many alveoli — giving a huge total surface area (~70 m²) (1). Walls are one cell thick — short diffusion distance (1). Surrounded by a network of capillaries — maintains a steep concentration gradient (1). Lining is moist so gases can dissolve before diffusing (1). (Also accept: ventilation maintained by ribs/diaphragm.)' },
      { q: 'Compare the structure and function of an artery, a vein and a capillary.', marks: 4, modelAnswer: 'Artery — thick muscular elastic wall, narrow lumen, carries blood under high pressure away from the heart (1). Vein — thinner wall, wider lumen, carries blood at low pressure to the heart, has valves to prevent backflow (1). Capillary — wall one cell thick, very narrow lumen, allows exchange of substances with body cells by diffusion (1). All three together form the circulatory system that supplies tissues and removes wastes (1).' },
    ],
    red: [
      { q: 'A student uses a potometer to investigate how wind speed affects the rate of transpiration. Describe a method that produces valid and reproducible results, and explain how the data should be analysed. (6 marks)', marks: 6, modelAnswer: '• Cut the leafy shoot underwater and attach to the potometer to avoid air bubbles in the xylem (1).\n• Ensure all joints are airtight (Vaseline) and allow the plant to equilibrate for 5 minutes (1).\n• Introduce an air bubble and time how long it takes to move a set distance (e.g. 5 cm) — calculate rate = distance ÷ time (1).\n• Vary wind speed using a fan at different distances or settings; keep all other variables constant (temperature, humidity, light, leaf area) (1).\n• Repeat each condition 3 times; calculate a mean rate to reduce random error (1).\n• Plot rate (y) against wind speed (x); higher wind speed maintains a steeper gradient by removing humid air around the leaf, so transpiration increases (1).' },
    ],
  },
  'B3.1': {
    name: 'Coordination — Nervous System',
    green: [
      { q: 'Define a reflex action and give two examples.', marks: 3, modelAnswer: 'A rapid, automatic, involuntary response to a stimulus that does not involve the conscious brain (1). Example 1: pulling hand away from a hot object (1). Example 2: pupil constricting in bright light / blinking when something approaches the eye / knee-jerk reflex (1).' },
      { q: 'Name the parts of the eye that control how much light enters and where the light is focused.', marks: 3, modelAnswer: 'Iris controls how much light enters by changing the size of the pupil (1). Cornea refracts light entering the eye (1). Lens fine-focuses light onto the retina (the light-sensitive layer at the back of the eye) (1).' },
    ],
    amber: [
      { q: 'Describe the reflex arc that occurs when you accidentally touch a hot pan and pull your hand away.', marks: 5, modelAnswer: 'Heat receptors in the skin detect the high temperature (stimulus) (1). A sensory neurone carries the impulse to the spinal cord (CNS) (1). A relay neurone in the spinal cord passes the impulse to a motor neurone (1). The motor neurone carries the impulse to the arm muscles (effector) (1). The muscle contracts, pulling the hand away (response). The reflex bypasses the conscious brain so the response is fast and protective (1).' },
      { q: 'Describe how the lens changes shape to focus on a near object and on a distant object.', marks: 4, modelAnswer: 'Near object: ciliary muscles contract (1), suspensory ligaments slacken so the lens becomes fatter / more rounded — refracts light strongly to focus on the retina (1). Distant object: ciliary muscles relax (1), suspensory ligaments tighten and the lens is pulled thinner — refracts light less so a distant image focuses on the retina (1).' },
    ],
    red: [
      { q: 'A student investigates whether caffeine reduces reaction time. Describe a method using the ruler-drop test, stating the variables to control, the data to record, and how the results should be interpreted. (6 marks)', marks: 6, modelAnswer: '• Person A holds a 30 cm ruler vertically just above person B\'s open hand and drops it without warning; B closes their hand to catch the ruler (1).\n• Record the distance the ruler falls in cm; convert to time using t = √(2d/g) or a calibrated chart (1).\n• Repeat 5 times before drinking the caffeinated drink and 5 times after a fixed time interval; calculate mean reaction time before and after (1).\n• Control variables: same person/group, same starting position of ruler, same hand, same room temperature and lighting, same time of day to minimise tiredness effects (1).\n• Compare means: a shorter reaction time after caffeine suggests caffeine speeds up nervous transmission (a stimulant effect) (1).\n• Limitations: small sample size, placebo effect, individual variation; large groups and double-blind trials would give more reliable conclusions (1).' },
    ],
  },
  'B3.2': {
    name: 'Coordination — Endocrine System',
    green: [
      { q: 'Name the four hormones that control the menstrual cycle and state where each is produced.', marks: 4, modelAnswer: 'FSH from the pituitary gland (1). LH from the pituitary gland (1). Oestrogen from the ovaries (1). Progesterone from the ovaries (1).' },
      { q: 'State two differences between Type 1 and Type 2 diabetes.', marks: 2, modelAnswer: 'Type 1 — pancreas does not produce enough insulin (often autoimmune); usually childhood onset; treated by insulin injections (1). Type 2 — body cells become resistant to insulin; usually adult onset, linked to obesity/lifestyle; usually treated by lifestyle change first, then medication (1).' },
    ],
    amber: [
      { q: 'Describe how blood glucose concentration is controlled when it rises after a meal and when it falls after exercise.', marks: 5, modelAnswer: 'Pancreas detects high blood glucose and releases insulin (1). Insulin causes liver and muscle cells to take up glucose from the blood (1). Glucose is stored as glycogen — blood glucose returns to normal (1). When blood glucose falls (e.g. exercise), pancreas releases glucagon (1). Glucagon causes liver to convert glycogen back to glucose, releasing it to the blood — restores normal levels (1).' },
      { q: 'Describe how the combined oral contraceptive pill prevents pregnancy and explain one advantage and one disadvantage.', marks: 4, modelAnswer: 'Pill contains oestrogen and progesterone (1). These inhibit FSH release from the pituitary, so no eggs mature and ovulation does not occur (1). Advantage: very effective (>99%) when taken correctly, regulates cycle (1). Disadvantage: must be taken daily; may have side effects (mood, weight, blood clots); does not protect against STIs (1).' },
    ],
    red: [
      { q: 'Discuss the use of in vitro fertilisation (IVF) as a treatment for infertility, including the steps involved and the ethical/practical issues. (6 marks)', marks: 6, modelAnswer: '• The woman is given FSH and LH to stimulate maturation of multiple eggs (1).\n• Eggs are collected from the ovaries (1).\n• Eggs are fertilised in a lab dish with sperm (from partner or donor); embryos develop for 2–5 days (1).\n• One or two embryos are inserted into the womb where they may implant (1).\n• Practical issues: ~30% success rate, requires repeated cycles, high cost; risk of multiple births (twins/triplets) which carry risk for mother and babies (1).\n• Ethical issues: spare embryos may be destroyed or used for research — religious/moral objections; access often depends on age, cost or postcode — fairness questions (1).' },
    ],
  },
  'B3.3': {
    name: 'Maintaining Internal Environments',
    green: [
      { q: 'Define homeostasis and state two examples of conditions kept constant in humans.', marks: 3, modelAnswer: 'The maintenance of a constant internal environment despite changes in external/internal conditions (1). Examples: body temperature held near 37 °C (1); blood glucose concentration; water/ion balance (1).' },
      { q: 'Name the hormone that controls water reabsorption in the kidneys and state where it is produced.', marks: 2, modelAnswer: 'ADH (anti-diuretic hormone) (1). Released by the pituitary gland (1).' },
    ],
    amber: [
      { q: 'Describe the changes that take place in the body when it becomes too cold.', marks: 4, modelAnswer: 'Shivering — muscles contract rapidly which releases heat through respiration (1). Vasoconstriction — arterioles supplying skin capillaries narrow, so less blood flows near the surface and less heat is lost (1). Hairs stand on end (erector muscle contracts) trapping a layer of insulating air (1). Sweating decreases or stops (1).' },
      { q: 'Describe how auxin causes a plant shoot to bend towards a one-sided light source.', marks: 4, modelAnswer: 'Auxin is produced at the shoot tip (1). When light shines from one side, auxin moves to (and is more concentrated on) the SHADED side (1). Auxin promotes cell elongation, so the cells on the shaded side grow longer than those on the lit side (1). The shoot therefore bends TOWARDS the light — this is positive phototropism (1).' },
    ],
    red: [
      { q: 'Compare and evaluate the use of dialysis and a kidney transplant as treatments for kidney failure. (6 marks)', marks: 6, modelAnswer: '• Dialysis: blood is passed through a machine where toxins and excess water are removed across a partially permeable membrane (1). It is available without a donor and avoids surgery, but requires several long sessions per week, restricts diet, and is expensive in the long term (1).\n• Transplant: a donor kidney is implanted by surgery (1). Pros: cures the condition, restores quality of life, and often cheaper long-term (1).\n• Cons: shortage of donors; surgery carries risk; recipient must take immunosuppressants for life to prevent rejection — increases vulnerability to infection (1).\n• Evaluation: transplant is the better long-term solution for most patients, but dialysis is essential as a short-term/bridging treatment, and for those who cannot have a transplant (1).' },
    ],
  },
  'B4.1': {
    name: 'Ecosystems',
    green: [
      { q: 'Define the terms population, community and ecosystem.', marks: 3, modelAnswer: 'Population — all members of one species in a habitat (1). Community — all the populations of different species living in a habitat (1). Ecosystem — a community plus the abiotic (non-living) environment, interacting (1).' },
      { q: 'Name the four main types of bacteria involved in the nitrogen cycle and state their roles.', marks: 4, modelAnswer: 'Nitrogen-fixing bacteria — convert atmospheric N₂ into ammonium / nitrates (1). Decomposers — break down dead matter, releasing ammonium (1). Nitrifying bacteria — convert ammonium to nitrites and then to nitrates (the form plants absorb) (1). Denitrifying bacteria — convert nitrates back to N₂ (released to the atmosphere; common in waterlogged anaerobic soils) (1).' },
    ],
    amber: [
      { q: 'A 0.5 m × 0.5 m quadrat is used to sample dandelions in a 1000 m² field. The mean number of dandelions per quadrat is 6. Calculate the estimated total number of dandelions and explain why several quadrats are placed at random.', marks: 4, modelAnswer: 'Area of quadrat = 0.5 × 0.5 = 0.25 m² (1). Multiplier = 1000 ÷ 0.25 = 4000 (1). Estimated total = 6 × 4000 = 24 000 dandelions (1). Random placement avoids bias and gives a representative estimate of the whole field (1).' },
      { q: 'Describe the typical predator-prey cycle and explain the lag observed in predator population peaks.', marks: 4, modelAnswer: 'When prey numbers are high, predators have plenty of food, reproduce more and predator numbers rise (1). Increased predation reduces prey numbers (1). With less food, predator numbers fall — and prey numbers recover — producing oscillations (1). The predator peak lags behind the prey peak because it takes time for the predator population to grow in response to the increased food supply (1).' },
    ],
    red: [
      { q: 'Discuss how human activities can disturb the carbon cycle and explain the consequences for the global climate. (6 marks)', marks: 6, modelAnswer: '• Burning fossil fuels (coal, oil, gas) releases carbon (locked away over millions of years) as CO₂ to the atmosphere (1).\n• Deforestation removes trees that would otherwise absorb CO₂ via photosynthesis; burning the trees adds further CO₂ (1).\n• Together these activities increase atmospheric CO₂ above the levels the natural cycle can re-absorb (1).\n• CO₂ is a greenhouse gas that traps infrared radiation, increasing the average global temperature (greenhouse effect) (1).\n• Consequences include melting ice, rising sea levels, more extreme weather, shifting habitats and increased ocean acidification (1).\n• Mitigation: switch to renewable energy, reforest, capture and store CO₂ — needed to bring the cycle back into balance (1).' },
    ],
  },
  'B5.1': {
    name: 'Inheritance',
    green: [
      { q: 'Define homozygous and heterozygous, and state the difference between genotype and phenotype.', marks: 4, modelAnswer: 'Homozygous: both alleles for a gene are the same (e.g. BB or bb) (1). Heterozygous: the two alleles are different (e.g. Bb) (1). Genotype: the combination of alleles an organism has (1). Phenotype: the physical characteristic shown (1).' },
      { q: 'State the chromosome composition of a male and female human cell, and explain how the sex of a baby is determined.', marks: 3, modelAnswer: 'Male: XY; Female: XX (1). Eggs all carry an X chromosome; sperm carry either X or Y (1). Whether the sperm fertilising the egg carries an X (giving XX, female) or Y (giving XY, male) determines the sex; ratio is approximately 1:1 (1).' },
    ],
    amber: [
      { q: 'In garden peas, tall (T) is dominant over short (t). Two heterozygous plants are crossed (Tt × Tt). Use a Punnett square to predict the genotype and phenotype ratios of the offspring.', marks: 5, modelAnswer: 'Punnett square:\n     T     t\nT  TT   Tt\nt   Tt    tt\n(1 mark for correct gametes, 1 for correct genotypes).\nGenotype ratio = 1 TT : 2 Tt : 1 tt (1).\nPhenotype ratio = 3 tall : 1 short (1).\nProbability tall = 75%; probability short = 25% (1).' },
      { q: 'Cystic fibrosis is caused by a recessive allele. Two parents are carriers (Ff × Ff). Calculate the probability of having a child who: (a) is affected, (b) is a carrier, (c) is unaffected and not a carrier.', marks: 4, modelAnswer: 'Punnett square: FF, Ff, Ff, ff (1). (a) Affected (ff) = 1 in 4 = 25% (1). (b) Carrier (Ff) = 2 in 4 = 50% (1). (c) Unaffected and not a carrier (FF) = 1 in 4 = 25% (1).' },
    ],
    red: [
      { q: 'Genetic engineering can be used to insert a human gene (e.g. for insulin) into bacteria so they produce the protein. Outline the steps involved and discuss the benefits and concerns of this technology. (6 marks)', marks: 6, modelAnswer: '• Identify and cut out the human gene for insulin using restriction enzymes (1).\n• Insert into a bacterial plasmid using ligase enzyme; plasmid acts as a vector (1).\n• Transform bacteria with the plasmid; antibiotic resistance markers identify successful transformations (1).\n• Bacteria multiply rapidly, producing large quantities of human insulin that is identical to natural insulin (1).\n• Benefits: continuous supply, no risk of rejection, suitable for vegetarians, no animal use; treats diabetes effectively (1).\n• Concerns: ethical issues about modifying living organisms; long-term effects unknown; risk of unintended gene transfer; commercial control via patents (1).' },
    ],
  },
  'B5.2': {
    name: 'Natural Selection & Evolution',
    green: [
      { q: 'Define evolution and name the scientist who first proposed evolution by natural selection.', marks: 3, modelAnswer: 'Evolution is a change in the inherited characteristics of a population over many generations through natural selection (1+1). Proposed by Charles Darwin (in 1859, in On the Origin of Species) (1).' },
      { q: 'State four pieces of evidence for evolution.', marks: 4, modelAnswer: 'Fossils — show how species have changed over time (1). Antibiotic-resistant bacteria — direct observation of natural selection (1). Comparative anatomy — e.g. pentadactyl limb in mammals shows common ancestor (1). DNA sequencing — closely related species have similar DNA (1).' },
    ],
    amber: [
      { q: 'Describe how MRSA evolved resistance to antibiotics.', marks: 5, modelAnswer: 'Random mutations in some bacteria gave them resistance to an antibiotic (1). When the antibiotic was used, the resistant bacteria survived while non-resistant ones were killed (1). The resistant bacteria reproduced rapidly by binary fission, passing on the resistance allele (1). Over generations, the population became dominated by resistant bacteria (1). Resistance can also spread between bacteria via plasmids (horizontal gene transfer), accelerating the spread (1).' },
      { q: 'Describe how speciation can occur when a population is geographically isolated.', marks: 5, modelAnswer: 'A geographical barrier (e.g. river, mountain) divides one population into two (1). Each isolated population experiences different environmental conditions and selection pressures (1). Different mutations and selection lead to different alleles being favoured in each (1). Over many generations, the populations become genetically very different (1). Eventually they are so different that they can no longer interbreed to produce fertile offspring — they have become two new species (1).' },
    ],
    red: [
      { q: 'Discuss the development of antibiotic resistance, explaining how it arises, why it is a public health problem, and what can be done to slow it. (6 marks)', marks: 6, modelAnswer: '• Bacteria reproduce extremely rapidly (every ~20 min); random mutations in their DNA occasionally produce resistance to an antibiotic (1).\n• When an antibiotic is used, susceptible bacteria are killed but resistant ones survive and reproduce — over generations the population becomes dominated by resistant bacteria (1).\n• Resistance genes can spread between bacteria (even between species) via plasmids — accelerating the problem (1).\n• Public health concern: previously treatable infections (TB, MRSA, gonorrhoea) become harder or impossible to cure; surgical, cancer and transplant medicine relies on antibiotics (1).\n• Slowing the spread: doctors should only prescribe antibiotics for bacterial (not viral) illnesses, and patients must finish the full course (so even partially-resistant bacteria are killed) (1).\n• Reduce use in farming; develop new antibiotics; use vaccines to prevent infection in the first place; improve hygiene/infection control in hospitals (1).' },
    ],
  },
  'B6.1': {
    name: 'Monitoring & Maintaining the Environment',
    green: [
      { q: 'Define biodiversity and explain why high biodiversity is important.', marks: 3, modelAnswer: 'Biodiversity is the variety of living organisms in an ecosystem (1). High biodiversity makes ecosystems more stable and resilient against change or disease (1). Provides ecosystem services such as pollination, water purification and climate regulation, plus future medical/food value (1).' },
      { q: 'Name two indicator species and state what each indicates.', marks: 4, modelAnswer: 'Lichens — sensitive to SO₂ in the air, so abundance indicates clean air; few = polluted (1+1). Mayfly nymphs — found in clean, well-oxygenated water; absent = polluted (1+1). (Other valid pairs accepted.)' },
    ],
    amber: [
      { q: 'A scientist uses mark-release-recapture to estimate woodlouse population. They marked 60 woodlice. The next day they captured 80 woodlice and 12 were marked. Calculate the estimated population and state two assumptions made.', marks: 4, modelAnswer: 'N = (n₁ × n₂) ÷ marked recaptured = (60 × 80) ÷ 12 (1) = 400 woodlice (1). Assumptions: no births/deaths/migration between samples (1); marking does not affect survival or behaviour, and marked individuals mix randomly with the population (1).' },
      { q: 'Describe the process of eutrophication of a freshwater pond and its consequences.', marks: 5, modelAnswer: 'Excess fertiliser (nitrate/phosphate) is washed into the pond from nearby fields (1). Algae grow rapidly producing an algal bloom on the surface, which blocks light from reaching submerged plants (1). Submerged plants cannot photosynthesise and die (1). Bacteria decompose the dead plants and use up oxygen in respiration (1). Fish and other aerobic organisms suffocate as oxygen levels fall — biodiversity collapses (1).' },
    ],
    red: [
      { q: 'Discuss methods of conserving biodiversity, evaluating their advantages and limitations. (6 marks)', marks: 6, modelAnswer: '• Captive breeding programmes in zoos — increase numbers of endangered species and educate the public, but small populations risk inbreeding and captive-bred animals may struggle in the wild (1).\n• Seed banks preserve plant genetic material indefinitely — but cannot replace lost ecosystems and only useful if habitat remains for future reintroduction (1).\n• Protected areas / national parks — preserve large ecosystems and restrict harmful activities, but enforcement is expensive and may conflict with local livelihoods (1).\n• Sustainable fishing (quotas, mesh size, closed seasons) and fisheries protected zones — allow stocks to recover but require international agreement (1).\n• Reducing deforestation and replanting native trees — restores habitat and locks up carbon, but slow process and competes with farming demand (1).\n• Education and ecotourism — raises awareness and provides funding, but tourism itself can damage habitat. Ultimately, multiple approaches together work best, balancing conservation with human needs (1).' },
    ],
  },
  'B6.2': {
    name: 'Feeding the Human Race',
    green: [
      { q: 'State three threats to global food security and explain why each is a problem.', marks: 3, modelAnswer: 'Population growth — more people to feed each year (1). Climate change — extreme weather damages crops and shifts growing seasons (1). Changing diets (more meat) — meat needs ~10× more land than plant food, putting pressure on land and resources (1).' },
      { q: 'Define genetic engineering and give an example of a GM crop and what it does.', marks: 3, modelAnswer: 'Genetic engineering is the process of transferring a gene from one organism to another to give the recipient a desired characteristic (1). Example: Golden Rice — engineered with genes from daffodil and a bacterium to make beta-carotene (1) — provides vitamin A to reduce blindness in children in poor regions (1). (Other valid GM examples accepted.)' },
    ],
    amber: [
      { q: 'Compare selective breeding and genetic engineering for crop improvement.', marks: 4, modelAnswer: 'Both produce organisms with desired characteristics (1). Selective breeding uses traits already present in the species — slow process over many generations; genetic engineering can introduce traits from any organism in a single generation (1). Selective breeding is widely accepted; genetic engineering raises ethical and environmental concerns (1). GM enables traits unavailable through breeding (e.g. bacterial toxins for pest resistance, vitamin synthesis), but requires expensive lab facilities (1).' },
      { q: 'Describe the steps of plant tissue culture (micropropagation) and state two uses.', marks: 5, modelAnswer: 'Take a few cells from the parent meristem (1). Place onto agar containing nutrients and plant hormones (auxin and cytokinin) (1). Cells divide and form a callus, then differentiate into roots and shoots (1). Plantlets transferred to soil — produces many genetically identical clones (1). Uses (any 2): mass-producing rare or disease-free plants; quickly multiplying GM/selectively-bred individuals (1).' },
    ],
    red: [
      { q: 'Discuss the production of GM crops, including the steps involved and the benefits and concerns. (6 marks)', marks: 6, modelAnswer: '• Identify the desired gene (e.g. for vitamin synthesis or pest resistance) in another organism, and cut it out using restriction enzymes (1).\n• Insert into a vector (e.g. plasmid in Agrobacterium), join using ligase (1).\n• Vector inserts the gene into the plant\'s cells; whole plants regenerated through tissue culture (1).\n• Benefits: higher yields, reduced pesticide use, improved nutrition (e.g. Golden Rice), drought/disease resistance — all support food security (1).\n• Concerns: long-term effects on health and environment unknown; gene transfer to wild plants could affect biodiversity; reliance on patented seeds raises ethical and economic issues for farmers (1).\n• Evaluation: GM is a powerful tool but should be used alongside selective breeding, sustainable land management and waste reduction; not a single solution to food security (1).' },
    ],
  },
  'B6.3': {
    name: 'Monitoring & Maintaining Health',
    green: [
      { q: 'Name the four main types of pathogen and give one disease caused by each.', marks: 4, modelAnswer: 'Bacteria — TB / cholera / Salmonella food poisoning (1). Viruses — flu / measles / HIV / COVID-19 (1). Fungi — athlete\'s foot / ringworm (1). Protists — malaria (1).' },
      { q: 'Define a vaccine and explain how it leads to immunity.', marks: 4, modelAnswer: 'A vaccine is a preparation of dead or weakened pathogens (or pathogen fragments) introduced into the body (1). Lymphocytes recognise the antigens and produce antibodies (1). Some lymphocytes become memory cells (1). On future exposure to the real pathogen, memory cells produce a fast, large antibody response — pathogen destroyed before causing disease (1).' },
    ],
    amber: [
      { q: 'Describe how monoclonal antibodies are produced and state two uses.', marks: 5, modelAnswer: 'A mouse is injected with the target antigen and its lymphocytes produce antibodies (1). The lymphocytes are extracted and fused with tumour cells (which divide indefinitely) to make hybridoma cells (1). Hybridomas divide rapidly producing identical, specific antibodies (1). Use 1: pregnancy tests detect hCG hormone in urine (1). Use 2: cancer treatment — mAbs deliver drugs/radiation directly to cancer cells, sparing healthy ones (or labelled mAbs help diagnose disease) (1).' },
      { q: 'Explain why antibiotics kill bacteria but not viruses, and discuss why overuse of antibiotics is a problem.', marks: 4, modelAnswer: 'Antibiotics target structures unique to bacteria (e.g. cell walls, ribosomes); viruses live inside host cells using host machinery, so there are no bacterial structures to target (1). Overuse selects for resistant bacteria — random mutations give resistance and antibiotic kills only susceptible bacteria, leaving resistant ones to multiply (1). Resistance can spread between bacteria via plasmids, even between species (1). Result: hard-to-treat "superbugs" (e.g. MRSA), threatening modern medicine (surgery, transplants depend on antibiotics) (1).' },
    ],
    red: [
      { q: 'Discuss the development and testing of a new drug, including the stages of clinical trials and the importance of using a placebo and a double-blind design. (6 marks)', marks: 6, modelAnswer: '• Pre-clinical: drug tested in cells, then tissues, then animals to assess toxicity, efficacy and dosage (1).\n• Clinical Phase I: small group of healthy volunteers, mainly checking safety and dose (1).\n• Clinical Phase II/III: tested on larger groups including patients with the condition; assesses both safety and effectiveness (1).\n• A placebo (fake treatment) is given to a control group to account for the psychological effect of being treated — only improvement above placebo level shows the drug works (1).\n• Double-blind: neither patient nor doctor knows who has real drug — prevents expectation bias from influencing results (1).\n• If trials succeed, drug is approved by regulators (e.g. NICE/MHRA in UK); long-term monitoring continues to detect rare side effects (Phase IV). Strict testing balances the urgency of new treatments against patient safety (1).' },
    ],
  },

};
