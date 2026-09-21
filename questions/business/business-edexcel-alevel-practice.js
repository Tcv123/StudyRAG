/*
 * Edexcel A-Level Business (9BS0) — Exam Practice Question Bank
 * Keyed by the same topic ids as business-edexcel-alevel.js.
 * Shape: { topicId: { name, questions: [{ q, marks, command, markScheme }] } }
 * 10 questions per topic. Each question is set on a short business context
 * (a named firm, with data where appropriate), placed in q ahead of the
 * command, as Pearson does. There is no separate context/source field.
 *
 * TARIFFS. Every question uses a tariff that actually appears on a 9BS0 paper —
 * no invented mark values. Tariffs, command words and AO splits (from the June
 * 2024 mark schemes for Papers 1, 2 and 3):
 *    4 marks — "Explain" (Knowledge 1, Application 2, Analysis 1), point-marked;
 *              or "Calculate" (Knowledge 1 for the formula, Application 3 for
 *              the working and answer), with Pearson-style NB lines on
 *              acceptable final answers.
 *    8 marks — "Assess" (K2, App2, An2, Eval2). Paper 3 only. Three levels:
 *              L1 1–2, L2 3–5, L3 6–8.
 *   10 marks — "Assess" (K2, App2, An3, Eval3). L1 1–2, L2 3–4, L3 5–6, L4 7–10.
 *   12 marks — "Assess" (K2, App2, An4, Eval4). L1 1–2, L2 3–4, L3 5–8, L4 9–12.
 *   20 marks — "Evaluate" / "To what extent" (K4, App4, An6, Eval6).
 *              L1 1–4, L2 5–8, L3 9–14, L4 15–20.
 *   These bands were checked against every 9BS0 mark scheme 2017–2025.
 *
 * WHICH TARIFF PER TOPIC: 1.1–2.5 have three 4-mark questions (Calculate where
 * the topic has calculations), one 8, two 10s, two 12s and two 20s. 3.1–4.4
 * vary slightly (3.3 and 3.5 carry four Calculate 4-markers; some topics have
 * two 8s and one 20), always 10 questions.
 *
 * MARK SCHEMES. Levels-marked questions (8/10/12/20) give the AO split,
 * indicative content (definition, arguments, counterbalance, potential
 * judgement) and the level bands for that tariff, with the descriptors
 * condensed. Indicative content is not a checklist: a response making other
 * valid, well-applied points still reaches the top level. Answers that ignore
 * the context are held in the lower levels. For 20-mark questions, judgements
 * can be supported with the context (e.g. market, objectives, product,
 * situation).
 *
 * Student self-marks against the mark scheme: Full / Partial / Missed.
 */

  /* ── 1.1 Meeting Customer Needs ──────────────────────────── */

