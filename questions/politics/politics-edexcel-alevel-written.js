/*
 * Edexcel A-Level Politics (9PL0) — Written / Short-Answer Question Bank
 * Keyed by the same topic ids as politics-edexcel-alevel.js.
 * Each entry: { green: [], amber: [], red: [] } of { q, marks, tier, modelAnswer }.
 * 10 questions per topic: 4 green + 4 amber + 2 red.
 *
 * TARIFFS. Edexcel 9PL0 papers carry 12, 24 and 30-mark questions —
 * 'Analyse' and 'Examine' at 12 (AO1 6 / AO2 6), 'To what extent' at 24,
 * 'Evaluate' at 30. A 24 or a 30 is not self-markable inside a five-question
 * diagnostic, so the tiers are 4 / 8 / 12, with red using the authentic
 * 12-mark tariff. The 24s and 30s carry in the practice bank and the
 * mark-scheme data, not here.
 *   green — 4 marks, define and identify
 *   amber — 8 marks, explain
 *   red   — 12 marks, 'Analyse' or 'Examine' (the Edexcel tariff)
 *
 * This differs deliberately from the AQA bank's 3 / 6 / 9, which was derived
 * the same way from AQA's own 9 and 25-mark paper. Neither set of tiers is a
 * house standard; each follows the board it belongs to.
 *
 * Student self-marks against the model answer: Full / Partial / Missed.
 */

