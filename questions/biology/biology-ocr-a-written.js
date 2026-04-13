/*
 * OCR A A-Level Biology — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const BIOLOGY_OCR_A_WRITTEN = {

  'M1': {
    green: [
      {
        q: 'State two ways to increase the reliability of experimental results.',
        marks: 2, tier: 'green',
        modelAnswer: `• Repeat the experiment multiple times and calculate a mean (1)\n• Use a large sample size to reduce the effect of anomalies (1)`
      },
      {
        q: 'State what is meant by the term "resolution" of a measuring instrument.',
        marks: 2, tier: 'green',
        modelAnswer: `Resolution is the smallest change in a quantity that an instrument can detect/measure (1). For example, a ruler with mm markings has a resolution of 1 mm (1).`
      },
      {
        q: 'Identify the independent variable and the dependent variable in an experiment investigating the effect of temperature on enzyme activity.',
        marks: 2, tier: 'green',
        modelAnswer: `• Independent variable: temperature (the variable deliberately changed by the experimenter) (1)\n• Dependent variable: rate of enzyme activity / rate of reaction (the variable measured) (1)`
      },
      {
        q: 'State the difference between accuracy and precision.',
        marks: 2, tier: 'green',
        modelAnswer: `• Accuracy: how close a measured value is to the true value (1)\n• Precision: how close repeated measurements are to each other (low spread/high reproducibility) (1)`
      },
    ],
    amber: [
      {
        q: 'Describe how you would carry out a serial dilution to produce five concentrations of sucrose solution from a 1.0 mol/dm³ stock, each diluted by a factor of 2.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Label five test tubes; add 5 cm³ of 1.0 mol/dm³ stock to tube 1 (1)\n• Transfer 5 cm³ from tube 1 to tube 2 containing 5 cm³ distilled water, mix thoroughly — concentration now 0.5 mol/dm³ (1)\n• Repeat: transfer 5 cm³ from tube 2 to tube 3 (with 5 cm³ water), giving 0.25 mol/dm³; continue for tubes 4 (0.125) and 5 (0.0625) (1)\n• Mix each tube thoroughly before transferring to ensure even dilution (1)`
      },
      {
        q: 'Explain why a control experiment is important and describe what a suitable control would be for an experiment testing the effect of amylase on starch breakdown.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A control shows what happens without the independent variable, confirming that any observed change is due to the IV and not other factors (1)\n• The control should contain all the same conditions (starch solution, same temperature, same volume) but with boiled/denatured amylase or water in place of active amylase (1)\n• If starch does not break down in the control, we can be confident that any breakdown in the experimental tubes is due to amylase activity (1)\n• This increases the validity of the conclusion (1)`
      },
      {
        q: 'Explain the difference between systematic errors and random errors, and describe how each can be reduced.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Systematic error: occurs consistently in the same direction every time (e.g. a zero error on a balance) — it affects accuracy (1)\n• Reduced by: calibrating equipment, using correct technique, identifying and eliminating the source (1)\n• Random error: unpredictable variation between measurements (e.g. slight differences in reading a meniscus) — it affects precision (1)\n• Reduced by: taking repeat measurements and calculating a mean, using more sensitive equipment (1)\n• Systematic errors cannot be reduced by averaging; random errors can (1)`
      },
      {
        q: 'Describe how a student could use a potometer to investigate the effect of wind on transpiration rate. Include at least two control variables.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Set up a potometer with a leafy shoot sealed with vaseline; record the distance an air bubble moves in a set time to measure water uptake rate (1)\n• Measure rate with no wind (control), then with a fan at set distances to provide wind (1)\n• Control variables: temperature (use same room/conditions), light intensity (keep constant), humidity, same plant shoot, same time period for each measurement (1)\n• Repeat each condition at least 3 times and calculate mean rate (1)\n• Cut shoot under water to prevent air locks; allow equilibration time before readings (1)`
      },
    ],
    red: [
      {
        q: 'A student investigates the effect of pH on catalase activity. Their results show large variation between repeats at pH 7. Evaluate possible sources of error and suggest improvements to the experimental design.',
        marks: 6, tier: 'red',
        modelAnswer: `• Large variation suggests random errors and/or uncontrolled variables (1)\n• Possible sources: inaccurate measurement of H₂O₂ volume, inconsistent enzyme concentration (different pieces of potato), temperature fluctuation, difficulty collecting gas if apparatus leaks (1)\n• The student may not have allowed equilibration time or may have inconsistent timing (1)\n• Improvements: use purified catalase solution for consistent concentration; use a thermostatically controlled water bath; ensure apparatus is gas-tight; use a more precise method to collect gas (e.g. gas syringe rather than water displacement); increase repeats (≥5) (1)\n• Use a buffer solution to maintain each pH accurately rather than relying on addition of acid/alkali (1)\n• Calculate standard deviation to quantify the spread and determine whether variation is acceptable (1)`
      },
      {
        q: 'Discuss the advantages and limitations of using statistical tests (e.g. t-test, chi-squared) in biological investigations.',
        marks: 8, tier: 'red',
        modelAnswer: `Advantages:\n• Statistical tests provide an objective way to determine whether differences/associations are significant or due to chance (1)\n• They give a probability value (p-value) allowing a decision against a null hypothesis at a defined significance level (typically p < 0.05) (1)\n• They allow comparison between experiments and increase confidence in conclusions (1)\n• Different tests suit different data types — t-test for comparing two means (continuous data), chi-squared for categorical/ratio data (1)\n\nLimitations:\n• Tests require assumptions to be met (e.g. t-test assumes normal distribution and similar variances); if violated, results may be invalid (1)\n• A significant result does not prove causation — correlation ≠ causation; confounding variables may exist (1)\n• p < 0.05 means there is still a 5% chance the result is due to chance (Type I error); failing to reject null does not prove no effect (Type II error) (1)\n• Small sample sizes reduce statistical power and may miss real effects; large samples can make trivial differences statistically significant (1)`
      },
    ],
  },

  'M2': {
    green: [
      {
        q: 'State three functions of proteins in living organisms, giving a named example for each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Catalysis — enzymes (e.g. amylase) speed up metabolic reactions (1)\n• Transport — haemoglobin carries oxygen in red blood cells (1)\n• Structural support — collagen provides tensile strength in tendons and skin (1)\n(Also accept: defence — antibodies; signalling — insulin; movement — actin/myosin)`
      },
      {
        q: 'State the differences between DNA and RNA.',
        marks: 3, tier: 'green',
        modelAnswer: `• DNA contains deoxyribose sugar; RNA contains ribose sugar (1)\n• DNA has the base thymine (T); RNA has uracil (U) instead (1)\n• DNA is double-stranded; RNA is usually single-stranded (1)`
      },
      {
        q: 'State what is meant by the term "active site" of an enzyme.',
        marks: 2, tier: 'green',
        modelAnswer: `The active site is a specific region on the enzyme (usually a cleft or pocket in the tertiary structure) (1) with a shape and chemical environment complementary to the substrate, where the substrate binds and the reaction is catalysed (1).`
      },
      {
        q: 'Identify the monomers and the type of bond in each of the following polymers: starch, protein, DNA.',
        marks: 3, tier: 'green',
        modelAnswer: `• Starch: monomer = alpha-glucose; bond = glycosidic bond (1)\n• Protein: monomer = amino acid; bond = peptide bond (1)\n• DNA: monomer = nucleotide; bond = phosphodiester bond (between nucleotides) / hydrogen bonds (between bases) (1)`
      },
    ],
    amber: [
      {
        q: 'Describe how the structure of a phospholipid relates to the formation of a bilayer in aqueous conditions.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A phospholipid has a hydrophilic (polar) phosphate head and two hydrophobic (non-polar) fatty acid tails (1)\n• In water, the hydrophobic tails are repelled by water and face inward, away from the aqueous environment (1)\n• The hydrophilic heads face outward toward the water on both sides (1)\n• This spontaneously forms a bilayer — a stable barrier separating the cell\'s internal environment from the external aqueous surroundings (1)`
      },
      {
        q: 'Explain the induced fit model of enzyme action.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The substrate approaches the active site, which has a roughly complementary shape (1)\n• As the substrate binds, the enzyme\'s active site changes shape slightly to fit more closely around the substrate (induced fit) (1)\n• This conformational change places strain on bonds in the substrate, lowering the activation energy required for the reaction (1)\n• After the reaction, products are released and the enzyme returns to its original shape, ready to catalyse another reaction (1)`
      },
      {
        q: 'Describe the process of osmosis and explain why animal cells can lyse in a hypotonic solution.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential across a partially permeable membrane (1)\n• In a hypotonic solution, the water potential outside the cell is higher than inside (1)\n• Water enters the cell by osmosis down the water potential gradient (1)\n• Animal cells have no cell wall to provide resistance to the influx (unlike plant cells which become turgid) (1)\n• The cell swells and eventually the membrane ruptures (lysis/cytolysis) because it cannot withstand the increasing internal pressure (1)`
      },
      {
        q: 'Explain how the quaternary structure of haemoglobin is related to its function of oxygen transport.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Haemoglobin has quaternary structure: four polypeptide subunits (2 alpha, 2 beta), each containing a haem group with an Fe²⁺ ion (1)\n• Each haem group can bind one O₂ molecule reversibly, so each haemoglobin carries up to 4 O₂ (1)\n• When the first O₂ binds, it causes a conformational change that increases the affinity of the remaining subunits for O₂ (cooperative binding / positive cooperativity) (1)\n• This produces the sigmoidal oxygen dissociation curve — efficient loading at the lungs (high pO₂) and efficient unloading at respiring tissues (low pO₂) (1)\n• The Bohr effect (lower pH shifts curve right) ensures more O₂ is released where CO₂ is high (active tissues) (1)`
      },
    ],
    red: [
      {
        q: 'Evaluate the fluid mosaic model of membrane structure, discussing the evidence that supports it and any limitations.',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence supporting:\n• Freeze-fracture electron microscopy reveals proteins scattered within the bilayer (integral proteins), matching the mosaic aspect (1)\n• Fluorescent labelling experiments (Frye & Edidin, 1970) showed that membrane proteins from fused cells intermix, demonstrating lateral movement (fluidity) (1)\n• X-ray diffraction and biochemical analysis confirm the phospholipid bilayer with hydrophobic core (1)\n• Electron microscopy shows the trilaminar (three-layered) appearance consistent with heads-tails-heads (1)\n\nLimitations/modifications:\n• The model may underrepresent protein crowding — some membranes are densely packed with proteins (1)\n• Lipid rafts (regions of specific lipid/protein composition) suggest the membrane is more organised than purely random mosaic implies (1)\n• Cytoskeletal attachments restrict protein movement in some areas, so "fluid" is not uniform (1)\n• The model has been refined but remains the best general framework for understanding membrane structure and function (1)`
      },
      {
        q: 'Discuss how the properties of water make it essential for living organisms. Include at least four distinct properties and their biological significance.',
        marks: 8, tier: 'red',
        modelAnswer: `• Excellent solvent (due to polarity): dissolves ionic and polar substances, allowing metabolic reactions in solution and transport of nutrients/waste in blood and sap (1)\n• High specific heat capacity: large amounts of energy needed to change temperature — buffers organisms and aquatic habitats against rapid temperature fluctuations, maintaining enzyme activity (1)\n• High latent heat of vaporisation: evaporation of water removes significant heat — effective cooling mechanism (sweating, transpiration) (1)\n• Cohesion (hydrogen bonds between water molecules): creates surface tension and allows continuous water columns in xylem (transpiration stream) (1)\n• Adhesion: water adheres to xylem walls, assisting capillary action in plants (1)\n• Less dense as ice: ice floats, insulating water below and allowing aquatic organisms to survive winter (1)\n• Reactant in metabolic reactions: hydrolysis reactions and photolysis in photosynthesis (1)\n• Thermal stability of aquatic environments supports biodiversity (1)`
      },
    ],
  },

  'M3': {
    green: [
      {
        q: 'State three features of a gas exchange surface that make it efficient.',
        marks: 3, tier: 'green',
        modelAnswer: `• Large surface area (increases the area over which diffusion can occur) (1)\n• Thin barrier / short diffusion distance (often one cell thick, reducing the path length for gases) (1)\n• Maintained concentration gradient (e.g. good blood supply or ventilation removes/delivers gases to keep the gradient steep) (1)`
      },
      {
        q: 'State the components of Fick\'s law and what it predicts about the rate of diffusion.',
        marks: 3, tier: 'green',
        modelAnswer: `• Rate of diffusion ∝ (surface area × concentration difference) / thickness of barrier (1)\n• A larger surface area increases the rate (1)\n• A greater concentration difference (steeper gradient) increases the rate, while a thicker barrier decreases it (1)`
      },
      {
        q: 'State the function of the sinoatrial node (SAN) and the atrioventricular node (AVN) in the heart.',
        marks: 2, tier: 'green',
        modelAnswer: `• SAN (pacemaker): initiates the cardiac cycle by generating electrical impulses that cause atrial contraction (atrial systole) (1)\n• AVN: receives the impulse from the SAN and delays it briefly before transmitting it to the bundle of His, ensuring the atria finish emptying before ventricular contraction begins (1)`
      },
      {
        q: 'State two structural differences between arteries and veins.',
        marks: 2, tier: 'green',
        modelAnswer: `• Arteries have thicker muscular/elastic walls compared to veins (to withstand high blood pressure) (1)\n• Veins have valves to prevent backflow; arteries do not have valves (except at the base of the aorta/pulmonary artery) (1)\n(Also accept: arteries have a smaller lumen relative to wall thickness; veins have a larger lumen)`
      },
    ],
    amber: [
      {
        q: 'Describe the cohesion-tension theory of water transport in xylem.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Water evaporates from mesophyll cell surfaces into air spaces and exits through stomata (transpiration) (1)\n• This creates a tension (negative pressure) in the xylem, pulling water upward (1)\n• Water molecules are cohesive (attracted to each other by hydrogen bonds), forming a continuous column that resists breaking (1)\n• Adhesion between water molecules and the hydrophilic xylem walls also helps support the water column (1)\n• Water enters the roots by osmosis and is drawn into the xylem to replace what is lost — creating a continuous transpiration stream from roots to leaves (1)`
      },
      {
        q: 'Explain how the mammalian heart is adapted as a double pump, and describe the pathway of blood through the heart.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The heart has four chambers: two atria (receive blood) and two ventricles (pump blood out) (1)\n• Right side: deoxygenated blood enters the right atrium via the vena cava → passes through the tricuspid valve to the right ventricle → pumped to the lungs via the pulmonary artery (pulmonary circuit) (1)\n• Left side: oxygenated blood returns from the lungs via pulmonary veins to the left atrium → passes through the bicuspid (mitral) valve to the left ventricle → pumped to the body via the aorta (systemic circuit) (1)\n• The septum separates oxygenated and deoxygenated blood (1)\n• The left ventricle has a thicker muscular wall to generate higher pressure for the longer systemic circuit (1)`
      },
      {
        q: 'Explain the Bohr effect and its significance for oxygen delivery to respiring tissues.',
        marks: 4, tier: 'amber',
        modelAnswer: `• In actively respiring tissues, more CO₂ is produced, which combines with water to form carbonic acid, lowering blood pH (1)\n• The lower pH causes a conformational change in haemoglobin, reducing its affinity for oxygen (1)\n• The oxygen dissociation curve shifts to the right — haemoglobin releases more O₂ at any given partial pressure of oxygen (1)\n• This ensures that the most metabolically active tissues (producing the most CO₂) receive the most oxygen — matching supply to demand (1)`
      },
      {
        q: 'Describe how translocation occurs in phloem, according to the mass flow hypothesis.',
        marks: 5, tier: 'amber',
        modelAnswer: `• At the source (e.g. photosynthesising leaf): sucrose is actively loaded into sieve tube elements by companion cells using ATP (H⁺ cotransport) (1)\n• This lowers the water potential in the sieve tube, so water enters from the adjacent xylem by osmosis, raising hydrostatic pressure (1)\n• At the sink (e.g. root, growing tip, fruit): sucrose is removed from sieve tubes (used in respiration or converted to starch), raising water potential (1)\n• Water leaves by osmosis, lowering hydrostatic pressure at the sink (1)\n• The pressure difference between source and sink drives the mass flow of phloem sap containing sucrose, amino acids, and other solutes from source to sink (1)`
      },
    ],
    red: [
      {
        q: 'Evaluate the evidence for and against the mass flow hypothesis of translocation in phloem.',
        marks: 8, tier: 'red',
        modelAnswer: `Evidence for:\n• Aphid stylet experiments show that phloem sap flows under pressure (sap exudes when stylet is cut) (1)\n• Radioactive tracers (¹⁴C-labelled CO₂) show sugars move from source to sink through phloem (1)\n• Ringing experiments (removing phloem) cause sugars to accumulate above the ring, consistent with downward mass flow (1)\n• Concentration gradients of sucrose exist between source and sink as predicted (1)\n\nEvidence against / limitations:\n• Sieve plates should impede mass flow, but flow rates can be high — difficult to explain without active involvement of sieve plates (1)\n• Not all solutes in phloem move at the same rate (some amino acids travel faster), which is inconsistent with simple bulk flow (1)\n• Bidirectional transport has been observed in the same sieve tube in some experiments, which mass flow cannot easily explain (1)\n• Companion cells have many mitochondria suggesting energy is used, but the model predicts loading/unloading require ATP, not flow itself — however some active mechanism along the pathway may exist (1)`
      },
      {
        q: 'Discuss how the structure of the mammalian gas exchange system represents a compromise between maximising gas exchange and minimising water loss and pathogen entry.',
        marks: 8, tier: 'red',
        modelAnswer: `Maximising gas exchange:\n• Alveoli provide ~70 m² surface area for rapid diffusion (1)\n• Alveolar walls are one cell thick (short diffusion distance), and surrounded by dense capillary networks maintaining concentration gradients (1)\n• Ventilation continuously replaces alveolar air, maintaining steep O₂ and CO₂ gradients (1)\n\nMinimising water loss:\n• The airways are lined with mucus-secreting goblet cells and kept moist — but the large moist surface area means some water is inevitably lost in expired air (1)\n• The nasal passages warm and humidify inspired air, reducing drying of lower surfaces (1)\n\nMinimising pathogen entry:\n• Mucus traps particles and pathogens; cilia beat to move mucus up to the throat (mucociliary escalator) (1)\n• Alveolar macrophages (phagocytes) engulf pathogens that reach the alveoli (1)\n\nCompromise:\n• The thin, moist, large surface needed for efficient gas exchange also makes the lungs vulnerable to infection and water loss — the defensive mechanisms add some resistance to airflow and are not 100% effective. This trade-off is inherent to any gas exchange surface. (1)`
      },
    ],
  },

  'M4': {
    green: [
      {
        q: 'State the difference between active immunity and passive immunity.',
        marks: 2, tier: 'green',
        modelAnswer: `• Active immunity: the organism produces its own antibodies in response to antigen exposure (either naturally through infection or artificially through vaccination); memory cells are formed, providing long-lasting protection (1)\n• Passive immunity: antibodies are received from an external source (naturally via breast milk/placenta or artificially via injection); no memory cells are formed, so protection is temporary (1)`
      },
      {
        q: 'State three ways in which pathogens can be transmitted from one host to another.',
        marks: 3, tier: 'green',
        modelAnswer: `• Direct contact (e.g. skin-to-skin, sexual contact) (1)\n• Airborne / droplet infection (e.g. coughing, sneezing) (1)\n• Via a vector (e.g. mosquito transmitting malaria) (1)\n(Also accept: waterborne / faecal-oral route; fomites / contaminated surfaces; blood-borne)`
      },
      {
        q: 'State what is meant by the term "biodiversity" and identify its three levels.',
        marks: 3, tier: 'green',
        modelAnswer: `• Biodiversity is the variety of living organisms in an area (1)\n• Genetic diversity: the variety of alleles/genes within a species or population (1)\n• Species diversity: the number of different species and their relative abundance in a community (1)\n• Ecosystem diversity: the range of different habitats and ecological communities in an area (1)\n(Any 3 points for 3 marks)`
      },
      {
        q: 'State two differences between bacteria and viruses as pathogens.',
        marks: 2, tier: 'green',
        modelAnswer: `• Bacteria are living cells that can reproduce independently; viruses are non-living and can only replicate inside a host cell (1)\n• Bacterial infections can be treated with antibiotics; viral infections cannot (antibiotics have no effect on viruses) (1)\n(Also accept: bacteria are larger; viruses have no cellular structure/organelles)`
      },
    ],
    amber: [
      {
        q: 'Describe the sequence of events in the specific (adaptive) immune response following pathogen entry.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Phagocytes engulf the pathogen and present its antigens on their surface (antigen-presenting cells / APCs) (1)\n• T helper cells with complementary receptors bind to the presented antigen, become activated, and release cytokines (1)\n• Cytokines activate B cells with complementary antibodies; B cells undergo clonal expansion (1)\n• B cells differentiate into plasma cells (producing large quantities of specific antibodies) and memory B cells (1)\n• Antibodies bind to antigens on the pathogen (agglutination, neutralisation, opsonisation), leading to pathogen destruction. Memory cells remain for faster secondary response on re-infection (1)`
      },
      {
        q: 'Explain how natural selection can lead to antibiotic resistance in a bacterial population.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Within a bacterial population there is genetic variation — some individuals may carry a random mutation conferring antibiotic resistance (e.g. altered target protein, efflux pump) (1)\n• When the antibiotic is applied (selection pressure), susceptible bacteria are killed; resistant individuals survive (1)\n• Resistant bacteria reproduce rapidly (short generation time), passing the resistance allele to offspring (vertical transmission) — and may transfer resistance genes via plasmids (horizontal transfer) (1)\n• Over time/generations, the proportion of resistant bacteria in the population increases — the population evolves resistance (1)`
      },
      {
        q: 'Describe how Simpson\'s Index of Diversity is calculated and explain what a high value indicates.',
        marks: 4, tier: 'amber',
        modelAnswer: `• D = 1 − Σ(n/N)² where n = number of individuals of each species and N = total number of all individuals (1)\n• For each species, calculate n/N, square it, and sum all these values; subtract the sum from 1 (1)\n• D ranges from 0 to 1; a value closer to 1 indicates high biodiversity (many species with even abundance) (1)\n• A low value (close to 0) indicates low diversity — the community may be dominated by one or few species (1)`
      },
      {
        q: 'Explain how geographic isolation can lead to speciation.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A physical barrier (e.g. river, mountain range, ocean) separates a population into two isolated groups (allopatric speciation) (1)\n• Each group experiences different environmental conditions / selection pressures (1)\n• Natural selection favours different alleles in each group; genetic drift also causes random changes, especially if populations are small (1)\n• Over many generations, the allele frequencies diverge so much that the populations develop different phenotypes and genotypes (1)\n• If the barrier is removed, the populations can no longer interbreed to produce fertile offspring — they have become separate species (reproductive isolation achieved) (1)`
      },
    ],
    red: [
      {
        q: 'Discuss the biological, ethical, and economic arguments for conserving biodiversity.',
        marks: 8, tier: 'red',
        modelAnswer: `Biological arguments:\n• Genetic diversity provides resilience — species with greater genetic variation are more able to adapt to environmental changes, diseases, and climate change (1)\n• Ecosystems with high biodiversity are more stable and provide essential ecosystem services (nutrient cycling, pollination, water purification) (1)\n• Loss of keystone species can cause cascade effects, destabilising entire ecosystems (1)\n\nEthical arguments:\n• All species have intrinsic value and a right to exist regardless of their usefulness to humans (1)\n• Humans have a moral responsibility not to cause extinctions, especially through our own activities (1)\n• Future generations should inherit a biodiverse planet (intergenerational equity) (1)\n\nEconomic arguments:\n• Biodiversity provides resources for medicine (many drugs derived from organisms), agriculture (genetic resources for crop improvement), and industry (1)\n• Ecosystem services (e.g. pollination worth billions annually, flood prevention by forests) have enormous economic value that is lost when biodiversity declines (1)`
      },
      {
        q: 'Evaluate the effectiveness of vaccination programmes in controlling communicable diseases, discussing both benefits and limitations.',
        marks: 8, tier: 'red',
        modelAnswer: `Benefits:\n• Vaccination has eradicated smallpox and nearly eradicated polio — demonstrating that widespread vaccination can eliminate diseases (1)\n• Herd immunity protects those who cannot be vaccinated (immunocompromised, very young) by reducing pathogen transmission in the population (1)\n• Vaccination is cost-effective: prevention is cheaper than treating disease outbreaks; reduces healthcare burden (1)\n• Memory cells provide long-lasting protection, reducing future susceptibility (1)\n\nLimitations:\n• Some pathogens mutate rapidly (e.g. influenza — antigenic drift/shift) requiring annual reformulation; HIV mutates so fast that no effective vaccine exists yet (1)\n• Not all individuals develop full immunity (vaccine failure); some have medical contraindications (1)\n• Requires high uptake to achieve herd immunity — vaccine hesitancy (misinformation, religious/ethical objections) can reduce coverage below the threshold (1)\n• Logistics: cold chain storage needed, expensive global distribution to remote areas; some vaccines require multiple doses reducing compliance (1)`
      },
    ],
  },

  'M5': {
    green: [
      {
        q: 'State what is meant by homeostasis and give two examples of conditions maintained by homeostasis.',
        marks: 3, tier: 'green',
        modelAnswer: `• Homeostasis is the maintenance of a constant/stable internal environment despite changes in external or internal conditions (1)\n• Example 1: blood glucose concentration (maintained by insulin and glucagon) (1)\n• Example 2: core body temperature (maintained by thermoregulatory mechanisms coordinated by the hypothalamus) (1)\n(Also accept: blood water potential, blood pH, blood CO₂ concentration)`
      },
      {
        q: 'State the location and products of glycolysis.',
        marks: 3, tier: 'green',
        modelAnswer: `• Location: cytoplasm of the cell (1)\n• Inputs: one molecule of glucose (6C) and 2 ATP (to phosphorylate glucose) (1)\n• Products: 2 molecules of pyruvate (3C), net gain of 2 ATP (substrate-level phosphorylation), and 2 reduced NAD (1)`
      },
      {
        q: 'State the role of the hypothalamus in thermoregulation.',
        marks: 2, tier: 'green',
        modelAnswer: `• The hypothalamus is the thermoregulatory centre of the brain (1)\n• It monitors blood temperature via central thermoreceptors and receives input from peripheral thermoreceptors in the skin; it initiates corrective responses (nervous and hormonal) when temperature deviates from the set point (1)`
      },
      {
        q: 'State the difference between the light-dependent and light-independent reactions of photosynthesis.',
        marks: 2, tier: 'green',
        modelAnswer: `• Light-dependent reactions: occur on the thylakoid membranes, require light energy, produce ATP and reduced NADP, and release O₂ from photolysis of water (1)\n• Light-independent reactions (Calvin cycle): occur in the stroma, do not directly require light, use ATP and reduced NADP to fix CO₂ into organic molecules (triose phosphate / G3P) (1)`
      },
    ],
    amber: [
      {
        q: 'Describe the events of the Krebs cycle, including inputs and outputs.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Acetyl CoA (2C) from the link reaction combines with oxaloacetate (4C) to form citrate (6C) (1)\n• Citrate is progressively decarboxylated (releasing 2 CO₂ per turn) and dehydrogenated through a series of reactions (1)\n• Hydrogen atoms are transferred to coenzymes: 3 NAD are reduced to 3 reduced NAD, and 1 FAD is reduced to 1 reduced FAD per turn (1)\n• 1 ATP is produced per turn by substrate-level phosphorylation (1)\n• Oxaloacetate (4C) is regenerated, allowing the cycle to continue. Per glucose molecule, the cycle turns twice (2 acetyl CoA enter) (1)`
      },
      {
        q: 'Explain how an action potential is propagated along a myelinated neurone.',
        marks: 5, tier: 'amber',
        modelAnswer: `• At the resting potential (-70 mV), the membrane is polarised (more Na⁺ outside, more K⁺ inside) maintained by the Na⁺/K⁺ ATPase pump (1)\n• A stimulus causes voltage-gated Na⁺ channels to open at a node of Ranvier; Na⁺ rushes in by diffusion, depolarising the membrane to about +40 mV (action potential) (1)\n• Na⁺ channels inactivate; voltage-gated K⁺ channels open, K⁺ leaves, repolarising the membrane (then brief hyperpolarisation before resting potential is restored) (1)\n• The myelin sheath prevents ion flow between nodes; local currents from the depolarised node are sufficient to depolarise the next node of Ranvier (saltatory conduction) (1)\n• The refractory period at each node ensures the impulse travels in one direction only; saltatory conduction greatly increases speed compared to continuous conduction in unmyelinated neurones (1)`
      },
      {
        q: 'Explain the role of negative feedback in the regulation of blood glucose concentration.',
        marks: 5, tier: 'amber',
        modelAnswer: `• After a meal, blood glucose rises above the set point (1)\n• Beta cells in the islets of Langerhans detect the rise and secrete insulin (1)\n• Insulin binds to receptors on liver and muscle cells, stimulating: glucose uptake, conversion to glycogen (glycogenesis), and increased respiration rate — blood glucose falls back to normal (1)\n• If blood glucose falls below the set point (e.g. during exercise), alpha cells secrete glucagon (1)\n• Glucagon stimulates the liver to break down glycogen into glucose (glycogenolysis) and to produce glucose from non-carbohydrate sources (gluconeogenesis) — blood glucose rises back to normal. This is negative feedback because the response opposes the initial change. (1)`
      },
      {
        q: 'Describe how non-cyclic photophosphorylation produces ATP, reduced NADP, and oxygen.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Light energy is absorbed by chlorophyll in Photosystem II (PSII); electrons in PSII are excited to a higher energy level (1)\n• Excited electrons pass along an electron transport chain (ETC) between PSII and PSI, losing energy; this energy pumps H⁺ into the thylakoid lumen (1)\n• The H⁺ gradient drives ATP synthesis as H⁺ flows back through ATP synthase (chemiosmosis/photophosphorylation) (1)\n• Electrons arrive at Photosystem I (PSI), are re-excited by light, and transferred to NADP⁺ reductase which combines them with H⁺ to reduce NADP⁺ → reduced NADP (1)\n• The electrons lost from PSII are replaced by photolysis of water: H₂O → 2H⁺ + 2e⁻ + ½O₂; oxygen is released as a by-product (1)`
      },
    ],
    red: [
      {
        q: 'Discuss the interrelationship between respiration and photosynthesis in a plant, including the concept of the compensation point.',
        marks: 8, tier: 'red',
        modelAnswer: `• Both processes occur simultaneously in illuminated plant cells: photosynthesis in chloroplasts, respiration in mitochondria (1)\n• Photosynthesis produces glucose and O₂ which are substrates for respiration; respiration produces CO₂ and H₂O which are substrates for photosynthesis — the processes are metabolically linked (1)\n• In bright light: rate of photosynthesis exceeds rate of respiration — net uptake of CO₂ and net release of O₂; plant gains organic matter (net productivity is positive) (1)\n• In the dark: only respiration occurs — net release of CO₂ and net uptake of O₂; plant uses stored organic matter (1)\n• Compensation point: the light intensity at which the rate of photosynthesis exactly equals the rate of respiration — no net gas exchange; net productivity = 0 (1)\n• Below compensation point: plant loses biomass over time (respiration > photosynthesis) (1)\n• Temperature and CO₂ concentration affect both rates and therefore the compensation point (1)\n• Understanding the compensation point is important for agriculture (ensuring crops are above it for growth) and ecology (explaining shade tolerance of understorey plants) (1)`
      },
      {
        q: 'Evaluate the statement: "The nervous system provides faster responses than the endocrine system, making it more important for homeostasis."',
        marks: 8, tier: 'red',
        modelAnswer: `Arguments supporting the statement:\n• Nervous impulses travel rapidly (up to 120 m/s in myelinated neurones), enabling very fast responses (e.g. reflex arc for withdrawal from pain) (1)\n• Responses are targeted to specific effectors, enabling precise, localised control (1)\n• Speed is essential for immediate danger responses (fight/flight reflex arc) (1)\n\nArguments against:\n• The endocrine system is equally important for homeostasis — many homeostatic mechanisms (blood glucose, water potential, long-term thermoregulation) rely on hormones (insulin, ADH, thyroxine) (1)\n• Hormones provide sustained, long-lasting responses needed for ongoing regulation (nervous responses are brief) (1)\n• Hormones can affect multiple target organs simultaneously (widespread effect) — important for coordinated whole-body responses (1)\n• In reality, both systems work together — the hypothalamus links them; e.g. thermoregulation uses nervous responses (vasoconstriction) AND hormonal (thyroxine for long-term metabolic rate); blood glucose control involves both hormones AND the autonomic nervous system (1)\n• Therefore, neither system is "more important" — homeostasis requires the integration of both fast (nervous) and sustained (endocrine) responses, and many processes use both simultaneously (1)`
      },
    ],
  },

  'M6': {
    green: [
      {
        q: 'State what is meant by the terms "genotype" and "phenotype".',
        marks: 2, tier: 'green',
        modelAnswer: `• Genotype: the combination of alleles present at a particular gene locus (or the entire genetic makeup of an organism) (1)\n• Phenotype: the observable characteristics of an organism, resulting from the interaction of the genotype with the environment (1)`
      },
      {
        q: 'State three sources of genetic variation in a sexually reproducing population.',
        marks: 3, tier: 'green',
        modelAnswer: `• Crossing over during meiosis (prophase I) — creates new allele combinations on chromosomes (1)\n• Independent assortment during meiosis (metaphase I and II) — random orientation of chromosome pairs produces many possible gamete combinations (1)\n• Random fertilisation — any sperm can fuse with any egg, further increasing the number of possible genotype combinations (1)\n(Also accept: mutation as an ultimate source of new alleles)`
      },
      {
        q: 'State what is meant by a "trophic level" and give examples of organisms at three different levels.',
        marks: 3, tier: 'green',
        modelAnswer: `• A trophic level is the position an organism occupies in a food chain/web based on its feeding relationships (1)\n• Producer (trophic level 1): e.g. grass — photosynthesises, converting light energy to chemical energy (1)\n• Primary consumer (trophic level 2): e.g. rabbit — herbivore that feeds on producers (1)\n• Secondary consumer (trophic level 3): e.g. fox — carnivore/predator that feeds on primary consumers (1)\n(Any 3 levels correctly named and exemplified for 3 marks)`
      },
      {
        q: 'State the difference between a gene and an allele.',
        marks: 2, tier: 'green',
        modelAnswer: `• A gene is a sequence of DNA nucleotides (at a fixed locus on a chromosome) that codes for a polypeptide / functional RNA (1)\n• An allele is a specific version/variant of a gene — different alleles have slightly different nucleotide sequences and may produce different forms of the polypeptide (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how the polymerase chain reaction (PCR) amplifies a sample of DNA.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The DNA sample is heated to ~95°C to denature (separate) the two strands by breaking hydrogen bonds (1)\n• The temperature is cooled to ~55°C to allow short DNA primers to anneal (bind) to complementary sequences flanking the target region (1)\n• The temperature is raised to ~72°C (optimum for Taq polymerase); Taq DNA polymerase extends the primers by adding free nucleotides complementary to the template strand (1)\n• This cycle (denaturation → annealing → extension) is repeated 25-30+ times, with each cycle doubling the number of DNA copies — exponential amplification (1)\n• Taq polymerase is used because it is thermostable (from Thermus aquaticus) and is not denatured at 95°C (1)`
      },
      {
        q: 'Explain how succession leads to the development of a climax community.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Primary succession begins on bare rock/land with no soil; pioneer species (e.g. lichens, mosses) colonise first — they are adapted to harsh conditions (1)\n• Pioneers modify the abiotic environment: they weather rock, add organic matter when they die, and begin soil formation (1)\n• Improved conditions allow new species to establish that outcompete the pioneers; each seral stage (community) further modifies the environment (adds soil depth, nutrients, moisture, shelter) (1)\n• Biodiversity generally increases through succession as the habitat becomes more complex and can support more niches (1)\n• Eventually a climax community is reached — a stable, self-sustaining community in dynamic equilibrium with the prevailing climate (e.g. temperate deciduous forest in the UK). Species composition remains relatively constant unless disturbed (1)`
      },
      {
        q: 'Describe the process of genetic engineering to produce a genetically modified organism, including the roles of restriction enzymes, vectors, and ligase.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The desired gene is identified and isolated — it may be cut from source DNA using restriction enzymes (which cut at specific palindromic recognition sequences, often producing sticky ends) or synthesised artificially / from mRNA using reverse transcriptase (1)\n• A vector (e.g. bacterial plasmid, virus) is cut with the same restriction enzyme, producing complementary sticky ends (1)\n• The gene is inserted into the vector — complementary sticky ends base-pair, and DNA ligase seals the sugar-phosphate backbone, creating recombinant DNA (1)\n• The recombinant vector is introduced into the host organism (transformation) — e.g. bacteria take up the plasmid (1)\n• Successfully transformed organisms are identified using marker genes (e.g. antibiotic resistance or fluorescence); they express the inserted gene, producing the desired protein (1)`
      },
      {
        q: 'Explain how energy is transferred through an ecosystem and why transfer between trophic levels is inefficient.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Producers convert light energy into chemical energy (in organic molecules) via photosynthesis; this energy passes to consumers when they feed (1)\n• At each trophic level, organisms use energy in respiration for life processes — this energy is lost as heat to the environment and is not available to the next level (1)\n• Not all biomass at one level is consumed — some organisms die without being eaten (energy goes to decomposers) (1)\n• Not all consumed biomass is assimilated — some is lost as faeces/egested material (1)\n• Typically only ~10% of energy is transferred between trophic levels; this limits food chains to 4-5 levels and explains why pyramids of energy always have a tapering shape (1)`
      },
    ],
    red: [
      {
        q: 'Discuss the potential benefits and risks of using genetic engineering and gene therapy in medicine and agriculture.',
        marks: 8, tier: 'red',
        modelAnswer: `Medical benefits:\n• Gene therapy offers potential cures for genetic disorders (e.g. cystic fibrosis, SCID) by providing a functional copy of the defective gene (1)\n• GM bacteria can produce human proteins (e.g. insulin, factor VIII) cheaply and reliably, reducing reliance on animal sources (1)\n• Pharmacogenomics may allow personalised medicine based on genetic profiles (1)\n\nAgricultural benefits:\n• GM crops with pest resistance reduce pesticide use and increase yield (feeding growing populations) (1)\n• Crops engineered for drought/salt tolerance can grow in marginal lands; biofortification (e.g. Golden Rice with vitamin A) addresses malnutrition (1)\n\nRisks and concerns:\n• Gene therapy: viral vectors may trigger immune responses or insert genes into oncogenes (insertional mutagenesis), potentially causing cancer; long-term effects unknown (1)\n• GM crops: gene flow to wild relatives could create invasive "superweeds"; monocultures reduce genetic diversity; corporate control of patented seeds disadvantages small farmers (1)\n• Ethical concerns: germline gene therapy alters heritable DNA (affects future generations without consent); GM labelling and consumer choice; "playing God" / slippery slope to designer organisms. A precautionary, case-by-case regulatory approach is needed. (1)`
      },
      {
        q: 'Evaluate the impact of human activities on the carbon and nitrogen cycles, and discuss strategies to mitigate negative effects.',
        marks: 8, tier: 'red',
        modelAnswer: `Impact on the carbon cycle:\n• Burning fossil fuels releases CO₂ stored over millions of years, rapidly increasing atmospheric CO₂ concentrations (1)\n• Deforestation removes a carbon sink (fewer trees photosynthesising) and releases stored carbon when wood is burned/decomposed (1)\n• Increased atmospheric CO₂ enhances the greenhouse effect → global warming, climate change, ocean acidification (1)\n\nImpact on the nitrogen cycle:\n• Industrial Haber process and intensive farming add excess reactive nitrogen (fertilisers) to ecosystems (1)\n• Runoff causes eutrophication of waterways (algal blooms → oxygen depletion → death of aquatic life) (1)\n• Excess nitrogen deposition on land reduces plant biodiversity (favours fast-growing species) and can acidify soils (1)\n\nMitigation strategies:\n• Carbon: transition to renewable energy, reforestation/afforestation (increasing carbon sinks), carbon capture and storage technology, international agreements (Paris Agreement), improving energy efficiency (1)\n• Nitrogen: precision agriculture (applying correct amount of fertiliser at right time), buffer strips along waterways to absorb runoff, crop rotation with legumes (natural nitrogen fixation), reducing food waste, treating wastewater to remove nitrates. No single strategy is sufficient; integrated approaches and political will are essential. (1)`
      },
    ],
  },

};

if (typeof module !== 'undefined') module.exports = { BIOLOGY_OCR_A_WRITTEN };