const BUSINESS_EDEXCEL_PRACTICE = {

  '1.1': {
    name: 'Meeting Customer Needs',
    questions: [
      { q: 'Harbour Craft Brewing is a UK producer of craft beer. In 2023 the UK craft beer market was worth £1.25bn and Harbour\'s sales were £40m. In 2024 the market was worth £1.30bn and Harbour\'s sales rose to £45.5m.\n\nCalculate the change in Harbour Craft Brewing\'s market share between 2023 and 2024. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS2 calculate, use and understand percentages and percentage changes\nKnowledge: 1 mark for the formula: market share = sales of one business ÷ total market sales × 100\nApplication: up to 3 marks for\n• Market share 2023 = 40 ÷ 1,250 × 100 = 3.20% (1)\n• Market share 2024 = 45.5 ÷ 1,300 × 100 = 3.50% (1)\n• Change = 3.50 − 3.20 = +0.30 percentage points (1)\nNB: If the only answer given is 0.30%, 0.3%, 0.30 or 0.3 award 4 marks. A percentage change in sales (13.75%) instead of market share scores 0 for the final mark.` },

      { q: 'Oat & Acre makes oat-based milk. A market research report estimated that the UK plant-based milk market grew from £390m in 2023 to £452m in 2024.\n\nCalculate the percentage growth of the UK plant-based milk market between 2023 and 2024. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS2 calculate, use and understand percentages and percentage changes\nKnowledge: 1 mark for the formula: market growth = (new market size − old market size) ÷ old market size × 100\nApplication: up to 3 marks for\n• Increase in market size = 452 − 390 = £62m (1)\n• 62 ÷ 390 = 0.158974… (1)\n• × 100 = 15.90% (15.897…%) (1)\nNB: If the only answer given is 15.90% or 15.9% award 4 marks. If the answer is given as 16% award 3 marks.` },

      { q: 'Loop Coffee runs 12 independent cafés in Leeds and has 18,000 followers on Instagram. Before launching a new seasonal drink it runs polls on Instagram asking followers to vote between three recipes, and tracks comments on its posts.\n\nExplain one benefit to Loop Coffee of using social networking to support its market research.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of market research using social networking, e.g. gathering primary data from customers via social media platforms; or identifying a benefit such as low cost or speed\nApplication: up to 2 marks for context, e.g.\n• Loop has 18,000 Instagram followers who can respond to polls\n• Loop tests three recipes before launching a seasonal drink\nAnalysis: 1 mark for a developed consequence, e.g.\n• Polls give fast, almost free primary data from Loop's actual customers, so it can launch the recipe most likely to sell and reduce the risk of wasted stock on an unpopular drink.` },

      { q: 'Pip & Pine makes vegan dog treats from natural ingredients and sells them online through its own website and Etsy. A 200g bag costs £6.50, compared with around £2 for a supermarket-brand dog treat. The business has 4 employees and annual revenue of £380,000.\n\nAssess the benefits to Pip & Pine of operating in a niche market.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• A niche market is a small, specialised segment of a larger market, with distinct customer needs.\nBenefits:\n• Pip & Pine faces fewer direct competitors than in the mass pet-food market dominated by large brands, so it can survive with a small operation of 4 staff.\n• Customers who want vegan, natural treats are less price sensitive, so it can charge £6.50 — over three times the supermarket price — earning a higher profit margin per unit.\n• Selling online through its website and Etsy lets a small firm reach a geographically scattered niche cheaply, and build loyalty through a clear brand identity.\nPossible counterbalance:\n• The niche is small, so revenue (£380,000) may limit growth and economies of scale; unit costs are likely to stay higher than those of mass-market producers.\n• If the niche proves profitable, larger pet-food firms could launch their own vegan ranges with bigger promotional budgets.\n• Dependence on one narrow segment increases risk — a change in tastes or a food-safety scare could hit all of its sales at once.\nPotential judgement:\n• The niche is likely to be beneficial while Pip & Pine is small because the premium price offsets its lack of scale; the benefit depends on how easily larger rivals can copy a vegan dog-treat product.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Glow Theory is a start-up planning to launch an SPF 50 daily moisturiser aimed at men aged 18–30. The founders have a marketing budget of £15,000. Secondary data shows that UK men\'s skincare sales have grown every year for five years, but it does not show which features young men want in a moisturiser.\n\nAssess the importance of primary market research for Glow Theory before it launches its product.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Primary market research is the collection of new data first hand for a specific purpose, e.g. surveys, focus groups, product testing.\nImportance of primary research:\n• The secondary data shows market growth but not what young men want, so primary research (e.g. product trials, focus groups) could identify and anticipate needs such as texture, scent and price.\n• It could help quantify likely demand for an SPF moisturiser specifically, allowing more accurate production and cash-flow planning for a start-up with limited funds.\n• Qualitative data could give insight into consumer behaviour — where young men buy skincare and which influencers they trust — improving the targeting of a £15,000 budget.\nPossible counterbalance:\n• Primary research is costly and time-consuming; spending a large share of £15,000 on research leaves less for promotion.\n• Small or biased samples (e.g. surveying friends) may give misleading results, so the research may add little certainty.\n• Secondary data already confirms a growing market, and a low-cost online test launch could provide real sales data more reliably than surveys.\nPotential judgement:\n• Primary research is important because the key unknown for Glow Theory is product features, which secondary data cannot answer; however it should be small scale and low cost (e.g. online surveys and samples) given the limited budget.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Harlow & Finch is a homewares retailer with 38 stores in UK town centres. Online sales now account for around a quarter of all UK retail sales. Harlow & Finch\'s website accounts for only 8% of its revenue and footfall in its stores fell by 6% last year.\n\nAssess the likely impact on Harlow & Finch of the growth of online retailing.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Online retailing is the sale of goods to consumers through websites and apps; it is a key feature of a dynamic market.\nNegative impacts:\n• Falling footfall (−6%) reduces store revenue while fixed costs such as rent and business rates on 38 stores remain, squeezing profit.\n• Customers can compare prices easily online, increasing competition from online-only homewares sellers with lower overheads.\n• With only 8% of revenue online, Harlow & Finch is behind the market (around 25%) and may lose market share to rivals with stronger websites.\nPossible counterbalance / opportunities:\n• Harlow & Finch can adapt by investing in its website and click-and-collect, using stores as collection points and showrooms.\n• Homewares are often bought after seeing and touching products, so physical stores may still give a competitive advantage.\n• Closing underperforming stores could cut costs while online growth adds sales without the same fixed costs.\nPotential judgement:\n• The impact is likely to be significant and negative unless Harlow & Finch adapts; the key factor is how quickly it can raise its online share from 8% towards the market average.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Gymshark was founded in Birmingham in 2012 by Ben Francis. It sells gym clothing mainly through its own website and app, and built its brand by working with fitness influencers on social media. It competes with much larger firms such as Nike, Adidas and Lululemon, and opened its first flagship store on Regent Street, London, in 2022.\n\nAssess the importance of product differentiation to Gymshark\'s competitive advantage.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Product differentiation is making a product distinct from rivals' in ways that customers value; competitive advantage is a feature that allows a business to compete effectively against rivals.\nImportance of differentiation:\n• Gymshark cannot match Nike or Adidas on scale or advertising budget, so a distinct community-led brand gives customers a reason to choose it.\n• Differentiation through design and influencer association adds value, allowing premium prices and reducing price elasticity of demand.\n• A clear identity with a young, social-media-active segment supports loyalty and repeat online purchases, which are cheaper to generate than new customers.\nPossible counterbalance:\n• Other factors may matter as much — Gymshark's online-first distribution and lower overheads, or its speed at responding to trends.\n• Influencer marketing is easily copied; many rivals now use the same approach, so differentiation may be eroded over time.\n• Large rivals have strong brands and wide distribution; differentiation alone may not protect Gymshark if they target the same segment.\nPotential judgement:\n• Differentiation is probably the most important source of advantage because Gymshark competes against firms with far greater resources; but it depends on continual innovation in design and marketing, since its original social-media approach is no longer unique.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Dyson is known for inventing new technology before deciding how to market it. James Dyson built 5,127 prototypes before producing his first bagless vacuum cleaner. Dyson now sells premium vacuum cleaners, hair dryers and air purifiers worldwide, often at prices well above competitors\'.\n\nAssess the benefits to Dyson of being a product-orientated business.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• A product-orientated business focuses on developing the best product it can and then seeks customers for it, rather than starting from customer research (market orientation).\nBenefits:\n• Heavy investment in engineering produces genuinely innovative products with USPs, which supports premium pricing well above competitors'.\n• Innovation creates a strong brand associated with technology and quality, adding value and increasing customer loyalty.\n• Being first with a new technology can create new markets (e.g. bagless vacuums) and patents can protect Dyson from imitation for a period.\nPossible counterbalance:\n• Development is slow and costly — 5,127 prototypes represents years of cost before any revenue.\n• Without market research there is a risk of producing products customers do not want at the price charged.\n• Competitors that are market-orientated may respond faster to changing tastes, and cheaper imitations can reduce Dyson's market share once patents expire.\nPotential judgement:\n• Product orientation has benefited Dyson because it operates in markets where technological superiority is valued and customers accept premium prices; the approach works best when combined with some market research to check demand before costly launches.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Tanaka Noodle Bar has nine restaurants in the north of England, positioned in the mid-market with an average spend of £17 per customer. A market map shows several fast-casual rivals charging £12–£15 and two premium Japanese restaurants charging over £40, with few competitors between £20 and £35. Tanaka\'s revenue grew by 3% last year while its costs rose by 7%. The owners are considering repositioning as a premium brand with an average spend of £28, using higher-quality ingredients and redesigned interiors costing £1.2m.\n\nEvaluate whether Tanaka Noodle Bar should reposition its brand into the premium segment of the market.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Market positioning is how a business wants customers to see its product relative to competitors; a market map plots competitors against two variables such as price and quality.\nArguments for repositioning:\n• The market map suggests a gap between £20 and £35 with few competitors, so Tanaka could gain a competitive advantage without facing the fast-casual chains directly.\n• Costs rose 7% against 3% revenue growth; a higher average spend (£28 v £17) could restore margins if volumes hold up.\n• Higher-quality ingredients and interiors add value and could differentiate the brand, reducing price elasticity of demand.\nArguments against:\n• A gap on a market map may exist because there is no demand at that price point; primary research is needed before spending £1.2m.\n• Existing customers attracted by mid-market prices may be lost, and it is hard for a brand to change how customers perceive it.\n• The £1.2m investment is a large risk for a nine-restaurant chain, and premium dining is more sensitive to falling consumer incomes (higher income elasticity).\nPossible recommendations / judgement:\n• Tanaka should consider trialling the premium format in one or two restaurants first, reducing risk while testing demand in the apparent gap.\n• The decision depends on whether market research confirms demand at £28 and on the economic outlook — premium repositioning is riskier if consumer incomes are under pressure.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Bloom & Wild is an online flower delivery business founded in 2013, known for "letterbox flowers" that fit through a standard letterbox. It holds a large database of customer purchases and in 2019 began offering customers the option to opt out of marketing emails about sensitive occasions such as Mother\'s Day. It relies heavily on its database and social media to understand customers.\n\nEvaluate whether businesses such as Bloom & Wild can rely on ICT, such as databases and social media, rather than traditional market research to understand customer needs.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• ICT can support market research through websites, social networking and databases, which collect data on customer behaviour automatically.\nArguments for relying on ICT:\n• Purchase data shows what customers actually buy, when and at what price — more accurate than what they say in surveys.\n• Databases allow segmentation by occasion, spend and location, so marketing can be personalised, e.g. the opt-out for sensitive occasions built customer trust.\n• Social media provides immediate qualitative feedback at very low cost, useful in a dynamic market where tastes change quickly.\nArguments for traditional research:\n• Database data shows past behaviour of existing customers only; it cannot identify why non-customers buy from rivals or reveal unmet needs.\n• Social media feedback is from a self-selecting sample, so it may be biased towards very satisfied or very dissatisfied customers.\n• Data protection rules limit how customer data can be used, and focus groups may give deeper insight into motives such as gift-giving emotions.\nPossible recommendations / judgement:\n• For an online business such as Bloom & Wild, ICT is likely to be the main source of insight because it is cheap, continuous and based on real behaviour; however some traditional research is still needed when entering new markets or developing new products where no data yet exists.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 1.2 The Market ──────────────────────────────────────── */
  '1.2': {
    name: 'The Market',
    questions: [
      { q: 'FitFuel sells protein bars through gyms. It increased the price of a bar from £2.00 to £2.30. Weekly sales fell from 12,000 bars to 10,800 bars.\n\nCalculate the price elasticity of demand for FitFuel protein bars. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS7 interpret values of price and income elasticity of demand; QS2 percentages and percentage changes\nKnowledge: 1 mark for the formula: PED = % change in quantity demanded ÷ % change in price\nApplication: up to 3 marks for\n• % change in quantity demanded = (10,800 − 12,000) ÷ 12,000 × 100 = −10% (1)\n• % change in price = (2.30 − 2.00) ÷ 2.00 × 100 = +15% (1)\n• PED = −10 ÷ 15 = (−)0.67 (1)\nNB: If the only answer given is −0.67 or 0.67 award 4 marks. If the answer is given as −0.7 or −0.6 award 3 marks. If the answer is given as −0.67% award 3 marks.` },

      { q: 'Everyday Essentials is a supermarket own-label pasta brand. Over one year, average household disposable income in its area rose from £35,000 to £36,400. Annual sales of Everyday Essentials pasta fell from 250,000 packs to 245,000 packs.\n\nCalculate the income elasticity of demand for Everyday Essentials pasta. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS7 interpret values of price and income elasticity of demand; QS2 percentages and percentage changes\nKnowledge: 1 mark for the formula: YED = % change in quantity demanded ÷ % change in income\nApplication: up to 3 marks for\n• % change in quantity demanded = (245,000 − 250,000) ÷ 250,000 × 100 = −2% (1)\n• % change in income = (36,400 − 35,000) ÷ 35,000 × 100 = +4% (1)\n• YED = −2 ÷ 4 = −0.5 (1)\nNB: If the only answer given is −0.5 award 4 marks. If the answer is given as +0.5 (sign omitted) award 3 marks, because the sign shows this is an inferior good.` },

      { q: 'Brambling Chocolate Co. is a UK manufacturer of premium chocolate bars. In 2024 world cocoa prices rose to record levels after poor harvests in West Africa, the main cocoa-growing region.\n\nExplain one likely effect of the rise in cocoa prices on the supply of chocolate by Brambling Chocolate Co.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of supply, e.g. the quantity producers are willing and able to sell at each price; or identification that higher costs of production reduce supply\nApplication: up to 2 marks for context, e.g.\n• cocoa is the main raw material in Brambling's premium chocolate\n• the rise was caused by an external shock — poor harvests in West Africa\nAnalysis: 1 mark for a developed consequence, e.g.\n• Higher costs of production shift Brambling's supply curve to the left, so it supplies less at each price, or must raise prices, which may reduce sales if customers switch to cheaper brands.` },

      { q: 'Fizzbrook makes flavoured fizzy drinks. Its best-selling drink contains 9g of sugar per 100ml, so it is subject to the UK Soft Drinks Industry Levy, introduced in 2018, which taxes producers of drinks with high sugar content. A rival reformulated its drinks to reduce sugar below the levy threshold.\n\nAssess the likely effects on Fizzbrook of the Soft Drinks Industry Levy.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• An indirect tax is a tax on spending, paid by producers to the government; it raises costs and shifts the supply curve to the left.\nNegative effects:\n• The levy increases Fizzbrook's costs per litre, shifting supply to the left; it must either absorb the cost (lower margins) or raise prices.\n• If Fizzbrook raises its price, demand may fall because there are close substitutes, including the rival's reformulated lower-sugar drinks, which are not taxed.\n• The levy may also signal health concerns to consumers, reducing demand for high-sugar drinks generally.\nPossible counterbalance:\n• Fizzbrook could reformulate like its rival, reducing sugar below the threshold and avoiding the levy altogether.\n• If its drink has a strong brand and loyal customers, demand may be price inelastic, so it can pass on most of the tax.\n• All producers of high-sugar drinks face the same tax, so Fizzbrook's relative competitiveness may not change much.\nPotential judgement:\n• The effect depends on whether Fizzbrook reformulates: if it does not, the rival's untaxed drinks give customers a cheaper substitute, so the impact on sales and profit is likely to be significant.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Lakeside Cinema sells 5,000 tickets a week at £12 each. The manager plans to cut the price to £10.80. Research estimates that the price elasticity of demand for its tickets is −1.8. The cinema has 7,500 seats available each week. A multiplex owned by a national chain is located 3 miles away.\n\nAssess whether Lakeside Cinema should reduce its ticket price.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Price elasticity of demand measures the responsiveness of quantity demanded to a change in price; −1.8 means demand is price elastic.\nArguments for the price cut:\n• Price falls by 10%, so quantity demanded should rise by 18% to 5,900 tickets; revenue rises from £60,000 to £63,720 (5,900 × £10.80), an increase of £3,720 a week.\n• The cinema has 7,500 seats, so there is spare capacity to meet the extra demand at little extra cost; most cinema costs are fixed.\n• More customers may also increase sales of high-margin food and drink.\nPossible counterbalance:\n• The PED of −1.8 is only an estimate; if demand is less elastic the price cut could reduce revenue.\n• The national multiplex may respond by cutting its own prices, so the expected rise in demand may not happen.\n• Demand depends on other factors, such as the films showing and seasonality, not only price.\nPotential judgement:\n• On the data the price cut is justified because demand is elastic and the cinema has spare capacity, but the gain (£3,720 a week) relies on the rival not reacting and on the accuracy of the estimate.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Coastline Kayak Hire operates on the Cornish coast. It earns 70% of its annual revenue between June and August. In winter it closes three days a week. Its costs include insurance and equipment storage, which must be paid all year round.\n\nAssess the importance of seasonality as a factor affecting demand for Coastline Kayak Hire.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Seasonality is a regular, predictable change in demand linked to the time of year; demand is also affected by incomes, tastes, substitutes and external shocks.\nSeasonality is important:\n• 70% of revenue arrives in three months, so seasonality is the single biggest influence on Coastline's demand and cash flow.\n• Fixed costs such as insurance and storage are paid all year, so the winter months may produce losses and cash shortages.\n• Weather-dependent activities are also affected by unpredictable summers, adding uncertainty.\nOther factors may be as important:\n• Consumer incomes: kayak hire is a leisure activity with a high income elasticity, so a fall in incomes could reduce demand even in summer.\n• Tastes and trends, such as the popularity of outdoor activities and social-media coverage of coastal locations, may shift demand year to year.\n• Competition from other water-sports providers and substitutes such as paddle-boarding will affect Coastline's share of summer demand.\nPotential judgement:\n• Seasonality is the most important factor in the timing of demand, but incomes and tastes may matter more for the overall level of demand from year to year.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Burberry is a British luxury fashion brand. In 2024 it reported falling sales as demand for luxury goods weakened, particularly in China, and it replaced its chief executive. Luxury goods typically have a high positive income elasticity of demand.\n\nAssess the significance of income elasticity of demand to a luxury business such as Burberry.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Income elasticity of demand (YED) measures the responsiveness of demand to a change in real incomes; luxury goods have a YED greater than +1.\nSignificance:\n• With high YED, a fall in real incomes or confidence causes a proportionately larger fall in demand, which helps explain Burberry's falling sales in 2024.\n• Understanding YED helps Burberry forecast sales across the business cycle in different countries, e.g. slower growth in China.\n• YED informs decisions on production, stock and investment — over-producing in a downturn leads to discounting that damages a luxury brand.\nPossible counterbalance:\n• The wealthiest customers may be less affected by economic change, so YED varies by segment.\n• Other factors may explain falling sales — changes in brand strategy, design or pricing — rather than incomes alone.\n• YED values are estimates based on past data and may not predict future behaviour accurately.\nPotential judgement:\n• YED is highly significant for luxury firms because their sales are tied to consumer incomes and confidence, but Burberry's problems suggest brand and strategy decisions also matter, since some luxury rivals performed better in the same conditions.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Greggs has over 2,500 shops in the UK and is known for low-priced products such as its sausage roll. Many shops are located near workplaces, stations and high streets. In recent years Greggs has raised prices several times as ingredient and wage costs increased, while sales continued to grow.\n\nAssess the factors that are likely to influence the price elasticity of demand for Greggs\' products.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• PED measures the responsiveness of demand to a change in price; it is influenced by the availability of substitutes, brand loyalty, the proportion of income spent and whether the product is a necessity or habit.\nFactors making demand price inelastic:\n• A strong brand and loyal customers reduce PED, so Greggs could raise prices while sales continued to grow.\n• Each item is a small proportion of income, so a 10p rise is barely noticed by customers.\n• Convenient locations near workplaces and stations mean customers value speed and habit over price.\nFactors making demand more elastic:\n• There are many substitutes — supermarket meal deals, coffee chains and other bakeries — so repeated price rises could push customers to switch.\n• Greggs' reputation is built on value; if prices rise too far its positioning could be damaged.\n• Cost-of-living pressures may make some customers more price sensitive.\nPotential judgement:\n• Brand strength and convenience are probably the most important factors, making demand relatively price inelastic, but this is limited by the number of substitutes and Greggs' own value positioning.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Roast Republic runs 30 coffee shops in London and the South East. World arabica coffee prices reached record highs in early 2025, and the business also faced rising wage costs. Its average price for a latte is £3.60, while a large national chain charges £3.95 and independent cafés nearby charge £3.40–£4.20. Roast Republic\'s operating profit margin has fallen from 9% to 5%.\n\nEvaluate whether Roast Republic should pass its rising costs on to customers through higher prices.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• A rise in the cost of inputs shifts supply to the left; whether a firm can raise prices without losing much revenue depends on price elasticity of demand.\nArguments for raising prices:\n• Cost rises from coffee beans and wages affect all coffee shops, so rivals are likely to raise prices too, limiting any loss of customers.\n• Roast Republic's latte (£3.60) is below the national chain (£3.95), so it has room to raise prices and remain competitive.\n• Its margin has fallen from 9% to 5%; without higher prices profit may fall further, limiting investment.\nArguments against:\n• Coffee has many substitutes (independents, supermarket coffee, home-brewing), so demand may be price elastic and revenue could fall.\n• Customers are sensitive to the cost of daily purchases; a price rise could damage loyalty built on value.\n• It could instead cut costs, e.g. renegotiate supplier contracts or improve staff scheduling, protecting its price advantage.\nPossible recommendations / judgement:\n• A moderate price rise (e.g. to around £3.80) is likely to be justified because the external shock affects all competitors and Roast Republic remains below its main rival; the key factor is PED, which it should test in a few shops before rolling out.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Silverline Holidays provides escorted coach and river-cruise holidays for customers aged over 60. The UK population aged 65 and over is growing, and many retired customers have significant savings. However, bookings fell during a period of high inflation, and several competitors now target the same age group with cheaper packages.\n\nTo what extent are changes in demographics the most important factor affecting demand for Silverline Holidays?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Demographics are the characteristics of a population, such as age structure; demand can also change due to incomes, tastes, substitutes, advertising and external shocks.\nDemographics are the most important factor:\n• A growing over-65 population increases the size of Silverline's target market year after year, a long-term structural driver of demand.\n• Retired customers often have time and savings, so an ageing population raises demand for leisure travel.\n• Unlike short-term factors, demographic change is predictable, so it is central to Silverline's long-term planning.\nOther factors may be more important:\n• Bookings fell during high inflation, showing that real incomes and confidence can outweigh demographic growth in the short term.\n• Competitors offering cheaper packages provide substitutes, so Silverline's own demand depends on price and differentiation.\n• Tastes of younger retirees may differ — preferring independent travel — so a larger older population does not automatically mean more demand for escorted coach tours.\nPossible recommendations / judgement:\n• Demographics are the most important factor in the long run because they determine market size, but in the short run incomes and competition have a larger effect on Silverline's bookings. Silverline should use its market growth while differentiating from cheaper rivals.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 1.3 Marketing Mix & Strategy ────────────────────────── */
  '1.3': {
    name: 'Marketing Mix & Strategy',
    questions: [
      { q: 'Oakden Furniture makes solid oak dining tables. The unit cost of each table is: materials £180, labour £140, and overheads £80. Oakden uses cost-plus pricing with a mark-up of 45%.\n\nCalculate the selling price of an Oakden dining table. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS5 calculate cost, revenue, profit and break-even; QS2 percentages\nKnowledge: 1 mark for the formula: selling price = unit cost + (unit cost × mark-up %)\nApplication: up to 3 marks for\n• Unit cost = 180 + 140 + 80 = £400 (1)\n• Mark-up = 400 × 45% = £180 (1)\n• Selling price = 400 + 180 = £580 (1)\nNB: If the only answer given is £580 award 4 marks. If the mark-up is applied to materials only or to the wrong total, award up to 2 marks for correct method.` },

      { q: 'Aurel Audio has developed noise-cancelling earbuds using a patented technology that no competitor currently offers. It plans to launch them at £299, compared with around £150 for rival earbuds.\n\nExplain one benefit to Aurel Audio of using price skimming.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of price skimming, e.g. setting a high initial price for a new product and lowering it over time; or identifying a benefit such as recovering development costs quickly\nApplication: up to 2 marks for context, e.g.\n• the earbuds use patented technology, a USP no rival offers\n• the launch price of £299 is about double rivals' £150\nAnalysis: 1 mark for a developed consequence, e.g.\n• Early adopters who value the new technology are willing to pay £299, so Aurel earns a high profit margin that helps recover its research and development costs before competitors develop similar technology.` },

      { q: 'Lush sells cosmetics such as shampoo bars and soaps, many of which are sold "naked" — without any packaging. It also runs a scheme where customers can return its black pots for recycling.\n\nExplain one benefit to Lush of designing its products to reduce waste.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of the design mix/waste minimisation, e.g. designing products to minimise waste, re-use and recycling in response to social trends; or identifying a benefit such as lower costs or stronger brand image\nApplication: up to 2 marks for context, e.g.\n• Lush sells shampoo bars and soaps without packaging\n• customers can return black pots for recycling\nAnalysis: 1 mark for a developed consequence, e.g.\n• Consumers concerned about plastic waste are attracted to Lush's packaging-free products, which differentiates the brand and builds loyalty, while also cutting packaging costs per unit.` },

      { q: 'Brightside Skincare is a small UK brand selling affordable skincare online. It spends 60% of its £200,000 promotion budget paying social media influencers to review its products on TikTok and Instagram. Its sales grew by 45% last year, mostly from customers aged 16–24.\n\nAssess the use of social media influencers as a way for Brightside Skincare to build its brand.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• A brand is a name, design or symbol that identifies a product and distinguishes it from rivals; influencer marketing is a form of promotion using social media personalities.\nBenefits:\n• Influencers reach the 16–24 age group where Brightside's sales growth has come from, targeting promotion efficiently.\n• Reviews from trusted influencers can build credibility and create viral marketing, strengthening the brand faster than traditional advertising.\n• Sales grew 45%, suggesting the approach is working.\nPossible counterbalance:\n• Spending 60% of the budget on one method is risky; an influencer controversy could damage the brand.\n• Influencer marketing is easily copied by rivals, and paid posts may be seen as less authentic by consumers.\n• It may not reach older customers, limiting future growth.\nPotential judgement:\n• Influencers are an effective way for Brightside to build its brand among young customers, but it should reduce its dependence on them by also developing its own content and USPs.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Kindred Foods has four products. Its data shows: Crunch granola — market share 22%, market growth 1%; Tide oat bars — market share 3%, market growth 14%; Rise protein cereal — market share 18%, market growth 12%; Classic muesli — market share 2%, market growth −3%.\n\nAssess the usefulness of the Boston Matrix to Kindred Foods in managing its product portfolio.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• The Boston Matrix classifies products by market share and market growth into stars, cash cows, question marks (problem children) and dogs.\nUsefulness:\n• It shows Crunch is a cash cow (high share, low growth) whose cash could fund Tide, a question mark in a fast-growing market.\n• Rise is a star (high share, high growth) that needs continued investment; Classic muesli is a dog and may be withdrawn or repositioned.\n• It helps Kindred balance its portfolio so cash from mature products supports future growth.\nLimitations:\n• It considers only market share and growth; it ignores profitability — Classic muesli might still be profitable.\n• Categories are snapshots; market growth rates may change quickly.\n• It does not tell Kindred how to invest, e.g. whether Tide needs promotion, distribution or price changes.\nPotential judgement:\n• The Boston Matrix is a useful starting point for Kindred because the data clearly separates its products, but decisions should also use profit data and market research.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Tread Cycles has sold premium bicycles for £1,200–£2,500 in its two shops for 15 years. Sales have fallen by 20% over two years. It plans to launch a subscription service: customers pay £35 a month for a bike, servicing and insurance, and can swap bikes each year.\n\nAssess whether Tread Cycles will benefit from changing from selling a product to providing a service.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Changing from product to service is a social trend in distribution where customers pay for access (e.g. subscription) rather than ownership.\nBenefits:\n• £35 a month is much more affordable than £1,200+, widening the market to customers who cannot pay upfront.\n• Subscriptions provide regular, predictable revenue (£420 a year per customer), improving cash-flow forecasting.\n• Servicing and swapping build an ongoing relationship, increasing customer loyalty.\nPossible counterbalance:\n• Tread must buy the bikes upfront, so it needs finance before revenue arrives, and it takes around 3–6 years of subscriptions to match the price of one bike.\n• Bikes may be damaged or stolen; insurance and repair costs could reduce profit.\n• Customers may cancel, and the model is easily copied by larger retailers.\nPotential judgement:\n• The change could reverse the 20% fall in sales, but Tread must ensure it can finance the stock of bikes; a trial with a limited fleet would reduce risk.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Kit Kat, owned by Nestlé, was first sold in the 1930s. It has used extension strategies such as the Kit Kat Chunky, limited-edition flavours and new pack sizes, and it promotes the brand through its "Have a break" slogan. The UK confectionery market is mature and highly competitive.\n\nAssess the importance of extension strategies to the continued success of Kit Kat.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• The product life cycle shows the stages of a product's sales over time; extension strategies are actions to prolong the maturity stage, such as product changes or new promotion.\nImportance:\n• In a mature, competitive market, new variants such as Kit Kat Chunky and limited editions keep the brand fresh and attract new customers.\n• New pack sizes can reach new segments and distribution channels (e.g. sharing bags, multipacks), extending sales.\n• Promotion that reinforces "Have a break" maintains brand awareness and loyalty.\nPossible counterbalance:\n• Kit Kat's strong brand and wide distribution may be more important than extensions in maintaining sales.\n• Too many variants may confuse customers or cannibalise sales of the original bar.\n• Extension strategies cost money; limited editions may produce short-term spikes but not long-term growth.\nPotential judgement:\n• Extension strategies are important because Kit Kat is in a mature market, but they work only because the core brand is strong; the brand is the main reason for its success.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Northway Insurance sells car insurance. 70% of its new customers arrive through price comparison websites, where products are ranked by price. Northway\'s prices are usually in the top five results, but its profit margin on new policies is very low. Its competitors frequently change prices daily.\n\nAssess the impact of price comparison websites on Northway Insurance\'s pricing strategy.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Price comparison sites allow consumers to compare prices from many suppliers quickly; they are a social trend affecting pricing strategy.\nImpact:\n• Customers can see all prices at once, making demand highly price elastic and forcing Northway to use competitive pricing to stay in the top five.\n• Rivals change prices daily, so Northway must monitor and adjust prices frequently, adding cost.\n• Very low margins on new policies mean Northway must rely on renewals or add-ons to make a profit.\nPossible counterbalance:\n• Northway could build its brand and differentiate on service, e.g. claims handling, reducing reliance on price.\n• 30% of new customers come through other channels, where Northway may charge higher prices.\n• Comparison sites give access to a very large market at low marketing cost, which benefits Northway.\nPotential judgement:\n• Price comparison sites have forced Northway into competitive pricing, but the impact depends on its ability to differentiate; without it, low margins are likely to continue.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Voltra is a new UK e-bike brand. Its e-bikes cost £900 each to produce. Established rivals sell similar models for £1,300–£2,000. Voltra has limited brand recognition but has raised £3m of investment to fund its launch. The UK e-bike market is growing, and several large retailers sell their own-brand e-bikes.\n\nEvaluate whether penetration pricing is the most appropriate pricing strategy for Voltra.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Penetration pricing is setting a low initial price to gain market share quickly, then raising it later; factors affecting the choice include USPs, PED, competition, brand strength, life cycle stage and costs.\nArguments for penetration pricing:\n• Voltra has limited brand recognition; a low price (e.g. £1,099) could attract customers from established brands and build market share in a growing market.\n• Demand for similar e-bikes is likely to be price elastic because there are many competitors, including retailers' own brands.\n• £3m of investment allows Voltra to accept lower margins initially while volume builds and economies of scale reduce unit cost.\nArguments against / alternatives:\n• At a unit cost of £900, a very low price leaves little margin; if rivals cut prices Voltra could make losses.\n• A low price may signal low quality in a market where reliability and battery life matter.\n• It is hard to raise prices later without losing customers; competitive pricing near £1,300 with a clear USP may be more sustainable.\nPossible recommendations / judgement:\n• Penetration pricing is appropriate if Voltra has no strong USP and aims for market share in a growing market; if it has a differentiated product, competitive pricing would protect margins.\n• The choice depends on the price elasticity of demand and how rivals respond.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'From 2017, and more sharply from 2020, Nike reduced the number of retailers it sold through, to focus on direct-to-consumer sales through its own website, app and stores. By 2024 sales growth had slowed, rivals such as On and Hoka had gained space in sports retailers, and a new chief executive, Elliott Hill, began rebuilding relationships with wholesale partners.\n\nTo what extent should a business such as Nike rely on direct distribution rather than selling through retailers?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• A distribution channel is the route by which a product reaches the consumer; direct channels cut out intermediaries, while indirect channels use wholesalers or retailers.\nArguments for direct distribution:\n• Selling directly captures the retailer's margin, increasing profit per unit.\n• Nike controls the customer experience and brand presentation, protecting its premium image.\n• Its website and app provide customer data that can be used to personalise marketing and build loyalty.\nArguments for using retailers:\n• Reducing retail partners gave shelf space to rivals such as On and Hoka, so Nike lost visibility with customers who shop in sports retailers.\n• Retailers provide wide reach at lower cost; direct channels require investment in logistics, stores and online marketing.\n• Many consumers prefer to compare brands in one place, so a direct-only approach may lose sales.\nPossible recommendations / judgement:\n• Nike should use a mix of channels: direct channels for margin and data, retailers for reach and visibility. Its experience up to 2024 suggests relying too heavily on direct distribution allowed competitors to gain market share.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 1.4 Managing People ─────────────────────────────────── */
  '1.4': {
    name: 'Managing People',
    questions: [
      { q: 'Marlow Motors sells used cars. Sales staff receive a basic salary of £21,000 a year plus commission of 1.5% of the value of cars they sell. Last year, Jess sold 38 cars at an average price of £24,500.\n\nCalculate Jess\'s total pay for last year. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS2 calculate, use and understand percentages; QS5 calculate cost, revenue and profit\nKnowledge: 1 mark for understanding of commission, e.g. a payment based on a percentage of the value of sales made\nApplication: up to 3 marks for\n• Value of sales = 38 × 24,500 = £931,000 (1)\n• Commission = 931,000 × 1.5% = £13,965 (1)\n• Total pay = 21,000 + 13,965 = £34,965 (1)\nNB: If the only answer given is £34,965 award 4 marks.` },

      { q: 'Feast & Field provides catering for summer music festivals. It has 12 permanent staff but employs around 150 temporary staff on short contracts between May and September.\n\nExplain one benefit to Feast & Field of having a flexible workforce.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of a flexible workforce, e.g. using part-time, temporary or multi-skilled staff so that labour can be adjusted to demand; or identifying a benefit such as lower costs\nApplication: up to 2 marks for context, e.g.\n• Feast & Field has only 12 permanent staff\n• it employs 150 temporary staff for the festival season\nAnalysis: 1 mark for a developed consequence, e.g.\n• Because it employs temporary staff only when festivals run, Feast & Field avoids paying wages during quieter months, reducing costs and improving cash flow.` },

      { q: 'Pennine Logistics operates a warehouse where one supervisor manages 25 warehouse operatives on each shift. The operatives carry out routine picking and packing tasks.\n\nExplain one disadvantage to Pennine Logistics of a wide span of control.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of span of control, e.g. the number of subordinates directly managed by one person; or identifying a disadvantage such as less supervision\nApplication: up to 2 marks for context, e.g.\n• one supervisor manages 25 warehouse operatives\n• operatives carry out picking and packing\nAnalysis: 1 mark for a developed consequence, e.g.\n• With 25 operatives, the supervisor has limited time to check each person's work, so picking errors may go unnoticed, leading to wrong deliveries and customer complaints.` },

      { q: 'Hartwell Hotels has 14 hotels in Scotland. The general manager of its Edinburgh hotel is retiring. The deputy manager has worked for Hartwell for nine years and has good relationships with staff. The Edinburgh hotel\'s customer ratings have fallen over the past two years, and the owners want new ideas to improve them.\n\nAssess the benefits to Hartwell Hotels of recruiting the new general manager internally.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• Internal recruitment is filling a vacancy with an existing employee, e.g. by promotion.\nBenefits:\n• The deputy already knows Hartwell's procedures and staff, so induction training costs and time are lower.\n• Promotion motivates other staff by showing career opportunities exist, reducing labour turnover.\n• Hartwell knows the deputy's performance over nine years, reducing the risk of a poor appointment.\nPossible counterbalance:\n• Ratings have fallen for two years; the deputy may share responsibility and may not bring the new ideas the owners want.\n• External recruitment would widen the pool of candidates, possibly bringing experience from successful hotels.\n• Promoting the deputy creates another vacancy to fill.\nPotential judgement:\n• Internal recruitment is cheaper and less risky, but because the owners want fresh ideas to reverse falling ratings, external recruitment may be more beneficial in this case.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Crestline Contact Centre employs 300 staff who answer customer calls for energy companies. Pay is above the local average, but staff absence is high and labour turnover is 45% a year. Staff surveys say the work is repetitive, closely monitored and offers little recognition.\n\nAssess the usefulness of Herzberg\'s two-factor theory to Crestline Contact Centre in reducing labour turnover.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Herzberg identified hygiene factors (e.g. pay, working conditions) that prevent dissatisfaction, and motivators (e.g. recognition, responsibility, achievement) that create motivation.\nUsefulness:\n• Pay is above average (hygiene factor met), yet turnover is 45% — consistent with Herzberg: good pay alone does not motivate.\n• Herzberg suggests job enrichment, recognition and responsibility, which address the survey complaints of repetitive, closely monitored work.\n• Reducing turnover lowers recruitment and training costs and improves the quality of customer service.\nLimitations:\n• Contact-centre work is standardised, so there may be limited scope for enrichment without affecting efficiency.\n• Close monitoring may be a hygiene issue (supervision) rather than lack of motivators; Crestline must fix both.\n• Herzberg's research was based on professional workers and may not apply to every workforce.\nPotential judgement:\n• Herzberg is useful because it explains why above-average pay has not reduced turnover, but Crestline must balance enrichment with the need to handle calls efficiently.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Nova Insurance employs 1,200 staff. It plans to reduce its hierarchy from seven levels to four, removing 80 middle-management posts. Managers\' spans of control will increase from 6 to 12. Nova wants to cut costs and speed up decisions on customer claims.\n\nAssess the likely impact on Nova Insurance of moving to a flatter organisational structure.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• A flat structure has few levels of hierarchy and wide spans of control; delayering is removing levels of hierarchy.\nBenefits:\n• Removing 80 middle-management posts cuts salary costs significantly.\n• Shorter chains of command speed up communication and decisions on claims, improving customer service.\n• Wider spans of control may require managers to delegate, which could motivate staff through empowerment.\nPossible counterbalance:\n• Spans of 12 may overload managers, reducing supervision and quality of claims decisions.\n• Redundancies may lower morale among remaining staff and reduce promotion opportunities.\n• Nova could lose experienced managers' knowledge; redundancy payments are a short-term cost.\nPotential judgement:\n• A flatter structure is likely to improve efficiency if staff are trained and trusted to make decisions; the impact depends on how well the change is managed.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Keystone Build is a construction company employing 90 skilled tradespeople. Its new managing director uses an autocratic leadership style, making all decisions and giving detailed instructions. He argues this is necessary because building sites are dangerous. Several experienced site managers have resigned since he joined.\n\nAssess whether an autocratic leadership style is appropriate for Keystone Build.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Autocratic leadership is where the leader makes decisions alone and expects instructions to be followed; other styles include democratic, paternalistic and laissez-faire.\nArguments for autocratic leadership:\n• Building sites carry serious safety risks, so clear instructions and strict rules reduce accidents and legal action.\n• Quick decisions can keep projects on time, avoiding penalty clauses.\n• A new leader may need to establish control and consistent standards.\nArguments against:\n• Skilled tradespeople may resent being given detailed instructions; the resignation of experienced site managers suggests demotivation.\n• Losing experienced staff increases recruitment costs and may itself reduce safety.\n• A democratic style would use the expertise of staff and could improve problem solving on site.\nPotential judgement:\n• An autocratic style is appropriate for safety procedures, but for a skilled workforce a more democratic style for other decisions would reduce labour turnover; the most suitable style depends on the situation.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'The Tavern Group owns 60 pubs. Labour turnover among bar staff is 70% a year. Each new employee receives two days of off-the-job training at a central academy, costing £1,200 per person including travel and lost working time. Managers propose replacing this with on-the-job training delivered by experienced staff in each pub.\n\nAssess whether The Tavern Group should replace off-the-job training with on-the-job training.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• On-the-job training takes place in the workplace while working; off-the-job training takes place away from the workplace, e.g. at a training centre.\nArguments for on-the-job training:\n• With 70% turnover, spending £1,200 per new employee is costly; on-the-job training avoids travel and time away from work.\n• Training is specific to each pub's systems and customers, so staff become productive quickly.\n• Experienced staff who train others may feel valued, improving their motivation.\nArguments against:\n• Quality of training may vary between pubs, leading to inconsistent service standards across the group.\n• Experienced staff have less time for customers while training others, reducing productivity.\n• Off-the-job training may cover legal requirements (e.g. licensing, food safety) more thoroughly.\nPotential judgement:\n• The Tavern Group should use on-the-job training for most skills because of the high turnover, while keeping a short off-the-job or online module for legal requirements.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Timpson provides key cutting, shoe repairs and other services through more than 1,000 UK shops. It uses what it calls "upside-down management": staff in each shop are trusted to run it their way and can spend up to £500 to settle a customer complaint without asking permission. Timpson also recruits ex-offenders.\n\nEvaluate whether non-financial methods, such as empowerment, are the most effective way for businesses such as Timpson to improve employee performance.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Empowerment gives employees the authority to make decisions; non-financial techniques include delegation, consultation, team working, job enrichment and flexible working.\nArguments for non-financial methods:\n• Allowing staff to spend up to £500 to settle complaints shows trust, which may increase motivation (Herzberg's responsibility; Maslow's esteem needs).\n• Staff can resolve problems immediately, improving customer satisfaction and repeat business.\n• Recruiting ex-offenders and trusting them may create strong loyalty, reducing labour turnover and recruitment costs.\nArguments for financial methods:\n• Staff still need fair pay; if pay is low, empowerment may not prevent dissatisfaction (Herzberg's hygiene factors).\n• Bonuses or commission linked to sales could directly encourage higher performance in a retail service business.\n• Empowerment carries risks — inconsistent decisions or misuse of the £500 authority — so it requires careful recruitment and training.\nPossible recommendations / judgement:\n• Non-financial methods are effective where staff deal directly with customers and pay is already fair; combining empowerment with performance-related bonuses may give the best results.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Parcelpoint is a parcel delivery company with 4,000 couriers. 80% are self-employed and paid per parcel delivered; the rest are full-time employees. Parcelpoint\'s costs are lower than rivals\', but it has received complaints about missed deliveries and a trade union is campaigning for couriers to be given employee rights.\n\nTo what extent should Parcelpoint rely on self-employed couriers rather than employees?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• A flexible workforce uses part-time, temporary, self-employed or outsourced workers; staff can be seen as a cost to minimise or an asset to develop.\nArguments for self-employed couriers:\n• Paying per parcel makes labour a variable cost, so costs fall when demand falls, giving Parcelpoint a price advantage.\n• It can increase capacity quickly at peak times such as Christmas without long-term commitments.\n• Lower costs support competitive prices in a price-sensitive market.\nArguments for employees:\n• Treating staff as a cost may reduce commitment; missed deliveries damage Parcelpoint's reputation with retailers.\n• Employees can be trained and managed more closely, improving service quality.\n• Trade union pressure (collective bargaining) and possible legal changes could force Parcelpoint to change anyway, with bad publicity in the meantime.\nPossible recommendations / judgement:\n• Parcelpoint should keep some flexibility but increase its proportion of employed couriers, because service quality and reputation are becoming more important than small cost savings; the balance depends on whether customers value price or reliability more.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 1.5 Entrepreneurs & Leaders ─────────────────────────── */
  '1.5': {
    name: 'Entrepreneurs & Leaders',
    questions: [
      { q: 'Amira Haddad left her job as an accountant in 2021 to set up Spice Route Kitchens, which delivers Middle Eastern meal kits. She used £20,000 of her savings, but banks refused her a loan because she had no trading history.\n\nExplain one barrier to entrepreneurship that Amira faced.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of a barrier to entrepreneurship, e.g. difficulty obtaining finance, lack of experience, risk of losing income; or identifying a relevant barrier\nApplication: up to 2 marks for context, e.g.\n• banks refused Amira a loan because she had no trading history\n• she gave up a secure job as an accountant and used £20,000 of savings\nAnalysis: 1 mark for a developed consequence, e.g.\n• Without a loan, Amira was limited to her own savings, so she could only start on a small scale, limiting how quickly Spice Route Kitchens could grow.` },

      { q: 'Dan Okafor owns a barbershop. He has £40,000 of savings and must choose between opening a second shop or buying new equipment to offer beard treatments and hair colouring in his existing shop.\n\nExplain the opportunity cost to Dan of opening a second barbershop.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of opportunity cost, e.g. the next best alternative given up when making a choice\nApplication: up to 2 marks for context, e.g.\n• Dan has £40,000 of savings\n• the alternative is equipment for new services in his existing shop\nAnalysis: 1 mark for a developed consequence, e.g.\n• By opening a second shop, Dan gives up the revenue that new beard and colouring services would have generated in his existing shop, so he should compare the likely returns of each option.` },

      { q: 'Lumen Software employs 250 people. It allows its developers to spend 10% of their working week on their own projects. Two of Lumen\'s most profitable products started as employee side projects.\n\nExplain one benefit to Lumen Software of encouraging intrapreneurship.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of intrapreneurship, e.g. employees acting as entrepreneurs within a business; or identifying a benefit such as innovation or motivation\nApplication: up to 2 marks for context, e.g.\n• developers spend 10% of their week on their own projects\n• two of Lumen's most profitable products started as side projects\nAnalysis: 1 mark for a developed consequence, e.g.\n• Intrapreneurship generates new product ideas from within, giving Lumen a competitive advantage through innovation without having to acquire other businesses.` },

      { q: 'Spice Route Kitchens is run by Amira Haddad as a sole trader. Revenue has grown to £420,000 a year, and she now employs six staff. She wants to open a production kitchen, costing £150,000, and supply meal kits to a supermarket chain. She is considering converting the business to a private limited company.\n\nAssess the benefits to Amira of converting Spice Route Kitchens to a private limited company.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• A private limited company (Ltd) is owned by shareholders with limited liability and is a separate legal entity from its owners; a sole trader has unlimited liability.\nBenefits:\n• Limited liability protects Amira's personal assets if the £150,000 investment fails.\n• She could raise finance by selling shares to investors, e.g. a business angel.\n• Supermarket buyers may see a company as more credible and established than a sole trader.\nPossible counterbalance:\n• Selling shares means Amira gives up some ownership and control.\n• Accounts must be filed at Companies House and are publicly available.\n• There are extra administrative and accounting costs.\nPotential judgement:\n• Given the size of the investment and the risk of supplying a supermarket, limited liability is likely to outweigh the extra administration.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Kid Kinetics is a franchise offering sports classes for children aged 2–7. A franchise costs £14,995 upfront plus a monthly royalty of 7% of revenue. Franchisees receive training, a recognised brand, lesson plans and national marketing. Holly, a former PE teacher, is deciding whether to buy a Kid Kinetics franchise or set up her own business.\n\nAssess whether Holly should buy a Kid Kinetics franchise rather than set up her own business.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• A franchise is where a franchisee pays to use the franchisor's brand and business model, usually through an upfront fee and ongoing royalties.\nArguments for the franchise:\n• An established brand and national marketing make it easier to attract parents quickly, reducing the risk of failure.\n• Training and lesson plans give Holly a proven business model.\n• Banks may be more willing to lend for a recognised franchise.\nArguments against:\n• £14,995 plus 7% of revenue significantly reduces Holly's profit.\n• Holly has PE experience and may be able to create her own classes without paying for them.\n• She must follow the franchisor's rules, limiting independence — a key reason people start businesses.\nPotential judgement:\n• The franchise reduces risk for a first-time business owner, but if Holly's main motive is independence and she has strong local contacts, setting up alone may be more rewarding.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'The Big Issue was founded in 1991 as a social enterprise. Vendors, who are homeless or vulnerably housed, buy magazines at half the cover price and sell them at the full price, keeping the difference. Magazine sales have been affected by the decline of print media, and the organisation has developed other activities, including investment in social enterprises.\n\nAssess whether The Big Issue should prioritise social objectives over profit.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• A social enterprise is a business with mainly social or environmental objectives that reinvests its surpluses in its purpose.\nArguments for prioritising social objectives:\n• Its purpose is to help vendors earn a legitimate income, so this is why the organisation exists.\n• Its social mission gives it a distinctive brand, encouraging customers to buy.\n• Supporters and partners may be more willing to fund it because of its social impact.\nArguments for more focus on profit:\n• With print media in decline, it needs a surplus to survive; without it, it cannot support vendors at all.\n• Profit funds investment in digital products and new social enterprises, increasing long-term impact.\n• Profit and social objectives are not necessarily in conflict — a stronger surplus supports the mission.\nPotential judgement:\n• Social objectives should remain the priority, but The Big Issue must generate enough surplus to survive the decline in print; profit is a means to its social ends.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'In June 2024 Raspberry Pi Holdings floated on the London Stock Exchange, becoming a public limited company. Raspberry Pi makes low-cost single-board computers used in education and industry. Before flotation, a major shareholder was the Raspberry Pi Foundation, an educational charity.\n\nAssess the benefits to a business such as Raspberry Pi of becoming a public limited company through a stock market flotation.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• A public limited company (plc) can sell its shares to the general public on a stock exchange; flotation is the process of first offering shares to the public.\nBenefits:\n• Flotation can raise large amounts of capital for research and development and expansion, which does not need to be repaid.\n• Existing shareholders, including the Foundation, can sell some shares, releasing funds for their educational work.\n• A listing raises the company's profile with customers and suppliers, and shares can be used to reward staff.\nPossible counterbalance:\n• Flotation is expensive and time-consuming, with ongoing reporting costs.\n• Shareholders may press for short-term profit, which may conflict with the educational mission of low-cost computers.\n• The company is exposed to share price volatility and the risk of takeover.\nPotential judgement:\n• The benefits of raising capital and profile are significant, but the key issue is whether the need for shareholder returns will conflict with its low-cost, educational objectives.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Tom Reyes founded Hive Home Fitness, which sells smart exercise equipment, in his garage in 2019. He designed the products, answered customer emails and managed all the finances. The business now has 120 employees and three departments, but managers complain that Tom still wants to approve every decision, slowing down product launches.\n\nAssess the difficulties Tom faces in moving from being an entrepreneur to a leader of Hive Home Fitness.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• An entrepreneur takes the risk of starting a business; a leader sets direction, motivates and delegates in a larger organisation.\nDifficulties:\n• Tom is used to doing everything himself and struggles to delegate, creating a bottleneck in decision making.\n• The skills needed to lead 120 staff and three departments are different from those needed to design products.\n• Managers' frustration may lead to demotivation and labour turnover of key staff.\nPossible counterbalance:\n• Tom's knowledge of the products and customers is valuable, and his involvement can protect quality.\n• He could recruit experienced managers or a chief operating officer to handle day-to-day decisions.\n• Leadership training and a clearer organisational structure could help him adapt.\nPotential judgement:\n• The difficulties are significant because they are already slowing product launches; the key factor is whether Tom is willing to delegate or bring in experienced leaders.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Patagonia is a US outdoor clothing company. In 2022 its founder, Yvon Chouinard, transferred ownership of the company to a trust and a non-profit organisation so that profits not reinvested in the business are used to fight climate change. Patagonia encourages customers to repair its products rather than buy new ones.\n\nTo what extent can a business such as Patagonia succeed by prioritising social objectives over profit maximisation?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Profit maximisation is aiming to make the largest possible profit; social objectives aim to benefit society or the environment.\nArguments that it can succeed:\n• A clear ethical stance differentiates Patagonia, allowing premium prices and building strong loyalty among customers who share its values.\n• Its reputation may attract motivated employees and free publicity, lowering marketing costs.\n• Encouraging repair builds trust and brand value, supporting long-term sales.\nArguments against:\n• Encouraging repair rather than new purchases may reduce sales volume and revenue.\n• Without profit maximisation, it may have less to invest than competitors in design and expansion.\n• Many customers are price sensitive; social objectives work best for a premium brand with wealthy customers.\nPossible recommendations / judgement:\n• A business like Patagonia can succeed because its social objectives are part of what customers pay for; however it still needs to make a profit, so it is profit satisficing rather than ignoring profit. The approach may not work for businesses in price-competitive mass markets.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Spice Route Kitchens has revenue of £420,000 and makes a profit of £60,000. Amira Haddad works 60 hours a week. A supermarket has offered a national supply contract that would treble revenue but require a £150,000 production kitchen, 20 extra staff and fixed delivery deadlines. Amira started the business partly to have more independence and time with her family.\n\nEvaluate whether Amira should accept the supermarket contract or keep Spice Route Kitchens as a lifestyle business.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• A lifestyle business is run mainly to support the owner's preferred way of life rather than to maximise growth; business choices involve trade-offs and opportunity costs.\nArguments for accepting the contract:\n• Trebling revenue from £420,000 could increase profit significantly and allow economies of scale.\n• A national supermarket contract raises the brand's profile and could lead to further growth.\n• The opportunity may not come again; rejecting it could allow a competitor to take the space.\nArguments for staying a lifestyle business:\n• Amira's non-financial motives — independence and family time — would be sacrificed; she already works 60 hours a week.\n• Dependence on one large customer is risky; supermarkets can squeeze margins or cancel contracts.\n• The £150,000 investment and 20 staff create financial and management risk (entrepreneur to leader).\nPossible recommendations / judgement:\n• The decision depends on Amira's objectives: if profit and growth are now her aim, the contract is attractive; if independence remains the priority, she should decline or negotiate a smaller trial contract.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 2.1 Raising Finance ─────────────────────────────────── */
  '2.1': {
    name: 'Raising Finance',
    questions: [
      { q: 'Hollybank Café\'s cash-flow forecast for March shows: opening balance −£2,400; total cash inflows £18,600; cash outflows: wages £7,200, food and drink supplies £5,900, rent £2,500, other costs £1,800.\n\nCalculate Hollybank Café\'s forecast closing balance for March. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS5 calculate cost, revenue, profit; QS9 interpret numerical information\nKnowledge: 1 mark for the formula: closing balance = opening balance + net cash flow (inflows − outflows)\nApplication: up to 3 marks for\n• Total outflows = 7,200 + 5,900 + 2,500 + 1,800 = £17,400 (1)\n• Net cash flow = 18,600 − 17,400 = £1,200 (1)\n• Closing balance = −2,400 + 1,200 = −£1,200 (1)\nNB: If the only answer given is −£1,200 or (£1,200) award 4 marks. If given as £1,200 without a negative sign award 3 marks.` },

      { q: 'Kiln & Co. is a pottery studio. Its cash-flow forecast for April shows an opening balance of £3,500, cash inflows of £12,000 and cash outflows of £13,100. The owner is worried that inflows could be 20% lower than forecast.\n\nCalculate Kiln & Co.\'s closing balance for April if cash inflows are 20% lower than forecast. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS2 percentages and percentage changes; QS9 interpret numerical information\nKnowledge: 1 mark for the formula: closing balance = opening balance + inflows − outflows\nApplication: up to 3 marks for\n• Revised inflows = 12,000 × 0.8 = £9,600 (1)\n• Net cash flow = 9,600 − 13,100 = −£3,500 (1)\n• Closing balance = 3,500 − 3,500 = £0 (1)\nNB: If the only answer given is £0 or zero award 4 marks. The original forecast closing balance (£2,400) scores 1 mark for knowledge only.` },

      { q: 'Greenroot Vertical Farms grows salad leaves indoors using LED lighting. Its founders are applying for a £250,000 bank loan to open a second farm. They have prepared a business plan including sales forecasts, a cash-flow forecast and details of contracts with two restaurant chains.\n\nExplain one reason why a business plan may help Greenroot Vertical Farms obtain a bank loan.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of a business plan, e.g. a document setting out the objectives, strategy and financial forecasts of a business; or identifying a reason such as showing the ability to repay\nApplication: up to 2 marks for context, e.g.\n• Greenroot wants a £250,000 loan for a second farm\n• its plan includes a cash-flow forecast and contracts with two restaurant chains\nAnalysis: 1 mark for a developed consequence, e.g.\n• The cash-flow forecast and contracts show the bank that Greenroot is likely to generate enough cash to make repayments, reducing the perceived risk of lending.` },

      { q: 'The Crafty Pint is a brewpub run as a partnership by two friends. It wants £120,000 to build a bottling line. It is considering equity crowdfunding through an online platform, offering 15% of a new company to hundreds of small investors, many of whom are regular customers.\n\nAssess the benefits to The Crafty Pint of raising finance through crowdfunding.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• Crowdfunding is raising finance from a large number of people, each contributing a small amount, usually via an online platform.\nBenefits:\n• It can raise £120,000 without interest payments or the need for security that a bank might require.\n• Investors who are customers become brand ambassadors, increasing loyalty and word of mouth.\n• The campaign itself acts as promotion and tests demand for bottled products.\nPossible counterbalance:\n• The owners give up 15% of the business, diluting control and future profits.\n• If the target is not reached, the campaign may fail publicly, damaging reputation.\n• Platform fees and the cost of the campaign reduce the finance raised; a partnership would need to form a company first.\nPotential judgement:\n• Crowdfunding suits a consumer-facing business with a loyal following like The Crafty Pint; the loss of 15% ownership is a reasonable trade-off if it avoids personal risk for the partners.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Ellis Plumbing is run by Sam Ellis as a sole trader. Sam needs a new van costing £28,000. Options include a five-year bank loan at 8.5% interest, or leasing a van for £520 a month including servicing. Sam\'s business has uneven monthly cash flow.\n\nAssess whether leasing is the most suitable method of finance for Ellis Plumbing to obtain a new van.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Leasing is paying to use an asset for a period without owning it; a bank loan is borrowed money repaid with interest over a set period.\nArguments for leasing:\n• No large upfront payment, protecting Sam's limited cash.\n• Servicing is included, making costs predictable — useful given uneven cash flow.\n• As a sole trader with unlimited liability, avoiding a large loan reduces personal risk.\nArguments for a loan:\n• Leasing costs £520 × 60 = £31,200 over five years and Sam never owns the van; with a loan he owns an asset at the end.\n• Loan repayments may be similar per month and the van could be sold later.\n• Lease contracts may have mileage limits or penalties that suit a plumber poorly.\nPotential judgement:\n• Leasing is suitable if cash flow and predictability are the priority; if Sam plans to keep the van for many years, a loan may be cheaper overall.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Greenroot Vertical Farms needs £150,000 to develop new automated growing systems. A business angel has offered £150,000 in return for 30% of the company and a place on the board. The angel has previously invested in agricultural technology businesses. Alternatively, a bank has offered a loan at 9% interest.\n\nAssess the benefits to Greenroot of obtaining finance from a business angel rather than a bank.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• A business angel is a wealthy individual who invests in small businesses in return for a share of ownership, often providing advice.\nBenefits:\n• No interest or repayments; with a loan at 9%, interest alone would be £13,500 a year, a burden on cash flow.\n• The angel's experience in agricultural technology could improve decisions and provide contacts.\n• The angel shares the risk; if the systems fail, Greenroot does not have a debt to repay.\nPossible counterbalance:\n• The founders lose 30% of the company and future profits.\n• A board place gives the angel influence over decisions, which may conflict with the founders' vision.\n• If Greenroot becomes very profitable, equity is far more expensive than a loan.\nPotential judgement:\n• A business angel is beneficial for a high-risk innovation project like Greenroot's, where expertise and avoiding debt are valuable; the cost is loss of control.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Summit Ski Hire operates in the Scottish Highlands. It earns most of its revenue between December and March, but pays rent, insurance and loan repayments every month. Last year an unexpectedly short snow season left it with a large overdraft. The owner prepares a cash-flow forecast every autumn.\n\nAssess the usefulness of a cash-flow forecast to Summit Ski Hire.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• A cash-flow forecast predicts future cash inflows and outflows over a period, showing expected monthly and closing balances.\nUsefulness:\n• It identifies the months (April–November) when outflows exceed inflows, so the owner can arrange an overdraft in advance.\n• It helps plan when to buy equipment or pay suppliers to avoid cash shortages.\n• A forecast supports loan applications by showing the bank how repayments will be met.\nLimitations:\n• Revenue depends on snowfall, which is unpredictable; last year's short season shows the forecast can be wrong.\n• Forecasts are only as good as their assumptions; costs such as energy may change.\n• It does not show profitability; a business can have good cash flow but still make a loss.\nPotential judgement:\n• A cash-flow forecast is particularly useful for a seasonal business, but Summit should produce several scenarios (e.g. short and long seasons) to allow for uncertainty.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Carver & Mistry Architects is a partnership of two architects. They plan to expand by opening a second office, which will require a £200,000 bank loan. A large client recently delayed payment of £60,000. The partners have unlimited liability.\n\nAssess the implications of unlimited liability for the partners of Carver & Mistry Architects.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Unlimited liability means the owners are personally responsible for all the debts of the business.\nImplications:\n• If the expansion fails, the partners could lose personal assets such as their homes to repay the £200,000 loan.\n• The delayed £60,000 payment shows cash-flow risks that could lead to debts they are personally liable for.\n• Each partner may be liable for the decisions of the other, increasing risk.\nPossible counterbalance:\n• Banks may lend more willingly because personal assets back the loan.\n• The partners could convert to a limited liability partnership or company to protect personal assets.\n• An established architecture practice with long-term clients may have relatively low risk of failure.\nPotential judgement:\n• Unlimited liability is a serious risk given the size of the loan and delayed payments; the partners should consider limited liability before expanding.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Nimbus Robotics has developed delivery robots for use on university campuses. It needs £500,000 to scale up production. A venture capital firm has offered £500,000 for a 35% share and wants the business to grow rapidly and be sold within 5–7 years. Alternatively, a bank will lend £500,000 at 10% interest over 5 years, secured on the founders\' homes. Nimbus made a loss last year but has contracts with three universities.\n\nEvaluate whether Nimbus Robotics should raise the finance through venture capital or a bank loan.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Venture capital is finance provided to small, high-growth businesses in exchange for equity; a bank loan must be repaid with interest.\nArguments for venture capital:\n• Nimbus made a loss last year, so annual interest of £50,000 plus capital repayments could create serious cash-flow problems.\n• The loan is secured on the founders' homes, increasing personal risk; venture capital shares the risk.\n• Venture capitalists bring expertise, contacts and further finance to support rapid growth.\nArguments for the bank loan:\n• The founders keep 100% ownership and control; venture capital gives away 35%.\n• The venture capitalist's aim to sell within 5–7 years may conflict with the founders' objectives.\n• If Nimbus succeeds, loan interest is cheaper than giving away 35% of a valuable company.\nPossible recommendations / judgement:\n• Venture capital is likely to be more appropriate because Nimbus is loss-making and high-risk; the founders should negotiate the size of the stake and their role after exit.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Wexford Timber Ltd is an established family-owned sawmill with retained profit of £1.2m. It plans to build a new sawmill costing £2m. It also owns a warehouse worth £900,000 that is used only for storage. Interest rates on business loans are around 7%. The family shareholders are keen to keep control.\n\nTo what extent should Wexford Timber use internal rather than external sources of finance for the new sawmill?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Internal finance comes from within the business (retained profit, sale of assets); external finance comes from outside (loans, share capital, etc.).\nArguments for internal finance:\n• Retained profit (£1.2m) plus the sale of the warehouse (£900,000) = £2.1m, enough to cover the £2m cost without borrowing.\n• No interest at 7%, saving up to £140,000 a year compared with borrowing £2m.\n• The family retains control, a key objective.\nArguments for external finance:\n• Using all retained profit leaves no reserve for emergencies; the business may face liquidity problems.\n• Selling the warehouse may lead to extra storage costs later.\n• A loan could be spread over the life of the sawmill, matching repayments to extra revenue.\nPossible recommendations / judgement:\n• A mix is likely to be best: using part of the retained profit and a smaller loan maintains control and liquidity. The decision depends on how essential the warehouse is and how much cash Wexford needs as a buffer.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 2.2 Financial Planning ──────────────────────────────── */
  '2.2': {
    name: 'Financial Planning',
    questions: [
      { q: 'Pedal Box sells bicycle repair kits. Each kit sells for £24 and has a variable cost of £9. Annual fixed costs are £45,000.\n\nCalculate the break-even level of output for Pedal Box. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS5 calculate cost, revenue, profit and break-even\nKnowledge: 1 mark for the formula: break-even output = fixed costs ÷ contribution per unit\nApplication: up to 3 marks for\n• Contribution per unit = 24 − 9 = £15 (1)\n• 45,000 ÷ 15 (1)\n• = 3,000 kits (1)\nNB: If the only answer given is 3,000 kits award 4 marks. If the answer is given as £3,000 award 3 marks.` },

      { q: 'Hatch Candles sells scented candles for £18 each. The variable cost per candle is £6 and fixed costs are £60,000 a year. It expects to sell 7,000 candles this year.\n\nCalculate Hatch Candles\' margin of safety. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS5 calculate cost, revenue, profit and break-even\nKnowledge: 1 mark for the formula: margin of safety = actual (or forecast) output − break-even output\nApplication: up to 3 marks for\n• Contribution per unit = 18 − 6 = £12 (1)\n• Break-even output = 60,000 ÷ 12 = 5,000 candles (1)\n• Margin of safety = 7,000 − 5,000 = 2,000 candles (1)\nNB: If the only answer given is 2,000 candles award 4 marks. Also accept 28.57% of forecast sales if clearly expressed as a percentage.` },

      { q: 'Riverside Theatre\'s budget for last quarter showed sales revenue of £85,000 and costs of £62,000. The actual results were sales revenue of £79,050 and costs of £58,900.\n\nCalculate the profit variance for Riverside Theatre and state whether it is favourable or adverse. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS5 calculate cost, revenue and profit; QS9 interpret numerical information\nKnowledge: 1 mark for understanding of variance, e.g. the difference between budgeted and actual figures; favourable if actual profit is higher than budgeted\nApplication: up to 3 marks for\n• Budgeted profit = 85,000 − 62,000 = £23,000 (1)\n• Actual profit = 79,050 − 58,900 = £20,150 (1)\n• Profit variance = 23,000 − 20,150 = £2,850 adverse (1)\nNB: If the only answer given is £2,850 adverse award 4 marks. If £2,850 is given without "adverse" award 3 marks. Also accept calculation via revenue variance £5,950 A and cost variance £3,100 F.` },

      { q: 'Pedal Box sells bicycle repair kits for £24 each, with a variable cost of £9 per unit and fixed costs of £45,000. Its break-even output is 3,000 kits. It forecasts sales of 4,200 kits next year but is facing new competition from online sellers.\n\nAssess the usefulness of break-even analysis to Pedal Box.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• Break-even analysis shows the level of output at which total revenue equals total costs; the margin of safety is the amount by which sales exceed break-even.\nUsefulness:\n• It shows Pedal Box needs to sell 3,000 kits to cover costs; with a forecast of 4,200 its margin of safety is 1,200 kits.\n• It allows Pedal Box to model the effect of price or cost changes, e.g. how a price cut to respond to online rivals affects break-even.\n• It is simple and quick to calculate and can support loan applications.\nLimitations:\n• It assumes all kits are sold at £24; competition may force price cuts.\n• It assumes variable costs per unit stay constant, but costs may change with bulk buying.\n• The forecast of 4,200 kits may be inaccurate given new competition.\nPotential judgement:\n• Break-even analysis is useful as a planning tool, but Pedal Box should update it regularly because competition makes its price and sales assumptions uncertain.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Frame Fitness is opening a new gym in Bristol. The owners have forecast 900 members in the first year, based on the number of people living within two miles and the membership of a similar gym in Cardiff. Two budget gym chains already operate in Bristol and a rival is expected to open nearby.\n\nAssess the difficulties Frame Fitness is likely to face in producing an accurate sales forecast.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• A sales forecast predicts future sales; accuracy depends on consumer trends, economic variables and competitors' actions.\nDifficulties:\n• As a new business, Frame has no historical data, so its forecast relies on assumptions from another city.\n• Competitors' actions — a new rival nearby and budget chains — could reduce the number of members.\n• Economic variables such as falling real incomes may reduce demand for gym membership, which is often seen as a luxury.\nPossible counterbalance:\n• Local population data and a similar gym's membership give a reasonable basis for a forecast.\n• Market research, such as pre-launch membership offers, can test demand.\n• Forecasts can be updated regularly once the gym opens.\nPotential judgement:\n• The difficulties are significant because Frame is new and competition is changing, so it should use a range of forecasts rather than one figure.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Aspen Events Ltd organises corporate conferences. Each year, department budgets are set by adding 3% to the previous year\'s figures. The finance director wants to introduce zero-based budgeting, where every budget starts at zero and managers must justify all spending. The marketing manager argues this will waste time.\n\nAssess whether Aspen Events should change from historical budgeting to zero-based budgeting.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Historical budgeting bases budgets on previous years' figures; zero-based budgeting sets every budget at zero and requires all spending to be justified.\nArguments for zero-based budgeting:\n• Adding 3% each year may continue wasteful spending; zero-based budgeting forces managers to review all costs.\n• Resources can be allocated to the most profitable activities rather than based on past decisions.\n• It may encourage managers to think carefully about value for money.\nArguments against:\n• It is time-consuming, as the marketing manager argues, and takes managers away from their work.\n• Managers may exaggerate needs to secure funding.\n• Historical budgeting is simple and may be adequate if the business is stable.\nPotential judgement:\n• Aspen could use zero-based budgeting every few years or for specific departments, gaining most of the benefits without the full time cost.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Riverside Theatre\'s budget for the year showed ticket revenue of £420,000 and staff costs of £190,000. Actual ticket revenue was £388,000 and staff costs were £203,000. The adverse variances were caused partly by the cancellation of two productions after a cast illness, and partly by a pay rise agreed mid-year.\n\nAssess the usefulness of variance analysis to Riverside Theatre.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Variance analysis compares budgeted and actual figures; a variance is adverse if it reduces profit and favourable if it increases profit.\nUsefulness:\n• It shows a £32,000 adverse revenue variance and a £13,000 adverse staff cost variance, highlighting where performance was worse than planned.\n• Managers can investigate causes, e.g. cancellation of productions, and take action such as insurance or understudies.\n• It improves future budgeting, e.g. including expected pay rises.\nLimitations:\n• Variances show what happened, not why; causes such as illness were outside management control.\n• The budget may have been unrealistic, making the variance misleading.\n• Variance analysis is backward-looking and may come too late to act.\nPotential judgement:\n• Variance analysis is useful to identify problems and improve budgeting, but managers must interpret variances carefully, separating controllable and uncontrollable causes.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Stoneleigh Kitchens designs and fits kitchens, with an average order value of £15,000. Most customers pay using savings or loans. Its sales forecast for next year assumes a 10% increase in orders. The Bank of England has recently changed interest rates several times, and consumer confidence has been volatile.\n\nAssess the extent to which economic variables are likely to affect the accuracy of Stoneleigh Kitchens\' sales forecast.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Economic variables include interest rates, inflation, incomes and unemployment, all of which affect demand and therefore sales forecasts.\nEconomic variables will reduce accuracy:\n• Kitchens are expensive, often financed by loans, so demand is sensitive to interest rates.\n• Volatile consumer confidence affects willingness to make major purchases.\n• Kitchens are often linked to house moves, which also depend on the housing market and interest rates.\nOther factors:\n• Consumer trends, such as home improvement rather than moving, may support demand.\n• Competitors' actions and Stoneleigh's own marketing may matter more.\n• Stoneleigh could use order books and enquiries to improve short-term accuracy.\nPotential judgement:\n• Economic variables are likely to be the main reason the forecast is inaccurate, because Stoneleigh sells a high-value, often debt-financed product.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Pedal Box sells bicycle repair kits for £24, with a variable cost of £9 per kit and fixed costs of £45,000. It forecasts sales of 4,200 kits at the current price. The managing director wants to increase the price to £27 to reduce the break-even point. Market research suggests sales would fall to 3,300 kits at the higher price.\n\nEvaluate whether Pedal Box should increase its price to £27.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Contribution is selling price minus variable cost per unit; break-even output is fixed costs ÷ contribution per unit.\nArguments for the price rise:\n• Contribution rises from £15 to £18, lowering break-even output from 3,000 to 2,500 kits (45,000 ÷ 18).\n• A lower break-even point reduces risk if sales fall because of competition.\n• A higher price might support a premium image if the kits are differentiated.\nArguments against:\n• Profit at £24: (4,200 × 15) − 45,000 = £18,000. Profit at £27: (3,300 × 18) − 45,000 = £14,400 — a fall of £3,600.\n• Margin of safety falls from 1,200 kits to 800 kits, so the business is actually closer to break-even.\n• Demand appears price elastic; online competitors may attract customers with lower prices.\nPossible recommendations / judgement:\n• Pedal Box should not raise its price because profit and margin of safety both fall, despite a lower break-even point. The decision depends on the accuracy of the market research forecasts.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Loaf & Ladle is a bakery-café chain that has grown from 4 to 15 outlets in three years. Each outlet manager controls a budget for staffing, stock and maintenance. Last year, several outlets overspent their budgets, and the business made a loss despite rising revenue.\n\nTo what extent are budgets essential for the success of a rapidly growing business such as Loaf & Ladle?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• A budget is a financial plan for the future, setting targets for revenue and costs; purposes include planning, control, coordination and motivation.\nBudgets are essential:\n• With 15 outlets, budgets allow head office to control costs across the business; overspending in several outlets contributed to the loss.\n• Budgets delegate responsibility to outlet managers, motivating them and making them accountable.\n• They help plan finance for further expansion and identify underperforming outlets through variance analysis.\nOther factors / limitations:\n• Budgets set during rapid growth may be unrealistic, leading to adverse variances that demotivate managers.\n• Success depends more on product quality, location and customer service.\n• Rigid budgets may prevent managers responding to local opportunities.\nPossible recommendations / judgement:\n• Budgets are essential to control costs in a fast-growing chain, but they must be realistic and set with managers' involvement.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 2.3 Managing Finance ────────────────────────────────── */
  '2.3': {
    name: 'Managing Finance',
    questions: [
      { q: 'Kestrel Outdoor sells camping equipment. Last year its revenue was £2.4m and its cost of sales was £1.38m.\n\nCalculate Kestrel Outdoor\'s gross profit margin. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS1 ratios; QS2 percentages\nKnowledge: 1 mark for the formula: gross profit margin = gross profit ÷ revenue × 100\nApplication: up to 3 marks for\n• Gross profit = 2.4m − 1.38m = £1.02m (1)\n• 1.02 ÷ 2.4 = 0.425 (1)\n• × 100 = 42.5% (1)\nNB: If the only answer given is 42.5% award 4 marks. If the answer is given as 42.5 without % award 3 marks.` },

      { q: 'Bramley Toys\' statement of financial position shows current assets of £640,000, including inventories of £310,000, and current liabilities of £400,000.\n\nCalculate Bramley Toys\' acid test ratio. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS1 calculate, use and understand ratios\nKnowledge: 1 mark for the formula: acid test ratio = (current assets − inventories) ÷ current liabilities\nApplication: up to 3 marks for\n• Current assets − inventories = 640,000 − 310,000 = £330,000 (1)\n• 330,000 ÷ 400,000 (1)\n• = 0.83:1 (0.825:1) (1)\nNB: If the only answer given is 0.83:1, 0.825:1, 0.83 or 0.825 award 4 marks. If the current ratio (1.6:1) is calculated instead, award 1 mark for knowledge only.` },

      { q: 'Tern Engineering manufactures machine parts. It made a profit of £180,000 last year, but its customers are given 90 days to pay, while its suppliers must be paid within 30 days.\n\nExplain one reason why Tern Engineering could run out of cash despite making a profit.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of the difference between profit and cash, e.g. profit is revenue minus costs, while cash is money in the bank; or identifying a reason such as sales made on credit\nApplication: up to 2 marks for context, e.g.\n• customers have 90 days to pay\n• Tern pays its suppliers within 30 days\nAnalysis: 1 mark for a developed consequence, e.g.\n• Tern records revenue when it makes sales, but must pay suppliers 60 days before customers pay, so cash outflows come before inflows and it could run short of cash to pay its bills.` },

      { q: 'Bramley Toys sells toys to independent shops. Its acid test ratio is 0.83:1 and its current ratio is 1.6:1. Inventories of £310,000 include large stocks of last year\'s products. Its overdraft is close to its limit.\n\nAssess the ways Bramley Toys could improve its liquidity.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• Liquidity is the ability to pay short-term debts; it is measured by the current ratio and acid test ratio.\nWays to improve liquidity:\n• Selling old inventory at a discount converts stock to cash and reduces storage costs.\n• Chasing payments from customers or offering discounts for early payment increases cash inflows.\n• Negotiating longer credit terms with suppliers delays outflows.\nPossible counterbalance:\n• Discounting old stock reduces profit margins and may damage its brand.\n• Pressuring independent shops to pay sooner may lose customers.\n• Suppliers may refuse longer credit if Bramley appears financially weak.\nPotential judgement:\n• Reducing old inventory is likely to be the best option because it improves liquidity quickly without long-term costs, and the acid test ratio shows inventory is the problem.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Kestrel Outdoor sells camping equipment. Its operating profit margin fell from 9% to 5% over two years. Revenue rose, but rent, wages and delivery costs increased. Its main competitors are large sports retailers and online sellers. Kestrel\'s manager wants to raise prices by 8%.\n\nAssess whether raising prices is the best way for Kestrel Outdoor to improve its profitability.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Profitability is profit relative to revenue, measured by margins; ways to improve include raising prices and reducing costs.\nArguments for raising prices:\n• An 8% price rise increases the margin on each sale if demand is price inelastic.\n• Customers may accept higher prices if Kestrel offers specialist advice or unique products.\n• Costs have risen across the market, so rivals may raise prices too.\nArguments against / alternatives:\n• With large retailers and online competitors, demand may be price elastic, so revenue and profit could fall.\n• Reducing costs, e.g. renegotiating rent or delivery contracts, may be more effective.\n• Improving efficiency or focusing on higher-margin products could improve margins without risking sales.\nPotential judgement:\n• Raising prices is risky because of strong competition; Kestrel should combine a smaller price rise on specialist products with cost reductions.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Carillion was a large UK construction and services company that collapsed in January 2018. It had made profit warnings, relied on large contracts with low margins, and had used long payment terms with its suppliers, which some reported were up to 120 days.\n\nAssess the importance of working capital management to a construction business such as Carillion.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Working capital is current assets minus current liabilities; managing it ensures the business has enough cash to meet short-term obligations.\nImportance:\n• Construction projects involve large costs before payment is received, so poor cash management can quickly lead to insolvency.\n• Long payment terms to suppliers may hide liquidity problems until suppliers stop trading with the business.\n• Low-margin contracts leave little room for cost overruns, making cash management critical.\nOther factors:\n• Carillion's collapse was also due to strategy — bidding for low-margin contracts and poor project management.\n• High levels of debt and pension obligations, not just working capital, contributed.\n• External factors, such as delays on public sector projects, also played a part.\nPotential judgement:\n• Working capital management is very important in construction because of long project timescales, but Carillion's failure shows that poor strategy and excessive debt can undermine even good cash management.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Wilko was a UK discount homewares retailer with around 400 stores. It entered administration in August 2023, and around 12,500 jobs were lost. It faced strong competition from discount retailers such as B&M and Home Bargains, rising costs and falling consumer spending. Critics argued it had underinvested in its stores and online sales.\n\nAssess whether internal or external factors were more important in the failure of businesses such as Wilko.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Internal causes of failure are within the business's control (e.g. poor management, weak cash flow); external causes are outside its control (e.g. competition, economic conditions).\nInternal factors:\n• Underinvestment in stores and online sales left Wilko less competitive.\n• Poor financial management may have left little cash to respond to challenges.\n• Management did not adapt quickly enough to changing customer behaviour.\nExternal factors:\n• Competition from B&M and Home Bargains, which offered low prices, reduced Wilko's market share.\n• Rising costs (energy, wages) and falling consumer spending squeezed margins.\n• The growth of online retail changed the market.\nPotential judgement:\n• Internal factors were probably more important because other retailers faced the same external pressures and survived; external factors exposed Wilko's internal weaknesses.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Harbourside Hotels has a current ratio of 2.9:1 and an acid test ratio of 2.6:1. It holds £4m in cash. The owners are pleased with this liquidity, but a consultant suggests the business is holding too much cash. Several hotels need refurbishment.\n\nAssess the importance to Harbourside Hotels of having a high current ratio.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• The current ratio is current assets ÷ current liabilities; a ratio of around 1.5–2:1 is often seen as acceptable, although this varies by industry.\nImportance:\n• A high ratio means Harbourside can easily pay short-term debts, reducing the risk of failure.\n• Cash reserves allow it to cope with shocks, such as a fall in tourism.\n• Strong liquidity may help Harbourside obtain credit.\nPossible counterbalance:\n• Holding £4m in cash earns little return; it could be invested in refurbishment to improve profitability.\n• Hotels receive cash from customers quickly, so they may need less liquidity than other businesses.\n• Shareholders may prefer higher returns rather than excessive liquidity.\nPotential judgement:\n• A high current ratio provides security, but Harbourside's liquidity appears excessive; investing some cash in refurbishment would improve competitiveness while still leaving adequate liquidity.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Tern Engineering makes machine parts. It has a current ratio of 1.1:1 and an acid test ratio of 0.45:1. Customers pay after 90 days, while suppliers must be paid within 30 days. Inventories of raw materials have doubled in a year. Tern is profitable but frequently uses its overdraft.\n\nEvaluate the most effective way for Tern Engineering to improve its liquidity.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Liquidity is the ability to meet short-term debts; ways to improve include reducing inventory, chasing receivables, extending payables, and raising longer-term finance.\nOptions:\n• Reduce credit terms for customers from 90 to 60 days, bringing cash in sooner.\n• Reduce raw material inventories, e.g. by using just-in-time ordering, converting stock to cash and improving the acid test ratio.\n• Negotiate longer payment terms with suppliers to match customers' terms.\nDrawbacks:\n• Customers may move to competitors if credit terms are reduced.\n• Lower inventory increases the risk of production delays.\n• Suppliers may refuse longer credit or charge higher prices.\nPossible recommendations / judgement:\n• The most effective approach is likely to be reducing inventory, because it has doubled and is within Tern's control; changing credit terms risks customer and supplier relationships. A combination may be needed.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Moxie Meals was a direct-to-consumer meal kit start-up that ceased trading after three years. It spent heavily on customer acquisition offers, operated with a gross profit margin of 18%, and relied on further investment that did not materialise. Meanwhile, consumer spending fell and larger competitors cut prices.\n\nTo what extent was poor financial management the main cause of the failure of Moxie Meals?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Business failure can have financial causes (e.g. poor cash flow, low margins) and non-financial causes (e.g. competition, poor marketing), which may be internal or external.\nPoor financial management:\n• An 18% gross margin left little to cover overheads, making the business unprofitable.\n• Heavy spending on acquisition offers may not have produced loyal customers.\n• Reliance on future investment left it vulnerable when funding did not arrive.\nOther causes:\n• Falling consumer spending reduced demand for a non-essential product.\n• Larger competitors with economies of scale could cut prices, making it hard for Moxie to compete.\n• Weak differentiation may have made it hard to retain customers.\nPossible recommendations / judgement:\n• Poor financial management was probably the main cause because a low margin and dependence on external funding made the business fragile; external factors triggered its failure.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 2.4 Resource Management ─────────────────────────────── */
  '2.4': {
    name: 'Resource Management',
    questions: [
      { q: 'Hartfield Bakery produced 9,300 loaves a week last year, with a maximum capacity of 12,000 loaves a week. This year it expanded its capacity to 15,000 loaves a week and now produces 10,800 loaves a week.\n\nCalculate the change in Hartfield Bakery\'s capacity utilisation. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS2 percentages and percentage changes\nKnowledge: 1 mark for the formula: capacity utilisation = current output ÷ maximum possible output × 100\nApplication: up to 3 marks for\n• Last year = 9,300 ÷ 12,000 × 100 = 77.5% (1)\n• This year = 10,800 ÷ 15,000 × 100 = 72% (1)\n• Change = 72 − 77.5 = −5.5 percentage points (1)\nNB: If the only answer given is −5.5% or −5.5 award 4 marks. If given as 5.5% without indicating a fall, award 3 marks.` },

      { q: 'Delta Fabrications produced 84,000 units in 2024 with 60 workers. In 2025 it produced 91,800 units with 68 workers.\n\nCalculate the percentage change in labour productivity at Delta Fabrications between 2024 and 2025. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS1 ratios and averages; QS2 percentages and percentage changes\nKnowledge: 1 mark for the formula: labour productivity = output ÷ number of workers\nApplication: up to 3 marks for\n• 2024 productivity = 84,000 ÷ 60 = 1,400 units per worker (1)\n• 2025 productivity = 91,800 ÷ 68 = 1,350 units per worker (1)\n• Percentage change = (1,350 − 1,400) ÷ 1,400 × 100 = −3.57% (1)\nNB: If the only answer given is −3.57% or −3.57 award 4 marks. If given as −3.6% award 3 marks.` },

      { q: 'Luma Lighting assembles LED lights in Birmingham using components imported from Asia. It uses just-in-time (JIT) stock control and holds only one day\'s stock of components. In 2024 many shipping companies avoided the Red Sea, adding up to two weeks to journeys from Asia to Europe.\n\nExplain one risk to Luma Lighting of using JIT stock control.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of JIT, e.g. ordering stock so that it arrives just as it is needed, with minimal or no buffer stock; or identifying a risk such as supply disruption\nApplication: up to 2 marks for context, e.g.\n• Luma holds only one day's stock of components\n• Red Sea disruption added up to two weeks to shipping times from Asia\nAnalysis: 1 mark for a developed consequence, e.g.\n• Delays mean components do not arrive on time, and with only one day's stock, production would stop, so Luma could fail to meet customer orders and lose sales.` },

      { q: 'Harlow Guitars makes handmade electric guitars to customers\' individual specifications, selling for £2,500–£6,000 each. It currently produces 12 guitars a month using job production. The owner is considering introducing batch production of a standard model priced at £1,200, produced in batches of 50.\n\nAssess the benefits to Harlow Guitars of introducing batch production.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• Job production makes one-off items to individual specifications; batch production makes groups of identical items, with each batch passing through each stage together.\nBenefits:\n• Producing 50 identical guitars allows specialisation and faster production, lowering unit costs.\n• A £1,200 model opens a new market segment, increasing sales volume.\n• Bulk buying materials for batches may reduce costs.\nPossible counterbalance:\n• Batch production may damage Harlow's brand as a handmade, bespoke producer.\n• Machinery may need to be reset between batches, and stock must be stored.\n• Staff used to craft work may find repetitive tasks demotivating.\nPotential judgement:\n• Batch production could increase sales and efficiency, but Harlow must protect its premium brand, perhaps by selling the standard model under a separate name.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Hartfield Bakery supplies bread to cafés and supermarkets. In December it operates at 98% capacity utilisation, with staff working overtime and machines running 24 hours a day. In the rest of the year capacity utilisation averages 72%.\n\nAssess the implications for Hartfield Bakery of operating at 98% capacity utilisation in December.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Capacity utilisation is current output as a percentage of maximum possible output; over-utilisation is operating close to or at full capacity.\nPositive implications:\n• Fixed costs are spread over more loaves, reducing average costs and increasing profit margins.\n• High output meets peak demand, so Hartfield can take advantage of seasonal sales.\n• Staff earning overtime may be pleased with higher pay.\nNegative implications:\n• Machines running 24 hours have no time for maintenance, increasing the risk of breakdowns.\n• Staff working long hours may become tired, affecting quality and safety.\n• Hartfield cannot accept extra orders, so customers may go to competitors.\nPotential judgement:\n• Operating at 98% for a short period is beneficial because it is seasonal, but Hartfield must plan maintenance and staffing carefully to avoid quality problems.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Pickford Pharmacy Supplies is a wholesaler. For one product, it has a maximum stock level of 1,200 units, a reorder level of 400 units, a buffer stock of 150 units and a lead time of one week. Weekly usage is 250 units. Last month a supplier delivered late and the business ran out of stock.\n\nAssess the effectiveness of Pickford\'s stock control for this product.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• A stock control diagram shows maximum stock, reorder level, buffer stock, lead time and usage; buffer stock is the minimum stock held to cover unexpected demand or delays.\nEvidence of effective control:\n• At the reorder level of 400 units, with usage of 250 a week and a one-week lead time, stock would fall to 150 units, exactly the buffer stock level, when the delivery arrives.\n• The buffer stock of 150 units covers about 0.6 weeks of usage, allowing for small delays.\n• Maximum stock of 1,200 units limits storage costs.\nWeaknesses:\n• The buffer stock covers less than one week, so a longer delay causes a stock-out, as happened last month.\n• Running out of pharmacy products could damage relationships with customers who need them urgently.\n• The reorder level may need to rise, or a more reliable supplier found.\nPotential judgement:\n• The system works if deliveries are reliable, but it is not effective enough given the importance of pharmacy products; Pickford should increase buffer stock or reorder level.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Brookfield Components makes metal parts for car manufacturers. Its reject rate is 4%, and a major customer has threatened to cancel its contract unless quality improves. Brookfield currently uses quality control, with inspectors checking finished parts. It is considering introducing Total Quality Management (TQM).\n\nAssess whether Brookfield Components should introduce Total Quality Management.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• TQM is an approach where every employee is responsible for quality at every stage of production; quality control inspects products after production.\nArguments for TQM:\n• Preventing defects rather than finding them should reduce the 4% reject rate and waste.\n• Improved quality could save the contract with the major customer.\n• Involving employees in quality may improve motivation.\nArguments against:\n• TQM requires significant training and a change of culture, which takes time.\n• Staff may resist extra responsibility.\n• Brookfield may need quicker improvements, e.g. improving inspection or quality circles.\nPotential judgement:\n• TQM is likely to be the best long-term solution, but Brookfield may need immediate measures to satisfy the customer while TQM is introduced.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Fresh Crate is an online grocery retailer. Its warehouse employs 300 pickers who assemble customer orders by hand. The company is considering investing £6m in an automated warehouse using robots, which would reduce the workforce to 80 and increase orders processed per hour by 60%.\n\nAssess whether Fresh Crate should become more capital intensive.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• Capital-intensive production uses a high proportion of machinery relative to labour; labour-intensive production uses a high proportion of labour.\nArguments for automation:\n• 60% more orders per hour increases productivity, lowering unit costs and improving competitiveness.\n• Reducing the workforce from 300 to 80 cuts wage costs significantly in the long run.\n• Robots may reduce errors and improve consistency.\nArguments against:\n• £6m is a large investment, with risks if demand does not grow.\n• Redundancy costs and negative publicity may affect Fresh Crate's reputation.\n• Robots are less flexible; breakdowns could stop all orders.\nPotential judgement:\n• Automation is likely to be beneficial if Fresh Crate expects demand to grow, because productivity gains are large; it should phase the investment to reduce risk.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Vesta Kitchens manufactures fitted kitchen units. It holds £1.4m of stock of timber, fittings and finished units, costing £420,000 a year to store and insure. Demand for kitchens varies from month to month, and some fittings are imported from Italy. The operations director wants to introduce just-in-time (JIT).\n\nEvaluate whether Vesta Kitchens should adopt just-in-time stock control.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• JIT is a lean production method where stock arrives just as it is needed, minimising stockholding.\nArguments for JIT:\n• Reducing stock could save much of the £420,000 annual stockholding cost.\n• Less capital tied up in stock improves cash flow and liquidity.\n• Less waste, e.g. damaged or outdated stock, supports lean production.\nArguments against:\n• Demand varies monthly, so Vesta may not be able to meet orders quickly without buffer stock.\n• Imported fittings from Italy may be delayed, halting production.\n• Frequent small orders may increase ordering costs and lose bulk discounts.\nPossible recommendations / judgement:\n• Vesta could adopt JIT for locally sourced materials, while keeping buffer stock for imported fittings. The decision depends on supplier reliability and the variability of demand.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Aurora Hotels runs 20 four-star hotels in UK cities. Its average online review score has fallen from 4.5 to 3.9 out of 5 over two years. Complaints mention room cleanliness and slow check-in. A rival chain with similar prices has introduced a quality assurance programme and staff quality circles.\n\nTo what extent is quality management the key to competitive advantage for a hotel chain such as Aurora Hotels?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Quality management includes quality control, quality assurance, quality circles, TQM and Kaizen; competitive advantage is a feature that allows a business to outperform rivals.\nQuality management is key:\n• Falling review scores reduce bookings, as customers compare hotels online.\n• Quality assurance and Kaizen could address cleanliness and check-in, improving the customer experience.\n• Consistent quality allows Aurora to charge four-star prices and build loyalty.\nOther factors:\n• Location, price and brand may be more important for hotel customers.\n• Quality improvements require investment in training and staffing, which increases costs.\n• Rivals are also improving quality, so it may only allow Aurora to keep up rather than gain an advantage.\nPossible recommendations / judgement:\n• Quality management is essential for Aurora to recover its reputation, but it is a necessary condition rather than the only source of advantage; location and brand also matter.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 2.5 External Influences ─────────────────────────────── */
  '2.5': {
    name: 'External Influences',
    questions: [
      { q: 'Heathcote Tweed exports wool jackets to the USA, priced at £240 each. The exchange rate changed from £1 = $1.25 to £1 = $1.35.\n\nCalculate the change in the US dollar price of a Heathcote Tweed jacket. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS8 use and interpret quantitative information; QS9 interpret numerical information\nKnowledge: 1 mark for knowledge of exchange rates, e.g. the value of one currency in terms of another; or the method of multiplying the sterling price by the exchange rate\nApplication: up to 3 marks for\n• Original dollar price = 240 × 1.25 = $300 (1)\n• New dollar price = 240 × 1.35 = $324 (1)\n• Change = 324 − 300 = +$24 (1)\nNB: If the only answer given is $24 or +$24 award 4 marks. Also accept an 8% increase if calculated correctly.` },

      { q: 'Arden Homes has a £500,000 business loan with a variable interest rate of Bank Rate + 3%. Between August 2024 and May 2025 the Bank of England cut Bank Rate from 5.25% to 4.25%.\n\nCalculate the annual saving in interest payments for Arden Homes. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3\nQuantitative skill assessed: QS2 percentages; QS5 cost calculations\nKnowledge: 1 mark for understanding of interest rates, e.g. the cost of borrowing money; or the method of calculating interest as a percentage of the loan\nApplication: up to 3 marks for\n• Original interest = 500,000 × 8.25% = £41,250 (1)\n• New interest = 500,000 × 7.25% = £36,250 (1)\n• Saving = 41,250 − 36,250 = £5,000 (1)\nNB: If the only answer given is £5,000 award 4 marks.` },

      { q: 'Zest Electricals sells kitchen appliances online. A customer bought a coffee machine that stopped working after two weeks. Under the Consumer Rights Act 2015, customers have the right to reject faulty goods and receive a full refund within 30 days of purchase.\n\nExplain one effect of the Consumer Rights Act 2015 on Zest Electricals.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1\nKnowledge: 1 mark for understanding of consumer protection legislation, e.g. laws protecting consumers from faulty goods or unfair practices; or identifying an effect such as increased costs\nApplication: up to 2 marks for context, e.g.\n• the coffee machine stopped working after two weeks\n• customers can reject faulty goods within 30 days\nAnalysis: 1 mark for a developed consequence, e.g.\n• Zest must refund the customer in full, increasing costs, so it may need to improve quality checks or choose more reliable suppliers to reduce returns.` },

      { q: 'Brook Care Homes runs 12 care homes employing 900 staff, most of whom are paid close to the National Living Wage. In April 2025 the National Living Wage rose by 6.7% to £12.21 an hour, and employer National Insurance contributions increased. Most of Brook\'s residents are funded by local councils.\n\nAssess the likely impact on Brook Care Homes of increases in the National Living Wage.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2\n\nIndicative content:\n• The National Living Wage is the legal minimum hourly pay for workers aged 21 and over; it is a form of employee protection legislation.\nNegative impact:\n• With 900 staff paid close to the NLW, a 6.7% rise significantly increases wage costs, alongside higher National Insurance.\n• Councils fund most residents and may not increase fees, so Brook may not be able to pass costs on.\n• Profit margins may fall, limiting investment in care homes.\nPossible counterbalance:\n• Higher pay may improve motivation and reduce labour turnover, a major problem in care.\n• Lower turnover reduces recruitment and training costs.\n• All competitors face the same increase.\nPotential judgement:\n• The impact is likely to be significant because Brook cannot easily pass costs on, though lower turnover could offset part of the increase.\n\nLevels (8 marks):\nL3 (6–8) Accurate and thorough knowledge; logical chains of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; awareness of competing arguments/factors with a supported judgement.\nL2 (3–5) Accurate knowledge; chains of reasoning presented but may be assertions or incomplete; an attempt at an assessment using the information, supported by the context, but unlikely to show the significance of competing arguments.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application to the business; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Arden Homes is a regional housebuilder. It builds 400 homes a year. Economic forecasts disagree on whether the UK economy will grow or fall into recession next year, and many potential buyers are delaying purchases. Arden must decide whether to buy land for a new development.\n\nAssess the impact of economic uncertainty on Arden Homes.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Economic uncertainty is when the future direction of the economy is unclear, making it hard for businesses to plan.\nNegative impact:\n• Buyers delaying purchases reduces sales and cash flow.\n• Arden may delay buying land, missing opportunities and reducing future output.\n• Banks may be less willing to lend, increasing the cost of finance.\nPossible counterbalance:\n• Land may be cheaper during uncertainty, so buying now could be profitable if the economy recovers.\n• Long-term demand for housing in the UK remains strong.\n• Arden can reduce risk by building in phases.\nPotential judgement:\n• Economic uncertainty is likely to reduce Arden's sales in the short term, but its effect depends on how long it lasts; phased development would allow Arden to respond.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Clearview Packaging makes plastic food containers. Since April 2022, the UK Plastic Packaging Tax has been charged on plastic packaging containing less than 30% recycled plastic. Clearview\'s containers contain 10% recycled plastic, and several supermarket customers have asked for fully recyclable packaging.\n\nAssess the effects of environmental protection legislation on Clearview Packaging.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3\n\nIndicative content:\n• Environmental protection legislation aims to reduce harm to the environment, e.g. by taxing pollution or waste.\nNegative effects:\n• Clearview pays the tax because its containers contain only 10% recycled plastic, increasing costs.\n• Investing to use more recycled plastic requires new equipment and supply contracts.\n• Customers may switch to competitors whose packaging avoids the tax.\nPositive effects:\n• Switching to 30%+ recycled plastic avoids the tax and meets supermarket demands.\n• Environmentally friendly packaging could give Clearview a competitive advantage.\n• Legislation creates a level playing field, as all packaging firms face the same rules.\nPotential judgement:\n• The legislation increases costs in the short term, but Clearview can turn it into an opportunity by increasing recycled content, which customers also demand.\n\nLevels (10 marks):\nL4 (7–10) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); a balanced, well-contextualised assessment using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–6) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Heathcote Tweed makes wool jackets in Yorkshire and exports 60% of its output to the USA. It imports some specialist dyes from Italy. The pound has recently appreciated against the US dollar, so a £240 jacket now costs $324 in the US compared with $300 before.\n\nAssess the impact of the appreciation of the pound on Heathcote Tweed.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• An appreciation of the pound means it buys more of other currencies, making exports more expensive abroad and imports cheaper.\nNegative impact:\n• The US price rises from $300 to $324 (8%), which may reduce US demand, affecting 60% of output.\n• If Heathcote keeps its dollar price at $300, its sterling revenue per jacket falls, reducing margins.\n• US competitors become relatively cheaper.\nPossible counterbalance:\n• Imported dyes from Italy become cheaper if the pound also appreciates against the euro.\n• Premium, heritage products may have price-inelastic demand, so sales may not fall much.\n• Exchange rates fluctuate; the effect may be temporary.\nPotential judgement:\n• The impact is likely to be negative because Heathcote relies heavily on US exports, but its effect depends on the price elasticity of demand for its premium products.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Coffee Corner is an independent café on a high street. A national coffee chain has opened a branch opposite, with lower prices, a loyalty app and longer opening hours. The high street already has four other cafés.\n\nAssess the impact of increased competition on Coffee Corner.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4\n\nIndicative content:\n• The competitive environment describes the number and strength of competitors in a market; more competition generally reduces a firm's market power.\nNegative impact:\n• Customers may switch to the chain because of lower prices, reducing Coffee Corner's sales.\n• The chain's loyalty app and longer hours may attract regular customers.\n• Coffee Corner may have to cut prices, reducing profit margins.\nPossible counterbalance:\n• Coffee Corner could differentiate through local character, quality or personal service.\n• A new chain may increase footfall on the high street, benefiting all cafés.\n• Some customers prefer independent businesses.\nPotential judgement:\n• Increased competition is a serious threat, but Coffee Corner can survive if it differentiates and targets customers who value independence.\n\nLevels (12 marks):\nL4 (9–12) Accurate and thorough knowledge; a coherent, logical chain of reasoning showing cause(s) and/or effect(s); assessment is balanced, wide-ranging and well contextualised, using quantitative and/or qualitative information; effective use of the context throughout and awareness of competing arguments/factors leading to a supported judgement.\nL3 (5–8) Accurate and thorough knowledge; analytical perspectives with developed chains of reasoning; an attempt at an assessment using the information and supported by the context, but unlikely to show the significance of competing arguments.\nL2 (3–4) Elements of knowledge applied to the business; chains of reasoning presented but may be assertions or incomplete; a generic or superficial assessment.\nL1 (1–2) Isolated, recall-based knowledge; weak or no application; generic assertions.\n0 — a completely inaccurate response.` },

      { q: 'Pennyworth Home Stores is a UK homewares retailer. In October 2022 UK CPI inflation peaked at 11.1%, and the Bank of England then raised interest rates to 5.25% by August 2023. Pennyworth\'s energy and wage costs rose sharply, while customers cut spending on non-essential items. Pennyworth has a large bank loan with a variable interest rate.\n\nEvaluate whether high inflation or high interest rates posed the greater threat to Pennyworth Home Stores.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Inflation is a sustained increase in the general price level, measured by the CPI; interest rates are the cost of borrowing and the reward for saving.\nInflation as the greater threat:\n• Rising energy and wage costs squeeze margins.\n• Falling real incomes reduce demand for non-essential homewares.\n• Pennyworth may struggle to raise prices without losing customers.\nInterest rates as the greater threat:\n• Higher rates increase interest on its variable-rate loan, reducing profit and cash flow.\n• Higher mortgage costs reduce household disposable income, cutting spending on homewares.\n• The housing market slows, reducing demand for furnishing new homes.\nPossible recommendations / judgement:\n• Both threats were linked because interest rates rose in response to inflation; for Pennyworth, with a large variable-rate loan, interest rates may have been the greater threat. The answer depends on the size of its debt and the price elasticity of demand.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },

      { q: 'Zest Electricals sells kitchen appliances online. It must comply with consumer protection laws, such as the Consumer Rights Act 2015, which gives customers the right to refunds for faulty goods, and rules on fair advertising. Zest\'s returns cost it £400,000 a year. Its managers argue that the laws increase costs, but its customer satisfaction scores are among the highest in its market.\n\nTo what extent is consumer protection legislation beneficial to businesses such as Zest Electricals?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6\n\nIndicative content:\n• Consumer protection legislation protects consumers from faulty goods, unfair pricing and misleading advertising.\nBenefits:\n• Consumer confidence encourages people to buy online, increasing the size of the market.\n• A clear refund policy builds trust and loyalty, supporting Zest's high satisfaction scores.\n• It prevents unfair competition from rogue traders.\nCosts:\n• Returns cost Zest £400,000 a year, reducing profit.\n• Compliance requires administration, training and quality checks.\n• Some customers may abuse return rights.\nPossible recommendations / judgement:\n• Consumer protection legislation is mostly beneficial because it builds trust in online markets; the costs can be reduced by improving quality and choosing reliable suppliers.\n\nLevels (20 marks):\nL4 (15–20) Accurate and thorough knowledge; relevant and effective use of the context throughout; well-developed, logical and coherent chains of reasoning showing a range of causes and/or effects, with arguments fully developed; data used well to support judgements; full awareness of the validity and significance of competing arguments, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).\nL3 (9–14) Accurate and thorough knowledge, supported throughout by the context; developed chains of reasoning so that causes and consequences are complete; information introduced to support judgements, with partial awareness of the validity and/or significance of competing arguments; may reach a conclusion.\nL2 (5–8) Elements of knowledge applied to the business; arguments presented but links between causes and consequences are incomplete; a judgement may be attempted but does not show awareness of the key features of the business or its situation.\nL1 (1–4) Isolated knowledge; weak or no application; an argument may be attempted but is generic and fails to connect causes and consequences.\n0 — a completely inaccurate response.` },
    ]
  },

  /* ── 3.1 Business Objectives & Strategy ───────────────── */
  '3.1': {
    name: 'Business Objectives & Strategy',
    questions: [
      { q: 'Oakridge Cycles is a UK bicycle manufacturer with 42 stores. Its mission statement is "to get more people riding, more often". In 2025 the directors set a corporate objective to increase e-bike sales by 25% within three years, supported by a new cycle-to-work finance scheme for employers.\n\nExplain how Oakridge Cycles could use its mission statement to develop its corporate objectives.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of a mission statement, e.g. a qualitative statement of a business's overall purpose and values, from which measurable (SMART) corporate objectives are derived
• or identification of a link, e.g. objectives turn the broad aim into specific targets

Application: up to 2 marks for
• Oakridge's mission is "to get more people riding, more often"
• the objective of a 25% increase in e-bike sales within three years
• the cycle-to-work scheme / 42 stores

Analysis: 1 mark for
• the broad aim of getting more people riding is translated into a measurable target for e-bike sales, so managers across the 42 stores know what they are working towards and performance can be reviewed against the mission after three years` },

      { q: 'Aldi is the UK\'s fourth-largest supermarket and opened its 1,000th UK store in 2024. It stocks around 2,000 product lines, compared with tens of thousands in a large Tesco, and the great majority of its products are own label.\n\nExplain how a cost leadership strategy may give Aldi a competitive advantage.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of cost leadership (Porter), e.g. aiming to be the lowest-cost producer in the industry so that the business can charge lower prices than rivals or earn higher margins at the same price
• or understanding of competitive advantage

Application: up to 2 marks for
• Aldi stocks around 2,000 lines compared with tens of thousands at large rivals
• most products are own label
• Aldi has over 1,000 UK stores / is the fourth-largest supermarket

Analysis: 1 mark for
• a narrow range of mainly own-label products allows Aldi to buy each line in very large volumes and reduce handling costs, so its unit costs are lower and it can undercut rivals such as Tesco on price while still making a profit, attracting price-sensitive shoppers` },

      { q: 'Brightwell Components makes precision parts for the aerospace industry. In 2025 its board took the strategic decision to move all production from two older sites to a single new automated factory in Derby, costing £38m. The move will take 18 months and will reduce the workforce from 640 to 520.\n\nExplain one effect of this strategic decision on Brightwell\'s human resources.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of a strategic decision, e.g. a long-term, high-risk decision made by senior managers that affects the whole business
• or identification of an effect on human resources, e.g. redundancies, retraining, relocation

Application: up to 2 marks for
• workforce falls from 640 to 520 (120 jobs lost)
• move to a new automated factory in Derby
• the move takes 18 months

Analysis: 1 mark for
• the remaining 520 employees will need retraining to operate automated equipment, increasing training costs in the short term; uncertainty about who will lose their jobs during the 18-month move may also reduce motivation and productivity` },

      { q: 'Loaf & Co is a chain of 14 artisan bakeries in the south-west of England. The owners carried out a SWOT analysis before deciding whether to open five more branches:\n• Strengths: loyal customers; award-winning sourdough; 11% operating profit margin\n• Weaknesses: reliance on two head bakers; high flour and energy costs\n• Opportunities: demand for premium bread; wholesale enquiries from local cafés\n• Threats: supermarkets launching "in-store bakery" sourdough; rising business rates\n\nAssess the usefulness of SWOT analysis to Loaf & Co.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• SWOT analysis is a strategic planning tool that identifies a business's internal strengths and weaknesses and the external opportunities and threats it faces.

Usefulness:
• It forces the owners to match internal strengths (award-winning sourdough, loyal customers) with external opportunities (wholesale enquiries from cafés), which could identify a lower-risk route to growth than opening five branches
• It highlights a key weakness — reliance on two head bakers — which could limit expansion to 19 branches unless the business trains more bakers first
• It is quick and cheap to produce for a small business with limited management time.

Possible counterbalance:
• SWOT is a snapshot; threats such as supermarket sourdough and business rates may change quickly, so the analysis may soon be out of date
• It lists factors but does not rank them or tell the owners what to do — the 11% margin may not be enough to absorb rising costs, but SWOT does not quantify this
• It may be subjective if completed only by the owners, who may overstate strengths.

Potential judgement:
• SWOT is useful as a starting point because it identifies the reliance on two head bakers, which is a crucial constraint on expansion. However, its usefulness depends on it being combined with financial forecasts for the five new branches and reviewed regularly.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Grind & Co is a UK chain of 60 independent-style coffee shops. Arabica coffee prices reached record highs in early 2025, and Grind & Co buys most of its beans from two specialist importers. Its operating profit margin fell from 9.2% in 2023 to 5.8% in 2025. The UK has thousands of coffee shops, including large chains such as Costa and Starbucks.\n\nAssess the importance of the bargaining power of suppliers to Grind & Co\'s profitability.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Porter's Five Forces identifies the forces that determine the competitive intensity, and therefore the profitability, of an industry. Supplier power is high when there are few suppliers or inputs are hard to substitute.

Importance of supplier power:
• Grind & Co relies on only two specialist importers, so they have bargaining power to pass on record arabica prices, which squeezes its margin
• The fall in operating profit margin from 9.2% to 5.8% suggests input costs have risen faster than Grind & Co can raise prices
• As a 60-shop chain, Grind & Co lacks the purchasing economies of scale of Costa or Starbucks, so it has weaker bargaining power over suppliers.

Possible counterbalance:
• Rivalry is intense — thousands of coffee shops compete — so the inability to raise prices may be due to competitive rivalry rather than supplier power
• Buyer power and substitutes (e.g. home coffee machines, supermarket coffee) may limit prices just as much
• Coffee price rises affect the whole industry, so Grind & Co's relative position may be unchanged; other costs such as wages and rent may have contributed to the lower margin.

Potential judgement:
• Supplier power is important in the short term because coffee beans are a key input and Grind & Co depends on two importers. However, the intensity of rivalry is arguably more important because it prevents Grind & Co from passing on higher costs; the business could reduce supplier power by finding additional importers or buying direct from growers.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Heritage Brewing plc sells four beer brands. Using the Boston Matrix, its managers classify them as follows:\n• Old Anchor bitter — 31% share of a declining ale market (cash cow)\n• Summit IPA — 4% share of the fast-growing craft beer market (question mark)\n• Clearwater 0.0% — 22% share of the fast-growing no-alcohol market (star)\n• Harvest Mild — 2% share of a declining market (dog)\n\nAssess the value of portfolio analysis to Heritage Brewing.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Portfolio analysis assesses a business's range of products in terms of market share and market growth, to help allocate resources and achieve a balanced portfolio.

Value of portfolio analysis:
• It shows that cash generated by Old Anchor (cash cow) can be used to fund marketing for Summit IPA, which has only 4% share of a fast-growing market
• Clearwater 0.0% is a star in the growing no-alcohol market, so Heritage can prioritise investment there to protect future revenue as ale declines
• It highlights Harvest Mild as a dog with a 2% share, so the business could divest it and free up brewing capacity.

Possible counterbalance:
• The matrix is based on market share and growth only; Harvest Mild might still be profitable or support relationships with pubs
• Classifications are a snapshot and depend on how the market is defined — e.g. Summit IPA may be a strong brand within a local craft niche
• It does not show the cost of investment or the likely return; turning a question mark into a star may require heavy promotion with no guarantee of success.

Potential judgement:
• Portfolio analysis is valuable to Heritage because it clearly shows the risk of relying on a cash cow in a declining ale market and the need to invest in Clearwater 0.0%. Its value is limited unless it is combined with profitability data for each brand.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Patagonia is a US outdoor clothing company. In 2018 it changed its mission statement to "We\'re in business to save our home planet". In 2022 its founder, Yvon Chouinard, transferred ownership of the company to a trust and a non-profit organisation so that profits not reinvested in the business are used to fight climate change. Patagonia repairs used clothing and encourages customers to buy less.\n\nAssess the value of a mission statement to Patagonia.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• A mission statement is a qualitative statement of a business's purpose and values, intended to guide objectives, strategy and employee behaviour.

Value of the mission statement:
• The mission is reflected in actual decisions — the 2022 ownership change and repair service — so it gives employees a clear sense of direction and a basis for setting objectives
• It differentiates Patagonia from rival outdoor brands and builds loyalty among environmentally conscious customers, supporting premium prices
• It helps recruit and motivate staff who share the company's values, which may reduce labour turnover.

Possible counterbalance:
• Mission statements are often vague and difficult to measure — "save our home planet" does not in itself set targets for sales, costs or emissions
• Critics argue many mission statements are public relations exercises; the value comes from the ownership structure and actions, not the words
• Encouraging customers to buy less may conflict with growth objectives, creating confusion for managers.

Potential judgement:
• For Patagonia the mission statement has unusual value because it is backed by structural decisions such as the 2022 ownership transfer, making it credible to stakeholders. For many businesses, however, a mission statement has limited value unless it is translated into SMART corporate objectives and consistent actions.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Kestrel Homes is a UK housebuilder that completed 2,400 homes in 2024. Mortgage rates rose sharply in 2022–23, reducing demand. The UK government has set a target of 1.5 million new homes in England over this Parliament and introduced planning reforms in 2025. Kestrel also faces new energy-efficiency standards and higher costs of materials and skilled labour.\n\nAssess the usefulness of PESTLE analysis to Kestrel Homes when setting its strategy.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• PESTLE analysis is a framework for identifying political, economic, social, technological, legal and environmental factors in the external environment that may affect a business.

Usefulness:
• Political/legal: the 1.5 million homes target and planning reforms may create opportunities to gain planning permission more quickly, so Kestrel could buy more land
• Economic: interest rates strongly influence mortgage affordability, so PESTLE encourages Kestrel to forecast demand under different interest-rate scenarios
• Environmental/technological: energy-efficiency standards will raise build costs but may allow Kestrel to differentiate its homes, so PESTLE helps it plan ahead.

Possible counterbalance:
• The external environment changes quickly — interest rates and government policy may change before Kestrel acts on the analysis
• PESTLE lists factors but does not show their relative importance or probability; managers still need judgement
• It ignores internal factors, such as Kestrel's land bank, finances and access to skilled labour, which may matter more for strategy.

Potential judgement:
• PESTLE is particularly useful to a housebuilder because demand is highly sensitive to external factors such as interest rates and planning policy. However, it is most useful when combined with SWOT and scenario planning, and when it is updated regularly.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Greggs plc is the UK\'s largest food-on-the-go retailer, with around 2,600 shops and total sales of just over £2bn in 2024. It aims to expand to well over 3,000 UK shops, has extended evening opening hours and sells through delivery apps. It has also developed new products, such as hot food ranges and seasonal specials. Like-for-like sales growth slowed during 2025 as consumer spending weakened.\n\nEvaluate whether Greggs should focus on market penetration or product development to achieve growth.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Ansoff's Matrix shows the growth strategies available and their relative risk: market penetration (existing products, existing markets) is the least risky; product development involves new products for existing markets.

Arguments for market penetration:
• Greggs has a strong brand and value-for-money positioning; opening more shops towards its 3,000+ target uses its existing distinctive capabilities with limited risk
• Evening trading and delivery apps increase sales from existing products without the costs of product research and development
• Greggs' scale in manufacturing and distribution means additional shops benefit from economies of scale, lowering unit costs.

Arguments for product development:
• Slowing like-for-like sales growth suggests existing shops may be reaching saturation in some locations, so penetration alone may bring diminishing returns and cannibalisation
• New products, such as hot food and healthier options, can attract customers at different times of day and raise average spend per visit
• Product development can respond to changing tastes and competition from supermarkets' meal deals and coffee chains.

Possible recommendations:
• Greggs should focus on market penetration because its shop-expansion model is proven, lower-risk and supported by its manufacturing scale; new shops in travel and retail-park locations still offer growth.
• Greggs should combine both — market penetration for volume, with product development to increase spend per customer — because slowing like-for-like growth shows penetration alone may not sustain growth.

Examples of possible 'MOPS' judgements:
• Market – the food-on-the-go market is highly competitive and consumer spending is weak, favouring low-risk penetration
• Objectives – the 3,000+ shop target implies penetration is central
• Product – Greggs' value products suit expansion; new ranges may dilute the value image
• Situation – slowing like-for-like sales may require new products to drive spend per visit

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },

      { q: 'Dyson is a global technology company best known for vacuum cleaners, hair dryers and air purifiers. It invests heavily in research and development and holds thousands of patents. Its products sell at premium prices; for example, its hair styler costs several times more than many rival products. In 2024 Dyson announced around 1,000 job cuts in the UK as part of a global restructuring.\n\nTo what extent is distinctive capability the most important source of competitive advantage for Dyson?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Distinctive capabilities (Kay) are features of a business that rivals cannot easily copy — architecture (relationships), reputation and innovation. Competitive advantage is what enables a business to outperform rivals.

Arguments that distinctive capability is most important:
• Innovation: heavy R&D spending and thousands of patents make Dyson's technology difficult to copy legally, so it can charge premium prices
• Reputation: the Dyson brand is associated with engineering quality, so customers are willing to pay several times the price of rival products
• Architecture: a culture that values engineers and problem-solving creates a flow of new products, e.g. moving from vacuum cleaners into hair care.

Arguments that other factors are important:
• Marketing — distinctive design, premium retail placement and promotion — may be as important as the technology itself
• Distinctive capabilities can be eroded: cheaper rivals such as Shark have gained market share with similar features at lower prices, suggesting Dyson's advantage is not permanent
• Cost factors matter: the 1,000 UK job cuts suggest Dyson must also control costs to remain competitive, so efficiency may be an important source of advantage.

Possible recommendations:
• Distinctive capability — particularly innovation protected by patents — is the most important source of Dyson's competitive advantage because it underpins its premium pricing.
• However, it depends on continued investment; as competitors close the technology gap, brand and marketing may become the more important sources of advantage.

Examples of possible 'MOPS' judgements:
• Market – premium consumer electronics where rivals are catching up
• Objectives – maintaining premium margins globally
• Product – patented, design-led products
• Situation – restructuring and cost cutting in 2024 suggests pressure on the business model

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 3.2 Business Growth ──────────────────────────────── */
  '3.2': {
    name: 'Business Growth',
    questions: [
      { q: 'Barkley Foods and Nutripaw are UK pet-food producers that have agreed to merge. The UK pet-food market is worth £2.5bn. Barkley Foods has annual revenue of £460m and Nutripaw has annual revenue of £310m.\n\nCalculate, to one decimal place, the increase in market share of the merged business compared with Barkley Foods\' current market share. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS2 Calculate, use and understand percentages and percentage changes

Knowledge: 1 mark for
• Market share = sales of the business / total market sales × 100

Application: up to 3 marks for
• Barkley's current market share: 460/2,500 × 100 = 18.4% (1)
• Merged revenue: 460 + 310 = £770m; merged market share: 770/2,500 × 100 = 30.8% (1)
• Increase: 30.8 − 18.4 = 12.4 percentage points (1)

NB: If the only answer given is 12.4 percentage points (or 12.4%) award 4 marks. If the only answer given is 12.4 award 3 marks.` },

      { q: 'Tallow & Wick makes luxury candles. After a product went viral on TikTok, orders rose by 180% in six months. The business bought extra wax and packaging and hired eight temporary staff, but most of its retail customers pay on 60-day credit terms. In March the business could not pay its supplier on time.\n\nExplain why rapid growth may have led to overtrading at Tallow & Wick.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of overtrading, e.g. when a business expands too quickly without sufficient working capital to finance its operations

Application: up to 2 marks for
• orders rose by 180% in six months
• extra wax, packaging and eight temporary staff
• retail customers pay on 60-day credit / could not pay supplier in March

Analysis: 1 mark for
• costs of materials and wages are paid immediately while cash from customers arrives 60 days later, so the rapid increase in orders creates a cash-flow gap; despite rising sales, Tallow & Wick runs out of liquidity to pay suppliers` },

      { q: 'In 2025 Vodafone UK and Three UK completed a merger to form VodafoneThree, owned 51% by Vodafone Group and 49% by CK Hutchison. The combined business has around 27 million customers and has committed to invest £11bn over ten years in a UK 5G network.\n\nExplain one reason why Vodafone and Three merged.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• identification of a reason for a merger, e.g. economies of scale, increased market share/power, access to resources
• or understanding of a merger, e.g. two businesses agreeing to join to form a single business

Application: up to 2 marks for
• around 27 million customers
• £11bn investment in 5G over ten years
• ownership split 51%/49%

Analysis: 1 mark for
• by combining networks and customers the business can spread the very high fixed cost of the £11bn 5G investment over around 27 million customers, reducing cost per customer (technical/financial economies of scale) and allowing it to compete more effectively with larger rivals such as BT/EE` },

      { q: 'Cotswold Coffee Roasters Ltd supplies roasted coffee to 180 independent cafés. Revenue has grown by around 12% a year for five years, funded entirely from retained profit. The owners plan to continue growing organically by opening a subscription website and adding a second roasting machine, rather than buying a rival roaster that is for sale.\n\nAssess the advantages to Cotswold Coffee Roasters of growing organically.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Organic (internal) growth is expansion from within a business, e.g. increasing output, new products or new markets, rather than through mergers or takeovers.

Advantages:
• Growth can be financed from retained profit, as it has been for five years, so the owners avoid interest payments or loss of control
• It is lower risk — steady 12% a year growth avoids problems of integrating another firm's culture and systems
• The owners keep control of quality and the brand, which matters for supplying 180 independent cafés.

Possible counterbalance:
• Organic growth is slower; rivals might buy the roaster that is for sale and gain market share and customers quickly
• Growth is limited by the amount of retained profit available
• A subscription website moves into a new consumer market where the business may lack expertise.

Potential judgement:
• Organic growth suits Cotswold Coffee Roasters because it is profitable and growing steadily without taking on debt. The main risk is the opportunity cost of not buying the rival, which depends on how quickly competitors move.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Page Turner Books is an independent bookshop in York with annual revenue of £640,000. It competes with Amazon and a large Waterstones nearby. It hosts author events and children\'s reading clubs, offers personalised recommendations, and launched a website in 2024 offering local same-day delivery.\n\nAssess how Page Turner Books can survive as a small business in a competitive market.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Small businesses can survive in competitive markets through product differentiation and USPs, flexibility in responding to customer needs, customer service and e-commerce.

Ways to survive:
• Customer service — personalised recommendations build loyalty that Amazon's algorithms cannot fully replicate
• Differentiation/USP — author events and reading clubs make the shop a community experience, not just a place to buy books
• E-commerce — the website with same-day local delivery reduces Amazon's convenience advantage.

Possible counterbalance:
• Amazon and Waterstones benefit from economies of scale and can undercut Page Turner on price, especially on best-sellers
• Events and personal service are labour-intensive and increase costs relative to £640,000 revenue
• A small website may attract few customers without significant marketing spend.

Potential judgement:
• Page Turner can survive if it competes on experience and service rather than price, targeting customers who value community. Survival depends on controlling costs and on loyalty remaining strong if consumer spending falls.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Pulse Gyms has grown from 12 to 85 low-cost gyms in five years. Recently, member complaints about broken equipment have risen, and managers say instructions from head office often arrive late or conflict with each other. Average cost per member has risen from £14.20 to £15.60 per month, and staff turnover has increased.\n\nAssess whether diseconomies of scale are the most significant problem arising from Pulse Gyms\' growth.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Diseconomies of scale occur when average (unit) costs rise as a business increases its scale of production, often due to communication, coordination and motivation problems.

Diseconomies of scale are significant:
• Cost per member has risen from £14.20 to £15.60 (a 9.9% increase), a sign of diseconomies, which is serious for a low-cost gym competing on price
• Late and conflicting instructions show communication problems across 85 sites, leading to poor maintenance and complaints
• Rising staff turnover suggests motivation problems as employees feel remote from head office.

Possible counterbalance:
• The problems may be due to poor management of growth (internal communication) rather than scale itself, and may be solved by restructuring, e.g. regional managers
• Overtrading or cash-flow problems caused by rapid site openings may be a more significant risk
• The cost increase could be due to external factors such as energy prices and the National Living Wage, rather than diseconomies.

Potential judgement:
• Diseconomies of scale are significant because Pulse competes on low prices and rising unit costs threaten its business model. However, communication problems can be tackled through decentralisation, so they need not be permanent.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Crumb & Crust is a chain of 70 bakery cafés in the Midlands. Flour prices have been volatile and supplies from its main miller have been unreliable. The directors are considering buying Tamworth Mills, a regional flour mill, for £6.5m. The mill currently sells 60% of its output to other bakeries.\n\nAssess the benefits to Crumb & Crust of backward vertical integration.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Backward vertical integration is where a business merges with or takes over a business at an earlier stage of the supply chain, such as a supplier.

Benefits:
• Crumb & Crust would secure a reliable supply of flour, reducing the risk of shortages across 70 cafés
• It would gain more control over input costs and quality, protecting margins from volatile flour prices
• The mill's sales to other bakeries (60% of output) provide an additional revenue stream, and Crumb & Crust could gain information about rivals' demand.

Possible counterbalance:
• The £6.5m cost may require borrowing, increasing gearing and interest costs
• Crumb & Crust has no experience of running a flour mill, so there may be management and culture problems
• Rival bakeries may stop buying from the mill if it is owned by a competitor, reducing the mill's revenue.

Potential judgement:
• Backward vertical integration is beneficial if supply reliability is the main threat to Crumb & Crust. However, a long-term supply contract might achieve similar security at lower cost and risk than a £6.5m acquisition.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Harwood Group plc, a manufacturer of kitchen appliances, has made a £420m offer to take over its rival Lindell plc. The takeover would be financed by a £300m bank loan and £120m of new shares. Harwood\'s operating profit in 2024 was £38m. Its gearing ratio would rise from 22% to 51% after the takeover. Harwood expects £15m of annual cost savings within three years.\n\nAssess the financial risks to Harwood Group of the takeover.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• A takeover is where one business buys a controlling interest in another. Financial risks include higher borrowing costs, paying too much for the target, and failing to achieve expected synergies.

Financial risks:
• Gearing rising from 22% to 51% makes Harwood highly geared; interest on £300m could absorb a large proportion of its £38m operating profit, especially if interest rates rise
• Harwood may be overpaying — £420m is over 11 times its own operating profit; if the £15m savings are not achieved, returns on the investment will be low
• Issuing £120m of new shares dilutes existing shareholders' ownership and could reduce earnings per share.

Possible counterbalance:
• The £15m annual cost savings (economies of scale) could significantly increase profit, making the debt manageable
• The takeover removes a rival and increases market power, which may allow higher prices and margins
• Financing partly with shares limits the rise in debt, and the bank would have assessed Harwood's ability to repay.

Potential judgement:
• The financial risks are significant because a 51% gearing ratio leaves Harwood vulnerable to rising interest rates and falling demand for kitchen appliances. The risk depends on how quickly the cost savings are achieved — many takeovers fail to deliver expected synergies.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Northgate Wholesale supplies food and drink to 4,000 independent convenience stores. In 2025 it took over a rival wholesaler, becoming the third-largest wholesaler in its region. It now buys 40% more stock from each of its major suppliers and has negotiated discounts of 3–5%. However, integrating the two IT systems has been slow and some customers have complained about late deliveries.\n\nAssess the extent to which increased market power over suppliers is the main benefit of growth for Northgate Wholesale.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Growth can bring economies of scale, increased market power over customers and suppliers, increased market share and brand recognition, and increased profitability.

Market power over suppliers is the main benefit:
• Buying 40% more stock has allowed Northgate to negotiate 3–5% discounts; in a low-margin wholesale business this can significantly increase profit
• Greater buying power may also secure better credit terms and priority supply during shortages
• Lower purchase costs may be passed on to 4,000 convenience stores, helping them compete with supermarkets.

Possible counterbalance:
• Increased market share (third-largest in the region) may bring greater benefits, such as brand recognition and new customers
• Other economies of scale — e.g. spreading warehouse and delivery costs over more customers — may matter more than purchasing economies
• The benefits may be offset by the IT integration problems and late deliveries, which could lose customers.

Potential judgement:
• Market power over suppliers is the main benefit in the short term because the discounts are immediate and measurable. In the long term, the benefit depends on Northgate solving the integration problems, otherwise diseconomies may cancel out the gains.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'GreenFork Ltd produces plant-based ready meals and has annual revenue of £48m, mainly from UK supermarkets. It wants to double revenue in five years. The directors are considering two options:\n• Option 1: acquire Veggiewerk, a German plant-based food producer with revenue of €40m, for €60m, financed by a bank loan and venture capital\n• Option 2: grow organically by investing £14m in a second production line and new product ranges, and by pitching for listings in UK discount supermarkets\nUK sales of plant-based meat alternatives fell in 2023–24 after rapid growth, while Germany is one of Europe\'s largest markets for plant-based food.\n\nEvaluate which option GreenFork should choose to achieve its growth objective.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Inorganic (external) growth involves mergers and takeovers; organic growth involves expansion from within the business.

Arguments for Option 1 (acquisition):
• Acquiring Veggiewerk would add around €40m of revenue immediately, making the objective of doubling revenue far more achievable than through organic growth
• It gives GreenFork access to Germany, one of Europe's largest plant-based markets, spreading risk away from a UK market where sales have fallen
• GreenFork gains Veggiewerk's brand, customers and distribution in the EU, avoiding the costs of building them from scratch.

Arguments for Option 2 (organic growth):
• Organic growth is lower risk: the £14m investment is much smaller than €60m, and GreenFork avoids high borrowing and loss of control to venture capitalists
• There may be culture clashes and integration problems between UK and German businesses; many takeovers fail to add value
• Discount supermarkets are growing and price-conscious customers may be attracted to lower-priced plant-based meals, giving access to a large existing UK market.

Possible recommendations:
• GreenFork should choose Option 1 because the objective of doubling revenue in five years is ambitious and the UK market is declining, so it needs diversification into a larger European market.
• GreenFork should choose Option 2 because falling demand for plant-based food makes a €60m debt-financed acquisition too risky; slower organic growth protects its finances even if revenue does not double.

Examples of possible 'MOPS' judgements:
• Market – UK plant-based demand has fallen; Germany is larger
• Objectives – doubling revenue in five years favours the acquisition
• Product – plant-based ready meals may need adapting for German tastes
• Situation – GreenFork's size (£48m revenue) means a €60m takeover is a very large financial commitment

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 3.3 Decision-Making Techniques ───────────────────── */
  '3.3': {
    name: 'Decision-Making Techniques',
    questions: [
      { q: 'Bloomfield Garden Centre recorded the following monthly sales (£000): January 120, February 135, March 129, April 141, May 150, June 147.\n\nCalculate the three-period moving averages centred on April and on May, and the percentage change between them. Give your answer to two decimal places. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS1 Calculate, use and understand ratios, averages and fractions; QS2 Calculate, use and understand percentages and percentage changes

Knowledge: 1 mark for
• Three-period moving average = sum of three consecutive periods / 3 (centred on the middle period)

Application: up to 3 marks for
• Moving average centred on April: (129 + 141 + 150)/3 = 420/3 = £140,000 (1)
• Moving average centred on May: (141 + 150 + 147)/3 = 438/3 = £146,000 (1)
• Percentage change: (146 − 140)/140 × 100 = 4.29% (1)

NB: If the only answer given is 4.29% award 4 marks. If the answer given is 4.29 or 4.3% award 3 marks.` },

      { q: 'The Harbourside Hotel is considering installing solar panels at a cost of £400,000. The expected net cash flows are: Year 1 £150,000; Year 2 £180,000; Year 3 £160,000. The discount factors at 8% are: Year 1 0.926; Year 2 0.857; Year 3 0.794.\n\nCalculate the net present value (NPV) of the investment. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS6 Calculate investment appraisal outcomes and interpret results

Knowledge: 1 mark for
• NPV = total present value of net cash flows − initial cost, where present value = net cash flow × discount factor

Application: up to 3 marks for
• Present values: 150,000 × 0.926 = £138,900; 180,000 × 0.857 = £154,260; 160,000 × 0.794 = £127,040 (1)
• Total present value: 138,900 + 154,260 + 127,040 = £420,200 (1)
• NPV = 420,200 − 400,000 = £20,200 (1)

NB: If the only answer given is £20,200 award 4 marks. If the answer given is 20,200 (no £ sign) award 3 marks.` },

      { q: 'Pixelforge Studios is deciding whether to develop a new game. Development costs £250,000. There is a 0.6 probability that the game succeeds, earning £700,000, and a 0.4 probability that it performs poorly, earning £150,000.\n\nCalculate the net expected value of developing the new game. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS8 Use and interpret quantitative and non-quantitative information in order to make decisions

Knowledge: 1 mark for
• Expected value = probability × financial outcome, summed for all outcomes; net expected value = expected value − cost

Application: up to 3 marks for
• 0.6 × £700,000 = £420,000 and 0.4 × £150,000 = £60,000 (1)
• Expected value = 420,000 + 60,000 = £480,000 (1)
• Net expected value = 480,000 − 250,000 = £230,000 (1)

NB: If the only answer given is £230,000 award 4 marks. If the answer given is 230,000 award 3 marks. If £480,000 is given as the final answer award 2 marks.` },

      { q: 'Maple Events is refitting a venue. The activities are:\n• A: strip out old fittings — 3 days (start)\n• B: install kitchen — 5 days (after A)\n• C: rewire — 2 days (after A)\n• D: plaster and decorate — 4 days (after C)\n• E: fit furniture and test — 6 days (after B and D)\n\nCalculate the total float on activity B. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS9 Interpret, apply and analyse information in written, graphical and numerical forms

Knowledge: 1 mark for
• Total float = latest finish time − duration − earliest start time

Application: up to 3 marks for
• Earliest start time of B = 3 (after A) (1)
• Critical path A–C–D–E = 3 + 2 + 4 + 6 = 15 days, so latest finish time of B = 15 − 6 = 9 (1)
• Total float on B = 9 − 5 − 3 = 1 day (1)

NB: If the only answer given is 1 day award 4 marks. If the answer given is 1 award 3 marks.` },

      { q: 'Pixelforge Studios must choose between two options:\n• Option A: develop a new game — cost £250,000; 0.6 chance of £700,000 revenue, 0.4 chance of £150,000 (net expected value £230,000)\n• Option B: release an expansion for an existing game — cost £100,000; 0.7 chance of £350,000 revenue, 0.3 chance of £200,000 (net expected value £205,000)\nThe probabilities were estimated by the studio\'s founder based on past releases.\n\nAssess the usefulness of decision trees to Pixelforge Studios in making this decision.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• A decision tree is a diagram that sets out options, their possible outcomes, probabilities and financial values, allowing expected values to be calculated.

Usefulness:
• It shows Option A has a higher net expected value (£230,000 v £205,000), giving a quantitative basis for the decision
• It makes Pixelforge consider the risk of each outcome, e.g. Option A has a 0.4 chance of poor performance
• It sets out options clearly so the founder can explain the decision to investors.

Possible counterbalance:
• The probabilities are the founder's estimates; a small change (e.g. 0.5 success for A) would change the result
• Option A requires £150,000 more investment for only £25,000 more expected value — the decision tree does not show the studio's ability to absorb a loss
• Qualitative factors — staff skills, brand building, timing of the release — are ignored.

Potential judgement:
• Decision trees are useful for comparing options in a structured way, but for Pixelforge the difference in expected value is small and the probabilities are subjective, so the decision should also consider cash flow and risk appetite.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'SunShield Ltd sells umbrellas and rainwear. It forecasts sales by plotting monthly sales against rainfall on a scatter graph and extrapolating a line of best fit. In 2025, an unusually dry summer and a viral social-media trend for a rival\'s compact umbrella caused actual sales to be 22% below forecast.\n\nAssess the reliability of quantitative sales forecasting for SunShield Ltd.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Quantitative sales forecasting uses numerical data such as time series, moving averages, scatter graphs and extrapolation to predict future sales.

Reliable:
• A scatter graph shows a clear correlation between rainfall and umbrella sales, so SunShield can plan stock and production using weather patterns
• Extrapolating past trends is quick and cheap and is reasonably accurate when conditions are stable
• Moving averages can remove random fluctuations and reveal the underlying seasonal trend.

Possible counterbalance:
• Extrapolation assumes the past will continue; the unusually dry summer made sales 22% below forecast
• Correlation does not prove causation — other variables, such as the rival's viral product, affect sales but are not captured
• Quantitative methods cannot predict sudden changes in tastes or competitor actions, which may be common in a fashion-influenced market.

Potential judgement:
• Quantitative forecasting is reasonably reliable for SunShield's underlying seasonal pattern, but the 22% error shows it should be combined with qualitative methods, such as market research on competitor trends, and flexible stock policies.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Ridgeway Construction is fitting out a new supermarket that must open in 16 weeks, with penalty payments of £20,000 per week if it is late. The project has 23 activities involving several subcontractors. The project manager has drawn a critical path network showing a total duration of 15 weeks.\n\nAssess the value of critical path analysis (CPA) to Ridgeway Construction.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Critical path analysis identifies the sequence of activities that determines the minimum project duration; activities on the critical path have zero total float.

Value:
• CPA shows the project can be completed in 15 weeks, one week inside the deadline, reducing the risk of £20,000-a-week penalties
• Identifying critical activities allows managers to focus supervision on them and schedule subcontractors precisely, reducing idle time
• Activities with float can be delayed if resources are needed elsewhere, improving efficiency.

Possible counterbalance:
• Durations are estimates; with 23 activities and several subcontractors, delays (e.g. late deliveries, weather) are likely and the one-week margin is small
• CPA does not guarantee quality or show the cost of activities
• The network needs constant updating, which takes management time.

Potential judgement:
• CPA is valuable because the penalty clause makes timing critical and CPA identifies where delays would be costly. Its value depends on the accuracy of time estimates and on regular updating as the project progresses.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Fenmore Foods is considering a £1.2m automated packing line. Its finance director has calculated a payback period of 2 years 9 months and a positive net present value of £85,000 at a discount rate of 9%. The managing director says: "Payback is all we need — we want our money back quickly."\n\nAssess whether net present value is a more useful investment appraisal method than payback for Fenmore Foods.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Payback measures the time taken to recover the initial cost from net cash flows. NPV discounts future cash flows to present values to account for the time value of money.

NPV more useful:
• NPV considers all cash flows over the life of the packing line, whereas payback ignores cash flows after 2 years 9 months
• NPV accounts for the time value of money: a positive NPV of £85,000 at 9% shows the investment adds value after opportunity cost
• NPV can be compared with other projects to see which adds most value.

Possible counterbalance:
• Payback is simpler and quicker, and focuses on liquidity — important if Fenmore has limited cash
• NPV depends on the choice of discount rate; if interest rates rise above 9% the NPV may become negative
• Both rely on forecast cash flows, which are uncertain for automated equipment.

Potential judgement:
• NPV is more useful for a long-life investment of £1.2m because it values all the returns, but payback is still useful as a measure of risk and liquidity. The best approach is to use both alongside qualitative factors.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Halden Print Ltd is considering replacing 30 machine operators with robotic printing presses costing £2.8m. Investment appraisal shows a payback period of 3 years 2 months and an average rate of return of 14%. The business has a strong local reputation and many operators have worked there for over 20 years. The trade union has warned of industrial action.\n\nAssess whether Halden Print should base its decision on the results of investment appraisal.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Investment appraisal uses quantitative techniques — payback, ARR and NPV — to assess whether an investment is worthwhile.

Base the decision on investment appraisal:
• An ARR of 14% is likely to exceed the cost of borrowing, suggesting the investment is financially worthwhile
• Payback in just over three years reduces risk because cash is recovered relatively quickly
• Evidence-based decisions are less affected by bias than subjective judgement.

Possible counterbalance:
• Investment appraisal relies on forecasts of cost savings, which may be inaccurate — e.g. if the robots break down or demand falls
• Qualitative factors are ignored: redundancies of long-serving staff may damage morale, reputation and relationships with the union, and industrial action could delay the project
• Ethical considerations and the effect on the local community are not captured by ARR or payback.

Potential judgement:
• Halden should not rely only on investment appraisal because the human resource and reputational risks are significant. The quantitative results suggest the investment is worthwhile, but it should consider phased introduction, retraining and consultation to reduce resistance.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Marlow Precision Engineering has £2.5m available to invest. It is choosing between two options (cash flows in £m):\n• Option X: robotic welding line — cost 2.4; net cash flows Years 1–5: 0.5, 0.7, 0.8, 0.8, 0.8. Payback 3 years 6 months; ARR 10%; NPV at 8% £0.43m\n• Option Y: refurbish existing machines — cost 1.5; net cash flows Years 1–5: 0.6, 0.6, 0.5, 0.3, 0.2. Payback 2 years 7 months; ARR 9.33%; NPV at 8% £0.32m\nOption X would improve quality consistency, which a major aerospace customer has requested. Option Y would cause less disruption to production.\n\nEvaluate which option Marlow Precision Engineering should choose.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Investment appraisal techniques include payback, average rate of return and net present value; each has limitations and should be combined with qualitative factors.

Arguments for Option X:
• Option X has the higher NPV (£0.43m v £0.32m) and ARR (10% v 9.33%), so it adds more value over five years
• Net cash flows are sustained at £0.8m in Years 3–5, whereas Option Y's cash flows decline to £0.2m by Year 5, suggesting refurbished machines are nearing the end of their life
• Improved quality consistency meets the aerospace customer's request, which could protect a key contract and bring further orders.

Arguments for Option Y:
• Option Y has a faster payback (2 years 7 months v 3 years 6 months), so it is less risky and improves liquidity
• It costs £0.9m less, leaving £1m of the £2.5m available for other uses, and causes less disruption to production
• Later cash flows for Option X are uncertain; if forecasts in Years 4–5 are too optimistic, its advantage may disappear. The NPV depends on an 8% discount rate.

Possible recommendations:
• Marlow should choose Option X because it has the higher NPV and ARR and meets the aerospace customer's quality requirements, securing long-term competitiveness.
• Marlow should choose Option Y if liquidity is a concern or demand is uncertain, because its faster payback and lower cost reduce financial risk.

Examples of possible 'MOPS' judgements:
• Market – aerospace customers demand high quality
• Objectives – long-term competitiveness favours X; short-term liquidity favours Y
• Product – precision components where quality failures are costly
• Situation – Marlow has £2.5m available, so both are affordable

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 3.4 Influences on Business Decisions ─────────────── */
  '3.4': {
    name: 'Influences on Business Decisions',
    questions: [
      { q: 'Hartley & Webb plc is a UK department store group. In 2024 its chief executive received total pay of £3.1m and the median employee earned £26,000. In 2025 the chief executive received £3.96m and the median employee earned £27,500.\n\nCalculate the change in the ratio of chief executive pay to median employee pay between 2024 and 2025. Give your answer to two decimal places. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS1 Calculate, use and understand ratios, averages and fractions

Knowledge: 1 mark for
• Pay ratio = chief executive pay / median employee pay

Application: up to 3 marks for
• 2024 ratio: 3,100,000/26,000 = 119.23 (:1) (1)
• 2025 ratio: 3,960,000/27,500 = 144 (:1) (1)
• Change: 144 − 119.23 = an increase of 24.77 (1)

NB: If the only answer given is 24.77 (or an increase of 24.77:1) award 4 marks. If the answer given is 24.8 or 25 award 3 marks.` },

      { q: 'Fairburn Engineering Ltd was founded 35 years ago by Roy Fairburn, who still owns 80% of the shares. All important decisions are made by Roy and two long-serving directors. Younger managers say their ideas are rarely listened to, and two of them left in 2025 to join a rival.\n\nExplain one disadvantage to Fairburn Engineering of a power culture.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of power culture (Handy), e.g. power is concentrated in one person or a small group at the centre, who make the key decisions
• or identification of a disadvantage, e.g. demotivation, over-reliance on one person

Application: up to 2 marks for
• Roy owns 80% of the shares / decisions made by Roy and two directors
• younger managers' ideas rarely listened to
• two managers left to join a rival in 2025

Analysis: 1 mark for
• because decisions are centralised in Roy, capable managers are not empowered and become demotivated, so they leave for rivals; this raises recruitment costs and means Fairburn loses new ideas that could improve its competitiveness` },

      { q: 'Varley Pharma plc is listed on the London Stock Exchange. Its share price fell 14% after it missed its half-year profit forecast. In response, the board cut its research and development budget by £40m and announced a larger dividend to reassure shareholders.\n\nExplain one reason why short-termism may be a problem for Varley Pharma.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of short-termism, e.g. a focus on immediate results such as quarterly profit or share price at the expense of long-term performance

Application: up to 2 marks for
• share price fell 14% after missing a profit forecast
• R&D budget cut by £40m
• larger dividend announced

Analysis: 1 mark for
• in pharmaceuticals new drugs take many years to develop, so cutting £40m of R&D to boost short-term profit may reduce the pipeline of future products, weakening competitiveness and long-term profitability, which could reduce the share price further in future` },

      { q: 'Weston Style is a UK online fashion retailer. Its buying team has traditionally chosen new ranges based on their experience and instinct. In 2025 the business introduced data analytics software that uses browsing and sales data to predict which products will sell. In a trial, ranges chosen using the software had 18% fewer unsold items than those chosen by buyers.\n\nAssess the benefits to Weston Style of evidence-based decision making.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Evidence-based decision making uses data and quantitative analysis; subjective decision making relies on managers' experience, intuition and judgement.

Benefits:
• The trial showed 18% fewer unsold items, reducing markdowns and stockholding costs and improving margins
• Decisions based on customer data reduce the risk of buyers' personal bias
• Data can be analysed quickly, allowing Weston Style to react to changes in demand.

Possible counterbalance:
• Data shows what customers bought in the past; in fashion, buyers' instinct may be better at spotting new trends before any data exists
• Software is costly and depends on the quality of the data
• Buyers may resist the change, reducing motivation among experienced staff.

Potential judgement:
• Evidence-based decision making is beneficial for Weston Style because the trial shows a measurable reduction in unsold stock. The best approach is likely to combine data with buyers' experience, particularly for new fashion trends.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Boeing, the US aircraft manufacturer, has faced serious safety and quality problems. In January 2024 a door panel blew out of a 737 MAX 9 shortly after take-off, and US regulators then capped 737 production. Kelly Ortberg became chief executive in August 2024 and said the company needed a fundamental change in culture. Later in 2024, around 33,000 workers went on strike for seven weeks.\n\nAssess the difficulties Boeing faces in changing its established corporate culture.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Corporate culture is the shared values, attitudes and beliefs that influence how people in an organisation behave. An established culture can be difficult to change.

Difficulties:
• Boeing is a very large organisation, and culture is embedded in its routines and behaviour, so changes from senior leaders may take years to affect behaviour on the factory floor
• Low trust between management and workers, shown by the seven-week strike of around 33,000 workers, makes employees resistant to change
• Pressure from shareholders to restore production and profits may encourage a return to prioritising output over quality.

Possible counterbalance:
• The door-panel incident and production cap created a crisis that may make employees more willing to accept change
• A new chief executive from outside can act as a transformational leader and signal a break with the past
• Regulatory oversight gives an external incentive to embed a quality-first culture.

Potential judgement:
• Boeing faces major difficulties because culture change in a large organisation is slow and industrial relations have been poor. However, the crisis and new leadership give an opportunity for change, provided leaders are consistent over several years.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Fairleaf Tea is a UK tea brand with revenue of £22m. It pays tea growers in Kenya a premium above the Fairtrade minimum price, uses plastic-free packaging, and donates 2% of profits to education projects in growing regions. These policies add around 8% to its costs. Its tea sells for 20% more than supermarket own-label tea.\n\nAssess whether Fairleaf Tea\'s corporate social responsibility (CSR) policies are likely to increase its profitability.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Corporate social responsibility (CSR) is where a business considers the interests of society and the environment in its decisions, beyond its legal obligations.

CSR increases profitability:
• CSR differentiates Fairleaf, allowing it to charge 20% more than own-label tea; the price premium may more than cover the 8% extra cost
• Ethical consumers may be more loyal, giving more stable revenue and reducing marketing costs
• Paying growers a premium may secure reliable, high-quality supplies.

Possible counterbalance:
• CSR policies add around 8% to costs, reducing margins if customers are unwilling to pay more
• In a cost-of-living squeeze, customers may switch to cheaper own-label tea
• Rivals may adopt similar policies, reducing Fairleaf's differentiation.

Potential judgement:
• CSR is likely to increase profitability if it remains central to the brand and customers value it enough to pay a 20% premium. If price sensitivity rises, the extra costs may reduce profitability.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Thames Water supplies water and wastewater services to around 16 million customers. It has debts of over £16bn and has been criticised for sewage discharges and leaks. In previous years it paid dividends to its shareholders. In 2025 the regulator, Ofwat, fined it £122.7m, including for breaches of rules on dividend payments, and the company sought emergency funding from lenders.\n\nAssess the extent to which Thames Water\'s difficulties resulted from focusing on shareholders rather than stakeholders.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• The shareholder view is that a business should focus on shareholder returns (dividends and share price). The stakeholder view is that a business should consider all its stakeholders, e.g. customers, employees, the community and the environment.

Shareholder focus caused the difficulties:
• Paying dividends while debt rose above £16bn reduced the funds available to invest in pipes and sewage treatment, leading to leaks and discharges
• The £122.7m fine, partly for breaches on dividend payments, suggests the regulator believed shareholder returns were prioritised over customers and the environment
• Neglecting stakeholders damaged Thames Water's reputation and relationship with the regulator, making it harder to raise finance.

Possible counterbalance:
• Much of the debt may reflect the cost of financing a very large, ageing network rather than dividends alone
• Regulation limited the prices Thames Water could charge, restricting revenue for investment
• Rising interest rates since 2022 increased the cost of servicing debt, which was partly outside the company's control.

Potential judgement:
• A focus on shareholders contributed significantly because dividends were paid while investment and financial resilience were weak. However, the difficulties also reflect a highly geared financial structure, rising interest rates and regulation, so shareholder focus was not the only cause.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'In 2025 the UK government announced its support for a third runway at Heathrow Airport. Heathrow\'s owners say expansion would increase passenger capacity, trade and jobs. Local residents are concerned about noise and air pollution, some homes would need to be demolished, and environmental groups argue that more flights are inconsistent with the UK\'s net zero target.\n\nAssess the potential for conflict between Heathrow\'s shareholders and its other stakeholders over the third runway.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Stakeholders are individuals or groups with an interest in a business. Conflict arises when profit-based (shareholder) objectives differ from wider stakeholder objectives.

Significant potential for conflict:
• Shareholders want higher revenue and profits from increased capacity, while local residents face noise, pollution and possible demolition of homes
• Environmental groups argue expansion conflicts with net zero, which may lead to legal challenges and protests, delaying the project and increasing costs
• Airlines (customers) may resist higher landing charges needed to fund the runway.

Possible counterbalance:
• Many stakeholders share the benefits — employees, local businesses, the government and airlines gain from more jobs and trade
• Heathrow could reduce conflict through compensation, noise insulation and investment in sustainable aviation fuel
• Government support may reduce the power of opposing stakeholders.

Potential judgement:
• The potential for conflict is high because local residents and environmental groups bear the costs while shareholders gain most of the profit. The extent of conflict depends on how well Heathrow consults and compensates stakeholders and how the environmental concerns are addressed.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Loom & Lane is a UK fashion retailer with revenue of £310m and an operating profit margin of 6%. An investigation by a charity found that one of its suppliers in Asia employed workers for 70 hours a week below the local living wage. Moving production to independently audited factories that pay a living wage would increase the cost of goods by around 12%. Rivals selling at similar prices have not made this change.\n\nEvaluate whether Loom & Lane should move production to audited factories that pay a living wage.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Business ethics are the moral principles that guide decision making. Strategic decisions may involve trade-offs between profit and ethics.

Arguments for moving production:
• Continuing to use the supplier risks serious reputational damage now that a charity has published evidence; consumer boycotts and negative social media could reduce revenue from £310m
• An ethical supply chain can differentiate Loom & Lane and attract ethically aware customers, supporting brand loyalty
• It reduces legal and regulatory risk (e.g. Modern Slavery Act reporting) and may attract investors who apply ESG criteria.

Arguments against:
• A 12% increase in the cost of goods could eliminate much of the 6% operating margin unless prices rise; rivals have not made the change, so Loom & Lane may lose price competitiveness
• Shareholders may oppose a fall in profit and dividends
• Alternative actions — working with the existing supplier to improve conditions, with regular audits — could address the ethical problem at lower cost.

Possible recommendations:
• Loom & Lane should move production because the reputational risk after the charity's investigation threatens long-term revenue, and it could offset some of the cost by modest price rises and marketing its ethical stance.
• Alternatively, it should first require the current supplier to improve pay and hours with independent audits, moving production only if this fails, which balances profit and ethics.

Examples of possible 'MOPS' judgements:
• Market – price-competitive fashion market where rivals have not changed suppliers
• Objectives – maintaining profit v protecting brand reputation
• Product – fashion clothing where ethical sourcing can be a selling point
• Situation – public evidence from a charity creates urgency

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },

      { q: 'Rolls-Royce plc makes aircraft engines and power systems. When Tufan Erginbilgiç became chief executive in 2023 he described the company as a "burning platform" and set targets to improve profit margins. Rolls-Royce announced up to 2,500 job cuts and renegotiated contracts with airlines. Underlying operating profit rose to around £2.5bn in 2024, the share price rose many times over, and in 2025 the company restarted dividend payments and announced a £1bn share buyback.\n\nTo what extent is Rolls-Royce\'s focus on improving profitability in the interests of all its stakeholders?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Stakeholders include shareholders, employees, customers, suppliers and the community. Corporate timescales can be short-termist (focus on immediate profit) or long-termist (focus on long-term investment and sustainability).

In the interests of stakeholders:
• Shareholders have benefited from a much higher share price, restored dividends and a £1bn buyback
• Higher profits give Rolls-Royce financial security to invest in new engines and technologies, protecting long-term jobs and the supply chain
• A financially stronger business is more reliable for airline customers who depend on it for engine maintenance over decades.

Not in the interests of all stakeholders:
• Up to 2,500 employees lost their jobs, and remaining staff may face greater pressure, reducing morale
• Renegotiated contracts may mean higher costs for airlines, which could be passed on to passengers
• Returning cash through dividends and buybacks could be short-termist if it reduces investment in R&D needed for future engines.

Possible recommendations:
• The focus on profitability is largely in the interests of stakeholders because a financially weak Rolls-Royce threatened jobs and customers in the long term; profitability is a precondition for investment.
• However, it benefits shareholders most in the short term; whether it serves all stakeholders depends on the balance between shareholder returns and long-term investment.

Examples of possible 'MOPS' judgements:
• Market – aerospace is a long-term market dominated by a few engine makers
• Objectives – margin targets set by the new chief executive
• Product – engines with decades-long service contracts
• Situation – the business was previously described as a "burning platform"

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 3.5 Assessing Competitiveness ────────────────────── */
  '3.5': {
    name: 'Assessing Competitiveness',
    questions: [
      { q: 'Pennine Outdoor Ltd makes camping equipment. Extracts from its accounts for 2025 show: revenue £18.6m; cost of sales £11.2m; other operating expenses £4.67m; total equity £12.4m; non-current liabilities £4.8m.\n\nCalculate Pennine Outdoor\'s return on capital employed (ROCE) for 2025. Give your answer to two decimal places. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS1 Calculate, use and understand ratios, averages and fractions

Knowledge: 1 mark for
• ROCE = operating profit / capital employed × 100

Application: up to 3 marks for
• Operating profit: 18.6 − 11.2 − 4.67 = £2.73m (1)
• Capital employed: 12.4 + 4.8 = £17.2m (1)
• ROCE: 2.73/17.2 × 100 = 15.87% (1)

NB: If the only answer given is 15.87% award 4 marks. If the answer given is 15.87 or 15.9% award 3 marks.` },

      { q: 'Castleton Leisure plc has non-current liabilities of £7.35m and total equity of £11.9m. It plans to take out a new five-year bank loan of £3m to refurbish its hotels.\n\nCalculate Castleton Leisure\'s gearing ratio after taking out the loan. Give your answer to two decimal places. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS1 Calculate, use and understand ratios, averages and fractions

Knowledge: 1 mark for
• Gearing = non-current liabilities / capital employed (total equity + non-current liabilities) × 100

Application: up to 3 marks for
• New non-current liabilities: 7.35 + 3 = £10.35m (1)
• New capital employed: 10.35 + 11.9 = £22.25m (1)
• Gearing: 10.35/22.25 × 100 = 46.52% (1)

NB: If the only answer given is 46.52% award 4 marks. If the answer given is 46.52 or 46.5% award 3 marks. (Gearing before the loan was 38.18%.)` },

      { q: 'SwiftPack Logistics had 340 employees at the start of 2025 and 380 at the end of 2025. During the year 54 employees left the business.\n\nCalculate SwiftPack Logistics\' labour turnover for 2025. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS2 Calculate, use and understand percentages and percentage changes

Knowledge: 1 mark for
• Labour turnover = number of staff leaving / average number of staff employed × 100

Application: up to 3 marks for
• Average number of staff: (340 + 380)/2 = 360 (1)
• 54/360 (1)
• × 100 = 15% (1)

NB: If the only answer given is 15% award 4 marks. If the answer given is 15 award 3 marks.` },

      { q: 'Dalby Ceramics produced 184,000 units in 2024 with 230 production workers. In 2025 it produced 201,600 units with 240 production workers.\n\nCalculate the percentage change in labour productivity between 2024 and 2025. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS2 Calculate, use and understand percentages and percentage changes

Knowledge: 1 mark for
• Labour productivity = output per period / number of employees

Application: up to 3 marks for
• 2024: 184,000/230 = 800 units per worker (1)
• 2025: 201,600/240 = 840 units per worker (1)
• Percentage change: (840 − 800)/800 × 100 = 5% (1)

NB: If the only answer given is 5% award 4 marks. If the answer given is 5 or 40 units award 3 marks.` },

      { q: 'Arden Precision Ltd, an engineering company with 220 employees, has launched an employee share ownership scheme. Every employee with more than one year\'s service receives free shares worth £1,000 each year, and can buy more at a discount. Labour turnover was 21% in 2024, above the industry average of 14%, and the business struggles to recruit skilled machinists.\n\nAssess the benefits to Arden Precision of an employee share ownership scheme.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Employee share ownership is where employees are given or can buy shares in the business they work for, so they benefit from its success through dividends and rising share value.

Benefits:
• Employees who own shares have a financial stake in the business, which may improve motivation and productivity
• The one-year service requirement and annual awards encourage staff to stay, which could reduce labour turnover from 21% towards the 14% industry average
• It helps Arden attract skilled machinists in a competitive labour market.

Possible counterbalance:
• £1,000 of shares a year for up to 220 employees is a significant cost and dilutes existing owners' shareholdings
• Shares in a private company may be hard to sell, so employees may value them less than a pay rise
• Turnover may be caused by other factors, such as working conditions or lack of progression, which the scheme does not address.

Potential judgement:
• The scheme is likely to benefit Arden by encouraging retention of skilled staff, provided employees value the shares. Its success depends on whether pay and share rewards are the main reason staff are leaving.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'An investor is comparing two UK furniture retailers:\n• Oakhouse plc: ROCE 18.4%; gearing 62%\n• Birchwood plc: ROCE 11.2%; gearing 24%\nOakhouse has grown rapidly by opening new stores funded by loans. Birchwood owns most of its stores and has been trading for 90 years. The ratios are based on each company\'s most recent annual accounts, which end on different dates.\n\nAssess the limitations of ratio analysis for the investor comparing Oakhouse and Birchwood.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Ratio analysis uses figures from financial statements, e.g. ROCE and gearing, to assess performance and compare businesses.

Usefulness of the ratios:
• ROCE shows Oakhouse generates more operating profit per £ of capital (18.4% v 11.2%), suggesting better use of resources
• Gearing shows Oakhouse is highly geared (62%), so it is riskier if interest rates rise or sales fall
• Ratios allow quick comparison between businesses of different sizes.

Limitations:
• Accounts end on different dates, so seasonal or economic differences may distort the comparison
• Ratios are based on historical data and do not show future prospects, e.g. whether Oakhouse's new stores will stay profitable
• Birchwood owns its stores, which may be valued at historical cost, affecting capital employed and ROCE; qualitative factors such as brand reputation, management and market trends are ignored.

Potential judgement:
• Ratios are a useful starting point, but the limitations are significant here because the companies have different financing structures and year-ends. The investor should compare trends over several years and consider qualitative factors before deciding.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Norbrook Building Supplies Ltd is applying for a £2m bank loan to open three new depots. Its statement of financial position shows: non-current assets £9.4m; current assets £3.1m (including inventories of £2.2m); current liabilities £2.8m; non-current liabilities £1.6m; total equity £8.1m. Its statement of comprehensive income shows operating profit of £1.3m.\n\nAssess the usefulness of Norbrook\'s financial statements to the bank in deciding whether to lend £2m.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• The statement of financial position shows a business's assets, liabilities and equity at a point in time; the statement of comprehensive income shows revenue, costs and profit over a period.

Useful:
• Gearing is low: 1.6/(1.6 + 8.1) × 100 = 16.49%, so the business could take on more debt; after the loan it would be 3.6/11.7 × 100 = 30.77%
• Non-current assets of £9.4m could provide security (collateral) for the loan
• Operating profit of £1.3m suggests Norbrook can afford interest payments on £2m.

Possible counterbalance:
• Liquidity may be weak: current assets of £3.1m barely exceed current liabilities of £2.8m, and £2.2m of current assets is inventory, which may be hard to sell quickly
• The statements are historical; building supplies depend on the housing market, which may change
• They do not show cash-flow forecasts for the new depots or the quality of management.

Potential judgement:
• The statements are useful because they show low gearing and assets available as security, which reduce the bank's risk. However, the bank should also examine cash-flow forecasts and the business plan, given the weak liquidity position.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Meadowcare operates 28 care homes. Its absenteeism rate is 7.1%, compared with a sector average of 4.2%, and it spends £1.9m a year on agency staff to cover absences. Staff surveys show care workers feel they have little say in how their homes are run. The directors are considering introducing a staff council in each home and allowing senior carers to make decisions about rotas and resident activities.\n\nAssess whether consultation and empowerment strategies will reduce absenteeism at Meadowcare.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Consultation involves asking employees for their views before decisions are made; empowerment gives employees authority to make decisions about their own work. Absenteeism is the percentage of working time lost through staff absence.

Will reduce absenteeism:
• Surveys show staff feel they have little say, so staff councils address a clear cause of dissatisfaction and may increase commitment (Herzberg's motivators; Mayo)
• Allowing senior carers to set rotas can improve work–life balance, reducing absence caused by stress and fatigue
• Lower absenteeism would reduce the £1.9m spent on agency staff and improve continuity of care, which matters for inspections and reputation.

Possible counterbalance:
• Absence in care work may be caused by low pay, physical demands and stress, which consultation will not solve (Herzberg's hygiene factors)
• Empowerment requires training and trust; poorly trained senior carers could make poor decisions
• Benefits take time; staff may see councils as tokenistic if managers ignore their views.

Potential judgement:
• Consultation and empowerment are likely to reduce absenteeism because they respond directly to staff survey findings. However, they are most effective when combined with fair pay and manageable workloads, as absence in a demanding sector like care has several causes.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Two UK soft drinks manufacturers report the following for 2025:\n• Fizzco Ltd: revenue £84m; ROCE 21%; gearing 58%; labour productivity 1.9 million litres per worker\n• Spring Valley Ltd: revenue £61m; ROCE 14%; gearing 19%; labour productivity 2.4 million litres per worker\nFizzco has a strong brand among young consumers but relies on one major supermarket for 45% of its sales. Spring Valley recently invested in a new automated bottling plant.\n\nAssess which business is more competitive.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Competitiveness is the ability of a business to perform better than rivals, which may be assessed using financial ratios (ROCE, gearing), human resource measures (labour productivity) and qualitative factors.

Fizzco is more competitive:
• Fizzco's ROCE of 21% is 7 percentage points higher than Spring Valley's, showing it generates more operating profit from its capital
• Revenue is £23m higher, suggesting greater market share
• Its strong brand among young consumers may allow it to charge higher prices.

Spring Valley is more competitive:
• Spring Valley's labour productivity is 2.4 million litres per worker compared with 1.9 million — 26% higher — so it may have lower unit costs
• Fizzco is highly geared at 58%, making it vulnerable to rising interest rates, whereas Spring Valley's gearing is 19%
• Fizzco relies on one supermarket for 45% of sales, giving that buyer considerable power; Spring Valley's new plant may raise its ROCE in future once it is fully used.

Potential judgement:
• Fizzco is currently more competitive on profitability and brand, but its competitiveness is riskier because of high gearing and dependence on one customer. Spring Valley may become more competitive in the longer term because of its productivity advantage and stronger financial position.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Hollin Distribution runs three large warehouses employing 1,400 staff. Labour turnover is 38% a year, and recruiting and training each new warehouse operative costs around £3,500. Pay is at the National Living Wage. Exit interviews show that staff leave because of pay (41%), shift patterns (29%), lack of progression (18%) and other reasons (12%). Rival warehouses nearby pay up to £1.50 an hour more.\n\nEvaluate whether financial rewards are the most effective way for Hollin Distribution to reduce labour turnover.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Labour turnover measures the proportion of staff leaving a business over a period. HR strategies to reduce turnover include financial rewards, employee share ownership, consultation and empowerment.

Arguments for financial rewards:
• Pay is the most common reason for leaving (41%), and rivals pay up to £1.50 an hour more, so higher pay directly addresses the main cause
• With 38% turnover among 1,400 staff, around 532 staff leave each year; at £3,500 each this costs around £1.86m a year, so higher pay could partly pay for itself
• Retention bonuses paid after a set period of service could encourage staff to stay through the peak season.

Arguments for other strategies:
• 59% of leavers give non-pay reasons — shift patterns (29%) and lack of progression (18%) — which consultation on rotas and clear career paths could address at lower cost
• Rivals could match any pay rise, so the advantage may be short-lived; Herzberg suggests pay is a hygiene factor that prevents dissatisfaction but does not motivate
• Raising pay by £1.50 an hour for 1,400 staff would cost far more than the savings from lower turnover if staff each work around 1,800 hours a year (around £3.8m).

Possible recommendations:
• Financial rewards should be part of the solution because pay is the main reason for leaving and Hollin pays less than local rivals; a targeted increase or retention bonus may be cost-effective.
• However, a combined strategy — modest pay rises with more flexible shifts and progression routes — is likely to be most effective, because most leavers cite non-pay reasons.

Examples of possible 'MOPS' judgements:
• Market – competitive local labour market for warehouse staff
• Objectives – reducing the £1.86m annual cost of turnover
• Product – warehouse operations where experienced staff are more productive
• Situation – pay at the National Living Wage and below local rivals

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 3.6 Managing Change ──────────────────────────────── */
  '3.6': {
    name: 'Managing Change',
    questions: [
      { q: 'In 2025 Kingfield Pet Supplies, a family-owned chain of 45 stores, was bought by a private equity firm. The new owners appointed a new chief executive, announced the closure of nine loss-making stores and plan to double online sales within three years.\n\nExplain how new ownership can cause change at Kingfield Pet Supplies.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• identification of new ownership as a cause of change, e.g. new owners bring different objectives, leadership and strategy

Application: up to 2 marks for
• bought by a private equity firm in 2025
• nine loss-making stores to close / new chief executive
• plan to double online sales in three years

Analysis: 1 mark for
• private equity owners seek a high return within a few years, so they change strategy by closing loss-making stores and prioritising online growth; this changes the structure and jobs of the business and may affect staff morale` },

      { q: 'Hendry & Sons Ltd is a Scottish building firm with 90 employees. Its founder and managing director, Alan Hendry, is 68 and makes most major decisions himself. He holds the key relationships with the firm\'s largest clients, including two local councils.\n\nExplain one benefit to Hendry & Sons of succession planning.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of succession planning, e.g. identifying and developing people to replace key staff when they leave or retire
• or identification of a benefit, e.g. continuity of leadership

Application: up to 2 marks for
• Alan Hendry is 68
• he makes most major decisions
• he holds key relationships with the largest clients, including two councils

Analysis: 1 mark for
• by identifying and training a successor now, key client relationships such as those with the councils can be transferred gradually, so the business does not lose contracts or suffer poor decision making if Alan retires suddenly or becomes ill` },

      { q: 'Carlow Borough Council is replacing its paper-based planning system with online software. Several experienced planning officers have said they are worried the new system will reduce their control over decisions, and one has described the change as "unnecessary".\n\nExplain one way in which managers could reduce resistance to change among the planning officers.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• identification of a method, e.g. communication and education, participation and involvement, training, support

Application: up to 2 marks for
• change from paper-based to online planning software
• experienced officers worried about loss of control
• one officer describes the change as "unnecessary"

Analysis: 1 mark for
• involving experienced officers in choosing and testing the new software would help them understand why the change is needed and give them some control, so they are more likely to support the system and less likely to slow its introduction` },

      { q: 'In April 2025 Marks & Spencer suffered a cyber attack that forced it to pause online clothing orders for around seven weeks. M&S estimated that the attack would reduce its operating profit by around £300m, although part of this was expected to be covered by insurance. Some food stores also experienced empty shelves because stock systems were affected.\n\nAssess the importance to Marks & Spencer of planning for IT systems failure.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Scenario planning involves identifying key risks, such as IT systems failure, and planning to mitigate them, for example through business continuity plans.

Importance:
• The £300m estimated reduction in operating profit shows the scale of the financial risk from IT failure
• Online orders were paused for around seven weeks; a business continuity plan with back-up systems could have allowed faster recovery and protected market share
• Empty shelves and data concerns can damage customer trust and the brand.

Possible counterbalance:
• Some losses were expected to be covered by insurance, limiting the financial impact
• Cyber attacks are constantly changing, so even detailed plans may not prevent disruption
• Planning for every risk is costly, and M&S must balance this against other investments.

Potential judgement:
• Planning for IT systems failure is very important for M&S because it relies on online sales and integrated stock systems, and the cost of disruption was far larger than the likely cost of stronger security and continuity plans.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Sophie Grant became chief executive of Ravensworth Hotels, a chain of 22 hotels, in 2024. Profits had fallen for three years. She set out a vision to make Ravensworth "the UK\'s most sustainable hotel group", replaced several senior managers, and encouraged staff at every hotel to suggest improvements. Guest satisfaction scores have risen, but two regional managers resigned, saying the pace of change was too fast.\n\nAssess the effects of transformational leadership on Ravensworth Hotels.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Transformational leadership is where a leader creates a vision for the organisation and inspires employees to achieve significant change.

Positive effects:
• A clear vision gives direction to a business whose profits had fallen for three years, and may differentiate it in a competitive market
• Encouraging staff to suggest improvements may increase motivation and generate ideas, contributing to higher guest satisfaction
• Replacing senior managers removes resistance at the top and speeds up change.

Negative effects:
• Two regional managers resigned, losing experience and possibly damaging relationships at hotel level
• Rapid change may cause stress and uncertainty among staff, reducing productivity in the short term
• Sustainability investments may raise costs before they improve profit, so financial performance may not improve quickly.

Potential judgement:
• Transformational leadership appears to be having a positive effect, shown by higher guest satisfaction. However, the resignations suggest the pace of change needs managing, and success should ultimately be judged by whether profits recover.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Lindgate Bank has 18,000 employees and over 300 branches. It plans to close 90 branches and move most services onto its mobile app within two years. A small building society, Thornbury, with 250 employees and 12 branches, is making similar changes.\n\nAssess the extent to which the size of an organisation affects its ability to manage change, with reference to Lindgate Bank.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• The size of an organisation is a key factor in change, affecting communication, the number of stakeholders involved and the resources available.

Size makes change harder:
• With 18,000 employees and over 300 branches, communication is more complex, so messages may be distorted and resistance may build
• Large organisations often have established cultures and hierarchies, making it slower to change behaviour
• Closing 90 branches affects many stakeholders, including communities and regulators, increasing the risk of opposition.

Size may help:
• Lindgate has greater financial resources to invest in the app, training and redundancy support than Thornbury
• It can employ specialist change managers and IT staff
• Culture, leadership and the speed of change may matter more than size — a small organisation with a resistant culture may struggle more.

Potential judgement:
• Size significantly affects Lindgate's ability to manage change because of the scale of communication and stakeholder impact. However, its greater resources mean it can manage change effectively if leadership and communication are strong.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Kellingworth Retail has 140 homeware stores. After two years of losses, it plans to close 35 stores, make 600 staff redundant, and invest £25m in its website and in larger "destination" stores. Some suppliers are concerned about lower orders, and the local councils in affected towns are worried about empty high-street units.\n\nAssess the possible effects of these changes on Kellingworth Retail\'s stakeholders.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Change caused by poor business performance can affect competitiveness, productivity, financial performance and stakeholders.

Negative effects:
• 600 employees will lose their jobs, and remaining staff may feel insecure and less motivated
• Suppliers may receive fewer orders, affecting their revenue and possibly their survival
• Local communities and councils face empty units, lower footfall and reduced business rates.

Positive effects:
• Closing loss-making stores and investing £25m in online sales could return the business to profit, protecting the jobs of the remaining employees
• Shareholders and lenders benefit if losses are reduced, lowering the risk of business failure
• Customers may benefit from a better website and larger destination stores with a wider range.

Potential judgement:
• The effects are negative in the short term for employees, suppliers and communities, but the change may be necessary to secure the business's survival. The overall effect depends on whether the £25m investment succeeds in returning Kellingworth to profit.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'After a new competitor launched, Brookside Insurance lost 15% of its customers in one year. The board is considering two approaches to restructuring: a rapid change, completed within six months, to cut costs and launch a new app-based product; or a gradual change over two years, with staff consultation and pilot schemes in one region first.\n\nAssess whether Brookside Insurance should introduce change rapidly.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• The time/speed of change is a key factor in managing change. Rapid change can respond quickly to threats; gradual (incremental) change allows time for consultation and adjustment.

Arguments for rapid change:
• Losing 15% of customers in one year is a serious threat; delay could allow the competitor to gain further market share
• Rapid cost cutting may protect profitability and reassure shareholders
• A short, decisive change reduces a long period of uncertainty for employees.

Arguments for gradual change:
• Gradual change allows consultation, reducing resistance and improving staff understanding
• Piloting in one region allows problems with the app to be fixed before national launch, reducing the risk of reputational damage
• Rapid change may lead to mistakes, poor morale and loss of experienced staff.

Potential judgement:
• Brookside should introduce change rapidly because the loss of customers is urgent, but it should communicate clearly and retain some consultation to reduce resistance. If the competitive threat is less urgent than it appears, a gradual approach may produce a more sustainable result.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Fenland Fresh Ltd processes vegetables at a single factory in Lincolnshire, supplying major UK supermarkets. The factory is in an area at risk of flooding, and in 2024 heavy rain stopped production for five days, costing £1.1m in lost sales. The company relies on one IT system for orders and logistics, and its operations director, who designed the production system, is retiring next year. The board is considering spending £2.4m on flood defences, a back-up IT system and a succession plan.\n\nEvaluate whether Fenland Fresh should invest £2.4m in scenario planning and risk mitigation.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Scenario planning involves identifying key risks — such as natural disasters, IT systems failure and loss of key staff — through risk assessment and planning to mitigate them, e.g. business continuity and succession planning.

Arguments for investing:
• Natural disasters: flooding has already cost £1.1m in five days; with climate change, flooding may become more frequent, so flood defences could pay for themselves after a few incidents
• IT systems failure: a single system for orders and logistics is a major risk — supermarkets expect reliable deliveries and could switch suppliers after a failure
• Loss of key staff: succession planning for the operations director protects knowledge of the production system.

Arguments against:
• £2.4m is a large cost compared with the £1.1m loss experienced; the probability of repeated flooding is uncertain
• Some risks can be mitigated more cheaply — insurance, a cloud-based back-up, or documenting the production system and training a deputy
• Money spent on risk mitigation has an opportunity cost, e.g. investing in capacity or new products.

Possible recommendations:
• Fenland Fresh should invest because it depends on one factory and one IT system, and losing supermarket contracts would cost far more than £2.4m.
• It could prioritise the cheapest high-impact measures first (IT back-up and succession planning), and phase flood defences depending on insurance costs and risk assessments.

Examples of possible 'MOPS' judgements:
• Market – supermarkets demand reliable supply and can switch suppliers
• Objectives – business continuity and protecting contracts
• Product – perishable vegetables that cannot be stored for long
• Situation – single site in a flood-risk area with one IT system

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },

      { q: 'In 2025 Ashby Engineering merged with Corran Technologies. Ashby has a role culture with clear procedures and a strong focus on safety. Corran is a young software business with a task culture, flexible hours and project teams. Since the merger, several Corran engineers have left, complaining about "bureaucracy", and projects have been delayed.\n\nTo what extent is organisational culture the most important factor in the success of change at Ashby Engineering?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Organisational culture — e.g. power, role, task and person cultures — is a key factor in change, along with size, the time/speed of change and managing resistance.

Arguments that culture is most important:
• The clash between Ashby's role culture and Corran's task culture is causing engineers to leave, losing the skills the merger was intended to gain
• Culture shapes how employees respond to change; Corran staff see procedures as "bureaucracy", so resistance is rooted in culture
• Established cultures are difficult to change, so unless the cultures are integrated, the benefits of the merger may not be achieved.

Arguments that other factors matter:
• Managing resistance — communication, involvement and support — could reduce departures even if cultures differ
• Leadership: a clear vision from senior managers could unite the two businesses
• The speed of integration may be the problem — allowing Corran to keep its own ways of working for a period (a separate division) could avoid the clash.

Possible recommendations:
• Culture is the most important factor because the clash is directly causing the loss of skilled staff and project delays.
• However, culture can be managed through leadership and the pace of integration, so success depends on how managers respond — e.g. keeping Corran as a separate unit with a task culture.

Examples of possible 'MOPS' judgements:
• Market – competitive market for software engineers
• Objectives – combining engineering and software expertise
• Product – projects that depend on skilled, creative staff
• Situation – departures and delays since the merger

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 4.1 Globalisation ────────────────────────────────── */
  '4.1': {
    name: 'Globalisation',
    questions: [
      { q: 'Glen Arrin Distillery exports Scotch whisky to the USA. It sells each bottle to its US importer for £20. From April 2025 the USA applied a 10% tariff to most imports from the UK. The exchange rate is £1 = $1.27.\n\nCalculate the cost in dollars of one bottle to the US importer, including the tariff. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS2 Calculate, use and understand percentages and percentage changes; QS9 Interpret, apply and analyse information in written, graphical and numerical forms

Knowledge: 1 mark for
• understanding of a tariff, e.g. a tax on imports, calculated as a percentage of the import price
• or converting currency: price in £ × exchange rate

Application: up to 3 marks for
• Price in dollars: £20 × 1.27 = $25.40 (1)
• Tariff: $25.40 × 10% = $2.54 (1)
• Cost including tariff: 25.40 + 2.54 = $27.94 (1)

NB: If the only answer given is $27.94 award 4 marks. If the answer given is 27.94 (no $ sign) award 3 marks.` },

      { q: 'Lumo Solar, a UK manufacturer of solar lighting, is choosing between two countries for a new sales office. Country A has GDP per capita of $14,000 but low life expectancy and literacy. Country B has GDP per capita of $11,500 but a higher Human Development Index (HDI) score because of better health and education.\n\nExplain why the Human Development Index may be more useful than GDP per capita for Lumo Solar when comparing these countries.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of HDI, e.g. a composite indicator of development combining income (GNI per capita), health (life expectancy) and education (years of schooling)

Application: up to 2 marks for
• Country A has higher GDP per capita ($14,000 v $11,500)
• Country B has better health and education / a higher HDI
• Lumo Solar is choosing a location for a sales office

Analysis: 1 mark for
• GDP per capita is an average and does not show how income is distributed or the quality of life; a higher HDI in Country B suggests a healthier, better-educated population, which may mean more consumers able to buy solar lighting and a more skilled workforce for the sales office` },

      { q: 'Agratas, the battery business of India\'s Tata Group, is building a £4bn electric vehicle battery gigafactory in Somerset. It is expected to create thousands of jobs and supply batteries to Jaguar Land Rover and other car makers.\n\nExplain how foreign direct investment (FDI) can lead to business growth for Tata Group.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of FDI, e.g. investment by a business in one country in productive assets in another country, such as building a factory

Application: up to 2 marks for
• £4bn gigafactory in Somerset
• supplies batteries to Jaguar Land Rover (also owned by Tata)
• thousands of jobs expected

Analysis: 1 mark for
• by building production capacity in the UK close to its customers, Tata can supply JLR and other European car makers with lower transport costs and less supply-chain risk, increasing its sales and market share in the growing EV battery market` },

      { q: 'Northern Loom Ltd sells premium woollen blankets and throws online. Five years ago it sold only in the UK. It now sells to customers in 34 countries through its website and online marketplaces, using international parcel carriers and video calls with overseas retailers. Overseas sales now make up 45% of its revenue.\n\nAssess the importance of reduced transport and communication costs to Northern Loom\'s international growth.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Reduced cost of transport and communication is a factor contributing to increased globalisation, making it cheaper and easier for businesses to trade internationally.

Importance:
• Low-cost international parcel services make it viable to send individual blankets to customers in 34 countries
• Online marketplaces and websites allow Northern Loom to reach overseas customers without opening shops abroad
• Video calls allow cheap communication with overseas retailers, supporting B2B sales.

Possible counterbalance:
• Other factors, such as the premium quality and British heritage of the product, may be more important in creating overseas demand
• Trade barriers, customs paperwork and returns can still be costly — e.g. for EU sales since Brexit
• Exchange rate movements may affect overseas prices more than transport costs.

Potential judgement:
• Reduced transport and communication costs are very important because they make it possible for a small business to reach 34 countries. However, they enable rather than create growth — demand for the product is also essential.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Redcar Steel Products Ltd makes steel sections for construction and sells 30% of its output to customers in the EU. The EU uses "safeguard" import quotas on steel: once a country\'s quota for a product is used up in a quarter, further imports face a 25% tariff. In 2025 the UK\'s quota for some products was being used up within weeks of each quarter starting.\n\nAssess the impact of EU import quotas on Redcar Steel Products.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• An import quota is a physical limit on the quantity of a good that can be imported into a country or trading bloc over a period.

Negative impact:
• Once the UK quota is used up, Redcar's steel faces a 25% tariff, making it less price competitive in the EU
• EU customers may switch to EU steelmakers to avoid uncertainty about whether the quota will be available
• With 30% of output sold to the EU, lower sales could reduce capacity utilisation and increase unit costs.

Possible counterbalance:
• Redcar could sell early in each quarter while quota remains, or focus on products where the quota is not used up
• It could develop sales in the UK or non-EU markets
• Specialised or high-quality products may still be demanded even with a tariff.

Potential judgement:
• The quotas have a significant negative impact because the EU is a major market and the quota is used up quickly. The impact depends on how easily Redcar can find other markets or specialise in products that EU customers cannot easily source elsewhere.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Dalehead Dairy is a UK cheese producer. Before 2021 it exported 35% of its output to the EU single market. Since the UK left the EU, it has faced export health certificates, border checks and customs paperwork, adding around £300 to the cost of each lorry load. Its EU sales have fallen by 20%, and it is now targeting markets in the Middle East and Asia.\n\nAssess the impact of no longer being part of the EU single market on Dalehead Dairy.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• A trading bloc is a group of countries that agree to reduce or remove trade barriers between them. The EU single market allows free movement of goods, services, capital and people without customs checks.

Negative impact:
• Health certificates and border checks add around £300 per lorry, raising costs and reducing Dalehead's price competitiveness against EU cheesemakers
• Delays at the border are a problem for perishable goods and may lead EU customers to switch suppliers
• EU sales have fallen by 20% — a significant loss when 35% of output was exported to the EU.

Possible counterbalance:
• The UK–EU Trade and Cooperation Agreement means there are no tariffs on qualifying goods, limiting the impact
• The UK can make its own trade deals, which may open markets in the Middle East and Asia
• A 20% fall in EU sales is a reduction of around 7% of total output, which may be replaced by UK or other export sales.

Potential judgement:
• Leaving the single market has had a significant negative impact on Dalehead's EU sales because non-tariff barriers matter for perishable food. The long-term impact depends on whether new markets in Asia and the Middle East can replace lost EU sales.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'India is the world\'s most populous country, and its economy grew by around 6.5% in 2024–25, compared with around 1% in the UK. In 2025 the UK and India signed a trade agreement which will reduce India\'s tariff on Scotch whisky from 150% to 75% immediately, falling to 40% over ten years. Burnside Spirits, a UK drinks company, is considering entering the Indian market.\n\nAssess the opportunities for Burnside Spirits from India\'s economic growth.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Economic growth is an increase in the real output of an economy (GDP). The growing economic power of emerging economies creates trade opportunities for businesses.

Opportunities:
• Growth of around 6.5% a year increases incomes, creating a growing middle class able to afford premium imported spirits
• The fall in the whisky tariff from 150% to 75% (and later 40%) makes Burnside's products much more price competitive
• A huge population provides long-term market potential far exceeding the slow-growing UK market.

Possible counterbalance:
• GDP per capita in India is still low, so the market for premium spirits may be limited to urban, higher-income consumers
• Even at 75%, the tariff is high; Indian whisky producers are well established and have lower costs
• Cultural and regulatory factors — e.g. alcohol laws differ between Indian states — may limit sales.

Potential judgement:
• India offers a significant opportunity because rapid growth and falling tariffs together increase demand and competitiveness. However, Burnside should target urban, higher-income consumers initially, given the high remaining tariff and strong local competition.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Voltara Batteries is a UK manufacturer of batteries for electric buses. It exports to Country Z, where the government has introduced a domestic subsidy that pays local battery makers £150 for every battery they produce. Voltara\'s batteries sell for around £2,000 each in Country Z. Local producers have cut their prices by 8% since the subsidy began.\n\nAssess the impact of Country Z\'s domestic subsidy on Voltara Batteries.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• A domestic subsidy is a payment by a government to domestic producers, reducing their costs. It is a form of protectionism because it gives domestic firms an advantage over imports.

Negative impact:
• A £150 subsidy per battery equals 7.5% of Voltara's £2,000 price, allowing local producers to cut prices by 8% and making Voltara less price competitive
• Voltara may lose sales volume or have to cut its own prices, reducing profit margins
• The subsidy may help local producers grow and gain economies of scale, becoming stronger long-term competitors, including in export markets.

Possible counterbalance:
• If Voltara's batteries are differentiated by quality, range or reliability, bus operators may still choose them
• Voltara could respond by setting up production in Country Z to qualify for the subsidy, or by focusing on other markets
• Subsidies may be temporary or challenged through the WTO.

Potential judgement:
• The subsidy has a significant negative impact because it gives rivals a cost advantage almost equal to their price cut. The extent of the impact depends on how differentiated Voltara's product is and how dependent it is on Country Z.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Rosewood Care Group runs 60 care homes in England. Around a third of its care workers were recruited from overseas. In 2025 the UK government closed the overseas recruitment route for care workers and raised the skill threshold for skilled worker visas. Rosewood already has 280 vacancies and relies on agency staff costing 40% more than employed staff.\n\nAssess the impact of reduced migration on Rosewood Care Group.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Migration — the movement of people within and between economies — increases the global labour force available to businesses. Governments can restrict migration through visa rules.

Negative impact:
• With around a third of care workers recruited from overseas, closing the route cuts off a major source of labour, making the 280 vacancies harder to fill
• More reliance on agency staff costing 40% more will increase costs and reduce profitability
• Staff shortages may reduce quality of care, affecting inspection ratings, occupancy and reputation.

Possible counterbalance:
• Existing overseas workers already in the UK may be able to stay and switch employers, so the effect is gradual
• Rosewood could raise pay and improve conditions to recruit more UK workers, although this raises costs
• Investment in technology and training may improve productivity and reduce the number of staff required.

Potential judgement:
• The impact is significant and negative because the care sector relies heavily on overseas workers and Rosewood already has 280 vacancies. The impact depends on how far Rosewood can increase domestic recruitment through better pay and conditions, which may require higher fees from councils and residents.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Jaguar Land Rover (JLR) is a UK car maker. The USA is one of its largest markets, accounting for around a quarter of its sales. In April 2025 the USA imposed a 25% tariff on imported cars on top of an existing 2.5% tariff, and JLR temporarily paused shipments to the USA. In May 2025 a UK–US agreement reduced the tariff to 10% for up to 100,000 UK cars a year. JLR does not have a factory in the USA.\n\nEvaluate the impact of US protectionism on Jaguar Land Rover.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Protectionism is the use of trade barriers such as tariffs, quotas and other barriers to protect domestic industries from foreign competition.

Significant negative impact:
• A 27.5% tariff would have made JLR's cars much more expensive in a market providing around a quarter of its sales, reducing demand and profit
• Pausing shipments disrupted sales and cash flow and created uncertainty for dealers and customers
• Even at 10%, the tariff raises prices or reduces JLR's margins, while US-built rivals face no tariff; the 100,000 quota limits future growth.

Limited impact:
• The UK–US deal reduced the tariff to 10% for up to 100,000 cars, roughly the number of cars the UK exported to the USA in 2024, limiting the long-term impact (although the quota is shared with other UK car makers)
• JLR sells premium brands (Range Rover, Defender), and wealthy customers may be less price sensitive (price inelastic demand)
• Rival European and Japanese car makers also face US tariffs, so JLR's relative competitiveness may be less affected.

Possible recommendations:
• US protectionism had a significant short-term impact on JLR, shown by the pause in shipments, but the UK–US deal and the premium nature of its products limited the long-term damage.
• In the longer term, JLR may need to consider US assembly or diversify to other markets to reduce its exposure to changes in US trade policy.

Examples of possible 'MOPS' judgements:
• Market – the USA is a major premium car market
• Objectives – protecting sales and margins in the US
• Product – premium SUVs with relatively price-inelastic demand
• Situation – no US factory, so all US sales face tariffs

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 4.2 Global Markets & Business Expansion ──────────── */
  '4.2': {
    name: 'Global Markets & Business Expansion',
    questions: [
      { q: 'Kestrel Machine Tools, a UK manufacturer, sells a machine to a German customer for £45,000. When the order was agreed the exchange rate was £1 = €1.20. By the time of the next order the pound had risen to £1 = €1.25.\n\nCalculate the change in the euro price of the machine to the German customer, assuming Kestrel keeps its sterling price unchanged. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS8 Use and interpret quantitative and non-quantitative information in order to make decisions; QS9 Interpret, apply and analyse information in written, graphical and numerical forms

Knowledge: 1 mark for
• understanding of an exchange rate, e.g. the value of one currency in terms of another

Application: up to 3 marks for
• Original euro price: £45,000 × 1.20 = €54,000 (1)
• New euro price: £45,000 × 1.25 = €56,250 (1)
• Change: 56,250 − 54,000 = an increase of €2,250 (1)

NB: If the only answer given is €2,250 (or an increase of €2,250) award 4 marks. If the answer given is 2,250 or 4.17% award 3 marks.` },

      { q: 'PowerLift, a UK maker of home gym equipment, has seen UK sales fall for two years. Market research shows that 80% of its target customers already own home gym equipment, and three new competitors have entered the UK market. PowerLift is now planning to sell in Canada and Australia.\n\nExplain one push factor that may have led PowerLift to trade internationally.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• identification of a push factor, e.g. saturated market or competition in the domestic market

Application: up to 2 marks for
• UK sales have fallen for two years
• 80% of target customers already own home gym equipment
• three new competitors in the UK

Analysis: 1 mark for
• with 80% of target customers already owning equipment, the UK market is saturated, so growth can only come from new markets; selling in Canada and Australia allows PowerLift to increase sales and use spare capacity` },

      { q: 'Snapgrip makes phone grips. Sales in the UK are in the decline stage of the product life cycle, but in several South-East Asian markets smartphone ownership is still growing rapidly. Snapgrip plans to launch the same product in Vietnam and Indonesia.\n\nExplain how selling in multiple markets could extend Snapgrip\'s product life cycle.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of the product life cycle, e.g. the stages of introduction, growth, maturity and decline
• or understanding of an extension strategy

Application: up to 2 marks for
• UK sales are in decline
• smartphone ownership growing rapidly in South-East Asia
• launch in Vietnam and Indonesia

Analysis: 1 mark for
• launching the product in markets where smartphone ownership is still growing puts it into the growth stage in those countries, so overall sales and revenue continue to rise even though UK sales decline, without the costs of developing a new product` },

      { q: 'Beacon Insurance plans to offshore its customer service centre from Leeds to Manila in the Philippines, reducing costs by around 45%. The Philippines has a large English-speaking workforce with experience in call centres. However, customer satisfaction scores for insurers using overseas call centres are often lower, and 300 jobs would be lost in Leeds.\n\nAssess the benefits to Beacon Insurance of offshoring its customer service.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Offshoring is the relocation of a business's activities to another country.

Benefits:
• A 45% cost reduction could significantly increase profit margins or allow lower premiums in a price-competitive market
• The Philippines has a large, experienced English-speaking workforce, so recruitment should be straightforward
• Time-zone differences could allow extended opening hours.

Possible counterbalance:
• Lower customer satisfaction could increase customer losses, reducing revenue
• Losing 300 jobs in Leeds may damage Beacon's reputation and staff morale
• There are risks of communication problems and quality control at a distance, and data protection requirements must be met.

Potential judgement:
• Offshoring benefits Beacon financially, but the benefit depends on whether cost savings outweigh the risk of lower customer satisfaction; Beacon could keep complex claims in the UK and offshore routine enquiries.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Brewster\'s Tea, a UK premium tea brand, is assessing Vietnam as a new market. Vietnam\'s economy has grown by around 5–7% a year for most of the last decade, and its middle class is expanding rapidly. It has a young population of around 100 million. However, tea is already widely grown and drunk in Vietnam, and the Vietnamese dong has been relatively weak against the pound.\n\nAssess the attractiveness of Vietnam as a market for Brewster\'s Tea.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Factors in assessing a country as a market include levels and growth of disposable income, ease of doing business, infrastructure, political stability and the exchange rate.

Attractive:
• Growth of around 5–7% a year and a rapidly growing middle class increase disposable income, creating demand for premium imported products
• A young population of around 100 million offers a large market for a premium lifestyle brand
• Vietnam is politically stable and has trade agreements with the UK (UK–Vietnam FTA), reducing trade barriers.

Possible counterbalance:
• Tea is already widely grown and drunk, so Brewster's faces strong, low-cost local competition
• A weak dong makes Brewster's tea more expensive in Vietnam, reducing price competitiveness
• Disposable income per person is still well below UK levels, so the premium market may be small.

Potential judgement:
• Vietnam is attractive because of rapid income growth, but Brewster's must position itself carefully as a premium British brand rather than competing on price with local tea. The weak dong is a significant barrier.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Hartwell Foods, a UK food manufacturer, wants to enter the Saudi Arabian market. It is considering a joint venture with Al-Noor Trading, a Saudi distributor with warehouses and relationships with major retailers. Each would own 50% of the joint venture. Hartwell\'s products would need to be certified halal.\n\nAssess the benefits to Hartwell Foods of entering Saudi Arabia through a joint venture.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• A joint venture is where two or more businesses create a separate business, sharing ownership, costs, risks and profits.

Benefits:
• Al-Noor's warehouses and relationships with major retailers give Hartwell immediate access to distribution
• Al-Noor's local knowledge helps with regulations, halal certification and consumer tastes, reducing the risk of mistakes
• Costs and risks are shared, so Hartwell invests less than if it entered alone.

Possible counterbalance:
• Profits are shared 50/50, reducing Hartwell's return
• Disagreements between partners over strategy or cultural differences may slow decisions
• Hartwell has less control over how its brand is marketed and distributed.

Potential judgement:
• A joint venture is beneficial for entering an unfamiliar market with specific cultural and regulatory requirements. Its success depends on choosing a reliable partner and agreeing clear objectives from the start.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'The UK engineering sector reports shortages of skilled workers, with many firms unable to fill vacancies for engineers and technicians. Castlegate Turbines, a UK manufacturer of small wind turbines, has 35 unfilled engineering posts and has delayed orders from customers in Europe. Its main rivals are in Germany and Denmark.\n\nAssess the impact of skill shortages on Castlegate Turbines\' international competitiveness.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• International competitiveness is the ability of a business to sell goods and services successfully in global markets. Skill shortages occur when a business cannot recruit workers with the skills it needs.

Negative impact:
• 35 unfilled posts limit capacity, so Castlegate has delayed orders, which could lead European customers to switch to German or Danish rivals
• Competition for scarce engineers raises wages, increasing costs and reducing price competitiveness
• A lack of engineers may slow innovation and product development, weakening differentiation.

Possible counterbalance:
• Rivals in Germany and Denmark may face similar shortages, reducing the relative disadvantage
• Castlegate could invest in apprenticeships, retraining or automation to reduce its need for scarce skills
• Customers may value quality and reliability more than speed of delivery.

Potential judgement:
• Skill shortages significantly reduce Castlegate's international competitiveness because they directly limit output and delay orders. The long-term impact depends on how quickly it can train or recruit staff and whether rivals face similar problems.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Hollowell Pottery makes hand-decorated tableware in Stoke-on-Trent. Mass-produced tableware imported from China sells for about a third of Hollowell\'s prices. Hollowell has considered moving some production to cheaper locations, but its sales in the USA and Japan have grown by 15% a year, and its products are marketed as "Made in England".\n\nAssess whether Hollowell Pottery should compete on cost or through differentiation in global markets.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Competitive advantage in global markets can be achieved through cost competitiveness (lower costs and prices) or differentiation (unique features that allow premium prices).

Arguments for differentiation:
• "Made in England" and hand decoration give Hollowell a unique selling point that Chinese mass producers cannot copy
• Sales growth of 15% a year in the USA and Japan shows overseas customers value the heritage and quality
• Customers of premium tableware are likely to be less price sensitive, allowing higher margins.

Arguments for cost competitiveness:
• Imports sell for about a third of Hollowell's prices, so it may lose price-sensitive customers
• Moving some production to cheaper locations could reduce costs for simpler product lines
• Higher UK energy and labour costs may squeeze margins if price increases are not accepted.

Potential judgement:
• Hollowell should compete through differentiation because it cannot match Chinese costs, and its "Made in England" heritage is the source of its overseas growth. Moving production abroad would undermine the brand.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Stride Active is a UK sportswear brand that currently sources its clothing from China. Rising costs have led it to consider two alternative production locations:\n• Bangladesh: monthly garment wage around £90; sea freight to the UK around 30 days; zero UK tariffs on most goods under the UK\'s Developing Countries Trading Scheme; a history of factory safety concerns and political unrest in 2024\n• Morocco: monthly garment wage around £280; road and ferry delivery to the UK in 3–5 days; tariff-free trade with the UK under a trade agreement; a growing textiles sector\nStride Active\'s customers expect new designs every few weeks and increasingly care about ethical sourcing.\n\nEvaluate which country Stride Active should choose as its production location.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Factors in assessing a country as a production location include costs of production, skills and availability of labour, infrastructure, location in a trade bloc, government incentives, ease of doing business, political stability, natural resources and likely return on investment.

Arguments for Bangladesh:
• Monthly wages of around £90 are less than a third of Morocco's £280, giving a major cost advantage in labour-intensive garment production
• Bangladesh is one of the world's largest garment exporters, with experienced factories and a large, skilled workforce
• Zero tariffs under the Developing Countries Trading Scheme mean imports are not penalised.

Arguments for Morocco:
• Delivery in 3–5 days rather than about 30 days allows Stride Active to respond quickly to new designs every few weeks, reducing unsold stock
• Factory safety concerns and political unrest in 2024 in Bangladesh create reputational and supply-chain risks for a brand whose customers care about ethics
• Proximity makes it easier to audit factories and manage quality; lower transport distances can reduce emissions.

Possible recommendations:
• Stride Active should choose Morocco because speed to market and ethical sourcing are central to its customers' expectations; higher wages may be offset by lower stock levels and reduced markdowns.
• Alternatively, Stride Active could use Bangladesh for basic, high-volume lines and Morocco for fast-changing fashion lines, spreading risk.

Examples of possible 'MOPS' judgements:
• Market – sportswear with frequent new designs
• Objectives – cost control v speed and ethical reputation
• Product – fashion-led items with short life cycles
• Situation – currently sourcing from China with rising costs

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },

      { q: 'Ashoka Beverages, an Indian drinks company, is considering acquiring Orchard Hill, a British cider brand with a 150-year history, for £85m. Orchard Hill has strong brand recognition in the UK and sells in 25 countries, but its profits have fallen for three years. Ashoka wants to expand into Europe and gain access to Orchard Hill\'s recipes and orchards.\n\nTo what extent is acquiring a well-known brand name the main reason for Ashoka Beverages to take over Orchard Hill?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Reasons for global mergers and joint ventures include spreading risk, entering new markets/trade blocs, acquiring national/international brand names and patents, securing resources/supplies, and maintaining/increasing global competitiveness.

Brand name is the main reason:
• A 150-year history and strong UK recognition would take Ashoka many years and considerable marketing spending to build
• An established British brand may give credibility with retailers and consumers in the UK and 25 other countries
• A heritage brand may support premium pricing.

Other reasons:
• Entering new markets: the takeover gives Ashoka immediate access to the UK and Europe, which fits its expansion objective
• Securing resources: Orchard Hill's orchards and recipes secure supplies of apples and know-how
• Spreading risk across countries and increasing global competitiveness against large drinks multinationals.

Possible recommendations:
• The brand is an important reason, but market entry into Europe is arguably the main reason, as the brand is a means of achieving it.
• Falling profits suggest the brand alone may not justify £85m; Ashoka must believe its resources and distribution can improve Orchard Hill's performance.

Examples of possible 'MOPS' judgements:
• Market – competitive UK and European drinks market
• Objectives – Ashoka's aim to expand into Europe
• Product – heritage cider with recipes and orchards
• Situation – Orchard Hill's falling profits

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 4.3 Global Marketing ─────────────────────────────── */
  '4.3': {
    name: 'Global Marketing',
    questions: [
      { q: 'Kinloch Knitwear sells premium jumpers worldwide. In 2024 its total revenue was £560m, of which £118m came from Asia. In 2025 its total revenue was £640m, of which £176m came from Asia.\n\nCalculate the change in the percentage of Kinloch Knitwear\'s revenue that came from Asia between 2024 and 2025. Give your answer to two decimal places. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS2 Calculate, use and understand percentages and percentage changes

Knowledge: 1 mark for
• Percentage of revenue = revenue from region / total revenue × 100

Application: up to 3 marks for
• 2024: 118/560 × 100 = 21.07% (1)
• 2025: 176/640 × 100 = 27.50% (1)
• Change: 27.50 − 21.07 = an increase of 6.43 percentage points (1)

NB: If the only answer given is 6.43 percentage points (or 6.43%) award 4 marks. If the answer given is 6.43 or 6.4 award 3 marks.` },

      { q: 'McDonald\'s operates in over 100 countries using a globally recognised brand. In India, it does not sell beef or pork products and offers vegetarian items such as the McAloo Tikki burger, made with potato and spices.\n\nExplain how McDonald\'s uses glocalisation in India.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of glocalisation, e.g. adapting a global product or marketing mix to suit local tastes, culture or laws while keeping a global brand

Application: up to 2 marks for
• no beef or pork in India
• McAloo Tikki / vegetarian items
• global brand in over 100 countries

Analysis: 1 mark for
• by adapting its menu to reflect religious and dietary preferences in India, McDonald's makes its products acceptable to a much larger share of the population, increasing sales while keeping the benefits of its global brand and systems` },

      { q: 'In 2009 HSBC, a global bank, dropped its long-running slogan "Assume Nothing" after it was translated in several countries as "Do Nothing". HSBC reportedly spent around $10m on a rebrand to "The world\'s private bank".\n\nExplain one problem that inaccurate translations can cause for a global business such as HSBC.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• identification of a problem, e.g. unintended meanings, damage to brand image, cost of rebranding

Application: up to 2 marks for
• "Assume Nothing" translated as "Do Nothing"
• around $10m spent on rebranding
• HSBC is a global bank

Analysis: 1 mark for
• a slogan suggesting the bank will "do nothing" gives customers the opposite of the intended message, damaging trust in a financial services brand, so HSBC had to spend around $10m on rebranding, which reduced profit` },

      { q: 'Thornfield Gin, a UK premium gin distillery, sells the same product, bottle design and advertising in all 20 of its export markets. Its managers believe that its "Distilled in the Cotswolds" heritage is its main selling point. Sales in Europe have grown strongly, but sales in Japan and Brazil are below target.\n\nAssess the suitability of a domestic/ethnocentric marketing approach for Thornfield Gin.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• An ethnocentric (domestic) approach uses the same marketing mix in overseas markets as in the home market, assuming what works at home will work abroad.

Suitable:
• Standardising product, bottle and advertising reduces costs, which matters for a small distillery operating in 20 markets
• Its "Distilled in the Cotswolds" heritage is the main selling point, so keeping a consistent British image strengthens the brand
• Strong growth in Europe shows the approach can work where tastes are similar to the UK.

Possible counterbalance:
• Sales below target in Japan and Brazil suggest the approach may not suit all markets, e.g. different drinking cultures or price expectations
• Advertising may not reflect local culture, reducing its effectiveness
• Competitors that adapt their products and promotion may win market share.

Potential judgement:
• An ethnocentric approach is suitable where heritage is the key selling point and tastes are similar, as in Europe. In Japan and Brazil, Thornfield may need to adapt promotion or distribution while keeping the core product.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Carrick Pens, a small UK business, makes handmade fountain pens priced between £300 and £1,200. It sells mainly online to collectors in 40 countries and attends international pen shows in the USA, Germany and Japan. It has 4,000 regular customers, many of whom are members of online collectors\' forums.\n\nAssess the benefits to Carrick Pens of targeting a global niche market.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• A global niche market is a small, specialised segment of a larger market that exists across many countries, where customers share similar interests and values.

Benefits:
• Collectors in 40 countries share an interest in handmade pens, so Carrick can use a largely standardised product and marketing mix
• Customers are willing to pay £300–£1,200, allowing high profit margins
• Online forums and pen shows allow targeted, low-cost promotion to a loyal customer base.

Possible counterbalance:
• The market is small — 4,000 regular customers — so growth may be limited
• Dependence on a niche is risky if tastes change or a rival enters
• Selling in 40 countries involves shipping, customs and exchange-rate risks.

Potential judgement:
• Targeting a global niche benefits Carrick because it allows premium prices and efficient, targeted marketing. The main risk is limited scale, so it must maintain its reputation for quality and craftsmanship.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'Brightwave Headphones, a UK company, sells its wireless headphones for £149 in the UK. It is entering India, where rival brands sell similar products for the equivalent of £40–£80. Brightwave is considering launching a simpler model at a lower price for India, and selling through popular online marketplaces rather than electronics stores.\n\nAssess the importance of adapting the marketing mix for Brightwave Headphones in India.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• The marketing mix (4Ps — product, price, promotion, place) may be standardised or adapted to suit global markets.

Importance of adapting:
• Price: at £149 Brightwave would be far more expensive than rivals at £40–£80, so a lower-priced model may be essential for a price-sensitive market
• Product: a simpler model allows a lower price while protecting Brightwave's premium model and brand in the UK
• Place: online marketplaces are widely used in India and give wide distribution at lower cost than electronics stores.

Possible counterbalance:
• A cheaper model may damage Brightwave's premium brand image if customers associate it with lower quality
• Adapting the product increases costs of design, production and stock management
• There may be a profitable segment of higher-income Indian consumers willing to pay for a premium international brand.

Potential judgement:
• Adapting the marketing mix is important because the price gap with local rivals is very large. However, Brightwave should consider whether to target the premium segment with its existing product, rather than competing in the mass market where margins are lower.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Hebden Tea Company sells specialist teas in UK supermarkets. The UK tea market is declining as consumers switch to coffee. Hebden plans to enter the USA, where interest in specialist and wellness teas is growing. It would need to spend £3m on marketing and on building relationships with US retailers.\n\nAssess the risks of market development for Hebden Tea Company.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Market development (Ansoff's Matrix) involves selling existing products in new markets, such as new countries. It carries more risk than market penetration.

Risks:
• Hebden lacks knowledge of US consumers, retailers and competitors, so its products and promotion may not suit the market
• The £3m marketing spend may not be recovered if US sales are low
• Exchange-rate movements and US tariffs on UK goods could reduce price competitiveness and profits.

Possible counterbalance:
• Hebden sells existing products, so there is less risk than diversification
• Growing US interest in specialist and wellness teas suggests demand exists
• Staying only in a declining UK market is itself risky, so market development spreads risk.

Potential judgement:
• Market development carries significant risks for Hebden, especially the £3m marketing investment in an unfamiliar market. However, the declining UK market means the risk of not expanding may be greater; Hebden could reduce risk through market research and a regional launch.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Lyra London is a UK women\'s fashion brand that plans to open stores in the United Arab Emirates and Saudi Arabia. Its UK advertising features models in short dresses and uses humour and slang. Research shows that demand for "modest fashion" is growing, and some Western brands have faced criticism for promotions seen as culturally insensitive in the region.\n\nAssess the importance of cultural and social factors to Lyra London\'s entry into the Middle East.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Cultural and social factors for global businesses include cultural differences, different tastes, language, unintended meanings, inappropriate/inaccurate translations and inappropriate branding and promotion.

Importance:
• UK advertising featuring short dresses may be considered inappropriate, risking criticism and damage to the brand
• Growing demand for modest fashion means Lyra needs to adapt its product range to local tastes to achieve sales
• Humour and slang may not translate and could create unintended meanings.

Possible counterbalance:
• The UAE in particular has a large international population and many consumers familiar with Western fashion
• Economic factors such as high disposable incomes and store location may be as important to success
• Lyra's British identity may be part of its appeal, so it should not over-adapt.

Potential judgement:
• Cultural and social factors are very important because inappropriate promotion could quickly damage Lyra's reputation. The best approach is to adapt promotion and parts of the range while keeping the brand's British identity.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Solenne Beauty, a UK cosmetics company, sells in 30 countries. It has a global brand and core product range but allows regional teams to adapt shades, fragrances and advertising for local skin tones and preferences. New products developed in one region, such as a lightweight sunscreen from its Asian team, are often launched worldwide.\n\nAssess the benefits to Solenne Beauty of a geocentric marketing approach.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• A geocentric (mixed) approach combines a global strategy with local adaptation where needed — "think global, act local" — drawing ideas from all markets.

Benefits:
• Adapting shades for local skin tones increases the relevance of products, raising sales in diverse markets
• A global brand and core range give economies of scale in production and marketing
• Ideas from any region (e.g. the lightweight sunscreen) can be launched globally, increasing innovation.

Drawbacks:
• Adapting products for 30 countries raises costs and complexity in production and stock management
• Regional teams may make decisions that dilute the global brand image
• A polycentric (fully local) approach might achieve better results in very different markets, while an ethnocentric approach would be cheaper.

Potential judgement:
• A geocentric approach benefits Solenne because cosmetics customers have different needs across markets, but the benefit depends on maintaining strong central control of the brand to avoid inconsistency.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Crunchwise is a UK plant-based snack brand with revenue of £65m. It plans to expand into the USA and Japan. Some directors want a global strategy, with the same products, packaging and advertising worldwide, to build a consistent brand and save costs. Others want glocalisation, with new flavours (e.g. wasabi in Japan), smaller pack sizes and local celebrities in advertising. Research shows Japanese consumers prefer smaller portions and US consumers respond strongly to "high protein" claims.\n\nEvaluate whether Crunchwise should use a global marketing strategy or glocalisation.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• A global marketing strategy uses a standardised marketing mix across all markets; glocalisation adapts the marketing mix to local tastes and cultures while maintaining a global brand.

Arguments for a global strategy:
• Standardising products, packaging and advertising gives economies of scale, important for a £65m business entering two large markets
• A consistent brand image may be valued by consumers who see Crunchwise as a premium UK brand
• Global strategies are simpler to manage and quicker to implement.

Arguments for glocalisation:
• Research shows Japanese consumers prefer smaller portions and US consumers respond to "high protein" claims — a standard product may not meet these preferences
• Local flavours such as wasabi and local celebrities could make the brand more relevant and increase sales
• Competitors in these markets are likely to adapt their products, so a standardised approach may leave Crunchwise at a disadvantage.

Possible recommendations:
• Crunchwise should use glocalisation because the research shows clear differences in preferences; adapting pack size, flavours and claims is relatively low-cost compared with the risk of failure.
• However, it should keep core brand elements — logo, plant-based positioning — consistent to benefit from a global brand, adapting only where research shows it matters.

Examples of possible 'MOPS' judgements:
• Market – two very different markets with different preferences
• Objectives – successful international growth
• Product – snacks, where flavour and portion size preferences vary
• Situation – a medium-sized business with limited resources

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },

  /* ── 4.4 Global Industries & Companies (MNCs) ─────────── */
  '4.4': {
    name: 'Global Industries & Companies (MNCs)',
    questions: [
      { q: 'Techvale, a multinational software company, earns £40m profit in the UK before paying a royalty for use of its brand to its subsidiary in Country X. UK corporation tax is 25% and the tax rate in Country X is 10%. Techvale sets the royalty at £30m.\n\nCalculate how much tax Techvale saves by using this transfer price. You are advised to show your workings.', marks: 4, command: 'Calculate',
        markScheme: `Knowledge 1, Application 3
Quantitative skill assessed: QS2 Calculate, use and understand percentages and percentage changes

Knowledge: 1 mark for
• understanding of transfer pricing, e.g. setting the prices of transactions between subsidiaries of the same MNC to shift profit to lower-tax countries
• or tax = profit × tax rate

Application: up to 3 marks for
• Tax without the royalty: £40m × 25% = £10m (1)
• Tax with the royalty: UK (40 − 30) × 25% = £2.5m; Country X £30m × 10% = £3m (1)
• Tax saved: 10 − (2.5 + 3) = £4.5m (1)

NB: If the only answer given is £4.5m award 4 marks. If the answer given is 4.5 award 3 marks.` },

      { q: 'Nissan, the Japanese car maker, opened its factory in Sunderland in 1986. It now employs around 6,000 people and has built models such as the Qashqai and the Leaf electric car. Many UK component suppliers have adopted Nissan\'s production methods, such as just-in-time and kaizen.\n\nExplain one way in which the UK has benefited from technology and skills transfer from Nissan.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of technology and skills transfer, e.g. MNCs bringing new production methods, technology and skills to the host country

Application: up to 2 marks for
• Sunderland factory since 1986 / around 6,000 employees
• UK suppliers adopted just-in-time and kaizen
• production of the Leaf electric car

Analysis: 1 mark for
• UK suppliers that adopted Nissan's lean methods have become more efficient and higher quality, allowing them to win contracts with other car makers, increasing productivity and competitiveness across the UK automotive industry` },

      { q: 'Kyoto Electronics, a Japanese MNC, opened a factory in South Wales in 2024 that assembles industrial robots. It exports 80% of its output to customers in Europe and imports most of its components from Japan.\n\nExplain how Kyoto Electronics\' factory could affect the UK\'s balance of payments.', marks: 4, command: 'Explain',
        markScheme: `Knowledge 1, Application 2, Analysis 1

Knowledge: 1 mark for
• understanding of the balance of payments, e.g. a record of all financial transactions between a country and the rest of the world, including exports and imports of goods and services

Application: up to 2 marks for
• exports 80% of output to Europe
• imports most components from Japan
• factory in South Wales opened 2024

Analysis: 1 mark for
• exporting 80% of output increases UK exports, improving the current account, although imports of components from Japan and the repatriation of profits to Japan will partly offset this, so the net effect depends on the value added in the UK` },

      { q: 'Veloce Fashion is a global clothing MNC. In 2025 a video on TikTok showing waste clothing from Veloce dumped in Ghana was viewed over 20 million times. Within a week Veloce announced a new take-back and recycling scheme. Its sales among 16–24-year-olds fell by 6% in the following quarter.\n\nAssess the effectiveness of social media in controlling the behaviour of MNCs such as Veloce Fashion.', marks: 8, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 2, Evaluation 2

Indicative content:
• Social media is a factor in controlling MNCs because it allows information about unethical behaviour to spread quickly to consumers and other stakeholders.

Effective:
• A video viewed over 20 million times created rapid reputational pressure, leading Veloce to announce a recycling scheme within a week
• Sales among 16–24-year-olds fell by 6%, showing a financial incentive to change behaviour
• Social media allows consumers worldwide to coordinate campaigns at very low cost.

Possible counterbalance:
• A take-back scheme may be a public relations response rather than a real change in business practices
• Social media attention is short-lived; once interest fades, pressure may reduce
• Social media can spread misinformation, and many consumers may continue to buy on price.

Potential judgement:
• Social media can be effective in forcing a quick response, as shown by Veloce. However, lasting change is more likely when social media pressure is combined with legal control and pressure-group campaigns.

Levels (8 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–5): Accurate knowledge and understanding; reasoning shows causes and/or effects but some links are asserted or incomplete; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, though the significance of competing arguments is unlikely to be shown.
L3 (6–8): Accurate, thorough knowledge; logical chains of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context and awareness of competing arguments/factors, with a supported judgement.` },

      { q: 'ShopRite Global, a large supermarket MNC, opened a hypermarket in a small town in Kenya in 2024. It employs 350 local people and sells a wide range of products at lower prices than local shops. Some local farmers now supply ShopRite, but several small independent grocers in the town have closed.\n\nAssess the impact of ShopRite Global on the local economy.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• The impact of MNCs on the local economy includes effects on local labour, wages, working conditions and job creation, local businesses, and the local community and environment.

Positive impact:
• 350 jobs are created, increasing incomes and spending in the town (multiplier effect)
• Local consumers benefit from lower prices and a wider range of products
• Local farmers gain a large, reliable customer, which may help them grow and improve quality.

Negative impact:
• Independent grocers have closed, so some jobs are lost and profits may leave the local economy
• ShopRite may use its buying power to pay low prices to farmers
• More traffic and packaging waste may affect the local community and environment.

Potential judgement:
• The overall impact is likely to be positive for consumers and employees, but negative for small local businesses. The net effect depends on how many local jobs were lost and on ShopRite's treatment of local suppliers.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Nexon Devices, a global smartphone MNC, sources cobalt for its batteries through several layers of suppliers. Human rights groups have reported child labour and unsafe conditions in some cobalt mines in the Democratic Republic of Congo. Nexon has joined an industry initiative to trace cobalt to its source, but says it cannot guarantee every supplier meets its standards.\n\nAssess the importance of supply chain considerations for Nexon Devices.', marks: 10, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 3, Evaluation 3

Indicative content:
• Supply chain ethical considerations for MNCs include the exploitation of labour and child labour by suppliers.

Importance:
• Reports of child labour linked to cobalt could damage Nexon's reputation, leading to boycotts and lower sales
• Investors applying ESG criteria may sell shares or refuse to invest
• Laws requiring supply-chain due diligence (e.g. modern slavery reporting) increase legal and regulatory risk.

Possible counterbalance:
• Many consumers buy smartphones on features and price, so the impact on sales may be limited
• The supply chain has several layers, making full control very difficult and costly
• Industry-wide initiatives spread the responsibility, and rivals face the same issue.

Potential judgement:
• Supply chain considerations are important because the ethical issue is serious and reputational risk is high. However, Nexon's ability to control deep supply chains is limited, so industry-wide action is likely to be more effective than acting alone.

Levels (10 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–6): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (7–10): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'PetroNorth is an oil and gas MNC operating in 30 countries. Pressure groups have campaigned against its plans to drill in the Arctic, organising protests at its headquarters, legal challenges and shareholder resolutions at its annual general meeting. In 2025, 18% of shareholders voted for a resolution asking PetroNorth to set stricter emissions targets. PetroNorth\'s profits reached record levels in 2022–23.\n\nAssess the effectiveness of pressure groups in controlling MNCs such as PetroNorth.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Pressure groups are organisations that seek to influence the decisions of businesses and governments; they are one factor in controlling MNCs, alongside political influence, legal control and social media.

Effective:
• Protests and media coverage can damage PetroNorth's reputation, affecting recruitment and consumer attitudes
• Legal challenges can delay or stop projects, increasing costs and uncertainty
• Shareholder resolutions — supported by 18% of shareholders — put pressure on the board and signal investor concern.

Possible counterbalance:
• An 18% vote means the resolution failed; most shareholders prioritise returns, especially when profits are high
• PetroNorth operates in 30 countries and may move activities to countries with weaker regulation
• Governments and legal controls may have more power than pressure groups, and demand for oil and gas remains high.

Potential judgement:
• Pressure groups have some influence on PetroNorth, especially through legal challenges and shareholder pressure, but they are unlikely to control its behaviour alone while profits remain high. They are most effective when they influence governments to introduce legal controls.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Arlo & Finch is a global fashion MNC that labels some of its clothing as "eco" and "sustainable" without clear evidence. In 2024 the UK Competition and Markets Authority (CMA) secured commitments from several fashion retailers to make their environmental claims accurate. Since April 2025 the CMA has been able to fine businesses up to 10% of their global turnover for breaking consumer protection law.\n\nAssess the impact on Arlo & Finch of stricter controls on misleading product labelling.', marks: 12, command: 'Assess',
        markScheme: `Knowledge 2, Application 2, Analysis 4, Evaluation 4

Indicative content:
• Misleading product labelling is an ethical marketing consideration for MNCs, and legal control is one way to control MNC behaviour.

Significant impact:
• Fines of up to 10% of global turnover create a strong financial incentive for Arlo & Finch to ensure claims are accurate
• Arlo & Finch may need to spend on supply-chain audits and certification to support "sustainable" claims, increasing costs
• Removing "eco" labels may reduce sales among environmentally conscious consumers if the products cannot be justified as sustainable.

Limited impact:
• Arlo & Finch can avoid fines by changing its labels and marketing, which is relatively low-cost
• Controls apply to all retailers, so Arlo & Finch's competitive position may be unchanged
• Enforcement may be limited and focused on the largest cases.

Potential judgement:
• Stricter controls are likely to have a significant impact because the potential fines are very large relative to profit. The impact depends on whether Arlo & Finch genuinely improves its sustainability or simply changes its labelling.

Levels (12 marks):
L1 (1–2): Knowledge is fragmentary and recall-based; little or no relevant use of the business context; points are generic assertions.
L2 (3–4): Some knowledge and understanding, applied to the business; reasoning is attempted but chains are asserted or left incomplete; any assessment is generic or superficial.
L3 (5–8): Accurate, thorough knowledge; developed chains of reasoning that show causes and/or effects; an assessment is attempted using quantitative and/or qualitative evidence; the context is used throughout, but the relative weight of competing arguments is unlikely to be shown.
L4 (9–12): Accurate, thorough knowledge; a coherent, logical chain of reasoning showing causes and/or effects; a balanced, wide-ranging and well-contextualised assessment using quantitative and/or qualitative evidence; relevant, effective use of the context throughout, weighing competing arguments/factors to reach a supported judgement.` },

      { q: 'Zhenfeng Motors, a Chinese electric vehicle MNC, is building a £1.2bn factory in the North East of England. It expects to create 3,000 jobs and receive government support of £150m. Zhenfeng will import most battery cells from China at first. Some UK car makers are concerned about competition from lower-priced Chinese vehicles, and profits from the factory will be returned to Zhenfeng\'s headquarters in China.\n\nEvaluate whether the benefits of Zhenfeng Motors\' investment will outweigh the costs for the UK economy.', marks: 20, command: 'Evaluate',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• The impact of MNCs on the national economy includes FDI flows, the balance of payments, technology and skills transfer, consumers, business culture, and tax revenues and transfer pricing.

Benefits:
• FDI of £1.2bn and 3,000 jobs in the North East increases incomes and spending, with multiplier effects for local suppliers
• Technology and skills transfer in electric vehicle production could help the UK develop capabilities in a growing industry
• UK consumers may benefit from more choice and lower-priced electric vehicles; exports from the factory would improve the balance of payments.

Costs:
• Government support of £150m has an opportunity cost — £50,000 per job created
• Importing battery cells from China and repatriating profits will offset balance-of-payments benefits
• Lower-priced competition could reduce the market share and jobs of existing UK car makers; transfer pricing could reduce UK tax revenues.

Possible recommendations:
• The benefits are likely to outweigh the costs because 3,000 jobs in a region with lower incomes and the development of EV skills bring long-term benefits.
• However, the net benefit depends on whether Zhenfeng increases the use of UK suppliers over time and whether profits are taxed fairly in the UK.

Examples of possible 'MOPS' judgements:
• Market – the growing EV market
• Objectives – UK government aims to attract investment and jobs
• Product – lower-priced electric vehicles
• Situation – the North East's need for jobs; reliance on imported battery cells

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },

      { q: 'Global technology MNCs such as search engines, social media platforms and online retailers earn billions from UK users but have often paid relatively little UK corporation tax, partly by recording profits in low-tax countries. In 2021 over 130 countries agreed to a global minimum corporate tax rate of 15% for large MNCs, which the UK introduced from 2024. Meanwhile, pressure groups and social media campaigns continue to criticise MNCs\' tax practices.\n\nTo what extent can governments control the behaviour of multinational corporations?', marks: 20, command: 'To what extent',
        markScheme: `Knowledge 4, Application 4, Analysis 6, Evaluation 6

Indicative content:
• Factors to consider in controlling MNCs include political influence, legal control, pressure groups and social media.

Governments can control MNCs:
• Legal control: the 15% global minimum tax, agreed by over 130 countries, reduces the incentive to shift profits to low-tax countries
• Governments control access to large markets — MNCs need to sell to UK users, so they must follow UK laws on tax, competition and data
• Coordinated international action reduces the ability of MNCs to play countries off against each other.

Governments have limited control:
• MNCs have significant political influence through lobbying and the jobs and investment they bring, so governments may be reluctant to impose strict controls
• MNCs operate across many countries and can use complex structures, such as transfer pricing, to reduce the impact of national laws
• Pressure groups and social media may be more effective at changing behaviour quickly through reputational pressure.

Possible recommendations:
• Governments can control MNCs to a significant extent when they act together, as shown by the global minimum tax.
• However, control is limited when countries compete for investment, so governments are most effective when legal controls are combined with pressure from consumers, pressure groups and social media.

Examples of possible 'MOPS' judgements:
• Market – global digital markets dominated by a few MNCs
• Objectives – governments seek tax revenue; MNCs seek to minimise costs
• Product – digital services that are easy to deliver across borders
• Situation – international agreement on a 15% minimum tax

Levels (20 marks):
L1 (1–4): Fragmentary knowledge; little or no relevant use of the business context; any argument is generic and does not link causes to consequences.
L2 (5–8): Some knowledge, applied to the business; arguments and reasoning are present but links between causes and consequences are incomplete; the question is addressed in part; any comparison or judgement does not show awareness of the key features of the business or its situation.
L3 (9–14): Accurate, thorough knowledge, with the context used throughout; developed chains of reasoning in which causes and consequences are complete and arguments are developed; quantitative and/or qualitative evidence is introduced to support judgements, with partial awareness of the validity/significance of competing arguments, possibly reaching a conclusion.
L4 (15–20): Accurate, thorough knowledge, with relevant and effective use of the context throughout; well-developed, logical and coherent reasoning showing a range of causes and/or effects, with arguments fully developed; quantitative and/or qualitative evidence used well to support judgements; full awareness of the validity and significance of competing arguments/factors, leading to balanced comparisons and an effective conclusion that proposes a solution and/or recommendation(s).` },
    ]
  },
};
