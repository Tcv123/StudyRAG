/*
 * AQA A-Level English Language (7702) — Diagnostic MCQ Bank
 * 50 questions per topic: 20 green (recall/basic), 20 amber (application), 10 red (analysis/evaluate)
 * Diagnostic picks 2 green + 2 amber + 1 red = 5 questions at random, one of which is a written Q pulled from english-aqa-written.js
 * answer: 0-based index of correct option.
 */

const ENGLISH_AQA_QUESTIONS = {

  /* ─────────────────────────────────────────────────────────── 1.1 */
  '1.1': {
    name: 'Methods of Language Analysis',
    green: [
      { q: 'What does the term "lexis" refer to in linguistics?', options: ['Sentence structure','The vocabulary / words of a language','The sounds of a language','Punctuation and layout'], answer: 1 },
      { q: 'Which level of language analysis deals with the study of speech sounds?', options: ['Graphology','Phonetics','Lexis','Pragmatics'], answer: 1 },
      { q: 'What is "graphology"?', options: ['The study of handwriting as a personality test','The visual appearance / layout of a text','The study of word origins','The analysis of verb forms'], answer: 1 },
      { q: 'What does "semantics" study?', options: ['The order of words in a sentence','The meaning conveyed by words and phrases','Speech sounds','The pitch of spoken language'], answer: 1 },
      { q: 'Which framework deals with how context shapes the meaning of an utterance?', options: ['Syntax','Graphology','Pragmatics','Morphology'], answer: 2 },
      { q: 'What does "morphology" examine?', options: ['How words are built from smaller units (morphemes)','Speech sounds','The visual design of a text','Paragraph structure'], answer: 0 },
      { q: 'Which term refers to the study of how sentences are constructed from words and phrases?', options: ['Phonology','Syntax','Lexis','Discourse'], answer: 1 },
      { q: 'What are "prosodic features"?', options: ['Features of handwriting','Features of stress, intonation and rhythm in speech','Types of punctuation','Rhyme schemes'], answer: 1 },
      { q: 'Which of the following is a bound morpheme?', options: ['"dog"','"run"','"-ing"','"car"'], answer: 2 },
      { q: 'What is a phoneme?', options: ['A written letter','The smallest unit of sound that distinguishes meaning','A sentence fragment','A paragraph break'], answer: 1 },
      { q: 'Which of these is an example of a declarative sentence?', options: ['"Shut the door."','"Is the door shut?"','"The door is shut."','"What a slam!"'], answer: 2 },
      { q: 'What is an "interrogative"?', options: ['A statement','A question','A command','An exclamation'], answer: 1 },
      { q: 'An imperative sentence is one that…', options: ['Asks a question','Gives a command or instruction','States a fact','Expresses surprise'], answer: 1 },
      { q: 'What is "discourse" in linguistic analysis?', options: ['Only spoken language','Language beyond the level of the sentence — extended written or spoken communication','Only written essays','The study of accents'], answer: 1 },
      { q: 'Which of these is an example of a noun phrase?', options: ['"is running"','"the small black cat"','"very quickly"','"however"'], answer: 1 },
      { q: 'What is a modal auxiliary verb?', options: ['A main verb like "run"','A verb that expresses possibility, obligation or necessity (e.g. can, might, must)','A verb in the past tense','An imperative form'], answer: 1 },
      { q: 'A compound sentence contains…', options: ['One main clause only','Two or more main clauses joined by a coordinating conjunction','A main clause and a subordinate clause','Only subordinate clauses'], answer: 1 },
      { q: 'A complex sentence contains…', options: ['Only main clauses','At least one main clause and one subordinate clause','Only subordinate clauses','No verbs'], answer: 1 },
      { q: 'Which of these is a coordinating conjunction?', options: ['"although"','"because"','"and"','"whereas"'], answer: 2 },
      { q: 'What does "register" refer to?', options: ['How loud a speaker is','The level of formality and vocabulary choice appropriate to a context','A type of punctuation','A dialect'], answer: 1 },
    ],
    amber: [
      { q: 'In the word "unhappiness", how many morphemes are there?', options: ['One','Two','Three','Four'], answer: 2 },
      { q: 'Which term describes the implied meaning of a word beyond its dictionary definition?', options: ['Denotation','Connotation','Hyponym','Morpheme'], answer: 1 },
      { q: 'An adjacency pair in a conversation is…', options: ['Two people sitting together','A two-part exchange such as question–answer or greeting–greeting','Any two sentences placed next to each other','A pair of adjectives'], answer: 1 },
      { q: 'What is "deixis"?', options: ['A type of metaphor','Words whose meaning depends on context, e.g. "here", "now", "this"','The study of speech sounds','The oldest form of English'], answer: 1 },
      { q: 'Grice\'s Maxim of Quantity advises speakers to…', options: ['Say as much as possible','Give the right amount of information — not too little, not too much','Always tell the truth','Speak only when spoken to'], answer: 1 },
      { q: 'Which maxim of Grice\'s Cooperative Principle concerns truthfulness?', options: ['Quantity','Quality','Relation','Manner'], answer: 1 },
      { q: 'The "Manner" maxim advises speakers to…', options: ['Be polite','Avoid obscurity and ambiguity; be brief and orderly','Tell the truth','Answer every question'], answer: 1 },
      { q: 'An utterance such as "Could you pass the salt?" is best classified as a…', options: ['Direct imperative','Indirect speech act','Declarative statement of fact','Exclamation'], answer: 1 },
      { q: 'Brown and Levinson\'s politeness theory distinguishes between…', options: ['High and low register','Positive face and negative face','Active and passive voice','Formal and informal grammar'], answer: 1 },
      { q: 'A "hedge" in discourse is a word or phrase that…', options: ['Adds certainty','Softens or shows tentativeness, e.g. "sort of", "I think"','Marks the end of a sentence','Denotes a rhyme scheme'], answer: 1 },
      { q: 'Which of these is a discourse marker?', options: ['"table"','"well"','"happy"','"under"'], answer: 1 },
      { q: 'The "passive voice" of "The dog chased the cat" is…', options: ['"The dog is chasing the cat"','"The cat was chased by the dog"','"The cat chases the dog"','"Chasing the cat, the dog ran"'], answer: 1 },
      { q: 'In Labov\'s narrative model, the "orientation" stage…', options: ['Resolves the story','Gives background information — who, where, when','Evaluates the events','Ends the narrative'], answer: 1 },
      { q: 'Which term describes the study of how groups of words form ideas together (e.g. semantic fields)?', options: ['Morphology','Semantics','Phonology','Graphology'], answer: 1 },
      { q: 'A "synonym" of "brave" could be…', options: ['"cowardly"','"courageous"','"silent"','"tall"'], answer: 1 },
      { q: 'The "phatic" function of language refers to…', options: ['Passing on information','Maintaining social relationships (e.g. "How are you?")','Giving orders','Describing objects'], answer: 1 },
      { q: 'Halliday\'s "ideational" function of language is concerned with…', options: ['Social relationships','Expressing ideas and representing experience','Grammatical accuracy','Politeness'], answer: 1 },
      { q: 'An "ellipsis" in spoken discourse is…', options: ['A three-dot punctuation mark only','The omission of words that are understood from context','A type of repetition','A formal register'], answer: 1 },
      { q: 'An "adjacency pair" such as "Hi" / "Hello" is an example of…', options: ['A phatic exchange','A transactional exchange about goods','An interrogative','A complex sentence'], answer: 0 },
      { q: 'The term "idiolect" refers to…', options: ['A regional accent','The language variety distinctive to an individual','A slang term','A formal register'], answer: 1 },
    ],
    red: [
      { q: 'A text uses short, simple sentences, colloquial lexis and rhetorical questions. Which function is most likely dominant?', options: ['Transactional — passing information clearly','Interpersonal — building rapport with an audience','Referential — naming objects in the world','Metalinguistic — talking about language itself'], answer: 1 },
      { q: 'Which of these would be the BEST evidence that a text is using the "conative" (persuasive) function?', options: ['Imperatives, direct address, modal "should"','Technical jargon and complex noun phrases','Colloquial hedges and discourse markers','Archaic lexis and passive constructions'], answer: 0 },
      { q: 'A speaker says "You know, I was kind of, like, not really sure?". Which analytical framework is MOST relevant?', options: ['Only semantics','Pragmatics + prosodics (features show hedging and uptalk)','Only graphology','Only morphology'], answer: 1 },
      { q: 'Why is "context" essential when applying pragmatic analysis?', options: ['It isn\'t — pragmatics works from the words alone','Because meaning depends on the relationship between speakers, situation and shared knowledge','Because context changes the dictionary definitions of words','Because it determines spelling'], answer: 1 },
      { q: 'Evaluate: "Grammatical complexity is always a sign of formal, high-status writing." Is this fully correct?', options: ['Yes — complex sentences signal formality','No — complex structures occur in conversation too; simple sentences can be rhetorically powerful in formal writing (e.g. speeches)','Yes — the reverse is also true','No — grammar has no relationship to register'], answer: 1 },
      { q: 'A child says "mouses" instead of "mice". Which morphological process explains this?', options: ['Suppletion','Virtuous error / overgeneralisation of the regular plural morpheme "-s"','Compounding','Borrowing'], answer: 1 },
      { q: 'In the sentence "The man who was wearing a hat left quickly", what is "who was wearing a hat"?', options: ['A main clause','A subordinate (relative) clause','A noun phrase','A prepositional phrase'], answer: 1 },
      { q: 'Which feature is MOST characteristic of spontaneous spoken discourse?', options: ['Passive constructions and Latinate vocabulary','Non-fluency features (fillers, false starts), discourse markers and ellipsis','Subheadings and bullet points','Heavy use of subordination and nominalisation'], answer: 1 },
      { q: 'The term "graphological foregrounding" means…', options: ['Writing in a foreign language','Using layout, typography or colour to draw the reader\'s attention to specific parts of a text','Making a text easier to read','Removing all images'], answer: 1 },
      { q: 'Why do examiners expect candidates to integrate multiple frameworks (e.g. lexis + grammar + pragmatics) rather than analyse them in isolation?', options: ['It saves time','Because meaning emerges from the interaction between levels — looking at one without the others gives only a partial explanation','It isn\'t expected','Because examiners enjoy long answers'], answer: 1 },
    ],
  },

};
