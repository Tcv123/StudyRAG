import re, os

BASE = '/Users/tharun/StudyRAG'

def get_svg(path, idx, w=320, h=260):
    try:
        content = open(path).read()
        svgs = re.findall(r'(<svg[\s\S]*?</svg>)', content)
        if idx < len(svgs):
            svg = svgs[idx]
            svg = re.sub(r'width="[^"]*"', f'width="{w}"', svg, count=1)
            svg = re.sub(r'height="[^"]*"', f'height="{h}"', svg, count=1)
            return svg
        return ''
    except:
        return ''

neg_ext    = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.5_market_failure_and_government_intervention.html', 0)
pos_ext    = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.5_market_failure_and_government_intervention.html', 1)
sd_equil   = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.2_price_determination.html', 3)
sd_shift   = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.2_price_determination.html', 1)
cost_sr    = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.3_production_costs_and_revenue.html', 0)
profit_max = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.3_production_costs_and_revenue.html', 3)
monopoly   = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.4_competitive_and_concentrated_markets.html', 2)
perf_lr    = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.4_competitive_and_concentrated_markets.html', 1)
kinked     = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.4_competitive_and_concentrated_markets.html', 3)
mono_comp  = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.4_competitive_and_concentrated_markets.html', 4)
ad_as      = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.2.2_how_the_macroeconomy_works.html', 2)
demand_pull= get_svg(f'{BASE}/notes-economics-aqa-alevel/3.2.3_economic_performance.html', 1)
cost_push  = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.2.3_economic_performance.html', 2)
phillips   = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.2.3_economic_performance.html', 3)
fiscal_ad  = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.2.5_fiscal_and_supply_side_policies.html', 0)
supply_side= get_svg(f'{BASE}/notes-economics-aqa-alevel/3.2.5_fiscal_and_supply_side_policies.html', 2)
tariff     = get_svg(f'{BASE}/notes-economics-edexcel-a-alevel/4.1_international_economics_and_trade.html', 1)
exchange   = get_svg(f'{BASE}/notes-economics-edexcel-a-alevel/4.1_international_economics_and_trade.html', 2)
lorenz     = get_svg(f'{BASE}/notes-economics-edexcel-a-alevel/4.2_poverty_inequality_and_development.html', 0)
lrac       = get_svg(f'{BASE}/notes-economics-aqa-alevel/3.1.3_production_costs_and_revenue.html', 1)
neg_ext2   = get_svg(f'{BASE}/notes-economics-edexcel-a-alevel/1.2_market_failure_and_government_intervention.html', 0)
pos_ext2   = get_svg(f'{BASE}/notes-economics-edexcel-a-alevel/1.2_market_failure_and_government_intervention.html', 3)

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

def entry(paper, code, text):
    return f'  "{paper}::{code}": "{esc(text)}",\n'

def diag(svg, caption, explanation):
    return f'<div style="margin:8px 0">{svg}<div style="font-size:0.82em;color:#555;margin-top:4px">{caption}</div></div>{explanation}'

lines = []
lines.append('// Economics Model Answers — all exam boards\n')
lines.append('// Key format: "paperId::partCode"\n')
lines.append('window.ECON_MODEL_ANSWERS = {\n\n')

# ─────────────────────────────────────────────────────────────────────────────
# AQA 7136 — June 2023 — Paper 1 (Markets and Market Failure)
# ─────────────────────────────────────────────────────────────────────────────
p = 'econ-aqa-7136-2023-p1'
lines.append(f'  // ── {p} ──\n')

lines.append(entry(p,'01',
'Index = (Total car sales 2021 / Base year sales) × 100 = (1,647,181 / 1,250,000) × 100 = <strong>131.77</strong><br>Working: 1,647,181 ÷ 1,250,000 = 1.3177; × 100 = 131.77 (to 2 d.p.)'))

lines.append(entry(p,'02',
'Using Table 1: Battery Electric sales more than doubled (108,205 → 190,727, +76%) and Hybrid Electric rose 56% (357,126 → 558,578), while petrol fell 16% and diesel fell 48%. Total car sales barely changed (+1%). This shows growing EV adoption is the main demand driver.<br>Using Figure 1: UK demand for lithium-ion batteries is forecast to rise steeply to 2030 — matching the trajectory of rising EV and hybrid sales shown in Table 1. Since hybrids (*use lithium-ion batteries) are the fastest-growing segment by volume, car market changes directly explain rising battery demand.'))

