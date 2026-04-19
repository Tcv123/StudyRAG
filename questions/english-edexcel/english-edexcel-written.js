/*
 * Edexcel A-Level English Language (9EN0) — Diagnostic Written Questions
 * Short written questions used inside the 5-question diagnostic (always 1 written).
 * One is picked at random from the tier chosen as the written slot.
 */

const ENGLISH_EDEXCEL_WRITTEN = {

  '1.1': {
    green: [
      { q: 'Define "idiolect", "sociolect" and "dialect" with a one-word example of each.', marks: 3, tier: 'green', modelAnswer: '• Idiolect — the unique linguistic profile of an individual speaker (1)\n• Sociolect — a variety linked to a social group, e.g. teenage sociolect using "bare", "peng" (1)\n• Dialect — a variety with distinctive lexis and grammar, e.g. Geordie "pet", "howay" (1)' },
      { q: 'State the difference between Standard English and RP, and explain why the distinction matters.', marks: 3, tier: 'green', modelAnswer: '• Standard English is a DIALECT — lexis and grammar (1)\n• RP is an ACCENT — pronunciation pattern (1)\n• They are separate: Standard English can be spoken in any regional accent; treating them as identical erases working-class and regional speakers who command Standard English in their own accent (1)' },
      { q: 'Identify three common markers of sociolect you might analyse in a conversation transcript.', marks: 3, tier: 'green', modelAnswer: '• Lexis — slang, in-group vocabulary (1)\n• Grammar — non-standard forms (e.g. "we was", double negatives) (1)\n• Prosody / discourse — back-channelling, address terms, turn-taking style (1)' },
      { q: 'Define "overt" and "covert" prestige with an example of each.', marks: 4, tier: 'green', modelAnswer: '• Overt prestige — publicly valued standard forms, e.g. RP on BBC Radio 4 (1 + 1)\n• Covert prestige — hidden prestige within a peer group, e.g. teenagers retaining non-standard grammar to mark group identity (1 + 1)' },
    ],
    amber: [
      { q: 'Describe Labov\'s New York department store study and one conclusion.', marks: 4, tier: 'amber', modelAnswer: '• Labov varied formality — eliciting "fourth floor" casually and in careful repetition — in three stores of different social prestige (1)\n• Rates of post-vocalic /r/ increased with store prestige and with careful speech (1)\n• Lower-middle-class Macy\'s staff hypercorrected in careful speech, producing MORE /r/ than Saks (upper-middle) (1)\n• Conclusion: linguistic variation correlates systematically with social variables and speaker style (1)' },
      { q: 'Using Trudgill\'s Norwich study, explain how gender and class interact in language variation.', marks: 4, tier: 'amber', modelAnswer: '• Trudgill (1974) studied variables including "-ing" across five social classes (1)\n• Women used more standard forms than men of the same class (1)\n• Men over-reported non-standard use (covert prestige); women over-reported standard use (overt prestige) (1)\n• Showed variation correlates with class, gender and attitudes — not class alone (1)' },
      { q: 'Describe Milroy\'s Belfast study and state its main finding.', marks: 4, tier: 'amber', modelAnswer: '• Milroy studied three working-class Belfast communities (1)\n• Measured "network strength" — density and multiplexity of contacts (1)\n• Speakers in dense, multiplex networks used more local vernacular forms (1)\n• Shifted the field from static class categories to social network as an explanatory variable (1)' },
      { q: 'Explain Giles\'s Accommodation Theory and apply it to a job interview.', marks: 4, tier: 'amber', modelAnswer: '• Accommodation Theory describes how speakers adjust style in interaction (1)\n• Convergence — moving towards listener\'s style to build rapport (1)\n• Divergence — moving away to emphasise identity or distance (1)\n• In a job interview: the candidate typically converges towards the interviewer\'s formal register — shifting lexis and prosody to signal professional alignment (1)' },
    ],
    red: [
      { q: 'Evaluate: "Standard English is inherently superior to regional dialects." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Linguistically, all varieties are rule-governed systems; Standard English is not grammatically superior (1)\n• Its status is SOCIAL — tied to education, media, and historically the South-East elite (1)\n• Labov\'s work on AAVE showed vernacular varieties have complex grammar, undermining "deficient English" claims (1)\n• The "superiority" view confuses prestige (social) with correctness (linguistic) (1)\n• However Standard English is pragmatically important for access to formal domains — a social fact, not a linguistic one (1)\n• Therefore the claim is false as linguistics but true as sociolinguistics of access — a top-band answer acknowledges both (1)' },
      { q: 'Discuss: "Network density, rather than class, is the key predictor of language variation." [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Milroy\'s Belfast study showed network density correlates strongly with vernacular maintenance (1)\n• Close-knit networks reinforce local norms; loose networks allow convergence on the standard (1)\n• However class still matters: Trudgill, Petyt and Labov show class-patterned variation independent of network (1)\n• In reality network and class interact: working-class communities often have denser networks than middle-class ones (1)\n• Eckert\'s community of practice approach unifies the two — identities form within groups with shared practice, including linguistic repertoires (1)\n• Therefore neither network NOR class alone is sufficient; both describe aspects of the same social fabric (1)' },
    ],
  },

  '1.2': {
    green: [
      { q: 'Name the four main periods of English with approximate dates.', marks: 4, tier: 'green', modelAnswer: '• Old English (c. 450–1066) (1)\n• Middle English (1066–c. 1500) (1)\n• Early Modern English (c. 1500–1700) (1)\n• Modern English (1700–present) (1)' },
      { q: 'Identify four influences on English lexis historically.', marks: 4, tier: 'green', modelAnswer: '• Latin + Greek (learned borrowings) (1)\n• Norman French (post-1066) (1)\n• Old Norse (Viking settlement) (1)\n• Modern contact — colonisation, globalisation, technology, migration (1)' },
      { q: 'Define and exemplify broadening, narrowing, amelioration and pejoration.', marks: 8, tier: 'green', modelAnswer: '• Broadening — "dog" (once a specific breed) now any canine (2)\n• Narrowing — "meat" (once any food) now flesh (2)\n• Amelioration — "nice" (once "foolish") now pleasant (2)\n• Pejoration — "silly" (once "blessed") now foolish (2)' },
    ],
    amber: [
      { q: 'Describe Aitchison\'s three metaphors for language change and her purpose in using them.', marks: 4, tier: 'amber', modelAnswer: '• "Damp spoon" — change caused by laziness (1)\n• "Crumbling castle" — language was once pure and is decaying (1)\n• "Infectious disease" — change spreads harmfully (1)\n• Aitchison REJECTS all three — change is natural, systematic, functional, not decay (1)' },
      { q: 'Explain the "S-curve" model of language change and an example it fits.', marks: 4, tier: 'amber', modelAnswer: '• New forms slowly adopted by innovators (1)\n• Rapid spread through the community (steep middle) (1)\n• Plateau as form approaches universal use (1)\n• Fits sound changes (GVS) and lexical innovations (e.g. "selfie", adoption of singular they) (1)' },
      { q: 'Identify three ways technology has affected English in the last 30 years.', marks: 3, tier: 'amber', modelAnswer: '• New lexis ("tweet", "selfie", "doomscroll") (1)\n• Conversion — noun "text" → verb "to text" (1)\n• New genres/registers (tweet, meme, chat) with orthographic innovation (emoji) (1)' },
    ],
    red: [
      { q: 'Evaluate: "English is in decline." Discuss, using at least two theorists. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Descriptivist consensus (Crystal, Aitchison): no — change is continuous, natural and not decay (1)\n• Aitchison\'s metaphors critique the "crumbling castle" view (1)\n• Crystal shows many "declines" (e.g. "literally") have 18th-century precedents (1)\n• Complaints often reflect social anxiety (Cameron\'s verbal hygiene) not linguistic fact (1)\n• Grammatical simplification in some areas is matched by lexical and generic expansion (1)\n• Therefore the claim is rhetorically common but linguistically unsupported (1)' },
      { q: 'Discuss how globalisation has shaped English over the last century. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Mobility + media accelerate diffusion of new forms (1)\n• Loanwords from multiple languages enter everyday lexis rapidly (tsunami, barista, hijab) (1)\n• Pluricentric development — new Englishes with distinct norms (Crystal) (1)\n• Contact varieties (MLE) emerge in cosmopolitan cities (1)\n• Levelling occurs in parallel, but new varieties emerge alongside (1)\n• Therefore globalisation has diversified AND accelerated English change (1)' },
    ],
  },

  '1.3': {
    green: [
      { q: 'Name Kachru\'s three circles of World Englishes with an example country for each.', marks: 3, tier: 'green', modelAnswer: '• Inner — native English (UK, US, Australia) (1)\n• Outer — institutionalised second language (India, Nigeria, Singapore) (1)\n• Expanding — foreign/international (China, Russia, Brazil) (1)' },
      { q: 'Describe two features commonly identified in MLE.', marks: 2, tier: 'green', modelAnswer: '• Fronted GOOSE vowel; distinctive FACE / GOAT vowels (1)\n• Lexis from Caribbean, South Asian, vernacular London sources — "ting", "mandem" (1)' },
      { q: 'Define "pidgin" and "creole" with an example relation between them.', marks: 3, tier: 'green', modelAnswer: '• Pidgin — simplified contact language, no native speakers (1)\n• Creole — a pidgin acquired as a native language with expanded grammar and lexis (1)\n• Example: Jamaican Creole from earlier Caribbean pidgins (1)' },
    ],
    amber: [
      { q: 'Explain Labov\'s argument that AAVE is rule-governed, with an example.', marks: 4, tier: 'amber', modelAnswer: '• Labov (1972) studied AAVE in Harlem (1)\n• Copula deletion ("she happy") follows specific grammatical constraints (1)\n• Habitual "be" ("she be working") expresses an aspect Standard English lacks (1)\n• Concluded AAVE is systematic — claims of "broken English" are social, not linguistic (1)' },
      { q: 'Describe Jenkins\'s Lingua Franca Core and why it matters.', marks: 4, tier: 'amber', modelAnswer: '• For ELF speakers, only certain phonological features are essential for intelligibility (1)\n• Consonant clusters must be preserved; exact RP vowels are not required (1)\n• Implication: Inner-Circle norms are not the only legitimate targets for ELF (1)\n• Supports pluricentric view of English (1)' },
      { q: 'Explain translanguaging (García) with an example.', marks: 3, tier: 'amber', modelAnswer: '• Multilingual speakers use their full linguistic repertoire flexibly (1)\n• Example: a bilingual student using English in essays, Spanish in discussion, mixed at home (1)\n• Challenges the view that languages are discrete bounded systems (1)' },
    ],
    red: [
      { q: 'Evaluate: "The global spread of English threatens linguistic diversity." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• English\'s role has contributed to language endangerment in some contexts (1)\n• But colonisation, policy and economics often do more work than English itself (1)\n• Crystal argues English has pluralised (2–3 billion speakers, new norms) (1)\n• Translanguaging and hybrid varieties show local agency and adaptation (1)\n• Educational and economic inequalities around English access matter (1)\n• Balanced: spread is mixed — not purely threat, not purely benign (1)' },
      { q: 'Discuss media representations of MLE as an example of language ideology. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Tabloids label MLE "jafaican" or "street slang" — pejorative (1)\n• Cheshire et al.\'s research shows MLE is a rule-governed variety from multiethnic peer networks (1)\n• Framing tracks earlier patterns (fears about Cockney, AAVE) — racialised standard-language ideology (Milroy) (1)\n• Such texts are themselves useful language-discourse data (1)\n• The claim "MLE is lazy English" is not linguistically supported (1)\n• Top-band answers critique the framing AND analyse why it resonates socially (1)' },
    ],
  },

  '2.1': {
    green: [
      { q: 'Name the four main stages of spoken language development with age guidance.', marks: 4, tier: 'green', modelAnswer: '• Pre-verbal (0–12m): cooing, babbling (1)\n• Holophrastic (12–18m): single words (1)\n• Two-word (18–24m) (1)\n• Telegraphic / post-telegraphic (2–5y) (1)' },
      { q: 'Explain Halliday\'s seven functions of language, with brief examples.', marks: 7, tier: 'green', modelAnswer: '• Instrumental — "want juice" (1)\n• Regulatory — "no bed" (1)\n• Interactional — "hi nanny" (1)\n• Personal — "me happy" (1)\n• Heuristic — "what\'s that?" (1)\n• Imaginative — "I\'m a dragon" (1)\n• Representational — "doggy barking" (1)' },
      { q: 'Describe three features of child-directed speech (CDS).', marks: 3, tier: 'green', modelAnswer: '• Higher pitch + exaggerated intonation (1)\n• Slower tempo, clearer articulation (1)\n• Simplified vocabulary + repetition + questions to invite turns (1)' },
    ],
    amber: [
      { q: 'Using an example, explain what a virtuous error is and why it matters theoretically.', marks: 4, tier: 'amber', modelAnswer: '• Grammatical overgeneralisation of a rule, e.g. "I goed" (1 + 1)\n• The child has applied the regular past tense "-ed" to an irregular verb (1)\n• Shows RULE-LEARNING rather than imitation — supports nativist (Chomsky) over pure behaviourism (Skinner) (1)' },
      { q: 'Compare Skinner\'s behaviourism and Chomsky\'s nativism.', marks: 4, tier: 'amber', modelAnswer: '• Skinner: imitation, reinforcement, conditioning (1)\n• Chomsky: innate LAD + Universal Grammar (1)\n• Nativist evidence: speed of acquisition, virtuous errors, poverty of the stimulus (1)\n• Criticism of Skinner: children produce novel utterances never heard and rarely receive explicit correction (1)' },
      { q: 'Explain Bruner\'s LASS with one example.', marks: 4, tier: 'amber', modelAnswer: '• Language Acquisition Support System — social scaffolding by caregivers (1)\n• Joint attention, recasting, expansion, routines (1)\n• Example: picture-book routine — parent points, names, pauses, waits for child (1)\n• Complements Chomsky\'s LAD (1)' },
    ],
    red: [
      { q: 'Evaluate the extent to which Chomsky\'s nativism can explain all aspects of child language acquisition. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Nativism explains rapid acquisition, creativity, virtuous errors (1)\n• But downplays social environment — Genie\'s case, Jim case show input is essential (1)\n• Halliday shows language serves functions — a pragmatic/social motivation (1)\n• Tomasello\'s usage-based theory challenges strong nativism (1)\n• A balanced account integrates innate capacity + input + interaction (1)\n• Therefore nativism is a partial explanation; complementary theories are needed for lexical, pragmatic and functional development (1)' },
      { q: 'Discuss: how useful is Halliday\'s framework for analysing a child\'s transcript? [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Seven functions give a PRAGMATIC lens — what is the child DOING with language? (1)\n• Complements purely structural analyses (1)\n• Example: "no bed" = regulatory + personal — one utterance, two functions (1)\n• Limitation: categories can overlap; subjective classification (1)\n• Useful for showing pragmatic sophistication before grammatical maturity (1)\n• Strong in combination with stage frameworks and Bruner/Vygotsky (1)' },
    ],
  },

  '2.2': {
    green: [
      { q: 'Name Kroll\'s four stages of writing development.', marks: 4, tier: 'green', modelAnswer: '• Preparation — up to age 6 (1)\n• Consolidation — around 7–8 (1)\n• Differentiation — around 9–10 (1)\n• Integration — teenage years onwards (1)' },
      { q: 'Identify Britton\'s three functions of children\'s writing.', marks: 3, tier: 'green', modelAnswer: '• Expressive — writing close to personal voice (1)\n• Transactional — writing to inform or persuade (1)\n• Poetic — crafted stylised writing (1)' },
      { q: 'State Rothery\'s four genre categories with one-sentence descriptions.', marks: 4, tier: 'green', modelAnswer: '• Recount — chronological retelling (1)\n• Report — factual generalised information (1)\n• Narrative — orientation + complication + resolution (1)\n• Observation / comment — observation plus evaluation (1)' },
    ],
    amber: [
      { q: 'A Year 3 child writes: "we went to the zoo and I saw a lion and I had ice cream." Analyse at two linguistic levels and link to a framework.', marks: 4, tier: 'amber', modelAnswer: '• Grammar: heavy coordination with "and" — typical of Kroll\'s consolidation stage (1)\n• Lexis: concrete, first-person, high-frequency — expressive function (Britton) (1)\n• Genre: recount (Rothery) (1)\n• Suggests the child is securely in consolidation; target: introduce subordination for differentiation stage (1)' },
      { q: 'Explain how Vygotsky\'s ZPD applies to teaching a Year 6 pupil to write a formal letter.', marks: 4, tier: 'amber', modelAnswer: '• ZPD = gap between independent competence and with-guidance competence (1)\n• Teacher models a formal letter highlighting features (formality, address, conventions) (1)\n• Shared writing and peer examples scaffold within ZPD (1)\n• Support fades as competence grows (Bruner\'s extension) (1)' },
      { q: 'Identify two features that distinguish Kroll\'s integration stage from consolidation.', marks: 4, tier: 'amber', modelAnswer: '• Integration: varied sentence types, non-finite clauses for effect (1)\n• Integration: conscious register shifts across genres (1)\n• Consolidation: heavy coordination, limited cohesion, speech-like register (1)\n• Move reflects growing control of the textual metafunction (Halliday) and genre awareness (Rothery) (1)' },
    ],
    red: [
      { q: 'Evaluate: "Children\'s writing follows fixed stages." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Kroll\'s stages describe tendencies, not fixed sequences (1)\n• Individual variation — cultural, SES, education influence trajectories (1)\n• Britton shows children can be advanced in some functions, developing in others (1)\n• Rothery shows that less familiar genres (report, argument) must be taught explicitly (1)\n• Therefore stages are descriptive, not deterministic (1)\n• Top-band answers acknowledge BOTH value and limits (1)' },
      { q: 'Discuss the role of digital communication in children\'s written development. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Digital mode introduces new orthography — abbreviations, emoji, creative capitalisation (1)\n• Prescriptivists argue this harms standard writing (1)\n• Research (Crystal, Tagg, Wood) shows that educated children switch registers — adding a register, not replacing (1)\n• Digital writing develops audience awareness and rapid composition (1)\n• Equity of access and explicit school teaching remain important (1)\n• Balanced: digital literacy is an ADDITIONAL register within integration stage, not a threat (1)' },
    ],
  },

  '3.1': {
    green: [
      { q: 'Name Kachru\'s three circles with an example country for each.', marks: 3, tier: 'green', modelAnswer: '• Inner — native English (UK, US, Australia) (1)\n• Outer — institutionalised L2 (India, Nigeria, Singapore) (1)\n• Expanding — foreign/international (China, Brazil, Russia) (1)' },
      { q: 'Define ELF and name its key theorist.', marks: 2, tier: 'green', modelAnswer: '• English as a Lingua Franca — English used mostly between non-native speakers (1)\n• Jennifer Jenkins; proposed the Lingua Franca Core (1)' },
      { q: 'Define "pidgin", "creole" and "lectal continuum".', marks: 3, tier: 'green', modelAnswer: '• Pidgin — simplified contact language, no native speakers (1)\n• Creole — pidgin acquired natively, expanded grammar (1)\n• Lectal continuum — range from basilect (furthest) to acrolect (closest to standard) (1)' },
    ],
    amber: [
      { q: 'Describe Jenkins\'s Lingua Franca Core and explain one pedagogical implication.', marks: 4, tier: 'amber', modelAnswer: '• Certain phonological features are essential for ELF intelligibility (1)\n• Consonant clusters must be preserved; exact RP vowels are not required (1)\n• Pedagogical implication: learners do not need to sound like Inner-Circle speakers for communication (1)\n• Shifts teaching focus from native-like accent to intelligibility (1)' },
      { q: 'Describe Schneider\'s Dynamic Model of post-colonial Englishes.', marks: 4, tier: 'amber', modelAnswer: '• Five stages: foundation → exonormative stabilisation → nativisation → endonormative stabilisation → differentiation (1 + 1)\n• Tracks how post-colonial Englishes evolve from imported to locally owned (1)\n• Political and linguistic drivers at each stage (1)' },
      { q: 'Explain "translanguaging" (García) with an example.', marks: 3, tier: 'amber', modelAnswer: '• Multilingual speakers draw on their full repertoire flexibly (1)\n• Example: a bilingual student using English in essays, Spanish in peer discussion, mixed at home (1)\n• Rejects the view of languages as bounded systems (1)' },
    ],
    red: [
      { q: 'Evaluate: "Inner-Circle Englishes should remain the norm-provider for the world." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Traditional Kachru framing gives Inner Circle norm-providing status (1)\n• But reality is fluid — many Expanding-Circle speakers are highly proficient (1)\n• Jenkins\'s LFC shows intelligibility does not depend on imitating RP/GA (1)\n• Crystal argues pluricentric norms are legitimate (1)\n• Insisting on Inner-Circle norms carries colonial baggage and restricts ELF users (1)\n• Conclusion: Inner-Circle norms are one legitimate option among several, not THE standard (1)' },
      { q: 'Discuss: "The global spread of English is politically neutral." [6 marks]', marks: 6, tier: 'red', modelAnswer: '• It is not neutral — it reflects colonial history, economic power and cultural hegemony (1)\n• However local speakers also shape English to serve their needs (nativisation) (1)\n• Translanguaging reclaims multilingual practice (1)\n• Policy decisions in Outer-Circle contexts show linguistic choice is always political (1)\n• However English\'s role as a lingua franca enables communication that benefits many (1)\n• Balanced: spread is a mixed phenomenon — not neutral, but not uniformly coercive (1)' },
    ],
  },

  '3.2': {
    green: [
      { q: 'State three features Lakoff (1975) proposed as typical of "women\'s language".', marks: 3, tier: 'green', modelAnswer: '• Hedges (1)\n• Tag questions (1)\n• Polite forms, rising intonation, empty adjectives — any (1)' },
      { q: 'Define the deficit, dominance and difference models.', marks: 3, tier: 'green', modelAnswer: '• Deficit (Lakoff) — women\'s language is less powerful (1)\n• Dominance (Zimmerman &amp; West; Fishman) — male dominance in mixed talk (1)\n• Difference (Tannen) — men and women socialised into different subcultures (1)' },
      { q: 'State what Butler means by "performativity".', marks: 2, tier: 'green', modelAnswer: '• Gender is not something we HAVE but something we DO through repeated acts (1)\n• Language is one such act: we "do" gender through linguistic choices (1)' },
    ],
    amber: [
      { q: 'Explain how O\'Barr and Atkins\' courtroom study challenges Lakoff.', marks: 4, tier: 'amber', modelAnswer: '• Studied courtroom witnesses (1)\n• Features Lakoff labelled "women\'s language" correlated with POWER status, not gender (1)\n• Renamed "powerless language" (1)\n• Implication: deficit model confounds gender with power (1)' },
      { q: 'Describe Cameron\'s argument in "The Myth of Mars and Venus" (2007).', marks: 4, tier: 'amber', modelAnswer: '• Gender differences in language are overstated (1)\n• Meta-analyses show small differences + large overlap (1)\n• The binary risks excusing sexism as misunderstanding (1)\n• Differences emerge from context, power and community of practice (1)' },
      { q: 'Explain, with an example, what "lexical asymmetry" is in gender studies.', marks: 3, tier: 'amber', modelAnswer: '• Word pairs whose female form has narrower/negative connotations (1)\n• Example: "master" (positive: expert) vs "mistress" (sexualised) (1)\n• Illustrates how lexis historically encodes patriarchal values (1)' },
    ],
    red: [
      { q: 'Evaluate: "Gender differences in language are real but overstated." Discuss using at least two theorists. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Real: Lakoff, Zimmerman &amp; West and Fishman document patterns (1)\n• Overstated: Cameron shows small average differences and large overlap (1)\n• Tannen\'s binary critiqued for essentialism (1)\n• Butler reframes gender as performance (1)\n• Eckert\'s community-of-practice allows intersectional analysis (1)\n• Balanced answer engages with both sides (1)' },
      { q: 'Using a workplace transcript, how would you analyse gender without essentialism? [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Consider power/role (seniority) alongside gender (1)\n• Identify specific features and their contextual functions (1)\n• Apply multiple theorists, acknowledging alternative readings (1)\n• Use Butler: ask what KIND of gender is being performed (1)\n• Consider intra-gender variation and intersection with class/ethnicity/age (1)\n• Avoid "feature X by speaker Y = women\'s language" (1)' },
    ],
  },

  '3.3': {
    green: [
      { q: 'Distinguish "tabloid" and "broadsheet" with two features of each.', marks: 4, tier: 'green', modelAnswer: '• Tabloid — smaller format, popular audience; short emotive headlines, monosyllabic lexis (1 + 1)\n• Broadsheet — larger format, educated audience; balanced syntax, Latinate lexis, detailed quotation (1 + 1)' },
      { q: 'State four of Galtung &amp; Ruge\'s news values.', marks: 4, tier: 'green', modelAnswer: '• Frequency / recency (1)\n• Negativity (1)\n• Elitism (important people/countries) (1)\n• Meaningfulness / cultural relevance — also: unambiguity, consonance, personalisation, continuity (1 for any valid additional)' },
      { q: 'Explain the "inverted pyramid" structure in news reports.', marks: 3, tier: 'green', modelAnswer: '• Most important information first (1)\n• Progressively less important detail (1)\n• Allows readers to stop at any point without losing the main story (1)' },
    ],
    amber: [
      { q: 'Describe Fairclough\'s "synthetic personalisation" and give an example from news/advertising.', marks: 4, tier: 'amber', modelAnswer: '• Use of intimate/inclusive language to construct a simulated personal relationship with a mass audience (1)\n• Example: headline "WE all want safer streets" — inclusive "we" positioning reader (1)\n• Common in charity appeals and political columns (1)\n• Manufactures intimacy where none exists (1)' },
      { q: 'Explain how lexical choice shapes representation. Use "migrants" / "invaders" as an example.', marks: 4, tier: 'amber', modelAnswer: '• Both denote people arriving in a country (1)\n• "Migrants" is neutral/factual (1)\n• "Invaders" carries aggression and illegitimacy (1)\n• Lexical choice encodes ideological stance without explicit evaluation (1)' },
      { q: 'Explain three features of a typical tabloid front page.', marks: 3, tier: 'amber', modelAnswer: '• Large emotive headline in caps with red banner (1)\n• Single striking photograph with emotional appeal (1)\n• Puns or alliteration in strap-line; monosyllabic Anglo-Saxon lexis (1)' },
    ],
    red: [
      { q: 'Evaluate: "News is a neutral reflection of reality." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• News selection reflects news values (Galtung &amp; Ruge) — not all events are equally reported (1)\n• Lexical choice encodes stance ("migrants" vs "invaders") (1)\n• Grammar (passive/nominalisation) redistributes agency (1)\n• Graphology and image selection frame meaning (1)\n• Fairclough\'s CDA shows discourse = social practice encoding ideology (1)\n• Therefore news is never neutral — the best it can do is TRANSPARENT about its choices (1)' },
      { q: 'Analyse a hypothetical tabloid headline: "MIGRANT TIDE: Britain under siege." Identify features and their effects. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• "Tide" / "siege" — semantic fields of natural disaster + warfare (1)\n• Capitalisation — graphological foregrounding and emotional amplification (1)\n• Noun-phrase fragment "MIGRANT TIDE" — minor sentence for impact (1)\n• "Under siege" — passive positioning Britain as victim (1)\n• Presupposes that migration = attack — representational ideology (1)\n• Top-band analysis evaluates alternative lexical choices a neutral report might use (1)' },
    ],
  },

  '3.4': {
    green: [
      { q: 'Distinguish "instrumental" and "influential" power with an example of each.', marks: 4, tier: 'green', modelAnswer: '• Instrumental — authority enforced by institutions (law, government, contracts) (1)\n• Example: court summons (1)\n• Influential — persuasion via media, advertising, political rhetoric (1)\n• Example: political speech or advert (1)' },
      { q: 'Define "synthetic personalisation" (Fairclough).', marks: 2, tier: 'green', modelAnswer: '• Use of intimate/inclusive language to create a simulated personal relationship with a mass audience (1)\n• Example: supermarket email using first name + inclusive "we" (1)' },
      { q: 'State Brown &amp; Levinson\'s two aspects of "face".', marks: 2, tier: 'green', modelAnswer: '• Positive face — the desire to be liked, approved of, included (1)\n• Negative face — the desire not to be imposed on, to have autonomy (1)' },
    ],
    amber: [
      { q: 'Explain how passive voice and nominalisation obscure agency, using "Mistakes were made" as an example.', marks: 4, tier: 'amber', modelAnswer: '• Passive construction — "were made" — removes agent (1)\n• Nominalisation — "mistakes" turns a process into a thing (1)\n• Together: responsibility is acknowledged but agent is concealed (1)\n• Grammar encodes ideology — not merely stylistic (1)' },
      { q: 'Describe the Sinclair &amp; Coulthard IRF model and explain what it reveals.', marks: 4, tier: 'amber', modelAnswer: '• Teacher Initiation → pupil Response → teacher Feedback (1 + 1)\n• Teacher controls two of the three turns (1)\n• Grammatical structure enacts institutional power (1)' },
      { q: 'Explain three features of advertising language that construct influential power.', marks: 3, tier: 'amber', modelAnswer: '• Imperative call to action ("Buy now") (1)\n• Inclusive "we" creating rapport with audience (1)\n• Emotive/evaluative lexis + rhetorical questions (1)' },
    ],
    red: [
      { q: 'Evaluate: "Powerful language is always formal and Latinate." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Legal and governmental texts use formal/Latinate lexis enacting instrumental power (1)\n• But power can also be enacted through informality — synthetic personalisation in advertising (1)\n• Silence, gatekeeping and interruption also enact power (1)\n• Form alone does not determine power — CONTEXT matters (Fairclough) (1)\n• Analysing power requires looking at how form interacts with ideology and institutional role (1)\n• Therefore the claim oversimplifies — top-band answer rejects it with examples (1)' },
      { q: 'Analyse how a politician might use modality, inclusive pronouns and passive voice to manage representation. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Modality: "we must", "we will" — strong obligation/prediction signals leadership (1)\n• Inclusive "we" — positions speaker alongside audience (1)\n• Passive when discussing unpopular action: "reforms were introduced" — obscures agency (1)\n• Together: constructs a decisive, unifying leader distanced from negatives (1)\n• Integrated across grammar + pragmatics — encodes ideology (1)\n• Top-band answer links features explicitly to CDA (Fairclough) (1)' },
    ],
  },

  '3.5': {
    green: [
      { q: 'Define "accent", "dialect" and "idiolect" with a one-word example of each.', marks: 3, tier: 'green', modelAnswer: '• Accent — pronunciation patterns (e.g. Cockney) (1)\n• Dialect — lexis + grammar + often pronunciation (e.g. Geordie) (1)\n• Idiolect — an individual\'s unique linguistic profile (1)' },
      { q: 'Describe Labov\'s New York department store study and its main finding.', marks: 3, tier: 'green', modelAnswer: '• Labov elicited /r/ in "fourth floor" across three stores of different social prestige (1)\n• /r/ increased with store prestige and speech formality (1)\n• Established linguistic variables correlate with social variables (1)' },
      { q: 'Describe Trudgill\'s Norwich study and state two findings.', marks: 4, tier: 'green', modelAnswer: '• Trudgill studied variables across five social classes (1)\n• Finding 1: standard forms increased with class/formality (1)\n• Finding 2: women used more standard forms than men of same class (1)\n• Finding 3: men over-reported non-standard use (covert prestige) (1)' },
    ],
    amber: [
      { q: 'Describe Milroy\'s Belfast study and the concept of network density.', marks: 4, tier: 'amber', modelAnswer: '• Milroy measured network density and multiplexity (1)\n• Dense, multiplex networks correlated with higher vernacular use (1)\n• Loose networks showed more standard forms (1)\n• Shifted explanation from class to social network (1)' },
      { q: 'Explain Paul Kerswill\'s work on dialect levelling and MLE.', marks: 4, tier: 'amber', modelAnswer: '• Kerswill showed mobility, media and education reduce distinctive local features (1)\n• However new varieties emerge — MLE in inner London (1)\n• Levelling does not equal uniformity — identity still drives variation (1)\n• Shows UK sociolinguistics is dynamic, not linear decline (1)' },
      { q: 'Apply Giles\'s Accommodation Theory to a regional-variation scenario.', marks: 4, tier: 'amber', modelAnswer: '• Accommodation: speakers adjust style in interaction (1)\n• Convergence — moving towards listener\'s dialect to build rapport (1)\n• Divergence — emphasising local dialect to assert identity (1)\n• Example: a Yorkshire migrant to London converging at work, diverging with family visits (1)' },
    ],
    red: [
      { q: 'Evaluate: "Standard English is objectively better than regional dialects." Discuss. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Linguistically, all varieties are rule-governed; Standard English is not superior (1)\n• Its status is SOCIAL — historically tied to education, media, power (1)\n• Labov\'s AAVE research shows vernacular varieties have complex grammar (1)\n• "Superiority" confuses prestige (social) with correctness (linguistic) (1)\n• However Standard English is pragmatically important for access to formal domains (1)\n• Top-band answer distinguishes linguistic fact from sociohistorical prestige (1)' },
      { q: 'Discuss: "Network density, not class, predicts variation." [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Milroy\'s Belfast work supports the network claim (1)\n• But Trudgill, Petyt, Labov show class-patterned variation independent of network (1)\n• In reality networks and class interact (1)\n• Eckert\'s community-of-practice unifies the two (1)\n• Neither alone is sufficient (1)\n• Both describe aspects of the same social fabric (1)' },
    ],
  },

  '4.1': {
    green: [
      { q: 'State the structure of the Edexcel NEA.', marks: 3, tier: 'green', modelAnswer: '• Two original texts (1)\n• In the same genre, for different audiences/purposes (1)\n• Plus a reflective commentary analysing linguistic choices, supported by research/bibliography (1)' },
      { q: 'Name four possible genres you could use for the Edexcel NEA.', marks: 4, tier: 'green', modelAnswer: '• Journalism / feature articles (1)\n• Short stories / narrative fiction (1)\n• Speeches (1)\n• Travel writing; investigative journalism; blogs — any valid (1)' },
      { q: 'What is a "style model" and how should it be treated in the NEA?', marks: 3, tier: 'green', modelAnswer: '• A published text used as reference for your own writing (1)\n• Study it for genre conventions + specific techniques (1)\n• Reference it explicitly in the commentary to demonstrate informed craft (1)' },
    ],
    amber: [
      { q: 'Explain why the two NEA texts must share a genre but differ in audience / purpose.', marks: 4, tier: 'amber', modelAnswer: '• Shared genre ensures you demonstrate control of its conventions (1)\n• Different audience/purpose forces deliberate variation in register, lexis, grammar, graphology (1)\n• The commentary evidences your AO5 creativity through these variations (1)\n• This is a more subtle skill than writing two separate genres — tests deeper craft (1)' },
      { q: 'Describe three linguistic features that a STRONG NEA commentary paragraph would include.', marks: 4, tier: 'amber', modelAnswer: '• Quotation from the original piece showing the feature (1)\n• Precise framework terminology naming the feature (lexis, grammar, etc.) (1)\n• Explanation of effect on the target audience (1)\n• Link to the style model — adoption or adaptation (1)' },
      { q: 'Discuss how research informs the NEA, giving two examples.', marks: 4, tier: 'amber', modelAnswer: '• Genre research — reading published examples in the target genre; noting conventions (1)\n• Audience research — identifying lexical and graphological features appropriate to the intended audience (1)\n• Theoretical reading — applying concepts like synthetic personalisation (Fairclough) or narrative craft (Propp) (1)\n• Research underpins informed choice rather than instinct (1)' },
    ],
    red: [
      { q: 'Evaluate: "Creative writing does not need linguistic theory." Discuss for the Edexcel NEA. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• The original pieces are assessed on creativity (AO5), which rewards intuition (1)\n• But the commentary requires analytical framework use (AO1) and critical understanding (AO2) (1)\n• Theory-informed writing produces deliberate, defensible choices (1)\n• Without framework vocabulary, the commentary cannot reach top bands (1)\n• Strong NEAs show theory and craft enriching each other (1)\n• Therefore the claim under-values the commentary component — which assesses reflection, not more writing (1)' },
      { q: 'Discuss how the Edexcel NEA develops skills complementary to the three exam papers. [6 marks]', marks: 6, tier: 'red', modelAnswer: '• Paper 1: analyses variation in others\' texts; NEA requires you to produce controlled variation yourself (1)\n• Paper 2: analyses children\'s acquisition; the NEA develops your own craft conscious of audience (1)\n• Paper 3: in-depth analysis of one research area; the NEA often draws on similar research for style models (1)\n• Commentary uses the frameworks developed across all three papers (1)\n• Together: the NEA applies critical understanding to creative production (1)\n• Therefore the NEA is not separate from the exams — it EXTENDS them (1)' },
    ],
  },

};