const POLITICS_EDEXCEL_WRITTEN = {

  /* ── 1.1 Democracy and Participation ───────────────────────── */
  '1.1': {
    green: [
      {
        q: 'Define the term "direct democracy" and identify two examples of its use in the UK.',
        marks: 4, tier: 'green',
        modelAnswer: `• Direct democracy is a system in which citizens themselves decide policy questions, rather than electing representatives to decide on their behalf. Decisions are taken by the people directly and the outcome is not mediated through a legislature.\n• Any two of: the 2016 referendum on EU membership; the 2011 referendum on the Alternative Vote; the 2014 Scottish independence referendum; the 1998 Good Friday Agreement referendum; e-petitions that trigger a Commons debate; recall petitions under the Recall of MPs Act 2015.`
      },
      {
        q: 'Explain what is meant by a "democratic deficit".',
        marks: 4, tier: 'green',
        modelAnswer: `• A democratic deficit is a flaw in a democratic process where decisions are taken by bodies that lack sufficient accountability to the electorate, or where the process fails to translate the popular will into representation.\n• In the UK it is most often applied to first-past-the-post, under which large numbers of votes secure no representation and seat shares diverge sharply from vote shares.\n• It is also applied to the unelected House of Lords, to the concentration of power in an executive facing few effective checks between elections, and to the use of prerogative powers.`
      },
      {
        q: 'Distinguish between a sectional pressure group and a promotional pressure group, giving one example of each.',
        marks: 4, tier: 'green',
        modelAnswer: `• A sectional (or interest) group represents a specific section of society and membership is usually restricted to those who share that position — for example the British Medical Association, or a trade union such as Unite.\n• A promotional (or cause) group campaigns on an issue or value and is open to anyone who supports the cause — for example Greenpeace, Liberty or the Howard League for Penal Reform.\n• The distinction is not watertight: many sectional groups campaign on public causes, and some promotional groups draw their membership from a narrow social base.`
      },
      {
        q: 'Define the term "franchise" and identify two ways in which it has been extended in the UK.',
        marks: 4, tier: 'green',
        modelAnswer: `• The franchise (or suffrage) is the right to vote in public elections — the legal entitlement that determines who is included in the electorate.\n• Any two of: the Representation of the People Act 1918, which enfranchised women over 30 and nearly all men over 21; the Equal Franchise Act 1928, which equalised the age at 21; the Representation of the People Act 1969, which lowered the voting age to 18; the extension of the vote at 16 for Scottish Parliament and Senedd elections.`
      },
    ],
    amber: [
      {
        q: 'Explain three ways in which pressure groups enhance democracy in the UK.',
        marks: 8, tier: 'amber',
        modelAnswer: `• They provide representation between elections. A general election offers a single choice every few years on a bundle of issues; pressure groups let citizens press a specific concern continuously, and they represent interests that cut across constituency boundaries and so are poorly served by a territorial electoral system.\n• They supply expertise and scrutiny. Groups such as the Institute for Fiscal Studies or the Royal College of Nursing bring specialist knowledge to consultations and select committees that ministers and MPs do not themselves possess, which improves the quality of legislation and exposes weaknesses in policy.\n• They widen participation and disperse power. Membership of campaign organisations has grown as party membership has fallen, giving citizens a route to political activity; on the pluralist account this competition between many groups prevents any single interest from dominating.\n• A complete answer notes the limit: influence follows resources and access, so groups do not enhance democracy equally, and insider status is far easier for corporate and professional interests to obtain than for outsider causes.`
      },
      {
        q: 'Explain why referendums sit awkwardly with parliamentary sovereignty.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Parliamentary sovereignty holds that Parliament is the supreme law-making body and that no Parliament can bind its successors. On that doctrine a referendum can only ever be advisory, because the people have no formal law-making authority of their own.\n• In practice referendum results have proved politically binding. Parliament was formally free to disregard the 2016 result, but doing so would have been politically untenable — which means the practical decision passed to the electorate while the legal authority remained at Westminster.\n• This creates a gap between form and substance. Sovereignty is formally intact but constrained by an expectation that has no constitutional rules attached to it: there is no settled requirement about thresholds, turnout, franchise or when a question may be revisited.\n• The tension is sharpest where a referendum result conflicts with the view of the Commons, as it did repeatedly between 2016 and 2019 — the legislature retained the legal power to act and very little political freedom to use it.`
      },
      {
        q: 'Explain the arguments for and against lowering the voting age to 16 in UK general elections.',
        marks: 8, tier: 'amber',
        modelAnswer: `• For — consistency. At 16 a citizen may work and pay income tax, consent to medical treatment, join the armed forces with consent and marry with consent; excluding them from decisions that bind them is difficult to justify once those other capacities are recognised.\n• For — habit formation and precedent. Voting is habit-forming, so enfranchising people while they are still in education and settled at one address may raise lifetime turnout. Scotland extended the vote at 16 for the 2014 referendum and for Scottish Parliament elections, and turnout among that group was high.\n• Against — maturity and independence. Critics argue that political judgement at 16 is still forming and that voters of that age are more susceptible to the influence of parents and teachers, so the extension may not represent an independent addition to the electorate.\n• Against — inconsistency the other way. Other thresholds sit at 18, so extending the franchise alone would create a new inconsistency rather than removing one.\n• A complete answer notes that the argument is partly partisan, since parties polling well among young voters have most to gain, which complicates assessment of the principled case.`
      },
      {
        q: 'Explain why the evidence for a "participation crisis" in the UK is contested.',
        marks: 8, tier: 'amber',
        modelAnswer: `• The case for a crisis rests on turnout and party membership. General election turnout fell from 77.7% in 1992 to 59.4% in 2001 and has not returned to pre-1997 levels; membership of the three largest parties is far below its post-war peak, and local election and PCC turnout is lower still.\n• The case against rests on the form participation takes. Membership of pressure groups and campaign organisations has grown substantially, e-petitions attract millions of signatures, and single-issue mobilisation over climate and social causes has drawn large numbers into political activity.\n• The disagreement is therefore about what counts as participation. If it means the conventional activities of the mid-twentieth century, the decline is real; if it means political engagement of any kind, the evidence points to a change in form rather than a disappearance.\n• A complete answer notes the qualification that matters: newer forms are more episodic and more unequally distributed by class, age and education than voting, so a shift in form is not straightforwardly equivalent in democratic value.`
      },
    ],
    red: [
      {
        q: 'Analyse three ways in which democracy in the UK could be made more participatory.',
        marks: 12, tier: 'red',
        modelAnswer: `• Electoral reform. Replacing first-past-the-post with a proportional system would mean far fewer votes were cast for losing candidates, and would end the concentration of campaigning on a small number of marginal seats. Analysis: the devolved bodies show that proportional rules produce multi-party legislatures and coalition or minority government, so the gain in representativeness comes at a cost in the directness of accountability — a voter can no longer straightforwardly remove a government, because the composition of the executive is settled by post-election bargaining. The 2011 referendum result also suggests the public appetite for this is limited.\n• Wider use of referendums and citizens' assemblies. Direct votes on major constitutional questions, and deliberative bodies of randomly selected citizens as used on abortion in Ireland, would give the public a decision rather than a choice of representatives. Analysis: assemblies address the main weakness of referendums — that a complex question is compressed into a binary choice with no deliberation — but they are advisory, so their influence depends entirely on a government's willingness to act, which returns the decision to the institution the reform was meant to bypass.\n• Extending the franchise and reforming registration. Votes at 16, and automatic rather than individual registration, would enlarge the electorate and reach groups currently least likely to be registered. Analysis: this addresses the legal barrier but not the social one — the groups newly included are those participating least, and turnout gaps by class, age and tenure are driven by efficacy and settled residence rather than by entitlement. The reform is therefore necessary but not sufficient, and by itself may widen the gap between those registered and those voting.`
      },
      {
        q: 'Examine the extent to which rights are effectively protected in the UK.',
        marks: 12, tier: 'red',
        modelAnswer: `• The case that protection is effective. The Human Rights Act 1998 gives Convention rights effect in domestic courts, so a claim can be brought in the UK rather than at Strasbourg. Courts must read legislation compatibly with those rights so far as possible, and may issue a declaration of incompatibility where they cannot. The Equality Act 2010 consolidates protection against discrimination, judicial review allows public bodies to be held to the limits of their powers, and the common law tradition of residual liberty means conduct is lawful unless prohibited. Analysis: this is a substantial framework, and the Supreme Court has been willing to use it against government — Miller (2017) held that prerogative could not remove rights conferred by statute.\n• The case that protection is weak. The Human Rights Act is an ordinary statute: it can be amended or repealed by a simple majority, and repeal has been proposed repeatedly. A declaration of incompatibility does not invalidate the offending provision, so Parliament may decline to act. Rights have also been narrowed in practice through counter-terrorism powers, surveillance legislation and restrictions on protest. Analysis: this means rights in the UK rest on political restraint rather than entrenchment — the protection holds while governments choose to respect it.\n• Judgement. The machinery is real and used, but it is not constitutionally secure. Compared with a codified system where rights are entrenched and courts may strike down incompatible legislation, UK protection is strong in ordinary conditions and structurally vulnerable precisely when a government is determined — which is when protection matters most. The decisive point is that the body whose power rights are meant to limit is the same body that decides whether those rights continue to exist.`
      },
    ]
  },

  /* ── 1.2 Political Parties ─────────────────────────────────── */
  '1.2': {
    green: [
      {
        q: 'Define the term "manifesto" and explain its relationship to the doctrine of the mandate.',
        marks: 4, tier: 'green',
        modelAnswer: `• A manifesto is the document in which a party sets out the policies it pledges to enact if it wins power at a general election.\n• The doctrine of the mandate holds that a party winning a general election has both the authority and the obligation to implement that programme, since voters endorsed it.\n• The link matters constitutionally: the Salisbury Convention rests on it, under which the House of Lords does not block legislation implementing a manifesto commitment.\n• The doctrine is contested because voters choose a party for many reasons and cannot endorse or reject individual pledges.`
      },
      {
        q: 'Identify and briefly explain two functions of political parties in the UK.',
        marks: 4, tier: 'green',
        modelAnswer: `• Any two, explained: representation — parties aggregate diverse interests into a coherent programme, allowing voters a meaningful choice between governing options.\n• Recruitment and selection — parties select candidates and provide the pool from which ministers are drawn, so they supply the personnel of government.\n• Policy formulation — parties develop and test policy, converting broad values into specific proposals.\n• Participation and education — parties mobilise voters, organise campaigns and structure public debate around competing programmes.`
      },
      {
        q: 'Define "One Nation conservatism" and identify one way it differs from the New Right.',
        marks: 4, tier: 'green',
        modelAnswer: `• One Nation conservatism, associated with Disraeli, holds that the privileged owe an obligation to the less fortunate and that social cohesion requires the state to soften the harsher effects of the market — noblesse oblige applied to national policy.\n• It differs from the New Right principally over the state: One Nation conservatives accept state provision as the price of a united nation, whereas the New Right regards such provision as fostering dependency, eroding personal responsibility and crowding out the market.\n• The two also differ in method — One Nation is pragmatic and gradualist, the New Right explicitly ideological.`
      },
      {
        q: 'Explain what is meant by "party systems" and identify the system the UK is usually said to have.',
        marks: 4, tier: 'green',
        modelAnswer: `• A party system describes the number of parties with a realistic prospect of holding power and the pattern of competition between them.\n• The UK is conventionally described as a two-party system: Labour and the Conservatives have alternated in office since 1945 and either is capable of governing alone.\n• The description is increasingly contested — coalition in 2010, minority government after 2017, SNP dominance in Scotland and multi-party devolved legislatures all cut against it.\n• A multi-party system at the level of votes coexists with a two-party system at the level of seats, because first-past-the-post converts one into the other.`
      },
    ],
    amber: [
      {
        q: 'Explain three factors that influence the electoral success of a UK political party.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Perceived governing competence. Valence considerations now dominate: voters judge which party is more capable of delivering commonly held goals. Economic reputation tracks electoral fortune closely, which is why events that damage a party's competence reputation — the ERM crisis in 1992, or the 2022 mini-budget — have long electoral consequences.\n• Leadership. With partisan dealignment, leaders carry more weight as a shortcut for judging a party. Perceptions of competence, trustworthiness and prime ministerial credibility all feed into vote choice, though leaders matter more at the margin than as a primary driver.\n• Party unity and organisation. Visibly divided parties are punished, as the Conservatives were in the 1990s and Labour after 2015, because division signals an inability to govern. Organisational capacity — funding, ground campaign, targeting — converts support into votes where it counts.\n• A complete answer notes that these interact with the electoral system: FPTP means a party can win a large majority on around 35-45% of the vote if its support is efficiently distributed.`
      },
      {
        q: 'Explain the arguments for and against the state funding of UK political parties.',
        marks: 8, tier: 'amber',
        modelAnswer: `• For — reducing dependence on wealthy donors. Parties currently rely on large donations from individuals, companies and trade unions, which invites both the perception and sometimes the reality of purchased access. Public funding would weaken that link.\n• For — levelling competition. It would reduce the advantage held by parties able to attract wealthy backers, and give smaller parties a more realistic chance of being heard.\n• Against — compelling citizens to fund views they reject. Taxpayers would subsidise parties whose programmes they oppose, which is a real objection of principle.\n• Against — entrenchment. Any formula for distributing funds — by votes, seats or membership — tends to reward existing parties and raises the barrier to new entrants, freezing the party system in its current shape.\n• Against — severing the link with members. Parties dependent on public money have less incentive to recruit and retain members, which may weaken their roots in society.\n• A complete answer notes that partial state funding already exists through Short money and Cranborne money for opposition parties.`
      },
      {
        q: 'Explain why minor parties struggle to win representation at Westminster.',
        marks: 8, tier: 'amber',
        modelAnswer: `• The electoral system is the principal cause. First-past-the-post awards a seat to whoever leads in each constituency, so a party with support spread evenly across the country can poll several million votes and win almost nothing. UKIP in 2015 took 12.6% of the vote and one seat; the SNP took 4.7% and fifty-six, because its support was geographically concentrated.\n• Concentration therefore matters more than size. Nationalist parties with a regional base convert votes efficiently; national parties with diffuse support do not.\n• Perceptions of wasted votes reinforce the effect. Voters who believe a minor party cannot win locally may vote tactically for their preferred viable candidate, which depresses the minor party's vote below its true level of support.\n• Resources and coverage compound the problem: broadcasters allocate airtime by past performance, and funding follows viability, so minor parties are disadvantaged in the campaign as well as the count.\n• A complete answer notes that minor parties can nonetheless exert influence disproportionate to their seats by shifting the agenda, as UKIP did on the European question.`
      },
      {
        q: 'Explain the ways in which the Labour Party has changed since 1979.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Ideological repositioning. Labour moved from the 1983 manifesto's commitments to widespread nationalisation and unilateral disarmament towards acceptance of the market economy, symbolised by the rewriting of Clause IV in 1995 and the abandonment of the commitment to common ownership.\n• The Third Way. Under Blair and influenced by Giddens, the party accepted market economics and globalisation while pursuing social justice through investment, tax credits and public service reform rather than redistribution of ownership.\n• Internal power. Reforms reduced the block vote of affiliated unions and increased the weight of individual members, then the 2014 introduction of one member one vote produced the leadership of Corbyn in 2015 — an outcome the reform's designers had not anticipated.\n• The post-2015 swing and its reversal. The party moved sharply left on public ownership and spending, then after 2019 moved back towards the centre under Starmer, with tighter internal discipline.\n• A complete answer treats these as connected: the changes in ideology and in internal power structures drove one another rather than occurring separately.`
      },
    ],
    red: [
      {
        q: 'Analyse three reasons why the UK is no longer straightforwardly a two-party system.',
        marks: 12, tier: 'red',
        modelAnswer: `• Single-party majority government has been interrupted. The 2010 general election produced the first coalition since 1945, and 2017 produced a minority government dependent on confidence and supply from the DUP. Analysis: this matters because the defining claim of a two-party system is that one of two parties governs alone. However, the interruptions have been episodic rather than permanent — 2015, 2019 and 2024 all produced single-party majorities — so the evidence points to a system under strain rather than one that has been replaced.\n• Multi-party competition is now entrenched below the UK level. The SNP has dominated Scotland since 2015, holding the great majority of Scottish Westminster seats for most of that period; the devolved legislatures, elected by proportional systems, sustain genuine multi-party politics; Northern Ireland has always had an entirely separate party system. Analysis: this is the strongest evidence, because it is structural rather than episodic — a party system that differs by nation cannot be described as two-party without ignoring most of the territory. It also has Westminster consequences, since a bloc of Scottish seats removed from two-party competition alters the arithmetic of forming a government.\n• Vote share has fragmented even where seat share has not. The combined Conservative and Labour vote fell from over 95% in 1951 to around 65-75% in recent elections, with the Liberal Democrats, Greens, UKIP and Reform taking substantial support. Analysis: this is the most double-edged of the three. It shows genuine multi-party competition at the level of preferences, but first-past-the-post converts fragmented votes back into concentrated seats — which is precisely why the system can look two-party in the Commons and multi-party in the country. The decisive point is that the two-party description now depends on the electoral system rather than on the behaviour of voters.`
      },
      {
        q: 'Examine the extent to which UK political parties have converged ideologically.',
        marks: 12, tier: 'red',
        modelAnswer: `• The case for convergence. After 1994 Labour accepted the market economy, privatisation and the main framework of trade union law inherited from the 1980s, while the Conservatives under Cameron accepted NHS spending commitments, the minimum wage and equalities legislation. Both parties competed for the median voter, which is what Downsian analysis predicts in a two-party system under FPTP. Analysis: the convergence was real and it was about first principles, not merely presentation — the disagreement over whether the economy should be organised around markets had been settled.\n• The case against. Divergence returned after 2015. The parties took sharply different positions on austerity, the size and role of the state, public ownership of utilities and rail, and on Brexit — which cut across the conventional left-right axis entirely and realigned both parties' electoral coalitions. Analysis: this shows convergence was a feature of a particular period rather than a permanent condition, and that it can be reversed when economic conditions or a new cleavage make an alternative position electorally viable.\n• Judgement. Convergence best describes roughly 1994 to 2008 rather than a settled state of British politics. The deeper point is that the degree of convergence is itself determined by the electoral system and the distribution of opinion: FPTP rewards parties that capture the centre, so convergence is the default when opinion is unimodal, and divergence appears when a crisis or a new cleavage splits the electorate in a way the centre cannot contain. Both parties therefore converge and diverge for the same underlying reason — the pursuit of a winning coalition — which suggests the question is better framed as when they converge than whether they have.`
      },
    ]
  },

  /* ── 1.3 Electoral Systems ─────────────────────────────────── */
  '1.3': {
    green: [
      {
        q: 'Define "first-past-the-post" and identify two of its consequences.',
        marks: 4, tier: 'green',
        modelAnswer: `• First-past-the-post is a plurality system in single-member constituencies: the candidate with the most votes wins the seat, regardless of whether they achieve an absolute majority.\n• Any two consequences: it tends to produce single-party majority governments, giving clear accountability; it produces substantial disproportionality between vote share and seat share; it disadvantages parties whose support is spread thinly and favours those with concentrated support; it creates large numbers of safe seats and wasted votes; it encourages tactical voting.`
      },
      {
        q: 'Explain what is meant by the Additional Member System and identify where it is used in the UK.',
        marks: 4, tier: 'green',
        modelAnswer: `• AMS is a hybrid system. Voters cast two votes: one for a constituency representative elected by first-past-the-post, and one for a party list in a wider region.\n• The regional list seats are allocated as a top-up, calculated so that each party's overall representation more closely reflects its regional vote share.\n• It is used for the Scottish Parliament, the Senedd and the London Assembly.\n• It is a compromise: it retains a constituency link while producing markedly more proportional outcomes than FPTP alone.`
      },
      {
        q: 'Define the term "wasted vote" and explain why the concept is significant.',
        marks: 4, tier: 'green',
        modelAnswer: `• A wasted vote is one that does not contribute to electing anyone — either cast for a losing candidate, or surplus to the number the winner needed.\n• Under first-past-the-post a large proportion of votes are wasted in this sense, since only the plurality in each constituency counts towards the result.\n• It is significant because it underlies the democratic deficit argument: voters in safe seats have little prospect of affecting the outcome, which may depress turnout and weaken the link between national opinion and the composition of the Commons.`
      },
      {
        q: 'Identify and briefly explain two arguments in favour of retaining first-past-the-post.',
        marks: 4, tier: 'green',
        modelAnswer: `• Any two, explained: strong and stable government — FPTP usually manufactures a single-party majority from a plurality of votes, producing a government able to act on its programme and be held responsible for the result.\n• A clear constituency link — every voter has one identifiable MP for a defined area, who handles casework and can be removed by that electorate.\n• Simplicity — the system is easily understood and the count is straightforward, which supports confidence in the result.\n• It excludes extremes — parties with diffuse support win no seats, which has historically kept small extremist parties out of the Commons.`
      },
    ],
    amber: [
      {
        q: 'Explain how the use of different electoral systems within the UK has affected its politics.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Different party systems have emerged. Proportional rules in Scotland and Wales reward smaller parties with seats, so support that FPTP suppresses at Westminster converts into representation, and viable multi-party competition follows. The Scottish Parliament has sustained Green and Liberal Democrat representation that Westminster arithmetic largely denies.\n• Coalition and minority government have been normalised. Scotland and Wales have had both, and Northern Ireland's STV system combined with mandatory power-sharing produces executives drawn from several parties. This has demonstrated that such governments can be stable, weakening a central argument for FPTP.\n• Voter behaviour has adapted. Under AMS many voters split their ticket, supporting one party in the constituency and another on the list — evidence that voters respond rationally to the incentives a system creates rather than voting identically everywhere.\n• Comparison has become possible. The existence of alternatives within one country makes the effects of FPTP visible, which strengthens the reform case — though the 2011 AV referendum showed that visibility has not translated into public demand for change at Westminster.`
      },
      {
        q: 'Explain the case for and against the wider use of referendums in the UK.',
        marks: 8, tier: 'amber',
        modelAnswer: `• For — direct legitimacy. A referendum settles a question by the direct decision of those affected, which confers an authority a parliamentary vote cannot match on constitutional questions such as devolution or EU membership.\n• For — entrenchment by consent. Where a change alters the constitutional settlement, requiring popular approval prevents a temporary parliamentary majority from making permanent changes for partisan advantage.\n• For — participation. Referendum campaigns generate high engagement; the 2014 Scottish independence referendum recorded 84.6% turnout, far above any recent general election.\n• Against — complexity reduced to binary. A referendum compresses a multi-dimensional question into two options, so the result establishes what was rejected far more clearly than what should replace it, as the period after 2016 demonstrated.\n• Against — tension with parliamentary sovereignty. Advisory in law but binding in practice, referendums create an authority with no rules attached — no threshold, no settled franchise, no agreement on when a question may be revisited.\n• Against — vulnerability to campaign effects. Voters may answer a question other than the one asked, using the vote to register a verdict on the government of the day.`
      },
      {
        q: 'Explain why the Single Transferable Vote is used for elections in Northern Ireland.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Representation of divided communities. STV uses multi-member constituencies and transferable preferences, so several parties win seats in each area. In a society divided between unionist and nationalist traditions, this ensures both are represented everywhere rather than each dominating separate regions.\n• Preventing majoritarian dominance. Northern Ireland's history under the Stormont parliament, where a unionist majority governed continuously under FPTP, made a system that cannot deliver permanent single-community control essential to any settlement.\n• Supporting power-sharing. The Good Friday Agreement requires a cross-community executive. STV produces a legislature in which no single bloc can govern alone, which makes the institutional requirement of power-sharing consistent with the electoral outcome.\n• Encouraging moderation. Because lower preferences matter, candidates have an incentive to seek transfers from beyond their own community, which rewards moderation — though in practice transfers have often stayed within blocs.\n• A complete answer notes the trade-off: STV weakens the single-member constituency link and produces a more complex count.`
      },
      {
        q: 'Explain why proportional representation has not been adopted for Westminster elections.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Self-interest of the parties able to legislate. FPTP advantages the two largest parties by converting pluralities into majorities, so the parties with the power to change the system are the ones it benefits. Neither has a sustained incentive to act.\n• The 2011 referendum. The Alternative Vote was rejected by 67.9% to 32.1% on a 42% turnout. Opponents successfully framed reform as a preoccupation of politicians and as a system that would produce permanent coalition. Although AV is not itself proportional, the result has been treated as settling the question for a generation.\n• The strength of the arguments for the status quo. Decisive government, a clear constituency link and simplicity are genuinely valued, and the public has shown no sustained demand for change.\n• Absence of a trigger. Constitutional reform tends to follow crisis or a hung parliament in which a smaller party can extract it as a condition — the 2010 coalition produced the AV referendum precisely that way, and its failure removed the mechanism.\n• A complete answer notes the circularity: FPTP produces majorities that make reform unnecessary for the governing party, so the system protects itself.`
      },
    ],
    red: [
      {
        q: 'Analyse three consequences of using first-past-the-post for UK general elections.',
        marks: 12, tier: 'red',
        modelAnswer: `• It manufactures majorities from pluralities. Governments are routinely formed on 35-45% of the vote, and seat shares diverge sharply from vote shares — in 2015 UKIP polled 12.6% for one seat while the SNP polled 4.7% for fifty-six. Analysis: this is the central trade-off. It delivers decisive government and clear accountability, since one party holds power and can be removed entire, but it does so by systematically misrepresenting the distribution of opinion. Which side of that trade-off matters more is a judgement about whether elections exist to choose a government or to represent a country, and the two purposes genuinely conflict.\n• It concentrates campaigning on marginal seats. Because safe seats will not change hands, parties direct resources and policy attention to a few dozen constituencies. Analysis: the effect is that a minority of voters effectively determine the outcome, and policy is shaped towards their preferences — which is a democratic distortion distinct from disproportionality, and arguably more serious, since it affects what governments do and not merely how they are composed. It also depresses turnout in safe seats, compounding the inequality.\n• It shapes the party system itself. FPTP penalises parties with dispersed support and rewards those with concentrated support, which sustains two-party dominance at Westminster while permitting nationalist parties to flourish regionally. Analysis: this is the most far-reaching consequence, because it is constitutive rather than merely distributive — the system does not simply measure party competition, it determines what kind of party competition is viable. The asymmetry it creates between the SNP and parties like the Greens or Reform, polling comparable or larger national shares, has consequences for the territorial integrity of the UK that go well beyond questions of fairness between parties.`
      },
      {
        q: 'Examine the extent to which referendums have strengthened democracy in the UK.',
        marks: 12, tier: 'red',
        modelAnswer: `• The case that they have strengthened it. Referendums have settled questions that a parliamentary vote could not legitimately have settled alone: devolution in 1997, the Good Friday Agreement in 1998, Scottish independence in 2014 and EU membership in 2016. Turnout has often exceeded general election turnout — 84.6% in Scotland in 2014 — and campaigns have generated sustained public engagement with constitutional questions. Analysis: on major constitutional change this is a real democratic gain, since it prevents a temporary parliamentary majority from altering the settlement for partisan advantage, and it confers a legitimacy on the outcome that nothing else supplies.\n• The case that they have weakened it. A binary question cannot capture a multi-dimensional issue, so a result establishes what has been rejected far more clearly than what should replace it — which is why 2016 produced years of conflict over what the outcome actually required. Referendums also sit uneasily with parliamentary sovereignty: advisory in law but politically binding, they transfer the decision without transferring any of the rules that ordinarily accompany decision-making, since there is no settled position on thresholds, turnout requirements, the franchise, or when a question may be revisited. Analysis: the absence of rules is the more serious objection, because it means each referendum is conducted on terms set by the government that called it.\n• Judgement. Referendums have strengthened democracy where the question was genuinely binary and the consequences of a yes vote were specified in advance — devolution, where a White Paper set out the scheme. They have weakened it where the question was binary but the alternative was not defined, because the vote then confers a mandate whose content is contested and which no subsequent institution has clear authority to determine. The decisive variable is therefore not whether the public decides, but whether they are deciding between two specified outcomes or between the status quo and an undefined alternative.`
      },
    ]
  },

  /* ── 1.4 Voting Behaviour and the Media ────────────────────── */
  '1.4': {
    green: [
      {
        q: 'Define "class dealignment" and "partisan dealignment".',
        marks: 4, tier: 'green',
        modelAnswer: `• Class dealignment is the weakening of the link between a voter's social class and the party they support. In 1964 around two-thirds of voters supported their "natural" class party; that proportion has fallen substantially.\n• Partisan dealignment is the weakening of voters' habitual psychological attachment to a party, so fewer identify strongly with one and more are willing to switch between elections.\n• The two are connected: as class ties loosened, so did inherited party loyalty, which left more voters available to be persuaded by short-term factors.`
      },
      {
        q: 'Explain what is meant by "valence" voting.',
        marks: 4, tier: 'green',
        modelAnswer: `• Valence voting is choice based on which party is judged more competent to deliver goals that voters broadly share — economic stability, functioning public services, security — rather than on disagreement about what the goals should be.\n• It contrasts with positional voting, where parties are chosen for their differing objectives.\n• Valence has become more important as the parties converged on broad aims after 1994, which is why perceptions of governing competence and economic reputation track electoral fortune so closely.`
      },
      {
        q: 'Identify and briefly explain two long-term factors affecting voting behaviour.',
        marks: 4, tier: 'green',
        modelAnswer: `• Any two, explained: social class — historically the strongest predictor, with manual workers disproportionately supporting Labour and non-manual the Conservatives, though the link has weakened substantially.\n• Age — now among the strongest divides, with younger voters far more likely to support Labour and older voters the Conservatives; the gap widened sharply after 2015.\n• Region — Scotland, the major English cities, and the South East show persistent and distinct patterns.\n• Education — has emerged as a significant divide, particularly since the EU referendum realigned support along it.`
      },
      {
        q: 'Define "agenda-setting" in the context of media influence on politics.',
        marks: 4, tier: 'green',
        modelAnswer: `• Agenda-setting is the media's capacity to shape which issues are treated as important, rather than to tell people what to think about them.\n• By deciding what to cover and how prominently, outlets influence the ground on which an election is fought — and parties benefit when the campaign turns on issues they are trusted to handle.\n• It is generally regarded as a more plausible account of media influence than direct persuasion, since it does not require anyone to change their opinion in order to change the outcome.`
      },
    ],
    amber: [
      {
        q: 'Explain why social class is a weaker predictor of voting behaviour than it was in 1964.',
        marks: 8, tier: 'amber',
        modelAnswer: `• Occupational change. The decline of heavy industry and the growth of service and professional employment shrank the traditional manual working class and blurred the boundary between manual and non-manual work, so the categories themselves capture less than they once did.\n• Rising affluence and home ownership. Embourgeoisement and the extension of property ownership, accelerated by right-to-buy, gave many manual workers economic interests that cut across their class position.\n• Educational expansion. Mass higher education created a large graduate population whose political attitudes are shaped more by education than by occupation — and education has become a divide in its own right, particularly over Brexit.\n• Party strategy. Both main parties deliberately sought support beyond their class base: New Labour targeted middle-class voters, and the Conservatives after 2016 targeted working-class leave voters in the Midlands and North.\n• A complete answer notes that class has not disappeared but been displaced: age, education and housing tenure now divide the electorate more sharply than occupational class does.`
      },
      {
        q: 'Explain the significance of the 1997 general election for the study of voting behaviour.',
        marks: 8, tier: 'amber',
        modelAnswer: `• It demonstrated the dominance of valence over position. Labour had abandoned the distinctive positions of 1983 and accepted the market economy, so the contest turned on competence rather than on ideological disagreement — and Labour won a landslide of 179.\n• It showed the electoral cost of a lost competence reputation. The Conservative reputation for economic management did not recover from the ERM crisis of 1992, and the party's polling on economic competence never returned to its earlier level despite a recovering economy.\n• It confirmed class dealignment. Labour's gains were largest among middle-class and southern voters, groups that the class model would not have predicted, and its vote became far less class-distinctive.\n• It illustrated the effects of unity and division. Conservative divisions over Europe were highly visible throughout the parliament, and division signalled an inability to govern.\n• A complete answer notes the caution: a landslide in seats rested on 43.2% of the vote, so FPTP exaggerated the scale of the shift in opinion.`
      },
      {
        q: 'Explain the debate over how far the media influence election outcomes in the UK.',
        marks: 8, tier: 'amber',
        modelAnswer: `• The case for influence. Newspapers take explicit partisan positions and reach large audiences; the Sun's claim after 1992 that it had won the election reflects a widely held view. Agenda-setting gives outlets power over which issues dominate a campaign, and targeted social media advertising allows different messages to reach different voters without public scrutiny.\n• The case against — reinforcement. Readers largely select outlets that already agree with them, so coverage confirms existing preferences rather than converting. On this account media effects are real but concentrated on turnout and intensity rather than on switching.\n• The case against — reverse causation. Proprietors have a commercial interest in backing the likely winner, so endorsements often follow a shift in opinion already underway. The Sun switched to Labour in 1997 when Labour's lead was already large.\n• Regulatory asymmetry matters. Broadcasters, which remain most people's main source of news, are bound by statutory impartiality, which constrains the reach of partisan influence.\n• A complete answer concludes that influence and reflection run together and are difficult to separate empirically, which is why the question remains contested.`
      },
      {
        q: 'Explain why age has become a more significant electoral divide than social class.',
        marks: 8, tier: 'amber',
        modelAnswer: `• The gap has widened sharply. Since 2015 the difference in party support between the youngest and oldest voters has exceeded the difference between occupational classes, with estimates placing the crossover age at around fifty.\n• Housing and economic position. Younger voters are far less likely to own property and more likely to be renting and carrying student debt, which produces different material interests on housing, taxation and public spending — this is arguably class reasserting itself in a new form rather than replacing class.\n• Education and values. Expanded higher education means younger cohorts are more likely to be graduates, and education correlates strongly with socially liberal attitudes, on which the parties have diverged.\n• Brexit realigned along the same line. Age was among the strongest predictors of the 2016 vote, and the referendum divide has persisted into party support.\n• A complete answer notes the analytical problem: it is unclear whether this is a life-cycle effect that will fade as cohorts age, or a genuine generational shift — and turnout differences by age mean the divide's electoral consequences are smaller than its size in the electorate suggests.`
      },
    ],
    red: [
      {
        q: 'Analyse three factors that explain the outcome of a recent UK general election.',
        marks: 12, tier: 'red',
        modelAnswer: `• Brexit and realignment (2019). The Conservatives fought on a single clear position — "get Brexit done" — against an opposition whose position was ambiguous, and gained leave-voting Labour seats across the Midlands and North. Analysis: this was a realignment rather than a swing, because it moved seats along a cleavage that cut across the old class alignment. Its weakness as an explanation is durability: a coalition assembled on one issue is vulnerable once that issue recedes, which is what the 2024 result went on to demonstrate.\n• Governing competence. The electorate's judgement of whether a government can deliver has become the dominant valence consideration, and reputations for competence, once lost, do not recover quickly — as the Conservatives found after 1992 and again after 2022. Analysis: this has more explanatory power than ideology in a period when the parties broadly agree on aims, and it explains why economic events with clear public consequences produce electoral effects that outlast the events themselves.\n• Leadership and party unity. Visible division signals an inability to govern, and leader perceptions serve as a shortcut for voters with weak partisan attachment. Analysis: partisan dealignment makes both factors more consequential than they were when most voters had a standing loyalty, since there is less inherited attachment to insulate a party against a poor leader or an obvious split. The limitation is that leadership effects are usually marginal rather than decisive, and are difficult to separate from the competence judgement they feed into.`
      },
      {
        q: 'Examine the extent to which long-term factors still explain voting behaviour in the UK.',
        marks: 12, tier: 'red',
        modelAnswer: `• The case that they still explain a great deal. Long-term social characteristics continue to structure the vote, but the relevant characteristics have changed. Age, education and housing tenure now predict party support at least as strongly as occupational class did at its peak, and they are stable, slow-moving attributes of exactly the kind long-term models describe. Region remains powerfully predictive, with Scotland operating as a separate party system. Analysis: this suggests the long-term model has not failed but been misidentified with one particular variable — class — and that abandoning it confuses the decline of a specific cleavage with the decline of structural explanation as such.\n• The case that short-term factors now dominate. Class and partisan dealignment left far more voters unanchored and willing to switch, so competence judgements, leadership, campaign events and single issues do more of the work than they did in the 1960s. Electoral volatility between elections is markedly higher, and 2019 and 2024 produced large swings in opposite directions within five years — a pattern no stable long-term model predicts. Analysis: this is strong evidence, because the volatility is in the outcomes themselves rather than in survey attitudes.\n• Judgement. The most defensible position is that long-term factors set the distribution of predispositions while short-term factors determine which way the unanchored portion falls — and that portion has grown large enough to decide elections. Brexit illustrates both at once: it activated a long-standing educational and generational divide, which is structural, but it did so as a short-term issue that then faded. The real change is therefore not that structure stopped mattering, but that the structure now cuts across the party system rather than aligning neatly with it, which makes long-term factors less useful for predicting which party a voter will support even where they still predict what a voter believes.`
      },
    ]
  },


};
