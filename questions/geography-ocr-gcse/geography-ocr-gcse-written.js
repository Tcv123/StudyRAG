/*
 * OCR GCSE Geography B (J384) — Written / Short-Answer Question Bank
 * 10 questions per topic: 4 green + 4 amber + 2 red
 * tier: 'green' (state/identify 1-2 marks), 'amber' (describe/explain 4 marks), 'red' (evaluate/assess 6-9 marks)
 * Student self-marks against model answer: Full / Partial / Missed
 */

const GEOGRAPHY_OCR_GCSE_WRITTEN = {

  /* ── 1.1 Global Hazards: Extreme Weather */
  '1.1': {
    green: [
      {
        q: "Define the term \"drought\".",
        marks: 1, tier: 'green',
        modelAnswer: "A long period of abnormally low rainfall that leads to a shortage of water (1).",
        marks_scheme: "1 mark: extended period of low rainfall leading to water shortage."
      },
      {
        q: "State two conditions needed for a tropical storm to form.",
        marks: 2, tier: 'green',
        modelAnswer: "• An ocean surface temperature of at least 26–27°C (1).\n• A location at least 5° from the Equator, so the Coriolis effect can make the storm spin (1).\n(Also accept: low wind shear; an area of low pressure with rising, moist air.)",
        marks_scheme: "1 mark per correct condition, up to 2: sea temperature 26–27°C+; at least 5° from Equator / Coriolis effect; low wind shear; low pressure with rising moist air."
      },
      {
        q: "Define the term \"storm surge\".",
        marks: 2, tier: 'green',
        modelAnswer: "A storm surge is a rise in sea level above the normal tide level (1), caused by strong winds pushing water towards the coast and low air pressure allowing the sea surface to rise (1).",
        marks_scheme: "1 mark: rise in sea level / large wave-like rise of water. 1 mark: caused by strong winds and/or low pressure in a storm."
      },
      {
        q: "Name the pressure belts found at the Equator and at 30° north and south.",
        marks: 2, tier: 'green',
        modelAnswer: "• At the Equator: low pressure (the ITCZ), where warm air rises (1).\n• At 30° north and south: high pressure (sub-tropical high), where cool air sinks (1).",
        marks_scheme: "1 mark: Equator = low pressure / ITCZ. 1 mark: 30° = high pressure."
      },
    ],
    amber: [
      {
        q: "Explain how El Niño affects weather in different parts of the world.",
        marks: 4, tier: 'amber',
        modelAnswer: "During El Niño, the trade winds across the Pacific weaken or reverse (1). Warm water spreads east from the western Pacific towards South America (1). Rising air and heavy rain move with the warm water, causing floods in Peru and Ecuador (1). Meanwhile sinking air over Australia and Indonesia brings drought and wildfires (1).",
        marks_scheme: "1 mark per explained point: weakened trade winds; warm water moves east; floods in South America; drought in Australia/Indonesia."
      },
      {
        q: "Explain how a tropical storm forms.",
        marks: 4, tier: 'amber',
        modelAnswer: "Warm ocean water (over 26–27°C) heats the air above it, so warm, moist air rises rapidly, creating very low pressure at the surface (1). As the air rises it cools and condenses into towering clouds, releasing latent heat that powers the storm and makes the air rise faster (1). Air rushes in at the surface to replace the rising air, and the Coriolis effect makes it spiral (1). Cool air sinks in the centre to form the calm eye; the storm grows as long as it has a supply of warm, moist air and weakens over land or cooler water (1).",
        marks_scheme: "Level-marked or 1 mark per developed point: warm ocean heats air / rising air creates low pressure; condensation releases latent heat (energy); air drawn in and spirals due to Coriolis effect; sinking air forms the eye; storm sustained by warm moist air, weakens over land."
      },
      {
        q: "Describe the primary and secondary effects of a named tropical storm.",
        marks: 4, tier: 'amber',
        modelAnswer: "Typhoon Haiyan (Philippines, November 2013). Primary effects: a storm surge of up to 5–6 m flooded Tacloban; over 6,300 people were killed; around 1.1 million homes were damaged or destroyed (2). Secondary effects: about 14 million people were affected and 6 million lost their income; landslides blocked roads, cutting off aid; shortages of food, water and shelter led to disease outbreaks and looting (2).",
        marks_scheme: "Up to 2 marks for primary effects and 2 for secondary effects, with named-example detail. Primary: deaths, storm surge, buildings destroyed, power lines down. Secondary: disease, loss of jobs/income, landslides, food shortages, looting, oil spill."
      },
      {
        q: "Explain how climate change might affect the distribution, frequency and intensity of tropical storms.",
        marks: 4, tier: 'amber',
        modelAnswer: "Distribution: as oceans warm, a larger area will reach 26–27°C, so storms may form further north and south of the tropics (1). Frequency: scientists are less certain — the total number may stay the same or fall slightly (1). Intensity: warmer oceans supply more energy and warmer air holds more moisture, so a higher proportion of storms will be very intense (categories 4–5) with heavier rainfall (1). Sea level rise will also make storm surges more damaging (1).",
        marks_scheme: "1 mark per explained point: wider distribution because more ocean above 26–27°C; frequency uncertain; greater intensity because more energy/moisture; heavier rain; higher storm surges due to sea level rise."
      },
    ],
    red: [
      {
        q: "Using a named example, assess the impacts of a drought.",
        marks: 8, tier: 'red',
        modelAnswer: "The Millennium Drought in south-east Australia (1997–2009) had severe environmental impacts: flows in the Murray–Darling Basin fell to record lows, wetlands dried out and fish and bird populations declined. Economic impacts were major — rice and cotton production collapsed in some years, costing billions of dollars and thousands of farming jobs. Socially, cities such as Melbourne faced strict water restrictions and many farming families suffered stress and hardship. Dry conditions also contributed to the Black Saturday bushfires of 2009, which killed 173 people. Overall, the economic and environmental impacts were greatest, because Australia's wealth allowed it to protect most people through desalination, restrictions and the Murray–Darling Basin Plan.",
        marks_scheme: "Level 3 (6–8): detailed assessment of social, economic and environmental impacts of a named drought with a supported judgement. Level 2 (3–5): some detail and assessment. Level 1 (1–2): basic description."
      },
      {
        q: "\"Planning is the most effective way to reduce the effects of tropical storms.\" Do you agree? Justify your answer.",
        marks: 6, tier: 'red',
        modelAnswer: "Planning — evacuation routes, emergency supplies, education, drills and land-use zoning — is very cost-effective and can be used by LIDCs as well as ACs. Bangladesh shows this: the 1970 Bhola cyclone killed around 300,000–500,000, but Cyclone Sidr (2007) killed about 3,400 thanks to warnings and shelters. However, planning depends on monitoring and prediction: without satellites and forecasts, people cannot be warned in time. Protection (sea walls, storm-surge barriers, strong buildings) reduces damage to property, which planning cannot, but it is expensive and can be overtopped, as Haiyan's surge showed. Overall, I agree that planning saves the most lives for the least money, but it works best when combined with prediction and some protection.",
        marks_scheme: "Level 3 (5–6): clear judgement, comparing planning with monitoring, prediction and protection, supported by examples. Level 2 (3–4): some comparison and examples, judgement partly supported. Level 1 (1–2): basic description of planning."
      },
    ],
  },

  /* ── 1.2 Global Hazards: Tectonic Hazards */
  '1.2': {
    green: [
      {
        q: "State two differences between the primary and secondary effects of an earthquake.",
        marks: 2, tier: 'green',
        modelAnswer: "• Primary effects occur immediately as a direct result of the ground shaking — e.g. buildings collapsing, bridges falling, people being killed or injured by structural collapse (1).\n• Secondary effects are indirect consequences that occur in the hours, days, or weeks after the event — e.g. fires caused by ruptured gas mains, tsunamis triggered by offshore quakes, disease outbreaks from contaminated water, homelessness (1).",
        marks_scheme: "1 mark: primary effects occur immediately as direct result — buildings collapsing, people killed. 1 mark: secondary effects are indirect consequences in hours/days/weeks — fires, tsunamis, disease, homelessness."
      },
      {
        q: "Identify the two types of plate boundary where earthquakes most commonly occur and give one example of each.",
        marks: 4, tier: 'green',
        modelAnswer: "• Destructive (convergent) boundary — oceanic crust subducts beneath continental or other oceanic crust; the friction as plates move past each other causes powerful earthquakes (e.g. Japan Trench — 2011 Tōhoku earthquake, magnitude 9.0) (1).\n• Conservative (transform) boundary — plates slide past each other horizontally; friction builds up and is released as earthquakes with no volcanic activity (e.g. San Andreas Fault, California — 1906 San Francisco earthquake) (1).\n(Also accept constructive boundaries for some earthquake activity — credit if explained.)",
        marks_scheme: "1 mark: destructive boundary — oceanic crust subducts causing powerful earthquakes (e.g. Japan Trench, 2011 Tōhoku M9.0). 1 mark: conservative boundary — plates slide past each other causing earthquakes with no volcanic activity (e.g. San Andreas Fault, 1906 San Francisco)."
      },
      {
        q: "State what is meant by the epicentre and focus of an earthquake.",
        marks: 2, tier: 'green',
        modelAnswer: "• The focus (hypocentre) is the point within the Earth's crust where the earthquake originates — where the rock fractures and seismic energy is first released (1).\n• The epicentre is the point on the Earth's surface directly above the focus; it is where the greatest intensity of shaking is usually felt (1).",
        marks_scheme: "1 mark: focus is the point within the Earth where the earthquake originates and seismic energy is first released. 1 mark: epicentre is the point on the surface directly above the focus where greatest shaking intensity is felt."
      },
      {
        q: "Name two types of tectonic plate boundary and state whether they are associated with constructive or destructive activity.",
        marks: 2, tier: 'green',
        modelAnswer: "• Constructive (divergent) boundary — plates move apart; magma rises to fill the gap, creating new oceanic crust and forming volcanic features (e.g. Mid-Atlantic Ridge — Iceland) (1).\n• Destructive (convergent) boundary — plates move together; one (usually oceanic) is subducted into the mantle; creates powerful earthquakes, explosive volcanoes, and ocean trenches (e.g. Pacific Ring of Fire) (1).",
        marks_scheme: "1 mark: constructive boundary — plates move apart, magma rises creating new crust and volcanic features. 1 mark: destructive boundary — plates move together, one is subducted creating powerful earthquakes, explosive volcanoes, and ocean trenches."
      },
    ],
    amber: [
      {
        q: "Explain why earthquakes in LIDCs typically cause more deaths than earthquakes of similar magnitude in ACs.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Poor building quality — LIDCs lack the resources to construct earthquake-resistant buildings; traditional materials (unreinforced brick, adobe) collapse easily in strong shaking (e.g. 2010 Haiti earthquake, magnitude 7.0: ~230,000 deaths — poor construction; 2010 Chile earthquake, magnitude 8.8: ~500 deaths — strict building codes) (1).\n• Lack of early warning and emergency response capacity — LIDCs may lack seismograph networks, trained emergency services, and rescue equipment; response relies on local, often overwhelmed resources (1).\n• High population density in vulnerable areas — LIDC cities often have dense, informal settlements on unstable ground (e.g. hillsides, reclaimed land) that amplify shaking and are hardest to reach for rescue teams (1).\n• Pre-existing poverty and lack of resilience — communities already suffering from poverty, poor healthcare, and weak infrastructure have less capacity to recover; food shortages, disease, and homelessness persist for years after the event (1).",
        marks_scheme: "1 mark: poor building quality — unreinforced materials collapse easily (Haiti M7.0: ~230,000 deaths vs Chile M8.8: ~500 deaths). 1 mark: lack of early warning and emergency response capacity — LIDCs lack seismographs and rescue equipment. 1 mark: high population density in vulnerable areas — dense informal settlements on unstable ground amplify shaking. 1 mark: pre-existing poverty — communities less resilient; food shortages, disease, and homelessness persist for years."
      },
      {
        q: "Explain how a tsunami is formed following an earthquake.",
        marks: 4, tier: 'amber',
        modelAnswer: "• A tsunami is generated when a large earthquake occurs at a subduction zone beneath the ocean, causing a sudden vertical displacement of the seafloor (1).\n• The upward movement of the seafloor displaces an enormous volume of water, creating a series of waves that radiate outward from the epicentre in all directions (1).\n• In deep water the waves travel at speeds up to 800 km/h but have a very long wavelength and low height (less than 1 m), making them almost undetectable at sea (1).\n• As the waves approach shallow coastal water, their speed decreases but their height increases dramatically (shoaling) — waves can reach heights of 30 m or more; they surge inland with devastating force, inundating low-lying coastal areas (1).\n(Example: 2004 Indian Ocean tsunami — triggered by magnitude 9.1 earthquake off Sumatra; killed 230,000 across 14 countries; waves 30 m high in Aceh province.)",
        marks_scheme: "1 mark: large earthquake at subduction zone causes sudden vertical displacement of seafloor. 1 mark: upward movement displaces enormous water volume creating waves radiating outward. 1 mark: in deep water waves travel at 800 km/h with long wavelength and low height, almost undetectable. 1 mark: in shallow coastal water speed decreases but height increases dramatically (shoaling) to 30 m+, surging inland."
      },
      {
        q: "Describe and explain the impacts of a volcanic eruption you have studied.",
        marks: 4, tier: 'amber',
        modelAnswer: "(Montserrat 1995–1997 / Mount Pinatubo 1991 / Eyjafjallajökull 2010 — credit any appropriate named example.)\n(Montserrat, 1995–1997):\n• Primary impacts: pyroclastic flows destroyed the capital Plymouth and surrounding villages; 19 people killed; 6,000 of 12,000 population evacuated to the north of the island or emigrated (1).\n• Secondary impacts: ash covered farmland and destroyed crops; the economy collapsed as tourism fell and infrastructure was buried; the southern two-thirds of the island remained a restricted exclusion zone (1).\n• Long-term impacts: the island's population fell from 12,000 to 4,000 by 1998; major UK aid of ~£200 million was provided to rebuild the north of the island; volcanic tourism to view the buried Plymouth now generates some income (1).\n• Environmental impacts: new land created by lava flows; volcanic soils potentially fertile for future agriculture; geothermal energy potential (1).",
        marks_scheme: "1 mark: name a volcanic eruption and describe primary impacts (e.g. pyroclastic flows, deaths, evacuation). 1 mark: describe secondary impacts (e.g. economy collapsed, crops destroyed, infrastructure buried). 1 mark: describe long-term impacts (e.g. population fall, aid received, recovery programmes). 1 mark: describe environmental impacts (e.g. new land from lava, fertile volcanic soils, geothermal potential)."
      },
      {
        q: "Explain the immediate and long-term responses to a tectonic hazard you have studied.",
        marks: 4, tier: 'amber',
        modelAnswer: "(Nepal earthquake 2015 / Haiti earthquake 2010 / 2011 Japan tsunami — credit any appropriate example.)\n(Nepal earthquake, April 2015 — magnitude 7.8):\n• Immediate responses: search and rescue teams deployed from Nepal and internationally (UK, USA, India); UN launched a $415 million appeal; field hospitals set up; emergency food, water, and temporary shelters distributed; military used to reach remote Himalayan villages cut off by landslides (1).\n• International aid: over 70 countries provided assistance; $4.4 billion pledged at donor conference; UN helicopter airlifts reached isolated mountain communities (1).\n• Long-term responses: rebuilding of 600,000+ homes with earthquake-resistant designs using local materials; schools rebuilt to stronger standards; National Reconstruction Authority established (1).\n• Challenges: corruption delayed fund distribution; difficult terrain slowed reconstruction; many villages still not fully rebuilt 3 years later; tourist revenue (vital to economy) took 2–3 years to recover fully (1).",
        marks_scheme: "1 mark: immediate responses — search and rescue deployed, emergency appeal launched, field hospitals set up. 1 mark: international aid — multiple countries contributed, donor conference pledged funds, helicopter airlifts. 1 mark: long-term responses — rebuilding homes with earthquake-resistant designs, schools rebuilt to stronger standards. 1 mark: challenges — corruption delayed fund distribution, difficult terrain slowed reconstruction, tourist revenue took years to recover."
      },
    ],
    red: [
      {
        q: "Evaluate the extent to which people can be protected from the impacts of tectonic hazards. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "Monitoring and prediction:\n• Volcanic eruptions — scientists can monitor seismic activity, ground deformation, and gas emissions to give hours to weeks of warning; successful evacuations (e.g. Mount Pinatubo, 1991 — 60,000 evacuated, saved thousands of lives) (1).\n• Earthquakes — currently cannot be reliably predicted; only probabilistic hazard mapping identifies high-risk areas over decades; no short-term warning technology exists (1).\nEarly warning systems:\n• Japan's earthquake early warning system provides 30–60 seconds of warning after an earthquake is detected — enough to stop trains, trigger factory shutdowns, warn the public; this limited the additional casualties in the 2011 Tōhoku earthquake (1).\n• Pacific Tsunami Warning System gives hours of warning for distant tsunamis but is ineffective for local tsunamis; community-level education and evacuation routes are critical (1).\nBuilding design:\n• Earthquake-resistant building (e.g. Japan, California) can dramatically reduce casualties — same-magnitude earthquakes kill vastly fewer people in well-prepared ACs (1).\n• However, retrofitting existing buildings is extremely expensive and slow; much of the global urban stock remains vulnerable, particularly in LIDCs (1).\nConclusion:\n• Protection is much more achievable for volcanic eruptions and distant tsunamis, where monitoring gives useful warning time, than for earthquakes. The protection gap between ACs and LIDCs is stark and reflects wealth inequality as much as scientific capability — reducing vulnerability in LIDCs is as important as improving technology (1).",
        marks_scheme: "Level 3 (5-6 marks): evaluates protection measures for different hazard types (volcanoes, earthquakes, tsunamis) with named examples and a conclusion about the AC/LIDC protection gap. Level 2 (3-4 marks): discusses some measures with limited comparison or conclusion. Level 1 (1-2 marks): basic points about protection measures. Credit: volcanoes can give hours to weeks warning — Pinatubo evacuated 60,000; earthquakes cannot be reliably predicted; Japan early warning system provides 30–60 seconds; earthquake-resistant building dramatically reduces casualties."
      },
      {
        q: "\"The impacts of tectonic hazards are more to do with human factors than physical factors.\" Discuss. [8 marks]",
        marks: 8, tier: 'red',
        modelAnswer: "Physical factors affecting impact:\n• Magnitude — the energy released determines initial destructive power; the 2011 Japan earthquake (9.0) released ~1,000 times more energy than the 2010 Haiti quake (7.0) (1).\n• Depth of focus — shallow earthquakes (< 70 km) cause more surface shaking than deep-focus quakes; the Haiti earthquake had a shallow focus of only 13 km, amplifying destruction (1).\n• Proximity to population centres — the 2011 earthquake occurred offshore under the Pacific; a similar-magnitude onshore earthquake would have been catastrophic even in Japan (1).\nHuman factors affecting impact:\n• Poverty — the most important human factor; Haiti (GDP per capita ~$1,200 in 2010) suffered ~230,000 deaths; Chile (GDP per capita ~$12,000 in 2010) suffered ~500 deaths in a stronger earthquake 7 weeks later (1).\n• Building quality — poor construction (unreinforced concrete, brick) collapses in earthquakes; strict building codes and enforcement in Japan, California, and New Zealand dramatically reduce casualties (1).\n• Population density — dense urban populations in high-risk areas suffer greater total casualties; informal settlements on steep slopes (Port-au-Prince, Haiti) amplify disaster impacts (1).\n• Governance and preparedness — countries that invest in hazard mapping, early warning, emergency planning, and building regulation suffer far fewer deaths regardless of physical hazard level (1).\nConclusion:\n• Human factors are arguably the most significant determinants of impact in most cases — the \"disaster gap\" between rich and poor countries is primarily a human construct; physical factors set the hazard level but human vulnerability determines the outcome. The statement therefore has considerable merit, though physical factors (especially magnitude and proximity) remain important underlying causes (1).",
        marks_scheme: "Level 3 (7-8 marks): balanced discussion of human and physical factors determining impact with named examples and a conclusion about relative significance. Level 2 (4-6 marks): covers both factor types with some specific evidence. Level 1 (1-3 marks): basic points about factors. Credit: magnitude sets initial destructive power; depth of focus determines surface shaking intensity; poverty most important human factor (Haiti vs Chile comparison); building quality and governance determine preparedness."
      },
    ],
  },

  /* ── 1.3 Changing Climate */
  '1.3': {
    green: [
      {
        q: "State two pieces of evidence that the climate has changed naturally in the past.",
        marks: 2, tier: 'green',
        modelAnswer: "• Ice cores from Antarctica and Greenland show past temperatures and CO₂ levels over 800,000 years, including glacial and interglacial periods (1).\n• Tree rings, pollen records and historical documents show warmer and cooler periods such as the Little Ice Age (1).",
        marks_scheme: "1 mark each: ice cores; tree rings; pollen; historical records/paintings; sea floor sediments; glacial landforms."
      },
      {
        q: "State two natural causes of climate change.",
        marks: 2, tier: 'green',
        modelAnswer: "• Milankovitch cycles — variations in the Earth's orbit (eccentricity), axial tilt, and wobble (precession) change the amount and distribution of solar radiation received, causing glacial and interglacial periods over tens of thousands of years (1).\n• Volcanic eruptions — major eruptions inject sulfur dioxide (SO₂) into the stratosphere, forming aerosols that reflect solar radiation and cause short-term cooling (e.g. Mount Pinatubo, 1991, caused a global temperature drop of ~0.5°C) (1).\n(Also accept: solar output variation — sunspot cycles; changes in ocean circulation.)",
        marks_scheme: "1 mark: Milankovitch cycles — variations in Earth's orbit and axial tilt change solar radiation distribution over tens of thousands of years. 1 mark: volcanic eruptions — inject SO₂ into stratosphere forming aerosols that reflect solar radiation causing short-term cooling."
      },
      {
        q: "State what is meant by the enhanced greenhouse effect.",
        marks: 2, tier: 'green',
        modelAnswer: "The natural greenhouse effect is essential for life — greenhouse gases (CO₂, methane, water vapour) trap solar radiation re-emitted from the Earth's surface as long-wave radiation, warming the atmosphere (1). The enhanced greenhouse effect refers to the increase in this warming due to rising concentrations of greenhouse gases from human activities (burning fossil fuels, deforestation, agriculture), trapping more heat and raising global temperatures beyond natural levels (1).",
        marks_scheme: "1 mark: natural greenhouse effect — greenhouse gases trap solar radiation re-emitted from Earth warming the atmosphere. 1 mark: enhanced greenhouse effect — rising concentrations of greenhouse gases from human activities trap more heat raising temperatures beyond natural levels."
      },
      {
        q: "Identify two human activities that contribute to climate change and state the greenhouse gas each produces.",
        marks: 4, tier: 'green',
        modelAnswer: "• Burning fossil fuels (coal, oil, gas) — releases carbon dioxide (CO₂) from combustion; power stations, transport, and industry are the largest sources (1).\n• Agriculture — livestock (cattle, sheep) produce methane (CH₄) through enteric fermentation; rice paddies also produce methane; nitrogen fertilisers produce nitrous oxide (N₂O) (1).\n(Also accept: deforestation — reduces CO₂ absorption and releases stored carbon; cement production — releases CO₂ from heating limestone.)",
        marks_scheme: "1 mark: burning fossil fuels — releases carbon dioxide (CO₂) from combustion. 1 mark: agriculture — livestock produce methane (CH₄); nitrogen fertilisers produce nitrous oxide (N₂O)."
      },
    ],
    amber: [
      {
        q: "Explain why there is uncertainty about how much the global climate will change in the future.",
        marks: 4, tier: 'amber',
        modelAnswer: "Future emissions are uncertain because they depend on population growth, economic development and how quickly governments and people switch to low-carbon energy (1). Natural factors such as large volcanic eruptions or changes in solar output cannot be predicted far ahead (1). Positive feedbacks — melting ice reducing albedo and thawing permafrost releasing methane — could speed up warming in ways that are difficult to model (1). Climate models also have to simplify complex processes such as cloud formation and ocean circulation (1).",
        marks_scheme: "1 mark per explained source of uncertainty: future emissions/human choices; natural factors; feedback mechanisms; limitations of models."
      },
      {
        q: "Explain how climate change is affecting people and environments in different parts of the world.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Arctic and polar regions — warming is 2–4× faster than the global average (\"Arctic amplification\"); ice loss threatens polar bear habitats; indigenous Arctic communities (e.g. Inuit) face loss of traditional hunting grounds and coastal erosion as permafrost thaws (1).\n• Small Island Developing States (SIDS) — sea-level rise threatens low-lying islands (e.g. Maldives, mean elevation < 1 m; Kiribati) with inundation and salinisation of freshwater supplies; the Maldives has considered buying land abroad as a contingency and is building raised islands such as Hulhumalé (1).\n• Sub-Saharan Africa — more frequent and severe droughts reduce agricultural yields; the Sahel is experiencing desertification; food insecurity affects millions — yields of some staple crops could fall significantly by 2050 without adaptation (1).\n• UK/Northern Europe — longer growing seasons and warmer summers bring some agricultural benefits; however, increased flood risk from more intense rainfall events and rising sea levels threatens coastal communities and infrastructure (1).",
        marks_scheme: "1 mark: Arctic regions warming 2–4× faster; ice loss threatens habitats and Inuit communities lose hunting grounds. 1 mark: SIDS face inundation and salinisation of freshwater — Maldives purchased land in India as contingency. 1 mark: sub-Saharan Africa faces more frequent severe droughts — IPCC projects yields could fall 25% by 2050. 1 mark: UK/Northern Europe faces increased flood risk from intense rainfall and sea level rise despite some agricultural benefits."
      },
      {
        q: "Explain the mitigation strategies used to reduce the causes of climate change.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Renewable energy transition — replacing fossil fuel power stations with solar, wind, and tidal energy reduces CO₂ emissions; the UK generated over 40% of its electricity from renewables in 2023 (1).\n• Energy efficiency — insulating buildings, improving vehicle fuel standards, and LED lighting reduce overall energy demand and therefore emissions without reducing economic activity (1).\n• Carbon capture and storage (CCS) — capturing CO₂ from power stations and industrial processes and storing it underground in geological formations; currently limited in scale and expensive but potentially significant at large scale (1).\n• International agreements — the Paris Agreement (2015) committed 196 countries to limiting global warming to well below 2°C; countries submit Nationally Determined Contributions (NDCs) to reduce emissions, though current commitments are insufficient to meet the target (1).",
        marks_scheme: "1 mark: renewable energy — replacing fossil fuel power stations with solar, wind, tidal; UK generated 40%+ from renewables in 2023. 1 mark: energy efficiency — insulating buildings, improving fuel standards, LED lighting reduce energy demand. 1 mark: carbon capture and storage — capturing CO₂ from power stations and storing underground. 1 mark: international agreements — Paris Agreement committed 196 countries to limiting warming to well below 2°C."
      },
      {
        q: "Explain the adaptation strategies used to manage the impacts of climate change.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Flood defences — sea walls, flood barriers, and managed retreat protect coastal communities from sea-level rise and increased flooding; the Netherlands' Delta Works is the world's most advanced coastal protection system (1).\n• Crop adaptation — scientists are developing drought- and heat-resistant crop varieties; farmers shift to different crops and adjust planting seasons in response to changing conditions (e.g. wine grapes now grown commercially in southern England) (1).\n• Water management — rainwater harvesting, desalination, and water recycling help communities adapt to reduced rainfall; the Murray-Darling Basin Plan in Australia regulates water use in response to climate-driven drought (1).\n• Emergency planning — countries in high-risk areas develop heatwave action plans, flood early warning systems, and drought contingency plans to protect vulnerable populations (e.g. UK National Adaptation Programme) (1).",
        marks_scheme: "1 mark: flood defences — sea walls and managed retreat protect coastal communities from sea-level rise. 1 mark: crop adaptation — drought/heat-resistant varieties; farmers shift crops and planting seasons. 1 mark: water management — rainwater harvesting, desalination, and water recycling for communities with reduced rainfall. 1 mark: emergency planning — heatwave action plans, flood early warning systems, drought contingency plans."
      },
    ],
    red: [
      {
        q: "Evaluate how far individual actions can make a difference to climate change. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "Potential impact of individual action:\n• Dietary change — switching from a meat-heavy to a plant-based diet can reduce an individual's food-related carbon footprint by up to 73%; if adopted widely, global food emissions could fall by 50% (1).\n• Transport choices — choosing public transport, cycling, or an electric vehicle over a petrol car can save 1–2 tonnes of CO₂ per year per person; avoiding long-haul flights can reduce personal footprint by 3–5 tonnes (1).\n• Home energy — insulation, switching to renewable electricity, and low-carbon heating (heat pumps) can reduce household emissions by 2–5 tonnes/year (1).\nLimitations:\n• Systemic constraints — individual choices are limited by available infrastructure; without reliable public transport, renewable grids, or affordable EVs, individuals cannot easily reduce emissions (1).\n• Scale — a 2017 report linked about 70% of industrial greenhouse gas emissions since 1988 to just 100 fossil fuel producers; individual consumption accounts for a much smaller proportion; systemic economic change is required (1).\n• Inequality — green choices (EVs, heat pumps, organic food) are more expensive; only the affluent can easily adopt low-carbon lifestyles, limiting the potential reach of individual action (1).\nConclusion:\n• Individual action is necessary but not sufficient; it is most effective when enabled and encouraged by government policy (carbon pricing, subsidies for green technology, regulation), which can change the systems within which individuals make choices. The framing of climate change as primarily an individual responsibility has been criticised as deflecting attention from the systemic changes needed (1, for developed, nuanced conclusion).",
        marks_scheme: "Level 3 (5-6 marks): balanced evaluation of potential impact of individual actions and their systemic limitations, with a nuanced conclusion about the relationship between individual and structural change. Level 2 (3-4 marks): discusses both sides with some specific examples. Level 1 (1-2 marks): basic points about individual actions. Credit: dietary change can reduce food footprint by 73%; transport choices save 1–2 tonnes CO₂/year; about 70% of industrial emissions since 1988 linked to 100 fossil fuel producers, limiting individual impact; green choices more expensive limiting reach."
      },
      {
        q: "\"The impacts of climate change will be felt most severely by the world's poorest people.\" Evaluate this statement. [8 marks]",
        marks: 8, tier: 'red',
        modelAnswer: "Evidence supporting the statement:\n• Agricultural vulnerability — LIDC populations in tropical regions (sub-Saharan Africa, South and South-East Asia) depend on rain-fed subsistence agriculture; even small changes in temperature and rainfall can cause crop failure and food insecurity; hundreds of millions of smallholder farmers are at risk (1).\n• Exposure to climate hazards — LIDC communities have lower adaptive capacity; SIDS like Kiribati and Tuvalu face existential threat from sea-level rise with no resources for coastal defence (1).\n• Health impacts — rising temperatures increase malaria, dengue, and cholera risk; LIDC health systems lack capacity to respond (1).\n• Climate migration — the World Bank projects 216 million internal climate migrants by 2050, overwhelmingly in sub-Saharan Africa, South Asia, and Latin America; LIDC governments cannot easily manage this displacement (1).\nCounterarguments / complexity:\n• ACs are not immune — European heatwaves (2003: ~70,000 deaths; 2022: ~60,000 excess deaths) show that wealthy countries also face severe impacts, particularly for vulnerable elderly populations (1).\n• Some LIDCs face less severe impacts — sub-polar and mountainous regions may benefit from longer growing seasons and reduced heating costs (1).\n• Arctic indigenous communities (ACs — Canada, Norway) face profound cultural and livelihood impacts from warming despite their countries' wealth (1).\nConclusion:\n• The statement is broadly correct — the injustice of climate change is that those who have contributed least (LIDCs are responsible for a fraction of historical emissions) face the worst impacts and have the least capacity to adapt. The concept of \"climate justice\" has entered international negotiations; wealthy nations bear a moral responsibility to support LIDC adaptation. However, the impacts of climate change are becoming increasingly universal, and no country will be immune from severe consequences (1).",
        marks_scheme: "Level 3 (7-8 marks): balanced evaluation of evidence supporting and complicating the statement with named examples and a conclusion about climate justice. Level 2 (4-6 marks): covers both supporting and complicating evidence with some specific examples. Level 1 (1-3 marks): basic points about differential impacts. Credit: LIDC subsistence farmers face crop failure; SIDS face existential threat from sea-level rise; European heatwaves killed ~70,000 in 2003; World Bank projects 216 million climate migrants by 2050 overwhelmingly in LIDCs."
      },
    ],
  },

  /* ── 1.4 Distinctive Landscapes: UK Landscapes and Coasts */
  '1.4': {
    green: [
      {
        q: "State two processes of coastal erosion.",
        marks: 2, tier: 'green',
        modelAnswer: "• Hydraulic action — the force of waves compressing air into cracks in rocks, breaking them apart (1).\n• Abrasion — waves hurl sediment against the cliff face, wearing it away like sandpaper (1).\n(Also accept: attrition — rocks colliding and becoming smaller and rounder; corrosion/solution — weak acids in seawater dissolving rock such as limestone.)",
        marks_scheme: "1 mark: hydraulic action — force of waves compressing air into cracks. 1 mark: abrasion — waves hurling sediment against cliff face."
      },
      {
        q: "Identify two landforms created by coastal deposition.",
        marks: 2, tier: 'green',
        modelAnswer: "• Beach — an accumulation of sand or shingle deposited between the low-tide and high-tide marks (1).\n• Spit — a long narrow ridge of sand or shingle extending from the coast, formed where longshore drift continues past a change in the coastline direction (1).\n(Also accept: bar, tombolo, sand dune system.)",
        marks_scheme: "1 mark: beach — accumulation of sand or shingle between tide marks. 1 mark: spit — narrow ridge extending from coast where longshore drift passes a change in direction."
      },
      {
        q: "State what is meant by longshore drift.",
        marks: 2, tier: 'green',
        modelAnswer: "Longshore drift is the movement of sediment along a coastline (1), caused by waves approaching the shore at an angle — swash carries material up the beach at the wave angle, while backwash returns it perpendicular to the shore due to gravity, gradually moving material along the coast (1).",
        marks_scheme: "1 mark: longshore drift is movement of sediment along a coastline. 1 mark: caused by waves approaching at an angle, with swash and backwash moving material progressively along the shore."
      },
      {
        q: "Name and describe one hard engineering coastal management strategy.",
        marks: 2, tier: 'green',
        modelAnswer: "• Sea wall — a concrete or rock barrier built at the base of cliffs or at the top of a beach to reflect wave energy and prevent erosion (1). It protects settlements directly behind it but can be expensive (£5,000–£10,000 per metre) and may increase erosion elsewhere (1).\n(Also accept: groynes, rock armour/rip-rap, revetments.)",
        marks_scheme: "1 mark: name a hard engineering strategy (e.g. sea wall). 1 mark: describe how it works and/or give a cost/effect."
      },
    ],
    amber: [
      {
        q: "Explain how a headland and bay are formed.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Where a coastline has alternating bands of hard and soft rock running perpendicular to the sea, differential erosion occurs (1).\n• Soft rock (e.g. clay, sandstone) is eroded more quickly than hard rock (e.g. chalk, granite), forming indentations called bays (1).\n• The harder rock is left protruding into the sea, forming a headland (1).\n• Headlands become exposed to more wave energy from three sides, concentrating erosion, while bays accumulate deposited sediment forming beaches (1).",
        marks_scheme: "1 mark: alternating hard and soft rock bands perpendicular to sea. 1 mark: soft rock eroded more quickly forming bays. 1 mark: hard rock left protruding as headland. 1 mark: headlands exposed to wave energy from three sides."
      },
      {
        q: "Explain the formation of a wave-cut platform. You may use a diagram.",
        marks: 4, tier: 'amber', diagram: true,
        modelAnswer: "• Waves attack the base of a cliff between the high and low tide marks, creating a wave-cut notch through hydraulic action and abrasion (1).\n• The notch deepens, undermining the cliff above until it becomes unsupported and collapses (1).\n• The collapsed material is gradually removed by further wave action (1).\n• As the cliff retreats, a gently sloping rocky platform is left exposed at low tide — the wave-cut platform (1).\n(Diagram should show: original cliff line, wave-cut notch, collapsed cliff debris, retreating cliff, and the flat wave-cut platform extending seaward.)",
        marks_scheme: "1 mark: waves attack cliff base creating wave-cut notch. 1 mark: notch deepens undermining cliff until it collapses. 1 mark: collapsed material removed by wave action. 1 mark: gently sloping rock platform left at low tide."
      },
      {
        q: "Describe and explain the formation of a spit.",
        marks: 5, tier: 'amber',
        modelAnswer: "• A spit forms where longshore drift transports sediment along a coastline and the coastline suddenly changes direction — for example, at an estuary mouth (1).\n• Sediment continues to be deposited in the same direction as longshore drift, building up a ridge of sand or shingle that extends into the sea (1).\n• The end of the spit may be curved — called a recurved end — due to waves refracting around the spit tip and secondary currents (1).\n• Deposition continues to extend the spit, but it cannot grow across a river estuary because river currents carry sediment away (1).\n• A sheltered lagoon or salt marsh often develops on the landward side of the spit where conditions are calmer (1).\n(Example: Spurn Head, Humber estuary; Blakeney Point, Norfolk.)",
        marks_scheme: "1 mark: forms where longshore drift passes a change in coastline direction. 1 mark: sediment deposited building up a ridge extending into the sea. 1 mark: end may be recurved due to wave refraction. 1 mark: cannot cross an estuary as river currents remove sediment. 1 mark: sheltered lagoon or salt marsh forms on landward side."
      },
      {
        q: "Explain why some coastlines are managed using a \"managed retreat\" or \"do nothing\" approach.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Managed retreat (coastal realignment) involves allowing the sea to flood low-value land, creating new intertidal habitats such as salt marshes, which act as natural buffers against wave energy (1).\n• It is significantly cheaper than hard engineering — saving millions in long-term maintenance costs for sea walls (1).\n• In some areas the land is of low economic value (e.g. agricultural fields), so the cost of defending it exceeds its worth — a \"do nothing\" approach is adopted (1).\n• Managed retreat also provides environmental benefits — new habitats for wildlife and carbon storage in salt marshes (1).\n(Example: Medmerry, West Sussex — largest managed retreat scheme in Europe, creating 183 hectares of new intertidal habitat.)",
        marks_scheme: "1 mark: managed retreat allows sea to flood low-value land creating intertidal habitats. 1 mark: significantly cheaper than hard engineering. 1 mark: land of low economic value so cost of defending exceeds its worth. 1 mark: provides environmental benefits — new habitats and carbon storage."
      },
    ],
    red: [
      {
        q: "Evaluate the effectiveness of hard engineering strategies to manage coastal erosion. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "• Sea walls are effective at protecting settlements directly behind them and reflecting wave energy, but they are very expensive (up to £10,000/m) and can cause increased erosion at their unprotected ends (outflanking) (1).\n• Groynes trap sediment and build up beaches, which are effective natural buffers; however, they starve beaches down-drift of sediment, causing erosion elsewhere — e.g. Mappleton, Yorkshire (1).\n• Rock armour (rip-rap) is relatively cheap and dissipates wave energy effectively, but it is visually intrusive and can be moved by extreme storms (1).\n• Hard engineering strategies often just transfer the erosion problem elsewhere rather than solving it, creating conflicts between communities (1).\n• Hard structures require ongoing maintenance and have a finite lifespan — sea walls may last 25–50 years before needing replacement, incurring further costs (1).\n• Overall, hard engineering is effective in the short term for protecting high-value assets (towns, infrastructure), but is unsustainable long-term and may not be cost-effective for lower-value coastlines — soft engineering and managed retreat are increasingly preferred (1).",
        marks_scheme: "Level 3 (5-6 marks): balanced evaluation of multiple hard engineering strategies with named examples, identifying both effectiveness and limitations, plus overall judgement. Level 2 (3-4 marks): describes effectiveness and limitations of at least two strategies. Level 1 (1-2 marks): basic descriptions of hard engineering strategies. Credit: sea walls reflect wave energy but cause erosion at their ends; groynes trap sediment but starve downdrift beaches; rock armour dissipates energy but is visually intrusive; hard engineering transfers erosion problem elsewhere."
      },
      {
        q: "\"Soft engineering is always a better approach than hard engineering for managing coastlines.\" Discuss this statement. [8 marks]",
        marks: 8, tier: 'red',
        modelAnswer: "Arguments in favour:\n• Beach nourishment works with natural processes rather than against them — adding sand to replenish beaches provides a natural buffer, is visually attractive and benefits tourism (1).\n• Dune stabilisation using marram grass is cheap, sustainable and creates valuable habitats (1).\n• Managed retreat is cost-effective and environmentally beneficial, especially for low-value agricultural land (e.g. Medmerry, Sussex — about £28 million, cheaper in the long term than repeatedly rebuilding the old shingle bank) (1).\n• Soft engineering addresses the cause of erosion rather than just its effects, creating more sustainable long-term solutions (1).\nArguments against:\n• Soft engineering is not always suitable — in high-value urban areas (e.g. Lyme Regis, Dorset), hard engineering such as sea walls is essential to protect homes and businesses (1).\n• Beach nourishment requires repeated applications and relies on a supply of suitable sediment, which may itself be costly to source and transport (1).\n• Managed retreat may be unacceptable to communities who face the loss of homes, farmland, and local heritage — social and political resistance is a major barrier (1).\nConclusion:\n• The best approach is often an integrated coastal management strategy combining both hard and soft engineering, tailored to the specific physical and human geography of each location; the statement is therefore an oversimplification (1).",
        marks_scheme: "Level 3 (7-8 marks): balanced discussion of both soft and hard engineering with named examples, addressing when each is appropriate, and a nuanced conclusion. Level 2 (4-6 marks): discusses both sides but with limited examples or underdeveloped conclusion. Level 1 (1-3 marks): basic points about soft or hard engineering. Credit: beach nourishment works with natural processes; managed retreat is cost-effective; hard engineering essential for high-value urban areas; integrated coastal management as best approach."
      },
    ],
  },

  /* ── 1.5 Distinctive Landscapes: Rivers */
  '1.5': {
    green: [
      {
        q: "State two processes of river erosion.",
        marks: 2, tier: 'green',
        modelAnswer: "• Hydraulic action — the force of fast-flowing water loosening and dislodging particles from the river bed and banks (1).\n• Abrasion — the river uses its load of rocks and sediment to scrape and wear away the channel (1).\n(Also accept: attrition — particles in the load collide and break into smaller, rounder pieces; corrosion/solution — slightly acidic water dissolves rock such as limestone.)",
        marks_scheme: "1 mark: hydraulic action — force of fast-flowing water dislodging particles. 1 mark: abrasion — river uses load to scrape and wear the channel."
      },
      {
        q: "Identify the four methods by which a river transports its load.",
        marks: 4, tier: 'green',
        modelAnswer: "• Traction — large boulders rolled along the river bed (1).\n• Saltation — medium-sized pebbles bounced along the river bed (1).\n• Suspension — fine silt and clay particles carried within the water (1).\n• Solution — minerals dissolved in the water and carried invisibly (1).",
        marks_scheme: "1 mark: traction — large boulders rolled along bed. 1 mark: saltation — pebbles bounced along bed. 1 mark: suspension — fine particles carried within water. 1 mark: solution — minerals dissolved and carried invisibly."
      },
      {
        q: "State what is meant by the long profile of a river.",
        marks: 2, tier: 'green',
        modelAnswer: "The long profile is a cross-section of a river from its source to its mouth showing how the gradient changes along its course (1). The gradient is steepest in the upper course and becomes progressively gentler towards the mouth, producing a concave curve — this is the graded profile (1).",
        marks_scheme: "1 mark: long profile is a cross-section from source to mouth showing gradient change. 1 mark: gradient is steepest in upper course and becomes progressively gentler towards mouth, forming a concave graded profile."
      },
      {
        q: "Name one landform found in the upper course of a river and describe its appearance.",
        marks: 2, tier: 'green',
        modelAnswer: "• V-shaped valley — a narrow, steep-sided valley formed by vertical erosion cutting down into the bedrock; the sides are steep because mass movement supplies material to the river which carries it away (1).\n(Also accept: waterfall — a sudden, near-vertical drop in a river's course where it flows from hard to soft rock; interlocking spurs — ridges of harder rock that force the river to wind around them in the upper course.)\n(Second mark for a clear, accurate description of the chosen feature.) (1)",
        marks_scheme: "1 mark: name a landform in the upper course (e.g. V-shaped valley). 1 mark: clear accurate description of the chosen feature."
      },
    ],
    amber: [
      {
        q: "Explain the formation of a waterfall and gorge. You may use a diagram.",
        marks: 4, tier: 'amber', diagram: true,
        modelAnswer: "• A waterfall forms where a river flows from a band of hard rock onto softer rock; the softer rock is eroded more rapidly by hydraulic action and abrasion, creating a step in the river's profile (1).\n• The falling water creates a plunge pool at the base; hydraulic action and abrasion undercut the hard rock, forming an overhang (1).\n• Eventually the overhang collapses and the waterfall retreats upstream; over time, repeated collapse creates a steep-sided gorge (1).\n• The river continues to cut downwards and the gorge deepens as the waterfall retreats further upstream (1).\n(Diagram: hard caprock, soft rock beneath, plunge pool, overhang/undercutting, retreating waterfall, gorge left behind.)\n(Example: High Force, River Tees — retreat over thousands of years has left a gorge about 700 m long.)",
        marks_scheme: "1 mark: waterfall forms where river flows from hard to soft rock, soft rock eroded more rapidly. 1 mark: falling water creates plunge pool and undercuts hard rock forming overhang. 1 mark: overhang collapses and waterfall retreats upstream. 1 mark: repeated collapse over time creates steep-sided gorge."
      },
      {
        q: "Explain how a meander develops and may eventually form an ox-bow lake.",
        marks: 5, tier: 'amber',
        modelAnswer: "• In the lower course, the river flows over a gentle gradient; any slight bend causes the fastest flow (thalweg) to be deflected to the outside of the bend (1).\n• Erosion by hydraulic action and abrasion occurs on the outside of the bend, undercutting it to form a river cliff; the meander becomes more pronounced (1).\n• On the inside of the bend, water flows more slowly; reduced energy means deposition of sediment, forming a slip-off slope or point bar (1).\n• Over time, the meander neck narrows as both bends erode towards each other; during a flood, the river may break through the narrow neck, taking a more direct route (1).\n• The old meander bend is cut off from the main channel; deposition seals both ends, forming a crescent-shaped ox-bow lake (1).\n(Example: River Cuckmere, East Sussex; River Mississippi, USA.)",
        marks_scheme: "1 mark: slight bend deflects fastest flow to outside, causing erosion forming river cliff. 1 mark: inside of bend has slower flow causing deposition forming slip-off slope. 1 mark: meander neck narrows as bends erode towards each other. 1 mark: river breaks through neck during flood taking direct route. 1 mark: old bend cut off and sealed by deposition forming ox-bow lake."
      },
      {
        q: "Describe and explain the changes in a river's characteristics from its source to its mouth.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Channel width and depth both increase downstream — discharge increases as more tributaries join; the larger channel has less friction relative to its volume (lower hydraulic radius), so the river flows more efficiently (1).\n• Velocity increases downstream despite a gentler gradient because friction is proportionally lower in the wider, deeper channel (1).\n• Sediment load decreases in size from the upper to lower course — attrition rounds and reduces particles over distance; fine silt and clay dominate in the lower course (1).\n• Erosion process changes from predominantly vertical (upper course) to lateral (lower course), widening the flood plain and creating meanders (1).",
        marks_scheme: "1 mark: channel width and depth increase downstream as discharge increases from tributaries. 1 mark: velocity increases despite gentler gradient due to lower proportional friction. 1 mark: sediment decreases in size downstream due to attrition. 1 mark: erosion changes from vertical to lateral, creating meanders and widening flood plain."
      },
      {
        q: "Explain how a flood plain is formed.",
        marks: 4, tier: 'amber',
        modelAnswer: "• A flood plain is the flat area of land either side of a river in its lower course, formed over thousands of years by a combination of erosion and deposition (1).\n• Lateral erosion by meanders widens the valley floor; as meanders migrate, they cut a broad, flat surface (1).\n• During floods, the river overtops its banks; velocity drops sharply beyond the channel, so the heaviest sediment is deposited first, forming levées along the banks; finer silt is deposited further across the flood plain (1).\n• Repeated flooding builds up a thick layer of fertile alluvium across the flood plain, making it agriculturally valuable (1).",
        marks_scheme: "1 mark: flood plain is flat area either side of river in lower course. 1 mark: lateral erosion by meanders widens the valley floor. 1 mark: during floods velocity drops beyond channel, depositing sediment as levées and alluvium. 1 mark: repeated flooding builds thick layer of fertile alluvium across the flood plain."
      },
    ],
    red: [
      {
        q: "Evaluate the effectiveness of strategies used to manage river flooding. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "Hard engineering:\n• Dams and reservoirs control river flow by storing excess water, protecting settlements downstream (e.g. Kielder Reservoir, River North Tyne) but are very expensive, flood large areas of land, and disrupt river ecosystems and sediment supply (1).\n• Channelisation (straightening, deepening, lining with concrete) increases flow speed, protecting immediate areas — but transfers flood risk further downstream (1).\n• Flood walls and embankments protect urban areas effectively (e.g. Thames Barrier, London) but are costly and can give a false sense of security, encouraging development on flood plains (1).\nSoft engineering:\n• Flood plain zoning restricts development in high-risk areas — sustainable and cheap, but limits economic development and is often politically unpopular (1).\n• Afforestation in catchments increases interception and infiltration, reducing peak discharge — cheap and sustainable but takes decades to mature and requires large land areas (1).\nConclusion:\n• An integrated flood management approach combining hard and soft measures is most effective — hard engineering protects existing high-value assets; soft engineering reduces the risk at source. Context matters: dense urban areas may require hard engineering while rural catchments suit softer approaches (1).",
        marks_scheme: "Level 3 (5-6 marks): balanced evaluation of hard and soft engineering flood management strategies with named examples and an overall judgement on effectiveness. Level 2 (3-4 marks): some comparison of strategies with limited examples. Level 1 (1-2 marks): basic descriptions of flood management strategies. Credit: dams control flow but are expensive and disrupt ecosystems; channelisation increases speed but transfers risk downstream; flood plain zoning is sustainable but limits development; afforestation reduces peak discharge but takes decades."
      },
      {
        q: "\"Human activity is the main cause of river flooding.\" To what extent do you agree with this statement? [8 marks]",
        marks: 8, tier: 'red',
        modelAnswer: "Human causes of flooding:\n• Urbanisation increases impermeable surfaces (roofs, tarmac), reducing infiltration and increasing surface runoff — lag time is shortened and peak discharge rises, increasing flood risk (e.g. Boscastle, 2004 — narrow bridges and culverts trapped debris and made the flood worse) (1).\n• Deforestation removes trees that intercept rainfall and use water through transpiration; runoff reaches rivers faster and in greater volume (1).\n• Floodplain development removes natural storage — building on flood plains leaves nowhere for excess water to go (1).\n• Climate change (human-driven) is intensifying rainfall events, increasing frequency of extreme storms (1).\nPhysical causes:\n• Intense or prolonged rainfall — more precipitation than the drainage basin can absorb (e.g. River Severn floods, 2007 — weeks of above-average rainfall saturated catchment) (1).\n• Impermeable geology (clay, granite) naturally limits infiltration regardless of human activity (1).\n• Snowmelt and frozen ground in spring can cause rapid increases in discharge (1).\nConclusion:\n• Both physical and human factors cause flooding, and they often interact — a flood event may require a physical trigger (extreme rainfall) but human activity amplifies the impact. In many modern cases, human modification of drainage basins has significantly increased flood risk, so the statement has considerable merit; however, physical geography remains an important underlying control — a balanced conclusion is appropriate (1).",
        marks_scheme: "Level 3 (7-8 marks): balanced discussion of both human and physical causes with named examples and a nuanced conclusion about relative importance. Level 2 (4-6 marks): identifies both causes but limited development or examples. Level 1 (1-3 marks): basic points about causes of flooding. Credit: urbanisation reduces infiltration and shortens lag time; deforestation increases runoff volume; intense/prolonged rainfall as physical trigger; impermeable geology naturally limits infiltration."
      },
    ],
  },

  /* ── 1.6 Sustaining Ecosystems: Tropical Rainforests */
  '1.6': {
    green: [
      {
        q: "State two characteristics of the tropical rainforest climate.",
        marks: 2, tier: 'green',
        modelAnswer: "• High temperatures throughout the year — typically 26–28°C with very little seasonal variation, as the equatorial location means the sun is always high in the sky (1).\n• High and reliable rainfall — typically 2,000 mm or more per year, falling throughout the year and often as convectional afternoon storms (1).",
        marks_scheme: "1 mark: high temperatures throughout year (~26–28°C) with little seasonal variation. 1 mark: high and reliable rainfall (2000 mm+/year) falling throughout the year, often as convectional afternoon storms."
      },
      {
        q: "Identify two ways in which plants in the tropical rainforest are adapted to the environment.",
        marks: 2, tier: 'green',
        modelAnswer: "• Drip tips — leaves have pointed tips to shed heavy rainfall quickly, preventing the growth of algae and bacteria that would damage the leaf (1).\n• Buttress roots — large flared roots support the tall emergent trees and allow them to access nutrients from the thin surface soil (1).\n(Also accept: smooth bark to shed rain; waxy leaf surfaces; epiphytes growing on branches to reach light; lianas climbing towards the canopy.)",
        marks_scheme: "1 mark: drip tips — leaves have pointed tips to shed heavy rainfall quickly. 1 mark: buttress roots — large flared roots support tall trees and access surface nutrients."
      },
      {
        q: "State two reasons why tropical rainforests are important at a global scale.",
        marks: 2, tier: 'green',
        modelAnswer: "• Carbon store — tropical rainforests store approximately 250 billion tonnes of carbon in their biomass and soils; they act as major carbon sinks, absorbing CO₂ and helping regulate global climate (1).\n• Biodiversity — they are home to over 50% of the world's species despite covering only around 6% of Earth's land surface, making them critical reservoirs of biodiversity (1).\n(Also accept: oxygen production; water cycle regulation; medicines derived from rainforest plants.)",
        marks_scheme: "1 mark: carbon store — store ~250 billion tonnes of carbon, acting as major carbon sinks. 1 mark: biodiversity — home to over 50% of world species despite covering only 6% of land surface."
      },
      {
        q: "Name and describe the layers of the tropical rainforest.",
        marks: 4, tier: 'green',
        modelAnswer: "• Emergent layer — tallest trees (40–60 m) rising above the main canopy, exposed to full sun and wind (1).\n• Canopy layer — dense, continuous layer of branches and leaves at ~20–30 m, intercepting most sunlight and rainfall (1).\n• Understorey — shade-tolerant shrubs and smaller trees below the canopy; little wind, high humidity (1).\n• Forest floor — very little light reaches here; decomposers rapidly recycle nutrients from dead organic matter; ground plants adapted to low light (1).",
        marks_scheme: "1 mark: emergent layer — tallest trees 40–60 m rising above canopy, exposed to full sun. 1 mark: canopy layer — dense continuous layer at 20–30 m intercepting most sunlight and rainfall. 1 mark: understorey — shade-tolerant shrubs and smaller trees below canopy, high humidity. 1 mark: forest floor — very little light, decomposers rapidly recycle nutrients from dead matter."
      },
    ],
    amber: [
      {
        q: "Explain how nutrients are cycled in the tropical rainforest ecosystem.",
        marks: 4, tier: 'amber',
        modelAnswer: "• The nutrient cycle in the tropical rainforest is rapid and efficient — almost all nutrients are stored in the biomass (living plants) rather than the soil (1).\n• Leaf litter and dead organic matter fall to the forest floor and are decomposed very quickly by bacteria and fungi in the hot, humid conditions — nutrients are released into the thin topsoil (1).\n• Plant roots near the surface quickly absorb nutrients before they can be washed away (leached) by heavy rainfall — the cycle keeps nutrients in the living system (1).\n• The soil is therefore surprisingly infertile — it is thin, acidic, and nutrient-poor; when the forest is cleared, nutrients are lost rapidly through leaching, making the land unsuitable for farming within a few years (1).",
        marks_scheme: "1 mark: nutrient cycle is rapid — almost all nutrients stored in biomass rather than soil. 1 mark: leaf litter decomposed quickly by bacteria and fungi releasing nutrients into thin topsoil. 1 mark: plant roots near surface quickly absorb nutrients before leaching by heavy rainfall. 1 mark: when forest is cleared nutrients are rapidly lost through leaching making land unsuitable for farming."
      },
      {
        q: "Explain the causes of deforestation in tropical rainforests. Refer to a named example.",
        marks: 4, tier: 'amber',
        modelAnswer: "(Amazon, Brazil / Congo Basin / Borneo — credit any named example with specific data.)\n• Commercial farming — in the Amazon, large-scale soy bean farming and cattle ranching are the leading causes; Brazil exports millions of tonnes of soy annually, driving continued forest clearance (1).\n• Logging — both legal and illegal logging for valuable hardwoods (mahogany, teak) is widespread; Indonesia lost around 25 million hectares of forest between 1990 and 2015 (1).\n• Mining — the Amazon contains large deposits of iron ore, gold, and bauxite; open-cast mining clears forest and contaminates rivers with heavy metals (e.g. Serra Pelada, Brazil) (1).\n• Road building — infrastructure projects open up previously inaccessible forest to settlers, loggers, and farmers; the Trans-Amazonian Highway opened large areas to clearance (1).",
        marks_scheme: "1 mark: commercial farming — soy and cattle ranching leading causes in Amazon. 1 mark: logging — legal and illegal removal of valuable hardwoods. 1 mark: mining — open-cast mining for iron ore, gold, bauxite clears forest and contaminates rivers. 1 mark: road building — infrastructure projects open up previously inaccessible forest."
      },
      {
        q: "Explain the effects of deforestation on the local environment and the people who depend on the rainforest.",
        marks: 5, tier: 'amber',
        modelAnswer: "• Loss of biodiversity — deforestation destroys habitat, driving species to extinction before scientists can even identify them; the world's rainforests are estimated to lose up to 137 species per day (1).\n• Soil erosion — without tree roots holding soil together and interception reducing raindrop impact, heavy rain rapidly erodes unprotected topsoil; rivers become choked with sediment (1).\n• Disruption of the water cycle — reduced transpiration leads to less moisture in the atmosphere, decreasing regional rainfall and potentially turning cleared areas into savannah (1).\n• Indigenous communities — groups such as the Kayapo in Brazil lose their homeland and traditional way of life; forced displacement causes cultural loss, poverty, and health impacts (1).\n• Local communities who depended on forest products (non-timber forest products, bushmeat, medicines) lose their livelihoods, increasing poverty (1).",
        marks_scheme: "1 mark: loss of biodiversity — destroys habitat driving species to extinction. 1 mark: soil erosion — without tree roots heavy rain rapidly erodes unprotected topsoil. 1 mark: disruption of water cycle — reduced transpiration decreases regional rainfall. 1 mark: indigenous communities lose homeland and traditional way of life. 1 mark: local communities lose livelihoods from forest products."
      },
      {
        q: "Describe and explain one strategy used to manage tropical rainforests sustainably.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Ecotourism — allows visitors to experience the rainforest with minimal environmental impact, providing income for local communities and creating an economic incentive to protect the forest (1).\n• Revenue from ecotourism can fund conservation, ranger patrols to prevent illegal logging and poaching, and education programmes (1).\n• Successful examples include the Amazon jungle lodges of the Peruvian Amazon, where local indigenous guides lead tours — communities earn more from keeping the forest standing than clearing it (1).\n• However, ecotourism can be limited in scale — it cannot replace the economic returns from large-scale farming or mining for many governments — and poorly managed tourism can itself damage sensitive ecosystems (1).",
        marks_scheme: "1 mark: ecotourism allows visitors to experience the forest with minimal environmental impact, providing income for local communities. 1 mark: revenue funds conservation, ranger patrols, and education programmes. 1 mark: successful examples where local guides earn more from keeping forest standing than clearing it. 1 mark: limitations — cannot replace returns from large-scale farming; poorly managed tourism can damage ecosystems."
      },
    ],
    red: [
      {
        q: "Evaluate the extent to which tropical rainforests can be used sustainably. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "Evidence that sustainable use is possible:\n• Selective logging — removing only mature trees while leaving the structure of the forest intact allows regeneration; certified timber (FSC — Forest Stewardship Council) schemes exist in Brazil and Indonesia (1).\n• REDD+ (Reducing Emissions from Deforestation and Forest Degradation) — international payments to developing countries that protect their forests; Brazil's Amazon Fund, a REDD+-style scheme backed mainly by Norway, rewarded Brazil after deforestation fell by about 80% from the 2004 peak by 2012 (mainly through stronger monitoring and law enforcement) (1).\n• Ecotourism and non-timber forest product harvesting (nuts, fruits, rubber) can generate income without clearing — e.g. Brazil nut industry in the Amazon (1).\nLimitations:\n• Economic pressures are enormous — debt-laden countries like Brazil and Indonesia face strong incentives to convert forest to agricultural land; soy and cattle are far more profitable per hectare than sustainable forestry (1).\n• Enforcement is extremely difficult in remote rainforest regions — illegal logging and land clearance continues despite laws (e.g. Amazon deforestation under Bolsonaro government rose sharply) (1).\nConclusion:\n• Sustainable use is technically possible and examples demonstrate it can work at a local scale, but global economic systems continue to drive unsustainable deforestation; without stronger international frameworks, financial incentives, and enforcement, truly sustainable management of rainforests at scale remains aspirational rather than a reality (1).",
        marks_scheme: "Level 3 (5-6 marks): balanced evaluation of evidence that sustainable use is possible and limitations, with named examples, and a realistic overall conclusion. Level 2 (3-4 marks): discusses both possibilities and limitations with some evidence. Level 1 (1-2 marks): basic points about sustainable use. Credit: selective logging and FSC certification; REDD+ international payments (Amazon deforestation fell 80%); ecotourism and non-timber products; economic pressures and enforcement difficulty."
      },
      {
        q: "\"The economic development needs of tropical countries outweigh the arguments for conserving rainforests.\" Discuss. [8 marks]",
        marks: 8, tier: 'red',
        modelAnswer: "Arguments supporting the statement (development):\n• Countries like Brazil and Indonesia argue that developed nations cleared their own forests for economic growth centuries ago — it is unfair to deny developing countries the same right to use their resources for poverty reduction (1).\n• Agriculture (soy, palm oil, cattle) generates billions in export income and employs millions of people — Brazil's wider agribusiness sector accounts for around a quarter of GDP (1).\n• Mining and logging provide government revenue that funds schools, hospitals, and infrastructure in countries where many still lack basic services (1).\nArguments against (conservation):\n• Rainforests provide ecosystem services of incalculable global value — climate regulation, water cycling, biodiversity — that benefit all humanity, not just the host nation (1).\n• Once cleared, rainforests are very difficult to restore — the nutrient cycle breaks down, soils erode, and biodiversity losses are largely irreversible (1).\n• The economic benefits of forest clearance are often short-term — soils exhausted within years, forcing further clearance; sustainable forest use offers longer-term income (1).\n• Indigenous peoples' rights — clearance often violates the rights of communities whose livelihoods and cultures depend on the forest (1).\nConclusion:\n• A binary choice is a false dichotomy; sustainable development models exist that can provide economic growth while protecting forest. The real challenge is creating international financial systems that make conservation more profitable than destruction — until that happens, economic pressures will continue to drive deforestation. Rich nations have a particular responsibility to fund conservation as they benefit most from the ecosystem services rainforests provide (1).",
        marks_scheme: "Level 3 (7-8 marks): balanced discussion of development needs vs. conservation arguments with named examples and a nuanced conclusion rejecting the binary framing. Level 2 (4-6 marks): covers both sides but limited development or examples. Level 1 (1-3 marks): basic points on one side. Credit: developing countries argue right to use resources for poverty reduction; ecosystem services benefit all humanity; economic benefits of clearance are short-term; indigenous peoples's rights."
      },
    ],
  },

  /* ── 1.7 Sustaining Ecosystems: Polar Environments */
  '1.7': {
    green: [
      {
        q: "Define the term \"permafrost\".",
        marks: 1, tier: 'green',
        modelAnswer: "Ground that remains frozen (at or below 0°C) for at least two consecutive years (1).",
        marks_scheme: "1 mark: permanently frozen ground / ground frozen for at least two years."
      },
      {
        q: "State two characteristics of the climate of a tundra environment.",
        marks: 2, tier: 'green',
        modelAnswer: "• Very cold winters, often −30°C to −40°C, with a short summer of 6–10 weeks above 0°C (1).\n• Low precipitation, around 150–380 mm a year, mostly falling as snow (1).",
        marks_scheme: "1 mark each: long, very cold winters; short cool summers; low precipitation; strong winds; long periods of darkness in winter/daylight in summer."
      },
      {
        q: "Give two ways in which plants are adapted to cold environments.",
        marks: 2, tier: 'green',
        modelAnswer: "• Low-growing, cushion shapes shelter them from cold winds and keep them insulated under snow (1).\n• Shallow roots spread sideways because only the active layer thaws (1).\n(Also accept: short life cycles, dark leaves, small waxy or hairy leaves.)",
        marks_scheme: "1 mark per adaptation: low-growing; shallow roots; short life cycle; dark leaves absorb heat; small/waxy/hairy leaves reduce water loss."
      },
      {
        q: "State two reasons why cold environments are valuable wilderness areas.",
        marks: 2, tier: 'green',
        modelAnswer: "• Scientific research — ice cores provide a record of past climate going back 800,000 years (1).\n• They store huge amounts of carbon in permafrost, helping regulate the global climate (1).\n(Also accept: unique wildlife, indigenous cultures, unspoilt landscapes for recreation.)",
        marks_scheme: "1 mark per reason: scientific research; biodiversity/unique species; climate regulation/carbon store; indigenous cultures; scenery/recreation."
      },
    ],
    amber: [
      {
        q: "Explain the interdependence between climate, permafrost, plants and animals in a tundra environment.",
        marks: 4, tier: 'amber',
        modelAnswer: "The very cold climate means the ground is permanently frozen (permafrost), so roots cannot grow deep and trees cannot survive (1). Only low-growing mosses, lichens and shrubs grow, and they insulate the permafrost, stopping it thawing in summer (1). These plants are the main food for caribou and lemmings, which in turn are eaten by predators such as Arctic foxes and wolves (1). If vegetation is removed, the permafrost thaws and the ground becomes boggy, harming plants and the animals that depend on them (1).",
        marks_scheme: "1 mark per explained link: climate → permafrost; permafrost → shallow-rooted plants; plants insulate permafrost; plants → herbivores → predators; disturbance of one part affects others."
      },
      {
        q: "Using a named example, describe the development opportunities in a cold environment.",
        marks: 4, tier: 'amber',
        modelAnswer: "In Alaska, oil is the main opportunity — Prudhoe Bay on the North Slope was the largest oilfield in North America and funds most of the state budget and the Alaska Permanent Fund dividend (1). Mineral extraction includes gold and zinc, e.g. the Red Dog Mine (1). Fishing is very important — Alaska lands about 60% of US seafood, including salmon and pollock (1). Tourism attracts over 2 million visitors a year for glaciers, wildlife and the Northern Lights (1).",
        marks_scheme: "1 mark per opportunity with Alaska detail: oil/gas; minerals; fishing; tourism; energy (e.g. hydro)."
      },
      {
        q: "Explain the challenges of developing a cold environment.",
        marks: 4, tier: 'amber',
        modelAnswer: "Extreme temperatures below −40°C make outdoor work dangerous and freeze machinery, increasing costs (1). Inaccessibility — vast distances, mountains and few roads mean many places can only be reached by air or ice road, making transport expensive (1). Building on permafrost is difficult because heat from buildings and pipelines thaws the ground, causing subsidence; buildings must be raised on piles (1). The environment is fragile, so developments such as oil extraction risk spills like the Exxon Valdez (1989) that cause long-lasting damage (1).",
        marks_scheme: "1 mark per explained challenge: extreme cold; inaccessibility; permafrost/buildings and infrastructure; fragile environment/pollution risk; short daylight in winter; small workforce."
      },
      {
        q: "Explain why cold environments are fragile.",
        marks: 4, tier: 'amber',
        modelAnswer: "Plants grow very slowly in the short, cold growing season, so damaged vegetation can take decades to recover — vehicle tracks can remain visible for 50 years (1). Low temperatures slow decomposition, so pollution such as oil breaks down extremely slowly (1). Food webs are simple with few species, so losing one species (e.g. a crash in lemming numbers) affects many others (1). Removing vegetation lets the permafrost thaw, causing subsidence and releasing greenhouse gases (1).",
        marks_scheme: "1 mark per explained reason: slow plant growth/recovery; slow decomposition; simple food webs; permafrost easily disturbed; climate change sensitivity."
      },
    ],
    red: [
      {
        q: "Evaluate the strategies used to balance the needs of economic development and conservation in cold environments.",
        marks: 9, tier: 'red',
        modelAnswer: "Technology reduces the impact of development: the Trans-Alaska Pipeline is raised so caribou can migrate and the permafrost stays frozen, and directional drilling from single pads disturbs much less land than in the 1970s. However, accidents can still happen, as the Exxon Valdez spill showed. Governments can protect large areas by law — the Arctic National Wildlife Refuge protects 78,000 km² — but political decisions change, and drilling leases in ANWR have been repeatedly debated. International agreements such as the Antarctic Treaty, with its 1991 ban on mining, have been very successful at keeping Antarctica for science, though this depends on continued cooperation. Conservation groups such as Greenpeace raise awareness and helped persuade Shell to abandon Arctic drilling in 2015, but they have no legal power. Overall, a combination of strict laws, international cooperation and technology is most effective; balance is easiest in Antarctica, where there is no permanent population or economy, and hardest in Alaska, where jobs and state income depend on oil.",
        marks_scheme: "Level 3 (7–9): detailed evaluation of several strategies (technology, governments, international agreements, conservation groups) with specific examples and a well-supported judgement. Level 2 (4–6): some evaluation with examples, partial judgement. Level 1 (1–3): description of strategies with little evaluation."
      },
      {
        q: "\"The development opportunities in cold environments outweigh the challenges.\" Do you agree?",
        marks: 6, tier: 'red',
        modelAnswer: "In Alaska, opportunities are significant: oil from Prudhoe Bay funds most of the state budget and an annual dividend for every resident; fishing lands about 60% of US seafood; tourism brings over 2 million visitors. However, the challenges are severe: extreme cold and inaccessibility make development expensive; permafrost means buildings and pipelines need costly engineering; and accidents such as the Exxon Valdez spill caused long-term damage. Climate change is adding to the challenges as thawing permafrost damages infrastructure. Overall, the opportunities can outweigh the challenges where valuable resources justify the cost and technology reduces risks, but the environmental costs are high and not all communities benefit equally.",
        marks_scheme: "Level 3 (5–6): balanced discussion of opportunities and challenges with named-example detail and a supported judgement. Level 2 (3–4): some balance and detail. Level 1 (1–2): simple points with limited support."
      },
    ],
  },

  /* ── 2.1 Urban Futures */
  '2.1': {
    green: [
      {
        q: "State what is meant by urbanisation.",
        marks: 2, tier: 'green',
        modelAnswer: "Urbanisation is the process by which an increasing proportion of a country's population lives in urban areas (towns and cities) rather than rural areas (1). It is caused by rural-to-urban migration and natural population increase within cities, and it is associated with economic development as countries industrialise (1).",
        marks_scheme: "1 mark: urbanisation is increasing proportion of population living in urban areas. 1 mark: caused by rural-to-urban migration and natural increase, associated with industrialisation."
      },
      {
        q: "State two differences in the rate of urbanisation between ACs and LIDCs.",
        marks: 2, tier: 'green',
        modelAnswer: "• ACs (e.g. UK, USA) have slow or stagnant rates of urbanisation as they are already highly urbanised (typically 75–85% urban); LIDCs and MICs (e.g. Nigeria, India) have rapid urbanisation rates as they are still industrialising (1).\n• In some ACs, counter-urbanisation (movement from cities to rural areas) partially offsets urbanisation; in LIDCs, strong rural-to-urban migration continues to drive rapid urban growth (1).",
        marks_scheme: "1 mark: ACs have slow/stagnant urbanisation as already highly urbanised; LIDCs have rapid rates as still industrialising. 1 mark: counter-urbanisation occurs in some ACs; strong rural-to-urban migration continues in LIDCs."
      },
      {
        q: "Identify two push factors that cause people to migrate from rural to urban areas in developing countries.",
        marks: 2, tier: 'green',
        modelAnswer: "• Poverty and lack of economic opportunity — few jobs available in rural areas; subsistence farming provides an uncertain and low income (1).\n• Natural disasters and environmental change — drought, flooding, and desertification can destroy farming livelihoods, forcing people to seek opportunities in cities (1).\n(Also accept: conflict, lack of services, mechanisation of agriculture reducing farm employment.)",
        marks_scheme: "1 mark: poverty and lack of economic opportunity — few jobs in rural areas. 1 mark: natural disasters and environmental change destroying farming livelihoods."
      },
      {
        q: "State what is meant by a megacity.",
        marks: 1, tier: 'green',
        modelAnswer: "A megacity is an urban area with a population of more than 10 million people (1). Examples include Tokyo (37 million), Delhi (32 million), Mexico City (22 million), and São Paulo (22 million).",
        marks_scheme: "1 mark: a megacity is an urban area with a population of more than 10 million people."
      },
    ],
    amber: [
      {
        q: "Explain the differences in urban land use patterns between ACs and LIDCs.",
        marks: 4, tier: 'amber',
        modelAnswer: "• In ACs, land use typically follows the Burgess concentric zone model — a CBD in the centre, surrounded by inner-city terraced housing (often gentrified), then inter-war suburbs, with newer affluent housing on the urban fringe; the poorest tend to live in inner-city areas (1).\n• In LIDCs and MICs, the pattern is often reversed — the wealthy live near the city centre or in gated communities on the outskirts, while the poorest live in informal squatter settlements (favelas, barrios) on the urban fringe or in environmentally hazardous areas (1).\n• LIDC cities often lack formal planning — informal settlements (shanty towns) grow spontaneously wherever land is unoccupied, often on steep slopes, riverbanks, or near industrial sites (1).\n• ACs have well-defined suburban areas with planned infrastructure; LIDC cities have rapidly growing peri-urban zones with limited access to clean water, sanitation, electricity, and roads (1).",
        marks_scheme: "1 mark: ACs follow concentric zone model — CBD, inner-city housing, inter-war suburbs, affluent fringe; poorest in inner city. 1 mark: LIDCs often reversed — wealthy near centre or in gated communities; poorest in informal settlements on urban fringe. 1 mark: LIDC cities often lack formal planning — informal settlements grow wherever land is unoccupied. 1 mark: ACs have planned suburban infrastructure; LIDC peri-urban zones lack clean water, sanitation, and roads."
      },
      {
        q: "Explain why squatter settlements develop in cities in LIDCs and MICs.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Rapid rural-to-urban migration brings more people to cities than formal housing can accommodate — migrants cannot afford formal housing and so occupy unused land illegally, building makeshift shelters from salvaged materials (1).\n• Governments in LIDCs lack the resources to build enough affordable housing to keep pace with population growth — urban populations grow by around 3–4% per year in cities like Lagos and Dhaka (1).\n• Migrants are often attracted by the perceived economic opportunities of the city; on arrival they settle close to industrial or commercial areas where work might be found (1).\n• Land ownership laws are weak or unenforced, making informal occupation possible; over time, settlements may be given legal recognition (e.g. favelas in Rio de Janeiro) (1).",
        marks_scheme: "1 mark: rapid rural-to-urban migration brings more people than formal housing can accommodate; migrants occupy land illegally. 1 mark: LIDC governments lack resources to build enough affordable housing to keep pace. 1 mark: migrants attracted by economic opportunities settle near industrial areas where work may be found. 1 mark: weak land ownership laws make informal occupation possible; over time settlements may gain legal recognition."
      },
      {
        q: "Explain how economic development leads to changes in land use in a city.",
        marks: 4, tier: 'amber',
        modelAnswer: "• As cities grow economically, the CBD expands outward — shops, offices, and financial institutions replace older residential housing; land values in the centre rise significantly (1).\n• Deindustrialisation in ACs leads to derelict industrial land becoming available for regeneration — former factory sites are redeveloped as retail, leisure, or housing (e.g. London Docklands) (1).\n• Suburbanisation occurs as higher incomes allow people to move to the urban fringe, creating low-density residential areas; this is facilitated by improved transport links and car ownership (1).\n• In LIDC cities, rapid economic growth attracts foreign investment — new business districts (e.g. Gurgaon, India; Shanghai's Pudong district) are created, often displacing residential and agricultural land on the city edge (1).",
        marks_scheme: "1 mark: as cities grow economically the CBD expands, replacing residential housing; land values rise. 1 mark: deindustrialisation frees derelict industrial land for regeneration as retail, leisure, or housing. 1 mark: suburbanisation occurs as higher incomes allow movement to urban fringe with improved transport. 1 mark: in LIDC cities rapid growth attracts foreign investment creating new business districts, displacing residential and agricultural land."
      },
      {
        q: "Describe and explain the challenges of managing urban growth on the rural-urban fringe.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Pressure for new housing — population growth and household formation in and around UK cities creates demand for new homes; the rural-urban fringe is the main available location, but development threatens agricultural land and wildlife habitats (1).\n• Greenbelt policy restricts development around major cities to prevent urban sprawl — this protects open space and countryside but can push house prices up by limiting supply (1).\n• Traffic congestion — new suburban and peri-urban development increases car dependency; rural roads and ring roads become congested, increasing pollution and travel times (1).\n• Loss of services in rural areas — as new commuter suburbs grow, local shops and schools in surrounding villages lose trade; local character changes as urban culture and residents move in (1).",
        marks_scheme: "1 mark: pressure for new housing threatens agricultural land and wildlife habitats on rural-urban fringe. 1 mark: greenbelt policy restricts development to prevent urban sprawl but can push house prices up. 1 mark: traffic congestion from new suburban development increases pollution and travel times. 1 mark: loss of services in rural areas as new commuter suburbs change local character and reduce trade."
      },
    ],
    red: [
      {
        q: "Evaluate the success of strategies used to manage urbanisation in either a LIDC or AC city. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "(Rio de Janeiro, Brazil — MIC example — credit any appropriate named city with specific evidence.)\n• Favela Bairro project (Rio) — upgrading of favelas rather than clearance; paved streets, water and sewage connections, schools, and health centres built in dozens of favelas, benefiting hundreds of thousands of residents (1). Successes: improved living conditions, tenure security, reduced disease; limitations: only reached a fraction of the 1.4 million favela residents; crime and gang control remained a problem in many upgraded areas (1).\n• UPP (Pacifying Police Units) — police occupied and \"pacified\" key favelas; initially reduced crime and attracted investment but by 2016 violence had returned to many areas as funding fell (1).\n• Porto Maravilha (Port Revitalisation) — redeveloping the port area; attracted investment and improved infrastructure but criticised for displacing poorer residents through gentrification (1).\n• Overall: strategies have had mixed success — physical improvements have been made but social inequality, crime, and lack of economic opportunity remain severe; the scale of the challenge (over 1 million people in informal settlements) means that individual projects have limited overall impact without broader economic reform (1).\nConclusion: urban management strategies work best when they involve communities in planning, provide long-term funding, and address both physical infrastructure and economic opportunity simultaneously (1).",
        marks_scheme: "Level 3 (5-6 marks): balanced evaluation of named city strategies with specific evidence of successes and limitations, plus an overall conclusion. Level 2 (3-4 marks): some specific detail about strategies but limited evaluation or conclusion. Level 1 (1-2 marks): basic description of one strategy. Credit: Favela Bairro improved 70 favelas benefiting 250,000 residents; UPP initially reduced crime but violence returned; Porto Maravilha attracted investment but displaced residents; scale of challenge limits impact of individual projects."
      },
      {
        q: "\"The challenges of UK cities are now mainly social rather than economic.\" Discuss this statement. [8 marks]",
        marks: 8, tier: 'red',
        modelAnswer: "Social challenges:\n• Deprivation and inequality remain significant — UK cities contain both the wealthiest and most deprived communities in the country; in London, life expectancy differs by several years between the richest and poorest boroughs, and by over a decade between some wards (1).\n• Housing affordability — the average London house price in 2024 was ~£500,000; average income ~£40,000; millions priced out of ownership and spending 50%+ of income on rent (1).\n• Ethnic and racial inequalities — segregation persists in many UK cities; ethnic minority communities often face higher poverty rates, overcrowded housing, and poorer health outcomes (1).\n• Mental health and loneliness — urban isolation, particularly in high-rise estates and among the elderly, is increasingly recognised as a major public health challenge (1).\nEconomic challenges (still significant):\n• Regional economic inequality — Northern cities continue to lag London and the South-East in wages, productivity, and investment despite decades of regional policy (\"Levelling Up\") (1).\n• Post-pandemic high street decline — retail closures have accelerated in many city centres; unemployment in some urban areas remains above national average (1).\n• Skills mismatch — deindustrialised cities struggle to retain young talent as graduates move to London; knowledge economy jobs cluster disproportionately in the capital (1).\nConclusion:\n• Economic and social challenges are deeply intertwined — poverty drives poor social outcomes, and social disadvantage limits economic participation. While the nature of economic challenges has shifted from industrial decline to knowledge-economy inequality, economic issues remain fundamental; the statement somewhat overstates the social dimension. True improvement requires addressing both simultaneously (1).",
        marks_scheme: "Level 3 (7-8 marks): balanced discussion of social and economic challenges with named examples and a nuanced conclusion about their interconnection. Level 2 (4-6 marks): covers both sides with some development. Level 1 (1-3 marks): basic points about one type of challenge. Credit: London inequality — life expectancy gaps of several years between richest and poorest boroughs; housing affordability (average London house ~£500k); Northern cities lag London in wages and productivity; economic and social challenges are deeply intertwined."
      },
    ],
  },

  /* ── 2.2 Dynamic Development */
  '2.2': {
    green: [
      {
        q: "State what is meant by an LIDC.",
        marks: 1, tier: 'green',
        modelAnswer: "A Low-Income Developing Country — one with low income per person, a low HDI and many people working in farming, e.g. Ethiopia (1).",
        marks_scheme: "1 mark: low-income developing country with low income/HDI."
      },
      {
        q: "State two stages of Rostow's model of economic development.",
        marks: 2, tier: 'green',
        modelAnswer: "• Traditional society — mainly subsistence farming (1).\n• Take-off — rapid growth of manufacturing industry (1).\n(Also accept: pre-conditions for take-off; drive to maturity; high mass consumption.)",
        marks_scheme: "1 mark per correct stage, up to 2."
      },
      {
        q: "State what is meant by the Human Development Index (HDI).",
        marks: 2, tier: 'green',
        modelAnswer: "The HDI is a composite measure of development combining three indicators: life expectancy (health), mean and expected years of schooling (education), and Gross National Income (GNI) per capita at purchasing power parity (standard of living) (1). It produces a score between 0 and 1; countries above 0.8 are considered \"very high development\" (e.g. Norway: 0.966), while scores below 0.55 indicate low development (e.g. Niger: 0.394) (1).",
        marks_scheme: "1 mark: HDI combines life expectancy, education (mean and expected years of schooling), and GNI per capita. 1 mark: produces score between 0 and 1 — above 0.8 is very high development (e.g. Norway 0.966); below 0.55 is low development."
      },
      {
        q: "Identify two social indicators of development.",
        marks: 2, tier: 'green',
        modelAnswer: "• Life expectancy — the average number of years a person born today can expect to live; generally higher in more developed countries (e.g. Japan: 84 years; Chad: 54 years) (1).\n• Infant mortality rate — the number of children who die before their first birthday per 1,000 live births; inversely correlated with development (e.g. Finland: 2; Sierra Leone: 77 per 1,000) (1).\n(Also accept: literacy rate, years of schooling, access to clean water/sanitation, doctors per 1,000 people.)",
        marks_scheme: "1 mark: life expectancy — average years a person born today can expect to live; generally higher in more developed countries. 1 mark: infant mortality rate — number of children dying before first birthday per 1,000 live births; inversely correlated with development."
      },
    ],
    amber: [
      {
        q: "Explain the role of TNCs in the development of a named LIDC.",
        marks: 4, tier: 'amber',
        modelAnswer: "In Ethiopia, the government has built industrial parks such as Hawassa to attract clothing TNCs and suppliers to brands such as PVH (1). These create tens of thousands of jobs, many for young women, and bring export earnings and skills (1). However, wages are among the lowest in the global garment industry and profits often leave the country (1). Ethiopia is also vulnerable to trade decisions, such as the USA suspending its duty-free access in 2022 (1).",
        marks_scheme: "1 mark per explained point with LIDC detail: jobs; exports/foreign income; skills/infrastructure; low wages; profit leakage; vulnerability."
      },
      {
        q: "Explain how physical geography can influence a country's level of development.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Landlocked countries have limited access to international trade without costly overland transport — sub-Saharan Africa contains many landlocked LIDCs (e.g. Mali, Niger, Chad) that face higher trade costs, reducing economic growth (1).\n• Natural hazard risk — countries in disaster-prone regions (e.g. Bangladesh — flooding; Haiti — earthquakes) face repeated economic setbacks as infrastructure and agricultural land is destroyed; recovery costs divert resources from development investment (1).\n• Climate — tropical countries often have hot, humid climates conducive to disease vectors such as malaria mosquitoes; malaria costs Africa an estimated $12 billion/year in lost productivity and healthcare costs, hindering development (1).\n• Natural resources — countries with abundant resources (oil: Saudi Arabia; minerals: Botswana's diamonds) can generate wealth, but the \"resource curse\" shows that resource wealth does not always translate to broad development (1).",
        marks_scheme: "1 mark: landlocked countries face higher trade costs reducing economic growth. 1 mark: natural hazard risk causes repeated economic setbacks diverting resources from development. 1 mark: tropical climate conducive to disease vectors — malaria costs Africa $12 billion/year in lost productivity. 1 mark: natural resources can generate wealth but resource curse shows this does not always translate to broad development."
      },
      {
        q: "Explain the role of international trade in causing and maintaining global development inequalities.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Unequal terms of trade — LIDCs often export raw materials (commodities) and import manufactured goods; commodity prices are volatile and low relative to manufactured products, locking LIDCs in a pattern of low-value production (1).\n• Trade barriers — AC tariffs and subsidies protect their own farmers and industries, preventing LIDCs from competing in valuable markets (e.g. EU agricultural subsidies disadvantage African farmers in EU markets) (1).\n• TNCs and profit repatriation — transnational corporations in LIDCs extract profits back to ACs; limited economic multiplier effect stays in the host country (1).\n• However, trade has also enabled development — East Asian \"Tiger\" economies (South Korea, Taiwan, Singapore) used export-led manufacturing to achieve rapid development; China's trade growth lifted 800 million out of poverty since 1980 (1).",
        marks_scheme: "1 mark: unequal terms of trade — LIDCs export raw materials and import manufactured goods; commodity prices low relative to manufactured products. 1 mark: trade barriers — AC tariffs and subsidies protect own farmers preventing LIDCs competing. 1 mark: TNC profit repatriation — limited economic multiplier stays in host country. 1 mark: trade has also enabled development — East Asian Tigers and China used export-led growth (800 million out of poverty since 1980)."
      },
      {
        q: "Explain how aid can help a country to develop. Refer to a named example.",
        marks: 4, tier: 'amber',
        modelAnswer: "• Emergency/humanitarian aid — provides food, clean water, medicine, and shelter after disasters, preventing loss of life and allowing rapid recovery that maintains development progress (e.g. UN response to 2010 Haiti earthquake, providing emergency aid to 1.5 million people) (1).\n• Tied/bilateral aid — can fund major infrastructure projects (roads, dams, ports) that improve connectivity and economic productivity, though it may benefit donor-country firms rather than local industry (1).\n• Multilateral aid through organisations like the World Bank funds healthcare (e.g. polio eradication — 3 billion children vaccinated; cases reduced 99.9% since 1988) and education, building long-term human capital (1).\n• Microfinance (e.g. Grameen Bank, Bangladesh) provides small loans to entrepreneurs — particularly women — to start businesses, generating income and reducing poverty; 9 million borrowers in Bangladesh alone (1).",
        marks_scheme: "1 mark: emergency aid prevents loss of life after disasters allowing rapid recovery. 1 mark: tied/bilateral aid funds major infrastructure projects improving connectivity and productivity. 1 mark: multilateral aid funds healthcare and education building long-term human capital. 1 mark: microfinance (e.g. Grameen Bank) provides small loans to entrepreneurs especially women, generating income and reducing poverty."
      },
    ],
    red: [
      {
        q: "Assess the extent to which a named LIDC has developed in recent years.",
        marks: 8, tier: 'red',
        modelAnswer: "Ethiopia has made major progress: between 2004 and 2019 it had one of the world's fastest-growing economies, at around 10% a year; poverty fell, life expectancy rose by over 10 years and child mortality more than halved. Investment in industrial parks, roads, the Addis Ababa–Djibouti railway and the Grand Ethiopian Renaissance Dam has improved infrastructure. However, Ethiopia remains an LIDC with GNI per capita of around $1,000 and an HDI of about 0.49. Most people still depend on rain-fed farming, so droughts such as 2015–16 left over 10 million needing food aid, and the Tigray conflict (2020–22) caused huge loss of life and set back development. Overall, Ethiopia has developed significantly from a very low base, but progress is fragile and uneven.",
        marks_scheme: "Level 3 (6–8): balanced assessment with specific LIDC evidence and a supported judgement. Level 2 (3–5): some assessment. Level 1 (1–2): basic points."
      },
      {
        q: "Evaluate the effectiveness of different strategies to reduce the development gap between ACs and LIDCs. [6 marks]",
        marks: 6, tier: 'red',
        modelAnswer: "Aid:\n• Emergency aid saves lives but does not address structural causes of underdevelopment; long-term aid dependency can undermine local industries (e.g. cheap food aid may undercut local farmers) (1).\n• Well-targeted development aid (microfinance, education, healthcare) can be transformative — PEPFAR (US AIDS programme) is estimated to have saved around 25 million lives, mostly in sub-Saharan Africa, although US aid cuts in 2025 threatened its future (1).\nFair Trade:\n• Guarantees higher prices for producers; improves farmers' incomes and community investment in education and healthcare (e.g. Fairtrade coffee co-operatives in Ethiopia receive a guaranteed minimum price plus a premium) — but reaches only a tiny fraction of global trade (1).\nDebt relief:\n• HIPC Initiative wrote off around $76 billion of debt for over 35 countries; freed up government spending for services — e.g. Tanzania used the savings to help abolish primary school fees (1) — but many LIDCs have accumulated new debt, particularly to Chinese lenders (1).\nFDI and trade:\n• Potentially the most powerful driver of development — as shown by China and South-East Asia — but benefits may flow to elites and TNCs rather than the poorest (1).\nConclusion:\n• No single strategy is sufficient; a combination tailored to the specific context of each country, combined with fairer global trade rules and governance improvements, offers the best hope — but fundamental reform of global economic systems is required for sustained reduction in the development gap (1).",
        marks_scheme: "Level 3 (5-6 marks): evaluates multiple strategies (aid, fair trade, debt relief, FDI) with specific evidence and a conclusion about the need for combined approaches. Level 2 (3-4 marks): discusses some strategies with limited evaluation. Level 1 (1-2 marks): basic description of strategies. Credit: PEPFAR saved an estimated 25 million lives; Fairtrade gives Ethiopian farmers a guaranteed minimum price plus premium; HIPC Initiative wrote off $76 billion debt; FDI most powerful development driver but benefits may not reach poorest."
      },
    ],
  },

  /* ── 2.3 UK in the 21st Century */
  '2.3': {
    green: [
      {
        q: "State two reasons why the UK population is ageing.",
        marks: 2, tier: 'green',
        modelAnswer: "• Falling birth rates — fertility is about 1.4–1.5 children per woman (1).\n• Rising life expectancy due to better health care and living standards (1).",
        marks_scheme: "1 mark each: falling birth/fertility rate; longer life expectancy; better health care."
      },
      {
        q: "State two differences between core and peripheral regions in the UK.",
        marks: 2, tier: 'green',
        modelAnswer: "• Core regions such as London have high population densities, while peripheral regions such as the Scottish Highlands have low densities (1).\n• Core regions have more jobs and higher incomes, while peripheral regions have fewer jobs and ageing populations (1).",
        marks_scheme: "1 mark per difference: population density; employment/income; age structure; services/infrastructure."
      },
      {
        q: "State two ways in which the UK's economy has changed since the 1970s.",
        marks: 2, tier: 'green',
        modelAnswer: "• Manufacturing has declined (deindustrialisation) — from about 30% of jobs in the 1970s to under 8% today (1).\n• The tertiary and quaternary sectors have grown — over 80% of jobs are now in services (1).",
        marks_scheme: "1 mark per change: decline of primary/secondary; growth of tertiary/quaternary; more part-time/flexible work; more women in work."
      },
      {
        q: "State two characteristics of the Central Business District (CBD) of a UK city.",
        marks: 2, tier: 'green',
        modelAnswer: "• High land values — the CBD is the most accessible point of the city; competition for land drives prices up, resulting in high-rise buildings to maximise floor space per unit of land (1).\n• High concentration of retail and commercial functions — major department stores, banks, offices, and entertainment venues cluster in the CBD to benefit from maximum customer accessibility (1).\n(Also accept: traffic congestion; pedestrianised shopping streets; low residential population; high daytime footfall.)",
        marks_scheme: "1 mark: high land values — competition for land drives prices up resulting in high-rise buildings. 1 mark: high concentration of retail and commercial functions — shops, banks, offices cluster for maximum customer accessibility."
      },
    ],
    amber: [
      {
        q: "Explain the impacts of an ageing population on the UK.",
        marks: 4, tier: 'amber',
        modelAnswer: "More older people increases demand on the NHS and social care, raising costs (1). The state pension bill rises while there are fewer workers paying taxes per retired person (1). However, older people contribute through volunteering, caring for grandchildren and spending — the \"grey pound\" (1). The government has responded by raising the state pension age, now rising to 67 (1).",
        marks_scheme: "1 mark per explained impact: health/social care; pensions; dependency ratio/taxes; positive contributions; government responses."
      },
      {
        q: "Explain how migration has affected a named UK city.",
        marks: 4, tier: 'amber',
        modelAnswer: "In London, over a third of residents were born outside the UK, giving the city a young, diverse workforce (1). Migrants fill shortages in the NHS, construction and hospitality, supporting the economy (1). Migration has created vibrant cultural areas such as Brick Lane and Southall and over 300 languages are spoken (1). However, rapid population growth has added pressure on housing and school places in some boroughs (1).",
        marks_scheme: "1 mark per explained impact with named city detail: workforce/economy; culture; services; housing pressure; age structure."
      },
      {
        q: "Explain how retailing has changed in UK cities.",
        marks: 4, tier: 'amber',
        modelAnswer: "Out-of-town shopping centres such as Westfield Stratford and Bluewater have drawn shoppers away from town centres because of free parking and large stores (1). Online shopping has grown rapidly, reducing footfall on high streets (1). As a result, many high street shops have closed, leaving empty units (1). Councils are responding by converting shops to homes, cafés, leisure and community spaces (1).",
        marks_scheme: "1 mark per explained change: out-of-town centres; online shopping; high street decline; responses/regeneration."
      },
      {
        q: "Explain the links between urban and rural areas in the UK.",
        marks: 4, tier: 'amber',
        modelAnswer: "Many people live in villages and commute into cities for work, creating daily flows of people (1). Cities depend on rural areas for food, water (from reservoirs) and recreation (1). Rural areas depend on cities for jobs, specialist services such as hospitals, and markets for goods (1). Counter-urbanisation has increased house prices in accessible villages, affecting local people (1).",
        marks_scheme: "1 mark per explained link: commuting; food/water/resources; recreation; services; counter-urbanisation impacts."
      },
    ],
    red: [
      {
        q: "Assess the UK's role in the wider world.",
        marks: 8, tier: 'red',
        modelAnswer: "Politically, the UK is a permanent member of the UN Security Council and a member of the G7, G20, NATO and the Commonwealth, giving it significant global influence. Economically, it is one of the largest economies and London is a leading financial centre, though leaving the EU in 2020 changed its trading relationships. Culturally, the BBC, UK film, music and the Premier League spread British influence worldwide. It has also played a role on global issues, hosting COP26 and committing to net zero by 2050, although its aid budget was cut from 0.7% to 0.5% of GNI in 2021. Overall, the UK remains an important global power, especially in diplomacy, finance and culture, though its relative economic influence has declined.",
        marks_scheme: "Level 3 (6–8): detailed assessment across political, economic, cultural and global roles with a supported judgement. Level 2 (3–5): some detail. Level 1 (1–2): basic points."
      },
      {
        q: "\"The UK in the 21st century is more connected to the wider world than ever before.\" Do you agree?",
        marks: 8, tier: 'red',
        modelAnswer: "The UK is highly connected: London is a global financial centre with Heathrow among the world's busiest airports; over a third of Londoners were born abroad; and UK media such as the BBC and the Premier League reach global audiences. The UK is a permanent member of the UN Security Council and a member of the G7, NATO and the Commonwealth, and it joined the CPTPP trade bloc in 2024. However, leaving the EU in 2020 reduced some links — trade with Europe became more complicated and EU migration fell — and the overseas aid budget was cut. Overall, the UK remains very connected through finance, media, migration and diplomacy, but some of its links with Europe have weakened, so it is more accurate to say its connections have changed rather than simply increased.",
        marks_scheme: "Level 3 (6–8): balanced discussion of economic, cultural, political and migration links, including evidence of weakening links, with a supported judgement. Level 2 (3–5): some discussion. Level 1 (1–2): basic points."
      },
    ],
  },

  /* ── 2.4 Resource Reliance */
  '2.4': {
    green: [
      {
        q: "Define the term \"food security\".",
        marks: 1, tier: 'green',
        modelAnswer: "When all people, at all times, have access to enough safe and nutritious food to lead an active and healthy life (1).",
        marks_scheme: "1 mark: reliable access to sufficient, safe, nutritious food."
      },
      {
        q: "State two reasons why global food consumption is increasing.",
        marks: 2, tier: 'green',
        modelAnswer: "• Population growth — the world population passed 8 billion in 2022 (1).\n• Economic development — wealthier people in EDCs such as China and India eat more, especially meat and dairy (1).",
        marks_scheme: "1 mark each: population growth; economic development/rising incomes; changing diets (meat, processed food); biofuels."
      },
      {
        q: "Give two impacts of food insecurity.",
        marks: 2, tier: 'green',
        modelAnswer: "• Famine — severe food shortages cause starvation and death (1).\n• Undernutrition — causing stunted growth and weakened immune systems (1).\n(Also accept: soil erosion, rising prices, social unrest.)",
        marks_scheme: "1 mark each: famine; undernutrition/malnutrition; soil erosion; rising prices; social unrest."
      },
      {
        q: "State two ways of moving towards a sustainable food supply.",
        marks: 2, tier: 'green',
        modelAnswer: "• Organic farming, which protects soils and wildlife by avoiding chemicals (1).\n• Reducing food waste, so more of the food produced is eaten (1).\n(Also accept: permaculture, urban farming, sustainable fish and meat, seasonal food.)",
        marks_scheme: "1 mark each: organic farming; permaculture; urban farming; sustainable fish/meat; seasonal food; reduced waste and losses."
      },
    ],
    amber: [
      {
        q: "Using a named country, explain the causes of food insecurity.",
        marks: 4, tier: 'amber',
        modelAnswer: "In Tanzania, most farming is rain-fed, so unreliable rainfall and drought reduce harvests (1). Poverty means farmers cannot afford fertilisers or improved seeds, and poor families cannot afford enough nutritious food (1). Poor roads and storage mean that up to 30–40% of some harvests are lost after harvest (1). Population growth increases demand for food and land, while soil erosion reduces fertility (1).",
        marks_scheme: "1 mark per explained cause with named-country detail: climate/rainfall; poverty; infrastructure/storage; population; land degradation."
      },
      {
        q: "Explain how physical and human factors affect food supply.",
        marks: 4, tier: 'amber',
        modelAnswer: "Physical: climate is key — crops need suitable temperatures and reliable rainfall, so droughts such as in the Horn of Africa (2020–23) destroy harvests (1). Pests and disease, such as the East African locust swarms of 2019–20, can wipe out crops (1). Human: conflict destroys farms and disrupts transport, e.g. in Sudan and Yemen (1). Poverty means farmers cannot afford seeds, fertiliser or machinery, keeping yields low (1).",
        marks_scheme: "Up to 2 marks physical (climate, water stress, pests/disease) and 2 marks human (technology, conflict, poverty), with development/examples."
      },
      {
        q: "Explain the advantages and disadvantages of irrigation as a way of increasing food supply.",
        marks: 4, tier: 'amber',
        modelAnswer: "Advantages: irrigation allows crops to be grown in dry areas and in dry seasons, increasing yields (1), and can allow more than one harvest a year, improving food security (1). Disadvantages: over-irrigation can cause salinisation, where salts build up in the soil and reduce fertility (1), and it uses large amounts of water, depleting rivers and aquifers, e.g. the shrinking Aral Sea (1).",
        marks_scheme: "2 marks for advantages and 2 for disadvantages, with explanation."
      },
      {
        q: "Describe a large-scale agricultural development and its advantages and disadvantages.",
        marks: 4, tier: 'amber',
        modelAnswer: "Thanet Earth in Kent is the UK's largest greenhouse complex (about 90 ha), growing tomatoes, cucumbers and peppers hydroponically (1). Advantages: it produces food all year round, reducing imports and food miles, and creates over 500 jobs (1); it collects rainwater and generates its own heat and power (1). Disadvantages: it was built on greenfield farmland, its gas-fired plants release emissions, and it causes light pollution (1).",
        marks_scheme: "1 mark for description; up to 2 marks advantages; up to 2 marks disadvantages (max 4)."
      },
    ],
    red: [
      {
        q: "Evaluate a large-scale and a small-scale approach to increasing food security in a named country.",
        marks: 8, tier: 'red',
        modelAnswer: "In Tanzania, the large-scale SAGCOT scheme brings together government, investors and TNCs to develop commercial farming, irrigation and processing in the south. It could greatly increase production, create jobs and raise incomes, but critics warn it could lead to land grabs that push smallholders off their land, and benefits may go mainly to companies. Small-scale approaches such as hermetic storage bags and conservation agriculture are cheap and directly help the poorest farmers: storage bags cut post-harvest losses to pests, and conservation agriculture protects soil and moisture. However, these schemes spread slowly and their impact on national food supply is limited. Overall, small-scale methods are more sustainable and equitable, while large-scale schemes can raise output faster; combining both, with protection for smallholders' land rights, would be most effective.",
        marks_scheme: "Level 3 (6–8): balanced evaluation of a named large-scale and small-scale approach with a supported judgement. Level 2 (3–5): some evaluation. Level 1 (1–2): description."
      },
      {
        q: "Evaluate the strategies used to move towards a sustainable food supply.",
        marks: 6, tier: 'red',
        modelAnswer: "Organic farming protects soil and wildlife but produces lower yields and more expensive food, so it may not feed growing populations. Permaculture and urban farming (e.g. Incredible Edible Todmorden) reduce food miles and engage communities, but operate on a small scale. Sustainable fish and meat schemes such as the Marine Stewardship Council label help protect fish stocks, although they rely on consumers choosing them. Reducing waste is potentially the most effective strategy, because about a third of food is wasted — campaigns such as WRAP's \"Love Food Hate Waste\" help. Overall, reducing waste and changing diets have the greatest potential, but a combination of strategies is needed.",
        marks_scheme: "Level 3 (5–6): evaluation of several strategies with examples and a supported judgement. Level 2 (3–4): some evaluation. Level 1 (1–2): description only."
      },
    ],
  },

  /* ── 3.1 Geographical Exploration and Fieldwork */
  '3.1': {
    green: [
      {
        q: "Define the term \"primary data\".",
        marks: 1, tier: 'green',
        modelAnswer: "Data that you collect yourself, first-hand, during fieldwork (1).",
        marks_scheme: "1 mark: data collected first-hand by the investigator."
      },
      {
        q: "Name two sampling methods used in fieldwork.",
        marks: 2, tier: 'green',
        modelAnswer: "• Systematic sampling — taking samples at regular intervals (1).\n• Random sampling — every item has an equal chance of being selected (1).\n(Also accept: stratified sampling.)",
        marks_scheme: "1 mark each: random; systematic; stratified."
      },
      {
        q: "State two risks of carrying out fieldwork in a river and how each could be reduced.",
        marks: 2, tier: 'green',
        modelAnswer: "• Slipping or drowning — wear wellingtons, work in groups and avoid deep or fast water (1).\n• Waterborne disease such as Weil's disease — cover cuts and wash hands afterwards (1).",
        marks_scheme: "1 mark per risk with a matching reduction: drowning/slipping; cold water/hypothermia; disease; weather."
      },
      {
        q: "Give one advantage and one disadvantage of using a questionnaire.",
        marks: 2, tier: 'green',
        modelAnswer: "• Advantage: it gathers people's opinions and experiences, which cannot be measured with equipment (1).\n• Disadvantage: people may refuse, give untrue answers, or the sample may not be representative (1).",
        marks_scheme: "1 mark advantage; 1 mark disadvantage."
      },
    ],
    amber: [
      {
        q: "For one of your fieldwork enquiries, explain why the location was suitable.",
        marks: 4, tier: 'amber',
        modelAnswer: "For our river enquiry on Carding Mill Valley in Shropshire, the stream was shallow and slow-flowing for most of its length, so it was safe for students to stand in (1). It had good access via footpaths and a car park, so sites could be reached easily (1). The stream had a clear change from source to lower course over a short distance, so we could test the Bradshaw model (1). It was small enough to measure width, depth and velocity across the channel in one day (1).",
        marks_scheme: "1 mark per developed reason, linked to the named enquiry: safety; accessibility; shows the features being investigated; links to theory; practicality."
      },
      {
        q: "Explain why it is important to use a sampling strategy in fieldwork.",
        marks: 4, tier: 'amber',
        modelAnswer: "It is usually impossible to measure everything, so sampling makes data collection manageable in the time available (1). A good sampling strategy reduces bias, for example random sampling of pebbles avoids choosing only the largest or most interesting ones (1). Systematic sampling at regular intervals ensures the whole area is covered evenly, showing change with distance (1). Stratified sampling ensures that different groups are represented in proportion, making results more representative and conclusions more reliable (1).",
        marks_scheme: "1 mark per explained point: practicality; reduces bias; representative; even coverage; reliable conclusions."
      },
      {
        q: "Describe how you processed and presented the data from one of your enquiries, and justify your choices.",
        marks: 4, tier: 'amber',
        modelAnswer: "In our river enquiry, we drew cross-sections for each site using width and depth measurements, which showed how the channel shape changed downstream (1). We plotted scatter graphs of distance downstream against width and velocity, adding lines of best fit (1). Scatter graphs were suitable because they show whether there is a relationship between two variables and how strong it is (1). We calculated the mean velocity at each site from three float timings, which reduced the effect of errors (1).",
        marks_scheme: "1 mark per method with justification, linked to the enquiry: graphs/maps chosen; appropriate statistics; reasons for suitability."
      },
      {
        q: "Evaluate the reliability of the data you collected in one of your enquiries.",
        marks: 4, tier: 'amber',
        modelAnswer: "Our data was only partly reliable. We visited only six sites on one day, so the results reflect the flow conditions on that day and may not be typical (1). Float measurements could be affected by the float getting stuck or blown by wind, although we repeated each reading three times and calculated a mean (1). Different groups measured depth slightly differently, introducing human error (1). To improve reliability we could use a flow meter, increase the number of sites and repeat the investigation in different seasons (1).",
        marks_scheme: "1 mark per evaluative point: sample size; timing; equipment limitations; human error; improvement suggested."
      },
    ],
    red: [
      {
        q: "For one of your fieldwork enquiries, evaluate the effectiveness of your data collection methods in helping you to reach a conclusion.",
        marks: 9, tier: 'red',
        modelAnswer: "Our human enquiry investigated how environmental quality changed from the centre of Bristol to the suburbs. We used systematic sampling every 500 m along a transect, which covered the area evenly and showed change with distance, helping answer our question. The environmental quality survey gave a numerical score for each site, but it was subjective — different students scored litter and building condition differently — so we agreed criteria and averaged group scores. Pedestrian counts were taken for five minutes at each site, but counts were affected by the time of day, so central sites at lunchtime were higher than they would otherwise be. Questionnaires gave useful views on safety and services, but the sample of 10 per site was small and people who agreed to answer may not be representative. Secondary data from the Index of Multiple Deprivation supported the pattern we found, increasing confidence. Overall, the methods allowed us to conclude that environmental quality generally improved away from the centre, but the subjectivity of the survey and small samples mean the conclusion is tentative.",
        marks_scheme: "Level 3 (7–9): detailed evaluation of specific methods from a named enquiry, strengths and limitations explicitly linked to reaching a conclusion, with a judgement. Level 2 (4–6): some evaluation linked to the enquiry. Level 1 (1–3): description of methods with little evaluation."
      },
      {
        q: "\"The most sustainable option is always the best choice.\" Discuss.",
        marks: 8, tier: 'red',
        modelAnswer: "Sustainable options balance economic, social and environmental needs and protect resources for future generations, so they often provide the best long-term outcomes — for example, sustainable forestry can provide timber and jobs while keeping ecosystem services. However, the most sustainable option may be more expensive, slower to deliver benefits, or fail to meet urgent needs such as jobs or energy supply for poor communities. Some stakeholders, such as local people needing income now, may prefer options with faster economic gains. Overall, sustainability is a strong basis for decisions, but the best choice must also be realistic and acceptable to stakeholders, so the most sustainable option is usually, but not always, the best.",
        marks_scheme: "Level 3 (6–8): balanced discussion with examples and a supported conclusion. Level 2 (3–5): some discussion. Level 1 (1–2): basic points."
      },
    ],
  },

};

if (typeof window !== 'undefined') window.GEOGRAPHY_OCR_GCSE_WRITTEN = GEOGRAPHY_OCR_GCSE_WRITTEN;
if (typeof module !== 'undefined') module.exports = GEOGRAPHY_OCR_GCSE_WRITTEN;
