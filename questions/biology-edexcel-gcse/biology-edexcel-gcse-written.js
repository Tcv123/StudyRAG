/*
 * Edexcel GCSE (9-1) Biology (1BI0) — Diagnostic Written Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6+ marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const BIOLOGY_EDEXCEL_GCSE_WRITTEN = {

  /* ─────────────────────────── Topic 1 */
  '1': {
    green: [
      {
        q: 'State the equation for magnification and give suitable units for the sizes used.',
        marks: 2, tier: 'green',
        modelAnswer: `• Magnification = image size ÷ actual size (1)\n• Image and actual size must be in the same unit (e.g. both in µm or both in mm) (1)`
      },
      {
        q: 'State three structures found in a plant cell but not in an animal cell.',
        marks: 3, tier: 'green',
        modelAnswer: `• Cell wall (made of cellulose) (1)\n• Chloroplasts (contain chlorophyll for photosynthesis) (1)\n• Permanent (large) vacuole containing cell sap (1)`
      },
      {
        q: 'State the positive colour change seen in (a) the Benedict\'s test for reducing sugars, (b) the iodine test for starch, (c) the Biuret test for protein.',
        marks: 3, tier: 'green',
        modelAnswer: `• (a) Blue → brick-red (allow orange/yellow/green as partial) precipitate (1)\n• (b) Orange/yellow → blue-black (1)\n• (c) Blue → purple/lilac (1)`
      },
      {
        q: 'Define the terms "diffusion" and "osmosis".',
        marks: 3, tier: 'green',
        modelAnswer: `• Diffusion: net movement of particles from a region of higher concentration to lower concentration (1)\n• Passive — no ATP needed (1)\n• Osmosis: net movement of water molecules from dilute to concentrated solution across a partially permeable membrane (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how the structure of a sperm cell is adapted to its function.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Long tail (flagellum) — allows the sperm to swim to the egg (1)\n• Many mitochondria in the middle section — release energy from respiration for tail movement (1)\n• Acrosome in the head — contains enzymes to digest through the egg membrane (1)\n• Haploid nucleus (23 chromosomes) — so fertilisation restores full chromosome number (1)`
      },
      {
        q: 'Describe the lock-and-key model of enzyme action and explain why enzymes are specific.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Enzymes have a region called the active site (1)\n• The substrate has a complementary shape to the active site (1)\n• Only the correct substrate fits into the active site (like a key in a lock) forming an enzyme-substrate complex (1)\n• The reaction occurs and products are released; enzyme is unchanged (1)\n• Enzymes are specific because each enzyme\'s active site has a unique shape that only matches one substrate (1)`
      },
      {
        q: 'Explain how the rate of an enzyme-catalysed reaction changes as temperature increases from 10 °C to 60 °C.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As temperature increases from 10 °C, rate increases because molecules have more kinetic energy and collide more often (1)\n• Rate is highest at the optimum temperature (around 37 °C in humans) (1)\n• Above the optimum, bonds holding the enzyme\'s 3D shape break — the active site changes shape (1)\n• The substrate no longer fits; the enzyme is denatured and rate falls sharply to zero (1)`
      },
      {
        q: 'Describe and explain what happens to an animal cell placed in (a) pure water and (b) a concentrated salt solution.',
        marks: 5, tier: 'amber',
        modelAnswer: `• (a) Pure water: water moves into the cell by osmosis (1)\n• This is because the cell contents are more concentrated than pure water (water moves from dilute to concentrated) (1)\n• The cell swells and may burst (lysis) because animal cells have no cell wall (1)\n• (b) Concentrated salt: water leaves the cell by osmosis, as the outside is more concentrated (1)\n• The cell shrinks/shrivels (crenation) (1)`
      },
    ],
    red: [
      {
        q: 'Compare and contrast diffusion, osmosis and active transport. Your answer should include what moves, the direction of movement, and whether energy is required. Use a named biological example of each.',
        marks: 6, tier: 'red',
        modelAnswer: `• Diffusion: net movement of any particle from high to low concentration, passive (no ATP) (1) — e.g. oxygen diffusing from alveoli into blood (1)\n• Osmosis: movement of water only, from dilute to concentrated solution, across a partially permeable membrane, passive (1) — e.g. water absorption by plant roots / water moving into red blood cells (1)\n• Active transport: movement of specific ions/molecules against the concentration gradient (low → high), requires energy from ATP produced by respiration (1) — e.g. root hair cells absorbing mineral ions from soil / glucose reabsorption in kidneys (1)\n• Similarities: all move substances across membranes; all can involve ions. Differences: only active transport needs energy and moves against the gradient.`
      },
      {
        q: 'A student investigates the effect of temperature on the activity of amylase. They mix amylase with starch at 20, 30, 37, 45 and 60 °C and use the iodine test every 30 s until the iodine no longer turns blue-black. Describe the expected results and explain them, and suggest two ways the investigation could be improved.',
        marks: 8, tier: 'red',
        modelAnswer: `• Rate increases from 20 °C to 37 °C because molecules have more kinetic energy and more successful enzyme-substrate collisions (1)\n• Rate peaks at 37 °C (the optimum for amylase) (1)\n• At 45 °C rate is slower; at 60 °C there may be no reaction because the enzyme is denatured (1)\n• Denaturation: high temperature breaks bonds holding the enzyme\'s 3D shape, so active site changes and substrate no longer fits (1)\n• Improvement 1: use a water bath to maintain a constant temperature precisely (1)\n• Improvement 2: take more readings / smaller temperature intervals around 37 °C to find exact optimum (1)\n• Improvement 3: repeat each temperature several times and calculate the mean rate (1)\n• Control variables: volume/concentration of amylase and starch, pH, stirring (1)`
      },
    ],
  },

  /* ─────────────────────────── Topic 2 */
  '2': {
    green: [
      {
        q: 'State the three purposes of mitosis in multicellular organisms.',
        marks: 3, tier: 'green',
        modelAnswer: `• Growth — producing more cells as the organism develops (1)\n• Repair — replacing damaged or worn-out cells (1)\n• Asexual reproduction — producing genetically identical offspring (e.g. bacteria, strawberry runners) (1)`
      },
      {
        q: 'State the correct order of the four stages of mitosis.',
        marks: 2, tier: 'green',
        modelAnswer: `• Prophase → Metaphase → Anaphase → Telophase (1)\n• (Cytokinesis then divides the cytoplasm) (1)`
      },
      {
        q: 'Name the three main types of neurone and state the role of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Sensory neurone — carries impulses from receptors to the CNS (1)\n• Relay neurone — connects sensory to motor neurones inside the CNS (1)\n• Motor neurone — carries impulses from CNS to an effector (muscle or gland) (1)`
      },
      {
        q: 'State the two divisions of the nervous system and what each contains.',
        marks: 2, tier: 'green',
        modelAnswer: `• Central nervous system (CNS): brain and spinal cord (1)\n• Peripheral nervous system (PNS): all other nerves connecting the CNS to the body (sensory and motor neurones) (1)`
      },
    ],
    amber: [
      {
        q: 'Describe how a nerve impulse is transmitted across a synapse.',
        marks: 5, tier: 'amber',
        modelAnswer: `• An electrical impulse arrives at the end of the pre-synaptic neurone / axon terminal (1)\n• Vesicles containing neurotransmitter fuse with the membrane and release neurotransmitter into the synaptic cleft (1)\n• Neurotransmitter diffuses across the synaptic cleft (1)\n• Neurotransmitter binds to specific (complementary) receptors on the post-synaptic membrane (1)\n• This triggers a new electrical impulse in the next neurone; the neurotransmitter is then broken down or reabsorbed (1)`
      },
      {
        q: 'Explain how the eye accommodates to focus on a near object.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The ciliary muscles contract (1)\n• The suspensory ligaments slacken / loosen (1)\n• The lens becomes thicker / more rounded / more curved (1)\n• The lens refracts (bends) the light more strongly, focusing the image on the retina (1)`
      },
      {
        q: 'Describe the pathway of a reflex arc when a hand touches a hot object. Explain why reflexes are fast.',
        marks: 5, tier: 'amber',
        modelAnswer: `• The stimulus (heat) is detected by a receptor in the skin (1)\n• A sensory neurone carries the impulse to the spinal cord / CNS (1)\n• In the spinal cord, a relay neurone passes the impulse to a motor neurone (1)\n• The motor neurone carries the impulse to the muscle (effector), which contracts to pull the hand away (1)\n• Reflexes are fast because the impulse does not go to the brain (no conscious thought) — only two synapses are crossed, and synapses are the slow step (1)`
      },
      {
        q: 'Describe how plants grow differently from animals.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Animals grow mainly by cell division (mitosis) and stop growing at maturity (determinate growth) (1)\n• Plants continue to grow throughout life (indeterminate growth) (1)\n• Plant growth occurs at meristems — regions containing plant stem cells (1)\n• At meristems, growth involves cell division, cell elongation (the cell enlarges by absorbing water into the vacuole) and cell differentiation (1)`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of embryonic stem cells to treat medical conditions. Your answer should include potential benefits, risks and ethical issues, and a supported conclusion.',
        marks: 6, tier: 'red',
        modelAnswer: `• Benefit: embryonic stem cells are pluripotent — they can differentiate into any body cell type (1)\n• Could treat a wide range of conditions e.g. type 1 diabetes (replace beta cells), paralysis (regrow nerves), leukaemia (replace bone marrow), macular degeneration (retinal cells) (1)\n• Risk: cells may divide uncontrollably and form a tumour (1)\n• Risk: rejection by the patient's immune system; risk of viral infection from donor cells (1)\n• Ethical issue: using embryonic stem cells involves destroying a human embryo — some people believe this is equivalent to destroying a life (1)\n• Counter-argument: embryos used are often spare from IVF and would otherwise be destroyed; the benefits of saving lives justify their use; adult / umbilical cord stem cells avoid the ethical issue but are less versatile (1)\n• Conclusion should weigh benefits against risks/ethics and give a reasoned judgement`
      },
      {
        q: 'Describe the three main regions of the brain shown in a typical diagram and their functions. Explain why brain disorders (such as tumours) are difficult to treat.',
        marks: 8, tier: 'red',
        modelAnswer: `• Cerebrum: the largest region; controls conscious thought, memory, language, intelligence and voluntary movement (1) (1)\n• Cerebellum: at the back under the cerebrum; coordinates balance, posture and fine movement (1) (1)\n• Medulla (oblongata): at the base, joining the spinal cord; controls unconscious activities such as heart rate and breathing rate (1) (1)\n• Brain tissue is extremely delicate and does not repair itself easily — surgery risks damaging healthy tissue and causing loss of function (1)\n• The blood-brain barrier prevents many drugs from reaching the brain, making chemical treatments difficult (1)\n• The brain is enclosed by the skull — access for surgery is difficult (1)\n• Brain regions are densely interconnected, so damage to one area can affect many functions (1) (max 8)`
      },
    ],
  },

  /* ─────────────────────────── Topic 3 */
  '3': {
    green: [
      {
        q: 'State three differences between sexual and asexual reproduction.',
        marks: 3, tier: 'green',
        modelAnswer: `• Sexual reproduction uses two parents; asexual reproduction uses one (1)\n• Sexual reproduction uses gametes / meiosis; asexual uses mitosis only (1)\n• Sexual reproduction produces genetically different offspring; asexual produces genetically identical clones (1)`
      },
      {
        q: 'State what is meant by (a) the genome and (b) a gene.',
        marks: 2, tier: 'green',
        modelAnswer: `• (a) Genome = the entire / complete set of genetic material (DNA) of an organism (1)\n• (b) Gene = a section of DNA that codes for a (specific) protein (1)`
      },
      {
        q: 'State the base-pairing rules for DNA and explain why they are described as complementary.',
        marks: 3, tier: 'green',
        modelAnswer: `• Adenine (A) pairs with Thymine (T) (1)\n• Cytosine (C) pairs with Guanine (G) (1)\n• Complementary because each base only pairs with its specific partner, so one strand determines the other (1)`
      },
      {
        q: 'Define the terms homozygous, heterozygous and allele.',
        marks: 3, tier: 'green',
        modelAnswer: `• Allele — a different version / form of a gene (1)\n• Homozygous — two identical alleles for a gene (e.g. BB or bb) (1)\n• Heterozygous — two different alleles for a gene (e.g. Bb) (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how meiosis differs from mitosis. Give three differences.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Meiosis involves two divisions; mitosis involves one (1)\n• Meiosis produces four daughter cells; mitosis produces two (1)\n• Meiotic daughter cells are haploid (n); mitotic daughter cells are diploid (2n) (1)\n• Meiotic daughter cells are all genetically different (due to crossing over and independent assortment); mitotic daughters are identical to the parent (1)\n• Meiosis produces gametes; mitosis is used for growth, repair and asexual reproduction (1)`
      },
      {
        q: 'Two brown-eyed parents have one blue-eyed child. Brown (B) is dominant to blue (b). Draw a Punnett square to show the genotypes of the parents and work out the probability of further blue-eyed children.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Both parents must be heterozygous (Bb) because the blue-eyed (bb) child must have inherited a b allele from each parent (1)\n• Punnett square: Bb × Bb gives BB, Bb, Bb, bb (1)\n• Genotype ratio 1:2:1 (BB : Bb : bb); phenotype ratio 3 brown : 1 blue (1)\n• Probability of a blue-eyed child = 1/4 = 25% (1)`
      },
      {
        q: 'Explain how the sex of a human baby is determined.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Sex is determined by the 23rd pair of chromosomes (sex chromosomes) (1)\n• Females are XX; males are XY (1)\n• Mothers produce only X eggs; fathers produce 50% X sperm and 50% Y sperm (1)\n• The sperm that fertilises the egg determines sex — so the father determines sex; Punnett square (XX × XY) gives a 1:1 ratio of boys : girls / 50% probability of each (1)`
      },
      {
        q: 'Explain the difference between continuous and discontinuous variation. Give one example of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Continuous variation — characteristics with a range of values / any value in a range; controlled by many genes AND the environment (1)\n• Example of continuous: height, body mass, leaf length (any valid) (1)\n• Discontinuous variation — characteristics that fall into distinct categories / groups; usually controlled by a single gene (1)\n• Example of discontinuous: blood group (A, B, AB, O), tongue rolling, sex (any valid) (1)`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of embryo screening (pre-implantation genetic diagnosis) to detect genetic disorders. Your answer should include benefits, ethical issues and a supported conclusion.',
        marks: 6, tier: 'red',
        modelAnswer: `• Benefit: prevents the birth of children with serious, life-shortening genetic disorders (e.g. cystic fibrosis) (1)\n• Benefit: reduces suffering for affected children and their families; saves long-term NHS costs (1)\n• Ethical issue: it is a form of selection — could lead to "designer babies" being chosen for non-medical traits (1)\n• Ethical issue: people living with the screened conditions may feel devalued; the embryos rejected are destroyed, which some view as equivalent to ending a life (1)\n• Practical: embryo screening is not 100% accurate; it is expensive and not available equally (1)\n• Conclusion: must weigh benefits against ethical/practical issues and give a reasoned judgement, e.g. screening is justified for severe life-limiting disorders under strict regulation (1)`
      },
      {
        q: 'Describe the structure of DNA. Explain how its structure is linked to its function of storing and copying genetic information.',
        marks: 8, tier: 'red',
        modelAnswer: `• DNA is a double helix — two strands wound around each other (1)\n• Each strand is made of repeating units called nucleotides (1)\n• A nucleotide has three parts: a sugar (deoxyribose), a phosphate and a base (1)\n• Four bases: Adenine, Thymine, Cytosine, Guanine (1)\n• The sugars and phosphates form the backbone; the bases stick out from each backbone (1)\n• The two strands are held together by complementary base pairing: A with T and C with G (hydrogen bonds) (1)\n• Because the pairing is complementary, one strand can act as a template to copy the other — allowing DNA to replicate accurately during cell division (1)\n• The sequence of bases along a gene codes for a specific protein (sequence of amino acids), so the information is stored in the base order (1) (max 8)`
      },
    ],
  },

  /* ─────────────────────────── Topic 4 */
  '4': {
    green: [
      {
        q: 'State the four steps of natural selection, in order.',
        marks: 3, tier: 'green',
        modelAnswer: `• 1. Variation — individuals of a species vary due to different alleles / mutations (1)\n• 2. Competition — organisms compete for limited resources and more offspring are produced than can survive (1)\n• 3. Survival of the fittest — individuals with advantageous alleles are more likely to survive and reproduce (1)\n• 4. Inheritance — these alleles are passed to the next generation; over many generations the population changes (1) (max 3)`
      },
      {
        q: 'State three ways in which fossils can form.',
        marks: 3, tier: 'green',
        modelAnswer: `• Hard parts (bones, teeth, shells) are gradually replaced by minerals and turned to stone (1)\n• Casts / impressions — the organism rots leaving a mould that fills with minerals; footprints / burrows (1)\n• Preservation where decay is prevented — e.g. amber (resin), ice (permafrost), peat bogs (no oxygen) (1)`
      },
      {
        q: 'State the seven levels of the Linnaean classification system in order from largest to smallest, and give a human example of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Kingdom → Phylum → Class → Order → Family → Genus → Species — all seven in correct order (1)\n• Human example: Animalia, Chordata, Mammalia, Primates, Hominidae (1)\n• ...Homo, sapiens — with genus capitalised and species lowercase; both italicised (1)`
      },
      {
        q: 'State three NPK mineral ions needed by plants and give one role of each in the plant.',
        marks: 3, tier: 'green',
        modelAnswer: `• Nitrogen (nitrate) — for making amino acids / proteins / DNA (1)\n• Phosphorus (phosphate) — for making DNA and cell membranes / root growth (1)\n• Potassium — for enzyme function / flowering and fruit production (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how a population of bacteria becomes resistant to an antibiotic.',
        marks: 5, tier: 'amber',
        modelAnswer: `• A random mutation occurs in one bacterium that makes it resistant to the antibiotic (1)\n• When the antibiotic is used, non-resistant bacteria are killed but the resistant bacterium survives (1)\n• The resistant bacterium reproduces rapidly by binary fission — no competition (1)\n• All its offspring inherit the resistance allele (1)\n• Over time the whole population becomes resistant; the antibiotic no longer works (1)`
      },
      {
        q: 'Explain why the three-domain system is considered a better classification than the older five-kingdom system.',
        marks: 4, tier: 'amber',
        modelAnswer: `• The three-domain system (Bacteria, Archaea, Eukarya) was proposed by Carl Woese (1)\n• Based on comparing rRNA / DNA sequences, which is molecular evidence rather than just appearance (1)\n• Revealed that organisms once grouped together as "bacteria" are actually two very different groups — Bacteria and Archaea (1)\n• Molecular evidence is more reliable than physical features, which can be similar by coincidence (convergent evolution) (1)`
      },
      {
        q: 'Describe the steps used to insert a human gene into a bacterium for the production of insulin.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Cut the human insulin gene out of its DNA using a restriction enzyme (1)\n• This leaves sticky ends — short single-stranded overhangs (1)\n• Cut a bacterial plasmid (vector) open using the SAME restriction enzyme so it has matching sticky ends (1)\n• Use DNA ligase to join (seal) the gene into the plasmid, making recombinant DNA (1)\n• Insert the recombinant plasmid into a bacterium (e.g. E. coli); the bacterium reproduces and produces human insulin (1)`
      },
      {
        q: 'Compare biological control and chemical pesticides as methods of controlling insect pests. Give two similarities and two differences.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Similarity: both aim to reduce pest populations / both can increase crop yield (1)\n• Similarity: both have some ecological risks (non-target species / introduced species) (1)\n• Difference: pesticides act quickly (hours); biological control is slower (weeks/months) (1)\n• Difference: pests evolve resistance to chemical pesticides; biological controls are usually species-specific and leave no residues (also accept: introduced biological control may itself become a pest) (1)`
      },
    ],
    red: [
      {
        q: 'Evaluate the use of genetic modification in crop plants. Your answer should include specific benefits, specific concerns, and a reasoned conclusion.',
        marks: 6, tier: 'red',
        modelAnswer: `• Benefit: increased yield — e.g. Bt maize produces its own insecticide, reducing crop losses (1)\n• Benefit: improved nutrition — e.g. golden rice supplies beta-carotene (vitamin A precursor) to prevent childhood blindness (1)\n• Benefit: reduced chemical pesticide use — less harm to wildlife, lower cost (1)\n• Concern: gene transfer to wild plants could create herbicide-resistant "superweeds" (1)\n• Concern: reduced biodiversity (monoculture); potential for allergens if a gene from a food allergen is transferred (1)\n• Concern: ethical issues around corporate control of seed supply, farmer dependency, and "playing God" (1)\n• Conclusion: a reasoned judgement required — e.g. GM crops offer clear benefits for yield and nutrition but must be carefully regulated to limit ecological risks (1) (max 6)`
      },
      {
        q: 'Compare selective breeding with genetic engineering as ways of altering the characteristics of organisms. Explain the advantages and disadvantages of each, using a named example of each.',
        marks: 8, tier: 'red',
        modelAnswer: `• Selective breeding: humans choose parents with desired traits; breed them; select best offspring; repeat over many generations (1)\n• Example: dairy cows selectively bred for high milk yield / disease-resistant wheat (1)\n• Advantage: simple, no lab needed, trusted by farmers for centuries; no foreign DNA introduced (1)\n• Disadvantage: slow (many generations); can only combine alleles already present in the species; reduces gene pool causing inbreeding depression and disease susceptibility (1)\n• Genetic engineering: a specific gene is cut out with a restriction enzyme and inserted into another organism using a vector (plasmid) and ligase (1)\n• Example: E. coli modified with the human insulin gene to produce insulin / golden rice / Bt maize (1)\n• Advantage: fast (one generation); precise (only the wanted gene transferred); can cross species barriers (e.g. human gene into bacterium) (1)\n• Disadvantage: complex and expensive; ethical concerns; risk of gene transfer to wild populations; public distrust of GM foods (1) (max 8)`
      },
    ],
  },

  /* ─────────────────────────── Topic 5 */
  '5': {
    green: [
      {
        q: 'State the World Health Organisation (WHO) definition of health.',
        marks: 2, tier: 'green',
        modelAnswer: `• Health is a state of complete physical, mental and social wellbeing (1)\n• Not merely the absence of disease or infirmity (1)`
      },
      {
        q: 'State the four types of pathogen and give one example of a disease caused by each.',
        marks: 3, tier: 'green',
        modelAnswer: `• Bacteria — e.g. cholera / TB / stomach ulcer (H. pylori) (1)\n• Virus — e.g. HIV / Ebola / influenza; Fungus — e.g. chalara ash dieback / athlete's foot (1)\n• Protist — e.g. malaria (Plasmodium) (1)`
      },
      {
        q: 'Describe two physical defences and one chemical defence of the human body against pathogens.',
        marks: 3, tier: 'green',
        modelAnswer: `• Physical: skin acts as a barrier of dead keratinised cells; OR mucus and cilia trap and sweep pathogens out of airways; OR nasal hairs filter particles (1 any 1)\n• Physical second: one of the remaining above (1)\n• Chemical: stomach acid (HCl) kills pathogens swallowed in food; OR lysozyme in tears breaks down bacterial cell walls (1)`
      },
      {
        q: 'State the equation for BMI and the BMI range classed as healthy.',
        marks: 2, tier: 'green',
        modelAnswer: `• BMI = mass (kg) ÷ height² (m²) (1)\n• Healthy range 18.5 – 24.9 kg/m² (1)`
      },
    ],
    amber: [
      {
        q: 'Explain how a vaccine produces long-term immunity to a disease.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Vaccine contains a dead or weakened form of the pathogen (or its antigens) (1)\n• Antigens on the pathogen are recognised by lymphocytes (1)\n• Lymphocytes divide and produce antibodies (primary response) and memory cells (1)\n• If the real pathogen later enters the body, memory cells recognise the antigen and rapidly divide (1)\n• They produce large amounts of antibody quickly (secondary response); pathogen destroyed before person becomes ill (1)`
      },
      {
        q: 'Describe how antibiotic resistance in a population of bacteria develops and suggest two ways doctors can slow its spread.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Random mutation in a bacterium produces a gene that gives resistance to the antibiotic (1)\n• When the antibiotic is used, susceptible bacteria are killed but resistant ones survive and reproduce (natural selection) (1)\n• Prescribe antibiotics only when needed / not for viral infections (1)\n• Patients must complete the full prescribed course / use narrow-spectrum antibiotics / reduce use in livestock (1 any 1)`
      },
      {
        q: 'Describe the life cycle of Plasmodium, including the role of the mosquito.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Infected female Anopheles mosquito bites a human, injecting Plasmodium in saliva (1)\n• Plasmodium travels to the liver and multiplies (1)\n• It invades red blood cells, multiplies inside them and makes them burst, causing fever (1)\n• Another mosquito bites the infected person and takes up Plasmodium with the blood (1)\n• Plasmodium reproduces sexually in the mosquito's gut and moves to its salivary glands, ready to infect the next human — the mosquito acts as a vector (1)`
      },
      {
        q: 'Describe the stages a new drug must pass through before being approved for use in patients.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Preclinical testing on cells and tissues in the lab to check for intended effect / toxicity (1)\n• Then preclinical testing on live animals to check safety in a whole organism (1)\n• Clinical trial on healthy volunteers with low doses rising to optimum, to check for side effects in humans (1)\n• Clinical trial on patients; double-blind, placebo-controlled; to check effectiveness and best dose (1)\n• Peer review of results, then regulatory approval (e.g. MHRA); post-market monitoring (1)`
      },
    ],
    red: [
      {
        q: 'Compare the roles of phagocytes and lymphocytes in the immune response, explaining why both are needed.',
        marks: 6, tier: 'red',
        modelAnswer: `• Phagocytes are non-specific white blood cells that engulf and digest any pathogen by phagocytosis (1)\n• They recognise foreign chemicals, surround the pathogen, engulf it into a vesicle and release enzymes to digest it (1)\n• Lymphocytes are specific: each type recognises one antigen and produces antibodies that exactly fit that antigen (1)\n• Antibodies bind pathogens, agglutinating them and marking them for phagocytes, or neutralising toxins (1)\n• Memory lymphocytes provide long-term immunity by allowing a fast secondary response (1)\n• Both are needed: phagocytes provide immediate, general defence; lymphocytes target specific pathogens and give immunity — phagocytes alone cannot give long-term protection, lymphocytes alone would be too slow at first exposure (1)`
      },
      {
        q: 'Evaluate different ways of treating coronary heart disease, referring to stents, statins, coronary bypass and lifestyle change. Your answer should include benefits, drawbacks and a reasoned conclusion.',
        marks: 8, tier: 'red',
        modelAnswer: `• Lifestyle change: stop smoking, reduce saturated fat, exercise, lose weight, moderate alcohol (1)\n• Benefit of lifestyle: free, addresses underlying cause, whole-body benefits; drawback: slow to work, requires sustained motivation (1)\n• Statins: drugs that reduce cholesterol made by the liver, slowing atheroma build-up (1)\n• Benefit of statins: proven long-term reduction in heart attacks and strokes; drawback: must be taken for life, side effects (e.g. muscle pain, liver problems) (1)\n• Stents: mesh tubes inserted to hold narrowed arteries open (1)\n• Benefit of stent: immediate improvement in blood flow; drawback: surgical risks, does not treat the underlying cause so artery can re-block (1)\n• Coronary bypass: a blood vessel (often from leg) grafted to bypass the blocked coronary artery (1)\n• Benefit: effective for severe multi-vessel disease; drawback: major surgery, long recovery, risk of infection and anaesthetic complications (1)\n• Conclusion: a reasoned judgement — e.g. lifestyle change is the best first step and reduces need for other treatments; statins manage chemistry long-term; stents or bypass are reserved for severe cases. Combination is most effective (1) (max 8)`
      },
    ],
  },

  /* ─────────────────────────── Topic 6 */
  '6': {
    green: [
      {
        q: 'State the word and balanced symbol equation for photosynthesis.',
        marks: 3, tier: 'green',
        modelAnswer: `• Word: carbon dioxide + water → glucose + oxygen (1)\n• Symbol: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (1)\n• Written above the arrow: light energy / chlorophyll; reaction is endothermic (1)`
      },
      {
        q: 'State three uses of the glucose made in photosynthesis by a plant.',
        marks: 3, tier: 'green',
        modelAnswer: `• Respiration — to release energy (1)\n• Stored as starch (in leaves / tubers) (1)\n• Making cellulose for cell walls / making amino acids with nitrate / making lipids (any one) (1)`
      },
      {
        q: 'State two substances transported by xylem and two substances transported by phloem.',
        marks: 4, tier: 'green',
        modelAnswer: `• Xylem: water (1)\n• Xylem: dissolved mineral ions (e.g. nitrate) (1)\n• Phloem: sucrose (1)\n• Phloem: amino acids (1)`
      },
      {
        q: 'Define the term "transpiration" and name the apparatus used to measure water uptake in a cut leafy shoot.',
        marks: 2, tier: 'green',
        modelAnswer: `• Transpiration = loss of water vapour by evaporation from the leaves (through stomata) (1)\n• Measured using a potometer (1)`
      },
    ],
    amber: [
      {
        q: 'Describe and explain how the structure of a palisade mesophyll cell is adapted to its function.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Long, column-shaped cells packed closely in the upper leaf — maximise light absorption (1)\n• Contain many chloroplasts — main site of photosynthesis (1)\n• Positioned near the top of the leaf — light passes through the transparent epidermis straight to them (1)\n• Thin cell walls — short diffusion pathway for CO₂ (1)`
      },
      {
        q: 'Explain how light intensity, CO₂ concentration and temperature each affect the rate of photosynthesis.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Light intensity: rate increases with light until another factor becomes limiting — then plateaus (1)\n• Light provides energy for the light-dependent stage (splitting water) (1)\n• CO₂: rate increases with CO₂ until another factor becomes limiting — then plateaus; CO₂ is a raw material for glucose (1)\n• Temperature: rate rises with temperature to an optimum (around 25–35 °C) (1)\n• Above optimum, enzymes denature (active site changes shape) so rate falls sharply to zero (1)`
      },
      {
        q: 'Explain how auxin causes a shoot to bend towards one-sided light.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Auxin is made in the tip of the shoot (1)\n• When light comes from one side, auxin is redistributed to the shaded side (1)\n• In shoots, higher auxin concentration stimulates cell elongation (1)\n• Cells on the shaded side elongate more than those on the lit side — the shoot bends towards the light (1)`
      },
      {
        q: 'Describe how a potometer could be used to investigate the effect of air movement (wind) on transpiration rate. State how results could be made reliable.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Cut a leafy shoot underwater and attach it to the potometer so the apparatus is airtight and water-filled (1)\n• Introduce one air bubble into the capillary tube; record its starting position (1)\n• Without a fan, time how long the bubble takes to move a set distance (e.g. 30 mm) — calculate rate (1)\n• Place a fan/hairdryer at a fixed distance from the shoot; reset bubble using the reservoir; repeat (1)\n• Control other variables (light, temperature, humidity); repeat each condition and calculate a mean (1)`
      },
    ],
    red: [
      {
        q: 'Compare and contrast the structure and function of xylem and phloem in a plant. Use a named example of a substance carried by each and explain how structure relates to function.',
        marks: 6, tier: 'red',
        modelAnswer: `• Xylem: dead, hollow cells with no end walls forming a continuous tube, walls strengthened with lignin in rings/spirals (1)\n• Function: transports water and mineral ions UP only from roots to leaves (transpiration stream); lignin gives strength and waterproofs (1)\n• Example: water from roots to leaves / nitrate ions to sites of amino-acid synthesis (1)\n• Phloem: living elongated sieve tube cells joined by perforated sieve plates; each has a companion cell with a nucleus and many mitochondria (1)\n• Function: translocation of sucrose and amino acids from source (leaves) to sinks (roots, fruits) — in both directions; requires energy (ATP) from companion cells (1)\n• Example: sucrose from leaves to growing fruit / roots; similarities — both are continuous tubes in vascular bundles; difference — xylem is passive & one-way, phloem is active & bidirectional (1)`
      },
      {
        q: 'Evaluate the use of plant hormones in commercial agriculture. Include auxins, gibberellins and ethene, and give examples of benefits and drawbacks.',
        marks: 8, tier: 'red',
        modelAnswer: `• Auxins as rooting powder — dip cuttings to produce roots quickly, allowing rapid cloning of prize plants (1)\n• Auxins as selective weedkillers (e.g. 2,4-D) — kill broad-leaved weeds while leaving narrow-leaved cereal crops unharmed, increasing yield (1)\n• Auxin drawback — synthetic auxins can persist in soil, may harm non-target plants / environmental run-off (1)\n• Gibberellins — promote germination (uniform emergence), induce flowering, produce larger seedless fruit (e.g. grapes) (1)\n• Gibberellin drawback — may increase costs; natural variation in response; safety / regulatory approval needed (1)\n• Ethene — ripens fruit during storage and transport; fruit picked green so not damaged, then gassed with ethene before sale, reducing spoilage (1)\n• Ethene drawback — over-ripening if dose not controlled; continuous ripening shortens shelf life (1)\n• Conclusion — plant hormones increase yields, improve crop uniformity and reduce waste, but use must be balanced against environmental, health and economic costs (1) (max 8)`
      },
    ],
  },

  /* ─────────────────────────── Topic 7 */
  '7': {
    green: [
      {
        q: 'Define a hormone and name the system that uses hormones to coordinate the body.',
        marks: 2, tier: 'green',
        modelAnswer: `• A hormone is a chemical messenger secreted by an endocrine gland into the blood, which acts on specific target organs (1)\n• The endocrine system uses hormones to coordinate the body (1)`
      },
      {
        q: 'State two differences between nervous and hormonal control.',
        marks: 2, tier: 'green',
        modelAnswer: `• Nervous: electrical impulses along neurones; hormonal: chemical messages in the blood (1)\n• Nervous: fast and short-lived; hormonal: slower and longer-lasting (allow: nervous — precise target / hormonal — can affect many cells) (1)`
      },
      {
        q: 'Name the hormone that lowers blood glucose, the gland that releases it, and the storage form in which excess glucose is kept.',
        marks: 3, tier: 'green',
        modelAnswer: `• Hormone: insulin (1)\n• Gland: pancreas (β-cells) (1)\n• Storage form: glycogen (in liver and muscle) (1)`
      },
      {
        q: 'State where urea is produced in the body and where it is excreted.',
        marks: 2, tier: 'green',
        modelAnswer: `• Produced in the liver from the breakdown of excess amino acids (deamination) (1)\n• Excreted by the kidneys in urine (1)`
      },
    ],
    amber: [
      {
        q: 'Explain the effects of adrenaline on the body and explain how these prepare it for action.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Heart rate increases — more blood (and therefore more oxygen and glucose) delivered to muscles per minute (1)\n• Breathing rate increases — more oxygen absorbed for respiration (1)\n• Pupils dilate — more light enters the eye, improving vision (1)\n• Blood is redirected from the gut to skeletal muscles (vasoconstriction in gut, vasodilation in muscles) (1)\n• Liver converts glycogen → glucose, raising blood glucose for muscle respiration — overall prepares the body for rapid action (fight or flight) (1)`
      },
      {
        q: 'Describe the roles of FSH, LH, oestrogen and progesterone in the 28-day menstrual cycle.',
        marks: 5, tier: 'amber',
        modelAnswer: `• FSH (pituitary) stimulates a follicle in the ovary to develop and the ovary to release oestrogen (1)\n• Oestrogen (ovary) rebuilds the uterine lining (and inhibits further FSH) (1)\n• Rising oestrogen triggers a surge of LH (pituitary) around day 14, causing ovulation (1)\n• After ovulation, the empty follicle (corpus luteum) releases progesterone (1)\n• Progesterone maintains the uterus lining; if no fertilisation, progesterone falls and the lining breaks down — menstruation (1)`
      },
      {
        q: 'Explain how ADH controls water balance in the body.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Concentration of blood is monitored by the hypothalamus (1)\n• If blood is too concentrated (e.g. after sweating), the pituitary releases more ADH (1)\n• ADH makes the kidney collecting ducts more permeable to water, so more water is reabsorbed into the blood (1)\n• Less, more concentrated urine is produced; blood water rises back to normal (1)\n• If blood becomes too dilute, less ADH is released, less water is reabsorbed, so more dilute urine is produced — restoring balance (negative feedback) (1)`
      },
      {
        q: 'Compare kidney dialysis and kidney transplant as treatments for kidney failure. Give one advantage and one disadvantage of each.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Dialysis advantage: no surgery / available quickly / no rejection (any one) (1)\n• Dialysis disadvantage: time-consuming (e.g. 3 × 4h per week); strict diet; not a cure; risk of infection at tube sites (any one) (1)\n• Transplant advantage: long-term cure / free diet / better quality of life (any one) (1)\n• Transplant disadvantage: donor shortage / surgical risks / lifelong immunosuppressants → higher infection risk / risk of rejection (any one) (1)`
      },
    ],
    red: [
      {
        q: 'Explain, in detail, how blood glucose is regulated in a healthy person after a carbohydrate meal and during prolonged exercise. Refer to negative feedback.',
        marks: 6, tier: 'red',
        modelAnswer: `• After a meal, glucose is absorbed from the gut into the blood — blood glucose rises above the set point (~5 mmol dm⁻³) (1)\n• β-cells of the pancreas detect the rise and secrete insulin (1)\n• Insulin causes liver and muscle cells to take up glucose from the blood and store it as glycogen — blood glucose falls back to the set point (1)\n• During prolonged exercise, muscles respire glucose, so blood glucose falls below the set point (1)\n• α-cells of the pancreas secrete glucagon, which acts on the liver to break glycogen down to glucose and release it into the blood — blood glucose rises (1)\n• This is negative feedback: each response reverses the original change and restores the set point; insulin and glucagon are antagonistic hormones (1)`
      },
      {
        q: 'Describe the structure of a nephron and explain how it produces urine. Include the terms ultrafiltration and selective reabsorption.',
        marks: 8, tier: 'red',
        modelAnswer: `• Each nephron begins with a Bowman\'s capsule surrounding a knot of capillaries called the glomerulus, in the cortex (1)\n• Blood enters the glomerulus under high pressure (wide afferent / narrower efferent arteriole) (1)\n• Ultrafiltration: water, glucose, ions, urea and small molecules are forced through the capillary wall and capsule into the nephron; blood cells and large proteins are too big to pass, so stay in the blood (1)\n• The filtrate flows into the proximal convoluted tubule where selective reabsorption occurs — ALL the glucose, most water and useful ions are reabsorbed back into the blood (active transport + osmosis) (1)\n• The loop of Henle (medulla) sets up a high salt concentration in the medulla by pumping ions out (1)\n• The distal convoluted tubule adjusts salts further (1)\n• The collecting duct passes through the salty medulla; if ADH is present the duct is permeable and water is reabsorbed by osmosis (1)\n• Remaining fluid (mainly water, urea, excess ions) is urine — it collects in the pelvis and leaves via the ureter to the bladder (1) (max 8)`
      },
    ],
  },

  /* ─────────────────────────── Topic 8 */
  '8': {
    green: [
      {
        q: 'State the word equation for aerobic respiration.',
        marks: 2, tier: 'green',
        modelAnswer: `• glucose + oxygen → carbon dioxide + water (1)\n• (+ energy/ATP released) — reactants and products correct (1)`
      },
      {
        q: 'State three adaptations of a red blood cell for its function.',
        marks: 3, tier: 'green',
        modelAnswer: `• Biconcave disc shape — large SA:V for rapid oxygen uptake / flexible to fit through capillaries (1)\n• No nucleus — more room for haemoglobin (more oxygen carried) (1)\n• Contains haemoglobin — binds O₂ reversibly in lungs and releases it in tissues (1)`
      },
      {
        q: 'State the function of (a) plasma, (b) platelets and (c) white blood cells.',
        marks: 3, tier: 'green',
        modelAnswer: `• (a) Plasma: transports cells, nutrients, CO₂, urea, hormones (1)\n• (b) Platelets: help the blood to clot / seal wounds (1)\n• (c) White blood cells: defend against pathogens (phagocytosis / antibody production) (1)`
      },
      {
        q: 'State the formula for cardiac output and give a worked example.',
        marks: 2, tier: 'green',
        modelAnswer: `• Cardiac output = stroke volume × heart rate (1)\n• e.g. 70 cm³ × 72 bpm = 5040 cm³/min (~5 L/min) — any correct calculation (1)`
      },
    ],
    amber: [
      {
        q: 'Explain why a large multicellular organism needs a transport system, referring to SA:V ratio.',
        marks: 4, tier: 'amber',
        modelAnswer: `• As organisms get larger, volume increases faster than surface area (1)\n• SA:V decreases — not enough surface area for all cells to exchange substances by diffusion (1)\n• Diffusion distances are too great for gases / nutrients / wastes to reach every cell quickly enough (1)\n• A transport system (blood + heart) carries substances rapidly between exchange surfaces and each cell (1)`
      },
      {
        q: 'Explain how the alveoli are adapted for efficient gas exchange.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Large total surface area (~70 m²) — more gas can diffuse per second (1)\n• Wall only one cell thick — short diffusion distance (1)\n• Surrounded by a dense capillary network — maintains steep concentration gradient (1)\n• Moist lining — gases dissolve before diffusing across (1)\n• Ventilated by breathing — fresh air replaces used air, keeping the gradient steep (1)`
      },
      {
        q: 'Describe how inhalation occurs in humans.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Diaphragm contracts and flattens (moves down) (1)\n• External intercostal muscles contract, pulling ribs up and out (1)\n• Volume of thorax increases, so pressure inside decreases (below atmospheric) (1)\n• Air flows into the lungs down the pressure gradient (1)`
      },
      {
        q: 'Compare the structure and function of an artery, a vein and a capillary.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Artery: thick muscular/elastic wall, narrow lumen, no valves — carries high-pressure blood away from the heart (1)\n• Vein: thin wall, wide lumen, valves — returns low-pressure blood to the heart; valves prevent backflow (1)\n• Capillary: wall one cell thick, tiny lumen — exchange of O₂, CO₂ and nutrients with tissues (1)\n• Artery wall must withstand high pressure; capillary wall must be thin enough to allow diffusion (1)\n• Veins rely on skeletal muscle contraction squeezing them; valves keep blood moving towards the heart (1)`
      },
    ],
    red: [
      {
        q: 'Compare aerobic and anaerobic respiration in humans and in yeast. Refer to oxygen, products, energy yield and uses.',
        marks: 6, tier: 'red',
        modelAnswer: `• Aerobic: glucose + O₂ → CO₂ + H₂O; releases a large amount of energy (~38 ATP) in the mitochondria (1)\n• Anaerobic (human): glucose → lactic acid; no oxygen needed; small amount of energy; used in muscles during vigorous exercise; builds up lactic acid → oxygen debt (2)\n• Anaerobic (yeast / fermentation): glucose → ethanol + CO₂; small amount of energy; used in brewing (ethanol) and breadmaking (CO₂) (2)\n• Aerobic releases much more energy per glucose than anaerobic because glucose is fully broken down (1)`
      },
      {
        q: 'Describe the structure of the heart and trace the pathway of a blood cell from the vena cava to the aorta, naming every chamber, valve and vessel.',
        marks: 8, tier: 'red',
        modelAnswer: `• Four-chambered heart: right/left atria (upper, thin-walled) and right/left ventricles (lower, thick-walled); septum separates the two sides (1)\n• Deoxygenated blood from body enters right atrium via the vena cava (1)\n• Passes through the tricuspid valve into the right ventricle (1)\n• Pumped through the (pulmonary) semilunar valve into the pulmonary artery → lungs (1)\n• Oxygenated blood returns from lungs via the pulmonary vein to the left atrium (1)\n• Passes through the bicuspid (mitral) valve into the left ventricle (1)\n• Pumped through the (aortic) semilunar valve into the aorta → body (1)\n• Left ventricle wall is thicker because it pumps blood at higher pressure around the whole body (1)`
      },
    ],
  },

  /* ─────────────────────────── Topic 9 */
  '9': {
    green: [
      {
        q: 'Define the terms "ecosystem", "community" and "population".',
        marks: 3, tier: 'green',
        modelAnswer: `• Ecosystem: all the living organisms in an area together with the non-living components and their interactions (1)\n• Community: all the populations of different species living in the same habitat (1)\n• Population: all the individuals of the same species living in the same habitat (1)`
      },
      {
        q: 'State three abiotic factors and three biotic factors that affect a population.',
        marks: 3, tier: 'green',
        modelAnswer: `• Any three abiotic: temperature, light intensity, water/moisture, soil pH, mineral content, CO₂, O₂ (1 for 3 correct)\n• Any three biotic: predation, competition, disease, availability of food/mates (1 for 3 correct)\n• Clear distinction between the two categories (1)`
      },
      {
        q: 'State the word equation/formula for (a) the percentage efficiency of energy transfer between trophic levels and (b) the Lincoln index for estimating population size.',
        marks: 2, tier: 'green',
        modelAnswer: `• (a) Efficiency = (energy transferred to next level ÷ energy available at previous level) × 100 (1)\n• (b) N = (n₁ × n₂) ÷ n₃ where n₁ = first marked, n₂ = second catch, n₃ = marked in second catch (1)`
      },
      {
        q: 'Name the four types of bacteria involved in the nitrogen cycle.',
        marks: 2, tier: 'green',
        modelAnswer: `• Nitrogen-fixing bacteria and decomposers (saprophytic bacteria/fungi) (1)\n• Nitrifying bacteria and denitrifying bacteria (1)`
      },
    ],
    amber: [
      {
        q: 'Explain why only about 10% of energy is transferred from one trophic level to the next.',
        marks: 4, tier: 'amber',
        modelAnswer: `• Most energy is released as heat during respiration by the organism (1)\n• Some energy is lost in faeces and urine (not absorbed) (1)\n• Not all parts of prey are eaten — bones, fur, roots are left (1)\n• Only the energy stored in new biomass is available to the next level → roughly 10% (1)`
      },
      {
        q: 'Describe how you would use quadrats to estimate the population of daisies in a school field. Include how you would make the sample representative.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Lay two tape measures at right angles to form a grid over the field (1)\n• Use a random-number generator to pick coordinates → place quadrat there (1)\n• Count all the daisies inside the 0.25 m² quadrat; repeat at least 10 times (1)\n• Calculate the mean number per quadrat → convert to number per m² (1)\n• Multiply by the total area of the field to estimate the total population (1)`
      },
      {
        q: 'Describe the role of nitrogen-fixing, decomposing, nitrifying and denitrifying bacteria in the nitrogen cycle.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Nitrogen-fixing: convert atmospheric N₂ gas into ammonium/ammonia (live free in soil or in root nodules of legumes) (1)\n• Decomposers (saprophytic): break down proteins in dead organisms and urea in waste → ammonium (1)\n• Nitrifying: convert ammonium → nitrites → nitrates (two steps) in well-aerated soil (1)\n• Denitrifying: convert nitrates → N₂ gas, returning it to the atmosphere; active in waterlogged/anaerobic soil (1)\n• Plants then absorb nitrates through their roots to build amino acids and proteins (1)`
      },
      {
        q: 'Explain the process of eutrophication.',
        marks: 5, tier: 'amber',
        modelAnswer: `• Fertiliser (nitrates/phosphates) runs off fields into rivers or lakes (1)\n• Algae grow rapidly, producing an algal bloom on the surface (1)\n• Algae block sunlight, so aquatic plants below cannot photosynthesise and die (1)\n• Aerobic decomposers (bacteria) feed on the dead plants and respire, using up dissolved O₂ (1)\n• Fish and other aerobic organisms suffocate and die (1)`
      },
    ],
    red: [
      {
        q: 'Describe the carbon cycle, naming every process by which CO₂ enters or leaves the atmosphere. Include the role of fossil fuels.',
        marks: 7, tier: 'red',
        modelAnswer: `• Photosynthesis by plants and algae removes CO₂ from the atmosphere, fixing C into glucose/organic compounds (1)\n• Carbon passes along food chains as animals eat plants / other animals (1)\n• Respiration by plants, animals and microorganisms releases CO₂ back to the atmosphere (1)\n• Decomposers (bacteria, fungi) break down dead organisms and waste; their respiration releases CO₂ (1)\n• Dead organisms buried under sediment for millions of years form fossil fuels (coal, oil, gas) (1)\n• Combustion of fossil fuels and wood releases CO₂ back to the atmosphere (1)\n• Human burning of fossil fuels and deforestation are raising atmospheric CO₂ → enhanced greenhouse effect / climate change (1)`
      },
      {
        q: '[8 marks] Evaluate the impact of human activities on biodiversity and discuss ways in which biodiversity can be maintained.',
        marks: 8, tier: 'red',
        modelAnswer: `• Habitat destruction (deforestation, urbanisation) removes niches → species die out (1)\n• Pollution (air, water, land) kills sensitive species; pesticides cause bioaccumulation (1)\n• Overfishing/over-hunting reduce populations below replacement rate (1)\n• Introduction of non-native species out-compete natives (e.g. grey squirrel vs red squirrel) (1)\n• Climate change shifts species ranges; slow-moving species go extinct (1)\n• Conservation: protected habitats (national parks, reserves) preserve niches (1)\n• Seed banks, captive breeding programmes and reintroduction restore populations (1)\n• Sustainable fishing quotas, reforestation and legislation (e.g. CITES) reduce ongoing damage (1) (max 8)`
      },
    ],
  },

};
