/*
 * Edexcel International GCSE Biology (4BI1) — AI Feedback Question Bank
 * Worded essay-style questions only, suitable for AI examiner-style marking.
 * Mark allocations: 6, 9, 12. Command words: Describe / Explain / Compare /
 * Discuss / Assess / Evaluate.
 */

const BIOLOGY_EDEXCEL_IGCSE_AI_FEEDBACK = {

  /* ─────────────────── 1.1 Characteristics & Variety of Living Organisms ─────────────────── */
  '1.1': [
    {
      q: 'Discuss the characteristics shared by all living organisms (MRS GREN) and assess whether viruses should be classified as living.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'All living organisms share seven key characteristics, often remembered as MRS GREN: Movement (active or as growth), Respiration (release of energy from chemicals), Sensitivity (responding to stimuli), Growth, Reproduction, Excretion (removing metabolic waste) and Nutrition (obtaining substances for energy and building tissues). Animals show all seven actively; plants do too, though some characteristics (movement) are subtle. Bacteria, fungi and protoctists also fit, performing each characteristic at the cellular level. Viruses are more controversial. They have genetic material (DNA or RNA) and can mutate and evolve, but they have no cells, no cytoplasm, no organelles and no metabolism of their own. They cannot respire, grow or move independently. They reproduce only inside host cells, hijacking cellular machinery. Most biologists therefore classify viruses outside the five kingdoms — they are not strictly alive in the traditional sense. The argument for "alive" rests on their ability to reproduce, evolve and have heritable information. The argument against rests on their dependence on host cells and lack of independent metabolism. Many biologists describe viruses as biological entities that exist on the borderline of life. The classification controversy reveals how our definition of "living" relies on a set of criteria that newer discoveries continually challenge.'
    },
    {
      q: 'Compare the five kingdoms of life and explain how organisms are classified.',
      marks: 6, command: 'Compare',
      modelAnswer: 'Living organisms are classified into five kingdoms based on cell structure and how they obtain food. Animalia are multicellular eukaryotes with no cell walls, that ingest food (heterotrophs) and are usually mobile. Plantae are multicellular eukaryotes with cellulose cell walls and chloroplasts, that make their own food by photosynthesis (autotrophs) and are usually stationary. Fungi are eukaryotes (mostly multicellular, some unicellular like yeast) with chitin cell walls; they are saprotrophs — secreting digestive enzymes outside the body and absorbing the products of digestion. Protoctista are mostly unicellular eukaryotes that are diverse and include amoeba and Paramecium (animal-like) and algae (plant-like). Prokaryotae (or bacteria) are unicellular prokaryotes with no nucleus, peptidoglycan cell walls and varied lifestyles. Beyond kingdoms, organisms are placed into a hierarchy: kingdom → phylum → class → order → family → genus → species. The binomial Genus species name (e.g. Homo sapiens) gives every organism a unique label. Species are usually defined as groups that can interbreed to produce fertile offspring. Modern classification increasingly uses DNA evidence, which has refined understanding of relationships and led to a three-domain system above kingdoms (Bacteria, Archaea, Eukarya) — but the five-kingdom scheme remains widely taught and useful at this level.'
    },
  ],

  /* ─────────────────── 2.1 Levels of Organisation & Cell Structure ─────────────────── */
  '2.1': [
    {
      q: 'Compare the structures of animal, plant and bacterial cells.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Animal and plant cells are eukaryotic with a true membrane-bound nucleus and other organelles. Both have a plasma membrane, cytoplasm, nucleus, mitochondria and 80S ribosomes. Plant cells additionally have a cellulose cell wall (giving shape and resisting turgor pressure), chloroplasts containing chlorophyll for photosynthesis, and a permanent vacuole filled with cell sap. Animal cells lack these. Bacterial cells are prokaryotic, much smaller (1–5 μm versus 10–100 μm) and simpler. They have a peptidoglycan cell wall, sometimes a slime capsule, and may have flagella for movement and pili for attachment. Their genetic material is a single circular DNA loop in the cytoplasm, plus small extra DNA loops (plasmids). Bacterial ribosomes are smaller (70S). Bacteria have no membrane-bound organelles. The differences reflect different evolutionary origins and lifestyles, but all share fundamental features: DNA, ribosomes and a plasma membrane that supports life.'
    },
    {
      q: 'Describe how a multicellular organism is organised from cells to organ systems.',
      marks: 6, command: 'Describe',
      modelAnswer: 'A multicellular organism is organised in a hierarchy. Cells are the building blocks; specialised cells (e.g. red blood cells, muscle cells, neurones) are adapted to particular functions. Tissues are groups of similar specialised cells working together — for example, muscle tissue (made of muscle cells), epithelial tissue (lining surfaces), nervous tissue (made of neurones). Organs are made of several different tissues working together to perform a specific function — for example, the heart contains muscle tissue, connective tissue, blood vessels and nervous tissue. Organ systems are groups of organs working together to perform a major task — for example, the digestive system (mouth, stomach, intestines, liver, pancreas) or the circulatory system (heart, blood vessels, blood). Several organ systems work together as the whole organism. This hierarchical organisation allows complex tasks (digestion, breathing, movement) to be carried out efficiently, with specialised cells optimised for their roles, and coordinated function across the body.'
    },
  ],

  /* ─────────────────── 2.2 Biological Molecules ─────────────────── */
  '2.2': [
    {
      q: 'Explain the structure and functions of carbohydrates, lipids and proteins, and describe the food tests for each.',
      marks: 12, command: 'Explain',
      modelAnswer: 'Carbohydrates contain carbon, hydrogen and oxygen in the ratio Cₙ(H₂O)ₙ. Monosaccharides like glucose are small sugars used in respiration. Disaccharides (sucrose, maltose) are storage and transport sugars. Polysaccharides include starch (plant energy store), glycogen (animal energy store) and cellulose (plant cell walls). Test for sugars: heat with Benedict\'s reagent — brick-red precipitate indicates reducing sugar (e.g. glucose); for non-reducing sugars (e.g. sucrose), boil with HCl first to break them down, then test. Test for starch: add iodine — blue-black colour indicates starch. Lipids (fats and oils) are made of glycerol and fatty acids; they store energy (more than twice as much per gram as carbohydrates), insulate the body, and form cell membranes (as phospholipids). Test: emulsion test — dissolve in ethanol, add water — milky-white emulsion indicates lipid. Proteins are polymers of amino acids; functions include enzymes (catalysts), structural roles (collagen, keratin), transport (haemoglobin), defence (antibodies) and signalling (some hormones). Each protein has a specific 3D shape. Test: add biuret reagent (alkaline copper sulphate) — purple/lilac colour indicates protein (blue = no protein). Together, these molecules support all life processes.'
    },
    {
      q: 'Discuss how enzymes work and assess how their activity is affected by environmental conditions.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Enzymes are biological catalysts — proteins that speed up chemical reactions in cells without being used up. Each enzyme has an active site complementary to a specific substrate (lock-and-key model, more accurately the induced-fit model). When the substrate enters, an enzyme-substrate complex forms; the enzyme catalyses the reaction by lowering activation energy, then releases the products. Enzymes are highly specific. Temperature: rate rises with temperature because molecules move faster, up to an optimum (around 37 °C in human enzymes). Above this, the enzyme begins to denature — bonds holding the active site break, the active site changes shape, and substrate no longer fits, so rate falls sharply. Below the optimum, rate is slow but the enzyme is not damaged. pH: each enzyme has an optimum pH at which the active site has the correct charge distribution to bind substrate. Pepsin in the stomach works best at pH 2; salivary amylase at pH 7; trypsin in the small intestine at pH 8. Beyond the optimum, the enzyme denatures. Substrate concentration also matters: rate rises with substrate up to a maximum when all active sites are saturated. Enzyme activity is exploited industrially (immobilised enzymes for cheese-making, lactose-free milk; biological detergents) and medically (testing for disease markers). Understanding enzymes is essential for understanding metabolism, disease, food preservation and biotechnology.'
    },
  ],

  /* ─────────────────── 2.3 Movement of Substances ─────────────────── */
  '2.3': [
    {
      q: 'Compare diffusion, osmosis and active transport.',
      marks: 9, command: 'Compare',
      modelAnswer: 'All three are processes by which substances move across cell membranes, but they differ in direction and energy. Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient. It is passive — no energy needed. Examples: O₂ entering and CO₂ leaving cells. Osmosis is a special case of diffusion — the movement of water molecules from a region of higher water potential (more dilute) to lower water potential (more concentrated) across a partially permeable membrane. It is also passive. Examples: water entering plant roots, kidney function. Active transport is the movement of substances against their concentration gradient, from low to high. It requires energy from respiration (ATP) and uses specific carrier proteins. Examples: uptake of mineral ions by root hair cells, glucose absorption from the small intestine when blood concentration is higher. Surface area, distance, gradient and temperature affect rates of diffusion and osmosis; active transport requires sufficient ATP and works as long as the cell respires. The three processes work together: passive processes are sustainable and work whenever a gradient exists, while active transport allows cells to accumulate solutes against gradients to maintain internal conditions.'
    },
    {
      q: 'Explain how the surface area to volume ratio affects the way organisms exchange substances.',
      marks: 6, command: 'Explain',
      modelAnswer: 'Surface area to volume ratio (SA:V) describes how much surface a cell or organism has relative to its size. Smaller cells and organisms have a high SA:V — every part is close to the surface. As size increases, volume grows faster than surface area (volume cubed, surface area squared), so SA:V falls. Implications: small organisms (single-celled or thin) can rely on simple diffusion across the body surface to exchange gases, water and nutrients — diffusion distances are short. As organisms get larger, diffusion alone is too slow to meet metabolic demand: oxygen would never reach interior cells in time. Large organisms therefore evolve specialised exchange surfaces (lungs in mammals, gills in fish, alveoli for gas exchange, villi in the gut for absorption) and mass transport systems (the circulatory system in animals; xylem and phloem in plants). All exchange surfaces share key features: large surface area, thin walls, moist surface, rich blood supply (or equivalent), and ventilation/circulation to maintain steep gradients. Without these adaptations, large multicellular life would be impossible — diffusion alone could not supply oxygen or nutrients to internal cells.'
    },
  ],

  /* ─────────────────── 2.4 Nutrition ─────────────────── */
  '2.4': [
    {
      q: 'Describe how food is digested in the human alimentary canal, and explain the roles of the enzymes involved.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Digestion breaks down large insoluble molecules into small soluble ones that can be absorbed. In the mouth, teeth chew food and saliva moistens it; salivary amylase begins to digest starch into maltose. Food is swallowed and passes down the oesophagus to the stomach, where stomach acid (HCl) provides pH 2 for the enzyme pepsin to begin digesting proteins into smaller polypeptides; the acid also kills most bacteria. Food then enters the small intestine. The pancreas releases pancreatic juice containing amylase (continuing starch digestion), trypsin (a protease — breaks polypeptides into smaller peptides) and lipase (breaks lipids into fatty acids and glycerol). Bile from the liver, stored in the gallbladder, emulsifies fats — breaking large fat droplets into smaller ones, increasing surface area for lipase. Bile is also alkaline, neutralising stomach acid so intestinal enzymes can work at their optimum pH. Enzymes on the wall of the small intestine complete digestion (e.g. maltase converts maltose to glucose; peptidases produce amino acids). The digested products — glucose, amino acids, fatty acids, glycerol — are absorbed across the villi into blood and lymph. Undigested material moves to the large intestine where water is absorbed before faeces are formed. Digestion thus relies on mechanical breakdown, the action of enzymes adapted to specific substrates and pH conditions, and the structural specialisation of each region of the gut.'
    },
    {
      q: 'Explain how plants make and use food through photosynthesis.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Photosynthesis is the process by which plants make glucose from CO₂ and water using light energy absorbed by chlorophyll. Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light and chlorophyll). Symbol: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. It takes place in chloroplasts of leaf cells. Light is absorbed by chlorophyll; the energy splits water into hydrogen (used to reduce CO₂) and oxygen (a waste product released through stomata). Glucose is used in respiration (energy), converted to starch for storage in leaves and tubers, used to make cellulose for cell walls, or combined with absorbed nitrate ions to make amino acids and proteins. The rate is limited by light intensity, CO₂ concentration, temperature and chlorophyll. Greenhouse growers maximise yield by controlling these factors. Without photosynthesis, plants could not feed themselves; almost all life on Earth depends on the glucose, oxygen and biomass that photosynthesis provides — making it the foundation of nearly every food chain.'
    },
  ],

  /* ─────────────────── 2.5 Respiration ─────────────────── */
  '2.5': [
    {
      q: 'Compare aerobic and anaerobic respiration.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both aerobic and anaerobic respiration release energy from glucose for use in cellular processes (transferring it to ATP for cell work). Aerobic respiration uses oxygen and gives a high yield. Word equation: glucose + oxygen → carbon dioxide + water (+ ATP). Symbol: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. It takes place mainly in the mitochondria. Anaerobic respiration occurs without oxygen. In animal muscle cells, glucose → lactic acid (+ a small amount of ATP); the lactic acid causes muscle fatigue and must be broken down later (oxygen debt). In yeast and plant cells, glucose → ethanol + CO₂; this is used in brewing (alcohol) and baking (CO₂ makes bread rise). Anaerobic respiration releases far less energy per glucose than aerobic — about 5% as much — because glucose is not fully oxidised; the rest of the energy is locked in lactic acid or ethanol. During hard exercise, muscles cannot get enough oxygen and switch to anaerobic respiration, building up lactic acid. After exercise, oxygen is needed to repay the debt, breaking down lactic acid in the liver — which is why breathing rate stays high. Aerobic respiration is preferable when oxygen is available because it produces much more ATP from the same glucose.'
    },
    {
      q: 'Discuss the importance of respiration for living organisms.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'Respiration is the chemical process by which all living cells release energy from organic molecules (mostly glucose). The energy is transferred to ATP, which is then used for many cellular processes: muscle contraction (movement), active transport (uptake of mineral ions, glucose), synthesis of large molecules (proteins, DNA), growth and repair, nerve impulses, and maintenance of body temperature in mammals and birds. Without respiration, cells would have no energy supply, processes would stop, and the organism would die within minutes (in animals) or longer (in plants). Aerobic respiration is the most efficient form, producing about 30 ATP per glucose; anaerobic respiration produces only 2 ATP and is used as a short-term emergency mechanism. Respiration is universal across life — bacteria, plants, fungi, animals — making it one of the most fundamental life processes. It also returns CO₂ to the atmosphere, a key step in the carbon cycle. Understanding respiration is essential to understanding metabolism, exercise physiology, food preservation (slowing decomposition by chilling), and many diseases.'
    },
  ],

  /* ─────────────────── 2.6 Gas Exchange ─────────────────── */
  '2.6': [
    {
      q: 'Explain how the human gas exchange system is adapted for efficient gas exchange.',
      marks: 9, command: 'Explain',
      modelAnswer: 'The human gas exchange system has many adaptations. Air enters via the nose and mouth, where it is filtered, warmed and moistened, then passes down the trachea (held open by C-shaped cartilage rings), divides into bronchi and bronchioles, and ends in millions of alveoli. Adaptations: huge total surface area (~70 m²) for diffusion; alveolar walls only one cell thick (squamous epithelium), and surrounded by capillaries also only one cell thick — very short diffusion distance; rich capillary network maintains a steep concentration gradient by continuously bringing deoxygenated blood and removing oxygenated blood; ventilation by the diaphragm and intercostal muscles continually replaces alveolar air; the alveolar surface is moist, allowing gases to dissolve; surfactant reduces surface tension and prevents alveolar collapse. Goblet cells produce mucus that traps dust and microbes; cilia sweep mucus up to the throat. Smoking damages cilia and alveoli, leading to bronchitis, emphysema and lung cancer. Diseases such as emphysema (destroying alveoli), pulmonary fibrosis (thickening walls) and asthma (narrowing airways) compromise these adaptations. Together, large surface area, short diffusion distance, steep gradient maintained by ventilation and circulation, and protective mechanisms make the lungs an efficient organ for gas exchange between air and blood.'
    },
    {
      q: 'Describe how flowering plants exchange gases with their environment.',
      marks: 6, command: 'Describe',
      modelAnswer: 'Plants exchange gases through stomata — tiny pores in leaves (mostly on the underside), each flanked by two guard cells. By day, plants photosynthesise: CO₂ diffuses in and O₂ diffuses out. They also respire, releasing CO₂ and using O₂, but in daylight photosynthesis usually exceeds respiration so the net flow is CO₂ in, O₂ out. At night, only respiration occurs, so CO₂ flows out and O₂ in. Stomata open in light to allow gas exchange and close in darkness or drought to reduce water loss. Inside the leaf, the spongy mesophyll has many air spaces and a moist surface that allows gases to diffuse rapidly between cells and the air. Roots also exchange gases — they need O₂ for respiration, taken from air spaces in the soil; waterlogged soils can suffocate roots. Stems use lenticels (small openings in bark) for gas exchange. Plants therefore rely on diffusion through specialised pores, with a moist, branched internal structure that maximises surface area for gas exchange while minimising water loss when needed.'
    },
  ],

  /* ─────────────────── 2.7 Transport ─────────────────── */
  '2.7': [
    {
      q: 'Describe the structure of the human heart and explain how the cardiac cycle ensures one-way flow of blood.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The human heart is a four-chambered double pump made of cardiac muscle. Two thin-walled atria collect blood; two thicker-walled ventricles pump blood out. The right atrium receives deoxygenated blood from the body via venae cavae and passes it through the tricuspid valve into the right ventricle, which pumps it through the pulmonary valve to the lungs. The left atrium receives oxygenated blood from the lungs via pulmonary veins and passes it through the bicuspid (mitral) valve into the left ventricle, which pumps it through the aortic valve to the aorta and out to the body. The left ventricle has the thickest wall to generate the high pressure needed for systemic circulation. The cardiac cycle has three phases: atrial systole (atria contract, topping up ventricles), ventricular systole (ventricles contract, AV valves close producing the first heart sound, semi-lunar valves open and blood is ejected), and diastole (all chambers relax, semi-lunar valves close producing the second heart sound, atria refill). The valves prevent backflow, ensuring one-way flow: AV valves close as ventricles contract, so blood goes forward into arteries not back into atria; semi-lunar valves close as ventricles relax, so blood does not flow back into ventricles from arteries. Heart contraction is myogenic, with the SA node (pacemaker) setting the pace.'
    },
    {
      q: 'Compare the structure of arteries, veins and capillaries.',
      marks: 6, command: 'Compare',
      modelAnswer: 'All three are blood vessels but differ in structure to match function. Arteries carry blood at high pressure away from the heart; they have thick muscular walls with much elastic tissue, smoothing pressure surges and a small lumen. Veins return blood at low pressure to the heart; they have thinner walls, less elastic tissue, wider lumens, and contain valves to prevent backflow as blood is helped along by skeletal muscle squeezing. Capillaries are the exchange vessels: walls only one cell thick (single endothelial cells) give the shortest possible diffusion distance, the narrow lumen (just wider than a red blood cell) slows blood flow and brings cells close to tissues, and they form vast branched networks giving an enormous surface area. Each vessel matches its job: arteries deliver high-pressure flow, capillaries enable exchange, veins return blood to the heart.'
    },
  ],

  /* ─────────────────── 2.8 Excretion ─────────────────── */
  '2.8': [
    {
      q: 'Describe the structure and function of the urinary system, and explain how the kidney regulates water and salt balance.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The urinary system consists of two kidneys, which filter blood; ureters, which carry urine to the bladder; the bladder, which stores urine; and the urethra, through which urine leaves the body. Each kidney contains thousands of nephrons. Blood enters the glomerulus under high pressure; small molecules including water, salts, glucose, urea and amino acids are filtered into the Bowman\'s capsule, but cells and large proteins stay in the blood. The filtrate then flows along the tubule. In the proximal convoluted tubule, all glucose, useful salts and most water are reabsorbed back into the blood. The loop of Henle creates a salt gradient in the medulla. The collecting duct passes through this gradient, and water can move out by osmosis — but only if its walls are permeable. ADH (antidiuretic hormone) controls this. When water content is low (dehydration), the hypothalamus signals the pituitary to release ADH; ADH makes the collecting ducts more permeable, more water is reabsorbed, and a small volume of concentrated urine is produced. When water content is high, ADH falls, less water is reabsorbed, and a large volume of dilute urine is produced. The system therefore filters out waste (urea, excess salts, water) while reabsorbing useful substances, and uses ADH-driven negative feedback to maintain water balance.'
    },
  ],

  /* ─────────────────── 2.9 Coordination & Response ─────────────────── */
  '2.9': [
    {
      q: 'Compare the nervous and endocrine systems in coordinating responses, with examples.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both systems coordinate body responses but differ in how they work. The nervous system uses electrical impulses along neurones, with chemicals released only at synapses; signals are very fast (milliseconds), short-lived and target specific muscles or glands. It is good for rapid, precise responses such as reflexes (pulling a hand from a hot object, blinking, the knee-jerk reflex) and voluntary action. The endocrine system uses chemical hormones secreted by glands directly into the blood. Only cells with the right receptor respond. Hormonal signals are slower (seconds to hours), longer-lasting, and may affect many tissues at once. The endocrine system is used for longer-term changes: blood glucose regulation (insulin and glucagon), water balance (ADH), the menstrual cycle (FSH, LH, oestrogen, progesterone), growth (growth hormone), the stress response (adrenaline). The two systems work together: the hypothalamus links them, controlling the pituitary and so most other endocrine glands; adrenaline (endocrine) reinforces sympathetic nervous responses to stress. Both systems use chemical messengers — neurotransmitters or hormones — but differ in delivery: down a wire or via the blood. Together, they give the body both rapid precise control and slower sustained regulation, allowing complex behaviour and homeostasis.'
    },
    {
      q: 'Describe the structure of the eye and explain how it focuses on near and far objects.',
      marks: 9, command: 'Describe',
      modelAnswer: 'Light enters the eye through the cornea (a transparent layer that does most of the focusing). The iris controls the amount of light entering by changing pupil size — circular muscles contract in bright light, radial muscles in dim light. Light then passes through the lens, which is biconvex and elastic. The ciliary muscles and suspensory ligaments around the lens change its shape to focus light precisely on the retina at the back of the eye — accommodation. For near objects, the ciliary muscles contract, suspensory ligaments slacken, and the lens becomes more rounded, refracting light more strongly. For distant objects, the ciliary muscles relax, suspensory ligaments tighten and pull the lens flatter, refracting light less. The retina contains photoreceptors — rods (sensitive to dim light, give black-and-white vision) and cones (need bright light, give colour vision). When light hits a photoreceptor, it triggers a nerve impulse that travels along the optic nerve to the brain, where it is interpreted as an image. The fovea has many cones for sharpest vision. Common eye problems: short-sightedness (lens focuses light in front of retina), corrected by concave lenses; long-sightedness (focus behind retina), corrected by convex lenses. The eye is a remarkable example of how multiple structures work together to produce vision.'
    },
  ],

  /* ─────────────────── 3.1 Reproduction ─────────────────── */
  '3.1': [
    {
      q: 'Compare sexual and asexual reproduction in terms of variation, advantages and disadvantages.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Sexual reproduction involves two parents producing gametes by meiosis, which fuse at fertilisation to give offspring with a unique combination of alleles. Variation arises from independent assortment, crossing over and random fertilisation. Offspring are genetically different from parents and from each other. Advantage: variation gives some offspring a chance of surviving in changing environments — the species can adapt over generations. Disadvantages: slower, requires two organisms, energetically costly, half the population (males) does not directly produce offspring. Asexual reproduction involves only one parent and produces genetically identical offspring (clones) by mitosis. Examples: strawberries spreading by runners, bacteria dividing by binary fission, yeast budding, daffodils from bulbs. Advantages: no need to find a mate, fast, many offspring at low cost — useful for colonising stable favourable environments. Disadvantage: no variation, so all individuals are equally vulnerable to disease or environmental change; the species cannot easily adapt. Many organisms use both: aphids reproduce asexually in summer (rapid increase) but sexually in autumn (variation for harsh winter); strawberries spread quickly asexually but also flower for sexual reproduction. The balance reflects different strategies — asexual maximises numbers in stable conditions, while sexual provides the variation needed for long-term survival in changing environments.'
    },
    {
      q: 'Discuss how flowering plants reproduce sexually, including pollination and fertilisation.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Flowering plants reproduce sexually using flowers — the reproductive organs of the plant. The male parts (stamens) consist of the anther and filament; the anthers produce pollen, which contains male gametes. The female parts (carpel) consist of the stigma, style and ovary; the ovary contains ovules, each housing a female gamete. Pollination is the transfer of pollen from anther to stigma. Insect-pollinated flowers attract pollinators with bright petals, scent and nectar; pollen is sticky and carried on the insect\'s body. Wind-pollinated flowers (grasses, hazel) have small dull petals, no scent or nectar, large feathery stigmas and produce huge amounts of light pollen carried on the wind. After pollination, fertilisation occurs: a pollen tube grows down the style into an ovule, where the male gamete fuses with the female gamete to form a zygote. The zygote develops into an embryo and the ovule becomes a seed; the ovary develops into a fruit. Seeds are dispersed (by wind, animals, water or explosion) to colonise new areas. Sexual reproduction in plants gives genetic variation, and pollination by insects supports a vital ecological relationship — most flowering plants depend on pollinators, and most pollinators depend on flowers. Loss of pollinators (e.g. through pesticides, habitat loss) threatens both biodiversity and food security, since many crops depend on insect pollination.'
    },
  ],

  /* ─────────────────── 3.2 Inheritance ─────────────────── */
  '3.2': [
    {
      q: 'Explain how characteristics are inherited and use a genetic cross to predict offspring.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Each gene exists in different versions called alleles, one inherited from each parent. Alleles can be dominant (always expressed if present) or recessive (only expressed when homozygous). Genotype is the combination of alleles; phenotype is the physical trait. In sexual reproduction, gametes carry one allele per gene; at fertilisation, two alleles combine to give the offspring\'s genotype. Example: cystic fibrosis is caused by a recessive allele f. Both parents are healthy carriers (Ff). Their gametes can carry F or f. Punnett square: F + F = FF (unaffected), F + f = Ff (carrier), f + F = Ff (carrier), f + f = ff (affected). Expected ratio: 1 FF : 2 Ff : 1 ff — 25% affected, 50% carrier, 25% unaffected and not a carrier. Sex inheritance: females are XX, males XY; all eggs carry X, sperm carry X or Y in roughly equal numbers, giving roughly equal numbers of male and female offspring. Sex-linked inheritance (e.g. red-green colour blindness) follows the X chromosome; recessive alleles affect men more often because they only have one X. Genetic crosses help predict inheritance, useful in breeding and genetic counselling for inherited diseases. Knowing parental genotypes and how alleles combine allows accurate probability statements about offspring.'
    },
    {
      q: 'Discuss the use of selective breeding in agriculture and assess any concerns.',
      marks: 6, command: 'Discuss',
      modelAnswer: 'Selective breeding (artificial selection) involves choosing organisms with desirable characteristics and breeding them together over many generations. Examples include high-yielding wheat, dairy cows giving more milk, dogs bred for specific roles. Benefits: higher crop yields, better-tasting food, animals producing more meat or milk, disease-resistant crops, decorative flowers. Concerns: reduced genetic diversity, making populations vulnerable to disease (e.g. potato famine in Ireland was made worse by genetic uniformity); inbreeding can produce health problems (bulldogs with breathing difficulties, dachshunds with back problems); welfare concerns where breeds have exaggerated traits; loss of older, less productive but possibly hardier varieties. Selective breeding is older than genetic engineering and uses naturally occurring variation, but is slower and limited by what variation exists. Careful breeding can include outcrossing to maintain diversity and conservation programmes for heritage breeds. Despite concerns, selective breeding has produced almost all our domestic crops and animals and remains one of the most important tools in agriculture.'
    },
  ],

  /* ─────────────────── 4.1 The Organism in its Environment ─────────────────── */
  '4.1': [
    {
      q: 'Discuss how environmental and biotic factors affect the distribution of organisms in an ecosystem.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'The distribution of organisms is shaped by abiotic (environmental) and biotic (living) factors. Abiotic factors include light intensity, temperature, water availability, soil pH, mineral content, oxygen levels (especially in water) and salinity. For plants, light is often a key limiting factor — plants compete for light, and species adapted to shade (e.g. ferns) coexist with light-demanding species (e.g. oaks). Temperature limits where organisms can survive — polar species cannot live in deserts and vice versa. Soil pH affects which plants can grow (acid-loving plants like rhododendrons cannot thrive in alkaline soil). Biotic factors include competition (for food, water, mates), predation, disease and human activity. Two species cannot occupy the same niche indefinitely (competitive exclusion); usually one outcompetes the other or they specialise into different niches. Predators control prey populations; loss of a predator can lead to prey explosion (deer overgrazing forests where wolves are absent). Symbiosis (mutualism, commensalism, parasitism) shapes communities. Human activities — habitat destruction, pollution, climate change, hunting, introduction of invasive species — increasingly affect distribution at every scale. Climate change is shifting species ranges as temperatures and rainfall patterns change. Distribution can be measured using transects, quadrats and mark-release-recapture; understanding why organisms live where they do is central to ecology and conservation.'
    },
  ],

  /* ─────────────────── 4.2 Feeding Relationships ─────────────────── */
  '4.2': [
    {
      q: 'Explain how energy flows through an ecosystem and describe how pyramids of energy and biomass illustrate this.',
      marks: 9, command: 'Explain',
      modelAnswer: 'Energy enters most ecosystems as light absorbed by producers (mainly plants), which convert about 1% of incident light into chemical energy through photosynthesis. Producers are eaten by primary consumers (herbivores), which are eaten by secondary consumers (carnivores), and so on through the food chain. Decomposers break down dead organisms at every level, returning nutrients to the soil. At each transfer, energy is lost: not all biomass is eaten (some is uneaten or lost as faeces), not all eaten material is assimilated, and a large fraction of assimilated energy is lost as heat from respiration. Typically only about 10% of energy is transferred to the next level. This loss explains why food chains rarely have more than four or five trophic levels — there is not enough energy to support higher predators. Pyramids of energy plot energy in each trophic level (e.g. kJ m⁻² yr⁻¹) and are always upright, because energy must decrease at each level. Pyramids of biomass plot the dry mass of organisms; usually upright but can be inverted in marine ecosystems where plankton (small biomass) reproduce so rapidly that they support a much greater biomass of fish at one moment. Pyramids of numbers can be inverted (e.g. one tree supporting many caterpillars) because they ignore size differences. The inefficient transfer of energy means humans gain more energy from eating plants than animals fed on plants, a key consideration in sustainable food systems.'
    },
  ],

  /* ─────────────────── 4.3 Cycles within Ecosystems ─────────────────── */
  '4.3': [
    {
      q: 'Describe the carbon cycle and assess how human activities affect it.',
      marks: 9, command: 'Describe',
      modelAnswer: 'The carbon cycle is the continuous movement of carbon between the atmosphere, living organisms, oceans and rocks. In the atmosphere, carbon exists mainly as CO₂. Photosynthesis by plants and algae removes CO₂ and converts it into glucose, which becomes part of plant biomass. When animals eat plants (or other animals), the carbon transfers along the food chain. Respiration by all living things returns CO₂ to the atmosphere. Decomposition of dead organisms by bacteria and fungi releases CO₂. Combustion of biomass and fossil fuels (coal, oil, gas — formed from ancient organic material under pressure over millions of years) releases CO₂ rapidly. Oceans absorb CO₂. Without disturbance, the cycle is roughly balanced. Human activities have changed this. Burning fossil fuels at huge scale releases CO₂ much faster than it can be absorbed; deforestation removes plants that would otherwise take up CO₂, and burning forests releases more CO₂. Atmospheric CO₂ has risen from about 280 ppm before the Industrial Revolution to over 420 ppm today. The increased CO₂ traps more heat (the greenhouse effect), causing global warming and climate change. Oceans absorb some CO₂, becoming more acidic and threatening coral reefs. Reducing fossil fuel use, protecting forests and developing carbon capture technology are needed to bring the cycle back into balance and limit climate change.'
    },
  ],

  /* ─────────────────── 4.4 Human Influences on the Environment ─────────────────── */
  '4.4': [
    {
      q: 'Discuss how human activities have caused environmental problems and assess what can be done about them.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Human activities cause many environmental problems. Burning fossil fuels releases CO₂ and other greenhouse gases, driving climate change — rising temperatures, melting ice, sea-level rise, more extreme weather, ocean acidification. Deforestation removes carbon-absorbing forests and destroys habitats. Pollution from industry, agriculture and waste damages ecosystems: fertiliser run-off causes eutrophication (algal blooms, oxygen depletion, fish kills); sulphur and nitrogen oxides cause acid rain damaging forests and lakes; plastic pollutes oceans; pesticides bioaccumulate up food chains; sewage spreads disease. Habitat destruction (urbanisation, agriculture, draining wetlands) and overexploitation (fishing, hunting) reduce biodiversity. Solutions include: reducing greenhouse gas emissions through renewable energy, energy efficiency, electrified transport; reforestation and forest protection; better farming (precision agriculture, organic methods, integrated pest management); reducing meat consumption; pollution control (treating sewage, regulating chemicals); banning harmful pesticides (DDT was banned to save birds of prey); recycling and waste reduction; protected areas and conservation programmes; international agreements (Paris Agreement on climate, CITES on wildlife trade). Effectiveness depends on speed and ambition — acting now is far cheaper than dealing with worse problems later. Public awareness, political will and individual action all matter. Many problems are getting worse, but successes (the ozone hole healing after CFC bans, recovery of bald eagles, reforestation in some areas) show change is possible. Sustainable solutions require recognising that healthy environments support human wellbeing, food security, water and economic activity — protecting nature is in our self-interest.'
    },
  ],

  /* ─────────────────── 5.1 Food Production ─────────────────── */
  '5.1': [
    {
      q: 'Discuss how modern farming methods aim to maximise food production, and assess their environmental impact.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Modern farming uses many methods to maximise food production. High-yielding varieties developed by selective breeding or genetic engineering produce more food per area. Fertilisers (especially nitrogen) replace nutrients removed by harvesting. Pesticides and herbicides reduce losses to pests and weeds. Irrigation provides water in dry areas. Glasshouses and polytunnels allow year-round production of crops out of season; CO₂ enrichment, supplemental lighting and heating boost yields. Mechanisation reduces labour costs and allows large-scale farming. Intensive livestock farming raises animals in controlled conditions, often indoors, with concentrated feeds and antibiotics, producing meat, milk and eggs cheaply. Hydroponics grows plants in nutrient solutions without soil. Genetic engineering produces pest-resistant or herbicide-tolerant crops. Environmental impact: large-scale agriculture is the leading cause of biodiversity loss through habitat destruction; fertilisers cause eutrophication; pesticides harm non-target species and bioaccumulate; intensive livestock contributes major greenhouse gas emissions (methane from cattle, nitrous oxide from manure); soil erosion and salinisation degrade land; antibiotic resistance is accelerated by livestock use. Sustainable approaches — agroecology, integrated pest management, organic farming, precision agriculture, crop rotation, conservation tillage, and reducing food waste — aim to maintain yields with less environmental damage. Plant-based diets reduce land and water use. Feeding 10 billion people sustainably will require both technological and dietary change.'
    },
  ],

  /* ─────────────────── 5.2 Selective Breeding ─────────────────── */
  '5.2': [
    {
      q: 'Compare selective breeding and genetic engineering as ways to improve crops and livestock.',
      marks: 9, command: 'Compare',
      modelAnswer: 'Both selective breeding and genetic engineering aim to produce organisms with desirable characteristics, but they differ in approach, speed and scope. Selective breeding uses naturally occurring variation: parents with desired traits are bred together over many generations, gradually producing offspring with stronger expression of those traits. It is well established (humans have used it for thousands of years), uses existing genes within the same or closely related species, and can produce large changes (think of the variety of dog breeds), but is slow, often taking many generations to produce a useful change. Genetic engineering directly modifies DNA, often by inserting a gene from another species. It is much faster and can transfer traits between species that would never naturally interbreed (e.g. a bacterial gene inserted into a plant). Examples: Bt cotton (bacterial gene producing toxin against caterpillars), Golden Rice (genes for β-carotene production), herbicide-tolerant soybeans, bacteria producing human insulin. Both approaches can produce safer, higher-yielding food, but raise different concerns. Selective breeding can reduce genetic diversity over generations; genetic engineering raises questions about long-term safety, ecological impact (gene flow to wild relatives), and farmer dependence on patented seeds. Modern agriculture often uses both — selective breeding for many crops, with genetic engineering used for specific high-impact traits. Combined and used responsibly, they form a powerful toolkit for sustainable food production, but transparent regulation and public engagement are needed.'
    },
  ],

  /* ─────────────────── 5.3 Genetic Modification ─────────────────── */
  '5.3': [
    {
      q: 'Discuss the use of genetically modified organisms and assess the ethical issues raised.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Genetically modified (GM) organisms have had their DNA changed by inserting genes from another species, often using restriction enzymes and ligase to combine the gene with a vector (plasmid), then introducing it into the host. Examples: bacteria engineered to produce human insulin (replacing pig insulin); Bt cotton and Bt maize carrying a Bacillus thuringiensis gene producing a toxin lethal to caterpillars but harmless to humans; herbicide-tolerant crops (Roundup-Ready); Golden Rice fortified with β-carotene to combat vitamin A deficiency; goats producing therapeutic proteins in their milk. Benefits: rapid production of medicines previously hard to obtain; higher yields; reduced pesticide use; more nutritious foods; treatments for previously incurable diseases through gene therapy. Ethical issues: are GM foods safe (most evidence so far suggests approved GM foods are safe to eat); ecological impact (transgenes spreading to wild relatives, effects on non-target species); economic dependence of farmers on patented seeds; concentration of agricultural power in a few large companies; animal welfare in transgenic animals; the cost of treatments leading to inequality of access; broader concerns about modifying living things ("playing God"). Germline editing of humans is especially controversial and currently banned in most countries. Strong regulation, transparent testing, public engagement and equitable access are essential. Used responsibly, genetic modification is one of biology\'s most powerful tools and has saved many lives, but careful management is needed to maximise benefits while minimising risks.'
    },
  ],

  /* ─────────────────── 5.4 Cloning ─────────────────── */
  '5.4': [
    {
      q: 'Discuss the techniques used to clone plants and animals, and assess the benefits and risks.',
      marks: 9, command: 'Discuss',
      modelAnswer: 'Cloning produces genetically identical offspring. Plant cloning is straightforward — many plants reproduce asexually naturally, and gardeners take cuttings, divide bulbs, or use micropropagation (growing many new plants from tiny pieces of tissue in sterile conditions on agar plates with hormones). This produces large numbers of identical disease-free plants quickly. Animal cloning is more challenging. Embryo splitting separates a young embryo into several cells before specialisation, each developing into a separate animal — useful for high-value cattle. Adult cell cloning (somatic cell nuclear transfer) removes the nucleus from a body cell of the animal to be cloned, transfers it into an empty egg cell, stimulates division, and implants the resulting embryo into a surrogate mother. This is how Dolly the sheep was cloned in 1996. Benefits: identical animals or plants with desired traits (high milk yield, disease resistance); preservation of endangered species; production of pharmaceuticals in animals (e.g. clotting factors in milk); medical research; and theoretically, organ growth for transplant. Risks: reduced genetic diversity makes populations vulnerable to disease; cloned animals often have health problems (Dolly aged early); ethical concerns about animal welfare and the potential extension to humans (banned but technically possible); high failure rate (only a small fraction of cloned embryos survive). Cloning humans is widely banned for ethical reasons, including concerns about consent, identity and wellbeing of clones. Plant cloning is widely used in horticulture; animal cloning remains rare and controversial despite its potential.'
    },
  ],

};
