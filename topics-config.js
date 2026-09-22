/* ═══════════════════════════════════════════════════════════════════
   DIAGNOSTIC TOPICS — the one list of what each spec contains
   ────────────────────────────────────────────────────────────────────
   Dashboard.html and breakdown.html each carried their own copy of this
   object, and the copies had drifted: different topics, different counts,
   and nine subject/board combinations present in one file and missing
   from the other. medals-engine.js then kept a THIRD count, TOPIC_TOTAL,
   by hand. A student could read "Diagnostic 1/17" on one page and
   "1/12 tested" on another, for the same subject, in the same session.

   WHAT DECIDES THE LIST. A topic belongs here only if its diagnostic can
   actually ask about it — that is, the question bank the diagnostic page
   loads has an entry for that id. Anything else is a topic a student can
   click and get an empty test from, and it inflates every denominator on
   the site. Two entries were dropped on that basis when this file was
   built from the two old copies:

     Mathematics_AQA             2.3, 2.4, 2.5, 2.6, 2.7
     Computer Science_AQA|alevel 4.11, 4.12

   Neither has MCQ questions, written questions, or notes. Maths AQA is
   therefore 12 topics and not 17, which is what notes.html, practice.html
   and flashcards-config.js have said all along.

   TOPIC_TOTAL in medals-engine.js is now derived from this object rather
   than typed out again — see the note there.

   KEEPING IT HONEST. scripts/check-topics.js re-reads every question bank
   and fails if this file and the banks disagree. Run it after adding a
   subject; it is the whole reason the drift cannot come back quietly.

   Load BEFORE medals-engine.js.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const DIAG_TOPICS = {
    'Biology_AQA': {
      label: 'Biology — AQA',
      emoji: '🧬',
      page: 'diagnostics/biology-aqa-diagnostic.html',
      topics: [
        { id: 'T1', name: 'Biological Molecules', sub: 'Water, carbs, lipids, proteins, enzymes, nucleic acids' },
        { id: 'T2', name: 'Cells', sub: 'Cell structure, membranes, transport, immune system' },
        { id: 'T3', name: 'Organisms Exchange Substances', sub: 'Gas exchange, digestion, mass transport' },
        { id: 'T4', name: 'Genetic Information & Variation', sub: 'DNA, protein synthesis, meiosis, biodiversity' },
        { id: 'T5', name: 'Energy Transfers', sub: 'Photosynthesis, respiration, ecosystems' },
        { id: 'T6', name: 'Organisms Respond to Changes', sub: 'Nervous system, muscles, homeostasis' },
        { id: 'T7', name: 'Genetics, Populations & Evolution', sub: 'Inheritance, populations, evolution, speciation' },
        { id: 'T8', name: 'Control of Gene Expression', sub: 'Gene technology, epigenetics, biotechnology' },
      ],
    },
    'Biology_AQA|gcse': {
      label: 'Biology — AQA (GCSE)',
      emoji: '🧬',
      page: 'diagnostics/biology-aqa-gcse-diagnostic.html',
      topics: [
        { id: '4.1', name: 'Cell Biology', sub: 'Prokaryote/eukaryote, microscopy, transport, mitosis, stem cells' },
        { id: '4.2', name: 'Organisation', sub: 'Enzymes, digestion, heart & blood vessels, plant transport' },
        { id: '4.3', name: 'Infection and Response', sub: 'Pathogens, immunity, vaccines, antibiotics, monoclonal antibodies' },
        { id: '4.4', name: 'Bioenergetics', sub: 'Photosynthesis, respiration, anaerobic respiration, metabolism' },
        { id: '4.5', name: 'Homeostasis and Response', sub: 'Nervous system, hormones, blood glucose, reproduction, kidneys, plant hormones' },
        { id: '4.6', name: 'Inheritance, Variation and Evolution', sub: 'DNA, genetics, mutation, natural selection, classification' },
        { id: '4.7', name: 'Ecology', sub: 'Ecosystems, biodiversity, carbon/water/nitrogen cycles, human impacts' },
      ],
    },
    'Biology_Edexcel A': {
      label: 'Biology — Edexcel A',
      emoji: '🧬',
      page: 'diagnostics/biology-edexcel-a-diagnostic.html',
      topics: [
        { id: 'S1', name: 'Lifestyle, Health and Risk', sub: 'Cardiovascular disease, diet, lipids, water transport' },
        { id: 'S2', name: 'Genes and Health', sub: 'DNA, protein synthesis, genetic disease, membranes' },
        { id: 'S3', name: 'Voice of the Genome', sub: 'Cell division, development, stem cells, gene expression' },
        { id: 'S4', name: 'Biodiversity and Natural Resources', sub: 'Classification, biodiversity, plant biology, sustainability' },
        { id: 'S5', name: 'On the Wild Side', sub: 'Photosynthesis, climate change, ecosystems, evolution' },
        { id: 'S6', name: 'Immunity, Infection and Forensics', sub: 'Immune system, pathogens, forensic biology' },
        { id: 'S7', name: 'Run for Your Life', sub: 'Respiration, muscles, exercise, homeostasis' },
        { id: 'S8', name: 'Grey Matter', sub: 'Nervous system, brain, vision, learning, drugs' },
      ],
    },
    'Biology_Edexcel B': {
      label: 'Biology — Edexcel B',
      emoji: '🧬',
      page: 'diagnostics/biology-edexcel-b-diagnostic.html',
      topics: [
        { id: '1', name: 'Biological Molecules', sub: 'Carbohydrates, lipids, proteins, enzymes, nucleic acids, DNA replication' },
        { id: '2', name: 'Cells, Viruses and Reproduction of Living Things', sub: 'Cell structure, viruses, cell cycle, meiosis, reproduction' },
        { id: '3', name: 'Classification and Biodiversity', sub: 'Classification, natural selection, speciation, biodiversity' },
        { id: '4', name: 'Exchange and Transport', sub: 'Surface area, membranes, gas exchange, circulation, plant transport' },
        { id: '5', name: 'Energy for Biological Processes', sub: 'Respiration, photosynthesis, ATP' },
        { id: '6', name: 'Microbiology and Pathogens', sub: 'Culturing microorganisms, pathogens, immunity, antibiotics' },
        { id: '7', name: 'Modern Genetics', sub: 'Gene expression, DNA sequencing, genetic engineering' },
        { id: '8', name: 'Origins of Genetic Variation', sub: 'Mutation, inheritance, population genetics, evolution' },
        { id: '9', name: 'Control Systems', sub: 'Homeostasis, hormones, nervous system, plant responses' },
        { id: '10', name: 'Ecosystems', sub: 'Ecosystems, energy flow, nutrient cycles, human effects' },
      ],
    },
    'Biology_Edexcel|gcse': {
      label: 'Biology — Edexcel (GCSE)',
      emoji: '🧬',
      page: 'diagnostics/biology-edexcel-gcse-diagnostic.html',
      topics: [
        { id: '1', name: 'Key Concepts in Biology', sub: 'Cells, enzymes, microscopy, transport across membranes' },
        { id: '2', name: 'Cells and Control', sub: 'Mitosis, growth, stem cells, nervous system, brain, eye' },
        { id: '3', name: 'Genetics', sub: 'Reproduction, meiosis, DNA, inheritance, variation' },
        { id: '4', name: 'Natural Selection & Genetic Modification', sub: 'Evolution, classification, selective breeding, GM, tissue culture' },
        { id: '5', name: 'Health, Disease & Development of Medicines', sub: 'Pathogens, immunity, antibiotics, non-communicable disease, cancer' },
        { id: '6', name: 'Plant Structures and Their Functions', sub: 'Photosynthesis, plant transport, plant hormones, agriculture' },
        { id: '7', name: 'Animal Coordination, Control & Homeostasis', sub: 'Hormones, blood glucose, thermoregulation, osmoregulation' },
        { id: '8', name: 'Exchange & Transport in Animals', sub: 'Surface area, diffusion, blood, circulatory system, lungs' },
        { id: '9', name: 'Ecosystems & Material Cycles', sub: 'Abiotic/biotic factors, water/carbon/nitrogen cycles, human impacts' },
      ],
    },
    'Biology_OCR A': {
      label: 'Biology — OCR A',
      emoji: '🧬',
      page: 'diagnostics/biology-ocr-a-diagnostic.html',
      topics: [
        { id: 'M1', name: 'Development of Practical Skills', sub: 'Planning, analysis, evaluation' },
        { id: 'M2', name: 'Foundations in Biology', sub: 'Cell structure, molecules, enzymes, membranes' },
        { id: 'M3', name: 'Exchange and Transport', sub: 'Gas exchange, circulatory system, plant transport' },
        { id: 'M4', name: 'Biodiversity, Evolution and Disease', sub: 'Pathogens, immunity, classification, evolution' },
        { id: 'M5', name: 'Communication, Homeostasis and Energy', sub: 'Nervous/hormonal, homeostasis, photosynthesis, respiration' },
        { id: 'M6', name: 'Genetics, Evolution and Ecosystems', sub: 'Inheritance, gene technology, ecosystems' },
      ],
    },
    'Biology_OCR A|gcse': {
      label: 'Biology — OCR A (GCSE J247 Gateway)',
      emoji: '🧬',
      page: 'diagnostics/biology-ocr-a-gcse-diagnostic.html',
      topics: [
        { id: 'B1.1', name: 'Cell Structures',                          sub: 'Animal/plant/prokaryote cells, microscopy, magnification, specialised cells' },
        { id: 'B1.2', name: 'What Happens in Cells',                    sub: 'DNA structure, transcription/translation, enzymes, lock-and-key, factors affecting enzymes' },
        { id: 'B1.3', name: 'Respiration',                              sub: 'Aerobic/anaerobic respiration, ATP, lactic acid, fermentation, metabolic rate' },
        { id: 'B1.4', name: 'Photosynthesis',                           sub: 'Word/symbol equation, limiting factors, leaf adaptations, inverse square law' },
        { id: 'B2.1', name: 'Supplying the Cell',                       sub: 'Diffusion, osmosis, active transport, mitosis, cell cycle, stem cells, differentiation' },
        { id: 'B2.2', name: 'The Challenges of Size',                   sub: 'Exchange surfaces, circulatory system, blood, heart, lungs, plant transport, transpiration' },
        { id: 'B3.1', name: 'Coordination — Nervous System',            sub: 'CNS, neurones, synapses, reflex arc, eye, brain' },
        { id: 'B3.2', name: 'Coordination — Endocrine System',          sub: 'Glands, hormones, blood glucose, diabetes, menstrual cycle, contraception' },
        { id: 'B3.3', name: 'Maintaining Internal Environments',        sub: 'Homeostasis, thermoregulation, kidney, ADH, plant hormones, tropisms' },
        { id: 'B4.1', name: 'Ecosystems',                               sub: 'Communities, abiotic/biotic factors, food chains/webs, decomposers, water/carbon/nitrogen cycles' },
        { id: 'B5.1', name: 'Inheritance',                              sub: 'DNA → genes, meiosis, monohybrid crosses, sex inheritance, genetic disorders' },
        { id: 'B5.2', name: 'Natural Selection & Evolution',            sub: 'Variation, evolution, antibiotic resistance, evidence for evolution, classification' },
        { id: 'B6.1', name: 'Monitoring & Maintaining the Environment', sub: 'Sampling techniques, biodiversity, human impact, conservation, indicator species' },
        { id: 'B6.2', name: 'Feeding the Human Race',                   sub: 'Food security, selective breeding, GM crops, biotechnology, fertilisers' },
        { id: 'B6.3', name: 'Monitoring & Maintaining Health',          sub: 'Communicable & non-communicable disease, immunity, vaccines, antibiotics, monoclonal antibodies' },
      ],
    },
    'Biology_OCR B': {
      label: 'Biology — OCR B',
      emoji: '🧬',
      page: 'diagnostics/biology-ocr-b-diagnostic.html',
      topics: [
        { id: 'B1', name: 'Development of Practical Skills', sub: 'Planning, analysis, evaluation' },
        { id: 'B2', name: 'Cells, Chemicals and Transport', sub: 'Cell structure, molecules, enzymes, membranes' },
        { id: 'B3', name: 'Cell Division, Development and Disease', sub: 'Mitosis, meiosis, stem cells, immunity' },
        { id: 'B4', name: 'Energy, Reproduction and Populations', sub: 'Photosynthesis, respiration, ecosystems, evolution' },
        { id: 'B5', name: 'Genetics, Control and Homeostasis', sub: 'DNA, inheritance, nervous/hormonal, homeostasis' },
        { id: 'B6', name: 'Biotechnology, Ecosystems and Human Impact', sub: 'Gene tech, cloning, conservation, sustainability' },
      ],
    },
    'Biology_OCR B|gcse': {
      label: 'Biology — OCR B (GCSE J257 Twenty First Century)',
      emoji: '🧬',
      page: 'diagnostics/biology-ocr-b-gcse-diagnostic.html',
      topics: [
        { id: 'B1.1', name: 'The genome and what it does',            sub: 'DNA structure, genes, chromosomes, mutations, the human genome' },
        { id: 'B1.2', name: 'How genetic information is inherited',   sub: 'Punnett squares, sex inheritance, dominant/recessive, genetic disorders' },
        { id: 'B1.3', name: 'Gene technology',                        sub: 'Genetic engineering, GM crops, cloning, gene therapy, ethical issues' },
        { id: 'B2.1', name: 'Causes of disease',                      sub: 'Communicable vs non-communicable, pathogens, transmission' },
        { id: 'B2.2', name: 'Defending against pathogens',            sub: 'Physical/chemical barriers, white blood cells, antibodies' },
        { id: 'B2.3', name: 'Preventing the spread of infections',    sub: 'Vaccines, hygiene, antibiotics, public health' },
        { id: 'B2.4', name: 'Identifying the cause of an infection',  sub: 'Diagnosis, monoclonal antibodies, drug development' },
        { id: 'B2.5', name: 'Lifestyle, genes and the environment',   sub: 'Risk factors for disease, diet, smoking, alcohol, exercise' },
        { id: 'B2.6', name: 'Treating non-communicable disease',      sub: 'Drugs, surgery, stents, statins, transplants' },
        { id: 'B3.1', name: 'Photosynthesis',                         sub: 'Word/symbol equations, leaf structure, limiting factors' },
        { id: 'B3.2', name: 'Producer substances',                    sub: 'Mineral ions, transpiration, root hair cells, water uptake' },
        { id: 'B3.3', name: 'Interdependence',                        sub: 'Food webs, decomposition, nutrient cycles, microorganisms' },
        { id: 'B3.4', name: 'Populations',                            sub: 'Sampling techniques, abiotic & biotic factors, pollution' },
        { id: 'B4.1', name: 'Cellular respiration',                   sub: 'Aerobic & anaerobic, ATP, exercise, oxygen debt' },
        { id: 'B4.2', name: 'Cell structures and mitochondria',       sub: 'Eukaryotic vs prokaryotic, organelles, microscopy' },
        { id: 'B4.3', name: 'Growth and development',                 sub: 'Mitosis, stem cells, differentiation, percentile charts' },
        { id: 'B5.1', name: 'Substances in, out and around the body', sub: 'Heart, blood vessels, gas exchange, digestion' },
        { id: 'B5.2', name: 'The nervous system',                     sub: 'Neurones, reflex arc, brain, eye' },
        { id: 'B5.3', name: 'Hormonal control',                       sub: 'Endocrine glands, blood glucose, menstrual cycle' },
        { id: 'B5.4', name: 'Maintaining a constant internal environment', sub: 'Homeostasis, temperature, water balance, kidney function' },
        { id: 'B6.1', name: 'How the theory of evolution was developed', sub: 'Darwin, Wallace, fossils, the case for evolution' },
        { id: 'B6.2', name: 'How evolution takes place',              sub: 'Variation, mutation, natural selection, antibiotic resistance, speciation' },
        { id: 'B6.3', name: 'How biodiversity is affected',           sub: 'Human impact, conservation, indicator species, extinction' },
      ],
    },
    'Business Studies_Edexcel|alevel': {
      label: 'Business Studies — Edexcel',
      emoji: '💼',
      page: 'diagnostics/business-edexcel-alevel-diagnostic.html',
      /* 9BS0 has no optional content: every student sits all four themes
         (Papers 1 and 2 split them 1+4 / 2+3; Paper 3 draws on all four),
         so topics.length is the examined total and no examinedTotal is set.
         Ids are the spec's own X.Y numbering. */
      topics: [
        { id: '1.1', name: 'Meeting Customer Needs', sub: 'The market, market research, market positioning' },
        { id: '1.2', name: 'The Market', sub: 'Demand, supply, markets, price and income elasticity' },
        { id: '1.3', name: 'Marketing Mix & Strategy', sub: 'Design mix, branding & promotion, pricing, distribution, strategy' },
        { id: '1.4', name: 'Managing People', sub: 'Staffing, recruitment & training, organisational design, motivation, leadership' },
        { id: '1.5', name: 'Entrepreneurs & Leaders', sub: 'Entrepreneurs, motives, objectives, business forms, choices, leadership' },
        { id: '2.1', name: 'Raising Finance', sub: 'Internal and external finance, liability, business plans' },
        { id: '2.2', name: 'Financial Planning', sub: 'Sales forecasting, revenue & costs, break-even, budgets' },
        { id: '2.3', name: 'Managing Finance', sub: 'Profit, liquidity, business failure' },
        { id: '2.4', name: 'Resource Management', sub: 'Production & productivity, capacity utilisation, stock control, quality' },
        { id: '2.5', name: 'External Influences', sub: 'Economic influences, legislation, the competitive environment' },
        { id: '3.1', name: 'Business Objectives & Strategy', sub: 'Corporate objectives, theories of strategy, SWOT, external environment' },
        { id: '3.2', name: 'Business Growth', sub: 'Growth, mergers & takeovers, organic growth, staying small' },
        { id: '3.3', name: 'Decision-Making Techniques', sub: 'Sales forecasting, investment appraisal, decision trees, critical path' },
        { id: '3.4', name: 'Influences on Business Decisions', sub: 'Corporate influences, culture, shareholders vs stakeholders, ethics' },
        { id: '3.5', name: 'Assessing Competitiveness', sub: 'Financial statements, ratio analysis, human resources' },
        { id: '3.6', name: 'Managing Change', sub: 'Causes & effects of change, key factors, scenario planning' },
        { id: '4.1', name: 'Globalisation', sub: 'Growing economies, trade, protectionism, trading blocs' },
        { id: '4.2', name: 'Global Markets & Business Expansion', sub: 'Conditions for trade, assessing markets & locations, global competitiveness' },
        { id: '4.3', name: 'Global Marketing', sub: 'Global marketing strategy, niche markets, cultural & social factors' },
        { id: '4.4', name: 'Global Industries & Companies (MNCs)', sub: 'Impact of MNCs, ethics, controlling MNCs' },
      ],
    },
    'Chemistry_AQA': {
      label: 'Chemistry — AQA',
      emoji: '🧪',
      page: 'diagnostics/chemistry-aqa-diagnostic.html',
      topics: [
        { id: 'P1', name: 'Physical Chemistry I', sub: 'Atomic structure, bonding, energetics, amount of substance' },
        { id: 'P2', name: 'Physical Chemistry II', sub: 'Kinetics, equilibria, thermodynamics, acids & bases, electrodes' },
        { id: 'I1', name: 'Inorganic Chemistry I', sub: 'Periodicity, Group 2, Group 7' },
        { id: 'I2', name: 'Inorganic Chemistry II', sub: 'Period 3, transition metals, ions in solution' },
        { id: 'O1', name: 'Organic Chemistry I', sub: 'Alkanes, alkenes, halogenoalkanes, alcohols, analysis' },
        { id: 'O2', name: 'Organic Chemistry II', sub: 'Carbonyls, aromatics, amines, polymers, NMR' },
      ],
    },
    'Chemistry_Edexcel': {
      label: 'Chemistry — Edexcel',
      emoji: '🧪',
      page: 'diagnostics/chemistry-edexcel-diagnostic.html',
      topics: [
        { id: 'T1', name: 'Atomic Structure, Bonding and Energetics', sub: 'Atomic models, bonding, intermolecular forces, enthalpy' },
        { id: 'T2', name: 'Kinetics, Equilibrium and Redox', sub: 'Rates, Boltzmann, equilibrium, oxidation states' },
        { id: 'T3', name: 'Inorganic Chemistry', sub: 'Periodicity, Groups 1/2/7, transition metals' },
        { id: 'T4', name: 'Organic Chemistry I', sub: 'Alkanes, alkenes, halogenoalkanes, alcohols, mechanisms' },
        { id: 'T5', name: 'Thermodynamics, Acids & Bases', sub: 'Born-Haber, entropy, free energy, pH, buffers' },
        { id: 'T6', name: 'Advanced Organic & Analysis', sub: 'Aromatics, carbonyls, amines, polymers, NMR, IR' },
      ],
    },
    'Chemistry_OCR A': {
      label: 'Chemistry — OCR A',
      emoji: '🧪',
      page: 'diagnostics/chemistry-ocr-a-diagnostic.html',
      topics: [
        { id: 'M1', name: 'Development of Practical Skills', sub: 'Planning, analysis, evaluation, techniques' },
        { id: 'M2', name: 'Foundations in Chemistry', sub: 'Atoms, moles, bonding, shapes, acid-base, redox' },
        { id: 'M3', name: 'Periodic Table and Energy', sub: 'Periodicity, Groups 2 & 7, enthalpy, rates, equilibrium' },
        { id: 'M4', name: 'Core Organic Chemistry', sub: 'Alkanes, alkenes, alcohols, haloalkanes, synthesis, IR/MS' },
        { id: 'M5', name: 'Physical Chemistry & Transition Elements', sub: 'Rate equations, Kc/Kp, acids/bases, electrodes, transition metals' },
        { id: 'M6', name: 'Organic Chemistry & Analysis', sub: 'Aromatics, carbonyls, amines, polymers, NMR' },
      ],
    },
    'Chemistry_OCR B': {
      label: 'Chemistry — OCR B',
      emoji: '🧪',
      page: 'diagnostics/chemistry-ocr-b-diagnostic.html',
      topics: [
        { id: 'S1', name: 'Foundations of Chemistry', sub: 'Atomic structure, moles, bonding, shapes' },
        { id: 'S2', name: 'Energetics and Kinetics', sub: 'Enthalpy, Hess\'s law, entropy, rates, Arrhenius' },
        { id: 'S3', name: 'Equilibrium and Acid-Base', sub: 'Kc, Kp, pH, Ka, buffers, titrations' },
        { id: 'S4', name: 'Organic Chemistry', sub: 'Alkanes, alkenes, alcohols, halogenoalkanes, mechanisms' },
        { id: 'S5', name: 'Redox & Transition Metals', sub: 'Electrode potentials, cells, complexes, catalysis' },
        { id: 'S6', name: 'Advanced Organic & Analysis', sub: 'Aromatics, carbonyls, amines, polymers, NMR, IR, MS' },
      ],
    },
    'Computer Science_AQA|alevel': {
      label: 'Computer Science — AQA',
      emoji: '💻',
      page: 'diagnostics/cs-aqa-alevel-diagnostic.html',
      topics: [
        { id: '4.1', name: 'Fundamentals of Programming', sub: 'Data types, OOP, recursion, exception handling' },
        { id: '4.2', name: 'Fundamentals of Data Structures', sub: 'Stacks, queues, trees, graphs, hash tables' },
        { id: '4.3', name: 'Fundamentals of Algorithms', sub: 'Big-O, searching, sorting, graph traversal, Dijkstra, A*' },
        { id: '4.4', name: 'Theory of Computation', sub: 'FSMs, regex, Turing machines, halting problem' },
        { id: '4.5', name: 'Fundamentals of Data Representation', sub: 'Number systems, floating point, compression, encryption' },
        { id: '4.6', name: 'Fundamentals of Computer Systems', sub: 'OS, Boolean algebra, logic gates, Karnaugh maps, flip-flops' },
        { id: '4.7', name: 'Computer Organisation & Architecture', sub: 'Von Neumann, FDE cycle, CISC/RISC, pipelining, I/O' },
        { id: '4.8', name: 'Consequences of Uses of Computing', sub: 'Ethics, legislation, environmental, AI, surveillance' },
        { id: '4.9', name: 'Communication & Networking', sub: 'TCP/IP, topologies, encryption, protocols, routing' },
        { id: '4.10', name: 'Fundamentals of Databases', sub: 'SQL, normalisation, ER modelling, ACID, transactions' },
      ],
    },
    'Computer Science_AQA|gcse': {
      label: 'Computer Science — AQA',
      emoji: '💻',
      page: 'diagnostics/cs-aqa-gcse-diagnostic.html',
      topics: [
        { id: '3.1', name: 'Fundamentals of Algorithms', sub: 'Decomposition, abstraction, searching, sorting, trace tables' },
        { id: '3.2', name: 'Programming', sub: 'Data types, selection, iteration, subroutines, arrays, strings' },
        { id: '3.3', name: 'Fundamentals of Data Representation', sub: 'Binary, hex, characters, images, sound, compression' },
        { id: '3.4', name: 'Computer Systems', sub: 'Hardware, software, Boolean logic, CPU, memory, storage' },
        { id: '3.5', name: 'Fundamentals of Computer Networks', sub: 'LAN, WAN, topologies, protocols, TCP/IP, layers' },
        { id: '3.6', name: 'Cyber Security', sub: 'Threats, social engineering, malware, prevention' },
        { id: '3.7', name: 'Relational Databases & SQL', sub: 'Tables, keys, SQL queries, normalisation' },
        { id: '3.8', name: 'Ethical, Legal & Environmental', sub: 'Privacy, laws, environmental impact, AI ethics' },
      ],
    },
    'Computer Science_OCR': {
      label: 'Computer Science — OCR (GCSE)',
      emoji: '💻',
      page: 'diagnostics/cs-ocr-gcse-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Systems Architecture', sub: 'CPU, fetch-execute, performance' },
        { id: '1.2', name: 'Memory and Storage', sub: 'RAM, ROM, secondary storage' },
        { id: '1.3', name: 'Networks, Connections & Protocols', sub: 'LAN, WAN, TCP/IP, HTTP' },
        { id: '1.4', name: 'Network Security', sub: 'Threats, prevention, encryption' },
        { id: '1.5', name: 'Systems Software', sub: 'OS, utilities, translators' },
        { id: '1.6', name: 'Ethical, Legal, Cultural & Environmental', sub: 'Impacts of digital technology' },
        { id: '2.1', name: 'Algorithms', sub: 'Sorting, searching, complexity' },
        { id: '2.2', name: 'Programming Fundamentals', sub: 'Variables, loops, functions' },
        { id: '2.3', name: 'Producing Robust Programs', sub: 'Validation, testing, maintainability' },
        { id: '2.4', name: 'Boolean Logic', sub: 'Logic gates, truth tables' },
        { id: '2.5', name: 'Languages and IDEs', sub: 'High/low level, compilers, IDEs' },
      ],
    },
    'Computer Science_OCR|alevel': {
      label: 'Computer Science — OCR',
      emoji: '💻',
      page: 'diagnostics/cs-ocr-alevel-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Characteristics of Processors, I/O & Storage', sub: 'Pipelining, cache, RISC/CISC, buses' },
        { id: '1.2', name: 'Software and Software Development', sub: 'OS, translators, paradigms, methodologies' },
        { id: '1.3', name: 'Exchanging Data', sub: 'Compression, encryption, databases, networks' },
        { id: '1.4', name: 'Data Types, Structures & Algorithms', sub: 'Primitives, structures, Boolean algebra' },
        { id: '1.5', name: 'Legal, Moral, Cultural & Ethical', sub: 'Legislation, AI, surveillance' },
        { id: '2.1', name: 'Elements of Computational Thinking', sub: 'Abstraction, decomposition, logic' },
        { id: '2.2', name: 'Problem Solving and Programming', sub: 'OOP, recursion, stacks, trees' },
        { id: '2.3', name: 'Algorithms', sub: 'Big-O, Dijkstra, A*, analysis' },
      ],
    },
    'Economics_AQA': {
      label: 'Economics — AQA',
      emoji: '📈',
      page: 'diagnostics/economics-aqa-diagnostic.html',
      topics: [
        { id: '3.1.1', name: 'Economic Problem & Methodology', sub: 'Scarcity, opportunity cost, PPF, economic methodology' },
        { id: '3.1.2', name: 'Individual Economic Decision Making', sub: 'Utility, rationality, behavioural biases, nudges and choice architecture' },
        { id: '3.1.3', name: 'Price Determination', sub: 'Demand, supply, equilibrium, elasticity (PED, YED, XED, PES)' },
        { id: '3.1.4', name: 'Production Costs & Revenue', sub: 'Short/long run costs, economies of scale, revenue curves' },
        { id: '3.1.5', name: 'Competitive & Concentrated Markets', sub: 'Perfect competition, monopoly, oligopoly, monopolistic competition' },
        { id: '3.1.6', name: 'The Labour Market', sub: 'MRP, labour supply, wage determination, monopsony, trade unions' },
        { id: '3.1.7', name: 'Income Distribution, Poverty & Inequality', sub: 'Lorenz curve, Gini, absolute/relative poverty, redistribution' },
        { id: '3.1.8', name: 'Market Failure & Government Intervention', sub: 'Externalities, public goods, merit goods, government failure' },
        { id: '3.2.1', name: 'Measurement of Macroeconomic Performance', sub: 'GDP, inflation (CPI/RPI), unemployment, balance of payments' },
        { id: '3.2.2', name: 'How the Macroeconomy Works', sub: 'AD/AS model, circular flow, multiplier, consumption & investment' },
        { id: '3.2.3', name: 'Economic Performance', sub: 'Economic growth, trade cycles, Phillips curve, conflicts' },
        { id: '3.2.4', name: 'Financial Markets & Monetary Policy', sub: 'Money supply, interest rates, central banks, quantitative easing' },
        { id: '3.2.5', name: 'Fiscal & Supply-Side Policies', sub: 'Taxation, government spending, supply-side reforms, laffer curve' },
        { id: '3.2.6', name: 'The International Economy', sub: 'Globalisation, trade, exchange rates, trading blocs, development' },
      ],
    },
    'Economics_Edexcel A': {
      label: 'Economics — Edexcel A',
      emoji: '📈',
      page: 'diagnostics/economics-edexcel-a-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Nature of Economics & Markets', sub: 'Scarcity, opportunity cost, demand/supply, price mechanism, elasticity' },
        { id: '1.2', name: 'Market Failure & Government Intervention', sub: 'Externalities, public/merit goods, government failure, cost-benefit' },
        { id: '2.1', name: 'Economic Performance & AD', sub: 'GDP, inflation, unemployment, balance of payments, aggregate demand' },
        { id: '2.2', name: 'AS, National Income & Macro Policy', sub: 'AS curves, multiplier, fiscal/monetary/supply-side policies' },
        { id: '3.1', name: 'Business Growth & Objectives', sub: 'Revenue, costs, economies of scale, profit maximisation, objectives' },
        { id: '3.2', name: 'Market Structures & Labour', sub: 'Perfect competition, monopoly, oligopoly, labour market, wage determination' },
        { id: '4.1', name: 'International Economics & Trade', sub: 'Comparative advantage, trade blocs, exchange rates, globalisation' },
        { id: '4.2', name: 'Poverty, Inequality & Development', sub: 'Measures of development, inequality, strategies for development' },
      ],
    },
    'Economics_Edexcel B': {
      label: 'Economics — Edexcel B',
      emoji: '📈',
      page: 'diagnostics/economics-edexcel-b-diagnostic.html',
      topics: [
        { id: '1.1', name: 'How Markets Work & Surplus', sub: 'Demand, supply, equilibrium, consumer/producer surplus, elasticity' },
        { id: '1.2', name: 'Market Failure & Government Intervention', sub: 'Externalities, public goods, information gaps, government intervention' },
        { id: '2.1', name: 'National Economic Performance', sub: 'GDP, inflation, unemployment, balance of payments, HDI' },
        { id: '2.2', name: 'Macroeconomic Policy', sub: 'AD/AS model, fiscal/monetary/supply-side policies, multiplier' },
        { id: '3.1', name: 'Business Economics', sub: 'Revenue, costs, profit, economies of scale, business objectives' },
        { id: '3.2', name: 'Market Structures & Competition', sub: 'Perfect competition, monopoly, oligopoly, contestability, efficiency' },
        { id: '4.1', name: 'International Economics & Globalisation', sub: 'Comparative advantage, trade, exchange rates, WTO, trading blocs' },
        { id: '4.2', name: 'Development & Inequality', sub: 'Measures of development, causes of inequality, strategies, sustainability' },
      ],
    },
    'Economics_OCR': {
      label: 'Economics — OCR',
      emoji: '📈',
      page: 'diagnostics/economics-ocr-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Economic Problem & Market Systems', sub: 'Scarcity, opportunity cost, demand/supply, price mechanism, elasticity' },
        { id: '1.2', name: 'Market Failure & Government Intervention', sub: 'Externalities, public goods, information failure, government failure' },
        { id: '1.3', name: 'Firm Objectives, Costs & Revenue', sub: 'Profit maximisation, revenue, short/long run costs, economies of scale' },
        { id: '1.4', name: 'Market Structures', sub: 'Perfect competition, monopoly, oligopoly, contestable markets, efficiency' },
        { id: '2.1', name: 'National & International Economy', sub: 'GDP, inflation, unemployment, balance of payments, economic cycle' },
        { id: '2.2', name: 'AD/AS & Equilibrium', sub: 'Aggregate demand, aggregate supply, national income, multiplier' },
        { id: '2.3', name: 'Economic Policy', sub: 'Fiscal, monetary, supply-side policies, policy conflicts & trade-offs' },
        { id: '2.4', name: 'International Economics & Development', sub: 'Trade, exchange rates, globalisation, development, inequality' },
      ],
    },
    'English Language_AQA': {
      label: 'English Language — AQA',
      emoji: '📝',
      page: 'diagnostics/english-aqa-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Methods of Language Analysis', sub: 'Phonology, graphology, lexis, grammar, pragmatics, discourse' },
        { id: '1.2', name: 'Textual Variations and Representations', sub: 'Mode, audience, purpose, genre, representation' },
        { id: '1.3', name: "Children's Spoken Language Development", sub: 'Stages of acquisition, theorists (Chomsky, Skinner, Piaget, Bruner, Vygotsky, Halliday)' },
        { id: '1.4', name: "Children's Written Language Development", sub: 'Stages of writing development, emergent writing, Kroll, Rothery genres' },
        { id: '2.1', name: 'Language Diversity (Regional & Social)', sub: 'Dialect, sociolect, Labov, Trudgill, Milroy, social class and occupation' },
        { id: '2.2', name: 'Language and Gender', sub: 'Lakoff, Zimmerman & West, Tannen, Holmes, Cameron — dominance/difference/diversity' },
        { id: '2.3', name: 'Language and Ethnicity / World Englishes', sub: 'MLE, AAVE, Kachru\'s Circles, global Englishes' },
        { id: '2.4', name: 'Language Change', sub: 'Theories of change, Aitchison, Crystal, historical processes, lexical change' },
        { id: '2.5', name: 'Language Discourses', sub: 'Prescriptivism vs descriptivism, public attitudes, evaluating views on language' },
        { id: '3.1', name: 'Language Investigation (NEA)', sub: 'Methodology, data collection, analysis frameworks, referencing' },
        { id: '3.2', name: 'Original Writing & Commentary (NEA)', sub: 'Power of persuasion / storytelling / information; reflective commentary' },
      ],
    },
    'English Language_Edexcel': {
      label: 'English Language — Edexcel',
      emoji: '📝',
      page: 'diagnostics/english-edexcel-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Individual and Social Variation', sub: 'Idiolect, sociolect, dialect, accent; Labov, Trudgill, Milroy, accommodation' },
        { id: '1.2', name: 'Historical Language Change', sub: 'English from 1500 to present; semantic shift; neologisms; Aitchison, Crystal' },
        { id: '1.3', name: 'Global and Regional Variation', sub: 'UK dialects, World Englishes, MLE, Kachru\'s Circles' },
        { id: '2.1', name: "Children's Spoken Language Development", sub: 'Stages of acquisition; Chomsky, Skinner, Bruner, Vygotsky, Halliday' },
        { id: '2.2', name: "Children's Written Language Development", sub: 'Kroll, Britton, Rothery, Gentry; emergent writing; scaffolding' },
        { id: '3.1', name: 'Global English (Paper 3 pathway)', sub: 'Pluricentric English, ELF (Jenkins), Kachru, translanguaging' },
        { id: '3.2', name: 'Language and Gender Identity (Paper 3 pathway)', sub: 'Lakoff, Zimmerman & West, Tannen, Cameron, Butler' },
        { id: '3.3', name: 'Language of Journalism (Paper 3 pathway)', sub: 'News values, headlines, representation, broadsheet vs tabloid register' },
        { id: '3.4', name: 'Language and Power (Paper 3 pathway)', sub: 'Fairclough, instrumental vs influential power, synthetic personalisation' },
        { id: '3.5', name: 'Language and Regional Variation (Paper 3 pathway)', sub: 'UK dialects, Labov, Trudgill, Milroy, dialect levelling' },
        { id: '4.1', name: 'Crafting Language (NEA)', sub: 'Two original writing pieces + reflective commentary' },
      ],
    },
    'Further Mathematics_AQA': {
      label: 'Further Mathematics — AQA',
      emoji: '∑',
      page: 'diagnostics/further-maths-aqa-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Complex Numbers', sub: 'Modulus-argument form, de Moivre\'s theorem, roots of unity, loci' },
        { id: '1.2', name: 'Matrices', sub: 'Operations, determinants, inverses, transformations, eigenvalues' },
        { id: '1.3', name: 'Further Algebra & Functions', sub: 'Symmetric functions, partial fractions, rational inequalities' },
        { id: '1.4', name: 'Series', sub: 'Standard sums, differences, induction, Maclaurin/Taylor series' },
        { id: '1.5', name: 'Further Calculus', sub: 'Arc length, surface area, reduction formulae, improper integrals' },
        { id: '1.6', name: 'Further Vectors', sub: 'Cross product, scalar triple product, lines and planes in 3D' },
        { id: '1.7', name: 'Polar Coordinates', sub: 'Curves, area, tangents in polar coordinates' },
        { id: '1.8', name: 'Hyperbolic Functions', sub: 'Definitions, identities, inverse hyp functions, integration' },
        { id: '1.9', name: 'Differential Equations', sub: '1st and 2nd order ODEs, coupled equations, modelling' },
      ],
    },
    'Further Mathematics_Edexcel': {
      label: 'Further Mathematics — Edexcel',
      emoji: '∑',
      page: 'diagnostics/further-maths-edexcel-diagnostic.html',
      topics: [
        { id: 'CP1.1', name: 'Complex Numbers', sub: 'Cartesian form, operations, complex conjugate' },
        { id: 'CP1.2', name: 'Argand Diagrams', sub: 'Modulus-argument form, loci in the complex plane' },
        { id: 'CP1.3', name: 'Series', sub: 'Standard sums, method of differences' },
        { id: 'CP1.4', name: 'Roots of Polynomials', sub: 'Vieta formulae, symmetric functions, substitution' },
        { id: 'CP1.5', name: 'Volumes of Revolution', sub: 'Integration, solids of revolution about axes' },
        { id: 'CP1.6', name: 'Matrices', sub: 'Operations, determinants, inverses, 2x2 and 3x3' },
        { id: 'CP1.7', name: 'Linear Transformations', sub: 'Matrix transformations, composition, invariance' },
        { id: 'CP1.8', name: 'Proof by Induction', sub: 'Series, divisibility, matrices, inequalities' },
        { id: 'CP1.9', name: 'Vectors', sub: 'Lines and planes in 3D, scalar product' },
        { id: 'CP2.1', name: 'Complex Numbers (Further)', sub: "de Moivre's theorem, nth roots of unity" },
        { id: 'CP2.2', name: 'Maclaurin & Taylor Series', sub: 'Series expansions, approximations' },
        { id: 'CP2.3', name: 'Methods in Calculus', sub: 'Improper integrals, mean value, partial fractions' },
        { id: 'CP2.4', name: 'Volumes of Revolution (Further)', sub: 'Parametric volumes, advanced techniques' },
        { id: 'CP2.5', name: 'Polar Coordinates', sub: 'Curves, tangents, area integrals' },
        { id: 'CP2.6', name: 'Hyperbolic Functions', sub: 'Definitions, identities, inverse hyperbolics' },
        { id: 'CP2.7', name: 'Methods in Differential Equations', sub: 'Integrating factor, 2nd-order linear, auxiliary equations' },
        { id: 'CP2.8', name: 'Modelling with DEs', sub: 'Simple harmonic motion, damped oscillations' },
      ],
    },
    'Further Mathematics_OCR A': {
      label: 'Further Mathematics — OCR A',
      emoji: '∑',
      page: 'diagnostics/further-maths-ocr-diagnostic.html',
      topics: [
        { id: '1.1',  name: 'Complex Numbers',             sub: 'Cartesian & mod-arg form, de Moivre, loci, roots of unity' },
        { id: '1.2',  name: 'Matrices',                    sub: 'Operations, determinants, inverses, eigenvalues & eigenvectors' },
        { id: '1.3',  name: 'Further Algebra & Functions', sub: 'Roots of polynomials, partial fractions, rational inequalities' },
        { id: '1.4',  name: 'Further Calculus',            sub: 'Reduction formulae, arc length, surface area, improper integrals' },
        { id: '1.5',  name: 'Further Vectors',             sub: 'Cross product, triple product, lines and planes in 3D' },
        { id: '1.6',  name: 'Polar Coordinates',           sub: 'Polar curves, tangents, area bounded by polar curves' },
        { id: '1.7',  name: 'Hyperbolic Functions',        sub: 'Definitions, identities, inverse hyperbolics, integration' },
        { id: '1.8',  name: 'Differential Equations',      sub: 'Integrating factor, 2nd-order linear, coupled systems' },
        { id: '1.9',  name: 'Numerical Methods',           sub: 'Bisection, Newton-Raphson, Simpson\'s rule, Euler for ODEs' },
        { id: '1.10', name: 'Proof by Induction',          sub: 'Series, divisibility, matrices, inequalities' },
        { id: 'S1.1', name: 'Discrete Random Variables',   sub: 'E(X), Var(X), linear combinations, joint distributions' },
        { id: 'S1.2', name: 'Continuous Random Variables', sub: 'PDFs, CDFs, median, mean, variance, piecewise PDFs' },
        { id: 'S1.3', name: 'Statistical Inference',       sub: 'CLT, Z-tests, CIs, Type I/II errors, power' },
        { id: 'S1.4', name: 'Chi-Squared Tests',           sub: 'Goodness-of-fit, contingency tables, Yates\' correction' },
        { id: 'S1.5', name: 'Probability Generating Functions', sub: 'pgfs for standard distributions, sums, moments' },
        { id: 'M1.1', name: 'Dimensional Analysis',        sub: 'Base units, derived units, checking formulae' },
        { id: 'M1.2', name: 'Work, Energy & Power',        sub: 'Work-energy theorem, GPE, EPE, conservation, P = Fv' },
        { id: 'M1.3', name: 'Impulse & Momentum',          sub: 'Conservation, collisions, coefficient of restitution' },
        { id: 'M1.4', name: 'Circular Motion',             sub: 'Angular speed, centripetal acceleration, vertical circles' },
        { id: 'M1.5', name: 'Simple Harmonic Motion',      sub: 'ẍ=−ω²x, amplitude, period, pendulum, springs' },
        { id: 'D1.1', name: 'Graph Theory',                sub: 'Simple/connected graphs, Eulerian/Hamiltonian, trees' },
        { id: 'D1.2', name: 'Networks',                    sub: 'Prim, Kruskal, Dijkstra, route inspection, TSP' },
        { id: 'D1.3', name: 'Linear Programming',          sub: 'Formulation, graphical, Simplex method' },
        { id: 'D1.4', name: 'Game Theory',                 sub: 'Pay-off matrices, dominance, mixed strategies, LP' },
        { id: 'D1.5', name: 'Recurrence Relations',        sub: '1st & 2nd order linear, homogeneous & particular solutions' },
      ],
    },
    'Further Mathematics_OCR B': {
      label: 'Further Mathematics — OCR B (MEI)',
      emoji: '∑',
      page: 'diagnostics/further-maths-ocr-b-diagnostic.html',
      topics: [
        { id: '1.1',  name: 'Proof',                         sub: 'Direct, contradiction, induction (series, divisibility, matrices)' },
        { id: '1.2',  name: 'Complex Numbers',               sub: 'Cartesian & mod-arg form, de Moivre, loci, nth roots of unity' },
        { id: '1.3',  name: 'Matrices',                      sub: 'Operations, determinants, inverses, eigenvalues, diagonalisation' },
        { id: '1.4',  name: 'Vectors',                       sub: 'Cross product, scalar triple, lines & planes in 3D, distances' },
        { id: '1.5',  name: 'Series',                        sub: 'Standard sums, method of differences, Maclaurin series' },
        { id: '1.6',  name: 'Roots of Polynomials',          sub: 'Vieta formulae, symmetric functions, substitution' },
        { id: '1.7',  name: 'Polar Coordinates',             sub: 'Polar curves, tangents, area integrals, intersection' },
        { id: '1.8',  name: 'Hyperbolic Functions',          sub: 'Definitions, identities, inverse hyp, integration techniques' },
        { id: '1.9',  name: 'Further Calculus',              sub: 'Reduction formulae, arc length, surface area, improper integrals' },
        { id: '1.10', name: 'Differential Equations',        sub: 'Integrating factor, 2nd-order linear, coupled systems, modelling' },
        { id: 'M1.1', name: 'Dimensional Analysis',          sub: 'Base units, derived units, checking formulae, scaling' },
        { id: 'M1.2', name: 'Work, Energy & Power',          sub: 'Work-energy theorem, GPE, EPE, conservation, P = Fv' },
        { id: 'M1.3', name: 'Impulse & Momentum',            sub: 'Conservation, collisions, coefficient of restitution' },
        { id: 'M1.4', name: 'Circular Motion',               sub: 'Angular speed, centripetal acceleration, vertical circles' },
        { id: 'M1.5', name: 'Centres of Mass',               sub: 'Laminae, composites, volumes, equilibrium, toppling' },
        { id: 'S1.1', name: 'Discrete Random Variables',     sub: 'E(X), Var(X), linear combinations, joint distributions' },
        { id: 'S1.2', name: 'Poisson Distribution',          sub: 'Poisson approximation, hypothesis tests on λ' },
        { id: 'S1.3', name: 'Bivariate Data & Correlation',  sub: 'PMCC, Spearman rank, hypothesis tests, regression' },
        { id: 'S1.4', name: 'Chi-squared Tests',             sub: 'Goodness-of-fit, contingency tables, Yates\' correction' },
        { id: 'S1.5', name: 'Non-parametric Tests',          sub: 'Sign test, Wilcoxon signed-rank, Wilcoxon rank-sum' },
        { id: 'A1.1', name: 'Graphs & Networks',             sub: 'Degree, Eulerian/Hamiltonian, trees, planarity' },
        { id: 'A1.2', name: 'Network Algorithms',            sub: 'Prim, Kruskal, Dijkstra, route inspection, TSP bounds' },
        { id: 'A1.3', name: 'Linear Programming',            sub: 'Formulation, graphical, Simplex method' },
        { id: 'A1.4', name: 'Critical Path Analysis',        sub: 'Activity networks, forward/backward pass, float, Gantt charts' },
        { id: 'A1.5', name: 'Simulation',                    sub: 'Random number generation, event simulation, queues' },
      ],
    },
    'Geography_AQA': {
      label: 'Geography — AQA',
      emoji: '🌍',
      page: 'diagnostics/geography-aqa-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Water & Carbon Cycles', sub: 'Global water cycle, carbon stores, drainage basins' },
        { id: '1.2', name: 'Coastal Systems & Landscapes', sub: 'Waves, erosion, transport, landforms, management' },
        { id: '1.3', name: 'Hazards', sub: 'Plate tectonics, volcanoes, earthquakes, tropical storms' },
        { id: '2.1', name: 'Changing Places', sub: 'Place meaning, identity, representation' },
        { id: '2.2', name: 'Contemporary Urban Environments', sub: 'Urbanisation, urban forms, sustainability' },
        { id: '2.3', name: 'Population & the Environment', sub: 'DTM, migration, resource management' },
        { id: '2.4', name: 'Resource Security', sub: 'Energy, water, food security' },
        { id: '2.5', name: 'Global Systems & Global Governance', sub: 'Globalisation, trade, TNCs, global commons, Antarctica' },
        { id: '3.1', name: 'Fieldwork & Investigation', sub: 'Methodology, sampling, data presentation' },
      ],
    },
    'Geography_Edexcel': {
      label: 'Geography — Edexcel',
      emoji: '🌍',
      page: 'diagnostics/geography-edexcel-diagnostic.html',
      topics: [
        { id: 'T1', name: 'Tectonic Processes & Hazards', sub: 'Plate tectonics, volcanoes, earthquakes, management' },
        { id: 'T2', name: 'Landscape Systems, Processes & Change', sub: 'Coastal landscapes, waves, erosion, landforms' },
        { id: 'T3', name: 'The Water Cycle & Water Insecurity', sub: 'Global water cycle, water balance, management' },
        { id: 'T4', name: 'The Carbon Cycle & Energy Security', sub: 'Carbon stores, energy mix, fossil fuels' },
        { id: 'T5', name: 'Globalisation', sub: 'TNCs, global shift, development, cultural impacts' },
        { id: 'T6', name: 'Diverse Places', sub: 'Demographics, identity, regeneration' },
        { id: 'T7', name: 'Superpowers', sub: 'Characteristics, shifts in power, geopolitics' },
        { id: 'T8', name: 'Health, Human Rights & Intervention', sub: 'Global health, development, intervention' },
      ],
    },
    'Geography_Eduqas|alevel': {
      label: 'Geography — Eduqas',
      emoji: '🌍',
      page: 'diagnostics/geography-eduqas-alevel-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Coastal Landscapes', sub: 'Coastal systems, processes, landforms, SMPs, case studies' },
        { id: '1.2', name: 'Glaciated Landscapes', sub: 'Glacial systems, processes, landforms, periglacial' },
        { id: '1.3', name: 'Changing Places', sub: 'Place concept, representation, identity, connections' },
        { id: '2.1', name: 'Water Cycle & Water Insecurity', sub: 'Hydrological cycle, drainage basins, water budgets' },
        { id: '2.2', name: 'Carbon Cycle & Energy Security', sub: 'Carbon stores, fluxes, fossil fuels, renewables' },
        { id: '2.3', name: 'Global Migration', sub: 'Drivers, flows, impacts, policies, case studies' },
        { id: '2.4', name: 'Global Governance of Oceans', sub: 'UNCLOS, sovereignty, fishing, pollution' },
        { id: '2.5', name: '21st Century Challenges', sub: 'Synoptic: development, inequality, interdependence' },
        { id: '3.1', name: 'Tectonic Hazards', sub: 'Plate tectonics, volcanoes, earthquakes, risk management' },
        { id: '3.2', name: 'Ecosystems', sub: 'Biomes, biodiversity, succession, human impact' },
      ],
    },
    'Geography_Eduqas|gcse': {
      label: 'Geography — Eduqas',
      emoji: '🌍',
      page: 'diagnostics/geography-eduqas-gcse-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Coastal Landscapes', sub: 'Waves, erosion, transport, landforms, management' },
        { id: '1.2', name: 'River Landscapes', sub: 'Drainage basins, processes, landforms, flooding' },
        { id: '1.3', name: 'Glaciated Landscapes', sub: 'Glacial processes, landforms, periglaciation' },
        { id: '1.4', name: 'Weather and Climate', sub: 'UK climate, weather systems, climate change' },
        { id: '1.5', name: 'Tropical Rainforests', sub: 'Climate, structure, biodiversity, deforestation' },
        { id: '1.6', name: 'Hot Deserts', sub: 'Climate, adaptations, desertification, management' },
        { id: '2.1', name: 'Urbanisation and Urban Change', sub: 'Global urbanisation, cities in LICs/NEEs' },
        { id: '2.2', name: 'UK Cities', sub: 'Urban issues, regeneration, sustainable cities' },
        { id: '2.3', name: 'Global Development', sub: 'Development indicators, inequality, strategies' },
        { id: '3.1', name: 'Tectonic Hazards', sub: 'Plate tectonics, volcanoes, earthquakes, management' },
        { id: '3.2', name: 'Climate Change', sub: 'Causes, impacts, mitigation, adaptation' },
        { id: '3.3', name: 'Water Management', sub: 'Water demand, supply, management strategies' },
      ],
    },
    'Geography_OCR': {
      label: 'Geography — OCR',
      emoji: '🌍',
      page: 'diagnostics/geography-ocr-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Landscape Systems', sub: 'Coastal landscapes, waves, erosion, management' },
        { id: '1.2', name: "Earth's Life Support Systems", sub: 'Water cycle, carbon cycle, climate change' },
        { id: '1.3', name: 'Hazardous Earth', sub: 'Plate tectonics, volcanoes, tropical storms' },
        { id: '2.1', name: 'Changing Spaces, Making Places', sub: 'Place profiles, identity, regeneration' },
        { id: '2.2', name: 'Trade in the Contemporary World', sub: 'Global trade, WTO, trade blocs' },
        { id: '2.3', name: 'Global Migration', sub: 'Migration theories, push/pull, impacts' },
        { id: '2.4', name: 'Human Rights', sub: 'Development, health, gender, education' },
        { id: '2.5', name: 'Power & Borders', sub: 'Sovereignty, superpowers, global governance' },
      ],
    },
    'Mathematics_AQA': {
      label: 'Mathematics — AQA',
      emoji: '🔢',
      page: 'diagnostics/maths-aqa-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Proof', sub: 'Deduction, exhaustion, contradiction, counter-example' },
        { id: '1.2', name: 'Algebra & Functions', sub: 'Indices, surds, quadratics, polynomials, partial fractions' },
        { id: '1.3', name: 'Coordinate Geometry', sub: 'Lines, circles, parametric equations' },
        { id: '1.4', name: 'Sequences & Series', sub: 'AP, GP, sigma notation, binomial expansion' },
        { id: '1.5', name: 'Trigonometry', sub: 'Identities, equations, sec/cosec/cot, Rsin(x+a)' },
        { id: '1.6', name: 'Exponentials & Logarithms', sub: 'e^x, ln, log laws, modelling' },
        { id: '1.7', name: 'Differentiation', sub: 'Chain/product/quotient, implicit, parametric' },
        { id: '1.8', name: 'Integration', sub: 'Substitution, by parts, areas, diff equations' },
        { id: '1.9', name: 'Numerical Methods', sub: 'Iteration, Newton-Raphson, trapezium rule' },
        { id: '1.10', name: 'Vectors', sub: '2D/3D vectors, scalar product, geometric problems' },
        { id: '2.1', name: 'Statistical Sampling & Data Presentation', sub: 'Sampling methods, histograms, box plots, averages, spread' },
        { id: '2.2', name: 'Probability', sub: 'Venn diagrams, tree diagrams, conditional probability' },
      ],
    },
    'Mathematics_Edexcel': {
      label: 'Mathematics — Edexcel',
      emoji: '🔢',
      page: 'diagnostics/maths-edexcel-diagnostic.html',
      topics: [
        { id: 'P1',  name: 'Algebraic Expressions',          sub: 'Indices, surds, expanding, factorising' },
        { id: 'P2',  name: 'Quadratics',                     sub: 'Completing the square, discriminant, solving' },
        { id: 'P3',  name: 'Equations and Inequalities',     sub: 'Simultaneous, quadratic inequalities, modulus' },
        { id: 'P4',  name: 'Graphs and Transformations',     sub: 'Translations, stretches, reflections, combined' },
        { id: 'P5',  name: 'Straight Lines and Circles',     sub: 'Distance, midpoint, tangent, circle equation' },
        { id: 'P6',  name: 'Trigonometric Ratios',           sub: 'Sine/cosine rules, exact values, area formula' },
        { id: 'P7',  name: 'Trigonometric Identities',       sub: 'sin²+cos²=1, tanθ, solving equations in range' },
        { id: 'P8',  name: 'Exponentials and Logarithms',    sub: 'Log laws, ln, e^x, modelling, solving' },
        { id: 'P9',  name: 'Differentiation (Year 1)',       sub: 'First principles, polynomials, tangents, stationary points' },
        { id: 'P10', name: 'Integration (Year 1)',           sub: 'Indefinite, definite, area under curve, trapezium rule' },
        { id: 'P11', name: 'Vectors (Year 1)',               sub: '2D vectors, magnitude, unit vectors, position vectors' },
        { id: 'P12', name: 'Algebraic Methods',              sub: 'Division, factor theorem, partial fractions, proof' },
        { id: 'P13', name: 'Functions and Graphs',           sub: 'Composite, inverse, modulus, transformations' },
        { id: 'P14', name: 'Sequences and Series',           sub: 'Binomial expansion, arithmetic, geometric, sigma' },
        { id: 'P15', name: 'Radians',                        sub: 'Arc length, sector area, segment, small angle approx' },
        { id: 'P16', name: 'Trigonometric Functions',        sub: 'Sec/cosec/cot, addition formulae, double angle, R-form' },
        { id: 'P17', name: 'Parametric Equations',           sub: 'Converting, differentiating, integrating parametric curves' },
        { id: 'P18', name: 'Differentiation (Year 2)',       sub: 'Chain/product/quotient, implicit, parametric, connected rates' },
        { id: 'P19', name: 'Numerical Methods',              sub: 'Newton-Raphson, fixed-point iteration, sign change' },
        { id: 'P20', name: 'Integration (Year 2)',           sub: 'By substitution, by parts, partial fractions, ODEs' },
        { id: 'P21', name: 'Vectors (3D)',                   sub: 'Equation of line, dot product, angle between lines, skew' },
        { id: 'S1',  name: 'Statistical Sampling',           sub: 'Population, sample, sampling methods, bias' },
        { id: 'S2',  name: 'Data Presentation & Measures',   sub: 'Mean, SD, variance, coding, box plots, histograms' },
        { id: 'S3',  name: 'Probability',                    sub: 'Venn diagrams, tree diagrams, independence, E(X), Var(X)' },
        { id: 'S4',  name: 'Binomial Distribution',          sub: 'B(n,p), mean, variance, calculator use' },
        { id: 'S5',  name: 'Hypothesis Testing — Binomial',  sub: 'H₀, H₁, critical region, p-value, conclusion in context' },
        { id: 'S6',  name: 'Regression and Correlation',     sub: 'PMCC, regression line, hypothesis test for ρ' },
        { id: 'S7',  name: 'Conditional Probability',        sub: 'Conditional probability, total probability, Bayes' },
        { id: 'S8',  name: 'Normal Distribution',            sub: 'N(μ,σ²), standardising, inverse normal, approx to binomial' },
        { id: 'M1',  name: 'Modelling in Mechanics',         sub: 'Particles, rods, smooth surfaces, assumptions, Newton\'s laws' },
        { id: 'M2',  name: 'Kinematics (SUVAT)',             sub: 'SUVAT equations, displacement-time, velocity-time graphs' },
        { id: 'M3',  name: 'Forces and Newton\'s Laws',      sub: 'F=ma, connected particles, Atwood machine, equilibrium' },
        { id: 'M4',  name: 'Moments',                        sub: 'Turning effect, equilibrium, non-uniform beams, ladders' },
        { id: 'M5',  name: 'Variable Acceleration',          sub: 'Calculus: v=ds/dt, a=dv/dt, integration for displacement' },
        { id: 'M6',  name: 'Projectiles',                    sub: 'Horizontal/vertical components, range, max height, trajectory' },
        { id: 'M7',  name: 'Further Forces',                 sub: 'Friction F≤μR, resolving on inclines, limiting equilibrium' },
      ],
    },
    'Mathematics_OCR B|alevel': {
      label: 'Mathematics — OCR B (MEI)',
      emoji: '🔢',
      page: 'diagnostics/maths-ocr-b-alevel-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Proof', sub: 'Deduction, exhaustion, counter-example, contradiction' },
        { id: '1.2', name: 'Algebra', sub: 'Surds, indices, quadratics, inequalities, partial fractions' },
        { id: '1.3', name: 'Functions', sub: 'Notation, domain and range, composite, inverse, modulus' },
        { id: '1.4', name: 'Graphs', sub: 'Sketching, transformations, asymptotes, curve features' },
        { id: '1.5', name: 'Coordinate Geometry', sub: 'Straight lines, circles, parametric equations' },
        { id: '1.6', name: 'Sequences & Series', sub: 'AP, GP, sigma notation, binomial expansion' },
        { id: '1.7', name: 'Trigonometry', sub: 'Identities, equations, radians, compound angles' },
        { id: '1.8', name: 'Exponentials & Logarithms', sub: 'e^x, ln, log laws, exponential models' },
        { id: '1.9', name: 'Differentiation', sub: 'First principles, product/quotient/chain, implicit, parametric' },
        { id: '1.10', name: 'Integration', sub: 'Substitution, by parts, partial fractions, areas' },
        { id: '1.11', name: 'Differential Equations', sub: 'Forming, separating variables, modelling' },
        { id: '1.12', name: 'Numerical Methods', sub: 'Change of sign, iteration, Newton-Raphson, trapezium rule' },
        { id: '1.13', name: 'Vectors', sub: '2D and 3D vectors, magnitude-direction, position vectors' },
        { id: '2.1', name: 'Sampling', sub: 'Populations, sampling methods, the large data set' },
        { id: '2.2', name: 'Data Presentation & Interpretation', sub: 'Diagrams, measures of centre and spread, outliers' },
        { id: '2.3', name: 'Probability', sub: 'Mutually exclusive, independent, conditional, tree diagrams' },
        { id: '2.4', name: 'Probability Distributions', sub: 'Binomial, discrete random variables, Normal' },
        { id: '2.5', name: 'Statistical Hypothesis Testing', sub: 'Binomial and Normal tests, correlation' },
        { id: '3.1', name: 'Models & Quantities', sub: 'Modelling assumptions, SI units, vectors and scalars' },
        { id: '3.2', name: 'Kinematics in 1 Dimension', sub: 'Motion graphs, constant acceleration (suvat), calculus' },
        { id: '3.3', name: 'Kinematics in 2 Dimensions', sub: 'Vector kinematics, relative position, calculus' },
        { id: '3.4', name: 'Projectiles', sub: 'Motion under gravity, range, modelling assumptions' },
        { id: '3.5', name: 'Forces', sub: 'Resolving, equilibrium, friction, normal reaction' },
        { id: '3.6', name: 'Newton\'s Laws of Motion', sub: 'Three laws, connected particles, pulleys' },
        { id: '3.7', name: 'Rigid Bodies', sub: 'Moments, equilibrium, centre of mass' },
      ],
    },
    'Mathematics_OCR|alevel': {
      label: 'Mathematics — OCR',
      emoji: '🔢',
      page: 'diagnostics/maths-ocr-alevel-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Proof', sub: 'Deduction, exhaustion, contradiction, counter-example' },
        { id: '1.2', name: 'Algebra & Functions', sub: 'Indices, surds, quadratics, polynomials, partial fractions' },
        { id: '1.3', name: 'Coordinate Geometry', sub: 'Lines, circles, parametric equations' },
        { id: '1.4', name: 'Sequences & Series', sub: 'AP, GP, sigma notation, binomial expansion' },
        { id: '1.5', name: 'Trigonometry', sub: 'Identities, equations, sec/csc/cot' },
        { id: '1.6', name: 'Exponentials & Logarithms', sub: 'e^x, ln, log laws, modelling' },
        { id: '1.7', name: 'Differentiation', sub: 'Chain/product/quotient, implicit, parametric' },
        { id: '1.8', name: 'Integration', sub: 'Substitution, by parts, areas, differential equations' },
        { id: '1.9', name: 'Numerical Methods', sub: 'Iteration, Newton-Raphson, trapezium rule' },
        { id: '1.10', name: 'Vectors', sub: '2D/3D vectors, scalar product, geometric problems' },
        { id: '2.1', name: 'Statistics', sub: 'Sampling, distributions, hypothesis testing' },
        { id: '2.2', name: 'Mechanics', sub: 'Kinematics, forces, moments, projectiles' },
      ],
    },
    'Mathematics_OCR|gcse': {
      label: 'Mathematics — OCR',
      emoji: '🔢',
      page: 'diagnostics/maths-ocr-gcse-diagnostic.html',
      topics: [
        { id: '1.1', name: 'Number: Arithmetic & Place Value', sub: 'Place value, four operations, BIDMAS, primes, HCF, LCM' },
        { id: '1.2', name: 'Fractions, Decimals & Percentages', sub: 'FDP conversions, operations, reverse percentages, compound interest' },
        { id: '1.3', name: 'Accuracy, Rounding & Estimation', sub: 'Rounding (dp/sf), estimation, error intervals, bounds' },
        { id: '1.4', name: 'Powers, Roots & Standard Form', sub: 'Index laws, standard form, surds (Higher)' },
        { id: '2.1', name: 'Algebraic Expressions', sub: 'Simplifying, expanding, factorising, algebraic fractions' },
        { id: '2.2', name: 'Equations & Inequalities', sub: 'Linear, simultaneous, quadratic, inequalities, proof' },
        { id: '2.3', name: 'Sequences', sub: 'nth term, arithmetic, quadratic (Higher), geometric sequences' },
        { id: '2.4', name: 'Graphs', sub: 'Straight lines, quadratics, cubics, real-life graphs, transformations' },
        { id: '3.1', name: 'Ratio & Proportion', sub: 'Simplifying ratios, dividing, direct/inverse proportion, similar shapes' },
        { id: '3.2', name: 'Rates of Change & Compound Measures', sub: 'Speed/density/pressure, compound interest, growth & decay' },
        { id: '4.1', name: 'Properties of Shapes & Angles', sub: 'Angle rules, parallel lines, polygons, circle theorems (Higher)' },
        { id: '4.2', name: 'Mensuration: Area, Perimeter & Volume', sub: 'All 2D areas, 3D volumes and surface areas, frustums (Higher)' },
        { id: '4.3', name: 'Transformations', sub: 'Translation, reflection, rotation, enlargement, describing transformations' },
        { id: '4.4', name: "Pythagoras' Theorem & Trigonometry", sub: 'Pythagoras, SOHCAHTOA, sine/cosine rule, area formula (Higher)' },
        { id: '4.5', name: 'Circles & Constructions', sub: 'Arc length, sector area, circle theorems, loci and constructions' },
        { id: '4.6', name: 'Vectors', sub: 'Vector notation, addition, scalar multiplication, vector proofs (Higher)' },
        { id: '5.1', name: 'Probability', sub: 'Sample space, Venn diagrams, tree diagrams, conditional probability' },
        { id: '6.1', name: 'Statistical Diagrams & Measures', sub: 'Averages, range, bar charts, pie charts, scatter diagrams' },
        { id: '6.2', name: 'Cumulative Frequency, Histograms & Box Plots', sub: 'Cumulative frequency curves, box plots, histograms, comparing data' },
      ],
    },
    'Physics_AQA': {
      label: 'Physics — AQA',
      emoji: '⚛️',
      page: 'diagnostics/physics-aqa-diagnostic.html',
      topics: [
        { id: '3.1', name: 'Measurements and Their Errors', sub: 'SI units, uncertainties, errors' },
        { id: '3.2', name: 'Particles and Radiation', sub: 'Quarks, leptons, photoelectric effect, energy levels' },
        { id: '3.3', name: 'Waves', sub: 'Progressive, stationary waves, refraction, diffraction' },
        { id: '3.4', name: 'Mechanics and Materials', sub: 'Forces, energy, momentum, stress, strain' },
        { id: '3.5', name: 'Electricity', sub: 'Current, PD, resistance, EMF, circuits' },
        { id: '3.6', name: 'Further Mechanics and Thermal Physics', sub: 'Circular motion, SHM, gas laws, kinetic theory' },
        { id: '3.7', name: 'Fields and Their Consequences', sub: 'Gravitational, electric, magnetic fields, capacitance' },
        { id: '3.8', name: 'Nuclear Physics', sub: 'Radioactivity, nuclear energy, binding energy' },
      ],
    },
    'Physics_AQA|gcse': {
      label: 'Physics — AQA (GCSE)',
      emoji: '⚛️',
      page: 'diagnostics/physics-aqa-gcse-diagnostic.html',
      topics: [
        { id: '4.1', name: 'Energy', sub: 'Stores, transfers, KE, GPE, specific heat, efficiency, resources' },
        { id: '4.2', name: 'Electricity', sub: 'Current, PD, resistance, series/parallel, mains, power, static' },
        { id: '4.3', name: 'Particle Model of Matter', sub: 'Density, states, internal energy, latent heat, gas pressure' },
        { id: '4.4', name: 'Atomic Structure', sub: 'Models, isotopes, radioactivity, half-life, fission, fusion' },
        { id: '4.5', name: 'Forces', sub: 'Scalars/vectors, moments, pressure, motion, Newton\'s laws, momentum' },
        { id: '4.6', name: 'Waves', sub: 'Transverse/longitudinal, v=f\u03bb, EM spectrum, reflection, refraction, lenses' },
        { id: '4.7', name: 'Magnetism and Electromagnetism', sub: 'Fields, motor effect, generators, transformers' },
        { id: '4.8', name: 'Space Physics', sub: 'Solar system, stars, orbits, red-shift, Big Bang' },
      ],
    },
    'Physics_Edexcel': {
      label: 'Physics — Edexcel',
      emoji: '⚛️',
      page: 'diagnostics/physics-edexcel-diagnostic.html',
      topics: [
        { id: 'T1', name: 'Working as a Physicist', sub: 'SI units, prefixes, uncertainties' },
        { id: 'T2', name: 'Mechanics', sub: 'Vectors, SUVAT, Newton\'s laws, momentum, energy' },
        { id: 'T3', name: 'Electric Circuits', sub: 'Current, PD, resistance, EMF, Kirchhoff\'s laws' },
        { id: 'T4', name: 'Materials', sub: 'Density, Hooke\'s law, stress, strain, Young\'s modulus' },
        { id: 'T5', name: 'Waves & Particle Nature of Light', sub: 'Superposition, diffraction, photoelectric effect' },
        { id: 'T6', name: 'Further Mechanics', sub: 'Impulse, 2D momentum, circular motion' },
        { id: 'T7', name: 'Electric & Magnetic Fields', sub: 'Coulomb\'s law, capacitors, EM induction' },
        { id: 'T8', name: 'Nuclear & Particle Physics', sub: 'Quarks, leptons, Standard Model' },
        { id: 'T9', name: 'Thermodynamics', sub: 'Specific heat, gas laws, kinetic theory' },
        { id: 'T10', name: 'Space', sub: 'Stellar evolution, HR diagram, Hubble\'s law' },
        { id: 'T11', name: 'Nuclear Radiation', sub: 'Half-life, decay, fission, fusion, E=mc²' },
        { id: 'T12', name: 'Gravitational Fields', sub: 'Newton\'s gravitation, orbits, Kepler\'s laws' },
        { id: 'T13', name: 'Oscillations', sub: 'SHM, damping, resonance' },
      ],
    },
    'Physics_Edexcel|gcse': {
      label: 'Physics — Edexcel (GCSE)',
      emoji: '⚛️',
      page: 'diagnostics/physics-edexcel-gcse-diagnostic.html',
      topics: [
        { id: '1',  name: 'Key Concepts of Physics',        sub: 'SI units, prefixes, scalars/vectors, equations' },
        { id: '2',  name: 'Motion and Forces',              sub: 'Speed, velocity, acceleration, Newton\'s laws, stopping' },
        { id: '3',  name: 'Conservation of Energy',         sub: 'Stores, transfers, efficiency, resources' },
        { id: '4',  name: 'Waves',                          sub: 'Transverse, longitudinal, v=f\u03bb, reflection, refraction' },
        { id: '5',  name: 'Light and the EM Spectrum',      sub: 'EM spectrum, reflection, refraction, lenses, colour' },
        { id: '6',  name: 'Radioactivity',                  sub: 'Atomic structure, decay, half-life, uses, hazards' },
        { id: '7',  name: 'Astronomy',                      sub: 'Solar System, orbits, stellar life cycle, Big Bang' },
        { id: '8',  name: 'Energy — Forces Doing Work',     sub: 'Work, power, efficiency in machines' },
        { id: '9',  name: 'Forces and Their Effects',       sub: 'Vectors, moments, levers, gears, centre of mass' },
        { id: '10', name: 'Electricity and Circuits',       sub: 'Current, pd, resistance, series/parallel, mains, power' },
        { id: '11', name: 'Static Electricity',             sub: 'Charging, fields, sparks, uses and hazards' },
        { id: '12', name: 'Magnetism and the Motor Effect', sub: 'Magnetic fields, electromagnets, F = BIL, motors' },
        { id: '13', name: 'Electromagnetic Induction',      sub: 'Induced EMF, generators, transformers, National Grid' },
        { id: '14', name: 'Particle Model',                 sub: 'States of matter, density, specific heat, latent heat, gas pressure' },
        { id: '15', name: 'Forces and Matter',              sub: 'Elasticity, Hooke\'s law, pressure in fluids, upthrust' },
      ],
    },
    'Physics_OCR A': {
      label: 'Physics — OCR A',
      emoji: '⚛️',
      page: 'diagnostics/physics-ocr-a-diagnostic.html',
      topics: [
        { id: 'M1', name: 'Development of Practical Skills', sub: 'Planning, analysis, evaluation' },
        { id: 'M2', name: 'Foundations of Physics', sub: 'Quantities, units, vectors, measurements' },
        { id: 'M3', name: 'Forces and Motion', sub: 'Kinematics, Newton\'s laws, momentum, circular motion' },
        { id: 'M4', name: 'Electrons, Waves and Photons', sub: 'Charge, circuits, waves, quantum physics' },
        { id: 'M5', name: 'Newtonian World and Astrophysics', sub: 'Thermal physics, gravity, astrophysics, cosmology' },
        { id: 'M6', name: 'Particles and Medical Physics', sub: 'Capacitors, EM fields, nuclear, particle, medical' },
      ],
    },
    'Physics_OCR A|gcse': {
      label: 'Physics — OCR A (GCSE J249 Gateway)',
      emoji: '⚛️',
      page: 'diagnostics/physics-ocr-a-gcse-diagnostic.html',
      topics: [
        { id: 'P1', name: 'Matter',                      sub: 'Particle model, density, changes of state, pressure' },
        { id: 'P2', name: 'Forces',                      sub: 'Newton\'s laws, motion, momentum, moments, stopping distance' },
        { id: 'P3', name: 'Electricity and Magnetism',   sub: 'Static, circuits, mains, power, electromagnets, motor effect' },
        { id: 'P4', name: 'Waves and Radioactivity',     sub: 'Transverse/longitudinal, EM spectrum, atomic model, decay, half-life' },
        { id: 'P5', name: 'Energy',                      sub: 'Stores, transfers, efficiency, power, resources, Hooke\'s law' },
        { id: 'P6', name: 'Global Challenges',           sub: 'Induction, generators, transformers, Solar System, stars, red-shift' },
      ],
    },
    'Physics_OCR B': {
      label: 'Physics — OCR B',
      emoji: '⚛️',
      page: 'diagnostics/physics-ocr-b-diagnostic.html',
      topics: [
        { id: 'B1', name: 'Development of Practical Skills', sub: 'Planning, measurements, analysis, uncertainties' },
        { id: 'B2', name: 'Fundamental Data Analysis', sub: 'SI units, quantities, estimation, graphs' },
        { id: 'B3', name: 'Physics in Action', sub: 'Imaging, sensing, materials, signalling' },
        { id: 'B4', name: 'Understanding Processes', sub: 'Waves, quantum behaviour, space & time' },
        { id: 'B5', name: 'Rise and Fall of the Clockwork Universe', sub: 'Mechanics, energy, oscillations, thermal, gravity' },
        { id: 'B6', name: 'Field and Particle Physics', sub: 'EM fields, capacitors, induction, particles, nuclear' },
      ],
    },
    'Physics_OCR B|gcse': {
      label: 'Physics — OCR B (GCSE J259 21st Century)',
      emoji: '⚛️',
      page: 'diagnostics/physics-ocr-b-gcse-diagnostic.html',
      topics: [
        { id: 'P1', name: 'Radiation and Waves',         sub: 'EM spectrum, v=fλ, reflection/refraction, ionising radiation' },
        { id: 'P2', name: 'Sustainable Energy',          sub: 'Energy stores, transfers, efficiency, power, resources' },
        { id: 'P3', name: 'Electric Circuits',           sub: 'Charge, current, p.d., Ohm\'s law, series/parallel, mains' },
        { id: 'P4', name: 'Explaining Motion',           sub: 'Newton\'s laws, momentum, moments, stopping distance, Hooke' },
        { id: 'P5', name: 'Radioactive Materials',       sub: 'Atomic model, α/β/γ, half-life, nuclear equations, fission/fusion' },
        { id: 'P6', name: 'Matter — Models and Explanations', sub: 'Particle model, density, SHC/SLH, pressure, gas laws' },
      ],
    },
    'Politics_Edexcel|alevel': {
      label: 'Politics — Edexcel',
      emoji: '🏛️',
      page: 'diagnostics/politics-edexcel-alevel-diagnostic.html',
      /* Edexcel 9PL0 has TWO layers of optionality, where AQA has one.
         A student sits one of five non-core ideologies (2.5-2.9) AND one
         of two Component 3 routes (3A USA or 3B Global) — never both.
         All 28 are offered; only 18 can ever be examined for any one
         student: 4 + 3 + 4 + 1 + 6. That total is the same on either
         route, so it does not change when a student switches.
         Counting 28 would leave ten topics permanently untested and put
         every progress bar and completion medal out of reach.
         medals-engine.js reads this in preference to topics.length. */
      examinedTotal: 18,
      /* Component 3 is a ROUTE, not a set of optional topics. Unlike the
         non-core ideologies — where all five are taught from and one is
         examined — a student sits 3A or 3B and never touches the other.
         Showing both leaves six topics permanently grey, so the pages
         filter by the student's recorded choice. TOPICS_VISIBLE() does
         the filtering; user_subjects.options holds the choice as
         {"c3":"3A"}. An unrecorded choice shows everything, so nothing
         breaks for a student who has not picked yet. */
      optionGroups: [
        {
          key: 'c3',
          label: 'Component 3',
          prompt: 'Which Component 3 route are you sitting?',
          choices: [
            { value: '3A', label: 'Comparative Politics: USA (9PL0/3A)', prefix: '3A.' },
            { value: '3B', label: 'Global Politics (9PL0/3B)',           prefix: '3B.' },
          ],
        },
      ],
      topics: [
        { id: '1.1', name: 'Democracy and Participation', sub: 'Direct vs representative, franchise and suffrage, pressure groups, rights' },
        { id: '1.2', name: 'Political Parties', sub: 'Functions and funding, established parties, minor parties, parties in context' },
        { id: '1.3', name: 'Electoral Systems', sub: 'FPTP, AMS, STV, SV; referendums since 1997; system analysis' },
        { id: '1.4', name: 'Voting Behaviour and the Media', sub: 'Three general election case studies, class/age/education, media influence' },
        { id: '1.5', name: 'Conservatism', sub: 'Hobbes, Burke, Oakeshott, Rand, Nozick' },
        { id: '1.6', name: 'Liberalism', sub: 'Locke, Wollstonecraft, Mill, Rawls, Friedan' },
        { id: '1.7', name: 'Socialism', sub: 'Marx & Engels, Webb, Luxemburg, Crosland, Giddens' },
        { id: '2.1', name: 'The Constitution', sub: 'Nature and sources, change since 1997, devolution, further reform' },
        { id: '2.2', name: 'Parliament', sub: 'Commons and Lords, comparative powers, legislation, scrutiny' },
        { id: '2.3', name: 'Prime Minister and Executive', sub: 'Structure and powers, ministerial responsibility, PM and Cabinet' },
        { id: '2.4', name: 'Relations Between the Branches', sub: 'Supreme Court, Executive and Parliament, the EU, sovereignty' },
        { id: '2.5', name: 'Anarchism', sub: 'Stirner, Proudhon, Bakunin, Kropotkin, Goldman — optional' },
        { id: '2.6', name: 'Ecologism', sub: 'Leopold, Carson, Schumacher, Bookchin, Merchant — optional' },
        { id: '2.7', name: 'Feminism', sub: 'Gilman, de Beauvoir, Millett, Rowbotham, hooks — optional' },
        { id: '2.8', name: 'Multiculturalism', sub: 'Berlin, Taylor, Parekh, Modood, Kymlicka — optional' },
        { id: '2.9', name: 'Nationalism', sub: 'Rousseau, Herder, Mazzini, Garvey, Maurras — optional' },
        { id: '3A.1', name: 'US Constitution and Federalism', sub: 'Codification, separation of powers, federalism, debates — route 3A' },
        { id: '3A.2', name: 'US Congress', sub: 'Structure, powers, representation, oversight, filibuster — route 3A' },
        { id: '3A.3', name: 'US Presidency', sub: 'Article II powers, informal powers, imperial presidency — route 3A' },
        { id: '3A.4', name: 'US Supreme Court and Civil Rights', sub: 'Judicial review, appointments, civil rights, race and rights — route 3A' },
        { id: '3A.5', name: 'US Democracy and Participation', sub: 'Electoral College, primaries, campaign finance, interest groups — route 3A' },
        { id: '3A.6', name: 'Comparative Approaches', sub: 'Rational, cultural and structural approaches; UK/US comparison — route 3A' },
        { id: '3B.1', name: 'The State and Globalisation', sub: 'Nation-state, sovereignty, globalisation and its impact — route 3B' },
        { id: '3B.2', name: 'Global Governance: Political and Economic', sub: 'UN, NATO, IMF, World Bank, WTO, G7/G20 — route 3B' },
        { id: '3B.3', name: 'Global Governance: Human Rights and Environmental', sub: 'ICJ, ICC, R2P, UNFCCC, IPCC, the global commons — route 3B' },
        { id: '3B.4', name: 'Power and Developments', sub: 'Hard/soft power, polarity, rising powers, democratisation — route 3B' },
        { id: '3B.5', name: 'Regionalism and the EU', sub: 'Forms of regionalism, EU institutions, integration debates — route 3B' },
        { id: '3B.6', name: 'Comparative Theories', sub: 'Realism, liberalism, constructivism; UK/US comparison — route 3B' },
      ],
    },
    'Politics_AQA|alevel': {
      label: 'Politics — AQA',
      emoji: '🏛️',
      page: 'diagnostics/politics-aqa-alevel-diagnostic.html',
      /* Students sit only ONE of the five optional ideologies (3.4-3.8), so all
         32 topics are offered but only 28 can ever be tested by any one student.
         Counting 32 would leave four topics permanently untested and make every
         progress bar and completion medal unreachable. medals-engine.js reads
         this in preference to topics.length. */
      examinedTotal: 28,
      topics: [
        { id: '1.1', name: 'The Constitution', sub: 'Sources, nature, reform since 1997' },
        { id: '1.2', name: 'Parliament', sub: 'Commons, Lords, scrutiny, legislation' },
        { id: '1.3', name: 'Prime Minister and Cabinet', sub: 'Powers, collective responsibility, presidentialisation' },
        { id: '1.4', name: 'The Judiciary', sub: 'Independence, judicial review, Supreme Court' },
        { id: '1.5', name: 'Devolution', sub: 'Scotland, Wales, NI, quasi-federalism' },
        { id: '1.6', name: 'Democracy and Participation', sub: 'Direct vs representative, rights, turnout' },
        { id: '1.7', name: 'Elections and Referendums', sub: 'FPTP, AMS, STV, referendums since 1997' },
        { id: '1.8', name: 'Political Parties', sub: 'Conservative, Labour, Lib Dem, funding' },
        { id: '1.9', name: 'Pressure Groups', sub: 'Typology, methods, pluralism vs elitism' },
        { id: '1.10', name: 'The European Union', sub: 'Institutions, sovereignty, Brexit' },
        { id: '2.1', name: 'The US Constitution and Federalism', sub: 'Codification, separation of powers, federalism' },
        { id: '2.2', name: 'Congress', sub: 'House, Senate, committees, filibuster' },
        { id: '2.3', name: 'The Presidency', sub: 'Formal and informal powers, imperial presidency' },
        { id: '2.4', name: 'The Supreme Court and the Judicial Branch', sub: 'Judicial review, appointments, landmark cases' },
        { id: '2.5', name: 'Elections and Direct Democracy', sub: 'Electoral College, primaries, campaign finance' },
        { id: '2.6', name: 'US Political Parties', sub: 'Polarisation, primaries, third parties' },
        { id: '2.7', name: 'US Pressure Groups', sub: 'PACs, Super PACs, iron triangles, lobbying' },
        { id: '2.8', name: 'Civil Rights', sub: 'Amendments, landmark cases, affirmative action' },
        { id: '2.9', name: 'Comparative — Constitutional Arrangements', sub: 'Codified vs uncodified, sovereignty' },
        { id: '2.10', name: 'Comparative — The Executives', sub: 'PM vs President, tenure, powers' },
        { id: '2.11', name: 'Comparative — The Judiciaries', sub: 'Strike-down power, appointments, entrenchment' },
        { id: '2.12', name: 'Comparative — Electoral and Party Systems', sub: 'Primaries, discipline, campaign finance' },
        { id: '2.13', name: 'Comparative — Pressure Groups', sub: 'Access points, litigation, electioneering' },
        { id: '2.14', name: 'Comparative — Civil Rights', sub: 'Entrenchment, federalism, uniformity' },
        { id: '3.1', name: 'Liberalism', sub: 'Locke, Wollstonecraft, Mill, Green, Rawls, Friedan' },
        { id: '3.2', name: 'Conservatism', sub: 'Hobbes, Burke, Oakeshott, Rand, Nozick' },
        { id: '3.3', name: 'Socialism', sub: 'Marx & Engels, Luxemburg, Webb, Crosland, Giddens' },
        { id: '3.4', name: 'Nationalism', sub: 'Rousseau, Herder, Mazzini, Garvey, Maurras — optional' },
        { id: '3.5', name: 'Feminism', sub: 'Gilman, de Beauvoir, Millett, Rowbotham, hooks — optional' },
        { id: '3.6', name: 'Multiculturalism', sub: 'Berlin, Kymlicka, Taylor, Modood, Parekh — optional' },
        { id: '3.7', name: 'Anarchism', sub: 'Stirner, Proudhon, Bakunin, Kropotkin, Goldman — optional' },
        { id: '3.8', name: 'Ecologism', sub: 'Leopold, Carson, Schumacher, Merchant, Bookchin — optional' },
      ],
    },
  };

  /* The number of topics a student can actually SIT, which is not always the
     number the spec offers. Politics AQA lists 32 but examines 28, because a
     student picks one of five optional ideologies — so counting topics.length
     leaves four permanently untested and caps every progress bar below 100%.

     Every curriculum denominator must go through this. medals-engine.js
     already did, which is why it awarded "Century - test 100% of your topics"
     to a student the Dashboard was still showing as "4 not tested". */
  function examinedTotalFor(entry) {
    if (!entry || !entry.topics) return 0;
    return entry.examinedTotal || entry.topics.length;
  }

  /* The topics a particular student can actually be shown.

     Most specs offer one set to everyone and this returns it unchanged.
     Where a spec offers alternative ROUTES — Edexcel Politics Component 3
     is either 3A (USA) or 3B (Global), never both — a student who has
     chosen sees only their own route. Without this, six topics render
     permanently grey on the dashboard and the breakdown, which is the
     same silent-failure signature as a mismatched topic id.

     `options` is the user_subjects.options object, e.g. {"c3":"3A"}.
     A missing or unrecognised choice returns every topic, so a student
     who has not picked yet sees the full list rather than an empty one.

     NOTE this does NOT change the denominator. examinedTotal already
     counts what a student can sit (18 either way for Edexcel Politics),
     and it is deliberately the same on both routes, so switching route
     changes which topics are shown and not what completion requires. */
  function visibleTopicsFor(entry, options) {
    if (!entry || !Array.isArray(entry.topics)) return [];
    const groups = entry.optionGroups;
    if (!Array.isArray(groups) || !groups.length || !options) return entry.topics;

    // Prefixes belonging to a route the student did NOT choose.
    const hidden = [];
    for (const group of groups) {
      const chosen = options[group.key];
      if (!chosen) continue;                                   // not picked yet
      const valid = group.choices.some(c => c.value === chosen);
      if (!valid) continue;                                    // stale value; show all
      for (const choice of group.choices) {
        if (choice.value !== chosen && choice.prefix) hidden.push(choice.prefix);
      }
    }
    if (!hidden.length) return entry.topics;
    return entry.topics.filter(t => !hidden.some(p => String(t.id).startsWith(p)));
  }

  window.DIAG_TOPICS = DIAG_TOPICS;
  window.TOPICS_EXAMINED_TOTAL = examinedTotalFor;
  window.TOPICS_VISIBLE = visibleTopicsFor;
})();
