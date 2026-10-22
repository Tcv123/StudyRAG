// Edexcel GCSE Geography B (1GB0) — Practice/Exam-Style Questions
// 13 topics × 40+ written questions with mark schemes

const GEOGRAPHY_EDEXCEL_GCSE_PRACTICE = {
  '1.1': {
    name: "Global Circulation and Climate Change",
    questions: [
      {
        q: "State three types of evidence that scientists use to show that the climate has changed in recent decades. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: instrumental temperature records (NASA/NOAA since 1850 — global average has risen ~1.1°C); ice core data (CO₂ and temperature from Greenland/Antarctic ice); sea level rise measurements (risen ~20 cm since 1900); glacier retreat photographs; Arctic sea ice extent reduction; phenological records (earlier springs, species range shifts).",
      },
      {
        q: "Explain how ice cores provide evidence for past climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: ice cores drilled from Greenland and Antarctica; ancient air bubbles trapped in ice preserve samples of past atmosphere; CO₂ and methane concentrations measurable; isotopes of oxygen indicate past temperatures; cores can extend back 800,000 years; show correlation between greenhouse gas levels and temperature; show current CO₂ is unprecedented in that record.",
      },
      {
        q: "Describe three natural causes of climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: Milankovitch cycles — variations in Earth's orbit (eccentricity ~100,000 yrs), axial tilt (~41,000 yrs), precession (~21,000 yrs); volcanic eruptions — aerosols (sulphur dioxide) block sunlight, causing short-term cooling (e.g. Mount Pinatubo 1991); variations in solar output — sunspot cycles, Maunder Minimum (Little Ice Age); changes in ocean circulation.",
      },
      {
        q: "Explain the Milankovitch cycles and their role in long-term climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: three cycles: eccentricity (shape of orbit changes over ~100,000 years — affects distance from Sun); axial tilt (changes from 22.1° to 24.5° over ~41,000 years — affects seasonality); precession (wobble in Earth's axis over ~21,000 years — affects timing of seasons); cycles combine to cause ice ages; these are natural and explain glacial-interglacial cycles over tens of thousands of years — not current rapid warming.",
      },
      {
        q: "Draw and annotate a diagram to explain the enhanced greenhouse effect. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: solar radiation (short-wave) entering atmosphere shown; some reflected by atmosphere/surface; long-wave (infrared) radiation emitted from surface; greenhouse gases shown absorbing/re-emitting long-wave radiation back to surface; annotation explaining that more GHGs = more heat trapped = global warming.",
      },
      {
        q: "Name four greenhouse gases and give a human source for each. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for correctly matched pair: CO₂ — burning fossil fuels/deforestation; methane (CH₄) — livestock/landfill/rice paddies; nitrous oxide (N₂O) — fertiliser use/agriculture; CFCs — refrigerants/aerosols (now banned under Montreal Protocol); water vapour — indirect (positive feedback); accept any correct pairing.",
      },
      {
        q: "Explain why deforestation contributes to climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: trees absorb CO₂ during photosynthesis; cutting/burning trees releases stored CO₂; fewer trees means less CO₂ absorbed; burning releases CO₂ directly; clearing for agriculture often involves burning; soil disturbance releases CO₂; reduces albedo if replaced by darker surfaces; positive feedback: less trees → more CO₂ → more warming.",
      },
      {
        q: "Describe how methane emissions from agriculture contribute to climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: livestock (cattle, sheep) produce methane through enteric fermentation/digestion; rice paddies are flooded — anaerobic decomposition produces methane; manure management releases methane; methane is ~28 times more potent as a greenhouse gas than CO₂ over 100 years; global livestock farming is a major source; growing demand for meat increases emissions.",
      },
      {
        q: "Explain the process of positive feedback in the context of melting permafrost. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: permafrost is frozen ground in Arctic regions containing vast stores of organic matter; as temperatures rise, permafrost thaws; decomposition of organic matter releases CO₂ and methane; these greenhouse gases warm the atmosphere further; more warming → more permafrost melts → more GHG released → runaway feedback loop; this makes climate change self-reinforcing.",
      },
      {
        q: "Describe two consequences of sea level rise for low-lying areas. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each consequence + 1 mark development: Coastal flooding — more frequent storm surges inundate land, damage property, displace people (e.g. Bangladesh). Saltwater intrusion — freshwater aquifers contaminated, agricultural land becomes saline, food/water security threatened. Loss of land — small island states (e.g. Maldives, Tuvalu) at risk of total inundation; forced migration/climate refugees.",
      },
      {
        q: "Explain the two causes of sea level rise. [4 marks]",
        marks: 4,
        markScheme: "2 marks for thermal expansion: as oceans warm, water expands in volume; this accounts for roughly half of observed sea level rise. 2 marks for ice melt: melting glaciers, ice sheets (Greenland, West Antarctic) add water volume to oceans; ice sheets contain enough water to raise sea levels by metres; accelerating melt due to warming.",
      },
      {
        q: "Describe the effects of climate change on coral reefs. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: ocean warming causes coral bleaching — corals expel symbiotic algae (zooxanthellae) and turn white; bleached coral can recover but prolonged bleaching leads to death; Great Barrier Reef has experienced mass bleaching events (2016, 2017, 2020, 2022, 2024); ocean acidification (CO₂ dissolved in seawater) weakens coral skeletons; loss of coral destroys habitat for 25% of marine species; economic impact on tourism and fishing.",
      },
      {
        q: "Suggest how climate change could affect food security. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: changing rainfall patterns alter growing seasons; drought in key agricultural regions (e.g. sub-Saharan Africa, South Asia); flooding destroys crops; rising temperatures reduce yield of staple crops; pests and diseases expand into new areas; sea level rise reduces agricultural land in deltas; shifting seasons disrupt traditional planting times; some areas may benefit (higher latitudes).",
      },
      {
        q: "Explain the difference between mitigation and adaptation as responses to climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark for mitigation definition: actions that reduce greenhouse gas emissions or increase carbon sinks to slow/stop climate change. 1 mark for example: renewable energy, energy efficiency, reforestation. 1 mark for adaptation definition: adjusting to the effects of climate change that are already happening or inevitable. 1 mark for example: sea defences, drought-resistant crops, early warning systems.",
      },
      {
        q: "Describe three renewable energy sources that can help mitigate climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three with brief explanation: solar PV — converts sunlight to electricity, no emissions; wind energy — turbines generate electricity, no direct emissions; hydroelectric power — moving water generates electricity, low lifecycle emissions; tidal/wave — ocean energy; geothermal — heat from Earth's interior; bioenergy — burning biomass (though debated).",
      },
      {
        q: "Explain how Carbon Capture and Storage (CCS) works as a mitigation strategy. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: CO₂ is captured at source (e.g. power station, industrial plant) before it enters the atmosphere; compressed into liquid form; transported via pipeline; injected into deep geological formations (e.g. depleted oil/gas reservoirs, saline aquifers) for permanent storage; prevents emissions reaching atmosphere. Limitations: expensive, energy-intensive, risk of leakage, not yet at scale.",
      },
      {
        q: "Describe the key aims of the Paris Agreement (2015). [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: limit global temperature rise to well below 2°C above pre-industrial levels; aim for 1.5°C target; each country submits Nationally Determined Contributions (NDCs) to cut emissions; NDCs reviewed and strengthened every 5 years; financial support for developing countries (Green Climate Fund); loss and damage mechanism.",
      },
      {
        q: "Assess the effectiveness of international agreements in tackling climate change. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): some explanation of agreements with limited evaluation. Level 3 (5–6): explains both achievements and shortcomings with named examples. Level 4 (7–8): evaluates multiple agreements (Kyoto, Paris), considers why they are effective/ineffective, reaches a justified conclusion. Kyoto: binding targets but US pulled out, no targets for China/India. Paris: universal participation, but NDCs insufficient to meet 1.5°C, voluntary nature, some countries not meeting targets. Conclusion should note progress made vs gap between pledges and action.",
      },
      {
        q: "Explain how reforestation and afforestation can help mitigate climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: trees absorb CO₂ through photosynthesis and store carbon in biomass; more trees = larger carbon sink; afforestation creates new forests on unforested land; reforestation restores deforested areas; REDD+ scheme pays developing countries to preserve forests; limitations: takes decades for full carbon sequestration; land may be needed for food; monoculture plantations have less carbon/biodiversity benefit than natural forests.",
      },
      {
        q: "Describe how sea defences can help communities adapt to sea level rise. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: sea walls/flood barriers hold back high tides and storm surges; Thames Barrier (London) example; beach nourishment/replenishment restores natural buffer; managed retreat — allow some land to flood, protect most valuable land; mangrove restoration provides natural coastal protection; flood warning systems; elevating buildings; raised sea defences in Netherlands (Delta Project).",
      },
      {
        q: "Explain how drought-resistant crops can help communities adapt to climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for up to three: GM or traditionally-bred crops that can survive with less water; reduce crop failure in drought conditions; help maintain food security; examples: drought-tolerant maize in sub-Saharan Africa (CGIAR research); maintains farming livelihoods; allows farmers to adapt without relocating.",
      },
      {
        q: "Describe the likely climate change impacts on the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: warmer summers — heatwaves more frequent (e.g. 2022 UK exceeded 40°C); wetter winters — increased flood risk; sea level rise threatening low-lying coasts; coastal erosion (e.g. East Anglia, Yorkshire); changing growing seasons — some crops more viable; new pest species (e.g. mosquitoes potentially spreading disease); increased demand for air conditioning; water stress in southeast England.",
      },
      {
        q: "Explain how managed retreat works as a UK coastal adaptation strategy. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: some low-value coastal land is deliberately allowed to flood/erode; realignment of sea defences further inland; creates saltmarsh/mudflat habitats that absorb wave energy naturally; reduces maintenance costs; example: Medmerry in Sussex (largest managed realignment in UK); Freiston Shore, Lincolnshire; decisions based on Shoreline Management Plans.",
      },
      {
        q: "Describe the evidence from phenological records that suggests climate change is occurring. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: earlier arrival of migrating birds; plants flowering earlier in spring; longer growing seasons; species range shifts northward/to higher altitudes; bud burst earlier; insect emergence earlier; coral bleaching events increasing; polar bear breeding season changing; mismatch between species timing (e.g. insects emerging before bird chicks hatch).",
      },
      {
        q: "Explain why some scientists argue that current climate change is different from natural climate change in the past. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: rate of change is much faster than previous natural cycles; CO₂ levels have risen from ~280 ppm pre-industrial to over 420 ppm — unprecedented in 800,000 years of ice core data; Milankovitch cycles operate over tens of thousands of years — cannot explain rapid 20th/21st century warming; statistical correlation between industrial emissions and temperature rise; solar output has not significantly increased.",
      },
      {
        q: "Describe the role of the Intergovernmental Panel on Climate Change (IPCC) in addressing climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: body of scientists from around the world; reviews and synthesises climate science; produces Assessment Reports (AR6, 2021); provides scientific basis for international negotiations; identifies risks and timelines; does not do original research but assesses existing research; advises governments on urgency and targets.",
      },
      {
        q: "Suggest why developing countries argue they should not have to reduce emissions as much as developed countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: developed countries industrialised first — responsible for most historical emissions; developing countries have a right to develop; current per capita emissions in developing and emerging countries much lower than developed countries (e.g. US ~15 tonnes CO₂/person vs India ~2 tonnes); climate injustice — poorest countries suffering most despite contributing least; developed countries have financial/technological capacity to transition; principle of common but differentiated responsibilities.",
      },
      {
        q: "To what extent are human activities responsible for recent climate change? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): some explanation of human causes with limited balance. Level 3 (5–6): explains human and natural causes with evidence. Level 4 (7–8): evaluates evidence for human vs natural causes, shows why scientific consensus points to human causation as dominant factor, reaches a justified conclusion. Human: CO₂ correlation, rate of change, greenhouse gas measurements. Natural: Milankovitch, solar, volcanic — but cannot account for speed of current change. Conclusion: IPCC consensus that human activity is primary driver; natural factors play minor role.",
      },
      {
        q: "Describe how Arctic sea ice extent has changed and explain what this shows about climate change. [4 marks]",
        marks: 4,
        markScheme: "2 marks for change: summer Arctic sea ice extent has declined by ~40% since 1979; record low minimums regularly broken; multi-year ice (thicker) being replaced by thinner first-year ice. 2 marks for what it shows: reflects warming Arctic temperatures (Arctic is warming about 3–4x faster than global average — Arctic amplification); positive feedback: less white ice → more dark ocean absorbs heat → more warming; threat to polar bears and indigenous communities.",
      },
      {
        q: "Explain how the volcanic eruption of Mount Pinatubo (1991) provides evidence that natural factors can affect climate. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: Mount Pinatubo, Philippines erupted June 1991; second-largest eruption of the 20th century; ejected 20 million tonnes of SO₂ into stratosphere; sulphur dioxide formed aerosols that reflected solar radiation; global average temperature fell by ~0.5°C for 1–2 years; demonstrated that aerosols from volcanoes can cause short-term cooling; used to model geoengineering proposals (stratospheric aerosol injection).",
      },
      {
        q: "Describe two adaptation strategies used by communities in low-lying coastal countries to cope with sea level rise. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each strategy + 1 mark development. Any two from: floating houses (Bangladesh, Netherlands); raised homesteads/embankments (Bangladesh); cyclone-resistant building (Bangladesh); mangrove planting (natural protection, carbon sequestration); early warning systems; community relocation; Netherlands Delta Works — massive sea defence system; Maldives — building new raised island (Hulhumale); accepting displacement.",
      },
      {
        q: "Evaluate the view that individuals can make a significant difference in tackling climate change. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): lists some individual actions with limited development. Level 3 (5–6): explains both sides — individual impact vs structural change needed. Level 4 (7–8): evaluates scale of individual action vs government/corporate action; uses data/evidence; reaches a clear conclusion. For individuals: reducing diet meat consumption, less flying, energy efficiency at home, green consumerism. Limitations: systemic change needed; fossil fuel companies/governments make bigger decisions; inequality — most emissions from wealthy minority; cognitive dissonance. Conclusion should balance individual responsibility with collective/political action.",
      },
      {
        q: "Describe the global pattern of temperature change since 1850. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: global average temperature has risen ~1.1–1.2°C since pre-industrial; most warming since 1980; accelerating rate of warming; Arctic warming fastest (2–4x global average); some areas warming more than others; 2024 was the hottest year on record (beating 2023); each decade since 1980s warmer than the last; brief cooling events from volcanic eruptions.",
      },
      {
        q: "Draw and annotate a diagram to show the ice-albedo positive feedback loop. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: warming causes sea ice/snow to melt; darker ocean or land surface is exposed; albedo falls, so less solar radiation is reflected; more solar radiation is absorbed, causing further warming — arrows must show a continuous loop. Diagram must be labelled.",
      },
      {
        q: "State two greenhouse gases and their main sources. [2 marks]",
        marks: 2,
        markScheme: "1 mark per gas with source. Any two: CO₂ — burning fossil fuels (coal, oil, gas), deforestation; methane (CH₄) — livestock (cattle), rice paddies, landfill, natural gas leaks; nitrous oxide (N₂O) — agricultural fertilisers; water vapour — natural, amplified by warming; CFCs/HFCs — aerosols, refrigerants.",
      },
      {
        q: "Explain how melting permafrost could cause a positive feedback loop in climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: permafrost (in Arctic tundra) contains large stores of frozen organic matter and methane; as temperatures rise, permafrost thaws; decomposition of organic matter and release of trapped methane adds greenhouse gases to atmosphere; this further warms atmosphere, causing more permafrost thaw — positive (self-reinforcing) feedback loop.",
      },
      {
        q: "Describe two mitigation strategies for climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per strategy + 1 mark development. Any two: renewable energy — switching to solar/wind/hydro reduces CO₂ emissions (e.g. UK wind power provides ~30%+ of electricity); carbon capture and storage (CCS) — captures CO₂ from power stations, stores underground; afforestation/reforestation — trees absorb CO₂; international agreements (e.g. Paris Agreement 2015) set emission reduction targets; carbon taxes/cap-and-trade discourage emissions; energy efficiency measures in buildings/transport.",
      },
      {
        q: "Explain how climate change will impact the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: warmer average temperatures (UK projected +1 to +4°C by 2100); wetter winters, drier summers; more frequent heatwaves (e.g. 40°C reached in 2022); sea level rise threatens coastal cities (e.g. London, Hull); increased flood risk; agricultural changes — new crops possible (grapevines) but drought stress on traditional crops; biodiversity changes — species shifts; stronger storms.",
      },
      {
        q: "Suggest why international agreements on climate change can be difficult to achieve. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: different countries have different emissions histories and current levels (developed country vs developing country fairness debate); developing countries argue developed countries should pay more as they caused most historical emissions; economic cost of transition seen as uncompetitive; fossil fuel lobbies oppose action; lack of enforcement mechanisms in international law; political changes (e.g. US withdrawals from Paris under Trump in 2017 and again in 2025); differing national priorities; developing nations prioritise growth over emissions cuts.",
      },
      {
        q: "Assess the view that adaptation is a more realistic approach to climate change than mitigation. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): describes adaptation and mitigation with limited evaluation. Level 3 (5–6): evaluates both approaches with examples. Level 4 (7–8): balanced assessment with justified conclusion. Adaptation: necessary because some warming is already locked in; pragmatic — examples include flood defences (Thames Barrier), drought-resistant crops (Ethiopia), sea walls (Maldives), early warning systems. Mitigation: addresses root cause; required to avoid catastrophic warming (>2°C); but politically difficult and slow. Conclusion: both needed — adaptation deals with inevitable impacts, mitigation prevents worst outcomes; view partially valid as adaptation may be more politically achievable short-term but mitigation essential long-term.",
      },
      {
        q: "Explain how variations in solar output (sunspot cycles) can affect the Earth's climate. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: the sun undergoes 11-year cycles of increased/decreased sunspot activity; more sunspots = slightly more solar radiation reaching Earth (warmer); fewer sunspots = less radiation (cooler); Maunder Minimum (1645–1715) coincided with Little Ice Age in Europe; variation small compared to greenhouse gas effect but natural contributor to climate variability.",
      },
      {
        q: "Describe the global atmospheric circulation model. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: unequal heating — Equator receives most energy; air rises at Equator (low pressure) and sinks at 30° (high pressure) forming Hadley cells; Ferrel cells between 30° and 60°; Polar cells between 60° and 90°; rising air at 60° (low pressure), sinking at poles (high pressure); surface winds (trade winds, westerlies) blow from high to low pressure.",
      },
      {
        q: "Explain how global atmospheric circulation leads to areas of high and low pressure. [4 marks]",
        marks: 4,
        markScheme: "2 marks per explained area: low pressure where warm air rises (Equator, 60°) as heating makes air less dense (1) — rising air creates low pressure at surface (1); high pressure where cool air sinks (30°, poles) (1) — sinking air presses down on surface (1).",
      },
      {
        q: "Name the surface winds that blow towards the Equator. [1 mark]",
        marks: 1,
        markScheme: "1 mark: trade winds.",
      },
      {
        q: "Explain why the UK receives a lot of rain from the south-west. [2 marks]",
        marks: 2,
        markScheme: "1 mark: prevailing south-westerly winds blow from the sub-tropical high towards the sub-polar low; 1 mark: they cross the Atlantic, picking up moisture, and bring depressions to the UK.",
      },
      {
        q: "Describe the global distribution of tropical storms. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: between 5° and 30° north and south of the Equator; over warm oceans; e.g. Caribbean/Gulf of Mexico, NW Pacific, Bay of Bengal/Indian Ocean, northern Australia; not within 5° of the Equator; move westwards.",
      },
      {
        q: "State two conditions needed for a tropical storm to form. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: sea temperature 26–27°C or above; at least 5° from Equator (Coriolis effect); low wind shear; low pressure with rising, moist air.",
      },
      {
        q: "Explain how ocean currents transfer heat around the Earth. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: warm currents carry heat from tropics towards poles; cold currents return cooler water; driven by prevailing winds; e.g. Gulf Stream/North Atlantic Drift warms NW Europe; thermohaline circulation driven by temperature and salinity.",
      },
      {
        q: "Describe the thermohaline circulation. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: driven by differences in temperature and salinity; cold salty dense water sinks in the North Atlantic; flows along ocean floor; warm surface water replaces it; takes ~1,000 years for a full circuit.",
      },
      {
        q: "Explain how the North Atlantic Drift affects the UK climate. [2 marks]",
        marks: 2,
        markScheme: "1 mark: brings warm water from the Gulf of Mexico/Caribbean; 1 mark: warms the air above, so UK winters are milder than other places at the same latitude.",
      },
      {
        q: "Describe the projected changes in global temperature by 2100. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: IPCC projects ~1.4°C to over 4°C above pre-industrial; depends on emissions scenario; 2024 already ~1.5°C; sea level rise of 0.3–1 m or more.",
      },
      {
        q: "Explain why there is uncertainty about future climate change. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: future emissions depend on human choices; natural factors unpredictable; feedback mechanisms; model limitations.",
      },
      {
        q: "Suggest how climate change could affect ocean circulation. [2 marks]",
        marks: 2,
        markScheme: "1 mark: melting ice adds fresh water to North Atlantic; 1 mark: water becomes less dense so sinking slows, weakening the thermohaline circulation and possibly cooling NW Europe.",
      },
    ],
  },
  '1.2': {
    name: "Tropical Cyclones",
    questions: [
      {
        q: "Explain the sequence of formation of a tropical storm. [6 marks]",
        marks: 6,
        markScheme: "Level marked. Warm ocean heats air; warm moist air rises creating low pressure; air cools and condenses forming cumulonimbus clouds; latent heat released powers storm; air drawn in at surface and spirals due to Coriolis effect; sinking air forms eye; storm moves with prevailing winds; weakens over land/cooler water as energy supply cut off.",
      },
      {
        q: "Describe the structure of a tropical storm. [4 marks]",
        marks: 4,
        markScheme: "1 mark per feature: eye — calm, clear, sinking air, lowest pressure; eye wall — tallest cumulonimbus clouds, strongest winds and heaviest rain; spiral rain bands extending outwards; 200–700 km across; outflow of air at high level.",
      },
      {
        q: "Draw and label a cross-section through a tropical storm. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for correctly labelled: eye (sinking air); eye wall (rising air, strongest winds); rain bands/cumulonimbus clouds; warm moist air drawn in at surface; outflow at high level; warm ocean.",
      },
      {
        q: "Why does the eye of a tropical storm have calm conditions? [2 marks]",
        marks: 2,
        markScheme: "1 mark: air is sinking in the centre of the storm; 1 mark: sinking air warms and prevents cloud forming, so skies are clear and winds light.",
      },
      {
        q: "Explain why tropical storms lose strength when they reach land. [2 marks]",
        marks: 2,
        markScheme: "1 mark: the storm loses its supply of warm, moist air/energy from the ocean; 1 mark: friction with the land surface slows the winds.",
      },
      {
        q: "Explain how climate change may affect the intensity of tropical storms. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: warmer oceans provide more energy; warmer air holds more moisture so heavier rainfall; more storms reaching category 4–5; higher sea levels increase storm-surge impact.",
      },
      {
        q: "Explain how climate change may affect the distribution of tropical storms. [2 marks]",
        marks: 2,
        markScheme: "1 mark: more of the ocean will exceed 26–27°C; 1 mark: storms may form further from the Equator / affect places further north and south.",
      },
      {
        q: "Describe the primary effects of a named tropical storm. [4 marks]",
        marks: 4,
        markScheme: "Named example required for full marks, e.g. Typhoon Haiyan: storm surge 5–6 m; over 6,300 deaths; 1.1 million homes damaged/destroyed; 90% of Tacloban destroyed; airport and power lines damaged; flooding from 400 mm rain.",
      },
      {
        q: "Describe the secondary effects of a named tropical storm. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Typhoon Haiyan: 14 million affected; 6 million lost income; landslides blocked roads; shortages of food/water/shelter; disease outbreaks; looting; crops and fishing boats destroyed; oil spill damaging mangroves.",
      },
      {
        q: "Describe the long-term responses to a named tropical storm. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Haiyan: Build Back Better reconstruction; cash-for-work programmes; help for farmers and fishermen (seeds, boats); no-build zones on coast; more cyclone shelters; improved storm-surge warnings; mangroves replanted.",
      },
      {
        q: "Distinguish between primary and secondary effects of a tropical storm. [2 marks]",
        marks: 2,
        markScheme: "1 mark: primary effects are caused directly by the storm (wind, rain, storm surge), e.g. buildings destroyed; 1 mark: secondary effects result from the primary effects, e.g. disease, food shortages, job losses.",
      },
      {
        q: "Explain how monitoring and prediction can reduce the effects of tropical storms. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: satellites/aircraft/buoys track storm (1) allowing real-time information on strength and position (1); computer models forecast path several days ahead (1) so warnings issued and people evacuated, e.g. 800,000 before Haiyan (1).",
      },
      {
        q: "Explain how protection can reduce the effects of tropical storms. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: cyclone shelters (1) give people safe refuge above flood level, e.g. Bangladesh (1); storm-surge barriers/sea walls (1) hold back flood water (1); buildings on stilts/reinforced roofs (1) withstand wind and flooding (1).",
      },
      {
        q: "Explain how planning can reduce the effects of tropical storms. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: evacuation routes and drills (1) mean people know where to go (1); emergency supplies stockpiled (1) so aid reaches people quickly (1); land-use zoning/no-build zones (1) keep homes away from the most exposed coasts (1).",
      },
      {
        q: "Suggest why the death toll from tropical storms is often higher in developing countries than developed countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: poorer quality housing collapses; less effective warning/communication systems; fewer resources for evacuation and shelters; slower emergency response and aid distribution; more people live in exposed coastal areas.",
      },
      {
        q: "Evaluate the effectiveness of the responses to a named tropical storm. [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed evaluation of immediate and long-term responses, strengths and weaknesses, clear supported judgement, named example. Level 2 (4–6): some evaluation, some detail. Level 1 (1–3): basic description. Credit: Haiyan evacuation of 800,000; slow aid to remote areas; poor understanding of storm surge; Build Back Better; controversy of no-build zone.",
      },
      {
        q: "A tropical storm is forecast to reach a coastal town within 24 hours. Suggest two actions residents should take. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: evacuate to higher ground/inland or cyclone shelter; board up windows/secure property; stockpile food and water; follow official warnings.",
      },
      {
        q: "Explain why storm surges cause so much damage in low-lying coastal areas. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: sea level rises several metres above normal; water floods inland over flat land; strong waves destroy buildings; salt water contaminates farmland and drinking water; people drown if not evacuated.",
      },
      {
        q: "Assess the extent to which tropical storms will become a greater hazard in the future. [9 marks]",
        marks: 9,
        markScheme: "Level marked. Greater hazard: more intense storms, heavier rain, higher surges from sea level rise, wider distribution, more people living on coasts (urbanisation). Less hazard: better monitoring, prediction and planning reduce deaths (Bangladesh example). Judgement required for Level 3.",
      },
      {
        q: "Compare the effects of tropical storms in a developed country and a developing country. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: developing countries usually have more deaths (weaker buildings, fewer warnings); developed countries usually have higher economic costs (more expensive infrastructure); recovery slower in developing countries; developed countries have insurance and government support.",
      },
      {
        q: "Explain the role of the Coriolis effect in tropical storms. [2 marks]",
        marks: 2,
        markScheme: "1 mark: caused by the Earth's rotation, it deflects moving air; 1 mark: this makes air drawn into the storm spiral/rotate (anticlockwise in N hemisphere), so storms cannot form close to the Equator where it is too weak.",
      },
      {
        q: "State three physical hazards caused by tropical cyclones. [3 marks]",
        marks: 3,
        markScheme: "1 mark each: high winds; intense rainfall; storm surges; coastal flooding; landslides.",
      },
      {
        q: "Explain why storm surges are so dangerous. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: sea level rises several metres; floods low-lying land quickly; strong waves destroy buildings; salt water contaminates farmland and water supplies; people drown if not evacuated.",
      },
      {
        q: "Describe the Saffir–Simpson scale. [2 marks]",
        marks: 2,
        markScheme: "1 mark: measures tropical cyclone strength by sustained wind speed; 1 mark: categories 1 (119–153 km/h) to 5 (252 km/h or more).",
      },
      {
        q: "Explain why some countries are more vulnerable to tropical cyclones than others. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: physical — low-lying coasts/deltas, shallow seas, frequency of storms; social — population density, poverty, housing quality, education; economic — money for defences/warnings; political — governance and response.",
      },
      {
        q: "Describe the effects of Hurricane Katrina. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: storm surge up to 8 m; levees failed in 50+ places; 80% of New Orleans flooded; ~1,800 deaths; over 1 million displaced; ~$125 billion damage; oil production disrupted.",
      },
      {
        q: "Explain why New Orleans was badly affected by Hurricane Katrina. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: much of the city below sea level; between Lake Pontchartrain and Mississippi; levees failed; poorer residents without cars could not evacuate; slow federal response.",
      },
      {
        q: "Evaluate the response to Hurricane Katrina. [6 marks]",
        marks: 6,
        markScheme: "Level marked: successes — accurate NHC forecasts, mandatory evacuation, ~80% left; failures — slow FEMA response, conditions at the Superdome, poorer residents left behind; long-term — $14.5bn flood defences. Judgement required.",
      },
      {
        q: "Compare the impacts of two named tropical cyclones in countries at different levels of development. [6 marks]",
        marks: 6,
        markScheme: "Level marked: e.g. Katrina vs Haiyan — deaths (1,800 vs 6,300+), economic cost ($125bn vs a few $bn), causes (levee failure/governance vs weak housing/surge), recovery. Comparative language needed.",
      },
      {
        q: "Explain how forecasting helps reduce the impacts of tropical cyclones. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: satellites and aircraft track storms; computer models predict path and strength days ahead; warnings allow evacuation and preparation; e.g. NHC forecasts for Katrina, PAGASA for Haiyan.",
      },
      {
        q: "Explain how preparation helps reduce the impacts of tropical cyclones. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: evacuation plans and routes; cyclone shelters; education and drills; stockpiling supplies; building design (stilts, reinforced roofs); land-use planning.",
      },
      {
        q: "Suggest why preparation may not always be effective. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: people may not understand or trust warnings; poorer people cannot evacuate (no transport); defences may be overwhelmed; storms may be stronger than predicted.",
      },
      {
        q: "Explain how landslides can be caused by tropical cyclones. [2 marks]",
        marks: 2,
        markScheme: "1 mark: intense rainfall saturates slopes; 1 mark: increases weight and reduces friction so slopes collapse, especially where vegetation has been removed.",
      },
      {
        q: "Assess whether economic development is the most important factor in reducing cyclone deaths. [8 marks]",
        marks: 8,
        markScheme: "Level marked: development (shelters, warnings, buildings) vs physical factors (strength, surge, coastal shape) vs governance (Katrina response) and preparation (Bangladesh shelters). Supported judgement.",
      },
      {
        q: "Describe the global distribution of tropical cyclones. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: between 5° and 30° N and S; over warm oceans; e.g. Caribbean/Gulf of Mexico, NW Pacific, Bay of Bengal, N Australia; move westwards then polewards.",
      },
      {
        q: "Explain why tropical cyclones lose strength over land. [2 marks]",
        marks: 2,
        markScheme: "1 mark: lose supply of warm, moist air (energy); 1 mark: friction with the land slows winds.",
      },
      {
        q: "Describe the structure of a tropical cyclone. [4 marks]",
        marks: 4,
        markScheme: "1 mark per feature: eye (calm, sinking air, lowest pressure); eye wall (strongest winds, heaviest rain); spiral rain bands; 200–700 km across.",
      },
      {
        q: "Explain how the Coriolis effect influences tropical cyclones. [2 marks]",
        marks: 2,
        markScheme: "1 mark: Earth's rotation deflects moving air; 1 mark: makes inflowing air spiral; too weak within 5° of Equator for cyclones to form.",
      },
      {
        q: "Describe the primary and secondary effects of a tropical cyclone in a developing country. [6 marks]",
        marks: 6,
        markScheme: "Level marked, named example (e.g. Haiyan): primary — surge, deaths, homes destroyed; secondary — disease, food shortages, lost livelihoods, landslides.",
      },
      {
        q: "Describe how New Orleans has been protected since Hurricane Katrina. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: ~$14.5 billion spent by US Army Corps of Engineers; stronger levees and floodwalls; 3 km surge barrier; world's largest drainage pump station.",
      },
    ],
  },
  '1.3': {
    name: "Tectonic Hazards",
    questions: [
      {
        q: "Draw a labelled diagram of the Earth's internal structure. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for correctly labelled: inner core (solid iron/nickel); outer core (liquid iron/nickel); mantle (including asthenosphere/lithosphere); crust (continental and/or oceanic). Layers must be shown in correct order from centre outward.",
      },
      {
        q: "State two differences between continental crust and oceanic crust. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two correct differences: continental crust is thicker (30–70 km) vs oceanic (5–10 km); continental crust is less dense (2.7 g/cm³) vs oceanic (3.0 g/cm³); continental crust is made of granite vs oceanic basalt; continental crust is older vs oceanic crust (younger — constantly being created/destroyed).",
      },
      {
        q: "Explain how convection currents in the mantle drive tectonic plate movement. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: heat from the core heats mantle rock; hot rock becomes less dense and rises; cooler rock sinks; creates circular convection cells; these drag tectonic plates above them; where currents diverge, plates are pulled apart; where currents converge, plates are pushed together; ridge push and slab pull also contribute (1 mark each if mentioned).",
      },
      {
        q: "Describe the features formed at a constructive plate boundary. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: plates move apart/diverge; magma rises to fill the gap; new crust/seafloor created; mid-ocean ridges formed (e.g. Mid-Atlantic Ridge); rift valleys on land (e.g. Great Rift Valley); shield volcanoes; shallow-focus earthquakes; no subduction.",
      },
      {
        q: "Draw and label a diagram to show the features of a destructive plate boundary (oceanic-continental). [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: oceanic plate shown subducting beneath continental plate; subduction zone/trench labelled (e.g. Peru-Chile Trench); magma rising/volcano on continental plate (e.g. Andes); fold mountains labelled; earthquake foci at depth on subduction zone. Diagram must be recognisable and labelled.",
      },
      {
        q: "Explain why composite (strato) volcanoes are more dangerous than shield volcanoes. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: composite volcanoes have viscous/silica-rich lava that does not flow easily — pressure builds up; cause explosive eruptions; produce pyroclastic density currents — fast-moving, extremely hot, lethal; generate ash falls over wide areas; can collapse catastrophically (e.g. Montserrat). Shield volcanoes: low-viscosity basaltic lava flows; rarely explosive; people can usually evacuate.",
      },
      {
        q: "Describe the volcanic hazards associated with a major eruption. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): names some hazards. Level 2 (3–4): describes several hazards with some development. Level 3 (5–6): detailed description of multiple hazards explaining their impacts: lava flows (destroy property, slow — can be avoided); pyroclastic density currents (fast, >700°C, very dangerous, cannot be outrun); ash falls (disrupts transport, agriculture, health, can cause roof collapse); lahars (volcanic mudflows along river valleys, bury settlements); volcanic gases (SO₂, CO₂ — toxic, acid rain); tsunamis (if eruption is coastal/underwater).",
      },
      {
        q: "Define the terms focus (hypocentre) and epicentre of an earthquake. [2 marks]",
        marks: 2,
        markScheme: "1 mark for focus/hypocentre: the point underground/within the Earth's crust where the earthquake originates/where rocks first fracture. 1 mark for epicentre: the point on the Earth's surface directly above the focus.",
      },
      {
        q: "Explain the difference between the Richter scale and the Mercalli intensity scale. [4 marks]",
        marks: 4,
        markScheme: "1 mark for Richter: measures the magnitude/energy released by an earthquake; logarithmic scale; measured using a seismograph; same value worldwide. 1 mark for Mercalli: measures the intensity/effects of the earthquake at a particular location; based on observations of damage and human experience; varies with distance from epicentre. 1 mark for key difference: magnitude is objective/measured; intensity is subjective/varies by location. 1 mark for development.",
      },
      {
        q: "Describe three secondary hazards caused by earthquakes. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: liquefaction — saturated soils lose strength, buildings sink; tsunami — underwater earthquake displaces water; landslides/rockfalls — slopes destabilised; fires — ruptured gas pipes, downed electricity lines; flooding — dam failure; disease outbreak — contaminated water/damaged sanitation.",
      },
      {
        q: "Draw a labelled diagram to show how a tsunami is generated by a submarine earthquake. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: earthquake shown at subduction zone/undersea; seafloor displacement shown (uplift); water column displaced upward; waves radiating outward; waves shown increasing in height (shoaling) as they approach shore. Diagram must be clear and labelled.",
      },
      {
        q: "Explain how the level of development of a country affects its vulnerability to tectonic hazards. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): simple statement that poorer countries suffer more. Level 2 (3–4): explains some factors with development. Level 3 (5–6): detailed explanation covering multiple factors: building quality — poor standards mean more collapse; emergency services — insufficient response capacity; early warning systems — developing countries may lack these; community preparedness; access to healthcare; ability to rebuild. Links to specific examples (Haiti 2010 vs Japan 2011) for full marks.",
      },
      {
        q: "Describe the causes and immediate effects of the Haiti earthquake (2010). [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): basic facts. Level 2 (3–4): some detail on causes and effects. Level 3 (5–6): detailed and accurate. Causes: magnitude 7.0; 13 January 2010; conservative/transform boundary between Caribbean and North American plates; shallow focus (13 km); near Port-au-Prince. Immediate effects: 230,000+ deaths; 1.5 million homeless; 250,000 homes/30,000 businesses destroyed; government buildings collapsed (including Presidential Palace); roads impassable; hospitals overwhelmed; cholera outbreak later.",
      },
      {
        q: "Describe the causes and immediate effects of the Japan earthquake and tsunami (2011). [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): basic facts. Level 2 (3–4): some detail. Level 3 (5–6): detailed and accurate. Causes: magnitude 9.0 (Tōhoku); 11 March 2011; destructive boundary — Pacific Plate subducting under the North American (Okhotsk) Plate; megathrust earthquake. Immediate effects: ~15,900 killed (mostly by tsunami); tsunami waves 10–40 m high; entire coastal towns destroyed; Fukushima Daiichi nuclear disaster; 450,000 displaced; $235 billion damage.",
      },
      {
        q: "Compare the responses to the Haiti earthquake (2010) and the Japan earthquake (2011). [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes one country. Level 2 (3–4): describes both with limited comparison. Level 3 (5–6): direct comparison of responses. Haiti: slow response due to damaged infrastructure; international aid essential; UN peacekeepers; long-term recovery very slow; political instability; still rebuilding a decade later. Japan: highly organised response; Self-Defence Forces deployed; tsunami warning system gave some warning; nuclear evacuation; faster rebuilding; insurance payouts; government reconstruction funding. Key contrast: GDP/resources, preparedness, governance.",
      },
      {
        q: "Explain how building design can reduce earthquake deaths. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: cross-bracing — steel framework absorbs shaking; rubber base isolators — building moves independently of ground; counterweights at top (e.g. Taipei 101 damper); open ground floors — absorb collapse; reinforced concrete; automatic gas shut-offs; low-rise buildings safer in developing countries; retrofitting old buildings.",
      },
      {
        q: "Describe how prediction and preparation can reduce the impact of volcanic eruptions. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: seismometers detect increased seismic activity before eruption; ground deformation measured (tiltmeters); gas emissions monitored (increased SO₂ before eruption); thermal imaging; on this basis, evacuation warnings issued; exclusion zones established; emergency drills; evacuation plans prepared.",
      },
      {
        q: "To what extent can tectonic hazards ever be effectively managed? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains both effective and ineffective management with evidence. Level 4 (7–8): evaluates effectiveness with named examples, reaches a justified conclusion. Effective: Japan's preparedness, early warning systems, building codes. Less effective: Haiti (poverty limits preparation); volcanic eruptions still unpredictable; some hazards (tsunamis) too fast; cannot prevent tectonic events. Conclusion must weigh development level, hazard type, and preparedness.",
      },
      {
        q: "Describe the features of a conservative (transform) plate boundary and give a named example. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: plates slide past each other horizontally; no crust created or destroyed; no volcanic activity; causes powerful earthquakes; plates may lock then release (elastic rebound); example: San Andreas Fault, California (North American and Pacific plates); also accept: Caribbean/North American at Haiti.",
      },
      {
        q: "Explain why people continue to live near active volcanoes despite the risks. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: volcanic soils are extremely fertile — high crop yields; tourism/economic opportunities; geothermal energy; historical/cultural attachment to land; perception that eruption is rare or warning will be given; poverty — cannot afford to move; lack of alternatives; some volcanoes dormant for generations.",
      },
      {
        q: "Describe the characteristics of the Mid-Atlantic Ridge and explain how it was formed. [4 marks]",
        marks: 4,
        markScheme: "1 mark for characteristics: runs N-S through Atlantic Ocean; 16,000 km long; mid-ocean ridge; forms islands where above sea level (Iceland); deep rift valley along centre. 1 mark for formation explanation: constructive boundary; North American and Eurasian plates diverge; magma rises; new basaltic crust created; ridge built up over millions of years.",
      },
      {
        q: "Compare the formation of the Himalayas and the Andes. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes one range. Level 2 (3–4): describes both with limited comparison. Level 3 (5–6): direct comparison. Himalayas: continental-continental collision (India and Eurasian plates); neither plate subducts — both uplift to form fold mountains; highest on Earth. Andes: oceanic-continental destructive boundary (Nazca and South American plates); oceanic plate subducts; fold mountains on overriding plate; also associated with volcanoes. Key differences: Himalayas — no subduction, no volcanoes; Andes — subduction, active volcanoes, earthquakes.",
      },
      {
        q: "What evidence supports the theory of tectonic plate movement? [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: matching coastlines (jigsaw fit) of South America and Africa; matching fossil evidence on separated continents (e.g. Mesosaurus); matching rock types/geological structures across ocean basins; paleomagnetism — magnetic striping either side of mid-ocean ridges; GPS measurements showing current plate movement.",
      },
      {
        q: "Describe the distribution of tectonic hazards at a global scale. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: concentrated along plate boundaries; the Ring of Fire (Pacific) has highest frequency; earthquakes along all boundary types; volcanoes mainly at destructive and constructive boundaries; mid-ocean ridges (constructive) are mostly underwater; hotspots (e.g. Hawaii) not at plate boundaries; destructive boundaries along Andes, Japan, SE Asia.",
      },
      {
        q: "Draw a diagram to show the features of an island arc formed at an oceanic-oceanic destructive boundary. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: two oceanic plates shown; one subducting beneath the other; ocean trench labelled (e.g. Mariana Trench); chain of volcanic islands (island arc) labelled above the subducting plate. All four features must be shown and labelled.",
      },
      {
        q: "Explain why shallow-focus earthquakes tend to cause more damage than deep-focus earthquakes. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for up to three: shallow-focus earthquakes have their focus close to the surface (less than 70 km); less energy is absorbed/dissipated as waves travel upward; stronger shaking felt at the surface; more energy reaches buildings; deep-focus earthquakes (>300 km) lose more energy travelling through rock.",
      },
      {
        q: "Suggest how land use planning can reduce the risk from tectonic hazards. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: zoning laws prevent building on fault lines or close to volcanoes; exclusion zones around active craters; critical infrastructure (hospitals, schools) built away from high-risk areas; mapped floodplains/lahar channels kept free of development; planning requires earthquake-resistant construction standards in seismic zones.",
      },
      {
        q: "Compare the volcanic activity at Montserrat and Iceland and explain the differences. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes one location. Level 2 (3–4): describes both. Level 3 (5–6): direct comparison and explanation. Montserrat: Soufrière Hills; destructive boundary (subduction); composite/strato volcano; andesitic lava; explosive eruptions; pyroclastic flows; 19 deaths (1997); south of island abandoned. Iceland: constructive boundary; Mid-Atlantic Ridge; shield volcanoes and fissure eruptions; basaltic lava; less explosive generally; geothermal energy harnessed. Key: type of boundary explains type of eruption.",
      },
      {
        q: "Describe the human responses to the Montserrat volcanic eruption (1995–1997). [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: evacuation of southern half of island; Plymouth (capital) abandoned; exclusion zones established; UK aid provided (Montserrat is UK Overseas Territory); some residents refused to leave; international humanitarian aid; long-term relocation to UK and other islands; population fell from ~11,000 to ~4,000; north of island developed as new safe zone.",
      },
      {
        q: "Explain how elastic rebound theory explains why earthquakes occur. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: tectonic plates try to move past each other at a fault; friction causes them to lock/stick together; stress/strain energy builds up over years; eventually stress exceeds friction; rocks fracture/slip suddenly; stored energy released as seismic waves/earthquake; process repeats — explains regularity of earthquakes in seismic zones.",
      },
      {
        q: "Assess the view that earthquake prediction has made earthquake hazards manageable. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): some explanation of prediction methods and limitations. Level 3 (5–6): explains both the advances and limitations of prediction with evidence. Level 4 (7–8): evaluates different aspects of management, noting prediction is only one component; references named examples; reaches a justified conclusion. Prediction: seismometers, GPS, radon gas, animal behaviour — none fully reliable. Preparation more important than prediction: Japan building codes, drills, early warning. Conclusion: prediction has limited success but preparation/protection more effective.",
      },
      {
        q: "Describe the social impacts of the Japan 2011 earthquake and tsunami. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: ~15,900 killed, 2,500 missing; 450,000+ displaced; entire coastal communities destroyed (e.g. Rikuzentakata); psychological trauma; nuclear evacuation (over 150,000 people from around Fukushima); schools/hospitals destroyed; community bonds broken by displacement; recovery slow for elderly population.",
      },
      {
        q: "Describe the differences in the economic impacts of the Haiti 2010 and Japan 2011 earthquakes. [4 marks]",
        marks: 4,
        markScheme: "2 marks for Haiti: very high economic impact relative to GDP; $14 billion damage; 120% of GDP; slower to rebuild due to poverty; international debt relief required. 2 marks for Japan: $235 billion absolute cost but represented about 3% of GDP; ability to fund reconstruction; insurance payouts; economy recovered within years.",
      },
      {
        q: "Describe what is meant by the 'ring of fire'. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a zone around the Pacific Ocean where many earthquakes and volcanic eruptions occur; 1 mark for: marks the boundaries of the Pacific plate with surrounding plates — contains ~75% of world's volcanoes and 90% of earthquakes.",
      },
      {
        q: "Explain why the 2004 Indian Ocean tsunami caused so many deaths. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three: there was no tsunami warning system in the Indian Ocean at the time; waves up to 30 m high reached densely populated, low-lying coasts; many people (including tourists) did not recognise warning signs such as the sea drawing back; many coastal buildings were poorly built; the waves travelled across the whole ocean, affecting 14 countries — over 230,000 people died.",
      },
      {
        q: "Suggest two primary effects and two secondary effects of a volcanic eruption. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: primary — lava flows destroying buildings/crops; pyroclastic flows killing people; ash fall damaging roofs/crops; volcanic bombs. Secondary — lahars/mudflows when ash mixes with water/snow (e.g. Nevado del Ruiz 1985); tsunamis from underwater eruptions; disruption to air travel (e.g. Eyjafjallajökull 2010 grounded European flights); long-term climate cooling.",
      },
      {
        q: "Explain why the 2015 Nepal earthquake had such severe impacts. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed explanation of several physical and human factors with specific evidence, linked clearly to the impacts. Level 2 (3–4 marks): Explains some factors with some evidence. Level 1 (1–2 marks): Basic points. Accept: magnitude 7.8 with a shallow focus; most rural homes were unreinforced stone or mud brick and collapsed (600,000+ homes destroyed); remote mountainous terrain and landslides blocked roads, delaying rescue and aid; avalanches on Everest; poverty and limited government capacity to prepare or respond; aid bottleneck at Kathmandu's single-runway airport; around 9,000 deaths.",
      },
      {
        q: "Explain why some people continue to live in areas at high risk from tectonic hazards. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four: fertile volcanic soils excellent for farming (e.g. slopes of Mt Etna, Vesuvius); geothermal energy sources; tourism income (e.g. Iceland); mineral/gemstone deposits; familiar/cultural attachment to home; poverty — cannot afford to move; belief monitoring/defences will protect them; events infrequent — perceived low risk; employment opportunities in the area.",
      },
      {
        q: "Evaluate the effectiveness of monitoring and prediction in reducing the impacts of tectonic hazards. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates volcanic and earthquake monitoring with named examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes methods with some evaluation. Level 1 (1–2 marks): Basic methods listed. Accept volcanic — seismometers, gas sampling, tiltmeters, thermal imaging (successful prediction at Mt Pinatubo 1991 saved thousands of lives through evacuation); Mt Etna continuously monitored. Earthquakes — much harder to predict precisely; Japan uses early-warning systems giving seconds of warning; animal behaviour inconclusive. Conclusion: monitoring highly effective for volcanoes, limited for earthquakes — so prediction alone insufficient, must combine with planning/preparation/building design.",
      },
      {
        q: "Suggest why people continue to live in areas at risk from tectonic hazards. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed reason: fertile soils; geothermal energy; tourism; minerals; family/work ties; confidence in monitoring and building codes; perception that risk is low.",
      },
      {
        q: "Classify the following hazards as tectonic or atmospheric: earthquake, drought, tsunami, tropical storm. [2 marks]",
        marks: 2,
        markScheme: "2 marks all correct, 1 mark for 2–3 correct: tectonic — earthquake, tsunami; atmospheric — drought, tropical storm.",
      },
      {
        q: "Explain how hotspots form volcanoes away from plate boundaries. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: mantle plume of hot magma rises; burns through the plate; plate moves over stationary hotspot forming a chain of volcanoes (Hawaii); shield volcanoes from basaltic lava.",
      },
      {
        q: "Compare the impacts of two earthquakes in countries at different levels of development. [6 marks]",
        marks: 6,
        markScheme: "Level marked: e.g. Nepal 2015 vs Japan 2011 — deaths, building damage, economic cost, response, recovery; comparative language; explains role of development.",
      },
    ],
  },
  '1.4': {
    name: "Development Dynamics",
    questions: [
      {
        q: "Define GDP per capita. [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the total value of goods and services produced in a country in a year, divided by the population / average income per person.",
      },
      {
        q: "State three components of the Human Development Index (HDI). [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: life expectancy at birth; mean/expected years of schooling / education index; GNI per capita (PPP). All three must be correct for 3 marks.",
      },
      {
        q: "Explain one advantage of using HDI rather than GDP per capita as a measure of development. [2 marks]",
        marks: 2,
        markScheme: "1 mark for the advantage: HDI is a composite measure — it uses multiple indicators. 1 mark for development: gives a more complete/rounded picture of development than just income; includes social factors (health, education) which GDP misses; a country can have high GDP but poor health/education outcomes (e.g. oil states).",
      },
      {
        q: "Describe two limitations of using economic indicators alone to measure development. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each limitation + 1 mark development. GDP per capita is an average — masks inequality within the country. Does not measure quality of life, health, education or wellbeing. Does not account for informal economy. Does not reflect environmental sustainability. GNI can be distorted by multinational profits flowing out of country.",
      },
      {
        q: "Draw a sketch map to show the approximate position of the Brandt Line and the global pattern of development. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: world map or recognisable outline; Brandt Line drawn roughly correctly (separating richer North from poorer South, curving south to include Australia/New Zealand in the North); Global North labelled as more developed/developed countries; Global South labelled as less developed/developing and emerging countries; at least one named example country in each category.",
      },
      {
        q: "Explain one limitation of the Brandt Line as a way of classifying development. [2 marks]",
        marks: 2,
        markScheme: "1 mark for limitation: it is a crude/simplistic division; ignores variation within the Global South; many emerging countries (e.g. China, Brazil) are in the Global South but are rapidly developing; Australia and New Zealand are in the geographical south but classed as Global North. 1 mark for development of point.",
      },
      {
        q: "Describe two physical causes of uneven global development. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each cause + 1 mark development. Climate — hot/dry or tropical climates can reduce agricultural productivity, limit food security; increase disease burden (malaria, etc.). Landlocked location — no sea access, higher transport costs, limits trade. Natural hazards — frequent earthquakes/volcanic eruptions/floods destroy infrastructure, divert investment. Poor soils — limited agricultural output, food insecurity.",
      },
      {
        q: "Explain how colonialism has contributed to uneven development between countries. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): simple statement that colonialism caused poverty. Level 2 (3–4): explains how colonialism had negative effects on colonies with some development. Level 3 (5–6): detailed explanation covering multiple mechanisms — extraction of raw materials and wealth; borders drawn without regard for ethnic groups leading to conflict; education/infrastructure built to serve colonisers not local people; cash crop agriculture replacing food production; debt from post-independence loans; cultural disruption; loss of skilled workers. Links to present-day inequality.",
      },
      {
        q: "Explain how trade inequalities can cause uneven development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: developing countries tend to export raw materials at low prices and import manufactured goods at higher prices — unfavourable terms of trade; price of commodities fluctuates, making income unreliable; tariffs and subsidies in developed countries make it hard for developing country producers to compete; trade agreements often favour developed countries; profits from trade often returned to developed country shareholders.",
      },
      {
        q: "Suggest how conflict can prevent a country from developing. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: destroys infrastructure (roads, hospitals, schools); discourages foreign investment; diverts government spending to military; causes displacement of population; kills/injures working-age population; reduces agricultural output; disrupts education; can last for generations.",
      },
      {
        q: "Describe the difference between short-term emergency aid and long-term development aid. [4 marks]",
        marks: 4,
        markScheme: "2 marks for short-term: immediate response to disaster/crisis; food, water, shelter, medical supplies; e.g. after earthquakes, floods. 2 marks for long-term: sustained projects to improve quality of life; e.g. building schools, wells, training local workers; aims to build self-sufficiency.",
      },
      {
        q: "Explain the difference between bilateral aid and multilateral aid. [4 marks]",
        marks: 4,
        markScheme: "1 mark for bilateral: aid given directly from one government to another. 1 mark development: can come with conditions (\"tied aid\") that benefit the donor country. 1 mark for multilateral: aid given through international organisations (UN, World Bank, IMF). 1 mark development: pooled resources; less tied; but can come with structural adjustment conditions.",
      },
      {
        q: "Assess the arguments for and against aid as a strategy for reducing global inequality. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains both sides with some evidence. Level 4 (7–8): balanced evaluation with named evidence, clear justified conclusion. For: saves lives (emergency aid), funds infrastructure, builds capacity, fills funding gaps. Against: creates dependency, tied aid benefits donors, corruption can divert funds, can undermine local markets, does not address structural causes of inequality (trade, debt). Best answers evaluate quality of different aid types.",
      },
      {
        q: "Explain how Foreign Direct Investment (FDI) can promote development in developing and emerging countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: creates jobs for local population; transfers technology and skills; generates tax revenue for government; builds infrastructure (roads, ports); increases export earnings; stimulates secondary economic activity/multiplier effect.",
      },
      {
        q: "Give two disadvantages of Foreign Direct Investment for developing countries. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: profits often repatriated to developed country shareholders; low wages/poor working conditions; environmental damage; exploits cheap labour; dependency on TNCs; race to the bottom on regulations.",
      },
      {
        q: "Explain the principles of Fairtrade and how it can benefit farmers in developing countries. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): basic description of Fairtrade. Level 2 (3–4): explains some principles and benefits with development. Level 3 (5–6): detailed explanation of Fairtrade premium, guaranteed minimum price, long-term contracts, community investment fund; benefits: stable income, investment in schools/healthcare/infrastructure, farmers not exploited by middlemen, environmental standards; example: cocoa/coffee farmers in Ghana/Ethiopia. Mention of criticisms for full marks not required but accepted.",
      },
      {
        q: "Suggest one criticism of the Fairtrade system. [2 marks]",
        marks: 2,
        markScheme: "1 mark for criticism: only small percentage of Fairtrade premium reaches farmers; certification costs are high for small farmers; limited to certain products; may create dependency on western consumer goodwill; does not challenge structural trade inequalities. 1 mark for development.",
      },
      {
        q: "What is microfinance and how can it help people in developing countries? [4 marks]",
        marks: 4,
        markScheme: "1 mark for definition: small loans provided to people who cannot access traditional banking. 1 mark for example: Grameen Bank, Bangladesh (Muhammad Yunus). 1 mark for how it helps: allows people to start small businesses; buy tools/livestock; generate income. 1 mark for development: particularly helps women; increases household income; can break the poverty cycle.",
      },
      {
        q: "Explain how debt can trap developing countries in a cycle of poverty. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: countries borrowed money from World Bank/IMF; high interest payments reduce money available for health/education; structural adjustment conditions (privatisation, cutting public services) can worsen poverty; debt grows faster than ability to repay; cycle: need more loans to service existing debt; HIPC initiative sought to address this.",
      },
      {
        q: "Suggest two disadvantages of relying on tourism as a development strategy. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: seasonal — income not year-round; vulnerable to external shocks (terrorism, pandemics, natural disasters); profits leakage to foreign-owned companies; environmental damage; cultural disruption; dependency on foreign tourists; low wages in hospitality.",
      },
      {
        q: "Explain the Fairtrade chocolate/coffee commodity chain and how value is distributed. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): describes the chain simply. Level 2 (3–4): explains the chain with some analysis of who benefits. Level 3 (5–6): traces the full chain — farmer → co-operative → exporter → processor → manufacturer → retailer → consumer; explains that farmers receive smallest share; middlemen/processors/retailers take largest margins; Fairtrade attempts to shift more value to farmers through minimum price and premium; gives approximate value distribution. Example: cocoa farmer in Ghana receives ~6% of value of chocolate bar.",
      },
      {
        q: "Describe what is meant by the development spectrum. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: countries exist at different stages of development rather than being simply 'developed' or 'developing'. 1 mark for: identified categories — developing countries, emerging countries, developed countries (or mention BRICS, MINT etc.) on a continuum.",
      },
      {
        q: "State two development indicators that could be used to classify a country as a developing country. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two: low GDP/GNI per capita (under ~$1,135 World Bank threshold, 2025); low HDI score; high infant mortality rate; low life expectancy; low literacy rate; high birth rate; high % of labour force in agriculture; limited access to clean water/sanitation.",
      },
      {
        q: "Explain the difference between infant mortality rate and life expectancy as development indicators. [4 marks]",
        marks: 4,
        markScheme: "1 mark for IMR definition: number of deaths of children under 1 per 1,000 live births. 1 mark for life expectancy definition: average age a person born today can expect to live to. 1 mark for how each indicates development: high IMR = poor healthcare/nutrition/sanitation; low life expectancy = poor healthcare, disease, poverty. 1 mark for comparison: IMR is a more sensitive indicator of early childhood conditions; life expectancy averages all deaths.",
      },
      {
        q: "To what extent is Fairtrade an effective solution to reducing inequality between developed countries and developing countries? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple points. Level 2 (3–4): some explanation with limited evaluation. Level 3 (5–6): explains effectiveness and limitations with evidence. Level 4 (7–8): evaluates with evidence, compares Fairtrade to other strategies, reaches a clear conclusion. Effective: guaranteed minimum price, community investment, stable livelihoods. Limited: small scale, does not address structural trade rules, producer to benefit varies, consumer awareness/cost premium. Comparison: structural solutions (debt relief, trade reform) may be more effective at scale.",
      },
      {
        q: "Suggest why natural disasters can have a greater impact on developing countries than on developed countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: developing countries have weaker building standards — more deaths from building collapse; limited emergency services/healthcare; less money for early warning systems; slower reconstruction; greater dependence on agriculture — food insecurity after; debt means cannot afford rebuilding; limited insurance. Developed countries have resources to prepare and recover quickly.",
      },
      {
        q: "Describe the differences in birth rate and death rate between developing countries and developed countries. [4 marks]",
        marks: 4,
        markScheme: "2 marks for developing countries: high birth rates (often 30–40+ per 1,000); higher death rates (though falling); high natural increase rate; high infant mortality. 2 marks for developed countries: low birth rates (10–15 per 1,000); low death rates; low or negative natural increase; low infant mortality.",
      },
      {
        q: "Explain how access to clean water affects development in developing countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: without clean water, waterborne diseases (cholera, typhoid) cause illness and death; children miss school to collect water — reduces educational attainment; women spend hours collecting water — cannot work; agricultural productivity limited; economic activity disrupted; healthcare costs increased. Access to clean water reduces mortality, improves productivity.",
      },
      {
        q: "Explain how the percentage of the labour force employed in agriculture can indicate a country's level of development. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for up to three: developing countries have higher % in agriculture — subsistence farming, low productivity, low wages; developed countries have low % in agriculture — mechanised, high-tech, fewer workers needed; as countries develop, workers move to industry and services (structural transformation); high % in agriculture indicates low industrialisation; limits national income and productivity.",
      },
      {
        q: "What is the Demographic Transition Model (DTM)? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a model showing changes in birth rates and death rates over time as countries develop; 1 mark for: consists of 5 stages from high birth/death rates (Stage 1, least developed) to low birth/death rates and possibly declining population (Stage 5, most developed).",
      },
      {
        q: "Explain how fair trade can help reduce the development gap. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: guarantees a minimum price for producers (protects from market volatility); pays a social premium reinvested in community projects (schools, clean water); improves working conditions and bans child labour; gives small farmers access to global markets; BUT fair trade represents small share of global trade and premium prices limit consumer uptake.",
      },
      {
        q: "To what extent have Transnational Corporations (TNCs) helped the development of emerging countries? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): lists benefits and costs with limited evaluation. Level 3 (5–6): explains both sides with named examples. Level 4 (7–8): balanced evaluation with clear judgement. Benefits: FDI/capital investment; creation of jobs (e.g. Foxconn in China, Nike in Vietnam); technology/skills transfer; export earnings; multiplier effect; infrastructure improvements. Drawbacks: profits repatriated to developed country HQ; low wages and poor working conditions; environmental damage; cultural erosion; tax avoidance. Conclusion should assess extent — significant role but needs to be combined with strong local governance and worker protections.",
      },
      {
        q: "Describe the Demographic Transition Model. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: shows change in birth rate, death rate and total population over time; stage 1 high BR and DR; stage 2 DR falls; stage 3 BR falls; stage 4 both low; stage 5 BR below DR.",
      },
      {
        q: "Explain how the Demographic Transition Model is linked to a country's level of development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: developing countries in stages 2–3 (high BR, falling DR); emerging countries in stage 3; developed countries in stages 4–5; development brings healthcare (DR falls), then education/contraception (BR falls); limitation — based on Europe.",
      },
      {
        q: "Explain the consequences of uneven development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: disparities in wealth; disparities in health (life expectancy, infant mortality); international migration — economic migrants and refugees; remittances.",
      },
      {
        q: "Describe Rostow's model of economic development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: five stages; traditional society; pre-conditions for take-off; take-off; drive to maturity; high mass consumption; development as economic growth.",
      },
      {
        q: "Explain one criticism of Rostow's model. [2 marks]",
        marks: 2,
        markScheme: "1 mark: criticism (e.g. based on Europe/USA); 1 mark: development (ignores colonialism, unequal trade; assumes all countries follow same path).",
      },
      {
        q: "Explain Frank's dependency theory. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: world divided into core (developed) and periphery (developing); core exploits periphery for cheap raw materials; sells manufactured goods back at high prices; debt and conditional aid; development of core depends on underdevelopment of periphery.",
      },
      {
        q: "Compare Rostow's and Frank's theories of development. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: Rostow optimistic vs Frank pessimistic; Rostow sees internal stages vs Frank sees global system; Rostow based on Western experience vs Frank on Latin America; neither fully explains rise of NICs/China.",
      },
      {
        q: "Define the term \"Gini coefficient\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: a measure of income inequality within a country from 0 (equal) to 1 (unequal).",
      },
      {
        q: "Describe the location of India. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: South Asia; bordered by Pakistan, China, Nepal, Bangladesh; coasts on Arabian Sea and Bay of Bengal.",
      },
      {
        q: "Explain how India's economic structure has changed. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: agriculture employs ~45% but <20% of GDP; manufacturing growing; services over half of GDP; IT and business services (Bengaluru, Hyderabad); change after 1991 reforms.",
      },
      {
        q: "Explain why TNCs locate in India. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: large, young, English-speaking workforce; lower labour costs; huge domestic market; government incentives; IT skills.",
      },
      {
        q: "Explain the negative impacts of rapid economic development in India. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: regional disparities (Kerala/Maharashtra vs Bihar); urban–rural inequality; air pollution (Delhi); water pollution (Ganges); slums.",
      },
      {
        q: "Describe one top-down development project in an emerging country. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Sardar Sarovar Dam, Narmada River, Gujarat: irrigation, drinking water and HEP; completed 2017; displaced tens of thousands of families.",
      },
      {
        q: "Describe one bottom-up development project in an emerging country. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Barefoot College, Rajasthan: trains rural women as solar engineers; installs and maintains solar lighting; cheap, sustainable, empowering.",
      },
      {
        q: "Assess whether top-down or bottom-up approaches are more effective for development. [8 marks]",
        marks: 8,
        markScheme: "Level marked: top-down (scale, infrastructure, investment vs cost, displacement, unequal benefits); bottom-up (cheap, local, sustainable vs small scale); examples from India; supported judgement.",
      },
      {
        q: "Explain how India's demographic changes could benefit its development. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: falling fertility (~2 children per woman); large working-age population; \"demographic dividend\" of workers and consumers; fewer dependants per worker.",
      },
    ],
  },
  '1.5': {
    name: "Challenges of an Urbanising World",
    questions: [
      {
        q: "What is urbanisation? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the increase in the proportion of a country's population living in urban areas (towns and cities).",
      },
      {
        q: "Describe the global pattern of urbanisation. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: fastest rates of urbanisation occurring in developing and emerging countries, especially in Africa and Asia; developed countries have slower rates — already highly urbanised (e.g. UK ~83%); some African cities growing by 4–5% per year; global urban population exceeded rural for the first time in 2007/2008.",
      },
      {
        q: "Explain two push factors that cause people to move from rural to urban areas in developing countries. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor: rural poverty — limited income from subsistence farming (1 mark), unable to afford basic needs/services (1 mark); lack of services — no schools/hospitals/electricity in rural areas (1 mark), move to cities for better access to education/healthcare (1 mark); environmental hazards — floods/droughts/crop failure in rural areas; land shortages.",
      },
      {
        q: "Explain two pull factors that attract people to urban areas in developing and emerging countries. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor: employment — more job opportunities in industry/services in cities (1 mark), higher wages than rural farming (1 mark); better services — access to schools, hospitals, clean water, electricity (1 mark), improves quality of life/life expectancy (1 mark).",
      },
      {
        q: "Distinguish between natural increase and in-migration as causes of urban population growth. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: natural increase — more births than deaths within the urban population (young migrants have children); 1 mark for: in-migration — people moving from rural areas/other countries into cities; both contribute to rapid urban growth in developing and emerging countries.",
      },
      {
        q: "Describe the characteristics of a squatter settlement (shanty town/favela). [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: built illegally/informally on land not owned by residents; built from scavenged/makeshift materials (corrugated iron, wood, cardboard, plastic); lack clean water supply and sanitation; no electricity or irregular connections; overcrowded; limited road access; insecure land tenure (can be demolished).",
      },
      {
        q: "Explain why squatter settlements develop on the outskirts of rapidly growing cities in developing countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: rapid rural-urban migration creates housing demand cities cannot meet; newcomers cannot afford formal housing; build makeshift homes on available land (often steep hillsides, flood plains — land others don't want); governments lack resources to provide housing for all; informal settlement grows quickly as others join family/community members.",
      },
      {
        q: "Describe the social problems faced by residents of squatter settlements. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: lack of clean water — risk of waterborne diseases (cholera, typhoid); no sanitation — open sewers/disease; unemployment/informal economy — low income, no job security; crime and violence — limited policing; lack of access to schools/healthcare; overcrowding — mental health impacts; insecurity of tenure.",
      },
      {
        q: "Explain the environmental problems associated with rapid urbanisation in developing countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: air pollution — vehicle emissions, industrial pollution, burning waste/fuel; water pollution — untreated sewage/industrial waste in rivers; solid waste management problems — open rubbish dumps, disease risk; loss of green space/natural habitats; flooding from impermeable surfaces and blocked drains; noise pollution.",
      },
      {
        q: "What is a site and service scheme? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: government provides a plot of land (site) with basic services already installed (roads, water pipes, electricity, sanitation); 1 mark for: residents then build/improve their own home incrementally — cheaper than building full housing for government.",
      },
      {
        q: "Explain how self-help (incremental) schemes improve conditions in squatter settlements. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: government provides building materials, technical advice and/or loans; residents improve their own homes rather than government doing it for them; more affordable than total redevelopment; community involved so more invested; gradual improvement over years; retains community networks/social capital.",
      },
      {
        q: "What is deindustrialisation? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: the decline of manufacturing/heavy industry in an area; 1 mark for: leads to factory closures, job losses and economic decline in affected areas (e.g. UK cities like Manchester, Sheffield, Liverpool from 1960s–80s).",
      },
      {
        q: "Explain how deindustrialisation led to urban deprivation in UK cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: closure of factories/mines/docks caused mass unemployment; loss of income → poverty; people moved away leaving areas depopulated; tax base reduced — less money for services; shops/businesses closed; housing fell into disrepair; cycle of deprivation: unemployment → poverty → poor housing → poor health → low educational attainment.",
      },
      {
        q: "Describe what is meant by the Index of Multiple Deprivation. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a government measure that ranks areas in England by level of deprivation; 1 mark for: based on seven domains: income, employment, education, health/disability, crime, barriers to housing and services, living environment.",
      },
      {
        q: "Explain the difference between suburbanisation and counter-urbanisation. [3 marks]",
        marks: 3,
        markScheme: "1 mark for: suburbanisation — movement of people from city centres to suburbs (edge of city) — still within the urban area; 1 mark for: counter-urbanisation — movement from cities to smaller towns and rural areas — outside the city entirely; 1 mark for: both driven by desire for more space/better environment, but counter-urbanisation made possible by better transport/remote working.",
      },
      {
        q: "Explain two causes of traffic congestion in UK cities. [4 marks]",
        marks: 4,
        markScheme: "2 marks per cause: high car ownership — greater wealth means more people own/use cars (1 mark), particularly for commuting (1 mark); urban sprawl — suburbs/commuter zones farther from city centres (1 mark), longer commutes with limited public transport alternatives (1 mark). Also accept: inadequate public transport, road design, peak-hour commuting.",
      },
      {
        q: "Draw and label a diagram to show the land use zones of a typical developing/emerging city. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: CBD at centre labelled; inner industrial zone labelled; residential zones (varying quality) shown; squatter settlements/shanty towns on periphery labelled; newer planned suburbs shown.",
      },
      {
        q: "Explain why squatter settlements are often found on hazardous sites on the edges of developing country cities. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: land on the urban fringe is often unoccupied and unwanted (government or private); hazardous sites (steep slopes, flood plains, near landfill) are avoided by wealthier people; migrants have no choice — cannot afford formal housing or safer land; proximity to city allows access to informal work; over time settlements become established and difficult to remove.",
      },
      {
        q: "Describe one way in which the growth of megacities creates environmental problems. [2 marks]",
        marks: 2,
        markScheme: "1 mark for naming a specific environmental problem (e.g. air pollution, water pollution); 1 mark for developing the point (e.g. millions of vehicles create smog/particulate pollution in cities like Mumbai and Delhi — WHO safe limits regularly exceeded).",
      },
      {
        q: "Explain how urban sprawl can cause conflict between different groups. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: urban sprawl involves building on greenfield land (countryside/green belt) on edge of city; conflicts: farmers/landowners lose agricultural land; conservationists argue loss of wildlife habitats/natural beauty; local residents in receiving villages worry about loss of rural character/services being overwhelmed; developers want profit from housing demand; planners try to balance housing need vs environment.",
      },
      {
        q: "Evaluate the extent to which squatter settlements can be improved without relocating residents. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates in-situ improvement strategies (self-help, site and service) against their limitations, uses named examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategies with some evaluation. Level 1 (1–2 marks): Basic points. Accept: self-help schemes (Dharavi, Mumbai; Kibera, Nairobi) — can dramatically improve sanitation, water, housing quality; preserve community; BUT: land tenure insecurity remains; difficult to upgrade on extremely dense/hazardous sites; some argue total relocation needed for full improvement.",
      },
      {
        q: "Explain why the rate of urbanisation is faster in Africa and Asia than in Europe. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: Africa and Asia have very large rural populations still to urbanise; rapid population growth (high natural increase) means more young people seeking urban employment; rapid industrialisation/economic growth in many Asian cities attracts migrants; Europe already highly urbanised — little rural population left to move to cities; European population also growing slowly.",
      },
      {
        q: "What is meant by urban deprivation? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a state of disadvantage affecting groups of urban residents; 1 mark for: characterised by low income, poor housing, unemployment, poor health, limited access to services — concentrated in specific urban areas.",
      },
      {
        q: "Describe one challenge and one opportunity of living in a megacity. [4 marks]",
        marks: 4,
        markScheme: "2 marks per point: challenge — (name, 1 mark) e.g. traffic congestion — millions of vehicles cause gridlock, pollution, lost productivity (1 mark for development); opportunity — (name, 1 mark) e.g. employment — wide range of formal and informal jobs available, higher wages than rural areas (1 mark for development).",
      },
      {
        q: "Assess the social, economic and environmental challenges of rapid urbanisation in developing country cities. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of all three challenge types with specific evidence from named city/cities, considers which challenges are most significant, reaches a supported judgement. Level 2 (3–5 marks): Covers at least two types of challenge with some development. Level 1 (1–2 marks): Basic challenges listed. Accept: social — housing shortages, lack of clean water/sanitation, crime, poor health; economic — informal economy, unemployment, infrastructure deficit; environmental — pollution, flooding, waste management; conclusion should judge overall most significant or how interlinked they are.",
      },
      {
        q: "Draw and label a sketch map to show the location and land uses of a named squatter settlement. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark for: named settlement shown in relation to city (e.g. Dharavi, Mumbai); 1 mark for: position shown (e.g. central location, surrounded by commercial district); 1 mark for: at least two different land use areas labelled (e.g. residential, recycling industry, small workshops).",
      },
      {
        q: "To what extent is counter-urbanisation a problem for rural areas? [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates both negative and positive effects of counter-urbanisation on rural areas, considers different stakeholders, reaches a supported conclusion. Level 2 (3–4 marks): Describes effects with some evaluation. Level 1 (1–2 marks): Basic points. Accept: problems — house prices rise, local people priced out, loss of community, increased commuter traffic; benefits — more spending in local economy, schools maintained, services retained, renovation of old buildings; conclusion should weigh problems vs benefits and consider \"to what extent\".",
      },
      {
        q: "Define the term 'megacity'. [1 mark]",
        marks: 1,
        markScheme: "1 mark for: a city with a population of 10 million or more people.",
      },
      {
        q: "Explain two opportunities that rapid urbanisation can create for people living in developing/emerging cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark per opportunity + 1 mark development. Any two from: jobs in the formal and informal economy that usually pay more than rural farming; better access to schools, colleges and hospitals; access to piped water, electricity and sanitation (in some areas); a wider range of services, shops and entertainment; chances to start small businesses and send money back to rural families (remittances).",
      },
      {
        q: "Define the term \"world city\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: a city with global influence in finance, trade, culture and politics, e.g. London, New York.",
      },
      {
        q: "Describe the changes in the number and distribution of megacities since 1950. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: 2 in 1950 (New York, Tokyo); over 30 by mid-2020s; most growth in Asia, Africa and Latin America; fewer in developed countries.",
      },
      {
        q: "Compare urbanisation in developed and developing countries. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: level (80–85% vs lower); rate (slow vs rapid); processes (counter-/re-urbanisation vs rural–urban migration and natural increase).",
      },
      {
        q: "Define the term \"re-urbanisation\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: the movement of people back into city centres, often after regeneration.",
      },
      {
        q: "Describe the site and situation of a named megacity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Mumbai: peninsula/islands on west coast of India; natural harbour; port on Arabian Sea; financial capital; Bollywood.",
      },
      {
        q: "Explain why a named megacity has grown rapidly. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point, e.g. Mumbai: colonial trade centre; port and industry; financial and film industries; rural–urban migration; natural increase.",
      },
      {
        q: "Describe the structure of a named megacity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Mumbai: CBD in south; slums close to centre and along railways (Dharavi); suburbs to north; new business districts (Bandra-Kurla).",
      },
      {
        q: "Explain one top-down strategy used to improve quality of life in a megacity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Dharavi Redevelopment Project: rehousing in flats; better sanitation; led by Adani since 2022; concerns over exclusion and loss of workshops.",
      },
      {
        q: "Explain one bottom-up strategy used to improve quality of life in a megacity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. SPARC and Mahila Milan: women's savings groups; community toilet blocks; negotiating with city for housing; low-cost and community-led.",
      },
      {
        q: "Evaluate top-down and bottom-up strategies to improve quality of life in a named megacity. [8 marks]",
        marks: 8,
        markScheme: "Level marked: named strategies of each type, strengths and weaknesses, judgement.",
      },
      {
        q: "Explain why the informal sector is important in megacities. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: provides jobs for migrants without qualifications; supplies cheap goods and services; e.g. Dharavi recycling and leather industries; but no job security, low pay, no taxes.",
      },
      {
        q: "Suggest why quality of life varies within a megacity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: income differences; access to housing, water and sanitation; distance to jobs and services; pollution; contrast between slums and wealthy districts.",
      },
    ],
  },
  '2.1': {
    name: "UK Physical Landscapes and Coastal Change",
    questions: [
      {
        q: "Describe the process of hydraulic action. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: waves/water force air into cracks in rock; 1 mark for: compression of air/water pressure weakens and breaks apart rock.",
      },
      {
        q: "Explain how abrasion erodes a cliff face. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: waves pick up/carry sediment/pebbles/sand; 1 mark for: these are thrown/scraped against cliff face, wearing it away (like sandpaper).",
      },
      {
        q: "What is attrition? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: rocks/pebbles carried by the sea collide with each other, breaking into smaller, rounder, smoother fragments.",
      },
      {
        q: "Describe the difference between constructive and destructive waves. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: constructive waves have a strong swash and weak backwash; destructive waves have a weak swash and strong backwash; constructive waves are low frequency/long wavelength; destructive waves are high frequency/short wavelength; constructive waves build up beaches; destructive waves erode coastlines.",
      },
      {
        q: "Draw and label a diagram to show the formation of a headland and bay. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: alternating bands of hard and soft rock shown; soft rock eroded faster (labelled); headland = hard rock protruding into sea (labelled); bay = where soft rock eroded (labelled). Diagram must be labelled.",
      },
      {
        q: "Explain the process of longshore drift. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: waves approach beach at angle (direction of prevailing wind); swash carries sediment up beach at same angle; backwash carries sediment back down beach at right angles (due to gravity); net movement of sediment along coast. Award 3 from these points.",
      },
      {
        q: "Draw and label a diagram to show how longshore drift transports sediment along a coastline. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: arrows showing swash direction at an angle to beach; arrows showing backwash perpendicular to beach; overall direction of sediment movement indicated; prevailing wind direction labelled.",
      },
      {
        q: "Describe the formation of a cave, arch, stack and stump. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed, accurate explanation of all four features in sequence, using correct terminology throughout. Level 2 (3–4 marks): Explains most stages with some accurate detail; may lack full development. Level 1 (1–2 marks): Basic description of one or two features. Accept: waves erode a weakness/crack in headland → cave formed; continued erosion/two caves on either side join → arch formed; roof of arch collapses due to weathering/weight → stack; stack eroded at base by waves → stump (only visible at low tide).",
      },
      {
        q: "Explain how a spit is formed. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: longshore drift transports sediment along coast; at a change in coastline direction (e.g. estuary/river mouth) the energy drops; deposition occurs; sediment accumulates above water as a spit; spit may curve due to secondary wind/wave direction (accept any 4).",
      },
      {
        q: "What is meant by a wave-cut platform? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a flat/gently sloping rocky surface at base of cliff/at sea level; 1 mark for: formed by erosion of cliff — as cliff retreats, platform is left behind.",
      },
      {
        q: "Describe the formation of a wave-cut notch and explain how it leads to cliff retreat. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: erosion (hydraulic action/abrasion) concentrated at high tide/wave height; undercutting creates a notch at base of cliff; rock above notch is unsupported and collapses; cliff retreats and wave-cut platform is left behind.",
      },
      {
        q: "Draw a labelled diagram of a wave-cut platform. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: cliff face shown; wave-cut notch at base of cliff labelled; wave-cut platform at sea level extending outward labelled.",
      },
      {
        q: "Explain what is meant by solution as a process of coastal erosion. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: slightly acidic seawater; 1 mark for: dissolves soluble minerals in rock (e.g. limestone/chalk).",
      },
      {
        q: "Describe the four main types of coastal transportation. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for correct description of: traction — large boulders rolled along seabed; saltation — pebbles bounce along seabed; suspension — fine sand/silt carried within water; solution — dissolved minerals carried in solution.",
      },
      {
        q: "What is meant by the term \"fetch\"? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the distance of open water over which the wind has blown to generate a wave.",
      },
      {
        q: "Explain why coasts with a longer fetch have more powerful waves. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: longer fetch means wind acts on water over greater distance; 1 mark for: more energy transferred to water / greater wave height and energy.",
      },
      {
        q: "Describe the features of a beach. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two of: accumulation of sand/shingle/sediment; found in sheltered bays; has a berm/berms (ridges) at high tide mark; backed by sand dunes or cliffs.",
      },
      {
        q: "Explain how a bar is different from a spit. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a bar extends all the way across a bay/estuary (connecting two headlands); 1 mark for: a spit is attached to land at one end only and does not seal off a bay.",
      },
      {
        q: "Explain how a tombolo is formed. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: longshore drift deposits sediment; spit builds outward from land; spit reaches and connects to an offshore island, forming a tombolo.",
      },
      {
        q: "Describe the difference between hard engineering and soft engineering at the coast. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: hard engineering uses artificial/man-made structures (e.g. sea walls, groynes); 1 mark for: soft engineering works with natural processes (e.g. beach nourishment, managed retreat).",
      },
      {
        q: "Evaluate the effectiveness of sea walls as a coastal management strategy. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates advantages and disadvantages, reaches a supported conclusion. Level 2 (3–4 marks): Describes advantages and disadvantages with some development. Level 1 (1–2 marks): Basic points. Accept: advantages — effective at reflecting wave energy, long-lasting, protects property; disadvantages — expensive (£5,000–10,000 per metre), can cause increased erosion at base/flanks, visually intrusive, may reflect wave energy increasing erosion elsewhere.",
      },
      {
        q: "Explain how groynes reduce coastal erosion. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: groynes are wooden/rock structures built perpendicular to shore; they interrupt longshore drift; sediment accumulates on updrift side building up beach; wider beach absorbs wave energy/protects cliff.",
      },
      {
        q: "What is beach nourishment? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: adding (imported) sand or shingle to an existing beach; 1 mark for: to replace sediment lost to longshore drift / to widen the beach to absorb wave energy.",
      },
      {
        q: "Explain what is meant by managed retreat (coastal realignment). [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: allowing low-lying coastal land to be flooded/eroded naturally; sea defences not maintained or removed; land is allowed to return to saltmarsh/intertidal habitat; cheapest option but compensates landowners for loss of land.",
      },
      {
        q: "Describe the physical geography of the Holderness Coast. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: located on east coast of Yorkshire/England; cliffs made of soft boulder clay/glacial till; one of the fastest eroding coastlines in Europe (up to 2m per year); approximately 30 villages lost since Roman times.",
      },
      {
        q: "Explain why the Holderness Coast erodes so rapidly. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: cliffs made of soft, easily eroded boulder clay; fetch across North Sea allows powerful destructive waves; long, exposed coastline with few natural protections; waves attack at base, undercutting cliffs (hydraulic action/abrasion); freeze-thaw weakens cliffs; longshore drift removes eroded material quickly.",
      },
      {
        q: "Assess the impact of coastal erosion on communities along the Holderness Coast. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment, balances social, economic and environmental impacts, uses evidence, reaches supported judgement. Level 2 (3–5 marks): Describes a range of impacts with some development. Level 1 (1–2 marks): Basic impacts listed. Accept: loss of homes/properties (e.g. Easington, Skipsea); loss of farmland; threat to gas terminal at Easington; loss of local businesses/tourism; psychological stress for residents; BUT some areas protected (e.g. Hornsea, Mappleton) while others sacrificed — creates inequality/conflict.",
      },
      {
        q: "Explain one conflict that arises from coastal management decisions. [3 marks]",
        marks: 3,
        markScheme: "1 mark for identifying a conflict (e.g. protecting one area increases erosion downdrift); 1 mark for explaining why conflict arises; 1 mark for example (e.g. Mappleton protected — erosion increased south of Mappleton, farmers lost land).",
      },
      {
        q: "What is rock armour (rip rap)? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: large boulders (often imported granite) placed at base of cliff/sea wall to absorb/dissipate wave energy.",
      },
      {
        q: "Describe the formation of Chesil Beach. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: a tombolo/barrier beach connecting Isle of Portland to mainland Dorset; formed by longshore drift depositing shingle over thousands of years; notable for grading of pebbles from west (pea gravel) to east (cricket ball size).",
      },
      {
        q: "Explain how revetments protect a coastline. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: sloping wooden/rock structures placed at base of cliff; absorb and dissipate wave energy; reduce hydraulic action on cliff base; allow water to drain through structure (reducing pressure).",
      },
      {
        q: "Draw a labelled cross-section to show the profile of a destructive wave. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: steep front face shown; high crest; weak swash and strong backwash labelled/indicated.",
      },
      {
        q: "To what extent is soft engineering preferable to hard engineering for managing the coast? [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates both approaches with developed points, uses case study examples, reaches an overall judgement with justification. Level 2 (3–5 marks): Describes advantages of one or both approaches with some comparison. Level 1 (1–2 marks): Basic statements. Accept: soft engineering — cheaper, sustainable, works with nature, creates habitats; BUT may not protect high-value property; hard engineering — reliable, protects specific locations, high value areas; BUT expensive, causes problems elsewhere, visually intrusive. Conclusion should weigh these up.",
      },
      {
        q: "Describe the characteristics of a constructive wave. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for any two of: low, gentle waves; long wavelength; low frequency (6–8 per minute); strong swash, weak backwash; builds up beaches.",
      },
      {
        q: "Explain how freeze-thaw weathering contributes to coastal cliff collapse. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: water enters cracks in cliff; freezes and expands (by ~9%), widening cracks; repeated freeze-thaw cycles enlarge cracks; eventually rock breaks off/cliff collapses.",
      },
      {
        q: "Using a named example, explain the management strategies used to protect a stretch of coastline. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed named example with explanation of at least two strategies, why they were chosen, and their effectiveness. Level 2 (3–4 marks): Named example with description of strategies, limited explanation. Level 1 (1–2 marks): Generic strategies without clear named example. Accept Holderness/Mappleton: rock groynes — reduce longshore drift, protect beach; rock armour — absorb wave energy at cliff base; cost ~£2 million (1991); protected village but increased erosion to south.",
      },
      {
        q: "What is a corrosion/solution coast erosion process? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: seawater dissolves soluble minerals/carbonate rocks such as limestone or chalk.",
      },
      {
        q: "Explain how arches and stacks form from headlands. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: waves erode weaknesses/cracks in headland forming a cave; cave deepens and may break through headland forming an arch; continued erosion weakens arch roof; roof collapses leaving an isolated stack.",
      },
      {
        q: "Draw and label the sequence of formation from headland to stump. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: headland shown with crack/weakness; cave formed at base; arch showing breakthrough; stack and stump shown as separate features. All must be labelled.",
      },
      {
        q: "Assess the social and economic impacts of coastal flooding on low-lying coastlines. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of both social and economic impacts, uses specific evidence or examples, clearly distinguishes between types of impact, reaches a supported overall judgement. Level 2 (3–5 marks): Describes both types of impact with some development or examples. Level 1 (1–2 marks): Basic listing of impacts. Accept social: displacement of communities, loss of life, psychological trauma, disruption to services; economic: damage to property and infrastructure, agricultural land lost, tourism affected, cost of flood defences.",
      },
      {
        q: "Describe the distribution of upland and lowland areas in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: uplands in north and west (Highlands, Lake District, Pennines, Snowdonia); lowlands in south and east (East Anglia, Thames Basin, Fens); Tees–Exe line.",
      },
      {
        q: "Explain how freeze–thaw weathering breaks down rock. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: water enters cracks; freezes and expands by about 9%; widens crack; repeated cycles break off pieces of rock.",
      },
      {
        q: "Describe the process of slumping on a coastline. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: soft rock such as clay becomes saturated after rain; heavier and weaker; moves down a curved slip plane with rotational movement; common on Holderness.",
      },
      {
        q: "Explain how weathering and mass movement contribute to cliff retreat. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: weathering weakens cliff face; mass movement (slumping, rockfall) moves material to the base; waves remove debris; cliff exposed to further erosion so it retreats.",
      },
      {
        q: "Describe the characteristics of igneous, sedimentary and metamorphic rocks. [3 marks]",
        marks: 3,
        markScheme: "1 mark each: igneous — formed from cooled magma, hard (granite, basalt); sedimentary — layers of compressed sediment, often softer (chalk, clay, limestone); metamorphic — changed by heat and pressure, very hard (slate, schist).",
      },
      {
        q: "Explain how geology affects the location of upland and lowland areas in the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: hard igneous/metamorphic rocks in north and west resist erosion forming uplands; softer sedimentary rocks in south and east erode forming lowlands; Tees–Exe line; examples (Dartmoor granite, London Basin clay).",
      },
      {
        q: "Explain how past tectonic and glacial processes shaped the UK's landscapes. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: past plate collisions and volcanic activity formed hard upland rocks; glaciers eroded corries and U-shaped valleys in uplands; glacial deposits (till) cover lowlands.",
      },
      {
        q: "Describe the four options in a Shoreline Management Plan. [4 marks]",
        marks: 4,
        markScheme: "1 mark each: hold the line; advance the line; managed realignment; no active intervention.",
      },
      {
        q: "Explain why coastal management can lead to conflict between different groups. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: homeowners/farmers want protection; defences can increase erosion downdrift (Mappleton/Cowden); limited funding — cost–benefit analysis; conservationists favour natural processes/habitats.",
      },
      {
        q: "Assess the costs and benefits of a named coastal management scheme. [8 marks]",
        marks: 8,
        markScheme: "Level marked: e.g. Mappleton/Holderness or Medmerry — economic, social, environmental costs and benefits; winners and losers; judgement.",
      },
    ],
  },
  '2.2': {
    name: "River Processes and Pressures",
    questions: [
      {
        q: "What is meant by a drainage basin? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the area of land drained by a river and its tributaries.",
      },
      {
        q: "Define the following terms: watershed, confluence, tributary. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: watershed — the boundary/ridge of high land separating two drainage basins; confluence — the point where two rivers/streams join; tributary — a smaller river/stream that flows into a larger river.",
      },
      {
        q: "Explain the difference between infiltration and surface runoff. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: infiltration is water soaking/moving into the soil from the surface; 1 mark for: surface runoff is water flowing over the land surface (when infiltration rate is exceeded).",
      },
      {
        q: "Describe how the long profile of a river changes from source to mouth. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: steep gradient in upper course; gradient becomes gentler in middle course; very gentle/almost flat gradient in lower course; overall the profile is concave upward.",
      },
      {
        q: "Draw and label a diagram to show the long profile and cross-profile of a river in its upper, middle and lower course. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: long profile showing steep-to-gentle gradient; upper course cross-profile — narrow, V-shaped valley; middle course — wider valley, some floodplain; lower course — broad, flat floodplain. All features labelled.",
      },
      {
        q: "Explain how a V-shaped valley and interlocking spurs are formed in the upper course of a river. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: vertical/downward erosion dominates in upper course; river cuts downward into bedrock; valley sides weathered and material falls into river; river lacks energy to erode sideways so valley is V-shaped; river winds around outcrops of hard rock creating interlocking spurs.",
      },
      {
        q: "Draw and label a diagram of a V-shaped valley with interlocking spurs. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: V-shaped valley profile shown; interlocking spurs on alternating sides labelled; river at base of valley labelled.",
      },
      {
        q: "Describe the process of hydraulic action in a river. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: force/pressure of fast-moving water compresses air in cracks in riverbed/bank; 1 mark for: this weakens and breaks apart the rock.",
      },
      {
        q: "Explain how a waterfall is formed. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: river flows over a band of hard (resistant) rock overlying softer rock; soft rock erodes faster, undercutting the hard rock; hard rock overhangs and eventually collapses into plunge pool; plunge pool deepens by abrasion from falling water/load; waterfall retreats upstream over time leaving a gorge.",
      },
      {
        q: "Draw and label a diagram to show the formation of a waterfall and gorge. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: hard rock cap shown above soft rock; plunge pool labelled beneath waterfall; gorge (steep-sided valley) labelled behind waterfall; direction of waterfall retreat indicated.",
      },
      {
        q: "Explain how meanders are formed in the middle and lower course of a river. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: river swings from side to side due to variations in flow; water moves faster on outside bend (erosion by hydraulic action/abrasion → river cliff/steep bank); water moves slower on inside bend (deposition → slip-off slope/point bar); this accentuates the bend over time forming a meander.",
      },
      {
        q: "Describe the formation of an ox-bow lake. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: meander bends become exaggerated over time; necks of meander narrow as erosion occurs on outer bends; river breaks through the neck during a flood; new straight channel forms; deposition seals off old meander loop forming an ox-bow lake.",
      },
      {
        q: "What is a flood plain? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: flat area of land either side of a river in its lower course; 1 mark for: formed by deposition of alluvium (fertile sediment) during repeated flooding.",
      },
      {
        q: "Explain how a levée is formed. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: during a flood, river overflows its banks; velocity decreases as water spreads out over floodplain; heaviest/coarsest material deposited closest to channel; over many floods these deposits build up raised banks (levées) either side of the channel.",
      },
      {
        q: "Describe the features of a delta and explain how it forms. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: flat, low-lying land at river mouth; river splits into many distributaries; forms when river enters sea/lake and velocity drops suddenly; deposition of sediment faster than it can be removed by waves/tides; sediment builds up above water level.",
      },
      {
        q: "Draw and annotate a hydrograph for a river in an urban area after a heavy rainstorm. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: axes labelled (discharge/cumecs on y-axis, time on x-axis); rising limb shown as steep; short lag time shown; high peak discharge labelled.",
      },
      {
        q: "Explain what is meant by lag time on a hydrograph. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: the time difference between peak rainfall and peak discharge; 1 mark for: longer lag time = less flood risk / shorter lag time = greater flood risk.",
      },
      {
        q: "Explain two factors that would increase flood risk in a drainage basin. [4 marks]",
        marks: 4,
        markScheme: "2 marks per factor (1 mark for naming, 1 mark for explanation). Accept: impermeable rock/soil — water cannot infiltrate, more runoff; prolonged/heavy rainfall — ground becomes saturated, more runoff; deforestation — less interception/transpiration, more runoff; urbanisation — tarmac/concrete impermeable, faster runoff; steep slopes — water reaches river faster; snowmelt — large amounts of water released rapidly.",
      },
      {
        q: "Describe how deforestation affects the storm hydrograph of a river. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: less interception by tree canopy; more water reaches ground directly; increased surface runoff; shorter lag time and higher peak discharge on hydrograph.",
      },
      {
        q: "Explain how urbanisation increases flood risk. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: buildings and roads create impermeable surfaces; water cannot infiltrate into soil; surface runoff increases; storm drains channel water rapidly into rivers; lag time decreases; peak discharge increases — greater flood risk.",
      },
      {
        q: "Describe the drainage basin as a system, including inputs, stores and outputs. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: inputs — precipitation (rain, snow); stores — interception, soil moisture, groundwater, channel storage; flows/transfers — infiltration, throughflow, groundwater flow, surface runoff; outputs — evapotranspiration, river discharge to sea.",
      },
      {
        q: "Explain how a dam and reservoir can be used to manage flooding. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: dam built across river valley; reservoir stores excess water during high rainfall; water released in controlled amounts; reduces peak discharge downstream.",
      },
      {
        q: "Evaluate the use of hard engineering to manage flooding. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates both advantages and disadvantages of hard engineering with examples, reaches a supported conclusion. Level 2 (3–4 marks): Describes advantages and disadvantages. Level 1 (1–2 marks): Basic points only. Accept: advantages — reliable, long-lasting protection for settlements; dams provide HEP and water supply; embankments protect large areas; disadvantages — expensive, dams displace communities, trap sediment, alter downstream habitats; channel straightening increases downstream flood risk.",
      },
      {
        q: "Explain how afforestation can reduce flood risk. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: trees intercept rainfall; roots increase infiltration capacity of soil; transpiration returns water to atmosphere; all reduce surface runoff and lag time is increased.",
      },
      {
        q: "What is floodplain zoning? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: restricting types of land use in flood-risk areas of the floodplain; 1 mark for: e.g. only parks/sports fields in highest risk zones — reduced property damage when flooding occurs.",
      },
      {
        q: "Describe the upper course of the River Tees. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: rises in Pennines/Cross Fell; steep gradient; narrow, fast-flowing channel; V-shaped valleys and waterfalls (High Force — one of England’s most powerful waterfalls, ~21m drop); hard igneous rock (whinstone/dolerite of the Whin Sill).",
      },
      {
        q: "Using the River Tees as an example, describe how the river changes from source to mouth. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed description of changes across all three courses with accurate named features/places and correct use of terminology. Level 2 (3–4 marks): Describes changes in two courses, some terminology. Level 1 (1–2 marks): Basic changes. Accept: upper — steep, narrow, V-shaped valleys, High Force waterfall, hard rock; middle — wider valley, meanders, floodplain widens; lower — broad floodplain, levées, Teesside conurbation, industry, mouth at North Sea.",
      },
      {
        q: "Explain how abrasion and attrition differ as river erosion processes. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: abrasion — sediment carried by river scrapes/grinds against riverbed and banks wearing them away; 1 mark for: attrition — rocks/stones carried by river collide with each other, becoming smaller and more rounded.",
      },
      {
        q: "What is throughflow? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: water that has infiltrated into the soil and moves laterally through the soil towards the river channel.",
      },
      {
        q: "Explain how the cross-profile of a river channel changes from source to mouth. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: in upper course — narrow and shallow channel, rough/angular bed; in middle course — wider and deeper, smoother bed due to attrition; in lower course — very wide and deep channel, low gradient, large discharge; channel becomes more efficient downstream.",
      },
      {
        q: "Describe how a flood warning system can reduce the impacts of flooding. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: monitors rainfall and river levels; gives advance warning to people in flood-risk areas; allows time for evacuation of people/valuables; reduces loss of life and property damage.",
      },
      {
        q: "To what extent are soft engineering strategies more sustainable than hard engineering for flood management? [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates sustainability of both approaches with specific examples, considers environmental/social/economic dimensions, reaches a supported overall judgement. Level 2 (3–5 marks): Compares both approaches, some development. Level 1 (1–2 marks): Basic description. Accept: soft — cheaper, environmentally friendly, improves habitats, long-term; hard — effective short-term but expensive, can cause downstream problems, harms ecosystems; conclusion should weigh these and reach a judgement.",
      },
      {
        q: "Explain the processes of traction and saltation in river transportation. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: traction — largest/heaviest boulders rolled along riverbed by force of water; 1 mark for: saltation — smaller pebbles bounced/hopped along riverbed.",
      },
      {
        q: "Explain why deposition occurs in the lower course of a river. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: river slows as gradient decreases; discharge may decrease (e.g. spread over floodplain during flood); when velocity drops below competency, river cannot carry its load; heaviest/largest particles deposited first.",
      },
      {
        q: "Describe two human activities that can increase flood risk. [4 marks]",
        marks: 4,
        markScheme: "2 marks per point. Accept: urbanisation — impermeable surfaces increase runoff (1 mark) causing flashier hydrograph/higher peak discharge (1 mark); deforestation — removes interception and transpiration (1 mark) increasing runoff and reducing lag time (1 mark).",
      },
      {
        q: "What is groundwater flow? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the slowest transfer in the drainage basin — water moves through pores in rock/saturated rock below the water table towards the river.",
      },
      {
        q: "Explain how the falling limb of a hydrograph shows the river returning to base flow. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: the falling limb shows discharge decreasing after peak discharge; 1 mark for: as surface runoff ends, river relies on slower throughflow and groundwater — discharge returns gradually to base flow.",
      },
      {
        q: "Draw and label a cross-section through a meander showing erosion and deposition zones. [3 marks]",
        marks: 3,
        diagram: true,
        markScheme: "1 mark each for: outer bank — river cliff, faster flow, erosion labelled; inner bank — slip-off slope/point bar, slower flow, deposition labelled; arrows indicating water flow pattern across channel.",
      },
      {
        q: "Assess the social, economic and environmental impacts of flooding on a named area. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of all three types of impact using named evidence, balanced and reaches a supported conclusion. Level 2 (3–5 marks): Covers at least two types of impact with some development. Level 1 (1–2 marks): Basic impacts listed. Accept any recent UK/global flood. Social: loss of life, homelessness, trauma, disruption to services; Economic: property damage, loss of business, cost of repairs; Environmental: contamination of water sources, damage to habitats/ecosystems, soil erosion.",
      },
      {
        q: "Explain why a river with steep valley sides and impermeable rock has a shorter lag time than one in a gentle, permeable area. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: steep sides mean water reaches river faster; impermeable rock means water cannot infiltrate; surface runoff is rapid; lag time is therefore shorter; permeable rock allows infiltration/throughflow which is slower, increasing lag time.",
      },
      {
        q: "Using a named example, explain why a flood management scheme was needed. [3 marks]",
        marks: 3,
        markScheme: "Named example, e.g. Banbury: on River Cherwell floodplain; floods in 1998 and 2007; ~150 properties flooded in 1998 costing £12.5m; railway and roads closed; 440+ homes and 70 businesses at risk.",
      },
      {
        q: "Describe the management strategies used in a named UK flood management scheme. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Banbury: 2.9 km clay embankment creating flood storage reservoir (3 million m³); raised A361; flood walls and earth banks; pumping station; biodiversity area.",
      },
      {
        q: "Evaluate the social, economic and environmental issues of a named UK flood management scheme. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. Banbury: social — homes protected, less stress; economic — £18.5m cost vs £100m+ damage prevented, farmland used; environmental — new habitats/hedgerows vs changed floodplain, construction disruption. Judgement required.",
      },
      {
        q: "Describe the main landforms found along the River Tees. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: upper — V-shaped valley, interlocking spurs, High Force waterfall and gorge; middle — meanders; lower — large meanders, ox-bow lakes, floodplain, levees, estuary at Teesmouth.",
      },
    ],
  },
  '2.3': {
    name: "The UK's Evolving Human Landscape",
    questions: [
      {
        q: "Draw a labelled sketch map to show the typical land use zones of a UK city using the Burgess concentric zone model. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: CBD shown at centre; inner city/transition zone correctly placed around CBD; inner/outer suburbs shown; rural-urban fringe at the edge; accurate labels must be present for marks to be awarded.",
      },
      {
        q: "Explain the difference between the Burgess concentric zone model and the Hoyt sector model. [4 marks]",
        marks: 4,
        markScheme: "1 mark for describing Burgess: concentric rings/circles outward from CBD. 1 mark for describing Hoyt: sectors/wedges along transport routes. 1 mark for explaining a key difference: Hoyt accounts for transport corridors, Burgess does not. 1 mark for development point e.g. Hoyt reflects how industry/high-class housing develops along routes; both are simplifications of reality.",
      },
      {
        q: "State one limitation of the Burgess concentric zone model. [1 mark]",
        marks: 1,
        markScheme: "1 mark for any valid limitation: does not account for transport routes; based on Chicago (US city) not UK; ignores physical geography; does not reflect modern out-of-town developments; assumes uniform growth in all directions.",
      },
      {
        q: "Describe the typical housing characteristics of the inner city zone. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: terraced housing; Victorian/Edwardian era housing; small rooms/gardens; back-to-back housing; converted to flats/HMOs; close to former industrial sites; often densely packed streets; some areas have been demolished and redeveloped.",
      },
      {
        q: "Explain why the inner city of many UK cities experienced decline during the late 20th century. [4 marks]",
        marks: 4,
        markScheme: "1 mark for identifying a cause; 1 mark for explaining it. Up to 2 developed points. Causes: deindustrialisation — factories closed, unemployment rose; suburbanisation — wealthier residents moved out; housing deteriorated as landlords did not invest; poverty cycle — area became associated with deprivation; businesses relocated to out-of-town areas; government investment declined. Accept any well-explained points.",
      },
      {
        q: "Describe the characteristics of the outer suburbs in a UK city. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: detached/semi-detached housing; large gardens; newer housing stock; lower population density; good road access/car dependent; near edge of city; good schools/services; quieter; more greenery/parks.",
      },
      {
        q: "What is meant by the rural-urban fringe? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: the zone/area on the edge of a city where urban and rural land uses mix. 1 mark for example of land use: edge retail parks, business parks, out-of-town shopping centres, golf courses, farms, housing estates, transport hubs.",
      },
      {
        q: "Draw and label a diagram to show the differences between a brownfield site and a greenfield site. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: brownfield shown as previously developed/urban land; greenfield shown as undeveloped/rural/agricultural land; at least one advantage of brownfield labelled (e.g. infrastructure present, prevents sprawl); at least one advantage of greenfield labelled (e.g. cheaper to build, less contamination). Diagram must be present.",
      },
      {
        q: "Suggest one effect of the housing shortage on people living in UK cities. [2 marks]",
        marks: 2,
        markScheme: "1 mark for effect: rising house prices/rents; overcrowding; homelessness; young people unable to buy. 1 mark for development: explaining the social or economic impact of that effect.",
      },
      {
        q: "Describe the pattern of traffic congestion in a typical UK city. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: worst in CBD/city centre; peak times morning and evening rush hours; ring roads/orbital routes congested; commuter routes from suburbs into centre; worse on weekdays; near schools at start/end of day; near retail parks at weekends.",
      },
      {
        q: "Evaluate the effectiveness of integrated transport systems as a solution to traffic congestion. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2 marks): simple statements about transport systems with no development. Level 2 (3–4 marks): some explanation of how integrated transport reduces congestion and/or limitations, with some evidence. Level 3 (5–6 marks): balanced evaluation with named examples (e.g. Curitiba BRT, Bristol cycling network, London Congestion Charge + TfL), explaining why it works in some contexts and not others; conclusion reached. Credit: park and ride, BRT, cycle lanes, smart ticketing, bus/train integration.",
      },
      {
        q: "What is meant by urban deprivation? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: a state of poverty/disadvantage affecting people in urban areas. 1 mark for development: multiple overlapping problems e.g. poor housing, unemployment, poor health, low educational attainment, high crime — or mention of Index of Multiple Deprivation (IMD).",
      },
      {
        q: "Describe how the Index of Multiple Deprivation (IMD) is used to measure urban deprivation. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: uses multiple indicators; income, employment, education, health, crime, barriers to housing and services, living environment domains; scores each small area (LSOA); ranks areas nationally; allows comparison between areas; identifies most deprived 10%/20%; updated regularly.",
      },
      {
        q: "Explain how crime and anti-social behaviour can create a cycle of deprivation in urban areas. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each developed point up to 4. Chain of reasoning rewarded: high crime → businesses leave → unemployment rises → more poverty → more crime. OR: fear of crime → residents leave → area seen as undesirable → house prices fall → wealthier people avoid the area → services decline → deprivation worsens.",
      },
      {
        q: "Describe two types of urban pollution and their effects. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each type identified, 1 mark for the effect: Air pollution — from vehicles/industry; causes respiratory illness, e.g. asthma; reduces life expectancy. Noise pollution — from traffic/construction/nightlife; causes stress, hearing loss, disturbed sleep. Water pollution — from surface runoff, sewage, industrial discharge; harms aquatic life, contaminates drinking water. Any two well-explained types accepted.",
      },
      {
        q: "Explain how the London Docklands Development Corporation (LDDC) regenerated the area from 1981 onwards. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): basic description of changes. Level 2 (3–4): explains how specific regeneration strategies improved the area with some reference to the LDDC. Level 3 (5–6): detailed, accurate account covering multiple aspects — new housing (e.g. Butler's Wharf), Canary Wharf financial district, Docklands Light Railway (DLR), London City Airport, enterprise zones attracting investment, media/creative industries. Must reference both physical and economic regeneration for Level 3.",
      },
      {
        q: "Assess the success of the London Docklands regeneration. [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): explains successes or failures but limited balance. Level 3 (5–6): explains both successes and failures with some evidence. Level 4 (7–8): balanced, evidenced evaluation with a clear judgement. Successes: 25,000+ homes built, 100,000+ jobs created, Canary Wharf major financial hub, DLR connectivity, modern housing. Criticisms: gentrification displaced original communities; housing unaffordable for locals; services for wealthy not poor; inequality remained/worsened; original residents did not benefit. Conclusion must weigh evidence.",
      },
      {
        q: "Describe the key features of the Hulme regeneration in Manchester. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for any four of: Hulme was dominated by failed 1960s deck-access tower blocks/crescents; high crime, social problems; City Challenge funding used from 1992; crescents demolished; replaced with lower-density housing; mix of tenures (social, private, owner-occupied); Moss Side and Hulme improved together; new Asda store/retail; community involvement in planning.",
      },
      {
        q: "What is BedZED and where is it located? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: Beddington Zero Energy Development. 1 mark for: Sutton, south London / London Borough of Sutton.",
      },
      {
        q: "Describe three sustainable features of BedZED. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: rooftop wind cowls provide natural ventilation; thick insulation to reduce heat loss; solar panels for electricity; rooftop gardens/green roofs; rainwater recycling; built from recycled/sustainable materials; car-free design/car club; mixed use (homes + offices) to reduce commuting; energy from biomass CHP plant.",
      },
      {
        q: "Explain how Curitiba, Brazil, has become a model of sustainable urban development. [6 marks]",
        marks: 6,
        markScheme: "Level 1 (1–2): simple points about Curitiba. Level 2 (3–4): explains a few sustainable features with some development. Level 3 (5–6): detailed explanation covering multiple aspects — BRT (Bus Rapid Transit) system with dedicated lanes, tube bus stops, integrated ticketing; linear city growth along transport corridors; parks and green spaces to manage flooding; recycling schemes; social housing programmes; sustainable road design. Must explain WHY these are sustainable (reduce car use, reduce emissions, manage resources) for top marks.",
      },
      {
        q: "Describe the benefits of urban green spaces. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: improve physical and mental health/wellbeing; reduce urban heat island effect; absorb CO₂/improve air quality; manage surface water runoff/reduce flooding; provide biodiversity habitats; increase property values; provide recreational space; reduce noise pollution; community cohesion.",
      },
      {
        q: "Explain why some urban residents may have limited access to green spaces. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point + 1 mark development. Points: deprived areas have fewer parks; distance/transport barriers; parks feel unsafe (crime, anti-social behaviour); poor maintenance deters use; lack of awareness; disability/mobility barriers; cultural barriers.",
      },
      {
        q: "Draw and annotate a diagram to show how an integrated transport system works in a city. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: at least two transport modes shown (e.g. bus, train, tram, cycling, walking); connection/interchange points shown; park and ride facility; a label explaining how integration reduces car use or improves accessibility. Diagram must be clear and labelled.",
      },
      {
        q: "Explain how Bristol has developed its cycling infrastructure to improve sustainability. [4 marks]",
        marks: 4,
        markScheme: "1 mark per developed point: segregated cycle lanes on key routes; cycle-friendly road design; Bristol and Bath Railway Path (off-road route); cycle hire scheme; secure cycle parking at stations/offices; investment in cycling as part of transport strategy; Bristol named UK Cycling City; linked to reducing car use and carbon emissions.",
      },
      {
        q: "To what extent has regeneration in UK cities benefited all members of the community? [8 marks]",
        marks: 8,
        markScheme: "Level 1 (1–2): simple statements. Level 2 (3–4): some explanation with limited balance. Level 3 (5–6): explains benefits and drawbacks with evidence, limited conclusion. Level 4 (7–8): evaluates with named evidence (e.g. Docklands, Hulme), reaches a justified conclusion. Benefits: new housing, jobs, improved infrastructure, reduced crime, better services. Drawbacks: gentrification, displacement of original communities, affordability, unequal distribution of benefits. Strong answers will note variation between schemes.",
      },
      {
        q: "State one cause and one effect of suburbanisation in UK cities. [2 marks]",
        marks: 2,
        markScheme: "1 mark for cause: improved transport links; car ownership; desire for more space/greenery; cheaper land on the edge; counter-urbanisation trends. 1 mark for effect: urban sprawl; loss of greenfield land; increased car journeys; decline of inner city; pressure on rural-urban fringe services.",
      },
      {
        q: "Explain the concept of counter-urbanisation and suggest two reasons why it occurs. [4 marks]",
        marks: 4,
        markScheme: "1 mark for definition: movement of people from urban areas to rural areas/smaller settlements. 1 mark each for two reasons: improved road/rail links; internet enabling remote working; desire for lower crime/better quality of life; retirement; cheaper house prices in rural areas; perception that rural areas are safer for children.",
      },
      {
        q: "Describe two negative impacts of urban growth on the environment. [4 marks]",
        marks: 4,
        markScheme: "1 mark for each impact identified, 1 mark for development. Loss of greenfield/agricultural land — reduces biodiversity and food production. Increased surface runoff from impermeable surfaces — flooding risk increases. Air pollution from vehicles/industry — poor air quality, harm to ecosystems. Light pollution — disrupts wildlife habitats. Urban heat island effect — increased energy use for cooling.",
      },
      {
        q: "Describe the characteristics of an area in the rural-urban fringe. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for any three of: mix of urban and rural land uses; out-of-town shopping centres/retail parks; business parks; housing estates; farmland/open countryside; major road junctions; lower density development; golf courses; waste treatment/recycling facilities.",
      },
      {
        q: "Explain why house prices tend to be highest in the outer suburbs and rural-urban fringe of UK cities. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point + 1 mark development, up to 4: larger properties available — more demand from families; lower crime rates — desirable for families; better schools; more green space; less pollution/noise; further from industrial areas; newer housing stock; good transport links make commuting viable despite distance.",
      },
      {
        q: "Describe the distribution of population in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: uneven; high densities in South East/London, Midlands, North West, central Scotland; low densities in Scottish Highlands, mid-Wales, Pennines; over 80% urban.",
      },
      {
        q: "Explain the importance of a named UK city within the UK and the wider world. [4 marks]",
        marks: 4,
        markScheme: "Named city, e.g. London: capital and seat of government; ~a quarter of UK GDP; transport hub; world city — global financial centre, Heathrow, HQs, universities, culture.",
      },
      {
        q: "Explain the impacts of international migration on a named UK city. [4 marks]",
        marks: 4,
        markScheme: "Named city, e.g. London: over a third born abroad; young workforce; 300+ languages; cultural districts (Brick Lane, Southall); pressure on housing and schools in some boroughs.",
      },
      {
        q: "Describe the social and economic opportunities in a named UK city. [4 marks]",
        marks: 4,
        markScheme: "Named city, e.g. London: cultural mix; recreation and entertainment (West End, museums, Olympic Park); employment (finance, tech, tourism); integrated transport (Elizabeth line, Oyster).",
      },
      {
        q: "Describe the environmental opportunities created by urban change in a named UK city. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point, e.g. London: urban greening — National Park City (2019); Queen Elizabeth Olympic Park created parkland and wetlands on contaminated land.",
      },
      {
        q: "Explain the challenges of inequality in a named UK city. [4 marks]",
        marks: 4,
        markScheme: "Named city, e.g. London: rich and poor areas close together; life expectancy gap of 15–20 years; differences in housing, education, health, employment between boroughs.",
      },
      {
        q: "Explain how urban sprawl affects the rural–urban fringe. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: loss of farmland/greenfield; more traffic; growth of commuter settlements (e.g. Sevenoaks, Reading); rising house prices and decline of village services; pressure on green belt.",
      },
      {
        q: "Evaluate how effectively a UK city is tackling air pollution. [6 marks]",
        marks: 6,
        markScheme: "Level marked, e.g. London: ULEZ expanded to all of Greater London (2023); cleaner buses; cycling infrastructure; pollution has fallen but still causes early deaths; costs to low-income drivers. Judgement required.",
      },
      {
        q: "Describe the features of a science or business park. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point, e.g. Cambridge Science Park: founded 1970; 100+ companies; ~7,000 workers in biotech/IT; links to university; good road/air links; attractive environment.",
      },
      {
        q: "Explain how one modern industrial development has been made more environmentally sustainable. [4 marks]",
        marks: 4,
        markScheme: "Named example, e.g. Torr Quarry: ~75% of stone transported by rail; screening banks and tree planting; quarry floor restored as lakes and habitats; blasting limited to set times.",
      },
      {
        q: "Describe improvements to the UK's transport infrastructure. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: Elizabeth line (2022); HS2 Phase 1; road upgrades (A14); port developments (Liverpool2, London Gateway); Heathrow third runway debate.",
      },
      {
        q: "Evaluate the strategies used to resolve regional differences in the UK. [6 marks]",
        marks: 6,
        markScheme: "Level marked: Northern Powerhouse; devolution to elected mayors; enterprise zones and freeports; levelling up funds; moving government jobs. Evaluate effectiveness — gaps persist; HS2 northern legs cancelled. Judgement required.",
      },
      {
        q: "Describe the differences between core and peripheral regions of the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: population density; employment and income; age structure; infrastructure and services; examples (London vs Highlands).",
      },
      {
        q: "Explain why some rural areas of the UK are growing while others are declining. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: accessible rural areas grow through counter-urbanisation and commuting; remote rural areas decline as young people leave for jobs and education; ageing populations; service decline.",
      },
      {
        q: "Explain the impact of migration on the UK's population. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: major part of population growth; younger workforce; fills skills shortages (NHS, construction, agriculture); concentrated in cities; cultural diversity; pressure on services in some areas.",
      },
      {
        q: "Describe how retailing has changed in the UK. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: growth of out-of-town centres; online shopping; high street closures; conversion to housing/leisure.",
      },
      {
        q: "Explain the links between urban and rural areas. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: commuting; food and water supply; recreation; services and jobs; rural–urban fringe.",
      },
      {
        q: "Describe the changes in the UK's employment structure since 1970. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: primary under 2%; secondary fell from ~30% to <8%; tertiary over 80%; growth of quaternary.",
      },
    ],
  },
  '2.4': {
    name: "Geographical Investigations",
    questions: [
      {
        q: "What is meant by the term \"geographical enquiry\"? [1 mark]",
        marks: 1,
        markScheme: "1 mark: an investigation into a geographical question, following a sequence of stages from question to evaluation.",
      },
      {
        q: "Name the six stages of the geographical enquiry process. [3 marks]",
        marks: 3,
        markScheme: "1 mark per two correct stages: suitable question; selecting, measuring and recording data; processing and presenting data; describing, analysing and explaining; reaching conclusions; evaluation.",
      },
      {
        q: "State the title of one of your fieldwork enquiries. [1 mark]",
        marks: 1,
        markScheme: "1 mark: a clear, geographical question or hypothesis linked to a named location.",
      },
      {
        q: "Explain why your enquiry question was suitable for geographical investigation. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: links to geographical theory; can be investigated with measurable data; manageable in time available; safe and accessible location.",
      },
      {
        q: "Explain the geographical theory that your physical enquiry was based on. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: e.g. Bradshaw model — width, depth, velocity and discharge increase downstream, gradient and particle size decrease; explained by more tributaries and erosion/attrition.",
      },
      {
        q: "Define the term \"secondary data\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: data collected by someone else, e.g. census data, maps, Environment Agency data.",
      },
      {
        q: "Give an example of secondary data you used and explain why it was useful. [2 marks]",
        marks: 2,
        markScheme: "1 mark: named secondary source (e.g. Index of Multiple Deprivation, OS map, flood data); 1 mark: provided context/comparison/larger dataset.",
      },
      {
        q: "Describe one primary data collection method used in your physical enquiry. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point of detail: what was measured; equipment; procedure (e.g. depth measured with metre rule at 10 equal intervals across the channel); number of repeats.",
      },
      {
        q: "Describe one primary data collection method used in your human enquiry. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: e.g. environmental quality survey using bipolar scores 1–5 for litter, graffiti, green space; at each site on a transect; averaged across group.",
      },
      {
        q: "Explain the difference between random and systematic sampling. [2 marks]",
        marks: 2,
        markScheme: "1 mark: random — each item has an equal chance of selection (random number tables); 1 mark: systematic — samples taken at regular intervals (every 10 m / every 5th person).",
      },
      {
        q: "Explain when stratified sampling would be used. [2 marks]",
        marks: 2,
        markScheme: "1 mark: when a population has sub-groups of different sizes; 1 mark: to ensure each group is represented in proportion (e.g. age groups in a questionnaire).",
      },
      {
        q: "Explain why you chose your sampling method. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point linked to own enquiry: reduces bias; covers area evenly; practical in time available; representative.",
      },
      {
        q: "Describe two risks in your fieldwork and how you reduced them. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: risk (1) + matching control (1), e.g. traffic — use pavements/crossings; drowning — wellingtons, group work; lone working — stay in pairs.",
      },
      {
        q: "Name two techniques used to present fieldwork data. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: line graph, bar chart, scatter graph, pie chart, cross-section, choropleth map, radar chart, annotated photograph, flow-line map.",
      },
      {
        q: "Justify the use of one data presentation technique in your enquiry. [3 marks]",
        marks: 3,
        markScheme: "1 mark: technique named; 1–2 marks: why suitable (e.g. scatter graph shows relationship between distance and width; line of best fit shows trend).",
      },
      {
        q: "Explain one limitation of a data presentation technique you used. [2 marks]",
        marks: 2,
        markScheme: "1 mark: limitation (e.g. pie chart can only show proportions/too many segments); 1 mark: development.",
      },
      {
        q: "Calculate the mean of the following river depths: 0.20, 0.35, 0.40, 0.25, 0.30 m. [1 mark]",
        marks: 1,
        markScheme: "1 mark: 0.30 m.",
      },
      {
        q: "Calculate the median of: 4, 9, 2, 7, 5, 8, 3. [1 mark]",
        marks: 1,
        markScheme: "1 mark: 5.",
      },
      {
        q: "Calculate the range of: 12, 25, 8, 19, 30. [1 mark]",
        marks: 1,
        markScheme: "1 mark: 22.",
      },
      {
        q: "Calculate the percentage change if pedestrian counts rose from 40 to 60. [2 marks]",
        marks: 2,
        markScheme: "1 mark for method ((60−40)/40 × 100); 1 mark for answer: 50%.",
      },
      {
        q: "Explain the purpose of calculating the interquartile range. [2 marks]",
        marks: 2,
        markScheme: "1 mark: shows the spread of the middle 50% of data; 1 mark: not affected by extreme values/anomalies.",
      },
      {
        q: "Describe the results of your physical enquiry. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: pattern/trend described with data from own enquiry; reference to anomalies; use of statistics.",
      },
      {
        q: "Explain the results of your physical enquiry using geographical theory. [4 marks]",
        marks: 4,
        markScheme: "1 mark per explained point linked to theory, e.g. width increased downstream because more tributaries add water and lateral erosion widens channel.",
      },
      {
        q: "Identify and suggest a reason for one anomaly in your results. [2 marks]",
        marks: 2,
        markScheme: "1 mark: anomaly identified with data; 1 mark: plausible reason (e.g. human error, local obstruction, bedrock).",
      },
      {
        q: "State the conclusion of one of your enquiries. [2 marks]",
        marks: 2,
        markScheme: "1 mark: answers original question/hypothesis; 1 mark: supported with evidence from results.",
      },
      {
        q: "Explain how far your results supported your hypothesis. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: degree of support with data; anomalies; limitations; links to theory.",
      },
      {
        q: "Evaluate the accuracy and reliability of your data collection. [6 marks]",
        marks: 6,
        markScheme: "Level marked: specific problems (equipment, sample size, timing, human error, weather); effect on results; improvements suggested; judgement.",
      },
      {
        q: "Suggest two ways in which your enquiry could be improved. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: improvement (1) + why it would improve results (1): more sites; repeat on different days; better equipment (flow meter); larger questionnaire sample.",
      },
      {
        q: "Suggest how your enquiry could be extended. [2 marks]",
        marks: 2,
        markScheme: "1 mark: extension (e.g. compare with another river/city; repeat in another season); 1 mark: what it would add.",
      },
      {
        q: "Explain why a conclusion based on fieldwork data may not be reliable. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: small sample size; single visit; equipment limitations; subjective methods; human error.",
      },
      {
        q: "Explain the difference between correlation and causation. [2 marks]",
        marks: 2,
        markScheme: "1 mark: correlation — a relationship between two variables; 1 mark: causation — one variable directly causes change in the other; correlation does not prove causation.",
      },
      {
        q: "Describe how to give a six-figure grid reference. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: read eastings first (along the bottom), then northings; estimate tenths of the square for third and sixth figures; \"along the corridor and up the stairs\".",
      },
      {
        q: "Explain why fieldwork in two contrasting environments is required. [2 marks]",
        marks: 2,
        markScheme: "1 mark: allows study of physical and human geography; 1 mark: shows how different methods and environments compare/interaction between physical and human.",
      },
      {
        q: "Suggest why questionnaires may give biased results. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: only certain people willing to answer; leading questions; interviewer influence; time/place affects who is asked; small sample.",
      },
      {
        q: "Evaluate how effectively your human enquiry methods allowed you to answer your question. [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed evaluation of named methods from own enquiry, strengths and weaknesses linked to the conclusion, with judgement. Level 2: some evaluation. Level 1: description only.",
      },
      {
        q: "Describe the two investigations required by Edexcel B. [2 marks]",
        marks: 2,
        markScheme: "1 mark: physical — coasts or rivers; 1 mark: human — dynamic urban areas or changing rural settlements.",
      },
      {
        q: "Distinguish between quantitative and qualitative data, giving an example of each. [4 marks]",
        marks: 4,
        markScheme: "2 marks each: quantitative — numerical data (e.g. pebble size, pedestrian counts); qualitative — descriptive data (e.g. interviews, photographs, field sketches).",
      },
      {
        q: "Describe how you would measure a beach profile. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: use ranging poles placed at breaks of slope; measure distance with tape; measure angle with clinometer; repeat from sea to back of beach; at regular intervals along the coast.",
      },
      {
        q: "Explain how you would investigate changes in rural services. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: choose settlements of different sizes; record services present; questionnaires on use of services; secondary census data; compare with settlement size.",
      },
      {
        q: "Suggest how an unfamiliar investigation could be improved. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: more sites; repeat on different dates; larger samples; more accurate equipment; combine with secondary data.",
      },
      {
        q: "Evaluate the reliability of your physical investigation conclusions. [8 marks]",
        marks: 8,
        markScheme: "Level marked: specific named methods and results; limitations (sample size, timing, equipment, human error); effect on conclusions; improvements; judgement.",
      },
    ],
  },
  '3.1': {
    name: "People and the Biosphere",
    questions: [
      {
        q: "Explain the nutrient cycle in a tropical rainforest. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: nutrients stored in three places — biomass (plants), litter (dead matter on floor), soil; rapid decomposition by bacteria/fungi in warm, moist conditions releases nutrients from litter to soil quickly; leaching — heavy rainfall washes nutrients down through soil; most nutrients in biomass store; soils are nutrient-poor (infertile) if trees are removed.",
      },
      {
        q: "Describe the concept of interdependence in the tropical rainforest. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: plants and animals depend on each other; e.g. trees rely on insects for pollination; animals rely on trees for food and shelter; if one species is removed it affects others; trees cycle water (transpiration) affecting local rainfall; shows food web/ecological interdependence.",
      },
      {
        q: "Explain how deforestation contributes to climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: trees store carbon (carbon sink); burning/decomposing trees releases stored CO₂ into atmosphere; deforestation accounts for ~10–15% of global CO₂ emissions; loss of trees reduces ability to absorb future CO₂; positive feedback loop.",
      },
      {
        q: "Describe the role of decomposers in the nutrient cycle of a tropical rainforest. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: bacteria and fungi break down dead plant/animal material in litter layer; 1 mark for: releases nutrients back into soil quickly (aided by warm, moist conditions) — completing the nutrient cycle.",
      },
      {
        q: "Draw and annotate a diagram to show the nutrient cycle of a tropical rainforest. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: three stores shown (biomass, litter, soil); arrows showing flows between stores (decomposition from litter to soil; uptake from soil to biomass; leaf fall from biomass to litter); leaching shown (arrow from soil downward); precipitation/weathering inputs shown.",
      },
      {
        q: "Assess the social, economic and environmental impacts of deforestation in tropical rainforests. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of all three impact types with specific evidence/examples, reaches a supported overall judgement with consideration of most significant impact. Level 2 (3–5 marks): Covers at least two impact types with some development. Level 1 (1–2 marks): Basic impacts listed. Accept: environmental — species extinction, climate change, soil erosion, hydrological disruption; economic — short-term profit for TNCs/governments but long-term loss of ecosystem services; social — displacement of indigenous peoples, poverty, health risks; judgement on which is most significant.",
      },
      {
        q: "Describe the global distribution of tropical rainforests and hot deserts. [4 marks]",
        marks: 4,
        markScheme: "2 marks each: rainforests between Tropics, close to Equator — Amazon, Congo, SE Asia; hot deserts around 30°N and S — Sahara, Arabian, Kalahari, Australian; linked to rising and sinking air.",
      },
      {
        q: "Explain what is meant by a food web and how energy flows through it. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: shows feeding relationships between organisms; producers capture sunlight; energy passes to primary, secondary and tertiary consumers; energy lost at each trophic level; decomposers recycle nutrients.",
      },
      {
        q: "Define the term \"biosphere\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: the living layer of the Earth including all plants, animals and other organisms.",
      },
      {
        q: "Describe the global distribution of tropical rainforests. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: between the Tropics, close to the Equator; Amazon (South America), Congo (Africa), South-East Asia/Indonesia.",
      },
      {
        q: "Describe the global distribution of hot deserts. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: around 30° north and south; Sahara, Arabian, Kalahari, Australian, Atacama deserts; western sides of continents.",
      },
      {
        q: "Describe the global distribution of the taiga. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: 50–70°N; Canada, Alaska, Scandinavia, Russia/Siberia; Northern Hemisphere only.",
      },
      {
        q: "Explain how temperature and precipitation affect the distribution of biomes. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: hot and wet → rainforest; hot and dry → desert; seasonal rain → savanna; cold with short summer → taiga/tundra; link to pressure belts.",
      },
      {
        q: "Explain how altitude affects ecosystems. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: temperature falls ~6.5°C per 1,000 m; shorter growing season; vegetation changes in bands; e.g. Kilimanjaro from savanna to forest to alpine to ice.",
      },
      {
        q: "Explain how rock type and soils can influence local ecosystems. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: rock type affects drainage (permeable chalk vs impermeable clay); soil nutrients and acidity; e.g. chalk grassland, heather moorland on acidic soils, peat bogs on waterlogged ground.",
      },
      {
        q: "Describe the goods provided by the biosphere. [3 marks]",
        marks: 3,
        markScheme: "1 mark per good: food; fresh water; timber; fuel wood; medicines; fibres.",
      },
      {
        q: "Explain how the biosphere regulates the atmosphere. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: photosynthesis absorbs CO₂; releases oxygen; forests and soils store carbon; regulates climate; deforestation releases CO₂.",
      },
      {
        q: "Explain how the biosphere helps regulate water and soil. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: vegetation intercepts rainfall; roots increase infiltration, reducing flooding; roots bind soil reducing erosion; wetlands filter and purify water.",
      },
      {
        q: "Describe the difference between provisioning, regulating, supporting and cultural services. [4 marks]",
        marks: 4,
        markScheme: "1 mark each: provisioning — goods (food, timber); regulating — climate, water, air quality; supporting — nutrient cycling, soil formation; cultural — recreation, spiritual value.",
      },
      {
        q: "Explain how indigenous people depend on the biosphere. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: food (hunting, fishing, gathering); shelter and tools; medicines; cultural and spiritual identity; e.g. Yanomami in Amazon, Sámi in Arctic.",
      },
      {
        q: "Explain how the biosphere is exploited for commercial purposes. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: timber logging; palm oil and soya plantations; mining and oil extraction; fishing; biofuels; often for global markets.",
      },
      {
        q: "Explain why the demand for food is increasing. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: population growth; rising incomes and meat consumption; urbanisation; biofuels.",
      },
      {
        q: "Explain why the demand for water is increasing. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: population growth; farming (irrigation uses ~70%); industry; rising living standards; urbanisation.",
      },
      {
        q: "Explain why the demand for energy is increasing. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: economic development in emerging economies; population growth; technology and appliances; transport and car ownership.",
      },
      {
        q: "Explain the impact of increasing resource demand on the biosphere. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: deforestation; overfishing; over-abstraction of water; pollution; habitat loss and biodiversity decline.",
      },
      {
        q: "Describe Malthus's theory of population and resources. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: 1798; population grows geometrically; food grows arithmetically; population outstrips food; positive checks (famine, disease, war); preventive checks.",
      },
      {
        q: "Describe Boserup's theory of population and resources. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: 1965; \"necessity is the mother of invention\"; population pressure drives innovation; food supply increases through technology (e.g. irrigation, fertilisers).",
      },
      {
        q: "Give one piece of evidence that supports Malthus and one that supports Boserup. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: Malthus — regional famines (Somalia 2011), water shortages, ~700m undernourished; Boserup — Green Revolution, food production outpacing population since 1960.",
      },
      {
        q: "Assess which theory, Malthus or Boserup, best explains population and resources today. [8 marks]",
        marks: 8,
        markScheme: "Level marked: evidence for each, limitations, scale (global vs regional), environmental resources; supported judgement.",
      },
      {
        q: "Explain why biodiversity is important to people. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: source of food and medicines; ecosystem resilience; pollination; genetic resources for crops; tourism and cultural value.",
      },
      {
        q: "Explain how deforestation reduces ecosystem services. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: less carbon storage — more CO₂; less interception — more flooding; soil erosion; loss of biodiversity and medicines; loss of livelihoods for indigenous people.",
      },
      {
        q: "Suggest why tropical rainforests have higher biodiversity than the taiga. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: warm, wet all year so plants grow continuously; layered structure creates many niches; long, stable evolutionary history; taiga has harsh winters and short growing season.",
      },
      {
        q: "Explain why pollination is an important ecosystem service. [2 marks]",
        marks: 2,
        markScheme: "1 mark: insects and other animals transfer pollen; 1 mark: many food crops depend on pollination, so it supports food production.",
      },
      {
        q: "Describe how the biosphere provides cultural services. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: recreation and tourism (national parks, ecotourism); spiritual and religious value; aesthetic beauty; education and research.",
      },
      {
        q: "Explain why the biosphere is described as a life-support system. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: provides goods; regulates atmosphere and climate; regulates water and soil; supports food production through nutrient cycling and pollination.",
      },
      {
        q: "Suggest how increasing demand for energy could affect the biosphere. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: oil and gas extraction in sensitive areas (Arctic, oil sands in taiga); HEP flooding forests; biofuel plantations replacing forest; pollution and climate change.",
      },
      {
        q: "Explain one way in which technology could help meet future resource demand. [2 marks]",
        marks: 2,
        markScheme: "1 mark: technology named (e.g. desalination, GM crops, renewable energy); 1 mark: how it increases supply or efficiency.",
      },
      {
        q: "Describe the climate of the tundra biome. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: very cold winters (below −30°C); short cool summer; low precipitation, mostly snow.",
      },
      {
        q: "Explain why soils are important to the biosphere. [2 marks]",
        marks: 2,
        markScheme: "1 mark: store nutrients and water for plants; 1 mark: support food production and store carbon.",
      },
      {
        q: "Compare the biosphere's value to indigenous people and to global companies. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: indigenous — subsistence, culture, sustainable use; companies — commercial profit, global markets, large-scale exploitation; conflicts over land.",
      },
    ],
  },
  '3.2': {
    name: "Forests under Threat",
    questions: [
      {
        q: "Describe the climate of a tropical rainforest. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: located near equator; high temperatures throughout year (~27°C/no seasons); high annual rainfall (~2000mm+); rainfall is convectional (afternoon storms); low pressure (ITCZ); high humidity.",
      },
      {
        q: "Explain why tropical rainforests receive high levels of rainfall. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: located near equator where sun is overhead/intense heating; air heated and rises (low pressure/ITCZ); rapid evapotranspiration from trees adds moisture; rising air cools and condenses → heavy convectional rainfall most afternoons.",
      },
      {
        q: "Draw and label a diagram to show the four layers of a tropical rainforest. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: emergent layer (tallest trees ~40m+) labelled; canopy (continuous layer ~20–30m) labelled; understorey (shade-tolerant shrubs, small trees ~5–20m) labelled; forest floor (dark, little vegetation, leaf litter) labelled.",
      },
      {
        q: "Explain the nutrient cycle in a tropical rainforest. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: nutrients stored in three places — biomass (plants), litter (dead matter on floor), soil; rapid decomposition by bacteria/fungi in warm, moist conditions releases nutrients from litter to soil quickly; leaching — heavy rainfall washes nutrients down through soil; most nutrients in biomass store; soils are nutrient-poor (infertile) if trees are removed.",
      },
      {
        q: "Explain two plant adaptations to the tropical rainforest environment. [4 marks]",
        marks: 4,
        markScheme: "2 marks per adaptation: buttress roots — large fin-like roots extending from trunk (1 mark) provide stability for tall trees in shallow, nutrient-poor soils (1 mark); drip tips — pointed/elongated leaf tips (1 mark) allow excess water to drain off quickly, preventing fungal growth (1 mark). Also accept: lianas (climbing plants reach light), epiphytes (grow on branches to reach light), waxy/large leaves to maximise photosynthesis in low light.",
      },
      {
        q: "What is meant by biodiversity? [1 mark]",
        marks: 1,
        markScheme: "1 mark for: the variety of plant and animal species in an area/ecosystem.",
      },
      {
        q: "Explain why tropical rainforests have such high biodiversity. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: consistent warm and wet climate throughout year supports year-round growth; multiple layers provide many different habitats and niches; high primary productivity — abundant food supply; millions of years of evolution without ice ages (stable environment); estimated 50% of world's species in rainforests.",
      },
      {
        q: "Explain two causes of deforestation in tropical rainforests. [4 marks]",
        marks: 4,
        markScheme: "2 marks per cause. Accept: commercial logging — valuable hardwood timber (mahogany, teak) exported for profit (1 mark) creates large clearings and access roads for further deforestation (1 mark); cattle ranching — forest cleared for beef production (1 mark) major cause in Amazon — approx 70% of Amazon deforestation (1 mark); mining — mineral extraction requires forest clearance; HEP dams — flood large areas; road building — Amazon highways open up forest.",
      },
      {
        q: "Using the Amazon Basin as an example, describe the main causes of deforestation. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed explanation of multiple causes with specific Amazon facts/data. Level 2 (3–4 marks): Describes several causes with some Amazon detail. Level 1 (1–2 marks): Basic causes. Accept: cattle ranching (70% of deforestation), soya farming for animal feed, logging (legal/illegal), mining (e.g. iron ore at Carajás), HEP dams (Belo Monte Dam), Trans-Amazon Highway, population pressure/subsistence farming, government development policies.",
      },
      {
        q: "Explain the impact of deforestation on the hydrological cycle. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: trees intercept rainfall and take up water through roots; transpiration returns water to atmosphere (30–50% of Amazon rainfall recycled through trees); removal of trees reduces transpiration; less cloud formation and rainfall; surface runoff increases (soil has no protection); rivers carry more sediment; local and regional climate may become drier.",
      },
      {
        q: "Explain the impact of deforestation on biodiversity. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: destruction of habitats for millions of species; estimated 137 species extinct per day globally due to deforestation; specialist species (those with narrow niches) particularly vulnerable; loss of genetic diversity; reduces ecosystem resilience.",
      },
      {
        q: "Describe the impact of deforestation on indigenous peoples. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: loss of land/homes for tribes who depend on forest; loss of traditional knowledge and ways of life; exposure to western diseases (no immunity); violence and conflict with loggers/farmers; some tribes face extinction (uncontacted tribes); displacement to urban areas with poverty.",
      },
      {
        q: "Explain how deforestation contributes to climate change. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: trees store carbon (carbon sink); burning/decomposing trees releases stored CO₂ into atmosphere; deforestation accounts for ~10–15% of global CO₂ emissions; loss of trees reduces ability to absorb future CO₂; positive feedback loop.",
      },
      {
        q: "Explain how deforestation leads to soil erosion. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: tree roots bind/hold soil together; removal of trees leaves soil exposed to heavy rain; no canopy to intercept rainfall (raindrops hit soil directly, breaking it up — splash erosion); nutrients leached from unprotected soil; laterite soils can harden (laterisation) when exposed to sun making land infertile.",
      },
      {
        q: "What is selective logging? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: only certain (mature/valuable) trees are cut down rather than clearing all trees; 1 mark for: allows forest to regenerate naturally; reduces overall damage to ecosystem compared to clear-felling.",
      },
      {
        q: "What is a debt-for-nature swap? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: an agreement where a country's debt is reduced/cancelled in exchange for protecting areas of natural habitat (e.g. rainforest); 1 mark for: provides economic incentive for developing country governments to conserve forests rather than develop them.",
      },
      {
        q: "Explain how international agreements help to protect tropical rainforests. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: e.g. REDD+ (Reducing Emissions from Deforestation and Degradation) — pays countries to protect forests; Paris Agreement — countries commit to reducing emissions including from deforestation; CITES controls trade in endangered species; FSC (Forest Stewardship Council) certification ensures sustainable timber trade.",
      },
      {
        q: "Describe two characteristics of the emergent layer of a tropical rainforest. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for: tallest trees (40–60m); widely spaced; umbrella-shaped crowns spread to maximise light; exposed to strong winds, rain, intense sunlight; home to eagles, butterflies, some monkeys.",
      },
      {
        q: "Explain the adaptation of buttress roots in tropical rainforest trees. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: large, flat, fin-like roots extending from base of trunk; 1 mark for: spread weight of very tall trees / anchor trees in shallow, nutrient-poor soils.",
      },
      {
        q: "Compare the soil characteristics of a tropical rainforest with an area that has been deforested. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: rainforest — nutrient-poor subsoil but rich litter layer on surface; rapid nutrient cycling keeps nutrients in biomass; deep red/laterite soils; thin fertile layer; deforested — litter layer removed/not replenished; soils lose nutrients through leaching and erosion; laterite can harden to impermeable crust; soil degradation within a few years.",
      },
      {
        q: "Describe the role of decomposers in the nutrient cycle of a tropical rainforest. [2 marks]",
        marks: 2,
        markScheme: "1 mark for: bacteria and fungi break down dead plant/animal material in litter layer; 1 mark for: releases nutrients back into soil quickly (aided by warm, moist conditions) — completing the nutrient cycle.",
      },
      {
        q: "Using Malaysia or another named example, explain the conflict between development and conservation in a tropical rainforest. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Detailed explanation of specific development pressures and conservation arguments with named evidence from chosen location. Level 2 (3–4 marks): Describes both perspectives with some specific detail. Level 1 (1–2 marks): Generic points. Accept Malaysia/Borneo: palm oil plantations for economic growth vs biodiversity loss (orangutan habitat); logging for timber exports vs deforestation; poverty alleviation through development vs long-term sustainability.",
      },
      {
        q: "To what extent can tropical rainforests be managed sustainably? [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Evaluates a range of sustainable management strategies with specific examples, considers their effectiveness and limitations, reaches a supported judgement. Level 2 (3–5 marks): Describes management strategies, some evaluation. Level 1 (1–2 marks): Basic strategies. Accept: selective logging, replanting, ecotourism, international agreements, protected areas, debt-for-nature swaps; limitations — enforcement difficult, economic pressures for development, corruption, poverty; conclusion should weigh possibilities against challenges.",
      },
      {
        q: "Draw and annotate a diagram to show the nutrient cycle of a tropical rainforest. [4 marks]",
        marks: 4,
        diagram: true,
        markScheme: "1 mark each for: three stores shown (biomass, litter, soil); arrows showing flows between stores (decomposition from litter to soil; uptake from soil to biomass; leaf fall from biomass to litter); leaching shown (arrow from soil downward); precipitation/weathering inputs shown.",
      },
      {
        q: "Explain one animal adaptation to the tropical rainforest environment. [2 marks]",
        marks: 2,
        markScheme: "1 mark for naming an appropriate adaptation with correct animal; 1 mark for explaining its purpose. Accept: tree frog — sticky pads on feet (1 mark) enable climbing in tree layers to find food/avoid predators (1 mark); toucan — large, colourful bill (1 mark) to reach and break open fruits in dense vegetation (1 mark); sloth — slow movement and green algae on fur (1 mark) as camouflage to avoid predators (1 mark).",
      },
      {
        q: "Describe the ITCZ and its role in creating the equatorial climate. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: ITCZ = Inter-Tropical Convergence Zone — a band of low pressure near the equator where north-east and south-east trade winds converge; intense solar heating causes warm air to rise constantly; creates persistent cloud and convectional rainfall; moves slightly north and south with seasons following overhead sun.",
      },
      {
        q: "What is meant by convectional rainfall? [2 marks]",
        marks: 2,
        markScheme: "1 mark for: intense solar heating of ground/surface causes rapid evaporation and rising air; 1 mark for: rising air cools and condenses forming cumulonimbus clouds → heavy afternoon thunderstorms.",
      },
      {
        q: "Explain the concept of leaching and its importance in the tropical rainforest nutrient cycle. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: heavy rainfall washes (leaches) soluble nutrients downward through soil profile; nutrients are removed from the upper soil horizon; this means soils are naturally infertile; explains why clearing rainforest leads to rapid soil degradation — nutrients go with vegetation, not stored in soil.",
      },
      {
        q: "Assess the effectiveness of protected areas (national parks/reserves) in conserving tropical rainforests. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates protected areas with specific examples, considers effectiveness and limitations, reaches a supported conclusion. Level 2 (3–4 marks): Describes advantages and disadvantages. Level 1 (1–2 marks): Basic points. Accept: advantages — legal protection, habitat conservation, enforced boundaries, ecotourism revenue; limitations — illegal logging/poaching difficult to stop, buffer zones needed, local communities may resent exclusion, enforcement requires funding, corruption, total area insufficient.",
      },
      {
        q: "Describe the characteristics of the canopy layer of a tropical rainforest. [2 marks]",
        marks: 2,
        markScheme: "1 mark each for: forms a continuous (closed) layer of interlocking branches and leaves at 20–30m; intercepts ~80% of sunlight; most animal diversity found here; leaves have waxy surfaces; bromeliads and orchids (epiphytes) grow here.",
      },
      {
        q: "Explain how subsistence farming contributes to deforestation in the Amazon. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: poor farmers move into forest areas along roads; practice slash-and-burn (clear small areas, burn trees to release nutrients); farm for a few years until soil exhausted; move on to clear more forest — shifting cultivation; small scale individually but large cumulative effect.",
      },
      {
        q: "Explain how replanting/reforestation can help manage tropical rainforests. [3 marks]",
        marks: 3,
        markScheme: "1 mark each for: trees planted to replace those cut down; restores forest cover; can restore habitats and biodiversity over time; BUT monoculture plantations less biodiverse than natural rainforest; takes many decades for mature forest to re-establish; difficult to replicate full ecosystem complexity.",
      },
      {
        q: "Assess the social, economic and environmental impacts of deforestation in tropical rainforests. [8 marks]",
        marks: 8,
        markScheme: "Level 3 (6–8 marks): Detailed assessment of all three impact types with specific evidence/examples, reaches a supported overall judgement with consideration of most significant impact. Level 2 (3–5 marks): Covers at least two impact types with some development. Level 1 (1–2 marks): Basic impacts listed. Accept: environmental — species extinction, climate change, soil erosion, hydrological disruption; economic — short-term profit for TNCs/governments but long-term loss of ecosystem services; social — displacement of indigenous peoples, poverty, health risks; judgement on which is most significant.",
      },
      {
        q: "Explain why clearing a tropical rainforest makes its soils infertile. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: most nutrients are stored in the biomass, so they are removed when trees are cut down or burned; no new leaf litter falls, so the nutrient supply to the soil stops; heavy rainfall leaches remaining nutrients out of the thin soil; bare soil is eroded by rain splash and surface runoff; exposed soil can harden (laterisation); crop yields fall within a few years, so farmers move on to clear more forest.",
      },
      {
        q: "Explain the role of international agreements in protecting tropical rainforests. [4 marks]",
        marks: 4,
        markScheme: "1 mark each for: CITES — controls trade in endangered species; REDD+ (UN) — pays developing countries to reduce emissions from deforestation; Paris Agreement includes forest protection commitments; debt-for-nature swaps — debt cancelled in return for conservation; BUT enforcement is weak, countries may prioritise development, funding often insufficient to offset economic incentives for deforestation.",
      },
      {
        q: "Evaluate the effectiveness of selective logging as a sustainable management strategy in tropical rainforests. [6 marks]",
        marks: 6,
        markScheme: "Level 3 (5–6 marks): Evaluates strengths and weaknesses with detail, reaches a supported conclusion. Level 2 (3–4 marks): Describes strategy with some evaluation. Level 1 (1–2 marks): Basic points. Accept: only mature trees of specific species cut; forest structure/canopy largely preserved; wildlife habitats retained; regrowth possible; BUT access roads cause damage, machinery compacts/damages surrounding trees, illegal logging often follows legal roads; slow growth of tropical hardwoods means cycle must be long; requires enforcement; more sustainable than clear-felling but not a complete solution.",
      },
      {
        q: "Describe the global distribution of tropical rainforests and hot deserts. [4 marks]",
        marks: 4,
        markScheme: "2 marks each: rainforests between Tropics, close to Equator — Amazon, Congo, SE Asia; hot deserts around 30°N and S — Sahara, Arabian, Kalahari, Australian; linked to rising and sinking air.",
      },
      {
        q: "Describe the location of the taiga. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: 50–70°N; Canada, Alaska, Scandinavia, Russia/Siberia; largest land biome.",
      },
      {
        q: "Describe the climate of the taiga. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: long, very cold winters (−20 to −40°C); short mild summers (up to 20°C); growing season 3–4 months; low precipitation 300–900 mm, much as snow.",
      },
      {
        q: "Explain how taiga trees are adapted to the climate. [4 marks]",
        marks: 4,
        markScheme: "1 mark per adaptation explained: conical shape; needle leaves with waxy coating; evergreen; dark colour; thick bark.",
      },
      {
        q: "Compare the nutrient cycles of the tropical rainforest and the taiga. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: rainforest — largest store biomass, rapid decomposition, small litter; taiga — largest store litter, slow decomposition; both have nutrient-poor soils.",
      },
      {
        q: "Explain why the taiga has low biodiversity. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: harsh winters; short growing season; few tree species dominate; acidic soils; limited food for animals in winter.",
      },
      {
        q: "Explain how the exploitation of oil sands threatens the taiga. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: open-pit mining removes forest and peat; toxic tailings ponds; large water use; high carbon emissions; habitat fragmentation (e.g. caribou).",
      },
      {
        q: "Explain how climate change threatens the taiga. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: hotter, drier summers increase wildfires (Canada 2023); warmer winters let pests survive (mountain pine beetle); thawing permafrost; shifting of biome boundaries.",
      },
      {
        q: "Describe how the taiga can be protected. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: protected areas (Wood Buffalo National Park); sustainable forestry and FSC certification; regulation and reclamation of mining land; fire management.",
      },
    ],
  },
  '3.3': {
    name: "Consuming Energy Resources",
    questions: [
      {
        q: "Define the term \"energy insecurity\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: when energy supply is unreliable, too expensive or insufficient to meet demand.",
      },
      {
        q: "Describe the global distribution of energy surplus and deficit. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: surplus — Saudi Arabia, Russia, Norway, Qatar (Middle East, Russia); deficit — Japan, South Korea, Germany, UK, India; reserves unevenly distributed.",
      },
      {
        q: "Describe the global pattern of energy consumption. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: developed countries consume most per person (USA several times global average); China, USA, India largest total consumers; ~700 million (mostly sub-Saharan Africa) have no electricity.",
      },
      {
        q: "Explain two reasons for increasing global energy consumption. [4 marks]",
        marks: 4,
        markScheme: "2 x 2 marks: economic development (1) — industrialisation in emerging countries (China's use tripled 2000–20) (1); population growth (1); technology/more devices (1); rising living standards (1).",
      },
      {
        q: "Explain how physical factors affect energy supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: fossil fuels depend on geology; HEP needs rainfall and relief; geothermal needs tectonic activity; solar needs sunshine; some reserves in hostile environments.",
      },
      {
        q: "Explain how the cost of exploitation affects energy supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: deep-water/Arctic oil and tar sands expensive; only economic when prices high; renewables high start-up but low running costs; low prices make some reserves uneconomic.",
      },
      {
        q: "Explain how technology affects energy supply. [2 marks]",
        marks: 2,
        markScheme: "1 mark: new technology opens up reserves (e.g. fracking for shale gas in USA); 1 mark: makes renewables cheaper and more efficient.",
      },
      {
        q: "Explain how political factors affect energy supply. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: conflict disrupts supply (Russia–Ukraine 2022); instability in producing countries; governments restrict exploitation (UK fracking moratorium); energy used as political leverage.",
      },
      {
        q: "Describe the impacts of energy insecurity. [4 marks]",
        marks: 4,
        markScheme: "1 mark per impact: exploitation of sensitive areas (Arctic, tar sands); higher costs; reduced food production; reduced industrial output (South Africa load-shedding); potential conflict.",
      },
      {
        q: "Explain why energy insecurity can lead to the exploitation of environmentally sensitive areas. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: countries search for new supplies; reserves in Arctic/deep ocean/tar sands; higher prices make them economic; environmental damage (Alberta tar sands, Arctic drilling).",
      },
      {
        q: "Explain how energy insecurity affects food production. [2 marks]",
        marks: 2,
        markScheme: "1 mark: farming needs energy for machinery, fertilisers and transport; 1 mark: higher energy costs raise food prices; biofuels replace food crops.",
      },
      {
        q: "Explain how energy insecurity may lead to conflict. [2 marks]",
        marks: 2,
        markScheme: "1 mark: competition for scarce resources (South China Sea, Arctic); 1 mark: energy supply used as political weapon.",
      },
      {
        q: "Describe the advantages and disadvantages of wind power. [4 marks]",
        marks: 4,
        markScheme: "2 advantages: renewable; no emissions when running; falling cost; offshore productive. 2 disadvantages: intermittent; visual/noise impact; harm to birds; needs backup.",
      },
      {
        q: "Describe the advantages and disadvantages of solar power. [4 marks]",
        marks: 4,
        markScheme: "2 advantages: renewable; cheap and falling cost; works at small scale/remote areas. 2 disadvantages: only in daylight; less effective in cloudy places; solar farms use farmland.",
      },
      {
        q: "Describe the advantages and disadvantages of HEP. [4 marks]",
        marks: 4,
        markScheme: "2 advantages: reliable; controllable; reservoirs store water. 2 disadvantages: dams flood valleys; displace people; disrupt river ecosystems; expensive.",
      },
      {
        q: "Describe the advantages and disadvantages of nuclear power. [4 marks]",
        marks: 4,
        markScheme: "2 advantages: reliable; low carbon; large output. 2 disadvantages: very expensive; radioactive waste; accident risk (Chernobyl, Fukushima); public opposition.",
      },
      {
        q: "Describe the advantages and disadvantages of fossil fuels. [4 marks]",
        marks: 4,
        markScheme: "2 advantages: reliable; flexible; existing infrastructure. 2 disadvantages: finite; greenhouse gas emissions; air pollution; spills.",
      },
      {
        q: "Explain what fracking is. [2 marks]",
        marks: 2,
        markScheme: "1 mark: drilling into shale rock; 1 mark: pumping in water, sand and chemicals at high pressure to crack rock and release gas.",
      },
      {
        q: "Explain the advantages of fracking. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: domestic gas supply improves energy security; reduces imports; jobs and tax revenue; gas emits less CO₂ than coal (\"bridge\" fuel); transformed USA energy.",
      },
      {
        q: "Explain the disadvantages of fracking. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: earth tremors (Preston New Road 2019, 2.9 magnitude); groundwater contamination; methane leaks; large water use; lorry traffic, noise; conflicts with climate targets; local opposition.",
      },
      {
        q: "Evaluate fracking as a way of increasing energy supply in the UK. [6 marks]",
        marks: 6,
        markScheme: "Level marked: benefits (security, jobs, less CO₂ than coal) vs costs (tremors, pollution, climate targets, opposition, moratorium since 2019). Supported judgement for top level.",
      },
      {
        q: "Explain how an individual can reduce their carbon footprint. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: insulate home; switch off/efficient appliances; walk/cycle/public transport; fewer flights; eat less meat; buy local/fewer goods.",
      },
      {
        q: "Describe how homes and workplaces can be designed to conserve energy. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: insulation; double/triple glazing; solar panels; heat pumps; passive solar design; green roofs; smart meters; e.g. BedZED.",
      },
      {
        q: "Explain how transport can be made more energy-efficient. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: electric vehicles; integrated public transport; cycle lanes; congestion charges/low-emission zones; car sharing.",
      },
      {
        q: "Explain how demand reduction can help a sustainable energy future. [2 marks]",
        marks: 2,
        markScheme: "1 mark: using less energy (switching off, efficient appliances); 1 mark: reduces need for new power stations and emissions.",
      },
      {
        q: "Explain how technology can improve energy efficiency. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: more efficient power stations, vehicles and appliances; LED lighting; carbon capture and storage; smart grids balancing supply and demand.",
      },
      {
        q: "Explain the benefits of a named local renewable energy scheme. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: lighting allows study and work after dark; fridges for vaccines and food; less kerosene/firewood improves health and reduces deforestation; new small businesses.",
      },
      {
        q: "Explain why a named local renewable energy scheme is sustainable. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: renewable; run-of-river (no large dam); low-cost maintenance; locally trained operators; small monthly fee covers upkeep.",
      },
      {
        q: "Compare the energy use of a developed country and a developing country. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: developed countries use far more per person; developed countries mostly electricity/fossil fuels, developing countries more traditional fuels (wood, dung); many in developing countries lack electricity; developed country use for transport, appliances, industry.",
      },
      {
        q: "To what extent can renewable energy meet future global energy demand? [9 marks]",
        marks: 9,
        markScheme: "Level 3 (7–9): detailed assessment — falling costs, growth of wind/solar, local schemes vs intermittency, storage, cost of grids, rising demand from emerging countries, fossil fuel dependence; clear judgement. Level 2: some assessment. Level 1: basic.",
      },
      {
        q: "Evaluate the strategies used to increase energy supply. [9 marks]",
        marks: 9,
        markScheme: "Level 3: evaluation of renewable and non-renewable options including fracking and nuclear, with examples and judgement. Level 2: some evaluation. Level 1: basic.",
      },
      {
        q: "Evaluate the strategies used to move towards a sustainable energy future. [9 marks]",
        marks: 9,
        markScheme: "Level 3: evaluation of conservation, design of homes/workplaces, transport, demand reduction, technology and local renewables, with examples and judgement. Level 2: some evaluation. Level 1: basic.",
      },
      {
        q: "Explain why geothermal energy is only available in some places. [2 marks]",
        marks: 2,
        markScheme: "1 mark: it requires heat close to the surface; 1 mark: found in tectonically active areas such as Iceland and Kenya.",
      },
      {
        q: "Suggest why many developing countries have low energy consumption. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: poverty — cannot afford energy; lack of infrastructure/electricity grid; rural populations; less industry; reliance on traditional fuels.",
      },
      {
        q: "Explain why some countries have an energy deficit. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: few domestic reserves (e.g. Japan); high demand from industry and population; declining reserves (UK North Sea); must import energy.",
      },
      {
        q: "Describe the environmental impacts of extracting tar sands. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: destroys boreal forest; uses large amounts of water; toxic tailings ponds; high energy use and emissions; e.g. Alberta, Canada.",
      },
      {
        q: "Explain why gas is described as a \"bridge\" fuel. [2 marks]",
        marks: 2,
        markScheme: "1 mark: produces about half the CO₂ of coal when burned; 1 mark: can provide reliable power while renewables and storage are expanded.",
      },
      {
        q: "Give one reason why nuclear power is controversial. [2 marks]",
        marks: 2,
        markScheme: "1 mark for reason, 1 for development: e.g. radioactive waste (1) must be stored safely for thousands of years (1); accident risk (1) — Fukushima 2011 (1).",
      },
      {
        q: "Explain one way energy insecurity affects industrial output. [2 marks]",
        marks: 2,
        markScheme: "1 mark: power cuts/blackouts halt production; 1 mark: e.g. South Africa's load-shedding has damaged the economy; high costs make firms less competitive.",
      },
      {
        q: "Define the term \"carbon footprint\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: the total amount of greenhouse gases produced by an activity, product or person.",
      },
      {
        q: "Describe the changing energy mix in the UK. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point with data: coal fell from ~40% (2012) to zero (2024); gas largest single source (~1/3); renewables ~half of electricity, wind largest; nuclear ~13–15%.",
      },
      {
        q: "Explain why the UK has reduced its use of coal. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: climate change targets/net zero; air pollution; cheaper gas and renewables; carbon tax; ageing power stations closed.",
      },
      {
        q: "Explain why the UK has become more reliant on imported energy. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: North Sea oil and gas production peaked c.2000 and declined; coal mines closed; demand still high; imports of gas by pipeline from Norway and LNG.",
      },
      {
        q: "Describe the economic and environmental issues of fracking. [4 marks]",
        marks: 4,
        markScheme: "2 economic + 2 environmental: energy security, jobs, tax revenue vs earth tremors (Preston New Road 2019), groundwater pollution, methane leaks, water use, local opposition.",
      },
      {
        q: "Describe the economic and environmental issues of nuclear power. [4 marks]",
        marks: 4,
        markScheme: "2 economic + 2 environmental: very expensive (Hinkley Point C £30bn+); reliable supply; jobs vs radioactive waste; accident risk; low carbon emissions.",
      },
      {
        q: "Describe the economic and environmental issues of wind energy. [4 marks]",
        marks: 4,
        markScheme: "2 economic + 2 environmental: falling costs; jobs (Hull turbine factory); intermittent supply vs low carbon; visual/noise impacts onshore; risk to birds; offshore avoids land conflict.",
      },
      {
        q: "Suggest why North Sea oil and gas is becoming more expensive to extract. [2 marks]",
        marks: 2,
        markScheme: "1 mark per point: remaining reserves smaller and harder to reach; deeper water; ageing infrastructure; higher decommissioning costs.",
      },
      {
        q: "Evaluate the economic and environmental issues associated with the exploitation of energy sources in the UK. [9 marks]",
        marks: 9,
        markScheme: "Level 3: detailed comparison of at least two sources (e.g. fracking, nuclear, wind, North Sea) with economic and environmental issues and a judgement. Level 2: some comparison. Level 1: basic.",
      },
      {
        q: "Give two ways in which the UK government has encouraged renewable energy. [2 marks]",
        marks: 2,
        markScheme: "1 mark each: subsidies/Contracts for Difference; net-zero targets; offshore wind auctions; ending new petrol/diesel car sales; planning support.",
      },
      {
        q: "Explain one disadvantage of relying on imported gas. [2 marks]",
        marks: 2,
        markScheme: "1 mark: prices set by world markets / affected by conflict (e.g. 2022 Russia–Ukraine); 1 mark: leads to higher household bills / insecurity of supply.",
      },
      {
        q: "Suggest why the UK still uses natural gas despite climate targets. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: reliable/flexible backup for intermittent renewables; main heating fuel in homes (gas boilers); existing infrastructure; cheaper than some alternatives.",
      },
      {
        q: "Distinguish between renewable, non-renewable and recyclable energy. [3 marks]",
        marks: 3,
        markScheme: "1 mark each: renewable — naturally replenished (solar, wind); non-renewable — finite (coal, oil, gas); recyclable — can be reused/reprocessed (biomass, nuclear fuel).",
      },
      {
        q: "Describe the global distribution of oil reserves. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: over half in the Middle East (Saudi Arabia, Iran, Iraq); large reserves in Venezuela, Canada (oil sands), Russia, USA; few in Europe.",
      },
      {
        q: "Explain the factors that affect the price of oil. [4 marks]",
        marks: 4,
        markScheme: "1 mark per factor: conflict/supply disruption; OPEC production decisions; demand growth in emerging economies; recessions; new supplies (fracking).",
      },
      {
        q: "Evaluate the advantages and disadvantages of extracting oil sands. [6 marks]",
        marks: 6,
        markScheme: "Level marked: advantages — huge reserves, jobs, revenue, energy security; disadvantages — forest destruction, tailings ponds, water use, higher emissions, indigenous impacts. Judgement.",
      },
      {
        q: "Explain why environmental groups oppose new fossil fuel developments. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: greenhouse gas emissions and climate change; risk of spills (Deepwater Horizon); damage to sensitive environments (Arctic, taiga); delay switch to renewables.",
      },
      {
        q: "Explain how energy efficiency can reduce reliance on fossil fuels. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: insulation; efficient appliances and LED lighting; efficient vehicles and electric cars; smart grids; reduces total energy demand.",
      },
      {
        q: "Compare the attitudes of two different stakeholders to energy use. [4 marks]",
        marks: 4,
        markScheme: "1 mark per comparative point: e.g. oil companies want continued extraction for profit vs environmental groups want rapid shift to renewables; governments balance cost, security and climate; consumers want affordable energy.",
      },
    ],
  },
  '3.4': {
    name: "Making Geographical Decisions",
    questions: [
      {
        q: "Describe the structure of Edexcel B Component 3. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: 1h30, 64 marks; exam resources in the exam; Sections A–C on topics 7–9; Section D decision (12 marks + 4 SPaG).",
      },
      {
        q: "Define the term \"stakeholder\". [1 mark]",
        marks: 1,
        markScheme: "1 mark: a person or group with an interest in or affected by a decision.",
      },
      {
        q: "Explain why stakeholders often disagree about environmental decisions. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: affected differently; value different things (profit, environment, jobs); different scales of impact; conflicting short- and long-term interests.",
      },
      {
        q: "Describe how you would use the exam resources effectively. [4 marks]",
        marks: 4,
        markScheme: "1 mark per point: skim whole booklet first; annotate figures; identify stakeholders; note evidence for/against each option; link to own knowledge.",
      },
      {
        q: "Explain what is meant by sustainable development. [2 marks]",
        marks: 2,
        markScheme: "1 mark: meets present needs; 1 mark: without compromising future generations.",
      },
      {
        q: "Explain why you should consider short-term and long-term impacts. [2 marks]",
        marks: 2,
        markScheme: "1 mark: some options have quick benefits but lasting costs (or vice versa); 1 mark: helps judge sustainability.",
      },
      {
        q: "Describe how a futures wheel is used. [2 marks]",
        marks: 2,
        markScheme: "1 mark: place decision at centre; 1 mark: add first, second and third-order consequences around it.",
      },
      {
        q: "Describe how a cost–benefit analysis is used. [2 marks]",
        marks: 2,
        markScheme: "1 mark: list costs and benefits of each option; 1 mark: compare to find option with greatest net benefit.",
      },
      {
        q: "Explain how to identify bias in a source. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: who wrote it and their interests; one-sided arguments; emotive language; lack of evidence; date.",
      },
      {
        q: "Calculate the percentage change if forest cover fell from 800 km² to 600 km². [2 marks]",
        marks: 2,
        markScheme: "1 mark method ((600−800)/800 × 100); 1 mark answer: −25% (a 25% decrease).",
      },
      {
        q: "Calculate the mean of these energy use figures: 40, 55, 60, 45, 50 (GJ per person). [1 mark]",
        marks: 1,
        markScheme: "1 mark: 50 GJ per person.",
      },
      {
        q: "Explain one social, one economic and one environmental impact of a new oil development in a forest. [6 marks]",
        marks: 6,
        markScheme: "2 marks each: social (e.g. displacement of indigenous people, health); economic (jobs, revenue); environmental (deforestation, pollution, emissions).",
      },
      {
        q: "Explain why the cheapest option is not always the best. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: may have higher environmental costs; social costs to communities; long-term costs (e.g. clean-up, climate); may not be sustainable.",
      },
      {
        q: "Explain how a decision could benefit one scale but harm another. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: e.g. local jobs from mining vs global emissions; national income vs local habitat loss; example given.",
      },
      {
        q: "Suggest how the weaknesses of a chosen option could be reduced. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: e.g. compensation for affected people; environmental regulation; replanting/reclamation; community involvement; monitoring.",
      },
      {
        q: "Explain how knowledge of ecosystem services can support a decision about forests. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: forests store carbon, regulate water, provide medicines and livelihoods; losing them has wide costs; supports options that protect forests.",
      },
      {
        q: "Explain how knowledge of energy resources can support a decision. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: compare renewable vs non-renewable; emissions; energy security; costs; local suitability (e.g. hydro needs rivers).",
      },
      {
        q: "Explain what makes a decision answer \"balanced but decisive\". [2 marks]",
        marks: 2,
        markScheme: "1 mark: considers strengths and weaknesses of options; 1 mark: still makes and justifies a clear choice.",
      },
      {
        q: "Explain why you should refer to figure numbers in your answer. [2 marks]",
        marks: 2,
        markScheme: "1 mark: shows use of evidence from resources; 1 mark: makes justification specific and credible.",
      },
      {
        q: "Describe the role of SPaG in Component 3. [2 marks]",
        marks: 2,
        markScheme: "1 mark: 4 marks for spelling, punctuation, grammar and specialist terms; 1 mark: awarded on the final decision question.",
      },
      {
        q: "Justify a choice between protecting a forest and allowing sustainable logging. [8 marks]",
        marks: 8,
        markScheme: "Level marked: clear choice; evidence; SEE impacts; stakeholders; compare alternatives; weaknesses and mitigation; sustainability; conclusion.",
      },
      {
        q: "Explain how indigenous people might be affected by energy development. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: loss of land; pollution of water and food sources; loss of culture; possible jobs/compensation; conflict.",
      },
      {
        q: "Explain why governments might support new energy developments. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: energy security; tax revenue; jobs; economic growth; reduced imports.",
      },
      {
        q: "Explain why conservation groups might oppose new energy developments. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: habitat destruction; biodiversity loss; carbon emissions; pollution risk; sets precedent.",
      },
      {
        q: "Discuss whether local or global needs should be prioritised in environmental decisions. [8 marks]",
        marks: 8,
        markScheme: "Level marked: local needs (jobs, livelihoods) vs global (climate, biodiversity); examples; supported judgement.",
      },
      {
        q: "Explain one advantage of using a stakeholder conflict matrix. [2 marks]",
        marks: 2,
        markScheme: "1 mark: shows agreement/disagreement between groups; 1 mark: helps predict support/opposition and find compromise.",
      },
      {
        q: "Explain how political factors can influence geographical decisions. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: government policies (net zero, protected areas); international agreements (CITES, Paris); lobbying; elections.",
      },
      {
        q: "Explain how time should be managed in Component 3. [2 marks]",
        marks: 2,
        markScheme: "1 mark: skim booklet first; 1 mark: leave 20–25 minutes for final decision question.",
      },
      {
        q: "Suggest why qualitative evidence is useful in a decision-making exercise. [2 marks]",
        marks: 2,
        markScheme: "1 mark: shows people's views and experiences; 1 mark: helps understand social impacts that numbers miss.",
      },
      {
        q: "Suggest why quantitative evidence is useful in a decision-making exercise. [2 marks]",
        marks: 2,
        markScheme: "1 mark: gives precise data on scale/trends; 1 mark: allows comparison between options.",
      },
      {
        q: "Explain how you could use your own knowledge in the decision answer. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: link to case studies (Amazon, Alberta oil sands); theories (Malthus/Boserup); concepts (ecosystem services, sustainability).",
      },
      {
        q: "Explain why the long-term impacts of deforestation should be considered in a decision. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: soil erosion and loss of fertility; carbon release and climate change; loss of biodiversity and medicines; loss of livelihoods.",
      },
      {
        q: "Explain why renewable options are often favoured in energy decisions. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: low emissions; will not run out; energy security; falling costs; fewer local pollution issues.",
      },
      {
        q: "Explain one disadvantage of renewable options that should be considered. [2 marks]",
        marks: 2,
        markScheme: "1 mark: disadvantage (intermittency, visual impact, land use, HEP displacement); 1 mark: development.",
      },
      {
        q: "Evaluate the usefulness of different types of resource in a decision-making exercise. [6 marks]",
        marks: 6,
        markScheme: "Level marked: maps, graphs, photos, extracts, data tables — strengths and limitations (bias, date, scale); judgement.",
      },
      {
        q: "Explain why decisions often involve trade-offs. [2 marks]",
        marks: 2,
        markScheme: "1 mark: no option benefits everyone; 1 mark: gains in one area (e.g. jobs) come with losses in another (e.g. environment).",
      },
      {
        q: "Suggest how communities can be involved in decisions about their environment. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: consultations; local management/co-management; benefit-sharing; indigenous land rights; NGOs supporting community voices.",
      },
      {
        q: "Explain how evidence from a graph could support a decision. [2 marks]",
        marks: 2,
        markScheme: "1 mark: identify a trend or data point; 1 mark: link it to an argument for or against an option.",
      },
      {
        q: "Explain why it is important to consider who benefits and who loses from a decision. [3 marks]",
        marks: 3,
        markScheme: "1 mark per point: identifies winners and losers; equity and fairness; helps predict conflict; supports sustainable choices.",
      },
      {
        q: "Discuss the view that economic benefits should outweigh environmental costs in developing countries. [8 marks]",
        marks: 8,
        markScheme: "Level marked: need for development, jobs, poverty reduction vs long-term environmental and social costs, sustainability; examples; supported judgement.",
      },
    ],
  },
};

if (typeof window !== 'undefined') window.GEOGRAPHY_EDEXCEL_GCSE_PRACTICE = GEOGRAPHY_EDEXCEL_GCSE_PRACTICE;