lines.append(entry(p,'03',
diag(neg_ext,
'Negative externality in production: MPC lies below MSC. The market produces Q<sub>m</sub> where MPC=MPB, but the social optimum is Q<sub>opt</sub> where MSC=MSB. The shaded welfare loss triangle represents the deadweight loss from overproduction.',
'<br><strong>Diagram explanation:</strong> Draw Price/Cost on the y-axis, Quantity on the x-axis. MPC (supply) lies below MSC because battery mining/manufacturing imposes external costs (pollution, CO₂ from shipping cobalt 20,000+ miles, energy-intensive processing). MPB=MSB is the demand curve.<br>Market equilibrium: where MPC=MPB → output Q<sub>m</sub> at price P<sub>m</sub>. Social optimum: where MSC=MSB → lower output Q<sub>opt</sub> at higher price P<sub>opt</sub>.<br>Market failure: the market <em>overproduces</em> batteries by Q<sub>m</sub>−Q<sub>opt</sub>. The shaded welfare loss triangle shows the net social cost of this overproduction — external costs (e.g. environmental damage from cobalt extraction, carbon emissions) not reflected in the market price.')))

lines.append(entry(p,'04',
'<strong>Carbon taxes on all vehicles</strong> internalise the negative externality of emissions, raising private cost towards social cost. Higher fuel/carbon costs incentivise consumers to switch to public transport, cycling or walking. However, taxes are regressive — low-income households spend a higher share of income on fuel.<br><br><strong>Subsidies for public transport and EVs</strong> lower the relative price of green alternatives. Government already offers generous EV incentives (Extract B). The 2035 ICE ban creates a regulatory deadline. However, subsidies cost public money and may distort market signals.<br><br><strong>Regulation (emission standards, 2035 ICE ban)</strong> directly limits polluting vehicles. More certain than price mechanisms. However, may impose heavy costs on manufacturers and reduce consumer choice.<br><br><strong>Road pricing / congestion charges</strong> reflect the full social cost of driving in busy areas, reducing car use where externalities are greatest. More targeted than broad taxes. May face political opposition.<br><br><strong>Nudges and information</strong> (smart apps, carbon labels) can shift behaviour without coercion at low cost, but effect is limited without price signals.<br><br><strong>Evaluation:</strong> Carbon taxes are economically efficient but politically unpopular and regressive. Regulation provides certainty but risks government failure if poorly designed. A combination of policies is likely most effective. The 2035 ban creates long-run certainty; in the short run, subsidies and road pricing can bridge the gap. Global coordination matters — unilateral action shifts production abroad (carbon leakage).'))

lines.append(entry(p,'05',
'From Figure 2: The mean growth rate = sum of all percentile growth rates ÷ number of percentiles. The median = the 50th percentile value.<br>Read the 50th percentile growth from Figure 2 ≈ 5% (median). The mean across all percentiles is pulled up by high earners at the top — mean ≈ 9% (illustrative, based on chart).<br><strong>Difference = mean − median ≈ 4 percentage points</strong> (accept correct reading from chart ±1pp).'))

lines.append(entry(p,'06',
'Figure 3 shows the in-work poverty rate has risen in every UK region since 2003/04. For example, London\'s rate rose from approximately 14% to 22%, and the rate is increasing even in regions with relatively low poverty. This demonstrates that being employed no longer protects against poverty — consistent with Extract E\'s finding that 56% of people in poverty are in working households (up from 39% 20 years ago). The upward trend across all regions in Figure 3 confirms that employment growth has not been accompanied by adequate wage growth to prevent poverty.'))

lines.append(entry(p,'07',
diag(sd_equil,
'Labour market diagram: cutting out-of-work benefits reduces the reservation wage, shifting labour supply (SL) rightward. New equilibrium has lower wage W₂ and higher employment.',
'<br><strong>Diagram:</strong> Draw a labour market with wage rate (W) on y-axis and quantity of labour (Q) on x-axis. Draw a downward-sloping DL (demand for labour = MRP) and upward-sloping SL.<br>A reduction in out-of-work benefits lowers the reservation wage — the minimum wage a worker will accept before preferring unemployment. Workers are now willing to supply labour at lower wages. <strong>SL shifts right to SL₂.</strong><br>New equilibrium: wage falls from W₁ to W₂; employment rises from Q₁ to Q₂.<br>Mechanism: with lower benefits, the opportunity cost of working falls (workers gain less from staying unemployed), so more workers enter the labour market, increasing supply and pushing down the equilibrium wage — contributing to in-work poverty.')))

