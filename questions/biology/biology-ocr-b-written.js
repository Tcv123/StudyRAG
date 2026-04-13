/*
 * OCR B A-Level Biology — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const BIOLOGY_OCR_B_WRITTEN = {

  'B1': {
    green: [
      {
        q: 'State what is meant by the terms "accuracy" and "precision" in practical work.',
        marks: 2, tier: 'green',
        modelAnswer: `• Accuracy — how close a measured value is to the true/accepted value.\n• Precision — how close repeated measurements are to each other (reproducibility).`
      },
      {
        q: 'State what is meant by a "control variable" and give one example in an enzyme experiment.',
        marks: 2, tier: 'green',
        modelAnswer: `• A control variable is a factor kept constant to ensure a fair test / so it does not affect the dependent variable.\n• Example: pH (kept constant using a buffer solution) when investigating the effect of temperature on enzyme activity.`
      },
      {
        q: 'Identify two types of error that can occur in practical work.',
        marks: 2, tier: 'green',
        modelAnswer: `• Random error — unpredictable variation causing scatter around the true value (reduced by repeating).\n• Systematic error — consistent deviation in one direction (e.g., incorrectly zeroed balance) that cannot be reduced by repeating.`
      },
      {
        q: 'State the formula for calculating percentage uncertainty from a single measurement.',
        marks: 2, tier: 'green',
        modelAnswer: `• Percentage uncertainty = (absolute uncertainty / measured value) × 100%.\n• For example, if uncertainty is ±0.5 cm³ and volume measured is 25 cm³, percentage uncertainty = (0.5/25) × 100 = 2%.`
      },
    ],
    amber: [
      {
        q: 'Explain why a serial dilution is preferred over direct dilution when preparing a range of very low concentrations.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Direct dilution of very small volumes is impractical and introduces large percentage errors from measuring equipment.\n• Serial dilution uses a consistent dilution factor (e.g., ×10) at each step, making each measurement more accurate.\n• It produces a wider range of concentrations more reliably.\n• Each step only requires measuring manageable volumes, reducing cumulative error.`
      },
      {
        q: 'Explain why repeating an experiment and calculating a mean improves the reliability of results.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Repeating allows identification and exclusion of anomalous results.\n• Calculating a mean reduces the effect of random errors / random variation on the overall result.\n• A mean from multiple repeats is more likely to represent the true value than a single reading.\n• Consistency between repeats indicates reliability (reproducibility) of the data.`
      },
      {
        q: 'Describe how a student could use a colorimeter to measure the rate of an enzyme-controlled reaction that produces a coloured product.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Set up the reaction in a cuvette at a controlled temperature.\n• Select a filter/wavelength of light that is absorbed by the coloured product.\n• Zero/calibrate the colorimeter using a blank (no product).\n• At regular time intervals, measure the absorbance of the solution.\n• Plot absorbance against time — the gradient gives the rate of reaction.\n(The colorimeter provides objective, quantitative data and avoids subjective colour comparison.)`
      },
      {
        q: 'Explain the difference between a null hypothesis and an alternative hypothesis, and how the chi-squared test relates to them.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Null hypothesis (H₀): there is no significant difference between observed and expected results / any difference is due to chance.\n• Alternative hypothesis (H₁): there is a significant difference that is not due to chance.\n• The chi-squared test calculates a χ² value which is compared to a critical value at a chosen significance level (usually p = 0.05).\n• If χ² > critical value, reject H₀ and accept H₁ (the difference is significant).`
      },
    ],
    red: [
      {
        q: 'A student measures the rate of photosynthesis by counting oxygen bubbles from pondweed. Evaluate the validity of this method and suggest improvements.',
        marks: 6, tier: 'red',
        modelAnswer: `• Bubble counting is a crude measure: bubbles may vary in size, so volume of O₂ per bubble is not constant — this reduces accuracy.\n• Some O₂ may dissolve in water rather than forming bubbles — underestimates the rate.\n• The student should control light intensity, temperature, CO₂ concentration, and species/mass of pondweed.\n• Improvement: collect gas in a syringe/gas collector and measure volume over time using a measuring cylinder or gas syringe.\n• Further improvement: use an oxygen sensor/data logger for continuous, quantitative measurement.\n• The method has reasonable validity for comparing relative rates but lacks precision for absolute measurements.`
      },
      {
        q: 'Discuss the importance of peer review and reproducibility in validating scientific findings.',
        marks: 6, tier: 'red',
        modelAnswer: `• Peer review: independent experts critically evaluate methodology, data analysis, and conclusions before publication — helps identify errors, bias, and unsupported claims.\n• Reproducibility: other scientists repeating the experiment should obtain similar results — if they do, confidence in the findings increases.\n• If results cannot be reproduced, the original findings may be due to error, bias, or fraud.\n• Peer review is not perfect: reviewers may have conflicts of interest, may miss errors, or may reject novel ideas.\n• Reproducibility can be limited by insufficient methodological detail in publications.\n• Together they form the basis of self-correcting science and increase reliability of the body of scientific knowledge.`
      },
    ],
  },

  'B2': {
    green: [
      {
        q: 'State three differences between prokaryotic and eukaryotic cells.',
        marks: 3, tier: 'green',
        modelAnswer: `• Prokaryotes have no membrane-bound nucleus; eukaryotes have a true nucleus with a nuclear envelope.\n• Prokaryotes have smaller (70S) ribosomes; eukaryotes have larger (80S) ribosomes.\n• Prokaryotes have no membrane-bound organelles (no mitochondria, ER, Golgi); eukaryotes have these.\n(Also accept: prokaryotic DNA is circular and naked; eukaryotic DNA is linear and associated with histones.)`
      },
      {
        q: 'State the function of the Golgi apparatus.',
        marks: 2, tier: 'green',
        modelAnswer: `• Modifies proteins (e.g., adds carbohydrate groups to form glycoproteins) received from the rough ER.\n• Packages proteins into vesicles for secretion (exocytosis) or for use within the cell (e.g., lysosomes).`
      },
      {
        q: 'State two differences between diffusion and active transport.',
        marks: 2, tier: 'green',
        modelAnswer: `• Diffusion is passive (no ATP required); active transport requires ATP/energy.\n• Diffusion moves substances down the concentration gradient; active transport moves substances against (up) the concentration gradient.`
      },
      {
        q: 'State what is meant by the term "water potential" and give the water potential of pure water.',
        marks: 2, tier: 'green',
        modelAnswer: `• Water potential (ψ) is a measure of the tendency/potential of water molecules to move from one area to another.\n• Pure water has a water potential of 0 kPa (the highest possible value); adding solute makes it more negative.`
      },
    ],
    amber: [
      {
        q: 'Explain how the structure of the phospholipid bilayer relates to its function as a selectively permeable barrier.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Phospholipids have hydrophilic (phosphate) heads that face outward to the aqueous environment and hydrophobic (fatty acid) tails that face inward.\n• The hydrophobic core prevents most polar/charged molecules and ions from passing freely through the membrane.\n• Small non-polar molecules (O₂, CO₂) can pass through by dissolving in the lipid bilayer.\n• Channel and carrier proteins are embedded in the membrane to allow selective transport of specific polar molecules and ions.\n• Fluidity of the membrane (maintained by cholesterol and unsaturated fatty acids) allows flexibility and movement of components.`
      },
      {
        q: 'Explain how the structure of a mitochondrion is adapted for its function in aerobic respiration.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Double membrane: outer membrane is permeable; inner membrane is folded into cristae.\n• Cristae provide a large surface area for the electron transport chain and ATP synthase (oxidative phosphorylation).\n• The intermembrane space is small, allowing a steep proton gradient to build up for chemiosmosis.\n• The matrix contains enzymes for the Krebs cycle, DNA, and ribosomes for making some of its own proteins.`
      },
      {
        q: 'Describe and explain what happens to an animal cell and a plant cell when placed in a solution with a very negative water potential.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Both cells lose water by osmosis (water moves from higher ψ inside the cell to lower ψ outside).\n• Animal cell: shrinks and becomes crenated (no cell wall to prevent collapse); may die.\n• Plant cell: the vacuole shrinks, cytoplasm pulls away from the cell wall (plasmolysis); the cell wall prevents total collapse.\n• The cell membrane pulls away from the cell wall because the cell wall is fully permeable but rigid.\n• If returned to a dilute solution, the plant cell can recover (deplasmolysis); the animal cell may not if membrane integrity is lost.`
      },
      {
        q: 'Explain how the induced fit model of enzyme action differs from the lock and key model.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Lock and key: the active site is a rigid, fixed shape that exactly fits the substrate like a key in a lock.\n• Induced fit: the active site is flexible and changes shape slightly when the substrate binds, moulding around it to form a more precise fit.\n• Induced fit explains how the enzyme puts strain on bonds in the substrate, lowering activation energy.\n• It also explains why some molecules with similar (but not identical) shapes can still bind and be acted upon.`
      },
    ],
    red: [
      {
        q: 'Evaluate the evidence for the fluid mosaic model of membrane structure.',
        marks: 8, tier: 'red',
        modelAnswer: `• Proposed by Singer and Nicolson (1972): membranes consist of a phospholipid bilayer with proteins embedded (integral) or attached (peripheral) — a "mosaic" of components.\n• "Fluid" because phospholipids and proteins can move laterally (demonstrated by fluorescent labelling/FRAP experiments).\n• Evidence: freeze-fracture electron microscopy shows proteins embedded in the bilayer.\n• Membrane fusion (e.g., during endocytosis/exocytosis) supports fluidity.\n• Differential permeability to polar/non-polar substances supports the lipid bilayer structure.\n• Limitations: some proteins are anchored and immobile (cytoskeleton connections); membrane rafts exist with different compositions.\n• The model has been refined but remains the accepted framework.\n• The variety of proteins (channels, carriers, receptors, enzymes) explains the diverse functions of different cell membranes.`
      },
      {
        q: 'Discuss the advantages and limitations of using electron microscopes compared with light microscopes for studying cell structure.',
        marks: 6, tier: 'red',
        modelAnswer: `• Electron microscopes (EM) have much higher resolution (~0.1 nm vs ~200 nm for light) due to shorter wavelength of electrons — can resolve individual organelles and even ribosomes.\n• EM provides much higher magnification (up to ×500,000 vs ×1500 for light).\n• TEM gives detailed internal (ultrastructure) images; SEM gives 3D surface views.\n• Limitations of EM: specimens must be dead (vacuum, fixation, dehydration); artefacts may be introduced during preparation.\n• EM is expensive, large, requires expert training, and preparation is time-consuming.\n• Light microscopy allows observation of living cells, real-time processes, and use of vital stains.\n• Light microscopes are portable, cheap, and quick to use.\n• Conclusion: both are complementary — light for living/dynamic studies, EM for ultrastructure.`
      },
    ],
  },

  'B3': {
    green: [
      {
        q: 'State three differences between mitosis and meiosis.',
        marks: 3, tier: 'green',
        modelAnswer: `• Mitosis produces 2 cells; meiosis produces 4 cells.\n• Mitosis produces diploid cells; meiosis produces haploid cells.\n• Mitosis produces genetically identical cells; meiosis produces genetically different cells (due to crossing over and independent assortment).`
      },
      {
        q: 'State two roles of mitosis in multicellular organisms.',
        marks: 2, tier: 'green',
        modelAnswer: `• Growth — increasing cell number for the organism to increase in size.\n• Repair/replacement — replacing damaged or dead cells with genetically identical copies.`
      },
      {
        q: 'State what is meant by the term "antigen" and where antigens are found.',
        marks: 2, tier: 'green',
        modelAnswer: `• An antigen is a molecule (usually protein or glycoprotein) that can be recognised by the immune system and trigger an immune response.\n• Found on the surface of cells (including pathogen surfaces) and on the surface of body cells (self-antigens/MHC markers).`
      },
      {
        q: 'Identify the four main phases of mitosis in order.',
        marks: 2, tier: 'green',
        modelAnswer: `• Prophase → Metaphase → Anaphase → Telophase.\n• (Prophase: chromosomes condense, spindle forms; Metaphase: chromosomes align at equator; Anaphase: chromatids separate; Telophase: nuclear envelopes reform.)`
      },
    ],
    amber: [
      {
        q: 'Explain how crossing over during meiosis contributes to genetic variation.',
        marks: 4, tier: 'amber',
        modelAnswer: `• During prophase I, homologous chromosomes pair up (bivalents) and non-sister chromatids cross over at points called chiasmata.\n• Sections of chromatid are exchanged between homologous chromosomes.\n• This produces recombinant chromosomes with new combinations of alleles not present in either parent.\n• Combined with independent assortment, this vastly increases the number of possible gamete genotypes.`
      },
      {
        q: 'Describe the role of B lymphocytes in the adaptive immune response.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Each B cell has a unique antibody (immunoglobulin) on its surface that acts as a receptor for a specific antigen.\n• When the complementary antigen binds, the B cell is activated (with help from T helper cells releasing cytokines).\n• The activated B cell undergoes clonal expansion — divides rapidly by mitosis to produce many clones.\n• Most clones differentiate into plasma cells that secrete large quantities of specific antibody.\n• Some clones become memory B cells that remain in the body long-term, enabling a faster secondary response on re-exposure.`
      },
      {
        q: 'Explain how tumour suppressor genes and proto-oncogenes normally regulate the cell cycle, and how their mutation can lead to cancer.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Tumour suppressor genes (e.g., p53, Rb) encode proteins that inhibit cell division / promote apoptosis / pause the cell cycle at checkpoints for DNA repair.\n• Proto-oncogenes encode proteins that stimulate cell division (e.g., growth factors, signal proteins).\n• Mutation of tumour suppressor genes (loss of function) removes the "brakes" on division.\n• Mutation of proto-oncogenes into oncogenes (gain of function) causes continuous stimulation of division.\n• Cancer typically requires multiple mutations in both types of gene (multi-hit hypothesis).`
      },
      {
        q: 'Explain how vaccinations provide long-term protection against disease.',
        marks: 4, tier: 'amber',
        modelAnswer: `• A vaccine contains a weakened/inactivated pathogen or its antigens — it does not cause disease.\n• The immune system recognises the antigens and mounts a primary immune response.\n• B cells produce antibodies and memory cells are formed (both B and T memory cells).\n• On re-exposure to the real pathogen, memory cells enable a rapid, stronger secondary response — destroying the pathogen before symptoms develop.`
      },
    ],
    red: [
      {
        q: 'Discuss why some cancers are difficult to treat, considering tumour heterogeneity, metastasis, and immune evasion.',
        marks: 8, tier: 'red',
        modelAnswer: `• Tumour heterogeneity: cancer cells accumulate different mutations, so a single tumour contains genetically diverse subpopulations — some may be resistant to a given treatment.\n• Metastasis: cancer cells spread via blood/lymph to distant sites, forming secondary tumours that may be undetectable at diagnosis; surgery cannot remove what has already spread.\n• Immune evasion: some cancer cells downregulate MHC-I, express checkpoint molecules (e.g., PD-L1), or create an immunosuppressive microenvironment — avoiding T cell recognition.\n• Drug resistance: resistant clones survive chemotherapy and proliferate (analogous to natural selection).\n• Rapid mutation rate due to genomic instability means new resistant variants continually arise.\n• Treatments (chemo, radiotherapy) also damage normal cells, limiting dose.\n• Modern approaches (immunotherapy, targeted therapy, combination treatment) aim to address these challenges but are not universally effective.`
      },
      {
        q: 'Evaluate the ethical and scientific arguments for and against the use of embryonic stem cells in research and medicine.',
        marks: 6, tier: 'red',
        modelAnswer: `• Scientific arguments for: embryonic stem cells are pluripotent and can differentiate into any body cell type — potential to treat degenerative diseases (Parkinson's, diabetes, spinal injury); used to study early development and test drugs.\n• Scientific arguments against: risk of tumour formation (teratomas); immune rejection unless patient-matched; difficulty controlling differentiation reliably.\n• Ethical arguments for: embryos used are typically surplus from IVF and would be destroyed anyway; the potential to save lives outweighs moral concerns for some.\n• Ethical arguments against: destruction of embryos is considered destruction of potential human life; some religious/moral positions hold life begins at fertilisation.\n• Alternatives (induced pluripotent stem cells — iPSCs) may reduce ethical concerns but have their own limitations (reprogramming may cause mutations).\n• Regulation and informed consent are essential regardless of position.`
      },
    ],
  },

  'B4': {
    green: [
      {
        q: 'State the site and products of the light-dependent reactions of photosynthesis.',
        marks: 3, tier: 'green',
        modelAnswer: `• Site: thylakoid membranes of the chloroplasts.\n• Products: ATP (from photophosphorylation), reduced NADP / NADPH (hydrogen carrier), and oxygen (from photolysis of water).`
      },
      {
        q: 'State where glycolysis occurs and name its substrate and products.',
        marks: 3, tier: 'green',
        modelAnswer: `• Site: cytoplasm (does not require a membrane-bound organelle).\n• Substrate: glucose (6C).\n• Products: 2 × pyruvate (3C), net 2 ATP (substrate-level phosphorylation), and 2 × reduced NAD (NADH).`
      },
      {
        q: 'State what is meant by a "limiting factor" in photosynthesis and name two examples.',
        marks: 2, tier: 'green',
        modelAnswer: `• A limiting factor is the factor present at the lowest / least favourable level that restricts the rate of photosynthesis.\n• Examples: light intensity, CO₂ concentration, temperature.`
      },
      {
        q: 'State the meaning of "carrying capacity" of a population.',
        marks: 2, tier: 'green',
        modelAnswer: `• Carrying capacity (K) is the maximum population size that a given environment can sustain indefinitely.\n• It is limited by the availability of resources (food, water, space, shelter) and by factors such as predation, disease, and competition.`
      },
    ],
    amber: [
      {
        q: 'Describe the role of the electron transport chain in oxidative phosphorylation.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Located on the inner mitochondrial membrane (cristae).\n• Reduced NAD and reduced FAD donate electrons and protons to the chain.\n• Electrons are passed along a series of carriers (complexes I–IV), releasing energy at each step.\n• This energy is used to pump H⁺ ions from the matrix into the intermembrane space, creating a proton gradient (electrochemical gradient).\n• H⁺ ions flow back through ATP synthase (chemiosmosis), driving the synthesis of ATP from ADP + Pi.\n• Oxygen is the final electron acceptor, combining with electrons and H⁺ to form water.`
      },
      {
        q: 'Explain the Calvin cycle, including the role of RuBisCO and the regeneration of RuBP.',
        marks: 5, tier: 'amber',
        modelAnswer: `• CO₂ is fixed by RuBisCO, which catalyses the combination of CO₂ with RuBP (5C) to form 2 × GP (3C) — carbon fixation.\n• GP is reduced to G3P (triose phosphate) using ATP and reduced NADP from the light-dependent reactions.\n• Some G3P is used to produce glucose and other organic molecules.\n• Most G3P (5 out of every 6 molecules) is used to regenerate RuBP, requiring ATP.\n• The cycle must turn 6 times to produce one net molecule of glucose (6CO₂ fixed).`
      },
      {
        q: 'Explain why energy transfer between trophic levels is inefficient and how this limits food chain length.',
        marks: 4, tier: 'amber',
        modelAnswer: `• At each trophic level, ~90% of energy is lost: as heat from respiration, in excretion and egestion (faeces), and because not all biomass is consumed.\n• Only ~10% of energy is incorporated into the biomass of the next trophic level.\n• This means each successive level has significantly less energy available.\n• After 4–5 levels, insufficient energy remains to support a viable population — limiting food chain length.`
      },
      {
        q: 'Describe how mark-release-recapture is used to estimate population size and state the assumptions it relies on.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Method: capture a sample, count and mark the individuals, release them back.\n• After sufficient time for mixing, capture a second sample and count total and marked individuals.\n• Estimate population: N = (number in first capture × number in second capture) / number recaptured marked.\n• Assumptions: no births, deaths, immigration, or emigration between samples; marks do not affect survival, behaviour, or predation risk; marked individuals mix randomly with the population; marks are not lost.`
      },
    ],
    red: [
      {
        q: 'Discuss why the theoretical ATP yield per glucose (36–38 ATP) is rarely achieved in living cells.',
        marks: 6, tier: 'red',
        modelAnswer: `• Proton leak: some H⁺ ions leak across the inner mitochondrial membrane without passing through ATP synthase, generating heat instead of ATP.\n• The exact H⁺:ATP ratio of ATP synthase may not be a whole number, making calculations approximate.\n• NADH produced in glycolysis (cytoplasm) must be shuttled into the mitochondria via shuttle systems (e.g., glycerol-3-phosphate shuttle) — some shuttles yield only FADH₂ (fewer ATP) instead of NADH.\n• The proton gradient is also used for other purposes (e.g., transporting pyruvate and Pi into the matrix), diverting energy from ATP synthesis.\n• ATP is used within the mitochondria for its own processes.\n• Under physiological conditions, not all substrate may be fully oxidised.\n• Therefore actual yield is closer to 30–32 ATP per glucose.`
      },
      {
        q: 'Evaluate the use of respirometers to measure metabolic rate in organisms, including limitations.',
        marks: 6, tier: 'red',
        modelAnswer: `• A respirometer measures oxygen uptake (or CO₂ release) as a proxy for aerobic metabolic rate.\n• Advantages: relatively simple apparatus; can compare rates under different conditions (temperature, substrate); provides quantitative data.\n• Limitations: only measures aerobic respiration — anaerobic pathways are not detected.\n• CO₂ is typically absorbed (e.g., by KOH), so only O₂ uptake is measured directly — this assumes all respiration is aerobic.\n• Without knowing the respiratory substrate, the RQ cannot convert O₂ consumption to energy accurately (fats use more O₂ per unit energy than carbohydrates).\n• Activity of the organism during measurement may vary.\n• Temperature must be precisely controlled or results are confounded.\n• The respirometer measures the organism's respiration at that moment — it may not reflect basal or average metabolic rate.`
      },
    ],
  },

  'B5': {
    green: [
      {
        q: 'State what is meant by the terms "genotype" and "phenotype".',
        marks: 2, tier: 'green',
        modelAnswer: `• Genotype — the genetic makeup (combination of alleles) of an organism for a particular gene or set of genes.\n• Phenotype — the observable characteristics of an organism, resulting from the interaction of its genotype with the environment.`
      },
      {
        q: 'State the difference between a dominant allele and a recessive allele.',
        marks: 2, tier: 'green',
        modelAnswer: `• A dominant allele is expressed in both the homozygous (AA) and heterozygous (Aa) condition.\n• A recessive allele is only expressed in the homozygous (aa) condition — it is masked by the dominant allele when heterozygous.`
      },
      {
        q: 'State the role of insulin and glucagon in blood glucose regulation.',
        marks: 3, tier: 'green',
        modelAnswer: `• Insulin is secreted by β-cells of the pancreas when blood glucose rises; it stimulates cells to take up glucose and the liver to convert glucose to glycogen — lowering blood glucose.\n• Glucagon is secreted by α-cells when blood glucose falls; it stimulates the liver to break down glycogen to glucose (glycogenolysis) and carry out gluconeogenesis — raising blood glucose.\n• They work antagonistically in a negative feedback loop.`
      },
      {
        q: 'State what is meant by "negative feedback" and give one example in the human body.',
        marks: 2, tier: 'green',
        modelAnswer: `• Negative feedback is a mechanism where a change from the set point/norm triggers a response that counteracts the change, returning conditions to the set point.\n• Example: when blood glucose rises above normal, insulin is released to lower it; when it falls below normal, glucagon is released to raise it.`
      },
    ],
    amber: [
      {
        q: 'Explain how an action potential is generated and propagated along a myelinated neurone.',
        marks: 5, tier: 'amber',
        modelAnswer: `• At rest, the neurone is polarised (~−70mV inside) due to the Na⁺/K⁺ pump and K⁺ leak channels.\n• A stimulus causes voltage-gated Na⁺ channels to open; Na⁺ rushes in, depolarising the membrane (to ~+40mV).\n• Na⁺ channels inactivate; K⁺ channels open, K⁺ moves out, causing repolarisation (and brief hyperpolarisation).\n• In myelinated neurones, ion exchange only occurs at nodes of Ranvier (gaps in myelin).\n• The impulse "jumps" between nodes (saltatory conduction), greatly increasing conduction speed.`
      },
      {
        q: 'Explain how the Hardy-Weinberg equation can be used to calculate carrier frequency in a population for an autosomal recessive condition.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The Hardy-Weinberg equations: p + q = 1 and p² + 2pq + q² = 1 (where p = frequency of dominant allele, q = frequency of recessive allele).\n• If the frequency of affected individuals (homozygous recessive, q²) is known, q = √(q²).\n• Then p = 1 − q.\n• Carrier frequency (heterozygotes) = 2pq.\n• Assumptions: no selection, mutation, migration, genetic drift, or non-random mating — the population is in genetic equilibrium.`
      },
      {
        q: 'Explain the role of the kidney in osmoregulation, including the action of ADH.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Osmoreceptors in the hypothalamus detect changes in blood water potential.\n• If blood water potential is low (dehydration): the posterior pituitary releases more ADH.\n• ADH travels in the blood to the collecting duct of the kidney.\n• ADH binds to receptors on collecting duct cells, stimulating insertion of aquaporins into the membrane.\n• More water is reabsorbed from the filtrate back into the blood by osmosis — producing small volumes of concentrated urine.\n• If blood water potential is high: less ADH is released, fewer aquaporins, more dilute urine produced (negative feedback).`
      },
      {
        q: 'Describe the process of transcription and explain how mRNA is processed before leaving the nucleus.',
        marks: 4, tier: 'amber',
        modelAnswer: `• RNA polymerase binds to the promoter region of the gene on the template (antisense) strand.\n• It unwinds the DNA and synthesises a complementary mRNA strand (pre-mRNA) using free RNA nucleotides (5′→3′ direction).\n• In eukaryotes, the pre-mRNA is processed: introns are spliced out by spliceosomes, and exons are joined together.\n• A 5′ cap and 3′ poly-A tail are added to protect the mRNA and aid ribosome binding.\n• The mature mRNA exits through nuclear pores to the ribosome for translation.`
      },
    ],
    red: [
      {
        q: 'Discuss how epigenetic mechanisms can affect gene expression without changing the DNA sequence, and evaluate their significance in development and disease.',
        marks: 8, tier: 'red',
        modelAnswer: `• Epigenetic mechanisms include DNA methylation (adding methyl groups to cytosine in CpG islands, typically silencing genes) and histone modification (acetylation loosens chromatin, promoting transcription; deacetylation/methylation can condense it).\n• These do not change the base sequence but alter whether genes are accessible for transcription.\n• In development: epigenetics explains how cells with identical DNA differentiate into different types — different genes are silenced/activated in each cell lineage.\n• Epigenetic marks can be heritable through cell division (mitotic inheritance) and sometimes across generations (transgenerational).\n• In disease: aberrant methylation is linked to cancer (tumour suppressor gene silencing); environmental factors (diet, stress, toxins) can alter epigenetic marks.\n• Significance: epigenetics bridges "nature and nurture" — environment can influence gene expression without mutation.\n• Limitations: not all epigenetic changes are permanent or heritable; some can be reversed (potential therapeutic targets).\n• Research is ongoing and the full extent of transgenerational epigenetic inheritance in humans is debated.`
      },
      {
        q: 'Evaluate the statement: "Natural selection is the only mechanism of evolution." Consider other evolutionary forces.',
        marks: 6, tier: 'red',
        modelAnswer: `• Natural selection is a major driver of adaptive evolution — it acts on phenotypic variation, favouring alleles that increase fitness in a given environment.\n• However, evolution (change in allele frequency) can also occur through: genetic drift (random changes, especially in small populations), gene flow (migration introducing new alleles), mutation (generating new alleles), and sexual selection.\n• Genetic drift can fix or eliminate alleles regardless of their fitness (neutral evolution) — significant in bottlenecks and founder effects.\n• Gene flow can introduce/remove alleles faster than selection in some cases.\n• Non-adaptive evolution (drift) accounts for much molecular evolution (neutral theory).\n• Therefore the statement is incorrect — natural selection is the primary mechanism of adaptation but not the only mechanism of evolutionary change.\n• A complete understanding of evolution requires considering all forces acting on allele frequencies.`
      },
    ],
  },

  'B6': {
    green: [
      {
        q: 'State what is meant by "biodiversity" and identify the three levels at which it can be measured.',
        marks: 3, tier: 'green',
        modelAnswer: `• Biodiversity is the variety of living organisms in an area/on Earth.\n• Three levels: genetic diversity (variation within a species), species diversity (number and abundance of species in a community), ecosystem diversity (range of different habitats/ecosystems in an area).`
      },
      {
        q: 'State the difference between a food chain and a food web.',
        marks: 2, tier: 'green',
        modelAnswer: `• A food chain is a single linear pathway showing energy transfer from one organism to the next through trophic levels.\n• A food web is a network of interconnected food chains showing all the feeding relationships in a community — it is more realistic.`
      },
      {
        q: 'State what is meant by "succession" and name the two types.',
        marks: 2, tier: 'green',
        modelAnswer: `• Succession is the gradual change in community composition and structure over time in a given area.\n• Primary succession: starts on bare, previously uncolonised substrate (e.g., bare rock, volcanic island).\n• Secondary succession: occurs on land that was previously colonised but has been disturbed (e.g., after fire), where soil is already present.`
      },
      {
        q: 'State the role of decomposers in an ecosystem.',
        marks: 2, tier: 'green',
        modelAnswer: `• Decomposers (bacteria and fungi) break down dead organic matter and waste products.\n• They release inorganic nutrients (e.g., nitrates, phosphates) back into the soil/water, making them available for uptake by producers — recycling nutrients within the ecosystem.`
      },
    ],
    amber: [
      {
        q: 'Describe the steps involved in producing a genetically modified organism using recombinant DNA technology.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The desired gene is identified and isolated (e.g., using reverse transcriptase from mRNA, or restriction enzymes, or PCR).\n• A vector (e.g., plasmid) is cut with the same restriction enzyme to produce complementary sticky ends.\n• The gene is inserted into the vector using DNA ligase to seal the sugar-phosphate backbone.\n• The recombinant vector is introduced into the host cell (transformation — e.g., heat shock, electroporation, or using CaCl₂).\n• Cells that have taken up the gene are identified using a marker/reporter gene (e.g., antibiotic resistance or fluorescence) and cultured.`
      },
      {
        q: 'Explain the process of eutrophication and its effects on aquatic ecosystems.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Excess nitrates and phosphates (from fertiliser runoff or sewage) enter waterways.\n• These nutrients stimulate rapid growth of algae (algal bloom) on the water surface.\n• The algal bloom blocks light to plants below, which die.\n• Dead plants and algae are decomposed by aerobic bacteria, which multiply rapidly.\n• Bacterial respiration depletes dissolved oxygen (biological oxygen demand increases).\n• Oxygen depletion (hypoxia) causes death of aerobic organisms (fish, invertebrates).`
      },
      {
        q: 'Explain how Simpson\'s Index of Diversity is used to measure biodiversity and why it is more informative than species richness alone.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Simpson's Index: D = 1 − Σ(n/N)² where n = number of individuals of each species, N = total individuals.\n• D ranges from 0 (no diversity) to 1 (infinite diversity); higher values = greater diversity.\n• Species richness only counts the number of species present — it ignores abundance/evenness.\n• Simpson's Index accounts for both richness AND evenness — a community with 5 equally abundant species has higher diversity than one dominated by a single species.\n• This gives a more ecologically meaningful measure of community health and stability.`
      },
      {
        q: 'Describe the role of nitrogen-fixing, nitrifying, and denitrifying bacteria in the nitrogen cycle.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Nitrogen-fixing bacteria (e.g., Rhizobium in root nodules, Azotobacter free-living): convert atmospheric N₂ into ammonia (NH₃)/ammonium (NH₄⁺) — making nitrogen available to biological systems.\n• Nitrifying bacteria (e.g., Nitrosomonas, Nitrobacter): oxidise ammonia → nitrite → nitrate (NO₃⁻) in aerobic conditions — nitrification makes nitrogen available to plants in usable form.\n• Denitrifying bacteria (e.g., Pseudomonas): convert nitrate → N₂ gas under anaerobic conditions — returning nitrogen to the atmosphere and completing the cycle.\n• Together they maintain the balance of nitrogen between the atmosphere and the biosphere.`
      },
    ],
    red: [
      {
        q: 'Evaluate the arguments for and against the use of genetically modified crops to address global food security.',
        marks: 8, tier: 'red',
        modelAnswer: `• Arguments for: GM crops can be engineered for higher yield, pest resistance (reducing pesticide use), herbicide tolerance, drought tolerance, and enhanced nutrition (e.g., Golden Rice with vitamin A) — directly addressing food shortages.\n• They can reduce post-harvest losses and allow farming in marginal environments.\n• Arguments against: ecological risks include gene flow to wild relatives (creating resistant weeds), harm to non-target organisms, and reduced biodiversity (monocultures).\n• Social/economic concerns: corporate control of seed supply (patents), dependence on single companies, cost to small farmers.\n• Health concerns: although scientific consensus indicates current GM foods are safe, public perception and long-term unknowns remain.\n• Ethical: concerns about "playing God" or unnatural manipulation.\n• Regulatory frameworks vary globally, creating trade barriers.\n• Conclusion: GM crops are one tool among many (not a complete solution) — they must be evaluated case by case alongside sustainable farming practices, reducing food waste, and addressing distribution inequality.`
      },
      {
        q: 'Discuss the impact of climate change on global biodiversity, including specific examples of affected ecosystems.',
        marks: 6, tier: 'red',
        modelAnswer: `• Rising temperatures shift species distributions poleward/to higher altitudes — species unable to migrate or adapt face extinction.\n• Coral reefs: ocean warming causes coral bleaching (loss of symbiotic zooxanthellae); combined with ocean acidification (reduced carbonate), reefs degrade — affecting ~25% of marine species.\n• Arctic/Antarctic: ice loss reduces habitat for polar bears, seals, and penguins; permafrost thawing releases methane (positive feedback).\n• Phenological mismatches: timing of events (flowering, insect emergence, bird migration) shift at different rates, disrupting food webs.\n• Increased frequency of extreme weather (droughts, floods, fires) destroys habitats.\n• Mountain-top species have nowhere to migrate to ("escalator to extinction").\n• Some species may benefit (range expansion), but overall net loss of biodiversity is predicted.\n• Conservation responses needed: habitat corridors, protected areas, assisted migration, and addressing root causes (emissions reduction).`
      },
    ],
  },

};

if (typeof module !== 'undefined') module.exports = BIOLOGY_OCR_B_WRITTEN;
