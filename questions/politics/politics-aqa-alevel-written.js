/*
 * AQA A-Level Politics (7152) — Written / Short-Answer Question Bank
 * Keyed by paper-prefixed topic id (1.1–1.10, 2.1–2.14, 3.1–3.8).
 * Each entry: { green: [], amber: [], red: [] } of { q, marks, tier, modelAnswer }.
 * 10 questions per topic: 4 green + 4 amber + 2 red.
 *
 * Tariffs. AQA 7152 papers carry only 9-mark and 25-mark questions. A 25-mark
 * essay is not self-markable inside a 5-question diagnostic, so the diagnostic
 * tiers are 3 / 6 / 9, with red using the authentic 9-mark "explain and analyse
 * three..." tariff. The real 9s and 25s carry in the practice bank and the
 * mark-scheme data, not here.
 *   green — 3 marks, define / identify
 *   amber — 6 marks, explain
 *   red   — 9 marks, explain and analyse three points (AQA tariff)
 *
 * Student self-marks against the model answer: Full / Partial / Missed.
 */

const POLITICS_AQA_WRITTEN = {

  /* ── 1.1 The Constitution ──────────────────────────────────── */
  '1.1': {
    green: [
      {
        q: 'Define the term "uncodified constitution" and identify two sources of the UK constitution.',
        marks: 3, tier: 'green',
        modelAnswer: `• An uncodified constitution is one that is not collected into a single authoritative legal document. Its rules are drawn from several separate sources and carry no special legal status above ordinary law.\n• Any two of: statute law (e.g. the Human Rights Act 1998); common law (judge-made precedent and the royal prerogative); constitutional conventions (e.g. the Salisbury Convention); works of authority (e.g. Erskine May); and, prior to 2020, EU law and treaties.`
      },
      {
        q: 'Explain what is meant by parliamentary sovereignty.',
        marks: 3, tier: 'green',
        modelAnswer: `• Parliament is the supreme law-making body in the UK: it may make or unmake any law whatever.\n• No other body — including the courts — may override or set aside an Act of Parliament.\n• No Parliament may bind its successors, so any statute can be repealed by a later simple majority. This is why the UK constitution is unentrenched.`
      },
      {
        q: 'Define the term "constitutional convention" and give one example.',
        marks: 3, tier: 'green',
        modelAnswer: `• A convention is an unwritten rule of political practice that is regarded as binding by those who operate the constitution, but which is not legally enforceable in the courts.\n• Example (any one): the Salisbury Convention, under which the Lords does not block manifesto commitments; the convention that the monarch grants royal assent; the Sewel Convention on devolved consent; collective cabinet responsibility.`
      },
      {
        q: 'Identify three constitutional reforms introduced since 1997 and state the effect of each.',
        marks: 3, tier: 'green',
        modelAnswer: `Any three of:\n• Human Rights Act 1998 — incorporated the ECHR into UK law, allowing rights cases to be heard domestically.\n• Scotland Act 1998 / Government of Wales Act 1998 — created devolved legislatures, dispersing power from Westminster.\n• House of Lords Act 1999 — removed all but 92 hereditary peers, making the Lords largely appointed.\n• Constitutional Reform Act 2005 — created the UK Supreme Court and reformed the office of Lord Chancellor, sharpening the separation of powers.\n• Fixed-term Parliaments Act 2011 (repealed 2022) — briefly removed the PM's power to call an early election.`
      },
    ],
    amber: [
      {
        q: 'Explain why the UK constitution is described as flexible, and explain one consequence of that flexibility.',
        marks: 6, tier: 'amber',
        modelAnswer: `Why it is flexible:\n• Because it is uncodified and unentrenched, constitutional law has no higher legal status than ordinary law. It can be changed by a simple Act of Parliament, needing only a Commons majority — no supermajority, no referendum requirement, no separate amendment procedure.\n• Much of it rests on convention, which can change through practice alone without any legislation at all.\n\nA consequence (either direction credited):\n• Adaptability — the constitution can respond quickly to changed circumstances. Devolution in 1998 and the creation of the Supreme Court in 2005 were achieved through ordinary legislation within a single parliamentary term.\n• Or: weak protection — rights and institutions have no secure status. The Fixed-term Parliaments Act was passed in 2011 and repealed in 2022; the Human Rights Act could be repealed by the same simple majority that created it. Critics argue this leaves the citizen dependent on executive restraint rather than legal guarantee.`
      },
      {
        q: 'Explain the significance of the Human Rights Act 1998 for the UK constitution.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Incorporation — the Act brought the European Convention on Human Rights into domestic law, so claimants can enforce Convention rights in UK courts rather than travelling to Strasbourg. This made rights protection far more accessible.\n• Interpretive duty — section 3 requires courts to read legislation compatibly with Convention rights "so far as it is possible to do so", which has substantially shaped statutory interpretation.\n• Declarations of incompatibility — under section 4, where compatible reading is impossible, a senior court may declare a statute incompatible. Crucially the statute remains valid law; only Parliament can amend it.\n• Preserved sovereignty — this design was a deliberate compromise. The courts gain the power to identify a rights violation publicly and generate political pressure, while Parliament formally retains the last word. The Act is therefore significant precisely because it strengthened rights without entrenching them.`
      },
      {
        q: 'Explain two arguments in favour of codifying the UK constitution.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Clarity and accessibility — a single authoritative document would make the rules of the political system knowable to citizens. At present the constitution is scattered across statute, common law, convention and works of authority, and conventions in particular are contested precisely because they are unwritten. Disputes such as the 2019 prorogation turned on rules nobody could point to in a single text.\n• Protection of rights and institutions — codification would normally be accompanied by entrenchment, requiring a special procedure to amend. This would protect rights and devolved institutions from removal by a temporary Commons majority. Supporters argue the current position — where the Human Rights Act is as vulnerable as any ordinary statute — offers no real guarantee.\n• Also creditable: constraining an over-mighty executive; clarifying the devolution settlement; giving the judiciary a clear standard against which to review government action.`
      },
      {
        q: 'Explain how the royal prerogative operates in the modern UK constitution.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Definition — the prerogative comprises the residual powers historically belonging to the Crown, now exercised in practice by ministers and the Prime Minister rather than by the monarch personally.\n• Scope — it covers deploying the armed forces, making and ratifying treaties, granting honours, appointing and dismissing ministers, and (since the 2022 repeal of the Fixed-term Parliaments Act) requesting an early dissolution of Parliament.\n• Significance — because prerogative powers require no statutory authority, they allow the executive to act without prior parliamentary approval, which critics identify as a major source of executive dominance.\n• Constraints — the prerogative has been narrowed by both convention and the courts. A convention has developed since 2003 that the Commons is consulted before military action. In Miller I (2017) the Supreme Court held the prerogative could not be used to remove rights conferred by statute; in Miller II (2019) it held prorogation justiciable where it frustrates Parliament's functions.`
      },
    ],
    red: [
      {
        q: 'Explain and analyse three ways in which the UK constitution has been reformed since 1997.',
        marks: 9, tier: 'red',
        modelAnswer: `• Devolution — the Scotland Act 1998, Government of Wales Act 1998 and Northern Ireland Act 1998 created legislatures with primary law-making powers, extended by the Scotland Acts 2012 and 2016 and the Wales Act 2017. Analysis: this dispersed power away from Westminster and produced genuine policy divergence (tuition fees, prescription charges), leading some to describe the UK as quasi-federal. But because Westminster legally retains the power to amend or abolish these bodies, the reform disperses power without dividing sovereignty — so its depth rests on political rather than legal entrenchment.\n• Rights protection — the Human Rights Act 1998 incorporated the ECHR domestically, with the section 4 declaration of incompatibility as its central mechanism. Analysis: this significantly strengthened the judiciary's constitutional role and made rights litigation practicable, but stopped deliberately short of entrenchment. The HRA remains repealable by simple majority, and successive governments have proposed replacing it, which shows the limits of reform within a sovereign-Parliament framework.\n• Judicial and institutional reform — the Constitutional Reform Act 2005 created the UK Supreme Court, removed the Law Lords from the legislature and stripped the Lord Chancellor of the role of head of the judiciary; the House of Lords Act 1999 removed most hereditary peers. Analysis: these sharpened the separation of powers and improved the Lords' perceived legitimacy, making it markedly more willing to challenge the Commons. But Lords composition remains wholly unelected and the Commons electoral system was left untouched, illustrating the piecemeal character of the whole reform programme.`
      },
      {
        q: 'Explain and analyse three arguments against codifying the UK constitution.',
        marks: 9, tier: 'red',
        modelAnswer: `• Loss of flexibility — an uncodified constitution adapts through ordinary legislation and evolving convention, allowing rapid response to changed circumstances. Analysis: devolution and the Supreme Court were delivered within single parliamentary terms; a codified, entrenched text would require special amendment procedures. Critics point to the difficulty of amending the US Constitution, which has been amended only 27 times and retains provisions widely regarded as obsolete. The counter is that flexibility and instability are the same property viewed differently.\n• Transfer of power to unelected judges — codification requires a supreme court to interpret the text and strike down incompatible legislation. Analysis: this shifts contested political questions from elected politicians to appointed judges. Given the controversy already generated by Miller I and Miller II, where the courts merely policed the limits of prerogative power, a strike-down power would place the judiciary at the centre of every major political dispute and expose it to pressure over appointments, as in the USA.\n• Practical and democratic difficulty — there is no agreed process for drafting a UK constitution and no consensus on its content. Analysis: any codification would have to settle deeply contested questions — the Lords, the electoral system, the status of the devolved nations, the monarchy — simultaneously, and would need legitimation by referendum. The UK's existing arrangements command working acceptance, and defenders argue that a settlement imposed by whichever party happened to hold a majority would enjoy less legitimacy than the organic arrangements it replaced.`
      },
    ]
  },

  /* ── 1.2 Parliament ────────────────────────────────────────── */
  '1.2': {
    green: [
      {
        q: 'Identify the main stages a public bill passes through in the House of Commons.',
        marks: 3, tier: 'green',
        modelAnswer: `• First reading — formal introduction; no debate.\n• Second reading — debate on the general principles of the bill, followed by a vote.\n• Committee stage — detailed, clause-by-clause scrutiny by a public bill committee, where amendments are proposed.\n• Report stage — the amended bill is reported back to the whole House, which may amend further.\n• Third reading — final debate and vote on the bill as amended.\nThe bill then passes to the Lords, and any disagreement is resolved through "ping-pong" before royal assent.`
      },
      {
        q: 'Define the term "select committee" and state one of its powers.',
        marks: 3, tier: 'green',
        modelAnswer: `• A select committee is a permanent cross-party committee of backbench MPs that scrutinises the work, spending and policy of a particular government department, or a cross-cutting issue.\n• Powers (any one): to summon witnesses, including ministers and civil servants, and to require the production of documents; to take oral and written evidence in public; to publish reports with recommendations, to which the government must respond within 60 days.\n• Since the Wright reforms of 2010, chairs are elected by secret ballot of the whole House, strengthening their independence from the whips.`
      },
      {
        q: 'State three functions of Parliament.',
        marks: 3, tier: 'green',
        modelAnswer: `Any three of:\n• Legislative — debating, amending and passing statute law.\n• Scrutiny — holding the executive to account through questions, select committees and debates.\n• Representation — MPs representing constituents' interests and grievances, and the House as a whole reflecting national opinion.\n• Legitimation — giving formal democratic consent to government decisions, including taxation and (by convention) military action.\n• Recruitment — providing the pool from which ministers are drawn.`
      },
      {
        q: 'Define the term "parliamentary privilege" and identify one of its elements.',
        marks: 3, tier: 'green',
        modelAnswer: `• Parliamentary privilege is the set of legal immunities enjoyed by each House and its members, which exist to allow Parliament to carry out its functions without outside interference.\n• Elements (any one): freedom of speech in parliamentary proceedings, protected by Article 9 of the Bill of Rights 1689, meaning members cannot be sued for defamation over anything said in the House; exclusive cognisance, the right of each House to regulate its own internal affairs and discipline its own members without interference from the courts.`
      },
    ],
    amber: [
      {
        q: 'Explain why select committees are often regarded as more effective at scrutiny than public bill committees.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Permanence and expertise — select committee members serve for the duration of a Parliament and develop genuine specialist knowledge of a department. Public bill committee membership is temporary, appointed for one bill, so members rarely acquire comparable expertise.\n• Independence from the whips — since the Wright reforms of 2010, select committee chairs are elected by secret ballot of the whole House and members by their parties' backbenchers. Public bill committees are still effectively appointed by the whips and are constructed to reflect the government's majority, so they seldom amend a bill against the government's wishes.\n• Evidence-gathering powers — select committees take oral evidence in public from ministers, officials and outside experts, generating media attention and an evidential record. The Commons Treasury and Home Affairs committees have forced significant policy change and resignations in this way.\n• Cross-party working — select committees usually aim for unanimous reports, which carry greater authority than a partisan division would.\n• Limits worth noting: select committees cannot compel a government to act, and their recommendations are frequently rejected.`
      },
      {
        q: 'Explain two ways in which the House of Lords can influence legislation.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Delay — under the Parliament Acts 1911 and 1949 the Lords may delay a non-money public bill for up to one year (one month for money bills). Although the Commons can ultimately override this, the threat of delay late in a parliamentary session is a real source of leverage, because a government short of time may prefer to concede an amendment than lose the bill.\n• Amendment and "ping-pong" — the Lords routinely amends bills and returns them to the Commons. Governments are frequently defeated in the Lords and often accept amendments or offer compromise concessions rather than prolong the exchange. Since the House of Lords Act 1999 removed most hereditary peers, no single party has held a Lords majority, and the chamber's greater perceived legitimacy has made it markedly more willing to press its objections.\n• Scrutiny and expertise — peers include former ministers, senior judges, scientists and other specialists who are not subject to constituency or re-election pressures, so Lords committee scrutiny is often more forensic and less partisan than the Commons'.\n• Constraints: the Salisbury Convention discourages blocking manifesto commitments, and the Lords' unelected status limits how far it can press a disagreement.`
      },
      {
        q: 'Explain how the party whip system limits the effectiveness of parliamentary scrutiny.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Voting discipline — whips instruct members how to vote, with a three-line whip treated as binding. Because most MPs owe their seat substantially to their party label, and because rebellion risks deselection and the loss of preferment, the great majority vote with their party the overwhelming majority of the time.\n• The payroll vote — around a hundred MPs hold ministerial or parliamentary private secretary posts and are bound by collective responsibility to support the government or resign. This is a substantial bloc of guaranteed government votes drawn from the very people best placed to scrutinise.\n• Career incentives — whips advise on promotion, so an ambitious backbencher has strong reasons to avoid being seen as troublesome. This dampens critical questioning as well as rebellious voting.\n• Control of the timetable — the government, working through the whips and the usual channels, controls most of the parliamentary agenda, determining what is debated and for how long.\n• Counter-point worth crediting: whipping has weakened. Rebellions have grown more frequent since the 1990s, and governments with small majorities — such as May's after 2017 — can be repeatedly defeated, so the credible threat of rebellion now forces pre-emptive concessions.`
      },
      {
        q: 'Explain what is meant by the "elective dictatorship" thesis.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Origin — the phrase was coined by Lord Hailsham in 1976 to describe what he saw as the absence of effective constitutional limits on a UK government between elections.\n• The argument — a government that commands a disciplined majority in the Commons controls the legislative timetable, can rely on the payroll vote and the whips to pass its programme, and faces a second chamber that can only delay. Because Parliament is sovereign, there is no codified constitution or entrenched bill of rights against which its legislation can be measured, and no court may strike an Act down.\n• Reinforcing factors — the first-past-the-post electoral system regularly manufactures large majorities from a minority of the popular vote, and prerogative powers allow significant executive action without prior parliamentary authority.\n• Counter-arguments — the thesis fits large-majority governments far better than small-majority ones. Since 1997, devolution, the Human Rights Act and an expanded judicial review have all constrained the executive, the Lords has grown more assertive, and backbench rebellion has become routine. Critics of Hailsham argue the thesis describes a particular political configuration rather than a permanent constitutional condition.`
      },
    ],
    red: [
      {
        q: 'Explain and analyse three ways in which the House of Commons holds the executive to account.',
        marks: 9, tier: 'red',
        modelAnswer: `• Select committees — departmental select committees take evidence from ministers and officials in public, publish reports and require a government response within 60 days. Analysis: the Wright reforms of 2010 made chairs elected by the whole House, substantially increasing their independence from the whips, and high-profile inquiries have forced resignations and policy reversals. The limit is that committees hold no power to compel action; governments routinely reject recommendations, so influence depends on publicity and reputational pressure rather than formal sanction.\n• Questions and debates — Prime Minister's Questions, departmental question times, urgent questions and opposition day debates require ministers to defend policy on the floor of the House. Analysis: the Speaker's increasing willingness to grant urgent questions since 2009 has forced ministers to the despatch box at short notice, which is a genuine strengthening. However PMQs is widely criticised as theatrical, rewarding soundbites over forensic questioning, and opposition day motions are not binding — governments have simply abstained on and then ignored them.\n• Confidence and the threat of rebellion — the Commons can remove a government through a vote of no confidence, and individual legislation can be defeated or amended by backbench rebellion. Analysis: this is the ultimate sanction but is rarely used; the last successful no-confidence vote was in 1979. Its practical significance lies in the credible threat, which forces governments to make concessions in advance. Its force depends entirely on majority size: May's government after 2017 suffered historic defeats, while a government with a large majority faces little real risk.`
      },
      {
        q: 'Explain and analyse three arguments for reforming the House of Lords.',
        marks: 9, tier: 'red',
        modelAnswer: `• Democratic legitimacy — no member of the Lords is elected, yet the chamber amends and delays legislation passed by elected representatives. Analysis: this is the central argument, and it is a strong one in principle. But it cuts both ways. Precisely because peers are unelected, they exercise restraint under the Salisbury Convention and the Parliament Acts; an elected chamber would claim a rival mandate, and reformers must explain how Commons primacy would survive. The 2012 reform bill collapsed largely on this point.\n• Size and appointment — the Lords has over 800 members, making it one of the largest legislative chambers in the world, and appointments remain effectively in the Prime Minister's gift. Analysis: this creates clear patronage concerns, with recurring controversy over appointments to donors and political allies, and no cap on numbers means each PM can appoint to correct an unfavourable balance. A statutory appointments commission and a size cap would address this without the difficulties of full election, which is why incremental reform of this kind attracts broader support.\n• Composition and representation — the chamber remains unrepresentative in age, region and background, and 26 Church of England bishops sit by right, which is hard to justify in a diverse and largely secular society. Analysis: this weakens the claim that appointment secures a genuinely expert and balanced chamber. The counter-argument is that the Lords' expertise is real and demonstrable — former ministers, judges, scientists and clinicians contribute specialist scrutiny that a wholly elected chamber, selected by party machines on electoral appeal, would be unlikely to reproduce.`
      },
    ]
  },

  /* ── 1.3 Prime Minister and Cabinet ────────────────────────── */
  '1.3': {
    green: [
      {
        q: 'Define the term "collective ministerial responsibility".',
        marks: 3, tier: 'green',
        modelAnswer: `• Collective responsibility is the convention that all members of the government are bound by decisions taken collectively in cabinet.\n• Ministers must publicly support government policy, whatever their private view, and cabinet discussions remain confidential.\n• A minister who cannot support a decision is expected to resign from the government in order to criticise it. It has occasionally been suspended, as during the 1975 and 2016 EU referendums.`
      },
      {
        q: 'Identify three powers of the Prime Minister.',
        marks: 3, tier: 'green',
        modelAnswer: `Any three of:\n• Patronage — appointing, promoting, reshuffling and dismissing ministers, and recommending peerages and honours.\n• Chairing cabinet and controlling its agenda, membership and committee structure.\n• Directing government policy and acting as the public face of the government at home and abroad.\n• Exercising prerogative powers, including deploying the armed forces and (since the 2022 repeal of the Fixed-term Parliaments Act) requesting an early general election.\n• Leading the governing party in Parliament and the country.`
      },
      {
        q: 'Define the term "individual ministerial responsibility" and state one circumstance in which a minister might be expected to resign.',
        marks: 3, tier: 'green',
        modelAnswer: `• Individual ministerial responsibility is the convention that ministers are personally accountable to Parliament for their own conduct and for the policies and administration of their department.\n• Grounds for resignation (any one): serious personal misconduct or breach of the Ministerial Code; misleading Parliament; a major policy failure for which the minister was personally responsible.\n• In practice the convention has weakened, as ministers increasingly distinguish policy failures from operational ones and attribute the latter to agencies or officials.`
      },
      {
        q: 'Define the term "special adviser" and state one way they differ from civil servants.',
        marks: 3, tier: 'green',
        modelAnswer: `• A special adviser (SpAd) is a temporary political appointee, chosen personally by a minister, who provides policy and media advice from a partisan standpoint.\n• Differences (any one): SpAds are exempt from the civil service requirement of political impartiality; they are appointed directly by ministers rather than through open competition; their appointment ends when the appointing minister leaves office.\n• Their growth is often cited as evidence of the personalisation of government and of the sidelining of the permanent civil service.`
      },
    ],
    amber: [
      {
        q: 'Explain two factors that determine how much power a Prime Minister can exercise.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Size of the parliamentary majority — this is the single most important variable. A large majority means legislation passes reliably and small groups of rebels can be ignored, as with Blair after 1997 or Johnson after 2019. A small or absent majority hands veto power to factions: May's government after 2017 suffered the largest Commons defeat in modern history and could not pass its central policy.\n• Party unity and personal authority — a Prime Minister governs by consent of their parliamentary party. Where the party is united behind them, patronage and the whips deliver near-automatic support; where it is factionalised, authority drains quickly. Thatcher in 1990 and Johnson in 2022 both retained substantial formal powers while losing office, because cabinet and backbench support collapsed.\n• Also creditable: standing in the opinion polls and a reputation for winning elections; the economic and external context, since crises can enhance authority (the Falklands) or destroy it (the 1992 ERM crisis); the calibre and ambition of senior cabinet colleagues, particularly the Chancellor; and the length of time in office, as authority typically erodes over a long premiership.`
      },
      {
        q: 'Explain the argument that the office of Prime Minister has become "presidential".',
        marks: 6, tier: 'amber',
        modelAnswer: `• Personalised mandate — election campaigns are increasingly fought around party leaders, with televised leaders' debates since 2010 encouraging voters to treat the choice as one between individuals rather than parties. Prime Ministers therefore claim a personal mandate that earlier holders of the office did not.\n• Bilateralism and the sidelining of cabinet — Prime Ministers increasingly settle policy in bilateral meetings with the relevant minister, or in small ad hoc groups, presenting cabinet with decisions for ratification. Blair's "sofa government" is the standard example, and full cabinet meetings have become shorter and less deliberative.\n• Growth of the centre — the expansion of the Prime Minister's Office, the Cabinet Office and the number of special advisers has given Number 10 an independent policy and communications capacity resembling a presidential executive office.\n• Spatial leadership and foreign policy — Prime Ministers increasingly present themselves as standing above their party, and the dominance of foreign and security policy, exercised largely through the prerogative, reinforces a head-of-state style.\n• Counter-argument worth crediting: the analogy is imperfect, because a Prime Minister holds office only while commanding party and cabinet support and can be removed at any moment without an election — a constraint no president faces.`
      },
      {
        q: 'Explain why the convention of individual ministerial responsibility has weakened.',
        marks: 6, tier: 'amber',
        modelAnswer: `• The policy/operational distinction — since the creation of executive agencies under the Next Steps programme from 1988, ministers have distinguished policy, for which they accept responsibility, from operational delivery, which they attribute to agency chief executives or officials. The resignation of the Home Secretary over the 1995 prison escapes was resisted on precisely this basis.\n• Scale of departments — modern departments are so large that it is widely accepted a minister cannot know of every failing, which makes resignation for departmental error look disproportionate rather than principled.\n• Prime ministerial protection — whether a minister resigns now depends heavily on whether the Prime Minister is willing to expend political capital defending them. Ministers with strong factional support survive errors that weaker colleagues do not, so outcomes track political calculation rather than the gravity of the failure.\n• Media and party dynamics — resignations are now driven more by whether a story persists in the press and whether backbenchers withdraw support than by any settled constitutional standard.\n• Qualification: the convention retains force over personal conduct and over misleading Parliament, where resignations remain relatively common.`
      },
      {
        q: 'Explain two ways in which the cabinet can constrain the Prime Minister.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Withdrawal of support — the cabinet's collective consent is what sustains a premiership. When senior ministers resign together or tell a Prime Minister privately that they have lost confidence, the position becomes untenable. Thatcher resigned in 1990 after canvassing her cabinet individually, and Johnson resigned in 2022 after more than fifty resignations from his government in two days.\n• Senior rivals with independent power bases — a Chancellor or other major figure with their own following in the party constrains what a Prime Minister can attempt. The Blair–Brown relationship is the standard example, where Treasury control of spending allocations across every department gave Brown effective leverage over domestic policy.\n• Collective responsibility as a two-way bargain — the convention binds ministers to support decisions, but this also gives them a legitimate claim to be consulted before decisions are taken. Ministers who feel bypassed can leak, brief against colleagues or threaten resignation, all of which damage a Prime Minister's authority.\n• Qualification: these constraints are political rather than constitutional, and they bite hardest when a Prime Minister is already weakened. A Prime Minister with a large majority and a united party can dominate cabinet almost completely.`
      },
    ],
    red: [
      {
        q: 'Explain and analyse three factors that affect the relationship between the Prime Minister and the cabinet.',
        marks: 9, tier: 'red',
        modelAnswer: `• The size of the government's majority — this shapes everything else. Analysis: with a large majority, a Prime Minister can dismiss dissenting ministers knowing the legislative programme is safe, so cabinet becomes largely a ratifying body, as under Blair after 1997. With a small majority, cabinet members representing particular factions hold effective veto power, because their resignation could bring the government down. May's cabinet after 2017 repeatedly forced changes to Brexit policy for exactly this reason. The formal powers of the office are identical in both cases; the political context determines whether they can be used.\n• Prime ministerial style and use of cabinet machinery — Prime Ministers vary in how far they use full cabinet, bilateral meetings or ad hoc groups. Analysis: Blair's preference for "sofa government" concentrated decisions in small informal groups, drawing criticism in the Butler Review for weakening collective deliberation before the Iraq war. Major, by contrast, governed a divided party through extensive cabinet discussion. This suggests the balance is not fixed by the constitution but chosen, within limits set by political strength.\n• The standing of individual ministers — a cabinet containing figures with independent authority constrains a Prime Minister far more than one of loyalists. Analysis: the Blair–Brown relationship shows how Treasury control over departmental allocations can create a rival centre of power that a Prime Minister cannot simply dismiss. But the causation runs both ways: Prime Ministers appoint such figures because they are more dangerous outside the government than in it, which is itself evidence of constraint operating before any appointment is made.`
      },
      {
        q: 'Explain and analyse three limits on the power of the Prime Minister.',
        marks: 9, tier: 'red',
        modelAnswer: `• The party — a Prime Minister holds office only while their parliamentary party permits it, and both main parties have mechanisms for removing a leader. Analysis: this is the most fundamental limit and has no parallel in a presidential system. Thatcher, May, Johnson and Truss all left office without losing a general election. It means a Prime Minister must continually maintain support among backbenchers, which constrains policy choices well before any formal challenge arises.\n• Parliament — legislation requires Commons majorities, and the Lords can delay and amend. Analysis: the strength of this limit varies almost entirely with majority size, which makes it an inconsistent check. It was close to negligible for Blair after 1997 and decisive for May after 2017. The credible threat of rebellion also operates invisibly, forcing pre-emptive concessions that never appear as defeats in the division records, so the constraint is stronger than defeat statistics suggest.\n• The judiciary and the wider constitution — since 1997 devolution, the Human Rights Act and an expanded judicial review have narrowed the executive's freedom of action. Analysis: Miller I established that the prerogative could not be used to remove statutory rights, and Miller II held prorogation justiciable where it frustrates Parliament's functions. These are real constraints on prerogative power. But they are limits on legality rather than on policy: because Parliament remains sovereign and the Prime Minister normally controls Parliament, a determined government can usually legislate around an adverse judgment, as the Judicial Review and Courts Act 2022 illustrates.`
      },
    ]
  },

  /* ── 1.4 The Judiciary ─────────────────────────────────────── */
  '1.4': {
    green: [
      {
        q: 'Define the term "judicial independence" and identify two ways it is protected.',
        marks: 3, tier: 'green',
        modelAnswer: `• Judicial independence means that judges are free from political interference or pressure when reaching their decisions, so that cases are decided on the law alone.\n• Protections (any two): security of tenure, since senior judges can only be removed by the monarch following an address from both Houses of Parliament; salaries paid from the Consolidated Fund, so they cannot be manipulated by ministers; appointment through the independent Judicial Appointments Commission since 2005; the sub judice rule, restricting parliamentary comment on active cases; contempt of court rules.`
      },
      {
        q: 'Define "judicial review" and state one ground on which a decision may be challenged.',
        marks: 3, tier: 'green',
        modelAnswer: `• Judicial review is the process by which the courts examine whether a public body has acted lawfully, and within the powers granted to it, in reaching a decision. It reviews the legality of the process, not the merits of the policy.\n• Grounds (any one): illegality, where the body acted beyond its powers (ultra vires); irrationality, where the decision is so unreasonable that no reasonable body could have reached it; procedural impropriety, where required procedures or natural justice were not followed; incompatibility with rights under the Human Rights Act 1998.`
      },
      {
        q: 'State three effects of the Constitutional Reform Act 2005.',
        marks: 3, tier: 'green',
        modelAnswer: `• Created the UK Supreme Court, which opened in 2009, physically and institutionally separating the highest court from the House of Lords.\n• Removed the Law Lords from the legislature, so the most senior judges no longer sit and vote in Parliament.\n• Reformed the office of Lord Chancellor, removing the role of head of the judiciary and of Speaker of the Lords, and transferring headship of the judiciary to the Lord Chief Justice.\n• Established the Judicial Appointments Commission, making selection independent of ministers.\nTaken together these sharpened the separation of powers in the UK.`
      },
      {
        q: 'Define the term "declaration of incompatibility".',
        marks: 3, tier: 'green',
        modelAnswer: `• Under section 4 of the Human Rights Act 1998, where a senior court finds that a statutory provision cannot be interpreted compatibly with a Convention right, it may issue a declaration of incompatibility.\n• The declaration does not strike the statute down or affect its validity: the provision remains law and must still be applied.\n• It signals the incompatibility to Parliament, which may choose to amend the law, either by ordinary legislation or by a remedial order. This preserves parliamentary sovereignty while creating political pressure to act.`
      },
    ],
    amber: [
      {
        q: 'Explain why the UK Supreme Court cannot strike down an Act of Parliament.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Parliamentary sovereignty — Parliament is the supreme law-making body, and a defining element of that doctrine is that no body, including the courts, may override or set aside an Act of Parliament. The Court's authority derives from statute rather than from a constitution superior to statute.\n• No higher constitutional law — because the UK constitution is uncodified and unentrenched, there is no body of constitutional law against which ordinary legislation can be measured. A US or German court can strike legislation down because a codified constitution sits above it; UK judges have no equivalent standard to apply.\n• What the Court can do instead — it interprets statute, and section 3 of the Human Rights Act requires it to read legislation compatibly with Convention rights so far as possible, which is a significant interpretive power. Where that is impossible it may issue a declaration of incompatibility under section 4, leaving the statute valid but inviting Parliament to amend it. It can also quash the actions of ministers and public bodies through judicial review, and could disapply statute conflicting with EU law before 2020.\n• Significance — the Court's power therefore runs against the executive, not against the legislature. This is a deliberate constitutional design rather than an oversight.`
      },
      {
        q: 'Explain two reasons why the use of judicial review has increased since 1997.',
        marks: 6, tier: 'amber',
        modelAnswer: `• The Human Rights Act 1998 — incorporation of the ECHR created an entirely new set of grounds on which government action could be challenged, and allowed such claims to be brought in domestic courts rather than in Strasbourg. This made rights litigation far cheaper and more practicable, and generated a substantial body of case law.\n• Constitutional reform and devolution — devolution created new questions about the limits of devolved competence which only the courts could resolve, and the Constitutional Reform Act 2005 gave the senior judiciary a clearer institutional identity separate from the legislature, which arguably encouraged greater confidence in reviewing executive action.\n• Growth of the state and delegated powers — the expansion of executive and agency decision-making, much of it under broad delegated powers, simply created more decisions capable of being challenged.\n• A more rights-conscious legal culture — greater public awareness of rights, alongside campaigning groups and law firms willing to bring test cases, has increased the supply of litigation.\n• Worth noting: governments have responded by seeking to restrict review, through changes to legal aid, tighter standing and time limits, and the Judicial Review and Courts Act 2022.`
      },
      {
        q: 'Explain the significance of the Miller II (2019) judgment.',
        marks: 6, tier: 'amber',
        modelAnswer: `• The facts — the government advised the monarch to prorogue Parliament for five weeks during the critical period before the Brexit deadline. The Supreme Court held unanimously that the advice was unlawful, and therefore that the prorogation was void and Parliament had not been prorogued at all.\n• Justiciability — the central significance is that the Court held the question justiciable. The government had argued prorogation was an inherently political exercise of the prerogative, beyond the courts' reach. The Court rejected this, holding that it could examine whether a prerogative power had been used for a purpose that frustrated Parliament's constitutional functions without reasonable justification.\n• Constitutional principle — the Court grounded its reasoning in parliamentary sovereignty and parliamentary accountability, presenting itself as protecting Parliament against the executive rather than substituting its own political judgment.\n• Controversy — critics argued the Court had entered political territory it should have avoided, inventing a novel legal standard and setting itself up as arbiter of a contested political dispute. Supporters replied that the Court did not choose the case and ruled only on the limits of executive power, leaving the political question of Brexit untouched. The judgment fed directly into subsequent proposals to restrict judicial review.`
      },
      {
        q: 'Explain two arguments that the senior judiciary is not sufficiently representative.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Social and educational background — senior judges are drawn overwhelmingly from those educated at private schools and Oxbridge, reflecting the narrow recruitment base of the senior bar from which they are appointed. Critics argue this produces a bench whose life experience is unrepresentative of those appearing before it, particularly in cases involving welfare, immigration or policing.\n• Gender and ethnicity — despite improvement since the creation of the Judicial Appointments Commission, women and members of ethnic minorities remain significantly under-represented in the senior judiciary, and the Supreme Court has had only a small number of female justices and has been overwhelmingly white throughout its existence.\n• Why it matters — the standard argument is not that unrepresentative judges are corrupt, but that judicial neutrality is harder to sustain where interpretation involves discretion and a narrow group shares similar unexamined assumptions. J.A.G. Griffith's argument that judges share an establishment outlook on questions of public order and property rests on this point.\n• Counter-arguments worth crediting: appointment on merit and open competition through the JAC is itself a protection of independence; diversity has improved markedly at the lower levels of the judiciary, which will feed through over time; and evidence that senior courts rule against government regularly suggests background does not straightforwardly determine outcomes.`
      },
    ],
    red: [
      {
        q: 'Explain and analyse three ways in which judicial independence is maintained in the UK.',
        marks: 9, tier: 'red',
        modelAnswer: `• Security of tenure and financial security — senior judges hold office during good behaviour and can be removed only by the monarch following an address from both Houses of Parliament, a procedure not used against an English judge since 1830. Salaries are charged on the Consolidated Fund, so they are not subject to annual parliamentary approval. Analysis: these remove the most direct instruments of pressure, since a judge cannot be sacked or financially punished for an unwelcome ruling. The protection is genuinely robust, though it says nothing about pressures operating before appointment or through the political climate.\n• Independent appointment — the Constitutional Reform Act 2005 created the Judicial Appointments Commission, transferring selection from the Lord Chancellor to an independent body selecting on merit through open competition. Analysis: this addressed the most serious structural threat, namely patronage appointment by a serving politician, and stands in sharp contrast to the openly political confirmation process in the USA. The qualification is that the narrow pool from which appointments are drawn limits diversity, and critics argue merit-based selection from a homogeneous bar reproduces a particular outlook even without political interference.\n• Separation from the legislature and rules on comment — the 2005 Act removed the Law Lords from Parliament and stripped the Lord Chancellor of headship of the judiciary, while the sub judice rule restrains parliamentary discussion of active cases and contempt rules restrain the press. Analysis: these ended an anomalous fusion of powers and reduced institutional pressure. But the informal position is weaker than the formal one: ministerial and press attacks on judges after Miller I and Miller II, and government reluctance to defend them promptly, suggest the conventions of restraint are eroding even as the legal protections hold.`
      },
      {
        q: 'Explain and analyse three arguments that the UK Supreme Court has become too powerful.',
        marks: 9, tier: 'red',
        modelAnswer: `• It has entered contested political territory — Miller I and Miller II placed the Court at the centre of the most divisive political question of a generation, ruling on the triggering of Article 50 and on prorogation. Analysis: the charge is that unelected, unaccountable judges settled matters properly belonging to elected politicians, and that Miller II in particular applied a novel standard with no clear precedent. The rebuttal is substantial: the Court did not select these cases, and in each it ruled on the limits of executive power under existing constitutional principle rather than on the merits of Brexit. On that reading the Court constrained the government on Parliament's behalf, which strengthens rather than usurps democratic authority.\n• The Human Rights Act expanded its interpretive reach — section 3 requires courts to read legislation compatibly with Convention rights so far as possible, which has produced readings some regard as straining the words Parliament actually enacted. Analysis: this is a real transfer of interpretive power, and rulings on deportation and prisoner voting have been politically contentious. But it is bounded: where compatible reading is impossible the Court can only declare incompatibility, leaving the statute valid and the decision with Parliament, and Parliament has on occasion simply declined to act.\n• Judicial review has expanded — the grounds and frequency of review have grown substantially since 1997, giving courts routine oversight of executive decisions. Analysis: critics argue this allows litigants to relitigate policy defeats in court and imposes caution on administration. The strongest counter is constitutional: judicial review polices legality, not merit, and Parliament retains the power to reverse any ruling by statute. The Judicial Review and Courts Act 2022 demonstrates precisely this, and its existence is evidence that the Court remains subordinate to Parliament rather than supreme over it.`
      },
    ]
  },

  /* ── 1.5 Devolution ────────────────────────────────────────── */
  '1.5': {
    green: [
      {
        q: 'Define the term "devolution" and identify the three devolved nations of the UK.',
        marks: 3, tier: 'green',
        modelAnswer: `• Devolution is the transfer of powers from central government to subnational legislatures and executives, where legal sovereignty is retained by the centre. It is therefore distinct from federalism, in which power is constitutionally divided and protected.\n• The three devolved nations are Scotland (Scottish Parliament), Wales (the Senedd) and Northern Ireland (Northern Ireland Assembly).\n• England has no devolved legislature, which is the principal source of the asymmetry in the UK settlement.`
      },
      {
        q: 'Distinguish between a "reserved" and a "devolved" matter, giving one example of each.',
        marks: 3, tier: 'green',
        modelAnswer: `• A reserved matter is one retained by the Westminster Parliament, on which the devolved legislatures may not legislate. Examples: defence, foreign affairs, immigration, the constitution, most of macroeconomic policy.\n• A devolved matter is one transferred to a devolved legislature, which may legislate on it freely. Examples: health, education, housing, transport, the environment, and in Scotland's case significant tax powers.\n• Scotland and Northern Ireland operate a reserved-powers model, where anything not expressly reserved is devolved; Wales moved to the same model under the Wales Act 2017.`
      },
      {
        q: 'Identify the electoral systems used for each of the three devolved legislatures.',
        marks: 3, tier: 'green',
        modelAnswer: `• Scottish Parliament — the Additional Member System (AMS), a mixed system combining constituency members elected by FPTP with regional list members allocated to produce broad proportionality.\n• Senedd (Welsh Parliament) — the Additional Member System, historically with a smaller proportional top-up element than Scotland's.\n• Northern Ireland Assembly — the Single Transferable Vote (STV) in multi-member constituencies, chosen to ensure both communities secure representation.\nAll three are more proportional than Westminster's FPTP, which has produced multi-party systems and frequent coalition or minority government in the devolved nations.`
      },
      {
        q: 'Define the term "Barnett formula".',
        marks: 3, tier: 'green',
        modelAnswer: `• The Barnett formula is the mechanism used by the Treasury to calculate annual changes to the block grants allocated to Scotland, Wales and Northern Ireland.\n• It adjusts each nation's grant in proportion to changes in comparable spending in England, weighted by population share. It allocates changes rather than resetting the baseline.\n• It is contested because it distributes on the basis of population rather than assessed need, producing per-head spending disparities that are criticised from several directions. It was intended as a temporary measure in the late 1970s but remains in use.`
      },
    ],
    amber: [
      {
        q: 'Explain why devolution in the UK is described as "asymmetric".',
        marks: 6, tier: 'amber',
        modelAnswer: `• Different powers — the three devolved bodies do not hold equivalent competences. Scotland has the most extensive settlement, including substantial income tax and welfare powers under the Scotland Act 2016. Wales began with only secondary law-making power and acquired primary powers and a reserved-powers model considerably later. Northern Ireland's settlement includes policing and justice and is shaped by the Good Friday Agreement.\n• Different institutional structures — Northern Ireland operates mandatory power-sharing, with the First Minister and deputy First Minister drawn from the largest unionist and nationalist designations and holding equal authority. Scotland and Wales operate conventional majoritarian executives.\n• The English anomaly — England, with around 85 per cent of the UK population, has no devolved legislature of its own. English devolution has instead proceeded through elected metro mayors and combined authorities, which hold far weaker powers than the national settlements.\n• Consequences — asymmetry produces the West Lothian question, since Scottish MPs vote at Westminster on matters devolved in Scotland; it fuels disputes over funding; and it means there is no single UK-wide constitutional settlement, only a series of separately negotiated ones which have been repeatedly renegotiated.`
      },
      {
        q: 'Explain the Sewel Convention and its significance.',
        marks: 6, tier: 'amber',
        modelAnswer: `• The convention — Westminster will not normally legislate on devolved matters without the consent of the relevant devolved legislature, expressed through a legislative consent motion.\n• Statutory recognition — the convention was written into statute by the Scotland Act 2016 and the Wales Act 2017, which appeared to strengthen it considerably.\n• Miller I — the Supreme Court held in 2017 that despite this statutory recognition the Sewel Convention remained a political convention that the courts would not enforce. Putting a convention into statute did not convert it into a legally binding obligation.\n• Significance — the word "normally" leaves Westminster free to legislate without consent, and it has done so. Consent was withheld for the EU Withdrawal legislation and the UK Internal Market Act 2020, and Westminster proceeded regardless. This exposes the underlying constitutional reality: devolved powers rest on political restraint rather than legal entrenchment, which is precisely why critics argue the UK is not genuinely federal and why relations between Westminster and the devolved governments deteriorated sharply after Brexit.`
      },
      {
        q: 'Explain two ways in which devolution has produced policy divergence within the UK.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Higher education funding — Scotland abolished tuition fees for Scottish-domiciled students at Scottish universities, while England moved to fees of up to £9,250 per year. Wales has operated its own distinct system of grants and fees. A student's financial position now depends substantially on which part of the UK they live in.\n• Health and social care — Scotland introduced free personal care for the elderly and, along with Wales and Northern Ireland, abolished prescription charges, which are retained in England. Scotland and Wales also declined to follow the English internal-market reforms of the NHS, producing structurally different health services.\n• Other creditable examples: the minimum unit pricing of alcohol in Scotland and Wales; different approaches to school curricula and assessment, including the abolition of SATs-style testing in Wales; divergent public health measures during the COVID-19 pandemic, which made the divergence unusually visible.\n• Significance — divergence demonstrates that devolution transferred real power rather than administrative discretion. It also creates pressure, since voters in England observe policies unavailable to them, and it complicates UK-wide policy-making, as the disputes over the UK Internal Market Act illustrate.`
      },
      {
        q: 'Explain why the Northern Ireland Assembly has been suspended on several occasions.',
        marks: 6, tier: 'amber',
        modelAnswer: `• Mandatory power-sharing — under the Good Friday Agreement the Executive must include both unionist and nationalist parties, with the First Minister and deputy First Minister holding equal power and their offices linked, so that if one resigns the other's office also falls. Cross-community consent requirements apply to key decisions.\n• The consequence — this design gives either community's largest party an effective veto over the institutions themselves. A party can collapse the Executive by withdrawing, and no alternative government can be formed without it, so the institutions fall rather than change hands.\n• Instances — the Executive collapsed in 2017 following the Renewable Heat Incentive dispute and did not return for three years; the DUP withdrew in 2022 in protest at the Northern Ireland Protocol, suspending the institutions for around two years. Earlier suspensions occurred over decommissioning.\n• Assessment — the mechanism was a deliberate trade-off. Guaranteeing both communities a share of power was essential to securing the peace settlement, and majoritarian government had failed catastrophically before 1972. The cost is that the institutions are structurally fragile, and prolonged suspension leaves Northern Ireland governed by civil servants without ministerial direction.`
      },
    ],
    red: [
      {
        q: 'Explain and analyse three ways in which devolution has changed the UK constitution.',
        marks: 9, tier: 'red',
        modelAnswer: `• Dispersal of power from Westminster — devolution created legislatures with primary law-making powers over major policy areas, producing substantial divergence in health, education and taxation. Analysis: this is a fundamental change to a state long described as unitary, and has led many to characterise the UK as quasi-federal. But the description is imprecise. In a federal system power is constitutionally divided and protected; here Westminster retains the legal authority to amend or abolish the devolved bodies, as it did when suspending the Northern Ireland Assembly. What has changed is the political cost of doing so, not the legal position.\n• Pressure on parliamentary sovereignty — the Sewel Convention, the declaration in the Scotland Act 2016 that the Scottish Parliament is permanent, and the democratic mandates of the devolved bodies all sit awkwardly with the doctrine that Parliament may legislate on anything. Analysis: Miller I resolved the legal question by holding Sewel judicially unenforceable, confirming sovereignty in strict law. But Westminster's decision to legislate without consent on the EU Withdrawal legislation and the UK Internal Market Act showed that the convention's practical restraint is weaker than its statutory recognition implied, and did lasting damage to intergovernmental relations.\n• New electoral and party dynamics — the devolved bodies use proportional systems, producing multi-party politics, coalition and minority government, in sharp contrast to Westminster. Analysis: this gave nationalist parties a platform and, decisively, a record of governing, which transformed the SNP from a protest vehicle into a party of government and made independence a mainstream constitutional question. It also provided a working demonstration that proportional representation can deliver stable government in the UK, which continues to inform debate about Westminster's electoral system.`
      },
      {
        q: 'Explain and analyse three reasons why the devolution settlement has proved unstable.',
        marks: 9, tier: 'red',
        modelAnswer: `• It was designed asymmetrically and without an agreed endpoint — each nation's settlement was negotiated separately and has been repeatedly renegotiated, in 2012, 2016 and 2017, while England was left out entirely. Analysis: because there was never a UK-wide constitutional design, there is no principled basis for resolving the resulting anomalies. The West Lothian question produced EVEL in 2015, which was abandoned as unworkable in 2021. A process of continual transfer without a settled endpoint invites further demands rather than closing the question, which is why the word "settlement" is contested.\n• The absence of legal entrenchment — devolved powers rest on ordinary statute and on the Sewel Convention, which Miller I confirmed the courts will not enforce. Analysis: this leaves the devolved bodies structurally dependent on Westminster's restraint. When Westminster legislated on devolved matters without consent after Brexit, the devolved governments had no legal remedy, only political protest. A federal system would have provided a constitutional court and an entrenched division of powers; the UK provides neither, so disputes escalate into constitutional crises rather than being resolved judicially.\n• Brexit and competing mandates — Scotland and Northern Ireland voted to remain while the UK as a whole voted to leave, and the return of EU competences in devolved fields such as agriculture and fisheries raised the question of whether they should pass to the devolved bodies or be held centrally to protect a UK internal market. Analysis: this converted a technical question into a sovereignty dispute. The UK Internal Market Act, passed over the objections of both devolved legislatures, was seen in Edinburgh and Cardiff as a unilateral recentralisation, while the Northern Ireland Protocol's practical effects led directly to the DUP's two-year suspension of the Assembly. Brexit did not create the instability but exposed how little the settlement could absorb.`
      },
    ]
  },

};