lines.append(entry(p,'08',
'<strong>National Living Wage (NLW) / Minimum wage legislation</strong> sets a wage floor above equilibrium for the lowest-paid workers, directly reducing in-work poverty. As of 2023, the NLW is £10.42/hour. However, if set too high it may reduce employment, causing some workers to lose jobs.<br><br><strong>Universal Credit / means-tested benefits</strong> top up wages for low-income working households, directly addressing in-work poverty. However, the high withdrawal rate (taper) creates a poverty trap — workers may keep little of extra earnings, reducing incentives.<br><br><strong>Investment in education and training</strong> raises human capital, increasing workers\' productivity and market wages in the long run. Reduces structural inequality. However, returns take years to materialise and may not help current low-wage workers.<br><br><strong>Childcare subsidies and affordable housing</strong> reduce household costs, effectively raising real living standards. Particularly relevant as rising housing costs are a key driver of poverty (Extract E).<br><br><strong>Zero-hours contract reform / trade union rights</strong> increase job security and bargaining power (TUC\' Frances O\'Grady in Extract F). However, may reduce labour market flexibility valued by employers.<br><br><strong>Evaluation:</strong> The NLW offers the most direct and immediate relief but risks unemployment. Means-tested benefits are targeted but create dependency and work disincentives. Supply-side education policies are most effective long-term but slowest to act. A combination — higher NLW + reformed UC tapering + affordable childcare — is likely most effective. Government failure (Universal Credit complexity, delays) must also be considered.'))

lines.append(entry(p,'09',
'In monopolistic competition, each firm sells a differentiated product, so faces a downward-sloping AR (demand) curve. In the long run, supernormal profits attract new entrants, shifting each firm\'s demand curve leftward until AR = AC (normal profit only).<br><br><strong>Productive inefficiency:</strong> At long-run equilibrium, output is to the left of the minimum point of the AC curve — firms produce on the downward-sloping section of AC. This means AC > minimum AC, so resources are not used as efficiently as possible. Excess capacity exists.<br><br><strong>Allocative inefficiency:</strong> At the profit-maximising output (where MC = MR), price (AR) > MC. Society values the last unit more (P) than it costs to produce (MC), so too little is produced from society\'s perspective. For allocative efficiency, P = MC, which is not achieved.<br><br>Diagram: Draw MC, AC, MR, AR for monopolistic competition LR equilibrium — AR tangent to AC, with output Q where MR = MC. Show P > MC (allocative inefficiency) and AC > minimum AC (productive inefficiency).'))

lines.append(entry(p,'10',
'<strong>For the view (competition policy improves efficiency):</strong><br>Competition policy (mergers control, anti-trust action) prevents firms gaining excessive market power. More competitive markets drive productive efficiency (firms must minimise costs to survive) and allocative efficiency (P → MC). The CMA has blocked anti-competitive mergers and fined price-fixers. Dynamic efficiency may also improve as firms compete through innovation.<br><br><strong>Against the view:</strong><br>Breaking up large firms may destroy economies of scale, raising costs and prices for consumers. Competition policy interventions create regulatory uncertainty, reducing investment incentives. Some collusion (e.g. joint R&D agreements) can increase dynamic efficiency. Regulators may suffer from information problems (not knowing firms\' true costs) or regulatory capture. Natural monopolies may inherently be most efficient at large scale — splitting them up wastes resources.<br><br><strong>Evaluation:</strong> The impact depends on the market. In markets with low barriers to entry and many substitutes, competition policy may be unnecessary as contestability disciplines firms already. In markets with high sunk costs and natural monopoly characteristics, competition policy may be counterproductive. On balance, well-designed competition policy that targets genuine market power abuses (cartels, predatory pricing) tends to improve efficiency, but heavy-handed structural remedies (forced break-ups) can be damaging. A case-by-case approach is more likely to succeed than blanket intervention.'))

lines.append(entry(p,'11',
'<strong>Wage rates in other industries (opportunity cost of labour):</strong> Workers compare wages across occupations. If wages rise in related industries, supply to a particular industry falls as workers move out, raising wages.<br><br><strong>Non-wage benefits and working conditions:</strong> Jobs with better conditions (pleasant environment, flexible hours, status) attract more workers, increasing supply and lowering wages. Unpleasant or dangerous jobs require compensating differentials.<br><br><strong>Barriers to entry — qualifications and training:</strong> Occupations requiring lengthy training (medicine, law) restrict supply, keeping wages high. If entry barriers are low (e.g. cleaning), supply is high and wages low.<br><br><strong>Number of qualified workers available:</strong> Determined by education, immigration, and demographic trends. A larger pool of qualified workers increases labour supply, reducing wages.<br><br><strong>Geographic mobility:</strong> Workers who can relocate add to supply in high-wage areas; immobility (high housing costs, family ties) restricts supply and maintains wage differentials.'))

