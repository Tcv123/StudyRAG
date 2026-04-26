/*
 * Edexcel International GCSE Biology (4BI1) — Written / Short-Answer Diagnostic Bank
 * Per subtopic: 4 green + 3 amber + 2 red = 9 written questions.
 * Student self-marks against model answer: Full / Partial / Missed.
 * One written question is injected into every diagnostic run.
 */

const BIOLOGY_EDEXCEL_IGCSE_WRITTEN = {

  '1.1': {
    green: [
      { q: 'State the eight characteristics shared by all living organisms (MRS GREN).', marks: 2, tier: 'green',
        modelAnswer: `Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition, Control (homeostasis).` },
      { q: 'State the five kingdoms used to classify living organisms.', marks: 2, tier: 'green',
        modelAnswer: `Animals, Plants, Fungi, Protoctists, Prokaryotes.` },
      { q: 'State one example of an organism in each of the kingdoms Fungi, Protoctista and Prokaryota.', marks: 3, tier: 'green',
        modelAnswer: `Fungi — Mucor (or yeast). Protoctista — Amoeba, Chlorella or Plasmodium. Prokaryota — Lactobacillus or Pneumococcus.` },
      { q: 'State what a pathogen is and give one example.', marks: 2, tier: 'green',
        modelAnswer: `A pathogen is an organism that causes disease. Example: HIV (virus) causes AIDS; Plasmodium (protoctist) causes malaria.` },
    ],
    amber: [
      { q: 'Describe how bacteria differ from animal cells in their structure.', marks: 3, tier: 'amber',
        modelAnswer: `Bacteria are prokaryotic: no true (membrane-bound) nucleus — DNA is in a loop in the cytoplasm. They may contain plasmids. They have a cell wall of peptidoglycan (not cellulose). They have no membrane-bound organelles such as mitochondria or ER.` },
      { q: 'Explain why viruses are not normally considered to be alive.', marks: 3, tier: 'amber',
        modelAnswer: `A virus is only genetic material (DNA or RNA) surrounded by a protein coat. It has no cytoplasm, no organelles and cannot carry out life processes such as respiration, nutrition or reproduction by itself. It can only replicate inside a living host cell.` },
      { q: 'Describe how you could distinguish between a fungus and a plant using cell-level features.', marks: 3, tier: 'amber',
        modelAnswer: `Fungi have a cell wall of chitin, no chlorophyll and feed by extracellular digestion (saprotrophic nutrition). Plants have cellulose cell walls, chloroplasts containing chlorophyll, and make their own food by photosynthesis.` },
    ],
    red: [
      { q: 'Evaluate whether viruses should be placed in their own biological kingdom.', marks: 6, tier: 'red',
        modelAnswer: `Arguments for: viruses show some living features — they contain genetic material, can mutate/evolve, are infectious. Arguments against: they lack cells, organelles and cannot carry out MRS GREN independently; they only reproduce in a host. Most biologists therefore exclude them from the five kingdoms and treat them separately because they do not meet the universally accepted criteria for life. Accept reasoned conclusions either way supported by the above.` },
      { q: 'Explain why the kingdom Protoctista is considered difficult to classify and how the organisms in it differ greatly from each other.', marks: 4, tier: 'red',
        modelAnswer: `Protoctists are all eukaryotic but otherwise diverse: some are unicellular (Amoeba), some colonial/filamentous (Spirogyra). Some are heterotrophic (Amoeba, Plasmodium), some photosynthetic (Chlorella). Their cell walls vary — cellulose in algae, none in many. This is why the kingdom is sometimes said to be a "dumping ground" for eukaryotes that do not fit in Plantae, Animalia or Fungi.` },
    ],
  },

  '2.1': {
    green: [
      { q: 'State the levels of organisation in a complex organism, starting from the smallest.', marks: 2, tier: 'green',
        modelAnswer: `Cell → tissue → organ → organ system → organism.` },
      { q: 'State three structures found in plant cells but NOT in animal cells.', marks: 3, tier: 'green',
        modelAnswer: `Cellulose cell wall, chloroplasts (in green tissue), large permanent vacuole with cell sap.` },
      { q: 'State the function of the nucleus, mitochondrion and ribosomes.', marks: 3, tier: 'green',
        modelAnswer: `Nucleus — contains DNA/chromosomes; controls cell activities. Mitochondrion — site of aerobic respiration, releasing ATP. Ribosomes — site of protein synthesis.` },
      { q: 'Define magnification.', marks: 2, tier: 'green',
        modelAnswer: `Magnification = size of image ÷ actual size of object. It is a number with no units, for example ×400.` },
    ],
    amber: [
      { q: 'Describe how a root hair cell is adapted to its function.', marks: 3, tier: 'amber',
        modelAnswer: `Long narrow extension increases surface area for absorption of water and mineral ions. Thin cell wall and cell membrane allow rapid uptake. Many mitochondria provide ATP for active transport of ions against a concentration gradient.` },
      { q: 'Describe how a sperm cell is adapted to its function.', marks: 3, tier: 'amber',
        modelAnswer: `Streamlined shape and long tail for swimming. Many mitochondria in the mid-piece to provide ATP. Acrosome at the head containing enzymes to digest the egg membrane. Haploid nucleus containing 23 chromosomes.` },
      { q: 'Explain why electron microscopes give greater resolution than light microscopes.', marks: 3, tier: 'amber',
        modelAnswer: `Electrons have a far shorter wavelength than visible light, so two close-together points can be resolved as separate. This gives resolution in the order of nanometres compared with ~200 nm for a light microscope. Electron microscopes therefore show far more detail, e.g. individual organelles.` },
    ],
    red: [
      { q: 'An image of a cheek cell measures 40 mm across. The actual cell is 50 µm. Calculate the magnification and describe one disadvantage of a light microscope for viewing organelles.', marks: 4, tier: 'red',
        modelAnswer: `Convert: 40 mm = 40 000 µm. Magnification = 40 000 ÷ 50 = ×800. Disadvantage: light microscopes have limited resolution (~200 nm) due to the wavelength of light, so sub-cellular structures such as ribosomes or membranes within organelles cannot be seen clearly.` },
      { q: 'Compare the structure of a bacterial cell with that of a plant cell.', marks: 5, tier: 'red',
        modelAnswer: `Similarities: both have a cell wall, cell membrane, cytoplasm, ribosomes and DNA. Differences: bacterial cell has no true nucleus — DNA is in a loop in the cytoplasm, plus plasmids; bacterial cell wall is peptidoglycan (not cellulose); bacteria have no mitochondria, chloroplasts or large vacuole. Plant cell has a nucleus, membrane-bound organelles, chloroplasts and a large permanent vacuole.` },
    ],
  },

  '2.2': {
    green: [
      { q: 'State the food test for (i) starch (ii) reducing sugar (iii) protein (iv) lipid.', marks: 4, tier: 'green',
        modelAnswer: `(i) Iodine solution → blue-black if starch present. (ii) Benedict's solution, heat in water bath → brick-red if reducing sugar present. (iii) Biuret reagent → purple/lilac if protein. (iv) Ethanol + water (emulsion test) → cloudy emulsion if lipid.` },
      { q: 'State what an enzyme is.', marks: 2, tier: 'green',
        modelAnswer: `A protein that acts as a biological catalyst, speeding up a specific reaction without being used up.` },
      { q: 'Name the building blocks (monomers) of starch, protein and lipid.', marks: 3, tier: 'green',
        modelAnswer: `Starch — glucose. Protein — amino acids. Lipid — glycerol and fatty acids.` },
      { q: 'State the meaning of "optimum temperature" for an enzyme.', marks: 2, tier: 'green',
        modelAnswer: `The temperature at which the enzyme catalyses its reaction at the fastest rate. Above this, the enzyme denatures; below this, rate falls because molecules have less kinetic energy.` },
    ],
    amber: [
      { q: 'Explain how the shape of an enzyme\'s active site relates to its specificity.', marks: 3, tier: 'amber',
        modelAnswer: `The active site has a specific 3D shape complementary to its substrate ("lock and key"). Only a substrate with a matching shape fits, forming an enzyme-substrate complex. A different substrate cannot bind, so the enzyme only catalyses one reaction (specificity).` },
      { q: 'Describe the effect of temperature on enzyme activity.', marks: 4, tier: 'amber',
        modelAnswer: `As temperature rises from low values, particles gain kinetic energy; collisions with the active site become more frequent and forceful — rate increases. At the optimum, rate is maximum. Above the optimum, the enzyme\'s tertiary structure is disrupted, the active site shape changes, substrate no longer fits — rate falls sharply. This is called denaturation.` },
      { q: 'Describe a safe method for testing a food for starch and reducing sugar.', marks: 3, tier: 'amber',
        modelAnswer: `Grind food with water, filter. Put a sample in two test tubes. (1) Add iodine — blue-black indicates starch. (2) Add Benedict\'s solution and heat in a water bath at ~80 °C — brick-red indicates reducing sugar. Wear goggles; avoid boiling with open flame near ethanol.` },
    ],
    red: [
      { q: 'A student finds that amylase digests starch in 1 minute at 30 °C but takes 10 minutes at 10 °C and fails entirely at 80 °C. Explain these observations.', marks: 5, tier: 'red',
        modelAnswer: `At 10 °C the enzyme and substrate molecules have low kinetic energy — fewer successful collisions, so reaction is slow. At 30 °C the rate is higher because molecules move faster and collisions occur more often. At 80 °C the enzyme denatures: intermolecular bonds holding the active-site shape are disrupted, the active site can no longer bind starch, so no reaction occurs.` },
      { q: 'Compare the structures and properties of starch, glycogen and cellulose.', marks: 6, tier: 'red',
        modelAnswer: `All are polymers of glucose. Starch: mixture of amylose (unbranched, coiled) and amylopectin (branched) — energy store in plants. Glycogen: highly branched, compact — energy store in liver/muscle of animals and fungi. Cellulose: straight chains of glucose linked by β-glycosidic bonds, cross-linked by H-bonds into microfibrils — structural role in plant cell walls. Differences reflect function: storage molecules are compact and easily broken down, cellulose is structural and indigestible to most animals.` },
    ],
  },

  '2.3': {
    green: [
      { q: 'Define osmosis.', marks: 2, tier: 'green',
        modelAnswer: `The net movement of water from a dilute solution (high water potential) to a more concentrated solution (lower water potential) across a partially permeable membrane.` },
      { q: 'State three factors that affect the rate of diffusion.', marks: 3, tier: 'green',
        modelAnswer: `Concentration gradient (steeper → faster), temperature (higher → faster), surface area (larger → faster). Also diffusion distance (thinner → faster).` },
      { q: 'State what is meant by active transport.', marks: 2, tier: 'green',
        modelAnswer: `The movement of substances across a membrane against a concentration gradient, from low to high concentration, using energy from ATP provided by respiration.` },
      { q: 'State two places where active transport is important in the body.', marks: 2, tier: 'green',
        modelAnswer: `Uptake of mineral ions by plant root hair cells; absorption of glucose and amino acids from the ileum into blood when concentrations are lower in the gut; reabsorption of glucose in the kidney tubule.` },
    ],
    amber: [
      { q: 'A plant cell is placed in strong sucrose solution. Describe what happens to the cell.', marks: 4, tier: 'amber',
        modelAnswer: `Water leaves the cell by osmosis because the external solution has a lower water potential. The vacuole shrinks, cytoplasm shrinks, and the cell membrane pulls away from the cell wall — the cell is plasmolysed. The cell becomes flaccid.` },
      { q: 'Explain why red blood cells burst in pure water but plant cells do not.', marks: 3, tier: 'amber',
        modelAnswer: `Water enters both cells by osmosis because they are more concentrated than pure water. Red blood cells have no rigid cell wall — the membrane cannot withstand the pressure and bursts (lysis). Plant cells have a rigid cellulose cell wall which resists further expansion, so the cell becomes turgid but does not burst.` },
      { q: 'Describe how to investigate the effect of sucrose concentration on osmosis in potato tissue.', marks: 4, tier: 'amber',
        modelAnswer: `Cut equal-sized potato cylinders, blot and record initial mass. Place one in each of several sucrose concentrations (e.g. 0.0–1.0 mol/dm³) for the same time at the same temperature. Remove, blot, record final mass. Calculate percentage change in mass. Repeat for reliability and plot % change against concentration.` },
    ],
    red: [
      { q: 'Explain how root hair cells are adapted for efficient uptake of water and mineral ions.', marks: 5, tier: 'red',
        modelAnswer: `Large surface area from long, narrow extension into the soil — maximises absorption. Thin cell wall and membrane — short diffusion path. Concentration of cell sap in vacuole higher than soil solution — water enters by osmosis. Many mitochondria — supply ATP for active transport of ions (which are often at low concentration in soil). Carrier proteins in the membrane move specific ions.` },
      { q: 'An alveolus and a villus both carry out exchange. Describe and explain three shared adaptations.', marks: 6, tier: 'red',
        modelAnswer: `(1) Large surface area (alveoli — millions; villi — finger-like + microvilli) — increases rate of diffusion (Fick\'s law). (2) Thin walls (one cell thick) — short diffusion distance. (3) Rich blood supply — maintains a steep concentration gradient by constantly removing absorbed substances. (4) Moist surface / good ventilation — helps dissolved gases/nutrients diffuse across. Each adaptation increases the flux across the membrane.` },
    ],
  },

  '2.4': {
    green: [
      { q: 'State the balanced symbol equation for photosynthesis.', marks: 2, tier: 'green',
        modelAnswer: `6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll).` },
      { q: 'State the main sites of starch, protein and lipid digestion.', marks: 3, tier: 'green',
        modelAnswer: `Starch begins in the mouth (salivary amylase) and continues in the small intestine (pancreatic amylase). Protein begins in the stomach (pepsin) and continues in the small intestine (trypsin/peptidases). Lipid is mainly digested in the small intestine by pancreatic lipase after bile emulsification.` },
      { q: 'State the components of a balanced diet.', marks: 3, tier: 'green',
        modelAnswer: `Carbohydrates, proteins, lipids, vitamins, minerals, water and dietary fibre (roughage).` },
      { q: 'State one deficiency disease and the missing nutrient.', marks: 2, tier: 'green',
        modelAnswer: `Scurvy — vitamin C. Rickets — vitamin D / calcium. Anaemia — iron. Kwashiorkor — protein.` },
    ],
    amber: [
      { q: 'Describe how a villus is adapted for absorption.', marks: 4, tier: 'amber',
        modelAnswer: `Finger-like projections and microvilli on each epithelial cell — large surface area. Wall one cell thick — short diffusion path. Rich network of blood capillaries — absorbs glucose/amino acids and keeps a concentration gradient. Lacteal absorbs digested lipids. Many mitochondria in the cells provide ATP for active transport of glucose.` },
      { q: 'Describe the role of bile in digestion.', marks: 3, tier: 'amber',
        modelAnswer: `Produced by the liver, stored in the gall bladder and released into the duodenum. Bile emulsifies fats — breaking large fat droplets into smaller ones — which increases surface area for lipase to act on. It also neutralises acidic chyme from the stomach, providing an optimum pH for intestinal enzymes.` },
      { q: 'Explain how light intensity, CO₂ and temperature each act as limiting factors for photosynthesis.', marks: 4, tier: 'amber',
        modelAnswer: `Increasing any one of them increases photosynthesis rate until another becomes limiting. Light provides energy for the light-dependent stage; CO₂ is a reactant in the light-independent stage; temperature affects the enzymes involved. At the rate plateau one of these is limiting; increasing the limiting factor shifts the plateau upwards, while supra-optimal temperature causes denaturation and rate falls.` },
    ],
    red: [
      { q: 'A commercial tomato glasshouse uses heating, bright artificial lighting and CO₂ enrichment. Discuss whether the extra cost is worthwhile.', marks: 6, tier: 'red',
        modelAnswer: `Benefits: all three factors can be kept above normal limits, so photosynthesis and yield are maximised, crops can be grown all year, producing a higher income per m². Drawbacks: heating, lighting and CO₂ are expensive; environmental cost (energy use, CO₂ emissions). Decision depends on crop value and energy cost. For high-value crops like tomatoes near markets, the increased yield can outweigh costs — but only if energy is efficient and prices are stable.` },
      { q: 'A person eats a diet rich in protein but lacking in iron. Predict and explain the health effects.', marks: 5, tier: 'red',
        modelAnswer: `Without iron the body cannot make enough haemoglobin, so fewer functional red blood cells form — this is iron-deficiency anaemia. Symptoms: tiredness, shortness of breath on exertion, pallor. High protein is only partly helpful because protein makes the globin part but iron is needed for the haem group which binds O₂.` },
    ],
  },

  '2.5': {
    green: [
      { q: 'State the word equations for aerobic respiration and anaerobic respiration in yeast.', marks: 3, tier: 'green',
        modelAnswer: `Aerobic: glucose + oxygen → carbon dioxide + water (+ energy/ATP). Yeast anaerobic (fermentation): glucose → ethanol + carbon dioxide (+ energy).` },
      { q: 'State what happens in anaerobic respiration in animal muscle.', marks: 2, tier: 'green',
        modelAnswer: `Glucose is broken down in the absence of oxygen to produce lactic acid, releasing a small amount of ATP.` },
      { q: 'State where aerobic respiration takes place in a cell.', marks: 1, tier: 'green',
        modelAnswer: `In mitochondria (with an earlier stage, glycolysis, in the cytoplasm).` },
      { q: 'State two uses of ATP in a living cell.', marks: 2, tier: 'green',
        modelAnswer: `Muscle contraction, active transport, protein synthesis, cell division, nerve impulse conduction, heat production.` },
    ],
    amber: [
      { q: 'Compare the ATP yield of aerobic and anaerobic respiration and explain why they differ.', marks: 4, tier: 'amber',
        modelAnswer: `Aerobic respiration yields far more ATP per glucose (~32) compared with anaerobic (2). Aerobic respiration completely oxidises glucose to CO₂ and water via glycolysis, Krebs cycle and oxidative phosphorylation. Anaerobic respiration only completes glycolysis, so most of the chemical energy remains locked up in lactic acid or ethanol.` },
      { q: 'Explain why breathing rate and heart rate stay high after sprinting.', marks: 3, tier: 'amber',
        modelAnswer: `During the sprint muscles respired anaerobically, producing lactic acid and creating an oxygen debt. After exercise, extra oxygen is needed to break down lactic acid in the liver. Maintained high breathing and heart rate deliver this oxygen until the debt is repaid and lactic acid is cleared.` },
      { q: 'Describe how you could show with a practical that respiring yeast produces CO₂.', marks: 3, tier: 'amber',
        modelAnswer: `Make a suspension of yeast in glucose solution. Place it in a conical flask with a delivery tube leading into limewater. Warm gently (~30 °C). If respiration is occurring, CO₂ is released, bubbles through and turns limewater cloudy. Run a control with boiled (dead) yeast — no change.` },
    ],
    red: [
      { q: 'A student claims: "Anaerobic respiration in muscles is useless because it produces lactic acid." Evaluate this claim.', marks: 5, tier: 'red',
        modelAnswer: `Not fully correct. Anaerobic respiration produces ATP very quickly without needing oxygen, allowing short bursts of very intense exercise that aerobic respiration alone could not support. Lactic acid does cause fatigue and muscle pain, and must be removed later, but the ability to keep going for short periods when oxygen is insufficient is a real benefit. It is a trade-off, not useless.` },
      { q: 'Describe how the rate of respiration of germinating peas could be measured using a simple respirometer, and explain how each part of the apparatus supports valid data.', marks: 6, tier: 'red',
        modelAnswer: `Place germinating peas in a boiling tube with soda lime (absorbs CO₂) below a gauze. Seal with a bung and fine capillary tube dipped into coloured water in a beaker. As the peas respire aerobically, O₂ is used up; CO₂ is absorbed by soda lime — gas volume falls, water rises up the capillary at a measurable rate. A control with boiled peas rules out physical/non-living explanations. Temperature-controlled water bath keeps rate comparable. Repeats improve reliability.` },
    ],
  },

  '2.6': {
    green: [
      { q: 'State three differences between inhaled and exhaled air.', marks: 3, tier: 'green',
        modelAnswer: `Exhaled air has: less oxygen, more carbon dioxide, more water vapour, and is usually warmer than inhaled air.` },
      { q: 'State three ways in which alveoli are adapted for efficient gas exchange.', marks: 3, tier: 'green',
        modelAnswer: `Large combined surface area; walls one cell thick (short diffusion distance); moist surface (gases dissolve); good blood supply (maintains concentration gradient); rich in capillaries.` },
      { q: 'State two harmful components of tobacco smoke.', marks: 2, tier: 'green',
        modelAnswer: `Carbon monoxide (reduces O₂ transport by binding to haemoglobin); nicotine (addictive, raises heart rate/BP); tar (carcinogen, damages cilia); particulates (irritate airways).` },
      { q: 'State where gas exchange takes place in a leaf.', marks: 1, tier: 'green',
        modelAnswer: `In the spongy mesophyll, with gases entering and leaving via stomata (small pores, usually in the lower epidermis) controlled by guard cells.` },
    ],
    amber: [
      { q: 'Explain how the structure of the human breathing system enables efficient ventilation.', marks: 4, tier: 'amber',
        modelAnswer: `Rib cage and diaphragm work together — contraction of intercostals and diaphragm increases thoracic volume, lowering pressure so air rushes in (inhalation). Relaxation reverses this and pushes air out. Trachea and bronchi have cartilage rings to prevent collapse. Cilia and mucus clean incoming air. Alveoli at the end provide a huge gas-exchange surface.` },
      { q: 'Describe three long-term effects of smoking on the body.', marks: 3, tier: 'amber',
        modelAnswer: `Chronic bronchitis — mucus build-up and persistent cough due to damage to cilia. Emphysema — breakdown of alveoli walls reducing surface area, leading to breathlessness. Lung cancer — from carcinogens (tar). Increased risk of cardiovascular disease — due to nicotine raising BP and CO reducing O₂ transport.` },
      { q: 'Compare gas exchange in a leaf with that in an alveolus.', marks: 4, tier: 'amber',
        modelAnswer: `Both rely on diffusion across a moist thin surface and depend on concentration gradients. Leaves exchange CO₂ and O₂ through stomata directly with air; alveoli exchange O₂ and CO₂ between air and blood. Alveoli are ventilated actively by breathing (keeping gradient steep); leaves rely on air spaces in spongy mesophyll and the activity of photosynthesising cells to maintain gradients.` },
    ],
    red: [
      { q: 'A heavy smoker develops emphysema. Explain, with reference to Fick\'s law, why he becomes breathless even at rest.', marks: 5, tier: 'red',
        modelAnswer: `Fick\'s law: rate ∝ (surface area × concentration difference) ÷ diffusion distance. Emphysema destroys alveolar walls so multiple alveoli merge into larger sacs — surface area drops dramatically. Less O₂ crosses into the blood per breath. Even at rest the patient cannot exchange enough gas; breathing rate must rise to compensate, causing breathlessness and fatigue.` },
      { q: 'Describe and explain the differences between ventilation in humans and gas exchange in an insect.', marks: 6, tier: 'red',
        modelAnswer: `Humans use lungs: inhalation by contraction of diaphragm/intercostals; mass flow of air to alveoli; gas exchange with blood which transports O₂ to cells. Insects have tracheae opening at spiracles; gases diffuse directly to cells via branching tracheoles, without blood transport. Insects are small enough for diffusion to be sufficient; mammals are too large and need circulatory transport and mass flow ventilation. Active insects enhance this with ventilation movements of the abdomen.` },
    ],
  },

  '2.7': {
    green: [
      { q: 'State the function of xylem and phloem.', marks: 2, tier: 'green',
        modelAnswer: `Xylem — transports water and dissolved minerals from root to leaves; provides support. Phloem — transports dissolved sugars (sucrose) and amino acids from source (leaves) to sink (growing tissues / storage) in translocation.` },
      { q: 'State the four main components of blood and one function of each.', marks: 4, tier: 'green',
        modelAnswer: `Red blood cells — transport oxygen (haemoglobin). White blood cells — defence (phagocytes / lymphocytes making antibodies). Platelets — blood clotting. Plasma — liquid carrying cells, dissolved substances and heat.` },
      { q: 'State the route of blood through the heart from the vena cava to the aorta.', marks: 3, tier: 'green',
        modelAnswer: `Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta.` },
      { q: 'State one difference between an artery and a vein.', marks: 1, tier: 'green',
        modelAnswer: `Arteries have thick muscular walls and carry blood at high pressure away from the heart; veins have thinner walls, wider lumen and valves to prevent backflow of low-pressure blood returning to the heart.` },
    ],
    amber: [
      { q: 'Explain how a red blood cell is adapted for its function.', marks: 3, tier: 'amber',
        modelAnswer: `Biconcave disc shape gives large surface area for gas exchange. No nucleus — more space for haemoglobin. Haemoglobin binds O₂ reversibly (oxyhaemoglobin in lungs; releases in tissues). Small and flexible to squeeze through capillaries.` },
      { q: 'Describe the process of transpiration.', marks: 4, tier: 'amber',
        modelAnswer: `Water evaporates from the moist walls of mesophyll cells into air spaces inside the leaf. Water vapour then diffuses through the stomata into the atmosphere. Water is replaced from the xylem by a continuous column held together by cohesion; the transpiration pull draws more water up the plant from the roots.` },
      { q: 'Compare the structures of arteries, veins and capillaries.', marks: 4, tier: 'amber',
        modelAnswer: `Arteries: thick muscular/elastic walls, small lumen, no valves (except at the heart exit), carry blood under high pressure. Veins: thinner walls, wider lumen, valves, low pressure. Capillaries: walls one cell thick, very narrow lumen (single red blood cell wide), no muscle — adapted for exchange with tissues.` },
    ],
    red: [
      { q: 'Explain how water moves from soil to air via a plant.', marks: 5, tier: 'red',
        modelAnswer: `Water enters root hair cells by osmosis (soil solution is less concentrated than cell sap). It moves across the root cortex and into xylem vessels. Transpiration pull from leaves (driven by evaporation through stomata) creates tension, and cohesion/adhesion of water molecules draws a continuous column upwards in the xylem. In the leaf, water evaporates from mesophyll cells and diffuses out through stomata.` },
      { q: 'An athlete exercises. Describe and explain changes in heart rate, breathing and blood distribution.', marks: 6, tier: 'red',
        modelAnswer: `Heart rate and stroke volume rise (driven by adrenaline and nervous control) — cardiac output increases. Breathing rate and depth rise to supply more O₂ and remove more CO₂. Arterioles to working skeletal muscles dilate (more O₂/glucose delivered, more CO₂/heat removed). Arterioles to non-essential regions (e.g. gut) constrict so blood is redirected. Sweating increases to dissipate heat. All these changes keep the internal environment within limits despite increased respiration.` },
    ],
  },

  '2.8': {
    green: [
      { q: 'State what excretion is.', marks: 2, tier: 'green',
        modelAnswer: `The removal of the waste products of metabolism from the body. Examples: CO₂ from respiration (lungs), urea from deamination (kidneys), water/ions.` },
      { q: 'State the structures of the urinary system.', marks: 2, tier: 'green',
        modelAnswer: `Kidneys, ureters (kidney → bladder), bladder, urethra (bladder → outside).` },
      { q: 'State what deamination is and where it occurs.', marks: 2, tier: 'green',
        modelAnswer: `Deamination is the removal of the amino group from excess amino acids, forming ammonia, which is converted to urea. It takes place in the liver.` },
      { q: 'State the role of ADH.', marks: 2, tier: 'green',
        modelAnswer: `ADH (antidiuretic hormone) is released from the pituitary when blood is too concentrated. It increases permeability of collecting ducts to water, so more water is reabsorbed into blood, producing a smaller volume of more concentrated urine.` },
    ],
    amber: [
      { q: 'Describe the process of ultrafiltration in the kidney.', marks: 3, tier: 'amber',
        modelAnswer: `Blood enters the glomerulus at high pressure under a narrower efferent arteriole. Pressure forces small molecules (water, ions, glucose, urea) through the capillary and Bowman\'s capsule walls into the tubule. Large molecules and cells (proteins, RBCs) stay in the blood.` },
      { q: 'Describe selective reabsorption in the kidney.', marks: 3, tier: 'amber',
        modelAnswer: `In the proximal convoluted tubule, all glucose and most useful ions are actively transported back into the blood. Water follows by osmosis. This ensures waste (urea) continues along the tubule while valuable substances are saved.` },
      { q: 'Compare dialysis and kidney transplant as treatments for kidney failure.', marks: 4, tier: 'amber',
        modelAnswer: `Dialysis: removes wastes using a machine; regular (3× a week, several hours), restrictive diet, risk of infection, no surgery, no rejection. Transplant: one-off major surgery, matched donor required, lifelong immunosuppressants needed to prevent rejection, but gives near-normal life afterwards. Transplant is usually better long-term if a match is found; dialysis is the only option until then.` },
    ],
    red: [
      { q: 'Explain how the body maintains blood water balance using a negative feedback loop.', marks: 5, tier: 'red',
        modelAnswer: `Osmoreceptors in the hypothalamus detect blood water concentration. If too concentrated (e.g. after sweating), the pituitary releases more ADH. ADH acts on collecting ducts, raising permeability so more water is reabsorbed. Urine volume falls, concentration rises and blood water is restored — reduction in ADH follows. The opposite happens when blood is too dilute. This is negative feedback — the response opposes the initial change.` },
      { q: 'Why is a close tissue match and immunosuppressant treatment important in kidney transplant, and what are the drawbacks?', marks: 5, tier: 'red',
        modelAnswer: `The recipient\'s immune system sees foreign antigens on the donor kidney and would attack it (rejection). Matching reduces antigenic differences; immunosuppressants damp the immune response. Drawbacks: increased risk of infection and some cancers, drug side-effects, lifelong medication required, risk that rejection still occurs over time.` },
    ],
  },

  '2.9': {
    green: [
      { q: 'State the two types of coordination used by the body.', marks: 2, tier: 'green',
        modelAnswer: `Nervous — fast, electrical, short-lived, localised (via neurones and synapses). Hormonal — slower, chemical messengers carried in blood, longer-lasting, often widespread (from endocrine glands).` },
      { q: 'State the order of the reflex arc.', marks: 2, tier: 'green',
        modelAnswer: `Stimulus → receptor → sensory neurone → relay neurone (in spinal cord) → motor neurone → effector (muscle/gland) → response.` },
      { q: 'State two functions of the pancreas in homeostasis.', marks: 2, tier: 'green',
        modelAnswer: `Produces insulin (reduces blood glucose by promoting uptake and conversion to glycogen) and glucagon (raises blood glucose by converting glycogen back to glucose). Also secretes digestive enzymes.` },
      { q: 'State what a tropism is and give one example.', marks: 2, tier: 'green',
        modelAnswer: `A directional growth response of a plant to a stimulus. Examples: positive phototropism (shoots grow towards light), positive geotropism (roots grow towards gravity).` },
    ],
    amber: [
      { q: 'Explain how a reflex arc produces a response faster than a conscious action.', marks: 3, tier: 'amber',
        modelAnswer: `The reflex arc uses only three neurones (sensory, relay, motor) in the spinal cord and bypasses the brain. This shorter pathway has fewer synapses (where most delay happens) so the response is faster — important for protective reflexes e.g. withdrawing from a sharp object.` },
      { q: 'Describe how the pupil reflex protects the retina in bright light.', marks: 3, tier: 'amber',
        modelAnswer: `In bright light, circular muscles of the iris contract, radial muscles relax, and the pupil constricts — less light enters the eye. This prevents damage to photoreceptors (rods and cones) in the retina. The reverse occurs in dim light.` },
      { q: 'Describe how auxin causes a shoot to bend towards a light source.', marks: 4, tier: 'amber',
        modelAnswer: `Auxin is produced at the shoot tip and moves down the stem. In unidirectional light, auxin accumulates on the shaded side of the shoot. Auxin promotes cell elongation, so cells on the shaded side lengthen more than those on the lit side. Result: the shoot bends towards the light — positive phototropism.` },
    ],
    red: [
      { q: 'Discuss the differences in how nervous and hormonal communication would be expected to respond to (a) sudden danger and (b) long-term change in body temperature.', marks: 6, tier: 'red',
        modelAnswer: `(a) Sudden danger: nervous system (sensory neurones → CNS → motor neurones) gives fast, localised responses (e.g. reflex to withdraw from heat). Adrenaline, a hormone released from the adrenal glands during "fight or flight", supplements the response, raising heart rate and mobilising glucose — fast but broader. (b) Long-term change: hormonal responses dominate — e.g. ADH for water balance, thyroxine for metabolic rate, insulin/glucagon for blood glucose. These are slower but maintain internal conditions over time; negative feedback keeps variables around a set point.` },
      { q: 'Describe how insulin and glucagon work together to maintain blood glucose concentration.', marks: 5, tier: 'red',
        modelAnswer: `When blood glucose rises (after a meal), β-cells in the pancreas release insulin. Insulin causes liver and muscle cells to take up glucose and store it as glycogen, lowering blood glucose. When blood glucose falls (between meals, exercise), α-cells release glucagon. Glucagon promotes the breakdown of glycogen to glucose in the liver, raising blood glucose. This is negative feedback — the two hormones are antagonistic and keep glucose around ~5 mmol/L.` },
    ],
  },

  '3.1': {
    green: [
      { q: 'State the difference between sexual and asexual reproduction.', marks: 2, tier: 'green',
        modelAnswer: `Sexual: two parents, gametes fuse in fertilisation, offspring genetically different from parents (variation). Asexual: one parent, no gametes, offspring are genetically identical clones.` },
      { q: 'State the meaning of pollination.', marks: 2, tier: 'green',
        modelAnswer: `The transfer of pollen from an anther (male part) to a stigma (female part) of a flower. Can be self- or cross-pollination, by insect or wind.` },
      { q: 'State three adaptations of an insect-pollinated flower.', marks: 3, tier: 'green',
        modelAnswer: `Large colourful petals, nectar, scent (attract insects); sticky or spiky pollen (sticks to insect body); stigma and anthers inside flower so insect brushes both.` },
      { q: 'State the role of the placenta.', marks: 2, tier: 'green',
        modelAnswer: `Site of exchange between mother and fetus: O₂, glucose, amino acids → fetus; CO₂, urea → mother. Also acts as a partial barrier against some pathogens and toxins.` },
    ],
    amber: [
      { q: 'Compare wind- and insect-pollinated flowers, giving adaptations of each.', marks: 4, tier: 'amber',
        modelAnswer: `Insect-pollinated: large bright scented petals, nectaries, sticky/heavy pollen, enclosed stamens/stigma — attract animal vector, efficient pollen transfer. Wind-pollinated: small dull petals (or none), no scent/nectar, large feathery stigmas exposed outside flower, anthers hanging out, large amounts of light, smooth, dry pollen — adapted for random transfer in air currents.` },
      { q: 'Describe the menstrual cycle in outline.', marks: 4, tier: 'amber',
        modelAnswer: `Day 1–5: menstruation (lining shed). Day 6–13: FSH stimulates a follicle to develop in an ovary; oestrogen rebuilds the uterus lining. Day 14: LH surge triggers ovulation. Day 15–28: empty follicle (corpus luteum) secretes progesterone, which maintains the thick lining. If no fertilisation, progesterone falls, lining is shed — cycle restarts.` },
      { q: 'Describe how HIV can be transmitted and how spread can be reduced.', marks: 3, tier: 'amber',
        modelAnswer: `Transmitted via body fluids — blood (sharing needles / transfusion), unprotected sex, mother to baby (birth or breastmilk). Spread reduced by: condom use, screening blood, not sharing needles, antiretroviral therapy for infected mothers, public health education.` },
    ],
    red: [
      { q: 'Evaluate the advantages and disadvantages of sexual vs asexual reproduction for a plant species.', marks: 5, tier: 'red',
        modelAnswer: `Sexual: advantage — genetic variation allows adaptation; new combinations may resist disease, survive environmental change. Disadvantage — requires two parents, pollinators or wind, more energy. Asexual: advantage — rapid, no mate needed, ideal when conditions are favourable, offspring inherit useful gene combinations unchanged. Disadvantage — no variation, so population vulnerable to disease or climate change. Many plants use both (e.g. strawberries — seeds and runners) balancing the benefits.` },
      { q: 'Discuss the role of the placenta and amnion in development and protection of the fetus.', marks: 5, tier: 'red',
        modelAnswer: `Placenta: site of gas and nutrient exchange between mother\'s and fetus\'s blood (which do not mix). Provides O₂, glucose, amino acids; removes CO₂, urea. Partial barrier to pathogens and some toxins — but alcohol, nicotine, some drugs and some viruses (e.g. rubella) can cross, harming the fetus. Amnion: membrane enclosing fluid that cushions fetus from physical shock and allows it to move. Together they protect and support fetal development from fertilisation until birth.` },
    ],
  },

  '3.2': {
    green: [
      { q: 'State what is meant by (a) gene, (b) allele, (c) genotype, (d) phenotype.', marks: 4, tier: 'green',
        modelAnswer: `Gene: a length of DNA coding for a protein. Allele: different version of a gene. Genotype: the alleles an organism carries for a particular gene. Phenotype: the observable characteristic resulting from those alleles and the environment.` },
      { q: 'State the number of chromosomes in a human (a) body cell and (b) gamete.', marks: 2, tier: 'green',
        modelAnswer: `Body cell — 46 (23 pairs, diploid). Gamete — 23 (haploid).` },
      { q: 'State what a mutation is.', marks: 2, tier: 'green',
        modelAnswer: `A random change in the DNA base sequence of an organism. May be caused by mutagens (ionising radiation, chemicals, UV) or replication errors. Can be neutral, harmful, or beneficial.` },
      { q: 'State the sex chromosomes of a human male and female.', marks: 1, tier: 'green',
        modelAnswer: `Male XY, Female XX. The 50:50 sex ratio results because half the sperm carry X and half Y.` },
    ],
    amber: [
      { q: 'Use a genetic diagram to show a cross between two heterozygous parents (Bb × Bb). State the phenotype ratio of the offspring.', marks: 4, tier: 'amber',
        modelAnswer: `Parental genotypes: Bb × Bb. Gametes: B, b from each parent. Punnett square gives offspring genotypes BB : Bb : Bb : bb (ratio 1:2:1). Phenotypic ratio: 3 dominant : 1 recessive.` },
      { q: 'Describe Darwin\'s theory of evolution by natural selection.', marks: 4, tier: 'amber',
        modelAnswer: `1) Variation exists within a population due to mutation and sexual reproduction. 2) More offspring are produced than can survive (competition). 3) Individuals with advantageous alleles are more likely to survive to reproductive age. 4) They pass on these alleles; their frequency rises in the population. Over many generations this can lead to adaptation and, eventually, new species.` },
      { q: 'Explain how resistance to antibiotics arises and spreads in bacteria.', marks: 4, tier: 'amber',
        modelAnswer: `Random mutation in a few bacterial cells produces an allele giving antibiotic resistance. When the antibiotic is used, non-resistant bacteria are killed; resistant ones survive and reproduce rapidly. The resistance allele becomes more common. Over-use and misuse of antibiotics (and not finishing courses) speeds this up. Resistance genes can also spread horizontally on plasmids.` },
    ],
    red: [
      { q: 'Two parents who are both carriers of cystic fibrosis have a child. Use a Punnett square to calculate the probability of the child being (i) affected, (ii) a carrier, (iii) unaffected non-carrier, and explain what these results mean for the family.', marks: 6, tier: 'red',
        modelAnswer: `Parents genotype Ff × Ff (F normal, f CF allele). Offspring: FF, Ff, Ff, ff — ratio 1 FF : 2 Ff : 1 ff. Probabilities: (i) affected ff = 1/4 (25%), (ii) carrier Ff = 2/4 = 1/2 (50%), (iii) non-carrier FF = 1/4 (25%). Each pregnancy is independent — a 1 in 4 chance of an affected child in every pregnancy. Genetic counselling can help the family decide about screening.` },
      { q: 'Discuss how a mutation in a gene coding for haemoglobin (e.g. sickle cell) can be both harmful and beneficial in different environments.', marks: 5, tier: 'red',
        modelAnswer: `A single base substitution in the β-globin gene produces abnormal haemoglobin (HbS). Homozygous HbSS — red cells sickle, cause pain, organ damage; usually harmful. Heterozygous HbAS — only partial sickling; they are protected against malaria because Plasmodium cannot reproduce well in their red cells. In malarial regions, the mutation has been selected for because heterozygotes survive better. Outside malarial regions, it is a net disadvantage.` },
    ],
  },

  '4.1': {
    green: [
      { q: 'Define the terms population, community and ecosystem.', marks: 3, tier: 'green',
        modelAnswer: `Population — all individuals of one species in an area at one time. Community — all populations of different species living in the same area. Ecosystem — a community plus its abiotic (non-living) environment interacting as a system.` },
      { q: 'State two biotic and two abiotic factors that may affect a population.', marks: 2, tier: 'green',
        modelAnswer: `Biotic: predation, competition, disease, food supply. Abiotic: light intensity, temperature, pH, water, oxygen, soil nutrients.` },
      { q: 'State what a quadrat is and what it is used for.', marks: 2, tier: 'green',
        modelAnswer: `A square frame (usually 0.25 m² or 1 m²) used to mark off an area of ground to sample slow or non-moving organisms (such as plants) by counting or estimating percentage cover.` },
      { q: 'State one abiotic factor that usually limits plant growth in a woodland floor.', marks: 1, tier: 'green',
        modelAnswer: `Low light intensity below the canopy (or dry soil, or cold, etc.).` },
    ],
    amber: [
      { q: 'Describe how mark-release-recapture could be used to estimate the population of snails in a garden.', marks: 4, tier: 'amber',
        modelAnswer: `Collect a sample (e.g. 50 snails), mark them with a non-toxic paint spot, release them back where collected. After time for redistribution, collect a second sample. Count total captured (C) and those marked (R). Use Lincoln index: Estimated population N = (first catch × C) ÷ R. Assumes: no birth/death/migration, marks don\'t affect survival, marked animals mix with the population.` },
      { q: 'Describe how to use a quadrat and transect to study how plants are distributed across a sand dune system.', marks: 4, tier: 'amber',
        modelAnswer: `Run a tape (belt transect) from the sea to further inland. At regular intervals place a 0.5 m quadrat and record % cover of each plant species. Repeat several times to improve reliability. Plot a kite diagram of % cover against distance, which shows how communities change with abiotic factors such as salinity, water, stability and soil depth.` },
      { q: 'Explain why random sampling is important in ecology.', marks: 3, tier: 'amber',
        modelAnswer: `Random sampling avoids bias and gives a more representative estimate of population density or species diversity. Non-random sampling could over-sample visible or easier-to-reach areas, skewing results. Random numbers or coordinates are generated to place quadrats.` },
    ],
    red: [
      { q: 'A student estimates the density of dandelions in a field as 6 per m² using ten 0.25 m² quadrats. Calculate: (i) mean per quadrat; (ii) total number in a 50 m × 50 m field. Suggest one source of error.', marks: 5, tier: 'red',
        modelAnswer: `(i) 6 per m² × 0.25 = 1.5 per quadrat mean. (ii) Area of field = 2500 m². Total ≈ 6 × 2500 = 15 000 dandelions. Sources of error: too few quadrats for reliability; uneven distribution (patchy) means random sampling is essential; edge effects; miscounting small plants. Repeating more times and using larger quadrats reduces error.` },
      { q: 'Evaluate the use of mark-release-recapture for estimating a population of beetles in leaf litter.', marks: 5, tier: 'red',
        modelAnswer: `Useful for mobile species where direct counts fail. Assumptions: population closed (no births/deaths/migration over the study), marking does not affect survival or behaviour (e.g. paint doesn\'t attract predators), marked individuals mix randomly with unmarked. Violations give biased estimates. Small samples give less reliable results. Ethical considerations — minimise handling stress. Still, MRR gives a reasonable estimate where other methods fail.` },
    ],
  },

  '4.2': {
    green: [
      { q: 'State what is meant by a trophic level.', marks: 2, tier: 'green',
        modelAnswer: `A feeding position in a food chain, e.g. producer (level 1), primary consumer (herbivore, level 2), secondary consumer, tertiary consumer, apex predator.` },
      { q: 'State three ways energy is lost between trophic levels.', marks: 3, tier: 'green',
        modelAnswer: `Respiration / heat; movement; undigested material (faeces); nitrogenous waste (urine/urea); parts not eaten (bones, fur).` },
      { q: 'State why a pyramid of biomass is almost always upright but a pyramid of numbers may not be.', marks: 2, tier: 'green',
        modelAnswer: `Biomass decreases at each trophic level because so much energy (and hence mass) is lost. Numbers vary because producers can be very large (e.g. one tree) supporting very many small consumers, making the pyramid of numbers inverted or irregular.` },
      { q: 'State the role of decomposers in an ecosystem.', marks: 2, tier: 'green',
        modelAnswer: `Break down dead organisms and waste by releasing enzymes (extracellular digestion) and absorbing the products. Returns nitrogen, carbon and other nutrients to the soil or atmosphere.` },
    ],
    amber: [
      { q: 'Explain why food chains rarely contain more than four or five trophic levels.', marks: 3, tier: 'amber',
        modelAnswer: `Only about 10% of energy is transferred to the next level; the rest is lost in respiration (heat), movement, undigested food and waste. After several transfers there is not enough energy left to support another level.` },
      { q: 'Construct a food chain including a producer, herbivore, carnivore and decomposer for a British woodland.', marks: 3, tier: 'amber',
        modelAnswer: `Oak tree (producer) → caterpillar (primary consumer) → blue tit (secondary consumer) → sparrowhawk (tertiary consumer). Decomposers (fungi/bacteria) break down dead leaves and faeces returning nutrients to soil.` },
      { q: 'Describe how bioaccumulation of a toxin like DDT affects top predators.', marks: 4, tier: 'amber',
        modelAnswer: `Small amounts of DDT are absorbed from the environment by producers. DDT is stored in fat, not excreted. Primary consumers eat many producers, secondary consumers eat many primary consumers, so the toxin concentrates at each level. Top predators (e.g. peregrine falcons) accumulate high concentrations, leading to effects such as eggshell thinning and population decline.` },
    ],
    red: [
      { q: 'Calculate the maximum energy that could reach a tertiary consumer if producers fix 20 000 kJ m⁻² yr⁻¹, assuming 10% transfer at each step.', marks: 3, tier: 'red',
        modelAnswer: `Producer → primary: 20 000 × 0.1 = 2000 kJ. Primary → secondary: 200 kJ. Secondary → tertiary: 20 kJ m⁻² yr⁻¹.` },
      { q: 'Discuss whether a purely vegetarian diet is more energy-efficient than a meat-based diet for feeding the world\'s population.', marks: 5, tier: 'red',
        modelAnswer: `Eating at a lower trophic level (plants) is more energy-efficient: less energy lost (~90%) in extra transfers. In principle more people can be fed per unit of farmland if food chains are shorter. However, some land is only suitable for grazing (not crops); meat supplies essential amino acids, iron, vitamin B12 more concentrated than plants; economic and cultural factors also matter. A sensible conclusion: reducing meat (especially beef) helps sustainability, but purely vegetarian diets are not the only solution.` },
    ],
  },

  '4.3': {
    green: [
      { q: 'State three processes that return carbon to the atmosphere.', marks: 3, tier: 'green',
        modelAnswer: `Respiration by plants, animals and decomposers; combustion (burning of fossil fuels / wood); decomposition of dead organic matter.` },
      { q: 'State the role of decomposers in the nitrogen cycle.', marks: 2, tier: 'green',
        modelAnswer: `Decomposers break down dead organisms and waste, releasing ammonia through deamination. This is then converted by nitrifying bacteria to nitrites and nitrates, which plants can absorb.` },
      { q: 'State what nitrogen-fixing bacteria do.', marks: 2, tier: 'green',
        modelAnswer: `Convert atmospheric nitrogen gas (N₂) into ammonia/ammonium compounds or directly into amino acids. Found in soil and in root nodules of legumes.` },
      { q: 'State two main ways water enters the atmosphere in the water cycle.', marks: 2, tier: 'green',
        modelAnswer: `Evaporation from oceans, lakes and wet surfaces; transpiration from plants.` },
    ],
    amber: [
      { q: 'Describe the role of bacteria in the nitrogen cycle, naming the four key types.', marks: 4, tier: 'amber',
        modelAnswer: `Nitrogen-fixing (e.g. Rhizobium) — fix atmospheric N₂ into ammonia/amino acids. Nitrifying (e.g. Nitrosomonas, Nitrobacter) — oxidise ammonia → nitrites → nitrates. Denitrifying — reduce nitrates back to N₂ in anaerobic soils (loss of soil fertility). Decomposers (including putrefying bacteria) — return N from dead tissue/waste as ammonia.` },
      { q: 'Explain how carbon in a tree may end up as CO₂ in the atmosphere.', marks: 4, tier: 'amber',
        modelAnswer: `Carbon in the tree (as organic molecules) can be released as CO₂ via: (1) respiration of the tree itself; (2) the tree being eaten by an animal and then respired by it; (3) the tree dying and being decomposed by bacteria/fungi that respire; (4) combustion — the tree being burned.` },
      { q: 'Explain why a waterlogged soil often becomes infertile.', marks: 3, tier: 'amber',
        modelAnswer: `Waterlogging creates anaerobic conditions. Denitrifying bacteria (which are anaerobic) thrive and convert nitrates in the soil back to N₂ gas, which escapes to the atmosphere. Less nitrate is available for plants, reducing growth and protein synthesis.` },
    ],
    red: [
      { q: 'Describe the role of the carbon cycle in the enhanced greenhouse effect and suggest two actions humans can take to slow it.', marks: 5, tier: 'red',
        modelAnswer: `Human activities (burning fossil fuels, deforestation, intensive livestock farming) release more CO₂ and CH₄ than natural sinks (photosynthesis, oceans) can remove. Atmospheric CO₂ rises, trapping more infrared radiation — enhanced greenhouse effect, global warming. Actions: reforestation/afforestation (increase photosynthesis), switch to renewables (reduce combustion), reduce beef/dairy consumption (methane), carbon capture, improve energy efficiency.` },
      { q: 'Suggest why crop rotation with legumes reduces the need for artificial fertiliser.', marks: 4, tier: 'red',
        modelAnswer: `Legumes such as peas and clover have root nodules containing nitrogen-fixing bacteria, adding nitrogen compounds to the soil. When the legume is ploughed in, organic matter rich in nitrogen remains. The following crop therefore has more available nitrate and needs less synthetic fertiliser. This is more sustainable, saves money and reduces eutrophication risk.` },
    ],
  },

  '4.4': {
    green: [
      { q: 'State two human activities that increase atmospheric CO₂.', marks: 2, tier: 'green',
        modelAnswer: `Burning fossil fuels (power, transport, industry); deforestation (fewer trees photosynthesising, often combined with burning of cleared wood).` },
      { q: 'State two greenhouse gases.', marks: 2, tier: 'green',
        modelAnswer: `Carbon dioxide, methane, water vapour, nitrous oxide.` },
      { q: 'State the meaning of eutrophication.', marks: 2, tier: 'green',
        modelAnswer: `Excessive enrichment of water with nutrients (nitrates, phosphates) from fertiliser or sewage, causing algal blooms and oxygen depletion, leading to death of aquatic animals.` },
      { q: 'State two effects of deforestation.', marks: 2, tier: 'green',
        modelAnswer: `Loss of habitat / biodiversity; soil erosion; increased atmospheric CO₂; disruption of the water cycle; local climate change.` },
    ],
    amber: [
      { q: 'Explain, step-by-step, how the over-use of fertiliser can cause fish kills in a nearby river.', marks: 4, tier: 'amber',
        modelAnswer: `Rain washes excess nitrate/phosphate into the river. Algae and water plants grow rapidly (algal bloom). The bloom blocks sunlight, so underwater plants die. Decomposer bacteria break down the dead plants and respire aerobically — using up dissolved oxygen. Fish and other aerobic animals suffocate and die.` },
      { q: 'Describe two impacts of climate change on biodiversity.', marks: 4, tier: 'amber',
        modelAnswer: `Species range shifts — organisms move poleward or uphill, some areas lose species. Phenological mismatch — plants flower before pollinators emerge. Coral bleaching — warm oceans cause loss of symbiotic algae, leading to reef death. Polar species (e.g. polar bear) lose habitat as ice melts. Extinction risk rises for narrowly adapted species.` },
      { q: 'Describe two conservation measures taken to protect endangered species.', marks: 3, tier: 'amber',
        modelAnswer: `Habitat protection (national parks, reserves). Captive breeding and release (e.g. giant panda). Protected species legislation and control of international trade (CITES). Seed banks and sperm/egg cryobanks. Ecotourism to support local economy while protecting habitats.` },
    ],
    red: [
      { q: 'Evaluate the advantages and disadvantages of switching from coal power to wind power to reduce CO₂ emissions.', marks: 5, tier: 'red',
        modelAnswer: `Advantages: no CO₂ emitted during generation; no air pollutants (SO₂, particulates); renewable; once built, running costs low; job creation. Disadvantages: intermittent (depends on wind), needs storage or backup; high initial cost; visual impact; some wildlife impact (birds, bats); manufacturing turbines still uses energy and materials. Overall, wind helps reduce CO₂ but is usually combined with other renewables and storage to provide reliable supply.` },
      { q: 'A student says "individual behaviour can\'t really affect climate change — only governments can." Discuss this view.', marks: 5, tier: 'red',
        modelAnswer: `Partly true — governments set energy policy, industry standards and international agreements which have the largest effect. However, individual actions also matter: reduced meat/dairy consumption, less car/plane travel, better home insulation, recycling, supporting renewable energy tariffs. Individual consumer behaviour drives market demand and political will. Combined individual and government action is the most effective.` },
    ],
  },

  '5.1': {
    green: [
      { q: 'State three conditions controlled in a glasshouse to maximise crop yield.', marks: 3, tier: 'green',
        modelAnswer: `Temperature (optimal for photosynthesis and growth), light (bright for long hours), CO₂ (enriched to ~1000 ppm), water (irrigation), mineral nutrition (fertiliser), pest control.` },
      { q: 'State the role of yeast in baking bread.', marks: 2, tier: 'green',
        modelAnswer: `Yeast respires anaerobically on sugars in dough, producing CO₂ gas (which causes the dough to rise) and ethanol (evaporates during baking).` },
      { q: 'State the microbe used to make yoghurt and the main product it makes.', marks: 2, tier: 'green',
        modelAnswer: `Lactobacillus bacteria. They ferment lactose in milk to produce lactic acid, which curdles the milk proteins and gives the characteristic texture and flavour.` },
      { q: 'State two reasons why fish are farmed rather than caught wild.', marks: 2, tier: 'green',
        modelAnswer: `Controlled conditions (food, health) give higher yields; wild stocks are over-fished and collapsing; farmed fish can be sold fresh at consistent size; easier to plan supply.` },
    ],
    amber: [
      { q: 'Explain how conditions such as temperature, oxygen and sugar concentration are controlled in beer brewing.', marks: 4, tier: 'amber',
        modelAnswer: `Warmth (~25 °C) optimal for yeast enzymes. Barley malted to convert starch to sugars (fermentable maltose). Wort is boiled then cooled before yeast is added. Oxygen excluded (anaerobic) so yeast respires anaerobically producing ethanol and CO₂. Sugars (glucose/maltose) at high concentration to maximise ethanol. pH often slightly acidic to discourage bacterial contamination.` },
      { q: 'Describe advantages and disadvantages of biological pest control compared with chemical pesticides.', marks: 4, tier: 'amber',
        modelAnswer: `Biological control: introduces a natural predator/parasite/pathogen. Advantages — no chemical residue, specific to target pest, self-sustaining, no bioaccumulation. Disadvantages — slower, control may not be complete, introduced organism may itself become a pest. Chemical pesticides: advantages — fast-acting, cheap, effective. Disadvantages — kill beneficial insects, bioaccumulation, pesticide resistance.` },
      { q: 'Explain two ways that intensive fish farming can harm the environment.', marks: 3, tier: 'amber',
        modelAnswer: `Waste (faeces, uneaten food) builds up under cages, enriching water and causing algal blooms/eutrophication. Parasites (sea lice) and diseases spread from farmed to wild fish. Escaped farmed fish interbreed with wild populations, reducing genetic diversity. Wild fish caught as fish-meal feed deplete ocean stocks.` },
    ],
    red: [
      { q: 'A farmer heats a tomato glasshouse and enriches CO₂. Yield doubles compared with outdoor growing but profits fall. Suggest and explain why profits might fall.', marks: 4, tier: 'red',
        modelAnswer: `Heating, lighting, CO₂ enrichment and pest control all cost money. If the price per tomato doesn\'t rise enough, the extra cost can exceed the extra income from yield. Energy prices may rise faster than tomato prices, eroding margins. Initial capital cost of the glasshouse and equipment is high. Market competition can lower tomato prices.` },
      { q: 'Discuss the ethical and environmental concerns of very intensive broiler chicken farming.', marks: 5, tier: 'red',
        modelAnswer: `Ethical — high stocking density limits natural behaviour, fast-growing breeds suffer leg problems/heart disease, short life, welfare concerns. Environmental — large amounts of grain used as feed (competing with human food), waste nitrogen in manure can cause eutrophication, antibiotic overuse drives resistance. Benefits: cheap protein, efficient conversion of plant to animal protein, stable supply. Decision depends on balancing cost, welfare and environmental impact.` },
    ],
  },

  '5.2': {
    green: [
      { q: 'State what selective breeding is.', marks: 2, tier: 'green',
        modelAnswer: `The process by which humans choose individuals with desirable characteristics to breed together, aiming to increase the frequency of those characteristics in the next generation.` },
      { q: 'State two characteristics bred into modern wheat.', marks: 2, tier: 'green',
        modelAnswer: `High grain yield, short stem (resists lodging/wind), disease resistance, good baking quality, drought/heat tolerance.` },
      { q: 'State one desirable trait bred into dairy cattle.', marks: 1, tier: 'green',
        modelAnswer: `Large volume of milk per lactation.` },
      { q: 'State why selective breeding is slow.', marks: 2, tier: 'green',
        modelAnswer: `Each generation takes time, especially in animals. Many generations are needed to fix a trait and to combine multiple traits. Only existing genetic variation can be used.` },
    ],
    amber: [
      { q: 'Describe the main steps of selectively breeding chickens for increased egg production.', marks: 4, tier: 'amber',
        modelAnswer: `1) Identify hens that lay most eggs and cockerels from high-egg-laying mothers. 2) Breed these together. 3) Select the highest-yielding daughters from the offspring and breed again. 4) Repeat over many generations. Each generation, the frequency of alleles for high yield rises, and the population mean egg production increases.` },
      { q: 'Explain why selective breeding reduces genetic variation.', marks: 3, tier: 'amber',
        modelAnswer: `Only a small number of chosen individuals contribute alleles to the next generation. Alleles associated with non-selected traits are lost, and the chosen population becomes more homozygous. This is a genetic bottleneck — overall genetic variation falls.` },
      { q: 'Compare selective breeding with genetic modification.', marks: 4, tier: 'amber',
        modelAnswer: `Both aim to produce desirable traits. Selective breeding uses natural mating over many generations, relies on existing variation within the species. GM directly inserts a specific gene (often from another species) in a single generation, using restriction enzymes, ligase and a vector. GM is faster and can introduce truly novel traits but is more expensive, regulated and raises ethical concerns.` },
    ],
    red: [
      { q: 'Pedigree dog breeds often suffer from inherited health problems. Explain why.', marks: 4, tier: 'red',
        modelAnswer: `Dog breeds come from narrow founding populations, and selective breeding for appearance has repeatedly inbred closely related individuals. Harmful recessive alleles become homozygous more often (inbreeding depression). Examples: hip dysplasia in Labradors, breathing problems in bulldogs, heart problems in Cavalier King Charles Spaniels. Genetic diversity is further narrowed by popular-sire effects.` },
      { q: 'A wheat crop becomes infected by a new fungal disease. Explain why genetic diversity in wild wheat relatives is a valuable resource for plant breeders.', marks: 5, tier: 'red',
        modelAnswer: `Modern crop varieties are genetically uniform, so a single disease can wipe out whole harvests. Wild relatives carry a large pool of alleles, including some that confer resistance to diseases that haven\'t yet been a problem. Breeders can cross modern varieties with wild relatives (or use their DNA in GM) to introduce resistance. Protecting wild plant diversity through seed banks is therefore essential for future food security.` },
    ],
  },

  '5.3': {
    green: [
      { q: 'State what genetic modification is.', marks: 2, tier: 'green',
        modelAnswer: `Changing the genome of an organism by inserting, deleting or altering a specific gene using laboratory techniques. Often a gene is inserted from a different species (transgenesis).` },
      { q: 'State what a restriction enzyme does.', marks: 2, tier: 'green',
        modelAnswer: `Cuts DNA at a specific base sequence. Many leave short "sticky ends" of unpaired bases, which can base-pair with matching ends to join DNA from different sources.` },
      { q: 'State the function of DNA ligase.', marks: 1, tier: 'green',
        modelAnswer: `Joins DNA fragments together by forming phosphodiester bonds between sticky (or blunt) ends.` },
      { q: 'State one benefit and one concern of GM crops.', marks: 2, tier: 'green',
        modelAnswer: `Benefit — higher yield, disease/pest resistance, enhanced nutrition (e.g. golden rice). Concern — possible spread of transgenes to wild relatives, dependence on biotech companies, unknown long-term ecological effects.` },
    ],
    amber: [
      { q: 'Describe how genetically engineered bacteria are used to produce human insulin.', marks: 5, tier: 'amber',
        modelAnswer: `1) Isolate the human insulin gene using restriction enzymes. 2) Cut a bacterial plasmid with the same restriction enzyme, giving compatible sticky ends. 3) Use DNA ligase to join the insulin gene into the plasmid — recombinant plasmid. 4) Transform E. coli with the recombinant plasmid (heat shock or electroporation). 5) Culture bacteria on selective medium to identify successful transformants. 6) Grow in large fermenters under optimum conditions; bacteria produce human insulin. 7) Insulin is extracted, purified and used by diabetic patients.` },
      { q: 'Describe two features of Bt maize that make it attractive to farmers.', marks: 3, tier: 'amber',
        modelAnswer: `Bt maize has a gene from Bacillus thuringiensis encoding a toxin that kills insect larvae eating the plant — reduced need for chemical insecticide. This can mean higher yield, less labour, lower cost. Some Bt varieties are also modified for herbicide tolerance, making weed control easier.` },
      { q: 'Describe two concerns about using antibiotic-resistance genes as markers in GM.', marks: 3, tier: 'amber',
        modelAnswer: `Risk of the resistance gene spreading horizontally into gut bacteria or environmental microbes, potentially reducing effectiveness of antibiotics. Regulatory concerns and public acceptance. Modern methods use alternative markers (e.g. fluorescent proteins) to avoid this.` },
    ],
    red: [
      { q: 'Discuss the ethical and environmental issues of growing GM crops resistant to a particular herbicide.', marks: 5, tier: 'red',
        modelAnswer: `Benefits: farmers can spray a cheap herbicide and kill weeds without damaging the crop — higher yields, simpler management. Concerns: (1) Gene flow — herbicide-tolerance gene could transfer to wild relatives (creating "superweeds"). (2) Over-reliance on one herbicide could drive weed resistance. (3) Biodiversity loss as spraying removes all non-crop plants. (4) Ethical — farmers pay for patented seeds every year. Decisions should balance yield gains against environmental and social risks.` },
      { q: 'Compare the risks and benefits of GM salmon engineered to grow twice as fast as wild salmon.', marks: 5, tier: 'red',
        modelAnswer: `Benefits: more food per unit feed, reduced pressure on wild stocks, faster turnover, potentially cheaper fish. Risks: escaped GM salmon could outcompete or interbreed with wild salmon, reducing genetic diversity; welfare issues if rapid growth causes skeletal deformities; public acceptance uncertain; regulation needed to ensure containment. Mitigation: sterile triploid females grown in inland tanks reduces escape risk. Decision: careful regulation is key.` },
    ],
  },

  '5.4': {
    green: [
      { q: 'State what is meant by a clone.', marks: 2, tier: 'green',
        modelAnswer: `A group of genetically identical organisms (or cells) produced asexually from a single parent (or by techniques such as nuclear transfer).` },
      { q: 'State two commercial uses of plant cloning.', marks: 2, tier: 'green',
        modelAnswer: `Mass production of identical crop plants (e.g. bananas, orchids); rapid multiplication of a rare or valuable cultivar; production of virus-free stock plants.` },
      { q: 'State what is meant by nuclear transfer in animal cloning.', marks: 2, tier: 'green',
        modelAnswer: `The nucleus of a differentiated body cell from the adult to be cloned is inserted into an enucleated egg cell. Stimulated to divide, it develops into an embryo genetically identical to the nucleus donor.` },
      { q: 'State one disadvantage of cloning farm animals.', marks: 1, tier: 'green',
        modelAnswer: `Low genetic diversity in the herd makes it more vulnerable to disease. Also low success rate in the cloning process, higher rate of health problems in clones.` },
    ],
    amber: [
      { q: 'Describe the main steps of plant micropropagation.', marks: 4, tier: 'amber',
        modelAnswer: `1) Take small pieces (explants) of tissue (e.g. stem tip) from a chosen plant. 2) Sterilise to remove microbes. 3) Place on nutrient agar with plant hormones (auxin and cytokinin) in sterile conditions. 4) Callus forms, then shoots and roots when hormone ratio is changed. 5) Transfer plantlets to compost and grow on. Thousands of identical plants can be produced from one original.` },
      { q: 'Describe how Dolly the sheep was cloned.', marks: 4, tier: 'amber',
        modelAnswer: `1) Removed nucleus from an udder cell of the Finn-Dorset donor sheep. 2) Took an egg cell from a Scottish Blackface ewe and removed its nucleus (enucleation). 3) Fused udder-cell nucleus with enucleated egg using an electric shock — cell behaved like a zygote. 4) Cell divided into an embryo, which was implanted into a surrogate Scottish Blackface ewe. 5) Dolly was born as a clone of the Finn-Dorset donor (not of the surrogate).` },
      { q: 'Explain why plant cloning is often easier than animal cloning.', marks: 3, tier: 'amber',
        modelAnswer: `Many plant cells remain totipotent — able to become any cell of the plant — so small pieces of tissue can regenerate a whole plant under the right hormones. Most adult animal cells are specialised (differentiated); reprogramming them requires complex techniques (e.g. nuclear transfer) and has low success rates.` },
    ],
    red: [
      { q: 'Discuss ethical concerns around cloning farm animals for food.', marks: 5, tier: 'red',
        modelAnswer: `Concerns: welfare — many clones have health problems (abnormal size at birth, early death); unnatural process, human manipulation of reproduction; loss of genetic diversity; consumer acceptance and labelling. Benefits: preserve valuable genetics of a top animal; potentially uniform quality product; scientific knowledge. Most countries require strict regulation; labelling debates are active. Decisions should weigh welfare and environmental impact against agricultural benefits.` },
      { q: 'Compare advantages and disadvantages of cloning an endangered animal (e.g. a rare big cat) to help save it from extinction.', marks: 5, tier: 'red',
        modelAnswer: `Advantages: preserves genetic material of dying individuals, increases population size faster than natural breeding, useful where few individuals remain. Disadvantages: low success rate and welfare issues for clones; does not add new genetic variation — the population is still vulnerable to disease; diverts resources from habitat protection, which is the main cause of extinction. Overall, cloning is not a substitute for addressing habitat loss and poaching.` },
    ],
  },

  'RP': {
    green: [
      { q: 'State why controls are included in biological investigations.', marks: 2, tier: 'green',
        modelAnswer: `A control keeps the independent variable at a baseline (usually absent or fixed at a known value) while keeping all other variables the same as the experimental group. This allows the experimenter to show that any change in the dependent variable is caused by the IV alone.` },
      { q: 'State how to test a leaf for starch (destarched leaf method).', marks: 3, tier: 'green',
        modelAnswer: `Destarch the plant in the dark for 24–48 h. Expose to test conditions. Then: kill leaf in boiling water; soften by boiling in ethanol to remove chlorophyll (ethanol OFF the flame because it\'s flammable); rinse in water; add iodine — blue-black where starch is present.` },
      { q: 'State the independent, dependent and control variables in a potato osmosis experiment.', marks: 3, tier: 'green',
        modelAnswer: `IV — concentration of sucrose solution. DV — percentage change in mass (or length) of the potato cylinder. Controls — same temperature, same time, same size and shape of potato, same volume of solution, same type of potato.` },
      { q: 'State one advantage of repeating measurements.', marks: 1, tier: 'green',
        modelAnswer: `Allows a mean to be calculated, reducing the effect of random errors and making the result more reliable.` },
    ],
    amber: [
      { q: 'Describe a valid investigation into the effect of light intensity on the rate of photosynthesis in pondweed.', marks: 5, tier: 'amber',
        modelAnswer: `IV: distance of lamp from pondweed (so light intensity ∝ 1/d²). DV: rate of oxygen bubble production or volume of O₂ collected over fixed time. Controls: same species and length of pondweed, same water temperature (use a heat-sink beaker), same CO₂ source (e.g. 1% NaHCO₃), same viewer. Method: place pondweed in tube, move lamp to set distances, allow 2 min to equilibrate, count bubbles for 1 min, repeat 3×, take mean. Plot rate vs 1/d².` },
      { q: 'Describe how you could investigate the effect of temperature on enzyme activity using amylase and starch.', marks: 5, tier: 'amber',
        modelAnswer: `Place amylase and starch in separate tubes in water baths at different temperatures (e.g. 10, 20, 30, 40, 50, 60 °C). Allow to equilibrate. Mix, start timer, remove a drop every 30 s onto a spotting tile with iodine. Record the time until iodine stays orange-brown (starch fully digested). Rate = 1/time. Repeat 3×. Controls: same volume and concentration of amylase and starch, same pH. Plot rate vs temperature — expect optimum around 37 °C.` },
      { q: 'Describe how you could use leaf chromatography to separate the pigments in a leaf extract.', marks: 4, tier: 'amber',
        modelAnswer: `Grind leaf with a little sand and solvent (propanone) to extract pigments. Spot a concentrated line near the bottom of chromatography paper above solvent line. Let solvent rise up paper in a covered tank. As it travels, pigments separate by solubility. Measure distance moved by each pigment and solvent front; calculate Rf = pigment distance ÷ solvent-front distance. Different pigments (chlorophyll a, b, carotene, xanthophyll) give different Rf values.` },
    ],
    red: [
      { q: 'Evaluate the use of a potometer to measure rate of transpiration. Suggest limitations and improvements.', marks: 5, tier: 'red',
        modelAnswer: `A potometer measures rate of water uptake by a cut shoot, which is approximately equal to the rate of transpiration. Limitations: cut shoot is not a whole plant; may have air bubbles affecting readings; some water is used in photosynthesis. Improvements: set up under water to avoid air bubbles in xylem; allow shoot to equilibrate; use leafy shoots of similar size/species; repeat with different conditions (humidity, temperature, wind, light) to compare effects. Presenting rate of water uptake over time with several repeats improves reliability.` },
      { q: 'A student\'s results from an osmosis experiment are erratic. Suggest possible sources of systematic and random error and how to reduce each.', marks: 5, tier: 'red',
        modelAnswer: `Random errors: variation in potato cylinder sizes, timing, drying before weighing — reduce by repeating, using a template/cork borer, standardising drying method. Systematic errors: balance zero drift, using different potatoes with different water content, concentrations not accurately made — reduce by zeroing balance, using one potato, using volumetric flasks and pipettes to make standard solutions. Plotting mean of three repeats with error bars identifies remaining variability.` },
    ],
  },

};
