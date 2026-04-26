/*
 * OCR B GCSE Biology (J257) Twenty First Century Science — Written / Short-Answer Bank
 * 10 questions per sub-topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 2-3 marks), 'amber' (explain/describe 4-5 marks), 'red' (evaluate/discuss 6-8 marks)
 * Student self-marks against the model answer: Full / Partial / Missed.
 * Used by the diagnostic to fill the forced-written question slot.
 */

const BIOLOGY_OCR_B_GCSE_WRITTEN = {

  'B1.1': {
    green: [
      { q: 'State what is meant by the term "genome".', marks: 2, tier: 'green',
        modelAnswer: `The complete set of DNA / genetic material of an organism (1), including all genes and non-coding sequences (1).` },
      { q: 'State the four bases found in DNA and their pairing rule.', marks: 3, tier: 'green',
        modelAnswer: `• Adenine (A), Thymine (T), Cytosine (C), Guanine (G) (1)\n• A pairs with T (1)\n• C pairs with G (1).` },
      { q: 'State two functions of DNA in a cell.', marks: 2, tier: 'green',
        modelAnswer: `• Stores the genetic instructions for the cell (1)\n• Codes for the amino acid sequence of proteins (1).` },
      { q: 'Define the term "gene".', marks: 2, tier: 'green',
        modelAnswer: `A short section of DNA (1) that codes for a particular sequence of amino acids / a protein (1).` },
    ],
    amber: [
      { q: 'Describe the structure of a DNA molecule.', marks: 4, tier: 'amber',
        modelAnswer: `• DNA is a polymer made up of two strands (1)\n• The strands form a double helix (1)\n• Each strand has a sugar–phosphate backbone with bases attached (1)\n• Bases pair across the strands by complementary base pairing: A–T and C–G held by hydrogen bonds (1).` },
      { q: 'Explain how the genome controls protein production.', marks: 4, tier: 'amber',
        modelAnswer: `• A gene is a section of DNA with a sequence of bases (1)\n• Three bases (a triplet/codon) code for one amino acid (1)\n• The order of bases determines the order of amino acids in the protein (1)\n• The protein then folds into its specific shape determined by the amino-acid sequence (1).` },
      { q: 'Describe two reasons why understanding the human genome is important in medicine.', marks: 4, tier: 'amber',
        modelAnswer: `• Allows identification of genes linked to inherited disorders (1) so testing/screening can be done (1)\n• Helps develop personalised medicine — drugs targeted to a person\'s genetic makeup (1)\n• Helps trace human ancestry/evolution and disease spread (1) (any 4).` },
      { q: 'Explain why most mutations in non-coding DNA do not affect the phenotype.', marks: 4, tier: 'amber',
        modelAnswer: `• Non-coding DNA does not code for amino acids in proteins (1)\n• So a change in base sequence does not alter a protein\'s amino acid sequence (1)\n• Protein function is therefore unchanged (1)\n• Some non-coding DNA does regulate gene expression, so occasionally there is an effect (1).` },
    ],
    red: [
      { q: 'A new mutation occurs in a single base in a gene that codes for an enzyme. Discuss the possible consequences for the cell.', marks: 6, tier: 'red',
        modelAnswer: `• A point mutation may change one codon (1)\n• If the codon still codes for the same amino acid (silent mutation), the enzyme is unchanged (1)\n• If a different amino acid is coded, the enzyme\'s shape may change (missense), affecting the active site (1)\n• A non-functional enzyme may slow or stop a metabolic reaction (1)\n• A premature stop codon (nonsense) may produce a much shorter, non-functional protein (1)\n• If the gene is critical, the cell may die or the organism may show disease; if non-critical, no effect (1).` },
      { q: 'Evaluate the claim that "your genes alone determine your appearance and health".', marks: 6, tier: 'red',
        modelAnswer: `• Genes do strongly influence many traits e.g. eye colour, blood group, single-gene disorders (1)\n• Many traits are polygenic — controlled by many genes interacting (1)\n• Environment also affects phenotype: diet (height/mass), sunlight (skin colour), exercise (1)\n• Identical twins raised apart often differ in body mass and disease risk, showing environmental effects (1)\n• Epigenetic changes can alter gene expression without changing DNA sequence (1)\n• Conclusion: genes are necessary but not sufficient — environment and gene–environment interactions also matter (1).` },
    ],
  },

  'B1.2': {
    green: [
      { q: 'State the difference between a gamete and a body cell in terms of chromosome number.', marks: 2, tier: 'green',
        modelAnswer: `Body cells are diploid with two sets of chromosomes / 46 in humans (1); gametes are haploid with one set / 23 in humans (1).` },
      { q: 'Define the terms genotype and phenotype.', marks: 2, tier: 'green',
        modelAnswer: `Genotype — the combination of alleles for a gene (1); phenotype — the observable characteristics produced by those alleles (1).` },
      { q: 'State what is meant by a homozygous individual and a heterozygous individual.', marks: 2, tier: 'green',
        modelAnswer: `Homozygous — has two identical alleles of a gene (e.g. BB or bb) (1); heterozygous — has two different alleles (e.g. Bb) (1).` },
      { q: 'State the human sex chromosomes for males and females.', marks: 2, tier: 'green',
        modelAnswer: `Female: XX (1); Male: XY (1).` },
    ],
    amber: [
      { q: 'A man (Bb) and woman (Bb) have a child. Use a Punnett square to find the probability the child is bb.', marks: 4, tier: 'amber',
        modelAnswer: `Punnett:        B    b\n           B  BB   Bb\n           b  Bb   bb\n• Correct gametes from each parent (1)\n• Correct offspring genotypes BB, Bb, Bb, bb (1)\n• Probability of bb = 1/4 / 25% (1)\n• Probability of dominant phenotype B_ = 3/4 / 75% (1).` },
      { q: 'Describe how meiosis produces genetically different gametes.', marks: 4, tier: 'amber',
        modelAnswer: `• A diploid cell undergoes two divisions producing four haploid gametes (1)\n• Homologous chromosomes pair and exchange sections — crossing over (1)\n• Independent assortment — homologous pairs line up randomly, so different combinations of maternal and paternal chromosomes go into each gamete (1)\n• These processes produce huge variation in gametes / no two gametes the same (1).` },
      { q: 'Explain how the sex of a baby is determined.', marks: 4, tier: 'amber',
        modelAnswer: `• Mother\'s eggs all carry an X chromosome (1)\n• Father\'s sperm carries either an X or a Y (1)\n• If an X-sperm fertilises the egg, the child is female (XX) (1)\n• If a Y-sperm fertilises the egg, the child is male (XY) (1).` },
      { q: 'Distinguish between continuous and discontinuous variation, with one example of each.', marks: 4, tier: 'amber',
        modelAnswer: `• Continuous variation: a range of values forming a normal distribution e.g. height, mass (1; 1 example)\n• Discontinuous variation: distinct categories with no intermediates e.g. blood group, ABO (1; 1 example).` },
    ],
    red: [
      { q: 'A couple are unaffected. Their first child has cystic fibrosis (autosomal recessive). Discuss the inheritance pattern, give the probability that their next child will be affected, and suggest one option available to them.', marks: 6, tier: 'red',
        modelAnswer: `• Both parents must be heterozygous carriers Cc (1)\n• A Punnett square Cc × Cc gives 1 CC : 2 Cc : 1 cc (1)\n• Probability that the next child is affected (cc) = 1/4 / 25% (1)\n• Probability of being a carrier = 1/2 / 50% (1)\n• Options: pre-implantation genetic diagnosis (PGD) using IVF (1)\n• Prenatal genetic testing (CVS or amniocentesis) followed by counselling (1).` },
      { q: 'Evaluate the use of pedigree analysis to predict inheritance of a single-gene disorder.', marks: 6, tier: 'red',
        modelAnswer: `• Strengths: shows the pattern across generations (1); helps work out whether the trait is dominant, recessive or sex-linked (1); useful for genetic counselling (1)\n• Limitations: small family sizes mean ratios may not match expected probabilities (1); penetrance may be incomplete; environmental factors may influence the phenotype (1); for polygenic traits a pedigree alone is insufficient (1).` },
    ],
  },

  'B1.3': {
    green: [
      { q: 'Define the term "genetic engineering".', marks: 2, tier: 'green',
        modelAnswer: `The deliberate modification of an organism\'s DNA / genome (1) by adding, removing or altering specific genes (1).` },
      { q: 'State two uses of GM bacteria.', marks: 2, tier: 'green',
        modelAnswer: `• Production of human insulin (1)\n• Production of other medicines / human growth hormone / antibodies (1).` },
      { q: 'State what is meant by "selective breeding".', marks: 2, tier: 'green',
        modelAnswer: `Choosing parents with desired characteristics and breeding them together (1) so the offspring inherit those traits over generations (1).` },
      { q: 'State two examples of traits produced by selective breeding.', marks: 2, tier: 'green',
        modelAnswer: `Any 2 of: high milk yield in dairy cows; large grain size in wheat; disease-resistance in crops; specific colour/shape in dogs; long wool in sheep (1 each).` },
    ],
    amber: [
      { q: 'Describe how human insulin is produced using GM bacteria.', marks: 4, tier: 'amber',
        modelAnswer: `• The human insulin gene is cut from human DNA using restriction enzymes producing sticky ends (1)\n• The bacterial plasmid is cut with the same enzyme to produce complementary sticky ends (1)\n• The gene and plasmid are joined using DNA ligase to form recombinant DNA (1)\n• The plasmid is inserted into a bacterium; bacteria are grown in fermenters where they express the gene and produce human insulin which is purified (1).` },
      { q: 'Explain two potential benefits and two potential risks of GM crops.', marks: 4, tier: 'amber',
        modelAnswer: `Benefits: higher yields/feeds more people (1); pest/herbicide resistance reduces some pesticide use (1); added nutrients e.g. golden rice (1).\nRisks: gene flow to wild relatives reduces biodiversity (1); long-term health/ecological effects uncertain (1); concentrated control by seed companies / cost to farmers (1) (any 2 each).` },
      { q: 'Describe how cloning a plant by tissue culture works.', marks: 4, tier: 'amber',
        modelAnswer: `• Take small samples of plant tissue (explants) (1)\n• Place on sterile growth medium with hormones to stimulate growth (1)\n• The explants divide and form a callus, then differentiate into shoots and roots (1)\n• Plantlets are transferred to soil — all genetically identical to the parent (1).` },
      { q: 'Explain why repeated selective breeding can lead to inbreeding problems.', marks: 4, tier: 'amber',
        modelAnswer: `• Repeatedly breeding closely related individuals reduces genetic variation in the population (1)\n• Recessive harmful alleles are more likely to come together in offspring (1)\n• So genetic disorders / health problems become more common (1)\n• Population is also less able to adapt to new diseases or environmental change (1).` },
    ],
    red: [
      { q: 'Evaluate the use of CRISPR-Cas9 in human gene therapy for a single-gene disorder.', marks: 6, tier: 'red',
        modelAnswer: `• Strengths: high precision targeting specific DNA sequences (1); cheaper and faster than older methods (1); can in principle correct the underlying cause of disease (1)\n• Limitations: off-target edits may occur (1); ethical concerns about germline editing affecting future generations (1); long-term safety / immune responses unknown (1)\n• Conclusion: very promising for somatic single-gene therapy but germline use remains highly controversial (1) (max 6).` },
      { q: 'Discuss the ethical issues raised by genetic testing of unborn children.', marks: 6, tier: 'red',
        modelAnswer: `• Allows parents informed choices about risks of genetic disease (1)\n• Can lead to early treatment or preparation for the child\'s needs (1)\n• Concerns: testing risks miscarriage (CVS/amniocentesis) (1)\n• May lead to selective termination, raising disability-rights concerns (1)\n• Risk of "designer babies" if tests are used for non-medical traits (1)\n• Privacy and genetic discrimination by insurers/employers (1)\n• Conclusion: genetic testing offers important benefits but requires safeguards, counselling and equity of access (1) (max 6).` },
    ],
  },

  /* B2.x – B6.x stubs filled in subsequent batches */
  'B2.1': { green: [], amber: [], red: [] },
  'B2.2': { green: [], amber: [], red: [] },
  'B2.3': { green: [], amber: [], red: [] },
  'B2.4': { green: [], amber: [], red: [] },
  'B2.5': { green: [], amber: [], red: [] },
  'B2.6': { green: [], amber: [], red: [] },
  'B3.1': { green: [], amber: [], red: [] },
  'B3.2': { green: [], amber: [], red: [] },
  'B3.3': { green: [], amber: [], red: [] },
  'B3.4': { green: [], amber: [], red: [] },
  'B4.1': { green: [], amber: [], red: [] },
  'B4.2': { green: [], amber: [], red: [] },
  'B4.3': { green: [], amber: [], red: [] },
  'B5.1': { green: [], amber: [], red: [] },
  'B5.2': { green: [], amber: [], red: [] },
  'B5.3': { green: [], amber: [], red: [] },
  'B5.4': { green: [], amber: [], red: [] },
  'B6.1': { green: [], amber: [], red: [] },
  'B6.2': { green: [], amber: [], red: [] },
  'B6.3': { green: [], amber: [], red: [] },

};