lines.append(entry(p,'12',
'<strong>With balanced bilateral monopoly:</strong> When a monopsony employer faces a trade union of equal strength, the wage outcome is indeterminate — it depends on relative bargaining power. The union pushes wages up toward the competitive wage (or higher); the monopsony pushes them down toward W<sub>monopsony</sub>. If their power is equal, the equilibrium wage may be close to the competitive level, improving outcomes for workers.<br><br><strong>Evidence for the view:</strong> A strong union can counteract monopsony exploitation, raising wages toward MRP and increasing employment toward competitive levels. Unions can negotiate better conditions, reducing monopsony\'s ability to set take-it-or-leave-it terms. Historically, unionised sectors have higher wages.<br><br><strong>Against:</strong> Strong union power can push wages above the competitive level, causing unemployment — the union maximises wages for members but at the cost of jobs for non-members. Powerful unions may cause wage-push inflation and reduce international competitiveness. Strikes (36,000+ days lost on London Underground) impose wider economic costs. If monopsony power is strong, even a strong union may not achieve the competitive wage.<br><br><strong>Evaluation:</strong> The bilateral monopoly model suggests balanced power leads to a negotiated wage between the monopsony minimum and union maximum. This can improve outcomes over unchecked monopsony, but the "best" outcome is not guaranteed. The 1980s deregulation that weakened unions (mentioned in preamble) may have exacerbated wage inequality. However, excessive union power creates its own inefficiencies. The optimal balance depends on market conditions — bilateral monopoly may work best in labour markets with genuine monopsony power (NHS, state education).'))

lines.append(entry(p,'13',
'<strong>Contestability</strong> refers to how easily new firms can enter and exit a market, determined primarily by sunk costs (costs that cannot be recovered on exit).<br><br><strong>With high contestability (low sunk costs):</strong> Even a monopoly must behave competitively, because any supernormal profit will attract "hit and run" entrants. The threat of entry disciplines the incumbent to set P ≈ AC (normal profit), produce efficiently, and avoid exploiting consumers. Productive and allocative efficiency improve.<br><br><strong>With low contestability (high sunk costs / barriers to entry):</strong> The incumbent monopolist can set P > MC and earn persistent supernormal profits without fear of entry. Inefficiency persists. Dynamic efficiency may also be low if there is no competitive pressure to innovate.<br><br><strong>Examples:</strong> Airlines (formerly high barriers, now low-cost carriers increased contestability). Natural monopoly (rail infrastructure — very high sunk costs, low contestability).'))

lines.append(entry(p,'14',
'<strong>For (privatisation always beneficial):</strong><br>Profit motive disciplines privatised firms to cut costs and improve productive efficiency — nationalised industries face soft budget constraints. Private firms face capital market pressure (share price, threat of takeover). Evidence: BT\'s productivity improved after 1984 privatisation. Competition introduced alongside privatisation (telecoms, airlines) has lowered prices and increased choice.<br><br><strong>Against (not always beneficial):</strong><br>Natural monopolies (water, rail infrastructure) transferred from state to private sector simply shift monopoly power — private monopolists can exploit consumers just as state ones did, without the public interest motive. Regulatory capture can undermine the benefits of privatisation (Ofwat and water companies). Privatised firms may underinvest in long-run infrastructure (rail maintenance failures). Income distribution effects — shareholders gain, workers may lose jobs through cost-cutting. Essential services (energy, water) carry social obligations that private firms may neglect.<br><br><strong>Evaluation:</strong> Privatisation is most beneficial when accompanied by genuine competition and effective independent regulation. It is least beneficial — and may be harmful — for natural monopolies where competition is impossible. "Always beneficial" is too strong — outcomes depend critically on market structure, regulatory quality, and the specific industry. A more nuanced view: privatisation + competition + regulation can improve efficiency, but privatisation alone, without the other two, often fails to deliver promised benefits.'))

print("AQA 2023 P1 done")
with open('/Users/tharun/StudyRAG/model-answers-economics.js', 'w') as f:
    f.writelines(lines)
    f.write('\n  // MORE PAPERS BELOW\n};\n')
print(f"Written: {sum(len(l) for l in lines)} chars")
