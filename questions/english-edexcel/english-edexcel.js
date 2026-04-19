/*
 * Edexcel A-Level English Language (9EN0) — Diagnostic MCQ Bank
 * 50 questions per topic: 20 green (recall/basic), 20 amber (application), 10 red (analysis/evaluate)
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 questions at random, one of which is a written Q pulled from english-edexcel-written.js
 * answer: 0-based index of correct option.
 */

const ENGLISH_EDEXCEL_QUESTIONS = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  '1.1': {
    name: 'Individual and Social Variation',
    green: [
      { q: 'What is an "idiolect"?', options: ['A regional accent','The unique linguistic profile of an individual speaker','An official language','A type of slang'], answer: 1 },
      { q: 'What is a "sociolect"?', options: ['A language variety associated with a particular social group','An accent only','A regional dialect','An individual\'s speech'], answer: 0 },
      { q: 'What is a "dialect"?', options: ['Only pronunciation patterns','A variety of a language with distinctive lexis, grammar and often pronunciation','A second language','A type of slang'], answer: 1 },
      { q: 'What is an "accent"?', options: ['Vocabulary differences','Pronunciation patterns of a speaker or group','Grammatical rules','A type of punctuation'], answer: 1 },
      { q: 'What does "RP" stand for?', options: ['Regional Pronunciation','Received Pronunciation','Rapid Pronunciation','Reading Paper'], answer: 1 },
      { q: 'RP is traditionally associated with…', options: ['Only Liverpool','High social prestige and BBC broadcasting','Only Wales','Children'], answer: 1 },
      { q: 'What is "Standard English"?', options: ['A regional dialect','The variety of English recognised for formal, educational and official use','An accent','A slang form'], answer: 1 },
      { q: 'Standard English and RP are…', options: ['The same thing','Different: Standard English is a dialect; RP is an accent','Only written','Only spoken'], answer: 1 },
      { q: 'What is meant by "register"?', options: ['A type of accent','The level of formality and appropriateness to context','An individual\'s speech','A grammar book'], answer: 1 },
      { q: 'Which of these is a UK regional dialect?', options: ['Geordie','Spanglish','Creole','AAVE'], answer: 0 },
      { q: 'Who carried out the Norwich study of language variation?', options: ['Labov','Peter Trudgill','Milroy','Cheshire'], answer: 1 },
      { q: 'Who studied language variation in Belfast through social networks?', options: ['Labov','Trudgill','Lesley Milroy','Cheshire'], answer: 2 },
      { q: 'Who conducted the New York department store study of /r/?', options: ['William Labov','Trudgill','Milroy','Petyt'], answer: 0 },
      { q: 'What is "overt prestige"?', options: ['Hidden prestige','Prestige attached to publicly valued standard forms','A type of accent','A form of slang'], answer: 1 },
      { q: 'What is "covert prestige"?', options: ['Official prestige','Hidden prestige attached to non-standard forms within a group','Only for writing','Only for RP'], answer: 1 },
      { q: 'What is a "sociolinguistic variable"?', options: ['A linguistic feature that varies systematically with social factors','A grammar rule','A formal register','A dictionary definition'], answer: 0 },
      { q: 'Which of these is a UK accent feature?', options: ['H-dropping in Cockney','Japanese tone marks','Mandarin tones','Greek letters'], answer: 0 },
      { q: 'Which of these is typical of Cockney?', options: ['T-glottalisation ("be\'er" for "better")','Use of French grammar','Use of Latin','Only RP vowels'], answer: 0 },
      { q: 'A North/South divide in UK English is often shown by which vowel split?', options: ['The "bath" / "trap" split','The German /ch/','Mandarin tones','Arabic script'], answer: 0 },
      { q: 'Who proposed the concept of "community of practice" for language variation?', options: ['Eckert and McConnell-Ginet','Lakoff','Skinner','Piaget'], answer: 0 },
    ],
    amber: [
      { q: 'Labov\'s New York department store study (1966) measured the frequency of which variable?', options: ['Post-vocalic /r/ across stores of different social prestige','Greek loanwords','Tone in Chinese','Mandarin particles'], answer: 0 },
      { q: 'What did Trudgill find about men and non-standard forms in Norwich?', options: ['Men under-reported standard usage','Men tended to use more non-standard forms and over-reported this use — covert prestige','Men always used RP','No difference'], answer: 1 },
      { q: 'Milroy\'s Belfast study argued that…', options: ['Network density predicts use of local vernacular forms','Only class matters','Only media matters','Only accent matters'], answer: 0 },
      { q: 'Howard Giles is associated with which theory?', options: ['Communication Accommodation Theory','Universal Grammar','Generative syntax','The deficit model'], answer: 0 },
      { q: 'Which term describes a speaker adjusting style TOWARDS the listener?', options: ['Convergence','Divergence','Diglossia','Creolisation'], answer: 0 },
      { q: 'Which term describes a speaker deliberately distancing their style FROM the listener?', options: ['Convergence','Divergence','Accommodation','Levelling'], answer: 1 },
      { q: 'Paul Kerswill is associated with research on…', options: ['Dialect levelling and MLE','Old English','Formal grammar only','Latin'], answer: 0 },
      { q: 'MLE stands for…', options: ['Modern Literary English','Multicultural London English','Mixed Latin English','Model Language Example'], answer: 1 },
      { q: 'Which of these is a feature of MLE?', options: ['Fronted GOOSE vowel; lexis from Caribbean, South Asian sources; "man" as indefinite pronoun','Only Latin lexis','Only French grammar','Only Old English forms'], answer: 0 },
      { q: 'Which of these is an example of "hypercorrection" (Labov)?', options: ['Lower-middle-class speakers over-producing a prestige form in careful speech','Dropping aspirates','Refusing standard forms','Using only local slang'], answer: 0 },
      { q: 'Bernstein proposed which controversial distinction?', options: ['Restricted and elaborated code','Active and passive voice','Phonemes and morphemes','Formal and informal'], answer: 0 },
      { q: 'Why is Bernstein\'s theory considered controversial?', options: ['It has been criticised for implying working-class speech is inherently deficient','It is universally accepted','It is about French','It is about spelling'], answer: 0 },
      { q: 'Jenny Cheshire\'s Reading study linked non-standard grammatical features to…', options: ['Age only','Peer-group membership in adolescent vernacular cultures','Only class','Only gender'], answer: 1 },
      { q: 'A "basilect" is…', options: ['A variety furthest from the prestige standard','An accent of the upper class','A formal register','A grammatical rule'], answer: 0 },
      { q: 'An "acrolect" is…', options: ['The variety closest to the prestige standard','A type of slang','A child variety','A regional dialect'], answer: 0 },
      { q: 'Which of these is an occupational lect?', options: ['Legal English with specialist jargon','Welsh','Cockney','Geordie'], answer: 0 },
      { q: 'What is "style-shifting"?', options: ['Writing in different fonts','A speaker adjusting their register / variety depending on context and audience','A morphological process','A cataloguing system'], answer: 1 },
      { q: 'Which term refers to the language of a particular profession or specialist group?', options: ['Jargon','Pidgin','Dialect','Patois'], answer: 0 },
      { q: 'Petyt\'s Bradford study found that…', options: ['H-dropping correlated with social class','Only accent mattered','No patterns were found','Accent has no social link'], answer: 0 },
      { q: 'Cheshire\'s research on adolescents showed that non-standard features served as markers of…', options: ['Covert prestige within peer groups','Overt prestige','Formality','Latinate register'], answer: 0 },
    ],
    red: [
      { q: 'Evaluate: "Standard English is objectively better than dialects." Which response is MOST linguistically accurate?', options: ['Yes — dialects have errors','No — all varieties are rule-governed; Standard English\'s status is social, not structural','Yes — Standard English is unchanging','No — Standard English is just a regional dialect'], answer: 1 },
      { q: 'Labov\'s finding that lower-middle-class speakers produced MORE prestige /r/ than upper-middle-class speakers in careful speech is known as…', options: ['Hypercorrection','Levelling','Divergence','Anti-language'], answer: 0 },
      { q: 'A top-band answer on UK regional variation integrates…', options: ['Multiple named studies (Labov, Trudgill, Milroy, Cheshire) with concepts of prestige, network and identity','Only one theorist','Only an accent description','Only one example'], answer: 0 },
      { q: 'Evaluate the claim: "Dialect levelling is destroying UK regional diversity."', options: ['Fully agree','Mixed: levelling is real (Kerswill) but new varieties (MLE) emerge; regional identity persists in other ways','Fully disagree','Dialects never change'], answer: 1 },
      { q: 'Why is network density (Milroy) considered a stronger predictor than class in some studies?', options: ['It identifies who actually talks with whom — explaining why close-knit groups retain vernacular features even across class','Class is irrelevant','Networks only apply to children','It cannot be measured'], answer: 0 },
      { q: 'A 30-year-old professional from Yorkshire uses /ʊ/ (the Northern short vowel) in "bath" at home but /ɑː/ (the Southern vowel) in meetings. What is happening?', options: ['Style-shifting / accommodation — register-sensitive variation','Random noise','Loss of identity','Only Labov'], answer: 0 },
      { q: 'Eckert and McConnell-Ginet\'s "community of practice" approach shifts the field from…', options: ['Static class/gender categories to shared practice and repertoires','Social class to biological sex','Identity to neurology','Meaning to grammar alone'], answer: 0 },
      { q: 'Labov\'s Martha\'s Vineyard study (1963) linked centralised diphthongs to…', options: ['Identity: islanders who wanted to distance themselves from mainland visitors centralised more','Class only','Age only','Ethnicity only'], answer: 0 },
      { q: 'Why does the "deficit" reading of Bernstein\'s codes face criticism?', options: ['Because Labov\'s work shows vernacular varieties are rule-governed; treating working-class speech as deficient conflates social judgement with linguistic fact','Because Bernstein invented nothing','Because codes are fixed','Because only AAVE matters'], answer: 0 },
      { q: 'What distinguishes a SOPHISTICATED treatment of "Standard English" in an A-level answer?', options: ['Recognition that Standard English is a DIALECT (lexis + grammar) distinct from RP (accent), and that its status is sociohistorical rather than natural','Treating it as the only correct form','Treating it as an accent','Treating it as universal'], answer: 0 },
    ],
  },

};
